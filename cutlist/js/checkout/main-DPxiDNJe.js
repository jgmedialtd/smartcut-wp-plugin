var $b = Object.defineProperty;
var Bb = (e, t, n) => t in e ? $b(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var m = (e, t, n) => Bb(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Cc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ae = {}, ns = [], bn = () => {
}, jb = () => !1, Go = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Tc = (e) => e.startsWith("onUpdate:"), nt = Object.assign, Ac = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, qb = Object.prototype.hasOwnProperty, Ee = (e, t) => qb.call(e, t), ce = Array.isArray, is = (e) => Ho(e) === "[object Map]", up = (e) => Ho(e) === "[object Set]", le = (e) => typeof e == "function", Ke = (e) => typeof e == "string", li = (e) => typeof e == "symbol", Re = (e) => e !== null && typeof e == "object", fp = (e) => (Re(e) || le(e)) && le(e.then) && le(e.catch), hp = Object.prototype.toString, Ho = (e) => hp.call(e), Ub = (e) => Ho(e).slice(8, -1), dp = (e) => Ho(e) === "[object Object]", Oc = (e) => Ke(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Vs = /* @__PURE__ */ Cc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ko = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Wb = /-(\w)/g, zt = Ko(
  (e) => e.replace(Wb, (t, n) => n ? n.toUpperCase() : "")
), zb = /\B([A-Z])/g, ji = Ko(
  (e) => e.replace(zb, "-$1").toLowerCase()
), Yo = Ko((e) => e.charAt(0).toUpperCase() + e.slice(1)), Aa = Ko(
  (e) => e ? `on${Yo(e)}` : ""
), ti = (e, t) => !Object.is(e, t), Oa = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, pp = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, Vb = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let kf;
const Xo = () => kf || (kf = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function He(e) {
  if (ce(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], s = Ke(i) ? Yb(i) : He(i);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (Ke(e) || Re(e))
    return e;
}
const Gb = /;(?![^(]*\))/g, Hb = /:([^]+)/, Kb = /\/\*[^]*?\*\//g;
function Yb(e) {
  const t = {};
  return e.replace(Kb, "").split(Gb).forEach((n) => {
    if (n) {
      const i = n.split(Hb);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function xt(e) {
  let t = "";
  if (Ke(e))
    t = e;
  else if (ce(e))
    for (let n = 0; n < e.length; n++) {
      const i = xt(e[n]);
      i && (t += i + " ");
    }
  else if (Re(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Xb = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Jb = /* @__PURE__ */ Cc(Xb);
function gp(e) {
  return !!e || e === "";
}
const mp = (e) => !!(e && e.__v_isRef === !0), Me = (e) => Ke(e) ? e : e == null ? "" : ce(e) || Re(e) && (e.toString === hp || !le(e.toString)) ? mp(e) ? Me(e.value) : JSON.stringify(e, yp, 2) : String(e), yp = (e, t) => mp(t) ? yp(e, t.value) : is(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, s], r) => (n[Pa(i, r) + " =>"] = s, n),
    {}
  )
} : up(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Pa(n))
} : li(t) ? Pa(t) : Re(t) && !ce(t) && !dp(t) ? String(t) : t, Pa = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    li(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let mt;
class bp {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = mt, !t && mt && (this.index = (mt.scopes || (mt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = mt;
      try {
        return mt = this, t();
      } finally {
        mt = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    mt = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    mt = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, i;
      for (n = 0, i = this.effects.length; n < i; n++)
        this.effects[n].stop();
      for (n = 0, i = this.cleanups.length; n < i; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, i = this.scopes.length; n < i; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Qb(e) {
  return new bp(e);
}
function wp() {
  return mt;
}
function Zb(e, t = !1) {
  mt && mt.cleanups.push(e);
}
let Ne;
const Na = /* @__PURE__ */ new WeakSet();
class vp {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, mt && mt.active && mt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Na.has(this) && (Na.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || xp(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ef(this), Sp(this);
    const t = Ne, n = Zt;
    Ne = this, Zt = !0;
    try {
      return this.fn();
    } finally {
      kp(this), Ne = t, Zt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ic(t);
      this.deps = this.depsTail = void 0, Ef(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Na.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ul(this) && this.run();
  }
  get dirty() {
    return ul(this);
  }
}
let _p = 0, Gs, Hs;
function xp(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Hs, Hs = e;
    return;
  }
  e.next = Gs, Gs = e;
}
function Pc() {
  _p++;
}
function Nc() {
  if (--_p > 0)
    return;
  if (Hs) {
    let t = Hs;
    for (Hs = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Gs; ) {
    let t = Gs;
    for (Gs = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (i) {
          e || (e = i);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Sp(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function kp(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const s = i.prevDep;
    i.version === -1 ? (i === n && (n = s), Ic(i), e0(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = s;
  }
  e.deps = t, e.depsTail = n;
}
function ul(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ep(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ep(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ir))
    return;
  e.globalVersion = ir;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !ul(e)) {
    e.flags &= -3;
    return;
  }
  const n = Ne, i = Zt;
  Ne = e, Zt = !0;
  try {
    Sp(e);
    const s = e.fn(e._value);
    (t.version === 0 || ti(s, e._value)) && (e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    Ne = n, Zt = i, kp(e), e.flags &= -3;
  }
}
function Ic(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: s } = e;
  if (i && (i.nextSub = s, e.prevSub = void 0), s && (s.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Ic(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function e0(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Zt = !0;
const Cp = [];
function ci() {
  Cp.push(Zt), Zt = !1;
}
function ui() {
  const e = Cp.pop();
  Zt = e === void 0 ? !0 : e;
}
function Ef(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Ne;
    Ne = void 0;
    try {
      t();
    } finally {
      Ne = n;
    }
  }
}
let ir = 0;
class t0 {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Mc {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!Ne || !Zt || Ne === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ne)
      n = this.activeLink = new t0(Ne, this), Ne.deps ? (n.prevDep = Ne.depsTail, Ne.depsTail.nextDep = n, Ne.depsTail = n) : Ne.deps = Ne.depsTail = n, Tp(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = Ne.depsTail, n.nextDep = void 0, Ne.depsTail.nextDep = n, Ne.depsTail = n, Ne.deps === n && (Ne.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, ir++, this.notify(t);
  }
  notify(t) {
    Pc();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Nc();
    }
  }
}
function Tp(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        Tp(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const fl = /* @__PURE__ */ new WeakMap(), ki = Symbol(
  ""
), hl = Symbol(
  ""
), sr = Symbol(
  ""
);
function lt(e, t, n) {
  if (Zt && Ne) {
    let i = fl.get(e);
    i || fl.set(e, i = /* @__PURE__ */ new Map());
    let s = i.get(n);
    s || (i.set(n, s = new Mc()), s.map = i, s.key = n), s.track();
  }
}
function In(e, t, n, i, s, r) {
  const o = fl.get(e);
  if (!o) {
    ir++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (Pc(), t === "clear")
    o.forEach(a);
  else {
    const l = ce(e), u = l && Oc(n);
    if (l && n === "length") {
      const c = Number(i);
      o.forEach((f, h) => {
        (h === "length" || h === sr || !li(h) && h >= c) && a(f);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && a(o.get(n)), u && a(o.get(sr)), t) {
        case "add":
          l ? u && a(o.get("length")) : (a(o.get(ki)), is(e) && a(o.get(hl)));
          break;
        case "delete":
          l || (a(o.get(ki)), is(e) && a(o.get(hl)));
          break;
        case "set":
          is(e) && a(o.get(ki));
          break;
      }
  }
  Nc();
}
function Vi(e) {
  const t = ke(e);
  return t === e ? t : (lt(t, "iterate", sr), Wt(e) ? t : t.map(ct));
}
function Jo(e) {
  return lt(e = ke(e), "iterate", sr), e;
}
const n0 = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ia(this, Symbol.iterator, ct);
  },
  concat(...e) {
    return Vi(this).concat(
      ...e.map((t) => ce(t) ? Vi(t) : t)
    );
  },
  entries() {
    return Ia(this, "entries", (e) => (e[1] = ct(e[1]), e));
  },
  every(e, t) {
    return Tn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Tn(this, "filter", e, t, (n) => n.map(ct), arguments);
  },
  find(e, t) {
    return Tn(this, "find", e, t, ct, arguments);
  },
  findIndex(e, t) {
    return Tn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Tn(this, "findLast", e, t, ct, arguments);
  },
  findLastIndex(e, t) {
    return Tn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Tn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ma(this, "includes", e);
  },
  indexOf(...e) {
    return Ma(this, "indexOf", e);
  },
  join(e) {
    return Vi(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Ma(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Tn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ps(this, "pop");
  },
  push(...e) {
    return Ps(this, "push", e);
  },
  reduce(e, ...t) {
    return Cf(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Cf(this, "reduceRight", e, t);
  },
  shift() {
    return Ps(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Tn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ps(this, "splice", e);
  },
  toReversed() {
    return Vi(this).toReversed();
  },
  toSorted(e) {
    return Vi(this).toSorted(e);
  },
  toSpliced(...e) {
    return Vi(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ps(this, "unshift", e);
  },
  values() {
    return Ia(this, "values", ct);
  }
};
function Ia(e, t, n) {
  const i = Jo(e), s = i[t]();
  return i !== e && !Wt(e) && (s._next = s.next, s.next = () => {
    const r = s._next();
    return r.value && (r.value = n(r.value)), r;
  }), s;
}
const i0 = Array.prototype;
function Tn(e, t, n, i, s, r) {
  const o = Jo(e), a = o !== e && !Wt(e), l = o[t];
  if (l !== i0[t]) {
    const f = l.apply(e, r);
    return a ? ct(f) : f;
  }
  let u = n;
  o !== e && (a ? u = function(f, h) {
    return n.call(this, ct(f), h, e);
  } : n.length > 2 && (u = function(f, h) {
    return n.call(this, f, h, e);
  }));
  const c = l.call(o, u, i);
  return a && s ? s(c) : c;
}
function Cf(e, t, n, i) {
  const s = Jo(e);
  let r = n;
  return s !== e && (Wt(e) ? n.length > 3 && (r = function(o, a, l) {
    return n.call(this, o, a, l, e);
  }) : r = function(o, a, l) {
    return n.call(this, o, ct(a), l, e);
  }), s[t](r, ...i);
}
function Ma(e, t, n) {
  const i = ke(e);
  lt(i, "iterate", sr);
  const s = i[t](...n);
  return (s === -1 || s === !1) && $c(n[0]) ? (n[0] = ke(n[0]), i[t](...n)) : s;
}
function Ps(e, t, n = []) {
  ci(), Pc();
  const i = ke(e)[t].apply(e, n);
  return Nc(), ui(), i;
}
const s0 = /* @__PURE__ */ Cc("__proto__,__v_isRef,__isVue"), Ap = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(li)
);
function r0(e) {
  li(e) || (e = String(e));
  const t = ke(this);
  return lt(t, "has", e), t.hasOwnProperty(e);
}
class Op {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, i) {
    const s = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return i === (s ? r ? g0 : Mp : r ? Ip : Np).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const o = ce(t);
    if (!s) {
      let l;
      if (o && (l = n0[n]))
        return l;
      if (n === "hasOwnProperty")
        return r0;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      rt(t) ? t : i
    );
    return (li(n) ? Ap.has(n) : s0(n)) || (s || lt(t, "get", n), r) ? a : rt(a) ? o && Oc(n) ? a : a.value : Re(a) ? s ? Rc(a) : Dc(a) : a;
  }
}
class Pp extends Op {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, s) {
    let r = t[n];
    if (!this._isShallow) {
      const l = Ni(r);
      if (!Wt(i) && !Ni(i) && (r = ke(r), i = ke(i)), !ce(t) && rt(r) && !rt(i))
        return l ? !1 : (r.value = i, !0);
    }
    const o = ce(t) && Oc(n) ? Number(n) < t.length : Ee(t, n), a = Reflect.set(
      t,
      n,
      i,
      rt(t) ? t : s
    );
    return t === ke(s) && (o ? ti(i, r) && In(t, "set", n, i) : In(t, "add", n, i)), a;
  }
  deleteProperty(t, n) {
    const i = Ee(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && i && In(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!li(n) || !Ap.has(n)) && lt(t, "has", n), i;
  }
  ownKeys(t) {
    return lt(
      t,
      "iterate",
      ce(t) ? "length" : ki
    ), Reflect.ownKeys(t);
  }
}
class o0 extends Op {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const a0 = /* @__PURE__ */ new Pp(), l0 = /* @__PURE__ */ new o0(), c0 = /* @__PURE__ */ new Pp(!0);
const dl = (e) => e, Pr = (e) => Reflect.getPrototypeOf(e);
function u0(e, t, n) {
  return function(...i) {
    const s = this.__v_raw, r = ke(s), o = is(r), a = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = s[e](...i), c = n ? dl : t ? pl : ct;
    return !t && lt(
      r,
      "iterate",
      l ? hl : ki
    ), {
      // iterator protocol
      next() {
        const { value: f, done: h } = u.next();
        return h ? { value: f, done: h } : {
          value: a ? [c(f[0]), c(f[1])] : c(f),
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
function Nr(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function f0(e, t) {
  const n = {
    get(s) {
      const r = this.__v_raw, o = ke(r), a = ke(s);
      e || (ti(s, a) && lt(o, "get", s), lt(o, "get", a));
      const { has: l } = Pr(o), u = t ? dl : e ? pl : ct;
      if (l.call(o, s))
        return u(r.get(s));
      if (l.call(o, a))
        return u(r.get(a));
      r !== o && r.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && lt(ke(s), "iterate", ki), Reflect.get(s, "size", s);
    },
    has(s) {
      const r = this.__v_raw, o = ke(r), a = ke(s);
      return e || (ti(s, a) && lt(o, "has", s), lt(o, "has", a)), s === a ? r.has(s) : r.has(s) || r.has(a);
    },
    forEach(s, r) {
      const o = this, a = o.__v_raw, l = ke(a), u = t ? dl : e ? pl : ct;
      return !e && lt(l, "iterate", ki), a.forEach((c, f) => s.call(r, u(c), u(f), o));
    }
  };
  return nt(
    n,
    e ? {
      add: Nr("add"),
      set: Nr("set"),
      delete: Nr("delete"),
      clear: Nr("clear")
    } : {
      add(s) {
        !t && !Wt(s) && !Ni(s) && (s = ke(s));
        const r = ke(this);
        return Pr(r).has.call(r, s) || (r.add(s), In(r, "add", s, s)), this;
      },
      set(s, r) {
        !t && !Wt(r) && !Ni(r) && (r = ke(r));
        const o = ke(this), { has: a, get: l } = Pr(o);
        let u = a.call(o, s);
        u || (s = ke(s), u = a.call(o, s));
        const c = l.call(o, s);
        return o.set(s, r), u ? ti(r, c) && In(o, "set", s, r) : In(o, "add", s, r), this;
      },
      delete(s) {
        const r = ke(this), { has: o, get: a } = Pr(r);
        let l = o.call(r, s);
        l || (s = ke(s), l = o.call(r, s)), a && a.call(r, s);
        const u = r.delete(s);
        return l && In(r, "delete", s, void 0), u;
      },
      clear() {
        const s = ke(this), r = s.size !== 0, o = s.clear();
        return r && In(
          s,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    n[s] = u0(s, e, t);
  }), n;
}
function Lc(e, t) {
  const n = f0(e, t);
  return (i, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? i : Reflect.get(
    Ee(n, s) && s in i ? n : i,
    s,
    r
  );
}
const h0 = {
  get: /* @__PURE__ */ Lc(!1, !1)
}, d0 = {
  get: /* @__PURE__ */ Lc(!1, !0)
}, p0 = {
  get: /* @__PURE__ */ Lc(!0, !1)
};
const Np = /* @__PURE__ */ new WeakMap(), Ip = /* @__PURE__ */ new WeakMap(), Mp = /* @__PURE__ */ new WeakMap(), g0 = /* @__PURE__ */ new WeakMap();
function m0(e) {
  switch (e) {
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
function y0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : m0(Ub(e));
}
function Dc(e) {
  return Ni(e) ? e : Fc(
    e,
    !1,
    a0,
    h0,
    Np
  );
}
function b0(e) {
  return Fc(
    e,
    !1,
    c0,
    d0,
    Ip
  );
}
function Rc(e) {
  return Fc(
    e,
    !0,
    l0,
    p0,
    Mp
  );
}
function Fc(e, t, n, i, s) {
  if (!Re(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const o = y0(e);
  if (o === 0)
    return e;
  const a = new Proxy(
    e,
    o === 2 ? i : n
  );
  return s.set(e, a), a;
}
function ss(e) {
  return Ni(e) ? ss(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ni(e) {
  return !!(e && e.__v_isReadonly);
}
function Wt(e) {
  return !!(e && e.__v_isShallow);
}
function $c(e) {
  return e ? !!e.__v_raw : !1;
}
function ke(e) {
  const t = e && e.__v_raw;
  return t ? ke(t) : e;
}
function Qo(e) {
  return !Ee(e, "__v_skip") && Object.isExtensible(e) && pp(e, "__v_skip", !0), e;
}
const ct = (e) => Re(e) ? Dc(e) : e, pl = (e) => Re(e) ? Rc(e) : e;
function rt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function rs(e) {
  return Lp(e, !1);
}
function Qn(e) {
  return Lp(e, !0);
}
function Lp(e, t) {
  return rt(e) ? e : new w0(e, t);
}
class w0 {
  constructor(t, n) {
    this.dep = new Mc(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : ke(t), this._value = n ? t : ct(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || Wt(t) || Ni(t);
    t = i ? t : ke(t), ti(t, n) && (this._rawValue = t, this._value = i ? t : ct(t), this.dep.trigger());
  }
}
function Dp(e) {
  return rt(e) ? e.value : e;
}
const v0 = {
  get: (e, t, n) => t === "__v_raw" ? e : Dp(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const s = e[t];
    return rt(s) && !rt(n) ? (s.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function Rp(e) {
  return ss(e) ? e : new Proxy(e, v0);
}
class _0 {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Mc(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ir - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Ne !== this)
      return xp(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ep(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function x0(e, t, n = !1) {
  let i, s;
  return le(e) ? i = e : (i = e.get, s = e.set), new _0(i, s, n);
}
const Ir = {}, oo = /* @__PURE__ */ new WeakMap();
let wi;
function S0(e, t = !1, n = wi) {
  if (n) {
    let i = oo.get(n);
    i || oo.set(n, i = []), i.push(e);
  }
}
function k0(e, t, n = Ae) {
  const { immediate: i, deep: s, once: r, scheduler: o, augmentJob: a, call: l } = n, u = (b) => s ? b : Wt(b) || s === !1 || s === 0 ? Mn(b, 1) : Mn(b);
  let c, f, h, d, p = !1, w = !1;
  if (rt(e) ? (f = () => e.value, p = Wt(e)) : ss(e) ? (f = () => u(e), p = !0) : ce(e) ? (w = !0, p = e.some((b) => ss(b) || Wt(b)), f = () => e.map((b) => {
    if (rt(b))
      return b.value;
    if (ss(b))
      return u(b);
    if (le(b))
      return l ? l(b, 2) : b();
  })) : le(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
    if (h) {
      ci();
      try {
        h();
      } finally {
        ui();
      }
    }
    const b = wi;
    wi = c;
    try {
      return l ? l(e, 3, [d]) : e(d);
    } finally {
      wi = b;
    }
  } : f = bn, t && s) {
    const b = f, A = s === !0 ? 1 / 0 : s;
    f = () => Mn(b(), A);
  }
  const E = wp(), v = () => {
    c.stop(), E && Ac(E.effects, c);
  };
  if (r && t) {
    const b = t;
    t = (...A) => {
      b(...A), v();
    };
  }
  let k = w ? new Array(e.length).fill(Ir) : Ir;
  const g = (b) => {
    if (!(!(c.flags & 1) || !c.dirty && !b))
      if (t) {
        const A = c.run();
        if (s || p || (w ? A.some((N, L) => ti(N, k[L])) : ti(A, k))) {
          h && h();
          const N = wi;
          wi = c;
          try {
            const L = [
              A,
              // pass undefined as the old value when it's changed for the first time
              k === Ir ? void 0 : w && k[0] === Ir ? [] : k,
              d
            ];
            l ? l(t, 3, L) : (
              // @ts-expect-error
              t(...L)
            ), k = A;
          } finally {
            wi = N;
          }
        }
      } else
        c.run();
  };
  return a && a(g), c = new vp(f), c.scheduler = o ? () => o(g, !1) : g, d = (b) => S0(b, !1, c), h = c.onStop = () => {
    const b = oo.get(c);
    if (b) {
      if (l)
        l(b, 4);
      else
        for (const A of b) A();
      oo.delete(c);
    }
  }, t ? i ? g(!0) : k = c.run() : o ? o(g.bind(null, !0), !0) : c.run(), v.pause = c.pause.bind(c), v.resume = c.resume.bind(c), v.stop = v, v;
}
function Mn(e, t = 1 / 0, n) {
  if (t <= 0 || !Re(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, rt(e))
    Mn(e.value, t, n);
  else if (ce(e))
    for (let i = 0; i < e.length; i++)
      Mn(e[i], t, n);
  else if (up(e) || is(e))
    e.forEach((i) => {
      Mn(i, t, n);
    });
  else if (dp(e)) {
    for (const i in e)
      Mn(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && Mn(e[i], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function pr(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (s) {
    gr(s, t, n);
  }
}
function xn(e, t, n, i) {
  if (le(e)) {
    const s = pr(e, t, n, i);
    return s && fp(s) && s.catch((r) => {
      gr(r, t, n);
    }), s;
  }
  if (ce(e)) {
    const s = [];
    for (let r = 0; r < e.length; r++)
      s.push(xn(e[r], t, n, i));
    return s;
  }
}
function gr(e, t, n, i = !0) {
  const s = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || Ae;
  if (t) {
    let a = t.parent;
    const l = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const c = a.ec;
      if (c) {
        for (let f = 0; f < c.length; f++)
          if (c[f](e, l, u) === !1)
            return;
      }
      a = a.parent;
    }
    if (r) {
      ci(), pr(r, null, 10, [
        e,
        l,
        u
      ]), ui();
      return;
    }
  }
  E0(e, n, s, i, o);
}
function E0(e, t, n, i = !0, s = !1) {
  if (s)
    throw e;
  console.error(e);
}
const yt = [];
let fn = -1;
const os = [];
let Xn = null, Hi = 0;
const Fp = /* @__PURE__ */ Promise.resolve();
let ao = null;
function Bc(e) {
  const t = ao || Fp;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function C0(e) {
  let t = fn + 1, n = yt.length;
  for (; t < n; ) {
    const i = t + n >>> 1, s = yt[i], r = rr(s);
    r < e || r === e && s.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function jc(e) {
  if (!(e.flags & 1)) {
    const t = rr(e), n = yt[yt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= rr(n) ? yt.push(e) : yt.splice(C0(t), 0, e), e.flags |= 1, $p();
  }
}
function $p() {
  ao || (ao = Fp.then(jp));
}
function T0(e) {
  ce(e) ? os.push(...e) : Xn && e.id === -1 ? Xn.splice(Hi + 1, 0, e) : e.flags & 1 || (os.push(e), e.flags |= 1), $p();
}
function Tf(e, t, n = fn + 1) {
  for (; n < yt.length; n++) {
    const i = yt[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      yt.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Bp(e) {
  if (os.length) {
    const t = [...new Set(os)].sort(
      (n, i) => rr(n) - rr(i)
    );
    if (os.length = 0, Xn) {
      Xn.push(...t);
      return;
    }
    for (Xn = t, Hi = 0; Hi < Xn.length; Hi++) {
      const n = Xn[Hi];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Xn = null, Hi = 0;
  }
}
const rr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function jp(e) {
  try {
    for (fn = 0; fn < yt.length; fn++) {
      const t = yt[fn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), pr(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; fn < yt.length; fn++) {
      const t = yt[fn];
      t && (t.flags &= -2);
    }
    fn = -1, yt.length = 0, Bp(), ao = null, (yt.length || os.length) && jp();
  }
}
let St = null, qp = null;
function lo(e) {
  const t = St;
  return St = e, qp = e && e.type.__scopeId || null, t;
}
function A0(e, t = St, n) {
  if (!t || e._n)
    return e;
  const i = (...s) => {
    i._d && Ff(-1);
    const r = lo(t);
    let o;
    try {
      o = e(...s);
    } finally {
      lo(r), i._d && Ff(1);
    }
    return o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Up(e, t) {
  if (St === null)
    return e;
  const n = na(St), i = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [r, o, a, l = Ae] = t[s];
    r && (le(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Mn(o), i.push({
      dir: r,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: a,
      modifiers: l
    }));
  }
  return e;
}
function pi(e, t, n, i) {
  const s = e.dirs, r = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    r && (a.oldValue = r[o].value);
    let l = a.dir[i];
    l && (ci(), xn(l, n, 8, [
      e.el,
      a,
      e,
      t
    ]), ui());
  }
}
const O0 = Symbol("_vte"), P0 = (e) => e.__isTeleport;
function qc(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, qc(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function En(e, t) {
  return le(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    nt({ name: e.name }, t, { setup: e })
  ) : e;
}
function Uc(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function gl(e, t, n, i, s = !1) {
  if (ce(e)) {
    e.forEach(
      (p, w) => gl(
        p,
        t && (ce(t) ? t[w] : t),
        n,
        i,
        s
      )
    );
    return;
  }
  if (Ks(i) && !s)
    return;
  const r = i.shapeFlag & 4 ? na(i.component) : i.el, o = s ? null : r, { i: a, r: l } = e, u = t && t.r, c = a.refs === Ae ? a.refs = {} : a.refs, f = a.setupState, h = ke(f), d = f === Ae ? () => !1 : (p) => Ee(h, p);
  if (u != null && u !== l && (Ke(u) ? (c[u] = null, d(u) && (f[u] = null)) : rt(u) && (u.value = null)), le(l))
    pr(l, a, 12, [o, c]);
  else {
    const p = Ke(l), w = rt(l);
    if (p || w) {
      const E = () => {
        if (e.f) {
          const v = p ? d(l) ? f[l] : c[l] : l.value;
          s ? ce(v) && Ac(v, r) : ce(v) ? v.includes(r) || v.push(r) : p ? (c[l] = [r], d(l) && (f[l] = c[l])) : (l.value = [r], e.k && (c[e.k] = l.value));
        } else p ? (c[l] = o, d(l) && (f[l] = o)) : w && (l.value = o, e.k && (c[e.k] = o));
      };
      o ? (E.id = -1, Nt(E, n)) : E();
    }
  }
}
const Af = (e) => e.nodeType === 8;
Xo().requestIdleCallback;
Xo().cancelIdleCallback;
function N0(e, t) {
  if (Af(e) && e.data === "[") {
    let n = 1, i = e.nextSibling;
    for (; i; ) {
      if (i.nodeType === 1) {
        if (t(i) === !1)
          break;
      } else if (Af(i))
        if (i.data === "]") {
          if (--n === 0) break;
        } else i.data === "[" && n++;
      i = i.nextSibling;
    }
  } else
    t(e);
}
const Ks = (e) => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function mr(e) {
  le(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: i,
    delay: s = 200,
    hydrate: r,
    timeout: o,
    // undefined = never times out
    suspensible: a = !0,
    onError: l
  } = e;
  let u = null, c, f = 0;
  const h = () => (f++, u = null, d()), d = () => {
    let p;
    return u || (p = u = t().catch((w) => {
      if (w = w instanceof Error ? w : new Error(String(w)), l)
        return new Promise((E, v) => {
          l(w, () => E(h()), () => v(w), f + 1);
        });
      throw w;
    }).then((w) => p !== u && u ? u : (w && (w.__esModule || w[Symbol.toStringTag] === "Module") && (w = w.default), c = w, w)));
  };
  return /* @__PURE__ */ En({
    name: "AsyncComponentWrapper",
    __asyncLoader: d,
    __asyncHydrate(p, w, E) {
      const v = r ? () => {
        const k = r(
          E,
          (g) => N0(p, g)
        );
        k && (w.bum || (w.bum = [])).push(k);
      } : E;
      c ? v() : d().then(() => !w.isUnmounted && v());
    },
    get __asyncResolved() {
      return c;
    },
    setup() {
      const p = Ze;
      if (Uc(p), c)
        return () => La(c, p);
      const w = (g) => {
        u = null, gr(
          g,
          p,
          13,
          !i
        );
      };
      if (a && p.suspense || ds)
        return d().then((g) => () => La(g, p)).catch((g) => (w(g), () => i ? me(i, {
          error: g
        }) : null));
      const E = rs(!1), v = rs(), k = rs(!!s);
      return s && setTimeout(() => {
        k.value = !1;
      }, s), o != null && setTimeout(() => {
        if (!E.value && !v.value) {
          const g = new Error(
            `Async component timed out after ${o}ms.`
          );
          w(g), v.value = g;
        }
      }, o), d().then(() => {
        E.value = !0, p.parent && Wc(p.parent.vnode) && p.parent.update();
      }).catch((g) => {
        w(g), v.value = g;
      }), () => {
        if (E.value && c)
          return La(c, p);
        if (v.value && i)
          return me(i, {
            error: v.value
          });
        if (n && !k.value)
          return me(n);
      };
    }
  });
}
function La(e, t) {
  const { ref: n, props: i, children: s, ce: r } = t.vnode, o = me(e, i, s);
  return o.ref = n, o.ce = r, delete t.vnode.ce, o;
}
const Wc = (e) => e.type.__isKeepAlive;
function I0(e, t) {
  Wp(e, "a", t);
}
function M0(e, t) {
  Wp(e, "da", t);
}
function Wp(e, t, n = Ze) {
  const i = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Zo(t, i, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      Wc(s.parent.vnode) && L0(i, t, n, s), s = s.parent;
  }
}
function L0(e, t, n, i) {
  const s = Zo(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  Vc(() => {
    Ac(i[t], s);
  }, n);
}
function Zo(e, t, n = Ze, i = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      ci();
      const a = br(n), l = xn(t, n, e, o);
      return a(), ui(), l;
    });
    return i ? s.unshift(r) : s.push(r), r;
  }
}
const Wn = (e) => (t, n = Ze) => {
  (!ds || e === "sp") && Zo(e, (...i) => t(...i), n);
}, D0 = Wn("bm"), zc = Wn("m"), R0 = Wn(
  "bu"
), F0 = Wn("u"), $0 = Wn(
  "bum"
), Vc = Wn("um"), B0 = Wn(
  "sp"
), j0 = Wn("rtg"), q0 = Wn("rtc");
function U0(e, t = Ze) {
  Zo("ec", e, t);
}
const zp = "components";
function Qe(e, t) {
  return Gp(zp, e, !0, t) || e;
}
const Vp = Symbol.for("v-ndc");
function W0(e) {
  return Ke(e) ? Gp(zp, e, !1) || e : e || Vp;
}
function Gp(e, t, n = !0, i = !1) {
  const s = St || Ze;
  if (s) {
    const r = s.type;
    {
      const a = Nw(
        r,
        !1
      );
      if (a && (a === t || a === zt(t) || a === Yo(zt(t))))
        return r;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      Of(s[e] || r[e], t) || // global registration
      Of(s.appContext[e], t)
    );
    return !o && i ? r : o;
  }
}
function Of(e, t) {
  return e && (e[t] || e[zt(t)] || e[Yo(zt(t))]);
}
function Dn(e, t, n, i) {
  let s;
  const r = n, o = ce(e);
  if (o || Ke(e)) {
    const a = o && ss(e);
    let l = !1;
    a && (l = !Wt(e), e = Jo(e)), s = new Array(e.length);
    for (let u = 0, c = e.length; u < c; u++)
      s[u] = t(
        l ? ct(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let a = 0; a < e; a++)
      s[a] = t(a + 1, a, void 0, r);
  } else if (Re(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (a, l) => t(a, l, void 0, r)
      );
    else {
      const a = Object.keys(e);
      s = new Array(a.length);
      for (let l = 0, u = a.length; l < u; l++) {
        const c = a[l];
        s[l] = t(e[c], c, l, r);
      }
    }
  else
    s = [];
  return s;
}
const ml = (e) => e ? hg(e) ? na(e) : ml(e.parent) : null, Ys = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ nt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ml(e.parent),
    $root: (e) => ml(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Gc(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      jc(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Bc.bind(e.proxy)),
    $watch: (e) => fw.bind(e)
  })
), Da = (e, t) => e !== Ae && !e.__isScriptSetup && Ee(e, t), z0 = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: s, props: r, accessCache: o, type: a, appContext: l } = e;
    let u;
    if (t[0] !== "$") {
      const d = o[t];
      if (d !== void 0)
        switch (d) {
          case 1:
            return i[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (Da(i, t))
          return o[t] = 1, i[t];
        if (s !== Ae && Ee(s, t))
          return o[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && Ee(u, t)
        )
          return o[t] = 3, r[t];
        if (n !== Ae && Ee(n, t))
          return o[t] = 4, n[t];
        yl && (o[t] = 0);
      }
    }
    const c = Ys[t];
    let f, h;
    if (c)
      return t === "$attrs" && lt(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (f = a.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== Ae && Ee(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      h = l.config.globalProperties, Ee(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: s, ctx: r } = e;
    return Da(s, t) ? (s[t] = n, !0) : i !== Ae && Ee(i, t) ? (i[t] = n, !0) : Ee(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: s, propsOptions: r }
  }, o) {
    let a;
    return !!n[o] || e !== Ae && Ee(e, o) || Da(t, o) || (a = r[0]) && Ee(a, o) || Ee(i, o) || Ee(Ys, o) || Ee(s.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ee(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Pf(e) {
  return ce(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let yl = !0;
function V0(e) {
  const t = Gc(e), n = e.proxy, i = e.ctx;
  yl = !1, t.beforeCreate && Nf(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: r,
    methods: o,
    watch: a,
    provide: l,
    inject: u,
    // lifecycle
    created: c,
    beforeMount: f,
    mounted: h,
    beforeUpdate: d,
    updated: p,
    activated: w,
    deactivated: E,
    beforeDestroy: v,
    beforeUnmount: k,
    destroyed: g,
    unmounted: b,
    render: A,
    renderTracked: N,
    renderTriggered: L,
    errorCaptured: B,
    serverPrefetch: j,
    // public API
    expose: H,
    inheritAttrs: D,
    // assets
    components: K,
    directives: Y,
    filters: ae
  } = t;
  if (u && G0(u, i, null), o)
    for (const de in o) {
      const ue = o[de];
      le(ue) && (i[de] = ue.bind(n));
    }
  if (s) {
    const de = s.call(n, n);
    Re(de) && (e.data = Dc(de));
  }
  if (yl = !0, r)
    for (const de in r) {
      const ue = r[de], Pe = le(ue) ? ue.bind(n, n) : le(ue.get) ? ue.get.bind(n, n) : bn, Ct = !le(ue) && le(ue.set) ? ue.set.bind(n) : bn, Be = $t({
        get: Pe,
        set: Ct
      });
      Object.defineProperty(i, de, {
        enumerable: !0,
        configurable: !0,
        get: () => Be.value,
        set: (We) => Be.value = We
      });
    }
  if (a)
    for (const de in a)
      Hp(a[de], i, n, de);
  if (l) {
    const de = le(l) ? l.call(n) : l;
    Reflect.ownKeys(de).forEach((ue) => {
      Q0(ue, de[ue]);
    });
  }
  c && Nf(c, e, "c");
  function Ce(de, ue) {
    ce(ue) ? ue.forEach((Pe) => de(Pe.bind(n))) : ue && de(ue.bind(n));
  }
  if (Ce(D0, f), Ce(zc, h), Ce(R0, d), Ce(F0, p), Ce(I0, w), Ce(M0, E), Ce(U0, B), Ce(q0, N), Ce(j0, L), Ce($0, k), Ce(Vc, b), Ce(B0, j), ce(H))
    if (H.length) {
      const de = e.exposed || (e.exposed = {});
      H.forEach((ue) => {
        Object.defineProperty(de, ue, {
          get: () => n[ue],
          set: (Pe) => n[ue] = Pe
        });
      });
    } else e.exposed || (e.exposed = {});
  A && e.render === bn && (e.render = A), D != null && (e.inheritAttrs = D), K && (e.components = K), Y && (e.directives = Y), j && Uc(e);
}
function G0(e, t, n = bn) {
  ce(e) && (e = bl(e));
  for (const i in e) {
    const s = e[i];
    let r;
    Re(s) ? "default" in s ? r = Xs(
      s.from || i,
      s.default,
      !0
    ) : r = Xs(s.from || i) : r = Xs(s), rt(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[i] = r;
  }
}
function Nf(e, t, n) {
  xn(
    ce(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Hp(e, t, n, i) {
  let s = i.includes(".") ? ag(n, i) : () => n[i];
  if (Ke(e)) {
    const r = t[e];
    le(r) && Fn(s, r);
  } else if (le(e))
    Fn(s, e.bind(n));
  else if (Re(e))
    if (ce(e))
      e.forEach((r) => Hp(r, t, n, i));
    else {
      const r = le(e.handler) ? e.handler.bind(n) : t[e.handler];
      le(r) && Fn(s, r, e);
    }
}
function Gc(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, a = r.get(t);
  let l;
  return a ? l = a : !s.length && !n && !i ? l = t : (l = {}, s.length && s.forEach(
    (u) => co(l, u, o, !0)
  ), co(l, t, o)), Re(t) && r.set(t, l), l;
}
function co(e, t, n, i = !1) {
  const { mixins: s, extends: r } = t;
  r && co(e, r, n, !0), s && s.forEach(
    (o) => co(e, o, n, !0)
  );
  for (const o in t)
    if (!(i && o === "expose")) {
      const a = H0[o] || n && n[o];
      e[o] = a ? a(e[o], t[o]) : t[o];
    }
  return e;
}
const H0 = {
  data: If,
  props: Mf,
  emits: Mf,
  // objects
  methods: $s,
  computed: $s,
  // lifecycle
  beforeCreate: pt,
  created: pt,
  beforeMount: pt,
  mounted: pt,
  beforeUpdate: pt,
  updated: pt,
  beforeDestroy: pt,
  beforeUnmount: pt,
  destroyed: pt,
  unmounted: pt,
  activated: pt,
  deactivated: pt,
  errorCaptured: pt,
  serverPrefetch: pt,
  // assets
  components: $s,
  directives: $s,
  // watch
  watch: Y0,
  // provide / inject
  provide: If,
  inject: K0
};
function If(e, t) {
  return t ? e ? function() {
    return nt(
      le(e) ? e.call(this, this) : e,
      le(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function K0(e, t) {
  return $s(bl(e), bl(t));
}
function bl(e) {
  if (ce(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function pt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function $s(e, t) {
  return e ? nt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Mf(e, t) {
  return e ? ce(e) && ce(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : nt(
    /* @__PURE__ */ Object.create(null),
    Pf(e),
    Pf(t ?? {})
  ) : t;
}
function Y0(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = nt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = pt(e[i], t[i]);
  return n;
}
function Kp() {
  return {
    app: null,
    config: {
      isNativeTag: jb,
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
let X0 = 0;
function J0(e, t) {
  return function(i, s = null) {
    le(i) || (i = nt({}, i)), s != null && !Re(s) && (s = null);
    const r = Kp(), o = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const u = r.app = {
      _uid: X0++,
      _component: i,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: Mw,
      get config() {
        return r.config;
      },
      set config(c) {
      },
      use(c, ...f) {
        return o.has(c) || (c && le(c.install) ? (o.add(c), c.install(u, ...f)) : le(c) && (o.add(c), c(u, ...f))), u;
      },
      mixin(c) {
        return r.mixins.includes(c) || r.mixins.push(c), u;
      },
      component(c, f) {
        return f ? (r.components[c] = f, u) : r.components[c];
      },
      directive(c, f) {
        return f ? (r.directives[c] = f, u) : r.directives[c];
      },
      mount(c, f, h) {
        if (!l) {
          const d = u._ceVNode || me(i, s);
          return d.appContext = r, h === !0 ? h = "svg" : h === !1 && (h = void 0), f && t ? t(d, c) : e(d, c, h), l = !0, u._container = c, c.__vue_app__ = u, na(d.component);
        }
      },
      onUnmount(c) {
        a.push(c);
      },
      unmount() {
        l && (xn(
          a,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(c, f) {
        return r.provides[c] = f, u;
      },
      runWithContext(c) {
        const f = as;
        as = u;
        try {
          return c();
        } finally {
          as = f;
        }
      }
    };
    return u;
  };
}
let as = null;
function Q0(e, t) {
  if (Ze) {
    let n = Ze.provides;
    const i = Ze.parent && Ze.parent.provides;
    i === n && (n = Ze.provides = Object.create(i)), n[e] = t;
  }
}
function Xs(e, t, n = !1) {
  const i = Ze || St;
  if (i || as) {
    const s = as ? as._context.provides : i ? i.parent == null ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && le(t) ? t.call(i && i.proxy) : t;
  }
}
const Yp = {}, Xp = () => Object.create(Yp), Jp = (e) => Object.getPrototypeOf(e) === Yp;
function Z0(e, t, n, i = !1) {
  const s = {}, r = Xp();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Qp(e, t, s, r);
  for (const o in e.propsOptions[0])
    o in s || (s[o] = void 0);
  n ? e.props = i ? s : b0(s) : e.type.props ? e.props = s : e.props = r, e.attrs = r;
}
function ew(e, t, n, i) {
  const {
    props: s,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, a = ke(s), [l] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const c = e.vnode.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        let h = c[f];
        if (ea(e.emitsOptions, h))
          continue;
        const d = t[h];
        if (l)
          if (Ee(r, h))
            d !== r[h] && (r[h] = d, u = !0);
          else {
            const p = zt(h);
            s[p] = wl(
              l,
              a,
              p,
              d,
              e,
              !1
            );
          }
        else
          d !== r[h] && (r[h] = d, u = !0);
      }
    }
  } else {
    Qp(e, t, s, r) && (u = !0);
    let c;
    for (const f in a)
      (!t || // for camelCase
      !Ee(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = ji(f)) === f || !Ee(t, c))) && (l ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[c] !== void 0) && (s[f] = wl(
        l,
        a,
        f,
        void 0,
        e,
        !0
      )) : delete s[f]);
    if (r !== a)
      for (const f in r)
        (!t || !Ee(t, f)) && (delete r[f], u = !0);
  }
  u && In(e.attrs, "set", "");
}
function Qp(e, t, n, i) {
  const [s, r] = e.propsOptions;
  let o = !1, a;
  if (t)
    for (let l in t) {
      if (Vs(l))
        continue;
      const u = t[l];
      let c;
      s && Ee(s, c = zt(l)) ? !r || !r.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : ea(e.emitsOptions, l) || (!(l in i) || u !== i[l]) && (i[l] = u, o = !0);
    }
  if (r) {
    const l = ke(n), u = a || Ae;
    for (let c = 0; c < r.length; c++) {
      const f = r[c];
      n[f] = wl(
        s,
        l,
        f,
        u[f],
        e,
        !Ee(u, f)
      );
    }
  }
  return o;
}
function wl(e, t, n, i, s, r) {
  const o = e[n];
  if (o != null) {
    const a = Ee(o, "default");
    if (a && i === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && le(l)) {
        const { propsDefaults: u } = s;
        if (n in u)
          i = u[n];
        else {
          const c = br(s);
          i = u[n] = l.call(
            null,
            t
          ), c();
        }
      } else
        i = l;
      s.ce && s.ce._setProp(n, i);
    }
    o[
      0
      /* shouldCast */
    ] && (r && !a ? i = !1 : o[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === ji(n)) && (i = !0));
  }
  return i;
}
const tw = /* @__PURE__ */ new WeakMap();
function Zp(e, t, n = !1) {
  const i = n ? tw : t.propsCache, s = i.get(e);
  if (s)
    return s;
  const r = e.props, o = {}, a = [];
  let l = !1;
  if (!le(e)) {
    const c = (f) => {
      l = !0;
      const [h, d] = Zp(f, t, !0);
      nt(o, h), d && a.push(...d);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!r && !l)
    return Re(e) && i.set(e, ns), ns;
  if (ce(r))
    for (let c = 0; c < r.length; c++) {
      const f = zt(r[c]);
      Lf(f) && (o[f] = Ae);
    }
  else if (r)
    for (const c in r) {
      const f = zt(c);
      if (Lf(f)) {
        const h = r[c], d = o[f] = ce(h) || le(h) ? { type: h } : nt({}, h), p = d.type;
        let w = !1, E = !0;
        if (ce(p))
          for (let v = 0; v < p.length; ++v) {
            const k = p[v], g = le(k) && k.name;
            if (g === "Boolean") {
              w = !0;
              break;
            } else g === "String" && (E = !1);
          }
        else
          w = le(p) && p.name === "Boolean";
        d[
          0
          /* shouldCast */
        ] = w, d[
          1
          /* shouldCastTrue */
        ] = E, (w || Ee(d, "default")) && a.push(f);
      }
    }
  const u = [o, a];
  return Re(e) && i.set(e, u), u;
}
function Lf(e) {
  return e[0] !== "$" && !Vs(e);
}
const eg = (e) => e[0] === "_" || e === "$stable", Hc = (e) => ce(e) ? e.map(hn) : [hn(e)], nw = (e, t, n) => {
  if (t._n)
    return t;
  const i = A0((...s) => Hc(t(...s)), n);
  return i._c = !1, i;
}, tg = (e, t, n) => {
  const i = e._ctx;
  for (const s in e) {
    if (eg(s)) continue;
    const r = e[s];
    if (le(r))
      t[s] = nw(s, r, i);
    else if (r != null) {
      const o = Hc(r);
      t[s] = () => o;
    }
  }
}, ng = (e, t) => {
  const n = Hc(t);
  e.slots.default = () => n;
}, ig = (e, t, n) => {
  for (const i in t)
    (n || i !== "_") && (e[i] = t[i]);
}, iw = (e, t, n) => {
  const i = e.slots = Xp();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (ig(i, t, n), n && pp(i, "_", s, !0)) : tg(t, i);
  } else t && ng(e, t);
}, sw = (e, t, n) => {
  const { vnode: i, slots: s } = e;
  let r = !0, o = Ae;
  if (i.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? r = !1 : ig(s, t, n) : (r = !t.$stable, tg(t, s)), o = t;
  } else t && (ng(e, t), o = { default: 1 });
  if (r)
    for (const a in s)
      !eg(a) && o[a] == null && delete s[a];
}, Nt = bw;
function rw(e) {
  return ow(e);
}
function ow(e, t) {
  const n = Xo();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: s,
    patchProp: r,
    createElement: o,
    createText: a,
    createComment: l,
    setText: u,
    setElementText: c,
    parentNode: f,
    nextSibling: h,
    setScopeId: d = bn,
    insertStaticContent: p
  } = e, w = (C, O, R, V = null, q = null, W = null, X = void 0, y = null, _ = !!O.dynamicChildren) => {
    if (C === O)
      return;
    C && !Ns(C, O) && (V = Kt(C), We(C, q, W, !0), C = null), O.patchFlag === -2 && (_ = !1, O.dynamicChildren = null);
    const { type: T, ref: U, shapeFlag: G } = O;
    switch (T) {
      case yr:
        E(C, O, R, V);
        break;
      case Ii:
        v(C, O, R, V);
        break;
      case Gr:
        C == null && k(O, R, V, X);
        break;
      case Oe:
        K(
          C,
          O,
          R,
          V,
          q,
          W,
          X,
          y,
          _
        );
        break;
      default:
        G & 1 ? A(
          C,
          O,
          R,
          V,
          q,
          W,
          X,
          y,
          _
        ) : G & 6 ? Y(
          C,
          O,
          R,
          V,
          q,
          W,
          X,
          y,
          _
        ) : (G & 64 || G & 128) && T.process(
          C,
          O,
          R,
          V,
          q,
          W,
          X,
          y,
          _,
          At
        );
    }
    U != null && q && gl(U, C && C.ref, W, O || C, !O);
  }, E = (C, O, R, V) => {
    if (C == null)
      i(
        O.el = a(O.children),
        R,
        V
      );
    else {
      const q = O.el = C.el;
      O.children !== C.children && u(q, O.children);
    }
  }, v = (C, O, R, V) => {
    C == null ? i(
      O.el = l(O.children || ""),
      R,
      V
    ) : O.el = C.el;
  }, k = (C, O, R, V) => {
    [C.el, C.anchor] = p(
      C.children,
      O,
      R,
      V,
      C.el,
      C.anchor
    );
  }, g = ({ el: C, anchor: O }, R, V) => {
    let q;
    for (; C && C !== O; )
      q = h(C), i(C, R, V), C = q;
    i(O, R, V);
  }, b = ({ el: C, anchor: O }) => {
    let R;
    for (; C && C !== O; )
      R = h(C), s(C), C = R;
    s(O);
  }, A = (C, O, R, V, q, W, X, y, _) => {
    O.type === "svg" ? X = "svg" : O.type === "math" && (X = "mathml"), C == null ? N(
      O,
      R,
      V,
      q,
      W,
      X,
      y,
      _
    ) : j(
      C,
      O,
      q,
      W,
      X,
      y,
      _
    );
  }, N = (C, O, R, V, q, W, X, y) => {
    let _, T;
    const { props: U, shapeFlag: G, transition: z, dirs: I } = C;
    if (_ = C.el = o(
      C.type,
      W,
      U && U.is,
      U
    ), G & 8 ? c(_, C.children) : G & 16 && B(
      C.children,
      _,
      null,
      V,
      q,
      Ra(C, W),
      X,
      y
    ), I && pi(C, null, V, "created"), L(_, C, C.scopeId, X, V), U) {
      for (const se in U)
        se !== "value" && !Vs(se) && r(_, se, null, U[se], W, V);
      "value" in U && r(_, "value", null, U.value, W), (T = U.onVnodeBeforeMount) && ln(T, V, C);
    }
    I && pi(C, null, V, "beforeMount");
    const F = aw(q, z);
    F && z.beforeEnter(_), i(_, O, R), ((T = U && U.onVnodeMounted) || F || I) && Nt(() => {
      T && ln(T, V, C), F && z.enter(_), I && pi(C, null, V, "mounted");
    }, q);
  }, L = (C, O, R, V, q) => {
    if (R && d(C, R), V)
      for (let W = 0; W < V.length; W++)
        d(C, V[W]);
    if (q) {
      let W = q.subTree;
      if (O === W || cg(W.type) && (W.ssContent === O || W.ssFallback === O)) {
        const X = q.vnode;
        L(
          C,
          X,
          X.scopeId,
          X.slotScopeIds,
          q.parent
        );
      }
    }
  }, B = (C, O, R, V, q, W, X, y, _ = 0) => {
    for (let T = _; T < C.length; T++) {
      const U = C[T] = y ? Jn(C[T]) : hn(C[T]);
      w(
        null,
        U,
        O,
        R,
        V,
        q,
        W,
        X,
        y
      );
    }
  }, j = (C, O, R, V, q, W, X) => {
    const y = O.el = C.el;
    let { patchFlag: _, dynamicChildren: T, dirs: U } = O;
    _ |= C.patchFlag & 16;
    const G = C.props || Ae, z = O.props || Ae;
    let I;
    if (R && gi(R, !1), (I = z.onVnodeBeforeUpdate) && ln(I, R, O, C), U && pi(O, C, R, "beforeUpdate"), R && gi(R, !0), (G.innerHTML && z.innerHTML == null || G.textContent && z.textContent == null) && c(y, ""), T ? H(
      C.dynamicChildren,
      T,
      y,
      R,
      V,
      Ra(O, q),
      W
    ) : X || ue(
      C,
      O,
      y,
      null,
      R,
      V,
      Ra(O, q),
      W,
      !1
    ), _ > 0) {
      if (_ & 16)
        D(y, G, z, R, q);
      else if (_ & 2 && G.class !== z.class && r(y, "class", null, z.class, q), _ & 4 && r(y, "style", G.style, z.style, q), _ & 8) {
        const F = O.dynamicProps;
        for (let se = 0; se < F.length; se++) {
          const re = F[se], je = G[re], ze = z[re];
          (ze !== je || re === "value") && r(y, re, je, ze, q, R);
        }
      }
      _ & 1 && C.children !== O.children && c(y, O.children);
    } else !X && T == null && D(y, G, z, R, q);
    ((I = z.onVnodeUpdated) || U) && Nt(() => {
      I && ln(I, R, O, C), U && pi(O, C, R, "updated");
    }, V);
  }, H = (C, O, R, V, q, W, X) => {
    for (let y = 0; y < O.length; y++) {
      const _ = C[y], T = O[y], U = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        _.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (_.type === Oe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ns(_, T) || // - In the case of a component, it could contain anything.
        _.shapeFlag & 70) ? f(_.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          R
        )
      );
      w(
        _,
        T,
        U,
        null,
        V,
        q,
        W,
        X,
        !0
      );
    }
  }, D = (C, O, R, V, q) => {
    if (O !== R) {
      if (O !== Ae)
        for (const W in O)
          !Vs(W) && !(W in R) && r(
            C,
            W,
            O[W],
            null,
            q,
            V
          );
      for (const W in R) {
        if (Vs(W)) continue;
        const X = R[W], y = O[W];
        X !== y && W !== "value" && r(C, W, y, X, q, V);
      }
      "value" in R && r(C, "value", O.value, R.value, q);
    }
  }, K = (C, O, R, V, q, W, X, y, _) => {
    const T = O.el = C ? C.el : a(""), U = O.anchor = C ? C.anchor : a("");
    let { patchFlag: G, dynamicChildren: z, slotScopeIds: I } = O;
    I && (y = y ? y.concat(I) : I), C == null ? (i(T, R, V), i(U, R, V), B(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      O.children || [],
      R,
      U,
      q,
      W,
      X,
      y,
      _
    )) : G > 0 && G & 64 && z && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    C.dynamicChildren ? (H(
      C.dynamicChildren,
      z,
      R,
      q,
      W,
      X,
      y
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (O.key != null || q && O === q.subTree) && sg(
      C,
      O,
      !0
      /* shallow */
    )) : ue(
      C,
      O,
      R,
      U,
      q,
      W,
      X,
      y,
      _
    );
  }, Y = (C, O, R, V, q, W, X, y, _) => {
    O.slotScopeIds = y, C == null ? O.shapeFlag & 512 ? q.ctx.activate(
      O,
      R,
      V,
      X,
      _
    ) : ae(
      O,
      R,
      V,
      q,
      W,
      X,
      _
    ) : it(C, O, _);
  }, ae = (C, O, R, V, q, W, X) => {
    const y = C.component = Cw(
      C,
      V,
      q
    );
    if (Wc(C) && (y.ctx.renderer = At), Tw(y, !1, X), y.asyncDep) {
      if (q && q.registerDep(y, Ce, X), !C.el) {
        const _ = y.subTree = me(Ii);
        v(null, _, O, R);
      }
    } else
      Ce(
        y,
        C,
        O,
        R,
        q,
        W,
        X
      );
  }, it = (C, O, R) => {
    const V = O.component = C.component;
    if (mw(C, O, R))
      if (V.asyncDep && !V.asyncResolved) {
        de(V, O, R);
        return;
      } else
        V.next = O, V.update();
    else
      O.el = C.el, V.vnode = O;
  }, Ce = (C, O, R, V, q, W, X) => {
    const y = () => {
      if (C.isMounted) {
        let { next: G, bu: z, u: I, parent: F, vnode: se } = C;
        {
          const dt = rg(C);
          if (dt) {
            G && (G.el = se.el, de(C, G, X)), dt.asyncDep.then(() => {
              C.isUnmounted || y();
            });
            return;
          }
        }
        let re = G, je;
        gi(C, !1), G ? (G.el = se.el, de(C, G, X)) : G = se, z && Oa(z), (je = G.props && G.props.onVnodeBeforeUpdate) && ln(je, F, G, se), gi(C, !0);
        const ze = Fa(C), Je = C.subTree;
        C.subTree = ze, w(
          Je,
          ze,
          // parent may have changed if it's in a teleport
          f(Je.el),
          // anchor may have changed if it's in a fragment
          Kt(Je),
          C,
          q,
          W
        ), G.el = ze.el, re === null && yw(C, ze.el), I && Nt(I, q), (je = G.props && G.props.onVnodeUpdated) && Nt(
          () => ln(je, F, G, se),
          q
        );
      } else {
        let G;
        const { el: z, props: I } = O, { bm: F, m: se, parent: re, root: je, type: ze } = C, Je = Ks(O);
        if (gi(C, !1), F && Oa(F), !Je && (G = I && I.onVnodeBeforeMount) && ln(G, re, O), gi(C, !0), z && Wi) {
          const dt = () => {
            C.subTree = Fa(C), Wi(
              z,
              C.subTree,
              C,
              q,
              null
            );
          };
          Je && ze.__asyncHydrate ? ze.__asyncHydrate(
            z,
            C,
            dt
          ) : dt();
        } else {
          je.ce && je.ce._injectChildStyle(ze);
          const dt = C.subTree = Fa(C);
          w(
            null,
            dt,
            R,
            V,
            C,
            q,
            W
          ), O.el = dt.el;
        }
        if (se && Nt(se, q), !Je && (G = I && I.onVnodeMounted)) {
          const dt = O;
          Nt(
            () => ln(G, re, dt),
            q
          );
        }
        (O.shapeFlag & 256 || re && Ks(re.vnode) && re.vnode.shapeFlag & 256) && C.a && Nt(C.a, q), C.isMounted = !0, O = R = V = null;
      }
    };
    C.scope.on();
    const _ = C.effect = new vp(y);
    C.scope.off();
    const T = C.update = _.run.bind(_), U = C.job = _.runIfDirty.bind(_);
    U.i = C, U.id = C.uid, _.scheduler = () => jc(U), gi(C, !0), T();
  }, de = (C, O, R) => {
    O.component = C;
    const V = C.vnode.props;
    C.vnode = O, C.next = null, ew(C, O.props, V, R), sw(C, O.children, R), ci(), Tf(C), ui();
  }, ue = (C, O, R, V, q, W, X, y, _ = !1) => {
    const T = C && C.children, U = C ? C.shapeFlag : 0, G = O.children, { patchFlag: z, shapeFlag: I } = O;
    if (z > 0) {
      if (z & 128) {
        Ct(
          T,
          G,
          R,
          V,
          q,
          W,
          X,
          y,
          _
        );
        return;
      } else if (z & 256) {
        Pe(
          T,
          G,
          R,
          V,
          q,
          W,
          X,
          y,
          _
        );
        return;
      }
    }
    I & 8 ? (U & 16 && Tt(T, q, W), G !== T && c(R, G)) : U & 16 ? I & 16 ? Ct(
      T,
      G,
      R,
      V,
      q,
      W,
      X,
      y,
      _
    ) : Tt(T, q, W, !0) : (U & 8 && c(R, ""), I & 16 && B(
      G,
      R,
      V,
      q,
      W,
      X,
      y,
      _
    ));
  }, Pe = (C, O, R, V, q, W, X, y, _) => {
    C = C || ns, O = O || ns;
    const T = C.length, U = O.length, G = Math.min(T, U);
    let z;
    for (z = 0; z < G; z++) {
      const I = O[z] = _ ? Jn(O[z]) : hn(O[z]);
      w(
        C[z],
        I,
        R,
        null,
        q,
        W,
        X,
        y,
        _
      );
    }
    T > U ? Tt(
      C,
      q,
      W,
      !0,
      !1,
      G
    ) : B(
      O,
      R,
      V,
      q,
      W,
      X,
      y,
      _,
      G
    );
  }, Ct = (C, O, R, V, q, W, X, y, _) => {
    let T = 0;
    const U = O.length;
    let G = C.length - 1, z = U - 1;
    for (; T <= G && T <= z; ) {
      const I = C[T], F = O[T] = _ ? Jn(O[T]) : hn(O[T]);
      if (Ns(I, F))
        w(
          I,
          F,
          R,
          null,
          q,
          W,
          X,
          y,
          _
        );
      else
        break;
      T++;
    }
    for (; T <= G && T <= z; ) {
      const I = C[G], F = O[z] = _ ? Jn(O[z]) : hn(O[z]);
      if (Ns(I, F))
        w(
          I,
          F,
          R,
          null,
          q,
          W,
          X,
          y,
          _
        );
      else
        break;
      G--, z--;
    }
    if (T > G) {
      if (T <= z) {
        const I = z + 1, F = I < U ? O[I].el : V;
        for (; T <= z; )
          w(
            null,
            O[T] = _ ? Jn(O[T]) : hn(O[T]),
            R,
            F,
            q,
            W,
            X,
            y,
            _
          ), T++;
      }
    } else if (T > z)
      for (; T <= G; )
        We(C[T], q, W, !0), T++;
    else {
      const I = T, F = T, se = /* @__PURE__ */ new Map();
      for (T = F; T <= z; T++) {
        const Ot = O[T] = _ ? Jn(O[T]) : hn(O[T]);
        Ot.key != null && se.set(Ot.key, T);
      }
      let re, je = 0;
      const ze = z - F + 1;
      let Je = !1, dt = 0;
      const zi = new Array(ze);
      for (T = 0; T < ze; T++) zi[T] = 0;
      for (T = I; T <= G; T++) {
        const Ot = C[T];
        if (je >= ze) {
          We(Ot, q, W, !0);
          continue;
        }
        let an;
        if (Ot.key != null)
          an = se.get(Ot.key);
        else
          for (re = F; re <= z; re++)
            if (zi[re - F] === 0 && Ns(Ot, O[re])) {
              an = re;
              break;
            }
        an === void 0 ? We(Ot, q, W, !0) : (zi[an - F] = T + 1, an >= dt ? dt = an : Je = !0, w(
          Ot,
          O[an],
          R,
          null,
          q,
          W,
          X,
          y,
          _
        ), je++);
      }
      const xf = Je ? lw(zi) : ns;
      for (re = xf.length - 1, T = ze - 1; T >= 0; T--) {
        const Ot = F + T, an = O[Ot], Sf = Ot + 1 < U ? O[Ot + 1].el : V;
        zi[T] === 0 ? w(
          null,
          an,
          R,
          Sf,
          q,
          W,
          X,
          y,
          _
        ) : Je && (re < 0 || T !== xf[re] ? Be(an, R, Sf, 2) : re--);
      }
    }
  }, Be = (C, O, R, V, q = null) => {
    const { el: W, type: X, transition: y, children: _, shapeFlag: T } = C;
    if (T & 6) {
      Be(C.component.subTree, O, R, V);
      return;
    }
    if (T & 128) {
      C.suspense.move(O, R, V);
      return;
    }
    if (T & 64) {
      X.move(C, O, R, At);
      return;
    }
    if (X === Oe) {
      i(W, O, R);
      for (let G = 0; G < _.length; G++)
        Be(_[G], O, R, V);
      i(C.anchor, O, R);
      return;
    }
    if (X === Gr) {
      g(C, O, R);
      return;
    }
    if (V !== 2 && T & 1 && y)
      if (V === 0)
        y.beforeEnter(W), i(W, O, R), Nt(() => y.enter(W), q);
      else {
        const { leave: G, delayLeave: z, afterLeave: I } = y, F = () => i(W, O, R), se = () => {
          G(W, () => {
            F(), I && I();
          });
        };
        z ? z(W, F, se) : se();
      }
    else
      i(W, O, R);
  }, We = (C, O, R, V = !1, q = !1) => {
    const {
      type: W,
      props: X,
      ref: y,
      children: _,
      dynamicChildren: T,
      shapeFlag: U,
      patchFlag: G,
      dirs: z,
      cacheIndex: I
    } = C;
    if (G === -2 && (q = !1), y != null && gl(y, null, R, C, !0), I != null && (O.renderCache[I] = void 0), U & 256) {
      O.ctx.deactivate(C);
      return;
    }
    const F = U & 1 && z, se = !Ks(C);
    let re;
    if (se && (re = X && X.onVnodeBeforeUnmount) && ln(re, O, C), U & 6)
      ht(C.component, R, V);
    else {
      if (U & 128) {
        C.suspense.unmount(R, V);
        return;
      }
      F && pi(C, null, O, "beforeUnmount"), U & 64 ? C.type.remove(
        C,
        O,
        R,
        At,
        V
      ) : T && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !T.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (W !== Oe || G > 0 && G & 64) ? Tt(
        T,
        O,
        R,
        !1,
        !0
      ) : (W === Oe && G & 384 || !q && U & 16) && Tt(_, O, R), V && sn(C);
    }
    (se && (re = X && X.onVnodeUnmounted) || F) && Nt(() => {
      re && ln(re, O, C), F && pi(C, null, O, "unmounted");
    }, R);
  }, sn = (C) => {
    const { type: O, el: R, anchor: V, transition: q } = C;
    if (O === Oe) {
      rn(R, V);
      return;
    }
    if (O === Gr) {
      b(C);
      return;
    }
    const W = () => {
      s(R), q && !q.persisted && q.afterLeave && q.afterLeave();
    };
    if (C.shapeFlag & 1 && q && !q.persisted) {
      const { leave: X, delayLeave: y } = q, _ = () => X(R, W);
      y ? y(C.el, W, _) : _();
    } else
      W();
  }, rn = (C, O) => {
    let R;
    for (; C !== O; )
      R = h(C), s(C), C = R;
    s(O);
  }, ht = (C, O, R) => {
    const { bum: V, scope: q, job: W, subTree: X, um: y, m: _, a: T } = C;
    Df(_), Df(T), V && Oa(V), q.stop(), W && (W.flags |= 8, We(X, C, O, R)), y && Nt(y, O), Nt(() => {
      C.isUnmounted = !0;
    }, O), O && O.pendingBranch && !O.isUnmounted && C.asyncDep && !C.asyncResolved && C.suspenseId === O.pendingId && (O.deps--, O.deps === 0 && O.resolve());
  }, Tt = (C, O, R, V = !1, q = !1, W = 0) => {
    for (let X = W; X < C.length; X++)
      We(C[X], O, R, V, q);
  }, Kt = (C) => {
    if (C.shapeFlag & 6)
      return Kt(C.component.subTree);
    if (C.shapeFlag & 128)
      return C.suspense.next();
    const O = h(C.anchor || C.el), R = O && O[O0];
    return R ? h(R) : O;
  };
  let Yt = !1;
  const on = (C, O, R) => {
    C == null ? O._vnode && We(O._vnode, null, null, !0) : w(
      O._vnode || null,
      C,
      O,
      null,
      null,
      null,
      R
    ), O._vnode = C, Yt || (Yt = !0, Tf(), Bp(), Yt = !1);
  }, At = {
    p: w,
    um: We,
    m: Be,
    r: sn,
    mt: ae,
    mc: B,
    pc: ue,
    pbc: H,
    n: Kt,
    o: e
  };
  let Cn, Wi;
  return {
    render: on,
    hydrate: Cn,
    createApp: J0(on, Cn)
  };
}
function Ra({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function gi({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function aw(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function sg(e, t, n = !1) {
  const i = e.children, s = t.children;
  if (ce(i) && ce(s))
    for (let r = 0; r < i.length; r++) {
      const o = i[r];
      let a = s[r];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[r] = Jn(s[r]), a.el = o.el), !n && a.patchFlag !== -2 && sg(o, a)), a.type === yr && (a.el = o.el);
    }
}
function lw(e) {
  const t = e.slice(), n = [0];
  let i, s, r, o, a;
  const l = e.length;
  for (i = 0; i < l; i++) {
    const u = e[i];
    if (u !== 0) {
      if (s = n[n.length - 1], e[s] < u) {
        t[i] = s, n.push(i);
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; )
        a = r + o >> 1, e[n[a]] < u ? r = a + 1 : o = a;
      u < e[n[r]] && (r > 0 && (t[i] = n[r - 1]), n[r] = i);
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; )
    n[r] = o, o = t[o];
  return n;
}
function rg(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : rg(t);
}
function Df(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const cw = Symbol.for("v-scx"), uw = () => Xs(cw);
function Fn(e, t, n) {
  return og(e, t, n);
}
function og(e, t, n = Ae) {
  const { immediate: i, deep: s, flush: r, once: o } = n, a = nt({}, n), l = t && i || !t && r !== "post";
  let u;
  if (ds) {
    if (r === "sync") {
      const d = uw();
      u = d.__watcherHandles || (d.__watcherHandles = []);
    } else if (!l) {
      const d = () => {
      };
      return d.stop = bn, d.resume = bn, d.pause = bn, d;
    }
  }
  const c = Ze;
  a.call = (d, p, w) => xn(d, c, p, w);
  let f = !1;
  r === "post" ? a.scheduler = (d) => {
    Nt(d, c && c.suspense);
  } : r !== "sync" && (f = !0, a.scheduler = (d, p) => {
    p ? d() : jc(d);
  }), a.augmentJob = (d) => {
    t && (d.flags |= 4), f && (d.flags |= 2, c && (d.id = c.uid, d.i = c));
  };
  const h = k0(e, t, a);
  return ds && (u ? u.push(h) : l && h()), h;
}
function fw(e, t, n) {
  const i = this.proxy, s = Ke(e) ? e.includes(".") ? ag(i, e) : () => i[e] : e.bind(i, i);
  let r;
  le(t) ? r = t : (r = t.handler, n = t);
  const o = br(this), a = og(s, r.bind(i), n);
  return o(), a;
}
function ag(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let s = 0; s < n.length && i; s++)
      i = i[n[s]];
    return i;
  };
}
const hw = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${zt(t)}Modifiers`] || e[`${ji(t)}Modifiers`];
function dw(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || Ae;
  let s = n;
  const r = t.startsWith("update:"), o = r && hw(i, t.slice(7));
  o && (o.trim && (s = n.map((c) => Ke(c) ? c.trim() : c)), o.number && (s = n.map(Vb)));
  let a, l = i[a = Aa(t)] || // also try camelCase event handler (#2249)
  i[a = Aa(zt(t))];
  !l && r && (l = i[a = Aa(ji(t))]), l && xn(
    l,
    e,
    6,
    s
  );
  const u = i[a + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, xn(
      u,
      e,
      6,
      s
    );
  }
}
function lg(e, t, n = !1) {
  const i = t.emitsCache, s = i.get(e);
  if (s !== void 0)
    return s;
  const r = e.emits;
  let o = {}, a = !1;
  if (!le(e)) {
    const l = (u) => {
      const c = lg(u, t, !0);
      c && (a = !0, nt(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !r && !a ? (Re(e) && i.set(e, null), null) : (ce(r) ? r.forEach((l) => o[l] = null) : nt(o, r), Re(e) && i.set(e, o), o);
}
function ea(e, t) {
  return !e || !Go(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Ee(e, t[0].toLowerCase() + t.slice(1)) || Ee(e, ji(t)) || Ee(e, t));
}
function Fa(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: s,
    propsOptions: [r],
    slots: o,
    attrs: a,
    emit: l,
    render: u,
    renderCache: c,
    props: f,
    data: h,
    setupState: d,
    ctx: p,
    inheritAttrs: w
  } = e, E = lo(e);
  let v, k;
  try {
    if (n.shapeFlag & 4) {
      const b = s || i, A = b;
      v = hn(
        u.call(
          A,
          b,
          c,
          f,
          d,
          h,
          p
        )
      ), k = a;
    } else {
      const b = t;
      v = hn(
        b.length > 1 ? b(
          f,
          { attrs: a, slots: o, emit: l }
        ) : b(
          f,
          null
        )
      ), k = t.props ? a : pw(a);
    }
  } catch (b) {
    Js.length = 0, gr(b, e, 1), v = me(Ii);
  }
  let g = v;
  if (k && w !== !1) {
    const b = Object.keys(k), { shapeFlag: A } = g;
    b.length && A & 7 && (r && b.some(Tc) && (k = gw(
      k,
      r
    )), g = hs(g, k, !1, !0));
  }
  return n.dirs && (g = hs(g, null, !1, !0), g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs), n.transition && qc(g, n.transition), v = g, lo(E), v;
}
const pw = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Go(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, gw = (e, t) => {
  const n = {};
  for (const i in e)
    (!Tc(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function mw(e, t, n) {
  const { props: i, children: s, component: r } = e, { props: o, children: a, patchFlag: l } = t, u = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? Rf(i, o, u) : !!o;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const h = c[f];
        if (o[h] !== i[h] && !ea(u, h))
          return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable) ? !0 : i === o ? !1 : i ? o ? Rf(i, o, u) : !0 : !!o;
  return !1;
}
function Rf(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < i.length; s++) {
    const r = i[s];
    if (t[r] !== e[r] && !ea(n, r))
      return !0;
  }
  return !1;
}
function yw({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const cg = (e) => e.__isSuspense;
function bw(e, t) {
  t && t.pendingBranch ? ce(e) ? t.effects.push(...e) : t.effects.push(e) : T0(e);
}
const Oe = Symbol.for("v-fgt"), yr = Symbol.for("v-txt"), Ii = Symbol.for("v-cmt"), Gr = Symbol.for("v-stc"), Js = [];
let Mt = null;
function J(e = !1) {
  Js.push(Mt = e ? null : []);
}
function ww() {
  Js.pop(), Mt = Js[Js.length - 1] || null;
}
let or = 1;
function Ff(e) {
  or += e, e < 0 && Mt && (Mt.hasOnce = !0);
}
function ug(e) {
  return e.dynamicChildren = or > 0 ? Mt || ns : null, ww(), or > 0 && Mt && Mt.push(e), e;
}
function te(e, t, n, i, s, r) {
  return ug(
    ie(
      e,
      t,
      n,
      i,
      s,
      r,
      !0
    )
  );
}
function at(e, t, n, i, s) {
  return ug(
    me(
      e,
      t,
      n,
      i,
      s,
      !0
    )
  );
}
function uo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ns(e, t) {
  return e.type === t.type && e.key === t.key;
}
const fg = ({ key: e }) => e ?? null, Hr = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ke(e) || rt(e) || le(e) ? { i: St, r: e, k: t, f: !!n } : e : null);
function ie(e, t = null, n = null, i = 0, s = null, r = e === Oe ? 0 : 1, o = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && fg(t),
    ref: t && Hr(t),
    scopeId: qp,
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
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: i,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: St
  };
  return a ? (Kc(l, n), r & 128 && e.normalize(l)) : n && (l.shapeFlag |= Ke(n) ? 8 : 16), or > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Mt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Mt.push(l), l;
}
const me = vw;
function vw(e, t = null, n = null, i = 0, s = null, r = !1) {
  if ((!e || e === Vp) && (e = Ii), uo(e)) {
    const a = hs(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Kc(a, n), or > 0 && !r && Mt && (a.shapeFlag & 6 ? Mt[Mt.indexOf(e)] = a : Mt.push(a)), a.patchFlag = -2, a;
  }
  if (Iw(e) && (e = e.__vccOpts), t) {
    t = _w(t);
    let { class: a, style: l } = t;
    a && !Ke(a) && (t.class = xt(a)), Re(l) && ($c(l) && !ce(l) && (l = nt({}, l)), t.style = He(l));
  }
  const o = Ke(e) ? 1 : cg(e) ? 128 : P0(e) ? 64 : Re(e) ? 4 : le(e) ? 2 : 0;
  return ie(
    e,
    t,
    n,
    i,
    s,
    o,
    r,
    !0
  );
}
function _w(e) {
  return e ? $c(e) || Jp(e) ? nt({}, e) : e : null;
}
function hs(e, t, n = !1, i = !1) {
  const { props: s, ref: r, patchFlag: o, children: a, transition: l } = e, u = t ? Sw(s || {}, t) : s, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && fg(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? ce(r) ? r.concat(Hr(t)) : [r, Hr(t)] : Hr(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Oe ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && hs(e.ssContent),
    ssFallback: e.ssFallback && hs(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && i && qc(
    c,
    l.clone(c)
  ), c;
}
function Qs(e = " ", t = 0) {
  return me(yr, null, e, t);
}
function xw(e, t) {
  const n = me(Gr, null, e);
  return n.staticCount = t, n;
}
function fe(e = "", t = !1) {
  return t ? (J(), at(Ii, null, e)) : me(Ii, null, e);
}
function hn(e) {
  return e == null || typeof e == "boolean" ? me(Ii) : ce(e) ? me(
    Oe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : uo(e) ? Jn(e) : me(yr, null, String(e));
}
function Jn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : hs(e);
}
function Kc(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (ce(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Kc(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Jp(t) ? t._ctx = St : s === 3 && St && (St.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else le(t) ? (t = { default: t, _ctx: St }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [Qs(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Sw(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const s in i)
      if (s === "class")
        t.class !== i.class && (t.class = xt([t.class, i.class]));
      else if (s === "style")
        t.style = He([t.style, i.style]);
      else if (Go(s)) {
        const r = t[s], o = i[s];
        o && r !== o && !(ce(r) && r.includes(o)) && (t[s] = r ? [].concat(r, o) : o);
      } else s !== "" && (t[s] = i[s]);
  }
  return t;
}
function ln(e, t, n, i = null) {
  xn(e, t, 7, [
    n,
    i
  ]);
}
const kw = Kp();
let Ew = 0;
function Cw(e, t, n) {
  const i = e.type, s = (t ? t.appContext : e.appContext) || kw, r = {
    uid: Ew++,
    vnode: e,
    type: i,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new bp(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Zp(i, s),
    emitsOptions: lg(i, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ae,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: Ae,
    data: Ae,
    props: Ae,
    attrs: Ae,
    slots: Ae,
    refs: Ae,
    setupState: Ae,
    setupContext: null,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = dw.bind(null, r), e.ce && e.ce(r), r;
}
let Ze = null;
const ta = () => Ze || St;
let fo, vl;
{
  const e = Xo(), t = (n, i) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(i), (r) => {
      s.length > 1 ? s.forEach((o) => o(r)) : s[0](r);
    };
  };
  fo = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ze = n
  ), vl = t(
    "__VUE_SSR_SETTERS__",
    (n) => ds = n
  );
}
const br = (e) => {
  const t = Ze;
  return fo(e), e.scope.on(), () => {
    e.scope.off(), fo(t);
  };
}, $f = () => {
  Ze && Ze.scope.off(), fo(null);
};
function hg(e) {
  return e.vnode.shapeFlag & 4;
}
let ds = !1;
function Tw(e, t = !1, n = !1) {
  t && vl(t);
  const { props: i, children: s } = e.vnode, r = hg(e);
  Z0(e, i, r, t), iw(e, s, n);
  const o = r ? Aw(e, t) : void 0;
  return t && vl(!1), o;
}
function Aw(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, z0);
  const { setup: i } = n;
  if (i) {
    ci();
    const s = e.setupContext = i.length > 1 ? Pw(e) : null, r = br(e), o = pr(
      i,
      e,
      0,
      [
        e.props,
        s
      ]
    ), a = fp(o);
    if (ui(), r(), (a || e.sp) && !Ks(e) && Uc(e), a) {
      if (o.then($f, $f), t)
        return o.then((l) => {
          Bf(e, l, t);
        }).catch((l) => {
          gr(l, e, 0);
        });
      e.asyncDep = o;
    } else
      Bf(e, o, t);
  } else
    dg(e, t);
}
function Bf(e, t, n) {
  le(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Re(t) && (e.setupState = Rp(t)), dg(e, n);
}
let jf;
function dg(e, t, n) {
  const i = e.type;
  if (!e.render) {
    if (!t && jf && !i.render) {
      const s = i.template || Gc(e).template;
      if (s) {
        const { isCustomElement: r, compilerOptions: o } = e.appContext.config, { delimiters: a, compilerOptions: l } = i, u = nt(
          nt(
            {
              isCustomElement: r,
              delimiters: a
            },
            o
          ),
          l
        );
        i.render = jf(s, u);
      }
    }
    e.render = i.render || bn;
  }
  {
    const s = br(e);
    ci();
    try {
      V0(e);
    } finally {
      ui(), s();
    }
  }
}
const Ow = {
  get(e, t) {
    return lt(e, "get", ""), e[t];
  }
};
function Pw(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ow),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function na(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Rp(Qo(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Ys)
        return Ys[n](e);
    },
    has(t, n) {
      return n in t || n in Ys;
    }
  })) : e.proxy;
}
function Nw(e, t = !0) {
  return le(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Iw(e) {
  return le(e) && "__vccOpts" in e;
}
const $t = (e, t) => x0(e, t, ds);
function Yc(e, t, n) {
  const i = arguments.length;
  return i === 2 ? Re(t) && !ce(t) ? uo(t) ? me(e, null, [t]) : me(e, t) : me(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && uo(n) && (n = [n]), me(e, t, n));
}
const Mw = "3.5.12";
/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let _l;
const qf = typeof window < "u" && window.trustedTypes;
if (qf)
  try {
    _l = /* @__PURE__ */ qf.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const pg = _l ? (e) => _l.createHTML(e) : (e) => e, Lw = "http://www.w3.org/2000/svg", Dw = "http://www.w3.org/1998/Math/MathML", Nn = typeof document < "u" ? document : null, Uf = Nn && /* @__PURE__ */ Nn.createElement("template"), Rw = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const s = t === "svg" ? Nn.createElementNS(Lw, e) : t === "mathml" ? Nn.createElementNS(Dw, e) : n ? Nn.createElement(e, { is: n }) : Nn.createElement(e);
    return e === "select" && i && i.multiple != null && s.setAttribute("multiple", i.multiple), s;
  },
  createText: (e) => Nn.createTextNode(e),
  createComment: (e) => Nn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Nn.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, i, s, r) {
    const o = n ? n.previousSibling : t.lastChild;
    if (s && (s === r || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === r || !(s = s.nextSibling)); )
        ;
    else {
      Uf.innerHTML = pg(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Uf.content;
      if (i === "svg" || i === "mathml") {
        const l = a.firstChild;
        for (; l.firstChild; )
          a.appendChild(l.firstChild);
        a.removeChild(l);
      }
      t.insertBefore(a, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Fw = Symbol("_vtc");
function $w(e, t, n) {
  const i = e[Fw];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ho = Symbol("_vod"), gg = Symbol("_vsh"), mg = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[ho] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Is(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), Is(e, !0), i.enter(e)) : i.leave(e, () => {
      Is(e, !1);
    }) : Is(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Is(e, t);
  }
};
function Is(e, t) {
  e.style.display = t ? e[ho] : "none", e[gg] = !t;
}
const Bw = Symbol(""), jw = /(^|;)\s*display\s*:/;
function qw(e, t, n) {
  const i = e.style, s = Ke(n);
  let r = !1;
  if (n && !s) {
    if (t)
      if (Ke(t))
        for (const o of t.split(";")) {
          const a = o.slice(0, o.indexOf(":")).trim();
          n[a] == null && Kr(i, a, "");
        }
      else
        for (const o in t)
          n[o] == null && Kr(i, o, "");
    for (const o in n)
      o === "display" && (r = !0), Kr(i, o, n[o]);
  } else if (s) {
    if (t !== n) {
      const o = i[Bw];
      o && (n += ";" + o), i.cssText = n, r = jw.test(n);
    }
  } else t && e.removeAttribute("style");
  ho in e && (e[ho] = r ? i.display : "", e[gg] && (i.display = "none"));
}
const Wf = /\s*!important$/;
function Kr(e, t, n) {
  if (ce(n))
    n.forEach((i) => Kr(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = Uw(e, t);
    Wf.test(n) ? e.setProperty(
      ji(i),
      n.replace(Wf, ""),
      "important"
    ) : e[i] = n;
  }
}
const zf = ["Webkit", "Moz", "ms"], $a = {};
function Uw(e, t) {
  const n = $a[t];
  if (n)
    return n;
  let i = zt(t);
  if (i !== "filter" && i in e)
    return $a[t] = i;
  i = Yo(i);
  for (let s = 0; s < zf.length; s++) {
    const r = zf[s] + i;
    if (r in e)
      return $a[t] = r;
  }
  return t;
}
const Vf = "http://www.w3.org/1999/xlink";
function Gf(e, t, n, i, s, r = Jb(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Vf, t.slice(6, t.length)) : e.setAttributeNS(Vf, t, n) : n == null || r && !gp(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : li(n) ? String(n) : n
  );
}
function Hf(e, t, n, i, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? pg(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const a = r === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (a !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = gp(n) : n == null && a === "string" ? (n = "", o = !0) : a === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(s || t);
}
function Ww(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function zw(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const Kf = Symbol("_vei");
function Vw(e, t, n, i, s = null) {
  const r = e[Kf] || (e[Kf] = {}), o = r[t];
  if (i && o)
    o.value = i;
  else {
    const [a, l] = Gw(t);
    if (i) {
      const u = r[t] = Yw(
        i,
        s
      );
      Ww(e, a, u, l);
    } else o && (zw(e, a, o, l), r[t] = void 0);
  }
}
const Yf = /(?:Once|Passive|Capture)$/;
function Gw(e) {
  let t;
  if (Yf.test(e)) {
    t = {};
    let i;
    for (; i = e.match(Yf); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ji(e.slice(2)), t];
}
let Ba = 0;
const Hw = /* @__PURE__ */ Promise.resolve(), Kw = () => Ba || (Hw.then(() => Ba = 0), Ba = Date.now());
function Yw(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    xn(
      Xw(i, n.value),
      t,
      5,
      [i]
    );
  };
  return n.value = e, n.attached = Kw(), n;
}
function Xw(e, t) {
  if (ce(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (i) => (s) => !s._stopped && i && i(s)
    );
  } else
    return t;
}
const Xf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Jw = (e, t, n, i, s, r) => {
  const o = s === "svg";
  t === "class" ? $w(e, i, o) : t === "style" ? qw(e, n, i) : Go(t) ? Tc(t) || Vw(e, t, n, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Qw(e, t, i, o)) ? (Hf(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Gf(e, t, i, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Ke(i)) ? Hf(e, zt(t), i, r, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Gf(e, t, i, o));
};
function Qw(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Xf(t) && le(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Xf(t) && Ke(n) ? !1 : t in e;
}
const Zw = ["ctrl", "shift", "alt", "meta"], ev = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Zw.some((n) => e[`${n}Key`] && !t.includes(n))
}, TM = (e, t) => {
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = (s, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const a = ev[t[o]];
      if (a && a(s, t)) return;
    }
    return e(s, ...r);
  });
}, tv = /* @__PURE__ */ nt({ patchProp: Jw }, Rw);
let Jf;
function nv() {
  return Jf || (Jf = rw(tv));
}
const iv = (...e) => {
  const t = nv().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const s = rv(i);
    if (!s) return;
    const r = t._component;
    !le(r) && !r.render && !r.template && (r.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const o = n(s, !1, sv(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
  }, t;
};
function sv(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function rv(e) {
  return Ke(e) ? document.querySelector(e) : e;
}
/*!
 * shared v9.14.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
const po = typeof window < "u", fi = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), ov = (e, t, n) => av({ l: e, k: t, s: n }), av = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), et = (e) => typeof e == "number" && isFinite(e), lv = (e) => bg(e) === "[object Date]", go = (e) => bg(e) === "[object RegExp]", ia = (e) => ye(e) && Object.keys(e).length === 0, ft = Object.assign;
let Qf;
const Xc = () => Qf || (Qf = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Zf(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const cv = Object.prototype.hasOwnProperty;
function mo(e, t) {
  return cv.call(e, t);
}
const Xe = Array.isArray, qe = (e) => typeof e == "function", ne = (e) => typeof e == "string", $e = (e) => typeof e == "boolean", _e = (e) => e !== null && typeof e == "object", uv = (e) => _e(e) && qe(e.then) && qe(e.catch), yg = Object.prototype.toString, bg = (e) => yg.call(e), ye = (e) => {
  if (!_e(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, fv = (e) => e == null ? "" : Xe(e) || ye(e) && e.toString === yg ? JSON.stringify(e, null, 2) : String(e);
function hv(e, t = "") {
  return e.reduce((n, i, s) => s === 0 ? n + i : n + t + i, "");
}
function sa(e) {
  let t = e;
  return () => ++t;
}
function dv(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Mr = (e) => !_e(e) || Xe(e);
function Yr(e, t) {
  if (Mr(e) || Mr(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: i, des: s } = n.pop();
    Object.keys(i).forEach((r) => {
      _e(i[r]) && !_e(s[r]) && (s[r] = Array.isArray(i[r]) ? [] : {}), Mr(s[r]) || Mr(i[r]) ? s[r] = i[r] : n.push({ src: i[r], des: s[r] });
    });
  }
}
/*!
 * message-compiler v9.14.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
function pv(e, t, n) {
  return { line: e, column: t, offset: n };
}
function yo(e, t, n) {
  return { start: e, end: t };
}
const gv = /\{([0-9a-zA-Z]+)\}/g;
function wg(e, ...t) {
  return t.length === 1 && mv(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(gv, (n, i) => t.hasOwnProperty(i) ? t[i] : "");
}
const vg = Object.assign, eh = (e) => typeof e == "string", mv = (e) => e !== null && typeof e == "object";
function _g(e, t = "") {
  return e.reduce((n, i, s) => s === 0 ? n + i : n + t + i, "");
}
const Jc = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2
}, yv = {
  [Jc.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
};
function bv(e, t, ...n) {
  const i = wg(yv[e], ...n || []), s = { message: String(i), code: e };
  return t && (s.location = t), s;
}
const oe = {
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
}, wv = {
  // tokenizer error messages
  [oe.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [oe.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [oe.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [oe.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [oe.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [oe.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [oe.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [oe.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [oe.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [oe.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [oe.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [oe.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [oe.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [oe.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [oe.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [oe.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function Es(e, t, n = {}) {
  const { domain: i, messages: s, args: r } = n, o = wg((s || wv)[e] || "", ...r || []), a = new SyntaxError(String(o));
  return a.code = e, t && (a.location = t), a.domain = i, a;
}
function vv(e) {
  throw e;
}
const An = " ", _v = "\r", gt = `
`, xv = "\u2028", Sv = "\u2029";
function kv(e) {
  const t = e;
  let n = 0, i = 1, s = 1, r = 0;
  const o = (L) => t[L] === _v && t[L + 1] === gt, a = (L) => t[L] === gt, l = (L) => t[L] === Sv, u = (L) => t[L] === xv, c = (L) => o(L) || a(L) || l(L) || u(L), f = () => n, h = () => i, d = () => s, p = () => r, w = (L) => o(L) || l(L) || u(L) ? gt : t[L], E = () => w(n), v = () => w(n + r);
  function k() {
    return r = 0, c(n) && (i++, s = 0), o(n) && n++, n++, s++, t[n];
  }
  function g() {
    return o(n + r) && r++, r++, t[n + r];
  }
  function b() {
    n = 0, i = 1, s = 1, r = 0;
  }
  function A(L = 0) {
    r = L;
  }
  function N() {
    const L = n + r;
    for (; L !== n; )
      k();
    r = 0;
  }
  return {
    index: f,
    line: h,
    column: d,
    peekOffset: p,
    charAt: w,
    currentChar: E,
    currentPeek: v,
    next: k,
    peek: g,
    reset: b,
    resetPeek: A,
    skipToPeek: N
  };
}
const Gn = void 0, Ev = ".", th = "'", Cv = "tokenizer";
function Tv(e, t = {}) {
  const n = t.location !== !1, i = kv(e), s = () => i.index(), r = () => pv(i.line(), i.column(), i.index()), o = r(), a = s(), l = {
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
  }, u = () => l, { onError: c } = t;
  function f(y, _, T, ...U) {
    const G = u();
    if (_.column += T, _.offset += T, c) {
      const z = n ? yo(G.startLoc, _) : null, I = Es(y, z, {
        domain: Cv,
        args: U
      });
      c(I);
    }
  }
  function h(y, _, T) {
    y.endLoc = r(), y.currentType = _;
    const U = { type: _ };
    return n && (U.loc = yo(y.startLoc, y.endLoc)), T != null && (U.value = T), U;
  }
  const d = (y) => h(
    y,
    14
    /* TokenTypes.EOF */
  );
  function p(y, _) {
    return y.currentChar() === _ ? (y.next(), _) : (f(oe.EXPECTED_TOKEN, r(), 0, _), "");
  }
  function w(y) {
    let _ = "";
    for (; y.currentPeek() === An || y.currentPeek() === gt; )
      _ += y.currentPeek(), y.peek();
    return _;
  }
  function E(y) {
    const _ = w(y);
    return y.skipToPeek(), _;
  }
  function v(y) {
    if (y === Gn)
      return !1;
    const _ = y.charCodeAt(0);
    return _ >= 97 && _ <= 122 || // a-z
    _ >= 65 && _ <= 90 || // A-Z
    _ === 95;
  }
  function k(y) {
    if (y === Gn)
      return !1;
    const _ = y.charCodeAt(0);
    return _ >= 48 && _ <= 57;
  }
  function g(y, _) {
    const { currentType: T } = _;
    if (T !== 2)
      return !1;
    w(y);
    const U = v(y.currentPeek());
    return y.resetPeek(), U;
  }
  function b(y, _) {
    const { currentType: T } = _;
    if (T !== 2)
      return !1;
    w(y);
    const U = y.currentPeek() === "-" ? y.peek() : y.currentPeek(), G = k(U);
    return y.resetPeek(), G;
  }
  function A(y, _) {
    const { currentType: T } = _;
    if (T !== 2)
      return !1;
    w(y);
    const U = y.currentPeek() === th;
    return y.resetPeek(), U;
  }
  function N(y, _) {
    const { currentType: T } = _;
    if (T !== 8)
      return !1;
    w(y);
    const U = y.currentPeek() === ".";
    return y.resetPeek(), U;
  }
  function L(y, _) {
    const { currentType: T } = _;
    if (T !== 9)
      return !1;
    w(y);
    const U = v(y.currentPeek());
    return y.resetPeek(), U;
  }
  function B(y, _) {
    const { currentType: T } = _;
    if (!(T === 8 || T === 12))
      return !1;
    w(y);
    const U = y.currentPeek() === ":";
    return y.resetPeek(), U;
  }
  function j(y, _) {
    const { currentType: T } = _;
    if (T !== 10)
      return !1;
    const U = () => {
      const z = y.currentPeek();
      return z === "{" ? v(y.peek()) : z === "@" || z === "%" || z === "|" || z === ":" || z === "." || z === An || !z ? !1 : z === gt ? (y.peek(), U()) : K(y, !1);
    }, G = U();
    return y.resetPeek(), G;
  }
  function H(y) {
    w(y);
    const _ = y.currentPeek() === "|";
    return y.resetPeek(), _;
  }
  function D(y) {
    const _ = w(y), T = y.currentPeek() === "%" && y.peek() === "{";
    return y.resetPeek(), {
      isModulo: T,
      hasSpace: _.length > 0
    };
  }
  function K(y, _ = !0) {
    const T = (G = !1, z = "", I = !1) => {
      const F = y.currentPeek();
      return F === "{" ? z === "%" ? !1 : G : F === "@" || !F ? z === "%" ? !0 : G : F === "%" ? (y.peek(), T(G, "%", !0)) : F === "|" ? z === "%" || I ? !0 : !(z === An || z === gt) : F === An ? (y.peek(), T(!0, An, I)) : F === gt ? (y.peek(), T(!0, gt, I)) : !0;
    }, U = T();
    return _ && y.resetPeek(), U;
  }
  function Y(y, _) {
    const T = y.currentChar();
    return T === Gn ? Gn : _(T) ? (y.next(), T) : null;
  }
  function ae(y) {
    const _ = y.charCodeAt(0);
    return _ >= 97 && _ <= 122 || // a-z
    _ >= 65 && _ <= 90 || // A-Z
    _ >= 48 && _ <= 57 || // 0-9
    _ === 95 || // _
    _ === 36;
  }
  function it(y) {
    return Y(y, ae);
  }
  function Ce(y) {
    const _ = y.charCodeAt(0);
    return _ >= 97 && _ <= 122 || // a-z
    _ >= 65 && _ <= 90 || // A-Z
    _ >= 48 && _ <= 57 || // 0-9
    _ === 95 || // _
    _ === 36 || // $
    _ === 45;
  }
  function de(y) {
    return Y(y, Ce);
  }
  function ue(y) {
    const _ = y.charCodeAt(0);
    return _ >= 48 && _ <= 57;
  }
  function Pe(y) {
    return Y(y, ue);
  }
  function Ct(y) {
    const _ = y.charCodeAt(0);
    return _ >= 48 && _ <= 57 || // 0-9
    _ >= 65 && _ <= 70 || // A-F
    _ >= 97 && _ <= 102;
  }
  function Be(y) {
    return Y(y, Ct);
  }
  function We(y) {
    let _ = "", T = "";
    for (; _ = Pe(y); )
      T += _;
    return T;
  }
  function sn(y) {
    E(y);
    const _ = y.currentChar();
    return _ !== "%" && f(oe.EXPECTED_TOKEN, r(), 0, _), y.next(), "%";
  }
  function rn(y) {
    let _ = "";
    for (; ; ) {
      const T = y.currentChar();
      if (T === "{" || T === "}" || T === "@" || T === "|" || !T)
        break;
      if (T === "%")
        if (K(y))
          _ += T, y.next();
        else
          break;
      else if (T === An || T === gt)
        if (K(y))
          _ += T, y.next();
        else {
          if (H(y))
            break;
          _ += T, y.next();
        }
      else
        _ += T, y.next();
    }
    return _;
  }
  function ht(y) {
    E(y);
    let _ = "", T = "";
    for (; _ = de(y); )
      T += _;
    return y.currentChar() === Gn && f(oe.UNTERMINATED_CLOSING_BRACE, r(), 0), T;
  }
  function Tt(y) {
    E(y);
    let _ = "";
    return y.currentChar() === "-" ? (y.next(), _ += `-${We(y)}`) : _ += We(y), y.currentChar() === Gn && f(oe.UNTERMINATED_CLOSING_BRACE, r(), 0), _;
  }
  function Kt(y) {
    return y !== th && y !== gt;
  }
  function Yt(y) {
    E(y), p(y, "'");
    let _ = "", T = "";
    for (; _ = Y(y, Kt); )
      _ === "\\" ? T += on(y) : T += _;
    const U = y.currentChar();
    return U === gt || U === Gn ? (f(oe.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, r(), 0), U === gt && (y.next(), p(y, "'")), T) : (p(y, "'"), T);
  }
  function on(y) {
    const _ = y.currentChar();
    switch (_) {
      case "\\":
      case "'":
        return y.next(), `\\${_}`;
      case "u":
        return At(y, _, 4);
      case "U":
        return At(y, _, 6);
      default:
        return f(oe.UNKNOWN_ESCAPE_SEQUENCE, r(), 0, _), "";
    }
  }
  function At(y, _, T) {
    p(y, _);
    let U = "";
    for (let G = 0; G < T; G++) {
      const z = Be(y);
      if (!z) {
        f(oe.INVALID_UNICODE_ESCAPE_SEQUENCE, r(), 0, `\\${_}${U}${y.currentChar()}`);
        break;
      }
      U += z;
    }
    return `\\${_}${U}`;
  }
  function Cn(y) {
    return y !== "{" && y !== "}" && y !== An && y !== gt;
  }
  function Wi(y) {
    E(y);
    let _ = "", T = "";
    for (; _ = Y(y, Cn); )
      T += _;
    return T;
  }
  function C(y) {
    let _ = "", T = "";
    for (; _ = it(y); )
      T += _;
    return T;
  }
  function O(y) {
    const _ = (T) => {
      const U = y.currentChar();
      return U === "{" || U === "%" || U === "@" || U === "|" || U === "(" || U === ")" || !U || U === An ? T : (T += U, y.next(), _(T));
    };
    return _("");
  }
  function R(y) {
    E(y);
    const _ = p(
      y,
      "|"
      /* TokenChars.Pipe */
    );
    return E(y), _;
  }
  function V(y, _) {
    let T = null;
    switch (y.currentChar()) {
      case "{":
        return _.braceNest >= 1 && f(oe.NOT_ALLOW_NEST_PLACEHOLDER, r(), 0), y.next(), T = h(
          _,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), E(y), _.braceNest++, T;
      case "}":
        return _.braceNest > 0 && _.currentType === 2 && f(oe.EMPTY_PLACEHOLDER, r(), 0), y.next(), T = h(
          _,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), _.braceNest--, _.braceNest > 0 && E(y), _.inLinked && _.braceNest === 0 && (_.inLinked = !1), T;
      case "@":
        return _.braceNest > 0 && f(oe.UNTERMINATED_CLOSING_BRACE, r(), 0), T = q(y, _) || d(_), _.braceNest = 0, T;
      default: {
        let G = !0, z = !0, I = !0;
        if (H(y))
          return _.braceNest > 0 && f(oe.UNTERMINATED_CLOSING_BRACE, r(), 0), T = h(_, 1, R(y)), _.braceNest = 0, _.inLinked = !1, T;
        if (_.braceNest > 0 && (_.currentType === 5 || _.currentType === 6 || _.currentType === 7))
          return f(oe.UNTERMINATED_CLOSING_BRACE, r(), 0), _.braceNest = 0, W(y, _);
        if (G = g(y, _))
          return T = h(_, 5, ht(y)), E(y), T;
        if (z = b(y, _))
          return T = h(_, 6, Tt(y)), E(y), T;
        if (I = A(y, _))
          return T = h(_, 7, Yt(y)), E(y), T;
        if (!G && !z && !I)
          return T = h(_, 13, Wi(y)), f(oe.INVALID_TOKEN_IN_PLACEHOLDER, r(), 0, T.value), E(y), T;
        break;
      }
    }
    return T;
  }
  function q(y, _) {
    const { currentType: T } = _;
    let U = null;
    const G = y.currentChar();
    switch ((T === 8 || T === 9 || T === 12 || T === 10) && (G === gt || G === An) && f(oe.INVALID_LINKED_FORMAT, r(), 0), G) {
      case "@":
        return y.next(), U = h(
          _,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), _.inLinked = !0, U;
      case ".":
        return E(y), y.next(), h(
          _,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return E(y), y.next(), h(
          _,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return H(y) ? (U = h(_, 1, R(y)), _.braceNest = 0, _.inLinked = !1, U) : N(y, _) || B(y, _) ? (E(y), q(y, _)) : L(y, _) ? (E(y), h(_, 12, C(y))) : j(y, _) ? (E(y), G === "{" ? V(y, _) || U : h(_, 11, O(y))) : (T === 8 && f(oe.INVALID_LINKED_FORMAT, r(), 0), _.braceNest = 0, _.inLinked = !1, W(y, _));
    }
  }
  function W(y, _) {
    let T = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (_.braceNest > 0)
      return V(y, _) || d(_);
    if (_.inLinked)
      return q(y, _) || d(_);
    switch (y.currentChar()) {
      case "{":
        return V(y, _) || d(_);
      case "}":
        return f(oe.UNBALANCED_CLOSING_BRACE, r(), 0), y.next(), h(
          _,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return q(y, _) || d(_);
      default: {
        if (H(y))
          return T = h(_, 1, R(y)), _.braceNest = 0, _.inLinked = !1, T;
        const { isModulo: G, hasSpace: z } = D(y);
        if (G)
          return z ? h(_, 0, rn(y)) : h(_, 4, sn(y));
        if (K(y))
          return h(_, 0, rn(y));
        break;
      }
    }
    return T;
  }
  function X() {
    const { currentType: y, offset: _, startLoc: T, endLoc: U } = l;
    return l.lastType = y, l.lastOffset = _, l.lastStartLoc = T, l.lastEndLoc = U, l.offset = s(), l.startLoc = r(), i.currentChar() === Gn ? h(
      l,
      14
      /* TokenTypes.EOF */
    ) : W(i, l);
  }
  return {
    nextToken: X,
    currentOffset: s,
    currentPosition: r,
    context: u
  };
}
const Av = "parser", Ov = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Pv(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const i = parseInt(t || n, 16);
      return i <= 55295 || i >= 57344 ? String.fromCodePoint(i) : "�";
    }
  }
}
function Nv(e = {}) {
  const t = e.location !== !1, { onError: n, onWarn: i } = e;
  function s(g, b, A, N, ...L) {
    const B = g.currentPosition();
    if (B.offset += N, B.column += N, n) {
      const j = t ? yo(A, B) : null, H = Es(b, j, {
        domain: Av,
        args: L
      });
      n(H);
    }
  }
  function r(g, b, A, N, ...L) {
    const B = g.currentPosition();
    if (B.offset += N, B.column += N, i) {
      const j = t ? yo(A, B) : null;
      i(bv(b, j, L));
    }
  }
  function o(g, b, A) {
    const N = { type: g };
    return t && (N.start = b, N.end = b, N.loc = { start: A, end: A }), N;
  }
  function a(g, b, A, N) {
    t && (g.end = b, g.loc && (g.loc.end = A));
  }
  function l(g, b) {
    const A = g.context(), N = o(3, A.offset, A.startLoc);
    return N.value = b, a(N, g.currentOffset(), g.currentPosition()), N;
  }
  function u(g, b) {
    const A = g.context(), { lastOffset: N, lastStartLoc: L } = A, B = o(5, N, L);
    return B.index = parseInt(b, 10), g.nextToken(), a(B, g.currentOffset(), g.currentPosition()), B;
  }
  function c(g, b, A) {
    const N = g.context(), { lastOffset: L, lastStartLoc: B } = N, j = o(4, L, B);
    return j.key = b, A === !0 && (j.modulo = !0), g.nextToken(), a(j, g.currentOffset(), g.currentPosition()), j;
  }
  function f(g, b) {
    const A = g.context(), { lastOffset: N, lastStartLoc: L } = A, B = o(9, N, L);
    return B.value = b.replace(Ov, Pv), g.nextToken(), a(B, g.currentOffset(), g.currentPosition()), B;
  }
  function h(g) {
    const b = g.nextToken(), A = g.context(), { lastOffset: N, lastStartLoc: L } = A, B = o(8, N, L);
    return b.type !== 12 ? (s(g, oe.UNEXPECTED_EMPTY_LINKED_MODIFIER, A.lastStartLoc, 0), B.value = "", a(B, N, L), {
      nextConsumeToken: b,
      node: B
    }) : (b.value == null && s(g, oe.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, Xt(b)), B.value = b.value || "", a(B, g.currentOffset(), g.currentPosition()), {
      node: B
    });
  }
  function d(g, b) {
    const A = g.context(), N = o(7, A.offset, A.startLoc);
    return N.value = b, a(N, g.currentOffset(), g.currentPosition()), N;
  }
  function p(g) {
    const b = g.context(), A = o(6, b.offset, b.startLoc);
    let N = g.nextToken();
    if (N.type === 9) {
      const L = h(g);
      A.modifier = L.node, N = L.nextConsumeToken || g.nextToken();
    }
    switch (N.type !== 10 && s(g, oe.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Xt(N)), N = g.nextToken(), N.type === 2 && (N = g.nextToken()), N.type) {
      case 11:
        N.value == null && s(g, oe.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Xt(N)), A.key = d(g, N.value || "");
        break;
      case 5:
        N.value == null && s(g, oe.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Xt(N)), A.key = c(g, N.value || "");
        break;
      case 6:
        N.value == null && s(g, oe.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Xt(N)), A.key = u(g, N.value || "");
        break;
      case 7:
        N.value == null && s(g, oe.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Xt(N)), A.key = f(g, N.value || "");
        break;
      default: {
        s(g, oe.UNEXPECTED_EMPTY_LINKED_KEY, b.lastStartLoc, 0);
        const L = g.context(), B = o(7, L.offset, L.startLoc);
        return B.value = "", a(B, L.offset, L.startLoc), A.key = B, a(A, L.offset, L.startLoc), {
          nextConsumeToken: N,
          node: A
        };
      }
    }
    return a(A, g.currentOffset(), g.currentPosition()), {
      node: A
    };
  }
  function w(g) {
    const b = g.context(), A = b.currentType === 1 ? g.currentOffset() : b.offset, N = b.currentType === 1 ? b.endLoc : b.startLoc, L = o(2, A, N);
    L.items = [];
    let B = null, j = null;
    do {
      const K = B || g.nextToken();
      switch (B = null, K.type) {
        case 0:
          K.value == null && s(g, oe.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Xt(K)), L.items.push(l(g, K.value || ""));
          break;
        case 6:
          K.value == null && s(g, oe.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Xt(K)), L.items.push(u(g, K.value || ""));
          break;
        case 4:
          j = !0;
          break;
        case 5:
          K.value == null && s(g, oe.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Xt(K)), L.items.push(c(g, K.value || "", !!j)), j && (r(g, Jc.USE_MODULO_SYNTAX, b.lastStartLoc, 0, Xt(K)), j = null);
          break;
        case 7:
          K.value == null && s(g, oe.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Xt(K)), L.items.push(f(g, K.value || ""));
          break;
        case 8: {
          const Y = p(g);
          L.items.push(Y.node), B = Y.nextConsumeToken || null;
          break;
        }
      }
    } while (b.currentType !== 14 && b.currentType !== 1);
    const H = b.currentType === 1 ? b.lastOffset : g.currentOffset(), D = b.currentType === 1 ? b.lastEndLoc : g.currentPosition();
    return a(L, H, D), L;
  }
  function E(g, b, A, N) {
    const L = g.context();
    let B = N.items.length === 0;
    const j = o(1, b, A);
    j.cases = [], j.cases.push(N);
    do {
      const H = w(g);
      B || (B = H.items.length === 0), j.cases.push(H);
    } while (L.currentType !== 14);
    return B && s(g, oe.MUST_HAVE_MESSAGES_IN_PLURAL, A, 0), a(j, g.currentOffset(), g.currentPosition()), j;
  }
  function v(g) {
    const b = g.context(), { offset: A, startLoc: N } = b, L = w(g);
    return b.currentType === 14 ? L : E(g, A, N, L);
  }
  function k(g) {
    const b = Tv(g, vg({}, e)), A = b.context(), N = o(0, A.offset, A.startLoc);
    return t && N.loc && (N.loc.source = g), N.body = v(b), e.onCacheKey && (N.cacheKey = e.onCacheKey(g)), A.currentType !== 14 && s(b, oe.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, g[A.offset] || ""), a(N, b.currentOffset(), b.currentPosition()), N;
  }
  return { parse: k };
}
function Xt(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Iv(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (r) => (n.helpers.add(r), r) };
}
function nh(e, t) {
  for (let n = 0; n < e.length; n++)
    Qc(e[n], t);
}
function Qc(e, t) {
  switch (e.type) {
    case 1:
      nh(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      nh(e.items, t);
      break;
    case 6: {
      Qc(e.key, t), t.helper(
        "linked"
        /* HelperNameMap.LINKED */
      ), t.helper(
        "type"
        /* HelperNameMap.TYPE */
      );
      break;
    }
    case 5:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "list"
        /* HelperNameMap.LIST */
      );
      break;
    case 4:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "named"
        /* HelperNameMap.NAMED */
      );
      break;
  }
}
function Mv(e, t = {}) {
  const n = Iv(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Qc(e.body, n);
  const i = n.context();
  e.helpers = Array.from(i.helpers);
}
function Lv(e) {
  const t = e.body;
  return t.type === 2 ? ih(t) : t.cases.forEach((n) => ih(n)), e;
}
function ih(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const i = e.items[n];
      if (!(i.type === 3 || i.type === 9) || i.value == null)
        break;
      t.push(i.value);
    }
    if (t.length === e.items.length) {
      e.static = _g(t);
      for (let n = 0; n < e.items.length; n++) {
        const i = e.items[n];
        (i.type === 3 || i.type === 9) && delete i.value;
      }
    }
  }
}
const Dv = "minifier";
function Ki(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Ki(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let i = 0; i < n.length; i++)
        Ki(n[i]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let i = 0; i < n.length; i++)
        Ki(n[i]);
      t.i = n, delete t.items, t.static && (t.s = t.static, delete t.static);
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const t = e;
      t.value && (t.v = t.value, delete t.value);
      break;
    }
    case 6: {
      const t = e;
      Ki(t.key), t.k = t.key, delete t.key, t.modifier && (Ki(t.modifier), t.m = t.modifier, delete t.modifier);
      break;
    }
    case 5: {
      const t = e;
      t.i = t.index, delete t.index;
      break;
    }
    case 4: {
      const t = e;
      t.k = t.key, delete t.key;
      break;
    }
    default:
      throw Es(oe.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: Dv,
        args: [e.type]
      });
  }
  delete e.type;
}
const Rv = "parser";
function Fv(e, t) {
  const { sourceMap: n, filename: i, breakLineCode: s, needIndent: r } = t, o = t.location !== !1, a = {
    filename: i,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: s,
    needIndent: r,
    indentLevel: 0
  };
  o && e.loc && (a.source = e.loc.source);
  const l = () => a;
  function u(E, v) {
    a.code += E;
  }
  function c(E, v = !0) {
    const k = v ? s : "";
    u(r ? k + "  ".repeat(E) : k);
  }
  function f(E = !0) {
    const v = ++a.indentLevel;
    E && c(v);
  }
  function h(E = !0) {
    const v = --a.indentLevel;
    E && c(v);
  }
  function d() {
    c(a.indentLevel);
  }
  return {
    context: l,
    push: u,
    indent: f,
    deindent: h,
    newline: d,
    helper: (E) => `_${E}`,
    needIndent: () => a.needIndent
  };
}
function $v(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), ps(e, t.key), t.modifier ? (e.push(", "), ps(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Bv(e, t) {
  const { helper: n, needIndent: i } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(i());
  const s = t.items.length;
  for (let r = 0; r < s && (ps(e, t.items[r]), r !== s - 1); r++)
    e.push(", ");
  e.deindent(i()), e.push("])");
}
function jv(e, t) {
  const { helper: n, needIndent: i } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(i());
    const s = t.cases.length;
    for (let r = 0; r < s && (ps(e, t.cases[r]), r !== s - 1); r++)
      e.push(", ");
    e.deindent(i()), e.push("])");
  }
}
function qv(e, t) {
  t.body ? ps(e, t.body) : e.push("null");
}
function ps(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      qv(e, t);
      break;
    case 1:
      jv(e, t);
      break;
    case 2:
      Bv(e, t);
      break;
    case 6:
      $v(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "list"
        /* HelperNameMap.LIST */
      )}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "named"
        /* HelperNameMap.NAMED */
      )}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
    default:
      throw Es(oe.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: Rv,
        args: [t.type]
      });
  }
}
const Uv = (e, t = {}) => {
  const n = eh(t.mode) ? t.mode : "normal", i = eh(t.filename) ? t.filename : "message.intl", s = !!t.sourceMap, r = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, o = t.needIndent ? t.needIndent : n !== "arrow", a = e.helpers || [], l = Fv(e, {
    mode: n,
    filename: i,
    sourceMap: s,
    breakLineCode: r,
    needIndent: o
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(o), a.length > 0 && (l.push(`const { ${_g(a.map((f) => `${f}: _${f}`), ", ")} } = ctx`), l.newline()), l.push("return "), ps(l, e), l.deindent(o), l.push("}"), delete e.helpers;
  const { code: u, map: c } = l.context();
  return {
    ast: e,
    code: u,
    map: c ? c.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Wv(e, t = {}) {
  const n = vg({}, t), i = !!n.jit, s = !!n.minify, r = n.optimize == null ? !0 : n.optimize, a = Nv(n).parse(e);
  return i ? (r && Lv(a), s && Ki(a), { ast: a, code: "" }) : (Mv(a, n), Uv(a, n));
}
/*!
 * core-base v9.14.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
function zv() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Xc().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const hi = [];
hi[
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
hi[
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
hi[
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
hi[
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
hi[
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
hi[
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
hi[
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
const Vv = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Gv(e) {
  return Vv.test(e);
}
function Hv(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Kv(e) {
  if (e == null)
    return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;
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
function Yv(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Gv(t) ? Hv(t) : "*" + t;
}
function Xv(e) {
  const t = [];
  let n = -1, i = 0, s = 0, r, o, a, l, u, c, f;
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
    o !== void 0 && (t.push(o), o = void 0);
  }, h[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    h[
      0
      /* Actions.APPEND */
    ](), s++;
  }, h[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (s > 0)
      s--, i = 4, h[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (s = 0, o === void 0 || (o = Yv(o), o === !1))
        return !1;
      h[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function d() {
    const p = e[n + 1];
    if (i === 5 && p === "'" || i === 6 && p === '"')
      return n++, a = "\\" + p, h[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; i !== null; )
    if (n++, r = e[n], !(r === "\\" && d())) {
      if (l = Kv(r), f = hi[i], u = f[l] || f.l || 8, u === 8 || (i = u[0], u[1] !== void 0 && (c = h[u[1]], c && (a = r, c() === !1))))
        return;
      if (i === 7)
        return t;
    }
}
const sh = /* @__PURE__ */ new Map();
function Jv(e, t) {
  return _e(e) ? e[t] : null;
}
function Qv(e, t) {
  if (!_e(e))
    return null;
  let n = sh.get(t);
  if (n || (n = Xv(t), n && sh.set(t, n)), !n)
    return null;
  const i = n.length;
  let s = e, r = 0;
  for (; r < i; ) {
    const o = s[n[r]];
    if (o === void 0 || qe(s))
      return null;
    s = o, r++;
  }
  return s;
}
const Zv = (e) => e, e1 = (e) => "", t1 = "text", n1 = (e) => e.length === 0 ? "" : hv(e), i1 = fv;
function rh(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function s1(e) {
  const t = et(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (et(e.named.count) || et(e.named.n)) ? et(e.named.count) ? e.named.count : et(e.named.n) ? e.named.n : t : t;
}
function r1(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function o1(e = {}) {
  const t = e.locale, n = s1(e), i = _e(e.pluralRules) && ne(t) && qe(e.pluralRules[t]) ? e.pluralRules[t] : rh, s = _e(e.pluralRules) && ne(t) && qe(e.pluralRules[t]) ? rh : void 0, r = (v) => v[i(n, v.length, s)], o = e.list || [], a = (v) => o[v], l = e.named || {};
  et(e.pluralIndex) && r1(n, l);
  const u = (v) => l[v];
  function c(v) {
    const k = qe(e.messages) ? e.messages(v) : _e(e.messages) ? e.messages[v] : !1;
    return k || (e.parent ? e.parent.message(v) : e1);
  }
  const f = (v) => e.modifiers ? e.modifiers[v] : Zv, h = ye(e.processor) && qe(e.processor.normalize) ? e.processor.normalize : n1, d = ye(e.processor) && qe(e.processor.interpolate) ? e.processor.interpolate : i1, p = ye(e.processor) && ne(e.processor.type) ? e.processor.type : t1, E = {
    list: a,
    named: u,
    plural: r,
    linked: (v, ...k) => {
      const [g, b] = k;
      let A = "text", N = "";
      k.length === 1 ? _e(g) ? (N = g.modifier || N, A = g.type || A) : ne(g) && (N = g || N) : k.length === 2 && (ne(g) && (N = g || N), ne(b) && (A = b || A));
      const L = c(v)(E), B = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        A === "vnode" && Xe(L) && N ? L[0] : L
      );
      return N ? f(N)(B, A) : B;
    },
    message: c,
    type: p,
    interpolate: d,
    normalize: h,
    values: ft({}, o, l)
  };
  return E;
}
let ar = null;
function a1(e) {
  ar = e;
}
function l1(e, t, n) {
  ar && ar.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const c1 = /* @__PURE__ */ u1(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function u1(e) {
  return (t) => ar && ar.emit(e, t);
}
const xg = Jc.__EXTEND_POINT__, mi = sa(xg), f1 = {
  NOT_FOUND_KEY: xg,
  // 2
  FALLBACK_TO_TRANSLATE: mi(),
  // 3
  CANNOT_FORMAT_NUMBER: mi(),
  // 4
  FALLBACK_TO_NUMBER_FORMAT: mi(),
  // 5
  CANNOT_FORMAT_DATE: mi(),
  // 6
  FALLBACK_TO_DATE_FORMAT: mi(),
  // 7
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: mi(),
  // 8
  __EXTEND_POINT__: mi()
  // 9
}, Sg = oe.__EXTEND_POINT__, yi = sa(Sg), pn = {
  INVALID_ARGUMENT: Sg,
  // 17
  INVALID_DATE_ARGUMENT: yi(),
  // 18
  INVALID_ISO_DATE_ARGUMENT: yi(),
  // 19
  NOT_SUPPORT_NON_STRING_MESSAGE: yi(),
  // 20
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: yi(),
  // 21
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: yi(),
  // 22
  NOT_SUPPORT_LOCALE_TYPE: yi(),
  // 23
  __EXTEND_POINT__: yi()
  // 24
};
function Rn(e) {
  return Es(e, null, void 0);
}
function Zc(e, t) {
  return t.locale != null ? oh(t.locale) : oh(e.locale);
}
let ja;
function oh(e) {
  if (ne(e))
    return e;
  if (qe(e)) {
    if (e.resolvedOnce && ja != null)
      return ja;
    if (e.constructor.name === "Function") {
      const t = e();
      if (uv(t))
        throw Rn(pn.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return ja = t;
    } else
      throw Rn(pn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Rn(pn.NOT_SUPPORT_LOCALE_TYPE);
}
function h1(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Xe(t) ? t : _e(t) ? Object.keys(t) : ne(t) ? [t] : [n]
  ])];
}
function kg(e, t, n) {
  const i = ne(n) ? n : bo, s = e;
  s.__localeChainCache || (s.__localeChainCache = /* @__PURE__ */ new Map());
  let r = s.__localeChainCache.get(i);
  if (!r) {
    r = [];
    let o = [n];
    for (; Xe(o); )
      o = ah(r, o, t);
    const a = Xe(t) || !ye(t) ? t : t.default ? t.default : null;
    o = ne(a) ? [a] : a, Xe(o) && ah(r, o, !1), s.__localeChainCache.set(i, r);
  }
  return r;
}
function ah(e, t, n) {
  let i = !0;
  for (let s = 0; s < t.length && $e(i); s++) {
    const r = t[s];
    ne(r) && (i = d1(e, t[s], n));
  }
  return i;
}
function d1(e, t, n) {
  let i;
  const s = t.split("-");
  do {
    const r = s.join("-");
    i = p1(e, r, n), s.splice(-1, 1);
  } while (s.length && i === !0);
  return i;
}
function p1(e, t, n) {
  let i = !1;
  if (!e.includes(t) && (i = !0, t)) {
    i = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (Xe(n) || ye(n)) && n[s] && (i = n[s]);
  }
  return i;
}
const g1 = "9.14.1", ra = -1, bo = "en-US", lh = "", ch = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function m1() {
  return {
    upper: (e, t) => t === "text" && ne(e) ? e.toUpperCase() : t === "vnode" && _e(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && ne(e) ? e.toLowerCase() : t === "vnode" && _e(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && ne(e) ? ch(e) : t === "vnode" && _e(e) && "__v_isVNode" in e ? ch(e.children) : e
  };
}
let Eg;
function y1(e) {
  Eg = e;
}
let Cg;
function b1(e) {
  Cg = e;
}
let Tg;
function w1(e) {
  Tg = e;
}
let Ag = null;
const v1 = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  Ag = e;
}, _1 = /* @__NO_SIDE_EFFECTS__ */ () => Ag;
let Og = null;
const uh = (e) => {
  Og = e;
}, x1 = () => Og;
let fh = 0;
function S1(e = {}) {
  const t = qe(e.onWarn) ? e.onWarn : dv, n = ne(e.version) ? e.version : g1, i = ne(e.locale) || qe(e.locale) ? e.locale : bo, s = qe(i) ? bo : i, r = Xe(e.fallbackLocale) || ye(e.fallbackLocale) || ne(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s, o = ye(e.messages) ? e.messages : { [s]: {} }, a = ye(e.datetimeFormats) ? e.datetimeFormats : { [s]: {} }, l = ye(e.numberFormats) ? e.numberFormats : { [s]: {} }, u = ft({}, e.modifiers || {}, m1()), c = e.pluralRules || {}, f = qe(e.missing) ? e.missing : null, h = $e(e.missingWarn) || go(e.missingWarn) ? e.missingWarn : !0, d = $e(e.fallbackWarn) || go(e.fallbackWarn) ? e.fallbackWarn : !0, p = !!e.fallbackFormat, w = !!e.unresolving, E = qe(e.postTranslation) ? e.postTranslation : null, v = ye(e.processor) ? e.processor : null, k = $e(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, g = !!e.escapeParameter, b = qe(e.messageCompiler) ? e.messageCompiler : Eg, A = qe(e.messageResolver) ? e.messageResolver : Cg || Jv, N = qe(e.localeFallbacker) ? e.localeFallbacker : Tg || h1, L = _e(e.fallbackContext) ? e.fallbackContext : void 0, B = e, j = _e(B.__datetimeFormatters) ? B.__datetimeFormatters : /* @__PURE__ */ new Map(), H = _e(B.__numberFormatters) ? B.__numberFormatters : /* @__PURE__ */ new Map(), D = _e(B.__meta) ? B.__meta : {};
  fh++;
  const K = {
    version: n,
    cid: fh,
    locale: i,
    fallbackLocale: r,
    messages: o,
    modifiers: u,
    pluralRules: c,
    missing: f,
    missingWarn: h,
    fallbackWarn: d,
    fallbackFormat: p,
    unresolving: w,
    postTranslation: E,
    processor: v,
    warnHtmlMessage: k,
    escapeParameter: g,
    messageCompiler: b,
    messageResolver: A,
    localeFallbacker: N,
    fallbackContext: L,
    onWarn: t,
    __meta: D
  };
  return K.datetimeFormats = a, K.numberFormats = l, K.__datetimeFormatters = j, K.__numberFormatters = H, __INTLIFY_PROD_DEVTOOLS__ && l1(K, n, D), K;
}
function eu(e, t, n, i, s) {
  const { missing: r, onWarn: o } = e;
  if (r !== null) {
    const a = r(e, n, t, s);
    return ne(a) ? a : t;
  } else
    return t;
}
function Ms(e, t, n) {
  const i = e;
  i.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function k1(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function E1(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let i = n + 1; i < t.length; i++)
    if (k1(e, t[i]))
      return !0;
  return !1;
}
function qa(e) {
  return (n) => C1(n, e);
}
function C1(e, t) {
  const n = t.b || t.body;
  if ((n.t || n.type) === 1) {
    const i = n, s = i.c || i.cases;
    return e.plural(s.reduce((r, o) => [
      ...r,
      hh(e, o)
    ], []));
  } else
    return hh(e, n);
}
function hh(e, t) {
  const n = t.s || t.static;
  if (n)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const i = (t.i || t.items).reduce((s, r) => [...s, xl(e, r)], []);
    return e.normalize(i);
  }
}
function xl(e, t) {
  const n = t.t || t.type;
  switch (n) {
    case 3: {
      const i = t;
      return i.v || i.value;
    }
    case 9: {
      const i = t;
      return i.v || i.value;
    }
    case 4: {
      const i = t;
      return e.interpolate(e.named(i.k || i.key));
    }
    case 5: {
      const i = t;
      return e.interpolate(e.list(i.i != null ? i.i : i.index));
    }
    case 6: {
      const i = t, s = i.m || i.modifier;
      return e.linked(xl(e, i.k || i.key), s ? xl(e, s) : void 0, e.type);
    }
    case 7: {
      const i = t;
      return i.v || i.value;
    }
    case 8: {
      const i = t;
      return i.v || i.value;
    }
    default:
      throw new Error(`unhandled node type on format message part: ${n}`);
  }
}
const T1 = (e) => e;
let Lr = /* @__PURE__ */ Object.create(null);
const gs = (e) => _e(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e);
function A1(e, t = {}) {
  let n = !1;
  const i = t.onError || vv;
  return t.onError = (s) => {
    n = !0, i(s);
  }, { ...Wv(e, t), detectError: n };
}
function O1(e, t) {
  if (ne(e)) {
    $e(t.warnHtmlMessage) && t.warnHtmlMessage;
    const i = (t.onCacheKey || T1)(e), s = Lr[i];
    if (s)
      return s;
    const { ast: r, detectError: o } = A1(e, {
      ...t,
      location: !1,
      jit: !0
    }), a = qa(r);
    return o ? a : Lr[i] = a;
  } else {
    const n = e.cacheKey;
    if (n) {
      const i = Lr[n];
      return i || (Lr[n] = qa(e));
    } else
      return qa(e);
  }
}
const dh = () => "", Bt = (e) => qe(e);
function ph(e, ...t) {
  const { fallbackFormat: n, postTranslation: i, unresolving: s, messageCompiler: r, fallbackLocale: o, messages: a } = e, [l, u] = Sl(...t), c = $e(u.missingWarn) ? u.missingWarn : e.missingWarn, f = $e(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, h = $e(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, d = !!u.resolvedMessage, p = ne(u.default) || $e(u.default) ? $e(u.default) ? r ? l : () => l : u.default : n ? r ? l : () => l : "", w = n || p !== "", E = Zc(e, u);
  h && P1(u);
  let [v, k, g] = d ? [
    l,
    E,
    a[E] || {}
  ] : Pg(e, l, E, o, f, c), b = v, A = l;
  if (!d && !(ne(b) || gs(b) || Bt(b)) && w && (b = p, A = b), !d && (!(ne(b) || gs(b) || Bt(b)) || !ne(k)))
    return s ? ra : l;
  let N = !1;
  const L = () => {
    N = !0;
  }, B = Bt(b) ? b : Ng(e, l, k, b, A, L);
  if (N)
    return b;
  const j = M1(e, k, g, u), H = o1(j), D = N1(e, B, H), K = i ? i(D, l) : D;
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const Y = {
      timestamp: Date.now(),
      key: ne(l) ? l : Bt(b) ? b.key : "",
      locale: k || (Bt(b) ? b.locale : ""),
      format: ne(b) ? b : Bt(b) ? b.source : "",
      message: K
    };
    Y.meta = ft({}, e.__meta, /* @__PURE__ */ _1() || {}), c1(Y);
  }
  return K;
}
function P1(e) {
  Xe(e.list) ? e.list = e.list.map((t) => ne(t) ? Zf(t) : t) : _e(e.named) && Object.keys(e.named).forEach((t) => {
    ne(e.named[t]) && (e.named[t] = Zf(e.named[t]));
  });
}
function Pg(e, t, n, i, s, r) {
  const { messages: o, onWarn: a, messageResolver: l, localeFallbacker: u } = e, c = u(e, i, n);
  let f = {}, h, d = null;
  const p = "translate";
  for (let w = 0; w < c.length && (h = c[w], f = o[h] || {}, (d = l(f, t)) === null && (d = f[t]), !(ne(d) || gs(d) || Bt(d))); w++)
    if (!E1(h, c)) {
      const E = eu(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        h,
        r,
        p
      );
      E !== t && (d = E);
    }
  return [d, h, f];
}
function Ng(e, t, n, i, s, r) {
  const { messageCompiler: o, warnHtmlMessage: a } = e;
  if (Bt(i)) {
    const u = i;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (o == null) {
    const u = () => i;
    return u.locale = n, u.key = t, u;
  }
  const l = o(i, I1(e, n, s, i, a, r));
  return l.locale = n, l.key = t, l.source = i, l;
}
function N1(e, t, n) {
  return t(n);
}
function Sl(...e) {
  const [t, n, i] = e, s = {};
  if (!ne(t) && !et(t) && !Bt(t) && !gs(t))
    throw Rn(pn.INVALID_ARGUMENT);
  const r = et(t) ? String(t) : (Bt(t), t);
  return et(n) ? s.plural = n : ne(n) ? s.default = n : ye(n) && !ia(n) ? s.named = n : Xe(n) && (s.list = n), et(i) ? s.plural = i : ne(i) ? s.default = i : ye(i) && ft(s, i), [r, s];
}
function I1(e, t, n, i, s, r) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (o) => {
      throw r && r(o), o;
    },
    onCacheKey: (o) => ov(t, n, o)
  };
}
function M1(e, t, n, i) {
  const { modifiers: s, pluralRules: r, messageResolver: o, fallbackLocale: a, fallbackWarn: l, missingWarn: u, fallbackContext: c } = e, h = {
    locale: t,
    modifiers: s,
    pluralRules: r,
    messages: (d) => {
      let p = o(n, d);
      if (p == null && c) {
        const [, , w] = Pg(c, d, t, a, l, u);
        p = o(w, d);
      }
      if (ne(p) || gs(p)) {
        let w = !1;
        const v = Ng(e, d, t, p, d, () => {
          w = !0;
        });
        return w ? dh : v;
      } else return Bt(p) ? p : dh;
    }
  };
  return e.processor && (h.processor = e.processor), i.list && (h.list = i.list), i.named && (h.named = i.named), et(i.plural) && (h.pluralIndex = i.plural), h;
}
function gh(e, ...t) {
  const { datetimeFormats: n, unresolving: i, fallbackLocale: s, onWarn: r, localeFallbacker: o } = e, { __datetimeFormatters: a } = e, [l, u, c, f] = kl(...t), h = $e(c.missingWarn) ? c.missingWarn : e.missingWarn;
  $e(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const d = !!c.part, p = Zc(e, c), w = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    p
  );
  if (!ne(l) || l === "")
    return new Intl.DateTimeFormat(p, f).format(u);
  let E = {}, v, k = null;
  const g = "datetime format";
  for (let N = 0; N < w.length && (v = w[N], E = n[v] || {}, k = E[l], !ye(k)); N++)
    eu(e, l, v, h, g);
  if (!ye(k) || !ne(v))
    return i ? ra : l;
  let b = `${v}__${l}`;
  ia(f) || (b = `${b}__${JSON.stringify(f)}`);
  let A = a.get(b);
  return A || (A = new Intl.DateTimeFormat(v, ft({}, k, f)), a.set(b, A)), d ? A.formatToParts(u) : A.format(u);
}
const Ig = [
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
function kl(...e) {
  const [t, n, i, s] = e, r = {};
  let o = {}, a;
  if (ne(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw Rn(pn.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    a = new Date(u);
    try {
      a.toISOString();
    } catch {
      throw Rn(pn.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (lv(t)) {
    if (isNaN(t.getTime()))
      throw Rn(pn.INVALID_DATE_ARGUMENT);
    a = t;
  } else if (et(t))
    a = t;
  else
    throw Rn(pn.INVALID_ARGUMENT);
  return ne(n) ? r.key = n : ye(n) && Object.keys(n).forEach((l) => {
    Ig.includes(l) ? o[l] = n[l] : r[l] = n[l];
  }), ne(i) ? r.locale = i : ye(i) && (o = i), ye(s) && (o = s), [r.key || "", a, r, o];
}
function mh(e, t, n) {
  const i = e;
  for (const s in n) {
    const r = `${t}__${s}`;
    i.__datetimeFormatters.has(r) && i.__datetimeFormatters.delete(r);
  }
}
function yh(e, ...t) {
  const { numberFormats: n, unresolving: i, fallbackLocale: s, onWarn: r, localeFallbacker: o } = e, { __numberFormatters: a } = e, [l, u, c, f] = El(...t), h = $e(c.missingWarn) ? c.missingWarn : e.missingWarn;
  $e(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const d = !!c.part, p = Zc(e, c), w = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    p
  );
  if (!ne(l) || l === "")
    return new Intl.NumberFormat(p, f).format(u);
  let E = {}, v, k = null;
  const g = "number format";
  for (let N = 0; N < w.length && (v = w[N], E = n[v] || {}, k = E[l], !ye(k)); N++)
    eu(e, l, v, h, g);
  if (!ye(k) || !ne(v))
    return i ? ra : l;
  let b = `${v}__${l}`;
  ia(f) || (b = `${b}__${JSON.stringify(f)}`);
  let A = a.get(b);
  return A || (A = new Intl.NumberFormat(v, ft({}, k, f)), a.set(b, A)), d ? A.formatToParts(u) : A.format(u);
}
const Mg = [
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
function El(...e) {
  const [t, n, i, s] = e, r = {};
  let o = {};
  if (!et(t))
    throw Rn(pn.INVALID_ARGUMENT);
  const a = t;
  return ne(n) ? r.key = n : ye(n) && Object.keys(n).forEach((l) => {
    Mg.includes(l) ? o[l] = n[l] : r[l] = n[l];
  }), ne(i) ? r.locale = i : ye(i) && (o = i), ye(s) && (o = s), [r.key || "", a, r, o];
}
function bh(e, t, n) {
  const i = e;
  for (const s in n) {
    const r = `${t}__${s}`;
    i.__numberFormatters.has(r) && i.__numberFormatters.delete(r);
  }
}
zv();
/*!
 * vue-i18n v9.14.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
const L1 = "9.14.1";
function D1() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Xc().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Lg = f1.__EXTEND_POINT__, On = sa(Lg);
On(), On(), On(), On(), On(), On(), On(), On(), On();
const Dg = pn.__EXTEND_POINT__, wt = sa(Dg), Vt = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Dg,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: wt(),
  // 25
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: wt(),
  // 26
  NOT_INSTALLED: wt(),
  // 27
  NOT_AVAILABLE_IN_LEGACY_MODE: wt(),
  // 28
  // directive module errors
  REQUIRED_VALUE: wt(),
  // 29
  INVALID_VALUE: wt(),
  // 30
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: wt(),
  // 31
  NOT_INSTALLED_WITH_PROVIDE: wt(),
  // 32
  // unexpected error
  UNEXPECTED_ERROR: wt(),
  // 33
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: wt(),
  // 34
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: wt(),
  // 35
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: wt(),
  // 36
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: wt(),
  // 37
  // for enhancement
  __EXTEND_POINT__: wt()
  // 38
};
function en(e, ...t) {
  return Es(e, null, void 0);
}
const Cl = /* @__PURE__ */ fi("__translateVNode"), Tl = /* @__PURE__ */ fi("__datetimeParts"), Al = /* @__PURE__ */ fi("__numberParts"), R1 = fi("__setPluralRules"), F1 = /* @__PURE__ */ fi("__injectWithOption"), Ol = /* @__PURE__ */ fi("__dispose");
function lr(e) {
  if (!_e(e))
    return e;
  for (const t in e)
    if (mo(e, t))
      if (!t.includes("."))
        _e(e[t]) && lr(e[t]);
      else {
        const n = t.split("."), i = n.length - 1;
        let s = e, r = !1;
        for (let o = 0; o < i; o++) {
          if (n[o] in s || (s[n[o]] = {}), !_e(s[n[o]])) {
            r = !0;
            break;
          }
          s = s[n[o]];
        }
        r || (s[n[i]] = e[t], delete e[t]), _e(s[n[i]]) && lr(s[n[i]]);
      }
  return e;
}
function Rg(e, t) {
  const { messages: n, __i18n: i, messageResolver: s, flatJson: r } = t, o = ye(n) ? n : Xe(i) ? {} : { [e]: {} };
  if (Xe(i) && i.forEach((a) => {
    if ("locale" in a && "resource" in a) {
      const { locale: l, resource: u } = a;
      l ? (o[l] = o[l] || {}, Yr(u, o[l])) : Yr(u, o);
    } else
      ne(a) && Yr(JSON.parse(a), o);
  }), s == null && r)
    for (const a in o)
      mo(o, a) && lr(o[a]);
  return o;
}
function Fg(e) {
  return e.type;
}
function $1(e, t, n) {
  let i = _e(t.messages) ? t.messages : {};
  "__i18nGlobal" in n && (i = Rg(e.locale.value, {
    messages: i,
    __i18n: n.__i18nGlobal
  }));
  const s = Object.keys(i);
  s.length && s.forEach((r) => {
    e.mergeLocaleMessage(r, i[r]);
  });
  {
    if (_e(t.datetimeFormats)) {
      const r = Object.keys(t.datetimeFormats);
      r.length && r.forEach((o) => {
        e.mergeDateTimeFormat(o, t.datetimeFormats[o]);
      });
    }
    if (_e(t.numberFormats)) {
      const r = Object.keys(t.numberFormats);
      r.length && r.forEach((o) => {
        e.mergeNumberFormat(o, t.numberFormats[o]);
      });
    }
  }
}
function wh(e) {
  return me(yr, null, e, 0);
}
const vh = "__INTLIFY_META__", _h = () => [], B1 = () => !1;
let xh = 0;
function Sh(e) {
  return (t, n, i, s) => e(n, i, ta() || void 0, s);
}
const j1 = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = ta();
  let t = null;
  return e && (t = Fg(e)[vh]) ? { [vh]: t } : null;
};
function $g(e = {}, t) {
  const { __root: n, __injectWithOption: i } = e, s = n === void 0, r = e.flatJson, o = po ? rs : Qn, a = !!e.translateExistCompatible;
  let l = $e(e.inheritLocale) ? e.inheritLocale : !0;
  const u = o(
    // prettier-ignore
    n && l ? n.locale.value : ne(e.locale) ? e.locale : bo
  ), c = o(
    // prettier-ignore
    n && l ? n.fallbackLocale.value : ne(e.fallbackLocale) || Xe(e.fallbackLocale) || ye(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : u.value
  ), f = o(Rg(u.value, e)), h = o(ye(e.datetimeFormats) ? e.datetimeFormats : { [u.value]: {} }), d = o(ye(e.numberFormats) ? e.numberFormats : { [u.value]: {} });
  let p = n ? n.missingWarn : $e(e.missingWarn) || go(e.missingWarn) ? e.missingWarn : !0, w = n ? n.fallbackWarn : $e(e.fallbackWarn) || go(e.fallbackWarn) ? e.fallbackWarn : !0, E = n ? n.fallbackRoot : $e(e.fallbackRoot) ? e.fallbackRoot : !0, v = !!e.fallbackFormat, k = qe(e.missing) ? e.missing : null, g = qe(e.missing) ? Sh(e.missing) : null, b = qe(e.postTranslation) ? e.postTranslation : null, A = n ? n.warnHtmlMessage : $e(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, N = !!e.escapeParameter;
  const L = n ? n.modifiers : ye(e.modifiers) ? e.modifiers : {};
  let B = e.pluralRules || n && n.pluralRules, j;
  j = (() => {
    s && uh(null);
    const I = {
      version: L1,
      locale: u.value,
      fallbackLocale: c.value,
      messages: f.value,
      modifiers: L,
      pluralRules: B,
      missing: g === null ? void 0 : g,
      missingWarn: p,
      fallbackWarn: w,
      fallbackFormat: v,
      unresolving: !0,
      postTranslation: b === null ? void 0 : b,
      warnHtmlMessage: A,
      escapeParameter: N,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    I.datetimeFormats = h.value, I.numberFormats = d.value, I.__datetimeFormatters = ye(j) ? j.__datetimeFormatters : void 0, I.__numberFormatters = ye(j) ? j.__numberFormatters : void 0;
    const F = S1(I);
    return s && uh(F), F;
  })(), Ms(j, u.value, c.value);
  function D() {
    return [
      u.value,
      c.value,
      f.value,
      h.value,
      d.value
    ];
  }
  const K = $t({
    get: () => u.value,
    set: (I) => {
      u.value = I, j.locale = u.value;
    }
  }), Y = $t({
    get: () => c.value,
    set: (I) => {
      c.value = I, j.fallbackLocale = c.value, Ms(j, u.value, I);
    }
  }), ae = $t(() => f.value), it = /* @__PURE__ */ $t(() => h.value), Ce = /* @__PURE__ */ $t(() => d.value);
  function de() {
    return qe(b) ? b : null;
  }
  function ue(I) {
    b = I, j.postTranslation = I;
  }
  function Pe() {
    return k;
  }
  function Ct(I) {
    I !== null && (g = Sh(I)), k = I, j.missing = g;
  }
  const Be = (I, F, se, re, je, ze) => {
    D();
    let Je;
    try {
      __INTLIFY_PROD_DEVTOOLS__, s || (j.fallbackContext = n ? x1() : void 0), Je = I(j);
    } finally {
      __INTLIFY_PROD_DEVTOOLS__, s || (j.fallbackContext = void 0);
    }
    if (se !== "translate exists" && // for not `te` (e.g `t`)
    et(Je) && Je === ra || se === "translate exists" && !Je) {
      const [dt, zi] = F();
      return n && E ? re(n) : je(dt);
    } else {
      if (ze(Je))
        return Je;
      throw en(Vt.UNEXPECTED_RETURN_TYPE);
    }
  };
  function We(...I) {
    return Be((F) => Reflect.apply(ph, null, [F, ...I]), () => Sl(...I), "translate", (F) => Reflect.apply(F.t, F, [...I]), (F) => F, (F) => ne(F));
  }
  function sn(...I) {
    const [F, se, re] = I;
    if (re && !_e(re))
      throw en(Vt.INVALID_ARGUMENT);
    return We(F, se, ft({ resolvedMessage: !0 }, re || {}));
  }
  function rn(...I) {
    return Be((F) => Reflect.apply(gh, null, [F, ...I]), () => kl(...I), "datetime format", (F) => Reflect.apply(F.d, F, [...I]), () => lh, (F) => ne(F));
  }
  function ht(...I) {
    return Be((F) => Reflect.apply(yh, null, [F, ...I]), () => El(...I), "number format", (F) => Reflect.apply(F.n, F, [...I]), () => lh, (F) => ne(F));
  }
  function Tt(I) {
    return I.map((F) => ne(F) || et(F) || $e(F) ? wh(String(F)) : F);
  }
  const Yt = {
    normalize: Tt,
    interpolate: (I) => I,
    type: "vnode"
  };
  function on(...I) {
    return Be(
      (F) => {
        let se;
        const re = F;
        try {
          re.processor = Yt, se = Reflect.apply(ph, null, [re, ...I]);
        } finally {
          re.processor = null;
        }
        return se;
      },
      () => Sl(...I),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (F) => F[Cl](...I),
      (F) => [wh(F)],
      (F) => Xe(F)
    );
  }
  function At(...I) {
    return Be(
      (F) => Reflect.apply(yh, null, [F, ...I]),
      () => El(...I),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (F) => F[Al](...I),
      _h,
      (F) => ne(F) || Xe(F)
    );
  }
  function Cn(...I) {
    return Be(
      (F) => Reflect.apply(gh, null, [F, ...I]),
      () => kl(...I),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (F) => F[Tl](...I),
      _h,
      (F) => ne(F) || Xe(F)
    );
  }
  function Wi(I) {
    B = I, j.pluralRules = B;
  }
  function C(I, F) {
    return Be(() => {
      if (!I)
        return !1;
      const se = ne(F) ? F : u.value, re = V(se), je = j.messageResolver(re, I);
      return a ? je != null : gs(je) || Bt(je) || ne(je);
    }, () => [I], "translate exists", (se) => Reflect.apply(se.te, se, [I, F]), B1, (se) => $e(se));
  }
  function O(I) {
    let F = null;
    const se = kg(j, c.value, u.value);
    for (let re = 0; re < se.length; re++) {
      const je = f.value[se[re]] || {}, ze = j.messageResolver(je, I);
      if (ze != null) {
        F = ze;
        break;
      }
    }
    return F;
  }
  function R(I) {
    const F = O(I);
    return F ?? (n ? n.tm(I) || {} : {});
  }
  function V(I) {
    return f.value[I] || {};
  }
  function q(I, F) {
    if (r) {
      const se = { [I]: F };
      for (const re in se)
        mo(se, re) && lr(se[re]);
      F = se[I];
    }
    f.value[I] = F, j.messages = f.value;
  }
  function W(I, F) {
    f.value[I] = f.value[I] || {};
    const se = { [I]: F };
    if (r)
      for (const re in se)
        mo(se, re) && lr(se[re]);
    F = se[I], Yr(F, f.value[I]), j.messages = f.value;
  }
  function X(I) {
    return h.value[I] || {};
  }
  function y(I, F) {
    h.value[I] = F, j.datetimeFormats = h.value, mh(j, I, F);
  }
  function _(I, F) {
    h.value[I] = ft(h.value[I] || {}, F), j.datetimeFormats = h.value, mh(j, I, F);
  }
  function T(I) {
    return d.value[I] || {};
  }
  function U(I, F) {
    d.value[I] = F, j.numberFormats = d.value, bh(j, I, F);
  }
  function G(I, F) {
    d.value[I] = ft(d.value[I] || {}, F), j.numberFormats = d.value, bh(j, I, F);
  }
  xh++, n && po && (Fn(n.locale, (I) => {
    l && (u.value = I, j.locale = I, Ms(j, u.value, c.value));
  }), Fn(n.fallbackLocale, (I) => {
    l && (c.value = I, j.fallbackLocale = I, Ms(j, u.value, c.value));
  }));
  const z = {
    id: xh,
    locale: K,
    fallbackLocale: Y,
    get inheritLocale() {
      return l;
    },
    set inheritLocale(I) {
      l = I, I && n && (u.value = n.locale.value, c.value = n.fallbackLocale.value, Ms(j, u.value, c.value));
    },
    get availableLocales() {
      return Object.keys(f.value).sort();
    },
    messages: ae,
    get modifiers() {
      return L;
    },
    get pluralRules() {
      return B || {};
    },
    get isGlobal() {
      return s;
    },
    get missingWarn() {
      return p;
    },
    set missingWarn(I) {
      p = I, j.missingWarn = p;
    },
    get fallbackWarn() {
      return w;
    },
    set fallbackWarn(I) {
      w = I, j.fallbackWarn = w;
    },
    get fallbackRoot() {
      return E;
    },
    set fallbackRoot(I) {
      E = I;
    },
    get fallbackFormat() {
      return v;
    },
    set fallbackFormat(I) {
      v = I, j.fallbackFormat = v;
    },
    get warnHtmlMessage() {
      return A;
    },
    set warnHtmlMessage(I) {
      A = I, j.warnHtmlMessage = I;
    },
    get escapeParameter() {
      return N;
    },
    set escapeParameter(I) {
      N = I, j.escapeParameter = I;
    },
    t: We,
    getLocaleMessage: V,
    setLocaleMessage: q,
    mergeLocaleMessage: W,
    getPostTranslationHandler: de,
    setPostTranslationHandler: ue,
    getMissingHandler: Pe,
    setMissingHandler: Ct,
    [R1]: Wi
  };
  return z.datetimeFormats = it, z.numberFormats = Ce, z.rt = sn, z.te = C, z.tm = R, z.d = rn, z.n = ht, z.getDateTimeFormat = X, z.setDateTimeFormat = y, z.mergeDateTimeFormat = _, z.getNumberFormat = T, z.setNumberFormat = U, z.mergeNumberFormat = G, z[F1] = i, z[Cl] = on, z[Tl] = Cn, z[Al] = At, z;
}
const tu = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (e) => e === "parent" || e === "global",
    default: "parent"
    /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function q1({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((i, s) => [
    ...i,
    // prettier-ignore
    ...s.type === Oe ? s.children : [s]
  ], []) : t.reduce((n, i) => {
    const s = e[i];
    return s && (n[i] = s()), n;
  }, {});
}
function Bg(e) {
  return Oe;
}
const U1 = /* @__PURE__ */ En({
  /* eslint-disable */
  name: "i18n-t",
  props: ft({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (e) => et(e) || !isNaN(e)
    }
  }, tu),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const { slots: n, attrs: i } = t, s = e.i18n || wr({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const r = Object.keys(n).filter((f) => f !== "_"), o = {};
      e.locale && (o.locale = e.locale), e.plural !== void 0 && (o.plural = ne(e.plural) ? +e.plural : e.plural);
      const a = q1(t, r), l = s[Cl](e.keypath, a, o), u = ft({}, i), c = ne(e.tag) || _e(e.tag) ? e.tag : Bg();
      return Yc(c, u, l);
    };
  }
}), kh = U1;
function W1(e) {
  return Xe(e) && !ne(e[0]);
}
function jg(e, t, n, i) {
  const { slots: s, attrs: r } = t;
  return () => {
    const o = { part: !0 };
    let a = {};
    e.locale && (o.locale = e.locale), ne(e.format) ? o.key = e.format : _e(e.format) && (ne(e.format.key) && (o.key = e.format.key), a = Object.keys(e.format).reduce((h, d) => n.includes(d) ? ft({}, h, { [d]: e.format[d] }) : h, {}));
    const l = i(e.value, o, a);
    let u = [o.key];
    Xe(l) ? u = l.map((h, d) => {
      const p = s[h.type], w = p ? p({ [h.type]: h.value, index: d, parts: l }) : [h.value];
      return W1(w) && (w[0].key = `${h.type}-${d}`), w;
    }) : ne(l) && (u = [l]);
    const c = ft({}, r), f = ne(e.tag) || _e(e.tag) ? e.tag : Bg();
    return Yc(f, c, u);
  };
}
const z1 = /* @__PURE__ */ En({
  /* eslint-disable */
  name: "i18n-n",
  props: ft({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, tu),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || wr({
      useScope: e.scope,
      __useComponent: !0
    });
    return jg(e, t, Mg, (...i) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Al](...i)
    ));
  }
}), Eh = z1, V1 = /* @__PURE__ */ En({
  /* eslint-disable */
  name: "i18n-d",
  props: ft({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, tu),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || wr({
      useScope: e.scope,
      __useComponent: !0
    });
    return jg(e, t, Ig, (...i) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Tl](...i)
    ));
  }
}), Ch = V1;
function G1(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const i = n.__getInstance(t);
    return i != null ? i.__composer : e.global.__composer;
  }
}
function H1(e) {
  const t = (o) => {
    const { instance: a, modifiers: l, value: u } = o;
    if (!a || !a.$)
      throw en(Vt.UNEXPECTED_ERROR);
    const c = G1(e, a.$), f = Th(u);
    return [
      Reflect.apply(c.t, c, [...Ah(f)]),
      c
    ];
  };
  return {
    created: (o, a) => {
      const [l, u] = t(a);
      po && e.global === u && (o.__i18nWatcher = Fn(u.locale, () => {
        a.instance && a.instance.$forceUpdate();
      })), o.__composer = u, o.textContent = l;
    },
    unmounted: (o) => {
      po && o.__i18nWatcher && (o.__i18nWatcher(), o.__i18nWatcher = void 0, delete o.__i18nWatcher), o.__composer && (o.__composer = void 0, delete o.__composer);
    },
    beforeUpdate: (o, { value: a }) => {
      if (o.__composer) {
        const l = o.__composer, u = Th(a);
        o.textContent = Reflect.apply(l.t, l, [
          ...Ah(u)
        ]);
      }
    },
    getSSRProps: (o) => {
      const [a] = t(o);
      return { textContent: a };
    }
  };
}
function Th(e) {
  if (ne(e))
    return { path: e };
  if (ye(e)) {
    if (!("path" in e))
      throw en(Vt.REQUIRED_VALUE, "path");
    return e;
  } else
    throw en(Vt.INVALID_VALUE);
}
function Ah(e) {
  const { path: t, locale: n, args: i, choice: s, plural: r } = e, o = {}, a = i || {};
  return ne(n) && (o.locale = n), et(s) && (o.plural = s), et(r) && (o.plural = r), [t, a, o];
}
function K1(e, t, ...n) {
  const i = ye(n[0]) ? n[0] : {}, s = !!i.useI18nComponentName;
  ($e(i.globalInstall) ? i.globalInstall : !0) && ([s ? "i18n" : kh.name, "I18nT"].forEach((o) => e.component(o, kh)), [Eh.name, "I18nN"].forEach((o) => e.component(o, Eh)), [Ch.name, "I18nD"].forEach((o) => e.component(o, Ch))), e.directive("t", H1(t));
}
const Y1 = /* @__PURE__ */ fi("global-vue-i18n");
function X1(e = {}, t) {
  const n = $e(e.globalInjection) ? e.globalInjection : !0, i = !0, s = /* @__PURE__ */ new Map(), [r, o] = J1(e), a = /* @__PURE__ */ fi("");
  function l(f) {
    return s.get(f) || null;
  }
  function u(f, h) {
    s.set(f, h);
  }
  function c(f) {
    s.delete(f);
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
      async install(h, ...d) {
        if (h.__VUE_I18N_SYMBOL__ = a, h.provide(h.__VUE_I18N_SYMBOL__, f), ye(d[0])) {
          const E = d[0];
          f.__composerExtend = E.__composerExtend, f.__vueI18nExtend = E.__vueI18nExtend;
        }
        let p = null;
        n && (p = r_(h, f.global)), K1(h, f, ...d);
        const w = h.unmount;
        h.unmount = () => {
          p && p(), f.dispose(), w();
        };
      },
      // global accessor
      get global() {
        return o;
      },
      dispose() {
        r.stop();
      },
      // @internal
      __instances: s,
      // @internal
      __getInstance: l,
      // @internal
      __setInstance: u,
      // @internal
      __deleteInstance: c
    };
    return f;
  }
}
function wr(e = {}) {
  const t = ta();
  if (t == null)
    throw en(Vt.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw en(Vt.NOT_INSTALLED);
  const n = Q1(t), i = e_(n), s = Fg(t), r = Z1(e, s);
  if (r === "global")
    return $1(i, e, s), i;
  if (r === "parent") {
    let l = t_(n, t, e.__useComponent);
    return l == null && (l = i), l;
  }
  const o = n;
  let a = o.__getInstance(t);
  if (a == null) {
    const l = ft({}, e);
    "__i18n" in s && (l.__i18n = s.__i18n), i && (l.__root = i), a = $g(l), o.__composerExtend && (a[Ol] = o.__composerExtend(a)), i_(o, t, a), o.__setInstance(t, a);
  }
  return a;
}
function J1(e, t, n) {
  const i = Qb();
  {
    const s = i.run(() => $g(e));
    if (s == null)
      throw en(Vt.UNEXPECTED_ERROR);
    return [i, s];
  }
}
function Q1(e) {
  {
    const t = Xs(e.isCE ? Y1 : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw en(e.isCE ? Vt.NOT_INSTALLED_WITH_PROVIDE : Vt.UNEXPECTED_ERROR);
    return t;
  }
}
function Z1(e, t) {
  return ia(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function e_(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function t_(e, t, n = !1) {
  let i = null;
  const s = t.root;
  let r = n_(t, n);
  for (; r != null; ) {
    const o = e;
    if (e.mode === "composition" && (i = o.__getInstance(r)), i != null || s === r)
      break;
    r = r.parent;
  }
  return i;
}
function n_(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function i_(e, t, n) {
  zc(() => {
  }, t), Vc(() => {
    const i = n;
    e.__deleteInstance(t);
    const s = i[Ol];
    s && (s(), delete i[Ol]);
  }, t);
}
const s_ = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], Oh = ["t", "rt", "d", "n", "tm", "te"];
function r_(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return s_.forEach((s) => {
    const r = Object.getOwnPropertyDescriptor(t, s);
    if (!r)
      throw en(Vt.UNEXPECTED_ERROR);
    const o = rt(r.value) ? {
      get() {
        return r.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(a) {
        r.value.value = a;
      }
    } : {
      get() {
        return r.get && r.get();
      }
    };
    Object.defineProperty(n, s, o);
  }), e.config.globalProperties.$i18n = n, Oh.forEach((s) => {
    const r = Object.getOwnPropertyDescriptor(t, s);
    if (!r || !r.value)
      throw en(Vt.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${s}`, r);
  }), () => {
    delete e.config.globalProperties.$i18n, Oh.forEach((s) => {
      delete e.config.globalProperties[`$${s}`];
    });
  };
}
D1();
y1(O1);
b1(Qv);
w1(kg);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const e = Xc();
  e.__INTLIFY__ = !0, a1(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const o_ = {
  "N/A": "N/A",
  length: "Length",
  l: "L",
  width: "Width",
  w: "W",
  thickness: "Thickness",
  t: "T",
  name: "Name",
  quantity: "Quantity",
  q: "Q",
  material: "Material",
  orientation: "Orientation",
  machining: "Machining",
  grain: "Grain",
  "add part": "Add part",
  "remove part": "Remove part",
  calculate: "Calculate",
  "full screen": "Full screen",
  banding: "Banding",
  "delete banding": "Delete banding",
  "delete finish": "Delete finish",
  select: "Select",
  delete: "Delete",
  clear: "Clear",
  l1: "L1",
  l2: "L2",
  w1: "W1",
  w2: "W2",
  all: "All",
  "Drop CSV file here": "Drop CSV file here",
  "Powered by SmartCut": "Powered by SmartCut",
  Part: "Part",
  Issue: "Issue",
  "Part issue": "Part issue",
  "Issue with part inputs:": "Issue with part inputs:",
  "No parts": "No parts",
  "No parts in list": "No parts in list",
  "No quantity of parts found": "No quantity of parts found",
  "No parts were added - please double check your list": "No parts were added - please double check your list",
  "The following parts did not fit": "The following parts did not fit",
  "The maximum number of parts is": "The maximum number of parts is",
  "No valid parts found": "No valid parts found"
}, a_ = {
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
  banding: "Cantell",
  "delete banding": "Elimina cantell",
  delete: "Elimina",
  clear: "Neteja",
  l1: "L1",
  l2: "L2",
  w1: "A1",
  w2: "A1",
  all: "Todos",
  Part: "Peça",
  Issue: "Tema",
  "The following parts did not fit": "Les peces següents no encaixaven",
  "The maximum number of parts is": "El número màxim de peces és",
  "No valid parts found": "No s'han trobat peces vàlides",
  "Drop CSV file here": "No s'han trobat peces vàlides",
  "Powered by SmartCut": "Desenvolupat per SmartCut"
}, l_ = {
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
  banding: "Canto",
  "delete banding": "Elimina canto",
  delete: "Elimina",
  clear: "Borra",
  l1: "L1",
  l2: "L2",
  w1: "A1",
  w2: "A1",
  all: "Todos",
  Part: "Pieza",
  Issue: "Tema",
  "The following parts did not fit": "Las siguientes piezas no encajaban",
  "The maximum number of parts is": "El número máximo de piezas es",
  "No valid parts found": "No se encontraron piezas válidas",
  "Drop CSV file here": "Carga el archivo CSV aquí",
  "Powered by SmartCut": "Desarrollado por SmartCut"
}, c_ = {
  length: "Longueur",
  l: "L",
  width: "Largeur",
  w: "la",
  thickness: "Epaisseur",
  t: "ep",
  name: "Nom",
  quantity: "Quantité",
  q: "Qt",
  material: "Matèriel",
  machining: "Machinage",
  grain: "Sens de fil",
  orientation: "Orientation",
  "add part": "Ajouter pièce",
  "remove part": "Supprimer pièce",
  calculate: "Optimiser",
  "full screen": "Plein écran",
  banding: "Chants",
  "delete banding": "Supprimer chants",
  select: "Sélectionner",
  delete: "Supprimer",
  clear: "Effacer",
  l1: "L1",
  l2: "L2",
  w1: "la1",
  w2: "la2",
  "Powered by SmartCut": "",
  Part: "Pièce",
  "Drop CSV file here": "Télécharger CSV",
  Issue: "Erreur",
  "Part issue": "Pièce erreur",
  "Issue with part inputs": "Erreur avec l'importation de pièces",
  "No parts": "Aucune pièce",
  "No parts in list": "Aucune pièce dans la liste",
  "No quantity of parts found": "Aucune quantité trouvé pour certaines pièces",
  "No parts were added - please double check your list": "Aucune pièce n'a été ajoutée - veuillez vérifier votre liste",
  "The following parts did not fit": "Les pièces suivantes ne s'adaptent pas",
  "The maximum number of parts is": "Le nombre maximum de pièces est",
  "No valid parts found": "Aucune pièce valide trouvée"
}, u_ = {
  en_US: o_,
  ca: a_,
  es_ES: l_,
  fr_FR: c_
};
var f_ = typeof global == "object" && global && global.Object === Object && global, h_ = typeof self == "object" && self && self.Object === Object && self, nu = f_ || h_ || Function("return this")(), ms = nu.Symbol, qg = Object.prototype, d_ = qg.hasOwnProperty, p_ = qg.toString, Ls = ms ? ms.toStringTag : void 0;
function g_(e) {
  var t = d_.call(e, Ls), n = e[Ls];
  try {
    e[Ls] = void 0;
    var i = !0;
  } catch {
  }
  var s = p_.call(e);
  return i && (t ? e[Ls] = n : delete e[Ls]), s;
}
var m_ = Object.prototype, y_ = m_.toString;
function b_(e) {
  return y_.call(e);
}
var w_ = "[object Null]", v_ = "[object Undefined]", Ph = ms ? ms.toStringTag : void 0;
function Ug(e) {
  return e == null ? e === void 0 ? v_ : w_ : Ph && Ph in Object(e) ? g_(e) : b_(e);
}
function __(e) {
  return e != null && typeof e == "object";
}
var x_ = "[object Symbol]";
function iu(e) {
  return typeof e == "symbol" || __(e) && Ug(e) == x_;
}
function S_(e, t) {
  for (var n = -1, i = e == null ? 0 : e.length, s = Array(i); ++n < i; )
    s[n] = t(e[n], n, e);
  return s;
}
var su = Array.isArray, k_ = 1 / 0, Nh = ms ? ms.prototype : void 0, Ih = Nh ? Nh.toString : void 0;
function Wg(e) {
  if (typeof e == "string")
    return e;
  if (su(e))
    return S_(e, Wg) + "";
  if (iu(e))
    return Ih ? Ih.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -k_ ? "-0" : t;
}
function wo(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var E_ = "[object AsyncFunction]", C_ = "[object Function]", T_ = "[object GeneratorFunction]", A_ = "[object Proxy]";
function O_(e) {
  if (!wo(e))
    return !1;
  var t = Ug(e);
  return t == C_ || t == T_ || t == E_ || t == A_;
}
var Ua = nu["__core-js_shared__"], Mh = function() {
  var e = /[^.]+$/.exec(Ua && Ua.keys && Ua.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function P_(e) {
  return !!Mh && Mh in e;
}
var N_ = Function.prototype, I_ = N_.toString;
function M_(e) {
  if (e != null) {
    try {
      return I_.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var L_ = /[\\^$.*+?()[\]{}|]/g, D_ = /^\[object .+?Constructor\]$/, R_ = Function.prototype, F_ = Object.prototype, $_ = R_.toString, B_ = F_.hasOwnProperty, j_ = RegExp(
  "^" + $_.call(B_).replace(L_, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function q_(e) {
  if (!wo(e) || P_(e))
    return !1;
  var t = O_(e) ? j_ : D_;
  return t.test(M_(e));
}
function U_(e, t) {
  return e == null ? void 0 : e[t];
}
function ru(e, t) {
  var n = U_(e, t);
  return q_(n) ? n : void 0;
}
var Lh = function() {
  try {
    var e = ru(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), W_ = 9007199254740991, z_ = /^(?:0|[1-9]\d*)$/;
function V_(e, t) {
  var n = typeof e;
  return t = t ?? W_, !!t && (n == "number" || n != "symbol" && z_.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function G_(e, t, n) {
  t == "__proto__" && Lh ? Lh(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function zg(e, t) {
  return e === t || e !== e && t !== t;
}
var H_ = Object.prototype, K_ = H_.hasOwnProperty;
function Y_(e, t, n) {
  var i = e[t];
  (!(K_.call(e, t) && zg(i, n)) || n === void 0 && !(t in e)) && G_(e, t, n);
}
var X_ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, J_ = /^\w*$/;
function Q_(e, t) {
  if (su(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || iu(e) ? !0 : J_.test(e) || !X_.test(e) || t != null && e in Object(t);
}
var cr = ru(Object, "create");
function Z_() {
  this.__data__ = cr ? cr(null) : {}, this.size = 0;
}
function ex(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var tx = "__lodash_hash_undefined__", nx = Object.prototype, ix = nx.hasOwnProperty;
function sx(e) {
  var t = this.__data__;
  if (cr) {
    var n = t[e];
    return n === tx ? void 0 : n;
  }
  return ix.call(t, e) ? t[e] : void 0;
}
var rx = Object.prototype, ox = rx.hasOwnProperty;
function ax(e) {
  var t = this.__data__;
  return cr ? t[e] !== void 0 : ox.call(t, e);
}
var lx = "__lodash_hash_undefined__";
function cx(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = cr && t === void 0 ? lx : t, this;
}
function Mi(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Mi.prototype.clear = Z_;
Mi.prototype.delete = ex;
Mi.prototype.get = sx;
Mi.prototype.has = ax;
Mi.prototype.set = cx;
function ux() {
  this.__data__ = [], this.size = 0;
}
function oa(e, t) {
  for (var n = e.length; n--; )
    if (zg(e[n][0], t))
      return n;
  return -1;
}
var fx = Array.prototype, hx = fx.splice;
function dx(e) {
  var t = this.__data__, n = oa(t, e);
  if (n < 0)
    return !1;
  var i = t.length - 1;
  return n == i ? t.pop() : hx.call(t, n, 1), --this.size, !0;
}
function px(e) {
  var t = this.__data__, n = oa(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function gx(e) {
  return oa(this.__data__, e) > -1;
}
function mx(e, t) {
  var n = this.__data__, i = oa(n, e);
  return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this;
}
function Cs(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Cs.prototype.clear = ux;
Cs.prototype.delete = dx;
Cs.prototype.get = px;
Cs.prototype.has = gx;
Cs.prototype.set = mx;
var yx = ru(nu, "Map");
function bx() {
  this.size = 0, this.__data__ = {
    hash: new Mi(),
    map: new (yx || Cs)(),
    string: new Mi()
  };
}
function wx(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function aa(e, t) {
  var n = e.__data__;
  return wx(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function vx(e) {
  var t = aa(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function _x(e) {
  return aa(this, e).get(e);
}
function xx(e) {
  return aa(this, e).has(e);
}
function Sx(e, t) {
  var n = aa(this, e), i = n.size;
  return n.set(e, t), this.size += n.size == i ? 0 : 1, this;
}
function qi(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
qi.prototype.clear = bx;
qi.prototype.delete = vx;
qi.prototype.get = _x;
qi.prototype.has = xx;
qi.prototype.set = Sx;
var kx = "Expected a function";
function ou(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(kx);
  var n = function() {
    var i = arguments, s = t ? t.apply(this, i) : i[0], r = n.cache;
    if (r.has(s))
      return r.get(s);
    var o = e.apply(this, i);
    return n.cache = r.set(s, o) || r, o;
  };
  return n.cache = new (ou.Cache || qi)(), n;
}
ou.Cache = qi;
var Ex = 500;
function Cx(e) {
  var t = ou(e, function(i) {
    return n.size === Ex && n.clear(), i;
  }), n = t.cache;
  return t;
}
var Tx = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ax = /\\(\\)?/g, Ox = Cx(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Tx, function(n, i, s, r) {
    t.push(s ? r.replace(Ax, "$1") : i || n);
  }), t;
});
function Px(e) {
  return e == null ? "" : Wg(e);
}
function Vg(e, t) {
  return su(e) ? e : Q_(e, t) ? [e] : Ox(Px(e));
}
var Nx = 1 / 0;
function Gg(e) {
  if (typeof e == "string" || iu(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Nx ? "-0" : t;
}
function Ix(e, t) {
  t = Vg(t, e);
  for (var n = 0, i = t.length; e != null && n < i; )
    e = e[Gg(t[n++])];
  return n && n == i ? e : void 0;
}
function vo(e, t, n) {
  var i = e == null ? void 0 : Ix(e, t);
  return i === void 0 ? n : i;
}
function Mx(e, t, n, i) {
  if (!wo(e))
    return e;
  t = Vg(t, e);
  for (var s = -1, r = t.length, o = r - 1, a = e; a != null && ++s < r; ) {
    var l = Gg(t[s]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (s != o) {
      var c = a[l];
      u = void 0, u === void 0 && (u = wo(c) ? c : V_(t[s + 1]) ? [] : {});
    }
    Y_(a, l, u), a = a[l];
  }
  return e;
}
function Dh(e, t, n) {
  return e == null ? e : Mx(e, t, n);
}
var Pl = "http://www.w3.org/1999/xhtml";
const Rh = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Pl,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Hg(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Rh.hasOwnProperty(t) ? { space: Rh[t], local: e } : e;
}
function Lx(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Pl && t.documentElement.namespaceURI === Pl ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Dx(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Kg(e) {
  var t = Hg(e);
  return (t.local ? Dx : Lx)(t);
}
function Rx() {
}
function Yg(e) {
  return e == null ? Rx : function() {
    return this.querySelector(e);
  };
}
function Fx(e) {
  typeof e != "function" && (e = Yg(e));
  for (var t = this._groups, n = t.length, i = new Array(n), s = 0; s < n; ++s)
    for (var r = t[s], o = r.length, a = i[s] = new Array(o), l, u, c = 0; c < o; ++c)
      (l = r[c]) && (u = e.call(l, l.__data__, c, r)) && ("__data__" in l && (u.__data__ = l.__data__), a[c] = u);
  return new Et(i, this._parents);
}
function Xg(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function $x() {
  return [];
}
function Bx(e) {
  return e == null ? $x : function() {
    return this.querySelectorAll(e);
  };
}
function jx(e) {
  return function() {
    return Xg(e.apply(this, arguments));
  };
}
function qx(e) {
  typeof e == "function" ? e = jx(e) : e = Bx(e);
  for (var t = this._groups, n = t.length, i = [], s = [], r = 0; r < n; ++r)
    for (var o = t[r], a = o.length, l, u = 0; u < a; ++u)
      (l = o[u]) && (i.push(e.call(l, l.__data__, u, o)), s.push(l));
  return new Et(i, s);
}
function Ux(e) {
  return function() {
    return this.matches(e);
  };
}
function Jg(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Wx = Array.prototype.find;
function zx(e) {
  return function() {
    return Wx.call(this.children, e);
  };
}
function Vx() {
  return this.firstElementChild;
}
function Gx(e) {
  return this.select(e == null ? Vx : zx(typeof e == "function" ? e : Jg(e)));
}
var Hx = Array.prototype.filter;
function Kx() {
  return Array.from(this.children);
}
function Yx(e) {
  return function() {
    return Hx.call(this.children, e);
  };
}
function Xx(e) {
  return this.selectAll(e == null ? Kx : Yx(typeof e == "function" ? e : Jg(e)));
}
function Jx(e) {
  typeof e != "function" && (e = Ux(e));
  for (var t = this._groups, n = t.length, i = new Array(n), s = 0; s < n; ++s)
    for (var r = t[s], o = r.length, a = i[s] = [], l, u = 0; u < o; ++u)
      (l = r[u]) && e.call(l, l.__data__, u, r) && a.push(l);
  return new Et(i, this._parents);
}
function Qg(e) {
  return new Array(e.length);
}
function Qx() {
  return new Et(this._enter || this._groups.map(Qg), this._parents);
}
function _o(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
_o.prototype = {
  constructor: _o,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function Zx(e) {
  return function() {
    return e;
  };
}
function eS(e, t, n, i, s, r) {
  for (var o = 0, a, l = t.length, u = r.length; o < u; ++o)
    (a = t[o]) ? (a.__data__ = r[o], i[o] = a) : n[o] = new _o(e, r[o]);
  for (; o < l; ++o)
    (a = t[o]) && (s[o] = a);
}
function tS(e, t, n, i, s, r, o) {
  var a, l, u = /* @__PURE__ */ new Map(), c = t.length, f = r.length, h = new Array(c), d;
  for (a = 0; a < c; ++a)
    (l = t[a]) && (h[a] = d = o.call(l, l.__data__, a, t) + "", u.has(d) ? s[a] = l : u.set(d, l));
  for (a = 0; a < f; ++a)
    d = o.call(e, r[a], a, r) + "", (l = u.get(d)) ? (i[a] = l, l.__data__ = r[a], u.delete(d)) : n[a] = new _o(e, r[a]);
  for (a = 0; a < c; ++a)
    (l = t[a]) && u.get(h[a]) === l && (s[a] = l);
}
function nS(e) {
  return e.__data__;
}
function iS(e, t) {
  if (!arguments.length) return Array.from(this, nS);
  var n = t ? tS : eS, i = this._parents, s = this._groups;
  typeof e != "function" && (e = Zx(e));
  for (var r = s.length, o = new Array(r), a = new Array(r), l = new Array(r), u = 0; u < r; ++u) {
    var c = i[u], f = s[u], h = f.length, d = sS(e.call(c, c && c.__data__, u, i)), p = d.length, w = a[u] = new Array(p), E = o[u] = new Array(p), v = l[u] = new Array(h);
    n(c, f, w, E, v, d, t);
    for (var k = 0, g = 0, b, A; k < p; ++k)
      if (b = w[k]) {
        for (k >= g && (g = k + 1); !(A = E[g]) && ++g < p; ) ;
        b._next = A || null;
      }
  }
  return o = new Et(o, i), o._enter = a, o._exit = l, o;
}
function sS(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function rS() {
  return new Et(this._exit || this._groups.map(Qg), this._parents);
}
function oS(e, t, n) {
  var i = this.enter(), s = this, r = this.exit();
  return typeof e == "function" ? (i = e(i), i && (i = i.selection())) : i = i.append(e + ""), t != null && (s = t(s), s && (s = s.selection())), n == null ? r.remove() : n(r), i && s ? i.merge(s).order() : s;
}
function aS(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, i = t._groups, s = n.length, r = i.length, o = Math.min(s, r), a = new Array(s), l = 0; l < o; ++l)
    for (var u = n[l], c = i[l], f = u.length, h = a[l] = new Array(f), d, p = 0; p < f; ++p)
      (d = u[p] || c[p]) && (h[p] = d);
  for (; l < s; ++l)
    a[l] = n[l];
  return new Et(a, this._parents);
}
function lS() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var i = e[t], s = i.length - 1, r = i[s], o; --s >= 0; )
      (o = i[s]) && (r && o.compareDocumentPosition(r) ^ 4 && r.parentNode.insertBefore(o, r), r = o);
  return this;
}
function cS(e) {
  e || (e = uS);
  function t(f, h) {
    return f && h ? e(f.__data__, h.__data__) : !f - !h;
  }
  for (var n = this._groups, i = n.length, s = new Array(i), r = 0; r < i; ++r) {
    for (var o = n[r], a = o.length, l = s[r] = new Array(a), u, c = 0; c < a; ++c)
      (u = o[c]) && (l[c] = u);
    l.sort(t);
  }
  return new Et(s, this._parents).order();
}
function uS(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function fS() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function hS() {
  return Array.from(this);
}
function dS() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var i = e[t], s = 0, r = i.length; s < r; ++s) {
      var o = i[s];
      if (o) return o;
    }
  return null;
}
function pS() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function gS() {
  return !this.node();
}
function mS(e) {
  for (var t = this._groups, n = 0, i = t.length; n < i; ++n)
    for (var s = t[n], r = 0, o = s.length, a; r < o; ++r)
      (a = s[r]) && e.call(a, a.__data__, r, s);
  return this;
}
function yS(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function bS(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function wS(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function vS(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function _S(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function xS(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function SS(e, t) {
  var n = Hg(e);
  if (arguments.length < 2) {
    var i = this.node();
    return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n);
  }
  return this.each((t == null ? n.local ? bS : yS : typeof t == "function" ? n.local ? xS : _S : n.local ? vS : wS)(n, t));
}
function Zg(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function kS(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function ES(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function CS(e, t, n) {
  return function() {
    var i = t.apply(this, arguments);
    i == null ? this.style.removeProperty(e) : this.style.setProperty(e, i, n);
  };
}
function TS(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? kS : typeof t == "function" ? CS : ES)(e, t, n ?? "")) : AS(this.node(), e);
}
function AS(e, t) {
  return e.style.getPropertyValue(t) || Zg(e).getComputedStyle(e, null).getPropertyValue(t);
}
function OS(e) {
  return function() {
    delete this[e];
  };
}
function PS(e, t) {
  return function() {
    this[e] = t;
  };
}
function NS(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function IS(e, t) {
  return arguments.length > 1 ? this.each((t == null ? OS : typeof t == "function" ? NS : PS)(e, t)) : this.node()[e];
}
function em(e) {
  return e.trim().split(/^|\s+/);
}
function au(e) {
  return e.classList || new tm(e);
}
function tm(e) {
  this._node = e, this._names = em(e.getAttribute("class") || "");
}
tm.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function nm(e, t) {
  for (var n = au(e), i = -1, s = t.length; ++i < s; ) n.add(t[i]);
}
function im(e, t) {
  for (var n = au(e), i = -1, s = t.length; ++i < s; ) n.remove(t[i]);
}
function MS(e) {
  return function() {
    nm(this, e);
  };
}
function LS(e) {
  return function() {
    im(this, e);
  };
}
function DS(e, t) {
  return function() {
    (t.apply(this, arguments) ? nm : im)(this, e);
  };
}
function RS(e, t) {
  var n = em(e + "");
  if (arguments.length < 2) {
    for (var i = au(this.node()), s = -1, r = n.length; ++s < r; ) if (!i.contains(n[s])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? DS : t ? MS : LS)(n, t));
}
function FS() {
  this.textContent = "";
}
function $S(e) {
  return function() {
    this.textContent = e;
  };
}
function BS(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function jS(e) {
  return arguments.length ? this.each(e == null ? FS : (typeof e == "function" ? BS : $S)(e)) : this.node().textContent;
}
function qS() {
  this.innerHTML = "";
}
function US(e) {
  return function() {
    this.innerHTML = e;
  };
}
function WS(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function zS(e) {
  return arguments.length ? this.each(e == null ? qS : (typeof e == "function" ? WS : US)(e)) : this.node().innerHTML;
}
function VS() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function GS() {
  return this.each(VS);
}
function HS() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function KS() {
  return this.each(HS);
}
function YS(e) {
  var t = typeof e == "function" ? e : Kg(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function XS() {
  return null;
}
function JS(e, t) {
  var n = typeof e == "function" ? e : Kg(e), i = t == null ? XS : typeof t == "function" ? t : Yg(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function QS() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function ZS() {
  return this.each(QS);
}
function ek() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function tk() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function nk(e) {
  return this.select(e ? tk : ek);
}
function ik(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function sk(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function rk(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", i = t.indexOf(".");
    return i >= 0 && (n = t.slice(i + 1), t = t.slice(0, i)), { type: t, name: n };
  });
}
function ok(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, i = -1, s = t.length, r; n < s; ++n)
        r = t[n], (!e.type || r.type === e.type) && r.name === e.name ? this.removeEventListener(r.type, r.listener, r.options) : t[++i] = r;
      ++i ? t.length = i : delete this.__on;
    }
  };
}
function ak(e, t, n) {
  return function() {
    var i = this.__on, s, r = sk(t);
    if (i) {
      for (var o = 0, a = i.length; o < a; ++o)
        if ((s = i[o]).type === e.type && s.name === e.name) {
          this.removeEventListener(s.type, s.listener, s.options), this.addEventListener(s.type, s.listener = r, s.options = n), s.value = t;
          return;
        }
    }
    this.addEventListener(e.type, r, n), s = { type: e.type, name: e.name, value: t, listener: r, options: n }, i ? i.push(s) : this.__on = [s];
  };
}
function lk(e, t, n) {
  var i = rk(e + ""), s, r = i.length, o;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var l = 0, u = a.length, c; l < u; ++l)
        for (s = 0, c = a[l]; s < r; ++s)
          if ((o = i[s]).type === c.type && o.name === c.name)
            return c.value;
    }
    return;
  }
  for (a = t ? ak : ok, s = 0; s < r; ++s) this.each(a(i[s], t, n));
  return this;
}
function sm(e, t, n) {
  var i = Zg(e), s = i.CustomEvent;
  typeof s == "function" ? s = new s(t, n) : (s = i.document.createEvent("Event"), n ? (s.initEvent(t, n.bubbles, n.cancelable), s.detail = n.detail) : s.initEvent(t, !1, !1)), e.dispatchEvent(s);
}
function ck(e, t) {
  return function() {
    return sm(this, e, t);
  };
}
function uk(e, t) {
  return function() {
    return sm(this, e, t.apply(this, arguments));
  };
}
function fk(e, t) {
  return this.each((typeof t == "function" ? uk : ck)(e, t));
}
function* hk() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var i = e[t], s = 0, r = i.length, o; s < r; ++s)
      (o = i[s]) && (yield o);
}
var rm = [null];
function Et(e, t) {
  this._groups = e, this._parents = t;
}
function dk() {
  return this;
}
Et.prototype = {
  constructor: Et,
  select: Fx,
  selectAll: qx,
  selectChild: Gx,
  selectChildren: Xx,
  filter: Jx,
  data: iS,
  enter: Qx,
  exit: rS,
  join: oS,
  merge: aS,
  selection: dk,
  order: lS,
  sort: cS,
  call: fS,
  nodes: hS,
  node: dS,
  size: pS,
  empty: gS,
  each: mS,
  attr: SS,
  style: TS,
  property: IS,
  classed: RS,
  text: jS,
  html: zS,
  raise: GS,
  lower: KS,
  append: YS,
  insert: JS,
  remove: ZS,
  clone: nk,
  datum: ik,
  on: lk,
  dispatch: fk,
  [Symbol.iterator]: hk
};
function pk(e) {
  return typeof e == "string" ? new Et([[document.querySelector(e)]], [document.documentElement]) : new Et([[e]], rm);
}
function gk(e) {
  return typeof e == "string" ? new Et([document.querySelectorAll(e)], [document.documentElement]) : new Et([Xg(e)], rm);
}
function Xr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function mk(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function om(e) {
  let t, n, i;
  e.length !== 2 ? (t = Xr, n = (a, l) => Xr(e(a), l), i = (a, l) => e(a) - l) : (t = e === Xr || e === mk ? e : yk, n = e, i = e);
  function s(a, l, u = 0, c = a.length) {
    if (u < c) {
      if (t(l, l) !== 0) return c;
      do {
        const f = u + c >>> 1;
        n(a[f], l) < 0 ? u = f + 1 : c = f;
      } while (u < c);
    }
    return u;
  }
  function r(a, l, u = 0, c = a.length) {
    if (u < c) {
      if (t(l, l) !== 0) return c;
      do {
        const f = u + c >>> 1;
        n(a[f], l) <= 0 ? u = f + 1 : c = f;
      } while (u < c);
    }
    return u;
  }
  function o(a, l, u = 0, c = a.length) {
    const f = s(a, l, u, c - 1);
    return f > u && i(a[f - 1], l) > -i(a[f], l) ? f - 1 : f;
  }
  return { left: s, center: o, right: r };
}
function yk() {
  return 0;
}
function bk(e) {
  return e === null ? NaN : +e;
}
const wk = om(Xr), vk = wk.right;
om(bk).center;
const _k = Math.sqrt(50), xk = Math.sqrt(10), Sk = Math.sqrt(2);
function xo(e, t, n) {
  const i = (t - e) / Math.max(0, n), s = Math.floor(Math.log10(i)), r = i / Math.pow(10, s), o = r >= _k ? 10 : r >= xk ? 5 : r >= Sk ? 2 : 1;
  let a, l, u;
  return s < 0 ? (u = Math.pow(10, -s) / o, a = Math.round(e * u), l = Math.round(t * u), a / u < e && ++a, l / u > t && --l, u = -u) : (u = Math.pow(10, s) * o, a = Math.round(e / u), l = Math.round(t / u), a * u < e && ++a, l * u > t && --l), l < a && 0.5 <= n && n < 2 ? xo(e, t, n * 2) : [a, l, u];
}
function kk(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0)) return [];
  if (e === t) return [e];
  const i = t < e, [s, r, o] = i ? xo(t, e, n) : xo(e, t, n);
  if (!(r >= s)) return [];
  const a = r - s + 1, l = new Array(a);
  if (i)
    if (o < 0) for (let u = 0; u < a; ++u) l[u] = (r - u) / -o;
    else for (let u = 0; u < a; ++u) l[u] = (r - u) * o;
  else if (o < 0) for (let u = 0; u < a; ++u) l[u] = (s + u) / -o;
  else for (let u = 0; u < a; ++u) l[u] = (s + u) * o;
  return l;
}
function Nl(e, t, n) {
  return t = +t, e = +e, n = +n, xo(e, t, n)[2];
}
function Ek(e, t, n) {
  t = +t, e = +e, n = +n;
  const i = t < e, s = i ? Nl(t, e, n) : Nl(e, t, n);
  return (i ? -1 : 1) * (s < 0 ? 1 / -s : s);
}
function Ck(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function Tk(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
function lu(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function am(e, t) {
  var n = Object.create(e.prototype);
  for (var i in t) n[i] = t[i];
  return n;
}
function vr() {
}
var ur = 0.7, So = 1 / ur, ls = "\\s*([+-]?\\d+)\\s*", fr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", wn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ak = /^#([0-9a-f]{3,8})$/, Ok = new RegExp(`^rgb\\(${ls},${ls},${ls}\\)$`), Pk = new RegExp(`^rgb\\(${wn},${wn},${wn}\\)$`), Nk = new RegExp(`^rgba\\(${ls},${ls},${ls},${fr}\\)$`), Ik = new RegExp(`^rgba\\(${wn},${wn},${wn},${fr}\\)$`), Mk = new RegExp(`^hsl\\(${fr},${wn},${wn}\\)$`), Lk = new RegExp(`^hsla\\(${fr},${wn},${wn},${fr}\\)$`), Fh = {
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
lu(vr, ys, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: $h,
  // Deprecated! Use color.formatHex.
  formatHex: $h,
  formatHex8: Dk,
  formatHsl: Rk,
  formatRgb: Bh,
  toString: Bh
});
function $h() {
  return this.rgb().formatHex();
}
function Dk() {
  return this.rgb().formatHex8();
}
function Rk() {
  return lm(this).formatHsl();
}
function Bh() {
  return this.rgb().formatRgb();
}
function ys(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Ak.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? jh(t) : n === 3 ? new kt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Dr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Dr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Ok.exec(e)) ? new kt(t[1], t[2], t[3], 1) : (t = Pk.exec(e)) ? new kt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Nk.exec(e)) ? Dr(t[1], t[2], t[3], t[4]) : (t = Ik.exec(e)) ? Dr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Mk.exec(e)) ? Wh(t[1], t[2] / 100, t[3] / 100, 1) : (t = Lk.exec(e)) ? Wh(t[1], t[2] / 100, t[3] / 100, t[4]) : Fh.hasOwnProperty(e) ? jh(Fh[e]) : e === "transparent" ? new kt(NaN, NaN, NaN, 0) : null;
}
function jh(e) {
  return new kt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Dr(e, t, n, i) {
  return i <= 0 && (e = t = n = NaN), new kt(e, t, n, i);
}
function Fk(e) {
  return e instanceof vr || (e = ys(e)), e ? (e = e.rgb(), new kt(e.r, e.g, e.b, e.opacity)) : new kt();
}
function Ve(e, t, n, i) {
  return arguments.length === 1 ? Fk(e) : new kt(e, t, n, i ?? 1);
}
function kt(e, t, n, i) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +i;
}
lu(kt, Ve, am(vr, {
  brighter(e) {
    return e = e == null ? So : Math.pow(So, e), new kt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ur : Math.pow(ur, e), new kt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new kt(Ei(this.r), Ei(this.g), Ei(this.b), ko(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: qh,
  // Deprecated! Use color.formatHex.
  formatHex: qh,
  formatHex8: $k,
  formatRgb: Uh,
  toString: Uh
}));
function qh() {
  return `#${xi(this.r)}${xi(this.g)}${xi(this.b)}`;
}
function $k() {
  return `#${xi(this.r)}${xi(this.g)}${xi(this.b)}${xi((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Uh() {
  const e = ko(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Ei(this.r)}, ${Ei(this.g)}, ${Ei(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ko(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Ei(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function xi(e) {
  return e = Ei(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Wh(e, t, n, i) {
  return i <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Qt(e, t, n, i);
}
function lm(e) {
  if (e instanceof Qt) return new Qt(e.h, e.s, e.l, e.opacity);
  if (e instanceof vr || (e = ys(e)), !e) return new Qt();
  if (e instanceof Qt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, i = e.b / 255, s = Math.min(t, n, i), r = Math.max(t, n, i), o = NaN, a = r - s, l = (r + s) / 2;
  return a ? (t === r ? o = (n - i) / a + (n < i) * 6 : n === r ? o = (i - t) / a + 2 : o = (t - n) / a + 4, a /= l < 0.5 ? r + s : 2 - r - s, o *= 60) : a = l > 0 && l < 1 ? 0 : o, new Qt(o, a, l, e.opacity);
}
function Bk(e, t, n, i) {
  return arguments.length === 1 ? lm(e) : new Qt(e, t, n, i ?? 1);
}
function Qt(e, t, n, i) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +i;
}
lu(Qt, Bk, am(vr, {
  brighter(e) {
    return e = e == null ? So : Math.pow(So, e), new Qt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ur : Math.pow(ur, e), new Qt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, i = n + (n < 0.5 ? n : 1 - n) * t, s = 2 * n - i;
    return new kt(
      Wa(e >= 240 ? e - 240 : e + 120, s, i),
      Wa(e, s, i),
      Wa(e < 120 ? e + 240 : e - 120, s, i),
      this.opacity
    );
  },
  clamp() {
    return new Qt(zh(this.h), Rr(this.s), Rr(this.l), ko(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ko(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${zh(this.h)}, ${Rr(this.s) * 100}%, ${Rr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function zh(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Rr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Wa(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const cu = (e) => () => e;
function jk(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function qk(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(i) {
    return Math.pow(e + i * t, n);
  };
}
function Uk(e) {
  return (e = +e) == 1 ? cm : function(t, n) {
    return n - t ? qk(t, n, e) : cu(isNaN(t) ? n : t);
  };
}
function cm(e, t) {
  var n = t - e;
  return n ? jk(e, n) : cu(isNaN(e) ? t : e);
}
const Vh = function e(t) {
  var n = Uk(t);
  function i(s, r) {
    var o = n((s = Ve(s)).r, (r = Ve(r)).r), a = n(s.g, r.g), l = n(s.b, r.b), u = cm(s.opacity, r.opacity);
    return function(c) {
      return s.r = o(c), s.g = a(c), s.b = l(c), s.opacity = u(c), s + "";
    };
  }
  return i.gamma = e, i;
}(1);
function Wk(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, i = t.slice(), s;
  return function(r) {
    for (s = 0; s < n; ++s) i[s] = e[s] * (1 - r) + t[s] * r;
    return i;
  };
}
function zk(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Vk(e, t) {
  var n = t ? t.length : 0, i = e ? Math.min(n, e.length) : 0, s = new Array(i), r = new Array(n), o;
  for (o = 0; o < i; ++o) s[o] = la(e[o], t[o]);
  for (; o < n; ++o) r[o] = t[o];
  return function(a) {
    for (o = 0; o < i; ++o) r[o] = s[o](a);
    return r;
  };
}
function Gk(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(i) {
    return n.setTime(e * (1 - i) + t * i), n;
  };
}
function Eo(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Hk(e, t) {
  var n = {}, i = {}, s;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (s in t)
    s in e ? n[s] = la(e[s], t[s]) : i[s] = t[s];
  return function(r) {
    for (s in n) i[s] = n[s](r);
    return i;
  };
}
var Il = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, za = new RegExp(Il.source, "g");
function Kk(e) {
  return function() {
    return e;
  };
}
function Yk(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Xk(e, t) {
  var n = Il.lastIndex = za.lastIndex = 0, i, s, r, o = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (i = Il.exec(e)) && (s = za.exec(t)); )
    (r = s.index) > n && (r = t.slice(n, r), a[o] ? a[o] += r : a[++o] = r), (i = i[0]) === (s = s[0]) ? a[o] ? a[o] += s : a[++o] = s : (a[++o] = null, l.push({ i: o, x: Eo(i, s) })), n = za.lastIndex;
  return n < t.length && (r = t.slice(n), a[o] ? a[o] += r : a[++o] = r), a.length < 2 ? l[0] ? Yk(l[0].x) : Kk(t) : (t = l.length, function(u) {
    for (var c = 0, f; c < t; ++c) a[(f = l[c]).i] = f.x(u);
    return a.join("");
  });
}
function la(e, t) {
  var n = typeof t, i;
  return t == null || n === "boolean" ? cu(t) : (n === "number" ? Eo : n === "string" ? (i = ys(t)) ? (t = i, Vh) : Xk : t instanceof ys ? Vh : t instanceof Date ? Gk : zk(t) ? Wk : Array.isArray(t) ? Vk : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Hk : Eo)(e, t);
}
function um(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function Jk(e) {
  return function() {
    return e;
  };
}
function Qk(e) {
  return +e;
}
var Gh = [0, 1];
function Zn(e) {
  return e;
}
function Ml(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : Jk(isNaN(t) ? NaN : 0.5);
}
function Zk(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(i) {
    return Math.max(e, Math.min(t, i));
  };
}
function eE(e, t, n) {
  var i = e[0], s = e[1], r = t[0], o = t[1];
  return s < i ? (i = Ml(s, i), r = n(o, r)) : (i = Ml(i, s), r = n(r, o)), function(a) {
    return r(i(a));
  };
}
function tE(e, t, n) {
  var i = Math.min(e.length, t.length) - 1, s = new Array(i), r = new Array(i), o = -1;
  for (e[i] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < i; )
    s[o] = Ml(e[o], e[o + 1]), r[o] = n(t[o], t[o + 1]);
  return function(a) {
    var l = vk(e, a, 1, i) - 1;
    return r[l](s[l](a));
  };
}
function nE(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function iE() {
  var e = Gh, t = Gh, n = la, i, s, r, o = Zn, a, l, u;
  function c() {
    var h = Math.min(e.length, t.length);
    return o !== Zn && (o = Zk(e[0], e[h - 1])), a = h > 2 ? tE : eE, l = u = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? r : (l || (l = a(e.map(i), t, n)))(i(o(h)));
  }
  return f.invert = function(h) {
    return o(s((u || (u = a(t, e.map(i), Eo)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (e = Array.from(h, Qk), c()) : e.slice();
  }, f.range = function(h) {
    return arguments.length ? (t = Array.from(h), c()) : t.slice();
  }, f.rangeRound = function(h) {
    return t = Array.from(h), n = um, c();
  }, f.clamp = function(h) {
    return arguments.length ? (o = h ? !0 : Zn, c()) : o !== Zn;
  }, f.interpolate = function(h) {
    return arguments.length ? (n = h, c()) : n;
  }, f.unknown = function(h) {
    return arguments.length ? (r = h, f) : r;
  }, function(h, d) {
    return i = h, s = d, c();
  };
}
function sE() {
  return iE()(Zn, Zn);
}
function rE(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Co(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var n, i = e.slice(0, n);
  return [
    i.length > 1 ? i[0] + i.slice(2) : i,
    +e.slice(n + 1)
  ];
}
function bs(e) {
  return e = Co(Math.abs(e)), e ? e[1] : NaN;
}
function oE(e, t) {
  return function(n, i) {
    for (var s = n.length, r = [], o = 0, a = e[0], l = 0; s > 0 && a > 0 && (l + a + 1 > i && (a = Math.max(1, i - l)), r.push(n.substring(s -= a, s + a)), !((l += a + 1) > i)); )
      a = e[o = (o + 1) % e.length];
    return r.reverse().join(t);
  };
}
function aE(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var lE = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function To(e) {
  if (!(t = lE.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new uu({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
To.prototype = uu.prototype;
function uu(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
uu.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function cE(e) {
  e: for (var t = e.length, n = 1, i = -1, s; n < t; ++n)
    switch (e[n]) {
      case ".":
        i = s = n;
        break;
      case "0":
        i === 0 && (i = n), s = n;
        break;
      default:
        if (!+e[n]) break e;
        i > 0 && (i = 0);
        break;
    }
  return i > 0 ? e.slice(0, i) + e.slice(s + 1) : e;
}
var fm;
function uE(e, t) {
  var n = Co(e, t);
  if (!n) return e + "";
  var i = n[0], s = n[1], r = s - (fm = Math.max(-8, Math.min(8, Math.floor(s / 3))) * 3) + 1, o = i.length;
  return r === o ? i : r > o ? i + new Array(r - o + 1).join("0") : r > 0 ? i.slice(0, r) + "." + i.slice(r) : "0." + new Array(1 - r).join("0") + Co(e, Math.max(0, t + r - 1))[0];
}
function Hh(e, t) {
  var n = Co(e, t);
  if (!n) return e + "";
  var i = n[0], s = n[1];
  return s < 0 ? "0." + new Array(-s).join("0") + i : i.length > s + 1 ? i.slice(0, s + 1) + "." + i.slice(s + 1) : i + new Array(s - i.length + 2).join("0");
}
const Kh = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: rE,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Hh(e * 100, t),
  r: Hh,
  s: uE,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Yh(e) {
  return e;
}
var Xh = Array.prototype.map, Jh = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function fE(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Yh : oE(Xh.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", i = e.currency === void 0 ? "" : e.currency[1] + "", s = e.decimal === void 0 ? "." : e.decimal + "", r = e.numerals === void 0 ? Yh : aE(Xh.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", a = e.minus === void 0 ? "−" : e.minus + "", l = e.nan === void 0 ? "NaN" : e.nan + "";
  function u(f) {
    f = To(f);
    var h = f.fill, d = f.align, p = f.sign, w = f.symbol, E = f.zero, v = f.width, k = f.comma, g = f.precision, b = f.trim, A = f.type;
    A === "n" ? (k = !0, A = "g") : Kh[A] || (g === void 0 && (g = 12), b = !0, A = "g"), (E || h === "0" && d === "=") && (E = !0, h = "0", d = "=");
    var N = w === "$" ? n : w === "#" && /[boxX]/.test(A) ? "0" + A.toLowerCase() : "", L = w === "$" ? i : /[%p]/.test(A) ? o : "", B = Kh[A], j = /[defgprs%]/.test(A);
    g = g === void 0 ? 6 : /[gprs]/.test(A) ? Math.max(1, Math.min(21, g)) : Math.max(0, Math.min(20, g));
    function H(D) {
      var K = N, Y = L, ae, it, Ce;
      if (A === "c")
        Y = B(D) + Y, D = "";
      else {
        D = +D;
        var de = D < 0 || 1 / D < 0;
        if (D = isNaN(D) ? l : B(Math.abs(D), g), b && (D = cE(D)), de && +D == 0 && p !== "+" && (de = !1), K = (de ? p === "(" ? p : a : p === "-" || p === "(" ? "" : p) + K, Y = (A === "s" ? Jh[8 + fm / 3] : "") + Y + (de && p === "(" ? ")" : ""), j) {
          for (ae = -1, it = D.length; ++ae < it; )
            if (Ce = D.charCodeAt(ae), 48 > Ce || Ce > 57) {
              Y = (Ce === 46 ? s + D.slice(ae + 1) : D.slice(ae)) + Y, D = D.slice(0, ae);
              break;
            }
        }
      }
      k && !E && (D = t(D, 1 / 0));
      var ue = K.length + D.length + Y.length, Pe = ue < v ? new Array(v - ue + 1).join(h) : "";
      switch (k && E && (D = t(Pe + D, Pe.length ? v - Y.length : 1 / 0), Pe = ""), d) {
        case "<":
          D = K + D + Y + Pe;
          break;
        case "=":
          D = K + Pe + D + Y;
          break;
        case "^":
          D = Pe.slice(0, ue = Pe.length >> 1) + K + D + Y + Pe.slice(ue);
          break;
        default:
          D = Pe + K + D + Y;
          break;
      }
      return r(D);
    }
    return H.toString = function() {
      return f + "";
    }, H;
  }
  function c(f, h) {
    var d = u((f = To(f), f.type = "f", f)), p = Math.max(-8, Math.min(8, Math.floor(bs(h) / 3))) * 3, w = Math.pow(10, -p), E = Jh[8 + p / 3];
    return function(v) {
      return d(w * v) + E;
    };
  }
  return {
    format: u,
    formatPrefix: c
  };
}
var Fr, fu, hm;
hE({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function hE(e) {
  return Fr = fE(e), fu = Fr.format, hm = Fr.formatPrefix, Fr;
}
function dm(e) {
  return Math.max(0, -bs(Math.abs(e)));
}
function dE(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(bs(t) / 3))) * 3 - bs(Math.abs(e)));
}
function pE(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, bs(t) - bs(e)) + 1;
}
function gE(e, t, n, i) {
  var s = Ek(e, t, n), r;
  switch (i = To(i ?? ",f"), i.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return i.precision == null && !isNaN(r = dE(s, o)) && (i.precision = r), hm(i, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      i.precision == null && !isNaN(r = pE(s, Math.max(Math.abs(e), Math.abs(t)))) && (i.precision = r - (i.type === "e"));
      break;
    }
    case "f":
    case "%": {
      i.precision == null && !isNaN(r = dm(s)) && (i.precision = r - (i.type === "%") * 2);
      break;
    }
  }
  return fu(i);
}
function pm(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var i = t();
    return kk(i[0], i[i.length - 1], n ?? 10);
  }, e.tickFormat = function(n, i) {
    var s = t();
    return gE(s[0], s[s.length - 1], n ?? 10, i);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var i = t(), s = 0, r = i.length - 1, o = i[s], a = i[r], l, u, c = 10;
    for (a < o && (u = o, o = a, a = u, u = s, s = r, r = u); c-- > 0; ) {
      if (u = Nl(o, a, n), u === l)
        return i[s] = o, i[r] = a, t(i);
      if (u > 0)
        o = Math.floor(o / u) * u, a = Math.ceil(a / u) * u;
      else if (u < 0)
        o = Math.ceil(o * u) / u, a = Math.floor(a * u) / u;
      else
        break;
      l = u;
    }
    return e;
  }, e;
}
function gm() {
  var e = sE();
  return e.copy = function() {
    return nE(e, gm());
  }, Ck.apply(e, arguments), pm(e);
}
function mE() {
  var e = 0, t = 1, n, i, s, r, o = Zn, a = !1, l;
  function u(f) {
    return f == null || isNaN(f = +f) ? l : o(s === 0 ? 0.5 : (f = (r(f) - n) * s, a ? Math.max(0, Math.min(1, f)) : f));
  }
  u.domain = function(f) {
    return arguments.length ? ([e, t] = f, n = r(e = +e), i = r(t = +t), s = n === i ? 0 : 1 / (i - n), u) : [e, t];
  }, u.clamp = function(f) {
    return arguments.length ? (a = !!f, u) : a;
  }, u.interpolator = function(f) {
    return arguments.length ? (o = f, u) : o;
  };
  function c(f) {
    return function(h) {
      var d, p;
      return arguments.length ? ([d, p] = h, o = f(d, p), u) : [o(0), o(1)];
    };
  }
  return u.range = c(la), u.rangeRound = c(um), u.unknown = function(f) {
    return arguments.length ? (l = f, u) : l;
  }, function(f) {
    return r = f, n = f(e), i = f(t), s = n === i ? 0 : 1 / (i - n), u;
  };
}
function yE(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function mm() {
  var e = pm(mE()(Zn));
  return e.copy = function() {
    return yE(e, mm());
  }, Tk.apply(e, arguments);
}
function bE(e) {
  return e;
}
var Jr = 1, Qr = 2, Ll = 3, Bs = 4, Qh = 1e-6;
function wE(e) {
  return "translate(" + e + ",0)";
}
function vE(e) {
  return "translate(0," + e + ")";
}
function _E(e) {
  return (t) => +e(t);
}
function xE(e, t) {
  return t = Math.max(0, e.bandwidth() - t * 2) / 2, e.round() && (t = Math.round(t)), (n) => +e(n) + t;
}
function SE() {
  return !this.__axis;
}
function ca(e, t) {
  var n = [], i = null, s = null, r = 6, o = 6, a = 3, l = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, u = e === Jr || e === Bs ? -1 : 1, c = e === Bs || e === Qr ? "x" : "y", f = e === Jr || e === Ll ? wE : vE;
  function h(d) {
    var p = i ?? (t.ticks ? t.ticks.apply(t, n) : t.domain()), w = s ?? (t.tickFormat ? t.tickFormat.apply(t, n) : bE), E = Math.max(r, 0) + a, v = t.range(), k = +v[0] + l, g = +v[v.length - 1] + l, b = (t.bandwidth ? xE : _E)(t.copy(), l), A = d.selection ? d.selection() : d, N = A.selectAll(".domain").data([null]), L = A.selectAll(".tick").data(p, t).order(), B = L.exit(), j = L.enter().append("g").attr("class", "tick"), H = L.select("line"), D = L.select("text");
    N = N.merge(N.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), L = L.merge(j), H = H.merge(j.append("line").attr("stroke", "currentColor").attr(c + "2", u * r)), D = D.merge(j.append("text").attr("fill", "currentColor").attr(c, u * E).attr("dy", e === Jr ? "0em" : e === Ll ? "0.71em" : "0.32em")), d !== A && (N = N.transition(d), L = L.transition(d), H = H.transition(d), D = D.transition(d), B = B.transition(d).attr("opacity", Qh).attr("transform", function(K) {
      return isFinite(K = b(K)) ? f(K + l) : this.getAttribute("transform");
    }), j.attr("opacity", Qh).attr("transform", function(K) {
      var Y = this.parentNode.__axis;
      return f((Y && isFinite(Y = Y(K)) ? Y : b(K)) + l);
    })), B.remove(), N.attr("d", e === Bs || e === Qr ? o ? "M" + u * o + "," + k + "H" + l + "V" + g + "H" + u * o : "M" + l + "," + k + "V" + g : o ? "M" + k + "," + u * o + "V" + l + "H" + g + "V" + u * o : "M" + k + "," + l + "H" + g), L.attr("opacity", 1).attr("transform", function(K) {
      return f(b(K) + l);
    }), H.attr(c + "2", u * r), D.attr(c, u * E).text(w), A.filter(SE).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", e === Qr ? "start" : e === Bs ? "end" : "middle"), A.each(function() {
      this.__axis = b;
    });
  }
  return h.scale = function(d) {
    return arguments.length ? (t = d, h) : t;
  }, h.ticks = function() {
    return n = Array.from(arguments), h;
  }, h.tickArguments = function(d) {
    return arguments.length ? (n = d == null ? [] : Array.from(d), h) : n.slice();
  }, h.tickValues = function(d) {
    return arguments.length ? (i = d == null ? null : Array.from(d), h) : i && i.slice();
  }, h.tickFormat = function(d) {
    return arguments.length ? (s = d, h) : s;
  }, h.tickSize = function(d) {
    return arguments.length ? (r = o = +d, h) : r;
  }, h.tickSizeInner = function(d) {
    return arguments.length ? (r = +d, h) : r;
  }, h.tickSizeOuter = function(d) {
    return arguments.length ? (o = +d, h) : o;
  }, h.tickPadding = function(d) {
    return arguments.length ? (a = +d, h) : a;
  }, h.offset = function(d) {
    return arguments.length ? (l = +d, h) : l;
  }, h;
}
function kE(e) {
  return ca(Jr, e);
}
function EE(e) {
  return ca(Qr, e);
}
function CE(e) {
  return ca(Ll, e);
}
function TE(e) {
  return ca(Bs, e);
}
const Dl = Math.PI, Rl = 2 * Dl, vi = 1e-6, AE = Rl - vi;
function ym(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function OE(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return ym;
  const n = 10 ** t;
  return function(i) {
    this._ += i[0];
    for (let s = 1, r = i.length; s < r; ++s)
      this._ += Math.round(arguments[s] * n) / n + i[s];
  };
}
class hu {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? ym : OE(t);
  }
  moveTo(t, n) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, n) {
    this._append`L${this._x1 = +t},${this._y1 = +n}`;
  }
  quadraticCurveTo(t, n, i, s) {
    this._append`Q${+t},${+n},${this._x1 = +i},${this._y1 = +s}`;
  }
  bezierCurveTo(t, n, i, s, r, o) {
    this._append`C${+t},${+n},${+i},${+s},${this._x1 = +r},${this._y1 = +o}`;
  }
  arcTo(t, n, i, s, r) {
    if (t = +t, n = +n, i = +i, s = +s, r = +r, r < 0) throw new Error(`negative radius: ${r}`);
    let o = this._x1, a = this._y1, l = i - t, u = s - n, c = o - t, f = a - n, h = c * c + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (h > vi) if (!(Math.abs(f * l - u * c) > vi) || !r)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let d = i - o, p = s - a, w = l * l + u * u, E = d * d + p * p, v = Math.sqrt(w), k = Math.sqrt(h), g = r * Math.tan((Dl - Math.acos((w + h - E) / (2 * v * k))) / 2), b = g / k, A = g / v;
      Math.abs(b - 1) > vi && this._append`L${t + b * c},${n + b * f}`, this._append`A${r},${r},0,0,${+(f * d > c * p)},${this._x1 = t + A * l},${this._y1 = n + A * u}`;
    }
  }
  arc(t, n, i, s, r, o) {
    if (t = +t, n = +n, i = +i, o = !!o, i < 0) throw new Error(`negative radius: ${i}`);
    let a = i * Math.cos(s), l = i * Math.sin(s), u = t + a, c = n + l, f = 1 ^ o, h = o ? s - r : r - s;
    this._x1 === null ? this._append`M${u},${c}` : (Math.abs(this._x1 - u) > vi || Math.abs(this._y1 - c) > vi) && this._append`L${u},${c}`, i && (h < 0 && (h = h % Rl + Rl), h > AE ? this._append`A${i},${i},0,1,${f},${t - a},${n - l}A${i},${i},0,1,${f},${this._x1 = u},${this._y1 = c}` : h > vi && this._append`A${i},${i},0,${+(h >= Dl)},${f},${this._x1 = t + i * Math.cos(r)},${this._y1 = n + i * Math.sin(r)}`);
  }
  rect(t, n, i, s) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${i = +i}v${+s}h${-i}Z`;
  }
  toString() {
    return this._;
  }
}
function bm() {
  return new hu();
}
bm.prototype = hu.prototype;
function Ft(e) {
  return function() {
    return e;
  };
}
const Zh = Math.abs, ot = Math.atan2, bi = Math.cos, PE = Math.max, Va = Math.min, cn = Math.sin, gn = Math.sqrt, vt = 1e-12, ws = Math.PI, Ao = ws / 2, wm = 2 * ws;
function NE(e) {
  return e > 1 ? 0 : e < -1 ? ws : Math.acos(e);
}
function ed(e) {
  return e >= 1 ? Ao : e <= -1 ? -Ao : Math.asin(e);
}
function vm(e) {
  let t = 3;
  return e.digits = function(n) {
    if (!arguments.length) return t;
    if (n == null)
      t = null;
    else {
      const i = Math.floor(n);
      if (!(i >= 0)) throw new RangeError(`invalid digits: ${n}`);
      t = i;
    }
    return e;
  }, () => new hu(t);
}
function IE(e) {
  return e.innerRadius;
}
function ME(e) {
  return e.outerRadius;
}
function LE(e) {
  return e.startAngle;
}
function DE(e) {
  return e.endAngle;
}
function RE(e) {
  return e && e.padAngle;
}
function FE(e, t, n, i, s, r, o, a) {
  var l = n - e, u = i - t, c = o - s, f = a - r, h = f * l - c * u;
  if (!(h * h < vt))
    return h = (c * (t - r) - f * (e - s)) / h, [e + h * l, t + h * u];
}
function $r(e, t, n, i, s, r, o) {
  var a = e - n, l = t - i, u = (o ? r : -r) / gn(a * a + l * l), c = u * l, f = -u * a, h = e + c, d = t + f, p = n + c, w = i + f, E = (h + p) / 2, v = (d + w) / 2, k = p - h, g = w - d, b = k * k + g * g, A = s - r, N = h * w - p * d, L = (g < 0 ? -1 : 1) * gn(PE(0, A * A * b - N * N)), B = (N * g - k * L) / b, j = (-N * k - g * L) / b, H = (N * g + k * L) / b, D = (-N * k + g * L) / b, K = B - E, Y = j - v, ae = H - E, it = D - v;
  return K * K + Y * Y > ae * ae + it * it && (B = H, j = D), {
    cx: B,
    cy: j,
    x01: -c,
    y01: -f,
    x11: B * (s / A - 1),
    y11: j * (s / A - 1)
  };
}
function $E() {
  var e = IE, t = ME, n = Ft(0), i = null, s = LE, r = DE, o = RE, a = null, l = vm(u);
  function u() {
    var c, f, h = +e.apply(this, arguments), d = +t.apply(this, arguments), p = s.apply(this, arguments) - Ao, w = r.apply(this, arguments) - Ao, E = Zh(w - p), v = w > p;
    if (a || (a = c = l()), d < h && (f = d, d = h, h = f), !(d > vt)) a.moveTo(0, 0);
    else if (E > wm - vt)
      a.moveTo(d * bi(p), d * cn(p)), a.arc(0, 0, d, p, w, !v), h > vt && (a.moveTo(h * bi(w), h * cn(w)), a.arc(0, 0, h, w, p, v));
    else {
      var k = p, g = w, b = p, A = w, N = E, L = E, B = o.apply(this, arguments) / 2, j = B > vt && (i ? +i.apply(this, arguments) : gn(h * h + d * d)), H = Va(Zh(d - h) / 2, +n.apply(this, arguments)), D = H, K = H, Y, ae;
      if (j > vt) {
        var it = ed(j / h * cn(B)), Ce = ed(j / d * cn(B));
        (N -= it * 2) > vt ? (it *= v ? 1 : -1, b += it, A -= it) : (N = 0, b = A = (p + w) / 2), (L -= Ce * 2) > vt ? (Ce *= v ? 1 : -1, k += Ce, g -= Ce) : (L = 0, k = g = (p + w) / 2);
      }
      var de = d * bi(k), ue = d * cn(k), Pe = h * bi(A), Ct = h * cn(A);
      if (H > vt) {
        var Be = d * bi(g), We = d * cn(g), sn = h * bi(b), rn = h * cn(b), ht;
        if (E < ws)
          if (ht = FE(de, ue, sn, rn, Be, We, Pe, Ct)) {
            var Tt = de - ht[0], Kt = ue - ht[1], Yt = Be - ht[0], on = We - ht[1], At = 1 / cn(NE((Tt * Yt + Kt * on) / (gn(Tt * Tt + Kt * Kt) * gn(Yt * Yt + on * on))) / 2), Cn = gn(ht[0] * ht[0] + ht[1] * ht[1]);
            D = Va(H, (h - Cn) / (At - 1)), K = Va(H, (d - Cn) / (At + 1));
          } else
            D = K = 0;
      }
      L > vt ? K > vt ? (Y = $r(sn, rn, de, ue, d, K, v), ae = $r(Be, We, Pe, Ct, d, K, v), a.moveTo(Y.cx + Y.x01, Y.cy + Y.y01), K < H ? a.arc(Y.cx, Y.cy, K, ot(Y.y01, Y.x01), ot(ae.y01, ae.x01), !v) : (a.arc(Y.cx, Y.cy, K, ot(Y.y01, Y.x01), ot(Y.y11, Y.x11), !v), a.arc(0, 0, d, ot(Y.cy + Y.y11, Y.cx + Y.x11), ot(ae.cy + ae.y11, ae.cx + ae.x11), !v), a.arc(ae.cx, ae.cy, K, ot(ae.y11, ae.x11), ot(ae.y01, ae.x01), !v))) : (a.moveTo(de, ue), a.arc(0, 0, d, k, g, !v)) : a.moveTo(de, ue), !(h > vt) || !(N > vt) ? a.lineTo(Pe, Ct) : D > vt ? (Y = $r(Pe, Ct, Be, We, h, -D, v), ae = $r(de, ue, sn, rn, h, -D, v), a.lineTo(Y.cx + Y.x01, Y.cy + Y.y01), D < H ? a.arc(Y.cx, Y.cy, D, ot(Y.y01, Y.x01), ot(ae.y01, ae.x01), !v) : (a.arc(Y.cx, Y.cy, D, ot(Y.y01, Y.x01), ot(Y.y11, Y.x11), !v), a.arc(0, 0, h, ot(Y.cy + Y.y11, Y.cx + Y.x11), ot(ae.cy + ae.y11, ae.cx + ae.x11), v), a.arc(ae.cx, ae.cy, D, ot(ae.y11, ae.x11), ot(ae.y01, ae.x01), !v))) : a.arc(0, 0, h, A, b, v);
    }
    if (a.closePath(), c) return a = null, c + "" || null;
  }
  return u.centroid = function() {
    var c = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, f = (+s.apply(this, arguments) + +r.apply(this, arguments)) / 2 - ws / 2;
    return [bi(f) * c, cn(f) * c];
  }, u.innerRadius = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : Ft(+c), u) : e;
  }, u.outerRadius = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : Ft(+c), u) : t;
  }, u.cornerRadius = function(c) {
    return arguments.length ? (n = typeof c == "function" ? c : Ft(+c), u) : n;
  }, u.padRadius = function(c) {
    return arguments.length ? (i = c == null ? null : typeof c == "function" ? c : Ft(+c), u) : i;
  }, u.startAngle = function(c) {
    return arguments.length ? (s = typeof c == "function" ? c : Ft(+c), u) : s;
  }, u.endAngle = function(c) {
    return arguments.length ? (r = typeof c == "function" ? c : Ft(+c), u) : r;
  }, u.padAngle = function(c) {
    return arguments.length ? (o = typeof c == "function" ? c : Ft(+c), u) : o;
  }, u.context = function(c) {
    return arguments.length ? (a = c ?? null, u) : a;
  }, u;
}
const BE = {
  draw(e, t) {
    const n = gn(t / ws);
    e.moveTo(n, 0), e.arc(0, 0, n, 0, wm);
  }
}, jE = {
  draw(e, t) {
    const n = gn(t), i = -n / 2;
    e.rect(i, i, n, n);
  }
}, Ga = gn(3), qE = {
  draw(e, t) {
    const n = -gn(t / (Ga * 3));
    e.moveTo(0, n * 2), e.lineTo(-Ga * n, -n), e.lineTo(Ga * n, -n), e.closePath();
  }
};
function UE(e, t) {
  let n = null, i = vm(s);
  e = typeof e == "function" ? e : Ft(e || BE), t = typeof t == "function" ? t : Ft(t === void 0 ? 64 : +t);
  function s() {
    let r;
    if (n || (n = r = i()), e.apply(this, arguments).draw(n, +t.apply(this, arguments)), r) return n = null, r + "" || null;
  }
  return s.type = function(r) {
    return arguments.length ? (e = typeof r == "function" ? r : Ft(r), s) : e;
  }, s.size = function(r) {
    return arguments.length ? (t = typeof r == "function" ? r : Ft(+r), s) : t;
  }, s.context = function(r) {
    return arguments.length ? (n = r ?? null, s) : n;
  }, s;
}
const pe = {
  precisionFixed: dm,
  format: fu,
  select: pk,
  selectAll: gk,
  scaleLinear: gm,
  scaleSequential: mm,
  axisTop: kE,
  axisBottom: CE,
  axisRight: EE,
  axisLeft: TE,
  symbol: UE,
  path: bm,
  arc: $E,
  symbolTriangle: qE,
  symbolSquare: jE
};
let Br;
const WE = new Uint8Array(16);
function zE() {
  if (!Br && (Br = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Br))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Br(WE);
}
const st = [];
for (let e = 0; e < 256; ++e)
  st.push((e + 256).toString(16).slice(1));
function VE(e, t = 0) {
  return st[e[t + 0]] + st[e[t + 1]] + st[e[t + 2]] + st[e[t + 3]] + "-" + st[e[t + 4]] + st[e[t + 5]] + "-" + st[e[t + 6]] + st[e[t + 7]] + "-" + st[e[t + 8]] + st[e[t + 9]] + "-" + st[e[t + 10]] + st[e[t + 11]] + st[e[t + 12]] + st[e[t + 13]] + st[e[t + 14]] + st[e[t + 15]];
}
const GE = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), td = {
  randomUUID: GE
};
function _m(e, t, n) {
  if (td.randomUUID && !t && !e)
    return td.randomUUID();
  e = e || {};
  const i = e.random || (e.rng || zE)();
  return i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, VE(i);
}
const Yi = 1e-10, HE = 10;
function Ds(e, t, n = Yi) {
  const i = e - t;
  return Math.abs(i) < n ? 0 : i;
}
const nd = (e) => typeof e == "number" && Number.isFinite(e), ve = {
  greaterThan: (e, t, n = Yi) => Ds(e, t, n) > 0,
  greaterThanOrEqualTo: (e, t, n = Yi) => Ds(e, t, n) >= 0,
  lessThan: (e, t, n = Yi) => Ds(e, t, n) < 0,
  lessThanOrEqualTo: (e, t, n = Yi) => Ds(e, t, n) <= 0,
  equalTo: (e, t, n = Yi) => Ds(e, t, n) === 0,
  isNumber: nd,
  round: (e) => nd(e) ? Number(e.toFixed(HE)) : !1,
  getRandom: (e) => Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296 * e),
  getRandomSample(e, t) {
    const n = e.slice();
    let i = e.length;
    const s = i - t;
    for (; i-- > s; ) {
      const r = Math.floor(Math.random() * (i + 1));
      [n[i], n[r]] = [n[r], n[i]];
    }
    return n.slice(s);
  },
  calculateStandardDeviation(e, t = null) {
    t || (t = e.reduce((r, o) => r + o, 0) / e.length);
    const i = e.map((r) => Math.pow(r - t, 2)).reduce((r, o) => r + o, 0) / e.length;
    return Math.sqrt(i);
  },
  calculateCoefficientOfVariation(e) {
    const t = e.reduce((i, s) => i + s, 0) / e.length;
    return this.calculateStandardDeviation(e) / t;
  }
};
function KE(e) {
  return e ? e.toUpperCase() : "";
}
function Oo(e, t) {
  return t.reduce((n, i) => n && n[i] !== void 0 ? n[i] : void 0, e) !== void 0;
}
function Ge(e, t) {
  return t.reduce((n, i) => n && n[i] !== void 0 ? n[i] : void 0, e);
}
function Ha(e, t, n) {
  t.reduce((i, s, r) => (r === t.length - 1 ? i[s] = n : i[s] || (i[s] = {}), i[s]), e);
}
function $(e) {
  return !(e === void 0 || e === null || e === "" || typeof e == "object" && !Object.values(e).length);
}
function vs(e, t = !0) {
  return !$(e) || typeof e != "object" ? !1 : !!Object.values(e).some((i) => !(!$(i) || t && !i));
}
function YE(e) {
  return e ? e.reduce((t, n) => {
    let i = 0;
    return es(n) && n.autoAdd ? i = 1 : i = $(n.q) && typeof n.q == "string" ? parseInt(n.q) : n.q, !isNaN(i) && i > 0 ? t + i : t;
  }, 0) : 0;
}
function XE(e) {
  if (!(e != null && e.length)) return [];
  const t = e.filter((i) => !i.added).map((i) => (i.parentID = i.getParentID(), i)), n = {};
  return t.forEach((i) => {
    n[i.parentID] ? ++n[i.parentID].count : (n[i.parentID] = {}, n[i.parentID].count = 1, n[i.parentID].id = i.parentID, n[i.parentID].name = i != null && i.name ? i.name : i.id, n[i.parentID].l = i.l, n[i.parentID].w = i.w, n[i.parentID].t = i.t, n[i.parentID].material = i.material, n[i.parentID].rot = i.rot);
  }), Object.values(n);
}
function JE(e) {
  return e != null && e.length ? e.filter((t) => t.used && (t.stack === !1 || typeof t.stack == "number")) : [];
}
function QE() {
  const e = document.documentElement;
  return "requestFullscreen" in e || "webkitRequestFullscreen" in e || "mozRequestFullScreen" in e || "msRequestFullscreen" in e;
}
function _r(e) {
  return e ? (e = e.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^ a-z0-9._\-|]/gim, ""), e.trim()) : null;
}
function xm(e, t = 100) {
  return e ? (e = e.trim(), e = e.substring(0, t), e) : "";
}
const Po = {
  //sort by width then length - use .sort(sortHeightDescWidthDesc)
  WDLD(e, t) {
    if (e.w < t.w) return 1;
    if (e.w > t.w) return -1;
    if (e.l === t.l) return 0;
    if (e.l < t.l) return 1;
    if (e.l > t.l) return -1;
  },
  WALA(e, t) {
    if (e.w > t.w) return 1;
    if (e.w < t.w) return -1;
    if (e.l === t.l) return 0;
    if (e.l > t.l) return 1;
    if (e.l < t.l) return -1;
  },
  //sort by length d then width d
  LDWD(e, t) {
    if (e.l < t.l) return 1;
    if (e.l > t.l) return -1;
    if (e.w === t.w) return 0;
    if (e.w < t.w) return 1;
    if (e.w > t.w) return -1;
  },
  LAWA(e, t) {
    if (e.l > t.l) return 1;
    if (e.l < t.l) return -1;
    if (e.w === t.w) return 0;
    if (e.w > t.w) return 1;
    if (e.w < t.w) return -1;
  },
  //sort by width d
  WD(e, t) {
    if (e.w < t.w) return 1;
    if (e.w > t.w) return -1;
    if (e.w === t.w) return 0;
  },
  LD(e, t) {
    if (e.l < t.l) return 1;
    if (e.l > t.l) return -1;
    if (e.l === t.l) return 0;
  },
  LDIDA(e, t) {
    if (e.l < t.l) return 1;
    if (e.l > t.l) return -1;
    const n = e.id.toString().split("."), i = t.id.toString().split(".");
    return n[0] !== i[0] ? parseInt(n[0]) - parseInt(i[0]) : parseInt(n[1]) - parseInt(i[1]);
  },
  WDIDA(e, t) {
    if (e.w < t.w) return 1;
    if (e.w > t.w) return -1;
    const n = e.id.toString().split("."), i = t.id.toString().split(".");
    return n[0] !== i[0] ? parseInt(n[0]) - parseInt(i[0]) : parseInt(n[1]) - parseInt(i[1]);
  },
  //sort by proportion
  /* sortProportion: function(a, b) {
  
  		if (a.proportion < b.proportion) return 1;
  		if (a.proportion > b.proportion) return -1;
  
  		if (a.proportion === b.proportion) return a.index - b.index;
  
  	} */
  //area descending
  AD(e, t) {
    const n = e.getArea(), i = t.getArea();
    if (n < i) return 1;
    if (n > i) return -1;
    if (n === i) return 0;
  },
  AA(e, t) {
    const n = e.getArea(), i = t.getArea();
    if (n < i) return -1;
    if (n > i) return 1;
    if (n === i) return 0;
  },
  AAID(e, t) {
    const n = e.getArea(), i = t.getArea();
    if (n < i) return -1;
    if (n > i) return 1;
    if (n === i) {
      const s = e.id.toString().split("."), r = t.id.toString().split(".");
      return s[0] !== r[0] ? parseInt(s[0]) - parseInt(r[0]) : parseInt(s[1]) - parseInt(r[1]);
    }
    return 0;
  },
  ADID(e, t) {
    const n = e.getArea(), i = t.getArea();
    if (n < i) return 1;
    if (n > i) return -1;
    if (n === i) return 0;
    if (n === i) {
      const s = e.id.toString().split("."), r = t.id.toString().split(".");
      return s[0] !== r[0] ? parseInt(s[0]) - parseInt(r[0]) : parseInt(s[1]) - parseInt(r[1]);
    }
    return 0;
  },
  //by id ascending
  ID(e, t) {
    if (!e.id || !t.id) return 0;
    const n = e.id.toString().split("."), i = t.id.toString().split(".");
    return n[0] !== i[0] ? parseInt(n[0]) - parseInt(i[0]) : parseInt(n[1]) - parseInt(i[1]);
  },
  IDDesc(e, t) {
    const n = e.id.toString().split("."), i = t.id.toString().split(".");
    return n[0] !== i[0] ? parseInt(i[0]) - parseInt(n[0]) : parseInt(i[1]) - parseInt(n[1]);
  },
  StockID(e, t) {
    const n = e.stock.id.toString().split("."), i = t.stock.id.toString().split(".");
    return n[0] !== i[0] ? parseInt(n[0]) - parseInt(i[0]) : parseInt(n[1]) - parseInt(i[1]);
  },
  StockIDAD(e, t) {
    const n = e.stock.id.toString().split("."), i = t.stock.id.toString().split(".");
    if (n[0] !== i[0])
      return parseInt(n[0]) - parseInt(i[0]);
    if (n[1] !== i[1])
      return parseInt(n[1]) - parseInt(i[1]);
    const s = e.getArea(), r = t.getArea();
    if (s < r) return 1;
    if (s > r) return -1;
  },
  parentID(e, t) {
    return e.parentID - t.parentID;
  },
  YX(e, t) {
    if (e.y < t.y) return -1;
    if (e.y > t.y) return 1;
    if (e.y === t.y) return 0;
    if (e.x < t.x) return -1;
    if (e.x > t.x) return 1;
  },
  XY(e, t) {
    if (e.x < t.x) return -1;
    if (e.x > t.x) return 1;
    if (e.x === t.x) return 0;
    if (e.y < t.y) return -1;
    if (e.y > t.y) return 1;
  },
  subset(e, t) {
    if (e.totalLength < t.totalLength) return 1;
    if (e.totalLength > t.totalLength) return -1;
    if (e.area === t.area) return 0;
    if (e.area < t.area) return 1;
    if (e.area > t.area) return -1;
  },
  placementOrder(e, t) {
    return (e == null ? void 0 : e.placementOrder) - (t == null ? void 0 : t.placementOrder);
  },
  typePlacementOrder(e, t) {
    if (e.offcut && !t.offcut) return 1;
    if (!e.offcut && t.offcut) return 0;
    if (e.offcut === t.offcut) return e.placementOrder - t.placementOrder;
  },
  stockIDTypePlacementOrder(e, t) {
    const n = e.stock.id.toString().split("."), i = t.stock.id.toString().split(".");
    if (n[0] !== i[0])
      return parseInt(n[0]) - parseInt(i[0]);
    if (n[1] !== i[1])
      return parseInt(n[1]) - parseInt(i[1]);
    if (e.offcut && !t.offcut) return 1;
    if (!e.offcut && t.offcut) return 0;
    if (e.offcut === t.offcut) return e.placementOrder - t.placementOrder;
  },
  offcutPlacementOrder(e, t) {
    var s, r;
    if (!((s = e == null ? void 0 : e.stock) != null && s.id) || !((r = t == null ? void 0 : t.stock) != null && r.id)) return 0;
    const n = e.stock.id.toString().split("."), i = t.stock.id.toString().split(".");
    return n[0] !== i[0] ? parseInt(n[0]) - parseInt(i[0]) : n[1] !== i[1] ? parseInt(n[1]) - parseInt(i[1]) : (e == null ? void 0 : e.placementOrder) - (t == null ? void 0 : t.placementOrder);
  },
  groupPlacementOrder(e, t) {
    if (e.placementOrder > t.placementOrder) return 1;
    if (e.placementOrder < t.placementOrder) return -1;
    if (e.groupPlacementOrder === t.groupPlacementOrder) return 0;
    if (e.groupPlacementOrder > t.groupPlacementOrder) return 1;
    if (e.groupPlacementOrder < t.groupPlacementOrder) return -1;
  },
  swapFirstTwo(e) {
    const t = e[1];
    e[1] = e[0], e[0] = t;
  },
  //Fisher-Yates shuffle
  shuffle(e) {
    for (let t = e.length - 1; t > 0; t--) {
      const n = Math.floor(Math.random() * (t + 1));
      [e[t], e[n]] = [e[n], e[t]];
    }
  },
  /**
      * generator function which accepts a dimension to cater for shape rotation lock
      */
  fillThenArea(e) {
    return function(t, n) {
      return t.getLongSide(e) > n.getLongSide(e) ? -1 : t.getLongSide(e) < n.getLongSide(e) ? 1 : t.getArea() > n.getArea() ? -1 : t.getArea() < n.getArea() ? 1 : 0;
    };
  },
  aspect(e, t) {
    const n = e.getAspect(), i = t.getAspect();
    return n > i ? -1 : n < i ? 1 : 0;
  }
};
function ZE(e) {
  if (e === "l") return "x";
  if (e === "w") return "y";
}
function Li(e) {
  return e ? e === "l" ? "w" : "l" : null;
}
function eC(e) {
  return e ? e === "x" ? "y" : "x" : null;
}
class Xi {
  constructor(t) {
    m(this, "x1");
    m(this, "x2");
    m(this, "y1");
    m(this, "y2");
    m(this, "dimension");
    m(this, "direction");
    m(this, "shapeCollisions");
    m(this, "type");
    this.x1 = t.x1, this.x2 = t.x2, this.y1 = t.y1, this.y2 = t.y2, this.dimension = tC(this), this.direction = nC(this), this.type = t != null && t.type ? t.type : null;
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
function Hn(e, t, n, i) {
  return new Xi({ x1: e, y1: t, x2: n, y2: i });
}
function tC(e) {
  return typeof e > "u" || !ve.isNumber(e.x1) || !ve.isNumber(e.x2) || !ve.isNumber(e.y1) || !ve.isNumber(e.y2) ? null : e.x1 === e.x2 && e.y1 !== e.y2 ? "w" : e.y1 === e.y2 && e.x1 !== e.x2 ? "l" : null;
}
function nC(e) {
  return typeof e > "u" || !ve.isNumber(e.x1) || !ve.isNumber(e.x2) || !ve.isNumber(e.y1) || !ve.isNumber(e.y2) ? null : e.x1 < e.x2 ? "lr" : e.x1 > e.x2 ? "rl" : e.y1 < e.y2 ? "bt" : e.y1 > e.y2 ? "tb" : null;
}
function iC(e, t) {
  const n = e.getCorners(), i = {};
  return n.bottomLeft.x > 0 && n.bottomLeft.y > 0 && (i.bottomLeftDown = Hn(
    n.bottomLeft.x,
    n.bottomLeft.y,
    n.bottomLeft.x,
    0
  ), i.bottomLeftLeft = Hn(
    n.bottomLeft.x,
    n.bottomLeft.y,
    0,
    n.bottomLeft.y
  )), n.topLeft.x > 0 && n.topLeft.y < t.w && (i.topLeftLeft = Hn(
    n.topLeft.x,
    n.topLeft.y,
    0,
    n.topLeft.y
  ), i.topLeftTop = Hn(
    n.topLeft.x,
    n.topLeft.y,
    n.topLeft.x,
    t.w
  )), n.topRight.y < t.w && n.topRight.x < t.l && (i.topRightTop = Hn(
    n.topRight.x,
    n.topRight.y,
    n.topRight.x,
    t.w
  ), i.topRightRight = Hn(
    n.topRight.x,
    n.topRight.y,
    t.l,
    n.topRight.y
  )), n.bottomRight.x < t.l && n.bottomRight.y > 0 && (i.bottomRightRight = Hn(
    n.bottomRight.x,
    n.bottomRight.y,
    t.l,
    n.bottomRight.y
  ), i.bottomRightDown = Hn(
    n.bottomRight.x,
    n.bottomRight.y,
    n.bottomRight.x,
    0
  )), i;
}
var Sm = Object.defineProperty, sC = Object.getOwnPropertyNames, M = (e, t) => Sm(e, "name", { value: t, configurable: !0 }), rC = (e, t) => function() {
  return t || (0, e[sC(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, du = (e, t) => {
  for (var n in t)
    Sm(e, n, { get: t[n], enumerable: !0 });
}, oC = rC({
  "(disabled):util"() {
  }
}), No = {};
du(No, {
  addChainableMethod: () => Eu,
  addLengthGuard: () => kr,
  addMethod: () => xu,
  addProperty: () => _u,
  checkError: () => It,
  compareByInspect: () => Do,
  eql: () => Xm,
  expectTypes: () => Pm,
  flag: () => he,
  getActual: () => fa,
  getMessage: () => mu,
  getName: () => da,
  getOperator: () => Ou,
  getOwnEnumerableProperties: () => Au,
  getOwnEnumerablePropertySymbols: () => Tu,
  getPathInfo: () => vu,
  hasProperty: () => ha,
  inspect: () => we,
  isNaN: () => Ro,
  isNumeric: () => tt,
  isProxyEnabled: () => Sr,
  isRegExp: () => Fo,
  objDisplay: () => Ci,
  overwriteChainableMethod: () => Cu,
  overwriteMethod: () => ku,
  overwriteProperty: () => Su,
  proxify: () => Ts,
  test: () => pu,
  transferFlags: () => tn,
  type: () => Te
});
var It = {};
du(It, {
  compatibleConstructor: () => Cm,
  compatibleInstance: () => Em,
  compatibleMessage: () => Tm,
  getConstructorName: () => Am,
  getMessage: () => Om
});
function ua(e) {
  return e instanceof Error || Object.prototype.toString.call(e) === "[object Error]";
}
M(ua, "isErrorInstance");
function km(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
M(km, "isRegExp");
function Em(e, t) {
  return ua(t) && e === t;
}
M(Em, "compatibleInstance");
function Cm(e, t) {
  return ua(t) ? e.constructor === t.constructor || e instanceof t.constructor : (typeof t == "object" || typeof t == "function") && t.prototype ? e.constructor === t || e instanceof t : !1;
}
M(Cm, "compatibleConstructor");
function Tm(e, t) {
  const n = typeof e == "string" ? e : e.message;
  return km(t) ? t.test(n) : typeof t == "string" ? n.indexOf(t) !== -1 : !1;
}
M(Tm, "compatibleMessage");
function Am(e) {
  let t = e;
  return ua(e) ? t = e.constructor.name : typeof e == "function" && (t = e.name, t === "" && (t = new e().name || t)), t;
}
M(Am, "getConstructorName");
function Om(e) {
  let t = "";
  return e && e.message ? t = e.message : typeof e == "string" && (t = e), t;
}
M(Om, "getMessage");
function he(e, t, n) {
  var i = e.__flags || (e.__flags = /* @__PURE__ */ Object.create(null));
  if (arguments.length === 3)
    i[t] = n;
  else
    return i[t];
}
M(he, "flag");
function pu(e, t) {
  var n = he(e, "negate"), i = t[0];
  return n ? !i : i;
}
M(pu, "test");
function Te(e) {
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  const t = e[Symbol.toStringTag];
  return typeof t == "string" ? t : Object.prototype.toString.call(e).slice(8, -1);
}
M(Te, "type");
var aC = "captureStackTrace" in Error, Pi, xe = (Pi = class extends Error {
  constructor(n = "Unspecified AssertionError", i, s) {
    super(n);
    m(this, "message");
    this.message = n, aC && Error.captureStackTrace(this, s || Pi);
    for (const r in i)
      r in this || (this[r] = i[r]);
  }
  get name() {
    return "AssertionError";
  }
  get ok() {
    return !1;
  }
  toJSON(n) {
    return {
      ...this,
      name: this.name,
      message: this.message,
      ok: !1,
      stack: n !== !1 ? this.stack : void 0
    };
  }
}, M(Pi, "AssertionError"), Pi);
function Pm(e, t) {
  var n = he(e, "message"), i = he(e, "ssfi");
  n = n ? n + ": " : "", e = he(e, "object"), t = t.map(function(o) {
    return o.toLowerCase();
  }), t.sort();
  var s = t.map(function(o, a) {
    var l = ~["a", "e", "i", "o", "u"].indexOf(o.charAt(0)) ? "an" : "a", u = t.length > 1 && a === t.length - 1 ? "or " : "";
    return u + l + " " + o;
  }).join(", "), r = Te(e).toLowerCase();
  if (!t.some(function(o) {
    return r === o;
  }))
    throw new xe(
      n + "object tested must be " + s + ", but " + r + " given",
      void 0,
      i
    );
}
M(Pm, "expectTypes");
function fa(e, t) {
  return t.length > 4 ? t[4] : e._obj;
}
M(fa, "getActual");
var id = {
  bold: ["1", "22"],
  dim: ["2", "22"],
  italic: ["3", "23"],
  underline: ["4", "24"],
  // 5 & 6 are blinking
  inverse: ["7", "27"],
  hidden: ["8", "28"],
  strike: ["9", "29"],
  // 10-20 are fonts
  // 21-29 are resets for 1-9
  black: ["30", "39"],
  red: ["31", "39"],
  green: ["32", "39"],
  yellow: ["33", "39"],
  blue: ["34", "39"],
  magenta: ["35", "39"],
  cyan: ["36", "39"],
  white: ["37", "39"],
  brightblack: ["30;1", "39"],
  brightred: ["31;1", "39"],
  brightgreen: ["32;1", "39"],
  brightyellow: ["33;1", "39"],
  brightblue: ["34;1", "39"],
  brightmagenta: ["35;1", "39"],
  brightcyan: ["36;1", "39"],
  brightwhite: ["37;1", "39"],
  grey: ["90", "39"]
}, lC = {
  special: "cyan",
  number: "yellow",
  bigint: "yellow",
  boolean: "yellow",
  undefined: "grey",
  null: "bold",
  string: "green",
  symbol: "green",
  date: "magenta",
  regexp: "red"
}, _s = "…";
function Nm(e, t) {
  const n = id[lC[t]] || id[t] || "";
  return n ? `\x1B[${n[0]}m${String(e)}\x1B[${n[1]}m` : String(e);
}
M(Nm, "colorise");
function Im({
  showHidden: e = !1,
  depth: t = 2,
  colors: n = !1,
  customInspect: i = !0,
  showProxy: s = !1,
  maxArrayLength: r = 1 / 0,
  breakLength: o = 1 / 0,
  seen: a = [],
  // eslint-disable-next-line no-shadow
  truncate: l = 1 / 0,
  stylize: u = String
} = {}, c) {
  const f = {
    showHidden: !!e,
    depth: Number(t),
    colors: !!n,
    customInspect: !!i,
    showProxy: !!s,
    maxArrayLength: Number(r),
    breakLength: Number(o),
    truncate: Number(l),
    seen: a,
    inspect: c,
    stylize: u
  };
  return f.colors && (f.stylize = Nm), f;
}
M(Im, "normaliseOptions");
function Mm(e) {
  return e >= "\uD800" && e <= "\uDBFF";
}
M(Mm, "isHighSurrogate");
function zn(e, t, n = _s) {
  e = String(e);
  const i = n.length, s = e.length;
  if (i > t && s > i)
    return n;
  if (s > t && s > i) {
    let r = t - i;
    return r > 0 && Mm(e[r - 1]) && (r = r - 1), `${e.slice(0, r)}${n}`;
  }
  return e;
}
M(zn, "truncate");
function Gt(e, t, n, i = ", ") {
  n = n || t.inspect;
  const s = e.length;
  if (s === 0)
    return "";
  const r = t.truncate;
  let o = "", a = "", l = "";
  for (let u = 0; u < s; u += 1) {
    const c = u + 1 === e.length, f = u + 2 === e.length;
    l = `${_s}(${e.length - u})`;
    const h = e[u];
    t.truncate = r - o.length - (c ? 0 : i.length);
    const d = a || n(h, t) + (c ? "" : i), p = o.length + d.length, w = p + l.length;
    if (c && p > r && o.length + l.length <= r || !c && !f && w > r || (a = c ? "" : n(e[u + 1], t) + (f ? "" : i), !c && f && w > r && p + a.length > r))
      break;
    if (o += d, !c && !f && p + a.length >= r) {
      l = `${_s}(${e.length - u - 1})`;
      break;
    }
    l = "";
  }
  return `${o}${l}`;
}
M(Gt, "inspectList");
function Lm(e) {
  return e.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/) ? e : JSON.stringify(e).replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
}
M(Lm, "quoteComplexKey");
function xs([e, t], n) {
  return n.truncate -= 2, typeof e == "string" ? e = Lm(e) : typeof e != "number" && (e = `[${n.inspect(e, n)}]`), n.truncate -= e.length, t = n.inspect(t, n), `${e}: ${t}`;
}
M(xs, "inspectProperty");
function Dm(e, t) {
  const n = Object.keys(e).slice(e.length);
  if (!e.length && !n.length)
    return "[]";
  t.truncate -= 4;
  const i = Gt(e, t);
  t.truncate -= i.length;
  let s = "";
  return n.length && (s = Gt(n.map((r) => [r, e[r]]), t, xs)), `[ ${i}${s ? `, ${s}` : ""} ]`;
}
M(Dm, "inspectArray");
var cC = /* @__PURE__ */ M((e) => typeof Buffer == "function" && e instanceof Buffer ? "Buffer" : e[Symbol.toStringTag] ? e[Symbol.toStringTag] : e.constructor.name, "getArrayName");
function un(e, t) {
  const n = cC(e);
  t.truncate -= n.length + 4;
  const i = Object.keys(e).slice(e.length);
  if (!e.length && !i.length)
    return `${n}[]`;
  let s = "";
  for (let o = 0; o < e.length; o++) {
    const a = `${t.stylize(zn(e[o], t.truncate), "number")}${o === e.length - 1 ? "" : ", "}`;
    if (t.truncate -= a.length, e[o] !== e.length && t.truncate <= 3) {
      s += `${_s}(${e.length - e[o] + 1})`;
      break;
    }
    s += a;
  }
  let r = "";
  return i.length && (r = Gt(i.map((o) => [o, e[o]]), t, xs)), `${n}[ ${s}${r ? `, ${r}` : ""} ]`;
}
M(un, "inspectTypedArray");
function Rm(e, t) {
  const n = e.toJSON();
  if (n === null)
    return "Invalid Date";
  const i = n.split("T"), s = i[0];
  return t.stylize(`${s}T${zn(i[1], t.truncate - s.length - 1)}`, "date");
}
M(Rm, "inspectDate");
function Fl(e, t) {
  const n = e[Symbol.toStringTag] || "Function", i = e.name;
  return i ? t.stylize(`[${n} ${zn(i, t.truncate - 11)}]`, "special") : t.stylize(`[${n}]`, "special");
}
M(Fl, "inspectFunction");
function Fm([e, t], n) {
  return n.truncate -= 4, e = n.inspect(e, n), n.truncate -= e.length, t = n.inspect(t, n), `${e} => ${t}`;
}
M(Fm, "inspectMapEntry");
function $m(e) {
  const t = [];
  return e.forEach((n, i) => {
    t.push([i, n]);
  }), t;
}
M($m, "mapToEntries");
function Bm(e, t) {
  return e.size - 1 <= 0 ? "Map{}" : (t.truncate -= 7, `Map{ ${Gt($m(e), t, Fm)} }`);
}
M(Bm, "inspectMap");
var uC = Number.isNaN || ((e) => e !== e);
function $l(e, t) {
  return uC(e) ? t.stylize("NaN", "number") : e === 1 / 0 ? t.stylize("Infinity", "number") : e === -1 / 0 ? t.stylize("-Infinity", "number") : e === 0 ? t.stylize(1 / e === 1 / 0 ? "+0" : "-0", "number") : t.stylize(zn(String(e), t.truncate), "number");
}
M($l, "inspectNumber");
function Bl(e, t) {
  let n = zn(e.toString(), t.truncate - 1);
  return n !== _s && (n += "n"), t.stylize(n, "bigint");
}
M(Bl, "inspectBigInt");
function jm(e, t) {
  const n = e.toString().split("/")[2], i = t.truncate - (2 + n.length), s = e.source;
  return t.stylize(`/${zn(s, i)}/${n}`, "regexp");
}
M(jm, "inspectRegExp");
function qm(e) {
  const t = [];
  return e.forEach((n) => {
    t.push(n);
  }), t;
}
M(qm, "arrayFromSet");
function Um(e, t) {
  return e.size === 0 ? "Set{}" : (t.truncate -= 7, `Set{ ${Gt(qm(e), t)} }`);
}
M(Um, "inspectSet");
var sd = new RegExp("['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]", "g"), fC = {
  "\b": "\\b",
  "	": "\\t",
  "\n": "\\n",
  "\f": "\\f",
  "\r": "\\r",
  "'": "\\'",
  "\\": "\\\\"
}, hC = 16, dC = 4;
function Wm(e) {
  return fC[e] || `\\u${`0000${e.charCodeAt(0).toString(hC)}`.slice(-dC)}`;
}
M(Wm, "escape");
function jl(e, t) {
  return sd.test(e) && (e = e.replace(sd, Wm)), t.stylize(`'${zn(e, t.truncate - 2)}'`, "string");
}
M(jl, "inspectString");
function ql(e) {
  return "description" in Symbol.prototype ? e.description ? `Symbol(${e.description})` : "Symbol()" : e.toString();
}
M(ql, "inspectSymbol");
var zm = /* @__PURE__ */ M(() => "Promise{…}", "getPromiseValue");
try {
  const { getPromiseDetails: e, kPending: t, kRejected: n } = process.binding("util");
  Array.isArray(e(Promise.resolve())) && (zm = /* @__PURE__ */ M((i, s) => {
    const [r, o] = e(i);
    return r === t ? "Promise{<pending>}" : `Promise${r === n ? "!" : ""}{${s.inspect(o, s)}}`;
  }, "getPromiseValue"));
} catch {
}
var pC = zm;
function Zs(e, t) {
  const n = Object.getOwnPropertyNames(e), i = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : [];
  if (n.length === 0 && i.length === 0)
    return "{}";
  if (t.truncate -= 4, t.seen = t.seen || [], t.seen.includes(e))
    return "[Circular]";
  t.seen.push(e);
  const s = Gt(n.map((a) => [a, e[a]]), t, xs), r = Gt(i.map((a) => [a, e[a]]), t, xs);
  t.seen.pop();
  let o = "";
  return s && r && (o = ", "), `{ ${s}${o}${r} }`;
}
M(Zs, "inspectObject");
var Ka = typeof Symbol < "u" && Symbol.toStringTag ? Symbol.toStringTag : !1;
function Vm(e, t) {
  let n = "";
  return Ka && Ka in e && (n = e[Ka]), n = n || e.constructor.name, (!n || n === "_class") && (n = "<Anonymous Class>"), t.truncate -= n.length, `${n}${Zs(e, t)}`;
}
M(Vm, "inspectClass");
function Gm(e, t) {
  return e.length === 0 ? "Arguments[]" : (t.truncate -= 13, `Arguments[ ${Gt(e, t)} ]`);
}
M(Gm, "inspectArguments");
var gC = [
  "stack",
  "line",
  "column",
  "name",
  "message",
  "fileName",
  "lineNumber",
  "columnNumber",
  "number",
  "description",
  "cause"
];
function Hm(e, t) {
  const n = Object.getOwnPropertyNames(e).filter((o) => gC.indexOf(o) === -1), i = e.name;
  t.truncate -= i.length;
  let s = "";
  if (typeof e.message == "string" ? s = zn(e.message, t.truncate) : n.unshift("message"), s = s ? `: ${s}` : "", t.truncate -= s.length + 5, t.seen = t.seen || [], t.seen.includes(e))
    return "[Circular]";
  t.seen.push(e);
  const r = Gt(n.map((o) => [o, e[o]]), t, xs);
  return `${i}${s}${r ? ` { ${r} }` : ""}`;
}
M(Hm, "inspectObject");
function Km([e, t], n) {
  return n.truncate -= 3, t ? `${n.stylize(String(e), "yellow")}=${n.stylize(`"${t}"`, "string")}` : `${n.stylize(String(e), "yellow")}`;
}
M(Km, "inspectAttribute");
function Io(e, t) {
  return Gt(e, t, gu, `
`);
}
M(Io, "inspectHTMLCollection");
function gu(e, t) {
  const n = e.getAttributeNames(), i = e.tagName.toLowerCase(), s = t.stylize(`<${i}`, "special"), r = t.stylize(">", "special"), o = t.stylize(`</${i}>`, "special");
  t.truncate -= i.length * 2 + 5;
  let a = "";
  n.length > 0 && (a += " ", a += Gt(n.map((c) => [c, e.getAttribute(c)]), t, Km, " ")), t.truncate -= a.length;
  const l = t.truncate;
  let u = Io(e.children, t);
  return u && u.length > l && (u = `${_s}(${e.children.length})`), `${s}${a}${r}${u}${o}`;
}
M(gu, "inspectHTML");
var mC = typeof Symbol == "function" && typeof Symbol.for == "function", Ya = mC ? Symbol.for("chai/inspect") : "@@chai/inspect", Ji = !1;
try {
  const e = oC();
  Ji = e.inspect ? e.inspect.custom : !1;
} catch {
  Ji = !1;
}
var rd = /* @__PURE__ */ new WeakMap(), od = {}, ad = {
  undefined: (e, t) => t.stylize("undefined", "undefined"),
  null: (e, t) => t.stylize("null", "null"),
  boolean: (e, t) => t.stylize(String(e), "boolean"),
  Boolean: (e, t) => t.stylize(String(e), "boolean"),
  number: $l,
  Number: $l,
  bigint: Bl,
  BigInt: Bl,
  string: jl,
  String: jl,
  function: Fl,
  Function: Fl,
  symbol: ql,
  // A Symbol polyfill will return `Symbol` not `symbol` from typedetect
  Symbol: ql,
  Array: Dm,
  Date: Rm,
  Map: Bm,
  Set: Um,
  RegExp: jm,
  Promise: pC,
  // WeakSet, WeakMap are totally opaque to us
  WeakSet: (e, t) => t.stylize("WeakSet{…}", "special"),
  WeakMap: (e, t) => t.stylize("WeakMap{…}", "special"),
  Arguments: Gm,
  Int8Array: un,
  Uint8Array: un,
  Uint8ClampedArray: un,
  Int16Array: un,
  Uint16Array: un,
  Int32Array: un,
  Uint32Array: un,
  Float32Array: un,
  Float64Array: un,
  Generator: () => "",
  DataView: () => "",
  ArrayBuffer: () => "",
  Error: Hm,
  HTMLCollection: Io,
  NodeList: Io
}, yC = /* @__PURE__ */ M((e, t, n) => Ya in e && typeof e[Ya] == "function" ? e[Ya](t) : Ji && Ji in e && typeof e[Ji] == "function" ? e[Ji](t.depth, t) : "inspect" in e && typeof e.inspect == "function" ? e.inspect(t.depth, t) : "constructor" in e && rd.has(e.constructor) ? rd.get(e.constructor)(e, t) : od[n] ? od[n](e, t) : "", "inspectCustom"), bC = Object.prototype.toString;
function Mo(e, t = {}) {
  const n = Im(t, Mo), { customInspect: i } = n;
  let s = e === null ? "null" : typeof e;
  if (s === "object" && (s = bC.call(e).slice(8, -1)), s in ad)
    return ad[s](e, n);
  if (i && e) {
    const o = yC(e, n, s);
    if (o)
      return typeof o == "string" ? o : Mo(o, n);
  }
  const r = e ? Object.getPrototypeOf(e) : !1;
  return r === Object.prototype || r === null ? Zs(e, n) : e && typeof HTMLElement == "function" && e instanceof HTMLElement ? gu(e, n) : "constructor" in e ? e.constructor !== Object ? Vm(e, n) : Zs(e, n) : e === Object(e) ? Zs(e, n) : n.stylize(String(e), s);
}
M(Mo, "inspect");
var bt = {
  /**
   * ### config.includeStack
   *
   * User configurable property, influences whether stack trace
   * is included in Assertion error message. Default of false
   * suppresses stack trace in the error message.
   *
   *     chai.config.includeStack = true;  // enable stack on error
   *
   * @param {boolean}
   * @public
   */
  includeStack: !1,
  /**
   * ### config.showDiff
   *
   * User configurable property, influences whether or not
   * the `showDiff` flag should be included in the thrown
   * AssertionErrors. `false` will always be `false`; `true`
   * will be true when the assertion has requested a diff
   * be shown.
   *
   * @param {boolean}
   * @public
   */
  showDiff: !0,
  /**
   * ### config.truncateThreshold
   *
   * User configurable property, sets length threshold for actual and
   * expected values in assertion errors. If this threshold is exceeded, for
   * example for large data structures, the value is replaced with something
   * like `[ Array(3) ]` or `{ Object (prop1, prop2) }`.
   *
   * Set it to zero if you want to disable truncating altogether.
   *
   * This is especially userful when doing assertions on arrays: having this
   * set to a reasonable large value makes the failure messages readily
   * inspectable.
   *
   *     chai.config.truncateThreshold = 0;  // disable truncating
   *
   * @param {number}
   * @public
   */
  truncateThreshold: 40,
  /**
   * ### config.useProxy
   *
   * User configurable property, defines if chai will use a Proxy to throw
   * an error when a non-existent property is read, which protects users
   * from typos when using property-based assertions.
   *
   * Set it to false if you want to disable this feature.
   *
   *     chai.config.useProxy = false;  // disable use of Proxy
   *
   * This feature is automatically disabled regardless of this config value
   * in environments that don't support proxies.
   *
   * @param {boolean}
   * @public
   */
  useProxy: !0,
  /**
   * ### config.proxyExcludedKeys
   *
   * User configurable property, defines which properties should be ignored
   * instead of throwing an error if they do not exist on the assertion.
   * This is only applied if the environment Chai is running in supports proxies and
   * if the `useProxy` configuration setting is enabled.
   * By default, `then` and `inspect` will not throw an error if they do not exist on the
   * assertion object because the `.inspect` property is read by `util.inspect` (for example, when
   * using `console.log` on the assertion object) and `.then` is necessary for promise type-checking.
   *
   *     // By default these keys will not throw an error if they do not exist on the assertion object
   *     chai.config.proxyExcludedKeys = ['then', 'inspect'];
   *
   * @param {Array}
   * @public
   */
  proxyExcludedKeys: ["then", "catch", "inspect", "toJSON"],
  /**
   * ### config.deepEqual
   *
   * User configurable property, defines which a custom function to use for deepEqual
   * comparisons.
   * By default, the function used is the one from the `deep-eql` package without custom comparator.
   *
   *     // use a custom comparator
   *     chai.config.deepEqual = (expected, actual) => {
   *         return chai.util.eql(expected, actual, {
   *             comparator: (expected, actual) => {
   *                 // for non number comparison, use the default behavior
   *                 if(typeof expected !== 'number') return null;
   *                 // allow a difference of 10 between compared numbers
   *                 return typeof actual === 'number' && Math.abs(actual - expected) < 10
   *             }
   *         })
   *     };
   *
   * @param {Function}
   * @public
   */
  deepEqual: null
};
function we(e, t, n, i) {
  var s = {
    colors: i,
    depth: typeof n > "u" ? 2 : n,
    showHidden: t,
    truncate: bt.truncateThreshold ? bt.truncateThreshold : 1 / 0
  };
  return Mo(e, s);
}
M(we, "inspect");
function Ci(e) {
  var t = we(e), n = Object.prototype.toString.call(e);
  if (bt.truncateThreshold && t.length >= bt.truncateThreshold) {
    if (n === "[object Function]")
      return !e.name || e.name === "" ? "[Function]" : "[Function: " + e.name + "]";
    if (n === "[object Array]")
      return "[ Array(" + e.length + ") ]";
    if (n === "[object Object]") {
      var i = Object.keys(e), s = i.length > 2 ? i.splice(0, 2).join(", ") + ", ..." : i.join(", ");
      return "{ Object (" + s + ") }";
    } else
      return t;
  } else
    return t;
}
M(Ci, "objDisplay");
function mu(e, t) {
  var n = he(e, "negate"), i = he(e, "object"), s = t[3], r = fa(e, t), o = n ? t[2] : t[1], a = he(e, "message");
  return typeof o == "function" && (o = o()), o = o || "", o = o.replace(/#\{this\}/g, function() {
    return Ci(i);
  }).replace(/#\{act\}/g, function() {
    return Ci(r);
  }).replace(/#\{exp\}/g, function() {
    return Ci(s);
  }), a ? a + ": " + o : o;
}
M(mu, "getMessage");
function tn(e, t, n) {
  var i = e.__flags || (e.__flags = /* @__PURE__ */ Object.create(null));
  t.__flags || (t.__flags = /* @__PURE__ */ Object.create(null)), n = arguments.length === 3 ? n : !0;
  for (var s in i)
    (n || s !== "object" && s !== "ssfi" && s !== "lockSsfi" && s != "message") && (t.__flags[s] = i[s]);
}
M(tn, "transferFlags");
function Ul(e) {
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  const t = e[Symbol.toStringTag];
  return typeof t == "string" ? t : Object.prototype.toString.call(e).slice(8, -1);
}
M(Ul, "type");
function yu() {
  this._key = "chai/deep-eql__" + Math.random() + Date.now();
}
M(yu, "FakeMap");
yu.prototype = {
  get: /* @__PURE__ */ M(function(t) {
    return t[this._key];
  }, "get"),
  set: /* @__PURE__ */ M(function(t, n) {
    Object.isExtensible(t) && Object.defineProperty(t, this._key, {
      value: n,
      configurable: !0
    });
  }, "set")
};
var Ym = typeof WeakMap == "function" ? WeakMap : yu;
function Wl(e, t, n) {
  if (!n || Di(e) || Di(t))
    return null;
  var i = n.get(e);
  if (i) {
    var s = i.get(t);
    if (typeof s == "boolean")
      return s;
  }
  return null;
}
M(Wl, "memoizeCompare");
function js(e, t, n, i) {
  if (!(!n || Di(e) || Di(t))) {
    var s = n.get(e);
    s ? s.set(t, i) : (s = new Ym(), s.set(t, i), n.set(e, s));
  }
}
M(js, "memoizeSet");
var Xm = xr;
function xr(e, t, n) {
  if (n && n.comparator)
    return zl(e, t, n);
  var i = bu(e, t);
  return i !== null ? i : zl(e, t, n);
}
M(xr, "deepEqual");
function bu(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && // eslint-disable-line no-self-compare
  t !== t ? !0 : Di(e) || Di(t) ? !1 : null;
}
M(bu, "simpleEqual");
function zl(e, t, n) {
  n = n || {}, n.memoize = n.memoize === !1 ? !1 : n.memoize || new Ym();
  var i = n && n.comparator, s = Wl(e, t, n.memoize);
  if (s !== null)
    return s;
  var r = Wl(t, e, n.memoize);
  if (r !== null)
    return r;
  if (i) {
    var o = i(e, t);
    if (o === !1 || o === !0)
      return js(e, t, n.memoize, o), o;
    var a = bu(e, t);
    if (a !== null)
      return a;
  }
  var l = Ul(e);
  if (l !== Ul(t))
    return js(e, t, n.memoize, !1), !1;
  js(e, t, n.memoize, !0);
  var u = Jm(e, t, l, n);
  return js(e, t, n.memoize, u), u;
}
M(zl, "extensiveDeepEqual");
function Jm(e, t, n, i) {
  switch (n) {
    case "String":
    case "Number":
    case "Boolean":
    case "Date":
      return xr(e.valueOf(), t.valueOf());
    case "Promise":
    case "Symbol":
    case "function":
    case "WeakMap":
    case "WeakSet":
      return e === t;
    case "Error":
      return wu(e, t, ["name", "message", "code"], i);
    case "Arguments":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "Array":
      return ni(e, t, i);
    case "RegExp":
      return Qm(e, t);
    case "Generator":
      return Zm(e, t, i);
    case "DataView":
      return ni(new Uint8Array(e.buffer), new Uint8Array(t.buffer), i);
    case "ArrayBuffer":
      return ni(new Uint8Array(e), new Uint8Array(t), i);
    case "Set":
      return Vl(e, t, i);
    case "Map":
      return Vl(e, t, i);
    case "Temporal.PlainDate":
    case "Temporal.PlainTime":
    case "Temporal.PlainDateTime":
    case "Temporal.Instant":
    case "Temporal.ZonedDateTime":
    case "Temporal.PlainYearMonth":
    case "Temporal.PlainMonthDay":
      return e.equals(t);
    case "Temporal.Duration":
      return e.total("nanoseconds") === t.total("nanoseconds");
    case "Temporal.TimeZone":
    case "Temporal.Calendar":
      return e.toString() === t.toString();
    default:
      return ty(e, t, i);
  }
}
M(Jm, "extensiveDeepEqualByType");
function Qm(e, t) {
  return e.toString() === t.toString();
}
M(Qm, "regexpEqual");
function Vl(e, t, n) {
  try {
    if (e.size !== t.size)
      return !1;
    if (e.size === 0)
      return !0;
  } catch {
    return !1;
  }
  var i = [], s = [];
  return e.forEach(/* @__PURE__ */ M(function(o, a) {
    i.push([o, a]);
  }, "gatherEntries")), t.forEach(/* @__PURE__ */ M(function(o, a) {
    s.push([o, a]);
  }, "gatherEntries")), ni(i.sort(), s.sort(), n);
}
M(Vl, "entriesEqual");
function ni(e, t, n) {
  var i = e.length;
  if (i !== t.length)
    return !1;
  if (i === 0)
    return !0;
  for (var s = -1; ++s < i; )
    if (xr(e[s], t[s], n) === !1)
      return !1;
  return !0;
}
M(ni, "iterableEqual");
function Zm(e, t, n) {
  return ni(Lo(e), Lo(t), n);
}
M(Zm, "generatorEqual");
function ey(e) {
  return typeof Symbol < "u" && typeof e == "object" && typeof Symbol.iterator < "u" && typeof e[Symbol.iterator] == "function";
}
M(ey, "hasIteratorFunction");
function Gl(e) {
  if (ey(e))
    try {
      return Lo(e[Symbol.iterator]());
    } catch {
      return [];
    }
  return [];
}
M(Gl, "getIteratorEntries");
function Lo(e) {
  for (var t = e.next(), n = [t.value]; t.done === !1; )
    t = e.next(), n.push(t.value);
  return n;
}
M(Lo, "getGeneratorEntries");
function Hl(e) {
  var t = [];
  for (var n in e)
    t.push(n);
  return t;
}
M(Hl, "getEnumerableKeys");
function Kl(e) {
  for (var t = [], n = Object.getOwnPropertySymbols(e), i = 0; i < n.length; i += 1) {
    var s = n[i];
    Object.getOwnPropertyDescriptor(e, s).enumerable && t.push(s);
  }
  return t;
}
M(Kl, "getEnumerableSymbols");
function wu(e, t, n, i) {
  var s = n.length;
  if (s === 0)
    return !0;
  for (var r = 0; r < s; r += 1)
    if (xr(e[n[r]], t[n[r]], i) === !1)
      return !1;
  return !0;
}
M(wu, "keysEqual");
function ty(e, t, n) {
  var i = Hl(e), s = Hl(t), r = Kl(e), o = Kl(t);
  if (i = i.concat(r), s = s.concat(o), i.length && i.length === s.length)
    return ni(Yl(i).sort(), Yl(s).sort()) === !1 ? !1 : wu(e, t, i, n);
  var a = Gl(e), l = Gl(t);
  return a.length && a.length === l.length ? (a.sort(), l.sort(), ni(a, l, n)) : i.length === 0 && a.length === 0 && s.length === 0 && l.length === 0;
}
M(ty, "objectEqual");
function Di(e) {
  return e === null || typeof e != "object";
}
M(Di, "isPrimitive");
function Yl(e) {
  return e.map(/* @__PURE__ */ M(function(n) {
    return typeof n == "symbol" ? n.toString() : n;
  }, "mapSymbol"));
}
M(Yl, "mapSymbols");
function ha(e, t) {
  return typeof e > "u" || e === null ? !1 : t in Object(e);
}
M(ha, "hasProperty");
function ny(e) {
  return e.replace(/([^\\])\[/g, "$1.[").match(/(\\\.|[^.]+?)+/g).map((i) => {
    if (i === "constructor" || i === "__proto__" || i === "prototype")
      return {};
    const r = /^\[(\d+)\]$/.exec(i);
    let o = null;
    return r ? o = { i: parseFloat(r[1]) } : o = { p: i.replace(/\\([.[\]])/g, "$1") }, o;
  });
}
M(ny, "parsePath");
function Xl(e, t, n) {
  let i = e, s = null;
  n = typeof n > "u" ? t.length : n;
  for (let r = 0; r < n; r++) {
    const o = t[r];
    i && (typeof o.p > "u" ? i = i[o.i] : i = i[o.p], r === n - 1 && (s = i));
  }
  return s;
}
M(Xl, "internalGetPathValue");
function vu(e, t) {
  const n = ny(t), i = n[n.length - 1], s = {
    parent: n.length > 1 ? Xl(e, n, n.length - 1) : e,
    name: i.p || i.i,
    value: Xl(e, n)
  };
  return s.exists = ha(s.parent, s.name), s;
}
M(vu, "getPathInfo");
function S(e, t, n, i) {
  return he(this, "ssfi", n || S), he(this, "lockSsfi", i), he(this, "object", e), he(this, "message", t), he(this, "eql", bt.deepEqual || Xm), Ts(this);
}
M(S, "Assertion");
Object.defineProperty(S, "includeStack", {
  get: function() {
    return console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."), bt.includeStack;
  },
  set: function(e) {
    console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."), bt.includeStack = e;
  }
});
Object.defineProperty(S, "showDiff", {
  get: function() {
    return console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."), bt.showDiff;
  },
  set: function(e) {
    console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."), bt.showDiff = e;
  }
});
S.addProperty = function(e, t) {
  _u(this.prototype, e, t);
};
S.addMethod = function(e, t) {
  xu(this.prototype, e, t);
};
S.addChainableMethod = function(e, t, n) {
  Eu(this.prototype, e, t, n);
};
S.overwriteProperty = function(e, t) {
  Su(this.prototype, e, t);
};
S.overwriteMethod = function(e, t) {
  ku(this.prototype, e, t);
};
S.overwriteChainableMethod = function(e, t, n) {
  Cu(this.prototype, e, t, n);
};
S.prototype.assert = function(e, t, n, i, s, r) {
  var o = pu(this, arguments);
  if (r !== !1 && (r = !0), i === void 0 && s === void 0 && (r = !1), bt.showDiff !== !0 && (r = !1), !o) {
    t = mu(this, arguments);
    var a = fa(this, arguments), l = {
      actual: a,
      expected: i,
      showDiff: r
    }, u = Ou(this, arguments);
    throw u && (l.operator = u), new xe(
      t,
      l,
      bt.includeStack ? this.assert : he(this, "ssfi")
    );
  }
};
Object.defineProperty(
  S.prototype,
  "_obj",
  {
    get: function() {
      return he(this, "object");
    },
    set: function(e) {
      he(this, "object", e);
    }
  }
);
function Sr() {
  return bt.useProxy && typeof Proxy < "u" && typeof Reflect < "u";
}
M(Sr, "isProxyEnabled");
function _u(e, t, n) {
  n = n === void 0 ? function() {
  } : n, Object.defineProperty(
    e,
    t,
    {
      get: /* @__PURE__ */ M(function i() {
        !Sr() && !he(this, "lockSsfi") && he(this, "ssfi", i);
        var s = n.call(this);
        if (s !== void 0)
          return s;
        var r = new S();
        return tn(this, r), r;
      }, "propertyGetter"),
      configurable: !0
    }
  );
}
M(_u, "addProperty");
var wC = Object.getOwnPropertyDescriptor(function() {
}, "length");
function kr(e, t, n) {
  return wC.configurable && Object.defineProperty(e, "length", {
    get: function() {
      throw Error(n ? "Invalid Chai property: " + t + '.length. Due to a compatibility issue, "length" cannot directly follow "' + t + '". Use "' + t + '.lengthOf" instead.' : "Invalid Chai property: " + t + '.length. See docs for proper usage of "' + t + '".');
    }
  }), e;
}
M(kr, "addLengthGuard");
function iy(e) {
  var t = Object.getOwnPropertyNames(e);
  function n(s) {
    t.indexOf(s) === -1 && t.push(s);
  }
  M(n, "addProperty");
  for (var i = Object.getPrototypeOf(e); i !== null; )
    Object.getOwnPropertyNames(i).forEach(n), i = Object.getPrototypeOf(i);
  return t;
}
M(iy, "getProperties");
var ld = ["__flags", "__methods", "_obj", "assert"];
function Ts(e, t) {
  return Sr() ? new Proxy(e, {
    get: /* @__PURE__ */ M(function n(i, s) {
      if (typeof s == "string" && bt.proxyExcludedKeys.indexOf(s) === -1 && !Reflect.has(i, s)) {
        if (t)
          throw Error("Invalid Chai property: " + t + "." + s + '. See docs for proper usage of "' + t + '".');
        var r = null, o = 4;
        throw iy(i).forEach(function(a) {
          if (!Object.prototype.hasOwnProperty(a) && ld.indexOf(a) === -1) {
            var l = sy(
              s,
              a,
              o
            );
            l < o && (r = a, o = l);
          }
        }), Error(r !== null ? "Invalid Chai property: " + s + '. Did you mean "' + r + '"?' : "Invalid Chai property: " + s);
      }
      return ld.indexOf(s) === -1 && !he(i, "lockSsfi") && he(i, "ssfi", n), Reflect.get(i, s);
    }, "proxyGetter")
  }) : e;
}
M(Ts, "proxify");
function sy(e, t, n) {
  if (Math.abs(e.length - t.length) >= n)
    return n;
  for (var i = [], s = 0; s <= e.length; s++)
    i[s] = Array(t.length + 1).fill(0), i[s][0] = s;
  for (var r = 0; r < t.length; r++)
    i[0][r] = r;
  for (var s = 1; s <= e.length; s++)
    for (var o = e.charCodeAt(s - 1), r = 1; r <= t.length; r++) {
      if (Math.abs(s - r) >= n) {
        i[s][r] = n;
        continue;
      }
      i[s][r] = Math.min(
        i[s - 1][r] + 1,
        i[s][r - 1] + 1,
        i[s - 1][r - 1] + (o === t.charCodeAt(r - 1) ? 0 : 1)
      );
    }
  return i[e.length][t.length];
}
M(sy, "stringDistanceCapped");
function xu(e, t, n) {
  var i = /* @__PURE__ */ M(function() {
    he(this, "lockSsfi") || he(this, "ssfi", i);
    var s = n.apply(this, arguments);
    if (s !== void 0)
      return s;
    var r = new S();
    return tn(this, r), r;
  }, "methodWrapper");
  kr(i, t, !1), e[t] = Ts(i, t);
}
M(xu, "addMethod");
function Su(e, t, n) {
  var i = Object.getOwnPropertyDescriptor(e, t), s = /* @__PURE__ */ M(function() {
  }, "_super");
  i && typeof i.get == "function" && (s = i.get), Object.defineProperty(
    e,
    t,
    {
      get: /* @__PURE__ */ M(function r() {
        !Sr() && !he(this, "lockSsfi") && he(this, "ssfi", r);
        var o = he(this, "lockSsfi");
        he(this, "lockSsfi", !0);
        var a = n(s).call(this);
        if (he(this, "lockSsfi", o), a !== void 0)
          return a;
        var l = new S();
        return tn(this, l), l;
      }, "overwritingPropertyGetter"),
      configurable: !0
    }
  );
}
M(Su, "overwriteProperty");
function ku(e, t, n) {
  var i = e[t], s = /* @__PURE__ */ M(function() {
    throw new Error(t + " is not a function");
  }, "_super");
  i && typeof i == "function" && (s = i);
  var r = /* @__PURE__ */ M(function() {
    he(this, "lockSsfi") || he(this, "ssfi", r);
    var o = he(this, "lockSsfi");
    he(this, "lockSsfi", !0);
    var a = n(s).apply(this, arguments);
    if (he(this, "lockSsfi", o), a !== void 0)
      return a;
    var l = new S();
    return tn(this, l), l;
  }, "overwritingMethodWrapper");
  kr(r, t, !1), e[t] = Ts(r, t);
}
M(ku, "overwriteMethod");
var vC = typeof Object.setPrototypeOf == "function", cd = /* @__PURE__ */ M(function() {
}, "testFn"), _C = Object.getOwnPropertyNames(cd).filter(function(e) {
  var t = Object.getOwnPropertyDescriptor(cd, e);
  return typeof t != "object" ? !0 : !t.configurable;
}), xC = Function.prototype.call, SC = Function.prototype.apply;
function Eu(e, t, n, i) {
  typeof i != "function" && (i = /* @__PURE__ */ M(function() {
  }, "chainingBehavior"));
  var s = {
    method: n,
    chainingBehavior: i
  };
  e.__methods || (e.__methods = {}), e.__methods[t] = s, Object.defineProperty(
    e,
    t,
    {
      get: /* @__PURE__ */ M(function() {
        s.chainingBehavior.call(this);
        var o = /* @__PURE__ */ M(function() {
          he(this, "lockSsfi") || he(this, "ssfi", o);
          var u = s.method.apply(this, arguments);
          if (u !== void 0)
            return u;
          var c = new S();
          return tn(this, c), c;
        }, "chainableMethodWrapper");
        if (kr(o, t, !0), vC) {
          var a = Object.create(this);
          a.call = xC, a.apply = SC, Object.setPrototypeOf(o, a);
        } else {
          var l = Object.getOwnPropertyNames(e);
          l.forEach(function(u) {
            if (_C.indexOf(u) === -1) {
              var c = Object.getOwnPropertyDescriptor(e, u);
              Object.defineProperty(o, u, c);
            }
          });
        }
        return tn(this, o), Ts(o);
      }, "chainableMethodGetter"),
      configurable: !0
    }
  );
}
M(Eu, "addChainableMethod");
function Cu(e, t, n, i) {
  var s = e.__methods[t], r = s.chainingBehavior;
  s.chainingBehavior = /* @__PURE__ */ M(function() {
    var l = i(r).call(this);
    if (l !== void 0)
      return l;
    var u = new S();
    return tn(this, u), u;
  }, "overwritingChainableMethodGetter");
  var o = s.method;
  s.method = /* @__PURE__ */ M(function() {
    var l = n(o).apply(this, arguments);
    if (l !== void 0)
      return l;
    var u = new S();
    return tn(this, u), u;
  }, "overwritingChainableMethodWrapper");
}
M(Cu, "overwriteChainableMethod");
function Do(e, t) {
  return we(e) < we(t) ? -1 : 1;
}
M(Do, "compareByInspect");
function Tu(e) {
  return typeof Object.getOwnPropertySymbols != "function" ? [] : Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.getOwnPropertyDescriptor(e, t).enumerable;
  });
}
M(Tu, "getOwnEnumerablePropertySymbols");
function Au(e) {
  return Object.keys(e).concat(Tu(e));
}
M(Au, "getOwnEnumerableProperties");
function ry(e) {
  return e !== e;
}
M(ry, "_isNaN");
var Ro = Number.isNaN || ry;
function oy(e) {
  var t = Te(e), n = ["Array", "Object", "Function"];
  return n.indexOf(t) !== -1;
}
M(oy, "isObjectType");
function Ou(e, t) {
  var n = he(e, "operator"), i = he(e, "negate"), s = t[3], r = i ? t[2] : t[1];
  if (n)
    return n;
  if (typeof r == "function" && (r = r()), r = r || "", !!r && !/\shave\s/.test(r)) {
    var o = oy(s);
    return /\snot\s/.test(r) ? o ? "notDeepStrictEqual" : "notStrictEqual" : o ? "deepStrictEqual" : "strictEqual";
  }
}
M(Ou, "getOperator");
function da(e) {
  return e.name;
}
M(da, "getName");
function Fo(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
M(Fo, "isRegExp");
function tt(e) {
  return ["Number", "BigInt"].includes(Te(e));
}
M(tt, "isNumeric");
var { flag: P } = No;
[
  "to",
  "be",
  "been",
  "is",
  "and",
  "has",
  "have",
  "with",
  "that",
  "which",
  "at",
  "of",
  "same",
  "but",
  "does",
  "still",
  "also"
].forEach(function(e) {
  S.addProperty(e);
});
S.addProperty("not", function() {
  P(this, "negate", !0);
});
S.addProperty("deep", function() {
  P(this, "deep", !0);
});
S.addProperty("nested", function() {
  P(this, "nested", !0);
});
S.addProperty("own", function() {
  P(this, "own", !0);
});
S.addProperty("ordered", function() {
  P(this, "ordered", !0);
});
S.addProperty("any", function() {
  P(this, "any", !0), P(this, "all", !1);
});
S.addProperty("all", function() {
  P(this, "all", !0), P(this, "any", !1);
});
var ud = {
  function: ["function", "asyncfunction", "generatorfunction", "asyncgeneratorfunction"],
  asyncfunction: ["asyncfunction", "asyncgeneratorfunction"],
  generatorfunction: ["generatorfunction", "asyncgeneratorfunction"],
  asyncgeneratorfunction: ["asyncgeneratorfunction"]
};
function Pu(e, t) {
  t && P(this, "message", t), e = e.toLowerCase();
  var n = P(this, "object"), i = ~["a", "e", "i", "o", "u"].indexOf(e.charAt(0)) ? "an " : "a ";
  const s = Te(n).toLowerCase();
  ud.function.includes(e) ? this.assert(
    ud[e].includes(s),
    "expected #{this} to be " + i + e,
    "expected #{this} not to be " + i + e
  ) : this.assert(
    e === s,
    "expected #{this} to be " + i + e,
    "expected #{this} not to be " + i + e
  );
}
M(Pu, "an");
S.addChainableMethod("an", Pu);
S.addChainableMethod("a", Pu);
function ay(e, t) {
  return Ro(e) && Ro(t) || e === t;
}
M(ay, "SameValueZero");
function Er() {
  P(this, "contains", !0);
}
M(Er, "includeChainingBehavior");
function Cr(e, t) {
  t && P(this, "message", t);
  var n = P(this, "object"), i = Te(n).toLowerCase(), s = P(this, "message"), r = P(this, "negate"), o = P(this, "ssfi"), a = P(this, "deep"), l = a ? "deep " : "", u = a ? P(this, "eql") : ay;
  s = s ? s + ": " : "";
  var c = !1;
  switch (i) {
    case "string":
      c = n.indexOf(e) !== -1;
      break;
    case "weakset":
      if (a)
        throw new xe(
          s + "unable to use .deep.include with WeakSet",
          void 0,
          o
        );
      c = n.has(e);
      break;
    case "map":
      n.forEach(function(p) {
        c = c || u(p, e);
      });
      break;
    case "set":
      a ? n.forEach(function(p) {
        c = c || u(p, e);
      }) : c = n.has(e);
      break;
    case "array":
      a ? c = n.some(function(p) {
        return u(p, e);
      }) : c = n.indexOf(e) !== -1;
      break;
    default:
      if (e !== Object(e))
        throw new xe(
          s + "the given combination of arguments (" + i + " and " + Te(e).toLowerCase() + ") is invalid for this assertion. You can use an array, a map, an object, a set, a string, or a weakset instead of a " + Te(e).toLowerCase(),
          void 0,
          o
        );
      var f = Object.keys(e), h = null, d = 0;
      if (f.forEach(function(p) {
        var w = new S(n);
        if (tn(this, w, !0), P(w, "lockSsfi", !0), !r || f.length === 1) {
          w.property(p, e[p]);
          return;
        }
        try {
          w.property(p, e[p]);
        } catch (E) {
          if (!It.compatibleConstructor(E, xe))
            throw E;
          h === null && (h = E), d++;
        }
      }, this), r && f.length > 1 && d === f.length)
        throw h;
      return;
  }
  this.assert(
    c,
    "expected #{this} to " + l + "include " + we(e),
    "expected #{this} to not " + l + "include " + we(e)
  );
}
M(Cr, "include");
S.addChainableMethod("include", Cr, Er);
S.addChainableMethod("contain", Cr, Er);
S.addChainableMethod("contains", Cr, Er);
S.addChainableMethod("includes", Cr, Er);
S.addProperty("ok", function() {
  this.assert(
    P(this, "object"),
    "expected #{this} to be truthy",
    "expected #{this} to be falsy"
  );
});
S.addProperty("true", function() {
  this.assert(
    P(this, "object") === !0,
    "expected #{this} to be true",
    "expected #{this} to be false",
    !P(this, "negate")
  );
});
S.addProperty("numeric", function() {
  const e = P(this, "object");
  this.assert(
    ["Number", "BigInt"].includes(Te(e)),
    "expected #{this} to be numeric",
    "expected #{this} to not be numeric",
    !P(this, "negate")
  );
});
S.addProperty("callable", function() {
  const e = P(this, "object"), t = P(this, "ssfi"), n = P(this, "message"), i = n ? `${n}: ` : "", s = P(this, "negate"), r = s ? `${i}expected ${we(e)} not to be a callable function` : `${i}expected ${we(e)} to be a callable function`, o = ["Function", "AsyncFunction", "GeneratorFunction", "AsyncGeneratorFunction"].includes(Te(e));
  if (o && s || !o && !s)
    throw new xe(
      r,
      void 0,
      t
    );
});
S.addProperty("false", function() {
  this.assert(
    P(this, "object") === !1,
    "expected #{this} to be false",
    "expected #{this} to be true",
    !!P(this, "negate")
  );
});
S.addProperty("null", function() {
  this.assert(
    P(this, "object") === null,
    "expected #{this} to be null",
    "expected #{this} not to be null"
  );
});
S.addProperty("undefined", function() {
  this.assert(
    P(this, "object") === void 0,
    "expected #{this} to be undefined",
    "expected #{this} not to be undefined"
  );
});
S.addProperty("NaN", function() {
  this.assert(
    Ro(P(this, "object")),
    "expected #{this} to be NaN",
    "expected #{this} not to be NaN"
  );
});
function Nu() {
  var e = P(this, "object");
  this.assert(
    e != null,
    "expected #{this} to exist",
    "expected #{this} to not exist"
  );
}
M(Nu, "assertExist");
S.addProperty("exist", Nu);
S.addProperty("exists", Nu);
S.addProperty("empty", function() {
  var e = P(this, "object"), t = P(this, "ssfi"), n = P(this, "message"), i;
  switch (n = n ? n + ": " : "", Te(e).toLowerCase()) {
    case "array":
    case "string":
      i = e.length;
      break;
    case "map":
    case "set":
      i = e.size;
      break;
    case "weakmap":
    case "weakset":
      throw new xe(
        n + ".empty was passed a weak collection",
        void 0,
        t
      );
    case "function":
      var s = n + ".empty was passed a function " + da(e);
      throw new xe(s.trim(), void 0, t);
    default:
      if (e !== Object(e))
        throw new xe(
          n + ".empty was passed non-string primitive " + we(e),
          void 0,
          t
        );
      i = Object.keys(e).length;
  }
  this.assert(
    i === 0,
    "expected #{this} to be empty",
    "expected #{this} not to be empty"
  );
});
function Iu() {
  var e = P(this, "object"), t = Te(e);
  this.assert(
    t === "Arguments",
    "expected #{this} to be arguments but got " + t,
    "expected #{this} to not be arguments"
  );
}
M(Iu, "checkArguments");
S.addProperty("arguments", Iu);
S.addProperty("Arguments", Iu);
function pa(e, t) {
  t && P(this, "message", t);
  var n = P(this, "object");
  if (P(this, "deep")) {
    var i = P(this, "lockSsfi");
    P(this, "lockSsfi", !0), this.eql(e), P(this, "lockSsfi", i);
  } else
    this.assert(
      e === n,
      "expected #{this} to equal #{exp}",
      "expected #{this} to not equal #{exp}",
      e,
      this._obj,
      !0
    );
}
M(pa, "assertEqual");
S.addMethod("equal", pa);
S.addMethod("equals", pa);
S.addMethod("eq", pa);
function Mu(e, t) {
  t && P(this, "message", t);
  var n = P(this, "eql");
  this.assert(
    n(e, P(this, "object")),
    "expected #{this} to deeply equal #{exp}",
    "expected #{this} to not deeply equal #{exp}",
    e,
    this._obj,
    !0
  );
}
M(Mu, "assertEql");
S.addMethod("eql", Mu);
S.addMethod("eqls", Mu);
function ga(e, t) {
  t && P(this, "message", t);
  var n = P(this, "object"), i = P(this, "doLength"), s = P(this, "message"), r = s ? s + ": " : "", o = P(this, "ssfi"), a = Te(n).toLowerCase(), l = Te(e).toLowerCase();
  if (i && a !== "map" && a !== "set" && new S(n, s, o, !0).to.have.property("length"), !i && a === "date" && l !== "date")
    throw new xe(r + "the argument to above must be a date", void 0, o);
  if (!tt(e) && (i || tt(n)))
    throw new xe(r + "the argument to above must be a number", void 0, o);
  if (!i && a !== "date" && !tt(n)) {
    var u = a === "string" ? "'" + n + "'" : n;
    throw new xe(r + "expected " + u + " to be a number or a date", void 0, o);
  }
  if (i) {
    var c = "length", f;
    a === "map" || a === "set" ? (c = "size", f = n.size) : f = n.length, this.assert(
      f > e,
      "expected #{this} to have a " + c + " above #{exp} but got #{act}",
      "expected #{this} to not have a " + c + " above #{exp}",
      e,
      f
    );
  } else
    this.assert(
      n > e,
      "expected #{this} to be above #{exp}",
      "expected #{this} to be at most #{exp}",
      e
    );
}
M(ga, "assertAbove");
S.addMethod("above", ga);
S.addMethod("gt", ga);
S.addMethod("greaterThan", ga);
function ma(e, t) {
  t && P(this, "message", t);
  var n = P(this, "object"), i = P(this, "doLength"), s = P(this, "message"), r = s ? s + ": " : "", o = P(this, "ssfi"), a = Te(n).toLowerCase(), l = Te(e).toLowerCase(), u, c = !0;
  if (i && a !== "map" && a !== "set" && new S(n, s, o, !0).to.have.property("length"), !i && a === "date" && l !== "date")
    u = r + "the argument to least must be a date";
  else if (!tt(e) && (i || tt(n)))
    u = r + "the argument to least must be a number";
  else if (!i && a !== "date" && !tt(n)) {
    var f = a === "string" ? "'" + n + "'" : n;
    u = r + "expected " + f + " to be a number or a date";
  } else
    c = !1;
  if (c)
    throw new xe(u, void 0, o);
  if (i) {
    var h = "length", d;
    a === "map" || a === "set" ? (h = "size", d = n.size) : d = n.length, this.assert(
      d >= e,
      "expected #{this} to have a " + h + " at least #{exp} but got #{act}",
      "expected #{this} to have a " + h + " below #{exp}",
      e,
      d
    );
  } else
    this.assert(
      n >= e,
      "expected #{this} to be at least #{exp}",
      "expected #{this} to be below #{exp}",
      e
    );
}
M(ma, "assertLeast");
S.addMethod("least", ma);
S.addMethod("gte", ma);
S.addMethod("greaterThanOrEqual", ma);
function ya(e, t) {
  t && P(this, "message", t);
  var n = P(this, "object"), i = P(this, "doLength"), s = P(this, "message"), r = s ? s + ": " : "", o = P(this, "ssfi"), a = Te(n).toLowerCase(), l = Te(e).toLowerCase(), u, c = !0;
  if (i && a !== "map" && a !== "set" && new S(n, s, o, !0).to.have.property("length"), !i && a === "date" && l !== "date")
    u = r + "the argument to below must be a date";
  else if (!tt(e) && (i || tt(n)))
    u = r + "the argument to below must be a number";
  else if (!i && a !== "date" && !tt(n)) {
    var f = a === "string" ? "'" + n + "'" : n;
    u = r + "expected " + f + " to be a number or a date";
  } else
    c = !1;
  if (c)
    throw new xe(u, void 0, o);
  if (i) {
    var h = "length", d;
    a === "map" || a === "set" ? (h = "size", d = n.size) : d = n.length, this.assert(
      d < e,
      "expected #{this} to have a " + h + " below #{exp} but got #{act}",
      "expected #{this} to not have a " + h + " below #{exp}",
      e,
      d
    );
  } else
    this.assert(
      n < e,
      "expected #{this} to be below #{exp}",
      "expected #{this} to be at least #{exp}",
      e
    );
}
M(ya, "assertBelow");
S.addMethod("below", ya);
S.addMethod("lt", ya);
S.addMethod("lessThan", ya);
function ba(e, t) {
  t && P(this, "message", t);
  var n = P(this, "object"), i = P(this, "doLength"), s = P(this, "message"), r = s ? s + ": " : "", o = P(this, "ssfi"), a = Te(n).toLowerCase(), l = Te(e).toLowerCase(), u, c = !0;
  if (i && a !== "map" && a !== "set" && new S(n, s, o, !0).to.have.property("length"), !i && a === "date" && l !== "date")
    u = r + "the argument to most must be a date";
  else if (!tt(e) && (i || tt(n)))
    u = r + "the argument to most must be a number";
  else if (!i && a !== "date" && !tt(n)) {
    var f = a === "string" ? "'" + n + "'" : n;
    u = r + "expected " + f + " to be a number or a date";
  } else
    c = !1;
  if (c)
    throw new xe(u, void 0, o);
  if (i) {
    var h = "length", d;
    a === "map" || a === "set" ? (h = "size", d = n.size) : d = n.length, this.assert(
      d <= e,
      "expected #{this} to have a " + h + " at most #{exp} but got #{act}",
      "expected #{this} to have a " + h + " above #{exp}",
      e,
      d
    );
  } else
    this.assert(
      n <= e,
      "expected #{this} to be at most #{exp}",
      "expected #{this} to be above #{exp}",
      e
    );
}
M(ba, "assertMost");
S.addMethod("most", ba);
S.addMethod("lte", ba);
S.addMethod("lessThanOrEqual", ba);
S.addMethod("within", function(e, t, n) {
  n && P(this, "message", n);
  var i = P(this, "object"), s = P(this, "doLength"), r = P(this, "message"), o = r ? r + ": " : "", a = P(this, "ssfi"), l = Te(i).toLowerCase(), u = Te(e).toLowerCase(), c = Te(t).toLowerCase(), f, h = !0, d = u === "date" && c === "date" ? e.toISOString() + ".." + t.toISOString() : e + ".." + t;
  if (s && l !== "map" && l !== "set" && new S(i, r, a, !0).to.have.property("length"), !s && l === "date" && (u !== "date" || c !== "date"))
    f = o + "the arguments to within must be dates";
  else if ((!tt(e) || !tt(t)) && (s || tt(i)))
    f = o + "the arguments to within must be numbers";
  else if (!s && l !== "date" && !tt(i)) {
    var p = l === "string" ? "'" + i + "'" : i;
    f = o + "expected " + p + " to be a number or a date";
  } else
    h = !1;
  if (h)
    throw new xe(f, void 0, a);
  if (s) {
    var w = "length", E;
    l === "map" || l === "set" ? (w = "size", E = i.size) : E = i.length, this.assert(
      E >= e && E <= t,
      "expected #{this} to have a " + w + " within " + d,
      "expected #{this} to not have a " + w + " within " + d
    );
  } else
    this.assert(
      i >= e && i <= t,
      "expected #{this} to be within " + d,
      "expected #{this} to not be within " + d
    );
});
function Lu(e, t) {
  t && P(this, "message", t);
  var n = P(this, "object"), i = P(this, "ssfi"), s = P(this, "message");
  try {
    var r = n instanceof e;
  } catch (a) {
    throw a instanceof TypeError ? (s = s ? s + ": " : "", new xe(
      s + "The instanceof assertion needs a constructor but " + Te(e) + " was given.",
      void 0,
      i
    )) : a;
  }
  var o = da(e);
  o == null && (o = "an unnamed constructor"), this.assert(
    r,
    "expected #{this} to be an instance of " + o,
    "expected #{this} to not be an instance of " + o
  );
}
M(Lu, "assertInstanceOf");
S.addMethod("instanceof", Lu);
S.addMethod("instanceOf", Lu);
function Du(e, t, n) {
  n && P(this, "message", n);
  var i = P(this, "nested"), s = P(this, "own"), r = P(this, "message"), o = P(this, "object"), a = P(this, "ssfi"), l = typeof e;
  if (r = r ? r + ": " : "", i) {
    if (l !== "string")
      throw new xe(
        r + "the argument to property must be a string when using nested syntax",
        void 0,
        a
      );
  } else if (l !== "string" && l !== "number" && l !== "symbol")
    throw new xe(
      r + "the argument to property must be a string, number, or symbol",
      void 0,
      a
    );
  if (i && s)
    throw new xe(
      r + 'The "nested" and "own" flags cannot be combined.',
      void 0,
      a
    );
  if (o == null)
    throw new xe(
      r + "Target cannot be null or undefined.",
      void 0,
      a
    );
  var u = P(this, "deep"), c = P(this, "negate"), f = i ? vu(o, e) : null, h = i ? f.value : o[e], d = u ? P(this, "eql") : (E, v) => E === v, p = "";
  u && (p += "deep "), s && (p += "own "), i && (p += "nested "), p += "property ";
  var w;
  s ? w = Object.prototype.hasOwnProperty.call(o, e) : i ? w = f.exists : w = ha(o, e), (!c || arguments.length === 1) && this.assert(
    w,
    "expected #{this} to have " + p + we(e),
    "expected #{this} to not have " + p + we(e)
  ), arguments.length > 1 && this.assert(
    w && d(t, h),
    "expected #{this} to have " + p + we(e) + " of #{exp}, but got #{act}",
    "expected #{this} to not have " + p + we(e) + " of #{act}",
    t,
    h
  ), P(this, "object", h);
}
M(Du, "assertProperty");
S.addMethod("property", Du);
function Ru(e, t, n) {
  P(this, "own", !0), Du.apply(this, arguments);
}
M(Ru, "assertOwnProperty");
S.addMethod("ownProperty", Ru);
S.addMethod("haveOwnProperty", Ru);
function Fu(e, t, n) {
  typeof t == "string" && (n = t, t = null), n && P(this, "message", n);
  var i = P(this, "object"), s = Object.getOwnPropertyDescriptor(Object(i), e), r = P(this, "eql");
  s && t ? this.assert(
    r(t, s),
    "expected the own property descriptor for " + we(e) + " on #{this} to match " + we(t) + ", got " + we(s),
    "expected the own property descriptor for " + we(e) + " on #{this} to not match " + we(t),
    t,
    s,
    !0
  ) : this.assert(
    s,
    "expected #{this} to have an own property descriptor for " + we(e),
    "expected #{this} to not have an own property descriptor for " + we(e)
  ), P(this, "object", s);
}
M(Fu, "assertOwnPropertyDescriptor");
S.addMethod("ownPropertyDescriptor", Fu);
S.addMethod("haveOwnPropertyDescriptor", Fu);
function $u() {
  P(this, "doLength", !0);
}
M($u, "assertLengthChain");
function Bu(e, t) {
  t && P(this, "message", t);
  var n = P(this, "object"), i = Te(n).toLowerCase(), s = P(this, "message"), r = P(this, "ssfi"), o = "length", a;
  switch (i) {
    case "map":
    case "set":
      o = "size", a = n.size;
      break;
    default:
      new S(n, s, r, !0).to.have.property("length"), a = n.length;
  }
  this.assert(
    a == e,
    "expected #{this} to have a " + o + " of #{exp} but got #{act}",
    "expected #{this} to not have a " + o + " of #{act}",
    e,
    a
  );
}
M(Bu, "assertLength");
S.addChainableMethod("length", Bu, $u);
S.addChainableMethod("lengthOf", Bu, $u);
function ju(e, t) {
  t && P(this, "message", t);
  var n = P(this, "object");
  this.assert(
    e.exec(n),
    "expected #{this} to match " + e,
    "expected #{this} not to match " + e
  );
}
M(ju, "assertMatch");
S.addMethod("match", ju);
S.addMethod("matches", ju);
S.addMethod("string", function(e, t) {
  t && P(this, "message", t);
  var n = P(this, "object"), i = P(this, "message"), s = P(this, "ssfi");
  new S(n, i, s, !0).is.a("string"), this.assert(
    ~n.indexOf(e),
    "expected #{this} to contain " + we(e),
    "expected #{this} to not contain " + we(e)
  );
});
function qu(e) {
  var t = P(this, "object"), n = Te(t), i = Te(e), s = P(this, "ssfi"), r = P(this, "deep"), o, a = "", l, u = !0, c = P(this, "message");
  c = c ? c + ": " : "";
  var f = c + "when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments";
  if (n === "Map" || n === "Set")
    a = r ? "deeply " : "", l = [], t.forEach(function(k, g) {
      l.push(g);
    }), i !== "Array" && (e = Array.prototype.slice.call(arguments));
  else {
    switch (l = Au(t), i) {
      case "Array":
        if (arguments.length > 1)
          throw new xe(f, void 0, s);
        break;
      case "Object":
        if (arguments.length > 1)
          throw new xe(f, void 0, s);
        e = Object.keys(e);
        break;
      default:
        e = Array.prototype.slice.call(arguments);
    }
    e = e.map(function(k) {
      return typeof k == "symbol" ? k : String(k);
    });
  }
  if (!e.length)
    throw new xe(c + "keys required", void 0, s);
  var h = e.length, d = P(this, "any"), p = P(this, "all"), w = e, E = r ? P(this, "eql") : (k, g) => k === g;
  if (!d && !p && (p = !0), d && (u = w.some(function(k) {
    return l.some(function(g) {
      return E(k, g);
    });
  })), p && (u = w.every(function(k) {
    return l.some(function(g) {
      return E(k, g);
    });
  }), P(this, "contains") || (u = u && e.length == l.length)), h > 1) {
    e = e.map(function(k) {
      return we(k);
    });
    var v = e.pop();
    p && (o = e.join(", ") + ", and " + v), d && (o = e.join(", ") + ", or " + v);
  } else
    o = we(e[0]);
  o = (h > 1 ? "keys " : "key ") + o, o = (P(this, "contains") ? "contain " : "have ") + o, this.assert(
    u,
    "expected #{this} to " + a + o,
    "expected #{this} to not " + a + o,
    w.slice(0).sort(Do),
    l.sort(Do),
    !0
  );
}
M(qu, "assertKeys");
S.addMethod("keys", qu);
S.addMethod("key", qu);
function wa(e, t, n) {
  n && P(this, "message", n);
  var i = P(this, "object"), s = P(this, "ssfi"), r = P(this, "message"), o = P(this, "negate") || !1;
  new S(i, r, s, !0).is.a("function"), (Fo(e) || typeof e == "string") && (t = e, e = null);
  let a, l = !1;
  try {
    i();
  } catch (k) {
    l = !0, a = k;
  }
  var u = e === void 0 && t === void 0, c = !!(e && t), f = !1, h = !1;
  if (u || !u && !o) {
    var d = "an error";
    e instanceof Error ? d = "#{exp}" : e && (d = It.getConstructorName(e));
    let k = a;
    if (a instanceof Error)
      k = a.toString();
    else if (typeof a == "string")
      k = a;
    else if (a && (typeof a == "object" || typeof a == "function"))
      try {
        k = It.getConstructorName(a);
      } catch {
      }
    this.assert(
      l,
      "expected #{this} to throw " + d,
      "expected #{this} to not throw an error but #{act} was thrown",
      e && e.toString(),
      k
    );
  }
  if (e && a) {
    if (e instanceof Error) {
      var p = It.compatibleInstance(a, e);
      p === o && (c && o ? f = !0 : this.assert(
        o,
        "expected #{this} to throw #{exp} but #{act} was thrown",
        "expected #{this} to not throw #{exp}" + (a && !o ? " but #{act} was thrown" : ""),
        e.toString(),
        a.toString()
      ));
    }
    var w = It.compatibleConstructor(a, e);
    w === o && (c && o ? f = !0 : this.assert(
      o,
      "expected #{this} to throw #{exp} but #{act} was thrown",
      "expected #{this} to not throw #{exp}" + (a ? " but #{act} was thrown" : ""),
      e instanceof Error ? e.toString() : e && It.getConstructorName(e),
      a instanceof Error ? a.toString() : a && It.getConstructorName(a)
    ));
  }
  if (a && t !== void 0 && t !== null) {
    var E = "including";
    Fo(t) && (E = "matching");
    var v = It.compatibleMessage(a, t);
    v === o && (c && o ? h = !0 : this.assert(
      o,
      "expected #{this} to throw error " + E + " #{exp} but got #{act}",
      "expected #{this} to throw error not " + E + " #{exp}",
      t,
      It.getMessage(a)
    ));
  }
  f && h && this.assert(
    o,
    "expected #{this} to throw #{exp} but #{act} was thrown",
    "expected #{this} to not throw #{exp}" + (a ? " but #{act} was thrown" : ""),
    e instanceof Error ? e.toString() : e && It.getConstructorName(e),
    a instanceof Error ? a.toString() : a && It.getConstructorName(a)
  ), P(this, "object", a);
}
M(wa, "assertThrows");
S.addMethod("throw", wa);
S.addMethod("throws", wa);
S.addMethod("Throw", wa);
function Uu(e, t) {
  t && P(this, "message", t);
  var n = P(this, "object"), i = P(this, "itself"), s = typeof n == "function" && !i ? n.prototype[e] : n[e];
  this.assert(
    typeof s == "function",
    "expected #{this} to respond to " + we(e),
    "expected #{this} to not respond to " + we(e)
  );
}
M(Uu, "respondTo");
S.addMethod("respondTo", Uu);
S.addMethod("respondsTo", Uu);
S.addProperty("itself", function() {
  P(this, "itself", !0);
});
function Wu(e, t) {
  t && P(this, "message", t);
  var n = P(this, "object"), i = e(n);
  this.assert(
    i,
    "expected #{this} to satisfy " + Ci(e),
    "expected #{this} to not satisfy" + Ci(e),
    !P(this, "negate"),
    i
  );
}
M(Wu, "satisfy");
S.addMethod("satisfy", Wu);
S.addMethod("satisfies", Wu);
function zu(e, t, n) {
  n && P(this, "message", n);
  var i = P(this, "object"), s = P(this, "message"), r = P(this, "ssfi");
  new S(i, s, r, !0).is.numeric;
  let o = "A `delta` value is required for `closeTo`";
  if (t == null)
    throw new xe(s ? `${s}: ${o}` : o, void 0, r);
  if (new S(t, s, r, !0).is.numeric, o = "A `expected` value is required for `closeTo`", e == null)
    throw new xe(s ? `${s}: ${o}` : o, void 0, r);
  new S(e, s, r, !0).is.numeric;
  const a = /* @__PURE__ */ M((l) => l < 0n ? -l : l, "abs");
  this.assert(
    a(i - e) <= t,
    "expected #{this} to be close to " + e + " +/- " + t,
    "expected #{this} not to be close to " + e + " +/- " + t
  );
}
M(zu, "closeTo");
S.addMethod("closeTo", zu);
S.addMethod("approximately", zu);
function ly(e, t, n, i, s) {
  let r = Array.from(t), o = Array.from(e);
  if (!i) {
    if (o.length !== r.length)
      return !1;
    r = r.slice();
  }
  return o.every(function(a, l) {
    if (s)
      return n ? n(a, r[l]) : a === r[l];
    if (!n) {
      var u = r.indexOf(a);
      return u === -1 ? !1 : (i || r.splice(u, 1), !0);
    }
    return r.some(function(c, f) {
      return n(a, c) ? (i || r.splice(f, 1), !0) : !1;
    });
  });
}
M(ly, "isSubsetOf");
S.addMethod("members", function(e, t) {
  t && P(this, "message", t);
  var n = P(this, "object"), i = P(this, "message"), s = P(this, "ssfi");
  new S(n, i, s, !0).to.be.iterable, new S(e, i, s, !0).to.be.iterable;
  var r = P(this, "contains"), o = P(this, "ordered"), a, l, u;
  r ? (a = o ? "an ordered superset" : "a superset", l = "expected #{this} to be " + a + " of #{exp}", u = "expected #{this} to not be " + a + " of #{exp}") : (a = o ? "ordered members" : "members", l = "expected #{this} to have the same " + a + " as #{exp}", u = "expected #{this} to not have the same " + a + " as #{exp}");
  var c = P(this, "deep") ? P(this, "eql") : void 0;
  this.assert(
    ly(e, n, c, r, o),
    l,
    u,
    e,
    n,
    !0
  );
});
S.addProperty("iterable", function(e) {
  e && P(this, "message", e);
  var t = P(this, "object");
  this.assert(
    t != null && t[Symbol.iterator],
    "expected #{this} to be an iterable",
    "expected #{this} to not be an iterable",
    t
  );
});
function cy(e, t) {
  t && P(this, "message", t);
  var n = P(this, "object"), i = P(this, "message"), s = P(this, "ssfi"), r = P(this, "contains"), o = P(this, "deep"), a = P(this, "eql");
  new S(e, i, s, !0).to.be.an("array"), r ? this.assert(
    e.some(function(l) {
      return n.indexOf(l) > -1;
    }),
    "expected #{this} to contain one of #{exp}",
    "expected #{this} to not contain one of #{exp}",
    e,
    n
  ) : o ? this.assert(
    e.some(function(l) {
      return a(n, l);
    }),
    "expected #{this} to deeply equal one of #{exp}",
    "expected #{this} to deeply equal one of #{exp}",
    e,
    n
  ) : this.assert(
    e.indexOf(n) > -1,
    "expected #{this} to be one of #{exp}",
    "expected #{this} to not be one of #{exp}",
    e,
    n
  );
}
M(cy, "oneOf");
S.addMethod("oneOf", cy);
function Vu(e, t, n) {
  n && P(this, "message", n);
  var i = P(this, "object"), s = P(this, "message"), r = P(this, "ssfi");
  new S(i, s, r, !0).is.a("function");
  var o;
  t ? (new S(e, s, r, !0).to.have.property(t), o = e[t]) : (new S(e, s, r, !0).is.a("function"), o = e()), i();
  var a = t == null ? e() : e[t], l = t == null ? o : "." + t;
  P(this, "deltaMsgObj", l), P(this, "initialDeltaValue", o), P(this, "finalDeltaValue", a), P(this, "deltaBehavior", "change"), P(this, "realDelta", a !== o), this.assert(
    o !== a,
    "expected " + l + " to change",
    "expected " + l + " to not change"
  );
}
M(Vu, "assertChanges");
S.addMethod("change", Vu);
S.addMethod("changes", Vu);
function Gu(e, t, n) {
  n && P(this, "message", n);
  var i = P(this, "object"), s = P(this, "message"), r = P(this, "ssfi");
  new S(i, s, r, !0).is.a("function");
  var o;
  t ? (new S(e, s, r, !0).to.have.property(t), o = e[t]) : (new S(e, s, r, !0).is.a("function"), o = e()), new S(o, s, r, !0).is.a("number"), i();
  var a = t == null ? e() : e[t], l = t == null ? o : "." + t;
  P(this, "deltaMsgObj", l), P(this, "initialDeltaValue", o), P(this, "finalDeltaValue", a), P(this, "deltaBehavior", "increase"), P(this, "realDelta", a - o), this.assert(
    a - o > 0,
    "expected " + l + " to increase",
    "expected " + l + " to not increase"
  );
}
M(Gu, "assertIncreases");
S.addMethod("increase", Gu);
S.addMethod("increases", Gu);
function Hu(e, t, n) {
  n && P(this, "message", n);
  var i = P(this, "object"), s = P(this, "message"), r = P(this, "ssfi");
  new S(i, s, r, !0).is.a("function");
  var o;
  t ? (new S(e, s, r, !0).to.have.property(t), o = e[t]) : (new S(e, s, r, !0).is.a("function"), o = e()), new S(o, s, r, !0).is.a("number"), i();
  var a = t == null ? e() : e[t], l = t == null ? o : "." + t;
  P(this, "deltaMsgObj", l), P(this, "initialDeltaValue", o), P(this, "finalDeltaValue", a), P(this, "deltaBehavior", "decrease"), P(this, "realDelta", o - a), this.assert(
    a - o < 0,
    "expected " + l + " to decrease",
    "expected " + l + " to not decrease"
  );
}
M(Hu, "assertDecreases");
S.addMethod("decrease", Hu);
S.addMethod("decreases", Hu);
function uy(e, t) {
  t && P(this, "message", t);
  var n = P(this, "deltaMsgObj"), i = P(this, "initialDeltaValue"), s = P(this, "finalDeltaValue"), r = P(this, "deltaBehavior"), o = P(this, "realDelta"), a;
  r === "change" ? a = Math.abs(s - i) === Math.abs(e) : a = o === Math.abs(e), this.assert(
    a,
    "expected " + n + " to " + r + " by " + e,
    "expected " + n + " to not " + r + " by " + e
  );
}
M(uy, "assertDelta");
S.addMethod("by", uy);
S.addProperty("extensible", function() {
  var e = P(this, "object"), t = e === Object(e) && Object.isExtensible(e);
  this.assert(
    t,
    "expected #{this} to be extensible",
    "expected #{this} to not be extensible"
  );
});
S.addProperty("sealed", function() {
  var e = P(this, "object"), t = e === Object(e) ? Object.isSealed(e) : !0;
  this.assert(
    t,
    "expected #{this} to be sealed",
    "expected #{this} to not be sealed"
  );
});
S.addProperty("frozen", function() {
  var e = P(this, "object"), t = e === Object(e) ? Object.isFrozen(e) : !0;
  this.assert(
    t,
    "expected #{this} to be frozen",
    "expected #{this} to not be frozen"
  );
});
S.addProperty("finite", function(e) {
  var t = P(this, "object");
  this.assert(
    typeof t == "number" && isFinite(t),
    "expected #{this} to be a finite number",
    "expected #{this} to not be a finite number"
  );
});
function Ut(e, t) {
  return new S(e, t);
}
M(Ut, "expect");
Ut.fail = function(e, t, n, i) {
  throw arguments.length < 2 && (n = e, e = void 0), n = n || "expect.fail()", new xe(n, {
    actual: e,
    expected: t,
    operator: i
  }, Ut.fail);
};
var fy = {};
du(fy, {
  Should: () => EC,
  should: () => kC
});
function Ku() {
  function e() {
    return this instanceof String || this instanceof Number || this instanceof Boolean || typeof Symbol == "function" && this instanceof Symbol || typeof BigInt == "function" && this instanceof BigInt ? new S(this.valueOf(), null, e) : new S(this, null, e);
  }
  M(e, "shouldGetter");
  function t(i) {
    Object.defineProperty(this, "should", {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    });
  }
  M(t, "shouldSetter"), Object.defineProperty(Object.prototype, "should", {
    set: t,
    get: e,
    configurable: !0
  });
  var n = {};
  return n.fail = function(i, s, r, o) {
    throw arguments.length < 2 && (r = i, i = void 0), r = r || "should.fail()", new xe(r, {
      actual: i,
      expected: s,
      operator: o
    }, n.fail);
  }, n.equal = function(i, s, r) {
    new S(i, r).to.equal(s);
  }, n.Throw = function(i, s, r, o) {
    new S(i, o).to.Throw(s, r);
  }, n.exist = function(i, s) {
    new S(i, s).to.exist;
  }, n.not = {}, n.not.equal = function(i, s, r) {
    new S(i, r).to.not.equal(s);
  }, n.not.Throw = function(i, s, r, o) {
    new S(i, o).to.not.Throw(s, r);
  }, n.not.exist = function(i, s) {
    new S(i, s).to.not.exist;
  }, n.throw = n.Throw, n.not.throw = n.not.Throw, n;
}
M(Ku, "loadShould");
var kC = Ku, EC = Ku;
function x(e, t) {
  var n = new S(null, null, x, !0);
  n.assert(
    e,
    t,
    "[ negation message unavailable ]"
  );
}
M(x, "assert");
x.fail = function(e, t, n, i) {
  throw arguments.length < 2 && (n = e, e = void 0), n = n || "assert.fail()", new xe(n, {
    actual: e,
    expected: t,
    operator: i
  }, x.fail);
};
x.isOk = function(e, t) {
  new S(e, t, x.isOk, !0).is.ok;
};
x.isNotOk = function(e, t) {
  new S(e, t, x.isNotOk, !0).is.not.ok;
};
x.equal = function(e, t, n) {
  var i = new S(e, n, x.equal, !0);
  i.assert(
    t == he(i, "object"),
    "expected #{this} to equal #{exp}",
    "expected #{this} to not equal #{act}",
    t,
    e,
    !0
  );
};
x.notEqual = function(e, t, n) {
  var i = new S(e, n, x.notEqual, !0);
  i.assert(
    t != he(i, "object"),
    "expected #{this} to not equal #{exp}",
    "expected #{this} to equal #{act}",
    t,
    e,
    !0
  );
};
x.strictEqual = function(e, t, n) {
  new S(e, n, x.strictEqual, !0).to.equal(t);
};
x.notStrictEqual = function(e, t, n) {
  new S(e, n, x.notStrictEqual, !0).to.not.equal(t);
};
x.deepEqual = x.deepStrictEqual = function(e, t, n) {
  new S(e, n, x.deepEqual, !0).to.eql(t);
};
x.notDeepEqual = function(e, t, n) {
  new S(e, n, x.notDeepEqual, !0).to.not.eql(t);
};
x.isAbove = function(e, t, n) {
  new S(e, n, x.isAbove, !0).to.be.above(t);
};
x.isAtLeast = function(e, t, n) {
  new S(e, n, x.isAtLeast, !0).to.be.least(t);
};
x.isBelow = function(e, t, n) {
  new S(e, n, x.isBelow, !0).to.be.below(t);
};
x.isAtMost = function(e, t, n) {
  new S(e, n, x.isAtMost, !0).to.be.most(t);
};
x.isTrue = function(e, t) {
  new S(e, t, x.isTrue, !0).is.true;
};
x.isNotTrue = function(e, t) {
  new S(e, t, x.isNotTrue, !0).to.not.equal(!0);
};
x.isFalse = function(e, t) {
  new S(e, t, x.isFalse, !0).is.false;
};
x.isNotFalse = function(e, t) {
  new S(e, t, x.isNotFalse, !0).to.not.equal(!1);
};
x.isNull = function(e, t) {
  new S(e, t, x.isNull, !0).to.equal(null);
};
x.isNotNull = function(e, t) {
  new S(e, t, x.isNotNull, !0).to.not.equal(null);
};
x.isNaN = function(e, t) {
  new S(e, t, x.isNaN, !0).to.be.NaN;
};
x.isNotNaN = function(e, t) {
  new S(e, t, x.isNotNaN, !0).not.to.be.NaN;
};
x.exists = function(e, t) {
  new S(e, t, x.exists, !0).to.exist;
};
x.notExists = function(e, t) {
  new S(e, t, x.notExists, !0).to.not.exist;
};
x.isUndefined = function(e, t) {
  new S(e, t, x.isUndefined, !0).to.equal(void 0);
};
x.isDefined = function(e, t) {
  new S(e, t, x.isDefined, !0).to.not.equal(void 0);
};
x.isCallable = function(e, t) {
  new S(e, t, x.isCallable, !0).is.callable;
};
x.isNotCallable = function(e, t) {
  new S(e, t, x.isNotCallable, !0).is.not.callable;
};
x.isObject = function(e, t) {
  new S(e, t, x.isObject, !0).to.be.a("object");
};
x.isNotObject = function(e, t) {
  new S(e, t, x.isNotObject, !0).to.not.be.a("object");
};
x.isArray = function(e, t) {
  new S(e, t, x.isArray, !0).to.be.an("array");
};
x.isNotArray = function(e, t) {
  new S(e, t, x.isNotArray, !0).to.not.be.an("array");
};
x.isString = function(e, t) {
  new S(e, t, x.isString, !0).to.be.a("string");
};
x.isNotString = function(e, t) {
  new S(e, t, x.isNotString, !0).to.not.be.a("string");
};
x.isNumber = function(e, t) {
  new S(e, t, x.isNumber, !0).to.be.a("number");
};
x.isNotNumber = function(e, t) {
  new S(e, t, x.isNotNumber, !0).to.not.be.a("number");
};
x.isNumeric = function(e, t) {
  new S(e, t, x.isNumeric, !0).is.numeric;
};
x.isNotNumeric = function(e, t) {
  new S(e, t, x.isNotNumeric, !0).is.not.numeric;
};
x.isFinite = function(e, t) {
  new S(e, t, x.isFinite, !0).to.be.finite;
};
x.isBoolean = function(e, t) {
  new S(e, t, x.isBoolean, !0).to.be.a("boolean");
};
x.isNotBoolean = function(e, t) {
  new S(e, t, x.isNotBoolean, !0).to.not.be.a("boolean");
};
x.typeOf = function(e, t, n) {
  new S(e, n, x.typeOf, !0).to.be.a(t);
};
x.notTypeOf = function(e, t, n) {
  new S(e, n, x.notTypeOf, !0).to.not.be.a(t);
};
x.instanceOf = function(e, t, n) {
  new S(e, n, x.instanceOf, !0).to.be.instanceOf(t);
};
x.notInstanceOf = function(e, t, n) {
  new S(e, n, x.notInstanceOf, !0).to.not.be.instanceOf(t);
};
x.include = function(e, t, n) {
  new S(e, n, x.include, !0).include(t);
};
x.notInclude = function(e, t, n) {
  new S(e, n, x.notInclude, !0).not.include(t);
};
x.deepInclude = function(e, t, n) {
  new S(e, n, x.deepInclude, !0).deep.include(t);
};
x.notDeepInclude = function(e, t, n) {
  new S(e, n, x.notDeepInclude, !0).not.deep.include(t);
};
x.nestedInclude = function(e, t, n) {
  new S(e, n, x.nestedInclude, !0).nested.include(t);
};
x.notNestedInclude = function(e, t, n) {
  new S(e, n, x.notNestedInclude, !0).not.nested.include(t);
};
x.deepNestedInclude = function(e, t, n) {
  new S(e, n, x.deepNestedInclude, !0).deep.nested.include(t);
};
x.notDeepNestedInclude = function(e, t, n) {
  new S(e, n, x.notDeepNestedInclude, !0).not.deep.nested.include(t);
};
x.ownInclude = function(e, t, n) {
  new S(e, n, x.ownInclude, !0).own.include(t);
};
x.notOwnInclude = function(e, t, n) {
  new S(e, n, x.notOwnInclude, !0).not.own.include(t);
};
x.deepOwnInclude = function(e, t, n) {
  new S(e, n, x.deepOwnInclude, !0).deep.own.include(t);
};
x.notDeepOwnInclude = function(e, t, n) {
  new S(e, n, x.notDeepOwnInclude, !0).not.deep.own.include(t);
};
x.match = function(e, t, n) {
  new S(e, n, x.match, !0).to.match(t);
};
x.notMatch = function(e, t, n) {
  new S(e, n, x.notMatch, !0).to.not.match(t);
};
x.property = function(e, t, n) {
  new S(e, n, x.property, !0).to.have.property(t);
};
x.notProperty = function(e, t, n) {
  new S(e, n, x.notProperty, !0).to.not.have.property(t);
};
x.propertyVal = function(e, t, n, i) {
  new S(e, i, x.propertyVal, !0).to.have.property(t, n);
};
x.notPropertyVal = function(e, t, n, i) {
  new S(e, i, x.notPropertyVal, !0).to.not.have.property(t, n);
};
x.deepPropertyVal = function(e, t, n, i) {
  new S(e, i, x.deepPropertyVal, !0).to.have.deep.property(t, n);
};
x.notDeepPropertyVal = function(e, t, n, i) {
  new S(e, i, x.notDeepPropertyVal, !0).to.not.have.deep.property(t, n);
};
x.ownProperty = function(e, t, n) {
  new S(e, n, x.ownProperty, !0).to.have.own.property(t);
};
x.notOwnProperty = function(e, t, n) {
  new S(e, n, x.notOwnProperty, !0).to.not.have.own.property(t);
};
x.ownPropertyVal = function(e, t, n, i) {
  new S(e, i, x.ownPropertyVal, !0).to.have.own.property(t, n);
};
x.notOwnPropertyVal = function(e, t, n, i) {
  new S(e, i, x.notOwnPropertyVal, !0).to.not.have.own.property(t, n);
};
x.deepOwnPropertyVal = function(e, t, n, i) {
  new S(e, i, x.deepOwnPropertyVal, !0).to.have.deep.own.property(t, n);
};
x.notDeepOwnPropertyVal = function(e, t, n, i) {
  new S(e, i, x.notDeepOwnPropertyVal, !0).to.not.have.deep.own.property(t, n);
};
x.nestedProperty = function(e, t, n) {
  new S(e, n, x.nestedProperty, !0).to.have.nested.property(t);
};
x.notNestedProperty = function(e, t, n) {
  new S(e, n, x.notNestedProperty, !0).to.not.have.nested.property(t);
};
x.nestedPropertyVal = function(e, t, n, i) {
  new S(e, i, x.nestedPropertyVal, !0).to.have.nested.property(t, n);
};
x.notNestedPropertyVal = function(e, t, n, i) {
  new S(e, i, x.notNestedPropertyVal, !0).to.not.have.nested.property(t, n);
};
x.deepNestedPropertyVal = function(e, t, n, i) {
  new S(e, i, x.deepNestedPropertyVal, !0).to.have.deep.nested.property(t, n);
};
x.notDeepNestedPropertyVal = function(e, t, n, i) {
  new S(e, i, x.notDeepNestedPropertyVal, !0).to.not.have.deep.nested.property(t, n);
};
x.lengthOf = function(e, t, n) {
  new S(e, n, x.lengthOf, !0).to.have.lengthOf(t);
};
x.hasAnyKeys = function(e, t, n) {
  new S(e, n, x.hasAnyKeys, !0).to.have.any.keys(t);
};
x.hasAllKeys = function(e, t, n) {
  new S(e, n, x.hasAllKeys, !0).to.have.all.keys(t);
};
x.containsAllKeys = function(e, t, n) {
  new S(e, n, x.containsAllKeys, !0).to.contain.all.keys(t);
};
x.doesNotHaveAnyKeys = function(e, t, n) {
  new S(e, n, x.doesNotHaveAnyKeys, !0).to.not.have.any.keys(t);
};
x.doesNotHaveAllKeys = function(e, t, n) {
  new S(e, n, x.doesNotHaveAllKeys, !0).to.not.have.all.keys(t);
};
x.hasAnyDeepKeys = function(e, t, n) {
  new S(e, n, x.hasAnyDeepKeys, !0).to.have.any.deep.keys(t);
};
x.hasAllDeepKeys = function(e, t, n) {
  new S(e, n, x.hasAllDeepKeys, !0).to.have.all.deep.keys(t);
};
x.containsAllDeepKeys = function(e, t, n) {
  new S(e, n, x.containsAllDeepKeys, !0).to.contain.all.deep.keys(t);
};
x.doesNotHaveAnyDeepKeys = function(e, t, n) {
  new S(e, n, x.doesNotHaveAnyDeepKeys, !0).to.not.have.any.deep.keys(t);
};
x.doesNotHaveAllDeepKeys = function(e, t, n) {
  new S(e, n, x.doesNotHaveAllDeepKeys, !0).to.not.have.all.deep.keys(t);
};
x.throws = function(e, t, n, i) {
  (typeof t == "string" || t instanceof RegExp) && (n = t, t = null);
  var s = new S(e, i, x.throws, !0).to.throw(t, n);
  return he(s, "object");
};
x.doesNotThrow = function(e, t, n, i) {
  (typeof t == "string" || t instanceof RegExp) && (n = t, t = null), new S(e, i, x.doesNotThrow, !0).to.not.throw(t, n);
};
x.operator = function(e, t, n, i) {
  var s;
  switch (t) {
    case "==":
      s = e == n;
      break;
    case "===":
      s = e === n;
      break;
    case ">":
      s = e > n;
      break;
    case ">=":
      s = e >= n;
      break;
    case "<":
      s = e < n;
      break;
    case "<=":
      s = e <= n;
      break;
    case "!=":
      s = e != n;
      break;
    case "!==":
      s = e !== n;
      break;
    default:
      throw i = i && i + ": ", new xe(
        i + 'Invalid operator "' + t + '"',
        void 0,
        x.operator
      );
  }
  var r = new S(s, i, x.operator, !0);
  r.assert(
    he(r, "object") === !0,
    "expected " + we(e) + " to be " + t + " " + we(n),
    "expected " + we(e) + " to not be " + t + " " + we(n)
  );
};
x.closeTo = function(e, t, n, i) {
  new S(e, i, x.closeTo, !0).to.be.closeTo(t, n);
};
x.approximately = function(e, t, n, i) {
  new S(e, i, x.approximately, !0).to.be.approximately(t, n);
};
x.sameMembers = function(e, t, n) {
  new S(e, n, x.sameMembers, !0).to.have.same.members(t);
};
x.notSameMembers = function(e, t, n) {
  new S(e, n, x.notSameMembers, !0).to.not.have.same.members(t);
};
x.sameDeepMembers = function(e, t, n) {
  new S(e, n, x.sameDeepMembers, !0).to.have.same.deep.members(t);
};
x.notSameDeepMembers = function(e, t, n) {
  new S(e, n, x.notSameDeepMembers, !0).to.not.have.same.deep.members(t);
};
x.sameOrderedMembers = function(e, t, n) {
  new S(e, n, x.sameOrderedMembers, !0).to.have.same.ordered.members(t);
};
x.notSameOrderedMembers = function(e, t, n) {
  new S(e, n, x.notSameOrderedMembers, !0).to.not.have.same.ordered.members(t);
};
x.sameDeepOrderedMembers = function(e, t, n) {
  new S(e, n, x.sameDeepOrderedMembers, !0).to.have.same.deep.ordered.members(t);
};
x.notSameDeepOrderedMembers = function(e, t, n) {
  new S(e, n, x.notSameDeepOrderedMembers, !0).to.not.have.same.deep.ordered.members(t);
};
x.includeMembers = function(e, t, n) {
  new S(e, n, x.includeMembers, !0).to.include.members(t);
};
x.notIncludeMembers = function(e, t, n) {
  new S(e, n, x.notIncludeMembers, !0).to.not.include.members(t);
};
x.includeDeepMembers = function(e, t, n) {
  new S(e, n, x.includeDeepMembers, !0).to.include.deep.members(t);
};
x.notIncludeDeepMembers = function(e, t, n) {
  new S(e, n, x.notIncludeDeepMembers, !0).to.not.include.deep.members(t);
};
x.includeOrderedMembers = function(e, t, n) {
  new S(e, n, x.includeOrderedMembers, !0).to.include.ordered.members(t);
};
x.notIncludeOrderedMembers = function(e, t, n) {
  new S(e, n, x.notIncludeOrderedMembers, !0).to.not.include.ordered.members(t);
};
x.includeDeepOrderedMembers = function(e, t, n) {
  new S(e, n, x.includeDeepOrderedMembers, !0).to.include.deep.ordered.members(t);
};
x.notIncludeDeepOrderedMembers = function(e, t, n) {
  new S(e, n, x.notIncludeDeepOrderedMembers, !0).to.not.include.deep.ordered.members(t);
};
x.oneOf = function(e, t, n) {
  new S(e, n, x.oneOf, !0).to.be.oneOf(t);
};
x.isIterable = function(e, t) {
  if (e == null || !e[Symbol.iterator])
    throw t = t ? `${t} expected ${we(e)} to be an iterable` : `expected ${we(e)} to be an iterable`, new xe(
      t,
      void 0,
      x.isIterable
    );
};
x.changes = function(e, t, n, i) {
  arguments.length === 3 && typeof t == "function" && (i = n, n = null), new S(e, i, x.changes, !0).to.change(t, n);
};
x.changesBy = function(e, t, n, i, s) {
  if (arguments.length === 4 && typeof t == "function") {
    var r = i;
    i = n, s = r;
  } else arguments.length === 3 && (i = n, n = null);
  new S(e, s, x.changesBy, !0).to.change(t, n).by(i);
};
x.doesNotChange = function(e, t, n, i) {
  return arguments.length === 3 && typeof t == "function" && (i = n, n = null), new S(e, i, x.doesNotChange, !0).to.not.change(t, n);
};
x.changesButNotBy = function(e, t, n, i, s) {
  if (arguments.length === 4 && typeof t == "function") {
    var r = i;
    i = n, s = r;
  } else arguments.length === 3 && (i = n, n = null);
  new S(e, s, x.changesButNotBy, !0).to.change(t, n).but.not.by(i);
};
x.increases = function(e, t, n, i) {
  return arguments.length === 3 && typeof t == "function" && (i = n, n = null), new S(e, i, x.increases, !0).to.increase(t, n);
};
x.increasesBy = function(e, t, n, i, s) {
  if (arguments.length === 4 && typeof t == "function") {
    var r = i;
    i = n, s = r;
  } else arguments.length === 3 && (i = n, n = null);
  new S(e, s, x.increasesBy, !0).to.increase(t, n).by(i);
};
x.doesNotIncrease = function(e, t, n, i) {
  return arguments.length === 3 && typeof t == "function" && (i = n, n = null), new S(e, i, x.doesNotIncrease, !0).to.not.increase(t, n);
};
x.increasesButNotBy = function(e, t, n, i, s) {
  if (arguments.length === 4 && typeof t == "function") {
    var r = i;
    i = n, s = r;
  } else arguments.length === 3 && (i = n, n = null);
  new S(e, s, x.increasesButNotBy, !0).to.increase(t, n).but.not.by(i);
};
x.decreases = function(e, t, n, i) {
  return arguments.length === 3 && typeof t == "function" && (i = n, n = null), new S(e, i, x.decreases, !0).to.decrease(t, n);
};
x.decreasesBy = function(e, t, n, i, s) {
  if (arguments.length === 4 && typeof t == "function") {
    var r = i;
    i = n, s = r;
  } else arguments.length === 3 && (i = n, n = null);
  new S(e, s, x.decreasesBy, !0).to.decrease(t, n).by(i);
};
x.doesNotDecrease = function(e, t, n, i) {
  return arguments.length === 3 && typeof t == "function" && (i = n, n = null), new S(e, i, x.doesNotDecrease, !0).to.not.decrease(t, n);
};
x.doesNotDecreaseBy = function(e, t, n, i, s) {
  if (arguments.length === 4 && typeof t == "function") {
    var r = i;
    i = n, s = r;
  } else arguments.length === 3 && (i = n, n = null);
  return new S(e, s, x.doesNotDecreaseBy, !0).to.not.decrease(t, n).by(i);
};
x.decreasesButNotBy = function(e, t, n, i, s) {
  if (arguments.length === 4 && typeof t == "function") {
    var r = i;
    i = n, s = r;
  } else arguments.length === 3 && (i = n, n = null);
  new S(e, s, x.decreasesButNotBy, !0).to.decrease(t, n).but.not.by(i);
};
x.ifError = function(e) {
  if (e)
    throw e;
};
x.isExtensible = function(e, t) {
  new S(e, t, x.isExtensible, !0).to.be.extensible;
};
x.isNotExtensible = function(e, t) {
  new S(e, t, x.isNotExtensible, !0).to.not.be.extensible;
};
x.isSealed = function(e, t) {
  new S(e, t, x.isSealed, !0).to.be.sealed;
};
x.isNotSealed = function(e, t) {
  new S(e, t, x.isNotSealed, !0).to.not.be.sealed;
};
x.isFrozen = function(e, t) {
  new S(e, t, x.isFrozen, !0).to.be.frozen;
};
x.isNotFrozen = function(e, t) {
  new S(e, t, x.isNotFrozen, !0).to.not.be.frozen;
};
x.isEmpty = function(e, t) {
  new S(e, t, x.isEmpty, !0).to.be.empty;
};
x.isNotEmpty = function(e, t) {
  new S(e, t, x.isNotEmpty, !0).to.not.be.empty;
};
(/* @__PURE__ */ M(function e(t, n) {
  return x[n] = x[t], e;
}, "alias"))("isOk", "ok")("isNotOk", "notOk")("throws", "throw")("throws", "Throw")("isExtensible", "extensible")("isNotExtensible", "notExtensible")("isSealed", "sealed")("isNotSealed", "notSealed")("isFrozen", "frozen")("isNotFrozen", "notFrozen")("isEmpty", "empty")("isNotEmpty", "notEmpty")("isCallable", "isFunction")("isNotCallable", "isNotFunction");
var fd = [];
function CC(e) {
  const t = {
    AssertionError: xe,
    util: No,
    config: bt,
    expect: Ut,
    assert: x,
    Assertion: S,
    ...fy
  };
  return ~fd.indexOf(e) || (e(t, No), fd.push(e)), t;
}
M(CC, "use");
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - test utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - expectTypes utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - getActual utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - message composition utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - transferFlags utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - isProxyEnabled helper
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - addProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - addLengthGuard utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - getProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - proxify utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - addMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - overwriteProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - overwriteMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - addChainingMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - overwriteChainableMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - compareByInspect utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - getOwnEnumerablePropertySymbols utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - getOwnEnumerableProperties utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - isNaN utility
 * Copyright(c) 2012-2015 Sakthipriyan Vairamani <thechargingvolcano@gmail.com>
 * MIT Licensed
 */
/*!
 * chai
 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*! Bundled license information:

deep-eql/index.js:
  (*!
   * deep-eql
   * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Check to see if the MemoizeMap has recorded a result of the two operands
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {MemoizeMap} memoizeMap
   * @returns {Boolean|null} result
  *)
  (*!
   * Set the result of the equality into the MemoizeMap
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {MemoizeMap} memoizeMap
   * @param {Boolean} result
  *)
  (*!
   * Primary Export
   *)
  (*!
   * The main logic of the `deepEqual` function.
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {Object} [options] (optional) Additional options
   * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
   * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
      complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
      references to blow the stack.
   * @return {Boolean} equal match
  *)
  (*!
   * Compare two Regular Expressions for equality.
   *
   * @param {RegExp} leftHandOperand
   * @param {RegExp} rightHandOperand
   * @return {Boolean} result
   *)
  (*!
   * Compare two Sets/Maps for equality. Faster than other equality functions.
   *
   * @param {Set} leftHandOperand
   * @param {Set} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
   *
   * @param {Iterable} leftHandOperand
   * @param {Iterable} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Simple equality for generator objects such as those returned by generator functions.
   *
   * @param {Iterable} leftHandOperand
   * @param {Iterable} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Determine if the given object has an @@iterator function.
   *
   * @param {Object} target
   * @return {Boolean} `true` if the object has an @@iterator function.
   *)
  (*!
   * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
   * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
   *
   * @param {Object} target
   * @returns {Array} an array of entries from the @@iterator function
   *)
  (*!
   * Gets all entries from a Generator. This will consume the generator - which could have side effects.
   *
   * @param {Generator} target
   * @returns {Array} an array of entries from the Generator.
   *)
  (*!
   * Gets all own and inherited enumerable keys from a target.
   *
   * @param {Object} target
   * @returns {Array} an array of own and inherited enumerable keys from the target.
   *)
  (*!
   * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
   * each key. If any value of the given key is not equal, the function will return false (early).
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
   * for each enumerable key in the object.
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Returns true if the argument is a primitive.
   *
   * This intentionally returns true for all objects that can be compared by reference,
   * including functions and symbols.
   *
   * @param {Mixed} value
   * @return {Boolean} result
   *)
*/
var AM = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function hy(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Jl = { exports: {} }, Xa, hd;
function TC() {
  if (hd) return Xa;
  hd = 1;
  var e = 1e3, t = e * 60, n = t * 60, i = n * 24, s = i * 7, r = i * 365.25;
  Xa = function(c, f) {
    f = f || {};
    var h = typeof c;
    if (h === "string" && c.length > 0)
      return o(c);
    if (h === "number" && isFinite(c))
      return f.long ? l(c) : a(c);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(c)
    );
  };
  function o(c) {
    if (c = String(c), !(c.length > 100)) {
      var f = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        c
      );
      if (f) {
        var h = parseFloat(f[1]), d = (f[2] || "ms").toLowerCase();
        switch (d) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return h * r;
          case "weeks":
          case "week":
          case "w":
            return h * s;
          case "days":
          case "day":
          case "d":
            return h * i;
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
  function a(c) {
    var f = Math.abs(c);
    return f >= i ? Math.round(c / i) + "d" : f >= n ? Math.round(c / n) + "h" : f >= t ? Math.round(c / t) + "m" : f >= e ? Math.round(c / e) + "s" : c + "ms";
  }
  function l(c) {
    var f = Math.abs(c);
    return f >= i ? u(c, f, i, "day") : f >= n ? u(c, f, n, "hour") : f >= t ? u(c, f, t, "minute") : f >= e ? u(c, f, e, "second") : c + " ms";
  }
  function u(c, f, h, d) {
    var p = f >= h * 1.5;
    return Math.round(c / h) + " " + d + (p ? "s" : "");
  }
  return Xa;
}
function AC(e) {
  n.debug = n, n.default = n, n.coerce = l, n.disable = r, n.enable = s, n.enabled = o, n.humanize = TC(), n.destroy = u, Object.keys(e).forEach((c) => {
    n[c] = e[c];
  }), n.names = [], n.skips = [], n.formatters = {};
  function t(c) {
    let f = 0;
    for (let h = 0; h < c.length; h++)
      f = (f << 5) - f + c.charCodeAt(h), f |= 0;
    return n.colors[Math.abs(f) % n.colors.length];
  }
  n.selectColor = t;
  function n(c) {
    let f, h = null, d, p;
    function w(...E) {
      if (!w.enabled)
        return;
      const v = w, k = Number(/* @__PURE__ */ new Date()), g = k - (f || k);
      v.diff = g, v.prev = f, v.curr = k, f = k, E[0] = n.coerce(E[0]), typeof E[0] != "string" && E.unshift("%O");
      let b = 0;
      E[0] = E[0].replace(/%([a-zA-Z%])/g, (N, L) => {
        if (N === "%%")
          return "%";
        b++;
        const B = n.formatters[L];
        if (typeof B == "function") {
          const j = E[b];
          N = B.call(v, j), E.splice(b, 1), b--;
        }
        return N;
      }), n.formatArgs.call(v, E), (v.log || n.log).apply(v, E);
    }
    return w.namespace = c, w.useColors = n.useColors(), w.color = n.selectColor(c), w.extend = i, w.destroy = n.destroy, Object.defineProperty(w, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => h !== null ? h : (d !== n.namespaces && (d = n.namespaces, p = n.enabled(c)), p),
      set: (E) => {
        h = E;
      }
    }), typeof n.init == "function" && n.init(w), w;
  }
  function i(c, f) {
    const h = n(this.namespace + (typeof f > "u" ? ":" : f) + c);
    return h.log = this.log, h;
  }
  function s(c) {
    n.save(c), n.namespaces = c, n.names = [], n.skips = [];
    let f;
    const h = (typeof c == "string" ? c : "").split(/[\s,]+/), d = h.length;
    for (f = 0; f < d; f++)
      h[f] && (c = h[f].replace(/\*/g, ".*?"), c[0] === "-" ? n.skips.push(new RegExp("^" + c.slice(1) + "$")) : n.names.push(new RegExp("^" + c + "$")));
  }
  function r() {
    const c = [
      ...n.names.map(a),
      ...n.skips.map(a).map((f) => "-" + f)
    ].join(",");
    return n.enable(""), c;
  }
  function o(c) {
    if (c[c.length - 1] === "*")
      return !0;
    let f, h;
    for (f = 0, h = n.skips.length; f < h; f++)
      if (n.skips[f].test(c))
        return !1;
    for (f = 0, h = n.names.length; f < h; f++)
      if (n.names[f].test(c))
        return !0;
    return !1;
  }
  function a(c) {
    return c.toString().substring(2, c.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function l(c) {
    return c instanceof Error ? c.stack || c.message : c;
  }
  function u() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return n.enable(n.load()), n;
}
var OC = AC;
(function(e, t) {
  t.formatArgs = i, t.save = s, t.load = r, t.useColors = n, t.storage = o(), t.destroy = /* @__PURE__ */ (() => {
    let l = !1;
    return () => {
      l || (l = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
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
    let l;
    return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator < "u" && navigator.userAgent && (l = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(l[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function i(l) {
    if (l[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + l[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors)
      return;
    const u = "color: " + this.color;
    l.splice(1, 0, u, "color: inherit");
    let c = 0, f = 0;
    l[0].replace(/%[a-zA-Z%]/g, (h) => {
      h !== "%%" && (c++, h === "%c" && (f = c));
    }), l.splice(f, 0, u);
  }
  t.log = console.debug || console.log || (() => {
  });
  function s(l) {
    try {
      l ? t.storage.setItem("debug", l) : t.storage.removeItem("debug");
    } catch {
    }
  }
  function r() {
    let l;
    try {
      l = t.storage.getItem("debug");
    } catch {
    }
    return !l && typeof process < "u" && "env" in process && (l = void 0), l;
  }
  function o() {
    try {
      return localStorage;
    } catch {
    }
  }
  e.exports = OC(t);
  const { formatters: a } = e.exports;
  a.j = function(l) {
    try {
      return JSON.stringify(l);
    } catch (u) {
      return "[UnexpectedJSONParseError]: " + u.message;
    }
  };
})(Jl, Jl.exports);
var PC = Jl.exports;
const dy = /* @__PURE__ */ hy(PC), NC = {
  cacheResults: !0,
  successMetric: "efficiency",
  calculateCuts: !0,
  stack: !0,
  findDuplicatePatterns: !0,
  //dev specific
  captureProfile: !1,
  runTests: !1,
  throwErrorsOnFailedTests: !1,
  recordPlacementPositions: !1,
  sample: {
    enable: !0,
    groupSize: 6,
    efficiency: 4,
    guillotine: 2
  },
  priority: {
    enable: !0,
    variationThreshold: 0.3
  },
  secondRun: {
    enabled: !1,
    efficiencyCutoff: 0.5,
    stack: !1
  },
  efficiency: {
    tidy: !1,
    //[] issue with picking winner when tidy is enabled
    rayCasting: !0
  },
  groups: {
    shapeAreaCutOff: 0.7,
    tolerance: 0.04,
    guillotine: {
      strips: !0,
      segments: !0,
      runWithout: !1
    },
    efficiency: {
      firstShapes: !0,
      position: !0,
      limit: 100
    }
  },
  guillotine: {
    viableShapeArea: 0.5,
    secondPass: !0,
    strips: {
      rearrange: !0,
      efficiencyThreshold: 0.7
    },
    stripShapes: {
      allocation: !0,
      iterations: 6,
      numPriorityShapes: 1
    }
  },
  subset: {
    shuffles: 80,
    //this is the default - can be overwritten (for example when creating groups)
    guillotine: {
      shuffles: 80
    },
    efficiency: {
      limit: 0.5
    }
  },
  evo: {
    disable: !1,
    stockLimit: 40
  }
};
bt.showDiff = !0;
const dd = dy("tests");
dy("timers");
function py() {
  return typeof process < "u" && (process != null && process.env), !1;
}
function Yu(e, t = null) {
  e != null && e.length && py() && NC.runTests && e.forEach((n) => {
    try {
      n();
    } catch (i) {
      t ? dd(t, i.message) : dd(i.message);
    }
  });
}
var Ql = { exports: {} }, Ja, pd;
function IC() {
  if (pd) return Ja;
  pd = 1;
  var e = 1e3, t = e * 60, n = t * 60, i = n * 24, s = i * 7, r = i * 365.25;
  Ja = function(c, f) {
    f = f || {};
    var h = typeof c;
    if (h === "string" && c.length > 0)
      return o(c);
    if (h === "number" && isFinite(c))
      return f.long ? l(c) : a(c);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(c)
    );
  };
  function o(c) {
    if (c = String(c), !(c.length > 100)) {
      var f = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        c
      );
      if (f) {
        var h = parseFloat(f[1]), d = (f[2] || "ms").toLowerCase();
        switch (d) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return h * r;
          case "weeks":
          case "week":
          case "w":
            return h * s;
          case "days":
          case "day":
          case "d":
            return h * i;
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
  function a(c) {
    var f = Math.abs(c);
    return f >= i ? Math.round(c / i) + "d" : f >= n ? Math.round(c / n) + "h" : f >= t ? Math.round(c / t) + "m" : f >= e ? Math.round(c / e) + "s" : c + "ms";
  }
  function l(c) {
    var f = Math.abs(c);
    return f >= i ? u(c, f, i, "day") : f >= n ? u(c, f, n, "hour") : f >= t ? u(c, f, t, "minute") : f >= e ? u(c, f, e, "second") : c + " ms";
  }
  function u(c, f, h, d) {
    var p = f >= h * 1.5;
    return Math.round(c / h) + " " + d + (p ? "s" : "");
  }
  return Ja;
}
function MC(e) {
  n.debug = n, n.default = n, n.coerce = l, n.disable = r, n.enable = s, n.enabled = o, n.humanize = IC(), n.destroy = u, Object.keys(e).forEach((c) => {
    n[c] = e[c];
  }), n.names = [], n.skips = [], n.formatters = {};
  function t(c) {
    let f = 0;
    for (let h = 0; h < c.length; h++)
      f = (f << 5) - f + c.charCodeAt(h), f |= 0;
    return n.colors[Math.abs(f) % n.colors.length];
  }
  n.selectColor = t;
  function n(c) {
    let f, h = null, d, p;
    function w(...E) {
      if (!w.enabled)
        return;
      const v = w, k = Number(/* @__PURE__ */ new Date()), g = k - (f || k);
      v.diff = g, v.prev = f, v.curr = k, f = k, E[0] = n.coerce(E[0]), typeof E[0] != "string" && E.unshift("%O");
      let b = 0;
      E[0] = E[0].replace(/%([a-zA-Z%])/g, (N, L) => {
        if (N === "%%")
          return "%";
        b++;
        const B = n.formatters[L];
        if (typeof B == "function") {
          const j = E[b];
          N = B.call(v, j), E.splice(b, 1), b--;
        }
        return N;
      }), n.formatArgs.call(v, E), (v.log || n.log).apply(v, E);
    }
    return w.namespace = c, w.useColors = n.useColors(), w.color = n.selectColor(c), w.extend = i, w.destroy = n.destroy, Object.defineProperty(w, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => h !== null ? h : (d !== n.namespaces && (d = n.namespaces, p = n.enabled(c)), p),
      set: (E) => {
        h = E;
      }
    }), typeof n.init == "function" && n.init(w), w;
  }
  function i(c, f) {
    const h = n(this.namespace + (typeof f > "u" ? ":" : f) + c);
    return h.log = this.log, h;
  }
  function s(c) {
    n.save(c), n.namespaces = c, n.names = [], n.skips = [];
    let f;
    const h = (typeof c == "string" ? c : "").split(/[\s,]+/), d = h.length;
    for (f = 0; f < d; f++)
      h[f] && (c = h[f].replace(/\*/g, ".*?"), c[0] === "-" ? n.skips.push(new RegExp("^" + c.slice(1) + "$")) : n.names.push(new RegExp("^" + c + "$")));
  }
  function r() {
    const c = [
      ...n.names.map(a),
      ...n.skips.map(a).map((f) => "-" + f)
    ].join(",");
    return n.enable(""), c;
  }
  function o(c) {
    if (c[c.length - 1] === "*")
      return !0;
    let f, h;
    for (f = 0, h = n.skips.length; f < h; f++)
      if (n.skips[f].test(c))
        return !1;
    for (f = 0, h = n.names.length; f < h; f++)
      if (n.names[f].test(c))
        return !0;
    return !1;
  }
  function a(c) {
    return c.toString().substring(2, c.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function l(c) {
    return c instanceof Error ? c.stack || c.message : c;
  }
  function u() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return n.enable(n.load()), n;
}
var LC = MC;
(function(e, t) {
  t.formatArgs = i, t.save = s, t.load = r, t.useColors = n, t.storage = o(), t.destroy = /* @__PURE__ */ (() => {
    let l = !1;
    return () => {
      l || (l = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
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
    let l;
    return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator < "u" && navigator.userAgent && (l = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(l[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function i(l) {
    if (l[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + l[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors)
      return;
    const u = "color: " + this.color;
    l.splice(1, 0, u, "color: inherit");
    let c = 0, f = 0;
    l[0].replace(/%[a-zA-Z%]/g, (h) => {
      h !== "%%" && (c++, h === "%c" && (f = c));
    }), l.splice(f, 0, u);
  }
  t.log = console.debug || console.log || (() => {
  });
  function s(l) {
    try {
      l ? t.storage.setItem("debug", l) : t.storage.removeItem("debug");
    } catch {
    }
  }
  function r() {
    let l;
    try {
      l = t.storage.getItem("debug");
    } catch {
    }
    return !l && typeof process < "u" && "env" in process && (l = void 0), l;
  }
  function o() {
    try {
      return localStorage;
    } catch {
    }
  }
  e.exports = LC(t);
  const { formatters: a } = e.exports;
  a.j = function(l) {
    try {
      return JSON.stringify(l);
    } catch (u) {
      return "[UnexpectedJSONParseError]: " + u.message;
    }
  };
})(Ql, Ql.exports);
var DC = Ql.exports;
const Ht = /* @__PURE__ */ hy(DC);
Ht.colors = [
  2,
  3,
  4,
  5,
  7,
  9,
  10,
  11,
  14,
  159
];
Ht("logs");
Ht("cuts");
Ht("guillotine");
Ht("results");
Ht("scoring");
Ht("calculations");
Ht("subset");
Ht("secondRun");
Ht("stack");
const RC = Ht("errors");
Ht("allStock");
RC.color = 1;
function FC(e) {
  if (e != null && e.dimension)
    switch (e.dimension) {
      case "l":
        return e.x2 - e.x1;
      case "w":
        return e.y2 - e.y1;
    }
  switch (e.type) {
    case "top":
    case "bottom":
      return e.x2 - e.x1;
    case "left":
    case "right":
      return e.y2 - e.y1;
  }
  return 0;
}
class va extends Xi {
  //used to mark for removal
  constructor(n) {
    var i, s, r, o;
    n.x2 < n.x1 && ([n.x1, n.x2] = [n.x2, n.x1]), n.y2 < n.y1 && ([n.y1, n.y2] = [n.y2, n.y1]);
    super(n);
    m(this, "stock");
    m(this, "stockId");
    m(this, "guillotine");
    m(this, "guillotineData");
    m(this, "isTrim");
    m(this, "distances");
    m(this, "beamTrimX1");
    m(this, "beamTrimY1");
    m(this, "type", null);
    m(this, "remove");
    $(n == null ? void 0 : n.stock) && (((s = (i = n.stock) == null ? void 0 : i.constructor) == null ? void 0 : s.name) === "Stock" ? this.stock = n.stock : this.stock = new Bn(n.stock), this.stockId = this.stock.id), this.stockId = (r = n == null ? void 0 : n.stock) == null ? void 0 : r.id, this.type = n.type ?? null, this.guillotine = n.guillotine, this.guillotineData = $(n.guillotineData) ? n.guillotineData : {}, this.guillotineData.ptxDummyCut = (n == null ? void 0 : n.ptxDummyCut) || ((o = n == null ? void 0 : n.guillotineData) == null ? void 0 : o.ptxDummyCut) || !1, this.isTrim = $(n.isTrim) ? n.isTrim : !1, this.distances = $(n.distances) ? n.distances : {}, this.beamTrimX1 = n.beamTrimX1, this.beamTrimY1 = n.beamTrimY1;
  }
  //compress for saving / transfer
  compress() {
    var n;
    this.stockId = (this == null ? void 0 : this.stockId) ?? ((n = this == null ? void 0 : this.stock) == null ? void 0 : n.id), delete this.shapeCollisions, delete this.stock;
  }
  clone() {
    const n = structuredClone(this);
    return new va(n);
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
    this.dimension === "l" ? (this.x1 = this.x1 < 0 ? 0 : this.x1, this.x2 = this.x2 > this.stock.l ? this.stock.l : this.x2) : this.dimension === "w" && (this.y1 = this.y1 < 0 ? 0 : this.y1, this.y2 = this.y2 > this.stock.w ? this.stock.w : this.y2);
  }
  lookupDirectionByType(n) {
    const s = {
      top: "l",
      bottom: "l",
      left: "w",
      right: "w"
    }[n];
    if (s) return s;
    throw new Error("no direction found in lookupDirectionByType");
  }
  isInsideStock() {
    switch (this.type) {
      case "bottom":
        return ve.greaterThan(
          this.y1 + this.stock.getBladeWidth() / 2,
          0
        );
      case "left":
        return ve.greaterThan(
          this.x1 + this.stock.getBladeWidth() / 2,
          0
        );
      case "top":
        return ve.lessThan(
          this.y1 - this.stock.getBladeWidth() / 2,
          this.stock.w
        );
      case "right":
        return ve.lessThan(
          this.x1 - this.stock.getBladeWidth() / 2,
          this.stock.l
        );
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
    return FC(this);
  }
  getArea() {
    const n = this.getLength();
    return n ? n * this.stock.getBladeWidth() : 0;
  }
}
/**
* @license Fraction.js v4.3.7 31/08/2023
* https://www.xarg.org/2014/03/rational-numbers-in-javascript/
*
* Copyright (c) 2023, Robert Eisele (robert@raw.org)
* Dual licensed under the MIT or GPL Version 2 licenses.
**/
var $C = 2e3, Z = {
  s: 1,
  n: 0,
  d: 1
};
function Pn(e, t) {
  if (isNaN(e = parseInt(e, 10)))
    throw Zr();
  return e * t;
}
function Fe(e, t) {
  if (t === 0)
    throw Xu();
  var n = Object.create(qt.prototype);
  n.s = e < 0 ? -1 : 1, e = e < 0 ? -e : e;
  var i = Qi(e, t);
  return n.n = e / i, n.d = t / i, n;
}
function gd(e) {
  for (var t = {}, n = e, i = 2, s = 4; s <= n; ) {
    for (; n % i === 0; )
      n /= i, t[i] = (t[i] || 0) + 1;
    s += 1 + 2 * i++;
  }
  return n !== e ? n > 1 && (t[n] = (t[n] || 0) + 1) : t[e] = (t[e] || 0) + 1, t;
}
var Pt = function(e, t) {
  var n = 0, i = 1, s = 1, r = 0, o = 0, a = 0, l = 1, u = 1, c = 0, f = 1, h = 1, d = 1, p = 1e7, w;
  if (e != null) if (t !== void 0) {
    if (n = e, i = t, s = n * i, n % 1 !== 0 || i % 1 !== 0)
      throw UC();
  } else
    switch (typeof e) {
      case "object": {
        if ("d" in e && "n" in e)
          n = e.n, i = e.d, "s" in e && (n *= e.s);
        else if (0 in e)
          n = e[0], 1 in e && (i = e[1]);
        else
          throw Zr();
        s = n * i;
        break;
      }
      case "number": {
        if (e < 0 && (s = e, e = -e), e % 1 === 0)
          n = e;
        else if (e > 0) {
          for (e >= 1 && (u = Math.pow(10, Math.floor(1 + Math.log(e) / Math.LN10)), e /= u); f <= p && d <= p; )
            if (w = (c + h) / (f + d), e === w) {
              f + d <= p ? (n = c + h, i = f + d) : d > f ? (n = h, i = d) : (n = c, i = f);
              break;
            } else
              e > w ? (c += h, f += d) : (h += c, d += f), f > p ? (n = h, i = d) : (n = c, i = f);
          n *= u;
        } else (isNaN(e) || isNaN(t)) && (i = n = NaN);
        break;
      }
      case "string": {
        if (f = e.match(/\d+|./g), f === null)
          throw Zr();
        if (f[c] === "-" ? (s = -1, c++) : f[c] === "+" && c++, f.length === c + 1 ? o = Pn(f[c++], s) : f[c + 1] === "." || f[c] === "." ? (f[c] !== "." && (r = Pn(f[c++], s)), c++, (c + 1 === f.length || f[c + 1] === "(" && f[c + 3] === ")" || f[c + 1] === "'" && f[c + 3] === "'") && (o = Pn(f[c], s), l = Math.pow(10, f[c].length), c++), (f[c] === "(" && f[c + 2] === ")" || f[c] === "'" && f[c + 2] === "'") && (a = Pn(f[c + 1], s), u = Math.pow(10, f[c + 1].length) - 1, c += 3)) : f[c + 1] === "/" || f[c + 1] === ":" ? (o = Pn(f[c], s), l = Pn(f[c + 2], 1), c += 3) : f[c + 3] === "/" && f[c + 1] === " " && (r = Pn(f[c], s), o = Pn(f[c + 2], s), l = Pn(f[c + 4], 1), c += 5), f.length <= c) {
          i = l * u, s = /* void */
          n = a + i * r + u * o;
          break;
        }
      }
      default:
        throw Zr();
    }
  if (i === 0)
    throw Xu();
  Z.s = s < 0 ? -1 : 1, Z.n = Math.abs(n), Z.d = Math.abs(i);
};
function BC(e, t, n) {
  for (var i = 1; t > 0; e = e * e % n, t >>= 1)
    t & 1 && (i = i * e % n);
  return i;
}
function jC(e, t) {
  for (; t % 2 === 0; t /= 2)
    ;
  for (; t % 5 === 0; t /= 5)
    ;
  if (t === 1)
    return 0;
  for (var n = 10 % t, i = 1; n !== 1; i++)
    if (n = n * 10 % t, i > $C)
      return 0;
  return i;
}
function qC(e, t, n) {
  for (var i = 1, s = BC(10, n, t), r = 0; r < 300; r++) {
    if (i === s)
      return r;
    i = i * 10 % t, s = s * 10 % t;
  }
  return 0;
}
function Qi(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  for (; ; ) {
    if (e %= t, !e)
      return t;
    if (t %= e, !t)
      return e;
  }
}
function qt(e, t) {
  if (Pt(e, t), this instanceof qt)
    e = Qi(Z.d, Z.n), this.s = Z.s, this.n = Z.n / e, this.d = Z.d / e;
  else
    return Fe(Z.s * Z.n, Z.d);
}
var Xu = function() {
  return new Error("Division by Zero");
}, Zr = function() {
  return new Error("Invalid argument");
}, UC = function() {
  return new Error("Parameters must be integer");
};
qt.prototype = {
  s: 1,
  n: 0,
  d: 1,
  /**
   * Calculates the absolute value
   *
   * Ex: new Fraction(-4).abs() => 4
   **/
  abs: function() {
    return Fe(this.n, this.d);
  },
  /**
   * Inverts the sign of the current fraction
   *
   * Ex: new Fraction(-4).neg() => 4
   **/
  neg: function() {
    return Fe(-this.s * this.n, this.d);
  },
  /**
   * Adds two rational numbers
   *
   * Ex: new Fraction({n: 2, d: 3}).add("14.9") => 467 / 30
   **/
  add: function(e, t) {
    return Pt(e, t), Fe(
      this.s * this.n * Z.d + Z.s * this.d * Z.n,
      this.d * Z.d
    );
  },
  /**
   * Subtracts two rational numbers
   *
   * Ex: new Fraction({n: 2, d: 3}).add("14.9") => -427 / 30
   **/
  sub: function(e, t) {
    return Pt(e, t), Fe(
      this.s * this.n * Z.d - Z.s * this.d * Z.n,
      this.d * Z.d
    );
  },
  /**
   * Multiplies two rational numbers
   *
   * Ex: new Fraction("-17.(345)").mul(3) => 5776 / 111
   **/
  mul: function(e, t) {
    return Pt(e, t), Fe(
      this.s * Z.s * this.n * Z.n,
      this.d * Z.d
    );
  },
  /**
   * Divides two rational numbers
   *
   * Ex: new Fraction("-17.(345)").inverse().div(3)
   **/
  div: function(e, t) {
    return Pt(e, t), Fe(
      this.s * Z.s * this.n * Z.d,
      this.d * Z.n
    );
  },
  /**
   * Clones the actual object
   *
   * Ex: new Fraction("-17.(345)").clone()
   **/
  clone: function() {
    return Fe(this.s * this.n, this.d);
  },
  /**
   * Calculates the modulo of two rational numbers - a more precise fmod
   *
   * Ex: new Fraction('4.(3)').mod([7, 8]) => (13/3) % (7/8) = (5/6)
   **/
  mod: function(e, t) {
    if (isNaN(this.n) || isNaN(this.d))
      return new qt(NaN);
    if (e === void 0)
      return Fe(this.s * this.n % this.d, 1);
    if (Pt(e, t), Z.n === 0 && this.d === 0)
      throw Xu();
    return Fe(
      this.s * (Z.d * this.n) % (Z.n * this.d),
      Z.d * this.d
    );
  },
  /**
   * Calculates the fractional gcd of two rational numbers
   *
   * Ex: new Fraction(5,8).gcd(3,7) => 1/56
   */
  gcd: function(e, t) {
    return Pt(e, t), Fe(Qi(Z.n, this.n) * Qi(Z.d, this.d), Z.d * this.d);
  },
  /**
   * Calculates the fractional lcm of two rational numbers
   *
   * Ex: new Fraction(5,8).lcm(3,7) => 15
   */
  lcm: function(e, t) {
    return Pt(e, t), Z.n === 0 && this.n === 0 ? Fe(0, 1) : Fe(Z.n * this.n, Qi(Z.n, this.n) * Qi(Z.d, this.d));
  },
  /**
   * Calculates the ceil of a rational number
   *
   * Ex: new Fraction('4.(3)').ceil() => (5 / 1)
   **/
  ceil: function(e) {
    return e = Math.pow(10, e || 0), isNaN(this.n) || isNaN(this.d) ? new qt(NaN) : Fe(Math.ceil(e * this.s * this.n / this.d), e);
  },
  /**
   * Calculates the floor of a rational number
   *
   * Ex: new Fraction('4.(3)').floor() => (4 / 1)
   **/
  floor: function(e) {
    return e = Math.pow(10, e || 0), isNaN(this.n) || isNaN(this.d) ? new qt(NaN) : Fe(Math.floor(e * this.s * this.n / this.d), e);
  },
  /**
   * Rounds a rational number
   *
   * Ex: new Fraction('4.(3)').round() => (4 / 1)
   **/
  round: function(e) {
    return e = Math.pow(10, e || 0), isNaN(this.n) || isNaN(this.d) ? new qt(NaN) : Fe(Math.round(e * this.s * this.n / this.d), e);
  },
  /**
   * Rounds a rational number to a multiple of another rational number
   *
   * Ex: new Fraction('0.9').roundTo("1/8") => 7 / 8
   **/
  roundTo: function(e, t) {
    return Pt(e, t), Fe(this.s * Math.round(this.n * Z.d / (this.d * Z.n)) * Z.n, Z.d);
  },
  /**
   * Gets the inverse of the fraction, means numerator and denominator are exchanged
   *
   * Ex: new Fraction([-3, 4]).inverse() => -4 / 3
   **/
  inverse: function() {
    return Fe(this.s * this.d, this.n);
  },
  /**
   * Calculates the fraction to some rational exponent, if possible
   *
   * Ex: new Fraction(-1,2).pow(-3) => -8
   */
  pow: function(e, t) {
    if (Pt(e, t), Z.d === 1)
      return Z.s < 0 ? Fe(Math.pow(this.s * this.d, Z.n), Math.pow(this.n, Z.n)) : Fe(Math.pow(this.s * this.n, Z.n), Math.pow(this.d, Z.n));
    if (this.s < 0) return null;
    var n = gd(this.n), i = gd(this.d), s = 1, r = 1;
    for (var o in n)
      if (o !== "1") {
        if (o === "0") {
          s = 0;
          break;
        }
        if (n[o] *= Z.n, n[o] % Z.d === 0)
          n[o] /= Z.d;
        else return null;
        s *= Math.pow(o, n[o]);
      }
    for (var o in i)
      if (o !== "1") {
        if (i[o] *= Z.n, i[o] % Z.d === 0)
          i[o] /= Z.d;
        else return null;
        r *= Math.pow(o, i[o]);
      }
    return Z.s < 0 ? Fe(r, s) : Fe(s, r);
  },
  /**
   * Check if two rational numbers are the same
   *
   * Ex: new Fraction(19.6).equals([98, 5]);
   **/
  equals: function(e, t) {
    return Pt(e, t), this.s * this.n * Z.d === Z.s * Z.n * this.d;
  },
  /**
   * Check if two rational numbers are the same
   *
   * Ex: new Fraction(19.6).equals([98, 5]);
   **/
  compare: function(e, t) {
    Pt(e, t);
    var n = this.s * this.n * Z.d - Z.s * Z.n * this.d;
    return (0 < n) - (n < 0);
  },
  simplify: function(e) {
    if (isNaN(this.n) || isNaN(this.d))
      return this;
    e = e || 1e-3;
    for (var t = this.abs(), n = t.toContinued(), i = 1; i < n.length; i++) {
      for (var s = Fe(n[i - 1], 1), r = i - 2; r >= 0; r--)
        s = s.inverse().add(n[r]);
      if (Math.abs(s.sub(t).valueOf()) < e)
        return s.mul(this.s);
    }
    return this;
  },
  /**
   * Check if two rational numbers are divisible
   *
   * Ex: new Fraction(19.6).divisible(1.5);
   */
  divisible: function(e, t) {
    return Pt(e, t), !(!(Z.n * this.d) || this.n * Z.d % (Z.n * this.d));
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
  toFraction: function(e) {
    var t, n = "", i = this.n, s = this.d;
    return this.s < 0 && (n += "-"), s === 1 ? n += i : (e && (t = Math.floor(i / s)) > 0 && (n += t, n += " ", i %= s), n += i, n += "/", n += s), n;
  },
  /**
   * Returns a latex representation of a Fraction object
   *
   * Ex: new Fraction("1.'3'").toLatex() => "\frac{4}{3}"
   **/
  toLatex: function(e) {
    var t, n = "", i = this.n, s = this.d;
    return this.s < 0 && (n += "-"), s === 1 ? n += i : (e && (t = Math.floor(i / s)) > 0 && (n += t, i %= s), n += "\\frac{", n += i, n += "}{", n += s, n += "}"), n;
  },
  /**
   * Returns an array of continued fraction elements
   *
   * Ex: new Fraction("7/8").toContinued() => [0,1,7]
   */
  toContinued: function() {
    var e, t = this.n, n = this.d, i = [];
    if (isNaN(t) || isNaN(n))
      return i;
    do
      i.push(Math.floor(t / n)), e = t % n, t = n, n = e;
    while (t !== 1);
    return i;
  },
  /**
   * Creates a string representation of a fraction with all digits
   *
   * Ex: new Fraction("100.'91823'").toString() => "100.(91823)"
   **/
  toString: function(e) {
    var t = this.n, n = this.d;
    if (isNaN(t) || isNaN(n))
      return "NaN";
    e = e || 15;
    var i = jC(t, n), s = qC(t, n, i), r = this.s < 0 ? "-" : "";
    if (r += t / n | 0, t %= n, t *= 10, t && (r += "."), i) {
      for (var o = s; o--; )
        r += t / n | 0, t %= n, t *= 10;
      r += "(";
      for (var o = i; o--; )
        r += t / n | 0, t %= n, t *= 10;
      r += ")";
    } else
      for (var o = e; t && o--; )
        r += t / n | 0, t %= n, t *= 10;
    return r;
  }
};
function WC(e) {
  if (!e) return null;
  if (e = e.toString().trim(), typeof navigator > "u" || typeof navigator.language > "u")
    return parseFloat(e);
  const { thousandsSeparator: t, decimalSeparator: n } = zC();
  return e = Array.from(e, (i) => i === t ? "" : i === n ? "." : i).join(""), parseFloat(e);
}
function zC() {
  const e = navigator.language, t = 123456789e-2.toLocaleString(e), n = t.replace(/\d/g, ""), i = Array.from(new Set(n.split("")));
  let s = "", r = "";
  if (i.length === 1)
    r = i[0];
  else if (i.length === 2) {
    const o = t[t.length - 3];
    i.includes(o) ? (r = o, s = i.find((a) => a !== o)) : (r = i[1], s = i[0]);
  }
  return { thousandsSeparator: s, decimalSeparator: r };
}
function gy(e) {
  if (!e || typeof e == "number") return !1;
  e = e.toString().replace(/[^0-9/ ]/g, "");
  const t = /\b\d+\/\d+\b/g;
  return e.match(t);
}
function VC(e, t = !1) {
  if (!$(e)) return null;
  if (e === 0) return "0";
  let n = e.toString().trim();
  if (!n) return null;
  if (gy(e))
    return n = n.replace(/[^0-9/,. -]/g, "").replace(/  +/g, " "), n;
  {
    n = n.replace(/[^0-9,. -]/g, ""), n.startsWith(".") && (n = "0" + n);
    let i;
    return t ? i = WC(n) : i = parseFloat(n), i ? i.toString() : null;
  }
}
function Q(e, t = "decimal", n = !1, i = !1, s = 0) {
  if (!$(e) || !t) return null;
  if (t !== "decimal" && t !== "fraction")
    return console.error("incorrect conversion type specified for convertUnit"), null;
  try {
    const r = VC(e, i);
    if (!r) return 0;
    let o;
    if (t === "fraction")
      if (gy(r))
        o = new qt(r);
      else {
        const a = parseFloat(r);
        Number.isInteger(a) ? o = new qt(r) : o = new qt(a);
      }
    else o = new qt(r);
    switch (t) {
      case "fraction":
        if (s > 0) {
          const a = o.valueOf(), l = Math.round(a * s) / s;
          o = new qt(l);
        }
        return o.toFraction(!0);
      case "decimal":
        if (n === !1 || typeof n != "number")
          return o.valueOf();
        {
          const a = o.valueOf();
          return a === 0 ? 0 : parseFloat(a.toFixed(n));
        }
      default:
        return 0;
    }
  } catch (r) {
    return console.error(r), 0;
  }
}
function GC(e) {
  let t = e;
  return typeof e != "number" && (t = parseFloat(e)), t % 1 !== 0;
}
const ut = {
  customData: (e) => {
    const t = [];
    return typeof e != "object" ? (t.push("Custom data must be an object."), t) : (Object.entries(e).forEach(([n, i]) => {
      $(i) && (["string", "number", "boolean"].includes(typeof i) || t.push(`Custom data ${n} must be a string, number or boolean.`));
    }), t);
  },
  banding: (e) => {
    const t = [];
    if (!$(e)) return [];
    if (typeof e != "object")
      return t.push("Banding must be an object."), t;
    Object.entries(e).forEach(([n, i]) => {
      $(i) && i !== !0 && i !== !1 && t.push(`Banding ${n} must be a boolean.`);
    });
  },
  //when trim provided as number
  partTrim(e, t) {
    t = Q(t);
    const n = Q(e.l), i = Q(e.w), s = n - t * 2, r = i - t * 2;
    return s < 0 || r < 0 ? [
      `When applying trim of ${t}, part is ${s} x ${r}.`
    ] : [];
  },
  //when trim provided as object
  trim: (e) => {
    const t = [];
    if (!$(e.trim)) return t;
    if (["x1", "x2", "y1", "y2"].forEach((n) => {
      $(e.trim[n]) || (e.trim[n] = 0);
    }), !$n(e) || $n(e) && !(e != null && e.trimmed)) {
      const n = Q(e.l), i = Q(e.w), s = Q(e.trim.x1), r = Q(e.trim.x2), o = Q(e.trim.y1), a = Q(e.trim.y2);
      Object.entries({ x1: s, x2: r, y1: o, y2: a }).forEach(([u, c]) => {
        isNaN(c) && t.push(`The value of trim ${Ny[u]} is not understood.`);
      }), n && i && n > 0 && i > 0 && (s + r >= e.l && t.push(`Trim W1 + W2 = ${s + r}, which is greater than or equal to total length of ${n}.`), a + a >= e.w && t.push(`Trim L1 + L2 = ${o + a}, which is greater than or equal to total width of ${i}.`));
    }
    return t;
  },
  x: (e) => {
    const t = [];
    return $(e) ? (e = Q(e), isNaN(e) ? (t.push(`X value is not understood, got ${e}`), t) : (e < 0 && t.push(`X must be greater than or equal to zero, got ${e}`), t)) : t;
  },
  y: (e) => {
    const t = [];
    return $(e) && (e = Q(e), isNaN(e) && t.push(`Y value is not understood, got ${e}`), e < 0 && t.push(`Y must be greater than or equal to zero, got ${e}`)), t;
  },
  l: (e) => {
    const t = [];
    return $(e) ? (e = Q(e), isNaN(e) ? (t.push(`Length value is not understood, got ${e}`), t) : (e <= 0 && t.push(`Length must be greater than zero, got ${e}`), t)) : (t.push("Length is required."), t);
  },
  w: (e) => {
    const t = [];
    return $(e) ? (e = Q(e), isNaN(e) ? (t.push(`Width value is not understood, got ${e}`), t) : (e <= 0 && t.push(`Width must be greater than zero, got ${e}`), t)) : (t.push("Width is required."), t);
  },
  t: (e) => {
    const t = [];
    return !$(e) || e === "" ? t : (e = Q(e), isNaN(e) ? (t.push(`Thickness value is not understood, got ${e}`), t) : (e && e <= 0 && t.push(`Thickness must be greater than zero, got ${e}`), t));
  },
  q: (e, t = null) => {
    const n = [];
    return $(e) ? (e = parseInt(e), isNaN(e) ? (n.push(`Quantity value is not understood, got ${e}`), n) : (GC(e) && n.push("Quantity should be an integer."), e <= 0 && (t || n.push(`Quantity should be greater than or equal to zero, got ${e}`)), n)) : (n.push("Quantity should be set."), n);
  },
  orientationLock: (e) => {
    const t = [];
    return $(e) && (e = e.toLowerCase(), e !== "l" && e !== "w" && t.push(`Orientation lock must be l or w, got ${e}`)), t;
  },
  grain: (e) => {
    const t = [];
    return $(e) && (e = e.toLowerCase(), e !== "l" && e !== "w" && t.push(`Grain must be l or w, got ${e}`)), t;
  },
  stockMatch: (e, t, n, i = 0) => {
    if (!e.q) return [];
    if (e.applyPartTrim(i), e.issues.length) return [];
    const s = FA([e], t, n);
    if (!s) return [];
    const r = [];
    if (s.unusableShapes.length) {
      const o = s.unusableShapes[0], a = o.stockMatch;
      if (!a.fit) {
        const l = o.getTrimmedDimensions();
        r.push(`${l.l.toFixed(0)}x${l.w.toFixed(0)} will not fit on any stock - check trim, dimensions & orientation lock.`);
      }
      a.material || r.push("No matching stock material found."), a.thickness || r.push("No matching stock thickness found."), !a.width && n === "linear" && r.push("No matching stock width found - required for linear calculations.");
    }
    return r;
  },
  machining: (e) => {
    e.machining.validateEverything(e);
  }
};
function Zl(e) {
  let t, n;
  switch (e) {
    case "l":
    case "length":
      t = "guillotine", n = "l";
      break;
    case "w":
    case "width":
      t = "guillotine", n = "w";
      break;
    case "flex":
      t = "guillotine", n = "flex";
      break;
    case "efficiency":
      t = "efficiency", n = "none";
      break;
    case "beam":
      t = "beam", n = "l";
      break;
    default:
      t = null, n = null;
      break;
  }
  return {
    cutPreference: n,
    cutType: t
  };
}
var my = typeof global == "object" && global && global.Object === Object && global, HC = typeof self == "object" && self && self.Object === Object && self, Ju = my || HC || Function("return this")(), $o = Ju.Symbol, yy = Object.prototype, KC = yy.hasOwnProperty, YC = yy.toString, Rs = $o ? $o.toStringTag : void 0;
function XC(e) {
  var t = KC.call(e, Rs), n = e[Rs];
  try {
    e[Rs] = void 0;
    var i = !0;
  } catch {
  }
  var s = YC.call(e);
  return i && (t ? e[Rs] = n : delete e[Rs]), s;
}
var JC = Object.prototype, QC = JC.toString;
function ZC(e) {
  return QC.call(e);
}
var eT = "[object Null]", tT = "[object Undefined]", md = $o ? $o.toStringTag : void 0;
function Qu(e) {
  return e == null ? e === void 0 ? tT : eT : md && md in Object(e) ? XC(e) : ZC(e);
}
function Zu(e) {
  return e != null && typeof e == "object";
}
var nT = Array.isArray;
function _a(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function by(e) {
  return e;
}
var iT = "[object AsyncFunction]", sT = "[object Function]", rT = "[object GeneratorFunction]", oT = "[object Proxy]";
function wy(e) {
  if (!_a(e))
    return !1;
  var t = Qu(e);
  return t == sT || t == rT || t == iT || t == oT;
}
var Qa = Ju["__core-js_shared__"], yd = function() {
  var e = /[^.]+$/.exec(Qa && Qa.keys && Qa.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function aT(e) {
  return !!yd && yd in e;
}
var lT = Function.prototype, cT = lT.toString;
function uT(e) {
  if (e != null) {
    try {
      return cT.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var fT = /[\\^$.*+?()[\]{}|]/g, hT = /^\[object .+?Constructor\]$/, dT = Function.prototype, pT = Object.prototype, gT = dT.toString, mT = pT.hasOwnProperty, yT = RegExp(
  "^" + gT.call(mT).replace(fT, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function bT(e) {
  if (!_a(e) || aT(e))
    return !1;
  var t = wy(e) ? yT : hT;
  return t.test(uT(e));
}
function wT(e, t) {
  return e == null ? void 0 : e[t];
}
function vT(e, t) {
  var n = wT(e, t);
  return bT(n) ? n : void 0;
}
function _T(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var xT = 800, ST = 16, kT = Date.now;
function ET(e) {
  var t = 0, n = 0;
  return function() {
    var i = kT(), s = ST - (i - n);
    if (n = i, s > 0) {
      if (++t >= xT)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function CT(e) {
  return function() {
    return e;
  };
}
var bd = function() {
  try {
    var e = vT(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), TT = bd ? function(e, t) {
  return bd(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: CT(t),
    writable: !0
  });
} : by, AT = ET(TT), OT = 9007199254740991, PT = /^(?:0|[1-9]\d*)$/;
function vy(e, t) {
  var n = typeof e;
  return t = t ?? OT, !!t && (n == "number" || n != "symbol" && PT.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function _y(e, t) {
  return e === t || e !== e && t !== t;
}
var wd = Math.max;
function NT(e, t, n) {
  return t = wd(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var i = arguments, s = -1, r = wd(i.length - t, 0), o = Array(r); ++s < r; )
      o[s] = i[t + s];
    s = -1;
    for (var a = Array(t + 1); ++s < t; )
      a[s] = i[s];
    return a[t] = n(o), _T(e, this, a);
  };
}
function IT(e, t) {
  return AT(NT(e, t, by), e + "");
}
var MT = 9007199254740991;
function xy(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= MT;
}
function Sy(e) {
  return e != null && xy(e.length) && !wy(e);
}
function LT(e, t, n) {
  if (!_a(n))
    return !1;
  var i = typeof t;
  return (i == "number" ? Sy(n) && vy(t, n.length) : i == "string" && t in n) ? _y(n[t], e) : !1;
}
var DT = Object.prototype;
function RT(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || DT;
  return e === n;
}
function FT(e, t) {
  for (var n = -1, i = Array(e); ++n < e; )
    i[n] = t(n);
  return i;
}
var $T = "[object Arguments]";
function vd(e) {
  return Zu(e) && Qu(e) == $T;
}
var ky = Object.prototype, BT = ky.hasOwnProperty, jT = ky.propertyIsEnumerable, qT = vd(/* @__PURE__ */ function() {
  return arguments;
}()) ? vd : function(e) {
  return Zu(e) && BT.call(e, "callee") && !jT.call(e, "callee");
};
function UT() {
  return !1;
}
var Ey = typeof exports == "object" && exports && !exports.nodeType && exports, _d = Ey && typeof module == "object" && module && !module.nodeType && module, WT = _d && _d.exports === Ey, xd = WT ? Ju.Buffer : void 0, zT = xd ? xd.isBuffer : void 0, VT = zT || UT, GT = "[object Arguments]", HT = "[object Array]", KT = "[object Boolean]", YT = "[object Date]", XT = "[object Error]", JT = "[object Function]", QT = "[object Map]", ZT = "[object Number]", eA = "[object Object]", tA = "[object RegExp]", nA = "[object Set]", iA = "[object String]", sA = "[object WeakMap]", rA = "[object ArrayBuffer]", oA = "[object DataView]", aA = "[object Float32Array]", lA = "[object Float64Array]", cA = "[object Int8Array]", uA = "[object Int16Array]", fA = "[object Int32Array]", hA = "[object Uint8Array]", dA = "[object Uint8ClampedArray]", pA = "[object Uint16Array]", gA = "[object Uint32Array]", Ie = {};
Ie[aA] = Ie[lA] = Ie[cA] = Ie[uA] = Ie[fA] = Ie[hA] = Ie[dA] = Ie[pA] = Ie[gA] = !0;
Ie[GT] = Ie[HT] = Ie[rA] = Ie[KT] = Ie[oA] = Ie[YT] = Ie[XT] = Ie[JT] = Ie[QT] = Ie[ZT] = Ie[eA] = Ie[tA] = Ie[nA] = Ie[iA] = Ie[sA] = !1;
function mA(e) {
  return Zu(e) && xy(e.length) && !!Ie[Qu(e)];
}
function yA(e) {
  return function(t) {
    return e(t);
  };
}
var Cy = typeof exports == "object" && exports && !exports.nodeType && exports, er = Cy && typeof module == "object" && module && !module.nodeType && module, bA = er && er.exports === Cy, Za = bA && my.process, Sd = function() {
  try {
    var e = er && er.require && er.require("util").types;
    return e || Za && Za.binding && Za.binding("util");
  } catch {
  }
}(), kd = Sd && Sd.isTypedArray, wA = kd ? yA(kd) : mA;
function vA(e, t) {
  var n = nT(e), i = !n && qT(e), s = !n && !i && VT(e), r = !n && !i && !s && wA(e), o = n || i || s || r, a = o ? FT(e.length, String) : [], l = a.length;
  for (var u in e)
    o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    r && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    vy(u, l)) || a.push(u);
  return a;
}
function _A(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var xA = Object.prototype, SA = xA.hasOwnProperty;
function kA(e) {
  if (!_a(e))
    return _A(e);
  var t = RT(e), n = [];
  for (var i in e)
    i == "constructor" && (t || !SA.call(e, i)) || n.push(i);
  return n;
}
function EA(e) {
  return Sy(e) ? vA(e) : kA(e);
}
var Ty = Object.prototype, CA = Ty.hasOwnProperty, qs = IT(function(e, t) {
  e = Object(e);
  var n = -1, i = t.length, s = i > 2 ? t[2] : void 0;
  for (s && LT(t[0], t[1], s) && (i = 1); ++n < i; )
    for (var r = t[n], o = EA(r), a = -1, l = o.length; ++a < l; ) {
      var u = o[a], c = e[u];
      (c === void 0 || _y(c, Ty[u]) && !CA.call(e, u)) && (e[u] = r[u]);
    }
  return e;
});
function Ay(e, t, n, i) {
  Object.keys(t).forEach((s) => {
    var r, o;
    s in e && ((r = t[s]) != null && r.min && Q(e[s]) < Q(t[s].min) ? n.push({
      index: i,
      message: `${s.charAt(0).toUpperCase() + s.slice(1)} cannot be less than ${t[s].min}.`,
      fields: [s]
    }) : (o = t[s]) != null && o.max && Q(e[s]) > Q(t[s].max) && n.push({
      index: i,
      message: `${s.charAt(0).toUpperCase() + s.slice(1)} cannot be greater than ${t[s].max}.`,
      fields: [s]
    }));
  });
}
class ec {
  constructor({ x: t, y: n, diameter: i, depth: s = 0, side: r = 0, type: o = null }) {
    m(this, "x");
    m(this, "y");
    m(this, "diameter");
    m(this, "depth");
    m(this, "side");
    m(this, "valid");
    m(this, "type");
    this.x = t, this.y = n, this.diameter = i, this.depth = s, this.side = r, this.type = o;
  }
  getXDrawPosition(t) {
    let n = 0;
    const i = Q(this.x);
    return t.rot ? n = t.l - Q(this.y) + ("x" in t ? Q(t.x) : 0) : n = i + ("x" in t ? Q(t.x) : 0), n;
  }
  getYDrawPosition(t, n, i) {
    let s = t.rot ? Q(this.x) : Q(this.y);
    return s += "y" in t ? Q(t.y) : 0, n === 1 && (i ? s = Q(i.w) - s : s = Q(t.w) - s), s;
  }
  shouldShow(t, n) {
    return this.side === n || this.isThroughShape(t) === !0;
  }
  isThroughShape(t) {
    return !this.depth || Q(this.depth) >= Q(t.t);
  }
  getDistanceToEdge(t) {
    const n = this.x, i = this.y, s = this.diameter / 2, r = Q(t.getLongSide()), o = Q(t.getShortSide()), a = t.machining.corners.map((p) => p.type ? p.size : 0), l = [
      {
        edge: "left",
        distance: n - s
      },
      {
        edge: "right",
        distance: r - n - s
      },
      {
        edge: "bottom",
        distance: o - i - s
      },
      {
        edge: "top",
        distance: i - s
      }
    ], u = t.machining.corners.map((p, w) => {
      const E = w === 0 || w === 3, v = w < 2, k = E ? n : r - n;
      let g = null;
      this.side === 0 ? g = v ? i : o - i : this.side === 1 && (g = v ? o - i : i);
      const b = Math.sqrt(k * k + g * g);
      return {
        c: p,
        distance: b
      };
    }), c = Math.min(...l.map((p) => p.distance)), f = Math.min(...u.map((p) => p.distance)), h = u.findIndex((p) => p.distance === f), d = t.machining.corners[h];
    if (d && d.type === "radius") {
      let p = h === 0 || h === 3 ? 0 : r, w = h < 2 ? 0 : o;
      const E = h < 2;
      p += h === 0 || h === 3 ? a[h] : -a[h], w += E ? a[h] : -a[h];
      const k = n - p, g = h < 2;
      let b;
      this.side === 0 ? b = g ? i : o - i : this.side === 1 && (b = g ? o - i : i);
      const A = b - w, N = Math.sqrt(k * k + A * A), L = a[h] - N - s;
      let B = !1;
      return d.index === 0 ? B = n <= p && b <= w : d.index === 1 ? B = n >= p && b <= w : d.index === 2 ? B = n >= p && b >= w : d.index === 3 && (B = n <= p && b >= w), B && L < c ? L : c;
    } else if (d && d.type === "bevel") {
      let p, w, E;
      d.index === 0 ? (p = 1, w = 1, E = -d.size) : d.index === 1 ? (p = 1, w = -1, E = -r + d.size) : d.index === 2 ? (p = 1, w = 1, E = -r - o + d.size) : d.index === 3 && (p = -1, w = 1, E = -o + d.size);
      const v = d.index === 0 ? 1 : -1, k = (p * n + w * i + E) / Math.sqrt(p * p + w * w) * v - s;
      return k < c ? k : c;
    } else
      return c;
  }
  validate(t, n, i = null) {
    const s = [];
    if (!$(this.x) || !$(this.y) || !$(this.diameter)) {
      const o = {
        index: n,
        message: "X, Y & diameter are all required.",
        fields: []
      };
      this.x || o.fields.push("x"), this.y || o.fields.push("y"), this.diameter || o.fields.push("diameter"), s.push(o);
    }
    return Q(this.diameter) <= 0 && s.push({
      index: n,
      message: "Diameter cannot be negative or zero.",
      fields: ["diameter"]
    }), Q(this.depth) < 0 && s.push({
      index: n,
      message: "Depth cannot be negative.",
      fields: ["depth"]
    }), "t" in t && Q(t.t) > 0 && Q(this.depth) > Q(t.t) && s.push({
      index: n,
      message: "Depth cannot be greater than part thickness.",
      fields: ["depth"]
    }), (!("t" in t) || !t.t) && Q(this.depth) > 0 && s.push({
      index: n,
      message: "Part thickness is not defined.",
      fields: ["depth"]
    }), this.getDistanceToEdge(t) < 0 && s.push({
      index: n,
      message: "Outside of part."
    }), i && Ay(this, i, s, n), s.length ? this.valid = !1 : this.valid = !0, s;
  }
}
class Ed {
  constructor({
    position: t = null,
    //from left or bottom
    edge: n = "x1",
    side: i = 0,
    numHoles: s = null,
    diameter: r = 0,
    depth: o = 0,
    distanceFromEdge: a = 0,
    outerSpacing: l = 0,
    hingeLength: u = 0,
    minimumHoleDistance: c = 0,
    positionLimit: f = 0
  }, h) {
    m(this, "position");
    m(this, "edge");
    m(this, "side");
    m(this, "numHoles");
    m(this, "holes", []);
    m(this, "diameter");
    m(this, "depth");
    m(this, "distanceFromEdge");
    //from edge to center of hole
    m(this, "outerSpacing");
    //from edge to center of hole
    m(this, "hingeLength");
    m(this, "minimumHoleDistance");
    m(this, "positionLimit");
    m(this, "valid");
    this.position = t, this.edge = n, this.side = i, this.numHoles = s, this.diameter = r, this.depth = o, this.distanceFromEdge = a, this.outerSpacing = l, this.hingeLength = u, this.minimumHoleDistance = c, this.positionLimit = f, h && this.createHoles(h);
  }
  getHoleSpacing() {
    const t = Q(this.hingeLength) - Q(this.outerSpacing) * 2, n = this.numHoles - 1;
    return t / n;
  }
  getHoleXPosition(t, n) {
    let i = 0;
    const s = this.getHoleSpacing();
    switch (this.edge) {
      case "x1":
        i = this.distanceFromEdge;
        break;
      case "x2":
        i = t.getLongSide() - Q(this.distanceFromEdge);
        break;
      case "y1":
      case "y2":
        i = Q(this.position) + Q(this.outerSpacing) + s * n;
        break;
    }
    return i;
  }
  getHoleYPosition(t, n) {
    let i = 0;
    const s = this.getHoleSpacing();
    switch (this.edge) {
      case "x1":
      case "x2":
        i = Q(this.position) + Q(this.outerSpacing) + s * n;
        break;
      case "y1":
        i = Q(this.distanceFromEdge);
        break;
      case "y2":
        i = t.getShortSide() - Q(this.distanceFromEdge);
        break;
    }
    return i;
  }
  createHoles(t) {
    this.holes = [];
    for (let n = 0; n < this.numHoles; n++) {
      const i = new ec({
        x: this.getHoleXPosition(t, n),
        y: this.getHoleYPosition(t, n),
        diameter: this.diameter,
        depth: this.depth,
        side: this.side,
        type: "hinge"
      });
      this.holes.push(i);
    }
    return this.holes;
  }
  validate(t, n, i = null) {
    const s = [];
    return this.holes.forEach((r, o) => {
      const a = r.validate(t, o).map((l) => (l.index = n, l.message = `Hole ${o + 1}: ${l.message}`, l));
      s.push(...a);
    }), i && Ay(this, i, s, n), s.length ? this.valid = !1 : this.valid = !0, s;
  }
}
class Cd {
  constructor({ type: t = "radius", size: n, index: i }) {
    m(this, "type");
    m(this, "size");
    m(this, "index");
    m(this, "valid");
    this.type = t, this.size = n, this.index = i;
  }
  validate(t, n) {
    const i = t.getShortSide(), s = [];
    if (this.type === null) {
      this.size = null;
      const r = ["a", "b", "c", "d"][this.index];
      t.banding[r] = !1;
    }
    return this.type && Q(this.size) <= 0 && s.push({
      index: n,
      message: "Corner size cannot be zero or negative"
    }), this.type && Q(this.size) > i / 2 && (this.size = i / 2), s.length ? this.valid = !1 : this.valid = !0, s;
  }
  //get the coordinates of a corner in the clockwise direction
  /* getCoords( shape: Shape | InputShape, side: 0 | 1 ): { x1; x2; y1; y2 }
  	{
  		let x1, x2, y1, y2;
  		switch ( this.index )
  		{
  		case 0:
  			x1 = 0;
  			x2 = cu( this.size );
  			y1 = side === 0 ? cu( this.size ) : shape.getShortSide() - cu( this.size );
  			y2 = side === 0 ? 0 : shape.getShortSide();
  			break;
  		case 1:
  			x1 = shape.getLongSide() - cu( this.size );
  			x2 = shape.getLongSide();
  			y1 = side === 0 ? 0 : shape.getShortSide();
  			y2 = side === 0 ? cu( this.size ) : shape.getShortSide() - cu( this.size );
  			break;
  		case 2:
  			x1 = shape.getLongSide();
  			x2 = shape.getLongSide() - cu( this.size );
  			y1 = side === 0 ? shape.getShortSide() - cu( this.size ) : cu( this.size );
  			y2 = side === 0 ? shape.getShortSide() : 0;
  			break;
  		case 3:
  			x1 = cu( this.size );
  			x2 = 0;
  			y1 = side === 0 ? shape.getShortSide() : 0;
  			y2 = side === 0 ? shape.getShortSide() - cu( this.size ) : cu( this.size );
  			break;
  		}
  
  		return {
  			x1,
  			x2,
  			y1,
  			y2
  		};
  	} */
}
let Oy = class {
  //shelfHoles?: ShelfHoles[] = [];
  constructor({
    holes: t = [],
    hingeHoles: n = [],
    corners: i = []
  } = {}) {
    m(this, "holes", []);
    m(this, "corners", []);
    m(this, "hingeHoles", []);
    i && i.length === 4 ? this.corners = i.map((s) => new Cd(s)) : [0, 1, 2, 3].forEach((s) => {
      this.corners.push(new Cd({
        type: null,
        size: null,
        index: s
      }));
    }), t && (this.holes = t.map((s) => new ec(s))), n && (this.hingeHoles = n.map((s) => new Ed(s)));
  }
  validateEverything(t) {
    const n = this.validate(t, "holes"), i = this.validate(t, "hingeHoles"), s = this.validate(t, "corners");
    t.issues.push(...n.map((r) => vn(t) ? `Part ${t.id} hole issue: ${r.message}` : `Hole issue: ${r.message}`)), t.issues.push(...i.map((r) => vn(t) ? `Part ${t.id} hinge hole issue: ${r.message}` : `Hinge hole issue: ${r.message}`)), t.issues.push(...s.map((r) => vn(t) ? `Part ${t.id} corner issue: ${r.message}` : `Corner issue: ${r.message}`));
  }
  validate(t, n, i = null) {
    if (!t) return [];
    if (!n) return [];
    const s = [];
    return s.push(...this.validateAll(t, n, i)), s;
  }
  validateAll(t, n, i = null) {
    if (!t) return [];
    const s = [];
    return this[n].forEach((r, o) => s.push(...r.validate(t, o, i))), s;
  }
  createHole(t, n, i, s = 0, r = 0) {
    const o = new ec({
      x: t,
      y: n,
      diameter: i,
      depth: s,
      side: r
    });
    return this.holes.push(o), o;
  }
  createHingeHoles({
    numHoles: t,
    position: n,
    diameter: i,
    depth: s = 0,
    edge: r = "x1",
    side: o = 0,
    distanceFromEdge: a = 0,
    outerSpacing: l = 0,
    minimumHoleDistance: u = 0,
    hingeLength: c = 0
  }) {
    const f = new Ed({
      numHoles: t,
      position: n,
      //from left or bottom
      edge: r,
      side: o,
      diameter: i,
      depth: s,
      distanceFromEdge: a,
      outerSpacing: l,
      minimumHoleDistance: u,
      hingeLength: c
    });
    return this.hingeHoles.push(f), f;
  }
  updateHingeHoles(t) {
    this.hingeHoles.forEach((n) => n.createHoles(t));
  }
  getAllHingeHoles(t) {
    const n = [];
    return this.hingeHoles.forEach((i) => {
      i.holes.length ? n.push(...i.holes) : (i.createHoles(t), n.push(...i.holes));
    }), n;
  }
  getNumHoles() {
    return this.holes.length + this.hingeHoles.reduce(
      (t, n) => t + n.numHoles,
      0
    );
  }
  getNumCorners() {
    return this.corners.filter((t) => t.type !== null).length;
  }
};
function Py(e) {
  var t, n, i, s, r, o, a, l;
  return !e || !(e != null && e.machining) ? !1 : (n = (t = e.machining) == null ? void 0 : t.holes) != null && n.length || (s = (i = e.machining) == null ? void 0 : i.hingeHoles) != null && s.length ? !0 : (o = (r = e.machining) == null ? void 0 : r.corners) != null && o.length ? (l = (a = e.machining) == null ? void 0 : a.corners) == null ? void 0 : l.some((u) => u.type && u.size) : !1;
}
class TA {
  constructor(t = null) {
    m(this, "id");
    //api
    m(this, "listId");
    m(this, "shapeListIds", []);
    m(this, "shapes");
    m(this, "direction");
    m(this, "q");
    m(this, "duplicate", !1);
    m(this, "issues", []);
    m(this, "stockMatch");
    var n;
    this.listId = t != null && t.listId ? t.listId : Date.now().toString() + Math.ceil(Math.random() * 1e16), this.id = t == null ? void 0 : t.id, this.shapes = $(t == null ? void 0 : t.shapes) ? t.shapes.map((i) => i.toString()) : [], this.shapeListIds = $(t == null ? void 0 : t.shapeListIds) ? t.shapeListIds : [], this.direction = $(t == null ? void 0 : t.direction) ? t.direction : "l", this.q = $(t == null ? void 0 : t.q) ? t.q : 1, $(t == null ? void 0 : t.shapeList) && ((n = t.shapeList) != null && n.length) && this.validate(t.shapeList);
  }
  validate(t = []) {
    var o, a;
    if (this.issues = [], !(t != null && t.length))
      throw new Error("shapeList is required to validate user group");
    const n = this.findShapes(t);
    if (!n.length)
      return this.issues.push("Must have 2 or more parts."), this.issues;
    const i = n[0];
    if (vn(i)) {
      if (!(this != null && this.shapes) || ((o = this.shapes) == null ? void 0 : o.length) < 2)
        return this.issues.push("Must have 2 or more parts."), this.issues;
    } else if (!(this != null && this.shapeListIds) || ((a = this.shapeListIds) == null ? void 0 : a.length) < 2)
      return this.issues.push("Must have 2 or more parts."), this.issues;
    if (n.forEach((l, u) => {
      !l.isSquare() && !["l", "w"].includes(l.orientationLock) && this.issues.push(`Part in position ${u + 1} must have orientation lock set to be part of a group.`);
    }), this.issues.length) return this.issues;
    const s = Li(this.direction), r = i.getTrimmedDimensions(!0)[s];
    return n.forEach((l, u) => {
      if (l.id === i.id) return;
      const c = l.getTrimmedDimensions(!0)[s];
      ve.equalTo(c, r) || this.issues.push(`Part in position ${u + 1} final ${s === "l" ? "length" : "width"} is not correct for the group. Expected ${r} and is ${c}. Check the dimensions, trim & orientation lock.`);
    }), this.issues;
  }
  findShapes(t = []) {
    var i, s;
    if (!t.length) return [];
    let n = [];
    if (Fi(t[0])) {
      if (!((i = this.shapeListIds) != null && i.length)) return [];
      if (n = this.shapeListIds.map((r) => t.find((o) => o.listId === r)).filter((r) => r), !n.length)
        throw new Error("could not map group shapes to shape list");
      return n;
    } else {
      if (!((s = this.shapes) != null && s.length)) return [];
      const r = /* @__PURE__ */ new Set();
      n = this.shapes.map((o) => {
        const a = t.find((l) => l.parentID === o && !l.inUserGroup && !r.has(l.id));
        return a ? (r.add(a.id), a) : null;
      }).filter((o) => o);
    }
    if (!n.length)
      throw new Error("could not map group shapes to shape list");
    return n;
  }
  populateParentID(t) {
    var n;
    t != null && t.length && (n = this == null ? void 0 : this.shapeListIds) != null && n.length && (this.shapes = this.shapeListIds.map((i) => (t.findIndex((r) => r.listId === i) + 1).toString()));
  }
  //create a group from a user group
  createGroup(t = 0, n = 0, i = [], s = null) {
    if (!(i != null && i.length))
      throw new Error("some parts are required to create a user group");
    if (!vn(i[0]))
      throw new Error("shapeList must be of type Shape[]");
    const r = this.findShapes(i);
    if (!r.length) return !1;
    const o = r[0];
    r.forEach((c) => {
      const f = i.findIndex((h) => !h.inUserGroup && h.parentID === c.parentID);
      if (f === -1)
        throw new Error("shape not found in shapeList while creating user group.");
      i.splice(f, 1), c.setRotationToOrientationLockWithoutContainer(), c.inUserGroup = !0;
    });
    let a = 0, l = 0;
    this.direction === "l" ? l = o.w : a = o.l;
    let u;
    try {
      const c = {
        id: `ug${t}.${n}`,
        shapes: r,
        l: a,
        w: l,
        t: o == null ? void 0 : o.t,
        material: o == null ? void 0 : o.material,
        // joinDimension:
        //     referenceShape.l === l ? referenceShape.l : referenceShape.w,
        direction: this.direction,
        preventAutoRotation: !0,
        container: s,
        type: "user"
      };
      u = new di(c);
    } catch (c) {
      return console.error(c), !1;
    }
    return u.parentID = `ug${t}`, s && u.updateShapeSpacing(s), u;
  }
}
const cs = ["x1", "x2", "y1", "y2"], AA = ["a", "b", "c", "d"], Si = [...cs, ...AA], Zi = ["a", "b"], Ny = {
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
  finish: "finish",
  cost: "cost",
  grain: "grain",
  trim: "trim",
  x1: "w1",
  x2: "w2",
  y1: "l1",
  y2: "l2",
  a: "a",
  b: "b",
  all: "all"
};
function Ri(e) {
  if (!$(e) || typeof e != "object") return {};
  e = { ...e };
  for (const [t, n] of Object.entries(e))
    t !== "_id" && t.startsWith("_") && (e[t.substring(1)] = n, delete e[t]);
  return e;
}
function OA(e, t = null) {
  return e.map((n) => {
    var i;
    return delete n.id, t ? n.units = t : n.units || (n.units = ((i = this == null ? void 0 : this.optionsStore) == null ? void 0 : i.units) ?? "decimal"), new jo(n);
  });
}
function PA({
  stockList: e,
  removeScores: t = !1,
  saw: n = null,
  preventAutoRotation: i = !1,
  preventGrainRotation: s = !1
}) {
  return !e || !(e != null && e.length) ? [] : e.map((r) => {
    n && (r.saw = n), i && (r.preventAutoRotation = !0), s && (r.preventGrainRotation = !0);
    const o = new Bn(r);
    if (o.issues.length)
      throw new Error(
        `Issues found when attempting to recreate stock list - ${o.issues.join()}`,
        { cause: o.issues }
      );
    return t && delete o.algoBenchmark, o;
  }).sort(Po.ID);
}
function NA({
  shapeList: e,
  stockList: t,
  preventAutoRotation: n = !1
}) {
  if (typeof t > "u")
    throw new Error("recreateShapeList requires stockList");
  return !e || !(e != null && e.length) ? [] : e.map((i) => {
    var o;
    n && (i.preventAutoRotation = !0);
    let s;
    if (BA(i) && ((o = i == null ? void 0 : i.shapes) != null && o.length)) {
      i.shapes = i.shapes.map((a) => new jn(a));
      try {
        s = new di(i);
      } catch {
        throw new Error("error creating group from shape data");
      }
    } else
      s = new jn(i);
    if (s.issues.length)
      throw new Error(`Issues found when attempting to recreate shape list - ${s.issues.join()}`);
    const r = t.find((a) => {
      var l;
      return a.id === (((l = i == null ? void 0 : i.stock) == null ? void 0 : l.id) ?? (i == null ? void 0 : i.stockId));
    });
    return s.stock = r, s;
  }).sort(Po.ID);
}
function IA({
  cutList: e,
  stockList: t
}) {
  if (typeof t > "u")
    throw new Error("recreateCutList requires stockList");
  return !e || !(e != null && e.length) ? [] : e.map((n) => {
    const i = new va(n), s = t.find((r) => {
      var o;
      return r.id === (((o = n == null ? void 0 : n.stock) == null ? void 0 : o.id) ?? (n == null ? void 0 : n.stockId));
    });
    return i.stock = s, i;
  });
}
function MA({
  segmentList: e,
  stockList: t
}) {
  return !e || !(e != null && e.length) ? [] : e.map((n) => {
    const i = t.find((r) => {
      var o;
      return r.id === (((o = n == null ? void 0 : n.stock) == null ? void 0 : o.id) ?? (n == null ? void 0 : n.stockId));
    });
    return n.stock = i, new Ly(n);
  });
}
function Iy(e = null, t = null, n = null) {
  if (!e) throw new Error("no container supplied to willItFit");
  if (!t) throw new Error("no shape supplied to willItFit");
  const i = t.rot;
  function s(h = !1, d = "l") {
    var p, w;
    return ve.equalTo(
      t[h ? Li(d) : d],
      e[d]
    ) || ve.lessThanOrEqualTo(t[h ? Li(d) : d], e[d] - (tc(e) ? (w = (p = e == null ? void 0 : e.saw) == null ? void 0 : p.options) == null ? void 0 : w.minSpacing : 0));
  }
  function r(h = !0) {
    return t.forceRotate(i), h;
  }
  const o = t.getNecessaryOrientation(e);
  let a = null;
  if (o && (a = o === "l" ? 0 : 1), t.orientationLock) {
    if ($(n) && n !== a)
      return r(!1);
    t.forceRotate(a);
  } else $(n) && t.forceRotate(n);
  if (a && t.rot !== a)
    return r(!1);
  const l = s(!1, "l"), u = s(!1, "w"), c = s(!0, "l"), f = s(!0, "w");
  return $(n) || o ? r(l && u) : r(l && u || c && f);
}
function Bo(e, t, n = "decimal", i = !1) {
  return $(e == null ? void 0 : e[t]) ? Q(e[t], n, !1, i) : null;
}
class My {
  constructor(t, n = !1) {
    m(this, "readonly");
    m(this, "id");
    m(this, "listId");
    m(this, "units", "decimal");
    m(this, "l");
    m(this, "w");
    m(this, "t");
    m(this, "q");
    m(this, "name");
    m(this, "material");
    m(this, "trim", {
      x1: 0,
      x2: 0,
      y1: 0,
      y2: 0
    });
    m(this, "cost", null);
    m(this, "grain", "");
    m(this, "selected", !1);
    //used for multiple editing
    m(this, "multiEdit", !1);
    //is this the multi-select stock
    m(this, "type", null);
    m(this, "autoAdd", !1);
    m(this, "used");
    m(this, "saw");
    m(this, "preventGrainRotation");
    m(this, "issues", []);
    m(this, "warnings", []);
    m(this, "notes", "");
    var r, o;
    t = Ri(t), $(t.units) || console.warn("Attempting to create InputStock without units"), this.units = t.units, this.readonly = t.readonly, this.id = t.id, this.listId = t != null && t.listId ? t.listId : Date.now().toString() + _m(), ["l", "w", "t"].forEach((a) => {
      this[a] = Bo(t, a, this.units, n);
    }), this.q = $(t.q) ? typeof t.q == "string" ? parseInt(t.q) : t.q : null, this.autoAdd = $(t.autoAdd) ? t.autoAdd : !1, this.name = $(t.name) ? _r(t.name).toUpperCase() : "", this.material = $(t.material) ? t.material.trim().toUpperCase() : "";
    const s = ["x1", "x2", "y1", "y2"];
    this.trim = {
      x1: null,
      x2: null,
      y1: null,
      y2: null
    }, s.forEach((a) => {
      this.trim[a] = Bo(t.trim, a, this.units, n);
    }), this.cost = $(t.cost) ? t.cost : null, this.grain = $(t.grain) ? (r = t == null ? void 0 : t.grain) == null ? void 0 : r.toLowerCase() : "", this.multiEdit = t.multiEdit, this.type = t.type, this.preventGrainRotation = !0, this.notes = t != null && t.notes ? (o = t.notes) == null ? void 0 : o.replace(/,/g, "") : "";
  }
  //change the units of the stock
  changeUnits(t, n, i) {
    if (!(t === "decimal" || t === "fraction")) return;
    this.units = t;
    function s(o) {
      return o ? Q(o, t, !1, !1, i) : null;
    }
    this.l = s(this.l), this.w = s(this.w), this.t = s(this.t), ["x1", "x2", "y1", "y2"].forEach((o) => {
      var a;
      this.trim[o] = $((a = this.trim) == null ? void 0 : a[o]) ? s(this.trim[o]) : null;
    });
  }
  //change the type of stock
  changeType(t) {
    switch (t !== "sheet" && (this.grain = ""), t) {
      case "linear":
        this.trim.y1 = 0, this.trim.y2 = 0;
        break;
      case "roll":
        this.trim.x1 = 0, this.trim.x2 = 0, this.trim.y1 = 0, this.trim.y2 = 0, this.t = null;
        break;
    }
  }
  //create an id from an index
  createId(t, n = 0) {
    this.id = `${t + 1}.${n}`;
  }
  isSquare() {
    return this.l === this.w;
  }
  getWarnings() {
    this.warnings = [], ["q"].forEach((t) => this.warnings.push(...ut[t](this[t])));
  }
  validate() {
    return this.issues = [], ["l", "w", "t"].forEach((t) => this.issues.push(...ut[t](this[t]))), this.issues.push(...ut.trim(this)), this.getWarnings(), this.issues;
  }
}
class jo {
  constructor(t, n = !1) {
    m(this, "readonly");
    m(this, "id");
    m(this, "listId");
    m(this, "units", "decimal");
    m(this, "l");
    m(this, "w");
    m(this, "t");
    m(this, "q", 1);
    m(this, "name", "");
    m(this, "material", "");
    m(this, "cost");
    m(this, "orientationLock");
    m(this, "selectedMaterial");
    m(this, "selected", !1);
    //used for multiple editing
    m(this, "multiEdit", !1);
    m(this, "issues", []);
    m(this, "warnings", []);
    m(this, "notes", "");
    m(this, "stockLock");
    m(this, "stockMatch");
    m(this, "customData");
    //objects
    m(this, "machining");
    m(this, "trim", Object.fromEntries(
      cs.map((t) => [t, 0])
    ));
    m(this, "banding", Object.fromEntries(
      Si.map((t) => [t, !1])
    ));
    m(this, "bandingOptions", Object.fromEntries([
      ...Si,
      "all"
    ].map((t) => [t, {}])));
    m(this, "finish", Object.fromEntries(
      Zi.map((t) => [t, ""])
    ));
    m(this, "finishOptions", Object.fromEntries(
      Zi.map((t) => [t, {}])
    ));
    var s, r, o, a, l;
    t = t = Ri(t), this.units = t.units, this.readonly = t.readonly, this.id = t.id, this.listId = t != null && t.listId ? t.listId : Date.now().toString() + _m(), ["l", "w", "t"].forEach((u) => {
      this[u] = Bo(t, u, this.units, n);
    }), this.q = $(t == null ? void 0 : t.q) ? typeof t.q == "string" ? parseInt(t.q) : t.q : null, this.name = $(t.name) ? _r(t.name).toUpperCase() : "", this.material = $(t.material) ? t.material.trim().toUpperCase() : "", this.multiEdit = t.multiEdit, this.notes = t != null && t.notes ? (s = t.notes) == null ? void 0 : s.replace(/,/g, "") : "", this.stockLock = (t == null ? void 0 : t.stockLock) ?? [];
    for (const u of Object.keys(this.trim))
      this.trim[u] = Bo(t.trim, u, this.units, n);
    for (const u of Object.keys(this.banding))
      this.banding[u] = $((r = t == null ? void 0 : t.banding) == null ? void 0 : r[u]) ? t.banding[u] : !1;
    for (const u of Object.keys(this.bandingOptions))
      this.bandingOptions[u] = $((o = t == null ? void 0 : t.bandingOptions) == null ? void 0 : o[u]) ? t.bandingOptions[u] : {};
    for (const u of Object.keys(this.finish))
      this.finish[u] = $((a = t == null ? void 0 : t.finish) == null ? void 0 : a[u]) ? t.finish[u] : "";
    for (const u of Object.keys(this.finishOptions))
      this.finishOptions[u] = $((l = t == null ? void 0 : t.finishOptions) == null ? void 0 : l[u]) ? t.finishOptions[u] : {};
    this.orientationLock = $(t.orientationLock) ? t.orientationLock.toLowerCase() : "", this.machining = new Oy(t.machining ?? {
      holes: [],
      hingeHoles: [],
      corners: []
    }), this.customData = (t == null ? void 0 : t.customData) ?? {};
  }
  /**
   * change the units of the shape
   * @param {String} newUnits
   */
  changeUnits(t, n, i) {
    if (!(t === "decimal" || t === "fraction")) return;
    this.units = t;
    function s(o) {
      return o ? Q(o, t, !1, !1, i) : null;
    }
    this.l = s(this.l), this.w = s(this.w), this.t = s(this.t), ["x1", "x2", "y1", "y2"].forEach((o) => {
      var a;
      this.trim[o] = $((a = this.trim) == null ? void 0 : a[o]) ? s(this.trim[o]) : null;
    });
  }
  isSquare() {
    return this.l === this.w;
  }
  /**
   * change the type of the stock
   * @param {String} newType
   */
  changeStockType(t) {
    switch (t) {
      case "sheet":
      case "roll":
        this.orientationLock = "", t === "roll" && (this.t = null);
        break;
      case "linear":
        this.orientationLock = "", this.banding = Object.fromEntries(
          Si.map((n) => [n, !1])
        );
        break;
    }
  }
  /**
   * create an id from an index
   * @param {Integer} index
   * @param {Integer} secondaryIndex
   */
  createId(t, n = 0) {
    this.id = `${t + 1}.${n}`;
  }
  getLongSide() {
    return Q(this.l) > Q(this.w) ? Q(this.l) : Q(this.w);
  }
  getShortSide() {
    return Q(this.l) < Q(this.w) ? Q(this.l) : Q(this.w);
  }
  getRotatedDimensions() {
    return ["l", "w"].includes(this.orientationLock) ? {
      name: this.name,
      listId: this.listId,
      l: this.orientationLock === "l" ? this.getLongSide() : this.getShortSide(),
      w: this.orientationLock === "l" ? this.getShortSide() : this.getLongSide(),
      orientationLock: this.orientationLock
    } : {
      name: this.name,
      l: this.getLongSide(),
      w: this.getShortSide(),
      orientationLock: this.orientationLock
    };
  }
  getTrimmedDimensions(t = !1) {
    let n = { l: Q(this.l), w: Q(this.w) };
    return t && (n = this.getRotatedDimensions()), {
      name: this.name,
      listId: this.listId,
      l: n.l - (this.trim.x1 + this.trim.x2),
      w: n.w - (this.trim.y1 + this.trim.y2),
      orientationLock: this.orientationLock
    };
  }
  //used to apply a single trim value to all sides
  applyPartTrim(t, n) {
    if (!this.readonly)
      if (t = Q(t), this.trim) {
        for (const i in this.trim)
          this.trim[i] = t;
        n === "linear" && (this.trim.y1 = 0, this.trim.y2 = 0);
      } else
        this.trim = {
          x1: t,
          x2: t,
          y1: n !== "linear" ? t : 0,
          y2: n !== "linear" ? t : 0
        };
  }
  /**
   * to align with Shape
   * @remarks input shapes are always 0
   */
  get rot() {
    return 0;
  }
  validate(t, n, i = 0, s = !1) {
    return this.issues = [], ["l", "w", "t"].forEach((r) => {
      this.issues.push(...ut[r](this[r]));
    }), i = Q(i), this.issues.push(...ut.partTrim(this, i)), this.issues.push(...ut.trim(this)), ut.machining(this), this.getWarnings(t, n, i, s), this.issues;
  }
  getWarnings(t, n, i = 0, s = !1) {
    this.warnings = [], ["q"].forEach((r) => {
      this.warnings.push(...ut[r](this[r]));
    }), t.length && !s && this.warnings.push(...ut.stockMatch(this, t, n, i));
  }
}
class Tr {
  constructor(t) {
    m(this, "id");
    m(this, "parentID");
    m(this, "name");
    m(this, "x");
    m(this, "y");
    m(this, "l");
    m(this, "w");
    m(this, "t");
    m(this, "q");
    m(this, "material");
    m(this, "grain");
    m(this, "orientationLock");
    m(this, "duplicate");
    m(this, "trimmed");
    m(this, "preventAutoRotation");
    m(this, "preventGrainRotation");
    m(this, "units");
    m(this, "issues", []);
    m(this, "stock");
    m(this, "stockId");
    //used when object is compressed
    m(this, "cost");
    m(this, "offcut");
    m(this, "notes");
    //for user notes
    //objects
    m(this, "_trim", Object.fromEntries(
      cs.map((t) => [t, 0])
    ));
    m(this, "customData");
    this.initRectangle(t);
  }
  validateRectangle(t) {
    dn(this) || ["x", "y", "l", "w", "t"].forEach((n) => {
      this.createIssues(ut[n](t[n]));
    }), $n(this) && "q" in t && this.createIssues(ut.q((t == null ? void 0 : t.q) ?? 0, t.autoAdd)), "q" in t && this.isShape() && !this.isGroup() && !this.isUserGroup() && this.createIssues(ut.q((t == null ? void 0 : t.q) ?? 0)), "customData" in t && this.createIssues(ut.customData((t == null ? void 0 : t.customData) ?? {}));
  }
  initRectangle(t, n = !1) {
    var s, r, o;
    if (!n) {
      if (this.validateRectangle(t), this.issues.length) return;
      this.id = $(t.id) ? t.id.toString() : this.id || null, this.setParentID(), $(t == null ? void 0 : t.q) ? typeof t.q == "string" ? this.q = parseInt(t.q) : this.q = t.q : this.q = 0, this.name = $(t.name) && ((s = t == null ? void 0 : t.name) != null && s.length) ? (r = xm(_r(t == null ? void 0 : t.name))) == null ? void 0 : r.toUpperCase() : null, $(t == null ? void 0 : t.cost) ? typeof t.cost == "string" ? this.cost = parseFloat(t.cost) : typeof t.cost == "number" && (this.cost = t.cost) : this.cost = 0, this.material = $(t.material) ? t.material.trim().toLowerCase() : null, this.duplicate = $(t == null ? void 0 : t.duplicate) ? t.duplicate : !1, this.grain = typeof t.grain < "u" && $(t == null ? void 0 : t.grain) ? t.grain.toLowerCase() : null, this.trimmed = $(t == null ? void 0 : t.trimmed) ? t.trimmed : !1, this.offcut = $(t == null ? void 0 : t.offcut) ? t.offcut : !1, this.notes = typeof (t == null ? void 0 : t.notes) == "string" && t.notes.length ? t.notes.replace(/,/g, "").substring(0, 200) : "", this.customData = (t == null ? void 0 : t.customData) ?? {};
      try {
        this.trim = t == null ? void 0 : t.trim;
      } catch (a) {
        if ((o = a == null ? void 0 : a.cause) != null && o.issues) this.issues.push(...a.cause.issues);
        else throw new Error("error when attempting to set trim");
      }
    }
    [
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
    ].forEach((a) => {
      let l = t[a.key];
      if (!$(l))
        return this[a.key] = this[a.key] || a.default;
      typeof l == "string" && (l = Q(l)), this[a.key] = l;
    }), !(t != null && t.preventAutoRotation) && !t.trimmed && this.w > this.l && ([this.l, this.w] = [this.w, this.l], this.grain && !(t != null && t.preventGrainRotation) && (this.grain = Li(this.grain))), $(t == null ? void 0 : t.stock) && ($n(t.stock) ? this.stock = t.stock : this.stock = new Bn(t.stock), this.stockId = this.stock.id);
  }
  updateRectangle(t) {
    t.preventAutoRotation = !0, this.initRectangle(t, !0);
  }
  set trim(t) {
    if (this._trim = Object.fromEntries(
      cs.map((n) => [n, 0])
    ), !!vs(t))
      for (const n in cs) {
        let i;
        if (typeof t[n] == "string") {
          const s = Q(t[n]);
          isNaN(s) || s < 0 ? (this.issues.push(
            this.createIssue(
              `${t[n] ?? "N/A"} is not a valid value for trim: ${n}`
            )
          ), i = 0) : i = s;
        } else
          i = t[n];
        this._trim[n] = i;
      }
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
  getCopyNumber() {
    return typeof this.id != "number" && this.id.includes(".") ? parseInt(this.id.split(".")[1]) : 0;
  }
  createIssues(t) {
    t != null && t.length && t.forEach((n) => {
      this.issues.push(this.createIssue(n));
    });
  }
  createIssue(t) {
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
    const s = (r = this == null ? void 0 : this.name) != null && r.length ? this.name.toUpperCase() : this.parentID;
    return s ? `${t} [${n.charAt(0).toUpperCase() + n.slice(1)} ${s}]` : t;
  }
  dimensions() {
    return {
      id: this.id,
      l: this.l,
      w: this.w,
      t: this.t
    };
  }
  getRotatedDimensions() {
    return ["l", "w"].includes(this.orientationLock) ? {
      l: this.orientationLock === "l" ? this.getLongSide() : this.getShortSide(),
      w: this.orientationLock === "l" ? this.getShortSide() : this.getLongSide(),
      orientationLock: this.orientationLock
    } : {
      l: this.getLongSide(),
      w: this.getShortSide(),
      orientationLock: this.orientationLock
    };
  }
  coords() {
    return {
      id: this.id,
      x: this.x,
      y: this.y
    };
  }
  hasCoords(t, n) {
    return this.x === t && this.y === n;
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
  getSide(t) {
    switch (t) {
      case "bottom":
        return new Xi({
          x1: this.x,
          x2: this.x + this.l,
          y1: this.y,
          y2: this.y,
          type: "bottom"
          // parentID: this.id
        });
      case "right":
        return new Xi({
          x1: this.x + this.l,
          x2: this.x + this.l,
          y1: this.y,
          y2: this.y + this.w,
          type: "right"
          // parentID: this.id
        });
      case "top":
        return new Xi({
          x1: this.x,
          x2: this.x + this.l,
          y1: this.y + this.w,
          y2: this.y + this.w,
          type: "top"
          // parentID: this.id
        });
      case "left":
        return new Xi({
          x1: this.x,
          x2: this.x,
          y1: this.y,
          y2: this.y + this.w,
          type: "left"
          // parentID: this.id
        });
    }
  }
  getTopPosition(t = !0, n = null) {
    var i;
    if (t && typeof ((i = this.stock) == null ? void 0 : i.getBladeWidth) > "u" && n === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return t ? this.y + this.w + ((this.stock.getBladeWidth() || n) ?? 0) : this.y + this.w;
  }
  getRightPosition(t = !0, n = null) {
    var i;
    if (t && typeof ((i = this.stock) == null ? void 0 : i.getBladeWidth) > "u" && n === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return t ? this.x + this.l + ((this.stock.getBladeWidth() || n) ?? 0) : this.x + this.l;
  }
  getBottomPosition(t = !0, n = null) {
    var i;
    if (t && typeof ((i = this.stock) == null ? void 0 : i.getBladeWidth) > "u" && n === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return t ? this.y - ((this.stock.getBladeWidth() || n) ?? 0) : this.y;
  }
  getLeftPosition(t = !0, n = null) {
    var i;
    if (t && typeof ((i = this.stock) == null ? void 0 : i.getBladeWidth) > "u" && n === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return t ? this.x - ((this.stock.getBladeWidth() || n) ?? 0) : this.x;
  }
  sharesSide(t, n = 0, i = null) {
    switch (i) {
      case "left":
        return t.x + t.l + n === this.x;
      case "right":
        return t.x === this.x + this.l + n;
      case "bottom":
        return t.y + t.w + n === this.y;
      case "top":
        return t.y === this.y + this.w + n;
    }
    return !1;
  }
  sameSide(t, n = null) {
    switch (n) {
      case "left":
        return t.x === this.x;
      case "right":
        return t.x + t.l === this.x + this.l;
      case "bottom":
        return t.y === this.y;
      case "top":
        return t.y + t.w === this.y + this.w;
    }
    return !1;
  }
  //considers if the shape can rotate
  getLongestDimension(t) {
    return this.orientationLock ? this[t] : this.getLongSide();
  }
  getArea() {
    return this.w * this.l;
  }
  getCoords(t, n = !1) {
    const i = new Ue(this.x + this.l, this.y);
    i.corner = "bottomRight";
    const s = new Ue(this.x, this.y + this.w);
    if (s.corner = "topLeft", (t == null ? void 0 : t.cutType) !== "efficiency" && !n)
      return [s, i];
    const r = new Ue(this.x, this.y);
    r.corner = "bottomLeft";
    const o = new Ue(this.x + this.l, this.y + this.w);
    return o.corner = "topRight", [r, s, o, i];
  }
  getCorners() {
    return {
      bottomLeft: new Ue(this.x, this.y),
      topLeft: new Ue(this.x, this.y + this.w),
      topRight: new Ue(this.x + this.l, this.y + this.w),
      bottomRight: new Ue(this.x + this.l, this.y)
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
  getTrimmedDimensions(t = !1) {
    let n = { l: this.l, w: this.w };
    return t && (n = this.getRotatedDimensions()), this.trimmed ? n : {
      l: n.l - (this.trim.x1 + this.trim.x2),
      w: n.w - (this.trim.y1 + this.trim.y2)
    };
  }
  //trim the rectangle
  trimDimensions() {
    var t, n, i, s;
    return this.trimmed ? !1 : (this.trim && Object.values(this.trim).filter((r) => !isNaN(parseFloat(String(r)))).length && ($(this.l) && (this.l -= ((t = this == null ? void 0 : this.trim) != null && t.x1 ? this.trim.x1 : 0) + ((n = this == null ? void 0 : this.trim) != null && n.x2 ? this.trim.x2 : 0), this.l <= 0 && (console.error(this), this.issues.push(this.createIssue("Applying trim has produced a negative length")))), $(this.w) && (this.w -= ((i = this == null ? void 0 : this.trim) != null && i.y1 ? this.trim.y1 : 0) + ((s = this == null ? void 0 : this.trim) != null && s.y2 ? this.trim.y2 : 0), this.w <= 0 && (console.error(this), this.issues.push(this.createIssue("Applying trim has produced a negative width"))))), this.trimmed = !0, !0);
  }
  /**
   * change the size of the rectangle back to the original size
   */
  removeTrim() {
    var t, n, i, s;
    if (this.trimmed) {
      if (this.l += (typeof ((t = this == null ? void 0 : this.trim) == null ? void 0 : t.x1) == "number" ? this.trim.x1 : 0) + (typeof ((n = this == null ? void 0 : this.trim) == null ? void 0 : n.x2) == "number" ? this.trim.x2 : 0), this.w += (typeof ((i = this == null ? void 0 : this.trim) == null ? void 0 : i.y1) == "number" ? this.trim.y1 : 0) + (typeof ((s = this == null ? void 0 : this.trim) == null ? void 0 : s.y2) == "number" ? this.trim.y2 : 0), this.l <= 0)
        throw new Error(`trimming this ${this.id} has produced a negative length`);
      if (this.w <= 0)
        throw new Error(`trimming this ${this.id} has produced a negative width`);
      this.trimmed = !1;
    }
  }
  getUntrimmedDimensions() {
    var i, s, r, o;
    if (!this.trimmed) return { l: this.l, w: this.w };
    const t = this.getLongSide(), n = this.getShortSide();
    return {
      l: t + (typeof ((i = this == null ? void 0 : this.trim) == null ? void 0 : i.x1) == "number" ? this.trim.x1 : 0) + (typeof ((s = this == null ? void 0 : this.trim) == null ? void 0 : s.x2) == "number" ? this.trim.x2 : 0),
      w: n + (typeof ((r = this == null ? void 0 : this.trim) == null ? void 0 : r.y1) == "number" ? this.trim.y1 : 0) + (typeof ((o = this == null ? void 0 : this.trim) == null ? void 0 : o.y2) == "number" ? this.trim.y2 : 0)
    };
  }
  isIdentical(t) {
    if (this.constructor !== t.constructor) return !1;
    if (dn(this)) {
      if (t.id === this.id) return !0;
    } else if (t.parentID === this.parentID) return !0;
    if (this.t !== t.t || this.orientationLock !== t.orientationLock || !(this.w === t.w && this.l === t.l || this.w === t.l && this.l === t.w)) return !1;
    const i = this.trim, s = t.trim;
    return !i || !s ? i === s : i.x1 === s.x1 && i.x2 === s.x2 && i.y1 === s.y1 && i.y2 === s.y2;
  }
  /**
   * is this rectangle a square
   */
  isSquare() {
    return this.l === this.w;
  }
  getDistancesToContainerEdges(t) {
    return [
      this.x - t.x,
      t.l - (this.x + this.l),
      t.w - (this.y + this.w),
      this.y - t.y
    ];
  }
  isInsideStock(t) {
    return !(this.x + this.l > t.l || this.y + this.w > t.w || this.x < 0 || this.y < 0);
  }
  //create a rectangle used to detect proximity to other shapes
  createProximityRectangle(t) {
    if (!t || t < 0) return null;
    let n = this.x - t, i = this.y - t, s = this.l + t * 2, r = this.w + t * 2;
    n < 0 && (s += n, n = 0), i < 0 && (r += i, i = 0), s = Math.max(0, s), r = Math.max(0, r);
    const o = new Tr({
      id: `${this.id}-proximity`,
      name: "proximity",
      x: n,
      y: i,
      l: s,
      w: r,
      preventAutoRotation: !0
    });
    return Yu([
      () => Ut(o.x).to.be.greaterThanOrEqual(0),
      () => Ut(o.y).to.be.greaterThanOrEqual(0),
      () => Ut(o.l).to.be.greaterThan(this.l),
      () => Ut(o.w).to.be.greaterThan(this.w)
    ]), o;
  }
  isShape() {
    return vn(this);
  }
  isSegment() {
    return qA(this);
  }
  isStock() {
    return $n(this);
  }
  isGroup() {
    return dn(this);
  }
  isUserGroup() {
    return tf(this);
  }
}
class ef extends Tr {
  constructor(n) {
    super(n);
    m(this, "type");
    m(this, "saw");
    m(this, "algoBenchmark");
    //used by evo
    m(this, "shapes", []);
    switch (this.shapes = n.shapes, ["sheet", "linear", "roll", null, void 0, ""].includes(n.type) ? this.type = n.type : this.issues.push(`Container type ${n.type ?? "N/A"} is not valid`), this.type || (this.type = "sheet"), this.setSaw(n), this.cutType) {
      case "beam":
        (!$(this.t) || this.t <= 0) && this.issues.push(this.createIssue("Stock for beam saws must have a thickness set"));
        break;
    }
  }
  setSaw(n) {
    var i, s, r, o;
    if ($(n) || (this.saw = new si(null)), $(n == null ? void 0 : n.saw)) {
      if (!((s = n == null ? void 0 : n.saw) != null && s.cutType)) {
        const { cutType: a, cutPreference: l } = Zl(n.saw.cutPreference);
        n.saw.cutType = a, n.saw.cutPreference = l;
      }
    } else {
      n.saw = {};
      const { cutType: a, cutPreference: l } = Zl(n.cutPreference);
      n.saw.cutType = a, n.saw.cutPreference = l, $(n == null ? void 0 : n.bladeWidth) && (n.saw.bladeWidth = n.bladeWidth), $((i = n == null ? void 0 : n.blade) == null ? void 0 : i.width) && (n.saw.bladeWidth = n.blade.width), $(n == null ? void 0 : n.efficiencyOptions) && (n.saw.efficiencyOptions = n.efficiencyOptions), $(n == null ? void 0 : n.guillotineOptions) && (n.saw.guillotineOptions = n.guillotineOptions), $(n == null ? void 0 : n.stackHeight) && (n.saw.stackHeight = n.stackHeight);
    }
    try {
      $(n == null ? void 0 : n.saw) && (UA(n.saw) ? this.saw = n.saw : this.saw = new si(n.saw, this.type)), (o = (r = this.saw) == null ? void 0 : r.issues) != null && o.length && this.issues.push(...this.saw.issues);
    } catch (a) {
      throw new Error("error creating saw", { cause: a });
    }
  }
  get cutType() {
    var n, i, s, r;
    return $((n = this == null ? void 0 : this.saw) == null ? void 0 : n.cutType) ? this.saw.cutType : (i = this.stock) != null && i.isStock() ? null : ((r = (s = this == null ? void 0 : this.stock) == null ? void 0 : s.saw) == null ? void 0 : r.cutType) ?? null;
  }
  get cutPreference() {
    var n, i, s, r;
    return $((n = this.saw) == null ? void 0 : n.cutPreference) ? this.saw.cutPreference : (i = this.stock) != null && i.isStock() ? null : ((r = (s = this.stock) == null ? void 0 : s.saw) == null ? void 0 : r.cutPreference) ?? null;
  }
  get guillotineOptions() {
    var n, i, s, r;
    return $((n = this.saw) == null ? void 0 : n.guillotineOptions) ? this.saw.guillotineOptions : (i = this.stock) != null && i.isStock() ? null : ((r = (s = this == null ? void 0 : this.stock) == null ? void 0 : s.saw) == null ? void 0 : r.guillotineOptions) ?? null;
  }
  get efficiencyOptions() {
    var n, i, s, r;
    return $((n = this.saw) == null ? void 0 : n.efficiencyOptions) ? this.saw.efficiencyOptions : (i = this.stock) != null && i.isStock() ? null : ((r = (s = this == null ? void 0 : this.stock) == null ? void 0 : s.saw) == null ? void 0 : r.efficiencyOptions) ?? null;
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
    var i, s, r;
    const n = (((i = this == null ? void 0 : this.saw) == null ? void 0 : i.bladeWidth) || ((r = (s = this == null ? void 0 : this.stock) == null ? void 0 : s.saw) == null ? void 0 : r.bladeWidth)) ?? 0;
    return isNaN(n) ? 0 : n;
  }
  getStock() {
    return $n(this) ? this : this != null && this.stock ? this.stock : null;
  }
}
class si {
  constructor(t, n = "sheet") {
    m(this, "issues");
    m(this, "bladeWidth");
    m(this, "cutType");
    m(this, "cutPreference");
    m(this, "guillotineOptions");
    m(this, "efficiencyOptions");
    m(this, "stackHeight");
    m(this, "stockType");
    m(this, "options");
    switch (t = Ri(t), this.options = qs({}, t == null ? void 0 : t.options, {
      stockSelection: "efficiency",
      minSpacing: 0,
      minSpacingDimension: {}
    }), this.stackHeight = (t == null ? void 0 : t.stackHeight) ?? null, this.stockType = (t == null ? void 0 : t.stockType) ?? n, this.issues = [], ["sheet", "linear", "roll"].includes(this.stockType) || this.issues.push(`Saw stock type: ${this.stockType} not valid`), this.stockType || (this.stockType = "sheet"), this.cutType = t == null ? void 0 : t.cutType, this.stockType) {
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
    switch (this.cutPreference = t == null ? void 0 : t.cutPreference, this.cutType) {
      case "guillotine":
        ["l", "w", "flex"].includes(this.cutPreference) || this.issues.push(`Saw cut preference: ${this.cutPreference || "N/A"} not valid for cut type: ${this.cutType || "N/A"}`), this.cutType === "guillotine" && this.cutPreference === "l" && this.stockType === "roll" && this.issues.push(`Cut preference: ${this.cutPreference || "N/A"} not valid for cut type: ${this.cutType || "N/A"} and stock type: ${this.stockType}`), this.options.minSpacing = 0;
        break;
      case "beam":
        ["l", null, void 0].includes(this.cutPreference) || this.issues.push(`Saw cut preference: ${this.cutPreference || "N/A"} not valid for cut type: ${this.cutType || "N/A"}`), this.options.minSpacing = 0;
        break;
    }
    switch ($(t == null ? void 0 : t.bladeWidth) ? typeof t.bladeWidth == "string" ? this.bladeWidth = Q(t.bladeWidth) : this.bladeWidth = t.bladeWidth : this.bladeWidth = 0, (isNaN(this.bladeWidth) || this.bladeWidth < 0) && (this.issues.push(`Blade width: ${this.bladeWidth ?? "N/A"} is not valid`), this.bladeWidth = 0), this.stockType) {
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
        this.efficiencyOptions = qs({}, t == null ? void 0 : t.efficiencyOptions, { primaryCompression: "y" });
        break;
      case "guillotine":
        this.guillotineOptions = qs({}, t == null ? void 0 : t.guillotineOptions, { strategy: "efficiency", maxPhase: null });
        break;
      case "beam":
        this.guillotineOptions = qs({}, t == null ? void 0 : t.guillotineOptions, { strategy: "efficiency", maxPhase: null }), this.cutPreference = "l", [null, void 0].includes(this.stackHeight) && this.issues.push("Beam saws require a stack height to be set");
        break;
    }
  }
  clone() {
    const t = structuredClone(this);
    return new si(t);
  }
}
class Bn extends ef {
  constructor(n) {
    n = Ri(n), n.preventAutoRotation = (n == null ? void 0 : n.type) === "roll", n.autoAdd && !n.q && (n.q = 1);
    super(n);
    m(this, "_id");
    //used for mongo
    m(this, "autoAdd");
    m(this, "allowExactFitShapes");
    m(this, "analysis");
    m(this, "tidy");
    m(this, "used");
    m(this, "stack");
    m(this, "winningStrategy");
    //used for reporting
    m(this, "unusable");
    //used by stock matching
    m(this, "duplicatePattern");
    m(this, "score");
    m(this, "rootSegment");
    delete this.stock, this._id = n == null ? void 0 : n._id, this.autoAdd = $(n == null ? void 0 : n.autoAdd) ? n.autoAdd : !1, this.allowExactFitShapes = $(n == null ? void 0 : n.allowExactFitShapes) ? n.allowExactFitShapes : !1, this.analysis = $(n.analysis) ? n.analysis : null, this.tidy = $(n == null ? void 0 : n.tidy) ? n.tidy : !1, this.algoBenchmark = null, this.used = $(n == null ? void 0 : n.used) ? n.used : !1, this.stack = $(n == null ? void 0 : n.stack) ? n.stack : !1, this.duplicatePattern = (n == null ? void 0 : n.duplicatePattern) ?? null, this.initStock(n);
  }
  initStock(n) {
    switch (this.type) {
      case "linear":
      case "roll":
        this.trim.y1 = 0, this.trim.y2 = 0, this.grain = null;
        break;
    }
    this.validateStock(n), this.issues.length;
  }
  reset() {
    this.used = !1, this.stack = null, this.score = null, this.rootSegment = null, this.tidy = null, this.analysis = null, this.duplicatePattern = null, this.shapes = [];
  }
  validateStock(n) {
    ["grain"].forEach((i) => {
      this.createIssues(ut[i](n[i]));
    }), this.createIssues(ut.trim(this));
  }
  /**
   * compress for saving / transfer
   */
  save() {
    delete this.tidy, delete this.score, delete this.rootSegment, delete this.shapes, this == null || delete this.algoBenchmark, this.stack = $n(this.stack) ? this.stack.id : this.stack, !this.trim.x1 && !this.trim.x2 && !this.trim.y1 && !this.trim.y2 && (this.trim = null);
  }
  resetStrategies() {
    this.algoBenchmark = null;
  }
  isIdentical(n) {
    let i = !1, s = !1, r = !1, o = !1;
    if (this.material === n.material && (i = !0), this.t === n.t && (s = !0), this.l === n.l && (r = !0), this.w === n.w && (o = !0), i && s && r && o) return !0;
  }
  hasStack() {
    return typeof this.stack == "number";
  }
  isStacked() {
    return $n(this.stack) || typeof this.stack == "string";
  }
  clone(n = null) {
    const i = this.id.split(".");
    n ? i.pop() : (n = parseInt(i.pop()), n++), i.push(n.toString());
    const s = i.join("."), r = structuredClone(this);
    return r.id = s, r.used = !1, r.duplicate = !0, r.stack = !1, r.saw = this.saw, new Bn(r);
  }
}
class LA extends Tr {
  constructor(n) {
    super(n);
    m(this, "addToInventory");
    //for front end selection
    m(this, "added");
    //for adding to inputStock
    m(this, "placementOrder");
    m(this, "flex");
    this.cost = this.getCost(), this.addToInventory = (n == null ? void 0 : n.addToInventory) ?? !0, this.added = !1, this.placementOrder = (n == null ? void 0 : n.placementOrder) ?? null, this.offcut = !0;
  }
  compressForSaving() {
    var n;
    this.stockId = (this == null ? void 0 : this.stockId) ?? ((n = this == null ? void 0 : this.stock) == null ? void 0 : n.id), delete this.stock, delete this._trim, delete this.trimmed;
  }
  getCost() {
    var n;
    return (n = this.stock) != null && n.isStock() && this.stock ? parseFloat((this.getArea() / this.stock.getArea() * this.stock.cost).toFixed(2)) : 0;
  }
}
function DA({
  offcuts: e,
  stockList: t,
  preventAutoRotation: n = !0
}) {
  return !e || !(e != null && e.length) ? [] : e.map((i) => {
    const s = t.find((o) => {
      var a;
      return o.id === (((a = i == null ? void 0 : i.stock) == null ? void 0 : a.id) ?? (i == null ? void 0 : i.stockId));
    });
    return i.stock = s, n && (i.preventAutoRotation = !0), new LA(i);
  });
}
class jn extends Tr {
  constructor(n) {
    n = Ri(n);
    super(n);
    m(this, "added");
    m(this, "guillotineData");
    m(this, "stockLock");
    m(this, "orientationModel");
    m(this, "score");
    m(this, "bestScore");
    m(this, "placementOrder");
    //groups
    m(this, "groupPlacementOrder");
    m(this, "group");
    m(this, "groupID");
    m(this, "inGroup");
    //is the shape currently part of at least one group
    m(this, "inUserGroup");
    //is the shape currently part of a user group`
    m(this, "addedAsGroup");
    m(this, "isFirstShape");
    m(this, "firstShapeSampleRotations", []);
    //used for setting the rotation of the first shape (guillotine)
    m(this, "index");
    //used for ptx
    m(this, "patternMatch");
    //used for stack detection
    m(this, "stockMatch");
    m(this, "minSpacing");
    m(this, "priority");
    m(this, "weighting", {});
    //objects
    m(this, "machining");
    m(this, "_banding", Object.fromEntries(
      Si.map((n) => [n, !1])
    ));
    m(this, "_finish", Object.fromEntries(
      Zi.map((n) => [n, ""])
    ));
    this.initShape(n);
  }
  initShape(n, i = !1) {
    var s;
    if (!i) {
      if (this.validateShape(n), this.issues.length) throw new Error(this.issues.join(`
`));
      n.orientationLock = (s = n == null ? void 0 : n.orientationLock) == null ? void 0 : s.toLowerCase(), (n == null ? void 0 : n.orientationLock) === " " && (n.orientationLock = ""), this.orientationLock = $(n == null ? void 0 : n.orientationLock) && this.l !== this.w ? n.orientationLock : null, $(n == null ? void 0 : n.stockLock) ? Array.isArray(n == null ? void 0 : n.stockLock) && (this.stockLock = n.stockLock.map((r) => r.toString())) : this.stockLock = [], this.banding = n == null ? void 0 : n.banding, this.finish = n == null ? void 0 : n.finish, this.machining = $(n == null ? void 0 : n.machining) ? new Oy(n.machining) : null;
    }
    this.added = $(n == null ? void 0 : n.added) ? n.added : !1, this.initGuillotineData(n), this.inGroup = $(n == null ? void 0 : n.inGroup) ? n.inGroup : this.inGroup || !1, this.inUserGroup = $(n == null ? void 0 : n.inUserGroup) ? n.inUserGroup : this.inUserGroup || !1, this.groupID = $(n == null ? void 0 : n.groupID) ? n.groupID : this.groupID || null, this.addedAsGroup = $(n == null ? void 0 : n.addedAsGroup) ? n.addedAsGroup : this.addedAsGroup || !1, this.score = $(n == null ? void 0 : n.score) ? n.score : this.score || null, this.bestScore = $(n == null ? void 0 : n.bestScore) ? n.bestScore : this.bestScore || {
      x: 0,
      y: 0,
      rot: null,
      total: null,
      group: null
    }, this.placementOrder = $(n == null ? void 0 : n.placementOrder) ? n.placementOrder : this.placementOrder || null, this.groupPlacementOrder = $(n == null ? void 0 : n.groupPlacementOrder) ? n.groupPlacementOrder : this.groupPlacementOrder || null, this.minSpacing = (n == null ? void 0 : n.minSpacing) ?? (this.minSpacing || 0), this.priority = (n == null ? void 0 : n.priority) ?? {};
  }
  initGuillotineData(n) {
    var i, s, r, o, a, l, u, c;
    this.guillotineData = qs({}, n == null ? void 0 : n.guillotineData, {
      firstShape: ((i = this == null ? void 0 : this.guillotineData) == null ? void 0 : i.firstShape) || null,
      myPhase: ((s = this == null ? void 0 : this.guillotineData) == null ? void 0 : s.myPhase) || null,
      myStripParent: ((r = this == null ? void 0 : this.guillotineData) == null ? void 0 : r.myStripParent) || null,
      myStripDirection: ((o = this == null ? void 0 : this.guillotineData) == null ? void 0 : o.myStripDirection) || null,
      stripShapeBatches: {
        subsetUsed: ((l = (a = this == null ? void 0 : this.guillotineData) == null ? void 0 : a.stripShapeBatches) == null ? void 0 : l.subsetUsed) || !1,
        groups: ((c = (u = this == null ? void 0 : this.guillotineData) == null ? void 0 : u.stripShapeBatches) == null ? void 0 : c.groups) || {}
      }
    });
  }
  cloneGuillotineData() {
    var n;
    return (n = this.guillotineData) != null && n.myStripParent && (vn(this.guillotineData.myStripParent) || dn(this.guillotineData.myStripParent)) && (this.guillotineData.myStripParent = this.guillotineData.myStripParent.compress()), structuredClone(this.guillotineData);
  }
  getCopyNumber() {
    return parseInt(this.id.split(".").pop());
  }
  getMinSpacing(n, i = !1) {
    var o, a;
    if (!n) return 0;
    let s = (this == null ? void 0 : this.minSpacing) || ((a = (o = n.saw) == null ? void 0 : o.options) == null ? void 0 : a.minSpacing) || 0;
    const r = n.getBladeWidth();
    return r > s && (s = r), i && (s -= r), s < 0 && (s = 0), s;
  }
  validateShape(n) {
    ["orientationLock", "banding"].forEach((i) => {
      this.createIssues(ut[i](n[i]));
    }), this.machining && this.machining.validateEverything(this);
  }
  //individual shape weighting
  /* calculateWeighting()
  	{
  		// const aspect = this.w / this.l;
  		if ( aspect > 0.5 )
  		{
  			//cater for small parts
  			const area = s.getArea();
  			const areaPercentage = area / maxArea;
  
  			if ( areaPercentage <= 0.1 )
  			{
  				s.weighting.edge = areaPercentage;
  			}
  		}
  		//the closer to zero, the higher the edge weighting
  		this.weighting.edge = 1 - aspect;
  		this.weighting.edge *= 2;
  	} */
  update(n) {
    n = Ri(n), this.initShape(n, !0), this.updateRectangle(n);
  }
  //banding
  set banding(n) {
    if (this._banding = Object.fromEntries(
      Si.map((i) => [i, !1])
    ), !!vs(n))
      for (const i of Si)
        this._banding[i] = $(n == null ? void 0 : n[i]) ? n[i] : !1;
  }
  get banding() {
    return this._banding;
  }
  //get an array of banding in the order L1, L2, W1, W2
  get bandingArray() {
    return cs.map((n) => {
      var i;
      return (i = this.banding) == null ? void 0 : i[n];
    });
  }
  get finish() {
    return this._finish;
  }
  set finish(n) {
    if (this._finish = Object.fromEntries(
      Zi.map((i) => [i, ""])
    ), !!vs(n))
      for (const i of Zi)
        this._finish[i] = $(n == null ? void 0 : n[i]) ? n[i] : "";
  }
  //compress for saving / transfer
  save() {
    var n, i, s;
    delete this.group, (n = this == null ? void 0 : this.guillotineData) == null || delete n.stripShapeBatches, this.stockId = (i = this == null ? void 0 : this.stock) == null ? void 0 : i.id, delete this.stock, delete this.score, delete this.bestScore, Si.every((r) => {
      var o;
      return !((o = this._banding) != null && o[r]);
    }) && (this._banding = null), Zi.every((r) => {
      var o;
      return !((o = this._finish) != null && o[r]);
    }) && (this._finish = null), (s = this.guillotineData) == null || delete s.myStripParent, delete this.score, delete this.inGroup, delete this.groupID, delete this.addedAsGroup;
  }
  isExactFit(n) {
    return this.orientationLock === "w" && this.w === n.w || this.orientationLock === "l" && this.l === n.l || !this.orientationLock && this.w === n.w && this.l === n.l;
  }
  addToStock(n) {
    this.stock = n, this.stockId = n.id, this.added = !0, this.inGroup = !1, n.used = !0, this.grain = n.grain, n != null && n.grain && this.rot && (this.grain = Li(n.grain)), Yu([
      () => Ut(this.isInsideStock(n), `shape ${this.id} is not inside stock`).to.be.true
    ]);
  }
  removeFromStock() {
    this.placementOrder = null, this.stock = null, this.stockId = null, this.added = !1, this.addedAsGroup = !1, this == null || delete this.isFirstShape, dn(this) && this.shapes.forEach((n) => n.removeFromStock());
  }
  setBestScore(n, i = null) {
    const s = {
      x: n.x,
      y: n.y,
      rot: n.rot,
      total: n.score.total,
      score: n.score,
      group: n.group,
      weighting: null,
      point: i
    };
    this.bestScore = s;
  }
  resetBestScore() {
    const n = {
      x: 0,
      y: 0,
      rot: null,
      total: null,
      group: null
    };
    this.bestScore = n, this.resetGuillotineData(!0);
  }
  resetScore() {
    this.score = null, this.resetGuillotineData(!0);
  }
  resetBothScores() {
    this.resetBestScore(), this.resetScore();
  }
  resetPosition() {
    this.x = 0, this.y = 0, this.placementOrder = null, this.resetGuillotineData(!0);
  }
  resetGroupData() {
    this.inGroup = !1, this.group = null, this.groupID = null, this.groupPlacementOrder = null, this.grain = null;
  }
  resetGuillotineData(n = !1) {
    var s, r;
    const i = {
      firstShape: !1,
      myPhase: null,
      myStripDirection: null,
      stripShapeBatches: {
        subsetUsed: !1,
        groups: {}
      }
    };
    n && (i.stripShapeBatches.groups = (r = (s = this.guillotineData) == null ? void 0 : s.stripShapeBatches) == null ? void 0 : r.groups), this.guillotineData = i;
  }
  reset(n = !1, i = !0, s = !1) {
    this.removeFromStock(), this.resetPosition(), this.setRotation(0), this.placementOrder = null, this == null || delete this.isFirstShape, this.patternMatch = !1, n || this.resetBothScores(), s || this.resetGroupData(), this.resetGuillotineData(i);
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
    for (let s = 0; s <= 1; s++)
      this.canRotate(s, n) && this.willItFit(n, s) && i.push(s);
    return i;
  }
  /**
   * checks if a shape can rotate
   * checks for fit and grain
   * does not change the shape's rotation during the checks
   * @returns false if cannot rotate or can rotate but won't fit
   */
  canRotate(n = null, i = null) {
    if (!$(n))
      throw new Error("no rotation provided to canRotate");
    if (n === !0 && (n = 1), n === !1 && (n = 0), this.isSquare() && n || i && !this.willItFit(i, n))
      return !1;
    const s = this.getNecessaryOrientation(i);
    return !(s === "l" && n === 1 || s === "w" && n === 0);
  }
  /**
   * can a shape rotate to produce the specified dimensions on a specific side
   * @todo tests
   */
  canRotateToDimension(n, i, s = null) {
    if (!i) throw new Error("requiredSide not supplied to canRotateToDimension");
    if (this.l !== n && this.w !== n) return !1;
    if (this.l === this.w) return !0;
    const r = this.getLongSide(), o = this.getShortSide();
    if (s) {
      if (i === "l") {
        if (r === n && this.canRotate(0, s) || o === n && this.canRotate(1, s)) return !0;
      } else if (i === "w" && (o === n && this.canRotate(0, s) || r === n && this.canRotate(1, s)))
        return !0;
    } else if (this.orientationLock) {
      if (this.orientationLock === "l")
        return i === "l" && n === r;
      if (this.orientationLock === "w")
        return i === "l" && n === o;
    }
    return !1;
  }
  canRotateToDimensionRange(n, i, s, r = null) {
    if (!s) throw new Error("requiredSide not supplied to canRotateToDimensionRange");
    if (this.l >= n && this.l <= i || this.w >= n && this.w <= i) {
      if (this.l === this.w) return !0;
      const o = this.getLongSide(), a = this.getShortSide();
      if (r) {
        if (s === "l") {
          if (o >= n && o <= i && this.canRotate(0, r) || a >= n && a <= i && this.canRotate(1, r)) return !0;
        } else if (s === "w" && (a >= n && a <= i && this.canRotate(0, r) || o >= n && o <= i && this.canRotate(1, r)))
          return !0;
      } else if (this.orientationLock) {
        if (this.orientationLock === "l")
          return s === "l" && o >= n && o <= i;
        if (this.orientationLock === "w")
          return s === "l" && a >= n && a <= i;
      }
    }
    return !1;
  }
  rotateToDimension(n, i, s) {
    if (!i) throw new Error("requiredSide not supplied to rotateToDimension");
    if (this.l !== n && this.w !== n) return !1;
    if (this.l === this.w) return !0;
    const r = this.getLongSide(), o = this.getShortSide();
    if (i === "l") {
      if (r === n && this.canRotate(0, s)) return this.setRotation(0);
      if (o === n && this.canRotate(1, s)) return this.setRotation(1);
    } else if (i === "w") {
      if (o === n && this.canRotate(0, s)) return this.setRotation(0);
      if (r === n && this.canRotate(1, s)) return this.setRotation(1);
    }
    return !1;
  }
  //get the orientation lock catering for container grain
  convertShapeGrainToOrientationLock(n) {
    if (!n) throw new Error("container not supplied to convertShapeGrainToOrientationLock");
    if (!tc(n)) throw new Error("container is not a container");
    if (dn(this)) return this.orientationLock;
    if (!$(this.orientationLock)) return null;
    const i = n.getStock();
    return $(i.grain) ? this.orientationLock === i.grain ? "l" : "w" : this.orientationLock;
  }
  /**
   * get the orientation lock catering for container grain
   */
  getNecessaryOrientation(n) {
    if (!n) return this.orientationLock;
    if (dn(this)) return this.orientationLock;
    if (!$(this.orientationLock)) return null;
    if (tc(n))
      return this.convertShapeGrainToOrientationLock(n);
    if (dn(this) || tf(this))
      return $(this.orientationLock) ? this.orientationLock : null;
  }
  /**
   * get the required grain rotation
   * checks for stock grain and part orientationLock
   * does not check for fit
   */
  getGrainRotation(n) {
    if (dn(this)) return this.rot;
    if (!$(this.orientationLock)) return null;
    const i = n.getStock();
    return !this.orientationLock || !$(i == null ? void 0 : i.grain) ? null : this.isGroup() ? this.orientationLock === "l" ? 0 : 1 : this.orientationLock === (i == null ? void 0 : i.grain) ? 0 : 1;
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
    if (i === "l") return this.setRotation(0);
    if (i === "w") return this.setRotation(1);
  }
  setRotationToOrientationLockWithoutContainer() {
    if (this.orientationLock === "l") return this.setRotation(0);
    if (this.orientationLock === "w") return this.setRotation(1);
  }
  getBandingLength(n) {
    return n === "x1" || n === "x2" ? this.getShortSide() : n === "y1" || n === "y2" ? this.getLongSide() : 0;
  }
  getPriority(n) {
    var s;
    if (!n) return 0;
    const i = n.parentID;
    return (s = this.priority) != null && s[i] ? this.priority[i] : 0;
  }
  clearPriority() {
    this.priority = {};
  }
  getPerimeterCutVectors() {
    var s;
    const n = (s = this.stock) != null && s.isStock() ? this.stock.getBladeWidth() / 2 : null;
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
  /* getTrimmedDimensions()
  	{
  		if ( this.trimmed )
  			return {
  				l: this.l,
  				w: this.w
  			};
  
  		return {
  			l: this.l - this.trim.x1 - this.trim.x2,
  			w: this.w - this.trim.y1 - this.trim.y2
  		};
  	} */
  /**
   * create cuts around the perimeter of a shape
   * @param {Stock} stock
   * @returns {Array} cuts
   */
  createPerimeterCuts(n = null) {
    let i = [];
    if (n = n || this.stock, !n) throw new Error("stock is required to create a cut");
    return this.getPerimeterCutVectors().forEach((r) => {
      var o;
      return i.push(new va({
        stock: (o = this.stock) != null && o.isStock() ? this.stock : n,
        x1: r.x1,
        x2: r.x2,
        y1: r.y1,
        y2: r.y2,
        type: r.type
      }));
    }), i = i.filter((r) => r.isInsideStock()), i;
  }
  createOffset(n) {
    if (!this.stock) throw new Error("createOffset - stock not defined");
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
    return Iy(n, this, i);
  }
  clone(n = null) {
    const i = this.id.split(".");
    n ? i.pop() : (n = i.pop(), n++), i.push(n);
    const s = i.join("."), r = structuredClone(this);
    return r.id = s, r.added = !1, r.duplicate = !0, delete r.score, delete r.bestScore, delete r.stock, delete r.placementOrder, delete r.inGroup, delete r.addedAsGroup, delete r.groupID, delete r.isFirstShape, new jn(r);
  }
  //this is a compressed version of the shape to help with memory management
  compress() {
    const n = this.cloneGuillotineData();
    return n.myStripParent = jA(this.guillotineData.myStripParent) ? this.guillotineData.myStripParent.id : this.guillotineData.myStripParent, {
      id: this.id,
      x: this.added ? this.x : 0,
      y: this.added ? this.y : 0,
      l: this.l,
      w: this.w,
      added: this.added,
      guillotineData: n,
      placementOrder: this.placementOrder,
      bestScore: this.bestScore,
      inGroup: this.inGroup,
      groupID: this.groupID,
      addedAsGroup: this.addedAsGroup,
      groupPlacementOrder: this.groupPlacementOrder,
      minSpacing: this.minSpacing,
      cloneType: "shape",
      priority: Object.assign({}, this.priority)
    };
  }
  isTooCloseToEdges(n) {
    var s, r;
    const i = ((r = (s = n.saw) == null ? void 0 : s.options) == null ? void 0 : r.minSpacing) || this.minSpacing;
    return i ? this.getDistancesToContainerEdges(n).some((o) => o > 0 && o <= i) : !1;
  }
  validateStripShapeBatches() {
    const n = Object.values(this.guillotineData.stripShapeBatches.groups);
    for (let i = 0; i < n.length; i++) {
      const s = n[i];
      if (s.id !== this.id)
        throw new Error(`strip shape group id does not match shape id ${this.id} ${s.id} ${i}`);
      if (![this.l, this.w].includes(s.dimension))
        throw new Error(`strip shape group dimension does not match shape dimensions ${this.id} ${s.id} ${i} ${this.l} ${this.w} ${s.dimension}`);
    }
  }
  getStripShapeBatchData(n) {
    var i;
    return typeof n != "number" || !((i = this == null ? void 0 : this.guillotineData) != null && i.stripShapeBatches) || !this.guillotineData.stripShapeBatches.groups || !(n in this.guillotineData.stripShapeBatches.groups) ? !1 : this.guillotineData.stripShapeBatches.groups[n];
  }
  isInStripShapeBatch(n) {
    return !!this.getStripShapeBatchData(n);
  }
  isStacked() {
    return this.added && this.stock && this.stock.isStacked();
  }
}
class Ly extends ef {
  constructor(n) {
    var t = (...$M) => (super(...$M), m(this, "firstShape"), m(this, "cuts"), m(this, "phase"), m(this, "merged"), m(this, "children"), m(this, "siblings"), //used by vis only
    m(this, "parent"), m(this, "segmentType"), m(this, "completed"), //used by vis only
    m(this, "rowSegment"), //used by cuts
    m(this, "placementOrder"), m(this, "hasBeamTrim"), m(this, "cutDirection"), this);
    if (n) {
      if (n.preventAutoRotation = !0, t(n), this.validateSegment(n), this.issues.length)
        throw new Error(`Segment validation failed - ${this.issues.join(" ")}`);
      delete this.trim, delete this.trimmed, this.shapes = $(n == null ? void 0 : n.shapes) ? n.shapes : [], this.firstShape = $(n == null ? void 0 : n.firstShape) ? n.firstShape : null, this.cuts = [], this.phase = $(n == null ? void 0 : n.phase) ? n.phase : null, this.merged = $(n == null ? void 0 : n.merged) ? n.merged : !1, this.parent = $(n == null ? void 0 : n.parent) ? n.parent : null, this.children = $(n == null ? void 0 : n.children) ? n.children : [], this.siblings = $(n == null ? void 0 : n.siblings) ? n.siblings : [], this.offcut = $(n == null ? void 0 : n.offcut) ? n.offcut : !1, this.segmentType = $(n == null ? void 0 : n.segmentType) ? n.segmentType : null, this.placementOrder = null, this.cutDirection = $(n == null ? void 0 : n.cutDirection) ? n.cutDirection : "l", this.hasBeamTrim = $(n == null ? void 0 : n.hasBeamTrim) ? n.hasBeamTrim : !1;
    }
  }
  validateSegment(n) {
    var i, s;
    (ve.lessThanOrEqualTo(n.w, 0) || ve.lessThanOrEqualTo(n.l, 0)) && this.issues.push(`Zero / negative dimension - l: ${n.l}, w: ${n.w}.`), (ve.lessThan(n.x, 0) || ve.lessThan(n.y, 0)) && this.issues.push(`Negative position - x: ${n == null ? void 0 : n.x}, y: ${n == null ? void 0 : n.y}.`), n != null && n.stock && (ve.greaterThan(n.x + n.l, n.stock.l) || ve.greaterThan(n.y + n.w, n.stock.w)) && this.issues.push(`Outside of stock ${n.stock.id} - x: ${n.x}, y: ${n.y}, l: ${n.l}, w: ${n.w}, sl: ${(i = n == null ? void 0 : n.stock) == null ? void 0 : i.l}, sw: ${(s = n == null ? void 0 : n.stock) == null ? void 0 : s.w}.`);
  }
  //compress for saving / transfer
  save() {
    var n;
    this.children = this.children.map((i) => ({
      id: i.id,
      x: i.x,
      y: i.y,
      l: i.l,
      w: i.w,
      offcut: i.offcut
    })), this.stockId = (this == null ? void 0 : this.stockId) ?? ((n = this == null ? void 0 : this.stock) == null ? void 0 : n.id), delete this.stock, delete this.shapes, delete this.saw, delete this.siblings, delete this.parent, delete this.trim, this.algoBenchmark = null;
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
  reset() {
    this.stock.used = !1, this.children = [], this.siblings = [], this.parent = null, this.cuts = [], this.phase = null;
  }
}
class di extends jn {
  //used for sorting
  constructor(n) {
    var i, s;
    if (n = Ri(n), !((i = n == null ? void 0 : n.shapes) != null && i.length))
      throw new Error("attempting to create a group with no shapes");
    n.preventAutoRotation = !0;
    super(n);
    m(this, "shapes");
    m(this, "positions");
    m(this, "direction");
    m(this, "container");
    m(this, "outOfBounds");
    m(this, "collision");
    m(this, "counter", 0);
    m(this, "type");
    m(this, "efficiency");
    this.q = 1, delete this._banding, delete this._finish, delete this._trim, this.shapes = n.shapes, this.positions = (s = n == null ? void 0 : n.positions) != null && s.length ? n.positions : [], this.direction = n.direction, this.container = n.container, this.type = (n == null ? void 0 : n.type) ?? "auto", this.initGroup();
  }
  initGroup() {
    var n;
    (n = this == null ? void 0 : this.shapes) != null && n.length && (this.setShapePositions(), this.w > this.l ? this.orientationLock = "w" : this.orientationLock = "l", this.container && (this.efficiency = this[this.direction] / this.container[this.direction]));
  }
  setShapePositions() {
    if (!this.container) return;
    this.positions = [], this.type !== "user" && this.sortShapes();
    let n = 0;
    const i = ZE(this.direction);
    this.shapes.forEach((o, a) => {
      this.positions.push({
        shape: o.id,
        [i]: n,
        [eC(i)]: 0,
        rot: o.rot.valueOf()
      }), o.inGroup = !0, n += a === this.shapes.length - 1 ? o[this.direction] : o[this.direction] + o.getMinSpacing(this.container);
    }), this[this.direction] = n;
    const s = Li(this.direction), r = this.shapes.reduce((o, a) => a[s] > o ? a[s] : o, 0);
    if (this[s] = r, py()) {
      const o = this.shapes.slice(0, -1).reduce((u, c) => u + c.getMinSpacing(this.container), 0), l = this.shapes.reduce((u, c) => u + c[this.direction], 0) + o;
      Yu([
        () => Ut(ve.equalTo(l, this[this.direction]), "group dimension is incorrect in direction").to.be.true,
        () => Ut(n, "currentPosition is incorrect in direction").to.equal(this[this.direction]),
        () => Ut(r, "group dimension in other direction is not correct").to.equal(this[s])
      ]);
    }
    if (this.w > this.container.w || this.l > this.container.l)
      throw new Error(`group ${this.id} is bigger than container - group ${this.l}x${this.w}, container ${this.container.l}x${this.container.w}`);
  }
  //update the shape spacing and overall group dimensions to account for min spacing
  updateShapeSpacing(n) {
    this.container = n, this.setShapePositions(), this.w > this.l ? this.orientationLock = "w" : this.orientationLock = "l", this.container && (this.efficiency = this[this.direction] / this.container[this.direction]);
  }
  //get the area of the shapes (does not include blade width) - overwrites the rectangle method
  getArea() {
    return this.shapes.reduce((n, i) => n + i.getArea(), 0);
  }
  destroy() {
    super.reset();
    for (const n of this.shapes) n.reset(!1, !1, !1);
  }
  reset() {
    super.reset();
    for (const n of this.shapes) n.reset(!1, !1, !0);
  }
  /**
   * orientate all the shapes correctly to fit in the group
   */
  orientateShapes(n) {
    this.shapes.forEach((i) => {
      const s = this.positions.find((o) => o.shape === i.id);
      if (!s) throw new Error("position not found for shape in group");
      if (!i.rotate(s.rot, n)) throw new Error("orientateShapes - unable to rotate shape in group");
    });
  }
  /**
   * sort the shapes by size
   */
  sortShapes() {
    const n = Li(this.direction);
    this.shapes.sort((i, s) => s[n] === i[n] ? s[this.direction] === i[this.direction] ? i.id.localeCompare(s.id, void 0, { numeric: !0 }) : s[this.direction] - i[this.direction] : s[n] - i[n]);
  }
  /**
   * place the group shapes on the stock
   */
  placeMyShapes(n) {
    if (!n) throw new Error("placeShapes requires stock");
    this.addToStock(n);
    for (let i = 0; i < this.shapes.length; i++) {
      const s = this.shapes[i];
      s.addToStock(n);
      const r = this.positions.find((l) => l.shape === s.id);
      if (!r) throw new Error("position not found for shape in group");
      if (s.x = this.x + r.x, s.y = this.y + r.y, !s.rotate(r.rot, n)) throw new Error("placeMyShapes - unable to rotate shape in group");
      i === 0 && this.x === 0 && this.y === 0 && (s.isFirstShape = !0), s.addedAsGroup = this.id, s.inGroup = !1, s.score = this.score;
      const a = s.guillotineData.stripShapeBatches;
      s.guillotineData = this.cloneGuillotineData(), s.guillotineData.stripShapeBatches = a, s.bestScore = this.bestScore, typeof this.placementOrder == "number" && (s.groupPlacementOrder = i, s.placementOrder = this.placementOrder + i / 1e6);
    }
  }
  //this is for groups which are created once and reused between stock e.g. user groups
  orientateCorrectly(n) {
    this.orientateShapes(n), this.setRotationToOrientationLock(n);
  }
  clone(n = []) {
    const s = `g${parseInt(this.id.split("g")[1]) + 1}`, r = this.shapes, o = this.container;
    delete this.shapes, delete this.container;
    const a = structuredClone(this);
    return this.shapes = r, this.container = o, a.container = this.container, a.shapes = n, a.id = s, new di(a);
  }
  compress() {
    const n = super.compress.call(this);
    return n.direction = this.direction, n.positions = structuredClone(this.positions), n.shapes = this.shapes.map((i) => i.compress()), n.type = this.type, n.cloneType = "group", n;
  }
}
function RA(e, t, n, i) {
  return t.filter((s, r) => (e.stockMatch.material[r] = null, e.stockMatch.thickness[r] = null, e.stockMatch.width[r] = null, e.stockMatch.fit[r] = null, (vn(e) || tf(e)) && (Iy(s, e) ? e.stockMatch.fit[r] = !0 : e.stockMatch.fit[r] = !1), n ? s.material === e.material ? e.stockMatch.material[r] = !0 : e.stockMatch.material[r] = !1 : e.stockMatch.material[r] = !0, i ? $(e.t) && $(s.t) ? (vn(e) && ve.equalTo(e.t, s.t) || e.t === s.t) && (e.stockMatch.thickness[r] = !0) : e.stockMatch.thickness[r] = !1 : e.stockMatch.thickness[r] = !0, s.type === "linear" ? vn(e) && (e.canRotate(0, s) && ve.equalTo(e.w, s.w) || e.canRotate(1, s) && ve.equalTo(e.l, s.w) ? e.stockMatch.width[r] = !0 : e.stockMatch.width[r] = !1) : e.stockMatch.width[r] = !0, e.stockMatch.fit[r] && e.stockMatch.material[r] && e.stockMatch.thickness[r] && e.stockMatch.width[r]));
}
function FA(e, t, n) {
  const i = Fi(e[0]);
  if (i && (t = t.map((c) => {
    const f = new Bn(c);
    return f.trimDimensions(), f;
  }), e = e.map((c) => {
    const f = new jn(c);
    return f.trimDimensions(), f;
  })), es(t[0]) && (t = t.map((c, f) => (c.id = `${f.toString()}.0`, new Bn(c)))), e.some((c) => $(c.stockLock) && c.stockLock.length)) return;
  t = t.filter((c) => c.autoAdd === !0 || $(c.q) && c.q > 0);
  const r = t.some((c) => $(c.material)), o = t.some((c) => $(c.t)), a = /* @__PURE__ */ new Set();
  for (let c = 0; c < e.length; c++) {
    const f = e[c];
    f.stockMatch = {
      material: [],
      thickness: [],
      width: [],
      fit: []
    };
    const h = RA(f, t, r, o);
    if (f.stockMatch.fit = !f.stockMatch.fit.every((d) => d === !1), f.stockMatch.material = !f.stockMatch.material.every((d) => d === !1), f.stockMatch.thickness = !f.stockMatch.thickness.every((d) => d === !1), f.stockMatch.width = !f.stockMatch.width.every((d) => d === !1), !i) {
      if (h.length) {
        const d = h.map((p) => p.getParentID());
        f.stockLock = d, d.forEach((p) => a.add(p));
      } else if (f.stockMatch.fit)
        f.stockMatch.material || f.issues.push(`materials must match - could not find any stock with ${f.material ? f.material + " material" : "no material set"}`), f.stockMatch.thickness || f.issues.push(`thicknesses must match - could not find any stock with ${f.t ? "thickness " + f.t : "no thickness set"}`), n === "linear" && !f.stockMatch.width && f.issues.push(`widths must match for linear calculations - could not find any stock with ${f.w ? "width " + f.w : "no width set"}`);
      else {
        const d = f.getTrimmedDimensions();
        f.issues.push(`${d.l.toFixed()}x${d.w.toFixed()} will not fit on any stock - check dimensions, min spacing, trim & orientation lock`);
      }
      f.stockMatch = null;
    }
  }
  const l = e.filter((c) => !c.stockLock || !c.stockLock.length).sort(Po.ID), u = t.filter((c) => !a.has(c.parentID)).sort(Po.ID);
  return t = t.filter((c) => $n(c)).filter((c) => a.has(c.parentID)), (r || o) && (e = e.filter((c) => {
    var f;
    return (f = c == null ? void 0 : c.stockLock) == null ? void 0 : f.length;
  })), {
    stockList: t,
    unusableShapes: l,
    shapeList: e,
    unusableStock: u
  };
}
function $A(e) {
  const t = e.map((n) => n.grain).filter((n) => n);
  return t.length ? t.every((n) => n === "l") ? "l" : t.every((n) => n === "w") ? "w" : t.some((n) => n === "l" || n === "w") ? "y" : "n" : "n";
}
function BA(e) {
  return e.shapes !== void 0;
}
function dn(e) {
  return e instanceof di && e.type !== "user";
}
function tf(e) {
  return e instanceof di && e.type === "user";
}
function us(e) {
  return e instanceof TA;
}
function es(e) {
  return e instanceof My;
}
function Fi(e) {
  return e instanceof jo;
}
function $n(e) {
  return e instanceof Bn;
}
function tc(e) {
  return e instanceof ef;
}
function vn(e) {
  return e instanceof jn && !(e instanceof di);
}
function jA(e) {
  return e instanceof jn || e instanceof di;
}
function qA(e) {
  return e instanceof Ly;
}
function UA(e) {
  return e instanceof si;
}
class Ue {
  constructor(t, n, i = null) {
    m(this, "x");
    m(this, "y");
    m(this, "z");
    m(this, "a");
    //shape id
    m(this, "b");
    //shape id
    m(this, "direction");
    m(this, "type");
    m(this, "corner");
    m(this, "grid");
    m(this, "stockID");
    m(this, "raycast");
    m(this, "collision");
    m(this, "tooClose");
    m(this, "adjustedForMinSpacing");
    this.x = parseFloat(t), this.y = parseFloat(n), this.z = parseFloat(i) || 0, this.validate();
  }
  //clone with the ability to change the coordinates
  clone(t = null, n = null) {
    const i = structuredClone(this), s = new Ue(
      t === null ? i.x : t,
      n === null ? i.y : n
    );
    for (const r in i)
      r === "x" || r === "y" || (s[r] = i[r]);
    return s;
  }
  validate() {
    if (isNaN(this.x) || isNaN(this.y))
      throw new Error("invalid point coordinates");
  }
  coords() {
    return {
      x: this.x,
      y: this.y
    };
  }
  collidesWith(t) {
    return this.x >= t.x && this.x <= t.x + t.l && this.y >= t.y && this.y <= t.y + t.w;
  }
  isIdenticalTo(t) {
    return this.x === t.x && this.y === t.y;
  }
  /* given a grid point from a corner, get the available positions for this shape
     does not cater for diagonals */
  //[] needs to cater for raycast coords, which don't originate from a shape corner
  getAvailableShapePositions(t) {
    const n = /* @__PURE__ */ new Set();
    if (this.raycast) {
      switch (this.direction) {
        case "tb":
          n.add("topRight"), n.add("topLeft");
          break;
        case "bt":
          n.add("bottomRight"), n.add("bottomLeft");
          break;
        case "lr":
          n.add("topLeft"), n.add("bottomLeft");
          break;
        case "rl":
          n.add("topRight"), n.add("bottomRight");
          break;
      }
      return n;
    }
    return (t == null ? void 0 : t.cutType) !== "efficiency" ? (this.corner === "topLeft" && (this.grid === "top" || !this.grid) && n.add("topRight"), this.corner === "bottomRight" && (this.grid === "right" || !this.grid) && n.add("topRight"), n) : (this.corner === "topRight" && ((this.grid === "top" || !this.grid) && n.add("topLeft"), (this.grid === "right" || !this.grid) && n.add("bottomRight")), this.corner === "topLeft" && ((this.grid === "top" || !this.grid) && n.add("topRight"), (this.grid === "left" || !this.grid) && n.add("bottomLeft")), this.corner === "bottomRight" && ((this.grid === "bottom" || !this.grid) && n.add("bottomLeft"), (this.grid === "right" || !this.grid) && n.add("topRight")), this.corner === "bottomLeft" && ((this.grid === "bottom" || !this.grid) && n.add("bottomRight"), (this.grid === "left" || !this.grid) && n.add("topLeft")), n);
  }
}
class Ui {
  constructor(t = []) {
    m(this, "points", /* @__PURE__ */ new Map());
    t.forEach((n) => this.addPoint(n));
  }
  addPoint(t, n = null) {
    if (this.contains(t)) {
      const i = this.getPoint(t);
      i.type === "group" && !n && (i.type = void 0);
      return;
    }
    t.validate(), n && (t.type = n), this.points.set(this.createKey(t), t);
  }
  addPoints(t, n = null) {
    for (const i of t) {
      if (!i) return;
      i.validate(), this.addPoint(i, n);
    }
  }
  createKey(t) {
    return `${t.x},${t.y}`;
  }
  getPoint(t) {
    return this.points.get(this.createKey(t));
  }
  deletePoint(t) {
    t.validate(), this.points.delete(this.createKey(t));
  }
  deletePoints(t) {
    for (const n of t)
      n.validate(), this.deletePoint(n);
  }
  clear() {
    this.points.clear();
  }
  toArray() {
    return Array.from(this.points.values());
  }
  contains(t) {
    return this.points.has(this.createKey(t));
  }
}
const Kn = {
  bottom: (e, t, n) => {
    const i = new Ue(e.x, e.y - n);
    return i.corner = t, i.grid = "bottom", i;
  },
  left: (e, t, n) => {
    const i = new Ue(e.x - n, e.y);
    return i.corner = t, i.grid = "left", i;
  },
  right: (e, t, n) => {
    const i = new Ue(e.x + n, e.y);
    return i.corner = t, i.grid = "right", i;
  },
  top: (e, t, n) => {
    const i = new Ue(e.x, e.y + n);
    return i.corner = t, i.grid = "top", i;
  }
};
function WA(e, t, n, i) {
  var o, a, l, u, c, f;
  const s = new Ui();
  if (n.toArray().sort(Dy).forEach((h) => {
    const d = h.corner, p = h.type;
    if (!i)
      s.addPoint(h);
    else
      switch (d) {
        case "topRight":
          s.addPoint(
            Kn.top(h, d, i),
            p
          ), s.addPoint(
            Kn.right(h, d, i),
            p
          );
          break;
        case "topLeft":
          s.addPoint(
            Kn.top(h, d, i),
            p
          ), s.addPoint(
            Kn.left(h, d, i),
            p
          );
          break;
        case "bottomRight":
          s.addPoint(
            Kn.bottom(h, d, i),
            p
          ), s.addPoint(
            Kn.right(h, d, i),
            p
          );
          break;
        case "bottomLeft":
          s.addPoint(
            Kn.bottom(h, d, i),
            p
          ), s.addPoint(
            Kn.left(h, d, i),
            p
          );
          break;
      }
    const w = s.toArray();
    if (i)
      for (let E = w.length; E--; ) {
        const v = w[E];
        n.contains(v) && s.deletePoint(v);
      }
    else
      for (let E = w.length; E--; ) {
        const v = w[E];
        for (let k = e.length; k--; ) {
          const g = e[k];
          if (v.x === g.x && v.y === g.y) {
            s.deletePoint(v);
            break;
          }
        }
      }
  }), i) {
    const h = /* @__PURE__ */ new Set();
    let d, p, w, E;
    ((o = t == null ? void 0 : t.constructor) == null ? void 0 : o.name) === "Stock" && (t != null && t.trimmed) || ((a = t == null ? void 0 : t.constructor) == null ? void 0 : a.name) === "Segment" ? (d = t.x, p = t.y, w = t.x + t.l, E = t.y + t.w) : (d = t.x + ((l = t == null ? void 0 : t.trim) == null ? void 0 : l.x1), p = t.y + ((u = t == null ? void 0 : t.trim) == null ? void 0 : u.y1), w = t.x + t.l - ((c = t == null ? void 0 : t.trim) == null ? void 0 : c.x2), E = t.y + t.w - ((f = t == null ? void 0 : t.trim) == null ? void 0 : f.y2));
    let v = s.toArray();
    for (let k = v.length; k--; ) {
      const g = v[k];
      (ve.lessThan(g.x, d) || ve.lessThan(g.y, p) || ve.greaterThan(g.x, w) || ve.greaterThan(g.y, E)) && v.splice(k, 1);
    }
    s.clear(), s.addPoints(v), h.clear(), v = s.toArray();
    for (let k = v.length; k--; ) {
      const g = v[k];
      for (let b = e.length; b--; ) {
        const A = e[b];
        if (g.collidesWith(A)) {
          s.deletePoint(g);
          break;
        }
      }
    }
  }
  return s;
}
function zA(e, t) {
  const n = new Ui();
  return e.sort(Dy), e.forEach((i) => {
    dn(i) ? (n.addPoints(i.getCoords(t)), i.shapes.forEach((s) => {
      const r = s.getCoords(t);
      n.addPoints(r, "group");
    })) : n.addPoints(i.getCoords(t));
  }), n.points.forEach((i) => {
    i.stockID = t.getStock().id;
  }), n;
}
function VA(e = [], t, n) {
  const i = n.getBladeWidth(), s = zA(
    e === null ? t : e,
    n
  );
  return WA(
    t,
    n,
    s,
    i
  );
}
function Dy(e, t) {
  return e.y === t.y ? t.x - e.x : t.y - e.y;
}
function Ry(e, t, n, i, s) {
  e.a = t.id, e.b = n ? n.id : null, e.direction = i, e.raycast = !0, e.type = s;
}
function GA(e, t) {
  if (e.saw.cutType !== "efficiency" || t.length <= 1)
    return null;
  let n = new Ui();
  const i = HA(t, e);
  for (const a of t)
    for (const l of i) {
      if (l.shape.id === a.id) continue;
      const u = Object.values(l.rays);
      for (const c of u)
        KA(
          c,
          l.shape,
          a,
          n
        );
    }
  const r = e.saw.efficiencyOptions.primaryCompression === "x" ? "lr" : "tb", o = t.reduce((a, l) => (r === "tb" ? a.x + a.l > l.x + l.l : a.y + a.w > l.y + l.w) ? a : l);
  return i.filter(({ shape: a }) => a.id === o.id).forEach(({ shape: a, rays: l }) => {
    const u = Object.values(l);
    for (const c of u) {
      const f = new Ue(c.x2, c.y2);
      r === c.direction && (Ry(f, a, null, c.direction, "edge"), n.addPoint(f));
    }
  }), n = YA(n), n;
}
function HA(e, t) {
  return e.map((n) => {
    const i = iC(n, t);
    return {
      shape: n,
      rays: i
    };
  });
}
function KA(e, t, n, i) {
  switch (e.direction) {
    case "rl":
      jr(
        e,
        t,
        n,
        i,
        n.x + n.l
      );
      break;
    case "lr":
      jr(
        e,
        t,
        n,
        i,
        n.x
      );
      break;
    case "tb":
      jr(
        e,
        t,
        n,
        i,
        n.y + n.w
      );
      break;
    case "bt":
      jr(
        e,
        t,
        n,
        i,
        n.y
      );
      break;
  }
}
function jr(e, t, n, i, s) {
  const r = e.dimension === "w", o = r ? "y" : "x", a = r ? "x" : "y", l = r ? "l" : "w";
  if (e[`${a}1`] >= n[a] && e[`${a}1`] <= n[a] + n[l]) {
    const u = e.direction === "lr" && e[`${o}1`] <= s && e[`${o}2`] >= s, c = e.direction === "rl" && e[`${o}1`] >= s && e[`${o}2`] <= s, f = e.direction === "bt" && e[`${o}1`] <= s && e[`${o}2`] >= s, h = e.direction === "tb" && e[`${o}1`] >= s && e[`${o}2`] <= s;
    if (u || c || f || h) {
      const p = r ? e[`${a}1`] : s, w = r ? s : e[`${a}1`], E = new Ue(p, w);
      Ry(E, t, n, e.direction, "shape"), i.addPoint(E);
    }
  }
}
function YA(e) {
  const t = new Ui();
  return e.points.size === 0 || new Set(e.toArray().map((i) => i.a)).forEach((i) => {
    const s = e.toArray().filter((r) => r.a === i);
    ["right", "left", "top", "bottom"].forEach((r) => {
      const o = XA(
        s,
        r
      );
      o && t.addPoint(o);
    });
  }), t;
}
function XA(e, t) {
  return e.length === 0 ? null : e.reduce((n, i) => {
    switch (t) {
      case "left":
        return !n || i.x < n.x ? i : n;
      case "right":
        return !n || i.x > n.x ? i : n;
      case "top":
        return !n || i.y > n.y ? i : n;
      case "bottom":
        return !n || i.y < n.y ? i : n;
      default:
        return null;
    }
  }, null);
}
function JA(e, t, n) {
  const i = new Ui(), s = t.getAvailableShapePositions(n);
  for (const r of s) {
    let o;
    switch (o = ZA(t, e, n), r) {
      case "bottomLeft":
        o = o.clone(o.x - e.l, o.y - e.w);
        break;
      case "bottomRight":
        o = o.clone(o.x, o.y - e.w);
        break;
      case "topLeft":
        o = o.clone(o.x - e.l, o.y);
        break;
      case "topRight":
        o = o.clone(o.x, o.y);
        break;
    }
    i.addPoint(o);
  }
  return Fy(e, n, i), i;
}
function QA(e, t, n) {
  let i = [];
  const s = e.getMinSpacing(n);
  if (t.type === "shape" ? t.direction === "lr" ? (i.push({
    x: t.x - e.l - s,
    y: t.y + s
  }), i.push({
    x: t.x - e.l - s,
    y: t.y - e.w
  })) : t.direction === "rl" ? (i.push({
    x: t.x + s,
    y: t.y + s
  }), i.push({
    x: t.x + s,
    y: t.y - e.w
  })) : t.direction === "bt" ? (i.push({
    x: t.x - e.w,
    y: t.y - e.w - s
  }), i.push({
    x: t.x + s,
    y: t.y - e.w - s
  })) : t.direction === "tb" && (i.push({
    x: t.x + s,
    y: t.y + s
  }), i.push({
    x: t.x - e.l,
    y: t.y + s
  })) : t.type === "edge" && (t.direction === "lr" ? (i.push({
    x: t.x - e.l,
    y: t.y + s
  }), i.push({
    x: t.x - e.l,
    y: t.y - e.w
  })) : t.direction === "rl" ? (i.push({
    x: t.x,
    y: t.y + s
  }), i.push({
    x: t.x,
    y: t.y - e.w
  })) : t.direction === "bt" ? (i.push({
    x: t.x - e.w,
    y: t.y - e.w
  }), i.push({
    x: t.x + s,
    y: t.y - e.w
  })) : t.direction === "tb" && (i.push({
    x: t.x + s,
    y: t.y
  }), i.push({
    x: t.x - e.l,
    y: t.y
  }))), i = i.filter((a) => a.x >= 0 && a.y >= 0), i.length === 0) return null;
  const r = i.map((a) => t.clone(a.x, a.y)), o = new Ui(r);
  return Fy(e, n, o), o;
}
function ZA(e, t, n) {
  if (n.saw.cutType !== "efficiency") return e;
  const i = t.getMinSpacing(n);
  if (!i) return e;
  const s = n.getBladeWidth();
  let r;
  if (!i || !e.grid) return e;
  switch (e.grid) {
    case "bottom":
      r = e.clone(e.x, e.y - i + s);
      break;
    case "top":
      r = e.clone(e.x, e.y + i - s);
      break;
    case "left":
      r = e.clone(e.x - i + s, e.y);
      break;
    case "right":
      r = e.clone(e.x + i - s, e.y);
      break;
  }
  return r.x < 0 && (r.x = 0), r.y < 0 && (r.y = 0), r.adjustedForMinSpacing = !0, r;
}
function Fy(e, t, n) {
  var l, u, c, f, h, d;
  let i, s, r, o;
  ((l = t == null ? void 0 : t.constructor) == null ? void 0 : l.name) === "Stock" && (t != null && t.trimmed) || ((u = t == null ? void 0 : t.constructor) == null ? void 0 : u.name) === "Segment" ? (i = 0, s = 0, r = t.x + t.l - e.l, o = t.y + t.w - e.w) : (i = (c = t == null ? void 0 : t.trim) == null ? void 0 : c.x1, s = (f = t == null ? void 0 : t.trim) == null ? void 0 : f.y1, r = t.l - ((h = t == null ? void 0 : t.trim) == null ? void 0 : h.x2) - e.l, o = t.w - ((d = t == null ? void 0 : t.trim) == null ? void 0 : d.y2) - e.w);
  const a = n.toArray();
  for (let p = a.length; p--; ) {
    const w = a[p];
    (ve.lessThan(w.x, i) || ve.lessThan(w.y, s) || ve.greaterThan(w.x, r) || ve.greaterThan(w.y, o) || w.x < 0 || w.y < 0) && n.deletePoint(w);
  }
}
function Gi(e) {
  return typeof e == "string" && e.length === 6 && !isNaN(+("0x" + e.replace("#", "")));
}
class e2 {
  constructor({
    elementID: t,
    env: n = "production",
    main: i = !0,
    units: s = "decimal",
    decimalPlaces: r = 2,
    fractionRoundTo: o = 0,
    saw: a = null,
    app: l = !1,
    embed: u = !1,
    height: c = 0,
    width: f = 0,
    flipY: h = !1,
    flipX: d = !1,
    colors: p = {
      partA: "#1d9bc4",
      partB: "#127da1",
      partHover: "#29c778",
      partSelected: "#1bc319",
      stock: "#ffd166",
      text: "#ffffff"
    },
    options: w = {
      disableClick: !1,
      enableStretch: !0
    },
    vueComponent: E
  }) {
    m(this, "env");
    m(this, "main");
    //is this the main vis or not
    m(this, "units", "decimal");
    m(this, "decimalPlaces");
    m(this, "fractionRoundTo");
    m(this, "formatNumber", (t) => Q(
      t,
      this.units,
      this.decimalPlaces ?? 2,
      !1,
      this.fractionRoundTo ?? 0
    ).toString());
    m(this, "saw");
    m(this, "stockType");
    m(this, "numUniqueShapes");
    m(this, "app");
    m(this, "embed");
    m(this, "height");
    m(this, "width");
    m(this, "device");
    m(this, "vueComponent");
    m(this, "elWidth");
    m(this, "elHeight");
    m(this, "w");
    m(this, "h");
    m(this, "padding");
    m(this, "mobileBreakpoint");
    //scales
    m(this, "xScale", pe.scaleLinear());
    m(this, "yScale", pe.scaleLinear());
    m(this, "yPositionScale", pe.scaleLinear());
    m(this, "xPositionScale", pe.scaleLinear());
    m(this, "yAxisScale", pe.scaleLinear());
    m(this, "measurementScale", pe.scaleLinear());
    m(this, "xAxis");
    m(this, "yAxis");
    m(this, "stretched");
    m(this, "shapeXAxis");
    m(this, "shapeYAxis");
    m(this, "cutMeasurementXAxes");
    m(this, "cutMeasurementYAxes");
    m(this, "axisSpacing");
    m(this, "flipY");
    m(this, "flipX");
    m(this, "colors");
    m(this, "options");
    m(this, "moveMode");
    m(this, "moveRotation");
    m(this, "moving");
    m(this, "shape");
    m(this, "shapeColorScale");
    m(this, "scoreColorScale");
    m(this, "hasTouch");
    m(this, "highlightguillotine");
    m(this, "debug", "");
    //groups | guillotine | positions
    m(this, "elementID");
    //the id of the element to draw the vis in
    m(this, "el");
    m(this, "htmlEl");
    m(this, "svgCanvas");
    m(this, "axisGroup");
    m(this, "stockGroup");
    m(this, "stockWrappers");
    m(this, "stock");
    m(this, "shapeGroup");
    m(this, "shapeWrappers");
    m(this, "shapes");
    m(this, "shapeIDText");
    m(this, "shapeNameText");
    m(this, "shapeLengthText");
    m(this, "shapeWidthText");
    m(this, "groupGroup");
    m(this, "groups");
    m(this, "bandingGroup");
    m(this, "bandingWrappers");
    m(this, "banding");
    m(this, "segmentGroup");
    m(this, "segments");
    m(this, "segment");
    m(this, "positionGroup");
    m(this, "position");
    m(this, "dotGroup");
    m(this, "placementPositionGroup");
    m(this, "dot");
    m(this, "cutGroup");
    m(this, "cuts");
    m(this, "cut");
    if (!t) throw new Error("elementID is required");
    if (this.el = pe.select(t), this.el === null) return;
    const v = this.el.node();
    if (v !== null) {
      this.htmlEl = v, this.vueComponent = E, this.env = Se.call(this.vueComponent, ["env"]) === "development" ? "development" : "production", this.debug = this.env === "development" ? "groups" : "", this.app = l || !1, this.embed = u || !1, this.height = c, this.width = f, this.device = l ? "app" : "desktop", this.stretched = !1, this.elWidth = this.htmlEl.offsetWidth, this.elHeight = this.htmlEl.offsetHeight, this.w = 0, this.h = 0, this.padding = 0, this.mobileBreakpoint = 450, this.main = i, this.saw = a, this.cutMeasurementXAxes = [], this.cutMeasurementYAxes = [], this.axisSpacing = 16, this.flipY = h, this.flipX = d, p = {
        ...p
      };
      for (const [k, g] of Object.entries(p))
        g && (p[k] = g.replace("#", ""));
      this.colors = {
        partA: Gi(p == null ? void 0 : p.partA) ? Ve("#" + p.partA) : Ve("#1d9bc4"),
        partB: Gi(p == null ? void 0 : p.partB) ? Ve("#" + p.partB) : Ve("#127da1"),
        partHover: Gi(p == null ? void 0 : p.partHover) ? Ve("#" + p.partHover) : Ve("#29c778"),
        partSelected: Gi(p == null ? void 0 : p.partSelected) ? Ve("#" + p.partSelected) : Ve("#1bc319"),
        stock: Gi(p == null ? void 0 : p.stock) ? Ve("#" + p.stock) : Ve("#ffd166"),
        text: Gi(p == null ? void 0 : p.text) ? Ve("#" + p.text) : Ve("#ffffff")
      }, this.shapeColorScale = pe.scaleSequential([
        this.colors.partA,
        this.colors.partB
      ]), this.env = n, this.moveMode = !1, this.moving = !1, this.moveRotation = !1, this.units = s, this.decimalPlaces = r, this.fractionRoundTo = o, this.hasTouch = !1, this.options = w, this.init();
    }
  }
  /**
      * sets up the various wrappers - only needs to be called once
      * the z index is set by the order drawn
      */
  init() {
    if (!this.el) return !1;
    if ((this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces)) && (this.decimalPlaces = 2), (this.fractionRoundTo === null || this.fractionRoundTo === void 0 || isNaN(this.fractionRoundTo)) && (this.fractionRoundTo = 0), !this.svgCanvas) {
      if (this.htmlEl.querySelector("svg") === null) {
        const n = this.el.append("svg").attr("class", "vis");
        if (n === null) return;
        n.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), n.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(90)").attr("id", "grain-l").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), n.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("id", "grain-w").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), this.svgCanvas = n;
      }
      this.axisGroup = this.svgCanvas.append("g").attr("class", "axis-group"), this.stockGroup = this.svgCanvas.append("g").attr("class", "stock-group"), this.shapeGroup = this.svgCanvas.append("g").attr("class", "shapes"), this.bandingGroup = this.svgCanvas.append("g").attr("class", "banding-group"), this.segmentGroup = this.svgCanvas.append("g").attr("class", "segments").attr("display", "none"), this.groupGroup = this.svgCanvas.append("g").attr("class", "groups").attr("display", "none"), this.positionGroup = this.svgCanvas.append("g").attr("class", "positions"), this.dotGroup = this.svgCanvas.append("g").attr("class", "dots"), this.env === "development" && (this.placementPositionGroup = this.svgCanvas.append("g").attr("class", "placements")), this.cutGroup = this.svgCanvas.append("g").attr("class", "cuts");
    }
    this.elWidth > 0 && this.updateSize(!0), this.hasTouch = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
  updateUnits(t, n, i) {
    t && (this.units = t), n && (this.decimalPlaces = n), i && (this.fractionRoundTo = i), this.refreshShapes(), this.refreshStock();
  }
  trimNameToFit(t, n) {
    function i(s, r, o) {
      const a = o[r], l = pe.select(a);
      l.text(s.name);
      let u = l.text();
      const c = l.node();
      if (!c) return;
      let f = c.getComputedTextLength();
      const h = this.getWidthAttribute(s) - 20;
      for (; f > h && u.length > 0; )
        u = u.slice(0, -1), l.text(u.length ? u + "..." : ""), f = l.node().getComputedTextLength();
    }
    t.each(i.bind(n));
  }
  getShapeColor(t) {
    if (this.env === "development")
      switch (this.debug) {
        case "guillotine":
          if (t.guillotineData.firstShape)
            return Ve(252, 3, 182);
          if (t.addedAsGroup)
            return Ve(43, 156, 16);
          if (typeof t.guillotineData.myPhase == "number") {
            const n = [0, 115, 255], i = [176, 255, 231];
            return `rgb(${n.map((r, o) => Math.round(r + t.guillotineData.myPhase / 5 * (i[o] - r))).join(",")})`;
          }
          break;
        case "groups":
          if (t.addedAsGroup !== !1)
            return Ve(43, 156, 16);
          break;
        case "priorityShapes":
          if (t.priority.includes(t.stock.parentID))
            return Ve(139, 171, 46);
          break;
        case "score":
          return this.scoreColorScale(t.bestScore.total);
      }
    return this.shapeColorScale(t.parentID - 1);
  }
  setDevice() {
    if (!(!this.htmlEl || this.htmlEl.style.display === "none") && this.htmlEl.offsetWidth) {
      if (this.elWidth = this.htmlEl.offsetWidth, this.elHeight = this.htmlEl.offsetHeight, this.elWidth === 0) return !1;
      this.main ? this.elWidth <= this.mobileBreakpoint || this.app ? (this.device = "mobile", this.padding = 0) : (this.device = "desktop", this.padding = 50) : this.padding = 0, this.w = this.elWidth;
    }
  }
  //find the largest dimensions of all the stock (not just the active one)
  findLargestStockDimensions() {
    const t = Se.call(this.vueComponent, ["stockList"]).filter((s) => s.used);
    if (!(t != null && t.length)) return [null, null];
    const n = t.reduce((s, r) => s.l > r.l ? s : r), i = t.reduce((s, r) => s.w > r.w ? s : r);
    return [n, i];
  }
  debounce(t, n, i = !1) {
    let s;
    return (...r) => new Promise((o) => {
      const a = () => {
        s = null, i || o(t.apply(this, r));
      };
      clearTimeout(s), i && !s && o(t.apply(this, r)), s = setTimeout(a, n);
    });
  }
  updateSize(t = !1) {
    return this.debounce(this._updateSize.bind(this), 10, t)();
  }
  requiresStretch(t, n = null) {
    return t ? (n === null && (n = t.w / t.l), n < 0.15) : !1;
  }
  setAspectRatio(t) {
    if (t) {
      this.w = this.elWidth;
      const n = t.w / t.l;
      this.xScale.domain([0, t.l]).range([this.padding, this.w - this.padding]), this.requiresStretch(t, n) && this.options.enableStretch ? (this.h = this.htmlEl.clientWidth * 0.15 + this.padding * 2, this.stretched = !0) : (this.h = this.xScale(t.getShortSide()) + this.padding, this.stretched = !1), this.yScale.domain([0, t.w]).range([this.padding, this.h - this.padding]), this.yAxisScale.domain(this.flipY ? [0, t.w] : [t.w, 0]).range([this.padding, this.h - this.padding]), this.yPositionScale.domain([0, t.w]).range(this.flipY ? [this.padding, this.h - this.padding] : [this.h - this.padding, this.padding]), n > 2 && (this.w = this.htmlEl.clientWidth / n + this.padding * 2, this.xScale.domain([0, t.l]).range([this.padding, this.w - this.padding]), this.h = this.xScale(t.getShortSide()) + this.padding), this.xPositionScale.domain([0, t.l]).range(this.flipX ? [this.w - this.padding, this.padding] : [this.padding, this.w - this.padding]), this.measurementScale.domain([0, t.l]).range([0, this.w - this.padding * 2]), this.w > 0 && this.h > 0 && (n > 2 ? this.el.style("width", this.w + "px") : this.el.style("width", ""), this.el.style("height", this.h + "px"));
    }
  }
  _updateSize() {
    if (!this.htmlEl || this.htmlEl.style.display === "none") return;
    this.vueComponent && "suppressResizeObserver" in this.vueComponent && (this.vueComponent.suppressResizeObserver = !0);
    const t = Se.call(this.vueComponent, ["stockList"]), n = Se.call(this.vueComponent, ["shapeList"]);
    if (!(t != null && t.length) || !(n != null && n.length)) return !1;
    this.setDevice(), this.refreshStock(), this.refreshShapes(), this.env === "development" && this.refreshPlacementPositions();
  }
  refreshCuts() {
    const t = Se.call(this.vueComponent, ["activeCuts"]);
    this.resetSegments(), this.initCuts(t);
  }
  refreshStock() {
    const t = Se.call(this.vueComponent, ["stockList"]);
    if (!(t != null && t.length)) return !1;
    const n = Se.call(this.vueComponent, ["activeStock"]);
    this.initStock(n), this.refreshCuts();
    const i = Se.call(this.vueComponent, ["activeSegments"]);
    this.initSegments(i), this.resetPositions(), typeof this.vueComponent.toggleSegments == "function" && this.vueComponent.toggleSegments(!1);
  }
  refreshShapes() {
    const t = Se.call(this.vueComponent, ["shapeList"]);
    if (!(t != null && t.length)) return !1;
    this.resetPositions();
    const n = Se.call(this.vueComponent, ["activeShapes"]);
    this.initShapes(n, t);
  }
  refreshPlacementPositions() {
    const t = Se.call(this.vueComponent, ["placementPositions"]);
    if (!(t != null && t.length)) return !1;
    this.resetPlacementPositions();
    const n = t.filter((i) => i.stockID === Se.call(this.vueComponent, ["activeStock"]).id);
    this.initPlacementPositions(n);
  }
  recreateUerGroups(t) {
    t.filter((s) => s.inUserGroup);
    const n = [];
    for (let s = 0; s < t.length; s++) {
      const o = t[s].addedAsGroup, a = t.filter((l) => l.addedAsGroup === o);
      n.push(a), s += a.length;
    }
    const i = [];
    n.forEach((s) => {
      const r = Math.min(...s.map((c) => c.x)), o = Math.min(...s.map((c) => c.y)), a = Math.max(...s.map((c) => c.x + c.l)) - r, l = Math.max(...s.map((c) => c.y + c.w)) - o, u = {
        x: r,
        y: o,
        l: a,
        w: l,
        shapes: s
      };
      i.push(u);
    }), this.initGroups(i);
  }
  //init or update the stock
  initStock(t) {
    if (this.resetStock(), this.setAspectRatio(t), !t || !(t != null && t.w) || !(t != null && t.l) || !this.elWidth)
      return !1;
    this.stockType = t.type;
    let n;
    if (typeof t == "object" && (n = [t]), this.device === "desktop" && this.main) {
      this.xAxis = this.axisGroup.append("g").attr("transform", `translate(0, ${this.padding})`).attr("class", "axis stock x").call(pe.axisTop(this.xScale).ticks(5).tickSize(5)).selectAll("text").attr("dy", -5);
      const i = this.requiresStretch(t);
      (!i || i && this.stretched) && (this.yAxis = this.axisGroup.append("g").attr(
        "transform",
        `translate(${this.w - this.padding}, 0)`
      ).attr("class", "axis stock y").call(pe.axisRight(this.yAxisScale).ticks(5).tickSize(5)).selectAll("text").attr("dx", 5));
    }
    this.stockGroup.data(n).attr(
      "transform",
      () => `translate(${this.padding},${this.padding})`
    ), this.stockGroup.append("rect").attr("class", "background stock").style("fill", this.colors.stock).attr("width", (i) => this.getWidthAttribute(i)).attr("height", (i) => this.getHeightAttribute(i)).attr("x", (i) => {
      i.x = 0;
      const s = i.x;
      i.x = 0;
      const r = this.getRectangleCoordinate(i, "x") - this.padding;
      return i.x = s, r;
    }).attr("y", (i) => {
      i.y = 0;
      const s = i.y;
      i.y = 0;
      const r = this.getRectangleCoordinate(i, "y") - this.padding;
      return i.y = s, r;
    }), this.stock = this.stockGroup.append("rect").attr("width", (i) => this.getWidthAttribute(i)).attr("height", (i) => this.getHeightAttribute(i)).attr(
      "x",
      (i) => this.getRectangleCoordinate(i, "x") - this.padding
    ).attr(
      "y",
      (i) => this.getRectangleCoordinate(i, "y") - this.padding
    ).attr("class", "stock-pattern").style("fill", (i) => i != null && i.grain ? `url(#grain-${i.grain.toLowerCase()})` : "url(#stripes)");
  }
  getWidthAttribute(t) {
    return this.xScale(t.l) - this.padding;
  }
  getHeightAttribute(t) {
    return this.yScale(t.w) - this.padding;
  }
  //init or update the shapes
  initShapes(t, n) {
    var i, s, r;
    if (this.resetShapes(), !(!t || !t.length || !this.elWidth)) {
      if (this.numUniqueShapes = n.filter((o) => !o.duplicate).length, this.shapeColorScale.domain([0, this.numUniqueShapes]), (i = this == null ? void 0 : this.vueComponent) != null && i.gs) {
        be.call(this.vueComponent, ["shapeColors"], {});
        for (let o = t.length; o--; ) {
          const a = t[o];
          a.parentID && Se.call(this.vueComponent, ["shapeColors", a.parentID]) || a.parentID && be.call(this.vueComponent, ["shapeColors", a.parentID], ys(this.shapeColorScale(parseInt(a.parentID) - 1)).formatHex());
        }
      }
      if (this.env === "development") {
        let o = 1 / 0, a = -1 / 0;
        for (const c of t) {
          const f = (s = c == null ? void 0 : c.bestScore) == null ? void 0 : s.total;
          if (f !== 0 && f !== null && f !== void 0) {
            o = f, a = f;
            break;
          }
        }
        const l = t.reduce((c, f) => {
          var d;
          const h = (d = f == null ? void 0 : f.bestScore) == null ? void 0 : d.total;
          return h === 0 || h === null || h === void 0 ? c : h < c ? h : c;
        }, o), u = t.reduce((c, f) => {
          var d;
          const h = (d = f == null ? void 0 : f.bestScore) == null ? void 0 : d.total;
          return h == null ? c : h > c ? h : c;
        }, a);
        this.scoreColorScale = pe.scaleSequential([Ve(251, 224, 255), Ve(122, 0, 138)]).domain([l, u]);
      }
      if (!t || !t.length || (this.shapeWrappers = this.shapeGroup.selectAll("g").data(t).join("g").attr("class", "shape-group"), !this.shapeWrappers.size())) return !1;
      if (this.shapes = this.shapeWrappers.append("rect").attr("class", "shape").attr("fill", (o) => this.getShapeColor(o)).attr("stroke-width", () => this.env === "development" ? 3 : 0).attr("width", (o) => this.getWidthAttribute(o)).attr("height", (o) => this.getHeightAttribute(o)), this.main) {
        const o = [];
        t.forEach((a) => {
          if (a != null && a._banding)
            for (const [l, u] of Object.entries(a._banding)) {
              if (!u || ["a", "b", "c", "d"].includes(l)) continue;
              let c = l;
              if (a.rot)
                switch (l) {
                  case "x1":
                    c = "y1";
                    break;
                  case "x2":
                    c = "y2";
                    break;
                  case "y1":
                    c = "x2";
                    break;
                  case "y2":
                    c = "x1";
                    break;
                }
              switch (c) {
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
        ).attr("stroke-width", 2).attr("stroke", "white"), this.shapeIDText = this.shapeWrappers.append("text").attr("class", "shape-text id").text((a) => {
          var l, u;
          if (this.env === "development")
            switch (this.debug) {
              case "guillotine": {
                const c = a.guillotineData.myStripDirection, f = a.addedAsGroup;
                let h = "";
                return c === "l" ? h = `→ ${a.parentID}` : c === "w" && (h = `↑ ${a.parentID}`), (u = a == null ? void 0 : a.priotity) != null && u[(l = a == null ? void 0 : a.stock) == null ? void 0 : l.parentID] && (h += "P"), f && (h += "G"), h.length ? h : this.shapeNameText;
              }
              case "groups": {
                const c = a.addedAsGroup;
                if (c) return c.split(".")[0].toUpperCase();
              }
            }
          return a.parentID ? a.parentID : a.getParentID();
        }).classed("hidden", (a, l, u) => {
          const c = u[l].getBBox();
          return c.width >= this.measurementScale(a.l) || c.height >= this.yScale(a.w) - this.padding;
        }).attr("dominant-baseline", "middle").attr("fill", this.colors.text), this.shapeNameText = this.shapeWrappers.append("text").attr("class", "shape-text name").text((a) => !(a != null && a.name) || typeof (a == null ? void 0 : a.name) != "string" ? null : a.name.toUpperCase().trim()).call(this.trimNameToFit, this).classed("hidden", (a, l, u) => u[l].getBBox().width >= this.measurementScale(a.l) || this.measurementScale(a.w) < 40).attr("dominant-baseline", "middle").attr("fill", this.colors.text), this.shapeLengthText = this.shapeWrappers.append("text").attr("class", "shape-text length").text((a) => this.debug === "guillotine" ? "" : Q(
          a.l,
          this.units,
          this.decimalPlaces,
          !1,
          this.fractionRoundTo
        )).classed("hidden", (a, l, u) => {
          var f;
          return this.app ? this.measurementScale(a.l) < 50 || this.measurementScale(a.w) < 50 : ((f = a == null ? void 0 : a.stock) == null ? void 0 : f.type) === "linear" ? !1 : u[l].getBBox().width >= this.measurementScale(a.l) || this.measurementScale(a.w) < 30;
        }).attr("dominant-baseline", "middle").attr("fill", this.colors.text), this.shapeWidthText = this.shapeWrappers.append("text").attr("class", "shape-text width").text((a) => this.debug === "guillotine" ? "" : Q(
          a.w,
          this.units,
          this.decimalPlaces,
          !1,
          this.fractionRoundTo
        )).classed("hidden", (a, l, u) => {
          if (this.app)
            return this.measurementScale(a.l) < 50 || this.measurementScale(a.w) < 50;
          const c = u[l].getBBox();
          return this.measurementScale(a.l) < 30 || c.height >= this.measurementScale(a.w);
        }).attr("dominant-baseline", "middle").attr("fill", this.colors.text);
      }
      (this.main || this.app) && !((r = this == null ? void 0 : this.options) != null && r.disableClick) && (this.shapes.on("mousedown", (o, a) => {
        var l, u, c, f, h;
        if (this.moving) return !1;
        if (this.env === "development") {
          if (console.clear(), a) {
            let d = ["id", "placementOrder", "priority", "addedAsGroup"];
            this.debug === "guillotine" ? d = [
              "id",
              "placementOrder",
              "priority",
              "guillotineData.myPhase",
              "guillotineData.myStripDirection",
              "guillotineData.myStripParent",
              "guillotineData.firstShape",
              "addedAsGroup"
            ] : this.debug === "groups" && (d = [
              "id",
              "addedAsGroup"
            ]), console.table(d.reduce((p, w) => {
              const E = Td(a, w);
              return p[w] = Array.isArray(E) ? E.join(", ") : E, p;
            }, {}));
          }
          if (this.debug === "guillotine") {
            this.shapeWrappers.selectAll(".highlight-a").classed("highlight-a", !1), this.shapeWrappers.selectAll(".highlight-b").classed("highlight-b", !1), this.shapeWrappers.selectAll(".highlight-c").classed("highlight-c", !1);
            const d = (l = a.guillotineData) == null ? void 0 : l.myStripParent, p = (c = (u = t.find((w) => w.id === d)) == null ? void 0 : u.guillotineData) == null ? void 0 : c.myStripParent;
            d && this.shapeWrappers.filter((v) => v.id === d || v.addedAsGroup === d).select("rect").classed("highlight-a", !0), p && this.shapeWrappers.filter((v) => v.id === p || v.addedAsGroup === d).select("rect").classed("highlight-b", !0);
          }
        }
        if (this.app || this.embed) {
          const d = {
            name: a.name,
            id: a.id,
            x: a.x,
            y: a.y,
            l: a.l,
            w: a.w,
            banding: a != null && a.banding && typeof a.banding == "object" ? a.banding : null,
            rot: a.rot,
            stock: (f = a == null ? void 0 : a.stock) == null ? void 0 : f.id,
            color: (h = this.getShapeColor(a)) == null ? void 0 : h.toString(),
            notes: a == null ? void 0 : a.notes
          }, p = new CustomEvent("partClick", {
            detail: d
          });
          if (this.env === "development" && console.log(d), this.htmlEl.dispatchEvent(p), this.app) return !1;
        }
        if (this.device === "desktop" && (this.resetCutMeasurementAxes(), this.addShapeAxes(a)), this.moveMode) {
          if (a.stock.cutType === "efficiency" || a.stock.type === "linear") {
            const d = Ti.call(this.vueComponent, "partsBin");
            d && d.addToPartBin(a);
          }
        } else
          this.findShape(a.id);
      }), !this.app && !this.hasTouch && this.shapes.on(
        "mouseover",
        (o) => {
          this != null && this.moveMode && this.moving || (pe.select(o.target).classed("hover", !0), pe.select(o.target).classed("selected") || pe.select(o.target).style(
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
          pe.select(o.target).classed("hover", !1), pe.select(o.target).classed("selected") || pe.select(o.target).style(
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
  findShapeElement(t) {
    const n = this.shapeWrappers.filter((i) => i.id === t);
    return n.empty() ? null : n.node();
  }
  findShape(t) {
    const n = this.findShapeElement(t), i = Se.call(this.vueComponent, ["shapeList"]).find((s) => s.id === t);
    n && this.selectShape(n, i);
  }
  selectShape(t, n) {
    be.call(this.vueComponent, ["examineShape"], n), this.shapes.classed("selected", !1), this.shapes.style("fill", (s) => this.getShapeColor(s));
    const i = pe.select(t).select("rect");
    i && (i.classed("selected", !0), i.style("fill", this.colors.partSelected.toString()));
  }
  /**
      * update SHAPE visibility - used for replay
      * @param {Number} number
      */
  updateShapeVisibility(t) {
    var n;
    (n = this == null ? void 0 : this.shapeWrappers) == null || n.style("visibility", (i) => (i == null ? void 0 : i.placementOrder) >= t ? "hidden" : "visible");
  }
  isCutComplete(t, n, i) {
    return t.guillotineData.parentSegmentID === n && i && t.guillotineData.segmentCutOrder < i;
  }
  isCutInsideSegment(t, n) {
    var i;
    return ((i = t.guillotineData) == null ? void 0 : i.parentSegmentID) !== null && !(t != null && t.isTrim) ? t.guillotineData.parentSegmentID === n : !1;
  }
  //update CUT visibility
  updateCutVisibility(t, n = null, i = "") {
    var u, c, f, h, d, p, w, E, v;
    if (n === null || t == null || this != null && this.cuts.empty()) return;
    this.resetShapeAxes(), this.resetCutMeasurementAxes(), pe.select(this.cuts.nodes()[n].parentNode).raise();
    const s = (u = t.guillotineData) == null ? void 0 : u.parentSegmentID, r = this.getHalfBladeWidth(t.stock), o = t.dimension === "l" ? "y" : "x", a = (c = t == null ? void 0 : t.stock) == null ? void 0 : c.trim, l = i === "ptx" ? "ptxOrder" : "order";
    if ((((f = t == null ? void 0 : t.stock) == null ? void 0 : f.cutType) === "guillotine" || ((h = t == null ? void 0 : t.stock) == null ? void 0 : h.cutType) === "beam") && s !== null && typeof s < "u") {
      if (this.cuts.style("visibility", (k) => typeof t.guillotineData[l] == "number" && k.guillotineData[l] <= t.guillotineData[l] || !i && k.guillotineData.parentSegmentID === s ? "visible" : "hidden"), this.cuts.classed("highlight", (k) => t.stock.cutType === "guillotine" && k.isTrim ? k.type === t.type : k.guillotineData[l] === t.guillotineData[l]), this.cuts.classed("ptx-dummy", (k) => k.guillotineData.ptxDummyCut), !i) {
        const k = (d = t == null ? void 0 : t.guillotineData) == null ? void 0 : d.segmentCutOrder;
        if (k == null)
          return;
        this.cuts.classed("completed", (L) => this.isCutComplete(L, s, k)), this.cuts.classed("inside-segment", (L) => this.isCutInsideSegment(L, s));
        let g, b;
        const A = this.getCutSegments(t);
        if (A === !1) return;
        const N = (w = A == null ? void 0 : A.siblings) == null ? void 0 : w[(p = A.main) != null && p.hasBeamTrim ? k - 1 : k];
        N && ((t == null ? void 0 : t.dimension) === "l" ? g = [
          [
            N.y,
            N.y + N.w
          ],
          [
            t.y1 + r,
            (A == null ? void 0 : A.main.y) + (A == null ? void 0 : A.main.w)
          ]
        ] : (t == null ? void 0 : t.dimension) === "w" && (g = [
          [
            N.x,
            N.x + N.l
          ],
          [
            t.x1 + r,
            (A == null ? void 0 : A.main.x) + (A == null ? void 0 : A.main.l)
          ]
        ]), (t == null ? void 0 : t.dimension) === "l" ? b = [(E = t == null ? void 0 : t.distances) == null ? void 0 : E.bottom, t == null ? void 0 : t.distances.top] : (t == null ? void 0 : t.dimension) === "w" && (b = [t == null ? void 0 : t.distances.left, (v = t == null ? void 0 : t.distances) == null ? void 0 : v.right]), this.device === "desktop" && !t.isTrim && this.addCutMeasurementAxes(g, b, o));
      }
    } else {
      this.cuts.style("visibility", (g, b) => b <= n ? "visible" : "hidden");
      let k;
      if ((t == null ? void 0 : t.dimension) === "l" ? k = [
        [0 + (a.y1 ?? 0), t.y1 - r],
        [
          t.y1 + r,
          t.stock.w - (a != null && a.y2 ? a.y2 : 0)
        ]
      ] : (t == null ? void 0 : t.dimension) === "w" && (k = [
        [0 + (a.x1 ?? 0), t.x1 - r],
        [
          t.x1 + r,
          t.stock.l - (a != null && a.x2 ? a.x2 : 0)
        ]
      ]), k != null && k.length) {
        const g = [
          k[0][1] - k[0][0],
          k[1][1] - k[1][0]
        ];
        this.device === "desktop" && !t.isTrim && this.addCutMeasurementAxes(k, g, o);
      }
      this.cuts.classed(
        "highlight",
        (g, b) => b === n
      );
    }
    this.cuts.attr("stroke-width", (k, g) => {
      var N;
      let b = Math.ceil(this.measurementScale(this.getBladeWidth(k.stock)));
      const A = (N = t == null ? void 0 : t.guillotineData) == null ? void 0 : N.segmentCutOrder;
      return (this.isCutComplete(k, s, A) || this.isCutInsideSegment(k, s)) && (b += 1), g === n && Math.ceil(this.measurementScale(this.getBladeWidth(k.stock))) < 5 && (b = 5), b;
    });
  }
  //highlight a specific cut (by order or index), segments and related measurements
  showCut(t, n = null, i = "") {
    var u;
    if (n === null) return !1;
    if (this.updateCutVisibility(t, n, i), i === "ptx") {
      this.resetSegments();
      return;
    }
    const s = this.getCutSegments(t);
    if (s === !1) return;
    const { main: r, siblings: o } = s;
    if (!((u = t == null ? void 0 : t.guillotineData) != null && u.parentSegmentID))
      return this.initSegments([r]);
    const a = o == null ? void 0 : o.length;
    let l = [];
    if (a) {
      for (let f = a; f--; )
        o[f] && (o[f].completed = !1);
      if (t.guillotineData.segmentCutOrder === void 0 || t.guillotineData.segmentCutOrder === null)
        return;
      const c = t.guillotineData.segmentCutOrder;
      for (let f = 0; f < a; f++)
        f < c && (o[f].completed = !0);
      l.push(...o), l = l.filter((f) => f);
    }
    l.length && (this.resetSegments(), this.initSegments(l));
  }
  /**
      * toggle the visibility of the shapes
      * @param {Boolean} show
      */
  toggleShapes(t = !1) {
    t ? (this.shapeGroup.attr("display", "block"), this.bandingGroup.attr("display", "block")) : (this.shapeGroup.attr("display", "none"), this.bandingGroup.attr("display", "none"));
  }
  /**
      * add measurements to an axis
      * @param {Array} measurements array of arrays
      * @param {Array} values array of values
      * @param {String} axis x | y
      */
  addCutMeasurementAxes(t, n, i) {
    !i || !(t != null && t.length) || t.forEach((s, r) => {
      const o = s[0], a = s[1];
      if (i === "x") {
        const l = pe.scaleLinear().domain([o, a]).range([
          this.xPositionScale(o),
          this.xPositionScale(a)
        ]), u = (l.domain()[1] - l.domain()[0]) / 2 + l.domain()[0], c = this.axisGroup.append("g").attr(
          "transform",
          `translate(0, ${this.h - this.padding + this.axisSpacing})`
        ).attr("class", "axis measurement x").call(pe.axisBottom(l).tickValues([u]).tickSize(4).tickFormat(() => this.formatNumber(n[r])));
        c.selectAll("text").attr("x", 0).attr("y", 0).attr(
          "dy",
          (f, h, d) => d[h].getBBox().height + 10
        ), this.cutMeasurementXAxes.push(c);
      } else {
        const l = pe.scaleLinear().domain([o, a]).range([
          this.yPositionScale(o),
          this.yPositionScale(a)
        ]), u = (l.domain()[1] - l.domain()[0]) / 2 + l.domain()[0], c = this.axisGroup.append("g").attr(
          "transform",
          `translate(${this.padding - this.axisSpacing}, 0)`
        ).attr("class", "axis measurement y").call(pe.axisLeft(l).tickValues([u]).tickSize(4).tickFormat(() => this.formatNumber(n[r])));
        c.selectAll("text").attr("x", 0).attr("y", 0).attr(
          "dy",
          (f, h, d) => d[h].getBBox().height + 10
        ).attr(
          "dx",
          (f, h, d) => d[h].getBBox().width / 4
        ).attr(
          "transform",
          (f, h, d) => "rotate(90) translate(" + d[h].getBBox().width / 4 + ")"
        ), this.cutMeasurementYAxes.push(c);
      }
    });
  }
  /**
      * add the shape axes
      * @param {Shape} shape
      */
  addShapeAxes(t) {
    var l;
    this.shapeXAxis && this.shapeXAxis.remove(), this.shapeYAxis && this.shapeYAxis.remove();
    const n = t.x, i = t.x + t.l, s = pe.scaleLinear().domain([n, i]).range([this.xPositionScale(n), this.xPositionScale(i)]), r = t.y, o = t.y + t.w, a = pe.scaleLinear().domain([r, o]).range([this.yPositionScale(r), this.yPositionScale(o)]);
    this.shapeXAxis = this.axisGroup.append("g").attr(
      "transform",
      `translate(0, ${this.h - this.padding + this.axisSpacing})`
    ).attr("class", "axis shape x").call(pe.axisBottom(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)), this.shapeXAxis.selectAll("text").attr("dx", (u, c, f) => {
      const h = f[c];
      if (h === null) return;
      const d = h.getBBox();
      return c === 0 ? -d.width / 2 : d.width / 2;
    }), ((l = t == null ? void 0 : t.stock) == null ? void 0 : l.type) !== "linear" && (this.shapeYAxis = this.axisGroup.append("g").attr(
      "transform",
      `translate(${this.padding - this.axisSpacing}, 0)`
    ).attr("class", "axis shape y").call(pe.axisLeft(a).tickValues(a.domain()).tickSize(4).tickFormat(this.formatNumber)), this.shapeYAxis.selectAll("text").attr("x", 0).attr("y", 0).attr(
      "dy",
      (u, c, f) => {
        var h, d;
        return ((d = (h = f[c]) == null ? void 0 : h.getBBox()) == null ? void 0 : d.height) + 2;
      }
    ).attr(
      "dx",
      (u, c, f) => {
        var h, d;
        return ((d = (h = f[c]) == null ? void 0 : h.getBBox()) == null ? void 0 : d.width) / 2;
      }
    ).attr("transform", (u, c, f) => {
      var h, d, p, w, E, v, k, g;
      return this.flipY ? c === 0 ? "rotate(90) translate(-" + ((d = (h = f[c]) == null ? void 0 : h.getBBox()) == null ? void 0 : d.width) / 2 + ")" : "rotate(90) translate(" + ((w = (p = f[c]) == null ? void 0 : p.getBBox()) == null ? void 0 : w.width) / 2 + ")" : c === 0 ? "rotate(90) translate(" + ((v = (E = f[c]) == null ? void 0 : E.getBBox()) == null ? void 0 : v.width) / 2 + ")" : "rotate(90) translate(-" + ((g = (k = f[c]) == null ? void 0 : k.getBBox()) == null ? void 0 : g.width) / 2 + ")";
    }));
  }
  getBandingAdjustment(t, n) {
    switch (t) {
      case "y1":
        if (n === "x") return 0;
        if (n === "y") return this.flipY ? 1 : -1;
        break;
      case "y2":
        if (n === "x") return 0;
        if (n === "y") return this.flipY ? -1 : 1;
        break;
      case "x1":
        if (n === "x") return this.flipX ? -1 : 1;
        if (n === "y") return 0;
        break;
      case "x2":
        if (n === "x") return this.flipX ? 1 : -1;
        if (n === "y") return 0;
        break;
    }
    return 0;
  }
  getRectangleCoordinate(t, n, i, s) {
    let r;
    if (n === "x") {
      let o;
      switch (i) {
        case "center":
          o = this.xPositionScale(t.x + t.l / 2), s && (o += s);
          break;
        case "right":
          o = this.xPositionScale(t.x + t.l), s && (o -= s);
          break;
        case "left":
        default:
          o = this.xPositionScale(this.flipX ? t.x - t.l : t.x), s && (o -= s);
      }
      r = o;
    } else if (n === "y") {
      let o;
      switch (i) {
        case "center":
          o = this.yPositionScale(t.y + t.w / 2), s && (o += s);
          break;
        case "bottom":
          o = this.yPositionScale(this.flipY ? t.y + t.w : t.y), s && (o += s);
          break;
        case "top":
        default:
          o = this.yPositionScale(this.flipY ? t.y : t.y + t.w), s && (o -= s);
      }
      r = o;
    }
    return r;
  }
  getRotatedSide(t) {
    switch (t) {
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
    if (!this.shapes) return !1;
    this.shapes.attr("x", (t) => this.getRectangleCoordinate(t, "x")).attr("y", (t) => this.getRectangleCoordinate(t, "y")).attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t)), this.main && (this.shapeIDText.attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t) => this.getRectangleCoordinate(t, "y", "center")).attr("dy", 1), this.shapeNameText && this.shapeNameText.attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, n, i) => this.getRectangleCoordinate(
      t,
      "y",
      "bottom",
      -(i[n].getBBox().height / 2 + 1)
    )), this.shapeLengthText.attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, n, i) => this.getRectangleCoordinate(
      t,
      "y",
      "top",
      -(i[n].getBBox().height / 2 + 2)
    )), this.shapeWidthText.attr(
      "transform",
      (t, n, i) => `translate(${this.getRectangleCoordinate(
        t,
        "x",
        "left",
        -(i[n].getBBox().height / 2 + 2)
      )},${this.getRectangleCoordinate(t, "y", "center")}) ${this.device === "mobile" ? "rotate(90)" : "rotate(-90)"}`
    ));
  }
  //init or update the cuts
  initCuts(t) {
    if (this.resetCuts(), !t || !(t != null && t.length) || !this.main || !this.elWidth)
      return !1;
    this.cuts = this.cutGroup.selectAll("line").data(t).join("line").attr("class", "cut").attr("stroke-width", (n) => {
      const i = this.measurementScale(this.getBladeWidth(n.stock));
      return i < 1 ? 1 : Math.ceil(i);
    }).attr("x1", (n) => this.xPositionScale(n.getVisCoords("x1"))).attr("x2", (n) => this.xPositionScale(n.getVisCoords("x2"))).attr("y1", (n) => this.yPositionScale(n.getVisCoords("y1"))).attr("y2", (n) => this.yPositionScale(n.getVisCoords("y2"))).classed("trim", (n) => n.isTrim);
  }
  //init or update the segments
  initSegments(t) {
    if (!t || !(t != null && t.length) || !this.main || !this.elWidth)
      return !1;
    this.resetSegments(), this.segments = this.segmentGroup.selectAll("rect").data(t).join("rect").attr("class", "segment").style("opacity", (n) => {
      if ((n == null ? void 0 : n.offcut) === !0) return 0.5;
    }).classed("offcut", (n) => n.offcut).classed("merged", (n) => n.merged).classed("near", (n) => n.shapePosition === "near").classed("far", (n) => n.shapePosition === "far").classed("completed", (n) => n.completed).attr("x", (n) => this.getRectangleCoordinate(n, "x")).attr("y", (n) => this.getRectangleCoordinate(n, "y")).attr("width", (n) => this.getWidthAttribute(n)).attr("height", (n) => this.getHeightAttribute(n)), this.segmentGroup.selectAll("text").data(t).join("text").attr("class", "segment-text").attr("x", (n) => this.getRectangleCoordinate(n, "x", "center")).attr("y", (n) => this.getRectangleCoordinate(n, "y", "center")).attr("text-anchor", "middle").text((n) => {
      if (this.env !== "development" || n.offcut) return null;
      if (n.cutDirection === "l")
        return this.env === "development" ? `→ ${n.id}` : "→";
      if (n.cutDirection === "w")
        return this.env === "development" ? `↑ ${n.id}` : "↑";
    }).attr("dominant-baseline", "middle"), !this.app && this.env === "development" && this.segments.on("mousedown", function(n, i) {
      const s = structuredClone(i);
      console.log([
        "id",
        "x",
        "y",
        "l",
        "w",
        "cutDirection",
        "cutPreference"
      ].reduce((o, a) => (o[a] = Td(s, a), o), {}));
    });
  }
  initGroups(t) {
    if (!t || !(t != null && t.length) || !this.main || !this.elWidth)
      return !1;
    this.resetGroups(), this.groups = this.groupGroup.selectAll("rect").data(t).join("rect").attr("class", "group").attr("x", (n) => this.getRectangleCoordinate(n, "x")).attr("y", (n) => this.getRectangleCoordinate(n, "y")).attr("width", (n) => this.getWidthAttribute(n)).attr("height", (n) => this.getHeightAttribute(n)), this.groupGroup.attr("display", "block");
  }
  //get relevant segments for a specific cut
  getCutSegments(t) {
    var o, a, l, u;
    const n = (o = t == null ? void 0 : t.guillotineData) == null ? void 0 : o.parentSegmentID, i = ((l = (a = this.vueComponent) == null ? void 0 : a.gs) == null ? void 0 : l.activeSegments) ?? ((u = this.vueComponent) == null ? void 0 : u.activeSegments);
    if (!i.length) return !1;
    let s;
    if (n ? s = i.find((c) => c.id === n) : s = i.find((c) => c.segmentType === "root"), s === void 0) return !1;
    const r = s == null ? void 0 : s.children;
    if (r != null && r.length) {
      const c = r.map((h) => {
        const d = i.find((p) => p.x === h.x && p.y === h.y && p.l === h.l && p.w === h.w);
        return d !== void 0 ? d : null;
      }).filter((h) => h !== null);
      return {
        main: s,
        siblings: c
      };
    }
    return !1;
  }
  /**
      * toggle the visibility of the segments
      * @param {Boolean} show
      */
  toggleSegments(t = !0) {
    t ? this.segmentGroup.attr("display", "block") : this.segmentGroup.attr("display", "none");
  }
  /**
      * show a list of possible movement positions
      */
  initPositions(t, n) {
    if (!n || !t || !this.main) return !1;
    let i;
    if (n.trimDimensions(), !t.willItFit(n, t.rot)) return !1;
    n.removeTrim();
    const s = Se.call(this.vueComponent, ["shapeList"]).filter((l) => {
      var u;
      return l.added && ((u = l == null ? void 0 : l.stock) == null ? void 0 : u.id) === n.id;
    }), r = VA(
      null,
      s,
      n
    );
    let o;
    n.cutType === "efficiency" && (o = GA(
      n,
      s
    ));
    const a = new Ui();
    for (const l of r.toArray()) {
      const u = JA(t, l, n);
      u && a.addPoints(u.toArray());
    }
    if (o)
      for (const l of o.toArray()) {
        const u = QA(t, l, n);
        u && a.addPoints(u.toArray());
      }
    n.cutType === "efficiency" ? ([
      new Ue(0 + (n.trim.x1 ?? 0), 0 + (n.trim.y1 ?? 0)),
      new Ue(0 + (n.trim.x1 ?? 0), 0 + (n.trim.y1 ?? 0)),
      new Ue(
        n.l - t.l - (n.trim.x2 ?? 0),
        0 + (n.trim.y1 ?? 0)
      ),
      new Ue(
        0 + (n.trim.x1 ?? 0),
        n.w - t.w - (n.trim.y2 ?? 0)
      ),
      new Ue(
        n.l - t.l - (n.trim.x2 ?? 0),
        n.w - t.w - (n.trim.y2 ?? 0)
      )
    ].forEach((l) => a.addPoint(l)), i = a.toArray()) : (a.addPoint(new Ue(0 + (n.trim.x1 ?? 0), 0 + (n.trim.y1 ?? 0))), i = a.toArray());
    for (let l = i.length; l--; ) {
      t.x = i[l].x, t.y = i[l].y;
      for (let u = s.length; u--; )
        if (this.collision(t, s[u], n)) {
          i.splice(l, 1);
          break;
        }
    }
    return this.positionGroup.selectAll("rect").data(i).join("rect").attr("data-id", (l, u) => u).attr("class", "shape ghost").attr("x", (l) => (t.x = l.x, this.getRectangleCoordinate(t, "x"))).attr("y", (l) => (t.y = l.y, this.getRectangleCoordinate(t, "y"))).attr("width", this.getWidthAttribute(t)).attr("height", this.getHeightAttribute(t)).on("mousedown", (l, u) => {
      l.stopPropagation();
      const c = Ti.call(this.vueComponent, "partsBin");
      c && c.moveShape(
        l.currentTarget,
        t,
        u
      );
    }), this.hasTouch || this.positionGroup.selectAll("rect").on(
      "mouseover",
      function(l) {
        l.stopPropagation(), pe.select(this).classed("hover", !0), pe.select(this).raise();
      },
      {
        passive: !0
      }
    ).on(
      "mouseout",
      function(l) {
        l.stopPropagation(), pe.select(this).classed("hover", !1);
      },
      {
        passive: !0
      }
    ), this.dotGroup.selectAll("circle").data(i).join("circle").attr("data-id", (l, u) => u).attr("class", "dot").attr("cx", (l) => (t.x = l.x, this.getRectangleCoordinate(t, "x"))).attr("cy", (l) => (t.y = l.y, this.getRectangleCoordinate(t, "y"))).attr("r", 8).on("mousedown", (l, u) => {
      l.stopPropagation();
      const c = Ti.call(this.vueComponent, "partsBin");
      c && c.moveShape(
        l.currentTarget,
        t,
        u
      );
    }), t.x = 0, t.y = 0, this.hasTouch || this.dotGroup.selectAll("circle").on(
      "mouseover",
      function(l) {
        l.stopPropagation(), pe.select(this).classed("hover", !0);
        const u = pe.select(this).attr("data-id"), c = pe.select(`.ghost[data-id="${u}"]`);
        c.raise(), c.classed("highlight", !0);
      },
      {
        passive: !0
      }
    ).on(
      "mouseout",
      function(l) {
        l.stopPropagation(), pe.select(this).classed("hover", !1);
        const u = pe.select(this).attr("data-id");
        pe.select(`.ghost[data-id="${u}"]`).classed(
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
      * show a list of placement positions
      */
  initPlacementPositions(t) {
    if (!(this.env !== "development" || this.debug !== "positions")) {
      if (!(t != null && t.length)) return !1;
      this.placementPositionGroup.selectAll("circle").data(t).join("circle").attr("data-id", (n, i) => i).attr("class", "dot").attr("cx", (n) => this.xPositionScale(n.x)).attr("cy", (n) => this.yPositionScale(n.y)).attr("r", 3).on("mousedown", (n) => {
        n.stopPropagation();
      });
    }
  }
  /**
      * toggle the visibility of the cuts
      * @param {Boolean} show
      */
  toggleCuts(t = !0) {
    t ? this.cutGroup.attr("display", "block") : this.cutGroup.attr("display", "none");
  }
  clearSelection() {
    var t;
    this != null && this.shapes && (this.shapes.classed("selected", !1), this.shapes.classed("hover", !1), this.shapes.style("fill", (n) => this.getShapeColor(n))), this != null && this.cuts && (this.cuts.classed("selected", !1), this.cuts.classed("highlight", !1), this.cuts.classed("inside-segment", !1), this.cuts.style("visibility", "visible"), this.cuts.attr("stroke-width", (n) => {
      const i = this.measurementScale(this.getBladeWidth(n.stock));
      return i < 1 ? 1 : Math.ceil(i);
    })), (t = this == null ? void 0 : this.shapes) != null && t.length && this.shapes.classed("selected", !1);
  }
  /**
      * add padding
      * this.padding will be 0 when necessary
      * @param {number} value
      */
  addPadding(t) {
    return t + this.padding;
  }
  /**
      * @param {Container} container
      * @returns {number} blade width
      */
  getBladeWidth(t = null) {
    var n, i;
    return $((n = this == null ? void 0 : this.saw) == null ? void 0 : n.bladeWidth) ? (i = this.saw) == null ? void 0 : i.bladeWidth : $(t) && t !== null ? t.getBladeWidth() : 0;
  }
  getHalfBladeWidth(t = null) {
    const n = this.getBladeWidth(t);
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
  resetGroups() {
    this.groupGroup && this.groupGroup.selectAll("*").remove();
  }
  resetCutMeasurementAxes() {
    var t, n;
    (t = this.cutMeasurementXAxes) != null && t.length && (this.cutMeasurementXAxes.forEach((i) => i.remove()), this.cutMeasurementXAxes.length = 0), (n = this.cutMeasurementYAxes) != null && n.length && (this.cutMeasurementYAxes.forEach((i) => i.remove()), this.cutMeasurementYAxes.length = 0);
  }
  resetPositions() {
    this.positionGroup && this.positionGroup.selectAll("*").remove(), this.dotGroup && this.dotGroup.selectAll("*").remove();
  }
  resetPlacementPositions() {
    this.placementPositionGroup && this.dotGroup.selectAll("*").remove();
  }
  reset() {
    this.resetPositions(), this.resetPlacementPositions(), this.resetShapes(), this.resetStock(), this.resetCuts(), this.resetSegments();
  }
  /**
      * detect collision - required for move mode
      * @param {object} thisShape
      * @param {object} testShape
      * @param {object} container
      * @returns {boolean} true if collision
      */
  collision(t, n, i) {
    if (t.id === n.id)
      throw new Error("collision comparing to self");
    return (
      // 1 left
      t.x < n.x + n.l + this.getBladeWidth(i) && // 2 right
      t.x + t.l + this.getBladeWidth(i) > n.x && // 3 bottom
      t.y < n.y + n.w + this.getBladeWidth(i) && // 4 top
      t.y + t.w + this.getBladeWidth(i) > n.y
    );
  }
}
function Td(e, t) {
  return t.split(".").reduce((n, i) => n[i], e);
}
function be(e, t, n = null) {
  var i;
  if (!(e != null && e[0])) return !1;
  switch (n) {
    case "shallow":
      t = Qn(t);
      break;
    case "raw":
      t = Qo(t);
      break;
  }
  return typeof ((i = this == null ? void 0 : this.gs) == null ? void 0 : i[e[0]]) < "u" ? Dh(this.gs, e, t) : typeof (this == null ? void 0 : this[e[0]]) < "u" && Dh(this, e, t), !0;
}
function Se(e) {
  var t;
  if (!(e != null && e[0]) || !this) return null;
  if ("gs" in this && typeof ((t = this == null ? void 0 : this.gs) == null ? void 0 : t[e[0]]) < "u")
    return vo(this.gs, e);
  if (typeof (this == null ? void 0 : this[e[0]]) < "u") return vo(this, e);
}
function PM(e) {
  var t;
  if (!(e != null && e[0])) return null;
  if ("optionsStore" in this && typeof ((t = this == null ? void 0 : this.optionsStore) == null ? void 0 : t[e[0]]) < "u")
    return vo(this.optionsStore, e);
  if (typeof (this == null ? void 0 : this[e[0]]) < "u") return vo(this, e);
}
function el(e) {
  e.queue = 0, e.stockCount = 0, e.shapeCount = 0, e.resultCount = 0, e.complete = !1;
}
function t2(e, t = null) {
  var n, i;
  typeof ((n = this.$refs) == null ? void 0 : n[e]) > "u" || ((i = this.$refs) == null ? void 0 : i[e]) === null || (t !== null ? this.$refs[e].visible = t : this.$refs[e].visible = !this.$refs[e].visible);
}
function n2(e, t) {
  return e != null && e.length ? e.find((n) => n.id === t) : null;
}
function i2(e, t, n = "") {
  if (!(e != null && e.length) || !t) return [];
  const i = e.filter((s) => {
    var r, o, a;
    if (n) {
      if (n === "ptx") return (((a = s == null ? void 0 : s.stock) == null ? void 0 : a.id) ?? (s == null ? void 0 : s.stockId)) === t.id;
    } else return (((r = s == null ? void 0 : s.stock) == null ? void 0 : r.id) ?? (s == null ? void 0 : s.stockId)) === t.id && !((o = s == null ? void 0 : s.guillotineData) != null && o.ptxDummyCut);
  });
  return i.sort((s, r) => {
    var o, a;
    return ((o = s == null ? void 0 : s.guillotineData) == null ? void 0 : o.order) - ((a = r == null ? void 0 : r.guillotineData) == null ? void 0 : a.order);
  }), i;
}
function s2(e) {
  return e != null && e.length ? e.filter((t) => t.used === !0) : [];
}
function r2(e = {
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
  if (this.visInit) return !1;
  this.vis = Qo(new e2(e)), this.vis.initStock(this.activeStock), this.vis.initShapes(this.activeShapes, this.shapeList), this.vis.initCuts(this.activeCuts, this.activeStock), this.visInit = !0;
}
function o2(e = !1) {
  var s;
  let t = ((s = this == null ? void 0 : this.gs) == null ? void 0 : s.inputStock) || (this == null ? void 0 : this.inputStock);
  if (!(t != null && t.length)) return ["No stock input"];
  const n = Se.call(this, ["stockList"]);
  n && (n.length = 0);
  const i = [];
  e && (t = [t[0]]);
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    !(o != null && o.q) && !o.autoAdd && !e || i.push(...this.createStock(o, r));
  }
  return i;
}
function a2(e = 0) {
  var i, s, r, o;
  if (this.thinking) return !1;
  this.thinking = !0, this.success = !1;
  const t = [];
  if (t.push(...h2.call(this)), t.length) {
    this.showMessage({
      heading: "Part issue",
      main: "Issue with part inputs:",
      list: t.slice(0, 5)
    }), this.thinking = !1;
    return;
  }
  if (this.reset(), t.push(...this.createStockList()), t.length) {
    this.showMessage({
      heading: `Stock issue${t.length > 1 ? "s" : ""}`,
      main: `${t.length} issue${t.length > 1 ? "s" : ""} found with stock inputs`,
      list: t.slice(0, 5)
    }), this.thinking = !1;
    return;
  }
  if (t.push(...this.createShapeList(e)), t.length) {
    this.showMessage({
      heading: "Part issue",
      main: "Issue with part inputs:",
      list: t.slice(0, 5)
    }), this.thinking = !1;
    return;
  }
  const n = new si(
    this.saw,
    ((i = this.saw) == null ? void 0 : i.stockType) ?? ((s = this.stockList) == null ? void 0 : s[0].type)
  );
  if (n.issues.length) {
    this.showMessage({
      heading: `Saw issue${n.issues.length > 1 ? "s" : ""}`,
      main: `${n.issues.length} issue${n.issues.length > 1 ? "s" : ""} found with saw inputs:`,
      list: n.issues.slice(0, 5)
    }), this.thinking = !1;
    return;
  }
  if (this.saw = n, !((r = this.stockList) != null && r.length)) {
    this.showMessage({
      heading: "No stock",
      main: "No stock items were found."
    }), this.thinking = !1;
    return;
  }
  if (!((o = this.shapeList) != null && o.length)) {
    this.showMessage({
      heading: "No parts",
      main: "No parts in list."
    }), this.thinking = !1;
    return;
  }
  this.debug && console.log(
    "SmartCut - calculating",
    "stock",
    this.stockList.map((a) => a.dimensions()),
    "parts",
    this.shapeList.map((a) => a.dimensions())
  ), this.socket.connect(), this.socket.compress(!0).emit(
    "calculate",
    {
      inputs: {
        shapeList: this.inputShapes,
        stockList: this.inputStock,
        saw: this.saw
      },
      saw: this.saw,
      shapeList: this.shapeList,
      stockList: this.stockList,
      enableEvo: this.enableEvo,
      domain: this.domain
    }
  );
}
function l2() {
  const e = Se.call(this, ["vis"]);
  if (!e) return;
  const t = Se.call(this, ["shapeList"]);
  if (!(t != null && t.length)) return !1;
  e.resetPositions(), e.resetShapes();
  const n = Se.call(this, ["activeShapes"]);
  e.initShapes(n, t);
  const i = Ti.call(this, "PartsBin");
  i && i.clear(!1);
}
function c2() {
  const e = Se.call(this, ["vis"]);
  if (!e) return;
  const t = Se.call(this, ["stockList"]);
  if (!(t != null && t.length)) return !1;
  const n = Se.call(this, ["activeStock"]);
  e.initStock(n);
  const i = Se.call(this, ["activeCuts"]);
  e.initCuts(i);
  const s = Se.call(this, ["activeSegments"]);
  e.initSegments(s), e.resetPositions(), typeof this.toggleSegments == "function" && this.toggleSegments(!1), this != null && this.cutMode && (this == null || this.showCut(0));
}
function u2() {
  var t;
  const e = ((t = this == null ? void 0 : this.gs) == null ? void 0 : t.vis) ?? (this == null ? void 0 : this.vis);
  e && (e.clearSelection(), e.resetShapeAxes(), e.resetCutMeasurementAxes(), e.resetPositions());
}
function f2(e) {
  Se.call(this, ["examineShape"]) && (this.examineShape = null), be.call(this, ["activeStockId"], e);
}
function h2() {
  var i;
  const e = [], t = ((i = this == null ? void 0 : this.gs) == null ? void 0 : i.inputShapes) ?? (this == null ? void 0 : this.inputShapes);
  t.length || e.push("No parts found");
  const n = YE(t);
  return (!(t != null && t.length) || !n) && e.push("No quantity of parts found"), e;
}
function Ti(e, t = 0) {
  var s;
  let n = this;
  for (let r = 0; r < t; r++) {
    if (!n.$parent)
      return null;
    n = n.$parent;
  }
  const i = (s = n == null ? void 0 : n.$refs) == null ? void 0 : s[e];
  return i || null;
}
function d2(e) {
  if (e === !1 && this.allowOnlineMessages) {
    const t = {
      heading: "Offline",
      main: "<p>Looks like you have just gone offline.</p><p>Calculations are disabled for now.</p>"
    };
    typeof this.showModalMessage == "function" && this.showModalMessage(t), this.allowOnlineMessages = !1, this.onlineTimer = setTimeout(() => {
      this.allowOnlineMessages = !0;
    }, 3e4);
  }
}
function p2(e) {
  return wp() ? (Zb(e), !0) : !1;
}
function nf(e) {
  return typeof e == "function" ? e() : Dp(e);
}
const g2 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const m2 = Object.prototype.toString, y2 = (e) => m2.call(e) === "[object Object]", b2 = () => {
};
function w2(e, t) {
  function n(...i) {
    return new Promise((s, r) => {
      Promise.resolve(e(() => t.apply(this, i), { fn: t, thisArg: this, args: i })).then(s).catch(r);
    });
  }
  return n;
}
const $y = (e) => e();
function v2(e = $y) {
  const t = rs(!0);
  function n() {
    t.value = !1;
  }
  function i() {
    t.value = !0;
  }
  const s = (...r) => {
    t.value && e(...r);
  };
  return { isActive: Rc(t), pause: n, resume: i, eventFilter: s };
}
function _2(e) {
  return ta();
}
function x2(e, t, n = {}) {
  const {
    eventFilter: i = $y,
    ...s
  } = n;
  return Fn(
    e,
    w2(
      i,
      t
    ),
    s
  );
}
function S2(e, t, n = {}) {
  const {
    eventFilter: i,
    ...s
  } = n, { eventFilter: r, pause: o, resume: a, isActive: l } = v2(i);
  return { stop: x2(
    e,
    t,
    {
      ...s,
      eventFilter: r
    }
  ), pause: o, resume: a, isActive: l };
}
function k2(e, t = !0, n) {
  _2() ? zc(e, n) : t ? e() : Bc(e);
}
function E2(e) {
  var t;
  const n = nf(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const qo = g2 ? window : void 0;
function Ad(...e) {
  let t, n, i, s;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, i, s] = e, t = qo) : [t, n, i, s] = e, !t)
    return b2;
  Array.isArray(n) || (n = [n]), Array.isArray(i) || (i = [i]);
  const r = [], o = () => {
    r.forEach((c) => c()), r.length = 0;
  }, a = (c, f, h, d) => (c.addEventListener(f, h, d), () => c.removeEventListener(f, h, d)), l = Fn(
    () => [E2(t), nf(s)],
    ([c, f]) => {
      if (o(), !c)
        return;
      const h = y2(f) ? { ...f } : f;
      r.push(
        ...n.flatMap((d) => i.map((p) => a(c, d, p, h)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    l(), o();
  };
  return p2(u), u;
}
const qr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ur = "__vueuse_ssr_handlers__", C2 = /* @__PURE__ */ T2();
function T2() {
  return Ur in qr || (qr[Ur] = qr[Ur] || {}), qr[Ur];
}
function A2(e, t) {
  return C2[e] || t;
}
function O2(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const P2 = {
  boolean: {
    read: (e) => e === "true",
    write: (e) => String(e)
  },
  object: {
    read: (e) => JSON.parse(e),
    write: (e) => JSON.stringify(e)
  },
  number: {
    read: (e) => Number.parseFloat(e),
    write: (e) => String(e)
  },
  any: {
    read: (e) => e,
    write: (e) => String(e)
  },
  string: {
    read: (e) => e,
    write: (e) => String(e)
  },
  map: {
    read: (e) => new Map(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e.entries()))
  },
  set: {
    read: (e) => new Set(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e))
  },
  date: {
    read: (e) => new Date(e),
    write: (e) => e.toISOString()
  }
}, Od = "vueuse-storage";
function N2(e, t, n, i = {}) {
  var s;
  const {
    flush: r = "pre",
    deep: o = !0,
    listenToStorageChanges: a = !0,
    writeDefaults: l = !0,
    mergeDefaults: u = !1,
    shallow: c,
    window: f = qo,
    eventFilter: h,
    onError: d = (H) => {
      console.error(H);
    },
    initOnMounted: p
  } = i, w = (c ? Qn : rs)(typeof t == "function" ? t() : t);
  if (!n)
    try {
      n = A2("getDefaultStorage", () => {
        var H;
        return (H = qo) == null ? void 0 : H.localStorage;
      })();
    } catch (H) {
      d(H);
    }
  if (!n)
    return w;
  const E = nf(t), v = O2(E), k = (s = i.serializer) != null ? s : P2[v], { pause: g, resume: b } = S2(
    w,
    () => N(w.value),
    { flush: r, deep: o, eventFilter: h }
  );
  f && a && k2(() => {
    Ad(f, "storage", B), Ad(f, Od, j), p && B();
  }), p || B();
  function A(H, D) {
    f && f.dispatchEvent(new CustomEvent(Od, {
      detail: {
        key: e,
        oldValue: H,
        newValue: D,
        storageArea: n
      }
    }));
  }
  function N(H) {
    try {
      const D = n.getItem(e);
      if (H == null)
        A(D, null), n.removeItem(e);
      else {
        const K = k.write(H);
        D !== K && (n.setItem(e, K), A(D, K));
      }
    } catch (D) {
      d(D);
    }
  }
  function L(H) {
    const D = H ? H.newValue : n.getItem(e);
    if (D == null)
      return l && E != null && n.setItem(e, k.write(E)), E;
    if (!H && u) {
      const K = k.read(D);
      return typeof u == "function" ? u(K, E) : v === "object" && !Array.isArray(K) ? { ...E, ...K } : K;
    } else return typeof D != "string" ? D : k.read(D);
  }
  function B(H) {
    if (!(H && H.storageArea !== n)) {
      if (H && H.key == null) {
        w.value = E;
        return;
      }
      if (!(H && H.key !== e)) {
        g();
        try {
          (H == null ? void 0 : H.newValue) !== k.write(w.value) && (w.value = L(H));
        } catch (D) {
          d(D);
        } finally {
          H ? Bc(b) : b();
        }
      }
    }
  }
  function j(H) {
    B(H.detail);
  }
  return w;
}
function Pd(e, t, n = {}) {
  const { window: i = qo } = n;
  return N2(e, t, i == null ? void 0 : i.localStorage, n);
}
const Sn = /* @__PURE__ */ Object.create(null);
Sn.open = "0";
Sn.close = "1";
Sn.ping = "2";
Sn.pong = "3";
Sn.message = "4";
Sn.upgrade = "5";
Sn.noop = "6";
const eo = /* @__PURE__ */ Object.create(null);
Object.keys(Sn).forEach((e) => {
  eo[Sn[e]] = e;
});
const nc = { type: "error", data: "parser error" }, By = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", jy = typeof ArrayBuffer == "function", qy = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, sf = ({ type: e, data: t }, n, i) => By && t instanceof Blob ? n ? i(t) : Nd(t, i) : jy && (t instanceof ArrayBuffer || qy(t)) ? n ? i(t) : Nd(new Blob([t]), i) : i(Sn[e] + (t || "")), Nd = (e, t) => {
  const n = new FileReader();
  return n.onload = function() {
    const i = n.result.split(",")[1];
    t("b" + (i || ""));
  }, n.readAsDataURL(e);
};
function Id(e) {
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let tl;
function I2(e, t) {
  if (By && e.data instanceof Blob)
    return e.data.arrayBuffer().then(Id).then(t);
  if (jy && (e.data instanceof ArrayBuffer || qy(e.data)))
    return t(Id(e.data));
  sf(e, !1, (n) => {
    tl || (tl = new TextEncoder()), t(tl.encode(n));
  });
}
const Md = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Us = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < Md.length; e++)
  Us[Md.charCodeAt(e)] = e;
const M2 = (e) => {
  let t = e.length * 0.75, n = e.length, i, s = 0, r, o, a, l;
  e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
  const u = new ArrayBuffer(t), c = new Uint8Array(u);
  for (i = 0; i < n; i += 4)
    r = Us[e.charCodeAt(i)], o = Us[e.charCodeAt(i + 1)], a = Us[e.charCodeAt(i + 2)], l = Us[e.charCodeAt(i + 3)], c[s++] = r << 2 | o >> 4, c[s++] = (o & 15) << 4 | a >> 2, c[s++] = (a & 3) << 6 | l & 63;
  return u;
}, L2 = typeof ArrayBuffer == "function", rf = (e, t) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: Uy(e, t)
    };
  const n = e.charAt(0);
  return n === "b" ? {
    type: "message",
    data: D2(e.substring(1), t)
  } : eo[n] ? e.length > 1 ? {
    type: eo[n],
    data: e.substring(1)
  } : {
    type: eo[n]
  } : nc;
}, D2 = (e, t) => {
  if (L2) {
    const n = M2(e);
    return Uy(n, t);
  } else
    return { base64: !0, data: e };
}, Uy = (e, t) => {
  switch (t) {
    case "blob":
      return e instanceof Blob ? e : new Blob([e]);
    case "arraybuffer":
    default:
      return e instanceof ArrayBuffer ? e : e.buffer;
  }
}, Wy = "", R2 = (e, t) => {
  const n = e.length, i = new Array(n);
  let s = 0;
  e.forEach((r, o) => {
    sf(r, !1, (a) => {
      i[o] = a, ++s === n && t(i.join(Wy));
    });
  });
}, F2 = (e, t) => {
  const n = e.split(Wy), i = [];
  for (let s = 0; s < n.length; s++) {
    const r = rf(n[s], t);
    if (i.push(r), r.type === "error")
      break;
  }
  return i;
};
function $2() {
  return new TransformStream({
    transform(e, t) {
      I2(e, (n) => {
        const i = n.length;
        let s;
        if (i < 126)
          s = new Uint8Array(1), new DataView(s.buffer).setUint8(0, i);
        else if (i < 65536) {
          s = new Uint8Array(3);
          const r = new DataView(s.buffer);
          r.setUint8(0, 126), r.setUint16(1, i);
        } else {
          s = new Uint8Array(9);
          const r = new DataView(s.buffer);
          r.setUint8(0, 127), r.setBigUint64(1, BigInt(i));
        }
        e.data && typeof e.data != "string" && (s[0] |= 128), t.enqueue(s), t.enqueue(n);
      });
    }
  });
}
let nl;
function Wr(e) {
  return e.reduce((t, n) => t + n.length, 0);
}
function zr(e, t) {
  if (e[0].length === t)
    return e.shift();
  const n = new Uint8Array(t);
  let i = 0;
  for (let s = 0; s < t; s++)
    n[s] = e[0][i++], i === e[0].length && (e.shift(), i = 0);
  return e.length && i < e[0].length && (e[0] = e[0].slice(i)), n;
}
function B2(e, t) {
  nl || (nl = new TextDecoder());
  const n = [];
  let i = 0, s = -1, r = !1;
  return new TransformStream({
    transform(o, a) {
      for (n.push(o); ; ) {
        if (i === 0) {
          if (Wr(n) < 1)
            break;
          const l = zr(n, 1);
          r = (l[0] & 128) === 128, s = l[0] & 127, s < 126 ? i = 3 : s === 126 ? i = 1 : i = 2;
        } else if (i === 1) {
          if (Wr(n) < 2)
            break;
          const l = zr(n, 2);
          s = new DataView(l.buffer, l.byteOffset, l.length).getUint16(0), i = 3;
        } else if (i === 2) {
          if (Wr(n) < 8)
            break;
          const l = zr(n, 8), u = new DataView(l.buffer, l.byteOffset, l.length), c = u.getUint32(0);
          if (c > Math.pow(2, 21) - 1) {
            a.enqueue(nc);
            break;
          }
          s = c * Math.pow(2, 32) + u.getUint32(4), i = 3;
        } else {
          if (Wr(n) < s)
            break;
          const l = zr(n, s);
          a.enqueue(rf(r ? l : nl.decode(l), t)), i = 0;
        }
        if (s === 0 || s > e) {
          a.enqueue(nc);
          break;
        }
      }
    }
  });
}
const zy = 4;
function Ye(e) {
  if (e) return j2(e);
}
function j2(e) {
  for (var t in Ye.prototype)
    e[t] = Ye.prototype[t];
  return e;
}
Ye.prototype.on = Ye.prototype.addEventListener = function(e, t) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this;
};
Ye.prototype.once = function(e, t) {
  function n() {
    this.off(e, n), t.apply(this, arguments);
  }
  return n.fn = t, this.on(e, n), this;
};
Ye.prototype.off = Ye.prototype.removeListener = Ye.prototype.removeAllListeners = Ye.prototype.removeEventListener = function(e, t) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var n = this._callbacks["$" + e];
  if (!n) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + e], this;
  for (var i, s = 0; s < n.length; s++)
    if (i = n[s], i === t || i.fn === t) {
      n.splice(s, 1);
      break;
    }
  return n.length === 0 && delete this._callbacks["$" + e], this;
};
Ye.prototype.emit = function(e) {
  this._callbacks = this._callbacks || {};
  for (var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], i = 1; i < arguments.length; i++)
    t[i - 1] = arguments[i];
  if (n) {
    n = n.slice(0);
    for (var i = 0, s = n.length; i < s; ++i)
      n[i].apply(this, t);
  }
  return this;
};
Ye.prototype.emitReserved = Ye.prototype.emit;
Ye.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
Ye.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const xa = typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, n) => n(t, 0), jt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), q2 = "arraybuffer";
function Vy(e, ...t) {
  return t.reduce((n, i) => (e.hasOwnProperty(i) && (n[i] = e[i]), n), {});
}
const U2 = jt.setTimeout, W2 = jt.clearTimeout;
function Sa(e, t) {
  t.useNativeTimers ? (e.setTimeoutFn = U2.bind(jt), e.clearTimeoutFn = W2.bind(jt)) : (e.setTimeoutFn = jt.setTimeout.bind(jt), e.clearTimeoutFn = jt.clearTimeout.bind(jt));
}
const z2 = 1.33;
function V2(e) {
  return typeof e == "string" ? G2(e) : Math.ceil((e.byteLength || e.size) * z2);
}
function G2(e) {
  let t = 0, n = 0;
  for (let i = 0, s = e.length; i < s; i++)
    t = e.charCodeAt(i), t < 128 ? n += 1 : t < 2048 ? n += 2 : t < 55296 || t >= 57344 ? n += 3 : (i++, n += 4);
  return n;
}
function Gy() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function H2(e) {
  let t = "";
  for (let n in e)
    e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
  return t;
}
function K2(e) {
  let t = {}, n = e.split("&");
  for (let i = 0, s = n.length; i < s; i++) {
    let r = n[i].split("=");
    t[decodeURIComponent(r[0])] = decodeURIComponent(r[1]);
  }
  return t;
}
class Y2 extends Error {
  constructor(t, n, i) {
    super(t), this.description = n, this.context = i, this.type = "TransportError";
  }
}
class of extends Ye {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(t) {
    super(), this.writable = !1, Sa(this, t), this.opts = t, this.query = t.query, this.socket = t.socket, this.supportsBinary = !t.forceBase64;
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
  onError(t, n, i) {
    return super.emitReserved("error", new Y2(t, n, i)), this;
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
    const n = rf(t, this.socket.binaryType);
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
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(t) {
    const n = H2(t);
    return n.length ? "?" + n : "";
  }
}
class X2 extends of {
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
      let i = 0;
      this._polling && (i++, this.once("pollComplete", function() {
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
  _poll() {
    this._polling = !0, this.doPoll(), this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(t) {
    const n = (i) => {
      if (this.readyState === "opening" && i.type === "open" && this.onOpen(), i.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(i);
    };
    F2(t, this.socket.binaryType).forEach(n), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, R2(t, (n) => {
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
    return this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = Gy()), !this.supportsBinary && !n.sid && (n.b64 = 1), this.createUri(t, n);
  }
}
let Hy = !1;
try {
  Hy = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const J2 = Hy;
function Q2() {
}
class Z2 extends X2 {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(t) {
    if (super(t), typeof location < "u") {
      const n = location.protocol === "https:";
      let i = location.port;
      i || (i = n ? "443" : "80"), this.xd = typeof location < "u" && t.hostname !== location.hostname || i !== t.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(t, n) {
    const i = this.request({
      method: "POST",
      data: t
    });
    i.on("success", n), i.on("error", (s, r) => {
      this.onError("xhr post error", s, r);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const t = this.request();
    t.on("data", this.onData.bind(this)), t.on("error", (n, i) => {
      this.onError("xhr poll error", n, i);
    }), this.pollXhr = t;
  }
}
class _n extends Ye {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(t, n, i) {
    super(), this.createRequest = t, Sa(this, i), this._opts = i, this._method = i.method || "GET", this._uri = n, this._data = i.data !== void 0 ? i.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var t;
    const n = Vy(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    n.xdomain = !!this._opts.xd;
    const i = this._xhr = this.createRequest(n);
    try {
      i.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          i.setDisableHeaderCheck && i.setDisableHeaderCheck(!0);
          for (let s in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(s) && i.setRequestHeader(s, this._opts.extraHeaders[s]);
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
        var s;
        i.readyState === 3 && ((s = this._opts.cookieJar) === null || s === void 0 || s.parseCookies(
          // @ts-ignore
          i.getResponseHeader("set-cookie")
        )), i.readyState === 4 && (i.status === 200 || i.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
          this._onError(typeof i.status == "number" ? i.status : 0);
        }, 0));
      }, i.send(this._data);
    } catch (s) {
      this.setTimeoutFn(() => {
        this._onError(s);
      }, 0);
      return;
    }
    typeof document < "u" && (this._index = _n.requestsCount++, _n.requests[this._index] = this);
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
      if (this._xhr.onreadystatechange = Q2, t)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete _n.requests[this._index], this._xhr = null;
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
_n.requestsCount = 0;
_n.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Ld);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in jt ? "pagehide" : "unload";
    addEventListener(e, Ld, !1);
  }
}
function Ld() {
  for (let e in _n.requests)
    _n.requests.hasOwnProperty(e) && _n.requests[e].abort();
}
const eO = function() {
  const e = Ky({
    xdomain: !1
  });
  return e && e.responseType !== null;
}();
class tO extends Z2 {
  constructor(t) {
    super(t);
    const n = t && t.forceBase64;
    this.supportsBinary = eO && !n;
  }
  request(t = {}) {
    return Object.assign(t, { xd: this.xd }, this.opts), new _n(Ky, this.uri(), t);
  }
}
function Ky(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || J2))
      return new XMLHttpRequest();
  } catch {
  }
  if (!t)
    try {
      return new jt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Yy = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class nO extends of {
  get name() {
    return "websocket";
  }
  doOpen() {
    const t = this.uri(), n = this.opts.protocols, i = Yy ? {} : Vy(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (i.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(t, n, i);
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
    for (let n = 0; n < t.length; n++) {
      const i = t[n], s = n === t.length - 1;
      sf(i, this.supportsBinary, (r) => {
        try {
          this.doWrite(i, r);
        } catch {
        }
        s && xa(() => {
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
    return this.opts.timestampRequests && (n[this.opts.timestampParam] = Gy()), this.supportsBinary || (n.b64 = 1), this.createUri(t, n);
  }
}
const il = jt.WebSocket || jt.MozWebSocket;
class iO extends nO {
  createSocket(t, n, i) {
    return Yy ? new il(t, n, i) : n ? new il(t, n) : new il(t);
  }
  doWrite(t, n) {
    this.ws.send(n);
  }
}
class sO extends of {
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
        const n = B2(Number.MAX_SAFE_INTEGER, this.socket.binaryType), i = t.readable.pipeThrough(n).getReader(), s = $2();
        s.readable.pipeTo(t.writable), this._writer = s.writable.getWriter();
        const r = () => {
          i.read().then(({ done: a, value: l }) => {
            a || (this.onPacket(l), r());
          }).catch((a) => {
          });
        };
        r();
        const o = { type: "open" };
        this.query.sid && (o.data = `{"sid":"${this.query.sid}"}`), this._writer.write(o).then(() => this.onOpen());
      });
    });
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const i = t[n], s = n === t.length - 1;
      this._writer.write(i).then(() => {
        s && xa(() => {
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
const rO = {
  websocket: iO,
  webtransport: sO,
  polling: tO
}, oO = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, aO = [
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
function ic(e) {
  if (e.length > 8e3)
    throw "URI too long";
  const t = e, n = e.indexOf("["), i = e.indexOf("]");
  n != -1 && i != -1 && (e = e.substring(0, n) + e.substring(n, i).replace(/:/g, ";") + e.substring(i, e.length));
  let s = oO.exec(e || ""), r = {}, o = 14;
  for (; o--; )
    r[aO[o]] = s[o] || "";
  return n != -1 && i != -1 && (r.source = t, r.host = r.host.substring(1, r.host.length - 1).replace(/;/g, ":"), r.authority = r.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), r.ipv6uri = !0), r.pathNames = lO(r, r.path), r.queryKey = cO(r, r.query), r;
}
function lO(e, t) {
  const n = /\/{2,9}/g, i = t.replace(n, "/").split("/");
  return (t.slice(0, 1) == "/" || t.length === 0) && i.splice(0, 1), t.slice(-1) == "/" && i.splice(i.length - 1, 1), i;
}
function cO(e, t) {
  const n = {};
  return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(i, s, r) {
    s && (n[s] = r);
  }), n;
}
const sc = typeof addEventListener == "function" && typeof removeEventListener == "function", to = [];
sc && addEventListener("offline", () => {
  to.forEach((e) => e());
}, !1);
class ii extends Ye {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(t, n) {
    if (super(), this.binaryType = q2, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, t && typeof t == "object" && (n = t, t = null), t) {
      const i = ic(t);
      n.hostname = i.host, n.secure = i.protocol === "https" || i.protocol === "wss", n.port = i.port, i.query && (n.query = i.query);
    } else n.host && (n.hostname = ic(n.host).host);
    Sa(this, n), this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:", n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, n.transports.forEach((i) => {
      const s = i.prototype.name;
      this.transports.push(s), this._transportsByName[s] = i;
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
    }, n), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = K2(this.opts.query)), sc && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, to.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
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
    n.EIO = zy, n.transport = t, this.id && (n.sid = this.id);
    const i = Object.assign({}, this.opts, {
      query: n,
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
    const t = this.opts.rememberUpgrade && ii.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
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
    this.readyState = "open", ii.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
    for (let i = 0; i < this.writeBuffer.length; i++) {
      const s = this.writeBuffer[i].data;
      if (s && (n += V2(s)), i > 0 && n > this._maxPayload)
        return this.writeBuffer.slice(0, i);
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
    return t && (this._pingTimeoutTime = 0, xa(() => {
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
  write(t, n, i) {
    return this._sendPacket("message", t, n, i), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(t, n, i) {
    return this._sendPacket("message", t, n, i), this;
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
  _sendPacket(t, n, i, s) {
    if (typeof n == "function" && (s = n, n = void 0), typeof i == "function" && (s = i, i = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    i = i || {}, i.compress = i.compress !== !1;
    const r = {
      type: t,
      data: n,
      options: i
    };
    this.emitReserved("packetCreate", r), this.writeBuffer.push(r), s && this.once("flush", s), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const t = () => {
      this._onClose("forced close"), this.transport.close();
    }, n = () => {
      this.off("upgrade", n), this.off("upgradeError", n), t();
    }, i = () => {
      this.once("upgrade", n), this.once("upgradeError", n);
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
    if (ii.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
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
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), sc && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const i = to.indexOf(this._offlineEventListener);
        i !== -1 && to.splice(i, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", t, n), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
ii.protocol = zy;
class uO extends ii {
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
    let n = this.createTransport(t), i = !1;
    ii.priorWebsocketSuccess = !1;
    const s = () => {
      i || (n.send([{ type: "ping", data: "probe" }]), n.once("packet", (f) => {
        if (!i)
          if (f.type === "pong" && f.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", n), !n)
              return;
            ii.priorWebsocketSuccess = n.name === "websocket", this.transport.pause(() => {
              i || this.readyState !== "closed" && (c(), this.setTransport(n), n.send([{ type: "upgrade" }]), this.emitReserved("upgrade", n), n = null, this.upgrading = !1, this.flush());
            });
          } else {
            const h = new Error("probe error");
            h.transport = n.name, this.emitReserved("upgradeError", h);
          }
      }));
    };
    function r() {
      i || (i = !0, c(), n.close(), n = null);
    }
    const o = (f) => {
      const h = new Error("probe error: " + f);
      h.transport = n.name, r(), this.emitReserved("upgradeError", h);
    };
    function a() {
      o("transport closed");
    }
    function l() {
      o("socket closed");
    }
    function u(f) {
      n && f.name !== n.name && r();
    }
    const c = () => {
      n.removeListener("open", s), n.removeListener("error", o), n.removeListener("close", a), this.off("close", l), this.off("upgrading", u);
    };
    n.once("open", s), n.once("error", o), n.once("close", a), this.once("close", l), this.once("upgrading", u), this._upgrades.indexOf("webtransport") !== -1 && t !== "webtransport" ? this.setTimeoutFn(() => {
      i || n.open();
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
    for (let i = 0; i < t.length; i++)
      ~this.transports.indexOf(t[i]) && n.push(t[i]);
    return n;
  }
}
let fO = class extends uO {
  constructor(t, n = {}) {
    const i = typeof t == "object" ? t : n;
    (!i.transports || i.transports && typeof i.transports[0] == "string") && (i.transports = (i.transports || ["polling", "websocket", "webtransport"]).map((s) => rO[s]).filter((s) => !!s)), super(t, i);
  }
};
function hO(e, t = "", n) {
  let i = e;
  n = n || typeof location < "u" && location, e == null && (e = n.protocol + "//" + n.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = n.protocol + e : e = n.host + e), /^(https?|wss?):\/\//.test(e) || (typeof n < "u" ? e = n.protocol + "//" + e : e = "https://" + e), i = ic(e)), i.port || (/^(http|ws)$/.test(i.protocol) ? i.port = "80" : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")), i.path = i.path || "/";
  const r = i.host.indexOf(":") !== -1 ? "[" + i.host + "]" : i.host;
  return i.id = i.protocol + "://" + r + ":" + i.port + t, i.href = i.protocol + "://" + r + (n && n.port === i.port ? "" : ":" + i.port), i;
}
const dO = typeof ArrayBuffer == "function", pO = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, Xy = Object.prototype.toString, gO = typeof Blob == "function" || typeof Blob < "u" && Xy.call(Blob) === "[object BlobConstructor]", mO = typeof File == "function" || typeof File < "u" && Xy.call(File) === "[object FileConstructor]";
function af(e) {
  return dO && (e instanceof ArrayBuffer || pO(e)) || gO && e instanceof Blob || mO && e instanceof File;
}
function no(e, t) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let n = 0, i = e.length; n < i; n++)
      if (no(e[n]))
        return !0;
    return !1;
  }
  if (af(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return no(e.toJSON(), !0);
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && no(e[n]))
      return !0;
  return !1;
}
function yO(e) {
  const t = [], n = e.data, i = e;
  return i.data = rc(n, t), i.attachments = t.length, { packet: i, buffers: t };
}
function rc(e, t) {
  if (!e)
    return e;
  if (af(e)) {
    const n = { _placeholder: !0, num: t.length };
    return t.push(e), n;
  } else if (Array.isArray(e)) {
    const n = new Array(e.length);
    for (let i = 0; i < e.length; i++)
      n[i] = rc(e[i], t);
    return n;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const n = {};
    for (const i in e)
      Object.prototype.hasOwnProperty.call(e, i) && (n[i] = rc(e[i], t));
    return n;
  }
  return e;
}
function bO(e, t) {
  return e.data = oc(e.data, t), delete e.attachments, e;
}
function oc(e, t) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
      e[n] = oc(e[n], t);
  else if (typeof e == "object")
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (e[n] = oc(e[n], t));
  return e;
}
const wO = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], vO = 5;
var ge;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(ge || (ge = {}));
class _O {
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
    return (t.type === ge.EVENT || t.type === ge.ACK) && no(t) ? this.encodeAsBinary({
      type: t.type === ge.EVENT ? ge.BINARY_EVENT : ge.BINARY_ACK,
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
    return (t.type === ge.BINARY_EVENT || t.type === ge.BINARY_ACK) && (n += t.attachments + "-"), t.nsp && t.nsp !== "/" && (n += t.nsp + ","), t.id != null && (n += t.id), t.data != null && (n += JSON.stringify(t.data, this.replacer)), n;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(t) {
    const n = yO(t), i = this.encodeAsString(n.packet), s = n.buffers;
    return s.unshift(i), s;
  }
}
function Dd(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class lf extends Ye {
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
    let n;
    if (typeof t == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      n = this.decodeString(t);
      const i = n.type === ge.BINARY_EVENT;
      i || n.type === ge.BINARY_ACK ? (n.type = i ? ge.EVENT : ge.ACK, this.reconstructor = new xO(n), n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n);
    } else if (af(t) || t.base64)
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
    const i = {
      type: Number(t.charAt(0))
    };
    if (ge[i.type] === void 0)
      throw new Error("unknown packet type " + i.type);
    if (i.type === ge.BINARY_EVENT || i.type === ge.BINARY_ACK) {
      const r = n + 1;
      for (; t.charAt(++n) !== "-" && n != t.length; )
        ;
      const o = t.substring(r, n);
      if (o != Number(o) || t.charAt(n) !== "-")
        throw new Error("Illegal attachments");
      i.attachments = Number(o);
    }
    if (t.charAt(n + 1) === "/") {
      const r = n + 1;
      for (; ++n && !(t.charAt(n) === "," || n === t.length); )
        ;
      i.nsp = t.substring(r, n);
    } else
      i.nsp = "/";
    const s = t.charAt(n + 1);
    if (s !== "" && Number(s) == s) {
      const r = n + 1;
      for (; ++n; ) {
        const o = t.charAt(n);
        if (o == null || Number(o) != o) {
          --n;
          break;
        }
        if (n === t.length)
          break;
      }
      i.id = Number(t.substring(r, n + 1));
    }
    if (t.charAt(++n)) {
      const r = this.tryParse(t.substr(n));
      if (lf.isPayloadValid(i.type, r))
        i.data = r;
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
  static isPayloadValid(t, n) {
    switch (t) {
      case ge.CONNECT:
        return Dd(n);
      case ge.DISCONNECT:
        return n === void 0;
      case ge.CONNECT_ERROR:
        return typeof n == "string" || Dd(n);
      case ge.EVENT:
      case ge.BINARY_EVENT:
        return Array.isArray(n) && (typeof n[0] == "number" || typeof n[0] == "string" && wO.indexOf(n[0]) === -1);
      case ge.ACK:
      case ge.BINARY_ACK:
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
class xO {
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
      const n = bO(this.reconPack, this.buffers);
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
const SO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, Decoder: lf, Encoder: _O, get PacketType() {
  return ge;
}, protocol: vO }, Symbol.toStringTag, { value: "Module" }));
function Jt(e, t, n) {
  return e.on(t, n), function() {
    e.off(t, n);
  };
}
const kO = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Jy extends Ye {
  /**
   * `Socket` constructor.
   */
  constructor(t, n, i) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = t, this.nsp = n, i && i.auth && (this.auth = i.auth), this._opts = Object.assign({}, i), this.io._autoConnect && this.open();
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
      Jt(t, "open", this.onopen.bind(this)),
      Jt(t, "packet", this.onpacket.bind(this)),
      Jt(t, "error", this.onerror.bind(this)),
      Jt(t, "close", this.onclose.bind(this))
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
    var i, s, r;
    if (kO.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (n.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(n), this;
    const o = {
      type: ge.EVENT,
      data: n
    };
    if (o.options = {}, o.options.compress = this.flags.compress !== !1, typeof n[n.length - 1] == "function") {
      const c = this.ids++, f = n.pop();
      this._registerAckCallback(c, f), o.id = c;
    }
    const a = (s = (i = this.io.engine) === null || i === void 0 ? void 0 : i.transport) === null || s === void 0 ? void 0 : s.writable, l = this.connected && !(!((r = this.io.engine) === null || r === void 0) && r._hasPingExpired());
    return this.flags.volatile && !a || (l ? (this.notifyOutgoingListeners(o), this.packet(o)) : this.sendBuffer.push(o)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(t, n) {
    var i;
    const s = (i = this.flags.timeout) !== null && i !== void 0 ? i : this._opts.ackTimeout;
    if (s === void 0) {
      this.acks[t] = n;
      return;
    }
    const r = this.io.setTimeoutFn(() => {
      delete this.acks[t];
      for (let a = 0; a < this.sendBuffer.length; a++)
        this.sendBuffer[a].id === t && this.sendBuffer.splice(a, 1);
      n.call(this, new Error("operation has timed out"));
    }, s), o = (...a) => {
      this.io.clearTimeoutFn(r), n.apply(this, a);
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
  emitWithAck(t, ...n) {
    return new Promise((i, s) => {
      const r = (o, a) => o ? s(o) : i(a);
      r.withError = !0, n.push(r), this.emit(t, ...n);
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
    const i = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    t.push((s, ...r) => i !== this._queue[0] ? void 0 : (s !== null ? i.tryCount > this._opts.retries && (this._queue.shift(), n && n(s)) : (this._queue.shift(), n && n(null, ...r)), i.pending = !1, this._drainQueue())), this._queue.push(i), this._drainQueue();
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
      type: ge.CONNECT,
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
        case ge.CONNECT:
          t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case ge.EVENT:
        case ge.BINARY_EVENT:
          this.onevent(t);
          break;
        case ge.ACK:
        case ge.BINARY_ACK:
          this.onack(t);
          break;
        case ge.DISCONNECT:
          this.ondisconnect();
          break;
        case ge.CONNECT_ERROR:
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
    const n = t.data || [];
    t.id != null && n.push(this.ack(t.id)), this.connected ? this.emitEvent(n) : this.receiveBuffer.push(Object.freeze(n));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const n = this._anyListeners.slice();
      for (const i of n)
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
    const n = this;
    let i = !1;
    return function(...s) {
      i || (i = !0, n.packet({
        type: ge.ACK,
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
    const n = this.acks[t.id];
    typeof n == "function" && (delete this.acks[t.id], n.withError && t.data.unshift(null), n.apply(this, t.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(t, n) {
    this.id = t, this.recovered = n && this._pid === n, this._pid = n, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
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
    return this.connected && this.packet({ type: ge.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
      for (let i = 0; i < n.length; i++)
        if (t === n[i])
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
      for (let i = 0; i < n.length; i++)
        if (t === n[i])
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
  notifyOutgoingListeners(t) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const n = this._anyOutgoingListeners.slice();
      for (const i of n)
        i.apply(this, t.data);
    }
  }
}
function As(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
As.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(), n = Math.floor(t * this.jitter * e);
    e = Math.floor(t * 10) & 1 ? e + n : e - n;
  }
  return Math.min(e, this.max) | 0;
};
As.prototype.reset = function() {
  this.attempts = 0;
};
As.prototype.setMin = function(e) {
  this.ms = e;
};
As.prototype.setMax = function(e) {
  this.max = e;
};
As.prototype.setJitter = function(e) {
  this.jitter = e;
};
class ac extends Ye {
  constructor(t, n) {
    var i;
    super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (n = t, t = void 0), n = n || {}, n.path = n.path || "/socket.io", this.opts = n, Sa(this, n), this.reconnection(n.reconnection !== !1), this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0), this.reconnectionDelay(n.reconnectionDelay || 1e3), this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3), this.randomizationFactor((i = n.randomizationFactor) !== null && i !== void 0 ? i : 0.5), this.backoff = new As({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(n.timeout == null ? 2e4 : n.timeout), this._readyState = "closed", this.uri = t;
    const s = n.parser || SO;
    this.encoder = new s.Encoder(), this.decoder = new s.Decoder(), this._autoConnect = n.autoConnect !== !1, this._autoConnect && this.open();
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
    this.engine = new fO(this.uri, this.opts);
    const n = this.engine, i = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const s = Jt(n, "open", function() {
      i.onopen(), t && t();
    }), r = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), t ? t(a) : this.maybeReconnectOnOpen();
    }, o = Jt(n, "error", r);
    if (this._timeout !== !1) {
      const a = this._timeout, l = this.setTimeoutFn(() => {
        s(), r(new Error("timeout")), n.close();
      }, a);
      this.opts.autoUnref && l.unref(), this.subs.push(() => {
        this.clearTimeoutFn(l);
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
      Jt(t, "ping", this.onping.bind(this)),
      Jt(t, "data", this.ondata.bind(this)),
      Jt(t, "error", this.onerror.bind(this)),
      Jt(t, "close", this.onclose.bind(this)),
      // @ts-ignore
      Jt(this.decoder, "decoded", this.ondecoded.bind(this))
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
    xa(() => {
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
    let i = this.nsps[t];
    return i ? this._autoConnect && !i.active && i.connect() : (i = new Jy(this, t, n), this.nsps[t] = i), i;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(t) {
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
  _packet(t) {
    const n = this.encoder.encode(t);
    for (let i = 0; i < n.length; i++)
      this.engine.write(n[i], t.options);
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
    var i;
    this.cleanup(), (i = this.engine) === null || i === void 0 || i.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t, n), this._reconnection && !this.skipReconnect && this.reconnect();
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
      const i = this.setTimeoutFn(() => {
        t.skipReconnect || (this.emitReserved("reconnect_attempt", t.backoff.attempts), !t.skipReconnect && t.open((s) => {
          s ? (t._reconnecting = !1, t.reconnect(), this.emitReserved("reconnect_error", s)) : t.onreconnect();
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
    const t = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", t);
  }
}
const Fs = {};
function io(e, t) {
  typeof e == "object" && (t = e, e = void 0), t = t || {};
  const n = hO(e, t.path || "/socket.io"), i = n.source, s = n.id, r = n.path, o = Fs[s] && r in Fs[s].nsps, a = t.forceNew || t["force new connection"] || t.multiplex === !1 || o;
  let l;
  return a ? l = new ac(i, t) : (Fs[s] || (Fs[s] = new ac(i, t)), l = Fs[s]), n.query && !t.query && (t.query = n.queryKey), l.socket(n.path, t);
}
Object.assign(io, {
  Manager: ac,
  Socket: Jy,
  io,
  connect: io
});
function EO(e = void 0) {
  this.socket = io(e, {
    withCredentials: !0,
    //this is required to send passport user data
    autoConnect: !1
  }), this.socket.on("connect", () => {
    be.call(this, ["connected"], !0);
  }), this.socket.on("maintenance", () => {
    be.call(this, ["maintenanceMode"], !0), this.socket.disconnect(), this.env === "development" && console.log("SmartCut - maintenance mode flag received from server");
  }), this.socket.on("connect_error", (t) => {
    be.call(this, ["connected"], !1), console.warn(`SmartCut - socket connect_error: ${t.message}`), typeof alert < "u" && alert("We are having trouble connecting to the server. Please try again later."), this.socket.close();
  }), this.socket.on("message", (t) => console.log(t)), this.socket.on("user", (t) => {
    be.call(this, ["user"], t, "shallow");
  }), this.socket.on("queued", () => {
    be.call(this, ["progress", "queue"], 1);
  }), this.socket.on("jobInProgess", (t) => (alert(`You already have a job in progress, please wait for it to finish

Job ID: ${t}`), !1)), this.socket.on("jobStart", () => be.call(this, ["progress", "queue"], 2)), this.socket.on("progress", (t) => {
    const n = t.data;
    if (typeof n.shapeCount < "u" && be.call(this, ["progress", "shapeCount"], n.shapeCount), typeof n.stockCount < "u" && be.call(this, ["progress", "stockCount"], n.stockCount), !n.stockCount && !n.shapeCount) {
      const i = Se.call(this, ["progress", "resultCount"]);
      be.call(this, ["progress", "resultCount"], i + 1);
    }
  }), this.socket.on("upgrade", () => {
    "showUpgradeModal" in this && typeof this.showUpgradeModal == "function" && this.showUpgradeModal(), be.call(this, ["thinking"], !1);
  }), this.socket.on("error", (t) => {
    var i;
    be.call(this, ["thinking"], !1);
    const n = Se.call(this, ["reset"]);
    typeof n == "function" && n(), console.error("SmartCut error:", t), (i = window == null ? void 0 : window.top) == null || i.postMessage(
      {
        type: "scError",
        message: t
      },
      "*"
    ), "showMessage" in this && typeof this.showMessage == "function" && this.showMessage(t), typeof this.showModalMessage == "function" && this.showModalMessage({
      heading: "Issue",
      main: t ? `<p>${t}</p>` : "<p>We are having trouble connecting to the server.</p><p>Please try again later and let us know.</p>"
    });
  }), this.socket.on("result", (t) => {
    var l, u, c, f, h, d, p, w;
    this.socket.disconnect();
    const n = t.result, i = Se.call(this, ["resetProgress"]);
    if (be.call(this, ["placementPositions"], n.placementPositions ?? []), be.call(this, ["metadata"], n.metadata ?? {}), be.call(this, ["unusableShapes"], n.unusableShapes ?? []), be.call(this, ["unavailableStock"], n.unavailableStock ?? []), !((l = n.shapeList) != null && l.length) || !((u = n.stockList) != null && u.length)) {
      if (i(), typeof this.showModalMessage == "function") {
        let E = "<p>We did not manage to fit any parts.</p>";
        (c = n == null ? void 0 : n.unusableShapes) != null && c.length ? (E = "<p>No parts were usable.</p><p>Click below to view the <strong>Unusable parts</strong> message in the <strong>Inputs panel</stong>.</p>", this.showModalMessage({
          heading: "Parts unusable",
          main: E,
          buttonText: "Show me",
          buttonCallback: (v) => {
            v.showInputPanel(
              "parts",
              "inputs-unusable-parts"
            );
          }
        })) : (E += "<p>Please double check your list.</p>", this.$nextTick(() => {
          this.showModalMessage({
            heading: "Parts unusable",
            main: E
          });
        }));
      }
      return (f = window == null ? void 0 : window.top) == null || f.postMessage(
        {
          type: "scError",
          message: "No parts were added - please double check your list."
        },
        "*"
      ), "showMessage" in this && typeof this.showMessage == "function" && this.showMessage("No parts were added - please double check your list."), be.call(this, ["thinking"], !1), typeof this.toggleWidget == "function" && this.toggleWidget.call(this, "inputs", !0), !1;
    }
    n.shapeList.find((E) => !E.added) && typeof this.showModalMessage == "function" && this.$nextTick(() => {
      this.showModalMessage({
        heading: "Parts not used",
        main: "<p>We did not use all your parts.</p><p>Click below to view the <strong>Unusable parts</strong> message in the <strong>Inputs panel</stong>.</p>",
        buttonText: "Show me",
        buttonCallback: (E) => {
          E.showInputPanel(
            "parts",
            "inputs-unusable-parts"
          );
        }
      });
    }), be.call(this, ["progress", "complete"], !0), be.call(this, ["jobId"], t == null ? void 0 : t.jobId), this.toggleWidget("updateStock", !1), this.toggleWidget("options", !1), this.toggleWidget("offcuts", !1), this.toggleWidget("results", !1), this.toggleWidget("cutlist", !1), this.toggleWidget("export", !1), this.toggleWidget("labels", !1);
    let s;
    n != null && n.saw && (s = new si(
      n == null ? void 0 : n.saw,
      ((h = n == null ? void 0 : n.saw) == null ? void 0 : h.stockType) ?? ((p = (d = n.stockList) == null ? void 0 : d[0]) == null ? void 0 : p.type)
    ), be.call(this, ["saw"], s, "shallow"));
    const r = PA({
      saw: s,
      stockList: n.stockList,
      removeScores: !0,
      preventAutoRotation: !0
    });
    be.call(this, ["stockList"], r, "shallow");
    const o = Se.call(this, ["usedStock"], "shallow");
    o.length && this.$nextTick(() => {
      be.call(this, ["activeStockId"], o[0].id);
    }), be.call(
      this,
      ["shapeList"],
      NA({
        shapeList: n.shapeList,
        stockList: r,
        preventAutoRotation: !0
      }),
      "shallow"
    ), n != null && n.cutList && be.call(
      this,
      ["cutList"],
      IA({
        cutList: n.cutList,
        stockList: r
      }),
      "shallow"
    ), n != null && n.segmentList && be.call(
      this,
      ["segmentList"],
      MA({
        segmentList: n.segmentList,
        stockList: r
      }),
      "shallow"
    ), n != null && n.offcuts && be.call(
      this,
      ["offcuts"],
      DA({
        offcuts: n.offcuts,
        stockList: r,
        preventAutoRotation: !0
      })
    ), n != null && n.metadata && be.call(this, ["metadata"], n.metadata, "shallow"), n != null && n.inputs && be.call(this, ["inputs"], n.inputs, "raw"), (w = n == null ? void 0 : n.evolutionVisData) != null && w.length ? be.call(this, ["evolutionVisData"], n.evolutionVisData, "raw") : typeof this.toggleWidget == "function" && this.toggleWidget.call(this, "evolution", !1), typeof this.toggleWidget == "function" && this.toggleWidget.call(this, "workbench", !0), be.call(this, ["thinking"], !1);
    const a = Ti.call(this, "inputs");
    a && (a != null && a.success) && (a.success = !1), this.$nextTick(() => {
      var v, k;
      if (Se.call(this, ["addedShapes"]).length === 0) {
        if (i(), typeof this.showModalMessage == "function") {
          let g = "<p>We could not fit any parts.</p>";
          (v = n == null ? void 0 : n.unusableShapes) != null && v.length ? (g += "<p>Some parts were not usable - click below to view the <strong>Unusable parts</strong> message in the <strong>Inputs panel</stong>.</p>", this.showModalMessage({
            heading: "No layouts",
            main: g,
            buttonText: "More info",
            buttonCallback: (b) => {
              b.showInputPanel(
                "parts",
                "inputs-unusable-parts"
              );
            }
          })) : (g += "<p>Please double check your list.</p>", this.showModalMessage({
            heading: "No layouts",
            main: g
          }));
        }
        (k = window == null ? void 0 : window.top) == null || k.postMessage(
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
function CO(e) {
  return !e || !vs(e) ? "" : Object.values(e).filter((t) => t).join("|");
}
function cf(e, t, n = "Options") {
  if (!n && `${t}` in e && typeof e[t] == "object") return !0;
  const i = `${t}${n}`;
  return !!(n && i in e && typeof e[i] == "object");
}
function lc(e) {
  return `${e}Options`;
}
function TO(e, t, n) {
  const i = lc(t);
  for (const s in e[i]) {
    const r = Object.keys(e[i][s]);
    for (const o of r)
      n.includes(o) || o in e[i][s] && delete e[i][s][o];
    for (const o of n)
      (s === "all" || !(o in e[i][s])) && (e[i][s][o] = "");
  }
}
function AO(e, t, n = !0) {
  if (!cf(e, t, "Options")) return;
  const i = e[t], s = Object.keys(i);
  for (const r of s)
    Qy(e, t, r, n);
  n && Zy(e, t, "all");
}
function Qy(e, t, n, i = !0) {
  i && Zy(e, t, n), n !== "all" && cf(e, t) && (e[t][n] = !1);
}
function Zy(e, t, n) {
  if (!cf(e, t, "Options")) return;
  const s = e[`${t}Options`][n];
  if (typeof s != "object" || s === null) return;
  Object.keys(s).forEach((o) => s[o] = "");
}
function IM(e) {
  e != null && e.type && delete e.type, OO.call(this, e);
}
function OO(e) {
  if (!(e != null && e.banding) || typeof e.banding != "object") return;
  const t = Object.keys(e.banding);
  if (!t.length) return;
  const n = ["labels", "pricing"];
  if (!t.every((i) => n.includes(i)))
    this.error("legacy banding data provided - please update to use { labels: string[], pricing: Record<string, number> }");
  else return;
  e.banding = {
    labels: Object.keys(e.banding),
    pricing: e.bandingPricing
  };
}
function PO(e) {
  if (e != null && e.enable) return;
  e.enable = {};
  const t = {
    showDiagram: { new: "diagram", map: "equal" },
    enableFocus: { new: "focus", map: "equal" },
    enableMachining: { new: "machining", map: "equal" },
    enableCSVImport: { new: "csvImport", map: "equal" },
    showProgressNumber: { new: "progressNumber", map: "equal" },
    disableBanding: { new: "banding", map: "reverse" },
    disableFinish: { new: "finish", map: "reverse" },
    disableOrientation: { new: "orientation", map: "reverse" },
    disableClick: { new: "click", map: "reverse" },
    disablePartName: { new: "partName", map: "reverse" }
  };
  for (const n of Object.keys(t))
    n in e && (e.enable[t[n].new] = t[n].map === "reverse" ? !e[n] : e[n], delete e[n]);
  console.log(e);
}
function cc(e = 0, t, n = null, i = null, s = null) {
  if (!Fi(n) && !us || i === "stock") return !1;
  let r, o;
  if (Fi(n) ? r = n.orientationLock : us(n) ? r = n.direction : i === "shape" && (r = s), e === 0 || us(n))
    switch (t) {
      case "n":
        o = r === "w" || s === "w";
        break;
      case "l":
      case "y":
        o = r === "w" || s === "w";
        break;
      case "w":
        o = r === "l" || s === "l";
        break;
      default:
        o = s === "w";
    }
  else if (e === 1)
    o = n.w > n.l;
  else if (e === 2)
    switch (t) {
      case "n":
        o = n.w > n.l;
        break;
      case "y":
      case "l":
        o = n.w > n.l;
        break;
      case "w":
        o = n.w > n.l;
        break;
      default:
        o = !1;
    }
  return o;
}
function NO(e, t, n = null, i = null, s = null) {
  if (!Fi(n) || i === "shape") return !1;
  let r;
  return e === 0 || e === 1 ? cc(e, t, n, i, s) : e === 2 ? !1 : r;
}
function IO(e, t = 0) {
  if (!t) return e;
  if (t === 1 || t === 2) {
    switch (e.preventAutoRotation = !0, e.orientationLock) {
      case "l":
        e.l < e.w && (t === 2 && Rd(e), e.orientationLock = "w");
        break;
      case "w":
        e.l < e.w && (e.orientationLock = "l");
        break;
      default:
        e.l < e.w && t === 2 && Rd(e), e.orientationLock = "";
    }
    return e;
  }
}
function Rd(e) {
  e.banding && (e.banding = uc(e.banding)), e.trim && (e.trim = uc(e.trim));
}
function uc(e, t = !1) {
  const n = {
    x1: null,
    x2: null,
    y1: null,
    y2: null
  };
  return t ? ([n.x1, n.x2, n.y1, n.y2] = [e.x2, e.x1, e.y2, e.y1], "a" in e && "b" in e && "c" in e && "d" in e && ([n.d, n.a, n.b, n.c] = [e.a, e.b, e.c, e.d])) : ([n.y1, n.y2, n.x2, n.x1] = [e.x1, e.x2, e.y1, e.y2], "a" in e && "b" in e && "c" in e && "d" in e && ([n.a, n.b, n.c, n.d] = [e.d, e.a, e.b, e.c])), n;
}
const MO = {
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
    showStock(e) {
      this.$emit("show-stock", e);
    }
  }
}, nn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, s] of t)
    n[i] = s;
  return n;
}, LO = { id: "mini-stock-nav" }, DO = ["onMousedown"], RO = { class: "id" };
function FO(e, t, n, i, s, r) {
  return J(), te("div", LO, [
    (J(!0), te(Oe, null, Dn(n.stockList, (o, a) => (J(), te("button", {
      key: a,
      class: xt(["nav-button", { selected: o.id === n.activeStockId }]),
      type: "button",
      style: He({
        backgroundColor: o.id === n.activeStockId ? "#" + n.secondaryColor : "#" + n.primaryColor
      }),
      onMousedown: (l) => r.showStock(o.id)
    }, [
      ie("div", RO, Me(a + 1), 1),
      Up(ie("div", { class: "stack legibility" }, Me(o.stack), 513), [
        [mg, typeof o.stack == "number" && o.stack > 1]
      ])
    ], 46, DO))), 128))
  ]);
}
const $O = /* @__PURE__ */ nn(MO, [["render", FO]]), BO = {
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
}, jO = { id: "spinner" }, qO = ["width", "height"], UO = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function WO(e, t, n, i, s, r) {
  return J(), te("div", jO, [
    n.complete ? fe("", !0) : (J(), te("svg", {
      key: 0,
      class: "loading",
      style: He({ width: n.size + "px", height: n.size + "px" }),
      width: n.size,
      height: n.size,
      viewBox: "0 0 300 300"
    }, t[0] || (t[0] = [
      xw('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7)
    ]), 12, qO)),
    n.complete ? (J(), te("svg", {
      key: 1,
      class: "complete",
      style: He({ width: n.size + "px", height: n.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[1] || (t[1] = [
      ie("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1)
    ]), 4)) : fe("", !0),
    n.showNumber ? (J(), te("div", UO, Me(n.number), 1)) : fe("", !0)
  ]);
}
const zO = /* @__PURE__ */ nn(BO, [["render", WO]]);
function VO(e, t) {
  return e === "unitDependent" ? t === "decimal" ? "decimal" : "text" : e === "float" ? "decimal" : e === "integer" ? "numeric" : "text";
}
function GO(e, t) {
  return e === "unitDependent" ? t === "decimal" ? "number" : "text" : e === "checkbox" ? "checkbox" : e === "float" || e === "integer" ? "number" : "text";
}
function HO(e, t = null, n = "decimal") {
  switch (e) {
    case "float":
    case "integer":
    case "string":
      return e;
    case "unitDependent":
      return n === "decimal" ? "float" : "string";
    case "checkbox":
      return t || "boolean";
    case "select":
      return t || "string";
    default:
      return "string";
  }
}
function KO(e) {
  return !!e;
}
function MM(e) {
  return typeof e.min > "u" ? null : typeof e.min == "function" ? e.min() : typeof e.min == "number" ? e.min : null;
}
function LM(e) {
  return typeof e.max > "u" ? null : typeof e.max == "function" ? e.max() : typeof e.max == "number" ? e.max : null;
}
function YO(e, t) {
  return t ? t.split(".").reduce((i, s) => i && i[s] !== "undefined" ? i[s] : void 0, e) : null;
}
function XO(e, t, n, i = !0) {
  const s = t.split(".");
  let r = e;
  for (let o = 0; o < s.length - 1; o++)
    r[s[o]] || (r[s[o]] = {}), r = r[s[o]];
  (i || !$(r[s[s.length - 1]])) && (r[s[s.length - 1]] = n);
}
function JO(e, t, n, i, s = !0) {
  var o;
  if (!e || !t || !n || !i || !((o = e == null ? void 0 : e[t]) != null && o[n])) return;
  const r = e[t][n].find((a) => a.id === i);
  if (r)
    return s ? r.enabled = !0 : r.enabled = !1, !0;
}
function DM(e, t, n, i) {
  var r;
  if (!((r = e == null ? void 0 : e[t]) != null && r[n])) return !1;
  const s = e[t][n].find((o) => o.id === i);
  return s ? s.enabled : !1;
}
function RM(e, t, n, i) {
  var s;
  return (s = e == null ? void 0 : e[t]) != null && s[n] ? e[t][n].findIndex((r) => r.id === i) > -1 : !1;
}
function eb(e, t, n) {
  var i;
  return (i = e == null ? void 0 : e[t]) != null && i[n] ? e[t][n].filter((s) => s.enabled === !0).map((s) => s.id) : [];
}
function QO(e, t, n, i, s = []) {
  const r = eb(e, n, i);
  if (!r.length) return [];
  const o = t.filter((l) => r.includes(l.id) || l.custom === !0), a = o.filter((l) => (l == null ? void 0 : l.fieldMap) && !l.fieldMap.startsWith("customData."));
  if (r.length !== a.length) {
    const l = new Set(a.map((c) => c.id)), u = o.map((c) => c.id).filter((c) => !l.has(c)).map((c) => `'${c}'`);
    console.warn(`Inputs - these fields do not have a field definition - ${u.join()}`);
  }
  return s.length && o.sort((l, u) => {
    const c = s.indexOf(l.id), f = s.indexOf(u.id);
    return c === -1 ? 1 : f === -1 ? -1 : c - f;
  }), o;
}
const ZO = {
  name: "OrientationButton",
  props: {
    id: {
      type: String,
      default: ""
    },
    //obsidian://open?vault=SmartCut%20documentation&file=Orientation%20philosophy
    orientationModel: {
      type: Number,
      default: 0
    },
    //allows use without passing a rectangle
    rectangleType: {
      type: String,
      default: null
    },
    rectangle: {
      type: Object,
      default: () => null
    },
    //if a shape object is not available, use shapeOrientation
    shapeOrientation: {
      type: String,
      default: ""
    },
    stockGrain: {
      type: String,
      default: "n"
    },
    buttonBackground: {
      type: String,
      default: "#848484"
    },
    iconColor: {
      type: String,
      default: "#FFFFFF"
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["updateOrientation"],
  computed: {
    orientationOptions() {
      if (!this.rectangle) return ["l", "w"];
      if (us(this.rectangle)) return ["l", "w"];
      let e = ["", "l", "w"];
      return this.rectangle.multiEdit && (e = [" ", "", "l", "w"]), es(this.rectangle) ? e : this.orientationModel === 1 ? this.stockGrain !== "n" ? e = ["", "l", "w"] : e = [""] : this.orientationModel === 2 ? this.stockGrain !== "n" ? e = ["", "l"] : e = [""] : (this.isSquare && (e = e.filter((t) => t !== "w")), e);
    },
    isSquare() {
      var e;
      return typeof ((e = this.rectangle) == null ? void 0 : e.isSquare) == "function" ? this.rectangle.isSquare() : !1;
    },
    iconType() {
      var e;
      if (es(this.rectangle) || this.rectangleType === "stock") {
        if (!this.rectangle) return "noGrain";
      } else if (!this.rectangle && !this.shapeOrientation)
        return "freeRotation";
      if (es(this.rectangle) || this.rectangleType === "stock")
        switch ((e = this.rectangle) == null ? void 0 : e.grain) {
          case " ":
            return "delete";
          case "l":
            return "grainLeftRight";
          case "w":
            return "grainTopBottom";
          default:
            return "noGrain";
        }
      else
        return this.getIconType();
    },
    shouldRotate() {
      return cc(this.orientationModel, this.stockGrain, this.rectangle, this.rectangleType, this.shapeOrientation);
    }
  },
  mounted() {
    this.$el.addEventListener("keydown", this.handleKeyDown);
  },
  unmounted() {
    this.$el.removeEventListener("keydown", this.handleKeyDown);
  },
  methods: {
    getIconType() {
      var s, r, o;
      const e = {
        n: {
          " ": "delete",
          l: "leftRight",
          w: "leftRight",
          default: "freeRotation"
        },
        y: {
          " ": "delete",
          l: "grainLeftRight",
          w: "grainTopBottom",
          default: "freeRotation"
        },
        l: {
          " ": "delete",
          l: "grainLeftRight",
          w: "grainTopBottom",
          default: "freeRotation"
        },
        w: {
          " ": "delete",
          l: "grainLeftRight",
          w: "grainTopBottom",
          default: "freeRotation"
        },
        default: {
          " ": "delete",
          l: "leftRight",
          w: "topBottom",
          default: "freeRotation"
        }
      }, t = this.stockGrain || "default";
      let n = "default";
      if (Fi(this.rectangle))
        switch (this.orientationModel) {
          case 0:
            if (!((s = this.rectangle) != null && s.orientationLock)) {
              n = "default";
              break;
            }
            if (this.stockGrain === "n") {
              n = ((r = this.rectangle) == null ? void 0 : r.orientationLock) || this.shapeOrientation || "default";
              break;
            }
            switch (this.stockGrain) {
              case "w":
                n = this.rectangle.orientationLock === "w" ? "w" : "l";
                break;
              case "l":
              case "y":
                n = this.rectangle.orientationLock === "l" ? "l" : "w";
                break;
            }
            break;
          case 1:
            if (this.stockGrain === "n" || !this.rectangle.orientationLock) {
              n = "default";
              break;
            }
            switch (this.stockGrain) {
              case "l":
              case "y":
              case "w":
                if (this.shouldRotate) {
                  n = this.rectangle.orientationLock === "l" ? "w" : "l";
                  break;
                }
                n = this.rectangle.orientationLock === "l" ? "l" : "w";
                break;
              default:
                n = "default";
                break;
            }
            break;
          case 2: {
            if (this.stockGrain === "n") {
              n = "default";
              break;
            }
            switch (this.rectangle.orientationLock) {
              case "l":
                n = this.shouldRotate ? "w" : "l";
                break;
              default:
                n = "default";
                break;
            }
            break;
          }
        }
      else if (us(this.rectangle))
        n = this.rectangle.direction || "default";
      else if (this.rectangleType === "shape" && this.stockGrain !== "n")
        switch (this.shapeOrientation) {
          case "l":
            switch (this.stockGrain) {
              case "y":
              case "l":
                n = "l";
                break;
              case "w":
                n = "w";
                break;
              default:
                n = "l";
                break;
            }
            break;
          case "w":
            switch (this.stockGrain) {
              case "y":
              case "l":
                n = "w";
                break;
              case "w":
                n = "l";
                break;
              default:
                n = "l";
                break;
            }
            break;
          default:
            n = "default";
            break;
        }
      return ((o = e[t]) == null ? void 0 : o[n]) || e[t].default;
    },
    click() {
      if (this.orientationOptions.length <= 1) return;
      let e = "";
      us(this.rectangle) ? e = this.rectangle.direction : Fi(this.rectangle) ? e = this.rectangle.orientationLock : es(this.rectangle) && (e = this.rectangle.grain);
      let t = this.orientationOptions.findIndex((n) => n === e);
      t++, t > this.orientationOptions.length - 1 && (t = 0), this.$emit("updateOrientation", this.orientationOptions[t]);
    },
    handleKeyDown(e) {
      (e.key === "Enter" || e.key === " ") && this.click();
    }
  }
}, eP = ["id"], tP = {
  key: 0,
  class: "delete",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
};
function nP(e, t, n, i, s, r) {
  return J(), te("div", {
    id: n.id,
    class: xt(["orientation-button", { rot: r.shouldRotate, square: r.isSquare, disabled: n.disabled, [r.iconType]: !0 }]),
    tabindex: "0",
    "aria-label": "Part orientation",
    style: He({
      backgroundColor: n.buttonBackground
    }),
    onClick: t[0] || (t[0] = (...o) => r.click && r.click(...o))
  }, [
    r.iconType === "delete" ? (J(), te("svg", tP, t[1] || (t[1] = [
      ie("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
    ]))) : fe("", !0),
    r.iconType === "freeRotation" ? (J(), te("svg", {
      key: 1,
      class: "arrow",
      style: He({
        stroke: n.iconColor ? n.iconColor : "#ffffff"
      }),
      viewBox: "0 0 67 63",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[2] || (t[2] = [
      ie("g", null, [
        ie("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
        ie("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
        ie("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
        ie("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
      ], -1)
    ]), 4)) : fe("", !0),
    r.iconType === "leftRight" ? (J(), te("svg", {
      key: 2,
      class: "arrow",
      style: He({
        stroke: n.iconColor ? n.iconColor : "#ffffff"
      }),
      viewBox: "0 0 72 39",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[3] || (t[3] = [
      ie("g", null, [
        ie("path", { d: "m5.408 19.408h61.095" }),
        ie("g", null, [
          ie("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
          ie("path", { d: "m17.408 33.408-12-14 12-14" })
        ])
      ], -1)
    ]), 4)) : fe("", !0),
    r.iconType === "topBottom" ? (J(), te("svg", {
      key: 3,
      class: "arrow",
      style: He({
        stroke: n.iconColor ? n.iconColor : "#ffffff"
      }),
      viewBox: "0 0 39 72",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[4] || (t[4] = [
      ie("g", null, [
        ie("path", { d: "m19.408 66.503v-61.095" }),
        ie("g", null, [
          ie("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
          ie("path", { d: "m33.408 54.503-14 12-14-12" })
        ])
      ], -1)
    ]), 4)) : fe("", !0),
    r.iconType === "grainLeftRight" ? (J(), te("svg", {
      key: 4,
      class: "grain",
      style: He({
        stroke: n.iconColor ? n.iconColor : "#ffffff"
      }),
      viewBox: "0 0 106 64",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[5] || (t[5] = [
      ie("g", null, [
        ie("path", { d: "m3 3h99.887" }),
        ie("path", { d: "m3.113 32h99.887" }),
        ie("path", { d: "m3.113 61h99.887" })
      ], -1)
    ]), 4)) : fe("", !0),
    r.iconType === "grainTopBottom" ? (J(), te("svg", {
      key: 5,
      class: "grain",
      style: He({
        stroke: n.iconColor ? n.iconColor : "#ffffff"
      }),
      viewBox: "0 0 64 106",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[6] || (t[6] = [
      ie("g", null, [
        ie("path", { d: "m61 3v99.887" }),
        ie("path", { d: "m32 3.113v99.887" }),
        ie("path", { d: "m3 3.113v99.887" })
      ], -1)
    ]), 4)) : fe("", !0)
  ], 14, eP);
}
const iP = /* @__PURE__ */ nn(ZO, [["render", nP]]), sP = /* @__PURE__ */ En({
  name: "BandingButton",
  props: {
    inputShape: {
      type: Object,
      default: null
    },
    open: {
      type: Boolean,
      default: !1
    },
    id: {
      type: String,
      default: ""
    },
    //obsidian://open?vault=SmartCut%20documentation&file=Orientation%20philosophy
    orientationModel: {
      type: Number,
      default: 0
    },
    stockGrain: {
      type: String,
      default: "n"
    }
  },
  emits: ["clicked"],
  computed: {
    x1() {
      return this.inputShape.banding.x1;
    },
    x2() {
      return this.inputShape.banding.x2;
    },
    y1() {
      return this.inputShape.banding.y1;
    },
    y2() {
      return this.inputShape.banding.y2;
    },
    mappedBanding() {
      let e = {
        x1: this.x1,
        x2: this.x2,
        y1: this.y1,
        y2: this.y2
      };
      return NO(this.orientationModel, this.stockGrain, this.inputShape) && (e = uc(e)), e;
    }
  },
  mounted() {
    this.$el.addEventListener("keydown", this.handleKeyDown);
  },
  unmounted() {
    this.$el.removeEventListener("keydown", this.handleKeyDown);
  },
  methods: {
    handleKeyDown(e) {
      (e.key === "Enter" || e.key === " ") && this.click();
    },
    click() {
      this.$emit("clicked");
    }
  }
  /* watch: {
  	'inputShape.bandingOptions': {
  		deep: true,
  		immediate: true,
  		handler( v )
  		{
  			console.table( v )
  		}
  	}
  }, */
}), rP = ["id"];
function oP(e, t, n, i, s, r) {
  return J(), te("div", {
    id: e.id,
    class: xt(["banding-button", { open: e.open }]),
    tabindex: "0",
    onClick: t[0] || (t[0] = (...o) => e.click && e.click(...o))
  }, [
    ie("div", {
      class: xt(["outer", { x1: e.mappedBanding.x1, x2: e.mappedBanding.x2, y1: e.mappedBanding.y1, y2: e.mappedBanding.y2 }])
    }, t[1] || (t[1] = [
      ie("div", { class: "inner" }, null, -1)
    ]), 2)
  ], 10, rP);
}
const aP = /* @__PURE__ */ nn(sP, [["render", oP]]), lP = {
  name: "CustomInput",
  props: {
    type: {
      type: String,
      default: "string",
      validator(e) {
        return ["unitDependent", "string", "integer", "float", "checkbox", "select"].includes(e);
      }
    },
    value: {
      type: [String, Boolean, Number],
      default: "string"
    },
    //element id
    id: {
      type: String,
      default: ""
    },
    focus: {
      type: Boolean,
      default: !1
    },
    enableLabel: {
      type: Boolean,
      default: !0
    },
    labelPosition: {
      type: String,
      default: "first",
      validator(e) {
        return ["first", "last"].includes(e);
      }
    },
    //used for select / checkbox
    output: {
      type: String,
      default: "string",
      validator(e) {
        return ["string", "integer", "float", "boolean"].includes(e);
      }
    },
    options: {
      type: Array,
      default: () => []
    },
    selectFirstOptionDisabled: {
      type: Boolean,
      default: !0
    },
    placeholder: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: !0
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: !1
    },
    default: {
      type: [String, Number, Boolean],
      default: ""
    },
    units: {
      type: String,
      default: "decimal",
      validator(e) {
        return ["decimal", "fraction"].includes(e);
      }
    },
    min: {
      type: Number,
      default: null
    },
    max: {
      type: Number,
      default: null
    },
    custom: {
      type: Boolean,
      default: !1
    },
    multiEdit: {
      type: Boolean,
      default: !1
    },
    allowBlank: {
      type: Boolean,
      default: !1
    },
    text: {
      type: Object,
      default: () => ({
        select: "Select",
        delete: "Delete"
      })
    }
  },
  emits: ["update", "default"],
  computed: {
    thisId() {
      return this.custom ? "custom-" + this.id : this.id;
    },
    inputType() {
      return GO(this.type, this.units);
    },
    inputMode() {
      return VO(this.type, this.units);
    },
    outputType() {
      return HO(this.type, this.output, this.units);
    }
  },
  watch: {
    options: {
      handler() {
        this.value && (this.options.find((e) => e.value == this.value) || this.updateValue(""));
      },
      deep: !1,
      immediate: !1
    }
  },
  created() {
    this.setDefault();
  },
  mounted() {
    const e = Ti.call(this, "input");
    e && this.focus && this.$nextTick(() => e.focus());
  },
  methods: {
    getType() {
      return this.type === "unitDependent" ? this.units === "fraction" ? "string" : "float" : this.type;
    },
    handleInput(e) {
      let t = e.target.value;
      switch ((t === "" || t === null) && this.allowBlank && this.updateValue(null), this.getType()) {
        case "integer":
          t = t.replace(/[^0-9-]/g, ""), t = parseInt(t);
          break;
        case "float":
          t = t.replace(/[^0-9.-]/g, ""), t = parseFloat(t);
          break;
      }
      if ((this.getType() === "integer" || this.getType() === "float") && isNaN(t))
        return this.updateValue(null);
      typeof this.min == "number" && t < this.min && (t = this.min), typeof this.max == "number" && t > this.max && (t = this.max), this.updateValue(t);
    },
    updateValue(e, t = "update") {
      if (e === null) return this.$emit(t, e);
      if (this.type === "unitDependent" || this.output === "unitDependent") {
        if (this.units === "fraction")
          return e = e.replace(/[^0-9/ ]+/g, "").replace(/\s{2,}/g, " ").trim(), this.$emit(t, e);
        if (this.units === "decimal")
          return this.$emit(t, parseFloat(e));
      }
      switch (this.outputType) {
        case "string":
          return this.$emit(t, e);
        case "integer":
          return this.$emit(t, parseInt(e));
        case "float":
          return this.$emit(t, parseFloat(e));
        case "boolean":
          return this.$emit(t, KO(e));
        default:
          return this.$emit(t, e);
      }
    },
    setDefault() {
      !$(this.value) && $(this.default) && this.updateValue(this.default);
    }
  }
}, cP = ["for"], uP = ["id", "inputmode", "type", "value", "placeholder", "disabled", "readonly", "min", "max", "aria-label"], fP = ["id", "disabled", "checked", "aria-label"], hP = ["id", "value", "disabled", "aria-label"], dP = ["disabled", "selected"], pP = {
  key: 0,
  value: " "
}, gP = ["hidden", "value"], mP = ["for"];
function yP(e, t, n, i, s, r) {
  var o, a, l, u;
  return J(), te(Oe, null, [
    n.label && n.enableLabel && n.labelPosition === "first" ? (J(), te("label", {
      key: 0,
      for: r.thisId
    }, Me(n.label), 9, cP)) : fe("", !0),
    n.type === "string" || n.type === "integer" || n.type === "float" || n.type === "unitDependent" ? (J(), te("input", {
      key: 1,
      id: r.thisId,
      ref: "input",
      inputmode: r.inputMode,
      type: r.inputType,
      value: n.value,
      placeholder: n.placeholder,
      disabled: n.disabled,
      readonly: n.readonly,
      min: n.min,
      max: n.max,
      "aria-label": n.label,
      onChange: t[0] || (t[0] = (...c) => r.handleInput && r.handleInput(...c))
    }, null, 40, uP)) : fe("", !0),
    n.type === "checkbox" ? (J(), te("input", {
      key: 2,
      id: r.thisId,
      ref: "input",
      type: "checkbox",
      disabled: n.readonly || n.disabled,
      checked: n.value === n.trueValue,
      "aria-label": n.label,
      onChange: t[1] || (t[1] = (c) => r.updateValue(c.target.checked ? n.trueValue : n.falseValue))
    }, null, 40, fP)) : fe("", !0),
    n.type === "select" ? (J(), te("select", {
      key: 3,
      id: r.thisId,
      ref: "input",
      value: n.value,
      disabled: n.readonly || n.disabled,
      "aria-label": n.label,
      onChange: t[2] || (t[2] = (c) => r.updateValue(c.target.value))
    }, [
      ie("option", {
        value: "",
        disabled: n.selectFirstOptionDisabled,
        selected: !n.value
      }, Me(((a = (o = n.text) == null ? void 0 : o.select) == null ? void 0 : a.toUpperCase()) ?? "SELECT"), 9, dP),
      n.multiEdit ? (J(), te("option", pP, Me(((u = (l = n.text) == null ? void 0 : l.delete) == null ? void 0 : u.toUpperCase()) ?? "DELETE"), 1)) : fe("", !0),
      (J(!0), te(Oe, null, Dn(n.options, (c) => {
        var f;
        return J(), te("option", {
          key: c.value,
          hidden: c.hidden,
          value: c.value
        }, Me(((f = c == null ? void 0 : c.label) == null ? void 0 : f.toUpperCase()) ?? c.value.toString().toUpperCase()), 9, gP);
      }), 128))
    ], 40, hP)) : fe("", !0),
    n.label && n.enableLabel && n.labelPosition === "last" ? (J(), te("label", {
      key: 4,
      for: n.id
    }, Me(n.label), 9, mP)) : fe("", !0)
  ], 64);
}
const tb = /* @__PURE__ */ nn(lP, [["render", yP]]), nb = /* @__PURE__ */ En({
  name: "ExtrasInputs",
  components: {
    InputField: tb
  },
  props: {
    shape: {
      type: Object,
      default: () => null,
      required: !0
    },
    //the index of the shape in the list
    shapeIndex: {
      type: Number,
      default: 0,
      required: !0
    },
    //the key to access this extra in the shape
    extraKey: {
      type: String,
      default: "",
      required: !0
    },
    //the human readable label for this extra
    extraLabel: {
      type: String,
      default: "",
      required: !0
    },
    //all of the keys available in this extra
    extraKeys: {
      type: Array,
      default: () => [],
      required: !0
    },
    //all of the available options for this extra
    allOptions: {
      type: Array,
      default: () => [],
      required: !0
    },
    pricing: {
      type: Object,
      default: () => ({}),
      required: !0
    },
    labels: {
      type: Array,
      default: () => [],
      required: !0
    },
    userFriendlyFieldMap: {
      type: Object,
      default: () => ({}),
      required: !0
    },
    partColumns: {
      type: Number,
      default: 1,
      required: !0
    }
  },
  emits: ["update-all", "set"],
  setup() {
    const { t: e, locale: t, fallbackLocale: n } = wr({
      locale: "en_US"
    });
    return {
      t: e,
      locale: t,
      fallbackLocale: n
    };
  },
  data() {
    return {
      //the key to access the options for this extra
      preFlightIssues: !1
    };
  },
  computed: {
    extraOptionsKey() {
      return this.extraKey + "Options";
    },
    columnsStyle() {
      var n;
      if (!((n = this.allOptions) != null && n.length)) return "auto";
      const e = this.allOptions.length;
      return e ? `repeat(${e + 3 - 1}, minmax(20px, max-content)) 1fr` : "auto";
    }
  },
  created() {
    this.preFlightCheck();
  },
  methods: {
    removeExtras(e, t, n = !0) {
      AO(e, t, n);
    },
    removeSingleExtra(e, t, n, i = !0) {
      Qy(e, t, n, i);
    },
    upper(e) {
      return KE(e);
    },
    preFlightCheck() {
      let e = [];
      this.extraKey in this.shape || e.push(`The extra key '${this.extraKey}' does not exist in the shape.`), this.extraOptionsKey in this.shape || e.push(`The options key '${this.extraOptionsKey}' does not exist in the shape.`), e.length && (this.preFlightIssues = !0, console.error("pre-flight issues found in ExtrasInputs: " + e.join(" ")));
    },
    updateAll(e, t) {
      this.$emit("update-all", this.shape, this.extraKey, e, t);
    },
    setOption(e, t, n) {
      this.$emit("set", this.shape, this.extraKey, e, t, n);
    },
    getAvailablePricingOptions(e, t, n, i, s) {
      var l, u;
      const r = (l = t == null ? void 0 : t[n]) == null ? void 0 : l[i];
      if (!r)
        return console.error(`ExtrasInputs: cannot find pricing options for ${n} > ${i}`), [];
      const o = Object.values(r);
      if (!o.length)
        return console.error(`ExtrasInputs: cannot find pricing options for ${n} > ${i}`), [];
      const a = o.filter((c) => typeof c == "string");
      return typeof ((u = this == null ? void 0 : this.$parent) == null ? void 0 : u.getAvailablePricingOptions) != "function" ? [] : this.$parent.getAvailablePricingOptions(e, a, s);
    },
    getPrice(e) {
      var n, i;
      if (typeof ((n = this == null ? void 0 : this.$parent) == null ? void 0 : n.getExtrasPrice) != "function" || typeof ((i = this == null ? void 0 : this.$parent) == null ? void 0 : i.formatPrice) != "function")
        return console.error("ExtrasInputs: cannot find pricing function in parent"), "";
      const t = this.$parent.getExtrasPrice(this.shape, this.extraKey, e);
      return t ? this.$parent.formatPrice(t) : "";
    }
  }
});
function Uo(e) {
  const t = e;
  t.__i18n = t.__i18n || [], t.__i18n.push({
    locale: "",
    resource: {
      en_US: {
        "N/A": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "N/A" } },
        length: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Length" } },
        l: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "L" } },
        width: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Width" } },
        w: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "W" } },
        thickness: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Thickness" } },
        t: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "T" } },
        name: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Name" } },
        quantity: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Quantity" } },
        q: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Q" } },
        material: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Material" } },
        orientation: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Orientation" } },
        machining: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Machining" } },
        grain: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Grain" } },
        "add part": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Add part" } },
        "remove part": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Remove part" } },
        calculate: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Calculate" } },
        "full screen": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Full screen" } },
        banding: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Banding" } },
        "delete banding": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Delete banding" } },
        "delete finish": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Delete finish" } },
        select: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Select" } },
        delete: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Delete" } },
        clear: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Clear" } },
        l1: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "L1" } },
        l2: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "L2" } },
        w1: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "W1" } },
        w2: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "W2" } },
        all: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "All" } },
        "Drop CSV file here": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Drop CSV file here" } },
        "Powered by SmartCut": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Powered by SmartCut" } },
        Part: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Part" } },
        Issue: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Issue" } },
        "Part issue": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Part issue" } },
        "Issue with part inputs:": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Issue with part inputs:" } },
        "No parts": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "No parts" } },
        "No parts in list": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "No parts in list" } },
        "No quantity of parts found": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "No quantity of parts found" } },
        "No parts were added - please double check your list": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "No parts were added - please double check your list" } },
        "The following parts did not fit": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "The following parts did not fit" } },
        "The maximum number of parts is": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "The maximum number of parts is" } },
        "No valid parts found": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "No valid parts found" } }
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
        banding: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Cantell" } },
        "delete banding": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Elimina cantell" } },
        delete: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Elimina" } },
        clear: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Neteja" } },
        l1: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "L1" } },
        l2: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "L2" } },
        w1: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "A1" } },
        w2: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "A1" } },
        all: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Todos" } },
        Part: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Peça" } },
        Issue: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Tema" } },
        "The following parts did not fit": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Les peces següents no encaixaven" } },
        "The maximum number of parts is": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "El número màxim de peces és" } },
        "No valid parts found": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "No s'han trobat peces vàlides" } },
        "Drop CSV file here": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "No s'han trobat peces vàlides" } },
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
        banding: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Canto" } },
        "delete banding": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Elimina canto" } },
        delete: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Elimina" } },
        clear: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Borra" } },
        l1: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "L1" } },
        l2: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "L2" } },
        w1: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "A1" } },
        w2: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "A1" } },
        all: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Todos" } },
        Part: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Pieza" } },
        Issue: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Tema" } },
        "The following parts did not fit": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Las siguientes piezas no encajaban" } },
        "The maximum number of parts is": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "El número máximo de piezas es" } },
        "No valid parts found": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "No se encontraron piezas válidas" } },
        "Drop CSV file here": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Carga el archivo CSV aquí" } },
        "Powered by SmartCut": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Desarrollado por SmartCut" } }
      },
      fr_FR: {
        length: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Longueur" } },
        l: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "L" } },
        width: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Largeur" } },
        w: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "la" } },
        thickness: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Epaisseur" } },
        t: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "ep" } },
        name: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Nom" } },
        quantity: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Quantité" } },
        q: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Qt" } },
        material: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Matèriel" } },
        machining: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Machinage" } },
        grain: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Sens de fil" } },
        orientation: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Orientation" } },
        "add part": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Ajouter pièce" } },
        "remove part": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Supprimer pièce" } },
        calculate: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Optimiser" } },
        "full screen": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Plein écran" } },
        banding: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Chants" } },
        "delete banding": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Supprimer chants" } },
        select: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Sélectionner" } },
        delete: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Supprimer" } },
        clear: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Effacer" } },
        l1: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "L1" } },
        l2: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "L2" } },
        w1: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "la1" } },
        w2: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "la2" } },
        "Powered by SmartCut": { t: 0, b: { static: "", t: 2, i: [] } },
        Part: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Pièce" } },
        "Drop CSV file here": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Télécharger CSV" } },
        Issue: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Erreur" } },
        "Part issue": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Pièce erreur" } },
        "Issue with part inputs": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Erreur avec l'importation de pièces" } },
        "No parts": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Aucune pièce" } },
        "No parts in list": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Aucune pièce dans la liste" } },
        "No quantity of parts found": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Aucune quantité trouvé pour certaines pièces" } },
        "No parts were added - please double check your list": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Aucune pièce n'a été ajoutée - veuillez vérifier votre liste" } },
        "The following parts did not fit": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Les pièces suivantes ne s'adaptent pas" } },
        "The maximum number of parts is": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Le nombre maximum de pièces est" } },
        "No valid parts found": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Aucune pièce valide trouvée" } }
      }
    }
  });
}
const bP = {
  key: 0,
  class: "inputs"
}, wP = { class: "label" }, vP = { class: "label" }, _P = { class: "label" }, xP = ["onClick"], SP = { class: "price" }, kP = ["aria-label"];
function EP(e, t, n, i, s, r) {
  var l, u, c, f, h, d, p, w;
  const o = Qe("InputField"), a = Qe("font-awesome-icon");
  return e.preFlightIssues ? fe("", !0) : (J(), te("div", {
    key: 0,
    class: xt(["group", [e.extraKey]]),
    style: He({ "grid-column-end": "span " + (e.partColumns + 1) })
  }, [
    e.allOptions.length === 1 && e.allOptions[0].length === 1 ? (J(), te("div", bP, [
      ie("div", wP, Me(e.upper((u = (l = e.allOptions) == null ? void 0 : l[0]) == null ? void 0 : u[0])), 1),
      (c = e.shape) != null && c[e.extraOptionsKey] && "all" in e.shape[e.extraOptionsKey] ? (J(), at(o, {
        key: 0,
        id: `${e.extraKey}-all-${e.shapeIndex}`,
        type: "checkbox",
        label: e.upper(e.t("all")),
        "true-value": (h = (f = e.allOptions) == null ? void 0 : f[0]) == null ? void 0 : h[0],
        "false-value": "",
        value: (p = e.shape[e.extraOptionsKey].all) == null ? void 0 : p[(d = e.labels) == null ? void 0 : d[0]],
        onUpdate: t[0] || (t[0] = (E) => {
          var v, k;
          e.setOption("all", [(v = e.labels) == null ? void 0 : v[0]], E), e.updateAll((k = e.labels) == null ? void 0 : k[0], E);
        })
      }, null, 8, ["id", "label", "true-value", "value"])) : fe("", !0),
      (J(!0), te(Oe, null, Dn(e.extraKeys, (E) => {
        var v, k, g, b, A, N;
        return J(), te(Oe, { key: E }, [
          (v = e.labels) != null && v[0] && ((g = (k = e.shape) == null ? void 0 : k[e.extraOptionsKey]) != null && g[E]) && e.labels[0] in e.shape[e.extraOptionsKey][E] ? (J(), at(o, {
            key: 0,
            id: `${e.extraKey}-${E}-${e.shapeIndex}`,
            type: "checkbox",
            label: e.upper(e.t((b = e.userFriendlyFieldMap) == null ? void 0 : b[E])),
            "true-value": (N = (A = e.allOptions) == null ? void 0 : A[0]) == null ? void 0 : N[0],
            "false-value": "",
            value: e.shape[e.extraOptionsKey][E][e.labels[0]],
            onUpdate: (L) => e.setOption(E, [e.labels[0]], L)
          }, null, 8, ["id", "label", "true-value", "value", "onUpdate"])) : fe("", !0)
        ], 64);
      }), 128))
    ])) : (J(), te("div", {
      key: 1,
      class: "grid inputs",
      style: He({
        "grid-template-columns": e.columnsStyle
      })
    }, [
      (w = e.shape) != null && w[e.extraOptionsKey] && "all" in e.shape[e.extraOptionsKey] ? (J(), te(Oe, { key: 0 }, [
        ie("div", vP, Me(e.upper(e.t("all"))), 1),
        (J(!0), te(Oe, null, Dn(e.allOptions, (E, v) => {
          var k, g;
          return J(), at(o, {
            id: `${e.extraKey}-all-${e.labels[v]}-${v}-${e.shapeIndex}`,
            key: `${e.extraKey}-all-${e.labels[v]}-${v}-${e.shapeIndex}`,
            type: "select",
            disabled: e.getAvailablePricingOptions(e.pricing, e.shape, e.extraOptionsKey, "all", v).length === 0,
            options: e.getAvailablePricingOptions(e.pricing, e.shape, e.extraOptionsKey, "all", v).map((b) => ({ value: b, label: b })),
            text: { select: "✘" },
            "select-first-option-disabled": !1,
            value: (g = e.shape[e.extraOptionsKey].all) == null ? void 0 : g[(k = e.labels) == null ? void 0 : k[v]],
            onUpdate: (b) => {
              var A, N;
              e.setOption("all", (A = e.labels) == null ? void 0 : A[v], b), e.updateAll((N = e.labels) == null ? void 0 : N[v], b);
            }
          }, null, 8, ["id", "disabled", "options", "value", "onUpdate"]);
        }), 128)),
        t[2] || (t[2] = ie("div", null, null, -1)),
        t[3] || (t[3] = ie("div", null, null, -1))
      ], 64)) : fe("", !0),
      (J(!0), te(Oe, null, Dn(e.extraKeys, (E) => {
        var v, k;
        return J(), te(Oe, { key: E }, [
          (v = e.shape) != null && v[e.extraOptionsKey] && E in e.shape[e.extraOptionsKey] ? (J(), te(Oe, { key: 0 }, [
            ie("div", _P, Me(e.upper(e.t((k = e.userFriendlyFieldMap) == null ? void 0 : k[E]))), 1),
            (J(!0), te(Oe, null, Dn(e.allOptions, (g, b) => {
              var A;
              return J(), at(o, {
                id: `${e.extraKey}-${E}-${e.labels[b]}-${b}-${e.shapeIndex}`,
                key: `${e.extraKey}-${E}-${e.labels[b]}-${b}-${e.shapeIndex}`,
                type: "select",
                disabled: e.getAvailablePricingOptions(e.pricing, e.shape, e.extraOptionsKey, E, b).length === 0,
                options: e.getAvailablePricingOptions(e.pricing, e.shape, e.extraOptionsKey, E, b).map((N) => ({
                  value: N,
                  label: N
                })),
                text: { select: "✘" },
                "select-first-option-disabled": !1,
                value: e.shape[e.extraOptionsKey][E][(A = e.labels) == null ? void 0 : A[b]],
                onUpdate: (N) => {
                  var L;
                  return e.setOption(E, (L = e.labels) == null ? void 0 : L[b], N);
                }
              }, null, 8, ["id", "disabled", "options", "value", "onUpdate"]);
            }), 128))
          ], 64)) : fe("", !0),
          ie("div", {
            class: "delete",
            onClick: (g) => e.removeSingleExtra(e.shape, e.extraKey, E)
          }, [
            me(a, { icon: ["fass", "trash"] })
          ], 8, xP),
          ie("div", SP, Me(e.getPrice(E) || e.t("N/A")), 1)
        ], 64);
      }), 128))
    ], 4)),
    ie("button", {
      type: "button",
      class: "delete icon-left",
      "aria-label": e.t(`delete ${e.extraLabel}`),
      onClick: t[1] || (t[1] = (E) => e.removeExtras(e.shape, e.extraKey, !0))
    }, [
      me(a, { icon: ["fass", "trash"] }),
      Qs(" " + Me(e.t(`delete ${e.extraLabel}`)), 1)
    ], 8, kP)
  ], 6));
}
typeof Uo == "function" && Uo(nb);
const CP = /* @__PURE__ */ nn(nb, [["render", EP]]), TP = /* @__PURE__ */ En({
  name: "FinishButton",
  props: {
    inputShape: {
      type: Object,
      default: null
    },
    open: {
      type: Boolean,
      default: !1
    },
    id: {
      type: String,
      default: ""
    }
  },
  emits: ["clicked"],
  mounted() {
    this.$el.addEventListener("keydown", this.handleKeyDown);
  },
  unmounted() {
    this.$el.removeEventListener("keydown", this.handleKeyDown);
  },
  methods: {
    handleKeyDown(e) {
      (e.key === "Enter" || e.key === " ") && this.click();
    },
    click() {
      this.$emit("clicked");
    }
  }
}), AP = ["id"];
function OP(e, t, n, i, s, r) {
  const o = Qe("font-awesome-icon");
  return J(), te("button", {
    id: e.id,
    class: xt(["finish-button", { selected: e.open }]),
    tabindex: "0",
    onClick: t[0] || (t[0] = (...a) => e.click && e.click(...a))
  }, [
    me(o, { icon: ["fass", "paint-roller"] })
  ], 10, AP);
}
const PP = /* @__PURE__ */ nn(TP, [["render", OP]]), NP = /* @__PURE__ */ En({
  name: "MachiningButton",
  props: {
    inputShape: {
      type: Object,
      default: null
    },
    id: {
      type: String,
      default: ""
    }
  },
  emits: ["open"],
  computed: {
    hasMachining() {
      return Py(this.inputShape);
    },
    disabled() {
      var e;
      return !!((e = this.inputShape) != null && e.readonly);
    }
  },
  methods: {
    openMachining() {
      this.disabled || this.$emit("open");
    }
  }
}), IP = ["id"];
function MP(e, t, n, i, s, r) {
  const o = Qe("font-awesome-icon");
  return J(), te("button", {
    id: e.id,
    class: xt(["machining-button", { disabled: e.disabled, "has-machining": e.hasMachining }]),
    type: "button",
    onClick: t[0] || (t[0] = (...a) => e.openMachining && e.openMachining(...a))
  }, [
    me(o, { icon: ["fass", "hammer"] })
  ], 10, IP);
}
const LP = /* @__PURE__ */ nn(NP, [["render", MP]]), DP = /* @__PURE__ */ mr(() => import("./Machining-u4Ceqtsn.js")), RP = /* @__PURE__ */ mr(() => import("./ImportCSV-BedcvBZV.js")), FP = /* @__PURE__ */ mr(() => import("./ObjectViewer-d37pGUpY.js")), ib = {
  name: "CheckoutCalculator",
  components: {
    StockNavigation: $O,
    OrientationButton: iP,
    Spinner: zO,
    Machining: DP,
    BandingButton: aP,
    ExtrasInputs: CP,
    FinishButton: PP,
    MachiningButton: LP,
    ImportCSV: RP,
    InputField: tb,
    ObjectViewer: FP
    // Offcuts,
  },
  props: {
    debug: {
      type: Boolean,
      default: !1
    },
    units: {
      type: String,
      default: "decimal"
    },
    //stock is passed as a prop, which allows it to be changed after init (e.g. variations in WP)
    stock: {
      type: Array,
      default: () => []
    }
  },
  emits: ["calculating", "result", "log", "error", "debug"],
  setup() {
    const { t: e, locale: t, fallbackLocale: n } = wr({
      locale: "en_US"
    });
    return {
      t: e,
      locale: t,
      fallbackLocale: n
    };
  },
  data() {
    const e = Pd(
      "Checkout/inputShapes",
      [],
      {
        serializer: {
          read: (t) => {
            const n = t ? JSON.parse(t) : [];
            return OA(n, this.units);
          },
          write: (t) => JSON.stringify(t)
        },
        listenToStorageChanges: !1
      }
    );
    return {
      env: "production",
      domain: window.location.hostname,
      connected: !1,
      maintenanceMode: !1,
      creditVisible: !0,
      currentURL: Pd(
        "Checkout/currentURL",
        window.location.href
      ),
      online: !0,
      onlineTimer: null,
      allowOnlineMessages: !0,
      socket: null,
      mounted: !1,
      loaded: !1,
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
      inputShapes: e.value,
      inputStock: [],
      stockList: Qn([]).value,
      shapeList: Qn([]).value,
      cutList: Qn([]).value,
      offcuts: Qn([]).value,
      inputs: Qn({}),
      //used to save inputs
      currentInputShape: null,
      activeStockId: null,
      selectedShapeId: null,
      metadata: null,
      //messages
      messageVisible: !1,
      messageHeading: "",
      messageContent: "",
      vis: Qo({}),
      visInit: !1,
      isFullScreen: !1,
      extrasIndex: {
        banding: null,
        finish: null,
        info: null
      },
      machiningEnabled: !1,
      CSVImportEnabled: !1,
      allFields: {
        parts: {
          sheet: [
            { id: "material", enabled: !1 },
            { id: "l", enabled: !0 },
            { id: "w", enabled: !0 },
            { id: "t", enabled: !1 },
            { id: "q", enabled: !0 },
            { id: "name", enabled: !0 },
            { id: "orientationLock", enabled: !0 },
            { id: "banding", enabled: !1 },
            { id: "finish", enabled: !1 },
            { id: "machining", enabled: !1 }
          ],
          linear: [
            { id: "l", enabled: !0 },
            { id: "q", enabled: !0 },
            { id: "name", enabled: !0 }
          ]
        }
      },
      //default options
      options: {
        enable: {
          banding: !0,
          finish: !0,
          orientation: !0,
          diagram: !0,
          focus: !0,
          machining: !0,
          csvImport: !0,
          click: !0,
          partName: !0,
          progressNumber: !0
        },
        decimalPlaces: 2,
        stackHeight: 100,
        maxParts: null,
        locale: "en_US",
        orientationModel: 0,
        customFields: []
      },
      materials: [],
      thicknesses: [],
      bondedThicknesses: [],
      banding: {
        labels: [],
        pricing: {},
        options: {},
        keys: ["x1", "x2", "y1", "y2"]
      },
      finish: {
        labels: [],
        pricing: {},
        options: {},
        keys: ["a", "b"]
      },
      machiningOptions: {
        units: "decimal",
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
      canGoFullScreen: QE(),
      progress: {
        queue: 0,
        stockCount: 0,
        shapeCount: 0,
        complete: !1
      },
      //colors must be in hex format (e.g. not 'green' but '#00ff00')
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
        disableClick: !1,
        enableStretch: !0
      },
      viewportWidth: null,
      w: 0,
      h: 0,
      userFriendlyFieldMap: Ny,
      customFieldDefinitions: [],
      user: null,
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
        marginBottom: "2px",
        userSelect: "none",
        alignItems: "center"
      },
      creditLinkStyles: {
        width: "auto",
        height: "auto",
        display: "inline-block",
        position: "relative",
        visibility: "visible",
        opacity: "1",
        color: "#4e4e4e"
      }
    };
  },
  computed: {
    fieldDefinitions() {
      var n;
      return [
        ...[
          {
            id: "material",
            fieldMap: "material",
            label: this.t("material"),
            w: "minmax(20px, max-content)",
            type: "select",
            output: "string",
            default: (n = this.materials[0]) == null ? void 0 : n.name,
            options: this.materials.map((i) => ({
              value: i.name,
              label: i.name
            }))
          },
          {
            //options are set on the InputField directly as related to individual shape material
            id: "t",
            fieldMap: "t",
            w: "minmax(20px, max-content)",
            type: "select",
            output: this.units === "decimal" ? "float" : "string",
            label: this.t("thickness")
          },
          {
            id: "l",
            fieldMap: "l",
            type: "unitDependent",
            label: this.t("length"),
            min: 0
          },
          {
            id: "w",
            fieldMap: "w",
            type: "unitDependent",
            label: this.t("width"),
            min: 0
          },
          {
            id: "q",
            fieldMap: "q",
            type: "integer",
            default: 1,
            label: this.t("quantity"),
            min: 0
          },
          {
            id: "name",
            fieldMap: "name",
            type: "string",
            label: this.t("name")
          },
          {
            id: "orientationLock",
            w: "32px",
            label: this.t("orientation"),
            fieldMap: "orientationLock"
          },
          {
            id: "banding",
            w: "32px",
            label: this.t("banding"),
            fieldMap: "bandingOptions"
          },
          {
            id: "finish",
            type: "checkbox",
            w: "32px",
            label: this.t("finish"),
            fieldMap: "finish"
          },
          {
            id: "machining",
            w: "32px",
            label: this.t("machining"),
            fieldMap: "machining"
          }
        ],
        ...this.customFieldDefinitions
      ];
    },
    relevantFieldDefinitions() {
      return QO(this.allFields, this.fieldDefinitions, "parts", this.saw.stockType, this.options.fieldOrder);
    },
    selectedShape() {
      return this.selectedShapeId ? this.inputShapes.find((e) => e.id === this.selectedShapeId) : null;
    },
    inputType() {
      return this.units === "decimal" ? "number" : "string";
    },
    inputMode() {
      return this.units === "decimal" ? "decimal" : "text";
    },
    partColumns() {
      let e = this.relevantFieldDefinitions.length;
      return this.env === "development" && e++, this.inputShapes.length > 1 && e++, e;
    },
    partColumnsStyle() {
      const e = {
        id: "34px",
        del: "30px",
        info: "30px"
      }, t = [];
      for (let i = 0; i < this.relevantFieldDefinitions.length; i++) {
        const s = this.relevantFieldDefinitions[i];
        s.id !== "trim" && t.push(s.w ?? "minmax(20px, 1fr)");
      }
      return t.unshift(e.id), this.env === "development" && t.push(e.info), this.inputShapes.length > 1 && t.push(e.del), t.join(" ");
    },
    finishColumnsStyle() {
      if (!this.finishChoices) return "auto";
      const e = Object.keys(this.finishChoices).length;
      return e ? `repeat(${e + 2 - 1}, minmax(20px, max-content)) 1fr` : "auto";
    },
    addedShapes() {
      return this.shapeList.filter((e) => e.added);
    },
    uniqueShapes() {
      return this.shapeList.filter((e) => e.added && !e.duplicate);
    },
    numUniqueShapes() {
      return this.uniqueShapes.length;
    },
    uniqueAddedShapes() {
      return this.uniqueShapes.filter((e) => e.added);
    },
    uniqueStock() {
      return this.stockList.filter((e) => e.used && !e.duplicate);
    },
    uniqueUsedStock() {
      return this.uniqueStock.filter((e) => e.used).map((e) => (e.q = this.uniqueStock.filter((t) => t.parentID === e.parentID).reduce(
        (t, n) => t + (n == null ? void 0 : n.stack) > 0 ? n.stack : 1,
        0
      ), e));
    },
    usedStock() {
      return s2(this.stockList);
    },
    activeStock() {
      return this.activeStockId ? n2(this.stockList, this.activeStockId) : null;
    },
    activeStockArea() {
      return this.activeStock.getArea();
    },
    stackedStock() {
      return JE(this.stockList);
    },
    activeShapes() {
      return this.shapeList.filter((e) => {
        var t, n;
        return e.added && ((t = e == null ? void 0 : e.stock) == null ? void 0 : t.id) === ((n = this.activeStock) == null ? void 0 : n.id);
      });
    },
    activeCuts() {
      return i2(this.cutList, this.activeStock);
    },
    unplacedShapes() {
      return XE(this.shapeList);
    },
    totalCutLength() {
      return !this.cutList.length || !this.metadata.totalCutLength ? 0 : this.metadata.totalCutLength;
    },
    totalInputShapes() {
      return this.inputShapes.reduce((e, t) => e + t.q, 0);
    },
    materialNames() {
      return this.materials.map((e) => e.name);
    }
  },
  watch: {
    online(e) {
      d2.call(this, e);
    },
    jobId(e) {
      if (!e) return;
      this.visInit && this.updateVisSize(), this.metadata || this.$emit(
        "error",
        "SmartCut - no metadata received from server"
      ), this.updatePartQuantitiesBasedOnThickness();
      const t = {
        jobId: this.jobId,
        metadata: this.metadata,
        parts: this.uniqueAddedShapes.map((n) => {
          var i, s;
          return {
            l: n.l,
            w: n.w,
            t: n == null ? void 0 : n.t,
            material: n.material,
            orientationLock: n.orientationLock,
            q: (s = (i = this == null ? void 0 : this.metadata) == null ? void 0 : i.addedPartTally) == null ? void 0 : s[n.parentID],
            name: n.name,
            banding: n.banding,
            finish: n.finish,
            customData: n.customData
          };
        }),
        stock: this.uniqueUsedStock.map((n) => {
          var i, s;
          return {
            name: n == null ? void 0 : n.name,
            l: n.l,
            w: n.w,
            t: n == null ? void 0 : n.t,
            material: n.material,
            q: (s = (i = this == null ? void 0 : this.metadata) == null ? void 0 : i.usedStockTally) == null ? void 0 : s[n.parentID],
            trim: n == null ? void 0 : n.trim,
            cost: n == null ? void 0 : n.cost,
            analysis: n == null ? void 0 : n.analysis
          };
        }),
        offcuts: this.offcuts.map((n) => ({
          l: n.l,
          w: n.w,
          t: (n == null ? void 0 : n.t) ?? null,
          q: n.q
        })),
        inputs: {
          parts: this.inputs.shapeList.map((n) => (delete n.listId, n))
        }
      };
      if (this.unplacedShapes.length) {
        const n = this.unplacedShapes.map((i) => i.id).join();
        this.showMessage(this.$t("The following parts did not fit") + ": " + n);
      }
      this.$emit("result", t);
    },
    viewportWidth() {
      this.visInit && this.updateVisSize();
    },
    activeStockId() {
      this.visInit && this.$nextTick(() => this.refresh());
    },
    //stock changes when a thickness is selected in WC, or when the page loads and a thickness is pre-selected
    stock: {
      handler(e) {
        if (Array.isArray(e) || console.warn("SmartCut - stock must be passed as an array"), !(!e || !e.length)) {
          this.inputStock = [], this.materials.length || this.getThicknessesFromStock(e);
          for (const t of e) {
            t.type = this.saw.stockType;
            const n = this.createStockInput(t);
            this.inputStock.push(n);
          }
          this.inputStock.length && (this.inputShapes.length ? this.inputShapes.forEach((t) => t.t = this.inputStock[0].t) : this.addInputShape(1));
        }
      },
      immediate: !0
    },
    inputShapes: {
      handler(e) {
        e.forEach((t) => {
          const n = this.materials.find((i) => i.name === t.material);
          n && (n.thicknesses.includes(t.t) || (t.t = n.thicknesses[0]));
        });
      },
      deep: !0
    }
  },
  mounted() {
    if (this.mounted) return;
    const e = new URL(window.location.href), t = e.searchParams.toString(), n = e.origin + e.pathname + (t ? `?${t}` : "");
    this.currentURL !== n && (this.inputShapes.length = 0, this.addInputShape(1)), this.currentURL = n, this.locale = this.options.locale, EO.call(this, "https://api.cutlistevo.com/"), this.socket.connect(), this.socket.emit("getUserFromDomain"), this.viewportWidth = window.innerWidth, this.resizeTimer = null;
    const i = this.debounce(this.handleResize, 30);
    window.addEventListener("resize", i, {
      passive: !0
    }), window.addEventListener("smartcut/load", (s) => {
      this.parseInputs(s.detail);
    }), this.mounted = !0, this.debug && this.$emit("log", ["SmartCut - ready...", "fields:", this.relevantFieldDefinitions.map((s) => s.id)]);
  },
  methods: {
    getMaxPricingLevels(e) {
      const t = Object.keys(e);
      return Math.max(...t.map((i) => i.split("|").length));
    },
    getAllOptionsFromPricingObject(e) {
      const t = [], n = Object.keys(e), i = this.getMaxPricingLevels(e);
      for (let s = i; s--; ) t.push(/* @__PURE__ */ new Set());
      for (const s of n)
        s.split("|").forEach((o, a) => t[a].add(o));
      for (let s = 0; s < i; s++)
        t[s] = Array.from(t[s]);
      return t;
    },
    getAvailablePricingOptions(e, t = [], n) {
      if (n > 0 && !t[n - 1]) return [];
      const i = /* @__PURE__ */ new Set();
      for (const s of Object.keys(e)) {
        const r = s.split("|");
        if (r.length > n) {
          let o = !0;
          for (let a = 0; a < n; a++)
            if (t[a] && r[a] !== t[a]) {
              o = !1;
              break;
            }
          o && i.add(r[n]);
        }
      }
      return Array.from(i);
    },
    initExtra(e, t) {
      var c;
      if (this.setFieldEnabled(e, !1), !e || !t || !(t != null && t[e]) || !Ge(this, ["options", "enable", e]))
        return;
      const n = [e, "pricing"];
      if (!Oo(t, n)) {
        this.$emit("error", `${n.join(".")} not found in sent data`);
        return;
      }
      const i = Ge(t, n);
      if (typeof i != "object") {
        this.$emit("error", `${n.join(".")} data must be an object`);
        return;
      }
      if (!vs(i)) {
        this.$emit("error", `if provided, ${n.join(".")} data must contain some values`);
        return;
      }
      const s = Object.keys(i), r = Object.values(i);
      if (!s.length) {
        this.$emit("error", `no ${n.join(".")} pricing found`);
        return;
      }
      const o = /,/;
      for (const f of s)
        if (o.test(f)) {
          this.$emit("error", `${n} keys must not contain commas and should only be separated by a pipe (|)`);
          return;
        }
      if (r.some((f) => isNaN(f))) {
        this.$emit("error", `${n} values must be a number`);
        return;
      }
      const a = this.getMaxPricingLevels(i), l = [e, "labels"];
      let u = [];
      if (Oo(t, l))
        u = Ge(t, l);
      else {
        this.$emit("error", `${l.join(".")} not found`);
        return;
      }
      if (!u) {
        this.$emit("error", `${l.join(".")} data not provided`);
        return;
      }
      if (!Array.isArray(u)) {
        this.$emit("error", `${l.join(".")} data must be an array`);
        return;
      }
      if (!(u != null && u.length)) {
        this.$emit("error", `if provided, ${l.join(".")} data must contain values`);
        return;
      }
      if (u.length !== a) {
        this.$emit("error", `${l.join(".")} length (${u.length}) must match the number of levels in ${n.join(".")} (${a})`);
        return;
      }
      if (Ha(this, [e, "labels"], u), Ha(this, [e, "pricing"], i), Ha(this, [e, "options"], this.getAllOptionsFromPricingObject(i)), this.setFieldEnabled(e, !0), !!((c = this.inputShapes) != null && c.length))
        for (const f of this.inputShapes)
          this.initExtrasOptions(f, e);
    },
    initExtrasOptions(e, t) {
      var s;
      const n = (s = this == null ? void 0 : this[t]) == null ? void 0 : s.labels;
      TO(e, t, n);
      const i = lc(t);
      if (e != null && e[i])
        for (const r in e[i]) {
          const o = this.getExtrasPrice(e, t, r);
          this.setExtra(e, t, r, !!o);
        }
    },
    initMaterialsThicknesses(e) {
      var t;
      if ((t = e == null ? void 0 : e.stock) != null && t.some((n) => n == null ? void 0 : n.material)) {
        const n = Object.values(e.stock.reduce((i, s) => {
          const r = s.material.toUpperCase();
          return i[r] || (i[r] = { name: r, thicknesses: [] }), i[r].thicknesses.includes(s.t) || i[r].thicknesses.push(s.t), i;
        }, {}));
        this.materials = n, this.thicknesses = [], this.bondedThicknesses = [], n.forEach((i) => {
          const s = i.thicknesses;
          for (let r = s.length; r--; ) {
            const o = s[r], a = this.getBondedThicknesses(o);
            if (!a.length)
              return this.thicknesses.push(o);
            s.splice(r, 1), this.addBondedThicknesses(a, i);
          }
        }), n.length > 1 && this.setFieldEnabled("material", !0);
      } else
        this.getThicknessesFromStock(e.stock);
    },
    initMachining(e) {
      var t, n, i, s, r;
      Ge(this, ["options", "enable", "machining"]) && (this.machiningOptions = e == null ? void 0 : e.machining, ["holes", "hingeHoles"].forEach((o) => {
        var a, l;
        (a = e == null ? void 0 : e.machining) != null && a[o] && (this.machiningOptions[o].enabled = (l = e == null ? void 0 : e.machining) == null ? void 0 : l[o].enabled);
      }), (i = (n = (t = e == null ? void 0 : e.machining) == null ? void 0 : t.corners) == null ? void 0 : n.types) != null && i.length && (this.machiningOptions.corners.enabled = !0, this.machiningOptions.corners.types = (r = (s = e == null ? void 0 : e.machining) == null ? void 0 : s.corners) == null ? void 0 : r.types));
    },
    parseInputs(e) {
      this.$emit("log", ["SmartCut - loading parts..."]), this.$nextTick(() => {
        var t, n;
        !e || !((n = (t = e == null ? void 0 : e.inputs) == null ? void 0 : t.parts) != null && n.length) || (this.inputShapes = [], e.inputs.parts.forEach((i) => {
          const s = new jo(i);
          s && this.inputShapes.push(s);
        }), this.$emit("log", [`SmartCut - loaded ${this.inputShapes.length} parts`]));
      });
    },
    getEnabledFields(e) {
      return eb(this.allFields, e, this.saw.stockType);
    },
    setFieldEnabled(e, t = !0) {
      JO(this.allFields, "parts", this.saw.stockType, e, t);
    },
    importParts(e) {
      this.inputShapes.length = 0, this.$nextTick(() => {
        var t, n;
        for (const i of e)
          i.t = ((n = (t = this.inputStock) == null ? void 0 : t[0]) == null ? void 0 : n.t) ?? null, this.inputShapes.push(this.createShapeInput(i));
      });
    },
    isCreditVisible() {
      var i, s;
      if ((s = (i = this.user) == null ? void 0 : i.api) != null && s.whiteLabel) return !0;
      let e = !0;
      const t = document.querySelector("#smartcut-app #credit"), n = document.querySelector("#smartcut-app #credit a");
      return [t, n].forEach((r, o) => {
        if (!r) return e = !1;
        const a = window.getComputedStyle(r);
        if (a.display === "none" || a.display === "hidden" || a.opacity === "0" || a.color === "transparent" || a.position !== "relative" || o === 1 && a.color !== "#4e4e4e" && a.color !== "rgb(78, 78, 78)")
          return e = !1;
      }), this.creditVisible = e, e;
    },
    getNestedValue(e, t) {
      return YO(e, t);
    },
    setNestedValue(e, t, n, i = !0) {
      XO(e, t, n, i);
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
    openMachining(e = null) {
      this.currentInputShape = e, e && e.l && e.w ? this.machiningEnabled = !0 : alert("Please enter dimensions first");
    },
    openExtra(e, t) {
      if (e !== "info")
        for (const i in this.extrasIndex)
          i !== e && i !== "info" && (this.extrasIndex[i] = null);
      if (!t) return;
      let n = null;
      n = this.inputShapes.indexOf(t), this.extrasIndex[e] === n ? (this.currentInputShape = null, this.extrasIndex[e] = null) : (this.currentInputShape = t, this.extrasIndex[e] = this.inputShapes.indexOf(t));
    },
    closeMachining() {
      this.machiningEnabled = !1, document.exitFullscreen && document.exitFullscreen();
    },
    hasMachining(e = null) {
      return e ? Py(e) : !1;
    },
    resetProgress() {
      el(this.progress);
    },
    reset() {
      el(this.progress), this.stockList = [], this.shapeList = [], this.cutList = [], this.jobId = 0;
    },
    async updateVisSize(e = !1) {
      if (!this.vis) return !1;
      await this.vis.updateSize(e), this.clearSelection();
    },
    clear() {
      this.inputShapes.length = 0, this.addInputShape(1);
    },
    addBondedThicknesses(e, t) {
      if (!Array.isArray(e)) {
        this.$emit("error", "addBondedThicknesses expects an array");
        return;
      }
      const n = [];
      for (let i = 0; i < e.length; i++) {
        let s = e[i];
        this.units === "decimal" && (s = parseFloat(s)), this.thicknesses.push(s), t && t.thicknesses.push(s), n.push(this.thicknesses.length - 1);
      }
      this.bondedThicknesses.push(n);
    },
    init(e) {
      if (this.debug && this.$emit("log", ["SmartCut - init...", e]), e != null && e.options) {
        const t = e.options;
        PO(t), [
          "stockType",
          "cutPreference",
          "bladeWidth"
        ].forEach((s) => {
          s in t || this.$emit("error", `${s} is a required option`);
        });
        const i = {
          stockType: () => {
            const s = ["sheet", "linear"];
            s.includes(t.stockType) || console.warn(`${t.stockType} is not a valid stockType, expected ${s.join("|")}`), this.saw.stockType = t.stockType;
          },
          cutPreference: () => {
            const s = [
              "efficiency",
              "length",
              "width",
              "beam"
            ];
            if (s.includes(t.cutPreference)) {
              const { cutType: r, cutPreference: o } = Zl(t.cutPreference);
              this.saw.cutType = r, this.saw.cutPreference = o, this.saw.stackHeight = t.stackHeight, t.stockType === "linear" && (this.saw.cutType = null, this.saw.cutPreference = null), t.cutPreference === "beam" && (this.saw.stackHeight = t.stackHeight);
            } else
              console.warn(`SmartCut - ${t.cutPreference} is not one of ${s.join("|")}`);
          },
          bladeWidth: () => {
            t.bladeWidth >= 0 ? this.saw.bladeWidth = t.bladeWidth : console.warn(`SmartCut - you provided an incorrect blade width of: ${t.bladeWidth}`);
          },
          colors: () => {
            for (const [s, r] of Object.entries(t == null ? void 0 : t.colors))
              r && (this.colors[s] = r);
          },
          maxParts: () => {
            this.options.maxParts = t.maxParts;
          },
          enable: () => {
            this.setFieldEnabled(
              "banding",
              Ge(t, ["enable", "banding"])
            ), this.setFieldEnabled(
              "finish",
              Ge(t, ["enable", "finish"])
            ), this.setFieldEnabled(
              "orientationLock",
              Ge(t, ["enable", "orientation"])
            ), this.setFieldEnabled(
              "machining",
              Ge(t, ["enable", "machining"])
            ), this.CSVImportEnabled = Ge(t, ["enable", "csvImport"]), this.visOptions.disableClick = Ge(t, ["enable", "click"]) === !1, this.setFieldEnabled(
              "name",
              Ge(t, ["enable", "partName"])
            );
          },
          locale: () => {
            this.locale = t.locale;
          },
          customFields: () => {
            var r;
            if (!Array.isArray(t.customFields) || !((r = t.customFields) != null && r.length)) return;
            const s = [];
            t.customFields.forEach((o, a) => {
              s.push(o), s[a].custom = !0;
              const l = this.getCustomFieldId(o.id);
              s[a].id = l, s[a].fieldMap = "customData." + l, o.type === "checkbox" && (s[a].w = "32px"), o.type === "select" && (s[a].output = o.output ?? "string", s[a].options = o.options);
            }), this.customFieldDefinitions = s, this.inputShapes.forEach((o) => {
              o.customData = t.customFields.reduce((a, l) => {
                const u = this.getCustomFieldId(l.id);
                return a[u] = o.customData[u] || l.default || "", a;
              }, {});
            });
          }
        };
        for (const s in e == null ? void 0 : e.options)
          this.options[s] = e.options[s], s in i && i[s]();
      }
      this.initExtra("banding", e), this.initExtra("finish", e), this.initMaterialsThicknesses(e), this.initMachining(e), this.loaded = !0, this.$nextTick(() => {
        if (this.visInit === !1) {
          const t = {
            elementID: "#smartcut-svg-wrapper",
            env: "production",
            main: !0,
            units: this.units,
            decimalPlaces: this.options.decimalPlaces,
            saw: this.saw,
            app: !1,
            embed: !0,
            colors: this.colors,
            options: this.visOptions,
            vueComponent: this
          };
          r2.call(this, t);
        }
        this.isCreditVisible() || alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      });
    },
    getThicknessesFromStock(e = []) {
      if (this.thicknesses = [], this.bondedThicknesses = [], this.setFieldEnabled("t", !1), !!e.length) {
        for (const t of e)
          if (t != null && t.t)
            if (typeof t.t == "string" && t.t.includes(",")) {
              const n = this.getBondedThicknesses(t.t, !0);
              n.length === 2 ? (this.addBondedThicknesses(n), this.setFieldEnabled("t", !0), t.t = this.thicknesses[0]) : this.$emit("error", "bonded thickness found which does not have 2 options");
            } else this.thicknesses.includes(t.t) || this.thicknesses.push(t.t);
        this.thicknesses.length > 1 && this.setFieldEnabled("t", !0);
      }
    },
    calculate() {
      var e;
      if (this.clearMessage(), (e = this.options) != null && e.maxParts && this.totalInputShapes > this.options.maxParts) {
        this.showMessage(this.$t("The maximum number of parts is") + " " + this.options.maxParts);
        return;
      }
      this.$emit("calculating"), a2.call(this);
    },
    showMessage(e = {
      main: null,
      heading: null,
      list: []
    }) {
      var t;
      typeof e == "object" ? (this.messageContent = e == null ? void 0 : e.main, this.messageHeading = e.heading, (t = e == null ? void 0 : e.list) != null && t.length && e.list.forEach((n) => {
        this.messageContent += `

${this.$t(n)}`;
      })) : this.messageContent = e, this.messageVisible = !0;
    },
    clearMessage() {
      this.messageVisible = !1, this.messageContent = "", this.messageHeading = "";
    },
    createStockInput({
      name: e = "",
      l: t = null,
      w: n = null,
      t: i = null,
      material: s = "",
      q: r = 1,
      trim: o = {
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 0
      },
      grain: a = "",
      cost: l = 0,
      notes: u = ""
    }) {
      return new My({
        id: (this.inputStock.length + 1).toString(),
        name: e,
        units: this.units,
        l: t,
        w: n,
        t: i,
        material: s,
        q: r,
        autoAdd: !0,
        trim: o,
        grain: a,
        cost: l,
        notes: u
      });
    },
    createShapeInput({
      l: e = null,
      w: t = this.saw.stockType === "linear" ? ((c) => (c = this.inputStock[0]) == null ? void 0 : c.w)() : null,
      t: n = this.thicknesses.length ? this.thicknesses[0] : null,
      q: i = 1,
      material: s = ((f) => (f = this == null ? void 0 : this.materials) == null ? void 0 : f.length)() === 1 ? this.materials[0].name : "",
      name: r = null,
      orientationLock: o = this.options.orientationModel === 2 ? "l" : null,
      bandingOptions: a = null,
      finishOptions: l = null,
      customData: u = null
    } = {}) {
      var d, p, w, E;
      const h = new jo({
        id: (this.inputShapes.length + 1).toString(),
        units: this.units,
        l: e,
        w: t,
        t: n,
        q: i,
        material: s,
        name: r,
        orientationLock: o,
        bandingOptions: a,
        finishOptions: l,
        customData: u
      });
      return (p = (d = this == null ? void 0 : this.banding) == null ? void 0 : d.labels) != null && p.length && this.initExtrasOptions(h, "banding"), (E = (w = this == null ? void 0 : this.finish) == null ? void 0 : w.labels) != null && E.length && this.initExtrasOptions(h, "finish"), h;
    },
    addInputShape(e = 1) {
      for (let t = e; t--; ) {
        let n;
        if (this.inputShapes.length > 0) {
          const i = this.inputShapes[this.inputShapes.length - 1];
          n = this.createShapeInput({
            material: i.material,
            t: i.t
          });
        } else
          n = this.createShapeInput();
        this.inputShapes.push(n);
      }
    },
    removeShape(e) {
      var n;
      if (this.inputShapes.length === 1) return;
      const t = this.inputShapes[e].listId;
      this.inputShapes.splice(e, 1), ((n = this.currentInputShape) == null ? void 0 : n.listId) === t && (this.currentInputShape = null), el(this.progress);
    },
    createStock(e, t) {
      const n = Q(e.l), i = Q(e.w), s = e.t ? Q(e.t) : null, r = new Bn({
        id: (t + 1).toString() + ".0",
        name: e != null && e.name ? e.name : `${n}x${i}`,
        l: n,
        w: i,
        t: s,
        saw: new si(this.saw),
        material: e.material,
        grain: e.grain,
        autoAdd: !0,
        cost: e == null ? void 0 : e.cost,
        trim: e.trim,
        allowExactFitShapes: e.allowExactFitShapes,
        type: this.saw.stockType,
        notes: e == null ? void 0 : e.notes
      });
      return this.stockList.push(r), r.issues;
    },
    createStockList() {
      return o2.call(this, !1);
    },
    createShapeList() {
      var t, n;
      const e = [];
      for (let i = 0; i < this.inputShapes.length; i++) {
        const s = this.inputShapes[i];
        if ((t = s == null ? void 0 : s.issues) != null && t.length && e.push(...s.issues.map((o) => this.$t("Part") + ` ${i + 1}: ${o}`)), !s.l || !s.w || !s.q) continue;
        const r = new jn(IO({
          id: (i + 1).toString() + ".0",
          l: Q(s == null ? void 0 : s.l),
          w: Q(s == null ? void 0 : s.w),
          t: s != null && s.t ? Q(s.t) : null,
          material: s != null && s.material ? s.material : null,
          q: typeof s.q != "number" ? parseInt(s.q) : s.q,
          name: s.name,
          orientationLock: s.orientationLock,
          banding: s.banding,
          finish: s.finish,
          machining: s.machining,
          customData: s.customData
        }, this.options.orientationModel));
        this.shapeList.push(r), (n = r == null ? void 0 : r.issues) != null && n.length && e.push(...r.issues);
      }
      return this.updatePartQuantitiesBasedOnThickness(), e;
    },
    refresh() {
      this.refreshStock(), this.refreshShapes();
    },
    refreshStock() {
      c2.call(this);
    },
    refreshShapes() {
      l2.call(this, this.uniqueShapes.length);
    },
    toggleWidget(e, t = null) {
      t2.call(this, e, t);
    },
    clearSelection() {
      u2.call(this);
    },
    showStock(e) {
      f2.call(this, e);
    },
    setAllExtrasOptions(e, t, n, i) {
      const s = t + "Options";
      if (!e[s] || typeof e[s] != "object") return;
      const r = Object.keys(e[s]);
      if (!r.length) return;
      const o = this.getExtrasPrice(e, t, "all"), a = e[s][n], l = Object.values(a || {}).filter((c) => c);
      let u = [];
      for (const c of r)
        c !== "all" && (u.includes(c) || (this.setExtrasOption(e, t, c, n, i), Array.isArray(l) || this.setExtra(e, t, c, !1), this.setExtra(e, t, c, !!o)));
    },
    setExtrasOption(e, t, n, i, s) {
      var u;
      const r = t + "Options";
      if (!((u = e == null ? void 0 : e[r]) != null && u[n]) || !(i in e[r][n])) return;
      this.setExtra(e, t, n, !1), e[r][n][i] = s;
      const o = e[r][n], a = Object.values(o || {}).filter((c) => c);
      if (!Array.isArray(a)) {
        this.setExtra(e, t, n, !1);
        return;
      }
      const l = this.getExtrasPrice(e, t, n);
      this.setExtra(e, t, n, !!l);
    },
    //banding uses boolean, finishes (and any future extras) use a string
    setExtra(e, t, n, i) {
      var o;
      if (n === "all") return;
      const s = lc(t), r = CO((o = e == null ? void 0 : e[s]) == null ? void 0 : o[n]);
      i ? e[t][n] = r || !0 : e[t][n] = !1;
    },
    getExtrasPrice(e, t, n) {
      var a;
      const i = t + "Options";
      if (!((a = e == null ? void 0 : e[i]) != null && a[n])) return 0;
      const s = e[i][n], r = Object.values(s || {}).filter((l) => l);
      return !Array.isArray(r) || !this.$parent.findExtrasPrice || typeof this.$parent.findExtrasPrice != "function" ? 0 : this.$parent.findExtrasPrice(t, r);
    },
    formatPrice(e) {
      return !this.$parent.formatPrice || typeof this.$parent.formatPrice != "function" ? "" : this.$parent.formatPrice(e, this.locale);
    },
    //update the thickness data and return
    getShapeThicknesses(e) {
      var s;
      if (!e)
        return {
          thicknesses: [],
          bondedThicknesses: []
        };
      if (!((s = this.materials) != null && s.length))
        return {
          thicknesses: this.thicknesses,
          bondedThicknesses: []
        };
      if (!e.material)
        return {
          thicknesses: [],
          bondedThicknesses: []
        };
      const t = this.materials.find((r) => r.name === e.material);
      if (!t)
        return {
          thicknesses: [],
          bondedThicknesses: []
        };
      const n = t.thicknesses, i = [];
      for (let r = 0; r < n.length; r++) {
        const o = n[r], a = this.getBondedThicknesses(o), l = [];
        a.length && (a.forEach((u) => {
          n.splice(r, 1, u), l.push(r);
        }), r++), l.length && i.push(l);
      }
      return {
        thicknesses: n,
        bondedThicknesses: i
      };
    },
    getShapeThicknessOptions(e) {
      return this.getShapeThicknesses(e).thicknesses.map((i) => ({
        label: i.toString(),
        value: i
      }));
    },
    getBondedThicknesses(e, t = !1) {
      if (typeof e == "string" && e.includes(",")) {
        const n = e.split(",");
        return t ? n.map((i) => Q(i)) : n;
      }
      return [];
    },
    getShapeStockGrainSummary(e) {
      const t = e.material, n = e.t, i = this.inputStock.filter((r) => r.material === t && r.t === n);
      return $A(i);
    },
    //this is for bonded thicknesses
    updatePartQuantitiesBasedOnThickness() {
      this.thicknesses.length && this.shapeList.forEach((e) => {
        if (!e.t) return;
        const t = this.thicknesses.findIndex((s) => Q(s) === e.t), n = this.bondedThicknesses.find((s) => s.includes(t));
        if (!n) return;
        const i = Math.min(...n.map((s) => this.thicknesses[s]));
        e.t > i && (e.q = e.q * (e.t / i), e.t = i);
      });
    },
    debounce(e, t) {
      let n;
      return function(...s) {
        const r = () => {
          clearTimeout(n), e(...s);
        };
        clearTimeout(n), n = setTimeout(r, t);
      };
    },
    handleResize() {
      this.viewportWidth = window.innerWidth;
    },
    getCustomFieldId(e) {
      return e ? _r(e).toLowerCase() : null;
    }
  }
}, $P = {
  key: 0,
  id: "debug"
}, BP = { key: 2 }, jP = {
  key: 0,
  class: "row table-heading"
}, qP = {
  key: 0,
  class: "cell center"
}, UP = {
  key: 1,
  class: "cell delete"
}, WP = { class: "cell" }, zP = {
  key: 0,
  class: "cell center"
}, VP = ["onClick"], GP = {
  key: 1,
  class: "cell"
}, HP = ["aria-label", "onClick"], KP = { class: "button-wrapper main" }, YP = ["aria-label"], XP = ["aria-label", "disabled"], JP = ["aria-label"], QP = { id: "part-count" }, ZP = {
  key: 3,
  id: "messages"
}, eN = {
  key: 0,
  class: "heading"
}, tN = { class: "content" }, nN = {
  key: 4,
  id: "progress"
}, iN = {
  id: "smartcut-svg-wrapper",
  class: "svg-wrapper production"
}, sN = {
  key: 0,
  id: "stack"
};
function rN(e, t, n, i, s, r) {
  var k, g, b, A, N, L, B;
  const o = Qe("Machining"), a = Qe("Spinner"), l = Qe("font-awesome-icon"), u = Qe("InputField"), c = Qe("OrientationButton"), f = Qe("BandingButton"), h = Qe("FinishButton"), d = Qe("MachiningButton"), p = Qe("ExtrasInputs"), w = Qe("ObjectViewer"), E = Qe("ImportCSV"), v = Qe("StockNavigation");
  return J(), te(Oe, null, [
    s.env === "development" ? (J(), te("div", $P, t[4] || (t[4] = [
      ie("div", null, "Developer information", -1)
    ]))) : fe("", !0),
    s.machiningEnabled ? (J(), at(o, {
      key: 1,
      shape: s.currentInputShape,
      options: s.machiningOptions,
      onClose: r.closeMachining
    }, null, 8, ["shape", "options", "onClose"])) : fe("", !0),
    s.loaded ? fe("", !0) : (J(), te("div", BP, [
      me(a, {
        size: 50,
        "show-number": !1
      })
    ])),
    s.loaded ? (J(), te("div", {
      key: 3,
      id: "smartcut-checkout",
      class: xt({ fullscreen: s.isFullScreen })
    }, [
      s.canGoFullScreen ? (J(), te("div", {
        key: 0,
        id: "smartcut-full-screen",
        class: "icon-left",
        onClick: t[0] || (t[0] = (j) => r.toggleFullScreen())
      }, [
        me(l, { icon: ["fasr", "expand"] }),
        Qs(" " + Me(i.t("full screen")), 1)
      ])) : fe("", !0),
      (g = (k = s.user) == null ? void 0 : k.api) != null && g.whiteLabel ? fe("", !0) : (J(), te("div", {
        key: 1,
        id: "credit",
        style: He(s.creditStyles)
      }, [
        ie("a", {
          title: "SmartCut | Cut list optimization software",
          style: He(s.creditLinkStyles),
          target: "_blank",
          href: "https://smartcut.dev/"
        }, Me(i.t("Powered by SmartCut")), 5)
      ], 4)),
      ie("div", {
        id: "part-input",
        class: "inputs no-margin-top grid-table",
        style: He({ "grid-template-columns": r.partColumnsStyle })
      }, [
        s.inputShapes.length ? (J(), te("div", jP, [
          t[5] || (t[5] = ie("div", { class: "cell id" }, null, -1)),
          (J(!0), te(Oe, null, Dn(r.relevantFieldDefinitions, (j) => (J(), te("div", {
            key: j.id,
            class: xt(["cell", { center: ["orientationLock", "banding", "finish", "machining"].includes(j.id) || j.type === "checkbox" }])
          }, Me(j.label), 3))), 128)),
          s.env === "development" ? (J(), te("div", qP, " Info ")) : fe("", !0),
          s.inputShapes.length > 1 ? (J(), te("div", UP)) : fe("", !0)
        ])) : fe("", !0),
        (J(!0), te(Oe, null, Dn(s.inputShapes, (j, H) => (J(), te("div", {
          key: H,
          class: "row inputs"
        }, [
          ie("div", WP, [
            ie("div", {
              class: "id",
              style: He({
                background: s.colors.partA,
                color: s.colors.text
              })
            }, Me(H + 1), 5)
          ]),
          (J(!0), te(Oe, null, Dn(r.relevantFieldDefinitions, (D) => (J(), te("div", {
            key: D.fieldMap,
            class: xt(["cell", [`${D.id}`, { center: ["orientationLock", "banding", "finish", "machining"].includes(D.id) || D.type === "checkbox" }]])
          }, [
            ["orientationLock", "banding", "finish", "machining"].includes(D.id) ? D.id === "orientationLock" ? (J(), at(c, {
              key: 1,
              id: "orientation-" + H,
              rectangle: j,
              "stock-grain": r.getShapeStockGrainSummary(j),
              "button-background": s.colors.button,
              "icon-color": s.colors.buttonText,
              "orientation-model": s.options.orientationModel,
              onUpdateOrientation: (K) => j.orientationLock = K
            }, null, 8, ["id", "rectangle", "stock-grain", "button-background", "icon-color", "orientation-model", "onUpdateOrientation"])) : D.id === "banding" ? (J(), at(f, {
              key: 2,
              id: "banding-" + H,
              "input-shape": j,
              "stock-grain": r.getShapeStockGrainSummary(j),
              open: s.extrasIndex.banding === H,
              "orientation-model": s.options.orientationModel,
              onClicked: (K) => r.openExtra("banding", j)
            }, null, 8, ["id", "input-shape", "stock-grain", "open", "orientation-model", "onClicked"])) : D.id === "finish" ? (J(), at(h, {
              key: 3,
              id: "finish-" + H,
              type: "checkbox",
              open: s.extrasIndex.finish === H,
              onClicked: (K) => r.openExtra("finish", j)
            }, null, 8, ["id", "open", "onClicked"])) : D.fieldMap === "machining" && s.canGoFullScreen ? (J(), at(d, {
              key: 4,
              id: "machining-" + H,
              "input-shape": j,
              onOpen: (K) => r.openMachining(j)
            }, null, 8, ["id", "input-shape", "onOpen"])) : fe("", !0) : (J(), at(u, {
              key: 0,
              id: D.id + "-" + H,
              focus: s.options.enable.focus && H === s.inputShapes.length - 1 && D.id === "l",
              type: D.type,
              output: D.output,
              label: D.label,
              units: n.units,
              placeholder: D == null ? void 0 : D.placeholder,
              options: D.id === "t" ? r.getShapeThicknessOptions(j) : D == null ? void 0 : D.options,
              "true-value": D == null ? void 0 : D.trueValue,
              "false-value": D == null ? void 0 : D.falseValue,
              default: D == null ? void 0 : D.default,
              min: typeof (D == null ? void 0 : D.min) == "number" ? D.min : null,
              max: typeof (D == null ? void 0 : D.max) == "number" ? D.max : null,
              custom: D == null ? void 0 : D.custom,
              value: r.getNestedValue(j, D == null ? void 0 : D.fieldMap),
              text: {
                delete: i.t("delete"),
                select: i.t("select")
              },
              onUpdate: (K) => {
                D.fieldMap && r.setNestedValue(j, D.fieldMap, K);
              }
            }, null, 8, ["id", "focus", "type", "output", "label", "units", "placeholder", "options", "true-value", "false-value", "default", "min", "max", "custom", "value", "text", "onUpdate"]))
          ], 2))), 128)),
          s.env === "development" ? (J(), te("div", zP, [
            ie("button", {
              type: "button",
              class: xt({ selected: s.extrasIndex.info === H }),
              onClick: (D) => r.openExtra("info", j)
            }, " i ", 10, VP)
          ])) : fe("", !0),
          s.inputShapes.length > 1 ? (J(), te("div", GP, [
            ie("button", {
              type: "button",
              class: "delete",
              "aria-label": i.t("remove part"),
              onClick: (D) => r.removeShape(H)
            }, [
              me(l, { icon: ["fass", "trash"] })
            ], 8, HP)
          ])) : fe("", !0),
          s.extrasIndex.banding === H && s.banding.options.length > 0 ? (J(), at(p, {
            key: 2,
            shape: j,
            "shape-index": H,
            "extra-key": "banding",
            "extra-label": "banding",
            "extra-keys": s.banding.keys,
            "all-options": s.banding.options,
            pricing: s.banding.pricing,
            labels: s.banding.labels,
            "user-friendly-field-map": s.userFriendlyFieldMap,
            "part-columns": r.partColumns,
            onUpdateAll: r.setAllExtrasOptions,
            onSet: r.setExtrasOption
          }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "user-friendly-field-map", "part-columns", "onUpdateAll", "onSet"])) : fe("", !0),
          s.extrasIndex.finish === H && s.finish.options.length > 0 ? (J(), at(p, {
            key: 3,
            shape: j,
            "shape-index": H,
            "extra-key": "finish",
            "extra-label": "finish",
            "extra-keys": s.finish.keys,
            "all-options": s.finish.options,
            pricing: s.finish.pricing,
            labels: s.finish.labels,
            "user-friendly-field-map": s.userFriendlyFieldMap,
            "part-columns": r.partColumns,
            onUpdateAll: r.setAllExtrasOptions,
            onSet: r.setExtrasOption
          }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "user-friendly-field-map", "part-columns", "onUpdateAll", "onSet"])) : fe("", !0),
          s.extrasIndex.info === H ? (J(), te("div", {
            key: 4,
            id: "shape-info",
            style: He({ "grid-column-end": "span " + (r.partColumns + 1) })
          }, [
            me(w, {
              data: [j.finish, j.finishOptions],
              paths: ["finish", "finishOptions"]
            }, null, 8, ["data"])
          ], 4)) : fe("", !0)
        ]))), 128))
      ], 4),
      ie("div", KP, [
        ie("button", {
          type: "button",
          "aria-label": i.t("add part"),
          style: He({ background: s.colors.button, color: s.colors.buttonText }),
          class: "add c-btn icon-left",
          onClick: t[1] || (t[1] = (j) => r.addInputShape(1))
        }, [
          me(l, { icon: ["fasr", "plus-large"] }),
          Qs(" " + Me(i.t("add part")), 1)
        ], 12, YP),
        ie("button", {
          id: "calculate-button",
          type: "button",
          class: "c-btn calculate icon-left",
          "aria-label": i.t("calculate"),
          style: He({
            background: s.colors.button,
            color: s.colors.buttonText
          }),
          disabled: !((b = s.inputStock) != null && b.length) || s.thinking,
          onClick: t[2] || (t[2] = (j) => r.calculate())
        }, [
          me(l, { icon: ["fass", "calculator"] }),
          Qs(Me(i.t("calculate")), 1)
        ], 12, XP),
        ie("button", {
          type: "button",
          class: "c-btn clear",
          "aria-label": i.t("clear"),
          onClick: t[3] || (t[3] = (j) => r.clear())
        }, [
          me(l, { icon: ["fass", "trash"] })
        ], 8, JP),
        ie("div", QP, Me(r.totalInputShapes) + Me((A = s.options) != null && A.maxParts ? "/" + s.options.maxParts : ""), 1)
      ]),
      s.CSVImportEnabled ? (J(), at(E, {
        key: 2,
        ref: "import",
        units: n.units,
        "custom-fields": s.customFieldDefinitions,
        "banding-options": s.banding.options,
        "banding-labels": s.banding.labels,
        options: {
          locale: s.options.locale
        },
        onImport: r.importParts
      }, null, 8, ["units", "custom-fields", "banding-options", "banding-labels", "options", "onImport"])) : fe("", !0),
      s.messageVisible ? (J(), te("div", ZP, [
        s.messageHeading ? (J(), te("div", eN, Me(s.messageHeading), 1)) : fe("", !0),
        ie("pre", tN, Me(s.messageContent), 1)
      ])) : fe("", !0),
      (s.options.enable.diagram ? s.thinking && !s.progress.complete : s.thinking || s.progress.complete) ? (J(), te("div", nN, [
        me(a, {
          size: 50,
          number: s.progress.shapeCount,
          complete: s.progress.complete,
          "show-number": s.options.enable.progressNumber
        }, null, 8, ["number", "complete", "show-number"])
      ])) : fe("", !0),
      Up(ie("div", iN, [
        ((N = r.activeStock) == null ? void 0 : N.type) !== "roll" ? (J(), te("div", sN, Me((L = r.activeStock) != null && L.stack ? (B = r.activeStock) == null ? void 0 : B.stack : 1), 1)) : fe("", !0)
      ], 512), [
        [mg, s.options.enable.diagram && s.jobId > 0]
      ]),
      s.options.enable.diagram && s.visInit && r.usedStock.length > 1 && s.jobId > 0 && s.progress.complete ? (J(), at(v, {
        key: 5,
        ref: "stockNavigation",
        "active-stock-id": s.activeStockId,
        "stock-list": r.stackedStock,
        "stock-count": s.stockList.length,
        "viewport-width": s.viewportWidth,
        onShowStock: r.showStock
      }, null, 8, ["active-stock-id", "stock-list", "stock-count", "viewport-width", "onShowStock"])) : fe("", !0)
    ], 2)) : fe("", !0)
  ], 64);
}
typeof Uo == "function" && Uo(ib);
const oN = /* @__PURE__ */ nn(ib, [["render", rN], ["__scopeId", "data-v-b90c29be"]]), aN = /* @__PURE__ */ mr(() => import("./ObjectViewer-d37pGUpY.js")), lN = {
  name: "Wordpress",
  //needs to be Wordpress not WordPress
  components: {
    CheckoutCalculator: oN,
    ObjectViewer: aN
  },
  data() {
    return {
      env: "production",
      debug: !0,
      el: {},
      settings: {},
      inputs: {},
      formatting: {},
      product: {},
      stock: [],
      variations: [],
      extrasData: {
        banding: {},
        finish: {}
      },
      machiningPricing: null
    };
  },
  computed: {
    smartcutConfigUnits() {
      return window.smartcutConfig.settings.units ?? "decimal";
    }
  },
  created() {
    console.log(
      "💥 Powered by https://smartcut.dev",
      window.smartcutConfig.version
    );
  },
  mounted() {
    console.log("Launching WordPress checkout..."), this.extrasData.banding = Ge(window, ["smartcutConfig", "banding_data"]), this.extrasData.finish = Ge(window, ["smartcutConfig", "finish_data"]), this.machiningPricing = Ge(window, ["smartcutConfig", "machining_pricing"]), this.variations = Ge(window, ["smartcutConfig", "variations"]), this.cacheElements(), this.cacheInputFields(), this.configureProduct(window.smartcutConfig), this.configurePricing(window.smartcutConfig), this.initCheckout(), this.configureStock(), jQuery(".variations_form").on("reset_data", () => {
      this.disableCutToSize();
    }), jQuery(".variations_form").on("found_variation", (t, n) => {
      var s;
      this.reset(), this.log(["variation selected", n.attributes]), this.stock = [];
      const i = Ge(n, ["attributes", "attribute_thickness"]);
      if (this.product.selected_thickness = i, this.product.multiple_sizes) {
        const r = this.getSizes(n);
        if (!r)
          return this.disableCutToSize(), this.el.cart_button.disabled = !0, this.el.quantity.readOnly = !0, this.error("The size of this multiple size product could not be found");
        Array.isArray(r) ? this.enableCutToSize() : this.isFullSheetSize(r) ? (this.disableCutToSize(), this.enableFullSheet(), this.el.quantity.style.display = "inline-block") : (this.enableCutToSize(), this.el.quantity.style.display = "none"), this.log([`variation found, size ${r}, thickness ${i}`]);
        let o;
        if ((s = this.variations) != null && s.length && i) {
          if (Array.isArray(r)) {
            const a = this.variations.find((l) => l.attributes.thickness === i);
            if (!a)
              return this.error(`variation not found for thickness ${i}`);
            o = r.map((l) => ({
              size: l,
              l: l.split("x")[0],
              w: l.split("x")[1],
              t: i,
              price: a == null ? void 0 : a.price
            }));
          } else
            o = this.variations.filter((a) => {
              var l, u;
              return /\d+x\d+/.test((l = a == null ? void 0 : a.attributes) == null ? void 0 : l.size) ? i === ((u = a == null ? void 0 : a.attributes) == null ? void 0 : u.thickness) : !1;
            }).map((a) => {
              var c, f, h;
              const l = this.variations.find((d) => {
                var p, w;
                return i === ((p = d == null ? void 0 : d.attributes) == null ? void 0 : p.thickness) && r === ((w = d == null ? void 0 : d.attributes) == null ? void 0 : w.size);
              });
              l || this.error(`exactMatchVariation not found for thickness ${i}, size: ${r} in variations`);
              let u;
              return !(l != null && l.price) || parseFloat(l.price) === 0 ? u = (a == null ? void 0 : a.price) ?? "0" : u = l == null ? void 0 : l.price, this.log([
                `price for thickness ${i}, size: ${r} detected as ${u}`
              ]), {
                size: (c = a == null ? void 0 : a.attributes) == null ? void 0 : c.size,
                l: (f = a == null ? void 0 : a.attributes) == null ? void 0 : f.size.split("x")[0],
                w: (h = a == null ? void 0 : a.attributes) == null ? void 0 : h.size.split("x")[1],
                t: this.product.selected_thickness,
                price: u
              };
            });
          o.forEach((a) => {
            const l = this.createStock(
              a.l,
              a.w,
              a.t,
              a.price,
              n == null ? void 0 : n.attributes
            );
            this.stock.push(l);
          });
        }
      } else {
        this.el.quantity.style.display = "inline-block";
        const r = this.variations.find((o) => o.attributes.thickness === i);
        if (!r)
          return this.error(`variation not found for thickness ${i}`);
        this.stock.push(this.createStock(
          this.product.l,
          this.product.w,
          i,
          r.price,
          n == null ? void 0 : n.attributes
        )), this.enableCutToSize();
      }
    }), [
      "div.quantity > input.plus",
      "div.quantity > input.minus",
      "div.quantity .qty-plus",
      "div.quantity .qty-minus"
    ].forEach((t) => {
      const n = document.querySelector(t);
      n && (n.style.display = "none");
    });
  },
  methods: {
    toggleDebug(e) {
      this.debug = e;
    },
    log(e) {
      this.debug && console.log("SmartCut -", ...e);
    },
    enableCutToSize() {
      [
        "checkout",
        "intro_text",
        "offcuts",
        "banding_key"
      ].forEach((t) => {
        const n = this.el[t];
        n && (n.style.display = "block");
      }), this.isPricingTableNeeded() && (this.el.pricing_table.style.display = "table"), this.el.cart_button.disabled = !0, this.el.quantity.readOnly = !0, this.el.quantity.style.display = "inline-block";
    },
    disableCutToSize() {
      var t;
      [
        "checkout",
        "intro_text",
        "offcuts",
        "banding_key",
        "pricing_table"
      ].forEach((n) => {
        const i = this.el[n];
        i && (i.style.display = "none");
      }), (t = this.el) != null && t.quantity && (this.el.quantity.style.display = "inline-block");
    },
    enableFullSheet() {
      this.el.cart_button.disabled = !1, this.el.quantity.readOnly = !1;
    },
    parseValue(e, t) {
      let n;
      switch (t) {
        case "string":
        case "hex":
          n = this.parseString(e);
          break;
        case "boolean":
          n = this.parseBoolean(e);
          break;
        case "int":
          n = this.parseInt(e);
          break;
        case "float":
          n = this.parseFloat(e);
          break;
        default:
          n = this.parseString(e);
          break;
      }
      return n;
    },
    parseInt(e) {
      return e ? parseInt(e) : 0;
    },
    parseFloat(e) {
      return e ? parseFloat(e) : 0;
    },
    parseBoolean(e) {
      return e ? e === "1" : !1;
    },
    parseString(e) {
      return e || "";
    },
    initCheckout() {
      var r, o, a, l, u, c, f, h, d, p, w, E, v, k, g, b, A, N, L;
      if (!(window != null && window.smartcutConfig)) {
        console.error("SmartCut config not found");
        return;
      }
      for (const B in window.smartcutConfig.settings_fields)
        this.settings[B] = this.parseValue(
          window.smartcutConfig.settings[B],
          window.smartcutConfig.settings_fields[B]
        );
      const e = this.getExtrasData(Ge(window, ["smartcutConfig", "banding_data"])), t = this.getExtrasData(Ge(window, ["smartcutConfig", "finish_data"])), n = {
        debug: this.settings.debug,
        units: this.settings.units,
        locale: window.smartcutConfig.locale,
        //saw settings
        bladeWidth: this.settings.blade_width,
        stockType: this.settings.stock_type,
        cutPreference: this.settings.cut_preference,
        stackHeight: this.settings.stack_height,
        maxParts: this.settings.max_parts ?? null,
        enable: {
          banding: !this.settings.disable_banding,
          finish: !this.settings.disable_finish,
          orientation: !this.settings.disable_orientation,
          diagram: !this.settings.hide_diagram,
          focus: !0,
          machining: this.settings.enable_machining,
          csvImport: this.settings.enable_import,
          click: !0,
          partName: !this.settings.disable_part_name,
          progressNumber: this.settings.pricing_strategy !== "part_area"
        },
        orientationModel: 0,
        decimalPlaces: 2,
        //colors
        colors: {
          partA: (r = this.settings) != null && r.part_a_color ? (o = this.settings) == null ? void 0 : o.part_a_color : "#1d9bc4",
          partB: (a = this.settings) != null && a.part_b_color ? (l = this.settings) == null ? void 0 : l.part_b_color : "#065d7a",
          partHover: (u = this.settings) != null && u.part_hover_color ? (c = this.settings) == null ? void 0 : c.part_hover_color : "#f8b029",
          partSelected: (f = this.settings) != null && f.part_selected_color ? (h = this.settings) == null ? void 0 : h.part_selected_color : "#5bc85b",
          stock: (d = this.settings) != null && d.stock_color ? (p = this.settings) == null ? void 0 : p.stock_color : "#ffd166",
          button: (w = this.settings) != null && w.button_color ? (E = this.settings) == null ? void 0 : E.button_color : "#118ab2",
          buttonText: (v = this.settings) != null && v.button_text_color ? (k = this.settings) == null ? void 0 : k.button_text_color : "#ffffff",
          text: (g = this.settings) != null && g.text_color ? (b = this.settings) == null ? void 0 : b.text_color : "#ffffff"
        }
      }, i = {
        units: "decimal",
        sides: {
          enabled: this.settings.machining_sides
        },
        holes: {
          enabled: this.settings.machining_holes,
          defaultDiameter: this.settings.machining_holes_default_diameter,
          diameters: this.settings.machining_holes_diameters.split(",").map((B) => B.trim()).filter((B) => B),
          minDiameter: this.settings.machining_holes_min_diameter,
          maxDiameter: this.settings.machining_holes_max_diameter,
          enableDepth: this.settings.machining_holes_depth,
          depths: this.settings.machining_holes_depths.split(",").map((B) => B.trim()).filter((B) => B),
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
          ].filter((B) => B),
          minValue: this.settings.machining_corners_min_value,
          maxValue: this.settings.machining_corners_max_value,
          enableBanding: this.settings.machining_corners_enable_banding
        },
        banding: {
          enabled: !!(!this.settings.disable_banding && ((N = (A = window.smartcutConfig) == null ? void 0 : A.banding_data) != null && N.length)),
          enableCorners: this.settings.machining_corners_enable_banding,
          types: window.smartcutConfig.banding_data ? Object.values(window.smartcutConfig.banding_data).map((B) => B.name) : [],
          enableTypes: !!((L = window.smartcutConfig) != null && L.banding_data)
        }
      }, s = Ti.call(this, "calculator");
      s && s.init({
        type: this.product.type,
        stock: this.stock,
        variations: this.variations ?? null,
        options: n,
        banding: e,
        finish: t,
        machining: i
      });
    },
    configureProduct(e) {
      const t = (e == null ? void 0 : e.multiple_sizes) === "1";
      this.product = {
        type: e == null ? void 0 : e.product_type,
        multiple_sizes: t,
        size: e != null && e.size ? e.size.split(" | ") : [],
        l: !t && (e != null && e.l) ? this.parseFloat(e.l) : null,
        w: !t && (e != null && e.w) ? this.parseFloat(e.w) : null,
        t: (e == null ? void 0 : e.t) ?? null
        //do not parse to allow for multiple thicknesses separated by a comma
      }, this.product.stock_name = e.stock_name, this.product.multiple_sizes || (this.product.l || this.error("product 'length' attribute not available"), this.product.w || this.error("product 'width' attribute not available"));
    },
    configurePricing(e) {
      this.formatting = {
        thousands_separator: e == null ? void 0 : e.thousands_separator,
        decimal_separator: e == null ? void 0 : e.decimal_separator,
        number_of_decimals: e == null ? void 0 : e.number_of_decimals,
        currency_symbol: e == null ? void 0 : e.currency_symbol,
        currency_position: e == null ? void 0 : e.currency_position
      };
    },
    cacheElements() {
      if (this.el.checkout = document.getElementById("smartcut-app"), !this.el.checkout)
        return this.error("checkout iframe not found");
      if (this.el.intro_text = document.getElementById("smartcut-intro-text"), this.el.pricing_table = document.getElementById("smartcut-pricing-table"), this.el.offcuts = document.getElementById("include_offcuts_field"), this.el.banding_key = document.getElementById("smartcut-banding-key"), this.el.finish_key = document.getElementById("smartcut-finish-key"), this.el.banding_total_price = document.querySelector("#smartcut-banding-total bdi .smartcut-price-selector"), this.el.finish_total_price = document.querySelector("#smartcut-finish-total bdi .smartcut-price-selector"), this.el.cut_length_price = document.querySelector("#smartcut-cut-length-total bdi .smartcut-price-selector"), this.el.per_part_price = document.querySelector("#smartcut-per-part-total bdi .smartcut-price-selector"), this.el.surcharge_price = document.querySelector("#smartcut-surcharge-total bdi .smartcut-price-selector"), this.el.machining_total_price = document.querySelector("#smartcut-machining-total bdi .smartcut-price-selector"), this.el.quantity = document.querySelector(".smartcut-stock-quantity"), this.el.cart_button = document.querySelector(".single_add_to_cart_button"), !this.el.quantity)
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
    createStock(e = null, t = null, n = null, i = null, s = null) {
      let r;
      if (s && typeof s == "object") {
        if (r = [], s && typeof s == "object")
          for (const [a, l] of Object.entries(s))
            a !== "attribute_size" && a !== "attribute_thickness" && r.push(`${a.replace("attribute_", "")}: ${l}`);
        r = r.join(" - ");
      }
      return {
        name: this.product.stock_name,
        type: this.settings.stock_type,
        l: e,
        w: t,
        t: n,
        cost: parseFloat(i),
        trim: this.getStockTrim(),
        notes: r
      };
    },
    configureStock() {
      var e, t;
      (e = this.product) != null && e.stock_name || this.error("product name not specified"), this.product.type === "variable" ? this.disableCutToSize() : (this.enableCutToSize(), this.stock = [], this.product.multiple_sizes ? this.product.size.forEach((n) => {
        var o;
        const [i, s] = n.split("x"), r = this.createStock(
          i,
          s,
          (o = this.product) == null ? void 0 : o.t,
          n.price
        );
        this.stock.push(r);
      }) : this.stock.push(this.createStock(
        this.product.l,
        this.product.w,
        (t = this.product) == null ? void 0 : t.t
      )));
    },
    formatPrice(e = 0, t = !1) {
      if (!e)
        return t ? this.addCurrencySymbol("0.00") : "0.00";
      typeof e == "string" && (e = parseFloat(e));
      const n = e.toFixed(this.formatting.number_of_decimals).replace(".", this.formatting.decimal_separator);
      return t ? this.addCurrencySymbol(n) : n;
    },
    addCurrencySymbol(e) {
      switch (this.formatting.currency_position) {
        case "left":
          return `${this.formatting.currency_symbol}${e}`;
        case "right":
          return `${e}${this.formatting.currency_symbol}`;
        default:
          return `${this.formatting.currency_symbol}${e}`;
      }
    },
    formatExtrasKey(e) {
      return xm(_r(e), 100).replace("|", "_");
    },
    //map the banding data to ExtrasData
    getExtrasData(e) {
      if (!e) return null;
      const t = {
        labels: [],
        pricing: {}
      }, n = Object.values(e);
      for (const i of n)
        i != null && i.variations ? (t.labels.push(...Object.keys(i.options)), Object.values(i.variations).forEach((s) => {
          const { options: r } = s, o = Object.values(r).map((a) => this.formatExtrasKey(a)).join("|");
          t.pricing[o] = parseInt(s.price);
        })) : i != null && i.options && Object.values(i.options).forEach((s) => {
          t.pricing[this.formatExtrasKey(s)] = parseInt(i.price);
        });
      return t.labels.length || t.labels.push("type"), t;
    },
    //find the price of a banding option based on an array of options
    findExtrasPrice(e, t) {
      if (!Oo(this, ["extrasData", e])) return null;
      const n = Ge(this, ["extrasData", e]);
      if (!vs(n)) return null;
      const s = Object.values(n).map((r) => r != null && r.variations ? Object.values(r.variations) : r).flat().find((r) => {
        const o = Object.values(r.options);
        return o ? o.every((a, l) => a ? this.formatExtrasKey(a) === this.formatExtrasKey(t[l]) : !1) : !1;
      });
      return s != null && s.price && parseFloat(s.price) || null;
    },
    getTotalFinishPrice(e) {
      var n;
      let t = 0;
      if (typeof e == "object") {
        for (let [i, s] of Object.entries(e)) {
          typeof s == "string" && (s = parseFloat(s));
          const r = i.split("|"), o = this.findExtrasPrice("finish", r);
          if (o === null) continue;
          const l = Number(s) / 1e6 * parseFloat(o);
          t += l;
        }
        if ("min_finish_charge" in this.settings) {
          const i = parseFloat((n = this.settings) == null ? void 0 : n.min_finish_charge);
          if (i > 0 && t > 0 && t < i)
            return i;
        }
        return t;
      }
      return 0;
    },
    //get the total price of the banding based on the bandingLengthByType metadata
    getTotalBandingPrice(e) {
      var n;
      let t = 0;
      if (typeof e == "object") {
        for (let [i, s] of Object.entries(e)) {
          typeof s == "string" && (s = parseFloat(s));
          const r = i.split("|"), o = this.findExtrasPrice("banding", r);
          if (o === null) continue;
          const a = s / (this.settings.units === "fraction" ? 12 : 1e3) * parseFloat(o);
          t += a;
        }
        if ("min_banding_charge" in this.settings) {
          const i = parseFloat((n = this.settings) == null ? void 0 : n.min_banding_charge);
          if (i > 0 && t > 0 && t < i)
            return i;
        }
        return t;
      } else
        return 0;
    },
    getTotalMachiningPrice(e) {
      return (this.machiningPricing.holes ?? 0) * (e.metadata.numHoles ?? 0) + (this.machiningPricing.corners ?? 0) * (e.metadata.numCorners ?? 0);
    },
    reset() {
      this.el.quantity.value = 1, this.el.cart_button.disabled = !0, this.inputs["smartcut-cut-to-size-surcharge"].value = 0, this.el.banding_total_price && (this.el.banding_total_price.innerText = this.formatPrice(0)), this.el.machining_total_price && (this.el.machining_total_price.innerText = this.formatPrice(0)), this.el.cut_length_price && (this.el.cut_length_price.innerText = this.formatPrice(0)), this.el.per_part_price && (this.el.per_part_price.innerText = this.formatPrice(0));
      for (const e in this.inputs)
        this.inputs[e].value = null;
    },
    error(e) {
      console.error(`SmartCut - ${e}`);
    },
    isQuantityPricing() {
      var e;
      if (((e = window.smartcutConfig) == null ? void 0 : e.product_type) === "variable")
        return !1;
      switch (this.settings.pricing_strategy) {
        case "full_sheet":
        case "full_sheet_plus_cut_length":
        case "full_sheet_plus_num_parts":
          return !0;
      }
      return !1;
    },
    isExtraEnabled(e) {
      if (Oo(this, ["options", "enable", e]) && Ge(this, ["options", "enable", e]) === !1) return !1;
      const t = Ge(this, ["extrasData", e]);
      return !(!t || !Object.values(t).length);
    },
    isMachiningEnabled() {
      return this.settings.enable_machining === !0;
    },
    isSurchargeEnabled() {
      var e, t;
      return !(((e = this.settings) == null ? void 0 : e.surcharge_type) === "none" || !((t = this == null ? void 0 : this.settings) != null && t.surcharge) || this.settings.surcharge === "0.00");
    },
    isPricingTableNeeded() {
      return !!(this.settings.pricing_strategy === "full_sheet_plus_cut_length" || this.settings.pricing_strategy === "full_sheet_plus_num_parts" || this.isSurchargeEnabled() || this.isExtraEnabled("banding") || this.isExtraEnabled("finish") || this.isMachiningEnabled());
    },
    /**
           * @param {WC_Product_Variation} variation
           * @returns {string[] | string}
           */
    getSizes(e) {
      var n, i;
      let t = null;
      return e && (t = (n = e == null ? void 0 : e.attributes) == null ? void 0 : n.attribute_size), t || (t = (i = this.product) == null ? void 0 : i.size), t;
    },
    isFullSheetSize(e) {
      return /\d+x\d+/.test(e);
    },
    cacheInputFields() {
      window.smartcutConfig.input_fields.forEach((e) => {
        const t = e.replaceAll("_", "-");
        this.inputs[t] = document.getElementById(t);
      });
    },
    result(e) {
      var o, a, l, u, c, f, h, d, p, w, E, v, k;
      this.reset();
      const t = this.isQuantityPricing();
      let n = t ? e.metadata.totalStockCost / e.metadata.totalUsedStock : 0;
      if (this.log(["result event received", e]), !(e != null && e.jobId)) return;
      switch (this.product.multiple_sizes && this.log(["result event received for multiple sizes"]), this.settings.pricing_strategy) {
        case "full_sheet":
          this.log(["calculating cost by full sheet"]), t ? this.el.quantity.value = e.metadata.totalUsedStock : this.el.quantity.value = 1, this.el.cart_button.disabled = !1;
          break;
        case "part_area":
          {
            this.log([
              "calculating cost by part area in meters / sq feet"
            ]);
            const g = this.settings.units === "fraction" ? e.metadata.totalPartArea / 144 : e.metadata.totalPartArea / 1e6;
            this.log([
              `part area in square ${this.settings.units === "fraction" ? "feet" : "meters"}`,
              g
            ]), t && (this.el.quantity.value = g.toFixed(2)), this.el.cart_button.disabled = !1;
          }
          break;
        case "cut_length":
          {
            this.log([
              "calculating cost by cut length in feet / meters"
            ]);
            const g = e.metadata.totalCutLength / (this.settings.units === "fraction" ? 12 : 1e3);
            this.el.quantity.value = g.toFixed(2), this.el.cart_button.disabled = !1;
          }
          break;
        case "full_sheet_plus_cut_length":
          {
            this.log([
              "calculating cost by full sheet plus cut length"
            ]), t ? (this.el.quantity.style.display = "inline-block", this.el.quantity.value = e.metadata.totalUsedStock) : (this.el.quantity.value = 1, this.el.quantity.style.display = "none");
            const b = e.metadata.totalCutLength / (this.settings.units === "fraction" ? 12 : 1e3) * this.settings.cut_length_price;
            this.el.cut_length_price && (this.el.cut_length_price.innerText = this.formatPrice(b)), this.inputs["smartcut-cut-length-price"].value = b, n += b, this.el.cart_button.disabled = !1;
          }
          break;
        case "full_sheet_plus_num_parts":
          {
            this.log([
              "calculating cost by full sheet plus number of parts"
            ]), t ? (this.el.quantity.style.display = "inline-block", this.el.quantity.value = e.metadata.totalUsedStock) : (this.el.quantity.value = 1, this.el.quantity.style.display = "none");
            const g = e.metadata.totalPartsProduced * this.settings.per_part_price;
            this.el.per_part_price && (this.el.per_part_price.innerText = this.formatPrice(g)), this.inputs["smartcut-per-part-price"].value = g, n += g, this.el.cart_button.disabled = !1;
          }
          break;
      }
      if (!t) {
        if (!e.metadata.totalStockCost)
          return this.error("Total stock cost not returned for a multiple size product");
        const g = parseFloat(e.metadata.totalStockCost);
        this.log(["total price", g]), document.getElementById("smartcut-custom-price").value = g.toString(), n += g;
      }
      if (this.isExtraEnabled("banding")) {
        if (!((o = e == null ? void 0 : e.metadata) != null && o.bandingLengthByType)) return;
        const g = this.getTotalBandingPrice(e.metadata.bandingLengthByType);
        (a = this.inputs) != null && a["smartcut-banding-price"] && (this.inputs["smartcut-banding-price"].value = g), this.el.banding_total_price && (this.el.banding_total_price.innerText = this.formatPrice(g)), n += g;
      }
      if (this.isExtraEnabled("finish")) {
        if (!((l = e == null ? void 0 : e.metadata) != null && l.bandingLengthByType)) return;
        const g = this.getTotalFinishPrice(e.metadata.finishAreaByType);
        (u = this.inputs) != null && u["smartcut-finish-price"] && (this.inputs["smartcut-finish-price"].value = g), this.el.finish_total_price && (this.el.finish_total_price.innerText = this.formatPrice(g)), n += g;
      }
      if (this.isMachiningEnabled()) {
        const g = this.getTotalMachiningPrice(e);
        (c = this.inputs) != null && c["smartcut-machining-price"] && (this.inputs["smartcut-machining-price"].value = g), this.el.machining_total_price && (this.el.machining_total_price.innerText = this.formatPrice(g)), n += g;
      }
      if (this.isSurchargeEnabled() && (f = this.settings) != null && f.surcharge) {
        let g = 0;
        ((h = this.settings) == null ? void 0 : h.surcharge_type) === "per_sheet" ? g = parseFloat((d = this.settings) == null ? void 0 : d.surcharge) * parseFloat(e.metadata.totalUsedStock) : g = parseFloat((p = this.settings) == null ? void 0 : p.surcharge), (w = this.inputs) != null && w["smartcut-cut-to-size-surcharge"] && (this.inputs["smartcut-cut-to-size-surcharge"].value = g), this.el.surcharge_price && (this.el.surcharge_price.innerText = this.formatPrice(g)), this.log(["added surcharge", g]), n += g;
      }
      const i = document.querySelector(".woocommerce-variation-price .smartcut-price-selector");
      i && (i.innerText = this.formatPrice(n));
      const s = {
        "smartcut-job-id": null,
        "smartcut-dimensions": null,
        "smartcut-total-cut-length": "totalCutLength",
        "smartcut-part-area": "totalPartArea",
        "smartcut-total-cuts": "totalCuts",
        "smartcut-total-parts": "totalPartsProduced",
        "smartcut-machining": "hasMachining"
      };
      if ((E = this.inputs) != null && E["smartcut-job-id"] && (this.inputs["smartcut-job-id"].value = e == null ? void 0 : e.jobId), (v = this.inputs) != null && v["smartcut-dimensions"]) {
        const g = e == null ? void 0 : e.parts.map((b) => `${b == null ? void 0 : b.l}x${b == null ? void 0 : b.w} [${b == null ? void 0 : b.q}]`).join(", ");
        this.inputs["smartcut-dimensions"].value = g;
      }
      if ((k = this.inputs) != null && k["smartcut-stock-summary"]) {
        let g = "";
        g = e.stock.map((b) => `${b == null ? void 0 : b.l}x${b == null ? void 0 : b.w}${b != null && b.t ? "x" + b.t : ""} [${b == null ? void 0 : b.q}]`).join(", "), this.inputs["smartcut-stock-summary"].value = g;
      }
      Object.entries(s).filter(([, g]) => g !== null).map(([g]) => g).forEach((g) => {
        var b;
        (b = this.inputs) != null && b[g] && (this.inputs[g].value = e.metadata[s[g]]);
      });
    }
  }
}, cN = {
  key: 0,
  id: "debug"
};
function uN(e, t, n, i, s, r) {
  const o = Qe("ObjectViewer"), a = Qe("CheckoutCalculator");
  return J(), te(Oe, null, [
    s.env === "development" ? (J(), te("div", cN, [
      t[0] || (t[0] = ie("div", null, "WP - developer information", -1)),
      me(o, {
        data: [s.product],
        paths: ["product"]
      }, null, 8, ["data"]),
      me(o, {
        data: [s.variations],
        paths: ["variations"]
      }, null, 8, ["data"]),
      me(o, {
        data: [s.extrasData],
        paths: ["extrasData"]
      }, null, 8, ["data"])
    ])) : fe("", !0),
    me(a, {
      ref: "calculator",
      debug: s.debug,
      stock: s.stock,
      units: r.smartcutConfigUnits,
      onLog: r.log,
      onError: r.error,
      onDebug: r.toggleDebug,
      onResult: r.result
    }, null, 8, ["debug", "stock", "units", "onLog", "onError", "onDebug", "onResult"])
  ], 64);
}
const fN = /* @__PURE__ */ nn(lN, [["render", uN]]), hN = /* @__PURE__ */ mr(() => import("./Vanilla-C1W5vLfD.js")), dN = /* @__PURE__ */ En({
  name: "Launch",
  components: {
    Wordpress: fN,
    Vanilla: hN
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
  }
  //these will be exposed on window.smartcutCheckout
  /* methods: {
  	test()
  	{
  		console.log( 'test' );
  	}
  } */
});
function pN(e, t, n, i, s, r) {
  return J(), at(W0(e.currentComponent), { ref: "checkout" }, null, 512);
}
const gN = /* @__PURE__ */ nn(dN, [["render", pN]]), Fd = () => {
};
let uf = {}, sb = {}, rb = null, ob = {
  mark: Fd,
  measure: Fd
};
try {
  typeof window < "u" && (uf = window), typeof document < "u" && (sb = document), typeof MutationObserver < "u" && (rb = MutationObserver), typeof performance < "u" && (ob = performance);
} catch {
}
const {
  userAgent: $d = ""
} = uf.navigator || {}, ri = uf, Le = sb, Bd = rb, Vr = ob;
ri.document;
const Vn = !!Le.documentElement && !!Le.head && typeof Le.addEventListener == "function" && typeof Le.createElement == "function", ab = ~$d.indexOf("MSIE") || ~$d.indexOf("Trident/");
var De = "classic", lb = "duotone", Lt = "sharp", Dt = "sharp-duotone", mN = [De, lb, Lt, Dt], yN = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds"
  }
}, jd = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, bN = ["kit"], wN = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/, vN = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, _N = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
}, xN = {
  "Font Awesome 6 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 6 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 6 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 6 Duotone": {
    900: "fad"
  },
  "Font Awesome 6 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 6 Sharp Duotone": {
    900: "fasds"
  }
}, SN = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds"
  }
}, kN = {
  classic: ["fas", "far", "fal", "fat"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds"]
}, EN = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid"
  }
}, CN = {
  classic: {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    duotone: "fad",
    brands: "fab"
  },
  sharp: {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
  },
  "sharp-duotone": {
    solid: "fasds"
  }
}, cb = {
  classic: {
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
    "fa-brands": "brands"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid"
  }
}, TN = ["solid", "regular", "light", "thin", "duotone", "brands"], ub = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], AN = ub.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Ws = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, ON = [...Object.keys(kN), ...TN, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Ws.GROUP, Ws.SWAP_OPACITY, Ws.PRIMARY, Ws.SECONDARY].concat(ub.map((e) => "".concat(e, "x"))).concat(AN.map((e) => "w-".concat(e))), PN = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, NN = {
  kit: {
    "fa-kit": "fak"
  },
  "kit-duotone": {
    "fa-kit-duotone": "fakd"
  }
}, IN = {
  kit: {
    fak: "fa-kit"
  },
  "kit-duotone": {
    fakd: "fa-kit-duotone"
  }
}, qd = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
};
const qn = "___FONT_AWESOME___", fc = 16, fb = "fa", hb = "svg-inline--fa", $i = "data-fa-i2svg", hc = "data-fa-pseudo-element", MN = "data-fa-pseudo-element-pending", ff = "data-prefix", hf = "data-icon", Ud = "fontawesome-i2svg", LN = "async", DN = ["HTML", "HEAD", "STYLE", "SCRIPT"], db = (() => {
  try {
    return !0;
  } catch {
    return !1;
  }
})(), pb = [De, Lt, Dt];
function Ar(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[De];
    }
  });
}
const gb = {
  ...cb
};
gb[De] = {
  ...cb[De],
  ...jd.kit,
  ...jd["kit-duotone"]
};
const Ai = Ar(gb), dc = {
  ...CN
};
dc[De] = {
  ...dc[De],
  ...qd.kit,
  ...qd["kit-duotone"]
};
const hr = Ar(dc), pc = {
  ...EN
};
pc[De] = {
  ...pc[De],
  ...IN.kit
};
const Oi = Ar(pc), gc = {
  ...SN
};
gc[De] = {
  ...gc[De],
  ...NN.kit
};
const RN = Ar(gc), FN = wN, mb = "fa-layers-text", $N = vN, BN = {
  ...yN
};
Ar(BN);
const jN = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], sl = Ws, Ss = /* @__PURE__ */ new Set();
Object.keys(hr[De]).map(Ss.add.bind(Ss));
Object.keys(hr[Lt]).map(Ss.add.bind(Ss));
Object.keys(hr[Dt]).map(Ss.add.bind(Ss));
const qN = [...bN, ...ON], tr = ri.FontAwesomeConfig || {};
function UN(e) {
  var t = Le.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function WN(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
Le && typeof Le.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, i] = t;
  const s = WN(UN(n));
  s != null && (tr[i] = s);
});
const yb = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: fb,
  replacementClass: hb,
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
const ks = {
  ...yb,
  ...tr
};
ks.autoReplaceSvg || (ks.observeMutations = !1);
const ee = {};
Object.keys(yb).forEach((e) => {
  Object.defineProperty(ee, e, {
    enumerable: !0,
    set: function(t) {
      ks[e] = t, nr.forEach((n) => n(ee));
    },
    get: function() {
      return ks[e];
    }
  });
});
Object.defineProperty(ee, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    ks.cssPrefix = e, nr.forEach((t) => t(ee));
  },
  get: function() {
    return ks.cssPrefix;
  }
});
ri.FontAwesomeConfig = ee;
const nr = [];
function zN(e) {
  return nr.push(e), () => {
    nr.splice(nr.indexOf(e), 1);
  };
}
const Yn = fc, mn = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function VN(e) {
  if (!e || !Vn)
    return;
  const t = Le.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = Le.head.childNodes;
  let i = null;
  for (let s = n.length - 1; s > -1; s--) {
    const r = n[s], o = (r.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(o) > -1 && (i = r);
  }
  return Le.head.insertBefore(t, i), e;
}
const GN = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function dr() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += GN[Math.random() * 62 | 0];
  return t;
}
function Os(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function df(e) {
  return e.classList ? Os(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function bb(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function HN(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(bb(e[n]), '" '), "").trim();
}
function ka(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function pf(e) {
  return e.size !== mn.size || e.x !== mn.x || e.y !== mn.y || e.rotate !== mn.rotate || e.flipX || e.flipY;
}
function KN(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: i
  } = e;
  const s = {
    transform: "translate(".concat(n / 2, " 256)")
  }, r = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), a = "rotate(".concat(t.rotate, " 0 0)"), l = {
    transform: "".concat(r, " ").concat(o, " ").concat(a)
  }, u = {
    transform: "translate(".concat(i / 2 * -1, " -256)")
  };
  return {
    outer: s,
    inner: l,
    path: u
  };
}
function YN(e) {
  let {
    transform: t,
    width: n = fc,
    height: i = fc,
    startCentered: s = !1
  } = e, r = "";
  return s && ab ? r += "translate(".concat(t.x / Yn - n / 2, "em, ").concat(t.y / Yn - i / 2, "em) ") : s ? r += "translate(calc(-50% + ".concat(t.x / Yn, "em), calc(-50% + ").concat(t.y / Yn, "em)) ") : r += "translate(".concat(t.x / Yn, "em, ").concat(t.y / Yn, "em) "), r += "scale(".concat(t.size / Yn * (t.flipX ? -1 : 1), ", ").concat(t.size / Yn * (t.flipY ? -1 : 1), ") "), r += "rotate(".concat(t.rotate, "deg) "), r;
}
var XN = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
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
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
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
  left: calc(-1 * var(--fa-li-width, 2em));
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
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
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
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
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
function wb() {
  const e = fb, t = hb, n = ee.cssPrefix, i = ee.replacementClass;
  let s = XN;
  if (n !== e || i !== t) {
    const r = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), a = new RegExp("\\.".concat(t), "g");
    s = s.replace(r, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(a, ".".concat(i));
  }
  return s;
}
let Wd = !1;
function rl() {
  ee.autoAddCss && !Wd && (VN(wb()), Wd = !0);
}
var JN = {
  mixout() {
    return {
      dom: {
        css: wb,
        insertCss: rl
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        rl();
      },
      beforeI2svg() {
        rl();
      }
    };
  }
};
const Un = ri || {};
Un[qn] || (Un[qn] = {});
Un[qn].styles || (Un[qn].styles = {});
Un[qn].hooks || (Un[qn].hooks = {});
Un[qn].shims || (Un[qn].shims = []);
var yn = Un[qn];
const vb = [], _b = function() {
  Le.removeEventListener("DOMContentLoaded", _b), Wo = 1, vb.map((e) => e());
};
let Wo = !1;
Vn && (Wo = (Le.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Le.readyState), Wo || Le.addEventListener("DOMContentLoaded", _b));
function QN(e) {
  Vn && (Wo ? setTimeout(e, 0) : vb.push(e));
}
function Or(e) {
  const {
    tag: t,
    attributes: n = {},
    children: i = []
  } = e;
  return typeof e == "string" ? bb(e) : "<".concat(t, " ").concat(HN(n), ">").concat(i.map(Or).join(""), "</").concat(t, ">");
}
function zd(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var ol = function(t, n, i, s) {
  var r = Object.keys(t), o = r.length, a = n, l, u, c;
  for (i === void 0 ? (l = 1, c = t[r[0]]) : (l = 0, c = i); l < o; l++)
    u = r[l], c = a(c, t[u], u, t);
  return c;
};
function ZN(e) {
  const t = [];
  let n = 0;
  const i = e.length;
  for (; n < i; ) {
    const s = e.charCodeAt(n++);
    if (s >= 55296 && s <= 56319 && n < i) {
      const r = e.charCodeAt(n++);
      (r & 64512) == 56320 ? t.push(((s & 1023) << 10) + (r & 1023) + 65536) : (t.push(s), n--);
    } else
      t.push(s);
  }
  return t;
}
function mc(e) {
  const t = ZN(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function eI(e, t) {
  const n = e.length;
  let i = e.charCodeAt(t), s;
  return i >= 55296 && i <= 56319 && n > t + 1 && (s = e.charCodeAt(t + 1), s >= 56320 && s <= 57343) ? (i - 55296) * 1024 + s - 56320 + 65536 : i;
}
function Vd(e) {
  return Object.keys(e).reduce((t, n) => {
    const i = e[n];
    return !!i.icon ? t[i.iconName] = i.icon : t[n] = i, t;
  }, {});
}
function yc(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: i = !1
  } = n, s = Vd(t);
  typeof yn.hooks.addPack == "function" && !i ? yn.hooks.addPack(e, Vd(t)) : yn.styles[e] = {
    ...yn.styles[e] || {},
    ...s
  }, e === "fas" && yc("fa", t);
}
const {
  styles: _i,
  shims: tI
} = yn, nI = {
  [De]: Object.values(Oi[De]),
  [Lt]: Object.values(Oi[Lt]),
  [Dt]: Object.values(Oi[Dt])
};
let gf = null, xb = {}, Sb = {}, kb = {}, Eb = {}, Cb = {};
const iI = {
  [De]: Object.keys(Ai[De]),
  [Lt]: Object.keys(Ai[Lt]),
  [Dt]: Object.keys(Ai[Dt])
};
function sI(e) {
  return ~qN.indexOf(e);
}
function rI(e, t) {
  const n = t.split("-"), i = n[0], s = n.slice(1).join("-");
  return i === e && s !== "" && !sI(s) ? s : null;
}
const Tb = () => {
  const e = (i) => ol(_i, (s, r, o) => (s[o] = ol(r, i, {}), s), {});
  xb = e((i, s, r) => (s[3] && (i[s[3]] = r), s[2] && s[2].filter((a) => typeof a == "number").forEach((a) => {
    i[a.toString(16)] = r;
  }), i)), Sb = e((i, s, r) => (i[r] = r, s[2] && s[2].filter((a) => typeof a == "string").forEach((a) => {
    i[a] = r;
  }), i)), Cb = e((i, s, r) => {
    const o = s[2];
    return i[r] = r, o.forEach((a) => {
      i[a] = r;
    }), i;
  });
  const t = "far" in _i || ee.autoFetchSvg, n = ol(tI, (i, s) => {
    const r = s[0];
    let o = s[1];
    const a = s[2];
    return o === "far" && !t && (o = "fas"), typeof r == "string" && (i.names[r] = {
      prefix: o,
      iconName: a
    }), typeof r == "number" && (i.unicodes[r.toString(16)] = {
      prefix: o,
      iconName: a
    }), i;
  }, {
    names: {},
    unicodes: {}
  });
  kb = n.names, Eb = n.unicodes, gf = Ea(ee.styleDefault, {
    family: ee.familyDefault
  });
};
zN((e) => {
  gf = Ea(e.styleDefault, {
    family: ee.familyDefault
  });
});
Tb();
function mf(e, t) {
  return (xb[e] || {})[t];
}
function oI(e, t) {
  return (Sb[e] || {})[t];
}
function ei(e, t) {
  return (Cb[e] || {})[t];
}
function Ab(e) {
  return kb[e] || {
    prefix: null,
    iconName: null
  };
}
function aI(e) {
  const t = Eb[e], n = mf("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function oi() {
  return gf;
}
const yf = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Ea(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = De
  } = t, i = Ai[n][e], s = hr[n][e] || hr[n][i], r = e in yn.styles ? e : null;
  return s || r || null;
}
const lI = {
  [De]: Object.keys(Oi[De]),
  [Lt]: Object.keys(Oi[Lt]),
  [Dt]: Object.keys(Oi[Dt])
};
function Ca(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t, i = {
    [De]: "".concat(ee.cssPrefix, "-").concat(De),
    [Lt]: "".concat(ee.cssPrefix, "-").concat(Lt),
    [Dt]: "".concat(ee.cssPrefix, "-").concat(Dt)
  };
  let s = null, r = De;
  const o = mN.filter((l) => l !== lb);
  o.forEach((l) => {
    (e.includes(i[l]) || e.some((u) => lI[l].includes(u))) && (r = l);
  });
  const a = e.reduce((l, u) => {
    const c = rI(ee.cssPrefix, u);
    if (_i[u] ? (u = nI[r].includes(u) ? RN[r][u] : u, s = u, l.prefix = u) : iI[r].indexOf(u) > -1 ? (s = u, l.prefix = Ea(u, {
      family: r
    })) : c ? l.iconName = c : u !== ee.replacementClass && !o.some((f) => u === i[f]) && l.rest.push(u), !n && l.prefix && l.iconName) {
      const f = s === "fa" ? Ab(l.iconName) : {}, h = ei(l.prefix, l.iconName);
      f.prefix && (s = null), l.iconName = f.iconName || h || l.iconName, l.prefix = f.prefix || l.prefix, l.prefix === "far" && !_i.far && _i.fas && !ee.autoFetchSvg && (l.prefix = "fas");
    }
    return l;
  }, yf());
  return (e.includes("fa-brands") || e.includes("fab")) && (a.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (a.prefix = "fad"), !a.prefix && r === Lt && (_i.fass || ee.autoFetchSvg) && (a.prefix = "fass", a.iconName = ei(a.prefix, a.iconName) || a.iconName), !a.prefix && r === Dt && (_i.fasds || ee.autoFetchSvg) && (a.prefix = "fasds", a.iconName = ei(a.prefix, a.iconName) || a.iconName), (a.prefix === "fa" || s === "fa") && (a.prefix = oi() || "fas"), a;
}
class cI {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    const s = n.reduce(this._pullDefinitions, {});
    Object.keys(s).forEach((r) => {
      this.definitions[r] = {
        ...this.definitions[r] || {},
        ...s[r]
      }, yc(r, s[r]);
      const o = Oi[De][r];
      o && yc(o, s[r]), Tb();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, n) {
    const i = n.prefix && n.iconName && n.icon ? {
      0: n
    } : n;
    return Object.keys(i).map((s) => {
      const {
        prefix: r,
        iconName: o,
        icon: a
      } = i[s], l = a[2];
      t[r] || (t[r] = {}), l.length > 0 && l.forEach((u) => {
        typeof u == "string" && (t[r][u] = a);
      }), t[r][o] = a;
    }), t;
  }
}
let Gd = [], ts = {};
const fs = {}, uI = Object.keys(fs);
function fI(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return Gd = e, ts = {}, Object.keys(fs).forEach((i) => {
    uI.indexOf(i) === -1 && delete fs[i];
  }), Gd.forEach((i) => {
    const s = i.mixout ? i.mixout() : {};
    if (Object.keys(s).forEach((r) => {
      typeof s[r] == "function" && (n[r] = s[r]), typeof s[r] == "object" && Object.keys(s[r]).forEach((o) => {
        n[r] || (n[r] = {}), n[r][o] = s[r][o];
      });
    }), i.hooks) {
      const r = i.hooks();
      Object.keys(r).forEach((o) => {
        ts[o] || (ts[o] = []), ts[o].push(r[o]);
      });
    }
    i.provides && i.provides(fs);
  }), n;
}
function bc(e, t) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return (ts[e] || []).forEach((o) => {
    t = o.apply(null, [t, ...i]);
  }), t;
}
function Bi(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    n[i - 1] = arguments[i];
  (ts[e] || []).forEach((r) => {
    r.apply(null, n);
  });
}
function ai() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return fs[e] ? fs[e].apply(null, t) : void 0;
}
function wc(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || oi();
  if (t)
    return t = ei(n, t) || t, zd(Ob.definitions, n, t) || zd(yn.styles, n, t);
}
const Ob = new cI(), hI = () => {
  ee.autoReplaceSvg = !1, ee.observeMutations = !1, Bi("noAuto");
}, dI = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Vn ? (Bi("beforeI2svg", e), ai("pseudoElements2svg", e), ai("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    ee.autoReplaceSvg === !1 && (ee.autoReplaceSvg = !0), ee.observeMutations = !0, QN(() => {
      gI({
        autoReplaceSvgRoot: t
      }), Bi("watch", e);
    });
  }
}, pI = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: ei(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Ea(e[0]);
      return {
        prefix: n,
        iconName: ei(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(ee.cssPrefix, "-")) > -1 || e.match(FN))) {
      const t = Ca(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || oi(),
        iconName: ei(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = oi();
      return {
        prefix: t,
        iconName: ei(t, e) || e
      };
    }
  }
}, Rt = {
  noAuto: hI,
  config: ee,
  dom: dI,
  parse: pI,
  library: Ob,
  findIconDefinition: wc,
  toHtml: Or
}, gI = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = Le
  } = e;
  (Object.keys(yn.styles).length > 0 || ee.autoFetchSvg) && Vn && ee.autoReplaceSvg && Rt.dom.i2svg({
    node: t
  });
};
function Ta(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => Or(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!Vn) return;
      const n = Le.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function mI(e) {
  let {
    children: t,
    main: n,
    mask: i,
    attributes: s,
    styles: r,
    transform: o
  } = e;
  if (pf(o) && n.found && !i.found) {
    const {
      width: a,
      height: l
    } = n, u = {
      x: a / l / 2,
      y: 0.5
    };
    s.style = ka({
      ...r,
      "transform-origin": "".concat(u.x + o.x / 16, "em ").concat(u.y + o.y / 16, "em")
    });
  }
  return [{
    tag: "svg",
    attributes: s,
    children: t
  }];
}
function yI(e) {
  let {
    prefix: t,
    iconName: n,
    children: i,
    attributes: s,
    symbol: r
  } = e;
  const o = r === !0 ? "".concat(t, "-").concat(ee.cssPrefix, "-").concat(n) : r;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: {
        ...s,
        id: o
      },
      children: i
    }]
  }];
}
function bf(e) {
  const {
    icons: {
      main: t,
      mask: n
    },
    prefix: i,
    iconName: s,
    transform: r,
    symbol: o,
    title: a,
    maskId: l,
    titleId: u,
    extra: c,
    watchable: f = !1
  } = e, {
    width: h,
    height: d
  } = n.found ? n : t, p = i === "fak", w = [ee.replacementClass, s ? "".concat(ee.cssPrefix, "-").concat(s) : ""].filter((A) => c.classes.indexOf(A) === -1).filter((A) => A !== "" || !!A).concat(c.classes).join(" ");
  let E = {
    children: [],
    attributes: {
      ...c.attributes,
      "data-prefix": i,
      "data-icon": s,
      class: w,
      role: c.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(h, " ").concat(d)
    }
  };
  const v = p && !~c.classes.indexOf("fa-fw") ? {
    width: "".concat(h / d * 16 * 0.0625, "em")
  } : {};
  f && (E.attributes[$i] = ""), a && (E.children.push({
    tag: "title",
    attributes: {
      id: E.attributes["aria-labelledby"] || "title-".concat(u || dr())
    },
    children: [a]
  }), delete E.attributes.title);
  const k = {
    ...E,
    prefix: i,
    iconName: s,
    main: t,
    mask: n,
    maskId: l,
    transform: r,
    symbol: o,
    styles: {
      ...v,
      ...c.styles
    }
  }, {
    children: g,
    attributes: b
  } = n.found && t.found ? ai("generateAbstractMask", k) || {
    children: [],
    attributes: {}
  } : ai("generateAbstractIcon", k) || {
    children: [],
    attributes: {}
  };
  return k.children = g, k.attributes = b, o ? yI(k) : mI(k);
}
function Hd(e) {
  const {
    content: t,
    width: n,
    height: i,
    transform: s,
    title: r,
    extra: o,
    watchable: a = !1
  } = e, l = {
    ...o.attributes,
    ...r ? {
      title: r
    } : {},
    class: o.classes.join(" ")
  };
  a && (l[$i] = "");
  const u = {
    ...o.styles
  };
  pf(s) && (u.transform = YN({
    transform: s,
    startCentered: !0,
    width: n,
    height: i
  }), u["-webkit-transform"] = u.transform);
  const c = ka(u);
  c.length > 0 && (l.style = c);
  const f = [];
  return f.push({
    tag: "span",
    attributes: l,
    children: [t]
  }), r && f.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [r]
  }), f;
}
function bI(e) {
  const {
    content: t,
    title: n,
    extra: i
  } = e, s = {
    ...i.attributes,
    ...n ? {
      title: n
    } : {},
    class: i.classes.join(" ")
  }, r = ka(i.styles);
  r.length > 0 && (s.style = r);
  const o = [];
  return o.push({
    tag: "span",
    attributes: s,
    children: [t]
  }), n && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), o;
}
const {
  styles: al
} = yn;
function vc(e) {
  const t = e[0], n = e[1], [i] = e.slice(4);
  let s = null;
  return Array.isArray(i) ? s = {
    tag: "g",
    attributes: {
      class: "".concat(ee.cssPrefix, "-").concat(sl.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(ee.cssPrefix, "-").concat(sl.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(ee.cssPrefix, "-").concat(sl.PRIMARY),
        fill: "currentColor",
        d: i[1]
      }
    }]
  } : s = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: i
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: s
  };
}
const wI = {
  found: !1,
  width: 512,
  height: 512
};
function vI(e, t) {
  !db && !ee.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function _c(e, t) {
  let n = t;
  return t === "fa" && ee.styleDefault !== null && (t = oi()), new Promise((i, s) => {
    if (n === "fa") {
      const r = Ab(e) || {};
      e = r.iconName || e, t = r.prefix || t;
    }
    if (e && t && al[t] && al[t][e]) {
      const r = al[t][e];
      return i(vc(r));
    }
    vI(e, t), i({
      ...wI,
      icon: ee.showMissingIcons && e ? ai("missingIconAbstract") || {} : {}
    });
  });
}
const Kd = () => {
}, xc = ee.measurePerformance && Vr && Vr.mark && Vr.measure ? Vr : {
  mark: Kd,
  measure: Kd
}, zs = 'FA "6.6.0"', _I = (e) => (xc.mark("".concat(zs, " ").concat(e, " begins")), () => Pb(e)), Pb = (e) => {
  xc.mark("".concat(zs, " ").concat(e, " ends")), xc.measure("".concat(zs, " ").concat(e), "".concat(zs, " ").concat(e, " begins"), "".concat(zs, " ").concat(e, " ends"));
};
var wf = {
  begin: _I,
  end: Pb
};
const so = () => {
};
function Yd(e) {
  return typeof (e.getAttribute ? e.getAttribute($i) : null) == "string";
}
function xI(e) {
  const t = e.getAttribute ? e.getAttribute(ff) : null, n = e.getAttribute ? e.getAttribute(hf) : null;
  return t && n;
}
function SI(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(ee.replacementClass);
}
function kI() {
  return ee.autoReplaceSvg === !0 ? ro.replace : ro[ee.autoReplaceSvg] || ro.replace;
}
function EI(e) {
  return Le.createElementNS("http://www.w3.org/2000/svg", e);
}
function CI(e) {
  return Le.createElement(e);
}
function Nb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? EI : CI
  } = t;
  if (typeof e == "string")
    return Le.createTextNode(e);
  const i = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(r) {
    i.setAttribute(r, e.attributes[r]);
  }), (e.children || []).forEach(function(r) {
    i.appendChild(Nb(r, {
      ceFn: n
    }));
  }), i;
}
function TI(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const ro = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(Nb(n), t);
      }), t.getAttribute($i) === null && ee.keepOriginalSource) {
        let n = Le.createComment(TI(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~df(t).indexOf(ee.replacementClass))
      return ro.replace(e);
    const i = new RegExp("".concat(ee.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const r = n[0].attributes.class.split(" ").reduce((o, a) => (a === ee.replacementClass || a.match(i) ? o.toSvg.push(a) : o.toNode.push(a), o), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = r.toSvg.join(" "), r.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", r.toNode.join(" "));
    }
    const s = n.map((r) => Or(r)).join(`
`);
    t.setAttribute($i, ""), t.innerHTML = s;
  }
};
function Xd(e) {
  e();
}
function Ib(e, t) {
  const n = typeof t == "function" ? t : so;
  if (e.length === 0)
    n();
  else {
    let i = Xd;
    ee.mutateApproach === LN && (i = ri.requestAnimationFrame || Xd), i(() => {
      const s = kI(), r = wf.begin("mutate");
      e.map(s), r(), n();
    });
  }
}
let vf = !1;
function Mb() {
  vf = !0;
}
function Sc() {
  vf = !1;
}
let zo = null;
function Jd(e) {
  if (!Bd || !ee.observeMutations)
    return;
  const {
    treeCallback: t = so,
    nodeCallback: n = so,
    pseudoElementsCallback: i = so,
    observeMutationsRoot: s = Le
  } = e;
  zo = new Bd((r) => {
    if (vf) return;
    const o = oi();
    Os(r).forEach((a) => {
      if (a.type === "childList" && a.addedNodes.length > 0 && !Yd(a.addedNodes[0]) && (ee.searchPseudoElements && i(a.target), t(a.target)), a.type === "attributes" && a.target.parentNode && ee.searchPseudoElements && i(a.target.parentNode), a.type === "attributes" && Yd(a.target) && ~jN.indexOf(a.attributeName))
        if (a.attributeName === "class" && xI(a.target)) {
          const {
            prefix: l,
            iconName: u
          } = Ca(df(a.target));
          a.target.setAttribute(ff, l || o), u && a.target.setAttribute(hf, u);
        } else SI(a.target) && n(a.target);
    });
  }), Vn && zo.observe(s, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function AI() {
  zo && zo.disconnect();
}
function OI(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((i, s) => {
    const r = s.split(":"), o = r[0], a = r.slice(1);
    return o && a.length > 0 && (i[o] = a.join(":").trim()), i;
  }, {})), n;
}
function PI(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), i = e.innerText !== void 0 ? e.innerText.trim() : "";
  let s = Ca(df(e));
  return s.prefix || (s.prefix = oi()), t && n && (s.prefix = t, s.iconName = n), s.iconName && s.prefix || (s.prefix && i.length > 0 && (s.iconName = oI(s.prefix, e.innerText) || mf(s.prefix, mc(e.innerText))), !s.iconName && ee.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (s.iconName = e.firstChild.data)), s;
}
function NI(e) {
  const t = Os(e.attributes).reduce((s, r) => (s.name !== "class" && s.name !== "style" && (s[r.name] = r.value), s), {}), n = e.getAttribute("title"), i = e.getAttribute("data-fa-title-id");
  return ee.autoA11y && (n ? t["aria-labelledby"] = "".concat(ee.replacementClass, "-title-").concat(i || dr()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function II() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: mn,
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
function Qd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: i,
    rest: s
  } = PI(e), r = NI(e), o = bc("parseNodeAttributes", {}, e);
  let a = t.styleParser ? OI(e) : [];
  return {
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: i,
    transform: mn,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: s,
      styles: a,
      attributes: r
    },
    ...o
  };
}
const {
  styles: MI
} = yn;
function Lb(e) {
  const t = ee.autoReplaceSvg === "nest" ? Qd(e, {
    styleParser: !1
  }) : Qd(e);
  return ~t.extra.classes.indexOf(mb) ? ai("generateLayersText", e, t) : ai("generateSvgReplacementMutation", e, t);
}
let kn = /* @__PURE__ */ new Set();
pb.map((e) => {
  kn.add("fa-".concat(e));
});
Object.keys(Ai[De]).map(kn.add.bind(kn));
Object.keys(Ai[Lt]).map(kn.add.bind(kn));
Object.keys(Ai[Dt]).map(kn.add.bind(kn));
kn = [...kn];
function Zd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Vn) return Promise.resolve();
  const n = Le.documentElement.classList, i = (c) => n.add("".concat(Ud, "-").concat(c)), s = (c) => n.remove("".concat(Ud, "-").concat(c)), r = ee.autoFetchSvg ? kn : pb.map((c) => "fa-".concat(c)).concat(Object.keys(MI));
  r.includes("fa") || r.push("fa");
  const o = [".".concat(mb, ":not([").concat($i, "])")].concat(r.map((c) => ".".concat(c, ":not([").concat($i, "])"))).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  let a = [];
  try {
    a = Os(e.querySelectorAll(o));
  } catch {
  }
  if (a.length > 0)
    i("pending"), s("complete");
  else
    return Promise.resolve();
  const l = wf.begin("onTree"), u = a.reduce((c, f) => {
    try {
      const h = Lb(f);
      h && c.push(h);
    } catch (h) {
      db || h.name === "MissingIcon" && console.error(h);
    }
    return c;
  }, []);
  return new Promise((c, f) => {
    Promise.all(u).then((h) => {
      Ib(h, () => {
        i("active"), i("complete"), s("pending"), typeof t == "function" && t(), l(), c();
      });
    }).catch((h) => {
      l(), f(h);
    });
  });
}
function LI(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Lb(e).then((n) => {
    n && Ib([n], t);
  });
}
function DI(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const i = (t || {}).icon ? t : wc(t || {});
    let {
      mask: s
    } = n;
    return s && (s = (s || {}).icon ? s : wc(s || {})), e(i, {
      ...n,
      mask: s
    });
  };
}
const RI = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = mn,
    symbol: i = !1,
    mask: s = null,
    maskId: r = null,
    title: o = null,
    titleId: a = null,
    classes: l = [],
    attributes: u = {},
    styles: c = {}
  } = t;
  if (!e) return;
  const {
    prefix: f,
    iconName: h,
    icon: d
  } = e;
  return Ta({
    type: "icon",
    ...e
  }, () => (Bi("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), ee.autoA11y && (o ? u["aria-labelledby"] = "".concat(ee.replacementClass, "-title-").concat(a || dr()) : (u["aria-hidden"] = "true", u.focusable = "false")), bf({
    icons: {
      main: vc(d),
      mask: s ? vc(s.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: f,
    iconName: h,
    transform: {
      ...mn,
      ...n
    },
    symbol: i,
    title: o,
    maskId: r,
    titleId: a,
    extra: {
      attributes: u,
      styles: c,
      classes: l
    }
  })));
};
var FI = {
  mixout() {
    return {
      icon: DI(RI)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = Zd, e.nodeCallback = LI, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = Le,
        callback: i = () => {
        }
      } = t;
      return Zd(n, i);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: i,
        title: s,
        titleId: r,
        prefix: o,
        transform: a,
        symbol: l,
        mask: u,
        maskId: c,
        extra: f
      } = n;
      return new Promise((h, d) => {
        Promise.all([_c(i, o), u.iconName ? _c(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((p) => {
          let [w, E] = p;
          h([t, bf({
            icons: {
              main: w,
              mask: E
            },
            prefix: o,
            iconName: i,
            transform: a,
            symbol: l,
            maskId: c,
            title: s,
            titleId: r,
            extra: f,
            watchable: !0
          })]);
        }).catch(d);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: i,
        main: s,
        transform: r,
        styles: o
      } = t;
      const a = ka(o);
      a.length > 0 && (i.style = a);
      let l;
      return pf(r) && (l = ai("generateAbstractTransformGrouping", {
        main: s,
        transform: r,
        containerWidth: s.width,
        iconWidth: s.width
      })), n.push(l || s.icon), {
        children: n,
        attributes: i
      };
    };
  }
}, $I = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return Ta({
          type: "layer"
        }, () => {
          Bi("beforeDOMElementCreation", {
            assembler: e,
            params: t
          });
          let i = [];
          return e((s) => {
            Array.isArray(s) ? s.map((r) => {
              i = i.concat(r.abstract);
            }) : i = i.concat(s.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(ee.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: i
          }];
        });
      }
    };
  }
}, BI = {
  mixout() {
    return {
      counter(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: n = null,
          classes: i = [],
          attributes: s = {},
          styles: r = {}
        } = t;
        return Ta({
          type: "counter",
          content: e
        }, () => (Bi("beforeDOMElementCreation", {
          content: e,
          params: t
        }), bI({
          content: e.toString(),
          title: n,
          extra: {
            attributes: s,
            styles: r,
            classes: ["".concat(ee.cssPrefix, "-layers-counter"), ...i]
          }
        })));
      }
    };
  }
}, jI = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = mn,
          title: i = null,
          classes: s = [],
          attributes: r = {},
          styles: o = {}
        } = t;
        return Ta({
          type: "text",
          content: e
        }, () => (Bi("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Hd({
          content: e,
          transform: {
            ...mn,
            ...n
          },
          title: i,
          extra: {
            attributes: r,
            styles: o,
            classes: ["".concat(ee.cssPrefix, "-layers-text"), ...s]
          }
        })));
      }
    };
  },
  provides(e) {
    e.generateLayersText = function(t, n) {
      const {
        title: i,
        transform: s,
        extra: r
      } = n;
      let o = null, a = null;
      if (ab) {
        const l = parseInt(getComputedStyle(t).fontSize, 10), u = t.getBoundingClientRect();
        o = u.width / l, a = u.height / l;
      }
      return ee.autoA11y && !i && (r.attributes["aria-hidden"] = "true"), Promise.resolve([t, Hd({
        content: t.innerHTML,
        width: o,
        height: a,
        transform: s,
        title: i,
        extra: r,
        watchable: !0
      })]);
    };
  }
};
const qI = new RegExp('"', "ug"), ep = [1105920, 1112319], tp = {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  },
  ...xN,
  ..._N,
  ...PN
}, kc = Object.keys(tp).reduce((e, t) => (e[t.toLowerCase()] = tp[t], e), {}), UI = Object.keys(kc).reduce((e, t) => {
  const n = kc[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function WI(e) {
  const t = e.replace(qI, ""), n = eI(t, 0), i = n >= ep[0] && n <= ep[1], s = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: mc(s ? t[0] : t),
    isSecondary: i || s
  };
}
function zI(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), i = parseInt(t), s = isNaN(i) ? "normal" : i;
  return (kc[n] || {})[s] || UI[n];
}
function np(e, t) {
  const n = "".concat(MN).concat(t.replace(":", "-"));
  return new Promise((i, s) => {
    if (e.getAttribute(n) !== null)
      return i();
    const o = Os(e.children).filter((h) => h.getAttribute(hc) === t)[0], a = ri.getComputedStyle(e, t), l = a.getPropertyValue("font-family"), u = l.match($N), c = a.getPropertyValue("font-weight"), f = a.getPropertyValue("content");
    if (o && !u)
      return e.removeChild(o), i();
    if (u && f !== "none" && f !== "") {
      const h = a.getPropertyValue("content");
      let d = zI(l, c);
      const {
        value: p,
        isSecondary: w
      } = WI(h), E = u[0].startsWith("FontAwesome");
      let v = mf(d, p), k = v;
      if (E) {
        const g = aI(p);
        g.iconName && g.prefix && (v = g.iconName, d = g.prefix);
      }
      if (v && !w && (!o || o.getAttribute(ff) !== d || o.getAttribute(hf) !== k)) {
        e.setAttribute(n, k), o && e.removeChild(o);
        const g = II(), {
          extra: b
        } = g;
        b.attributes[hc] = t, _c(v, d).then((A) => {
          const N = bf({
            ...g,
            icons: {
              main: A,
              mask: yf()
            },
            prefix: d,
            iconName: k,
            extra: b,
            watchable: !0
          }), L = Le.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(L, e.firstChild) : e.appendChild(L), L.outerHTML = N.map((B) => Or(B)).join(`
`), e.removeAttribute(n), i();
        }).catch(s);
      } else
        i();
    } else
      i();
  });
}
function VI(e) {
  return Promise.all([np(e, "::before"), np(e, "::after")]);
}
function GI(e) {
  return e.parentNode !== document.head && !~DN.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(hc) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function ip(e) {
  if (Vn)
    return new Promise((t, n) => {
      const i = Os(e.querySelectorAll("*")).filter(GI).map(VI), s = wf.begin("searchPseudoElements");
      Mb(), Promise.all(i).then(() => {
        s(), Sc(), t();
      }).catch(() => {
        s(), Sc(), n();
      });
    });
}
var HI = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = ip, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = Le
      } = t;
      ee.searchPseudoElements && ip(n);
    };
  }
};
let sp = !1;
var KI = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Mb(), sp = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        Jd(bc("mutationObserverCallbacks", {}));
      },
      noAuto() {
        AI();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        sp ? Sc() : Jd(bc("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const rp = (e) => {
  let t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce((n, i) => {
    const s = i.toLowerCase().split("-"), r = s[0];
    let o = s.slice(1).join("-");
    if (r && o === "h")
      return n.flipX = !0, n;
    if (r && o === "v")
      return n.flipY = !0, n;
    if (o = parseFloat(o), isNaN(o))
      return n;
    switch (r) {
      case "grow":
        n.size = n.size + o;
        break;
      case "shrink":
        n.size = n.size - o;
        break;
      case "left":
        n.x = n.x - o;
        break;
      case "right":
        n.x = n.x + o;
        break;
      case "up":
        n.y = n.y - o;
        break;
      case "down":
        n.y = n.y + o;
        break;
      case "rotate":
        n.rotate = n.rotate + o;
        break;
    }
    return n;
  }, t);
};
var YI = {
  mixout() {
    return {
      parse: {
        transform: (e) => rp(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = rp(n)), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function(t) {
      let {
        main: n,
        transform: i,
        containerWidth: s,
        iconWidth: r
      } = t;
      const o = {
        transform: "translate(".concat(s / 2, " 256)")
      }, a = "translate(".concat(i.x * 32, ", ").concat(i.y * 32, ") "), l = "scale(".concat(i.size / 16 * (i.flipX ? -1 : 1), ", ").concat(i.size / 16 * (i.flipY ? -1 : 1), ") "), u = "rotate(".concat(i.rotate, " 0 0)"), c = {
        transform: "".concat(a, " ").concat(l, " ").concat(u)
      }, f = {
        transform: "translate(".concat(r / 2 * -1, " -256)")
      }, h = {
        outer: o,
        inner: c,
        path: f
      };
      return {
        tag: "g",
        attributes: {
          ...h.outer
        },
        children: [{
          tag: "g",
          attributes: {
            ...h.inner
          },
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: {
              ...n.icon.attributes,
              ...h.path
            }
          }]
        }]
      };
    };
  }
};
const ll = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function op(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function XI(e) {
  return e.tag === "g" ? e.children : [e];
}
var JI = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), i = n ? Ca(n.split(" ").map((s) => s.trim())) : yf();
        return i.prefix || (i.prefix = oi()), e.mask = i, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(t) {
      let {
        children: n,
        attributes: i,
        main: s,
        mask: r,
        maskId: o,
        transform: a
      } = t;
      const {
        width: l,
        icon: u
      } = s, {
        width: c,
        icon: f
      } = r, h = KN({
        transform: a,
        containerWidth: c,
        iconWidth: l
      }), d = {
        tag: "rect",
        attributes: {
          ...ll,
          fill: "white"
        }
      }, p = u.children ? {
        children: u.children.map(op)
      } : {}, w = {
        tag: "g",
        attributes: {
          ...h.inner
        },
        children: [op({
          tag: u.tag,
          attributes: {
            ...u.attributes,
            ...h.path
          },
          ...p
        })]
      }, E = {
        tag: "g",
        attributes: {
          ...h.outer
        },
        children: [w]
      }, v = "mask-".concat(o || dr()), k = "clip-".concat(o || dr()), g = {
        tag: "mask",
        attributes: {
          ...ll,
          id: v,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        },
        children: [d, E]
      }, b = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: k
          },
          children: XI(f)
        }, g]
      };
      return n.push(b, {
        tag: "rect",
        attributes: {
          fill: "currentColor",
          "clip-path": "url(#".concat(k, ")"),
          mask: "url(#".concat(v, ")"),
          ...ll
        }
      }), {
        children: n,
        attributes: i
      };
    };
  }
}, QI = {
  provides(e) {
    let t = !1;
    ri.matchMedia && (t = ri.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], i = {
        fill: "currentColor"
      }, s = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: {
          ...i,
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        }
      });
      const r = {
        ...s,
        attributeName: "opacity"
      }, o = {
        tag: "circle",
        attributes: {
          ...i,
          cx: "256",
          cy: "364",
          r: "28"
        },
        children: []
      };
      return t || o.children.push({
        tag: "animate",
        attributes: {
          ...s,
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        }
      }, {
        tag: "animate",
        attributes: {
          ...r,
          values: "1;0;1;1;0;1;"
        }
      }), n.push(o), n.push({
        tag: "path",
        attributes: {
          ...i,
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        },
        children: t ? [] : [{
          tag: "animate",
          attributes: {
            ...r,
            values: "1;0;0;0;0;1;"
          }
        }]
      }), t || n.push({
        tag: "path",
        attributes: {
          ...i,
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        },
        children: [{
          tag: "animate",
          attributes: {
            ...r,
            values: "0;0;1;1;0;0;"
          }
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: n
      };
    };
  }
}, ZI = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), i = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = i, e;
      }
    };
  }
}, eM = [JN, FI, $I, BI, jI, HI, KI, YI, JI, QI, ZI];
fI(eM, {
  mixoutsTo: Rt
});
Rt.noAuto;
Rt.config;
const tM = Rt.library;
Rt.dom;
const Ec = Rt.parse;
Rt.findIconDefinition;
Rt.toHtml;
const nM = Rt.icon;
Rt.layer;
Rt.text;
Rt.counter;
function ap(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function Ln(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ap(Object(n), !0).forEach(function(i) {
      _t(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ap(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function iM(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function sM(e) {
  var t = iM(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Vo(e) {
  "@babel/helpers - typeof";
  return Vo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vo(e);
}
function _t(e, t, n) {
  return t = sM(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function rM(e, t) {
  if (e == null) return {};
  var n = {};
  for (var i in e)
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      if (t.indexOf(i) >= 0) continue;
      n[i] = e[i];
    }
  return n;
}
function oM(e, t) {
  if (e == null) return {};
  var n = rM(e, t), i, s;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    for (s = 0; s < r.length; s++)
      i = r[s], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (n[i] = e[i]);
  }
  return n;
}
var aM = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Db = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(v, k, g) {
      if (!u(k) || f(k) || h(k) || d(k) || l(k))
        return k;
      var b, A = 0, N = 0;
      if (c(k))
        for (b = [], N = k.length; A < N; A++)
          b.push(n(v, k[A], g));
      else {
        b = {};
        for (var L in k)
          Object.prototype.hasOwnProperty.call(k, L) && (b[v(L, g)] = n(v, k[L], g));
      }
      return b;
    }, i = function(v, k) {
      k = k || {};
      var g = k.separator || "_", b = k.split || /(?=[A-Z])/;
      return v.split(b).join(g);
    }, s = function(v) {
      return p(v) ? v : (v = v.replace(/[\-_\s]+(.)?/g, function(k, g) {
        return g ? g.toUpperCase() : "";
      }), v.substr(0, 1).toLowerCase() + v.substr(1));
    }, r = function(v) {
      var k = s(v);
      return k.substr(0, 1).toUpperCase() + k.substr(1);
    }, o = function(v, k) {
      return i(v, k).toLowerCase();
    }, a = Object.prototype.toString, l = function(v) {
      return typeof v == "function";
    }, u = function(v) {
      return v === Object(v);
    }, c = function(v) {
      return a.call(v) == "[object Array]";
    }, f = function(v) {
      return a.call(v) == "[object Date]";
    }, h = function(v) {
      return a.call(v) == "[object RegExp]";
    }, d = function(v) {
      return a.call(v) == "[object Boolean]";
    }, p = function(v) {
      return v = v - 0, v === v;
    }, w = function(v, k) {
      var g = k && "process" in k ? k.process : k;
      return typeof g != "function" ? v : function(b, A) {
        return g(b, v, A);
      };
    }, E = {
      camelize: s,
      decamelize: o,
      pascalize: r,
      depascalize: o,
      camelizeKeys: function(v, k) {
        return n(w(s, k), v);
      },
      decamelizeKeys: function(v, k) {
        return n(w(o, k), v, k);
      },
      pascalizeKeys: function(v, k) {
        return n(w(r, k), v);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = E : t.humps = E;
  })(aM);
})(Db);
var lM = Db.exports, cM = ["class", "style"];
function uM(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var i = n.indexOf(":"), s = lM.camelize(n.slice(0, i)), r = n.slice(i + 1).trim();
    return t[s] = r, t;
  }, {});
}
function fM(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function Rb(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var i = (e.children || []).map(function(l) {
    return Rb(l);
  }), s = Object.keys(e.attributes || {}).reduce(function(l, u) {
    var c = e.attributes[u];
    switch (u) {
      case "class":
        l.class = fM(c);
        break;
      case "style":
        l.style = uM(c);
        break;
      default:
        l.attrs[u] = c;
    }
    return l;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  n.class;
  var r = n.style, o = r === void 0 ? {} : r, a = oM(n, cM);
  return Yc(e.tag, Ln(Ln(Ln({}, t), {}, {
    class: s.class,
    style: Ln(Ln({}, s.style), o)
  }, s.attrs), a), i);
}
var Fb = !1;
try {
  Fb = !0;
} catch {
}
function hM() {
  if (!Fb && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function cl(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? _t({}, e, t) : {};
}
function dM(e) {
  var t, n = (t = {
    "fa-spin": e.spin,
    "fa-pulse": e.pulse,
    "fa-fw": e.fixedWidth,
    "fa-border": e.border,
    "fa-li": e.listItem,
    "fa-inverse": e.inverse,
    "fa-flip": e.flip === !0,
    "fa-flip-horizontal": e.flip === "horizontal" || e.flip === "both",
    "fa-flip-vertical": e.flip === "vertical" || e.flip === "both"
  }, _t(_t(_t(_t(_t(_t(_t(_t(_t(_t(t, "fa-".concat(e.size), e.size !== null), "fa-rotate-".concat(e.rotation), e.rotation !== null), "fa-pull-".concat(e.pull), e.pull !== null), "fa-swap-opacity", e.swapOpacity), "fa-bounce", e.bounce), "fa-shake", e.shake), "fa-beat", e.beat), "fa-fade", e.fade), "fa-beat-fade", e.beatFade), "fa-flash", e.flash), _t(_t(t, "fa-spin-pulse", e.spinPulse), "fa-spin-reverse", e.spinReverse));
  return Object.keys(n).map(function(i) {
    return n[i] ? i : null;
  }).filter(function(i) {
    return i;
  });
}
function lp(e) {
  if (e && Vo(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Ec.icon)
    return Ec.icon(e);
  if (e === null)
    return null;
  if (Vo(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
var pM = /* @__PURE__ */ En({
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
      validator: function(t) {
        return [!0, !1, "horizontal", "vertical", "both"].indexOf(t) > -1;
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
      validator: function(t) {
        return ["right", "left"].indexOf(t) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: !1
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function(t) {
        return [90, 180, 270].indexOf(Number.parseInt(t, 10)) > -1;
      }
    },
    swapOpacity: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null,
      validator: function(t) {
        return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(t) > -1;
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
  setup: function(t, n) {
    var i = n.attrs, s = $t(function() {
      return lp(t.icon);
    }), r = $t(function() {
      return cl("classes", dM(t));
    }), o = $t(function() {
      return cl("transform", typeof t.transform == "string" ? Ec.transform(t.transform) : t.transform);
    }), a = $t(function() {
      return cl("mask", lp(t.mask));
    }), l = $t(function() {
      return nM(s.value, Ln(Ln(Ln(Ln({}, r.value), o.value), a.value), {}, {
        symbol: t.symbol,
        title: t.title,
        titleId: t.titleId,
        maskId: t.maskId
      }));
    });
    Fn(l, function(c) {
      if (!c)
        return hM("Could not find one or more icon(s)", s.value, a.value);
    }, {
      immediate: !0
    });
    var u = $t(function() {
      return l.value ? Rb(l.value.abstract[0], {}, i) : null;
    });
    return function() {
      return u.value;
    };
  }
});
const gM = {
  prefix: "fasr",
  iconName: "arrows-left-right",
  icon: [512, 512, ["arrows-h"], "f07e", "M493.8 273l17-17-17-17-96-96-17-17L346.9 160l17 17 55 55L93.1 232l55-55 17-17-33.9-33.9-17 17-96 96-17 17 17 17 96 96 17 17L165.1 352l-17-17-55-55 325.7 0-55 55-17 17 33.9 33.9 17-17 96-96z"]
}, mM = {
  prefix: "fasr",
  iconName: "plus-large",
  icon: [512, 512, [], "e59e", "M488 232l24 0 0 48-24 0-208 0 0 208 0 24-48 0 0-24 0-208L24 280 0 280l0-48 24 0 208 0 0-208 0-24 48 0 0 24 0 208 208 0z"]
}, yM = {
  prefix: "fasr",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M136 32l24 0 0 48-24 0L48 80l0 88 0 24L0 192l0-24L0 56 0 32l24 0 112 0zM0 344l0-24 48 0 0 24 0 88 88 0 24 0 0 48-24 0L24 480 0 480l0-24L0 344zM424 32l24 0 0 24 0 112 0 24-48 0 0-24 0-88-88 0-24 0 0-48 24 0 112 0zM400 344l0-24 48 0 0 24 0 112 0 24-24 0-112 0-24 0 0-48 24 0 88 0 0-88z"]
}, bM = {
  prefix: "fasr",
  iconName: "arrows-up-down",
  icon: [320, 512, ["arrows-v"], "f07d", "M177 18.2l-17-17-17 17-96 96-17 17L64 165.1l17-17 55-55 0 325.7-55-55-17-17L30.1 380.8l17 17 96 96 17 17 17-17 96-96 17-17L256 346.9l-17 17-55 55 0-325.7 55 55 17 17 33.9-33.9-17-17-96-96z"]
}, wM = {
  prefix: "fass",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M144 0L128 32 0 32 0 96l448 0 0-64L320 32 304 0 144 0zM416 128L32 128 56 512l336 0 24-384z"]
}, vM = {
  prefix: "fass",
  iconName: "calculator",
  icon: [384, 512, [128425], "f1ec", "M384 0L0 0 0 512l384 0L384 0zM320 64l0 96L64 160l0-96 256 0zM64 192l64 0 0 64-64 0 0-64zm64 96l0 64-64 0 0-64 64 0zM64 384l160 0 0 64L64 448l0-64zM224 192l0 64-64 0 0-64 64 0zm-64 96l64 0 0 64-64 0 0-64zm160-96l0 64-64 0 0-64 64 0zm-64 96l64 0 0 64-64 0 0-64zm64 96l0 64-64 0 0-64 64 0z"]
}, _M = {
  prefix: "fass",
  iconName: "paint-roller",
  icon: [512, 512, [], "f5aa", "M0 0L416 0l0 64 0 64 0 64L0 192 0 0zM256 320l32 0 0 192-128 0 0-192 32 0 0-64 0-32 32 0 224 0 0-64 0-32 0-64 32 0 32 0 0 32 0 160 0 32-32 0-224 0 0 32z"]
}, xM = {
  prefix: "fass",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M326.6 166.6L349.3 144 304 98.7l-22.6 22.6L192 210.7l-89.4-89.4L80 98.7 34.7 144l22.6 22.6L146.7 256 57.4 345.4 34.7 368 80 413.3l22.6-22.6L192 301.3l89.4 89.4L304 413.3 349.3 368l-22.6-22.6L237.3 256l89.4-89.4z"]
}, SM = {
  prefix: "fass",
  iconName: "hammer",
  icon: [576, 512, [128296], "f6e3", "M225.6 18.2L176 48l96 48 0 48L384 256l24-24 24 24-24 24 48 48L576 208l-48-48-24 24-24-24 24-24L405.5 37.5C381.5 13.5 348.9 0 315 0L291.5 0c-23.2 0-46 6.3-65.9 18.2zM0 416l96 96L330.7 248 264 181.3 0 416z"]
};
tM.add(
  xM,
  yM,
  gM,
  bM,
  SM,
  _M,
  wM,
  mM,
  vM
);
const kM = X1({
  locale: "en_US",
  fallbackLocale: "en_US",
  messages: u_,
  fallbackWarn: !1,
  missingWarn: !1
}), cp = document.querySelector("#smartcut-app"), EM = cp ? cp.getAttribute("data-type") : "", _f = iv(gN, { type: EM });
_f.use(kM);
_f.component("FontAwesomeIcon", pM);
_f.mount("#smartcut-app");
export {
  VO as A,
  GO as B,
  oN as C,
  me as D,
  He as E,
  Oe as F,
  Up as G,
  mg as H,
  tb as I,
  TM as J,
  hy as K,
  AM as L,
  wr as M,
  Ny as N,
  zC as O,
  WC as P,
  Uo as Q,
  nn as _,
  Ti as a,
  at as b,
  Oo as c,
  fe as d,
  te as e,
  Dn as f,
  Ge as g,
  ie as h,
  pe as i,
  Q as j,
  En as k,
  Qo as l,
  IM as m,
  xt as n,
  J as o,
  PM as p,
  Py as q,
  Qe as r,
  Ay as s,
  Me as t,
  MM as u,
  $ as v,
  LM as w,
  DM as x,
  RM as y,
  JO as z
};

var Rb = Object.defineProperty;
var Fb = (e, t, n) => t in e ? Rb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var m = (e, t, n) => Fb(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.5.9
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function kc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ee = {}, Yi = [], hn = () => {
}, $b = () => !1, Uo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Cc = (e) => e.startsWith("onUpdate:"), nt = Object.assign, Ec = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Bb = Object.prototype.hasOwnProperty, we = (e, t) => Bb.call(e, t), oe = Array.isArray, Xi = (e) => ar(e) === "[object Map]", Wo = (e) => ar(e) === "[object Set]", Sf = (e) => ar(e) === "[object Date]", ce = (e) => typeof e == "function", Ve = (e) => typeof e == "string", mn = (e) => typeof e == "symbol", Pe = (e) => e !== null && typeof e == "object", mp = (e) => (Pe(e) || ce(e)) && ce(e.then) && ce(e.catch), yp = Object.prototype.toString, ar = (e) => yp.call(e), jb = (e) => ar(e).slice(8, -1), bp = (e) => ar(e) === "[object Object]", Tc = (e) => Ve(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, js = /* @__PURE__ */ kc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), zo = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, qb = /-(\w)/g, Kt = zo(
  (e) => e.replace(qb, (t, n) => n ? n.toUpperCase() : "")
), Ub = /\B([A-Z])/g, Li = zo(
  (e) => e.replace(Ub, "-$1").toLowerCase()
), Vo = zo((e) => e.charAt(0).toUpperCase() + e.slice(1)), Oa = zo(
  (e) => e ? `on${Vo(e)}` : ""
), Jn = (e, t) => !Object.is(e, t), Ur = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, wp = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, vp = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let kf;
const _p = () => kf || (kf = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function He(e) {
  if (oe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], s = Ve(i) ? Gb(i) : He(i);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (Ve(e) || Pe(e))
    return e;
}
const Wb = /;(?![^(]*\))/g, zb = /:([^]+)/, Vb = /\/\*[^]*?\*\//g;
function Gb(e) {
  const t = {};
  return e.replace(Vb, "").split(Wb).forEach((n) => {
    if (n) {
      const i = n.split(zb);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function Gt(e) {
  let t = "";
  if (Ve(e))
    t = e;
  else if (oe(e))
    for (let n = 0; n < e.length; n++) {
      const i = Gt(e[n]);
      i && (t += i + " ");
    }
  else if (Pe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Hb = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Kb = /* @__PURE__ */ kc(Hb);
function xp(e) {
  return !!e || e === "";
}
function Yb(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Go(e[i], t[i]);
  return n;
}
function Go(e, t) {
  if (e === t) return !0;
  let n = Sf(e), i = Sf(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = mn(e), i = mn(t), n || i)
    return e === t;
  if (n = oe(e), i = oe(t), n || i)
    return n && i ? Yb(e, t) : !1;
  if (n = Pe(e), i = Pe(t), n || i) {
    if (!n || !i)
      return !1;
    const s = Object.keys(e).length, r = Object.keys(t).length;
    if (s !== r)
      return !1;
    for (const o in e) {
      const a = e.hasOwnProperty(o), l = t.hasOwnProperty(o);
      if (a && !l || !a && l || !Go(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Xb(e, t) {
  return e.findIndex((n) => Go(n, t));
}
const Sp = (e) => !!(e && e.__v_isRef === !0), Ge = (e) => Ve(e) ? e : e == null ? "" : oe(e) || Pe(e) && (e.toString === yp || !ce(e.toString)) ? Sp(e) ? Ge(e.value) : JSON.stringify(e, kp, 2) : String(e), kp = (e, t) => Sp(t) ? kp(e, t.value) : Xi(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, s], r) => (n[Pa(i, r) + " =>"] = s, n),
    {}
  )
} : Wo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Pa(n))
} : mn(t) ? Pa(t) : Pe(t) && !oe(t) && !bp(t) ? String(t) : t, Pa = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    mn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.9
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ht;
class Cp {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ht, !t && ht && (this.index = (ht.scopes || (ht.scopes = [])).push(
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
      const n = ht;
      try {
        return ht = this, t();
      } finally {
        ht = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ht = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    ht = this.parent;
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
function Jb(e) {
  return new Cp(e);
}
function Ep() {
  return ht;
}
function Qb(e, t = !1) {
  ht && ht.cleanups.push(e);
}
let Ae;
const Na = /* @__PURE__ */ new WeakSet();
class Tp {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ht && ht.active && ht.effects.push(this);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Op(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Cf(this), Pp(this);
    const t = Ae, n = Ht;
    Ae = this, Ht = !0;
    try {
      return this.fn();
    } finally {
      Np(this), Ae = t, Ht = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Pc(t);
      this.deps = this.depsTail = void 0, Cf(this), this.onStop && this.onStop(), this.flags &= -2;
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
let Ap = 0, Vi;
function Op(e) {
  e.flags |= 8, e.next = Vi, Vi = e;
}
function Ac() {
  Ap++;
}
function Oc() {
  if (--Ap > 0)
    return;
  let e;
  for (; Vi; ) {
    let t = Vi, n;
    for (; t; )
      t.flags &= -9, t = t.next;
    for (t = Vi, Vi = void 0; t; ) {
      if (t.flags & 1)
        try {
          t.trigger();
        } catch (i) {
          e || (e = i);
        }
      n = t.next, t.next = void 0, t = n;
    }
  }
  if (e) throw e;
}
function Pp(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Np(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const s = i.prevDep;
    i.version === -1 ? (i === n && (n = s), Pc(i), Zb(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = s;
  }
  e.deps = t, e.depsTail = n;
}
function ul(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ip(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ip(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ys))
    return;
  e.globalVersion = Ys;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !ul(e)) {
    e.flags &= -3;
    return;
  }
  const n = Ae, i = Ht;
  Ae = e, Ht = !0;
  try {
    Pp(e);
    const s = e.fn(e._value);
    (t.version === 0 || Jn(s, e._value)) && (e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    Ae = n, Ht = i, Np(e), e.flags &= -3;
  }
}
function Pc(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: s } = e;
  if (i && (i.nextSub = s, e.prevSub = void 0), s && (s.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i), !n.subs && n.computed) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Pc(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Zb(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ht = !0;
const Mp = [];
function ni() {
  Mp.push(Ht), Ht = !1;
}
function ii() {
  const e = Mp.pop();
  Ht = e === void 0 ? !0 : e;
}
function Cf(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Ae;
    Ae = void 0;
    try {
      t();
    } finally {
      Ae = n;
    }
  }
}
let Ys = 0;
class e0 {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Nc {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.target = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!Ae || !Ht || Ae === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ae)
      n = this.activeLink = new e0(Ae, this), Ae.deps ? (n.prevDep = Ae.depsTail, Ae.depsTail.nextDep = n, Ae.depsTail = n) : Ae.deps = Ae.depsTail = n, Lp(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = Ae.depsTail, n.nextDep = void 0, Ae.depsTail.nextDep = n, Ae.depsTail = n, Ae.deps === n && (Ae.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, Ys++, this.notify(t);
  }
  notify(t) {
    Ac();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Oc();
    }
  }
}
function Lp(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        Lp(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const fl = /* @__PURE__ */ new WeakMap(), yi = Symbol(
  ""
), hl = Symbol(
  ""
), Xs = Symbol(
  ""
);
function at(e, t, n) {
  if (Ht && Ae) {
    let i = fl.get(e);
    i || fl.set(e, i = /* @__PURE__ */ new Map());
    let s = i.get(n);
    s || (i.set(n, s = new Nc()), s.target = e, s.map = i, s.key = n), s.track();
  }
}
function Mn(e, t, n, i, s, r) {
  const o = fl.get(e);
  if (!o) {
    Ys++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (Ac(), t === "clear")
    o.forEach(a);
  else {
    const l = oe(e), u = l && Tc(n);
    if (l && n === "length") {
      const c = Number(i);
      o.forEach((f, h) => {
        (h === "length" || h === Xs || !mn(h) && h >= c) && a(f);
      });
    } else
      switch (n !== void 0 && a(o.get(n)), u && a(o.get(Xs)), t) {
        case "add":
          l ? u && a(o.get("length")) : (a(o.get(yi)), Xi(e) && a(o.get(hl)));
          break;
        case "delete":
          l || (a(o.get(yi)), Xi(e) && a(o.get(hl)));
          break;
        case "set":
          Xi(e) && a(o.get(yi));
          break;
      }
  }
  Oc();
}
function ji(e) {
  const t = _e(e);
  return t === e ? t : (at(t, "iterate", Xs), Ft(e) ? t : t.map(st));
}
function Ho(e) {
  return at(e = _e(e), "iterate", Xs), e;
}
const t0 = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ia(this, Symbol.iterator, st);
  },
  concat(...e) {
    return ji(this).concat(
      ...e.map((t) => oe(t) ? ji(t) : t)
    );
  },
  entries() {
    return Ia(this, "entries", (e) => (e[1] = st(e[1]), e));
  },
  every(e, t) {
    return xn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return xn(this, "filter", e, t, (n) => n.map(st), arguments);
  },
  find(e, t) {
    return xn(this, "find", e, t, st, arguments);
  },
  findIndex(e, t) {
    return xn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return xn(this, "findLast", e, t, st, arguments);
  },
  findLastIndex(e, t) {
    return xn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return xn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ma(this, "includes", e);
  },
  indexOf(...e) {
    return Ma(this, "indexOf", e);
  },
  join(e) {
    return ji(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Ma(this, "lastIndexOf", e);
  },
  map(e, t) {
    return xn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return xs(this, "pop");
  },
  push(...e) {
    return xs(this, "push", e);
  },
  reduce(e, ...t) {
    return Ef(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ef(this, "reduceRight", e, t);
  },
  shift() {
    return xs(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return xn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return xs(this, "splice", e);
  },
  toReversed() {
    return ji(this).toReversed();
  },
  toSorted(e) {
    return ji(this).toSorted(e);
  },
  toSpliced(...e) {
    return ji(this).toSpliced(...e);
  },
  unshift(...e) {
    return xs(this, "unshift", e);
  },
  values() {
    return Ia(this, "values", st);
  }
};
function Ia(e, t, n) {
  const i = Ho(e), s = i[t]();
  return i !== e && !Ft(e) && (s._next = s.next, s.next = () => {
    const r = s._next();
    return r.value && (r.value = n(r.value)), r;
  }), s;
}
const n0 = Array.prototype;
function xn(e, t, n, i, s, r) {
  const o = Ho(e), a = o !== e && !Ft(e), l = o[t];
  if (l !== n0[t]) {
    const f = l.apply(e, r);
    return a ? st(f) : f;
  }
  let u = n;
  o !== e && (a ? u = function(f, h) {
    return n.call(this, st(f), h, e);
  } : n.length > 2 && (u = function(f, h) {
    return n.call(this, f, h, e);
  }));
  const c = l.call(o, u, i);
  return a && s ? s(c) : c;
}
function Ef(e, t, n, i) {
  const s = Ho(e);
  let r = n;
  return s !== e && (Ft(e) ? n.length > 3 && (r = function(o, a, l) {
    return n.call(this, o, a, l, e);
  }) : r = function(o, a, l) {
    return n.call(this, o, st(a), l, e);
  }), s[t](r, ...i);
}
function Ma(e, t, n) {
  const i = _e(e);
  at(i, "iterate", Xs);
  const s = i[t](...n);
  return (s === -1 || s === !1) && Fc(n[0]) ? (n[0] = _e(n[0]), i[t](...n)) : s;
}
function xs(e, t, n = []) {
  ni(), Ac();
  const i = _e(e)[t].apply(e, n);
  return Oc(), ii(), i;
}
const i0 = /* @__PURE__ */ kc("__proto__,__v_isRef,__isVue"), Dp = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(mn)
);
function s0(e) {
  mn(e) || (e = String(e));
  const t = _e(this);
  return at(t, "has", e), t.hasOwnProperty(e);
}
class Rp {
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
      return i === (s ? r ? y0 : jp : r ? Bp : $p).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const o = oe(t);
    if (!s) {
      let l;
      if (o && (l = t0[n]))
        return l;
      if (n === "hasOwnProperty")
        return s0;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      tt(t) ? t : i
    );
    return (mn(n) ? Dp.has(n) : i0(n)) || (s || at(t, "get", n), r) ? a : tt(a) ? o && Tc(n) ? a : a.value : Pe(a) ? s ? Dc(a) : Lc(a) : a;
  }
}
class Fp extends Rp {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, s) {
    let r = t[n];
    if (!this._isShallow) {
      const l = Ci(r);
      if (!Ft(i) && !Ci(i) && (r = _e(r), i = _e(i)), !oe(t) && tt(r) && !tt(i))
        return l ? !1 : (r.value = i, !0);
    }
    const o = oe(t) && Tc(n) ? Number(n) < t.length : we(t, n), a = Reflect.set(
      t,
      n,
      i,
      tt(t) ? t : s
    );
    return t === _e(s) && (o ? Jn(i, r) && Mn(t, "set", n, i) : Mn(t, "add", n, i)), a;
  }
  deleteProperty(t, n) {
    const i = we(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && i && Mn(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!mn(n) || !Dp.has(n)) && at(t, "has", n), i;
  }
  ownKeys(t) {
    return at(
      t,
      "iterate",
      oe(t) ? "length" : yi
    ), Reflect.ownKeys(t);
  }
}
class r0 extends Rp {
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
const o0 = /* @__PURE__ */ new Fp(), a0 = /* @__PURE__ */ new r0(), l0 = /* @__PURE__ */ new Fp(!0);
const Ic = (e) => e, Ko = (e) => Reflect.getPrototypeOf(e);
function xr(e, t, n = !1, i = !1) {
  e = e.__v_raw;
  const s = _e(e), r = _e(t);
  n || (Jn(t, r) && at(s, "get", t), at(s, "get", r));
  const { has: o } = Ko(s), a = i ? Ic : n ? $c : st;
  if (o.call(s, t))
    return a(e.get(t));
  if (o.call(s, r))
    return a(e.get(r));
  e !== s && e.get(t);
}
function Sr(e, t = !1) {
  const n = this.__v_raw, i = _e(n), s = _e(e);
  return t || (Jn(e, s) && at(i, "has", e), at(i, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function kr(e, t = !1) {
  return e = e.__v_raw, !t && at(_e(e), "iterate", yi), Reflect.get(e, "size", e);
}
function Tf(e, t = !1) {
  !t && !Ft(e) && !Ci(e) && (e = _e(e));
  const n = _e(this);
  return Ko(n).has.call(n, e) || (n.add(e), Mn(n, "add", e, e)), this;
}
function Af(e, t, n = !1) {
  !n && !Ft(t) && !Ci(t) && (t = _e(t));
  const i = _e(this), { has: s, get: r } = Ko(i);
  let o = s.call(i, e);
  o || (e = _e(e), o = s.call(i, e));
  const a = r.call(i, e);
  return i.set(e, t), o ? Jn(t, a) && Mn(i, "set", e, t) : Mn(i, "add", e, t), this;
}
function Of(e) {
  const t = _e(this), { has: n, get: i } = Ko(t);
  let s = n.call(t, e);
  s || (e = _e(e), s = n.call(t, e)), i && i.call(t, e);
  const r = t.delete(e);
  return s && Mn(t, "delete", e, void 0), r;
}
function Pf() {
  const e = _e(this), t = e.size !== 0, n = e.clear();
  return t && Mn(e, "clear", void 0, void 0), n;
}
function Cr(e, t) {
  return function(i, s) {
    const r = this, o = r.__v_raw, a = _e(o), l = t ? Ic : e ? $c : st;
    return !e && at(a, "iterate", yi), o.forEach((u, c) => i.call(s, l(u), l(c), r));
  };
}
function Er(e, t, n) {
  return function(...i) {
    const s = this.__v_raw, r = _e(s), o = Xi(r), a = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = s[e](...i), c = n ? Ic : t ? $c : st;
    return !t && at(
      r,
      "iterate",
      l ? hl : yi
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
function jn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function c0() {
  const e = {
    get(r) {
      return xr(this, r);
    },
    get size() {
      return kr(this);
    },
    has: Sr,
    add: Tf,
    set: Af,
    delete: Of,
    clear: Pf,
    forEach: Cr(!1, !1)
  }, t = {
    get(r) {
      return xr(this, r, !1, !0);
    },
    get size() {
      return kr(this);
    },
    has: Sr,
    add(r) {
      return Tf.call(this, r, !0);
    },
    set(r, o) {
      return Af.call(this, r, o, !0);
    },
    delete: Of,
    clear: Pf,
    forEach: Cr(!1, !0)
  }, n = {
    get(r) {
      return xr(this, r, !0);
    },
    get size() {
      return kr(this, !0);
    },
    has(r) {
      return Sr.call(this, r, !0);
    },
    add: jn("add"),
    set: jn("set"),
    delete: jn("delete"),
    clear: jn("clear"),
    forEach: Cr(!0, !1)
  }, i = {
    get(r) {
      return xr(this, r, !0, !0);
    },
    get size() {
      return kr(this, !0);
    },
    has(r) {
      return Sr.call(this, r, !0);
    },
    add: jn("add"),
    set: jn("set"),
    delete: jn("delete"),
    clear: jn("clear"),
    forEach: Cr(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    e[r] = Er(r, !1, !1), n[r] = Er(r, !0, !1), t[r] = Er(r, !1, !0), i[r] = Er(
      r,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    i
  ];
}
const [
  u0,
  f0,
  h0,
  d0
] = /* @__PURE__ */ c0();
function Mc(e, t) {
  const n = t ? e ? d0 : h0 : e ? f0 : u0;
  return (i, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? i : Reflect.get(
    we(n, s) && s in i ? n : i,
    s,
    r
  );
}
const p0 = {
  get: /* @__PURE__ */ Mc(!1, !1)
}, g0 = {
  get: /* @__PURE__ */ Mc(!1, !0)
}, m0 = {
  get: /* @__PURE__ */ Mc(!0, !1)
};
const $p = /* @__PURE__ */ new WeakMap(), Bp = /* @__PURE__ */ new WeakMap(), jp = /* @__PURE__ */ new WeakMap(), y0 = /* @__PURE__ */ new WeakMap();
function b0(e) {
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
function w0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : b0(jb(e));
}
function Lc(e) {
  return Ci(e) ? e : Rc(
    e,
    !1,
    o0,
    p0,
    $p
  );
}
function v0(e) {
  return Rc(
    e,
    !1,
    l0,
    g0,
    Bp
  );
}
function Dc(e) {
  return Rc(
    e,
    !0,
    a0,
    m0,
    jp
  );
}
function Rc(e, t, n, i, s) {
  if (!Pe(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const o = w0(e);
  if (o === 0)
    return e;
  const a = new Proxy(
    e,
    o === 2 ? i : n
  );
  return s.set(e, a), a;
}
function Ji(e) {
  return Ci(e) ? Ji(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ci(e) {
  return !!(e && e.__v_isReadonly);
}
function Ft(e) {
  return !!(e && e.__v_isShallow);
}
function Fc(e) {
  return e ? !!e.__v_raw : !1;
}
function _e(e) {
  const t = e && e.__v_raw;
  return t ? _e(t) : e;
}
function Yo(e) {
  return !we(e, "__v_skip") && Object.isExtensible(e) && wp(e, "__v_skip", !0), e;
}
const st = (e) => Pe(e) ? Lc(e) : e, $c = (e) => Pe(e) ? Dc(e) : e;
function tt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Qi(e) {
  return qp(e, !1);
}
function Gn(e) {
  return qp(e, !0);
}
function qp(e, t) {
  return tt(e) ? e : new _0(e, t);
}
class _0 {
  constructor(t, n) {
    this.dep = new Nc(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : _e(t), this._value = n ? t : st(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || Ft(t) || Ci(t);
    t = i ? t : _e(t), Jn(t, n) && (this._rawValue = t, this._value = i ? t : st(t), this.dep.trigger());
  }
}
function Up(e) {
  return tt(e) ? e.value : e;
}
const x0 = {
  get: (e, t, n) => t === "__v_raw" ? e : Up(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const s = e[t];
    return tt(s) && !tt(n) ? (s.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function Wp(e) {
  return Ji(e) ? e : new Proxy(e, x0);
}
class S0 {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Nc(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ys - 1, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Ae !== this)
      return Op(this), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ip(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function k0(e, t, n = !1) {
  let i, s;
  return ce(e) ? i = e : (i = e.get, s = e.set), new S0(i, s, n);
}
const Tr = {}, so = /* @__PURE__ */ new WeakMap();
let di;
function C0(e, t = !1, n = di) {
  if (n) {
    let i = so.get(n);
    i || so.set(n, i = []), i.push(e);
  }
}
function E0(e, t, n = Ee) {
  const { immediate: i, deep: s, once: r, scheduler: o, augmentJob: a, call: l } = n, u = (C) => s ? C : Ft(C) || s === !1 || s === 0 ? On(C, 1) : On(C);
  let c, f, h, d, p = !1, g = !1;
  if (tt(e) ? (f = () => e.value, p = Ft(e)) : Ji(e) ? (f = () => u(e), p = !0) : oe(e) ? (g = !0, p = e.some((C) => Ji(C) || Ft(C)), f = () => e.map((C) => {
    if (tt(C))
      return C.value;
    if (Ji(C))
      return u(C);
    if (ce(C))
      return l ? l(C, 2) : C();
  })) : ce(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
    if (h) {
      ni();
      try {
        h();
      } finally {
        ii();
      }
    }
    const C = di;
    di = c;
    try {
      return l ? l(e, 3, [d]) : e(d);
    } finally {
      di = C;
    }
  } : f = hn, t && s) {
    const C = f, T = s === !0 ? 1 / 0 : s;
    f = () => On(C(), T);
  }
  const v = Ep(), w = () => {
    c.stop(), v && Ec(v.effects, c);
  };
  if (r && t) {
    const C = t;
    t = (...T) => {
      C(...T), w();
    };
  }
  let k = g ? new Array(e.length).fill(Tr) : Tr;
  const b = (C) => {
    if (!(!(c.flags & 1) || !c.dirty && !C))
      if (t) {
        const T = c.run();
        if (s || p || (g ? T.some((M, P) => Jn(M, k[P])) : Jn(T, k))) {
          h && h();
          const M = di;
          di = c;
          try {
            const P = [
              T,
              // pass undefined as the old value when it's changed for the first time
              k === Tr ? void 0 : g && k[0] === Tr ? [] : k,
              d
            ];
            l ? l(t, 3, P) : (
              // @ts-expect-error
              t(...P)
            ), k = T;
          } finally {
            di = M;
          }
        }
      } else
        c.run();
  };
  return a && a(b), c = new Tp(f), c.scheduler = o ? () => o(b, !1) : b, d = (C) => C0(C, !1, c), h = c.onStop = () => {
    const C = so.get(c);
    if (C) {
      if (l)
        l(C, 4);
      else
        for (const T of C) T();
      so.delete(c);
    }
  }, t ? i ? b(!0) : k = c.run() : o ? o(b.bind(null, !0), !0) : c.run(), w.pause = c.pause.bind(c), w.resume = c.resume.bind(c), w.stop = w, w;
}
function On(e, t = 1 / 0, n) {
  if (t <= 0 || !Pe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, tt(e))
    On(e.value, t, n);
  else if (oe(e))
    for (let i = 0; i < e.length; i++)
      On(e[i], t, n);
  else if (Wo(e) || Xi(e))
    e.forEach((i) => {
      On(i, t, n);
    });
  else if (bp(e)) {
    for (const i in e)
      On(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && On(e[i], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.9
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function lr(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (s) {
    cr(s, t, n);
  }
}
function yn(e, t, n, i) {
  if (ce(e)) {
    const s = lr(e, t, n, i);
    return s && mp(s) && s.catch((r) => {
      cr(r, t, n);
    }), s;
  }
  if (oe(e)) {
    const s = [];
    for (let r = 0; r < e.length; r++)
      s.push(yn(e[r], t, n, i));
    return s;
  }
}
function cr(e, t, n, i = !0) {
  const s = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || Ee;
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
      ni(), lr(r, null, 10, [
        e,
        l,
        u
      ]), ii();
      return;
    }
  }
  T0(e, n, s, i, o);
}
function T0(e, t, n, i = !0, s = !1) {
  if (s)
    throw e;
  console.error(e);
}
let Js = !1, dl = !1;
const dt = [];
let rn = 0;
const Zi = [];
let zn = null, Ui = 0;
const zp = /* @__PURE__ */ Promise.resolve();
let Bc = null;
function Xo(e) {
  const t = Bc || zp;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function A0(e) {
  let t = Js ? rn + 1 : 0, n = dt.length;
  for (; t < n; ) {
    const i = t + n >>> 1, s = dt[i], r = Qs(s);
    r < e || r === e && s.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function jc(e) {
  if (!(e.flags & 1)) {
    const t = Qs(e), n = dt[dt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Qs(n) ? dt.push(e) : dt.splice(A0(t), 0, e), e.flags |= 1, Vp();
  }
}
function Vp() {
  !Js && !dl && (dl = !0, Bc = zp.then(Hp));
}
function O0(e) {
  oe(e) ? Zi.push(...e) : zn && e.id === -1 ? zn.splice(Ui + 1, 0, e) : e.flags & 1 || (Zi.push(e), e.flags |= 1), Vp();
}
function Nf(e, t, n = Js ? rn + 1 : 0) {
  for (; n < dt.length; n++) {
    const i = dt[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      dt.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Gp(e) {
  if (Zi.length) {
    const t = [...new Set(Zi)].sort(
      (n, i) => Qs(n) - Qs(i)
    );
    if (Zi.length = 0, zn) {
      zn.push(...t);
      return;
    }
    for (zn = t, Ui = 0; Ui < zn.length; Ui++) {
      const n = zn[Ui];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    zn = null, Ui = 0;
  }
}
const Qs = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Hp(e) {
  dl = !1, Js = !0;
  try {
    for (rn = 0; rn < dt.length; rn++) {
      const t = dt[rn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), lr(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; rn < dt.length; rn++) {
      const t = dt[rn];
      t && (t.flags &= -2);
    }
    rn = 0, dt.length = 0, Gp(), Js = !1, Bc = null, (dt.length || Zi.length) && Hp();
  }
}
let bt = null, Kp = null;
function ro(e) {
  const t = bt;
  return bt = e, Kp = e && e.type.__scopeId || null, t;
}
function P0(e, t = bt, n) {
  if (!t || e._n)
    return e;
  const i = (...s) => {
    i._d && qf(-1);
    const r = ro(t);
    let o;
    try {
      o = e(...s);
    } finally {
      ro(r), i._d && qf(1);
    }
    return o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function pl(e, t) {
  if (bt === null)
    return e;
  const n = ta(bt), i = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [r, o, a, l = Ee] = t[s];
    r && (ce(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && On(o), i.push({
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
function li(e, t, n, i) {
  const s = e.dirs, r = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    r && (a.oldValue = r[o].value);
    let l = a.dir[i];
    l && (ni(), yn(l, n, 8, [
      e.el,
      a,
      e,
      t
    ]), ii());
  }
}
const N0 = Symbol("_vte"), I0 = (e) => e.__isTeleport;
function qc(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, qc(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Di(e, t) {
  return ce(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    nt({ name: e.name }, t, { setup: e })
  ) : e;
}
function Uc(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function gl(e, t, n, i, s = !1) {
  if (oe(e)) {
    e.forEach(
      (p, g) => gl(
        p,
        t && (oe(t) ? t[g] : t),
        n,
        i,
        s
      )
    );
    return;
  }
  if (qs(i) && !s)
    return;
  const r = i.shapeFlag & 4 ? ta(i.component) : i.el, o = s ? null : r, { i: a, r: l } = e, u = t && t.r, c = a.refs === Ee ? a.refs = {} : a.refs, f = a.setupState, h = _e(f), d = f === Ee ? () => !1 : (p) => we(h, p);
  if (u != null && u !== l && (Ve(u) ? (c[u] = null, d(u) && (f[u] = null)) : tt(u) && (u.value = null)), ce(l))
    lr(l, a, 12, [o, c]);
  else {
    const p = Ve(l), g = tt(l);
    if (p || g) {
      const v = () => {
        if (e.f) {
          const w = p ? d(l) ? f[l] : c[l] : l.value;
          s ? oe(w) && Ec(w, r) : oe(w) ? w.includes(r) || w.push(r) : p ? (c[l] = [r], d(l) && (f[l] = c[l])) : (l.value = [r], e.k && (c[e.k] = l.value));
        } else p ? (c[l] = o, d(l) && (f[l] = o)) : g && (l.value = o, e.k && (c[e.k] = o));
      };
      o ? (v.id = -1, Et(v, n)) : v();
    }
  }
}
const If = (e) => e.nodeType === 8;
function M0(e, t) {
  if (If(e) && e.data === "[") {
    let n = 1, i = e.nextSibling;
    for (; i; ) {
      if (i.nodeType === 1) {
        if (t(i) === !1)
          break;
      } else if (If(i))
        if (i.data === "]") {
          if (--n === 0) break;
        } else i.data === "[" && n++;
      i = i.nextSibling;
    }
  } else
    t(e);
}
const qs = (e) => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Jo(e) {
  ce(e) && (e = { loader: e });
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
    return u || (p = u = t().catch((g) => {
      if (g = g instanceof Error ? g : new Error(String(g)), l)
        return new Promise((v, w) => {
          l(g, () => v(h()), () => w(g), f + 1);
        });
      throw g;
    }).then((g) => p !== u && u ? u : (g && (g.__esModule || g[Symbol.toStringTag] === "Module") && (g = g.default), c = g, g)));
  };
  return /* @__PURE__ */ Di({
    name: "AsyncComponentWrapper",
    __asyncLoader: d,
    __asyncHydrate(p, g, v) {
      const w = r ? () => {
        const k = r(
          v,
          (b) => M0(p, b)
        );
        k && (g.bum || (g.bum = [])).push(k);
      } : v;
      c ? w() : d().then(() => !g.isUnmounted && w());
    },
    get __asyncResolved() {
      return c;
    },
    setup() {
      const p = Je;
      if (Uc(p), c)
        return () => La(c, p);
      const g = (b) => {
        u = null, cr(
          b,
          p,
          13,
          !i
        );
      };
      if (a && p.suspense || hr)
        return d().then((b) => () => La(b, p)).catch((b) => (g(b), () => i ? ve(i, {
          error: b
        }) : null));
      const v = Qi(!1), w = Qi(), k = Qi(!!s);
      return s && setTimeout(() => {
        k.value = !1;
      }, s), o != null && setTimeout(() => {
        if (!v.value && !w.value) {
          const b = new Error(
            `Async component timed out after ${o}ms.`
          );
          g(b), w.value = b;
        }
      }, o), d().then(() => {
        v.value = !0, p.parent && Wc(p.parent.vnode) && p.parent.update();
      }).catch((b) => {
        g(b), w.value = b;
      }), () => {
        if (v.value && c)
          return La(c, p);
        if (w.value && i)
          return ve(i, {
            error: w.value
          });
        if (n && !k.value)
          return ve(n);
      };
    }
  });
}
function La(e, t) {
  const { ref: n, props: i, children: s, ce: r } = t.vnode, o = ve(e, i, s);
  return o.ref = n, o.ce = r, delete t.vnode.ce, o;
}
const Wc = (e) => e.type.__isKeepAlive;
function L0(e, t) {
  Yp(e, "a", t);
}
function D0(e, t) {
  Yp(e, "da", t);
}
function Yp(e, t, n = Je) {
  const i = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Qo(t, i, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      Wc(s.parent.vnode) && R0(i, t, n, s), s = s.parent;
  }
}
function R0(e, t, n, i) {
  const s = Qo(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  Vc(() => {
    Ec(i[t], s);
  }, n);
}
function Qo(e, t, n = Je, i = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      ni();
      const a = fr(n), l = yn(t, n, e, o);
      return a(), ii(), l;
    });
    return i ? s.unshift(r) : s.push(r), r;
  }
}
const Fn = (e) => (t, n = Je) => {
  (!hr || e === "sp") && Qo(e, (...i) => t(...i), n);
}, F0 = Fn("bm"), zc = Fn("m"), $0 = Fn(
  "bu"
), B0 = Fn("u"), j0 = Fn(
  "bum"
), Vc = Fn("um"), q0 = Fn(
  "sp"
), U0 = Fn("rtg"), W0 = Fn("rtc");
function z0(e, t = Je) {
  Qo("ec", e, t);
}
const Xp = "components";
function En(e, t) {
  return Qp(Xp, e, !0, t) || e;
}
const Jp = Symbol.for("v-ndc");
function V0(e) {
  return Ve(e) ? Qp(Xp, e, !1) || e : e || Jp;
}
function Qp(e, t, n = !0, i = !1) {
  const s = bt || Je;
  if (s) {
    const r = s.type;
    {
      const a = Mw(
        r,
        !1
      );
      if (a && (a === t || a === Kt(t) || a === Vo(Kt(t))))
        return r;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      Mf(s[e] || r[e], t) || // global registration
      Mf(s.appContext[e], t)
    );
    return !o && i ? r : o;
  }
}
function Mf(e, t) {
  return e && (e[t] || e[Kt(t)] || e[Vo(Kt(t))]);
}
function Tn(e, t, n, i) {
  let s;
  const r = n, o = oe(e);
  if (o || Ve(e)) {
    const a = o && Ji(e);
    let l = !1;
    a && (l = !Ft(e), e = Ho(e)), s = new Array(e.length);
    for (let u = 0, c = e.length; u < c; u++)
      s[u] = t(
        l ? st(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let a = 0; a < e; a++)
      s[a] = t(a + 1, a, void 0, r);
  } else if (Pe(e))
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
const ml = (e) => e ? bg(e) ? ta(e) : ml(e.parent) : null, Us = (
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
    $nextTick: (e) => e.n || (e.n = Xo.bind(e.proxy)),
    $watch: (e) => dw.bind(e)
  })
), Da = (e, t) => e !== Ee && !e.__isScriptSetup && we(e, t), G0 = {
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
        if (s !== Ee && we(s, t))
          return o[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && we(u, t)
        )
          return o[t] = 3, r[t];
        if (n !== Ee && we(n, t))
          return o[t] = 4, n[t];
        yl && (o[t] = 0);
      }
    }
    const c = Us[t];
    let f, h;
    if (c)
      return t === "$attrs" && at(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (f = a.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== Ee && we(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      h = l.config.globalProperties, we(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: s, ctx: r } = e;
    return Da(s, t) ? (s[t] = n, !0) : i !== Ee && we(i, t) ? (i[t] = n, !0) : we(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: s, propsOptions: r }
  }, o) {
    let a;
    return !!n[o] || e !== Ee && we(e, o) || Da(t, o) || (a = r[0]) && we(a, o) || we(i, o) || we(Us, o) || we(s.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : we(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Lf(e) {
  return oe(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let yl = !0;
function H0(e) {
  const t = Gc(e), n = e.proxy, i = e.ctx;
  yl = !1, t.beforeCreate && Df(t.beforeCreate, e, "bc");
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
    activated: g,
    deactivated: v,
    beforeDestroy: w,
    beforeUnmount: k,
    destroyed: b,
    unmounted: C,
    render: T,
    renderTracked: M,
    renderTriggered: P,
    errorCaptured: D,
    serverPrefetch: z,
    // public API
    expose: H,
    inheritAttrs: G,
    // assets
    components: J,
    directives: K,
    filters: le
  } = t;
  if (u && K0(u, i, null), o)
    for (const he in o) {
      const ue = o[he];
      ce(ue) && (i[he] = ue.bind(n));
    }
  if (s) {
    const he = s.call(n, n);
    Pe(he) && (e.data = Lc(he));
  }
  if (yl = !0, r)
    for (const he in r) {
      const ue = r[he], Te = ce(ue) ? ue.bind(n, n) : ce(ue.get) ? ue.get.bind(n, n) : hn, _t = !ce(ue) && ce(ue.set) ? ue.set.bind(n) : hn, Fe = Mt({
        get: Te,
        set: _t
      });
      Object.defineProperty(i, he, {
        enumerable: !0,
        configurable: !0,
        get: () => Fe.value,
        set: (qe) => Fe.value = qe
      });
    }
  if (a)
    for (const he in a)
      Zp(a[he], i, n, he);
  if (l) {
    const he = ce(l) ? l.call(n) : l;
    Reflect.ownKeys(he).forEach((ue) => {
      ew(ue, he[ue]);
    });
  }
  c && Df(c, e, "c");
  function xe(he, ue) {
    oe(ue) ? ue.forEach((Te) => he(Te.bind(n))) : ue && he(ue.bind(n));
  }
  if (xe(F0, f), xe(zc, h), xe($0, d), xe(B0, p), xe(L0, g), xe(D0, v), xe(z0, D), xe(W0, M), xe(U0, P), xe(j0, k), xe(Vc, C), xe(q0, z), oe(H))
    if (H.length) {
      const he = e.exposed || (e.exposed = {});
      H.forEach((ue) => {
        Object.defineProperty(he, ue, {
          get: () => n[ue],
          set: (Te) => n[ue] = Te
        });
      });
    } else e.exposed || (e.exposed = {});
  T && e.render === hn && (e.render = T), G != null && (e.inheritAttrs = G), J && (e.components = J), K && (e.directives = K), z && Uc(e);
}
function K0(e, t, n = hn) {
  oe(e) && (e = bl(e));
  for (const i in e) {
    const s = e[i];
    let r;
    Pe(s) ? "default" in s ? r = Ws(
      s.from || i,
      s.default,
      !0
    ) : r = Ws(s.from || i) : r = Ws(s), tt(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[i] = r;
  }
}
function Df(e, t, n) {
  yn(
    oe(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Zp(e, t, n, i) {
  let s = i.includes(".") ? dg(n, i) : () => n[i];
  if (Ve(e)) {
    const r = t[e];
    ce(r) && Ln(s, r);
  } else if (ce(e))
    Ln(s, e.bind(n));
  else if (Pe(e))
    if (oe(e))
      e.forEach((r) => Zp(r, t, n, i));
    else {
      const r = ce(e.handler) ? e.handler.bind(n) : t[e.handler];
      ce(r) && Ln(s, r, e);
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
    (u) => oo(l, u, o, !0)
  ), oo(l, t, o)), Pe(t) && r.set(t, l), l;
}
function oo(e, t, n, i = !1) {
  const { mixins: s, extends: r } = t;
  r && oo(e, r, n, !0), s && s.forEach(
    (o) => oo(e, o, n, !0)
  );
  for (const o in t)
    if (!(i && o === "expose")) {
      const a = Y0[o] || n && n[o];
      e[o] = a ? a(e[o], t[o]) : t[o];
    }
  return e;
}
const Y0 = {
  data: Rf,
  props: Ff,
  emits: Ff,
  // objects
  methods: Ps,
  computed: Ps,
  // lifecycle
  beforeCreate: ut,
  created: ut,
  beforeMount: ut,
  mounted: ut,
  beforeUpdate: ut,
  updated: ut,
  beforeDestroy: ut,
  beforeUnmount: ut,
  destroyed: ut,
  unmounted: ut,
  activated: ut,
  deactivated: ut,
  errorCaptured: ut,
  serverPrefetch: ut,
  // assets
  components: Ps,
  directives: Ps,
  // watch
  watch: J0,
  // provide / inject
  provide: Rf,
  inject: X0
};
function Rf(e, t) {
  return t ? e ? function() {
    return nt(
      ce(e) ? e.call(this, this) : e,
      ce(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function X0(e, t) {
  return Ps(bl(e), bl(t));
}
function bl(e) {
  if (oe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ut(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ps(e, t) {
  return e ? nt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ff(e, t) {
  return e ? oe(e) && oe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : nt(
    /* @__PURE__ */ Object.create(null),
    Lf(e),
    Lf(t ?? {})
  ) : t;
}
function J0(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = nt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = ut(e[i], t[i]);
  return n;
}
function eg() {
  return {
    app: null,
    config: {
      isNativeTag: $b,
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
let Q0 = 0;
function Z0(e, t) {
  return function(i, s = null) {
    ce(i) || (i = nt({}, i)), s != null && !Pe(s) && (s = null);
    const r = eg(), o = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const u = r.app = {
      _uid: Q0++,
      _component: i,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: Dw,
      get config() {
        return r.config;
      },
      set config(c) {
      },
      use(c, ...f) {
        return o.has(c) || (c && ce(c.install) ? (o.add(c), c.install(u, ...f)) : ce(c) && (o.add(c), c(u, ...f))), u;
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
          const d = u._ceVNode || ve(i, s);
          return d.appContext = r, h === !0 ? h = "svg" : h === !1 && (h = void 0), f && t ? t(d, c) : e(d, c, h), l = !0, u._container = c, c.__vue_app__ = u, ta(d.component);
        }
      },
      onUnmount(c) {
        a.push(c);
      },
      unmount() {
        l && (yn(
          a,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(c, f) {
        return r.provides[c] = f, u;
      },
      runWithContext(c) {
        const f = es;
        es = u;
        try {
          return c();
        } finally {
          es = f;
        }
      }
    };
    return u;
  };
}
let es = null;
function ew(e, t) {
  if (Je) {
    let n = Je.provides;
    const i = Je.parent && Je.parent.provides;
    i === n && (n = Je.provides = Object.create(i)), n[e] = t;
  }
}
function Ws(e, t, n = !1) {
  const i = Je || bt;
  if (i || es) {
    const s = es ? es._context.provides : i ? i.parent == null ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && ce(t) ? t.call(i && i.proxy) : t;
  }
}
const tg = {}, ng = () => Object.create(tg), ig = (e) => Object.getPrototypeOf(e) === tg;
function tw(e, t, n, i = !1) {
  const s = {}, r = ng();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), sg(e, t, s, r);
  for (const o in e.propsOptions[0])
    o in s || (s[o] = void 0);
  n ? e.props = i ? s : v0(s) : e.type.props ? e.props = s : e.props = r, e.attrs = r;
}
function nw(e, t, n, i) {
  const {
    props: s,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, a = _e(s), [l] = e.propsOptions;
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
        if (Zo(e.emitsOptions, h))
          continue;
        const d = t[h];
        if (l)
          if (we(r, h))
            d !== r[h] && (r[h] = d, u = !0);
          else {
            const p = Kt(h);
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
    sg(e, t, s, r) && (u = !0);
    let c;
    for (const f in a)
      (!t || // for camelCase
      !we(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Li(f)) === f || !we(t, c))) && (l ? n && // for camelCase
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
        (!t || !we(t, f)) && (delete r[f], u = !0);
  }
  u && Mn(e.attrs, "set", "");
}
function sg(e, t, n, i) {
  const [s, r] = e.propsOptions;
  let o = !1, a;
  if (t)
    for (let l in t) {
      if (js(l))
        continue;
      const u = t[l];
      let c;
      s && we(s, c = Kt(l)) ? !r || !r.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : Zo(e.emitsOptions, l) || (!(l in i) || u !== i[l]) && (i[l] = u, o = !0);
    }
  if (r) {
    const l = _e(n), u = a || Ee;
    for (let c = 0; c < r.length; c++) {
      const f = r[c];
      n[f] = wl(
        s,
        l,
        f,
        u[f],
        e,
        !we(u, f)
      );
    }
  }
  return o;
}
function wl(e, t, n, i, s, r) {
  const o = e[n];
  if (o != null) {
    const a = we(o, "default");
    if (a && i === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && ce(l)) {
        const { propsDefaults: u } = s;
        if (n in u)
          i = u[n];
        else {
          const c = fr(s);
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
    ] && (i === "" || i === Li(n)) && (i = !0));
  }
  return i;
}
const iw = /* @__PURE__ */ new WeakMap();
function rg(e, t, n = !1) {
  const i = n ? iw : t.propsCache, s = i.get(e);
  if (s)
    return s;
  const r = e.props, o = {}, a = [];
  let l = !1;
  if (!ce(e)) {
    const c = (f) => {
      l = !0;
      const [h, d] = rg(f, t, !0);
      nt(o, h), d && a.push(...d);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!r && !l)
    return Pe(e) && i.set(e, Yi), Yi;
  if (oe(r))
    for (let c = 0; c < r.length; c++) {
      const f = Kt(r[c]);
      $f(f) && (o[f] = Ee);
    }
  else if (r)
    for (const c in r) {
      const f = Kt(c);
      if ($f(f)) {
        const h = r[c], d = o[f] = oe(h) || ce(h) ? { type: h } : nt({}, h), p = d.type;
        let g = !1, v = !0;
        if (oe(p))
          for (let w = 0; w < p.length; ++w) {
            const k = p[w], b = ce(k) && k.name;
            if (b === "Boolean") {
              g = !0;
              break;
            } else b === "String" && (v = !1);
          }
        else
          g = ce(p) && p.name === "Boolean";
        d[
          0
          /* shouldCast */
        ] = g, d[
          1
          /* shouldCastTrue */
        ] = v, (g || we(d, "default")) && a.push(f);
      }
    }
  const u = [o, a];
  return Pe(e) && i.set(e, u), u;
}
function $f(e) {
  return e[0] !== "$" && !js(e);
}
const og = (e) => e[0] === "_" || e === "$stable", Hc = (e) => oe(e) ? e.map(an) : [an(e)], sw = (e, t, n) => {
  if (t._n)
    return t;
  const i = P0((...s) => Hc(t(...s)), n);
  return i._c = !1, i;
}, ag = (e, t, n) => {
  const i = e._ctx;
  for (const s in e) {
    if (og(s)) continue;
    const r = e[s];
    if (ce(r))
      t[s] = sw(s, r, i);
    else if (r != null) {
      const o = Hc(r);
      t[s] = () => o;
    }
  }
}, lg = (e, t) => {
  const n = Hc(t);
  e.slots.default = () => n;
}, cg = (e, t, n) => {
  for (const i in t)
    (n || i !== "_") && (e[i] = t[i]);
}, rw = (e, t, n) => {
  const i = e.slots = ng();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (cg(i, t, n), n && wp(i, "_", s, !0)) : ag(t, i);
  } else t && lg(e, t);
}, ow = (e, t, n) => {
  const { vnode: i, slots: s } = e;
  let r = !0, o = Ee;
  if (i.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? r = !1 : cg(s, t, n) : (r = !t.$stable, ag(t, s)), o = t;
  } else t && (lg(e, t), o = { default: 1 });
  if (r)
    for (const a in s)
      !og(a) && o[a] == null && delete s[a];
}, Et = vw;
function aw(e) {
  return lw(e);
}
function lw(e, t) {
  const n = _p();
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
    setScopeId: d = hn,
    insertStaticContent: p
  } = e, g = (E, O, R, W = null, B = null, q = null, Y = void 0, y = null, _ = !!O.dynamicChildren) => {
    if (E === O)
      return;
    E && !Ss(E, O) && (W = qt(E), qe(E, B, q, !0), E = null), O.patchFlag === -2 && (_ = !1, O.dynamicChildren = null);
    const { type: A, ref: j, shapeFlag: V } = O;
    switch (A) {
      case ur:
        v(E, O, R, W);
        break;
      case Ei:
        w(E, O, R, W);
        break;
      case Wr:
        E == null && k(O, R, W, Y);
        break;
      case Be:
        J(
          E,
          O,
          R,
          W,
          B,
          q,
          Y,
          y,
          _
        );
        break;
      default:
        V & 1 ? T(
          E,
          O,
          R,
          W,
          B,
          q,
          Y,
          y,
          _
        ) : V & 6 ? K(
          E,
          O,
          R,
          W,
          B,
          q,
          Y,
          y,
          _
        ) : (V & 64 || V & 128) && A.process(
          E,
          O,
          R,
          W,
          B,
          q,
          Y,
          y,
          _,
          St
        );
    }
    j != null && B && gl(j, E && E.ref, q, O || E, !O);
  }, v = (E, O, R, W) => {
    if (E == null)
      i(
        O.el = a(O.children),
        R,
        W
      );
    else {
      const B = O.el = E.el;
      O.children !== E.children && u(B, O.children);
    }
  }, w = (E, O, R, W) => {
    E == null ? i(
      O.el = l(O.children || ""),
      R,
      W
    ) : O.el = E.el;
  }, k = (E, O, R, W) => {
    [E.el, E.anchor] = p(
      E.children,
      O,
      R,
      W,
      E.el,
      E.anchor
    );
  }, b = ({ el: E, anchor: O }, R, W) => {
    let B;
    for (; E && E !== O; )
      B = h(E), i(E, R, W), E = B;
    i(O, R, W);
  }, C = ({ el: E, anchor: O }) => {
    let R;
    for (; E && E !== O; )
      R = h(E), s(E), E = R;
    s(O);
  }, T = (E, O, R, W, B, q, Y, y, _) => {
    O.type === "svg" ? Y = "svg" : O.type === "math" && (Y = "mathml"), E == null ? M(
      O,
      R,
      W,
      B,
      q,
      Y,
      y,
      _
    ) : z(
      E,
      O,
      B,
      q,
      Y,
      y,
      _
    );
  }, M = (E, O, R, W, B, q, Y, y) => {
    let _, A;
    const { props: j, shapeFlag: V, transition: U, dirs: I } = E;
    if (_ = E.el = o(
      E.type,
      q,
      j && j.is,
      j
    ), V & 8 ? c(_, E.children) : V & 16 && D(
      E.children,
      _,
      null,
      W,
      B,
      Ra(E, q),
      Y,
      y
    ), I && li(E, null, W, "created"), P(_, E, E.scopeId, Y, W), j) {
      for (const ne in j)
        ne !== "value" && !js(ne) && r(_, ne, null, j[ne], q, W);
      "value" in j && r(_, "value", null, j.value, q), (A = j.onVnodeBeforeMount) && tn(A, W, E);
    }
    I && li(E, null, W, "beforeMount");
    const F = cw(B, U);
    F && U.beforeEnter(_), i(_, O, R), ((A = j && j.onVnodeMounted) || F || I) && Et(() => {
      A && tn(A, W, E), F && U.enter(_), I && li(E, null, W, "mounted");
    }, B);
  }, P = (E, O, R, W, B) => {
    if (R && d(E, R), W)
      for (let q = 0; q < W.length; q++)
        d(E, W[q]);
    if (B) {
      let q = B.subTree;
      if (O === q || gg(q.type) && (q.ssContent === O || q.ssFallback === O)) {
        const Y = B.vnode;
        P(
          E,
          Y,
          Y.scopeId,
          Y.slotScopeIds,
          B.parent
        );
      }
    }
  }, D = (E, O, R, W, B, q, Y, y, _ = 0) => {
    for (let A = _; A < E.length; A++) {
      const j = E[A] = y ? Vn(E[A]) : an(E[A]);
      g(
        null,
        j,
        O,
        R,
        W,
        B,
        q,
        Y,
        y
      );
    }
  }, z = (E, O, R, W, B, q, Y) => {
    const y = O.el = E.el;
    let { patchFlag: _, dynamicChildren: A, dirs: j } = O;
    _ |= E.patchFlag & 16;
    const V = E.props || Ee, U = O.props || Ee;
    let I;
    if (R && ci(R, !1), (I = U.onVnodeBeforeUpdate) && tn(I, R, O, E), j && li(O, E, R, "beforeUpdate"), R && ci(R, !0), (V.innerHTML && U.innerHTML == null || V.textContent && U.textContent == null) && c(y, ""), A ? H(
      E.dynamicChildren,
      A,
      y,
      R,
      W,
      Ra(O, B),
      q
    ) : Y || ue(
      E,
      O,
      y,
      null,
      R,
      W,
      Ra(O, B),
      q,
      !1
    ), _ > 0) {
      if (_ & 16)
        G(y, V, U, R, B);
      else if (_ & 2 && V.class !== U.class && r(y, "class", null, U.class, B), _ & 4 && r(y, "style", V.style, U.style, B), _ & 8) {
        const F = O.dynamicProps;
        for (let ne = 0; ne < F.length; ne++) {
          const ie = F[ne], $e = V[ie], Ue = U[ie];
          (Ue !== $e || ie === "value") && r(y, ie, $e, Ue, B, R);
        }
      }
      _ & 1 && E.children !== O.children && c(y, O.children);
    } else !Y && A == null && G(y, V, U, R, B);
    ((I = U.onVnodeUpdated) || j) && Et(() => {
      I && tn(I, R, O, E), j && li(O, E, R, "updated");
    }, W);
  }, H = (E, O, R, W, B, q, Y) => {
    for (let y = 0; y < O.length; y++) {
      const _ = E[y], A = O[y], j = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        _.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (_.type === Be || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ss(_, A) || // - In the case of a component, it could contain anything.
        _.shapeFlag & 70) ? f(_.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          R
        )
      );
      g(
        _,
        A,
        j,
        null,
        W,
        B,
        q,
        Y,
        !0
      );
    }
  }, G = (E, O, R, W, B) => {
    if (O !== R) {
      if (O !== Ee)
        for (const q in O)
          !js(q) && !(q in R) && r(
            E,
            q,
            O[q],
            null,
            B,
            W
          );
      for (const q in R) {
        if (js(q)) continue;
        const Y = R[q], y = O[q];
        Y !== y && q !== "value" && r(E, q, y, Y, B, W);
      }
      "value" in R && r(E, "value", O.value, R.value, B);
    }
  }, J = (E, O, R, W, B, q, Y, y, _) => {
    const A = O.el = E ? E.el : a(""), j = O.anchor = E ? E.anchor : a("");
    let { patchFlag: V, dynamicChildren: U, slotScopeIds: I } = O;
    I && (y = y ? y.concat(I) : I), E == null ? (i(A, R, W), i(j, R, W), D(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      O.children || [],
      R,
      j,
      B,
      q,
      Y,
      y,
      _
    )) : V > 0 && V & 64 && U && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    E.dynamicChildren ? (H(
      E.dynamicChildren,
      U,
      R,
      B,
      q,
      Y,
      y
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (O.key != null || B && O === B.subTree) && ug(
      E,
      O,
      !0
      /* shallow */
    )) : ue(
      E,
      O,
      R,
      j,
      B,
      q,
      Y,
      y,
      _
    );
  }, K = (E, O, R, W, B, q, Y, y, _) => {
    O.slotScopeIds = y, E == null ? O.shapeFlag & 512 ? B.ctx.activate(
      O,
      R,
      W,
      Y,
      _
    ) : le(
      O,
      R,
      W,
      B,
      q,
      Y,
      _
    ) : Ze(E, O, _);
  }, le = (E, O, R, W, B, q, Y) => {
    const y = E.component = Aw(
      E,
      W,
      B
    );
    if (Wc(E) && (y.ctx.renderer = St), Ow(y, !1, Y), y.asyncDep) {
      if (B && B.registerDep(y, xe, Y), !E.el) {
        const _ = y.subTree = ve(Ei);
        w(null, _, O, R);
      }
    } else
      xe(
        y,
        E,
        O,
        R,
        B,
        q,
        Y
      );
  }, Ze = (E, O, R) => {
    const W = O.component = E.component;
    if (bw(E, O, R))
      if (W.asyncDep && !W.asyncResolved) {
        he(W, O, R);
        return;
      } else
        W.next = O, W.update();
    else
      O.el = E.el, W.vnode = O;
  }, xe = (E, O, R, W, B, q, Y) => {
    const y = () => {
      if (E.isMounted) {
        let { next: V, bu: U, u: I, parent: F, vnode: ne } = E;
        {
          const ct = fg(E);
          if (ct) {
            V && (V.el = ne.el, he(E, V, Y)), ct.asyncDep.then(() => {
              E.isUnmounted || y();
            });
            return;
          }
        }
        let ie = V, $e;
        ci(E, !1), V ? (V.el = ne.el, he(E, V, Y)) : V = ne, U && Ur(U), ($e = V.props && V.props.onVnodeBeforeUpdate) && tn($e, F, V, ne), ci(E, !0);
        const Ue = Fa(E), Xe = E.subTree;
        E.subTree = Ue, g(
          Xe,
          Ue,
          // parent may have changed if it's in a teleport
          f(Xe.el),
          // anchor may have changed if it's in a fragment
          qt(Xe),
          E,
          B,
          q
        ), V.el = Ue.el, ie === null && ww(E, Ue.el), I && Et(I, B), ($e = V.props && V.props.onVnodeUpdated) && Et(
          () => tn($e, F, V, ne),
          B
        );
      } else {
        let V;
        const { el: U, props: I } = O, { bm: F, m: ne, parent: ie, root: $e, type: Ue } = E, Xe = qs(O);
        if (ci(E, !1), F && Ur(F), !Xe && (V = I && I.onVnodeBeforeMount) && tn(V, ie, O), ci(E, !0), U && $i) {
          const ct = () => {
            E.subTree = Fa(E), $i(
              U,
              E.subTree,
              E,
              B,
              null
            );
          };
          Xe && Ue.__asyncHydrate ? Ue.__asyncHydrate(
            U,
            E,
            ct
          ) : ct();
        } else {
          $e.ce && $e.ce._injectChildStyle(Ue);
          const ct = E.subTree = Fa(E);
          g(
            null,
            ct,
            R,
            W,
            E,
            B,
            q
          ), O.el = ct.el;
        }
        if (ne && Et(ne, B), !Xe && (V = I && I.onVnodeMounted)) {
          const ct = O;
          Et(
            () => tn(V, ie, ct),
            B
          );
        }
        (O.shapeFlag & 256 || ie && qs(ie.vnode) && ie.vnode.shapeFlag & 256) && E.a && Et(E.a, B), E.isMounted = !0, O = R = W = null;
      }
    };
    E.scope.on();
    const _ = E.effect = new Tp(y);
    E.scope.off();
    const A = E.update = _.run.bind(_), j = E.job = _.runIfDirty.bind(_);
    j.i = E, j.id = E.uid, _.scheduler = () => jc(j), ci(E, !0), A();
  }, he = (E, O, R) => {
    O.component = E;
    const W = E.vnode.props;
    E.vnode = O, E.next = null, nw(E, O.props, W, R), ow(E, O.children, R), ni(), Nf(E), ii();
  }, ue = (E, O, R, W, B, q, Y, y, _ = !1) => {
    const A = E && E.children, j = E ? E.shapeFlag : 0, V = O.children, { patchFlag: U, shapeFlag: I } = O;
    if (U > 0) {
      if (U & 128) {
        _t(
          A,
          V,
          R,
          W,
          B,
          q,
          Y,
          y,
          _
        );
        return;
      } else if (U & 256) {
        Te(
          A,
          V,
          R,
          W,
          B,
          q,
          Y,
          y,
          _
        );
        return;
      }
    }
    I & 8 ? (j & 16 && xt(A, B, q), V !== A && c(R, V)) : j & 16 ? I & 16 ? _t(
      A,
      V,
      R,
      W,
      B,
      q,
      Y,
      y,
      _
    ) : xt(A, B, q, !0) : (j & 8 && c(R, ""), I & 16 && D(
      V,
      R,
      W,
      B,
      q,
      Y,
      y,
      _
    ));
  }, Te = (E, O, R, W, B, q, Y, y, _) => {
    E = E || Yi, O = O || Yi;
    const A = E.length, j = O.length, V = Math.min(A, j);
    let U;
    for (U = 0; U < V; U++) {
      const I = O[U] = _ ? Vn(O[U]) : an(O[U]);
      g(
        E[U],
        I,
        R,
        null,
        B,
        q,
        Y,
        y,
        _
      );
    }
    A > j ? xt(
      E,
      B,
      q,
      !0,
      !1,
      V
    ) : D(
      O,
      R,
      W,
      B,
      q,
      Y,
      y,
      _,
      V
    );
  }, _t = (E, O, R, W, B, q, Y, y, _) => {
    let A = 0;
    const j = O.length;
    let V = E.length - 1, U = j - 1;
    for (; A <= V && A <= U; ) {
      const I = E[A], F = O[A] = _ ? Vn(O[A]) : an(O[A]);
      if (Ss(I, F))
        g(
          I,
          F,
          R,
          null,
          B,
          q,
          Y,
          y,
          _
        );
      else
        break;
      A++;
    }
    for (; A <= V && A <= U; ) {
      const I = E[V], F = O[U] = _ ? Vn(O[U]) : an(O[U]);
      if (Ss(I, F))
        g(
          I,
          F,
          R,
          null,
          B,
          q,
          Y,
          y,
          _
        );
      else
        break;
      V--, U--;
    }
    if (A > V) {
      if (A <= U) {
        const I = U + 1, F = I < j ? O[I].el : W;
        for (; A <= U; )
          g(
            null,
            O[A] = _ ? Vn(O[A]) : an(O[A]),
            R,
            F,
            B,
            q,
            Y,
            y,
            _
          ), A++;
      }
    } else if (A > U)
      for (; A <= V; )
        qe(E[A], B, q, !0), A++;
    else {
      const I = A, F = A, ne = /* @__PURE__ */ new Map();
      for (A = F; A <= U; A++) {
        const kt = O[A] = _ ? Vn(O[A]) : an(O[A]);
        kt.key != null && ne.set(kt.key, A);
      }
      let ie, $e = 0;
      const Ue = U - F + 1;
      let Xe = !1, ct = 0;
      const Bi = new Array(Ue);
      for (A = 0; A < Ue; A++) Bi[A] = 0;
      for (A = I; A <= V; A++) {
        const kt = E[A];
        if ($e >= Ue) {
          qe(kt, B, q, !0);
          continue;
        }
        let en;
        if (kt.key != null)
          en = ne.get(kt.key);
        else
          for (ie = F; ie <= U; ie++)
            if (Bi[ie - F] === 0 && Ss(kt, O[ie])) {
              en = ie;
              break;
            }
        en === void 0 ? qe(kt, B, q, !0) : (Bi[en - F] = A + 1, en >= ct ? ct = en : Xe = !0, g(
          kt,
          O[en],
          R,
          null,
          B,
          q,
          Y,
          y,
          _
        ), $e++);
      }
      const _f = Xe ? uw(Bi) : Yi;
      for (ie = _f.length - 1, A = Ue - 1; A >= 0; A--) {
        const kt = F + A, en = O[kt], xf = kt + 1 < j ? O[kt + 1].el : W;
        Bi[A] === 0 ? g(
          null,
          en,
          R,
          xf,
          B,
          q,
          Y,
          y,
          _
        ) : Xe && (ie < 0 || A !== _f[ie] ? Fe(en, R, xf, 2) : ie--);
      }
    }
  }, Fe = (E, O, R, W, B = null) => {
    const { el: q, type: Y, transition: y, children: _, shapeFlag: A } = E;
    if (A & 6) {
      Fe(E.component.subTree, O, R, W);
      return;
    }
    if (A & 128) {
      E.suspense.move(O, R, W);
      return;
    }
    if (A & 64) {
      Y.move(E, O, R, St);
      return;
    }
    if (Y === Be) {
      i(q, O, R);
      for (let V = 0; V < _.length; V++)
        Fe(_[V], O, R, W);
      i(E.anchor, O, R);
      return;
    }
    if (Y === Wr) {
      b(E, O, R);
      return;
    }
    if (W !== 2 && A & 1 && y)
      if (W === 0)
        y.beforeEnter(q), i(q, O, R), Et(() => y.enter(q), B);
      else {
        const { leave: V, delayLeave: U, afterLeave: I } = y, F = () => i(q, O, R), ne = () => {
          V(q, () => {
            F(), I && I();
          });
        };
        U ? U(q, F, ne) : ne();
      }
    else
      i(q, O, R);
  }, qe = (E, O, R, W = !1, B = !1) => {
    const {
      type: q,
      props: Y,
      ref: y,
      children: _,
      dynamicChildren: A,
      shapeFlag: j,
      patchFlag: V,
      dirs: U,
      cacheIndex: I
    } = E;
    if (V === -2 && (B = !1), y != null && gl(y, null, R, E, !0), I != null && (O.renderCache[I] = void 0), j & 256) {
      O.ctx.deactivate(E);
      return;
    }
    const F = j & 1 && U, ne = !qs(E);
    let ie;
    if (ne && (ie = Y && Y.onVnodeBeforeUnmount) && tn(ie, O, E), j & 6)
      lt(E.component, R, W);
    else {
      if (j & 128) {
        E.suspense.unmount(R, W);
        return;
      }
      F && li(E, null, O, "beforeUnmount"), j & 64 ? E.type.remove(
        E,
        O,
        R,
        St,
        W
      ) : A && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !A.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (q !== Be || V > 0 && V & 64) ? xt(
        A,
        O,
        R,
        !1,
        !0
      ) : (q === Be && V & 384 || !B && j & 16) && xt(_, O, R), W && Jt(E);
    }
    (ne && (ie = Y && Y.onVnodeUnmounted) || F) && Et(() => {
      ie && tn(ie, O, E), F && li(E, null, O, "unmounted");
    }, R);
  }, Jt = (E) => {
    const { type: O, el: R, anchor: W, transition: B } = E;
    if (O === Be) {
      Qt(R, W);
      return;
    }
    if (O === Wr) {
      C(E);
      return;
    }
    const q = () => {
      s(R), B && !B.persisted && B.afterLeave && B.afterLeave();
    };
    if (E.shapeFlag & 1 && B && !B.persisted) {
      const { leave: Y, delayLeave: y } = B, _ = () => Y(R, q);
      y ? y(E.el, q, _) : _();
    } else
      q();
  }, Qt = (E, O) => {
    let R;
    for (; E !== O; )
      R = h(E), s(E), E = R;
    s(O);
  }, lt = (E, O, R) => {
    const { bum: W, scope: B, job: q, subTree: Y, um: y, m: _, a: A } = E;
    Bf(_), Bf(A), W && Ur(W), B.stop(), q && (q.flags |= 8, qe(Y, E, O, R)), y && Et(y, O), Et(() => {
      E.isUnmounted = !0;
    }, O), O && O.pendingBranch && !O.isUnmounted && E.asyncDep && !E.asyncResolved && E.suspenseId === O.pendingId && (O.deps--, O.deps === 0 && O.resolve());
  }, xt = (E, O, R, W = !1, B = !1, q = 0) => {
    for (let Y = q; Y < E.length; Y++)
      qe(E[Y], O, R, W, B);
  }, qt = (E) => {
    if (E.shapeFlag & 6)
      return qt(E.component.subTree);
    if (E.shapeFlag & 128)
      return E.suspense.next();
    const O = h(E.anchor || E.el), R = O && O[N0];
    return R ? h(R) : O;
  };
  let Ut = !1;
  const Zt = (E, O, R) => {
    E == null ? O._vnode && qe(O._vnode, null, null, !0) : g(
      O._vnode || null,
      E,
      O,
      null,
      null,
      null,
      R
    ), O._vnode = E, Ut || (Ut = !0, Nf(), Gp(), Ut = !1);
  }, St = {
    p: g,
    um: qe,
    m: Fe,
    r: Jt,
    mt: le,
    mc: D,
    pc: ue,
    pbc: H,
    n: qt,
    o: e
  };
  let _n, $i;
  return {
    render: Zt,
    hydrate: _n,
    createApp: Z0(Zt, _n)
  };
}
function Ra({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ci({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function cw(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ug(e, t, n = !1) {
  const i = e.children, s = t.children;
  if (oe(i) && oe(s))
    for (let r = 0; r < i.length; r++) {
      const o = i[r];
      let a = s[r];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[r] = Vn(s[r]), a.el = o.el), !n && a.patchFlag !== -2 && ug(o, a)), a.type === ur && (a.el = o.el);
    }
}
function uw(e) {
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
function fg(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : fg(t);
}
function Bf(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const fw = Symbol.for("v-scx"), hw = () => Ws(fw);
function Ln(e, t, n) {
  return hg(e, t, n);
}
function hg(e, t, n = Ee) {
  const { immediate: i, deep: s, flush: r, once: o } = n, a = nt({}, n);
  let l;
  if (hr)
    if (r === "sync") {
      const h = hw();
      l = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!t || i)
      a.once = !0;
    else {
      const h = () => {
      };
      return h.stop = hn, h.resume = hn, h.pause = hn, h;
    }
  const u = Je;
  a.call = (h, d, p) => yn(h, u, d, p);
  let c = !1;
  r === "post" ? a.scheduler = (h) => {
    Et(h, u && u.suspense);
  } : r !== "sync" && (c = !0, a.scheduler = (h, d) => {
    d ? h() : jc(h);
  }), a.augmentJob = (h) => {
    t && (h.flags |= 4), c && (h.flags |= 2, u && (h.id = u.uid, h.i = u));
  };
  const f = E0(e, t, a);
  return l && l.push(f), f;
}
function dw(e, t, n) {
  const i = this.proxy, s = Ve(e) ? e.includes(".") ? dg(i, e) : () => i[e] : e.bind(i, i);
  let r;
  ce(t) ? r = t : (r = t.handler, n = t);
  const o = fr(this), a = hg(s, r.bind(i), n);
  return o(), a;
}
function dg(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let s = 0; s < n.length && i; s++)
      i = i[n[s]];
    return i;
  };
}
const pw = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Kt(t)}Modifiers`] || e[`${Li(t)}Modifiers`];
function gw(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || Ee;
  let s = n;
  const r = t.startsWith("update:"), o = r && pw(i, t.slice(7));
  o && (o.trim && (s = n.map((c) => Ve(c) ? c.trim() : c)), o.number && (s = n.map(vp)));
  let a, l = i[a = Oa(t)] || // also try camelCase event handler (#2249)
  i[a = Oa(Kt(t))];
  !l && r && (l = i[a = Oa(Li(t))]), l && yn(
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
    e.emitted[a] = !0, yn(
      u,
      e,
      6,
      s
    );
  }
}
function pg(e, t, n = !1) {
  const i = t.emitsCache, s = i.get(e);
  if (s !== void 0)
    return s;
  const r = e.emits;
  let o = {}, a = !1;
  if (!ce(e)) {
    const l = (u) => {
      const c = pg(u, t, !0);
      c && (a = !0, nt(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !r && !a ? (Pe(e) && i.set(e, null), null) : (oe(r) ? r.forEach((l) => o[l] = null) : nt(o, r), Pe(e) && i.set(e, o), o);
}
function Zo(e, t) {
  return !e || !Uo(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), we(e, t[0].toLowerCase() + t.slice(1)) || we(e, Li(t)) || we(e, t));
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
    inheritAttrs: g
  } = e, v = ro(e);
  let w, k;
  try {
    if (n.shapeFlag & 4) {
      const C = s || i, T = C;
      w = an(
        u.call(
          T,
          C,
          c,
          f,
          d,
          h,
          p
        )
      ), k = a;
    } else {
      const C = t;
      w = an(
        C.length > 1 ? C(
          f,
          { attrs: a, slots: o, emit: l }
        ) : C(
          f,
          null
        )
      ), k = t.props ? a : mw(a);
    }
  } catch (C) {
    zs.length = 0, cr(C, e, 1), w = ve(Ei);
  }
  let b = w;
  if (k && g !== !1) {
    const C = Object.keys(k), { shapeFlag: T } = b;
    C.length && T & 7 && (r && C.some(Cc) && (k = yw(
      k,
      r
    )), b = rs(b, k, !1, !0));
  }
  return n.dirs && (b = rs(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && qc(b, n.transition), w = b, ro(v), w;
}
const mw = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Uo(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, yw = (e, t) => {
  const n = {};
  for (const i in e)
    (!Cc(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function bw(e, t, n) {
  const { props: i, children: s, component: r } = e, { props: o, children: a, patchFlag: l } = t, u = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? jf(i, o, u) : !!o;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const h = c[f];
        if (o[h] !== i[h] && !Zo(u, h))
          return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable) ? !0 : i === o ? !1 : i ? o ? jf(i, o, u) : !0 : !!o;
  return !1;
}
function jf(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < i.length; s++) {
    const r = i[s];
    if (t[r] !== e[r] && !Zo(n, r))
      return !0;
  }
  return !1;
}
function ww({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const gg = (e) => e.__isSuspense;
function vw(e, t) {
  t && t.pendingBranch ? oe(e) ? t.effects.push(...e) : t.effects.push(e) : O0(e);
}
const Be = Symbol.for("v-fgt"), ur = Symbol.for("v-txt"), Ei = Symbol.for("v-cmt"), Wr = Symbol.for("v-stc"), zs = [];
let At = null;
function te(e = !1) {
  zs.push(At = e ? null : []);
}
function _w() {
  zs.pop(), At = zs[zs.length - 1] || null;
}
let Zs = 1;
function qf(e) {
  Zs += e, e < 0 && At && (At.hasOnce = !0);
}
function mg(e) {
  return e.dynamicChildren = Zs > 0 ? At || Yi : null, _w(), Zs > 0 && At && At.push(e), e;
}
function ae(e, t, n, i, s, r) {
  return mg(
    se(
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
function on(e, t, n, i, s) {
  return mg(
    ve(
      e,
      t,
      n,
      i,
      s,
      !0
    )
  );
}
function ao(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ss(e, t) {
  return e.type === t.type && e.key === t.key;
}
const yg = ({ key: e }) => e ?? null, zr = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ve(e) || tt(e) || ce(e) ? { i: bt, r: e, k: t, f: !!n } : e : null);
function se(e, t = null, n = null, i = 0, s = null, r = e === Be ? 0 : 1, o = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && yg(t),
    ref: t && zr(t),
    scopeId: Kp,
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
    ctx: bt
  };
  return a ? (Kc(l, n), r & 128 && e.normalize(l)) : n && (l.shapeFlag |= Ve(n) ? 8 : 16), Zs > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  At && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && At.push(l), l;
}
const ve = xw;
function xw(e, t = null, n = null, i = 0, s = null, r = !1) {
  if ((!e || e === Jp) && (e = Ei), ao(e)) {
    const a = rs(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Kc(a, n), Zs > 0 && !r && At && (a.shapeFlag & 6 ? At[At.indexOf(e)] = a : At.push(a)), a.patchFlag = -2, a;
  }
  if (Lw(e) && (e = e.__vccOpts), t) {
    t = Sw(t);
    let { class: a, style: l } = t;
    a && !Ve(a) && (t.class = Gt(a)), Pe(l) && (Fc(l) && !oe(l) && (l = nt({}, l)), t.style = He(l));
  }
  const o = Ve(e) ? 1 : gg(e) ? 128 : I0(e) ? 64 : Pe(e) ? 4 : ce(e) ? 2 : 0;
  return se(
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
function Sw(e) {
  return e ? Fc(e) || ig(e) ? nt({}, e) : e : null;
}
function rs(e, t, n = !1, i = !1) {
  const { props: s, ref: r, patchFlag: o, children: a, transition: l } = e, u = t ? Cw(s || {}, t) : s, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && yg(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? oe(r) ? r.concat(zr(t)) : [r, zr(t)] : zr(t)
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
    patchFlag: t && e.type !== Be ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && rs(e.ssContent),
    ssFallback: e.ssFallback && rs(e.ssFallback),
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
function Ns(e = " ", t = 0) {
  return ve(ur, null, e, t);
}
function kw(e, t) {
  const n = ve(Wr, null, e);
  return n.staticCount = t, n;
}
function Ne(e = "", t = !1) {
  return t ? (te(), on(Ei, null, e)) : ve(Ei, null, e);
}
function an(e) {
  return e == null || typeof e == "boolean" ? ve(Ei) : oe(e) ? ve(
    Be,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ao(e) ? Vn(e) : ve(ur, null, String(e));
}
function Vn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : rs(e);
}
function Kc(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (oe(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Kc(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !ig(t) ? t._ctx = bt : s === 3 && bt && (bt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ce(t) ? (t = { default: t, _ctx: bt }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [Ns(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Cw(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const s in i)
      if (s === "class")
        t.class !== i.class && (t.class = Gt([t.class, i.class]));
      else if (s === "style")
        t.style = He([t.style, i.style]);
      else if (Uo(s)) {
        const r = t[s], o = i[s];
        o && r !== o && !(oe(r) && r.includes(o)) && (t[s] = r ? [].concat(r, o) : o);
      } else s !== "" && (t[s] = i[s]);
  }
  return t;
}
function tn(e, t, n, i = null) {
  yn(e, t, 7, [
    n,
    i
  ]);
}
const Ew = eg();
let Tw = 0;
function Aw(e, t, n) {
  const i = e.type, s = (t ? t.appContext : e.appContext) || Ew, r = {
    uid: Tw++,
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
    scope: new Cp(
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
    propsOptions: rg(i, s),
    emitsOptions: pg(i, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ee,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: Ee,
    data: Ee,
    props: Ee,
    attrs: Ee,
    slots: Ee,
    refs: Ee,
    setupState: Ee,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = gw.bind(null, r), e.ce && e.ce(r), r;
}
let Je = null;
const ea = () => Je || bt;
let lo, vl;
{
  const e = _p(), t = (n, i) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(i), (r) => {
      s.length > 1 ? s.forEach((o) => o(r)) : s[0](r);
    };
  };
  lo = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Je = n
  ), vl = t(
    "__VUE_SSR_SETTERS__",
    (n) => hr = n
  );
}
const fr = (e) => {
  const t = Je;
  return lo(e), e.scope.on(), () => {
    e.scope.off(), lo(t);
  };
}, Uf = () => {
  Je && Je.scope.off(), lo(null);
};
function bg(e) {
  return e.vnode.shapeFlag & 4;
}
let hr = !1;
function Ow(e, t = !1, n = !1) {
  t && vl(t);
  const { props: i, children: s } = e.vnode, r = bg(e);
  tw(e, i, r, t), rw(e, s, n);
  const o = r ? Pw(e, t) : void 0;
  return t && vl(!1), o;
}
function Pw(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, G0);
  const { setup: i } = n;
  if (i) {
    const s = e.setupContext = i.length > 1 ? Iw(e) : null, r = fr(e);
    ni();
    const o = lr(
      i,
      e,
      0,
      [
        e.props,
        s
      ]
    );
    if (ii(), r(), mp(o)) {
      if (qs(e) || Uc(e), o.then(Uf, Uf), t)
        return o.then((a) => {
          Wf(e, a, t);
        }).catch((a) => {
          cr(a, e, 0);
        });
      e.asyncDep = o;
    } else
      Wf(e, o, t);
  } else
    wg(e, t);
}
function Wf(e, t, n) {
  ce(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Pe(t) && (e.setupState = Wp(t)), wg(e, n);
}
let zf;
function wg(e, t, n) {
  const i = e.type;
  if (!e.render) {
    if (!t && zf && !i.render) {
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
        i.render = zf(s, u);
      }
    }
    e.render = i.render || hn;
  }
  {
    const s = fr(e);
    ni();
    try {
      H0(e);
    } finally {
      ii(), s();
    }
  }
}
const Nw = {
  get(e, t) {
    return at(e, "get", ""), e[t];
  }
};
function Iw(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Nw),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ta(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Wp(Yo(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Us)
        return Us[n](e);
    },
    has(t, n) {
      return n in t || n in Us;
    }
  })) : e.proxy;
}
function Mw(e, t = !0) {
  return ce(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Lw(e) {
  return ce(e) && "__vccOpts" in e;
}
const Mt = (e, t) => k0(e, t, hr);
function Yc(e, t, n) {
  const i = arguments.length;
  return i === 2 ? Pe(t) && !oe(t) ? ao(t) ? ve(e, null, [t]) : ve(e, t) : ve(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && ao(n) && (n = [n]), ve(e, t, n));
}
const Dw = "3.5.9";
/**
* @vue/runtime-dom v3.5.9
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let _l;
const Vf = typeof window < "u" && window.trustedTypes;
if (Vf)
  try {
    _l = /* @__PURE__ */ Vf.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const vg = _l ? (e) => _l.createHTML(e) : (e) => e, Rw = "http://www.w3.org/2000/svg", Fw = "http://www.w3.org/1998/Math/MathML", An = typeof document < "u" ? document : null, Gf = An && /* @__PURE__ */ An.createElement("template"), $w = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const s = t === "svg" ? An.createElementNS(Rw, e) : t === "mathml" ? An.createElementNS(Fw, e) : n ? An.createElement(e, { is: n }) : An.createElement(e);
    return e === "select" && i && i.multiple != null && s.setAttribute("multiple", i.multiple), s;
  },
  createText: (e) => An.createTextNode(e),
  createComment: (e) => An.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => An.querySelector(e),
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
      Gf.innerHTML = vg(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Gf.content;
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
}, Bw = Symbol("_vtc");
function jw(e, t, n) {
  const i = e[Bw];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const co = Symbol("_vod"), _g = Symbol("_vsh"), xg = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[co] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : ks(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), ks(e, !0), i.enter(e)) : i.leave(e, () => {
      ks(e, !1);
    }) : ks(e, t));
  },
  beforeUnmount(e, { value: t }) {
    ks(e, t);
  }
};
function ks(e, t) {
  e.style.display = t ? e[co] : "none", e[_g] = !t;
}
const qw = Symbol(""), Uw = /(^|;)\s*display\s*:/;
function Ww(e, t, n) {
  const i = e.style, s = Ve(n);
  let r = !1;
  if (n && !s) {
    if (t)
      if (Ve(t))
        for (const o of t.split(";")) {
          const a = o.slice(0, o.indexOf(":")).trim();
          n[a] == null && Vr(i, a, "");
        }
      else
        for (const o in t)
          n[o] == null && Vr(i, o, "");
    for (const o in n)
      o === "display" && (r = !0), Vr(i, o, n[o]);
  } else if (s) {
    if (t !== n) {
      const o = i[qw];
      o && (n += ";" + o), i.cssText = n, r = Uw.test(n);
    }
  } else t && e.removeAttribute("style");
  co in e && (e[co] = r ? i.display : "", e[_g] && (i.display = "none"));
}
const Hf = /\s*!important$/;
function Vr(e, t, n) {
  if (oe(n))
    n.forEach((i) => Vr(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = zw(e, t);
    Hf.test(n) ? e.setProperty(
      Li(i),
      n.replace(Hf, ""),
      "important"
    ) : e[i] = n;
  }
}
const Kf = ["Webkit", "Moz", "ms"], $a = {};
function zw(e, t) {
  const n = $a[t];
  if (n)
    return n;
  let i = Kt(t);
  if (i !== "filter" && i in e)
    return $a[t] = i;
  i = Vo(i);
  for (let s = 0; s < Kf.length; s++) {
    const r = Kf[s] + i;
    if (r in e)
      return $a[t] = r;
  }
  return t;
}
const Yf = "http://www.w3.org/1999/xlink";
function Xf(e, t, n, i, s, r = Kb(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Yf, t.slice(6, t.length)) : e.setAttributeNS(Yf, t, n) : n == null || r && !xp(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : mn(n) ? String(n) : n
  );
}
function Vw(e, t, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? vg(n) : n);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const o = s === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (o !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let r = !1;
  if (n === "" || n == null) {
    const o = typeof e[t];
    o === "boolean" ? n = xp(n) : n == null && o === "string" ? (n = "", r = !0) : o === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  r && e.removeAttribute(t);
}
function Sg(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function Gw(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const Jf = Symbol("_vei");
function Hw(e, t, n, i, s = null) {
  const r = e[Jf] || (e[Jf] = {}), o = r[t];
  if (i && o)
    o.value = i;
  else {
    const [a, l] = Kw(t);
    if (i) {
      const u = r[t] = Jw(
        i,
        s
      );
      Sg(e, a, u, l);
    } else o && (Gw(e, a, o, l), r[t] = void 0);
  }
}
const Qf = /(?:Once|Passive|Capture)$/;
function Kw(e) {
  let t;
  if (Qf.test(e)) {
    t = {};
    let i;
    for (; i = e.match(Qf); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Li(e.slice(2)), t];
}
let Ba = 0;
const Yw = /* @__PURE__ */ Promise.resolve(), Xw = () => Ba || (Yw.then(() => Ba = 0), Ba = Date.now());
function Jw(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    yn(
      Qw(i, n.value),
      t,
      5,
      [i]
    );
  };
  return n.value = e, n.attached = Xw(), n;
}
function Qw(e, t) {
  if (oe(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (i) => (s) => !s._stopped && i && i(s)
    );
  } else
    return t;
}
const Zf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Zw = (e, t, n, i, s, r) => {
  const o = s === "svg";
  t === "class" ? jw(e, i, o) : t === "style" ? Ww(e, n, i) : Uo(t) ? Cc(t) || Hw(e, t, n, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : e1(e, t, i, o)) ? (Vw(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Xf(e, t, i, o, r, t !== "value")) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Xf(e, t, i, o));
};
function e1(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Zf(t) && ce(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Zf(t) && Ve(n) ? !1 : !!(t in e || e._isVueCE && (/[A-Z]/.test(t) || !Ve(n)));
}
const eh = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return oe(t) ? (n) => Ur(t, n) : t;
}, ja = Symbol("_assign"), t1 = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, i) {
    const s = Wo(t);
    Sg(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (o) => o.selected).map(
        (o) => n ? vp(uo(o)) : uo(o)
      );
      e[ja](
        e.multiple ? s ? new Set(r) : r : r[0]
      ), e._assigning = !0, Xo(() => {
        e._assigning = !1;
      });
    }), e[ja] = eh(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    th(e, t);
  },
  beforeUpdate(e, t, n) {
    e[ja] = eh(n);
  },
  updated(e, { value: t }) {
    e._assigning || th(e, t);
  }
};
function th(e, t) {
  const n = e.multiple, i = oe(t);
  if (!(n && !i && !Wo(t))) {
    for (let s = 0, r = e.options.length; s < r; s++) {
      const o = e.options[s], a = uo(o);
      if (n)
        if (i) {
          const l = typeof a;
          l === "string" || l === "number" ? o.selected = t.some((u) => String(u) === String(a)) : o.selected = Xb(t, a) > -1;
        } else
          o.selected = t.has(a);
      else if (Go(uo(o), t)) {
        e.selectedIndex !== s && (e.selectedIndex = s);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function uo(e) {
  return "_value" in e ? e._value : e.value;
}
const n1 = ["ctrl", "shift", "alt", "meta"], i1 = {
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
  exact: (e, t) => n1.some((n) => e[`${n}Key`] && !t.includes(n))
}, FI = (e, t) => {
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = (s, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const a = i1[t[o]];
      if (a && a(s, t)) return;
    }
    return e(s, ...r);
  });
}, s1 = /* @__PURE__ */ nt({ patchProp: Zw }, $w);
let nh;
function r1() {
  return nh || (nh = aw(s1));
}
const o1 = (...e) => {
  const t = r1().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const s = l1(i);
    if (!s) return;
    const r = t._component;
    !ce(r) && !r.render && !r.template && (r.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const o = n(s, !1, a1(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
  }, t;
};
function a1(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function l1(e) {
  return Ve(e) ? document.querySelector(e) : e;
}
/*!
 * shared v9.14.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
const fo = typeof window < "u", si = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), c1 = (e, t, n) => u1({ l: e, k: t, s: n }), u1 = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Qe = (e) => typeof e == "number" && isFinite(e), f1 = (e) => Cg(e) === "[object Date]", ho = (e) => Cg(e) === "[object RegExp]", na = (e) => ge(e) && Object.keys(e).length === 0, ot = Object.assign;
let ih;
const Xc = () => ih || (ih = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function sh(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const h1 = Object.prototype.hasOwnProperty;
function po(e, t) {
  return h1.call(e, t);
}
const Ye = Array.isArray, je = (e) => typeof e == "function", ee = (e) => typeof e == "string", Re = (e) => typeof e == "boolean", ye = (e) => e !== null && typeof e == "object", d1 = (e) => ye(e) && je(e.then) && je(e.catch), kg = Object.prototype.toString, Cg = (e) => kg.call(e), ge = (e) => {
  if (!ye(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, p1 = (e) => e == null ? "" : Ye(e) || ge(e) && e.toString === kg ? JSON.stringify(e, null, 2) : String(e);
function g1(e, t = "") {
  return e.reduce((n, i, s) => s === 0 ? n + i : n + t + i, "");
}
function ia(e) {
  let t = e;
  return () => ++t;
}
function m1(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Ar = (e) => !ye(e) || Ye(e);
function Gr(e, t) {
  if (Ar(e) || Ar(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: i, des: s } = n.pop();
    Object.keys(i).forEach((r) => {
      ye(i[r]) && !ye(s[r]) && (s[r] = Array.isArray(i[r]) ? [] : {}), Ar(s[r]) || Ar(i[r]) ? s[r] = i[r] : n.push({ src: i[r], des: s[r] });
    });
  }
}
/*!
 * message-compiler v9.14.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
function y1(e, t, n) {
  return { line: e, column: t, offset: n };
}
function go(e, t, n) {
  return { start: e, end: t };
}
const b1 = /\{([0-9a-zA-Z]+)\}/g;
function Eg(e, ...t) {
  return t.length === 1 && w1(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(b1, (n, i) => t.hasOwnProperty(i) ? t[i] : "");
}
const Tg = Object.assign, rh = (e) => typeof e == "string", w1 = (e) => e !== null && typeof e == "object";
function Ag(e, t = "") {
  return e.reduce((n, i, s) => s === 0 ? n + i : n + t + i, "");
}
const Jc = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2
}, v1 = {
  [Jc.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
};
function _1(e, t, ...n) {
  const i = Eg(v1[e], ...n || []), s = { message: String(i), code: e };
  return t && (s.location = t), s;
}
const re = {
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
}, x1 = {
  // tokenizer error messages
  [re.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [re.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [re.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [re.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [re.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [re.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [re.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [re.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [re.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [re.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [re.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [re.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [re.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [re.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [re.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [re.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function ms(e, t, n = {}) {
  const { domain: i, messages: s, args: r } = n, o = Eg((s || x1)[e] || "", ...r || []), a = new SyntaxError(String(o));
  return a.code = e, t && (a.location = t), a.domain = i, a;
}
function S1(e) {
  throw e;
}
const Sn = " ", k1 = "\r", ft = `
`, C1 = "\u2028", E1 = "\u2029";
function T1(e) {
  const t = e;
  let n = 0, i = 1, s = 1, r = 0;
  const o = (P) => t[P] === k1 && t[P + 1] === ft, a = (P) => t[P] === ft, l = (P) => t[P] === E1, u = (P) => t[P] === C1, c = (P) => o(P) || a(P) || l(P) || u(P), f = () => n, h = () => i, d = () => s, p = () => r, g = (P) => o(P) || l(P) || u(P) ? ft : t[P], v = () => g(n), w = () => g(n + r);
  function k() {
    return r = 0, c(n) && (i++, s = 0), o(n) && n++, n++, s++, t[n];
  }
  function b() {
    return o(n + r) && r++, r++, t[n + r];
  }
  function C() {
    n = 0, i = 1, s = 1, r = 0;
  }
  function T(P = 0) {
    r = P;
  }
  function M() {
    const P = n + r;
    for (; P !== n; )
      k();
    r = 0;
  }
  return {
    index: f,
    line: h,
    column: d,
    peekOffset: p,
    charAt: g,
    currentChar: v,
    currentPeek: w,
    next: k,
    peek: b,
    reset: C,
    resetPeek: T,
    skipToPeek: M
  };
}
const qn = void 0, A1 = ".", oh = "'", O1 = "tokenizer";
function P1(e, t = {}) {
  const n = t.location !== !1, i = T1(e), s = () => i.index(), r = () => y1(i.line(), i.column(), i.index()), o = r(), a = s(), l = {
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
  function f(y, _, A, ...j) {
    const V = u();
    if (_.column += A, _.offset += A, c) {
      const U = n ? go(V.startLoc, _) : null, I = ms(y, U, {
        domain: O1,
        args: j
      });
      c(I);
    }
  }
  function h(y, _, A) {
    y.endLoc = r(), y.currentType = _;
    const j = { type: _ };
    return n && (j.loc = go(y.startLoc, y.endLoc)), A != null && (j.value = A), j;
  }
  const d = (y) => h(
    y,
    14
    /* TokenTypes.EOF */
  );
  function p(y, _) {
    return y.currentChar() === _ ? (y.next(), _) : (f(re.EXPECTED_TOKEN, r(), 0, _), "");
  }
  function g(y) {
    let _ = "";
    for (; y.currentPeek() === Sn || y.currentPeek() === ft; )
      _ += y.currentPeek(), y.peek();
    return _;
  }
  function v(y) {
    const _ = g(y);
    return y.skipToPeek(), _;
  }
  function w(y) {
    if (y === qn)
      return !1;
    const _ = y.charCodeAt(0);
    return _ >= 97 && _ <= 122 || // a-z
    _ >= 65 && _ <= 90 || // A-Z
    _ === 95;
  }
  function k(y) {
    if (y === qn)
      return !1;
    const _ = y.charCodeAt(0);
    return _ >= 48 && _ <= 57;
  }
  function b(y, _) {
    const { currentType: A } = _;
    if (A !== 2)
      return !1;
    g(y);
    const j = w(y.currentPeek());
    return y.resetPeek(), j;
  }
  function C(y, _) {
    const { currentType: A } = _;
    if (A !== 2)
      return !1;
    g(y);
    const j = y.currentPeek() === "-" ? y.peek() : y.currentPeek(), V = k(j);
    return y.resetPeek(), V;
  }
  function T(y, _) {
    const { currentType: A } = _;
    if (A !== 2)
      return !1;
    g(y);
    const j = y.currentPeek() === oh;
    return y.resetPeek(), j;
  }
  function M(y, _) {
    const { currentType: A } = _;
    if (A !== 8)
      return !1;
    g(y);
    const j = y.currentPeek() === ".";
    return y.resetPeek(), j;
  }
  function P(y, _) {
    const { currentType: A } = _;
    if (A !== 9)
      return !1;
    g(y);
    const j = w(y.currentPeek());
    return y.resetPeek(), j;
  }
  function D(y, _) {
    const { currentType: A } = _;
    if (!(A === 8 || A === 12))
      return !1;
    g(y);
    const j = y.currentPeek() === ":";
    return y.resetPeek(), j;
  }
  function z(y, _) {
    const { currentType: A } = _;
    if (A !== 10)
      return !1;
    const j = () => {
      const U = y.currentPeek();
      return U === "{" ? w(y.peek()) : U === "@" || U === "%" || U === "|" || U === ":" || U === "." || U === Sn || !U ? !1 : U === ft ? (y.peek(), j()) : J(y, !1);
    }, V = j();
    return y.resetPeek(), V;
  }
  function H(y) {
    g(y);
    const _ = y.currentPeek() === "|";
    return y.resetPeek(), _;
  }
  function G(y) {
    const _ = g(y), A = y.currentPeek() === "%" && y.peek() === "{";
    return y.resetPeek(), {
      isModulo: A,
      hasSpace: _.length > 0
    };
  }
  function J(y, _ = !0) {
    const A = (V = !1, U = "", I = !1) => {
      const F = y.currentPeek();
      return F === "{" ? U === "%" ? !1 : V : F === "@" || !F ? U === "%" ? !0 : V : F === "%" ? (y.peek(), A(V, "%", !0)) : F === "|" ? U === "%" || I ? !0 : !(U === Sn || U === ft) : F === Sn ? (y.peek(), A(!0, Sn, I)) : F === ft ? (y.peek(), A(!0, ft, I)) : !0;
    }, j = A();
    return _ && y.resetPeek(), j;
  }
  function K(y, _) {
    const A = y.currentChar();
    return A === qn ? qn : _(A) ? (y.next(), A) : null;
  }
  function le(y) {
    const _ = y.charCodeAt(0);
    return _ >= 97 && _ <= 122 || // a-z
    _ >= 65 && _ <= 90 || // A-Z
    _ >= 48 && _ <= 57 || // 0-9
    _ === 95 || // _
    _ === 36;
  }
  function Ze(y) {
    return K(y, le);
  }
  function xe(y) {
    const _ = y.charCodeAt(0);
    return _ >= 97 && _ <= 122 || // a-z
    _ >= 65 && _ <= 90 || // A-Z
    _ >= 48 && _ <= 57 || // 0-9
    _ === 95 || // _
    _ === 36 || // $
    _ === 45;
  }
  function he(y) {
    return K(y, xe);
  }
  function ue(y) {
    const _ = y.charCodeAt(0);
    return _ >= 48 && _ <= 57;
  }
  function Te(y) {
    return K(y, ue);
  }
  function _t(y) {
    const _ = y.charCodeAt(0);
    return _ >= 48 && _ <= 57 || // 0-9
    _ >= 65 && _ <= 70 || // A-F
    _ >= 97 && _ <= 102;
  }
  function Fe(y) {
    return K(y, _t);
  }
  function qe(y) {
    let _ = "", A = "";
    for (; _ = Te(y); )
      A += _;
    return A;
  }
  function Jt(y) {
    v(y);
    const _ = y.currentChar();
    return _ !== "%" && f(re.EXPECTED_TOKEN, r(), 0, _), y.next(), "%";
  }
  function Qt(y) {
    let _ = "";
    for (; ; ) {
      const A = y.currentChar();
      if (A === "{" || A === "}" || A === "@" || A === "|" || !A)
        break;
      if (A === "%")
        if (J(y))
          _ += A, y.next();
        else
          break;
      else if (A === Sn || A === ft)
        if (J(y))
          _ += A, y.next();
        else {
          if (H(y))
            break;
          _ += A, y.next();
        }
      else
        _ += A, y.next();
    }
    return _;
  }
  function lt(y) {
    v(y);
    let _ = "", A = "";
    for (; _ = he(y); )
      A += _;
    return y.currentChar() === qn && f(re.UNTERMINATED_CLOSING_BRACE, r(), 0), A;
  }
  function xt(y) {
    v(y);
    let _ = "";
    return y.currentChar() === "-" ? (y.next(), _ += `-${qe(y)}`) : _ += qe(y), y.currentChar() === qn && f(re.UNTERMINATED_CLOSING_BRACE, r(), 0), _;
  }
  function qt(y) {
    return y !== oh && y !== ft;
  }
  function Ut(y) {
    v(y), p(y, "'");
    let _ = "", A = "";
    for (; _ = K(y, qt); )
      _ === "\\" ? A += Zt(y) : A += _;
    const j = y.currentChar();
    return j === ft || j === qn ? (f(re.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, r(), 0), j === ft && (y.next(), p(y, "'")), A) : (p(y, "'"), A);
  }
  function Zt(y) {
    const _ = y.currentChar();
    switch (_) {
      case "\\":
      case "'":
        return y.next(), `\\${_}`;
      case "u":
        return St(y, _, 4);
      case "U":
        return St(y, _, 6);
      default:
        return f(re.UNKNOWN_ESCAPE_SEQUENCE, r(), 0, _), "";
    }
  }
  function St(y, _, A) {
    p(y, _);
    let j = "";
    for (let V = 0; V < A; V++) {
      const U = Fe(y);
      if (!U) {
        f(re.INVALID_UNICODE_ESCAPE_SEQUENCE, r(), 0, `\\${_}${j}${y.currentChar()}`);
        break;
      }
      j += U;
    }
    return `\\${_}${j}`;
  }
  function _n(y) {
    return y !== "{" && y !== "}" && y !== Sn && y !== ft;
  }
  function $i(y) {
    v(y);
    let _ = "", A = "";
    for (; _ = K(y, _n); )
      A += _;
    return A;
  }
  function E(y) {
    let _ = "", A = "";
    for (; _ = Ze(y); )
      A += _;
    return A;
  }
  function O(y) {
    const _ = (A) => {
      const j = y.currentChar();
      return j === "{" || j === "%" || j === "@" || j === "|" || j === "(" || j === ")" || !j || j === Sn ? A : (A += j, y.next(), _(A));
    };
    return _("");
  }
  function R(y) {
    v(y);
    const _ = p(
      y,
      "|"
      /* TokenChars.Pipe */
    );
    return v(y), _;
  }
  function W(y, _) {
    let A = null;
    switch (y.currentChar()) {
      case "{":
        return _.braceNest >= 1 && f(re.NOT_ALLOW_NEST_PLACEHOLDER, r(), 0), y.next(), A = h(
          _,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), v(y), _.braceNest++, A;
      case "}":
        return _.braceNest > 0 && _.currentType === 2 && f(re.EMPTY_PLACEHOLDER, r(), 0), y.next(), A = h(
          _,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), _.braceNest--, _.braceNest > 0 && v(y), _.inLinked && _.braceNest === 0 && (_.inLinked = !1), A;
      case "@":
        return _.braceNest > 0 && f(re.UNTERMINATED_CLOSING_BRACE, r(), 0), A = B(y, _) || d(_), _.braceNest = 0, A;
      default: {
        let V = !0, U = !0, I = !0;
        if (H(y))
          return _.braceNest > 0 && f(re.UNTERMINATED_CLOSING_BRACE, r(), 0), A = h(_, 1, R(y)), _.braceNest = 0, _.inLinked = !1, A;
        if (_.braceNest > 0 && (_.currentType === 5 || _.currentType === 6 || _.currentType === 7))
          return f(re.UNTERMINATED_CLOSING_BRACE, r(), 0), _.braceNest = 0, q(y, _);
        if (V = b(y, _))
          return A = h(_, 5, lt(y)), v(y), A;
        if (U = C(y, _))
          return A = h(_, 6, xt(y)), v(y), A;
        if (I = T(y, _))
          return A = h(_, 7, Ut(y)), v(y), A;
        if (!V && !U && !I)
          return A = h(_, 13, $i(y)), f(re.INVALID_TOKEN_IN_PLACEHOLDER, r(), 0, A.value), v(y), A;
        break;
      }
    }
    return A;
  }
  function B(y, _) {
    const { currentType: A } = _;
    let j = null;
    const V = y.currentChar();
    switch ((A === 8 || A === 9 || A === 12 || A === 10) && (V === ft || V === Sn) && f(re.INVALID_LINKED_FORMAT, r(), 0), V) {
      case "@":
        return y.next(), j = h(
          _,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), _.inLinked = !0, j;
      case ".":
        return v(y), y.next(), h(
          _,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return v(y), y.next(), h(
          _,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return H(y) ? (j = h(_, 1, R(y)), _.braceNest = 0, _.inLinked = !1, j) : M(y, _) || D(y, _) ? (v(y), B(y, _)) : P(y, _) ? (v(y), h(_, 12, E(y))) : z(y, _) ? (v(y), V === "{" ? W(y, _) || j : h(_, 11, O(y))) : (A === 8 && f(re.INVALID_LINKED_FORMAT, r(), 0), _.braceNest = 0, _.inLinked = !1, q(y, _));
    }
  }
  function q(y, _) {
    let A = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (_.braceNest > 0)
      return W(y, _) || d(_);
    if (_.inLinked)
      return B(y, _) || d(_);
    switch (y.currentChar()) {
      case "{":
        return W(y, _) || d(_);
      case "}":
        return f(re.UNBALANCED_CLOSING_BRACE, r(), 0), y.next(), h(
          _,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return B(y, _) || d(_);
      default: {
        if (H(y))
          return A = h(_, 1, R(y)), _.braceNest = 0, _.inLinked = !1, A;
        const { isModulo: V, hasSpace: U } = G(y);
        if (V)
          return U ? h(_, 0, Qt(y)) : h(_, 4, Jt(y));
        if (J(y))
          return h(_, 0, Qt(y));
        break;
      }
    }
    return A;
  }
  function Y() {
    const { currentType: y, offset: _, startLoc: A, endLoc: j } = l;
    return l.lastType = y, l.lastOffset = _, l.lastStartLoc = A, l.lastEndLoc = j, l.offset = s(), l.startLoc = r(), i.currentChar() === qn ? h(
      l,
      14
      /* TokenTypes.EOF */
    ) : q(i, l);
  }
  return {
    nextToken: Y,
    currentOffset: s,
    currentPosition: r,
    context: u
  };
}
const N1 = "parser", I1 = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function M1(e, t, n) {
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
function L1(e = {}) {
  const t = e.location !== !1, { onError: n, onWarn: i } = e;
  function s(b, C, T, M, ...P) {
    const D = b.currentPosition();
    if (D.offset += M, D.column += M, n) {
      const z = t ? go(T, D) : null, H = ms(C, z, {
        domain: N1,
        args: P
      });
      n(H);
    }
  }
  function r(b, C, T, M, ...P) {
    const D = b.currentPosition();
    if (D.offset += M, D.column += M, i) {
      const z = t ? go(T, D) : null;
      i(_1(C, z, P));
    }
  }
  function o(b, C, T) {
    const M = { type: b };
    return t && (M.start = C, M.end = C, M.loc = { start: T, end: T }), M;
  }
  function a(b, C, T, M) {
    t && (b.end = C, b.loc && (b.loc.end = T));
  }
  function l(b, C) {
    const T = b.context(), M = o(3, T.offset, T.startLoc);
    return M.value = C, a(M, b.currentOffset(), b.currentPosition()), M;
  }
  function u(b, C) {
    const T = b.context(), { lastOffset: M, lastStartLoc: P } = T, D = o(5, M, P);
    return D.index = parseInt(C, 10), b.nextToken(), a(D, b.currentOffset(), b.currentPosition()), D;
  }
  function c(b, C, T) {
    const M = b.context(), { lastOffset: P, lastStartLoc: D } = M, z = o(4, P, D);
    return z.key = C, T === !0 && (z.modulo = !0), b.nextToken(), a(z, b.currentOffset(), b.currentPosition()), z;
  }
  function f(b, C) {
    const T = b.context(), { lastOffset: M, lastStartLoc: P } = T, D = o(9, M, P);
    return D.value = C.replace(I1, M1), b.nextToken(), a(D, b.currentOffset(), b.currentPosition()), D;
  }
  function h(b) {
    const C = b.nextToken(), T = b.context(), { lastOffset: M, lastStartLoc: P } = T, D = o(8, M, P);
    return C.type !== 12 ? (s(b, re.UNEXPECTED_EMPTY_LINKED_MODIFIER, T.lastStartLoc, 0), D.value = "", a(D, M, P), {
      nextConsumeToken: C,
      node: D
    }) : (C.value == null && s(b, re.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, Wt(C)), D.value = C.value || "", a(D, b.currentOffset(), b.currentPosition()), {
      node: D
    });
  }
  function d(b, C) {
    const T = b.context(), M = o(7, T.offset, T.startLoc);
    return M.value = C, a(M, b.currentOffset(), b.currentPosition()), M;
  }
  function p(b) {
    const C = b.context(), T = o(6, C.offset, C.startLoc);
    let M = b.nextToken();
    if (M.type === 9) {
      const P = h(b);
      T.modifier = P.node, M = P.nextConsumeToken || b.nextToken();
    }
    switch (M.type !== 10 && s(b, re.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Wt(M)), M = b.nextToken(), M.type === 2 && (M = b.nextToken()), M.type) {
      case 11:
        M.value == null && s(b, re.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Wt(M)), T.key = d(b, M.value || "");
        break;
      case 5:
        M.value == null && s(b, re.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Wt(M)), T.key = c(b, M.value || "");
        break;
      case 6:
        M.value == null && s(b, re.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Wt(M)), T.key = u(b, M.value || "");
        break;
      case 7:
        M.value == null && s(b, re.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Wt(M)), T.key = f(b, M.value || "");
        break;
      default: {
        s(b, re.UNEXPECTED_EMPTY_LINKED_KEY, C.lastStartLoc, 0);
        const P = b.context(), D = o(7, P.offset, P.startLoc);
        return D.value = "", a(D, P.offset, P.startLoc), T.key = D, a(T, P.offset, P.startLoc), {
          nextConsumeToken: M,
          node: T
        };
      }
    }
    return a(T, b.currentOffset(), b.currentPosition()), {
      node: T
    };
  }
  function g(b) {
    const C = b.context(), T = C.currentType === 1 ? b.currentOffset() : C.offset, M = C.currentType === 1 ? C.endLoc : C.startLoc, P = o(2, T, M);
    P.items = [];
    let D = null, z = null;
    do {
      const J = D || b.nextToken();
      switch (D = null, J.type) {
        case 0:
          J.value == null && s(b, re.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Wt(J)), P.items.push(l(b, J.value || ""));
          break;
        case 6:
          J.value == null && s(b, re.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Wt(J)), P.items.push(u(b, J.value || ""));
          break;
        case 4:
          z = !0;
          break;
        case 5:
          J.value == null && s(b, re.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Wt(J)), P.items.push(c(b, J.value || "", !!z)), z && (r(b, Jc.USE_MODULO_SYNTAX, C.lastStartLoc, 0, Wt(J)), z = null);
          break;
        case 7:
          J.value == null && s(b, re.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Wt(J)), P.items.push(f(b, J.value || ""));
          break;
        case 8: {
          const K = p(b);
          P.items.push(K.node), D = K.nextConsumeToken || null;
          break;
        }
      }
    } while (C.currentType !== 14 && C.currentType !== 1);
    const H = C.currentType === 1 ? C.lastOffset : b.currentOffset(), G = C.currentType === 1 ? C.lastEndLoc : b.currentPosition();
    return a(P, H, G), P;
  }
  function v(b, C, T, M) {
    const P = b.context();
    let D = M.items.length === 0;
    const z = o(1, C, T);
    z.cases = [], z.cases.push(M);
    do {
      const H = g(b);
      D || (D = H.items.length === 0), z.cases.push(H);
    } while (P.currentType !== 14);
    return D && s(b, re.MUST_HAVE_MESSAGES_IN_PLURAL, T, 0), a(z, b.currentOffset(), b.currentPosition()), z;
  }
  function w(b) {
    const C = b.context(), { offset: T, startLoc: M } = C, P = g(b);
    return C.currentType === 14 ? P : v(b, T, M, P);
  }
  function k(b) {
    const C = P1(b, Tg({}, e)), T = C.context(), M = o(0, T.offset, T.startLoc);
    return t && M.loc && (M.loc.source = b), M.body = w(C), e.onCacheKey && (M.cacheKey = e.onCacheKey(b)), T.currentType !== 14 && s(C, re.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, b[T.offset] || ""), a(M, C.currentOffset(), C.currentPosition()), M;
  }
  return { parse: k };
}
function Wt(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function D1(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (r) => (n.helpers.add(r), r) };
}
function ah(e, t) {
  for (let n = 0; n < e.length; n++)
    Qc(e[n], t);
}
function Qc(e, t) {
  switch (e.type) {
    case 1:
      ah(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      ah(e.items, t);
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
function R1(e, t = {}) {
  const n = D1(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Qc(e.body, n);
  const i = n.context();
  e.helpers = Array.from(i.helpers);
}
function F1(e) {
  const t = e.body;
  return t.type === 2 ? lh(t) : t.cases.forEach((n) => lh(n)), e;
}
function lh(e) {
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
      e.static = Ag(t);
      for (let n = 0; n < e.items.length; n++) {
        const i = e.items[n];
        (i.type === 3 || i.type === 9) && delete i.value;
      }
    }
  }
}
const $1 = "minifier";
function Wi(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Wi(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let i = 0; i < n.length; i++)
        Wi(n[i]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let i = 0; i < n.length; i++)
        Wi(n[i]);
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
      Wi(t.key), t.k = t.key, delete t.key, t.modifier && (Wi(t.modifier), t.m = t.modifier, delete t.modifier);
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
      throw ms(re.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: $1,
        args: [e.type]
      });
  }
  delete e.type;
}
const B1 = "parser";
function j1(e, t) {
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
  function u(v, w) {
    a.code += v;
  }
  function c(v, w = !0) {
    const k = w ? s : "";
    u(r ? k + "  ".repeat(v) : k);
  }
  function f(v = !0) {
    const w = ++a.indentLevel;
    v && c(w);
  }
  function h(v = !0) {
    const w = --a.indentLevel;
    v && c(w);
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
    helper: (v) => `_${v}`,
    needIndent: () => a.needIndent
  };
}
function q1(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), os(e, t.key), t.modifier ? (e.push(", "), os(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function U1(e, t) {
  const { helper: n, needIndent: i } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(i());
  const s = t.items.length;
  for (let r = 0; r < s && (os(e, t.items[r]), r !== s - 1); r++)
    e.push(", ");
  e.deindent(i()), e.push("])");
}
function W1(e, t) {
  const { helper: n, needIndent: i } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(i());
    const s = t.cases.length;
    for (let r = 0; r < s && (os(e, t.cases[r]), r !== s - 1); r++)
      e.push(", ");
    e.deindent(i()), e.push("])");
  }
}
function z1(e, t) {
  t.body ? os(e, t.body) : e.push("null");
}
function os(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      z1(e, t);
      break;
    case 1:
      W1(e, t);
      break;
    case 2:
      U1(e, t);
      break;
    case 6:
      q1(e, t);
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
      throw ms(re.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: B1,
        args: [t.type]
      });
  }
}
const V1 = (e, t = {}) => {
  const n = rh(t.mode) ? t.mode : "normal", i = rh(t.filename) ? t.filename : "message.intl", s = !!t.sourceMap, r = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, o = t.needIndent ? t.needIndent : n !== "arrow", a = e.helpers || [], l = j1(e, {
    mode: n,
    filename: i,
    sourceMap: s,
    breakLineCode: r,
    needIndent: o
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(o), a.length > 0 && (l.push(`const { ${Ag(a.map((f) => `${f}: _${f}`), ", ")} } = ctx`), l.newline()), l.push("return "), os(l, e), l.deindent(o), l.push("}"), delete e.helpers;
  const { code: u, map: c } = l.context();
  return {
    ast: e,
    code: u,
    map: c ? c.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function G1(e, t = {}) {
  const n = Tg({}, t), i = !!n.jit, s = !!n.minify, r = n.optimize == null ? !0 : n.optimize, a = L1(n).parse(e);
  return i ? (r && F1(a), s && Wi(a), { ast: a, code: "" }) : (R1(a, n), V1(a, n));
}
/*!
 * core-base v9.14.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
function H1() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Xc().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const ri = [];
ri[
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
ri[
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
ri[
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
ri[
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
ri[
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
ri[
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
ri[
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
const K1 = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Y1(e) {
  return K1.test(e);
}
function X1(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function J1(e) {
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
function Q1(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Y1(t) ? X1(t) : "*" + t;
}
function Z1(e) {
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
      if (s = 0, o === void 0 || (o = Q1(o), o === !1))
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
      if (l = J1(r), f = ri[i], u = f[l] || f.l || 8, u === 8 || (i = u[0], u[1] !== void 0 && (c = h[u[1]], c && (a = r, c() === !1))))
        return;
      if (i === 7)
        return t;
    }
}
const ch = /* @__PURE__ */ new Map();
function ev(e, t) {
  return ye(e) ? e[t] : null;
}
function tv(e, t) {
  if (!ye(e))
    return null;
  let n = ch.get(t);
  if (n || (n = Z1(t), n && ch.set(t, n)), !n)
    return null;
  const i = n.length;
  let s = e, r = 0;
  for (; r < i; ) {
    const o = s[n[r]];
    if (o === void 0 || je(s))
      return null;
    s = o, r++;
  }
  return s;
}
const nv = (e) => e, iv = (e) => "", sv = "text", rv = (e) => e.length === 0 ? "" : g1(e), ov = p1;
function uh(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function av(e) {
  const t = Qe(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Qe(e.named.count) || Qe(e.named.n)) ? Qe(e.named.count) ? e.named.count : Qe(e.named.n) ? e.named.n : t : t;
}
function lv(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function cv(e = {}) {
  const t = e.locale, n = av(e), i = ye(e.pluralRules) && ee(t) && je(e.pluralRules[t]) ? e.pluralRules[t] : uh, s = ye(e.pluralRules) && ee(t) && je(e.pluralRules[t]) ? uh : void 0, r = (w) => w[i(n, w.length, s)], o = e.list || [], a = (w) => o[w], l = e.named || {};
  Qe(e.pluralIndex) && lv(n, l);
  const u = (w) => l[w];
  function c(w) {
    const k = je(e.messages) ? e.messages(w) : ye(e.messages) ? e.messages[w] : !1;
    return k || (e.parent ? e.parent.message(w) : iv);
  }
  const f = (w) => e.modifiers ? e.modifiers[w] : nv, h = ge(e.processor) && je(e.processor.normalize) ? e.processor.normalize : rv, d = ge(e.processor) && je(e.processor.interpolate) ? e.processor.interpolate : ov, p = ge(e.processor) && ee(e.processor.type) ? e.processor.type : sv, v = {
    list: a,
    named: u,
    plural: r,
    linked: (w, ...k) => {
      const [b, C] = k;
      let T = "text", M = "";
      k.length === 1 ? ye(b) ? (M = b.modifier || M, T = b.type || T) : ee(b) && (M = b || M) : k.length === 2 && (ee(b) && (M = b || M), ee(C) && (T = C || T));
      const P = c(w)(v), D = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        T === "vnode" && Ye(P) && M ? P[0] : P
      );
      return M ? f(M)(D, T) : D;
    },
    message: c,
    type: p,
    interpolate: d,
    normalize: h,
    values: ot({}, o, l)
  };
  return v;
}
let er = null;
function uv(e) {
  er = e;
}
function fv(e, t, n) {
  er && er.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const hv = /* @__PURE__ */ dv(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function dv(e) {
  return (t) => er && er.emit(e, t);
}
const Og = Jc.__EXTEND_POINT__, ui = ia(Og), pv = {
  NOT_FOUND_KEY: Og,
  // 2
  FALLBACK_TO_TRANSLATE: ui(),
  // 3
  CANNOT_FORMAT_NUMBER: ui(),
  // 4
  FALLBACK_TO_NUMBER_FORMAT: ui(),
  // 5
  CANNOT_FORMAT_DATE: ui(),
  // 6
  FALLBACK_TO_DATE_FORMAT: ui(),
  // 7
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: ui(),
  // 8
  __EXTEND_POINT__: ui()
  // 9
}, Pg = re.__EXTEND_POINT__, fi = ia(Pg), ln = {
  INVALID_ARGUMENT: Pg,
  // 17
  INVALID_DATE_ARGUMENT: fi(),
  // 18
  INVALID_ISO_DATE_ARGUMENT: fi(),
  // 19
  NOT_SUPPORT_NON_STRING_MESSAGE: fi(),
  // 20
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: fi(),
  // 21
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: fi(),
  // 22
  NOT_SUPPORT_LOCALE_TYPE: fi(),
  // 23
  __EXTEND_POINT__: fi()
  // 24
};
function In(e) {
  return ms(e, null, void 0);
}
function Zc(e, t) {
  return t.locale != null ? fh(t.locale) : fh(e.locale);
}
let qa;
function fh(e) {
  if (ee(e))
    return e;
  if (je(e)) {
    if (e.resolvedOnce && qa != null)
      return qa;
    if (e.constructor.name === "Function") {
      const t = e();
      if (d1(t))
        throw In(ln.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return qa = t;
    } else
      throw In(ln.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw In(ln.NOT_SUPPORT_LOCALE_TYPE);
}
function gv(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Ye(t) ? t : ye(t) ? Object.keys(t) : ee(t) ? [t] : [n]
  ])];
}
function Ng(e, t, n) {
  const i = ee(n) ? n : mo, s = e;
  s.__localeChainCache || (s.__localeChainCache = /* @__PURE__ */ new Map());
  let r = s.__localeChainCache.get(i);
  if (!r) {
    r = [];
    let o = [n];
    for (; Ye(o); )
      o = hh(r, o, t);
    const a = Ye(t) || !ge(t) ? t : t.default ? t.default : null;
    o = ee(a) ? [a] : a, Ye(o) && hh(r, o, !1), s.__localeChainCache.set(i, r);
  }
  return r;
}
function hh(e, t, n) {
  let i = !0;
  for (let s = 0; s < t.length && Re(i); s++) {
    const r = t[s];
    ee(r) && (i = mv(e, t[s], n));
  }
  return i;
}
function mv(e, t, n) {
  let i;
  const s = t.split("-");
  do {
    const r = s.join("-");
    i = yv(e, r, n), s.splice(-1, 1);
  } while (s.length && i === !0);
  return i;
}
function yv(e, t, n) {
  let i = !1;
  if (!e.includes(t) && (i = !0, t)) {
    i = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (Ye(n) || ge(n)) && n[s] && (i = n[s]);
  }
  return i;
}
const bv = "9.14.1", sa = -1, mo = "en-US", dh = "", ph = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function wv() {
  return {
    upper: (e, t) => t === "text" && ee(e) ? e.toUpperCase() : t === "vnode" && ye(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && ee(e) ? e.toLowerCase() : t === "vnode" && ye(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && ee(e) ? ph(e) : t === "vnode" && ye(e) && "__v_isVNode" in e ? ph(e.children) : e
  };
}
let Ig;
function vv(e) {
  Ig = e;
}
let Mg;
function _v(e) {
  Mg = e;
}
let Lg;
function xv(e) {
  Lg = e;
}
let Dg = null;
const Sv = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  Dg = e;
}, kv = /* @__NO_SIDE_EFFECTS__ */ () => Dg;
let Rg = null;
const gh = (e) => {
  Rg = e;
}, Cv = () => Rg;
let mh = 0;
function Ev(e = {}) {
  const t = je(e.onWarn) ? e.onWarn : m1, n = ee(e.version) ? e.version : bv, i = ee(e.locale) || je(e.locale) ? e.locale : mo, s = je(i) ? mo : i, r = Ye(e.fallbackLocale) || ge(e.fallbackLocale) || ee(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s, o = ge(e.messages) ? e.messages : { [s]: {} }, a = ge(e.datetimeFormats) ? e.datetimeFormats : { [s]: {} }, l = ge(e.numberFormats) ? e.numberFormats : { [s]: {} }, u = ot({}, e.modifiers || {}, wv()), c = e.pluralRules || {}, f = je(e.missing) ? e.missing : null, h = Re(e.missingWarn) || ho(e.missingWarn) ? e.missingWarn : !0, d = Re(e.fallbackWarn) || ho(e.fallbackWarn) ? e.fallbackWarn : !0, p = !!e.fallbackFormat, g = !!e.unresolving, v = je(e.postTranslation) ? e.postTranslation : null, w = ge(e.processor) ? e.processor : null, k = Re(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, b = !!e.escapeParameter, C = je(e.messageCompiler) ? e.messageCompiler : Ig, T = je(e.messageResolver) ? e.messageResolver : Mg || ev, M = je(e.localeFallbacker) ? e.localeFallbacker : Lg || gv, P = ye(e.fallbackContext) ? e.fallbackContext : void 0, D = e, z = ye(D.__datetimeFormatters) ? D.__datetimeFormatters : /* @__PURE__ */ new Map(), H = ye(D.__numberFormatters) ? D.__numberFormatters : /* @__PURE__ */ new Map(), G = ye(D.__meta) ? D.__meta : {};
  mh++;
  const J = {
    version: n,
    cid: mh,
    locale: i,
    fallbackLocale: r,
    messages: o,
    modifiers: u,
    pluralRules: c,
    missing: f,
    missingWarn: h,
    fallbackWarn: d,
    fallbackFormat: p,
    unresolving: g,
    postTranslation: v,
    processor: w,
    warnHtmlMessage: k,
    escapeParameter: b,
    messageCompiler: C,
    messageResolver: T,
    localeFallbacker: M,
    fallbackContext: P,
    onWarn: t,
    __meta: G
  };
  return J.datetimeFormats = a, J.numberFormats = l, J.__datetimeFormatters = z, J.__numberFormatters = H, __INTLIFY_PROD_DEVTOOLS__ && fv(J, n, G), J;
}
function eu(e, t, n, i, s) {
  const { missing: r, onWarn: o } = e;
  if (r !== null) {
    const a = r(e, n, t, s);
    return ee(a) ? a : t;
  } else
    return t;
}
function Cs(e, t, n) {
  const i = e;
  i.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Tv(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Av(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let i = n + 1; i < t.length; i++)
    if (Tv(e, t[i]))
      return !0;
  return !1;
}
function Ua(e) {
  return (n) => Ov(n, e);
}
function Ov(e, t) {
  const n = t.b || t.body;
  if ((n.t || n.type) === 1) {
    const i = n, s = i.c || i.cases;
    return e.plural(s.reduce((r, o) => [
      ...r,
      yh(e, o)
    ], []));
  } else
    return yh(e, n);
}
function yh(e, t) {
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
const Pv = (e) => e;
let Or = /* @__PURE__ */ Object.create(null);
const as = (e) => ye(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e);
function Nv(e, t = {}) {
  let n = !1;
  const i = t.onError || S1;
  return t.onError = (s) => {
    n = !0, i(s);
  }, { ...G1(e, t), detectError: n };
}
function Iv(e, t) {
  if (ee(e)) {
    Re(t.warnHtmlMessage) && t.warnHtmlMessage;
    const i = (t.onCacheKey || Pv)(e), s = Or[i];
    if (s)
      return s;
    const { ast: r, detectError: o } = Nv(e, {
      ...t,
      location: !1,
      jit: !0
    }), a = Ua(r);
    return o ? a : Or[i] = a;
  } else {
    const n = e.cacheKey;
    if (n) {
      const i = Or[n];
      return i || (Or[n] = Ua(e));
    } else
      return Ua(e);
  }
}
const bh = () => "", Lt = (e) => je(e);
function wh(e, ...t) {
  const { fallbackFormat: n, postTranslation: i, unresolving: s, messageCompiler: r, fallbackLocale: o, messages: a } = e, [l, u] = Sl(...t), c = Re(u.missingWarn) ? u.missingWarn : e.missingWarn, f = Re(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, h = Re(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, d = !!u.resolvedMessage, p = ee(u.default) || Re(u.default) ? Re(u.default) ? r ? l : () => l : u.default : n ? r ? l : () => l : "", g = n || p !== "", v = Zc(e, u);
  h && Mv(u);
  let [w, k, b] = d ? [
    l,
    v,
    a[v] || {}
  ] : Fg(e, l, v, o, f, c), C = w, T = l;
  if (!d && !(ee(C) || as(C) || Lt(C)) && g && (C = p, T = C), !d && (!(ee(C) || as(C) || Lt(C)) || !ee(k)))
    return s ? sa : l;
  let M = !1;
  const P = () => {
    M = !0;
  }, D = Lt(C) ? C : $g(e, l, k, C, T, P);
  if (M)
    return C;
  const z = Rv(e, k, b, u), H = cv(z), G = Lv(e, D, H), J = i ? i(G, l) : G;
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const K = {
      timestamp: Date.now(),
      key: ee(l) ? l : Lt(C) ? C.key : "",
      locale: k || (Lt(C) ? C.locale : ""),
      format: ee(C) ? C : Lt(C) ? C.source : "",
      message: J
    };
    K.meta = ot({}, e.__meta, /* @__PURE__ */ kv() || {}), hv(K);
  }
  return J;
}
function Mv(e) {
  Ye(e.list) ? e.list = e.list.map((t) => ee(t) ? sh(t) : t) : ye(e.named) && Object.keys(e.named).forEach((t) => {
    ee(e.named[t]) && (e.named[t] = sh(e.named[t]));
  });
}
function Fg(e, t, n, i, s, r) {
  const { messages: o, onWarn: a, messageResolver: l, localeFallbacker: u } = e, c = u(e, i, n);
  let f = {}, h, d = null;
  const p = "translate";
  for (let g = 0; g < c.length && (h = c[g], f = o[h] || {}, (d = l(f, t)) === null && (d = f[t]), !(ee(d) || as(d) || Lt(d))); g++)
    if (!Av(h, c)) {
      const v = eu(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        h,
        r,
        p
      );
      v !== t && (d = v);
    }
  return [d, h, f];
}
function $g(e, t, n, i, s, r) {
  const { messageCompiler: o, warnHtmlMessage: a } = e;
  if (Lt(i)) {
    const u = i;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (o == null) {
    const u = () => i;
    return u.locale = n, u.key = t, u;
  }
  const l = o(i, Dv(e, n, s, i, a, r));
  return l.locale = n, l.key = t, l.source = i, l;
}
function Lv(e, t, n) {
  return t(n);
}
function Sl(...e) {
  const [t, n, i] = e, s = {};
  if (!ee(t) && !Qe(t) && !Lt(t) && !as(t))
    throw In(ln.INVALID_ARGUMENT);
  const r = Qe(t) ? String(t) : (Lt(t), t);
  return Qe(n) ? s.plural = n : ee(n) ? s.default = n : ge(n) && !na(n) ? s.named = n : Ye(n) && (s.list = n), Qe(i) ? s.plural = i : ee(i) ? s.default = i : ge(i) && ot(s, i), [r, s];
}
function Dv(e, t, n, i, s, r) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (o) => {
      throw r && r(o), o;
    },
    onCacheKey: (o) => c1(t, n, o)
  };
}
function Rv(e, t, n, i) {
  const { modifiers: s, pluralRules: r, messageResolver: o, fallbackLocale: a, fallbackWarn: l, missingWarn: u, fallbackContext: c } = e, h = {
    locale: t,
    modifiers: s,
    pluralRules: r,
    messages: (d) => {
      let p = o(n, d);
      if (p == null && c) {
        const [, , g] = Fg(c, d, t, a, l, u);
        p = o(g, d);
      }
      if (ee(p) || as(p)) {
        let g = !1;
        const w = $g(e, d, t, p, d, () => {
          g = !0;
        });
        return g ? bh : w;
      } else return Lt(p) ? p : bh;
    }
  };
  return e.processor && (h.processor = e.processor), i.list && (h.list = i.list), i.named && (h.named = i.named), Qe(i.plural) && (h.pluralIndex = i.plural), h;
}
function vh(e, ...t) {
  const { datetimeFormats: n, unresolving: i, fallbackLocale: s, onWarn: r, localeFallbacker: o } = e, { __datetimeFormatters: a } = e, [l, u, c, f] = kl(...t), h = Re(c.missingWarn) ? c.missingWarn : e.missingWarn;
  Re(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const d = !!c.part, p = Zc(e, c), g = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    p
  );
  if (!ee(l) || l === "")
    return new Intl.DateTimeFormat(p, f).format(u);
  let v = {}, w, k = null;
  const b = "datetime format";
  for (let M = 0; M < g.length && (w = g[M], v = n[w] || {}, k = v[l], !ge(k)); M++)
    eu(e, l, w, h, b);
  if (!ge(k) || !ee(w))
    return i ? sa : l;
  let C = `${w}__${l}`;
  na(f) || (C = `${C}__${JSON.stringify(f)}`);
  let T = a.get(C);
  return T || (T = new Intl.DateTimeFormat(w, ot({}, k, f)), a.set(C, T)), d ? T.formatToParts(u) : T.format(u);
}
const Bg = [
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
  if (ee(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw In(ln.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    a = new Date(u);
    try {
      a.toISOString();
    } catch {
      throw In(ln.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (f1(t)) {
    if (isNaN(t.getTime()))
      throw In(ln.INVALID_DATE_ARGUMENT);
    a = t;
  } else if (Qe(t))
    a = t;
  else
    throw In(ln.INVALID_ARGUMENT);
  return ee(n) ? r.key = n : ge(n) && Object.keys(n).forEach((l) => {
    Bg.includes(l) ? o[l] = n[l] : r[l] = n[l];
  }), ee(i) ? r.locale = i : ge(i) && (o = i), ge(s) && (o = s), [r.key || "", a, r, o];
}
function _h(e, t, n) {
  const i = e;
  for (const s in n) {
    const r = `${t}__${s}`;
    i.__datetimeFormatters.has(r) && i.__datetimeFormatters.delete(r);
  }
}
function xh(e, ...t) {
  const { numberFormats: n, unresolving: i, fallbackLocale: s, onWarn: r, localeFallbacker: o } = e, { __numberFormatters: a } = e, [l, u, c, f] = Cl(...t), h = Re(c.missingWarn) ? c.missingWarn : e.missingWarn;
  Re(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const d = !!c.part, p = Zc(e, c), g = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    p
  );
  if (!ee(l) || l === "")
    return new Intl.NumberFormat(p, f).format(u);
  let v = {}, w, k = null;
  const b = "number format";
  for (let M = 0; M < g.length && (w = g[M], v = n[w] || {}, k = v[l], !ge(k)); M++)
    eu(e, l, w, h, b);
  if (!ge(k) || !ee(w))
    return i ? sa : l;
  let C = `${w}__${l}`;
  na(f) || (C = `${C}__${JSON.stringify(f)}`);
  let T = a.get(C);
  return T || (T = new Intl.NumberFormat(w, ot({}, k, f)), a.set(C, T)), d ? T.formatToParts(u) : T.format(u);
}
const jg = [
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
function Cl(...e) {
  const [t, n, i, s] = e, r = {};
  let o = {};
  if (!Qe(t))
    throw In(ln.INVALID_ARGUMENT);
  const a = t;
  return ee(n) ? r.key = n : ge(n) && Object.keys(n).forEach((l) => {
    jg.includes(l) ? o[l] = n[l] : r[l] = n[l];
  }), ee(i) ? r.locale = i : ge(i) && (o = i), ge(s) && (o = s), [r.key || "", a, r, o];
}
function Sh(e, t, n) {
  const i = e;
  for (const s in n) {
    const r = `${t}__${s}`;
    i.__numberFormatters.has(r) && i.__numberFormatters.delete(r);
  }
}
H1();
/*!
 * vue-i18n v9.14.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
const Fv = "9.14.1";
function $v() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Xc().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const qg = pv.__EXTEND_POINT__, kn = ia(qg);
kn(), kn(), kn(), kn(), kn(), kn(), kn(), kn(), kn();
const Ug = ln.__EXTEND_POINT__, gt = ia(Ug), $t = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Ug,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: gt(),
  // 25
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: gt(),
  // 26
  NOT_INSTALLED: gt(),
  // 27
  NOT_AVAILABLE_IN_LEGACY_MODE: gt(),
  // 28
  // directive module errors
  REQUIRED_VALUE: gt(),
  // 29
  INVALID_VALUE: gt(),
  // 30
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: gt(),
  // 31
  NOT_INSTALLED_WITH_PROVIDE: gt(),
  // 32
  // unexpected error
  UNEXPECTED_ERROR: gt(),
  // 33
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: gt(),
  // 34
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: gt(),
  // 35
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: gt(),
  // 36
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: gt(),
  // 37
  // for enhancement
  __EXTEND_POINT__: gt()
  // 38
};
function Yt(e, ...t) {
  return ms(e, null, void 0);
}
const El = /* @__PURE__ */ si("__translateVNode"), Tl = /* @__PURE__ */ si("__datetimeParts"), Al = /* @__PURE__ */ si("__numberParts"), Bv = si("__setPluralRules"), jv = /* @__PURE__ */ si("__injectWithOption"), Ol = /* @__PURE__ */ si("__dispose");
function tr(e) {
  if (!ye(e))
    return e;
  for (const t in e)
    if (po(e, t))
      if (!t.includes("."))
        ye(e[t]) && tr(e[t]);
      else {
        const n = t.split("."), i = n.length - 1;
        let s = e, r = !1;
        for (let o = 0; o < i; o++) {
          if (n[o] in s || (s[n[o]] = {}), !ye(s[n[o]])) {
            r = !0;
            break;
          }
          s = s[n[o]];
        }
        r || (s[n[i]] = e[t], delete e[t]), ye(s[n[i]]) && tr(s[n[i]]);
      }
  return e;
}
function Wg(e, t) {
  const { messages: n, __i18n: i, messageResolver: s, flatJson: r } = t, o = ge(n) ? n : Ye(i) ? {} : { [e]: {} };
  if (Ye(i) && i.forEach((a) => {
    if ("locale" in a && "resource" in a) {
      const { locale: l, resource: u } = a;
      l ? (o[l] = o[l] || {}, Gr(u, o[l])) : Gr(u, o);
    } else
      ee(a) && Gr(JSON.parse(a), o);
  }), s == null && r)
    for (const a in o)
      po(o, a) && tr(o[a]);
  return o;
}
function zg(e) {
  return e.type;
}
function qv(e, t, n) {
  let i = ye(t.messages) ? t.messages : {};
  "__i18nGlobal" in n && (i = Wg(e.locale.value, {
    messages: i,
    __i18n: n.__i18nGlobal
  }));
  const s = Object.keys(i);
  s.length && s.forEach((r) => {
    e.mergeLocaleMessage(r, i[r]);
  });
  {
    if (ye(t.datetimeFormats)) {
      const r = Object.keys(t.datetimeFormats);
      r.length && r.forEach((o) => {
        e.mergeDateTimeFormat(o, t.datetimeFormats[o]);
      });
    }
    if (ye(t.numberFormats)) {
      const r = Object.keys(t.numberFormats);
      r.length && r.forEach((o) => {
        e.mergeNumberFormat(o, t.numberFormats[o]);
      });
    }
  }
}
function kh(e) {
  return ve(ur, null, e, 0);
}
const Ch = "__INTLIFY_META__", Eh = () => [], Uv = () => !1;
let Th = 0;
function Ah(e) {
  return (t, n, i, s) => e(n, i, ea() || void 0, s);
}
const Wv = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = ea();
  let t = null;
  return e && (t = zg(e)[Ch]) ? { [Ch]: t } : null;
};
function Vg(e = {}, t) {
  const { __root: n, __injectWithOption: i } = e, s = n === void 0, r = e.flatJson, o = fo ? Qi : Gn, a = !!e.translateExistCompatible;
  let l = Re(e.inheritLocale) ? e.inheritLocale : !0;
  const u = o(
    // prettier-ignore
    n && l ? n.locale.value : ee(e.locale) ? e.locale : mo
  ), c = o(
    // prettier-ignore
    n && l ? n.fallbackLocale.value : ee(e.fallbackLocale) || Ye(e.fallbackLocale) || ge(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : u.value
  ), f = o(Wg(u.value, e)), h = o(ge(e.datetimeFormats) ? e.datetimeFormats : { [u.value]: {} }), d = o(ge(e.numberFormats) ? e.numberFormats : { [u.value]: {} });
  let p = n ? n.missingWarn : Re(e.missingWarn) || ho(e.missingWarn) ? e.missingWarn : !0, g = n ? n.fallbackWarn : Re(e.fallbackWarn) || ho(e.fallbackWarn) ? e.fallbackWarn : !0, v = n ? n.fallbackRoot : Re(e.fallbackRoot) ? e.fallbackRoot : !0, w = !!e.fallbackFormat, k = je(e.missing) ? e.missing : null, b = je(e.missing) ? Ah(e.missing) : null, C = je(e.postTranslation) ? e.postTranslation : null, T = n ? n.warnHtmlMessage : Re(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, M = !!e.escapeParameter;
  const P = n ? n.modifiers : ge(e.modifiers) ? e.modifiers : {};
  let D = e.pluralRules || n && n.pluralRules, z;
  z = (() => {
    s && gh(null);
    const I = {
      version: Fv,
      locale: u.value,
      fallbackLocale: c.value,
      messages: f.value,
      modifiers: P,
      pluralRules: D,
      missing: b === null ? void 0 : b,
      missingWarn: p,
      fallbackWarn: g,
      fallbackFormat: w,
      unresolving: !0,
      postTranslation: C === null ? void 0 : C,
      warnHtmlMessage: T,
      escapeParameter: M,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    I.datetimeFormats = h.value, I.numberFormats = d.value, I.__datetimeFormatters = ge(z) ? z.__datetimeFormatters : void 0, I.__numberFormatters = ge(z) ? z.__numberFormatters : void 0;
    const F = Ev(I);
    return s && gh(F), F;
  })(), Cs(z, u.value, c.value);
  function G() {
    return [
      u.value,
      c.value,
      f.value,
      h.value,
      d.value
    ];
  }
  const J = Mt({
    get: () => u.value,
    set: (I) => {
      u.value = I, z.locale = u.value;
    }
  }), K = Mt({
    get: () => c.value,
    set: (I) => {
      c.value = I, z.fallbackLocale = c.value, Cs(z, u.value, I);
    }
  }), le = Mt(() => f.value), Ze = /* @__PURE__ */ Mt(() => h.value), xe = /* @__PURE__ */ Mt(() => d.value);
  function he() {
    return je(C) ? C : null;
  }
  function ue(I) {
    C = I, z.postTranslation = I;
  }
  function Te() {
    return k;
  }
  function _t(I) {
    I !== null && (b = Ah(I)), k = I, z.missing = b;
  }
  const Fe = (I, F, ne, ie, $e, Ue) => {
    G();
    let Xe;
    try {
      __INTLIFY_PROD_DEVTOOLS__, s || (z.fallbackContext = n ? Cv() : void 0), Xe = I(z);
    } finally {
      __INTLIFY_PROD_DEVTOOLS__, s || (z.fallbackContext = void 0);
    }
    if (ne !== "translate exists" && // for not `te` (e.g `t`)
    Qe(Xe) && Xe === sa || ne === "translate exists" && !Xe) {
      const [ct, Bi] = F();
      return n && v ? ie(n) : $e(ct);
    } else {
      if (Ue(Xe))
        return Xe;
      throw Yt($t.UNEXPECTED_RETURN_TYPE);
    }
  };
  function qe(...I) {
    return Fe((F) => Reflect.apply(wh, null, [F, ...I]), () => Sl(...I), "translate", (F) => Reflect.apply(F.t, F, [...I]), (F) => F, (F) => ee(F));
  }
  function Jt(...I) {
    const [F, ne, ie] = I;
    if (ie && !ye(ie))
      throw Yt($t.INVALID_ARGUMENT);
    return qe(F, ne, ot({ resolvedMessage: !0 }, ie || {}));
  }
  function Qt(...I) {
    return Fe((F) => Reflect.apply(vh, null, [F, ...I]), () => kl(...I), "datetime format", (F) => Reflect.apply(F.d, F, [...I]), () => dh, (F) => ee(F));
  }
  function lt(...I) {
    return Fe((F) => Reflect.apply(xh, null, [F, ...I]), () => Cl(...I), "number format", (F) => Reflect.apply(F.n, F, [...I]), () => dh, (F) => ee(F));
  }
  function xt(I) {
    return I.map((F) => ee(F) || Qe(F) || Re(F) ? kh(String(F)) : F);
  }
  const Ut = {
    normalize: xt,
    interpolate: (I) => I,
    type: "vnode"
  };
  function Zt(...I) {
    return Fe(
      (F) => {
        let ne;
        const ie = F;
        try {
          ie.processor = Ut, ne = Reflect.apply(wh, null, [ie, ...I]);
        } finally {
          ie.processor = null;
        }
        return ne;
      },
      () => Sl(...I),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (F) => F[El](...I),
      (F) => [kh(F)],
      (F) => Ye(F)
    );
  }
  function St(...I) {
    return Fe(
      (F) => Reflect.apply(xh, null, [F, ...I]),
      () => Cl(...I),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (F) => F[Al](...I),
      Eh,
      (F) => ee(F) || Ye(F)
    );
  }
  function _n(...I) {
    return Fe(
      (F) => Reflect.apply(vh, null, [F, ...I]),
      () => kl(...I),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (F) => F[Tl](...I),
      Eh,
      (F) => ee(F) || Ye(F)
    );
  }
  function $i(I) {
    D = I, z.pluralRules = D;
  }
  function E(I, F) {
    return Fe(() => {
      if (!I)
        return !1;
      const ne = ee(F) ? F : u.value, ie = W(ne), $e = z.messageResolver(ie, I);
      return a ? $e != null : as($e) || Lt($e) || ee($e);
    }, () => [I], "translate exists", (ne) => Reflect.apply(ne.te, ne, [I, F]), Uv, (ne) => Re(ne));
  }
  function O(I) {
    let F = null;
    const ne = Ng(z, c.value, u.value);
    for (let ie = 0; ie < ne.length; ie++) {
      const $e = f.value[ne[ie]] || {}, Ue = z.messageResolver($e, I);
      if (Ue != null) {
        F = Ue;
        break;
      }
    }
    return F;
  }
  function R(I) {
    const F = O(I);
    return F ?? (n ? n.tm(I) || {} : {});
  }
  function W(I) {
    return f.value[I] || {};
  }
  function B(I, F) {
    if (r) {
      const ne = { [I]: F };
      for (const ie in ne)
        po(ne, ie) && tr(ne[ie]);
      F = ne[I];
    }
    f.value[I] = F, z.messages = f.value;
  }
  function q(I, F) {
    f.value[I] = f.value[I] || {};
    const ne = { [I]: F };
    if (r)
      for (const ie in ne)
        po(ne, ie) && tr(ne[ie]);
    F = ne[I], Gr(F, f.value[I]), z.messages = f.value;
  }
  function Y(I) {
    return h.value[I] || {};
  }
  function y(I, F) {
    h.value[I] = F, z.datetimeFormats = h.value, _h(z, I, F);
  }
  function _(I, F) {
    h.value[I] = ot(h.value[I] || {}, F), z.datetimeFormats = h.value, _h(z, I, F);
  }
  function A(I) {
    return d.value[I] || {};
  }
  function j(I, F) {
    d.value[I] = F, z.numberFormats = d.value, Sh(z, I, F);
  }
  function V(I, F) {
    d.value[I] = ot(d.value[I] || {}, F), z.numberFormats = d.value, Sh(z, I, F);
  }
  Th++, n && fo && (Ln(n.locale, (I) => {
    l && (u.value = I, z.locale = I, Cs(z, u.value, c.value));
  }), Ln(n.fallbackLocale, (I) => {
    l && (c.value = I, z.fallbackLocale = I, Cs(z, u.value, c.value));
  }));
  const U = {
    id: Th,
    locale: J,
    fallbackLocale: K,
    get inheritLocale() {
      return l;
    },
    set inheritLocale(I) {
      l = I, I && n && (u.value = n.locale.value, c.value = n.fallbackLocale.value, Cs(z, u.value, c.value));
    },
    get availableLocales() {
      return Object.keys(f.value).sort();
    },
    messages: le,
    get modifiers() {
      return P;
    },
    get pluralRules() {
      return D || {};
    },
    get isGlobal() {
      return s;
    },
    get missingWarn() {
      return p;
    },
    set missingWarn(I) {
      p = I, z.missingWarn = p;
    },
    get fallbackWarn() {
      return g;
    },
    set fallbackWarn(I) {
      g = I, z.fallbackWarn = g;
    },
    get fallbackRoot() {
      return v;
    },
    set fallbackRoot(I) {
      v = I;
    },
    get fallbackFormat() {
      return w;
    },
    set fallbackFormat(I) {
      w = I, z.fallbackFormat = w;
    },
    get warnHtmlMessage() {
      return T;
    },
    set warnHtmlMessage(I) {
      T = I, z.warnHtmlMessage = I;
    },
    get escapeParameter() {
      return M;
    },
    set escapeParameter(I) {
      M = I, z.escapeParameter = I;
    },
    t: qe,
    getLocaleMessage: W,
    setLocaleMessage: B,
    mergeLocaleMessage: q,
    getPostTranslationHandler: he,
    setPostTranslationHandler: ue,
    getMissingHandler: Te,
    setMissingHandler: _t,
    [Bv]: $i
  };
  return U.datetimeFormats = Ze, U.numberFormats = xe, U.rt = Jt, U.te = E, U.tm = R, U.d = Qt, U.n = lt, U.getDateTimeFormat = Y, U.setDateTimeFormat = y, U.mergeDateTimeFormat = _, U.getNumberFormat = A, U.setNumberFormat = j, U.mergeNumberFormat = V, U[jv] = i, U[El] = Zt, U[Tl] = _n, U[Al] = St, U;
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
function zv({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((i, s) => [
    ...i,
    // prettier-ignore
    ...s.type === Be ? s.children : [s]
  ], []) : t.reduce((n, i) => {
    const s = e[i];
    return s && (n[i] = s()), n;
  }, {});
}
function Gg(e) {
  return Be;
}
const Vv = /* @__PURE__ */ Di({
  /* eslint-disable */
  name: "i18n-t",
  props: ot({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (e) => Qe(e) || !isNaN(e)
    }
  }, tu),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const { slots: n, attrs: i } = t, s = e.i18n || ra({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const r = Object.keys(n).filter((f) => f !== "_"), o = {};
      e.locale && (o.locale = e.locale), e.plural !== void 0 && (o.plural = ee(e.plural) ? +e.plural : e.plural);
      const a = zv(t, r), l = s[El](e.keypath, a, o), u = ot({}, i), c = ee(e.tag) || ye(e.tag) ? e.tag : Gg();
      return Yc(c, u, l);
    };
  }
}), Oh = Vv;
function Gv(e) {
  return Ye(e) && !ee(e[0]);
}
function Hg(e, t, n, i) {
  const { slots: s, attrs: r } = t;
  return () => {
    const o = { part: !0 };
    let a = {};
    e.locale && (o.locale = e.locale), ee(e.format) ? o.key = e.format : ye(e.format) && (ee(e.format.key) && (o.key = e.format.key), a = Object.keys(e.format).reduce((h, d) => n.includes(d) ? ot({}, h, { [d]: e.format[d] }) : h, {}));
    const l = i(e.value, o, a);
    let u = [o.key];
    Ye(l) ? u = l.map((h, d) => {
      const p = s[h.type], g = p ? p({ [h.type]: h.value, index: d, parts: l }) : [h.value];
      return Gv(g) && (g[0].key = `${h.type}-${d}`), g;
    }) : ee(l) && (u = [l]);
    const c = ot({}, r), f = ee(e.tag) || ye(e.tag) ? e.tag : Gg();
    return Yc(f, c, u);
  };
}
const Hv = /* @__PURE__ */ Di({
  /* eslint-disable */
  name: "i18n-n",
  props: ot({
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
    const n = e.i18n || ra({
      useScope: e.scope,
      __useComponent: !0
    });
    return Hg(e, t, jg, (...i) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Al](...i)
    ));
  }
}), Ph = Hv, Kv = /* @__PURE__ */ Di({
  /* eslint-disable */
  name: "i18n-d",
  props: ot({
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
    const n = e.i18n || ra({
      useScope: e.scope,
      __useComponent: !0
    });
    return Hg(e, t, Bg, (...i) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Tl](...i)
    ));
  }
}), Nh = Kv;
function Yv(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const i = n.__getInstance(t);
    return i != null ? i.__composer : e.global.__composer;
  }
}
function Xv(e) {
  const t = (o) => {
    const { instance: a, modifiers: l, value: u } = o;
    if (!a || !a.$)
      throw Yt($t.UNEXPECTED_ERROR);
    const c = Yv(e, a.$), f = Ih(u);
    return [
      Reflect.apply(c.t, c, [...Mh(f)]),
      c
    ];
  };
  return {
    created: (o, a) => {
      const [l, u] = t(a);
      fo && e.global === u && (o.__i18nWatcher = Ln(u.locale, () => {
        a.instance && a.instance.$forceUpdate();
      })), o.__composer = u, o.textContent = l;
    },
    unmounted: (o) => {
      fo && o.__i18nWatcher && (o.__i18nWatcher(), o.__i18nWatcher = void 0, delete o.__i18nWatcher), o.__composer && (o.__composer = void 0, delete o.__composer);
    },
    beforeUpdate: (o, { value: a }) => {
      if (o.__composer) {
        const l = o.__composer, u = Ih(a);
        o.textContent = Reflect.apply(l.t, l, [
          ...Mh(u)
        ]);
      }
    },
    getSSRProps: (o) => {
      const [a] = t(o);
      return { textContent: a };
    }
  };
}
function Ih(e) {
  if (ee(e))
    return { path: e };
  if (ge(e)) {
    if (!("path" in e))
      throw Yt($t.REQUIRED_VALUE, "path");
    return e;
  } else
    throw Yt($t.INVALID_VALUE);
}
function Mh(e) {
  const { path: t, locale: n, args: i, choice: s, plural: r } = e, o = {}, a = i || {};
  return ee(n) && (o.locale = n), Qe(s) && (o.plural = s), Qe(r) && (o.plural = r), [t, a, o];
}
function Jv(e, t, ...n) {
  const i = ge(n[0]) ? n[0] : {}, s = !!i.useI18nComponentName;
  (Re(i.globalInstall) ? i.globalInstall : !0) && ([s ? "i18n" : Oh.name, "I18nT"].forEach((o) => e.component(o, Oh)), [Ph.name, "I18nN"].forEach((o) => e.component(o, Ph)), [Nh.name, "I18nD"].forEach((o) => e.component(o, Nh))), e.directive("t", Xv(t));
}
const Qv = /* @__PURE__ */ si("global-vue-i18n");
function Zv(e = {}, t) {
  const n = Re(e.globalInjection) ? e.globalInjection : !0, i = !0, s = /* @__PURE__ */ new Map(), [r, o] = e_(e), a = /* @__PURE__ */ si("");
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
        if (h.__VUE_I18N_SYMBOL__ = a, h.provide(h.__VUE_I18N_SYMBOL__, f), ge(d[0])) {
          const v = d[0];
          f.__composerExtend = v.__composerExtend, f.__vueI18nExtend = v.__vueI18nExtend;
        }
        let p = null;
        n && (p = l_(h, f.global)), Jv(h, f, ...d);
        const g = h.unmount;
        h.unmount = () => {
          p && p(), f.dispose(), g();
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
function ra(e = {}) {
  const t = ea();
  if (t == null)
    throw Yt($t.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Yt($t.NOT_INSTALLED);
  const n = t_(t), i = i_(n), s = zg(t), r = n_(e, s);
  if (r === "global")
    return qv(i, e, s), i;
  if (r === "parent") {
    let l = s_(n, t, e.__useComponent);
    return l == null && (l = i), l;
  }
  const o = n;
  let a = o.__getInstance(t);
  if (a == null) {
    const l = ot({}, e);
    "__i18n" in s && (l.__i18n = s.__i18n), i && (l.__root = i), a = Vg(l), o.__composerExtend && (a[Ol] = o.__composerExtend(a)), o_(o, t, a), o.__setInstance(t, a);
  }
  return a;
}
function e_(e, t, n) {
  const i = Jb();
  {
    const s = i.run(() => Vg(e));
    if (s == null)
      throw Yt($t.UNEXPECTED_ERROR);
    return [i, s];
  }
}
function t_(e) {
  {
    const t = Ws(e.isCE ? Qv : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw Yt(e.isCE ? $t.NOT_INSTALLED_WITH_PROVIDE : $t.UNEXPECTED_ERROR);
    return t;
  }
}
function n_(e, t) {
  return na(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function i_(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function s_(e, t, n = !1) {
  let i = null;
  const s = t.root;
  let r = r_(t, n);
  for (; r != null; ) {
    const o = e;
    if (e.mode === "composition" && (i = o.__getInstance(r)), i != null || s === r)
      break;
    r = r.parent;
  }
  return i;
}
function r_(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function o_(e, t, n) {
  zc(() => {
  }, t), Vc(() => {
    const i = n;
    e.__deleteInstance(t);
    const s = i[Ol];
    s && (s(), delete i[Ol]);
  }, t);
}
const a_ = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], Lh = ["t", "rt", "d", "n", "tm", "te"];
function l_(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return a_.forEach((s) => {
    const r = Object.getOwnPropertyDescriptor(t, s);
    if (!r)
      throw Yt($t.UNEXPECTED_ERROR);
    const o = tt(r.value) ? {
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
  }), e.config.globalProperties.$i18n = n, Lh.forEach((s) => {
    const r = Object.getOwnPropertyDescriptor(t, s);
    if (!r || !r.value)
      throw Yt($t.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${s}`, r);
  }), () => {
    delete e.config.globalProperties.$i18n, Lh.forEach((s) => {
      delete e.config.globalProperties[`$${s}`];
    });
  };
}
$v();
vv(Iv);
_v(tv);
xv(Ng);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const e = Xc();
  e.__INTLIFY__ = !0, uv(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const c_ = {
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
}, u_ = {
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
}, f_ = {
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
}, h_ = {
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
}, d_ = {
  en_US: c_,
  ca: u_,
  es_ES: f_,
  fr_FR: h_
};
var p_ = typeof global == "object" && global && global.Object === Object && global, g_ = typeof self == "object" && self && self.Object === Object && self, nu = p_ || g_ || Function("return this")(), ls = nu.Symbol, Kg = Object.prototype, m_ = Kg.hasOwnProperty, y_ = Kg.toString, Es = ls ? ls.toStringTag : void 0;
function b_(e) {
  var t = m_.call(e, Es), n = e[Es];
  try {
    e[Es] = void 0;
    var i = !0;
  } catch {
  }
  var s = y_.call(e);
  return i && (t ? e[Es] = n : delete e[Es]), s;
}
var w_ = Object.prototype, v_ = w_.toString;
function __(e) {
  return v_.call(e);
}
var x_ = "[object Null]", S_ = "[object Undefined]", Dh = ls ? ls.toStringTag : void 0;
function Yg(e) {
  return e == null ? e === void 0 ? S_ : x_ : Dh && Dh in Object(e) ? b_(e) : __(e);
}
function k_(e) {
  return e != null && typeof e == "object";
}
var C_ = "[object Symbol]";
function iu(e) {
  return typeof e == "symbol" || k_(e) && Yg(e) == C_;
}
function E_(e, t) {
  for (var n = -1, i = e == null ? 0 : e.length, s = Array(i); ++n < i; )
    s[n] = t(e[n], n, e);
  return s;
}
var su = Array.isArray, T_ = 1 / 0, Rh = ls ? ls.prototype : void 0, Fh = Rh ? Rh.toString : void 0;
function Xg(e) {
  if (typeof e == "string")
    return e;
  if (su(e))
    return E_(e, Xg) + "";
  if (iu(e))
    return Fh ? Fh.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -T_ ? "-0" : t;
}
function yo(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var A_ = "[object AsyncFunction]", O_ = "[object Function]", P_ = "[object GeneratorFunction]", N_ = "[object Proxy]";
function I_(e) {
  if (!yo(e))
    return !1;
  var t = Yg(e);
  return t == O_ || t == P_ || t == A_ || t == N_;
}
var Wa = nu["__core-js_shared__"], $h = function() {
  var e = /[^.]+$/.exec(Wa && Wa.keys && Wa.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function M_(e) {
  return !!$h && $h in e;
}
var L_ = Function.prototype, D_ = L_.toString;
function R_(e) {
  if (e != null) {
    try {
      return D_.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var F_ = /[\\^$.*+?()[\]{}|]/g, $_ = /^\[object .+?Constructor\]$/, B_ = Function.prototype, j_ = Object.prototype, q_ = B_.toString, U_ = j_.hasOwnProperty, W_ = RegExp(
  "^" + q_.call(U_).replace(F_, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function z_(e) {
  if (!yo(e) || M_(e))
    return !1;
  var t = I_(e) ? W_ : $_;
  return t.test(R_(e));
}
function V_(e, t) {
  return e == null ? void 0 : e[t];
}
function ru(e, t) {
  var n = V_(e, t);
  return z_(n) ? n : void 0;
}
var Bh = function() {
  try {
    var e = ru(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), G_ = 9007199254740991, H_ = /^(?:0|[1-9]\d*)$/;
function K_(e, t) {
  var n = typeof e;
  return t = t ?? G_, !!t && (n == "number" || n != "symbol" && H_.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Y_(e, t, n) {
  t == "__proto__" && Bh ? Bh(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Jg(e, t) {
  return e === t || e !== e && t !== t;
}
var X_ = Object.prototype, J_ = X_.hasOwnProperty;
function Q_(e, t, n) {
  var i = e[t];
  (!(J_.call(e, t) && Jg(i, n)) || n === void 0 && !(t in e)) && Y_(e, t, n);
}
var Z_ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ex = /^\w*$/;
function tx(e, t) {
  if (su(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || iu(e) ? !0 : ex.test(e) || !Z_.test(e) || t != null && e in Object(t);
}
var nr = ru(Object, "create");
function nx() {
  this.__data__ = nr ? nr(null) : {}, this.size = 0;
}
function ix(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var sx = "__lodash_hash_undefined__", rx = Object.prototype, ox = rx.hasOwnProperty;
function ax(e) {
  var t = this.__data__;
  if (nr) {
    var n = t[e];
    return n === sx ? void 0 : n;
  }
  return ox.call(t, e) ? t[e] : void 0;
}
var lx = Object.prototype, cx = lx.hasOwnProperty;
function ux(e) {
  var t = this.__data__;
  return nr ? t[e] !== void 0 : cx.call(t, e);
}
var fx = "__lodash_hash_undefined__";
function hx(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = nr && t === void 0 ? fx : t, this;
}
function Ti(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Ti.prototype.clear = nx;
Ti.prototype.delete = ix;
Ti.prototype.get = ax;
Ti.prototype.has = ux;
Ti.prototype.set = hx;
function dx() {
  this.__data__ = [], this.size = 0;
}
function oa(e, t) {
  for (var n = e.length; n--; )
    if (Jg(e[n][0], t))
      return n;
  return -1;
}
var px = Array.prototype, gx = px.splice;
function mx(e) {
  var t = this.__data__, n = oa(t, e);
  if (n < 0)
    return !1;
  var i = t.length - 1;
  return n == i ? t.pop() : gx.call(t, n, 1), --this.size, !0;
}
function yx(e) {
  var t = this.__data__, n = oa(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function bx(e) {
  return oa(this.__data__, e) > -1;
}
function wx(e, t) {
  var n = this.__data__, i = oa(n, e);
  return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this;
}
function ys(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
ys.prototype.clear = dx;
ys.prototype.delete = mx;
ys.prototype.get = yx;
ys.prototype.has = bx;
ys.prototype.set = wx;
var vx = ru(nu, "Map");
function _x() {
  this.size = 0, this.__data__ = {
    hash: new Ti(),
    map: new (vx || ys)(),
    string: new Ti()
  };
}
function xx(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function aa(e, t) {
  var n = e.__data__;
  return xx(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Sx(e) {
  var t = aa(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function kx(e) {
  return aa(this, e).get(e);
}
function Cx(e) {
  return aa(this, e).has(e);
}
function Ex(e, t) {
  var n = aa(this, e), i = n.size;
  return n.set(e, t), this.size += n.size == i ? 0 : 1, this;
}
function Ri(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Ri.prototype.clear = _x;
Ri.prototype.delete = Sx;
Ri.prototype.get = kx;
Ri.prototype.has = Cx;
Ri.prototype.set = Ex;
var Tx = "Expected a function";
function ou(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Tx);
  var n = function() {
    var i = arguments, s = t ? t.apply(this, i) : i[0], r = n.cache;
    if (r.has(s))
      return r.get(s);
    var o = e.apply(this, i);
    return n.cache = r.set(s, o) || r, o;
  };
  return n.cache = new (ou.Cache || Ri)(), n;
}
ou.Cache = Ri;
var Ax = 500;
function Ox(e) {
  var t = ou(e, function(i) {
    return n.size === Ax && n.clear(), i;
  }), n = t.cache;
  return t;
}
var Px = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Nx = /\\(\\)?/g, Ix = Ox(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Px, function(n, i, s, r) {
    t.push(s ? r.replace(Nx, "$1") : i || n);
  }), t;
});
function Mx(e) {
  return e == null ? "" : Xg(e);
}
function Qg(e, t) {
  return su(e) ? e : tx(e, t) ? [e] : Ix(Mx(e));
}
var Lx = 1 / 0;
function Zg(e) {
  if (typeof e == "string" || iu(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Lx ? "-0" : t;
}
function Dx(e, t) {
  t = Qg(t, e);
  for (var n = 0, i = t.length; e != null && n < i; )
    e = e[Zg(t[n++])];
  return n && n == i ? e : void 0;
}
function bo(e, t, n) {
  var i = e == null ? void 0 : Dx(e, t);
  return i === void 0 ? n : i;
}
function Rx(e, t, n, i) {
  if (!yo(e))
    return e;
  t = Qg(t, e);
  for (var s = -1, r = t.length, o = r - 1, a = e; a != null && ++s < r; ) {
    var l = Zg(t[s]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (s != o) {
      var c = a[l];
      u = void 0, u === void 0 && (u = yo(c) ? c : K_(t[s + 1]) ? [] : {});
    }
    Q_(a, l, u), a = a[l];
  }
  return e;
}
function jh(e, t, n) {
  return e == null ? e : Rx(e, t, n);
}
var Pl = "http://www.w3.org/1999/xhtml";
const qh = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Pl,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function em(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), qh.hasOwnProperty(t) ? { space: qh[t], local: e } : e;
}
function Fx(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Pl && t.documentElement.namespaceURI === Pl ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function $x(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function tm(e) {
  var t = em(e);
  return (t.local ? $x : Fx)(t);
}
function Bx() {
}
function nm(e) {
  return e == null ? Bx : function() {
    return this.querySelector(e);
  };
}
function jx(e) {
  typeof e != "function" && (e = nm(e));
  for (var t = this._groups, n = t.length, i = new Array(n), s = 0; s < n; ++s)
    for (var r = t[s], o = r.length, a = i[s] = new Array(o), l, u, c = 0; c < o; ++c)
      (l = r[c]) && (u = e.call(l, l.__data__, c, r)) && ("__data__" in l && (u.__data__ = l.__data__), a[c] = u);
  return new vt(i, this._parents);
}
function im(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function qx() {
  return [];
}
function Ux(e) {
  return e == null ? qx : function() {
    return this.querySelectorAll(e);
  };
}
function Wx(e) {
  return function() {
    return im(e.apply(this, arguments));
  };
}
function zx(e) {
  typeof e == "function" ? e = Wx(e) : e = Ux(e);
  for (var t = this._groups, n = t.length, i = [], s = [], r = 0; r < n; ++r)
    for (var o = t[r], a = o.length, l, u = 0; u < a; ++u)
      (l = o[u]) && (i.push(e.call(l, l.__data__, u, o)), s.push(l));
  return new vt(i, s);
}
function Vx(e) {
  return function() {
    return this.matches(e);
  };
}
function sm(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Gx = Array.prototype.find;
function Hx(e) {
  return function() {
    return Gx.call(this.children, e);
  };
}
function Kx() {
  return this.firstElementChild;
}
function Yx(e) {
  return this.select(e == null ? Kx : Hx(typeof e == "function" ? e : sm(e)));
}
var Xx = Array.prototype.filter;
function Jx() {
  return Array.from(this.children);
}
function Qx(e) {
  return function() {
    return Xx.call(this.children, e);
  };
}
function Zx(e) {
  return this.selectAll(e == null ? Jx : Qx(typeof e == "function" ? e : sm(e)));
}
function eS(e) {
  typeof e != "function" && (e = Vx(e));
  for (var t = this._groups, n = t.length, i = new Array(n), s = 0; s < n; ++s)
    for (var r = t[s], o = r.length, a = i[s] = [], l, u = 0; u < o; ++u)
      (l = r[u]) && e.call(l, l.__data__, u, r) && a.push(l);
  return new vt(i, this._parents);
}
function rm(e) {
  return new Array(e.length);
}
function tS() {
  return new vt(this._enter || this._groups.map(rm), this._parents);
}
function wo(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
wo.prototype = {
  constructor: wo,
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
function nS(e) {
  return function() {
    return e;
  };
}
function iS(e, t, n, i, s, r) {
  for (var o = 0, a, l = t.length, u = r.length; o < u; ++o)
    (a = t[o]) ? (a.__data__ = r[o], i[o] = a) : n[o] = new wo(e, r[o]);
  for (; o < l; ++o)
    (a = t[o]) && (s[o] = a);
}
function sS(e, t, n, i, s, r, o) {
  var a, l, u = /* @__PURE__ */ new Map(), c = t.length, f = r.length, h = new Array(c), d;
  for (a = 0; a < c; ++a)
    (l = t[a]) && (h[a] = d = o.call(l, l.__data__, a, t) + "", u.has(d) ? s[a] = l : u.set(d, l));
  for (a = 0; a < f; ++a)
    d = o.call(e, r[a], a, r) + "", (l = u.get(d)) ? (i[a] = l, l.__data__ = r[a], u.delete(d)) : n[a] = new wo(e, r[a]);
  for (a = 0; a < c; ++a)
    (l = t[a]) && u.get(h[a]) === l && (s[a] = l);
}
function rS(e) {
  return e.__data__;
}
function oS(e, t) {
  if (!arguments.length) return Array.from(this, rS);
  var n = t ? sS : iS, i = this._parents, s = this._groups;
  typeof e != "function" && (e = nS(e));
  for (var r = s.length, o = new Array(r), a = new Array(r), l = new Array(r), u = 0; u < r; ++u) {
    var c = i[u], f = s[u], h = f.length, d = aS(e.call(c, c && c.__data__, u, i)), p = d.length, g = a[u] = new Array(p), v = o[u] = new Array(p), w = l[u] = new Array(h);
    n(c, f, g, v, w, d, t);
    for (var k = 0, b = 0, C, T; k < p; ++k)
      if (C = g[k]) {
        for (k >= b && (b = k + 1); !(T = v[b]) && ++b < p; ) ;
        C._next = T || null;
      }
  }
  return o = new vt(o, i), o._enter = a, o._exit = l, o;
}
function aS(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function lS() {
  return new vt(this._exit || this._groups.map(rm), this._parents);
}
function cS(e, t, n) {
  var i = this.enter(), s = this, r = this.exit();
  return typeof e == "function" ? (i = e(i), i && (i = i.selection())) : i = i.append(e + ""), t != null && (s = t(s), s && (s = s.selection())), n == null ? r.remove() : n(r), i && s ? i.merge(s).order() : s;
}
function uS(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, i = t._groups, s = n.length, r = i.length, o = Math.min(s, r), a = new Array(s), l = 0; l < o; ++l)
    for (var u = n[l], c = i[l], f = u.length, h = a[l] = new Array(f), d, p = 0; p < f; ++p)
      (d = u[p] || c[p]) && (h[p] = d);
  for (; l < s; ++l)
    a[l] = n[l];
  return new vt(a, this._parents);
}
function fS() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var i = e[t], s = i.length - 1, r = i[s], o; --s >= 0; )
      (o = i[s]) && (r && o.compareDocumentPosition(r) ^ 4 && r.parentNode.insertBefore(o, r), r = o);
  return this;
}
function hS(e) {
  e || (e = dS);
  function t(f, h) {
    return f && h ? e(f.__data__, h.__data__) : !f - !h;
  }
  for (var n = this._groups, i = n.length, s = new Array(i), r = 0; r < i; ++r) {
    for (var o = n[r], a = o.length, l = s[r] = new Array(a), u, c = 0; c < a; ++c)
      (u = o[c]) && (l[c] = u);
    l.sort(t);
  }
  return new vt(s, this._parents).order();
}
function dS(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function pS() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function gS() {
  return Array.from(this);
}
function mS() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var i = e[t], s = 0, r = i.length; s < r; ++s) {
      var o = i[s];
      if (o) return o;
    }
  return null;
}
function yS() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function bS() {
  return !this.node();
}
function wS(e) {
  for (var t = this._groups, n = 0, i = t.length; n < i; ++n)
    for (var s = t[n], r = 0, o = s.length, a; r < o; ++r)
      (a = s[r]) && e.call(a, a.__data__, r, s);
  return this;
}
function vS(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function _S(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function xS(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function SS(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function kS(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function CS(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function ES(e, t) {
  var n = em(e);
  if (arguments.length < 2) {
    var i = this.node();
    return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n);
  }
  return this.each((t == null ? n.local ? _S : vS : typeof t == "function" ? n.local ? CS : kS : n.local ? SS : xS)(n, t));
}
function om(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function TS(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function AS(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function OS(e, t, n) {
  return function() {
    var i = t.apply(this, arguments);
    i == null ? this.style.removeProperty(e) : this.style.setProperty(e, i, n);
  };
}
function PS(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? TS : typeof t == "function" ? OS : AS)(e, t, n ?? "")) : NS(this.node(), e);
}
function NS(e, t) {
  return e.style.getPropertyValue(t) || om(e).getComputedStyle(e, null).getPropertyValue(t);
}
function IS(e) {
  return function() {
    delete this[e];
  };
}
function MS(e, t) {
  return function() {
    this[e] = t;
  };
}
function LS(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function DS(e, t) {
  return arguments.length > 1 ? this.each((t == null ? IS : typeof t == "function" ? LS : MS)(e, t)) : this.node()[e];
}
function am(e) {
  return e.trim().split(/^|\s+/);
}
function au(e) {
  return e.classList || new lm(e);
}
function lm(e) {
  this._node = e, this._names = am(e.getAttribute("class") || "");
}
lm.prototype = {
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
function cm(e, t) {
  for (var n = au(e), i = -1, s = t.length; ++i < s; ) n.add(t[i]);
}
function um(e, t) {
  for (var n = au(e), i = -1, s = t.length; ++i < s; ) n.remove(t[i]);
}
function RS(e) {
  return function() {
    cm(this, e);
  };
}
function FS(e) {
  return function() {
    um(this, e);
  };
}
function $S(e, t) {
  return function() {
    (t.apply(this, arguments) ? cm : um)(this, e);
  };
}
function BS(e, t) {
  var n = am(e + "");
  if (arguments.length < 2) {
    for (var i = au(this.node()), s = -1, r = n.length; ++s < r; ) if (!i.contains(n[s])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? $S : t ? RS : FS)(n, t));
}
function jS() {
  this.textContent = "";
}
function qS(e) {
  return function() {
    this.textContent = e;
  };
}
function US(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function WS(e) {
  return arguments.length ? this.each(e == null ? jS : (typeof e == "function" ? US : qS)(e)) : this.node().textContent;
}
function zS() {
  this.innerHTML = "";
}
function VS(e) {
  return function() {
    this.innerHTML = e;
  };
}
function GS(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function HS(e) {
  return arguments.length ? this.each(e == null ? zS : (typeof e == "function" ? GS : VS)(e)) : this.node().innerHTML;
}
function KS() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function YS() {
  return this.each(KS);
}
function XS() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function JS() {
  return this.each(XS);
}
function QS(e) {
  var t = typeof e == "function" ? e : tm(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function ZS() {
  return null;
}
function ek(e, t) {
  var n = typeof e == "function" ? e : tm(e), i = t == null ? ZS : typeof t == "function" ? t : nm(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function tk() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function nk() {
  return this.each(tk);
}
function ik() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function sk() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function rk(e) {
  return this.select(e ? sk : ik);
}
function ok(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function ak(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function lk(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", i = t.indexOf(".");
    return i >= 0 && (n = t.slice(i + 1), t = t.slice(0, i)), { type: t, name: n };
  });
}
function ck(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, i = -1, s = t.length, r; n < s; ++n)
        r = t[n], (!e.type || r.type === e.type) && r.name === e.name ? this.removeEventListener(r.type, r.listener, r.options) : t[++i] = r;
      ++i ? t.length = i : delete this.__on;
    }
  };
}
function uk(e, t, n) {
  return function() {
    var i = this.__on, s, r = ak(t);
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
function fk(e, t, n) {
  var i = lk(e + ""), s, r = i.length, o;
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
  for (a = t ? uk : ck, s = 0; s < r; ++s) this.each(a(i[s], t, n));
  return this;
}
function fm(e, t, n) {
  var i = om(e), s = i.CustomEvent;
  typeof s == "function" ? s = new s(t, n) : (s = i.document.createEvent("Event"), n ? (s.initEvent(t, n.bubbles, n.cancelable), s.detail = n.detail) : s.initEvent(t, !1, !1)), e.dispatchEvent(s);
}
function hk(e, t) {
  return function() {
    return fm(this, e, t);
  };
}
function dk(e, t) {
  return function() {
    return fm(this, e, t.apply(this, arguments));
  };
}
function pk(e, t) {
  return this.each((typeof t == "function" ? dk : hk)(e, t));
}
function* gk() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var i = e[t], s = 0, r = i.length, o; s < r; ++s)
      (o = i[s]) && (yield o);
}
var hm = [null];
function vt(e, t) {
  this._groups = e, this._parents = t;
}
function mk() {
  return this;
}
vt.prototype = {
  constructor: vt,
  select: jx,
  selectAll: zx,
  selectChild: Yx,
  selectChildren: Zx,
  filter: eS,
  data: oS,
  enter: tS,
  exit: lS,
  join: cS,
  merge: uS,
  selection: mk,
  order: fS,
  sort: hS,
  call: pS,
  nodes: gS,
  node: mS,
  size: yS,
  empty: bS,
  each: wS,
  attr: ES,
  style: PS,
  property: DS,
  classed: BS,
  text: WS,
  html: HS,
  raise: YS,
  lower: JS,
  append: QS,
  insert: ek,
  remove: nk,
  clone: rk,
  datum: ok,
  on: fk,
  dispatch: pk,
  [Symbol.iterator]: gk
};
function yk(e) {
  return typeof e == "string" ? new vt([[document.querySelector(e)]], [document.documentElement]) : new vt([[e]], hm);
}
function bk(e) {
  return typeof e == "string" ? new vt([document.querySelectorAll(e)], [document.documentElement]) : new vt([im(e)], hm);
}
function Hr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function wk(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function dm(e) {
  let t, n, i;
  e.length !== 2 ? (t = Hr, n = (a, l) => Hr(e(a), l), i = (a, l) => e(a) - l) : (t = e === Hr || e === wk ? e : vk, n = e, i = e);
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
function vk() {
  return 0;
}
function _k(e) {
  return e === null ? NaN : +e;
}
const xk = dm(Hr), Sk = xk.right;
dm(_k).center;
const kk = Math.sqrt(50), Ck = Math.sqrt(10), Ek = Math.sqrt(2);
function vo(e, t, n) {
  const i = (t - e) / Math.max(0, n), s = Math.floor(Math.log10(i)), r = i / Math.pow(10, s), o = r >= kk ? 10 : r >= Ck ? 5 : r >= Ek ? 2 : 1;
  let a, l, u;
  return s < 0 ? (u = Math.pow(10, -s) / o, a = Math.round(e * u), l = Math.round(t * u), a / u < e && ++a, l / u > t && --l, u = -u) : (u = Math.pow(10, s) * o, a = Math.round(e / u), l = Math.round(t / u), a * u < e && ++a, l * u > t && --l), l < a && 0.5 <= n && n < 2 ? vo(e, t, n * 2) : [a, l, u];
}
function Tk(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0)) return [];
  if (e === t) return [e];
  const i = t < e, [s, r, o] = i ? vo(t, e, n) : vo(e, t, n);
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
  return t = +t, e = +e, n = +n, vo(e, t, n)[2];
}
function Ak(e, t, n) {
  t = +t, e = +e, n = +n;
  const i = t < e, s = i ? Nl(t, e, n) : Nl(e, t, n);
  return (i ? -1 : 1) * (s < 0 ? 1 / -s : s);
}
function Ok(e, t) {
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
function Pk(e, t) {
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
function pm(e, t) {
  var n = Object.create(e.prototype);
  for (var i in t) n[i] = t[i];
  return n;
}
function dr() {
}
var ir = 0.7, _o = 1 / ir, ts = "\\s*([+-]?\\d+)\\s*", sr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", dn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Nk = /^#([0-9a-f]{3,8})$/, Ik = new RegExp(`^rgb\\(${ts},${ts},${ts}\\)$`), Mk = new RegExp(`^rgb\\(${dn},${dn},${dn}\\)$`), Lk = new RegExp(`^rgba\\(${ts},${ts},${ts},${sr}\\)$`), Dk = new RegExp(`^rgba\\(${dn},${dn},${dn},${sr}\\)$`), Rk = new RegExp(`^hsl\\(${sr},${dn},${dn}\\)$`), Fk = new RegExp(`^hsla\\(${sr},${dn},${dn},${sr}\\)$`), Uh = {
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
lu(dr, cs, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Wh,
  // Deprecated! Use color.formatHex.
  formatHex: Wh,
  formatHex8: $k,
  formatHsl: Bk,
  formatRgb: zh,
  toString: zh
});
function Wh() {
  return this.rgb().formatHex();
}
function $k() {
  return this.rgb().formatHex8();
}
function Bk() {
  return gm(this).formatHsl();
}
function zh() {
  return this.rgb().formatRgb();
}
function cs(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Nk.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Vh(t) : n === 3 ? new wt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Pr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Pr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Ik.exec(e)) ? new wt(t[1], t[2], t[3], 1) : (t = Mk.exec(e)) ? new wt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Lk.exec(e)) ? Pr(t[1], t[2], t[3], t[4]) : (t = Dk.exec(e)) ? Pr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Rk.exec(e)) ? Kh(t[1], t[2] / 100, t[3] / 100, 1) : (t = Fk.exec(e)) ? Kh(t[1], t[2] / 100, t[3] / 100, t[4]) : Uh.hasOwnProperty(e) ? Vh(Uh[e]) : e === "transparent" ? new wt(NaN, NaN, NaN, 0) : null;
}
function Vh(e) {
  return new wt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Pr(e, t, n, i) {
  return i <= 0 && (e = t = n = NaN), new wt(e, t, n, i);
}
function jk(e) {
  return e instanceof dr || (e = cs(e)), e ? (e = e.rgb(), new wt(e.r, e.g, e.b, e.opacity)) : new wt();
}
function We(e, t, n, i) {
  return arguments.length === 1 ? jk(e) : new wt(e, t, n, i ?? 1);
}
function wt(e, t, n, i) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +i;
}
lu(wt, We, pm(dr, {
  brighter(e) {
    return e = e == null ? _o : Math.pow(_o, e), new wt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ir : Math.pow(ir, e), new wt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new wt(bi(this.r), bi(this.g), bi(this.b), xo(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Gh,
  // Deprecated! Use color.formatHex.
  formatHex: Gh,
  formatHex8: qk,
  formatRgb: Hh,
  toString: Hh
}));
function Gh() {
  return `#${mi(this.r)}${mi(this.g)}${mi(this.b)}`;
}
function qk() {
  return `#${mi(this.r)}${mi(this.g)}${mi(this.b)}${mi((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Hh() {
  const e = xo(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${bi(this.r)}, ${bi(this.g)}, ${bi(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function xo(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function bi(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function mi(e) {
  return e = bi(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Kh(e, t, n, i) {
  return i <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Vt(e, t, n, i);
}
function gm(e) {
  if (e instanceof Vt) return new Vt(e.h, e.s, e.l, e.opacity);
  if (e instanceof dr || (e = cs(e)), !e) return new Vt();
  if (e instanceof Vt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, i = e.b / 255, s = Math.min(t, n, i), r = Math.max(t, n, i), o = NaN, a = r - s, l = (r + s) / 2;
  return a ? (t === r ? o = (n - i) / a + (n < i) * 6 : n === r ? o = (i - t) / a + 2 : o = (t - n) / a + 4, a /= l < 0.5 ? r + s : 2 - r - s, o *= 60) : a = l > 0 && l < 1 ? 0 : o, new Vt(o, a, l, e.opacity);
}
function Uk(e, t, n, i) {
  return arguments.length === 1 ? gm(e) : new Vt(e, t, n, i ?? 1);
}
function Vt(e, t, n, i) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +i;
}
lu(Vt, Uk, pm(dr, {
  brighter(e) {
    return e = e == null ? _o : Math.pow(_o, e), new Vt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ir : Math.pow(ir, e), new Vt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, i = n + (n < 0.5 ? n : 1 - n) * t, s = 2 * n - i;
    return new wt(
      za(e >= 240 ? e - 240 : e + 120, s, i),
      za(e, s, i),
      za(e < 120 ? e + 240 : e - 120, s, i),
      this.opacity
    );
  },
  clamp() {
    return new Vt(Yh(this.h), Nr(this.s), Nr(this.l), xo(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = xo(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Yh(this.h)}, ${Nr(this.s) * 100}%, ${Nr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Yh(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Nr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function za(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const cu = (e) => () => e;
function Wk(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function zk(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(i) {
    return Math.pow(e + i * t, n);
  };
}
function Vk(e) {
  return (e = +e) == 1 ? mm : function(t, n) {
    return n - t ? zk(t, n, e) : cu(isNaN(t) ? n : t);
  };
}
function mm(e, t) {
  var n = t - e;
  return n ? Wk(e, n) : cu(isNaN(e) ? t : e);
}
const Xh = function e(t) {
  var n = Vk(t);
  function i(s, r) {
    var o = n((s = We(s)).r, (r = We(r)).r), a = n(s.g, r.g), l = n(s.b, r.b), u = mm(s.opacity, r.opacity);
    return function(c) {
      return s.r = o(c), s.g = a(c), s.b = l(c), s.opacity = u(c), s + "";
    };
  }
  return i.gamma = e, i;
}(1);
function Gk(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, i = t.slice(), s;
  return function(r) {
    for (s = 0; s < n; ++s) i[s] = e[s] * (1 - r) + t[s] * r;
    return i;
  };
}
function Hk(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Kk(e, t) {
  var n = t ? t.length : 0, i = e ? Math.min(n, e.length) : 0, s = new Array(i), r = new Array(n), o;
  for (o = 0; o < i; ++o) s[o] = la(e[o], t[o]);
  for (; o < n; ++o) r[o] = t[o];
  return function(a) {
    for (o = 0; o < i; ++o) r[o] = s[o](a);
    return r;
  };
}
function Yk(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(i) {
    return n.setTime(e * (1 - i) + t * i), n;
  };
}
function So(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Xk(e, t) {
  var n = {}, i = {}, s;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (s in t)
    s in e ? n[s] = la(e[s], t[s]) : i[s] = t[s];
  return function(r) {
    for (s in n) i[s] = n[s](r);
    return i;
  };
}
var Il = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Va = new RegExp(Il.source, "g");
function Jk(e) {
  return function() {
    return e;
  };
}
function Qk(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Zk(e, t) {
  var n = Il.lastIndex = Va.lastIndex = 0, i, s, r, o = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (i = Il.exec(e)) && (s = Va.exec(t)); )
    (r = s.index) > n && (r = t.slice(n, r), a[o] ? a[o] += r : a[++o] = r), (i = i[0]) === (s = s[0]) ? a[o] ? a[o] += s : a[++o] = s : (a[++o] = null, l.push({ i: o, x: So(i, s) })), n = Va.lastIndex;
  return n < t.length && (r = t.slice(n), a[o] ? a[o] += r : a[++o] = r), a.length < 2 ? l[0] ? Qk(l[0].x) : Jk(t) : (t = l.length, function(u) {
    for (var c = 0, f; c < t; ++c) a[(f = l[c]).i] = f.x(u);
    return a.join("");
  });
}
function la(e, t) {
  var n = typeof t, i;
  return t == null || n === "boolean" ? cu(t) : (n === "number" ? So : n === "string" ? (i = cs(t)) ? (t = i, Xh) : Zk : t instanceof cs ? Xh : t instanceof Date ? Yk : Hk(t) ? Gk : Array.isArray(t) ? Kk : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Xk : So)(e, t);
}
function ym(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function eC(e) {
  return function() {
    return e;
  };
}
function tC(e) {
  return +e;
}
var Jh = [0, 1];
function Hn(e) {
  return e;
}
function Ml(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : eC(isNaN(t) ? NaN : 0.5);
}
function nC(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(i) {
    return Math.max(e, Math.min(t, i));
  };
}
function iC(e, t, n) {
  var i = e[0], s = e[1], r = t[0], o = t[1];
  return s < i ? (i = Ml(s, i), r = n(o, r)) : (i = Ml(i, s), r = n(r, o)), function(a) {
    return r(i(a));
  };
}
function sC(e, t, n) {
  var i = Math.min(e.length, t.length) - 1, s = new Array(i), r = new Array(i), o = -1;
  for (e[i] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < i; )
    s[o] = Ml(e[o], e[o + 1]), r[o] = n(t[o], t[o + 1]);
  return function(a) {
    var l = Sk(e, a, 1, i) - 1;
    return r[l](s[l](a));
  };
}
function rC(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function oC() {
  var e = Jh, t = Jh, n = la, i, s, r, o = Hn, a, l, u;
  function c() {
    var h = Math.min(e.length, t.length);
    return o !== Hn && (o = nC(e[0], e[h - 1])), a = h > 2 ? sC : iC, l = u = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? r : (l || (l = a(e.map(i), t, n)))(i(o(h)));
  }
  return f.invert = function(h) {
    return o(s((u || (u = a(t, e.map(i), So)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (e = Array.from(h, tC), c()) : e.slice();
  }, f.range = function(h) {
    return arguments.length ? (t = Array.from(h), c()) : t.slice();
  }, f.rangeRound = function(h) {
    return t = Array.from(h), n = ym, c();
  }, f.clamp = function(h) {
    return arguments.length ? (o = h ? !0 : Hn, c()) : o !== Hn;
  }, f.interpolate = function(h) {
    return arguments.length ? (n = h, c()) : n;
  }, f.unknown = function(h) {
    return arguments.length ? (r = h, f) : r;
  }, function(h, d) {
    return i = h, s = d, c();
  };
}
function aC() {
  return oC()(Hn, Hn);
}
function lC(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function ko(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var n, i = e.slice(0, n);
  return [
    i.length > 1 ? i[0] + i.slice(2) : i,
    +e.slice(n + 1)
  ];
}
function us(e) {
  return e = ko(Math.abs(e)), e ? e[1] : NaN;
}
function cC(e, t) {
  return function(n, i) {
    for (var s = n.length, r = [], o = 0, a = e[0], l = 0; s > 0 && a > 0 && (l + a + 1 > i && (a = Math.max(1, i - l)), r.push(n.substring(s -= a, s + a)), !((l += a + 1) > i)); )
      a = e[o = (o + 1) % e.length];
    return r.reverse().join(t);
  };
}
function uC(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var fC = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Co(e) {
  if (!(t = fC.exec(e))) throw new Error("invalid format: " + e);
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
Co.prototype = uu.prototype;
function uu(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
uu.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function hC(e) {
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
var bm;
function dC(e, t) {
  var n = ko(e, t);
  if (!n) return e + "";
  var i = n[0], s = n[1], r = s - (bm = Math.max(-8, Math.min(8, Math.floor(s / 3))) * 3) + 1, o = i.length;
  return r === o ? i : r > o ? i + new Array(r - o + 1).join("0") : r > 0 ? i.slice(0, r) + "." + i.slice(r) : "0." + new Array(1 - r).join("0") + ko(e, Math.max(0, t + r - 1))[0];
}
function Qh(e, t) {
  var n = ko(e, t);
  if (!n) return e + "";
  var i = n[0], s = n[1];
  return s < 0 ? "0." + new Array(-s).join("0") + i : i.length > s + 1 ? i.slice(0, s + 1) + "." + i.slice(s + 1) : i + new Array(s - i.length + 2).join("0");
}
const Zh = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: lC,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Qh(e * 100, t),
  r: Qh,
  s: dC,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function ed(e) {
  return e;
}
var td = Array.prototype.map, nd = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function pC(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? ed : cC(td.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", i = e.currency === void 0 ? "" : e.currency[1] + "", s = e.decimal === void 0 ? "." : e.decimal + "", r = e.numerals === void 0 ? ed : uC(td.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", a = e.minus === void 0 ? "−" : e.minus + "", l = e.nan === void 0 ? "NaN" : e.nan + "";
  function u(f) {
    f = Co(f);
    var h = f.fill, d = f.align, p = f.sign, g = f.symbol, v = f.zero, w = f.width, k = f.comma, b = f.precision, C = f.trim, T = f.type;
    T === "n" ? (k = !0, T = "g") : Zh[T] || (b === void 0 && (b = 12), C = !0, T = "g"), (v || h === "0" && d === "=") && (v = !0, h = "0", d = "=");
    var M = g === "$" ? n : g === "#" && /[boxX]/.test(T) ? "0" + T.toLowerCase() : "", P = g === "$" ? i : /[%p]/.test(T) ? o : "", D = Zh[T], z = /[defgprs%]/.test(T);
    b = b === void 0 ? 6 : /[gprs]/.test(T) ? Math.max(1, Math.min(21, b)) : Math.max(0, Math.min(20, b));
    function H(G) {
      var J = M, K = P, le, Ze, xe;
      if (T === "c")
        K = D(G) + K, G = "";
      else {
        G = +G;
        var he = G < 0 || 1 / G < 0;
        if (G = isNaN(G) ? l : D(Math.abs(G), b), C && (G = hC(G)), he && +G == 0 && p !== "+" && (he = !1), J = (he ? p === "(" ? p : a : p === "-" || p === "(" ? "" : p) + J, K = (T === "s" ? nd[8 + bm / 3] : "") + K + (he && p === "(" ? ")" : ""), z) {
          for (le = -1, Ze = G.length; ++le < Ze; )
            if (xe = G.charCodeAt(le), 48 > xe || xe > 57) {
              K = (xe === 46 ? s + G.slice(le + 1) : G.slice(le)) + K, G = G.slice(0, le);
              break;
            }
        }
      }
      k && !v && (G = t(G, 1 / 0));
      var ue = J.length + G.length + K.length, Te = ue < w ? new Array(w - ue + 1).join(h) : "";
      switch (k && v && (G = t(Te + G, Te.length ? w - K.length : 1 / 0), Te = ""), d) {
        case "<":
          G = J + G + K + Te;
          break;
        case "=":
          G = J + Te + G + K;
          break;
        case "^":
          G = Te.slice(0, ue = Te.length >> 1) + J + G + K + Te.slice(ue);
          break;
        default:
          G = Te + J + G + K;
          break;
      }
      return r(G);
    }
    return H.toString = function() {
      return f + "";
    }, H;
  }
  function c(f, h) {
    var d = u((f = Co(f), f.type = "f", f)), p = Math.max(-8, Math.min(8, Math.floor(us(h) / 3))) * 3, g = Math.pow(10, -p), v = nd[8 + p / 3];
    return function(w) {
      return d(g * w) + v;
    };
  }
  return {
    format: u,
    formatPrefix: c
  };
}
var Ir, fu, wm;
gC({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function gC(e) {
  return Ir = pC(e), fu = Ir.format, wm = Ir.formatPrefix, Ir;
}
function vm(e) {
  return Math.max(0, -us(Math.abs(e)));
}
function mC(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(us(t) / 3))) * 3 - us(Math.abs(e)));
}
function yC(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, us(t) - us(e)) + 1;
}
function bC(e, t, n, i) {
  var s = Ak(e, t, n), r;
  switch (i = Co(i ?? ",f"), i.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return i.precision == null && !isNaN(r = mC(s, o)) && (i.precision = r), wm(i, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      i.precision == null && !isNaN(r = yC(s, Math.max(Math.abs(e), Math.abs(t)))) && (i.precision = r - (i.type === "e"));
      break;
    }
    case "f":
    case "%": {
      i.precision == null && !isNaN(r = vm(s)) && (i.precision = r - (i.type === "%") * 2);
      break;
    }
  }
  return fu(i);
}
function _m(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var i = t();
    return Tk(i[0], i[i.length - 1], n ?? 10);
  }, e.tickFormat = function(n, i) {
    var s = t();
    return bC(s[0], s[s.length - 1], n ?? 10, i);
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
function xm() {
  var e = aC();
  return e.copy = function() {
    return rC(e, xm());
  }, Ok.apply(e, arguments), _m(e);
}
function wC() {
  var e = 0, t = 1, n, i, s, r, o = Hn, a = !1, l;
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
  return u.range = c(la), u.rangeRound = c(ym), u.unknown = function(f) {
    return arguments.length ? (l = f, u) : l;
  }, function(f) {
    return r = f, n = f(e), i = f(t), s = n === i ? 0 : 1 / (i - n), u;
  };
}
function vC(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function Sm() {
  var e = _m(wC()(Hn));
  return e.copy = function() {
    return vC(e, Sm());
  }, Pk.apply(e, arguments);
}
function _C(e) {
  return e;
}
var Kr = 1, Yr = 2, Ll = 3, Is = 4, id = 1e-6;
function xC(e) {
  return "translate(" + e + ",0)";
}
function SC(e) {
  return "translate(0," + e + ")";
}
function kC(e) {
  return (t) => +e(t);
}
function CC(e, t) {
  return t = Math.max(0, e.bandwidth() - t * 2) / 2, e.round() && (t = Math.round(t)), (n) => +e(n) + t;
}
function EC() {
  return !this.__axis;
}
function ca(e, t) {
  var n = [], i = null, s = null, r = 6, o = 6, a = 3, l = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, u = e === Kr || e === Is ? -1 : 1, c = e === Is || e === Yr ? "x" : "y", f = e === Kr || e === Ll ? xC : SC;
  function h(d) {
    var p = i ?? (t.ticks ? t.ticks.apply(t, n) : t.domain()), g = s ?? (t.tickFormat ? t.tickFormat.apply(t, n) : _C), v = Math.max(r, 0) + a, w = t.range(), k = +w[0] + l, b = +w[w.length - 1] + l, C = (t.bandwidth ? CC : kC)(t.copy(), l), T = d.selection ? d.selection() : d, M = T.selectAll(".domain").data([null]), P = T.selectAll(".tick").data(p, t).order(), D = P.exit(), z = P.enter().append("g").attr("class", "tick"), H = P.select("line"), G = P.select("text");
    M = M.merge(M.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), P = P.merge(z), H = H.merge(z.append("line").attr("stroke", "currentColor").attr(c + "2", u * r)), G = G.merge(z.append("text").attr("fill", "currentColor").attr(c, u * v).attr("dy", e === Kr ? "0em" : e === Ll ? "0.71em" : "0.32em")), d !== T && (M = M.transition(d), P = P.transition(d), H = H.transition(d), G = G.transition(d), D = D.transition(d).attr("opacity", id).attr("transform", function(J) {
      return isFinite(J = C(J)) ? f(J + l) : this.getAttribute("transform");
    }), z.attr("opacity", id).attr("transform", function(J) {
      var K = this.parentNode.__axis;
      return f((K && isFinite(K = K(J)) ? K : C(J)) + l);
    })), D.remove(), M.attr("d", e === Is || e === Yr ? o ? "M" + u * o + "," + k + "H" + l + "V" + b + "H" + u * o : "M" + l + "," + k + "V" + b : o ? "M" + k + "," + u * o + "V" + l + "H" + b + "V" + u * o : "M" + k + "," + l + "H" + b), P.attr("opacity", 1).attr("transform", function(J) {
      return f(C(J) + l);
    }), H.attr(c + "2", u * r), G.attr(c, u * v).text(g), T.filter(EC).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", e === Yr ? "start" : e === Is ? "end" : "middle"), T.each(function() {
      this.__axis = C;
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
function TC(e) {
  return ca(Kr, e);
}
function AC(e) {
  return ca(Yr, e);
}
function OC(e) {
  return ca(Ll, e);
}
function PC(e) {
  return ca(Is, e);
}
const Dl = Math.PI, Rl = 2 * Dl, pi = 1e-6, NC = Rl - pi;
function km(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function IC(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return km;
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
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? km : IC(t);
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
    else if (h > pi) if (!(Math.abs(f * l - u * c) > pi) || !r)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let d = i - o, p = s - a, g = l * l + u * u, v = d * d + p * p, w = Math.sqrt(g), k = Math.sqrt(h), b = r * Math.tan((Dl - Math.acos((g + h - v) / (2 * w * k))) / 2), C = b / k, T = b / w;
      Math.abs(C - 1) > pi && this._append`L${t + C * c},${n + C * f}`, this._append`A${r},${r},0,0,${+(f * d > c * p)},${this._x1 = t + T * l},${this._y1 = n + T * u}`;
    }
  }
  arc(t, n, i, s, r, o) {
    if (t = +t, n = +n, i = +i, o = !!o, i < 0) throw new Error(`negative radius: ${i}`);
    let a = i * Math.cos(s), l = i * Math.sin(s), u = t + a, c = n + l, f = 1 ^ o, h = o ? s - r : r - s;
    this._x1 === null ? this._append`M${u},${c}` : (Math.abs(this._x1 - u) > pi || Math.abs(this._y1 - c) > pi) && this._append`L${u},${c}`, i && (h < 0 && (h = h % Rl + Rl), h > NC ? this._append`A${i},${i},0,1,${f},${t - a},${n - l}A${i},${i},0,1,${f},${this._x1 = u},${this._y1 = c}` : h > pi && this._append`A${i},${i},0,${+(h >= Dl)},${f},${this._x1 = t + i * Math.cos(r)},${this._y1 = n + i * Math.sin(r)}`);
  }
  rect(t, n, i, s) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${i = +i}v${+s}h${-i}Z`;
  }
  toString() {
    return this._;
  }
}
function Cm() {
  return new hu();
}
Cm.prototype = hu.prototype;
function It(e) {
  return function() {
    return e;
  };
}
const sd = Math.abs, it = Math.atan2, hi = Math.cos, MC = Math.max, Ga = Math.min, nn = Math.sin, cn = Math.sqrt, mt = 1e-12, fs = Math.PI, Eo = fs / 2, Em = 2 * fs;
function LC(e) {
  return e > 1 ? 0 : e < -1 ? fs : Math.acos(e);
}
function rd(e) {
  return e >= 1 ? Eo : e <= -1 ? -Eo : Math.asin(e);
}
function Tm(e) {
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
function DC(e) {
  return e.innerRadius;
}
function RC(e) {
  return e.outerRadius;
}
function FC(e) {
  return e.startAngle;
}
function $C(e) {
  return e.endAngle;
}
function BC(e) {
  return e && e.padAngle;
}
function jC(e, t, n, i, s, r, o, a) {
  var l = n - e, u = i - t, c = o - s, f = a - r, h = f * l - c * u;
  if (!(h * h < mt))
    return h = (c * (t - r) - f * (e - s)) / h, [e + h * l, t + h * u];
}
function Mr(e, t, n, i, s, r, o) {
  var a = e - n, l = t - i, u = (o ? r : -r) / cn(a * a + l * l), c = u * l, f = -u * a, h = e + c, d = t + f, p = n + c, g = i + f, v = (h + p) / 2, w = (d + g) / 2, k = p - h, b = g - d, C = k * k + b * b, T = s - r, M = h * g - p * d, P = (b < 0 ? -1 : 1) * cn(MC(0, T * T * C - M * M)), D = (M * b - k * P) / C, z = (-M * k - b * P) / C, H = (M * b + k * P) / C, G = (-M * k + b * P) / C, J = D - v, K = z - w, le = H - v, Ze = G - w;
  return J * J + K * K > le * le + Ze * Ze && (D = H, z = G), {
    cx: D,
    cy: z,
    x01: -c,
    y01: -f,
    x11: D * (s / T - 1),
    y11: z * (s / T - 1)
  };
}
function qC() {
  var e = DC, t = RC, n = It(0), i = null, s = FC, r = $C, o = BC, a = null, l = Tm(u);
  function u() {
    var c, f, h = +e.apply(this, arguments), d = +t.apply(this, arguments), p = s.apply(this, arguments) - Eo, g = r.apply(this, arguments) - Eo, v = sd(g - p), w = g > p;
    if (a || (a = c = l()), d < h && (f = d, d = h, h = f), !(d > mt)) a.moveTo(0, 0);
    else if (v > Em - mt)
      a.moveTo(d * hi(p), d * nn(p)), a.arc(0, 0, d, p, g, !w), h > mt && (a.moveTo(h * hi(g), h * nn(g)), a.arc(0, 0, h, g, p, w));
    else {
      var k = p, b = g, C = p, T = g, M = v, P = v, D = o.apply(this, arguments) / 2, z = D > mt && (i ? +i.apply(this, arguments) : cn(h * h + d * d)), H = Ga(sd(d - h) / 2, +n.apply(this, arguments)), G = H, J = H, K, le;
      if (z > mt) {
        var Ze = rd(z / h * nn(D)), xe = rd(z / d * nn(D));
        (M -= Ze * 2) > mt ? (Ze *= w ? 1 : -1, C += Ze, T -= Ze) : (M = 0, C = T = (p + g) / 2), (P -= xe * 2) > mt ? (xe *= w ? 1 : -1, k += xe, b -= xe) : (P = 0, k = b = (p + g) / 2);
      }
      var he = d * hi(k), ue = d * nn(k), Te = h * hi(T), _t = h * nn(T);
      if (H > mt) {
        var Fe = d * hi(b), qe = d * nn(b), Jt = h * hi(C), Qt = h * nn(C), lt;
        if (v < fs)
          if (lt = jC(he, ue, Jt, Qt, Fe, qe, Te, _t)) {
            var xt = he - lt[0], qt = ue - lt[1], Ut = Fe - lt[0], Zt = qe - lt[1], St = 1 / nn(LC((xt * Ut + qt * Zt) / (cn(xt * xt + qt * qt) * cn(Ut * Ut + Zt * Zt))) / 2), _n = cn(lt[0] * lt[0] + lt[1] * lt[1]);
            G = Ga(H, (h - _n) / (St - 1)), J = Ga(H, (d - _n) / (St + 1));
          } else
            G = J = 0;
      }
      P > mt ? J > mt ? (K = Mr(Jt, Qt, he, ue, d, J, w), le = Mr(Fe, qe, Te, _t, d, J, w), a.moveTo(K.cx + K.x01, K.cy + K.y01), J < H ? a.arc(K.cx, K.cy, J, it(K.y01, K.x01), it(le.y01, le.x01), !w) : (a.arc(K.cx, K.cy, J, it(K.y01, K.x01), it(K.y11, K.x11), !w), a.arc(0, 0, d, it(K.cy + K.y11, K.cx + K.x11), it(le.cy + le.y11, le.cx + le.x11), !w), a.arc(le.cx, le.cy, J, it(le.y11, le.x11), it(le.y01, le.x01), !w))) : (a.moveTo(he, ue), a.arc(0, 0, d, k, b, !w)) : a.moveTo(he, ue), !(h > mt) || !(M > mt) ? a.lineTo(Te, _t) : G > mt ? (K = Mr(Te, _t, Fe, qe, h, -G, w), le = Mr(he, ue, Jt, Qt, h, -G, w), a.lineTo(K.cx + K.x01, K.cy + K.y01), G < H ? a.arc(K.cx, K.cy, G, it(K.y01, K.x01), it(le.y01, le.x01), !w) : (a.arc(K.cx, K.cy, G, it(K.y01, K.x01), it(K.y11, K.x11), !w), a.arc(0, 0, h, it(K.cy + K.y11, K.cx + K.x11), it(le.cy + le.y11, le.cx + le.x11), w), a.arc(le.cx, le.cy, G, it(le.y11, le.x11), it(le.y01, le.x01), !w))) : a.arc(0, 0, h, T, C, w);
    }
    if (a.closePath(), c) return a = null, c + "" || null;
  }
  return u.centroid = function() {
    var c = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, f = (+s.apply(this, arguments) + +r.apply(this, arguments)) / 2 - fs / 2;
    return [hi(f) * c, nn(f) * c];
  }, u.innerRadius = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : It(+c), u) : e;
  }, u.outerRadius = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : It(+c), u) : t;
  }, u.cornerRadius = function(c) {
    return arguments.length ? (n = typeof c == "function" ? c : It(+c), u) : n;
  }, u.padRadius = function(c) {
    return arguments.length ? (i = c == null ? null : typeof c == "function" ? c : It(+c), u) : i;
  }, u.startAngle = function(c) {
    return arguments.length ? (s = typeof c == "function" ? c : It(+c), u) : s;
  }, u.endAngle = function(c) {
    return arguments.length ? (r = typeof c == "function" ? c : It(+c), u) : r;
  }, u.padAngle = function(c) {
    return arguments.length ? (o = typeof c == "function" ? c : It(+c), u) : o;
  }, u.context = function(c) {
    return arguments.length ? (a = c ?? null, u) : a;
  }, u;
}
const UC = {
  draw(e, t) {
    const n = cn(t / fs);
    e.moveTo(n, 0), e.arc(0, 0, n, 0, Em);
  }
}, WC = {
  draw(e, t) {
    const n = cn(t), i = -n / 2;
    e.rect(i, i, n, n);
  }
}, Ha = cn(3), zC = {
  draw(e, t) {
    const n = -cn(t / (Ha * 3));
    e.moveTo(0, n * 2), e.lineTo(-Ha * n, -n), e.lineTo(Ha * n, -n), e.closePath();
  }
};
function VC(e, t) {
  let n = null, i = Tm(s);
  e = typeof e == "function" ? e : It(e || UC), t = typeof t == "function" ? t : It(t === void 0 ? 64 : +t);
  function s() {
    let r;
    if (n || (n = r = i()), e.apply(this, arguments).draw(n, +t.apply(this, arguments)), r) return n = null, r + "" || null;
  }
  return s.type = function(r) {
    return arguments.length ? (e = typeof r == "function" ? r : It(r), s) : e;
  }, s.size = function(r) {
    return arguments.length ? (t = typeof r == "function" ? r : It(+r), s) : t;
  }, s.context = function(r) {
    return arguments.length ? (n = r ?? null, s) : n;
  }, s;
}
const de = {
  precisionFixed: vm,
  format: fu,
  select: yk,
  selectAll: bk,
  scaleLinear: xm,
  scaleSequential: Sm,
  axisTop: TC,
  axisBottom: OC,
  axisRight: AC,
  axisLeft: PC,
  symbol: VC,
  path: Cm,
  arc: qC,
  symbolTriangle: zC,
  symbolSquare: WC
};
let Lr;
const GC = new Uint8Array(16);
function HC() {
  if (!Lr && (Lr = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Lr))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Lr(GC);
}
const et = [];
for (let e = 0; e < 256; ++e)
  et.push((e + 256).toString(16).slice(1));
function KC(e, t = 0) {
  return et[e[t + 0]] + et[e[t + 1]] + et[e[t + 2]] + et[e[t + 3]] + "-" + et[e[t + 4]] + et[e[t + 5]] + "-" + et[e[t + 6]] + et[e[t + 7]] + "-" + et[e[t + 8]] + et[e[t + 9]] + "-" + et[e[t + 10]] + et[e[t + 11]] + et[e[t + 12]] + et[e[t + 13]] + et[e[t + 14]] + et[e[t + 15]];
}
const YC = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), od = {
  randomUUID: YC
};
function Am(e, t, n) {
  if (od.randomUUID && !t && !e)
    return od.randomUUID();
  e = e || {};
  const i = e.random || (e.rng || HC)();
  return i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, KC(i);
}
const zi = 1e-10, XC = 10;
function Ts(e, t, n = zi) {
  const i = e - t;
  return Math.abs(i) < n ? 0 : i;
}
const ad = (e) => typeof e == "number" && Number.isFinite(e), Se = {
  greaterThan: (e, t, n = zi) => Ts(e, t, n) > 0,
  greaterThanOrEqualTo: (e, t, n = zi) => Ts(e, t, n) >= 0,
  lessThan: (e, t, n = zi) => Ts(e, t, n) < 0,
  lessThanOrEqualTo: (e, t, n = zi) => Ts(e, t, n) <= 0,
  equalTo: (e, t, n = zi) => Ts(e, t, n) === 0,
  isNumber: ad,
  round: (e) => ad(e) ? Number(e.toFixed(XC)) : !1,
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
function $(e) {
  return !(e === void 0 || e === null || e === "" || typeof e == "object" && !Object.values(e).length);
}
function Dr(e, t = !0) {
  return !$(e) || typeof e != "object" ? !1 : !!Object.values(e).some((i) => !(!$(i) || t && !i));
}
function JC(e) {
  return e ? e.reduce((t, n) => {
    const i = $(n.q) && typeof n.q == "string" ? parseInt(n.q) : n.q;
    return !isNaN(i) && i > 0 ? t + i : t;
  }, 0) : 0;
}
function QC(e) {
  if (!(e != null && e.length)) return [];
  const t = e.filter((i) => !i.added).map((i) => (i.parentID = i.getParentID(), i)), n = {};
  return t.forEach((i) => {
    n[i.parentID] ? ++n[i.parentID].count : (n[i.parentID] = {}, n[i.parentID].count = 1, n[i.parentID].id = i.parentID, n[i.parentID].name = i != null && i.name ? i.name : i.id, n[i.parentID].l = i.l, n[i.parentID].w = i.w, n[i.parentID].t = i.t, n[i.parentID].material = i.material, n[i.parentID].rot = i.rot);
  }), Object.values(n);
}
function ZC(e) {
  return e != null && e.length ? e.filter((t) => t.used && (t.stack === !1 || typeof t.stack == "number")) : [];
}
function eE() {
  const e = document.documentElement;
  return "requestFullscreen" in e || "webkitRequestFullscreen" in e || "mozRequestFullScreen" in e || "msRequestFullscreen" in e;
}
function bs(e) {
  return e ? (e = e.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^ a-z0-9._\-|]/gim, ""), e.trim()) : null;
}
function du(e, t = 100) {
  return e ? (e = e.trim(), e = e.substring(0, t), e) : "";
}
const To = {
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
function tE(e) {
  if (e === "l") return "x";
  if (e === "w") return "y";
}
function Ai(e) {
  return e ? e === "l" ? "w" : "l" : null;
}
function nE(e) {
  return e ? e === "x" ? "y" : "x" : null;
}
class Ms {
  constructor(t) {
    m(this, "x1");
    m(this, "x2");
    m(this, "y1");
    m(this, "y2");
    m(this, "direction");
    m(this, "shapeCollisions");
    m(this, "type");
    this.x1 = t.x1, this.x2 = t.x2, this.y1 = t.y1, this.y2 = t.y2, this.direction = iE(this), this.type = t != null && t.type ? t.type : null;
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
function iE(e) {
  return typeof e > "u" || !Se.isNumber(e.x1) || !Se.isNumber(e.x2) || !Se.isNumber(e.y1) || !Se.isNumber(e.y2) ? null : e.x1 === e.x2 && e.y1 !== e.y2 ? "w" : e.y1 === e.y2 && e.x1 !== e.x2 ? "l" : null;
}
var Om = Object.defineProperty, sE = Object.getOwnPropertyNames, L = (e, t) => Om(e, "name", { value: t, configurable: !0 }), rE = (e, t) => function() {
  return t || (0, e[sE(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, pu = (e, t) => {
  for (var n in t)
    Om(e, n, { get: t[n], enumerable: !0 });
}, oE = rE({
  "(disabled):util"() {
  }
}), Ao = {};
pu(Ao, {
  addChainableMethod: () => Eu,
  addLengthGuard: () => mr,
  addMethod: () => Su,
  addProperty: () => xu,
  checkError: () => Tt,
  compareByInspect: () => Io,
  eql: () => ty,
  expectTypes: () => Rm,
  flag: () => fe,
  getActual: () => fa,
  getMessage: () => yu,
  getName: () => da,
  getOperator: () => Pu,
  getOwnEnumerableProperties: () => Ou,
  getOwnEnumerablePropertySymbols: () => Au,
  getPathInfo: () => _u,
  hasProperty: () => ha,
  inspect: () => me,
  isNaN: () => Mo,
  isProxyEnabled: () => gr,
  isRegExp: () => Lo,
  objDisplay: () => wi,
  overwriteChainableMethod: () => Tu,
  overwriteMethod: () => Cu,
  overwriteProperty: () => ku,
  proxify: () => ws,
  test: () => gu,
  transferFlags: () => Xt,
  type: () => Oe
});
var Tt = {};
pu(Tt, {
  compatibleConstructor: () => Im,
  compatibleInstance: () => Nm,
  compatibleMessage: () => Mm,
  getConstructorName: () => Lm,
  getMessage: () => Dm
});
function ua(e) {
  return e instanceof Error || Object.prototype.toString.call(e) === "[object Error]";
}
L(ua, "isErrorInstance");
function Pm(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
L(Pm, "isRegExp");
function Nm(e, t) {
  return ua(t) && e === t;
}
L(Nm, "compatibleInstance");
function Im(e, t) {
  return ua(t) ? e.constructor === t.constructor || e instanceof t.constructor : (typeof t == "object" || typeof t == "function") && t.prototype ? e.constructor === t || e instanceof t : !1;
}
L(Im, "compatibleConstructor");
function Mm(e, t) {
  const n = typeof e == "string" ? e : e.message;
  return Pm(t) ? t.test(n) : typeof t == "string" ? n.indexOf(t) !== -1 : !1;
}
L(Mm, "compatibleMessage");
function Lm(e) {
  let t = e;
  return ua(e) ? t = e.constructor.name : typeof e == "function" && (t = e.name, t === "" && (t = new e().name || t)), t;
}
L(Lm, "getConstructorName");
function Dm(e) {
  let t = "";
  return e && e.message ? t = e.message : typeof e == "string" && (t = e), t;
}
L(Dm, "getMessage");
function fe(e, t, n) {
  var i = e.__flags || (e.__flags = /* @__PURE__ */ Object.create(null));
  if (arguments.length === 3)
    i[t] = n;
  else
    return i[t];
}
L(fe, "flag");
function gu(e, t) {
  var n = fe(e, "negate"), i = t[0];
  return n ? !i : i;
}
L(gu, "test");
function Oe(e) {
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  const t = e[Symbol.toStringTag];
  return typeof t == "string" ? t : Object.prototype.toString.call(e).slice(8, -1);
}
L(Oe, "type");
var aE = "captureStackTrace" in Error, ki, ke = (ki = class extends Error {
  constructor(n = "Unspecified AssertionError", i, s) {
    super(n);
    m(this, "message");
    this.message = n, aE && Error.captureStackTrace(this, s || ki);
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
}, L(ki, "AssertionError"), ki);
function Rm(e, t) {
  var n = fe(e, "message"), i = fe(e, "ssfi");
  n = n ? n + ": " : "", e = fe(e, "object"), t = t.map(function(o) {
    return o.toLowerCase();
  }), t.sort();
  var s = t.map(function(o, a) {
    var l = ~["a", "e", "i", "o", "u"].indexOf(o.charAt(0)) ? "an" : "a", u = t.length > 1 && a === t.length - 1 ? "or " : "";
    return u + l + " " + o;
  }).join(", "), r = Oe(e).toLowerCase();
  if (!t.some(function(o) {
    return r === o;
  }))
    throw new ke(
      n + "object tested must be " + s + ", but " + r + " given",
      void 0,
      i
    );
}
L(Rm, "expectTypes");
function fa(e, t) {
  return t.length > 4 ? t[4] : e._obj;
}
L(fa, "getActual");
var ld = {
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
}, lE = {
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
}, hs = "…";
function Fm(e, t) {
  const n = ld[lE[t]] || ld[t] || "";
  return n ? `\x1B[${n[0]}m${String(e)}\x1B[${n[1]}m` : String(e);
}
L(Fm, "colorise");
function $m({
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
  return f.colors && (f.stylize = Fm), f;
}
L($m, "normaliseOptions");
function $n(e, t, n = hs) {
  e = String(e);
  const i = n.length, s = e.length;
  return i > t && s > i ? n : s > t && s > i ? `${e.slice(0, t - i)}${n}` : e;
}
L($n, "truncate");
function Bt(e, t, n, i = ", ") {
  n = n || t.inspect;
  const s = e.length;
  if (s === 0)
    return "";
  const r = t.truncate;
  let o = "", a = "", l = "";
  for (let u = 0; u < s; u += 1) {
    const c = u + 1 === e.length, f = u + 2 === e.length;
    l = `${hs}(${e.length - u})`;
    const h = e[u];
    t.truncate = r - o.length - (c ? 0 : i.length);
    const d = a || n(h, t) + (c ? "" : i), p = o.length + d.length, g = p + l.length;
    if (c && p > r && o.length + l.length <= r || !c && !f && g > r || (a = c ? "" : n(e[u + 1], t) + (f ? "" : i), !c && f && g > r && p + a.length > r))
      break;
    if (o += d, !c && !f && p + a.length >= r) {
      l = `${hs}(${e.length - u - 1})`;
      break;
    }
    l = "";
  }
  return `${o}${l}`;
}
L(Bt, "inspectList");
function Bm(e) {
  return e.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/) ? e : JSON.stringify(e).replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
}
L(Bm, "quoteComplexKey");
function ds([e, t], n) {
  return n.truncate -= 2, typeof e == "string" ? e = Bm(e) : typeof e != "number" && (e = `[${n.inspect(e, n)}]`), n.truncate -= e.length, t = n.inspect(t, n), `${e}: ${t}`;
}
L(ds, "inspectProperty");
function jm(e, t) {
  const n = Object.keys(e).slice(e.length);
  if (!e.length && !n.length)
    return "[]";
  t.truncate -= 4;
  const i = Bt(e, t);
  t.truncate -= i.length;
  let s = "";
  return n.length && (s = Bt(n.map((r) => [r, e[r]]), t, ds)), `[ ${i}${s ? `, ${s}` : ""} ]`;
}
L(jm, "inspectArray");
var cE = /* @__PURE__ */ L((e) => typeof Buffer == "function" && e instanceof Buffer ? "Buffer" : e[Symbol.toStringTag] ? e[Symbol.toStringTag] : e.constructor.name, "getArrayName");
function sn(e, t) {
  const n = cE(e);
  t.truncate -= n.length + 4;
  const i = Object.keys(e).slice(e.length);
  if (!e.length && !i.length)
    return `${n}[]`;
  let s = "";
  for (let o = 0; o < e.length; o++) {
    const a = `${t.stylize($n(e[o], t.truncate), "number")}${o === e.length - 1 ? "" : ", "}`;
    if (t.truncate -= a.length, e[o] !== e.length && t.truncate <= 3) {
      s += `${hs}(${e.length - e[o] + 1})`;
      break;
    }
    s += a;
  }
  let r = "";
  return i.length && (r = Bt(i.map((o) => [o, e[o]]), t, ds)), `${n}[ ${s}${r ? `, ${r}` : ""} ]`;
}
L(sn, "inspectTypedArray");
function qm(e, t) {
  const n = e.toJSON();
  if (n === null)
    return "Invalid Date";
  const i = n.split("T"), s = i[0];
  return t.stylize(`${s}T${$n(i[1], t.truncate - s.length - 1)}`, "date");
}
L(qm, "inspectDate");
function Fl(e, t) {
  const n = e[Symbol.toStringTag] || "Function", i = e.name;
  return i ? t.stylize(`[${n} ${$n(i, t.truncate - 11)}]`, "special") : t.stylize(`[${n}]`, "special");
}
L(Fl, "inspectFunction");
function Um([e, t], n) {
  return n.truncate -= 4, e = n.inspect(e, n), n.truncate -= e.length, t = n.inspect(t, n), `${e} => ${t}`;
}
L(Um, "inspectMapEntry");
function Wm(e) {
  const t = [];
  return e.forEach((n, i) => {
    t.push([i, n]);
  }), t;
}
L(Wm, "mapToEntries");
function zm(e, t) {
  return e.size - 1 <= 0 ? "Map{}" : (t.truncate -= 7, `Map{ ${Bt(Wm(e), t, Um)} }`);
}
L(zm, "inspectMap");
var uE = Number.isNaN || ((e) => e !== e);
function $l(e, t) {
  return uE(e) ? t.stylize("NaN", "number") : e === 1 / 0 ? t.stylize("Infinity", "number") : e === -1 / 0 ? t.stylize("-Infinity", "number") : e === 0 ? t.stylize(1 / e === 1 / 0 ? "+0" : "-0", "number") : t.stylize($n(String(e), t.truncate), "number");
}
L($l, "inspectNumber");
function Bl(e, t) {
  let n = $n(e.toString(), t.truncate - 1);
  return n !== hs && (n += "n"), t.stylize(n, "bigint");
}
L(Bl, "inspectBigInt");
function Vm(e, t) {
  const n = e.toString().split("/")[2], i = t.truncate - (2 + n.length), s = e.source;
  return t.stylize(`/${$n(s, i)}/${n}`, "regexp");
}
L(Vm, "inspectRegExp");
function Gm(e) {
  const t = [];
  return e.forEach((n) => {
    t.push(n);
  }), t;
}
L(Gm, "arrayFromSet");
function Hm(e, t) {
  return e.size === 0 ? "Set{}" : (t.truncate -= 7, `Set{ ${Bt(Gm(e), t)} }`);
}
L(Hm, "inspectSet");
var cd = new RegExp("['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]", "g"), fE = {
  "\b": "\\b",
  "	": "\\t",
  "\n": "\\n",
  "\f": "\\f",
  "\r": "\\r",
  "'": "\\'",
  "\\": "\\\\"
}, hE = 16, dE = 4;
function Km(e) {
  return fE[e] || `\\u${`0000${e.charCodeAt(0).toString(hE)}`.slice(-dE)}`;
}
L(Km, "escape");
function jl(e, t) {
  return cd.test(e) && (e = e.replace(cd, Km)), t.stylize(`'${$n(e, t.truncate - 2)}'`, "string");
}
L(jl, "inspectString");
function ql(e) {
  return "description" in Symbol.prototype ? e.description ? `Symbol(${e.description})` : "Symbol()" : e.toString();
}
L(ql, "inspectSymbol");
var Ym = /* @__PURE__ */ L(() => "Promise{…}", "getPromiseValue");
try {
  const { getPromiseDetails: e, kPending: t, kRejected: n } = process.binding("util");
  Array.isArray(e(Promise.resolve())) && (Ym = /* @__PURE__ */ L((i, s) => {
    const [r, o] = e(i);
    return r === t ? "Promise{<pending>}" : `Promise${r === n ? "!" : ""}{${s.inspect(o, s)}}`;
  }, "getPromiseValue"));
} catch {
}
var pE = Ym;
function Vs(e, t) {
  const n = Object.getOwnPropertyNames(e), i = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : [];
  if (n.length === 0 && i.length === 0)
    return "{}";
  if (t.truncate -= 4, t.seen = t.seen || [], t.seen.indexOf(e) >= 0)
    return "[Circular]";
  t.seen.push(e);
  const s = Bt(n.map((a) => [a, e[a]]), t, ds), r = Bt(i.map((a) => [a, e[a]]), t, ds);
  t.seen.pop();
  let o = "";
  return s && r && (o = ", "), `{ ${s}${o}${r} }`;
}
L(Vs, "inspectObject");
var Ka = typeof Symbol < "u" && Symbol.toStringTag ? Symbol.toStringTag : !1;
function Xm(e, t) {
  let n = "";
  return Ka && Ka in e && (n = e[Ka]), n = n || e.constructor.name, (!n || n === "_class") && (n = "<Anonymous Class>"), t.truncate -= n.length, `${n}${Vs(e, t)}`;
}
L(Xm, "inspectClass");
function Jm(e, t) {
  return e.length === 0 ? "Arguments[]" : (t.truncate -= 13, `Arguments[ ${Bt(e, t)} ]`);
}
L(Jm, "inspectArguments");
var gE = [
  "stack",
  "line",
  "column",
  "name",
  "message",
  "fileName",
  "lineNumber",
  "columnNumber",
  "number",
  "description"
];
function Qm(e, t) {
  const n = Object.getOwnPropertyNames(e).filter((o) => gE.indexOf(o) === -1), i = e.name;
  t.truncate -= i.length;
  let s = "";
  typeof e.message == "string" ? s = $n(e.message, t.truncate) : n.unshift("message"), s = s ? `: ${s}` : "", t.truncate -= s.length + 5;
  const r = Bt(n.map((o) => [o, e[o]]), t, ds);
  return `${i}${s}${r ? ` { ${r} }` : ""}`;
}
L(Qm, "inspectObject");
function Zm([e, t], n) {
  return n.truncate -= 3, t ? `${n.stylize(String(e), "yellow")}=${n.stylize(`"${t}"`, "string")}` : `${n.stylize(String(e), "yellow")}`;
}
L(Zm, "inspectAttribute");
function Oo(e, t) {
  return Bt(e, t, mu, `
`);
}
L(Oo, "inspectHTMLCollection");
function mu(e, t) {
  const n = e.getAttributeNames(), i = e.tagName.toLowerCase(), s = t.stylize(`<${i}`, "special"), r = t.stylize(">", "special"), o = t.stylize(`</${i}>`, "special");
  t.truncate -= i.length * 2 + 5;
  let a = "";
  n.length > 0 && (a += " ", a += Bt(n.map((c) => [c, e.getAttribute(c)]), t, Zm, " ")), t.truncate -= a.length;
  const l = t.truncate;
  let u = Oo(e.children, t);
  return u && u.length > l && (u = `${hs}(${e.children.length})`), `${s}${a}${r}${u}${o}`;
}
L(mu, "inspectHTML");
var mE = typeof Symbol == "function" && typeof Symbol.for == "function", Ya = mE ? Symbol.for("chai/inspect") : "@@chai/inspect", Gi = !1;
try {
  const e = oE();
  Gi = e.inspect ? e.inspect.custom : !1;
} catch {
  Gi = !1;
}
var ud = /* @__PURE__ */ new WeakMap(), fd = {}, hd = {
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
  Array: jm,
  Date: qm,
  Map: zm,
  Set: Hm,
  RegExp: Vm,
  Promise: pE,
  // WeakSet, WeakMap are totally opaque to us
  WeakSet: (e, t) => t.stylize("WeakSet{…}", "special"),
  WeakMap: (e, t) => t.stylize("WeakMap{…}", "special"),
  Arguments: Jm,
  Int8Array: sn,
  Uint8Array: sn,
  Uint8ClampedArray: sn,
  Int16Array: sn,
  Uint16Array: sn,
  Int32Array: sn,
  Uint32Array: sn,
  Float32Array: sn,
  Float64Array: sn,
  Generator: () => "",
  DataView: () => "",
  ArrayBuffer: () => "",
  Error: Qm,
  HTMLCollection: Oo,
  NodeList: Oo
}, yE = /* @__PURE__ */ L((e, t, n) => Ya in e && typeof e[Ya] == "function" ? e[Ya](t) : Gi && Gi in e && typeof e[Gi] == "function" ? e[Gi](t.depth, t) : "inspect" in e && typeof e.inspect == "function" ? e.inspect(t.depth, t) : "constructor" in e && ud.has(e.constructor) ? ud.get(e.constructor)(e, t) : fd[n] ? fd[n](e, t) : "", "inspectCustom"), bE = Object.prototype.toString;
function Po(e, t = {}) {
  const n = $m(t, Po), { customInspect: i } = n;
  let s = e === null ? "null" : typeof e;
  if (s === "object" && (s = bE.call(e).slice(8, -1)), s in hd)
    return hd[s](e, n);
  if (i && e) {
    const o = yE(e, n, s);
    if (o)
      return typeof o == "string" ? o : Po(o, n);
  }
  const r = e ? Object.getPrototypeOf(e) : !1;
  return r === Object.prototype || r === null ? Vs(e, n) : e && typeof HTMLElement == "function" && e instanceof HTMLElement ? mu(e, n) : "constructor" in e ? e.constructor !== Object ? Xm(e, n) : Vs(e, n) : e === Object(e) ? Vs(e, n) : n.stylize(String(e), s);
}
L(Po, "inspect");
var pt = {
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
function me(e, t, n, i) {
  var s = {
    colors: i,
    depth: typeof n > "u" ? 2 : n,
    showHidden: t,
    truncate: pt.truncateThreshold ? pt.truncateThreshold : 1 / 0
  };
  return Po(e, s);
}
L(me, "inspect");
function wi(e) {
  var t = me(e), n = Object.prototype.toString.call(e);
  if (pt.truncateThreshold && t.length >= pt.truncateThreshold) {
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
L(wi, "objDisplay");
function yu(e, t) {
  var n = fe(e, "negate"), i = fe(e, "object"), s = t[3], r = fa(e, t), o = n ? t[2] : t[1], a = fe(e, "message");
  return typeof o == "function" && (o = o()), o = o || "", o = o.replace(/#\{this\}/g, function() {
    return wi(i);
  }).replace(/#\{act\}/g, function() {
    return wi(r);
  }).replace(/#\{exp\}/g, function() {
    return wi(s);
  }), a ? a + ": " + o : o;
}
L(yu, "getMessage");
function Xt(e, t, n) {
  var i = e.__flags || (e.__flags = /* @__PURE__ */ Object.create(null));
  t.__flags || (t.__flags = /* @__PURE__ */ Object.create(null)), n = arguments.length === 3 ? n : !0;
  for (var s in i)
    (n || s !== "object" && s !== "ssfi" && s !== "lockSsfi" && s != "message") && (t.__flags[s] = i[s]);
}
L(Xt, "transferFlags");
function Ul(e) {
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  const t = e[Symbol.toStringTag];
  return typeof t == "string" ? t : Object.prototype.toString.call(e).slice(8, -1);
}
L(Ul, "type");
function bu() {
  this._key = "chai/deep-eql__" + Math.random() + Date.now();
}
L(bu, "FakeMap");
bu.prototype = {
  get: /* @__PURE__ */ L(function(t) {
    return t[this._key];
  }, "get"),
  set: /* @__PURE__ */ L(function(t, n) {
    Object.isExtensible(t) && Object.defineProperty(t, this._key, {
      value: n,
      configurable: !0
    });
  }, "set")
};
var ey = typeof WeakMap == "function" ? WeakMap : bu;
function Wl(e, t, n) {
  if (!n || Oi(e) || Oi(t))
    return null;
  var i = n.get(e);
  if (i) {
    var s = i.get(t);
    if (typeof s == "boolean")
      return s;
  }
  return null;
}
L(Wl, "memoizeCompare");
function Ls(e, t, n, i) {
  if (!(!n || Oi(e) || Oi(t))) {
    var s = n.get(e);
    s ? s.set(t, i) : (s = new ey(), s.set(t, i), n.set(e, s));
  }
}
L(Ls, "memoizeSet");
var ty = pr;
function pr(e, t, n) {
  if (n && n.comparator)
    return zl(e, t, n);
  var i = wu(e, t);
  return i !== null ? i : zl(e, t, n);
}
L(pr, "deepEqual");
function wu(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && // eslint-disable-line no-self-compare
  t !== t ? !0 : Oi(e) || Oi(t) ? !1 : null;
}
L(wu, "simpleEqual");
function zl(e, t, n) {
  n = n || {}, n.memoize = n.memoize === !1 ? !1 : n.memoize || new ey();
  var i = n && n.comparator, s = Wl(e, t, n.memoize);
  if (s !== null)
    return s;
  var r = Wl(t, e, n.memoize);
  if (r !== null)
    return r;
  if (i) {
    var o = i(e, t);
    if (o === !1 || o === !0)
      return Ls(e, t, n.memoize, o), o;
    var a = wu(e, t);
    if (a !== null)
      return a;
  }
  var l = Ul(e);
  if (l !== Ul(t))
    return Ls(e, t, n.memoize, !1), !1;
  Ls(e, t, n.memoize, !0);
  var u = ny(e, t, l, n);
  return Ls(e, t, n.memoize, u), u;
}
L(zl, "extensiveDeepEqual");
function ny(e, t, n, i) {
  switch (n) {
    case "String":
    case "Number":
    case "Boolean":
    case "Date":
      return pr(e.valueOf(), t.valueOf());
    case "Promise":
    case "Symbol":
    case "function":
    case "WeakMap":
    case "WeakSet":
      return e === t;
    case "Error":
      return vu(e, t, ["name", "message", "code"], i);
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
      return Yn(e, t, i);
    case "RegExp":
      return iy(e, t);
    case "Generator":
      return sy(e, t, i);
    case "DataView":
      return Yn(new Uint8Array(e.buffer), new Uint8Array(t.buffer), i);
    case "ArrayBuffer":
      return Yn(new Uint8Array(e), new Uint8Array(t), i);
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
      return oy(e, t, i);
  }
}
L(ny, "extensiveDeepEqualByType");
function iy(e, t) {
  return e.toString() === t.toString();
}
L(iy, "regexpEqual");
function Vl(e, t, n) {
  if (e.size !== t.size)
    return !1;
  if (e.size === 0)
    return !0;
  var i = [], s = [];
  return e.forEach(/* @__PURE__ */ L(function(o, a) {
    i.push([o, a]);
  }, "gatherEntries")), t.forEach(/* @__PURE__ */ L(function(o, a) {
    s.push([o, a]);
  }, "gatherEntries")), Yn(i.sort(), s.sort(), n);
}
L(Vl, "entriesEqual");
function Yn(e, t, n) {
  var i = e.length;
  if (i !== t.length)
    return !1;
  if (i === 0)
    return !0;
  for (var s = -1; ++s < i; )
    if (pr(e[s], t[s], n) === !1)
      return !1;
  return !0;
}
L(Yn, "iterableEqual");
function sy(e, t, n) {
  return Yn(No(e), No(t), n);
}
L(sy, "generatorEqual");
function ry(e) {
  return typeof Symbol < "u" && typeof e == "object" && typeof Symbol.iterator < "u" && typeof e[Symbol.iterator] == "function";
}
L(ry, "hasIteratorFunction");
function Gl(e) {
  if (ry(e))
    try {
      return No(e[Symbol.iterator]());
    } catch {
      return [];
    }
  return [];
}
L(Gl, "getIteratorEntries");
function No(e) {
  for (var t = e.next(), n = [t.value]; t.done === !1; )
    t = e.next(), n.push(t.value);
  return n;
}
L(No, "getGeneratorEntries");
function Hl(e) {
  var t = [];
  for (var n in e)
    t.push(n);
  return t;
}
L(Hl, "getEnumerableKeys");
function Kl(e) {
  for (var t = [], n = Object.getOwnPropertySymbols(e), i = 0; i < n.length; i += 1) {
    var s = n[i];
    Object.getOwnPropertyDescriptor(e, s).enumerable && t.push(s);
  }
  return t;
}
L(Kl, "getEnumerableSymbols");
function vu(e, t, n, i) {
  var s = n.length;
  if (s === 0)
    return !0;
  for (var r = 0; r < s; r += 1)
    if (pr(e[n[r]], t[n[r]], i) === !1)
      return !1;
  return !0;
}
L(vu, "keysEqual");
function oy(e, t, n) {
  var i = Hl(e), s = Hl(t), r = Kl(e), o = Kl(t);
  if (i = i.concat(r), s = s.concat(o), i.length && i.length === s.length)
    return Yn(Yl(i).sort(), Yl(s).sort()) === !1 ? !1 : vu(e, t, i, n);
  var a = Gl(e), l = Gl(t);
  return a.length && a.length === l.length ? (a.sort(), l.sort(), Yn(a, l, n)) : i.length === 0 && a.length === 0 && s.length === 0 && l.length === 0;
}
L(oy, "objectEqual");
function Oi(e) {
  return e === null || typeof e != "object";
}
L(Oi, "isPrimitive");
function Yl(e) {
  return e.map(/* @__PURE__ */ L(function(n) {
    return typeof n == "symbol" ? n.toString() : n;
  }, "mapSymbol"));
}
L(Yl, "mapSymbols");
function ha(e, t) {
  return typeof e > "u" || e === null ? !1 : t in Object(e);
}
L(ha, "hasProperty");
function ay(e) {
  return e.replace(/([^\\])\[/g, "$1.[").match(/(\\\.|[^.]+?)+/g).map((i) => {
    if (i === "constructor" || i === "__proto__" || i === "prototype")
      return {};
    const r = /^\[(\d+)\]$/.exec(i);
    let o = null;
    return r ? o = { i: parseFloat(r[1]) } : o = { p: i.replace(/\\([.[\]])/g, "$1") }, o;
  });
}
L(ay, "parsePath");
function Xl(e, t, n) {
  let i = e, s = null;
  n = typeof n > "u" ? t.length : n;
  for (let r = 0; r < n; r++) {
    const o = t[r];
    i && (typeof o.p > "u" ? i = i[o.i] : i = i[o.p], r === n - 1 && (s = i));
  }
  return s;
}
L(Xl, "internalGetPathValue");
function _u(e, t) {
  const n = ay(t), i = n[n.length - 1], s = {
    parent: n.length > 1 ? Xl(e, n, n.length - 1) : e,
    name: i.p || i.i,
    value: Xl(e, n)
  };
  return s.exists = ha(s.parent, s.name), s;
}
L(_u, "getPathInfo");
function S(e, t, n, i) {
  return fe(this, "ssfi", n || S), fe(this, "lockSsfi", i), fe(this, "object", e), fe(this, "message", t), fe(this, "eql", pt.deepEqual || ty), ws(this);
}
L(S, "Assertion");
Object.defineProperty(S, "includeStack", {
  get: function() {
    return console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."), pt.includeStack;
  },
  set: function(e) {
    console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."), pt.includeStack = e;
  }
});
Object.defineProperty(S, "showDiff", {
  get: function() {
    return console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."), pt.showDiff;
  },
  set: function(e) {
    console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."), pt.showDiff = e;
  }
});
S.addProperty = function(e, t) {
  xu(this.prototype, e, t);
};
S.addMethod = function(e, t) {
  Su(this.prototype, e, t);
};
S.addChainableMethod = function(e, t, n) {
  Eu(this.prototype, e, t, n);
};
S.overwriteProperty = function(e, t) {
  ku(this.prototype, e, t);
};
S.overwriteMethod = function(e, t) {
  Cu(this.prototype, e, t);
};
S.overwriteChainableMethod = function(e, t, n) {
  Tu(this.prototype, e, t, n);
};
S.prototype.assert = function(e, t, n, i, s, r) {
  var o = gu(this, arguments);
  if (r !== !1 && (r = !0), i === void 0 && s === void 0 && (r = !1), pt.showDiff !== !0 && (r = !1), !o) {
    t = yu(this, arguments);
    var a = fa(this, arguments), l = {
      actual: a,
      expected: i,
      showDiff: r
    }, u = Pu(this, arguments);
    throw u && (l.operator = u), new ke(
      t,
      l,
      pt.includeStack ? this.assert : fe(this, "ssfi")
    );
  }
};
Object.defineProperty(
  S.prototype,
  "_obj",
  {
    get: function() {
      return fe(this, "object");
    },
    set: function(e) {
      fe(this, "object", e);
    }
  }
);
function gr() {
  return pt.useProxy && typeof Proxy < "u" && typeof Reflect < "u";
}
L(gr, "isProxyEnabled");
function xu(e, t, n) {
  n = n === void 0 ? function() {
  } : n, Object.defineProperty(
    e,
    t,
    {
      get: /* @__PURE__ */ L(function i() {
        !gr() && !fe(this, "lockSsfi") && fe(this, "ssfi", i);
        var s = n.call(this);
        if (s !== void 0)
          return s;
        var r = new S();
        return Xt(this, r), r;
      }, "propertyGetter"),
      configurable: !0
    }
  );
}
L(xu, "addProperty");
var wE = Object.getOwnPropertyDescriptor(function() {
}, "length");
function mr(e, t, n) {
  return wE.configurable && Object.defineProperty(e, "length", {
    get: function() {
      throw Error(n ? "Invalid Chai property: " + t + '.length. Due to a compatibility issue, "length" cannot directly follow "' + t + '". Use "' + t + '.lengthOf" instead.' : "Invalid Chai property: " + t + '.length. See docs for proper usage of "' + t + '".');
    }
  }), e;
}
L(mr, "addLengthGuard");
function ly(e) {
  var t = Object.getOwnPropertyNames(e);
  function n(s) {
    t.indexOf(s) === -1 && t.push(s);
  }
  L(n, "addProperty");
  for (var i = Object.getPrototypeOf(e); i !== null; )
    Object.getOwnPropertyNames(i).forEach(n), i = Object.getPrototypeOf(i);
  return t;
}
L(ly, "getProperties");
var dd = ["__flags", "__methods", "_obj", "assert"];
function ws(e, t) {
  return gr() ? new Proxy(e, {
    get: /* @__PURE__ */ L(function n(i, s) {
      if (typeof s == "string" && pt.proxyExcludedKeys.indexOf(s) === -1 && !Reflect.has(i, s)) {
        if (t)
          throw Error("Invalid Chai property: " + t + "." + s + '. See docs for proper usage of "' + t + '".');
        var r = null, o = 4;
        throw ly(i).forEach(function(a) {
          if (!Object.prototype.hasOwnProperty(a) && dd.indexOf(a) === -1) {
            var l = cy(
              s,
              a,
              o
            );
            l < o && (r = a, o = l);
          }
        }), Error(r !== null ? "Invalid Chai property: " + s + '. Did you mean "' + r + '"?' : "Invalid Chai property: " + s);
      }
      return dd.indexOf(s) === -1 && !fe(i, "lockSsfi") && fe(i, "ssfi", n), Reflect.get(i, s);
    }, "proxyGetter")
  }) : e;
}
L(ws, "proxify");
function cy(e, t, n) {
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
L(cy, "stringDistanceCapped");
function Su(e, t, n) {
  var i = /* @__PURE__ */ L(function() {
    fe(this, "lockSsfi") || fe(this, "ssfi", i);
    var s = n.apply(this, arguments);
    if (s !== void 0)
      return s;
    var r = new S();
    return Xt(this, r), r;
  }, "methodWrapper");
  mr(i, t, !1), e[t] = ws(i, t);
}
L(Su, "addMethod");
function ku(e, t, n) {
  var i = Object.getOwnPropertyDescriptor(e, t), s = /* @__PURE__ */ L(function() {
  }, "_super");
  i && typeof i.get == "function" && (s = i.get), Object.defineProperty(
    e,
    t,
    {
      get: /* @__PURE__ */ L(function r() {
        !gr() && !fe(this, "lockSsfi") && fe(this, "ssfi", r);
        var o = fe(this, "lockSsfi");
        fe(this, "lockSsfi", !0);
        var a = n(s).call(this);
        if (fe(this, "lockSsfi", o), a !== void 0)
          return a;
        var l = new S();
        return Xt(this, l), l;
      }, "overwritingPropertyGetter"),
      configurable: !0
    }
  );
}
L(ku, "overwriteProperty");
function Cu(e, t, n) {
  var i = e[t], s = /* @__PURE__ */ L(function() {
    throw new Error(t + " is not a function");
  }, "_super");
  i && typeof i == "function" && (s = i);
  var r = /* @__PURE__ */ L(function() {
    fe(this, "lockSsfi") || fe(this, "ssfi", r);
    var o = fe(this, "lockSsfi");
    fe(this, "lockSsfi", !0);
    var a = n(s).apply(this, arguments);
    if (fe(this, "lockSsfi", o), a !== void 0)
      return a;
    var l = new S();
    return Xt(this, l), l;
  }, "overwritingMethodWrapper");
  mr(r, t, !1), e[t] = ws(r, t);
}
L(Cu, "overwriteMethod");
var vE = typeof Object.setPrototypeOf == "function", pd = /* @__PURE__ */ L(function() {
}, "testFn"), _E = Object.getOwnPropertyNames(pd).filter(function(e) {
  var t = Object.getOwnPropertyDescriptor(pd, e);
  return typeof t != "object" ? !0 : !t.configurable;
}), xE = Function.prototype.call, SE = Function.prototype.apply;
function Eu(e, t, n, i) {
  typeof i != "function" && (i = /* @__PURE__ */ L(function() {
  }, "chainingBehavior"));
  var s = {
    method: n,
    chainingBehavior: i
  };
  e.__methods || (e.__methods = {}), e.__methods[t] = s, Object.defineProperty(
    e,
    t,
    {
      get: /* @__PURE__ */ L(function() {
        s.chainingBehavior.call(this);
        var o = /* @__PURE__ */ L(function() {
          fe(this, "lockSsfi") || fe(this, "ssfi", o);
          var u = s.method.apply(this, arguments);
          if (u !== void 0)
            return u;
          var c = new S();
          return Xt(this, c), c;
        }, "chainableMethodWrapper");
        if (mr(o, t, !0), vE) {
          var a = Object.create(this);
          a.call = xE, a.apply = SE, Object.setPrototypeOf(o, a);
        } else {
          var l = Object.getOwnPropertyNames(e);
          l.forEach(function(u) {
            if (_E.indexOf(u) === -1) {
              var c = Object.getOwnPropertyDescriptor(e, u);
              Object.defineProperty(o, u, c);
            }
          });
        }
        return Xt(this, o), ws(o);
      }, "chainableMethodGetter"),
      configurable: !0
    }
  );
}
L(Eu, "addChainableMethod");
function Tu(e, t, n, i) {
  var s = e.__methods[t], r = s.chainingBehavior;
  s.chainingBehavior = /* @__PURE__ */ L(function() {
    var l = i(r).call(this);
    if (l !== void 0)
      return l;
    var u = new S();
    return Xt(this, u), u;
  }, "overwritingChainableMethodGetter");
  var o = s.method;
  s.method = /* @__PURE__ */ L(function() {
    var l = n(o).apply(this, arguments);
    if (l !== void 0)
      return l;
    var u = new S();
    return Xt(this, u), u;
  }, "overwritingChainableMethodWrapper");
}
L(Tu, "overwriteChainableMethod");
function Io(e, t) {
  return me(e) < me(t) ? -1 : 1;
}
L(Io, "compareByInspect");
function Au(e) {
  return typeof Object.getOwnPropertySymbols != "function" ? [] : Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.getOwnPropertyDescriptor(e, t).enumerable;
  });
}
L(Au, "getOwnEnumerablePropertySymbols");
function Ou(e) {
  return Object.keys(e).concat(Au(e));
}
L(Ou, "getOwnEnumerableProperties");
function uy(e) {
  return e !== e;
}
L(uy, "_isNaN");
var Mo = Number.isNaN || uy;
function fy(e) {
  var t = Oe(e), n = ["Array", "Object", "Function"];
  return n.indexOf(t) !== -1;
}
L(fy, "isObjectType");
function Pu(e, t) {
  var n = fe(e, "operator"), i = fe(e, "negate"), s = t[3], r = i ? t[2] : t[1];
  if (n)
    return n;
  if (typeof r == "function" && (r = r()), r = r || "", !!r && !/\shave\s/.test(r)) {
    var o = fy(s);
    return /\snot\s/.test(r) ? o ? "notDeepStrictEqual" : "notStrictEqual" : o ? "deepStrictEqual" : "strictEqual";
  }
}
L(Pu, "getOperator");
function da(e) {
  return e.name;
}
L(da, "getName");
function Lo(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
L(Lo, "isRegExp");
var { flag: N } = Ao;
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
  N(this, "negate", !0);
});
S.addProperty("deep", function() {
  N(this, "deep", !0);
});
S.addProperty("nested", function() {
  N(this, "nested", !0);
});
S.addProperty("own", function() {
  N(this, "own", !0);
});
S.addProperty("ordered", function() {
  N(this, "ordered", !0);
});
S.addProperty("any", function() {
  N(this, "any", !0), N(this, "all", !1);
});
S.addProperty("all", function() {
  N(this, "all", !0), N(this, "any", !1);
});
var gd = {
  function: ["function", "asyncfunction", "generatorfunction", "asyncgeneratorfunction"],
  asyncfunction: ["asyncfunction", "asyncgeneratorfunction"],
  generatorfunction: ["generatorfunction", "asyncgeneratorfunction"],
  asyncgeneratorfunction: ["asyncgeneratorfunction"]
};
function Nu(e, t) {
  t && N(this, "message", t), e = e.toLowerCase();
  var n = N(this, "object"), i = ~["a", "e", "i", "o", "u"].indexOf(e.charAt(0)) ? "an " : "a ";
  const s = Oe(n).toLowerCase();
  gd.function.includes(e) ? this.assert(
    gd[e].includes(s),
    "expected #{this} to be " + i + e,
    "expected #{this} not to be " + i + e
  ) : this.assert(
    e === s,
    "expected #{this} to be " + i + e,
    "expected #{this} not to be " + i + e
  );
}
L(Nu, "an");
S.addChainableMethod("an", Nu);
S.addChainableMethod("a", Nu);
function hy(e, t) {
  return Mo(e) && Mo(t) || e === t;
}
L(hy, "SameValueZero");
function yr() {
  N(this, "contains", !0);
}
L(yr, "includeChainingBehavior");
function br(e, t) {
  t && N(this, "message", t);
  var n = N(this, "object"), i = Oe(n).toLowerCase(), s = N(this, "message"), r = N(this, "negate"), o = N(this, "ssfi"), a = N(this, "deep"), l = a ? "deep " : "", u = a ? N(this, "eql") : hy;
  s = s ? s + ": " : "";
  var c = !1;
  switch (i) {
    case "string":
      c = n.indexOf(e) !== -1;
      break;
    case "weakset":
      if (a)
        throw new ke(
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
        throw new ke(
          s + "the given combination of arguments (" + i + " and " + Oe(e).toLowerCase() + ") is invalid for this assertion. You can use an array, a map, an object, a set, a string, or a weakset instead of a " + Oe(e).toLowerCase(),
          void 0,
          o
        );
      var f = Object.keys(e), h = null, d = 0;
      if (f.forEach(function(p) {
        var g = new S(n);
        if (Xt(this, g, !0), N(g, "lockSsfi", !0), !r || f.length === 1) {
          g.property(p, e[p]);
          return;
        }
        try {
          g.property(p, e[p]);
        } catch (v) {
          if (!Tt.compatibleConstructor(v, ke))
            throw v;
          h === null && (h = v), d++;
        }
      }, this), r && f.length > 1 && d === f.length)
        throw h;
      return;
  }
  this.assert(
    c,
    "expected #{this} to " + l + "include " + me(e),
    "expected #{this} to not " + l + "include " + me(e)
  );
}
L(br, "include");
S.addChainableMethod("include", br, yr);
S.addChainableMethod("contain", br, yr);
S.addChainableMethod("contains", br, yr);
S.addChainableMethod("includes", br, yr);
S.addProperty("ok", function() {
  this.assert(
    N(this, "object"),
    "expected #{this} to be truthy",
    "expected #{this} to be falsy"
  );
});
S.addProperty("true", function() {
  this.assert(
    N(this, "object") === !0,
    "expected #{this} to be true",
    "expected #{this} to be false",
    !N(this, "negate")
  );
});
S.addProperty("callable", function() {
  const e = N(this, "object"), t = N(this, "ssfi"), n = N(this, "message"), i = n ? `${n}: ` : "", s = N(this, "negate"), r = s ? `${i}expected ${me(e)} not to be a callable function` : `${i}expected ${me(e)} to be a callable function`, o = ["Function", "AsyncFunction", "GeneratorFunction", "AsyncGeneratorFunction"].includes(Oe(e));
  if (o && s || !o && !s)
    throw new ke(
      r,
      void 0,
      t
    );
});
S.addProperty("false", function() {
  this.assert(
    N(this, "object") === !1,
    "expected #{this} to be false",
    "expected #{this} to be true",
    !!N(this, "negate")
  );
});
S.addProperty("null", function() {
  this.assert(
    N(this, "object") === null,
    "expected #{this} to be null",
    "expected #{this} not to be null"
  );
});
S.addProperty("undefined", function() {
  this.assert(
    N(this, "object") === void 0,
    "expected #{this} to be undefined",
    "expected #{this} not to be undefined"
  );
});
S.addProperty("NaN", function() {
  this.assert(
    Mo(N(this, "object")),
    "expected #{this} to be NaN",
    "expected #{this} not to be NaN"
  );
});
function Iu() {
  var e = N(this, "object");
  this.assert(
    e != null,
    "expected #{this} to exist",
    "expected #{this} to not exist"
  );
}
L(Iu, "assertExist");
S.addProperty("exist", Iu);
S.addProperty("exists", Iu);
S.addProperty("empty", function() {
  var e = N(this, "object"), t = N(this, "ssfi"), n = N(this, "message"), i;
  switch (n = n ? n + ": " : "", Oe(e).toLowerCase()) {
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
      throw new ke(
        n + ".empty was passed a weak collection",
        void 0,
        t
      );
    case "function":
      var s = n + ".empty was passed a function " + da(e);
      throw new ke(s.trim(), void 0, t);
    default:
      if (e !== Object(e))
        throw new ke(
          n + ".empty was passed non-string primitive " + me(e),
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
function Mu() {
  var e = N(this, "object"), t = Oe(e);
  this.assert(
    t === "Arguments",
    "expected #{this} to be arguments but got " + t,
    "expected #{this} to not be arguments"
  );
}
L(Mu, "checkArguments");
S.addProperty("arguments", Mu);
S.addProperty("Arguments", Mu);
function pa(e, t) {
  t && N(this, "message", t);
  var n = N(this, "object");
  if (N(this, "deep")) {
    var i = N(this, "lockSsfi");
    N(this, "lockSsfi", !0), this.eql(e), N(this, "lockSsfi", i);
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
L(pa, "assertEqual");
S.addMethod("equal", pa);
S.addMethod("equals", pa);
S.addMethod("eq", pa);
function Lu(e, t) {
  t && N(this, "message", t);
  var n = N(this, "eql");
  this.assert(
    n(e, N(this, "object")),
    "expected #{this} to deeply equal #{exp}",
    "expected #{this} to not deeply equal #{exp}",
    e,
    this._obj,
    !0
  );
}
L(Lu, "assertEql");
S.addMethod("eql", Lu);
S.addMethod("eqls", Lu);
function ga(e, t) {
  t && N(this, "message", t);
  var n = N(this, "object"), i = N(this, "doLength"), s = N(this, "message"), r = s ? s + ": " : "", o = N(this, "ssfi"), a = Oe(n).toLowerCase(), l = Oe(e).toLowerCase(), u, c = !0;
  if (i && a !== "map" && a !== "set" && new S(n, s, o, !0).to.have.property("length"), !i && a === "date" && l !== "date")
    u = r + "the argument to above must be a date";
  else if (l !== "number" && (i || a === "number"))
    u = r + "the argument to above must be a number";
  else if (!i && a !== "date" && a !== "number") {
    var f = a === "string" ? "'" + n + "'" : n;
    u = r + "expected " + f + " to be a number or a date";
  } else
    c = !1;
  if (c)
    throw new ke(u, void 0, o);
  if (i) {
    var h = "length", d;
    a === "map" || a === "set" ? (h = "size", d = n.size) : d = n.length, this.assert(
      d > e,
      "expected #{this} to have a " + h + " above #{exp} but got #{act}",
      "expected #{this} to not have a " + h + " above #{exp}",
      e,
      d
    );
  } else
    this.assert(
      n > e,
      "expected #{this} to be above #{exp}",
      "expected #{this} to be at most #{exp}",
      e
    );
}
L(ga, "assertAbove");
S.addMethod("above", ga);
S.addMethod("gt", ga);
S.addMethod("greaterThan", ga);
function ma(e, t) {
  t && N(this, "message", t);
  var n = N(this, "object"), i = N(this, "doLength"), s = N(this, "message"), r = s ? s + ": " : "", o = N(this, "ssfi"), a = Oe(n).toLowerCase(), l = Oe(e).toLowerCase(), u, c = !0;
  if (i && a !== "map" && a !== "set" && new S(n, s, o, !0).to.have.property("length"), !i && a === "date" && l !== "date")
    u = r + "the argument to least must be a date";
  else if (l !== "number" && (i || a === "number"))
    u = r + "the argument to least must be a number";
  else if (!i && a !== "date" && a !== "number") {
    var f = a === "string" ? "'" + n + "'" : n;
    u = r + "expected " + f + " to be a number or a date";
  } else
    c = !1;
  if (c)
    throw new ke(u, void 0, o);
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
L(ma, "assertLeast");
S.addMethod("least", ma);
S.addMethod("gte", ma);
S.addMethod("greaterThanOrEqual", ma);
function ya(e, t) {
  t && N(this, "message", t);
  var n = N(this, "object"), i = N(this, "doLength"), s = N(this, "message"), r = s ? s + ": " : "", o = N(this, "ssfi"), a = Oe(n).toLowerCase(), l = Oe(e).toLowerCase(), u, c = !0;
  if (i && a !== "map" && a !== "set" && new S(n, s, o, !0).to.have.property("length"), !i && a === "date" && l !== "date")
    u = r + "the argument to below must be a date";
  else if (l !== "number" && (i || a === "number"))
    u = r + "the argument to below must be a number";
  else if (!i && a !== "date" && a !== "number") {
    var f = a === "string" ? "'" + n + "'" : n;
    u = r + "expected " + f + " to be a number or a date";
  } else
    c = !1;
  if (c)
    throw new ke(u, void 0, o);
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
L(ya, "assertBelow");
S.addMethod("below", ya);
S.addMethod("lt", ya);
S.addMethod("lessThan", ya);
function ba(e, t) {
  t && N(this, "message", t);
  var n = N(this, "object"), i = N(this, "doLength"), s = N(this, "message"), r = s ? s + ": " : "", o = N(this, "ssfi"), a = Oe(n).toLowerCase(), l = Oe(e).toLowerCase(), u, c = !0;
  if (i && a !== "map" && a !== "set" && new S(n, s, o, !0).to.have.property("length"), !i && a === "date" && l !== "date")
    u = r + "the argument to most must be a date";
  else if (l !== "number" && (i || a === "number"))
    u = r + "the argument to most must be a number";
  else if (!i && a !== "date" && a !== "number") {
    var f = a === "string" ? "'" + n + "'" : n;
    u = r + "expected " + f + " to be a number or a date";
  } else
    c = !1;
  if (c)
    throw new ke(u, void 0, o);
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
L(ba, "assertMost");
S.addMethod("most", ba);
S.addMethod("lte", ba);
S.addMethod("lessThanOrEqual", ba);
S.addMethod("within", function(e, t, n) {
  n && N(this, "message", n);
  var i = N(this, "object"), s = N(this, "doLength"), r = N(this, "message"), o = r ? r + ": " : "", a = N(this, "ssfi"), l = Oe(i).toLowerCase(), u = Oe(e).toLowerCase(), c = Oe(t).toLowerCase(), f, h = !0, d = u === "date" && c === "date" ? e.toISOString() + ".." + t.toISOString() : e + ".." + t;
  if (s && l !== "map" && l !== "set" && new S(i, r, a, !0).to.have.property("length"), !s && l === "date" && (u !== "date" || c !== "date"))
    f = o + "the arguments to within must be dates";
  else if ((u !== "number" || c !== "number") && (s || l === "number"))
    f = o + "the arguments to within must be numbers";
  else if (!s && l !== "date" && l !== "number") {
    var p = l === "string" ? "'" + i + "'" : i;
    f = o + "expected " + p + " to be a number or a date";
  } else
    h = !1;
  if (h)
    throw new ke(f, void 0, a);
  if (s) {
    var g = "length", v;
    l === "map" || l === "set" ? (g = "size", v = i.size) : v = i.length, this.assert(
      v >= e && v <= t,
      "expected #{this} to have a " + g + " within " + d,
      "expected #{this} to not have a " + g + " within " + d
    );
  } else
    this.assert(
      i >= e && i <= t,
      "expected #{this} to be within " + d,
      "expected #{this} to not be within " + d
    );
});
function Du(e, t) {
  t && N(this, "message", t);
  var n = N(this, "object"), i = N(this, "ssfi"), s = N(this, "message");
  try {
    var r = n instanceof e;
  } catch (a) {
    throw a instanceof TypeError ? (s = s ? s + ": " : "", new ke(
      s + "The instanceof assertion needs a constructor but " + Oe(e) + " was given.",
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
L(Du, "assertInstanceOf");
S.addMethod("instanceof", Du);
S.addMethod("instanceOf", Du);
function Ru(e, t, n) {
  n && N(this, "message", n);
  var i = N(this, "nested"), s = N(this, "own"), r = N(this, "message"), o = N(this, "object"), a = N(this, "ssfi"), l = typeof e;
  if (r = r ? r + ": " : "", i) {
    if (l !== "string")
      throw new ke(
        r + "the argument to property must be a string when using nested syntax",
        void 0,
        a
      );
  } else if (l !== "string" && l !== "number" && l !== "symbol")
    throw new ke(
      r + "the argument to property must be a string, number, or symbol",
      void 0,
      a
    );
  if (i && s)
    throw new ke(
      r + 'The "nested" and "own" flags cannot be combined.',
      void 0,
      a
    );
  if (o == null)
    throw new ke(
      r + "Target cannot be null or undefined.",
      void 0,
      a
    );
  var u = N(this, "deep"), c = N(this, "negate"), f = i ? _u(o, e) : null, h = i ? f.value : o[e], d = u ? N(this, "eql") : (v, w) => v === w, p = "";
  u && (p += "deep "), s && (p += "own "), i && (p += "nested "), p += "property ";
  var g;
  s ? g = Object.prototype.hasOwnProperty.call(o, e) : i ? g = f.exists : g = ha(o, e), (!c || arguments.length === 1) && this.assert(
    g,
    "expected #{this} to have " + p + me(e),
    "expected #{this} to not have " + p + me(e)
  ), arguments.length > 1 && this.assert(
    g && d(t, h),
    "expected #{this} to have " + p + me(e) + " of #{exp}, but got #{act}",
    "expected #{this} to not have " + p + me(e) + " of #{act}",
    t,
    h
  ), N(this, "object", h);
}
L(Ru, "assertProperty");
S.addMethod("property", Ru);
function Fu(e, t, n) {
  N(this, "own", !0), Ru.apply(this, arguments);
}
L(Fu, "assertOwnProperty");
S.addMethod("ownProperty", Fu);
S.addMethod("haveOwnProperty", Fu);
function $u(e, t, n) {
  typeof t == "string" && (n = t, t = null), n && N(this, "message", n);
  var i = N(this, "object"), s = Object.getOwnPropertyDescriptor(Object(i), e), r = N(this, "eql");
  s && t ? this.assert(
    r(t, s),
    "expected the own property descriptor for " + me(e) + " on #{this} to match " + me(t) + ", got " + me(s),
    "expected the own property descriptor for " + me(e) + " on #{this} to not match " + me(t),
    t,
    s,
    !0
  ) : this.assert(
    s,
    "expected #{this} to have an own property descriptor for " + me(e),
    "expected #{this} to not have an own property descriptor for " + me(e)
  ), N(this, "object", s);
}
L($u, "assertOwnPropertyDescriptor");
S.addMethod("ownPropertyDescriptor", $u);
S.addMethod("haveOwnPropertyDescriptor", $u);
function Bu() {
  N(this, "doLength", !0);
}
L(Bu, "assertLengthChain");
function ju(e, t) {
  t && N(this, "message", t);
  var n = N(this, "object"), i = Oe(n).toLowerCase(), s = N(this, "message"), r = N(this, "ssfi"), o = "length", a;
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
L(ju, "assertLength");
S.addChainableMethod("length", ju, Bu);
S.addChainableMethod("lengthOf", ju, Bu);
function qu(e, t) {
  t && N(this, "message", t);
  var n = N(this, "object");
  this.assert(
    e.exec(n),
    "expected #{this} to match " + e,
    "expected #{this} not to match " + e
  );
}
L(qu, "assertMatch");
S.addMethod("match", qu);
S.addMethod("matches", qu);
S.addMethod("string", function(e, t) {
  t && N(this, "message", t);
  var n = N(this, "object"), i = N(this, "message"), s = N(this, "ssfi");
  new S(n, i, s, !0).is.a("string"), this.assert(
    ~n.indexOf(e),
    "expected #{this} to contain " + me(e),
    "expected #{this} to not contain " + me(e)
  );
});
function Uu(e) {
  var t = N(this, "object"), n = Oe(t), i = Oe(e), s = N(this, "ssfi"), r = N(this, "deep"), o, a = "", l, u = !0, c = N(this, "message");
  c = c ? c + ": " : "";
  var f = c + "when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments";
  if (n === "Map" || n === "Set")
    a = r ? "deeply " : "", l = [], t.forEach(function(k, b) {
      l.push(b);
    }), i !== "Array" && (e = Array.prototype.slice.call(arguments));
  else {
    switch (l = Ou(t), i) {
      case "Array":
        if (arguments.length > 1)
          throw new ke(f, void 0, s);
        break;
      case "Object":
        if (arguments.length > 1)
          throw new ke(f, void 0, s);
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
    throw new ke(c + "keys required", void 0, s);
  var h = e.length, d = N(this, "any"), p = N(this, "all"), g = e, v = r ? N(this, "eql") : (k, b) => k === b;
  if (!d && !p && (p = !0), d && (u = g.some(function(k) {
    return l.some(function(b) {
      return v(k, b);
    });
  })), p && (u = g.every(function(k) {
    return l.some(function(b) {
      return v(k, b);
    });
  }), N(this, "contains") || (u = u && e.length == l.length)), h > 1) {
    e = e.map(function(k) {
      return me(k);
    });
    var w = e.pop();
    p && (o = e.join(", ") + ", and " + w), d && (o = e.join(", ") + ", or " + w);
  } else
    o = me(e[0]);
  o = (h > 1 ? "keys " : "key ") + o, o = (N(this, "contains") ? "contain " : "have ") + o, this.assert(
    u,
    "expected #{this} to " + a + o,
    "expected #{this} to not " + a + o,
    g.slice(0).sort(Io),
    l.sort(Io),
    !0
  );
}
L(Uu, "assertKeys");
S.addMethod("keys", Uu);
S.addMethod("key", Uu);
function wa(e, t, n) {
  n && N(this, "message", n);
  var i = N(this, "object"), s = N(this, "ssfi"), r = N(this, "message"), o = N(this, "negate") || !1;
  new S(i, r, s, !0).is.a("function"), (Lo(e) || typeof e == "string") && (t = e, e = null);
  let a, l = !1;
  try {
    i();
  } catch (k) {
    l = !0, a = k;
  }
  var u = e === void 0 && t === void 0, c = !!(e && t), f = !1, h = !1;
  if (u || !u && !o) {
    var d = "an error";
    e instanceof Error ? d = "#{exp}" : e && (d = Tt.getConstructorName(e));
    let k = a;
    if (a instanceof Error)
      k = a.toString();
    else if (typeof a == "string")
      k = a;
    else if (a && (typeof a == "object" || typeof a == "function"))
      try {
        k = Tt.getConstructorName(a);
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
      var p = Tt.compatibleInstance(a, e);
      p === o && (c && o ? f = !0 : this.assert(
        o,
        "expected #{this} to throw #{exp} but #{act} was thrown",
        "expected #{this} to not throw #{exp}" + (a && !o ? " but #{act} was thrown" : ""),
        e.toString(),
        a.toString()
      ));
    }
    var g = Tt.compatibleConstructor(a, e);
    g === o && (c && o ? f = !0 : this.assert(
      o,
      "expected #{this} to throw #{exp} but #{act} was thrown",
      "expected #{this} to not throw #{exp}" + (a ? " but #{act} was thrown" : ""),
      e instanceof Error ? e.toString() : e && Tt.getConstructorName(e),
      a instanceof Error ? a.toString() : a && Tt.getConstructorName(a)
    ));
  }
  if (a && t !== void 0 && t !== null) {
    var v = "including";
    Lo(t) && (v = "matching");
    var w = Tt.compatibleMessage(a, t);
    w === o && (c && o ? h = !0 : this.assert(
      o,
      "expected #{this} to throw error " + v + " #{exp} but got #{act}",
      "expected #{this} to throw error not " + v + " #{exp}",
      t,
      Tt.getMessage(a)
    ));
  }
  f && h && this.assert(
    o,
    "expected #{this} to throw #{exp} but #{act} was thrown",
    "expected #{this} to not throw #{exp}" + (a ? " but #{act} was thrown" : ""),
    e instanceof Error ? e.toString() : e && Tt.getConstructorName(e),
    a instanceof Error ? a.toString() : a && Tt.getConstructorName(a)
  ), N(this, "object", a);
}
L(wa, "assertThrows");
S.addMethod("throw", wa);
S.addMethod("throws", wa);
S.addMethod("Throw", wa);
function Wu(e, t) {
  t && N(this, "message", t);
  var n = N(this, "object"), i = N(this, "itself"), s = typeof n == "function" && !i ? n.prototype[e] : n[e];
  this.assert(
    typeof s == "function",
    "expected #{this} to respond to " + me(e),
    "expected #{this} to not respond to " + me(e)
  );
}
L(Wu, "respondTo");
S.addMethod("respondTo", Wu);
S.addMethod("respondsTo", Wu);
S.addProperty("itself", function() {
  N(this, "itself", !0);
});
function zu(e, t) {
  t && N(this, "message", t);
  var n = N(this, "object"), i = e(n);
  this.assert(
    i,
    "expected #{this} to satisfy " + wi(e),
    "expected #{this} to not satisfy" + wi(e),
    !N(this, "negate"),
    i
  );
}
L(zu, "satisfy");
S.addMethod("satisfy", zu);
S.addMethod("satisfies", zu);
function Vu(e, t, n) {
  n && N(this, "message", n);
  var i = N(this, "object"), s = N(this, "message"), r = N(this, "ssfi");
  if (new S(i, s, r, !0).is.a("number"), typeof e != "number" || typeof t != "number") {
    s = s ? s + ": " : "";
    var o = t === void 0 ? ", and a delta is required" : "";
    throw new ke(
      s + "the arguments to closeTo or approximately must be numbers" + o,
      void 0,
      r
    );
  }
  this.assert(
    Math.abs(i - e) <= t,
    "expected #{this} to be close to " + e + " +/- " + t,
    "expected #{this} not to be close to " + e + " +/- " + t
  );
}
L(Vu, "closeTo");
S.addMethod("closeTo", Vu);
S.addMethod("approximately", Vu);
function dy(e, t, n, i, s) {
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
L(dy, "isSubsetOf");
S.addMethod("members", function(e, t) {
  t && N(this, "message", t);
  var n = N(this, "object"), i = N(this, "message"), s = N(this, "ssfi");
  new S(n, i, s, !0).to.be.iterable, new S(e, i, s, !0).to.be.iterable;
  var r = N(this, "contains"), o = N(this, "ordered"), a, l, u;
  r ? (a = o ? "an ordered superset" : "a superset", l = "expected #{this} to be " + a + " of #{exp}", u = "expected #{this} to not be " + a + " of #{exp}") : (a = o ? "ordered members" : "members", l = "expected #{this} to have the same " + a + " as #{exp}", u = "expected #{this} to not have the same " + a + " as #{exp}");
  var c = N(this, "deep") ? N(this, "eql") : void 0;
  this.assert(
    dy(e, n, c, r, o),
    l,
    u,
    e,
    n,
    !0
  );
});
S.addProperty("iterable", function(e) {
  e && N(this, "message", e);
  var t = N(this, "object");
  this.assert(
    t != null && t[Symbol.iterator],
    "expected #{this} to be an iterable",
    "expected #{this} to not be an iterable",
    t
  );
});
function py(e, t) {
  t && N(this, "message", t);
  var n = N(this, "object"), i = N(this, "message"), s = N(this, "ssfi"), r = N(this, "contains"), o = N(this, "deep"), a = N(this, "eql");
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
L(py, "oneOf");
S.addMethod("oneOf", py);
function Gu(e, t, n) {
  n && N(this, "message", n);
  var i = N(this, "object"), s = N(this, "message"), r = N(this, "ssfi");
  new S(i, s, r, !0).is.a("function");
  var o;
  t ? (new S(e, s, r, !0).to.have.property(t), o = e[t]) : (new S(e, s, r, !0).is.a("function"), o = e()), i();
  var a = t == null ? e() : e[t], l = t == null ? o : "." + t;
  N(this, "deltaMsgObj", l), N(this, "initialDeltaValue", o), N(this, "finalDeltaValue", a), N(this, "deltaBehavior", "change"), N(this, "realDelta", a !== o), this.assert(
    o !== a,
    "expected " + l + " to change",
    "expected " + l + " to not change"
  );
}
L(Gu, "assertChanges");
S.addMethod("change", Gu);
S.addMethod("changes", Gu);
function Hu(e, t, n) {
  n && N(this, "message", n);
  var i = N(this, "object"), s = N(this, "message"), r = N(this, "ssfi");
  new S(i, s, r, !0).is.a("function");
  var o;
  t ? (new S(e, s, r, !0).to.have.property(t), o = e[t]) : (new S(e, s, r, !0).is.a("function"), o = e()), new S(o, s, r, !0).is.a("number"), i();
  var a = t == null ? e() : e[t], l = t == null ? o : "." + t;
  N(this, "deltaMsgObj", l), N(this, "initialDeltaValue", o), N(this, "finalDeltaValue", a), N(this, "deltaBehavior", "increase"), N(this, "realDelta", a - o), this.assert(
    a - o > 0,
    "expected " + l + " to increase",
    "expected " + l + " to not increase"
  );
}
L(Hu, "assertIncreases");
S.addMethod("increase", Hu);
S.addMethod("increases", Hu);
function Ku(e, t, n) {
  n && N(this, "message", n);
  var i = N(this, "object"), s = N(this, "message"), r = N(this, "ssfi");
  new S(i, s, r, !0).is.a("function");
  var o;
  t ? (new S(e, s, r, !0).to.have.property(t), o = e[t]) : (new S(e, s, r, !0).is.a("function"), o = e()), new S(o, s, r, !0).is.a("number"), i();
  var a = t == null ? e() : e[t], l = t == null ? o : "." + t;
  N(this, "deltaMsgObj", l), N(this, "initialDeltaValue", o), N(this, "finalDeltaValue", a), N(this, "deltaBehavior", "decrease"), N(this, "realDelta", o - a), this.assert(
    a - o < 0,
    "expected " + l + " to decrease",
    "expected " + l + " to not decrease"
  );
}
L(Ku, "assertDecreases");
S.addMethod("decrease", Ku);
S.addMethod("decreases", Ku);
function gy(e, t) {
  t && N(this, "message", t);
  var n = N(this, "deltaMsgObj"), i = N(this, "initialDeltaValue"), s = N(this, "finalDeltaValue"), r = N(this, "deltaBehavior"), o = N(this, "realDelta"), a;
  r === "change" ? a = Math.abs(s - i) === Math.abs(e) : a = o === Math.abs(e), this.assert(
    a,
    "expected " + n + " to " + r + " by " + e,
    "expected " + n + " to not " + r + " by " + e
  );
}
L(gy, "assertDelta");
S.addMethod("by", gy);
S.addProperty("extensible", function() {
  var e = N(this, "object"), t = e === Object(e) && Object.isExtensible(e);
  this.assert(
    t,
    "expected #{this} to be extensible",
    "expected #{this} to not be extensible"
  );
});
S.addProperty("sealed", function() {
  var e = N(this, "object"), t = e === Object(e) ? Object.isSealed(e) : !0;
  this.assert(
    t,
    "expected #{this} to be sealed",
    "expected #{this} to not be sealed"
  );
});
S.addProperty("frozen", function() {
  var e = N(this, "object"), t = e === Object(e) ? Object.isFrozen(e) : !0;
  this.assert(
    t,
    "expected #{this} to be frozen",
    "expected #{this} to not be frozen"
  );
});
S.addProperty("finite", function(e) {
  var t = N(this, "object");
  this.assert(
    typeof t == "number" && isFinite(t),
    "expected #{this} to be a finite number",
    "expected #{this} to not be a finite number"
  );
});
function vi(e, t) {
  return new S(e, t);
}
L(vi, "expect");
vi.fail = function(e, t, n, i) {
  throw arguments.length < 2 && (n = e, e = void 0), n = n || "expect.fail()", new ke(n, {
    actual: e,
    expected: t,
    operator: i
  }, vi.fail);
};
var my = {};
pu(my, {
  Should: () => CE,
  should: () => kE
});
function Yu() {
  function e() {
    return this instanceof String || this instanceof Number || this instanceof Boolean || typeof Symbol == "function" && this instanceof Symbol || typeof BigInt == "function" && this instanceof BigInt ? new S(this.valueOf(), null, e) : new S(this, null, e);
  }
  L(e, "shouldGetter");
  function t(i) {
    Object.defineProperty(this, "should", {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    });
  }
  L(t, "shouldSetter"), Object.defineProperty(Object.prototype, "should", {
    set: t,
    get: e,
    configurable: !0
  });
  var n = {};
  return n.fail = function(i, s, r, o) {
    throw arguments.length < 2 && (r = i, i = void 0), r = r || "should.fail()", new ke(r, {
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
L(Yu, "loadShould");
var kE = Yu, CE = Yu;
function x(e, t) {
  var n = new S(null, null, x, !0);
  n.assert(
    e,
    t,
    "[ negation message unavailable ]"
  );
}
L(x, "assert");
x.fail = function(e, t, n, i) {
  throw arguments.length < 2 && (n = e, e = void 0), n = n || "assert.fail()", new ke(n, {
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
    t == fe(i, "object"),
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
    t != fe(i, "object"),
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
  return fe(s, "object");
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
      throw i = i && i + ": ", new ke(
        i + 'Invalid operator "' + t + '"',
        void 0,
        x.operator
      );
  }
  var r = new S(s, i, x.operator, !0);
  r.assert(
    fe(r, "object") === !0,
    "expected " + me(e) + " to be " + t + " " + me(n),
    "expected " + me(e) + " to not be " + t + " " + me(n)
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
    throw t = t ? `${t} expected ${me(e)} to be an iterable` : `expected ${me(e)} to be an iterable`, new ke(
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
(/* @__PURE__ */ L(function e(t, n) {
  return x[n] = x[t], e;
}, "alias"))("isOk", "ok")("isNotOk", "notOk")("throws", "throw")("throws", "Throw")("isExtensible", "extensible")("isNotExtensible", "notExtensible")("isSealed", "sealed")("isNotSealed", "notSealed")("isFrozen", "frozen")("isNotFrozen", "notFrozen")("isEmpty", "empty")("isNotEmpty", "notEmpty")("isCallable", "isFunction")("isNotCallable", "isNotFunction");
var md = [];
function EE(e) {
  const t = {
    AssertionError: ke,
    util: Ao,
    config: pt,
    expect: vi,
    assert: x,
    Assertion: S,
    ...my
  };
  return ~md.indexOf(e) || (e(t, Ao), md.push(e)), t;
}
L(EE, "use");
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
var $I = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function yy(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Jl = { exports: {} }, Xa, yd;
function TE() {
  if (yd) return Xa;
  yd = 1;
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
function AE(e) {
  n.debug = n, n.default = n, n.coerce = l, n.disable = r, n.enable = s, n.enabled = o, n.humanize = TE(), n.destroy = u, Object.keys(e).forEach((c) => {
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
    function g(...v) {
      if (!g.enabled)
        return;
      const w = g, k = Number(/* @__PURE__ */ new Date()), b = k - (f || k);
      w.diff = b, w.prev = f, w.curr = k, f = k, v[0] = n.coerce(v[0]), typeof v[0] != "string" && v.unshift("%O");
      let C = 0;
      v[0] = v[0].replace(/%([a-zA-Z%])/g, (M, P) => {
        if (M === "%%")
          return "%";
        C++;
        const D = n.formatters[P];
        if (typeof D == "function") {
          const z = v[C];
          M = D.call(w, z), v.splice(C, 1), C--;
        }
        return M;
      }), n.formatArgs.call(w, v), (w.log || n.log).apply(w, v);
    }
    return g.namespace = c, g.useColors = n.useColors(), g.color = n.selectColor(c), g.extend = i, g.destroy = n.destroy, Object.defineProperty(g, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => h !== null ? h : (d !== n.namespaces && (d = n.namespaces, p = n.enabled(c)), p),
      set: (v) => {
        h = v;
      }
    }), typeof n.init == "function" && n.init(g), g;
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
var OE = AE;
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
  e.exports = OE(t);
  const { formatters: a } = e.exports;
  a.j = function(l) {
    try {
      return JSON.stringify(l);
    } catch (u) {
      return "[UnexpectedJSONParseError]: " + u.message;
    }
  };
})(Jl, Jl.exports);
var PE = Jl.exports;
const by = /* @__PURE__ */ yy(PE), NE = {
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
    efficiency: 5,
    guillotine: 1
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
pt.showDiff = !0;
const bd = by("tests");
by("timers");
function wy() {
  return typeof process < "u" && (process != null && process.env), !1;
}
function IE(e, t = null) {
  e != null && e.length && wy() && NE.runTests && e.forEach((n) => {
    try {
      n();
    } catch (i) {
      t ? bd(t, i.message) : bd(i.message);
    }
  });
}
var Ql = { exports: {} }, Ja, wd;
function ME() {
  if (wd) return Ja;
  wd = 1;
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
function LE(e) {
  n.debug = n, n.default = n, n.coerce = l, n.disable = r, n.enable = s, n.enabled = o, n.humanize = ME(), n.destroy = u, Object.keys(e).forEach((c) => {
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
    function g(...v) {
      if (!g.enabled)
        return;
      const w = g, k = Number(/* @__PURE__ */ new Date()), b = k - (f || k);
      w.diff = b, w.prev = f, w.curr = k, f = k, v[0] = n.coerce(v[0]), typeof v[0] != "string" && v.unshift("%O");
      let C = 0;
      v[0] = v[0].replace(/%([a-zA-Z%])/g, (M, P) => {
        if (M === "%%")
          return "%";
        C++;
        const D = n.formatters[P];
        if (typeof D == "function") {
          const z = v[C];
          M = D.call(w, z), v.splice(C, 1), C--;
        }
        return M;
      }), n.formatArgs.call(w, v), (w.log || n.log).apply(w, v);
    }
    return g.namespace = c, g.useColors = n.useColors(), g.color = n.selectColor(c), g.extend = i, g.destroy = n.destroy, Object.defineProperty(g, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => h !== null ? h : (d !== n.namespaces && (d = n.namespaces, p = n.enabled(c)), p),
      set: (v) => {
        h = v;
      }
    }), typeof n.init == "function" && n.init(g), g;
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
var DE = LE;
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
  e.exports = DE(t);
  const { formatters: a } = e.exports;
  a.j = function(l) {
    try {
      return JSON.stringify(l);
    } catch (u) {
      return "[UnexpectedJSONParseError]: " + u.message;
    }
  };
})(Ql, Ql.exports);
var RE = Ql.exports;
const jt = /* @__PURE__ */ yy(RE);
jt.colors = [
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
jt("logs");
jt("cuts");
jt("guillotine");
jt("results");
jt("scoring");
jt("calculations");
jt("subset");
jt("secondRun");
jt("stack");
const FE = jt("errors");
jt("allStock");
FE.color = 1;
function $E(e) {
  if (e != null && e.direction)
    switch (e.direction) {
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
class va extends Ms {
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
    $(n == null ? void 0 : n.stock) && (((s = (i = n.stock) == null ? void 0 : i.constructor) == null ? void 0 : s.name) === "Stock" ? this.stock = n.stock : this.stock = new oi(n.stock), this.stockId = this.stock.id), this.stockId = (r = n == null ? void 0 : n.stock) == null ? void 0 : r.id, this.type = n.type ?? null, this.guillotine = n.guillotine, this.guillotineData = $(n.guillotineData) ? n.guillotineData : {}, this.guillotineData.ptxDummyCut = (n == null ? void 0 : n.ptxDummyCut) || ((o = n == null ? void 0 : n.guillotineData) == null ? void 0 : o.ptxDummyCut) || !1, this.isTrim = $(n.isTrim) ? n.isTrim : !1, this.distances = $(n.distances) ? n.distances : {}, this.beamTrimX1 = n.beamTrimX1, this.beamTrimY1 = n.beamTrimY1;
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
    this.direction === "l" ? (this.x1 = this.x1 < 0 ? 0 : this.x1, this.x2 = this.x2 > this.stock.l ? this.stock.l : this.x2) : this.direction === "w" && (this.y1 = this.y1 < 0 ? 0 : this.y1, this.y2 = this.y2 > this.stock.w ? this.stock.w : this.y2);
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
        return Se.greaterThan(
          this.y1 + this.stock.getBladeWidth() / 2,
          0
        );
      case "left":
        return Se.greaterThan(
          this.x1 + this.stock.getBladeWidth() / 2,
          0
        );
      case "top":
        return Se.lessThan(
          this.y1 - this.stock.getBladeWidth() / 2,
          this.stock.w
        );
      case "right":
        return Se.lessThan(
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
    return $E(this);
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
var BE = 2e3, Q = {
  s: 1,
  n: 0,
  d: 1
};
function Cn(e, t) {
  if (isNaN(e = parseInt(e, 10)))
    throw Xr();
  return e * t;
}
function De(e, t) {
  if (t === 0)
    throw Xu();
  var n = Object.create(Rt.prototype);
  n.s = e < 0 ? -1 : 1, e = e < 0 ? -e : e;
  var i = Hi(e, t);
  return n.n = e / i, n.d = t / i, n;
}
function vd(e) {
  for (var t = {}, n = e, i = 2, s = 4; s <= n; ) {
    for (; n % i === 0; )
      n /= i, t[i] = (t[i] || 0) + 1;
    s += 1 + 2 * i++;
  }
  return n !== e ? n > 1 && (t[n] = (t[n] || 0) + 1) : t[e] = (t[e] || 0) + 1, t;
}
var Ct = function(e, t) {
  var n = 0, i = 1, s = 1, r = 0, o = 0, a = 0, l = 1, u = 1, c = 0, f = 1, h = 1, d = 1, p = 1e7, g;
  if (e != null) if (t !== void 0) {
    if (n = e, i = t, s = n * i, n % 1 !== 0 || i % 1 !== 0)
      throw WE();
  } else
    switch (typeof e) {
      case "object": {
        if ("d" in e && "n" in e)
          n = e.n, i = e.d, "s" in e && (n *= e.s);
        else if (0 in e)
          n = e[0], 1 in e && (i = e[1]);
        else
          throw Xr();
        s = n * i;
        break;
      }
      case "number": {
        if (e < 0 && (s = e, e = -e), e % 1 === 0)
          n = e;
        else if (e > 0) {
          for (e >= 1 && (u = Math.pow(10, Math.floor(1 + Math.log(e) / Math.LN10)), e /= u); f <= p && d <= p; )
            if (g = (c + h) / (f + d), e === g) {
              f + d <= p ? (n = c + h, i = f + d) : d > f ? (n = h, i = d) : (n = c, i = f);
              break;
            } else
              e > g ? (c += h, f += d) : (h += c, d += f), f > p ? (n = h, i = d) : (n = c, i = f);
          n *= u;
        } else (isNaN(e) || isNaN(t)) && (i = n = NaN);
        break;
      }
      case "string": {
        if (f = e.match(/\d+|./g), f === null)
          throw Xr();
        if (f[c] === "-" ? (s = -1, c++) : f[c] === "+" && c++, f.length === c + 1 ? o = Cn(f[c++], s) : f[c + 1] === "." || f[c] === "." ? (f[c] !== "." && (r = Cn(f[c++], s)), c++, (c + 1 === f.length || f[c + 1] === "(" && f[c + 3] === ")" || f[c + 1] === "'" && f[c + 3] === "'") && (o = Cn(f[c], s), l = Math.pow(10, f[c].length), c++), (f[c] === "(" && f[c + 2] === ")" || f[c] === "'" && f[c + 2] === "'") && (a = Cn(f[c + 1], s), u = Math.pow(10, f[c + 1].length) - 1, c += 3)) : f[c + 1] === "/" || f[c + 1] === ":" ? (o = Cn(f[c], s), l = Cn(f[c + 2], 1), c += 3) : f[c + 3] === "/" && f[c + 1] === " " && (r = Cn(f[c], s), o = Cn(f[c + 2], s), l = Cn(f[c + 4], 1), c += 5), f.length <= c) {
          i = l * u, s = /* void */
          n = a + i * r + u * o;
          break;
        }
      }
      default:
        throw Xr();
    }
  if (i === 0)
    throw Xu();
  Q.s = s < 0 ? -1 : 1, Q.n = Math.abs(n), Q.d = Math.abs(i);
};
function jE(e, t, n) {
  for (var i = 1; t > 0; e = e * e % n, t >>= 1)
    t & 1 && (i = i * e % n);
  return i;
}
function qE(e, t) {
  for (; t % 2 === 0; t /= 2)
    ;
  for (; t % 5 === 0; t /= 5)
    ;
  if (t === 1)
    return 0;
  for (var n = 10 % t, i = 1; n !== 1; i++)
    if (n = n * 10 % t, i > BE)
      return 0;
  return i;
}
function UE(e, t, n) {
  for (var i = 1, s = jE(10, n, t), r = 0; r < 300; r++) {
    if (i === s)
      return r;
    i = i * 10 % t, s = s * 10 % t;
  }
  return 0;
}
function Hi(e, t) {
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
function Rt(e, t) {
  if (Ct(e, t), this instanceof Rt)
    e = Hi(Q.d, Q.n), this.s = Q.s, this.n = Q.n / e, this.d = Q.d / e;
  else
    return De(Q.s * Q.n, Q.d);
}
var Xu = function() {
  return new Error("Division by Zero");
}, Xr = function() {
  return new Error("Invalid argument");
}, WE = function() {
  return new Error("Parameters must be integer");
};
Rt.prototype = {
  s: 1,
  n: 0,
  d: 1,
  /**
   * Calculates the absolute value
   *
   * Ex: new Fraction(-4).abs() => 4
   **/
  abs: function() {
    return De(this.n, this.d);
  },
  /**
   * Inverts the sign of the current fraction
   *
   * Ex: new Fraction(-4).neg() => 4
   **/
  neg: function() {
    return De(-this.s * this.n, this.d);
  },
  /**
   * Adds two rational numbers
   *
   * Ex: new Fraction({n: 2, d: 3}).add("14.9") => 467 / 30
   **/
  add: function(e, t) {
    return Ct(e, t), De(
      this.s * this.n * Q.d + Q.s * this.d * Q.n,
      this.d * Q.d
    );
  },
  /**
   * Subtracts two rational numbers
   *
   * Ex: new Fraction({n: 2, d: 3}).add("14.9") => -427 / 30
   **/
  sub: function(e, t) {
    return Ct(e, t), De(
      this.s * this.n * Q.d - Q.s * this.d * Q.n,
      this.d * Q.d
    );
  },
  /**
   * Multiplies two rational numbers
   *
   * Ex: new Fraction("-17.(345)").mul(3) => 5776 / 111
   **/
  mul: function(e, t) {
    return Ct(e, t), De(
      this.s * Q.s * this.n * Q.n,
      this.d * Q.d
    );
  },
  /**
   * Divides two rational numbers
   *
   * Ex: new Fraction("-17.(345)").inverse().div(3)
   **/
  div: function(e, t) {
    return Ct(e, t), De(
      this.s * Q.s * this.n * Q.d,
      this.d * Q.n
    );
  },
  /**
   * Clones the actual object
   *
   * Ex: new Fraction("-17.(345)").clone()
   **/
  clone: function() {
    return De(this.s * this.n, this.d);
  },
  /**
   * Calculates the modulo of two rational numbers - a more precise fmod
   *
   * Ex: new Fraction('4.(3)').mod([7, 8]) => (13/3) % (7/8) = (5/6)
   **/
  mod: function(e, t) {
    if (isNaN(this.n) || isNaN(this.d))
      return new Rt(NaN);
    if (e === void 0)
      return De(this.s * this.n % this.d, 1);
    if (Ct(e, t), Q.n === 0 && this.d === 0)
      throw Xu();
    return De(
      this.s * (Q.d * this.n) % (Q.n * this.d),
      Q.d * this.d
    );
  },
  /**
   * Calculates the fractional gcd of two rational numbers
   *
   * Ex: new Fraction(5,8).gcd(3,7) => 1/56
   */
  gcd: function(e, t) {
    return Ct(e, t), De(Hi(Q.n, this.n) * Hi(Q.d, this.d), Q.d * this.d);
  },
  /**
   * Calculates the fractional lcm of two rational numbers
   *
   * Ex: new Fraction(5,8).lcm(3,7) => 15
   */
  lcm: function(e, t) {
    return Ct(e, t), Q.n === 0 && this.n === 0 ? De(0, 1) : De(Q.n * this.n, Hi(Q.n, this.n) * Hi(Q.d, this.d));
  },
  /**
   * Calculates the ceil of a rational number
   *
   * Ex: new Fraction('4.(3)').ceil() => (5 / 1)
   **/
  ceil: function(e) {
    return e = Math.pow(10, e || 0), isNaN(this.n) || isNaN(this.d) ? new Rt(NaN) : De(Math.ceil(e * this.s * this.n / this.d), e);
  },
  /**
   * Calculates the floor of a rational number
   *
   * Ex: new Fraction('4.(3)').floor() => (4 / 1)
   **/
  floor: function(e) {
    return e = Math.pow(10, e || 0), isNaN(this.n) || isNaN(this.d) ? new Rt(NaN) : De(Math.floor(e * this.s * this.n / this.d), e);
  },
  /**
   * Rounds a rational number
   *
   * Ex: new Fraction('4.(3)').round() => (4 / 1)
   **/
  round: function(e) {
    return e = Math.pow(10, e || 0), isNaN(this.n) || isNaN(this.d) ? new Rt(NaN) : De(Math.round(e * this.s * this.n / this.d), e);
  },
  /**
   * Rounds a rational number to a multiple of another rational number
   *
   * Ex: new Fraction('0.9').roundTo("1/8") => 7 / 8
   **/
  roundTo: function(e, t) {
    return Ct(e, t), De(this.s * Math.round(this.n * Q.d / (this.d * Q.n)) * Q.n, Q.d);
  },
  /**
   * Gets the inverse of the fraction, means numerator and denominator are exchanged
   *
   * Ex: new Fraction([-3, 4]).inverse() => -4 / 3
   **/
  inverse: function() {
    return De(this.s * this.d, this.n);
  },
  /**
   * Calculates the fraction to some rational exponent, if possible
   *
   * Ex: new Fraction(-1,2).pow(-3) => -8
   */
  pow: function(e, t) {
    if (Ct(e, t), Q.d === 1)
      return Q.s < 0 ? De(Math.pow(this.s * this.d, Q.n), Math.pow(this.n, Q.n)) : De(Math.pow(this.s * this.n, Q.n), Math.pow(this.d, Q.n));
    if (this.s < 0) return null;
    var n = vd(this.n), i = vd(this.d), s = 1, r = 1;
    for (var o in n)
      if (o !== "1") {
        if (o === "0") {
          s = 0;
          break;
        }
        if (n[o] *= Q.n, n[o] % Q.d === 0)
          n[o] /= Q.d;
        else return null;
        s *= Math.pow(o, n[o]);
      }
    for (var o in i)
      if (o !== "1") {
        if (i[o] *= Q.n, i[o] % Q.d === 0)
          i[o] /= Q.d;
        else return null;
        r *= Math.pow(o, i[o]);
      }
    return Q.s < 0 ? De(r, s) : De(s, r);
  },
  /**
   * Check if two rational numbers are the same
   *
   * Ex: new Fraction(19.6).equals([98, 5]);
   **/
  equals: function(e, t) {
    return Ct(e, t), this.s * this.n * Q.d === Q.s * Q.n * this.d;
  },
  /**
   * Check if two rational numbers are the same
   *
   * Ex: new Fraction(19.6).equals([98, 5]);
   **/
  compare: function(e, t) {
    Ct(e, t);
    var n = this.s * this.n * Q.d - Q.s * Q.n * this.d;
    return (0 < n) - (n < 0);
  },
  simplify: function(e) {
    if (isNaN(this.n) || isNaN(this.d))
      return this;
    e = e || 1e-3;
    for (var t = this.abs(), n = t.toContinued(), i = 1; i < n.length; i++) {
      for (var s = De(n[i - 1], 1), r = i - 2; r >= 0; r--)
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
    return Ct(e, t), !(!(Q.n * this.d) || this.n * Q.d % (Q.n * this.d));
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
    var i = qE(t, n), s = UE(t, n, i), r = this.s < 0 ? "-" : "";
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
function zE(e) {
  if (!e) return null;
  if (e = e.toString().trim(), typeof navigator > "u" || typeof navigator.language > "u")
    return parseFloat(e);
  const { thousandsSeparator: t, decimalSeparator: n } = VE();
  return e = Array.from(e, (i) => i === t ? "" : i === n ? "." : i).join(""), parseFloat(e);
}
function VE() {
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
function vy(e) {
  if (!e || typeof e == "number") return !1;
  e = e.toString().replace(/[^0-9/ ]/g, "");
  const t = /\b\d+\/\d+\b/g;
  return e.match(t);
}
function GE(e, t = !1) {
  if (!$(e)) return null;
  if (e === 0) return "0";
  let n = e.toString().trim();
  if (!n) return null;
  if (vy(e))
    return n = n.replace(/[^0-9/,. -]/g, "").replace(/  +/g, " "), n;
  {
    n = n.replace(/[^0-9,. -]/g, ""), n.startsWith(".") && (n = "0" + n);
    let i;
    return t ? i = zE(n) : i = parseFloat(n), i ? i.toString() : null;
  }
}
function X(e, t = "decimal", n = !1, i = !1, s = 0) {
  if (!$(e) || !t) return null;
  if (t !== "decimal" && t !== "fraction")
    return console.error("incorrect conversion type specified for convertUnit"), null;
  try {
    const r = GE(e, i);
    if (!r) return 0;
    let o;
    if (t === "fraction")
      if (vy(r))
        o = new Rt(r);
      else {
        const a = parseFloat(r);
        Number.isInteger(a) ? o = new Rt(r) : o = new Rt(a);
      }
    else o = new Rt(r);
    switch (t) {
      case "fraction":
        if (s > 0) {
          const a = o.valueOf(), l = Math.round(a * s) / s;
          o = new Rt(l);
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
function HE(e) {
  let t = e;
  return typeof e != "number" && (t = parseFloat(e)), t % 1 !== 0;
}
const rt = {
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
    t = X(t);
    const n = X(e.l), i = X(e.w), s = n - t * 2, r = i - t * 2;
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
    }), !_i(e) || _i(e) && !(e != null && e.trimmed)) {
      const n = X(e.l), i = X(e.w), s = X(e.trim.x1), r = X(e.trim.x2), o = X(e.trim.y1), a = X(e.trim.y2);
      Object.entries({ x1: s, x2: r, y1: o, y2: a }).forEach(([u, c]) => {
        isNaN(c) && t.push(`The value of trim ${Dy[u]} is not understood.`);
      }), n && i && n > 0 && i > 0 && (s + r >= e.l && t.push(`Trim W1 + W2 = ${s + r}, which is greater than or equal to total length of ${n}.`), a + a >= e.w && t.push(`Trim L1 + L2 = ${o + a}, which is greater than or equal to total width of ${i}.`));
    }
    return t;
  },
  x: (e) => {
    const t = [];
    return $(e) ? (e = X(e), isNaN(e) ? (t.push("X value is not understood."), t) : (e < 0 && t.push("X must be greater than or equal to zero."), t)) : t;
  },
  y: (e) => {
    const t = [];
    return $(e) && (e = X(e), isNaN(e) && t.push("Y value is not understood."), e < 0 && t.push("Y must be greater than or equal to zero.")), t;
  },
  l: (e) => {
    const t = [];
    return $(e) ? (e = X(e), isNaN(e) ? (t.push("Width value is not understood."), t) : (e <= 0 && t.push(`Length must be greater than zero, got ${e}`), t)) : (t.push("Length is required."), t);
  },
  w: (e) => {
    const t = [];
    return $(e) ? (e = X(e), isNaN(e) ? (t.push("Width value is not understood."), t) : (e <= 0 && t.push(`Width must be greater than zero, got ${e}`), t)) : (t.push("Width is required."), t);
  },
  t: (e) => {
    const t = [];
    return !$(e) || e === "" ? t : (e = X(e), isNaN(e) ? (t.push("Thickness value is not understood."), t) : (e && e <= 0 && t.push(`Thickness must be greater than zero, got ${e}`), t));
  },
  q: (e, t = null) => {
    const n = [];
    return $(e) ? (e = parseInt(e), isNaN(e) ? (n.push("Quantity value is not understood."), n) : (HE(e) && n.push("Quantity should be an integer."), e <= 0 && (t || n.push("Quantity should be greater than or equal to zero.")), n)) : (n.push("Quantity should be set."), n);
  },
  orientationLock: (e) => {
    const t = [];
    return $(e) && (e = e.toLowerCase(), e !== "l" && e !== "w" && t.push(`Orientation lock must be l or w, got ${e}`)), t;
  },
  grain: (e) => {
    const t = [];
    return $(e) && (e = e.toLowerCase(), e !== "l" && e !== "w" && t.push("Grain must be l or w.")), t;
  },
  stockMatch: (e, t, n, i = 0) => {
    if (!e.q) return [];
    if (e.applyPartTrim(i), e.issues.length) return [];
    const s = $2([e], t, n);
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
var _y = typeof global == "object" && global && global.Object === Object && global, KE = typeof self == "object" && self && self.Object === Object && self, Ju = _y || KE || Function("return this")(), Do = Ju.Symbol, xy = Object.prototype, YE = xy.hasOwnProperty, XE = xy.toString, As = Do ? Do.toStringTag : void 0;
function JE(e) {
  var t = YE.call(e, As), n = e[As];
  try {
    e[As] = void 0;
    var i = !0;
  } catch {
  }
  var s = XE.call(e);
  return i && (t ? e[As] = n : delete e[As]), s;
}
var QE = Object.prototype, ZE = QE.toString;
function eT(e) {
  return ZE.call(e);
}
var tT = "[object Null]", nT = "[object Undefined]", _d = Do ? Do.toStringTag : void 0;
function Qu(e) {
  return e == null ? e === void 0 ? nT : tT : _d && _d in Object(e) ? JE(e) : eT(e);
}
function Zu(e) {
  return e != null && typeof e == "object";
}
var iT = Array.isArray;
function _a(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Sy(e) {
  return e;
}
var sT = "[object AsyncFunction]", rT = "[object Function]", oT = "[object GeneratorFunction]", aT = "[object Proxy]";
function ky(e) {
  if (!_a(e))
    return !1;
  var t = Qu(e);
  return t == rT || t == oT || t == sT || t == aT;
}
var Qa = Ju["__core-js_shared__"], xd = function() {
  var e = /[^.]+$/.exec(Qa && Qa.keys && Qa.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function lT(e) {
  return !!xd && xd in e;
}
var cT = Function.prototype, uT = cT.toString;
function fT(e) {
  if (e != null) {
    try {
      return uT.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var hT = /[\\^$.*+?()[\]{}|]/g, dT = /^\[object .+?Constructor\]$/, pT = Function.prototype, gT = Object.prototype, mT = pT.toString, yT = gT.hasOwnProperty, bT = RegExp(
  "^" + mT.call(yT).replace(hT, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function wT(e) {
  if (!_a(e) || lT(e))
    return !1;
  var t = ky(e) ? bT : dT;
  return t.test(fT(e));
}
function vT(e, t) {
  return e == null ? void 0 : e[t];
}
function _T(e, t) {
  var n = vT(e, t);
  return wT(n) ? n : void 0;
}
function xT(e, t, n) {
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
var ST = 800, kT = 16, CT = Date.now;
function ET(e) {
  var t = 0, n = 0;
  return function() {
    var i = CT(), s = kT - (i - n);
    if (n = i, s > 0) {
      if (++t >= ST)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function TT(e) {
  return function() {
    return e;
  };
}
var Sd = function() {
  try {
    var e = _T(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), AT = Sd ? function(e, t) {
  return Sd(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: TT(t),
    writable: !0
  });
} : Sy, OT = ET(AT), PT = 9007199254740991, NT = /^(?:0|[1-9]\d*)$/;
function Cy(e, t) {
  var n = typeof e;
  return t = t ?? PT, !!t && (n == "number" || n != "symbol" && NT.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Ey(e, t) {
  return e === t || e !== e && t !== t;
}
var kd = Math.max;
function IT(e, t, n) {
  return t = kd(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var i = arguments, s = -1, r = kd(i.length - t, 0), o = Array(r); ++s < r; )
      o[s] = i[t + s];
    s = -1;
    for (var a = Array(t + 1); ++s < t; )
      a[s] = i[s];
    return a[t] = n(o), xT(e, this, a);
  };
}
function MT(e, t) {
  return OT(IT(e, t, Sy), e + "");
}
var LT = 9007199254740991;
function Ty(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= LT;
}
function Ay(e) {
  return e != null && Ty(e.length) && !ky(e);
}
function DT(e, t, n) {
  if (!_a(n))
    return !1;
  var i = typeof t;
  return (i == "number" ? Ay(n) && Cy(t, n.length) : i == "string" && t in n) ? Ey(n[t], e) : !1;
}
var RT = Object.prototype;
function FT(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || RT;
  return e === n;
}
function $T(e, t) {
  for (var n = -1, i = Array(e); ++n < e; )
    i[n] = t(n);
  return i;
}
var BT = "[object Arguments]";
function Cd(e) {
  return Zu(e) && Qu(e) == BT;
}
var Oy = Object.prototype, jT = Oy.hasOwnProperty, qT = Oy.propertyIsEnumerable, UT = Cd(/* @__PURE__ */ function() {
  return arguments;
}()) ? Cd : function(e) {
  return Zu(e) && jT.call(e, "callee") && !qT.call(e, "callee");
};
function WT() {
  return !1;
}
var Py = typeof exports == "object" && exports && !exports.nodeType && exports, Ed = Py && typeof module == "object" && module && !module.nodeType && module, zT = Ed && Ed.exports === Py, Td = zT ? Ju.Buffer : void 0, VT = Td ? Td.isBuffer : void 0, GT = VT || WT, HT = "[object Arguments]", KT = "[object Array]", YT = "[object Boolean]", XT = "[object Date]", JT = "[object Error]", QT = "[object Function]", ZT = "[object Map]", e2 = "[object Number]", t2 = "[object Object]", n2 = "[object RegExp]", i2 = "[object Set]", s2 = "[object String]", r2 = "[object WeakMap]", o2 = "[object ArrayBuffer]", a2 = "[object DataView]", l2 = "[object Float32Array]", c2 = "[object Float64Array]", u2 = "[object Int8Array]", f2 = "[object Int16Array]", h2 = "[object Int32Array]", d2 = "[object Uint8Array]", p2 = "[object Uint8ClampedArray]", g2 = "[object Uint16Array]", m2 = "[object Uint32Array]", Ie = {};
Ie[l2] = Ie[c2] = Ie[u2] = Ie[f2] = Ie[h2] = Ie[d2] = Ie[p2] = Ie[g2] = Ie[m2] = !0;
Ie[HT] = Ie[KT] = Ie[o2] = Ie[YT] = Ie[a2] = Ie[XT] = Ie[JT] = Ie[QT] = Ie[ZT] = Ie[e2] = Ie[t2] = Ie[n2] = Ie[i2] = Ie[s2] = Ie[r2] = !1;
function y2(e) {
  return Zu(e) && Ty(e.length) && !!Ie[Qu(e)];
}
function b2(e) {
  return function(t) {
    return e(t);
  };
}
var Ny = typeof exports == "object" && exports && !exports.nodeType && exports, Gs = Ny && typeof module == "object" && module && !module.nodeType && module, w2 = Gs && Gs.exports === Ny, Za = w2 && _y.process, Ad = function() {
  try {
    var e = Gs && Gs.require && Gs.require("util").types;
    return e || Za && Za.binding && Za.binding("util");
  } catch {
  }
}(), Od = Ad && Ad.isTypedArray, v2 = Od ? b2(Od) : y2;
function _2(e, t) {
  var n = iT(e), i = !n && UT(e), s = !n && !i && GT(e), r = !n && !i && !s && v2(e), o = n || i || s || r, a = o ? $T(e.length, String) : [], l = a.length;
  for (var u in e)
    o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    r && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Cy(u, l)) || a.push(u);
  return a;
}
function x2(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var S2 = Object.prototype, k2 = S2.hasOwnProperty;
function C2(e) {
  if (!_a(e))
    return x2(e);
  var t = FT(e), n = [];
  for (var i in e)
    i == "constructor" && (t || !k2.call(e, i)) || n.push(i);
  return n;
}
function E2(e) {
  return Ay(e) ? _2(e) : C2(e);
}
var Iy = Object.prototype, T2 = Iy.hasOwnProperty, Ds = MT(function(e, t) {
  e = Object(e);
  var n = -1, i = t.length, s = i > 2 ? t[2] : void 0;
  for (s && DT(t[0], t[1], s) && (i = 1); ++n < i; )
    for (var r = t[n], o = E2(r), a = -1, l = o.length; ++a < l; ) {
      var u = o[a], c = e[u];
      (c === void 0 || Ey(c, Iy[u]) && !T2.call(e, u)) && (e[u] = r[u]);
    }
  return e;
});
function My(e, t, n, i) {
  Object.keys(t).forEach((s) => {
    var r, o;
    s in e && ((r = t[s]) != null && r.min && X(e[s]) < X(t[s].min) ? n.push({
      index: i,
      message: `${s.charAt(0).toUpperCase() + s.slice(1)} cannot be less than ${t[s].min}.`,
      fields: [s]
    }) : (o = t[s]) != null && o.max && X(e[s]) > X(t[s].max) && n.push({
      index: i,
      message: `${s.charAt(0).toUpperCase() + s.slice(1)} cannot be greater than ${t[s].max}.`,
      fields: [s]
    }));
  });
}
class Zl {
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
    const i = X(this.x);
    return t.rot ? n = t.l - X(this.y) + ("x" in t ? X(t.x) : 0) : n = i + ("x" in t ? X(t.x) : 0), n;
  }
  getYDrawPosition(t, n, i) {
    let s = t.rot ? X(this.x) : X(this.y);
    return s += "y" in t ? X(t.y) : 0, n === 1 && (i ? s = X(i.w) - s : s = X(t.w) - s), s;
  }
  shouldShow(t, n) {
    return this.side === n || this.isThroughShape(t) === !0;
  }
  isThroughShape(t) {
    return !this.depth || X(this.depth) >= X(t.t);
  }
  getDistanceToEdge(t) {
    const n = this.x, i = this.y, s = this.diameter / 2, r = X(t.getLongSide()), o = X(t.getShortSide()), a = t.machining.corners.map((p) => p.type ? p.size : 0), l = [
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
    ], u = t.machining.corners.map((p, g) => {
      const v = g === 0 || g === 3, w = g < 2, k = v ? n : r - n;
      let b = null;
      this.side === 0 ? b = w ? i : o - i : this.side === 1 && (b = w ? o - i : i);
      const C = Math.sqrt(k * k + b * b);
      return {
        c: p,
        distance: C
      };
    }), c = Math.min(...l.map((p) => p.distance)), f = Math.min(...u.map((p) => p.distance)), h = u.findIndex((p) => p.distance === f), d = t.machining.corners[h];
    if (d && d.type === "radius") {
      let p = h === 0 || h === 3 ? 0 : r, g = h < 2 ? 0 : o;
      const v = h < 2;
      p += h === 0 || h === 3 ? a[h] : -a[h], g += v ? a[h] : -a[h];
      const k = n - p, b = h < 2;
      let C;
      this.side === 0 ? C = b ? i : o - i : this.side === 1 && (C = b ? o - i : i);
      const T = C - g, M = Math.sqrt(k * k + T * T), P = a[h] - M - s;
      let D = !1;
      return d.index === 0 ? D = n <= p && C <= g : d.index === 1 ? D = n >= p && C <= g : d.index === 2 ? D = n >= p && C >= g : d.index === 3 && (D = n <= p && C >= g), D && P < c ? P : c;
    } else if (d && d.type === "bevel") {
      let p, g, v;
      d.index === 0 ? (p = 1, g = 1, v = -d.size) : d.index === 1 ? (p = 1, g = -1, v = -r + d.size) : d.index === 2 ? (p = 1, g = 1, v = -r - o + d.size) : d.index === 3 && (p = -1, g = 1, v = -o + d.size);
      const w = d.index === 0 ? 1 : -1, k = (p * n + g * i + v) / Math.sqrt(p * p + g * g) * w - s;
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
    return X(this.diameter) <= 0 && s.push({
      index: n,
      message: "Diameter cannot be negative or zero.",
      fields: ["diameter"]
    }), X(this.depth) < 0 && s.push({
      index: n,
      message: "Depth cannot be negative.",
      fields: ["depth"]
    }), "t" in t && X(t.t) > 0 && X(this.depth) > X(t.t) && s.push({
      index: n,
      message: "Depth cannot be greater than part thickness.",
      fields: ["depth"]
    }), (!("t" in t) || !t.t) && X(this.depth) > 0 && s.push({
      index: n,
      message: "Part thickness is not defined.",
      fields: ["depth"]
    }), this.getDistanceToEdge(t) < 0 && s.push({
      index: n,
      message: "Outside of part."
    }), i && My(this, i, s, n), s.length ? this.valid = !1 : this.valid = !0, s;
  }
}
class Pd {
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
    const t = X(this.hingeLength) - X(this.outerSpacing) * 2, n = this.numHoles - 1;
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
        i = t.getLongSide() - X(this.distanceFromEdge);
        break;
      case "y1":
      case "y2":
        i = X(this.position) + X(this.outerSpacing) + s * n;
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
        i = X(this.position) + X(this.outerSpacing) + s * n;
        break;
      case "y1":
        i = X(this.distanceFromEdge);
        break;
      case "y2":
        i = t.getShortSide() - X(this.distanceFromEdge);
        break;
    }
    return i;
  }
  createHoles(t) {
    this.holes = [];
    for (let n = 0; n < this.numHoles; n++) {
      const i = new Zl({
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
    }), i && My(this, i, s, n), s.length ? this.valid = !1 : this.valid = !0, s;
  }
}
class Nd {
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
      t.banding[r] = !1, t.bandingType[r] = "";
    }
    return this.type && X(this.size) <= 0 && s.push({
      index: n,
      message: "Corner size cannot be zero or negative"
    }), this.type && X(this.size) > i / 2 && (this.size = i / 2), s.length ? this.valid = !1 : this.valid = !0, s;
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
let Ly = class {
  //shelfHoles?: ShelfHoles[] = [];
  constructor({
    holes: t = [],
    hingeHoles: n = [],
    corners: i = []
  } = {}) {
    m(this, "holes", []);
    m(this, "corners", []);
    m(this, "hingeHoles", []);
    i && i.length === 4 ? this.corners = i.map((s) => new Nd(s)) : [0, 1, 2, 3].forEach((s) => {
      this.corners.push(new Nd({
        type: null,
        size: null,
        index: s
      }));
    }), t && (this.holes = t.map((s) => new Zl(s))), n && (this.hingeHoles = n.map((s) => new Pd(s)));
  }
  validateEverything(t) {
    const n = this.validate(t, "holes"), i = this.validate(t, "hingeHoles"), s = this.validate(t, "corners");
    t.issues.push(...n.map((r) => pn(t) ? `Part ${t.id} hole issue: ${r.message}` : `Hole issue: ${r.message}`)), t.issues.push(...i.map((r) => pn(t) ? `Part ${t.id} hinge hole issue: ${r.message}` : `Hinge hole issue: ${r.message}`)), t.issues.push(...s.map((r) => pn(t) ? `Part ${t.id} corner issue: ${r.message}` : `Corner issue: ${r.message}`));
  }
  validate(t, n, i = null) {
    if (!t) return [];
    if (!n) return [];
    console.log(`running machining validation for ${n}`);
    const s = [];
    return s.push(...this.validateAll(t, n, i)), s;
  }
  validateAll(t, n, i = null) {
    if (!t) return [];
    const s = [];
    return this[n].forEach((r, o) => s.push(...r.validate(t, o, i))), s;
  }
  createHole(t, n, i, s = 0, r = 0) {
    const o = new Zl({
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
    const f = new Pd({
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
function A2(e) {
  var t, n, i, s, r, o, a, l;
  return e.machining ? (n = (t = e.machining) == null ? void 0 : t.holes) != null && n.length || (s = (i = e.machining) == null ? void 0 : i.hingeHoles) != null && s.length ? !0 : (o = (r = e.machining) == null ? void 0 : r.corners) != null && o.length ? (l = (a = e.machining) == null ? void 0 : a.corners) == null ? void 0 : l.some((u) => u.type && u.size) : !1 : !1;
}
class O2 {
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
    if (pn(i)) {
      if (!(this != null && this.shapes) || ((o = this.shapes) == null ? void 0 : o.length) < 2)
        return this.issues.push("Must have 2 or more parts."), this.issues;
    } else if (!(this != null && this.shapeListIds) || ((a = this.shapeListIds) == null ? void 0 : a.length) < 2)
      return this.issues.push("Must have 2 or more parts."), this.issues;
    if (n.forEach((l, u) => {
      !l.isSquare() && !["l", "w"].includes(l.orientationLock) && this.issues.push(`Part in position ${u + 1} must have orientation lock set to be part of a group.`);
    }), this.issues.length) return this.issues;
    const s = Ai(this.direction), r = i.getTrimmedDimensions(!0)[s];
    return n.forEach((l, u) => {
      if (l.id === i.id) return;
      const c = l.getTrimmedDimensions(!0)[s];
      Se.equalTo(c, r) || this.issues.push(`Part in position ${u + 1} final ${s === "l" ? "length" : "width"} is not correct for the group. Expected ${r} and is ${c}. Check the dimensions, trim & orientation lock.`);
    }), this.issues;
  }
  findShapes(t = []) {
    var i, s;
    if (!t.length) return [];
    let n = [];
    if (Ni(t[0])) {
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
    if (!pn(i[0]))
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
      u = new ai(c);
    } catch (c) {
      return console.error(c), !1;
    }
    return u.parentID = `ug${t}`, s && u.updateShapeSpacing(s), u;
  }
}
const Dy = {
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
  x1: "w1",
  x2: "w2",
  y1: "l1",
  y2: "l2",
  all: "all"
};
function Pi(e) {
  if (!$(e) || typeof e != "object") return {};
  e = { ...e };
  for (const [t, n] of Object.entries(e))
    t !== "_id" && t.startsWith("_") && (e[t.substring(1)] = n, delete e[t]);
  return e;
}
function P2(e, t = null) {
  return e.map((n) => {
    var i;
    return delete n.id, t ? n.units = t : n.units || (n.units = ((i = this == null ? void 0 : this.optionsStore) == null ? void 0 : i.units) ?? "decimal"), new Fo(n);
  });
}
function N2({
  stockList: e,
  removeScores: t = !1,
  saw: n = null,
  preventAutoRotation: i = !1,
  preventGrainRotation: s = !1
}) {
  return !e || !(e != null && e.length) ? [] : e.map((r) => {
    n && (r.saw = n), i && (r.preventAutoRotation = !0), s && (r.preventGrainRotation = !0);
    const o = new oi(r);
    if (o.issues.length)
      throw new Error(
        `Issues found when attempting to recreate stock list - ${o.issues.join()}`,
        { cause: o.issues }
      );
    return t && delete o.algoBenchmark, o;
  }).sort(To.ID);
}
function I2({
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
    if (j2(i) && ((o = i == null ? void 0 : i.shapes) != null && o.length)) {
      i.shapes = i.shapes.map((a) => new bn(a));
      try {
        s = new ai(i);
      } catch {
        throw new Error("error creating group from shape data");
      }
    } else
      s = new bn(i);
    if (s.issues.length)
      throw new Error(`Issues found when attempting to recreate shape list - ${s.issues.join()}`);
    const r = t.find((a) => {
      var l;
      return a.id === (((l = i == null ? void 0 : i.stock) == null ? void 0 : l.id) ?? (i == null ? void 0 : i.stockId));
    });
    return s.stock = r, s;
  }).sort(To.ID);
}
function M2({
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
function L2({
  segmentList: e,
  stockList: t
}) {
  return !e || !(e != null && e.length) ? [] : e.map((n) => {
    const i = t.find((r) => {
      var o;
      return r.id === (((o = n == null ? void 0 : n.stock) == null ? void 0 : o.id) ?? (n == null ? void 0 : n.stockId));
    });
    return n.stock = i, new $y(n);
  });
}
function Ry(e = null, t = null, n = null) {
  if (!e) throw new Error("no container supplied to willItFit");
  if (!t) throw new Error("no shape supplied to willItFit");
  const i = t.rot;
  function s(h = !1, d = "l") {
    var p, g;
    return Se.equalTo(
      t[h ? Ai(d) : d],
      e[d]
    ) || Se.lessThanOrEqualTo(t[h ? Ai(d) : d], e[d] - (tc(e) ? (g = (p = e == null ? void 0 : e.saw) == null ? void 0 : p.options) == null ? void 0 : g.minSpacing : 0));
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
function Ro(e, t, n = "decimal", i = !1) {
  return $(e == null ? void 0 : e[t]) ? X(e[t], n, !1, i) : null;
}
class Fy {
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
    t = Pi(t), $(t.units) || console.warn("Attempting to create InputStock without units"), this.units = t.units, this.readonly = t.readonly, this.id = t.id, this.listId = t != null && t.listId ? t.listId : Date.now().toString() + Am(), ["l", "w", "t"].forEach((a) => {
      this[a] = Ro(t, a, this.units, n);
    }), this.q = $(t.q) ? typeof t.q == "string" ? parseInt(t.q) : t.q : null, this.autoAdd = $(t.autoAdd) ? t.autoAdd : !1, this.name = $(t.name) ? bs(t.name).toUpperCase() : "", this.material = $(t.material) ? t.material.trim().toUpperCase() : "";
    const s = ["x1", "x2", "y1", "y2"];
    this.trim = {
      x1: null,
      x2: null,
      y1: null,
      y2: null
    }, s.forEach((a) => {
      this.trim[a] = Ro(t.trim, a, this.units, n);
    }), this.cost = $(t.cost) ? t.cost : null, this.grain = $(t.grain) ? (r = t == null ? void 0 : t.grain) == null ? void 0 : r.toLowerCase() : "", this.multiEdit = t.multiEdit, this.type = t.type, this.preventGrainRotation = !0, this.notes = t != null && t.notes ? (o = t.notes) == null ? void 0 : o.replace(/,/g, "") : "";
  }
  //change the units of the stock
  changeUnits(t, n, i) {
    if (!(t === "decimal" || t === "fraction")) return;
    this.units = t;
    function s(o) {
      return o ? X(o, t, !1, !1, i) : null;
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
    this.warnings = [], ["q"].forEach((t) => this.warnings.push(...rt[t](this[t])));
  }
  validate() {
    return this.issues = [], ["l", "w", "t"].forEach((t) => this.issues.push(...rt[t](this[t]))), this.issues.push(...rt.trim(this)), this.getWarnings(), this.issues;
  }
}
class Fo {
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
    m(this, "trim", {
      x1: 0,
      x2: 0,
      y1: 0,
      y2: 0
    });
    m(this, "cost");
    m(this, "banding", {
      a: !1,
      b: !1,
      c: !1,
      d: !1,
      x1: !1,
      x2: !1,
      y1: !1,
      y2: !1
    });
    m(this, "bandingType", {
      a: "",
      b: "",
      c: "",
      d: "",
      x1: "",
      x2: "",
      y1: "",
      y2: ""
    });
    m(this, "bandingOptions");
    m(this, "orientationLock");
    m(this, "selectedMaterial");
    m(this, "selected");
    //used for multiple editing
    m(this, "multiEdit", !1);
    m(this, "machining");
    m(this, "issues", []);
    m(this, "warnings", []);
    m(this, "notes", "");
    m(this, "stockLock");
    m(this, "stockMatch");
    m(this, "customData");
    var a;
    t = t = Pi(t), this.units = t.units, this.readonly = t.readonly, this.id = t.id, this.listId = t != null && t.listId ? t.listId : Date.now().toString() + Am(), ["l", "w", "t"].forEach((l) => {
      this[l] = Ro(t, l, this.units, n);
    }), this.q = $(t == null ? void 0 : t.q) ? typeof t.q == "string" ? parseInt(t.q) : t.q : null, this.name = $(t.name) ? bs(t.name).toUpperCase() : "", this.material = $(t.material) ? t.material.trim().toUpperCase() : "";
    const s = ["x1", "x2", "y1", "y2"];
    this.trim = {
      x1: null,
      x2: null,
      y1: null,
      y2: null
    }, s.forEach((l) => {
      this.trim[l] = Ro(t.trim, l, this.units, n);
    });
    const r = ["a", "b", "c", "d", "x1", "x2", "y1", "y2", "all"];
    this.bandingOptions = {
      a: {},
      b: {},
      c: {},
      d: {},
      x1: {},
      x2: {},
      y1: {},
      y2: {},
      all: {}
    }, r.forEach((l) => {
      var u;
      this.bandingOptions[l] = $((u = t == null ? void 0 : t.bandingOptions) == null ? void 0 : u[l]) ? t.bandingOptions[l] : {};
    });
    const o = ["a", "b", "c", "d", "x1", "x2", "y1", "y2"];
    this.banding = {
      a: !1,
      b: !1,
      c: !1,
      d: !1,
      x1: !1,
      x2: !1,
      y1: !1,
      y2: !1
    }, o.forEach((l) => {
      var u;
      this.banding[l] = $((u = t == null ? void 0 : t.banding) == null ? void 0 : u[l]) ? t.banding[l] : !1;
    }), this.bandingType = {
      a: "",
      b: "",
      c: "",
      d: "",
      x1: "",
      x2: "",
      y1: "",
      y2: ""
    }, o.forEach((l) => {
      var u;
      this.bandingType[l] = $((u = t == null ? void 0 : t.bandingType) == null ? void 0 : u[l]) ? t.bandingType[l] : "";
    }), this.orientationLock = $(t.orientationLock) ? t.orientationLock.toLowerCase() : "", this.selected = !1, this.multiEdit = t.multiEdit, this.machining = new Ly(t.machining ?? {
      holes: [],
      corners: []
    }), this.notes = t != null && t.notes ? (a = t.notes) == null ? void 0 : a.replace(/,/g, "") : "", this.stockLock = (t == null ? void 0 : t.stockLock) ?? [], this.customData = (t == null ? void 0 : t.customData) ?? {};
  }
  /**
   * change the units of the shape
   * @param {String} newUnits
   */
  changeUnits(t, n, i) {
    if (!(t === "decimal" || t === "fraction")) return;
    this.units = t;
    function s(o) {
      return o ? X(o, t, !1, !1, i) : null;
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
  createId(t, n = 0) {
    this.id = `${t + 1}.${n}`;
  }
  getLongSide() {
    return X(this.l) > X(this.w) ? X(this.l) : X(this.w);
  }
  getShortSide() {
    return X(this.l) < X(this.w) ? X(this.l) : X(this.w);
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
    let n = { l: X(this.l), w: X(this.w) };
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
      if (t = X(t), this.trim) {
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
      this.issues.push(...rt[r](this[r]));
    }), i = X(i), this.issues.push(...rt.partTrim(this, i)), this.issues.push(...rt.trim(this)), rt.machining(this), this.getWarnings(t, n, i, s), this.issues;
  }
  getWarnings(t, n, i = 0, s = !1) {
    this.warnings = [], ["q"].forEach((r) => {
      this.warnings.push(...rt[r](this[r]));
    }), t.length && !s && this.warnings.push(...rt.stockMatch(this, t, n, i));
  }
  convertBandingOptionsToBanding() {
    for (const t in this.bandingOptions) {
      if (t === "all") continue;
      const n = Object.values(this.bandingOptions[t]);
      if (n.some((i) => i) && (n.every((i) => i) || this.issues.push("If using banding, all options must be set.")), n.length === 1 && typeof n[0] == "boolean") {
        const i = Object.keys(this.bandingOptions[t])[0];
        i && n[0] === !0 ? (this.banding[t] = !0, this.bandingType[t] = i) : (this.banding[t] = !1, this.bandingType[t] = "");
      } else {
        const i = n.filter((s) => s).map((s) => s.toString().trim().replace("|", "_"));
        if (!i.length) {
          this.banding[t] = !1, this.bandingType[t] = "";
          continue;
        }
        this.banding[t] = !0, this.bandingType[t] = i.join("|");
      }
    }
  }
  removeBandingApartFromBandingOptions() {
    const t = ["a", "b", "c", "d", "x1", "x2", "y1", "y2"];
    for (const n of t)
      this.banding[n] = !1, this.bandingType[n] = "";
  }
  setAllBandingOptions(t, n, i = ["x1", "x2", "y1", "y2"]) {
    for (const s of i)
      $(n) ? (this.banding[s] = !0, this.bandingOptions[s][t] = n) : (this.banding[s] = !1, this.bandingOptions[s][t] = "");
  }
  removeBanding() {
    const t = ["a", "b", "c", "d", "x1", "x2", "y1", "y2", "all"];
    for (const n of t)
      this.bandingOptions[n] = {}, n !== "all" && (this.banding[n] = !1, this.bandingType[n] = "");
  }
}
class wr {
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
    m(this, "_trim");
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
    m(this, "customData");
    this.initRectangle(t);
  }
  validateRectangle(t) {
    Pn(this) || ["x", "y", "l", "w", "t"].forEach((n) => {
      this.createIssues(rt[n](t[n]));
    }), _i(this) && "q" in t && this.createIssues(rt.q((t == null ? void 0 : t.q) ?? 0, t.autoAdd)), "q" in t && this.isShape() && !this.isGroup() && !this.isUserGroup() && this.createIssues(rt.q((t == null ? void 0 : t.q) ?? 0)), "customData" in t && this.createIssues(rt.customData((t == null ? void 0 : t.customData) ?? {}));
  }
  initRectangle(t, n = !1) {
    var s, r, o;
    if (!n) {
      if (this.validateRectangle(t), this.issues.length) return;
      this.id = $(t.id) ? t.id.toString() : this.id || null, this.setParentID(), $(t == null ? void 0 : t.q) ? typeof t.q == "string" ? this.q = parseInt(t.q) : this.q = t.q : this.q = 0, this.name = $(t.name) && ((s = t == null ? void 0 : t.name) != null && s.length) ? (r = du(bs(t == null ? void 0 : t.name))) == null ? void 0 : r.toUpperCase() : null, $(t == null ? void 0 : t.cost) ? typeof t.cost == "string" ? this.cost = parseFloat(t.cost) : typeof t.cost == "number" && (this.cost = t.cost) : this.cost = 0, this.material = $(t.material) ? t.material.trim().toLowerCase() : null, this.duplicate = $(t == null ? void 0 : t.duplicate) ? t.duplicate : !1, this.grain = typeof t.grain < "u" && $(t == null ? void 0 : t.grain) ? t.grain.toLowerCase() : null;
      try {
        this.trim = t == null ? void 0 : t.trim;
      } catch (a) {
        if ((o = a == null ? void 0 : a.cause) != null && o.issues) this.issues.push(...a.cause.issues);
        else throw new Error("error when attempting to set trim");
      }
      this.trimmed = $(t == null ? void 0 : t.trimmed) ? t.trimmed : !1, this.offcut = $(t == null ? void 0 : t.offcut) ? t.offcut : !1, this.notes = typeof (t == null ? void 0 : t.notes) == "string" && t.notes.length ? t.notes.replace(/,/g, "").substring(0, 200) : "", this.customData = (t == null ? void 0 : t.customData) ?? {};
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
      typeof l == "string" && (l = X(l)), this[a.key] = l;
    }), !(t != null && t.preventAutoRotation) && !t.trimmed && this.w > this.l && ([this.l, this.w] = [this.w, this.l], this.grain && !(t != null && t.preventGrainRotation) && (this.grain = Ai(this.grain))), $(t == null ? void 0 : t.stock) && (_i(t.stock) ? this.stock = t.stock : this.stock = new oi(t.stock), this.stockId = this.stock.id);
  }
  updateRectangle(t) {
    t.preventAutoRotation = !0, this.initRectangle(t, !0);
  }
  set trim(t) {
    this._trim = {
      x1: 0,
      x2: 0,
      y1: 0,
      y2: 0
    }, $(t) && Object.keys(t).forEach((n) => {
      let i;
      if (typeof t[n] == "string") {
        const s = X(t[n]);
        isNaN(s) || s < 0 ? (this.issues.push(this.createIssue(`${t[n] ?? "N/A"} is not a valid value for trim: ${n}`)), i = 0) : i = s;
      } else
        i = t[n];
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
      w: this.w
      // t: this.t
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
        return new Ms({
          x1: this.x,
          x2: this.x + this.l,
          y1: this.y,
          y2: this.y,
          type: "bottom"
          // parentID: this.id
        });
      case "right":
        return new Ms({
          x1: this.x + this.l,
          x2: this.x + this.l,
          y1: this.y,
          y2: this.y + this.w,
          type: "right"
          // parentID: this.id
        });
      case "top":
        return new Ms({
          x1: this.x,
          x2: this.x + this.l,
          y1: this.y + this.w,
          y2: this.y + this.w,
          type: "top"
          // parentID: this.id
        });
      case "left":
        return new Ms({
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
    const i = new ze(this.x + this.l, this.y);
    i.corner = "bottomRight";
    const s = new ze(this.x, this.y + this.w);
    if (s.corner = "topLeft", (t == null ? void 0 : t.cutType) !== "efficiency" && !n)
      return [s, i];
    const r = new ze(this.x, this.y);
    r.corner = "bottomLeft";
    const o = new ze(this.x + this.l, this.y + this.w);
    return o.corner = "topRight", [r, s, o, i];
  }
  getCorners() {
    return {
      bottomLeft: new ze(this.x, this.y),
      topLeft: new ze(this.x, this.y + this.w),
      topRight: new ze(this.x + this.l, this.y + this.w),
      bottomRight: new ze(this.x + this.l, this.y)
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
    if (Pn(this)) {
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
    if (!t) return !1;
    let n = this.x - t, i = this.y - t, s = this.l + t * 2, r = this.w + t * 2;
    return n < 0 && (s += n, n = 0), i < 0 && (r += i, i = 0), s = Math.max(0, s), r = Math.max(0, r), new wr({
      name: "proximity",
      x: n,
      y: i,
      l: s,
      w: r,
      preventAutoRotation: !0
    });
  }
  isShape() {
    return pn(this);
  }
  isSegment() {
    return U2(this);
  }
  isStock() {
    return _i(this);
  }
  isGroup() {
    return Pn(this);
  }
  isUserGroup() {
    return tf(this);
  }
}
class ef extends wr {
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
    if ($(n) || (this.saw = new Qn(null)), $(n == null ? void 0 : n.saw)) {
      if (!((s = n == null ? void 0 : n.saw) != null && s.cutType)) {
        const { cutType: a, cutPreference: l } = ec(n.saw.cutPreference);
        n.saw.cutType = a, n.saw.cutPreference = l;
      }
    } else {
      n.saw = {};
      const { cutType: a, cutPreference: l } = ec(n.cutPreference);
      n.saw.cutType = a, n.saw.cutPreference = l, $(n == null ? void 0 : n.bladeWidth) && (n.saw.bladeWidth = n.bladeWidth), $((i = n == null ? void 0 : n.blade) == null ? void 0 : i.width) && (n.saw.bladeWidth = n.blade.width), $(n == null ? void 0 : n.efficiencyOptions) && (n.saw.efficiencyOptions = n.efficiencyOptions), $(n == null ? void 0 : n.guillotineOptions) && (n.saw.guillotineOptions = n.guillotineOptions), $(n == null ? void 0 : n.stackHeight) && (n.saw.stackHeight = n.stackHeight);
    }
    try {
      $(n == null ? void 0 : n.saw) && (W2(n.saw) ? this.saw = n.saw : this.saw = new Qn(n.saw, this.type)), (o = (r = this.saw) == null ? void 0 : r.issues) != null && o.length && this.issues.push(...this.saw.issues);
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
    return _i(this) ? this : this != null && this.stock ? this.stock : null;
  }
}
function ec(e) {
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
      t = "efficiency", n = null;
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
class Qn {
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
    switch (t = Pi(t), this.options = Ds({}, t == null ? void 0 : t.options, {
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
        ["l", "w", "flex"].includes(this.cutPreference) || this.issues.push(`Saw cut preference: ${this.cutPreference} not valid for cut type: ${this.cutType}`), this.cutType === "guillotine" && this.cutPreference === "l" && this.stockType === "roll" && this.issues.push(`Cut preference: ${this.cutPreference} not valid for cut type: ${this.cutType} and stock type: ${this.stockType}`), this.options.minSpacing = 0;
        break;
      case "beam":
        ["l", null, void 0].includes(this.cutPreference) || this.issues.push(`Saw cut preference: ${this.cutPreference} not valid for cut type: ${this.cutType}`), this.options.minSpacing = 0;
        break;
      default:
        ["none", null, void 0].includes(this.cutPreference) || this.issues.push(`Saw cut preference: ${this.cutPreference} not valid for cut type: ${this.cutType}`);
        break;
    }
    switch ($(t == null ? void 0 : t.bladeWidth) ? typeof t.bladeWidth == "string" ? this.bladeWidth = X(t.bladeWidth) : this.bladeWidth = t.bladeWidth : this.bladeWidth = 0, (isNaN(this.bladeWidth) || this.bladeWidth < 0) && (this.issues.push(`Blade width: ${this.bladeWidth ?? "N/A"} is not valid`), this.bladeWidth = 0), this.stockType) {
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
        this.efficiencyOptions = Ds({}, t == null ? void 0 : t.efficiencyOptions, { primaryCompression: "y" });
        break;
      case "guillotine":
        this.guillotineOptions = Ds({}, t == null ? void 0 : t.guillotineOptions, { strategy: "efficiency", maxPhase: null });
        break;
      case "beam":
        this.guillotineOptions = Ds({}, t == null ? void 0 : t.guillotineOptions, { strategy: "efficiency", maxPhase: null }), this.cutPreference = "l", [null, void 0].includes(this.stackHeight) && this.issues.push("Beam saws require a stack height to be set");
        break;
    }
  }
  clone() {
    const t = structuredClone(this);
    return new Qn(t);
  }
}
class oi extends ef {
  constructor(n) {
    n = Pi(n), n.preventAutoRotation = (n == null ? void 0 : n.type) === "roll", n.autoAdd && !n.q && (n.q = 1);
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
  validateStock(n) {
    ["grain"].forEach((i) => {
      this.createIssues(rt[i](n[i]));
    }), this.createIssues(rt.trim(this));
  }
  /**
   * compress for saving / transfer
   */
  save() {
    var n;
    delete this.tidy, delete this.score, delete this.rootSegment, delete this.shapes, this == null || delete this.algoBenchmark, this.stack = typeof this.stack == "number" || this.stack === !1 ? this.stack : (n = this.stack) == null ? void 0 : n.id, !this.trim.x1 && !this.trim.x2 && !this.trim.y1 && !this.trim.y2 && (this.trim = null);
  }
  resetStrategies() {
    this.algoBenchmark = null;
  }
  isIdentical(n) {
    let i = !1, s = !1, r = !1, o = !1;
    if (this.material === n.material && (i = !0), this.t === n.t && (s = !0), this.l === n.l && (r = !0), this.w === n.w && (o = !0), i && s && r && o) return !0;
  }
  clone(n = null) {
    const i = this.id.split(".");
    n ? i.pop() : (n = parseInt(i.pop()), n++), i.push(n.toString());
    const s = i.join("."), r = structuredClone(this);
    return r.id = s, r.used = !1, r.duplicate = !0, r.stack = !1, r.saw = this.saw, new oi(r);
  }
}
class D2 extends wr {
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
function R2({
  offcuts: e,
  stockList: t,
  preventAutoRotation: n = !0
}) {
  return !e || !(e != null && e.length) ? [] : e.map((i) => {
    const s = t.find((o) => {
      var a;
      return o.id === (((a = i == null ? void 0 : i.stock) == null ? void 0 : a.id) ?? (i == null ? void 0 : i.stockId));
    });
    return i.stock = s, n && (i.preventAutoRotation = !0), new D2(i);
  });
}
class bn extends wr {
  constructor(n) {
    n = Pi(n);
    super(n);
    m(this, "added");
    m(this, "guillotineData");
    m(this, "_banding");
    m(this, "_bandingType");
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
    m(this, "machining");
    m(this, "weighting");
    m(this, "minSpacing");
    m(this, "priority");
    this.initShape(n);
  }
  initGuillotineData(n) {
    var i, s, r, o, a, l, u, c;
    this.guillotineData = Ds({}, n == null ? void 0 : n.guillotineData, {
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
    return (n = this.guillotineData) != null && n.myStripParent && (pn(this.guillotineData.myStripParent) || Pn(this.guillotineData.myStripParent)) && (this.guillotineData.myStripParent = this.guillotineData.myStripParent.compress()), structuredClone(this.guillotineData);
  }
  initShape(n, i = !1) {
    var s;
    if (!i) {
      if (this.validateShape(n), this.issues.length) throw new Error(this.issues.join(`
`));
      n.orientationLock = (s = n == null ? void 0 : n.orientationLock) == null ? void 0 : s.toLowerCase(), (n == null ? void 0 : n.orientationLock) === " " && (n.orientationLock = ""), this.orientationLock = $(n == null ? void 0 : n.orientationLock) && this.l !== this.w ? n.orientationLock : null, this.banding = n == null ? void 0 : n.banding, this.bandingType = n == null ? void 0 : n.bandingType, $(n == null ? void 0 : n.stockLock) ? Array.isArray(n == null ? void 0 : n.stockLock) && (this.stockLock = n.stockLock.map((r) => r.toString())) : this.stockLock = [], this.weighting = {}, this.machining = $(n == null ? void 0 : n.machining) ? new Ly(n.machining) : null;
    }
    this.added = $(n == null ? void 0 : n.added) ? n.added : !1, this.initGuillotineData(n), this.inGroup = $(n == null ? void 0 : n.inGroup) ? n.inGroup : this.inGroup || !1, this.inUserGroup = $(n == null ? void 0 : n.inUserGroup) ? n.inUserGroup : this.inUserGroup || !1, this.groupID = $(n == null ? void 0 : n.groupID) ? n.groupID : this.groupID || null, this.addedAsGroup = $(n == null ? void 0 : n.addedAsGroup) ? n.addedAsGroup : this.addedAsGroup || !1, this.score = $(n == null ? void 0 : n.score) ? n.score : this.score || null, this.bestScore = $(n == null ? void 0 : n.bestScore) ? n.bestScore : this.bestScore || {
      x: 0,
      y: 0,
      rot: null,
      total: null,
      group: null
    }, this.placementOrder = $(n == null ? void 0 : n.placementOrder) ? n.placementOrder : this.placementOrder || null, this.groupPlacementOrder = $(n == null ? void 0 : n.groupPlacementOrder) ? n.groupPlacementOrder : this.groupPlacementOrder || null, this.minSpacing = (n == null ? void 0 : n.minSpacing) ?? (this.minSpacing || 0), this.priority = (n == null ? void 0 : n.priority) ?? {};
  }
  getCopyNumber() {
    return parseInt(this.id.split(".").pop());
  }
  getMinSpacing(n, i = !1) {
    var o, a;
    if (!n) throw new Error("container not provided to getMinSpacing");
    let s = (this == null ? void 0 : this.minSpacing) || ((a = (o = n.saw) == null ? void 0 : o.options) == null ? void 0 : a.minSpacing) || 0;
    const r = n.getBladeWidth();
    return r > s && (s = r), i && (s -= r), s < 0 && (s = 0), s;
  }
  validateShape(n) {
    ["orientationLock", "banding"].forEach((i) => {
      this.createIssues(rt[i](n[i]));
    }), this.machining && this.machining.validateEverything(this);
  }
  //individual shape weighting
  calculateWeighting() {
  }
  update(n) {
    n = Pi(n), this.initShape(n, !0), this.updateRectangle(n);
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
    }, $(n) && Object.keys(n).forEach((i) => this._banding[i] = $(n == null ? void 0 : n[i]) ? n[i] : !1);
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
    }, !!$(n)) {
      Object.keys(n).forEach((i) => this._bandingType[i] = $(n[i]) ? du(bs(n[i])) : "");
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
  save() {
    var n, i, s, r, o, a, l, u, c, f, h;
    delete this.group, (n = this == null ? void 0 : this.guillotineData) == null || delete n.stripShapeBatches, this.stockId = (i = this == null ? void 0 : this.stock) == null ? void 0 : i.id, delete this.stock, delete this.score, delete this.bestScore, !((s = this._banding) != null && s.x1) && !((r = this._banding) != null && r.x2) && !((o = this._banding) != null && o.y1) && !((a = this._banding) != null && a.y2) && (this._banding = null), !((l = this._bandingType) != null && l.x1) && !((u = this._bandingType) != null && u.x2) && !((c = this._bandingType) != null && c.y1) && !((f = this._bandingType) != null && f.y2) && (this._bandingType = null), (h = this.guillotineData) == null || delete h.myStripParent, delete this.score, delete this.inGroup, delete this.groupID, delete this.addedAsGroup;
  }
  isExactFit(n) {
    return this.orientationLock === "w" && this.w === n.w || this.orientationLock === "l" && this.l === n.l || !this.orientationLock && this.w === n.w && this.l === n.l;
  }
  addToStock(n) {
    this.stock = n, this.stockId = n.id, this.added = !0, this.inGroup = !1, n.used = !0, this.grain = n.grain, n != null && n.grain && this.rot && (this.grain = Ai(n.grain));
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
  removeFromStock() {
    this.placementOrder = null, this.stock = null, this.stockId = null, this.added = !1, this.addedAsGroup = !1;
  }
  resetPosition() {
    this.x = 0, this.y = 0, this.placementOrder = null, this.resetGuillotineData(!0);
  }
  resetScore() {
    this.score = null, this.resetGuillotineData(!0);
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
  resetBothScores() {
    this.resetBestScore(), this.resetScore(), this.placementOrder = null;
  }
  reset(n = !1, i = !0) {
    this.removeFromStock(), n || this.resetBothScores(), this.resetPosition(), this.setRotation(0), this.resetGuillotineData(i), this.placementOrder = null, this == null || delete this.isFirstShape, this.patternMatch = !1, this.isFirstShape = !1, this.group && this.group.destroy(), this.groupID = null, this.group = null, this.inGroup = !1, this.groupPlacementOrder = null, this.grain = null;
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
    if (Pn(this)) return this.orientationLock;
    if (!$(this.orientationLock)) return null;
    const i = n.getStock();
    return $(i.grain) ? this.orientationLock === i.grain ? "l" : "w" : this.orientationLock;
  }
  /**
   * get the orientation lock catering for container grain
   */
  getNecessaryOrientation(n) {
    if (!n) return this.orientationLock;
    if (Pn(this)) return this.orientationLock;
    if (!$(this.orientationLock)) return null;
    if (tc(n))
      return this.convertShapeGrainToOrientationLock(n);
    if (Pn(this) || tf(this))
      return $(this.orientationLock) ? this.orientationLock : null;
  }
  /**
   * get the required grain rotation
   * checks for stock grain and part orientationLock
   * does not check for fit
   */
  getGrainRotation(n) {
    if (Pn(this)) return this.rot;
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
    if (n === "x1" || n === "x2") return this.getShortSide();
    if (n === "y1" || n === "y2") return this.getLongSide();
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
    return Ry(n, this, i);
  }
  clone(n = null) {
    const i = this.id.split(".");
    n ? i.pop() : (n = i.pop(), n++), i.push(n);
    const s = i.join("."), r = structuredClone(this);
    return r.id = s, r.added = !1, r.duplicate = !0, delete r.score, delete r.bestScore, delete r.stock, delete r.placementOrder, delete r.inGroup, delete r.addedAsGroup, delete r.groupID, delete r.isFirstShape, new bn(r);
  }
  //this is a compressed version of the shape to help with memory management
  compress() {
    const n = this.cloneGuillotineData();
    return n.myStripParent = q2(this.guillotineData.myStripParent) ? this.guillotineData.myStripParent.id : this.guillotineData.myStripParent, {
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
}
class $y extends ef {
  constructor(n) {
    var t = (...JI) => (super(...JI), m(this, "firstShape"), m(this, "cuts"), m(this, "phase"), m(this, "merged"), m(this, "children"), m(this, "siblings"), //used by vis only
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
    (Se.lessThanOrEqualTo(n.w, 0) || Se.lessThanOrEqualTo(n.l, 0)) && this.issues.push(`Zero / negative dimension - l: ${n.l}, w: ${n.w}.`), (Se.lessThan(n.x, 0) || Se.lessThan(n.y, 0)) && this.issues.push(`Negative position - x: ${n == null ? void 0 : n.x}, y: ${n == null ? void 0 : n.y}.`), n != null && n.stock && (Se.greaterThan(n.x + n.l, n.stock.l) || Se.greaterThan(n.y + n.w, n.stock.w)) && this.issues.push(`Outside of stock ${n.stock.id} - x: ${n.x}, y: ${n.y}, l: ${n.l}, w: ${n.w}, sl: ${(i = n == null ? void 0 : n.stock) == null ? void 0 : i.l}, sw: ${(s = n == null ? void 0 : n.stock) == null ? void 0 : s.w}.`);
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
    this.children = [], this.siblings = [], this.parent = null, this.cuts = [], this.phase = null;
  }
}
class ai extends bn {
  //used for sorting
  constructor(n) {
    var i, s;
    if (n = Pi(n), !((i = n == null ? void 0 : n.shapes) != null && i.length))
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
    this.q = 1, delete this._banding, delete this._bandingType, delete this._trim, this.shapes = n.shapes, this.positions = (s = n == null ? void 0 : n.positions) != null && s.length ? n.positions : [], this.direction = n.direction, this.container = n.container, this.type = (n == null ? void 0 : n.type) ?? "auto", this.initGroup();
  }
  initGroup() {
    var n;
    (n = this == null ? void 0 : this.shapes) != null && n.length && (this.setShapePositions(), this.w > this.l ? this.orientationLock = "w" : this.orientationLock = "l", this.container && (this.efficiency = this[this.direction] / this.container[this.direction]));
  }
  setShapePositions() {
    this.positions = [], this.type !== "user" && this.sortShapes();
    let n = 0;
    const i = tE(this.direction);
    this.shapes.forEach((o, a) => {
      this.positions.push({
        shape: o.id,
        [i]: n,
        [nE(i)]: 0,
        rot: o.rot.valueOf()
      }), o.inGroup = !0, n += a === this.shapes.length - 1 ? o[this.direction] : o[this.direction] + o.getMinSpacing(this.container);
    }), this[this.direction] = n;
    const s = Ai(this.direction), r = this.shapes.reduce((o, a) => a[s] > o ? a[s] : o, 0);
    if (this[s] = r, wy()) {
      const o = this.shapes.slice(0, -1).reduce((u, c) => u + c.getMinSpacing(this.container), 0), l = this.shapes.reduce((u, c) => u + c[this.direction], 0) + o;
      IE([
        () => vi(Se.equalTo(l, this[this.direction]), "group dimension is incorrect in direction").to.be.true,
        () => vi(n, "currentPosition is incorrect in direction").to.equal(this[this.direction]),
        () => vi(r, "group dimension in other direction is not correct").to.equal(this[s])
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
    this.shapes.forEach((n) => {
      n.inGroup = !1, n.addedAsGroup = !1, n == null || delete n.group, n == null || delete n.groupID, n == null || delete n.groupPlacementOrder;
    });
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
    const n = Ai(this.direction);
    this.shapes.sort((i, s) => s[n] === i[n] ? s[this.direction] === i[this.direction] ? i.id.localeCompare(s.id, void 0, { numeric: !0 }) : s[this.direction] - i[this.direction] : s[n] - i[n]);
  }
  /**
   * place the group shapes on the stock
   */
  placeMyShapes(n) {
    if (!n) throw new Error("placeShapes requires stock");
    this.addToStock(n), this.added = !0;
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
    return this.shapes = r, this.container = o, a.container = this.container, a.shapes = n, a.id = s, new ai(a);
  }
  compress() {
    const n = bn.prototype.compress.call(this);
    return n.direction = this.direction, n.positions = structuredClone(this.positions), n.shapes = this.shapes.map((i) => i.compress()), n.type = this.type, n.cloneType = "group", n;
  }
}
function F2(e, t, n, i) {
  return t.filter((s, r) => (e.stockMatch.material[r] = null, e.stockMatch.thickness[r] = null, e.stockMatch.width[r] = null, e.stockMatch.fit[r] = null, (pn(e) || tf(e)) && (Ry(s, e) ? e.stockMatch.fit[r] = !0 : e.stockMatch.fit[r] = !1), n ? s.material === e.material ? e.stockMatch.material[r] = !0 : e.stockMatch.material[r] = !1 : e.stockMatch.material[r] = !0, i ? $(e.t) && $(s.t) ? (pn(e) && Se.equalTo(e.t, s.t) || e.t === s.t) && (e.stockMatch.thickness[r] = !0) : e.stockMatch.thickness[r] = !1 : e.stockMatch.thickness[r] = !0, s.type === "linear" ? pn(e) && (e.canRotate(0, s) && Se.equalTo(e.w, s.w) || e.canRotate(1, s) && Se.equalTo(e.l, s.w) ? e.stockMatch.width[r] = !0 : e.stockMatch.width[r] = !1) : e.stockMatch.width[r] = !0, e.stockMatch.fit[r] && e.stockMatch.material[r] && e.stockMatch.thickness[r] && e.stockMatch.width[r]));
}
function $2(e, t, n) {
  const i = Ni(e[0]);
  if (i && (e = e.map((c) => {
    const f = new bn(c);
    return f.trimDimensions(), f;
  })), Rs(t[0]) && (t = t.map((c, f) => (c.id = `${f.toString()}.0`, new oi(c)))), e.some((c) => $(c.stockLock) && c.stockLock.length)) return;
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
    const h = F2(f, t, r, o);
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
  const l = e.filter((c) => !c.stockLock || !c.stockLock.length).sort(To.ID), u = t.filter((c) => !a.has(c.parentID)).sort(To.ID);
  return t = t.filter((c) => _i(c)).filter((c) => a.has(c.parentID)), (r || o) && (e = e.filter((c) => {
    var f;
    return (f = c == null ? void 0 : c.stockLock) == null ? void 0 : f.length;
  })), {
    stockList: t,
    unusableShapes: l,
    shapeList: e,
    unusableStock: u
  };
}
function B2(e) {
  const t = e.map((n) => n.grain).filter((n) => n);
  return t.length ? t.every((n) => n === "l") ? "l" : t.every((n) => n === "w") ? "w" : t.some((n) => n === "l" || n === "w") ? "y" : "n" : "n";
}
function j2(e) {
  return e.shapes !== void 0;
}
function Pn(e) {
  return e instanceof ai && e.type !== "user";
}
function tf(e) {
  return e instanceof ai && e.type === "user";
}
function ns(e) {
  return e instanceof O2;
}
function Rs(e) {
  return e instanceof Fy;
}
function Ni(e) {
  return e instanceof Fo;
}
function _i(e) {
  return e instanceof oi;
}
function tc(e) {
  return e instanceof ef;
}
function pn(e) {
  return e instanceof bn && !(e instanceof ai);
}
function q2(e) {
  return e instanceof bn || e instanceof ai;
}
function U2(e) {
  return e instanceof $y;
}
function W2(e) {
  return e instanceof Qn;
}
class ze {
  constructor(t, n, i = null) {
    m(this, "x");
    m(this, "y");
    m(this, "z");
    m(this, "a");
    //shape id
    m(this, "b");
    //shape id
    m(this, "fromDirection");
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
    const i = structuredClone(this), s = new ze(
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
  collidesWith(t) {
    return this.x >= t.x && this.x <= t.x + t.l && this.y >= t.y && this.y <= t.y + t.w;
  }
  isIdenticalTo(t) {
    return this.x === t.x && this.y === t.y;
  }
  /* given a grid point, get the available positions for this shape
     does not cater for diagonals */
  getAvailableShapePositions(t) {
    const n = /* @__PURE__ */ new Set();
    return (t == null ? void 0 : t.cutType) !== "efficiency" ? (this.corner === "topLeft" && (this.grid === "top" || !this.grid) && n.add("topRight"), this.corner === "bottomRight" && (this.grid === "right" || !this.grid) && n.add("topRight"), n) : (this.corner === "topRight" && ((this.grid === "top" || !this.grid) && n.add("topLeft"), (this.grid === "right" || !this.grid) && n.add("bottomRight")), this.corner === "topLeft" && ((this.grid === "top" || !this.grid) && n.add("topRight"), (this.grid === "left" || !this.grid) && n.add("bottomLeft")), this.corner === "bottomRight" && ((this.grid === "bottom" || !this.grid) && n.add("bottomLeft"), (this.grid === "right" || !this.grid) && n.add("topRight")), this.corner === "bottomLeft" && ((this.grid === "bottom" || !this.grid) && n.add("bottomRight"), (this.grid === "left" || !this.grid) && n.add("topLeft")), n);
  }
}
class xa {
  constructor(t = []) {
    m(this, "points", /* @__PURE__ */ new Map());
    t.forEach((n) => this.addPoint(n));
  }
  addPoint(t, n = null) {
    if (!(t instanceof ze))
      throw new Error("p is not an instance of Point");
    if (this.contains(t)) {
      const i = this.getPoint(t);
      i.type === "group" && !n && (i.type = void 0);
      return;
    }
    t.validate(), n && (t.type = n), this.points.set(this.createKey(t), t);
  }
  addPoints(t, n = null) {
    t.forEach((i) => {
      i && (i.validate(), this.addPoint(i, n));
    });
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
    t.forEach((n) => {
      n.validate(), this.deletePoint(n);
    });
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
const Un = {
  bottom: (e, t, n) => {
    const i = new ze(e.x, e.y - n);
    return i.corner = t, i.grid = "bottom", i;
  },
  left: (e, t, n) => {
    const i = new ze(e.x - n, e.y);
    return i.corner = t, i.grid = "left", i;
  },
  right: (e, t, n) => {
    const i = new ze(e.x + n, e.y);
    return i.corner = t, i.grid = "right", i;
  },
  top: (e, t, n) => {
    const i = new ze(e.x, e.y + n);
    return i.corner = t, i.grid = "top", i;
  }
};
function z2(e, t, n, i) {
  var o, a, l, u, c, f;
  const s = new xa();
  if (n.toArray().sort(By).forEach((h) => {
    const d = h.corner, p = h.type;
    if (!i)
      s.addPoint(h);
    else
      switch (d) {
        case "topRight":
          s.addPoint(
            Un.top(h, d, i),
            p
          ), s.addPoint(
            Un.right(h, d, i),
            p
          );
          break;
        case "topLeft":
          s.addPoint(
            Un.top(h, d, i),
            p
          ), s.addPoint(
            Un.left(h, d, i),
            p
          );
          break;
        case "bottomRight":
          s.addPoint(
            Un.bottom(h, d, i),
            p
          ), s.addPoint(
            Un.right(h, d, i),
            p
          );
          break;
        case "bottomLeft":
          s.addPoint(
            Un.bottom(h, d, i),
            p
          ), s.addPoint(
            Un.left(h, d, i),
            p
          );
          break;
      }
    const g = s.toArray();
    if (i)
      for (let v = g.length; v--; ) {
        const w = g[v];
        n.contains(w) && s.deletePoint(w);
      }
    else
      for (let v = g.length; v--; ) {
        const w = g[v];
        for (let k = e.length; k--; ) {
          const b = e[k];
          if (w.x === b.x && w.y === b.y) {
            s.deletePoint(w);
            break;
          }
        }
      }
  }), i) {
    const h = /* @__PURE__ */ new Set();
    let d, p, g, v;
    ((o = t == null ? void 0 : t.constructor) == null ? void 0 : o.name) === "Stock" && (t != null && t.trimmed) || ((a = t == null ? void 0 : t.constructor) == null ? void 0 : a.name) === "Segment" ? (d = t.x, p = t.y, g = t.x + t.l, v = t.y + t.w) : (d = t.x + ((l = t == null ? void 0 : t.trim) == null ? void 0 : l.x1), p = t.y + ((u = t == null ? void 0 : t.trim) == null ? void 0 : u.y1), g = t.x + t.l - ((c = t == null ? void 0 : t.trim) == null ? void 0 : c.x2), v = t.y + t.w - ((f = t == null ? void 0 : t.trim) == null ? void 0 : f.y2));
    let w = s.toArray();
    for (let k = w.length; k--; ) {
      const b = w[k];
      (Se.lessThan(b.x, d) || Se.lessThan(b.y, p) || Se.greaterThan(b.x, g) || Se.greaterThan(b.y, v)) && w.splice(k, 1);
    }
    s.clear(), s.addPoints(w), h.clear(), w = s.toArray();
    for (let k = w.length; k--; ) {
      const b = w[k];
      for (let C = e.length; C--; ) {
        const T = e[C];
        if (b.collidesWith(T)) {
          s.deletePoint(b);
          break;
        }
      }
    }
  }
  return s;
}
function V2(e, t) {
  const n = new xa();
  return e.sort(By), e.forEach((i) => {
    Pn(i) ? (n.addPoints(i.getCoords(t)), i.shapes.forEach((s) => {
      const r = s.getCoords(t);
      n.addPoints(r, "group");
    })) : n.addPoints(i.getCoords(t));
  }), n.points.forEach((i) => {
    i.stockID = t.getStock().id;
  }), n;
}
function G2(e = [], t, n) {
  const i = n.getBladeWidth(), s = V2(
    e === null ? t : e,
    n
  );
  return z2(
    t,
    n,
    s,
    i
  );
}
function By(e, t) {
  return e.y === t.y ? t.x - e.x : t.y - e.y;
}
function Rr(e, t, n, i) {
  if (i.saw.cutType !== "efficiency") return e;
  const s = n.getMinSpacing(i);
  if (!s) return e;
  const r = i.getBladeWidth();
  let o;
  if (!s || !e.grid) return e;
  switch (e.grid) {
    case "bottom":
      o = e.clone(e.x, e.y - s + r);
      break;
    case "top":
      o = e.clone(e.x, e.y + s - r);
      break;
    case "left":
      o = e.clone(e.x - s + r, e.y);
      break;
    case "right":
      o = e.clone(e.x + s - r, e.y);
      break;
  }
  return o.x < 0 && (o.x = 0), o.y < 0 && (o.y = 0), o.adjustedForMinSpacing = !0, o;
}
function H2(e, t, n) {
  const i = new xa();
  return t.getAvailableShapePositions(n).forEach((r) => {
    switch (r) {
      case "bottomLeft":
        {
          let o = Rr(t, r, e, n);
          o = o.clone(o.x - e.l, o.y - e.w), i.addPoint(o);
        }
        break;
      case "bottomRight":
        {
          let o = Rr(t, r, e, n);
          o = o.clone(o.x, o.y - e.w), i.addPoint(o);
        }
        break;
      case "topLeft":
        {
          let o = Rr(t, r, e, n);
          o = o.clone(o.x - e.l, o.y), i.addPoint(o);
        }
        break;
      case "topRight":
        {
          let o = Rr(t, r, e, n);
          o = o.clone(o.x, o.y), i.addPoint(o);
        }
        break;
    }
  }), K2(e, n, i), i;
}
function K2(e, t, n) {
  var l, u, c, f, h, d;
  let i, s, r, o;
  ((l = t == null ? void 0 : t.constructor) == null ? void 0 : l.name) === "Stock" && (t != null && t.trimmed) || ((u = t == null ? void 0 : t.constructor) == null ? void 0 : u.name) === "Segment" ? (i = 0, s = 0, r = t.x + t.l - e.l, o = t.y + t.w - e.w) : (i = (c = t == null ? void 0 : t.trim) == null ? void 0 : c.x1, s = (f = t == null ? void 0 : t.trim) == null ? void 0 : f.y1, r = t.l - ((h = t == null ? void 0 : t.trim) == null ? void 0 : h.x2) - e.l, o = t.w - ((d = t == null ? void 0 : t.trim) == null ? void 0 : d.y2) - e.w);
  const a = n.toArray();
  for (let p = a.length; p--; ) {
    const g = a[p];
    (Se.lessThan(g.x, i) || Se.lessThan(g.y, s) || Se.greaterThan(g.x, r) || Se.greaterThan(g.y, o) || g.x < 0 || g.y < 0) && n.deletePoint(g);
  }
}
function qi(e) {
  return typeof e == "string" && e.length === 6 && !isNaN(+("0x" + e.replace("#", "")));
}
class Y2 {
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
    options: g = {
      disableClick: !1,
      enableStretch: !0
    },
    vueComponent: v
  }) {
    m(this, "env");
    m(this, "main");
    //is this the main vis or not
    m(this, "units", "decimal");
    m(this, "decimalPlaces");
    m(this, "fractionRoundTo");
    m(this, "formatNumber", (t) => X(
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
    m(this, "xScale", de.scaleLinear());
    m(this, "yScale", de.scaleLinear());
    m(this, "yPositionScale", de.scaleLinear());
    m(this, "xPositionScale", de.scaleLinear());
    m(this, "yAxisScale", de.scaleLinear());
    m(this, "measurementScale", de.scaleLinear());
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
    var k;
    if (!t) throw new Error("elementID is required");
    if (this.el = de.select(t), this.el === null) return;
    const w = this.el.node();
    if (w !== null) {
      this.htmlEl = w, this.vueComponent = v, this.env = ((k = v == null ? void 0 : v.gs) == null ? void 0 : k.env) === "development" ? "development" : "production", this.debug = this.env === "development" ? "groups" : "", this.app = l || !1, this.embed = u || !1, this.height = c, this.width = f, this.device = l ? "app" : "desktop", this.stretched = !1, this.elWidth = this.htmlEl.offsetWidth, this.elHeight = this.htmlEl.offsetHeight, this.w = 0, this.h = 0, this.padding = 0, this.mobileBreakpoint = 450, this.main = i, this.saw = a, this.cutMeasurementXAxes = [], this.cutMeasurementYAxes = [], this.axisSpacing = 16, this.flipY = h, this.flipX = d, p = {
        ...p
      };
      for (const [b, C] of Object.entries(p))
        C && (p[b] = C.replace("#", ""));
      this.colors = {
        partA: qi(p == null ? void 0 : p.partA) ? We("#" + p.partA) : We("#1d9bc4"),
        partB: qi(p == null ? void 0 : p.partB) ? We("#" + p.partB) : We("#127da1"),
        partHover: qi(p == null ? void 0 : p.partHover) ? We("#" + p.partHover) : We("#29c778"),
        partSelected: qi(p == null ? void 0 : p.partSelected) ? We("#" + p.partSelected) : We("#1bc319"),
        stock: qi(p == null ? void 0 : p.stock) ? We("#" + p.stock) : We("#ffd166"),
        text: qi(p == null ? void 0 : p.text) ? We("#" + p.text) : We("#ffffff")
      }, this.shapeColorScale = de.scaleSequential([
        this.colors.partA,
        this.colors.partB
      ]), this.env = n, this.moveMode = !1, this.moving = !1, this.moveRotation = !1, this.units = s, this.decimalPlaces = r, this.fractionRoundTo = o, this.hasTouch = !1, this.options = g, this.init();
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
      const a = o[r], l = de.select(a);
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
            return We(252, 3, 182);
          if (t.addedAsGroup)
            return We(53, 186, 20);
          if (typeof t.guillotineData.myPhase == "number") {
            const n = [0, 115, 255], i = [176, 255, 231];
            return `rgb(${n.map((r, o) => Math.round(r + t.guillotineData.myPhase / 5 * (i[o] - r))).join(",")})`;
          }
          break;
        case "groups":
          if (t.addedAsGroup !== !1)
            return We(53, 186, 20);
          break;
        case "priorityShapes":
          if (t.priority.includes(t.stock.parentID))
            return We(139, 171, 46);
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
    const t = Ce.call(this.vueComponent, ["stockList"]).filter((s) => s.used);
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
    const t = Ce.call(this.vueComponent, ["stockList"]), n = Ce.call(this.vueComponent, ["shapeList"]);
    if (!(t != null && t.length) || !(n != null && n.length)) return !1;
    this.setDevice(), this.refreshStock(), this.refreshShapes(), this.env === "development" && this.refreshPlacementPositions();
  }
  refreshStock() {
    const t = Ce.call(this.vueComponent, ["stockList"]);
    if (!(t != null && t.length)) return !1;
    const n = Ce.call(this.vueComponent, ["activeStock"]);
    this.initStock(n);
    const i = Ce.call(this.vueComponent, ["activeCuts"]);
    this.initCuts(i);
    const s = Ce.call(this.vueComponent, [
      "activeSegments"
    ]);
    this.initSegments(s), this.resetPositions(), typeof this.vueComponent.toggleSegments == "function" && this.vueComponent.toggleSegments(!1);
  }
  refreshShapes() {
    const t = Ce.call(this.vueComponent, ["shapeList"]);
    if (!(t != null && t.length)) return !1;
    this.resetPositions();
    const n = Ce.call(this.vueComponent, ["activeShapes"]);
    this.initShapes(n, t);
  }
  refreshPlacementPositions() {
    const t = Ce.call(this.vueComponent, ["placementPositions"]);
    if (!(t != null && t.length)) return !1;
    this.resetPlacementPositions();
    const n = t.filter((i) => i.stockID === Ce.call(this.vueComponent, ["activeStock"]).id);
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
      this.xAxis = this.axisGroup.append("g").attr("transform", `translate(0, ${this.padding})`).attr("class", "axis stock x").call(de.axisTop(this.xScale).ticks(5).tickSize(5)).selectAll("text").attr("dy", -5);
      const i = this.requiresStretch(t);
      (!i || i && this.stretched) && (this.yAxis = this.axisGroup.append("g").attr(
        "transform",
        `translate(${this.w - this.padding}, 0)`
      ).attr("class", "axis stock y").call(de.axisRight(this.yAxisScale).ticks(5).tickSize(5)).selectAll("text").attr("dx", 5));
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
        this.vueComponent.gs.shapeColors = {};
        for (let o = t.length; o--; ) {
          const a = t[o];
          a.parentID && this.vueComponent.gs.shapeColors[a.parentID] || a.parentID && (this.vueComponent.gs.shapeColors[a.parentID] = cs(this.shapeColorScale(parseInt(a.parentID) - 1)).formatHex());
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
        this.scoreColorScale = de.scaleSequential([We(251, 224, 255), We(122, 0, 138)]).domain([l, u]);
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
              case "groups":
                if (a.addedAsGroup) return "G" + a.getParentID();
            }
          return a.parentID ? a.parentID : a.getParentID();
        }).classed("hidden", (a, l, u) => {
          const c = u[l].getBBox();
          return c.width >= this.measurementScale(a.l) || c.height >= this.yScale(a.w) - this.padding;
        }).attr("dominant-baseline", "middle").attr("fill", this.colors.text), this.shapeNameText = this.shapeWrappers.append("text").attr("class", "shape-text name").text((a) => !(a != null && a.name) || typeof (a == null ? void 0 : a.name) != "string" ? null : a.name.toUpperCase().trim()).call(this.trimNameToFit, this).classed("hidden", (a, l, u) => u[l].getBBox().width >= this.measurementScale(a.l) || this.measurementScale(a.w) < 40).attr("dominant-baseline", "middle").attr("fill", this.colors.text), this.shapeLengthText = this.shapeWrappers.append("text").attr("class", "shape-text length").text((a) => this.debug === "guillotine" ? "" : X(
          a.l,
          this.units,
          this.decimalPlaces,
          !1,
          this.fractionRoundTo
        )).classed("hidden", (a, l, u) => {
          var f;
          return this.app ? this.measurementScale(a.l) < 50 || this.measurementScale(a.w) < 50 : ((f = a == null ? void 0 : a.stock) == null ? void 0 : f.type) === "linear" ? !1 : u[l].getBBox().width >= this.measurementScale(a.l) || this.measurementScale(a.w) < 30;
        }).attr("dominant-baseline", "middle").attr("fill", this.colors.text), this.shapeWidthText = this.shapeWrappers.append("text").attr("class", "shape-text width").text((a) => this.debug === "guillotine" ? "" : X(
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
        var l, u, c, f, h, d;
        if (this.moving) return !1;
        if (this.env === "development") {
          if (console.clear(), a) {
            let p = ["id", "placementOrder", "priority", "addedAsGroup"];
            this.debug === "guillotine" ? p = [
              "id",
              "placementOrder",
              "priority",
              "guillotineData.myPhase",
              "guillotineData.myStripDirection",
              "guillotineData.myStripParent",
              "guillotineData.firstShape",
              "addedAsGroup"
            ] : this.debug === "groups" && (p = [
              "id",
              "addedAsGroup"
            ]), console.table(p.reduce((g, v) => {
              const w = Id(a, v);
              return g[v] = Array.isArray(w) ? w.join(", ") : w, g;
            }, {}));
          }
          if (this.debug === "guillotine") {
            this.shapeWrappers.selectAll(".highlight-a").classed("highlight-a", !1), this.shapeWrappers.selectAll(".highlight-b").classed("highlight-b", !1), this.shapeWrappers.selectAll(".highlight-c").classed("highlight-c", !1);
            const p = (l = a.guillotineData) == null ? void 0 : l.myStripParent, g = (c = (u = t.find((v) => v.id === p)) == null ? void 0 : u.guillotineData) == null ? void 0 : c.myStripParent;
            p && this.shapeWrappers.filter((k) => k.id === p || k.addedAsGroup === p).select("rect").classed("highlight-a", !0), g && this.shapeWrappers.filter((k) => k.id === g || k.addedAsGroup === p).select("rect").classed("highlight-b", !0);
          }
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
            stock: (f = a == null ? void 0 : a.stock) == null ? void 0 : f.id,
            color: (h = this.getShapeColor(a)) == null ? void 0 : h.toString(),
            notes: a == null ? void 0 : a.notes
          }, g = new CustomEvent("partClick", {
            detail: p
          });
          if (this.env === "development" && console.log(p), this.htmlEl.dispatchEvent(g), this.app) return !1;
        }
        if (!this.moveMode && ((d = this.vueComponent) != null && d.gs) && (this.vueComponent.gs.examineShape = a), this.device === "desktop" && (this.resetCutMeasurementAxes(), this.addShapeAxes(a)), this.shapes.classed("selected", !1), this.shapes.style("fill", (p) => this.getShapeColor(p)), this.moveMode) {
          if (a.stock.cutType === "efficiency" || a.stock.type === "linear") {
            const p = is.call(this.vueComponent, "partsBin");
            p && p.addToPartsBin(a);
          }
        } else
          de.select(o.target).classed("selected", !0), de.select(o.target).style(
            "fill",
            this.colors.partSelected.toString()
          );
      }), !this.app && !this.hasTouch && this.shapes.on(
        "mouseover",
        (o) => {
          this != null && this.moveMode && this.moving || (de.select(o.target).classed("hover", !0), de.select(o.target).classed("selected") || de.select(o.target).style(
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
          de.select(o.target).classed("hover", !1), de.select(o.target).classed("selected") || de.select(o.target).style(
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
  updateCutVisibility(t, n = null) {
    var a, l, u, c, f, h, d, p, g;
    if (n === null || t == null || this != null && this.cuts.empty()) return;
    this.resetShapeAxes(), this.resetCutMeasurementAxes(), de.select(this.cuts.nodes()[n].parentNode).raise();
    const i = (a = t.guillotineData) == null ? void 0 : a.parentSegmentID, s = this.getHalfBladeWidth(t.stock), r = t.direction === "l" ? "y" : "x", o = (l = t == null ? void 0 : t.stock) == null ? void 0 : l.trim;
    if ((((u = t == null ? void 0 : t.stock) == null ? void 0 : u.cutType) === "guillotine" || ((c = t == null ? void 0 : t.stock) == null ? void 0 : c.cutType) === "beam") && i !== null && typeof i < "u") {
      this.cuts.style("visibility", (T) => typeof t.guillotineData.order == "number" && T.guillotineData.order <= t.guillotineData.order || T.guillotineData.parentSegmentID === i ? "visible" : "hidden"), this.cuts.classed("highlight", (T) => t.stock.cutType === "guillotine" && T.isTrim ? T.type === t.type : T.guillotineData.order === t.guillotineData.order);
      const v = (f = t == null ? void 0 : t.guillotineData) == null ? void 0 : f.segmentCutOrder;
      if (v == null)
        return;
      this.cuts.classed("completed", (T) => this.isCutComplete(T, i, v)), this.cuts.classed("inside-segment", (T) => this.isCutInsideSegment(T, i));
      let w, k;
      const b = this.getCutSegments(t);
      if (b === !1) return;
      const C = (d = b == null ? void 0 : b.siblings) == null ? void 0 : d[(h = b.main) != null && h.hasBeamTrim ? v - 1 : v];
      C && ((t == null ? void 0 : t.direction) === "l" ? w = [
        [
          C.y,
          C.y + C.w
        ],
        [
          t.y1 + s,
          (b == null ? void 0 : b.main.y) + (b == null ? void 0 : b.main.w)
        ]
      ] : (t == null ? void 0 : t.direction) === "w" && (w = [
        [
          C.x,
          C.x + C.l
        ],
        [
          t.x1 + s,
          (b == null ? void 0 : b.main.x) + (b == null ? void 0 : b.main.l)
        ]
      ]), (t == null ? void 0 : t.direction) === "l" ? k = [(p = t == null ? void 0 : t.distances) == null ? void 0 : p.bottom, t == null ? void 0 : t.distances.top] : (t == null ? void 0 : t.direction) === "w" && (k = [t == null ? void 0 : t.distances.left, (g = t == null ? void 0 : t.distances) == null ? void 0 : g.right]), this.device === "desktop" && !t.isTrim && this.addCutMeasurementAxes(w, k, r));
    } else {
      this.cuts.style("visibility", (w, k) => k <= n ? "visible" : "hidden");
      let v;
      if ((t == null ? void 0 : t.direction) === "l" ? v = [
        [0 + (o.y1 ?? 0), t.y1 - s],
        [
          t.y1 + s,
          t.stock.w - (o != null && o.y2 ? o.y2 : 0)
        ]
      ] : (t == null ? void 0 : t.direction) === "w" && (v = [
        [0 + (o.x1 ?? 0), t.x1 - s],
        [
          t.x1 + s,
          t.stock.l - (o != null && o.x2 ? o.x2 : 0)
        ]
      ]), v != null && v.length) {
        const w = [
          v[0][1] - v[0][0],
          v[1][1] - v[1][0]
        ];
        this.device === "desktop" && !t.isTrim && this.addCutMeasurementAxes(v, w, r);
      }
      this.cuts.classed(
        "highlight",
        (w, k) => k === n
      );
    }
    this.cuts.attr("stroke-width", (v, w) => {
      var C;
      let k = Math.ceil(this.measurementScale(this.getBladeWidth(v.stock)));
      const b = (C = t == null ? void 0 : t.guillotineData) == null ? void 0 : C.segmentCutOrder;
      return (this.isCutComplete(v, i, b) || this.isCutInsideSegment(v, i)) && (k += 1), w === n && Math.ceil(this.measurementScale(this.getBladeWidth(v.stock))) < 5 && (k = 5), k;
    });
  }
  //highlight a specific cut (by order or index), segments and related measurements
  showCut(t, n = null) {
    var l;
    if (n === null) return !1;
    this.updateCutVisibility(t, n);
    const i = this.getCutSegments(t);
    if (i === !1) return;
    const { main: s, siblings: r } = i;
    if (!((l = t == null ? void 0 : t.guillotineData) != null && l.parentSegmentID))
      return this.initSegments([s]);
    const o = r == null ? void 0 : r.length;
    let a = [];
    if (o) {
      for (let c = o; c--; )
        r[c] && (r[c].completed = !1);
      if (t.guillotineData.segmentCutOrder === void 0 || t.guillotineData.segmentCutOrder === null)
        return;
      const u = t.guillotineData.segmentCutOrder;
      for (let c = 0; c < o; c++)
        c < u && (r[c].completed = !0);
      a.push(...r), a = a.filter((c) => c);
    }
    a.length && (this.resetSegments(), this.initSegments(a));
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
        const l = de.scaleLinear().domain([o, a]).range([
          this.xPositionScale(o),
          this.xPositionScale(a)
        ]), u = (l.domain()[1] - l.domain()[0]) / 2 + l.domain()[0], c = this.axisGroup.append("g").attr(
          "transform",
          `translate(0, ${this.h - this.padding + this.axisSpacing})`
        ).attr("class", "axis measurement x").call(de.axisBottom(l).tickValues([u]).tickSize(4).tickFormat(() => this.formatNumber(n[r])));
        c.selectAll("text").attr("x", 0).attr("y", 0).attr(
          "dy",
          (f, h, d) => d[h].getBBox().height + 10
        ), this.cutMeasurementXAxes.push(c);
      } else {
        const l = de.scaleLinear().domain([o, a]).range([
          this.yPositionScale(o),
          this.yPositionScale(a)
        ]), u = (l.domain()[1] - l.domain()[0]) / 2 + l.domain()[0], c = this.axisGroup.append("g").attr(
          "transform",
          `translate(${this.padding - this.axisSpacing}, 0)`
        ).attr("class", "axis measurement y").call(de.axisLeft(l).tickValues([u]).tickSize(4).tickFormat(() => this.formatNumber(n[r])));
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
    const n = t.x, i = t.x + t.l, s = de.scaleLinear().domain([n, i]).range([this.xPositionScale(n), this.xPositionScale(i)]), r = t.y, o = t.y + t.w, a = de.scaleLinear().domain([r, o]).range([this.yPositionScale(r), this.yPositionScale(o)]);
    this.shapeXAxis = this.axisGroup.append("g").attr(
      "transform",
      `translate(0, ${this.h - this.padding + this.axisSpacing})`
    ).attr("class", "axis shape x").call(de.axisBottom(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)), this.shapeXAxis.selectAll("text").attr("dx", (u, c, f) => {
      const h = f[c];
      if (h === null) return;
      const d = h.getBBox();
      return c === 0 ? -d.width / 2 : d.width / 2;
    }), ((l = t == null ? void 0 : t.stock) == null ? void 0 : l.type) !== "linear" && (this.shapeYAxis = this.axisGroup.append("g").attr(
      "transform",
      `translate(${this.padding - this.axisSpacing}, 0)`
    ).attr("class", "axis shape y").call(de.axisLeft(a).tickValues(a.domain()).tickSize(4).tickFormat(this.formatNumber)), this.shapeYAxis.selectAll("text").attr("x", 0).attr("y", 0).attr(
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
      var h, d, p, g, v, w, k, b;
      return this.flipY ? c === 0 ? "rotate(90) translate(-" + ((d = (h = f[c]) == null ? void 0 : h.getBBox()) == null ? void 0 : d.width) / 2 + ")" : "rotate(90) translate(" + ((g = (p = f[c]) == null ? void 0 : p.getBBox()) == null ? void 0 : g.width) / 2 + ")" : c === 0 ? "rotate(90) translate(" + ((w = (v = f[c]) == null ? void 0 : v.getBBox()) == null ? void 0 : w.width) / 2 + ")" : "rotate(90) translate(-" + ((b = (k = f[c]) == null ? void 0 : k.getBBox()) == null ? void 0 : b.width) / 2 + ")";
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
    if (!t || !(t != null && t.length) || !this.main || !this.elWidth)
      return !1;
    this.resetCuts(), this.cuts = this.cutGroup.selectAll("line").data(t).join("line").attr("class", "cut").attr("stroke-width", (n) => {
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
      ].reduce((o, a) => (o[a] = Id(s, a), o), {}));
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
    const s = Ce.call(this.vueComponent, ["shapeList"]).filter((a) => {
      var l;
      return a.added && ((l = a == null ? void 0 : a.stock) == null ? void 0 : l.id) === n.id;
    }), r = G2(
      null,
      s,
      n
    ), o = new xa();
    r.toArray().forEach((a) => {
      o.addPoints(H2(t, a, n).toArray());
    }), n.cutType === "efficiency" ? ([
      new ze(0 + (n.trim.x1 ?? 0), 0 + (n.trim.y1 ?? 0)),
      new ze(0 + (n.trim.x1 ?? 0), 0 + (n.trim.y1 ?? 0)),
      new ze(
        n.l - t.l - (n.trim.x2 ?? 0),
        0 + (n.trim.y1 ?? 0)
      ),
      new ze(
        0 + (n.trim.x1 ?? 0),
        n.w - t.w - (n.trim.y2 ?? 0)
      ),
      new ze(
        n.l - t.l - (n.trim.x2 ?? 0),
        n.w - t.w - (n.trim.y2 ?? 0)
      )
    ].forEach((a) => o.addPoint(a)), i = o.toArray()) : (o.addPoint(new ze(0 + (n.trim.x1 ?? 0), 0 + (n.trim.y1 ?? 0))), i = o.toArray());
    for (let a = i.length; a--; ) {
      t.x = i[a].x, t.y = i[a].y;
      for (let l = s.length; l--; )
        if (this.collision(t, s[l], n)) {
          i.splice(a, 1);
          break;
        }
    }
    return this.positionGroup.selectAll("rect").data(i).join("rect").attr("data-id", (a, l) => l).attr("class", "shape ghost").attr("x", (a) => (t.x = a.x, this.getRectangleCoordinate(t, "x"))).attr("y", (a) => (t.y = a.y, this.getRectangleCoordinate(t, "y"))).attr("width", this.getWidthAttribute(t)).attr("height", this.getHeightAttribute(t)).on("mousedown", (a, l) => {
      a.stopPropagation();
      const u = is.call(this.vueComponent, "partsBin");
      u && u.moveShape(
        a.currentTarget,
        t,
        l
      );
    }), this.hasTouch || this.positionGroup.selectAll("rect").on(
      "mouseover",
      function(a) {
        a.stopPropagation(), de.select(this).classed("hover", !0), de.select(this).raise();
      },
      {
        passive: !0
      }
    ).on(
      "mouseout",
      function(a) {
        a.stopPropagation(), de.select(this).classed("hover", !1);
      },
      {
        passive: !0
      }
    ), this.dotGroup.selectAll("circle").data(i).join("circle").attr("data-id", (a, l) => l).attr("class", "dot").attr("cx", (a) => (t.x = a.x, this.getRectangleCoordinate(t, "x"))).attr("cy", (a) => (t.y = a.y, this.getRectangleCoordinate(t, "y"))).attr("r", 8).on("mousedown", (a, l) => {
      a.stopPropagation();
      const u = is.call(this.vueComponent, "partsBin");
      u && u.moveShape(
        a.currentTarget,
        t,
        l
      );
    }), t.x = 0, t.y = 0, this.hasTouch || this.dotGroup.selectAll("circle").on(
      "mouseover",
      function(a) {
        a.stopPropagation(), de.select(this).classed("hover", !0);
        const l = de.select(this).attr("data-id"), u = de.select(`.ghost[data-id="${l}"]`);
        u.raise(), u.classed("highlight", !0);
      },
      {
        passive: !0
      }
    ).on(
      "mouseout",
      function(a) {
        a.stopPropagation(), de.select(this).classed("hover", !1);
        const l = de.select(this).attr("data-id");
        de.select(`.ghost[data-id="${l}"]`).classed(
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
      this.placementPositionGroup.selectAll("circle").data(t).join("circle").attr("data-id", (n, i) => i).attr("class", "dot").attr("cx", (n) => this.xPositionScale(n.x)).attr("cy", (n) => this.yPositionScale(n.y)).attr("r", 3).on("mousedown", (n, i) => {
        n.stopPropagation(), console.log(i);
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
function Id(e, t) {
  return t.split(".").reduce((n, i) => n[i], e);
}
function be(e, t, n = null) {
  var i;
  if (!(e != null && e[0])) return !1;
  switch (n) {
    case "shallow":
      t = Gn(t);
      break;
    case "raw":
      t = Yo(t);
      break;
  }
  return typeof ((i = this == null ? void 0 : this.gs) == null ? void 0 : i[e[0]]) < "u" ? jh(this.gs, e, t) : typeof (this == null ? void 0 : this[e[0]]) < "u" && jh(this, e, t), !0;
}
function Ce(e) {
  var t;
  if (!(e != null && e[0])) return null;
  if ("gs" in this && typeof ((t = this == null ? void 0 : this.gs) == null ? void 0 : t[e[0]]) < "u")
    return bo(this.gs, e);
  if (typeof (this == null ? void 0 : this[e[0]]) < "u") return bo(this, e);
}
function jI(e) {
  var t;
  if (!(e != null && e[0])) return null;
  if ("optionsStore" in this && typeof ((t = this == null ? void 0 : this.optionsStore) == null ? void 0 : t[e[0]]) < "u")
    return bo(this.optionsStore, e);
  if (typeof (this == null ? void 0 : this[e[0]]) < "u") return bo(this, e);
}
function el(e) {
  e.queue = 0, e.stockCount = 0, e.shapeCount = 0, e.resultCount = 0, e.complete = !1;
}
function X2(e, t = null) {
  var n, i;
  typeof ((n = this.$refs) == null ? void 0 : n[e]) > "u" || ((i = this.$refs) == null ? void 0 : i[e]) === null || (t !== null ? this.$refs[e].visible = t : this.$refs[e].visible = !this.$refs[e].visible);
}
function J2(e, t) {
  return e != null && e.length ? e.find((n) => n.id === t) : null;
}
function Q2(e, t) {
  if (!(e != null && e.length) || !t) return [];
  const n = e.filter((i) => {
    var s, r;
    return (((s = i == null ? void 0 : i.stock) == null ? void 0 : s.id) ?? (i == null ? void 0 : i.stockId)) === t.id && !((r = i == null ? void 0 : i.guillotineData) != null && r.ptxDummyCut);
  });
  return n.sort((i, s) => {
    var r, o;
    return ((r = i == null ? void 0 : i.guillotineData) == null ? void 0 : r.order) - ((o = s == null ? void 0 : s.guillotineData) == null ? void 0 : o.order);
  }), n;
}
function Z2(e) {
  return e != null && e.length ? e.filter((t) => t.used === !0) : [];
}
function eA(e = {
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
  this.vis = Yo(new Y2(e)), this.vis.initStock(this.activeStock), this.vis.initShapes(this.activeShapes, this.shapeList), this.vis.initCuts(this.activeCuts, this.activeStock), this.visInit = !0;
}
function tA(e = !1) {
  var s;
  let t = ((s = this == null ? void 0 : this.gs) == null ? void 0 : s.inputStock) || (this == null ? void 0 : this.inputStock);
  if (!(t != null && t.length)) return ["No stock input"];
  const n = Ce.call(this, ["stockList"]);
  n && (n.length = 0);
  const i = [];
  e && (t = [t[0]]);
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    !(o != null && o.q) && !o.autoAdd && !e || i.push(...this.createStock(o, r));
  }
  return i;
}
function nA(e = 0) {
  var i, s, r, o;
  if (this.thinking) return !1;
  this.thinking = !0, this.success = !1;
  const t = [];
  if (t.push(...aA.call(this)), t.length) {
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
  const n = new Qn(
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
    this.stockList.map((a) => a.dimensions()),
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
function iA() {
  const e = Ce.call(this, ["vis"]);
  if (!e) return;
  const t = Ce.call(this, ["shapeList"]);
  if (!(t != null && t.length)) return !1;
  e.resetPositions(), e.resetShapes();
  const n = Ce.call(this, ["activeShapes"]);
  e.initShapes(n, t);
  const i = is.call(this, "PartsBin");
  i && i.clear(!1);
}
function sA() {
  const e = Ce.call(this, ["vis"]);
  if (!e) return;
  const t = Ce.call(this, ["stockList"]);
  if (!(t != null && t.length)) return !1;
  const n = Ce.call(this, ["activeStock"]);
  e.initStock(n);
  const i = Ce.call(this, ["activeCuts"]);
  e.initCuts(i);
  const s = Ce.call(this, ["activeSegments"]);
  e.initSegments(s), e.resetPositions(), typeof this.toggleSegments == "function" && this.toggleSegments(!1), this != null && this.cutMode && (this == null || this.showCut(0));
}
function rA() {
  var t;
  const e = ((t = this == null ? void 0 : this.gs) == null ? void 0 : t.vis) ?? (this == null ? void 0 : this.vis);
  e && (e.clearSelection(), e.resetShapeAxes(), e.resetCutMeasurementAxes(), e.resetPositions());
}
function oA(e) {
  Ce.call(this, ["examineShape"]) && (this.examineShape = null), be.call(this, ["activeStockId"], e);
}
function aA() {
  var i;
  const e = [], t = ((i = this == null ? void 0 : this.gs) == null ? void 0 : i.inputShapes) ?? (this == null ? void 0 : this.inputShapes);
  t.length || e.push("No parts found");
  const n = JC(t);
  return (!(t != null && t.length) || !n) && e.push("No quantity of parts found"), e;
}
function is(e, t = 0) {
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
function lA(e) {
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
function cA(e) {
  return Ep() ? (Qb(e), !0) : !1;
}
function nf(e) {
  return typeof e == "function" ? e() : Up(e);
}
const uA = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const fA = Object.prototype.toString, hA = (e) => fA.call(e) === "[object Object]", dA = () => {
};
function pA(e, t) {
  function n(...i) {
    return new Promise((s, r) => {
      Promise.resolve(e(() => t.apply(this, i), { fn: t, thisArg: this, args: i })).then(s).catch(r);
    });
  }
  return n;
}
const jy = (e) => e();
function gA(e = jy) {
  const t = Qi(!0);
  function n() {
    t.value = !1;
  }
  function i() {
    t.value = !0;
  }
  const s = (...r) => {
    t.value && e(...r);
  };
  return { isActive: Dc(t), pause: n, resume: i, eventFilter: s };
}
function mA(e) {
  return ea();
}
function yA(e, t, n = {}) {
  const {
    eventFilter: i = jy,
    ...s
  } = n;
  return Ln(
    e,
    pA(
      i,
      t
    ),
    s
  );
}
function bA(e, t, n = {}) {
  const {
    eventFilter: i,
    ...s
  } = n, { eventFilter: r, pause: o, resume: a, isActive: l } = gA(i);
  return { stop: yA(
    e,
    t,
    {
      ...s,
      eventFilter: r
    }
  ), pause: o, resume: a, isActive: l };
}
function wA(e, t = !0, n) {
  mA() ? zc(e, n) : t ? e() : Xo(e);
}
function vA(e) {
  var t;
  const n = nf(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const $o = uA ? window : void 0;
function Md(...e) {
  let t, n, i, s;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, i, s] = e, t = $o) : [t, n, i, s] = e, !t)
    return dA;
  Array.isArray(n) || (n = [n]), Array.isArray(i) || (i = [i]);
  const r = [], o = () => {
    r.forEach((c) => c()), r.length = 0;
  }, a = (c, f, h, d) => (c.addEventListener(f, h, d), () => c.removeEventListener(f, h, d)), l = Ln(
    () => [vA(t), nf(s)],
    ([c, f]) => {
      if (o(), !c)
        return;
      const h = hA(f) ? { ...f } : f;
      r.push(
        ...n.flatMap((d) => i.map((p) => a(c, d, p, h)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    l(), o();
  };
  return cA(u), u;
}
const Fr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, $r = "__vueuse_ssr_handlers__", _A = /* @__PURE__ */ xA();
function xA() {
  return $r in Fr || (Fr[$r] = Fr[$r] || {}), Fr[$r];
}
function SA(e, t) {
  return _A[e] || t;
}
function kA(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const CA = {
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
}, Ld = "vueuse-storage";
function EA(e, t, n, i = {}) {
  var s;
  const {
    flush: r = "pre",
    deep: o = !0,
    listenToStorageChanges: a = !0,
    writeDefaults: l = !0,
    mergeDefaults: u = !1,
    shallow: c,
    window: f = $o,
    eventFilter: h,
    onError: d = (H) => {
      console.error(H);
    },
    initOnMounted: p
  } = i, g = (c ? Gn : Qi)(typeof t == "function" ? t() : t);
  if (!n)
    try {
      n = SA("getDefaultStorage", () => {
        var H;
        return (H = $o) == null ? void 0 : H.localStorage;
      })();
    } catch (H) {
      d(H);
    }
  if (!n)
    return g;
  const v = nf(t), w = kA(v), k = (s = i.serializer) != null ? s : CA[w], { pause: b, resume: C } = bA(
    g,
    () => M(g.value),
    { flush: r, deep: o, eventFilter: h }
  );
  f && a && wA(() => {
    Md(f, "storage", D), Md(f, Ld, z), p && D();
  }), p || D();
  function T(H, G) {
    f && f.dispatchEvent(new CustomEvent(Ld, {
      detail: {
        key: e,
        oldValue: H,
        newValue: G,
        storageArea: n
      }
    }));
  }
  function M(H) {
    try {
      const G = n.getItem(e);
      if (H == null)
        T(G, null), n.removeItem(e);
      else {
        const J = k.write(H);
        G !== J && (n.setItem(e, J), T(G, J));
      }
    } catch (G) {
      d(G);
    }
  }
  function P(H) {
    const G = H ? H.newValue : n.getItem(e);
    if (G == null)
      return l && v != null && n.setItem(e, k.write(v)), v;
    if (!H && u) {
      const J = k.read(G);
      return typeof u == "function" ? u(J, v) : w === "object" && !Array.isArray(J) ? { ...v, ...J } : J;
    } else return typeof G != "string" ? G : k.read(G);
  }
  function D(H) {
    if (!(H && H.storageArea !== n)) {
      if (H && H.key == null) {
        g.value = v;
        return;
      }
      if (!(H && H.key !== e)) {
        b();
        try {
          (H == null ? void 0 : H.newValue) !== k.write(g.value) && (g.value = P(H));
        } catch (G) {
          d(G);
        } finally {
          H ? Xo(C) : C();
        }
      }
    }
  }
  function z(H) {
    D(H.detail);
  }
  return g;
}
function Dd(e, t, n = {}) {
  const { window: i = $o } = n;
  return EA(e, t, i == null ? void 0 : i.localStorage, n);
}
const wn = /* @__PURE__ */ Object.create(null);
wn.open = "0";
wn.close = "1";
wn.ping = "2";
wn.pong = "3";
wn.message = "4";
wn.upgrade = "5";
wn.noop = "6";
const Jr = /* @__PURE__ */ Object.create(null);
Object.keys(wn).forEach((e) => {
  Jr[wn[e]] = e;
});
const nc = { type: "error", data: "parser error" }, qy = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Uy = typeof ArrayBuffer == "function", Wy = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, sf = ({ type: e, data: t }, n, i) => qy && t instanceof Blob ? n ? i(t) : Rd(t, i) : Uy && (t instanceof ArrayBuffer || Wy(t)) ? n ? i(t) : Rd(new Blob([t]), i) : i(wn[e] + (t || "")), Rd = (e, t) => {
  const n = new FileReader();
  return n.onload = function() {
    const i = n.result.split(",")[1];
    t("b" + (i || ""));
  }, n.readAsDataURL(e);
};
function Fd(e) {
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let tl;
function TA(e, t) {
  if (qy && e.data instanceof Blob)
    return e.data.arrayBuffer().then(Fd).then(t);
  if (Uy && (e.data instanceof ArrayBuffer || Wy(e.data)))
    return t(Fd(e.data));
  sf(e, !1, (n) => {
    tl || (tl = new TextEncoder()), t(tl.encode(n));
  });
}
const $d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Fs = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < $d.length; e++)
  Fs[$d.charCodeAt(e)] = e;
const AA = (e) => {
  let t = e.length * 0.75, n = e.length, i, s = 0, r, o, a, l;
  e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
  const u = new ArrayBuffer(t), c = new Uint8Array(u);
  for (i = 0; i < n; i += 4)
    r = Fs[e.charCodeAt(i)], o = Fs[e.charCodeAt(i + 1)], a = Fs[e.charCodeAt(i + 2)], l = Fs[e.charCodeAt(i + 3)], c[s++] = r << 2 | o >> 4, c[s++] = (o & 15) << 4 | a >> 2, c[s++] = (a & 3) << 6 | l & 63;
  return u;
}, OA = typeof ArrayBuffer == "function", rf = (e, t) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: zy(e, t)
    };
  const n = e.charAt(0);
  return n === "b" ? {
    type: "message",
    data: PA(e.substring(1), t)
  } : Jr[n] ? e.length > 1 ? {
    type: Jr[n],
    data: e.substring(1)
  } : {
    type: Jr[n]
  } : nc;
}, PA = (e, t) => {
  if (OA) {
    const n = AA(e);
    return zy(n, t);
  } else
    return { base64: !0, data: e };
}, zy = (e, t) => {
  switch (t) {
    case "blob":
      return e instanceof Blob ? e : new Blob([e]);
    case "arraybuffer":
    default:
      return e instanceof ArrayBuffer ? e : e.buffer;
  }
}, Vy = "", NA = (e, t) => {
  const n = e.length, i = new Array(n);
  let s = 0;
  e.forEach((r, o) => {
    sf(r, !1, (a) => {
      i[o] = a, ++s === n && t(i.join(Vy));
    });
  });
}, IA = (e, t) => {
  const n = e.split(Vy), i = [];
  for (let s = 0; s < n.length; s++) {
    const r = rf(n[s], t);
    if (i.push(r), r.type === "error")
      break;
  }
  return i;
};
function MA() {
  return new TransformStream({
    transform(e, t) {
      TA(e, (n) => {
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
function Br(e) {
  return e.reduce((t, n) => t + n.length, 0);
}
function jr(e, t) {
  if (e[0].length === t)
    return e.shift();
  const n = new Uint8Array(t);
  let i = 0;
  for (let s = 0; s < t; s++)
    n[s] = e[0][i++], i === e[0].length && (e.shift(), i = 0);
  return e.length && i < e[0].length && (e[0] = e[0].slice(i)), n;
}
function LA(e, t) {
  nl || (nl = new TextDecoder());
  const n = [];
  let i = 0, s = -1, r = !1;
  return new TransformStream({
    transform(o, a) {
      for (n.push(o); ; ) {
        if (i === 0) {
          if (Br(n) < 1)
            break;
          const l = jr(n, 1);
          r = (l[0] & 128) === 128, s = l[0] & 127, s < 126 ? i = 3 : s === 126 ? i = 1 : i = 2;
        } else if (i === 1) {
          if (Br(n) < 2)
            break;
          const l = jr(n, 2);
          s = new DataView(l.buffer, l.byteOffset, l.length).getUint16(0), i = 3;
        } else if (i === 2) {
          if (Br(n) < 8)
            break;
          const l = jr(n, 8), u = new DataView(l.buffer, l.byteOffset, l.length), c = u.getUint32(0);
          if (c > Math.pow(2, 21) - 1) {
            a.enqueue(nc);
            break;
          }
          s = c * Math.pow(2, 32) + u.getUint32(4), i = 3;
        } else {
          if (Br(n) < s)
            break;
          const l = jr(n, s);
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
const Gy = 4;
function Ke(e) {
  if (e) return DA(e);
}
function DA(e) {
  for (var t in Ke.prototype)
    e[t] = Ke.prototype[t];
  return e;
}
Ke.prototype.on = Ke.prototype.addEventListener = function(e, t) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this;
};
Ke.prototype.once = function(e, t) {
  function n() {
    this.off(e, n), t.apply(this, arguments);
  }
  return n.fn = t, this.on(e, n), this;
};
Ke.prototype.off = Ke.prototype.removeListener = Ke.prototype.removeAllListeners = Ke.prototype.removeEventListener = function(e, t) {
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
Ke.prototype.emit = function(e) {
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
Ke.prototype.emitReserved = Ke.prototype.emit;
Ke.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
Ke.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const Sa = typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, n) => n(t, 0), Dt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), RA = "arraybuffer";
function Hy(e, ...t) {
  return t.reduce((n, i) => (e.hasOwnProperty(i) && (n[i] = e[i]), n), {});
}
const FA = Dt.setTimeout, $A = Dt.clearTimeout;
function ka(e, t) {
  t.useNativeTimers ? (e.setTimeoutFn = FA.bind(Dt), e.clearTimeoutFn = $A.bind(Dt)) : (e.setTimeoutFn = Dt.setTimeout.bind(Dt), e.clearTimeoutFn = Dt.clearTimeout.bind(Dt));
}
const BA = 1.33;
function jA(e) {
  return typeof e == "string" ? qA(e) : Math.ceil((e.byteLength || e.size) * BA);
}
function qA(e) {
  let t = 0, n = 0;
  for (let i = 0, s = e.length; i < s; i++)
    t = e.charCodeAt(i), t < 128 ? n += 1 : t < 2048 ? n += 2 : t < 55296 || t >= 57344 ? n += 3 : (i++, n += 4);
  return n;
}
function Ky() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function UA(e) {
  let t = "";
  for (let n in e)
    e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
  return t;
}
function WA(e) {
  let t = {}, n = e.split("&");
  for (let i = 0, s = n.length; i < s; i++) {
    let r = n[i].split("=");
    t[decodeURIComponent(r[0])] = decodeURIComponent(r[1]);
  }
  return t;
}
class zA extends Error {
  constructor(t, n, i) {
    super(t), this.description = n, this.context = i, this.type = "TransportError";
  }
}
class of extends Ke {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(t) {
    super(), this.writable = !1, ka(this, t), this.opts = t, this.query = t.query, this.socket = t.socket, this.supportsBinary = !t.forceBase64;
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
    return super.emitReserved("error", new zA(t, n, i)), this;
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
    const n = UA(t);
    return n.length ? "?" + n : "";
  }
}
class VA extends of {
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
    IA(t, this.socket.binaryType).forEach(n), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, NA(t, (n) => {
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
    return this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = Ky()), !this.supportsBinary && !n.sid && (n.b64 = 1), this.createUri(t, n);
  }
}
let Yy = !1;
try {
  Yy = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const GA = Yy;
function HA() {
}
class KA extends VA {
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
class gn extends Ke {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(t, n, i) {
    super(), this.createRequest = t, ka(this, i), this._opts = i, this._method = i.method || "GET", this._uri = n, this._data = i.data !== void 0 ? i.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var t;
    const n = Hy(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
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
    typeof document < "u" && (this._index = gn.requestsCount++, gn.requests[this._index] = this);
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
      if (this._xhr.onreadystatechange = HA, t)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete gn.requests[this._index], this._xhr = null;
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
gn.requestsCount = 0;
gn.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Bd);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in Dt ? "pagehide" : "unload";
    addEventListener(e, Bd, !1);
  }
}
function Bd() {
  for (let e in gn.requests)
    gn.requests.hasOwnProperty(e) && gn.requests[e].abort();
}
const YA = function() {
  const e = Xy({
    xdomain: !1
  });
  return e && e.responseType !== null;
}();
class XA extends KA {
  constructor(t) {
    super(t);
    const n = t && t.forceBase64;
    this.supportsBinary = YA && !n;
  }
  request(t = {}) {
    return Object.assign(t, { xd: this.xd }, this.opts), new gn(Xy, this.uri(), t);
  }
}
function Xy(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || GA))
      return new XMLHttpRequest();
  } catch {
  }
  if (!t)
    try {
      return new Dt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Jy = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class JA extends of {
  get name() {
    return "websocket";
  }
  doOpen() {
    const t = this.uri(), n = this.opts.protocols, i = Jy ? {} : Hy(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
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
        s && Sa(() => {
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
    const t = this.opts.secure ? "wss" : "ws", n = this.query || {};
    return this.opts.timestampRequests && (n[this.opts.timestampParam] = Ky()), this.supportsBinary || (n.b64 = 1), this.createUri(t, n);
  }
}
const il = Dt.WebSocket || Dt.MozWebSocket;
class QA extends JA {
  createSocket(t, n, i) {
    return Jy ? new il(t, n, i) : n ? new il(t, n) : new il(t);
  }
  doWrite(t, n) {
    this.ws.send(n);
  }
}
class ZA extends of {
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
        const n = LA(Number.MAX_SAFE_INTEGER, this.socket.binaryType), i = t.readable.pipeThrough(n).getReader(), s = MA();
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
        s && Sa(() => {
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
const eO = {
  websocket: QA,
  webtransport: ZA,
  polling: XA
}, tO = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, nO = [
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
  let s = tO.exec(e || ""), r = {}, o = 14;
  for (; o--; )
    r[nO[o]] = s[o] || "";
  return n != -1 && i != -1 && (r.source = t, r.host = r.host.substring(1, r.host.length - 1).replace(/;/g, ":"), r.authority = r.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), r.ipv6uri = !0), r.pathNames = iO(r, r.path), r.queryKey = sO(r, r.query), r;
}
function iO(e, t) {
  const n = /\/{2,9}/g, i = t.replace(n, "/").split("/");
  return (t.slice(0, 1) == "/" || t.length === 0) && i.splice(0, 1), t.slice(-1) == "/" && i.splice(i.length - 1, 1), i;
}
function sO(e, t) {
  const n = {};
  return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(i, s, r) {
    s && (n[s] = r);
  }), n;
}
const sc = typeof addEventListener == "function" && typeof removeEventListener == "function", Qr = [];
sc && addEventListener("offline", () => {
  Qr.forEach((e) => e());
}, !1);
class Xn extends Ke {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(t, n) {
    if (super(), this.binaryType = RA, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, t && typeof t == "object" && (n = t, t = null), t) {
      const i = ic(t);
      n.hostname = i.host, n.secure = i.protocol === "https" || i.protocol === "wss", n.port = i.port, i.query && (n.query = i.query);
    } else n.host && (n.hostname = ic(n.host).host);
    ka(this, n), this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:", n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, n.transports.forEach((i) => {
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
    }, n), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = WA(this.opts.query)), sc && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, Qr.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
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
    n.EIO = Gy, n.transport = t, this.id && (n.sid = this.id);
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
    const t = this.opts.rememberUpgrade && Xn.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
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
    this.readyState = "open", Xn.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
      if (s && (n += jA(s)), i > 0 && n > this._maxPayload)
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
    return t && (this._pingTimeoutTime = 0, Sa(() => {
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
    if (Xn.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
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
        const i = Qr.indexOf(this._offlineEventListener);
        i !== -1 && Qr.splice(i, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", t, n), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
Xn.protocol = Gy;
class rO extends Xn {
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
    Xn.priorWebsocketSuccess = !1;
    const s = () => {
      i || (n.send([{ type: "ping", data: "probe" }]), n.once("packet", (f) => {
        if (!i)
          if (f.type === "pong" && f.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", n), !n)
              return;
            Xn.priorWebsocketSuccess = n.name === "websocket", this.transport.pause(() => {
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
let oO = class extends rO {
  constructor(t, n = {}) {
    const i = typeof t == "object" ? t : n;
    (!i.transports || i.transports && typeof i.transports[0] == "string") && (i.transports = (i.transports || ["polling", "websocket", "webtransport"]).map((s) => eO[s]).filter((s) => !!s)), super(t, i);
  }
};
function aO(e, t = "", n) {
  let i = e;
  n = n || typeof location < "u" && location, e == null && (e = n.protocol + "//" + n.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = n.protocol + e : e = n.host + e), /^(https?|wss?):\/\//.test(e) || (typeof n < "u" ? e = n.protocol + "//" + e : e = "https://" + e), i = ic(e)), i.port || (/^(http|ws)$/.test(i.protocol) ? i.port = "80" : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")), i.path = i.path || "/";
  const r = i.host.indexOf(":") !== -1 ? "[" + i.host + "]" : i.host;
  return i.id = i.protocol + "://" + r + ":" + i.port + t, i.href = i.protocol + "://" + r + (n && n.port === i.port ? "" : ":" + i.port), i;
}
const lO = typeof ArrayBuffer == "function", cO = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, Qy = Object.prototype.toString, uO = typeof Blob == "function" || typeof Blob < "u" && Qy.call(Blob) === "[object BlobConstructor]", fO = typeof File == "function" || typeof File < "u" && Qy.call(File) === "[object FileConstructor]";
function af(e) {
  return lO && (e instanceof ArrayBuffer || cO(e)) || uO && e instanceof Blob || fO && e instanceof File;
}
function Zr(e, t) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let n = 0, i = e.length; n < i; n++)
      if (Zr(e[n]))
        return !0;
    return !1;
  }
  if (af(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return Zr(e.toJSON(), !0);
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && Zr(e[n]))
      return !0;
  return !1;
}
function hO(e) {
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
function dO(e, t) {
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
const pO = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], gO = 5;
var pe;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(pe || (pe = {}));
class mO {
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
    return (t.type === pe.EVENT || t.type === pe.ACK) && Zr(t) ? this.encodeAsBinary({
      type: t.type === pe.EVENT ? pe.BINARY_EVENT : pe.BINARY_ACK,
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
    return (t.type === pe.BINARY_EVENT || t.type === pe.BINARY_ACK) && (n += t.attachments + "-"), t.nsp && t.nsp !== "/" && (n += t.nsp + ","), t.id != null && (n += t.id), t.data != null && (n += JSON.stringify(t.data, this.replacer)), n;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(t) {
    const n = hO(t), i = this.encodeAsString(n.packet), s = n.buffers;
    return s.unshift(i), s;
  }
}
function jd(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class lf extends Ke {
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
      const i = n.type === pe.BINARY_EVENT;
      i || n.type === pe.BINARY_ACK ? (n.type = i ? pe.EVENT : pe.ACK, this.reconstructor = new yO(n), n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n);
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
    if (pe[i.type] === void 0)
      throw new Error("unknown packet type " + i.type);
    if (i.type === pe.BINARY_EVENT || i.type === pe.BINARY_ACK) {
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
      case pe.CONNECT:
        return jd(n);
      case pe.DISCONNECT:
        return n === void 0;
      case pe.CONNECT_ERROR:
        return typeof n == "string" || jd(n);
      case pe.EVENT:
      case pe.BINARY_EVENT:
        return Array.isArray(n) && (typeof n[0] == "number" || typeof n[0] == "string" && pO.indexOf(n[0]) === -1);
      case pe.ACK:
      case pe.BINARY_ACK:
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
class yO {
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
      const n = dO(this.reconPack, this.buffers);
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
const bO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, Decoder: lf, Encoder: mO, get PacketType() {
  return pe;
}, protocol: gO }, Symbol.toStringTag, { value: "Module" }));
function zt(e, t, n) {
  return e.on(t, n), function() {
    e.off(t, n);
  };
}
const wO = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Zy extends Ke {
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
      zt(t, "open", this.onopen.bind(this)),
      zt(t, "packet", this.onpacket.bind(this)),
      zt(t, "error", this.onerror.bind(this)),
      zt(t, "close", this.onclose.bind(this))
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
    if (wO.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (n.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(n), this;
    const o = {
      type: pe.EVENT,
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
      type: pe.CONNECT,
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
        case pe.CONNECT:
          t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case pe.EVENT:
        case pe.BINARY_EVENT:
          this.onevent(t);
          break;
        case pe.ACK:
        case pe.BINARY_ACK:
          this.onack(t);
          break;
        case pe.DISCONNECT:
          this.ondisconnect();
          break;
        case pe.CONNECT_ERROR:
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
        type: pe.ACK,
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
    return this.connected && this.packet({ type: pe.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
function vs(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
vs.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(), n = Math.floor(t * this.jitter * e);
    e = Math.floor(t * 10) & 1 ? e + n : e - n;
  }
  return Math.min(e, this.max) | 0;
};
vs.prototype.reset = function() {
  this.attempts = 0;
};
vs.prototype.setMin = function(e) {
  this.ms = e;
};
vs.prototype.setMax = function(e) {
  this.max = e;
};
vs.prototype.setJitter = function(e) {
  this.jitter = e;
};
class ac extends Ke {
  constructor(t, n) {
    var i;
    super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (n = t, t = void 0), n = n || {}, n.path = n.path || "/socket.io", this.opts = n, ka(this, n), this.reconnection(n.reconnection !== !1), this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0), this.reconnectionDelay(n.reconnectionDelay || 1e3), this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3), this.randomizationFactor((i = n.randomizationFactor) !== null && i !== void 0 ? i : 0.5), this.backoff = new vs({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(n.timeout == null ? 2e4 : n.timeout), this._readyState = "closed", this.uri = t;
    const s = n.parser || bO;
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
    this.engine = new oO(this.uri, this.opts);
    const n = this.engine, i = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const s = zt(n, "open", function() {
      i.onopen(), t && t();
    }), r = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), t ? t(a) : this.maybeReconnectOnOpen();
    }, o = zt(n, "error", r);
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
      zt(t, "ping", this.onping.bind(this)),
      zt(t, "data", this.ondata.bind(this)),
      zt(t, "error", this.onerror.bind(this)),
      zt(t, "close", this.onclose.bind(this)),
      // @ts-ignore
      zt(this.decoder, "decoded", this.ondecoded.bind(this))
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
    Sa(() => {
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
    return i ? this._autoConnect && !i.active && i.connect() : (i = new Zy(this, t, n), this.nsps[t] = i), i;
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
const Os = {};
function eo(e, t) {
  typeof e == "object" && (t = e, e = void 0), t = t || {};
  const n = aO(e, t.path || "/socket.io"), i = n.source, s = n.id, r = n.path, o = Os[s] && r in Os[s].nsps, a = t.forceNew || t["force new connection"] || t.multiplex === !1 || o;
  let l;
  return a ? l = new ac(i, t) : (Os[s] || (Os[s] = new ac(i, t)), l = Os[s]), n.query && !t.query && (t.query = n.queryKey), l.socket(n.path, t);
}
Object.assign(eo, {
  Manager: ac,
  Socket: Zy,
  io: eo,
  connect: eo
});
function vO(e = void 0) {
  this.socket = eo(e, {
    withCredentials: !0,
    //this is required to send passport user data
    autoConnect: !1
  }), this.socket.on("connect", () => {
    be.call(
      this,
      ["connected"],
      !0
    );
  }), this.socket.on("maintenance", () => {
    be.call(
      this,
      ["maintenanceMode"],
      !0
    ), this.socket.disconnect(), this.env === "development" && console.log("SmartCut - maintenance mode flag received from server");
  }), this.socket.on("connect_error", (t) => {
    be.call(
      this,
      ["connected"],
      !1
    ), console.warn(`SmartCut - socket connect_error: ${t.message}`), typeof alert < "u" && alert("We are having trouble connecting to the server. Please try again later."), this.socket.close();
  }), this.socket.on("message", (t) => console.log(t)), this.socket.on("user", (t) => {
    be.call(
      this,
      ["user"],
      t,
      "shallow"
    );
  }), this.socket.on("queued", () => {
    be.call(
      this,
      ["progress", "queue"],
      1
    );
  }), this.socket.on("jobInProgess", (t) => (alert(`You already have a job in progress, please wait for it to finish

Job ID: ${t}`), !1)), this.socket.on("jobStart", () => be.call(
    this,
    ["progress", "queue"],
    2
  )), this.socket.on("progress", (t) => {
    const n = t.data;
    if (typeof n.shapeCount < "u" && be.call(
      this,
      ["progress", "shapeCount"],
      n.shapeCount
    ), typeof n.stockCount < "u" && be.call(
      this,
      ["progress", "stockCount"],
      n.stockCount
    ), !n.stockCount && !n.shapeCount) {
      const i = Ce.call(this, ["progress", "resultCount"]);
      be.call(
        this,
        ["progress", "resultCount"],
        i + 1
      );
    }
  }), this.socket.on("upgrade", () => {
    "showUpgradeModal" in this && typeof this.showUpgradeModal == "function" && this.showUpgradeModal(), be.call(
      this,
      ["thinking"],
      !1
    );
  }), this.socket.on("error", (t) => {
    var i;
    be.call(
      this,
      ["thinking"],
      !1
    );
    const n = Ce.call(this, ["reset"]);
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
    var l, u, c, f, h, d, p, g;
    this.socket.disconnect();
    const n = t.result, i = Ce.call(this, ["resetProgress"]);
    if (be.call(
      this,
      ["placementPositions"],
      n.placementPositions ?? []
    ), be.call(
      this,
      ["metadata"],
      n.metadata ?? {}
    ), be.call(
      this,
      ["unusableShapes"],
      n.unusableShapes ?? []
    ), be.call(
      this,
      ["unavailableStock"],
      n.unavailableStock ?? []
    ), !((l = n.shapeList) != null && l.length) || !((u = n.stockList) != null && u.length)) {
      if (i(), typeof this.showModalMessage == "function") {
        let v = "<p>We did not manage to fit any parts.</p>";
        (c = n == null ? void 0 : n.unusableShapes) != null && c.length ? (v = "<p>No parts were usable.</p><p>Click below to view the <strong>Unusable parts</strong> message in the <strong>Inputs panel</stong>.</p>", this.showModalMessage({
          heading: "Parts unusable",
          main: v,
          buttonText: "Show me",
          buttonCallback: (w) => {
            w.showInputPanel(
              "parts",
              "inputs-unusable-parts"
            );
          }
        })) : (v += "<p>Please double check your list.</p>", this.$nextTick(() => {
          this.showModalMessage({
            heading: "Parts unusable",
            main: v
          });
        }));
      }
      return (f = window == null ? void 0 : window.top) == null || f.postMessage(
        {
          type: "scError",
          message: "No parts were added - please double check your list."
        },
        "*"
      ), "showMessage" in this && typeof this.showMessage == "function" && this.showMessage("No parts were added - please double check your list."), be.call(
        this,
        ["thinking"],
        !1
      ), typeof this.toggleWidget == "function" && this.toggleWidget.call(
        this,
        "inputs",
        !0
      ), !1;
    }
    n.shapeList.find((v) => !v.added) && typeof this.showModalMessage == "function" && this.$nextTick(() => {
      this.showModalMessage({
        heading: "Parts not used",
        main: "<p>We did not use all your parts.</p><p>Click below to view the <strong>Unusable parts</strong> message in the <strong>Inputs panel</stong>.</p>",
        buttonText: "Show me",
        buttonCallback: (v) => {
          v.showInputPanel(
            "parts",
            "inputs-unusable-parts"
          );
        }
      });
    }), be.call(
      this,
      ["progress", "complete"],
      !0
    ), be.call(
      this,
      ["jobId"],
      t == null ? void 0 : t.jobId
    ), this.toggleWidget("updateStock", !1), this.toggleWidget("options", !1), this.toggleWidget("offcuts", !1), this.toggleWidget("results", !1), this.toggleWidget("cutlist", !1), this.toggleWidget("export", !1), this.toggleWidget("labels", !1);
    let s;
    n != null && n.saw && (s = new Qn(
      n == null ? void 0 : n.saw,
      ((h = n == null ? void 0 : n.saw) == null ? void 0 : h.stockType) ?? ((p = (d = n.stockList) == null ? void 0 : d[0]) == null ? void 0 : p.type)
    ), be.call(
      this,
      ["saw"],
      s,
      "shallow"
    ));
    const r = N2({
      saw: s,
      stockList: n.stockList,
      removeScores: !0,
      preventAutoRotation: !0
    });
    be.call(
      this,
      ["stockList"],
      r,
      "shallow"
    );
    const o = Ce.call(
      this,
      ["usedStock"],
      "shallow"
    );
    o.length && this.$nextTick(() => {
      be.call(
        this,
        ["activeStockId"],
        o[0].id
      );
    }), be.call(
      this,
      ["shapeList"],
      I2({
        shapeList: n.shapeList,
        stockList: r,
        preventAutoRotation: !0
      }),
      "shallow"
    ), n != null && n.cutList && be.call(
      this,
      ["cutList"],
      M2({
        cutList: n.cutList,
        stockList: r
      }),
      "shallow"
    ), n != null && n.segmentList && be.call(
      this,
      ["segmentList"],
      L2({
        segmentList: n.segmentList,
        stockList: r
      }),
      "shallow"
    ), n != null && n.offcuts && be.call(
      this,
      ["offcuts"],
      R2({
        offcuts: n.offcuts,
        stockList: r,
        preventAutoRotation: !0
      })
    ), n != null && n.metadata && be.call(
      this,
      ["metadata"],
      n.metadata,
      "shallow"
    ), n != null && n.inputs && be.call(
      this,
      ["inputs"],
      n.inputs,
      "raw"
    ), (g = n == null ? void 0 : n.evolutionVisData) != null && g.length ? be.call(
      this,
      ["evolutionVisData"],
      n.evolutionVisData,
      "raw"
    ) : typeof this.toggleWidget == "function" && this.toggleWidget.call(
      this,
      "evolution",
      !1
    ), typeof this.toggleWidget == "function" && this.toggleWidget.call(
      this,
      "workbench",
      !0
    ), be.call(
      this,
      ["thinking"],
      !1
    );
    const a = is.call(this, "inputs");
    a && (a != null && a.success) && (a.success = !1), this.$nextTick(() => {
      var w, k;
      if (Ce.call(this, ["addedShapes"]).length === 0) {
        if (i(), typeof this.showModalMessage == "function") {
          let b = "<p>We could not fit any parts.</p>";
          (w = n == null ? void 0 : n.unusableShapes) != null && w.length ? (b += "<p>Some parts were not usable - click below to view the <strong>Unusable parts</strong> message in the <strong>Inputs panel</stong>.</p>", this.showModalMessage({
            heading: "No layouts",
            main: b,
            buttonText: "More info",
            buttonCallback: (C) => {
              C.showInputPanel(
                "parts",
                "inputs-unusable-parts"
              );
            }
          })) : (b += "<p>Please double check your list.</p>", this.showModalMessage({
            heading: "No layouts",
            main: b
          }));
        }
        (k = window == null ? void 0 : window.top) == null || k.postMessage(
          {
            type: "scError",
            message: "No parts were added."
          },
          "*"
        ), console.warn("No parts were added."), typeof this.toggleWidget == "function" && this.toggleWidget.call(
          this,
          "inputs",
          !0
        );
      }
    });
  });
}
function lc(e = 0, t, n = null, i = null, s = null) {
  if (!Ni(n) && !ns || i === "stock") return !1;
  let r, o;
  if (Ni(n) ? r = n.orientationLock : ns(n) ? r = n.direction : i === "shape" && (r = s), e === 0 || ns(n))
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
function _O(e, t, n = null, i = null, s = null) {
  if (!Ni(n) || i === "shape") return !1;
  let r;
  return e === 0 || e === 1 ? lc(e, t, n, i, s) : e === 2 ? !1 : r;
}
function xO(e, t = 0) {
  if (!t) return e;
  if (t === 1 || t === 2) {
    switch (e.preventAutoRotation = !0, e.orientationLock) {
      case "l":
        e.l < e.w && (t === 2 && qd(e), e.orientationLock = "w");
        break;
      case "w":
        e.l < e.w && (e.orientationLock = "l");
        break;
      default:
        e.l < e.w && t === 2 && qd(e), e.orientationLock = "";
    }
    return e;
  }
}
function qd(e) {
  e.banding && (e.banding = to(e.banding)), e.bandingType && (e.bandingType = to(e.bandingType)), e.trim && (e.trim = to(e.trim));
}
function to(e, t = !1) {
  const n = {
    x1: null,
    x2: null,
    y1: null,
    y2: null
  };
  return t ? ([n.x1, n.x2, n.y1, n.y2] = [e.x2, e.x1, e.y2, e.y1], "a" in e && "b" in e && "c" in e && "d" in e && ([n.d, n.a, n.b, n.c] = [e.a, e.b, e.c, e.d])) : ([n.y1, n.y2, n.x2, n.x1] = [e.x1, e.x2, e.y1, e.y2], "a" in e && "b" in e && "c" in e && "d" in e && ([n.a, n.b, n.c, n.d] = [e.d, e.a, e.b, e.c])), n;
}
const SO = {
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
}, Fi = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, s] of t)
    n[i] = s;
  return n;
}, kO = { id: "mini-stock-nav" }, CO = ["onMousedown"], EO = { class: "id" };
function TO(e, t, n, i, s, r) {
  return te(), ae("div", kO, [
    (te(!0), ae(Be, null, Tn(n.stockList, (o, a) => (te(), ae("button", {
      key: a,
      class: Gt(["nav-button", { selected: o.id === n.activeStockId }]),
      type: "button",
      style: He({
        backgroundColor: o.id === n.activeStockId ? "#" + n.secondaryColor : "#" + n.primaryColor
      }),
      onMousedown: (l) => r.showStock(o.id)
    }, [
      se("div", EO, Ge(a + 1), 1),
      pl(se("div", { class: "stack legibility" }, Ge(o.stack), 513), [
        [xg, typeof o.stack == "number" && o.stack > 1]
      ])
    ], 46, CO))), 128))
  ]);
}
const AO = /* @__PURE__ */ Fi(SO, [["render", TO]]), OO = {
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
}, PO = { id: "spinner" }, NO = ["width", "height"], IO = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function MO(e, t, n, i, s, r) {
  return te(), ae("div", PO, [
    n.complete ? Ne("", !0) : (te(), ae("svg", {
      key: 0,
      class: "loading",
      style: He({ width: n.size + "px", height: n.size + "px" }),
      width: n.size,
      height: n.size,
      viewBox: "0 0 300 300"
    }, t[0] || (t[0] = [
      kw('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7)
    ]), 12, NO)),
    n.complete ? (te(), ae("svg", {
      key: 1,
      class: "complete",
      style: He({ width: n.size + "px", height: n.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[1] || (t[1] = [
      se("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1)
    ]), 4)) : Ne("", !0),
    n.showNumber ? (te(), ae("div", IO, Ge(n.number), 1)) : Ne("", !0)
  ]);
}
const LO = /* @__PURE__ */ Fi(OO, [["render", MO]]);
function UI(e, t) {
  return e === "unitDependent" ? t === "decimal" ? "decimal" : "text" : e === "float" ? "decimal" : e === "integer" ? "numeric" : "text";
}
function WI(e, t) {
  return e === "unitDependent" ? t === "decimal" ? "number" : "text" : e === "checkbox" ? "checkbox" : e === "float" || e === "integer" ? "number" : "text";
}
function zI(e, t = null, n = "decimal") {
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
function VI(e) {
  return !!e;
}
function GI(e) {
  return typeof e.min > "u" ? null : typeof e.min == "function" ? e.min() : typeof e.min == "number" ? e.min : null;
}
function HI(e) {
  return typeof e.max > "u" ? null : typeof e.max == "function" ? e.max() : typeof e.max == "number" ? e.max : null;
}
function DO(e, t) {
  return t ? t.split(".").reduce((i, s) => i && i[s] !== "undefined" ? i[s] : void 0, e) : null;
}
function RO(e, t, n, i = !0) {
  const s = t.split(".");
  let r = e;
  for (let o = 0; o < s.length - 1; o++)
    r[s[o]] || (r[s[o]] = {}), r = r[s[o]];
  (i || !$(r[s[s.length - 1]])) && (r[s[s.length - 1]] = n);
}
function FO(e, t, n, i, s = !0) {
  var o;
  if (!((o = e == null ? void 0 : e[t]) != null && o[n])) return;
  const r = e[t][n].find((a) => a.id === i);
  r && (s ? r.enabled = !0 : r.enabled = !1);
}
function KI(e, t, n, i) {
  var r;
  if (!((r = e == null ? void 0 : e[t]) != null && r[n])) return !1;
  const s = e[t][n].find((o) => o.id === i);
  return s ? s.enabled : !1;
}
function YI(e, t, n, i) {
  var s;
  return (s = e == null ? void 0 : e[t]) != null && s[n] ? e[t][n].findIndex((r) => r.id === i) > -1 : !1;
}
function eb(e, t, n) {
  var i;
  return (i = e == null ? void 0 : e[t]) != null && i[n] ? e[t][n].filter((s) => s.enabled === !0).map((s) => s.id) : [];
}
function $O(e, t, n, i, s = []) {
  const r = eb(e, n, i);
  if (!r.length) return [];
  const o = t.filter((a) => r.includes(a.id) || a.custom === !0);
  return r.length !== o.filter((a) => (a == null ? void 0 : a.fieldMap) && !a.fieldMap.startsWith("customData.")).length && console.warn("Not all enabled fields are present in the field definitions"), s.length && o.sort((a, l) => {
    const u = s.indexOf(a.id), c = s.indexOf(l.id);
    return u === -1 ? 1 : c === -1 ? -1 : u - c;
  }), o;
}
const BO = {
  name: "OrientationButton",
  props: {
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
      if (ns(this.rectangle)) return ["l", "w"];
      let e = ["", "l", "w"];
      return this.rectangle.multiEdit && (e = [" ", "", "l", "w"]), Rs(this.rectangle) ? e : this.orientationModel === 1 ? this.stockGrain !== "n" ? e = ["", "l", "w"] : e = [""] : this.orientationModel === 2 ? this.stockGrain !== "n" ? e = ["", "l"] : e = [""] : e;
    },
    isSquare() {
      var e;
      return typeof ((e = this.rectangle) == null ? void 0 : e.isSquare) == "function" ? this.rectangle.isSquare() : !1;
    },
    iconType() {
      var e;
      if (Rs(this.rectangle) || this.rectangleType === "stock") {
        if (!this.rectangle) return "noGrain";
      } else if (!this.rectangle && !this.shapeOrientation)
        return "freeRotation";
      if (Rs(this.rectangle) || this.rectangleType === "stock")
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
      return lc(
        this.orientationModel,
        this.stockGrain,
        this.rectangle,
        this.rectangleType,
        this.shapeOrientation
      );
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
      if (Ni(this.rectangle))
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
      else if (ns(this.rectangle))
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
      ns(this.rectangle) ? e = this.rectangle.direction : Ni(this.rectangle) ? e = this.rectangle.orientationLock : Rs(this.rectangle) && (e = this.rectangle.grain);
      let t = this.orientationOptions.findIndex((n) => n === e);
      t++, t > this.orientationOptions.length - 1 && (t = 0), this.$emit("updateOrientation", this.orientationOptions[t]);
    },
    handleKeyDown(e) {
      (e.key === "Enter" || e.key === " ") && this.click();
    }
  }
}, jO = {
  key: 0,
  class: "delete",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
};
function qO(e, t, n, i, s, r) {
  return te(), ae("div", {
    class: Gt(["orientation-button", { rot: r.shouldRotate, square: r.isSquare, disabled: n.disabled, [r.iconType]: !0 }]),
    tabindex: "0",
    "aria-label": "Part orientation",
    style: He({
      backgroundColor: n.buttonBackground
    }),
    onClick: t[0] || (t[0] = (...o) => r.click && r.click(...o))
  }, [
    r.iconType === "delete" ? (te(), ae("svg", jO, t[1] || (t[1] = [
      se("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
    ]))) : Ne("", !0),
    r.iconType === "freeRotation" ? (te(), ae("svg", {
      key: 1,
      class: "arrow",
      style: He({
        stroke: n.iconColor ? n.iconColor : "#ffffff"
      }),
      viewBox: "0 0 67 63",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[2] || (t[2] = [
      se("g", null, [
        se("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
        se("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
        se("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
        se("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
      ], -1)
    ]), 4)) : Ne("", !0),
    r.iconType === "leftRight" ? (te(), ae("svg", {
      key: 2,
      class: "arrow",
      style: He({
        stroke: n.iconColor ? n.iconColor : "#ffffff"
      }),
      viewBox: "0 0 72 39",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[3] || (t[3] = [
      se("g", null, [
        se("path", { d: "m5.408 19.408h61.095" }),
        se("g", null, [
          se("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
          se("path", { d: "m17.408 33.408-12-14 12-14" })
        ])
      ], -1)
    ]), 4)) : Ne("", !0),
    r.iconType === "topBottom" ? (te(), ae("svg", {
      key: 3,
      class: "arrow",
      style: He({
        stroke: n.iconColor ? n.iconColor : "#ffffff"
      }),
      viewBox: "0 0 39 72",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[4] || (t[4] = [
      se("g", null, [
        se("path", { d: "m19.408 66.503v-61.095" }),
        se("g", null, [
          se("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
          se("path", { d: "m33.408 54.503-14 12-14-12" })
        ])
      ], -1)
    ]), 4)) : Ne("", !0),
    r.iconType === "grainLeftRight" ? (te(), ae("svg", {
      key: 4,
      class: "grain",
      style: He({
        stroke: n.iconColor ? n.iconColor : "#ffffff"
      }),
      viewBox: "0 0 106 64",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[5] || (t[5] = [
      se("g", null, [
        se("path", { d: "m3 3h99.887" }),
        se("path", { d: "m3.113 32h99.887" }),
        se("path", { d: "m3.113 61h99.887" })
      ], -1)
    ]), 4)) : Ne("", !0),
    r.iconType === "grainTopBottom" ? (te(), ae("svg", {
      key: 5,
      class: "grain",
      style: He({
        stroke: n.iconColor ? n.iconColor : "#ffffff"
      }),
      viewBox: "0 0 64 106",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[6] || (t[6] = [
      se("g", null, [
        se("path", { d: "m61 3v99.887" }),
        se("path", { d: "m32 3.113v99.887" }),
        se("path", { d: "m3 3.113v99.887" })
      ], -1)
    ]), 4)) : Ne("", !0)
  ], 6);
}
const UO = /* @__PURE__ */ Fi(BO, [["render", qO]]), WO = /* @__PURE__ */ Di({
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
      const e = Dr(this.inputShape.bandingOptions.x1) ? Object.values(this.inputShape.bandingOptions.x1).every((n) => n) : null, t = this.inputShape.banding.x1;
      return e || t;
    },
    x2() {
      const e = Dr(this.inputShape.bandingOptions.x2) ? Object.values(this.inputShape.bandingOptions.x2).every((n) => n) : null, t = this.inputShape.banding.x2;
      return e || t;
    },
    y1() {
      const e = Dr(this.inputShape.bandingOptions.y1) ? Object.values(this.inputShape.bandingOptions.y1).every((n) => n) : null, t = this.inputShape.banding.y1;
      return e || t;
    },
    y2() {
      const e = Dr(this.inputShape.bandingOptions.y2) ? Object.values(this.inputShape.bandingOptions.y2).every((n) => n) : null, t = this.inputShape.banding.y2;
      return e || t;
    },
    mappedBanding() {
      let e = {
        x1: this.x1,
        x2: this.x2,
        y1: this.y1,
        y2: this.y2
      };
      return _O(this.orientationModel, this.stockGrain, this.inputShape) && (e = to(e)), e;
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
});
function zO(e, t, n, i, s, r) {
  return te(), ae("div", {
    class: Gt(["banding-button", { open: e.open }]),
    tabindex: "0",
    onClick: t[0] || (t[0] = (...o) => e.click && e.click(...o))
  }, [
    se("div", {
      class: Gt(["outer", { x1: e.mappedBanding.x1, x2: e.mappedBanding.x2, y1: e.mappedBanding.y1, y2: e.mappedBanding.y2 }])
    }, t[1] || (t[1] = [
      se("div", { class: "inner" }, null, -1)
    ]), 2)
  ], 2);
}
const VO = /* @__PURE__ */ Fi(WO, [["render", zO]]), GO = /* @__PURE__ */ Jo(() => import("./Machining-CAJVu62F.js")), HO = /* @__PURE__ */ Jo(() => import("./ImportCSV-C1cuRVlL.js")), KO = /* @__PURE__ */ Jo(() => import("./InputField-Qil9ZzrO.js")), tb = {
  name: "CheckoutCalculator",
  components: {
    StockNavigation: AO,
    OrientationButton: UO,
    Spinner: LO,
    Machining: GO,
    BandingButton: VO,
    ImportCSV: HO,
    InputField: KO
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
    const { t: e, locale: t, fallbackLocale: n } = ra({
      locale: "en_US"
    });
    return {
      t: e,
      locale: t,
      fallbackLocale: n
    };
  },
  data() {
    const e = Dd(
      "Checkout/inputShapes",
      [],
      {
        serializer: {
          read: (t) => {
            const n = t ? JSON.parse(t) : [];
            return P2(n, this.units);
          },
          write: (t) => JSON.stringify(t)
        },
        listenToStorageChanges: !1
      }
    );
    return {
      domain: window.location.hostname,
      connected: !1,
      maintenanceMode: !1,
      creditVisible: !0,
      currentURL: Dd(
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
      stockList: Gn([]).value,
      shapeList: Gn([]).value,
      cutList: Gn([]).value,
      offcuts: Gn([]).value,
      inputs: Gn({}),
      //used to save inputs
      currentInputShape: null,
      activeStockId: null,
      selectedShapeId: null,
      metadata: null,
      //messages
      messageVisible: !1,
      messageHeading: "",
      messageContent: "",
      vis: Yo({}),
      visInit: !1,
      isFullScreen: !1,
      //special sections
      machiningEnabled: !1,
      bandingEnabled: null,
      //index of the shape with banding dropdowns
      CSVImportEnabled: !1,
      allFields: {
        parts: {
          sheet: [
            { id: "material", enabled: !1 },
            { id: "l", enabled: !0 },
            { id: "w", enabled: !0 },
            { id: "t", enabled: !0 },
            { id: "q", enabled: !0 },
            { id: "name", enabled: !0 },
            { id: "orientationLock", enabled: !0 },
            { id: "banding", enabled: !0 },
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
        decimalPlaces: 2,
        stackHeight: 100,
        maxParts: null,
        disableBanding: !1,
        disableOrientation: !1,
        showDiagram: !0,
        showProgressNumber: !0,
        locale: "en_US",
        orientationModel: 0,
        customFields: [],
        enableFocus: !0
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
      },
      materials: [],
      thicknesses: [],
      bondedThicknesses: [],
      bandingChoices: {},
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
      canGoFullScreen: eE(),
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
      userFriendlyFieldMap: Dy,
      customFieldDefinitions: [],
      user: null
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
            id: "machining",
            w: "28px",
            label: this.t("machining"),
            fieldMap: "machining"
          }
        ],
        ...this.customFieldDefinitions
      ];
    },
    relevantFieldDefinitions() {
      return $O(this.allFields, this.fieldDefinitions, "parts", this.saw.stockType, this.options.fieldOrder);
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
      return this.inputShapes.length > 1 && e++, e;
    },
    partColumnsStyle() {
      const e = {
        id: "34px",
        del: "30px"
      }, t = [];
      for (let i = 0; i < this.relevantFieldDefinitions.length; i++) {
        const s = this.relevantFieldDefinitions[i];
        s.id !== "trim" && t.push(s.w ?? "minmax(20px, 1fr)");
      }
      return t.unshift(e.id), this.inputShapes.length > 1 && t.push(e.del), t.join(" ");
    },
    bandingColumnsStyle() {
      if (!this.bandingChoices) return "auto";
      const e = Object.keys(this.bandingChoices).length;
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
      return Z2(this.stockList);
    },
    activeStock() {
      return this.activeStockId ? J2(this.stockList, this.activeStockId) : null;
    },
    activeStockArea() {
      return this.activeStock.getArea();
    },
    stackedStock() {
      return ZC(this.stockList);
    },
    activeShapes() {
      return this.shapeList.filter((e) => {
        var t, n;
        return e.added && ((t = e == null ? void 0 : e.stock) == null ? void 0 : t.id) === ((n = this.activeStock) == null ? void 0 : n.id);
      });
    },
    activeCuts() {
      return Q2(this.cutList, this.activeStock);
    },
    unplacedShapes() {
      return QC(this.shapeList);
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
      lA.call(this, e);
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
            bandingType: n.bandingType,
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
    //stock changes when a thickness is selected in WC
    stock(e) {
      if (Array.isArray(e) || console.warn("SmartCut - stock must be passed as an array"), !e || !e.length) {
        console.warn("SmartCut - stock updated but nothing found");
        return;
      }
      this.inputStock = [], this.materials.length || (this.thicknesses = [], this.bondedThicknesses = [], this.inputShapes.forEach((t) => t.t = null)), e.forEach((t) => {
        t.type = this.saw.stockType, this.materials.length || (this.setFieldEnabled("t", !1), t.t && typeof t.t == "string" && t.t.includes(",") && (t.t = this.getBondedThicknesses(t.t, !0), t.t.length !== 2 ? this.$emit(
          "error",
          "bonded thickness options must have exactly two options"
        ) : (this.addBondedThicknesses(t.t), this.setFieldEnabled("t", !0), t.t = this.thicknesses[0])));
        const n = this.createStockInput(t);
        this.inputStock.push(n);
      }), this.inputStock.length && (this.inputShapes.length ? this.inputShapes.forEach((t) => {
        t.t = this.inputStock[0].t;
      }) : this.addInputShape(1));
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
    this.currentURL !== n && (this.inputShapes.length = 0), this.currentURL = n, this.locale = this.options.locale, vO.call(this, "https://api.cutlistevo.com/"), this.socket.connect(), this.socket.emit("getUserFromDomain"), this.viewportWidth = window.innerWidth, this.resizeTimer = null;
    const i = this.debounce(this.handleResize, 30);
    window.addEventListener("resize", i, {
      passive: !0
    }), window.addEventListener("smartcut/load", (s) => {
      this.parseInputs(s.detail);
    }), this.mounted = !0, this.debug && this.$emit("log", ["SmartCut - ready...", "fields:", this.relevantFieldDefinitions.map((s) => s.id)]);
  },
  methods: {
    parseInputs(e) {
      console.log(e.inputs), this.$nextTick(() => {
        var t, n;
        !e || !((n = (t = e == null ? void 0 : e.inputs) == null ? void 0 : t.parts) != null && n.length) || e.inputs.parts.forEach((i) => {
          this.inputShapes = [];
          const s = new Fo(i);
          s && this.inputShapes.push(s);
        });
      });
    },
    getEnabledFields(e) {
      return eb(this.allFields, e, this.saw.stockType);
    },
    setFieldEnabled(e, t = !0) {
      FO(this.allFields, "parts", this.saw.stockType, e, t);
    },
    importParts(e) {
      this.inputShapes.length = 0, console.log(e), this.$nextTick(() => {
        e.forEach((t) => {
          var n, i;
          t.t = ((i = (n = this.inputStock) == null ? void 0 : n[0]) == null ? void 0 : i.t) ?? null, this.inputShapes.push(this.createShapeInput(t));
        });
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
      return DO(e, t);
    },
    setNestedValue(e, t, n, i = !0) {
      RO(e, t, n, i);
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
    openBanding(e = null) {
      this.currentInputShape === e ? (this.currentInputShape = null, this.bandingEnabled = null) : (this.currentInputShape = e, this.bandingEnabled = this.inputShapes.indexOf(e));
    },
    closeMachining() {
      this.machiningEnabled = !1, document.exitFullscreen && document.exitFullscreen();
    },
    hasMachining(e = null) {
      return e ? A2(e) : !1;
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
      const n = [];
      for (let i = 0; i < e.length; i++) {
        let s = e[i];
        this.units === "decimal" && (s = parseFloat(s)), this.thicknesses.push(s), t && t.thicknesses.push(s), n.push(this.thicknesses.length - 1);
      }
      this.bondedThicknesses.push(n);
    },
    init(e) {
      var t, n, i, s, r, o, a, l, u, c;
      if (this.debug && this.$emit("log", ["SmartCut - init...", e]), e != null && e.type && delete e.type, e != null && e.options) {
        const f = e.options;
        [
          "stockType",
          "cutPreference",
          "bladeWidth"
        ].forEach((p) => {
          p in f || this.$emit("error", `${p} is a required option`);
        });
        const d = {
          stockType: () => {
            const p = ["sheet", "linear"];
            p.includes(f.stockType) || console.warn(`${f.stockType} is not a valid stockType, expected ${p.join("|")}`), this.saw.stockType = f.stockType;
          },
          cutPreference: () => {
            const p = [
              "efficiency",
              "length",
              "width",
              "beam"
            ];
            if (p.includes(f.cutPreference)) {
              const { cutType: g, cutPreference: v } = ec(f.cutPreference);
              this.saw.cutType = g, this.saw.cutPreference = v, this.saw.stackHeight = f.stackHeight, f.stockType === "linear" && (this.saw.cutType = null, this.saw.cutPreference = null), f.cutPreference === "beam" && (this.saw.stackHeight = f.stackHeight);
            } else
              console.warn(`SmartCut - ${f.cutPreference} is not one of ${p.join("|")}`);
          },
          bladeWidth: () => {
            f.bladeWidth >= 0 ? this.saw.bladeWidth = f.bladeWidth : console.warn(`SmartCut - you provided an incorrect blade width of: ${f.bladeWidth}`);
          },
          disableClick: () => {
            this.visOptions.disableClick = f.disableClick;
          },
          colors: () => {
            for (const [p, g] of Object.entries(f == null ? void 0 : f.colors))
              g && (this.colors[p] = g);
          },
          maxParts: () => {
            this.options.maxParts = f.maxParts;
          },
          disableOrientation: () => {
            this.setFieldEnabled(
              "orientationLock",
              !f.disableOrientation
            );
          },
          disablePartName: () => {
            this.setFieldEnabled(
              "name",
              !f.disablePartName
            );
          },
          enableCSVImport: () => {
            this.CSVImportEnabled = f.enableCSVImport;
          },
          locale: () => {
            this.locale = f.locale;
          },
          disableBanding: () => {
            this.setFieldEnabled("banding", !1);
          },
          enableMachining: () => {
            this.setFieldEnabled(
              "machining",
              f.enableMachining ?? !1
            );
          },
          customFields: () => {
            var g;
            if (!Array.isArray(f.customFields) || !((g = f.customFields) != null && g.length)) return;
            const p = [];
            f.customFields.forEach((v, w) => {
              p.push(v), p[w].custom = !0;
              const k = this.getCustomFieldId(v.id);
              p[w].id = k, p[w].fieldMap = "customData." + k, v.type === "checkbox" && (p[w].w = "32px"), v.type === "select" && (p[w].output = v.output ?? "string", p[w].options = v.options);
            }), this.customFieldDefinitions = p, this.inputShapes.forEach((v) => {
              v.customData = f.customFields.reduce((w, k) => {
                const b = this.getCustomFieldId(k.id);
                return w[b] = v.customData[b] || k.default || "", w;
              }, {});
            });
          }
        };
        for (const p in e == null ? void 0 : e.options)
          this.options[p] = e.options[p], p in d && d[p]();
      }
      if (!((t = this == null ? void 0 : this.options) != null && t.disableBanding)) {
        if ([e == null ? void 0 : e.banding, e == null ? void 0 : e.bandingPricing].forEach((d) => {
          d && typeof d != "object" && this.$emit("error", "banding and bandingPricing data must be an object");
        }), e != null && e.banding) {
          for (const g in e.banding) {
            const v = e.banding[g];
            Array.isArray(v) || this.$emit("error", "banding values must be an array");
          }
          const d = Object.keys(e.banding), p = /,/;
          for (let g = 0; g < length; g++)
            p.test(d[g]) && this.$emit("error", "banding keys must not contain commas");
        }
        if (e != null && e.bandingPricing) {
          for (const g in e.bandingPricing) {
            const v = e.bandingPricing[g];
            isNaN(v) && this.$emit("error", "bandingPricing values must be a number");
          }
          const d = Object.keys(e.bandingPricing), p = /,/;
          for (let g = 0; g < length; g++)
            p.test(d[g]) && this.$emit("error", "bandingPricing keys must not contain commas");
        }
        this.bandingChoices = e.banding;
        const f = Object.keys(this.bandingChoices), h = Object.values(this.bandingChoices).flat();
        this.inputShapes.forEach((d) => {
          if (d.removeBandingApartFromBandingOptions(), d.bandingOptions)
            for (const p in d.bandingOptions)
              Object.keys(d.bandingOptions[p]).forEach((v) => {
                f.includes(v) || delete d.bandingOptions[p][v];
              }), f.forEach((v) => {
                var w, k;
                if (!h.length) {
                  Object.keys(this.bandingChoices).includes(v) || delete d.bandingOptions[p][v];
                  return;
                }
                h.includes((k = (w = d.bandingOptions) == null ? void 0 : w[p]) == null ? void 0 : k[v]) || (d.bandingOptions[p][v] = "");
              });
        }), this.inputShapes.forEach((d) => {
          d.removeBandingApartFromBandingOptions();
        }), this.bandingChoices && Object.values(this.bandingChoices).length > 0 ? this.setFieldEnabled("banding", !0) : this.setFieldEnabled("banding", !1);
      }
      if ((n = e == null ? void 0 : e.stock) != null && n.some((f) => f == null ? void 0 : f.material)) {
        const f = Object.values(e.stock.reduce((h, d) => {
          const p = d.material.toUpperCase();
          return h[p] || (h[p] = { name: p, thicknesses: [] }), h[p].thicknesses.includes(d.t) || h[p].thicknesses.push(d.t), h;
        }, {}));
        this.materials = f, this.thicknesses = [], this.bondedThicknesses = [], f.forEach((h) => {
          const d = h.thicknesses;
          for (let p = d.length; p--; ) {
            const g = d[p], v = this.getBondedThicknesses(g);
            if (!v.length)
              return this.thicknesses.push(g);
            d.splice(p, 1), this.addBondedThicknesses(v, h);
          }
        }), this.setFieldEnabled("t", !0), f.length > 1 && this.setFieldEnabled("material", !0);
      }
      !((i = this == null ? void 0 : this.thicknesses) != null && i.length) && !((s = this == null ? void 0 : this.materials) != null && s.length) ? this.setFieldEnabled("t", !1) : this.setFieldEnabled("t", !0), (r = this == null ? void 0 : this.options) != null && r.enableMachining && (this.machiningOptions = e == null ? void 0 : e.machining, ["holes", "hingeHoles"].forEach((f) => {
        var h, d;
        (h = e == null ? void 0 : e.machining) != null && h[f] && (this.machiningOptions[f].enabled = (d = e == null ? void 0 : e.machining) == null ? void 0 : d[f].enabled);
      }), (l = (a = (o = e == null ? void 0 : e.machining) == null ? void 0 : o.corners) == null ? void 0 : a.types) != null && l.length && (this.machiningOptions.corners.enabled = !0, this.machiningOptions.corners.types = (c = (u = e == null ? void 0 : e.machining) == null ? void 0 : u.corners) == null ? void 0 : c.types)), this.loaded = !0, this.$nextTick(() => {
        if (this.visInit === !1) {
          const f = {
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
          eA.call(this, f);
        }
        this.isCreditVisible() || alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      });
    },
    calculate() {
      var e;
      if (this.clearMessage(), (e = this.options) != null && e.maxParts && this.totalInputShapes > this.options.maxParts) {
        this.showMessage(this.$t("The maximum number of parts is") + " " + this.options.maxParts);
        return;
      }
      this.$emit("calculating"), nA.call(this);
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
      return new Fy({
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
      w: t = this.saw.stockType === "linear" ? ((u) => (u = this.inputStock[0]) == null ? void 0 : u.w)() : null,
      t: n = this.thicknesses.length ? this.thicknesses[0] : null,
      q: i = 1,
      material: s = ((c) => (c = this == null ? void 0 : this.materials) == null ? void 0 : c.length)() === 1 ? this.materials[0].name : "",
      name: r = null,
      orientationLock: o = this.options.orientationModel === 2 ? "l" : null,
      bandingOptions: a = null,
      customData: l = null
    } = {}) {
      const f = new Fo({
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
        customData: l
      });
      return this.bandingChoices && Object.keys(this.bandingChoices).forEach((d) => {
        var p, g;
        for (const v in f.bandingOptions)
          (g = (p = f.bandingOptions) == null ? void 0 : p[v]) != null && g[d] || (f.bandingOptions[v][d] = "");
      }), f;
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
      const n = X(e.l), i = X(e.w), s = e.t ? X(e.t) : null, r = new oi({
        id: (t + 1).toString() + ".0",
        name: e != null && e.name ? e.name : `${n}x${i}`,
        l: n,
        w: i,
        t: s,
        saw: new Qn(this.saw),
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
      return tA.call(this, !1);
    },
    createShapeList() {
      var t, n;
      const e = [];
      for (let i = 0; i < this.inputShapes.length; i++) {
        const s = this.inputShapes[i];
        if (s.convertBandingOptionsToBanding(), (t = s == null ? void 0 : s.issues) != null && t.length && e.push(...s.issues.map((o) => this.$t("Part") + ` ${i + 1}: ${o}`)), !s.l || !s.w || !s.q) continue;
        const r = new bn(xO({
          id: (i + 1).toString() + ".0",
          l: X(s == null ? void 0 : s.l),
          w: X(s == null ? void 0 : s.w),
          t: s != null && s.t ? X(s.t) : null,
          material: s != null && s.material ? s.material : null,
          q: typeof s.q != "number" ? parseInt(s.q) : s.q,
          name: s.name,
          orientationLock: s.orientationLock,
          banding: s.banding,
          bandingType: s.bandingType,
          machining: s.machining,
          customData: s.customData
        }, this.options.orientationModel));
        this.shapeList.push(r), (n = r == null ? void 0 : r.issues) != null && n.length && e.push(...r.issues);
      }
      return this.updatePartQuantitiesBasedOnThickness(), e;
    },
    /* toggleShapeOrientation( shape )
    		{
    			let orientations = ['', 'l', 'w'];
    
    			//cater for orientation model
    			if ( this.options.orientationModel === 2 ) orientations = ['', 'l'];
    
    			let index = orientations.findIndex( ( o ) => o === shape.orientationLock );
    			index++;
    			if ( index > 2 ) index = 0;
    			shape.orientationLock = orientations[index];
    		}, */
    refresh() {
      this.refreshStock(), this.refreshShapes();
    },
    refreshStock() {
      sA.call(this);
    },
    refreshShapes() {
      iA.call(this, this.uniqueShapes.length);
    },
    toggleWidget(e, t = null) {
      X2.call(this, e, t);
    },
    clearSelection() {
      rA.call(this);
    },
    showStock(e) {
      oA.call(this, e);
    },
    updateAllBanding(e, t, n) {
      n.setAllBandingOptions(e, t);
    },
    deleteBanding(e) {
      e.removeBandingApartFromBandingOptions(), Object.keys(this.bandingChoices).forEach((n) => {
        for (const i in e.bandingOptions)
          e.bandingOptions[i][n] = "";
      });
    },
    getBandingPrice(e) {
      const t = Object.values(e || {});
      if (!Array.isArray(t) || !t.every((i) => i) || !this.$parent.findBandingPrice || typeof this.$parent.findBandingPrice != "function" || !this.$parent.formatPrice || typeof this.$parent.formatPrice != "function")
        return "";
      const n = this.$parent.findBandingPrice(t);
      return this.$parent.formatPrice(n, this.locale);
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
        return t ? n.map((i) => X(i)) : n;
      }
      return [];
    },
    getShapeStockGrainSummary(e) {
      const t = e.material, n = e.t, i = this.inputStock.filter((r) => r.material === t && r.t === n);
      return B2(i);
    },
    //this is for bonded thicknesses
    updatePartQuantitiesBasedOnThickness() {
      this.thicknesses.length && this.shapeList.forEach((e) => {
        if (!e.t) return;
        const t = this.thicknesses.findIndex((s) => X(s) === e.t), n = this.bondedThicknesses.find((s) => s.includes(t));
        if (!n)
          return;
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
      return e ? bs(e).toLowerCase() : null;
    }
  }
};
function Ud(e) {
  const t = e;
  t.__i18n = t.__i18n || [], t.__i18n.push({
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
const YO = { key: 1 }, XO = {
  key: 0,
  class: "row table-heading"
}, JO = {
  key: 0,
  class: "cell delete"
}, QO = { class: "cell" }, ZO = ["onClick"], eP = {
  key: 0,
  class: "cell"
}, tP = ["aria-label", "onClick"], nP = {
  key: 0,
  class: "inputs"
}, iP = ["onUpdate:modelValue", "onChange"], sP = ["value"], rP = { class: "banding-price" }, oP = ["aria-label", "onClick"], aP = { class: "button-wrapper main" }, lP = ["aria-label"], cP = ["aria-label", "disabled"], uP = ["aria-label"], fP = { id: "part-count" }, hP = {
  key: 3,
  id: "messages"
}, dP = {
  key: 0,
  class: "heading"
}, pP = { class: "content" }, gP = {
  key: 4,
  id: "progress"
}, mP = {
  id: "smartcut-svg-wrapper",
  class: "svg-wrapper production"
}, yP = {
  key: 0,
  id: "stack"
};
function bP(e, t, n, i, s, r) {
  var p, g, v, w, k, b, C;
  const o = En("Machining"), a = En("Spinner"), l = En("font-awesome-icon"), u = En("InputField"), c = En("OrientationButton"), f = En("BandingButton"), h = En("ImportCSV"), d = En("StockNavigation");
  return te(), ae(Be, null, [
    s.machiningEnabled ? (te(), on(o, {
      key: 0,
      shape: s.currentInputShape,
      options: s.machiningOptions,
      onClose: r.closeMachining
    }, null, 8, ["shape", "options", "onClose"])) : Ne("", !0),
    s.loaded ? Ne("", !0) : (te(), ae("div", YO, [
      ve(a, {
        size: 50,
        "show-number": !1
      })
    ])),
    s.loaded ? (te(), ae("div", {
      key: 2,
      id: "smartcut-checkout",
      class: Gt({ fullscreen: s.isFullScreen })
    }, [
      s.canGoFullScreen ? (te(), ae("div", {
        key: 0,
        id: "smartcut-full-screen",
        class: "icon-left",
        onClick: t[0] || (t[0] = (T) => r.toggleFullScreen())
      }, [
        ve(l, { icon: ["fasr", "expand"] }),
        Ns(" " + Ge(i.t("full screen")), 1)
      ])) : Ne("", !0),
      (g = (p = s.user) == null ? void 0 : p.api) != null && g.whiteLabel ? Ne("", !0) : (te(), ae("div", {
        key: 1,
        id: "credit",
        style: He(s.creditStyles)
      }, [
        se("a", {
          title: "SmartCut | Cut list optimization software",
          style: He(s.creditLinkStyles),
          target: "_blank",
          href: "https://smartcut.dev/"
        }, Ge(i.t("Powered by SmartCut")), 5)
      ], 4)),
      se("div", {
        id: "part-input",
        class: "inputs no-margin-top grid-table",
        style: He({ "grid-template-columns": r.partColumnsStyle })
      }, [
        s.inputShapes.length ? (te(), ae("div", XO, [
          t[4] || (t[4] = se("div", { class: "cell id" }, null, -1)),
          (te(!0), ae(Be, null, Tn(r.relevantFieldDefinitions, (T) => (te(), ae("div", {
            key: T.id,
            class: Gt(["cell", { center: ["orientationLock", "banding", "machining"].includes(T.id) || T.type === "checkbox" }])
          }, Ge(T.label), 3))), 128)),
          s.inputShapes.length > 1 ? (te(), ae("div", JO)) : Ne("", !0)
        ])) : Ne("", !0),
        (te(!0), ae(Be, null, Tn(s.inputShapes, (T, M) => (te(), ae("div", {
          key: M,
          class: "row"
        }, [
          se("div", QO, [
            se("div", {
              class: "id",
              style: He({
                background: s.colors.partA,
                color: s.colors.text
              })
            }, Ge(M + 1), 5)
          ]),
          (te(!0), ae(Be, null, Tn(r.relevantFieldDefinitions, (P) => (te(), ae("div", {
            key: P.fieldMap,
            class: Gt(["cell", { center: ["orientationLock", "banding", "machining"].includes(P.id) || P.type === "checkbox" }])
          }, [
            ["orientationLock", "banding", "machining"].includes(P.id) ? P.id === "orientationLock" ? (te(), on(c, {
              key: 1,
              rectangle: T,
              "stock-grain": r.getShapeStockGrainSummary(T),
              "button-background": s.colors.button,
              "icon-color": s.colors.buttonText,
              "orientation-model": s.options.orientationModel,
              onUpdateOrientation: (D) => T.orientationLock = D
            }, null, 8, ["rectangle", "stock-grain", "button-background", "icon-color", "orientation-model", "onUpdateOrientation"])) : P.id === "banding" ? (te(), on(f, {
              key: 2,
              "input-shape": T,
              "stock-grain": r.getShapeStockGrainSummary(T),
              open: s.bandingEnabled === M,
              "orientation-model": s.options.orientationModel,
              onClicked: (D) => r.openBanding(T)
            }, null, 8, ["input-shape", "stock-grain", "open", "orientation-model", "onClicked"])) : P.fieldMap === "machining" && s.canGoFullScreen ? (te(), ae("button", {
              key: 3,
              type: "button",
              class: Gt(["machining-button", { disabled: T.readonly, "has-machining": r.hasMachining(T) }]),
              onClick: (D) => r.openMachining(T)
            }, [
              ve(l, { icon: ["fass", "hammer"] })
            ], 10, ZO)) : Ne("", !0) : (te(), on(u, {
              key: 0,
              id: P.id + "-" + M,
              focus: s.options.enableFocus && M === s.inputShapes.length - 1 && P.id === "l",
              type: P.type,
              output: P.output,
              label: P.label,
              units: n.units,
              placeholder: P == null ? void 0 : P.placeholder,
              options: P.id === "t" ? r.getShapeThicknessOptions(T) : P == null ? void 0 : P.options,
              "true-value": P == null ? void 0 : P.trueValue,
              "false-value": P == null ? void 0 : P.falseValue,
              default: P == null ? void 0 : P.default,
              min: typeof (P == null ? void 0 : P.min) == "number" ? P.min : null,
              max: typeof (P == null ? void 0 : P.max) == "number" ? P.max : null,
              custom: P == null ? void 0 : P.custom,
              value: r.getNestedValue(T, P.fieldMap),
              text: {
                delete: i.t("delete"),
                select: i.t("select")
              },
              onUpdate: (D) => r.setNestedValue(T, P.fieldMap, D)
            }, null, 8, ["id", "focus", "type", "output", "label", "units", "placeholder", "options", "true-value", "false-value", "default", "min", "max", "custom", "value", "text", "onUpdate"]))
          ], 2))), 128)),
          s.inputShapes.length > 1 ? (te(), ae("div", eP, [
            se("button", {
              type: "button",
              class: "delete",
              "aria-label": i.t("remove part"),
              onClick: (P) => r.removeShape(M)
            }, [
              ve(l, { icon: ["fass", "trash"] })
            ], 8, tP)
          ])) : Ne("", !0),
          s.bandingEnabled === M && Object.values(s.bandingChoices).length > 0 ? (te(), ae("div", {
            key: 1,
            class: "group banding",
            style: He({ "grid-column-end": "span " + (r.partColumns + 1) })
          }, [
            Object.values(s.bandingChoices).length === 1 && s.bandingChoices[Object.keys(s.bandingChoices)[0]].length === 0 ? (te(), ae("div", nP, [
              ve(u, {
                id: "banding-all-" + M,
                type: "checkbox",
                label: i.t("all"),
                "true-value": !0,
                "false-value": "",
                value: T.bandingOptions.all[Object.keys(s.bandingChoices)[0]],
                onUpdate: (P) => r.updateAllBanding(Object.keys(s.bandingChoices)[0], P, T)
              }, null, 8, ["id", "label", "value", "onUpdate"]),
              (te(), ae(Be, null, Tn(["y1", "y2", "x1", "x2"], (P) => ve(u, {
                key: P,
                id: "banding-" + P + "-" + M,
                type: "checkbox",
                label: i.t(s.userFriendlyFieldMap[P]),
                "true-value": !0,
                "false-value": "",
                value: T.bandingOptions[P][Object.keys(s.bandingChoices)[0]],
                onUpdate: (D) => T.bandingOptions[P][Object.keys(s.bandingChoices)[0]] = D
              }, null, 8, ["id", "label", "value", "onUpdate"])), 64))
            ])) : (te(), ae("div", {
              key: 1,
              class: "grid",
              style: He({
                "grid-template-columns": r.bandingColumnsStyle
              })
            }, [
              se("div", null, Ge(i.t("all")), 1),
              (te(!0), ae(Be, null, Tn(s.bandingChoices, (P, D, z) => pl((te(), ae("select", {
                key: D + z.toString(),
                "onUpdate:modelValue": (H) => T.bandingOptions.all[D] = H,
                onChange: (H) => r.updateAllBanding(D, T.bandingOptions.all[D], T)
              }, [
                t[5] || (t[5] = se("option", { value: "" }, " ✘ ", -1)),
                (te(!0), ae(Be, null, Tn(P, (H, G) => (te(), ae("option", {
                  key: G,
                  value: H
                }, Ge(H), 9, sP))), 128))
              ], 40, iP)), [
                [t1, T.bandingOptions.all[D]]
              ])), 128)),
              t[6] || (t[6] = se("div", null, null, -1)),
              (te(), ae(Be, null, Tn(["y1", "y2", "x1", "x2"], (P) => (te(), ae(Be, { key: P }, [
                se("div", null, Ge(i.t(s.userFriendlyFieldMap[P])), 1),
                (te(!0), ae(Be, null, Tn(s.bandingChoices, (D, z, H) => (te(), on(u, {
                  id: "banding-" + z + "-" + P + "-" + H + "-" + M,
                  key: P + z + H.toString(),
                  type: "select",
                  options: D.map((G) => ({
                    value: G,
                    label: G
                  })),
                  text: { select: "✘" },
                  "select-first-option-disabled": !1,
                  value: T.bandingOptions[P][z],
                  onUpdate: (G) => T.bandingOptions[P][z] = G
                }, null, 8, ["id", "options", "value", "onUpdate"]))), 128)),
                se("div", rP, Ge(r.getBandingPrice(T.bandingOptions[P])), 1)
              ], 64))), 64))
            ], 4)),
            se("button", {
              type: "button",
              class: "delete icon-left",
              "aria-label": i.t("delete banding"),
              onClick: (P) => r.deleteBanding(T)
            }, [
              ve(l, { icon: ["fass", "trash"] }),
              Ns(" " + Ge(i.t("delete banding")), 1)
            ], 8, oP)
          ], 4)) : Ne("", !0)
        ]))), 128))
      ], 4),
      se("div", aP, [
        se("button", {
          type: "button",
          "aria-label": i.t("add part"),
          style: He({ background: s.colors.button, color: s.colors.buttonText }),
          class: "add c-btn icon-left",
          onClick: t[1] || (t[1] = (T) => r.addInputShape(1))
        }, [
          ve(l, { icon: ["fasr", "plus-large"] }),
          Ns(" " + Ge(i.t("add part")), 1)
        ], 12, lP),
        se("button", {
          class: "c-btn calculate icon-left",
          type: "button",
          "aria-label": i.t("calculate"),
          style: He({
            background: s.colors.button,
            color: s.colors.buttonText
          }),
          disabled: !((v = s.inputStock) != null && v.length) || s.thinking,
          onClick: t[2] || (t[2] = (T) => r.calculate())
        }, [
          ve(l, { icon: ["fass", "calculator"] }),
          Ns(Ge(i.t("calculate")), 1)
        ], 12, cP),
        se("button", {
          type: "button",
          class: "c-btn clear",
          "aria-label": i.t("clear"),
          onClick: t[3] || (t[3] = (T) => r.clear())
        }, [
          ve(l, { icon: ["fass", "trash"] })
        ], 8, uP),
        se("div", fP, Ge(r.totalInputShapes) + Ge((w = s.options) != null && w.maxParts ? "/" + s.options.maxParts : ""), 1)
      ]),
      s.CSVImportEnabled ? (te(), on(h, {
        key: 2,
        ref: "import",
        units: n.units,
        "custom-fields": s.customFieldDefinitions,
        "banding-choices": s.bandingChoices,
        options: {
          locale: s.options.locale
        },
        onImport: r.importParts
      }, null, 8, ["units", "custom-fields", "banding-choices", "options", "onImport"])) : Ne("", !0),
      s.messageVisible ? (te(), ae("div", hP, [
        s.messageHeading ? (te(), ae("div", dP, Ge(s.messageHeading), 1)) : Ne("", !0),
        se("pre", pP, Ge(s.messageContent), 1)
      ])) : Ne("", !0),
      (s.options.showDiagram ? s.thinking && !s.progress.complete : s.thinking || s.progress.complete) ? (te(), ae("div", gP, [
        ve(a, {
          size: 50,
          number: s.progress.shapeCount,
          complete: s.progress.complete,
          "show-number": s.options.showProgressNumber
        }, null, 8, ["number", "complete", "show-number"])
      ])) : Ne("", !0),
      pl(se("div", mP, [
        ((k = r.activeStock) == null ? void 0 : k.type) !== "roll" ? (te(), ae("div", yP, Ge((b = r.activeStock) != null && b.stack ? (C = r.activeStock) == null ? void 0 : C.stack : 1), 1)) : Ne("", !0)
      ], 512), [
        [xg, s.options.showDiagram && s.jobId > 0]
      ]),
      s.options.showDiagram && s.visInit && r.usedStock.length > 1 && s.jobId > 0 && s.progress.complete ? (te(), on(d, {
        key: 5,
        ref: "stockNavigation",
        "active-stock-id": s.activeStockId,
        "stock-list": r.stackedStock,
        "stock-count": s.stockList.length,
        "viewport-width": s.viewportWidth,
        onShowStock: r.showStock
      }, null, 8, ["active-stock-id", "stock-list", "stock-count", "viewport-width", "onShowStock"])) : Ne("", !0)
    ], 2)) : Ne("", !0)
  ], 64);
}
typeof Ud == "function" && Ud(tb);
const wP = /* @__PURE__ */ Fi(tb, [["render", bP], ["__scopeId", "data-v-27e8e759"]]), vP = {
  name: "Wordpress",
  //needs to be Wordpress not WordPress
  components: {
    CheckoutCalculator: wP
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
    var t, n, i;
    console.log("Launching WordPress checkout..."), this.bandingData = ((t = window.smartcutConfig) == null ? void 0 : t.banding_data) ?? null, this.machiningPricing = ((n = window.smartcutConfig) == null ? void 0 : n.machining_pricing) ?? null, this.variations = ((i = window.smartcutConfig) == null ? void 0 : i.variations) ?? null, this.cacheElements(), this.cacheInputFields(), this.configureProduct(window.smartcutConfig), this.configurePricing(window.smartcutConfig), this.initCheckout(), this.configureStock(), jQuery(".variations_form").on("reset_data", () => {
      this.disableCutToSize();
    }), jQuery(".variations_form").on("found_variation", (s, r) => {
      var a, l, u;
      this.reset(), this.log(["variation selected", r.attributes]), this.stock = [];
      const o = (a = r == null ? void 0 : r.attributes) == null ? void 0 : a.attribute_thickness;
      if (this.product.selected_thickness = o, this.product.multiple_sizes) {
        const c = this.getSizes(r);
        if (!c)
          return this.disableCutToSize(), this.el.cart_button.disabled = !0, this.el.quantity.readOnly = !0, this.error("The size of this multiple size product could not be found");
        Array.isArray(c) ? this.enableCutToSize() : this.isFullSheetSize(c) ? (this.disableCutToSize(), this.enableFullSheet(), this.el.quantity.style.display = "inline-block") : (this.enableCutToSize(), this.el.quantity.style.display = "none"), this.log(["variation found", c, o]);
        let f;
        if ((l = this.variations) != null && l.length && this.product.selected_thickness) {
          if (Array.isArray(c)) {
            const h = this.variations.find((d) => d.attributes.thickness === this.product.selected_thickness);
            if (!h)
              return this.error(`variation not found for thickness ${this.product.selected_thickness}`);
            f = c.map((d) => ({
              size: d,
              l: d.split("x")[0],
              w: d.split("x")[1],
              t: this.product.selected_thickness,
              price: h == null ? void 0 : h.price
            }));
          } else
            f = this.variations.filter((h) => {
              var d, p;
              return /\d+x\d+/.test((d = h == null ? void 0 : h.attributes) == null ? void 0 : d.size) ? this.product.selected_thickness === ((p = h == null ? void 0 : h.attributes) == null ? void 0 : p.thickness) : !1;
            }).map((h) => {
              var d, p, g;
              return {
                size: (d = h == null ? void 0 : h.attributes) == null ? void 0 : d.size,
                l: (p = h == null ? void 0 : h.attributes) == null ? void 0 : p.size.split("x")[0],
                w: (g = h == null ? void 0 : h.attributes) == null ? void 0 : g.size.split("x")[1],
                t: this.product.selected_thickness,
                price: h == null ? void 0 : h.price
                //the base price entered by the admin
              };
            });
          f.forEach((h) => {
            const d = this.createStock(
              h.l,
              h.w,
              h.t,
              h.price,
              r == null ? void 0 : r.attributes
            );
            this.stock.push(d);
          });
        }
      } else {
        this.el.quantity.style.display = "inline-block";
        const c = this.variations.find((h) => h.attributes.thickness === this.product.selected_thickness);
        if (!c)
          return this.error(`variation not found for thickness ${this.product.selected_thickness}`);
        const f = (u = r == null ? void 0 : r.attributes) == null ? void 0 : u.attribute_thickness;
        this.stock.push(this.createStock(
          this.product.l,
          this.product.w,
          f,
          c.price,
          r == null ? void 0 : r.attributes
        )), this.enableCutToSize();
      }
    }), [
      "div.quantity > input.plus",
      "div.quantity > input.minus",
      "div.quantity .qty-plus",
      "div.quantity .qty-minus"
    ].forEach((s) => {
      const r = document.querySelector(s);
      r && (r.style.display = "none");
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
      var s, r, o, a, l, u, c, f, h, d, p, g, v, w, k, b, C, T, M, P;
      if (!(window != null && window.smartcutConfig)) {
        console.error("SmartCut config not found");
        return;
      }
      for (const D in window.smartcutConfig.settings_fields)
        this.settings[D] = this.parseValue(
          window.smartcutConfig.settings[D],
          window.smartcutConfig.settings_fields[D]
        );
      const e = this.getBandingOptions((s = window.smartcutConfig) == null ? void 0 : s.banding_data), t = {
        debug: this.settings.debug,
        units: this.settings.units,
        locale: window.smartcutConfig.locale,
        //saw settings
        bladeWidth: this.settings.blade_width,
        stockType: this.settings.stock_type,
        cutPreference: this.settings.cut_preference,
        stackHeight: this.settings.stack_height,
        maxParts: this.settings.max_parts ?? null,
        //disable default options
        disableBanding: this.settings.disable_banding,
        disableOrientation: this.settings.disable_orientation,
        disablePartName: this.settings.disable_part_name,
        enableCSVImport: this.settings.enable_import,
        //diagram
        showDiagram: !this.settings.hide_diagram,
        showProgressNumber: this.settings.pricing_strategy !== "part_area",
        enableMachining: this.settings.enable_machining,
        disableClick: !1,
        orientationModel: 0,
        decimalPlaces: 2,
        //colors
        colors: {
          partA: (r = this.settings) != null && r.part_a_color ? (o = this.settings) == null ? void 0 : o.part_a_color : "#1d9bc4",
          partB: (a = this.settings) != null && a.part_b_color ? (l = this.settings) == null ? void 0 : l.part_b_color : "#065d7a",
          partHover: (u = this.settings) != null && u.part_hover_color ? (c = this.settings) == null ? void 0 : c.part_hover_color : "#f8b029",
          partSelected: (f = this.settings) != null && f.part_selected_color ? (h = this.settings) == null ? void 0 : h.part_selected_color : "#5bc85b",
          stock: (d = this.settings) != null && d.stock_color ? (p = this.settings) == null ? void 0 : p.stock_color : "#ffd166",
          button: (g = this.settings) != null && g.button_color ? (v = this.settings) == null ? void 0 : v.button_color : "#118ab2",
          buttonText: (w = this.settings) != null && w.button_text_color ? (k = this.settings) == null ? void 0 : k.button_text_color : "#ffffff",
          text: (b = this.settings) != null && b.text_color ? (C = this.settings) == null ? void 0 : C.text_color : "#ffffff"
        }
      }, n = {
        units: "decimal",
        sides: {
          enabled: this.settings.machining_sides
        },
        holes: {
          enabled: this.settings.machining_holes,
          defaultDiameter: this.settings.machining_holes_default_diameter,
          diameters: this.settings.machining_holes_diameters.split(",").map((D) => D.trim()).filter((D) => D),
          minDiameter: this.settings.machining_holes_min_diameter,
          maxDiameter: this.settings.machining_holes_max_diameter,
          enableDepth: this.settings.machining_holes_depth,
          depths: this.settings.machining_holes_depths.split(",").map((D) => D.trim()).filter((D) => D),
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
          ].filter((D) => D),
          minValue: this.settings.machining_corners_min_value,
          maxValue: this.settings.machining_corners_max_value,
          enableBanding: this.settings.machining_corners_enable_banding
        },
        banding: {
          enabled: !!(!this.settings.disable_banding && ((M = (T = window.smartcutConfig) == null ? void 0 : T.banding_data) != null && M.length)),
          enableCorners: this.settings.machining_corners_enable_banding,
          types: window.smartcutConfig.banding_data ? Object.values(window.smartcutConfig.banding_data).map((D) => D.name) : [],
          enableTypes: !!((P = window.smartcutConfig) != null && P.banding_data)
        }
      }, i = is.call(this, "calculator");
      i && i.init({
        stock: this.stock,
        banding: e,
        machining: n,
        options: t,
        type: this.product.type,
        variations: this.variations ?? null
      });
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
      if (this.el.intro_text = document.getElementById("smartcut-intro-text"), this.el.pricing_table = document.getElementById("smartcut-pricing-table"), this.el.offcuts = document.getElementById("include_offcuts_field"), this.el.banding_key = document.getElementById("smartcut-banding-key"), this.el.banding_total_price = document.querySelector("#smartcut-banding-total bdi .smartcut-price-selector"), this.el.cut_length_price = document.querySelector("#smartcut-cut-length-total bdi .smartcut-price-selector"), this.el.per_part_price = document.querySelector("#smartcut-per-part-total bdi .smartcut-price-selector"), this.el.surcharge_price = document.querySelector("#smartcut-surcharge-total bdi .smartcut-price-selector"), this.el.machining_total_price = document.querySelector("#smartcut-machining-total bdi .smartcut-price-selector"), this.el.quantity = document.querySelector(".smartcut-stock-quantity"), this.el.cart_button = document.querySelector(".single_add_to_cart_button"), !this.el.quantity)
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
    formatBandingKey(e) {
      return du(bs(e), 100).replace("|", "_");
    },
    //map the banding data into options and ensure the keys are formatted correctly
    getBandingOptions(e) {
      if (!e) return null;
      const t = {};
      for (const n of Object.values(e)) {
        const i = n == null ? void 0 : n.options;
        if (!(n == null ? void 0 : n.variations)) {
          "simple" in t ? t.simple.push(...Object.values(i).flat()) : t.simple = Object.values(i).flat();
          continue;
        }
        for (const [r, o] of Object.entries(i))
          t[r] = Array.isArray(o) ? o : [o];
      }
      for (const [n, i] of Object.entries(t))
        t[n] = i.map((s) => this.formatBandingKey(s));
      return t;
    },
    //find the price of a banding option based on an array of options
    findBandingPrice(e) {
      const n = Object.values(this.bandingData).map((i) => i != null && i.variations ? Object.values(i.variations) : i).flat().find((i) => {
        const s = Object.values(i.options);
        return s ? e.every((r, o) => {
          const a = s == null ? void 0 : s[o];
          return a ? this.formatBandingKey(a) === e[o] : !1;
        }) : !1;
      });
      return n ? n.price : null;
    },
    //get the total price of the banding based on the bandingLengthByType metadata
    getTotalBandingPrice(e) {
      var n;
      let t = 0;
      if (typeof e == "object") {
        for (let [i, s] of Object.entries(e)) {
          typeof s == "string" && (s = parseFloat(s));
          const r = i.split("|"), o = this.findBandingPrice(r);
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
    isBandingEnabled() {
      var e;
      return !(((e = this.settings) == null ? void 0 : e.disable_banding) === !0 || !this.bandingData || !Object.values(this.bandingData).length);
    },
    isMachiningEnabled() {
      return this.settings.enable_machining === !0;
    },
    isSurchargeEnabled() {
      var e, t;
      return !(((e = this.settings) == null ? void 0 : e.surcharge_type) === "none" || !((t = this == null ? void 0 : this.settings) != null && t.surcharge) || this.settings.surcharge === "0.00");
    },
    isPricingTableNeeded() {
      return !!(this.settings.pricing_strategy === "full_sheet_plus_cut_length" || this.settings.pricing_strategy === "full_sheet_plus_num_parts" || this.isSurchargeEnabled() || this.isBandingEnabled() || this.isMachiningEnabled());
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
      var c, f, h, d;
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
            const p = this.settings.units === "fraction" ? e.metadata.totalPartArea / 144 : e.metadata.totalPartArea / 1e6;
            this.log([
              `part area in square ${this.settings.units === "fraction" ? "feet" : "meters"}`,
              p
            ]), this.el.quantity.value = p.toFixed(2), this.el.cart_button.disabled = !1;
          }
          break;
        case "cut_length":
          {
            this.log([
              "calculating cost by cut length in feet / meters"
            ]);
            const p = e.metadata.totalCutLength / (this.settings.units === "fraction" ? 12 : 1e3);
            this.el.quantity.value = p.toFixed(2), this.el.cart_button.disabled = !1;
          }
          break;
        case "full_sheet_plus_cut_length":
          {
            this.log([
              "calculating cost by full sheet plus cut length"
            ]), t ? (this.el.quantity.style.display = "inline-block", this.el.quantity.value = e.metadata.totalUsedStock) : (this.el.quantity.value = 1, this.el.quantity.style.display = "none");
            const g = e.metadata.totalCutLength / (this.settings.units === "fraction" ? 12 : 1e3) * this.settings.cut_length_price;
            this.el.cut_length_price && (this.el.cut_length_price.innerText = this.formatPrice(g)), this.inputs["smartcut-cut-length-price"].value = g, n += g, this.el.cart_button.disabled = !1;
          }
          break;
        case "full_sheet_plus_num_parts":
          {
            this.log([
              "calculating cost by full sheet plus number of parts"
            ]), t ? (this.el.quantity.style.display = "inline-block", this.el.quantity.value = e.metadata.totalUsedStock) : (this.el.quantity.value = 1, this.el.quantity.style.display = "none");
            const p = e.metadata.totalPartsProduced * this.settings.per_part_price;
            this.el.per_part_price && (this.el.per_part_price.innerText = this.formatPrice(p)), this.inputs["smartcut-per-part-price"].value = p, n += p, this.el.cart_button.disabled = !1;
          }
          break;
      }
      if (!t) {
        if (!e.metadata.totalStockCost)
          return this.error("Total stock cost not returned for a multiple size product");
        const p = parseFloat(e.metadata.totalStockCost);
        this.log(["total price", p]), document.getElementById("smartcut-custom-price").value = p.toString(), n += p;
      }
      if (this.isBandingEnabled()) {
        const p = this.getTotalBandingPrice(e.metadata.bandingLengthByType);
        this.inputs["smartcut-banding-price"].value = p, this.el.banding_total_price && (this.el.banding_total_price.innerText = this.formatPrice(p)), n += p;
      }
      if (this.isMachiningEnabled()) {
        const p = this.getTotalMachiningPrice(e);
        this.inputs["smartcut-machining-price"].value = p, this.el.machining_total_price && (this.el.machining_total_price.innerText = this.formatPrice(p)), n += p;
      }
      if (this.isSurchargeEnabled() && (c = this.settings) != null && c.surcharge) {
        let p = 0;
        ((f = this.settings) == null ? void 0 : f.surcharge_type) === "per_sheet" ? p = parseFloat((h = this.settings) == null ? void 0 : h.surcharge) * parseFloat(e.metadata.totalUsedStock) : p = parseFloat((d = this.settings) == null ? void 0 : d.surcharge), this.inputs["smartcut-cut-to-size-surcharge"].value = p, this.el.surcharge_price && (this.el.surcharge_price.innerText = this.formatPrice(p)), this.log(["added surcharge", p]), n += p;
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
      }, r = Object.keys(s), o = r.filter((p) => p in this.inputs);
      o.length !== r.length && console.error(
        "Some requried hidden fields are missing",
        r.join(),
        o.join()
      ), this.inputs["smartcut-job-id"].value = e == null ? void 0 : e.jobId;
      const a = e == null ? void 0 : e.parts.map((p) => `${p == null ? void 0 : p.l}x${p == null ? void 0 : p.w} [${p == null ? void 0 : p.q}]`).join(", ");
      this.inputs["smartcut-dimensions"].value = a;
      let l = "";
      l = e.stock.map((p) => `${p == null ? void 0 : p.l}x${p == null ? void 0 : p.w}${p != null && p.t ? "x" + p.t : ""} [${p == null ? void 0 : p.q}]`).join(", "), this.inputs["smartcut-stock-summary"].value = l, Object.entries(s).filter(([, p]) => p !== null).map(([p]) => p).forEach((p) => {
        this.inputs[p].value = e.metadata[s[p]];
      });
    }
  }
};
function _P(e, t, n, i, s, r) {
  const o = En("CheckoutCalculator");
  return te(), on(o, {
    ref: "calculator",
    debug: s.debug,
    stock: s.stock,
    units: r.smartcutConfigUnits,
    onLog: r.log,
    onError: r.error,
    onDebug: r.toggleDebug,
    onResult: r.result
  }, null, 8, ["debug", "stock", "units", "onLog", "onError", "onDebug", "onResult"]);
}
const xP = /* @__PURE__ */ Fi(vP, [["render", _P]]), SP = /* @__PURE__ */ Jo(() => import("./Vanilla-D3B9Qvhx.js")), kP = /* @__PURE__ */ Di({
  name: "Launch",
  components: {
    Wordpress: xP,
    Vanilla: SP
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
function CP(e, t, n, i, s, r) {
  return te(), on(V0(e.currentComponent), { ref: "checkout" }, null, 512);
}
const EP = /* @__PURE__ */ Fi(kP, [["render", CP]]), Wd = () => {
};
let cf = {}, nb = {}, ib = null, sb = {
  mark: Wd,
  measure: Wd
};
try {
  typeof window < "u" && (cf = window), typeof document < "u" && (nb = document), typeof MutationObserver < "u" && (ib = MutationObserver), typeof performance < "u" && (sb = performance);
} catch {
}
const {
  userAgent: zd = ""
} = cf.navigator || {}, Zn = cf, Me = nb, Vd = ib, qr = sb;
Zn.document;
const Bn = !!Me.documentElement && !!Me.head && typeof Me.addEventListener == "function" && typeof Me.createElement == "function", rb = ~zd.indexOf("MSIE") || ~zd.indexOf("Trident/");
var Le = "classic", ob = "duotone", Ot = "sharp", Pt = "sharp-duotone", TP = [Le, ob, Ot, Pt], AP = {
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
}, Gd = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, OP = ["kit"], PP = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/, NP = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, IP = {
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
}, MP = {
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
}, LP = {
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
}, DP = {
  classic: ["fas", "far", "fal", "fat"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds"]
}, RP = {
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
}, FP = {
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
}, ab = {
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
}, $P = ["solid", "regular", "light", "thin", "duotone", "brands"], lb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], BP = lb.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), $s = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, jP = [...Object.keys(DP), ...$P, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", $s.GROUP, $s.SWAP_OPACITY, $s.PRIMARY, $s.SECONDARY].concat(lb.map((e) => "".concat(e, "x"))).concat(BP.map((e) => "w-".concat(e))), qP = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, UP = {
  kit: {
    "fa-kit": "fak"
  },
  "kit-duotone": {
    "fa-kit-duotone": "fakd"
  }
}, WP = {
  kit: {
    fak: "fa-kit"
  },
  "kit-duotone": {
    fakd: "fa-kit-duotone"
  }
}, Hd = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
};
const Dn = "___FONT_AWESOME___", cc = 16, cb = "fa", ub = "svg-inline--fa", Ii = "data-fa-i2svg", uc = "data-fa-pseudo-element", zP = "data-fa-pseudo-element-pending", uf = "data-prefix", ff = "data-icon", Kd = "fontawesome-i2svg", VP = "async", GP = ["HTML", "HEAD", "STYLE", "SCRIPT"], fb = (() => {
  try {
    return !0;
  } catch {
    return !1;
  }
})(), hb = [Le, Ot, Pt];
function vr(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[Le];
    }
  });
}
const db = {
  ...ab
};
db[Le] = {
  ...ab[Le],
  ...Gd.kit,
  ...Gd["kit-duotone"]
};
const xi = vr(db), fc = {
  ...FP
};
fc[Le] = {
  ...fc[Le],
  ...Hd.kit,
  ...Hd["kit-duotone"]
};
const rr = vr(fc), hc = {
  ...RP
};
hc[Le] = {
  ...hc[Le],
  ...WP.kit
};
const Si = vr(hc), dc = {
  ...LP
};
dc[Le] = {
  ...dc[Le],
  ...UP.kit
};
const HP = vr(dc), KP = PP, pb = "fa-layers-text", YP = NP, XP = {
  ...AP
};
vr(XP);
const JP = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], sl = $s, ps = /* @__PURE__ */ new Set();
Object.keys(rr[Le]).map(ps.add.bind(ps));
Object.keys(rr[Ot]).map(ps.add.bind(ps));
Object.keys(rr[Pt]).map(ps.add.bind(ps));
const QP = [...OP, ...jP], Hs = Zn.FontAwesomeConfig || {};
function ZP(e) {
  var t = Me.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function eN(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
Me && typeof Me.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, i] = t;
  const s = eN(ZP(n));
  s != null && (Hs[i] = s);
});
const gb = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: cb,
  replacementClass: ub,
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
Hs.familyPrefix && (Hs.cssPrefix = Hs.familyPrefix);
const gs = {
  ...gb,
  ...Hs
};
gs.autoReplaceSvg || (gs.observeMutations = !1);
const Z = {};
Object.keys(gb).forEach((e) => {
  Object.defineProperty(Z, e, {
    enumerable: !0,
    set: function(t) {
      gs[e] = t, Ks.forEach((n) => n(Z));
    },
    get: function() {
      return gs[e];
    }
  });
});
Object.defineProperty(Z, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    gs.cssPrefix = e, Ks.forEach((t) => t(Z));
  },
  get: function() {
    return gs.cssPrefix;
  }
});
Zn.FontAwesomeConfig = Z;
const Ks = [];
function tN(e) {
  return Ks.push(e), () => {
    Ks.splice(Ks.indexOf(e), 1);
  };
}
const Wn = cc, un = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function nN(e) {
  if (!e || !Bn)
    return;
  const t = Me.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = Me.head.childNodes;
  let i = null;
  for (let s = n.length - 1; s > -1; s--) {
    const r = n[s], o = (r.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(o) > -1 && (i = r);
  }
  return Me.head.insertBefore(t, i), e;
}
const iN = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function or() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += iN[Math.random() * 62 | 0];
  return t;
}
function _s(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function hf(e) {
  return e.classList ? _s(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function mb(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function sN(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(mb(e[n]), '" '), "").trim();
}
function Ca(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function df(e) {
  return e.size !== un.size || e.x !== un.x || e.y !== un.y || e.rotate !== un.rotate || e.flipX || e.flipY;
}
function rN(e) {
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
function oN(e) {
  let {
    transform: t,
    width: n = cc,
    height: i = cc,
    startCentered: s = !1
  } = e, r = "";
  return s && rb ? r += "translate(".concat(t.x / Wn - n / 2, "em, ").concat(t.y / Wn - i / 2, "em) ") : s ? r += "translate(calc(-50% + ".concat(t.x / Wn, "em), calc(-50% + ").concat(t.y / Wn, "em)) ") : r += "translate(".concat(t.x / Wn, "em, ").concat(t.y / Wn, "em) "), r += "scale(".concat(t.size / Wn * (t.flipX ? -1 : 1), ", ").concat(t.size / Wn * (t.flipY ? -1 : 1), ") "), r += "rotate(".concat(t.rotate, "deg) "), r;
}
var aN = `:root, :host {
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
function yb() {
  const e = cb, t = ub, n = Z.cssPrefix, i = Z.replacementClass;
  let s = aN;
  if (n !== e || i !== t) {
    const r = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), a = new RegExp("\\.".concat(t), "g");
    s = s.replace(r, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(a, ".".concat(i));
  }
  return s;
}
let Yd = !1;
function rl() {
  Z.autoAddCss && !Yd && (nN(yb()), Yd = !0);
}
var lN = {
  mixout() {
    return {
      dom: {
        css: yb,
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
const Rn = Zn || {};
Rn[Dn] || (Rn[Dn] = {});
Rn[Dn].styles || (Rn[Dn].styles = {});
Rn[Dn].hooks || (Rn[Dn].hooks = {});
Rn[Dn].shims || (Rn[Dn].shims = []);
var fn = Rn[Dn];
const bb = [], wb = function() {
  Me.removeEventListener("DOMContentLoaded", wb), Bo = 1, bb.map((e) => e());
};
let Bo = !1;
Bn && (Bo = (Me.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Me.readyState), Bo || Me.addEventListener("DOMContentLoaded", wb));
function cN(e) {
  Bn && (Bo ? setTimeout(e, 0) : bb.push(e));
}
function _r(e) {
  const {
    tag: t,
    attributes: n = {},
    children: i = []
  } = e;
  return typeof e == "string" ? mb(e) : "<".concat(t, " ").concat(sN(n), ">").concat(i.map(_r).join(""), "</").concat(t, ">");
}
function Xd(e, t, n) {
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
function uN(e) {
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
function pc(e) {
  const t = uN(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function fN(e, t) {
  const n = e.length;
  let i = e.charCodeAt(t), s;
  return i >= 55296 && i <= 56319 && n > t + 1 && (s = e.charCodeAt(t + 1), s >= 56320 && s <= 57343) ? (i - 55296) * 1024 + s - 56320 + 65536 : i;
}
function Jd(e) {
  return Object.keys(e).reduce((t, n) => {
    const i = e[n];
    return !!i.icon ? t[i.iconName] = i.icon : t[n] = i, t;
  }, {});
}
function gc(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: i = !1
  } = n, s = Jd(t);
  typeof fn.hooks.addPack == "function" && !i ? fn.hooks.addPack(e, Jd(t)) : fn.styles[e] = {
    ...fn.styles[e] || {},
    ...s
  }, e === "fas" && gc("fa", t);
}
const {
  styles: gi,
  shims: hN
} = fn, dN = {
  [Le]: Object.values(Si[Le]),
  [Ot]: Object.values(Si[Ot]),
  [Pt]: Object.values(Si[Pt])
};
let pf = null, vb = {}, _b = {}, xb = {}, Sb = {}, kb = {};
const pN = {
  [Le]: Object.keys(xi[Le]),
  [Ot]: Object.keys(xi[Ot]),
  [Pt]: Object.keys(xi[Pt])
};
function gN(e) {
  return ~QP.indexOf(e);
}
function mN(e, t) {
  const n = t.split("-"), i = n[0], s = n.slice(1).join("-");
  return i === e && s !== "" && !gN(s) ? s : null;
}
const Cb = () => {
  const e = (i) => ol(gi, (s, r, o) => (s[o] = ol(r, i, {}), s), {});
  vb = e((i, s, r) => (s[3] && (i[s[3]] = r), s[2] && s[2].filter((a) => typeof a == "number").forEach((a) => {
    i[a.toString(16)] = r;
  }), i)), _b = e((i, s, r) => (i[r] = r, s[2] && s[2].filter((a) => typeof a == "string").forEach((a) => {
    i[a] = r;
  }), i)), kb = e((i, s, r) => {
    const o = s[2];
    return i[r] = r, o.forEach((a) => {
      i[a] = r;
    }), i;
  });
  const t = "far" in gi || Z.autoFetchSvg, n = ol(hN, (i, s) => {
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
  xb = n.names, Sb = n.unicodes, pf = Ea(Z.styleDefault, {
    family: Z.familyDefault
  });
};
tN((e) => {
  pf = Ea(e.styleDefault, {
    family: Z.familyDefault
  });
});
Cb();
function gf(e, t) {
  return (vb[e] || {})[t];
}
function yN(e, t) {
  return (_b[e] || {})[t];
}
function Kn(e, t) {
  return (kb[e] || {})[t];
}
function Eb(e) {
  return xb[e] || {
    prefix: null,
    iconName: null
  };
}
function bN(e) {
  const t = Sb[e], n = gf("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function ei() {
  return pf;
}
const mf = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Ea(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = Le
  } = t, i = xi[n][e], s = rr[n][e] || rr[n][i], r = e in fn.styles ? e : null;
  return s || r || null;
}
const wN = {
  [Le]: Object.keys(Si[Le]),
  [Ot]: Object.keys(Si[Ot]),
  [Pt]: Object.keys(Si[Pt])
};
function Ta(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t, i = {
    [Le]: "".concat(Z.cssPrefix, "-").concat(Le),
    [Ot]: "".concat(Z.cssPrefix, "-").concat(Ot),
    [Pt]: "".concat(Z.cssPrefix, "-").concat(Pt)
  };
  let s = null, r = Le;
  const o = TP.filter((l) => l !== ob);
  o.forEach((l) => {
    (e.includes(i[l]) || e.some((u) => wN[l].includes(u))) && (r = l);
  });
  const a = e.reduce((l, u) => {
    const c = mN(Z.cssPrefix, u);
    if (gi[u] ? (u = dN[r].includes(u) ? HP[r][u] : u, s = u, l.prefix = u) : pN[r].indexOf(u) > -1 ? (s = u, l.prefix = Ea(u, {
      family: r
    })) : c ? l.iconName = c : u !== Z.replacementClass && !o.some((f) => u === i[f]) && l.rest.push(u), !n && l.prefix && l.iconName) {
      const f = s === "fa" ? Eb(l.iconName) : {}, h = Kn(l.prefix, l.iconName);
      f.prefix && (s = null), l.iconName = f.iconName || h || l.iconName, l.prefix = f.prefix || l.prefix, l.prefix === "far" && !gi.far && gi.fas && !Z.autoFetchSvg && (l.prefix = "fas");
    }
    return l;
  }, mf());
  return (e.includes("fa-brands") || e.includes("fab")) && (a.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (a.prefix = "fad"), !a.prefix && r === Ot && (gi.fass || Z.autoFetchSvg) && (a.prefix = "fass", a.iconName = Kn(a.prefix, a.iconName) || a.iconName), !a.prefix && r === Pt && (gi.fasds || Z.autoFetchSvg) && (a.prefix = "fasds", a.iconName = Kn(a.prefix, a.iconName) || a.iconName), (a.prefix === "fa" || s === "fa") && (a.prefix = ei() || "fas"), a;
}
class vN {
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
      }, gc(r, s[r]);
      const o = Si[Le][r];
      o && gc(o, s[r]), Cb();
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
let Qd = [], Ki = {};
const ss = {}, _N = Object.keys(ss);
function xN(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return Qd = e, Ki = {}, Object.keys(ss).forEach((i) => {
    _N.indexOf(i) === -1 && delete ss[i];
  }), Qd.forEach((i) => {
    const s = i.mixout ? i.mixout() : {};
    if (Object.keys(s).forEach((r) => {
      typeof s[r] == "function" && (n[r] = s[r]), typeof s[r] == "object" && Object.keys(s[r]).forEach((o) => {
        n[r] || (n[r] = {}), n[r][o] = s[r][o];
      });
    }), i.hooks) {
      const r = i.hooks();
      Object.keys(r).forEach((o) => {
        Ki[o] || (Ki[o] = []), Ki[o].push(r[o]);
      });
    }
    i.provides && i.provides(ss);
  }), n;
}
function mc(e, t) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return (Ki[e] || []).forEach((o) => {
    t = o.apply(null, [t, ...i]);
  }), t;
}
function Mi(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    n[i - 1] = arguments[i];
  (Ki[e] || []).forEach((r) => {
    r.apply(null, n);
  });
}
function ti() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return ss[e] ? ss[e].apply(null, t) : void 0;
}
function yc(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || ei();
  if (t)
    return t = Kn(n, t) || t, Xd(Tb.definitions, n, t) || Xd(fn.styles, n, t);
}
const Tb = new vN(), SN = () => {
  Z.autoReplaceSvg = !1, Z.observeMutations = !1, Mi("noAuto");
}, kN = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Bn ? (Mi("beforeI2svg", e), ti("pseudoElements2svg", e), ti("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    Z.autoReplaceSvg === !1 && (Z.autoReplaceSvg = !0), Z.observeMutations = !0, cN(() => {
      EN({
        autoReplaceSvgRoot: t
      }), Mi("watch", e);
    });
  }
}, CN = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: Kn(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Ea(e[0]);
      return {
        prefix: n,
        iconName: Kn(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(Z.cssPrefix, "-")) > -1 || e.match(KP))) {
      const t = Ta(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || ei(),
        iconName: Kn(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = ei();
      return {
        prefix: t,
        iconName: Kn(t, e) || e
      };
    }
  }
}, Nt = {
  noAuto: SN,
  config: Z,
  dom: kN,
  parse: CN,
  library: Tb,
  findIconDefinition: yc,
  toHtml: _r
}, EN = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = Me
  } = e;
  (Object.keys(fn.styles).length > 0 || Z.autoFetchSvg) && Bn && Z.autoReplaceSvg && Nt.dom.i2svg({
    node: t
  });
};
function Aa(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => _r(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!Bn) return;
      const n = Me.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function TN(e) {
  let {
    children: t,
    main: n,
    mask: i,
    attributes: s,
    styles: r,
    transform: o
  } = e;
  if (df(o) && n.found && !i.found) {
    const {
      width: a,
      height: l
    } = n, u = {
      x: a / l / 2,
      y: 0.5
    };
    s.style = Ca({
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
function AN(e) {
  let {
    prefix: t,
    iconName: n,
    children: i,
    attributes: s,
    symbol: r
  } = e;
  const o = r === !0 ? "".concat(t, "-").concat(Z.cssPrefix, "-").concat(n) : r;
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
function yf(e) {
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
  } = n.found ? n : t, p = i === "fak", g = [Z.replacementClass, s ? "".concat(Z.cssPrefix, "-").concat(s) : ""].filter((T) => c.classes.indexOf(T) === -1).filter((T) => T !== "" || !!T).concat(c.classes).join(" ");
  let v = {
    children: [],
    attributes: {
      ...c.attributes,
      "data-prefix": i,
      "data-icon": s,
      class: g,
      role: c.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(h, " ").concat(d)
    }
  };
  const w = p && !~c.classes.indexOf("fa-fw") ? {
    width: "".concat(h / d * 16 * 0.0625, "em")
  } : {};
  f && (v.attributes[Ii] = ""), a && (v.children.push({
    tag: "title",
    attributes: {
      id: v.attributes["aria-labelledby"] || "title-".concat(u || or())
    },
    children: [a]
  }), delete v.attributes.title);
  const k = {
    ...v,
    prefix: i,
    iconName: s,
    main: t,
    mask: n,
    maskId: l,
    transform: r,
    symbol: o,
    styles: {
      ...w,
      ...c.styles
    }
  }, {
    children: b,
    attributes: C
  } = n.found && t.found ? ti("generateAbstractMask", k) || {
    children: [],
    attributes: {}
  } : ti("generateAbstractIcon", k) || {
    children: [],
    attributes: {}
  };
  return k.children = b, k.attributes = C, o ? AN(k) : TN(k);
}
function Zd(e) {
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
  a && (l[Ii] = "");
  const u = {
    ...o.styles
  };
  df(s) && (u.transform = oN({
    transform: s,
    startCentered: !0,
    width: n,
    height: i
  }), u["-webkit-transform"] = u.transform);
  const c = Ca(u);
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
function ON(e) {
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
  }, r = Ca(i.styles);
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
} = fn;
function bc(e) {
  const t = e[0], n = e[1], [i] = e.slice(4);
  let s = null;
  return Array.isArray(i) ? s = {
    tag: "g",
    attributes: {
      class: "".concat(Z.cssPrefix, "-").concat(sl.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(Z.cssPrefix, "-").concat(sl.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(Z.cssPrefix, "-").concat(sl.PRIMARY),
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
const PN = {
  found: !1,
  width: 512,
  height: 512
};
function NN(e, t) {
  !fb && !Z.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function wc(e, t) {
  let n = t;
  return t === "fa" && Z.styleDefault !== null && (t = ei()), new Promise((i, s) => {
    if (n === "fa") {
      const r = Eb(e) || {};
      e = r.iconName || e, t = r.prefix || t;
    }
    if (e && t && al[t] && al[t][e]) {
      const r = al[t][e];
      return i(bc(r));
    }
    NN(e, t), i({
      ...PN,
      icon: Z.showMissingIcons && e ? ti("missingIconAbstract") || {} : {}
    });
  });
}
const ep = () => {
}, vc = Z.measurePerformance && qr && qr.mark && qr.measure ? qr : {
  mark: ep,
  measure: ep
}, Bs = 'FA "6.6.0"', IN = (e) => (vc.mark("".concat(Bs, " ").concat(e, " begins")), () => Ab(e)), Ab = (e) => {
  vc.mark("".concat(Bs, " ").concat(e, " ends")), vc.measure("".concat(Bs, " ").concat(e), "".concat(Bs, " ").concat(e, " begins"), "".concat(Bs, " ").concat(e, " ends"));
};
var bf = {
  begin: IN,
  end: Ab
};
const no = () => {
};
function tp(e) {
  return typeof (e.getAttribute ? e.getAttribute(Ii) : null) == "string";
}
function MN(e) {
  const t = e.getAttribute ? e.getAttribute(uf) : null, n = e.getAttribute ? e.getAttribute(ff) : null;
  return t && n;
}
function LN(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(Z.replacementClass);
}
function DN() {
  return Z.autoReplaceSvg === !0 ? io.replace : io[Z.autoReplaceSvg] || io.replace;
}
function RN(e) {
  return Me.createElementNS("http://www.w3.org/2000/svg", e);
}
function FN(e) {
  return Me.createElement(e);
}
function Ob(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? RN : FN
  } = t;
  if (typeof e == "string")
    return Me.createTextNode(e);
  const i = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(r) {
    i.setAttribute(r, e.attributes[r]);
  }), (e.children || []).forEach(function(r) {
    i.appendChild(Ob(r, {
      ceFn: n
    }));
  }), i;
}
function $N(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const io = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(Ob(n), t);
      }), t.getAttribute(Ii) === null && Z.keepOriginalSource) {
        let n = Me.createComment($N(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~hf(t).indexOf(Z.replacementClass))
      return io.replace(e);
    const i = new RegExp("".concat(Z.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const r = n[0].attributes.class.split(" ").reduce((o, a) => (a === Z.replacementClass || a.match(i) ? o.toSvg.push(a) : o.toNode.push(a), o), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = r.toSvg.join(" "), r.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", r.toNode.join(" "));
    }
    const s = n.map((r) => _r(r)).join(`
`);
    t.setAttribute(Ii, ""), t.innerHTML = s;
  }
};
function np(e) {
  e();
}
function Pb(e, t) {
  const n = typeof t == "function" ? t : no;
  if (e.length === 0)
    n();
  else {
    let i = np;
    Z.mutateApproach === VP && (i = Zn.requestAnimationFrame || np), i(() => {
      const s = DN(), r = bf.begin("mutate");
      e.map(s), r(), n();
    });
  }
}
let wf = !1;
function Nb() {
  wf = !0;
}
function _c() {
  wf = !1;
}
let jo = null;
function ip(e) {
  if (!Vd || !Z.observeMutations)
    return;
  const {
    treeCallback: t = no,
    nodeCallback: n = no,
    pseudoElementsCallback: i = no,
    observeMutationsRoot: s = Me
  } = e;
  jo = new Vd((r) => {
    if (wf) return;
    const o = ei();
    _s(r).forEach((a) => {
      if (a.type === "childList" && a.addedNodes.length > 0 && !tp(a.addedNodes[0]) && (Z.searchPseudoElements && i(a.target), t(a.target)), a.type === "attributes" && a.target.parentNode && Z.searchPseudoElements && i(a.target.parentNode), a.type === "attributes" && tp(a.target) && ~JP.indexOf(a.attributeName))
        if (a.attributeName === "class" && MN(a.target)) {
          const {
            prefix: l,
            iconName: u
          } = Ta(hf(a.target));
          a.target.setAttribute(uf, l || o), u && a.target.setAttribute(ff, u);
        } else LN(a.target) && n(a.target);
    });
  }), Bn && jo.observe(s, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function BN() {
  jo && jo.disconnect();
}
function jN(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((i, s) => {
    const r = s.split(":"), o = r[0], a = r.slice(1);
    return o && a.length > 0 && (i[o] = a.join(":").trim()), i;
  }, {})), n;
}
function qN(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), i = e.innerText !== void 0 ? e.innerText.trim() : "";
  let s = Ta(hf(e));
  return s.prefix || (s.prefix = ei()), t && n && (s.prefix = t, s.iconName = n), s.iconName && s.prefix || (s.prefix && i.length > 0 && (s.iconName = yN(s.prefix, e.innerText) || gf(s.prefix, pc(e.innerText))), !s.iconName && Z.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (s.iconName = e.firstChild.data)), s;
}
function UN(e) {
  const t = _s(e.attributes).reduce((s, r) => (s.name !== "class" && s.name !== "style" && (s[r.name] = r.value), s), {}), n = e.getAttribute("title"), i = e.getAttribute("data-fa-title-id");
  return Z.autoA11y && (n ? t["aria-labelledby"] = "".concat(Z.replacementClass, "-title-").concat(i || or()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function WN() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: un,
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
function sp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: i,
    rest: s
  } = qN(e), r = UN(e), o = mc("parseNodeAttributes", {}, e);
  let a = t.styleParser ? jN(e) : [];
  return {
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: i,
    transform: un,
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
  styles: zN
} = fn;
function Ib(e) {
  const t = Z.autoReplaceSvg === "nest" ? sp(e, {
    styleParser: !1
  }) : sp(e);
  return ~t.extra.classes.indexOf(pb) ? ti("generateLayersText", e, t) : ti("generateSvgReplacementMutation", e, t);
}
let vn = /* @__PURE__ */ new Set();
hb.map((e) => {
  vn.add("fa-".concat(e));
});
Object.keys(xi[Le]).map(vn.add.bind(vn));
Object.keys(xi[Ot]).map(vn.add.bind(vn));
Object.keys(xi[Pt]).map(vn.add.bind(vn));
vn = [...vn];
function rp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Bn) return Promise.resolve();
  const n = Me.documentElement.classList, i = (c) => n.add("".concat(Kd, "-").concat(c)), s = (c) => n.remove("".concat(Kd, "-").concat(c)), r = Z.autoFetchSvg ? vn : hb.map((c) => "fa-".concat(c)).concat(Object.keys(zN));
  r.includes("fa") || r.push("fa");
  const o = [".".concat(pb, ":not([").concat(Ii, "])")].concat(r.map((c) => ".".concat(c, ":not([").concat(Ii, "])"))).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  let a = [];
  try {
    a = _s(e.querySelectorAll(o));
  } catch {
  }
  if (a.length > 0)
    i("pending"), s("complete");
  else
    return Promise.resolve();
  const l = bf.begin("onTree"), u = a.reduce((c, f) => {
    try {
      const h = Ib(f);
      h && c.push(h);
    } catch (h) {
      fb || h.name === "MissingIcon" && console.error(h);
    }
    return c;
  }, []);
  return new Promise((c, f) => {
    Promise.all(u).then((h) => {
      Pb(h, () => {
        i("active"), i("complete"), s("pending"), typeof t == "function" && t(), l(), c();
      });
    }).catch((h) => {
      l(), f(h);
    });
  });
}
function VN(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Ib(e).then((n) => {
    n && Pb([n], t);
  });
}
function GN(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const i = (t || {}).icon ? t : yc(t || {});
    let {
      mask: s
    } = n;
    return s && (s = (s || {}).icon ? s : yc(s || {})), e(i, {
      ...n,
      mask: s
    });
  };
}
const HN = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = un,
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
  return Aa({
    type: "icon",
    ...e
  }, () => (Mi("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), Z.autoA11y && (o ? u["aria-labelledby"] = "".concat(Z.replacementClass, "-title-").concat(a || or()) : (u["aria-hidden"] = "true", u.focusable = "false")), yf({
    icons: {
      main: bc(d),
      mask: s ? bc(s.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: f,
    iconName: h,
    transform: {
      ...un,
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
var KN = {
  mixout() {
    return {
      icon: GN(HN)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = rp, e.nodeCallback = VN, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = Me,
        callback: i = () => {
        }
      } = t;
      return rp(n, i);
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
        Promise.all([wc(i, o), u.iconName ? wc(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((p) => {
          let [g, v] = p;
          h([t, yf({
            icons: {
              main: g,
              mask: v
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
      const a = Ca(o);
      a.length > 0 && (i.style = a);
      let l;
      return df(r) && (l = ti("generateAbstractTransformGrouping", {
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
}, YN = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return Aa({
          type: "layer"
        }, () => {
          Mi("beforeDOMElementCreation", {
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
              class: ["".concat(Z.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: i
          }];
        });
      }
    };
  }
}, XN = {
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
        return Aa({
          type: "counter",
          content: e
        }, () => (Mi("beforeDOMElementCreation", {
          content: e,
          params: t
        }), ON({
          content: e.toString(),
          title: n,
          extra: {
            attributes: s,
            styles: r,
            classes: ["".concat(Z.cssPrefix, "-layers-counter"), ...i]
          }
        })));
      }
    };
  }
}, JN = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = un,
          title: i = null,
          classes: s = [],
          attributes: r = {},
          styles: o = {}
        } = t;
        return Aa({
          type: "text",
          content: e
        }, () => (Mi("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Zd({
          content: e,
          transform: {
            ...un,
            ...n
          },
          title: i,
          extra: {
            attributes: r,
            styles: o,
            classes: ["".concat(Z.cssPrefix, "-layers-text"), ...s]
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
      if (rb) {
        const l = parseInt(getComputedStyle(t).fontSize, 10), u = t.getBoundingClientRect();
        o = u.width / l, a = u.height / l;
      }
      return Z.autoA11y && !i && (r.attributes["aria-hidden"] = "true"), Promise.resolve([t, Zd({
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
const QN = new RegExp('"', "ug"), op = [1105920, 1112319], ap = {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  },
  ...MP,
  ...IP,
  ...qP
}, xc = Object.keys(ap).reduce((e, t) => (e[t.toLowerCase()] = ap[t], e), {}), ZN = Object.keys(xc).reduce((e, t) => {
  const n = xc[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function eI(e) {
  const t = e.replace(QN, ""), n = fN(t, 0), i = n >= op[0] && n <= op[1], s = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: pc(s ? t[0] : t),
    isSecondary: i || s
  };
}
function tI(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), i = parseInt(t), s = isNaN(i) ? "normal" : i;
  return (xc[n] || {})[s] || ZN[n];
}
function lp(e, t) {
  const n = "".concat(zP).concat(t.replace(":", "-"));
  return new Promise((i, s) => {
    if (e.getAttribute(n) !== null)
      return i();
    const o = _s(e.children).filter((h) => h.getAttribute(uc) === t)[0], a = Zn.getComputedStyle(e, t), l = a.getPropertyValue("font-family"), u = l.match(YP), c = a.getPropertyValue("font-weight"), f = a.getPropertyValue("content");
    if (o && !u)
      return e.removeChild(o), i();
    if (u && f !== "none" && f !== "") {
      const h = a.getPropertyValue("content");
      let d = tI(l, c);
      const {
        value: p,
        isSecondary: g
      } = eI(h), v = u[0].startsWith("FontAwesome");
      let w = gf(d, p), k = w;
      if (v) {
        const b = bN(p);
        b.iconName && b.prefix && (w = b.iconName, d = b.prefix);
      }
      if (w && !g && (!o || o.getAttribute(uf) !== d || o.getAttribute(ff) !== k)) {
        e.setAttribute(n, k), o && e.removeChild(o);
        const b = WN(), {
          extra: C
        } = b;
        C.attributes[uc] = t, wc(w, d).then((T) => {
          const M = yf({
            ...b,
            icons: {
              main: T,
              mask: mf()
            },
            prefix: d,
            iconName: k,
            extra: C,
            watchable: !0
          }), P = Me.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(P, e.firstChild) : e.appendChild(P), P.outerHTML = M.map((D) => _r(D)).join(`
`), e.removeAttribute(n), i();
        }).catch(s);
      } else
        i();
    } else
      i();
  });
}
function nI(e) {
  return Promise.all([lp(e, "::before"), lp(e, "::after")]);
}
function iI(e) {
  return e.parentNode !== document.head && !~GP.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(uc) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function cp(e) {
  if (Bn)
    return new Promise((t, n) => {
      const i = _s(e.querySelectorAll("*")).filter(iI).map(nI), s = bf.begin("searchPseudoElements");
      Nb(), Promise.all(i).then(() => {
        s(), _c(), t();
      }).catch(() => {
        s(), _c(), n();
      });
    });
}
var sI = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = cp, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = Me
      } = t;
      Z.searchPseudoElements && cp(n);
    };
  }
};
let up = !1;
var rI = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Nb(), up = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        ip(mc("mutationObserverCallbacks", {}));
      },
      noAuto() {
        BN();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        up ? _c() : ip(mc("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const fp = (e) => {
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
var oI = {
  mixout() {
    return {
      parse: {
        transform: (e) => fp(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = fp(n)), e;
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
function hp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function aI(e) {
  return e.tag === "g" ? e.children : [e];
}
var lI = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), i = n ? Ta(n.split(" ").map((s) => s.trim())) : mf();
        return i.prefix || (i.prefix = ei()), e.mask = i, e.maskId = t.getAttribute("data-fa-mask-id"), e;
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
      } = r, h = rN({
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
        children: u.children.map(hp)
      } : {}, g = {
        tag: "g",
        attributes: {
          ...h.inner
        },
        children: [hp({
          tag: u.tag,
          attributes: {
            ...u.attributes,
            ...h.path
          },
          ...p
        })]
      }, v = {
        tag: "g",
        attributes: {
          ...h.outer
        },
        children: [g]
      }, w = "mask-".concat(o || or()), k = "clip-".concat(o || or()), b = {
        tag: "mask",
        attributes: {
          ...ll,
          id: w,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        },
        children: [d, v]
      }, C = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: k
          },
          children: aI(f)
        }, b]
      };
      return n.push(C, {
        tag: "rect",
        attributes: {
          fill: "currentColor",
          "clip-path": "url(#".concat(k, ")"),
          mask: "url(#".concat(w, ")"),
          ...ll
        }
      }), {
        children: n,
        attributes: i
      };
    };
  }
}, cI = {
  provides(e) {
    let t = !1;
    Zn.matchMedia && (t = Zn.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
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
}, uI = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), i = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = i, e;
      }
    };
  }
}, fI = [lN, KN, YN, XN, JN, sI, rI, oI, lI, cI, uI];
xN(fI, {
  mixoutsTo: Nt
});
Nt.noAuto;
Nt.config;
const hI = Nt.library;
Nt.dom;
const Sc = Nt.parse;
Nt.findIconDefinition;
Nt.toHtml;
const dI = Nt.icon;
Nt.layer;
Nt.text;
Nt.counter;
function dp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function Nn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dp(Object(n), !0).forEach(function(i) {
      yt(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : dp(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function pI(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function gI(e) {
  var t = pI(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function qo(e) {
  "@babel/helpers - typeof";
  return qo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qo(e);
}
function yt(e, t, n) {
  return t = gI(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function mI(e, t) {
  if (e == null) return {};
  var n = {};
  for (var i in e)
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      if (t.indexOf(i) >= 0) continue;
      n[i] = e[i];
    }
  return n;
}
function yI(e, t) {
  if (e == null) return {};
  var n = mI(e, t), i, s;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    for (s = 0; s < r.length; s++)
      i = r[s], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (n[i] = e[i]);
  }
  return n;
}
var bI = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Mb = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(w, k, b) {
      if (!u(k) || f(k) || h(k) || d(k) || l(k))
        return k;
      var C, T = 0, M = 0;
      if (c(k))
        for (C = [], M = k.length; T < M; T++)
          C.push(n(w, k[T], b));
      else {
        C = {};
        for (var P in k)
          Object.prototype.hasOwnProperty.call(k, P) && (C[w(P, b)] = n(w, k[P], b));
      }
      return C;
    }, i = function(w, k) {
      k = k || {};
      var b = k.separator || "_", C = k.split || /(?=[A-Z])/;
      return w.split(C).join(b);
    }, s = function(w) {
      return p(w) ? w : (w = w.replace(/[\-_\s]+(.)?/g, function(k, b) {
        return b ? b.toUpperCase() : "";
      }), w.substr(0, 1).toLowerCase() + w.substr(1));
    }, r = function(w) {
      var k = s(w);
      return k.substr(0, 1).toUpperCase() + k.substr(1);
    }, o = function(w, k) {
      return i(w, k).toLowerCase();
    }, a = Object.prototype.toString, l = function(w) {
      return typeof w == "function";
    }, u = function(w) {
      return w === Object(w);
    }, c = function(w) {
      return a.call(w) == "[object Array]";
    }, f = function(w) {
      return a.call(w) == "[object Date]";
    }, h = function(w) {
      return a.call(w) == "[object RegExp]";
    }, d = function(w) {
      return a.call(w) == "[object Boolean]";
    }, p = function(w) {
      return w = w - 0, w === w;
    }, g = function(w, k) {
      var b = k && "process" in k ? k.process : k;
      return typeof b != "function" ? w : function(C, T) {
        return b(C, w, T);
      };
    }, v = {
      camelize: s,
      decamelize: o,
      pascalize: r,
      depascalize: o,
      camelizeKeys: function(w, k) {
        return n(g(s, k), w);
      },
      decamelizeKeys: function(w, k) {
        return n(g(o, k), w, k);
      },
      pascalizeKeys: function(w, k) {
        return n(g(r, k), w);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = v : t.humps = v;
  })(bI);
})(Mb);
var wI = Mb.exports, vI = ["class", "style"];
function _I(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var i = n.indexOf(":"), s = wI.camelize(n.slice(0, i)), r = n.slice(i + 1).trim();
    return t[s] = r, t;
  }, {});
}
function xI(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function Lb(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var i = (e.children || []).map(function(l) {
    return Lb(l);
  }), s = Object.keys(e.attributes || {}).reduce(function(l, u) {
    var c = e.attributes[u];
    switch (u) {
      case "class":
        l.class = xI(c);
        break;
      case "style":
        l.style = _I(c);
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
  var r = n.style, o = r === void 0 ? {} : r, a = yI(n, vI);
  return Yc(e.tag, Nn(Nn(Nn({}, t), {}, {
    class: s.class,
    style: Nn(Nn({}, s.style), o)
  }, s.attrs), a), i);
}
var Db = !1;
try {
  Db = !0;
} catch {
}
function SI() {
  if (!Db && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function cl(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? yt({}, e, t) : {};
}
function kI(e) {
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
  }, yt(yt(yt(yt(yt(yt(yt(yt(yt(yt(t, "fa-".concat(e.size), e.size !== null), "fa-rotate-".concat(e.rotation), e.rotation !== null), "fa-pull-".concat(e.pull), e.pull !== null), "fa-swap-opacity", e.swapOpacity), "fa-bounce", e.bounce), "fa-shake", e.shake), "fa-beat", e.beat), "fa-fade", e.fade), "fa-beat-fade", e.beatFade), "fa-flash", e.flash), yt(yt(t, "fa-spin-pulse", e.spinPulse), "fa-spin-reverse", e.spinReverse));
  return Object.keys(n).map(function(i) {
    return n[i] ? i : null;
  }).filter(function(i) {
    return i;
  });
}
function pp(e) {
  if (e && qo(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Sc.icon)
    return Sc.icon(e);
  if (e === null)
    return null;
  if (qo(e) === "object" && e.prefix && e.iconName)
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
var CI = /* @__PURE__ */ Di({
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
    var i = n.attrs, s = Mt(function() {
      return pp(t.icon);
    }), r = Mt(function() {
      return cl("classes", kI(t));
    }), o = Mt(function() {
      return cl("transform", typeof t.transform == "string" ? Sc.transform(t.transform) : t.transform);
    }), a = Mt(function() {
      return cl("mask", pp(t.mask));
    }), l = Mt(function() {
      return dI(s.value, Nn(Nn(Nn(Nn({}, r.value), o.value), a.value), {}, {
        symbol: t.symbol,
        title: t.title,
        titleId: t.titleId,
        maskId: t.maskId
      }));
    });
    Ln(l, function(c) {
      if (!c)
        return SI("Could not find one or more icon(s)", s.value, a.value);
    }, {
      immediate: !0
    });
    var u = Mt(function() {
      return l.value ? Lb(l.value.abstract[0], {}, i) : null;
    });
    return function() {
      return u.value;
    };
  }
});
const EI = {
  prefix: "fasr",
  iconName: "arrows-left-right",
  icon: [512, 512, ["arrows-h"], "f07e", "M493.8 273l17-17-17-17-96-96-17-17L346.9 160l17 17 55 55L93.1 232l55-55 17-17-33.9-33.9-17 17-96 96-17 17 17 17 96 96 17 17L165.1 352l-17-17-55-55 325.7 0-55 55-17 17 33.9 33.9 17-17 96-96z"]
}, TI = {
  prefix: "fasr",
  iconName: "plus-large",
  icon: [512, 512, [], "e59e", "M488 232l24 0 0 48-24 0-208 0 0 208 0 24-48 0 0-24 0-208L24 280 0 280l0-48 24 0 208 0 0-208 0-24 48 0 0 24 0 208 208 0z"]
}, AI = {
  prefix: "fasr",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M136 32l24 0 0 48-24 0L48 80l0 88 0 24L0 192l0-24L0 56 0 32l24 0 112 0zM0 344l0-24 48 0 0 24 0 88 88 0 24 0 0 48-24 0L24 480 0 480l0-24L0 344zM424 32l24 0 0 24 0 112 0 24-48 0 0-24 0-88-88 0-24 0 0-48 24 0 112 0zM400 344l0-24 48 0 0 24 0 112 0 24-24 0-112 0-24 0 0-48 24 0 88 0 0-88z"]
}, OI = {
  prefix: "fasr",
  iconName: "arrows-up-down",
  icon: [320, 512, ["arrows-v"], "f07d", "M177 18.2l-17-17-17 17-96 96-17 17L64 165.1l17-17 55-55 0 325.7-55-55-17-17L30.1 380.8l17 17 96 96 17 17 17-17 96-96 17-17L256 346.9l-17 17-55 55 0-325.7 55 55 17 17 33.9-33.9-17-17-96-96z"]
}, PI = {
  prefix: "fass",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M144 0L128 32 0 32 0 96l448 0 0-64L320 32 304 0 144 0zM416 128L32 128 56 512l336 0 24-384z"]
}, NI = {
  prefix: "fass",
  iconName: "calculator",
  icon: [384, 512, [128425], "f1ec", "M384 0L0 0 0 512l384 0L384 0zM320 64l0 96L64 160l0-96 256 0zM64 192l64 0 0 64-64 0 0-64zm64 96l0 64-64 0 0-64 64 0zM64 384l160 0 0 64L64 448l0-64zM224 192l0 64-64 0 0-64 64 0zm-64 96l64 0 0 64-64 0 0-64zm160-96l0 64-64 0 0-64 64 0zm-64 96l64 0 0 64-64 0 0-64zm64 96l0 64-64 0 0-64 64 0z"]
}, II = {
  prefix: "fass",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M326.6 166.6L349.3 144 304 98.7l-22.6 22.6L192 210.7l-89.4-89.4L80 98.7 34.7 144l22.6 22.6L146.7 256 57.4 345.4 34.7 368 80 413.3l22.6-22.6L192 301.3l89.4 89.4L304 413.3 349.3 368l-22.6-22.6L237.3 256l89.4-89.4z"]
}, MI = {
  prefix: "fass",
  iconName: "hammer",
  icon: [576, 512, [128296], "f6e3", "M225.6 18.2L176 48l96 48 0 48L384 256l24-24 24 24-24 24 48 48L576 208l-48-48-24 24-24-24 24-24L405.5 37.5C381.5 13.5 348.9 0 315 0L291.5 0c-23.2 0-46 6.3-65.9 18.2zM0 416l96 96L330.7 248 264 181.3 0 416z"]
};
hI.add(
  II,
  AI,
  EI,
  OI,
  MI,
  PI,
  TI,
  NI
);
const LI = Zv({
  locale: "en_US",
  fallbackLocale: "en_US",
  messages: d_
}), gp = document.querySelector("#smartcut-app"), DI = gp ? gp.getAttribute("data-type") : "", vf = o1(EP, { type: DI });
vf.use(LI);
vf.component("font-awesome-icon", CI);
vf.mount("#smartcut-app");
export {
  Tn as A,
  pl as B,
  wP as C,
  xg as D,
  FI as E,
  Be as F,
  yy as G,
  $I as H,
  ra as I,
  Dy as J,
  VE as K,
  zE as L,
  Ud as M,
  zI as N,
  VI as O,
  Fi as _,
  X as a,
  Di as b,
  on as c,
  de as d,
  jI as e,
  My as f,
  is as g,
  A2 as h,
  GI as i,
  HI as j,
  KI as k,
  YI as l,
  Yo as m,
  UI as n,
  te as o,
  WI as p,
  ae as q,
  En as r,
  FO as s,
  se as t,
  ve as u,
  $ as v,
  Ge as w,
  Ne as x,
  Gt as y,
  He as z
};

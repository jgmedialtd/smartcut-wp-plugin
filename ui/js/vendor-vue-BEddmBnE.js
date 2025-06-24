import { x as rr, y as bo, A as _o, B as So, C as wo, D as xo } from "./vendor-BJAM8w7x.js";
/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function _r(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const G = {}, bt = [], Ve = () => {
}, Co = () => !1, Tn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Sr = (e) => e.startsWith("onUpdate:"), le = Object.assign, wr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, To = Object.prototype.hasOwnProperty, J = (e, t) => To.call(e, t), N = Array.isArray, _t = (e) => En(e) === "[object Map]", Ds = (e) => En(e) === "[object Set]", $ = (e) => typeof e == "function", ie = (e) => typeof e == "string", Je = (e) => typeof e == "symbol", ne = (e) => e !== null && typeof e == "object", Ns = (e) => (ne(e) || $(e)) && $(e.then) && $(e.catch), Ls = Object.prototype.toString, En = (e) => Ls.call(e), Eo = (e) => En(e).slice(8, -1), js = (e) => En(e) === "[object Object]", xr = (e) => ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Dt = /* @__PURE__ */ _r(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), On = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Oo = /-(\w)/g, Ee = On(
  (e) => e.replace(Oo, (t, n) => n ? n.toUpperCase() : "")
), Ao = /\B([A-Z])/g, it = On(
  (e) => e.replace(Ao, "-$1").toLowerCase()
), An = On((e) => e.charAt(0).toUpperCase() + e.slice(1)), Kn = On(
  (e) => e ? `on${An(e)}` : ""
), Se = (e, t) => !Object.is(e, t), Un = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, $s = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Po = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Mo = (e) => {
  const t = ie(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let kr;
const Pn = () => kr || (kr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Cr(e) {
  if (N(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = ie(r) ? Do(r) : Cr(r);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (ie(e) || ne(e))
    return e;
}
const Ro = /;(?![^(]*\))/g, Io = /:([^]+)/, Fo = /\/\*[^]*?\*\//g;
function Do(e) {
  const t = {};
  return e.replace(Fo, "").split(Ro).forEach((n) => {
    if (n) {
      const r = n.split(Io);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Tr(e) {
  let t = "";
  if (ie(e))
    t = e;
  else if (N(e))
    for (let n = 0; n < e.length; n++) {
      const r = Tr(e[n]);
      r && (t += r + " ");
    }
  else if (ne(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const No = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Lo = /* @__PURE__ */ _r(No);
function Hs(e) {
  return !!e || e === "";
}
const Bs = (e) => !!(e && e.__v_isRef === !0), jo = (e) => ie(e) ? e : e == null ? "" : N(e) || ne(e) && (e.toString === Ls || !$(e.toString)) ? Bs(e) ? jo(e.value) : JSON.stringify(e, Vs, 2) : String(e), Vs = (e, t) => Bs(t) ? Vs(e, t.value) : _t(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], i) => (n[Wn(r, i) + " =>"] = s, n),
    {}
  )
} : Ds(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Wn(n))
} : Je(t) ? Wn(t) : ne(t) && !N(t) && !js(t) ? String(t) : t, Wn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Je(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let he;
class $o {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = he, !t && he && (this.index = (he.scopes || (he.scopes = [])).push(
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
      const n = he;
      try {
        return he = this, t();
      } finally {
        he = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = he, he = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (he = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Er() {
  return he;
}
function Ks(e, t = !1) {
  he && he.cleanups.push(e);
}
let te;
const zn = /* @__PURE__ */ new WeakSet();
class Us {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, he && he.active && he.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, zn.has(this) && (zn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || zs(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Gr(this), ks(this);
    const t = te, n = Me;
    te = this, Me = !0;
    try {
      return this.fn();
    } finally {
      Gs(this), te = t, Me = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Pr(t);
      this.deps = this.depsTail = void 0, Gr(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? zn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    sr(this) && this.run();
  }
  get dirty() {
    return sr(this);
  }
}
let Ws = 0, Nt, Lt;
function zs(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Lt, Lt = e;
    return;
  }
  e.next = Nt, Nt = e;
}
function Or() {
  Ws++;
}
function Ar() {
  if (--Ws > 0)
    return;
  if (Lt) {
    let t = Lt;
    for (Lt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Nt; ) {
    let t = Nt;
    for (Nt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function ks(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Gs(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), Pr(r), Ho(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  e.deps = t, e.depsTail = n;
}
function sr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (qs(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function qs(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Bt) || (e.globalVersion = Bt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !sr(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = te, r = Me;
  te = e, Me = !0;
  try {
    ks(e);
    const s = e.fn(e._value);
    (t.version === 0 || Se(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    te = n, Me = r, Gs(e), e.flags &= -3;
  }
}
function Pr(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Pr(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ho(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Me = !0;
const Js = [];
function Ge() {
  Js.push(Me), Me = !1;
}
function qe() {
  const e = Js.pop();
  Me = e === void 0 ? !0 : e;
}
function Gr(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = te;
    te = void 0;
    try {
      t();
    } finally {
      te = n;
    }
  }
}
let Bt = 0;
class Bo {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Mn {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!te || !Me || te === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== te)
      n = this.activeLink = new Bo(te, this), te.deps ? (n.prevDep = te.depsTail, te.depsTail.nextDep = n, te.depsTail = n) : te.deps = te.depsTail = n, Ys(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = te.depsTail, n.nextDep = void 0, te.depsTail.nextDep = n, te.depsTail = n, te.deps === n && (te.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Bt++, this.notify(t);
  }
  notify(t) {
    Or();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ar();
    }
  }
}
function Ys(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Ys(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const hn = /* @__PURE__ */ new WeakMap(), ht = Symbol(
  ""
), ir = Symbol(
  ""
), Vt = Symbol(
  ""
);
function pe(e, t, n) {
  if (Me && te) {
    let r = hn.get(e);
    r || hn.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new Mn()), s.map = r, s.key = n), s.track();
  }
}
function We(e, t, n, r, s, i) {
  const o = hn.get(e);
  if (!o) {
    Bt++;
    return;
  }
  const l = (f) => {
    f && f.trigger();
  };
  if (Or(), t === "clear")
    o.forEach(l);
  else {
    const f = N(e), a = f && xr(n);
    if (f && n === "length") {
      const c = Number(r);
      o.forEach((h, g) => {
        (g === "length" || g === Vt || !Je(g) && g >= c) && l(h);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), a && l(o.get(Vt)), t) {
        case "add":
          f ? a && l(o.get("length")) : (l(o.get(ht)), _t(e) && l(o.get(ir)));
          break;
        case "delete":
          f || (l(o.get(ht)), _t(e) && l(o.get(ir)));
          break;
        case "set":
          _t(e) && l(o.get(ht));
          break;
      }
  }
  Ar();
}
function Vo(e, t) {
  const n = hn.get(e);
  return n && n.get(t);
}
function gt(e) {
  const t = k(e);
  return t === e ? t : (pe(t, "iterate", Vt), Ae(e) ? t : t.map(de));
}
function Rn(e) {
  return pe(e = k(e), "iterate", Vt), e;
}
const Ko = {
  __proto__: null,
  [Symbol.iterator]() {
    return kn(this, Symbol.iterator, de);
  },
  concat(...e) {
    return gt(this).concat(
      ...e.map((t) => N(t) ? gt(t) : t)
    );
  },
  entries() {
    return kn(this, "entries", (e) => (e[1] = de(e[1]), e));
  },
  every(e, t) {
    return Ke(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ke(this, "filter", e, t, (n) => n.map(de), arguments);
  },
  find(e, t) {
    return Ke(this, "find", e, t, de, arguments);
  },
  findIndex(e, t) {
    return Ke(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ke(this, "findLast", e, t, de, arguments);
  },
  findLastIndex(e, t) {
    return Ke(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ke(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Gn(this, "includes", e);
  },
  indexOf(...e) {
    return Gn(this, "indexOf", e);
  },
  join(e) {
    return gt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Gn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ke(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Mt(this, "pop");
  },
  push(...e) {
    return Mt(this, "push", e);
  },
  reduce(e, ...t) {
    return qr(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return qr(this, "reduceRight", e, t);
  },
  shift() {
    return Mt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ke(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Mt(this, "splice", e);
  },
  toReversed() {
    return gt(this).toReversed();
  },
  toSorted(e) {
    return gt(this).toSorted(e);
  },
  toSpliced(...e) {
    return gt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Mt(this, "unshift", e);
  },
  values() {
    return kn(this, "values", de);
  }
};
function kn(e, t, n) {
  const r = Rn(e), s = r[t]();
  return r !== e && !Ae(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.value && (i.value = n(i.value)), i;
  }), s;
}
const Uo = Array.prototype;
function Ke(e, t, n, r, s, i) {
  const o = Rn(e), l = o !== e && !Ae(e), f = o[t];
  if (f !== Uo[t]) {
    const h = f.apply(e, i);
    return l ? de(h) : h;
  }
  let a = n;
  o !== e && (l ? a = function(h, g) {
    return n.call(this, de(h), g, e);
  } : n.length > 2 && (a = function(h, g) {
    return n.call(this, h, g, e);
  }));
  const c = f.call(o, a, r);
  return l && s ? s(c) : c;
}
function qr(e, t, n, r) {
  const s = Rn(e);
  let i = n;
  return s !== e && (Ae(e) ? n.length > 3 && (i = function(o, l, f) {
    return n.call(this, o, l, f, e);
  }) : i = function(o, l, f) {
    return n.call(this, o, de(l), f, e);
  }), s[t](i, ...r);
}
function Gn(e, t, n) {
  const r = k(e);
  pe(r, "iterate", Vt);
  const s = r[t](...n);
  return (s === -1 || s === !1) && Rr(n[0]) ? (n[0] = k(n[0]), r[t](...n)) : s;
}
function Mt(e, t, n = []) {
  Ge(), Or();
  const r = k(e)[t].apply(e, n);
  return Ar(), qe(), r;
}
const Wo = /* @__PURE__ */ _r("__proto__,__v_isRef,__isVue"), Xs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Je)
);
function zo(e) {
  Je(e) || (e = String(e));
  const t = k(this);
  return pe(t, "has", e), t.hasOwnProperty(e);
}
class Zs {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return r === (s ? i ? si : ri : i ? ni : ti).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const o = N(t);
    if (!s) {
      let f;
      if (o && (f = Ko[n]))
        return f;
      if (n === "hasOwnProperty")
        return zo;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      ce(t) ? t : r
    );
    return (Je(n) ? Xs.has(n) : Wo(n)) || (s || pe(t, "get", n), i) ? l : ce(l) ? o && xr(n) ? l : l.value : ne(l) ? s ? Fn(l) : Mr(l) : l;
  }
}
class Qs extends Zs {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let i = t[n];
    if (!this._isShallow) {
      const f = rt(i);
      if (!Ae(r) && !rt(r) && (i = k(i), r = k(r)), !N(t) && ce(i) && !ce(r))
        return f ? !1 : (i.value = r, !0);
    }
    const o = N(t) && xr(n) ? Number(n) < t.length : J(t, n), l = Reflect.set(
      t,
      n,
      r,
      ce(t) ? t : s
    );
    return t === k(s) && (o ? Se(r, i) && We(t, "set", n, r) : We(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = J(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && We(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Je(n) || !Xs.has(n)) && pe(t, "has", n), r;
  }
  ownKeys(t) {
    return pe(
      t,
      "iterate",
      N(t) ? "length" : ht
    ), Reflect.ownKeys(t);
  }
}
class ei extends Zs {
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
const ko = /* @__PURE__ */ new Qs(), Go = /* @__PURE__ */ new ei(), qo = /* @__PURE__ */ new Qs(!0), Jo = /* @__PURE__ */ new ei(!0), or = (e) => e, en = (e) => Reflect.getPrototypeOf(e);
function Yo(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, i = k(s), o = _t(i), l = e === "entries" || e === Symbol.iterator && o, f = e === "keys" && o, a = s[e](...r), c = n ? or : t ? pn : de;
    return !t && pe(
      i,
      "iterate",
      f ? ir : ht
    ), {
      // iterator protocol
      next() {
        const { value: h, done: g } = a.next();
        return g ? { value: h, done: g } : {
          value: l ? [c(h[0]), c(h[1])] : c(h),
          done: g
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function tn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Xo(e, t) {
  const n = {
    get(s) {
      const i = this.__v_raw, o = k(i), l = k(s);
      e || (Se(s, l) && pe(o, "get", s), pe(o, "get", l));
      const { has: f } = en(o), a = t ? or : e ? pn : de;
      if (f.call(o, s))
        return a(i.get(s));
      if (f.call(o, l))
        return a(i.get(l));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && pe(k(s), "iterate", ht), Reflect.get(s, "size", s);
    },
    has(s) {
      const i = this.__v_raw, o = k(i), l = k(s);
      return e || (Se(s, l) && pe(o, "has", s), pe(o, "has", l)), s === l ? i.has(s) : i.has(s) || i.has(l);
    },
    forEach(s, i) {
      const o = this, l = o.__v_raw, f = k(l), a = t ? or : e ? pn : de;
      return !e && pe(f, "iterate", ht), l.forEach((c, h) => s.call(i, a(c), a(h), o));
    }
  };
  return le(
    n,
    e ? {
      add: tn("add"),
      set: tn("set"),
      delete: tn("delete"),
      clear: tn("clear")
    } : {
      add(s) {
        !t && !Ae(s) && !rt(s) && (s = k(s));
        const i = k(this);
        return en(i).has.call(i, s) || (i.add(s), We(i, "add", s, s)), this;
      },
      set(s, i) {
        !t && !Ae(i) && !rt(i) && (i = k(i));
        const o = k(this), { has: l, get: f } = en(o);
        let a = l.call(o, s);
        a || (s = k(s), a = l.call(o, s));
        const c = f.call(o, s);
        return o.set(s, i), a ? Se(i, c) && We(o, "set", s, i) : We(o, "add", s, i), this;
      },
      delete(s) {
        const i = k(this), { has: o, get: l } = en(i);
        let f = o.call(i, s);
        f || (s = k(s), f = o.call(i, s)), l && l.call(i, s);
        const a = i.delete(s);
        return f && We(i, "delete", s, void 0), a;
      },
      clear() {
        const s = k(this), i = s.size !== 0, o = s.clear();
        return i && We(
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
    n[s] = Yo(s, e, t);
  }), n;
}
function In(e, t) {
  const n = Xo(e, t);
  return (r, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    J(n, s) && s in r ? n : r,
    s,
    i
  );
}
const Zo = {
  get: /* @__PURE__ */ In(!1, !1)
}, Qo = {
  get: /* @__PURE__ */ In(!1, !0)
}, el = {
  get: /* @__PURE__ */ In(!0, !1)
}, tl = {
  get: /* @__PURE__ */ In(!0, !0)
}, ti = /* @__PURE__ */ new WeakMap(), ni = /* @__PURE__ */ new WeakMap(), ri = /* @__PURE__ */ new WeakMap(), si = /* @__PURE__ */ new WeakMap();
function nl(e) {
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
function rl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : nl(Eo(e));
}
function Mr(e) {
  return rt(e) ? e : Dn(
    e,
    !1,
    ko,
    Zo,
    ti
  );
}
function sl(e) {
  return Dn(
    e,
    !1,
    qo,
    Qo,
    ni
  );
}
function Fn(e) {
  return Dn(
    e,
    !0,
    Go,
    el,
    ri
  );
}
function mt(e) {
  return Dn(
    e,
    !0,
    Jo,
    tl,
    si
  );
}
function Dn(e, t, n, r, s) {
  if (!ne(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = rl(e);
  if (i === 0)
    return e;
  const o = s.get(e);
  if (o)
    return o;
  const l = new Proxy(
    e,
    i === 2 ? r : n
  );
  return s.set(e, l), l;
}
function St(e) {
  return rt(e) ? St(e.__v_raw) : !!(e && e.__v_isReactive);
}
function rt(e) {
  return !!(e && e.__v_isReadonly);
}
function Ae(e) {
  return !!(e && e.__v_isShallow);
}
function Rr(e) {
  return e ? !!e.__v_raw : !1;
}
function k(e) {
  const t = e && e.__v_raw;
  return t ? k(t) : e;
}
function il(e) {
  return !J(e, "__v_skip") && Object.isExtensible(e) && $s(e, "__v_skip", !0), e;
}
const de = (e) => ne(e) ? Mr(e) : e, pn = (e) => ne(e) ? Fn(e) : e;
function ce(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Pe(e) {
  return ii(e, !1);
}
function Ir(e) {
  return ii(e, !0);
}
function ii(e, t) {
  return ce(e) ? e : new ol(e, t);
}
class ol {
  constructor(t, n) {
    this.dep = new Mn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : k(t), this._value = n ? t : de(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || Ae(t) || rt(t);
    t = r ? t : k(t), Se(t, n) && (this._rawValue = t, this._value = r ? t : de(t), this.dep.trigger());
  }
}
function Nc(e) {
  e.dep && e.dep.trigger();
}
function Nn(e) {
  return ce(e) ? e.value : e;
}
function nt(e) {
  return $(e) ? e() : Nn(e);
}
const ll = {
  get: (e, t, n) => t === "__v_raw" ? e : Nn(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return ce(s) && !ce(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function oi(e) {
  return St(e) ? e : new Proxy(e, ll);
}
class fl {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Mn(), { get: r, set: s } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = r, this._set = s;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function li(e) {
  return new fl(e);
}
class cl {
  constructor(t, n, r) {
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Vo(k(this._object), this._key);
  }
}
class ul {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function al(e, t, n) {
  return ce(e) ? e : $(e) ? new ul(e) : ne(e) && arguments.length > 1 ? dl(e, t, n) : Pe(e);
}
function dl(e, t, n) {
  const r = e[t];
  return ce(r) ? r : new cl(e, t, n);
}
class hl {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Mn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Bt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    te !== this)
      return zs(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return qs(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function pl(e, t, n = !1) {
  let r, s;
  return $(e) ? r = e : (r = e.get, s = e.set), new hl(r, s, n);
}
const nn = {}, gn = /* @__PURE__ */ new WeakMap();
let at;
function gl(e, t = !1, n = at) {
  if (n) {
    let r = gn.get(n);
    r || gn.set(n, r = []), r.push(e);
  }
}
function ml(e, t, n = G) {
  const { immediate: r, deep: s, once: i, scheduler: o, augmentJob: l, call: f } = n, a = (P) => s ? P : Ae(P) || s === !1 || s === 0 ? ze(P, 1) : ze(P);
  let c, h, g, m, S = !1, y = !1;
  if (ce(e) ? (h = () => e.value, S = Ae(e)) : St(e) ? (h = () => a(e), S = !0) : N(e) ? (y = !0, S = e.some((P) => St(P) || Ae(P)), h = () => e.map((P) => {
    if (ce(P))
      return P.value;
    if (St(P))
      return a(P);
    if ($(P))
      return f ? f(P, 2) : P();
  })) : $(e) ? t ? h = f ? () => f(e, 2) : e : h = () => {
    if (g) {
      Ge();
      try {
        g();
      } finally {
        qe();
      }
    }
    const P = at;
    at = c;
    try {
      return f ? f(e, 3, [m]) : e(m);
    } finally {
      at = P;
    }
  } : h = Ve, t && s) {
    const P = h, V = s === !0 ? 1 / 0 : s;
    h = () => ze(P(), V);
  }
  const L = Er(), v = () => {
    c.stop(), L && L.active && wr(L.effects, c);
  };
  if (i && t) {
    const P = t;
    t = (...V) => {
      P(...V), v();
    };
  }
  let T = y ? new Array(e.length).fill(nn) : nn;
  const M = (P) => {
    if (!(!(c.flags & 1) || !c.dirty && !P))
      if (t) {
        const V = c.run();
        if (s || S || (y ? V.some((U, B) => Se(U, T[B])) : Se(V, T))) {
          g && g();
          const U = at;
          at = c;
          try {
            const B = [
              V,
              // pass undefined as the old value when it's changed for the first time
              T === nn ? void 0 : y && T[0] === nn ? [] : T,
              m
            ];
            T = V, f ? f(t, 3, B) : (
              // @ts-expect-error
              t(...B)
            );
          } finally {
            at = U;
          }
        }
      } else
        c.run();
  };
  return l && l(M), c = new Us(h), c.scheduler = o ? () => o(M, !1) : M, m = (P) => gl(P, !1, c), g = c.onStop = () => {
    const P = gn.get(c);
    if (P) {
      if (f)
        f(P, 4);
      else
        for (const V of P) V();
      gn.delete(c);
    }
  }, t ? r ? M(!0) : T = c.run() : o ? o(M.bind(null, !0), !0) : c.run(), v.pause = c.pause.bind(c), v.resume = c.resume.bind(c), v.stop = v, v;
}
function ze(e, t = 1 / 0, n) {
  if (t <= 0 || !ne(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, ce(e))
    ze(e.value, t, n);
  else if (N(e))
    for (let r = 0; r < e.length; r++)
      ze(e[r], t, n);
  else if (Ds(e) || _t(e))
    e.forEach((r) => {
      ze(r, t, n);
    });
  else if (js(e)) {
    for (const r in e)
      ze(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && ze(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Gt(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    qt(s, t, n);
  }
}
function Ie(e, t, n, r) {
  if ($(e)) {
    const s = Gt(e, t, n, r);
    return s && Ns(s) && s.catch((i) => {
      qt(i, t, n);
    }), s;
  }
  if (N(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(Ie(e[i], t, n, r));
    return s;
  }
}
function qt(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || G;
  if (t) {
    let l = t.parent;
    const f = t.proxy, a = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const c = l.ec;
      if (c) {
        for (let h = 0; h < c.length; h++)
          if (c[h](e, f, a) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Ge(), Gt(i, null, 10, [
        e,
        f,
        a
      ]), qe();
      return;
    }
  }
  yl(e, n, s, r, o);
}
function yl(e, t, n, r = !0, s = !1) {
  if (s)
    throw e;
  console.error(e);
}
const ve = [];
let He = -1;
const wt = [];
let Qe = null, yt = 0;
const fi = /* @__PURE__ */ Promise.resolve();
let mn = null;
function Fr(e) {
  const t = mn || fi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function vl(e) {
  let t = He + 1, n = ve.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = ve[r], i = Kt(s);
    i < e || i === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Dr(e) {
  if (!(e.flags & 1)) {
    const t = Kt(e), n = ve[ve.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Kt(n) ? ve.push(e) : ve.splice(vl(t), 0, e), e.flags |= 1, ci();
  }
}
function ci() {
  mn || (mn = fi.then(ai));
}
function bl(e) {
  N(e) ? wt.push(...e) : Qe && e.id === -1 ? Qe.splice(yt + 1, 0, e) : e.flags & 1 || (wt.push(e), e.flags |= 1), ci();
}
function Jr(e, t, n = He + 1) {
  for (; n < ve.length; n++) {
    const r = ve[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      ve.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function ui(e) {
  if (wt.length) {
    const t = [...new Set(wt)].sort(
      (n, r) => Kt(n) - Kt(r)
    );
    if (wt.length = 0, Qe) {
      Qe.push(...t);
      return;
    }
    for (Qe = t, yt = 0; yt < Qe.length; yt++) {
      const n = Qe[yt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Qe = null, yt = 0;
  }
}
const Kt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ai(e) {
  try {
    for (He = 0; He < ve.length; He++) {
      const t = ve[He];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Gt(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; He < ve.length; He++) {
      const t = ve[He];
      t && (t.flags &= -2);
    }
    He = -1, ve.length = 0, ui(), mn = null, (ve.length || wt.length) && ai();
  }
}
let ae = null, di = null;
function yn(e) {
  const t = ae;
  return ae = e, di = e && e.type.__scopeId || null, t;
}
function _l(e, t = ae, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && cs(-1);
    const i = yn(t);
    let o;
    try {
      o = e(...s);
    } finally {
      yn(i), r._d && cs(1);
    }
    return o;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Lc(e, t) {
  if (ae === null)
    return e;
  const n = Bn(ae), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, o, l, f = G] = t[s];
    i && ($(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && ze(o), r.push({
      dir: i,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: f
    }));
  }
  return e;
}
function ft(e, t, n, r) {
  const s = e.dirs, i = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    i && (l.oldValue = i[o].value);
    let f = l.dir[r];
    f && (Ge(), Ie(f, n, 8, [
      e.el,
      l,
      e,
      t
    ]), qe());
  }
}
const hi = Symbol("_vte"), pi = (e) => e.__isTeleport, jt = (e) => e && (e.disabled || e.disabled === ""), Yr = (e) => e && (e.defer || e.defer === ""), Xr = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Zr = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, lr = (e, t) => {
  const n = e && e.to;
  return ie(n) ? t ? t(n) : null : n;
}, gi = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, s, i, o, l, f, a) {
    const {
      mc: c,
      pc: h,
      pbc: g,
      o: { insert: m, querySelector: S, createText: y, createComment: L }
    } = a, v = jt(t.props);
    let { shapeFlag: T, children: M, dynamicChildren: P } = t;
    if (e == null) {
      const V = t.el = y(""), U = t.anchor = y("");
      m(V, n, r), m(U, n, r);
      const B = (I, K) => {
        T & 16 && (s && s.isCE && (s.ce._teleportTarget = I), c(
          M,
          I,
          K,
          s,
          i,
          o,
          l,
          f
        ));
      }, z = () => {
        const I = t.target = lr(t.props, S), K = mi(I, t, y, m);
        I && (o !== "svg" && Xr(I) ? o = "svg" : o !== "mathml" && Zr(I) && (o = "mathml"), v || (B(I, K), fn(t, !1)));
      };
      v && (B(n, U), fn(t, !0)), Yr(t.props) ? (t.el.__isMounted = !1, ye(() => {
        z(), delete t.el.__isMounted;
      }, i)) : z();
    } else {
      if (Yr(t.props) && e.el.__isMounted === !1) {
        ye(() => {
          gi.process(
            e,
            t,
            n,
            r,
            s,
            i,
            o,
            l,
            f,
            a
          );
        }, i);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const V = t.anchor = e.anchor, U = t.target = e.target, B = t.targetAnchor = e.targetAnchor, z = jt(e.props), I = z ? n : U, K = z ? V : B;
      if (o === "svg" || Xr(U) ? o = "svg" : (o === "mathml" || Zr(U)) && (o = "mathml"), P ? (g(
        e.dynamicChildren,
        P,
        I,
        s,
        i,
        o,
        l
      ), Hr(e, t, !0)) : f || h(
        e,
        t,
        I,
        K,
        s,
        i,
        o,
        l,
        !1
      ), v)
        z ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : rn(
          t,
          n,
          V,
          a,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const X = t.target = lr(
          t.props,
          S
        );
        X && rn(
          t,
          X,
          null,
          a,
          0
        );
      } else z && rn(
        t,
        U,
        B,
        a,
        1
      );
      fn(t, v);
    }
  },
  remove(e, t, n, { um: r, o: { remove: s } }, i) {
    const {
      shapeFlag: o,
      children: l,
      anchor: f,
      targetStart: a,
      targetAnchor: c,
      target: h,
      props: g
    } = e;
    if (h && (s(a), s(c)), i && s(f), o & 16) {
      const m = i || !jt(g);
      for (let S = 0; S < l.length; S++) {
        const y = l[S];
        r(
          y,
          t,
          n,
          m,
          !!y.dynamicChildren
        );
      }
    }
  },
  move: rn,
  hydrate: Sl
};
function rn(e, t, n, { o: { insert: r }, m: s }, i = 2) {
  i === 0 && r(e.targetAnchor, t, n);
  const { el: o, anchor: l, shapeFlag: f, children: a, props: c } = e, h = i === 2;
  if (h && r(o, t, n), (!h || jt(c)) && f & 16)
    for (let g = 0; g < a.length; g++)
      s(
        a[g],
        t,
        n,
        2
      );
  h && r(l, t, n);
}
function Sl(e, t, n, r, s, i, {
  o: { nextSibling: o, parentNode: l, querySelector: f, insert: a, createText: c }
}, h) {
  const g = t.target = lr(
    t.props,
    f
  );
  if (g) {
    const m = jt(t.props), S = g._lpa || g.firstChild;
    if (t.shapeFlag & 16)
      if (m)
        t.anchor = h(
          o(e),
          t,
          l(e),
          n,
          r,
          s,
          i
        ), t.targetStart = S, t.targetAnchor = S && o(S);
      else {
        t.anchor = o(e);
        let y = S;
        for (; y; ) {
          if (y && y.nodeType === 8) {
            if (y.data === "teleport start anchor")
              t.targetStart = y;
            else if (y.data === "teleport anchor") {
              t.targetAnchor = y, g._lpa = t.targetAnchor && o(t.targetAnchor);
              break;
            }
          }
          y = o(y);
        }
        t.targetAnchor || mi(g, t, c, a), h(
          S && o(S),
          t,
          g,
          n,
          r,
          s,
          i
        );
      }
    fn(t, m);
  }
  return t.anchor && o(t.anchor);
}
const jc = gi;
function fn(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, s;
    for (t ? (r = e.el, s = e.anchor) : (r = e.targetStart, s = e.targetAnchor); r && r !== s; )
      r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function mi(e, t, n, r) {
  const s = t.targetStart = n(""), i = t.targetAnchor = n("");
  return s[hi] = i, e && (r(s, e), r(i, e)), i;
}
const et = Symbol("_leaveCb"), sn = Symbol("_enterCb");
function yi() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return jn(() => {
    e.isMounted = !0;
  }), Ti(() => {
    e.isUnmounting = !0;
  }), e;
}
const Oe = [Function, Array], vi = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Oe,
  onEnter: Oe,
  onAfterEnter: Oe,
  onEnterCancelled: Oe,
  // leave
  onBeforeLeave: Oe,
  onLeave: Oe,
  onAfterLeave: Oe,
  onLeaveCancelled: Oe,
  // appear
  onBeforeAppear: Oe,
  onAppear: Oe,
  onAfterAppear: Oe,
  onAppearCancelled: Oe
}, bi = (e) => {
  const t = e.subTree;
  return t.component ? bi(t.component) : t;
}, wl = {
  name: "BaseTransition",
  props: vi,
  setup(e, { slots: t }) {
    const n = Yt(), r = yi();
    return () => {
      const s = t.default && Nr(t.default(), !0);
      if (!s || !s.length)
        return;
      const i = _i(s), o = k(e), { mode: l } = o;
      if (r.isLeaving)
        return qn(i);
      const f = Qr(i);
      if (!f)
        return qn(i);
      let a = Ut(
        f,
        o,
        r,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => a = h
      );
      f.type !== ge && pt(f, a);
      let c = n.subTree && Qr(n.subTree);
      if (c && c.type !== ge && !dt(f, c) && bi(n).type !== ge) {
        let h = Ut(
          c,
          o,
          r,
          n
        );
        if (pt(c, h), l === "out-in" && f.type !== ge)
          return r.isLeaving = !0, h.afterLeave = () => {
            r.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, c = void 0;
          }, qn(i);
        l === "in-out" && f.type !== ge ? h.delayLeave = (g, m, S) => {
          const y = Si(
            r,
            c
          );
          y[String(c.key)] = c, g[et] = () => {
            m(), g[et] = void 0, delete a.delayedLeave, c = void 0;
          }, a.delayedLeave = () => {
            S(), delete a.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return i;
    };
  }
};
function _i(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== ge) {
        t = n;
        break;
      }
  }
  return t;
}
const xl = wl;
function Si(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function Ut(e, t, n, r, s) {
  const {
    appear: i,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: f,
    onEnter: a,
    onAfterEnter: c,
    onEnterCancelled: h,
    onBeforeLeave: g,
    onLeave: m,
    onAfterLeave: S,
    onLeaveCancelled: y,
    onBeforeAppear: L,
    onAppear: v,
    onAfterAppear: T,
    onAppearCancelled: M
  } = t, P = String(e.key), V = Si(n, e), U = (I, K) => {
    I && Ie(
      I,
      r,
      9,
      K
    );
  }, B = (I, K) => {
    const X = K[1];
    U(I, K), N(I) ? I.every((R) => R.length <= 1) && X() : I.length <= 1 && X();
  }, z = {
    mode: o,
    persisted: l,
    beforeEnter(I) {
      let K = f;
      if (!n.isMounted)
        if (i)
          K = L || f;
        else
          return;
      I[et] && I[et](
        !0
        /* cancelled */
      );
      const X = V[P];
      X && dt(e, X) && X.el[et] && X.el[et](), U(K, [I]);
    },
    enter(I) {
      let K = a, X = c, R = h;
      if (!n.isMounted)
        if (i)
          K = v || a, X = T || c, R = M || h;
        else
          return;
      let Z = !1;
      const j = I[sn] = (re) => {
        Z || (Z = !0, re ? U(R, [I]) : U(X, [I]), z.delayedLeave && z.delayedLeave(), I[sn] = void 0);
      };
      K ? B(K, [I, j]) : j();
    },
    leave(I, K) {
      const X = String(e.key);
      if (I[sn] && I[sn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return K();
      U(g, [I]);
      let R = !1;
      const Z = I[et] = (j) => {
        R || (R = !0, K(), j ? U(y, [I]) : U(S, [I]), I[et] = void 0, V[X] === e && delete V[X]);
      };
      V[X] = e, m ? B(m, [I, Z]) : Z();
    },
    clone(I) {
      const K = Ut(
        I,
        t,
        n,
        r,
        s
      );
      return s && s(K), K;
    }
  };
  return z;
}
function qn(e) {
  if (Jt(e))
    return e = st(e), e.children = null, e;
}
function Qr(e) {
  if (!Jt(e))
    return pi(e.type) && e.children ? _i(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && $(n.default))
      return n.default();
  }
}
function pt(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, pt(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Nr(e, t = !1, n) {
  let r = [], s = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === we ? (o.patchFlag & 128 && s++, r = r.concat(
      Nr(o.children, t, l)
    )) : (t || o.type !== ge) && r.push(l != null ? st(o, { key: l }) : o);
  }
  if (s > 1)
    for (let i = 0; i < r.length; i++)
      r[i].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function wi(e, t) {
  return $(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    le({ name: e.name }, t, { setup: e })
  ) : e;
}
function Lr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function vn(e, t, n, r, s = !1) {
  if (N(e)) {
    e.forEach(
      (S, y) => vn(
        S,
        t && (N(t) ? t[y] : t),
        n,
        r,
        s
      )
    );
    return;
  }
  if (xt(r) && !s) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && vn(e, t, n, r.component.subTree);
    return;
  }
  const i = r.shapeFlag & 4 ? Bn(r.component) : r.el, o = s ? null : i, { i: l, r: f } = e, a = t && t.r, c = l.refs === G ? l.refs = {} : l.refs, h = l.setupState, g = k(h), m = h === G ? () => !1 : (S) => J(g, S);
  if (a != null && a !== f && (ie(a) ? (c[a] = null, m(a) && (h[a] = null)) : ce(a) && (a.value = null)), $(f))
    Gt(f, l, 12, [o, c]);
  else {
    const S = ie(f), y = ce(f);
    if (S || y) {
      const L = () => {
        if (e.f) {
          const v = S ? m(f) ? h[f] : c[f] : f.value;
          s ? N(v) && wr(v, i) : N(v) ? v.includes(i) || v.push(i) : S ? (c[f] = [i], m(f) && (h[f] = c[f])) : (f.value = [i], e.k && (c[e.k] = f.value));
        } else S ? (c[f] = o, m(f) && (h[f] = o)) : y && (f.value = o, e.k && (c[e.k] = o));
      };
      o ? (L.id = -1, ye(L, n)) : L();
    }
  }
}
const es = (e) => e.nodeType === 8;
Pn().requestIdleCallback;
Pn().cancelIdleCallback;
function Cl(e, t) {
  if (es(e) && e.data === "[") {
    let n = 1, r = e.nextSibling;
    for (; r; ) {
      if (r.nodeType === 1) {
        if (t(r) === !1)
          break;
      } else if (es(r))
        if (r.data === "]") {
          if (--n === 0) break;
        } else r.data === "[" && n++;
      r = r.nextSibling;
    }
  } else
    t(e);
}
const xt = (e) => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function $c(e) {
  $(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: r,
    delay: s = 200,
    hydrate: i,
    timeout: o,
    // undefined = never times out
    suspensible: l = !0,
    onError: f
  } = e;
  let a = null, c, h = 0;
  const g = () => (h++, a = null, m()), m = () => {
    let S;
    return a || (S = a = t().catch((y) => {
      if (y = y instanceof Error ? y : new Error(String(y)), f)
        return new Promise((L, v) => {
          f(y, () => L(g()), () => v(y), h + 1);
        });
      throw y;
    }).then((y) => S !== a && a ? a : (y && (y.__esModule || y[Symbol.toStringTag] === "Module") && (y = y.default), c = y, y)));
  };
  return /* @__PURE__ */ wi({
    name: "AsyncComponentWrapper",
    __asyncLoader: m,
    __asyncHydrate(S, y, L) {
      const v = i ? () => {
        const M = i(
          () => {
            L();
          },
          (P) => Cl(S, P)
        );
        M && (y.bum || (y.bum = [])).push(M), (y.u || (y.u = [])).push(() => !0);
      } : L;
      c ? v() : m().then(() => !y.isUnmounted && v());
    },
    get __asyncResolved() {
      return c;
    },
    setup() {
      const S = ue;
      if (Lr(S), c)
        return () => Jn(c, S);
      const y = (M) => {
        a = null, qt(
          M,
          S,
          13,
          !r
        );
      };
      if (l && S.suspense || Tt)
        return m().then((M) => () => Jn(M, S)).catch((M) => (y(M), () => r ? oe(r, {
          error: M
        }) : null));
      const L = Pe(!1), v = Pe(), T = Pe(!!s);
      return s && setTimeout(() => {
        T.value = !1;
      }, s), o != null && setTimeout(() => {
        if (!L.value && !v.value) {
          const M = new Error(
            `Async component timed out after ${o}ms.`
          );
          y(M), v.value = M;
        }
      }, o), m().then(() => {
        L.value = !0, S.parent && Jt(S.parent.vnode) && S.parent.update();
      }).catch((M) => {
        y(M), v.value = M;
      }), () => {
        if (L.value && c)
          return Jn(c, S);
        if (v.value && r)
          return oe(r, {
            error: v.value
          });
        if (n && !T.value)
          return oe(n);
      };
    }
  });
}
function Jn(e, t) {
  const { ref: n, props: r, children: s, ce: i } = t.vnode, o = oe(e, r, s);
  return o.ref = n, o.ce = i, delete t.vnode.ce, o;
}
const Jt = (e) => e.type.__isKeepAlive;
function Tl(e, t) {
  xi(e, "a", t);
}
function El(e, t) {
  xi(e, "da", t);
}
function xi(e, t, n = ue) {
  const r = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Ln(t, r, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      Jt(s.parent.vnode) && Ol(r, t, n, s), s = s.parent;
  }
}
function Ol(e, t, n, r) {
  const s = Ln(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Ei(() => {
    wr(r[t], s);
  }, n);
}
function Ln(e, t, n = ue, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Ge();
      const l = Xt(n), f = Ie(t, n, e, o);
      return l(), qe(), f;
    });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const Ye = (e) => (t, n = ue) => {
  (!Tt || e === "sp") && Ln(e, (...r) => t(...r), n);
}, Al = Ye("bm"), jn = Ye("m"), Pl = Ye(
  "bu"
), Ci = Ye("u"), Ti = Ye(
  "bum"
), Ei = Ye("um"), Ml = Ye(
  "sp"
), Rl = Ye("rtg"), Il = Ye("rtc");
function Fl(e, t = ue) {
  Ln("ec", e, t);
}
const Oi = "components";
function Hc(e, t) {
  return Pi(Oi, e, !0, t) || e;
}
const Ai = Symbol.for("v-ndc");
function Bc(e) {
  return ie(e) ? Pi(Oi, e, !1) || e : e || Ai;
}
function Pi(e, t, n = !0, r = !1) {
  const s = ae || ue;
  if (s) {
    const i = s.type;
    {
      const l = wf(
        i,
        !1
      );
      if (l && (l === t || l === Ee(t) || l === An(Ee(t))))
        return i;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      ts(s[e] || i[e], t) || // global registration
      ts(s.appContext[e], t)
    );
    return !o && r ? i : o;
  }
}
function ts(e, t) {
  return e && (e[t] || e[Ee(t)] || e[An(Ee(t))]);
}
function Vc(e, t, n, r) {
  let s;
  const i = n, o = N(e);
  if (o || ie(e)) {
    const l = o && St(e);
    let f = !1, a = !1;
    l && (f = !Ae(e), a = rt(e), e = Rn(e)), s = new Array(e.length);
    for (let c = 0, h = e.length; c < h; c++)
      s[c] = t(
        f ? a ? pn(de(e[c])) : de(e[c]) : e[c],
        c,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let l = 0; l < e; l++)
      s[l] = t(l + 1, l, void 0, i);
  } else if (ne(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (l, f) => t(l, f, void 0, i)
      );
    else {
      const l = Object.keys(e);
      s = new Array(l.length);
      for (let f = 0, a = l.length; f < a; f++) {
        const c = l[f];
        s[f] = t(e[c], c, f, i);
      }
    }
  else
    s = [];
  return s;
}
function Kc(e, t, n = {}, r, s) {
  if (ae.ce || ae.parent && xt(ae.parent) && ae.parent.ce)
    return dr(), hr(
      we,
      null,
      [oe("slot", n, r)],
      64
    );
  let i = e[t];
  i && i._c && (i._d = !1), dr();
  const o = i && Mi(i(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  o && o.key, f = hr(
    we,
    {
      key: (l && !Je(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      ""
    },
    o || [],
    o && e._ === 1 ? 64 : -2
  );
  return f.scopeId && (f.slotScopeIds = [f.scopeId + "-s"]), i && i._c && (i._d = !0), f;
}
function Mi(e) {
  return e.some((t) => zt(t) ? !(t.type === ge || t.type === we && !Mi(t.children)) : !0) ? e : null;
}
const fr = (e) => e ? Yi(e) ? Bn(e) : fr(e.parent) : null, $t = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ le(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => fr(e.parent),
    $root: (e) => fr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ii(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Dr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Fr.bind(e.proxy)),
    $watch: (e) => nf.bind(e)
  })
), Yn = (e, t) => e !== G && !e.__isScriptSetup && J(e, t), Dl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: i, accessCache: o, type: l, appContext: f } = e;
    let a;
    if (t[0] !== "$") {
      const m = o[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return r[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (Yn(r, t))
          return o[t] = 1, r[t];
        if (s !== G && J(s, t))
          return o[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && J(a, t)
        )
          return o[t] = 3, i[t];
        if (n !== G && J(n, t))
          return o[t] = 4, n[t];
        cr && (o[t] = 0);
      }
    }
    const c = $t[t];
    let h, g;
    if (c)
      return t === "$attrs" && pe(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (h = l.__cssModules) && (h = h[t])
    )
      return h;
    if (n !== G && J(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      g = f.config.globalProperties, J(g, t)
    )
      return g[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: i } = e;
    return Yn(s, t) ? (s[t] = n, !0) : r !== G && J(r, t) ? (r[t] = n, !0) : J(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: i }
  }, o) {
    let l;
    return !!n[o] || e !== G && J(e, o) || Yn(t, o) || (l = i[0]) && J(l, o) || J(r, o) || J($t, o) || J(s.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : J(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function bn(e) {
  return N(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Uc(e, t) {
  return !e || !t ? e || t : N(e) && N(t) ? e.concat(t) : le({}, bn(e), bn(t));
}
let cr = !0;
function Nl(e) {
  const t = Ii(e), n = e.proxy, r = e.ctx;
  cr = !1, t.beforeCreate && ns(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: i,
    methods: o,
    watch: l,
    provide: f,
    inject: a,
    // lifecycle
    created: c,
    beforeMount: h,
    mounted: g,
    beforeUpdate: m,
    updated: S,
    activated: y,
    deactivated: L,
    beforeDestroy: v,
    beforeUnmount: T,
    destroyed: M,
    unmounted: P,
    render: V,
    renderTracked: U,
    renderTriggered: B,
    errorCaptured: z,
    serverPrefetch: I,
    // public API
    expose: K,
    inheritAttrs: X,
    // assets
    components: R,
    directives: Z,
    filters: j
  } = t;
  if (a && Ll(a, r, null), o)
    for (const se in o) {
      const Q = o[se];
      $(Q) && (r[se] = Q.bind(n));
    }
  if (s) {
    const se = s.call(n, n);
    ne(se) && (e.data = Mr(se));
  }
  if (cr = !0, i)
    for (const se in i) {
      const Q = i[se], ot = $(Q) ? Q.bind(n, n) : $(Q.get) ? Q.get.bind(n, n) : Ve, Zt = !$(Q) && $(Q.set) ? Q.set.bind(n) : Ve, lt = fe({
        get: ot,
        set: Zt
      });
      Object.defineProperty(r, se, {
        enumerable: !0,
        configurable: !0,
        get: () => lt.value,
        set: (Fe) => lt.value = Fe
      });
    }
  if (l)
    for (const se in l)
      Ri(l[se], r, n, se);
  if (f) {
    const se = $(f) ? f.call(n) : f;
    Reflect.ownKeys(se).forEach((Q) => {
      Kl(Q, se[Q]);
    });
  }
  c && ns(c, e, "c");
  function q(se, Q) {
    N(Q) ? Q.forEach((ot) => se(ot.bind(n))) : Q && se(Q.bind(n));
  }
  if (q(Al, h), q(jn, g), q(Pl, m), q(Ci, S), q(Tl, y), q(El, L), q(Fl, z), q(Il, U), q(Rl, B), q(Ti, T), q(Ei, P), q(Ml, I), N(K))
    if (K.length) {
      const se = e.exposed || (e.exposed = {});
      K.forEach((Q) => {
        Object.defineProperty(se, Q, {
          get: () => n[Q],
          set: (ot) => n[Q] = ot
        });
      });
    } else e.exposed || (e.exposed = {});
  V && e.render === Ve && (e.render = V), X != null && (e.inheritAttrs = X), R && (e.components = R), Z && (e.directives = Z), I && Lr(e);
}
function Ll(e, t, n = Ve) {
  N(e) && (e = ur(e));
  for (const r in e) {
    const s = e[r];
    let i;
    ne(s) ? "default" in s ? i = cn(
      s.from || r,
      s.default,
      !0
    ) : i = cn(s.from || r) : i = cn(s), ce(i) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[r] = i;
  }
}
function ns(e, t, n) {
  Ie(
    N(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Ri(e, t, n, r) {
  let s = r.includes(".") ? Ui(n, r) : () => n[r];
  if (ie(e)) {
    const i = t[e];
    $(i) && Re(s, i);
  } else if ($(e))
    Re(s, e.bind(n));
  else if (ne(e))
    if (N(e))
      e.forEach((i) => Ri(i, t, n, r));
    else {
      const i = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(i) && Re(s, i, e);
    }
}
function Ii(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let f;
  return l ? f = l : !s.length && !n && !r ? f = t : (f = {}, s.length && s.forEach(
    (a) => _n(f, a, o, !0)
  ), _n(f, t, o)), ne(t) && i.set(t, f), f;
}
function _n(e, t, n, r = !1) {
  const { mixins: s, extends: i } = t;
  i && _n(e, i, n, !0), s && s.forEach(
    (o) => _n(e, o, n, !0)
  );
  for (const o in t)
    if (!(r && o === "expose")) {
      const l = jl[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const jl = {
  data: rs,
  props: ss,
  emits: ss,
  // objects
  methods: Ft,
  computed: Ft,
  // lifecycle
  beforeCreate: me,
  created: me,
  beforeMount: me,
  mounted: me,
  beforeUpdate: me,
  updated: me,
  beforeDestroy: me,
  beforeUnmount: me,
  destroyed: me,
  unmounted: me,
  activated: me,
  deactivated: me,
  errorCaptured: me,
  serverPrefetch: me,
  // assets
  components: Ft,
  directives: Ft,
  // watch
  watch: Hl,
  // provide / inject
  provide: rs,
  inject: $l
};
function rs(e, t) {
  return t ? e ? function() {
    return le(
      $(e) ? e.call(this, this) : e,
      $(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function $l(e, t) {
  return Ft(ur(e), ur(t));
}
function ur(e) {
  if (N(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function me(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ft(e, t) {
  return e ? le(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ss(e, t) {
  return e ? N(e) && N(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : le(
    /* @__PURE__ */ Object.create(null),
    bn(e),
    bn(t ?? {})
  ) : t;
}
function Hl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = le(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = me(e[r], t[r]);
  return n;
}
function Fi() {
  return {
    app: null,
    config: {
      isNativeTag: Co,
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
let Bl = 0;
function Vl(e, t) {
  return function(r, s = null) {
    $(r) || (r = le({}, r)), s != null && !ne(s) && (s = null);
    const i = Fi(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const a = i.app = {
      _uid: Bl++,
      _component: r,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: Cf,
      get config() {
        return i.config;
      },
      set config(c) {
      },
      use(c, ...h) {
        return o.has(c) || (c && $(c.install) ? (o.add(c), c.install(a, ...h)) : $(c) && (o.add(c), c(a, ...h))), a;
      },
      mixin(c) {
        return i.mixins.includes(c) || i.mixins.push(c), a;
      },
      component(c, h) {
        return h ? (i.components[c] = h, a) : i.components[c];
      },
      directive(c, h) {
        return h ? (i.directives[c] = h, a) : i.directives[c];
      },
      mount(c, h, g) {
        if (!f) {
          const m = a._ceVNode || oe(r, s);
          return m.appContext = i, g === !0 ? g = "svg" : g === !1 && (g = void 0), e(m, c, g), f = !0, a._container = c, c.__vue_app__ = a, Bn(m.component);
        }
      },
      onUnmount(c) {
        l.push(c);
      },
      unmount() {
        f && (Ie(
          l,
          a._instance,
          16
        ), e(null, a._container), delete a._container.__vue_app__);
      },
      provide(c, h) {
        return i.provides[c] = h, a;
      },
      runWithContext(c) {
        const h = Ct;
        Ct = a;
        try {
          return c();
        } finally {
          Ct = h;
        }
      }
    };
    return a;
  };
}
let Ct = null;
function Kl(e, t) {
  if (ue) {
    let n = ue.provides;
    const r = ue.parent && ue.parent.provides;
    r === n && (n = ue.provides = Object.create(r)), n[e] = t;
  }
}
function cn(e, t, n = !1) {
  const r = ue || ae;
  if (r || Ct) {
    let s = Ct ? Ct._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && $(t) ? t.call(r && r.proxy) : t;
  }
}
const Di = {}, Ni = () => Object.create(Di), Li = (e) => Object.getPrototypeOf(e) === Di;
function Ul(e, t, n, r = !1) {
  const s = {}, i = Ni();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ji(e, t, s, i);
  for (const o in e.propsOptions[0])
    o in s || (s[o] = void 0);
  n ? e.props = r ? s : sl(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i;
}
function Wl(e, t, n, r) {
  const {
    props: s,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = k(s), [f] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const c = e.vnode.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        let g = c[h];
        if ($n(e.emitsOptions, g))
          continue;
        const m = t[g];
        if (f)
          if (J(i, g))
            m !== i[g] && (i[g] = m, a = !0);
          else {
            const S = Ee(g);
            s[S] = ar(
              f,
              l,
              S,
              m,
              e,
              !1
            );
          }
        else
          m !== i[g] && (i[g] = m, a = !0);
      }
    }
  } else {
    ji(e, t, s, i) && (a = !0);
    let c;
    for (const h in l)
      (!t || // for camelCase
      !J(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = it(h)) === h || !J(t, c))) && (f ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[c] !== void 0) && (s[h] = ar(
        f,
        l,
        h,
        void 0,
        e,
        !0
      )) : delete s[h]);
    if (i !== l)
      for (const h in i)
        (!t || !J(t, h)) && (delete i[h], a = !0);
  }
  a && We(e.attrs, "set", "");
}
function ji(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let f in t) {
      if (Dt(f))
        continue;
      const a = t[f];
      let c;
      s && J(s, c = Ee(f)) ? !i || !i.includes(c) ? n[c] = a : (l || (l = {}))[c] = a : $n(e.emitsOptions, f) || (!(f in r) || a !== r[f]) && (r[f] = a, o = !0);
    }
  if (i) {
    const f = k(n), a = l || G;
    for (let c = 0; c < i.length; c++) {
      const h = i[c];
      n[h] = ar(
        s,
        f,
        h,
        a[h],
        e,
        !J(a, h)
      );
    }
  }
  return o;
}
function ar(e, t, n, r, s, i) {
  const o = e[n];
  if (o != null) {
    const l = J(o, "default");
    if (l && r === void 0) {
      const f = o.default;
      if (o.type !== Function && !o.skipFactory && $(f)) {
        const { propsDefaults: a } = s;
        if (n in a)
          r = a[n];
        else {
          const c = Xt(s);
          r = a[n] = f.call(
            null,
            t
          ), c();
        }
      } else
        r = f;
      s.ce && s.ce._setProp(n, r);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !l ? r = !1 : o[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === it(n)) && (r = !0));
  }
  return r;
}
const zl = /* @__PURE__ */ new WeakMap();
function $i(e, t, n = !1) {
  const r = n ? zl : t.propsCache, s = r.get(e);
  if (s)
    return s;
  const i = e.props, o = {}, l = [];
  let f = !1;
  if (!$(e)) {
    const c = (h) => {
      f = !0;
      const [g, m] = $i(h, t, !0);
      le(o, g), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!i && !f)
    return ne(e) && r.set(e, bt), bt;
  if (N(i))
    for (let c = 0; c < i.length; c++) {
      const h = Ee(i[c]);
      is(h) && (o[h] = G);
    }
  else if (i)
    for (const c in i) {
      const h = Ee(c);
      if (is(h)) {
        const g = i[c], m = o[h] = N(g) || $(g) ? { type: g } : le({}, g), S = m.type;
        let y = !1, L = !0;
        if (N(S))
          for (let v = 0; v < S.length; ++v) {
            const T = S[v], M = $(T) && T.name;
            if (M === "Boolean") {
              y = !0;
              break;
            } else M === "String" && (L = !1);
          }
        else
          y = $(S) && S.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = y, m[
          1
          /* shouldCastTrue */
        ] = L, (y || J(m, "default")) && l.push(h);
      }
    }
  const a = [o, l];
  return ne(e) && r.set(e, a), a;
}
function is(e) {
  return e[0] !== "$" && !Dt(e);
}
const jr = (e) => e[0] === "_" || e === "$stable", $r = (e) => N(e) ? e.map(Be) : [Be(e)], kl = (e, t, n) => {
  if (t._n)
    return t;
  const r = _l((...s) => $r(t(...s)), n);
  return r._c = !1, r;
}, Hi = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (jr(s)) continue;
    const i = e[s];
    if ($(i))
      t[s] = kl(s, i, r);
    else if (i != null) {
      const o = $r(i);
      t[s] = () => o;
    }
  }
}, Bi = (e, t) => {
  const n = $r(t);
  e.slots.default = () => n;
}, Vi = (e, t, n) => {
  for (const r in t)
    (n || !jr(r)) && (e[r] = t[r]);
}, Gl = (e, t, n) => {
  const r = e.slots = Ni();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (Vi(r, t, n), n && $s(r, "_", s, !0)) : Hi(t, r);
  } else t && Bi(e, t);
}, ql = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let i = !0, o = G;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : Vi(s, t, n) : (i = !t.$stable, Hi(t, s)), o = t;
  } else t && (Bi(e, t), o = { default: 1 });
  if (i)
    for (const l in s)
      !jr(l) && o[l] == null && delete s[l];
}, ye = cf;
function Jl(e) {
  return Yl(e);
}
function Yl(e, t) {
  const n = Pn();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: s,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: f,
    setText: a,
    setElementText: c,
    parentNode: h,
    nextSibling: g,
    setScopeId: m = Ve,
    insertStaticContent: S
  } = e, y = (u, d, p, w = null, b = null, _ = null, O = void 0, E = null, C = !!d.dynamicChildren) => {
    if (u === d)
      return;
    u && !dt(u, d) && (w = Qt(u), Fe(u, b, _, !0), u = null), d.patchFlag === -2 && (C = !1, d.dynamicChildren = null);
    const { type: x, ref: D, shapeFlag: A } = d;
    switch (x) {
      case Hn:
        L(u, d, p, w);
        break;
      case ge:
        v(u, d, p, w);
        break;
      case un:
        u == null && T(d, p, w, O);
        break;
      case we:
        R(
          u,
          d,
          p,
          w,
          b,
          _,
          O,
          E,
          C
        );
        break;
      default:
        A & 1 ? V(
          u,
          d,
          p,
          w,
          b,
          _,
          O,
          E,
          C
        ) : A & 6 ? Z(
          u,
          d,
          p,
          w,
          b,
          _,
          O,
          E,
          C
        ) : (A & 64 || A & 128) && x.process(
          u,
          d,
          p,
          w,
          b,
          _,
          O,
          E,
          C,
          At
        );
    }
    D != null && b && vn(D, u && u.ref, _, d || u, !d);
  }, L = (u, d, p, w) => {
    if (u == null)
      r(
        d.el = l(d.children),
        p,
        w
      );
    else {
      const b = d.el = u.el;
      d.children !== u.children && a(b, d.children);
    }
  }, v = (u, d, p, w) => {
    u == null ? r(
      d.el = f(d.children || ""),
      p,
      w
    ) : d.el = u.el;
  }, T = (u, d, p, w) => {
    [u.el, u.anchor] = S(
      u.children,
      d,
      p,
      w,
      u.el,
      u.anchor
    );
  }, M = ({ el: u, anchor: d }, p, w) => {
    let b;
    for (; u && u !== d; )
      b = g(u), r(u, p, w), u = b;
    r(d, p, w);
  }, P = ({ el: u, anchor: d }) => {
    let p;
    for (; u && u !== d; )
      p = g(u), s(u), u = p;
    s(d);
  }, V = (u, d, p, w, b, _, O, E, C) => {
    d.type === "svg" ? O = "svg" : d.type === "math" && (O = "mathml"), u == null ? U(
      d,
      p,
      w,
      b,
      _,
      O,
      E,
      C
    ) : I(
      u,
      d,
      b,
      _,
      O,
      E,
      C
    );
  }, U = (u, d, p, w, b, _, O, E) => {
    let C, x;
    const { props: D, shapeFlag: A, transition: F, dirs: H } = u;
    if (C = u.el = o(
      u.type,
      _,
      D && D.is,
      D
    ), A & 8 ? c(C, u.children) : A & 16 && z(
      u.children,
      C,
      null,
      w,
      b,
      Xn(u, _),
      O,
      E
    ), H && ft(u, null, w, "created"), B(C, u, u.scopeId, O, w), D) {
      for (const ee in D)
        ee !== "value" && !Dt(ee) && i(C, ee, null, D[ee], _, w);
      "value" in D && i(C, "value", null, D.value, _), (x = D.onVnodeBeforeMount) && je(x, w, u);
    }
    H && ft(u, null, w, "beforeMount");
    const W = Xl(b, F);
    W && F.beforeEnter(C), r(C, d, p), ((x = D && D.onVnodeMounted) || W || H) && ye(() => {
      x && je(x, w, u), W && F.enter(C), H && ft(u, null, w, "mounted");
    }, b);
  }, B = (u, d, p, w, b) => {
    if (p && m(u, p), w)
      for (let _ = 0; _ < w.length; _++)
        m(u, w[_]);
    if (b) {
      let _ = b.subTree;
      if (d === _ || ki(_.type) && (_.ssContent === d || _.ssFallback === d)) {
        const O = b.vnode;
        B(
          u,
          O,
          O.scopeId,
          O.slotScopeIds,
          b.parent
        );
      }
    }
  }, z = (u, d, p, w, b, _, O, E, C = 0) => {
    for (let x = C; x < u.length; x++) {
      const D = u[x] = E ? tt(u[x]) : Be(u[x]);
      y(
        null,
        D,
        d,
        p,
        w,
        b,
        _,
        O,
        E
      );
    }
  }, I = (u, d, p, w, b, _, O) => {
    const E = d.el = u.el;
    let { patchFlag: C, dynamicChildren: x, dirs: D } = d;
    C |= u.patchFlag & 16;
    const A = u.props || G, F = d.props || G;
    let H;
    if (p && ct(p, !1), (H = F.onVnodeBeforeUpdate) && je(H, p, d, u), D && ft(d, u, p, "beforeUpdate"), p && ct(p, !0), (A.innerHTML && F.innerHTML == null || A.textContent && F.textContent == null) && c(E, ""), x ? K(
      u.dynamicChildren,
      x,
      E,
      p,
      w,
      Xn(d, b),
      _
    ) : O || Q(
      u,
      d,
      E,
      null,
      p,
      w,
      Xn(d, b),
      _,
      !1
    ), C > 0) {
      if (C & 16)
        X(E, A, F, p, b);
      else if (C & 2 && A.class !== F.class && i(E, "class", null, F.class, b), C & 4 && i(E, "style", A.style, F.style, b), C & 8) {
        const W = d.dynamicProps;
        for (let ee = 0; ee < W.length; ee++) {
          const Y = W[ee], xe = A[Y], be = F[Y];
          (be !== xe || Y === "value") && i(E, Y, xe, be, b, p);
        }
      }
      C & 1 && u.children !== d.children && c(E, d.children);
    } else !O && x == null && X(E, A, F, p, b);
    ((H = F.onVnodeUpdated) || D) && ye(() => {
      H && je(H, p, d, u), D && ft(d, u, p, "updated");
    }, w);
  }, K = (u, d, p, w, b, _, O) => {
    for (let E = 0; E < d.length; E++) {
      const C = u[E], x = d[E], D = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        C.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (C.type === we || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !dt(C, x) || // - In the case of a component, it could contain anything.
        C.shapeFlag & 198) ? h(C.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      y(
        C,
        x,
        D,
        null,
        w,
        b,
        _,
        O,
        !0
      );
    }
  }, X = (u, d, p, w, b) => {
    if (d !== p) {
      if (d !== G)
        for (const _ in d)
          !Dt(_) && !(_ in p) && i(
            u,
            _,
            d[_],
            null,
            b,
            w
          );
      for (const _ in p) {
        if (Dt(_)) continue;
        const O = p[_], E = d[_];
        O !== E && _ !== "value" && i(u, _, E, O, b, w);
      }
      "value" in p && i(u, "value", d.value, p.value, b);
    }
  }, R = (u, d, p, w, b, _, O, E, C) => {
    const x = d.el = u ? u.el : l(""), D = d.anchor = u ? u.anchor : l("");
    let { patchFlag: A, dynamicChildren: F, slotScopeIds: H } = d;
    H && (E = E ? E.concat(H) : H), u == null ? (r(x, p, w), r(D, p, w), z(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      p,
      D,
      b,
      _,
      O,
      E,
      C
    )) : A > 0 && A & 64 && F && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren ? (K(
      u.dynamicChildren,
      F,
      p,
      b,
      _,
      O,
      E
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || b && d === b.subTree) && Hr(
      u,
      d,
      !0
      /* shallow */
    )) : Q(
      u,
      d,
      p,
      D,
      b,
      _,
      O,
      E,
      C
    );
  }, Z = (u, d, p, w, b, _, O, E, C) => {
    d.slotScopeIds = E, u == null ? d.shapeFlag & 512 ? b.ctx.activate(
      d,
      p,
      w,
      O,
      C
    ) : j(
      d,
      p,
      w,
      b,
      _,
      O,
      C
    ) : re(u, d, C);
  }, j = (u, d, p, w, b, _, O) => {
    const E = u.component = yf(
      u,
      w,
      b
    );
    if (Jt(u) && (E.ctx.renderer = At), vf(E, !1, O), E.asyncDep) {
      if (b && b.registerDep(E, q, O), !u.el) {
        const C = E.subTree = oe(ge);
        v(null, C, d, p);
      }
    } else
      q(
        E,
        u,
        d,
        p,
        b,
        _,
        O
      );
  }, re = (u, d, p) => {
    const w = d.component = u.component;
    if (lf(u, d, p))
      if (w.asyncDep && !w.asyncResolved) {
        se(w, d, p);
        return;
      } else
        w.next = d, w.update();
    else
      d.el = u.el, w.vnode = d;
  }, q = (u, d, p, w, b, _, O) => {
    const E = () => {
      if (u.isMounted) {
        let { next: A, bu: F, u: H, parent: W, vnode: ee } = u;
        {
          const Ne = Ki(u);
          if (Ne) {
            A && (A.el = ee.el, se(u, A, O)), Ne.asyncDep.then(() => {
              u.isUnmounted || E();
            });
            return;
          }
        }
        let Y = A, xe;
        ct(u, !1), A ? (A.el = ee.el, se(u, A, O)) : A = ee, F && Un(F), (xe = A.props && A.props.onVnodeBeforeUpdate) && je(xe, W, A, ee), ct(u, !0);
        const be = ls(u), De = u.subTree;
        u.subTree = be, y(
          De,
          be,
          // parent may have changed if it's in a teleport
          h(De.el),
          // anchor may have changed if it's in a fragment
          Qt(De),
          u,
          b,
          _
        ), A.el = be.el, Y === null && ff(u, be.el), H && ye(H, b), (xe = A.props && A.props.onVnodeUpdated) && ye(
          () => je(xe, W, A, ee),
          b
        );
      } else {
        let A;
        const { el: F, props: H } = d, { bm: W, m: ee, parent: Y, root: xe, type: be } = u, De = xt(d);
        ct(u, !1), W && Un(W), !De && (A = H && H.onVnodeBeforeMount) && je(A, Y, d), ct(u, !0);
        {
          xe.ce && xe.ce._injectChildStyle(be);
          const Ne = u.subTree = ls(u);
          y(
            null,
            Ne,
            p,
            w,
            u,
            b,
            _
          ), d.el = Ne.el;
        }
        if (ee && ye(ee, b), !De && (A = H && H.onVnodeMounted)) {
          const Ne = d;
          ye(
            () => je(A, Y, Ne),
            b
          );
        }
        (d.shapeFlag & 256 || Y && xt(Y.vnode) && Y.vnode.shapeFlag & 256) && u.a && ye(u.a, b), u.isMounted = !0, d = p = w = null;
      }
    };
    u.scope.on();
    const C = u.effect = new Us(E);
    u.scope.off();
    const x = u.update = C.run.bind(C), D = u.job = C.runIfDirty.bind(C);
    D.i = u, D.id = u.uid, C.scheduler = () => Dr(D), ct(u, !0), x();
  }, se = (u, d, p) => {
    d.component = u;
    const w = u.vnode.props;
    u.vnode = d, u.next = null, Wl(u, d.props, w, p), ql(u, d.children, p), Ge(), Jr(u), qe();
  }, Q = (u, d, p, w, b, _, O, E, C = !1) => {
    const x = u && u.children, D = u ? u.shapeFlag : 0, A = d.children, { patchFlag: F, shapeFlag: H } = d;
    if (F > 0) {
      if (F & 128) {
        Zt(
          x,
          A,
          p,
          w,
          b,
          _,
          O,
          E,
          C
        );
        return;
      } else if (F & 256) {
        ot(
          x,
          A,
          p,
          w,
          b,
          _,
          O,
          E,
          C
        );
        return;
      }
    }
    H & 8 ? (D & 16 && Ot(x, b, _), A !== x && c(p, A)) : D & 16 ? H & 16 ? Zt(
      x,
      A,
      p,
      w,
      b,
      _,
      O,
      E,
      C
    ) : Ot(x, b, _, !0) : (D & 8 && c(p, ""), H & 16 && z(
      A,
      p,
      w,
      b,
      _,
      O,
      E,
      C
    ));
  }, ot = (u, d, p, w, b, _, O, E, C) => {
    u = u || bt, d = d || bt;
    const x = u.length, D = d.length, A = Math.min(x, D);
    let F;
    for (F = 0; F < A; F++) {
      const H = d[F] = C ? tt(d[F]) : Be(d[F]);
      y(
        u[F],
        H,
        p,
        null,
        b,
        _,
        O,
        E,
        C
      );
    }
    x > D ? Ot(
      u,
      b,
      _,
      !0,
      !1,
      A
    ) : z(
      d,
      p,
      w,
      b,
      _,
      O,
      E,
      C,
      A
    );
  }, Zt = (u, d, p, w, b, _, O, E, C) => {
    let x = 0;
    const D = d.length;
    let A = u.length - 1, F = D - 1;
    for (; x <= A && x <= F; ) {
      const H = u[x], W = d[x] = C ? tt(d[x]) : Be(d[x]);
      if (dt(H, W))
        y(
          H,
          W,
          p,
          null,
          b,
          _,
          O,
          E,
          C
        );
      else
        break;
      x++;
    }
    for (; x <= A && x <= F; ) {
      const H = u[A], W = d[F] = C ? tt(d[F]) : Be(d[F]);
      if (dt(H, W))
        y(
          H,
          W,
          p,
          null,
          b,
          _,
          O,
          E,
          C
        );
      else
        break;
      A--, F--;
    }
    if (x > A) {
      if (x <= F) {
        const H = F + 1, W = H < D ? d[H].el : w;
        for (; x <= F; )
          y(
            null,
            d[x] = C ? tt(d[x]) : Be(d[x]),
            p,
            W,
            b,
            _,
            O,
            E,
            C
          ), x++;
      }
    } else if (x > F)
      for (; x <= A; )
        Fe(u[x], b, _, !0), x++;
    else {
      const H = x, W = x, ee = /* @__PURE__ */ new Map();
      for (x = W; x <= F; x++) {
        const Ce = d[x] = C ? tt(d[x]) : Be(d[x]);
        Ce.key != null && ee.set(Ce.key, x);
      }
      let Y, xe = 0;
      const be = F - W + 1;
      let De = !1, Ne = 0;
      const Pt = new Array(be);
      for (x = 0; x < be; x++) Pt[x] = 0;
      for (x = H; x <= A; x++) {
        const Ce = u[x];
        if (xe >= be) {
          Fe(Ce, b, _, !0);
          continue;
        }
        let Le;
        if (Ce.key != null)
          Le = ee.get(Ce.key);
        else
          for (Y = W; Y <= F; Y++)
            if (Pt[Y - W] === 0 && dt(Ce, d[Y])) {
              Le = Y;
              break;
            }
        Le === void 0 ? Fe(Ce, b, _, !0) : (Pt[Le - W] = x + 1, Le >= Ne ? Ne = Le : De = !0, y(
          Ce,
          d[Le],
          p,
          null,
          b,
          _,
          O,
          E,
          C
        ), xe++);
      }
      const Wr = De ? Zl(Pt) : bt;
      for (Y = Wr.length - 1, x = be - 1; x >= 0; x--) {
        const Ce = W + x, Le = d[Ce], zr = Ce + 1 < D ? d[Ce + 1].el : w;
        Pt[x] === 0 ? y(
          null,
          Le,
          p,
          zr,
          b,
          _,
          O,
          E,
          C
        ) : De && (Y < 0 || x !== Wr[Y] ? lt(Le, p, zr, 2) : Y--);
      }
    }
  }, lt = (u, d, p, w, b = null) => {
    const { el: _, type: O, transition: E, children: C, shapeFlag: x } = u;
    if (x & 6) {
      lt(u.component.subTree, d, p, w);
      return;
    }
    if (x & 128) {
      u.suspense.move(d, p, w);
      return;
    }
    if (x & 64) {
      O.move(u, d, p, At);
      return;
    }
    if (O === we) {
      r(_, d, p);
      for (let A = 0; A < C.length; A++)
        lt(C[A], d, p, w);
      r(u.anchor, d, p);
      return;
    }
    if (O === un) {
      M(u, d, p);
      return;
    }
    if (w !== 2 && x & 1 && E)
      if (w === 0)
        E.beforeEnter(_), r(_, d, p), ye(() => E.enter(_), b);
      else {
        const { leave: A, delayLeave: F, afterLeave: H } = E, W = () => {
          u.ctx.isUnmounted ? s(_) : r(_, d, p);
        }, ee = () => {
          A(_, () => {
            W(), H && H();
          });
        };
        F ? F(_, W, ee) : ee();
      }
    else
      r(_, d, p);
  }, Fe = (u, d, p, w = !1, b = !1) => {
    const {
      type: _,
      props: O,
      ref: E,
      children: C,
      dynamicChildren: x,
      shapeFlag: D,
      patchFlag: A,
      dirs: F,
      cacheIndex: H
    } = u;
    if (A === -2 && (b = !1), E != null && (Ge(), vn(E, null, p, u, !0), qe()), H != null && (d.renderCache[H] = void 0), D & 256) {
      d.ctx.deactivate(u);
      return;
    }
    const W = D & 1 && F, ee = !xt(u);
    let Y;
    if (ee && (Y = O && O.onVnodeBeforeUnmount) && je(Y, d, u), D & 6)
      vo(u.component, p, w);
    else {
      if (D & 128) {
        u.suspense.unmount(p, w);
        return;
      }
      W && ft(u, null, d, "beforeUnmount"), D & 64 ? u.type.remove(
        u,
        d,
        p,
        At,
        w
      ) : x && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !x.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== we || A > 0 && A & 64) ? Ot(
        x,
        d,
        p,
        !1,
        !0
      ) : (_ === we && A & 384 || !b && D & 16) && Ot(C, d, p), w && Kr(u);
    }
    (ee && (Y = O && O.onVnodeUnmounted) || W) && ye(() => {
      Y && je(Y, d, u), W && ft(u, null, d, "unmounted");
    }, p);
  }, Kr = (u) => {
    const { type: d, el: p, anchor: w, transition: b } = u;
    if (d === we) {
      yo(p, w);
      return;
    }
    if (d === un) {
      P(u);
      return;
    }
    const _ = () => {
      s(p), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (u.shapeFlag & 1 && b && !b.persisted) {
      const { leave: O, delayLeave: E } = b, C = () => O(p, _);
      E ? E(u.el, _, C) : C();
    } else
      _();
  }, yo = (u, d) => {
    let p;
    for (; u !== d; )
      p = g(u), s(u), u = p;
    s(d);
  }, vo = (u, d, p) => {
    const {
      bum: w,
      scope: b,
      job: _,
      subTree: O,
      um: E,
      m: C,
      a: x,
      parent: D,
      slots: { __: A }
    } = u;
    os(C), os(x), w && Un(w), D && N(A) && A.forEach((F) => {
      D.renderCache[F] = void 0;
    }), b.stop(), _ && (_.flags |= 8, Fe(O, u, d, p)), E && ye(E, d), ye(() => {
      u.isUnmounted = !0;
    }, d), d && d.pendingBranch && !d.isUnmounted && u.asyncDep && !u.asyncResolved && u.suspenseId === d.pendingId && (d.deps--, d.deps === 0 && d.resolve());
  }, Ot = (u, d, p, w = !1, b = !1, _ = 0) => {
    for (let O = _; O < u.length; O++)
      Fe(u[O], d, p, w, b);
  }, Qt = (u) => {
    if (u.shapeFlag & 6)
      return Qt(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const d = g(u.anchor || u.el), p = d && d[hi];
    return p ? g(p) : d;
  };
  let Vn = !1;
  const Ur = (u, d, p) => {
    u == null ? d._vnode && Fe(d._vnode, null, null, !0) : y(
      d._vnode || null,
      u,
      d,
      null,
      null,
      null,
      p
    ), d._vnode = u, Vn || (Vn = !0, Jr(), ui(), Vn = !1);
  }, At = {
    p: y,
    um: Fe,
    m: lt,
    r: Kr,
    mt: j,
    mc: z,
    pc: Q,
    pbc: K,
    n: Qt,
    o: e
  };
  return {
    render: Ur,
    hydrate: void 0,
    createApp: Vl(Ur)
  };
}
function Xn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ct({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Xl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Hr(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (N(r) && N(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let l = s[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[i] = tt(s[i]), l.el = o.el), !n && l.patchFlag !== -2 && Hr(o, l)), l.type === Hn && (l.el = o.el), l.type === ge && !l.el && (l.el = o.el);
    }
}
function Zl(e) {
  const t = e.slice(), n = [0];
  let r, s, i, o, l;
  const f = e.length;
  for (r = 0; r < f; r++) {
    const a = e[r];
    if (a !== 0) {
      if (s = n[n.length - 1], e[s] < a) {
        t[r] = s, n.push(r);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        l = i + o >> 1, e[n[l]] < a ? i = l + 1 : o = l;
      a < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), n[i] = r);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; )
    n[i] = o, o = t[o];
  return n;
}
function Ki(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ki(t);
}
function os(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Ql = Symbol.for("v-scx"), ef = () => cn(Ql);
function tf(e, t) {
  return Br(
    e,
    null,
    { flush: "sync" }
  );
}
function Re(e, t, n) {
  return Br(e, t, n);
}
function Br(e, t, n = G) {
  const { immediate: r, deep: s, flush: i, once: o } = n, l = le({}, n), f = t && r || !t && i !== "post";
  let a;
  if (Tt) {
    if (i === "sync") {
      const m = ef();
      a = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!f) {
      const m = () => {
      };
      return m.stop = Ve, m.resume = Ve, m.pause = Ve, m;
    }
  }
  const c = ue;
  l.call = (m, S, y) => Ie(m, c, S, y);
  let h = !1;
  i === "post" ? l.scheduler = (m) => {
    ye(m, c && c.suspense);
  } : i !== "sync" && (h = !0, l.scheduler = (m, S) => {
    S ? m() : Dr(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), h && (m.flags |= 2, c && (m.id = c.uid, m.i = c));
  };
  const g = ml(e, t, l);
  return Tt && (a ? a.push(g) : f && g()), g;
}
function nf(e, t, n) {
  const r = this.proxy, s = ie(e) ? e.includes(".") ? Ui(r, e) : () => r[e] : e.bind(r, r);
  let i;
  $(t) ? i = t : (i = t.handler, n = t);
  const o = Xt(this), l = Br(s, i.bind(r), n);
  return o(), l;
}
function Ui(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
function Wc(e, t, n = G) {
  const r = Yt(), s = Ee(t), i = it(t), o = Wi(e, s), l = li((f, a) => {
    let c, h = G, g;
    return tf(() => {
      const m = e[s];
      Se(c, m) && (c = m, a());
    }), {
      get() {
        return f(), n.get ? n.get(c) : c;
      },
      set(m) {
        const S = n.set ? n.set(m) : m;
        if (!Se(S, c) && !(h !== G && Se(m, h)))
          return;
        const y = r.vnode.props;
        y && // check if parent has passed v-model
        (t in y || s in y || i in y) && (`onUpdate:${t}` in y || `onUpdate:${s}` in y || `onUpdate:${i}` in y) || (c = m, a()), r.emit(`update:${t}`, S), Se(m, S) && Se(m, h) && !Se(S, g) && a(), h = m, g = S;
      }
    };
  });
  return l[Symbol.iterator] = () => {
    let f = 0;
    return {
      next() {
        return f < 2 ? { value: f++ ? o || G : l, done: !1 } : { done: !0 };
      }
    };
  }, l;
}
const Wi = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ee(t)}Modifiers`] || e[`${it(t)}Modifiers`];
function rf(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || G;
  let s = n;
  const i = t.startsWith("update:"), o = i && Wi(r, t.slice(7));
  o && (o.trim && (s = n.map((c) => ie(c) ? c.trim() : c)), o.number && (s = n.map(Po)));
  let l, f = r[l = Kn(t)] || // also try camelCase event handler (#2249)
  r[l = Kn(Ee(t))];
  !f && i && (f = r[l = Kn(it(t))]), f && Ie(
    f,
    e,
    6,
    s
  );
  const a = r[l + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Ie(
      a,
      e,
      6,
      s
    );
  }
}
function zi(e, t, n = !1) {
  const r = t.emitsCache, s = r.get(e);
  if (s !== void 0)
    return s;
  const i = e.emits;
  let o = {}, l = !1;
  if (!$(e)) {
    const f = (a) => {
      const c = zi(a, t, !0);
      c && (l = !0, le(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !l ? (ne(e) && r.set(e, null), null) : (N(i) ? i.forEach((f) => o[f] = null) : le(o, i), ne(e) && r.set(e, o), o);
}
function $n(e, t) {
  return !e || !Tn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), J(e, t[0].toLowerCase() + t.slice(1)) || J(e, it(t)) || J(e, t));
}
function ls(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: f,
    render: a,
    renderCache: c,
    props: h,
    data: g,
    setupState: m,
    ctx: S,
    inheritAttrs: y
  } = e, L = yn(e);
  let v, T;
  try {
    if (n.shapeFlag & 4) {
      const P = s || r, V = P;
      v = Be(
        a.call(
          V,
          P,
          c,
          h,
          m,
          g,
          S
        )
      ), T = l;
    } else {
      const P = t;
      v = Be(
        P.length > 1 ? P(
          h,
          { attrs: l, slots: o, emit: f }
        ) : P(
          h,
          null
        )
      ), T = t.props ? l : sf(l);
    }
  } catch (P) {
    Ht.length = 0, qt(P, e, 1), v = oe(ge);
  }
  let M = v;
  if (T && y !== !1) {
    const P = Object.keys(T), { shapeFlag: V } = M;
    P.length && V & 7 && (i && P.some(Sr) && (T = of(
      T,
      i
    )), M = st(M, T, !1, !0));
  }
  return n.dirs && (M = st(M, null, !1, !0), M.dirs = M.dirs ? M.dirs.concat(n.dirs) : n.dirs), n.transition && pt(M, n.transition), v = M, yn(L), v;
}
const sf = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Tn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, of = (e, t) => {
  const n = {};
  for (const r in e)
    (!Sr(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function lf(e, t, n) {
  const { props: r, children: s, component: i } = e, { props: o, children: l, patchFlag: f } = t, a = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return r ? fs(r, o, a) : !!o;
    if (f & 8) {
      const c = t.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        const g = c[h];
        if (o[g] !== r[g] && !$n(a, g))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : r === o ? !1 : r ? o ? fs(r, o, a) : !0 : !!o;
  return !1;
}
function fs(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (t[i] !== e[i] && !$n(n, i))
      return !0;
  }
  return !1;
}
function ff({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const ki = (e) => e.__isSuspense;
function cf(e, t) {
  t && t.pendingBranch ? N(e) ? t.effects.push(...e) : t.effects.push(e) : bl(e);
}
const we = Symbol.for("v-fgt"), Hn = Symbol.for("v-txt"), ge = Symbol.for("v-cmt"), un = Symbol.for("v-stc"), Ht = [];
let Te = null;
function dr(e = !1) {
  Ht.push(Te = e ? null : []);
}
function uf() {
  Ht.pop(), Te = Ht[Ht.length - 1] || null;
}
let Wt = 1;
function cs(e, t = !1) {
  Wt += e, e < 0 && Te && t && (Te.hasOnce = !0);
}
function Gi(e) {
  return e.dynamicChildren = Wt > 0 ? Te || bt : null, uf(), Wt > 0 && Te && Te.push(e), e;
}
function zc(e, t, n, r, s, i) {
  return Gi(
    Ji(
      e,
      t,
      n,
      r,
      s,
      i,
      !0
    )
  );
}
function hr(e, t, n, r, s) {
  return Gi(
    oe(
      e,
      t,
      n,
      r,
      s,
      !0
    )
  );
}
function zt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function dt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const qi = ({ key: e }) => e ?? null, an = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ie(e) || ce(e) || $(e) ? { i: ae, r: e, k: t, f: !!n } : e : null);
function Ji(e, t = null, n = null, r = 0, s = null, i = e === we ? 0 : 1, o = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && qi(t),
    ref: t && an(t),
    scopeId: di,
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
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: ae
  };
  return l ? (Vr(f, n), i & 128 && e.normalize(f)) : n && (f.shapeFlag |= ie(n) ? 8 : 16), Wt > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Te && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && Te.push(f), f;
}
const oe = af;
function af(e, t = null, n = null, r = 0, s = null, i = !1) {
  if ((!e || e === Ai) && (e = ge), zt(e)) {
    const l = st(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Vr(l, n), Wt > 0 && !i && Te && (l.shapeFlag & 6 ? Te[Te.indexOf(e)] = l : Te.push(l)), l.patchFlag = -2, l;
  }
  if (xf(e) && (e = e.__vccOpts), t) {
    t = df(t);
    let { class: l, style: f } = t;
    l && !ie(l) && (t.class = Tr(l)), ne(f) && (Rr(f) && !N(f) && (f = le({}, f)), t.style = Cr(f));
  }
  const o = ie(e) ? 1 : ki(e) ? 128 : pi(e) ? 64 : ne(e) ? 4 : $(e) ? 2 : 0;
  return Ji(
    e,
    t,
    n,
    r,
    s,
    o,
    i,
    !0
  );
}
function df(e) {
  return e ? Rr(e) || Li(e) ? le({}, e) : e : null;
}
function st(e, t, n = !1, r = !1) {
  const { props: s, ref: i, patchFlag: o, children: l, transition: f } = e, a = t ? pf(s || {}, t) : s, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && qi(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? N(i) ? i.concat(an(t)) : [i, an(t)] : an(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== we ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: f,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && st(e.ssContent),
    ssFallback: e.ssFallback && st(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && r && pt(
    c,
    f.clone(c)
  ), c;
}
function hf(e = " ", t = 0) {
  return oe(Hn, null, e, t);
}
function kc(e, t) {
  const n = oe(un, null, e);
  return n.staticCount = t, n;
}
function Gc(e = "", t = !1) {
  return t ? (dr(), hr(ge, null, e)) : oe(ge, null, e);
}
function Be(e) {
  return e == null || typeof e == "boolean" ? oe(ge) : N(e) ? oe(
    we,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : zt(e) ? tt(e) : oe(Hn, null, String(e));
}
function tt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : st(e);
}
function Vr(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (N(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Vr(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Li(t) ? t._ctx = ae : s === 3 && ae && (ae.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else $(t) ? (t = { default: t, _ctx: ae }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [hf(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function pf(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = Tr([t.class, r.class]));
      else if (s === "style")
        t.style = Cr([t.style, r.style]);
      else if (Tn(s)) {
        const i = t[s], o = r[s];
        o && i !== o && !(N(i) && i.includes(o)) && (t[s] = i ? [].concat(i, o) : o);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function je(e, t, n, r = null) {
  Ie(e, t, 7, [
    n,
    r
  ]);
}
const gf = Fi();
let mf = 0;
function yf(e, t, n) {
  const r = e.type, s = (t ? t.appContext : e.appContext) || gf, i = {
    uid: mf++,
    vnode: e,
    type: r,
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
    scope: new $o(
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
    propsOptions: $i(r, s),
    emitsOptions: zi(r, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: G,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: G,
    data: G,
    props: G,
    attrs: G,
    slots: G,
    refs: G,
    setupState: G,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = rf.bind(null, i), e.ce && e.ce(i), i;
}
let ue = null;
const Yt = () => ue || ae;
let Sn, pr;
{
  const e = Pn(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (i) => {
      s.length > 1 ? s.forEach((o) => o(i)) : s[0](i);
    };
  };
  Sn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ue = n
  ), pr = t(
    "__VUE_SSR_SETTERS__",
    (n) => Tt = n
  );
}
const Xt = (e) => {
  const t = ue;
  return Sn(e), e.scope.on(), () => {
    e.scope.off(), Sn(t);
  };
}, us = () => {
  ue && ue.scope.off(), Sn(null);
};
function Yi(e) {
  return e.vnode.shapeFlag & 4;
}
let Tt = !1;
function vf(e, t = !1, n = !1) {
  t && pr(t);
  const { props: r, children: s } = e.vnode, i = Yi(e);
  Ul(e, r, i, t), Gl(e, s, n || t);
  const o = i ? bf(e, t) : void 0;
  return t && pr(!1), o;
}
function bf(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Dl);
  const { setup: r } = n;
  if (r) {
    Ge();
    const s = e.setupContext = r.length > 1 ? Sf(e) : null, i = Xt(e), o = Gt(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), l = Ns(o);
    if (qe(), i(), (l || e.sp) && !xt(e) && Lr(e), l) {
      if (o.then(us, us), t)
        return o.then((f) => {
          as(e, f);
        }).catch((f) => {
          qt(f, e, 0);
        });
      e.asyncDep = o;
    } else
      as(e, o);
  } else
    Xi(e);
}
function as(e, t, n) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ne(t) && (e.setupState = oi(t)), Xi(e);
}
function Xi(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Ve);
  {
    const s = Xt(e);
    Ge();
    try {
      Nl(e);
    } finally {
      qe(), s();
    }
  }
}
const _f = {
  get(e, t) {
    return pe(e, "get", ""), e[t];
  }
};
function Sf(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, _f),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Bn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(oi(il(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in $t)
        return $t[n](e);
    },
    has(t, n) {
      return n in t || n in $t;
    }
  })) : e.proxy;
}
function wf(e, t = !0) {
  return $(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function xf(e) {
  return $(e) && "__vccOpts" in e;
}
const fe = (e, t) => pl(e, t, Tt);
function Zi(e, t, n) {
  const r = arguments.length;
  return r === 2 ? ne(t) && !N(t) ? zt(t) ? oe(e, null, [t]) : oe(e, t) : oe(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && zt(n) && (n = [n]), oe(e, t, n));
}
const Cf = "3.5.16";
/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let gr;
const ds = typeof window < "u" && window.trustedTypes;
if (ds)
  try {
    gr = /* @__PURE__ */ ds.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Qi = gr ? (e) => gr.createHTML(e) : (e) => e, Tf = "http://www.w3.org/2000/svg", Ef = "http://www.w3.org/1998/Math/MathML", Ue = typeof document < "u" ? document : null, hs = Ue && /* @__PURE__ */ Ue.createElement("template"), Of = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? Ue.createElementNS(Tf, e) : t === "mathml" ? Ue.createElementNS(Ef, e) : n ? Ue.createElement(e, { is: n }) : Ue.createElement(e);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (e) => Ue.createTextNode(e),
  createComment: (e) => Ue.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ue.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, s, i) {
    const o = n ? n.previousSibling : t.lastChild;
    if (s && (s === i || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === i || !(s = s.nextSibling)); )
        ;
    else {
      hs.innerHTML = Qi(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = hs.content;
      if (r === "svg" || r === "mathml") {
        const f = l.firstChild;
        for (; f.firstChild; )
          l.appendChild(f.firstChild);
        l.removeChild(f);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Xe = "transition", Rt = "animation", Et = Symbol("_vtc"), eo = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, to = /* @__PURE__ */ le(
  {},
  vi,
  eo
), Af = (e) => (e.displayName = "Transition", e.props = to, e), qc = /* @__PURE__ */ Af(
  (e, { slots: t }) => Zi(xl, no(e), t)
), ut = (e, t = []) => {
  N(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, ps = (e) => e ? N(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function no(e) {
  const t = {};
  for (const R in e)
    R in eo || (t[R] = e[R]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: r,
    duration: s,
    enterFromClass: i = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: f = i,
    appearActiveClass: a = o,
    appearToClass: c = l,
    leaveFromClass: h = `${n}-leave-from`,
    leaveActiveClass: g = `${n}-leave-active`,
    leaveToClass: m = `${n}-leave-to`
  } = e, S = Pf(s), y = S && S[0], L = S && S[1], {
    onBeforeEnter: v,
    onEnter: T,
    onEnterCancelled: M,
    onLeave: P,
    onLeaveCancelled: V,
    onBeforeAppear: U = v,
    onAppear: B = T,
    onAppearCancelled: z = M
  } = t, I = (R, Z, j, re) => {
    R._enterCancelled = re, Ze(R, Z ? c : l), Ze(R, Z ? a : o), j && j();
  }, K = (R, Z) => {
    R._isLeaving = !1, Ze(R, h), Ze(R, m), Ze(R, g), Z && Z();
  }, X = (R) => (Z, j) => {
    const re = R ? B : T, q = () => I(Z, R, j);
    ut(re, [Z, q]), gs(() => {
      Ze(Z, R ? f : i), $e(Z, R ? c : l), ps(re) || ms(Z, r, y, q);
    });
  };
  return le(t, {
    onBeforeEnter(R) {
      ut(v, [R]), $e(R, i), $e(R, o);
    },
    onBeforeAppear(R) {
      ut(U, [R]), $e(R, f), $e(R, a);
    },
    onEnter: X(!1),
    onAppear: X(!0),
    onLeave(R, Z) {
      R._isLeaving = !0;
      const j = () => K(R, Z);
      $e(R, h), R._enterCancelled ? ($e(R, g), mr()) : (mr(), $e(R, g)), gs(() => {
        R._isLeaving && (Ze(R, h), $e(R, m), ps(P) || ms(R, r, L, j));
      }), ut(P, [R, j]);
    },
    onEnterCancelled(R) {
      I(R, !1, void 0, !0), ut(M, [R]);
    },
    onAppearCancelled(R) {
      I(R, !0, void 0, !0), ut(z, [R]);
    },
    onLeaveCancelled(R) {
      K(R), ut(V, [R]);
    }
  });
}
function Pf(e) {
  if (e == null)
    return null;
  if (ne(e))
    return [Zn(e.enter), Zn(e.leave)];
  {
    const t = Zn(e);
    return [t, t];
  }
}
function Zn(e) {
  return Mo(e);
}
function $e(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Et] || (e[Et] = /* @__PURE__ */ new Set())).add(t);
}
function Ze(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[Et];
  n && (n.delete(t), n.size || (e[Et] = void 0));
}
function gs(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Mf = 0;
function ms(e, t, n, r) {
  const s = e._endId = ++Mf, i = () => {
    s === e._endId && r();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: o, timeout: l, propCount: f } = ro(e, t);
  if (!o)
    return r();
  const a = o + "end";
  let c = 0;
  const h = () => {
    e.removeEventListener(a, g), i();
  }, g = (m) => {
    m.target === e && ++c >= f && h();
  };
  setTimeout(() => {
    c < f && h();
  }, l + 1), e.addEventListener(a, g);
}
function ro(e, t) {
  const n = window.getComputedStyle(e), r = (S) => (n[S] || "").split(", "), s = r(`${Xe}Delay`), i = r(`${Xe}Duration`), o = ys(s, i), l = r(`${Rt}Delay`), f = r(`${Rt}Duration`), a = ys(l, f);
  let c = null, h = 0, g = 0;
  t === Xe ? o > 0 && (c = Xe, h = o, g = i.length) : t === Rt ? a > 0 && (c = Rt, h = a, g = f.length) : (h = Math.max(o, a), c = h > 0 ? o > a ? Xe : Rt : null, g = c ? c === Xe ? i.length : f.length : 0);
  const m = c === Xe && /\b(transform|all)(,|$)/.test(
    r(`${Xe}Property`).toString()
  );
  return {
    type: c,
    timeout: h,
    propCount: g,
    hasTransform: m
  };
}
function ys(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => vs(n) + vs(e[r])));
}
function vs(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function mr() {
  return document.body.offsetHeight;
}
function Rf(e, t, n) {
  const r = e[Et];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const wn = Symbol("_vod"), so = Symbol("_vsh"), Jc = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[wn] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : It(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), It(e, !0), r.enter(e)) : r.leave(e, () => {
      It(e, !1);
    }) : It(e, t));
  },
  beforeUnmount(e, { value: t }) {
    It(e, t);
  }
};
function It(e, t) {
  e.style.display = t ? e[wn] : "none", e[so] = !t;
}
const If = Symbol(""), Ff = /(^|;)\s*display\s*:/;
function Df(e, t, n) {
  const r = e.style, s = ie(n);
  let i = !1;
  if (n && !s) {
    if (t)
      if (ie(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && dn(r, l, "");
        }
      else
        for (const o in t)
          n[o] == null && dn(r, o, "");
    for (const o in n)
      o === "display" && (i = !0), dn(r, o, n[o]);
  } else if (s) {
    if (t !== n) {
      const o = r[If];
      o && (n += ";" + o), r.cssText = n, i = Ff.test(n);
    }
  } else t && e.removeAttribute("style");
  wn in e && (e[wn] = i ? r.display : "", e[so] && (r.display = "none"));
}
const bs = /\s*!important$/;
function dn(e, t, n) {
  if (N(n))
    n.forEach((r) => dn(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Nf(e, t);
    bs.test(n) ? e.setProperty(
      it(r),
      n.replace(bs, ""),
      "important"
    ) : e[r] = n;
  }
}
const _s = ["Webkit", "Moz", "ms"], Qn = {};
function Nf(e, t) {
  const n = Qn[t];
  if (n)
    return n;
  let r = Ee(t);
  if (r !== "filter" && r in e)
    return Qn[t] = r;
  r = An(r);
  for (let s = 0; s < _s.length; s++) {
    const i = _s[s] + r;
    if (i in e)
      return Qn[t] = i;
  }
  return t;
}
const Ss = "http://www.w3.org/1999/xlink";
function ws(e, t, n, r, s, i = Lo(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ss, t.slice(6, t.length)) : e.setAttributeNS(Ss, t, n) : n == null || i && !Hs(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Je(n) ? String(n) : n
  );
}
function xs(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Qi(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, f = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== f || !("_value" in e)) && (e.value = f), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Hs(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(s || t);
}
function Lf(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function jf(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Cs = Symbol("_vei");
function $f(e, t, n, r, s = null) {
  const i = e[Cs] || (e[Cs] = {}), o = i[t];
  if (r && o)
    o.value = r;
  else {
    const [l, f] = Hf(t);
    if (r) {
      const a = i[t] = Kf(
        r,
        s
      );
      Lf(e, l, a, f);
    } else o && (jf(e, l, o, f), i[t] = void 0);
  }
}
const Ts = /(?:Once|Passive|Capture)$/;
function Hf(e) {
  let t;
  if (Ts.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Ts); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : it(e.slice(2)), t];
}
let er = 0;
const Bf = /* @__PURE__ */ Promise.resolve(), Vf = () => er || (Bf.then(() => er = 0), er = Date.now());
function Kf(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Ie(
      Uf(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = Vf(), n;
}
function Uf(e, t) {
  if (N(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (s) => !s._stopped && r && r(s)
    );
  } else
    return t;
}
const Es = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Wf = (e, t, n, r, s, i) => {
  const o = s === "svg";
  t === "class" ? Rf(e, r, o) : t === "style" ? Df(e, n, r) : Tn(t) ? Sr(t) || $f(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : zf(e, t, r, o)) ? (xs(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ws(e, t, r, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ie(r)) ? xs(e, Ee(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), ws(e, t, r, o));
};
function zf(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Es(t) && $(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Es(t) && ie(n) ? !1 : t in e;
}
const io = /* @__PURE__ */ new WeakMap(), oo = /* @__PURE__ */ new WeakMap(), xn = Symbol("_moveCb"), Os = Symbol("_enterCb"), kf = (e) => (delete e.props.mode, e), Gf = /* @__PURE__ */ kf({
  name: "TransitionGroup",
  props: /* @__PURE__ */ le({}, to, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = Yt(), r = yi();
    let s, i;
    return Ci(() => {
      if (!s.length)
        return;
      const o = e.moveClass || `${e.name || "v"}-move`;
      if (!Xf(
        s[0].el,
        n.vnode.el,
        o
      )) {
        s = [];
        return;
      }
      s.forEach(qf), s.forEach(Jf);
      const l = s.filter(Yf);
      mr(), l.forEach((f) => {
        const a = f.el, c = a.style;
        $e(a, o), c.transform = c.webkitTransform = c.transitionDuration = "";
        const h = a[xn] = (g) => {
          g && g.target !== a || (!g || /transform$/.test(g.propertyName)) && (a.removeEventListener("transitionend", h), a[xn] = null, Ze(a, o));
        };
        a.addEventListener("transitionend", h);
      }), s = [];
    }), () => {
      const o = k(e), l = no(o);
      let f = o.tag || we;
      if (s = [], i)
        for (let a = 0; a < i.length; a++) {
          const c = i[a];
          c.el && c.el instanceof Element && (s.push(c), pt(
            c,
            Ut(
              c,
              l,
              r,
              n
            )
          ), io.set(
            c,
            c.el.getBoundingClientRect()
          ));
        }
      i = t.default ? Nr(t.default()) : [];
      for (let a = 0; a < i.length; a++) {
        const c = i[a];
        c.key != null && pt(
          c,
          Ut(c, l, r, n)
        );
      }
      return oe(f, null, i);
    };
  }
}), Yc = Gf;
function qf(e) {
  const t = e.el;
  t[xn] && t[xn](), t[Os] && t[Os]();
}
function Jf(e) {
  oo.set(e, e.el.getBoundingClientRect());
}
function Yf(e) {
  const t = io.get(e), n = oo.get(e), r = t.left - n.left, s = t.top - n.top;
  if (r || s) {
    const i = e.el.style;
    return i.transform = i.webkitTransform = `translate(${r}px,${s}px)`, i.transitionDuration = "0s", e;
  }
}
function Xf(e, t, n) {
  const r = e.cloneNode(), s = e[Et];
  s && s.forEach((l) => {
    l.split(/\s+/).forEach((f) => f && r.classList.remove(f));
  }), n.split(/\s+/).forEach((l) => l && r.classList.add(l)), r.style.display = "none";
  const i = t.nodeType === 1 ? t : t.parentNode;
  i.appendChild(r);
  const { hasTransform: o } = ro(r);
  return i.removeChild(r), o;
}
const Zf = ["ctrl", "shift", "alt", "meta"], Qf = {
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
  exact: (e, t) => Zf.some((n) => e[`${n}Key`] && !t.includes(n))
}, Xc = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = (s, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const l = Qf[t[o]];
      if (l && l(s, t)) return;
    }
    return e(s, ...i);
  });
}, ec = /* @__PURE__ */ le({ patchProp: Wf }, Of);
let As;
function tc() {
  return As || (As = Jl(ec));
}
const Zc = (...e) => {
  const t = tc().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const s = rc(r);
    if (!s) return;
    const i = t._component;
    !$(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const o = n(s, !1, nc(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
  }, t;
};
function nc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function rc(e) {
  return ie(e) ? document.querySelector(e) : e;
}
function Ps(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ke(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ps(Object(n), !0).forEach(function(r) {
      _e(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ps(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function sc(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ic(e) {
  var t = sc(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Cn(e) {
  "@babel/helpers - typeof";
  return Cn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Cn(e);
}
function _e(e, t, n) {
  return t = ic(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function oc(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function lc(e, t) {
  if (e == null) return {};
  var n = oc(e, t), r, s;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (s = 0; s < i.length; s++)
      r = i[s], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
var fc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, lo = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(v, T, M) {
      if (!a(T) || h(T) || g(T) || m(T) || f(T))
        return T;
      var P, V = 0, U = 0;
      if (c(T))
        for (P = [], U = T.length; V < U; V++)
          P.push(n(v, T[V], M));
      else {
        P = {};
        for (var B in T)
          Object.prototype.hasOwnProperty.call(T, B) && (P[v(B, M)] = n(v, T[B], M));
      }
      return P;
    }, r = function(v, T) {
      T = T || {};
      var M = T.separator || "_", P = T.split || /(?=[A-Z])/;
      return v.split(P).join(M);
    }, s = function(v) {
      return S(v) ? v : (v = v.replace(/[\-_\s]+(.)?/g, function(T, M) {
        return M ? M.toUpperCase() : "";
      }), v.substr(0, 1).toLowerCase() + v.substr(1));
    }, i = function(v) {
      var T = s(v);
      return T.substr(0, 1).toUpperCase() + T.substr(1);
    }, o = function(v, T) {
      return r(v, T).toLowerCase();
    }, l = Object.prototype.toString, f = function(v) {
      return typeof v == "function";
    }, a = function(v) {
      return v === Object(v);
    }, c = function(v) {
      return l.call(v) == "[object Array]";
    }, h = function(v) {
      return l.call(v) == "[object Date]";
    }, g = function(v) {
      return l.call(v) == "[object RegExp]";
    }, m = function(v) {
      return l.call(v) == "[object Boolean]";
    }, S = function(v) {
      return v = v - 0, v === v;
    }, y = function(v, T) {
      var M = T && "process" in T ? T.process : T;
      return typeof M != "function" ? v : function(P, V) {
        return M(P, v, V);
      };
    }, L = {
      camelize: s,
      decamelize: o,
      pascalize: i,
      depascalize: o,
      camelizeKeys: function(v, T) {
        return n(y(s, T), v);
      },
      decamelizeKeys: function(v, T) {
        return n(y(o, T), v, T);
      },
      pascalizeKeys: function(v, T) {
        return n(y(i, T), v);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = L : t.humps = L;
  })(fc);
})(lo);
var cc = lo.exports, uc = ["class", "style"];
function ac(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), s = cc.camelize(n.slice(0, r)), i = n.slice(r + 1).trim();
    return t[s] = i, t;
  }, {});
}
function dc(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function fo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var r = (e.children || []).map(function(f) {
    return fo(f);
  }), s = Object.keys(e.attributes || {}).reduce(function(f, a) {
    var c = e.attributes[a];
    switch (a) {
      case "class":
        f.class = dc(c);
        break;
      case "style":
        f.style = ac(c);
        break;
      default:
        f.attrs[a] = c;
    }
    return f;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  n.class;
  var i = n.style, o = i === void 0 ? {} : i, l = lc(n, uc);
  return Zi(e.tag, ke(ke(ke({}, t), {}, {
    class: s.class,
    style: ke(ke({}, s.style), o)
  }, s.attrs), l), r);
}
var co = !1;
try {
  co = !0;
} catch {
}
function hc() {
  if (!co && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function tr(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? _e({}, e, t) : {};
}
function pc(e) {
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
  }, _e(_e(_e(_e(_e(_e(_e(_e(_e(_e(t, "fa-".concat(e.size), e.size !== null), "fa-rotate-".concat(e.rotation), e.rotation !== null), "fa-pull-".concat(e.pull), e.pull !== null), "fa-swap-opacity", e.swapOpacity), "fa-bounce", e.bounce), "fa-shake", e.shake), "fa-beat", e.beat), "fa-fade", e.fade), "fa-beat-fade", e.beatFade), "fa-flash", e.flash), _e(_e(t, "fa-spin-pulse", e.spinPulse), "fa-spin-reverse", e.spinReverse));
  return Object.keys(n).map(function(r) {
    return n[r] ? r : null;
  }).filter(function(r) {
    return r;
  });
}
function Ms(e) {
  if (e && Cn(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (rr.icon)
    return rr.icon(e);
  if (e === null)
    return null;
  if (Cn(e) === "object" && e.prefix && e.iconName)
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
var Qc = /* @__PURE__ */ wi({
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
    var r = n.attrs, s = fe(function() {
      return Ms(t.icon);
    }), i = fe(function() {
      return tr("classes", pc(t));
    }), o = fe(function() {
      return tr("transform", typeof t.transform == "string" ? rr.transform(t.transform) : t.transform);
    }), l = fe(function() {
      return tr("mask", Ms(t.mask));
    }), f = fe(function() {
      return bo(s.value, ke(ke(ke(ke({}, i.value), o.value), l.value), {}, {
        symbol: t.symbol,
        title: t.title,
        titleId: t.titleId,
        maskId: t.maskId
      }));
    });
    Re(f, function(c) {
      if (!c)
        return hc("Could not find one or more icon(s)", s.value, l.value);
    }, {
      immediate: !0
    });
    var a = fe(function() {
      return f.value ? fo(f.value.abstract[0], {}, r) : null;
    });
    return function() {
      return a.value;
    };
  }
});
function uo(e) {
  return Er() ? (Ks(e), !0) : !1;
}
const gc = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const mc = Object.prototype.toString, yc = (e) => mc.call(e) === "[object Object]", yr = () => {
};
function vc(...e) {
  if (e.length !== 1)
    return al(...e);
  const t = e[0];
  return typeof t == "function" ? Fn(li(() => ({ get: t, set: yr }))) : Pe(t);
}
function ao(e, t) {
  function n(...r) {
    return new Promise((s, i) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(s).catch(i);
    });
  }
  return n;
}
const ho = (e) => e();
function po(...e) {
  let t = 0, n, r = !0, s = yr, i, o, l, f, a;
  !ce(e[0]) && typeof e[0] == "object" ? { delay: o, trailing: l = !0, leading: f = !0, rejectOnCancel: a = !1 } = e[0] : [o, l = !0, f = !0, a = !1] = e;
  const c = () => {
    n && (clearTimeout(n), n = void 0, s(), s = yr);
  };
  return (g) => {
    const m = nt(o), S = Date.now() - t, y = () => i = g();
    return c(), m <= 0 ? (t = Date.now(), y()) : (S > m && (f || !r) ? (t = Date.now(), y()) : l && (i = new Promise((L, v) => {
      s = a ? v : L, n = setTimeout(() => {
        t = Date.now(), r = !0, L(y()), c();
      }, Math.max(0, m - S));
    })), !f && !n && (n = setTimeout(() => r = !0, m)), r = !1, i);
  };
}
function bc(e = ho, t = {}) {
  const {
    initialState: n = "active"
  } = t, r = vc(n === "active");
  function s() {
    r.value = !1;
  }
  function i() {
    r.value = !0;
  }
  const o = (...l) => {
    r.value && e(...l);
  };
  return { isActive: Fn(r), pause: s, resume: i, eventFilter: o };
}
function nr(e) {
  return Array.isArray(e) ? e : [e];
}
function _c(e) {
  return Yt();
}
function eu(e, t = 200, n = !1, r = !0, s = !1) {
  return ao(
    po(t, n, r, s),
    e
  );
}
function go(e, t, n = {}) {
  const {
    eventFilter: r = ho,
    ...s
  } = n;
  return Re(
    e,
    ao(
      r,
      t
    ),
    s
  );
}
function Sc(e, t, n = {}) {
  const {
    eventFilter: r,
    initialState: s = "active",
    ...i
  } = n, { eventFilter: o, pause: l, resume: f, isActive: a } = bc(r, { initialState: s });
  return { stop: go(
    e,
    t,
    {
      ...i,
      eventFilter: o
    }
  ), pause: l, resume: f, isActive: a };
}
function wc(e, t = !0, n) {
  _c() ? jn(e, n) : t ? e() : Fr(e);
}
function xc(e, t, n) {
  return Re(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
function tu(e, t, n = {}) {
  const {
    throttle: r = 0,
    trailing: s = !0,
    leading: i = !0,
    ...o
  } = n;
  return go(
    e,
    t,
    {
      ...o,
      eventFilter: po(r, s, i)
    }
  );
}
const kt = gc ? window : void 0;
function vr(e) {
  var t;
  const n = nt(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function Rs(...e) {
  const t = [], n = () => {
    t.forEach((l) => l()), t.length = 0;
  }, r = (l, f, a, c) => (l.addEventListener(f, a, c), () => l.removeEventListener(f, a, c)), s = fe(() => {
    const l = nr(nt(e[0])).filter((f) => f != null);
    return l.every((f) => typeof f != "string") ? l : void 0;
  }), i = xc(
    () => {
      var l, f;
      return [
        (f = (l = s.value) == null ? void 0 : l.map((a) => vr(a))) != null ? f : [kt].filter((a) => a != null),
        nr(nt(s.value ? e[1] : e[0])),
        nr(Nn(s.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        nt(s.value ? e[3] : e[2])
      ];
    },
    ([l, f, a, c]) => {
      if (n(), !(l != null && l.length) || !(f != null && f.length) || !(a != null && a.length))
        return;
      const h = yc(c) ? { ...c } : c;
      t.push(
        ...l.flatMap(
          (g) => f.flatMap(
            (m) => a.map((S) => r(g, m, S, h))
          )
        )
      );
    },
    { flush: "post" }
  ), o = () => {
    i(), n();
  };
  return uo(n), o;
}
function Cc() {
  const e = Ir(!1), t = Yt();
  return t && jn(() => {
    e.value = !0;
  }, t), e;
}
function Tc(e) {
  const t = Cc();
  return fe(() => (t.value, !!e()));
}
const on = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ln = "__vueuse_ssr_handlers__", Ec = /* @__PURE__ */ Oc();
function Oc() {
  return ln in on || (on[ln] = on[ln] || {}), on[ln];
}
function Ac(e, t) {
  return Ec[e] || t;
}
function Pc(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const Mc = {
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
}, Is = "vueuse-storage";
function Rc(e, t, n, r = {}) {
  var s;
  const {
    flush: i = "pre",
    deep: o = !0,
    listenToStorageChanges: l = !0,
    writeDefaults: f = !0,
    mergeDefaults: a = !1,
    shallow: c,
    window: h = kt,
    eventFilter: g,
    onError: m = (j) => {
      console.error(j);
    },
    initOnMounted: S
  } = r, y = (c ? Ir : Pe)(typeof t == "function" ? t() : t), L = fe(() => nt(e));
  if (!n)
    try {
      n = Ac("getDefaultStorage", () => {
        var j;
        return (j = kt) == null ? void 0 : j.localStorage;
      })();
    } catch (j) {
      m(j);
    }
  if (!n)
    return y;
  const v = nt(t), T = Pc(v), M = (s = r.serializer) != null ? s : Mc[T], { pause: P, resume: V } = Sc(
    y,
    () => K(y.value),
    { flush: i, deep: o, eventFilter: g }
  );
  Re(L, () => R(), { flush: i });
  let U = !1;
  const B = (j) => {
    S && !U || R(j);
  }, z = (j) => {
    S && !U || Z(j);
  };
  h && l && (n instanceof Storage ? Rs(h, "storage", B, { passive: !0 }) : Rs(h, Is, z)), S ? wc(() => {
    U = !0, R();
  }) : R();
  function I(j, re) {
    if (h) {
      const q = {
        key: L.value,
        oldValue: j,
        newValue: re,
        storageArea: n
      };
      h.dispatchEvent(n instanceof Storage ? new StorageEvent("storage", q) : new CustomEvent(Is, {
        detail: q
      }));
    }
  }
  function K(j) {
    try {
      const re = n.getItem(L.value);
      if (j == null)
        I(re, null), n.removeItem(L.value);
      else {
        const q = M.write(j);
        re !== q && (n.setItem(L.value, q), I(re, q));
      }
    } catch (re) {
      m(re);
    }
  }
  function X(j) {
    const re = j ? j.newValue : n.getItem(L.value);
    if (re == null)
      return f && v != null && n.setItem(L.value, M.write(v)), v;
    if (!j && a) {
      const q = M.read(re);
      return typeof a == "function" ? a(q, v) : T === "object" && !Array.isArray(q) ? { ...v, ...q } : q;
    } else return typeof re != "string" ? re : M.read(re);
  }
  function R(j) {
    if (!(j && j.storageArea !== n)) {
      if (j && j.key == null) {
        y.value = v;
        return;
      }
      if (!(j && j.key !== L.value)) {
        P();
        try {
          (j == null ? void 0 : j.newValue) !== M.write(y.value) && (y.value = X(j));
        } catch (re) {
          m(re);
        } finally {
          j ? Fr(V) : V();
        }
      }
    }
  }
  function Z(j) {
    R(j.detail);
  }
  return y;
}
function nu(e, t, n = {}) {
  const { window: r = kt, ...s } = n;
  let i;
  const o = Tc(() => r && "ResizeObserver" in r), l = () => {
    i && (i.disconnect(), i = void 0);
  }, f = fe(() => {
    const h = nt(e);
    return Array.isArray(h) ? h.map((g) => vr(g)) : [vr(h)];
  }), a = Re(
    f,
    (h) => {
      if (l(), o.value && r) {
        i = new ResizeObserver(t);
        for (const g of h)
          g && i.observe(g, s);
      }
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    l(), a();
  };
  return uo(c), {
    isSupported: o,
    stop: c
  };
}
function ru(e, t, n = {}) {
  const { window: r = kt } = n;
  return Rc(e, t, r == null ? void 0 : r.localStorage, n);
}
function Ic(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function br(e) {
  if (Ic(e)) {
    const t = e.$el;
    return _o(t) && So(t) === "#comment" ? null : t;
  }
  return e;
}
function vt(e) {
  return typeof e == "function" ? e() : Nn(e);
}
function su(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = br(vt(e.element));
      return n == null ? {} : xo({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function mo(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Fs(e, t) {
  const n = mo(e);
  return Math.round(t * n) / n;
}
function iu(e, t, n) {
  n === void 0 && (n = {});
  const r = n.whileElementsMounted, s = fe(() => {
    var B;
    return (B = vt(n.open)) != null ? B : !0;
  }), i = fe(() => vt(n.middleware)), o = fe(() => {
    var B;
    return (B = vt(n.placement)) != null ? B : "bottom";
  }), l = fe(() => {
    var B;
    return (B = vt(n.strategy)) != null ? B : "absolute";
  }), f = fe(() => {
    var B;
    return (B = vt(n.transform)) != null ? B : !0;
  }), a = fe(() => br(e.value)), c = fe(() => br(t.value)), h = Pe(0), g = Pe(0), m = Pe(l.value), S = Pe(o.value), y = Ir({}), L = Pe(!1), v = fe(() => {
    const B = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return B;
    const z = Fs(c.value, h.value), I = Fs(c.value, g.value);
    return f.value ? {
      ...B,
      transform: "translate(" + z + "px, " + I + "px)",
      ...mo(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: z + "px",
      top: I + "px"
    };
  });
  let T;
  function M() {
    if (a.value == null || c.value == null)
      return;
    const B = s.value;
    wo(a.value, c.value, {
      middleware: i.value,
      placement: o.value,
      strategy: l.value
    }).then((z) => {
      h.value = z.x, g.value = z.y, m.value = z.strategy, S.value = z.placement, y.value = z.middlewareData, L.value = B !== !1;
    });
  }
  function P() {
    typeof T == "function" && (T(), T = void 0);
  }
  function V() {
    if (P(), r === void 0) {
      M();
      return;
    }
    if (a.value != null && c.value != null) {
      T = r(a.value, c.value, M);
      return;
    }
  }
  function U() {
    s.value || (L.value = !1);
  }
  return Re([i, o, l, s], M, {
    flush: "sync"
  }), Re([a, c], V, {
    flush: "sync"
  }), Re(s, U, {
    flush: "sync"
  }), Er() && Ks(P), {
    x: mt(h),
    y: mt(g),
    strategy: mt(m),
    placement: mt(S),
    middlewareData: mt(y),
    isPositioned: mt(L),
    floatingStyles: v,
    update: M
  };
}
export {
  Ti as A,
  $c as B,
  nu as C,
  tu as D,
  Ir as E,
  we as F,
  ru as G,
  Mr as H,
  iu as I,
  jc as J,
  su as K,
  Uc as L,
  Wc as M,
  eu as N,
  il as O,
  Xc as P,
  cn as Q,
  Yc as R,
  Nc as S,
  qc as T,
  Kl as U,
  Al as V,
  Bc as W,
  Zc as X,
  Qc as Y,
  Tr as a,
  Ji as b,
  zc as c,
  wi as d,
  Gc as e,
  kc as f,
  Pe as g,
  fe as h,
  Re as i,
  jn as j,
  Fr as k,
  Ei as l,
  pf as m,
  Cr as n,
  dr as o,
  hf as p,
  Kc as q,
  Vc as r,
  hr as s,
  jo as t,
  Nn as u,
  Jc as v,
  Lc as w,
  _l as x,
  Hc as y,
  oe as z
};

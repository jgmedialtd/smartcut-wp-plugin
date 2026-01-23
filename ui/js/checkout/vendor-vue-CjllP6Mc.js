import { p as sl, q as br } from "./vendor-fortawesome-BTWiSXc8.js";
import { c as il, i as ol, g as ll } from "./vendor-floating-ui-DZfk4g77.js";
// @__NO_SIDE_EFFECTS__
function Ir(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const G = {}, xt = [], He = () => {
}, ni = () => !1, Vn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Dr = (e) => e.startsWith("onUpdate:"), le = Object.assign, Nr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, fl = Object.prototype.hasOwnProperty, J = (e, t) => fl.call(e, t), L = Array.isArray, Tt = (e) => Hn(e) === "[object Map]", ri = (e) => Hn(e) === "[object Set]", $ = (e) => typeof e == "function", ie = (e) => typeof e == "string", Qe = (e) => typeof e == "symbol", Q = (e) => e !== null && typeof e == "object", si = (e) => (Q(e) || $(e)) && $(e.then) && $(e.catch), ii = Object.prototype.toString, Hn = (e) => ii.call(e), cl = (e) => Hn(e).slice(8, -1), oi = (e) => Hn(e) === "[object Object]", Kn = (e) => ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, kt = /* @__PURE__ */ Ir(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Wn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, ul = /-\w/g, Te = Wn(
  (e) => e.replace(ul, (t) => t.slice(1).toUpperCase())
), al = /\B([A-Z])/g, et = Wn(
  (e) => e.replace(al, "-$1").toLowerCase()
), on = Wn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Sn = Wn(
  (e) => e ? `on${on(e)}` : ""
), Se = (e, t) => !Object.is(e, t), xn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, li = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, jr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, dl = (e) => {
  const t = ie(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let us;
const Un = () => us || (us = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function kn(e) {
  if (L(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = ie(r) ? ml(r) : kn(r);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (ie(e) || Q(e))
    return e;
}
const hl = /;(?![^(]*\))/g, pl = /:([^]+)/, gl = /\/\*[^]*?\*\//g;
function ml(e) {
  const t = {};
  return e.replace(gl, "").split(hl).forEach((n) => {
    if (n) {
      const r = n.split(pl);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function zn(e) {
  let t = "";
  if (ie(e))
    t = e;
  else if (L(e))
    for (let n = 0; n < e.length; n++) {
      const r = zn(e[n]);
      r && (t += r + " ");
    }
  else if (Q(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const yl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", vl = /* @__PURE__ */ Ir(yl);
function fi(e) {
  return !!e || e === "";
}
const ci = (e) => !!(e && e.__v_isRef === !0), ui = (e) => ie(e) ? e : e == null ? "" : L(e) || Q(e) && (e.toString === ii || !$(e.toString)) ? ci(e) ? ui(e.value) : JSON.stringify(e, ai, 2) : String(e), ai = (e, t) => ci(t) ? ai(e, t.value) : Tt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], i) => (n[or(r, i) + " =>"] = s, n),
    {}
  )
} : ri(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => or(n))
} : Qe(t) ? or(t) : Q(t) && !L(t) && !oi(t) ? String(t) : t, or = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Qe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let pe;
class di {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = pe, !t && pe && (this.index = (pe.scopes || (pe.scopes = [])).push(
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
      const n = pe;
      try {
        return pe = this, t();
      } finally {
        pe = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = pe, pe = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (pe = this.prevScope, this.prevScope = void 0);
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
function Gn() {
  return pe;
}
function Lr(e, t = !1) {
  pe && pe.cleanups.push(e);
}
let re;
const lr = /* @__PURE__ */ new WeakSet();
class $r {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, pe && pe.active && pe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, lr.has(this) && (lr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || pi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, as(this), gi(this);
    const t = re, n = Re;
    re = this, Re = !0;
    try {
      return this.fn();
    } finally {
      mi(this), re = t, Re = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Hr(t);
      this.deps = this.depsTail = void 0, as(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? lr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    _r(this) && this.run();
  }
  get dirty() {
    return _r(this);
  }
}
let hi = 0, zt, Gt;
function pi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Gt, Gt = e;
    return;
  }
  e.next = zt, zt = e;
}
function Br() {
  hi++;
}
function Vr() {
  if (--hi > 0)
    return;
  if (Gt) {
    let t = Gt;
    for (Gt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; zt; ) {
    let t = zt;
    for (zt = void 0; t; ) {
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
function gi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function mi(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), Hr(r), bl(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  e.deps = t, e.depsTail = n;
}
function _r(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (yi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function yi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === en) || (e.globalVersion = en, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !_r(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = re, r = Re;
  re = e, Re = !0;
  try {
    gi(e);
    const s = e.fn(e._value);
    (t.version === 0 || Se(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    re = n, Re = r, mi(e), e.flags &= -3;
  }
}
function Hr(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Hr(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function bl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Re = !0;
const vi = [];
function Ye() {
  vi.push(Re), Re = !1;
}
function Ze() {
  const e = vi.pop();
  Re = e === void 0 ? !0 : e;
}
function as(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = re;
    re = void 0;
    try {
      t();
    } finally {
      re = n;
    }
  }
}
let en = 0;
class _l {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class qn {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!re || !Re || re === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== re)
      n = this.activeLink = new _l(re, this), re.deps ? (n.prevDep = re.depsTail, re.depsTail.nextDep = n, re.depsTail = n) : re.deps = re.depsTail = n, bi(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = re.depsTail, n.nextDep = void 0, re.depsTail.nextDep = n, re.depsTail = n, re.deps === n && (re.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, en++, this.notify(t);
  }
  notify(t) {
    Br();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Vr();
    }
  }
}
function bi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        bi(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const An = /* @__PURE__ */ new WeakMap(), vt = /* @__PURE__ */ Symbol(
  ""
), wr = /* @__PURE__ */ Symbol(
  ""
), tn = /* @__PURE__ */ Symbol(
  ""
);
function ge(e, t, n) {
  if (Re && re) {
    let r = An.get(e);
    r || An.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new qn()), s.map = r, s.key = n), s.track();
  }
}
function ze(e, t, n, r, s, i) {
  const o = An.get(e);
  if (!o) {
    en++;
    return;
  }
  const l = (f) => {
    f && f.trigger();
  };
  if (Br(), t === "clear")
    o.forEach(l);
  else {
    const f = L(e), a = f && Kn(n);
    if (f && n === "length") {
      const c = Number(r);
      o.forEach((h, m) => {
        (m === "length" || m === tn || !Qe(m) && m >= c) && l(h);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), a && l(o.get(tn)), t) {
        case "add":
          f ? a && l(o.get("length")) : (l(o.get(vt)), Tt(e) && l(o.get(wr)));
          break;
        case "delete":
          f || (l(o.get(vt)), Tt(e) && l(o.get(wr)));
          break;
        case "set":
          Tt(e) && l(o.get(vt));
          break;
      }
  }
  Vr();
}
function wl(e, t) {
  const n = An.get(e);
  return n && n.get(t);
}
function _t(e) {
  const t = /* @__PURE__ */ k(e);
  return t === e ? t : (ge(t, "iterate", tn), /* @__PURE__ */ xe(e) ? t : t.map(Fe));
}
function Jn(e) {
  return ge(e = /* @__PURE__ */ k(e), "iterate", tn), e;
}
function st(e, t) {
  return /* @__PURE__ */ Ke(e) ? Pt(/* @__PURE__ */ lt(e) ? Fe(t) : t) : Fe(t);
}
const Sl = {
  __proto__: null,
  [Symbol.iterator]() {
    return fr(this, Symbol.iterator, (e) => st(this, e));
  },
  concat(...e) {
    return _t(this).concat(
      ...e.map((t) => L(t) ? _t(t) : t)
    );
  },
  entries() {
    return fr(this, "entries", (e) => (e[1] = st(this, e[1]), e));
  },
  every(e, t) {
    return We(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return We(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => st(this, r)),
      arguments
    );
  },
  find(e, t) {
    return We(
      this,
      "find",
      e,
      t,
      (n) => st(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return We(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return We(
      this,
      "findLast",
      e,
      t,
      (n) => st(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return We(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return We(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return cr(this, "includes", e);
  },
  indexOf(...e) {
    return cr(this, "indexOf", e);
  },
  join(e) {
    return _t(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return cr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return We(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Vt(this, "pop");
  },
  push(...e) {
    return Vt(this, "push", e);
  },
  reduce(e, ...t) {
    return ds(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ds(this, "reduceRight", e, t);
  },
  shift() {
    return Vt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return We(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Vt(this, "splice", e);
  },
  toReversed() {
    return _t(this).toReversed();
  },
  toSorted(e) {
    return _t(this).toSorted(e);
  },
  toSpliced(...e) {
    return _t(this).toSpliced(...e);
  },
  unshift(...e) {
    return Vt(this, "unshift", e);
  },
  values() {
    return fr(this, "values", (e) => st(this, e));
  }
};
function fr(e, t, n) {
  const r = Jn(e), s = r[t]();
  return r !== e && !/* @__PURE__ */ xe(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.done || (i.value = n(i.value)), i;
  }), s;
}
const xl = Array.prototype;
function We(e, t, n, r, s, i) {
  const o = Jn(e), l = o !== e && !/* @__PURE__ */ xe(e), f = o[t];
  if (f !== xl[t]) {
    const h = f.apply(e, i);
    return l ? Fe(h) : h;
  }
  let a = n;
  o !== e && (l ? a = function(h, m) {
    return n.call(this, st(e, h), m, e);
  } : n.length > 2 && (a = function(h, m) {
    return n.call(this, h, m, e);
  }));
  const c = f.call(o, a, r);
  return l && s ? s(c) : c;
}
function ds(e, t, n, r) {
  const s = Jn(e);
  let i = n;
  return s !== e && (/* @__PURE__ */ xe(e) ? n.length > 3 && (i = function(o, l, f) {
    return n.call(this, o, l, f, e);
  }) : i = function(o, l, f) {
    return n.call(this, o, st(e, l), f, e);
  }), s[t](i, ...r);
}
function cr(e, t, n) {
  const r = /* @__PURE__ */ k(e);
  ge(r, "iterate", tn);
  const s = r[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ ln(n[0]) ? (n[0] = /* @__PURE__ */ k(n[0]), r[t](...n)) : s;
}
function Vt(e, t, n = []) {
  Ye(), Br();
  const r = (/* @__PURE__ */ k(e))[t].apply(e, n);
  return Vr(), Ze(), r;
}
const Tl = /* @__PURE__ */ Ir("__proto__,__v_isRef,__isVue"), _i = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Qe)
);
function Cl(e) {
  Qe(e) || (e = String(e));
  const t = /* @__PURE__ */ k(this);
  return ge(t, "has", e), t.hasOwnProperty(e);
}
class wi {
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
      return r === (s ? i ? Ai : Ei : i ? Ci : Ti).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const o = L(t);
    if (!s) {
      let f;
      if (o && (f = Sl[n]))
        return f;
      if (n === "hasOwnProperty")
        return Cl;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ oe(t) ? t : r
    );
    if ((Qe(n) ? _i.has(n) : Tl(n)) || (s || ge(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ oe(l)) {
      const f = o && Kn(n) ? l : l.value;
      return s && Q(f) ? /* @__PURE__ */ Ot(f) : f;
    }
    return Q(l) ? s ? /* @__PURE__ */ Ot(l) : /* @__PURE__ */ Zn(l) : l;
  }
}
class Si extends wi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let i = t[n];
    const o = L(t) && Kn(n);
    if (!this._isShallow) {
      const a = /* @__PURE__ */ Ke(i);
      if (!/* @__PURE__ */ xe(r) && !/* @__PURE__ */ Ke(r) && (i = /* @__PURE__ */ k(i), r = /* @__PURE__ */ k(r)), !o && /* @__PURE__ */ oe(i) && !/* @__PURE__ */ oe(r))
        return a || (i.value = r), !0;
    }
    const l = o ? Number(n) < t.length : J(t, n), f = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ oe(t) ? t : s
    );
    return t === /* @__PURE__ */ k(s) && (l ? Se(r, i) && ze(t, "set", n, r) : ze(t, "add", n, r)), f;
  }
  deleteProperty(t, n) {
    const r = J(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && ze(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Qe(n) || !_i.has(n)) && ge(t, "has", n), r;
  }
  ownKeys(t) {
    return ge(
      t,
      "iterate",
      L(t) ? "length" : vt
    ), Reflect.ownKeys(t);
  }
}
class xi extends wi {
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
const El = /* @__PURE__ */ new Si(), Al = /* @__PURE__ */ new xi(), Ol = /* @__PURE__ */ new Si(!0), Pl = /* @__PURE__ */ new xi(!0), Sr = (e) => e, pn = (e) => Reflect.getPrototypeOf(e);
function Ml(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, i = /* @__PURE__ */ k(s), o = Tt(i), l = e === "entries" || e === Symbol.iterator && o, f = e === "keys" && o, a = s[e](...r), c = n ? Sr : t ? Pt : Fe;
    return !t && ge(
      i,
      "iterate",
      f ? wr : vt
    ), le(
      // inheriting all iterator properties
      Object.create(a),
      {
        // iterator protocol
        next() {
          const { value: h, done: m } = a.next();
          return m ? { value: h, done: m } : {
            value: l ? [c(h[0]), c(h[1])] : c(h),
            done: m
          };
        }
      }
    );
  };
}
function gn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Rl(e, t) {
  const n = {
    get(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ k(i), l = /* @__PURE__ */ k(s);
      e || (Se(s, l) && ge(o, "get", s), ge(o, "get", l));
      const { has: f } = pn(o), a = t ? Sr : e ? Pt : Fe;
      if (f.call(o, s))
        return a(i.get(s));
      if (f.call(o, l))
        return a(i.get(l));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && ge(/* @__PURE__ */ k(s), "iterate", vt), s.size;
    },
    has(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ k(i), l = /* @__PURE__ */ k(s);
      return e || (Se(s, l) && ge(o, "has", s), ge(o, "has", l)), s === l ? i.has(s) : i.has(s) || i.has(l);
    },
    forEach(s, i) {
      const o = this, l = o.__v_raw, f = /* @__PURE__ */ k(l), a = t ? Sr : e ? Pt : Fe;
      return !e && ge(f, "iterate", vt), l.forEach((c, h) => s.call(i, a(c), a(h), o));
    }
  };
  return le(
    n,
    e ? {
      add: gn("add"),
      set: gn("set"),
      delete: gn("delete"),
      clear: gn("clear")
    } : {
      add(s) {
        !t && !/* @__PURE__ */ xe(s) && !/* @__PURE__ */ Ke(s) && (s = /* @__PURE__ */ k(s));
        const i = /* @__PURE__ */ k(this);
        return pn(i).has.call(i, s) || (i.add(s), ze(i, "add", s, s)), this;
      },
      set(s, i) {
        !t && !/* @__PURE__ */ xe(i) && !/* @__PURE__ */ Ke(i) && (i = /* @__PURE__ */ k(i));
        const o = /* @__PURE__ */ k(this), { has: l, get: f } = pn(o);
        let a = l.call(o, s);
        a || (s = /* @__PURE__ */ k(s), a = l.call(o, s));
        const c = f.call(o, s);
        return o.set(s, i), a ? Se(i, c) && ze(o, "set", s, i) : ze(o, "add", s, i), this;
      },
      delete(s) {
        const i = /* @__PURE__ */ k(this), { has: o, get: l } = pn(i);
        let f = o.call(i, s);
        f || (s = /* @__PURE__ */ k(s), f = o.call(i, s)), l && l.call(i, s);
        const a = i.delete(s);
        return f && ze(i, "delete", s, void 0), a;
      },
      clear() {
        const s = /* @__PURE__ */ k(this), i = s.size !== 0, o = s.clear();
        return i && ze(
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
    n[s] = Ml(s, e, t);
  }), n;
}
function Yn(e, t) {
  const n = Rl(e, t);
  return (r, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    J(n, s) && s in r ? n : r,
    s,
    i
  );
}
const Fl = {
  get: /* @__PURE__ */ Yn(!1, !1)
}, Il = {
  get: /* @__PURE__ */ Yn(!1, !0)
}, Dl = {
  get: /* @__PURE__ */ Yn(!0, !1)
}, Nl = {
  get: /* @__PURE__ */ Yn(!0, !0)
}, Ti = /* @__PURE__ */ new WeakMap(), Ci = /* @__PURE__ */ new WeakMap(), Ei = /* @__PURE__ */ new WeakMap(), Ai = /* @__PURE__ */ new WeakMap();
function jl(e) {
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
function Ll(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : jl(cl(e));
}
// @__NO_SIDE_EFFECTS__
function Zn(e) {
  return /* @__PURE__ */ Ke(e) ? e : Xn(
    e,
    !1,
    El,
    Fl,
    Ti
  );
}
// @__NO_SIDE_EFFECTS__
function Oi(e) {
  return Xn(
    e,
    !1,
    Ol,
    Il,
    Ci
  );
}
// @__NO_SIDE_EFFECTS__
function Ot(e) {
  return Xn(
    e,
    !0,
    Al,
    Dl,
    Ei
  );
}
// @__NO_SIDE_EFFECTS__
function pt(e) {
  return Xn(
    e,
    !0,
    Pl,
    Nl,
    Ai
  );
}
function Xn(e, t, n, r, s) {
  if (!Q(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Ll(e);
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
// @__NO_SIDE_EFFECTS__
function lt(e) {
  return /* @__PURE__ */ Ke(e) ? /* @__PURE__ */ lt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ke(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function xe(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function ln(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function k(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ k(t) : e;
}
function Pi(e) {
  return !J(e, "__v_skip") && Object.isExtensible(e) && li(e, "__v_skip", !0), e;
}
const Fe = (e) => Q(e) ? /* @__PURE__ */ Zn(e) : e, Pt = (e) => Q(e) ? /* @__PURE__ */ Ot(e) : e;
// @__NO_SIDE_EFFECTS__
function oe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Oe(e) {
  return Mi(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Qn(e) {
  return Mi(e, !0);
}
function Mi(e, t) {
  return /* @__PURE__ */ oe(e) ? e : new $l(e, t);
}
class $l {
  constructor(t, n) {
    this.dep = new qn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ k(t), this._value = n ? t : Fe(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ xe(t) || /* @__PURE__ */ Ke(t);
    t = r ? t : /* @__PURE__ */ k(t), Se(t, n) && (this._rawValue = t, this._value = r ? t : Fe(t), this.dep.trigger());
  }
}
function Bl(e) {
  e.dep && e.dep.trigger();
}
function Dt(e) {
  return /* @__PURE__ */ oe(e) ? e.value : e;
}
function Je(e) {
  return $(e) ? e() : Dt(e);
}
const Vl = {
  get: (e, t, n) => t === "__v_raw" ? e : Dt(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return /* @__PURE__ */ oe(s) && !/* @__PURE__ */ oe(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Kr(e) {
  return /* @__PURE__ */ lt(e) ? e : new Proxy(e, Vl);
}
class Hl {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new qn(), { get: r, set: s } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = r, this._set = s;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Wr(e) {
  return new Hl(e);
}
class Kl {
  constructor(t, n, r) {
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0, this._raw = /* @__PURE__ */ k(t);
    let s = !0, i = t;
    if (!L(t) || !Kn(String(n)))
      do
        s = !/* @__PURE__ */ ln(i) || /* @__PURE__ */ xe(i);
      while (s && (i = i.__v_raw));
    this._shallow = s;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = Dt(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ oe(this._raw[this._key])) {
      const n = this._object[this._key];
      if (/* @__PURE__ */ oe(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return wl(this._raw, this._key);
  }
}
class Wl {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
// @__NO_SIDE_EFFECTS__
function Ri(e, t, n) {
  return /* @__PURE__ */ oe(e) ? e : $(e) ? new Wl(e) : Q(e) && arguments.length > 1 ? Ul(e, t, n) : /* @__PURE__ */ Oe(e);
}
function Ul(e, t, n) {
  return new Kl(e, t, n);
}
class kl {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new qn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = en - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    re !== this)
      return pi(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return yi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function zl(e, t, n = !1) {
  let r, s;
  return $(e) ? r = e : (r = e.get, s = e.set), new kl(r, s, n);
}
const mn = {}, On = /* @__PURE__ */ new WeakMap();
let gt;
function Fi(e, t = !1, n = gt) {
  if (n) {
    let r = On.get(n);
    r || On.set(n, r = []), r.push(e);
  }
}
function Gl(e, t, n = G) {
  const { immediate: r, deep: s, once: i, scheduler: o, augmentJob: l, call: f } = n, a = (O) => s ? O : /* @__PURE__ */ xe(O) || s === !1 || s === 0 ? Ge(O, 1) : Ge(O);
  let c, h, m, g, x = !1, v = !1;
  if (/* @__PURE__ */ oe(e) ? (h = () => e.value, x = /* @__PURE__ */ xe(e)) : /* @__PURE__ */ lt(e) ? (h = () => a(e), x = !0) : L(e) ? (v = !0, x = e.some((O) => /* @__PURE__ */ lt(O) || /* @__PURE__ */ xe(O)), h = () => e.map((O) => {
    if (/* @__PURE__ */ oe(O))
      return O.value;
    if (/* @__PURE__ */ lt(O))
      return a(O);
    if ($(O))
      return f ? f(O, 2) : O();
  })) : $(e) ? t ? h = f ? () => f(e, 2) : e : h = () => {
    if (m) {
      Ye();
      try {
        m();
      } finally {
        Ze();
      }
    }
    const O = gt;
    gt = c;
    try {
      return f ? f(e, 3, [g]) : e(g);
    } finally {
      gt = O;
    }
  } : h = He, t && s) {
    const O = h, V = s === !0 ? 1 / 0 : s;
    h = () => Ge(O(), V);
  }
  const F = Gn(), y = () => {
    c.stop(), F && F.active && Nr(F.effects, c);
  };
  if (i && t) {
    const O = t;
    t = (...V) => {
      O(...V), y();
    };
  }
  let T = v ? new Array(e.length).fill(mn) : mn;
  const P = (O) => {
    if (!(!(c.flags & 1) || !c.dirty && !O))
      if (t) {
        const V = c.run();
        if (s || x || (v ? V.some((W, H) => Se(W, T[H])) : Se(V, T))) {
          m && m();
          const W = gt;
          gt = c;
          try {
            const H = [
              V,
              // pass undefined as the old value when it's changed for the first time
              T === mn ? void 0 : v && T[0] === mn ? [] : T,
              g
            ];
            T = V, f ? f(t, 3, H) : (
              // @ts-expect-error
              t(...H)
            );
          } finally {
            gt = W;
          }
        }
      } else
        c.run();
  };
  return l && l(P), c = new $r(h), c.scheduler = o ? () => o(P, !1) : P, g = (O) => Fi(O, !1, c), m = c.onStop = () => {
    const O = On.get(c);
    if (O) {
      if (f)
        f(O, 4);
      else
        for (const V of O) V();
      On.delete(c);
    }
  }, t ? r ? P(!0) : T = c.run() : o ? o(P.bind(null, !0), !0) : c.run(), y.pause = c.pause.bind(c), y.resume = c.resume.bind(c), y.stop = y, y;
}
function Ge(e, t = 1 / 0, n) {
  if (t <= 0 || !Q(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ oe(e))
    Ge(e.value, t, n);
  else if (L(e))
    for (let r = 0; r < e.length; r++)
      Ge(e[r], t, n);
  else if (ri(e) || Tt(e))
    e.forEach((r) => {
      Ge(r, t, n);
    });
  else if (oi(e)) {
    for (const r in e)
      Ge(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Ge(e[r], t, n);
  }
  return e;
}
function Nt(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    jt(s, t, n);
  }
}
function Me(e, t, n, r) {
  if ($(e)) {
    const s = Nt(e, t, n, r);
    return s && si(s) && s.catch((i) => {
      jt(i, t, n);
    }), s;
  }
  if (L(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(Me(e[i], t, n, r));
    return s;
  }
}
function jt(e, t, n, r = !0) {
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
      Ye(), Nt(i, null, 10, [
        e,
        f,
        a
      ]), Ze();
      return;
    }
  }
  ql(e, n, s, r, o);
}
function ql(e, t, n, r = !0, s = !1) {
  if (s)
    throw e;
  console.error(e);
}
const be = [];
let Be = -1;
const Ct = [];
let it = null, wt = 0;
const Ii = /* @__PURE__ */ Promise.resolve();
let Pn = null;
function er(e) {
  const t = Pn || Ii;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Jl(e) {
  let t = Be + 1, n = be.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = be[r], i = nn(s);
    i < e || i === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Ur(e) {
  if (!(e.flags & 1)) {
    const t = nn(e), n = be[be.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= nn(n) ? be.push(e) : be.splice(Jl(t), 0, e), e.flags |= 1, Di();
  }
}
function Di() {
  Pn || (Pn = Ii.then(Li));
}
function Ni(e) {
  L(e) ? Ct.push(...e) : it && e.id === -1 ? it.splice(wt + 1, 0, e) : e.flags & 1 || (Ct.push(e), e.flags |= 1), Di();
}
function hs(e, t, n = Be + 1) {
  for (; n < be.length; n++) {
    const r = be[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      be.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function ji(e) {
  if (Ct.length) {
    const t = [...new Set(Ct)].sort(
      (n, r) => nn(n) - nn(r)
    );
    if (Ct.length = 0, it) {
      it.push(...t);
      return;
    }
    for (it = t, wt = 0; wt < it.length; wt++) {
      const n = it[wt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    it = null, wt = 0;
  }
}
const nn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Li(e) {
  try {
    for (Be = 0; Be < be.length; Be++) {
      const t = be[Be];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Nt(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Be < be.length; Be++) {
      const t = be[Be];
      t && (t.flags &= -2);
    }
    Be = -1, be.length = 0, ji(), Pn = null, (be.length || Ct.length) && Li();
  }
}
let de = null, $i = null;
function Mn(e) {
  const t = de;
  return de = e, $i = e && e.type.__scopeId || null, t;
}
function Bi(e, t = de, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && sn(-1);
    const i = Mn(t);
    let o;
    try {
      o = e(...s);
    } finally {
      Mn(i), r._d && sn(1);
    }
    return o;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Yl(e, t) {
  if (de === null)
    return e;
  const n = sr(de), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, o, l, f = G] = t[s];
    i && ($(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Ge(o), r.push({
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
function at(e, t, n, r) {
  const s = e.dirs, i = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    i && (l.oldValue = i[o].value);
    let f = l.dir[r];
    f && (Ye(), Me(f, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Ze());
  }
}
function Vi(e, t) {
  if (ae) {
    let n = ae.provides;
    const r = ae.parent && ae.parent.provides;
    r === n && (n = ae.provides = Object.create(r)), n[e] = t;
  }
}
function qt(e, t, n = !1) {
  const r = bt();
  if (r || At) {
    let s = At ? At._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && $(t) ? t.call(r && r.proxy) : t;
  }
}
const Hi = /* @__PURE__ */ Symbol.for("v-scx"), Ki = () => qt(Hi);
function Wi(e, t) {
  return kr(
    e,
    null,
    { flush: "sync" }
  );
}
function Pe(e, t, n) {
  return kr(e, t, n);
}
function kr(e, t, n = G) {
  const { immediate: r, deep: s, flush: i, once: o } = n, l = le({}, n), f = t && r || !t && i !== "post";
  let a;
  if (Ft) {
    if (i === "sync") {
      const g = Ki();
      a = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!f) {
      const g = () => {
      };
      return g.stop = He, g.resume = He, g.pause = He, g;
    }
  }
  const c = ae;
  l.call = (g, x, v) => Me(g, c, x, v);
  let h = !1;
  i === "post" ? l.scheduler = (g) => {
    ve(g, c && c.suspense);
  } : i !== "sync" && (h = !0, l.scheduler = (g, x) => {
    x ? g() : Ur(g);
  }), l.augmentJob = (g) => {
    t && (g.flags |= 4), h && (g.flags |= 2, c && (g.id = c.uid, g.i = c));
  };
  const m = Gl(e, t, l);
  return Ft && (a ? a.push(m) : f && m()), m;
}
function Zl(e, t, n) {
  const r = this.proxy, s = ie(e) ? e.includes(".") ? Ui(r, e) : () => r[e] : e.bind(r, r);
  let i;
  $(t) ? i = t : (i = t.handler, n = t);
  const o = an(this), l = kr(s, i.bind(r), n);
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
const ki = /* @__PURE__ */ Symbol("_vte"), zi = (e) => e.__isTeleport, Jt = (e) => e && (e.disabled || e.disabled === ""), ps = (e) => e && (e.defer || e.defer === ""), gs = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ms = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, xr = (e, t) => {
  const n = e && e.to;
  return ie(n) ? t ? t(n) : null : n;
}, Gi = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, s, i, o, l, f, a) {
    const {
      mc: c,
      pc: h,
      pbc: m,
      o: { insert: g, querySelector: x, createText: v, createComment: F }
    } = a, y = Jt(t.props);
    let { shapeFlag: T, children: P, dynamicChildren: O } = t;
    if (e == null) {
      const V = t.el = v(""), W = t.anchor = v("");
      g(V, n, r), g(W, n, r);
      const H = (I, K) => {
        T & 16 && c(
          P,
          I,
          K,
          s,
          i,
          o,
          l,
          f
        );
      }, z = () => {
        const I = t.target = xr(t.props, x), K = qi(I, t, v, g);
        I && (o !== "svg" && gs(I) ? o = "svg" : o !== "mathml" && ms(I) && (o = "mathml"), s && s.isCE && (s.ce._teleportTargets || (s.ce._teleportTargets = /* @__PURE__ */ new Set())).add(I), y || (H(I, K), Tn(t, !1)));
      };
      y && (H(n, W), Tn(t, !0)), ps(t.props) ? (t.el.__isMounted = !1, ve(() => {
        z(), delete t.el.__isMounted;
      }, i)) : z();
    } else {
      if (ps(t.props) && e.el.__isMounted === !1) {
        ve(() => {
          Gi.process(
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
      const V = t.anchor = e.anchor, W = t.target = e.target, H = t.targetAnchor = e.targetAnchor, z = Jt(e.props), I = z ? n : W, K = z ? V : H;
      if (o === "svg" || gs(W) ? o = "svg" : (o === "mathml" || ms(W)) && (o = "mathml"), O ? (m(
        e.dynamicChildren,
        O,
        I,
        s,
        i,
        o,
        l
      ), ts(e, t, !0)) : f || h(
        e,
        t,
        I,
        K,
        s,
        i,
        o,
        l,
        !1
      ), y)
        z ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : yn(
          t,
          n,
          V,
          a,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const Z = t.target = xr(
          t.props,
          x
        );
        Z && yn(
          t,
          Z,
          null,
          a,
          0
        );
      } else z && yn(
        t,
        W,
        H,
        a,
        1
      );
      Tn(t, y);
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
      props: m
    } = e;
    if (h && (s(a), s(c)), i && s(f), o & 16) {
      const g = i || !Jt(m);
      for (let x = 0; x < l.length; x++) {
        const v = l[x];
        r(
          v,
          t,
          n,
          g,
          !!v.dynamicChildren
        );
      }
    }
  },
  move: yn,
  hydrate: Xl
};
function yn(e, t, n, { o: { insert: r }, m: s }, i = 2) {
  i === 0 && r(e.targetAnchor, t, n);
  const { el: o, anchor: l, shapeFlag: f, children: a, props: c } = e, h = i === 2;
  if (h && r(o, t, n), (!h || Jt(c)) && f & 16)
    for (let m = 0; m < a.length; m++)
      s(
        a[m],
        t,
        n,
        2
      );
  h && r(l, t, n);
}
function Xl(e, t, n, r, s, i, {
  o: { nextSibling: o, parentNode: l, querySelector: f, insert: a, createText: c }
}, h) {
  function m(v, F, y, T) {
    F.anchor = h(
      o(v),
      F,
      l(v),
      n,
      r,
      s,
      i
    ), F.targetStart = y, F.targetAnchor = T;
  }
  const g = t.target = xr(
    t.props,
    f
  ), x = Jt(t.props);
  if (g) {
    const v = g._lpa || g.firstChild;
    if (t.shapeFlag & 16)
      if (x)
        m(
          e,
          t,
          v,
          v && o(v)
        );
      else {
        t.anchor = o(e);
        let F = v;
        for (; F; ) {
          if (F && F.nodeType === 8) {
            if (F.data === "teleport start anchor")
              t.targetStart = F;
            else if (F.data === "teleport anchor") {
              t.targetAnchor = F, g._lpa = t.targetAnchor && o(t.targetAnchor);
              break;
            }
          }
          F = o(F);
        }
        t.targetAnchor || qi(g, t, c, a), h(
          v && o(v),
          t,
          g,
          n,
          r,
          s,
          i
        );
      }
    Tn(t, x);
  } else x && t.shapeFlag & 16 && m(e, t, e, o(e));
  return t.anchor && o(t.anchor);
}
const Ql = Gi;
function Tn(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, s;
    for (t ? (r = e.el, s = e.anchor) : (r = e.targetStart, s = e.targetAnchor); r && r !== s; )
      r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function qi(e, t, n, r) {
  const s = t.targetStart = n(""), i = t.targetAnchor = n("");
  return s[ki] = i, e && (r(s, e), r(i, e)), i;
}
const ke = /* @__PURE__ */ Symbol("_leaveCb"), vn = /* @__PURE__ */ Symbol("_enterCb");
function zr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return cn(() => {
    e.isMounted = !0;
  }), Zr(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ae = [Function, Array], Gr = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ae,
  onEnter: Ae,
  onAfterEnter: Ae,
  onEnterCancelled: Ae,
  // leave
  onBeforeLeave: Ae,
  onLeave: Ae,
  onAfterLeave: Ae,
  onLeaveCancelled: Ae,
  // appear
  onBeforeAppear: Ae,
  onAppear: Ae,
  onAfterAppear: Ae,
  onAppearCancelled: Ae
}, Ji = (e) => {
  const t = e.subTree;
  return t.component ? Ji(t.component) : t;
}, ef = {
  name: "BaseTransition",
  props: Gr,
  setup(e, { slots: t }) {
    const n = bt(), r = zr();
    return () => {
      const s = t.default && tr(t.default(), !0);
      if (!s || !s.length)
        return;
      const i = Yi(s), o = /* @__PURE__ */ k(e), { mode: l } = o;
      if (r.isLeaving)
        return ur(i);
      const f = ys(i);
      if (!f)
        return ur(i);
      let a = Mt(
        f,
        o,
        r,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => a = h
      );
      f.type !== ue && ft(f, a);
      let c = n.subTree && ys(n.subTree);
      if (c && c.type !== ue && !mt(c, f) && Ji(n).type !== ue) {
        let h = Mt(
          c,
          o,
          r,
          n
        );
        if (ft(c, h), l === "out-in" && f.type !== ue)
          return r.isLeaving = !0, h.afterLeave = () => {
            r.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, c = void 0;
          }, ur(i);
        l === "in-out" && f.type !== ue ? h.delayLeave = (m, g, x) => {
          const v = Xi(
            r,
            c
          );
          v[String(c.key)] = c, m[ke] = () => {
            g(), m[ke] = void 0, delete a.delayedLeave, c = void 0;
          }, a.delayedLeave = () => {
            x(), delete a.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return i;
    };
  }
};
function Yi(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== ue) {
        t = n;
        break;
      }
  }
  return t;
}
const Zi = ef;
function Xi(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function Mt(e, t, n, r, s) {
  const {
    appear: i,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: f,
    onEnter: a,
    onAfterEnter: c,
    onEnterCancelled: h,
    onBeforeLeave: m,
    onLeave: g,
    onAfterLeave: x,
    onLeaveCancelled: v,
    onBeforeAppear: F,
    onAppear: y,
    onAfterAppear: T,
    onAppearCancelled: P
  } = t, O = String(e.key), V = Xi(n, e), W = (I, K) => {
    I && Me(
      I,
      r,
      9,
      K
    );
  }, H = (I, K) => {
    const Z = K[1];
    W(I, K), L(I) ? I.every((R) => R.length <= 1) && Z() : I.length <= 1 && Z();
  }, z = {
    mode: o,
    persisted: l,
    beforeEnter(I) {
      let K = f;
      if (!n.isMounted)
        if (i)
          K = F || f;
        else
          return;
      I[ke] && I[ke](
        !0
        /* cancelled */
      );
      const Z = V[O];
      Z && mt(e, Z) && Z.el[ke] && Z.el[ke](), W(K, [I]);
    },
    enter(I) {
      let K = a, Z = c, R = h;
      if (!n.isMounted)
        if (i)
          K = y || a, Z = T || c, R = P || h;
        else
          return;
      let ee = !1;
      const N = I[vn] = (X) => {
        ee || (ee = !0, X ? W(R, [I]) : W(Z, [I]), z.delayedLeave && z.delayedLeave(), I[vn] = void 0);
      };
      K ? H(K, [I, N]) : N();
    },
    leave(I, K) {
      const Z = String(e.key);
      if (I[vn] && I[vn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return K();
      W(m, [I]);
      let R = !1;
      const ee = I[ke] = (N) => {
        R || (R = !0, K(), N ? W(v, [I]) : W(x, [I]), I[ke] = void 0, V[Z] === e && delete V[Z]);
      };
      V[Z] = e, g ? H(g, [I, ee]) : ee();
    },
    clone(I) {
      const K = Mt(
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
function ur(e) {
  if (fn(e))
    return e = Xe(e), e.children = null, e;
}
function ys(e) {
  if (!fn(e))
    return zi(e.type) && e.children ? Yi(e.children) : e;
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
function ft(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ft(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function tr(e, t = !1, n) {
  let r = [], s = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === me ? (o.patchFlag & 128 && s++, r = r.concat(
      tr(o.children, t, l)
    )) : (t || o.type !== ue) && r.push(l != null ? Xe(o, { key: l }) : o);
  }
  if (s > 1)
    for (let i = 0; i < r.length; i++)
      r[i].patchFlag = -2;
  return r;
}
// @__NO_SIDE_EFFECTS__
function qr(e, t) {
  return $(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    le({ name: e.name }, t, { setup: e })
  ) : e;
}
function Jr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Rn = /* @__PURE__ */ new WeakMap();
function Yt(e, t, n, r, s = !1) {
  if (L(e)) {
    e.forEach(
      (x, v) => Yt(
        x,
        t && (L(t) ? t[v] : t),
        n,
        r,
        s
      )
    );
    return;
  }
  if (Et(r) && !s) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Yt(e, t, n, r.component.subTree);
    return;
  }
  const i = r.shapeFlag & 4 ? sr(r.component) : r.el, o = s ? null : i, { i: l, r: f } = e, a = t && t.r, c = l.refs === G ? l.refs = {} : l.refs, h = l.setupState, m = /* @__PURE__ */ k(h), g = h === G ? ni : (x) => J(m, x);
  if (a != null && a !== f) {
    if (vs(t), ie(a))
      c[a] = null, g(a) && (h[a] = null);
    else if (/* @__PURE__ */ oe(a)) {
      a.value = null;
      const x = t;
      x.k && (c[x.k] = null);
    }
  }
  if ($(f))
    Nt(f, l, 12, [o, c]);
  else {
    const x = ie(f), v = /* @__PURE__ */ oe(f);
    if (x || v) {
      const F = () => {
        if (e.f) {
          const y = x ? g(f) ? h[f] : c[f] : f.value;
          if (s)
            L(y) && Nr(y, i);
          else if (L(y))
            y.includes(i) || y.push(i);
          else if (x)
            c[f] = [i], g(f) && (h[f] = c[f]);
          else {
            const T = [i];
            f.value = T, e.k && (c[e.k] = T);
          }
        } else x ? (c[f] = o, g(f) && (h[f] = o)) : v && (f.value = o, e.k && (c[e.k] = o));
      };
      if (o) {
        const y = () => {
          F(), Rn.delete(e);
        };
        y.id = -1, Rn.set(e, y), ve(y, n);
      } else
        vs(e), F();
    }
  }
}
function vs(e) {
  const t = Rn.get(e);
  t && (t.flags |= 8, Rn.delete(e));
}
const bs = (e) => e.nodeType === 8;
Un().requestIdleCallback;
Un().cancelIdleCallback;
function tf(e, t) {
  if (bs(e) && e.data === "[") {
    let n = 1, r = e.nextSibling;
    for (; r; ) {
      if (r.nodeType === 1) {
        if (t(r) === !1)
          break;
      } else if (bs(r))
        if (r.data === "]") {
          if (--n === 0) break;
        } else r.data === "[" && n++;
      r = r.nextSibling;
    }
  } else
    t(e);
}
const Et = (e) => !!e.type.__asyncLoader;
// @__NO_SIDE_EFFECTS__
function nf(e) {
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
  const m = () => (h++, a = null, g()), g = () => {
    let x;
    return a || (x = a = t().catch((v) => {
      if (v = v instanceof Error ? v : new Error(String(v)), f)
        return new Promise((F, y) => {
          f(v, () => F(m()), () => y(v), h + 1);
        });
      throw v;
    }).then((v) => x !== a && a ? a : (v && (v.__esModule || v[Symbol.toStringTag] === "Module") && (v = v.default), c = v, v)));
  };
  return /* @__PURE__ */ qr({
    name: "AsyncComponentWrapper",
    __asyncLoader: g,
    __asyncHydrate(x, v, F) {
      let y = !1;
      (v.bu || (v.bu = [])).push(() => y = !0);
      const T = () => {
        y || F();
      }, P = i ? () => {
        const O = i(
          T,
          (V) => tf(x, V)
        );
        O && (v.bum || (v.bum = [])).push(O);
      } : T;
      c ? P() : g().then(() => !v.isUnmounted && P());
    },
    get __asyncResolved() {
      return c;
    },
    setup() {
      const x = ae;
      if (Jr(x), c)
        return () => bn(c, x);
      const v = (P) => {
        a = null, jt(
          P,
          x,
          13,
          !r
        );
      };
      if (l && x.suspense || Ft)
        return g().then((P) => () => bn(P, x)).catch((P) => (v(P), () => r ? ce(r, {
          error: P
        }) : null));
      const F = /* @__PURE__ */ Oe(!1), y = /* @__PURE__ */ Oe(), T = /* @__PURE__ */ Oe(!!s);
      return s && setTimeout(() => {
        T.value = !1;
      }, s), o != null && setTimeout(() => {
        if (!F.value && !y.value) {
          const P = new Error(
            `Async component timed out after ${o}ms.`
          );
          v(P), y.value = P;
        }
      }, o), g().then(() => {
        F.value = !0, x.parent && fn(x.parent.vnode) && x.parent.update();
      }).catch((P) => {
        v(P), y.value = P;
      }), () => {
        if (F.value && c)
          return bn(c, x);
        if (y.value && r)
          return ce(r, {
            error: y.value
          });
        if (n && !T.value)
          return bn(
            n,
            x
          );
      };
    }
  });
}
function bn(e, t) {
  const { ref: n, props: r, children: s, ce: i } = t.vnode, o = ce(e, r, s);
  return o.ref = n, o.ce = i, delete t.vnode.ce, o;
}
const fn = (e) => e.type.__isKeepAlive;
function Qi(e, t) {
  to(e, "a", t);
}
function eo(e, t) {
  to(e, "da", t);
}
function to(e, t, n = ae) {
  const r = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (nr(t, r, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      fn(s.parent.vnode) && rf(r, t, n, s), s = s.parent;
  }
}
function rf(e, t, n, r) {
  const s = nr(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Xr(() => {
    Nr(r[t], s);
  }, n);
}
function nr(e, t, n = ae, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Ye();
      const l = an(n), f = Me(t, n, e, o);
      return l(), Ze(), f;
    });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const tt = (e) => (t, n = ae) => {
  (!Ft || e === "sp") && nr(e, (...r) => t(...r), n);
}, no = tt("bm"), cn = tt("m"), ro = tt(
  "bu"
), Yr = tt("u"), Zr = tt(
  "bum"
), Xr = tt("um"), so = tt(
  "sp"
), io = tt("rtg"), oo = tt("rtc");
function lo(e, t = ae) {
  nr("ec", e, t);
}
const fo = "components";
function sf(e, t) {
  return uo(fo, e, !0, t) || e;
}
const co = /* @__PURE__ */ Symbol.for("v-ndc");
function of(e) {
  return ie(e) ? uo(fo, e, !1) || e : e || co;
}
function uo(e, t, n = !0, r = !1) {
  const s = de || ae;
  if (s) {
    const i = s.type;
    {
      const l = Gf(
        i,
        !1
      );
      if (l && (l === t || l === Te(t) || l === on(Te(t))))
        return i;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      _s(s[e] || i[e], t) || // global registration
      _s(s.appContext[e], t)
    );
    return !o && r ? i : o;
  }
}
function _s(e, t) {
  return e && (e[t] || e[Te(t)] || e[on(Te(t))]);
}
function lf(e, t, n, r) {
  let s;
  const i = n, o = L(e);
  if (o || ie(e)) {
    const l = o && /* @__PURE__ */ lt(e);
    let f = !1, a = !1;
    l && (f = !/* @__PURE__ */ xe(e), a = /* @__PURE__ */ Ke(e), e = Jn(e)), s = new Array(e.length);
    for (let c = 0, h = e.length; c < h; c++)
      s[c] = t(
        f ? a ? Pt(Fe(e[c])) : Fe(e[c]) : e[c],
        c,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let l = 0; l < e; l++)
      s[l] = t(l + 1, l, void 0, i);
  } else if (Q(e))
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
function ff(e, t, n = {}, r, s) {
  if (de.ce || de.parent && Et(de.parent) && de.parent.ce) {
    const a = Object.keys(n).length > 0;
    return Dn(), Nn(
      me,
      null,
      [ce("slot", n, r)],
      a ? -2 : 64
    );
  }
  let i = e[t];
  i && i._c && (i._d = !1), Dn();
  const o = i && ao(i(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  o && o.key, f = Nn(
    me,
    {
      key: (l && !Qe(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!o && r ? "_fb" : "")
    },
    o || [],
    o && e._ === 1 ? 64 : -2
  );
  return !s && f.scopeId && (f.slotScopeIds = [f.scopeId + "-s"]), i && i._c && (i._d = !0), f;
}
function ao(e) {
  return e.some((t) => Rt(t) ? !(t.type === ue || t.type === me && !ao(t.children)) : !0) ? e : null;
}
const Tr = (e) => e ? No(e) ? sr(e) : Tr(e.parent) : null, Zt = (
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
    $parent: (e) => Tr(e.parent),
    $root: (e) => Tr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => po(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ur(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = er.bind(e.proxy)),
    $watch: (e) => Zl.bind(e)
  })
), ar = (e, t) => e !== G && !e.__isScriptSetup && J(e, t), cf = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: i, accessCache: o, type: l, appContext: f } = e;
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
        if (ar(r, t))
          return o[t] = 1, r[t];
        if (s !== G && J(s, t))
          return o[t] = 2, s[t];
        if (J(i, t))
          return o[t] = 3, i[t];
        if (n !== G && J(n, t))
          return o[t] = 4, n[t];
        Cr && (o[t] = 0);
      }
    }
    const a = Zt[t];
    let c, h;
    if (a)
      return t === "$attrs" && ge(e.attrs, "get", ""), a(e);
    if (
      // css module (injected by vue-loader)
      (c = l.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== G && J(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      h = f.config.globalProperties, J(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: i } = e;
    return ar(s, t) ? (s[t] = n, !0) : r !== G && J(r, t) ? (r[t] = n, !0) : J(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, props: i, type: o }
  }, l) {
    let f;
    return !!(n[l] || e !== G && l[0] !== "$" && J(e, l) || ar(t, l) || J(i, l) || J(r, l) || J(Zt, l) || J(s.config.globalProperties, l) || (f = o.__cssModules) && f[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : J(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Fn(e) {
  return L(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function uf(e, t) {
  return !e || !t ? e || t : L(e) && L(t) ? e.concat(t) : le({}, Fn(e), Fn(t));
}
let Cr = !0;
function af(e) {
  const t = po(e), n = e.proxy, r = e.ctx;
  Cr = !1, t.beforeCreate && ws(t.beforeCreate, e, "bc");
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
    mounted: m,
    beforeUpdate: g,
    updated: x,
    activated: v,
    deactivated: F,
    beforeDestroy: y,
    beforeUnmount: T,
    destroyed: P,
    unmounted: O,
    render: V,
    renderTracked: W,
    renderTriggered: H,
    errorCaptured: z,
    serverPrefetch: I,
    // public API
    expose: K,
    inheritAttrs: Z,
    // assets
    components: R,
    directives: ee,
    filters: N
  } = t;
  if (a && df(a, r, null), o)
    for (const se in o) {
      const te = o[se];
      $(te) && (r[se] = te.bind(n));
    }
  if (s) {
    const se = s.call(n, n);
    Q(se) && (e.data = /* @__PURE__ */ Zn(se));
  }
  if (Cr = !0, i)
    for (const se in i) {
      const te = i[se], ct = $(te) ? te.bind(n, n) : $(te.get) ? te.get.bind(n, n) : He, dn = !$(te) && $(te.set) ? te.set.bind(n) : He, ut = fe({
        get: ct,
        set: dn
      });
      Object.defineProperty(r, se, {
        enumerable: !0,
        configurable: !0,
        get: () => ut.value,
        set: (Ie) => ut.value = Ie
      });
    }
  if (l)
    for (const se in l)
      ho(l[se], r, n, se);
  if (f) {
    const se = $(f) ? f.call(n) : f;
    Reflect.ownKeys(se).forEach((te) => {
      Vi(te, se[te]);
    });
  }
  c && ws(c, e, "c");
  function q(se, te) {
    L(te) ? te.forEach((ct) => se(ct.bind(n))) : te && se(te.bind(n));
  }
  if (q(no, h), q(cn, m), q(ro, g), q(Yr, x), q(Qi, v), q(eo, F), q(lo, z), q(oo, W), q(io, H), q(Zr, T), q(Xr, O), q(so, I), L(K))
    if (K.length) {
      const se = e.exposed || (e.exposed = {});
      K.forEach((te) => {
        Object.defineProperty(se, te, {
          get: () => n[te],
          set: (ct) => n[te] = ct,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  V && e.render === He && (e.render = V), Z != null && (e.inheritAttrs = Z), R && (e.components = R), ee && (e.directives = ee), I && Jr(e);
}
function df(e, t, n = He) {
  L(e) && (e = Er(e));
  for (const r in e) {
    const s = e[r];
    let i;
    Q(s) ? "default" in s ? i = qt(
      s.from || r,
      s.default,
      !0
    ) : i = qt(s.from || r) : i = qt(s), /* @__PURE__ */ oe(i) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[r] = i;
  }
}
function ws(e, t, n) {
  Me(
    L(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function ho(e, t, n, r) {
  let s = r.includes(".") ? Ui(n, r) : () => n[r];
  if (ie(e)) {
    const i = t[e];
    $(i) && Pe(s, i);
  } else if ($(e))
    Pe(s, e.bind(n));
  else if (Q(e))
    if (L(e))
      e.forEach((i) => ho(i, t, n, r));
    else {
      const i = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(i) && Pe(s, i, e);
    }
}
function po(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let f;
  return l ? f = l : !s.length && !n && !r ? f = t : (f = {}, s.length && s.forEach(
    (a) => In(f, a, o, !0)
  ), In(f, t, o)), Q(t) && i.set(t, f), f;
}
function In(e, t, n, r = !1) {
  const { mixins: s, extends: i } = t;
  i && In(e, i, n, !0), s && s.forEach(
    (o) => In(e, o, n, !0)
  );
  for (const o in t)
    if (!(r && o === "expose")) {
      const l = hf[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const hf = {
  data: Ss,
  props: xs,
  emits: xs,
  // objects
  methods: Ut,
  computed: Ut,
  // lifecycle
  beforeCreate: ye,
  created: ye,
  beforeMount: ye,
  mounted: ye,
  beforeUpdate: ye,
  updated: ye,
  beforeDestroy: ye,
  beforeUnmount: ye,
  destroyed: ye,
  unmounted: ye,
  activated: ye,
  deactivated: ye,
  errorCaptured: ye,
  serverPrefetch: ye,
  // assets
  components: Ut,
  directives: Ut,
  // watch
  watch: gf,
  // provide / inject
  provide: Ss,
  inject: pf
};
function Ss(e, t) {
  return t ? e ? function() {
    return le(
      $(e) ? e.call(this, this) : e,
      $(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function pf(e, t) {
  return Ut(Er(e), Er(t));
}
function Er(e) {
  if (L(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ye(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ut(e, t) {
  return e ? le(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function xs(e, t) {
  return e ? L(e) && L(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : le(
    /* @__PURE__ */ Object.create(null),
    Fn(e),
    Fn(t ?? {})
  ) : t;
}
function gf(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = le(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = ye(e[r], t[r]);
  return n;
}
function go() {
  return {
    app: null,
    config: {
      isNativeTag: ni,
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
let mf = 0;
function yf(e, t) {
  return function(r, s = null) {
    $(r) || (r = le({}, r)), s != null && !Q(s) && (s = null);
    const i = go(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const a = i.app = {
      _uid: mf++,
      _component: r,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: Lo,
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
      mount(c, h, m) {
        if (!f) {
          const g = a._ceVNode || ce(r, s);
          return g.appContext = i, m === !0 ? m = "svg" : m === !1 && (m = void 0), e(g, c, m), f = !0, a._container = c, c.__vue_app__ = a, sr(g.component);
        }
      },
      onUnmount(c) {
        l.push(c);
      },
      unmount() {
        f && (Me(
          l,
          a._instance,
          16
        ), e(null, a._container), delete a._container.__vue_app__);
      },
      provide(c, h) {
        return i.provides[c] = h, a;
      },
      runWithContext(c) {
        const h = At;
        At = a;
        try {
          return c();
        } finally {
          At = h;
        }
      }
    };
    return a;
  };
}
let At = null;
function vf(e, t, n = G) {
  const r = bt(), s = Te(t), i = et(t), o = mo(e, s), l = Wr((f, a) => {
    let c, h = G, m;
    return Wi(() => {
      const g = e[s];
      Se(c, g) && (c = g, a());
    }), {
      get() {
        return f(), n.get ? n.get(c) : c;
      },
      set(g) {
        const x = n.set ? n.set(g) : g;
        if (!Se(x, c) && !(h !== G && Se(g, h)))
          return;
        const v = r.vnode.props;
        v && // check if parent has passed v-model
        (t in v || s in v || i in v) && (`onUpdate:${t}` in v || `onUpdate:${s}` in v || `onUpdate:${i}` in v) || (c = g, a()), r.emit(`update:${t}`, x), Se(g, x) && Se(g, h) && !Se(x, m) && a(), h = g, m = x;
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
const mo = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Te(t)}Modifiers`] || e[`${et(t)}Modifiers`];
function bf(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || G;
  let s = n;
  const i = t.startsWith("update:"), o = i && mo(r, t.slice(7));
  o && (o.trim && (s = n.map((c) => ie(c) ? c.trim() : c)), o.number && (s = n.map(jr)));
  let l, f = r[l = Sn(t)] || // also try camelCase event handler (#2249)
  r[l = Sn(Te(t))];
  !f && i && (f = r[l = Sn(et(t))]), f && Me(
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
    e.emitted[l] = !0, Me(
      a,
      e,
      6,
      s
    );
  }
}
const _f = /* @__PURE__ */ new WeakMap();
function yo(e, t, n = !1) {
  const r = n ? _f : t.emitsCache, s = r.get(e);
  if (s !== void 0)
    return s;
  const i = e.emits;
  let o = {}, l = !1;
  if (!$(e)) {
    const f = (a) => {
      const c = yo(a, t, !0);
      c && (l = !0, le(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !l ? (Q(e) && r.set(e, null), null) : (L(i) ? i.forEach((f) => o[f] = null) : le(o, i), Q(e) && r.set(e, o), o);
}
function rr(e, t) {
  return !e || !Vn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), J(e, t[0].toLowerCase() + t.slice(1)) || J(e, et(t)) || J(e, t));
}
function Ts(e) {
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
    data: m,
    setupState: g,
    ctx: x,
    inheritAttrs: v
  } = e, F = Mn(e);
  let y, T;
  try {
    if (n.shapeFlag & 4) {
      const O = s || r, V = O;
      y = Ve(
        a.call(
          V,
          O,
          c,
          h,
          g,
          m,
          x
        )
      ), T = l;
    } else {
      const O = t;
      y = Ve(
        O.length > 1 ? O(
          h,
          { attrs: l, slots: o, emit: f }
        ) : O(
          h,
          null
        )
      ), T = t.props ? l : wf(l);
    }
  } catch (O) {
    Qt.length = 0, jt(O, e, 1), y = ce(ue);
  }
  let P = y;
  if (T && v !== !1) {
    const O = Object.keys(T), { shapeFlag: V } = P;
    O.length && V & 7 && (i && O.some(Dr) && (T = Sf(
      T,
      i
    )), P = Xe(P, T, !1, !0));
  }
  return n.dirs && (P = Xe(P, null, !1, !0), P.dirs = P.dirs ? P.dirs.concat(n.dirs) : n.dirs), n.transition && ft(P, n.transition), y = P, Mn(F), y;
}
const wf = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Vn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Sf = (e, t) => {
  const n = {};
  for (const r in e)
    (!Dr(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function xf(e, t, n) {
  const { props: r, children: s, component: i } = e, { props: o, children: l, patchFlag: f } = t, a = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return r ? Cs(r, o, a) : !!o;
    if (f & 8) {
      const c = t.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        const m = c[h];
        if (o[m] !== r[m] && !rr(a, m))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : r === o ? !1 : r ? o ? Cs(r, o, a) : !0 : !!o;
  return !1;
}
function Cs(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (t[i] !== e[i] && !rr(n, i))
      return !0;
  }
  return !1;
}
function Tf({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const vo = {}, bo = () => Object.create(vo), _o = (e) => Object.getPrototypeOf(e) === vo;
function Cf(e, t, n, r = !1) {
  const s = {}, i = bo();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), wo(e, t, s, i);
  for (const o in e.propsOptions[0])
    o in s || (s[o] = void 0);
  n ? e.props = r ? s : /* @__PURE__ */ Oi(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i;
}
function Ef(e, t, n, r) {
  const {
    props: s,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ k(s), [f] = e.propsOptions;
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
        let m = c[h];
        if (rr(e.emitsOptions, m))
          continue;
        const g = t[m];
        if (f)
          if (J(i, m))
            g !== i[m] && (i[m] = g, a = !0);
          else {
            const x = Te(m);
            s[x] = Ar(
              f,
              l,
              x,
              g,
              e,
              !1
            );
          }
        else
          g !== i[m] && (i[m] = g, a = !0);
      }
    }
  } else {
    wo(e, t, s, i) && (a = !0);
    let c;
    for (const h in l)
      (!t || // for camelCase
      !J(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = et(h)) === h || !J(t, c))) && (f ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[c] !== void 0) && (s[h] = Ar(
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
  a && ze(e.attrs, "set", "");
}
function wo(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let f in t) {
      if (kt(f))
        continue;
      const a = t[f];
      let c;
      s && J(s, c = Te(f)) ? !i || !i.includes(c) ? n[c] = a : (l || (l = {}))[c] = a : rr(e.emitsOptions, f) || (!(f in r) || a !== r[f]) && (r[f] = a, o = !0);
    }
  if (i) {
    const f = /* @__PURE__ */ k(n), a = l || G;
    for (let c = 0; c < i.length; c++) {
      const h = i[c];
      n[h] = Ar(
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
function Ar(e, t, n, r, s, i) {
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
          const c = an(s);
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
    ] && (r === "" || r === et(n)) && (r = !0));
  }
  return r;
}
const Af = /* @__PURE__ */ new WeakMap();
function So(e, t, n = !1) {
  const r = n ? Af : t.propsCache, s = r.get(e);
  if (s)
    return s;
  const i = e.props, o = {}, l = [];
  let f = !1;
  if (!$(e)) {
    const c = (h) => {
      f = !0;
      const [m, g] = So(h, t, !0);
      le(o, m), g && l.push(...g);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!i && !f)
    return Q(e) && r.set(e, xt), xt;
  if (L(i))
    for (let c = 0; c < i.length; c++) {
      const h = Te(i[c]);
      Es(h) && (o[h] = G);
    }
  else if (i)
    for (const c in i) {
      const h = Te(c);
      if (Es(h)) {
        const m = i[c], g = o[h] = L(m) || $(m) ? { type: m } : le({}, m), x = g.type;
        let v = !1, F = !0;
        if (L(x))
          for (let y = 0; y < x.length; ++y) {
            const T = x[y], P = $(T) && T.name;
            if (P === "Boolean") {
              v = !0;
              break;
            } else P === "String" && (F = !1);
          }
        else
          v = $(x) && x.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = v, g[
          1
          /* shouldCastTrue */
        ] = F, (v || J(g, "default")) && l.push(h);
      }
    }
  const a = [o, l];
  return Q(e) && r.set(e, a), a;
}
function Es(e) {
  return e[0] !== "$" && !kt(e);
}
const Qr = (e) => e === "_" || e === "_ctx" || e === "$stable", es = (e) => L(e) ? e.map(Ve) : [Ve(e)], Of = (e, t, n) => {
  if (t._n)
    return t;
  const r = Bi((...s) => es(t(...s)), n);
  return r._c = !1, r;
}, xo = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (Qr(s)) continue;
    const i = e[s];
    if ($(i))
      t[s] = Of(s, i, r);
    else if (i != null) {
      const o = es(i);
      t[s] = () => o;
    }
  }
}, To = (e, t) => {
  const n = es(t);
  e.slots.default = () => n;
}, Co = (e, t, n) => {
  for (const r in t)
    (n || !Qr(r)) && (e[r] = t[r]);
}, Pf = (e, t, n) => {
  const r = e.slots = bo();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (Co(r, t, n), n && li(r, "_", s, !0)) : xo(t, r);
  } else t && To(e, t);
}, Mf = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let i = !0, o = G;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : Co(s, t, n) : (i = !t.$stable, xo(t, s)), o = t;
  } else t && (To(e, t), o = { default: 1 });
  if (i)
    for (const l in s)
      !Qr(l) && o[l] == null && delete s[l];
}, ve = Df;
function Eo(e) {
  return Rf(e);
}
function Rf(e, t) {
  const n = Un();
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
    nextSibling: m,
    setScopeId: g = He,
    insertStaticContent: x
  } = e, v = (u, d, p, S = null, b = null, _ = null, A = void 0, E = null, C = !!d.dynamicChildren) => {
    if (u === d)
      return;
    u && !mt(u, d) && (S = hn(u), Ie(u, b, _, !0), u = null), d.patchFlag === -2 && (C = !1, d.dynamicChildren = null);
    const { type: w, ref: j, shapeFlag: M } = d;
    switch (w) {
      case un:
        F(u, d, p, S);
        break;
      case ue:
        y(u, d, p, S);
        break;
      case Xt:
        u == null && T(d, p, S, A);
        break;
      case me:
        R(
          u,
          d,
          p,
          S,
          b,
          _,
          A,
          E,
          C
        );
        break;
      default:
        M & 1 ? V(
          u,
          d,
          p,
          S,
          b,
          _,
          A,
          E,
          C
        ) : M & 6 ? ee(
          u,
          d,
          p,
          S,
          b,
          _,
          A,
          E,
          C
        ) : (M & 64 || M & 128) && w.process(
          u,
          d,
          p,
          S,
          b,
          _,
          A,
          E,
          C,
          $t
        );
    }
    j != null && b ? Yt(j, u && u.ref, _, d || u, !d) : j == null && u && u.ref != null && Yt(u.ref, null, _, u, !0);
  }, F = (u, d, p, S) => {
    if (u == null)
      r(
        d.el = l(d.children),
        p,
        S
      );
    else {
      const b = d.el = u.el;
      d.children !== u.children && a(b, d.children);
    }
  }, y = (u, d, p, S) => {
    u == null ? r(
      d.el = f(d.children || ""),
      p,
      S
    ) : d.el = u.el;
  }, T = (u, d, p, S) => {
    [u.el, u.anchor] = x(
      u.children,
      d,
      p,
      S,
      u.el,
      u.anchor
    );
  }, P = ({ el: u, anchor: d }, p, S) => {
    let b;
    for (; u && u !== d; )
      b = m(u), r(u, p, S), u = b;
    r(d, p, S);
  }, O = ({ el: u, anchor: d }) => {
    let p;
    for (; u && u !== d; )
      p = m(u), s(u), u = p;
    s(d);
  }, V = (u, d, p, S, b, _, A, E, C) => {
    if (d.type === "svg" ? A = "svg" : d.type === "math" && (A = "mathml"), u == null)
      W(
        d,
        p,
        S,
        b,
        _,
        A,
        E,
        C
      );
    else {
      const w = u.el && u.el._isVueCE ? u.el : null;
      try {
        w && w._beginPatch(), I(
          u,
          d,
          b,
          _,
          A,
          E,
          C
        );
      } finally {
        w && w._endPatch();
      }
    }
  }, W = (u, d, p, S, b, _, A, E) => {
    let C, w;
    const { props: j, shapeFlag: M, transition: D, dirs: B } = u;
    if (C = u.el = o(
      u.type,
      _,
      j && j.is,
      j
    ), M & 8 ? c(C, u.children) : M & 16 && z(
      u.children,
      C,
      null,
      S,
      b,
      dr(u, _),
      A,
      E
    ), B && at(u, null, S, "created"), H(C, u, u.scopeId, A, S), j) {
      for (const ne in j)
        ne !== "value" && !kt(ne) && i(C, ne, null, j[ne], _, S);
      "value" in j && i(C, "value", null, j.value, _), (w = j.onVnodeBeforeMount) && Le(w, S, u);
    }
    B && at(u, null, S, "beforeMount");
    const U = Ff(b, D);
    U && D.beforeEnter(C), r(C, d, p), ((w = j && j.onVnodeMounted) || U || B) && ve(() => {
      w && Le(w, S, u), U && D.enter(C), B && at(u, null, S, "mounted");
    }, b);
  }, H = (u, d, p, S, b) => {
    if (p && g(u, p), S)
      for (let _ = 0; _ < S.length; _++)
        g(u, S[_]);
    if (b) {
      let _ = b.subTree;
      if (d === _ || Po(_.type) && (_.ssContent === d || _.ssFallback === d)) {
        const A = b.vnode;
        H(
          u,
          A,
          A.scopeId,
          A.slotScopeIds,
          b.parent
        );
      }
    }
  }, z = (u, d, p, S, b, _, A, E, C = 0) => {
    for (let w = C; w < u.length; w++) {
      const j = u[w] = E ? ot(u[w]) : Ve(u[w]);
      v(
        null,
        j,
        d,
        p,
        S,
        b,
        _,
        A,
        E
      );
    }
  }, I = (u, d, p, S, b, _, A) => {
    const E = d.el = u.el;
    let { patchFlag: C, dynamicChildren: w, dirs: j } = d;
    C |= u.patchFlag & 16;
    const M = u.props || G, D = d.props || G;
    let B;
    if (p && dt(p, !1), (B = D.onVnodeBeforeUpdate) && Le(B, p, d, u), j && at(d, u, p, "beforeUpdate"), p && dt(p, !0), (M.innerHTML && D.innerHTML == null || M.textContent && D.textContent == null) && c(E, ""), w ? K(
      u.dynamicChildren,
      w,
      E,
      p,
      S,
      dr(d, b),
      _
    ) : A || te(
      u,
      d,
      E,
      null,
      p,
      S,
      dr(d, b),
      _,
      !1
    ), C > 0) {
      if (C & 16)
        Z(E, M, D, p, b);
      else if (C & 2 && M.class !== D.class && i(E, "class", null, D.class, b), C & 4 && i(E, "style", M.style, D.style, b), C & 8) {
        const U = d.dynamicProps;
        for (let ne = 0; ne < U.length; ne++) {
          const Y = U[ne], _e = M[Y], we = D[Y];
          (we !== _e || Y === "value") && i(E, Y, _e, we, b, p);
        }
      }
      C & 1 && u.children !== d.children && c(E, d.children);
    } else !A && w == null && Z(E, M, D, p, b);
    ((B = D.onVnodeUpdated) || j) && ve(() => {
      B && Le(B, p, d, u), j && at(d, u, p, "updated");
    }, S);
  }, K = (u, d, p, S, b, _, A) => {
    for (let E = 0; E < d.length; E++) {
      const C = u[E], w = d[E], j = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        C.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (C.type === me || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !mt(C, w) || // - In the case of a component, it could contain anything.
        C.shapeFlag & 198) ? h(C.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      v(
        C,
        w,
        j,
        null,
        S,
        b,
        _,
        A,
        !0
      );
    }
  }, Z = (u, d, p, S, b) => {
    if (d !== p) {
      if (d !== G)
        for (const _ in d)
          !kt(_) && !(_ in p) && i(
            u,
            _,
            d[_],
            null,
            b,
            S
          );
      for (const _ in p) {
        if (kt(_)) continue;
        const A = p[_], E = d[_];
        A !== E && _ !== "value" && i(u, _, E, A, b, S);
      }
      "value" in p && i(u, "value", d.value, p.value, b);
    }
  }, R = (u, d, p, S, b, _, A, E, C) => {
    const w = d.el = u ? u.el : l(""), j = d.anchor = u ? u.anchor : l("");
    let { patchFlag: M, dynamicChildren: D, slotScopeIds: B } = d;
    B && (E = E ? E.concat(B) : B), u == null ? (r(w, p, S), r(j, p, S), z(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      p,
      j,
      b,
      _,
      A,
      E,
      C
    )) : M > 0 && M & 64 && D && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === D.length ? (K(
      u.dynamicChildren,
      D,
      p,
      b,
      _,
      A,
      E
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || b && d === b.subTree) && ts(
      u,
      d,
      !0
      /* shallow */
    )) : te(
      u,
      d,
      p,
      j,
      b,
      _,
      A,
      E,
      C
    );
  }, ee = (u, d, p, S, b, _, A, E, C) => {
    d.slotScopeIds = E, u == null ? d.shapeFlag & 512 ? b.ctx.activate(
      d,
      p,
      S,
      A,
      C
    ) : N(
      d,
      p,
      S,
      b,
      _,
      A,
      C
    ) : X(u, d, C);
  }, N = (u, d, p, S, b, _, A) => {
    const E = u.component = Kf(
      u,
      S,
      b
    );
    if (fn(u) && (E.ctx.renderer = $t), Wf(E, !1, A), E.asyncDep) {
      if (b && b.registerDep(E, q, A), !u.el) {
        const C = E.subTree = ce(ue);
        y(null, C, d, p), u.placeholder = C.el;
      }
    } else
      q(
        E,
        u,
        d,
        p,
        b,
        _,
        A
      );
  }, X = (u, d, p) => {
    const S = d.component = u.component;
    if (xf(u, d, p))
      if (S.asyncDep && !S.asyncResolved) {
        se(S, d, p);
        return;
      } else
        S.next = d, S.update();
    else
      d.el = u.el, S.vnode = d;
  }, q = (u, d, p, S, b, _, A) => {
    const E = () => {
      if (u.isMounted) {
        let { next: M, bu: D, u: B, parent: U, vnode: ne } = u;
        {
          const Ne = Ao(u);
          if (Ne) {
            M && (M.el = ne.el, se(u, M, A)), Ne.asyncDep.then(() => {
              u.isUnmounted || E();
            });
            return;
          }
        }
        let Y = M, _e;
        dt(u, !1), M ? (M.el = ne.el, se(u, M, A)) : M = ne, D && xn(D), (_e = M.props && M.props.onVnodeBeforeUpdate) && Le(_e, U, M, ne), dt(u, !0);
        const we = Ts(u), De = u.subTree;
        u.subTree = we, v(
          De,
          we,
          // parent may have changed if it's in a teleport
          h(De.el),
          // anchor may have changed if it's in a fragment
          hn(De),
          u,
          b,
          _
        ), M.el = we.el, Y === null && Tf(u, we.el), B && ve(B, b), (_e = M.props && M.props.onVnodeUpdated) && ve(
          () => Le(_e, U, M, ne),
          b
        );
      } else {
        let M;
        const { el: D, props: B } = d, { bm: U, m: ne, parent: Y, root: _e, type: we } = u, De = Et(d);
        dt(u, !1), U && xn(U), !De && (M = B && B.onVnodeBeforeMount) && Le(M, Y, d), dt(u, !0);
        {
          _e.ce && // @ts-expect-error _def is private
          _e.ce._def.shadowRoot !== !1 && _e.ce._injectChildStyle(we);
          const Ne = u.subTree = Ts(u);
          v(
            null,
            Ne,
            p,
            S,
            u,
            b,
            _
          ), d.el = Ne.el;
        }
        if (ne && ve(ne, b), !De && (M = B && B.onVnodeMounted)) {
          const Ne = d;
          ve(
            () => Le(M, Y, Ne),
            b
          );
        }
        (d.shapeFlag & 256 || Y && Et(Y.vnode) && Y.vnode.shapeFlag & 256) && u.a && ve(u.a, b), u.isMounted = !0, d = p = S = null;
      }
    };
    u.scope.on();
    const C = u.effect = new $r(E);
    u.scope.off();
    const w = u.update = C.run.bind(C), j = u.job = C.runIfDirty.bind(C);
    j.i = u, j.id = u.uid, C.scheduler = () => Ur(j), dt(u, !0), w();
  }, se = (u, d, p) => {
    d.component = u;
    const S = u.vnode.props;
    u.vnode = d, u.next = null, Ef(u, d.props, S, p), Mf(u, d.children, p), Ye(), hs(u), Ze();
  }, te = (u, d, p, S, b, _, A, E, C = !1) => {
    const w = u && u.children, j = u ? u.shapeFlag : 0, M = d.children, { patchFlag: D, shapeFlag: B } = d;
    if (D > 0) {
      if (D & 128) {
        dn(
          w,
          M,
          p,
          S,
          b,
          _,
          A,
          E,
          C
        );
        return;
      } else if (D & 256) {
        ct(
          w,
          M,
          p,
          S,
          b,
          _,
          A,
          E,
          C
        );
        return;
      }
    }
    B & 8 ? (j & 16 && Lt(w, b, _), M !== w && c(p, M)) : j & 16 ? B & 16 ? dn(
      w,
      M,
      p,
      S,
      b,
      _,
      A,
      E,
      C
    ) : Lt(w, b, _, !0) : (j & 8 && c(p, ""), B & 16 && z(
      M,
      p,
      S,
      b,
      _,
      A,
      E,
      C
    ));
  }, ct = (u, d, p, S, b, _, A, E, C) => {
    u = u || xt, d = d || xt;
    const w = u.length, j = d.length, M = Math.min(w, j);
    let D;
    for (D = 0; D < M; D++) {
      const B = d[D] = C ? ot(d[D]) : Ve(d[D]);
      v(
        u[D],
        B,
        p,
        null,
        b,
        _,
        A,
        E,
        C
      );
    }
    w > j ? Lt(
      u,
      b,
      _,
      !0,
      !1,
      M
    ) : z(
      d,
      p,
      S,
      b,
      _,
      A,
      E,
      C,
      M
    );
  }, dn = (u, d, p, S, b, _, A, E, C) => {
    let w = 0;
    const j = d.length;
    let M = u.length - 1, D = j - 1;
    for (; w <= M && w <= D; ) {
      const B = u[w], U = d[w] = C ? ot(d[w]) : Ve(d[w]);
      if (mt(B, U))
        v(
          B,
          U,
          p,
          null,
          b,
          _,
          A,
          E,
          C
        );
      else
        break;
      w++;
    }
    for (; w <= M && w <= D; ) {
      const B = u[M], U = d[D] = C ? ot(d[D]) : Ve(d[D]);
      if (mt(B, U))
        v(
          B,
          U,
          p,
          null,
          b,
          _,
          A,
          E,
          C
        );
      else
        break;
      M--, D--;
    }
    if (w > M) {
      if (w <= D) {
        const B = D + 1, U = B < j ? d[B].el : S;
        for (; w <= D; )
          v(
            null,
            d[w] = C ? ot(d[w]) : Ve(d[w]),
            p,
            U,
            b,
            _,
            A,
            E,
            C
          ), w++;
      }
    } else if (w > D)
      for (; w <= M; )
        Ie(u[w], b, _, !0), w++;
    else {
      const B = w, U = w, ne = /* @__PURE__ */ new Map();
      for (w = U; w <= D; w++) {
        const Ce = d[w] = C ? ot(d[w]) : Ve(d[w]);
        Ce.key != null && ne.set(Ce.key, w);
      }
      let Y, _e = 0;
      const we = D - U + 1;
      let De = !1, Ne = 0;
      const Bt = new Array(we);
      for (w = 0; w < we; w++) Bt[w] = 0;
      for (w = B; w <= M; w++) {
        const Ce = u[w];
        if (_e >= we) {
          Ie(Ce, b, _, !0);
          continue;
        }
        let je;
        if (Ce.key != null)
          je = ne.get(Ce.key);
        else
          for (Y = U; Y <= D; Y++)
            if (Bt[Y - U] === 0 && mt(Ce, d[Y])) {
              je = Y;
              break;
            }
        je === void 0 ? Ie(Ce, b, _, !0) : (Bt[je - U] = w + 1, je >= Ne ? Ne = je : De = !0, v(
          Ce,
          d[je],
          p,
          null,
          b,
          _,
          A,
          E,
          C
        ), _e++);
      }
      const ls = De ? If(Bt) : xt;
      for (Y = ls.length - 1, w = we - 1; w >= 0; w--) {
        const Ce = U + w, je = d[Ce], fs = d[Ce + 1], cs = Ce + 1 < j ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          fs.el || Oo(fs)
        ) : S;
        Bt[w] === 0 ? v(
          null,
          je,
          p,
          cs,
          b,
          _,
          A,
          E,
          C
        ) : De && (Y < 0 || w !== ls[Y] ? ut(je, p, cs, 2) : Y--);
      }
    }
  }, ut = (u, d, p, S, b = null) => {
    const { el: _, type: A, transition: E, children: C, shapeFlag: w } = u;
    if (w & 6) {
      ut(u.component.subTree, d, p, S);
      return;
    }
    if (w & 128) {
      u.suspense.move(d, p, S);
      return;
    }
    if (w & 64) {
      A.move(u, d, p, $t);
      return;
    }
    if (A === me) {
      r(_, d, p);
      for (let M = 0; M < C.length; M++)
        ut(C[M], d, p, S);
      r(u.anchor, d, p);
      return;
    }
    if (A === Xt) {
      P(u, d, p);
      return;
    }
    if (S !== 2 && w & 1 && E)
      if (S === 0)
        E.beforeEnter(_), r(_, d, p), ve(() => E.enter(_), b);
      else {
        const { leave: M, delayLeave: D, afterLeave: B } = E, U = () => {
          u.ctx.isUnmounted ? s(_) : r(_, d, p);
        }, ne = () => {
          _._isLeaving && _[ke](
            !0
            /* cancelled */
          ), M(_, () => {
            U(), B && B();
          });
        };
        D ? D(_, U, ne) : ne();
      }
    else
      r(_, d, p);
  }, Ie = (u, d, p, S = !1, b = !1) => {
    const {
      type: _,
      props: A,
      ref: E,
      children: C,
      dynamicChildren: w,
      shapeFlag: j,
      patchFlag: M,
      dirs: D,
      cacheIndex: B
    } = u;
    if (M === -2 && (b = !1), E != null && (Ye(), Yt(E, null, p, u, !0), Ze()), B != null && (d.renderCache[B] = void 0), j & 256) {
      d.ctx.deactivate(u);
      return;
    }
    const U = j & 1 && D, ne = !Et(u);
    let Y;
    if (ne && (Y = A && A.onVnodeBeforeUnmount) && Le(Y, d, u), j & 6)
      rl(u.component, p, S);
    else {
      if (j & 128) {
        u.suspense.unmount(p, S);
        return;
      }
      U && at(u, null, d, "beforeUnmount"), j & 64 ? u.type.remove(
        u,
        d,
        p,
        $t,
        S
      ) : w && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !w.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== me || M > 0 && M & 64) ? Lt(
        w,
        d,
        p,
        !1,
        !0
      ) : (_ === me && M & 384 || !b && j & 16) && Lt(C, d, p), S && is(u);
    }
    (ne && (Y = A && A.onVnodeUnmounted) || U) && ve(() => {
      Y && Le(Y, d, u), U && at(u, null, d, "unmounted");
    }, p);
  }, is = (u) => {
    const { type: d, el: p, anchor: S, transition: b } = u;
    if (d === me) {
      nl(p, S);
      return;
    }
    if (d === Xt) {
      O(u);
      return;
    }
    const _ = () => {
      s(p), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (u.shapeFlag & 1 && b && !b.persisted) {
      const { leave: A, delayLeave: E } = b, C = () => A(p, _);
      E ? E(u.el, _, C) : C();
    } else
      _();
  }, nl = (u, d) => {
    let p;
    for (; u !== d; )
      p = m(u), s(u), u = p;
    s(d);
  }, rl = (u, d, p) => {
    const { bum: S, scope: b, job: _, subTree: A, um: E, m: C, a: w } = u;
    As(C), As(w), S && xn(S), b.stop(), _ && (_.flags |= 8, Ie(A, u, d, p)), E && ve(E, d), ve(() => {
      u.isUnmounted = !0;
    }, d);
  }, Lt = (u, d, p, S = !1, b = !1, _ = 0) => {
    for (let A = _; A < u.length; A++)
      Ie(u[A], d, p, S, b);
  }, hn = (u) => {
    if (u.shapeFlag & 6)
      return hn(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const d = m(u.anchor || u.el), p = d && d[ki];
    return p ? m(p) : d;
  };
  let ir = !1;
  const os = (u, d, p) => {
    let S;
    u == null ? d._vnode && (Ie(d._vnode, null, null, !0), S = d._vnode.component) : v(
      d._vnode || null,
      u,
      d,
      null,
      null,
      null,
      p
    ), d._vnode = u, ir || (ir = !0, hs(S), ji(), ir = !1);
  }, $t = {
    p: v,
    um: Ie,
    m: ut,
    r: is,
    mt: N,
    mc: z,
    pc: te,
    pbc: K,
    n: hn,
    o: e
  };
  return {
    render: os,
    hydrate: void 0,
    createApp: yf(os)
  };
}
function dr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function dt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ff(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ts(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (L(r) && L(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let l = s[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[i] = ot(s[i]), l.el = o.el), !n && l.patchFlag !== -2 && ts(o, l)), l.type === un && (l.patchFlag !== -1 ? l.el = o.el : l.__elIndex = i + // take fragment start anchor into account
      (e.type === me ? 1 : 0)), l.type === ue && !l.el && (l.el = o.el);
    }
}
function If(e) {
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
function Ao(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ao(t);
}
function As(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Oo(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Oo(t.subTree) : null;
}
const Po = (e) => e.__isSuspense;
function Df(e, t) {
  t && t.pendingBranch ? L(e) ? t.effects.push(...e) : t.effects.push(e) : Ni(e);
}
const me = /* @__PURE__ */ Symbol.for("v-fgt"), un = /* @__PURE__ */ Symbol.for("v-txt"), ue = /* @__PURE__ */ Symbol.for("v-cmt"), Xt = /* @__PURE__ */ Symbol.for("v-stc"), Qt = [];
let Ee = null;
function Dn(e = !1) {
  Qt.push(Ee = e ? null : []);
}
function Nf() {
  Qt.pop(), Ee = Qt[Qt.length - 1] || null;
}
let rn = 1;
function sn(e, t = !1) {
  rn += e, e < 0 && Ee && t && (Ee.hasOnce = !0);
}
function Mo(e) {
  return e.dynamicChildren = rn > 0 ? Ee || xt : null, Nf(), rn > 0 && Ee && Ee.push(e), e;
}
function jf(e, t, n, r, s, i) {
  return Mo(
    ns(
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
function Nn(e, t, n, r, s) {
  return Mo(
    ce(
      e,
      t,
      n,
      r,
      s,
      !0
    )
  );
}
function Rt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function mt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ro = ({ key: e }) => e ?? null, Cn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ie(e) || /* @__PURE__ */ oe(e) || $(e) ? { i: de, r: e, k: t, f: !!n } : e : null);
function ns(e, t = null, n = null, r = 0, s = null, i = e === me ? 0 : 1, o = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ro(t),
    ref: t && Cn(t),
    scopeId: $i,
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
    ctx: de
  };
  return l ? (rs(f, n), i & 128 && e.normalize(f)) : n && (f.shapeFlag |= ie(n) ? 8 : 16), rn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Ee && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && Ee.push(f), f;
}
const ce = Lf;
function Lf(e, t = null, n = null, r = 0, s = null, i = !1) {
  if ((!e || e === co) && (e = ue), Rt(e)) {
    const l = Xe(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && rs(l, n), rn > 0 && !i && Ee && (l.shapeFlag & 6 ? Ee[Ee.indexOf(e)] = l : Ee.push(l)), l.patchFlag = -2, l;
  }
  if (qf(e) && (e = e.__vccOpts), t) {
    t = Fo(t);
    let { class: l, style: f } = t;
    l && !ie(l) && (t.class = zn(l)), Q(f) && (/* @__PURE__ */ ln(f) && !L(f) && (f = le({}, f)), t.style = kn(f));
  }
  const o = ie(e) ? 1 : Po(e) ? 128 : zi(e) ? 64 : Q(e) ? 4 : $(e) ? 2 : 0;
  return ns(
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
function Fo(e) {
  return e ? /* @__PURE__ */ ln(e) || _o(e) ? le({}, e) : e : null;
}
function Xe(e, t, n = !1, r = !1) {
  const { props: s, ref: i, patchFlag: o, children: l, transition: f } = e, a = t ? Do(s || {}, t) : s, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Ro(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? L(i) ? i.concat(Cn(t)) : [i, Cn(t)] : Cn(t)
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
    patchFlag: t && e.type !== me ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && Xe(e.ssContent),
    ssFallback: e.ssFallback && Xe(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && r && ft(
    c,
    f.clone(c)
  ), c;
}
function Io(e = " ", t = 0) {
  return ce(un, null, e, t);
}
function $f(e, t) {
  const n = ce(Xt, null, e);
  return n.staticCount = t, n;
}
function Bf(e = "", t = !1) {
  return t ? (Dn(), Nn(ue, null, e)) : ce(ue, null, e);
}
function Ve(e) {
  return e == null || typeof e == "boolean" ? ce(ue) : L(e) ? ce(
    me,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Rt(e) ? ot(e) : ce(un, null, String(e));
}
function ot(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Xe(e);
}
function rs(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (L(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), rs(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !_o(t) ? t._ctx = de : s === 3 && de && (de.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else $(t) ? (t = { default: t, _ctx: de }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Io(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Do(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = zn([t.class, r.class]));
      else if (s === "style")
        t.style = kn([t.style, r.style]);
      else if (Vn(s)) {
        const i = t[s], o = r[s];
        o && i !== o && !(L(i) && i.includes(o)) && (t[s] = i ? [].concat(i, o) : o);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function Le(e, t, n, r = null) {
  Me(e, t, 7, [
    n,
    r
  ]);
}
const Vf = go();
let Hf = 0;
function Kf(e, t, n) {
  const r = e.type, s = (t ? t.appContext : e.appContext) || Vf, i = {
    uid: Hf++,
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
    scope: new di(
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
    propsOptions: So(r, s),
    emitsOptions: yo(r, s),
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = bf.bind(null, i), e.ce && e.ce(i), i;
}
let ae = null;
const bt = () => ae || de;
let jn, Or;
{
  const e = Un(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (i) => {
      s.length > 1 ? s.forEach((o) => o(i)) : s[0](i);
    };
  };
  jn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ae = n
  ), Or = t(
    "__VUE_SSR_SETTERS__",
    (n) => Ft = n
  );
}
const an = (e) => {
  const t = ae;
  return jn(e), e.scope.on(), () => {
    e.scope.off(), jn(t);
  };
}, Os = () => {
  ae && ae.scope.off(), jn(null);
};
function No(e) {
  return e.vnode.shapeFlag & 4;
}
let Ft = !1;
function Wf(e, t = !1, n = !1) {
  t && Or(t);
  const { props: r, children: s } = e.vnode, i = No(e);
  Cf(e, r, i, t), Pf(e, s, n || t);
  const o = i ? Uf(e, t) : void 0;
  return t && Or(!1), o;
}
function Uf(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, cf);
  const { setup: r } = n;
  if (r) {
    Ye();
    const s = e.setupContext = r.length > 1 ? zf(e) : null, i = an(e), o = Nt(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), l = si(o);
    if (Ze(), i(), (l || e.sp) && !Et(e) && Jr(e), l) {
      if (o.then(Os, Os), t)
        return o.then((f) => {
          Ps(e, f);
        }).catch((f) => {
          jt(f, e, 0);
        });
      e.asyncDep = o;
    } else
      Ps(e, o);
  } else
    jo(e);
}
function Ps(e, t, n) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Q(t) && (e.setupState = Kr(t)), jo(e);
}
function jo(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || He);
  {
    const s = an(e);
    Ye();
    try {
      af(e);
    } finally {
      Ze(), s();
    }
  }
}
const kf = {
  get(e, t) {
    return ge(e, "get", ""), e[t];
  }
};
function zf(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, kf),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function sr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Kr(Pi(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Zt)
        return Zt[n](e);
    },
    has(t, n) {
      return n in t || n in Zt;
    }
  })) : e.proxy;
}
function Gf(e, t = !0) {
  return $(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function qf(e) {
  return $(e) && "__vccOpts" in e;
}
const fe = (e, t) => /* @__PURE__ */ zl(e, t, Ft);
function ss(e, t, n) {
  try {
    sn(-1);
    const r = arguments.length;
    return r === 2 ? Q(t) && !L(t) ? Rt(t) ? ce(e, null, [t]) : ce(e, t) : ce(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Rt(n) && (n = [n]), ce(e, t, n));
  } finally {
    sn(1);
  }
}
const Lo = "3.5.27";
let Pr;
const Ms = typeof window < "u" && window.trustedTypes;
if (Ms)
  try {
    Pr = /* @__PURE__ */ Ms.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const $o = Pr ? (e) => Pr.createHTML(e) : (e) => e, Jf = "http://www.w3.org/2000/svg", Yf = "http://www.w3.org/1998/Math/MathML", Ue = typeof document < "u" ? document : null, Rs = Ue && /* @__PURE__ */ Ue.createElement("template"), Bo = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? Ue.createElementNS(Jf, e) : t === "mathml" ? Ue.createElementNS(Yf, e) : n ? Ue.createElement(e, { is: n }) : Ue.createElement(e);
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
      Rs.innerHTML = $o(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Rs.content;
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
}, nt = "transition", Ht = "animation", It = /* @__PURE__ */ Symbol("_vtc"), Vo = {
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
}, Ho = /* @__PURE__ */ le(
  {},
  Gr,
  Vo
), Zf = (e) => (e.displayName = "Transition", e.props = Ho, e), Xf = /* @__PURE__ */ Zf(
  (e, { slots: t }) => ss(Zi, Ko(e), t)
), ht = (e, t = []) => {
  L(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Fs = (e) => e ? L(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Ko(e) {
  const t = {};
  for (const R in e)
    R in Vo || (t[R] = e[R]);
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
    leaveActiveClass: m = `${n}-leave-active`,
    leaveToClass: g = `${n}-leave-to`
  } = e, x = Qf(s), v = x && x[0], F = x && x[1], {
    onBeforeEnter: y,
    onEnter: T,
    onEnterCancelled: P,
    onLeave: O,
    onLeaveCancelled: V,
    onBeforeAppear: W = y,
    onAppear: H = T,
    onAppearCancelled: z = P
  } = t, I = (R, ee, N, X) => {
    R._enterCancelled = X, rt(R, ee ? c : l), rt(R, ee ? a : o), N && N();
  }, K = (R, ee) => {
    R._isLeaving = !1, rt(R, h), rt(R, g), rt(R, m), ee && ee();
  }, Z = (R) => (ee, N) => {
    const X = R ? H : T, q = () => I(ee, R, N);
    ht(X, [ee, q]), Is(() => {
      rt(ee, R ? f : i), $e(ee, R ? c : l), Fs(X) || Ds(ee, r, v, q);
    });
  };
  return le(t, {
    onBeforeEnter(R) {
      ht(y, [R]), $e(R, i), $e(R, o);
    },
    onBeforeAppear(R) {
      ht(W, [R]), $e(R, f), $e(R, a);
    },
    onEnter: Z(!1),
    onAppear: Z(!0),
    onLeave(R, ee) {
      R._isLeaving = !0;
      const N = () => K(R, ee);
      $e(R, h), R._enterCancelled ? ($e(R, m), Mr(R)) : (Mr(R), $e(R, m)), Is(() => {
        R._isLeaving && (rt(R, h), $e(R, g), Fs(O) || Ds(R, r, F, N));
      }), ht(O, [R, N]);
    },
    onEnterCancelled(R) {
      I(R, !1, void 0, !0), ht(P, [R]);
    },
    onAppearCancelled(R) {
      I(R, !0, void 0, !0), ht(z, [R]);
    },
    onLeaveCancelled(R) {
      K(R), ht(V, [R]);
    }
  });
}
function Qf(e) {
  if (e == null)
    return null;
  if (Q(e))
    return [hr(e.enter), hr(e.leave)];
  {
    const t = hr(e);
    return [t, t];
  }
}
function hr(e) {
  return dl(e);
}
function $e(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[It] || (e[It] = /* @__PURE__ */ new Set())).add(t);
}
function rt(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[It];
  n && (n.delete(t), n.size || (e[It] = void 0));
}
function Is(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let ec = 0;
function Ds(e, t, n, r) {
  const s = e._endId = ++ec, i = () => {
    s === e._endId && r();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: o, timeout: l, propCount: f } = Wo(e, t);
  if (!o)
    return r();
  const a = o + "end";
  let c = 0;
  const h = () => {
    e.removeEventListener(a, m), i();
  }, m = (g) => {
    g.target === e && ++c >= f && h();
  };
  setTimeout(() => {
    c < f && h();
  }, l + 1), e.addEventListener(a, m);
}
function Wo(e, t) {
  const n = window.getComputedStyle(e), r = (x) => (n[x] || "").split(", "), s = r(`${nt}Delay`), i = r(`${nt}Duration`), o = Ns(s, i), l = r(`${Ht}Delay`), f = r(`${Ht}Duration`), a = Ns(l, f);
  let c = null, h = 0, m = 0;
  t === nt ? o > 0 && (c = nt, h = o, m = i.length) : t === Ht ? a > 0 && (c = Ht, h = a, m = f.length) : (h = Math.max(o, a), c = h > 0 ? o > a ? nt : Ht : null, m = c ? c === nt ? i.length : f.length : 0);
  const g = c === nt && /\b(?:transform|all)(?:,|$)/.test(
    r(`${nt}Property`).toString()
  );
  return {
    type: c,
    timeout: h,
    propCount: m,
    hasTransform: g
  };
}
function Ns(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => js(n) + js(e[r])));
}
function js(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Mr(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function tc(e, t, n) {
  const r = e[It];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ln = /* @__PURE__ */ Symbol("_vod"), Uo = /* @__PURE__ */ Symbol("_vsh"), nc = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Ln] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Kt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Kt(e, !0), r.enter(e)) : r.leave(e, () => {
      Kt(e, !1);
    }) : Kt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Kt(e, t);
  }
};
function Kt(e, t) {
  e.style.display = t ? e[Ln] : "none", e[Uo] = !t;
}
const rc = /* @__PURE__ */ Symbol(""), sc = /(?:^|;)\s*display\s*:/;
function ic(e, t, n) {
  const r = e.style, s = ie(n);
  let i = !1;
  if (n && !s) {
    if (t)
      if (ie(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && En(r, l, "");
        }
      else
        for (const o in t)
          n[o] == null && En(r, o, "");
    for (const o in n)
      o === "display" && (i = !0), En(r, o, n[o]);
  } else if (s) {
    if (t !== n) {
      const o = r[rc];
      o && (n += ";" + o), r.cssText = n, i = sc.test(n);
    }
  } else t && e.removeAttribute("style");
  Ln in e && (e[Ln] = i ? r.display : "", e[Uo] && (r.display = "none"));
}
const Ls = /\s*!important$/;
function En(e, t, n) {
  if (L(n))
    n.forEach((r) => En(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = oc(e, t);
    Ls.test(n) ? e.setProperty(
      et(r),
      n.replace(Ls, ""),
      "important"
    ) : e[r] = n;
  }
}
const $s = ["Webkit", "Moz", "ms"], pr = {};
function oc(e, t) {
  const n = pr[t];
  if (n)
    return n;
  let r = Te(t);
  if (r !== "filter" && r in e)
    return pr[t] = r;
  r = on(r);
  for (let s = 0; s < $s.length; s++) {
    const i = $s[s] + r;
    if (i in e)
      return pr[t] = i;
  }
  return t;
}
const Bs = "http://www.w3.org/1999/xlink";
function Vs(e, t, n, r, s, i = vl(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Bs, t.slice(6, t.length)) : e.setAttributeNS(Bs, t, n) : n == null || i && !fi(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Qe(n) ? String(n) : n
  );
}
function Hs(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? $o(n) : n);
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
    l === "boolean" ? n = fi(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(s || t);
}
function St(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function lc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Ks = /* @__PURE__ */ Symbol("_vei");
function fc(e, t, n, r, s = null) {
  const i = e[Ks] || (e[Ks] = {}), o = i[t];
  if (r && o)
    o.value = r;
  else {
    const [l, f] = cc(t);
    if (r) {
      const a = i[t] = dc(
        r,
        s
      );
      St(e, l, a, f);
    } else o && (lc(e, l, o, f), i[t] = void 0);
  }
}
const Ws = /(?:Once|Passive|Capture)$/;
function cc(e) {
  let t;
  if (Ws.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Ws); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : et(e.slice(2)), t];
}
let gr = 0;
const uc = /* @__PURE__ */ Promise.resolve(), ac = () => gr || (uc.then(() => gr = 0), gr = Date.now());
function dc(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Me(
      hc(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = ac(), n;
}
function hc(e, t) {
  if (L(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (s) => !s._stopped && r && r(s)
    );
  } else
    return t;
}
const Us = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ko = (e, t, n, r, s, i) => {
  const o = s === "svg";
  t === "class" ? tc(e, r, o) : t === "style" ? ic(e, n, r) : Vn(t) ? Dr(t) || fc(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : pc(e, t, r, o)) ? (Hs(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Vs(e, t, r, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ie(r)) ? Hs(e, Te(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Vs(e, t, r, o));
};
function pc(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Us(t) && $(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Us(t) && ie(n) ? !1 : t in e;
}
const zo = /* @__PURE__ */ new WeakMap(), Go = /* @__PURE__ */ new WeakMap(), $n = /* @__PURE__ */ Symbol("_moveCb"), ks = /* @__PURE__ */ Symbol("_enterCb"), gc = (e) => (delete e.props.mode, e), mc = /* @__PURE__ */ gc({
  name: "TransitionGroup",
  props: /* @__PURE__ */ le({}, Ho, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = bt(), r = zr();
    let s, i;
    return Yr(() => {
      if (!s.length)
        return;
      const o = e.moveClass || `${e.name || "v"}-move`;
      if (!wc(
        s[0].el,
        n.vnode.el,
        o
      )) {
        s = [];
        return;
      }
      s.forEach(vc), s.forEach(bc);
      const l = s.filter(_c);
      Mr(n.vnode.el), l.forEach((f) => {
        const a = f.el, c = a.style;
        $e(a, o), c.transform = c.webkitTransform = c.transitionDuration = "";
        const h = a[$n] = (m) => {
          m && m.target !== a || (!m || m.propertyName.endsWith("transform")) && (a.removeEventListener("transitionend", h), a[$n] = null, rt(a, o));
        };
        a.addEventListener("transitionend", h);
      }), s = [];
    }), () => {
      const o = /* @__PURE__ */ k(e), l = Ko(o);
      let f = o.tag || me;
      if (s = [], i)
        for (let a = 0; a < i.length; a++) {
          const c = i[a];
          c.el && c.el instanceof Element && (s.push(c), ft(
            c,
            Mt(
              c,
              l,
              r,
              n
            )
          ), zo.set(c, {
            left: c.el.offsetLeft,
            top: c.el.offsetTop
          }));
        }
      i = t.default ? tr(t.default()) : [];
      for (let a = 0; a < i.length; a++) {
        const c = i[a];
        c.key != null && ft(
          c,
          Mt(c, l, r, n)
        );
      }
      return ce(f, null, i);
    };
  }
}), yc = mc;
function vc(e) {
  const t = e.el;
  t[$n] && t[$n](), t[ks] && t[ks]();
}
function bc(e) {
  Go.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function _c(e) {
  const t = zo.get(e), n = Go.get(e), r = t.left - n.left, s = t.top - n.top;
  if (r || s) {
    const i = e.el.style;
    return i.transform = i.webkitTransform = `translate(${r}px,${s}px)`, i.transitionDuration = "0s", e;
  }
}
function wc(e, t, n) {
  const r = e.cloneNode(), s = e[It];
  s && s.forEach((l) => {
    l.split(/\s+/).forEach((f) => f && r.classList.remove(f));
  }), n.split(/\s+/).forEach((l) => l && r.classList.add(l)), r.style.display = "none";
  const i = t.nodeType === 1 ? t : t.parentNode;
  i.appendChild(r);
  const { hasTransform: o } = Wo(r);
  return i.removeChild(r), o;
}
const zs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return L(t) ? (n) => xn(t, n) : t;
};
function Sc(e) {
  e.target.composing = !0;
}
function Gs(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const mr = /* @__PURE__ */ Symbol("_assign");
function qs(e, t, n) {
  return t && (e = e.trim()), n && (e = jr(e)), e;
}
const xc = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
    e[mr] = zs(s);
    const i = r || s.props && s.props.type === "number";
    St(e, t ? "change" : "input", (o) => {
      o.target.composing || e[mr](qs(e.value, n, i));
    }), (n || i) && St(e, "change", () => {
      e.value = qs(e.value, n, i);
    }), t || (St(e, "compositionstart", Sc), St(e, "compositionend", Gs), St(e, "change", Gs));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: i } }, o) {
    if (e[mr] = zs(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? jr(e.value) : e.value, f = t ?? "";
    l !== f && (document.activeElement === e && e.type !== "range" && (r && t === n || s && e.value.trim() === f) || (e.value = f));
  }
}, Tc = ["ctrl", "shift", "alt", "meta"], Cc = {
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
  exact: (e, t) => Tc.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ec = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((s, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const l = Cc[t[o]];
      if (l && l(s, t)) return;
    }
    return e(s, ...i);
  }));
}, Ac = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Oc = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return n[r] || (n[r] = ((s) => {
    if (!("key" in s))
      return;
    const i = et(s.key);
    if (t.some(
      (o) => o === i || Ac[o] === i
    ))
      return e(s);
  }));
}, Pc = /* @__PURE__ */ le({ patchProp: ko }, Bo);
let Js;
function Mc() {
  return Js || (Js = Eo(Pc));
}
const Rc = ((...e) => {
  const t = Mc().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const s = Ic(r);
    if (!s) return;
    const i = t._component;
    !$(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const o = n(s, !1, Fc(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
  }, t;
});
function Fc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ic(e) {
  return ie(e) ? document.querySelector(e) : e;
}
const gu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, BaseTransition: Zi, BaseTransitionPropsValidators: Gr, Comment: ue, EffectScope: di, Fragment: me, ReactiveEffect: $r, Static: Xt, Teleport: Ql, Text: un, Transition: Xf, TransitionGroup: yc, callWithAsyncErrorHandling: Me, callWithErrorHandling: Nt, camelize: Te, capitalize: on, cloneVNode: Xe, computed: fe, createApp: Rc, createBlock: Nn, createCommentVNode: Bf, createElementBlock: jf, createElementVNode: ns, createRenderer: Eo, createStaticVNode: $f, createTextVNode: Io, createVNode: ce, customRef: Wr, defineAsyncComponent: nf, defineComponent: qr, getCurrentInstance: bt, getCurrentScope: Gn, getTransitionRawChildren: tr, guardReactiveProps: Fo, h: ss, handleError: jt, inject: qt, isProxy: ln, isReactive: lt, isReadonly: Ke, isRef: oe, isShallow: xe, isVNode: Rt, markRaw: Pi, mergeModels: uf, mergeProps: Do, nextTick: er, nodeOps: Bo, normalizeClass: zn, normalizeStyle: kn, onActivated: Qi, onBeforeMount: no, onBeforeUnmount: Zr, onBeforeUpdate: ro, onDeactivated: eo, onErrorCaptured: lo, onMounted: cn, onRenderTracked: oo, onRenderTriggered: io, onScopeDispose: Lr, onServerPrefetch: so, onUnmounted: Xr, onUpdated: Yr, onWatcherCleanup: Fi, openBlock: Dn, patchProp: ko, provide: Vi, proxyRefs: Kr, queuePostFlushCb: Ni, reactive: Zn, readonly: Ot, ref: Oe, renderList: lf, renderSlot: ff, resolveComponent: sf, resolveDynamicComponent: of, resolveTransitionHooks: Mt, setBlockTracking: sn, setTransitionHooks: ft, shallowReactive: Oi, shallowReadonly: pt, shallowRef: Qn, ssrContextKey: Hi, toDisplayString: ui, toHandlerKey: Sn, toRaw: k, toRef: Ri, toValue: Je, triggerRef: Bl, unref: Dt, useModel: vf, useSSRContext: Ki, useTransitionState: zr, vModelText: xc, vShow: nc, version: Lo, watch: Pe, watchSyncEffect: Wi, withCtx: Bi, withDirectives: Yl, withKeys: Oc, withModifiers: Ec }, Symbol.toStringTag, { value: "Module" }));
function he(e, t, n) {
  return (t = Lc(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Ys(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function qe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ys(Object(n), !0).forEach(function(r) {
      he(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ys(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Dc(e, t) {
  if (e == null) return {};
  var n, r, s = Nc(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
  }
  return s;
}
function Nc(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function jc(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Lc(e) {
  var t = jc(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Bn(e) {
  "@babel/helpers - typeof";
  return Bn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bn(e);
}
function yr(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? he({}, e, t) : {};
}
function $c(e) {
  var t, n = (t = {
    "fa-spin": e.spin,
    "fa-pulse": e.pulse,
    // the fixedWidth property has been deprecated as of version 7.0.0
    "fa-fw": e.fixedWidth,
    "fa-border": e.border,
    "fa-li": e.listItem,
    "fa-inverse": e.inverse,
    "fa-flip": e.flip === !0,
    "fa-flip-horizontal": e.flip === "horizontal" || e.flip === "both",
    "fa-flip-vertical": e.flip === "vertical" || e.flip === "both"
  }, he(he(he(he(he(he(he(he(he(he(t, "fa-".concat(e.size), e.size !== null), "fa-rotate-".concat(e.rotation), e.rotation !== null), "fa-rotate-by", e.rotateBy), "fa-pull-".concat(e.pull), e.pull !== null), "fa-swap-opacity", e.swapOpacity), "fa-bounce", e.bounce), "fa-shake", e.shake), "fa-beat", e.beat), "fa-fade", e.fade), "fa-beat-fade", e.beatFade), he(he(he(he(t, "fa-flash", e.flash), "fa-spin-pulse", e.spinPulse), "fa-spin-reverse", e.spinReverse), "fa-width-auto", e.widthAuto));
  return Object.keys(n).map(function(r) {
    return n[r] ? r : null;
  }).filter(function(r) {
    return r;
  });
}
var Bc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, qo = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(y, T, P) {
      if (!a(T) || h(T) || m(T) || g(T) || f(T))
        return T;
      var O, V = 0, W = 0;
      if (c(T))
        for (O = [], W = T.length; V < W; V++)
          O.push(n(y, T[V], P));
      else {
        O = {};
        for (var H in T)
          Object.prototype.hasOwnProperty.call(T, H) && (O[y(H, P)] = n(y, T[H], P));
      }
      return O;
    }, r = function(y, T) {
      T = T || {};
      var P = T.separator || "_", O = T.split || /(?=[A-Z])/;
      return y.split(O).join(P);
    }, s = function(y) {
      return x(y) ? y : (y = y.replace(/[\-_\s]+(.)?/g, function(T, P) {
        return P ? P.toUpperCase() : "";
      }), y.substr(0, 1).toLowerCase() + y.substr(1));
    }, i = function(y) {
      var T = s(y);
      return T.substr(0, 1).toUpperCase() + T.substr(1);
    }, o = function(y, T) {
      return r(y, T).toLowerCase();
    }, l = Object.prototype.toString, f = function(y) {
      return typeof y == "function";
    }, a = function(y) {
      return y === Object(y);
    }, c = function(y) {
      return l.call(y) == "[object Array]";
    }, h = function(y) {
      return l.call(y) == "[object Date]";
    }, m = function(y) {
      return l.call(y) == "[object RegExp]";
    }, g = function(y) {
      return l.call(y) == "[object Boolean]";
    }, x = function(y) {
      return y = y - 0, y === y;
    }, v = function(y, T) {
      var P = T && "process" in T ? T.process : T;
      return typeof P != "function" ? y : function(O, V) {
        return P(O, y, V);
      };
    }, F = {
      camelize: s,
      decamelize: o,
      pascalize: i,
      depascalize: o,
      camelizeKeys: function(y, T) {
        return n(v(s, T), y);
      },
      decamelizeKeys: function(y, T) {
        return n(v(o, T), y, T);
      },
      pascalizeKeys: function(y, T) {
        return n(v(i, T), y);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = F : t.humps = F;
  })(Bc);
})(qo);
var Vc = qo.exports, Hc = ["class", "style"];
function Kc(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), s = Vc.camelize(n.slice(0, r)), i = n.slice(r + 1).trim();
    return t[s] = i, t;
  }, {});
}
function Wc(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function Jo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var r = (e.children || []).map(function(f) {
    return Jo(f);
  }), s = Object.keys(e.attributes || {}).reduce(function(f, a) {
    var c = e.attributes[a];
    switch (a) {
      case "class":
        f.class = Wc(c);
        break;
      case "style":
        f.style = Kc(c);
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
  var i = n.style, o = i === void 0 ? {} : i, l = Dc(n, Hc);
  return ss(e.tag, qe(qe(qe({}, t), {}, {
    class: s.class,
    style: qe(qe({}, s.style), o)
  }, s.attrs), l), r);
}
var Yo = !1;
try {
  Yo = !0;
} catch {
}
function Uc() {
  if (!Yo && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Zs(e) {
  if (e && Bn(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (br.icon)
    return br.icon(e);
  if (e === null)
    return null;
  if (Bn(e) === "object" && e.prefix && e.iconName)
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
var kc = /* @__PURE__ */ qr({
  name: "FontAwesomeIcon",
  props: {
    border: {
      type: Boolean,
      default: !1
    },
    // the fixedWidth property has been deprecated as of version 7
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
    // the rotateBy property is only supported in version 7.0.0 and later
    rotateBy: {
      type: Boolean,
      default: !1
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
    },
    // the widthAuto property is only supported in version 7.0.0 and later
    widthAuto: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, n) {
    var r = n.attrs, s = fe(function() {
      return Zs(t.icon);
    }), i = fe(function() {
      return yr("classes", $c(t));
    }), o = fe(function() {
      return yr("transform", typeof t.transform == "string" ? br.transform(t.transform) : t.transform);
    }), l = fe(function() {
      return yr("mask", Zs(t.mask));
    }), f = fe(function() {
      var c = qe(qe(qe(qe({}, i.value), o.value), l.value), {}, {
        symbol: t.symbol,
        maskId: t.maskId
      });
      return c.title = t.title, c.titleId = t.titleId, sl(s.value, c);
    });
    Pe(f, function(c) {
      if (!c)
        return Uc("Could not find one or more icon(s)", s.value, l.value);
    }, {
      immediate: !0
    });
    var a = fe(function() {
      return f.value ? Jo(f.value.abstract[0], {}, r) : null;
    });
    return function() {
      return a.value;
    };
  }
});
const mu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, FontAwesomeIcon: kc }, Symbol.toStringTag, { value: "Module" }));
function zc(e, t) {
  return Gn() ? (Lr(e, t), !0) : !1;
}
const Gc = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const qc = Object.prototype.toString, Jc = (e) => qc.call(e) === "[object Object]", Rr = () => {
};
function Yc(...e) {
  if (e.length !== 1) return /* @__PURE__ */ Ri(...e);
  const t = e[0];
  return typeof t == "function" ? /* @__PURE__ */ Ot(Wr(() => ({
    get: t,
    set: Rr
  }))) : /* @__PURE__ */ Oe(t);
}
function Zo(e, t) {
  function n(...r) {
    return new Promise((s, i) => {
      Promise.resolve(e(() => t.apply(this, r), {
        fn: t,
        thisArg: this,
        args: r
      })).then(s).catch(i);
    });
  }
  return n;
}
const Xo = (e) => e();
function Qo(...e) {
  let t = 0, n, r = !0, s = Rr, i, o, l, f, a;
  !/* @__PURE__ */ oe(e[0]) && typeof e[0] == "object" ? { delay: o, trailing: l = !0, leading: f = !0, rejectOnCancel: a = !1 } = e[0] : [o, l = !0, f = !0, a = !1] = e;
  const c = () => {
    n && (clearTimeout(n), n = void 0, s(), s = Rr);
  };
  return (m) => {
    const g = Je(o), x = Date.now() - t, v = () => i = m();
    return c(), g <= 0 ? (t = Date.now(), v()) : (x > g ? (t = Date.now(), (f || !r) && v()) : l && (i = new Promise((F, y) => {
      s = a ? y : F, n = setTimeout(() => {
        t = Date.now(), r = !0, F(v()), c();
      }, Math.max(0, g - x));
    })), !f && !n && (n = setTimeout(() => r = !0, g)), r = !1, i);
  };
}
function Zc(e = Xo, t = {}) {
  const { initialState: n = "active" } = t, r = Yc(n === "active");
  function s() {
    r.value = !1;
  }
  function i() {
    r.value = !0;
  }
  return {
    isActive: /* @__PURE__ */ Ot(r),
    pause: s,
    resume: i,
    eventFilter: (...l) => {
      r.value && e(...l);
    }
  };
}
function vr(e) {
  return Array.isArray(e) ? e : [e];
}
function Xc(e) {
  return bt();
}
// @__NO_SIDE_EFFECTS__
function yu(e, t = 200, n = !1, r = !0, s = !1) {
  return Zo(Qo(t, n, r, s), e);
}
function el(e, t, n = {}) {
  const { eventFilter: r = Xo, ...s } = n;
  return Pe(e, Zo(r, t), s);
}
function Qc(e, t, n = {}) {
  const { eventFilter: r, initialState: s = "active", ...i } = n, { eventFilter: o, pause: l, resume: f, isActive: a } = Zc(r, { initialState: s });
  return {
    stop: el(e, t, {
      ...i,
      eventFilter: o
    }),
    pause: l,
    resume: f,
    isActive: a
  };
}
const eu = Qc;
function tu(e, t = !0, n) {
  Xc() ? cn(e, n) : t ? e() : er(e);
}
function nu(e, t, n) {
  return Pe(e, t, {
    ...n,
    immediate: !0
  });
}
function vu(e, t, n = {}) {
  const { throttle: r = 0, trailing: s = !0, leading: i = !0, ...o } = n;
  return el(e, t, {
    ...o,
    eventFilter: Qo(r, s, i)
  });
}
const yt = Gc ? window : void 0;
function Fr(e) {
  var t;
  const n = Je(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function Xs(...e) {
  const t = (r, s, i, o) => (r.addEventListener(s, i, o), () => r.removeEventListener(s, i, o)), n = fe(() => {
    const r = vr(Je(e[0])).filter((s) => s != null);
    return r.every((s) => typeof s != "string") ? r : void 0;
  });
  return nu(() => {
    var r, s;
    return [
      (r = (s = n.value) === null || s === void 0 ? void 0 : s.map((i) => Fr(i))) !== null && r !== void 0 ? r : [yt].filter((i) => i != null),
      vr(Je(n.value ? e[1] : e[0])),
      vr(Dt(n.value ? e[2] : e[1])),
      Je(n.value ? e[3] : e[2])
    ];
  }, ([r, s, i, o], l, f) => {
    if (!r?.length || !s?.length || !i?.length) return;
    const a = Jc(o) ? { ...o } : o, c = r.flatMap((h) => s.flatMap((m) => i.map((g) => t(h, m, g, a))));
    f(() => {
      c.forEach((h) => h());
    });
  }, { flush: "post" });
}
// @__NO_SIDE_EFFECTS__
function ru() {
  const e = /* @__PURE__ */ Qn(!1), t = bt();
  return t && cn(() => {
    e.value = !0;
  }, t), e;
}
// @__NO_SIDE_EFFECTS__
function su(e) {
  const t = /* @__PURE__ */ ru();
  return fe(() => (t.value, !!e()));
}
const _n = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, wn = "__vueuse_ssr_handlers__", iu = /* @__PURE__ */ ou();
function ou() {
  return wn in _n || (_n[wn] = _n[wn] || {}), _n[wn];
}
function lu(e, t) {
  return iu[e] || t;
}
function fu(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const cu = {
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
}, Qs = "vueuse-storage";
function uu(e, t, n, r = {}) {
  var s;
  const { flush: i = "pre", deep: o = !0, listenToStorageChanges: l = !0, writeDefaults: f = !0, mergeDefaults: a = !1, shallow: c, window: h = yt, eventFilter: m, onError: g = (N) => {
    console.error(N);
  }, initOnMounted: x } = r, v = (c ? Qn : Oe)(typeof t == "function" ? t() : t), F = fe(() => Je(e));
  if (!n) try {
    n = lu("getDefaultStorage", () => yt?.localStorage)();
  } catch (N) {
    g(N);
  }
  if (!n) return v;
  const y = Je(t), T = fu(y), P = (s = r.serializer) !== null && s !== void 0 ? s : cu[T], { pause: O, resume: V } = eu(v, (N) => K(N), {
    flush: i,
    deep: o,
    eventFilter: m
  });
  Pe(F, () => R(), { flush: i });
  let W = !1;
  const H = (N) => {
    x && !W || R(N);
  }, z = (N) => {
    x && !W || ee(N);
  };
  h && l && (n instanceof Storage ? Xs(h, "storage", H, { passive: !0 }) : Xs(h, Qs, z)), x ? tu(() => {
    W = !0, R();
  }) : R();
  function I(N, X) {
    if (h) {
      const q = {
        key: F.value,
        oldValue: N,
        newValue: X,
        storageArea: n
      };
      h.dispatchEvent(n instanceof Storage ? new StorageEvent("storage", q) : new CustomEvent(Qs, { detail: q }));
    }
  }
  function K(N) {
    try {
      const X = n.getItem(F.value);
      if (N == null)
        I(X, null), n.removeItem(F.value);
      else {
        const q = P.write(N);
        X !== q && (n.setItem(F.value, q), I(X, q));
      }
    } catch (X) {
      g(X);
    }
  }
  function Z(N) {
    const X = N ? N.newValue : n.getItem(F.value);
    if (X == null)
      return f && y != null && n.setItem(F.value, P.write(y)), y;
    if (!N && a) {
      const q = P.read(X);
      return typeof a == "function" ? a(q, y) : T === "object" && !Array.isArray(q) ? {
        ...y,
        ...q
      } : q;
    } else return typeof X != "string" ? X : P.read(X);
  }
  function R(N) {
    if (!(N && N.storageArea !== n)) {
      if (N && N.key == null) {
        v.value = y;
        return;
      }
      if (!(N && N.key !== F.value)) {
        O();
        try {
          const X = P.write(v.value);
          (N === void 0 || N?.newValue !== X) && (v.value = Z(N));
        } catch (X) {
          g(X);
        } finally {
          N ? er(V) : V();
        }
      }
    }
  }
  function ee(N) {
    R(N.detail);
  }
  return v;
}
function bu(e, t, n = {}) {
  const { window: r = yt, ...s } = n;
  let i;
  const o = /* @__PURE__ */ su(() => r && "ResizeObserver" in r), l = () => {
    i && (i.disconnect(), i = void 0);
  }, f = Pe(fe(() => {
    const c = Je(e);
    return Array.isArray(c) ? c.map((h) => Fr(h)) : [Fr(c)];
  }), (c) => {
    if (l(), o.value && r) {
      i = new ResizeObserver(t);
      for (const h of c) h && i.observe(h, s);
    }
  }, {
    immediate: !0,
    flush: "post"
  }), a = () => {
    l(), f();
  };
  return zc(a), {
    isSupported: o,
    stop: a
  };
}
function _u(e, t, n = {}) {
  const { window: r = yt } = n;
  return uu(e, t, r?.localStorage, n);
}
function au(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function ei(e) {
  if (au(e)) {
    const t = e.$el;
    return ol(t) && ll(t) === "#comment" ? null : t;
  }
  return e;
}
function Wt(e) {
  return typeof e == "function" ? e() : Dt(e);
}
function tl(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ti(e, t) {
  const n = tl(e);
  return Math.round(t * n) / n;
}
function wu(e, t, n) {
  n === void 0 && (n = {});
  const r = n.whileElementsMounted, s = fe(() => {
    var H;
    return (H = Wt(n.open)) != null ? H : !0;
  }), i = fe(() => Wt(n.middleware)), o = fe(() => {
    var H;
    return (H = Wt(n.placement)) != null ? H : "bottom";
  }), l = fe(() => {
    var H;
    return (H = Wt(n.strategy)) != null ? H : "absolute";
  }), f = fe(() => {
    var H;
    return (H = Wt(n.transform)) != null ? H : !0;
  }), a = fe(() => ei(e.value)), c = fe(() => ei(t.value)), h = /* @__PURE__ */ Oe(0), m = /* @__PURE__ */ Oe(0), g = /* @__PURE__ */ Oe(l.value), x = /* @__PURE__ */ Oe(o.value), v = /* @__PURE__ */ Qn({}), F = /* @__PURE__ */ Oe(!1), y = fe(() => {
    const H = {
      position: g.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return H;
    const z = ti(c.value, h.value), I = ti(c.value, m.value);
    return f.value ? {
      ...H,
      transform: "translate(" + z + "px, " + I + "px)",
      ...tl(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: g.value,
      left: z + "px",
      top: I + "px"
    };
  });
  let T;
  function P() {
    if (a.value == null || c.value == null)
      return;
    const H = s.value;
    il(a.value, c.value, {
      middleware: i.value,
      placement: o.value,
      strategy: l.value
    }).then((z) => {
      h.value = z.x, m.value = z.y, g.value = z.strategy, x.value = z.placement, v.value = z.middlewareData, F.value = H !== !1;
    });
  }
  function O() {
    typeof T == "function" && (T(), T = void 0);
  }
  function V() {
    if (O(), r === void 0) {
      P();
      return;
    }
    if (a.value != null && c.value != null) {
      T = r(a.value, c.value, P);
      return;
    }
  }
  function W() {
    s.value || (F.value = !1);
  }
  return Pe([i, o, l, s], P, {
    flush: "sync"
  }), Pe([a, c], V, {
    flush: "sync"
  }), Pe(s, W, {
    flush: "sync"
  }), Gn() && Lr(O), {
    x: /* @__PURE__ */ pt(h),
    y: /* @__PURE__ */ pt(m),
    strategy: /* @__PURE__ */ pt(g),
    placement: /* @__PURE__ */ pt(x),
    middlewareData: /* @__PURE__ */ pt(v),
    isPositioned: /* @__PURE__ */ pt(F),
    floatingStyles: y,
    update: P
  };
}
export {
  oe as $,
  bu as A,
  vu as B,
  Zn as C,
  wu as D,
  Xr as E,
  me as F,
  kc as G,
  Ec as H,
  Do as I,
  Bi as J,
  ff as K,
  sf as L,
  Oc as M,
  Ri as N,
  $f as O,
  Io as P,
  _u as Q,
  no as R,
  qt as S,
  Ql as T,
  yc as U,
  uf as V,
  vf as W,
  yu as X,
  Zr as Y,
  Xf as Z,
  xc as _,
  Nn as a,
  gu as a0,
  mu as a1,
  jf as b,
  fe as c,
  qr as d,
  Bf as e,
  of as f,
  nf as g,
  cn as h,
  ce as i,
  ns as j,
  Ot as k,
  Bl as l,
  Pi as m,
  er as n,
  Dn as o,
  Vi as p,
  lf as q,
  Oe as r,
  Qn as s,
  ui as t,
  Dt as u,
  kn as v,
  Pe as w,
  zn as x,
  Yl as y,
  nc as z
};

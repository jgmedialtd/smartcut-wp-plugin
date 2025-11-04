import { aa as yr, ab as el, ac as tl, ad as nl, ae as rl } from "./vendor-4AnxBRif.js";
/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Fr(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const G = {}, St = [], He = () => {
}, ei = () => !1, Ln = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ir = (e) => e.startsWith("onUpdate:"), ce = Object.assign, Dr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, sl = Object.prototype.hasOwnProperty, J = (e, t) => sl.call(e, t), L = Array.isArray, wt = (e) => $n(e) === "[object Map]", ti = (e) => $n(e) === "[object Set]", $ = (e) => typeof e == "function", ie = (e) => typeof e == "string", Qe = (e) => typeof e == "symbol", Q = (e) => e !== null && typeof e == "object", ni = (e) => (Q(e) || $(e)) && $(e.then) && $(e.catch), ri = Object.prototype.toString, $n = (e) => ri.call(e), il = (e) => $n(e).slice(8, -1), si = (e) => $n(e) === "[object Object]", Nr = (e) => ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ht = /* @__PURE__ */ Fr(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Bn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, ol = /-\w/g, Ce = Bn(
  (e) => e.replace(ol, (t) => t.slice(1).toUpperCase())
), ll = /\B([A-Z])/g, et = Bn(
  (e) => e.replace(ll, "-$1").toLowerCase()
), nn = Bn((e) => e.charAt(0).toUpperCase() + e.slice(1)), vn = Bn(
  (e) => e ? `on${nn(e)}` : ""
), xe = (e, t) => !Object.is(e, t), bn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, ii = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, vr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, fl = (e) => {
  const t = ie(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let cs;
const Vn = () => cs || (cs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Hn(e) {
  if (L(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = ie(r) ? dl(r) : Hn(r);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (ie(e) || Q(e))
    return e;
}
const cl = /;(?![^(]*\))/g, ul = /:([^]+)/, al = /\/\*[^]*?\*\//g;
function dl(e) {
  const t = {};
  return e.replace(al, "").split(cl).forEach((n) => {
    if (n) {
      const r = n.split(ul);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Kn(e) {
  let t = "";
  if (ie(e))
    t = e;
  else if (L(e))
    for (let n = 0; n < e.length; n++) {
      const r = Kn(e[n]);
      r && (t += r + " ");
    }
  else if (Q(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const hl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", pl = /* @__PURE__ */ Fr(hl);
function oi(e) {
  return !!e || e === "";
}
const li = (e) => !!(e && e.__v_isRef === !0), fi = (e) => ie(e) ? e : e == null ? "" : L(e) || Q(e) && (e.toString === ri || !$(e.toString)) ? li(e) ? fi(e.value) : JSON.stringify(e, ci, 2) : String(e), ci = (e, t) => li(t) ? ci(e, t.value) : wt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], i) => (n[rr(r, i) + " =>"] = s, n),
    {}
  )
} : ti(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => rr(n))
} : Qe(t) ? rr(t) : Q(t) && !L(t) && !si(t) ? String(t) : t, rr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Qe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ge;
class ui {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ge, !t && ge && (this.index = (ge.scopes || (ge.scopes = [])).push(
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
      const n = ge;
      try {
        return ge = this, t();
      } finally {
        ge = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ge, ge = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ge = this.prevScope, this.prevScope = void 0);
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
function Wn() {
  return ge;
}
function jr(e, t = !1) {
  ge && ge.cleanups.push(e);
}
let re;
const sr = /* @__PURE__ */ new WeakSet();
class Lr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ge && ge.active && ge.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, sr.has(this) && (sr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || di(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, us(this), hi(this);
    const t = re, n = Fe;
    re = this, Fe = !0;
    try {
      return this.fn();
    } finally {
      pi(this), re = t, Fe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Vr(t);
      this.deps = this.depsTail = void 0, us(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? sr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    br(this) && this.run();
  }
  get dirty() {
    return br(this);
  }
}
let ai = 0, Kt, Wt;
function di(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Wt, Wt = e;
    return;
  }
  e.next = Kt, Kt = e;
}
function $r() {
  ai++;
}
function Br() {
  if (--ai > 0)
    return;
  if (Wt) {
    let t = Wt;
    for (Wt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Kt; ) {
    let t = Kt;
    for (Kt = void 0; t; ) {
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
function hi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function pi(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), Vr(r), gl(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  e.deps = t, e.depsTail = n;
}
function br(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (gi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function gi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Yt) || (e.globalVersion = Yt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !br(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = re, r = Fe;
  re = e, Fe = !0;
  try {
    hi(e);
    const s = e.fn(e._value);
    (t.version === 0 || xe(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    re = n, Fe = r, pi(e), e.flags &= -3;
  }
}
function Vr(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Vr(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function gl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Fe = !0;
const mi = [];
function Je() {
  mi.push(Fe), Fe = !1;
}
function Ye() {
  const e = mi.pop();
  Fe = e === void 0 ? !0 : e;
}
function us(e) {
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
let Yt = 0;
class ml {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Un {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!re || !Fe || re === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== re)
      n = this.activeLink = new ml(re, this), re.deps ? (n.prevDep = re.depsTail, re.depsTail.nextDep = n, re.depsTail = n) : re.deps = re.depsTail = n, yi(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = re.depsTail, n.nextDep = void 0, re.depsTail.nextDep = n, re.depsTail = n, re.deps === n && (re.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Yt++, this.notify(t);
  }
  notify(t) {
    $r();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Br();
    }
  }
}
function yi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        yi(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const xn = /* @__PURE__ */ new WeakMap(), gt = Symbol(
  ""
), _r = Symbol(
  ""
), Zt = Symbol(
  ""
);
function me(e, t, n) {
  if (Fe && re) {
    let r = xn.get(e);
    r || xn.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new Un()), s.map = r, s.key = n), s.track();
  }
}
function ke(e, t, n, r, s, i) {
  const o = xn.get(e);
  if (!o) {
    Yt++;
    return;
  }
  const l = (f) => {
    f && f.trigger();
  };
  if ($r(), t === "clear")
    o.forEach(l);
  else {
    const f = L(e), a = f && Nr(n);
    if (f && n === "length") {
      const c = Number(r);
      o.forEach((h, g) => {
        (g === "length" || g === Zt || !Qe(g) && g >= c) && l(h);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), a && l(o.get(Zt)), t) {
        case "add":
          f ? a && l(o.get("length")) : (l(o.get(gt)), wt(e) && l(o.get(_r)));
          break;
        case "delete":
          f || (l(o.get(gt)), wt(e) && l(o.get(_r)));
          break;
        case "set":
          wt(e) && l(o.get(gt));
          break;
      }
  }
  Br();
}
function yl(e, t) {
  const n = xn.get(e);
  return n && n.get(t);
}
function vt(e) {
  const t = k(e);
  return t === e ? t : (me(t, "iterate", Zt), Oe(e) ? t : t.map(ue));
}
function kn(e) {
  return me(e = k(e), "iterate", Zt), e;
}
const vl = {
  __proto__: null,
  [Symbol.iterator]() {
    return ir(this, Symbol.iterator, ue);
  },
  concat(...e) {
    return vt(this).concat(
      ...e.map((t) => L(t) ? vt(t) : t)
    );
  },
  entries() {
    return ir(this, "entries", (e) => (e[1] = ue(e[1]), e));
  },
  every(e, t) {
    return Ke(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ke(this, "filter", e, t, (n) => n.map(ue), arguments);
  },
  find(e, t) {
    return Ke(this, "find", e, t, ue, arguments);
  },
  findIndex(e, t) {
    return Ke(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ke(this, "findLast", e, t, ue, arguments);
  },
  findLastIndex(e, t) {
    return Ke(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ke(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return or(this, "includes", e);
  },
  indexOf(...e) {
    return or(this, "indexOf", e);
  },
  join(e) {
    return vt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return or(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ke(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return jt(this, "pop");
  },
  push(...e) {
    return jt(this, "push", e);
  },
  reduce(e, ...t) {
    return as(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return as(this, "reduceRight", e, t);
  },
  shift() {
    return jt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ke(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return jt(this, "splice", e);
  },
  toReversed() {
    return vt(this).toReversed();
  },
  toSorted(e) {
    return vt(this).toSorted(e);
  },
  toSpliced(...e) {
    return vt(this).toSpliced(...e);
  },
  unshift(...e) {
    return jt(this, "unshift", e);
  },
  values() {
    return ir(this, "values", ue);
  }
};
function ir(e, t, n) {
  const r = kn(e), s = r[t]();
  return r !== e && !Oe(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.done || (i.value = n(i.value)), i;
  }), s;
}
const bl = Array.prototype;
function Ke(e, t, n, r, s, i) {
  const o = kn(e), l = o !== e && !Oe(e), f = o[t];
  if (f !== bl[t]) {
    const h = f.apply(e, i);
    return l ? ue(h) : h;
  }
  let a = n;
  o !== e && (l ? a = function(h, g) {
    return n.call(this, ue(h), g, e);
  } : n.length > 2 && (a = function(h, g) {
    return n.call(this, h, g, e);
  }));
  const c = f.call(o, a, r);
  return l && s ? s(c) : c;
}
function as(e, t, n, r) {
  const s = kn(e);
  let i = n;
  return s !== e && (Oe(e) ? n.length > 3 && (i = function(o, l, f) {
    return n.call(this, o, l, f, e);
  }) : i = function(o, l, f) {
    return n.call(this, o, ue(l), f, e);
  }), s[t](i, ...r);
}
function or(e, t, n) {
  const r = k(e);
  me(r, "iterate", Zt);
  const s = r[t](...n);
  return (s === -1 || s === !1) && Jn(n[0]) ? (n[0] = k(n[0]), r[t](...n)) : s;
}
function jt(e, t, n = []) {
  Je(), $r();
  const r = k(e)[t].apply(e, n);
  return Br(), Ye(), r;
}
const _l = /* @__PURE__ */ Fr("__proto__,__v_isRef,__isVue"), vi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Qe)
);
function Sl(e) {
  Qe(e) || (e = String(e));
  const t = k(this);
  return me(t, "has", e), t.hasOwnProperty(e);
}
class bi {
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
      return r === (s ? i ? Ti : Ci : i ? xi : wi).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const o = L(t);
    if (!s) {
      let f;
      if (o && (f = vl[n]))
        return f;
      if (n === "hasOwnProperty")
        return Sl;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      fe(t) ? t : r
    );
    if ((Qe(n) ? vi.has(n) : _l(n)) || (s || me(t, "get", n), i))
      return l;
    if (fe(l)) {
      const f = o && Nr(n) ? l : l.value;
      return s && Q(f) ? Et(f) : f;
    }
    return Q(l) ? s ? Et(l) : Gn(l) : l;
  }
}
class _i extends bi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let i = t[n];
    if (!this._isShallow) {
      const f = Ze(i);
      if (!Oe(r) && !Ze(r) && (i = k(i), r = k(r)), !L(t) && fe(i) && !fe(r))
        return f || (i.value = r), !0;
    }
    const o = L(t) && Nr(n) ? Number(n) < t.length : J(t, n), l = Reflect.set(
      t,
      n,
      r,
      fe(t) ? t : s
    );
    return t === k(s) && (o ? xe(r, i) && ke(t, "set", n, r) : ke(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = J(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && ke(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Qe(n) || !vi.has(n)) && me(t, "has", n), r;
  }
  ownKeys(t) {
    return me(
      t,
      "iterate",
      L(t) ? "length" : gt
    ), Reflect.ownKeys(t);
  }
}
class Si extends bi {
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
const wl = /* @__PURE__ */ new _i(), xl = /* @__PURE__ */ new Si(), Cl = /* @__PURE__ */ new _i(!0), Tl = /* @__PURE__ */ new Si(!0), Sr = (e) => e, an = (e) => Reflect.getPrototypeOf(e);
function El(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, i = k(s), o = wt(i), l = e === "entries" || e === Symbol.iterator && o, f = e === "keys" && o, a = s[e](...r), c = n ? Sr : t ? Cn : ue;
    return !t && me(
      i,
      "iterate",
      f ? _r : gt
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
function dn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ol(e, t) {
  const n = {
    get(s) {
      const i = this.__v_raw, o = k(i), l = k(s);
      e || (xe(s, l) && me(o, "get", s), me(o, "get", l));
      const { has: f } = an(o), a = t ? Sr : e ? Cn : ue;
      if (f.call(o, s))
        return a(i.get(s));
      if (f.call(o, l))
        return a(i.get(l));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && me(k(s), "iterate", gt), s.size;
    },
    has(s) {
      const i = this.__v_raw, o = k(i), l = k(s);
      return e || (xe(s, l) && me(o, "has", s), me(o, "has", l)), s === l ? i.has(s) : i.has(s) || i.has(l);
    },
    forEach(s, i) {
      const o = this, l = o.__v_raw, f = k(l), a = t ? Sr : e ? Cn : ue;
      return !e && me(f, "iterate", gt), l.forEach((c, h) => s.call(i, a(c), a(h), o));
    }
  };
  return ce(
    n,
    e ? {
      add: dn("add"),
      set: dn("set"),
      delete: dn("delete"),
      clear: dn("clear")
    } : {
      add(s) {
        !t && !Oe(s) && !Ze(s) && (s = k(s));
        const i = k(this);
        return an(i).has.call(i, s) || (i.add(s), ke(i, "add", s, s)), this;
      },
      set(s, i) {
        !t && !Oe(i) && !Ze(i) && (i = k(i));
        const o = k(this), { has: l, get: f } = an(o);
        let a = l.call(o, s);
        a || (s = k(s), a = l.call(o, s));
        const c = f.call(o, s);
        return o.set(s, i), a ? xe(i, c) && ke(o, "set", s, i) : ke(o, "add", s, i), this;
      },
      delete(s) {
        const i = k(this), { has: o, get: l } = an(i);
        let f = o.call(i, s);
        f || (s = k(s), f = o.call(i, s)), l && l.call(i, s);
        const a = i.delete(s);
        return f && ke(i, "delete", s, void 0), a;
      },
      clear() {
        const s = k(this), i = s.size !== 0, o = s.clear();
        return i && ke(
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
    n[s] = El(s, e, t);
  }), n;
}
function zn(e, t) {
  const n = Ol(e, t);
  return (r, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    J(n, s) && s in r ? n : r,
    s,
    i
  );
}
const Al = {
  get: /* @__PURE__ */ zn(!1, !1)
}, Pl = {
  get: /* @__PURE__ */ zn(!1, !0)
}, Ml = {
  get: /* @__PURE__ */ zn(!0, !1)
}, Rl = {
  get: /* @__PURE__ */ zn(!0, !0)
}, wi = /* @__PURE__ */ new WeakMap(), xi = /* @__PURE__ */ new WeakMap(), Ci = /* @__PURE__ */ new WeakMap(), Ti = /* @__PURE__ */ new WeakMap();
function Fl(e) {
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
function Il(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Fl(il(e));
}
function Gn(e) {
  return Ze(e) ? e : qn(
    e,
    !1,
    wl,
    Al,
    wi
  );
}
function Ei(e) {
  return qn(
    e,
    !1,
    Cl,
    Pl,
    xi
  );
}
function Et(e) {
  return qn(
    e,
    !0,
    xl,
    Ml,
    Ci
  );
}
function dt(e) {
  return qn(
    e,
    !0,
    Tl,
    Rl,
    Ti
  );
}
function qn(e, t, n, r, s) {
  if (!Q(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Il(e);
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
function mt(e) {
  return Ze(e) ? mt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ze(e) {
  return !!(e && e.__v_isReadonly);
}
function Oe(e) {
  return !!(e && e.__v_isShallow);
}
function Jn(e) {
  return e ? !!e.__v_raw : !1;
}
function k(e) {
  const t = e && e.__v_raw;
  return t ? k(t) : e;
}
function Oi(e) {
  return !J(e, "__v_skip") && Object.isExtensible(e) && ii(e, "__v_skip", !0), e;
}
const ue = (e) => Q(e) ? Gn(e) : e, Cn = (e) => Q(e) ? Et(e) : e;
function fe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Pe(e) {
  return Ai(e, !1);
}
function Yn(e) {
  return Ai(e, !0);
}
function Ai(e, t) {
  return fe(e) ? e : new Dl(e, t);
}
class Dl {
  constructor(t, n) {
    this.dep = new Un(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : k(t), this._value = n ? t : ue(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || Oe(t) || Ze(t);
    t = r ? t : k(t), xe(t, n) && (this._rawValue = t, this._value = r ? t : ue(t), this.dep.trigger());
  }
}
function Nl(e) {
  e.dep && e.dep.trigger();
}
function rn(e) {
  return fe(e) ? e.value : e;
}
function qe(e) {
  return $(e) ? e() : rn(e);
}
const jl = {
  get: (e, t, n) => t === "__v_raw" ? e : rn(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return fe(s) && !fe(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Hr(e) {
  return mt(e) ? e : new Proxy(e, jl);
}
class Ll {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Un(), { get: r, set: s } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = r, this._set = s;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Kr(e) {
  return new Ll(e);
}
class $l {
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
    return yl(k(this._object), this._key);
  }
}
class Bl {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function Pi(e, t, n) {
  return fe(e) ? e : $(e) ? new Bl(e) : Q(e) && arguments.length > 1 ? Vl(e, t, n) : Pe(e);
}
function Vl(e, t, n) {
  const r = e[t];
  return fe(r) ? r : new $l(e, t, n);
}
class Hl {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Un(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Yt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    re !== this)
      return di(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return gi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Kl(e, t, n = !1) {
  let r, s;
  return $(e) ? r = e : (r = e.get, s = e.set), new Hl(r, s, n);
}
const hn = {}, Tn = /* @__PURE__ */ new WeakMap();
let ht;
function Mi(e, t = !1, n = ht) {
  if (n) {
    let r = Tn.get(n);
    r || Tn.set(n, r = []), r.push(e);
  }
}
function Wl(e, t, n = G) {
  const { immediate: r, deep: s, once: i, scheduler: o, augmentJob: l, call: f } = n, a = (A) => s ? A : Oe(A) || s === !1 || s === 0 ? ze(A, 1) : ze(A);
  let c, h, g, m, S = !1, v = !1;
  if (fe(e) ? (h = () => e.value, S = Oe(e)) : mt(e) ? (h = () => a(e), S = !0) : L(e) ? (v = !0, S = e.some((A) => mt(A) || Oe(A)), h = () => e.map((A) => {
    if (fe(A))
      return A.value;
    if (mt(A))
      return a(A);
    if ($(A))
      return f ? f(A, 2) : A();
  })) : $(e) ? t ? h = f ? () => f(e, 2) : e : h = () => {
    if (g) {
      Je();
      try {
        g();
      } finally {
        Ye();
      }
    }
    const A = ht;
    ht = c;
    try {
      return f ? f(e, 3, [m]) : e(m);
    } finally {
      ht = A;
    }
  } : h = He, t && s) {
    const A = h, V = s === !0 ? 1 / 0 : s;
    h = () => ze(A(), V);
  }
  const F = Wn(), y = () => {
    c.stop(), F && F.active && Dr(F.effects, c);
  };
  if (i && t) {
    const A = t;
    t = (...V) => {
      A(...V), y();
    };
  }
  let C = v ? new Array(e.length).fill(hn) : hn;
  const P = (A) => {
    if (!(!(c.flags & 1) || !c.dirty && !A))
      if (t) {
        const V = c.run();
        if (s || S || (v ? V.some((W, H) => xe(W, C[H])) : xe(V, C))) {
          g && g();
          const W = ht;
          ht = c;
          try {
            const H = [
              V,
              // pass undefined as the old value when it's changed for the first time
              C === hn ? void 0 : v && C[0] === hn ? [] : C,
              m
            ];
            C = V, f ? f(t, 3, H) : (
              // @ts-expect-error
              t(...H)
            );
          } finally {
            ht = W;
          }
        }
      } else
        c.run();
  };
  return l && l(P), c = new Lr(h), c.scheduler = o ? () => o(P, !1) : P, m = (A) => Mi(A, !1, c), g = c.onStop = () => {
    const A = Tn.get(c);
    if (A) {
      if (f)
        f(A, 4);
      else
        for (const V of A) V();
      Tn.delete(c);
    }
  }, t ? r ? P(!0) : C = c.run() : o ? o(P.bind(null, !0), !0) : c.run(), y.pause = c.pause.bind(c), y.resume = c.resume.bind(c), y.stop = y, y;
}
function ze(e, t = 1 / 0, n) {
  if (t <= 0 || !Q(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, fe(e))
    ze(e.value, t, n);
  else if (L(e))
    for (let r = 0; r < e.length; r++)
      ze(e[r], t, n);
  else if (ti(e) || wt(e))
    e.forEach((r) => {
      ze(r, t, n);
    });
  else if (si(e)) {
    for (const r in e)
      ze(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && ze(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Rt(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    Ft(s, t, n);
  }
}
function Re(e, t, n, r) {
  if ($(e)) {
    const s = Rt(e, t, n, r);
    return s && ni(s) && s.catch((i) => {
      Ft(i, t, n);
    }), s;
  }
  if (L(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(Re(e[i], t, n, r));
    return s;
  }
}
function Ft(e, t, n, r = !0) {
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
      Je(), Rt(i, null, 10, [
        e,
        f,
        a
      ]), Ye();
      return;
    }
  }
  Ul(e, n, s, r, o);
}
function Ul(e, t, n, r = !0, s = !1) {
  if (s)
    throw e;
  console.error(e);
}
const be = [];
let Be = -1;
const xt = [];
let st = null, bt = 0;
const Ri = /* @__PURE__ */ Promise.resolve();
let En = null;
function Zn(e) {
  const t = En || Ri;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function kl(e) {
  let t = Be + 1, n = be.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = be[r], i = Xt(s);
    i < e || i === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Wr(e) {
  if (!(e.flags & 1)) {
    const t = Xt(e), n = be[be.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Xt(n) ? be.push(e) : be.splice(kl(t), 0, e), e.flags |= 1, Fi();
  }
}
function Fi() {
  En || (En = Ri.then(Ni));
}
function Ii(e) {
  L(e) ? xt.push(...e) : st && e.id === -1 ? st.splice(bt + 1, 0, e) : e.flags & 1 || (xt.push(e), e.flags |= 1), Fi();
}
function ds(e, t, n = Be + 1) {
  for (; n < be.length; n++) {
    const r = be[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      be.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Di(e) {
  if (xt.length) {
    const t = [...new Set(xt)].sort(
      (n, r) => Xt(n) - Xt(r)
    );
    if (xt.length = 0, st) {
      st.push(...t);
      return;
    }
    for (st = t, bt = 0; bt < st.length; bt++) {
      const n = st[bt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    st = null, bt = 0;
  }
}
const Xt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ni(e) {
  try {
    for (Be = 0; Be < be.length; Be++) {
      const t = be[Be];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Rt(
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
    Be = -1, be.length = 0, Di(), En = null, (be.length || xt.length) && Ni();
  }
}
let he = null, ji = null;
function On(e) {
  const t = he;
  return he = e, ji = e && e.type.__scopeId || null, t;
}
function Li(e, t = he, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && en(-1);
    const i = On(t);
    let o;
    try {
      o = e(...s);
    } finally {
      On(i), r._d && en(1);
    }
    return o;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function zl(e, t) {
  if (he === null)
    return e;
  const n = tr(he), r = e.dirs || (e.dirs = []);
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
function ct(e, t, n, r) {
  const s = e.dirs, i = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    i && (l.oldValue = i[o].value);
    let f = l.dir[r];
    f && (Je(), Re(f, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Ye());
  }
}
const $i = Symbol("_vte"), Bi = (e) => e.__isTeleport, Ut = (e) => e && (e.disabled || e.disabled === ""), hs = (e) => e && (e.defer || e.defer === ""), ps = (e) => typeof SVGElement < "u" && e instanceof SVGElement, gs = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, wr = (e, t) => {
  const n = e && e.to;
  return ie(n) ? t ? t(n) : null : n;
}, Vi = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, s, i, o, l, f, a) {
    const {
      mc: c,
      pc: h,
      pbc: g,
      o: { insert: m, querySelector: S, createText: v, createComment: F }
    } = a, y = Ut(t.props);
    let { shapeFlag: C, children: P, dynamicChildren: A } = t;
    if (e == null) {
      const V = t.el = v(""), W = t.anchor = v("");
      m(V, n, r), m(W, n, r);
      const H = (I, K) => {
        C & 16 && c(
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
        const I = t.target = wr(t.props, S), K = Hi(I, t, v, m);
        I && (o !== "svg" && ps(I) ? o = "svg" : o !== "mathml" && gs(I) && (o = "mathml"), s && s.isCE && (s.ce._teleportTargets || (s.ce._teleportTargets = /* @__PURE__ */ new Set())).add(I), y || (H(I, K), _n(t, !1)));
      };
      y && (H(n, W), _n(t, !0)), hs(t.props) ? (t.el.__isMounted = !1, ve(() => {
        z(), delete t.el.__isMounted;
      }, i)) : z();
    } else {
      if (hs(t.props) && e.el.__isMounted === !1) {
        ve(() => {
          Vi.process(
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
      const V = t.anchor = e.anchor, W = t.target = e.target, H = t.targetAnchor = e.targetAnchor, z = Ut(e.props), I = z ? n : W, K = z ? V : H;
      if (o === "svg" || ps(W) ? o = "svg" : (o === "mathml" || gs(W)) && (o = "mathml"), A ? (g(
        e.dynamicChildren,
        A,
        I,
        s,
        i,
        o,
        l
      ), Qr(e, t, !0)) : f || h(
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
        z ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : pn(
          t,
          n,
          V,
          a,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const Z = t.target = wr(
          t.props,
          S
        );
        Z && pn(
          t,
          Z,
          null,
          a,
          0
        );
      } else z && pn(
        t,
        W,
        H,
        a,
        1
      );
      _n(t, y);
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
      const m = i || !Ut(g);
      for (let S = 0; S < l.length; S++) {
        const v = l[S];
        r(
          v,
          t,
          n,
          m,
          !!v.dynamicChildren
        );
      }
    }
  },
  move: pn,
  hydrate: Gl
};
function pn(e, t, n, { o: { insert: r }, m: s }, i = 2) {
  i === 0 && r(e.targetAnchor, t, n);
  const { el: o, anchor: l, shapeFlag: f, children: a, props: c } = e, h = i === 2;
  if (h && r(o, t, n), (!h || Ut(c)) && f & 16)
    for (let g = 0; g < a.length; g++)
      s(
        a[g],
        t,
        n,
        2
      );
  h && r(l, t, n);
}
function Gl(e, t, n, r, s, i, {
  o: { nextSibling: o, parentNode: l, querySelector: f, insert: a, createText: c }
}, h) {
  function g(v, F, y, C) {
    F.anchor = h(
      o(v),
      F,
      l(v),
      n,
      r,
      s,
      i
    ), F.targetStart = y, F.targetAnchor = C;
  }
  const m = t.target = wr(
    t.props,
    f
  ), S = Ut(t.props);
  if (m) {
    const v = m._lpa || m.firstChild;
    if (t.shapeFlag & 16)
      if (S)
        g(
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
              t.targetAnchor = F, m._lpa = t.targetAnchor && o(t.targetAnchor);
              break;
            }
          }
          F = o(F);
        }
        t.targetAnchor || Hi(m, t, c, a), h(
          v && o(v),
          t,
          m,
          n,
          r,
          s,
          i
        );
      }
    _n(t, S);
  } else S && t.shapeFlag & 16 && g(e, t, e, o(e));
  return t.anchor && o(t.anchor);
}
const ql = Vi;
function _n(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, s;
    for (t ? (r = e.el, s = e.anchor) : (r = e.targetStart, s = e.targetAnchor); r && r !== s; )
      r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function Hi(e, t, n, r) {
  const s = t.targetStart = n(""), i = t.targetAnchor = n("");
  return s[$i] = i, e && (r(s, e), r(i, e)), i;
}
const Ue = Symbol("_leaveCb"), gn = Symbol("_enterCb");
function Ur() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return on(() => {
    e.isMounted = !0;
  }), Jr(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ae = [Function, Array], kr = {
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
}, Ki = (e) => {
  const t = e.subTree;
  return t.component ? Ki(t.component) : t;
}, Jl = {
  name: "BaseTransition",
  props: kr,
  setup(e, { slots: t }) {
    const n = yt(), r = Ur();
    return () => {
      const s = t.default && Xn(t.default(), !0);
      if (!s || !s.length)
        return;
      const i = Wi(s), o = k(e), { mode: l } = o;
      if (r.isLeaving)
        return lr(i);
      const f = ms(i);
      if (!f)
        return lr(i);
      let a = Ot(
        f,
        o,
        r,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => a = h
      );
      f.type !== ae && ot(f, a);
      let c = n.subTree && ms(n.subTree);
      if (c && c.type !== ae && !pt(c, f) && Ki(n).type !== ae) {
        let h = Ot(
          c,
          o,
          r,
          n
        );
        if (ot(c, h), l === "out-in" && f.type !== ae)
          return r.isLeaving = !0, h.afterLeave = () => {
            r.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, c = void 0;
          }, lr(i);
        l === "in-out" && f.type !== ae ? h.delayLeave = (g, m, S) => {
          const v = ki(
            r,
            c
          );
          v[String(c.key)] = c, g[Ue] = () => {
            m(), g[Ue] = void 0, delete a.delayedLeave, c = void 0;
          }, a.delayedLeave = () => {
            S(), delete a.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return i;
    };
  }
};
function Wi(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== ae) {
        t = n;
        break;
      }
  }
  return t;
}
const Ui = Jl;
function ki(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function Ot(e, t, n, r, s) {
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
    onLeaveCancelled: v,
    onBeforeAppear: F,
    onAppear: y,
    onAfterAppear: C,
    onAppearCancelled: P
  } = t, A = String(e.key), V = ki(n, e), W = (I, K) => {
    I && Re(
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
      I[Ue] && I[Ue](
        !0
        /* cancelled */
      );
      const Z = V[A];
      Z && pt(e, Z) && Z.el[Ue] && Z.el[Ue](), W(K, [I]);
    },
    enter(I) {
      let K = a, Z = c, R = h;
      if (!n.isMounted)
        if (i)
          K = y || a, Z = C || c, R = P || h;
        else
          return;
      let ee = !1;
      const D = I[gn] = (X) => {
        ee || (ee = !0, X ? W(R, [I]) : W(Z, [I]), z.delayedLeave && z.delayedLeave(), I[gn] = void 0);
      };
      K ? H(K, [I, D]) : D();
    },
    leave(I, K) {
      const Z = String(e.key);
      if (I[gn] && I[gn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return K();
      W(g, [I]);
      let R = !1;
      const ee = I[Ue] = (D) => {
        R || (R = !0, K(), D ? W(v, [I]) : W(S, [I]), I[Ue] = void 0, V[Z] === e && delete V[Z]);
      };
      V[Z] = e, m ? H(m, [I, ee]) : ee();
    },
    clone(I) {
      const K = Ot(
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
function lr(e) {
  if (sn(e))
    return e = Xe(e), e.children = null, e;
}
function ms(e) {
  if (!sn(e))
    return Bi(e.type) && e.children ? Wi(e.children) : e;
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
function ot(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ot(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Xn(e, t = !1, n) {
  let r = [], s = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === _e ? (o.patchFlag & 128 && s++, r = r.concat(
      Xn(o.children, t, l)
    )) : (t || o.type !== ae) && r.push(l != null ? Xe(o, { key: l }) : o);
  }
  if (s > 1)
    for (let i = 0; i < r.length; i++)
      r[i].patchFlag = -2;
  return r;
}
// @__NO_SIDE_EFFECTS__
function zr(e, t) {
  return $(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ce({ name: e.name }, t, { setup: e })
  ) : e;
}
function Gr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const An = /* @__PURE__ */ new WeakMap();
function kt(e, t, n, r, s = !1) {
  if (L(e)) {
    e.forEach(
      (S, v) => kt(
        S,
        t && (L(t) ? t[v] : t),
        n,
        r,
        s
      )
    );
    return;
  }
  if (Ct(r) && !s) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && kt(e, t, n, r.component.subTree);
    return;
  }
  const i = r.shapeFlag & 4 ? tr(r.component) : r.el, o = s ? null : i, { i: l, r: f } = e, a = t && t.r, c = l.refs === G ? l.refs = {} : l.refs, h = l.setupState, g = k(h), m = h === G ? ei : (S) => J(g, S);
  if (a != null && a !== f) {
    if (ys(t), ie(a))
      c[a] = null, m(a) && (h[a] = null);
    else if (fe(a)) {
      a.value = null;
      const S = t;
      S.k && (c[S.k] = null);
    }
  }
  if ($(f))
    Rt(f, l, 12, [o, c]);
  else {
    const S = ie(f), v = fe(f);
    if (S || v) {
      const F = () => {
        if (e.f) {
          const y = S ? m(f) ? h[f] : c[f] : f.value;
          if (s)
            L(y) && Dr(y, i);
          else if (L(y))
            y.includes(i) || y.push(i);
          else if (S)
            c[f] = [i], m(f) && (h[f] = c[f]);
          else {
            const C = [i];
            f.value = C, e.k && (c[e.k] = C);
          }
        } else S ? (c[f] = o, m(f) && (h[f] = o)) : v && (f.value = o, e.k && (c[e.k] = o));
      };
      if (o) {
        const y = () => {
          F(), An.delete(e);
        };
        y.id = -1, An.set(e, y), ve(y, n);
      } else
        ys(e), F();
    }
  }
}
function ys(e) {
  const t = An.get(e);
  t && (t.flags |= 8, An.delete(e));
}
const vs = (e) => e.nodeType === 8;
Vn().requestIdleCallback;
Vn().cancelIdleCallback;
function Yl(e, t) {
  if (vs(e) && e.data === "[") {
    let n = 1, r = e.nextSibling;
    for (; r; ) {
      if (r.nodeType === 1) {
        if (t(r) === !1)
          break;
      } else if (vs(r))
        if (r.data === "]") {
          if (--n === 0) break;
        } else r.data === "[" && n++;
      r = r.nextSibling;
    }
  } else
    t(e);
}
const Ct = (e) => !!e.type.__asyncLoader;
// @__NO_SIDE_EFFECTS__
function Zl(e) {
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
    return a || (S = a = t().catch((v) => {
      if (v = v instanceof Error ? v : new Error(String(v)), f)
        return new Promise((F, y) => {
          f(v, () => F(g()), () => y(v), h + 1);
        });
      throw v;
    }).then((v) => S !== a && a ? a : (v && (v.__esModule || v[Symbol.toStringTag] === "Module") && (v = v.default), c = v, v)));
  };
  return /* @__PURE__ */ zr({
    name: "AsyncComponentWrapper",
    __asyncLoader: m,
    __asyncHydrate(S, v, F) {
      let y = !1;
      (v.bu || (v.bu = [])).push(() => y = !0);
      const C = () => {
        y || F();
      }, P = i ? () => {
        const A = i(
          C,
          (V) => Yl(S, V)
        );
        A && (v.bum || (v.bum = [])).push(A);
      } : C;
      c ? P() : m().then(() => !v.isUnmounted && P());
    },
    get __asyncResolved() {
      return c;
    },
    setup() {
      const S = de;
      if (Gr(S), c)
        return () => fr(c, S);
      const v = (P) => {
        a = null, Ft(
          P,
          S,
          13,
          !r
        );
      };
      if (l && S.suspense || Pt)
        return m().then((P) => () => fr(P, S)).catch((P) => (v(P), () => r ? oe(r, {
          error: P
        }) : null));
      const F = Pe(!1), y = Pe(), C = Pe(!!s);
      return s && setTimeout(() => {
        C.value = !1;
      }, s), o != null && setTimeout(() => {
        if (!F.value && !y.value) {
          const P = new Error(
            `Async component timed out after ${o}ms.`
          );
          v(P), y.value = P;
        }
      }, o), m().then(() => {
        F.value = !0, S.parent && sn(S.parent.vnode) && S.parent.update();
      }).catch((P) => {
        v(P), y.value = P;
      }), () => {
        if (F.value && c)
          return fr(c, S);
        if (y.value && r)
          return oe(r, {
            error: y.value
          });
        if (n && !C.value)
          return oe(n);
      };
    }
  });
}
function fr(e, t) {
  const { ref: n, props: r, children: s, ce: i } = t.vnode, o = oe(e, r, s);
  return o.ref = n, o.ce = i, delete t.vnode.ce, o;
}
const sn = (e) => e.type.__isKeepAlive;
function zi(e, t) {
  qi(e, "a", t);
}
function Gi(e, t) {
  qi(e, "da", t);
}
function qi(e, t, n = de) {
  const r = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Qn(t, r, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      sn(s.parent.vnode) && Xl(r, t, n, s), s = s.parent;
  }
}
function Xl(e, t, n, r) {
  const s = Qn(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Yr(() => {
    Dr(r[t], s);
  }, n);
}
function Qn(e, t, n = de, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Je();
      const l = fn(n), f = Re(t, n, e, o);
      return l(), Ye(), f;
    });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const tt = (e) => (t, n = de) => {
  (!Pt || e === "sp") && Qn(e, (...r) => t(...r), n);
}, Ji = tt("bm"), on = tt("m"), Yi = tt(
  "bu"
), qr = tt("u"), Jr = tt(
  "bum"
), Yr = tt("um"), Zi = tt(
  "sp"
), Xi = tt("rtg"), Qi = tt("rtc");
function eo(e, t = de) {
  Qn("ec", e, t);
}
const to = "components";
function Ql(e, t) {
  return ro(to, e, !0, t) || e;
}
const no = Symbol.for("v-ndc");
function ef(e) {
  return ie(e) ? ro(to, e, !1) || e : e || no;
}
function ro(e, t, n = !0, r = !1) {
  const s = he || de;
  if (s) {
    const i = s.type;
    {
      const l = Wf(
        i,
        !1
      );
      if (l && (l === t || l === Ce(t) || l === nn(Ce(t))))
        return i;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      bs(s[e] || i[e], t) || // global registration
      bs(s.appContext[e], t)
    );
    return !o && r ? i : o;
  }
}
function bs(e, t) {
  return e && (e[t] || e[Ce(t)] || e[nn(Ce(t))]);
}
function tf(e, t, n, r) {
  let s;
  const i = n, o = L(e);
  if (o || ie(e)) {
    const l = o && mt(e);
    let f = !1, a = !1;
    l && (f = !Oe(e), a = Ze(e), e = kn(e)), s = new Array(e.length);
    for (let c = 0, h = e.length; c < h; c++)
      s[c] = t(
        f ? a ? Cn(ue(e[c])) : ue(e[c]) : e[c],
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
function nf(e, t, n = {}, r, s) {
  if (he.ce || he.parent && Ct(he.parent) && he.parent.ce) {
    const a = Object.keys(n).length > 0;
    return Rn(), Fn(
      _e,
      null,
      [oe("slot", n, r)],
      a ? -2 : 64
    );
  }
  let i = e[t];
  i && i._c && (i._d = !1), Rn();
  const o = i && so(i(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  o && o.key, f = Fn(
    _e,
    {
      key: (l && !Qe(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!o && r ? "_fb" : "")
    },
    o || [],
    o && e._ === 1 ? 64 : -2
  );
  return !s && f.scopeId && (f.slotScopeIds = [f.scopeId + "-s"]), i && i._c && (i._d = !0), f;
}
function so(e) {
  return e.some((t) => At(t) ? !(t.type === ae || t.type === _e && !so(t.children)) : !0) ? e : null;
}
const xr = (e) => e ? Fo(e) ? tr(e) : xr(e.parent) : null, zt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ce(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => xr(e.parent),
    $root: (e) => xr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => oo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Wr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Zn.bind(e.proxy)),
    $watch: (e) => wf.bind(e)
  })
), cr = (e, t) => e !== G && !e.__isScriptSetup && J(e, t), rf = {
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
        if (cr(r, t))
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
        Cr && (o[t] = 0);
      }
    }
    const c = zt[t];
    let h, g;
    if (c)
      return t === "$attrs" && me(e.attrs, "get", ""), c(e);
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
    return cr(s, t) ? (s[t] = n, !0) : r !== G && J(r, t) ? (r[t] = n, !0) : J(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: i, type: o }
  }, l) {
    let f, a;
    return !!(n[l] || e !== G && l[0] !== "$" && J(e, l) || cr(t, l) || (f = i[0]) && J(f, l) || J(r, l) || J(zt, l) || J(s.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : J(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Pn(e) {
  return L(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function sf(e, t) {
  return !e || !t ? e || t : L(e) && L(t) ? e.concat(t) : ce({}, Pn(e), Pn(t));
}
let Cr = !0;
function of(e) {
  const t = oo(e), n = e.proxy, r = e.ctx;
  Cr = !1, t.beforeCreate && _s(t.beforeCreate, e, "bc");
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
    activated: v,
    deactivated: F,
    beforeDestroy: y,
    beforeUnmount: C,
    destroyed: P,
    unmounted: A,
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
    filters: D
  } = t;
  if (a && lf(a, r, null), o)
    for (const se in o) {
      const te = o[se];
      $(te) && (r[se] = te.bind(n));
    }
  if (s) {
    const se = s.call(n, n);
    Q(se) && (e.data = Gn(se));
  }
  if (Cr = !0, i)
    for (const se in i) {
      const te = i[se], lt = $(te) ? te.bind(n, n) : $(te.get) ? te.get.bind(n, n) : He, cn = !$(te) && $(te.set) ? te.set.bind(n) : He, ft = le({
        get: lt,
        set: cn
      });
      Object.defineProperty(r, se, {
        enumerable: !0,
        configurable: !0,
        get: () => ft.value,
        set: (Ie) => ft.value = Ie
      });
    }
  if (l)
    for (const se in l)
      io(l[se], r, n, se);
  if (f) {
    const se = $(f) ? f.call(n) : f;
    Reflect.ownKeys(se).forEach((te) => {
      fo(te, se[te]);
    });
  }
  c && _s(c, e, "c");
  function q(se, te) {
    L(te) ? te.forEach((lt) => se(lt.bind(n))) : te && se(te.bind(n));
  }
  if (q(Ji, h), q(on, g), q(Yi, m), q(qr, S), q(zi, v), q(Gi, F), q(eo, z), q(Qi, W), q(Xi, H), q(Jr, C), q(Yr, A), q(Zi, I), L(K))
    if (K.length) {
      const se = e.exposed || (e.exposed = {});
      K.forEach((te) => {
        Object.defineProperty(se, te, {
          get: () => n[te],
          set: (lt) => n[te] = lt,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  V && e.render === He && (e.render = V), Z != null && (e.inheritAttrs = Z), R && (e.components = R), ee && (e.directives = ee), I && Gr(e);
}
function lf(e, t, n = He) {
  L(e) && (e = Tr(e));
  for (const r in e) {
    const s = e[r];
    let i;
    Q(s) ? "default" in s ? i = Gt(
      s.from || r,
      s.default,
      !0
    ) : i = Gt(s.from || r) : i = Gt(s), fe(i) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[r] = i;
  }
}
function _s(e, t, n) {
  Re(
    L(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function io(e, t, n, r) {
  let s = r.includes(".") ? xo(n, r) : () => n[r];
  if (ie(e)) {
    const i = t[e];
    $(i) && Me(s, i);
  } else if ($(e))
    Me(s, e.bind(n));
  else if (Q(e))
    if (L(e))
      e.forEach((i) => io(i, t, n, r));
    else {
      const i = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(i) && Me(s, i, e);
    }
}
function oo(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let f;
  return l ? f = l : !s.length && !n && !r ? f = t : (f = {}, s.length && s.forEach(
    (a) => Mn(f, a, o, !0)
  ), Mn(f, t, o)), Q(t) && i.set(t, f), f;
}
function Mn(e, t, n, r = !1) {
  const { mixins: s, extends: i } = t;
  i && Mn(e, i, n, !0), s && s.forEach(
    (o) => Mn(e, o, n, !0)
  );
  for (const o in t)
    if (!(r && o === "expose")) {
      const l = ff[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const ff = {
  data: Ss,
  props: ws,
  emits: ws,
  // objects
  methods: Vt,
  computed: Vt,
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
  components: Vt,
  directives: Vt,
  // watch
  watch: uf,
  // provide / inject
  provide: Ss,
  inject: cf
};
function Ss(e, t) {
  return t ? e ? function() {
    return ce(
      $(e) ? e.call(this, this) : e,
      $(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function cf(e, t) {
  return Vt(Tr(e), Tr(t));
}
function Tr(e) {
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
function Vt(e, t) {
  return e ? ce(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ws(e, t) {
  return e ? L(e) && L(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ce(
    /* @__PURE__ */ Object.create(null),
    Pn(e),
    Pn(t ?? {})
  ) : t;
}
function uf(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ce(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = ye(e[r], t[r]);
  return n;
}
function lo() {
  return {
    app: null,
    config: {
      isNativeTag: ei,
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
let af = 0;
function df(e, t) {
  return function(r, s = null) {
    $(r) || (r = ce({}, r)), s != null && !Q(s) && (s = null);
    const i = lo(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const a = i.app = {
      _uid: af++,
      _component: r,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: Do,
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
          return m.appContext = i, g === !0 ? g = "svg" : g === !1 && (g = void 0), e(m, c, g), f = !0, a._container = c, c.__vue_app__ = a, tr(m.component);
        }
      },
      onUnmount(c) {
        l.push(c);
      },
      unmount() {
        f && (Re(
          l,
          a._instance,
          16
        ), e(null, a._container), delete a._container.__vue_app__);
      },
      provide(c, h) {
        return i.provides[c] = h, a;
      },
      runWithContext(c) {
        const h = Tt;
        Tt = a;
        try {
          return c();
        } finally {
          Tt = h;
        }
      }
    };
    return a;
  };
}
let Tt = null;
function fo(e, t) {
  if (de) {
    let n = de.provides;
    const r = de.parent && de.parent.provides;
    r === n && (n = de.provides = Object.create(r)), n[e] = t;
  }
}
function Gt(e, t, n = !1) {
  const r = yt();
  if (r || Tt) {
    let s = Tt ? Tt._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && $(t) ? t.call(r && r.proxy) : t;
  }
}
const co = {}, uo = () => Object.create(co), ao = (e) => Object.getPrototypeOf(e) === co;
function hf(e, t, n, r = !1) {
  const s = {}, i = uo();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ho(e, t, s, i);
  for (const o in e.propsOptions[0])
    o in s || (s[o] = void 0);
  n ? e.props = r ? s : Ei(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i;
}
function pf(e, t, n, r) {
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
        if (er(e.emitsOptions, g))
          continue;
        const m = t[g];
        if (f)
          if (J(i, g))
            m !== i[g] && (i[g] = m, a = !0);
          else {
            const S = Ce(g);
            s[S] = Er(
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
    ho(e, t, s, i) && (a = !0);
    let c;
    for (const h in l)
      (!t || // for camelCase
      !J(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = et(h)) === h || !J(t, c))) && (f ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[c] !== void 0) && (s[h] = Er(
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
  a && ke(e.attrs, "set", "");
}
function ho(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let f in t) {
      if (Ht(f))
        continue;
      const a = t[f];
      let c;
      s && J(s, c = Ce(f)) ? !i || !i.includes(c) ? n[c] = a : (l || (l = {}))[c] = a : er(e.emitsOptions, f) || (!(f in r) || a !== r[f]) && (r[f] = a, o = !0);
    }
  if (i) {
    const f = k(n), a = l || G;
    for (let c = 0; c < i.length; c++) {
      const h = i[c];
      n[h] = Er(
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
function Er(e, t, n, r, s, i) {
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
          const c = fn(s);
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
const gf = /* @__PURE__ */ new WeakMap();
function po(e, t, n = !1) {
  const r = n ? gf : t.propsCache, s = r.get(e);
  if (s)
    return s;
  const i = e.props, o = {}, l = [];
  let f = !1;
  if (!$(e)) {
    const c = (h) => {
      f = !0;
      const [g, m] = po(h, t, !0);
      ce(o, g), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!i && !f)
    return Q(e) && r.set(e, St), St;
  if (L(i))
    for (let c = 0; c < i.length; c++) {
      const h = Ce(i[c]);
      xs(h) && (o[h] = G);
    }
  else if (i)
    for (const c in i) {
      const h = Ce(c);
      if (xs(h)) {
        const g = i[c], m = o[h] = L(g) || $(g) ? { type: g } : ce({}, g), S = m.type;
        let v = !1, F = !0;
        if (L(S))
          for (let y = 0; y < S.length; ++y) {
            const C = S[y], P = $(C) && C.name;
            if (P === "Boolean") {
              v = !0;
              break;
            } else P === "String" && (F = !1);
          }
        else
          v = $(S) && S.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = v, m[
          1
          /* shouldCastTrue */
        ] = F, (v || J(m, "default")) && l.push(h);
      }
    }
  const a = [o, l];
  return Q(e) && r.set(e, a), a;
}
function xs(e) {
  return e[0] !== "$" && !Ht(e);
}
const Zr = (e) => e === "_" || e === "_ctx" || e === "$stable", Xr = (e) => L(e) ? e.map(Ve) : [Ve(e)], mf = (e, t, n) => {
  if (t._n)
    return t;
  const r = Li((...s) => Xr(t(...s)), n);
  return r._c = !1, r;
}, go = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (Zr(s)) continue;
    const i = e[s];
    if ($(i))
      t[s] = mf(s, i, r);
    else if (i != null) {
      const o = Xr(i);
      t[s] = () => o;
    }
  }
}, mo = (e, t) => {
  const n = Xr(t);
  e.slots.default = () => n;
}, yo = (e, t, n) => {
  for (const r in t)
    (n || !Zr(r)) && (e[r] = t[r]);
}, yf = (e, t, n) => {
  const r = e.slots = uo();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (yo(r, t, n), n && ii(r, "_", s, !0)) : go(t, r);
  } else t && mo(e, t);
}, vf = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let i = !0, o = G;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : yo(s, t, n) : (i = !t.$stable, go(t, s)), o = t;
  } else t && (mo(e, t), o = { default: 1 });
  if (i)
    for (const l in s)
      !Zr(l) && o[l] == null && delete s[l];
}, ve = Mf;
function vo(e) {
  return bf(e);
}
function bf(e, t) {
  const n = Vn();
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
    setScopeId: m = He,
    insertStaticContent: S
  } = e, v = (u, d, p, w = null, b = null, _ = null, O = void 0, E = null, T = !!d.dynamicChildren) => {
    if (u === d)
      return;
    u && !pt(u, d) && (w = un(u), Ie(u, b, _, !0), u = null), d.patchFlag === -2 && (T = !1, d.dynamicChildren = null);
    const { type: x, ref: j, shapeFlag: M } = d;
    switch (x) {
      case ln:
        F(u, d, p, w);
        break;
      case ae:
        y(u, d, p, w);
        break;
      case qt:
        u == null && C(d, p, w, O);
        break;
      case _e:
        R(
          u,
          d,
          p,
          w,
          b,
          _,
          O,
          E,
          T
        );
        break;
      default:
        M & 1 ? V(
          u,
          d,
          p,
          w,
          b,
          _,
          O,
          E,
          T
        ) : M & 6 ? ee(
          u,
          d,
          p,
          w,
          b,
          _,
          O,
          E,
          T
        ) : (M & 64 || M & 128) && x.process(
          u,
          d,
          p,
          w,
          b,
          _,
          O,
          E,
          T,
          Dt
        );
    }
    j != null && b ? kt(j, u && u.ref, _, d || u, !d) : j == null && u && u.ref != null && kt(u.ref, null, _, u, !0);
  }, F = (u, d, p, w) => {
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
  }, y = (u, d, p, w) => {
    u == null ? r(
      d.el = f(d.children || ""),
      p,
      w
    ) : d.el = u.el;
  }, C = (u, d, p, w) => {
    [u.el, u.anchor] = S(
      u.children,
      d,
      p,
      w,
      u.el,
      u.anchor
    );
  }, P = ({ el: u, anchor: d }, p, w) => {
    let b;
    for (; u && u !== d; )
      b = g(u), r(u, p, w), u = b;
    r(d, p, w);
  }, A = ({ el: u, anchor: d }) => {
    let p;
    for (; u && u !== d; )
      p = g(u), s(u), u = p;
    s(d);
  }, V = (u, d, p, w, b, _, O, E, T) => {
    d.type === "svg" ? O = "svg" : d.type === "math" && (O = "mathml"), u == null ? W(
      d,
      p,
      w,
      b,
      _,
      O,
      E,
      T
    ) : I(
      u,
      d,
      b,
      _,
      O,
      E,
      T
    );
  }, W = (u, d, p, w, b, _, O, E) => {
    let T, x;
    const { props: j, shapeFlag: M, transition: N, dirs: B } = u;
    if (T = u.el = o(
      u.type,
      _,
      j && j.is,
      j
    ), M & 8 ? c(T, u.children) : M & 16 && z(
      u.children,
      T,
      null,
      w,
      b,
      ur(u, _),
      O,
      E
    ), B && ct(u, null, w, "created"), H(T, u, u.scopeId, O, w), j) {
      for (const ne in j)
        ne !== "value" && !Ht(ne) && i(T, ne, null, j[ne], _, w);
      "value" in j && i(T, "value", null, j.value, _), (x = j.onVnodeBeforeMount) && Le(x, w, u);
    }
    B && ct(u, null, w, "beforeMount");
    const U = _f(b, N);
    U && N.beforeEnter(T), r(T, d, p), ((x = j && j.onVnodeMounted) || U || B) && ve(() => {
      x && Le(x, w, u), U && N.enter(T), B && ct(u, null, w, "mounted");
    }, b);
  }, H = (u, d, p, w, b) => {
    if (p && m(u, p), w)
      for (let _ = 0; _ < w.length; _++)
        m(u, w[_]);
    if (b) {
      let _ = b.subTree;
      if (d === _ || Eo(_.type) && (_.ssContent === d || _.ssFallback === d)) {
        const O = b.vnode;
        H(
          u,
          O,
          O.scopeId,
          O.slotScopeIds,
          b.parent
        );
      }
    }
  }, z = (u, d, p, w, b, _, O, E, T = 0) => {
    for (let x = T; x < u.length; x++) {
      const j = u[x] = E ? it(u[x]) : Ve(u[x]);
      v(
        null,
        j,
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
    let { patchFlag: T, dynamicChildren: x, dirs: j } = d;
    T |= u.patchFlag & 16;
    const M = u.props || G, N = d.props || G;
    let B;
    if (p && ut(p, !1), (B = N.onVnodeBeforeUpdate) && Le(B, p, d, u), j && ct(d, u, p, "beforeUpdate"), p && ut(p, !0), (M.innerHTML && N.innerHTML == null || M.textContent && N.textContent == null) && c(E, ""), x ? K(
      u.dynamicChildren,
      x,
      E,
      p,
      w,
      ur(d, b),
      _
    ) : O || te(
      u,
      d,
      E,
      null,
      p,
      w,
      ur(d, b),
      _,
      !1
    ), T > 0) {
      if (T & 16)
        Z(E, M, N, p, b);
      else if (T & 2 && M.class !== N.class && i(E, "class", null, N.class, b), T & 4 && i(E, "style", M.style, N.style, b), T & 8) {
        const U = d.dynamicProps;
        for (let ne = 0; ne < U.length; ne++) {
          const Y = U[ne], Se = M[Y], we = N[Y];
          (we !== Se || Y === "value") && i(E, Y, Se, we, b, p);
        }
      }
      T & 1 && u.children !== d.children && c(E, d.children);
    } else !O && x == null && Z(E, M, N, p, b);
    ((B = N.onVnodeUpdated) || j) && ve(() => {
      B && Le(B, p, d, u), j && ct(d, u, p, "updated");
    }, w);
  }, K = (u, d, p, w, b, _, O) => {
    for (let E = 0; E < d.length; E++) {
      const T = u[E], x = d[E], j = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        T.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (T.type === _e || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !pt(T, x) || // - In the case of a component, it could contain anything.
        T.shapeFlag & 198) ? h(T.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      v(
        T,
        x,
        j,
        null,
        w,
        b,
        _,
        O,
        !0
      );
    }
  }, Z = (u, d, p, w, b) => {
    if (d !== p) {
      if (d !== G)
        for (const _ in d)
          !Ht(_) && !(_ in p) && i(
            u,
            _,
            d[_],
            null,
            b,
            w
          );
      for (const _ in p) {
        if (Ht(_)) continue;
        const O = p[_], E = d[_];
        O !== E && _ !== "value" && i(u, _, E, O, b, w);
      }
      "value" in p && i(u, "value", d.value, p.value, b);
    }
  }, R = (u, d, p, w, b, _, O, E, T) => {
    const x = d.el = u ? u.el : l(""), j = d.anchor = u ? u.anchor : l("");
    let { patchFlag: M, dynamicChildren: N, slotScopeIds: B } = d;
    B && (E = E ? E.concat(B) : B), u == null ? (r(x, p, w), r(j, p, w), z(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      p,
      j,
      b,
      _,
      O,
      E,
      T
    )) : M > 0 && M & 64 && N && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren ? (K(
      u.dynamicChildren,
      N,
      p,
      b,
      _,
      O,
      E
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || b && d === b.subTree) && Qr(
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
      O,
      E,
      T
    );
  }, ee = (u, d, p, w, b, _, O, E, T) => {
    d.slotScopeIds = E, u == null ? d.shapeFlag & 512 ? b.ctx.activate(
      d,
      p,
      w,
      O,
      T
    ) : D(
      d,
      p,
      w,
      b,
      _,
      O,
      T
    ) : X(u, d, T);
  }, D = (u, d, p, w, b, _, O) => {
    const E = u.component = $f(
      u,
      w,
      b
    );
    if (sn(u) && (E.ctx.renderer = Dt), Bf(E, !1, O), E.asyncDep) {
      if (b && b.registerDep(E, q, O), !u.el) {
        const T = E.subTree = oe(ae);
        y(null, T, d, p), u.placeholder = T.el;
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
  }, X = (u, d, p) => {
    const w = d.component = u.component;
    if (Af(u, d, p))
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
        let { next: M, bu: N, u: B, parent: U, vnode: ne } = u;
        {
          const Ne = bo(u);
          if (Ne) {
            M && (M.el = ne.el, se(u, M, O)), Ne.asyncDep.then(() => {
              u.isUnmounted || E();
            });
            return;
          }
        }
        let Y = M, Se;
        ut(u, !1), M ? (M.el = ne.el, se(u, M, O)) : M = ne, N && bn(N), (Se = M.props && M.props.onVnodeBeforeUpdate) && Le(Se, U, M, ne), ut(u, !0);
        const we = Ts(u), De = u.subTree;
        u.subTree = we, v(
          De,
          we,
          // parent may have changed if it's in a teleport
          h(De.el),
          // anchor may have changed if it's in a fragment
          un(De),
          u,
          b,
          _
        ), M.el = we.el, Y === null && Pf(u, we.el), B && ve(B, b), (Se = M.props && M.props.onVnodeUpdated) && ve(
          () => Le(Se, U, M, ne),
          b
        );
      } else {
        let M;
        const { el: N, props: B } = d, { bm: U, m: ne, parent: Y, root: Se, type: we } = u, De = Ct(d);
        ut(u, !1), U && bn(U), !De && (M = B && B.onVnodeBeforeMount) && Le(M, Y, d), ut(u, !0);
        {
          Se.ce && // @ts-expect-error _def is private
          Se.ce._def.shadowRoot !== !1 && Se.ce._injectChildStyle(we);
          const Ne = u.subTree = Ts(u);
          v(
            null,
            Ne,
            p,
            w,
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
        (d.shapeFlag & 256 || Y && Ct(Y.vnode) && Y.vnode.shapeFlag & 256) && u.a && ve(u.a, b), u.isMounted = !0, d = p = w = null;
      }
    };
    u.scope.on();
    const T = u.effect = new Lr(E);
    u.scope.off();
    const x = u.update = T.run.bind(T), j = u.job = T.runIfDirty.bind(T);
    j.i = u, j.id = u.uid, T.scheduler = () => Wr(j), ut(u, !0), x();
  }, se = (u, d, p) => {
    d.component = u;
    const w = u.vnode.props;
    u.vnode = d, u.next = null, pf(u, d.props, w, p), vf(u, d.children, p), Je(), ds(u), Ye();
  }, te = (u, d, p, w, b, _, O, E, T = !1) => {
    const x = u && u.children, j = u ? u.shapeFlag : 0, M = d.children, { patchFlag: N, shapeFlag: B } = d;
    if (N > 0) {
      if (N & 128) {
        cn(
          x,
          M,
          p,
          w,
          b,
          _,
          O,
          E,
          T
        );
        return;
      } else if (N & 256) {
        lt(
          x,
          M,
          p,
          w,
          b,
          _,
          O,
          E,
          T
        );
        return;
      }
    }
    B & 8 ? (j & 16 && It(x, b, _), M !== x && c(p, M)) : j & 16 ? B & 16 ? cn(
      x,
      M,
      p,
      w,
      b,
      _,
      O,
      E,
      T
    ) : It(x, b, _, !0) : (j & 8 && c(p, ""), B & 16 && z(
      M,
      p,
      w,
      b,
      _,
      O,
      E,
      T
    ));
  }, lt = (u, d, p, w, b, _, O, E, T) => {
    u = u || St, d = d || St;
    const x = u.length, j = d.length, M = Math.min(x, j);
    let N;
    for (N = 0; N < M; N++) {
      const B = d[N] = T ? it(d[N]) : Ve(d[N]);
      v(
        u[N],
        B,
        p,
        null,
        b,
        _,
        O,
        E,
        T
      );
    }
    x > j ? It(
      u,
      b,
      _,
      !0,
      !1,
      M
    ) : z(
      d,
      p,
      w,
      b,
      _,
      O,
      E,
      T,
      M
    );
  }, cn = (u, d, p, w, b, _, O, E, T) => {
    let x = 0;
    const j = d.length;
    let M = u.length - 1, N = j - 1;
    for (; x <= M && x <= N; ) {
      const B = u[x], U = d[x] = T ? it(d[x]) : Ve(d[x]);
      if (pt(B, U))
        v(
          B,
          U,
          p,
          null,
          b,
          _,
          O,
          E,
          T
        );
      else
        break;
      x++;
    }
    for (; x <= M && x <= N; ) {
      const B = u[M], U = d[N] = T ? it(d[N]) : Ve(d[N]);
      if (pt(B, U))
        v(
          B,
          U,
          p,
          null,
          b,
          _,
          O,
          E,
          T
        );
      else
        break;
      M--, N--;
    }
    if (x > M) {
      if (x <= N) {
        const B = N + 1, U = B < j ? d[B].el : w;
        for (; x <= N; )
          v(
            null,
            d[x] = T ? it(d[x]) : Ve(d[x]),
            p,
            U,
            b,
            _,
            O,
            E,
            T
          ), x++;
      }
    } else if (x > N)
      for (; x <= M; )
        Ie(u[x], b, _, !0), x++;
    else {
      const B = x, U = x, ne = /* @__PURE__ */ new Map();
      for (x = U; x <= N; x++) {
        const Te = d[x] = T ? it(d[x]) : Ve(d[x]);
        Te.key != null && ne.set(Te.key, x);
      }
      let Y, Se = 0;
      const we = N - U + 1;
      let De = !1, Ne = 0;
      const Nt = new Array(we);
      for (x = 0; x < we; x++) Nt[x] = 0;
      for (x = B; x <= M; x++) {
        const Te = u[x];
        if (Se >= we) {
          Ie(Te, b, _, !0);
          continue;
        }
        let je;
        if (Te.key != null)
          je = ne.get(Te.key);
        else
          for (Y = U; Y <= N; Y++)
            if (Nt[Y - U] === 0 && pt(Te, d[Y])) {
              je = Y;
              break;
            }
        je === void 0 ? Ie(Te, b, _, !0) : (Nt[je - U] = x + 1, je >= Ne ? Ne = je : De = !0, v(
          Te,
          d[je],
          p,
          null,
          b,
          _,
          O,
          E,
          T
        ), Se++);
      }
      const os = De ? Sf(Nt) : St;
      for (Y = os.length - 1, x = we - 1; x >= 0; x--) {
        const Te = U + x, je = d[Te], ls = d[Te + 1], fs = Te + 1 < j ? (
          // #13559, fallback to el placeholder for unresolved async component
          ls.el || ls.placeholder
        ) : w;
        Nt[x] === 0 ? v(
          null,
          je,
          p,
          fs,
          b,
          _,
          O,
          E,
          T
        ) : De && (Y < 0 || x !== os[Y] ? ft(je, p, fs, 2) : Y--);
      }
    }
  }, ft = (u, d, p, w, b = null) => {
    const { el: _, type: O, transition: E, children: T, shapeFlag: x } = u;
    if (x & 6) {
      ft(u.component.subTree, d, p, w);
      return;
    }
    if (x & 128) {
      u.suspense.move(d, p, w);
      return;
    }
    if (x & 64) {
      O.move(u, d, p, Dt);
      return;
    }
    if (O === _e) {
      r(_, d, p);
      for (let M = 0; M < T.length; M++)
        ft(T[M], d, p, w);
      r(u.anchor, d, p);
      return;
    }
    if (O === qt) {
      P(u, d, p);
      return;
    }
    if (w !== 2 && x & 1 && E)
      if (w === 0)
        E.beforeEnter(_), r(_, d, p), ve(() => E.enter(_), b);
      else {
        const { leave: M, delayLeave: N, afterLeave: B } = E, U = () => {
          u.ctx.isUnmounted ? s(_) : r(_, d, p);
        }, ne = () => {
          _._isLeaving && _[Ue](
            !0
            /* cancelled */
          ), M(_, () => {
            U(), B && B();
          });
        };
        N ? N(_, U, ne) : ne();
      }
    else
      r(_, d, p);
  }, Ie = (u, d, p, w = !1, b = !1) => {
    const {
      type: _,
      props: O,
      ref: E,
      children: T,
      dynamicChildren: x,
      shapeFlag: j,
      patchFlag: M,
      dirs: N,
      cacheIndex: B
    } = u;
    if (M === -2 && (b = !1), E != null && (Je(), kt(E, null, p, u, !0), Ye()), B != null && (d.renderCache[B] = void 0), j & 256) {
      d.ctx.deactivate(u);
      return;
    }
    const U = j & 1 && N, ne = !Ct(u);
    let Y;
    if (ne && (Y = O && O.onVnodeBeforeUnmount) && Le(Y, d, u), j & 6)
      Qo(u.component, p, w);
    else {
      if (j & 128) {
        u.suspense.unmount(p, w);
        return;
      }
      U && ct(u, null, d, "beforeUnmount"), j & 64 ? u.type.remove(
        u,
        d,
        p,
        Dt,
        w
      ) : x && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !x.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== _e || M > 0 && M & 64) ? It(
        x,
        d,
        p,
        !1,
        !0
      ) : (_ === _e && M & 384 || !b && j & 16) && It(T, d, p), w && ss(u);
    }
    (ne && (Y = O && O.onVnodeUnmounted) || U) && ve(() => {
      Y && Le(Y, d, u), U && ct(u, null, d, "unmounted");
    }, p);
  }, ss = (u) => {
    const { type: d, el: p, anchor: w, transition: b } = u;
    if (d === _e) {
      Xo(p, w);
      return;
    }
    if (d === qt) {
      A(u);
      return;
    }
    const _ = () => {
      s(p), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (u.shapeFlag & 1 && b && !b.persisted) {
      const { leave: O, delayLeave: E } = b, T = () => O(p, _);
      E ? E(u.el, _, T) : T();
    } else
      _();
  }, Xo = (u, d) => {
    let p;
    for (; u !== d; )
      p = g(u), s(u), u = p;
    s(d);
  }, Qo = (u, d, p) => {
    const { bum: w, scope: b, job: _, subTree: O, um: E, m: T, a: x } = u;
    Cs(T), Cs(x), w && bn(w), b.stop(), _ && (_.flags |= 8, Ie(O, u, d, p)), E && ve(E, d), ve(() => {
      u.isUnmounted = !0;
    }, d);
  }, It = (u, d, p, w = !1, b = !1, _ = 0) => {
    for (let O = _; O < u.length; O++)
      Ie(u[O], d, p, w, b);
  }, un = (u) => {
    if (u.shapeFlag & 6)
      return un(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const d = g(u.anchor || u.el), p = d && d[$i];
    return p ? g(p) : d;
  };
  let nr = !1;
  const is = (u, d, p) => {
    u == null ? d._vnode && Ie(d._vnode, null, null, !0) : v(
      d._vnode || null,
      u,
      d,
      null,
      null,
      null,
      p
    ), d._vnode = u, nr || (nr = !0, ds(), Di(), nr = !1);
  }, Dt = {
    p: v,
    um: Ie,
    m: ft,
    r: ss,
    mt: D,
    mc: z,
    pc: te,
    pbc: K,
    n: un,
    o: e
  };
  return {
    render: is,
    hydrate: void 0,
    createApp: df(is)
  };
}
function ur({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ut({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function _f(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Qr(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (L(r) && L(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let l = s[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[i] = it(s[i]), l.el = o.el), !n && l.patchFlag !== -2 && Qr(o, l)), l.type === ln && // avoid cached text nodes retaining detached dom nodes
      l.patchFlag !== -1 && (l.el = o.el), l.type === ae && !l.el && (l.el = o.el);
    }
}
function Sf(e) {
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
function bo(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : bo(t);
}
function Cs(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const _o = Symbol.for("v-scx"), So = () => Gt(_o);
function wo(e, t) {
  return es(
    e,
    null,
    { flush: "sync" }
  );
}
function Me(e, t, n) {
  return es(e, t, n);
}
function es(e, t, n = G) {
  const { immediate: r, deep: s, flush: i, once: o } = n, l = ce({}, n), f = t && r || !t && i !== "post";
  let a;
  if (Pt) {
    if (i === "sync") {
      const m = So();
      a = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!f) {
      const m = () => {
      };
      return m.stop = He, m.resume = He, m.pause = He, m;
    }
  }
  const c = de;
  l.call = (m, S, v) => Re(m, c, S, v);
  let h = !1;
  i === "post" ? l.scheduler = (m) => {
    ve(m, c && c.suspense);
  } : i !== "sync" && (h = !0, l.scheduler = (m, S) => {
    S ? m() : Wr(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), h && (m.flags |= 2, c && (m.id = c.uid, m.i = c));
  };
  const g = Wl(e, t, l);
  return Pt && (a ? a.push(g) : f && g()), g;
}
function wf(e, t, n) {
  const r = this.proxy, s = ie(e) ? e.includes(".") ? xo(r, e) : () => r[e] : e.bind(r, r);
  let i;
  $(t) ? i = t : (i = t.handler, n = t);
  const o = fn(this), l = es(s, i.bind(r), n);
  return o(), l;
}
function xo(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
function xf(e, t, n = G) {
  const r = yt(), s = Ce(t), i = et(t), o = Co(e, s), l = Kr((f, a) => {
    let c, h = G, g;
    return wo(() => {
      const m = e[s];
      xe(c, m) && (c = m, a());
    }), {
      get() {
        return f(), n.get ? n.get(c) : c;
      },
      set(m) {
        const S = n.set ? n.set(m) : m;
        if (!xe(S, c) && !(h !== G && xe(m, h)))
          return;
        const v = r.vnode.props;
        v && // check if parent has passed v-model
        (t in v || s in v || i in v) && (`onUpdate:${t}` in v || `onUpdate:${s}` in v || `onUpdate:${i}` in v) || (c = m, a()), r.emit(`update:${t}`, S), xe(m, S) && xe(m, h) && !xe(S, g) && a(), h = m, g = S;
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
const Co = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ce(t)}Modifiers`] || e[`${et(t)}Modifiers`];
function Cf(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || G;
  let s = n;
  const i = t.startsWith("update:"), o = i && Co(r, t.slice(7));
  o && (o.trim && (s = n.map((c) => ie(c) ? c.trim() : c)), o.number && (s = n.map(vr)));
  let l, f = r[l = vn(t)] || // also try camelCase event handler (#2249)
  r[l = vn(Ce(t))];
  !f && i && (f = r[l = vn(et(t))]), f && Re(
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
    e.emitted[l] = !0, Re(
      a,
      e,
      6,
      s
    );
  }
}
const Tf = /* @__PURE__ */ new WeakMap();
function To(e, t, n = !1) {
  const r = n ? Tf : t.emitsCache, s = r.get(e);
  if (s !== void 0)
    return s;
  const i = e.emits;
  let o = {}, l = !1;
  if (!$(e)) {
    const f = (a) => {
      const c = To(a, t, !0);
      c && (l = !0, ce(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !l ? (Q(e) && r.set(e, null), null) : (L(i) ? i.forEach((f) => o[f] = null) : ce(o, i), Q(e) && r.set(e, o), o);
}
function er(e, t) {
  return !e || !Ln(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), J(e, t[0].toLowerCase() + t.slice(1)) || J(e, et(t)) || J(e, t));
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
    data: g,
    setupState: m,
    ctx: S,
    inheritAttrs: v
  } = e, F = On(e);
  let y, C;
  try {
    if (n.shapeFlag & 4) {
      const A = s || r, V = A;
      y = Ve(
        a.call(
          V,
          A,
          c,
          h,
          m,
          g,
          S
        )
      ), C = l;
    } else {
      const A = t;
      y = Ve(
        A.length > 1 ? A(
          h,
          { attrs: l, slots: o, emit: f }
        ) : A(
          h,
          null
        )
      ), C = t.props ? l : Ef(l);
    }
  } catch (A) {
    Jt.length = 0, Ft(A, e, 1), y = oe(ae);
  }
  let P = y;
  if (C && v !== !1) {
    const A = Object.keys(C), { shapeFlag: V } = P;
    A.length && V & 7 && (i && A.some(Ir) && (C = Of(
      C,
      i
    )), P = Xe(P, C, !1, !0));
  }
  return n.dirs && (P = Xe(P, null, !1, !0), P.dirs = P.dirs ? P.dirs.concat(n.dirs) : n.dirs), n.transition && ot(P, n.transition), y = P, On(F), y;
}
const Ef = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ln(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Of = (e, t) => {
  const n = {};
  for (const r in e)
    (!Ir(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function Af(e, t, n) {
  const { props: r, children: s, component: i } = e, { props: o, children: l, patchFlag: f } = t, a = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return r ? Es(r, o, a) : !!o;
    if (f & 8) {
      const c = t.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        const g = c[h];
        if (o[g] !== r[g] && !er(a, g))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : r === o ? !1 : r ? o ? Es(r, o, a) : !0 : !!o;
  return !1;
}
function Es(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (t[i] !== e[i] && !er(n, i))
      return !0;
  }
  return !1;
}
function Pf({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Eo = (e) => e.__isSuspense;
function Mf(e, t) {
  t && t.pendingBranch ? L(e) ? t.effects.push(...e) : t.effects.push(e) : Ii(e);
}
const _e = Symbol.for("v-fgt"), ln = Symbol.for("v-txt"), ae = Symbol.for("v-cmt"), qt = Symbol.for("v-stc"), Jt = [];
let Ee = null;
function Rn(e = !1) {
  Jt.push(Ee = e ? null : []);
}
function Rf() {
  Jt.pop(), Ee = Jt[Jt.length - 1] || null;
}
let Qt = 1;
function en(e, t = !1) {
  Qt += e, e < 0 && Ee && t && (Ee.hasOnce = !0);
}
function Oo(e) {
  return e.dynamicChildren = Qt > 0 ? Ee || St : null, Rf(), Qt > 0 && Ee && Ee.push(e), e;
}
function Ff(e, t, n, r, s, i) {
  return Oo(
    ts(
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
function Fn(e, t, n, r, s) {
  return Oo(
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
function At(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function pt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ao = ({ key: e }) => e ?? null, Sn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ie(e) || fe(e) || $(e) ? { i: he, r: e, k: t, f: !!n } : e : null);
function ts(e, t = null, n = null, r = 0, s = null, i = e === _e ? 0 : 1, o = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ao(t),
    ref: t && Sn(t),
    scopeId: ji,
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
    ctx: he
  };
  return l ? (ns(f, n), i & 128 && e.normalize(f)) : n && (f.shapeFlag |= ie(n) ? 8 : 16), Qt > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Ee && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && Ee.push(f), f;
}
const oe = If;
function If(e, t = null, n = null, r = 0, s = null, i = !1) {
  if ((!e || e === no) && (e = ae), At(e)) {
    const l = Xe(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ns(l, n), Qt > 0 && !i && Ee && (l.shapeFlag & 6 ? Ee[Ee.indexOf(e)] = l : Ee.push(l)), l.patchFlag = -2, l;
  }
  if (Uf(e) && (e = e.__vccOpts), t) {
    t = Po(t);
    let { class: l, style: f } = t;
    l && !ie(l) && (t.class = Kn(l)), Q(f) && (Jn(f) && !L(f) && (f = ce({}, f)), t.style = Hn(f));
  }
  const o = ie(e) ? 1 : Eo(e) ? 128 : Bi(e) ? 64 : Q(e) ? 4 : $(e) ? 2 : 0;
  return ts(
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
function Po(e) {
  return e ? Jn(e) || ao(e) ? ce({}, e) : e : null;
}
function Xe(e, t, n = !1, r = !1) {
  const { props: s, ref: i, patchFlag: o, children: l, transition: f } = e, a = t ? Ro(s || {}, t) : s, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Ao(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? L(i) ? i.concat(Sn(t)) : [i, Sn(t)] : Sn(t)
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
    patchFlag: t && e.type !== _e ? o === -1 ? 16 : o | 16 : o,
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
  return f && r && ot(
    c,
    f.clone(c)
  ), c;
}
function Mo(e = " ", t = 0) {
  return oe(ln, null, e, t);
}
function Df(e, t) {
  const n = oe(qt, null, e);
  return n.staticCount = t, n;
}
function Nf(e = "", t = !1) {
  return t ? (Rn(), Fn(ae, null, e)) : oe(ae, null, e);
}
function Ve(e) {
  return e == null || typeof e == "boolean" ? oe(ae) : L(e) ? oe(
    _e,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : At(e) ? it(e) : oe(ln, null, String(e));
}
function it(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Xe(e);
}
function ns(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (L(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), ns(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !ao(t) ? t._ctx = he : s === 3 && he && (he.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else $(t) ? (t = { default: t, _ctx: he }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Mo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ro(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = Kn([t.class, r.class]));
      else if (s === "style")
        t.style = Hn([t.style, r.style]);
      else if (Ln(s)) {
        const i = t[s], o = r[s];
        o && i !== o && !(L(i) && i.includes(o)) && (t[s] = i ? [].concat(i, o) : o);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function Le(e, t, n, r = null) {
  Re(e, t, 7, [
    n,
    r
  ]);
}
const jf = lo();
let Lf = 0;
function $f(e, t, n) {
  const r = e.type, s = (t ? t.appContext : e.appContext) || jf, i = {
    uid: Lf++,
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
    scope: new ui(
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
    propsOptions: po(r, s),
    emitsOptions: To(r, s),
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Cf.bind(null, i), e.ce && e.ce(i), i;
}
let de = null;
const yt = () => de || he;
let In, Or;
{
  const e = Vn(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (i) => {
      s.length > 1 ? s.forEach((o) => o(i)) : s[0](i);
    };
  };
  In = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => de = n
  ), Or = t(
    "__VUE_SSR_SETTERS__",
    (n) => Pt = n
  );
}
const fn = (e) => {
  const t = de;
  return In(e), e.scope.on(), () => {
    e.scope.off(), In(t);
  };
}, Os = () => {
  de && de.scope.off(), In(null);
};
function Fo(e) {
  return e.vnode.shapeFlag & 4;
}
let Pt = !1;
function Bf(e, t = !1, n = !1) {
  t && Or(t);
  const { props: r, children: s } = e.vnode, i = Fo(e);
  hf(e, r, i, t), yf(e, s, n || t);
  const o = i ? Vf(e, t) : void 0;
  return t && Or(!1), o;
}
function Vf(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, rf);
  const { setup: r } = n;
  if (r) {
    Je();
    const s = e.setupContext = r.length > 1 ? Kf(e) : null, i = fn(e), o = Rt(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), l = ni(o);
    if (Ye(), i(), (l || e.sp) && !Ct(e) && Gr(e), l) {
      if (o.then(Os, Os), t)
        return o.then((f) => {
          As(e, f);
        }).catch((f) => {
          Ft(f, e, 0);
        });
      e.asyncDep = o;
    } else
      As(e, o);
  } else
    Io(e);
}
function As(e, t, n) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Q(t) && (e.setupState = Hr(t)), Io(e);
}
function Io(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || He);
  {
    const s = fn(e);
    Je();
    try {
      of(e);
    } finally {
      Ye(), s();
    }
  }
}
const Hf = {
  get(e, t) {
    return me(e, "get", ""), e[t];
  }
};
function Kf(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Hf),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function tr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Hr(Oi(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in zt)
        return zt[n](e);
    },
    has(t, n) {
      return n in t || n in zt;
    }
  })) : e.proxy;
}
function Wf(e, t = !0) {
  return $(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Uf(e) {
  return $(e) && "__vccOpts" in e;
}
const le = (e, t) => Kl(e, t, Pt);
function rs(e, t, n) {
  try {
    en(-1);
    const r = arguments.length;
    return r === 2 ? Q(t) && !L(t) ? At(t) ? oe(e, null, [t]) : oe(e, t) : oe(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && At(n) && (n = [n]), oe(e, t, n));
  } finally {
    en(1);
  }
}
const Do = "3.5.22";
/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ar;
const Ps = typeof window < "u" && window.trustedTypes;
if (Ps)
  try {
    Ar = /* @__PURE__ */ Ps.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const No = Ar ? (e) => Ar.createHTML(e) : (e) => e, kf = "http://www.w3.org/2000/svg", zf = "http://www.w3.org/1998/Math/MathML", We = typeof document < "u" ? document : null, Ms = We && /* @__PURE__ */ We.createElement("template"), Gf = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? We.createElementNS(kf, e) : t === "mathml" ? We.createElementNS(zf, e) : n ? We.createElement(e, { is: n }) : We.createElement(e);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (e) => We.createTextNode(e),
  createComment: (e) => We.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => We.querySelector(e),
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
      Ms.innerHTML = No(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Ms.content;
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
}, nt = "transition", Lt = "animation", Mt = Symbol("_vtc"), jo = {
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
}, Lo = /* @__PURE__ */ ce(
  {},
  kr,
  jo
), qf = (e) => (e.displayName = "Transition", e.props = Lo, e), Jf = /* @__PURE__ */ qf(
  (e, { slots: t }) => rs(Ui, $o(e), t)
), at = (e, t = []) => {
  L(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Rs = (e) => e ? L(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function $o(e) {
  const t = {};
  for (const R in e)
    R in jo || (t[R] = e[R]);
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
  } = e, S = Yf(s), v = S && S[0], F = S && S[1], {
    onBeforeEnter: y,
    onEnter: C,
    onEnterCancelled: P,
    onLeave: A,
    onLeaveCancelled: V,
    onBeforeAppear: W = y,
    onAppear: H = C,
    onAppearCancelled: z = P
  } = t, I = (R, ee, D, X) => {
    R._enterCancelled = X, rt(R, ee ? c : l), rt(R, ee ? a : o), D && D();
  }, K = (R, ee) => {
    R._isLeaving = !1, rt(R, h), rt(R, m), rt(R, g), ee && ee();
  }, Z = (R) => (ee, D) => {
    const X = R ? H : C, q = () => I(ee, R, D);
    at(X, [ee, q]), Fs(() => {
      rt(ee, R ? f : i), $e(ee, R ? c : l), Rs(X) || Is(ee, r, v, q);
    });
  };
  return ce(t, {
    onBeforeEnter(R) {
      at(y, [R]), $e(R, i), $e(R, o);
    },
    onBeforeAppear(R) {
      at(W, [R]), $e(R, f), $e(R, a);
    },
    onEnter: Z(!1),
    onAppear: Z(!0),
    onLeave(R, ee) {
      R._isLeaving = !0;
      const D = () => K(R, ee);
      $e(R, h), R._enterCancelled ? ($e(R, g), Pr(R)) : (Pr(R), $e(R, g)), Fs(() => {
        R._isLeaving && (rt(R, h), $e(R, m), Rs(A) || Is(R, r, F, D));
      }), at(A, [R, D]);
    },
    onEnterCancelled(R) {
      I(R, !1, void 0, !0), at(P, [R]);
    },
    onAppearCancelled(R) {
      I(R, !0, void 0, !0), at(z, [R]);
    },
    onLeaveCancelled(R) {
      K(R), at(V, [R]);
    }
  });
}
function Yf(e) {
  if (e == null)
    return null;
  if (Q(e))
    return [ar(e.enter), ar(e.leave)];
  {
    const t = ar(e);
    return [t, t];
  }
}
function ar(e) {
  return fl(e);
}
function $e(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Mt] || (e[Mt] = /* @__PURE__ */ new Set())).add(t);
}
function rt(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[Mt];
  n && (n.delete(t), n.size || (e[Mt] = void 0));
}
function Fs(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Zf = 0;
function Is(e, t, n, r) {
  const s = e._endId = ++Zf, i = () => {
    s === e._endId && r();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: o, timeout: l, propCount: f } = Bo(e, t);
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
function Bo(e, t) {
  const n = window.getComputedStyle(e), r = (S) => (n[S] || "").split(", "), s = r(`${nt}Delay`), i = r(`${nt}Duration`), o = Ds(s, i), l = r(`${Lt}Delay`), f = r(`${Lt}Duration`), a = Ds(l, f);
  let c = null, h = 0, g = 0;
  t === nt ? o > 0 && (c = nt, h = o, g = i.length) : t === Lt ? a > 0 && (c = Lt, h = a, g = f.length) : (h = Math.max(o, a), c = h > 0 ? o > a ? nt : Lt : null, g = c ? c === nt ? i.length : f.length : 0);
  const m = c === nt && /\b(?:transform|all)(?:,|$)/.test(
    r(`${nt}Property`).toString()
  );
  return {
    type: c,
    timeout: h,
    propCount: g,
    hasTransform: m
  };
}
function Ds(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => Ns(n) + Ns(e[r])));
}
function Ns(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Pr(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Xf(e, t, n) {
  const r = e[Mt];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Dn = Symbol("_vod"), Vo = Symbol("_vsh"), Qf = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Dn] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : $t(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), $t(e, !0), r.enter(e)) : r.leave(e, () => {
      $t(e, !1);
    }) : $t(e, t));
  },
  beforeUnmount(e, { value: t }) {
    $t(e, t);
  }
};
function $t(e, t) {
  e.style.display = t ? e[Dn] : "none", e[Vo] = !t;
}
const ec = Symbol(""), tc = /(?:^|;)\s*display\s*:/;
function nc(e, t, n) {
  const r = e.style, s = ie(n);
  let i = !1;
  if (n && !s) {
    if (t)
      if (ie(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && wn(r, l, "");
        }
      else
        for (const o in t)
          n[o] == null && wn(r, o, "");
    for (const o in n)
      o === "display" && (i = !0), wn(r, o, n[o]);
  } else if (s) {
    if (t !== n) {
      const o = r[ec];
      o && (n += ";" + o), r.cssText = n, i = tc.test(n);
    }
  } else t && e.removeAttribute("style");
  Dn in e && (e[Dn] = i ? r.display : "", e[Vo] && (r.display = "none"));
}
const js = /\s*!important$/;
function wn(e, t, n) {
  if (L(n))
    n.forEach((r) => wn(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = rc(e, t);
    js.test(n) ? e.setProperty(
      et(r),
      n.replace(js, ""),
      "important"
    ) : e[r] = n;
  }
}
const Ls = ["Webkit", "Moz", "ms"], dr = {};
function rc(e, t) {
  const n = dr[t];
  if (n)
    return n;
  let r = Ce(t);
  if (r !== "filter" && r in e)
    return dr[t] = r;
  r = nn(r);
  for (let s = 0; s < Ls.length; s++) {
    const i = Ls[s] + r;
    if (i in e)
      return dr[t] = i;
  }
  return t;
}
const $s = "http://www.w3.org/1999/xlink";
function Bs(e, t, n, r, s, i = pl(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS($s, t.slice(6, t.length)) : e.setAttributeNS($s, t, n) : n == null || i && !oi(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Qe(n) ? String(n) : n
  );
}
function Vs(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? No(n) : n);
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
    l === "boolean" ? n = oi(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(s || t);
}
function _t(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function sc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Hs = Symbol("_vei");
function ic(e, t, n, r, s = null) {
  const i = e[Hs] || (e[Hs] = {}), o = i[t];
  if (r && o)
    o.value = r;
  else {
    const [l, f] = oc(t);
    if (r) {
      const a = i[t] = cc(
        r,
        s
      );
      _t(e, l, a, f);
    } else o && (sc(e, l, o, f), i[t] = void 0);
  }
}
const Ks = /(?:Once|Passive|Capture)$/;
function oc(e) {
  let t;
  if (Ks.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Ks); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : et(e.slice(2)), t];
}
let hr = 0;
const lc = /* @__PURE__ */ Promise.resolve(), fc = () => hr || (lc.then(() => hr = 0), hr = Date.now());
function cc(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Re(
      uc(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = fc(), n;
}
function uc(e, t) {
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
const Ws = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ac = (e, t, n, r, s, i) => {
  const o = s === "svg";
  t === "class" ? Xf(e, r, o) : t === "style" ? nc(e, n, r) : Ln(t) ? Ir(t) || ic(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : dc(e, t, r, o)) ? (Vs(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Bs(e, t, r, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ie(r)) ? Vs(e, Ce(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Bs(e, t, r, o));
};
function dc(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ws(t) && $(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Ws(t) && ie(n) ? !1 : t in e;
}
const Ho = /* @__PURE__ */ new WeakMap(), Ko = /* @__PURE__ */ new WeakMap(), Nn = Symbol("_moveCb"), Us = Symbol("_enterCb"), hc = (e) => (delete e.props.mode, e), pc = /* @__PURE__ */ hc({
  name: "TransitionGroup",
  props: /* @__PURE__ */ ce({}, Lo, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = yt(), r = Ur();
    let s, i;
    return qr(() => {
      if (!s.length)
        return;
      const o = e.moveClass || `${e.name || "v"}-move`;
      if (!bc(
        s[0].el,
        n.vnode.el,
        o
      )) {
        s = [];
        return;
      }
      s.forEach(mc), s.forEach(yc);
      const l = s.filter(vc);
      Pr(n.vnode.el), l.forEach((f) => {
        const a = f.el, c = a.style;
        $e(a, o), c.transform = c.webkitTransform = c.transitionDuration = "";
        const h = a[Nn] = (g) => {
          g && g.target !== a || (!g || g.propertyName.endsWith("transform")) && (a.removeEventListener("transitionend", h), a[Nn] = null, rt(a, o));
        };
        a.addEventListener("transitionend", h);
      }), s = [];
    }), () => {
      const o = k(e), l = $o(o);
      let f = o.tag || _e;
      if (s = [], i)
        for (let a = 0; a < i.length; a++) {
          const c = i[a];
          c.el && c.el instanceof Element && (s.push(c), ot(
            c,
            Ot(
              c,
              l,
              r,
              n
            )
          ), Ho.set(
            c,
            c.el.getBoundingClientRect()
          ));
        }
      i = t.default ? Xn(t.default()) : [];
      for (let a = 0; a < i.length; a++) {
        const c = i[a];
        c.key != null && ot(
          c,
          Ot(c, l, r, n)
        );
      }
      return oe(f, null, i);
    };
  }
}), gc = pc;
function mc(e) {
  const t = e.el;
  t[Nn] && t[Nn](), t[Us] && t[Us]();
}
function yc(e) {
  Ko.set(e, e.el.getBoundingClientRect());
}
function vc(e) {
  const t = Ho.get(e), n = Ko.get(e), r = t.left - n.left, s = t.top - n.top;
  if (r || s) {
    const i = e.el.style;
    return i.transform = i.webkitTransform = `translate(${r}px,${s}px)`, i.transitionDuration = "0s", e;
  }
}
function bc(e, t, n) {
  const r = e.cloneNode(), s = e[Mt];
  s && s.forEach((l) => {
    l.split(/\s+/).forEach((f) => f && r.classList.remove(f));
  }), n.split(/\s+/).forEach((l) => l && r.classList.add(l)), r.style.display = "none";
  const i = t.nodeType === 1 ? t : t.parentNode;
  i.appendChild(r);
  const { hasTransform: o } = Bo(r);
  return i.removeChild(r), o;
}
const ks = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return L(t) ? (n) => bn(t, n) : t;
};
function _c(e) {
  e.target.composing = !0;
}
function zs(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const pr = Symbol("_assign"), Sc = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
    e[pr] = ks(s);
    const i = r || s.props && s.props.type === "number";
    _t(e, t ? "change" : "input", (o) => {
      if (o.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), i && (l = vr(l)), e[pr](l);
    }), n && _t(e, "change", () => {
      e.value = e.value.trim();
    }), t || (_t(e, "compositionstart", _c), _t(e, "compositionend", zs), _t(e, "change", zs));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: i } }, o) {
    if (e[pr] = ks(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? vr(e.value) : e.value, f = t ?? "";
    l !== f && (document.activeElement === e && e.type !== "range" && (r && t === n || s && e.value.trim() === f) || (e.value = f));
  }
}, wc = ["ctrl", "shift", "alt", "meta"], xc = {
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
  exact: (e, t) => wc.some((n) => e[`${n}Key`] && !t.includes(n))
}, Cc = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((s, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const l = xc[t[o]];
      if (l && l(s, t)) return;
    }
    return e(s, ...i);
  }));
}, Tc = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Ec = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return n[r] || (n[r] = ((s) => {
    if (!("key" in s))
      return;
    const i = et(s.key);
    if (t.some(
      (o) => o === i || Tc[o] === i
    ))
      return e(s);
  }));
}, Oc = /* @__PURE__ */ ce({ patchProp: ac }, Gf);
let Gs;
function Ac() {
  return Gs || (Gs = vo(Oc));
}
const Pc = ((...e) => {
  const t = Ac().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const s = Rc(r);
    if (!s) return;
    const i = t._component;
    !$(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const o = n(s, !1, Mc(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
  }, t;
});
function Mc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Rc(e) {
  return ie(e) ? document.querySelector(e) : e;
}
/**
* vue v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const uu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, BaseTransition: Ui, BaseTransitionPropsValidators: kr, Comment: ae, EffectScope: ui, Fragment: _e, ReactiveEffect: Lr, Static: qt, Teleport: ql, Text: ln, Transition: Jf, TransitionGroup: gc, callWithAsyncErrorHandling: Re, callWithErrorHandling: Rt, camelize: Ce, capitalize: nn, cloneVNode: Xe, computed: le, createApp: Pc, createBlock: Fn, createCommentVNode: Nf, createElementBlock: Ff, createElementVNode: ts, createRenderer: vo, createStaticVNode: Df, createTextVNode: Mo, createVNode: oe, customRef: Kr, defineAsyncComponent: Zl, defineComponent: zr, getCurrentInstance: yt, getCurrentScope: Wn, getTransitionRawChildren: Xn, guardReactiveProps: Po, h: rs, handleError: Ft, inject: Gt, isProxy: Jn, isReactive: mt, isReadonly: Ze, isRef: fe, isShallow: Oe, isVNode: At, markRaw: Oi, mergeModels: sf, mergeProps: Ro, nextTick: Zn, normalizeClass: Kn, normalizeStyle: Hn, onActivated: zi, onBeforeMount: Ji, onBeforeUnmount: Jr, onBeforeUpdate: Yi, onDeactivated: Gi, onErrorCaptured: eo, onMounted: on, onRenderTracked: Qi, onRenderTriggered: Xi, onScopeDispose: jr, onServerPrefetch: Zi, onUnmounted: Yr, onUpdated: qr, onWatcherCleanup: Mi, openBlock: Rn, provide: fo, proxyRefs: Hr, queuePostFlushCb: Ii, reactive: Gn, readonly: Et, ref: Pe, renderList: tf, renderSlot: nf, resolveComponent: Ql, resolveDynamicComponent: ef, resolveTransitionHooks: Ot, setBlockTracking: en, setTransitionHooks: ot, shallowReactive: Ei, shallowReadonly: dt, shallowRef: Yn, ssrContextKey: _o, toDisplayString: fi, toHandlerKey: vn, toRaw: k, toRef: Pi, toValue: qe, triggerRef: Nl, unref: rn, useModel: xf, useSSRContext: So, useTransitionState: Ur, vModelText: Sc, vShow: Qf, version: Do, watch: Me, watchSyncEffect: wo, withCtx: Li, withDirectives: zl, withKeys: Ec, withModifiers: Cc }, Symbol.toStringTag, { value: "Module" }));
function pe(e, t, n) {
  return (t = Nc(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function qs(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ge(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qs(Object(n), !0).forEach(function(r) {
      pe(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qs(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Fc(e, t) {
  if (e == null) return {};
  var n, r, s = Ic(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
  }
  return s;
}
function Ic(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function Dc(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Nc(e) {
  var t = Dc(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function jn(e) {
  "@babel/helpers - typeof";
  return jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, jn(e);
}
function gr(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? pe({}, e, t) : {};
}
function jc(e) {
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
  }, pe(pe(pe(pe(pe(pe(pe(pe(pe(pe(t, "fa-".concat(e.size), e.size !== null), "fa-rotate-".concat(e.rotation), e.rotation !== null), "fa-rotate-by", e.rotateBy), "fa-pull-".concat(e.pull), e.pull !== null), "fa-swap-opacity", e.swapOpacity), "fa-bounce", e.bounce), "fa-shake", e.shake), "fa-beat", e.beat), "fa-fade", e.fade), "fa-beat-fade", e.beatFade), pe(pe(pe(pe(t, "fa-flash", e.flash), "fa-spin-pulse", e.spinPulse), "fa-spin-reverse", e.spinReverse), "fa-width-auto", e.widthAuto));
  return Object.keys(n).map(function(r) {
    return n[r] ? r : null;
  }).filter(function(r) {
    return r;
  });
}
var Lc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Wo = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(y, C, P) {
      if (!a(C) || h(C) || g(C) || m(C) || f(C))
        return C;
      var A, V = 0, W = 0;
      if (c(C))
        for (A = [], W = C.length; V < W; V++)
          A.push(n(y, C[V], P));
      else {
        A = {};
        for (var H in C)
          Object.prototype.hasOwnProperty.call(C, H) && (A[y(H, P)] = n(y, C[H], P));
      }
      return A;
    }, r = function(y, C) {
      C = C || {};
      var P = C.separator || "_", A = C.split || /(?=[A-Z])/;
      return y.split(A).join(P);
    }, s = function(y) {
      return S(y) ? y : (y = y.replace(/[\-_\s]+(.)?/g, function(C, P) {
        return P ? P.toUpperCase() : "";
      }), y.substr(0, 1).toLowerCase() + y.substr(1));
    }, i = function(y) {
      var C = s(y);
      return C.substr(0, 1).toUpperCase() + C.substr(1);
    }, o = function(y, C) {
      return r(y, C).toLowerCase();
    }, l = Object.prototype.toString, f = function(y) {
      return typeof y == "function";
    }, a = function(y) {
      return y === Object(y);
    }, c = function(y) {
      return l.call(y) == "[object Array]";
    }, h = function(y) {
      return l.call(y) == "[object Date]";
    }, g = function(y) {
      return l.call(y) == "[object RegExp]";
    }, m = function(y) {
      return l.call(y) == "[object Boolean]";
    }, S = function(y) {
      return y = y - 0, y === y;
    }, v = function(y, C) {
      var P = C && "process" in C ? C.process : C;
      return typeof P != "function" ? y : function(A, V) {
        return P(A, y, V);
      };
    }, F = {
      camelize: s,
      decamelize: o,
      pascalize: i,
      depascalize: o,
      camelizeKeys: function(y, C) {
        return n(v(s, C), y);
      },
      decamelizeKeys: function(y, C) {
        return n(v(o, C), y, C);
      },
      pascalizeKeys: function(y, C) {
        return n(v(i, C), y);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = F : t.humps = F;
  })(Lc);
})(Wo);
var $c = Wo.exports, Bc = ["class", "style"];
function Vc(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), s = $c.camelize(n.slice(0, r)), i = n.slice(r + 1).trim();
    return t[s] = i, t;
  }, {});
}
function Hc(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function Uo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var r = (e.children || []).map(function(f) {
    return Uo(f);
  }), s = Object.keys(e.attributes || {}).reduce(function(f, a) {
    var c = e.attributes[a];
    switch (a) {
      case "class":
        f.class = Hc(c);
        break;
      case "style":
        f.style = Vc(c);
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
  var i = n.style, o = i === void 0 ? {} : i, l = Fc(n, Bc);
  return rs(e.tag, Ge(Ge(Ge({}, t), {}, {
    class: s.class,
    style: Ge(Ge({}, s.style), o)
  }, s.attrs), l), r);
}
var ko = !1;
try {
  ko = !0;
} catch {
}
function Kc() {
  if (!ko && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Js(e) {
  if (e && jn(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (yr.icon)
    return yr.icon(e);
  if (e === null)
    return null;
  if (jn(e) === "object" && e.prefix && e.iconName)
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
var Wc = /* @__PURE__ */ zr({
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
    var r = n.attrs, s = le(function() {
      return Js(t.icon);
    }), i = le(function() {
      return gr("classes", jc(t));
    }), o = le(function() {
      return gr("transform", typeof t.transform == "string" ? yr.transform(t.transform) : t.transform);
    }), l = le(function() {
      return gr("mask", Js(t.mask));
    }), f = le(function() {
      var c = Ge(Ge(Ge(Ge({}, i.value), o.value), l.value), {}, {
        symbol: t.symbol,
        maskId: t.maskId
      });
      return c.title = t.title, c.titleId = t.titleId, el(s.value, c);
    });
    Me(f, function(c) {
      if (!c)
        return Kc("Could not find one or more icon(s)", s.value, l.value);
    }, {
      immediate: !0
    });
    var a = le(function() {
      return f.value ? Uo(f.value.abstract[0], {}, r) : null;
    });
    return function() {
      return a.value;
    };
  }
});
const au = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, FontAwesomeIcon: Wc }, Symbol.toStringTag, { value: "Module" }));
function zo(e) {
  return Wn() ? (jr(e), !0) : !1;
}
const Uc = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const kc = Object.prototype.toString, zc = (e) => kc.call(e) === "[object Object]", Mr = () => {
};
function Gc(...e) {
  if (e.length !== 1)
    return Pi(...e);
  const t = e[0];
  return typeof t == "function" ? Et(Kr(() => ({ get: t, set: Mr }))) : Pe(t);
}
function Go(e, t) {
  function n(...r) {
    return new Promise((s, i) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(s).catch(i);
    });
  }
  return n;
}
const qo = (e) => e();
function Jo(...e) {
  let t = 0, n, r = !0, s = Mr, i, o, l, f, a;
  !fe(e[0]) && typeof e[0] == "object" ? { delay: o, trailing: l = !0, leading: f = !0, rejectOnCancel: a = !1 } = e[0] : [o, l = !0, f = !0, a = !1] = e;
  const c = () => {
    n && (clearTimeout(n), n = void 0, s(), s = Mr);
  };
  return (g) => {
    const m = qe(o), S = Date.now() - t, v = () => i = g();
    return c(), m <= 0 ? (t = Date.now(), v()) : (S > m && (f || !r) ? (t = Date.now(), v()) : l && (i = new Promise((F, y) => {
      s = a ? y : F, n = setTimeout(() => {
        t = Date.now(), r = !0, F(v()), c();
      }, Math.max(0, m - S));
    })), !f && !n && (n = setTimeout(() => r = !0, m)), r = !1, i);
  };
}
function qc(e = qo, t = {}) {
  const {
    initialState: n = "active"
  } = t, r = Gc(n === "active");
  function s() {
    r.value = !1;
  }
  function i() {
    r.value = !0;
  }
  const o = (...l) => {
    r.value && e(...l);
  };
  return { isActive: Et(r), pause: s, resume: i, eventFilter: o };
}
function mr(e) {
  return Array.isArray(e) ? e : [e];
}
function Jc(e) {
  return yt();
}
// @__NO_SIDE_EFFECTS__
function du(e, t = 200, n = !1, r = !0, s = !1) {
  return Go(
    Jo(t, n, r, s),
    e
  );
}
function Yo(e, t, n = {}) {
  const {
    eventFilter: r = qo,
    ...s
  } = n;
  return Me(
    e,
    Go(
      r,
      t
    ),
    s
  );
}
function Yc(e, t, n = {}) {
  const {
    eventFilter: r,
    initialState: s = "active",
    ...i
  } = n, { eventFilter: o, pause: l, resume: f, isActive: a } = qc(r, { initialState: s });
  return { stop: Yo(
    e,
    t,
    {
      ...i,
      eventFilter: o
    }
  ), pause: l, resume: f, isActive: a };
}
function Zc(e, t = !0, n) {
  Jc() ? on(e, n) : t ? e() : Zn(e);
}
function Xc(e, t, n) {
  return Me(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
function hu(e, t, n = {}) {
  const {
    throttle: r = 0,
    trailing: s = !0,
    leading: i = !0,
    ...o
  } = n;
  return Yo(
    e,
    t,
    {
      ...o,
      eventFilter: Jo(r, s, i)
    }
  );
}
const tn = Uc ? window : void 0;
function Rr(e) {
  var t;
  const n = qe(e);
  return (t = n?.$el) != null ? t : n;
}
function Ys(...e) {
  const t = [], n = () => {
    t.forEach((l) => l()), t.length = 0;
  }, r = (l, f, a, c) => (l.addEventListener(f, a, c), () => l.removeEventListener(f, a, c)), s = le(() => {
    const l = mr(qe(e[0])).filter((f) => f != null);
    return l.every((f) => typeof f != "string") ? l : void 0;
  }), i = Xc(
    () => {
      var l, f;
      return [
        (f = (l = s.value) == null ? void 0 : l.map((a) => Rr(a))) != null ? f : [tn].filter((a) => a != null),
        mr(qe(s.value ? e[1] : e[0])),
        mr(rn(s.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        qe(s.value ? e[3] : e[2])
      ];
    },
    ([l, f, a, c]) => {
      if (n(), !l?.length || !f?.length || !a?.length)
        return;
      const h = zc(c) ? { ...c } : c;
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
  return zo(n), o;
}
// @__NO_SIDE_EFFECTS__
function Qc() {
  const e = Yn(!1), t = yt();
  return t && on(() => {
    e.value = !0;
  }, t), e;
}
// @__NO_SIDE_EFFECTS__
function eu(e) {
  const t = /* @__PURE__ */ Qc();
  return le(() => (t.value, !!e()));
}
const mn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, yn = "__vueuse_ssr_handlers__", tu = /* @__PURE__ */ nu();
function nu() {
  return yn in mn || (mn[yn] = mn[yn] || {}), mn[yn];
}
function ru(e, t) {
  return tu[e] || t;
}
function su(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const iu = {
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
}, Zs = "vueuse-storage";
function ou(e, t, n, r = {}) {
  var s;
  const {
    flush: i = "pre",
    deep: o = !0,
    listenToStorageChanges: l = !0,
    writeDefaults: f = !0,
    mergeDefaults: a = !1,
    shallow: c,
    window: h = tn,
    eventFilter: g,
    onError: m = (D) => {
      console.error(D);
    },
    initOnMounted: S
  } = r, v = (c ? Yn : Pe)(typeof t == "function" ? t() : t), F = le(() => qe(e));
  if (!n)
    try {
      n = ru("getDefaultStorage", () => {
        var D;
        return (D = tn) == null ? void 0 : D.localStorage;
      })();
    } catch (D) {
      m(D);
    }
  if (!n)
    return v;
  const y = qe(t), C = su(y), P = (s = r.serializer) != null ? s : iu[C], { pause: A, resume: V } = Yc(
    v,
    (D) => K(D),
    { flush: i, deep: o, eventFilter: g }
  );
  Me(F, () => R(), { flush: i });
  let W = !1;
  const H = (D) => {
    S && !W || R(D);
  }, z = (D) => {
    S && !W || ee(D);
  };
  h && l && (n instanceof Storage ? Ys(h, "storage", H, { passive: !0 }) : Ys(h, Zs, z)), S ? Zc(() => {
    W = !0, R();
  }) : R();
  function I(D, X) {
    if (h) {
      const q = {
        key: F.value,
        oldValue: D,
        newValue: X,
        storageArea: n
      };
      h.dispatchEvent(n instanceof Storage ? new StorageEvent("storage", q) : new CustomEvent(Zs, {
        detail: q
      }));
    }
  }
  function K(D) {
    try {
      const X = n.getItem(F.value);
      if (D == null)
        I(X, null), n.removeItem(F.value);
      else {
        const q = P.write(D);
        X !== q && (n.setItem(F.value, q), I(X, q));
      }
    } catch (X) {
      m(X);
    }
  }
  function Z(D) {
    const X = D ? D.newValue : n.getItem(F.value);
    if (X == null)
      return f && y != null && n.setItem(F.value, P.write(y)), y;
    if (!D && a) {
      const q = P.read(X);
      return typeof a == "function" ? a(q, y) : C === "object" && !Array.isArray(q) ? { ...y, ...q } : q;
    } else return typeof X != "string" ? X : P.read(X);
  }
  function R(D) {
    if (!(D && D.storageArea !== n)) {
      if (D && D.key == null) {
        v.value = y;
        return;
      }
      if (!(D && D.key !== F.value)) {
        A();
        try {
          const X = P.write(v.value);
          (D === void 0 || D?.newValue !== X) && (v.value = Z(D));
        } catch (X) {
          m(X);
        } finally {
          D ? Zn(V) : V();
        }
      }
    }
  }
  function ee(D) {
    R(D.detail);
  }
  return v;
}
function pu(e, t, n = {}) {
  const { window: r = tn, ...s } = n;
  let i;
  const o = /* @__PURE__ */ eu(() => r && "ResizeObserver" in r), l = () => {
    i && (i.disconnect(), i = void 0);
  }, f = le(() => {
    const h = qe(e);
    return Array.isArray(h) ? h.map((g) => Rr(g)) : [Rr(h)];
  }), a = Me(
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
  return zo(c), {
    isSupported: o,
    stop: c
  };
}
function gu(e, t, n = {}) {
  const { window: r = tn } = n;
  return ou(e, t, r?.localStorage, n);
}
function lu(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Xs(e) {
  if (lu(e)) {
    const t = e.$el;
    return tl(t) && nl(t) === "#comment" ? null : t;
  }
  return e;
}
function Bt(e) {
  return typeof e == "function" ? e() : rn(e);
}
function Zo(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Qs(e, t) {
  const n = Zo(e);
  return Math.round(t * n) / n;
}
function mu(e, t, n) {
  n === void 0 && (n = {});
  const r = n.whileElementsMounted, s = le(() => {
    var H;
    return (H = Bt(n.open)) != null ? H : !0;
  }), i = le(() => Bt(n.middleware)), o = le(() => {
    var H;
    return (H = Bt(n.placement)) != null ? H : "bottom";
  }), l = le(() => {
    var H;
    return (H = Bt(n.strategy)) != null ? H : "absolute";
  }), f = le(() => {
    var H;
    return (H = Bt(n.transform)) != null ? H : !0;
  }), a = le(() => Xs(e.value)), c = le(() => Xs(t.value)), h = Pe(0), g = Pe(0), m = Pe(l.value), S = Pe(o.value), v = Yn({}), F = Pe(!1), y = le(() => {
    const H = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return H;
    const z = Qs(c.value, h.value), I = Qs(c.value, g.value);
    return f.value ? {
      ...H,
      transform: "translate(" + z + "px, " + I + "px)",
      ...Zo(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: z + "px",
      top: I + "px"
    };
  });
  let C;
  function P() {
    if (a.value == null || c.value == null)
      return;
    const H = s.value;
    rl(a.value, c.value, {
      middleware: i.value,
      placement: o.value,
      strategy: l.value
    }).then((z) => {
      h.value = z.x, g.value = z.y, m.value = z.strategy, S.value = z.placement, v.value = z.middlewareData, F.value = H !== !1;
    });
  }
  function A() {
    typeof C == "function" && (C(), C = void 0);
  }
  function V() {
    if (A(), r === void 0) {
      P();
      return;
    }
    if (a.value != null && c.value != null) {
      C = r(a.value, c.value, P);
      return;
    }
  }
  function W() {
    s.value || (F.value = !1);
  }
  return Me([i, o, l, s], P, {
    flush: "sync"
  }), Me([a, c], V, {
    flush: "sync"
  }), Me(s, W, {
    flush: "sync"
  }), Wn() && jr(A), {
    x: dt(h),
    y: dt(g),
    strategy: dt(m),
    placement: dt(S),
    middlewareData: dt(v),
    isPositioned: dt(F),
    floatingStyles: y,
    update: P
  };
}
export {
  uu as $,
  Ro as A,
  Li as B,
  nf as C,
  Pi as D,
  Ql as E,
  _e as F,
  oe as G,
  Ec as H,
  Df as I,
  Mo as J,
  Yn as K,
  gu as L,
  Zl as M,
  sf as N,
  xf as O,
  du as P,
  Oi as Q,
  Sc as R,
  Jf as S,
  ql as T,
  fe as U,
  Gt as V,
  gc as W,
  Nl as X,
  Et as Y,
  Ji as Z,
  fo as _,
  Kn as a,
  au as a0,
  ts as b,
  Ff as c,
  zr as d,
  Pe as e,
  Gn as f,
  on as g,
  le as h,
  hu as i,
  Me as j,
  Zn as k,
  mu as l,
  Yr as m,
  Hn as n,
  Rn as o,
  Fn as p,
  rn as q,
  tf as r,
  Nf as s,
  fi as t,
  pu as u,
  Qf as v,
  zl as w,
  Wc as x,
  Cc as y,
  ef as z
};

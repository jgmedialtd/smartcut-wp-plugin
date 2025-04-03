import { A as rr, B as _o, C as wo, D as xo, E as So, G as Co } from "./vendor-D6Dp0Tf9.js";
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function wr(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const q = {}, bt = [], He = () => {
}, To = () => !1, Cn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), xr = (e) => e.startsWith("onUpdate:"), se = Object.assign, Sr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Eo = Object.prototype.hasOwnProperty, J = (e, t) => Eo.call(e, t), j = Array.isArray, _t = (e) => Tn(e) === "[object Map]", Ds = (e) => Tn(e) === "[object Set]", $ = (e) => typeof e == "function", ne = (e) => typeof e == "string", Ge = (e) => typeof e == "symbol", ee = (e) => e !== null && typeof e == "object", Ls = (e) => (ee(e) || $(e)) && $(e.then) && $(e.catch), js = Object.prototype.toString, Tn = (e) => js.call(e), Ao = (e) => Tn(e).slice(8, -1), $s = (e) => Tn(e) === "[object Object]", Cr = (e) => ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Nt = /* @__PURE__ */ wr(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), En = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Oo = /-(\w)/g, Te = En(
  (e) => e.replace(Oo, (t, n) => n ? n.toUpperCase() : "")
), Po = /\B([A-Z])/g, nt = En(
  (e) => e.replace(Po, "-$1").toLowerCase()
), An = En((e) => e.charAt(0).toUpperCase() + e.slice(1)), Kn = En(
  (e) => e ? `on${An(e)}` : ""
), _e = (e, t) => !Object.is(e, t), Wn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Bs = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Ro = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Mo = (e) => {
  const t = ne(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let zr;
const On = () => zr || (zr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Tr(e) {
  if (j(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = ne(r) ? Do(r) : Tr(r);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (ne(e) || ee(e))
    return e;
}
const Io = /;(?![^(]*\))/g, Fo = /:([^]+)/, No = /\/\*[^]*?\*\//g;
function Do(e) {
  const t = {};
  return e.replace(No, "").split(Io).forEach((n) => {
    if (n) {
      const r = n.split(Fo);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Er(e) {
  let t = "";
  if (ne(e))
    t = e;
  else if (j(e))
    for (let n = 0; n < e.length; n++) {
      const r = Er(e[n]);
      r && (t += r + " ");
    }
  else if (ee(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Lo = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", jo = /* @__PURE__ */ wr(Lo);
function Hs(e) {
  return !!e || e === "";
}
const Vs = (e) => !!(e && e.__v_isRef === !0), $o = (e) => ne(e) ? e : e == null ? "" : j(e) || ee(e) && (e.toString === js || !$(e.toString)) ? Vs(e) ? $o(e.value) : JSON.stringify(e, Ks, 2) : String(e), Ks = (e, t) => Vs(t) ? Ks(e, t.value) : _t(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], i) => (n[Un(r, i) + " =>"] = s, n),
    {}
  )
} : Ds(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Un(n))
} : Ge(t) ? Un(t) : ee(t) && !j(t) && !$s(t) ? String(t) : t, Un = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ge(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ge;
class Bo {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ge, !t && ge && (this.index = (ge.scopes || (ge.scopes = [])).push(
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
    ge = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    ge = this.parent;
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
function Ar() {
  return ge;
}
function Ws(e, t = !1) {
  ge && ge.cleanups.push(e);
}
let Q;
const kn = /* @__PURE__ */ new WeakSet();
class Us {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ge && ge.active && ge.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, kn.has(this) && (kn.delete(this), this.trigger()));
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
    this.flags |= 2, Gr(this), Gs(this);
    const t = Q, n = Pe;
    Q = this, Pe = !0;
    try {
      return this.fn();
    } finally {
      qs(this), Q = t, Pe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Rr(t);
      this.deps = this.depsTail = void 0, Gr(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? kn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
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
let ks = 0, Dt, Lt;
function zs(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Lt, Lt = e;
    return;
  }
  e.next = Dt, Dt = e;
}
function Or() {
  ks++;
}
function Pr() {
  if (--ks > 0)
    return;
  if (Lt) {
    let t = Lt;
    for (Lt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Dt; ) {
    let t = Dt;
    for (Dt = void 0; t; ) {
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
function Gs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function qs(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), Rr(r), Ho(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  e.deps = t, e.depsTail = n;
}
function sr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Js(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Js(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Vt))
    return;
  e.globalVersion = Vt;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !sr(e)) {
    e.flags &= -3;
    return;
  }
  const n = Q, r = Pe;
  Q = e, Pe = !0;
  try {
    Gs(e);
    const s = e.fn(e._value);
    (t.version === 0 || _e(s, e._value)) && (e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    Q = n, Pe = r, qs(e), e.flags &= -3;
  }
}
function Rr(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Rr(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ho(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Pe = !0;
const Ys = [];
function rt() {
  Ys.push(Pe), Pe = !1;
}
function st() {
  const e = Ys.pop();
  Pe = e === void 0 ? !0 : e;
}
function Gr(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Q;
    Q = void 0;
    try {
      t();
    } finally {
      Q = n;
    }
  }
}
let Vt = 0;
class Vo {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Pn {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!Q || !Pe || Q === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Q)
      n = this.activeLink = new Vo(Q, this), Q.deps ? (n.prevDep = Q.depsTail, Q.depsTail.nextDep = n, Q.depsTail = n) : Q.deps = Q.depsTail = n, Zs(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Q.depsTail, n.nextDep = void 0, Q.depsTail.nextDep = n, Q.depsTail = n, Q.deps === n && (Q.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Vt++, this.notify(t);
  }
  notify(t) {
    Or();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Pr();
    }
  }
}
function Zs(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Zs(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const hn = /* @__PURE__ */ new WeakMap(), dt = Symbol(
  ""
), ir = Symbol(
  ""
), Kt = Symbol(
  ""
);
function ae(e, t, n) {
  if (Pe && Q) {
    let r = hn.get(e);
    r || hn.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new Pn()), s.map = r, s.key = n), s.track();
  }
}
function Ue(e, t, n, r, s, i) {
  const o = hn.get(e);
  if (!o) {
    Vt++;
    return;
  }
  const l = (f) => {
    f && f.trigger();
  };
  if (Or(), t === "clear")
    o.forEach(l);
  else {
    const f = j(e), u = f && Cr(n);
    if (f && n === "length") {
      const c = Number(r);
      o.forEach((h, g) => {
        (g === "length" || g === Kt || !Ge(g) && g >= c) && l(h);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), u && l(o.get(Kt)), t) {
        case "add":
          f ? u && l(o.get("length")) : (l(o.get(dt)), _t(e) && l(o.get(ir)));
          break;
        case "delete":
          f || (l(o.get(dt)), _t(e) && l(o.get(ir)));
          break;
        case "set":
          _t(e) && l(o.get(dt));
          break;
      }
  }
  Pr();
}
function Ko(e, t) {
  const n = hn.get(e);
  return n && n.get(t);
}
function gt(e) {
  const t = G(e);
  return t === e ? t : (ae(t, "iterate", Kt), Oe(e) ? t : t.map(de));
}
function Rn(e) {
  return ae(e = G(e), "iterate", Kt), e;
}
const Wo = {
  __proto__: null,
  [Symbol.iterator]() {
    return zn(this, Symbol.iterator, de);
  },
  concat(...e) {
    return gt(this).concat(
      ...e.map((t) => j(t) ? gt(t) : t)
    );
  },
  entries() {
    return zn(this, "entries", (e) => (e[1] = de(e[1]), e));
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
    return Rt(this, "pop");
  },
  push(...e) {
    return Rt(this, "push", e);
  },
  reduce(e, ...t) {
    return qr(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return qr(this, "reduceRight", e, t);
  },
  shift() {
    return Rt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ke(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Rt(this, "splice", e);
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
    return Rt(this, "unshift", e);
  },
  values() {
    return zn(this, "values", de);
  }
};
function zn(e, t, n) {
  const r = Rn(e), s = r[t]();
  return r !== e && !Oe(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.value && (i.value = n(i.value)), i;
  }), s;
}
const Uo = Array.prototype;
function Ke(e, t, n, r, s, i) {
  const o = Rn(e), l = o !== e && !Oe(e), f = o[t];
  if (f !== Uo[t]) {
    const h = f.apply(e, i);
    return l ? de(h) : h;
  }
  let u = n;
  o !== e && (l ? u = function(h, g) {
    return n.call(this, de(h), g, e);
  } : n.length > 2 && (u = function(h, g) {
    return n.call(this, h, g, e);
  }));
  const c = f.call(o, u, r);
  return l && s ? s(c) : c;
}
function qr(e, t, n, r) {
  const s = Rn(e);
  let i = n;
  return s !== e && (Oe(e) ? n.length > 3 && (i = function(o, l, f) {
    return n.call(this, o, l, f, e);
  }) : i = function(o, l, f) {
    return n.call(this, o, de(l), f, e);
  }), s[t](i, ...r);
}
function Gn(e, t, n) {
  const r = G(e);
  ae(r, "iterate", Kt);
  const s = r[t](...n);
  return (s === -1 || s === !1) && Ir(n[0]) ? (n[0] = G(n[0]), r[t](...n)) : s;
}
function Rt(e, t, n = []) {
  rt(), Or();
  const r = G(e)[t].apply(e, n);
  return Pr(), st(), r;
}
const ko = /* @__PURE__ */ wr("__proto__,__v_isRef,__isVue"), Xs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ge)
);
function zo(e) {
  Ge(e) || (e = String(e));
  const t = G(this);
  return ae(t, "has", e), t.hasOwnProperty(e);
}
class Qs {
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
      return r === (s ? i ? ii : si : i ? ri : ni).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const o = j(t);
    if (!s) {
      let f;
      if (o && (f = Wo[n]))
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
      oe(t) ? t : r
    );
    return (Ge(n) ? Xs.has(n) : ko(n)) || (s || ae(t, "get", n), i) ? l : oe(l) ? o && Cr(n) ? l : l.value : ee(l) ? s ? In(l) : Mr(l) : l;
  }
}
class ei extends Qs {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let i = t[n];
    if (!this._isShallow) {
      const f = ht(i);
      if (!Oe(r) && !ht(r) && (i = G(i), r = G(r)), !j(t) && oe(i) && !oe(r))
        return f ? !1 : (i.value = r, !0);
    }
    const o = j(t) && Cr(n) ? Number(n) < t.length : J(t, n), l = Reflect.set(
      t,
      n,
      r,
      oe(t) ? t : s
    );
    return t === G(s) && (o ? _e(r, i) && Ue(t, "set", n, r) : Ue(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = J(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && Ue(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Ge(n) || !Xs.has(n)) && ae(t, "has", n), r;
  }
  ownKeys(t) {
    return ae(
      t,
      "iterate",
      j(t) ? "length" : dt
    ), Reflect.ownKeys(t);
  }
}
class ti extends Qs {
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
const Go = /* @__PURE__ */ new ei(), qo = /* @__PURE__ */ new ti(), Jo = /* @__PURE__ */ new ei(!0), Yo = /* @__PURE__ */ new ti(!0), or = (e) => e, tn = (e) => Reflect.getPrototypeOf(e);
function Zo(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, i = G(s), o = _t(i), l = e === "entries" || e === Symbol.iterator && o, f = e === "keys" && o, u = s[e](...r), c = n ? or : t ? lr : de;
    return !t && ae(
      i,
      "iterate",
      f ? ir : dt
    ), {
      // iterator protocol
      next() {
        const { value: h, done: g } = u.next();
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
function nn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Xo(e, t) {
  const n = {
    get(s) {
      const i = this.__v_raw, o = G(i), l = G(s);
      e || (_e(s, l) && ae(o, "get", s), ae(o, "get", l));
      const { has: f } = tn(o), u = t ? or : e ? lr : de;
      if (f.call(o, s))
        return u(i.get(s));
      if (f.call(o, l))
        return u(i.get(l));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && ae(G(s), "iterate", dt), Reflect.get(s, "size", s);
    },
    has(s) {
      const i = this.__v_raw, o = G(i), l = G(s);
      return e || (_e(s, l) && ae(o, "has", s), ae(o, "has", l)), s === l ? i.has(s) : i.has(s) || i.has(l);
    },
    forEach(s, i) {
      const o = this, l = o.__v_raw, f = G(l), u = t ? or : e ? lr : de;
      return !e && ae(f, "iterate", dt), l.forEach((c, h) => s.call(i, u(c), u(h), o));
    }
  };
  return se(
    n,
    e ? {
      add: nn("add"),
      set: nn("set"),
      delete: nn("delete"),
      clear: nn("clear")
    } : {
      add(s) {
        !t && !Oe(s) && !ht(s) && (s = G(s));
        const i = G(this);
        return tn(i).has.call(i, s) || (i.add(s), Ue(i, "add", s, s)), this;
      },
      set(s, i) {
        !t && !Oe(i) && !ht(i) && (i = G(i));
        const o = G(this), { has: l, get: f } = tn(o);
        let u = l.call(o, s);
        u || (s = G(s), u = l.call(o, s));
        const c = f.call(o, s);
        return o.set(s, i), u ? _e(i, c) && Ue(o, "set", s, i) : Ue(o, "add", s, i), this;
      },
      delete(s) {
        const i = G(this), { has: o, get: l } = tn(i);
        let f = o.call(i, s);
        f || (s = G(s), f = o.call(i, s)), l && l.call(i, s);
        const u = i.delete(s);
        return f && Ue(i, "delete", s, void 0), u;
      },
      clear() {
        const s = G(this), i = s.size !== 0, o = s.clear();
        return i && Ue(
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
    n[s] = Zo(s, e, t);
  }), n;
}
function Mn(e, t) {
  const n = Xo(e, t);
  return (r, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    J(n, s) && s in r ? n : r,
    s,
    i
  );
}
const Qo = {
  get: /* @__PURE__ */ Mn(!1, !1)
}, el = {
  get: /* @__PURE__ */ Mn(!1, !0)
}, tl = {
  get: /* @__PURE__ */ Mn(!0, !1)
}, nl = {
  get: /* @__PURE__ */ Mn(!0, !0)
}, ni = /* @__PURE__ */ new WeakMap(), ri = /* @__PURE__ */ new WeakMap(), si = /* @__PURE__ */ new WeakMap(), ii = /* @__PURE__ */ new WeakMap();
function rl(e) {
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
function sl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : rl(Ao(e));
}
function Mr(e) {
  return ht(e) ? e : Fn(
    e,
    !1,
    Go,
    Qo,
    ni
  );
}
function il(e) {
  return Fn(
    e,
    !1,
    Jo,
    el,
    ri
  );
}
function In(e) {
  return Fn(
    e,
    !0,
    qo,
    tl,
    si
  );
}
function mt(e) {
  return Fn(
    e,
    !0,
    Yo,
    nl,
    ii
  );
}
function Fn(e, t, n, r, s) {
  if (!ee(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = s.get(e);
  if (i)
    return i;
  const o = sl(e);
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? r : n
  );
  return s.set(e, l), l;
}
function wt(e) {
  return ht(e) ? wt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ht(e) {
  return !!(e && e.__v_isReadonly);
}
function Oe(e) {
  return !!(e && e.__v_isShallow);
}
function Ir(e) {
  return e ? !!e.__v_raw : !1;
}
function G(e) {
  const t = e && e.__v_raw;
  return t ? G(t) : e;
}
function ol(e) {
  return !J(e, "__v_skip") && Object.isExtensible(e) && Bs(e, "__v_skip", !0), e;
}
const de = (e) => ee(e) ? Mr(e) : e, lr = (e) => ee(e) ? In(e) : e;
function oe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Ae(e) {
  return oi(e, !1);
}
function Fr(e) {
  return oi(e, !0);
}
function oi(e, t) {
  return oe(e) ? e : new ll(e, t);
}
class ll {
  constructor(t, n) {
    this.dep = new Pn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : G(t), this._value = n ? t : de(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || Oe(t) || ht(t);
    t = r ? t : G(t), _e(t, n) && (this._rawValue = t, this._value = r ? t : de(t), this.dep.trigger());
  }
}
function Vc(e) {
  e.dep && e.dep.trigger();
}
function Nn(e) {
  return oe(e) ? e.value : e;
}
function et(e) {
  return $(e) ? e() : Nn(e);
}
const fl = {
  get: (e, t, n) => t === "__v_raw" ? e : Nn(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return oe(s) && !oe(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function li(e) {
  return wt(e) ? e : new Proxy(e, fl);
}
class cl {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Pn(), { get: r, set: s } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = r, this._set = s;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function fi(e) {
  return new cl(e);
}
class ul {
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
    return Ko(G(this._object), this._key);
  }
}
class al {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function dl(e, t, n) {
  return oe(e) ? e : $(e) ? new al(e) : ee(e) && arguments.length > 1 ? hl(e, t, n) : Ae(e);
}
function hl(e, t, n) {
  const r = e[t];
  return oe(r) ? r : new ul(e, t, n);
}
class pl {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Pn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Vt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Q !== this)
      return zs(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Js(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function gl(e, t, n = !1) {
  let r, s;
  return $(e) ? r = e : (r = e.get, s = e.set), new pl(r, s, n);
}
const rn = {}, pn = /* @__PURE__ */ new WeakMap();
let ut;
function ml(e, t = !1, n = ut) {
  if (n) {
    let r = pn.get(n);
    r || pn.set(n, r = []), r.push(e);
  }
}
function yl(e, t, n = q) {
  const { immediate: r, deep: s, once: i, scheduler: o, augmentJob: l, call: f } = n, u = (M) => s ? M : Oe(M) || s === !1 || s === 0 ? ke(M, 1) : ke(M);
  let c, h, g, m, S = !1, y = !1;
  if (oe(e) ? (h = () => e.value, S = Oe(e)) : wt(e) ? (h = () => u(e), S = !0) : j(e) ? (y = !0, S = e.some((M) => wt(M) || Oe(M)), h = () => e.map((M) => {
    if (oe(M))
      return M.value;
    if (wt(M))
      return u(M);
    if ($(M))
      return f ? f(M, 2) : M();
  })) : $(e) ? t ? h = f ? () => f(e, 2) : e : h = () => {
    if (g) {
      rt();
      try {
        g();
      } finally {
        st();
      }
    }
    const M = ut;
    ut = c;
    try {
      return f ? f(e, 3, [m]) : e(m);
    } finally {
      ut = M;
    }
  } : h = He, t && s) {
    const M = h, V = s === !0 ? 1 / 0 : s;
    h = () => ke(M(), V);
  }
  const D = Ar(), v = () => {
    c.stop(), D && D.active && Sr(D.effects, c);
  };
  if (i && t) {
    const M = t;
    t = (...V) => {
      M(...V), v();
    };
  }
  let C = y ? new Array(e.length).fill(rn) : rn;
  const R = (M) => {
    if (!(!(c.flags & 1) || !c.dirty && !M))
      if (t) {
        const V = c.run();
        if (s || S || (y ? V.some((U, H) => _e(U, C[H])) : _e(V, C))) {
          g && g();
          const U = ut;
          ut = c;
          try {
            const H = [
              V,
              // pass undefined as the old value when it's changed for the first time
              C === rn ? void 0 : y && C[0] === rn ? [] : C,
              m
            ];
            f ? f(t, 3, H) : (
              // @ts-expect-error
              t(...H)
            ), C = V;
          } finally {
            ut = U;
          }
        }
      } else
        c.run();
  };
  return l && l(R), c = new Us(h), c.scheduler = o ? () => o(R, !1) : R, m = (M) => ml(M, !1, c), g = c.onStop = () => {
    const M = pn.get(c);
    if (M) {
      if (f)
        f(M, 4);
      else
        for (const V of M) V();
      pn.delete(c);
    }
  }, t ? r ? R(!0) : C = c.run() : o ? o(R.bind(null, !0), !0) : c.run(), v.pause = c.pause.bind(c), v.resume = c.resume.bind(c), v.stop = v, v;
}
function ke(e, t = 1 / 0, n) {
  if (t <= 0 || !ee(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, oe(e))
    ke(e.value, t, n);
  else if (j(e))
    for (let r = 0; r < e.length; r++)
      ke(e[r], t, n);
  else if (Ds(e) || _t(e))
    e.forEach((r) => {
      ke(r, t, n);
    });
  else if ($s(e)) {
    for (const r in e)
      ke(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && ke(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function qt(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    Jt(s, t, n);
  }
}
function Me(e, t, n, r) {
  if ($(e)) {
    const s = qt(e, t, n, r);
    return s && Ls(s) && s.catch((i) => {
      Jt(i, t, n);
    }), s;
  }
  if (j(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(Me(e[i], t, n, r));
    return s;
  }
}
function Jt(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || q;
  if (t) {
    let l = t.parent;
    const f = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const c = l.ec;
      if (c) {
        for (let h = 0; h < c.length; h++)
          if (c[h](e, f, u) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      rt(), qt(i, null, 10, [
        e,
        f,
        u
      ]), st();
      return;
    }
  }
  vl(e, n, s, r, o);
}
function vl(e, t, n, r = !0, s = !1) {
  if (s)
    throw e;
  console.error(e);
}
const me = [];
let $e = -1;
const xt = [];
let Ze = null, yt = 0;
const ci = /* @__PURE__ */ Promise.resolve();
let gn = null;
function Dn(e) {
  const t = gn || ci;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function bl(e) {
  let t = $e + 1, n = me.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = me[r], i = Wt(s);
    i < e || i === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Nr(e) {
  if (!(e.flags & 1)) {
    const t = Wt(e), n = me[me.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Wt(n) ? me.push(e) : me.splice(bl(t), 0, e), e.flags |= 1, ui();
  }
}
function ui() {
  gn || (gn = ci.then(di));
}
function _l(e) {
  j(e) ? xt.push(...e) : Ze && e.id === -1 ? Ze.splice(yt + 1, 0, e) : e.flags & 1 || (xt.push(e), e.flags |= 1), ui();
}
function Jr(e, t, n = $e + 1) {
  for (; n < me.length; n++) {
    const r = me[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      me.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function ai(e) {
  if (xt.length) {
    const t = [...new Set(xt)].sort(
      (n, r) => Wt(n) - Wt(r)
    );
    if (xt.length = 0, Ze) {
      Ze.push(...t);
      return;
    }
    for (Ze = t, yt = 0; yt < Ze.length; yt++) {
      const n = Ze[yt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Ze = null, yt = 0;
  }
}
const Wt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function di(e) {
  try {
    for ($e = 0; $e < me.length; $e++) {
      const t = me[$e];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), qt(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; $e < me.length; $e++) {
      const t = me[$e];
      t && (t.flags &= -2);
    }
    $e = -1, me.length = 0, ai(), gn = null, (me.length || xt.length) && di();
  }
}
let ce = null, hi = null;
function mn(e) {
  const t = ce;
  return ce = e, hi = e && e.type.__scopeId || null, t;
}
function wl(e, t = ce, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && cs(-1);
    const i = mn(t);
    let o;
    try {
      o = e(...s);
    } finally {
      mn(i), r._d && cs(1);
    }
    return o;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Kc(e, t) {
  if (ce === null)
    return e;
  const n = Hn(ce), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, o, l, f = q] = t[s];
    i && ($(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && ke(o), r.push({
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
function lt(e, t, n, r) {
  const s = e.dirs, i = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    i && (l.oldValue = i[o].value);
    let f = l.dir[r];
    f && (rt(), Me(f, n, 8, [
      e.el,
      l,
      e,
      t
    ]), st());
  }
}
const pi = Symbol("_vte"), gi = (e) => e.__isTeleport, jt = (e) => e && (e.disabled || e.disabled === ""), Yr = (e) => e && (e.defer || e.defer === ""), Zr = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Xr = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, fr = (e, t) => {
  const n = e && e.to;
  return ne(n) ? t ? t(n) : null : n;
}, mi = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, s, i, o, l, f, u) {
    const {
      mc: c,
      pc: h,
      pbc: g,
      o: { insert: m, querySelector: S, createText: y, createComment: D }
    } = u, v = jt(t.props);
    let { shapeFlag: C, children: R, dynamicChildren: M } = t;
    if (e == null) {
      const V = t.el = y(""), U = t.anchor = y("");
      m(V, n, r), m(U, n, r);
      const H = (I, K) => {
        C & 16 && (s && s.isCE && (s.ce._teleportTarget = I), c(
          R,
          I,
          K,
          s,
          i,
          o,
          l,
          f
        ));
      }, z = () => {
        const I = t.target = fr(t.props, S), K = yi(I, t, y, m);
        I && (o !== "svg" && Zr(I) ? o = "svg" : o !== "mathml" && Xr(I) && (o = "mathml"), v || (H(I, K), cn(t, !1)));
      };
      v && (H(n, U), cn(t, !0)), Yr(t.props) ? pe(() => {
        z(), t.el.__isMounted = !0;
      }, i) : z();
    } else {
      if (Yr(t.props) && !e.el.__isMounted) {
        pe(() => {
          mi.process(
            e,
            t,
            n,
            r,
            s,
            i,
            o,
            l,
            f,
            u
          ), delete e.el.__isMounted;
        }, i);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const V = t.anchor = e.anchor, U = t.target = e.target, H = t.targetAnchor = e.targetAnchor, z = jt(e.props), I = z ? n : U, K = z ? V : H;
      if (o === "svg" || Zr(U) ? o = "svg" : (o === "mathml" || Xr(U)) && (o = "mathml"), M ? (g(
        e.dynamicChildren,
        M,
        I,
        s,
        i,
        o,
        l
      ), Br(e, t, !0)) : f || h(
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
        z ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : sn(
          t,
          n,
          V,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const F = t.target = fr(
          t.props,
          S
        );
        F && sn(
          t,
          F,
          null,
          u,
          0
        );
      } else z && sn(
        t,
        U,
        H,
        u,
        1
      );
      cn(t, v);
    }
  },
  remove(e, t, n, { um: r, o: { remove: s } }, i) {
    const {
      shapeFlag: o,
      children: l,
      anchor: f,
      targetStart: u,
      targetAnchor: c,
      target: h,
      props: g
    } = e;
    if (h && (s(u), s(c)), i && s(f), o & 16) {
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
  move: sn,
  hydrate: xl
};
function sn(e, t, n, { o: { insert: r }, m: s }, i = 2) {
  i === 0 && r(e.targetAnchor, t, n);
  const { el: o, anchor: l, shapeFlag: f, children: u, props: c } = e, h = i === 2;
  if (h && r(o, t, n), (!h || jt(c)) && f & 16)
    for (let g = 0; g < u.length; g++)
      s(
        u[g],
        t,
        n,
        2
      );
  h && r(l, t, n);
}
function xl(e, t, n, r, s, i, {
  o: { nextSibling: o, parentNode: l, querySelector: f, insert: u, createText: c }
}, h) {
  const g = t.target = fr(
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
        t.targetAnchor || yi(g, t, c, u), h(
          S && o(S),
          t,
          g,
          n,
          r,
          s,
          i
        );
      }
    cn(t, m);
  }
  return t.anchor && o(t.anchor);
}
const Wc = mi;
function cn(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, s;
    for (t ? (r = e.el, s = e.anchor) : (r = e.targetStart, s = e.targetAnchor); r && r !== s; )
      r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function yi(e, t, n, r) {
  const s = t.targetStart = n(""), i = t.targetAnchor = n("");
  return s[pi] = i, e && (r(s, e), r(i, e)), i;
}
const Xe = Symbol("_leaveCb"), on = Symbol("_enterCb");
function vi() {
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
const Ee = [Function, Array], bi = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ee,
  onEnter: Ee,
  onAfterEnter: Ee,
  onEnterCancelled: Ee,
  // leave
  onBeforeLeave: Ee,
  onLeave: Ee,
  onAfterLeave: Ee,
  onLeaveCancelled: Ee,
  // appear
  onBeforeAppear: Ee,
  onAppear: Ee,
  onAfterAppear: Ee,
  onAppearCancelled: Ee
}, _i = (e) => {
  const t = e.subTree;
  return t.component ? _i(t.component) : t;
}, Sl = {
  name: "BaseTransition",
  props: bi,
  setup(e, { slots: t }) {
    const n = Zt(), r = vi();
    return () => {
      const s = t.default && Dr(t.default(), !0);
      if (!s || !s.length)
        return;
      const i = wi(s), o = G(e), { mode: l } = o;
      if (r.isLeaving)
        return qn(i);
      const f = Qr(i);
      if (!f)
        return qn(i);
      let u = Ut(
        f,
        o,
        r,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => u = h
      );
      f.type !== ye && pt(f, u);
      let c = n.subTree && Qr(n.subTree);
      if (c && c.type !== ye && !at(f, c) && _i(n).type !== ye) {
        let h = Ut(
          c,
          o,
          r,
          n
        );
        if (pt(c, h), l === "out-in" && f.type !== ye)
          return r.isLeaving = !0, h.afterLeave = () => {
            r.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, c = void 0;
          }, qn(i);
        l === "in-out" && f.type !== ye ? h.delayLeave = (g, m, S) => {
          const y = xi(
            r,
            c
          );
          y[String(c.key)] = c, g[Xe] = () => {
            m(), g[Xe] = void 0, delete u.delayedLeave, c = void 0;
          }, u.delayedLeave = () => {
            S(), delete u.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return i;
    };
  }
};
function wi(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== ye) {
        t = n;
        break;
      }
  }
  return t;
}
const Cl = Sl;
function xi(e, t) {
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
    onEnter: u,
    onAfterEnter: c,
    onEnterCancelled: h,
    onBeforeLeave: g,
    onLeave: m,
    onAfterLeave: S,
    onLeaveCancelled: y,
    onBeforeAppear: D,
    onAppear: v,
    onAfterAppear: C,
    onAppearCancelled: R
  } = t, M = String(e.key), V = xi(n, e), U = (I, K) => {
    I && Me(
      I,
      r,
      9,
      K
    );
  }, H = (I, K) => {
    const F = K[1];
    U(I, K), j(I) ? I.every((A) => A.length <= 1) && F() : I.length <= 1 && F();
  }, z = {
    mode: o,
    persisted: l,
    beforeEnter(I) {
      let K = f;
      if (!n.isMounted)
        if (i)
          K = D || f;
        else
          return;
      I[Xe] && I[Xe](
        !0
        /* cancelled */
      );
      const F = V[M];
      F && at(e, F) && F.el[Xe] && F.el[Xe](), U(K, [I]);
    },
    enter(I) {
      let K = u, F = c, A = h;
      if (!n.isMounted)
        if (i)
          K = v || u, F = C || c, A = R || h;
        else
          return;
      let W = !1;
      const ue = I[on] = (Ve) => {
        W || (W = !0, Ve ? U(A, [I]) : U(F, [I]), z.delayedLeave && z.delayedLeave(), I[on] = void 0);
      };
      K ? H(K, [I, ue]) : ue();
    },
    leave(I, K) {
      const F = String(e.key);
      if (I[on] && I[on](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return K();
      U(g, [I]);
      let A = !1;
      const W = I[Xe] = (ue) => {
        A || (A = !0, K(), ue ? U(y, [I]) : U(S, [I]), I[Xe] = void 0, V[F] === e && delete V[F]);
      };
      V[F] = e, m ? H(m, [I, W]) : W();
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
  if (Yt(e))
    return e = tt(e), e.children = null, e;
}
function Qr(e) {
  if (!Yt(e))
    return gi(e.type) && e.children ? wi(e.children) : e;
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
function Dr(e, t = !1, n) {
  let r = [], s = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === we ? (o.patchFlag & 128 && s++, r = r.concat(
      Dr(o.children, t, l)
    )) : (t || o.type !== ye) && r.push(l != null ? tt(o, { key: l }) : o);
  }
  if (s > 1)
    for (let i = 0; i < r.length; i++)
      r[i].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Lr(e, t) {
  return $(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    se({ name: e.name }, t, { setup: e })
  ) : e;
}
function jr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function yn(e, t, n, r, s = !1) {
  if (j(e)) {
    e.forEach(
      (S, y) => yn(
        S,
        t && (j(t) ? t[y] : t),
        n,
        r,
        s
      )
    );
    return;
  }
  if (St(r) && !s) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && yn(e, t, n, r.component.subTree);
    return;
  }
  const i = r.shapeFlag & 4 ? Hn(r.component) : r.el, o = s ? null : i, { i: l, r: f } = e, u = t && t.r, c = l.refs === q ? l.refs = {} : l.refs, h = l.setupState, g = G(h), m = h === q ? () => !1 : (S) => J(g, S);
  if (u != null && u !== f && (ne(u) ? (c[u] = null, m(u) && (h[u] = null)) : oe(u) && (u.value = null)), $(f))
    qt(f, l, 12, [o, c]);
  else {
    const S = ne(f), y = oe(f);
    if (S || y) {
      const D = () => {
        if (e.f) {
          const v = S ? m(f) ? h[f] : c[f] : f.value;
          s ? j(v) && Sr(v, i) : j(v) ? v.includes(i) || v.push(i) : S ? (c[f] = [i], m(f) && (h[f] = c[f])) : (f.value = [i], e.k && (c[e.k] = f.value));
        } else S ? (c[f] = o, m(f) && (h[f] = o)) : y && (f.value = o, e.k && (c[e.k] = o));
      };
      o ? (D.id = -1, pe(D, n)) : D();
    }
  }
}
const es = (e) => e.nodeType === 8;
On().requestIdleCallback;
On().cancelIdleCallback;
function Tl(e, t) {
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
const St = (e) => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Uc(e) {
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
  let u = null, c, h = 0;
  const g = () => (h++, u = null, m()), m = () => {
    let S;
    return u || (S = u = t().catch((y) => {
      if (y = y instanceof Error ? y : new Error(String(y)), f)
        return new Promise((D, v) => {
          f(y, () => D(g()), () => v(y), h + 1);
        });
      throw y;
    }).then((y) => S !== u && u ? u : (y && (y.__esModule || y[Symbol.toStringTag] === "Module") && (y = y.default), c = y, y)));
  };
  return /* @__PURE__ */ Lr({
    name: "AsyncComponentWrapper",
    __asyncLoader: m,
    __asyncHydrate(S, y, D) {
      const v = i ? () => {
        const C = i(
          D,
          (R) => Tl(S, R)
        );
        C && (y.bum || (y.bum = [])).push(C);
      } : D;
      c ? v() : m().then(() => !y.isUnmounted && v());
    },
    get __asyncResolved() {
      return c;
    },
    setup() {
      const S = fe;
      if (jr(S), c)
        return () => Jn(c, S);
      const y = (R) => {
        u = null, Jt(
          R,
          S,
          13,
          !r
        );
      };
      if (l && S.suspense || Tt)
        return m().then((R) => () => Jn(R, S)).catch((R) => (y(R), () => r ? re(r, {
          error: R
        }) : null));
      const D = Ae(!1), v = Ae(), C = Ae(!!s);
      return s && setTimeout(() => {
        C.value = !1;
      }, s), o != null && setTimeout(() => {
        if (!D.value && !v.value) {
          const R = new Error(
            `Async component timed out after ${o}ms.`
          );
          y(R), v.value = R;
        }
      }, o), m().then(() => {
        D.value = !0, S.parent && Yt(S.parent.vnode) && S.parent.update();
      }).catch((R) => {
        y(R), v.value = R;
      }), () => {
        if (D.value && c)
          return Jn(c, S);
        if (v.value && r)
          return re(r, {
            error: v.value
          });
        if (n && !C.value)
          return re(n);
      };
    }
  });
}
function Jn(e, t) {
  const { ref: n, props: r, children: s, ce: i } = t.vnode, o = re(e, r, s);
  return o.ref = n, o.ce = i, delete t.vnode.ce, o;
}
const Yt = (e) => e.type.__isKeepAlive;
function El(e, t) {
  Si(e, "a", t);
}
function Al(e, t) {
  Si(e, "da", t);
}
function Si(e, t, n = fe) {
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
      Yt(s.parent.vnode) && Ol(r, t, n, s), s = s.parent;
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
    Sr(r[t], s);
  }, n);
}
function Ln(e, t, n = fe, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      rt();
      const l = Xt(n), f = Me(t, n, e, o);
      return l(), st(), f;
    });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const qe = (e) => (t, n = fe) => {
  (!Tt || e === "sp") && Ln(e, (...r) => t(...r), n);
}, Pl = qe("bm"), jn = qe("m"), Rl = qe(
  "bu"
), Ci = qe("u"), Ti = qe(
  "bum"
), Ei = qe("um"), Ml = qe(
  "sp"
), Il = qe("rtg"), Fl = qe("rtc");
function Nl(e, t = fe) {
  Ln("ec", e, t);
}
const Ai = "components";
function kc(e, t) {
  return Pi(Ai, e, !0, t) || e;
}
const Oi = Symbol.for("v-ndc");
function zc(e) {
  return ne(e) ? Pi(Ai, e, !1) || e : e || Oi;
}
function Pi(e, t, n = !0, r = !1) {
  const s = ce || fe;
  if (s) {
    const i = s.type;
    {
      const l = Sf(
        i,
        !1
      );
      if (l && (l === t || l === Te(t) || l === An(Te(t))))
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
  return e && (e[t] || e[Te(t)] || e[An(Te(t))]);
}
function Gc(e, t, n, r) {
  let s;
  const i = n, o = j(e);
  if (o || ne(e)) {
    const l = o && wt(e);
    let f = !1;
    l && (f = !Oe(e), e = Rn(e)), s = new Array(e.length);
    for (let u = 0, c = e.length; u < c; u++)
      s[u] = t(
        f ? de(e[u]) : e[u],
        u,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let l = 0; l < e; l++)
      s[l] = t(l + 1, l, void 0, i);
  } else if (ee(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (l, f) => t(l, f, void 0, i)
      );
    else {
      const l = Object.keys(e);
      s = new Array(l.length);
      for (let f = 0, u = l.length; f < u; f++) {
        const c = l[f];
        s[f] = t(e[c], c, f, i);
      }
    }
  else
    s = [];
  return s;
}
function qc(e, t, n = {}, r, s) {
  if (ce.ce || ce.parent && St(ce.parent) && ce.parent.ce)
    return hr(), pr(
      we,
      null,
      [re("slot", n, r)],
      64
    );
  let i = e[t];
  i && i._c && (i._d = !1), hr();
  const o = i && Ri(i(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  o && o.key, f = pr(
    we,
    {
      key: (l && !Ge(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      ""
    },
    o || [],
    o && e._ === 1 ? 64 : -2
  );
  return f.scopeId && (f.slotScopeIds = [f.scopeId + "-s"]), i && i._c && (i._d = !0), f;
}
function Ri(e) {
  return e.some((t) => zt(t) ? !(t.type === ye || t.type === we && !Ri(t.children)) : !0) ? e : null;
}
const cr = (e) => e ? Zi(e) ? Hn(e) : cr(e.parent) : null, $t = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ se(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => cr(e.parent),
    $root: (e) => cr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ii(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Nr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Dn.bind(e.proxy)),
    $watch: (e) => rf.bind(e)
  })
), Yn = (e, t) => e !== q && !e.__isScriptSetup && J(e, t), Dl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: i, accessCache: o, type: l, appContext: f } = e;
    let u;
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
        if (s !== q && J(s, t))
          return o[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && J(u, t)
        )
          return o[t] = 3, i[t];
        if (n !== q && J(n, t))
          return o[t] = 4, n[t];
        ur && (o[t] = 0);
      }
    }
    const c = $t[t];
    let h, g;
    if (c)
      return t === "$attrs" && ae(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (h = l.__cssModules) && (h = h[t])
    )
      return h;
    if (n !== q && J(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      g = f.config.globalProperties, J(g, t)
    )
      return g[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: i } = e;
    return Yn(s, t) ? (s[t] = n, !0) : r !== q && J(r, t) ? (r[t] = n, !0) : J(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: i }
  }, o) {
    let l;
    return !!n[o] || e !== q && J(e, o) || Yn(t, o) || (l = i[0]) && J(l, o) || J(r, o) || J($t, o) || J(s.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : J(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function vn(e) {
  return j(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Jc(e, t) {
  return !e || !t ? e || t : j(e) && j(t) ? e.concat(t) : se({}, vn(e), vn(t));
}
let ur = !0;
function Ll(e) {
  const t = Ii(e), n = e.proxy, r = e.ctx;
  ur = !1, t.beforeCreate && ns(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: i,
    methods: o,
    watch: l,
    provide: f,
    inject: u,
    // lifecycle
    created: c,
    beforeMount: h,
    mounted: g,
    beforeUpdate: m,
    updated: S,
    activated: y,
    deactivated: D,
    beforeDestroy: v,
    beforeUnmount: C,
    destroyed: R,
    unmounted: M,
    render: V,
    renderTracked: U,
    renderTriggered: H,
    errorCaptured: z,
    serverPrefetch: I,
    // public API
    expose: K,
    inheritAttrs: F,
    // assets
    components: A,
    directives: W,
    filters: ue
  } = t;
  if (u && jl(u, r, null), o)
    for (const te in o) {
      const Z = o[te];
      $(Z) && (r[te] = Z.bind(n));
    }
  if (s) {
    const te = s.call(n, n);
    ee(te) && (e.data = Mr(te));
  }
  if (ur = !0, i)
    for (const te in i) {
      const Z = i[te], it = $(Z) ? Z.bind(n, n) : $(Z.get) ? Z.get.bind(n, n) : He, Qt = !$(Z) && $(Z.set) ? Z.set.bind(n) : He, ot = ie({
        get: it,
        set: Qt
      });
      Object.defineProperty(r, te, {
        enumerable: !0,
        configurable: !0,
        get: () => ot.value,
        set: (Ie) => ot.value = Ie
      });
    }
  if (l)
    for (const te in l)
      Mi(l[te], r, n, te);
  if (f) {
    const te = $(f) ? f.call(n) : f;
    Reflect.ownKeys(te).forEach((Z) => {
      Wl(Z, te[Z]);
    });
  }
  c && ns(c, e, "c");
  function le(te, Z) {
    j(Z) ? Z.forEach((it) => te(it.bind(n))) : Z && te(Z.bind(n));
  }
  if (le(Pl, h), le(jn, g), le(Rl, m), le(Ci, S), le(El, y), le(Al, D), le(Nl, z), le(Fl, U), le(Il, H), le(Ti, C), le(Ei, M), le(Ml, I), j(K))
    if (K.length) {
      const te = e.exposed || (e.exposed = {});
      K.forEach((Z) => {
        Object.defineProperty(te, Z, {
          get: () => n[Z],
          set: (it) => n[Z] = it
        });
      });
    } else e.exposed || (e.exposed = {});
  V && e.render === He && (e.render = V), F != null && (e.inheritAttrs = F), A && (e.components = A), W && (e.directives = W), I && jr(e);
}
function jl(e, t, n = He) {
  j(e) && (e = ar(e));
  for (const r in e) {
    const s = e[r];
    let i;
    ee(s) ? "default" in s ? i = Bt(
      s.from || r,
      s.default,
      !0
    ) : i = Bt(s.from || r) : i = Bt(s), oe(i) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[r] = i;
  }
}
function ns(e, t, n) {
  Me(
    j(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Mi(e, t, n, r) {
  let s = r.includes(".") ? Ui(n, r) : () => n[r];
  if (ne(e)) {
    const i = t[e];
    $(i) && Re(s, i);
  } else if ($(e))
    Re(s, e.bind(n));
  else if (ee(e))
    if (j(e))
      e.forEach((i) => Mi(i, t, n, r));
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
    (u) => bn(f, u, o, !0)
  ), bn(f, t, o)), ee(t) && i.set(t, f), f;
}
function bn(e, t, n, r = !1) {
  const { mixins: s, extends: i } = t;
  i && bn(e, i, n, !0), s && s.forEach(
    (o) => bn(e, o, n, !0)
  );
  for (const o in t)
    if (!(r && o === "expose")) {
      const l = $l[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const $l = {
  data: rs,
  props: ss,
  emits: ss,
  // objects
  methods: Ft,
  computed: Ft,
  // lifecycle
  beforeCreate: he,
  created: he,
  beforeMount: he,
  mounted: he,
  beforeUpdate: he,
  updated: he,
  beforeDestroy: he,
  beforeUnmount: he,
  destroyed: he,
  unmounted: he,
  activated: he,
  deactivated: he,
  errorCaptured: he,
  serverPrefetch: he,
  // assets
  components: Ft,
  directives: Ft,
  // watch
  watch: Hl,
  // provide / inject
  provide: rs,
  inject: Bl
};
function rs(e, t) {
  return t ? e ? function() {
    return se(
      $(e) ? e.call(this, this) : e,
      $(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Bl(e, t) {
  return Ft(ar(e), ar(t));
}
function ar(e) {
  if (j(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function he(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ft(e, t) {
  return e ? se(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ss(e, t) {
  return e ? j(e) && j(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : se(
    /* @__PURE__ */ Object.create(null),
    vn(e),
    vn(t ?? {})
  ) : t;
}
function Hl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = se(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = he(e[r], t[r]);
  return n;
}
function Fi() {
  return {
    app: null,
    config: {
      isNativeTag: To,
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
let Vl = 0;
function Kl(e, t) {
  return function(r, s = null) {
    $(r) || (r = se({}, r)), s != null && !ee(s) && (s = null);
    const i = Fi(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const u = i.app = {
      _uid: Vl++,
      _component: r,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: Tf,
      get config() {
        return i.config;
      },
      set config(c) {
      },
      use(c, ...h) {
        return o.has(c) || (c && $(c.install) ? (o.add(c), c.install(u, ...h)) : $(c) && (o.add(c), c(u, ...h))), u;
      },
      mixin(c) {
        return i.mixins.includes(c) || i.mixins.push(c), u;
      },
      component(c, h) {
        return h ? (i.components[c] = h, u) : i.components[c];
      },
      directive(c, h) {
        return h ? (i.directives[c] = h, u) : i.directives[c];
      },
      mount(c, h, g) {
        if (!f) {
          const m = u._ceVNode || re(r, s);
          return m.appContext = i, g === !0 ? g = "svg" : g === !1 && (g = void 0), e(m, c, g), f = !0, u._container = c, c.__vue_app__ = u, Hn(m.component);
        }
      },
      onUnmount(c) {
        l.push(c);
      },
      unmount() {
        f && (Me(
          l,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(c, h) {
        return i.provides[c] = h, u;
      },
      runWithContext(c) {
        const h = Ct;
        Ct = u;
        try {
          return c();
        } finally {
          Ct = h;
        }
      }
    };
    return u;
  };
}
let Ct = null;
function Wl(e, t) {
  if (fe) {
    let n = fe.provides;
    const r = fe.parent && fe.parent.provides;
    r === n && (n = fe.provides = Object.create(r)), n[e] = t;
  }
}
function Bt(e, t, n = !1) {
  const r = fe || ce;
  if (r || Ct) {
    const s = Ct ? Ct._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && $(t) ? t.call(r && r.proxy) : t;
  }
}
const Ni = {}, Di = () => Object.create(Ni), Li = (e) => Object.getPrototypeOf(e) === Ni;
function Ul(e, t, n, r = !1) {
  const s = {}, i = Di();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ji(e, t, s, i);
  for (const o in e.propsOptions[0])
    o in s || (s[o] = void 0);
  n ? e.props = r ? s : il(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i;
}
function kl(e, t, n, r) {
  const {
    props: s,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = G(s), [f] = e.propsOptions;
  let u = !1;
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
            m !== i[g] && (i[g] = m, u = !0);
          else {
            const S = Te(g);
            s[S] = dr(
              f,
              l,
              S,
              m,
              e,
              !1
            );
          }
        else
          m !== i[g] && (i[g] = m, u = !0);
      }
    }
  } else {
    ji(e, t, s, i) && (u = !0);
    let c;
    for (const h in l)
      (!t || // for camelCase
      !J(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = nt(h)) === h || !J(t, c))) && (f ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[c] !== void 0) && (s[h] = dr(
        f,
        l,
        h,
        void 0,
        e,
        !0
      )) : delete s[h]);
    if (i !== l)
      for (const h in i)
        (!t || !J(t, h)) && (delete i[h], u = !0);
  }
  u && Ue(e.attrs, "set", "");
}
function ji(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let f in t) {
      if (Nt(f))
        continue;
      const u = t[f];
      let c;
      s && J(s, c = Te(f)) ? !i || !i.includes(c) ? n[c] = u : (l || (l = {}))[c] = u : $n(e.emitsOptions, f) || (!(f in r) || u !== r[f]) && (r[f] = u, o = !0);
    }
  if (i) {
    const f = G(n), u = l || q;
    for (let c = 0; c < i.length; c++) {
      const h = i[c];
      n[h] = dr(
        s,
        f,
        h,
        u[h],
        e,
        !J(u, h)
      );
    }
  }
  return o;
}
function dr(e, t, n, r, s, i) {
  const o = e[n];
  if (o != null) {
    const l = J(o, "default");
    if (l && r === void 0) {
      const f = o.default;
      if (o.type !== Function && !o.skipFactory && $(f)) {
        const { propsDefaults: u } = s;
        if (n in u)
          r = u[n];
        else {
          const c = Xt(s);
          r = u[n] = f.call(
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
    ] && (r === "" || r === nt(n)) && (r = !0));
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
      se(o, g), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!i && !f)
    return ee(e) && r.set(e, bt), bt;
  if (j(i))
    for (let c = 0; c < i.length; c++) {
      const h = Te(i[c]);
      is(h) && (o[h] = q);
    }
  else if (i)
    for (const c in i) {
      const h = Te(c);
      if (is(h)) {
        const g = i[c], m = o[h] = j(g) || $(g) ? { type: g } : se({}, g), S = m.type;
        let y = !1, D = !0;
        if (j(S))
          for (let v = 0; v < S.length; ++v) {
            const C = S[v], R = $(C) && C.name;
            if (R === "Boolean") {
              y = !0;
              break;
            } else R === "String" && (D = !1);
          }
        else
          y = $(S) && S.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = y, m[
          1
          /* shouldCastTrue */
        ] = D, (y || J(m, "default")) && l.push(h);
      }
    }
  const u = [o, l];
  return ee(e) && r.set(e, u), u;
}
function is(e) {
  return e[0] !== "$" && !Nt(e);
}
const Bi = (e) => e[0] === "_" || e === "$stable", $r = (e) => j(e) ? e.map(Be) : [Be(e)], Gl = (e, t, n) => {
  if (t._n)
    return t;
  const r = wl((...s) => $r(t(...s)), n);
  return r._c = !1, r;
}, Hi = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (Bi(s)) continue;
    const i = e[s];
    if ($(i))
      t[s] = Gl(s, i, r);
    else if (i != null) {
      const o = $r(i);
      t[s] = () => o;
    }
  }
}, Vi = (e, t) => {
  const n = $r(t);
  e.slots.default = () => n;
}, Ki = (e, t, n) => {
  for (const r in t)
    (n || r !== "_") && (e[r] = t[r]);
}, ql = (e, t, n) => {
  const r = e.slots = Di();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (Ki(r, t, n), n && Bs(r, "_", s, !0)) : Hi(t, r);
  } else t && Vi(e, t);
}, Jl = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let i = !0, o = q;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : Ki(s, t, n) : (i = !t.$stable, Hi(t, s)), o = t;
  } else t && (Vi(e, t), o = { default: 1 });
  if (i)
    for (const l in s)
      !Bi(l) && o[l] == null && delete s[l];
}, pe = uf;
function Yl(e) {
  return Zl(e);
}
function Zl(e, t) {
  const n = On();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: s,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: f,
    setText: u,
    setElementText: c,
    parentNode: h,
    nextSibling: g,
    setScopeId: m = He,
    insertStaticContent: S
  } = e, y = (a, d, p, w = null, b = null, _ = null, O = void 0, E = null, T = !!d.dynamicChildren) => {
    if (a === d)
      return;
    a && !at(a, d) && (w = en(a), Ie(a, b, _, !0), a = null), d.patchFlag === -2 && (T = !1, d.dynamicChildren = null);
    const { type: x, ref: L, shapeFlag: P } = d;
    switch (x) {
      case Bn:
        D(a, d, p, w);
        break;
      case ye:
        v(a, d, p, w);
        break;
      case un:
        a == null && C(d, p, w, O);
        break;
      case we:
        A(
          a,
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
        P & 1 ? V(
          a,
          d,
          p,
          w,
          b,
          _,
          O,
          E,
          T
        ) : P & 6 ? W(
          a,
          d,
          p,
          w,
          b,
          _,
          O,
          E,
          T
        ) : (P & 64 || P & 128) && x.process(
          a,
          d,
          p,
          w,
          b,
          _,
          O,
          E,
          T,
          Ot
        );
    }
    L != null && b && yn(L, a && a.ref, _, d || a, !d);
  }, D = (a, d, p, w) => {
    if (a == null)
      r(
        d.el = l(d.children),
        p,
        w
      );
    else {
      const b = d.el = a.el;
      d.children !== a.children && u(b, d.children);
    }
  }, v = (a, d, p, w) => {
    a == null ? r(
      d.el = f(d.children || ""),
      p,
      w
    ) : d.el = a.el;
  }, C = (a, d, p, w) => {
    [a.el, a.anchor] = S(
      a.children,
      d,
      p,
      w,
      a.el,
      a.anchor
    );
  }, R = ({ el: a, anchor: d }, p, w) => {
    let b;
    for (; a && a !== d; )
      b = g(a), r(a, p, w), a = b;
    r(d, p, w);
  }, M = ({ el: a, anchor: d }) => {
    let p;
    for (; a && a !== d; )
      p = g(a), s(a), a = p;
    s(d);
  }, V = (a, d, p, w, b, _, O, E, T) => {
    d.type === "svg" ? O = "svg" : d.type === "math" && (O = "mathml"), a == null ? U(
      d,
      p,
      w,
      b,
      _,
      O,
      E,
      T
    ) : I(
      a,
      d,
      b,
      _,
      O,
      E,
      T
    );
  }, U = (a, d, p, w, b, _, O, E) => {
    let T, x;
    const { props: L, shapeFlag: P, transition: N, dirs: B } = a;
    if (T = a.el = o(
      a.type,
      _,
      L && L.is,
      L
    ), P & 8 ? c(T, a.children) : P & 16 && z(
      a.children,
      T,
      null,
      w,
      b,
      Zn(a, _),
      O,
      E
    ), B && lt(a, null, w, "created"), H(T, a, a.scopeId, O, w), L) {
      for (const X in L)
        X !== "value" && !Nt(X) && i(T, X, null, L[X], _, w);
      "value" in L && i(T, "value", null, L.value, _), (x = L.onVnodeBeforeMount) && Le(x, w, a);
    }
    B && lt(a, null, w, "beforeMount");
    const k = Xl(b, N);
    k && N.beforeEnter(T), r(T, d, p), ((x = L && L.onVnodeMounted) || k || B) && pe(() => {
      x && Le(x, w, a), k && N.enter(T), B && lt(a, null, w, "mounted");
    }, b);
  }, H = (a, d, p, w, b) => {
    if (p && m(a, p), w)
      for (let _ = 0; _ < w.length; _++)
        m(a, w[_]);
    if (b) {
      let _ = b.subTree;
      if (d === _ || Gi(_.type) && (_.ssContent === d || _.ssFallback === d)) {
        const O = b.vnode;
        H(
          a,
          O,
          O.scopeId,
          O.slotScopeIds,
          b.parent
        );
      }
    }
  }, z = (a, d, p, w, b, _, O, E, T = 0) => {
    for (let x = T; x < a.length; x++) {
      const L = a[x] = E ? Qe(a[x]) : Be(a[x]);
      y(
        null,
        L,
        d,
        p,
        w,
        b,
        _,
        O,
        E
      );
    }
  }, I = (a, d, p, w, b, _, O) => {
    const E = d.el = a.el;
    let { patchFlag: T, dynamicChildren: x, dirs: L } = d;
    T |= a.patchFlag & 16;
    const P = a.props || q, N = d.props || q;
    let B;
    if (p && ft(p, !1), (B = N.onVnodeBeforeUpdate) && Le(B, p, d, a), L && lt(d, a, p, "beforeUpdate"), p && ft(p, !0), (P.innerHTML && N.innerHTML == null || P.textContent && N.textContent == null) && c(E, ""), x ? K(
      a.dynamicChildren,
      x,
      E,
      p,
      w,
      Zn(d, b),
      _
    ) : O || Z(
      a,
      d,
      E,
      null,
      p,
      w,
      Zn(d, b),
      _,
      !1
    ), T > 0) {
      if (T & 16)
        F(E, P, N, p, b);
      else if (T & 2 && P.class !== N.class && i(E, "class", null, N.class, b), T & 4 && i(E, "style", P.style, N.style, b), T & 8) {
        const k = d.dynamicProps;
        for (let X = 0; X < k.length; X++) {
          const Y = k[X], xe = P[Y], ve = N[Y];
          (ve !== xe || Y === "value") && i(E, Y, xe, ve, b, p);
        }
      }
      T & 1 && a.children !== d.children && c(E, d.children);
    } else !O && x == null && F(E, P, N, p, b);
    ((B = N.onVnodeUpdated) || L) && pe(() => {
      B && Le(B, p, d, a), L && lt(d, a, p, "updated");
    }, w);
  }, K = (a, d, p, w, b, _, O) => {
    for (let E = 0; E < d.length; E++) {
      const T = a[E], x = d[E], L = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        T.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (T.type === we || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !at(T, x) || // - In the case of a component, it could contain anything.
        T.shapeFlag & 70) ? h(T.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      y(
        T,
        x,
        L,
        null,
        w,
        b,
        _,
        O,
        !0
      );
    }
  }, F = (a, d, p, w, b) => {
    if (d !== p) {
      if (d !== q)
        for (const _ in d)
          !Nt(_) && !(_ in p) && i(
            a,
            _,
            d[_],
            null,
            b,
            w
          );
      for (const _ in p) {
        if (Nt(_)) continue;
        const O = p[_], E = d[_];
        O !== E && _ !== "value" && i(a, _, E, O, b, w);
      }
      "value" in p && i(a, "value", d.value, p.value, b);
    }
  }, A = (a, d, p, w, b, _, O, E, T) => {
    const x = d.el = a ? a.el : l(""), L = d.anchor = a ? a.anchor : l("");
    let { patchFlag: P, dynamicChildren: N, slotScopeIds: B } = d;
    B && (E = E ? E.concat(B) : B), a == null ? (r(x, p, w), r(L, p, w), z(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      p,
      L,
      b,
      _,
      O,
      E,
      T
    )) : P > 0 && P & 64 && N && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren ? (K(
      a.dynamicChildren,
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
    (d.key != null || b && d === b.subTree) && Br(
      a,
      d,
      !0
      /* shallow */
    )) : Z(
      a,
      d,
      p,
      L,
      b,
      _,
      O,
      E,
      T
    );
  }, W = (a, d, p, w, b, _, O, E, T) => {
    d.slotScopeIds = E, a == null ? d.shapeFlag & 512 ? b.ctx.activate(
      d,
      p,
      w,
      O,
      T
    ) : ue(
      d,
      p,
      w,
      b,
      _,
      O,
      T
    ) : Ve(a, d, T);
  }, ue = (a, d, p, w, b, _, O) => {
    const E = a.component = vf(
      a,
      w,
      b
    );
    if (Yt(a) && (E.ctx.renderer = Ot), bf(E, !1, O), E.asyncDep) {
      if (b && b.registerDep(E, le, O), !a.el) {
        const T = E.subTree = re(ye);
        v(null, T, d, p);
      }
    } else
      le(
        E,
        a,
        d,
        p,
        b,
        _,
        O
      );
  }, Ve = (a, d, p) => {
    const w = d.component = a.component;
    if (ff(a, d, p))
      if (w.asyncDep && !w.asyncResolved) {
        te(w, d, p);
        return;
      } else
        w.next = d, w.update();
    else
      d.el = a.el, w.vnode = d;
  }, le = (a, d, p, w, b, _, O) => {
    const E = () => {
      if (a.isMounted) {
        let { next: P, bu: N, u: B, parent: k, vnode: X } = a;
        {
          const Ne = Wi(a);
          if (Ne) {
            P && (P.el = X.el, te(a, P, O)), Ne.asyncDep.then(() => {
              a.isUnmounted || E();
            });
            return;
          }
        }
        let Y = P, xe;
        ft(a, !1), P ? (P.el = X.el, te(a, P, O)) : P = X, N && Wn(N), (xe = P.props && P.props.onVnodeBeforeUpdate) && Le(xe, k, P, X), ft(a, !0);
        const ve = ls(a), Fe = a.subTree;
        a.subTree = ve, y(
          Fe,
          ve,
          // parent may have changed if it's in a teleport
          h(Fe.el),
          // anchor may have changed if it's in a fragment
          en(Fe),
          a,
          b,
          _
        ), P.el = ve.el, Y === null && cf(a, ve.el), B && pe(B, b), (xe = P.props && P.props.onVnodeUpdated) && pe(
          () => Le(xe, k, P, X),
          b
        );
      } else {
        let P;
        const { el: N, props: B } = d, { bm: k, m: X, parent: Y, root: xe, type: ve } = a, Fe = St(d);
        ft(a, !1), k && Wn(k), !Fe && (P = B && B.onVnodeBeforeMount) && Le(P, Y, d), ft(a, !0);
        {
          xe.ce && xe.ce._injectChildStyle(ve);
          const Ne = a.subTree = ls(a);
          y(
            null,
            Ne,
            p,
            w,
            a,
            b,
            _
          ), d.el = Ne.el;
        }
        if (X && pe(X, b), !Fe && (P = B && B.onVnodeMounted)) {
          const Ne = d;
          pe(
            () => Le(P, Y, Ne),
            b
          );
        }
        (d.shapeFlag & 256 || Y && St(Y.vnode) && Y.vnode.shapeFlag & 256) && a.a && pe(a.a, b), a.isMounted = !0, d = p = w = null;
      }
    };
    a.scope.on();
    const T = a.effect = new Us(E);
    a.scope.off();
    const x = a.update = T.run.bind(T), L = a.job = T.runIfDirty.bind(T);
    L.i = a, L.id = a.uid, T.scheduler = () => Nr(L), ft(a, !0), x();
  }, te = (a, d, p) => {
    d.component = a;
    const w = a.vnode.props;
    a.vnode = d, a.next = null, kl(a, d.props, w, p), Jl(a, d.children, p), rt(), Jr(a), st();
  }, Z = (a, d, p, w, b, _, O, E, T = !1) => {
    const x = a && a.children, L = a ? a.shapeFlag : 0, P = d.children, { patchFlag: N, shapeFlag: B } = d;
    if (N > 0) {
      if (N & 128) {
        Qt(
          x,
          P,
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
        it(
          x,
          P,
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
    B & 8 ? (L & 16 && At(x, b, _), P !== x && c(p, P)) : L & 16 ? B & 16 ? Qt(
      x,
      P,
      p,
      w,
      b,
      _,
      O,
      E,
      T
    ) : At(x, b, _, !0) : (L & 8 && c(p, ""), B & 16 && z(
      P,
      p,
      w,
      b,
      _,
      O,
      E,
      T
    ));
  }, it = (a, d, p, w, b, _, O, E, T) => {
    a = a || bt, d = d || bt;
    const x = a.length, L = d.length, P = Math.min(x, L);
    let N;
    for (N = 0; N < P; N++) {
      const B = d[N] = T ? Qe(d[N]) : Be(d[N]);
      y(
        a[N],
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
    x > L ? At(
      a,
      b,
      _,
      !0,
      !1,
      P
    ) : z(
      d,
      p,
      w,
      b,
      _,
      O,
      E,
      T,
      P
    );
  }, Qt = (a, d, p, w, b, _, O, E, T) => {
    let x = 0;
    const L = d.length;
    let P = a.length - 1, N = L - 1;
    for (; x <= P && x <= N; ) {
      const B = a[x], k = d[x] = T ? Qe(d[x]) : Be(d[x]);
      if (at(B, k))
        y(
          B,
          k,
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
    for (; x <= P && x <= N; ) {
      const B = a[P], k = d[N] = T ? Qe(d[N]) : Be(d[N]);
      if (at(B, k))
        y(
          B,
          k,
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
      P--, N--;
    }
    if (x > P) {
      if (x <= N) {
        const B = N + 1, k = B < L ? d[B].el : w;
        for (; x <= N; )
          y(
            null,
            d[x] = T ? Qe(d[x]) : Be(d[x]),
            p,
            k,
            b,
            _,
            O,
            E,
            T
          ), x++;
      }
    } else if (x > N)
      for (; x <= P; )
        Ie(a[x], b, _, !0), x++;
    else {
      const B = x, k = x, X = /* @__PURE__ */ new Map();
      for (x = k; x <= N; x++) {
        const Se = d[x] = T ? Qe(d[x]) : Be(d[x]);
        Se.key != null && X.set(Se.key, x);
      }
      let Y, xe = 0;
      const ve = N - k + 1;
      let Fe = !1, Ne = 0;
      const Pt = new Array(ve);
      for (x = 0; x < ve; x++) Pt[x] = 0;
      for (x = B; x <= P; x++) {
        const Se = a[x];
        if (xe >= ve) {
          Ie(Se, b, _, !0);
          continue;
        }
        let De;
        if (Se.key != null)
          De = X.get(Se.key);
        else
          for (Y = k; Y <= N; Y++)
            if (Pt[Y - k] === 0 && at(Se, d[Y])) {
              De = Y;
              break;
            }
        De === void 0 ? Ie(Se, b, _, !0) : (Pt[De - k] = x + 1, De >= Ne ? Ne = De : Fe = !0, y(
          Se,
          d[De],
          p,
          null,
          b,
          _,
          O,
          E,
          T
        ), xe++);
      }
      const Ur = Fe ? Ql(Pt) : bt;
      for (Y = Ur.length - 1, x = ve - 1; x >= 0; x--) {
        const Se = k + x, De = d[Se], kr = Se + 1 < L ? d[Se + 1].el : w;
        Pt[x] === 0 ? y(
          null,
          De,
          p,
          kr,
          b,
          _,
          O,
          E,
          T
        ) : Fe && (Y < 0 || x !== Ur[Y] ? ot(De, p, kr, 2) : Y--);
      }
    }
  }, ot = (a, d, p, w, b = null) => {
    const { el: _, type: O, transition: E, children: T, shapeFlag: x } = a;
    if (x & 6) {
      ot(a.component.subTree, d, p, w);
      return;
    }
    if (x & 128) {
      a.suspense.move(d, p, w);
      return;
    }
    if (x & 64) {
      O.move(a, d, p, Ot);
      return;
    }
    if (O === we) {
      r(_, d, p);
      for (let P = 0; P < T.length; P++)
        ot(T[P], d, p, w);
      r(a.anchor, d, p);
      return;
    }
    if (O === un) {
      R(a, d, p);
      return;
    }
    if (w !== 2 && x & 1 && E)
      if (w === 0)
        E.beforeEnter(_), r(_, d, p), pe(() => E.enter(_), b);
      else {
        const { leave: P, delayLeave: N, afterLeave: B } = E, k = () => r(_, d, p), X = () => {
          P(_, () => {
            k(), B && B();
          });
        };
        N ? N(_, k, X) : X();
      }
    else
      r(_, d, p);
  }, Ie = (a, d, p, w = !1, b = !1) => {
    const {
      type: _,
      props: O,
      ref: E,
      children: T,
      dynamicChildren: x,
      shapeFlag: L,
      patchFlag: P,
      dirs: N,
      cacheIndex: B
    } = a;
    if (P === -2 && (b = !1), E != null && yn(E, null, p, a, !0), B != null && (d.renderCache[B] = void 0), L & 256) {
      d.ctx.deactivate(a);
      return;
    }
    const k = L & 1 && N, X = !St(a);
    let Y;
    if (X && (Y = O && O.onVnodeBeforeUnmount) && Le(Y, d, a), L & 6)
      bo(a.component, p, w);
    else {
      if (L & 128) {
        a.suspense.unmount(p, w);
        return;
      }
      k && lt(a, null, d, "beforeUnmount"), L & 64 ? a.type.remove(
        a,
        d,
        p,
        Ot,
        w
      ) : x && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !x.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== we || P > 0 && P & 64) ? At(
        x,
        d,
        p,
        !1,
        !0
      ) : (_ === we && P & 384 || !b && L & 16) && At(T, d, p), w && Kr(a);
    }
    (X && (Y = O && O.onVnodeUnmounted) || k) && pe(() => {
      Y && Le(Y, d, a), k && lt(a, null, d, "unmounted");
    }, p);
  }, Kr = (a) => {
    const { type: d, el: p, anchor: w, transition: b } = a;
    if (d === we) {
      vo(p, w);
      return;
    }
    if (d === un) {
      M(a);
      return;
    }
    const _ = () => {
      s(p), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (a.shapeFlag & 1 && b && !b.persisted) {
      const { leave: O, delayLeave: E } = b, T = () => O(p, _);
      E ? E(a.el, _, T) : T();
    } else
      _();
  }, vo = (a, d) => {
    let p;
    for (; a !== d; )
      p = g(a), s(a), a = p;
    s(d);
  }, bo = (a, d, p) => {
    const { bum: w, scope: b, job: _, subTree: O, um: E, m: T, a: x } = a;
    os(T), os(x), w && Wn(w), b.stop(), _ && (_.flags |= 8, Ie(O, a, d, p)), E && pe(E, d), pe(() => {
      a.isUnmounted = !0;
    }, d), d && d.pendingBranch && !d.isUnmounted && a.asyncDep && !a.asyncResolved && a.suspenseId === d.pendingId && (d.deps--, d.deps === 0 && d.resolve());
  }, At = (a, d, p, w = !1, b = !1, _ = 0) => {
    for (let O = _; O < a.length; O++)
      Ie(a[O], d, p, w, b);
  }, en = (a) => {
    if (a.shapeFlag & 6)
      return en(a.component.subTree);
    if (a.shapeFlag & 128)
      return a.suspense.next();
    const d = g(a.anchor || a.el), p = d && d[pi];
    return p ? g(p) : d;
  };
  let Vn = !1;
  const Wr = (a, d, p) => {
    a == null ? d._vnode && Ie(d._vnode, null, null, !0) : y(
      d._vnode || null,
      a,
      d,
      null,
      null,
      null,
      p
    ), d._vnode = a, Vn || (Vn = !0, Jr(), ai(), Vn = !1);
  }, Ot = {
    p: y,
    um: Ie,
    m: ot,
    r: Kr,
    mt: ue,
    mc: z,
    pc: Z,
    pbc: K,
    n: en,
    o: e
  };
  return {
    render: Wr,
    hydrate: void 0,
    createApp: Kl(Wr)
  };
}
function Zn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ft({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Xl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Br(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (j(r) && j(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let l = s[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[i] = Qe(s[i]), l.el = o.el), !n && l.patchFlag !== -2 && Br(o, l)), l.type === Bn && (l.el = o.el);
    }
}
function Ql(e) {
  const t = e.slice(), n = [0];
  let r, s, i, o, l;
  const f = e.length;
  for (r = 0; r < f; r++) {
    const u = e[r];
    if (u !== 0) {
      if (s = n[n.length - 1], e[s] < u) {
        t[r] = s, n.push(r);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        l = i + o >> 1, e[n[l]] < u ? i = l + 1 : o = l;
      u < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), n[i] = r);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; )
    n[i] = o, o = t[o];
  return n;
}
function Wi(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Wi(t);
}
function os(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const ef = Symbol.for("v-scx"), tf = () => Bt(ef);
function nf(e, t) {
  return Hr(
    e,
    null,
    { flush: "sync" }
  );
}
function Re(e, t, n) {
  return Hr(e, t, n);
}
function Hr(e, t, n = q) {
  const { immediate: r, deep: s, flush: i, once: o } = n, l = se({}, n), f = t && r || !t && i !== "post";
  let u;
  if (Tt) {
    if (i === "sync") {
      const m = tf();
      u = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!f) {
      const m = () => {
      };
      return m.stop = He, m.resume = He, m.pause = He, m;
    }
  }
  const c = fe;
  l.call = (m, S, y) => Me(m, c, S, y);
  let h = !1;
  i === "post" ? l.scheduler = (m) => {
    pe(m, c && c.suspense);
  } : i !== "sync" && (h = !0, l.scheduler = (m, S) => {
    S ? m() : Nr(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), h && (m.flags |= 2, c && (m.id = c.uid, m.i = c));
  };
  const g = yl(e, t, l);
  return Tt && (u ? u.push(g) : f && g()), g;
}
function rf(e, t, n) {
  const r = this.proxy, s = ne(e) ? e.includes(".") ? Ui(r, e) : () => r[e] : e.bind(r, r);
  let i;
  $(t) ? i = t : (i = t.handler, n = t);
  const o = Xt(this), l = Hr(s, i.bind(r), n);
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
function Yc(e, t, n = q) {
  const r = Zt(), s = Te(t), i = nt(t), o = ki(e, s), l = fi((f, u) => {
    let c, h = q, g;
    return nf(() => {
      const m = e[s];
      _e(c, m) && (c = m, u());
    }), {
      get() {
        return f(), n.get ? n.get(c) : c;
      },
      set(m) {
        const S = n.set ? n.set(m) : m;
        if (!_e(S, c) && !(h !== q && _e(m, h)))
          return;
        const y = r.vnode.props;
        y && // check if parent has passed v-model
        (t in y || s in y || i in y) && (`onUpdate:${t}` in y || `onUpdate:${s}` in y || `onUpdate:${i}` in y) || (c = m, u()), r.emit(`update:${t}`, S), _e(m, S) && _e(m, h) && !_e(S, g) && u(), h = m, g = S;
      }
    };
  });
  return l[Symbol.iterator] = () => {
    let f = 0;
    return {
      next() {
        return f < 2 ? { value: f++ ? o || q : l, done: !1 } : { done: !0 };
      }
    };
  }, l;
}
const ki = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Te(t)}Modifiers`] || e[`${nt(t)}Modifiers`];
function sf(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || q;
  let s = n;
  const i = t.startsWith("update:"), o = i && ki(r, t.slice(7));
  o && (o.trim && (s = n.map((c) => ne(c) ? c.trim() : c)), o.number && (s = n.map(Ro)));
  let l, f = r[l = Kn(t)] || // also try camelCase event handler (#2249)
  r[l = Kn(Te(t))];
  !f && i && (f = r[l = Kn(nt(t))]), f && Me(
    f,
    e,
    6,
    s
  );
  const u = r[l + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Me(
      u,
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
    const f = (u) => {
      const c = zi(u, t, !0);
      c && (l = !0, se(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !l ? (ee(e) && r.set(e, null), null) : (j(i) ? i.forEach((f) => o[f] = null) : se(o, i), ee(e) && r.set(e, o), o);
}
function $n(e, t) {
  return !e || !Cn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), J(e, t[0].toLowerCase() + t.slice(1)) || J(e, nt(t)) || J(e, t));
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
    render: u,
    renderCache: c,
    props: h,
    data: g,
    setupState: m,
    ctx: S,
    inheritAttrs: y
  } = e, D = mn(e);
  let v, C;
  try {
    if (n.shapeFlag & 4) {
      const M = s || r, V = M;
      v = Be(
        u.call(
          V,
          M,
          c,
          h,
          m,
          g,
          S
        )
      ), C = l;
    } else {
      const M = t;
      v = Be(
        M.length > 1 ? M(
          h,
          { attrs: l, slots: o, emit: f }
        ) : M(
          h,
          null
        )
      ), C = t.props ? l : of(l);
    }
  } catch (M) {
    Ht.length = 0, Jt(M, e, 1), v = re(ye);
  }
  let R = v;
  if (C && y !== !1) {
    const M = Object.keys(C), { shapeFlag: V } = R;
    M.length && V & 7 && (i && M.some(xr) && (C = lf(
      C,
      i
    )), R = tt(R, C, !1, !0));
  }
  return n.dirs && (R = tt(R, null, !1, !0), R.dirs = R.dirs ? R.dirs.concat(n.dirs) : n.dirs), n.transition && pt(R, n.transition), v = R, mn(D), v;
}
const of = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Cn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, lf = (e, t) => {
  const n = {};
  for (const r in e)
    (!xr(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function ff(e, t, n) {
  const { props: r, children: s, component: i } = e, { props: o, children: l, patchFlag: f } = t, u = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return r ? fs(r, o, u) : !!o;
    if (f & 8) {
      const c = t.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        const g = c[h];
        if (o[g] !== r[g] && !$n(u, g))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : r === o ? !1 : r ? o ? fs(r, o, u) : !0 : !!o;
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
function cf({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Gi = (e) => e.__isSuspense;
function uf(e, t) {
  t && t.pendingBranch ? j(e) ? t.effects.push(...e) : t.effects.push(e) : _l(e);
}
const we = Symbol.for("v-fgt"), Bn = Symbol.for("v-txt"), ye = Symbol.for("v-cmt"), un = Symbol.for("v-stc"), Ht = [];
let Ce = null;
function hr(e = !1) {
  Ht.push(Ce = e ? null : []);
}
function af() {
  Ht.pop(), Ce = Ht[Ht.length - 1] || null;
}
let kt = 1;
function cs(e, t = !1) {
  kt += e, e < 0 && Ce && t && (Ce.hasOnce = !0);
}
function qi(e) {
  return e.dynamicChildren = kt > 0 ? Ce || bt : null, af(), kt > 0 && Ce && Ce.push(e), e;
}
function Zc(e, t, n, r, s, i) {
  return qi(
    Yi(
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
function pr(e, t, n, r, s) {
  return qi(
    re(
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
function at(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ji = ({ key: e }) => e ?? null, an = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ne(e) || oe(e) || $(e) ? { i: ce, r: e, k: t, f: !!n } : e : null);
function Yi(e, t = null, n = null, r = 0, s = null, i = e === we ? 0 : 1, o = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ji(t),
    ref: t && an(t),
    scopeId: hi,
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
    ctx: ce
  };
  return l ? (Vr(f, n), i & 128 && e.normalize(f)) : n && (f.shapeFlag |= ne(n) ? 8 : 16), kt > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Ce && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && Ce.push(f), f;
}
const re = df;
function df(e, t = null, n = null, r = 0, s = null, i = !1) {
  if ((!e || e === Oi) && (e = ye), zt(e)) {
    const l = tt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Vr(l, n), kt > 0 && !i && Ce && (l.shapeFlag & 6 ? Ce[Ce.indexOf(e)] = l : Ce.push(l)), l.patchFlag = -2, l;
  }
  if (Cf(e) && (e = e.__vccOpts), t) {
    t = hf(t);
    let { class: l, style: f } = t;
    l && !ne(l) && (t.class = Er(l)), ee(f) && (Ir(f) && !j(f) && (f = se({}, f)), t.style = Tr(f));
  }
  const o = ne(e) ? 1 : Gi(e) ? 128 : gi(e) ? 64 : ee(e) ? 4 : $(e) ? 2 : 0;
  return Yi(
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
function hf(e) {
  return e ? Ir(e) || Li(e) ? se({}, e) : e : null;
}
function tt(e, t, n = !1, r = !1) {
  const { props: s, ref: i, patchFlag: o, children: l, transition: f } = e, u = t ? gf(s || {}, t) : s, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && Ji(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? j(i) ? i.concat(an(t)) : [i, an(t)] : an(t)
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
    ssContent: e.ssContent && tt(e.ssContent),
    ssFallback: e.ssFallback && tt(e.ssFallback),
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
function pf(e = " ", t = 0) {
  return re(Bn, null, e, t);
}
function Xc(e, t) {
  const n = re(un, null, e);
  return n.staticCount = t, n;
}
function Qc(e = "", t = !1) {
  return t ? (hr(), pr(ye, null, e)) : re(ye, null, e);
}
function Be(e) {
  return e == null || typeof e == "boolean" ? re(ye) : j(e) ? re(
    we,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : zt(e) ? Qe(e) : re(Bn, null, String(e));
}
function Qe(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : tt(e);
}
function Vr(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (j(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Vr(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Li(t) ? t._ctx = ce : s === 3 && ce && (ce.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else $(t) ? (t = { default: t, _ctx: ce }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [pf(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function gf(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = Er([t.class, r.class]));
      else if (s === "style")
        t.style = Tr([t.style, r.style]);
      else if (Cn(s)) {
        const i = t[s], o = r[s];
        o && i !== o && !(j(i) && i.includes(o)) && (t[s] = i ? [].concat(i, o) : o);
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
const mf = Fi();
let yf = 0;
function vf(e, t, n) {
  const r = e.type, s = (t ? t.appContext : e.appContext) || mf, i = {
    uid: yf++,
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
    scope: new Bo(
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
    propsDefaults: q,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: q,
    data: q,
    props: q,
    attrs: q,
    slots: q,
    refs: q,
    setupState: q,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = sf.bind(null, i), e.ce && e.ce(i), i;
}
let fe = null;
const Zt = () => fe || ce;
let _n, gr;
{
  const e = On(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (i) => {
      s.length > 1 ? s.forEach((o) => o(i)) : s[0](i);
    };
  };
  _n = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => fe = n
  ), gr = t(
    "__VUE_SSR_SETTERS__",
    (n) => Tt = n
  );
}
const Xt = (e) => {
  const t = fe;
  return _n(e), e.scope.on(), () => {
    e.scope.off(), _n(t);
  };
}, us = () => {
  fe && fe.scope.off(), _n(null);
};
function Zi(e) {
  return e.vnode.shapeFlag & 4;
}
let Tt = !1;
function bf(e, t = !1, n = !1) {
  t && gr(t);
  const { props: r, children: s } = e.vnode, i = Zi(e);
  Ul(e, r, i, t), ql(e, s, n);
  const o = i ? _f(e, t) : void 0;
  return t && gr(!1), o;
}
function _f(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Dl);
  const { setup: r } = n;
  if (r) {
    rt();
    const s = e.setupContext = r.length > 1 ? xf(e) : null, i = Xt(e), o = qt(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), l = Ls(o);
    if (st(), i(), (l || e.sp) && !St(e) && jr(e), l) {
      if (o.then(us, us), t)
        return o.then((f) => {
          as(e, f);
        }).catch((f) => {
          Jt(f, e, 0);
        });
      e.asyncDep = o;
    } else
      as(e, o);
  } else
    Xi(e);
}
function as(e, t, n) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ee(t) && (e.setupState = li(t)), Xi(e);
}
function Xi(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || He);
  {
    const s = Xt(e);
    rt();
    try {
      Ll(e);
    } finally {
      st(), s();
    }
  }
}
const wf = {
  get(e, t) {
    return ae(e, "get", ""), e[t];
  }
};
function xf(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, wf),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Hn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(li(ol(e.exposed)), {
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
function Sf(e, t = !0) {
  return $(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Cf(e) {
  return $(e) && "__vccOpts" in e;
}
const ie = (e, t) => gl(e, t, Tt);
function Qi(e, t, n) {
  const r = arguments.length;
  return r === 2 ? ee(t) && !j(t) ? zt(t) ? re(e, null, [t]) : re(e, t) : re(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && zt(n) && (n = [n]), re(e, t, n));
}
const Tf = "3.5.13";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let mr;
const ds = typeof window < "u" && window.trustedTypes;
if (ds)
  try {
    mr = /* @__PURE__ */ ds.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const eo = mr ? (e) => mr.createHTML(e) : (e) => e, Ef = "http://www.w3.org/2000/svg", Af = "http://www.w3.org/1998/Math/MathML", We = typeof document < "u" ? document : null, hs = We && /* @__PURE__ */ We.createElement("template"), Of = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? We.createElementNS(Ef, e) : t === "mathml" ? We.createElementNS(Af, e) : n ? We.createElement(e, { is: n }) : We.createElement(e);
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
      hs.innerHTML = eo(
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
}, Je = "transition", Mt = "animation", Et = Symbol("_vtc"), to = {
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
}, no = /* @__PURE__ */ se(
  {},
  bi,
  to
), Pf = (e) => (e.displayName = "Transition", e.props = no, e), eu = /* @__PURE__ */ Pf(
  (e, { slots: t }) => Qi(Cl, ro(e), t)
), ct = (e, t = []) => {
  j(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, ps = (e) => e ? j(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function ro(e) {
  const t = {};
  for (const A in e)
    A in to || (t[A] = e[A]);
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
    appearActiveClass: u = o,
    appearToClass: c = l,
    leaveFromClass: h = `${n}-leave-from`,
    leaveActiveClass: g = `${n}-leave-active`,
    leaveToClass: m = `${n}-leave-to`
  } = e, S = Rf(s), y = S && S[0], D = S && S[1], {
    onBeforeEnter: v,
    onEnter: C,
    onEnterCancelled: R,
    onLeave: M,
    onLeaveCancelled: V,
    onBeforeAppear: U = v,
    onAppear: H = C,
    onAppearCancelled: z = R
  } = t, I = (A, W, ue, Ve) => {
    A._enterCancelled = Ve, Ye(A, W ? c : l), Ye(A, W ? u : o), ue && ue();
  }, K = (A, W) => {
    A._isLeaving = !1, Ye(A, h), Ye(A, m), Ye(A, g), W && W();
  }, F = (A) => (W, ue) => {
    const Ve = A ? H : C, le = () => I(W, A, ue);
    ct(Ve, [W, le]), gs(() => {
      Ye(W, A ? f : i), je(W, A ? c : l), ps(Ve) || ms(W, r, y, le);
    });
  };
  return se(t, {
    onBeforeEnter(A) {
      ct(v, [A]), je(A, i), je(A, o);
    },
    onBeforeAppear(A) {
      ct(U, [A]), je(A, f), je(A, u);
    },
    onEnter: F(!1),
    onAppear: F(!0),
    onLeave(A, W) {
      A._isLeaving = !0;
      const ue = () => K(A, W);
      je(A, h), A._enterCancelled ? (je(A, g), yr()) : (yr(), je(A, g)), gs(() => {
        A._isLeaving && (Ye(A, h), je(A, m), ps(M) || ms(A, r, D, ue));
      }), ct(M, [A, ue]);
    },
    onEnterCancelled(A) {
      I(A, !1, void 0, !0), ct(R, [A]);
    },
    onAppearCancelled(A) {
      I(A, !0, void 0, !0), ct(z, [A]);
    },
    onLeaveCancelled(A) {
      K(A), ct(V, [A]);
    }
  });
}
function Rf(e) {
  if (e == null)
    return null;
  if (ee(e))
    return [Xn(e.enter), Xn(e.leave)];
  {
    const t = Xn(e);
    return [t, t];
  }
}
function Xn(e) {
  return Mo(e);
}
function je(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Et] || (e[Et] = /* @__PURE__ */ new Set())).add(t);
}
function Ye(e, t) {
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
  const { type: o, timeout: l, propCount: f } = so(e, t);
  if (!o)
    return r();
  const u = o + "end";
  let c = 0;
  const h = () => {
    e.removeEventListener(u, g), i();
  }, g = (m) => {
    m.target === e && ++c >= f && h();
  };
  setTimeout(() => {
    c < f && h();
  }, l + 1), e.addEventListener(u, g);
}
function so(e, t) {
  const n = window.getComputedStyle(e), r = (S) => (n[S] || "").split(", "), s = r(`${Je}Delay`), i = r(`${Je}Duration`), o = ys(s, i), l = r(`${Mt}Delay`), f = r(`${Mt}Duration`), u = ys(l, f);
  let c = null, h = 0, g = 0;
  t === Je ? o > 0 && (c = Je, h = o, g = i.length) : t === Mt ? u > 0 && (c = Mt, h = u, g = f.length) : (h = Math.max(o, u), c = h > 0 ? o > u ? Je : Mt : null, g = c ? c === Je ? i.length : f.length : 0);
  const m = c === Je && /\b(transform|all)(,|$)/.test(
    r(`${Je}Property`).toString()
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
function yr() {
  return document.body.offsetHeight;
}
function If(e, t, n) {
  const r = e[Et];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const wn = Symbol("_vod"), io = Symbol("_vsh"), tu = {
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
  e.style.display = t ? e[wn] : "none", e[io] = !t;
}
const Ff = Symbol(""), Nf = /(^|;)\s*display\s*:/;
function Df(e, t, n) {
  const r = e.style, s = ne(n);
  let i = !1;
  if (n && !s) {
    if (t)
      if (ne(t))
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
      const o = r[Ff];
      o && (n += ";" + o), r.cssText = n, i = Nf.test(n);
    }
  } else t && e.removeAttribute("style");
  wn in e && (e[wn] = i ? r.display : "", e[io] && (r.display = "none"));
}
const bs = /\s*!important$/;
function dn(e, t, n) {
  if (j(n))
    n.forEach((r) => dn(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Lf(e, t);
    bs.test(n) ? e.setProperty(
      nt(r),
      n.replace(bs, ""),
      "important"
    ) : e[r] = n;
  }
}
const _s = ["Webkit", "Moz", "ms"], Qn = {};
function Lf(e, t) {
  const n = Qn[t];
  if (n)
    return n;
  let r = Te(t);
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
const ws = "http://www.w3.org/1999/xlink";
function xs(e, t, n, r, s, i = jo(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ws, t.slice(6, t.length)) : e.setAttributeNS(ws, t, n) : n == null || i && !Hs(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Ge(n) ? String(n) : n
  );
}
function Ss(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? eo(n) : n);
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
function jf(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function $f(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Cs = Symbol("_vei");
function Bf(e, t, n, r, s = null) {
  const i = e[Cs] || (e[Cs] = {}), o = i[t];
  if (r && o)
    o.value = r;
  else {
    const [l, f] = Hf(t);
    if (r) {
      const u = i[t] = Wf(
        r,
        s
      );
      jf(e, l, u, f);
    } else o && ($f(e, l, o, f), i[t] = void 0);
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
  return [e[2] === ":" ? e.slice(3) : nt(e.slice(2)), t];
}
let er = 0;
const Vf = /* @__PURE__ */ Promise.resolve(), Kf = () => er || (Vf.then(() => er = 0), er = Date.now());
function Wf(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Me(
      Uf(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = Kf(), n;
}
function Uf(e, t) {
  if (j(t)) {
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
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, kf = (e, t, n, r, s, i) => {
  const o = s === "svg";
  t === "class" ? If(e, r, o) : t === "style" ? Df(e, n, r) : Cn(t) ? xr(t) || Bf(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : zf(e, t, r, o)) ? (Ss(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && xs(e, t, r, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ne(r)) ? Ss(e, Te(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), xs(e, t, r, o));
};
function zf(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Es(t) && $(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Es(t) && ne(n) ? !1 : t in e;
}
const oo = /* @__PURE__ */ new WeakMap(), lo = /* @__PURE__ */ new WeakMap(), xn = Symbol("_moveCb"), As = Symbol("_enterCb"), Gf = (e) => (delete e.props.mode, e), qf = /* @__PURE__ */ Gf({
  name: "TransitionGroup",
  props: /* @__PURE__ */ se({}, no, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = Zt(), r = vi();
    let s, i;
    return Ci(() => {
      if (!s.length)
        return;
      const o = e.moveClass || `${e.name || "v"}-move`;
      if (!Xf(
        s[0].el,
        n.vnode.el,
        o
      ))
        return;
      s.forEach(Jf), s.forEach(Yf);
      const l = s.filter(Zf);
      yr(), l.forEach((f) => {
        const u = f.el, c = u.style;
        je(u, o), c.transform = c.webkitTransform = c.transitionDuration = "";
        const h = u[xn] = (g) => {
          g && g.target !== u || (!g || /transform$/.test(g.propertyName)) && (u.removeEventListener("transitionend", h), u[xn] = null, Ye(u, o));
        };
        u.addEventListener("transitionend", h);
      });
    }), () => {
      const o = G(e), l = ro(o);
      let f = o.tag || we;
      if (s = [], i)
        for (let u = 0; u < i.length; u++) {
          const c = i[u];
          c.el && c.el instanceof Element && (s.push(c), pt(
            c,
            Ut(
              c,
              l,
              r,
              n
            )
          ), oo.set(
            c,
            c.el.getBoundingClientRect()
          ));
        }
      i = t.default ? Dr(t.default()) : [];
      for (let u = 0; u < i.length; u++) {
        const c = i[u];
        c.key != null && pt(
          c,
          Ut(c, l, r, n)
        );
      }
      return re(f, null, i);
    };
  }
}), nu = qf;
function Jf(e) {
  const t = e.el;
  t[xn] && t[xn](), t[As] && t[As]();
}
function Yf(e) {
  lo.set(e, e.el.getBoundingClientRect());
}
function Zf(e) {
  const t = oo.get(e), n = lo.get(e), r = t.left - n.left, s = t.top - n.top;
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
  const { hasTransform: o } = so(r);
  return i.removeChild(r), o;
}
const Qf = ["ctrl", "shift", "alt", "meta"], ec = {
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
  exact: (e, t) => Qf.some((n) => e[`${n}Key`] && !t.includes(n))
}, ru = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = (s, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const l = ec[t[o]];
      if (l && l(s, t)) return;
    }
    return e(s, ...i);
  });
}, tc = /* @__PURE__ */ se({ patchProp: kf }, Of);
let Os;
function nc() {
  return Os || (Os = Yl(tc));
}
const su = (...e) => {
  const t = nc().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const s = sc(r);
    if (!s) return;
    const i = t._component;
    !$(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const o = n(s, !1, rc(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
  }, t;
};
function rc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function sc(e) {
  return ne(e) ? document.querySelector(e) : e;
}
var fo = Symbol();
function iu(e, {
  i18next: t,
  rerenderOn: n = ["languageChanged", "loaded", "added", "removed"],
  slotStart: r = "{",
  slotEnd: s = "}"
}) {
  const i = Ae(/* @__PURE__ */ new Date()), o = () => Dn(() => {
    i.value = /* @__PURE__ */ new Date();
  }), l = () => i.value;
  n.forEach((c) => {
    var h;
    switch (c) {
      case "added":
      case "removed":
        (h = t.store) == null || h.on(c, o);
        break;
      default:
        t.on(c, o);
        break;
    }
  }), e.component("i18next", lc);
  const f = () => t.isInitialized;
  e.config.globalProperties.$t = Ps(
    t.t.bind(t),
    l,
    f
  );
  const u = new Proxy(t, {
    get(c, h) {
      return l(), Reflect.get(c, h);
    }
  });
  e.config.globalProperties.$i18next = u, e.provide(fo, {
    i18next: u,
    slotPattern: oc(r, s),
    withAccessRecording(c, h) {
      return Ps(c, l, h);
    }
  });
}
function ou(e, t) {
  const { i18next: n, withAccessRecording: r } = co();
  let s;
  return s = n.getFixedT(null, e ?? null, void 0), {
    i18next: n,
    t: r(s, ic(n, e))
  };
}
function ic(e, t = []) {
  let n;
  return () => {
    if (n === void 0)
      if (e.isInitialized) {
        const s = (typeof t == "string" ? [t] : t).filter((i) => !e.hasLoadedNamespace(i));
        s.length ? (n = !1, e.loadNamespaces(s).then(() => n = !0)) : n = !0;
      } else
        return !1;
    return n;
  };
}
function Ps(e, t, n) {
  return new Proxy(e, {
    apply: function(r, s, i) {
      return t(), n() ? Reflect.apply(r, s, i) : "";
    }
  });
}
function co() {
  const e = Bt(fo);
  if (!e)
    throw new Error(
      "i18next-vue: Make sure to register the i18next-vue plugin using app.use(...)."
    );
  return e;
}
function oc(e, t) {
  const n = `${e}\\s*([a-z0-9\\-]+)\\s*${t}`;
  return new RegExp(n, "gi");
}
var lc = /* @__PURE__ */ Lr({
  props: {
    translation: {
      type: String,
      required: !0
    }
  },
  setup(e, { slots: t }) {
    const { slotPattern: n } = co();
    return () => {
      const r = e.translation, s = [];
      let i, o = 0;
      for (; (i = n.exec(r)) !== null; ) {
        s.push(r.substring(o, i.index));
        const l = t[i[1]];
        l ? s.push(...l()) : s.push(i[0]), o = n.lastIndex;
      }
      return s.push(r.substring(o)), s;
    };
  }
});
function Rs(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ze(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rs(Object(n), !0).forEach(function(r) {
      be(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rs(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function fc(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function cc(e) {
  var t = fc(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Sn(e) {
  "@babel/helpers - typeof";
  return Sn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Sn(e);
}
function be(e, t, n) {
  return t = cc(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function uc(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function ac(e, t) {
  if (e == null) return {};
  var n = uc(e, t), r, s;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (s = 0; s < i.length; s++)
      r = i[s], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
var dc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, uo = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(v, C, R) {
      if (!u(C) || h(C) || g(C) || m(C) || f(C))
        return C;
      var M, V = 0, U = 0;
      if (c(C))
        for (M = [], U = C.length; V < U; V++)
          M.push(n(v, C[V], R));
      else {
        M = {};
        for (var H in C)
          Object.prototype.hasOwnProperty.call(C, H) && (M[v(H, R)] = n(v, C[H], R));
      }
      return M;
    }, r = function(v, C) {
      C = C || {};
      var R = C.separator || "_", M = C.split || /(?=[A-Z])/;
      return v.split(M).join(R);
    }, s = function(v) {
      return S(v) ? v : (v = v.replace(/[\-_\s]+(.)?/g, function(C, R) {
        return R ? R.toUpperCase() : "";
      }), v.substr(0, 1).toLowerCase() + v.substr(1));
    }, i = function(v) {
      var C = s(v);
      return C.substr(0, 1).toUpperCase() + C.substr(1);
    }, o = function(v, C) {
      return r(v, C).toLowerCase();
    }, l = Object.prototype.toString, f = function(v) {
      return typeof v == "function";
    }, u = function(v) {
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
    }, y = function(v, C) {
      var R = C && "process" in C ? C.process : C;
      return typeof R != "function" ? v : function(M, V) {
        return R(M, v, V);
      };
    }, D = {
      camelize: s,
      decamelize: o,
      pascalize: i,
      depascalize: o,
      camelizeKeys: function(v, C) {
        return n(y(s, C), v);
      },
      decamelizeKeys: function(v, C) {
        return n(y(o, C), v, C);
      },
      pascalizeKeys: function(v, C) {
        return n(y(i, C), v);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = D : t.humps = D;
  })(dc);
})(uo);
var hc = uo.exports, pc = ["class", "style"];
function gc(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), s = hc.camelize(n.slice(0, r)), i = n.slice(r + 1).trim();
    return t[s] = i, t;
  }, {});
}
function mc(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function ao(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var r = (e.children || []).map(function(f) {
    return ao(f);
  }), s = Object.keys(e.attributes || {}).reduce(function(f, u) {
    var c = e.attributes[u];
    switch (u) {
      case "class":
        f.class = mc(c);
        break;
      case "style":
        f.style = gc(c);
        break;
      default:
        f.attrs[u] = c;
    }
    return f;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  n.class;
  var i = n.style, o = i === void 0 ? {} : i, l = ac(n, pc);
  return Qi(e.tag, ze(ze(ze({}, t), {}, {
    class: s.class,
    style: ze(ze({}, s.style), o)
  }, s.attrs), l), r);
}
var ho = !1;
try {
  ho = !0;
} catch {
}
function yc() {
  if (!ho && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function tr(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? be({}, e, t) : {};
}
function vc(e) {
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
  }, be(be(be(be(be(be(be(be(be(be(t, "fa-".concat(e.size), e.size !== null), "fa-rotate-".concat(e.rotation), e.rotation !== null), "fa-pull-".concat(e.pull), e.pull !== null), "fa-swap-opacity", e.swapOpacity), "fa-bounce", e.bounce), "fa-shake", e.shake), "fa-beat", e.beat), "fa-fade", e.fade), "fa-beat-fade", e.beatFade), "fa-flash", e.flash), be(be(t, "fa-spin-pulse", e.spinPulse), "fa-spin-reverse", e.spinReverse));
  return Object.keys(n).map(function(r) {
    return n[r] ? r : null;
  }).filter(function(r) {
    return r;
  });
}
function Ms(e) {
  if (e && Sn(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (rr.icon)
    return rr.icon(e);
  if (e === null)
    return null;
  if (Sn(e) === "object" && e.prefix && e.iconName)
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
var lu = /* @__PURE__ */ Lr({
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
    var r = n.attrs, s = ie(function() {
      return Ms(t.icon);
    }), i = ie(function() {
      return tr("classes", vc(t));
    }), o = ie(function() {
      return tr("transform", typeof t.transform == "string" ? rr.transform(t.transform) : t.transform);
    }), l = ie(function() {
      return tr("mask", Ms(t.mask));
    }), f = ie(function() {
      return _o(s.value, ze(ze(ze(ze({}, i.value), o.value), l.value), {}, {
        symbol: t.symbol,
        title: t.title,
        titleId: t.titleId,
        maskId: t.maskId
      }));
    });
    Re(f, function(c) {
      if (!c)
        return yc("Could not find one or more icon(s)", s.value, l.value);
    }, {
      immediate: !0
    });
    var u = ie(function() {
      return f.value ? ao(f.value.abstract[0], {}, r) : null;
    });
    return function() {
      return u.value;
    };
  }
});
function po(e) {
  return Ar() ? (Ws(e), !0) : !1;
}
const bc = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const _c = Object.prototype.toString, wc = (e) => _c.call(e) === "[object Object]", vr = () => {
};
function xc(e, t) {
  function n(...r) {
    return new Promise((s, i) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(s).catch(i);
    });
  }
  return n;
}
const go = (e) => e();
function Sc(...e) {
  let t = 0, n, r = !0, s = vr, i, o, l, f, u;
  !oe(e[0]) && typeof e[0] == "object" ? { delay: o, trailing: l = !0, leading: f = !0, rejectOnCancel: u = !1 } = e[0] : [o, l = !0, f = !0, u = !1] = e;
  const c = () => {
    n && (clearTimeout(n), n = void 0, s(), s = vr);
  };
  return (g) => {
    const m = et(o), S = Date.now() - t, y = () => i = g();
    return c(), m <= 0 ? (t = Date.now(), y()) : (S > m && (f || !r) ? (t = Date.now(), y()) : l && (i = new Promise((D, v) => {
      s = u ? v : D, n = setTimeout(() => {
        t = Date.now(), r = !0, D(y()), c();
      }, Math.max(0, m - S));
    })), !f && !n && (n = setTimeout(() => r = !0, m)), r = !1, i);
  };
}
function Cc(e = go, t = {}) {
  const {
    initialState: n = "active"
  } = t, r = Ec(n === "active");
  function s() {
    r.value = !1;
  }
  function i() {
    r.value = !0;
  }
  const o = (...l) => {
    r.value && e(...l);
  };
  return { isActive: In(r), pause: s, resume: i, eventFilter: o };
}
function Tc(e) {
  return Zt();
}
function nr(e) {
  return Array.isArray(e) ? e : [e];
}
function Ec(...e) {
  if (e.length !== 1)
    return dl(...e);
  const t = e[0];
  return typeof t == "function" ? In(fi(() => ({ get: t, set: vr }))) : Ae(t);
}
function mo(e, t, n = {}) {
  const {
    eventFilter: r = go,
    ...s
  } = n;
  return Re(
    e,
    xc(
      r,
      t
    ),
    s
  );
}
function Ac(e, t, n = {}) {
  const {
    eventFilter: r,
    initialState: s = "active",
    ...i
  } = n, { eventFilter: o, pause: l, resume: f, isActive: u } = Cc(r, { initialState: s });
  return { stop: mo(
    e,
    t,
    {
      ...i,
      eventFilter: o
    }
  ), pause: l, resume: f, isActive: u };
}
function Oc(e, t = !0, n) {
  Tc() ? jn(e, n) : t ? e() : Dn(e);
}
function Pc(e, t, n) {
  return Re(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
function fu(e, t, n = {}) {
  const {
    throttle: r = 0,
    trailing: s = !0,
    leading: i = !0,
    ...o
  } = n;
  return mo(
    e,
    t,
    {
      ...o,
      eventFilter: Sc(r, s, i)
    }
  );
}
const Gt = bc ? window : void 0;
function br(e) {
  var t;
  const n = et(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function Is(...e) {
  const t = [], n = () => {
    t.forEach((l) => l()), t.length = 0;
  }, r = (l, f, u, c) => (l.addEventListener(f, u, c), () => l.removeEventListener(f, u, c)), s = ie(() => {
    const l = nr(et(e[0])).filter((f) => f != null);
    return l.every((f) => typeof f != "string") ? l : void 0;
  }), i = Pc(
    () => {
      var l, f;
      return [
        (f = (l = s.value) == null ? void 0 : l.map((u) => br(u))) != null ? f : [Gt].filter((u) => u != null),
        nr(et(s.value ? e[1] : e[0])),
        nr(Nn(s.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        et(s.value ? e[3] : e[2])
      ];
    },
    ([l, f, u, c]) => {
      if (n(), !(l != null && l.length) || !(f != null && f.length) || !(u != null && u.length))
        return;
      const h = wc(c) ? { ...c } : c;
      t.push(
        ...l.flatMap(
          (g) => f.flatMap(
            (m) => u.map((S) => r(g, m, S, h))
          )
        )
      );
    },
    { flush: "post" }
  ), o = () => {
    i(), n();
  };
  return po(n), o;
}
function Rc() {
  const e = Fr(!1), t = Zt();
  return t && jn(() => {
    e.value = !0;
  }, t), e;
}
function Mc(e) {
  const t = Rc();
  return ie(() => (t.value, !!e()));
}
const ln = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, fn = "__vueuse_ssr_handlers__", Ic = /* @__PURE__ */ Fc();
function Fc() {
  return fn in ln || (ln[fn] = ln[fn] || {}), ln[fn];
}
function Nc(e, t) {
  return Ic[e] || t;
}
function Dc(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const Lc = {
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
}, Fs = "vueuse-storage";
function jc(e, t, n, r = {}) {
  var s;
  const {
    flush: i = "pre",
    deep: o = !0,
    listenToStorageChanges: l = !0,
    writeDefaults: f = !0,
    mergeDefaults: u = !1,
    shallow: c,
    window: h = Gt,
    eventFilter: g,
    onError: m = (F) => {
      console.error(F);
    },
    initOnMounted: S
  } = r, y = (c ? Fr : Ae)(typeof t == "function" ? t() : t), D = ie(() => et(e));
  if (!n)
    try {
      n = Nc("getDefaultStorage", () => {
        var F;
        return (F = Gt) == null ? void 0 : F.localStorage;
      })();
    } catch (F) {
      m(F);
    }
  if (!n)
    return y;
  const v = et(t), C = Dc(v), R = (s = r.serializer) != null ? s : Lc[C], { pause: M, resume: V } = Ac(
    y,
    () => H(y.value),
    { flush: i, deep: o, eventFilter: g }
  );
  Re(D, () => I(), { flush: i }), h && l && Oc(() => {
    n instanceof Storage ? Is(h, "storage", I, { passive: !0 }) : Is(h, Fs, K), S && I();
  }), S || I();
  function U(F, A) {
    if (h) {
      const W = {
        key: D.value,
        oldValue: F,
        newValue: A,
        storageArea: n
      };
      h.dispatchEvent(n instanceof Storage ? new StorageEvent("storage", W) : new CustomEvent(Fs, {
        detail: W
      }));
    }
  }
  function H(F) {
    try {
      const A = n.getItem(D.value);
      if (F == null)
        U(A, null), n.removeItem(D.value);
      else {
        const W = R.write(F);
        A !== W && (n.setItem(D.value, W), U(A, W));
      }
    } catch (A) {
      m(A);
    }
  }
  function z(F) {
    const A = F ? F.newValue : n.getItem(D.value);
    if (A == null)
      return f && v != null && n.setItem(D.value, R.write(v)), v;
    if (!F && u) {
      const W = R.read(A);
      return typeof u == "function" ? u(W, v) : C === "object" && !Array.isArray(W) ? { ...v, ...W } : W;
    } else return typeof A != "string" ? A : R.read(A);
  }
  function I(F) {
    if (!(F && F.storageArea !== n)) {
      if (F && F.key == null) {
        y.value = v;
        return;
      }
      if (!(F && F.key !== D.value)) {
        M();
        try {
          (F == null ? void 0 : F.newValue) !== R.write(y.value) && (y.value = z(F));
        } catch (A) {
          m(A);
        } finally {
          F ? Dn(V) : V();
        }
      }
    }
  }
  function K(F) {
    I(F.detail);
  }
  return y;
}
function cu(e, t, n = {}) {
  const { window: r = Gt, ...s } = n;
  let i;
  const o = Mc(() => r && "ResizeObserver" in r), l = () => {
    i && (i.disconnect(), i = void 0);
  }, f = ie(() => {
    const h = et(e);
    return Array.isArray(h) ? h.map((g) => br(g)) : [br(h)];
  }), u = Re(
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
    l(), u();
  };
  return po(c), {
    isSupported: o,
    stop: c
  };
}
function uu(e, t, n = {}) {
  const { window: r = Gt } = n;
  return jc(e, t, r == null ? void 0 : r.localStorage, n);
}
function $c(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function _r(e) {
  if ($c(e)) {
    const t = e.$el;
    return wo(t) && xo(t) === "#comment" ? null : t;
  }
  return e;
}
function vt(e) {
  return typeof e == "function" ? e() : Nn(e);
}
function au(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = _r(vt(e.element));
      return n == null ? {} : Co({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function yo(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ns(e, t) {
  const n = yo(e);
  return Math.round(t * n) / n;
}
function du(e, t, n) {
  n === void 0 && (n = {});
  const r = n.whileElementsMounted, s = ie(() => {
    var H;
    return (H = vt(n.open)) != null ? H : !0;
  }), i = ie(() => vt(n.middleware)), o = ie(() => {
    var H;
    return (H = vt(n.placement)) != null ? H : "bottom";
  }), l = ie(() => {
    var H;
    return (H = vt(n.strategy)) != null ? H : "absolute";
  }), f = ie(() => {
    var H;
    return (H = vt(n.transform)) != null ? H : !0;
  }), u = ie(() => _r(e.value)), c = ie(() => _r(t.value)), h = Ae(0), g = Ae(0), m = Ae(l.value), S = Ae(o.value), y = Fr({}), D = Ae(!1), v = ie(() => {
    const H = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return H;
    const z = Ns(c.value, h.value), I = Ns(c.value, g.value);
    return f.value ? {
      ...H,
      transform: "translate(" + z + "px, " + I + "px)",
      ...yo(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: z + "px",
      top: I + "px"
    };
  });
  let C;
  function R() {
    if (u.value == null || c.value == null)
      return;
    const H = s.value;
    So(u.value, c.value, {
      middleware: i.value,
      placement: o.value,
      strategy: l.value
    }).then((z) => {
      h.value = z.x, g.value = z.y, m.value = z.strategy, S.value = z.placement, y.value = z.middlewareData, D.value = H !== !1;
    });
  }
  function M() {
    typeof C == "function" && (C(), C = void 0);
  }
  function V() {
    if (M(), r === void 0) {
      R();
      return;
    }
    if (u.value != null && c.value != null) {
      C = r(u.value, c.value, R);
      return;
    }
  }
  function U() {
    s.value || (D.value = !1);
  }
  return Re([i, o, l, s], R, {
    flush: "sync"
  }), Re([u, c], V, {
    flush: "sync"
  }), Re(s, U, {
    flush: "sync"
  }), Ar() && Ws(M), {
    x: mt(h),
    y: mt(g),
    strategy: mt(m),
    placement: mt(S),
    middlewareData: mt(y),
    isPositioned: mt(D),
    floatingStyles: v,
    update: R
  };
}
export {
  re as A,
  Ti as B,
  Uc as C,
  cu as D,
  fu as E,
  we as F,
  Fr as G,
  uu as H,
  Mr as I,
  du as J,
  Wc as K,
  au as L,
  Jc as M,
  Yc as N,
  ol as O,
  ru as P,
  Bt as Q,
  nu as R,
  Vc as S,
  eu as T,
  Wl as U,
  Pl as V,
  zc as W,
  su as X,
  iu as Y,
  lu as Z,
  Er as a,
  Yi as b,
  Zc as c,
  Lr as d,
  Qc as e,
  Xc as f,
  Ae as g,
  ie as h,
  Re as i,
  jn as j,
  Dn as k,
  Ei as l,
  gf as m,
  Tr as n,
  hr as o,
  pf as p,
  pr as q,
  Gc as r,
  qc as s,
  $o as t,
  Nn as u,
  tu as v,
  Kc as w,
  wl as x,
  ou as y,
  kc as z
};

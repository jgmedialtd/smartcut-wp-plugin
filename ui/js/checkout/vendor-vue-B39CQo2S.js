import { A as Qn, B as bo, C as _o, D as vo, E as wo, G as xo } from "./vendor-UJdh33XB.js";
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function br(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const q = {}, bt = [], He = () => {
}, So = () => !1, Sn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), _r = (e) => e.startsWith("onUpdate:"), se = Object.assign, vr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Co = Object.prototype.hasOwnProperty, J = (e, t) => Co.call(e, t), j = Array.isArray, _t = (e) => Cn(e) === "[object Map]", Ns = (e) => Cn(e) === "[object Set]", $ = (e) => typeof e == "function", ne = (e) => typeof e == "string", Ge = (e) => typeof e == "symbol", ee = (e) => e !== null && typeof e == "object", Ds = (e) => (ee(e) || $(e)) && $(e.then) && $(e.catch), Ls = Object.prototype.toString, Cn = (e) => Ls.call(e), To = (e) => Cn(e).slice(8, -1), js = (e) => Cn(e) === "[object Object]", wr = (e) => ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Dt = /* @__PURE__ */ br(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Tn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Eo = /-(\w)/g, Te = Tn(
  (e) => e.replace(Eo, (t, n) => n ? n.toUpperCase() : "")
), Ao = /\B([A-Z])/g, tt = Tn(
  (e) => e.replace(Ao, "-$1").toLowerCase()
), En = Tn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Bn = Tn(
  (e) => e ? `on${En(e)}` : ""
), ve = (e, t) => !Object.is(e, t), Hn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, $s = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Oo = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Po = (e) => {
  const t = ne(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Ur;
const An = () => Ur || (Ur = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function xr(e) {
  if (j(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = ne(r) ? Fo(r) : xr(r);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (ne(e) || ee(e))
    return e;
}
const Mo = /;(?![^(]*\))/g, Ro = /:([^]+)/, Io = /\/\*[^]*?\*\//g;
function Fo(e) {
  const t = {};
  return e.replace(Io, "").split(Mo).forEach((n) => {
    if (n) {
      const r = n.split(Ro);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Sr(e) {
  let t = "";
  if (ne(e))
    t = e;
  else if (j(e))
    for (let n = 0; n < e.length; n++) {
      const r = Sr(e[n]);
      r && (t += r + " ");
    }
  else if (ee(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const No = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Do = /* @__PURE__ */ br(No);
function Bs(e) {
  return !!e || e === "";
}
const Hs = (e) => !!(e && e.__v_isRef === !0), Lo = (e) => ne(e) ? e : e == null ? "" : j(e) || ee(e) && (e.toString === Ls || !$(e.toString)) ? Hs(e) ? Lo(e.value) : JSON.stringify(e, Vs, 2) : String(e), Vs = (e, t) => Hs(t) ? Vs(e, t.value) : _t(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], i) => (n[Vn(r, i) + " =>"] = s, n),
    {}
  )
} : Ns(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Vn(n))
} : Ge(t) ? Vn(t) : ee(t) && !j(t) && !js(t) ? String(t) : t, Vn = (e, t = "") => {
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
class jo {
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
function Cr() {
  return ge;
}
function Ks(e, t = !1) {
  ge && ge.cleanups.push(e);
}
let Q;
const Kn = /* @__PURE__ */ new WeakSet();
class Ws {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ge && ge.active && ge.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Kn.has(this) && (Kn.delete(this), this.trigger()));
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
    this.flags |= 2, zr(this), ks(this);
    const t = Q, n = Pe;
    Q = this, Pe = !0;
    try {
      return this.fn();
    } finally {
      Gs(this), Q = t, Pe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ar(t);
      this.deps = this.depsTail = void 0, zr(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Kn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    er(this) && this.run();
  }
  get dirty() {
    return er(this);
  }
}
let Us = 0, Lt, jt;
function zs(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = jt, jt = e;
    return;
  }
  e.next = Lt, Lt = e;
}
function Tr() {
  Us++;
}
function Er() {
  if (--Us > 0)
    return;
  if (jt) {
    let t = jt;
    for (jt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Lt; ) {
    let t = Lt;
    for (Lt = void 0; t; ) {
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
    r.version === -1 ? (r === n && (n = s), Ar(r), $o(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  e.deps = t, e.depsTail = n;
}
function er(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (qs(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function qs(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Vt))
    return;
  e.globalVersion = Vt;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !er(e)) {
    e.flags &= -3;
    return;
  }
  const n = Q, r = Pe;
  Q = e, Pe = !0;
  try {
    ks(e);
    const s = e.fn(e._value);
    (t.version === 0 || ve(s, e._value)) && (e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    Q = n, Pe = r, Gs(e), e.flags &= -3;
  }
}
function Ar(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Ar(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function $o(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Pe = !0;
const Js = [];
function nt() {
  Js.push(Pe), Pe = !1;
}
function rt() {
  const e = Js.pop();
  Pe = e === void 0 ? !0 : e;
}
function zr(e) {
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
class Bo {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class On {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!Q || !Pe || Q === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Q)
      n = this.activeLink = new Bo(Q, this), Q.deps ? (n.prevDep = Q.depsTail, Q.depsTail.nextDep = n, Q.depsTail = n) : Q.deps = Q.depsTail = n, Ys(n);
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
    Tr();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Er();
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
const tr = /* @__PURE__ */ new WeakMap(), at = Symbol(
  ""
), nr = Symbol(
  ""
), Kt = Symbol(
  ""
);
function ae(e, t, n) {
  if (Pe && Q) {
    let r = tr.get(e);
    r || tr.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new On()), s.map = r, s.key = n), s.track();
  }
}
function Ue(e, t, n, r, s, i) {
  const o = tr.get(e);
  if (!o) {
    Vt++;
    return;
  }
  const l = (f) => {
    f && f.trigger();
  };
  if (Tr(), t === "clear")
    o.forEach(l);
  else {
    const f = j(e), a = f && wr(n);
    if (f && n === "length") {
      const u = Number(r);
      o.forEach((h, p) => {
        (p === "length" || p === Kt || !Ge(p) && p >= u) && l(h);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), a && l(o.get(Kt)), t) {
        case "add":
          f ? a && l(o.get("length")) : (l(o.get(at)), _t(e) && l(o.get(nr)));
          break;
        case "delete":
          f || (l(o.get(at)), _t(e) && l(o.get(nr)));
          break;
        case "set":
          _t(e) && l(o.get(at));
          break;
      }
  }
  Er();
}
function pt(e) {
  const t = G(e);
  return t === e ? t : (ae(t, "iterate", Kt), Oe(e) ? t : t.map(de));
}
function Pn(e) {
  return ae(e = G(e), "iterate", Kt), e;
}
const Ho = {
  __proto__: null,
  [Symbol.iterator]() {
    return Wn(this, Symbol.iterator, de);
  },
  concat(...e) {
    return pt(this).concat(
      ...e.map((t) => j(t) ? pt(t) : t)
    );
  },
  entries() {
    return Wn(this, "entries", (e) => (e[1] = de(e[1]), e));
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
    return Un(this, "includes", e);
  },
  indexOf(...e) {
    return Un(this, "indexOf", e);
  },
  join(e) {
    return pt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Un(this, "lastIndexOf", e);
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
    return kr(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return kr(this, "reduceRight", e, t);
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
    return pt(this).toReversed();
  },
  toSorted(e) {
    return pt(this).toSorted(e);
  },
  toSpliced(...e) {
    return pt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Rt(this, "unshift", e);
  },
  values() {
    return Wn(this, "values", de);
  }
};
function Wn(e, t, n) {
  const r = Pn(e), s = r[t]();
  return r !== e && !Oe(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.value && (i.value = n(i.value)), i;
  }), s;
}
const Vo = Array.prototype;
function Ke(e, t, n, r, s, i) {
  const o = Pn(e), l = o !== e && !Oe(e), f = o[t];
  if (f !== Vo[t]) {
    const h = f.apply(e, i);
    return l ? de(h) : h;
  }
  let a = n;
  o !== e && (l ? a = function(h, p) {
    return n.call(this, de(h), p, e);
  } : n.length > 2 && (a = function(h, p) {
    return n.call(this, h, p, e);
  }));
  const u = f.call(o, a, r);
  return l && s ? s(u) : u;
}
function kr(e, t, n, r) {
  const s = Pn(e);
  let i = n;
  return s !== e && (Oe(e) ? n.length > 3 && (i = function(o, l, f) {
    return n.call(this, o, l, f, e);
  }) : i = function(o, l, f) {
    return n.call(this, o, de(l), f, e);
  }), s[t](i, ...r);
}
function Un(e, t, n) {
  const r = G(e);
  ae(r, "iterate", Kt);
  const s = r[t](...n);
  return (s === -1 || s === !1) && Mr(n[0]) ? (n[0] = G(n[0]), r[t](...n)) : s;
}
function Rt(e, t, n = []) {
  nt(), Tr();
  const r = G(e)[t].apply(e, n);
  return Er(), rt(), r;
}
const Ko = /* @__PURE__ */ br("__proto__,__v_isRef,__isVue"), Zs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ge)
);
function Wo(e) {
  Ge(e) || (e = String(e));
  const t = G(this);
  return ae(t, "has", e), t.hasOwnProperty(e);
}
class Xs {
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
    const o = j(t);
    if (!s) {
      let f;
      if (o && (f = Ho[n]))
        return f;
      if (n === "hasOwnProperty")
        return Wo;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      ue(t) ? t : r
    );
    return (Ge(n) ? Zs.has(n) : Ko(n)) || (s || ae(t, "get", n), i) ? l : ue(l) ? o && wr(n) ? l : l.value : ee(l) ? s ? Pr(l) : Or(l) : l;
  }
}
class Qs extends Xs {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let i = t[n];
    if (!this._isShallow) {
      const f = dt(i);
      if (!Oe(r) && !dt(r) && (i = G(i), r = G(r)), !j(t) && ue(i) && !ue(r))
        return f ? !1 : (i.value = r, !0);
    }
    const o = j(t) && wr(n) ? Number(n) < t.length : J(t, n), l = Reflect.set(
      t,
      n,
      r,
      ue(t) ? t : s
    );
    return t === G(s) && (o ? ve(r, i) && Ue(t, "set", n, r) : Ue(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = J(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && Ue(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Ge(n) || !Zs.has(n)) && ae(t, "has", n), r;
  }
  ownKeys(t) {
    return ae(
      t,
      "iterate",
      j(t) ? "length" : at
    ), Reflect.ownKeys(t);
  }
}
class ei extends Xs {
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
const Uo = /* @__PURE__ */ new Qs(), zo = /* @__PURE__ */ new ei(), ko = /* @__PURE__ */ new Qs(!0), Go = /* @__PURE__ */ new ei(!0), rr = (e) => e, en = (e) => Reflect.getPrototypeOf(e);
function qo(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, i = G(s), o = _t(i), l = e === "entries" || e === Symbol.iterator && o, f = e === "keys" && o, a = s[e](...r), u = n ? rr : t ? sr : de;
    return !t && ae(
      i,
      "iterate",
      f ? nr : at
    ), {
      // iterator protocol
      next() {
        const { value: h, done: p } = a.next();
        return p ? { value: h, done: p } : {
          value: l ? [u(h[0]), u(h[1])] : u(h),
          done: p
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
function Jo(e, t) {
  const n = {
    get(s) {
      const i = this.__v_raw, o = G(i), l = G(s);
      e || (ve(s, l) && ae(o, "get", s), ae(o, "get", l));
      const { has: f } = en(o), a = t ? rr : e ? sr : de;
      if (f.call(o, s))
        return a(i.get(s));
      if (f.call(o, l))
        return a(i.get(l));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && ae(G(s), "iterate", at), Reflect.get(s, "size", s);
    },
    has(s) {
      const i = this.__v_raw, o = G(i), l = G(s);
      return e || (ve(s, l) && ae(o, "has", s), ae(o, "has", l)), s === l ? i.has(s) : i.has(s) || i.has(l);
    },
    forEach(s, i) {
      const o = this, l = o.__v_raw, f = G(l), a = t ? rr : e ? sr : de;
      return !e && ae(f, "iterate", at), l.forEach((u, h) => s.call(i, a(u), a(h), o));
    }
  };
  return se(
    n,
    e ? {
      add: tn("add"),
      set: tn("set"),
      delete: tn("delete"),
      clear: tn("clear")
    } : {
      add(s) {
        !t && !Oe(s) && !dt(s) && (s = G(s));
        const i = G(this);
        return en(i).has.call(i, s) || (i.add(s), Ue(i, "add", s, s)), this;
      },
      set(s, i) {
        !t && !Oe(i) && !dt(i) && (i = G(i));
        const o = G(this), { has: l, get: f } = en(o);
        let a = l.call(o, s);
        a || (s = G(s), a = l.call(o, s));
        const u = f.call(o, s);
        return o.set(s, i), a ? ve(i, u) && Ue(o, "set", s, i) : Ue(o, "add", s, i), this;
      },
      delete(s) {
        const i = G(this), { has: o, get: l } = en(i);
        let f = o.call(i, s);
        f || (s = G(s), f = o.call(i, s)), l && l.call(i, s);
        const a = i.delete(s);
        return f && Ue(i, "delete", s, void 0), a;
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
    n[s] = qo(s, e, t);
  }), n;
}
function Mn(e, t) {
  const n = Jo(e, t);
  return (r, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    J(n, s) && s in r ? n : r,
    s,
    i
  );
}
const Yo = {
  get: /* @__PURE__ */ Mn(!1, !1)
}, Zo = {
  get: /* @__PURE__ */ Mn(!1, !0)
}, Xo = {
  get: /* @__PURE__ */ Mn(!0, !1)
}, Qo = {
  get: /* @__PURE__ */ Mn(!0, !0)
}, ti = /* @__PURE__ */ new WeakMap(), ni = /* @__PURE__ */ new WeakMap(), ri = /* @__PURE__ */ new WeakMap(), si = /* @__PURE__ */ new WeakMap();
function el(e) {
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
function tl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : el(To(e));
}
function Or(e) {
  return dt(e) ? e : Rn(
    e,
    !1,
    Uo,
    Yo,
    ti
  );
}
function nl(e) {
  return Rn(
    e,
    !1,
    ko,
    Zo,
    ni
  );
}
function Pr(e) {
  return Rn(
    e,
    !0,
    zo,
    Xo,
    ri
  );
}
function gt(e) {
  return Rn(
    e,
    !0,
    Go,
    Qo,
    si
  );
}
function Rn(e, t, n, r, s) {
  if (!ee(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = s.get(e);
  if (i)
    return i;
  const o = tl(e);
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? r : n
  );
  return s.set(e, l), l;
}
function vt(e) {
  return dt(e) ? vt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function dt(e) {
  return !!(e && e.__v_isReadonly);
}
function Oe(e) {
  return !!(e && e.__v_isShallow);
}
function Mr(e) {
  return e ? !!e.__v_raw : !1;
}
function G(e) {
  const t = e && e.__v_raw;
  return t ? G(t) : e;
}
function rl(e) {
  return !J(e, "__v_skip") && Object.isExtensible(e) && $s(e, "__v_skip", !0), e;
}
const de = (e) => ee(e) ? Or(e) : e, sr = (e) => ee(e) ? Pr(e) : e;
function ue(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Ae(e) {
  return oi(e, !1);
}
function ii(e) {
  return oi(e, !0);
}
function oi(e, t) {
  return ue(e) ? e : new sl(e, t);
}
class sl {
  constructor(t, n) {
    this.dep = new On(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : G(t), this._value = n ? t : de(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || Oe(t) || dt(t);
    t = r ? t : G(t), ve(t, n) && (this._rawValue = t, this._value = r ? t : de(t), this.dep.trigger());
  }
}
function Fu(e) {
  e.dep && e.dep.trigger();
}
function Rr(e) {
  return ue(e) ? e.value : e;
}
function Ct(e) {
  return $(e) ? e() : Rr(e);
}
const il = {
  get: (e, t, n) => t === "__v_raw" ? e : Rr(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return ue(s) && !ue(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function li(e) {
  return vt(e) ? e : new Proxy(e, il);
}
class ol {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new On(), { get: r, set: s } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = r, this._set = s;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function ll(e) {
  return new ol(e);
}
class fl {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new On(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Vt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
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
    return qs(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function ul(e, t, n = !1) {
  let r, s;
  return $(e) ? r = e : (r = e.get, s = e.set), new fl(r, s, n);
}
const nn = {}, hn = /* @__PURE__ */ new WeakMap();
let ut;
function cl(e, t = !1, n = ut) {
  if (n) {
    let r = hn.get(n);
    r || hn.set(n, r = []), r.push(e);
  }
}
function al(e, t, n = q) {
  const { immediate: r, deep: s, once: i, scheduler: o, augmentJob: l, call: f } = n, a = (R) => s ? R : Oe(R) || s === !1 || s === 0 ? ze(R, 1) : ze(R);
  let u, h, p, m, S = !1, y = !1;
  if (ue(e) ? (h = () => e.value, S = Oe(e)) : vt(e) ? (h = () => a(e), S = !0) : j(e) ? (y = !0, S = e.some((R) => vt(R) || Oe(R)), h = () => e.map((R) => {
    if (ue(R))
      return R.value;
    if (vt(R))
      return a(R);
    if ($(R))
      return f ? f(R, 2) : R();
  })) : $(e) ? t ? h = f ? () => f(e, 2) : e : h = () => {
    if (p) {
      nt();
      try {
        p();
      } finally {
        rt();
      }
    }
    const R = ut;
    ut = u;
    try {
      return f ? f(e, 3, [m]) : e(m);
    } finally {
      ut = R;
    }
  } : h = He, t && s) {
    const R = h, V = s === !0 ? 1 / 0 : s;
    h = () => ze(R(), V);
  }
  const D = Cr(), b = () => {
    u.stop(), D && D.active && vr(D.effects, u);
  };
  if (i && t) {
    const R = t;
    t = (...V) => {
      R(...V), b();
    };
  }
  let C = y ? new Array(e.length).fill(nn) : nn;
  const M = (R) => {
    if (!(!(u.flags & 1) || !u.dirty && !R))
      if (t) {
        const V = u.run();
        if (s || S || (y ? V.some((U, H) => ve(U, C[H])) : ve(V, C))) {
          p && p();
          const U = ut;
          ut = u;
          try {
            const H = [
              V,
              // pass undefined as the old value when it's changed for the first time
              C === nn ? void 0 : y && C[0] === nn ? [] : C,
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
        u.run();
  };
  return l && l(M), u = new Ws(h), u.scheduler = o ? () => o(M, !1) : M, m = (R) => cl(R, !1, u), p = u.onStop = () => {
    const R = hn.get(u);
    if (R) {
      if (f)
        f(R, 4);
      else
        for (const V of R) V();
      hn.delete(u);
    }
  }, t ? r ? M(!0) : C = u.run() : o ? o(M.bind(null, !0), !0) : u.run(), b.pause = u.pause.bind(u), b.resume = u.resume.bind(u), b.stop = b, b;
}
function ze(e, t = 1 / 0, n) {
  if (t <= 0 || !ee(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, ue(e))
    ze(e.value, t, n);
  else if (j(e))
    for (let r = 0; r < e.length; r++)
      ze(e[r], t, n);
  else if (Ns(e) || _t(e))
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
function Re(e, t, n, r) {
  if ($(e)) {
    const s = qt(e, t, n, r);
    return s && Ds(s) && s.catch((i) => {
      Jt(i, t, n);
    }), s;
  }
  if (j(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(Re(e[i], t, n, r));
    return s;
  }
}
function Jt(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || q;
  if (t) {
    let l = t.parent;
    const f = t.proxy, a = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let h = 0; h < u.length; h++)
          if (u[h](e, f, a) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      nt(), qt(i, null, 10, [
        e,
        f,
        a
      ]), rt();
      return;
    }
  }
  dl(e, n, s, r, o);
}
function dl(e, t, n, r = !0, s = !1) {
  if (s)
    throw e;
  console.error(e);
}
const me = [];
let $e = -1;
const wt = [];
let Ze = null, mt = 0;
const fi = /* @__PURE__ */ Promise.resolve();
let pn = null;
function In(e) {
  const t = pn || fi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function hl(e) {
  let t = $e + 1, n = me.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = me[r], i = Wt(s);
    i < e || i === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Ir(e) {
  if (!(e.flags & 1)) {
    const t = Wt(e), n = me[me.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Wt(n) ? me.push(e) : me.splice(hl(t), 0, e), e.flags |= 1, ui();
  }
}
function ui() {
  pn || (pn = fi.then(ai));
}
function pl(e) {
  j(e) ? wt.push(...e) : Ze && e.id === -1 ? Ze.splice(mt + 1, 0, e) : e.flags & 1 || (wt.push(e), e.flags |= 1), ui();
}
function Gr(e, t, n = $e + 1) {
  for (; n < me.length; n++) {
    const r = me[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      me.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function ci(e) {
  if (wt.length) {
    const t = [...new Set(wt)].sort(
      (n, r) => Wt(n) - Wt(r)
    );
    if (wt.length = 0, Ze) {
      Ze.push(...t);
      return;
    }
    for (Ze = t, mt = 0; mt < Ze.length; mt++) {
      const n = Ze[mt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Ze = null, mt = 0;
  }
}
const Wt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ai(e) {
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
    $e = -1, me.length = 0, ci(), pn = null, (me.length || wt.length) && ai();
  }
}
let fe = null, di = null;
function gn(e) {
  const t = fe;
  return fe = e, di = e && e.type.__scopeId || null, t;
}
function gl(e, t = fe, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && ls(-1);
    const i = gn(t);
    let o;
    try {
      o = e(...s);
    } finally {
      gn(i), r._d && ls(1);
    }
    return o;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Nu(e, t) {
  if (fe === null)
    return e;
  const n = jn(fe), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, o, l, f = q] = t[s];
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
function ot(e, t, n, r) {
  const s = e.dirs, i = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    i && (l.oldValue = i[o].value);
    let f = l.dir[r];
    f && (nt(), Re(f, n, 8, [
      e.el,
      l,
      e,
      t
    ]), rt());
  }
}
const hi = Symbol("_vte"), pi = (e) => e.__isTeleport, $t = (e) => e && (e.disabled || e.disabled === ""), qr = (e) => e && (e.defer || e.defer === ""), Jr = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Yr = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, ir = (e, t) => {
  const n = e && e.to;
  return ne(n) ? t ? t(n) : null : n;
}, gi = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, s, i, o, l, f, a) {
    const {
      mc: u,
      pc: h,
      pbc: p,
      o: { insert: m, querySelector: S, createText: y, createComment: D }
    } = a, b = $t(t.props);
    let { shapeFlag: C, children: M, dynamicChildren: R } = t;
    if (e == null) {
      const V = t.el = y(""), U = t.anchor = y("");
      m(V, n, r), m(U, n, r);
      const H = (I, K) => {
        C & 16 && (s && s.isCE && (s.ce._teleportTarget = I), u(
          M,
          I,
          K,
          s,
          i,
          o,
          l,
          f
        ));
      }, k = () => {
        const I = t.target = ir(t.props, S), K = mi(I, t, y, m);
        I && (o !== "svg" && Jr(I) ? o = "svg" : o !== "mathml" && Yr(I) && (o = "mathml"), b || (H(I, K), fn(t, !1)));
      };
      b && (H(n, U), fn(t, !0)), qr(t.props) ? pe(() => {
        k(), t.el.__isMounted = !0;
      }, i) : k();
    } else {
      if (qr(t.props) && !e.el.__isMounted) {
        pe(() => {
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
          ), delete e.el.__isMounted;
        }, i);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const V = t.anchor = e.anchor, U = t.target = e.target, H = t.targetAnchor = e.targetAnchor, k = $t(e.props), I = k ? n : U, K = k ? V : H;
      if (o === "svg" || Jr(U) ? o = "svg" : (o === "mathml" || Yr(U)) && (o = "mathml"), R ? (p(
        e.dynamicChildren,
        R,
        I,
        s,
        i,
        o,
        l
      ), jr(e, t, !0)) : f || h(
        e,
        t,
        I,
        K,
        s,
        i,
        o,
        l,
        !1
      ), b)
        k ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : rn(
          t,
          n,
          V,
          a,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const F = t.target = ir(
          t.props,
          S
        );
        F && rn(
          t,
          F,
          null,
          a,
          0
        );
      } else k && rn(
        t,
        U,
        H,
        a,
        1
      );
      fn(t, b);
    }
  },
  remove(e, t, n, { um: r, o: { remove: s } }, i) {
    const {
      shapeFlag: o,
      children: l,
      anchor: f,
      targetStart: a,
      targetAnchor: u,
      target: h,
      props: p
    } = e;
    if (h && (s(a), s(u)), i && s(f), o & 16) {
      const m = i || !$t(p);
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
  hydrate: ml
};
function rn(e, t, n, { o: { insert: r }, m: s }, i = 2) {
  i === 0 && r(e.targetAnchor, t, n);
  const { el: o, anchor: l, shapeFlag: f, children: a, props: u } = e, h = i === 2;
  if (h && r(o, t, n), (!h || $t(u)) && f & 16)
    for (let p = 0; p < a.length; p++)
      s(
        a[p],
        t,
        n,
        2
      );
  h && r(l, t, n);
}
function ml(e, t, n, r, s, i, {
  o: { nextSibling: o, parentNode: l, querySelector: f, insert: a, createText: u }
}, h) {
  const p = t.target = ir(
    t.props,
    f
  );
  if (p) {
    const m = $t(t.props), S = p._lpa || p.firstChild;
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
              t.targetAnchor = y, p._lpa = t.targetAnchor && o(t.targetAnchor);
              break;
            }
          }
          y = o(y);
        }
        t.targetAnchor || mi(p, t, u, a), h(
          S && o(S),
          t,
          p,
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
const Du = gi;
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
const Xe = Symbol("_leaveCb"), sn = Symbol("_enterCb");
function yi() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Nn(() => {
    e.isMounted = !0;
  }), Ci(() => {
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
}, yl = {
  name: "BaseTransition",
  props: bi,
  setup(e, { slots: t }) {
    const n = At(), r = yi();
    return () => {
      const s = t.default && Fr(t.default(), !0);
      if (!s || !s.length)
        return;
      const i = vi(s), o = G(e), { mode: l } = o;
      if (r.isLeaving)
        return zn(i);
      const f = Zr(i);
      if (!f)
        return zn(i);
      let a = Ut(
        f,
        o,
        r,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => a = h
      );
      f.type !== ye && ht(f, a);
      let u = n.subTree && Zr(n.subTree);
      if (u && u.type !== ye && !ct(f, u) && _i(n).type !== ye) {
        let h = Ut(
          u,
          o,
          r,
          n
        );
        if (ht(u, h), l === "out-in" && f.type !== ye)
          return r.isLeaving = !0, h.afterLeave = () => {
            r.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, u = void 0;
          }, zn(i);
        l === "in-out" && f.type !== ye ? h.delayLeave = (p, m, S) => {
          const y = wi(
            r,
            u
          );
          y[String(u.key)] = u, p[Xe] = () => {
            m(), p[Xe] = void 0, delete a.delayedLeave, u = void 0;
          }, a.delayedLeave = () => {
            S(), delete a.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return i;
    };
  }
};
function vi(e) {
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
const bl = yl;
function wi(e, t) {
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
    onAfterEnter: u,
    onEnterCancelled: h,
    onBeforeLeave: p,
    onLeave: m,
    onAfterLeave: S,
    onLeaveCancelled: y,
    onBeforeAppear: D,
    onAppear: b,
    onAfterAppear: C,
    onAppearCancelled: M
  } = t, R = String(e.key), V = wi(n, e), U = (I, K) => {
    I && Re(
      I,
      r,
      9,
      K
    );
  }, H = (I, K) => {
    const F = K[1];
    U(I, K), j(I) ? I.every((A) => A.length <= 1) && F() : I.length <= 1 && F();
  }, k = {
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
      const F = V[R];
      F && ct(e, F) && F.el[Xe] && F.el[Xe](), U(K, [I]);
    },
    enter(I) {
      let K = a, F = u, A = h;
      if (!n.isMounted)
        if (i)
          K = b || a, F = C || u, A = M || h;
        else
          return;
      let W = !1;
      const ce = I[sn] = (Ve) => {
        W || (W = !0, Ve ? U(A, [I]) : U(F, [I]), k.delayedLeave && k.delayedLeave(), I[sn] = void 0);
      };
      K ? H(K, [I, ce]) : ce();
    },
    leave(I, K) {
      const F = String(e.key);
      if (I[sn] && I[sn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return K();
      U(p, [I]);
      let A = !1;
      const W = I[Xe] = (ce) => {
        A || (A = !0, K(), ce ? U(y, [I]) : U(S, [I]), I[Xe] = void 0, V[F] === e && delete V[F]);
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
  return k;
}
function zn(e) {
  if (Yt(e))
    return e = et(e), e.children = null, e;
}
function Zr(e) {
  if (!Yt(e))
    return pi(e.type) && e.children ? vi(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && $(n.default))
      return n.default();
  }
}
function ht(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ht(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Fr(e, t = !1, n) {
  let r = [], s = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === we ? (o.patchFlag & 128 && s++, r = r.concat(
      Fr(o.children, t, l)
    )) : (t || o.type !== ye) && r.push(l != null ? et(o, { key: l }) : o);
  }
  if (s > 1)
    for (let i = 0; i < r.length; i++)
      r[i].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Nr(e, t) {
  return $(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    se({ name: e.name }, t, { setup: e })
  ) : e;
}
function Dr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function mn(e, t, n, r, s = !1) {
  if (j(e)) {
    e.forEach(
      (S, y) => mn(
        S,
        t && (j(t) ? t[y] : t),
        n,
        r,
        s
      )
    );
    return;
  }
  if (xt(r) && !s) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && mn(e, t, n, r.component.subTree);
    return;
  }
  const i = r.shapeFlag & 4 ? jn(r.component) : r.el, o = s ? null : i, { i: l, r: f } = e, a = t && t.r, u = l.refs === q ? l.refs = {} : l.refs, h = l.setupState, p = G(h), m = h === q ? () => !1 : (S) => J(p, S);
  if (a != null && a !== f && (ne(a) ? (u[a] = null, m(a) && (h[a] = null)) : ue(a) && (a.value = null)), $(f))
    qt(f, l, 12, [o, u]);
  else {
    const S = ne(f), y = ue(f);
    if (S || y) {
      const D = () => {
        if (e.f) {
          const b = S ? m(f) ? h[f] : u[f] : f.value;
          s ? j(b) && vr(b, i) : j(b) ? b.includes(i) || b.push(i) : S ? (u[f] = [i], m(f) && (h[f] = u[f])) : (f.value = [i], e.k && (u[e.k] = f.value));
        } else S ? (u[f] = o, m(f) && (h[f] = o)) : y && (f.value = o, e.k && (u[e.k] = o));
      };
      o ? (D.id = -1, pe(D, n)) : D();
    }
  }
}
const Xr = (e) => e.nodeType === 8;
An().requestIdleCallback;
An().cancelIdleCallback;
function _l(e, t) {
  if (Xr(e) && e.data === "[") {
    let n = 1, r = e.nextSibling;
    for (; r; ) {
      if (r.nodeType === 1) {
        if (t(r) === !1)
          break;
      } else if (Xr(r))
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
function Lu(e) {
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
  let a = null, u, h = 0;
  const p = () => (h++, a = null, m()), m = () => {
    let S;
    return a || (S = a = t().catch((y) => {
      if (y = y instanceof Error ? y : new Error(String(y)), f)
        return new Promise((D, b) => {
          f(y, () => D(p()), () => b(y), h + 1);
        });
      throw y;
    }).then((y) => S !== a && a ? a : (y && (y.__esModule || y[Symbol.toStringTag] === "Module") && (y = y.default), u = y, y)));
  };
  return /* @__PURE__ */ Nr({
    name: "AsyncComponentWrapper",
    __asyncLoader: m,
    __asyncHydrate(S, y, D) {
      const b = i ? () => {
        const C = i(
          D,
          (M) => _l(S, M)
        );
        C && (y.bum || (y.bum = [])).push(C);
      } : D;
      u ? b() : m().then(() => !y.isUnmounted && b());
    },
    get __asyncResolved() {
      return u;
    },
    setup() {
      const S = le;
      if (Dr(S), u)
        return () => kn(u, S);
      const y = (M) => {
        a = null, Jt(
          M,
          S,
          13,
          !r
        );
      };
      if (l && S.suspense || Tt)
        return m().then((M) => () => kn(M, S)).catch((M) => (y(M), () => r ? re(r, {
          error: M
        }) : null));
      const D = Ae(!1), b = Ae(), C = Ae(!!s);
      return s && setTimeout(() => {
        C.value = !1;
      }, s), o != null && setTimeout(() => {
        if (!D.value && !b.value) {
          const M = new Error(
            `Async component timed out after ${o}ms.`
          );
          y(M), b.value = M;
        }
      }, o), m().then(() => {
        D.value = !0, S.parent && Yt(S.parent.vnode) && S.parent.update();
      }).catch((M) => {
        y(M), b.value = M;
      }), () => {
        if (D.value && u)
          return kn(u, S);
        if (b.value && r)
          return re(r, {
            error: b.value
          });
        if (n && !C.value)
          return re(n);
      };
    }
  });
}
function kn(e, t) {
  const { ref: n, props: r, children: s, ce: i } = t.vnode, o = re(e, r, s);
  return o.ref = n, o.ce = i, delete t.vnode.ce, o;
}
const Yt = (e) => e.type.__isKeepAlive;
function vl(e, t) {
  xi(e, "a", t);
}
function wl(e, t) {
  xi(e, "da", t);
}
function xi(e, t, n = le) {
  const r = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Fn(t, r, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      Yt(s.parent.vnode) && xl(r, t, n, s), s = s.parent;
  }
}
function xl(e, t, n, r) {
  const s = Fn(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Ti(() => {
    vr(r[t], s);
  }, n);
}
function Fn(e, t, n = le, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      nt();
      const l = Zt(n), f = Re(t, n, e, o);
      return l(), rt(), f;
    });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const qe = (e) => (t, n = le) => {
  (!Tt || e === "sp") && Fn(e, (...r) => t(...r), n);
}, Sl = qe("bm"), Nn = qe("m"), Cl = qe(
  "bu"
), Si = qe("u"), Ci = qe(
  "bum"
), Ti = qe("um"), Tl = qe(
  "sp"
), El = qe("rtg"), Al = qe("rtc");
function Ol(e, t = le) {
  Fn("ec", e, t);
}
const Ei = "components";
function ju(e, t) {
  return Oi(Ei, e, !0, t) || e;
}
const Ai = Symbol.for("v-ndc");
function $u(e) {
  return ne(e) ? Oi(Ei, e, !1) || e : e || Ai;
}
function Oi(e, t, n = !0, r = !1) {
  const s = fe || le;
  if (s) {
    const i = s.type;
    {
      const l = yf(
        i,
        !1
      );
      if (l && (l === t || l === Te(t) || l === En(Te(t))))
        return i;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      Qr(s[e] || i[e], t) || // global registration
      Qr(s.appContext[e], t)
    );
    return !o && r ? i : o;
  }
}
function Qr(e, t) {
  return e && (e[t] || e[Te(t)] || e[En(Te(t))]);
}
function Bu(e, t, n, r) {
  let s;
  const i = n, o = j(e);
  if (o || ne(e)) {
    const l = o && vt(e);
    let f = !1;
    l && (f = !Oe(e), e = Pn(e)), s = new Array(e.length);
    for (let a = 0, u = e.length; a < u; a++)
      s[a] = t(
        f ? de(e[a]) : e[a],
        a,
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
      for (let f = 0, a = l.length; f < a; f++) {
        const u = l[f];
        s[f] = t(e[u], u, f, i);
      }
    }
  else
    s = [];
  return s;
}
function Hu(e, t, n = {}, r, s) {
  if (fe.ce || fe.parent && xt(fe.parent) && fe.parent.ce)
    return cr(), ar(
      we,
      null,
      [re("slot", n, r)],
      64
    );
  let i = e[t];
  i && i._c && (i._d = !1), cr();
  const o = i && Pi(i(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  o && o.key, f = ar(
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
function Pi(e) {
  return e.some((t) => kt(t) ? !(t.type === ye || t.type === we && !Pi(t.children)) : !0) ? e : null;
}
const or = (e) => e ? Yi(e) ? jn(e) : or(e.parent) : null, Bt = (
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
    $parent: (e) => or(e.parent),
    $root: (e) => or(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ri(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ir(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = In.bind(e.proxy)),
    $watch: (e) => Zl.bind(e)
  })
), Gn = (e, t) => e !== q && !e.__isScriptSetup && J(e, t), Pl = {
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
        if (Gn(r, t))
          return o[t] = 1, r[t];
        if (s !== q && J(s, t))
          return o[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && J(a, t)
        )
          return o[t] = 3, i[t];
        if (n !== q && J(n, t))
          return o[t] = 4, n[t];
        lr && (o[t] = 0);
      }
    }
    const u = Bt[t];
    let h, p;
    if (u)
      return t === "$attrs" && ae(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (h = l.__cssModules) && (h = h[t])
    )
      return h;
    if (n !== q && J(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      p = f.config.globalProperties, J(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: i } = e;
    return Gn(s, t) ? (s[t] = n, !0) : r !== q && J(r, t) ? (r[t] = n, !0) : J(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: i }
  }, o) {
    let l;
    return !!n[o] || e !== q && J(e, o) || Gn(t, o) || (l = i[0]) && J(l, o) || J(r, o) || J(Bt, o) || J(s.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : J(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function yn(e) {
  return j(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Vu(e, t) {
  return !e || !t ? e || t : j(e) && j(t) ? e.concat(t) : se({}, yn(e), yn(t));
}
let lr = !0;
function Ml(e) {
  const t = Ri(e), n = e.proxy, r = e.ctx;
  lr = !1, t.beforeCreate && es(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: i,
    methods: o,
    watch: l,
    provide: f,
    inject: a,
    // lifecycle
    created: u,
    beforeMount: h,
    mounted: p,
    beforeUpdate: m,
    updated: S,
    activated: y,
    deactivated: D,
    beforeDestroy: b,
    beforeUnmount: C,
    destroyed: M,
    unmounted: R,
    render: V,
    renderTracked: U,
    renderTriggered: H,
    errorCaptured: k,
    serverPrefetch: I,
    // public API
    expose: K,
    inheritAttrs: F,
    // assets
    components: A,
    directives: W,
    filters: ce
  } = t;
  if (a && Rl(a, r, null), o)
    for (const te in o) {
      const Z = o[te];
      $(Z) && (r[te] = Z.bind(n));
    }
  if (s) {
    const te = s.call(n, n);
    ee(te) && (e.data = Or(te));
  }
  if (lr = !0, i)
    for (const te in i) {
      const Z = i[te], st = $(Z) ? Z.bind(n, n) : $(Z.get) ? Z.get.bind(n, n) : He, Xt = !$(Z) && $(Z.set) ? Z.set.bind(n) : He, it = oe({
        get: st,
        set: Xt
      });
      Object.defineProperty(r, te, {
        enumerable: !0,
        configurable: !0,
        get: () => it.value,
        set: (Ie) => it.value = Ie
      });
    }
  if (l)
    for (const te in l)
      Mi(l[te], r, n, te);
  if (f) {
    const te = $(f) ? f.call(n) : f;
    Reflect.ownKeys(te).forEach((Z) => {
      jl(Z, te[Z]);
    });
  }
  u && es(u, e, "c");
  function ie(te, Z) {
    j(Z) ? Z.forEach((st) => te(st.bind(n))) : Z && te(Z.bind(n));
  }
  if (ie(Sl, h), ie(Nn, p), ie(Cl, m), ie(Si, S), ie(vl, y), ie(wl, D), ie(Ol, k), ie(Al, U), ie(El, H), ie(Ci, C), ie(Ti, R), ie(Tl, I), j(K))
    if (K.length) {
      const te = e.exposed || (e.exposed = {});
      K.forEach((Z) => {
        Object.defineProperty(te, Z, {
          get: () => n[Z],
          set: (st) => n[Z] = st
        });
      });
    } else e.exposed || (e.exposed = {});
  V && e.render === He && (e.render = V), F != null && (e.inheritAttrs = F), A && (e.components = A), W && (e.directives = W), I && Dr(e);
}
function Rl(e, t, n = He) {
  j(e) && (e = fr(e));
  for (const r in e) {
    const s = e[r];
    let i;
    ee(s) ? "default" in s ? i = un(
      s.from || r,
      s.default,
      !0
    ) : i = un(s.from || r) : i = un(s), ue(i) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[r] = i;
  }
}
function es(e, t, n) {
  Re(
    j(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Mi(e, t, n, r) {
  let s = r.includes(".") ? Wi(n, r) : () => n[r];
  if (ne(e)) {
    const i = t[e];
    $(i) && Me(s, i);
  } else if ($(e))
    Me(s, e.bind(n));
  else if (ee(e))
    if (j(e))
      e.forEach((i) => Mi(i, t, n, r));
    else {
      const i = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(i) && Me(s, i, e);
    }
}
function Ri(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let f;
  return l ? f = l : !s.length && !n && !r ? f = t : (f = {}, s.length && s.forEach(
    (a) => bn(f, a, o, !0)
  ), bn(f, t, o)), ee(t) && i.set(t, f), f;
}
function bn(e, t, n, r = !1) {
  const { mixins: s, extends: i } = t;
  i && bn(e, i, n, !0), s && s.forEach(
    (o) => bn(e, o, n, !0)
  );
  for (const o in t)
    if (!(r && o === "expose")) {
      const l = Il[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Il = {
  data: ts,
  props: ns,
  emits: ns,
  // objects
  methods: Nt,
  computed: Nt,
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
  components: Nt,
  directives: Nt,
  // watch
  watch: Nl,
  // provide / inject
  provide: ts,
  inject: Fl
};
function ts(e, t) {
  return t ? e ? function() {
    return se(
      $(e) ? e.call(this, this) : e,
      $(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Fl(e, t) {
  return Nt(fr(e), fr(t));
}
function fr(e) {
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
function Nt(e, t) {
  return e ? se(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ns(e, t) {
  return e ? j(e) && j(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : se(
    /* @__PURE__ */ Object.create(null),
    yn(e),
    yn(t ?? {})
  ) : t;
}
function Nl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = se(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = he(e[r], t[r]);
  return n;
}
function Ii() {
  return {
    app: null,
    config: {
      isNativeTag: So,
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
let Dl = 0;
function Ll(e, t) {
  return function(r, s = null) {
    $(r) || (r = se({}, r)), s != null && !ee(s) && (s = null);
    const i = Ii(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const a = i.app = {
      _uid: Dl++,
      _component: r,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: _f,
      get config() {
        return i.config;
      },
      set config(u) {
      },
      use(u, ...h) {
        return o.has(u) || (u && $(u.install) ? (o.add(u), u.install(a, ...h)) : $(u) && (o.add(u), u(a, ...h))), a;
      },
      mixin(u) {
        return i.mixins.includes(u) || i.mixins.push(u), a;
      },
      component(u, h) {
        return h ? (i.components[u] = h, a) : i.components[u];
      },
      directive(u, h) {
        return h ? (i.directives[u] = h, a) : i.directives[u];
      },
      mount(u, h, p) {
        if (!f) {
          const m = a._ceVNode || re(r, s);
          return m.appContext = i, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(m, u, p), f = !0, a._container = u, u.__vue_app__ = a, jn(m.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        f && (Re(
          l,
          a._instance,
          16
        ), e(null, a._container), delete a._container.__vue_app__);
      },
      provide(u, h) {
        return i.provides[u] = h, a;
      },
      runWithContext(u) {
        const h = St;
        St = a;
        try {
          return u();
        } finally {
          St = h;
        }
      }
    };
    return a;
  };
}
let St = null;
function jl(e, t) {
  if (le) {
    let n = le.provides;
    const r = le.parent && le.parent.provides;
    r === n && (n = le.provides = Object.create(r)), n[e] = t;
  }
}
function un(e, t, n = !1) {
  const r = le || fe;
  if (r || St) {
    const s = St ? St._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && $(t) ? t.call(r && r.proxy) : t;
  }
}
const Fi = {}, Ni = () => Object.create(Fi), Di = (e) => Object.getPrototypeOf(e) === Fi;
function $l(e, t, n, r = !1) {
  const s = {}, i = Ni();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Li(e, t, s, i);
  for (const o in e.propsOptions[0])
    o in s || (s[o] = void 0);
  n ? e.props = r ? s : nl(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i;
}
function Bl(e, t, n, r) {
  const {
    props: s,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = G(s), [f] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const u = e.vnode.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        let p = u[h];
        if (Dn(e.emitsOptions, p))
          continue;
        const m = t[p];
        if (f)
          if (J(i, p))
            m !== i[p] && (i[p] = m, a = !0);
          else {
            const S = Te(p);
            s[S] = ur(
              f,
              l,
              S,
              m,
              e,
              !1
            );
          }
        else
          m !== i[p] && (i[p] = m, a = !0);
      }
    }
  } else {
    Li(e, t, s, i) && (a = !0);
    let u;
    for (const h in l)
      (!t || // for camelCase
      !J(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = tt(h)) === h || !J(t, u))) && (f ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[u] !== void 0) && (s[h] = ur(
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
  a && Ue(e.attrs, "set", "");
}
function Li(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let f in t) {
      if (Dt(f))
        continue;
      const a = t[f];
      let u;
      s && J(s, u = Te(f)) ? !i || !i.includes(u) ? n[u] = a : (l || (l = {}))[u] = a : Dn(e.emitsOptions, f) || (!(f in r) || a !== r[f]) && (r[f] = a, o = !0);
    }
  if (i) {
    const f = G(n), a = l || q;
    for (let u = 0; u < i.length; u++) {
      const h = i[u];
      n[h] = ur(
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
function ur(e, t, n, r, s, i) {
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
          const u = Zt(s);
          r = a[n] = f.call(
            null,
            t
          ), u();
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
    ] && (r === "" || r === tt(n)) && (r = !0));
  }
  return r;
}
const Hl = /* @__PURE__ */ new WeakMap();
function ji(e, t, n = !1) {
  const r = n ? Hl : t.propsCache, s = r.get(e);
  if (s)
    return s;
  const i = e.props, o = {}, l = [];
  let f = !1;
  if (!$(e)) {
    const u = (h) => {
      f = !0;
      const [p, m] = ji(h, t, !0);
      se(o, p), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!i && !f)
    return ee(e) && r.set(e, bt), bt;
  if (j(i))
    for (let u = 0; u < i.length; u++) {
      const h = Te(i[u]);
      rs(h) && (o[h] = q);
    }
  else if (i)
    for (const u in i) {
      const h = Te(u);
      if (rs(h)) {
        const p = i[u], m = o[h] = j(p) || $(p) ? { type: p } : se({}, p), S = m.type;
        let y = !1, D = !0;
        if (j(S))
          for (let b = 0; b < S.length; ++b) {
            const C = S[b], M = $(C) && C.name;
            if (M === "Boolean") {
              y = !0;
              break;
            } else M === "String" && (D = !1);
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
  const a = [o, l];
  return ee(e) && r.set(e, a), a;
}
function rs(e) {
  return e[0] !== "$" && !Dt(e);
}
const $i = (e) => e[0] === "_" || e === "$stable", Lr = (e) => j(e) ? e.map(Be) : [Be(e)], Vl = (e, t, n) => {
  if (t._n)
    return t;
  const r = gl((...s) => Lr(t(...s)), n);
  return r._c = !1, r;
}, Bi = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if ($i(s)) continue;
    const i = e[s];
    if ($(i))
      t[s] = Vl(s, i, r);
    else if (i != null) {
      const o = Lr(i);
      t[s] = () => o;
    }
  }
}, Hi = (e, t) => {
  const n = Lr(t);
  e.slots.default = () => n;
}, Vi = (e, t, n) => {
  for (const r in t)
    (n || r !== "_") && (e[r] = t[r]);
}, Kl = (e, t, n) => {
  const r = e.slots = Ni();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (Vi(r, t, n), n && $s(r, "_", s, !0)) : Bi(t, r);
  } else t && Hi(e, t);
}, Wl = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let i = !0, o = q;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : Vi(s, t, n) : (i = !t.$stable, Bi(t, s)), o = t;
  } else t && (Hi(e, t), o = { default: 1 });
  if (i)
    for (const l in s)
      !$i(l) && o[l] == null && delete s[l];
}, pe = rf;
function Ul(e) {
  return zl(e);
}
function zl(e, t) {
  const n = An();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: s,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: f,
    setText: a,
    setElementText: u,
    parentNode: h,
    nextSibling: p,
    setScopeId: m = He,
    insertStaticContent: S
  } = e, y = (c, d, g, w = null, _ = null, v = null, O = void 0, E = null, T = !!d.dynamicChildren) => {
    if (c === d)
      return;
    c && !ct(c, d) && (w = Qt(c), Ie(c, _, v, !0), c = null), d.patchFlag === -2 && (T = !1, d.dynamicChildren = null);
    const { type: x, ref: L, shapeFlag: P } = d;
    switch (x) {
      case Ln:
        D(c, d, g, w);
        break;
      case ye:
        b(c, d, g, w);
        break;
      case cn:
        c == null && C(d, g, w, O);
        break;
      case we:
        A(
          c,
          d,
          g,
          w,
          _,
          v,
          O,
          E,
          T
        );
        break;
      default:
        P & 1 ? V(
          c,
          d,
          g,
          w,
          _,
          v,
          O,
          E,
          T
        ) : P & 6 ? W(
          c,
          d,
          g,
          w,
          _,
          v,
          O,
          E,
          T
        ) : (P & 64 || P & 128) && x.process(
          c,
          d,
          g,
          w,
          _,
          v,
          O,
          E,
          T,
          Pt
        );
    }
    L != null && _ && mn(L, c && c.ref, v, d || c, !d);
  }, D = (c, d, g, w) => {
    if (c == null)
      r(
        d.el = l(d.children),
        g,
        w
      );
    else {
      const _ = d.el = c.el;
      d.children !== c.children && a(_, d.children);
    }
  }, b = (c, d, g, w) => {
    c == null ? r(
      d.el = f(d.children || ""),
      g,
      w
    ) : d.el = c.el;
  }, C = (c, d, g, w) => {
    [c.el, c.anchor] = S(
      c.children,
      d,
      g,
      w,
      c.el,
      c.anchor
    );
  }, M = ({ el: c, anchor: d }, g, w) => {
    let _;
    for (; c && c !== d; )
      _ = p(c), r(c, g, w), c = _;
    r(d, g, w);
  }, R = ({ el: c, anchor: d }) => {
    let g;
    for (; c && c !== d; )
      g = p(c), s(c), c = g;
    s(d);
  }, V = (c, d, g, w, _, v, O, E, T) => {
    d.type === "svg" ? O = "svg" : d.type === "math" && (O = "mathml"), c == null ? U(
      d,
      g,
      w,
      _,
      v,
      O,
      E,
      T
    ) : I(
      c,
      d,
      _,
      v,
      O,
      E,
      T
    );
  }, U = (c, d, g, w, _, v, O, E) => {
    let T, x;
    const { props: L, shapeFlag: P, transition: N, dirs: B } = c;
    if (T = c.el = o(
      c.type,
      v,
      L && L.is,
      L
    ), P & 8 ? u(T, c.children) : P & 16 && k(
      c.children,
      T,
      null,
      w,
      _,
      qn(c, v),
      O,
      E
    ), B && ot(c, null, w, "created"), H(T, c, c.scopeId, O, w), L) {
      for (const X in L)
        X !== "value" && !Dt(X) && i(T, X, null, L[X], v, w);
      "value" in L && i(T, "value", null, L.value, v), (x = L.onVnodeBeforeMount) && Le(x, w, c);
    }
    B && ot(c, null, w, "beforeMount");
    const z = kl(_, N);
    z && N.beforeEnter(T), r(T, d, g), ((x = L && L.onVnodeMounted) || z || B) && pe(() => {
      x && Le(x, w, c), z && N.enter(T), B && ot(c, null, w, "mounted");
    }, _);
  }, H = (c, d, g, w, _) => {
    if (g && m(c, g), w)
      for (let v = 0; v < w.length; v++)
        m(c, w[v]);
    if (_) {
      let v = _.subTree;
      if (d === v || ki(v.type) && (v.ssContent === d || v.ssFallback === d)) {
        const O = _.vnode;
        H(
          c,
          O,
          O.scopeId,
          O.slotScopeIds,
          _.parent
        );
      }
    }
  }, k = (c, d, g, w, _, v, O, E, T = 0) => {
    for (let x = T; x < c.length; x++) {
      const L = c[x] = E ? Qe(c[x]) : Be(c[x]);
      y(
        null,
        L,
        d,
        g,
        w,
        _,
        v,
        O,
        E
      );
    }
  }, I = (c, d, g, w, _, v, O) => {
    const E = d.el = c.el;
    let { patchFlag: T, dynamicChildren: x, dirs: L } = d;
    T |= c.patchFlag & 16;
    const P = c.props || q, N = d.props || q;
    let B;
    if (g && lt(g, !1), (B = N.onVnodeBeforeUpdate) && Le(B, g, d, c), L && ot(d, c, g, "beforeUpdate"), g && lt(g, !0), (P.innerHTML && N.innerHTML == null || P.textContent && N.textContent == null) && u(E, ""), x ? K(
      c.dynamicChildren,
      x,
      E,
      g,
      w,
      qn(d, _),
      v
    ) : O || Z(
      c,
      d,
      E,
      null,
      g,
      w,
      qn(d, _),
      v,
      !1
    ), T > 0) {
      if (T & 16)
        F(E, P, N, g, _);
      else if (T & 2 && P.class !== N.class && i(E, "class", null, N.class, _), T & 4 && i(E, "style", P.style, N.style, _), T & 8) {
        const z = d.dynamicProps;
        for (let X = 0; X < z.length; X++) {
          const Y = z[X], xe = P[Y], be = N[Y];
          (be !== xe || Y === "value") && i(E, Y, xe, be, _, g);
        }
      }
      T & 1 && c.children !== d.children && u(E, d.children);
    } else !O && x == null && F(E, P, N, g, _);
    ((B = N.onVnodeUpdated) || L) && pe(() => {
      B && Le(B, g, d, c), L && ot(d, c, g, "updated");
    }, w);
  }, K = (c, d, g, w, _, v, O) => {
    for (let E = 0; E < d.length; E++) {
      const T = c[E], x = d[E], L = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        T.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (T.type === we || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ct(T, x) || // - In the case of a component, it could contain anything.
        T.shapeFlag & 70) ? h(T.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      y(
        T,
        x,
        L,
        null,
        w,
        _,
        v,
        O,
        !0
      );
    }
  }, F = (c, d, g, w, _) => {
    if (d !== g) {
      if (d !== q)
        for (const v in d)
          !Dt(v) && !(v in g) && i(
            c,
            v,
            d[v],
            null,
            _,
            w
          );
      for (const v in g) {
        if (Dt(v)) continue;
        const O = g[v], E = d[v];
        O !== E && v !== "value" && i(c, v, E, O, _, w);
      }
      "value" in g && i(c, "value", d.value, g.value, _);
    }
  }, A = (c, d, g, w, _, v, O, E, T) => {
    const x = d.el = c ? c.el : l(""), L = d.anchor = c ? c.anchor : l("");
    let { patchFlag: P, dynamicChildren: N, slotScopeIds: B } = d;
    B && (E = E ? E.concat(B) : B), c == null ? (r(x, g, w), r(L, g, w), k(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      g,
      L,
      _,
      v,
      O,
      E,
      T
    )) : P > 0 && P & 64 && N && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (K(
      c.dynamicChildren,
      N,
      g,
      _,
      v,
      O,
      E
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || _ && d === _.subTree) && jr(
      c,
      d,
      !0
      /* shallow */
    )) : Z(
      c,
      d,
      g,
      L,
      _,
      v,
      O,
      E,
      T
    );
  }, W = (c, d, g, w, _, v, O, E, T) => {
    d.slotScopeIds = E, c == null ? d.shapeFlag & 512 ? _.ctx.activate(
      d,
      g,
      w,
      O,
      T
    ) : ce(
      d,
      g,
      w,
      _,
      v,
      O,
      T
    ) : Ve(c, d, T);
  }, ce = (c, d, g, w, _, v, O) => {
    const E = c.component = df(
      c,
      w,
      _
    );
    if (Yt(c) && (E.ctx.renderer = Pt), hf(E, !1, O), E.asyncDep) {
      if (_ && _.registerDep(E, ie, O), !c.el) {
        const T = E.subTree = re(ye);
        b(null, T, d, g);
      }
    } else
      ie(
        E,
        c,
        d,
        g,
        _,
        v,
        O
      );
  }, Ve = (c, d, g) => {
    const w = d.component = c.component;
    if (tf(c, d, g))
      if (w.asyncDep && !w.asyncResolved) {
        te(w, d, g);
        return;
      } else
        w.next = d, w.update();
    else
      d.el = c.el, w.vnode = d;
  }, ie = (c, d, g, w, _, v, O) => {
    const E = () => {
      if (c.isMounted) {
        let { next: P, bu: N, u: B, parent: z, vnode: X } = c;
        {
          const Ne = Ki(c);
          if (Ne) {
            P && (P.el = X.el, te(c, P, O)), Ne.asyncDep.then(() => {
              c.isUnmounted || E();
            });
            return;
          }
        }
        let Y = P, xe;
        lt(c, !1), P ? (P.el = X.el, te(c, P, O)) : P = X, N && Hn(N), (xe = P.props && P.props.onVnodeBeforeUpdate) && Le(xe, z, P, X), lt(c, !0);
        const be = is(c), Fe = c.subTree;
        c.subTree = be, y(
          Fe,
          be,
          // parent may have changed if it's in a teleport
          h(Fe.el),
          // anchor may have changed if it's in a fragment
          Qt(Fe),
          c,
          _,
          v
        ), P.el = be.el, Y === null && nf(c, be.el), B && pe(B, _), (xe = P.props && P.props.onVnodeUpdated) && pe(
          () => Le(xe, z, P, X),
          _
        );
      } else {
        let P;
        const { el: N, props: B } = d, { bm: z, m: X, parent: Y, root: xe, type: be } = c, Fe = xt(d);
        lt(c, !1), z && Hn(z), !Fe && (P = B && B.onVnodeBeforeMount) && Le(P, Y, d), lt(c, !0);
        {
          xe.ce && xe.ce._injectChildStyle(be);
          const Ne = c.subTree = is(c);
          y(
            null,
            Ne,
            g,
            w,
            c,
            _,
            v
          ), d.el = Ne.el;
        }
        if (X && pe(X, _), !Fe && (P = B && B.onVnodeMounted)) {
          const Ne = d;
          pe(
            () => Le(P, Y, Ne),
            _
          );
        }
        (d.shapeFlag & 256 || Y && xt(Y.vnode) && Y.vnode.shapeFlag & 256) && c.a && pe(c.a, _), c.isMounted = !0, d = g = w = null;
      }
    };
    c.scope.on();
    const T = c.effect = new Ws(E);
    c.scope.off();
    const x = c.update = T.run.bind(T), L = c.job = T.runIfDirty.bind(T);
    L.i = c, L.id = c.uid, T.scheduler = () => Ir(L), lt(c, !0), x();
  }, te = (c, d, g) => {
    d.component = c;
    const w = c.vnode.props;
    c.vnode = d, c.next = null, Bl(c, d.props, w, g), Wl(c, d.children, g), nt(), Gr(c), rt();
  }, Z = (c, d, g, w, _, v, O, E, T = !1) => {
    const x = c && c.children, L = c ? c.shapeFlag : 0, P = d.children, { patchFlag: N, shapeFlag: B } = d;
    if (N > 0) {
      if (N & 128) {
        Xt(
          x,
          P,
          g,
          w,
          _,
          v,
          O,
          E,
          T
        );
        return;
      } else if (N & 256) {
        st(
          x,
          P,
          g,
          w,
          _,
          v,
          O,
          E,
          T
        );
        return;
      }
    }
    B & 8 ? (L & 16 && Ot(x, _, v), P !== x && u(g, P)) : L & 16 ? B & 16 ? Xt(
      x,
      P,
      g,
      w,
      _,
      v,
      O,
      E,
      T
    ) : Ot(x, _, v, !0) : (L & 8 && u(g, ""), B & 16 && k(
      P,
      g,
      w,
      _,
      v,
      O,
      E,
      T
    ));
  }, st = (c, d, g, w, _, v, O, E, T) => {
    c = c || bt, d = d || bt;
    const x = c.length, L = d.length, P = Math.min(x, L);
    let N;
    for (N = 0; N < P; N++) {
      const B = d[N] = T ? Qe(d[N]) : Be(d[N]);
      y(
        c[N],
        B,
        g,
        null,
        _,
        v,
        O,
        E,
        T
      );
    }
    x > L ? Ot(
      c,
      _,
      v,
      !0,
      !1,
      P
    ) : k(
      d,
      g,
      w,
      _,
      v,
      O,
      E,
      T,
      P
    );
  }, Xt = (c, d, g, w, _, v, O, E, T) => {
    let x = 0;
    const L = d.length;
    let P = c.length - 1, N = L - 1;
    for (; x <= P && x <= N; ) {
      const B = c[x], z = d[x] = T ? Qe(d[x]) : Be(d[x]);
      if (ct(B, z))
        y(
          B,
          z,
          g,
          null,
          _,
          v,
          O,
          E,
          T
        );
      else
        break;
      x++;
    }
    for (; x <= P && x <= N; ) {
      const B = c[P], z = d[N] = T ? Qe(d[N]) : Be(d[N]);
      if (ct(B, z))
        y(
          B,
          z,
          g,
          null,
          _,
          v,
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
        const B = N + 1, z = B < L ? d[B].el : w;
        for (; x <= N; )
          y(
            null,
            d[x] = T ? Qe(d[x]) : Be(d[x]),
            g,
            z,
            _,
            v,
            O,
            E,
            T
          ), x++;
      }
    } else if (x > N)
      for (; x <= P; )
        Ie(c[x], _, v, !0), x++;
    else {
      const B = x, z = x, X = /* @__PURE__ */ new Map();
      for (x = z; x <= N; x++) {
        const Se = d[x] = T ? Qe(d[x]) : Be(d[x]);
        Se.key != null && X.set(Se.key, x);
      }
      let Y, xe = 0;
      const be = N - z + 1;
      let Fe = !1, Ne = 0;
      const Mt = new Array(be);
      for (x = 0; x < be; x++) Mt[x] = 0;
      for (x = B; x <= P; x++) {
        const Se = c[x];
        if (xe >= be) {
          Ie(Se, _, v, !0);
          continue;
        }
        let De;
        if (Se.key != null)
          De = X.get(Se.key);
        else
          for (Y = z; Y <= N; Y++)
            if (Mt[Y - z] === 0 && ct(Se, d[Y])) {
              De = Y;
              break;
            }
        De === void 0 ? Ie(Se, _, v, !0) : (Mt[De - z] = x + 1, De >= Ne ? Ne = De : Fe = !0, y(
          Se,
          d[De],
          g,
          null,
          _,
          v,
          O,
          E,
          T
        ), xe++);
      }
      const Kr = Fe ? Gl(Mt) : bt;
      for (Y = Kr.length - 1, x = be - 1; x >= 0; x--) {
        const Se = z + x, De = d[Se], Wr = Se + 1 < L ? d[Se + 1].el : w;
        Mt[x] === 0 ? y(
          null,
          De,
          g,
          Wr,
          _,
          v,
          O,
          E,
          T
        ) : Fe && (Y < 0 || x !== Kr[Y] ? it(De, g, Wr, 2) : Y--);
      }
    }
  }, it = (c, d, g, w, _ = null) => {
    const { el: v, type: O, transition: E, children: T, shapeFlag: x } = c;
    if (x & 6) {
      it(c.component.subTree, d, g, w);
      return;
    }
    if (x & 128) {
      c.suspense.move(d, g, w);
      return;
    }
    if (x & 64) {
      O.move(c, d, g, Pt);
      return;
    }
    if (O === we) {
      r(v, d, g);
      for (let P = 0; P < T.length; P++)
        it(T[P], d, g, w);
      r(c.anchor, d, g);
      return;
    }
    if (O === cn) {
      M(c, d, g);
      return;
    }
    if (w !== 2 && x & 1 && E)
      if (w === 0)
        E.beforeEnter(v), r(v, d, g), pe(() => E.enter(v), _);
      else {
        const { leave: P, delayLeave: N, afterLeave: B } = E, z = () => r(v, d, g), X = () => {
          P(v, () => {
            z(), B && B();
          });
        };
        N ? N(v, z, X) : X();
      }
    else
      r(v, d, g);
  }, Ie = (c, d, g, w = !1, _ = !1) => {
    const {
      type: v,
      props: O,
      ref: E,
      children: T,
      dynamicChildren: x,
      shapeFlag: L,
      patchFlag: P,
      dirs: N,
      cacheIndex: B
    } = c;
    if (P === -2 && (_ = !1), E != null && mn(E, null, g, c, !0), B != null && (d.renderCache[B] = void 0), L & 256) {
      d.ctx.deactivate(c);
      return;
    }
    const z = L & 1 && N, X = !xt(c);
    let Y;
    if (X && (Y = O && O.onVnodeBeforeUnmount) && Le(Y, d, c), L & 6)
      yo(c.component, g, w);
    else {
      if (L & 128) {
        c.suspense.unmount(g, w);
        return;
      }
      z && ot(c, null, d, "beforeUnmount"), L & 64 ? c.type.remove(
        c,
        d,
        g,
        Pt,
        w
      ) : x && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !x.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (v !== we || P > 0 && P & 64) ? Ot(
        x,
        d,
        g,
        !1,
        !0
      ) : (v === we && P & 384 || !_ && L & 16) && Ot(T, d, g), w && Hr(c);
    }
    (X && (Y = O && O.onVnodeUnmounted) || z) && pe(() => {
      Y && Le(Y, d, c), z && ot(c, null, d, "unmounted");
    }, g);
  }, Hr = (c) => {
    const { type: d, el: g, anchor: w, transition: _ } = c;
    if (d === we) {
      mo(g, w);
      return;
    }
    if (d === cn) {
      R(c);
      return;
    }
    const v = () => {
      s(g), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (c.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: O, delayLeave: E } = _, T = () => O(g, v);
      E ? E(c.el, v, T) : T();
    } else
      v();
  }, mo = (c, d) => {
    let g;
    for (; c !== d; )
      g = p(c), s(c), c = g;
    s(d);
  }, yo = (c, d, g) => {
    const { bum: w, scope: _, job: v, subTree: O, um: E, m: T, a: x } = c;
    ss(T), ss(x), w && Hn(w), _.stop(), v && (v.flags |= 8, Ie(O, c, d, g)), E && pe(E, d), pe(() => {
      c.isUnmounted = !0;
    }, d), d && d.pendingBranch && !d.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === d.pendingId && (d.deps--, d.deps === 0 && d.resolve());
  }, Ot = (c, d, g, w = !1, _ = !1, v = 0) => {
    for (let O = v; O < c.length; O++)
      Ie(c[O], d, g, w, _);
  }, Qt = (c) => {
    if (c.shapeFlag & 6)
      return Qt(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const d = p(c.anchor || c.el), g = d && d[hi];
    return g ? p(g) : d;
  };
  let $n = !1;
  const Vr = (c, d, g) => {
    c == null ? d._vnode && Ie(d._vnode, null, null, !0) : y(
      d._vnode || null,
      c,
      d,
      null,
      null,
      null,
      g
    ), d._vnode = c, $n || ($n = !0, Gr(), ci(), $n = !1);
  }, Pt = {
    p: y,
    um: Ie,
    m: it,
    r: Hr,
    mt: ce,
    mc: k,
    pc: Z,
    pbc: K,
    n: Qt,
    o: e
  };
  return {
    render: Vr,
    hydrate: void 0,
    createApp: Ll(Vr)
  };
}
function qn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function lt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function kl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function jr(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (j(r) && j(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let l = s[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[i] = Qe(s[i]), l.el = o.el), !n && l.patchFlag !== -2 && jr(o, l)), l.type === Ln && (l.el = o.el);
    }
}
function Gl(e) {
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
function ss(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const ql = Symbol.for("v-scx"), Jl = () => un(ql);
function Yl(e, t) {
  return $r(
    e,
    null,
    { flush: "sync" }
  );
}
function Me(e, t, n) {
  return $r(e, t, n);
}
function $r(e, t, n = q) {
  const { immediate: r, deep: s, flush: i, once: o } = n, l = se({}, n), f = t && r || !t && i !== "post";
  let a;
  if (Tt) {
    if (i === "sync") {
      const m = Jl();
      a = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!f) {
      const m = () => {
      };
      return m.stop = He, m.resume = He, m.pause = He, m;
    }
  }
  const u = le;
  l.call = (m, S, y) => Re(m, u, S, y);
  let h = !1;
  i === "post" ? l.scheduler = (m) => {
    pe(m, u && u.suspense);
  } : i !== "sync" && (h = !0, l.scheduler = (m, S) => {
    S ? m() : Ir(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), h && (m.flags |= 2, u && (m.id = u.uid, m.i = u));
  };
  const p = al(e, t, l);
  return Tt && (a ? a.push(p) : f && p()), p;
}
function Zl(e, t, n) {
  const r = this.proxy, s = ne(e) ? e.includes(".") ? Wi(r, e) : () => r[e] : e.bind(r, r);
  let i;
  $(t) ? i = t : (i = t.handler, n = t);
  const o = Zt(this), l = $r(s, i.bind(r), n);
  return o(), l;
}
function Wi(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
function Ku(e, t, n = q) {
  const r = At(), s = Te(t), i = tt(t), o = Ui(e, s), l = ll((f, a) => {
    let u, h = q, p;
    return Yl(() => {
      const m = e[s];
      ve(u, m) && (u = m, a());
    }), {
      get() {
        return f(), n.get ? n.get(u) : u;
      },
      set(m) {
        const S = n.set ? n.set(m) : m;
        if (!ve(S, u) && !(h !== q && ve(m, h)))
          return;
        const y = r.vnode.props;
        y && // check if parent has passed v-model
        (t in y || s in y || i in y) && (`onUpdate:${t}` in y || `onUpdate:${s}` in y || `onUpdate:${i}` in y) || (u = m, a()), r.emit(`update:${t}`, S), ve(m, S) && ve(m, h) && !ve(S, p) && a(), h = m, p = S;
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
const Ui = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Te(t)}Modifiers`] || e[`${tt(t)}Modifiers`];
function Xl(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || q;
  let s = n;
  const i = t.startsWith("update:"), o = i && Ui(r, t.slice(7));
  o && (o.trim && (s = n.map((u) => ne(u) ? u.trim() : u)), o.number && (s = n.map(Oo)));
  let l, f = r[l = Bn(t)] || // also try camelCase event handler (#2249)
  r[l = Bn(Te(t))];
  !f && i && (f = r[l = Bn(tt(t))]), f && Re(
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
function zi(e, t, n = !1) {
  const r = t.emitsCache, s = r.get(e);
  if (s !== void 0)
    return s;
  const i = e.emits;
  let o = {}, l = !1;
  if (!$(e)) {
    const f = (a) => {
      const u = zi(a, t, !0);
      u && (l = !0, se(o, u));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !l ? (ee(e) && r.set(e, null), null) : (j(i) ? i.forEach((f) => o[f] = null) : se(o, i), ee(e) && r.set(e, o), o);
}
function Dn(e, t) {
  return !e || !Sn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), J(e, t[0].toLowerCase() + t.slice(1)) || J(e, tt(t)) || J(e, t));
}
function is(e) {
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
    renderCache: u,
    props: h,
    data: p,
    setupState: m,
    ctx: S,
    inheritAttrs: y
  } = e, D = gn(e);
  let b, C;
  try {
    if (n.shapeFlag & 4) {
      const R = s || r, V = R;
      b = Be(
        a.call(
          V,
          R,
          u,
          h,
          m,
          p,
          S
        )
      ), C = l;
    } else {
      const R = t;
      b = Be(
        R.length > 1 ? R(
          h,
          { attrs: l, slots: o, emit: f }
        ) : R(
          h,
          null
        )
      ), C = t.props ? l : Ql(l);
    }
  } catch (R) {
    Ht.length = 0, Jt(R, e, 1), b = re(ye);
  }
  let M = b;
  if (C && y !== !1) {
    const R = Object.keys(C), { shapeFlag: V } = M;
    R.length && V & 7 && (i && R.some(_r) && (C = ef(
      C,
      i
    )), M = et(M, C, !1, !0));
  }
  return n.dirs && (M = et(M, null, !1, !0), M.dirs = M.dirs ? M.dirs.concat(n.dirs) : n.dirs), n.transition && ht(M, n.transition), b = M, gn(D), b;
}
const Ql = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Sn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, ef = (e, t) => {
  const n = {};
  for (const r in e)
    (!_r(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function tf(e, t, n) {
  const { props: r, children: s, component: i } = e, { props: o, children: l, patchFlag: f } = t, a = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return r ? os(r, o, a) : !!o;
    if (f & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const p = u[h];
        if (o[p] !== r[p] && !Dn(a, p))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : r === o ? !1 : r ? o ? os(r, o, a) : !0 : !!o;
  return !1;
}
function os(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (t[i] !== e[i] && !Dn(n, i))
      return !0;
  }
  return !1;
}
function nf({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const ki = (e) => e.__isSuspense;
function rf(e, t) {
  t && t.pendingBranch ? j(e) ? t.effects.push(...e) : t.effects.push(e) : pl(e);
}
const we = Symbol.for("v-fgt"), Ln = Symbol.for("v-txt"), ye = Symbol.for("v-cmt"), cn = Symbol.for("v-stc"), Ht = [];
let Ce = null;
function cr(e = !1) {
  Ht.push(Ce = e ? null : []);
}
function sf() {
  Ht.pop(), Ce = Ht[Ht.length - 1] || null;
}
let zt = 1;
function ls(e, t = !1) {
  zt += e, e < 0 && Ce && t && (Ce.hasOnce = !0);
}
function Gi(e) {
  return e.dynamicChildren = zt > 0 ? Ce || bt : null, sf(), zt > 0 && Ce && Ce.push(e), e;
}
function Wu(e, t, n, r, s, i) {
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
function ar(e, t, n, r, s) {
  return Gi(
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
function kt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ct(e, t) {
  return e.type === t.type && e.key === t.key;
}
const qi = ({ key: e }) => e ?? null, an = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ne(e) || ue(e) || $(e) ? { i: fe, r: e, k: t, f: !!n } : e : null);
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
    ctx: fe
  };
  return l ? (Br(f, n), i & 128 && e.normalize(f)) : n && (f.shapeFlag |= ne(n) ? 8 : 16), zt > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Ce && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && Ce.push(f), f;
}
const re = of;
function of(e, t = null, n = null, r = 0, s = null, i = !1) {
  if ((!e || e === Ai) && (e = ye), kt(e)) {
    const l = et(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Br(l, n), zt > 0 && !i && Ce && (l.shapeFlag & 6 ? Ce[Ce.indexOf(e)] = l : Ce.push(l)), l.patchFlag = -2, l;
  }
  if (bf(e) && (e = e.__vccOpts), t) {
    t = lf(t);
    let { class: l, style: f } = t;
    l && !ne(l) && (t.class = Sr(l)), ee(f) && (Mr(f) && !j(f) && (f = se({}, f)), t.style = xr(f));
  }
  const o = ne(e) ? 1 : ki(e) ? 128 : pi(e) ? 64 : ee(e) ? 4 : $(e) ? 2 : 0;
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
function lf(e) {
  return e ? Mr(e) || Di(e) ? se({}, e) : e : null;
}
function et(e, t, n = !1, r = !1) {
  const { props: s, ref: i, patchFlag: o, children: l, transition: f } = e, a = t ? uf(s || {}, t) : s, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && qi(a),
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
    ssContent: e.ssContent && et(e.ssContent),
    ssFallback: e.ssFallback && et(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && r && ht(
    u,
    f.clone(u)
  ), u;
}
function ff(e = " ", t = 0) {
  return re(Ln, null, e, t);
}
function Uu(e, t) {
  const n = re(cn, null, e);
  return n.staticCount = t, n;
}
function zu(e = "", t = !1) {
  return t ? (cr(), ar(ye, null, e)) : re(ye, null, e);
}
function Be(e) {
  return e == null || typeof e == "boolean" ? re(ye) : j(e) ? re(
    we,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : kt(e) ? Qe(e) : re(Ln, null, String(e));
}
function Qe(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : et(e);
}
function Br(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (j(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Br(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Di(t) ? t._ctx = fe : s === 3 && fe && (fe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else $(t) ? (t = { default: t, _ctx: fe }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [ff(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function uf(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = Sr([t.class, r.class]));
      else if (s === "style")
        t.style = xr([t.style, r.style]);
      else if (Sn(s)) {
        const i = t[s], o = r[s];
        o && i !== o && !(j(i) && i.includes(o)) && (t[s] = i ? [].concat(i, o) : o);
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
const cf = Ii();
let af = 0;
function df(e, t, n) {
  const r = e.type, s = (t ? t.appContext : e.appContext) || cf, i = {
    uid: af++,
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
    scope: new jo(
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
    propsOptions: ji(r, s),
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Xl.bind(null, i), e.ce && e.ce(i), i;
}
let le = null;
const At = () => le || fe;
let _n, dr;
{
  const e = An(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (i) => {
      s.length > 1 ? s.forEach((o) => o(i)) : s[0](i);
    };
  };
  _n = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => le = n
  ), dr = t(
    "__VUE_SSR_SETTERS__",
    (n) => Tt = n
  );
}
const Zt = (e) => {
  const t = le;
  return _n(e), e.scope.on(), () => {
    e.scope.off(), _n(t);
  };
}, fs = () => {
  le && le.scope.off(), _n(null);
};
function Yi(e) {
  return e.vnode.shapeFlag & 4;
}
let Tt = !1;
function hf(e, t = !1, n = !1) {
  t && dr(t);
  const { props: r, children: s } = e.vnode, i = Yi(e);
  $l(e, r, i, t), Kl(e, s, n);
  const o = i ? pf(e, t) : void 0;
  return t && dr(!1), o;
}
function pf(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Pl);
  const { setup: r } = n;
  if (r) {
    nt();
    const s = e.setupContext = r.length > 1 ? mf(e) : null, i = Zt(e), o = qt(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), l = Ds(o);
    if (rt(), i(), (l || e.sp) && !xt(e) && Dr(e), l) {
      if (o.then(fs, fs), t)
        return o.then((f) => {
          us(e, f);
        }).catch((f) => {
          Jt(f, e, 0);
        });
      e.asyncDep = o;
    } else
      us(e, o);
  } else
    Zi(e);
}
function us(e, t, n) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ee(t) && (e.setupState = li(t)), Zi(e);
}
function Zi(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || He);
  {
    const s = Zt(e);
    nt();
    try {
      Ml(e);
    } finally {
      rt(), s();
    }
  }
}
const gf = {
  get(e, t) {
    return ae(e, "get", ""), e[t];
  }
};
function mf(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, gf),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function jn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(li(rl(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Bt)
        return Bt[n](e);
    },
    has(t, n) {
      return n in t || n in Bt;
    }
  })) : e.proxy;
}
function yf(e, t = !0) {
  return $(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function bf(e) {
  return $(e) && "__vccOpts" in e;
}
const oe = (e, t) => ul(e, t, Tt);
function Xi(e, t, n) {
  const r = arguments.length;
  return r === 2 ? ee(t) && !j(t) ? kt(t) ? re(e, null, [t]) : re(e, t) : re(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && kt(n) && (n = [n]), re(e, t, n));
}
const _f = "3.5.13";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let hr;
const cs = typeof window < "u" && window.trustedTypes;
if (cs)
  try {
    hr = /* @__PURE__ */ cs.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Qi = hr ? (e) => hr.createHTML(e) : (e) => e, vf = "http://www.w3.org/2000/svg", wf = "http://www.w3.org/1998/Math/MathML", We = typeof document < "u" ? document : null, as = We && /* @__PURE__ */ We.createElement("template"), xf = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? We.createElementNS(vf, e) : t === "mathml" ? We.createElementNS(wf, e) : n ? We.createElement(e, { is: n }) : We.createElement(e);
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
      as.innerHTML = Qi(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = as.content;
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
}, Je = "transition", It = "animation", Et = Symbol("_vtc"), eo = {
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
}, to = /* @__PURE__ */ se(
  {},
  bi,
  eo
), Sf = (e) => (e.displayName = "Transition", e.props = to, e), ku = /* @__PURE__ */ Sf(
  (e, { slots: t }) => Xi(bl, no(e), t)
), ft = (e, t = []) => {
  j(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, ds = (e) => e ? j(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function no(e) {
  const t = {};
  for (const A in e)
    A in eo || (t[A] = e[A]);
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
    appearToClass: u = l,
    leaveFromClass: h = `${n}-leave-from`,
    leaveActiveClass: p = `${n}-leave-active`,
    leaveToClass: m = `${n}-leave-to`
  } = e, S = Cf(s), y = S && S[0], D = S && S[1], {
    onBeforeEnter: b,
    onEnter: C,
    onEnterCancelled: M,
    onLeave: R,
    onLeaveCancelled: V,
    onBeforeAppear: U = b,
    onAppear: H = C,
    onAppearCancelled: k = M
  } = t, I = (A, W, ce, Ve) => {
    A._enterCancelled = Ve, Ye(A, W ? u : l), Ye(A, W ? a : o), ce && ce();
  }, K = (A, W) => {
    A._isLeaving = !1, Ye(A, h), Ye(A, m), Ye(A, p), W && W();
  }, F = (A) => (W, ce) => {
    const Ve = A ? H : C, ie = () => I(W, A, ce);
    ft(Ve, [W, ie]), hs(() => {
      Ye(W, A ? f : i), je(W, A ? u : l), ds(Ve) || ps(W, r, y, ie);
    });
  };
  return se(t, {
    onBeforeEnter(A) {
      ft(b, [A]), je(A, i), je(A, o);
    },
    onBeforeAppear(A) {
      ft(U, [A]), je(A, f), je(A, a);
    },
    onEnter: F(!1),
    onAppear: F(!0),
    onLeave(A, W) {
      A._isLeaving = !0;
      const ce = () => K(A, W);
      je(A, h), A._enterCancelled ? (je(A, p), pr()) : (pr(), je(A, p)), hs(() => {
        A._isLeaving && (Ye(A, h), je(A, m), ds(R) || ps(A, r, D, ce));
      }), ft(R, [A, ce]);
    },
    onEnterCancelled(A) {
      I(A, !1, void 0, !0), ft(M, [A]);
    },
    onAppearCancelled(A) {
      I(A, !0, void 0, !0), ft(k, [A]);
    },
    onLeaveCancelled(A) {
      K(A), ft(V, [A]);
    }
  });
}
function Cf(e) {
  if (e == null)
    return null;
  if (ee(e))
    return [Jn(e.enter), Jn(e.leave)];
  {
    const t = Jn(e);
    return [t, t];
  }
}
function Jn(e) {
  return Po(e);
}
function je(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Et] || (e[Et] = /* @__PURE__ */ new Set())).add(t);
}
function Ye(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[Et];
  n && (n.delete(t), n.size || (e[Et] = void 0));
}
function hs(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Tf = 0;
function ps(e, t, n, r) {
  const s = e._endId = ++Tf, i = () => {
    s === e._endId && r();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: o, timeout: l, propCount: f } = ro(e, t);
  if (!o)
    return r();
  const a = o + "end";
  let u = 0;
  const h = () => {
    e.removeEventListener(a, p), i();
  }, p = (m) => {
    m.target === e && ++u >= f && h();
  };
  setTimeout(() => {
    u < f && h();
  }, l + 1), e.addEventListener(a, p);
}
function ro(e, t) {
  const n = window.getComputedStyle(e), r = (S) => (n[S] || "").split(", "), s = r(`${Je}Delay`), i = r(`${Je}Duration`), o = gs(s, i), l = r(`${It}Delay`), f = r(`${It}Duration`), a = gs(l, f);
  let u = null, h = 0, p = 0;
  t === Je ? o > 0 && (u = Je, h = o, p = i.length) : t === It ? a > 0 && (u = It, h = a, p = f.length) : (h = Math.max(o, a), u = h > 0 ? o > a ? Je : It : null, p = u ? u === Je ? i.length : f.length : 0);
  const m = u === Je && /\b(transform|all)(,|$)/.test(
    r(`${Je}Property`).toString()
  );
  return {
    type: u,
    timeout: h,
    propCount: p,
    hasTransform: m
  };
}
function gs(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => ms(n) + ms(e[r])));
}
function ms(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function pr() {
  return document.body.offsetHeight;
}
function Ef(e, t, n) {
  const r = e[Et];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const vn = Symbol("_vod"), so = Symbol("_vsh"), Gu = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[vn] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ft(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Ft(e, !0), r.enter(e)) : r.leave(e, () => {
      Ft(e, !1);
    }) : Ft(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ft(e, t);
  }
};
function Ft(e, t) {
  e.style.display = t ? e[vn] : "none", e[so] = !t;
}
const Af = Symbol(""), Of = /(^|;)\s*display\s*:/;
function Pf(e, t, n) {
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
      const o = r[Af];
      o && (n += ";" + o), r.cssText = n, i = Of.test(n);
    }
  } else t && e.removeAttribute("style");
  vn in e && (e[vn] = i ? r.display : "", e[so] && (r.display = "none"));
}
const ys = /\s*!important$/;
function dn(e, t, n) {
  if (j(n))
    n.forEach((r) => dn(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Mf(e, t);
    ys.test(n) ? e.setProperty(
      tt(r),
      n.replace(ys, ""),
      "important"
    ) : e[r] = n;
  }
}
const bs = ["Webkit", "Moz", "ms"], Yn = {};
function Mf(e, t) {
  const n = Yn[t];
  if (n)
    return n;
  let r = Te(t);
  if (r !== "filter" && r in e)
    return Yn[t] = r;
  r = En(r);
  for (let s = 0; s < bs.length; s++) {
    const i = bs[s] + r;
    if (i in e)
      return Yn[t] = i;
  }
  return t;
}
const _s = "http://www.w3.org/1999/xlink";
function vs(e, t, n, r, s, i = Do(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(_s, t.slice(6, t.length)) : e.setAttributeNS(_s, t, n) : n == null || i && !Bs(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Ge(n) ? String(n) : n
  );
}
function ws(e, t, n, r, s) {
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
    l === "boolean" ? n = Bs(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(s || t);
}
function Rf(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function If(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const xs = Symbol("_vei");
function Ff(e, t, n, r, s = null) {
  const i = e[xs] || (e[xs] = {}), o = i[t];
  if (r && o)
    o.value = r;
  else {
    const [l, f] = Nf(t);
    if (r) {
      const a = i[t] = jf(
        r,
        s
      );
      Rf(e, l, a, f);
    } else o && (If(e, l, o, f), i[t] = void 0);
  }
}
const Ss = /(?:Once|Passive|Capture)$/;
function Nf(e) {
  let t;
  if (Ss.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Ss); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : tt(e.slice(2)), t];
}
let Zn = 0;
const Df = /* @__PURE__ */ Promise.resolve(), Lf = () => Zn || (Df.then(() => Zn = 0), Zn = Date.now());
function jf(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Re(
      $f(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = Lf(), n;
}
function $f(e, t) {
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
const Cs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Bf = (e, t, n, r, s, i) => {
  const o = s === "svg";
  t === "class" ? Ef(e, r, o) : t === "style" ? Pf(e, n, r) : Sn(t) ? _r(t) || Ff(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Hf(e, t, r, o)) ? (ws(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && vs(e, t, r, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ne(r)) ? ws(e, Te(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), vs(e, t, r, o));
};
function Hf(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Cs(t) && $(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Cs(t) && ne(n) ? !1 : t in e;
}
const io = /* @__PURE__ */ new WeakMap(), oo = /* @__PURE__ */ new WeakMap(), wn = Symbol("_moveCb"), Ts = Symbol("_enterCb"), Vf = (e) => (delete e.props.mode, e), Kf = /* @__PURE__ */ Vf({
  name: "TransitionGroup",
  props: /* @__PURE__ */ se({}, to, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = At(), r = yi();
    let s, i;
    return Si(() => {
      if (!s.length)
        return;
      const o = e.moveClass || `${e.name || "v"}-move`;
      if (!kf(
        s[0].el,
        n.vnode.el,
        o
      ))
        return;
      s.forEach(Wf), s.forEach(Uf);
      const l = s.filter(zf);
      pr(), l.forEach((f) => {
        const a = f.el, u = a.style;
        je(a, o), u.transform = u.webkitTransform = u.transitionDuration = "";
        const h = a[wn] = (p) => {
          p && p.target !== a || (!p || /transform$/.test(p.propertyName)) && (a.removeEventListener("transitionend", h), a[wn] = null, Ye(a, o));
        };
        a.addEventListener("transitionend", h);
      });
    }), () => {
      const o = G(e), l = no(o);
      let f = o.tag || we;
      if (s = [], i)
        for (let a = 0; a < i.length; a++) {
          const u = i[a];
          u.el && u.el instanceof Element && (s.push(u), ht(
            u,
            Ut(
              u,
              l,
              r,
              n
            )
          ), io.set(
            u,
            u.el.getBoundingClientRect()
          ));
        }
      i = t.default ? Fr(t.default()) : [];
      for (let a = 0; a < i.length; a++) {
        const u = i[a];
        u.key != null && ht(
          u,
          Ut(u, l, r, n)
        );
      }
      return re(f, null, i);
    };
  }
}), qu = Kf;
function Wf(e) {
  const t = e.el;
  t[wn] && t[wn](), t[Ts] && t[Ts]();
}
function Uf(e) {
  oo.set(e, e.el.getBoundingClientRect());
}
function zf(e) {
  const t = io.get(e), n = oo.get(e), r = t.left - n.left, s = t.top - n.top;
  if (r || s) {
    const i = e.el.style;
    return i.transform = i.webkitTransform = `translate(${r}px,${s}px)`, i.transitionDuration = "0s", e;
  }
}
function kf(e, t, n) {
  const r = e.cloneNode(), s = e[Et];
  s && s.forEach((l) => {
    l.split(/\s+/).forEach((f) => f && r.classList.remove(f));
  }), n.split(/\s+/).forEach((l) => l && r.classList.add(l)), r.style.display = "none";
  const i = t.nodeType === 1 ? t : t.parentNode;
  i.appendChild(r);
  const { hasTransform: o } = ro(r);
  return i.removeChild(r), o;
}
const Gf = ["ctrl", "shift", "alt", "meta"], qf = {
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
  exact: (e, t) => Gf.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ju = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = (s, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const l = qf[t[o]];
      if (l && l(s, t)) return;
    }
    return e(s, ...i);
  });
}, Jf = /* @__PURE__ */ se({ patchProp: Bf }, xf);
let Es;
function Yf() {
  return Es || (Es = Ul(Jf));
}
const Yu = (...e) => {
  const t = Yf().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const s = Xf(r);
    if (!s) return;
    const i = t._component;
    !$(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const o = n(s, !1, Zf(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
  }, t;
};
function Zf(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Xf(e) {
  return ne(e) ? document.querySelector(e) : e;
}
function Zu(e, {
  i18next: t,
  rerenderOn: n = ["languageChanged", "loaded", "added", "removed"],
  slotStart: r = "{",
  slotEnd: s = "}"
}) {
  const i = Ae(/* @__PURE__ */ new Date()), o = () => In(() => {
    i.value = /* @__PURE__ */ new Date();
  }), l = () => i.value;
  n.forEach((a) => {
    var u;
    switch (a) {
      case "added":
      case "removed":
        (u = t.store) == null || u.on(a, o);
        break;
      default:
        t.on(a, o);
        break;
    }
  }), e.component("i18next", tu);
  const f = () => t.isInitialized;
  e.config.globalProperties.$t = As(
    t.t.bind(t),
    l,
    f
  ), e.config.globalProperties.$i18next = new Proxy(t, {
    get(a, u) {
      switch (u) {
        case "__withAccessRecording":
          return (h, p) => As(h, l, p);
        case "__slotPattern":
          return eu(r, s);
        default:
          return l(), Reflect.get(a, u);
      }
    }
  });
}
function Xu(e, t) {
  const n = lo();
  let r;
  return r = n.getFixedT(null, e ?? null, void 0), {
    i18next: n,
    t: n.__withAccessRecording(r, Qf(n, e))
  };
}
function Qf(e, t = []) {
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
function As(e, t, n) {
  return new Proxy(e, {
    apply: function(r, s, i) {
      return t(), n() ? Reflect.apply(r, s, i) : "";
    }
  });
}
function lo() {
  const e = At();
  if (!e)
    throw new Error(
      "i18next-vue: No Vue instance in context. This needs to be called inside setup()."
    );
  const t = e.appContext.config.globalProperties;
  if (!t.$i18next)
    throw new Error(
      "i18next-vue: Make sure to register the i18next-vue plugin using app.use(...)."
    );
  return t.$i18next;
}
function eu(e, t) {
  const n = `${e}\\s*([a-z0-9\\-]+)\\s*${t}`;
  return new RegExp(n, "gi");
}
var tu = /* @__PURE__ */ Nr({
  props: {
    translation: {
      type: String,
      required: !0
    }
  },
  setup(e, { slots: t }) {
    const n = lo().__slotPattern;
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
function Os(e, t) {
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
    t % 2 ? Os(Object(n), !0).forEach(function(r) {
      _e(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Os(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function nu(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ru(e) {
  var t = nu(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function xn(e) {
  "@babel/helpers - typeof";
  return xn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xn(e);
}
function _e(e, t, n) {
  return t = ru(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function su(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function iu(e, t) {
  if (e == null) return {};
  var n = su(e, t), r, s;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (s = 0; s < i.length; s++)
      r = i[s], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
var ou = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, fo = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(b, C, M) {
      if (!a(C) || h(C) || p(C) || m(C) || f(C))
        return C;
      var R, V = 0, U = 0;
      if (u(C))
        for (R = [], U = C.length; V < U; V++)
          R.push(n(b, C[V], M));
      else {
        R = {};
        for (var H in C)
          Object.prototype.hasOwnProperty.call(C, H) && (R[b(H, M)] = n(b, C[H], M));
      }
      return R;
    }, r = function(b, C) {
      C = C || {};
      var M = C.separator || "_", R = C.split || /(?=[A-Z])/;
      return b.split(R).join(M);
    }, s = function(b) {
      return S(b) ? b : (b = b.replace(/[\-_\s]+(.)?/g, function(C, M) {
        return M ? M.toUpperCase() : "";
      }), b.substr(0, 1).toLowerCase() + b.substr(1));
    }, i = function(b) {
      var C = s(b);
      return C.substr(0, 1).toUpperCase() + C.substr(1);
    }, o = function(b, C) {
      return r(b, C).toLowerCase();
    }, l = Object.prototype.toString, f = function(b) {
      return typeof b == "function";
    }, a = function(b) {
      return b === Object(b);
    }, u = function(b) {
      return l.call(b) == "[object Array]";
    }, h = function(b) {
      return l.call(b) == "[object Date]";
    }, p = function(b) {
      return l.call(b) == "[object RegExp]";
    }, m = function(b) {
      return l.call(b) == "[object Boolean]";
    }, S = function(b) {
      return b = b - 0, b === b;
    }, y = function(b, C) {
      var M = C && "process" in C ? C.process : C;
      return typeof M != "function" ? b : function(R, V) {
        return M(R, b, V);
      };
    }, D = {
      camelize: s,
      decamelize: o,
      pascalize: i,
      depascalize: o,
      camelizeKeys: function(b, C) {
        return n(y(s, C), b);
      },
      decamelizeKeys: function(b, C) {
        return n(y(o, C), b, C);
      },
      pascalizeKeys: function(b, C) {
        return n(y(i, C), b);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = D : t.humps = D;
  })(ou);
})(fo);
var lu = fo.exports, fu = ["class", "style"];
function uu(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), s = lu.camelize(n.slice(0, r)), i = n.slice(r + 1).trim();
    return t[s] = i, t;
  }, {});
}
function cu(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function uo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var r = (e.children || []).map(function(f) {
    return uo(f);
  }), s = Object.keys(e.attributes || {}).reduce(function(f, a) {
    var u = e.attributes[a];
    switch (a) {
      case "class":
        f.class = cu(u);
        break;
      case "style":
        f.style = uu(u);
        break;
      default:
        f.attrs[a] = u;
    }
    return f;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  n.class;
  var i = n.style, o = i === void 0 ? {} : i, l = iu(n, fu);
  return Xi(e.tag, ke(ke(ke({}, t), {}, {
    class: s.class,
    style: ke(ke({}, s.style), o)
  }, s.attrs), l), r);
}
var co = !1;
try {
  co = !0;
} catch {
}
function au() {
  if (!co && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Xn(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? _e({}, e, t) : {};
}
function du(e) {
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
function Ps(e) {
  if (e && xn(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Qn.icon)
    return Qn.icon(e);
  if (e === null)
    return null;
  if (xn(e) === "object" && e.prefix && e.iconName)
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
var Qu = /* @__PURE__ */ Nr({
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
    var r = n.attrs, s = oe(function() {
      return Ps(t.icon);
    }), i = oe(function() {
      return Xn("classes", du(t));
    }), o = oe(function() {
      return Xn("transform", typeof t.transform == "string" ? Qn.transform(t.transform) : t.transform);
    }), l = oe(function() {
      return Xn("mask", Ps(t.mask));
    }), f = oe(function() {
      return bo(s.value, ke(ke(ke(ke({}, i.value), o.value), l.value), {}, {
        symbol: t.symbol,
        title: t.title,
        titleId: t.titleId,
        maskId: t.maskId
      }));
    });
    Me(f, function(u) {
      if (!u)
        return au("Could not find one or more icon(s)", s.value, l.value);
    }, {
      immediate: !0
    });
    var a = oe(function() {
      return f.value ? uo(f.value.abstract[0], {}, r) : null;
    });
    return function() {
      return a.value;
    };
  }
});
function ao(e) {
  return Cr() ? (Ks(e), !0) : !1;
}
const hu = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const pu = Object.prototype.toString, gu = (e) => pu.call(e) === "[object Object]", gr = () => {
};
function mu(e, t) {
  function n(...r) {
    return new Promise((s, i) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(s).catch(i);
    });
  }
  return n;
}
const ho = (e) => e();
function yu(...e) {
  let t = 0, n, r = !0, s = gr, i, o, l, f, a;
  !ue(e[0]) && typeof e[0] == "object" ? { delay: o, trailing: l = !0, leading: f = !0, rejectOnCancel: a = !1 } = e[0] : [o, l = !0, f = !0, a = !1] = e;
  const u = () => {
    n && (clearTimeout(n), n = void 0, s(), s = gr);
  };
  return (p) => {
    const m = Ct(o), S = Date.now() - t, y = () => i = p();
    return u(), m <= 0 ? (t = Date.now(), y()) : (S > m && (f || !r) ? (t = Date.now(), y()) : l && (i = new Promise((D, b) => {
      s = a ? b : D, n = setTimeout(() => {
        t = Date.now(), r = !0, D(y()), u();
      }, Math.max(0, m - S));
    })), !f && !n && (n = setTimeout(() => r = !0, m)), r = !1, i);
  };
}
function bu(e = ho) {
  const t = Ae(!0);
  function n() {
    t.value = !1;
  }
  function r() {
    t.value = !0;
  }
  const s = (...i) => {
    t.value && e(...i);
  };
  return { isActive: Pr(t), pause: n, resume: r, eventFilter: s };
}
function _u(e) {
  return At();
}
function Ms(e) {
  return Array.isArray(e) ? e : [e];
}
function po(e, t, n = {}) {
  const {
    eventFilter: r = ho,
    ...s
  } = n;
  return Me(
    e,
    mu(
      r,
      t
    ),
    s
  );
}
function vu(e, t, n = {}) {
  const {
    eventFilter: r,
    ...s
  } = n, { eventFilter: i, pause: o, resume: l, isActive: f } = bu(r);
  return { stop: po(
    e,
    t,
    {
      ...s,
      eventFilter: i
    }
  ), pause: o, resume: l, isActive: f };
}
function wu(e, t = !0, n) {
  _u() ? Nn(e, n) : t ? e() : In(e);
}
function ec(e, t, n = {}) {
  const {
    throttle: r = 0,
    trailing: s = !0,
    leading: i = !0,
    ...o
  } = n;
  return po(
    e,
    t,
    {
      ...o,
      eventFilter: yu(r, s, i)
    }
  );
}
const Gt = hu ? window : void 0;
function mr(e) {
  var t;
  const n = Ct(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function Rs(...e) {
  let t, n, r, s;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, r, s] = e, t = Gt) : [t, n, r, s] = e, !t)
    return gr;
  n = Ms(n), r = Ms(r);
  const i = [], o = () => {
    i.forEach((u) => u()), i.length = 0;
  }, l = (u, h, p, m) => (u.addEventListener(h, p, m), () => u.removeEventListener(h, p, m)), f = Me(
    () => [mr(t), Ct(s)],
    ([u, h]) => {
      if (o(), !u)
        return;
      const p = gu(h) ? { ...h } : h;
      i.push(
        ...n.flatMap((m) => r.map((S) => l(u, m, S, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), a = () => {
    f(), o();
  };
  return ao(a), a;
}
function xu() {
  const e = Ae(!1), t = At();
  return t && Nn(() => {
    e.value = !0;
  }, t), e;
}
function Su(e) {
  const t = xu();
  return oe(() => (t.value, !!e()));
}
const on = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ln = "__vueuse_ssr_handlers__", Cu = /* @__PURE__ */ Tu();
function Tu() {
  return ln in on || (on[ln] = on[ln] || {}), on[ln];
}
function Eu(e, t) {
  return Cu[e] || t;
}
function Au(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const Ou = {
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
function Pu(e, t, n, r = {}) {
  var s;
  const {
    flush: i = "pre",
    deep: o = !0,
    listenToStorageChanges: l = !0,
    writeDefaults: f = !0,
    mergeDefaults: a = !1,
    shallow: u,
    window: h = Gt,
    eventFilter: p,
    onError: m = (F) => {
      console.error(F);
    },
    initOnMounted: S
  } = r, y = (u ? ii : Ae)(typeof t == "function" ? t() : t), D = oe(() => Ct(e));
  if (!n)
    try {
      n = Eu("getDefaultStorage", () => {
        var F;
        return (F = Gt) == null ? void 0 : F.localStorage;
      })();
    } catch (F) {
      m(F);
    }
  if (!n)
    return y;
  const b = Ct(t), C = Au(b), M = (s = r.serializer) != null ? s : Ou[C], { pause: R, resume: V } = vu(
    y,
    () => H(y.value),
    { flush: i, deep: o, eventFilter: p }
  );
  Me(D, () => I(), { flush: i }), h && l && wu(() => {
    n instanceof Storage ? Rs(h, "storage", I, { passive: !0 }) : Rs(h, Is, K), S && I();
  }), S || I();
  function U(F, A) {
    if (h) {
      const W = {
        key: D.value,
        oldValue: F,
        newValue: A,
        storageArea: n
      };
      h.dispatchEvent(n instanceof Storage ? new StorageEvent("storage", W) : new CustomEvent(Is, {
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
        const W = M.write(F);
        A !== W && (n.setItem(D.value, W), U(A, W));
      }
    } catch (A) {
      m(A);
    }
  }
  function k(F) {
    const A = F ? F.newValue : n.getItem(D.value);
    if (A == null)
      return f && b != null && n.setItem(D.value, M.write(b)), b;
    if (!F && a) {
      const W = M.read(A);
      return typeof a == "function" ? a(W, b) : C === "object" && !Array.isArray(W) ? { ...b, ...W } : W;
    } else return typeof A != "string" ? A : M.read(A);
  }
  function I(F) {
    if (!(F && F.storageArea !== n)) {
      if (F && F.key == null) {
        y.value = b;
        return;
      }
      if (!(F && F.key !== D.value)) {
        R();
        try {
          (F == null ? void 0 : F.newValue) !== M.write(y.value) && (y.value = k(F));
        } catch (A) {
          m(A);
        } finally {
          F ? In(V) : V();
        }
      }
    }
  }
  function K(F) {
    I(F.detail);
  }
  return y;
}
function tc(e, t, n = {}) {
  const { window: r = Gt, ...s } = n;
  let i;
  const o = Su(() => r && "ResizeObserver" in r), l = () => {
    i && (i.disconnect(), i = void 0);
  }, f = oe(() => {
    const h = Ct(e);
    return Array.isArray(h) ? h.map((p) => mr(p)) : [mr(h)];
  }), a = Me(
    f,
    (h) => {
      if (l(), o.value && r) {
        i = new ResizeObserver(t);
        for (const p of h)
          p && i.observe(p, s);
      }
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    l(), a();
  };
  return ao(u), {
    isSupported: o,
    stop: u
  };
}
function nc(e, t, n = {}) {
  const { window: r = Gt } = n;
  return Pu(e, t, r == null ? void 0 : r.localStorage, n);
}
function Mu(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function yr(e) {
  if (Mu(e)) {
    const t = e.$el;
    return _o(t) && vo(t) === "#comment" ? null : t;
  }
  return e;
}
function yt(e) {
  return typeof e == "function" ? e() : Rr(e);
}
function rc(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = yr(yt(e.element));
      return n == null ? {} : xo({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function go(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Fs(e, t) {
  const n = go(e);
  return Math.round(t * n) / n;
}
function sc(e, t, n) {
  n === void 0 && (n = {});
  const r = n.whileElementsMounted, s = oe(() => {
    var H;
    return (H = yt(n.open)) != null ? H : !0;
  }), i = oe(() => yt(n.middleware)), o = oe(() => {
    var H;
    return (H = yt(n.placement)) != null ? H : "bottom";
  }), l = oe(() => {
    var H;
    return (H = yt(n.strategy)) != null ? H : "absolute";
  }), f = oe(() => {
    var H;
    return (H = yt(n.transform)) != null ? H : !0;
  }), a = oe(() => yr(e.value)), u = oe(() => yr(t.value)), h = Ae(0), p = Ae(0), m = Ae(l.value), S = Ae(o.value), y = ii({}), D = Ae(!1), b = oe(() => {
    const H = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!u.value)
      return H;
    const k = Fs(u.value, h.value), I = Fs(u.value, p.value);
    return f.value ? {
      ...H,
      transform: "translate(" + k + "px, " + I + "px)",
      ...go(u.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: k + "px",
      top: I + "px"
    };
  });
  let C;
  function M() {
    if (a.value == null || u.value == null)
      return;
    const H = s.value;
    wo(a.value, u.value, {
      middleware: i.value,
      placement: o.value,
      strategy: l.value
    }).then((k) => {
      h.value = k.x, p.value = k.y, m.value = k.strategy, S.value = k.placement, y.value = k.middlewareData, D.value = H !== !1;
    });
  }
  function R() {
    typeof C == "function" && (C(), C = void 0);
  }
  function V() {
    if (R(), r === void 0) {
      M();
      return;
    }
    if (a.value != null && u.value != null) {
      C = r(a.value, u.value, M);
      return;
    }
  }
  function U() {
    s.value || (D.value = !1);
  }
  return Me([i, o, l, s], M, {
    flush: "sync"
  }), Me([a, u], V, {
    flush: "sync"
  }), Me(s, U, {
    flush: "sync"
  }), Cr() && Ks(R), {
    x: gt(h),
    y: gt(p),
    strategy: gt(m),
    placement: gt(S),
    middlewareData: gt(y),
    isPositioned: gt(D),
    floatingStyles: b,
    update: M
  };
}
export {
  re as A,
  Ci as B,
  Lu as C,
  tc as D,
  ec as E,
  we as F,
  ii as G,
  nc as H,
  Or as I,
  sc as J,
  Du as K,
  rc as L,
  Vu as M,
  Ku as N,
  rl as O,
  Ju as P,
  un as Q,
  qu as R,
  Fu as S,
  ku as T,
  jl as U,
  Sl as V,
  $u as W,
  Yu as X,
  Zu as Y,
  Qu as Z,
  xr as a,
  Ji as b,
  Wu as c,
  Nr as d,
  Uu as e,
  zu as f,
  Ae as g,
  oe as h,
  Me as i,
  Nn as j,
  In as k,
  Ti as l,
  uf as m,
  Sr as n,
  cr as o,
  ff as p,
  ar as q,
  Bu as r,
  gl as s,
  Lo as t,
  Rr as u,
  Gu as v,
  Nu as w,
  Hu as x,
  Xu as y,
  ju as z
};

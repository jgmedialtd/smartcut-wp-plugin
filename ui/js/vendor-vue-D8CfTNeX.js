import { w as ir, x as _o, y as wo, A as xo, B as So, C as Co } from "./vendor-DABu9zvL.js";
/**
* @vue/shared v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function xr(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const G = {}, bt = [], Ve = () => {
}, To = () => !1, Tn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Sr = (e) => e.startsWith("onUpdate:"), le = Object.assign, Cr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Eo = Object.prototype.hasOwnProperty, J = (e, t) => Eo.call(e, t), D = Array.isArray, _t = (e) => En(e) === "[object Map]", Ls = (e) => En(e) === "[object Set]", $ = (e) => typeof e == "function", ie = (e) => typeof e == "string", Je = (e) => typeof e == "symbol", ne = (e) => e !== null && typeof e == "object", js = (e) => (ne(e) || $(e)) && $(e.then) && $(e.catch), $s = Object.prototype.toString, En = (e) => $s.call(e), Ao = (e) => En(e).slice(8, -1), Bs = (e) => En(e) === "[object Object]", Tr = (e) => ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Nt = /* @__PURE__ */ xr(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), An = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Oo = /-(\w)/g, Ee = An(
  (e) => e.replace(Oo, (t, n) => n ? n.toUpperCase() : "")
), Po = /\B([A-Z])/g, it = An(
  (e) => e.replace(Po, "-$1").toLowerCase()
), On = An((e) => e.charAt(0).toUpperCase() + e.slice(1)), Wn = An(
  (e) => e ? `on${On(e)}` : ""
), we = (e, t) => !Object.is(e, t), kn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Hs = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Mo = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Ro = (e) => {
  const t = ie(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Gr;
const Pn = () => Gr || (Gr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Er(e) {
  if (D(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = ie(r) ? Do(r) : Er(r);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (ie(e) || ne(e))
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
function Ar(e) {
  let t = "";
  if (ie(e))
    t = e;
  else if (D(e))
    for (let n = 0; n < e.length; n++) {
      const r = Ar(e[n]);
      r && (t += r + " ");
    }
  else if (ne(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Lo = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", jo = /* @__PURE__ */ xr(Lo);
function Vs(e) {
  return !!e || e === "";
}
const Ks = (e) => !!(e && e.__v_isRef === !0), $o = (e) => ie(e) ? e : e == null ? "" : D(e) || ne(e) && (e.toString === $s || !$(e.toString)) ? Ks(e) ? $o(e.value) : JSON.stringify(e, Us, 2) : String(e), Us = (e, t) => Ks(t) ? Us(e, t.value) : _t(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], i) => (n[zn(r, i) + " =>"] = s, n),
    {}
  )
} : Ls(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => zn(n))
} : Je(t) ? zn(t) : ne(t) && !D(t) && !Bs(t) ? String(t) : t, zn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Je(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let he;
class Bo {
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
function Or() {
  return he;
}
function Ws(e, t = !1) {
  he && he.cleanups.push(e);
}
let te;
const Gn = /* @__PURE__ */ new WeakSet();
class ks {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, he && he.active && he.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Gn.has(this) && (Gn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Gs(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, qr(this), qs(this);
    const t = te, n = Me;
    te = this, Me = !0;
    try {
      return this.fn();
    } finally {
      Js(this), te = t, Me = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Rr(t);
      this.deps = this.depsTail = void 0, qr(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Gn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    or(this) && this.run();
  }
  get dirty() {
    return or(this);
  }
}
let zs = 0, Dt, Lt;
function Gs(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Lt, Lt = e;
    return;
  }
  e.next = Dt, Dt = e;
}
function Pr() {
  zs++;
}
function Mr() {
  if (--zs > 0)
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
function qs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Js(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), Rr(r), Ho(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  e.deps = t, e.depsTail = n;
}
function or(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ys(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ys(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Vt) || (e.globalVersion = Vt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !or(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = te, r = Me;
  te = e, Me = !0;
  try {
    qs(e);
    const s = e.fn(e._value);
    (t.version === 0 || we(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    te = n, Me = r, Js(e), e.flags &= -3;
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
let Me = !0;
const Zs = [];
function Ge() {
  Zs.push(Me), Me = !1;
}
function qe() {
  const e = Zs.pop();
  Me = e === void 0 ? !0 : e;
}
function qr(e) {
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
let Vt = 0;
class Vo {
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
      n = this.activeLink = new Vo(te, this), te.deps ? (n.prevDep = te.depsTail, te.depsTail.nextDep = n, te.depsTail = n) : te.deps = te.depsTail = n, Xs(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = te.depsTail, n.nextDep = void 0, te.depsTail.nextDep = n, te.depsTail = n, te.deps === n && (te.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Vt++, this.notify(t);
  }
  notify(t) {
    Pr();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Mr();
    }
  }
}
function Xs(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Xs(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const hn = /* @__PURE__ */ new WeakMap(), ht = Symbol(
  ""
), lr = Symbol(
  ""
), Kt = Symbol(
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
    Vt++;
    return;
  }
  const l = (f) => {
    f && f.trigger();
  };
  if (Pr(), t === "clear")
    o.forEach(l);
  else {
    const f = D(e), a = f && Tr(n);
    if (f && n === "length") {
      const c = Number(r);
      o.forEach((h, g) => {
        (g === "length" || g === Kt || !Je(g) && g >= c) && l(h);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), a && l(o.get(Kt)), t) {
        case "add":
          f ? a && l(o.get("length")) : (l(o.get(ht)), _t(e) && l(o.get(lr)));
          break;
        case "delete":
          f || (l(o.get(ht)), _t(e) && l(o.get(lr)));
          break;
        case "set":
          _t(e) && l(o.get(ht));
          break;
      }
  }
  Mr();
}
function Ko(e, t) {
  const n = hn.get(e);
  return n && n.get(t);
}
function gt(e) {
  const t = z(e);
  return t === e ? t : (pe(t, "iterate", Kt), Oe(e) ? t : t.map(de));
}
function Rn(e) {
  return pe(e = z(e), "iterate", Kt), e;
}
const Uo = {
  __proto__: null,
  [Symbol.iterator]() {
    return qn(this, Symbol.iterator, de);
  },
  concat(...e) {
    return gt(this).concat(
      ...e.map((t) => D(t) ? gt(t) : t)
    );
  },
  entries() {
    return qn(this, "entries", (e) => (e[1] = de(e[1]), e));
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
    return Jn(this, "includes", e);
  },
  indexOf(...e) {
    return Jn(this, "indexOf", e);
  },
  join(e) {
    return gt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Jn(this, "lastIndexOf", e);
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
    return Jr(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Jr(this, "reduceRight", e, t);
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
    return qn(this, "values", de);
  }
};
function qn(e, t, n) {
  const r = Rn(e), s = r[t]();
  return r !== e && !Oe(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.value && (i.value = n(i.value)), i;
  }), s;
}
const Wo = Array.prototype;
function Ke(e, t, n, r, s, i) {
  const o = Rn(e), l = o !== e && !Oe(e), f = o[t];
  if (f !== Wo[t]) {
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
function Jr(e, t, n, r) {
  const s = Rn(e);
  let i = n;
  return s !== e && (Oe(e) ? n.length > 3 && (i = function(o, l, f) {
    return n.call(this, o, l, f, e);
  }) : i = function(o, l, f) {
    return n.call(this, o, de(l), f, e);
  }), s[t](i, ...r);
}
function Jn(e, t, n) {
  const r = z(e);
  pe(r, "iterate", Kt);
  const s = r[t](...n);
  return (s === -1 || s === !1) && Fr(n[0]) ? (n[0] = z(n[0]), r[t](...n)) : s;
}
function Mt(e, t, n = []) {
  Ge(), Pr();
  const r = z(e)[t].apply(e, n);
  return Mr(), qe(), r;
}
const ko = /* @__PURE__ */ xr("__proto__,__v_isRef,__isVue"), Qs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Je)
);
function zo(e) {
  Je(e) || (e = String(e));
  const t = z(this);
  return pe(t, "has", e), t.hasOwnProperty(e);
}
class ei {
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
      return r === (s ? i ? oi : ii : i ? si : ri).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const o = D(t);
    if (!s) {
      let f;
      if (o && (f = Uo[n]))
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
    return (Je(n) ? Qs.has(n) : ko(n)) || (s || pe(t, "get", n), i) ? l : ce(l) ? o && Tr(n) ? l : l.value : ne(l) ? s ? Fn(l) : Ir(l) : l;
  }
}
class ti extends ei {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let i = t[n];
    if (!this._isShallow) {
      const f = rt(i);
      if (!Oe(r) && !rt(r) && (i = z(i), r = z(r)), !D(t) && ce(i) && !ce(r))
        return f ? !1 : (i.value = r, !0);
    }
    const o = D(t) && Tr(n) ? Number(n) < t.length : J(t, n), l = Reflect.set(
      t,
      n,
      r,
      ce(t) ? t : s
    );
    return t === z(s) && (o ? we(r, i) && We(t, "set", n, r) : We(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = J(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && We(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Je(n) || !Qs.has(n)) && pe(t, "has", n), r;
  }
  ownKeys(t) {
    return pe(
      t,
      "iterate",
      D(t) ? "length" : ht
    ), Reflect.ownKeys(t);
  }
}
class ni extends ei {
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
const Go = /* @__PURE__ */ new ti(), qo = /* @__PURE__ */ new ni(), Jo = /* @__PURE__ */ new ti(!0), Yo = /* @__PURE__ */ new ni(!0), fr = (e) => e, tn = (e) => Reflect.getPrototypeOf(e);
function Zo(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, i = z(s), o = _t(i), l = e === "entries" || e === Symbol.iterator && o, f = e === "keys" && o, a = s[e](...r), c = n ? fr : t ? pn : de;
    return !t && pe(
      i,
      "iterate",
      f ? lr : ht
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
function nn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Xo(e, t) {
  const n = {
    get(s) {
      const i = this.__v_raw, o = z(i), l = z(s);
      e || (we(s, l) && pe(o, "get", s), pe(o, "get", l));
      const { has: f } = tn(o), a = t ? fr : e ? pn : de;
      if (f.call(o, s))
        return a(i.get(s));
      if (f.call(o, l))
        return a(i.get(l));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && pe(z(s), "iterate", ht), Reflect.get(s, "size", s);
    },
    has(s) {
      const i = this.__v_raw, o = z(i), l = z(s);
      return e || (we(s, l) && pe(o, "has", s), pe(o, "has", l)), s === l ? i.has(s) : i.has(s) || i.has(l);
    },
    forEach(s, i) {
      const o = this, l = o.__v_raw, f = z(l), a = t ? fr : e ? pn : de;
      return !e && pe(f, "iterate", ht), l.forEach((c, h) => s.call(i, a(c), a(h), o));
    }
  };
  return le(
    n,
    e ? {
      add: nn("add"),
      set: nn("set"),
      delete: nn("delete"),
      clear: nn("clear")
    } : {
      add(s) {
        !t && !Oe(s) && !rt(s) && (s = z(s));
        const i = z(this);
        return tn(i).has.call(i, s) || (i.add(s), We(i, "add", s, s)), this;
      },
      set(s, i) {
        !t && !Oe(i) && !rt(i) && (i = z(i));
        const o = z(this), { has: l, get: f } = tn(o);
        let a = l.call(o, s);
        a || (s = z(s), a = l.call(o, s));
        const c = f.call(o, s);
        return o.set(s, i), a ? we(i, c) && We(o, "set", s, i) : We(o, "add", s, i), this;
      },
      delete(s) {
        const i = z(this), { has: o, get: l } = tn(i);
        let f = o.call(i, s);
        f || (s = z(s), f = o.call(i, s)), l && l.call(i, s);
        const a = i.delete(s);
        return f && We(i, "delete", s, void 0), a;
      },
      clear() {
        const s = z(this), i = s.size !== 0, o = s.clear();
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
    n[s] = Zo(s, e, t);
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
const Qo = {
  get: /* @__PURE__ */ In(!1, !1)
}, el = {
  get: /* @__PURE__ */ In(!1, !0)
}, tl = {
  get: /* @__PURE__ */ In(!0, !1)
}, nl = {
  get: /* @__PURE__ */ In(!0, !0)
}, ri = /* @__PURE__ */ new WeakMap(), si = /* @__PURE__ */ new WeakMap(), ii = /* @__PURE__ */ new WeakMap(), oi = /* @__PURE__ */ new WeakMap();
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
function Ir(e) {
  return rt(e) ? e : Nn(
    e,
    !1,
    Go,
    Qo,
    ri
  );
}
function il(e) {
  return Nn(
    e,
    !1,
    Jo,
    el,
    si
  );
}
function Fn(e) {
  return Nn(
    e,
    !0,
    qo,
    tl,
    ii
  );
}
function mt(e) {
  return Nn(
    e,
    !0,
    Yo,
    nl,
    oi
  );
}
function Nn(e, t, n, r, s) {
  if (!ne(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = sl(e);
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
function wt(e) {
  return rt(e) ? wt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function rt(e) {
  return !!(e && e.__v_isReadonly);
}
function Oe(e) {
  return !!(e && e.__v_isShallow);
}
function Fr(e) {
  return e ? !!e.__v_raw : !1;
}
function z(e) {
  const t = e && e.__v_raw;
  return t ? z(t) : e;
}
function ol(e) {
  return !J(e, "__v_skip") && Object.isExtensible(e) && Hs(e, "__v_skip", !0), e;
}
const de = (e) => ne(e) ? Ir(e) : e, pn = (e) => ne(e) ? Fn(e) : e;
function ce(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Pe(e) {
  return li(e, !1);
}
function Dn(e) {
  return li(e, !0);
}
function li(e, t) {
  return ce(e) ? e : new ll(e, t);
}
class ll {
  constructor(t, n) {
    this.dep = new Mn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : z(t), this._value = n ? t : de(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || Oe(t) || rt(t);
    t = r ? t : z(t), we(t, n) && (this._rawValue = t, this._value = r ? t : de(t), this.dep.trigger());
  }
}
function Vc(e) {
  e.dep && e.dep.trigger();
}
function Ln(e) {
  return ce(e) ? e.value : e;
}
function nt(e) {
  return $(e) ? e() : Ln(e);
}
const fl = {
  get: (e, t, n) => t === "__v_raw" ? e : Ln(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return ce(s) && !ce(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function fi(e) {
  return wt(e) ? e : new Proxy(e, fl);
}
class cl {
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
function ci(e) {
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
    return Ko(z(this._object), this._key);
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
  return ce(e) ? e : $(e) ? new al(e) : ne(e) && arguments.length > 1 ? hl(e, t, n) : Pe(e);
}
function hl(e, t, n) {
  const r = e[t];
  return ce(r) ? r : new ul(e, t, n);
}
class pl {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Mn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Vt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    te !== this)
      return Gs(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ys(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function gl(e, t, n = !1) {
  let r, s;
  return $(e) ? r = e : (r = e.get, s = e.set), new pl(r, s, n);
}
const rn = {}, gn = /* @__PURE__ */ new WeakMap();
let at;
function ml(e, t = !1, n = at) {
  if (n) {
    let r = gn.get(n);
    r || gn.set(n, r = []), r.push(e);
  }
}
function yl(e, t, n = G) {
  const { immediate: r, deep: s, once: i, scheduler: o, augmentJob: l, call: f } = n, a = (M) => s ? M : Oe(M) || s === !1 || s === 0 ? ke(M, 1) : ke(M);
  let c, h, g, m, w = !1, y = !1;
  if (ce(e) ? (h = () => e.value, w = Oe(e)) : wt(e) ? (h = () => a(e), w = !0) : D(e) ? (y = !0, w = e.some((M) => wt(M) || Oe(M)), h = () => e.map((M) => {
    if (ce(M))
      return M.value;
    if (wt(M))
      return a(M);
    if ($(M))
      return f ? f(M, 2) : M();
  })) : $(e) ? t ? h = f ? () => f(e, 2) : e : h = () => {
    if (g) {
      Ge();
      try {
        g();
      } finally {
        qe();
      }
    }
    const M = at;
    at = c;
    try {
      return f ? f(e, 3, [m]) : e(m);
    } finally {
      at = M;
    }
  } : h = Ve, t && s) {
    const M = h, V = s === !0 ? 1 / 0 : s;
    h = () => ke(M(), V);
  }
  const L = Or(), v = () => {
    c.stop(), L && L.active && Cr(L.effects, c);
  };
  if (i && t) {
    const M = t;
    t = (...V) => {
      M(...V), v();
    };
  }
  let C = y ? new Array(e.length).fill(rn) : rn;
  const P = (M) => {
    if (!(!(c.flags & 1) || !c.dirty && !M))
      if (t) {
        const V = c.run();
        if (s || w || (y ? V.some((U, H) => we(U, C[H])) : we(V, C))) {
          g && g();
          const U = at;
          at = c;
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
            at = U;
          }
        }
      } else
        c.run();
  };
  return l && l(P), c = new ks(h), c.scheduler = o ? () => o(P, !1) : P, m = (M) => ml(M, !1, c), g = c.onStop = () => {
    const M = gn.get(c);
    if (M) {
      if (f)
        f(M, 4);
      else
        for (const V of M) V();
      gn.delete(c);
    }
  }, t ? r ? P(!0) : C = c.run() : o ? o(P.bind(null, !0), !0) : c.run(), v.pause = c.pause.bind(c), v.resume = c.resume.bind(c), v.stop = v, v;
}
function ke(e, t = 1 / 0, n) {
  if (t <= 0 || !ne(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, ce(e))
    ke(e.value, t, n);
  else if (D(e))
    for (let r = 0; r < e.length; r++)
      ke(e[r], t, n);
  else if (Ls(e) || _t(e))
    e.forEach((r) => {
      ke(r, t, n);
    });
  else if (Bs(e)) {
    for (const r in e)
      ke(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && ke(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.14
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
function Ie(e, t, n, r) {
  if ($(e)) {
    const s = qt(e, t, n, r);
    return s && js(s) && s.catch((i) => {
      Jt(i, t, n);
    }), s;
  }
  if (D(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(Ie(e[i], t, n, r));
    return s;
  }
}
function Jt(e, t, n, r = !0) {
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
      Ge(), qt(i, null, 10, [
        e,
        f,
        a
      ]), qe();
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
const ve = [];
let Be = -1;
const xt = [];
let Qe = null, yt = 0;
const ui = /* @__PURE__ */ Promise.resolve();
let mn = null;
function jn(e) {
  const t = mn || ui;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function bl(e) {
  let t = Be + 1, n = ve.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = ve[r], i = Ut(s);
    i < e || i === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Nr(e) {
  if (!(e.flags & 1)) {
    const t = Ut(e), n = ve[ve.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ut(n) ? ve.push(e) : ve.splice(bl(t), 0, e), e.flags |= 1, ai();
  }
}
function ai() {
  mn || (mn = ui.then(hi));
}
function _l(e) {
  D(e) ? xt.push(...e) : Qe && e.id === -1 ? Qe.splice(yt + 1, 0, e) : e.flags & 1 || (xt.push(e), e.flags |= 1), ai();
}
function Yr(e, t, n = Be + 1) {
  for (; n < ve.length; n++) {
    const r = ve[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      ve.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function di(e) {
  if (xt.length) {
    const t = [...new Set(xt)].sort(
      (n, r) => Ut(n) - Ut(r)
    );
    if (xt.length = 0, Qe) {
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
const Ut = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function hi(e) {
  try {
    for (Be = 0; Be < ve.length; Be++) {
      const t = ve[Be];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), qt(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Be < ve.length; Be++) {
      const t = ve[Be];
      t && (t.flags &= -2);
    }
    Be = -1, ve.length = 0, di(), mn = null, (ve.length || xt.length) && hi();
  }
}
let ae = null, pi = null;
function yn(e) {
  const t = ae;
  return ae = e, pi = e && e.type.__scopeId || null, t;
}
function wl(e, t = ae, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && us(-1);
    const i = yn(t);
    let o;
    try {
      o = e(...s);
    } finally {
      yn(i), r._d && us(1);
    }
    return o;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Kc(e, t) {
  if (ae === null)
    return e;
  const n = Kn(ae), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, o, l, f = G] = t[s];
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
const gi = Symbol("_vte"), mi = (e) => e.__isTeleport, jt = (e) => e && (e.disabled || e.disabled === ""), Zr = (e) => e && (e.defer || e.defer === ""), Xr = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Qr = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, cr = (e, t) => {
  const n = e && e.to;
  return ie(n) ? t ? t(n) : null : n;
}, yi = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, s, i, o, l, f, a) {
    const {
      mc: c,
      pc: h,
      pbc: g,
      o: { insert: m, querySelector: w, createText: y, createComment: L }
    } = a, v = jt(t.props);
    let { shapeFlag: C, children: P, dynamicChildren: M } = t;
    if (e == null) {
      const V = t.el = y(""), U = t.anchor = y("");
      m(V, n, r), m(U, n, r);
      const H = (I, K) => {
        C & 16 && (s && s.isCE && (s.ce._teleportTarget = I), c(
          P,
          I,
          K,
          s,
          i,
          o,
          l,
          f
        ));
      }, k = () => {
        const I = t.target = cr(t.props, w), K = vi(I, t, y, m);
        I && (o !== "svg" && Xr(I) ? o = "svg" : o !== "mathml" && Qr(I) && (o = "mathml"), v || (H(I, K), cn(t, !1)));
      };
      v && (H(n, U), cn(t, !0)), Zr(t.props) ? ye(() => {
        k(), t.el.__isMounted = !0;
      }, i) : k();
    } else {
      if (Zr(t.props) && !e.el.__isMounted) {
        ye(() => {
          yi.process(
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
      const V = t.anchor = e.anchor, U = t.target = e.target, H = t.targetAnchor = e.targetAnchor, k = jt(e.props), I = k ? n : U, K = k ? V : H;
      if (o === "svg" || Xr(U) ? o = "svg" : (o === "mathml" || Qr(U)) && (o = "mathml"), M ? (g(
        e.dynamicChildren,
        M,
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
        k ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : sn(
          t,
          n,
          V,
          a,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const Z = t.target = cr(
          t.props,
          w
        );
        Z && sn(
          t,
          Z,
          null,
          a,
          0
        );
      } else k && sn(
        t,
        U,
        H,
        a,
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
      targetStart: a,
      targetAnchor: c,
      target: h,
      props: g
    } = e;
    if (h && (s(a), s(c)), i && s(f), o & 16) {
      const m = i || !jt(g);
      for (let w = 0; w < l.length; w++) {
        const y = l[w];
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
function xl(e, t, n, r, s, i, {
  o: { nextSibling: o, parentNode: l, querySelector: f, insert: a, createText: c }
}, h) {
  const g = t.target = cr(
    t.props,
    f
  );
  if (g) {
    const m = jt(t.props), w = g._lpa || g.firstChild;
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
        ), t.targetStart = w, t.targetAnchor = w && o(w);
      else {
        t.anchor = o(e);
        let y = w;
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
        t.targetAnchor || vi(g, t, c, a), h(
          w && o(w),
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
const Uc = yi;
function cn(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, s;
    for (t ? (r = e.el, s = e.anchor) : (r = e.targetStart, s = e.targetAnchor); r && r !== s; )
      r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function vi(e, t, n, r) {
  const s = t.targetStart = n(""), i = t.targetAnchor = n("");
  return s[gi] = i, e && (r(s, e), r(i, e)), i;
}
const et = Symbol("_leaveCb"), on = Symbol("_enterCb");
function bi() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Bn(() => {
    e.isMounted = !0;
  }), Ei(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ae = [Function, Array], _i = {
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
}, wi = (e) => {
  const t = e.subTree;
  return t.component ? wi(t.component) : t;
}, Sl = {
  name: "BaseTransition",
  props: _i,
  setup(e, { slots: t }) {
    const n = Zt(), r = bi();
    return () => {
      const s = t.default && Dr(t.default(), !0);
      if (!s || !s.length)
        return;
      const i = xi(s), o = z(e), { mode: l } = o;
      if (r.isLeaving)
        return Yn(i);
      const f = es(i);
      if (!f)
        return Yn(i);
      let a = Wt(
        f,
        o,
        r,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => a = h
      );
      f.type !== ge && pt(f, a);
      let c = n.subTree && es(n.subTree);
      if (c && c.type !== ge && !dt(f, c) && wi(n).type !== ge) {
        let h = Wt(
          c,
          o,
          r,
          n
        );
        if (pt(c, h), l === "out-in" && f.type !== ge)
          return r.isLeaving = !0, h.afterLeave = () => {
            r.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, c = void 0;
          }, Yn(i);
        l === "in-out" && f.type !== ge ? h.delayLeave = (g, m, w) => {
          const y = Si(
            r,
            c
          );
          y[String(c.key)] = c, g[et] = () => {
            m(), g[et] = void 0, delete a.delayedLeave, c = void 0;
          }, a.delayedLeave = () => {
            w(), delete a.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return i;
    };
  }
};
function xi(e) {
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
const Cl = Sl;
function Si(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function Wt(e, t, n, r, s) {
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
    onAfterLeave: w,
    onLeaveCancelled: y,
    onBeforeAppear: L,
    onAppear: v,
    onAfterAppear: C,
    onAppearCancelled: P
  } = t, M = String(e.key), V = Si(n, e), U = (I, K) => {
    I && Ie(
      I,
      r,
      9,
      K
    );
  }, H = (I, K) => {
    const Z = K[1];
    U(I, K), D(I) ? I.every((R) => R.length <= 1) && Z() : I.length <= 1 && Z();
  }, k = {
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
      const Z = V[M];
      Z && dt(e, Z) && Z.el[et] && Z.el[et](), U(K, [I]);
    },
    enter(I) {
      let K = a, Z = c, R = h;
      if (!n.isMounted)
        if (i)
          K = v || a, Z = C || c, R = P || h;
        else
          return;
      let X = !1;
      const j = I[on] = (re) => {
        X || (X = !0, re ? U(R, [I]) : U(Z, [I]), k.delayedLeave && k.delayedLeave(), I[on] = void 0);
      };
      K ? H(K, [I, j]) : j();
    },
    leave(I, K) {
      const Z = String(e.key);
      if (I[on] && I[on](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return K();
      U(g, [I]);
      let R = !1;
      const X = I[et] = (j) => {
        R || (R = !0, K(), j ? U(y, [I]) : U(w, [I]), I[et] = void 0, V[Z] === e && delete V[Z]);
      };
      V[Z] = e, m ? H(m, [I, X]) : X();
    },
    clone(I) {
      const K = Wt(
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
function Yn(e) {
  if (Yt(e))
    return e = st(e), e.children = null, e;
}
function es(e) {
  if (!Yt(e))
    return mi(e.type) && e.children ? xi(e.children) : e;
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
function Dr(e, t = !1, n) {
  let r = [], s = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === xe ? (o.patchFlag & 128 && s++, r = r.concat(
      Dr(o.children, t, l)
    )) : (t || o.type !== ge) && r.push(l != null ? st(o, { key: l }) : o);
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
    le({ name: e.name }, t, { setup: e })
  ) : e;
}
function jr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function vn(e, t, n, r, s = !1) {
  if (D(e)) {
    e.forEach(
      (w, y) => vn(
        w,
        t && (D(t) ? t[y] : t),
        n,
        r,
        s
      )
    );
    return;
  }
  if (St(r) && !s) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && vn(e, t, n, r.component.subTree);
    return;
  }
  const i = r.shapeFlag & 4 ? Kn(r.component) : r.el, o = s ? null : i, { i: l, r: f } = e, a = t && t.r, c = l.refs === G ? l.refs = {} : l.refs, h = l.setupState, g = z(h), m = h === G ? () => !1 : (w) => J(g, w);
  if (a != null && a !== f && (ie(a) ? (c[a] = null, m(a) && (h[a] = null)) : ce(a) && (a.value = null)), $(f))
    qt(f, l, 12, [o, c]);
  else {
    const w = ie(f), y = ce(f);
    if (w || y) {
      const L = () => {
        if (e.f) {
          const v = w ? m(f) ? h[f] : c[f] : f.value;
          s ? D(v) && Cr(v, i) : D(v) ? v.includes(i) || v.push(i) : w ? (c[f] = [i], m(f) && (h[f] = c[f])) : (f.value = [i], e.k && (c[e.k] = f.value));
        } else w ? (c[f] = o, m(f) && (h[f] = o)) : y && (f.value = o, e.k && (c[e.k] = o));
      };
      o ? (L.id = -1, ye(L, n)) : L();
    }
  }
}
const ts = (e) => e.nodeType === 8;
Pn().requestIdleCallback;
Pn().cancelIdleCallback;
function Tl(e, t) {
  if (ts(e) && e.data === "[") {
    let n = 1, r = e.nextSibling;
    for (; r; ) {
      if (r.nodeType === 1) {
        if (t(r) === !1)
          break;
      } else if (ts(r))
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
function Wc(e) {
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
    let w;
    return a || (w = a = t().catch((y) => {
      if (y = y instanceof Error ? y : new Error(String(y)), f)
        return new Promise((L, v) => {
          f(y, () => L(g()), () => v(y), h + 1);
        });
      throw y;
    }).then((y) => w !== a && a ? a : (y && (y.__esModule || y[Symbol.toStringTag] === "Module") && (y = y.default), c = y, y)));
  };
  return /* @__PURE__ */ Lr({
    name: "AsyncComponentWrapper",
    __asyncLoader: m,
    __asyncHydrate(w, y, L) {
      const v = i ? () => {
        const C = i(
          L,
          (P) => Tl(w, P)
        );
        C && (y.bum || (y.bum = [])).push(C);
      } : L;
      c ? v() : m().then(() => !y.isUnmounted && v());
    },
    get __asyncResolved() {
      return c;
    },
    setup() {
      const w = ue;
      if (jr(w), c)
        return () => Zn(c, w);
      const y = (P) => {
        a = null, Jt(
          P,
          w,
          13,
          !r
        );
      };
      if (l && w.suspense || Tt)
        return m().then((P) => () => Zn(P, w)).catch((P) => (y(P), () => r ? oe(r, {
          error: P
        }) : null));
      const L = Pe(!1), v = Pe(), C = Pe(!!s);
      return s && setTimeout(() => {
        C.value = !1;
      }, s), o != null && setTimeout(() => {
        if (!L.value && !v.value) {
          const P = new Error(
            `Async component timed out after ${o}ms.`
          );
          y(P), v.value = P;
        }
      }, o), m().then(() => {
        L.value = !0, w.parent && Yt(w.parent.vnode) && w.parent.update();
      }).catch((P) => {
        y(P), v.value = P;
      }), () => {
        if (L.value && c)
          return Zn(c, w);
        if (v.value && r)
          return oe(r, {
            error: v.value
          });
        if (n && !C.value)
          return oe(n);
      };
    }
  });
}
function Zn(e, t) {
  const { ref: n, props: r, children: s, ce: i } = t.vnode, o = oe(e, r, s);
  return o.ref = n, o.ce = i, delete t.vnode.ce, o;
}
const Yt = (e) => e.type.__isKeepAlive;
function El(e, t) {
  Ci(e, "a", t);
}
function Al(e, t) {
  Ci(e, "da", t);
}
function Ci(e, t, n = ue) {
  const r = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if ($n(t, r, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      Yt(s.parent.vnode) && Ol(r, t, n, s), s = s.parent;
  }
}
function Ol(e, t, n, r) {
  const s = $n(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Ai(() => {
    Cr(r[t], s);
  }, n);
}
function $n(e, t, n = ue, r = !1) {
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
  (!Tt || e === "sp") && $n(e, (...r) => t(...r), n);
}, Pl = Ye("bm"), Bn = Ye("m"), Ml = Ye(
  "bu"
), Ti = Ye("u"), Ei = Ye(
  "bum"
), Ai = Ye("um"), Rl = Ye(
  "sp"
), Il = Ye("rtg"), Fl = Ye("rtc");
function Nl(e, t = ue) {
  $n("ec", e, t);
}
const Oi = "components";
function kc(e, t) {
  return Mi(Oi, e, !0, t) || e;
}
const Pi = Symbol.for("v-ndc");
function zc(e) {
  return ie(e) ? Mi(Oi, e, !1) || e : e || Pi;
}
function Mi(e, t, n = !0, r = !1) {
  const s = ae || ue;
  if (s) {
    const i = s.type;
    {
      const l = Sf(
        i,
        !1
      );
      if (l && (l === t || l === Ee(t) || l === On(Ee(t))))
        return i;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      ns(s[e] || i[e], t) || // global registration
      ns(s.appContext[e], t)
    );
    return !o && r ? i : o;
  }
}
function ns(e, t) {
  return e && (e[t] || e[Ee(t)] || e[On(Ee(t))]);
}
function Gc(e, t, n, r) {
  let s;
  const i = n, o = D(e);
  if (o || ie(e)) {
    const l = o && wt(e);
    let f = !1, a = !1;
    l && (f = !Oe(e), a = rt(e), e = Rn(e)), s = new Array(e.length);
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
function qc(e, t, n = {}, r, s) {
  if (ae.ce || ae.parent && St(ae.parent) && ae.parent.ce)
    return pr(), gr(
      xe,
      null,
      [oe("slot", n, r)],
      64
    );
  let i = e[t];
  i && i._c && (i._d = !1), pr();
  const o = i && Ri(i(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  o && o.key, f = gr(
    xe,
    {
      key: (l && !Je(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      ""
    },
    o || [],
    o && e._ === 1 ? 64 : -2
  );
  return f.scopeId && (f.slotScopeIds = [f.scopeId + "-s"]), i && i._c && (i._d = !0), f;
}
function Ri(e) {
  return e.some((t) => zt(t) ? !(t.type === ge || t.type === xe && !Ri(t.children)) : !0) ? e : null;
}
const ur = (e) => e ? Zi(e) ? Kn(e) : ur(e.parent) : null, $t = (
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
    $parent: (e) => ur(e.parent),
    $root: (e) => ur(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Fi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Nr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = jn.bind(e.proxy)),
    $watch: (e) => rf.bind(e)
  })
), Xn = (e, t) => e !== G && !e.__isScriptSetup && J(e, t), Dl = {
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
        if (Xn(r, t))
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
        ar && (o[t] = 0);
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
    return Xn(s, t) ? (s[t] = n, !0) : r !== G && J(r, t) ? (r[t] = n, !0) : J(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: i }
  }, o) {
    let l;
    return !!n[o] || e !== G && J(e, o) || Xn(t, o) || (l = i[0]) && J(l, o) || J(r, o) || J($t, o) || J(s.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : J(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function bn(e) {
  return D(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Jc(e, t) {
  return !e || !t ? e || t : D(e) && D(t) ? e.concat(t) : le({}, bn(e), bn(t));
}
let ar = !0;
function Ll(e) {
  const t = Fi(e), n = e.proxy, r = e.ctx;
  ar = !1, t.beforeCreate && rs(t.beforeCreate, e, "bc");
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
    updated: w,
    activated: y,
    deactivated: L,
    beforeDestroy: v,
    beforeUnmount: C,
    destroyed: P,
    unmounted: M,
    render: V,
    renderTracked: U,
    renderTriggered: H,
    errorCaptured: k,
    serverPrefetch: I,
    // public API
    expose: K,
    inheritAttrs: Z,
    // assets
    components: R,
    directives: X,
    filters: j
  } = t;
  if (a && jl(a, r, null), o)
    for (const se in o) {
      const Q = o[se];
      $(Q) && (r[se] = Q.bind(n));
    }
  if (s) {
    const se = s.call(n, n);
    ne(se) && (e.data = Ir(se));
  }
  if (ar = !0, i)
    for (const se in i) {
      const Q = i[se], ot = $(Q) ? Q.bind(n, n) : $(Q.get) ? Q.get.bind(n, n) : Ve, Qt = !$(Q) && $(Q.set) ? Q.set.bind(n) : Ve, lt = fe({
        get: ot,
        set: Qt
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
      Ii(l[se], r, n, se);
  if (f) {
    const se = $(f) ? f.call(n) : f;
    Reflect.ownKeys(se).forEach((Q) => {
      Ul(Q, se[Q]);
    });
  }
  c && rs(c, e, "c");
  function q(se, Q) {
    D(Q) ? Q.forEach((ot) => se(ot.bind(n))) : Q && se(Q.bind(n));
  }
  if (q(Pl, h), q(Bn, g), q(Ml, m), q(Ti, w), q(El, y), q(Al, L), q(Nl, k), q(Fl, U), q(Il, H), q(Ei, C), q(Ai, M), q(Rl, I), D(K))
    if (K.length) {
      const se = e.exposed || (e.exposed = {});
      K.forEach((Q) => {
        Object.defineProperty(se, Q, {
          get: () => n[Q],
          set: (ot) => n[Q] = ot
        });
      });
    } else e.exposed || (e.exposed = {});
  V && e.render === Ve && (e.render = V), Z != null && (e.inheritAttrs = Z), R && (e.components = R), X && (e.directives = X), I && jr(e);
}
function jl(e, t, n = Ve) {
  D(e) && (e = dr(e));
  for (const r in e) {
    const s = e[r];
    let i;
    ne(s) ? "default" in s ? i = Bt(
      s.from || r,
      s.default,
      !0
    ) : i = Bt(s.from || r) : i = Bt(s), ce(i) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[r] = i;
  }
}
function rs(e, t, n) {
  Ie(
    D(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Ii(e, t, n, r) {
  let s = r.includes(".") ? Wi(n, r) : () => n[r];
  if (ie(e)) {
    const i = t[e];
    $(i) && Re(s, i);
  } else if ($(e))
    Re(s, e.bind(n));
  else if (ne(e))
    if (D(e))
      e.forEach((i) => Ii(i, t, n, r));
    else {
      const i = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(i) && Re(s, i, e);
    }
}
function Fi(e) {
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
      const l = $l[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const $l = {
  data: ss,
  props: is,
  emits: is,
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
  provide: ss,
  inject: Bl
};
function ss(e, t) {
  return t ? e ? function() {
    return le(
      $(e) ? e.call(this, this) : e,
      $(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Bl(e, t) {
  return Ft(dr(e), dr(t));
}
function dr(e) {
  if (D(e)) {
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
function is(e, t) {
  return e ? D(e) && D(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : le(
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
function Ni() {
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
    $(r) || (r = le({}, r)), s != null && !ne(s) && (s = null);
    const i = Ni(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const a = i.app = {
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
          return m.appContext = i, g === !0 ? g = "svg" : g === !1 && (g = void 0), e(m, c, g), f = !0, a._container = c, c.__vue_app__ = a, Kn(m.component);
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
function Ul(e, t) {
  if (ue) {
    let n = ue.provides;
    const r = ue.parent && ue.parent.provides;
    r === n && (n = ue.provides = Object.create(r)), n[e] = t;
  }
}
function Bt(e, t, n = !1) {
  const r = ue || ae;
  if (r || Ct) {
    const s = Ct ? Ct._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && $(t) ? t.call(r && r.proxy) : t;
  }
}
const Di = {}, Li = () => Object.create(Di), ji = (e) => Object.getPrototypeOf(e) === Di;
function Wl(e, t, n, r = !1) {
  const s = {}, i = Li();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), $i(e, t, s, i);
  for (const o in e.propsOptions[0])
    o in s || (s[o] = void 0);
  n ? e.props = r ? s : il(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i;
}
function kl(e, t, n, r) {
  const {
    props: s,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = z(s), [f] = e.propsOptions;
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
        if (Hn(e.emitsOptions, g))
          continue;
        const m = t[g];
        if (f)
          if (J(i, g))
            m !== i[g] && (i[g] = m, a = !0);
          else {
            const w = Ee(g);
            s[w] = hr(
              f,
              l,
              w,
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
    $i(e, t, s, i) && (a = !0);
    let c;
    for (const h in l)
      (!t || // for camelCase
      !J(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = it(h)) === h || !J(t, c))) && (f ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[c] !== void 0) && (s[h] = hr(
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
function $i(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let f in t) {
      if (Nt(f))
        continue;
      const a = t[f];
      let c;
      s && J(s, c = Ee(f)) ? !i || !i.includes(c) ? n[c] = a : (l || (l = {}))[c] = a : Hn(e.emitsOptions, f) || (!(f in r) || a !== r[f]) && (r[f] = a, o = !0);
    }
  if (i) {
    const f = z(n), a = l || G;
    for (let c = 0; c < i.length; c++) {
      const h = i[c];
      n[h] = hr(
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
function hr(e, t, n, r, s, i) {
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
function Bi(e, t, n = !1) {
  const r = n ? zl : t.propsCache, s = r.get(e);
  if (s)
    return s;
  const i = e.props, o = {}, l = [];
  let f = !1;
  if (!$(e)) {
    const c = (h) => {
      f = !0;
      const [g, m] = Bi(h, t, !0);
      le(o, g), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!i && !f)
    return ne(e) && r.set(e, bt), bt;
  if (D(i))
    for (let c = 0; c < i.length; c++) {
      const h = Ee(i[c]);
      os(h) && (o[h] = G);
    }
  else if (i)
    for (const c in i) {
      const h = Ee(c);
      if (os(h)) {
        const g = i[c], m = o[h] = D(g) || $(g) ? { type: g } : le({}, g), w = m.type;
        let y = !1, L = !0;
        if (D(w))
          for (let v = 0; v < w.length; ++v) {
            const C = w[v], P = $(C) && C.name;
            if (P === "Boolean") {
              y = !0;
              break;
            } else P === "String" && (L = !1);
          }
        else
          y = $(w) && w.name === "Boolean";
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
function os(e) {
  return e[0] !== "$" && !Nt(e);
}
const $r = (e) => e[0] === "_" || e === "$stable", Br = (e) => D(e) ? e.map(He) : [He(e)], Gl = (e, t, n) => {
  if (t._n)
    return t;
  const r = wl((...s) => Br(t(...s)), n);
  return r._c = !1, r;
}, Hi = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if ($r(s)) continue;
    const i = e[s];
    if ($(i))
      t[s] = Gl(s, i, r);
    else if (i != null) {
      const o = Br(i);
      t[s] = () => o;
    }
  }
}, Vi = (e, t) => {
  const n = Br(t);
  e.slots.default = () => n;
}, Ki = (e, t, n) => {
  for (const r in t)
    (n || !$r(r)) && (e[r] = t[r]);
}, ql = (e, t, n) => {
  const r = e.slots = Li();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (Ki(r, t, n), n && Hs(r, "_", s, !0)) : Hi(t, r);
  } else t && Vi(e, t);
}, Jl = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let i = !0, o = G;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : Ki(s, t, n) : (i = !t.$stable, Hi(t, s)), o = t;
  } else t && (Vi(e, t), o = { default: 1 });
  if (i)
    for (const l in s)
      !$r(l) && o[l] == null && delete s[l];
}, ye = uf;
function Yl(e) {
  return Zl(e);
}
function Zl(e, t) {
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
    insertStaticContent: w
  } = e, y = (u, d, p, x = null, b = null, _ = null, A = void 0, E = null, T = !!d.dynamicChildren) => {
    if (u === d)
      return;
    u && !dt(u, d) && (x = en(u), Fe(u, b, _, !0), u = null), d.patchFlag === -2 && (T = !1, d.dynamicChildren = null);
    const { type: S, ref: N, shapeFlag: O } = d;
    switch (S) {
      case Vn:
        L(u, d, p, x);
        break;
      case ge:
        v(u, d, p, x);
        break;
      case un:
        u == null && C(d, p, x, A);
        break;
      case xe:
        R(
          u,
          d,
          p,
          x,
          b,
          _,
          A,
          E,
          T
        );
        break;
      default:
        O & 1 ? V(
          u,
          d,
          p,
          x,
          b,
          _,
          A,
          E,
          T
        ) : O & 6 ? X(
          u,
          d,
          p,
          x,
          b,
          _,
          A,
          E,
          T
        ) : (O & 64 || O & 128) && S.process(
          u,
          d,
          p,
          x,
          b,
          _,
          A,
          E,
          T,
          Ot
        );
    }
    N != null && b && vn(N, u && u.ref, _, d || u, !d);
  }, L = (u, d, p, x) => {
    if (u == null)
      r(
        d.el = l(d.children),
        p,
        x
      );
    else {
      const b = d.el = u.el;
      d.children !== u.children && a(b, d.children);
    }
  }, v = (u, d, p, x) => {
    u == null ? r(
      d.el = f(d.children || ""),
      p,
      x
    ) : d.el = u.el;
  }, C = (u, d, p, x) => {
    [u.el, u.anchor] = w(
      u.children,
      d,
      p,
      x,
      u.el,
      u.anchor
    );
  }, P = ({ el: u, anchor: d }, p, x) => {
    let b;
    for (; u && u !== d; )
      b = g(u), r(u, p, x), u = b;
    r(d, p, x);
  }, M = ({ el: u, anchor: d }) => {
    let p;
    for (; u && u !== d; )
      p = g(u), s(u), u = p;
    s(d);
  }, V = (u, d, p, x, b, _, A, E, T) => {
    d.type === "svg" ? A = "svg" : d.type === "math" && (A = "mathml"), u == null ? U(
      d,
      p,
      x,
      b,
      _,
      A,
      E,
      T
    ) : I(
      u,
      d,
      b,
      _,
      A,
      E,
      T
    );
  }, U = (u, d, p, x, b, _, A, E) => {
    let T, S;
    const { props: N, shapeFlag: O, transition: F, dirs: B } = u;
    if (T = u.el = o(
      u.type,
      _,
      N && N.is,
      N
    ), O & 8 ? c(T, u.children) : O & 16 && k(
      u.children,
      T,
      null,
      x,
      b,
      Qn(u, _),
      A,
      E
    ), B && ft(u, null, x, "created"), H(T, u, u.scopeId, A, x), N) {
      for (const ee in N)
        ee !== "value" && !Nt(ee) && i(T, ee, null, N[ee], _, x);
      "value" in N && i(T, "value", null, N.value, _), (S = N.onVnodeBeforeMount) && je(S, x, u);
    }
    B && ft(u, null, x, "beforeMount");
    const W = Xl(b, F);
    W && F.beforeEnter(T), r(T, d, p), ((S = N && N.onVnodeMounted) || W || B) && ye(() => {
      S && je(S, x, u), W && F.enter(T), B && ft(u, null, x, "mounted");
    }, b);
  }, H = (u, d, p, x, b) => {
    if (p && m(u, p), x)
      for (let _ = 0; _ < x.length; _++)
        m(u, x[_]);
    if (b) {
      let _ = b.subTree;
      if (d === _ || Gi(_.type) && (_.ssContent === d || _.ssFallback === d)) {
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
  }, k = (u, d, p, x, b, _, A, E, T = 0) => {
    for (let S = T; S < u.length; S++) {
      const N = u[S] = E ? tt(u[S]) : He(u[S]);
      y(
        null,
        N,
        d,
        p,
        x,
        b,
        _,
        A,
        E
      );
    }
  }, I = (u, d, p, x, b, _, A) => {
    const E = d.el = u.el;
    let { patchFlag: T, dynamicChildren: S, dirs: N } = d;
    T |= u.patchFlag & 16;
    const O = u.props || G, F = d.props || G;
    let B;
    if (p && ct(p, !1), (B = F.onVnodeBeforeUpdate) && je(B, p, d, u), N && ft(d, u, p, "beforeUpdate"), p && ct(p, !0), (O.innerHTML && F.innerHTML == null || O.textContent && F.textContent == null) && c(E, ""), S ? K(
      u.dynamicChildren,
      S,
      E,
      p,
      x,
      Qn(d, b),
      _
    ) : A || Q(
      u,
      d,
      E,
      null,
      p,
      x,
      Qn(d, b),
      _,
      !1
    ), T > 0) {
      if (T & 16)
        Z(E, O, F, p, b);
      else if (T & 2 && O.class !== F.class && i(E, "class", null, F.class, b), T & 4 && i(E, "style", O.style, F.style, b), T & 8) {
        const W = d.dynamicProps;
        for (let ee = 0; ee < W.length; ee++) {
          const Y = W[ee], Se = O[Y], be = F[Y];
          (be !== Se || Y === "value") && i(E, Y, Se, be, b, p);
        }
      }
      T & 1 && u.children !== d.children && c(E, d.children);
    } else !A && S == null && Z(E, O, F, p, b);
    ((B = F.onVnodeUpdated) || N) && ye(() => {
      B && je(B, p, d, u), N && ft(d, u, p, "updated");
    }, x);
  }, K = (u, d, p, x, b, _, A) => {
    for (let E = 0; E < d.length; E++) {
      const T = u[E], S = d[E], N = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        T.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (T.type === xe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !dt(T, S) || // - In the case of a component, it could contain anything.
        T.shapeFlag & 70) ? h(T.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      y(
        T,
        S,
        N,
        null,
        x,
        b,
        _,
        A,
        !0
      );
    }
  }, Z = (u, d, p, x, b) => {
    if (d !== p) {
      if (d !== G)
        for (const _ in d)
          !Nt(_) && !(_ in p) && i(
            u,
            _,
            d[_],
            null,
            b,
            x
          );
      for (const _ in p) {
        if (Nt(_)) continue;
        const A = p[_], E = d[_];
        A !== E && _ !== "value" && i(u, _, E, A, b, x);
      }
      "value" in p && i(u, "value", d.value, p.value, b);
    }
  }, R = (u, d, p, x, b, _, A, E, T) => {
    const S = d.el = u ? u.el : l(""), N = d.anchor = u ? u.anchor : l("");
    let { patchFlag: O, dynamicChildren: F, slotScopeIds: B } = d;
    B && (E = E ? E.concat(B) : B), u == null ? (r(S, p, x), r(N, p, x), k(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      p,
      N,
      b,
      _,
      A,
      E,
      T
    )) : O > 0 && O & 64 && F && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren ? (K(
      u.dynamicChildren,
      F,
      p,
      b,
      _,
      A,
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
      N,
      b,
      _,
      A,
      E,
      T
    );
  }, X = (u, d, p, x, b, _, A, E, T) => {
    d.slotScopeIds = E, u == null ? d.shapeFlag & 512 ? b.ctx.activate(
      d,
      p,
      x,
      A,
      T
    ) : j(
      d,
      p,
      x,
      b,
      _,
      A,
      T
    ) : re(u, d, T);
  }, j = (u, d, p, x, b, _, A) => {
    const E = u.component = vf(
      u,
      x,
      b
    );
    if (Yt(u) && (E.ctx.renderer = Ot), bf(E, !1, A), E.asyncDep) {
      if (b && b.registerDep(E, q, A), !u.el) {
        const T = E.subTree = oe(ge);
        v(null, T, d, p);
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
  }, re = (u, d, p) => {
    const x = d.component = u.component;
    if (ff(u, d, p))
      if (x.asyncDep && !x.asyncResolved) {
        se(x, d, p);
        return;
      } else
        x.next = d, x.update();
    else
      d.el = u.el, x.vnode = d;
  }, q = (u, d, p, x, b, _, A) => {
    const E = () => {
      if (u.isMounted) {
        let { next: O, bu: F, u: B, parent: W, vnode: ee } = u;
        {
          const De = Ui(u);
          if (De) {
            O && (O.el = ee.el, se(u, O, A)), De.asyncDep.then(() => {
              u.isUnmounted || E();
            });
            return;
          }
        }
        let Y = O, Se;
        ct(u, !1), O ? (O.el = ee.el, se(u, O, A)) : O = ee, F && kn(F), (Se = O.props && O.props.onVnodeBeforeUpdate) && je(Se, W, O, ee), ct(u, !0);
        const be = fs(u), Ne = u.subTree;
        u.subTree = be, y(
          Ne,
          be,
          // parent may have changed if it's in a teleport
          h(Ne.el),
          // anchor may have changed if it's in a fragment
          en(Ne),
          u,
          b,
          _
        ), O.el = be.el, Y === null && cf(u, be.el), B && ye(B, b), (Se = O.props && O.props.onVnodeUpdated) && ye(
          () => je(Se, W, O, ee),
          b
        );
      } else {
        let O;
        const { el: F, props: B } = d, { bm: W, m: ee, parent: Y, root: Se, type: be } = u, Ne = St(d);
        ct(u, !1), W && kn(W), !Ne && (O = B && B.onVnodeBeforeMount) && je(O, Y, d), ct(u, !0);
        {
          Se.ce && Se.ce._injectChildStyle(be);
          const De = u.subTree = fs(u);
          y(
            null,
            De,
            p,
            x,
            u,
            b,
            _
          ), d.el = De.el;
        }
        if (ee && ye(ee, b), !Ne && (O = B && B.onVnodeMounted)) {
          const De = d;
          ye(
            () => je(O, Y, De),
            b
          );
        }
        (d.shapeFlag & 256 || Y && St(Y.vnode) && Y.vnode.shapeFlag & 256) && u.a && ye(u.a, b), u.isMounted = !0, d = p = x = null;
      }
    };
    u.scope.on();
    const T = u.effect = new ks(E);
    u.scope.off();
    const S = u.update = T.run.bind(T), N = u.job = T.runIfDirty.bind(T);
    N.i = u, N.id = u.uid, T.scheduler = () => Nr(N), ct(u, !0), S();
  }, se = (u, d, p) => {
    d.component = u;
    const x = u.vnode.props;
    u.vnode = d, u.next = null, kl(u, d.props, x, p), Jl(u, d.children, p), Ge(), Yr(u), qe();
  }, Q = (u, d, p, x, b, _, A, E, T = !1) => {
    const S = u && u.children, N = u ? u.shapeFlag : 0, O = d.children, { patchFlag: F, shapeFlag: B } = d;
    if (F > 0) {
      if (F & 128) {
        Qt(
          S,
          O,
          p,
          x,
          b,
          _,
          A,
          E,
          T
        );
        return;
      } else if (F & 256) {
        ot(
          S,
          O,
          p,
          x,
          b,
          _,
          A,
          E,
          T
        );
        return;
      }
    }
    B & 8 ? (N & 16 && At(S, b, _), O !== S && c(p, O)) : N & 16 ? B & 16 ? Qt(
      S,
      O,
      p,
      x,
      b,
      _,
      A,
      E,
      T
    ) : At(S, b, _, !0) : (N & 8 && c(p, ""), B & 16 && k(
      O,
      p,
      x,
      b,
      _,
      A,
      E,
      T
    ));
  }, ot = (u, d, p, x, b, _, A, E, T) => {
    u = u || bt, d = d || bt;
    const S = u.length, N = d.length, O = Math.min(S, N);
    let F;
    for (F = 0; F < O; F++) {
      const B = d[F] = T ? tt(d[F]) : He(d[F]);
      y(
        u[F],
        B,
        p,
        null,
        b,
        _,
        A,
        E,
        T
      );
    }
    S > N ? At(
      u,
      b,
      _,
      !0,
      !1,
      O
    ) : k(
      d,
      p,
      x,
      b,
      _,
      A,
      E,
      T,
      O
    );
  }, Qt = (u, d, p, x, b, _, A, E, T) => {
    let S = 0;
    const N = d.length;
    let O = u.length - 1, F = N - 1;
    for (; S <= O && S <= F; ) {
      const B = u[S], W = d[S] = T ? tt(d[S]) : He(d[S]);
      if (dt(B, W))
        y(
          B,
          W,
          p,
          null,
          b,
          _,
          A,
          E,
          T
        );
      else
        break;
      S++;
    }
    for (; S <= O && S <= F; ) {
      const B = u[O], W = d[F] = T ? tt(d[F]) : He(d[F]);
      if (dt(B, W))
        y(
          B,
          W,
          p,
          null,
          b,
          _,
          A,
          E,
          T
        );
      else
        break;
      O--, F--;
    }
    if (S > O) {
      if (S <= F) {
        const B = F + 1, W = B < N ? d[B].el : x;
        for (; S <= F; )
          y(
            null,
            d[S] = T ? tt(d[S]) : He(d[S]),
            p,
            W,
            b,
            _,
            A,
            E,
            T
          ), S++;
      }
    } else if (S > F)
      for (; S <= O; )
        Fe(u[S], b, _, !0), S++;
    else {
      const B = S, W = S, ee = /* @__PURE__ */ new Map();
      for (S = W; S <= F; S++) {
        const Ce = d[S] = T ? tt(d[S]) : He(d[S]);
        Ce.key != null && ee.set(Ce.key, S);
      }
      let Y, Se = 0;
      const be = F - W + 1;
      let Ne = !1, De = 0;
      const Pt = new Array(be);
      for (S = 0; S < be; S++) Pt[S] = 0;
      for (S = B; S <= O; S++) {
        const Ce = u[S];
        if (Se >= be) {
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
        Le === void 0 ? Fe(Ce, b, _, !0) : (Pt[Le - W] = S + 1, Le >= De ? De = Le : Ne = !0, y(
          Ce,
          d[Le],
          p,
          null,
          b,
          _,
          A,
          E,
          T
        ), Se++);
      }
      const kr = Ne ? Ql(Pt) : bt;
      for (Y = kr.length - 1, S = be - 1; S >= 0; S--) {
        const Ce = W + S, Le = d[Ce], zr = Ce + 1 < N ? d[Ce + 1].el : x;
        Pt[S] === 0 ? y(
          null,
          Le,
          p,
          zr,
          b,
          _,
          A,
          E,
          T
        ) : Ne && (Y < 0 || S !== kr[Y] ? lt(Le, p, zr, 2) : Y--);
      }
    }
  }, lt = (u, d, p, x, b = null) => {
    const { el: _, type: A, transition: E, children: T, shapeFlag: S } = u;
    if (S & 6) {
      lt(u.component.subTree, d, p, x);
      return;
    }
    if (S & 128) {
      u.suspense.move(d, p, x);
      return;
    }
    if (S & 64) {
      A.move(u, d, p, Ot);
      return;
    }
    if (A === xe) {
      r(_, d, p);
      for (let O = 0; O < T.length; O++)
        lt(T[O], d, p, x);
      r(u.anchor, d, p);
      return;
    }
    if (A === un) {
      P(u, d, p);
      return;
    }
    if (x !== 2 && S & 1 && E)
      if (x === 0)
        E.beforeEnter(_), r(_, d, p), ye(() => E.enter(_), b);
      else {
        const { leave: O, delayLeave: F, afterLeave: B } = E, W = () => {
          u.ctx.isUnmounted ? s(_) : r(_, d, p);
        }, ee = () => {
          O(_, () => {
            W(), B && B();
          });
        };
        F ? F(_, W, ee) : ee();
      }
    else
      r(_, d, p);
  }, Fe = (u, d, p, x = !1, b = !1) => {
    const {
      type: _,
      props: A,
      ref: E,
      children: T,
      dynamicChildren: S,
      shapeFlag: N,
      patchFlag: O,
      dirs: F,
      cacheIndex: B
    } = u;
    if (O === -2 && (b = !1), E != null && (Ge(), vn(E, null, p, u, !0), qe()), B != null && (d.renderCache[B] = void 0), N & 256) {
      d.ctx.deactivate(u);
      return;
    }
    const W = N & 1 && F, ee = !St(u);
    let Y;
    if (ee && (Y = A && A.onVnodeBeforeUnmount) && je(Y, d, u), N & 6)
      bo(u.component, p, x);
    else {
      if (N & 128) {
        u.suspense.unmount(p, x);
        return;
      }
      W && ft(u, null, d, "beforeUnmount"), N & 64 ? u.type.remove(
        u,
        d,
        p,
        Ot,
        x
      ) : S && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !S.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== xe || O > 0 && O & 64) ? At(
        S,
        d,
        p,
        !1,
        !0
      ) : (_ === xe && O & 384 || !b && N & 16) && At(T, d, p), x && Ur(u);
    }
    (ee && (Y = A && A.onVnodeUnmounted) || W) && ye(() => {
      Y && je(Y, d, u), W && ft(u, null, d, "unmounted");
    }, p);
  }, Ur = (u) => {
    const { type: d, el: p, anchor: x, transition: b } = u;
    if (d === xe) {
      vo(p, x);
      return;
    }
    if (d === un) {
      M(u);
      return;
    }
    const _ = () => {
      s(p), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (u.shapeFlag & 1 && b && !b.persisted) {
      const { leave: A, delayLeave: E } = b, T = () => A(p, _);
      E ? E(u.el, _, T) : T();
    } else
      _();
  }, vo = (u, d) => {
    let p;
    for (; u !== d; )
      p = g(u), s(u), u = p;
    s(d);
  }, bo = (u, d, p) => {
    const {
      bum: x,
      scope: b,
      job: _,
      subTree: A,
      um: E,
      m: T,
      a: S,
      parent: N,
      slots: { __: O }
    } = u;
    ls(T), ls(S), x && kn(x), N && D(O) && O.forEach((F) => {
      N.renderCache[F] = void 0;
    }), b.stop(), _ && (_.flags |= 8, Fe(A, u, d, p)), E && ye(E, d), ye(() => {
      u.isUnmounted = !0;
    }, d), d && d.pendingBranch && !d.isUnmounted && u.asyncDep && !u.asyncResolved && u.suspenseId === d.pendingId && (d.deps--, d.deps === 0 && d.resolve());
  }, At = (u, d, p, x = !1, b = !1, _ = 0) => {
    for (let A = _; A < u.length; A++)
      Fe(u[A], d, p, x, b);
  }, en = (u) => {
    if (u.shapeFlag & 6)
      return en(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const d = g(u.anchor || u.el), p = d && d[gi];
    return p ? g(p) : d;
  };
  let Un = !1;
  const Wr = (u, d, p) => {
    u == null ? d._vnode && Fe(d._vnode, null, null, !0) : y(
      d._vnode || null,
      u,
      d,
      null,
      null,
      null,
      p
    ), d._vnode = u, Un || (Un = !0, Yr(), di(), Un = !1);
  }, Ot = {
    p: y,
    um: Fe,
    m: lt,
    r: Ur,
    mt: j,
    mc: k,
    pc: Q,
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
function Qn({ type: e, props: t }, n) {
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
  if (D(r) && D(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let l = s[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[i] = tt(s[i]), l.el = o.el), !n && l.patchFlag !== -2 && Hr(o, l)), l.type === Vn && (l.el = o.el), l.type === ge && !l.el && (l.el = o.el);
    }
}
function Ql(e) {
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
function Ui(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ui(t);
}
function ls(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const ef = Symbol.for("v-scx"), tf = () => Bt(ef);
function nf(e, t) {
  return Vr(
    e,
    null,
    { flush: "sync" }
  );
}
function Re(e, t, n) {
  return Vr(e, t, n);
}
function Vr(e, t, n = G) {
  const { immediate: r, deep: s, flush: i, once: o } = n, l = le({}, n), f = t && r || !t && i !== "post";
  let a;
  if (Tt) {
    if (i === "sync") {
      const m = tf();
      a = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!f) {
      const m = () => {
      };
      return m.stop = Ve, m.resume = Ve, m.pause = Ve, m;
    }
  }
  const c = ue;
  l.call = (m, w, y) => Ie(m, c, w, y);
  let h = !1;
  i === "post" ? l.scheduler = (m) => {
    ye(m, c && c.suspense);
  } : i !== "sync" && (h = !0, l.scheduler = (m, w) => {
    w ? m() : Nr(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), h && (m.flags |= 2, c && (m.id = c.uid, m.i = c));
  };
  const g = yl(e, t, l);
  return Tt && (a ? a.push(g) : f && g()), g;
}
function rf(e, t, n) {
  const r = this.proxy, s = ie(e) ? e.includes(".") ? Wi(r, e) : () => r[e] : e.bind(r, r);
  let i;
  $(t) ? i = t : (i = t.handler, n = t);
  const o = Xt(this), l = Vr(s, i.bind(r), n);
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
function Yc(e, t, n = G) {
  const r = Zt(), s = Ee(t), i = it(t), o = ki(e, s), l = ci((f, a) => {
    let c, h = G, g;
    return nf(() => {
      const m = e[s];
      we(c, m) && (c = m, a());
    }), {
      get() {
        return f(), n.get ? n.get(c) : c;
      },
      set(m) {
        const w = n.set ? n.set(m) : m;
        if (!we(w, c) && !(h !== G && we(m, h)))
          return;
        const y = r.vnode.props;
        y && // check if parent has passed v-model
        (t in y || s in y || i in y) && (`onUpdate:${t}` in y || `onUpdate:${s}` in y || `onUpdate:${i}` in y) || (c = m, a()), r.emit(`update:${t}`, w), we(m, w) && we(m, h) && !we(w, g) && a(), h = m, g = w;
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
const ki = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ee(t)}Modifiers`] || e[`${it(t)}Modifiers`];
function sf(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || G;
  let s = n;
  const i = t.startsWith("update:"), o = i && ki(r, t.slice(7));
  o && (o.trim && (s = n.map((c) => ie(c) ? c.trim() : c)), o.number && (s = n.map(Mo)));
  let l, f = r[l = Wn(t)] || // also try camelCase event handler (#2249)
  r[l = Wn(Ee(t))];
  !f && i && (f = r[l = Wn(it(t))]), f && Ie(
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
  return !i && !l ? (ne(e) && r.set(e, null), null) : (D(i) ? i.forEach((f) => o[f] = null) : le(o, i), ne(e) && r.set(e, o), o);
}
function Hn(e, t) {
  return !e || !Tn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), J(e, t[0].toLowerCase() + t.slice(1)) || J(e, it(t)) || J(e, t));
}
function fs(e) {
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
    ctx: w,
    inheritAttrs: y
  } = e, L = yn(e);
  let v, C;
  try {
    if (n.shapeFlag & 4) {
      const M = s || r, V = M;
      v = He(
        a.call(
          V,
          M,
          c,
          h,
          m,
          g,
          w
        )
      ), C = l;
    } else {
      const M = t;
      v = He(
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
    Ht.length = 0, Jt(M, e, 1), v = oe(ge);
  }
  let P = v;
  if (C && y !== !1) {
    const M = Object.keys(C), { shapeFlag: V } = P;
    M.length && V & 7 && (i && M.some(Sr) && (C = lf(
      C,
      i
    )), P = st(P, C, !1, !0));
  }
  return n.dirs && (P = st(P, null, !1, !0), P.dirs = P.dirs ? P.dirs.concat(n.dirs) : n.dirs), n.transition && pt(P, n.transition), v = P, yn(L), v;
}
const of = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Tn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, lf = (e, t) => {
  const n = {};
  for (const r in e)
    (!Sr(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function ff(e, t, n) {
  const { props: r, children: s, component: i } = e, { props: o, children: l, patchFlag: f } = t, a = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return r ? cs(r, o, a) : !!o;
    if (f & 8) {
      const c = t.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        const g = c[h];
        if (o[g] !== r[g] && !Hn(a, g))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : r === o ? !1 : r ? o ? cs(r, o, a) : !0 : !!o;
  return !1;
}
function cs(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (t[i] !== e[i] && !Hn(n, i))
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
  t && t.pendingBranch ? D(e) ? t.effects.push(...e) : t.effects.push(e) : _l(e);
}
const xe = Symbol.for("v-fgt"), Vn = Symbol.for("v-txt"), ge = Symbol.for("v-cmt"), un = Symbol.for("v-stc"), Ht = [];
let Te = null;
function pr(e = !1) {
  Ht.push(Te = e ? null : []);
}
function af() {
  Ht.pop(), Te = Ht[Ht.length - 1] || null;
}
let kt = 1;
function us(e, t = !1) {
  kt += e, e < 0 && Te && t && (Te.hasOnce = !0);
}
function qi(e) {
  return e.dynamicChildren = kt > 0 ? Te || bt : null, af(), kt > 0 && Te && Te.push(e), e;
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
function gr(e, t, n, r, s) {
  return qi(
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
const Ji = ({ key: e }) => e ?? null, an = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ie(e) || ce(e) || $(e) ? { i: ae, r: e, k: t, f: !!n } : e : null);
function Yi(e, t = null, n = null, r = 0, s = null, i = e === xe ? 0 : 1, o = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ji(t),
    ref: t && an(t),
    scopeId: pi,
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
  return l ? (Kr(f, n), i & 128 && e.normalize(f)) : n && (f.shapeFlag |= ie(n) ? 8 : 16), kt > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Te && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && Te.push(f), f;
}
const oe = df;
function df(e, t = null, n = null, r = 0, s = null, i = !1) {
  if ((!e || e === Pi) && (e = ge), zt(e)) {
    const l = st(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Kr(l, n), kt > 0 && !i && Te && (l.shapeFlag & 6 ? Te[Te.indexOf(e)] = l : Te.push(l)), l.patchFlag = -2, l;
  }
  if (Cf(e) && (e = e.__vccOpts), t) {
    t = hf(t);
    let { class: l, style: f } = t;
    l && !ie(l) && (t.class = Ar(l)), ne(f) && (Fr(f) && !D(f) && (f = le({}, f)), t.style = Er(f));
  }
  const o = ie(e) ? 1 : Gi(e) ? 128 : mi(e) ? 64 : ne(e) ? 4 : $(e) ? 2 : 0;
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
  return e ? Fr(e) || ji(e) ? le({}, e) : e : null;
}
function st(e, t, n = !1, r = !1) {
  const { props: s, ref: i, patchFlag: o, children: l, transition: f } = e, a = t ? gf(s || {}, t) : s, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Ji(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? D(i) ? i.concat(an(t)) : [i, an(t)] : an(t)
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
    patchFlag: t && e.type !== xe ? o === -1 ? 16 : o | 16 : o,
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
function pf(e = " ", t = 0) {
  return oe(Vn, null, e, t);
}
function Xc(e, t) {
  const n = oe(un, null, e);
  return n.staticCount = t, n;
}
function Qc(e = "", t = !1) {
  return t ? (pr(), gr(ge, null, e)) : oe(ge, null, e);
}
function He(e) {
  return e == null || typeof e == "boolean" ? oe(ge) : D(e) ? oe(
    xe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : zt(e) ? tt(e) : oe(Vn, null, String(e));
}
function tt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : st(e);
}
function Kr(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (D(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Kr(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !ji(t) ? t._ctx = ae : s === 3 && ae && (ae.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else $(t) ? (t = { default: t, _ctx: ae }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [pf(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function gf(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = Ar([t.class, r.class]));
      else if (s === "style")
        t.style = Er([t.style, r.style]);
      else if (Tn(s)) {
        const i = t[s], o = r[s];
        o && i !== o && !(D(i) && i.includes(o)) && (t[s] = i ? [].concat(i, o) : o);
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
const mf = Ni();
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
    propsOptions: Bi(r, s),
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = sf.bind(null, i), e.ce && e.ce(i), i;
}
let ue = null;
const Zt = () => ue || ae;
let wn, mr;
{
  const e = Pn(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (i) => {
      s.length > 1 ? s.forEach((o) => o(i)) : s[0](i);
    };
  };
  wn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ue = n
  ), mr = t(
    "__VUE_SSR_SETTERS__",
    (n) => Tt = n
  );
}
const Xt = (e) => {
  const t = ue;
  return wn(e), e.scope.on(), () => {
    e.scope.off(), wn(t);
  };
}, as = () => {
  ue && ue.scope.off(), wn(null);
};
function Zi(e) {
  return e.vnode.shapeFlag & 4;
}
let Tt = !1;
function bf(e, t = !1, n = !1) {
  t && mr(t);
  const { props: r, children: s } = e.vnode, i = Zi(e);
  Wl(e, r, i, t), ql(e, s, n || t);
  const o = i ? _f(e, t) : void 0;
  return t && mr(!1), o;
}
function _f(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Dl);
  const { setup: r } = n;
  if (r) {
    Ge();
    const s = e.setupContext = r.length > 1 ? xf(e) : null, i = Xt(e), o = qt(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), l = js(o);
    if (qe(), i(), (l || e.sp) && !St(e) && jr(e), l) {
      if (o.then(as, as), t)
        return o.then((f) => {
          ds(e, f);
        }).catch((f) => {
          Jt(f, e, 0);
        });
      e.asyncDep = o;
    } else
      ds(e, o);
  } else
    Xi(e);
}
function ds(e, t, n) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ne(t) && (e.setupState = fi(t)), Xi(e);
}
function Xi(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Ve);
  {
    const s = Xt(e);
    Ge();
    try {
      Ll(e);
    } finally {
      qe(), s();
    }
  }
}
const wf = {
  get(e, t) {
    return pe(e, "get", ""), e[t];
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
function Kn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(fi(ol(e.exposed)), {
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
const fe = (e, t) => gl(e, t, Tt);
function Qi(e, t, n) {
  const r = arguments.length;
  return r === 2 ? ne(t) && !D(t) ? zt(t) ? oe(e, null, [t]) : oe(e, t) : oe(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && zt(n) && (n = [n]), oe(e, t, n));
}
const Tf = "3.5.14";
/**
* @vue/runtime-dom v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let yr;
const hs = typeof window < "u" && window.trustedTypes;
if (hs)
  try {
    yr = /* @__PURE__ */ hs.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const eo = yr ? (e) => yr.createHTML(e) : (e) => e, Ef = "http://www.w3.org/2000/svg", Af = "http://www.w3.org/1998/Math/MathML", Ue = typeof document < "u" ? document : null, ps = Ue && /* @__PURE__ */ Ue.createElement("template"), Of = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? Ue.createElementNS(Ef, e) : t === "mathml" ? Ue.createElementNS(Af, e) : n ? Ue.createElement(e, { is: n }) : Ue.createElement(e);
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
      ps.innerHTML = eo(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = ps.content;
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
}, Ze = "transition", Rt = "animation", Et = Symbol("_vtc"), to = {
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
}, no = /* @__PURE__ */ le(
  {},
  _i,
  to
), Pf = (e) => (e.displayName = "Transition", e.props = no, e), eu = /* @__PURE__ */ Pf(
  (e, { slots: t }) => Qi(Cl, ro(e), t)
), ut = (e, t = []) => {
  D(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, gs = (e) => e ? D(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function ro(e) {
  const t = {};
  for (const R in e)
    R in to || (t[R] = e[R]);
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
  } = e, w = Mf(s), y = w && w[0], L = w && w[1], {
    onBeforeEnter: v,
    onEnter: C,
    onEnterCancelled: P,
    onLeave: M,
    onLeaveCancelled: V,
    onBeforeAppear: U = v,
    onAppear: H = C,
    onAppearCancelled: k = P
  } = t, I = (R, X, j, re) => {
    R._enterCancelled = re, Xe(R, X ? c : l), Xe(R, X ? a : o), j && j();
  }, K = (R, X) => {
    R._isLeaving = !1, Xe(R, h), Xe(R, m), Xe(R, g), X && X();
  }, Z = (R) => (X, j) => {
    const re = R ? H : C, q = () => I(X, R, j);
    ut(re, [X, q]), ms(() => {
      Xe(X, R ? f : i), $e(X, R ? c : l), gs(re) || ys(X, r, y, q);
    });
  };
  return le(t, {
    onBeforeEnter(R) {
      ut(v, [R]), $e(R, i), $e(R, o);
    },
    onBeforeAppear(R) {
      ut(U, [R]), $e(R, f), $e(R, a);
    },
    onEnter: Z(!1),
    onAppear: Z(!0),
    onLeave(R, X) {
      R._isLeaving = !0;
      const j = () => K(R, X);
      $e(R, h), R._enterCancelled ? ($e(R, g), vr()) : (vr(), $e(R, g)), ms(() => {
        R._isLeaving && (Xe(R, h), $e(R, m), gs(M) || ys(R, r, L, j));
      }), ut(M, [R, j]);
    },
    onEnterCancelled(R) {
      I(R, !1, void 0, !0), ut(P, [R]);
    },
    onAppearCancelled(R) {
      I(R, !0, void 0, !0), ut(k, [R]);
    },
    onLeaveCancelled(R) {
      K(R), ut(V, [R]);
    }
  });
}
function Mf(e) {
  if (e == null)
    return null;
  if (ne(e))
    return [er(e.enter), er(e.leave)];
  {
    const t = er(e);
    return [t, t];
  }
}
function er(e) {
  return Ro(e);
}
function $e(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Et] || (e[Et] = /* @__PURE__ */ new Set())).add(t);
}
function Xe(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[Et];
  n && (n.delete(t), n.size || (e[Et] = void 0));
}
function ms(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Rf = 0;
function ys(e, t, n, r) {
  const s = e._endId = ++Rf, i = () => {
    s === e._endId && r();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: o, timeout: l, propCount: f } = so(e, t);
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
function so(e, t) {
  const n = window.getComputedStyle(e), r = (w) => (n[w] || "").split(", "), s = r(`${Ze}Delay`), i = r(`${Ze}Duration`), o = vs(s, i), l = r(`${Rt}Delay`), f = r(`${Rt}Duration`), a = vs(l, f);
  let c = null, h = 0, g = 0;
  t === Ze ? o > 0 && (c = Ze, h = o, g = i.length) : t === Rt ? a > 0 && (c = Rt, h = a, g = f.length) : (h = Math.max(o, a), c = h > 0 ? o > a ? Ze : Rt : null, g = c ? c === Ze ? i.length : f.length : 0);
  const m = c === Ze && /\b(transform|all)(,|$)/.test(
    r(`${Ze}Property`).toString()
  );
  return {
    type: c,
    timeout: h,
    propCount: g,
    hasTransform: m
  };
}
function vs(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => bs(n) + bs(e[r])));
}
function bs(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function vr() {
  return document.body.offsetHeight;
}
function If(e, t, n) {
  const r = e[Et];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const xn = Symbol("_vod"), io = Symbol("_vsh"), tu = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[xn] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : It(e, t);
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
  e.style.display = t ? e[xn] : "none", e[io] = !t;
}
const Ff = Symbol(""), Nf = /(^|;)\s*display\s*:/;
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
      const o = r[Ff];
      o && (n += ";" + o), r.cssText = n, i = Nf.test(n);
    }
  } else t && e.removeAttribute("style");
  xn in e && (e[xn] = i ? r.display : "", e[io] && (r.display = "none"));
}
const _s = /\s*!important$/;
function dn(e, t, n) {
  if (D(n))
    n.forEach((r) => dn(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Lf(e, t);
    _s.test(n) ? e.setProperty(
      it(r),
      n.replace(_s, ""),
      "important"
    ) : e[r] = n;
  }
}
const ws = ["Webkit", "Moz", "ms"], tr = {};
function Lf(e, t) {
  const n = tr[t];
  if (n)
    return n;
  let r = Ee(t);
  if (r !== "filter" && r in e)
    return tr[t] = r;
  r = On(r);
  for (let s = 0; s < ws.length; s++) {
    const i = ws[s] + r;
    if (i in e)
      return tr[t] = i;
  }
  return t;
}
const xs = "http://www.w3.org/1999/xlink";
function Ss(e, t, n, r, s, i = jo(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(xs, t.slice(6, t.length)) : e.setAttributeNS(xs, t, n) : n == null || i && !Vs(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Je(n) ? String(n) : n
  );
}
function Cs(e, t, n, r, s) {
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
    l === "boolean" ? n = Vs(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
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
const Ts = Symbol("_vei");
function Bf(e, t, n, r, s = null) {
  const i = e[Ts] || (e[Ts] = {}), o = i[t];
  if (r && o)
    o.value = r;
  else {
    const [l, f] = Hf(t);
    if (r) {
      const a = i[t] = Uf(
        r,
        s
      );
      jf(e, l, a, f);
    } else o && ($f(e, l, o, f), i[t] = void 0);
  }
}
const Es = /(?:Once|Passive|Capture)$/;
function Hf(e) {
  let t;
  if (Es.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Es); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : it(e.slice(2)), t];
}
let nr = 0;
const Vf = /* @__PURE__ */ Promise.resolve(), Kf = () => nr || (Vf.then(() => nr = 0), nr = Date.now());
function Uf(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Ie(
      Wf(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = Kf(), n;
}
function Wf(e, t) {
  if (D(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (s) => !s._stopped && r && r(s)
    );
  } else
    return t;
}
const As = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, kf = (e, t, n, r, s, i) => {
  const o = s === "svg";
  t === "class" ? If(e, r, o) : t === "style" ? Df(e, n, r) : Tn(t) ? Sr(t) || Bf(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : zf(e, t, r, o)) ? (Cs(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ss(e, t, r, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ie(r)) ? Cs(e, Ee(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ss(e, t, r, o));
};
function zf(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && As(t) && $(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return As(t) && ie(n) ? !1 : t in e;
}
const oo = /* @__PURE__ */ new WeakMap(), lo = /* @__PURE__ */ new WeakMap(), Sn = Symbol("_moveCb"), Os = Symbol("_enterCb"), Gf = (e) => (delete e.props.mode, e), qf = /* @__PURE__ */ Gf({
  name: "TransitionGroup",
  props: /* @__PURE__ */ le({}, no, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = Zt(), r = bi();
    let s, i;
    return Ti(() => {
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
      s.forEach(Jf), s.forEach(Yf);
      const l = s.filter(Zf);
      vr(), l.forEach((f) => {
        const a = f.el, c = a.style;
        $e(a, o), c.transform = c.webkitTransform = c.transitionDuration = "";
        const h = a[Sn] = (g) => {
          g && g.target !== a || (!g || /transform$/.test(g.propertyName)) && (a.removeEventListener("transitionend", h), a[Sn] = null, Xe(a, o));
        };
        a.addEventListener("transitionend", h);
      }), s = [];
    }), () => {
      const o = z(e), l = ro(o);
      let f = o.tag || xe;
      if (s = [], i)
        for (let a = 0; a < i.length; a++) {
          const c = i[a];
          c.el && c.el instanceof Element && (s.push(c), pt(
            c,
            Wt(
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
      for (let a = 0; a < i.length; a++) {
        const c = i[a];
        c.key != null && pt(
          c,
          Wt(c, l, r, n)
        );
      }
      return oe(f, null, i);
    };
  }
}), nu = qf;
function Jf(e) {
  const t = e.el;
  t[Sn] && t[Sn](), t[Os] && t[Os]();
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
}, tc = /* @__PURE__ */ le({ patchProp: kf }, Of);
let Ps;
function nc() {
  return Ps || (Ps = Yl(tc));
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
  return ie(e) ? document.querySelector(e) : e;
}
var fo = Symbol();
function iu(e, {
  i18next: t,
  rerenderOn: n = ["languageChanged", "loaded", "added", "removed"],
  slotStart: r = "{",
  slotEnd: s = "}"
}) {
  const i = Dn(/* @__PURE__ */ new Date()), o = () => jn(() => {
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
  e.config.globalProperties.$t = Ms(
    t.t.bind(t),
    l,
    f
  );
  const a = new Proxy(t, {
    get(c, h) {
      return l(), Reflect.get(c, h);
    }
  });
  e.config.globalProperties.$i18next = a, e.provide(fo, {
    i18next: a,
    slotPattern: oc(r, s),
    withAccessRecording(c, h) {
      return Ms(c, l, h);
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
function Ms(e, t, n) {
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
      _e(e, r, n[r]);
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
function Cn(e) {
  "@babel/helpers - typeof";
  return Cn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Cn(e);
}
function _e(e, t, n) {
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
    var n = function(v, C, P) {
      if (!a(C) || h(C) || g(C) || m(C) || f(C))
        return C;
      var M, V = 0, U = 0;
      if (c(C))
        for (M = [], U = C.length; V < U; V++)
          M.push(n(v, C[V], P));
      else {
        M = {};
        for (var H in C)
          Object.prototype.hasOwnProperty.call(C, H) && (M[v(H, P)] = n(v, C[H], P));
      }
      return M;
    }, r = function(v, C) {
      C = C || {};
      var P = C.separator || "_", M = C.split || /(?=[A-Z])/;
      return v.split(M).join(P);
    }, s = function(v) {
      return w(v) ? v : (v = v.replace(/[\-_\s]+(.)?/g, function(C, P) {
        return P ? P.toUpperCase() : "";
      }), v.substr(0, 1).toLowerCase() + v.substr(1));
    }, i = function(v) {
      var C = s(v);
      return C.substr(0, 1).toUpperCase() + C.substr(1);
    }, o = function(v, C) {
      return r(v, C).toLowerCase();
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
    }, w = function(v) {
      return v = v - 0, v === v;
    }, y = function(v, C) {
      var P = C && "process" in C ? C.process : C;
      return typeof P != "function" ? v : function(M, V) {
        return P(M, v, V);
      };
    }, L = {
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
    e.exports ? e.exports = L : t.humps = L;
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
  }), s = Object.keys(e.attributes || {}).reduce(function(f, a) {
    var c = e.attributes[a];
    switch (a) {
      case "class":
        f.class = mc(c);
        break;
      case "style":
        f.style = gc(c);
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
function rr(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? _e({}, e, t) : {};
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
  }, _e(_e(_e(_e(_e(_e(_e(_e(_e(_e(t, "fa-".concat(e.size), e.size !== null), "fa-rotate-".concat(e.rotation), e.rotation !== null), "fa-pull-".concat(e.pull), e.pull !== null), "fa-swap-opacity", e.swapOpacity), "fa-bounce", e.bounce), "fa-shake", e.shake), "fa-beat", e.beat), "fa-fade", e.fade), "fa-beat-fade", e.beatFade), "fa-flash", e.flash), _e(_e(t, "fa-spin-pulse", e.spinPulse), "fa-spin-reverse", e.spinReverse));
  return Object.keys(n).map(function(r) {
    return n[r] ? r : null;
  }).filter(function(r) {
    return r;
  });
}
function Is(e) {
  if (e && Cn(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (ir.icon)
    return ir.icon(e);
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
    var r = n.attrs, s = fe(function() {
      return Is(t.icon);
    }), i = fe(function() {
      return rr("classes", vc(t));
    }), o = fe(function() {
      return rr("transform", typeof t.transform == "string" ? ir.transform(t.transform) : t.transform);
    }), l = fe(function() {
      return rr("mask", Is(t.mask));
    }), f = fe(function() {
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
    var a = fe(function() {
      return f.value ? ao(f.value.abstract[0], {}, r) : null;
    });
    return function() {
      return a.value;
    };
  }
});
function po(e) {
  return Or() ? (Ws(e), !0) : !1;
}
const bc = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const _c = Object.prototype.toString, wc = (e) => _c.call(e) === "[object Object]", br = () => {
};
function xc(...e) {
  if (e.length !== 1)
    return dl(...e);
  const t = e[0];
  return typeof t == "function" ? Fn(ci(() => ({ get: t, set: br }))) : Pe(t);
}
function Sc(e, t) {
  function n(...r) {
    return new Promise((s, i) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(s).catch(i);
    });
  }
  return n;
}
const go = (e) => e();
function Cc(...e) {
  let t = 0, n, r = !0, s = br, i, o, l, f, a;
  !ce(e[0]) && typeof e[0] == "object" ? { delay: o, trailing: l = !0, leading: f = !0, rejectOnCancel: a = !1 } = e[0] : [o, l = !0, f = !0, a = !1] = e;
  const c = () => {
    n && (clearTimeout(n), n = void 0, s(), s = br);
  };
  return (g) => {
    const m = nt(o), w = Date.now() - t, y = () => i = g();
    return c(), m <= 0 ? (t = Date.now(), y()) : (w > m && (f || !r) ? (t = Date.now(), y()) : l && (i = new Promise((L, v) => {
      s = a ? v : L, n = setTimeout(() => {
        t = Date.now(), r = !0, L(y()), c();
      }, Math.max(0, m - w));
    })), !f && !n && (n = setTimeout(() => r = !0, m)), r = !1, i);
  };
}
function Tc(e = go, t = {}) {
  const {
    initialState: n = "active"
  } = t, r = xc(n === "active");
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
function sr(e) {
  return Array.isArray(e) ? e : [e];
}
function Ec(e) {
  return Zt();
}
function mo(e, t, n = {}) {
  const {
    eventFilter: r = go,
    ...s
  } = n;
  return Re(
    e,
    Sc(
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
  } = n, { eventFilter: o, pause: l, resume: f, isActive: a } = Tc(r, { initialState: s });
  return { stop: mo(
    e,
    t,
    {
      ...i,
      eventFilter: o
    }
  ), pause: l, resume: f, isActive: a };
}
function Oc(e, t = !0, n) {
  Ec() ? Bn(e, n) : t ? e() : jn(e);
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
      eventFilter: Cc(r, s, i)
    }
  );
}
const Gt = bc ? window : void 0;
function _r(e) {
  var t;
  const n = nt(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function Fs(...e) {
  const t = [], n = () => {
    t.forEach((l) => l()), t.length = 0;
  }, r = (l, f, a, c) => (l.addEventListener(f, a, c), () => l.removeEventListener(f, a, c)), s = fe(() => {
    const l = sr(nt(e[0])).filter((f) => f != null);
    return l.every((f) => typeof f != "string") ? l : void 0;
  }), i = Pc(
    () => {
      var l, f;
      return [
        (f = (l = s.value) == null ? void 0 : l.map((a) => _r(a))) != null ? f : [Gt].filter((a) => a != null),
        sr(nt(s.value ? e[1] : e[0])),
        sr(Ln(s.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        nt(s.value ? e[3] : e[2])
      ];
    },
    ([l, f, a, c]) => {
      if (n(), !(l != null && l.length) || !(f != null && f.length) || !(a != null && a.length))
        return;
      const h = wc(c) ? { ...c } : c;
      t.push(
        ...l.flatMap(
          (g) => f.flatMap(
            (m) => a.map((w) => r(g, m, w, h))
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
function Mc() {
  const e = Dn(!1), t = Zt();
  return t && Bn(() => {
    e.value = !0;
  }, t), e;
}
function Rc(e) {
  const t = Mc();
  return fe(() => (t.value, !!e()));
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
}, Ns = "vueuse-storage";
function jc(e, t, n, r = {}) {
  var s;
  const {
    flush: i = "pre",
    deep: o = !0,
    listenToStorageChanges: l = !0,
    writeDefaults: f = !0,
    mergeDefaults: a = !1,
    shallow: c,
    window: h = Gt,
    eventFilter: g,
    onError: m = (j) => {
      console.error(j);
    },
    initOnMounted: w
  } = r, y = (c ? Dn : Pe)(typeof t == "function" ? t() : t), L = fe(() => nt(e));
  if (!n)
    try {
      n = Nc("getDefaultStorage", () => {
        var j;
        return (j = Gt) == null ? void 0 : j.localStorage;
      })();
    } catch (j) {
      m(j);
    }
  if (!n)
    return y;
  const v = nt(t), C = Dc(v), P = (s = r.serializer) != null ? s : Lc[C], { pause: M, resume: V } = Ac(
    y,
    () => K(y.value),
    { flush: i, deep: o, eventFilter: g }
  );
  Re(L, () => R(), { flush: i });
  let U = !1;
  const H = (j) => {
    w && !U || R(j);
  }, k = (j) => {
    w && !U || X(j);
  };
  h && l && (n instanceof Storage ? Fs(h, "storage", H, { passive: !0 }) : Fs(h, Ns, k)), w ? Oc(() => {
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
      h.dispatchEvent(n instanceof Storage ? new StorageEvent("storage", q) : new CustomEvent(Ns, {
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
        const q = P.write(j);
        re !== q && (n.setItem(L.value, q), I(re, q));
      }
    } catch (re) {
      m(re);
    }
  }
  function Z(j) {
    const re = j ? j.newValue : n.getItem(L.value);
    if (re == null)
      return f && v != null && n.setItem(L.value, P.write(v)), v;
    if (!j && a) {
      const q = P.read(re);
      return typeof a == "function" ? a(q, v) : C === "object" && !Array.isArray(q) ? { ...v, ...q } : q;
    } else return typeof re != "string" ? re : P.read(re);
  }
  function R(j) {
    if (!(j && j.storageArea !== n)) {
      if (j && j.key == null) {
        y.value = v;
        return;
      }
      if (!(j && j.key !== L.value)) {
        M();
        try {
          (j == null ? void 0 : j.newValue) !== P.write(y.value) && (y.value = Z(j));
        } catch (re) {
          m(re);
        } finally {
          j ? jn(V) : V();
        }
      }
    }
  }
  function X(j) {
    R(j.detail);
  }
  return y;
}
function cu(e, t, n = {}) {
  const { window: r = Gt, ...s } = n;
  let i;
  const o = Rc(() => r && "ResizeObserver" in r), l = () => {
    i && (i.disconnect(), i = void 0);
  }, f = fe(() => {
    const h = nt(e);
    return Array.isArray(h) ? h.map((g) => _r(g)) : [_r(h)];
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
function wr(e) {
  if ($c(e)) {
    const t = e.$el;
    return wo(t) && xo(t) === "#comment" ? null : t;
  }
  return e;
}
function vt(e) {
  return typeof e == "function" ? e() : Ln(e);
}
function au(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = wr(vt(e.element));
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
function Ds(e, t) {
  const n = yo(e);
  return Math.round(t * n) / n;
}
function du(e, t, n) {
  n === void 0 && (n = {});
  const r = n.whileElementsMounted, s = fe(() => {
    var H;
    return (H = vt(n.open)) != null ? H : !0;
  }), i = fe(() => vt(n.middleware)), o = fe(() => {
    var H;
    return (H = vt(n.placement)) != null ? H : "bottom";
  }), l = fe(() => {
    var H;
    return (H = vt(n.strategy)) != null ? H : "absolute";
  }), f = fe(() => {
    var H;
    return (H = vt(n.transform)) != null ? H : !0;
  }), a = fe(() => wr(e.value)), c = fe(() => wr(t.value)), h = Pe(0), g = Pe(0), m = Pe(l.value), w = Pe(o.value), y = Dn({}), L = Pe(!1), v = fe(() => {
    const H = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return H;
    const k = Ds(c.value, h.value), I = Ds(c.value, g.value);
    return f.value ? {
      ...H,
      transform: "translate(" + k + "px, " + I + "px)",
      ...yo(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: k + "px",
      top: I + "px"
    };
  });
  let C;
  function P() {
    if (a.value == null || c.value == null)
      return;
    const H = s.value;
    So(a.value, c.value, {
      middleware: i.value,
      placement: o.value,
      strategy: l.value
    }).then((k) => {
      h.value = k.x, g.value = k.y, m.value = k.strategy, w.value = k.placement, y.value = k.middlewareData, L.value = H !== !1;
    });
  }
  function M() {
    typeof C == "function" && (C(), C = void 0);
  }
  function V() {
    if (M(), r === void 0) {
      P();
      return;
    }
    if (a.value != null && c.value != null) {
      C = r(a.value, c.value, P);
      return;
    }
  }
  function U() {
    s.value || (L.value = !1);
  }
  return Re([i, o, l, s], P, {
    flush: "sync"
  }), Re([a, c], V, {
    flush: "sync"
  }), Re(s, U, {
    flush: "sync"
  }), Or() && Ws(M), {
    x: mt(h),
    y: mt(g),
    strategy: mt(m),
    placement: mt(w),
    middlewareData: mt(y),
    isPositioned: mt(L),
    floatingStyles: v,
    update: P
  };
}
export {
  oe as A,
  Ei as B,
  Wc as C,
  cu as D,
  fu as E,
  xe as F,
  Dn as G,
  uu as H,
  Ir as I,
  du as J,
  Uc as K,
  au as L,
  Jc as M,
  Yc as N,
  ol as O,
  ru as P,
  Bt as Q,
  nu as R,
  Vc as S,
  eu as T,
  Ul as U,
  Pl as V,
  zc as W,
  su as X,
  iu as Y,
  lu as Z,
  Ar as a,
  Yi as b,
  Zc as c,
  Lr as d,
  Qc as e,
  Xc as f,
  Pe as g,
  fe as h,
  Re as i,
  Bn as j,
  jn as k,
  Ai as l,
  gf as m,
  Er as n,
  pr as o,
  pf as p,
  gr as q,
  Gc as r,
  qc as s,
  $o as t,
  Ln as u,
  tu as v,
  Kc as w,
  wl as x,
  ou as y,
  kc as z
};

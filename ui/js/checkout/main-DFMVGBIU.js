/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function qs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Q = {}, ln = [], at = () => {
}, wc = () => !1, Ir = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Js = (e) => e.startsWith("onUpdate:"), ge = Object.assign, Qs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Rc = Object.prototype.hasOwnProperty, te = (e, t) => Rc.call(e, t), z = Array.isArray, cn = (e) => xr(e) === "[object Map]", vo = (e) => xr(e) === "[object Set]", G = (e) => typeof e == "function", ue = (e) => typeof e == "string", It = (e) => typeof e == "symbol", ie = (e) => e !== null && typeof e == "object", Eo = (e) => (ie(e) || G(e)) && G(e.then) && G(e.catch), To = Object.prototype.toString, xr = (e) => To.call(e), kc = (e) => xr(e).slice(8, -1), Oo = (e) => xr(e) === "[object Object]", Zs = (e) => ue(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ln = /* @__PURE__ */ qs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Pr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Mc = /-(\w)/g, $e = Pr(
  (e) => e.replace(Mc, (t, n) => n ? n.toUpperCase() : "")
), Dc = /\B([A-Z])/g, xt = Pr(
  (e) => e.replace(Dc, "-$1").toLowerCase()
), wr = Pr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Gr = Pr(
  (e) => e ? `on${wr(e)}` : ""
), Me = (e, t) => !Object.is(e, t), Xr = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Ao = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Fc = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let ja;
const Rr = () => ja || (ja = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ea(e) {
  if (z(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = ue(r) ? Wc(r) : ea(r);
      if (s)
        for (const a in s)
          t[a] = s[a];
    }
    return t;
  } else if (ue(e) || ie(e))
    return e;
}
const Uc = /;(?![^(]*\))/g, jc = /:([^]+)/, $c = /\/\*[^]*?\*\//g;
function Wc(e) {
  const t = {};
  return e.replace($c, "").split(Uc).forEach((n) => {
    if (n) {
      const r = n.split(jc);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function ta(e) {
  let t = "";
  if (ue(e))
    t = e;
  else if (z(e))
    for (let n = 0; n < e.length; n++) {
      const r = ta(e[n]);
      r && (t += r + " ");
    }
  else if (ie(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Hc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Vc = /* @__PURE__ */ qs(Hc);
function So(e) {
  return !!e || e === "";
}
const No = (e) => !!(e && e.__v_isRef === !0), Yc = (e) => ue(e) ? e : e == null ? "" : z(e) || ie(e) && (e.toString === To || !G(e.toString)) ? No(e) ? Yc(e.value) : JSON.stringify(e, Co, 2) : String(e), Co = (e, t) => No(t) ? Co(e, t.value) : cn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], a) => (n[qr(r, a) + " =>"] = s, n),
    {}
  )
} : vo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => qr(n))
} : It(t) ? qr(t) : ie(t) && !z(t) && !Oo(t) ? String(t) : t, qr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    It(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Pe;
class Lo {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Pe, !t && Pe && (this.index = (Pe.scopes || (Pe.scopes = [])).push(
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
      const n = Pe;
      try {
        return Pe = this, t();
      } finally {
        Pe = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Pe = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Pe = this.parent;
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
function Bc(e) {
  return new Lo(e);
}
function Kc() {
  return Pe;
}
function Wg(e, t = !1) {
  Pe && Pe.cleanups.push(e);
}
let re;
const Jr = /* @__PURE__ */ new WeakSet();
class Io {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Pe && Pe.active && Pe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Jr.has(this) && (Jr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Po(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, $a(this), wo(this);
    const t = re, n = Xe;
    re = this, Xe = !0;
    try {
      return this.fn();
    } finally {
      Ro(this), re = t, Xe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        sa(t);
      this.deps = this.depsTail = void 0, $a(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Jr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ps(this) && this.run();
  }
  get dirty() {
    return ps(this);
  }
}
let xo = 0, In, xn;
function Po(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = xn, xn = e;
    return;
  }
  e.next = In, In = e;
}
function na() {
  xo++;
}
function ra() {
  if (--xo > 0)
    return;
  if (xn) {
    let t = xn;
    for (xn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; In; ) {
    let t = In;
    for (In = void 0; t; ) {
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
function wo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ro(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), sa(r), zc(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  e.deps = t, e.depsTail = n;
}
function ps(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ko(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ko(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Fn))
    return;
  e.globalVersion = Fn;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !ps(e)) {
    e.flags &= -3;
    return;
  }
  const n = re, r = Xe;
  re = e, Xe = !0;
  try {
    wo(e);
    const s = e.fn(e._value);
    (t.version === 0 || Me(s, e._value)) && (e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    re = n, Xe = r, Ro(e), e.flags &= -3;
  }
}
function sa(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let a = n.computed.deps; a; a = a.nextDep)
      sa(a, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function zc(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Xe = !0;
const Mo = [];
function Pt() {
  Mo.push(Xe), Xe = !1;
}
function wt() {
  const e = Mo.pop();
  Xe = e === void 0 ? !0 : e;
}
function $a(e) {
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
let Fn = 0;
class Gc {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class kr {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!re || !Xe || re === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== re)
      n = this.activeLink = new Gc(re, this), re.deps ? (n.prevDep = re.depsTail, re.depsTail.nextDep = n, re.depsTail = n) : re.deps = re.depsTail = n, Do(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = re.depsTail, n.nextDep = void 0, re.depsTail.nextDep = n, re.depsTail = n, re.deps === n && (re.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Fn++, this.notify(t);
  }
  notify(t) {
    na();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ra();
    }
  }
}
function Do(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Do(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const hs = /* @__PURE__ */ new WeakMap(), Yt = Symbol(
  ""
), gs = Symbol(
  ""
), Un = Symbol(
  ""
);
function Ae(e, t, n) {
  if (Xe && re) {
    let r = hs.get(e);
    r || hs.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new kr()), s.map = r, s.key = n), s.track();
  }
}
function mt(e, t, n, r, s, a) {
  const i = hs.get(e);
  if (!i) {
    Fn++;
    return;
  }
  const o = (l) => {
    l && l.trigger();
  };
  if (na(), t === "clear")
    i.forEach(o);
  else {
    const l = z(e), f = l && Zs(n);
    if (l && n === "length") {
      const u = Number(r);
      i.forEach((m, _) => {
        (_ === "length" || _ === Un || !It(_) && _ >= u) && o(m);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && o(i.get(n)), f && o(i.get(Un)), t) {
        case "add":
          l ? f && o(i.get("length")) : (o(i.get(Yt)), cn(e) && o(i.get(gs)));
          break;
        case "delete":
          l || (o(i.get(Yt)), cn(e) && o(i.get(gs)));
          break;
        case "set":
          cn(e) && o(i.get(Yt));
          break;
      }
  }
  ra();
}
function rn(e) {
  const t = ee(e);
  return t === e ? t : (Ae(t, "iterate", Un), Ye(e) ? t : t.map(Se));
}
function Mr(e) {
  return Ae(e = ee(e), "iterate", Un), e;
}
const Xc = {
  __proto__: null,
  [Symbol.iterator]() {
    return Qr(this, Symbol.iterator, Se);
  },
  concat(...e) {
    return rn(this).concat(
      ...e.map((t) => z(t) ? rn(t) : t)
    );
  },
  entries() {
    return Qr(this, "entries", (e) => (e[1] = Se(e[1]), e));
  },
  every(e, t) {
    return lt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return lt(this, "filter", e, t, (n) => n.map(Se), arguments);
  },
  find(e, t) {
    return lt(this, "find", e, t, Se, arguments);
  },
  findIndex(e, t) {
    return lt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return lt(this, "findLast", e, t, Se, arguments);
  },
  findLastIndex(e, t) {
    return lt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return lt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Zr(this, "includes", e);
  },
  indexOf(...e) {
    return Zr(this, "indexOf", e);
  },
  join(e) {
    return rn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Zr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return lt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Tn(this, "pop");
  },
  push(...e) {
    return Tn(this, "push", e);
  },
  reduce(e, ...t) {
    return Wa(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Wa(this, "reduceRight", e, t);
  },
  shift() {
    return Tn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return lt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Tn(this, "splice", e);
  },
  toReversed() {
    return rn(this).toReversed();
  },
  toSorted(e) {
    return rn(this).toSorted(e);
  },
  toSpliced(...e) {
    return rn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Tn(this, "unshift", e);
  },
  values() {
    return Qr(this, "values", Se);
  }
};
function Qr(e, t, n) {
  const r = Mr(e), s = r[t]();
  return r !== e && !Ye(e) && (s._next = s.next, s.next = () => {
    const a = s._next();
    return a.value && (a.value = n(a.value)), a;
  }), s;
}
const qc = Array.prototype;
function lt(e, t, n, r, s, a) {
  const i = Mr(e), o = i !== e && !Ye(e), l = i[t];
  if (l !== qc[t]) {
    const m = l.apply(e, a);
    return o ? Se(m) : m;
  }
  let f = n;
  i !== e && (o ? f = function(m, _) {
    return n.call(this, Se(m), _, e);
  } : n.length > 2 && (f = function(m, _) {
    return n.call(this, m, _, e);
  }));
  const u = l.call(i, f, r);
  return o && s ? s(u) : u;
}
function Wa(e, t, n, r) {
  const s = Mr(e);
  let a = n;
  return s !== e && (Ye(e) ? n.length > 3 && (a = function(i, o, l) {
    return n.call(this, i, o, l, e);
  }) : a = function(i, o, l) {
    return n.call(this, i, Se(o), l, e);
  }), s[t](a, ...r);
}
function Zr(e, t, n) {
  const r = ee(e);
  Ae(r, "iterate", Un);
  const s = r[t](...n);
  return (s === -1 || s === !1) && la(n[0]) ? (n[0] = ee(n[0]), r[t](...n)) : s;
}
function Tn(e, t, n = []) {
  Pt(), na();
  const r = ee(e)[t].apply(e, n);
  return ra(), wt(), r;
}
const Jc = /* @__PURE__ */ qs("__proto__,__v_isRef,__isVue"), Fo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(It)
);
function Qc(e) {
  It(e) || (e = String(e));
  const t = ee(this);
  return Ae(t, "has", e), t.hasOwnProperty(e);
}
class Uo {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, a = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return a;
    if (n === "__v_raw")
      return r === (s ? a ? cf : Ho : a ? Wo : $o).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = z(t);
    if (!s) {
      let l;
      if (i && (l = Xc[n]))
        return l;
      if (n === "hasOwnProperty")
        return Qc;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Te(t) ? t : r
    );
    return (It(n) ? Fo.has(n) : Jc(n)) || (s || Ae(t, "get", n), a) ? o : Te(o) ? i && Zs(n) ? o : o.value : ie(o) ? s ? Vo(o) : ia(o) : o;
  }
}
class jo extends Uo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let a = t[n];
    if (!this._isShallow) {
      const l = Kt(a);
      if (!Ye(r) && !Kt(r) && (a = ee(a), r = ee(r)), !z(t) && Te(a) && !Te(r))
        return l ? !1 : (a.value = r, !0);
    }
    const i = z(t) && Zs(n) ? Number(n) < t.length : te(t, n), o = Reflect.set(
      t,
      n,
      r,
      Te(t) ? t : s
    );
    return t === ee(s) && (i ? Me(r, a) && mt(t, "set", n, r) : mt(t, "add", n, r)), o;
  }
  deleteProperty(t, n) {
    const r = te(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && mt(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!It(n) || !Fo.has(n)) && Ae(t, "has", n), r;
  }
  ownKeys(t) {
    return Ae(
      t,
      "iterate",
      z(t) ? "length" : Yt
    ), Reflect.ownKeys(t);
  }
}
class Zc extends Uo {
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
const ef = /* @__PURE__ */ new jo(), tf = /* @__PURE__ */ new Zc(), nf = /* @__PURE__ */ new jo(!0);
const _s = (e) => e, Qn = (e) => Reflect.getPrototypeOf(e);
function rf(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, a = ee(s), i = cn(a), o = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, f = s[e](...r), u = n ? _s : t ? bs : Se;
    return !t && Ae(
      a,
      "iterate",
      l ? gs : Yt
    ), {
      // iterator protocol
      next() {
        const { value: m, done: _ } = f.next();
        return _ ? { value: m, done: _ } : {
          value: o ? [u(m[0]), u(m[1])] : u(m),
          done: _
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Zn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function sf(e, t) {
  const n = {
    get(s) {
      const a = this.__v_raw, i = ee(a), o = ee(s);
      e || (Me(s, o) && Ae(i, "get", s), Ae(i, "get", o));
      const { has: l } = Qn(i), f = t ? _s : e ? bs : Se;
      if (l.call(i, s))
        return f(a.get(s));
      if (l.call(i, o))
        return f(a.get(o));
      a !== i && a.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && Ae(ee(s), "iterate", Yt), Reflect.get(s, "size", s);
    },
    has(s) {
      const a = this.__v_raw, i = ee(a), o = ee(s);
      return e || (Me(s, o) && Ae(i, "has", s), Ae(i, "has", o)), s === o ? a.has(s) : a.has(s) || a.has(o);
    },
    forEach(s, a) {
      const i = this, o = i.__v_raw, l = ee(o), f = t ? _s : e ? bs : Se;
      return !e && Ae(l, "iterate", Yt), o.forEach((u, m) => s.call(a, f(u), f(m), i));
    }
  };
  return ge(
    n,
    e ? {
      add: Zn("add"),
      set: Zn("set"),
      delete: Zn("delete"),
      clear: Zn("clear")
    } : {
      add(s) {
        !t && !Ye(s) && !Kt(s) && (s = ee(s));
        const a = ee(this);
        return Qn(a).has.call(a, s) || (a.add(s), mt(a, "add", s, s)), this;
      },
      set(s, a) {
        !t && !Ye(a) && !Kt(a) && (a = ee(a));
        const i = ee(this), { has: o, get: l } = Qn(i);
        let f = o.call(i, s);
        f || (s = ee(s), f = o.call(i, s));
        const u = l.call(i, s);
        return i.set(s, a), f ? Me(a, u) && mt(i, "set", s, a) : mt(i, "add", s, a), this;
      },
      delete(s) {
        const a = ee(this), { has: i, get: o } = Qn(a);
        let l = i.call(a, s);
        l || (s = ee(s), l = i.call(a, s)), o && o.call(a, s);
        const f = a.delete(s);
        return l && mt(a, "delete", s, void 0), f;
      },
      clear() {
        const s = ee(this), a = s.size !== 0, i = s.clear();
        return a && mt(
          s,
          "clear",
          void 0,
          void 0
        ), i;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    n[s] = rf(s, e, t);
  }), n;
}
function aa(e, t) {
  const n = sf(e, t);
  return (r, s, a) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    te(n, s) && s in r ? n : r,
    s,
    a
  );
}
const af = {
  get: /* @__PURE__ */ aa(!1, !1)
}, of = {
  get: /* @__PURE__ */ aa(!1, !0)
}, lf = {
  get: /* @__PURE__ */ aa(!0, !1)
};
const $o = /* @__PURE__ */ new WeakMap(), Wo = /* @__PURE__ */ new WeakMap(), Ho = /* @__PURE__ */ new WeakMap(), cf = /* @__PURE__ */ new WeakMap();
function ff(e) {
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
function uf(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ff(kc(e));
}
function ia(e) {
  return Kt(e) ? e : oa(
    e,
    !1,
    ef,
    af,
    $o
  );
}
function df(e) {
  return oa(
    e,
    !1,
    nf,
    of,
    Wo
  );
}
function Vo(e) {
  return oa(
    e,
    !0,
    tf,
    lf,
    Ho
  );
}
function oa(e, t, n, r, s) {
  if (!ie(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = s.get(e);
  if (a)
    return a;
  const i = uf(e);
  if (i === 0)
    return e;
  const o = new Proxy(
    e,
    i === 2 ? r : n
  );
  return s.set(e, o), o;
}
function fn(e) {
  return Kt(e) ? fn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Kt(e) {
  return !!(e && e.__v_isReadonly);
}
function Ye(e) {
  return !!(e && e.__v_isShallow);
}
function la(e) {
  return e ? !!e.__v_raw : !1;
}
function ee(e) {
  const t = e && e.__v_raw;
  return t ? ee(t) : e;
}
function mf(e) {
  return !te(e, "__v_skip") && Object.isExtensible(e) && Ao(e, "__v_skip", !0), e;
}
const Se = (e) => ie(e) ? ia(e) : e, bs = (e) => ie(e) ? Vo(e) : e;
function Te(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function ar(e) {
  return Yo(e, !1);
}
function pf(e) {
  return Yo(e, !0);
}
function Yo(e, t) {
  return Te(e) ? e : new hf(e, t);
}
class hf {
  constructor(t, n) {
    this.dep = new kr(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : ee(t), this._value = n ? t : Se(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || Ye(t) || Kt(t);
    t = r ? t : ee(t), Me(t, n) && (this._rawValue = t, this._value = r ? t : Se(t), this.dep.trigger());
  }
}
function gf(e) {
  return Te(e) ? e.value : e;
}
const _f = {
  get: (e, t, n) => t === "__v_raw" ? e : gf(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return Te(s) && !Te(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Bo(e) {
  return fn(e) ? e : new Proxy(e, _f);
}
class bf {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new kr(), { get: r, set: s } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = r, this._set = s;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function yf(e) {
  return new bf(e);
}
class vf {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new kr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Fn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    re !== this)
      return Po(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return ko(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Ef(e, t, n = !1) {
  let r, s;
  return G(e) ? r = e : (r = e.get, s = e.set), new vf(r, s, n);
}
const er = {}, dr = /* @__PURE__ */ new WeakMap();
let Ht;
function Tf(e, t = !1, n = Ht) {
  if (n) {
    let r = dr.get(n);
    r || dr.set(n, r = []), r.push(e);
  }
}
function Of(e, t, n = Q) {
  const { immediate: r, deep: s, once: a, scheduler: i, augmentJob: o, call: l } = n, f = (y) => s ? y : Ye(y) || s === !1 || s === 0 ? pt(y, 1) : pt(y);
  let u, m, _, E, C = !1, S = !1;
  if (Te(e) ? (m = () => e.value, C = Ye(e)) : fn(e) ? (m = () => f(e), C = !0) : z(e) ? (S = !0, C = e.some((y) => fn(y) || Ye(y)), m = () => e.map((y) => {
    if (Te(y))
      return y.value;
    if (fn(y))
      return f(y);
    if (G(y))
      return l ? l(y, 2) : y();
  })) : G(e) ? t ? m = l ? () => l(e, 2) : e : m = () => {
    if (_) {
      Pt();
      try {
        _();
      } finally {
        wt();
      }
    }
    const y = Ht;
    Ht = u;
    try {
      return l ? l(e, 3, [E]) : e(E);
    } finally {
      Ht = y;
    }
  } : m = at, t && s) {
    const y = m, L = s === !0 ? 1 / 0 : s;
    m = () => pt(y(), L);
  }
  const k = Kc(), T = () => {
    u.stop(), k && k.active && Qs(k.effects, u);
  };
  if (a && t) {
    const y = t;
    t = (...L) => {
      y(...L), T();
    };
  }
  let N = S ? new Array(e.length).fill(er) : er;
  const b = (y) => {
    if (!(!(u.flags & 1) || !u.dirty && !y))
      if (t) {
        const L = u.run();
        if (s || C || (S ? L.some((I, U) => Me(I, N[U])) : Me(L, N))) {
          _ && _();
          const I = Ht;
          Ht = u;
          try {
            const U = [
              L,
              // pass undefined as the old value when it's changed for the first time
              N === er ? void 0 : S && N[0] === er ? [] : N,
              E
            ];
            l ? l(t, 3, U) : (
              // @ts-expect-error
              t(...U)
            ), N = L;
          } finally {
            Ht = I;
          }
        }
      } else
        u.run();
  };
  return o && o(b), u = new Io(m), u.scheduler = i ? () => i(b, !1) : b, E = (y) => Tf(y, !1, u), _ = u.onStop = () => {
    const y = dr.get(u);
    if (y) {
      if (l)
        l(y, 4);
      else
        for (const L of y) L();
      dr.delete(u);
    }
  }, t ? r ? b(!0) : N = u.run() : i ? i(b.bind(null, !0), !0) : u.run(), T.pause = u.pause.bind(u), T.resume = u.resume.bind(u), T.stop = T, T;
}
function pt(e, t = 1 / 0, n) {
  if (t <= 0 || !ie(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Te(e))
    pt(e.value, t, n);
  else if (z(e))
    for (let r = 0; r < e.length; r++)
      pt(e[r], t, n);
  else if (vo(e) || cn(e))
    e.forEach((r) => {
      pt(r, t, n);
    });
  else if (Oo(e)) {
    for (const r in e)
      pt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && pt(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Bn(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    Kn(s, t, n);
  }
}
function it(e, t, n, r) {
  if (G(e)) {
    const s = Bn(e, t, n, r);
    return s && Eo(s) && s.catch((a) => {
      Kn(a, t, n);
    }), s;
  }
  if (z(e)) {
    const s = [];
    for (let a = 0; a < e.length; a++)
      s.push(it(e[a], t, n, r));
    return s;
  }
}
function Kn(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Q;
  if (t) {
    let o = t.parent;
    const l = t.proxy, f = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const u = o.ec;
      if (u) {
        for (let m = 0; m < u.length; m++)
          if (u[m](e, l, f) === !1)
            return;
      }
      o = o.parent;
    }
    if (a) {
      Pt(), Bn(a, null, 10, [
        e,
        l,
        f
      ]), wt();
      return;
    }
  }
  Af(e, n, s, r, i);
}
function Af(e, t, n, r = !0, s = !1) {
  if (s)
    throw e;
  console.error(e);
}
const we = [];
let et = -1;
const un = [];
let At = null, sn = 0;
const Ko = /* @__PURE__ */ Promise.resolve();
let mr = null;
function Sf(e) {
  const t = mr || Ko;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Nf(e) {
  let t = et + 1, n = we.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = we[r], a = jn(s);
    a < e || a === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function ca(e) {
  if (!(e.flags & 1)) {
    const t = jn(e), n = we[we.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= jn(n) ? we.push(e) : we.splice(Nf(t), 0, e), e.flags |= 1, zo();
  }
}
function zo() {
  mr || (mr = Ko.then(Xo));
}
function Cf(e) {
  z(e) ? un.push(...e) : At && e.id === -1 ? At.splice(sn + 1, 0, e) : e.flags & 1 || (un.push(e), e.flags |= 1), zo();
}
function Ha(e, t, n = et + 1) {
  for (; n < we.length; n++) {
    const r = we[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      we.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Go(e) {
  if (un.length) {
    const t = [...new Set(un)].sort(
      (n, r) => jn(n) - jn(r)
    );
    if (un.length = 0, At) {
      At.push(...t);
      return;
    }
    for (At = t, sn = 0; sn < At.length; sn++) {
      const n = At[sn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    At = null, sn = 0;
  }
}
const jn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Xo(e) {
  try {
    for (et = 0; et < we.length; et++) {
      const t = we[et];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Bn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; et < we.length; et++) {
      const t = we[et];
      t && (t.flags &= -2);
    }
    et = -1, we.length = 0, Go(), mr = null, (we.length || un.length) && Xo();
  }
}
let De = null, qo = null;
function pr(e) {
  const t = De;
  return De = e, qo = e && e.type.__scopeId || null, t;
}
function Lf(e, t = De, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && Ja(-1);
    const a = pr(t);
    let i;
    try {
      i = e(...s);
    } finally {
      pr(a), r._d && Ja(1);
    }
    return i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Hg(e, t) {
  if (De === null)
    return e;
  const n = jr(De), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [a, i, o, l = Q] = t[s];
    a && (G(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && pt(i), r.push({
      dir: a,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: o,
      modifiers: l
    }));
  }
  return e;
}
function Ut(e, t, n, r) {
  const s = e.dirs, a = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const o = s[i];
    a && (o.oldValue = a[i].value);
    let l = o.dir[r];
    l && (Pt(), it(l, n, 8, [
      e.el,
      o,
      e,
      t
    ]), wt());
  }
}
const If = Symbol("_vte"), xf = (e) => e.__isTeleport;
function fa(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, fa(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function zn(e, t) {
  return G(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ge({ name: e.name }, t, { setup: e })
  ) : e;
}
function ua(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function hr(e, t, n, r, s = !1) {
  if (z(e)) {
    e.forEach(
      (C, S) => hr(
        C,
        t && (z(t) ? t[S] : t),
        n,
        r,
        s
      )
    );
    return;
  }
  if (Pn(r) && !s) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && hr(e, t, n, r.component.subTree);
    return;
  }
  const a = r.shapeFlag & 4 ? jr(r.component) : r.el, i = s ? null : a, { i: o, r: l } = e, f = t && t.r, u = o.refs === Q ? o.refs = {} : o.refs, m = o.setupState, _ = ee(m), E = m === Q ? () => !1 : (C) => te(_, C);
  if (f != null && f !== l && (ue(f) ? (u[f] = null, E(f) && (m[f] = null)) : Te(f) && (f.value = null)), G(l))
    Bn(l, o, 12, [i, u]);
  else {
    const C = ue(l), S = Te(l);
    if (C || S) {
      const k = () => {
        if (e.f) {
          const T = C ? E(l) ? m[l] : u[l] : l.value;
          s ? z(T) && Qs(T, a) : z(T) ? T.includes(a) || T.push(a) : C ? (u[l] = [a], E(l) && (m[l] = u[l])) : (l.value = [a], e.k && (u[e.k] = l.value));
        } else C ? (u[l] = i, E(l) && (m[l] = i)) : S && (l.value = i, e.k && (u[e.k] = i));
      };
      i ? (k.id = -1, Ue(k, n)) : k();
    }
  }
}
const Va = (e) => e.nodeType === 8;
Rr().requestIdleCallback;
Rr().cancelIdleCallback;
function Pf(e, t) {
  if (Va(e) && e.data === "[") {
    let n = 1, r = e.nextSibling;
    for (; r; ) {
      if (r.nodeType === 1) {
        if (t(r) === !1)
          break;
      } else if (Va(r))
        if (r.data === "]") {
          if (--n === 0) break;
        } else r.data === "[" && n++;
      r = r.nextSibling;
    }
  } else
    t(e);
}
const Pn = (e) => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function wf(e) {
  G(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: r,
    delay: s = 200,
    hydrate: a,
    timeout: i,
    // undefined = never times out
    suspensible: o = !0,
    onError: l
  } = e;
  let f = null, u, m = 0;
  const _ = () => (m++, f = null, E()), E = () => {
    let C;
    return f || (C = f = t().catch((S) => {
      if (S = S instanceof Error ? S : new Error(String(S)), l)
        return new Promise((k, T) => {
          l(S, () => k(_()), () => T(S), m + 1);
        });
      throw S;
    }).then((S) => C !== f && f ? f : (S && (S.__esModule || S[Symbol.toStringTag] === "Module") && (S = S.default), u = S, S)));
  };
  return /* @__PURE__ */ zn({
    name: "AsyncComponentWrapper",
    __asyncLoader: E,
    __asyncHydrate(C, S, k) {
      const T = a ? () => {
        const N = a(
          k,
          (b) => Pf(C, b)
        );
        N && (S.bum || (S.bum = [])).push(N);
      } : k;
      u ? T() : E().then(() => !S.isUnmounted && T());
    },
    get __asyncResolved() {
      return u;
    },
    setup() {
      const C = be;
      if (ua(C), u)
        return () => es(u, C);
      const S = (b) => {
        f = null, Kn(
          b,
          C,
          13,
          !r
        );
      };
      if (o && C.suspense || hn)
        return E().then((b) => () => es(b, C)).catch((b) => (S(b), () => r ? pe(r, {
          error: b
        }) : null));
      const k = ar(!1), T = ar(), N = ar(!!s);
      return s && setTimeout(() => {
        N.value = !1;
      }, s), i != null && setTimeout(() => {
        if (!k.value && !T.value) {
          const b = new Error(
            `Async component timed out after ${i}ms.`
          );
          S(b), T.value = b;
        }
      }, i), E().then(() => {
        k.value = !0, C.parent && da(C.parent.vnode) && C.parent.update();
      }).catch((b) => {
        S(b), T.value = b;
      }), () => {
        if (k.value && u)
          return es(u, C);
        if (T.value && r)
          return pe(r, {
            error: T.value
          });
        if (n && !N.value)
          return pe(n);
      };
    }
  });
}
function es(e, t) {
  const { ref: n, props: r, children: s, ce: a } = t.vnode, i = pe(e, r, s);
  return i.ref = n, i.ce = a, delete t.vnode.ce, i;
}
const da = (e) => e.type.__isKeepAlive;
function Rf(e, t) {
  Jo(e, "a", t);
}
function kf(e, t) {
  Jo(e, "da", t);
}
function Jo(e, t, n = be) {
  const r = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Dr(t, r, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      da(s.parent.vnode) && Mf(r, t, n, s), s = s.parent;
  }
}
function Mf(e, t, n, r) {
  const s = Dr(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  ma(() => {
    Qs(r[t], s);
  }, n);
}
function Dr(e, t, n = be, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...i) => {
      Pt();
      const o = Xn(n), l = it(t, n, e, i);
      return o(), wt(), l;
    });
    return r ? s.unshift(a) : s.push(a), a;
  }
}
const yt = (e) => (t, n = be) => {
  (!hn || e === "sp") && Dr(e, (...r) => t(...r), n);
}, Df = yt("bm"), Qo = yt("m"), Ff = yt(
  "bu"
), Uf = yt("u"), jf = yt(
  "bum"
), ma = yt("um"), $f = yt(
  "sp"
), Wf = yt("rtg"), Hf = yt("rtc");
function Vf(e, t = be) {
  Dr("ec", e, t);
}
const Zo = "components";
function Vg(e, t) {
  return tl(Zo, e, !0, t) || e;
}
const el = Symbol.for("v-ndc");
function Yg(e) {
  return ue(e) ? tl(Zo, e, !1) || e : e || el;
}
function tl(e, t, n = !0, r = !1) {
  const s = De || be;
  if (s) {
    const a = s.type;
    {
      const o = Ru(
        a,
        !1
      );
      if (o && (o === t || o === $e(t) || o === wr($e(t))))
        return a;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ya(s[e] || a[e], t) || // global registration
      Ya(s.appContext[e], t)
    );
    return !i && r ? a : i;
  }
}
function Ya(e, t) {
  return e && (e[t] || e[$e(t)] || e[wr($e(t))]);
}
function Bg(e, t, n, r) {
  let s;
  const a = n, i = z(e);
  if (i || ue(e)) {
    const o = i && fn(e);
    let l = !1;
    o && (l = !Ye(e), e = Mr(e)), s = new Array(e.length);
    for (let f = 0, u = e.length; f < u; f++)
      s[f] = t(
        l ? Se(e[f]) : e[f],
        f,
        void 0,
        a
      );
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let o = 0; o < e; o++)
      s[o] = t(o + 1, o, void 0, a);
  } else if (ie(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (o, l) => t(o, l, void 0, a)
      );
    else {
      const o = Object.keys(e);
      s = new Array(o.length);
      for (let l = 0, f = o.length; l < f; l++) {
        const u = o[l];
        s[l] = t(e[u], u, l, a);
      }
    }
  else
    s = [];
  return s;
}
const ys = (e) => e ? Tl(e) ? jr(e) : ys(e.parent) : null, wn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ge(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ys(e.parent),
    $root: (e) => ys(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => pa(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ca(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Sf.bind(e.proxy)),
    $watch: (e) => du.bind(e)
  })
), ts = (e, t) => e !== Q && !e.__isScriptSetup && te(e, t), Yf = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: a, accessCache: i, type: o, appContext: l } = e;
    let f;
    if (t[0] !== "$") {
      const E = i[t];
      if (E !== void 0)
        switch (E) {
          case 1:
            return r[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return a[t];
        }
      else {
        if (ts(r, t))
          return i[t] = 1, r[t];
        if (s !== Q && te(s, t))
          return i[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && te(f, t)
        )
          return i[t] = 3, a[t];
        if (n !== Q && te(n, t))
          return i[t] = 4, n[t];
        vs && (i[t] = 0);
      }
    }
    const u = wn[t];
    let m, _;
    if (u)
      return t === "$attrs" && Ae(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (m = o.__cssModules) && (m = m[t])
    )
      return m;
    if (n !== Q && te(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      _ = l.config.globalProperties, te(_, t)
    )
      return _[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: a } = e;
    return ts(s, t) ? (s[t] = n, !0) : r !== Q && te(r, t) ? (r[t] = n, !0) : te(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: a }
  }, i) {
    let o;
    return !!n[i] || e !== Q && te(e, i) || ts(t, i) || (o = a[0]) && te(o, i) || te(r, i) || te(wn, i) || te(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : te(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function gr(e) {
  return z(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Kg(e, t) {
  return !e || !t ? e || t : z(e) && z(t) ? e.concat(t) : ge({}, gr(e), gr(t));
}
let vs = !0;
function Bf(e) {
  const t = pa(e), n = e.proxy, r = e.ctx;
  vs = !1, t.beforeCreate && Ba(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: a,
    methods: i,
    watch: o,
    provide: l,
    inject: f,
    // lifecycle
    created: u,
    beforeMount: m,
    mounted: _,
    beforeUpdate: E,
    updated: C,
    activated: S,
    deactivated: k,
    beforeDestroy: T,
    beforeUnmount: N,
    destroyed: b,
    unmounted: y,
    render: L,
    renderTracked: I,
    renderTriggered: U,
    errorCaptured: W,
    serverPrefetch: $,
    // public API
    expose: ae,
    inheritAttrs: ve,
    // assets
    components: X,
    directives: de,
    filters: Mt
  } = t;
  if (f && Kf(f, r, null), i)
    for (const ne in i) {
      const Z = i[ne];
      G(Z) && (r[ne] = Z.bind(n));
    }
  if (s) {
    const ne = s.call(n, n);
    ie(ne) && (e.data = ia(ne));
  }
  if (vs = !0, a)
    for (const ne in a) {
      const Z = a[ne], Ke = G(Z) ? Z.bind(n, n) : G(Z.get) ? Z.get.bind(n, n) : at, Et = !G(Z) && G(Z.set) ? Z.set.bind(n) : at, Ee = He({
        get: Ke,
        set: Et
      });
      Object.defineProperty(r, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => Ee.value,
        set: (Oe) => Ee.value = Oe
      });
    }
  if (o)
    for (const ne in o)
      nl(o[ne], r, n, ne);
  if (l) {
    const ne = G(l) ? l.call(n) : l;
    Reflect.ownKeys(ne).forEach((Z) => {
      Qf(Z, ne[Z]);
    });
  }
  u && Ba(u, e, "c");
  function me(ne, Z) {
    z(Z) ? Z.forEach((Ke) => ne(Ke.bind(n))) : Z && ne(Z.bind(n));
  }
  if (me(Df, m), me(Qo, _), me(Ff, E), me(Uf, C), me(Rf, S), me(kf, k), me(Vf, W), me(Hf, I), me(Wf, U), me(jf, N), me(ma, y), me($f, $), z(ae))
    if (ae.length) {
      const ne = e.exposed || (e.exposed = {});
      ae.forEach((Z) => {
        Object.defineProperty(ne, Z, {
          get: () => n[Z],
          set: (Ke) => n[Z] = Ke
        });
      });
    } else e.exposed || (e.exposed = {});
  L && e.render === at && (e.render = L), ve != null && (e.inheritAttrs = ve), X && (e.components = X), de && (e.directives = de), $ && ua(e);
}
function Kf(e, t, n = at) {
  z(e) && (e = Es(e));
  for (const r in e) {
    const s = e[r];
    let a;
    ie(s) ? "default" in s ? a = Rn(
      s.from || r,
      s.default,
      !0
    ) : a = Rn(s.from || r) : a = Rn(s), Te(a) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (i) => a.value = i
    }) : t[r] = a;
  }
}
function Ba(e, t, n) {
  it(
    z(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function nl(e, t, n, r) {
  let s = r.includes(".") ? hl(n, r) : () => n[r];
  if (ue(e)) {
    const a = t[e];
    G(a) && Bt(s, a);
  } else if (G(e))
    Bt(s, e.bind(n));
  else if (ie(e))
    if (z(e))
      e.forEach((a) => nl(a, t, n, r));
    else {
      const a = G(e.handler) ? e.handler.bind(n) : t[e.handler];
      G(a) && Bt(s, a, e);
    }
}
function pa(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: a,
    config: { optionMergeStrategies: i }
  } = e.appContext, o = a.get(t);
  let l;
  return o ? l = o : !s.length && !n && !r ? l = t : (l = {}, s.length && s.forEach(
    (f) => _r(l, f, i, !0)
  ), _r(l, t, i)), ie(t) && a.set(t, l), l;
}
function _r(e, t, n, r = !1) {
  const { mixins: s, extends: a } = t;
  a && _r(e, a, n, !0), s && s.forEach(
    (i) => _r(e, i, n, !0)
  );
  for (const i in t)
    if (!(r && i === "expose")) {
      const o = zf[i] || n && n[i];
      e[i] = o ? o(e[i], t[i]) : t[i];
    }
  return e;
}
const zf = {
  data: Ka,
  props: za,
  emits: za,
  // objects
  methods: Nn,
  computed: Nn,
  // lifecycle
  beforeCreate: Ie,
  created: Ie,
  beforeMount: Ie,
  mounted: Ie,
  beforeUpdate: Ie,
  updated: Ie,
  beforeDestroy: Ie,
  beforeUnmount: Ie,
  destroyed: Ie,
  unmounted: Ie,
  activated: Ie,
  deactivated: Ie,
  errorCaptured: Ie,
  serverPrefetch: Ie,
  // assets
  components: Nn,
  directives: Nn,
  // watch
  watch: Xf,
  // provide / inject
  provide: Ka,
  inject: Gf
};
function Ka(e, t) {
  return t ? e ? function() {
    return ge(
      G(e) ? e.call(this, this) : e,
      G(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Gf(e, t) {
  return Nn(Es(e), Es(t));
}
function Es(e) {
  if (z(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ie(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Nn(e, t) {
  return e ? ge(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function za(e, t) {
  return e ? z(e) && z(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ge(
    /* @__PURE__ */ Object.create(null),
    gr(e),
    gr(t ?? {})
  ) : t;
}
function Xf(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ge(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Ie(e[r], t[r]);
  return n;
}
function rl() {
  return {
    app: null,
    config: {
      isNativeTag: wc,
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
let qf = 0;
function Jf(e, t) {
  return function(r, s = null) {
    G(r) || (r = ge({}, r)), s != null && !ie(s) && (s = null);
    const a = rl(), i = /* @__PURE__ */ new WeakSet(), o = [];
    let l = !1;
    const f = a.app = {
      _uid: qf++,
      _component: r,
      _props: s,
      _container: null,
      _context: a,
      _instance: null,
      version: Mu,
      get config() {
        return a.config;
      },
      set config(u) {
      },
      use(u, ...m) {
        return i.has(u) || (u && G(u.install) ? (i.add(u), u.install(f, ...m)) : G(u) && (i.add(u), u(f, ...m))), f;
      },
      mixin(u) {
        return a.mixins.includes(u) || a.mixins.push(u), f;
      },
      component(u, m) {
        return m ? (a.components[u] = m, f) : a.components[u];
      },
      directive(u, m) {
        return m ? (a.directives[u] = m, f) : a.directives[u];
      },
      mount(u, m, _) {
        if (!l) {
          const E = f._ceVNode || pe(r, s);
          return E.appContext = a, _ === !0 ? _ = "svg" : _ === !1 && (_ = void 0), m && t ? t(E, u) : e(E, u, _), l = !0, f._container = u, u.__vue_app__ = f, jr(E.component);
        }
      },
      onUnmount(u) {
        o.push(u);
      },
      unmount() {
        l && (it(
          o,
          f._instance,
          16
        ), e(null, f._container), delete f._container.__vue_app__);
      },
      provide(u, m) {
        return a.provides[u] = m, f;
      },
      runWithContext(u) {
        const m = dn;
        dn = f;
        try {
          return u();
        } finally {
          dn = m;
        }
      }
    };
    return f;
  };
}
let dn = null;
function Qf(e, t) {
  if (be) {
    let n = be.provides;
    const r = be.parent && be.parent.provides;
    r === n && (n = be.provides = Object.create(r)), n[e] = t;
  }
}
function Rn(e, t, n = !1) {
  const r = be || De;
  if (r || dn) {
    const s = dn ? dn._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && G(t) ? t.call(r && r.proxy) : t;
  }
}
const sl = {}, al = () => Object.create(sl), il = (e) => Object.getPrototypeOf(e) === sl;
function Zf(e, t, n, r = !1) {
  const s = {}, a = al();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ol(e, t, s, a);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  n ? e.props = r ? s : df(s) : e.type.props ? e.props = s : e.props = a, e.attrs = a;
}
function eu(e, t, n, r) {
  const {
    props: s,
    attrs: a,
    vnode: { patchFlag: i }
  } = e, o = ee(s), [l] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let m = 0; m < u.length; m++) {
        let _ = u[m];
        if (Fr(e.emitsOptions, _))
          continue;
        const E = t[_];
        if (l)
          if (te(a, _))
            E !== a[_] && (a[_] = E, f = !0);
          else {
            const C = $e(_);
            s[C] = Ts(
              l,
              o,
              C,
              E,
              e,
              !1
            );
          }
        else
          E !== a[_] && (a[_] = E, f = !0);
      }
    }
  } else {
    ol(e, t, s, a) && (f = !0);
    let u;
    for (const m in o)
      (!t || // for camelCase
      !te(t, m) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = xt(m)) === m || !te(t, u))) && (l ? n && // for camelCase
      (n[m] !== void 0 || // for kebab-case
      n[u] !== void 0) && (s[m] = Ts(
        l,
        o,
        m,
        void 0,
        e,
        !0
      )) : delete s[m]);
    if (a !== o)
      for (const m in a)
        (!t || !te(t, m)) && (delete a[m], f = !0);
  }
  f && mt(e.attrs, "set", "");
}
function ol(e, t, n, r) {
  const [s, a] = e.propsOptions;
  let i = !1, o;
  if (t)
    for (let l in t) {
      if (Ln(l))
        continue;
      const f = t[l];
      let u;
      s && te(s, u = $e(l)) ? !a || !a.includes(u) ? n[u] = f : (o || (o = {}))[u] = f : Fr(e.emitsOptions, l) || (!(l in r) || f !== r[l]) && (r[l] = f, i = !0);
    }
  if (a) {
    const l = ee(n), f = o || Q;
    for (let u = 0; u < a.length; u++) {
      const m = a[u];
      n[m] = Ts(
        s,
        l,
        m,
        f[m],
        e,
        !te(f, m)
      );
    }
  }
  return i;
}
function Ts(e, t, n, r, s, a) {
  const i = e[n];
  if (i != null) {
    const o = te(i, "default");
    if (o && r === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && G(l)) {
        const { propsDefaults: f } = s;
        if (n in f)
          r = f[n];
        else {
          const u = Xn(s);
          r = f[n] = l.call(
            null,
            t
          ), u();
        }
      } else
        r = l;
      s.ce && s.ce._setProp(n, r);
    }
    i[
      0
      /* shouldCast */
    ] && (a && !o ? r = !1 : i[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === xt(n)) && (r = !0));
  }
  return r;
}
const tu = /* @__PURE__ */ new WeakMap();
function ll(e, t, n = !1) {
  const r = n ? tu : t.propsCache, s = r.get(e);
  if (s)
    return s;
  const a = e.props, i = {}, o = [];
  let l = !1;
  if (!G(e)) {
    const u = (m) => {
      l = !0;
      const [_, E] = ll(m, t, !0);
      ge(i, _), E && o.push(...E);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!a && !l)
    return ie(e) && r.set(e, ln), ln;
  if (z(a))
    for (let u = 0; u < a.length; u++) {
      const m = $e(a[u]);
      Ga(m) && (i[m] = Q);
    }
  else if (a)
    for (const u in a) {
      const m = $e(u);
      if (Ga(m)) {
        const _ = a[u], E = i[m] = z(_) || G(_) ? { type: _ } : ge({}, _), C = E.type;
        let S = !1, k = !0;
        if (z(C))
          for (let T = 0; T < C.length; ++T) {
            const N = C[T], b = G(N) && N.name;
            if (b === "Boolean") {
              S = !0;
              break;
            } else b === "String" && (k = !1);
          }
        else
          S = G(C) && C.name === "Boolean";
        E[
          0
          /* shouldCast */
        ] = S, E[
          1
          /* shouldCastTrue */
        ] = k, (S || te(E, "default")) && o.push(m);
      }
    }
  const f = [i, o];
  return ie(e) && r.set(e, f), f;
}
function Ga(e) {
  return e[0] !== "$" && !Ln(e);
}
const cl = (e) => e[0] === "_" || e === "$stable", ha = (e) => z(e) ? e.map(tt) : [tt(e)], nu = (e, t, n) => {
  if (t._n)
    return t;
  const r = Lf((...s) => ha(t(...s)), n);
  return r._c = !1, r;
}, fl = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (cl(s)) continue;
    const a = e[s];
    if (G(a))
      t[s] = nu(s, a, r);
    else if (a != null) {
      const i = ha(a);
      t[s] = () => i;
    }
  }
}, ul = (e, t) => {
  const n = ha(t);
  e.slots.default = () => n;
}, dl = (e, t, n) => {
  for (const r in t)
    (n || r !== "_") && (e[r] = t[r]);
}, ru = (e, t, n) => {
  const r = e.slots = al();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (dl(r, t, n), n && Ao(r, "_", s, !0)) : fl(t, r);
  } else t && ul(e, t);
}, su = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let a = !0, i = Q;
  if (r.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? a = !1 : dl(s, t, n) : (a = !t.$stable, fl(t, s)), i = t;
  } else t && (ul(e, t), i = { default: 1 });
  if (a)
    for (const o in s)
      !cl(o) && i[o] == null && delete s[o];
}, Ue = bu;
function au(e) {
  return iu(e);
}
function iu(e, t) {
  const n = Rr();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: s,
    patchProp: a,
    createElement: i,
    createText: o,
    createComment: l,
    setText: f,
    setElementText: u,
    parentNode: m,
    nextSibling: _,
    setScopeId: E = at,
    insertStaticContent: C
  } = e, S = (p, g, O, M = null, x = null, w = null, j = void 0, c = null, d = !!g.dynamicChildren) => {
    if (p === g)
      return;
    p && !On(p, g) && (M = Dt(p), Oe(p, x, w, !0), p = null), g.patchFlag === -2 && (d = !1, g.dynamicChildren = null);
    const { type: h, ref: P, shapeFlag: D } = g;
    switch (h) {
      case Gn:
        k(p, g, O, M);
        break;
      case zt:
        T(p, g, O, M);
        break;
      case ir:
        p == null && N(g, O, M, j);
        break;
      case Ge:
        X(
          p,
          g,
          O,
          M,
          x,
          w,
          j,
          c,
          d
        );
        break;
      default:
        D & 1 ? L(
          p,
          g,
          O,
          M,
          x,
          w,
          j,
          c,
          d
        ) : D & 6 ? de(
          p,
          g,
          O,
          M,
          x,
          w,
          j,
          c,
          d
        ) : (D & 64 || D & 128) && h.process(
          p,
          g,
          O,
          M,
          x,
          w,
          j,
          c,
          d,
          Je
        );
    }
    P != null && x && hr(P, p && p.ref, w, g || p, !g);
  }, k = (p, g, O, M) => {
    if (p == null)
      r(
        g.el = o(g.children),
        O,
        M
      );
    else {
      const x = g.el = p.el;
      g.children !== p.children && f(x, g.children);
    }
  }, T = (p, g, O, M) => {
    p == null ? r(
      g.el = l(g.children || ""),
      O,
      M
    ) : g.el = p.el;
  }, N = (p, g, O, M) => {
    [p.el, p.anchor] = C(
      p.children,
      g,
      O,
      M,
      p.el,
      p.anchor
    );
  }, b = ({ el: p, anchor: g }, O, M) => {
    let x;
    for (; p && p !== g; )
      x = _(p), r(p, O, M), p = x;
    r(g, O, M);
  }, y = ({ el: p, anchor: g }) => {
    let O;
    for (; p && p !== g; )
      O = _(p), s(p), p = O;
    s(g);
  }, L = (p, g, O, M, x, w, j, c, d) => {
    g.type === "svg" ? j = "svg" : g.type === "math" && (j = "mathml"), p == null ? I(
      g,
      O,
      M,
      x,
      w,
      j,
      c,
      d
    ) : $(
      p,
      g,
      x,
      w,
      j,
      c,
      d
    );
  }, I = (p, g, O, M, x, w, j, c) => {
    let d, h;
    const { props: P, shapeFlag: D, transition: R, dirs: v } = p;
    if (d = p.el = i(
      p.type,
      w,
      P && P.is,
      P
    ), D & 8 ? u(d, p.children) : D & 16 && W(
      p.children,
      d,
      null,
      M,
      x,
      ns(p, w),
      j,
      c
    ), v && Ut(p, null, M, "created"), U(d, p, p.scopeId, j, M), P) {
      for (const Y in P)
        Y !== "value" && !Ln(Y) && a(d, Y, null, P[Y], w, M);
      "value" in P && a(d, "value", null, P.value, w), (h = P.onVnodeBeforeMount) && Ze(h, M, p);
    }
    v && Ut(p, null, M, "beforeMount");
    const A = ou(x, R);
    A && R.beforeEnter(d), r(d, g, O), ((h = P && P.onVnodeMounted) || A || v) && Ue(() => {
      h && Ze(h, M, p), A && R.enter(d), v && Ut(p, null, M, "mounted");
    }, x);
  }, U = (p, g, O, M, x) => {
    if (O && E(p, O), M)
      for (let w = 0; w < M.length; w++)
        E(p, M[w]);
    if (x) {
      let w = x.subTree;
      if (g === w || bl(w.type) && (w.ssContent === g || w.ssFallback === g)) {
        const j = x.vnode;
        U(
          p,
          j,
          j.scopeId,
          j.slotScopeIds,
          x.parent
        );
      }
    }
  }, W = (p, g, O, M, x, w, j, c, d = 0) => {
    for (let h = d; h < p.length; h++) {
      const P = p[h] = c ? St(p[h]) : tt(p[h]);
      S(
        null,
        P,
        g,
        O,
        M,
        x,
        w,
        j,
        c
      );
    }
  }, $ = (p, g, O, M, x, w, j) => {
    const c = g.el = p.el;
    let { patchFlag: d, dynamicChildren: h, dirs: P } = g;
    d |= p.patchFlag & 16;
    const D = p.props || Q, R = g.props || Q;
    let v;
    if (O && jt(O, !1), (v = R.onVnodeBeforeUpdate) && Ze(v, O, g, p), P && Ut(g, p, O, "beforeUpdate"), O && jt(O, !0), (D.innerHTML && R.innerHTML == null || D.textContent && R.textContent == null) && u(c, ""), h ? ae(
      p.dynamicChildren,
      h,
      c,
      O,
      M,
      ns(g, x),
      w
    ) : j || Z(
      p,
      g,
      c,
      null,
      O,
      M,
      ns(g, x),
      w,
      !1
    ), d > 0) {
      if (d & 16)
        ve(c, D, R, O, x);
      else if (d & 2 && D.class !== R.class && a(c, "class", null, R.class, x), d & 4 && a(c, "style", D.style, R.style, x), d & 8) {
        const A = g.dynamicProps;
        for (let Y = 0; Y < A.length; Y++) {
          const B = A[Y], le = D[B], fe = R[B];
          (fe !== le || B === "value") && a(c, B, le, fe, x, O);
        }
      }
      d & 1 && p.children !== g.children && u(c, g.children);
    } else !j && h == null && ve(c, D, R, O, x);
    ((v = R.onVnodeUpdated) || P) && Ue(() => {
      v && Ze(v, O, g, p), P && Ut(g, p, O, "updated");
    }, M);
  }, ae = (p, g, O, M, x, w, j) => {
    for (let c = 0; c < g.length; c++) {
      const d = p[c], h = g[c], P = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        d.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (d.type === Ge || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !On(d, h) || // - In the case of a component, it could contain anything.
        d.shapeFlag & 70) ? m(d.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          O
        )
      );
      S(
        d,
        h,
        P,
        null,
        M,
        x,
        w,
        j,
        !0
      );
    }
  }, ve = (p, g, O, M, x) => {
    if (g !== O) {
      if (g !== Q)
        for (const w in g)
          !Ln(w) && !(w in O) && a(
            p,
            w,
            g[w],
            null,
            x,
            M
          );
      for (const w in O) {
        if (Ln(w)) continue;
        const j = O[w], c = g[w];
        j !== c && w !== "value" && a(p, w, c, j, x, M);
      }
      "value" in O && a(p, "value", g.value, O.value, x);
    }
  }, X = (p, g, O, M, x, w, j, c, d) => {
    const h = g.el = p ? p.el : o(""), P = g.anchor = p ? p.anchor : o("");
    let { patchFlag: D, dynamicChildren: R, slotScopeIds: v } = g;
    v && (c = c ? c.concat(v) : v), p == null ? (r(h, O, M), r(P, O, M), W(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      g.children || [],
      O,
      P,
      x,
      w,
      j,
      c,
      d
    )) : D > 0 && D & 64 && R && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren ? (ae(
      p.dynamicChildren,
      R,
      O,
      x,
      w,
      j,
      c
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (g.key != null || x && g === x.subTree) && ml(
      p,
      g,
      !0
      /* shallow */
    )) : Z(
      p,
      g,
      O,
      P,
      x,
      w,
      j,
      c,
      d
    );
  }, de = (p, g, O, M, x, w, j, c, d) => {
    g.slotScopeIds = c, p == null ? g.shapeFlag & 512 ? x.ctx.activate(
      g,
      O,
      M,
      j,
      d
    ) : Mt(
      g,
      O,
      M,
      x,
      w,
      j,
      d
    ) : qt(p, g, d);
  }, Mt = (p, g, O, M, x, w, j) => {
    const c = p.component = Lu(
      p,
      M,
      x
    );
    if (da(p) && (c.ctx.renderer = Je), Iu(c, !1, j), c.asyncDep) {
      if (x && x.registerDep(c, me, j), !p.el) {
        const d = c.subTree = pe(zt);
        T(null, d, g, O);
      }
    } else
      me(
        c,
        p,
        g,
        O,
        x,
        w,
        j
      );
  }, qt = (p, g, O) => {
    const M = g.component = p.component;
    if (gu(p, g, O))
      if (M.asyncDep && !M.asyncResolved) {
        ne(M, g, O);
        return;
      } else
        M.next = g, M.update();
    else
      g.el = p.el, M.vnode = g;
  }, me = (p, g, O, M, x, w, j) => {
    const c = () => {
      if (p.isMounted) {
        let { next: D, bu: R, u: v, parent: A, vnode: Y } = p;
        {
          const Le = pl(p);
          if (Le) {
            D && (D.el = Y.el, ne(p, D, j)), Le.asyncDep.then(() => {
              p.isUnmounted || c();
            });
            return;
          }
        }
        let B = D, le;
        jt(p, !1), D ? (D.el = Y.el, ne(p, D, j)) : D = Y, R && Xr(R), (le = D.props && D.props.onVnodeBeforeUpdate) && Ze(le, A, D, Y), jt(p, !0);
        const fe = rs(p), _e = p.subTree;
        p.subTree = fe, S(
          _e,
          fe,
          // parent may have changed if it's in a teleport
          m(_e.el),
          // anchor may have changed if it's in a fragment
          Dt(_e),
          p,
          x,
          w
        ), D.el = fe.el, B === null && _u(p, fe.el), v && Ue(v, x), (le = D.props && D.props.onVnodeUpdated) && Ue(
          () => Ze(le, A, D, Y),
          x
        );
      } else {
        let D;
        const { el: R, props: v } = g, { bm: A, m: Y, parent: B, root: le, type: fe } = p, _e = Pn(g);
        if (jt(p, !1), A && Xr(A), !_e && (D = v && v.onVnodeBeforeMount) && Ze(D, B, g), jt(p, !0), R && tn) {
          const Le = () => {
            p.subTree = rs(p), tn(
              R,
              p.subTree,
              p,
              x,
              null
            );
          };
          _e && fe.__asyncHydrate ? fe.__asyncHydrate(
            R,
            p,
            Le
          ) : Le();
        } else {
          le.ce && le.ce._injectChildStyle(fe);
          const Le = p.subTree = rs(p);
          S(
            null,
            Le,
            O,
            M,
            p,
            x,
            w
          ), g.el = Le.el;
        }
        if (Y && Ue(Y, x), !_e && (D = v && v.onVnodeMounted)) {
          const Le = g;
          Ue(
            () => Ze(D, B, Le),
            x
          );
        }
        (g.shapeFlag & 256 || B && Pn(B.vnode) && B.vnode.shapeFlag & 256) && p.a && Ue(p.a, x), p.isMounted = !0, g = O = M = null;
      }
    };
    p.scope.on();
    const d = p.effect = new Io(c);
    p.scope.off();
    const h = p.update = d.run.bind(d), P = p.job = d.runIfDirty.bind(d);
    P.i = p, P.id = p.uid, d.scheduler = () => ca(P), jt(p, !0), h();
  }, ne = (p, g, O) => {
    g.component = p;
    const M = p.vnode.props;
    p.vnode = g, p.next = null, eu(p, g.props, M, O), su(p, g.children, O), Pt(), Ha(p), wt();
  }, Z = (p, g, O, M, x, w, j, c, d = !1) => {
    const h = p && p.children, P = p ? p.shapeFlag : 0, D = g.children, { patchFlag: R, shapeFlag: v } = g;
    if (R > 0) {
      if (R & 128) {
        Et(
          h,
          D,
          O,
          M,
          x,
          w,
          j,
          c,
          d
        );
        return;
      } else if (R & 256) {
        Ke(
          h,
          D,
          O,
          M,
          x,
          w,
          j,
          c,
          d
        );
        return;
      }
    }
    v & 8 ? (P & 16 && ot(h, x, w), D !== h && u(O, D)) : P & 16 ? v & 16 ? Et(
      h,
      D,
      O,
      M,
      x,
      w,
      j,
      c,
      d
    ) : ot(h, x, w, !0) : (P & 8 && u(O, ""), v & 16 && W(
      D,
      O,
      M,
      x,
      w,
      j,
      c,
      d
    ));
  }, Ke = (p, g, O, M, x, w, j, c, d) => {
    p = p || ln, g = g || ln;
    const h = p.length, P = g.length, D = Math.min(h, P);
    let R;
    for (R = 0; R < D; R++) {
      const v = g[R] = d ? St(g[R]) : tt(g[R]);
      S(
        p[R],
        v,
        O,
        null,
        x,
        w,
        j,
        c,
        d
      );
    }
    h > P ? ot(
      p,
      x,
      w,
      !0,
      !1,
      D
    ) : W(
      g,
      O,
      M,
      x,
      w,
      j,
      c,
      d,
      D
    );
  }, Et = (p, g, O, M, x, w, j, c, d) => {
    let h = 0;
    const P = g.length;
    let D = p.length - 1, R = P - 1;
    for (; h <= D && h <= R; ) {
      const v = p[h], A = g[h] = d ? St(g[h]) : tt(g[h]);
      if (On(v, A))
        S(
          v,
          A,
          O,
          null,
          x,
          w,
          j,
          c,
          d
        );
      else
        break;
      h++;
    }
    for (; h <= D && h <= R; ) {
      const v = p[D], A = g[R] = d ? St(g[R]) : tt(g[R]);
      if (On(v, A))
        S(
          v,
          A,
          O,
          null,
          x,
          w,
          j,
          c,
          d
        );
      else
        break;
      D--, R--;
    }
    if (h > D) {
      if (h <= R) {
        const v = R + 1, A = v < P ? g[v].el : M;
        for (; h <= R; )
          S(
            null,
            g[h] = d ? St(g[h]) : tt(g[h]),
            O,
            A,
            x,
            w,
            j,
            c,
            d
          ), h++;
      }
    } else if (h > R)
      for (; h <= D; )
        Oe(p[h], x, w, !0), h++;
    else {
      const v = h, A = h, Y = /* @__PURE__ */ new Map();
      for (h = A; h <= R; h++) {
        const Fe = g[h] = d ? St(g[h]) : tt(g[h]);
        Fe.key != null && Y.set(Fe.key, h);
      }
      let B, le = 0;
      const fe = R - A + 1;
      let _e = !1, Le = 0;
      const nn = new Array(fe);
      for (h = 0; h < fe; h++) nn[h] = 0;
      for (h = v; h <= D; h++) {
        const Fe = p[h];
        if (le >= fe) {
          Oe(Fe, x, w, !0);
          continue;
        }
        let Qe;
        if (Fe.key != null)
          Qe = Y.get(Fe.key);
        else
          for (B = A; B <= R; B++)
            if (nn[B - A] === 0 && On(Fe, g[B])) {
              Qe = B;
              break;
            }
        Qe === void 0 ? Oe(Fe, x, w, !0) : (nn[Qe - A] = h + 1, Qe >= Le ? Le = Qe : _e = !0, S(
          Fe,
          g[Qe],
          O,
          null,
          x,
          w,
          j,
          c,
          d
        ), le++);
      }
      const Fa = _e ? lu(nn) : ln;
      for (B = Fa.length - 1, h = fe - 1; h >= 0; h--) {
        const Fe = A + h, Qe = g[Fe], Ua = Fe + 1 < P ? g[Fe + 1].el : M;
        nn[h] === 0 ? S(
          null,
          Qe,
          O,
          Ua,
          x,
          w,
          j,
          c,
          d
        ) : _e && (B < 0 || h !== Fa[B] ? Ee(Qe, O, Ua, 2) : B--);
      }
    }
  }, Ee = (p, g, O, M, x = null) => {
    const { el: w, type: j, transition: c, children: d, shapeFlag: h } = p;
    if (h & 6) {
      Ee(p.component.subTree, g, O, M);
      return;
    }
    if (h & 128) {
      p.suspense.move(g, O, M);
      return;
    }
    if (h & 64) {
      j.move(p, g, O, Je);
      return;
    }
    if (j === Ge) {
      r(w, g, O);
      for (let D = 0; D < d.length; D++)
        Ee(d[D], g, O, M);
      r(p.anchor, g, O);
      return;
    }
    if (j === ir) {
      b(p, g, O);
      return;
    }
    if (M !== 2 && h & 1 && c)
      if (M === 0)
        c.beforeEnter(w), r(w, g, O), Ue(() => c.enter(w), x);
      else {
        const { leave: D, delayLeave: R, afterLeave: v } = c, A = () => r(w, g, O), Y = () => {
          D(w, () => {
            A(), v && v();
          });
        };
        R ? R(w, A, Y) : Y();
      }
    else
      r(w, g, O);
  }, Oe = (p, g, O, M = !1, x = !1) => {
    const {
      type: w,
      props: j,
      ref: c,
      children: d,
      dynamicChildren: h,
      shapeFlag: P,
      patchFlag: D,
      dirs: R,
      cacheIndex: v
    } = p;
    if (D === -2 && (x = !1), c != null && hr(c, null, O, p, !0), v != null && (g.renderCache[v] = void 0), P & 256) {
      g.ctx.deactivate(p);
      return;
    }
    const A = P & 1 && R, Y = !Pn(p);
    let B;
    if (Y && (B = j && j.onVnodeBeforeUnmount) && Ze(B, g, p), P & 6)
      En(p.component, O, M);
    else {
      if (P & 128) {
        p.suspense.unmount(O, M);
        return;
      }
      A && Ut(p, null, g, "beforeUnmount"), P & 64 ? p.type.remove(
        p,
        g,
        O,
        Je,
        M
      ) : h && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !h.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (w !== Ge || D > 0 && D & 64) ? ot(
        h,
        g,
        O,
        !1,
        !0
      ) : (w === Ge && D & 384 || !x && P & 16) && ot(d, g, O), M && Jt(p);
    }
    (Y && (B = j && j.onVnodeUnmounted) || A) && Ue(() => {
      B && Ze(B, g, p), A && Ut(p, null, g, "unmounted");
    }, O);
  }, Jt = (p) => {
    const { type: g, el: O, anchor: M, transition: x } = p;
    if (g === Ge) {
      Qt(O, M);
      return;
    }
    if (g === ir) {
      y(p);
      return;
    }
    const w = () => {
      s(O), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (p.shapeFlag & 1 && x && !x.persisted) {
      const { leave: j, delayLeave: c } = x, d = () => j(O, w);
      c ? c(p.el, w, d) : d();
    } else
      w();
  }, Qt = (p, g) => {
    let O;
    for (; p !== g; )
      O = _(p), s(p), p = O;
    s(g);
  }, En = (p, g, O) => {
    const { bum: M, scope: x, job: w, subTree: j, um: c, m: d, a: h } = p;
    Xa(d), Xa(h), M && Xr(M), x.stop(), w && (w.flags |= 8, Oe(j, p, g, O)), c && Ue(c, g), Ue(() => {
      p.isUnmounted = !0;
    }, g), g && g.pendingBranch && !g.isUnmounted && p.asyncDep && !p.asyncResolved && p.suspenseId === g.pendingId && (g.deps--, g.deps === 0 && g.resolve());
  }, ot = (p, g, O, M = !1, x = !1, w = 0) => {
    for (let j = w; j < p.length; j++)
      Oe(p[j], g, O, M, x);
  }, Dt = (p) => {
    if (p.shapeFlag & 6)
      return Dt(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const g = _(p.anchor || p.el), O = g && g[If];
    return O ? _(O) : g;
  };
  let Ft = !1;
  const Zt = (p, g, O) => {
    p == null ? g._vnode && Oe(g._vnode, null, null, !0) : S(
      g._vnode || null,
      p,
      g,
      null,
      null,
      null,
      O
    ), g._vnode = p, Ft || (Ft = !0, Ha(), Go(), Ft = !1);
  }, Je = {
    p: S,
    um: Oe,
    m: Ee,
    r: Jt,
    mt: Mt,
    mc: W,
    pc: Z,
    pbc: ae,
    n: Dt,
    o: e
  };
  let en, tn;
  return {
    render: Zt,
    hydrate: en,
    createApp: Jf(Zt, en)
  };
}
function ns({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function jt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ou(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ml(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (z(r) && z(s))
    for (let a = 0; a < r.length; a++) {
      const i = r[a];
      let o = s[a];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = s[a] = St(s[a]), o.el = i.el), !n && o.patchFlag !== -2 && ml(i, o)), o.type === Gn && (o.el = i.el);
    }
}
function lu(e) {
  const t = e.slice(), n = [0];
  let r, s, a, i, o;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const f = e[r];
    if (f !== 0) {
      if (s = n[n.length - 1], e[s] < f) {
        t[r] = s, n.push(r);
        continue;
      }
      for (a = 0, i = n.length - 1; a < i; )
        o = a + i >> 1, e[n[o]] < f ? a = o + 1 : i = o;
      f < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
    }
  }
  for (a = n.length, i = n[a - 1]; a-- > 0; )
    n[a] = i, i = t[i];
  return n;
}
function pl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : pl(t);
}
function Xa(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const cu = Symbol.for("v-scx"), fu = () => Rn(cu);
function uu(e, t) {
  return ga(
    e,
    null,
    { flush: "sync" }
  );
}
function Bt(e, t, n) {
  return ga(e, t, n);
}
function ga(e, t, n = Q) {
  const { immediate: r, deep: s, flush: a, once: i } = n, o = ge({}, n), l = t && r || !t && a !== "post";
  let f;
  if (hn) {
    if (a === "sync") {
      const E = fu();
      f = E.__watcherHandles || (E.__watcherHandles = []);
    } else if (!l) {
      const E = () => {
      };
      return E.stop = at, E.resume = at, E.pause = at, E;
    }
  }
  const u = be;
  o.call = (E, C, S) => it(E, u, C, S);
  let m = !1;
  a === "post" ? o.scheduler = (E) => {
    Ue(E, u && u.suspense);
  } : a !== "sync" && (m = !0, o.scheduler = (E, C) => {
    C ? E() : ca(E);
  }), o.augmentJob = (E) => {
    t && (E.flags |= 4), m && (E.flags |= 2, u && (E.id = u.uid, E.i = u));
  };
  const _ = Of(e, t, o);
  return hn && (f ? f.push(_) : l && _()), _;
}
function du(e, t, n) {
  const r = this.proxy, s = ue(e) ? e.includes(".") ? hl(r, e) : () => r[e] : e.bind(r, r);
  let a;
  G(t) ? a = t : (a = t.handler, n = t);
  const i = Xn(this), o = ga(s, a.bind(r), n);
  return i(), o;
}
function hl(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
function zg(e, t, n = Q) {
  const r = Ur(), s = $e(t), a = xt(t), i = gl(e, s), o = yf((l, f) => {
    let u, m = Q, _;
    return uu(() => {
      const E = e[s];
      Me(u, E) && (u = E, f());
    }), {
      get() {
        return l(), n.get ? n.get(u) : u;
      },
      set(E) {
        const C = n.set ? n.set(E) : E;
        if (!Me(C, u) && !(m !== Q && Me(E, m)))
          return;
        const S = r.vnode.props;
        S && // check if parent has passed v-model
        (t in S || s in S || a in S) && (`onUpdate:${t}` in S || `onUpdate:${s}` in S || `onUpdate:${a}` in S) || (u = E, f()), r.emit(`update:${t}`, C), Me(E, C) && Me(E, m) && !Me(C, _) && f(), m = E, _ = C;
      }
    };
  });
  return o[Symbol.iterator] = () => {
    let l = 0;
    return {
      next() {
        return l < 2 ? { value: l++ ? i || Q : o, done: !1 } : { done: !0 };
      }
    };
  }, o;
}
const gl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${$e(t)}Modifiers`] || e[`${xt(t)}Modifiers`];
function mu(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Q;
  let s = n;
  const a = t.startsWith("update:"), i = a && gl(r, t.slice(7));
  i && (i.trim && (s = n.map((u) => ue(u) ? u.trim() : u)), i.number && (s = n.map(Fc)));
  let o, l = r[o = Gr(t)] || // also try camelCase event handler (#2249)
  r[o = Gr($e(t))];
  !l && a && (l = r[o = Gr(xt(t))]), l && it(
    l,
    e,
    6,
    s
  );
  const f = r[o + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[o])
      return;
    e.emitted[o] = !0, it(
      f,
      e,
      6,
      s
    );
  }
}
function _l(e, t, n = !1) {
  const r = t.emitsCache, s = r.get(e);
  if (s !== void 0)
    return s;
  const a = e.emits;
  let i = {}, o = !1;
  if (!G(e)) {
    const l = (f) => {
      const u = _l(f, t, !0);
      u && (o = !0, ge(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !a && !o ? (ie(e) && r.set(e, null), null) : (z(a) ? a.forEach((l) => i[l] = null) : ge(i, a), ie(e) && r.set(e, i), i);
}
function Fr(e, t) {
  return !e || !Ir(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), te(e, t[0].toLowerCase() + t.slice(1)) || te(e, xt(t)) || te(e, t));
}
function rs(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    propsOptions: [a],
    slots: i,
    attrs: o,
    emit: l,
    render: f,
    renderCache: u,
    props: m,
    data: _,
    setupState: E,
    ctx: C,
    inheritAttrs: S
  } = e, k = pr(e);
  let T, N;
  try {
    if (n.shapeFlag & 4) {
      const y = s || r, L = y;
      T = tt(
        f.call(
          L,
          y,
          u,
          m,
          E,
          _,
          C
        )
      ), N = o;
    } else {
      const y = t;
      T = tt(
        y.length > 1 ? y(
          m,
          { attrs: o, slots: i, emit: l }
        ) : y(
          m,
          null
        )
      ), N = t.props ? o : pu(o);
    }
  } catch (y) {
    kn.length = 0, Kn(y, e, 1), T = pe(zt);
  }
  let b = T;
  if (N && S !== !1) {
    const y = Object.keys(N), { shapeFlag: L } = b;
    y.length && L & 7 && (a && y.some(Js) && (N = hu(
      N,
      a
    )), b = pn(b, N, !1, !0));
  }
  return n.dirs && (b = pn(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && fa(b, n.transition), T = b, pr(k), T;
}
const pu = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ir(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, hu = (e, t) => {
  const n = {};
  for (const r in e)
    (!Js(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function gu(e, t, n) {
  const { props: r, children: s, component: a } = e, { props: i, children: o, patchFlag: l } = t, f = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? qa(r, i, f) : !!i;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let m = 0; m < u.length; m++) {
        const _ = u[m];
        if (i[_] !== r[_] && !Fr(f, _))
          return !0;
      }
    }
  } else
    return (s || o) && (!o || !o.$stable) ? !0 : r === i ? !1 : r ? i ? qa(r, i, f) : !0 : !!i;
  return !1;
}
function qa(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const a = r[s];
    if (t[a] !== e[a] && !Fr(n, a))
      return !0;
  }
  return !1;
}
function _u({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const bl = (e) => e.__isSuspense;
function bu(e, t) {
  t && t.pendingBranch ? z(e) ? t.effects.push(...e) : t.effects.push(e) : Cf(e);
}
const Ge = Symbol.for("v-fgt"), Gn = Symbol.for("v-txt"), zt = Symbol.for("v-cmt"), ir = Symbol.for("v-stc"), kn = [];
let je = null;
function yu(e = !1) {
  kn.push(je = e ? null : []);
}
function vu() {
  kn.pop(), je = kn[kn.length - 1] || null;
}
let $n = 1;
function Ja(e, t = !1) {
  $n += e, e < 0 && je && t && (je.hasOnce = !0);
}
function yl(e) {
  return e.dynamicChildren = $n > 0 ? je || ln : null, vu(), $n > 0 && je && je.push(e), e;
}
function Gg(e, t, n, r, s, a) {
  return yl(
    El(
      e,
      t,
      n,
      r,
      s,
      a,
      !0
    )
  );
}
function Eu(e, t, n, r, s) {
  return yl(
    pe(
      e,
      t,
      n,
      r,
      s,
      !0
    )
  );
}
function br(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function On(e, t) {
  return e.type === t.type && e.key === t.key;
}
const vl = ({ key: e }) => e ?? null, or = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ue(e) || Te(e) || G(e) ? { i: De, r: e, k: t, f: !!n } : e : null);
function El(e, t = null, n = null, r = 0, s = null, a = e === Ge ? 0 : 1, i = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && vl(t),
    ref: t && or(t),
    scopeId: qo,
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
    shapeFlag: a,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: De
  };
  return o ? (_a(l, n), a & 128 && e.normalize(l)) : n && (l.shapeFlag |= ue(n) ? 8 : 16), $n > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  je && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && je.push(l), l;
}
const pe = Tu;
function Tu(e, t = null, n = null, r = 0, s = null, a = !1) {
  if ((!e || e === el) && (e = zt), br(e)) {
    const o = pn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && _a(o, n), $n > 0 && !a && je && (o.shapeFlag & 6 ? je[je.indexOf(e)] = o : je.push(o)), o.patchFlag = -2, o;
  }
  if (ku(e) && (e = e.__vccOpts), t) {
    t = Ou(t);
    let { class: o, style: l } = t;
    o && !ue(o) && (t.class = ta(o)), ie(l) && (la(l) && !z(l) && (l = ge({}, l)), t.style = ea(l));
  }
  const i = ue(e) ? 1 : bl(e) ? 128 : xf(e) ? 64 : ie(e) ? 4 : G(e) ? 2 : 0;
  return El(
    e,
    t,
    n,
    r,
    s,
    i,
    a,
    !0
  );
}
function Ou(e) {
  return e ? la(e) || il(e) ? ge({}, e) : e : null;
}
function pn(e, t, n = !1, r = !1) {
  const { props: s, ref: a, patchFlag: i, children: o, transition: l } = e, f = t ? Su(s || {}, t) : s, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && vl(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? z(a) ? a.concat(or(t)) : [a, or(t)] : or(t)
    ) : a,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ge ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && pn(e.ssContent),
    ssFallback: e.ssFallback && pn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && r && fa(
    u,
    l.clone(u)
  ), u;
}
function Au(e = " ", t = 0) {
  return pe(Gn, null, e, t);
}
function Xg(e, t) {
  const n = pe(ir, null, e);
  return n.staticCount = t, n;
}
function qg(e = "", t = !1) {
  return t ? (yu(), Eu(zt, null, e)) : pe(zt, null, e);
}
function tt(e) {
  return e == null || typeof e == "boolean" ? pe(zt) : z(e) ? pe(
    Ge,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : br(e) ? St(e) : pe(Gn, null, String(e));
}
function St(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : pn(e);
}
function _a(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (z(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), _a(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !il(t) ? t._ctx = De : s === 3 && De && (De.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else G(t) ? (t = { default: t, _ctx: De }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Au(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Su(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = ta([t.class, r.class]));
      else if (s === "style")
        t.style = ea([t.style, r.style]);
      else if (Ir(s)) {
        const a = t[s], i = r[s];
        i && a !== i && !(z(a) && a.includes(i)) && (t[s] = a ? [].concat(a, i) : i);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function Ze(e, t, n, r = null) {
  it(e, t, 7, [
    n,
    r
  ]);
}
const Nu = rl();
let Cu = 0;
function Lu(e, t, n) {
  const r = e.type, s = (t ? t.appContext : e.appContext) || Nu, a = {
    uid: Cu++,
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
    scope: new Lo(
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
    propsOptions: ll(r, s),
    emitsOptions: _l(r, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Q,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Q,
    data: Q,
    props: Q,
    attrs: Q,
    slots: Q,
    refs: Q,
    setupState: Q,
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
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = mu.bind(null, a), e.ce && e.ce(a), a;
}
let be = null;
const Ur = () => be || De;
let yr, Os;
{
  const e = Rr(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (a) => {
      s.length > 1 ? s.forEach((i) => i(a)) : s[0](a);
    };
  };
  yr = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => be = n
  ), Os = t(
    "__VUE_SSR_SETTERS__",
    (n) => hn = n
  );
}
const Xn = (e) => {
  const t = be;
  return yr(e), e.scope.on(), () => {
    e.scope.off(), yr(t);
  };
}, Qa = () => {
  be && be.scope.off(), yr(null);
};
function Tl(e) {
  return e.vnode.shapeFlag & 4;
}
let hn = !1;
function Iu(e, t = !1, n = !1) {
  t && Os(t);
  const { props: r, children: s } = e.vnode, a = Tl(e);
  Zf(e, r, a, t), ru(e, s, n);
  const i = a ? xu(e, t) : void 0;
  return t && Os(!1), i;
}
function xu(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Yf);
  const { setup: r } = n;
  if (r) {
    Pt();
    const s = e.setupContext = r.length > 1 ? wu(e) : null, a = Xn(e), i = Bn(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), o = Eo(i);
    if (wt(), a(), (o || e.sp) && !Pn(e) && ua(e), o) {
      if (i.then(Qa, Qa), t)
        return i.then((l) => {
          Za(e, l, t);
        }).catch((l) => {
          Kn(l, e, 0);
        });
      e.asyncDep = i;
    } else
      Za(e, i, t);
  } else
    Ol(e, t);
}
function Za(e, t, n) {
  G(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ie(t) && (e.setupState = Bo(t)), Ol(e, n);
}
let ei;
function Ol(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && ei && !r.render) {
      const s = r.template || pa(e).template;
      if (s) {
        const { isCustomElement: a, compilerOptions: i } = e.appContext.config, { delimiters: o, compilerOptions: l } = r, f = ge(
          ge(
            {
              isCustomElement: a,
              delimiters: o
            },
            i
          ),
          l
        );
        r.render = ei(s, f);
      }
    }
    e.render = r.render || at;
  }
  {
    const s = Xn(e);
    Pt();
    try {
      Bf(e);
    } finally {
      wt(), s();
    }
  }
}
const Pu = {
  get(e, t) {
    return Ae(e, "get", ""), e[t];
  }
};
function wu(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Pu),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function jr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Bo(mf(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in wn)
        return wn[n](e);
    },
    has(t, n) {
      return n in t || n in wn;
    }
  })) : e.proxy;
}
function Ru(e, t = !0) {
  return G(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ku(e) {
  return G(e) && "__vccOpts" in e;
}
const He = (e, t) => Ef(e, t, hn);
function ba(e, t, n) {
  const r = arguments.length;
  return r === 2 ? ie(t) && !z(t) ? br(t) ? pe(e, null, [t]) : pe(e, t) : pe(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && br(n) && (n = [n]), pe(e, t, n));
}
const Mu = "3.5.13";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let As;
const ti = typeof window < "u" && window.trustedTypes;
if (ti)
  try {
    As = /* @__PURE__ */ ti.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Al = As ? (e) => As.createHTML(e) : (e) => e, Du = "http://www.w3.org/2000/svg", Fu = "http://www.w3.org/1998/Math/MathML", dt = typeof document < "u" ? document : null, ni = dt && /* @__PURE__ */ dt.createElement("template"), Uu = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? dt.createElementNS(Du, e) : t === "mathml" ? dt.createElementNS(Fu, e) : n ? dt.createElement(e, { is: n }) : dt.createElement(e);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (e) => dt.createTextNode(e),
  createComment: (e) => dt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => dt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, s, a) {
    const i = n ? n.previousSibling : t.lastChild;
    if (s && (s === a || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === a || !(s = s.nextSibling)); )
        ;
    else {
      ni.innerHTML = Al(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const o = ni.content;
      if (r === "svg" || r === "mathml") {
        const l = o.firstChild;
        for (; l.firstChild; )
          o.appendChild(l.firstChild);
        o.removeChild(l);
      }
      t.insertBefore(o, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, ju = Symbol("_vtc");
function $u(e, t, n) {
  const r = e[ju];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const vr = Symbol("_vod"), Sl = Symbol("_vsh"), Jg = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[vr] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : An(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), An(e, !0), r.enter(e)) : r.leave(e, () => {
      An(e, !1);
    }) : An(e, t));
  },
  beforeUnmount(e, { value: t }) {
    An(e, t);
  }
};
function An(e, t) {
  e.style.display = t ? e[vr] : "none", e[Sl] = !t;
}
const Wu = Symbol(""), Hu = /(^|;)\s*display\s*:/;
function Vu(e, t, n) {
  const r = e.style, s = ue(n);
  let a = !1;
  if (n && !s) {
    if (t)
      if (ue(t))
        for (const i of t.split(";")) {
          const o = i.slice(0, i.indexOf(":")).trim();
          n[o] == null && lr(r, o, "");
        }
      else
        for (const i in t)
          n[i] == null && lr(r, i, "");
    for (const i in n)
      i === "display" && (a = !0), lr(r, i, n[i]);
  } else if (s) {
    if (t !== n) {
      const i = r[Wu];
      i && (n += ";" + i), r.cssText = n, a = Hu.test(n);
    }
  } else t && e.removeAttribute("style");
  vr in e && (e[vr] = a ? r.display : "", e[Sl] && (r.display = "none"));
}
const ri = /\s*!important$/;
function lr(e, t, n) {
  if (z(n))
    n.forEach((r) => lr(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Yu(e, t);
    ri.test(n) ? e.setProperty(
      xt(r),
      n.replace(ri, ""),
      "important"
    ) : e[r] = n;
  }
}
const si = ["Webkit", "Moz", "ms"], ss = {};
function Yu(e, t) {
  const n = ss[t];
  if (n)
    return n;
  let r = $e(t);
  if (r !== "filter" && r in e)
    return ss[t] = r;
  r = wr(r);
  for (let s = 0; s < si.length; s++) {
    const a = si[s] + r;
    if (a in e)
      return ss[t] = a;
  }
  return t;
}
const ai = "http://www.w3.org/1999/xlink";
function ii(e, t, n, r, s, a = Vc(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ai, t.slice(6, t.length)) : e.setAttributeNS(ai, t, n) : n == null || a && !So(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    a ? "" : It(n) ? String(n) : n
  );
}
function oi(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Al(n) : n);
    return;
  }
  const a = e.tagName;
  if (t === "value" && a !== "PROGRESS" && // custom elements may use _value internally
  !a.includes("-")) {
    const o = a === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (o !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const o = typeof e[t];
    o === "boolean" ? n = So(n) : n == null && o === "string" ? (n = "", i = !0) : o === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(s || t);
}
function Bu(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Ku(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const li = Symbol("_vei");
function zu(e, t, n, r, s = null) {
  const a = e[li] || (e[li] = {}), i = a[t];
  if (r && i)
    i.value = r;
  else {
    const [o, l] = Gu(t);
    if (r) {
      const f = a[t] = Ju(
        r,
        s
      );
      Bu(e, o, f, l);
    } else i && (Ku(e, o, i, l), a[t] = void 0);
  }
}
const ci = /(?:Once|Passive|Capture)$/;
function Gu(e) {
  let t;
  if (ci.test(e)) {
    t = {};
    let r;
    for (; r = e.match(ci); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : xt(e.slice(2)), t];
}
let as = 0;
const Xu = /* @__PURE__ */ Promise.resolve(), qu = () => as || (Xu.then(() => as = 0), as = Date.now());
function Ju(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    it(
      Qu(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = qu(), n;
}
function Qu(e, t) {
  if (z(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (s) => !s._stopped && r && r(s)
    );
  } else
    return t;
}
const fi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Zu = (e, t, n, r, s, a) => {
  const i = s === "svg";
  t === "class" ? $u(e, r, i) : t === "style" ? Vu(e, n, r) : Ir(t) ? Js(t) || zu(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ed(e, t, r, i)) ? (oi(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ii(e, t, r, i, a, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ue(r)) ? oi(e, $e(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), ii(e, t, r, i));
};
function ed(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && fi(t) && G(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return fi(t) && ue(n) ? !1 : t in e;
}
const td = ["ctrl", "shift", "alt", "meta"], nd = {
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
  exact: (e, t) => td.some((n) => e[`${n}Key`] && !t.includes(n))
}, Qg = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = (s, ...a) => {
    for (let i = 0; i < t.length; i++) {
      const o = nd[t[i]];
      if (o && o(s, t)) return;
    }
    return e(s, ...a);
  });
}, rd = /* @__PURE__ */ ge({ patchProp: Zu }, Uu);
let ui;
function sd() {
  return ui || (ui = au(rd));
}
const ad = (...e) => {
  const t = sd().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const s = od(r);
    if (!s) return;
    const a = t._component;
    !G(a) && !a.render && !a.template && (a.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const i = n(s, !1, id(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
  }, t;
};
function id(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function od(e) {
  return ue(e) ? document.querySelector(e) : e;
}
/*!
 * shared v9.14.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
const Er = typeof window < "u", Rt = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), ld = (e, t, n) => cd({ l: e, k: t, s: n }), cd = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), ye = (e) => typeof e == "number" && isFinite(e), fd = (e) => Cl(e) === "[object Date]", Tr = (e) => Cl(e) === "[object RegExp]", $r = (e) => q(e) && Object.keys(e).length === 0, Ne = Object.assign;
let di;
const ya = () => di || (di = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function mi(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const ud = Object.prototype.hasOwnProperty;
function Or(e, t) {
  return ud.call(e, t);
}
const he = Array.isArray, ce = (e) => typeof e == "function", H = (e) => typeof e == "string", oe = (e) => typeof e == "boolean", J = (e) => e !== null && typeof e == "object", dd = (e) => J(e) && ce(e.then) && ce(e.catch), Nl = Object.prototype.toString, Cl = (e) => Nl.call(e), q = (e) => {
  if (!J(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, md = (e) => e == null ? "" : he(e) || q(e) && e.toString === Nl ? JSON.stringify(e, null, 2) : String(e);
function pd(e, t = "") {
  return e.reduce((n, r, s) => s === 0 ? n + r : n + t + r, "");
}
function Wr(e) {
  let t = e;
  return () => ++t;
}
function hd(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const tr = (e) => !J(e) || he(e);
function cr(e, t) {
  if (tr(e) || tr(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: s } = n.pop();
    Object.keys(r).forEach((a) => {
      J(r[a]) && !J(s[a]) && (s[a] = Array.isArray(r[a]) ? [] : {}), tr(s[a]) || tr(r[a]) ? s[a] = r[a] : n.push({ src: r[a], des: s[a] });
    });
  }
}
/*!
 * message-compiler v9.14.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
function gd(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Ar(e, t, n) {
  return { start: e, end: t };
}
const _d = /\{([0-9a-zA-Z]+)\}/g;
function Ll(e, ...t) {
  return t.length === 1 && bd(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(_d, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const Il = Object.assign, pi = (e) => typeof e == "string", bd = (e) => e !== null && typeof e == "object";
function xl(e, t = "") {
  return e.reduce((n, r, s) => s === 0 ? n + r : n + t + r, "");
}
const va = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2
}, yd = {
  [va.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
};
function vd(e, t, ...n) {
  const r = Ll(yd[e], ...n || []), s = { message: String(r), code: e };
  return t && (s.location = t), s;
}
const K = {
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
}, Ed = {
  // tokenizer error messages
  [K.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [K.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [K.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [K.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [K.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [K.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [K.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [K.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [K.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [K.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [K.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [K.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [K.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [K.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [K.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [K.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function yn(e, t, n = {}) {
  const { domain: r, messages: s, args: a } = n, i = Ll((s || Ed)[e] || "", ...a || []), o = new SyntaxError(String(i));
  return o.code = e, t && (o.location = t), o.domain = r, o;
}
function Td(e) {
  throw e;
}
const ct = " ", Od = "\r", xe = `
`, Ad = "\u2028", Sd = "\u2029";
function Nd(e) {
  const t = e;
  let n = 0, r = 1, s = 1, a = 0;
  const i = (U) => t[U] === Od && t[U + 1] === xe, o = (U) => t[U] === xe, l = (U) => t[U] === Sd, f = (U) => t[U] === Ad, u = (U) => i(U) || o(U) || l(U) || f(U), m = () => n, _ = () => r, E = () => s, C = () => a, S = (U) => i(U) || l(U) || f(U) ? xe : t[U], k = () => S(n), T = () => S(n + a);
  function N() {
    return a = 0, u(n) && (r++, s = 0), i(n) && n++, n++, s++, t[n];
  }
  function b() {
    return i(n + a) && a++, a++, t[n + a];
  }
  function y() {
    n = 0, r = 1, s = 1, a = 0;
  }
  function L(U = 0) {
    a = U;
  }
  function I() {
    const U = n + a;
    for (; U !== n; )
      N();
    a = 0;
  }
  return {
    index: m,
    line: _,
    column: E,
    peekOffset: C,
    charAt: S,
    currentChar: k,
    currentPeek: T,
    next: N,
    peek: b,
    reset: y,
    resetPeek: L,
    skipToPeek: I
  };
}
const Tt = void 0, Cd = ".", hi = "'", Ld = "tokenizer";
function Id(e, t = {}) {
  const n = t.location !== !1, r = Nd(e), s = () => r.index(), a = () => gd(r.line(), r.column(), r.index()), i = a(), o = s(), l = {
    currentType: 14,
    offset: o,
    startLoc: i,
    endLoc: i,
    lastType: 14,
    lastOffset: o,
    lastStartLoc: i,
    lastEndLoc: i,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, f = () => l, { onError: u } = t;
  function m(c, d, h, ...P) {
    const D = f();
    if (d.column += h, d.offset += h, u) {
      const R = n ? Ar(D.startLoc, d) : null, v = yn(c, R, {
        domain: Ld,
        args: P
      });
      u(v);
    }
  }
  function _(c, d, h) {
    c.endLoc = a(), c.currentType = d;
    const P = { type: d };
    return n && (P.loc = Ar(c.startLoc, c.endLoc)), h != null && (P.value = h), P;
  }
  const E = (c) => _(
    c,
    14
    /* TokenTypes.EOF */
  );
  function C(c, d) {
    return c.currentChar() === d ? (c.next(), d) : (m(K.EXPECTED_TOKEN, a(), 0, d), "");
  }
  function S(c) {
    let d = "";
    for (; c.currentPeek() === ct || c.currentPeek() === xe; )
      d += c.currentPeek(), c.peek();
    return d;
  }
  function k(c) {
    const d = S(c);
    return c.skipToPeek(), d;
  }
  function T(c) {
    if (c === Tt)
      return !1;
    const d = c.charCodeAt(0);
    return d >= 97 && d <= 122 || // a-z
    d >= 65 && d <= 90 || // A-Z
    d === 95;
  }
  function N(c) {
    if (c === Tt)
      return !1;
    const d = c.charCodeAt(0);
    return d >= 48 && d <= 57;
  }
  function b(c, d) {
    const { currentType: h } = d;
    if (h !== 2)
      return !1;
    S(c);
    const P = T(c.currentPeek());
    return c.resetPeek(), P;
  }
  function y(c, d) {
    const { currentType: h } = d;
    if (h !== 2)
      return !1;
    S(c);
    const P = c.currentPeek() === "-" ? c.peek() : c.currentPeek(), D = N(P);
    return c.resetPeek(), D;
  }
  function L(c, d) {
    const { currentType: h } = d;
    if (h !== 2)
      return !1;
    S(c);
    const P = c.currentPeek() === hi;
    return c.resetPeek(), P;
  }
  function I(c, d) {
    const { currentType: h } = d;
    if (h !== 8)
      return !1;
    S(c);
    const P = c.currentPeek() === ".";
    return c.resetPeek(), P;
  }
  function U(c, d) {
    const { currentType: h } = d;
    if (h !== 9)
      return !1;
    S(c);
    const P = T(c.currentPeek());
    return c.resetPeek(), P;
  }
  function W(c, d) {
    const { currentType: h } = d;
    if (!(h === 8 || h === 12))
      return !1;
    S(c);
    const P = c.currentPeek() === ":";
    return c.resetPeek(), P;
  }
  function $(c, d) {
    const { currentType: h } = d;
    if (h !== 10)
      return !1;
    const P = () => {
      const R = c.currentPeek();
      return R === "{" ? T(c.peek()) : R === "@" || R === "%" || R === "|" || R === ":" || R === "." || R === ct || !R ? !1 : R === xe ? (c.peek(), P()) : X(c, !1);
    }, D = P();
    return c.resetPeek(), D;
  }
  function ae(c) {
    S(c);
    const d = c.currentPeek() === "|";
    return c.resetPeek(), d;
  }
  function ve(c) {
    const d = S(c), h = c.currentPeek() === "%" && c.peek() === "{";
    return c.resetPeek(), {
      isModulo: h,
      hasSpace: d.length > 0
    };
  }
  function X(c, d = !0) {
    const h = (D = !1, R = "", v = !1) => {
      const A = c.currentPeek();
      return A === "{" ? R === "%" ? !1 : D : A === "@" || !A ? R === "%" ? !0 : D : A === "%" ? (c.peek(), h(D, "%", !0)) : A === "|" ? R === "%" || v ? !0 : !(R === ct || R === xe) : A === ct ? (c.peek(), h(!0, ct, v)) : A === xe ? (c.peek(), h(!0, xe, v)) : !0;
    }, P = h();
    return d && c.resetPeek(), P;
  }
  function de(c, d) {
    const h = c.currentChar();
    return h === Tt ? Tt : d(h) ? (c.next(), h) : null;
  }
  function Mt(c) {
    const d = c.charCodeAt(0);
    return d >= 97 && d <= 122 || // a-z
    d >= 65 && d <= 90 || // A-Z
    d >= 48 && d <= 57 || // 0-9
    d === 95 || // _
    d === 36;
  }
  function qt(c) {
    return de(c, Mt);
  }
  function me(c) {
    const d = c.charCodeAt(0);
    return d >= 97 && d <= 122 || // a-z
    d >= 65 && d <= 90 || // A-Z
    d >= 48 && d <= 57 || // 0-9
    d === 95 || // _
    d === 36 || // $
    d === 45;
  }
  function ne(c) {
    return de(c, me);
  }
  function Z(c) {
    const d = c.charCodeAt(0);
    return d >= 48 && d <= 57;
  }
  function Ke(c) {
    return de(c, Z);
  }
  function Et(c) {
    const d = c.charCodeAt(0);
    return d >= 48 && d <= 57 || // 0-9
    d >= 65 && d <= 70 || // A-F
    d >= 97 && d <= 102;
  }
  function Ee(c) {
    return de(c, Et);
  }
  function Oe(c) {
    let d = "", h = "";
    for (; d = Ke(c); )
      h += d;
    return h;
  }
  function Jt(c) {
    k(c);
    const d = c.currentChar();
    return d !== "%" && m(K.EXPECTED_TOKEN, a(), 0, d), c.next(), "%";
  }
  function Qt(c) {
    let d = "";
    for (; ; ) {
      const h = c.currentChar();
      if (h === "{" || h === "}" || h === "@" || h === "|" || !h)
        break;
      if (h === "%")
        if (X(c))
          d += h, c.next();
        else
          break;
      else if (h === ct || h === xe)
        if (X(c))
          d += h, c.next();
        else {
          if (ae(c))
            break;
          d += h, c.next();
        }
      else
        d += h, c.next();
    }
    return d;
  }
  function En(c) {
    k(c);
    let d = "", h = "";
    for (; d = ne(c); )
      h += d;
    return c.currentChar() === Tt && m(K.UNTERMINATED_CLOSING_BRACE, a(), 0), h;
  }
  function ot(c) {
    k(c);
    let d = "";
    return c.currentChar() === "-" ? (c.next(), d += `-${Oe(c)}`) : d += Oe(c), c.currentChar() === Tt && m(K.UNTERMINATED_CLOSING_BRACE, a(), 0), d;
  }
  function Dt(c) {
    return c !== hi && c !== xe;
  }
  function Ft(c) {
    k(c), C(c, "'");
    let d = "", h = "";
    for (; d = de(c, Dt); )
      d === "\\" ? h += Zt(c) : h += d;
    const P = c.currentChar();
    return P === xe || P === Tt ? (m(K.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), P === xe && (c.next(), C(c, "'")), h) : (C(c, "'"), h);
  }
  function Zt(c) {
    const d = c.currentChar();
    switch (d) {
      case "\\":
      case "'":
        return c.next(), `\\${d}`;
      case "u":
        return Je(c, d, 4);
      case "U":
        return Je(c, d, 6);
      default:
        return m(K.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, d), "";
    }
  }
  function Je(c, d, h) {
    C(c, d);
    let P = "";
    for (let D = 0; D < h; D++) {
      const R = Ee(c);
      if (!R) {
        m(K.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${d}${P}${c.currentChar()}`);
        break;
      }
      P += R;
    }
    return `\\${d}${P}`;
  }
  function en(c) {
    return c !== "{" && c !== "}" && c !== ct && c !== xe;
  }
  function tn(c) {
    k(c);
    let d = "", h = "";
    for (; d = de(c, en); )
      h += d;
    return h;
  }
  function p(c) {
    let d = "", h = "";
    for (; d = qt(c); )
      h += d;
    return h;
  }
  function g(c) {
    const d = (h) => {
      const P = c.currentChar();
      return P === "{" || P === "%" || P === "@" || P === "|" || P === "(" || P === ")" || !P || P === ct ? h : (h += P, c.next(), d(h));
    };
    return d("");
  }
  function O(c) {
    k(c);
    const d = C(
      c,
      "|"
      /* TokenChars.Pipe */
    );
    return k(c), d;
  }
  function M(c, d) {
    let h = null;
    switch (c.currentChar()) {
      case "{":
        return d.braceNest >= 1 && m(K.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), c.next(), h = _(
          d,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), k(c), d.braceNest++, h;
      case "}":
        return d.braceNest > 0 && d.currentType === 2 && m(K.EMPTY_PLACEHOLDER, a(), 0), c.next(), h = _(
          d,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), d.braceNest--, d.braceNest > 0 && k(c), d.inLinked && d.braceNest === 0 && (d.inLinked = !1), h;
      case "@":
        return d.braceNest > 0 && m(K.UNTERMINATED_CLOSING_BRACE, a(), 0), h = x(c, d) || E(d), d.braceNest = 0, h;
      default: {
        let D = !0, R = !0, v = !0;
        if (ae(c))
          return d.braceNest > 0 && m(K.UNTERMINATED_CLOSING_BRACE, a(), 0), h = _(d, 1, O(c)), d.braceNest = 0, d.inLinked = !1, h;
        if (d.braceNest > 0 && (d.currentType === 5 || d.currentType === 6 || d.currentType === 7))
          return m(K.UNTERMINATED_CLOSING_BRACE, a(), 0), d.braceNest = 0, w(c, d);
        if (D = b(c, d))
          return h = _(d, 5, En(c)), k(c), h;
        if (R = y(c, d))
          return h = _(d, 6, ot(c)), k(c), h;
        if (v = L(c, d))
          return h = _(d, 7, Ft(c)), k(c), h;
        if (!D && !R && !v)
          return h = _(d, 13, tn(c)), m(K.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, h.value), k(c), h;
        break;
      }
    }
    return h;
  }
  function x(c, d) {
    const { currentType: h } = d;
    let P = null;
    const D = c.currentChar();
    switch ((h === 8 || h === 9 || h === 12 || h === 10) && (D === xe || D === ct) && m(K.INVALID_LINKED_FORMAT, a(), 0), D) {
      case "@":
        return c.next(), P = _(
          d,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), d.inLinked = !0, P;
      case ".":
        return k(c), c.next(), _(
          d,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return k(c), c.next(), _(
          d,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return ae(c) ? (P = _(d, 1, O(c)), d.braceNest = 0, d.inLinked = !1, P) : I(c, d) || W(c, d) ? (k(c), x(c, d)) : U(c, d) ? (k(c), _(d, 12, p(c))) : $(c, d) ? (k(c), D === "{" ? M(c, d) || P : _(d, 11, g(c))) : (h === 8 && m(K.INVALID_LINKED_FORMAT, a(), 0), d.braceNest = 0, d.inLinked = !1, w(c, d));
    }
  }
  function w(c, d) {
    let h = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (d.braceNest > 0)
      return M(c, d) || E(d);
    if (d.inLinked)
      return x(c, d) || E(d);
    switch (c.currentChar()) {
      case "{":
        return M(c, d) || E(d);
      case "}":
        return m(K.UNBALANCED_CLOSING_BRACE, a(), 0), c.next(), _(
          d,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return x(c, d) || E(d);
      default: {
        if (ae(c))
          return h = _(d, 1, O(c)), d.braceNest = 0, d.inLinked = !1, h;
        const { isModulo: D, hasSpace: R } = ve(c);
        if (D)
          return R ? _(d, 0, Qt(c)) : _(d, 4, Jt(c));
        if (X(c))
          return _(d, 0, Qt(c));
        break;
      }
    }
    return h;
  }
  function j() {
    const { currentType: c, offset: d, startLoc: h, endLoc: P } = l;
    return l.lastType = c, l.lastOffset = d, l.lastStartLoc = h, l.lastEndLoc = P, l.offset = s(), l.startLoc = a(), r.currentChar() === Tt ? _(
      l,
      14
      /* TokenTypes.EOF */
    ) : w(r, l);
  }
  return {
    nextToken: j,
    currentOffset: s,
    currentPosition: a,
    context: f
  };
}
const xd = "parser", Pd = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function wd(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const r = parseInt(t || n, 16);
      return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "�";
    }
  }
}
function Rd(e = {}) {
  const t = e.location !== !1, { onError: n, onWarn: r } = e;
  function s(b, y, L, I, ...U) {
    const W = b.currentPosition();
    if (W.offset += I, W.column += I, n) {
      const $ = t ? Ar(L, W) : null, ae = yn(y, $, {
        domain: xd,
        args: U
      });
      n(ae);
    }
  }
  function a(b, y, L, I, ...U) {
    const W = b.currentPosition();
    if (W.offset += I, W.column += I, r) {
      const $ = t ? Ar(L, W) : null;
      r(vd(y, $, U));
    }
  }
  function i(b, y, L) {
    const I = { type: b };
    return t && (I.start = y, I.end = y, I.loc = { start: L, end: L }), I;
  }
  function o(b, y, L, I) {
    t && (b.end = y, b.loc && (b.loc.end = L));
  }
  function l(b, y) {
    const L = b.context(), I = i(3, L.offset, L.startLoc);
    return I.value = y, o(I, b.currentOffset(), b.currentPosition()), I;
  }
  function f(b, y) {
    const L = b.context(), { lastOffset: I, lastStartLoc: U } = L, W = i(5, I, U);
    return W.index = parseInt(y, 10), b.nextToken(), o(W, b.currentOffset(), b.currentPosition()), W;
  }
  function u(b, y, L) {
    const I = b.context(), { lastOffset: U, lastStartLoc: W } = I, $ = i(4, U, W);
    return $.key = y, L === !0 && ($.modulo = !0), b.nextToken(), o($, b.currentOffset(), b.currentPosition()), $;
  }
  function m(b, y) {
    const L = b.context(), { lastOffset: I, lastStartLoc: U } = L, W = i(9, I, U);
    return W.value = y.replace(Pd, wd), b.nextToken(), o(W, b.currentOffset(), b.currentPosition()), W;
  }
  function _(b) {
    const y = b.nextToken(), L = b.context(), { lastOffset: I, lastStartLoc: U } = L, W = i(8, I, U);
    return y.type !== 12 ? (s(b, K.UNEXPECTED_EMPTY_LINKED_MODIFIER, L.lastStartLoc, 0), W.value = "", o(W, I, U), {
      nextConsumeToken: y,
      node: W
    }) : (y.value == null && s(b, K.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, ze(y)), W.value = y.value || "", o(W, b.currentOffset(), b.currentPosition()), {
      node: W
    });
  }
  function E(b, y) {
    const L = b.context(), I = i(7, L.offset, L.startLoc);
    return I.value = y, o(I, b.currentOffset(), b.currentPosition()), I;
  }
  function C(b) {
    const y = b.context(), L = i(6, y.offset, y.startLoc);
    let I = b.nextToken();
    if (I.type === 9) {
      const U = _(b);
      L.modifier = U.node, I = U.nextConsumeToken || b.nextToken();
    }
    switch (I.type !== 10 && s(b, K.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, ze(I)), I = b.nextToken(), I.type === 2 && (I = b.nextToken()), I.type) {
      case 11:
        I.value == null && s(b, K.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, ze(I)), L.key = E(b, I.value || "");
        break;
      case 5:
        I.value == null && s(b, K.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, ze(I)), L.key = u(b, I.value || "");
        break;
      case 6:
        I.value == null && s(b, K.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, ze(I)), L.key = f(b, I.value || "");
        break;
      case 7:
        I.value == null && s(b, K.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, ze(I)), L.key = m(b, I.value || "");
        break;
      default: {
        s(b, K.UNEXPECTED_EMPTY_LINKED_KEY, y.lastStartLoc, 0);
        const U = b.context(), W = i(7, U.offset, U.startLoc);
        return W.value = "", o(W, U.offset, U.startLoc), L.key = W, o(L, U.offset, U.startLoc), {
          nextConsumeToken: I,
          node: L
        };
      }
    }
    return o(L, b.currentOffset(), b.currentPosition()), {
      node: L
    };
  }
  function S(b) {
    const y = b.context(), L = y.currentType === 1 ? b.currentOffset() : y.offset, I = y.currentType === 1 ? y.endLoc : y.startLoc, U = i(2, L, I);
    U.items = [];
    let W = null, $ = null;
    do {
      const X = W || b.nextToken();
      switch (W = null, X.type) {
        case 0:
          X.value == null && s(b, K.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, ze(X)), U.items.push(l(b, X.value || ""));
          break;
        case 6:
          X.value == null && s(b, K.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, ze(X)), U.items.push(f(b, X.value || ""));
          break;
        case 4:
          $ = !0;
          break;
        case 5:
          X.value == null && s(b, K.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, ze(X)), U.items.push(u(b, X.value || "", !!$)), $ && (a(b, va.USE_MODULO_SYNTAX, y.lastStartLoc, 0, ze(X)), $ = null);
          break;
        case 7:
          X.value == null && s(b, K.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, ze(X)), U.items.push(m(b, X.value || ""));
          break;
        case 8: {
          const de = C(b);
          U.items.push(de.node), W = de.nextConsumeToken || null;
          break;
        }
      }
    } while (y.currentType !== 14 && y.currentType !== 1);
    const ae = y.currentType === 1 ? y.lastOffset : b.currentOffset(), ve = y.currentType === 1 ? y.lastEndLoc : b.currentPosition();
    return o(U, ae, ve), U;
  }
  function k(b, y, L, I) {
    const U = b.context();
    let W = I.items.length === 0;
    const $ = i(1, y, L);
    $.cases = [], $.cases.push(I);
    do {
      const ae = S(b);
      W || (W = ae.items.length === 0), $.cases.push(ae);
    } while (U.currentType !== 14);
    return W && s(b, K.MUST_HAVE_MESSAGES_IN_PLURAL, L, 0), o($, b.currentOffset(), b.currentPosition()), $;
  }
  function T(b) {
    const y = b.context(), { offset: L, startLoc: I } = y, U = S(b);
    return y.currentType === 14 ? U : k(b, L, I, U);
  }
  function N(b) {
    const y = Id(b, Il({}, e)), L = y.context(), I = i(0, L.offset, L.startLoc);
    return t && I.loc && (I.loc.source = b), I.body = T(y), e.onCacheKey && (I.cacheKey = e.onCacheKey(b)), L.currentType !== 14 && s(y, K.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, b[L.offset] || ""), o(I, y.currentOffset(), y.currentPosition()), I;
  }
  return { parse: N };
}
function ze(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function kd(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function gi(e, t) {
  for (let n = 0; n < e.length; n++)
    Ea(e[n], t);
}
function Ea(e, t) {
  switch (e.type) {
    case 1:
      gi(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      gi(e.items, t);
      break;
    case 6: {
      Ea(e.key, t), t.helper(
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
function Md(e, t = {}) {
  const n = kd(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Ea(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function Dd(e) {
  const t = e.body;
  return t.type === 2 ? _i(t) : t.cases.forEach((n) => _i(n)), e;
}
function _i(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const r = e.items[n];
      if (!(r.type === 3 || r.type === 9) || r.value == null)
        break;
      t.push(r.value);
    }
    if (t.length === e.items.length) {
      e.static = xl(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const Fd = "minifier";
function an(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      an(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        an(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        an(n[r]);
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
      an(t.key), t.k = t.key, delete t.key, t.modifier && (an(t.modifier), t.m = t.modifier, delete t.modifier);
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
      throw yn(K.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: Fd,
        args: [e.type]
      });
  }
  delete e.type;
}
const Ud = "parser";
function jd(e, t) {
  const { sourceMap: n, filename: r, breakLineCode: s, needIndent: a } = t, i = t.location !== !1, o = {
    filename: r,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: s,
    needIndent: a,
    indentLevel: 0
  };
  i && e.loc && (o.source = e.loc.source);
  const l = () => o;
  function f(k, T) {
    o.code += k;
  }
  function u(k, T = !0) {
    const N = T ? s : "";
    f(a ? N + "  ".repeat(k) : N);
  }
  function m(k = !0) {
    const T = ++o.indentLevel;
    k && u(T);
  }
  function _(k = !0) {
    const T = --o.indentLevel;
    k && u(T);
  }
  function E() {
    u(o.indentLevel);
  }
  return {
    context: l,
    push: f,
    indent: m,
    deindent: _,
    newline: E,
    helper: (k) => `_${k}`,
    needIndent: () => o.needIndent
  };
}
function $d(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), gn(e, t.key), t.modifier ? (e.push(", "), gn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Wd(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const s = t.items.length;
  for (let a = 0; a < s && (gn(e, t.items[a]), a !== s - 1); a++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function Hd(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const s = t.cases.length;
    for (let a = 0; a < s && (gn(e, t.cases[a]), a !== s - 1); a++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function Vd(e, t) {
  t.body ? gn(e, t.body) : e.push("null");
}
function gn(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Vd(e, t);
      break;
    case 1:
      Hd(e, t);
      break;
    case 2:
      Wd(e, t);
      break;
    case 6:
      $d(e, t);
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
      throw yn(K.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: Ud,
        args: [t.type]
      });
  }
}
const Yd = (e, t = {}) => {
  const n = pi(t.mode) ? t.mode : "normal", r = pi(t.filename) ? t.filename : "message.intl", s = !!t.sourceMap, a = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, i = t.needIndent ? t.needIndent : n !== "arrow", o = e.helpers || [], l = jd(e, {
    mode: n,
    filename: r,
    sourceMap: s,
    breakLineCode: a,
    needIndent: i
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(i), o.length > 0 && (l.push(`const { ${xl(o.map((m) => `${m}: _${m}`), ", ")} } = ctx`), l.newline()), l.push("return "), gn(l, e), l.deindent(i), l.push("}"), delete e.helpers;
  const { code: f, map: u } = l.context();
  return {
    ast: e,
    code: f,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Bd(e, t = {}) {
  const n = Il({}, t), r = !!n.jit, s = !!n.minify, a = n.optimize == null ? !0 : n.optimize, o = Rd(n).parse(e);
  return r ? (a && Dd(o), s && an(o), { ast: o, code: "" }) : (Md(o, n), Yd(o, n));
}
/*!
 * core-base v9.14.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
function Kd() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (ya().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const kt = [];
kt[
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
kt[
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
kt[
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
kt[
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
kt[
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
kt[
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
kt[
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
const zd = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Gd(e) {
  return zd.test(e);
}
function Xd(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function qd(e) {
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
function Jd(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Gd(t) ? Xd(t) : "*" + t;
}
function Qd(e) {
  const t = [];
  let n = -1, r = 0, s = 0, a, i, o, l, f, u, m;
  const _ = [];
  _[
    0
    /* Actions.APPEND */
  ] = () => {
    i === void 0 ? i = o : i += o;
  }, _[
    1
    /* Actions.PUSH */
  ] = () => {
    i !== void 0 && (t.push(i), i = void 0);
  }, _[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    _[
      0
      /* Actions.APPEND */
    ](), s++;
  }, _[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (s > 0)
      s--, r = 4, _[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (s = 0, i === void 0 || (i = Jd(i), i === !1))
        return !1;
      _[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function E() {
    const C = e[n + 1];
    if (r === 5 && C === "'" || r === 6 && C === '"')
      return n++, o = "\\" + C, _[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, a = e[n], !(a === "\\" && E())) {
      if (l = qd(a), m = kt[r], f = m[l] || m.l || 8, f === 8 || (r = f[0], f[1] !== void 0 && (u = _[f[1]], u && (o = a, u() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const bi = /* @__PURE__ */ new Map();
function Zd(e, t) {
  return J(e) ? e[t] : null;
}
function em(e, t) {
  if (!J(e))
    return null;
  let n = bi.get(t);
  if (n || (n = Qd(t), n && bi.set(t, n)), !n)
    return null;
  const r = n.length;
  let s = e, a = 0;
  for (; a < r; ) {
    const i = s[n[a]];
    if (i === void 0 || ce(s))
      return null;
    s = i, a++;
  }
  return s;
}
const tm = (e) => e, nm = (e) => "", rm = "text", sm = (e) => e.length === 0 ? "" : pd(e), am = md;
function yi(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function im(e) {
  const t = ye(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (ye(e.named.count) || ye(e.named.n)) ? ye(e.named.count) ? e.named.count : ye(e.named.n) ? e.named.n : t : t;
}
function om(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function lm(e = {}) {
  const t = e.locale, n = im(e), r = J(e.pluralRules) && H(t) && ce(e.pluralRules[t]) ? e.pluralRules[t] : yi, s = J(e.pluralRules) && H(t) && ce(e.pluralRules[t]) ? yi : void 0, a = (T) => T[r(n, T.length, s)], i = e.list || [], o = (T) => i[T], l = e.named || {};
  ye(e.pluralIndex) && om(n, l);
  const f = (T) => l[T];
  function u(T) {
    const N = ce(e.messages) ? e.messages(T) : J(e.messages) ? e.messages[T] : !1;
    return N || (e.parent ? e.parent.message(T) : nm);
  }
  const m = (T) => e.modifiers ? e.modifiers[T] : tm, _ = q(e.processor) && ce(e.processor.normalize) ? e.processor.normalize : sm, E = q(e.processor) && ce(e.processor.interpolate) ? e.processor.interpolate : am, C = q(e.processor) && H(e.processor.type) ? e.processor.type : rm, k = {
    list: o,
    named: f,
    plural: a,
    linked: (T, ...N) => {
      const [b, y] = N;
      let L = "text", I = "";
      N.length === 1 ? J(b) ? (I = b.modifier || I, L = b.type || L) : H(b) && (I = b || I) : N.length === 2 && (H(b) && (I = b || I), H(y) && (L = y || L));
      const U = u(T)(k), W = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        L === "vnode" && he(U) && I ? U[0] : U
      );
      return I ? m(I)(W, L) : W;
    },
    message: u,
    type: C,
    interpolate: E,
    normalize: _,
    values: Ne({}, i, l)
  };
  return k;
}
let Wn = null;
function cm(e) {
  Wn = e;
}
function fm(e, t, n) {
  Wn && Wn.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const um = /* @__PURE__ */ dm(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function dm(e) {
  return (t) => Wn && Wn.emit(e, t);
}
const Pl = va.__EXTEND_POINT__, $t = Wr(Pl), mm = {
  NOT_FOUND_KEY: Pl,
  // 2
  FALLBACK_TO_TRANSLATE: $t(),
  // 3
  CANNOT_FORMAT_NUMBER: $t(),
  // 4
  FALLBACK_TO_NUMBER_FORMAT: $t(),
  // 5
  CANNOT_FORMAT_DATE: $t(),
  // 6
  FALLBACK_TO_DATE_FORMAT: $t(),
  // 7
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: $t(),
  // 8
  __EXTEND_POINT__: $t()
  // 9
}, wl = K.__EXTEND_POINT__, Wt = Wr(wl), nt = {
  INVALID_ARGUMENT: wl,
  // 17
  INVALID_DATE_ARGUMENT: Wt(),
  // 18
  INVALID_ISO_DATE_ARGUMENT: Wt(),
  // 19
  NOT_SUPPORT_NON_STRING_MESSAGE: Wt(),
  // 20
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: Wt(),
  // 21
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: Wt(),
  // 22
  NOT_SUPPORT_LOCALE_TYPE: Wt(),
  // 23
  __EXTEND_POINT__: Wt()
  // 24
};
function gt(e) {
  return yn(e, null, void 0);
}
function Ta(e, t) {
  return t.locale != null ? vi(t.locale) : vi(e.locale);
}
let is;
function vi(e) {
  if (H(e))
    return e;
  if (ce(e)) {
    if (e.resolvedOnce && is != null)
      return is;
    if (e.constructor.name === "Function") {
      const t = e();
      if (dd(t))
        throw gt(nt.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return is = t;
    } else
      throw gt(nt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw gt(nt.NOT_SUPPORT_LOCALE_TYPE);
}
function pm(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...he(t) ? t : J(t) ? Object.keys(t) : H(t) ? [t] : [n]
  ])];
}
function Rl(e, t, n) {
  const r = H(n) ? n : Sr, s = e;
  s.__localeChainCache || (s.__localeChainCache = /* @__PURE__ */ new Map());
  let a = s.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let i = [n];
    for (; he(i); )
      i = Ei(a, i, t);
    const o = he(t) || !q(t) ? t : t.default ? t.default : null;
    i = H(o) ? [o] : o, he(i) && Ei(a, i, !1), s.__localeChainCache.set(r, a);
  }
  return a;
}
function Ei(e, t, n) {
  let r = !0;
  for (let s = 0; s < t.length && oe(r); s++) {
    const a = t[s];
    H(a) && (r = hm(e, t[s], n));
  }
  return r;
}
function hm(e, t, n) {
  let r;
  const s = t.split("-");
  do {
    const a = s.join("-");
    r = gm(e, a, n), s.splice(-1, 1);
  } while (s.length && r === !0);
  return r;
}
function gm(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (he(n) || q(n)) && n[s] && (r = n[s]);
  }
  return r;
}
const _m = "9.14.1", Hr = -1, Sr = "en-US", Ti = "", Oi = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function bm() {
  return {
    upper: (e, t) => t === "text" && H(e) ? e.toUpperCase() : t === "vnode" && J(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && H(e) ? e.toLowerCase() : t === "vnode" && J(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && H(e) ? Oi(e) : t === "vnode" && J(e) && "__v_isVNode" in e ? Oi(e.children) : e
  };
}
let kl;
function ym(e) {
  kl = e;
}
let Ml;
function vm(e) {
  Ml = e;
}
let Dl;
function Em(e) {
  Dl = e;
}
let Fl = null;
const Tm = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  Fl = e;
}, Om = /* @__NO_SIDE_EFFECTS__ */ () => Fl;
let Ul = null;
const Ai = (e) => {
  Ul = e;
}, Am = () => Ul;
let Si = 0;
function Sm(e = {}) {
  const t = ce(e.onWarn) ? e.onWarn : hd, n = H(e.version) ? e.version : _m, r = H(e.locale) || ce(e.locale) ? e.locale : Sr, s = ce(r) ? Sr : r, a = he(e.fallbackLocale) || q(e.fallbackLocale) || H(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s, i = q(e.messages) ? e.messages : { [s]: {} }, o = q(e.datetimeFormats) ? e.datetimeFormats : { [s]: {} }, l = q(e.numberFormats) ? e.numberFormats : { [s]: {} }, f = Ne({}, e.modifiers || {}, bm()), u = e.pluralRules || {}, m = ce(e.missing) ? e.missing : null, _ = oe(e.missingWarn) || Tr(e.missingWarn) ? e.missingWarn : !0, E = oe(e.fallbackWarn) || Tr(e.fallbackWarn) ? e.fallbackWarn : !0, C = !!e.fallbackFormat, S = !!e.unresolving, k = ce(e.postTranslation) ? e.postTranslation : null, T = q(e.processor) ? e.processor : null, N = oe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, b = !!e.escapeParameter, y = ce(e.messageCompiler) ? e.messageCompiler : kl, L = ce(e.messageResolver) ? e.messageResolver : Ml || Zd, I = ce(e.localeFallbacker) ? e.localeFallbacker : Dl || pm, U = J(e.fallbackContext) ? e.fallbackContext : void 0, W = e, $ = J(W.__datetimeFormatters) ? W.__datetimeFormatters : /* @__PURE__ */ new Map(), ae = J(W.__numberFormatters) ? W.__numberFormatters : /* @__PURE__ */ new Map(), ve = J(W.__meta) ? W.__meta : {};
  Si++;
  const X = {
    version: n,
    cid: Si,
    locale: r,
    fallbackLocale: a,
    messages: i,
    modifiers: f,
    pluralRules: u,
    missing: m,
    missingWarn: _,
    fallbackWarn: E,
    fallbackFormat: C,
    unresolving: S,
    postTranslation: k,
    processor: T,
    warnHtmlMessage: N,
    escapeParameter: b,
    messageCompiler: y,
    messageResolver: L,
    localeFallbacker: I,
    fallbackContext: U,
    onWarn: t,
    __meta: ve
  };
  return X.datetimeFormats = o, X.numberFormats = l, X.__datetimeFormatters = $, X.__numberFormatters = ae, __INTLIFY_PROD_DEVTOOLS__ && fm(X, n, ve), X;
}
function Oa(e, t, n, r, s) {
  const { missing: a, onWarn: i } = e;
  if (a !== null) {
    const o = a(e, n, t, s);
    return H(o) ? o : t;
  } else
    return t;
}
function Sn(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Nm(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Cm(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (Nm(e, t[r]))
      return !0;
  return !1;
}
function os(e) {
  return (n) => Lm(n, e);
}
function Lm(e, t) {
  const n = t.b || t.body;
  if ((n.t || n.type) === 1) {
    const r = n, s = r.c || r.cases;
    return e.plural(s.reduce((a, i) => [
      ...a,
      Ni(e, i)
    ], []));
  } else
    return Ni(e, n);
}
function Ni(e, t) {
  const n = t.s || t.static;
  if (n)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = (t.i || t.items).reduce((s, a) => [...s, Ss(e, a)], []);
    return e.normalize(r);
  }
}
function Ss(e, t) {
  const n = t.t || t.type;
  switch (n) {
    case 3: {
      const r = t;
      return r.v || r.value;
    }
    case 9: {
      const r = t;
      return r.v || r.value;
    }
    case 4: {
      const r = t;
      return e.interpolate(e.named(r.k || r.key));
    }
    case 5: {
      const r = t;
      return e.interpolate(e.list(r.i != null ? r.i : r.index));
    }
    case 6: {
      const r = t, s = r.m || r.modifier;
      return e.linked(Ss(e, r.k || r.key), s ? Ss(e, s) : void 0, e.type);
    }
    case 7: {
      const r = t;
      return r.v || r.value;
    }
    case 8: {
      const r = t;
      return r.v || r.value;
    }
    default:
      throw new Error(`unhandled node type on format message part: ${n}`);
  }
}
const Im = (e) => e;
let nr = /* @__PURE__ */ Object.create(null);
const _n = (e) => J(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e);
function xm(e, t = {}) {
  let n = !1;
  const r = t.onError || Td;
  return t.onError = (s) => {
    n = !0, r(s);
  }, { ...Bd(e, t), detectError: n };
}
function Pm(e, t) {
  if (H(e)) {
    oe(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || Im)(e), s = nr[r];
    if (s)
      return s;
    const { ast: a, detectError: i } = xm(e, {
      ...t,
      location: !1,
      jit: !0
    }), o = os(a);
    return i ? o : nr[r] = o;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = nr[n];
      return r || (nr[n] = os(e));
    } else
      return os(e);
  }
}
const Ci = () => "", Ve = (e) => ce(e);
function Li(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: s, messageCompiler: a, fallbackLocale: i, messages: o } = e, [l, f] = Ns(...t), u = oe(f.missingWarn) ? f.missingWarn : e.missingWarn, m = oe(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn, _ = oe(f.escapeParameter) ? f.escapeParameter : e.escapeParameter, E = !!f.resolvedMessage, C = H(f.default) || oe(f.default) ? oe(f.default) ? a ? l : () => l : f.default : n ? a ? l : () => l : "", S = n || C !== "", k = Ta(e, f);
  _ && wm(f);
  let [T, N, b] = E ? [
    l,
    k,
    o[k] || {}
  ] : jl(e, l, k, i, m, u), y = T, L = l;
  if (!E && !(H(y) || _n(y) || Ve(y)) && S && (y = C, L = y), !E && (!(H(y) || _n(y) || Ve(y)) || !H(N)))
    return s ? Hr : l;
  let I = !1;
  const U = () => {
    I = !0;
  }, W = Ve(y) ? y : $l(e, l, N, y, L, U);
  if (I)
    return y;
  const $ = Mm(e, N, b, f), ae = lm($), ve = Rm(e, W, ae), X = r ? r(ve, l) : ve;
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const de = {
      timestamp: Date.now(),
      key: H(l) ? l : Ve(y) ? y.key : "",
      locale: N || (Ve(y) ? y.locale : ""),
      format: H(y) ? y : Ve(y) ? y.source : "",
      message: X
    };
    de.meta = Ne({}, e.__meta, /* @__PURE__ */ Om() || {}), um(de);
  }
  return X;
}
function wm(e) {
  he(e.list) ? e.list = e.list.map((t) => H(t) ? mi(t) : t) : J(e.named) && Object.keys(e.named).forEach((t) => {
    H(e.named[t]) && (e.named[t] = mi(e.named[t]));
  });
}
function jl(e, t, n, r, s, a) {
  const { messages: i, onWarn: o, messageResolver: l, localeFallbacker: f } = e, u = f(e, r, n);
  let m = {}, _, E = null;
  const C = "translate";
  for (let S = 0; S < u.length && (_ = u[S], m = i[_] || {}, (E = l(m, t)) === null && (E = m[t]), !(H(E) || _n(E) || Ve(E))); S++)
    if (!Cm(_, u)) {
      const k = Oa(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        _,
        a,
        C
      );
      k !== t && (E = k);
    }
  return [E, _, m];
}
function $l(e, t, n, r, s, a) {
  const { messageCompiler: i, warnHtmlMessage: o } = e;
  if (Ve(r)) {
    const f = r;
    return f.locale = f.locale || n, f.key = f.key || t, f;
  }
  if (i == null) {
    const f = () => r;
    return f.locale = n, f.key = t, f;
  }
  const l = i(r, km(e, n, s, r, o, a));
  return l.locale = n, l.key = t, l.source = r, l;
}
function Rm(e, t, n) {
  return t(n);
}
function Ns(...e) {
  const [t, n, r] = e, s = {};
  if (!H(t) && !ye(t) && !Ve(t) && !_n(t))
    throw gt(nt.INVALID_ARGUMENT);
  const a = ye(t) ? String(t) : (Ve(t), t);
  return ye(n) ? s.plural = n : H(n) ? s.default = n : q(n) && !$r(n) ? s.named = n : he(n) && (s.list = n), ye(r) ? s.plural = r : H(r) ? s.default = r : q(r) && Ne(s, r), [a, s];
}
function km(e, t, n, r, s, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (i) => {
      throw a && a(i), i;
    },
    onCacheKey: (i) => ld(t, n, i)
  };
}
function Mm(e, t, n, r) {
  const { modifiers: s, pluralRules: a, messageResolver: i, fallbackLocale: o, fallbackWarn: l, missingWarn: f, fallbackContext: u } = e, _ = {
    locale: t,
    modifiers: s,
    pluralRules: a,
    messages: (E) => {
      let C = i(n, E);
      if (C == null && u) {
        const [, , S] = jl(u, E, t, o, l, f);
        C = i(S, E);
      }
      if (H(C) || _n(C)) {
        let S = !1;
        const T = $l(e, E, t, C, E, () => {
          S = !0;
        });
        return S ? Ci : T;
      } else return Ve(C) ? C : Ci;
    }
  };
  return e.processor && (_.processor = e.processor), r.list && (_.list = r.list), r.named && (_.named = r.named), ye(r.plural) && (_.pluralIndex = r.plural), _;
}
function Ii(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: s, onWarn: a, localeFallbacker: i } = e, { __datetimeFormatters: o } = e, [l, f, u, m] = Cs(...t), _ = oe(u.missingWarn) ? u.missingWarn : e.missingWarn;
  oe(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
  const E = !!u.part, C = Ta(e, u), S = i(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    C
  );
  if (!H(l) || l === "")
    return new Intl.DateTimeFormat(C, m).format(f);
  let k = {}, T, N = null;
  const b = "datetime format";
  for (let I = 0; I < S.length && (T = S[I], k = n[T] || {}, N = k[l], !q(N)); I++)
    Oa(e, l, T, _, b);
  if (!q(N) || !H(T))
    return r ? Hr : l;
  let y = `${T}__${l}`;
  $r(m) || (y = `${y}__${JSON.stringify(m)}`);
  let L = o.get(y);
  return L || (L = new Intl.DateTimeFormat(T, Ne({}, N, m)), o.set(y, L)), E ? L.formatToParts(f) : L.format(f);
}
const Wl = [
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
function Cs(...e) {
  const [t, n, r, s] = e, a = {};
  let i = {}, o;
  if (H(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw gt(nt.INVALID_ISO_DATE_ARGUMENT);
    const f = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    o = new Date(f);
    try {
      o.toISOString();
    } catch {
      throw gt(nt.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (fd(t)) {
    if (isNaN(t.getTime()))
      throw gt(nt.INVALID_DATE_ARGUMENT);
    o = t;
  } else if (ye(t))
    o = t;
  else
    throw gt(nt.INVALID_ARGUMENT);
  return H(n) ? a.key = n : q(n) && Object.keys(n).forEach((l) => {
    Wl.includes(l) ? i[l] = n[l] : a[l] = n[l];
  }), H(r) ? a.locale = r : q(r) && (i = r), q(s) && (i = s), [a.key || "", o, a, i];
}
function xi(e, t, n) {
  const r = e;
  for (const s in n) {
    const a = `${t}__${s}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function Pi(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: s, onWarn: a, localeFallbacker: i } = e, { __numberFormatters: o } = e, [l, f, u, m] = Ls(...t), _ = oe(u.missingWarn) ? u.missingWarn : e.missingWarn;
  oe(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
  const E = !!u.part, C = Ta(e, u), S = i(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    C
  );
  if (!H(l) || l === "")
    return new Intl.NumberFormat(C, m).format(f);
  let k = {}, T, N = null;
  const b = "number format";
  for (let I = 0; I < S.length && (T = S[I], k = n[T] || {}, N = k[l], !q(N)); I++)
    Oa(e, l, T, _, b);
  if (!q(N) || !H(T))
    return r ? Hr : l;
  let y = `${T}__${l}`;
  $r(m) || (y = `${y}__${JSON.stringify(m)}`);
  let L = o.get(y);
  return L || (L = new Intl.NumberFormat(T, Ne({}, N, m)), o.set(y, L)), E ? L.formatToParts(f) : L.format(f);
}
const Hl = [
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
function Ls(...e) {
  const [t, n, r, s] = e, a = {};
  let i = {};
  if (!ye(t))
    throw gt(nt.INVALID_ARGUMENT);
  const o = t;
  return H(n) ? a.key = n : q(n) && Object.keys(n).forEach((l) => {
    Hl.includes(l) ? i[l] = n[l] : a[l] = n[l];
  }), H(r) ? a.locale = r : q(r) && (i = r), q(s) && (i = s), [a.key || "", o, a, i];
}
function wi(e, t, n) {
  const r = e;
  for (const s in n) {
    const a = `${t}__${s}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
Kd();
/*!
 * vue-i18n v9.14.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
const Dm = "9.14.1";
function Fm() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (ya().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Vl = mm.__EXTEND_POINT__, ft = Wr(Vl);
ft(), ft(), ft(), ft(), ft(), ft(), ft(), ft(), ft();
const Yl = nt.__EXTEND_POINT__, Re = Wr(Yl), Be = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Yl,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: Re(),
  // 25
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: Re(),
  // 26
  NOT_INSTALLED: Re(),
  // 27
  NOT_AVAILABLE_IN_LEGACY_MODE: Re(),
  // 28
  // directive module errors
  REQUIRED_VALUE: Re(),
  // 29
  INVALID_VALUE: Re(),
  // 30
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Re(),
  // 31
  NOT_INSTALLED_WITH_PROVIDE: Re(),
  // 32
  // unexpected error
  UNEXPECTED_ERROR: Re(),
  // 33
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: Re(),
  // 34
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: Re(),
  // 35
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Re(),
  // 36
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Re(),
  // 37
  // for enhancement
  __EXTEND_POINT__: Re()
  // 38
};
function qe(e, ...t) {
  return yn(e, null, void 0);
}
const Is = /* @__PURE__ */ Rt("__translateVNode"), xs = /* @__PURE__ */ Rt("__datetimeParts"), Ps = /* @__PURE__ */ Rt("__numberParts"), Um = Rt("__setPluralRules"), jm = /* @__PURE__ */ Rt("__injectWithOption"), ws = /* @__PURE__ */ Rt("__dispose");
function Hn(e) {
  if (!J(e))
    return e;
  for (const t in e)
    if (Or(e, t))
      if (!t.includes("."))
        J(e[t]) && Hn(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let s = e, a = !1;
        for (let i = 0; i < r; i++) {
          if (n[i] in s || (s[n[i]] = {}), !J(s[n[i]])) {
            a = !0;
            break;
          }
          s = s[n[i]];
        }
        a || (s[n[r]] = e[t], delete e[t]), J(s[n[r]]) && Hn(s[n[r]]);
      }
  return e;
}
function Bl(e, t) {
  const { messages: n, __i18n: r, messageResolver: s, flatJson: a } = t, i = q(n) ? n : he(r) ? {} : { [e]: {} };
  if (he(r) && r.forEach((o) => {
    if ("locale" in o && "resource" in o) {
      const { locale: l, resource: f } = o;
      l ? (i[l] = i[l] || {}, cr(f, i[l])) : cr(f, i);
    } else
      H(o) && cr(JSON.parse(o), i);
  }), s == null && a)
    for (const o in i)
      Or(i, o) && Hn(i[o]);
  return i;
}
function Kl(e) {
  return e.type;
}
function $m(e, t, n) {
  let r = J(t.messages) ? t.messages : {};
  "__i18nGlobal" in n && (r = Bl(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const s = Object.keys(r);
  s.length && s.forEach((a) => {
    e.mergeLocaleMessage(a, r[a]);
  });
  {
    if (J(t.datetimeFormats)) {
      const a = Object.keys(t.datetimeFormats);
      a.length && a.forEach((i) => {
        e.mergeDateTimeFormat(i, t.datetimeFormats[i]);
      });
    }
    if (J(t.numberFormats)) {
      const a = Object.keys(t.numberFormats);
      a.length && a.forEach((i) => {
        e.mergeNumberFormat(i, t.numberFormats[i]);
      });
    }
  }
}
function Ri(e) {
  return pe(Gn, null, e, 0);
}
const ki = "__INTLIFY_META__", Mi = () => [], Wm = () => !1;
let Di = 0;
function Fi(e) {
  return (t, n, r, s) => e(n, r, Ur() || void 0, s);
}
const Hm = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = Ur();
  let t = null;
  return e && (t = Kl(e)[ki]) ? { [ki]: t } : null;
};
function zl(e = {}, t) {
  const { __root: n, __injectWithOption: r } = e, s = n === void 0, a = e.flatJson, i = Er ? ar : pf, o = !!e.translateExistCompatible;
  let l = oe(e.inheritLocale) ? e.inheritLocale : !0;
  const f = i(
    // prettier-ignore
    n && l ? n.locale.value : H(e.locale) ? e.locale : Sr
  ), u = i(
    // prettier-ignore
    n && l ? n.fallbackLocale.value : H(e.fallbackLocale) || he(e.fallbackLocale) || q(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : f.value
  ), m = i(Bl(f.value, e)), _ = i(q(e.datetimeFormats) ? e.datetimeFormats : { [f.value]: {} }), E = i(q(e.numberFormats) ? e.numberFormats : { [f.value]: {} });
  let C = n ? n.missingWarn : oe(e.missingWarn) || Tr(e.missingWarn) ? e.missingWarn : !0, S = n ? n.fallbackWarn : oe(e.fallbackWarn) || Tr(e.fallbackWarn) ? e.fallbackWarn : !0, k = n ? n.fallbackRoot : oe(e.fallbackRoot) ? e.fallbackRoot : !0, T = !!e.fallbackFormat, N = ce(e.missing) ? e.missing : null, b = ce(e.missing) ? Fi(e.missing) : null, y = ce(e.postTranslation) ? e.postTranslation : null, L = n ? n.warnHtmlMessage : oe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, I = !!e.escapeParameter;
  const U = n ? n.modifiers : q(e.modifiers) ? e.modifiers : {};
  let W = e.pluralRules || n && n.pluralRules, $;
  $ = (() => {
    s && Ai(null);
    const v = {
      version: Dm,
      locale: f.value,
      fallbackLocale: u.value,
      messages: m.value,
      modifiers: U,
      pluralRules: W,
      missing: b === null ? void 0 : b,
      missingWarn: C,
      fallbackWarn: S,
      fallbackFormat: T,
      unresolving: !0,
      postTranslation: y === null ? void 0 : y,
      warnHtmlMessage: L,
      escapeParameter: I,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    v.datetimeFormats = _.value, v.numberFormats = E.value, v.__datetimeFormatters = q($) ? $.__datetimeFormatters : void 0, v.__numberFormatters = q($) ? $.__numberFormatters : void 0;
    const A = Sm(v);
    return s && Ai(A), A;
  })(), Sn($, f.value, u.value);
  function ve() {
    return [
      f.value,
      u.value,
      m.value,
      _.value,
      E.value
    ];
  }
  const X = He({
    get: () => f.value,
    set: (v) => {
      f.value = v, $.locale = f.value;
    }
  }), de = He({
    get: () => u.value,
    set: (v) => {
      u.value = v, $.fallbackLocale = u.value, Sn($, f.value, v);
    }
  }), Mt = He(() => m.value), qt = /* @__PURE__ */ He(() => _.value), me = /* @__PURE__ */ He(() => E.value);
  function ne() {
    return ce(y) ? y : null;
  }
  function Z(v) {
    y = v, $.postTranslation = v;
  }
  function Ke() {
    return N;
  }
  function Et(v) {
    v !== null && (b = Fi(v)), N = v, $.missing = b;
  }
  const Ee = (v, A, Y, B, le, fe) => {
    ve();
    let _e;
    try {
      __INTLIFY_PROD_DEVTOOLS__, s || ($.fallbackContext = n ? Am() : void 0), _e = v($);
    } finally {
      __INTLIFY_PROD_DEVTOOLS__, s || ($.fallbackContext = void 0);
    }
    if (Y !== "translate exists" && // for not `te` (e.g `t`)
    ye(_e) && _e === Hr || Y === "translate exists" && !_e) {
      const [Le, nn] = A();
      return n && k ? B(n) : le(Le);
    } else {
      if (fe(_e))
        return _e;
      throw qe(Be.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Oe(...v) {
    return Ee((A) => Reflect.apply(Li, null, [A, ...v]), () => Ns(...v), "translate", (A) => Reflect.apply(A.t, A, [...v]), (A) => A, (A) => H(A));
  }
  function Jt(...v) {
    const [A, Y, B] = v;
    if (B && !J(B))
      throw qe(Be.INVALID_ARGUMENT);
    return Oe(A, Y, Ne({ resolvedMessage: !0 }, B || {}));
  }
  function Qt(...v) {
    return Ee((A) => Reflect.apply(Ii, null, [A, ...v]), () => Cs(...v), "datetime format", (A) => Reflect.apply(A.d, A, [...v]), () => Ti, (A) => H(A));
  }
  function En(...v) {
    return Ee((A) => Reflect.apply(Pi, null, [A, ...v]), () => Ls(...v), "number format", (A) => Reflect.apply(A.n, A, [...v]), () => Ti, (A) => H(A));
  }
  function ot(v) {
    return v.map((A) => H(A) || ye(A) || oe(A) ? Ri(String(A)) : A);
  }
  const Ft = {
    normalize: ot,
    interpolate: (v) => v,
    type: "vnode"
  };
  function Zt(...v) {
    return Ee(
      (A) => {
        let Y;
        const B = A;
        try {
          B.processor = Ft, Y = Reflect.apply(Li, null, [B, ...v]);
        } finally {
          B.processor = null;
        }
        return Y;
      },
      () => Ns(...v),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (A) => A[Is](...v),
      (A) => [Ri(A)],
      (A) => he(A)
    );
  }
  function Je(...v) {
    return Ee(
      (A) => Reflect.apply(Pi, null, [A, ...v]),
      () => Ls(...v),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (A) => A[Ps](...v),
      Mi,
      (A) => H(A) || he(A)
    );
  }
  function en(...v) {
    return Ee(
      (A) => Reflect.apply(Ii, null, [A, ...v]),
      () => Cs(...v),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (A) => A[xs](...v),
      Mi,
      (A) => H(A) || he(A)
    );
  }
  function tn(v) {
    W = v, $.pluralRules = W;
  }
  function p(v, A) {
    return Ee(() => {
      if (!v)
        return !1;
      const Y = H(A) ? A : f.value, B = M(Y), le = $.messageResolver(B, v);
      return o ? le != null : _n(le) || Ve(le) || H(le);
    }, () => [v], "translate exists", (Y) => Reflect.apply(Y.te, Y, [v, A]), Wm, (Y) => oe(Y));
  }
  function g(v) {
    let A = null;
    const Y = Rl($, u.value, f.value);
    for (let B = 0; B < Y.length; B++) {
      const le = m.value[Y[B]] || {}, fe = $.messageResolver(le, v);
      if (fe != null) {
        A = fe;
        break;
      }
    }
    return A;
  }
  function O(v) {
    const A = g(v);
    return A ?? (n ? n.tm(v) || {} : {});
  }
  function M(v) {
    return m.value[v] || {};
  }
  function x(v, A) {
    if (a) {
      const Y = { [v]: A };
      for (const B in Y)
        Or(Y, B) && Hn(Y[B]);
      A = Y[v];
    }
    m.value[v] = A, $.messages = m.value;
  }
  function w(v, A) {
    m.value[v] = m.value[v] || {};
    const Y = { [v]: A };
    if (a)
      for (const B in Y)
        Or(Y, B) && Hn(Y[B]);
    A = Y[v], cr(A, m.value[v]), $.messages = m.value;
  }
  function j(v) {
    return _.value[v] || {};
  }
  function c(v, A) {
    _.value[v] = A, $.datetimeFormats = _.value, xi($, v, A);
  }
  function d(v, A) {
    _.value[v] = Ne(_.value[v] || {}, A), $.datetimeFormats = _.value, xi($, v, A);
  }
  function h(v) {
    return E.value[v] || {};
  }
  function P(v, A) {
    E.value[v] = A, $.numberFormats = E.value, wi($, v, A);
  }
  function D(v, A) {
    E.value[v] = Ne(E.value[v] || {}, A), $.numberFormats = E.value, wi($, v, A);
  }
  Di++, n && Er && (Bt(n.locale, (v) => {
    l && (f.value = v, $.locale = v, Sn($, f.value, u.value));
  }), Bt(n.fallbackLocale, (v) => {
    l && (u.value = v, $.fallbackLocale = v, Sn($, f.value, u.value));
  }));
  const R = {
    id: Di,
    locale: X,
    fallbackLocale: de,
    get inheritLocale() {
      return l;
    },
    set inheritLocale(v) {
      l = v, v && n && (f.value = n.locale.value, u.value = n.fallbackLocale.value, Sn($, f.value, u.value));
    },
    get availableLocales() {
      return Object.keys(m.value).sort();
    },
    messages: Mt,
    get modifiers() {
      return U;
    },
    get pluralRules() {
      return W || {};
    },
    get isGlobal() {
      return s;
    },
    get missingWarn() {
      return C;
    },
    set missingWarn(v) {
      C = v, $.missingWarn = C;
    },
    get fallbackWarn() {
      return S;
    },
    set fallbackWarn(v) {
      S = v, $.fallbackWarn = S;
    },
    get fallbackRoot() {
      return k;
    },
    set fallbackRoot(v) {
      k = v;
    },
    get fallbackFormat() {
      return T;
    },
    set fallbackFormat(v) {
      T = v, $.fallbackFormat = T;
    },
    get warnHtmlMessage() {
      return L;
    },
    set warnHtmlMessage(v) {
      L = v, $.warnHtmlMessage = v;
    },
    get escapeParameter() {
      return I;
    },
    set escapeParameter(v) {
      I = v, $.escapeParameter = v;
    },
    t: Oe,
    getLocaleMessage: M,
    setLocaleMessage: x,
    mergeLocaleMessage: w,
    getPostTranslationHandler: ne,
    setPostTranslationHandler: Z,
    getMissingHandler: Ke,
    setMissingHandler: Et,
    [Um]: tn
  };
  return R.datetimeFormats = qt, R.numberFormats = me, R.rt = Jt, R.te = p, R.tm = O, R.d = Qt, R.n = En, R.getDateTimeFormat = j, R.setDateTimeFormat = c, R.mergeDateTimeFormat = d, R.getNumberFormat = h, R.setNumberFormat = P, R.mergeNumberFormat = D, R[jm] = r, R[Is] = Zt, R[xs] = en, R[Ps] = Je, R;
}
const Aa = {
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
function Vm({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, s) => [
    ...r,
    // prettier-ignore
    ...s.type === Ge ? s.children : [s]
  ], []) : t.reduce((n, r) => {
    const s = e[r];
    return s && (n[r] = s()), n;
  }, {});
}
function Gl(e) {
  return Ge;
}
const Ym = /* @__PURE__ */ zn({
  /* eslint-disable */
  name: "i18n-t",
  props: Ne({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (e) => ye(e) || !isNaN(e)
    }
  }, Aa),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const { slots: n, attrs: r } = t, s = e.i18n || Sa({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const a = Object.keys(n).filter((m) => m !== "_"), i = {};
      e.locale && (i.locale = e.locale), e.plural !== void 0 && (i.plural = H(e.plural) ? +e.plural : e.plural);
      const o = Vm(t, a), l = s[Is](e.keypath, o, i), f = Ne({}, r), u = H(e.tag) || J(e.tag) ? e.tag : Gl();
      return ba(u, f, l);
    };
  }
}), Ui = Ym;
function Bm(e) {
  return he(e) && !H(e[0]);
}
function Xl(e, t, n, r) {
  const { slots: s, attrs: a } = t;
  return () => {
    const i = { part: !0 };
    let o = {};
    e.locale && (i.locale = e.locale), H(e.format) ? i.key = e.format : J(e.format) && (H(e.format.key) && (i.key = e.format.key), o = Object.keys(e.format).reduce((_, E) => n.includes(E) ? Ne({}, _, { [E]: e.format[E] }) : _, {}));
    const l = r(e.value, i, o);
    let f = [i.key];
    he(l) ? f = l.map((_, E) => {
      const C = s[_.type], S = C ? C({ [_.type]: _.value, index: E, parts: l }) : [_.value];
      return Bm(S) && (S[0].key = `${_.type}-${E}`), S;
    }) : H(l) && (f = [l]);
    const u = Ne({}, a), m = H(e.tag) || J(e.tag) ? e.tag : Gl();
    return ba(m, u, f);
  };
}
const Km = /* @__PURE__ */ zn({
  /* eslint-disable */
  name: "i18n-n",
  props: Ne({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, Aa),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || Sa({
      useScope: e.scope,
      __useComponent: !0
    });
    return Xl(e, t, Hl, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Ps](...r)
    ));
  }
}), ji = Km, zm = /* @__PURE__ */ zn({
  /* eslint-disable */
  name: "i18n-d",
  props: Ne({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, Aa),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || Sa({
      useScope: e.scope,
      __useComponent: !0
    });
    return Xl(e, t, Wl, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[xs](...r)
    ));
  }
}), $i = zm;
function Gm(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function Xm(e) {
  const t = (i) => {
    const { instance: o, modifiers: l, value: f } = i;
    if (!o || !o.$)
      throw qe(Be.UNEXPECTED_ERROR);
    const u = Gm(e, o.$), m = Wi(f);
    return [
      Reflect.apply(u.t, u, [...Hi(m)]),
      u
    ];
  };
  return {
    created: (i, o) => {
      const [l, f] = t(o);
      Er && e.global === f && (i.__i18nWatcher = Bt(f.locale, () => {
        o.instance && o.instance.$forceUpdate();
      })), i.__composer = f, i.textContent = l;
    },
    unmounted: (i) => {
      Er && i.__i18nWatcher && (i.__i18nWatcher(), i.__i18nWatcher = void 0, delete i.__i18nWatcher), i.__composer && (i.__composer = void 0, delete i.__composer);
    },
    beforeUpdate: (i, { value: o }) => {
      if (i.__composer) {
        const l = i.__composer, f = Wi(o);
        i.textContent = Reflect.apply(l.t, l, [
          ...Hi(f)
        ]);
      }
    },
    getSSRProps: (i) => {
      const [o] = t(i);
      return { textContent: o };
    }
  };
}
function Wi(e) {
  if (H(e))
    return { path: e };
  if (q(e)) {
    if (!("path" in e))
      throw qe(Be.REQUIRED_VALUE, "path");
    return e;
  } else
    throw qe(Be.INVALID_VALUE);
}
function Hi(e) {
  const { path: t, locale: n, args: r, choice: s, plural: a } = e, i = {}, o = r || {};
  return H(n) && (i.locale = n), ye(s) && (i.plural = s), ye(a) && (i.plural = a), [t, o, i];
}
function qm(e, t, ...n) {
  const r = q(n[0]) ? n[0] : {}, s = !!r.useI18nComponentName;
  (oe(r.globalInstall) ? r.globalInstall : !0) && ([s ? "i18n" : Ui.name, "I18nT"].forEach((i) => e.component(i, Ui)), [ji.name, "I18nN"].forEach((i) => e.component(i, ji)), [$i.name, "I18nD"].forEach((i) => e.component(i, $i))), e.directive("t", Xm(t));
}
const Jm = /* @__PURE__ */ Rt("global-vue-i18n");
function Qm(e = {}, t) {
  const n = oe(e.globalInjection) ? e.globalInjection : !0, r = !0, s = /* @__PURE__ */ new Map(), [a, i] = Zm(e), o = /* @__PURE__ */ Rt("");
  function l(m) {
    return s.get(m) || null;
  }
  function f(m, _) {
    s.set(m, _);
  }
  function u(m) {
    s.delete(m);
  }
  {
    const m = {
      // mode
      get mode() {
        return "composition";
      },
      // allowComposition
      get allowComposition() {
        return r;
      },
      // install plugin
      async install(_, ...E) {
        if (_.__VUE_I18N_SYMBOL__ = o, _.provide(_.__VUE_I18N_SYMBOL__, m), q(E[0])) {
          const k = E[0];
          m.__composerExtend = k.__composerExtend, m.__vueI18nExtend = k.__vueI18nExtend;
        }
        let C = null;
        n && (C = op(_, m.global)), qm(_, m, ...E);
        const S = _.unmount;
        _.unmount = () => {
          C && C(), m.dispose(), S();
        };
      },
      // global accessor
      get global() {
        return i;
      },
      dispose() {
        a.stop();
      },
      // @internal
      __instances: s,
      // @internal
      __getInstance: l,
      // @internal
      __setInstance: f,
      // @internal
      __deleteInstance: u
    };
    return m;
  }
}
function Sa(e = {}) {
  const t = Ur();
  if (t == null)
    throw qe(Be.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw qe(Be.NOT_INSTALLED);
  const n = ep(t), r = np(n), s = Kl(t), a = tp(e, s);
  if (a === "global")
    return $m(r, e, s), r;
  if (a === "parent") {
    let l = rp(n, t, e.__useComponent);
    return l == null && (l = r), l;
  }
  const i = n;
  let o = i.__getInstance(t);
  if (o == null) {
    const l = Ne({}, e);
    "__i18n" in s && (l.__i18n = s.__i18n), r && (l.__root = r), o = zl(l), i.__composerExtend && (o[ws] = i.__composerExtend(o)), ap(i, t, o), i.__setInstance(t, o);
  }
  return o;
}
function Zm(e, t, n) {
  const r = Bc();
  {
    const s = r.run(() => zl(e));
    if (s == null)
      throw qe(Be.UNEXPECTED_ERROR);
    return [r, s];
  }
}
function ep(e) {
  {
    const t = Rn(e.isCE ? Jm : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw qe(e.isCE ? Be.NOT_INSTALLED_WITH_PROVIDE : Be.UNEXPECTED_ERROR);
    return t;
  }
}
function tp(e, t) {
  return $r(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function np(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function rp(e, t, n = !1) {
  let r = null;
  const s = t.root;
  let a = sp(t, n);
  for (; a != null; ) {
    const i = e;
    if (e.mode === "composition" && (r = i.__getInstance(a)), r != null || s === a)
      break;
    a = a.parent;
  }
  return r;
}
function sp(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function ap(e, t, n) {
  Qo(() => {
  }, t), ma(() => {
    const r = n;
    e.__deleteInstance(t);
    const s = r[ws];
    s && (s(), delete r[ws]);
  }, t);
}
const ip = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], Vi = ["t", "rt", "d", "n", "tm", "te"];
function op(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return ip.forEach((s) => {
    const a = Object.getOwnPropertyDescriptor(t, s);
    if (!a)
      throw qe(Be.UNEXPECTED_ERROR);
    const i = Te(a.value) ? {
      get() {
        return a.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(o) {
        a.value.value = o;
      }
    } : {
      get() {
        return a.get && a.get();
      }
    };
    Object.defineProperty(n, s, i);
  }), e.config.globalProperties.$i18n = n, Vi.forEach((s) => {
    const a = Object.getOwnPropertyDescriptor(t, s);
    if (!a || !a.value)
      throw qe(Be.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${s}`, a);
  }), () => {
    delete e.config.globalProperties.$i18n, Vi.forEach((s) => {
      delete e.config.globalProperties[`$${s}`];
    });
  };
}
Fm();
ym(Pm);
vm(em);
Em(Rl);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const e = ya();
  e.__INTLIFY__ = !0, cm(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
/*!
* Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
* License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
* Copyright 2024 Fonticons, Inc.
*/
function lp(e, t, n) {
  return (t = fp(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Yi(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function F(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yi(Object(n), !0).forEach(function(r) {
      lp(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Yi(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function cp(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function fp(e) {
  var t = cp(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const Bi = () => {
};
let Na = {}, ql = {}, Jl = null, Ql = {
  mark: Bi,
  measure: Bi
};
try {
  typeof window < "u" && (Na = window), typeof document < "u" && (ql = document), typeof MutationObserver < "u" && (Jl = MutationObserver), typeof performance < "u" && (Ql = performance);
} catch {
}
const {
  userAgent: Ki = ""
} = Na.navigator || {}, Nt = Na, se = ql, zi = Jl, rr = Ql;
Nt.document;
const vt = !!se.documentElement && !!se.head && typeof se.addEventListener == "function" && typeof se.createElement == "function", Zl = ~Ki.indexOf("MSIE") || ~Ki.indexOf("Trident/");
var up = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, dp = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, ec = {
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
    fab: "brands",
    "fa-brands": "brands"
  },
  duotone: {
    fa: "solid",
    fad: "solid",
    "fa-solid": "solid",
    "fa-duotone": "solid",
    fadr: "regular",
    "fa-regular": "regular",
    fadl: "light",
    "fa-light": "light",
    fadt: "thin",
    "fa-thin": "thin"
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
    "fa-solid": "solid",
    fasdr: "regular",
    "fa-regular": "regular",
    fasdl: "light",
    "fa-light": "light",
    fasdt: "thin",
    "fa-thin": "thin"
  }
}, mp = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, tc = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Ce = "classic", Vr = "duotone", pp = "sharp", hp = "sharp-duotone", nc = [Ce, Vr, pp, hp], gp = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  duotone: {
    900: "fad",
    400: "fadr",
    300: "fadl",
    100: "fadt"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds",
    400: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, _p = {
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
    900: "fad",
    400: "fadr",
    normal: "fadr",
    300: "fadl",
    100: "fadt"
  },
  "Font Awesome 6 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 6 Sharp Duotone": {
    900: "fasds",
    400: "fasdr",
    normal: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, bp = /* @__PURE__ */ new Map([["classic", {
  defaultShortPrefixId: "fas",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin", "brands"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp", {
  defaultShortPrefixId: "fass",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["duotone", {
  defaultShortPrefixId: "fad",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp-duotone", {
  defaultShortPrefixId: "fasds",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}]]), yp = {
  classic: {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    brands: "fab"
  },
  duotone: {
    solid: "fad",
    regular: "fadr",
    light: "fadl",
    thin: "fadt"
  },
  sharp: {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
  },
  "sharp-duotone": {
    solid: "fasds",
    regular: "fasdr",
    light: "fasdl",
    thin: "fasdt"
  }
}, vp = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Gi = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, Ep = ["kit"], Tp = {
  kit: {
    "fa-kit": "fak"
  },
  "kit-duotone": {
    "fa-kit-duotone": "fakd"
  }
}, Op = ["fak", "fakd"], Ap = {
  kit: {
    fak: "fa-kit"
  },
  "kit-duotone": {
    fakd: "fa-kit-duotone"
  }
}, Xi = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, sr = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Sp = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Np = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Cp = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, Lp = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  duotone: {
    "fa-regular": "fadr",
    "fa-light": "fadl",
    "fa-thin": "fadt"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds",
    "fa-regular": "fasdr",
    "fa-light": "fasdl",
    "fa-thin": "fasdt"
  }
}, Ip = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, Rs = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  duotone: {
    fadr: "fa-regular",
    fadl: "fa-light",
    fadt: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid",
    fasdr: "fa-regular",
    fasdl: "fa-light",
    fasdt: "fa-thin"
  }
}, xp = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], ks = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...Sp, ...xp], Pp = ["solid", "regular", "light", "thin", "duotone", "brands"], rc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], wp = rc.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Rp = [...Object.keys(Ip), ...Pp, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", sr.GROUP, sr.SWAP_OPACITY, sr.PRIMARY, sr.SECONDARY].concat(rc.map((e) => "".concat(e, "x"))).concat(wp.map((e) => "w-".concat(e))), kp = {
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
};
const _t = "___FONT_AWESOME___", Ms = 16, sc = "fa", ac = "svg-inline--fa", Gt = "data-fa-i2svg", Ds = "data-fa-pseudo-element", Mp = "data-fa-pseudo-element-pending", Ca = "data-prefix", La = "data-icon", qi = "fontawesome-i2svg", Dp = "async", Fp = ["HTML", "HEAD", "STYLE", "SCRIPT"], ic = (() => {
  try {
    return !0;
  } catch {
    return !1;
  }
})();
function qn(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[Ce];
    }
  });
}
const oc = F({}, ec);
oc[Ce] = F(F(F(F({}, {
  "fa-duotone": "duotone"
}), ec[Ce]), Gi.kit), Gi["kit-duotone"]);
const Up = qn(oc), Fs = F({}, yp);
Fs[Ce] = F(F(F(F({}, {
  duotone: "fad"
}), Fs[Ce]), Xi.kit), Xi["kit-duotone"]);
const Ji = qn(Fs), Us = F({}, Rs);
Us[Ce] = F(F({}, Us[Ce]), Ap.kit);
const Ia = qn(Us), js = F({}, Lp);
js[Ce] = F(F({}, js[Ce]), Tp.kit);
qn(js);
const jp = up, lc = "fa-layers-text", $p = dp, Wp = F({}, gp);
qn(Wp);
const Hp = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], ls = mp, Vp = [...Ep, ...Rp], Mn = Nt.FontAwesomeConfig || {};
function Yp(e) {
  var t = se.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function Bp(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
se && typeof se.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const s = Bp(Yp(n));
  s != null && (Mn[r] = s);
});
const cc = {
  styleDefault: "solid",
  familyDefault: Ce,
  cssPrefix: sc,
  replacementClass: ac,
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
Mn.familyPrefix && (Mn.cssPrefix = Mn.familyPrefix);
const bn = F(F({}, cc), Mn);
bn.autoReplaceSvg || (bn.observeMutations = !1);
const V = {};
Object.keys(cc).forEach((e) => {
  Object.defineProperty(V, e, {
    enumerable: !0,
    set: function(t) {
      bn[e] = t, Dn.forEach((n) => n(V));
    },
    get: function() {
      return bn[e];
    }
  });
});
Object.defineProperty(V, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    bn.cssPrefix = e, Dn.forEach((t) => t(V));
  },
  get: function() {
    return bn.cssPrefix;
  }
});
Nt.FontAwesomeConfig = V;
const Dn = [];
function Kp(e) {
  return Dn.push(e), () => {
    Dn.splice(Dn.indexOf(e), 1);
  };
}
const Ot = Ms, rt = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function zp(e) {
  if (!e || !vt)
    return;
  const t = se.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = se.head.childNodes;
  let r = null;
  for (let s = n.length - 1; s > -1; s--) {
    const a = n[s], i = (a.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(i) > -1 && (r = a);
  }
  return se.head.insertBefore(t, r), e;
}
const Gp = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Vn() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += Gp[Math.random() * 62 | 0];
  return t;
}
function vn(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function xa(e) {
  return e.classList ? vn(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function fc(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Xp(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(fc(e[n]), '" '), "").trim();
}
function Yr(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function Pa(e) {
  return e.size !== rt.size || e.x !== rt.x || e.y !== rt.y || e.rotate !== rt.rotate || e.flipX || e.flipY;
}
function qp(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const s = {
    transform: "translate(".concat(n / 2, " 256)")
  }, a = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), i = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), o = "rotate(".concat(t.rotate, " 0 0)"), l = {
    transform: "".concat(a, " ").concat(i, " ").concat(o)
  }, f = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: s,
    inner: l,
    path: f
  };
}
function Jp(e) {
  let {
    transform: t,
    width: n = Ms,
    height: r = Ms,
    startCentered: s = !1
  } = e, a = "";
  return s && Zl ? a += "translate(".concat(t.x / Ot - n / 2, "em, ").concat(t.y / Ot - r / 2, "em) ") : s ? a += "translate(calc(-50% + ".concat(t.x / Ot, "em), calc(-50% + ").concat(t.y / Ot, "em)) ") : a += "translate(".concat(t.x / Ot, "em, ").concat(t.y / Ot, "em) "), a += "scale(".concat(t.size / Ot * (t.flipX ? -1 : 1), ", ").concat(t.size / Ot * (t.flipY ? -1 : 1), ") "), a += "rotate(".concat(t.rotate, "deg) "), a;
}
var Qp = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
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
}`;
function uc() {
  const e = sc, t = ac, n = V.cssPrefix, r = V.replacementClass;
  let s = Qp;
  if (n !== e || r !== t) {
    const a = new RegExp("\\.".concat(e, "\\-"), "g"), i = new RegExp("\\--".concat(e, "\\-"), "g"), o = new RegExp("\\.".concat(t), "g");
    s = s.replace(a, ".".concat(n, "-")).replace(i, "--".concat(n, "-")).replace(o, ".".concat(r));
  }
  return s;
}
let Qi = !1;
function cs() {
  V.autoAddCss && !Qi && (zp(uc()), Qi = !0);
}
var Zp = {
  mixout() {
    return {
      dom: {
        css: uc,
        insertCss: cs
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        cs();
      },
      beforeI2svg() {
        cs();
      }
    };
  }
};
const bt = Nt || {};
bt[_t] || (bt[_t] = {});
bt[_t].styles || (bt[_t].styles = {});
bt[_t].hooks || (bt[_t].hooks = {});
bt[_t].shims || (bt[_t].shims = []);
var st = bt[_t];
const dc = [], mc = function() {
  se.removeEventListener("DOMContentLoaded", mc), Nr = 1, dc.map((e) => e());
};
let Nr = !1;
vt && (Nr = (se.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(se.readyState), Nr || se.addEventListener("DOMContentLoaded", mc));
function eh(e) {
  vt && (Nr ? setTimeout(e, 0) : dc.push(e));
}
function Jn(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? fc(e) : "<".concat(t, " ").concat(Xp(n), ">").concat(r.map(Jn).join(""), "</").concat(t, ">");
}
function Zi(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var fs = function(t, n, r, s) {
  var a = Object.keys(t), i = a.length, o = n, l, f, u;
  for (r === void 0 ? (l = 1, u = t[a[0]]) : (l = 0, u = r); l < i; l++)
    f = a[l], u = o(u, t[f], f, t);
  return u;
};
function th(e) {
  const t = [];
  let n = 0;
  const r = e.length;
  for (; n < r; ) {
    const s = e.charCodeAt(n++);
    if (s >= 55296 && s <= 56319 && n < r) {
      const a = e.charCodeAt(n++);
      (a & 64512) == 56320 ? t.push(((s & 1023) << 10) + (a & 1023) + 65536) : (t.push(s), n--);
    } else
      t.push(s);
  }
  return t;
}
function $s(e) {
  const t = th(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function nh(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), s;
  return r >= 55296 && r <= 56319 && n > t + 1 && (s = e.charCodeAt(t + 1), s >= 56320 && s <= 57343) ? (r - 55296) * 1024 + s - 56320 + 65536 : r;
}
function eo(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function Ws(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, s = eo(t);
  typeof st.hooks.addPack == "function" && !r ? st.hooks.addPack(e, eo(t)) : st.styles[e] = F(F({}, st.styles[e] || {}), s), e === "fas" && Ws("fa", t);
}
const {
  styles: Yn,
  shims: rh
} = st, pc = Object.keys(Ia), sh = pc.reduce((e, t) => (e[t] = Object.keys(Ia[t]), e), {});
let wa = null, hc = {}, gc = {}, _c = {}, bc = {}, yc = {};
function ah(e) {
  return ~Vp.indexOf(e);
}
function ih(e, t) {
  const n = t.split("-"), r = n[0], s = n.slice(1).join("-");
  return r === e && s !== "" && !ah(s) ? s : null;
}
const vc = () => {
  const e = (r) => fs(Yn, (s, a, i) => (s[i] = fs(a, r, {}), s), {});
  hc = e((r, s, a) => (s[3] && (r[s[3]] = a), s[2] && s[2].filter((o) => typeof o == "number").forEach((o) => {
    r[o.toString(16)] = a;
  }), r)), gc = e((r, s, a) => (r[a] = a, s[2] && s[2].filter((o) => typeof o == "string").forEach((o) => {
    r[o] = a;
  }), r)), yc = e((r, s, a) => {
    const i = s[2];
    return r[a] = a, i.forEach((o) => {
      r[o] = a;
    }), r;
  });
  const t = "far" in Yn || V.autoFetchSvg, n = fs(rh, (r, s) => {
    const a = s[0];
    let i = s[1];
    const o = s[2];
    return i === "far" && !t && (i = "fas"), typeof a == "string" && (r.names[a] = {
      prefix: i,
      iconName: o
    }), typeof a == "number" && (r.unicodes[a.toString(16)] = {
      prefix: i,
      iconName: o
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  _c = n.names, bc = n.unicodes, wa = Br(V.styleDefault, {
    family: V.familyDefault
  });
};
Kp((e) => {
  wa = Br(e.styleDefault, {
    family: V.familyDefault
  });
});
vc();
function Ra(e, t) {
  return (hc[e] || {})[t];
}
function oh(e, t) {
  return (gc[e] || {})[t];
}
function Vt(e, t) {
  return (yc[e] || {})[t];
}
function Ec(e) {
  return _c[e] || {
    prefix: null,
    iconName: null
  };
}
function lh(e) {
  const t = bc[e], n = Ra("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Ct() {
  return wa;
}
const Tc = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function ch(e) {
  let t = Ce;
  const n = pc.reduce((r, s) => (r[s] = "".concat(V.cssPrefix, "-").concat(s), r), {});
  return nc.forEach((r) => {
    (e.includes(n[r]) || e.some((s) => sh[r].includes(s))) && (t = r);
  }), t;
}
function Br(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = Ce
  } = t, r = Up[n][e];
  if (n === Vr && !e)
    return "fad";
  const s = Ji[n][e] || Ji[n][r], a = e in st.styles ? e : null;
  return s || a || null;
}
function fh(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const s = ih(V.cssPrefix, r);
    s ? n = s : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function to(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function Kr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const s = ks.concat(Np), a = to(e.filter((m) => s.includes(m))), i = to(e.filter((m) => !ks.includes(m))), o = a.filter((m) => (r = m, !tc.includes(m))), [l = null] = o, f = ch(a), u = F(F({}, fh(i)), {}, {
    prefix: Br(l, {
      family: f
    })
  });
  return F(F(F({}, u), ph({
    values: e,
    family: f,
    styles: Yn,
    config: V,
    canonical: u,
    givenPrefix: r
  })), uh(n, r, u));
}
function uh(e, t, n) {
  let {
    prefix: r,
    iconName: s
  } = n;
  if (e || !r || !s)
    return {
      prefix: r,
      iconName: s
    };
  const a = t === "fa" ? Ec(s) : {}, i = Vt(r, s);
  return s = a.iconName || i || s, r = a.prefix || r, r === "far" && !Yn.far && Yn.fas && !V.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: s
  };
}
const dh = nc.filter((e) => e !== Ce || e !== Vr), mh = Object.keys(Rs).filter((e) => e !== Ce).map((e) => Object.keys(Rs[e])).flat();
function ph(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: s = "",
    styles: a = {},
    config: i = {}
  } = e, o = n === Vr, l = t.includes("fa-duotone") || t.includes("fad"), f = i.familyDefault === "duotone", u = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!o && (l || f || u) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && dh.includes(n) && (Object.keys(a).find((_) => mh.includes(_)) || i.autoFetchSvg)) {
    const _ = bp.get(n).defaultShortPrefixId;
    r.prefix = _, r.iconName = Vt(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || s === "fa") && (r.prefix = Ct() || "fas"), r;
}
class hh {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const s = n.reduce(this._pullDefinitions, {});
    Object.keys(s).forEach((a) => {
      this.definitions[a] = F(F({}, this.definitions[a] || {}), s[a]), Ws(a, s[a]);
      const i = Ia[Ce][a];
      i && Ws(i, s[a]), vc();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, n) {
    const r = n.prefix && n.iconName && n.icon ? {
      0: n
    } : n;
    return Object.keys(r).map((s) => {
      const {
        prefix: a,
        iconName: i,
        icon: o
      } = r[s], l = o[2];
      t[a] || (t[a] = {}), l.length > 0 && l.forEach((f) => {
        typeof f == "string" && (t[a][f] = o);
      }), t[a][i] = o;
    }), t;
  }
}
let no = [], on = {};
const mn = {}, gh = Object.keys(mn);
function _h(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return no = e, on = {}, Object.keys(mn).forEach((r) => {
    gh.indexOf(r) === -1 && delete mn[r];
  }), no.forEach((r) => {
    const s = r.mixout ? r.mixout() : {};
    if (Object.keys(s).forEach((a) => {
      typeof s[a] == "function" && (n[a] = s[a]), typeof s[a] == "object" && Object.keys(s[a]).forEach((i) => {
        n[a] || (n[a] = {}), n[a][i] = s[a][i];
      });
    }), r.hooks) {
      const a = r.hooks();
      Object.keys(a).forEach((i) => {
        on[i] || (on[i] = []), on[i].push(a[i]);
      });
    }
    r.provides && r.provides(mn);
  }), n;
}
function Hs(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    r[s - 2] = arguments[s];
  return (on[e] || []).forEach((i) => {
    t = i.apply(null, [t, ...r]);
  }), t;
}
function Xt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (on[e] || []).forEach((a) => {
    a.apply(null, n);
  });
}
function Lt() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return mn[e] ? mn[e].apply(null, t) : void 0;
}
function Vs(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || Ct();
  if (t)
    return t = Vt(n, t) || t, Zi(Oc.definitions, n, t) || Zi(st.styles, n, t);
}
const Oc = new hh(), bh = () => {
  V.autoReplaceSvg = !1, V.observeMutations = !1, Xt("noAuto");
}, yh = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return vt ? (Xt("beforeI2svg", e), Lt("pseudoElements2svg", e), Lt("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    V.autoReplaceSvg === !1 && (V.autoReplaceSvg = !0), V.observeMutations = !0, eh(() => {
      Eh({
        autoReplaceSvgRoot: t
      }), Xt("watch", e);
    });
  }
}, vh = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: Vt(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Br(e[0]);
      return {
        prefix: n,
        iconName: Vt(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(V.cssPrefix, "-")) > -1 || e.match(jp))) {
      const t = Kr(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || Ct(),
        iconName: Vt(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = Ct();
      return {
        prefix: t,
        iconName: Vt(t, e) || e
      };
    }
  }
}, We = {
  noAuto: bh,
  config: V,
  dom: yh,
  parse: vh,
  library: Oc,
  findIconDefinition: Vs,
  toHtml: Jn
}, Eh = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = se
  } = e;
  (Object.keys(st.styles).length > 0 || V.autoFetchSvg) && vt && V.autoReplaceSvg && We.dom.i2svg({
    node: t
  });
};
function zr(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => Jn(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!vt) return;
      const n = se.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function Th(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: s,
    styles: a,
    transform: i
  } = e;
  if (Pa(i) && n.found && !r.found) {
    const {
      width: o,
      height: l
    } = n, f = {
      x: o / l / 2,
      y: 0.5
    };
    s.style = Yr(F(F({}, a), {}, {
      "transform-origin": "".concat(f.x + i.x / 16, "em ").concat(f.y + i.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: s,
    children: t
  }];
}
function Oh(e) {
  let {
    prefix: t,
    iconName: n,
    children: r,
    attributes: s,
    symbol: a
  } = e;
  const i = a === !0 ? "".concat(t, "-").concat(V.cssPrefix, "-").concat(n) : a;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: F(F({}, s), {}, {
        id: i
      }),
      children: r
    }]
  }];
}
function ka(e) {
  const {
    icons: {
      main: t,
      mask: n
    },
    prefix: r,
    iconName: s,
    transform: a,
    symbol: i,
    title: o,
    maskId: l,
    titleId: f,
    extra: u,
    watchable: m = !1
  } = e, {
    width: _,
    height: E
  } = n.found ? n : t, C = Op.includes(r), S = [V.replacementClass, s ? "".concat(V.cssPrefix, "-").concat(s) : ""].filter((L) => u.classes.indexOf(L) === -1).filter((L) => L !== "" || !!L).concat(u.classes).join(" ");
  let k = {
    children: [],
    attributes: F(F({}, u.attributes), {}, {
      "data-prefix": r,
      "data-icon": s,
      class: S,
      role: u.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(_, " ").concat(E)
    })
  };
  const T = C && !~u.classes.indexOf("fa-fw") ? {
    width: "".concat(_ / E * 16 * 0.0625, "em")
  } : {};
  m && (k.attributes[Gt] = ""), o && (k.children.push({
    tag: "title",
    attributes: {
      id: k.attributes["aria-labelledby"] || "title-".concat(f || Vn())
    },
    children: [o]
  }), delete k.attributes.title);
  const N = F(F({}, k), {}, {
    prefix: r,
    iconName: s,
    main: t,
    mask: n,
    maskId: l,
    transform: a,
    symbol: i,
    styles: F(F({}, T), u.styles)
  }), {
    children: b,
    attributes: y
  } = n.found && t.found ? Lt("generateAbstractMask", N) || {
    children: [],
    attributes: {}
  } : Lt("generateAbstractIcon", N) || {
    children: [],
    attributes: {}
  };
  return N.children = b, N.attributes = y, i ? Oh(N) : Th(N);
}
function ro(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: s,
    title: a,
    extra: i,
    watchable: o = !1
  } = e, l = F(F(F({}, i.attributes), a ? {
    title: a
  } : {}), {}, {
    class: i.classes.join(" ")
  });
  o && (l[Gt] = "");
  const f = F({}, i.styles);
  Pa(s) && (f.transform = Jp({
    transform: s,
    startCentered: !0,
    width: n,
    height: r
  }), f["-webkit-transform"] = f.transform);
  const u = Yr(f);
  u.length > 0 && (l.style = u);
  const m = [];
  return m.push({
    tag: "span",
    attributes: l,
    children: [t]
  }), a && m.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [a]
  }), m;
}
function Ah(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, s = F(F(F({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), a = Yr(r.styles);
  a.length > 0 && (s.style = a);
  const i = [];
  return i.push({
    tag: "span",
    attributes: s,
    children: [t]
  }), n && i.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), i;
}
const {
  styles: us
} = st;
function Ys(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let s = null;
  return Array.isArray(r) ? s = {
    tag: "g",
    attributes: {
      class: "".concat(V.cssPrefix, "-").concat(ls.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(V.cssPrefix, "-").concat(ls.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(V.cssPrefix, "-").concat(ls.PRIMARY),
        fill: "currentColor",
        d: r[1]
      }
    }]
  } : s = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: r
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: s
  };
}
const Sh = {
  found: !1,
  width: 512,
  height: 512
};
function Nh(e, t) {
  !ic && !V.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Bs(e, t) {
  let n = t;
  return t === "fa" && V.styleDefault !== null && (t = Ct()), new Promise((r, s) => {
    if (n === "fa") {
      const a = Ec(e) || {};
      e = a.iconName || e, t = a.prefix || t;
    }
    if (e && t && us[t] && us[t][e]) {
      const a = us[t][e];
      return r(Ys(a));
    }
    Nh(e, t), r(F(F({}, Sh), {}, {
      icon: V.showMissingIcons && e ? Lt("missingIconAbstract") || {} : {}
    }));
  });
}
const so = () => {
}, Ks = V.measurePerformance && rr && rr.mark && rr.measure ? rr : {
  mark: so,
  measure: so
}, Cn = 'FA "6.7.1"', Ch = (e) => (Ks.mark("".concat(Cn, " ").concat(e, " begins")), () => Ac(e)), Ac = (e) => {
  Ks.mark("".concat(Cn, " ").concat(e, " ends")), Ks.measure("".concat(Cn, " ").concat(e), "".concat(Cn, " ").concat(e, " begins"), "".concat(Cn, " ").concat(e, " ends"));
};
var Ma = {
  begin: Ch,
  end: Ac
};
const fr = () => {
};
function ao(e) {
  return typeof (e.getAttribute ? e.getAttribute(Gt) : null) == "string";
}
function Lh(e) {
  const t = e.getAttribute ? e.getAttribute(Ca) : null, n = e.getAttribute ? e.getAttribute(La) : null;
  return t && n;
}
function Ih(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(V.replacementClass);
}
function xh() {
  return V.autoReplaceSvg === !0 ? ur.replace : ur[V.autoReplaceSvg] || ur.replace;
}
function Ph(e) {
  return se.createElementNS("http://www.w3.org/2000/svg", e);
}
function wh(e) {
  return se.createElement(e);
}
function Sc(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? Ph : wh
  } = t;
  if (typeof e == "string")
    return se.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(a) {
    r.setAttribute(a, e.attributes[a]);
  }), (e.children || []).forEach(function(a) {
    r.appendChild(Sc(a, {
      ceFn: n
    }));
  }), r;
}
function Rh(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const ur = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(Sc(n), t);
      }), t.getAttribute(Gt) === null && V.keepOriginalSource) {
        let n = se.createComment(Rh(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~xa(t).indexOf(V.replacementClass))
      return ur.replace(e);
    const r = new RegExp("".concat(V.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const a = n[0].attributes.class.split(" ").reduce((i, o) => (o === V.replacementClass || o.match(r) ? i.toSvg.push(o) : i.toNode.push(o), i), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = a.toSvg.join(" "), a.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", a.toNode.join(" "));
    }
    const s = n.map((a) => Jn(a)).join(`
`);
    t.setAttribute(Gt, ""), t.innerHTML = s;
  }
};
function io(e) {
  e();
}
function Nc(e, t) {
  const n = typeof t == "function" ? t : fr;
  if (e.length === 0)
    n();
  else {
    let r = io;
    V.mutateApproach === Dp && (r = Nt.requestAnimationFrame || io), r(() => {
      const s = xh(), a = Ma.begin("mutate");
      e.map(s), a(), n();
    });
  }
}
let Da = !1;
function Cc() {
  Da = !0;
}
function zs() {
  Da = !1;
}
let Cr = null;
function oo(e) {
  if (!zi || !V.observeMutations)
    return;
  const {
    treeCallback: t = fr,
    nodeCallback: n = fr,
    pseudoElementsCallback: r = fr,
    observeMutationsRoot: s = se
  } = e;
  Cr = new zi((a) => {
    if (Da) return;
    const i = Ct();
    vn(a).forEach((o) => {
      if (o.type === "childList" && o.addedNodes.length > 0 && !ao(o.addedNodes[0]) && (V.searchPseudoElements && r(o.target), t(o.target)), o.type === "attributes" && o.target.parentNode && V.searchPseudoElements && r(o.target.parentNode), o.type === "attributes" && ao(o.target) && ~Hp.indexOf(o.attributeName))
        if (o.attributeName === "class" && Lh(o.target)) {
          const {
            prefix: l,
            iconName: f
          } = Kr(xa(o.target));
          o.target.setAttribute(Ca, l || i), f && o.target.setAttribute(La, f);
        } else Ih(o.target) && n(o.target);
    });
  }), vt && Cr.observe(s, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function kh() {
  Cr && Cr.disconnect();
}
function Mh(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, s) => {
    const a = s.split(":"), i = a[0], o = a.slice(1);
    return i && o.length > 0 && (r[i] = o.join(":").trim()), r;
  }, {})), n;
}
function Dh(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let s = Kr(xa(e));
  return s.prefix || (s.prefix = Ct()), t && n && (s.prefix = t, s.iconName = n), s.iconName && s.prefix || (s.prefix && r.length > 0 && (s.iconName = oh(s.prefix, e.innerText) || Ra(s.prefix, $s(e.innerText))), !s.iconName && V.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (s.iconName = e.firstChild.data)), s;
}
function Fh(e) {
  const t = vn(e.attributes).reduce((s, a) => (s.name !== "class" && s.name !== "style" && (s[a.name] = a.value), s), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return V.autoA11y && (n ? t["aria-labelledby"] = "".concat(V.replacementClass, "-title-").concat(r || Vn()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function Uh() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: rt,
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
function lo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: s
  } = Dh(e), a = Fh(e), i = Hs("parseNodeAttributes", {}, e);
  let o = t.styleParser ? Mh(e) : [];
  return F({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: rt,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: s,
      styles: o,
      attributes: a
    }
  }, i);
}
const {
  styles: jh
} = st;
function Lc(e) {
  const t = V.autoReplaceSvg === "nest" ? lo(e, {
    styleParser: !1
  }) : lo(e);
  return ~t.extra.classes.indexOf(lc) ? Lt("generateLayersText", e, t) : Lt("generateSvgReplacementMutation", e, t);
}
function $h() {
  return [...vp, ...ks];
}
function co(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!vt) return Promise.resolve();
  const n = se.documentElement.classList, r = (u) => n.add("".concat(qi, "-").concat(u)), s = (u) => n.remove("".concat(qi, "-").concat(u)), a = V.autoFetchSvg ? $h() : tc.concat(Object.keys(jh));
  a.includes("fa") || a.push("fa");
  const i = [".".concat(lc, ":not([").concat(Gt, "])")].concat(a.map((u) => ".".concat(u, ":not([").concat(Gt, "])"))).join(", ");
  if (i.length === 0)
    return Promise.resolve();
  let o = [];
  try {
    o = vn(e.querySelectorAll(i));
  } catch {
  }
  if (o.length > 0)
    r("pending"), s("complete");
  else
    return Promise.resolve();
  const l = Ma.begin("onTree"), f = o.reduce((u, m) => {
    try {
      const _ = Lc(m);
      _ && u.push(_);
    } catch (_) {
      ic || _.name === "MissingIcon" && console.error(_);
    }
    return u;
  }, []);
  return new Promise((u, m) => {
    Promise.all(f).then((_) => {
      Nc(_, () => {
        r("active"), r("complete"), s("pending"), typeof t == "function" && t(), l(), u();
      });
    }).catch((_) => {
      l(), m(_);
    });
  });
}
function Wh(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Lc(e).then((n) => {
    n && Nc([n], t);
  });
}
function Hh(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : Vs(t || {});
    let {
      mask: s
    } = n;
    return s && (s = (s || {}).icon ? s : Vs(s || {})), e(r, F(F({}, n), {}, {
      mask: s
    }));
  };
}
const Vh = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = rt,
    symbol: r = !1,
    mask: s = null,
    maskId: a = null,
    title: i = null,
    titleId: o = null,
    classes: l = [],
    attributes: f = {},
    styles: u = {}
  } = t;
  if (!e) return;
  const {
    prefix: m,
    iconName: _,
    icon: E
  } = e;
  return zr(F({
    type: "icon"
  }, e), () => (Xt("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), V.autoA11y && (i ? f["aria-labelledby"] = "".concat(V.replacementClass, "-title-").concat(o || Vn()) : (f["aria-hidden"] = "true", f.focusable = "false")), ka({
    icons: {
      main: Ys(E),
      mask: s ? Ys(s.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: m,
    iconName: _,
    transform: F(F({}, rt), n),
    symbol: r,
    title: i,
    maskId: a,
    titleId: o,
    extra: {
      attributes: f,
      styles: u,
      classes: l
    }
  })));
};
var Yh = {
  mixout() {
    return {
      icon: Hh(Vh)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = co, e.nodeCallback = Wh, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = se,
        callback: r = () => {
        }
      } = t;
      return co(n, r);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: r,
        title: s,
        titleId: a,
        prefix: i,
        transform: o,
        symbol: l,
        mask: f,
        maskId: u,
        extra: m
      } = n;
      return new Promise((_, E) => {
        Promise.all([Bs(r, i), f.iconName ? Bs(f.iconName, f.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((C) => {
          let [S, k] = C;
          _([t, ka({
            icons: {
              main: S,
              mask: k
            },
            prefix: i,
            iconName: r,
            transform: o,
            symbol: l,
            maskId: u,
            title: s,
            titleId: a,
            extra: m,
            watchable: !0
          })]);
        }).catch(E);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: r,
        main: s,
        transform: a,
        styles: i
      } = t;
      const o = Yr(i);
      o.length > 0 && (r.style = o);
      let l;
      return Pa(a) && (l = Lt("generateAbstractTransformGrouping", {
        main: s,
        transform: a,
        containerWidth: s.width,
        iconWidth: s.width
      })), n.push(l || s.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, Bh = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return zr({
          type: "layer"
        }, () => {
          Xt("beforeDOMElementCreation", {
            assembler: e,
            params: t
          });
          let r = [];
          return e((s) => {
            Array.isArray(s) ? s.map((a) => {
              r = r.concat(a.abstract);
            }) : r = r.concat(s.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(V.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: r
          }];
        });
      }
    };
  }
}, Kh = {
  mixout() {
    return {
      counter(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: n = null,
          classes: r = [],
          attributes: s = {},
          styles: a = {}
        } = t;
        return zr({
          type: "counter",
          content: e
        }, () => (Xt("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Ah({
          content: e.toString(),
          title: n,
          extra: {
            attributes: s,
            styles: a,
            classes: ["".concat(V.cssPrefix, "-layers-counter"), ...r]
          }
        })));
      }
    };
  }
}, zh = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = rt,
          title: r = null,
          classes: s = [],
          attributes: a = {},
          styles: i = {}
        } = t;
        return zr({
          type: "text",
          content: e
        }, () => (Xt("beforeDOMElementCreation", {
          content: e,
          params: t
        }), ro({
          content: e,
          transform: F(F({}, rt), n),
          title: r,
          extra: {
            attributes: a,
            styles: i,
            classes: ["".concat(V.cssPrefix, "-layers-text"), ...s]
          }
        })));
      }
    };
  },
  provides(e) {
    e.generateLayersText = function(t, n) {
      const {
        title: r,
        transform: s,
        extra: a
      } = n;
      let i = null, o = null;
      if (Zl) {
        const l = parseInt(getComputedStyle(t).fontSize, 10), f = t.getBoundingClientRect();
        i = f.width / l, o = f.height / l;
      }
      return V.autoA11y && !r && (a.attributes["aria-hidden"] = "true"), Promise.resolve([t, ro({
        content: t.innerHTML,
        width: i,
        height: o,
        transform: s,
        title: r,
        extra: a,
        watchable: !0
      })]);
    };
  }
};
const Gh = new RegExp('"', "ug"), fo = [1105920, 1112319], uo = F(F(F(F({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), _p), kp), Cp), Gs = Object.keys(uo).reduce((e, t) => (e[t.toLowerCase()] = uo[t], e), {}), Xh = Object.keys(Gs).reduce((e, t) => {
  const n = Gs[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function qh(e) {
  const t = e.replace(Gh, ""), n = nh(t, 0), r = n >= fo[0] && n <= fo[1], s = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: $s(s ? t[0] : t),
    isSecondary: r || s
  };
}
function Jh(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), s = isNaN(r) ? "normal" : r;
  return (Gs[n] || {})[s] || Xh[n];
}
function mo(e, t) {
  const n = "".concat(Mp).concat(t.replace(":", "-"));
  return new Promise((r, s) => {
    if (e.getAttribute(n) !== null)
      return r();
    const i = vn(e.children).filter((_) => _.getAttribute(Ds) === t)[0], o = Nt.getComputedStyle(e, t), l = o.getPropertyValue("font-family"), f = l.match($p), u = o.getPropertyValue("font-weight"), m = o.getPropertyValue("content");
    if (i && !f)
      return e.removeChild(i), r();
    if (f && m !== "none" && m !== "") {
      const _ = o.getPropertyValue("content");
      let E = Jh(l, u);
      const {
        value: C,
        isSecondary: S
      } = qh(_), k = f[0].startsWith("FontAwesome");
      let T = Ra(E, C), N = T;
      if (k) {
        const b = lh(C);
        b.iconName && b.prefix && (T = b.iconName, E = b.prefix);
      }
      if (T && !S && (!i || i.getAttribute(Ca) !== E || i.getAttribute(La) !== N)) {
        e.setAttribute(n, N), i && e.removeChild(i);
        const b = Uh(), {
          extra: y
        } = b;
        y.attributes[Ds] = t, Bs(T, E).then((L) => {
          const I = ka(F(F({}, b), {}, {
            icons: {
              main: L,
              mask: Tc()
            },
            prefix: E,
            iconName: N,
            extra: y,
            watchable: !0
          })), U = se.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(U, e.firstChild) : e.appendChild(U), U.outerHTML = I.map((W) => Jn(W)).join(`
`), e.removeAttribute(n), r();
        }).catch(s);
      } else
        r();
    } else
      r();
  });
}
function Qh(e) {
  return Promise.all([mo(e, "::before"), mo(e, "::after")]);
}
function Zh(e) {
  return e.parentNode !== document.head && !~Fp.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Ds) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function po(e) {
  if (vt)
    return new Promise((t, n) => {
      const r = vn(e.querySelectorAll("*")).filter(Zh).map(Qh), s = Ma.begin("searchPseudoElements");
      Cc(), Promise.all(r).then(() => {
        s(), zs(), t();
      }).catch(() => {
        s(), zs(), n();
      });
    });
}
var eg = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = po, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = se
      } = t;
      V.searchPseudoElements && po(n);
    };
  }
};
let ho = !1;
var tg = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Cc(), ho = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        oo(Hs("mutationObserverCallbacks", {}));
      },
      noAuto() {
        kh();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        ho ? zs() : oo(Hs("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const go = (e) => {
  let t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce((n, r) => {
    const s = r.toLowerCase().split("-"), a = s[0];
    let i = s.slice(1).join("-");
    if (a && i === "h")
      return n.flipX = !0, n;
    if (a && i === "v")
      return n.flipY = !0, n;
    if (i = parseFloat(i), isNaN(i))
      return n;
    switch (a) {
      case "grow":
        n.size = n.size + i;
        break;
      case "shrink":
        n.size = n.size - i;
        break;
      case "left":
        n.x = n.x - i;
        break;
      case "right":
        n.x = n.x + i;
        break;
      case "up":
        n.y = n.y - i;
        break;
      case "down":
        n.y = n.y + i;
        break;
      case "rotate":
        n.rotate = n.rotate + i;
        break;
    }
    return n;
  }, t);
};
var ng = {
  mixout() {
    return {
      parse: {
        transform: (e) => go(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = go(n)), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function(t) {
      let {
        main: n,
        transform: r,
        containerWidth: s,
        iconWidth: a
      } = t;
      const i = {
        transform: "translate(".concat(s / 2, " 256)")
      }, o = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), l = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), f = "rotate(".concat(r.rotate, " 0 0)"), u = {
        transform: "".concat(o, " ").concat(l, " ").concat(f)
      }, m = {
        transform: "translate(".concat(a / 2 * -1, " -256)")
      }, _ = {
        outer: i,
        inner: u,
        path: m
      };
      return {
        tag: "g",
        attributes: F({}, _.outer),
        children: [{
          tag: "g",
          attributes: F({}, _.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: F(F({}, n.icon.attributes), _.path)
          }]
        }]
      };
    };
  }
};
const ds = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function _o(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function rg(e) {
  return e.tag === "g" ? e.children : [e];
}
var sg = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? Kr(n.split(" ").map((s) => s.trim())) : Tc();
        return r.prefix || (r.prefix = Ct()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(t) {
      let {
        children: n,
        attributes: r,
        main: s,
        mask: a,
        maskId: i,
        transform: o
      } = t;
      const {
        width: l,
        icon: f
      } = s, {
        width: u,
        icon: m
      } = a, _ = qp({
        transform: o,
        containerWidth: u,
        iconWidth: l
      }), E = {
        tag: "rect",
        attributes: F(F({}, ds), {}, {
          fill: "white"
        })
      }, C = f.children ? {
        children: f.children.map(_o)
      } : {}, S = {
        tag: "g",
        attributes: F({}, _.inner),
        children: [_o(F({
          tag: f.tag,
          attributes: F(F({}, f.attributes), _.path)
        }, C))]
      }, k = {
        tag: "g",
        attributes: F({}, _.outer),
        children: [S]
      }, T = "mask-".concat(i || Vn()), N = "clip-".concat(i || Vn()), b = {
        tag: "mask",
        attributes: F(F({}, ds), {}, {
          id: T,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [E, k]
      }, y = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: N
          },
          children: rg(m)
        }, b]
      };
      return n.push(y, {
        tag: "rect",
        attributes: F({
          fill: "currentColor",
          "clip-path": "url(#".concat(N, ")"),
          mask: "url(#".concat(T, ")")
        }, ds)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, ag = {
  provides(e) {
    let t = !1;
    Nt.matchMedia && (t = Nt.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], r = {
        fill: "currentColor"
      }, s = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: F(F({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const a = F(F({}, s), {}, {
        attributeName: "opacity"
      }), i = {
        tag: "circle",
        attributes: F(F({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || i.children.push({
        tag: "animate",
        attributes: F(F({}, s), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: F(F({}, a), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(i), n.push({
        tag: "path",
        attributes: F(F({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: F(F({}, a), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: F(F({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: F(F({}, a), {}, {
            values: "0;0;1;1;0;0;"
          })
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
}, ig = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, og = [Zp, Yh, Bh, Kh, zh, eg, tg, ng, sg, ag, ig];
_h(og, {
  mixoutsTo: We
});
We.noAuto;
We.config;
const lg = We.library;
We.dom;
const Xs = We.parse;
We.findIconDefinition;
We.toHtml;
const cg = We.icon;
We.layer;
We.text;
We.counter;
function bo(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ht(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bo(Object(n), !0).forEach(function(r) {
      ke(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bo(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function fg(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ug(e) {
  var t = fg(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Lr(e) {
  "@babel/helpers - typeof";
  return Lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lr(e);
}
function ke(e, t, n) {
  return t = ug(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function dg(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function mg(e, t) {
  if (e == null) return {};
  var n = dg(e, t), r, s;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (s = 0; s < a.length; s++)
      r = a[s], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
var pg = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ic = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(T, N, b) {
      if (!f(N) || m(N) || _(N) || E(N) || l(N))
        return N;
      var y, L = 0, I = 0;
      if (u(N))
        for (y = [], I = N.length; L < I; L++)
          y.push(n(T, N[L], b));
      else {
        y = {};
        for (var U in N)
          Object.prototype.hasOwnProperty.call(N, U) && (y[T(U, b)] = n(T, N[U], b));
      }
      return y;
    }, r = function(T, N) {
      N = N || {};
      var b = N.separator || "_", y = N.split || /(?=[A-Z])/;
      return T.split(y).join(b);
    }, s = function(T) {
      return C(T) ? T : (T = T.replace(/[\-_\s]+(.)?/g, function(N, b) {
        return b ? b.toUpperCase() : "";
      }), T.substr(0, 1).toLowerCase() + T.substr(1));
    }, a = function(T) {
      var N = s(T);
      return N.substr(0, 1).toUpperCase() + N.substr(1);
    }, i = function(T, N) {
      return r(T, N).toLowerCase();
    }, o = Object.prototype.toString, l = function(T) {
      return typeof T == "function";
    }, f = function(T) {
      return T === Object(T);
    }, u = function(T) {
      return o.call(T) == "[object Array]";
    }, m = function(T) {
      return o.call(T) == "[object Date]";
    }, _ = function(T) {
      return o.call(T) == "[object RegExp]";
    }, E = function(T) {
      return o.call(T) == "[object Boolean]";
    }, C = function(T) {
      return T = T - 0, T === T;
    }, S = function(T, N) {
      var b = N && "process" in N ? N.process : N;
      return typeof b != "function" ? T : function(y, L) {
        return b(y, T, L);
      };
    }, k = {
      camelize: s,
      decamelize: i,
      pascalize: a,
      depascalize: i,
      camelizeKeys: function(T, N) {
        return n(S(s, N), T);
      },
      decamelizeKeys: function(T, N) {
        return n(S(i, N), T, N);
      },
      pascalizeKeys: function(T, N) {
        return n(S(a, N), T);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = k : t.humps = k;
  })(pg);
})(Ic);
var hg = Ic.exports, gg = ["class", "style"];
function _g(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), s = hg.camelize(n.slice(0, r)), a = n.slice(r + 1).trim();
    return t[s] = a, t;
  }, {});
}
function bg(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function xc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var r = (e.children || []).map(function(l) {
    return xc(l);
  }), s = Object.keys(e.attributes || {}).reduce(function(l, f) {
    var u = e.attributes[f];
    switch (f) {
      case "class":
        l.class = bg(u);
        break;
      case "style":
        l.style = _g(u);
        break;
      default:
        l.attrs[f] = u;
    }
    return l;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  n.class;
  var a = n.style, i = a === void 0 ? {} : a, o = mg(n, gg);
  return ba(e.tag, ht(ht(ht({}, t), {}, {
    class: s.class,
    style: ht(ht({}, s.style), i)
  }, s.attrs), o), r);
}
var Pc = !1;
try {
  Pc = !0;
} catch {
}
function yg() {
  if (!Pc && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function ms(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? ke({}, e, t) : {};
}
function vg(e) {
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
  }, ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(t, "fa-".concat(e.size), e.size !== null), "fa-rotate-".concat(e.rotation), e.rotation !== null), "fa-pull-".concat(e.pull), e.pull !== null), "fa-swap-opacity", e.swapOpacity), "fa-bounce", e.bounce), "fa-shake", e.shake), "fa-beat", e.beat), "fa-fade", e.fade), "fa-beat-fade", e.beatFade), "fa-flash", e.flash), ke(ke(t, "fa-spin-pulse", e.spinPulse), "fa-spin-reverse", e.spinReverse));
  return Object.keys(n).map(function(r) {
    return n[r] ? r : null;
  }).filter(function(r) {
    return r;
  });
}
function yo(e) {
  if (e && Lr(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Xs.icon)
    return Xs.icon(e);
  if (e === null)
    return null;
  if (Lr(e) === "object" && e.prefix && e.iconName)
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
var Eg = /* @__PURE__ */ zn({
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
    var r = n.attrs, s = He(function() {
      return yo(t.icon);
    }), a = He(function() {
      return ms("classes", vg(t));
    }), i = He(function() {
      return ms("transform", typeof t.transform == "string" ? Xs.transform(t.transform) : t.transform);
    }), o = He(function() {
      return ms("mask", yo(t.mask));
    }), l = He(function() {
      return cg(s.value, ht(ht(ht(ht({}, a.value), i.value), o.value), {}, {
        symbol: t.symbol,
        title: t.title,
        titleId: t.titleId,
        maskId: t.maskId
      }));
    });
    Bt(l, function(u) {
      if (!u)
        return yg("Could not find one or more icon(s)", s.value, o.value);
    }, {
      immediate: !0
    });
    var f = He(function() {
      return l.value ? xc(l.value.abstract[0], {}, r) : null;
    });
    return function() {
      return f.value;
    };
  }
});
/*!
* Font Awesome Pro 6.7.1 by @fontawesome - https://fontawesome.com
* License - https://fontawesome.com/license (Commercial License)
* Copyright 2024 Fonticons, Inc.
*/
const Tg = {
  prefix: "fasr",
  iconName: "arrows-left-right",
  icon: [512, 512, ["arrows-h"], "f07e", "M493.8 273l17-17-17-17-96-96-17-17L346.9 160l17 17 55 55L93.1 232l55-55 17-17-33.9-33.9-17 17-96 96-17 17 17 17 96 96 17 17L165.1 352l-17-17-55-55 325.7 0-55 55-17 17 33.9 33.9 17-17 96-96z"]
}, Og = {
  prefix: "fasr",
  iconName: "plus-large",
  icon: [512, 512, [], "e59e", "M488 232l24 0 0 48-24 0-208 0 0 208 0 24-48 0 0-24 0-208L24 280 0 280l0-48 24 0 208 0 0-208 0-24 48 0 0 24 0 208 208 0z"]
}, Ag = {
  prefix: "fasr",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M136 32l24 0 0 48-24 0L48 80l0 88 0 24L0 192l0-24L0 56 0 32l24 0 112 0zM0 344l0-24 48 0 0 24 0 88 88 0 24 0 0 48-24 0L24 480 0 480l0-24L0 344zM424 32l24 0 0 24 0 112 0 24-48 0 0-24 0-88-88 0-24 0 0-48 24 0 112 0zM400 344l0-24 48 0 0 24 0 112 0 24-24 0-112 0-24 0 0-48 24 0 88 0 0-88z"]
}, Sg = {
  prefix: "fasr",
  iconName: "arrows-up-down",
  icon: [320, 512, ["arrows-v"], "f07d", "M177 18.2l-17-17-17 17-96 96-17 17L64 165.1l17-17 55-55 0 325.7-55-55-17-17L30.1 380.8l17 17 96 96 17 17 17-17 96-96 17-17L256 346.9l-17 17-55 55 0-325.7 55 55 17 17 33.9-33.9-17-17-96-96z"]
};
/*!
* Font Awesome Pro 6.7.1 by @fontawesome - https://fontawesome.com
* License - https://fontawesome.com/license (Commercial License)
* Copyright 2024 Fonticons, Inc.
*/
const Ng = {
  prefix: "fass",
  iconName: "spray-can",
  icon: [512, 512, [], "f5bd", "M224 0l0 128L96 128 96 0 224 0zM0 256c0-53 43-96 96-96l128 0c53 0 96 43 96 96l0 256L0 512 0 256zm240 80A80 80 0 1 0 80 336a80 80 0 1 0 160 0zM256 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM384 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM448 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM384 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, Cg = {
  prefix: "fass",
  iconName: "image",
  icon: [512, 512, [], "f03e", "M0 32l512 0 0 448L0 480 0 32zM323.5 202.1L304 174.7l-19.5 27.3L196.2 325.6l-26.3-29.6L152 275.9l-17.9 20.2-64 72L64 374.9l0 9.1 0 8 0 24 24 0 72 0 24 0 32 0 24 0 184 0 24 0 0-24 0-8 0-7.7-4.5-6.3-120-168zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]
}, Lg = {
  prefix: "fass",
  iconName: "files",
  icon: [448, 512, [], "e178", "M320 96l0 32 32 0 96 0 0 288L96 416 96 0 320 0l0 96zm128 0l-45.3 0L384 96l-32 0 0-32 0-18.7L352 0l32 32 32 32 32 32zM48 120l0 344 280 0 24 0 0 48-24 0L24 512 0 512l0-24L0 120 0 96l48 0 0 24z"]
}, Ig = {
  prefix: "fass",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M144 0L128 32 0 32 0 96l448 0 0-64L320 32 304 0 144 0zM416 128L32 128 56 512l336 0 24-384z"]
}, xg = {
  prefix: "fass",
  iconName: "calculator",
  icon: [384, 512, [128425], "f1ec", "M384 0L0 0 0 512l384 0L384 0zM320 64l0 96L64 160l0-96 256 0zM64 192l64 0 0 64-64 0 0-64zm64 96l0 64-64 0 0-64 64 0zM64 384l160 0 0 64L64 448l0-64zM224 192l0 64-64 0 0-64 64 0zm-64 96l64 0 0 64-64 0 0-64zm160-96l0 64-64 0 0-64 64 0zm-64 96l64 0 0 64-64 0 0-64zm64 96l0 64-64 0 0-64 64 0z"]
}, Pg = {
  prefix: "fass",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M326.6 166.6L349.3 144 304 98.7l-22.6 22.6L192 210.7l-89.4-89.4L80 98.7 34.7 144l22.6 22.6L146.7 256 57.4 345.4 34.7 368 80 413.3l22.6-22.6L192 301.3l89.4 89.4L304 413.3 349.3 368l-22.6-22.6L237.3 256l89.4-89.4z"]
}, wg = {
  prefix: "fass",
  iconName: "hammer",
  icon: [576, 512, [128296], "f6e3", "M225.6 18.2L176 48l96 48 0 48L384 256l24-24 24 24-24 24 48 48L576 208l-48-48-24 24-24-24 24-24L405.5 37.5C381.5 13.5 348.9 0 315 0L291.5 0c-23.2 0-46 6.3-65.9 18.2zM0 416l96 96L330.7 248 264 181.3 0 416z"]
}, Rg = {
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
  finish: "Finish",
  "image upload": "Image upload",
  "delete finish": "Delete finish",
  select: "Select",
  delete: "Delete",
  clear: "Clear",
  l1: "L1",
  l2: "L2",
  w1: "W1",
  w2: "W2",
  all: "All",
  a: "A",
  b: "B",
  c: "C",
  d: "D",
  "Drop CSV file here": "Drop CSV file here",
  "Powered by SmartCut": "Powered by SmartCut",
  Part: "Part",
  Issue: "Issue",
  "Part issue": "Part issue",
  "Issue with part inputs": "Issue with part inputs",
  "No parts": "No parts",
  "No parts in list": "No parts in list",
  "No quantity of parts found": "No quantity of parts found",
  "No parts were added - please double check your list.": "No parts were added - please double check your list.",
  "The following parts did not fit": "The following parts did not fit",
  "The maximum number of parts is": "The maximum number of parts is",
  "No valid parts found": "No valid parts found",
  Hardware: "Hardware",
  "Hardware total": "Hardware total",
  Panels: "Panels",
  pdf: {
    orderSummary: "Order summary",
    stockRequirements: "Stock requirements",
    rollRequirements: "Roll requirements",
    totals: "Totals",
    item: "Item",
    totalParts: "Total parts",
    partArea: "Part area",
    images: "Images",
    totalStockRequired: "Total stock required",
    totalBandingLength: "Total banding length",
    totalFinishArea: "Total finish area",
    totalRollLength: "Total roll length",
    partIndex: "Part index",
    fileName: "File name",
    link: "Link"
  }
}, kg = {
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
}, Mg = {
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
}, Dg = {
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
  all: "Tous",
  "N/A": "N/A",
  "Powered by SmartCut": "",
  Part: "Pièce",
  "Drop CSV file here": "Télécharger CSV",
  Issue: "Erreur",
  "Part issue": "Pièce erreur",
  "Issue with part inputs": "Erreur avec l'importation de pièces",
  "No parts": "Aucune pièce",
  "No parts in list": "Aucune pièce dans la liste",
  "No quantity of parts found": "Aucune quantité trouvé pour certaines pièces",
  "No parts were added - please double check your list.": "Aucune pièce n'a été ajoutée - veuillez vérifier votre liste.",
  "The following parts did not fit": "Les pièces suivantes ne s'adaptent pas",
  "The maximum number of parts is": "Le nombre maximum de pièces est",
  "No valid parts found": "Aucune pièce valide trouvée"
}, Fg = {
  en_US: Rg,
  ca: kg,
  es_ES: Mg,
  fr_FR: Dg
};
lg.add(
  Pg,
  Ag,
  Tg,
  Sg,
  wg,
  Ng,
  Cg,
  Lg,
  Ig,
  Og,
  xg
);
const Ug = Qm({
  legacy: !1,
  globalInjection: !0,
  locale: "en_US",
  fallbackLocale: "en_US",
  messages: Fg,
  fallbackWarn: !0,
  missingWarn: !0,
  modifiers: {
    upper: (e) => e.toUpperCase(),
    lower: (e) => e.toLowerCase(),
    capitalize: (e) => e.charAt(0).toUpperCase() + e.slice(1),
    title: (e) => e.split(" ").map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(" ")
  }
}), jg = /* @__PURE__ */ wf(() => import("./Launch-CFZ5pGuw.js").then((e) => e.L));
let ut = null;
const $g = async () => {
  const e = document.querySelector("#smartcut-app");
  if (!e) {
    console.warn("No #smartcut-app element found");
    return;
  }
  if (ut) {
    try {
      ut.unmount();
    } catch (t) {
      console.warn("Unmount error:", t);
    }
    ut = null;
  }
  try {
    const t = e.getAttribute("data-type") || "";
    ut = ad(jg, { type: t }), ut.use(Ug), ut.component("FontAwesomeIcon", Eg), ut.mount("#smartcut-app");
  } catch (t) {
    console.error("Mount error:", t), ut = null;
  }
};
$g();
const Zg = ut;
export {
  qg as A,
  zn as B,
  He as C,
  ma as D,
  Sa as E,
  Ge as F,
  Vg as G,
  Eu as H,
  pe as I,
  Au as J,
  jf as K,
  wf as L,
  Qf as M,
  Yg as N,
  Df as O,
  Rn as P,
  Kg as Q,
  zg as R,
  Qg as S,
  Zg as T,
  Vo as a,
  Wg as b,
  Ur as c,
  Te as d,
  fn as e,
  ia as f,
  Kc as g,
  la as h,
  Ug as i,
  yu as j,
  Gg as k,
  Bg as l,
  mf as m,
  Sf as n,
  Qo as o,
  ta as p,
  ea as q,
  ar as r,
  pf as s,
  El as t,
  gf as u,
  Yc as v,
  Bt as w,
  Hg as x,
  Jg as y,
  Xg as z
};

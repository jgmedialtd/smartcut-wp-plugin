import { c as nl, i as sl, g as rl } from "./vendor-floating-ui-CCq0hEoe.js";
// @__NO_SIDE_EFFECTS__
function Fs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const q = {}, St = [], Ke = () => {
}, ti = () => !1, Bn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ds = (e) => e.startsWith("onUpdate:"), le = Object.assign, Is = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, il = Object.prototype.hasOwnProperty, Y = (e, t) => il.call(e, t), I = Array.isArray, wt = (e) => on(e) === "[object Map]", Kn = (e) => on(e) === "[object Set]", fr = (e) => on(e) === "[object Date]", V = (e) => typeof e == "function", ie = (e) => typeof e == "string", Re = (e) => typeof e == "symbol", J = (e) => e !== null && typeof e == "object", ni = (e) => (J(e) || V(e)) && V(e.then) && V(e.catch), si = Object.prototype.toString, on = (e) => si.call(e), ol = (e) => on(e).slice(8, -1), ri = (e) => on(e) === "[object Object]", Wn = (e) => ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, kt = /* @__PURE__ */ Fs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Un = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, ll = /-\w/g, xe = Un(
  (e) => e.replace(ll, (t) => t.slice(1).toUpperCase())
), cl = /\B([A-Z])/g, Qe = Un(
  (e) => e.replace(cl, "-$1").toLowerCase()
), ln = Un((e) => e.charAt(0).toUpperCase() + e.slice(1)), xn = Un(
  (e) => e ? `on${ln(e)}` : ""
), Se = (e, t) => !Object.is(e, t), Cn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, ii = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Ns = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, fl = (e) => {
  const t = ie(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ur;
const kn = () => ur || (ur = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Gn(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = ie(s) ? hl(s) : Gn(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (ie(e) || J(e))
    return e;
}
const ul = /;(?![^(]*\))/g, al = /:([^]+)/, dl = /\/\*[^]*?\*\//g;
function hl(e) {
  const t = {};
  return e.replace(dl, "").split(ul).forEach((n) => {
    if (n) {
      const s = n.split(al);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function qn(e) {
  let t = "";
  if (ie(e))
    t = e;
  else if (I(e))
    for (let n = 0; n < e.length; n++) {
      const s = qn(e[n]);
      s && (t += s + " ");
    }
  else if (J(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const pl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", gl = /* @__PURE__ */ Fs(pl);
function oi(e) {
  return !!e || e === "";
}
function ml(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = cn(e[s], t[s]);
  return n;
}
function cn(e, t) {
  if (e === t) return !0;
  let n = fr(e), s = fr(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Re(e), s = Re(t), n || s)
    return e === t;
  if (n = I(e), s = I(t), n || s)
    return n && s ? ml(e, t) : !1;
  if (n = J(e), s = J(t), n || s) {
    if (!n || !s)
      return !1;
    const r = Object.keys(e).length, i = Object.keys(t).length;
    if (r !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !cn(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function li(e, t) {
  return e.findIndex((n) => cn(n, t));
}
const ci = (e) => !!(e && e.__v_isRef === !0), fi = (e) => ie(e) ? e : e == null ? "" : I(e) || J(e) && (e.toString === si || !V(e.toString)) ? ci(e) ? fi(e.value) : JSON.stringify(e, ui, 2) : String(e), ui = (e, t) => ci(t) ? ui(e, t.value) : wt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], i) => (n[ls(s, i) + " =>"] = r, n),
    {}
  )
} : Kn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ls(n))
} : Re(t) ? ls(t) : J(t) && !I(t) && !ri(t) ? String(t) : t, ls = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Re(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let he;
class ai {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = he, !t && he && (this.index = (he.scopes || (he.scopes = [])).push(
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
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Jn() {
  return he;
}
function Ls(e, t = !1) {
  he && he.cleanups.push(e);
}
let se;
const cs = /* @__PURE__ */ new WeakSet();
class $s {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, he && he.active && he.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, cs.has(this) && (cs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || hi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ar(this), pi(this);
    const t = se, n = Oe;
    se = this, Oe = !0;
    try {
      return this.fn();
    } finally {
      gi(this), se = t, Oe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Hs(t);
      this.deps = this.depsTail = void 0, ar(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? cs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ys(this) && this.run();
  }
  get dirty() {
    return ys(this);
  }
}
let di = 0, Gt, qt;
function hi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = qt, qt = e;
    return;
  }
  e.next = Gt, Gt = e;
}
function Vs() {
  di++;
}
function js() {
  if (--di > 0)
    return;
  if (qt) {
    let t = qt;
    for (qt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Gt; ) {
    let t = Gt;
    for (Gt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function pi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function gi(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), Hs(s), _l(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function ys(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (mi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function mi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === en) || (e.globalVersion = en, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ys(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = se, s = Oe;
  se = e, Oe = !0;
  try {
    pi(e);
    const r = e.fn(e._value);
    (t.version === 0 || Se(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    se = n, Oe = s, gi(e), e.flags &= -3;
  }
}
function Hs(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Hs(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function _l(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Oe = !0;
const _i = [];
function Ye() {
  _i.push(Oe), Oe = !1;
}
function Xe() {
  const e = _i.pop();
  Oe = e === void 0 ? !0 : e;
}
function ar(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = se;
    se = void 0;
    try {
      t();
    } finally {
      se = n;
    }
  }
}
let en = 0;
class yl {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class zn {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!se || !Oe || se === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== se)
      n = this.activeLink = new yl(se, this), se.deps ? (n.prevDep = se.depsTail, se.depsTail.nextDep = n, se.depsTail = n) : se.deps = se.depsTail = n, yi(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = se.depsTail, n.nextDep = void 0, se.depsTail.nextDep = n, se.depsTail = n, se.deps === n && (se.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, en++, this.notify(t);
  }
  notify(t) {
    Vs();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      js();
    }
  }
}
function yi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        yi(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Mn = /* @__PURE__ */ new WeakMap(), _t = /* @__PURE__ */ Symbol(
  ""
), vs = /* @__PURE__ */ Symbol(
  ""
), tn = /* @__PURE__ */ Symbol(
  ""
);
function pe(e, t, n) {
  if (Oe && se) {
    let s = Mn.get(e);
    s || Mn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new zn()), r.map = s, r.key = n), r.track();
  }
}
function qe(e, t, n, s, r, i) {
  const o = Mn.get(e);
  if (!o) {
    en++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (Vs(), t === "clear")
    o.forEach(l);
  else {
    const c = I(e), a = c && Wn(n);
    if (c && n === "length") {
      const f = Number(s);
      o.forEach((h, g) => {
        (g === "length" || g === tn || !Re(g) && g >= f) && l(h);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), a && l(o.get(tn)), t) {
        case "add":
          c ? a && l(o.get("length")) : (l(o.get(_t)), wt(e) && l(o.get(vs)));
          break;
        case "delete":
          c || (l(o.get(_t)), wt(e) && l(o.get(vs)));
          break;
        case "set":
          wt(e) && l(o.get(_t));
          break;
      }
  }
  js();
}
function vl(e, t) {
  const n = Mn.get(e);
  return n && n.get(t);
}
function vt(e) {
  const t = /* @__PURE__ */ U(e);
  return t === e ? t : (pe(t, "iterate", tn), /* @__PURE__ */ we(e) ? t : t.map(Fe));
}
function Yn(e) {
  return pe(e = /* @__PURE__ */ U(e), "iterate", tn), e;
}
function st(e, t) {
  return /* @__PURE__ */ We(e) ? Mt(/* @__PURE__ */ it(e) ? Fe(t) : t) : Fe(t);
}
const bl = {
  __proto__: null,
  [Symbol.iterator]() {
    return fs(this, Symbol.iterator, (e) => st(this, e));
  },
  concat(...e) {
    return vt(this).concat(
      ...e.map((t) => I(t) ? vt(t) : t)
    );
  },
  entries() {
    return fs(this, "entries", (e) => (e[1] = st(this, e[1]), e));
  },
  every(e, t) {
    return Ue(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ue(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => st(this, s)),
      arguments
    );
  },
  find(e, t) {
    return Ue(
      this,
      "find",
      e,
      t,
      (n) => st(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Ue(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ue(
      this,
      "findLast",
      e,
      t,
      (n) => st(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ue(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ue(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return us(this, "includes", e);
  },
  indexOf(...e) {
    return us(this, "indexOf", e);
  },
  join(e) {
    return vt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return us(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ue(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return jt(this, "pop");
  },
  push(...e) {
    return jt(this, "push", e);
  },
  reduce(e, ...t) {
    return dr(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return dr(this, "reduceRight", e, t);
  },
  shift() {
    return jt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ue(this, "some", e, t, void 0, arguments);
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
    return fs(this, "values", (e) => st(this, e));
  }
};
function fs(e, t, n) {
  const s = Yn(e), r = s[t]();
  return s !== e && !/* @__PURE__ */ we(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = n(i.value)), i;
  }), r;
}
const Sl = Array.prototype;
function Ue(e, t, n, s, r, i) {
  const o = Yn(e), l = o !== e && !/* @__PURE__ */ we(e), c = o[t];
  if (c !== Sl[t]) {
    const h = c.apply(e, i);
    return l ? Fe(h) : h;
  }
  let a = n;
  o !== e && (l ? a = function(h, g) {
    return n.call(this, st(e, h), g, e);
  } : n.length > 2 && (a = function(h, g) {
    return n.call(this, h, g, e);
  }));
  const f = c.call(o, a, s);
  return l && r ? r(f) : f;
}
function dr(e, t, n, s) {
  const r = Yn(e);
  let i = n;
  return r !== e && (/* @__PURE__ */ we(e) ? n.length > 3 && (i = function(o, l, c) {
    return n.call(this, o, l, c, e);
  }) : i = function(o, l, c) {
    return n.call(this, o, st(e, l), c, e);
  }), r[t](i, ...s);
}
function us(e, t, n) {
  const s = /* @__PURE__ */ U(e);
  pe(s, "iterate", tn);
  const r = s[t](...n);
  return (r === -1 || r === !1) && /* @__PURE__ */ fn(n[0]) ? (n[0] = /* @__PURE__ */ U(n[0]), s[t](...n)) : r;
}
function jt(e, t, n = []) {
  Ye(), Vs();
  const s = (/* @__PURE__ */ U(e))[t].apply(e, n);
  return js(), Xe(), s;
}
const wl = /* @__PURE__ */ Fs("__proto__,__v_isRef,__isVue"), vi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Re)
);
function xl(e) {
  Re(e) || (e = String(e));
  const t = /* @__PURE__ */ U(this);
  return pe(t, "has", e), t.hasOwnProperty(e);
}
class bi {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return s === (r ? i ? Ei : Ti : i ? Ci : xi).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = I(t);
    if (!r) {
      let c;
      if (o && (c = bl[n]))
        return c;
      if (n === "hasOwnProperty")
        return xl;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ oe(t) ? t : s
    );
    if ((Re(n) ? vi.has(n) : wl(n)) || (r || pe(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ oe(l)) {
      const c = o && Wn(n) ? l : l.value;
      return r && J(c) ? /* @__PURE__ */ At(c) : c;
    }
    return J(l) ? r ? /* @__PURE__ */ At(l) : /* @__PURE__ */ Zn(l) : l;
  }
}
class Si extends bi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    const o = I(t) && Wn(n);
    if (!this._isShallow) {
      const a = /* @__PURE__ */ We(i);
      if (!/* @__PURE__ */ we(s) && !/* @__PURE__ */ We(s) && (i = /* @__PURE__ */ U(i), s = /* @__PURE__ */ U(s)), !o && /* @__PURE__ */ oe(i) && !/* @__PURE__ */ oe(s))
        return a || (i.value = s), !0;
    }
    const l = o ? Number(n) < t.length : Y(t, n), c = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ oe(t) ? t : r
    );
    return t === /* @__PURE__ */ U(r) && (l ? Se(s, i) && qe(t, "set", n, s) : qe(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = Y(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && qe(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Re(n) || !vi.has(n)) && pe(t, "has", n), s;
  }
  ownKeys(t) {
    return pe(
      t,
      "iterate",
      I(t) ? "length" : _t
    ), Reflect.ownKeys(t);
  }
}
class wi extends bi {
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
const Cl = /* @__PURE__ */ new Si(), Tl = /* @__PURE__ */ new wi(), El = /* @__PURE__ */ new Si(!0), Al = /* @__PURE__ */ new wi(!0), bs = (e) => e, mn = (e) => Reflect.getPrototypeOf(e);
function Ml(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = /* @__PURE__ */ U(r), o = wt(i), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, a = r[e](...s), f = n ? bs : t ? Mt : Fe;
    return !t && pe(
      i,
      "iterate",
      c ? vs : _t
    ), le(
      // inheriting all iterator properties
      Object.create(a),
      {
        // iterator protocol
        next() {
          const { value: h, done: g } = a.next();
          return g ? { value: h, done: g } : {
            value: l ? [f(h[0]), f(h[1])] : f(h),
            done: g
          };
        }
      }
    );
  };
}
function _n(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ol(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ U(i), l = /* @__PURE__ */ U(r);
      e || (Se(r, l) && pe(o, "get", r), pe(o, "get", l));
      const { has: c } = mn(o), a = t ? bs : e ? Mt : Fe;
      if (c.call(o, r))
        return a(i.get(r));
      if (c.call(o, l))
        return a(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && pe(/* @__PURE__ */ U(r), "iterate", _t), r.size;
    },
    has(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ U(i), l = /* @__PURE__ */ U(r);
      return e || (Se(r, l) && pe(o, "has", r), pe(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ U(l), a = t ? bs : e ? Mt : Fe;
      return !e && pe(c, "iterate", _t), l.forEach((f, h) => r.call(i, a(f), a(h), o));
    }
  };
  return le(
    n,
    e ? {
      add: _n("add"),
      set: _n("set"),
      delete: _n("delete"),
      clear: _n("clear")
    } : {
      add(r) {
        !t && !/* @__PURE__ */ we(r) && !/* @__PURE__ */ We(r) && (r = /* @__PURE__ */ U(r));
        const i = /* @__PURE__ */ U(this);
        return mn(i).has.call(i, r) || (i.add(r), qe(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ we(i) && !/* @__PURE__ */ We(i) && (i = /* @__PURE__ */ U(i));
        const o = /* @__PURE__ */ U(this), { has: l, get: c } = mn(o);
        let a = l.call(o, r);
        a || (r = /* @__PURE__ */ U(r), a = l.call(o, r));
        const f = c.call(o, r);
        return o.set(r, i), a ? Se(i, f) && qe(o, "set", r, i) : qe(o, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ U(this), { has: o, get: l } = mn(i);
        let c = o.call(i, r);
        c || (r = /* @__PURE__ */ U(r), c = o.call(i, r)), l && l.call(i, r);
        const a = i.delete(r);
        return c && qe(i, "delete", r, void 0), a;
      },
      clear() {
        const r = /* @__PURE__ */ U(this), i = r.size !== 0, o = r.clear();
        return i && qe(
          r,
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
  ].forEach((r) => {
    n[r] = Ml(r, e, t);
  }), n;
}
function Xn(e, t) {
  const n = Ol(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    Y(n, r) && r in s ? n : s,
    r,
    i
  );
}
const Pl = {
  get: /* @__PURE__ */ Xn(!1, !1)
}, Rl = {
  get: /* @__PURE__ */ Xn(!1, !0)
}, Fl = {
  get: /* @__PURE__ */ Xn(!0, !1)
}, Dl = {
  get: /* @__PURE__ */ Xn(!0, !0)
}, xi = /* @__PURE__ */ new WeakMap(), Ci = /* @__PURE__ */ new WeakMap(), Ti = /* @__PURE__ */ new WeakMap(), Ei = /* @__PURE__ */ new WeakMap();
function Il(e) {
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
function Nl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Il(ol(e));
}
// @__NO_SIDE_EFFECTS__
function Zn(e) {
  return /* @__PURE__ */ We(e) ? e : Qn(
    e,
    !1,
    Cl,
    Pl,
    xi
  );
}
// @__NO_SIDE_EFFECTS__
function Ai(e) {
  return Qn(
    e,
    !1,
    El,
    Rl,
    Ci
  );
}
// @__NO_SIDE_EFFECTS__
function At(e) {
  return Qn(
    e,
    !0,
    Tl,
    Fl,
    Ti
  );
}
// @__NO_SIDE_EFFECTS__
function dt(e) {
  return Qn(
    e,
    !0,
    Al,
    Dl,
    Ei
  );
}
function Qn(e, t, n, s, r) {
  if (!J(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Nl(e);
  if (i === 0)
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const l = new Proxy(
    e,
    i === 2 ? s : n
  );
  return r.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function it(e) {
  return /* @__PURE__ */ We(e) ? /* @__PURE__ */ it(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function We(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function we(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function fn(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function U(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ U(t) : e;
}
function Mi(e) {
  return !Y(e, "__v_skip") && Object.isExtensible(e) && ii(e, "__v_skip", !0), e;
}
const Fe = (e) => J(e) ? /* @__PURE__ */ Zn(e) : e, Mt = (e) => J(e) ? /* @__PURE__ */ At(e) : e;
// @__NO_SIDE_EFFECTS__
function oe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ae(e) {
  return Oi(e, !1);
}
// @__NO_SIDE_EFFECTS__
function es(e) {
  return Oi(e, !0);
}
function Oi(e, t) {
  return /* @__PURE__ */ oe(e) ? e : new Ll(e, t);
}
class Ll {
  constructor(t, n) {
    this.dep = new zn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ U(t), this._value = n ? t : Fe(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ we(t) || /* @__PURE__ */ We(t);
    t = s ? t : /* @__PURE__ */ U(t), Se(t, n) && (this._rawValue = t, this._value = s ? t : Fe(t), this.dep.trigger());
  }
}
function $l(e) {
  e.dep && e.dep.trigger();
}
function Dt(e) {
  return /* @__PURE__ */ oe(e) ? e.value : e;
}
function ze(e) {
  return V(e) ? e() : Dt(e);
}
const Vl = {
  get: (e, t, n) => t === "__v_raw" ? e : Dt(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return /* @__PURE__ */ oe(r) && !/* @__PURE__ */ oe(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Bs(e) {
  return /* @__PURE__ */ it(e) ? e : new Proxy(e, Vl);
}
class jl {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new zn(), { get: s, set: r } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = s, this._set = r;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Ks(e) {
  return new jl(e);
}
class Hl {
  constructor(t, n, s) {
    this._object = t, this._key = n, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0, this._raw = /* @__PURE__ */ U(t);
    let r = !0, i = t;
    if (!I(t) || !Wn(String(n)))
      do
        r = !/* @__PURE__ */ fn(i) || /* @__PURE__ */ we(i);
      while (r && (i = i.__v_raw));
    this._shallow = r;
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
    return vl(this._raw, this._key);
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
// @__NO_SIDE_EFFECTS__
function Pi(e, t, n) {
  return /* @__PURE__ */ oe(e) ? e : V(e) ? new Bl(e) : J(e) && arguments.length > 1 ? Kl(e, t, n) : /* @__PURE__ */ Ae(e);
}
function Kl(e, t, n) {
  return new Hl(e, t, n);
}
class Wl {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new zn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = en - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    se !== this)
      return hi(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return mi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Ul(e, t, n = !1) {
  let s, r;
  return V(e) ? s = e : (s = e.get, r = e.set), new Wl(s, r, n);
}
const yn = {}, On = /* @__PURE__ */ new WeakMap();
let ht;
function Ri(e, t = !1, n = ht) {
  if (n) {
    let s = On.get(n);
    s || On.set(n, s = []), s.push(e);
  }
}
function kl(e, t, n = q) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: l, call: c } = n, a = (P) => r ? P : /* @__PURE__ */ we(P) || r === !1 || r === 0 ? Je(P, 1) : Je(P);
  let f, h, g, m, w = !1, _ = !1;
  if (/* @__PURE__ */ oe(e) ? (h = () => e.value, w = /* @__PURE__ */ we(e)) : /* @__PURE__ */ it(e) ? (h = () => a(e), w = !0) : I(e) ? (_ = !0, w = e.some((P) => /* @__PURE__ */ it(P) || /* @__PURE__ */ we(P)), h = () => e.map((P) => {
    if (/* @__PURE__ */ oe(P))
      return P.value;
    if (/* @__PURE__ */ it(P))
      return a(P);
    if (V(P))
      return c ? c(P, 2) : P();
  })) : V(e) ? t ? h = c ? () => c(e, 2) : e : h = () => {
    if (g) {
      Ye();
      try {
        g();
      } finally {
        Xe();
      }
    }
    const P = ht;
    ht = f;
    try {
      return c ? c(e, 3, [m]) : e(m);
    } finally {
      ht = P;
    }
  } : h = Ke, t && r) {
    const P = h, B = r === !0 ? 1 / 0 : r;
    h = () => Je(P(), B);
  }
  const F = Jn(), O = () => {
    f.stop(), F && F.active && Is(F.effects, f);
  };
  if (i && t) {
    const P = t;
    t = (...B) => {
      P(...B), O();
    };
  }
  let M = _ ? new Array(e.length).fill(yn) : yn;
  const R = (P) => {
    if (!(!(f.flags & 1) || !f.dirty && !P))
      if (t) {
        const B = f.run();
        if (r || w || (_ ? B.some((G, H) => Se(G, M[H])) : Se(B, M))) {
          g && g();
          const G = ht;
          ht = f;
          try {
            const H = [
              B,
              // pass undefined as the old value when it's changed for the first time
              M === yn ? void 0 : _ && M[0] === yn ? [] : M,
              m
            ];
            M = B, c ? c(t, 3, H) : (
              // @ts-expect-error
              t(...H)
            );
          } finally {
            ht = G;
          }
        }
      } else
        f.run();
  };
  return l && l(R), f = new $s(h), f.scheduler = o ? () => o(R, !1) : R, m = (P) => Ri(P, !1, f), g = f.onStop = () => {
    const P = On.get(f);
    if (P) {
      if (c)
        c(P, 4);
      else
        for (const B of P) B();
      On.delete(f);
    }
  }, t ? s ? R(!0) : M = f.run() : o ? o(R.bind(null, !0), !0) : f.run(), O.pause = f.pause.bind(f), O.resume = f.resume.bind(f), O.stop = O, O;
}
function Je(e, t = 1 / 0, n) {
  if (t <= 0 || !J(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ oe(e))
    Je(e.value, t, n);
  else if (I(e))
    for (let s = 0; s < e.length; s++)
      Je(e[s], t, n);
  else if (Kn(e) || wt(e))
    e.forEach((s) => {
      Je(s, t, n);
    });
  else if (ri(e)) {
    for (const s in e)
      Je(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Je(e[s], t, n);
  }
  return e;
}
function It(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    Nt(r, t, n);
  }
}
function Me(e, t, n, s) {
  if (V(e)) {
    const r = It(e, t, n, s);
    return r && ni(r) && r.catch((i) => {
      Nt(i, t, n);
    }), r;
  }
  if (I(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Me(e[i], t, n, s));
    return r;
  }
}
function Nt(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || q;
  if (t) {
    let l = t.parent;
    const c = t.proxy, a = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const f = l.ec;
      if (f) {
        for (let h = 0; h < f.length; h++)
          if (f[h](e, c, a) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Ye(), It(i, null, 10, [
        e,
        c,
        a
      ]), Xe();
      return;
    }
  }
  Gl(e, n, r, s, o);
}
function Gl(e, t, n, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const me = [];
let je = -1;
const xt = [];
let rt = null, bt = 0;
const Fi = /* @__PURE__ */ Promise.resolve();
let Pn = null;
function ts(e) {
  const t = Pn || Fi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ql(e) {
  let t = je + 1, n = me.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = me[s], i = nn(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Ws(e) {
  if (!(e.flags & 1)) {
    const t = nn(e), n = me[me.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= nn(n) ? me.push(e) : me.splice(ql(t), 0, e), e.flags |= 1, Di();
  }
}
function Di() {
  Pn || (Pn = Fi.then(Li));
}
function Ii(e) {
  I(e) ? xt.push(...e) : rt && e.id === -1 ? rt.splice(bt + 1, 0, e) : e.flags & 1 || (xt.push(e), e.flags |= 1), Di();
}
function hr(e, t, n = je + 1) {
  for (; n < me.length; n++) {
    const s = me[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      me.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Ni(e) {
  if (xt.length) {
    const t = [...new Set(xt)].sort(
      (n, s) => nn(n) - nn(s)
    );
    if (xt.length = 0, rt) {
      rt.push(...t);
      return;
    }
    for (rt = t, bt = 0; bt < rt.length; bt++) {
      const n = rt[bt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    rt = null, bt = 0;
  }
}
const nn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Li(e) {
  try {
    for (je = 0; je < me.length; je++) {
      const t = me[je];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), It(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; je < me.length; je++) {
      const t = me[je];
      t && (t.flags &= -2);
    }
    je = -1, me.length = 0, Ni(), Pn = null, (me.length || xt.length) && Li();
  }
}
let ae = null, $i = null;
function Rn(e) {
  const t = ae;
  return ae = e, $i = e && e.type.__scopeId || null, t;
}
function Vi(e, t = ae, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && rn(-1);
    const i = Rn(t);
    let o;
    try {
      o = e(...r);
    } finally {
      Rn(i), s._d && rn(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Jl(e, t) {
  if (ae === null)
    return e;
  const n = is(ae), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, c = q] = t[r];
    i && (V(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Je(o), s.push({
      dir: i,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return e;
}
function ft(e, t, n, s) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let c = l.dir[s];
    c && (Ye(), Me(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Xe());
  }
}
function ji(e, t) {
  if (ue) {
    let n = ue.provides;
    const s = ue.parent && ue.parent.provides;
    s === n && (n = ue.provides = Object.create(s)), n[e] = t;
  }
}
function Jt(e, t, n = !1) {
  const s = yt();
  if (s || Tt) {
    let r = Tt ? Tt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && V(t) ? t.call(s && s.proxy) : t;
  }
}
const Hi = /* @__PURE__ */ Symbol.for("v-scx"), Bi = () => Jt(Hi);
function Ki(e, t) {
  return Us(
    e,
    null,
    { flush: "sync" }
  );
}
function Pe(e, t, n) {
  return Us(e, t, n);
}
function Us(e, t, n = q) {
  const { immediate: s, deep: r, flush: i, once: o } = n, l = le({}, n), c = t && s || !t && i !== "post";
  let a;
  if (Rt) {
    if (i === "sync") {
      const m = Bi();
      a = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!c) {
      const m = () => {
      };
      return m.stop = Ke, m.resume = Ke, m.pause = Ke, m;
    }
  }
  const f = ue;
  l.call = (m, w, _) => Me(m, f, w, _);
  let h = !1;
  i === "post" ? l.scheduler = (m) => {
    de(m, f && f.suspense);
  } : i !== "sync" && (h = !0, l.scheduler = (m, w) => {
    w ? m() : Ws(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), h && (m.flags |= 2, f && (m.id = f.uid, m.i = f));
  };
  const g = kl(e, t, l);
  return Rt && (a ? a.push(g) : c && g()), g;
}
function zl(e, t, n) {
  const s = this.proxy, r = ie(e) ? e.includes(".") ? Wi(s, e) : () => s[e] : e.bind(s, s);
  let i;
  V(t) ? i = t : (i = t.handler, n = t);
  const o = hn(this), l = Us(r, i.bind(s), n);
  return o(), l;
}
function Wi(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const Ui = /* @__PURE__ */ Symbol("_vte"), ki = (e) => e.__isTeleport, zt = (e) => e && (e.disabled || e.disabled === ""), pr = (e) => e && (e.defer || e.defer === ""), gr = (e) => typeof SVGElement < "u" && e instanceof SVGElement, mr = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ss = (e, t) => {
  const n = e && e.to;
  return ie(n) ? t ? t(n) : null : n;
}, Gi = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, r, i, o, l, c, a) {
    const {
      mc: f,
      pc: h,
      pbc: g,
      o: { insert: m, querySelector: w, createText: _, createComment: F }
    } = a, O = zt(t.props);
    let { shapeFlag: M, children: R, dynamicChildren: P } = t;
    if (e == null) {
      const B = t.el = _(""), G = t.anchor = _("");
      m(B, n, s), m(G, n, s);
      const H = (D, K) => {
        M & 16 && f(
          R,
          D,
          K,
          r,
          i,
          o,
          l,
          c
        );
      }, k = () => {
        const D = t.target = Ss(t.props, w), K = ws(D, t, _, m);
        D && (o !== "svg" && gr(D) ? o = "svg" : o !== "mathml" && mr(D) && (o = "mathml"), r && r.isCE && (r.ce._teleportTargets || (r.ce._teleportTargets = /* @__PURE__ */ new Set())).add(D), O || (H(D, K), Tn(t, !1)));
      };
      O && (H(n, G), Tn(t, !0)), pr(t.props) ? (t.el.__isMounted = !1, de(() => {
        k(), delete t.el.__isMounted;
      }, i)) : k();
    } else {
      if (pr(t.props) && e.el.__isMounted === !1) {
        de(() => {
          Gi.process(
            e,
            t,
            n,
            s,
            r,
            i,
            o,
            l,
            c,
            a
          );
        }, i);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const B = t.anchor = e.anchor, G = t.target = e.target, H = t.targetAnchor = e.targetAnchor, k = zt(e.props), D = k ? n : G, K = k ? B : H;
      if (o === "svg" || gr(G) ? o = "svg" : (o === "mathml" || mr(G)) && (o = "mathml"), P ? (g(
        e.dynamicChildren,
        P,
        D,
        r,
        i,
        o,
        l
      ), tr(e, t, !0)) : c || h(
        e,
        t,
        D,
        K,
        r,
        i,
        o,
        l,
        !1
      ), O)
        k ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : vn(
          t,
          n,
          B,
          a,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const Z = t.target = Ss(
          t.props,
          w
        );
        Z && vn(
          t,
          Z,
          null,
          a,
          0
        );
      } else k && vn(
        t,
        G,
        H,
        a,
        1
      );
      Tn(t, O);
    }
  },
  remove(e, t, n, { um: s, o: { remove: r } }, i) {
    const {
      shapeFlag: o,
      children: l,
      anchor: c,
      targetStart: a,
      targetAnchor: f,
      target: h,
      props: g
    } = e;
    if (h && (r(a), r(f)), i && r(c), o & 16) {
      const m = i || !zt(g);
      for (let w = 0; w < l.length; w++) {
        const _ = l[w];
        s(
          _,
          t,
          n,
          m,
          !!_.dynamicChildren
        );
      }
    }
  },
  move: vn,
  hydrate: Yl
};
function vn(e, t, n, { o: { insert: s }, m: r }, i = 2) {
  i === 0 && s(e.targetAnchor, t, n);
  const { el: o, anchor: l, shapeFlag: c, children: a, props: f } = e, h = i === 2;
  if (h && s(o, t, n), (!h || zt(f)) && c & 16)
    for (let g = 0; g < a.length; g++)
      r(
        a[g],
        t,
        n,
        2
      );
  h && s(l, t, n);
}
function Yl(e, t, n, s, r, i, {
  o: { nextSibling: o, parentNode: l, querySelector: c, insert: a, createText: f }
}, h) {
  function g(F, O) {
    let M = O;
    for (; M; ) {
      if (M && M.nodeType === 8) {
        if (M.data === "teleport start anchor")
          t.targetStart = M;
        else if (M.data === "teleport anchor") {
          t.targetAnchor = M, F._lpa = t.targetAnchor && o(t.targetAnchor);
          break;
        }
      }
      M = o(M);
    }
  }
  function m(F, O) {
    O.anchor = h(
      o(F),
      O,
      l(F),
      n,
      s,
      r,
      i
    );
  }
  const w = t.target = Ss(
    t.props,
    c
  ), _ = zt(t.props);
  if (w) {
    const F = w._lpa || w.firstChild;
    t.shapeFlag & 16 && (_ ? (m(e, t), g(w, F), t.targetAnchor || ws(
      w,
      t,
      f,
      a,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      l(e) === w ? e : null
    )) : (t.anchor = o(e), g(w, F), t.targetAnchor || ws(w, t, f, a), h(
      F && o(F),
      t,
      w,
      n,
      s,
      r,
      i
    ))), Tn(t, _);
  } else _ && t.shapeFlag & 16 && (m(e, t), t.targetStart = e, t.targetAnchor = o(e));
  return t.anchor && o(t.anchor);
}
const Xl = Gi;
function Tn(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, r;
    for (t ? (s = e.el, r = e.anchor) : (s = e.targetStart, r = e.targetAnchor); s && s !== r; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function ws(e, t, n, s, r = null) {
  const i = t.targetStart = n(""), o = t.targetAnchor = n("");
  return i[Ui] = o, e && (s(i, e, r), s(o, e, r)), o;
}
const He = /* @__PURE__ */ Symbol("_leaveCb"), Ht = /* @__PURE__ */ Symbol("_enterCb");
function ks() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return an(() => {
    e.isMounted = !0;
  }), zs(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ee = [Function, Array], Gs = {
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
}, qi = (e) => {
  const t = e.subTree;
  return t.component ? qi(t.component) : t;
}, Zl = {
  name: "BaseTransition",
  props: Gs,
  setup(e, { slots: t }) {
    const n = yt(), s = ks();
    return () => {
      const r = t.default && ns(t.default(), !0);
      if (!r || !r.length)
        return;
      const i = Ji(r), o = /* @__PURE__ */ U(e), { mode: l } = o;
      if (s.isLeaving)
        return as(i);
      const c = _r(i);
      if (!c)
        return as(i);
      let a = Ot(
        c,
        o,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => a = h
      );
      c.type !== fe && ot(c, a);
      let f = n.subTree && _r(n.subTree);
      if (f && f.type !== fe && !pt(f, c) && qi(n).type !== fe) {
        let h = Ot(
          f,
          o,
          s,
          n
        );
        if (ot(f, h), l === "out-in" && c.type !== fe)
          return s.isLeaving = !0, h.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, f = void 0;
          }, as(i);
        l === "in-out" && c.type !== fe ? h.delayLeave = (g, m, w) => {
          const _ = Yi(
            s,
            f
          );
          _[String(f.key)] = f, g[He] = () => {
            m(), g[He] = void 0, delete a.delayedLeave, f = void 0;
          }, a.delayedLeave = () => {
            w(), delete a.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return i;
    };
  }
};
function Ji(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== fe) {
        t = n;
        break;
      }
  }
  return t;
}
const zi = Zl;
function Yi(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Ot(e, t, n, s, r) {
  const {
    appear: i,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: c,
    onEnter: a,
    onAfterEnter: f,
    onEnterCancelled: h,
    onBeforeLeave: g,
    onLeave: m,
    onAfterLeave: w,
    onLeaveCancelled: _,
    onBeforeAppear: F,
    onAppear: O,
    onAfterAppear: M,
    onAppearCancelled: R
  } = t, P = String(e.key), B = Yi(n, e), G = (D, K) => {
    D && Me(
      D,
      s,
      9,
      K
    );
  }, H = (D, K) => {
    const Z = K[1];
    G(D, K), I(D) ? D.every((A) => A.length <= 1) && Z() : D.length <= 1 && Z();
  }, k = {
    mode: o,
    persisted: l,
    beforeEnter(D) {
      let K = c;
      if (!n.isMounted)
        if (i)
          K = F || c;
        else
          return;
      D[He] && D[He](
        !0
        /* cancelled */
      );
      const Z = B[P];
      Z && pt(e, Z) && Z.el[He] && Z.el[He](), G(K, [D]);
    },
    enter(D) {
      let K = a, Z = f, A = h;
      if (!n.isMounted)
        if (i)
          K = O || a, Z = M || f, A = R || h;
        else
          return;
      let ee = !1;
      D[Ht] = (Q) => {
        ee || (ee = !0, Q ? G(A, [D]) : G(Z, [D]), k.delayedLeave && k.delayedLeave(), D[Ht] = void 0);
      };
      const L = D[Ht].bind(null, !1);
      K ? H(K, [D, L]) : L();
    },
    leave(D, K) {
      const Z = String(e.key);
      if (D[Ht] && D[Ht](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return K();
      G(g, [D]);
      let A = !1;
      D[He] = (L) => {
        A || (A = !0, K(), L ? G(_, [D]) : G(w, [D]), D[He] = void 0, B[Z] === e && delete B[Z]);
      };
      const ee = D[He].bind(null, !1);
      B[Z] = e, m ? H(m, [D, ee]) : ee();
    },
    clone(D) {
      const K = Ot(
        D,
        t,
        n,
        s,
        r
      );
      return r && r(K), K;
    }
  };
  return k;
}
function as(e) {
  if (un(e))
    return e = Ze(e), e.children = null, e;
}
function _r(e) {
  if (!un(e))
    return ki(e.type) && e.children ? Ji(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && V(n.default))
      return n.default();
  }
}
function ot(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ot(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ns(e, t = !1, n) {
  let s = [], r = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === _e ? (o.patchFlag & 128 && r++, s = s.concat(
      ns(o.children, t, l)
    )) : (t || o.type !== fe) && s.push(l != null ? Ze(o, { key: l }) : o);
  }
  if (r > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function Xi(e, t) {
  return V(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    le({ name: e.name }, t, { setup: e })
  ) : e;
}
function qs(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function yr(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Fn = /* @__PURE__ */ new WeakMap();
function Yt(e, t, n, s, r = !1) {
  if (I(e)) {
    e.forEach(
      (_, F) => Yt(
        _,
        t && (I(t) ? t[F] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (Ct(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Yt(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? is(s.component) : s.el, o = r ? null : i, { i: l, r: c } = e, a = t && t.r, f = l.refs === q ? l.refs = {} : l.refs, h = l.setupState, g = /* @__PURE__ */ U(h), m = h === q ? ti : (_) => yr(f, _) ? !1 : Y(g, _), w = (_, F) => !(F && yr(f, F));
  if (a != null && a !== c) {
    if (vr(t), ie(a))
      f[a] = null, m(a) && (h[a] = null);
    else if (/* @__PURE__ */ oe(a)) {
      const _ = t;
      w(a, _.k) && (a.value = null), _.k && (f[_.k] = null);
    }
  }
  if (V(c))
    It(c, l, 12, [o, f]);
  else {
    const _ = ie(c), F = /* @__PURE__ */ oe(c);
    if (_ || F) {
      const O = () => {
        if (e.f) {
          const M = _ ? m(c) ? h[c] : f[c] : w() || !e.k ? c.value : f[e.k];
          if (r)
            I(M) && Is(M, i);
          else if (I(M))
            M.includes(i) || M.push(i);
          else if (_)
            f[c] = [i], m(c) && (h[c] = f[c]);
          else {
            const R = [i];
            w(c, e.k) && (c.value = R), e.k && (f[e.k] = R);
          }
        } else _ ? (f[c] = o, m(c) && (h[c] = o)) : F && (w(c, e.k) && (c.value = o), e.k && (f[e.k] = o));
      };
      if (o) {
        const M = () => {
          O(), Fn.delete(e);
        };
        M.id = -1, Fn.set(e, M), de(M, n);
      } else
        vr(e), O();
    }
  }
}
function vr(e) {
  const t = Fn.get(e);
  t && (t.flags |= 8, Fn.delete(e));
}
const br = (e) => e.nodeType === 8;
kn().requestIdleCallback;
kn().cancelIdleCallback;
function Ql(e, t) {
  if (br(e) && e.data === "[") {
    let n = 1, s = e.nextSibling;
    for (; s; ) {
      if (s.nodeType === 1) {
        if (t(s) === !1)
          break;
      } else if (br(s))
        if (s.data === "]") {
          if (--n === 0) break;
        } else s.data === "[" && n++;
      s = s.nextSibling;
    }
  } else
    t(e);
}
const Ct = (e) => !!e.type.__asyncLoader;
// @__NO_SIDE_EFFECTS__
function ec(e) {
  V(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: s,
    delay: r = 200,
    hydrate: i,
    timeout: o,
    // undefined = never times out
    suspensible: l = !0,
    onError: c
  } = e;
  let a = null, f, h = 0;
  const g = () => (h++, a = null, m()), m = () => {
    let w;
    return a || (w = a = t().catch((_) => {
      if (_ = _ instanceof Error ? _ : new Error(String(_)), c)
        return new Promise((F, O) => {
          c(_, () => F(g()), () => O(_), h + 1);
        });
      throw _;
    }).then((_) => w !== a && a ? a : (_ && (_.__esModule || _[Symbol.toStringTag] === "Module") && (_ = _.default), f = _, _)));
  };
  return /* @__PURE__ */ Xi({
    name: "AsyncComponentWrapper",
    __asyncLoader: m,
    __asyncHydrate(w, _, F) {
      let O = !1;
      (_.bu || (_.bu = [])).push(() => O = !0);
      const M = () => {
        O || F();
      }, R = i ? () => {
        const P = i(
          M,
          (B) => Ql(w, B)
        );
        P && (_.bum || (_.bum = [])).push(P);
      } : M;
      f ? R() : m().then(() => !_.isUnmounted && R());
    },
    get __asyncResolved() {
      return f;
    },
    setup() {
      const w = ue;
      if (qs(w), f)
        return () => bn(f, w);
      const _ = (R) => {
        a = null, Nt(
          R,
          w,
          13,
          !s
        );
      };
      if (l && w.suspense || Rt)
        return m().then((R) => () => bn(R, w)).catch((R) => (_(R), () => s ? ce(s, {
          error: R
        }) : null));
      const F = /* @__PURE__ */ Ae(!1), O = /* @__PURE__ */ Ae(), M = /* @__PURE__ */ Ae(!!r);
      return r && setTimeout(() => {
        M.value = !1;
      }, r), o != null && setTimeout(() => {
        if (!F.value && !O.value) {
          const R = new Error(
            `Async component timed out after ${o}ms.`
          );
          _(R), O.value = R;
        }
      }, o), m().then(() => {
        F.value = !0, w.parent && un(w.parent.vnode) && w.parent.update();
      }).catch((R) => {
        _(R), O.value = R;
      }), () => {
        if (F.value && f)
          return bn(f, w);
        if (O.value && s)
          return ce(s, {
            error: O.value
          });
        if (n && !M.value)
          return bn(
            n,
            w
          );
      };
    }
  });
}
function bn(e, t) {
  const { ref: n, props: s, children: r, ce: i } = t.vnode, o = ce(e, s, r);
  return o.ref = n, o.ce = i, delete t.vnode.ce, o;
}
const un = (e) => e.type.__isKeepAlive;
function Zi(e, t) {
  eo(e, "a", t);
}
function Qi(e, t) {
  eo(e, "da", t);
}
function eo(e, t, n = ue) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (ss(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      un(r.parent.vnode) && tc(s, t, n, r), r = r.parent;
  }
}
function tc(e, t, n, s) {
  const r = ss(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Ys(() => {
    Is(s[t], r);
  }, n);
}
function ss(e, t, n = ue, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Ye();
      const l = hn(n), c = Me(t, n, e, o);
      return l(), Xe(), c;
    });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const et = (e) => (t, n = ue) => {
  (!Rt || e === "sp") && ss(e, (...s) => t(...s), n);
}, to = et("bm"), an = et("m"), no = et(
  "bu"
), Js = et("u"), zs = et(
  "bum"
), Ys = et("um"), so = et(
  "sp"
), ro = et("rtg"), io = et("rtc");
function oo(e, t = ue) {
  ss("ec", e, t);
}
const Xs = "components", nc = "directives";
function sc(e, t) {
  return Zs(Xs, e, !0, t) || e;
}
const lo = /* @__PURE__ */ Symbol.for("v-ndc");
function rc(e) {
  return ie(e) ? Zs(Xs, e, !1) || e : e || lo;
}
function ic(e) {
  return Zs(nc, e);
}
function Zs(e, t, n = !0, s = !1) {
  const r = ae || ue;
  if (r) {
    const i = r.type;
    if (e === Xs) {
      const l = Gc(
        i,
        !1
      );
      if (l && (l === t || l === xe(t) || l === ln(xe(t))))
        return i;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      Sr(r[e] || i[e], t) || // global registration
      Sr(r.appContext[e], t)
    );
    return !o && s ? i : o;
  }
}
function Sr(e, t) {
  return e && (e[t] || e[xe(t)] || e[ln(xe(t))]);
}
function oc(e, t, n, s) {
  let r;
  const i = n, o = I(e);
  if (o || ie(e)) {
    const l = o && /* @__PURE__ */ it(e);
    let c = !1, a = !1;
    l && (c = !/* @__PURE__ */ we(e), a = /* @__PURE__ */ We(e), e = Yn(e)), r = new Array(e.length);
    for (let f = 0, h = e.length; f < h; f++)
      r[f] = t(
        c ? a ? Mt(Fe(e[f])) : Fe(e[f]) : e[f],
        f,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, i);
  } else if (J(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (l, c) => t(l, c, void 0, i)
      );
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let c = 0, a = l.length; c < a; c++) {
        const f = l[c];
        r[c] = t(e[f], f, c, i);
      }
    }
  else
    r = [];
  return r;
}
function lc(e, t, n = {}, s, r) {
  if (ae.ce || ae.parent && Ct(ae.parent) && ae.parent.ce) {
    const a = Object.keys(n).length > 0;
    return t !== "default" && (n.name = t), Nn(), Ln(
      _e,
      null,
      [ce("slot", n, s && s())],
      a ? -2 : 64
    );
  }
  let i = e[t];
  i && i._c && (i._d = !1), Nn();
  const o = i && co(i(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  o && o.key, c = Ln(
    _e,
    {
      key: (l && !Re(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!o && s ? "_fb" : "")
    },
    o || (s ? s() : []),
    o && e._ === 1 ? 64 : -2
  );
  return !r && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), i && i._c && (i._d = !0), c;
}
function co(e) {
  return e.some((t) => Pt(t) ? !(t.type === fe || t.type === _e && !co(t.children)) : !0) ? e : null;
}
const xs = (e) => e ? Do(e) ? is(e) : xs(e.parent) : null, Xt = (
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
    $parent: (e) => xs(e.parent),
    $root: (e) => xs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => uo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ws(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ts.bind(e.proxy)),
    $watch: (e) => zl.bind(e)
  })
), ds = (e, t) => e !== q && !e.__isScriptSetup && Y(e, t), cc = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: l, appContext: c } = e;
    if (t[0] !== "$") {
      const g = o[t];
      if (g !== void 0)
        switch (g) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (ds(s, t))
          return o[t] = 1, s[t];
        if (r !== q && Y(r, t))
          return o[t] = 2, r[t];
        if (Y(i, t))
          return o[t] = 3, i[t];
        if (n !== q && Y(n, t))
          return o[t] = 4, n[t];
        Cs && (o[t] = 0);
      }
    }
    const a = Xt[t];
    let f, h;
    if (a)
      return t === "$attrs" && pe(e.attrs, "get", ""), a(e);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== q && Y(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      h = c.config.globalProperties, Y(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: i } = e;
    return ds(r, t) ? (r[t] = n, !0) : s !== q && Y(s, t) ? (s[t] = n, !0) : Y(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, props: i, type: o }
  }, l) {
    let c;
    return !!(n[l] || e !== q && l[0] !== "$" && Y(e, l) || ds(t, l) || Y(i, l) || Y(s, l) || Y(Xt, l) || Y(r.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Y(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Dn(e) {
  return I(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function fc(e, t) {
  return !e || !t ? e || t : I(e) && I(t) ? e.concat(t) : le({}, Dn(e), Dn(t));
}
let Cs = !0;
function uc(e) {
  const t = uo(e), n = e.proxy, s = e.ctx;
  Cs = !1, t.beforeCreate && wr(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: c,
    inject: a,
    // lifecycle
    created: f,
    beforeMount: h,
    mounted: g,
    beforeUpdate: m,
    updated: w,
    activated: _,
    deactivated: F,
    beforeDestroy: O,
    beforeUnmount: M,
    destroyed: R,
    unmounted: P,
    render: B,
    renderTracked: G,
    renderTriggered: H,
    errorCaptured: k,
    serverPrefetch: D,
    // public API
    expose: K,
    inheritAttrs: Z,
    // assets
    components: A,
    directives: ee,
    filters: L
  } = t;
  if (a && ac(a, s, null), o)
    for (const re in o) {
      const te = o[re];
      V(te) && (s[re] = te.bind(n));
    }
  if (r) {
    const re = r.call(n, n);
    J(re) && (e.data = /* @__PURE__ */ Zn(re));
  }
  if (Cs = !0, i)
    for (const re in i) {
      const te = i[re], lt = V(te) ? te.bind(n, n) : V(te.get) ? te.get.bind(n, n) : Ke, pn = !V(te) && V(te.set) ? te.set.bind(n) : Ke, ct = be({
        get: lt,
        set: pn
      });
      Object.defineProperty(s, re, {
        enumerable: !0,
        configurable: !0,
        get: () => ct.value,
        set: (De) => ct.value = De
      });
    }
  if (l)
    for (const re in l)
      fo(l[re], s, n, re);
  if (c) {
    const re = V(c) ? c.call(n) : c;
    Reflect.ownKeys(re).forEach((te) => {
      ji(te, re[te]);
    });
  }
  f && wr(f, e, "c");
  function z(re, te) {
    I(te) ? te.forEach((lt) => re(lt.bind(n))) : te && re(te.bind(n));
  }
  if (z(to, h), z(an, g), z(no, m), z(Js, w), z(Zi, _), z(Qi, F), z(oo, k), z(io, G), z(ro, H), z(zs, M), z(Ys, P), z(so, D), I(K))
    if (K.length) {
      const re = e.exposed || (e.exposed = {});
      K.forEach((te) => {
        Object.defineProperty(re, te, {
          get: () => n[te],
          set: (lt) => n[te] = lt,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  B && e.render === Ke && (e.render = B), Z != null && (e.inheritAttrs = Z), A && (e.components = A), ee && (e.directives = ee), D && qs(e);
}
function ac(e, t, n = Ke) {
  I(e) && (e = Ts(e));
  for (const s in e) {
    const r = e[s];
    let i;
    J(r) ? "default" in r ? i = Jt(
      r.from || s,
      r.default,
      !0
    ) : i = Jt(r.from || s) : i = Jt(r), /* @__PURE__ */ oe(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[s] = i;
  }
}
function wr(e, t, n) {
  Me(
    I(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function fo(e, t, n, s) {
  let r = s.includes(".") ? Wi(n, s) : () => n[s];
  if (ie(e)) {
    const i = t[e];
    V(i) && Pe(r, i);
  } else if (V(e))
    Pe(r, e.bind(n));
  else if (J(e))
    if (I(e))
      e.forEach((i) => fo(i, t, n, s));
    else {
      const i = V(e.handler) ? e.handler.bind(n) : t[e.handler];
      V(i) && Pe(r, i, e);
    }
}
function uo(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let c;
  return l ? c = l : !r.length && !n && !s ? c = t : (c = {}, r.length && r.forEach(
    (a) => In(c, a, o, !0)
  ), In(c, t, o)), J(t) && i.set(t, c), c;
}
function In(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && In(e, i, n, !0), r && r.forEach(
    (o) => In(e, o, n, !0)
  );
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = dc[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const dc = {
  data: xr,
  props: Cr,
  emits: Cr,
  // objects
  methods: Ut,
  computed: Ut,
  // lifecycle
  beforeCreate: ge,
  created: ge,
  beforeMount: ge,
  mounted: ge,
  beforeUpdate: ge,
  updated: ge,
  beforeDestroy: ge,
  beforeUnmount: ge,
  destroyed: ge,
  unmounted: ge,
  activated: ge,
  deactivated: ge,
  errorCaptured: ge,
  serverPrefetch: ge,
  // assets
  components: Ut,
  directives: Ut,
  // watch
  watch: pc,
  // provide / inject
  provide: xr,
  inject: hc
};
function xr(e, t) {
  return t ? e ? function() {
    return le(
      V(e) ? e.call(this, this) : e,
      V(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function hc(e, t) {
  return Ut(Ts(e), Ts(t));
}
function Ts(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ge(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ut(e, t) {
  return e ? le(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Cr(e, t) {
  return e ? I(e) && I(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : le(
    /* @__PURE__ */ Object.create(null),
    Dn(e),
    Dn(t ?? {})
  ) : t;
}
function pc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = le(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = ge(e[s], t[s]);
  return n;
}
function ao() {
  return {
    app: null,
    config: {
      isNativeTag: ti,
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
let gc = 0;
function mc(e, t) {
  return function(s, r = null) {
    V(s) || (s = le({}, s)), r != null && !J(r) && (r = null);
    const i = ao(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const a = i.app = {
      _uid: gc++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Lo,
      get config() {
        return i.config;
      },
      set config(f) {
      },
      use(f, ...h) {
        return o.has(f) || (f && V(f.install) ? (o.add(f), f.install(a, ...h)) : V(f) && (o.add(f), f(a, ...h))), a;
      },
      mixin(f) {
        return i.mixins.includes(f) || i.mixins.push(f), a;
      },
      component(f, h) {
        return h ? (i.components[f] = h, a) : i.components[f];
      },
      directive(f, h) {
        return h ? (i.directives[f] = h, a) : i.directives[f];
      },
      mount(f, h, g) {
        if (!c) {
          const m = a._ceVNode || ce(s, r);
          return m.appContext = i, g === !0 ? g = "svg" : g === !1 && (g = void 0), e(m, f, g), c = !0, a._container = f, f.__vue_app__ = a, is(m.component);
        }
      },
      onUnmount(f) {
        l.push(f);
      },
      unmount() {
        c && (Me(
          l,
          a._instance,
          16
        ), e(null, a._container), delete a._container.__vue_app__);
      },
      provide(f, h) {
        return i.provides[f] = h, a;
      },
      runWithContext(f) {
        const h = Tt;
        Tt = a;
        try {
          return f();
        } finally {
          Tt = h;
        }
      }
    };
    return a;
  };
}
let Tt = null;
function _c(e, t, n = q) {
  const s = yt(), r = xe(t), i = Qe(t), o = ho(e, r), l = Ks((c, a) => {
    let f, h = q, g;
    return Ki(() => {
      const m = e[r];
      Se(f, m) && (f = m, a());
    }), {
      get() {
        return c(), n.get ? n.get(f) : f;
      },
      set(m) {
        const w = n.set ? n.set(m) : m;
        if (!Se(w, f) && !(h !== q && Se(m, h)))
          return;
        const _ = s.vnode.props;
        _ && // check if parent has passed v-model
        (t in _ || r in _ || i in _) && (`onUpdate:${t}` in _ || `onUpdate:${r}` in _ || `onUpdate:${i}` in _) || (f = m, a()), s.emit(`update:${t}`, w), Se(m, w) && Se(m, h) && !Se(w, g) && a(), h = m, g = w;
      }
    };
  });
  return l[Symbol.iterator] = () => {
    let c = 0;
    return {
      next() {
        return c < 2 ? { value: c++ ? o || q : l, done: !1 } : { done: !0 };
      }
    };
  }, l;
}
const ho = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${xe(t)}Modifiers`] || e[`${Qe(t)}Modifiers`];
function yc(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || q;
  let r = n;
  const i = t.startsWith("update:"), o = i && ho(s, t.slice(7));
  o && (o.trim && (r = n.map((f) => ie(f) ? f.trim() : f)), o.number && (r = n.map(Ns)));
  let l, c = s[l = xn(t)] || // also try camelCase event handler (#2249)
  s[l = xn(xe(t))];
  !c && i && (c = s[l = xn(Qe(t))]), c && Me(
    c,
    e,
    6,
    r
  );
  const a = s[l + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Me(
      a,
      e,
      6,
      r
    );
  }
}
const vc = /* @__PURE__ */ new WeakMap();
function po(e, t, n = !1) {
  const s = n ? vc : t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, l = !1;
  if (!V(e)) {
    const c = (a) => {
      const f = po(a, t, !0);
      f && (l = !0, le(o, f));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !l ? (J(e) && s.set(e, null), null) : (I(i) ? i.forEach((c) => o[c] = null) : le(o, i), J(e) && s.set(e, o), o);
}
function rs(e, t) {
  return !e || !Bn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Y(e, t[0].toLowerCase() + t.slice(1)) || Y(e, Qe(t)) || Y(e, t));
}
function Tr(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: c,
    render: a,
    renderCache: f,
    props: h,
    data: g,
    setupState: m,
    ctx: w,
    inheritAttrs: _
  } = e, F = Rn(e);
  let O, M;
  try {
    if (n.shapeFlag & 4) {
      const P = r || s, B = P;
      O = Be(
        a.call(
          B,
          P,
          f,
          h,
          m,
          g,
          w
        )
      ), M = l;
    } else {
      const P = t;
      O = Be(
        P.length > 1 ? P(
          h,
          { attrs: l, slots: o, emit: c }
        ) : P(
          h,
          null
        )
      ), M = t.props ? l : bc(l);
    }
  } catch (P) {
    Qt.length = 0, Nt(P, e, 1), O = ce(fe);
  }
  let R = O;
  if (M && _ !== !1) {
    const P = Object.keys(M), { shapeFlag: B } = R;
    P.length && B & 7 && (i && P.some(Ds) && (M = Sc(
      M,
      i
    )), R = Ze(R, M, !1, !0));
  }
  return n.dirs && (R = Ze(R, null, !1, !0), R.dirs = R.dirs ? R.dirs.concat(n.dirs) : n.dirs), n.transition && ot(R, n.transition), O = R, Rn(F), O;
}
const bc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Bn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Sc = (e, t) => {
  const n = {};
  for (const s in e)
    (!Ds(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function wc(e, t, n) {
  const { props: s, children: r, component: i } = e, { props: o, children: l, patchFlag: c } = t, a = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? Er(s, o, a) : !!o;
    if (c & 8) {
      const f = t.dynamicProps;
      for (let h = 0; h < f.length; h++) {
        const g = f[h];
        if (go(o, s, g) && !rs(a, g))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? Er(s, o, a) : !0 : !!o;
  return !1;
}
function Er(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (go(t, e, i) && !rs(n, i))
      return !0;
  }
  return !1;
}
function go(e, t, n) {
  const s = e[n], r = t[n];
  return n === "style" && J(s) && J(r) ? !cn(s, r) : s !== r;
}
function xc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const mo = {}, _o = () => Object.create(mo), yo = (e) => Object.getPrototypeOf(e) === mo;
function Cc(e, t, n, s = !1) {
  const r = {}, i = _o();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), vo(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  n ? e.props = s ? r : /* @__PURE__ */ Ai(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Tc(e, t, n, s) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ U(r), [c] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const f = e.vnode.dynamicProps;
      for (let h = 0; h < f.length; h++) {
        let g = f[h];
        if (rs(e.emitsOptions, g))
          continue;
        const m = t[g];
        if (c)
          if (Y(i, g))
            m !== i[g] && (i[g] = m, a = !0);
          else {
            const w = xe(g);
            r[w] = Es(
              c,
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
    vo(e, t, r, i) && (a = !0);
    let f;
    for (const h in l)
      (!t || // for camelCase
      !Y(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = Qe(h)) === h || !Y(t, f))) && (c ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[f] !== void 0) && (r[h] = Es(
        c,
        l,
        h,
        void 0,
        e,
        !0
      )) : delete r[h]);
    if (i !== l)
      for (const h in i)
        (!t || !Y(t, h)) && (delete i[h], a = !0);
  }
  a && qe(e.attrs, "set", "");
}
function vo(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (kt(c))
        continue;
      const a = t[c];
      let f;
      r && Y(r, f = xe(c)) ? !i || !i.includes(f) ? n[f] = a : (l || (l = {}))[f] = a : rs(e.emitsOptions, c) || (!(c in s) || a !== s[c]) && (s[c] = a, o = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ U(n), a = l || q;
    for (let f = 0; f < i.length; f++) {
      const h = i[f];
      n[h] = Es(
        r,
        c,
        h,
        a[h],
        e,
        !Y(a, h)
      );
    }
  }
  return o;
}
function Es(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const l = Y(o, "default");
    if (l && s === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && V(c)) {
        const { propsDefaults: a } = r;
        if (n in a)
          s = a[n];
        else {
          const f = hn(r);
          s = a[n] = c.call(
            null,
            t
          ), f();
        }
      } else
        s = c;
      r.ce && r.ce._setProp(n, s);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !l ? s = !1 : o[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Qe(n)) && (s = !0));
  }
  return s;
}
const Ec = /* @__PURE__ */ new WeakMap();
function bo(e, t, n = !1) {
  const s = n ? Ec : t.propsCache, r = s.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  let c = !1;
  if (!V(e)) {
    const f = (h) => {
      c = !0;
      const [g, m] = bo(h, t, !0);
      le(o, g), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!i && !c)
    return J(e) && s.set(e, St), St;
  if (I(i))
    for (let f = 0; f < i.length; f++) {
      const h = xe(i[f]);
      Ar(h) && (o[h] = q);
    }
  else if (i)
    for (const f in i) {
      const h = xe(f);
      if (Ar(h)) {
        const g = i[f], m = o[h] = I(g) || V(g) ? { type: g } : le({}, g), w = m.type;
        let _ = !1, F = !0;
        if (I(w))
          for (let O = 0; O < w.length; ++O) {
            const M = w[O], R = V(M) && M.name;
            if (R === "Boolean") {
              _ = !0;
              break;
            } else R === "String" && (F = !1);
          }
        else
          _ = V(w) && w.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = _, m[
          1
          /* shouldCastTrue */
        ] = F, (_ || Y(m, "default")) && l.push(h);
      }
    }
  const a = [o, l];
  return J(e) && s.set(e, a), a;
}
function Ar(e) {
  return e[0] !== "$" && !kt(e);
}
const Qs = (e) => e === "_" || e === "_ctx" || e === "$stable", er = (e) => I(e) ? e.map(Be) : [Be(e)], Ac = (e, t, n) => {
  if (t._n)
    return t;
  const s = Vi((...r) => er(t(...r)), n);
  return s._c = !1, s;
}, So = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (Qs(r)) continue;
    const i = e[r];
    if (V(i))
      t[r] = Ac(r, i, s);
    else if (i != null) {
      const o = er(i);
      t[r] = () => o;
    }
  }
}, wo = (e, t) => {
  const n = er(t);
  e.slots.default = () => n;
}, xo = (e, t, n) => {
  for (const s in t)
    (n || !Qs(s)) && (e[s] = t[s]);
}, Mc = (e, t, n) => {
  const s = e.slots = _o();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (xo(s, t, n), n && ii(s, "_", r, !0)) : So(t, s);
  } else t && wo(e, t);
}, Oc = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let i = !0, o = q;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : xo(r, t, n) : (i = !t.$stable, So(t, r)), o = t;
  } else t && (wo(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !Qs(l) && o[l] == null && delete r[l];
}, de = Dc;
function Co(e) {
  return Pc(e);
}
function Pc(e, t) {
  const n = kn();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: c,
    setText: a,
    setElementText: f,
    parentNode: h,
    nextSibling: g,
    setScopeId: m = Ke,
    insertStaticContent: w
  } = e, _ = (u, d, p, S = null, y = null, v = null, T = void 0, C = null, x = !!d.dynamicChildren) => {
    if (u === d)
      return;
    u && !pt(u, d) && (S = gn(u), De(u, y, v, !0), u = null), d.patchFlag === -2 && (x = !1, d.dynamicChildren = null);
    const { type: b, ref: $, shapeFlag: E } = d;
    switch (b) {
      case dn:
        F(u, d, p, S);
        break;
      case fe:
        O(u, d, p, S);
        break;
      case Zt:
        u == null && M(d, p, S, T);
        break;
      case _e:
        A(
          u,
          d,
          p,
          S,
          y,
          v,
          T,
          C,
          x
        );
        break;
      default:
        E & 1 ? B(
          u,
          d,
          p,
          S,
          y,
          v,
          T,
          C,
          x
        ) : E & 6 ? ee(
          u,
          d,
          p,
          S,
          y,
          v,
          T,
          C,
          x
        ) : (E & 64 || E & 128) && b.process(
          u,
          d,
          p,
          S,
          y,
          v,
          T,
          C,
          x,
          $t
        );
    }
    $ != null && y ? Yt($, u && u.ref, v, d || u, !d) : $ == null && u && u.ref != null && Yt(u.ref, null, v, u, !0);
  }, F = (u, d, p, S) => {
    if (u == null)
      s(
        d.el = l(d.children),
        p,
        S
      );
    else {
      const y = d.el = u.el;
      d.children !== u.children && a(y, d.children);
    }
  }, O = (u, d, p, S) => {
    u == null ? s(
      d.el = c(d.children || ""),
      p,
      S
    ) : d.el = u.el;
  }, M = (u, d, p, S) => {
    [u.el, u.anchor] = w(
      u.children,
      d,
      p,
      S,
      u.el,
      u.anchor
    );
  }, R = ({ el: u, anchor: d }, p, S) => {
    let y;
    for (; u && u !== d; )
      y = g(u), s(u, p, S), u = y;
    s(d, p, S);
  }, P = ({ el: u, anchor: d }) => {
    let p;
    for (; u && u !== d; )
      p = g(u), r(u), u = p;
    r(d);
  }, B = (u, d, p, S, y, v, T, C, x) => {
    if (d.type === "svg" ? T = "svg" : d.type === "math" && (T = "mathml"), u == null)
      G(
        d,
        p,
        S,
        y,
        v,
        T,
        C,
        x
      );
    else {
      const b = u.el && u.el._isVueCE ? u.el : null;
      try {
        b && b._beginPatch(), D(
          u,
          d,
          y,
          v,
          T,
          C,
          x
        );
      } finally {
        b && b._endPatch();
      }
    }
  }, G = (u, d, p, S, y, v, T, C) => {
    let x, b;
    const { props: $, shapeFlag: E, transition: N, dirs: j } = u;
    if (x = u.el = o(
      u.type,
      v,
      $ && $.is,
      $
    ), E & 8 ? f(x, u.children) : E & 16 && k(
      u.children,
      x,
      null,
      S,
      y,
      hs(u, v),
      T,
      C
    ), j && ft(u, null, S, "created"), H(x, u, u.scopeId, T, S), $) {
      for (const ne in $)
        ne !== "value" && !kt(ne) && i(x, ne, null, $[ne], v, S);
      "value" in $ && i(x, "value", null, $.value, v), (b = $.onVnodeBeforeMount) && $e(b, S, u);
    }
    j && ft(u, null, S, "beforeMount");
    const W = Rc(y, N);
    W && N.beforeEnter(x), s(x, d, p), ((b = $ && $.onVnodeMounted) || W || j) && de(() => {
      b && $e(b, S, u), W && N.enter(x), j && ft(u, null, S, "mounted");
    }, y);
  }, H = (u, d, p, S, y) => {
    if (p && m(u, p), S)
      for (let v = 0; v < S.length; v++)
        m(u, S[v]);
    if (y) {
      let v = y.subTree;
      if (d === v || Ao(v.type) && (v.ssContent === d || v.ssFallback === d)) {
        const T = y.vnode;
        H(
          u,
          T,
          T.scopeId,
          T.slotScopeIds,
          y.parent
        );
      }
    }
  }, k = (u, d, p, S, y, v, T, C, x = 0) => {
    for (let b = x; b < u.length; b++) {
      const $ = u[b] = C ? Ge(u[b]) : Be(u[b]);
      _(
        null,
        $,
        d,
        p,
        S,
        y,
        v,
        T,
        C
      );
    }
  }, D = (u, d, p, S, y, v, T) => {
    const C = d.el = u.el;
    let { patchFlag: x, dynamicChildren: b, dirs: $ } = d;
    x |= u.patchFlag & 16;
    const E = u.props || q, N = d.props || q;
    let j;
    if (p && ut(p, !1), (j = N.onVnodeBeforeUpdate) && $e(j, p, d, u), $ && ft(d, u, p, "beforeUpdate"), p && ut(p, !0), (E.innerHTML && N.innerHTML == null || E.textContent && N.textContent == null) && f(C, ""), b ? K(
      u.dynamicChildren,
      b,
      C,
      p,
      S,
      hs(d, y),
      v
    ) : T || te(
      u,
      d,
      C,
      null,
      p,
      S,
      hs(d, y),
      v,
      !1
    ), x > 0) {
      if (x & 16)
        Z(C, E, N, p, y);
      else if (x & 2 && E.class !== N.class && i(C, "class", null, N.class, y), x & 4 && i(C, "style", E.style, N.style, y), x & 8) {
        const W = d.dynamicProps;
        for (let ne = 0; ne < W.length; ne++) {
          const X = W[ne], ye = E[X], ve = N[X];
          (ve !== ye || X === "value") && i(C, X, ye, ve, y, p);
        }
      }
      x & 1 && u.children !== d.children && f(C, d.children);
    } else !T && b == null && Z(C, E, N, p, y);
    ((j = N.onVnodeUpdated) || $) && de(() => {
      j && $e(j, p, d, u), $ && ft(d, u, p, "updated");
    }, S);
  }, K = (u, d, p, S, y, v, T) => {
    for (let C = 0; C < d.length; C++) {
      const x = u[C], b = d[C], $ = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        x.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (x.type === _e || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !pt(x, b) || // - In the case of a component, it could contain anything.
        x.shapeFlag & 198) ? h(x.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      _(
        x,
        b,
        $,
        null,
        S,
        y,
        v,
        T,
        !0
      );
    }
  }, Z = (u, d, p, S, y) => {
    if (d !== p) {
      if (d !== q)
        for (const v in d)
          !kt(v) && !(v in p) && i(
            u,
            v,
            d[v],
            null,
            y,
            S
          );
      for (const v in p) {
        if (kt(v)) continue;
        const T = p[v], C = d[v];
        T !== C && v !== "value" && i(u, v, C, T, y, S);
      }
      "value" in p && i(u, "value", d.value, p.value, y);
    }
  }, A = (u, d, p, S, y, v, T, C, x) => {
    const b = d.el = u ? u.el : l(""), $ = d.anchor = u ? u.anchor : l("");
    let { patchFlag: E, dynamicChildren: N, slotScopeIds: j } = d;
    j && (C = C ? C.concat(j) : j), u == null ? (s(b, p, S), s($, p, S), k(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      p,
      $,
      y,
      v,
      T,
      C,
      x
    )) : E > 0 && E & 64 && N && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === N.length ? (K(
      u.dynamicChildren,
      N,
      p,
      y,
      v,
      T,
      C
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || y && d === y.subTree) && tr(
      u,
      d,
      !0
      /* shallow */
    )) : te(
      u,
      d,
      p,
      $,
      y,
      v,
      T,
      C,
      x
    );
  }, ee = (u, d, p, S, y, v, T, C, x) => {
    d.slotScopeIds = C, u == null ? d.shapeFlag & 512 ? y.ctx.activate(
      d,
      p,
      S,
      T,
      x
    ) : L(
      d,
      p,
      S,
      y,
      v,
      T,
      x
    ) : Q(u, d, x);
  }, L = (u, d, p, S, y, v, T) => {
    const C = u.component = Bc(
      u,
      S,
      y
    );
    if (un(u) && (C.ctx.renderer = $t), Kc(C, !1, T), C.asyncDep) {
      if (y && y.registerDep(C, z, T), !u.el) {
        const x = C.subTree = ce(fe);
        O(null, x, d, p), u.placeholder = x.el;
      }
    } else
      z(
        C,
        u,
        d,
        p,
        y,
        v,
        T
      );
  }, Q = (u, d, p) => {
    const S = d.component = u.component;
    if (wc(u, d, p))
      if (S.asyncDep && !S.asyncResolved) {
        re(S, d, p);
        return;
      } else
        S.next = d, S.update();
    else
      d.el = u.el, S.vnode = d;
  }, z = (u, d, p, S, y, v, T) => {
    const C = () => {
      if (u.isMounted) {
        let { next: E, bu: N, u: j, parent: W, vnode: ne } = u;
        {
          const Ne = To(u);
          if (Ne) {
            E && (E.el = ne.el, re(u, E, T)), Ne.asyncDep.then(() => {
              de(() => {
                u.isUnmounted || b();
              }, y);
            });
            return;
          }
        }
        let X = E, ye;
        ut(u, !1), E ? (E.el = ne.el, re(u, E, T)) : E = ne, N && Cn(N), (ye = E.props && E.props.onVnodeBeforeUpdate) && $e(ye, W, E, ne), ut(u, !0);
        const ve = Tr(u), Ie = u.subTree;
        u.subTree = ve, _(
          Ie,
          ve,
          // parent may have changed if it's in a teleport
          h(Ie.el),
          // anchor may have changed if it's in a fragment
          gn(Ie),
          u,
          y,
          v
        ), E.el = ve.el, X === null && xc(u, ve.el), j && de(j, y), (ye = E.props && E.props.onVnodeUpdated) && de(
          () => $e(ye, W, E, ne),
          y
        );
      } else {
        let E;
        const { el: N, props: j } = d, { bm: W, m: ne, parent: X, root: ye, type: ve } = u, Ie = Ct(d);
        ut(u, !1), W && Cn(W), !Ie && (E = j && j.onVnodeBeforeMount) && $e(E, X, d), ut(u, !0);
        {
          ye.ce && ye.ce._hasShadowRoot() && ye.ce._injectChildStyle(ve);
          const Ne = u.subTree = Tr(u);
          _(
            null,
            Ne,
            p,
            S,
            u,
            y,
            v
          ), d.el = Ne.el;
        }
        if (ne && de(ne, y), !Ie && (E = j && j.onVnodeMounted)) {
          const Ne = d;
          de(
            () => $e(E, X, Ne),
            y
          );
        }
        (d.shapeFlag & 256 || X && Ct(X.vnode) && X.vnode.shapeFlag & 256) && u.a && de(u.a, y), u.isMounted = !0, d = p = S = null;
      }
    };
    u.scope.on();
    const x = u.effect = new $s(C);
    u.scope.off();
    const b = u.update = x.run.bind(x), $ = u.job = x.runIfDirty.bind(x);
    $.i = u, $.id = u.uid, x.scheduler = () => Ws($), ut(u, !0), b();
  }, re = (u, d, p) => {
    d.component = u;
    const S = u.vnode.props;
    u.vnode = d, u.next = null, Tc(u, d.props, S, p), Oc(u, d.children, p), Ye(), hr(u), Xe();
  }, te = (u, d, p, S, y, v, T, C, x = !1) => {
    const b = u && u.children, $ = u ? u.shapeFlag : 0, E = d.children, { patchFlag: N, shapeFlag: j } = d;
    if (N > 0) {
      if (N & 128) {
        pn(
          b,
          E,
          p,
          S,
          y,
          v,
          T,
          C,
          x
        );
        return;
      } else if (N & 256) {
        lt(
          b,
          E,
          p,
          S,
          y,
          v,
          T,
          C,
          x
        );
        return;
      }
    }
    j & 8 ? ($ & 16 && Lt(b, y, v), E !== b && f(p, E)) : $ & 16 ? j & 16 ? pn(
      b,
      E,
      p,
      S,
      y,
      v,
      T,
      C,
      x
    ) : Lt(b, y, v, !0) : ($ & 8 && f(p, ""), j & 16 && k(
      E,
      p,
      S,
      y,
      v,
      T,
      C,
      x
    ));
  }, lt = (u, d, p, S, y, v, T, C, x) => {
    u = u || St, d = d || St;
    const b = u.length, $ = d.length, E = Math.min(b, $);
    let N;
    for (N = 0; N < E; N++) {
      const j = d[N] = x ? Ge(d[N]) : Be(d[N]);
      _(
        u[N],
        j,
        p,
        null,
        y,
        v,
        T,
        C,
        x
      );
    }
    b > $ ? Lt(
      u,
      y,
      v,
      !0,
      !1,
      E
    ) : k(
      d,
      p,
      S,
      y,
      v,
      T,
      C,
      x,
      E
    );
  }, pn = (u, d, p, S, y, v, T, C, x) => {
    let b = 0;
    const $ = d.length;
    let E = u.length - 1, N = $ - 1;
    for (; b <= E && b <= N; ) {
      const j = u[b], W = d[b] = x ? Ge(d[b]) : Be(d[b]);
      if (pt(j, W))
        _(
          j,
          W,
          p,
          null,
          y,
          v,
          T,
          C,
          x
        );
      else
        break;
      b++;
    }
    for (; b <= E && b <= N; ) {
      const j = u[E], W = d[N] = x ? Ge(d[N]) : Be(d[N]);
      if (pt(j, W))
        _(
          j,
          W,
          p,
          null,
          y,
          v,
          T,
          C,
          x
        );
      else
        break;
      E--, N--;
    }
    if (b > E) {
      if (b <= N) {
        const j = N + 1, W = j < $ ? d[j].el : S;
        for (; b <= N; )
          _(
            null,
            d[b] = x ? Ge(d[b]) : Be(d[b]),
            p,
            W,
            y,
            v,
            T,
            C,
            x
          ), b++;
      }
    } else if (b > N)
      for (; b <= E; )
        De(u[b], y, v, !0), b++;
    else {
      const j = b, W = b, ne = /* @__PURE__ */ new Map();
      for (b = W; b <= N; b++) {
        const Ce = d[b] = x ? Ge(d[b]) : Be(d[b]);
        Ce.key != null && ne.set(Ce.key, b);
      }
      let X, ye = 0;
      const ve = N - W + 1;
      let Ie = !1, Ne = 0;
      const Vt = new Array(ve);
      for (b = 0; b < ve; b++) Vt[b] = 0;
      for (b = j; b <= E; b++) {
        const Ce = u[b];
        if (ye >= ve) {
          De(Ce, y, v, !0);
          continue;
        }
        let Le;
        if (Ce.key != null)
          Le = ne.get(Ce.key);
        else
          for (X = W; X <= N; X++)
            if (Vt[X - W] === 0 && pt(Ce, d[X])) {
              Le = X;
              break;
            }
        Le === void 0 ? De(Ce, y, v, !0) : (Vt[Le - W] = b + 1, Le >= Ne ? Ne = Le : Ie = !0, _(
          Ce,
          d[Le],
          p,
          null,
          y,
          v,
          T,
          C,
          x
        ), ye++);
      }
      const or = Ie ? Fc(Vt) : St;
      for (X = or.length - 1, b = ve - 1; b >= 0; b--) {
        const Ce = W + b, Le = d[Ce], lr = d[Ce + 1], cr = Ce + 1 < $ ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          lr.el || Eo(lr)
        ) : S;
        Vt[b] === 0 ? _(
          null,
          Le,
          p,
          cr,
          y,
          v,
          T,
          C,
          x
        ) : Ie && (X < 0 || b !== or[X] ? ct(Le, p, cr, 2) : X--);
      }
    }
  }, ct = (u, d, p, S, y = null) => {
    const { el: v, type: T, transition: C, children: x, shapeFlag: b } = u;
    if (b & 6) {
      ct(u.component.subTree, d, p, S);
      return;
    }
    if (b & 128) {
      u.suspense.move(d, p, S);
      return;
    }
    if (b & 64) {
      T.move(u, d, p, $t);
      return;
    }
    if (T === _e) {
      s(v, d, p);
      for (let E = 0; E < x.length; E++)
        ct(x[E], d, p, S);
      s(u.anchor, d, p);
      return;
    }
    if (T === Zt) {
      R(u, d, p);
      return;
    }
    if (S !== 2 && b & 1 && C)
      if (S === 0)
        C.beforeEnter(v), s(v, d, p), de(() => C.enter(v), y);
      else {
        const { leave: E, delayLeave: N, afterLeave: j } = C, W = () => {
          u.ctx.isUnmounted ? r(v) : s(v, d, p);
        }, ne = () => {
          v._isLeaving && v[He](
            !0
            /* cancelled */
          ), E(v, () => {
            W(), j && j();
          });
        };
        N ? N(v, W, ne) : ne();
      }
    else
      s(v, d, p);
  }, De = (u, d, p, S = !1, y = !1) => {
    const {
      type: v,
      props: T,
      ref: C,
      children: x,
      dynamicChildren: b,
      shapeFlag: $,
      patchFlag: E,
      dirs: N,
      cacheIndex: j
    } = u;
    if (E === -2 && (y = !1), C != null && (Ye(), Yt(C, null, p, u, !0), Xe()), j != null && (d.renderCache[j] = void 0), $ & 256) {
      d.ctx.deactivate(u);
      return;
    }
    const W = $ & 1 && N, ne = !Ct(u);
    let X;
    if (ne && (X = T && T.onVnodeBeforeUnmount) && $e(X, d, u), $ & 6)
      tl(u.component, p, S);
    else {
      if ($ & 128) {
        u.suspense.unmount(p, S);
        return;
      }
      W && ft(u, null, d, "beforeUnmount"), $ & 64 ? u.type.remove(
        u,
        d,
        p,
        $t,
        S
      ) : b && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !b.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (v !== _e || E > 0 && E & 64) ? Lt(
        b,
        d,
        p,
        !1,
        !0
      ) : (v === _e && E & 384 || !y && $ & 16) && Lt(x, d, p), S && rr(u);
    }
    (ne && (X = T && T.onVnodeUnmounted) || W) && de(() => {
      X && $e(X, d, u), W && ft(u, null, d, "unmounted");
    }, p);
  }, rr = (u) => {
    const { type: d, el: p, anchor: S, transition: y } = u;
    if (d === _e) {
      el(p, S);
      return;
    }
    if (d === Zt) {
      P(u);
      return;
    }
    const v = () => {
      r(p), y && !y.persisted && y.afterLeave && y.afterLeave();
    };
    if (u.shapeFlag & 1 && y && !y.persisted) {
      const { leave: T, delayLeave: C } = y, x = () => T(p, v);
      C ? C(u.el, v, x) : x();
    } else
      v();
  }, el = (u, d) => {
    let p;
    for (; u !== d; )
      p = g(u), r(u), u = p;
    r(d);
  }, tl = (u, d, p) => {
    const { bum: S, scope: y, job: v, subTree: T, um: C, m: x, a: b } = u;
    Mr(x), Mr(b), S && Cn(S), y.stop(), v && (v.flags |= 8, De(T, u, d, p)), C && de(C, d), de(() => {
      u.isUnmounted = !0;
    }, d);
  }, Lt = (u, d, p, S = !1, y = !1, v = 0) => {
    for (let T = v; T < u.length; T++)
      De(u[T], d, p, S, y);
  }, gn = (u) => {
    if (u.shapeFlag & 6)
      return gn(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const d = g(u.anchor || u.el), p = d && d[Ui];
    return p ? g(p) : d;
  };
  let os = !1;
  const ir = (u, d, p) => {
    let S;
    u == null ? d._vnode && (De(d._vnode, null, null, !0), S = d._vnode.component) : _(
      d._vnode || null,
      u,
      d,
      null,
      null,
      null,
      p
    ), d._vnode = u, os || (os = !0, hr(S), Ni(), os = !1);
  }, $t = {
    p: _,
    um: De,
    m: ct,
    r: rr,
    mt: L,
    mc: k,
    pc: te,
    pbc: K,
    n: gn,
    o: e
  };
  return {
    render: ir,
    hydrate: void 0,
    createApp: mc(ir)
  };
}
function hs({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ut({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Rc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function tr(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (I(s) && I(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = Ge(r[i]), l.el = o.el), !n && l.patchFlag !== -2 && tr(o, l)), l.type === dn && (l.patchFlag === -1 && (l = r[i] = Ge(l)), l.el = o.el), l.type === fe && !l.el && (l.el = o.el);
    }
}
function Fc(e) {
  const t = e.slice(), n = [0];
  let s, r, i, o, l;
  const c = e.length;
  for (s = 0; s < c; s++) {
    const a = e[s];
    if (a !== 0) {
      if (r = n[n.length - 1], e[r] < a) {
        t[s] = r, n.push(s);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        l = i + o >> 1, e[n[l]] < a ? i = l + 1 : o = l;
      a < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; )
    n[i] = o, o = t[o];
  return n;
}
function To(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : To(t);
}
function Mr(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Eo(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Eo(t.subTree) : null;
}
const Ao = (e) => e.__isSuspense;
function Dc(e, t) {
  t && t.pendingBranch ? I(e) ? t.effects.push(...e) : t.effects.push(e) : Ii(e);
}
const _e = /* @__PURE__ */ Symbol.for("v-fgt"), dn = /* @__PURE__ */ Symbol.for("v-txt"), fe = /* @__PURE__ */ Symbol.for("v-cmt"), Zt = /* @__PURE__ */ Symbol.for("v-stc"), Qt = [];
let Te = null;
function Nn(e = !1) {
  Qt.push(Te = e ? null : []);
}
function Ic() {
  Qt.pop(), Te = Qt[Qt.length - 1] || null;
}
let sn = 1;
function rn(e, t = !1) {
  sn += e, e < 0 && Te && t && (Te.hasOnce = !0);
}
function Mo(e) {
  return e.dynamicChildren = sn > 0 ? Te || St : null, Ic(), sn > 0 && Te && Te.push(e), e;
}
function Nc(e, t, n, s, r, i) {
  return Mo(
    nr(
      e,
      t,
      n,
      s,
      r,
      i,
      !0
    )
  );
}
function Ln(e, t, n, s, r) {
  return Mo(
    ce(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function Pt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function pt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Oo = ({ key: e }) => e ?? null, En = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ie(e) || /* @__PURE__ */ oe(e) || V(e) ? { i: ae, r: e, k: t, f: !!n } : e : null);
function nr(e, t = null, n = null, s = 0, r = null, i = e === _e ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Oo(t),
    ref: t && En(t),
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
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ae
  };
  return l ? (sr(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= ie(n) ? 8 : 16), sn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Te && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Te.push(c), c;
}
const ce = Lc;
function Lc(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === lo) && (e = fe), Pt(e)) {
    const l = Ze(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && sr(l, n), sn > 0 && !i && Te && (l.shapeFlag & 6 ? Te[Te.indexOf(e)] = l : Te.push(l)), l.patchFlag = -2, l;
  }
  if (qc(e) && (e = e.__vccOpts), t) {
    t = Po(t);
    let { class: l, style: c } = t;
    l && !ie(l) && (t.class = qn(l)), J(c) && (/* @__PURE__ */ fn(c) && !I(c) && (c = le({}, c)), t.style = Gn(c));
  }
  const o = ie(e) ? 1 : Ao(e) ? 128 : ki(e) ? 64 : J(e) ? 4 : V(e) ? 2 : 0;
  return nr(
    e,
    t,
    n,
    s,
    r,
    o,
    i,
    !0
  );
}
function Po(e) {
  return e ? /* @__PURE__ */ fn(e) || yo(e) ? le({}, e) : e : null;
}
function Ze(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: c } = e, a = t ? Fo(r || {}, t) : r, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Oo(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? I(i) ? i.concat(En(t)) : [i, En(t)] : En(t)
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
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ze(e.ssContent),
    ssFallback: e.ssFallback && Ze(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && s && ot(
    f,
    c.clone(f)
  ), f;
}
function Ro(e = " ", t = 0) {
  return ce(dn, null, e, t);
}
function $c(e, t) {
  const n = ce(Zt, null, e);
  return n.staticCount = t, n;
}
function Vc(e = "", t = !1) {
  return t ? (Nn(), Ln(fe, null, e)) : ce(fe, null, e);
}
function Be(e) {
  return e == null || typeof e == "boolean" ? ce(fe) : I(e) ? ce(
    _e,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Pt(e) ? Ge(e) : ce(dn, null, String(e));
}
function Ge(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ze(e);
}
function sr(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (I(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), sr(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !yo(t) ? t._ctx = ae : r === 3 && ae && (ae.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else V(t) ? (t = { default: t, _ctx: ae }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Ro(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Fo(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = qn([t.class, s.class]));
      else if (r === "style")
        t.style = Gn([t.style, s.style]);
      else if (Bn(r)) {
        const i = t[r], o = s[r];
        o && i !== o && !(I(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function $e(e, t, n, s = null) {
  Me(e, t, 7, [
    n,
    s
  ]);
}
const jc = ao();
let Hc = 0;
function Bc(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || jc, i = {
    uid: Hc++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new ai(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: bo(s, r),
    emitsOptions: po(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: q,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = yc.bind(null, i), e.ce && e.ce(i), i;
}
let ue = null;
const yt = () => ue || ae;
let $n, As;
{
  const e = kn(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  $n = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ue = n
  ), As = t(
    "__VUE_SSR_SETTERS__",
    (n) => Rt = n
  );
}
const hn = (e) => {
  const t = ue;
  return $n(e), e.scope.on(), () => {
    e.scope.off(), $n(t);
  };
}, Or = () => {
  ue && ue.scope.off(), $n(null);
};
function Do(e) {
  return e.vnode.shapeFlag & 4;
}
let Rt = !1;
function Kc(e, t = !1, n = !1) {
  t && As(t);
  const { props: s, children: r } = e.vnode, i = Do(e);
  Cc(e, s, i, t), Mc(e, r, n || t);
  const o = i ? Wc(e, t) : void 0;
  return t && As(!1), o;
}
function Wc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, cc);
  const { setup: s } = n;
  if (s) {
    Ye();
    const r = e.setupContext = s.length > 1 ? kc(e) : null, i = hn(e), o = It(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = ni(o);
    if (Xe(), i(), (l || e.sp) && !Ct(e) && qs(e), l) {
      if (o.then(Or, Or), t)
        return o.then((c) => {
          Pr(e, c);
        }).catch((c) => {
          Nt(c, e, 0);
        });
      e.asyncDep = o;
    } else
      Pr(e, o);
  } else
    Io(e);
}
function Pr(e, t, n) {
  V(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : J(t) && (e.setupState = Bs(t)), Io(e);
}
function Io(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Ke);
  {
    const r = hn(e);
    Ye();
    try {
      uc(e);
    } finally {
      Xe(), r();
    }
  }
}
const Uc = {
  get(e, t) {
    return pe(e, "get", ""), e[t];
  }
};
function kc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Uc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function is(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Bs(Mi(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Xt)
        return Xt[n](e);
    },
    has(t, n) {
      return n in t || n in Xt;
    }
  })) : e.proxy;
}
function Gc(e, t = !0) {
  return V(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function qc(e) {
  return V(e) && "__vccOpts" in e;
}
const be = (e, t) => /* @__PURE__ */ Ul(e, t, Rt);
function No(e, t, n) {
  try {
    rn(-1);
    const s = arguments.length;
    return s === 2 ? J(t) && !I(t) ? Pt(t) ? ce(e, null, [t]) : ce(e, t) : ce(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Pt(n) && (n = [n]), ce(e, t, n));
  } finally {
    rn(1);
  }
}
const Lo = "3.5.28";
let Ms;
const Rr = typeof window < "u" && window.trustedTypes;
if (Rr)
  try {
    Ms = /* @__PURE__ */ Rr.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const $o = Ms ? (e) => Ms.createHTML(e) : (e) => e, Jc = "http://www.w3.org/2000/svg", zc = "http://www.w3.org/1998/Math/MathML", ke = typeof document < "u" ? document : null, Fr = ke && /* @__PURE__ */ ke.createElement("template"), Vo = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? ke.createElementNS(Jc, e) : t === "mathml" ? ke.createElementNS(zc, e) : n ? ke.createElement(e, { is: n }) : ke.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => ke.createTextNode(e),
  createComment: (e) => ke.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ke.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, r, i) {
    const o = n ? n.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      Fr.innerHTML = $o(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Fr.content;
      if (s === "svg" || s === "mathml") {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
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
}, tt = "transition", Bt = "animation", Ft = /* @__PURE__ */ Symbol("_vtc"), jo = {
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
  Gs,
  jo
), Yc = (e) => (e.displayName = "Transition", e.props = Ho, e), Xc = /* @__PURE__ */ Yc(
  (e, { slots: t }) => No(zi, Bo(e), t)
), at = (e, t = []) => {
  I(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Dr = (e) => e ? I(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Bo(e) {
  const t = {};
  for (const A in e)
    A in jo || (t[A] = e[A]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: r,
    enterFromClass: i = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: c = i,
    appearActiveClass: a = o,
    appearToClass: f = l,
    leaveFromClass: h = `${n}-leave-from`,
    leaveActiveClass: g = `${n}-leave-active`,
    leaveToClass: m = `${n}-leave-to`
  } = e, w = Zc(r), _ = w && w[0], F = w && w[1], {
    onBeforeEnter: O,
    onEnter: M,
    onEnterCancelled: R,
    onLeave: P,
    onLeaveCancelled: B,
    onBeforeAppear: G = O,
    onAppear: H = M,
    onAppearCancelled: k = R
  } = t, D = (A, ee, L, Q) => {
    A._enterCancelled = Q, nt(A, ee ? f : l), nt(A, ee ? a : o), L && L();
  }, K = (A, ee) => {
    A._isLeaving = !1, nt(A, h), nt(A, m), nt(A, g), ee && ee();
  }, Z = (A) => (ee, L) => {
    const Q = A ? H : M, z = () => D(ee, A, L);
    at(Q, [ee, z]), Ir(() => {
      nt(ee, A ? c : i), Ve(ee, A ? f : l), Dr(Q) || Nr(ee, s, _, z);
    });
  };
  return le(t, {
    onBeforeEnter(A) {
      at(O, [A]), Ve(A, i), Ve(A, o);
    },
    onBeforeAppear(A) {
      at(G, [A]), Ve(A, c), Ve(A, a);
    },
    onEnter: Z(!1),
    onAppear: Z(!0),
    onLeave(A, ee) {
      A._isLeaving = !0;
      const L = () => K(A, ee);
      Ve(A, h), A._enterCancelled ? (Ve(A, g), Os(A)) : (Os(A), Ve(A, g)), Ir(() => {
        A._isLeaving && (nt(A, h), Ve(A, m), Dr(P) || Nr(A, s, F, L));
      }), at(P, [A, L]);
    },
    onEnterCancelled(A) {
      D(A, !1, void 0, !0), at(R, [A]);
    },
    onAppearCancelled(A) {
      D(A, !0, void 0, !0), at(k, [A]);
    },
    onLeaveCancelled(A) {
      K(A), at(B, [A]);
    }
  });
}
function Zc(e) {
  if (e == null)
    return null;
  if (J(e))
    return [ps(e.enter), ps(e.leave)];
  {
    const t = ps(e);
    return [t, t];
  }
}
function ps(e) {
  return fl(e);
}
function Ve(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Ft] || (e[Ft] = /* @__PURE__ */ new Set())).add(t);
}
function nt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Ft];
  n && (n.delete(t), n.size || (e[Ft] = void 0));
}
function Ir(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Qc = 0;
function Nr(e, t, n, s) {
  const r = e._endId = ++Qc, i = () => {
    r === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: o, timeout: l, propCount: c } = Ko(e, t);
  if (!o)
    return s();
  const a = o + "end";
  let f = 0;
  const h = () => {
    e.removeEventListener(a, g), i();
  }, g = (m) => {
    m.target === e && ++f >= c && h();
  };
  setTimeout(() => {
    f < c && h();
  }, l + 1), e.addEventListener(a, g);
}
function Ko(e, t) {
  const n = window.getComputedStyle(e), s = (w) => (n[w] || "").split(", "), r = s(`${tt}Delay`), i = s(`${tt}Duration`), o = Lr(r, i), l = s(`${Bt}Delay`), c = s(`${Bt}Duration`), a = Lr(l, c);
  let f = null, h = 0, g = 0;
  t === tt ? o > 0 && (f = tt, h = o, g = i.length) : t === Bt ? a > 0 && (f = Bt, h = a, g = c.length) : (h = Math.max(o, a), f = h > 0 ? o > a ? tt : Bt : null, g = f ? f === tt ? i.length : c.length : 0);
  const m = f === tt && /\b(?:transform|all)(?:,|$)/.test(
    s(`${tt}Property`).toString()
  );
  return {
    type: f,
    timeout: h,
    propCount: g,
    hasTransform: m
  };
}
function Lr(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => $r(n) + $r(e[s])));
}
function $r(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Os(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function ef(e, t, n) {
  const s = e[Ft];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Vn = /* @__PURE__ */ Symbol("_vod"), Wo = /* @__PURE__ */ Symbol("_vsh"), tf = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Vn] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Kt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Kt(e, !0), s.enter(e)) : s.leave(e, () => {
      Kt(e, !1);
    }) : Kt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Kt(e, t);
  }
};
function Kt(e, t) {
  e.style.display = t ? e[Vn] : "none", e[Wo] = !t;
}
const nf = /* @__PURE__ */ Symbol(""), sf = /(?:^|;)\s*display\s*:/;
function rf(e, t, n) {
  const s = e.style, r = ie(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (ie(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && An(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && An(s, o, "");
    for (const o in n)
      o === "display" && (i = !0), An(s, o, n[o]);
  } else if (r) {
    if (t !== n) {
      const o = s[nf];
      o && (n += ";" + o), s.cssText = n, i = sf.test(n);
    }
  } else t && e.removeAttribute("style");
  Vn in e && (e[Vn] = i ? s.display : "", e[Wo] && (s.display = "none"));
}
const Vr = /\s*!important$/;
function An(e, t, n) {
  if (I(n))
    n.forEach((s) => An(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = of(e, t);
    Vr.test(n) ? e.setProperty(
      Qe(s),
      n.replace(Vr, ""),
      "important"
    ) : e[s] = n;
  }
}
const jr = ["Webkit", "Moz", "ms"], gs = {};
function of(e, t) {
  const n = gs[t];
  if (n)
    return n;
  let s = xe(t);
  if (s !== "filter" && s in e)
    return gs[t] = s;
  s = ln(s);
  for (let r = 0; r < jr.length; r++) {
    const i = jr[r] + s;
    if (i in e)
      return gs[t] = i;
  }
  return t;
}
const Hr = "http://www.w3.org/1999/xlink";
function Br(e, t, n, s, r, i = gl(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Hr, t.slice(6, t.length)) : e.setAttributeNS(Hr, t, n) : n == null || i && !oi(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Re(n) ? String(n) : n
  );
}
function Kr(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? $o(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
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
  o && e.removeAttribute(r || t);
}
function gt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function lf(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Wr = /* @__PURE__ */ Symbol("_vei");
function cf(e, t, n, s, r = null) {
  const i = e[Wr] || (e[Wr] = {}), o = i[t];
  if (s && o)
    o.value = s;
  else {
    const [l, c] = ff(t);
    if (s) {
      const a = i[t] = df(
        s,
        r
      );
      gt(e, l, a, c);
    } else o && (lf(e, l, o, c), i[t] = void 0);
  }
}
const Ur = /(?:Once|Passive|Capture)$/;
function ff(e) {
  let t;
  if (Ur.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Ur); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Qe(e.slice(2)), t];
}
let ms = 0;
const uf = /* @__PURE__ */ Promise.resolve(), af = () => ms || (uf.then(() => ms = 0), ms = Date.now());
function df(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Me(
      hf(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = af(), n;
}
function hf(e, t) {
  if (I(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (r) => !r._stopped && s && s(r)
    );
  } else
    return t;
}
const kr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Uo = (e, t, n, s, r, i) => {
  const o = r === "svg";
  t === "class" ? ef(e, s, o) : t === "style" ? rf(e, n, s) : Bn(t) ? Ds(t) || cf(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : pf(e, t, s, o)) ? (Kr(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Br(e, t, s, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ie(s)) ? Kr(e, xe(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Br(e, t, s, o));
};
function pf(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && kr(t) && V(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return kr(t) && ie(n) ? !1 : t in e;
}
const ko = /* @__PURE__ */ new WeakMap(), Go = /* @__PURE__ */ new WeakMap(), jn = /* @__PURE__ */ Symbol("_moveCb"), Gr = /* @__PURE__ */ Symbol("_enterCb"), gf = (e) => (delete e.props.mode, e), mf = /* @__PURE__ */ gf({
  name: "TransitionGroup",
  props: /* @__PURE__ */ le({}, Ho, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = yt(), s = ks();
    let r, i;
    return Js(() => {
      if (!r.length)
        return;
      const o = e.moveClass || `${e.name || "v"}-move`;
      if (!Sf(
        r[0].el,
        n.vnode.el,
        o
      )) {
        r = [];
        return;
      }
      r.forEach(yf), r.forEach(vf);
      const l = r.filter(bf);
      Os(n.vnode.el), l.forEach((c) => {
        const a = c.el, f = a.style;
        Ve(a, o), f.transform = f.webkitTransform = f.transitionDuration = "";
        const h = a[jn] = (g) => {
          g && g.target !== a || (!g || g.propertyName.endsWith("transform")) && (a.removeEventListener("transitionend", h), a[jn] = null, nt(a, o));
        };
        a.addEventListener("transitionend", h);
      }), r = [];
    }), () => {
      const o = /* @__PURE__ */ U(e), l = Bo(o);
      let c = o.tag || _e;
      if (r = [], i)
        for (let a = 0; a < i.length; a++) {
          const f = i[a];
          f.el && f.el instanceof Element && (r.push(f), ot(
            f,
            Ot(
              f,
              l,
              s,
              n
            )
          ), ko.set(f, qo(f.el)));
        }
      i = t.default ? ns(t.default()) : [];
      for (let a = 0; a < i.length; a++) {
        const f = i[a];
        f.key != null && ot(
          f,
          Ot(f, l, s, n)
        );
      }
      return ce(c, null, i);
    };
  }
}), _f = mf;
function yf(e) {
  const t = e.el;
  t[jn] && t[jn](), t[Gr] && t[Gr]();
}
function vf(e) {
  Go.set(e, qo(e.el));
}
function bf(e) {
  const t = ko.get(e), n = Go.get(e), s = t.left - n.left, r = t.top - n.top;
  if (s || r) {
    const i = e.el, o = i.style, l = i.getBoundingClientRect();
    let c = 1, a = 1;
    return i.offsetWidth && (c = l.width / i.offsetWidth), i.offsetHeight && (a = l.height / i.offsetHeight), (!Number.isFinite(c) || c === 0) && (c = 1), (!Number.isFinite(a) || a === 0) && (a = 1), Math.abs(c - 1) < 0.01 && (c = 1), Math.abs(a - 1) < 0.01 && (a = 1), o.transform = o.webkitTransform = `translate(${s / c}px,${r / a}px)`, o.transitionDuration = "0s", e;
  }
}
function qo(e) {
  const t = e.getBoundingClientRect();
  return {
    left: t.left,
    top: t.top
  };
}
function Sf(e, t, n) {
  const s = e.cloneNode(), r = e[Ft];
  r && r.forEach((l) => {
    l.split(/\s+/).forEach((c) => c && s.classList.remove(c));
  }), n.split(/\s+/).forEach((l) => l && s.classList.add(l)), s.style.display = "none";
  const i = t.nodeType === 1 ? t : t.parentNode;
  i.appendChild(s);
  const { hasTransform: o } = Ko(s);
  return i.removeChild(s), o;
}
const Hn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return I(t) ? (n) => Cn(t, n) : t;
};
function wf(e) {
  e.target.composing = !0;
}
function qr(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Et = /* @__PURE__ */ Symbol("_assign");
function Jr(e, t, n) {
  return t && (e = e.trim()), n && (e = Ns(e)), e;
}
const xf = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e[Et] = Hn(r);
    const i = s || r.props && r.props.type === "number";
    gt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Et](Jr(e.value, n, i));
    }), (n || i) && gt(e, "change", () => {
      e.value = Jr(e.value, n, i);
    }), t || (gt(e, "compositionstart", wf), gt(e, "compositionend", qr), gt(e, "change", qr));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: i } }, o) {
    if (e[Et] = Hn(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? Ns(e.value) : e.value, c = t ?? "";
    l !== c && (document.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === c) || (e.value = c));
  }
}, Cf = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[Et] = Hn(n), gt(e, "change", () => {
      const s = e._modelValue, r = Tf(e), i = e.checked, o = e[Et];
      if (I(s)) {
        const l = li(s, r), c = l !== -1;
        if (i && !c)
          o(s.concat(r));
        else if (!i && c) {
          const a = [...s];
          a.splice(l, 1), o(a);
        }
      } else if (Kn(s)) {
        const l = new Set(s);
        i ? l.add(r) : l.delete(r), o(l);
      } else
        o(Jo(e, i));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: zr,
  beforeUpdate(e, t, n) {
    e[Et] = Hn(n), zr(e, t, n);
  }
};
function zr(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let r;
  if (I(t))
    r = li(t, s.props.value) > -1;
  else if (Kn(t))
    r = t.has(s.props.value);
  else {
    if (t === n) return;
    r = cn(t, Jo(e, !0));
  }
  e.checked !== r && (e.checked = r);
}
function Tf(e) {
  return "_value" in e ? e._value : e.value;
}
function Jo(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Ef = ["ctrl", "shift", "alt", "meta"], Af = {
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
  exact: (e, t) => Ef.some((n) => e[`${n}Key`] && !t.includes(n))
}, Mf = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = ((r, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const l = Af[t[o]];
      if (l && l(r, t)) return;
    }
    return e(r, ...i);
  }));
}, Of = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Pf = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = ((r) => {
    if (!("key" in r))
      return;
    const i = Qe(r.key);
    if (t.some(
      (o) => o === i || Of[o] === i
    ))
      return e(r);
  }));
}, Rf = /* @__PURE__ */ le({ patchProp: Uo }, Vo);
let Yr;
function Ff() {
  return Yr || (Yr = Co(Rf));
}
const Df = ((...e) => {
  const t = Ff().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = Nf(s);
    if (!r) return;
    const i = t._component;
    !V(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = n(r, !1, If(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
});
function If(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Nf(e) {
  return ie(e) ? document.querySelector(e) : e;
}
const su = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, BaseTransition: zi, BaseTransitionPropsValidators: Gs, Comment: fe, EffectScope: ai, Fragment: _e, ReactiveEffect: $s, Static: Zt, Teleport: Xl, Text: dn, Transition: Xc, TransitionGroup: _f, callWithAsyncErrorHandling: Me, callWithErrorHandling: It, camelize: xe, capitalize: ln, cloneVNode: Ze, computed: be, createApp: Df, createBlock: Ln, createCommentVNode: Vc, createElementBlock: Nc, createElementVNode: nr, createRenderer: Co, createStaticVNode: $c, createTextVNode: Ro, createVNode: ce, customRef: Ks, defineAsyncComponent: ec, defineComponent: Xi, getCurrentInstance: yt, getCurrentScope: Jn, getTransitionRawChildren: ns, guardReactiveProps: Po, h: No, handleError: Nt, inject: Jt, isProxy: fn, isReactive: it, isReadonly: We, isRef: oe, isShallow: we, isVNode: Pt, markRaw: Mi, mergeModels: fc, mergeProps: Fo, nextTick: ts, nodeOps: Vo, normalizeClass: qn, normalizeStyle: Gn, onActivated: Zi, onBeforeMount: to, onBeforeUnmount: zs, onBeforeUpdate: no, onDeactivated: Qi, onErrorCaptured: oo, onMounted: an, onRenderTracked: io, onRenderTriggered: ro, onScopeDispose: Ls, onServerPrefetch: so, onUnmounted: Ys, onUpdated: Js, onWatcherCleanup: Ri, openBlock: Nn, patchProp: Uo, provide: ji, proxyRefs: Bs, queuePostFlushCb: Ii, reactive: Zn, readonly: At, ref: Ae, renderList: oc, renderSlot: lc, resolveComponent: sc, resolveDirective: ic, resolveDynamicComponent: rc, resolveTransitionHooks: Ot, setBlockTracking: rn, setTransitionHooks: ot, shallowReactive: Ai, shallowReadonly: dt, shallowRef: es, ssrContextKey: Hi, toDisplayString: fi, toHandlerKey: xn, toRaw: U, toRef: Pi, toValue: ze, triggerRef: $l, unref: Dt, useModel: _c, useSSRContext: Bi, useTransitionState: ks, vModelCheckbox: Cf, vModelText: xf, vShow: tf, version: Lo, watch: Pe, watchSyncEffect: Ki, withCtx: Vi, withDirectives: Jl, withKeys: Pf, withModifiers: Mf }, Symbol.toStringTag, { value: "Module" }));
function Lf(e, t) {
  return Jn() ? (Ls(e, t), !0) : !1;
}
const $f = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Vf = Object.prototype.toString, jf = (e) => Vf.call(e) === "[object Object]", Ps = () => {
};
function Hf(...e) {
  if (e.length !== 1) return /* @__PURE__ */ Pi(...e);
  const t = e[0];
  return typeof t == "function" ? /* @__PURE__ */ At(Ks(() => ({
    get: t,
    set: Ps
  }))) : /* @__PURE__ */ Ae(t);
}
function zo(e, t) {
  function n(...s) {
    return new Promise((r, i) => {
      Promise.resolve(e(() => t.apply(this, s), {
        fn: t,
        thisArg: this,
        args: s
      })).then(r).catch(i);
    });
  }
  return n;
}
const Yo = (e) => e();
function Xo(...e) {
  let t = 0, n, s = !0, r = Ps, i, o, l, c, a;
  !/* @__PURE__ */ oe(e[0]) && typeof e[0] == "object" ? { delay: o, trailing: l = !0, leading: c = !0, rejectOnCancel: a = !1 } = e[0] : [o, l = !0, c = !0, a = !1] = e;
  const f = () => {
    n && (clearTimeout(n), n = void 0, r(), r = Ps);
  };
  return (g) => {
    const m = ze(o), w = Date.now() - t, _ = () => i = g();
    return f(), m <= 0 ? (t = Date.now(), _()) : (w > m ? (t = Date.now(), (c || !s) && _()) : l && (i = new Promise((F, O) => {
      r = a ? O : F, n = setTimeout(() => {
        t = Date.now(), s = !0, F(_()), f();
      }, Math.max(0, m - w));
    })), !c && !n && (n = setTimeout(() => s = !0, m)), s = !1, i);
  };
}
function Bf(e = Yo, t = {}) {
  const { initialState: n = "active" } = t, s = Hf(n === "active");
  function r() {
    s.value = !1;
  }
  function i() {
    s.value = !0;
  }
  return {
    isActive: /* @__PURE__ */ At(s),
    pause: r,
    resume: i,
    eventFilter: (...l) => {
      s.value && e(...l);
    }
  };
}
function _s(e) {
  return Array.isArray(e) ? e : [e];
}
function Kf(e) {
  return yt();
}
// @__NO_SIDE_EFFECTS__
function ru(e, t = 200, n = !1, s = !0, r = !1) {
  return zo(Xo(t, n, s, r), e);
}
function Zo(e, t, n = {}) {
  const { eventFilter: s = Yo, ...r } = n;
  return Pe(e, zo(s, t), r);
}
function Wf(e, t, n = {}) {
  const { eventFilter: s, initialState: r = "active", ...i } = n, { eventFilter: o, pause: l, resume: c, isActive: a } = Bf(s, { initialState: r });
  return {
    stop: Zo(e, t, {
      ...i,
      eventFilter: o
    }),
    pause: l,
    resume: c,
    isActive: a
  };
}
function Uf(e, t = !0, n) {
  Kf() ? an(e, n) : t ? e() : ts(e);
}
function kf(e, t, n) {
  return Pe(e, t, {
    ...n,
    immediate: !0
  });
}
function iu(e, t, n = {}) {
  const { throttle: s = 0, trailing: r = !0, leading: i = !0, ...o } = n;
  return Zo(e, t, {
    ...o,
    eventFilter: Xo(s, r, i)
  });
}
const mt = $f ? window : void 0;
function Rs(e) {
  var t;
  const n = ze(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function Xr(...e) {
  const t = (s, r, i, o) => (s.addEventListener(r, i, o), () => s.removeEventListener(r, i, o)), n = be(() => {
    const s = _s(ze(e[0])).filter((r) => r != null);
    return s.every((r) => typeof r != "string") ? s : void 0;
  });
  return kf(() => {
    var s, r;
    return [
      (s = (r = n.value) === null || r === void 0 ? void 0 : r.map((i) => Rs(i))) !== null && s !== void 0 ? s : [mt].filter((i) => i != null),
      _s(ze(n.value ? e[1] : e[0])),
      _s(Dt(n.value ? e[2] : e[1])),
      ze(n.value ? e[3] : e[2])
    ];
  }, ([s, r, i, o], l, c) => {
    if (!s?.length || !r?.length || !i?.length) return;
    const a = jf(o) ? { ...o } : o, f = s.flatMap((h) => r.flatMap((g) => i.map((m) => t(h, g, m, a))));
    c(() => {
      f.forEach((h) => h());
    });
  }, { flush: "post" });
}
// @__NO_SIDE_EFFECTS__
function Gf() {
  const e = /* @__PURE__ */ es(!1), t = yt();
  return t && an(() => {
    e.value = !0;
  }, t), e;
}
// @__NO_SIDE_EFFECTS__
function qf(e) {
  const t = /* @__PURE__ */ Gf();
  return be(() => (t.value, !!e()));
}
const Sn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, wn = "__vueuse_ssr_handlers__", Jf = /* @__PURE__ */ zf();
function zf() {
  return wn in Sn || (Sn[wn] = Sn[wn] || {}), Sn[wn];
}
function Yf(e, t) {
  return Jf[e] || t;
}
function Xf(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const Zf = {
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
}, Zr = "vueuse-storage";
function Qf(e, t, n, s = {}) {
  var r;
  const { flush: i = "pre", deep: o = !0, listenToStorageChanges: l = !0, writeDefaults: c = !0, mergeDefaults: a = !1, shallow: f, window: h = mt, eventFilter: g, onError: m = (L) => {
    console.error(L);
  }, initOnMounted: w } = s, _ = (f ? es : Ae)(typeof t == "function" ? t() : t), F = be(() => ze(e));
  if (!n) try {
    n = Yf("getDefaultStorage", () => mt?.localStorage)();
  } catch (L) {
    m(L);
  }
  if (!n) return _;
  const O = ze(t), M = Xf(O), R = (r = s.serializer) !== null && r !== void 0 ? r : Zf[M], { pause: P, resume: B } = Wf(_, (L) => K(L), {
    flush: i,
    deep: o,
    eventFilter: g
  });
  Pe(F, () => A(), { flush: i });
  let G = !1;
  const H = (L) => {
    w && !G || A(L);
  }, k = (L) => {
    w && !G || ee(L);
  };
  h && l && (n instanceof Storage ? Xr(h, "storage", H, { passive: !0 }) : Xr(h, Zr, k)), w ? Uf(() => {
    G = !0, A();
  }) : A();
  function D(L, Q) {
    if (h) {
      const z = {
        key: F.value,
        oldValue: L,
        newValue: Q,
        storageArea: n
      };
      h.dispatchEvent(n instanceof Storage ? new StorageEvent("storage", z) : new CustomEvent(Zr, { detail: z }));
    }
  }
  function K(L) {
    try {
      const Q = n.getItem(F.value);
      if (L == null)
        D(Q, null), n.removeItem(F.value);
      else {
        const z = R.write(L);
        Q !== z && (n.setItem(F.value, z), D(Q, z));
      }
    } catch (Q) {
      m(Q);
    }
  }
  function Z(L) {
    const Q = L ? L.newValue : n.getItem(F.value);
    if (Q == null)
      return c && O != null && n.setItem(F.value, R.write(O)), O;
    if (!L && a) {
      const z = R.read(Q);
      return typeof a == "function" ? a(z, O) : M === "object" && !Array.isArray(z) ? {
        ...O,
        ...z
      } : z;
    } else return typeof Q != "string" ? Q : R.read(Q);
  }
  function A(L) {
    if (!(L && L.storageArea !== n)) {
      if (L && L.key == null) {
        _.value = O;
        return;
      }
      if (!(L && L.key !== F.value)) {
        P();
        try {
          const Q = R.write(_.value);
          (L === void 0 || L?.newValue !== Q) && (_.value = Z(L));
        } catch (Q) {
          m(Q);
        } finally {
          L ? ts(B) : B();
        }
      }
    }
  }
  function ee(L) {
    A(L.detail);
  }
  return _;
}
function ou(e, t, n = {}) {
  const { window: s = mt, ...r } = n;
  let i;
  const o = /* @__PURE__ */ qf(() => s && "ResizeObserver" in s), l = () => {
    i && (i.disconnect(), i = void 0);
  }, c = Pe(be(() => {
    const f = ze(e);
    return Array.isArray(f) ? f.map((h) => Rs(h)) : [Rs(f)];
  }), (f) => {
    if (l(), o.value && s) {
      i = new ResizeObserver(t);
      for (const h of f) h && i.observe(h, r);
    }
  }, {
    immediate: !0,
    flush: "post"
  }), a = () => {
    l(), c();
  };
  return Lf(a), {
    isSupported: o,
    stop: a
  };
}
function lu(e, t, n = {}) {
  const { window: s = mt } = n;
  return Qf(e, t, s?.localStorage, n);
}
function eu(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Qr(e) {
  if (eu(e)) {
    const t = e.$el;
    return sl(t) && rl(t) === "#comment" ? null : t;
  }
  return e;
}
function Wt(e) {
  return typeof e == "function" ? e() : Dt(e);
}
function Qo(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ei(e, t) {
  const n = Qo(e);
  return Math.round(t * n) / n;
}
function cu(e, t, n) {
  n === void 0 && (n = {});
  const s = n.whileElementsMounted, r = be(() => {
    var H;
    return (H = Wt(n.open)) != null ? H : !0;
  }), i = be(() => Wt(n.middleware)), o = be(() => {
    var H;
    return (H = Wt(n.placement)) != null ? H : "bottom";
  }), l = be(() => {
    var H;
    return (H = Wt(n.strategy)) != null ? H : "absolute";
  }), c = be(() => {
    var H;
    return (H = Wt(n.transform)) != null ? H : !0;
  }), a = be(() => Qr(e.value)), f = be(() => Qr(t.value)), h = /* @__PURE__ */ Ae(0), g = /* @__PURE__ */ Ae(0), m = /* @__PURE__ */ Ae(l.value), w = /* @__PURE__ */ Ae(o.value), _ = /* @__PURE__ */ es({}), F = /* @__PURE__ */ Ae(!1), O = be(() => {
    const H = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!f.value)
      return H;
    const k = ei(f.value, h.value), D = ei(f.value, g.value);
    return c.value ? {
      ...H,
      transform: "translate(" + k + "px, " + D + "px)",
      ...Qo(f.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: k + "px",
      top: D + "px"
    };
  });
  let M;
  function R() {
    if (a.value == null || f.value == null)
      return;
    const H = r.value;
    nl(a.value, f.value, {
      middleware: i.value,
      placement: o.value,
      strategy: l.value
    }).then((k) => {
      h.value = k.x, g.value = k.y, m.value = k.strategy, w.value = k.placement, _.value = k.middlewareData, F.value = H !== !1;
    });
  }
  function P() {
    typeof M == "function" && (M(), M = void 0);
  }
  function B() {
    if (P(), s === void 0) {
      R();
      return;
    }
    if (a.value != null && f.value != null) {
      M = s(a.value, f.value, R);
      return;
    }
  }
  function G() {
    r.value || (F.value = !1);
  }
  return Pe([i, o, l, r], R, {
    flush: "sync"
  }), Pe([a, f], B, {
    flush: "sync"
  }), Pe(r, G, {
    flush: "sync"
  }), Jn() && Ls(P), {
    x: /* @__PURE__ */ dt(h),
    y: /* @__PURE__ */ dt(g),
    strategy: /* @__PURE__ */ dt(m),
    placement: /* @__PURE__ */ dt(w),
    middlewareData: /* @__PURE__ */ dt(_),
    isPositioned: /* @__PURE__ */ dt(F),
    floatingStyles: O,
    update: R
  };
}
export {
  cu as $,
  Pf as A,
  fc as B,
  ec as C,
  No as D,
  xf as E,
  _e as F,
  Mi as G,
  rc as H,
  ts as I,
  ou as J,
  Zn as K,
  ru as L,
  $l as M,
  Ys as N,
  Jt as O,
  lc as P,
  es as Q,
  ji as R,
  to as S,
  _f as T,
  iu as U,
  ic as V,
  Cf as W,
  lu as X,
  oe as Y,
  Xc as Z,
  At as _,
  nr as a,
  Fo as a0,
  Pi as a1,
  su as a2,
  Vc as b,
  Nc as c,
  Xi as d,
  $c as e,
  oc as f,
  qn as g,
  Jl as h,
  Ro as i,
  Ln as j,
  Pe as k,
  an as l,
  ce as m,
  Gn as n,
  Nn as o,
  Vi as p,
  Xl as q,
  sc as r,
  Ae as s,
  fi as t,
  Dt as u,
  tf as v,
  Mf as w,
  be as x,
  _c as y,
  zs as z
};

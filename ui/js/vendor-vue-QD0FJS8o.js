import { y as cl, z as br } from "./vendor-fortawesome-DRpSFlIU.js";
import { c as ul, i as al, g as dl } from "./vendor-floating-ui-CCq0hEoe.js";
// @__NO_SIDE_EFFECTS__
function Dr(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const G = {}, xt = [], We = () => {
}, fi = () => !1, Bn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Nr = (e) => e.startsWith("onUpdate:"), le = Object.assign, jr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, hl = Object.prototype.hasOwnProperty, Y = (e, t) => hl.call(e, t), N = Array.isArray, Ct = (e) => ln(e) === "[object Map]", ci = (e) => ln(e) === "[object Set]", ps = (e) => ln(e) === "[object Date]", $ = (e) => typeof e == "function", ie = (e) => typeof e == "string", Fe = (e) => typeof e == "symbol", q = (e) => e !== null && typeof e == "object", ui = (e) => (q(e) || $(e)) && $(e.then) && $(e.catch), ai = Object.prototype.toString, ln = (e) => ai.call(e), pl = (e) => ln(e).slice(8, -1), di = (e) => ln(e) === "[object Object]", Kn = (e) => ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, zt = /* @__PURE__ */ Dr(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Wn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, gl = /-\w/g, Ce = Wn(
  (e) => e.replace(gl, (t) => t.slice(1).toUpperCase())
), ml = /\B([A-Z])/g, tt = Wn(
  (e) => e.replace(ml, "-$1").toLowerCase()
), fn = Wn((e) => e.charAt(0).toUpperCase() + e.slice(1)), xn = Wn(
  (e) => e ? `on${fn(e)}` : ""
), we = (e, t) => !Object.is(e, t), Cn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, hi = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Lr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, yl = (e) => {
  const t = ie(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let gs;
const Un = () => gs || (gs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function kn(e) {
  if (N(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = ie(r) ? Sl(r) : kn(r);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (ie(e) || q(e))
    return e;
}
const vl = /;(?![^(]*\))/g, bl = /:([^]+)/, _l = /\/\*[^]*?\*\//g;
function Sl(e) {
  const t = {};
  return e.replace(_l, "").split(vl).forEach((n) => {
    if (n) {
      const r = n.split(bl);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function zn(e) {
  let t = "";
  if (ie(e))
    t = e;
  else if (N(e))
    for (let n = 0; n < e.length; n++) {
      const r = zn(e[n]);
      r && (t += r + " ");
    }
  else if (q(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const wl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", xl = /* @__PURE__ */ Dr(wl);
function pi(e) {
  return !!e || e === "";
}
function Cl(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = $r(e[r], t[r]);
  return n;
}
function $r(e, t) {
  if (e === t) return !0;
  let n = ps(e), r = ps(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Fe(e), r = Fe(t), n || r)
    return e === t;
  if (n = N(e), r = N(t), n || r)
    return n && r ? Cl(e, t) : !1;
  if (n = q(e), r = q(t), n || r) {
    if (!n || !r)
      return !1;
    const s = Object.keys(e).length, i = Object.keys(t).length;
    if (s !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), f = t.hasOwnProperty(o);
      if (l && !f || !l && f || !$r(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const gi = (e) => !!(e && e.__v_isRef === !0), mi = (e) => ie(e) ? e : e == null ? "" : N(e) || q(e) && (e.toString === ai || !$(e.toString)) ? gi(e) ? mi(e.value) : JSON.stringify(e, yi, 2) : String(e), yi = (e, t) => gi(t) ? yi(e, t.value) : Ct(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], i) => (n[or(r, i) + " =>"] = s, n),
    {}
  )
} : ci(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => or(n))
} : Fe(t) ? or(t) : q(t) && !N(t) && !di(t) ? String(t) : t, or = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Fe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let ge;
class vi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = ge, !t && ge && (this.index = (ge.scopes || (ge.scopes = [])).push(
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
function Gn() {
  return ge;
}
function Vr(e, t = !1) {
  ge && ge.cleanups.push(e);
}
let re;
const lr = /* @__PURE__ */ new WeakSet();
class Hr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ge && ge.active && ge.effects.push(this);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || _i(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ms(this), Si(this);
    const t = re, n = Re;
    re = this, Re = !0;
    try {
      return this.fn();
    } finally {
      wi(this), re = t, Re = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Wr(t);
      this.deps = this.depsTail = void 0, ms(this), this.onStop && this.onStop(), this.flags &= -2;
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
let bi = 0, Gt, qt;
function _i(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = qt, qt = e;
    return;
  }
  e.next = Gt, Gt = e;
}
function Br() {
  bi++;
}
function Kr() {
  if (--bi > 0)
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
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Si(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function wi(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), Wr(r), Tl(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  e.deps = t, e.depsTail = n;
}
function _r(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (xi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function xi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === tn) || (e.globalVersion = tn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !_r(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = re, r = Re;
  re = e, Re = !0;
  try {
    Si(e);
    const s = e.fn(e._value);
    (t.version === 0 || we(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    re = n, Re = r, wi(e), e.flags &= -3;
  }
}
function Wr(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Wr(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Tl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Re = !0;
const Ci = [];
function Ze() {
  Ci.push(Re), Re = !1;
}
function Qe() {
  const e = Ci.pop();
  Re = e === void 0 ? !0 : e;
}
function ms(e) {
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
let tn = 0;
class El {
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
      n = this.activeLink = new El(re, this), re.deps ? (n.prevDep = re.depsTail, re.depsTail.nextDep = n, re.depsTail = n) : re.deps = re.depsTail = n, Ti(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = re.depsTail, n.nextDep = void 0, re.depsTail.nextDep = n, re.depsTail = n, re.deps === n && (re.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, tn++, this.notify(t);
  }
  notify(t) {
    Br();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Kr();
    }
  }
}
function Ti(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Ti(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const An = /* @__PURE__ */ new WeakMap(), vt = /* @__PURE__ */ Symbol(
  ""
), Sr = /* @__PURE__ */ Symbol(
  ""
), nn = /* @__PURE__ */ Symbol(
  ""
);
function me(e, t, n) {
  if (Re && re) {
    let r = An.get(e);
    r || An.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new qn()), s.map = r, s.key = n), s.track();
  }
}
function qe(e, t, n, r, s, i) {
  const o = An.get(e);
  if (!o) {
    tn++;
    return;
  }
  const l = (f) => {
    f && f.trigger();
  };
  if (Br(), t === "clear")
    o.forEach(l);
  else {
    const f = N(e), a = f && Kn(n);
    if (f && n === "length") {
      const c = Number(r);
      o.forEach((h, g) => {
        (g === "length" || g === nn || !Fe(g) && g >= c) && l(h);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), a && l(o.get(nn)), t) {
        case "add":
          f ? a && l(o.get("length")) : (l(o.get(vt)), Ct(e) && l(o.get(Sr)));
          break;
        case "delete":
          f || (l(o.get(vt)), Ct(e) && l(o.get(Sr)));
          break;
        case "set":
          Ct(e) && l(o.get(vt));
          break;
      }
  }
  Kr();
}
function Ol(e, t) {
  const n = An.get(e);
  return n && n.get(t);
}
function _t(e) {
  const t = /* @__PURE__ */ k(e);
  return t === e ? t : (me(t, "iterate", nn), /* @__PURE__ */ xe(e) ? t : t.map(Ie));
}
function Jn(e) {
  return me(e = /* @__PURE__ */ k(e), "iterate", nn), e;
}
function it(e, t) {
  return /* @__PURE__ */ Ue(e) ? Pt(/* @__PURE__ */ lt(e) ? Ie(t) : t) : Ie(t);
}
const Al = {
  __proto__: null,
  [Symbol.iterator]() {
    return fr(this, Symbol.iterator, (e) => it(this, e));
  },
  concat(...e) {
    return _t(this).concat(
      ...e.map((t) => N(t) ? _t(t) : t)
    );
  },
  entries() {
    return fr(this, "entries", (e) => (e[1] = it(this, e[1]), e));
  },
  every(e, t) {
    return ke(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ke(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => it(this, r)),
      arguments
    );
  },
  find(e, t) {
    return ke(
      this,
      "find",
      e,
      t,
      (n) => it(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return ke(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ke(
      this,
      "findLast",
      e,
      t,
      (n) => it(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return ke(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ke(this, "forEach", e, t, void 0, arguments);
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
    return ke(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ht(this, "pop");
  },
  push(...e) {
    return Ht(this, "push", e);
  },
  reduce(e, ...t) {
    return ys(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ys(this, "reduceRight", e, t);
  },
  shift() {
    return Ht(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ke(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ht(this, "splice", e);
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
    return Ht(this, "unshift", e);
  },
  values() {
    return fr(this, "values", (e) => it(this, e));
  }
};
function fr(e, t, n) {
  const r = Jn(e), s = r[t]();
  return r !== e && !/* @__PURE__ */ xe(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.done || (i.value = n(i.value)), i;
  }), s;
}
const Pl = Array.prototype;
function ke(e, t, n, r, s, i) {
  const o = Jn(e), l = o !== e && !/* @__PURE__ */ xe(e), f = o[t];
  if (f !== Pl[t]) {
    const h = f.apply(e, i);
    return l ? Ie(h) : h;
  }
  let a = n;
  o !== e && (l ? a = function(h, g) {
    return n.call(this, it(e, h), g, e);
  } : n.length > 2 && (a = function(h, g) {
    return n.call(this, h, g, e);
  }));
  const c = f.call(o, a, r);
  return l && s ? s(c) : c;
}
function ys(e, t, n, r) {
  const s = Jn(e);
  let i = n;
  return s !== e && (/* @__PURE__ */ xe(e) ? n.length > 3 && (i = function(o, l, f) {
    return n.call(this, o, l, f, e);
  }) : i = function(o, l, f) {
    return n.call(this, o, it(e, l), f, e);
  }), s[t](i, ...r);
}
function cr(e, t, n) {
  const r = /* @__PURE__ */ k(e);
  me(r, "iterate", nn);
  const s = r[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ cn(n[0]) ? (n[0] = /* @__PURE__ */ k(n[0]), r[t](...n)) : s;
}
function Ht(e, t, n = []) {
  Ze(), Br();
  const r = (/* @__PURE__ */ k(e))[t].apply(e, n);
  return Kr(), Qe(), r;
}
const Ml = /* @__PURE__ */ Dr("__proto__,__v_isRef,__isVue"), Ei = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Fe)
);
function Rl(e) {
  Fe(e) || (e = String(e));
  const t = /* @__PURE__ */ k(this);
  return me(t, "has", e), t.hasOwnProperty(e);
}
class Oi {
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
      return r === (s ? i ? Ii : Fi : i ? Ri : Mi).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const o = N(t);
    if (!s) {
      let f;
      if (o && (f = Al[n]))
        return f;
      if (n === "hasOwnProperty")
        return Rl;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ oe(t) ? t : r
    );
    if ((Fe(n) ? Ei.has(n) : Ml(n)) || (s || me(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ oe(l)) {
      const f = o && Kn(n) ? l : l.value;
      return s && q(f) ? /* @__PURE__ */ At(f) : f;
    }
    return q(l) ? s ? /* @__PURE__ */ At(l) : /* @__PURE__ */ Xn(l) : l;
  }
}
class Ai extends Oi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let i = t[n];
    const o = N(t) && Kn(n);
    if (!this._isShallow) {
      const a = /* @__PURE__ */ Ue(i);
      if (!/* @__PURE__ */ xe(r) && !/* @__PURE__ */ Ue(r) && (i = /* @__PURE__ */ k(i), r = /* @__PURE__ */ k(r)), !o && /* @__PURE__ */ oe(i) && !/* @__PURE__ */ oe(r))
        return a || (i.value = r), !0;
    }
    const l = o ? Number(n) < t.length : Y(t, n), f = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ oe(t) ? t : s
    );
    return t === /* @__PURE__ */ k(s) && (l ? we(r, i) && qe(t, "set", n, r) : qe(t, "add", n, r)), f;
  }
  deleteProperty(t, n) {
    const r = Y(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && qe(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Fe(n) || !Ei.has(n)) && me(t, "has", n), r;
  }
  ownKeys(t) {
    return me(
      t,
      "iterate",
      N(t) ? "length" : vt
    ), Reflect.ownKeys(t);
  }
}
class Pi extends Oi {
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
const Fl = /* @__PURE__ */ new Ai(), Il = /* @__PURE__ */ new Pi(), Dl = /* @__PURE__ */ new Ai(!0), Nl = /* @__PURE__ */ new Pi(!0), wr = (e) => e, mn = (e) => Reflect.getPrototypeOf(e);
function jl(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, i = /* @__PURE__ */ k(s), o = Ct(i), l = e === "entries" || e === Symbol.iterator && o, f = e === "keys" && o, a = s[e](...r), c = n ? wr : t ? Pt : Ie;
    return !t && me(
      i,
      "iterate",
      f ? Sr : vt
    ), le(
      // inheriting all iterator properties
      Object.create(a),
      {
        // iterator protocol
        next() {
          const { value: h, done: g } = a.next();
          return g ? { value: h, done: g } : {
            value: l ? [c(h[0]), c(h[1])] : c(h),
            done: g
          };
        }
      }
    );
  };
}
function yn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ll(e, t) {
  const n = {
    get(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ k(i), l = /* @__PURE__ */ k(s);
      e || (we(s, l) && me(o, "get", s), me(o, "get", l));
      const { has: f } = mn(o), a = t ? wr : e ? Pt : Ie;
      if (f.call(o, s))
        return a(i.get(s));
      if (f.call(o, l))
        return a(i.get(l));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && me(/* @__PURE__ */ k(s), "iterate", vt), s.size;
    },
    has(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ k(i), l = /* @__PURE__ */ k(s);
      return e || (we(s, l) && me(o, "has", s), me(o, "has", l)), s === l ? i.has(s) : i.has(s) || i.has(l);
    },
    forEach(s, i) {
      const o = this, l = o.__v_raw, f = /* @__PURE__ */ k(l), a = t ? wr : e ? Pt : Ie;
      return !e && me(f, "iterate", vt), l.forEach((c, h) => s.call(i, a(c), a(h), o));
    }
  };
  return le(
    n,
    e ? {
      add: yn("add"),
      set: yn("set"),
      delete: yn("delete"),
      clear: yn("clear")
    } : {
      add(s) {
        !t && !/* @__PURE__ */ xe(s) && !/* @__PURE__ */ Ue(s) && (s = /* @__PURE__ */ k(s));
        const i = /* @__PURE__ */ k(this);
        return mn(i).has.call(i, s) || (i.add(s), qe(i, "add", s, s)), this;
      },
      set(s, i) {
        !t && !/* @__PURE__ */ xe(i) && !/* @__PURE__ */ Ue(i) && (i = /* @__PURE__ */ k(i));
        const o = /* @__PURE__ */ k(this), { has: l, get: f } = mn(o);
        let a = l.call(o, s);
        a || (s = /* @__PURE__ */ k(s), a = l.call(o, s));
        const c = f.call(o, s);
        return o.set(s, i), a ? we(i, c) && qe(o, "set", s, i) : qe(o, "add", s, i), this;
      },
      delete(s) {
        const i = /* @__PURE__ */ k(this), { has: o, get: l } = mn(i);
        let f = o.call(i, s);
        f || (s = /* @__PURE__ */ k(s), f = o.call(i, s)), l && l.call(i, s);
        const a = i.delete(s);
        return f && qe(i, "delete", s, void 0), a;
      },
      clear() {
        const s = /* @__PURE__ */ k(this), i = s.size !== 0, o = s.clear();
        return i && qe(
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
    n[s] = jl(s, e, t);
  }), n;
}
function Yn(e, t) {
  const n = Ll(e, t);
  return (r, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    Y(n, s) && s in r ? n : r,
    s,
    i
  );
}
const $l = {
  get: /* @__PURE__ */ Yn(!1, !1)
}, Vl = {
  get: /* @__PURE__ */ Yn(!1, !0)
}, Hl = {
  get: /* @__PURE__ */ Yn(!0, !1)
}, Bl = {
  get: /* @__PURE__ */ Yn(!0, !0)
}, Mi = /* @__PURE__ */ new WeakMap(), Ri = /* @__PURE__ */ new WeakMap(), Fi = /* @__PURE__ */ new WeakMap(), Ii = /* @__PURE__ */ new WeakMap();
function Kl(e) {
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
function Wl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Kl(pl(e));
}
// @__NO_SIDE_EFFECTS__
function Xn(e) {
  return /* @__PURE__ */ Ue(e) ? e : Zn(
    e,
    !1,
    Fl,
    $l,
    Mi
  );
}
// @__NO_SIDE_EFFECTS__
function Di(e) {
  return Zn(
    e,
    !1,
    Dl,
    Vl,
    Ri
  );
}
// @__NO_SIDE_EFFECTS__
function At(e) {
  return Zn(
    e,
    !0,
    Il,
    Hl,
    Fi
  );
}
// @__NO_SIDE_EFFECTS__
function pt(e) {
  return Zn(
    e,
    !0,
    Nl,
    Bl,
    Ii
  );
}
function Zn(e, t, n, r, s) {
  if (!q(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Wl(e);
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
  return /* @__PURE__ */ Ue(e) ? /* @__PURE__ */ lt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ue(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function xe(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function cn(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function k(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ k(t) : e;
}
function Ni(e) {
  return !Y(e, "__v_skip") && Object.isExtensible(e) && hi(e, "__v_skip", !0), e;
}
const Ie = (e) => q(e) ? /* @__PURE__ */ Xn(e) : e, Pt = (e) => q(e) ? /* @__PURE__ */ At(e) : e;
// @__NO_SIDE_EFFECTS__
function oe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ae(e) {
  return ji(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Qn(e) {
  return ji(e, !0);
}
function ji(e, t) {
  return /* @__PURE__ */ oe(e) ? e : new Ul(e, t);
}
class Ul {
  constructor(t, n) {
    this.dep = new qn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ k(t), this._value = n ? t : Ie(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ xe(t) || /* @__PURE__ */ Ue(t);
    t = r ? t : /* @__PURE__ */ k(t), we(t, n) && (this._rawValue = t, this._value = r ? t : Ie(t), this.dep.trigger());
  }
}
function kl(e) {
  e.dep && e.dep.trigger();
}
function Dt(e) {
  return /* @__PURE__ */ oe(e) ? e.value : e;
}
function Xe(e) {
  return $(e) ? e() : Dt(e);
}
const zl = {
  get: (e, t, n) => t === "__v_raw" ? e : Dt(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return /* @__PURE__ */ oe(s) && !/* @__PURE__ */ oe(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Ur(e) {
  return /* @__PURE__ */ lt(e) ? e : new Proxy(e, zl);
}
class Gl {
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
function kr(e) {
  return new Gl(e);
}
class ql {
  constructor(t, n, r) {
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0, this._raw = /* @__PURE__ */ k(t);
    let s = !0, i = t;
    if (!N(t) || !Kn(String(n)))
      do
        s = !/* @__PURE__ */ cn(i) || /* @__PURE__ */ xe(i);
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
    return Ol(this._raw, this._key);
  }
}
class Jl {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
// @__NO_SIDE_EFFECTS__
function Li(e, t, n) {
  return /* @__PURE__ */ oe(e) ? e : $(e) ? new Jl(e) : q(e) && arguments.length > 1 ? Yl(e, t, n) : /* @__PURE__ */ Ae(e);
}
function Yl(e, t, n) {
  return new ql(e, t, n);
}
class Xl {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new qn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = tn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    re !== this)
      return _i(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return xi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Zl(e, t, n = !1) {
  let r, s;
  return $(e) ? r = e : (r = e.get, s = e.set), new Xl(r, s, n);
}
const vn = {}, Pn = /* @__PURE__ */ new WeakMap();
let gt;
function $i(e, t = !1, n = gt) {
  if (n) {
    let r = Pn.get(n);
    r || Pn.set(n, r = []), r.push(e);
  }
}
function Ql(e, t, n = G) {
  const { immediate: r, deep: s, once: i, scheduler: o, augmentJob: l, call: f } = n, a = (P) => s ? P : /* @__PURE__ */ xe(P) || s === !1 || s === 0 ? Je(P, 1) : Je(P);
  let c, h, g, y, C = !1, m = !1;
  if (/* @__PURE__ */ oe(e) ? (h = () => e.value, C = /* @__PURE__ */ xe(e)) : /* @__PURE__ */ lt(e) ? (h = () => a(e), C = !0) : N(e) ? (m = !0, C = e.some((P) => /* @__PURE__ */ lt(P) || /* @__PURE__ */ xe(P)), h = () => e.map((P) => {
    if (/* @__PURE__ */ oe(P))
      return P.value;
    if (/* @__PURE__ */ lt(P))
      return a(P);
    if ($(P))
      return f ? f(P, 2) : P();
  })) : $(e) ? t ? h = f ? () => f(e, 2) : e : h = () => {
    if (g) {
      Ze();
      try {
        g();
      } finally {
        Qe();
      }
    }
    const P = gt;
    gt = c;
    try {
      return f ? f(e, 3, [y]) : e(y);
    } finally {
      gt = P;
    }
  } : h = We, t && s) {
    const P = h, H = s === !0 ? 1 / 0 : s;
    h = () => Je(P(), H);
  }
  const F = Gn(), v = () => {
    c.stop(), F && F.active && jr(F.effects, c);
  };
  if (i && t) {
    const P = t;
    t = (...H) => {
      P(...H), v();
    };
  }
  let b = m ? new Array(e.length).fill(vn) : vn;
  const A = (P) => {
    if (!(!(c.flags & 1) || !c.dirty && !P))
      if (t) {
        const H = c.run();
        if (s || C || (m ? H.some((W, B) => we(W, b[B])) : we(H, b))) {
          g && g();
          const W = gt;
          gt = c;
          try {
            const B = [
              H,
              // pass undefined as the old value when it's changed for the first time
              b === vn ? void 0 : m && b[0] === vn ? [] : b,
              y
            ];
            b = H, f ? f(t, 3, B) : (
              // @ts-expect-error
              t(...B)
            );
          } finally {
            gt = W;
          }
        }
      } else
        c.run();
  };
  return l && l(A), c = new Hr(h), c.scheduler = o ? () => o(A, !1) : A, y = (P) => $i(P, !1, c), g = c.onStop = () => {
    const P = Pn.get(c);
    if (P) {
      if (f)
        f(P, 4);
      else
        for (const H of P) H();
      Pn.delete(c);
    }
  }, t ? r ? A(!0) : b = c.run() : o ? o(A.bind(null, !0), !0) : c.run(), v.pause = c.pause.bind(c), v.resume = c.resume.bind(c), v.stop = v, v;
}
function Je(e, t = 1 / 0, n) {
  if (t <= 0 || !q(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ oe(e))
    Je(e.value, t, n);
  else if (N(e))
    for (let r = 0; r < e.length; r++)
      Je(e[r], t, n);
  else if (ci(e) || Ct(e))
    e.forEach((r) => {
      Je(r, t, n);
    });
  else if (di(e)) {
    for (const r in e)
      Je(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Je(e[r], t, n);
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
    return s && ui(s) && s.catch((i) => {
      jt(i, t, n);
    }), s;
  }
  if (N(e)) {
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
      Ze(), Nt(i, null, 10, [
        e,
        f,
        a
      ]), Qe();
      return;
    }
  }
  ef(e, n, s, r, o);
}
function ef(e, t, n, r = !0, s = !1) {
  if (s)
    throw e;
  console.error(e);
}
const ve = [];
let He = -1;
const Tt = [];
let ot = null, St = 0;
const Vi = /* @__PURE__ */ Promise.resolve();
let Mn = null;
function er(e) {
  const t = Mn || Vi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function tf(e) {
  let t = He + 1, n = ve.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = ve[r], i = rn(s);
    i < e || i === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function zr(e) {
  if (!(e.flags & 1)) {
    const t = rn(e), n = ve[ve.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= rn(n) ? ve.push(e) : ve.splice(tf(t), 0, e), e.flags |= 1, Hi();
  }
}
function Hi() {
  Mn || (Mn = Vi.then(Wi));
}
function Bi(e) {
  N(e) ? Tt.push(...e) : ot && e.id === -1 ? ot.splice(St + 1, 0, e) : e.flags & 1 || (Tt.push(e), e.flags |= 1), Hi();
}
function vs(e, t, n = He + 1) {
  for (; n < ve.length; n++) {
    const r = ve[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      ve.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Ki(e) {
  if (Tt.length) {
    const t = [...new Set(Tt)].sort(
      (n, r) => rn(n) - rn(r)
    );
    if (Tt.length = 0, ot) {
      ot.push(...t);
      return;
    }
    for (ot = t, St = 0; St < ot.length; St++) {
      const n = ot[St];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    ot = null, St = 0;
  }
}
const rn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Wi(e) {
  try {
    for (He = 0; He < ve.length; He++) {
      const t = ve[He];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Nt(
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
    He = -1, ve.length = 0, Ki(), Mn = null, (ve.length || Tt.length) && Wi();
  }
}
let de = null, Ui = null;
function Rn(e) {
  const t = de;
  return de = e, Ui = e && e.type.__scopeId || null, t;
}
function ki(e, t = de, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && on(-1);
    const i = Rn(t);
    let o;
    try {
      o = e(...s);
    } finally {
      Rn(i), r._d && on(1);
    }
    return o;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function nf(e, t) {
  if (de === null)
    return e;
  const n = sr(de), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, o, l, f = G] = t[s];
    i && ($(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Je(o), r.push({
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
    f && (Ze(), Me(f, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Qe());
  }
}
function zi(e, t) {
  if (ae) {
    let n = ae.provides;
    const r = ae.parent && ae.parent.provides;
    r === n && (n = ae.provides = Object.create(r)), n[e] = t;
  }
}
function Jt(e, t, n = !1) {
  const r = bt();
  if (r || Ot) {
    let s = Ot ? Ot._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && $(t) ? t.call(r && r.proxy) : t;
  }
}
const Gi = /* @__PURE__ */ Symbol.for("v-scx"), qi = () => Jt(Gi);
function Ji(e, t) {
  return Gr(
    e,
    null,
    { flush: "sync" }
  );
}
function Pe(e, t, n) {
  return Gr(e, t, n);
}
function Gr(e, t, n = G) {
  const { immediate: r, deep: s, flush: i, once: o } = n, l = le({}, n), f = t && r || !t && i !== "post";
  let a;
  if (Ft) {
    if (i === "sync") {
      const y = qi();
      a = y.__watcherHandles || (y.__watcherHandles = []);
    } else if (!f) {
      const y = () => {
      };
      return y.stop = We, y.resume = We, y.pause = We, y;
    }
  }
  const c = ae;
  l.call = (y, C, m) => Me(y, c, C, m);
  let h = !1;
  i === "post" ? l.scheduler = (y) => {
    pe(y, c && c.suspense);
  } : i !== "sync" && (h = !0, l.scheduler = (y, C) => {
    C ? y() : zr(y);
  }), l.augmentJob = (y) => {
    t && (y.flags |= 4), h && (y.flags |= 2, c && (y.id = c.uid, y.i = c));
  };
  const g = Ql(e, t, l);
  return Ft && (a ? a.push(g) : f && g()), g;
}
function rf(e, t, n) {
  const r = this.proxy, s = ie(e) ? e.includes(".") ? Yi(r, e) : () => r[e] : e.bind(r, r);
  let i;
  $(t) ? i = t : (i = t.handler, n = t);
  const o = hn(this), l = Gr(s, i.bind(r), n);
  return o(), l;
}
function Yi(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
const Xi = /* @__PURE__ */ Symbol("_vte"), Zi = (e) => e.__isTeleport, Yt = (e) => e && (e.disabled || e.disabled === ""), bs = (e) => e && (e.defer || e.defer === ""), _s = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Ss = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, xr = (e, t) => {
  const n = e && e.to;
  return ie(n) ? t ? t(n) : null : n;
}, Qi = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, s, i, o, l, f, a) {
    const {
      mc: c,
      pc: h,
      pbc: g,
      o: { insert: y, querySelector: C, createText: m, createComment: F }
    } = a, v = Yt(t.props);
    let { shapeFlag: b, children: A, dynamicChildren: P } = t;
    if (e == null) {
      const H = t.el = m(""), W = t.anchor = m("");
      y(H, n, r), y(W, n, r);
      const B = (I, K) => {
        b & 16 && c(
          A,
          I,
          K,
          s,
          i,
          o,
          l,
          f
        );
      }, z = () => {
        const I = t.target = xr(t.props, C), K = Cr(I, t, m, y);
        I && (o !== "svg" && _s(I) ? o = "svg" : o !== "mathml" && Ss(I) && (o = "mathml"), s && s.isCE && (s.ce._teleportTargets || (s.ce._teleportTargets = /* @__PURE__ */ new Set())).add(I), v || (B(I, K), Tn(t, !1)));
      };
      v && (B(n, W), Tn(t, !0)), bs(t.props) ? (t.el.__isMounted = !1, pe(() => {
        z(), delete t.el.__isMounted;
      }, i)) : z();
    } else {
      if (bs(t.props) && e.el.__isMounted === !1) {
        pe(() => {
          Qi.process(
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
      const H = t.anchor = e.anchor, W = t.target = e.target, B = t.targetAnchor = e.targetAnchor, z = Yt(e.props), I = z ? n : W, K = z ? H : B;
      if (o === "svg" || _s(W) ? o = "svg" : (o === "mathml" || Ss(W)) && (o = "mathml"), P ? (g(
        e.dynamicChildren,
        P,
        I,
        s,
        i,
        o,
        l
      ), is(e, t, !0)) : f || h(
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
        z ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : bn(
          t,
          n,
          H,
          a,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const Z = t.target = xr(
          t.props,
          C
        );
        Z && bn(
          t,
          Z,
          null,
          a,
          0
        );
      } else z && bn(
        t,
        W,
        B,
        a,
        1
      );
      Tn(t, v);
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
      const y = i || !Yt(g);
      for (let C = 0; C < l.length; C++) {
        const m = l[C];
        r(
          m,
          t,
          n,
          y,
          !!m.dynamicChildren
        );
      }
    }
  },
  move: bn,
  hydrate: sf
};
function bn(e, t, n, { o: { insert: r }, m: s }, i = 2) {
  i === 0 && r(e.targetAnchor, t, n);
  const { el: o, anchor: l, shapeFlag: f, children: a, props: c } = e, h = i === 2;
  if (h && r(o, t, n), (!h || Yt(c)) && f & 16)
    for (let g = 0; g < a.length; g++)
      s(
        a[g],
        t,
        n,
        2
      );
  h && r(l, t, n);
}
function sf(e, t, n, r, s, i, {
  o: { nextSibling: o, parentNode: l, querySelector: f, insert: a, createText: c }
}, h) {
  function g(F, v) {
    let b = v;
    for (; b; ) {
      if (b && b.nodeType === 8) {
        if (b.data === "teleport start anchor")
          t.targetStart = b;
        else if (b.data === "teleport anchor") {
          t.targetAnchor = b, F._lpa = t.targetAnchor && o(t.targetAnchor);
          break;
        }
      }
      b = o(b);
    }
  }
  function y(F, v) {
    v.anchor = h(
      o(F),
      v,
      l(F),
      n,
      r,
      s,
      i
    );
  }
  const C = t.target = xr(
    t.props,
    f
  ), m = Yt(t.props);
  if (C) {
    const F = C._lpa || C.firstChild;
    t.shapeFlag & 16 && (m ? (y(e, t), g(C, F), t.targetAnchor || Cr(
      C,
      t,
      c,
      a,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      l(e) === C ? e : null
    )) : (t.anchor = o(e), g(C, F), t.targetAnchor || Cr(C, t, c, a), h(
      F && o(F),
      t,
      C,
      n,
      r,
      s,
      i
    ))), Tn(t, m);
  } else m && t.shapeFlag & 16 && (y(e, t), t.targetStart = e, t.targetAnchor = o(e));
  return t.anchor && o(t.anchor);
}
const of = Qi;
function Tn(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, s;
    for (t ? (r = e.el, s = e.anchor) : (r = e.targetStart, s = e.targetAnchor); r && r !== s; )
      r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function Cr(e, t, n, r, s = null) {
  const i = t.targetStart = n(""), o = t.targetAnchor = n("");
  return i[Xi] = o, e && (r(i, e, s), r(o, e, s)), o;
}
const Be = /* @__PURE__ */ Symbol("_leaveCb"), Bt = /* @__PURE__ */ Symbol("_enterCb");
function qr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return an(() => {
    e.isMounted = !0;
  }), Qr(() => {
    e.isUnmounting = !0;
  }), e;
}
const Oe = [Function, Array], Jr = {
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
}, eo = (e) => {
  const t = e.subTree;
  return t.component ? eo(t.component) : t;
}, lf = {
  name: "BaseTransition",
  props: Jr,
  setup(e, { slots: t }) {
    const n = bt(), r = qr();
    return () => {
      const s = t.default && tr(t.default(), !0);
      if (!s || !s.length)
        return;
      const i = to(s), o = /* @__PURE__ */ k(e), { mode: l } = o;
      if (r.isLeaving)
        return ur(i);
      const f = ws(i);
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
      let c = n.subTree && ws(n.subTree);
      if (c && c.type !== ue && !mt(c, f) && eo(n).type !== ue) {
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
        l === "in-out" && f.type !== ue ? h.delayLeave = (g, y, C) => {
          const m = ro(
            r,
            c
          );
          m[String(c.key)] = c, g[Be] = () => {
            y(), g[Be] = void 0, delete a.delayedLeave, c = void 0;
          }, a.delayedLeave = () => {
            C(), delete a.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return i;
    };
  }
};
function to(e) {
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
const no = lf;
function ro(e, t) {
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
    onBeforeLeave: g,
    onLeave: y,
    onAfterLeave: C,
    onLeaveCancelled: m,
    onBeforeAppear: F,
    onAppear: v,
    onAfterAppear: b,
    onAppearCancelled: A
  } = t, P = String(e.key), H = ro(n, e), W = (I, K) => {
    I && Me(
      I,
      r,
      9,
      K
    );
  }, B = (I, K) => {
    const Z = K[1];
    W(I, K), N(I) ? I.every((R) => R.length <= 1) && Z() : I.length <= 1 && Z();
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
      I[Be] && I[Be](
        !0
        /* cancelled */
      );
      const Z = H[P];
      Z && mt(e, Z) && Z.el[Be] && Z.el[Be](), W(K, [I]);
    },
    enter(I) {
      let K = a, Z = c, R = h;
      if (!n.isMounted)
        if (i)
          K = v || a, Z = b || c, R = A || h;
        else
          return;
      let ee = !1;
      I[Bt] = (Q) => {
        ee || (ee = !0, Q ? W(R, [I]) : W(Z, [I]), z.delayedLeave && z.delayedLeave(), I[Bt] = void 0);
      };
      const j = I[Bt].bind(null, !1);
      K ? B(K, [I, j]) : j();
    },
    leave(I, K) {
      const Z = String(e.key);
      if (I[Bt] && I[Bt](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return K();
      W(g, [I]);
      let R = !1;
      I[Be] = (j) => {
        R || (R = !0, K(), j ? W(m, [I]) : W(C, [I]), I[Be] = void 0, H[Z] === e && delete H[Z]);
      };
      const ee = I[Be].bind(null, !1);
      H[Z] = e, y ? B(y, [I, ee]) : ee();
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
  if (un(e))
    return e = et(e), e.children = null, e;
}
function ws(e) {
  if (!un(e))
    return Zi(e.type) && e.children ? to(e.children) : e;
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
    o.type === be ? (o.patchFlag & 128 && s++, r = r.concat(
      tr(o.children, t, l)
    )) : (t || o.type !== ue) && r.push(l != null ? et(o, { key: l }) : o);
  }
  if (s > 1)
    for (let i = 0; i < r.length; i++)
      r[i].patchFlag = -2;
  return r;
}
// @__NO_SIDE_EFFECTS__
function Yr(e, t) {
  return $(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    le({ name: e.name }, t, { setup: e })
  ) : e;
}
function Xr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function xs(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Fn = /* @__PURE__ */ new WeakMap();
function Xt(e, t, n, r, s = !1) {
  if (N(e)) {
    e.forEach(
      (m, F) => Xt(
        m,
        t && (N(t) ? t[F] : t),
        n,
        r,
        s
      )
    );
    return;
  }
  if (Et(r) && !s) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Xt(e, t, n, r.component.subTree);
    return;
  }
  const i = r.shapeFlag & 4 ? sr(r.component) : r.el, o = s ? null : i, { i: l, r: f } = e, a = t && t.r, c = l.refs === G ? l.refs = {} : l.refs, h = l.setupState, g = /* @__PURE__ */ k(h), y = h === G ? fi : (m) => xs(c, m) ? !1 : Y(g, m), C = (m, F) => !(F && xs(c, F));
  if (a != null && a !== f) {
    if (Cs(t), ie(a))
      c[a] = null, y(a) && (h[a] = null);
    else if (/* @__PURE__ */ oe(a)) {
      const m = t;
      C(a, m.k) && (a.value = null), m.k && (c[m.k] = null);
    }
  }
  if ($(f))
    Nt(f, l, 12, [o, c]);
  else {
    const m = ie(f), F = /* @__PURE__ */ oe(f);
    if (m || F) {
      const v = () => {
        if (e.f) {
          const b = m ? y(f) ? h[f] : c[f] : C() || !e.k ? f.value : c[e.k];
          if (s)
            N(b) && jr(b, i);
          else if (N(b))
            b.includes(i) || b.push(i);
          else if (m)
            c[f] = [i], y(f) && (h[f] = c[f]);
          else {
            const A = [i];
            C(f, e.k) && (f.value = A), e.k && (c[e.k] = A);
          }
        } else m ? (c[f] = o, y(f) && (h[f] = o)) : F && (C(f, e.k) && (f.value = o), e.k && (c[e.k] = o));
      };
      if (o) {
        const b = () => {
          v(), Fn.delete(e);
        };
        b.id = -1, Fn.set(e, b), pe(b, n);
      } else
        Cs(e), v();
    }
  }
}
function Cs(e) {
  const t = Fn.get(e);
  t && (t.flags |= 8, Fn.delete(e));
}
const Ts = (e) => e.nodeType === 8;
Un().requestIdleCallback;
Un().cancelIdleCallback;
function ff(e, t) {
  if (Ts(e) && e.data === "[") {
    let n = 1, r = e.nextSibling;
    for (; r; ) {
      if (r.nodeType === 1) {
        if (t(r) === !1)
          break;
      } else if (Ts(r))
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
function cf(e) {
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
  const g = () => (h++, a = null, y()), y = () => {
    let C;
    return a || (C = a = t().catch((m) => {
      if (m = m instanceof Error ? m : new Error(String(m)), f)
        return new Promise((F, v) => {
          f(m, () => F(g()), () => v(m), h + 1);
        });
      throw m;
    }).then((m) => C !== a && a ? a : (m && (m.__esModule || m[Symbol.toStringTag] === "Module") && (m = m.default), c = m, m)));
  };
  return /* @__PURE__ */ Yr({
    name: "AsyncComponentWrapper",
    __asyncLoader: y,
    __asyncHydrate(C, m, F) {
      let v = !1;
      (m.bu || (m.bu = [])).push(() => v = !0);
      const b = () => {
        v || F();
      }, A = i ? () => {
        const P = i(
          b,
          (H) => ff(C, H)
        );
        P && (m.bum || (m.bum = [])).push(P);
      } : b;
      c ? A() : y().then(() => !m.isUnmounted && A());
    },
    get __asyncResolved() {
      return c;
    },
    setup() {
      const C = ae;
      if (Xr(C), c)
        return () => _n(c, C);
      const m = (A) => {
        a = null, jt(
          A,
          C,
          13,
          !r
        );
      };
      if (l && C.suspense || Ft)
        return y().then((A) => () => _n(A, C)).catch((A) => (m(A), () => r ? ce(r, {
          error: A
        }) : null));
      const F = /* @__PURE__ */ Ae(!1), v = /* @__PURE__ */ Ae(), b = /* @__PURE__ */ Ae(!!s);
      return s && setTimeout(() => {
        b.value = !1;
      }, s), o != null && setTimeout(() => {
        if (!F.value && !v.value) {
          const A = new Error(
            `Async component timed out after ${o}ms.`
          );
          m(A), v.value = A;
        }
      }, o), y().then(() => {
        F.value = !0, C.parent && un(C.parent.vnode) && C.parent.update();
      }).catch((A) => {
        m(A), v.value = A;
      }), () => {
        if (F.value && c)
          return _n(c, C);
        if (v.value && r)
          return ce(r, {
            error: v.value
          });
        if (n && !b.value)
          return _n(
            n,
            C
          );
      };
    }
  });
}
function _n(e, t) {
  const { ref: n, props: r, children: s, ce: i } = t.vnode, o = ce(e, r, s);
  return o.ref = n, o.ce = i, delete t.vnode.ce, o;
}
const un = (e) => e.type.__isKeepAlive;
function so(e, t) {
  oo(e, "a", t);
}
function io(e, t) {
  oo(e, "da", t);
}
function oo(e, t, n = ae) {
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
      un(s.parent.vnode) && uf(r, t, n, s), s = s.parent;
  }
}
function uf(e, t, n, r) {
  const s = nr(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  es(() => {
    jr(r[t], s);
  }, n);
}
function nr(e, t, n = ae, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Ze();
      const l = hn(n), f = Me(t, n, e, o);
      return l(), Qe(), f;
    });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const nt = (e) => (t, n = ae) => {
  (!Ft || e === "sp") && nr(e, (...r) => t(...r), n);
}, lo = nt("bm"), an = nt("m"), fo = nt(
  "bu"
), Zr = nt("u"), Qr = nt(
  "bum"
), es = nt("um"), co = nt(
  "sp"
), uo = nt("rtg"), ao = nt("rtc");
function ho(e, t = ae) {
  nr("ec", e, t);
}
const ts = "components", af = "directives";
function df(e, t) {
  return ns(ts, e, !0, t) || e;
}
const po = /* @__PURE__ */ Symbol.for("v-ndc");
function hf(e) {
  return ie(e) ? ns(ts, e, !1) || e : e || po;
}
function pf(e) {
  return ns(af, e);
}
function ns(e, t, n = !0, r = !1) {
  const s = de || ae;
  if (s) {
    const i = s.type;
    if (e === ts) {
      const l = tc(
        i,
        !1
      );
      if (l && (l === t || l === Ce(t) || l === fn(Ce(t))))
        return i;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      Es(s[e] || i[e], t) || // global registration
      Es(s.appContext[e], t)
    );
    return !o && r ? i : o;
  }
}
function Es(e, t) {
  return e && (e[t] || e[Ce(t)] || e[fn(Ce(t))]);
}
function gf(e, t, n, r) {
  let s;
  const i = n, o = N(e);
  if (o || ie(e)) {
    const l = o && /* @__PURE__ */ lt(e);
    let f = !1, a = !1;
    l && (f = !/* @__PURE__ */ xe(e), a = /* @__PURE__ */ Ue(e), e = Jn(e)), s = new Array(e.length);
    for (let c = 0, h = e.length; c < h; c++)
      s[c] = t(
        f ? a ? Pt(Ie(e[c])) : Ie(e[c]) : e[c],
        c,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let l = 0; l < e; l++)
      s[l] = t(l + 1, l, void 0, i);
  } else if (q(e))
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
function mf(e, t, n = {}, r, s) {
  if (de.ce || de.parent && Et(de.parent) && de.parent.ce) {
    const a = Object.keys(n).length > 0;
    return t !== "default" && (n.name = t), Nn(), jn(
      be,
      null,
      [ce("slot", n, r && r())],
      a ? -2 : 64
    );
  }
  let i = e[t];
  i && i._c && (i._d = !1), Nn();
  const o = i && go(i(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  o && o.key, f = jn(
    be,
    {
      key: (l && !Fe(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!o && r ? "_fb" : "")
    },
    o || (r ? r() : []),
    o && e._ === 1 ? 64 : -2
  );
  return !s && f.scopeId && (f.slotScopeIds = [f.scopeId + "-s"]), i && i._c && (i._d = !0), f;
}
function go(e) {
  return e.some((t) => Rt(t) ? !(t.type === ue || t.type === be && !go(t.children)) : !0) ? e : null;
}
const Tr = (e) => e ? Vo(e) ? sr(e) : Tr(e.parent) : null, Zt = (
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
    $options: (e) => yo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      zr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = er.bind(e.proxy)),
    $watch: (e) => rf.bind(e)
  })
), ar = (e, t) => e !== G && !e.__isScriptSetup && Y(e, t), yf = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: i, accessCache: o, type: l, appContext: f } = e;
    if (t[0] !== "$") {
      const g = o[t];
      if (g !== void 0)
        switch (g) {
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
        if (s !== G && Y(s, t))
          return o[t] = 2, s[t];
        if (Y(i, t))
          return o[t] = 3, i[t];
        if (n !== G && Y(n, t))
          return o[t] = 4, n[t];
        Er && (o[t] = 0);
      }
    }
    const a = Zt[t];
    let c, h;
    if (a)
      return t === "$attrs" && me(e.attrs, "get", ""), a(e);
    if (
      // css module (injected by vue-loader)
      (c = l.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== G && Y(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      h = f.config.globalProperties, Y(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: i } = e;
    return ar(s, t) ? (s[t] = n, !0) : r !== G && Y(r, t) ? (r[t] = n, !0) : Y(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, props: i, type: o }
  }, l) {
    let f;
    return !!(n[l] || e !== G && l[0] !== "$" && Y(e, l) || ar(t, l) || Y(i, l) || Y(r, l) || Y(Zt, l) || Y(s.config.globalProperties, l) || (f = o.__cssModules) && f[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Y(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function In(e) {
  return N(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function vf(e, t) {
  return !e || !t ? e || t : N(e) && N(t) ? e.concat(t) : le({}, In(e), In(t));
}
let Er = !0;
function bf(e) {
  const t = yo(e), n = e.proxy, r = e.ctx;
  Er = !1, t.beforeCreate && Os(t.beforeCreate, e, "bc");
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
    beforeUpdate: y,
    updated: C,
    activated: m,
    deactivated: F,
    beforeDestroy: v,
    beforeUnmount: b,
    destroyed: A,
    unmounted: P,
    render: H,
    renderTracked: W,
    renderTriggered: B,
    errorCaptured: z,
    serverPrefetch: I,
    // public API
    expose: K,
    inheritAttrs: Z,
    // assets
    components: R,
    directives: ee,
    filters: j
  } = t;
  if (a && _f(a, r, null), o)
    for (const se in o) {
      const te = o[se];
      $(te) && (r[se] = te.bind(n));
    }
  if (s) {
    const se = s.call(n, n);
    q(se) && (e.data = /* @__PURE__ */ Xn(se));
  }
  if (Er = !0, i)
    for (const se in i) {
      const te = i[se], ct = $(te) ? te.bind(n, n) : $(te.get) ? te.get.bind(n, n) : We, pn = !$(te) && $(te.set) ? te.set.bind(n) : We, ut = fe({
        get: ct,
        set: pn
      });
      Object.defineProperty(r, se, {
        enumerable: !0,
        configurable: !0,
        get: () => ut.value,
        set: (De) => ut.value = De
      });
    }
  if (l)
    for (const se in l)
      mo(l[se], r, n, se);
  if (f) {
    const se = $(f) ? f.call(n) : f;
    Reflect.ownKeys(se).forEach((te) => {
      zi(te, se[te]);
    });
  }
  c && Os(c, e, "c");
  function J(se, te) {
    N(te) ? te.forEach((ct) => se(ct.bind(n))) : te && se(te.bind(n));
  }
  if (J(lo, h), J(an, g), J(fo, y), J(Zr, C), J(so, m), J(io, F), J(ho, z), J(ao, W), J(uo, B), J(Qr, b), J(es, P), J(co, I), N(K))
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
  H && e.render === We && (e.render = H), Z != null && (e.inheritAttrs = Z), R && (e.components = R), ee && (e.directives = ee), I && Xr(e);
}
function _f(e, t, n = We) {
  N(e) && (e = Or(e));
  for (const r in e) {
    const s = e[r];
    let i;
    q(s) ? "default" in s ? i = Jt(
      s.from || r,
      s.default,
      !0
    ) : i = Jt(s.from || r) : i = Jt(s), /* @__PURE__ */ oe(i) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[r] = i;
  }
}
function Os(e, t, n) {
  Me(
    N(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function mo(e, t, n, r) {
  let s = r.includes(".") ? Yi(n, r) : () => n[r];
  if (ie(e)) {
    const i = t[e];
    $(i) && Pe(s, i);
  } else if ($(e))
    Pe(s, e.bind(n));
  else if (q(e))
    if (N(e))
      e.forEach((i) => mo(i, t, n, r));
    else {
      const i = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(i) && Pe(s, i, e);
    }
}
function yo(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let f;
  return l ? f = l : !s.length && !n && !r ? f = t : (f = {}, s.length && s.forEach(
    (a) => Dn(f, a, o, !0)
  ), Dn(f, t, o)), q(t) && i.set(t, f), f;
}
function Dn(e, t, n, r = !1) {
  const { mixins: s, extends: i } = t;
  i && Dn(e, i, n, !0), s && s.forEach(
    (o) => Dn(e, o, n, !0)
  );
  for (const o in t)
    if (!(r && o === "expose")) {
      const l = Sf[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Sf = {
  data: As,
  props: Ps,
  emits: Ps,
  // objects
  methods: kt,
  computed: kt,
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
  components: kt,
  directives: kt,
  // watch
  watch: xf,
  // provide / inject
  provide: As,
  inject: wf
};
function As(e, t) {
  return t ? e ? function() {
    return le(
      $(e) ? e.call(this, this) : e,
      $(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function wf(e, t) {
  return kt(Or(e), Or(t));
}
function Or(e) {
  if (N(e)) {
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
function kt(e, t) {
  return e ? le(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ps(e, t) {
  return e ? N(e) && N(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : le(
    /* @__PURE__ */ Object.create(null),
    In(e),
    In(t ?? {})
  ) : t;
}
function xf(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = le(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = ye(e[r], t[r]);
  return n;
}
function vo() {
  return {
    app: null,
    config: {
      isNativeTag: fi,
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
let Cf = 0;
function Tf(e, t) {
  return function(r, s = null) {
    $(r) || (r = le({}, r)), s != null && !q(s) && (s = null);
    const i = vo(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const a = i.app = {
      _uid: Cf++,
      _component: r,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: Bo,
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
          const y = a._ceVNode || ce(r, s);
          return y.appContext = i, g === !0 ? g = "svg" : g === !1 && (g = void 0), e(y, c, g), f = !0, a._container = c, c.__vue_app__ = a, sr(y.component);
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
        const h = Ot;
        Ot = a;
        try {
          return c();
        } finally {
          Ot = h;
        }
      }
    };
    return a;
  };
}
let Ot = null;
function Ef(e, t, n = G) {
  const r = bt(), s = Ce(t), i = tt(t), o = bo(e, s), l = kr((f, a) => {
    let c, h = G, g;
    return Ji(() => {
      const y = e[s];
      we(c, y) && (c = y, a());
    }), {
      get() {
        return f(), n.get ? n.get(c) : c;
      },
      set(y) {
        const C = n.set ? n.set(y) : y;
        if (!we(C, c) && !(h !== G && we(y, h)))
          return;
        const m = r.vnode.props;
        m && // check if parent has passed v-model
        (t in m || s in m || i in m) && (`onUpdate:${t}` in m || `onUpdate:${s}` in m || `onUpdate:${i}` in m) || (c = y, a()), r.emit(`update:${t}`, C), we(y, C) && we(y, h) && !we(C, g) && a(), h = y, g = C;
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
const bo = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ce(t)}Modifiers`] || e[`${tt(t)}Modifiers`];
function Of(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || G;
  let s = n;
  const i = t.startsWith("update:"), o = i && bo(r, t.slice(7));
  o && (o.trim && (s = n.map((c) => ie(c) ? c.trim() : c)), o.number && (s = n.map(Lr)));
  let l, f = r[l = xn(t)] || // also try camelCase event handler (#2249)
  r[l = xn(Ce(t))];
  !f && i && (f = r[l = xn(tt(t))]), f && Me(
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
const Af = /* @__PURE__ */ new WeakMap();
function _o(e, t, n = !1) {
  const r = n ? Af : t.emitsCache, s = r.get(e);
  if (s !== void 0)
    return s;
  const i = e.emits;
  let o = {}, l = !1;
  if (!$(e)) {
    const f = (a) => {
      const c = _o(a, t, !0);
      c && (l = !0, le(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !l ? (q(e) && r.set(e, null), null) : (N(i) ? i.forEach((f) => o[f] = null) : le(o, i), q(e) && r.set(e, o), o);
}
function rr(e, t) {
  return !e || !Bn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Y(e, t[0].toLowerCase() + t.slice(1)) || Y(e, tt(t)) || Y(e, t));
}
function Ms(e) {
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
    setupState: y,
    ctx: C,
    inheritAttrs: m
  } = e, F = Rn(e);
  let v, b;
  try {
    if (n.shapeFlag & 4) {
      const P = s || r, H = P;
      v = Ke(
        a.call(
          H,
          P,
          c,
          h,
          y,
          g,
          C
        )
      ), b = l;
    } else {
      const P = t;
      v = Ke(
        P.length > 1 ? P(
          h,
          { attrs: l, slots: o, emit: f }
        ) : P(
          h,
          null
        )
      ), b = t.props ? l : Pf(l);
    }
  } catch (P) {
    en.length = 0, jt(P, e, 1), v = ce(ue);
  }
  let A = v;
  if (b && m !== !1) {
    const P = Object.keys(b), { shapeFlag: H } = A;
    P.length && H & 7 && (i && P.some(Nr) && (b = Mf(
      b,
      i
    )), A = et(A, b, !1, !0));
  }
  return n.dirs && (A = et(A, null, !1, !0), A.dirs = A.dirs ? A.dirs.concat(n.dirs) : n.dirs), n.transition && ft(A, n.transition), v = A, Rn(F), v;
}
const Pf = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Bn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Mf = (e, t) => {
  const n = {};
  for (const r in e)
    (!Nr(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function Rf(e, t, n) {
  const { props: r, children: s, component: i } = e, { props: o, children: l, patchFlag: f } = t, a = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return r ? Rs(r, o, a) : !!o;
    if (f & 8) {
      const c = t.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        const g = c[h];
        if (So(o, r, g) && !rr(a, g))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : r === o ? !1 : r ? o ? Rs(r, o, a) : !0 : !!o;
  return !1;
}
function Rs(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (So(t, e, i) && !rr(n, i))
      return !0;
  }
  return !1;
}
function So(e, t, n) {
  const r = e[n], s = t[n];
  return n === "style" && q(r) && q(s) ? !$r(r, s) : r !== s;
}
function Ff({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const wo = {}, xo = () => Object.create(wo), Co = (e) => Object.getPrototypeOf(e) === wo;
function If(e, t, n, r = !1) {
  const s = {}, i = xo();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), To(e, t, s, i);
  for (const o in e.propsOptions[0])
    o in s || (s[o] = void 0);
  n ? e.props = r ? s : /* @__PURE__ */ Di(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i;
}
function Df(e, t, n, r) {
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
        let g = c[h];
        if (rr(e.emitsOptions, g))
          continue;
        const y = t[g];
        if (f)
          if (Y(i, g))
            y !== i[g] && (i[g] = y, a = !0);
          else {
            const C = Ce(g);
            s[C] = Ar(
              f,
              l,
              C,
              y,
              e,
              !1
            );
          }
        else
          y !== i[g] && (i[g] = y, a = !0);
      }
    }
  } else {
    To(e, t, s, i) && (a = !0);
    let c;
    for (const h in l)
      (!t || // for camelCase
      !Y(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = tt(h)) === h || !Y(t, c))) && (f ? n && // for camelCase
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
        (!t || !Y(t, h)) && (delete i[h], a = !0);
  }
  a && qe(e.attrs, "set", "");
}
function To(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let f in t) {
      if (zt(f))
        continue;
      const a = t[f];
      let c;
      s && Y(s, c = Ce(f)) ? !i || !i.includes(c) ? n[c] = a : (l || (l = {}))[c] = a : rr(e.emitsOptions, f) || (!(f in r) || a !== r[f]) && (r[f] = a, o = !0);
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
        !Y(a, h)
      );
    }
  }
  return o;
}
function Ar(e, t, n, r, s, i) {
  const o = e[n];
  if (o != null) {
    const l = Y(o, "default");
    if (l && r === void 0) {
      const f = o.default;
      if (o.type !== Function && !o.skipFactory && $(f)) {
        const { propsDefaults: a } = s;
        if (n in a)
          r = a[n];
        else {
          const c = hn(s);
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
    ] && (r === "" || r === tt(n)) && (r = !0));
  }
  return r;
}
const Nf = /* @__PURE__ */ new WeakMap();
function Eo(e, t, n = !1) {
  const r = n ? Nf : t.propsCache, s = r.get(e);
  if (s)
    return s;
  const i = e.props, o = {}, l = [];
  let f = !1;
  if (!$(e)) {
    const c = (h) => {
      f = !0;
      const [g, y] = Eo(h, t, !0);
      le(o, g), y && l.push(...y);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!i && !f)
    return q(e) && r.set(e, xt), xt;
  if (N(i))
    for (let c = 0; c < i.length; c++) {
      const h = Ce(i[c]);
      Fs(h) && (o[h] = G);
    }
  else if (i)
    for (const c in i) {
      const h = Ce(c);
      if (Fs(h)) {
        const g = i[c], y = o[h] = N(g) || $(g) ? { type: g } : le({}, g), C = y.type;
        let m = !1, F = !0;
        if (N(C))
          for (let v = 0; v < C.length; ++v) {
            const b = C[v], A = $(b) && b.name;
            if (A === "Boolean") {
              m = !0;
              break;
            } else A === "String" && (F = !1);
          }
        else
          m = $(C) && C.name === "Boolean";
        y[
          0
          /* shouldCast */
        ] = m, y[
          1
          /* shouldCastTrue */
        ] = F, (m || Y(y, "default")) && l.push(h);
      }
    }
  const a = [o, l];
  return q(e) && r.set(e, a), a;
}
function Fs(e) {
  return e[0] !== "$" && !zt(e);
}
const rs = (e) => e === "_" || e === "_ctx" || e === "$stable", ss = (e) => N(e) ? e.map(Ke) : [Ke(e)], jf = (e, t, n) => {
  if (t._n)
    return t;
  const r = ki((...s) => ss(t(...s)), n);
  return r._c = !1, r;
}, Oo = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (rs(s)) continue;
    const i = e[s];
    if ($(i))
      t[s] = jf(s, i, r);
    else if (i != null) {
      const o = ss(i);
      t[s] = () => o;
    }
  }
}, Ao = (e, t) => {
  const n = ss(t);
  e.slots.default = () => n;
}, Po = (e, t, n) => {
  for (const r in t)
    (n || !rs(r)) && (e[r] = t[r]);
}, Lf = (e, t, n) => {
  const r = e.slots = xo();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (Po(r, t, n), n && hi(r, "_", s, !0)) : Oo(t, r);
  } else t && Ao(e, t);
}, $f = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let i = !0, o = G;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : Po(s, t, n) : (i = !t.$stable, Oo(t, s)), o = t;
  } else t && (Ao(e, t), o = { default: 1 });
  if (i)
    for (const l in s)
      !rs(l) && o[l] == null && delete s[l];
}, pe = Kf;
function Mo(e) {
  return Vf(e);
}
function Vf(e, t) {
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
    nextSibling: g,
    setScopeId: y = We,
    insertStaticContent: C
  } = e, m = (u, d, p, x = null, _ = null, S = null, O = void 0, E = null, T = !!d.dynamicChildren) => {
    if (u === d)
      return;
    u && !mt(u, d) && (x = gn(u), De(u, _, S, !0), u = null), d.patchFlag === -2 && (T = !1, d.dynamicChildren = null);
    const { type: w, ref: L, shapeFlag: M } = d;
    switch (w) {
      case dn:
        F(u, d, p, x);
        break;
      case ue:
        v(u, d, p, x);
        break;
      case Qt:
        u == null && b(d, p, x, O);
        break;
      case be:
        R(
          u,
          d,
          p,
          x,
          _,
          S,
          O,
          E,
          T
        );
        break;
      default:
        M & 1 ? H(
          u,
          d,
          p,
          x,
          _,
          S,
          O,
          E,
          T
        ) : M & 6 ? ee(
          u,
          d,
          p,
          x,
          _,
          S,
          O,
          E,
          T
        ) : (M & 64 || M & 128) && w.process(
          u,
          d,
          p,
          x,
          _,
          S,
          O,
          E,
          T,
          $t
        );
    }
    L != null && _ ? Xt(L, u && u.ref, S, d || u, !d) : L == null && u && u.ref != null && Xt(u.ref, null, S, u, !0);
  }, F = (u, d, p, x) => {
    if (u == null)
      r(
        d.el = l(d.children),
        p,
        x
      );
    else {
      const _ = d.el = u.el;
      d.children !== u.children && a(_, d.children);
    }
  }, v = (u, d, p, x) => {
    u == null ? r(
      d.el = f(d.children || ""),
      p,
      x
    ) : d.el = u.el;
  }, b = (u, d, p, x) => {
    [u.el, u.anchor] = C(
      u.children,
      d,
      p,
      x,
      u.el,
      u.anchor
    );
  }, A = ({ el: u, anchor: d }, p, x) => {
    let _;
    for (; u && u !== d; )
      _ = g(u), r(u, p, x), u = _;
    r(d, p, x);
  }, P = ({ el: u, anchor: d }) => {
    let p;
    for (; u && u !== d; )
      p = g(u), s(u), u = p;
    s(d);
  }, H = (u, d, p, x, _, S, O, E, T) => {
    if (d.type === "svg" ? O = "svg" : d.type === "math" && (O = "mathml"), u == null)
      W(
        d,
        p,
        x,
        _,
        S,
        O,
        E,
        T
      );
    else {
      const w = u.el && u.el._isVueCE ? u.el : null;
      try {
        w && w._beginPatch(), I(
          u,
          d,
          _,
          S,
          O,
          E,
          T
        );
      } finally {
        w && w._endPatch();
      }
    }
  }, W = (u, d, p, x, _, S, O, E) => {
    let T, w;
    const { props: L, shapeFlag: M, transition: D, dirs: V } = u;
    if (T = u.el = o(
      u.type,
      S,
      L && L.is,
      L
    ), M & 8 ? c(T, u.children) : M & 16 && z(
      u.children,
      T,
      null,
      x,
      _,
      dr(u, S),
      O,
      E
    ), V && at(u, null, x, "created"), B(T, u, u.scopeId, O, x), L) {
      for (const ne in L)
        ne !== "value" && !zt(ne) && i(T, ne, null, L[ne], S, x);
      "value" in L && i(T, "value", null, L.value, S), (w = L.onVnodeBeforeMount) && $e(w, x, u);
    }
    V && at(u, null, x, "beforeMount");
    const U = Hf(_, D);
    U && D.beforeEnter(T), r(T, d, p), ((w = L && L.onVnodeMounted) || U || V) && pe(() => {
      w && $e(w, x, u), U && D.enter(T), V && at(u, null, x, "mounted");
    }, _);
  }, B = (u, d, p, x, _) => {
    if (p && y(u, p), x)
      for (let S = 0; S < x.length; S++)
        y(u, x[S]);
    if (_) {
      let S = _.subTree;
      if (d === S || Io(S.type) && (S.ssContent === d || S.ssFallback === d)) {
        const O = _.vnode;
        B(
          u,
          O,
          O.scopeId,
          O.slotScopeIds,
          _.parent
        );
      }
    }
  }, z = (u, d, p, x, _, S, O, E, T = 0) => {
    for (let w = T; w < u.length; w++) {
      const L = u[w] = E ? Ge(u[w]) : Ke(u[w]);
      m(
        null,
        L,
        d,
        p,
        x,
        _,
        S,
        O,
        E
      );
    }
  }, I = (u, d, p, x, _, S, O) => {
    const E = d.el = u.el;
    let { patchFlag: T, dynamicChildren: w, dirs: L } = d;
    T |= u.patchFlag & 16;
    const M = u.props || G, D = d.props || G;
    let V;
    if (p && dt(p, !1), (V = D.onVnodeBeforeUpdate) && $e(V, p, d, u), L && at(d, u, p, "beforeUpdate"), p && dt(p, !0), (M.innerHTML && D.innerHTML == null || M.textContent && D.textContent == null) && c(E, ""), w ? K(
      u.dynamicChildren,
      w,
      E,
      p,
      x,
      dr(d, _),
      S
    ) : O || te(
      u,
      d,
      E,
      null,
      p,
      x,
      dr(d, _),
      S,
      !1
    ), T > 0) {
      if (T & 16)
        Z(E, M, D, p, _);
      else if (T & 2 && M.class !== D.class && i(E, "class", null, D.class, _), T & 4 && i(E, "style", M.style, D.style, _), T & 8) {
        const U = d.dynamicProps;
        for (let ne = 0; ne < U.length; ne++) {
          const X = U[ne], _e = M[X], Se = D[X];
          (Se !== _e || X === "value") && i(E, X, _e, Se, _, p);
        }
      }
      T & 1 && u.children !== d.children && c(E, d.children);
    } else !O && w == null && Z(E, M, D, p, _);
    ((V = D.onVnodeUpdated) || L) && pe(() => {
      V && $e(V, p, d, u), L && at(d, u, p, "updated");
    }, x);
  }, K = (u, d, p, x, _, S, O) => {
    for (let E = 0; E < d.length; E++) {
      const T = u[E], w = d[E], L = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        T.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (T.type === be || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !mt(T, w) || // - In the case of a component, it could contain anything.
        T.shapeFlag & 198) ? h(T.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      m(
        T,
        w,
        L,
        null,
        x,
        _,
        S,
        O,
        !0
      );
    }
  }, Z = (u, d, p, x, _) => {
    if (d !== p) {
      if (d !== G)
        for (const S in d)
          !zt(S) && !(S in p) && i(
            u,
            S,
            d[S],
            null,
            _,
            x
          );
      for (const S in p) {
        if (zt(S)) continue;
        const O = p[S], E = d[S];
        O !== E && S !== "value" && i(u, S, E, O, _, x);
      }
      "value" in p && i(u, "value", d.value, p.value, _);
    }
  }, R = (u, d, p, x, _, S, O, E, T) => {
    const w = d.el = u ? u.el : l(""), L = d.anchor = u ? u.anchor : l("");
    let { patchFlag: M, dynamicChildren: D, slotScopeIds: V } = d;
    V && (E = E ? E.concat(V) : V), u == null ? (r(w, p, x), r(L, p, x), z(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      p,
      L,
      _,
      S,
      O,
      E,
      T
    )) : M > 0 && M & 64 && D && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === D.length ? (K(
      u.dynamicChildren,
      D,
      p,
      _,
      S,
      O,
      E
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || _ && d === _.subTree) && is(
      u,
      d,
      !0
      /* shallow */
    )) : te(
      u,
      d,
      p,
      L,
      _,
      S,
      O,
      E,
      T
    );
  }, ee = (u, d, p, x, _, S, O, E, T) => {
    d.slotScopeIds = E, u == null ? d.shapeFlag & 512 ? _.ctx.activate(
      d,
      p,
      x,
      O,
      T
    ) : j(
      d,
      p,
      x,
      _,
      S,
      O,
      T
    ) : Q(u, d, T);
  }, j = (u, d, p, x, _, S, O) => {
    const E = u.component = Yf(
      u,
      x,
      _
    );
    if (un(u) && (E.ctx.renderer = $t), Xf(E, !1, O), E.asyncDep) {
      if (_ && _.registerDep(E, J, O), !u.el) {
        const T = E.subTree = ce(ue);
        v(null, T, d, p), u.placeholder = T.el;
      }
    } else
      J(
        E,
        u,
        d,
        p,
        _,
        S,
        O
      );
  }, Q = (u, d, p) => {
    const x = d.component = u.component;
    if (Rf(u, d, p))
      if (x.asyncDep && !x.asyncResolved) {
        se(x, d, p);
        return;
      } else
        x.next = d, x.update();
    else
      d.el = u.el, x.vnode = d;
  }, J = (u, d, p, x, _, S, O) => {
    const E = () => {
      if (u.isMounted) {
        let { next: M, bu: D, u: V, parent: U, vnode: ne } = u;
        {
          const je = Ro(u);
          if (je) {
            M && (M.el = ne.el, se(u, M, O)), je.asyncDep.then(() => {
              pe(() => {
                u.isUnmounted || w();
              }, _);
            });
            return;
          }
        }
        let X = M, _e;
        dt(u, !1), M ? (M.el = ne.el, se(u, M, O)) : M = ne, D && Cn(D), (_e = M.props && M.props.onVnodeBeforeUpdate) && $e(_e, U, M, ne), dt(u, !0);
        const Se = Ms(u), Ne = u.subTree;
        u.subTree = Se, m(
          Ne,
          Se,
          // parent may have changed if it's in a teleport
          h(Ne.el),
          // anchor may have changed if it's in a fragment
          gn(Ne),
          u,
          _,
          S
        ), M.el = Se.el, X === null && Ff(u, Se.el), V && pe(V, _), (_e = M.props && M.props.onVnodeUpdated) && pe(
          () => $e(_e, U, M, ne),
          _
        );
      } else {
        let M;
        const { el: D, props: V } = d, { bm: U, m: ne, parent: X, root: _e, type: Se } = u, Ne = Et(d);
        dt(u, !1), U && Cn(U), !Ne && (M = V && V.onVnodeBeforeMount) && $e(M, X, d), dt(u, !0);
        {
          _e.ce && _e.ce._hasShadowRoot() && _e.ce._injectChildStyle(Se);
          const je = u.subTree = Ms(u);
          m(
            null,
            je,
            p,
            x,
            u,
            _,
            S
          ), d.el = je.el;
        }
        if (ne && pe(ne, _), !Ne && (M = V && V.onVnodeMounted)) {
          const je = d;
          pe(
            () => $e(M, X, je),
            _
          );
        }
        (d.shapeFlag & 256 || X && Et(X.vnode) && X.vnode.shapeFlag & 256) && u.a && pe(u.a, _), u.isMounted = !0, d = p = x = null;
      }
    };
    u.scope.on();
    const T = u.effect = new Hr(E);
    u.scope.off();
    const w = u.update = T.run.bind(T), L = u.job = T.runIfDirty.bind(T);
    L.i = u, L.id = u.uid, T.scheduler = () => zr(L), dt(u, !0), w();
  }, se = (u, d, p) => {
    d.component = u;
    const x = u.vnode.props;
    u.vnode = d, u.next = null, Df(u, d.props, x, p), $f(u, d.children, p), Ze(), vs(u), Qe();
  }, te = (u, d, p, x, _, S, O, E, T = !1) => {
    const w = u && u.children, L = u ? u.shapeFlag : 0, M = d.children, { patchFlag: D, shapeFlag: V } = d;
    if (D > 0) {
      if (D & 128) {
        pn(
          w,
          M,
          p,
          x,
          _,
          S,
          O,
          E,
          T
        );
        return;
      } else if (D & 256) {
        ct(
          w,
          M,
          p,
          x,
          _,
          S,
          O,
          E,
          T
        );
        return;
      }
    }
    V & 8 ? (L & 16 && Lt(w, _, S), M !== w && c(p, M)) : L & 16 ? V & 16 ? pn(
      w,
      M,
      p,
      x,
      _,
      S,
      O,
      E,
      T
    ) : Lt(w, _, S, !0) : (L & 8 && c(p, ""), V & 16 && z(
      M,
      p,
      x,
      _,
      S,
      O,
      E,
      T
    ));
  }, ct = (u, d, p, x, _, S, O, E, T) => {
    u = u || xt, d = d || xt;
    const w = u.length, L = d.length, M = Math.min(w, L);
    let D;
    for (D = 0; D < M; D++) {
      const V = d[D] = T ? Ge(d[D]) : Ke(d[D]);
      m(
        u[D],
        V,
        p,
        null,
        _,
        S,
        O,
        E,
        T
      );
    }
    w > L ? Lt(
      u,
      _,
      S,
      !0,
      !1,
      M
    ) : z(
      d,
      p,
      x,
      _,
      S,
      O,
      E,
      T,
      M
    );
  }, pn = (u, d, p, x, _, S, O, E, T) => {
    let w = 0;
    const L = d.length;
    let M = u.length - 1, D = L - 1;
    for (; w <= M && w <= D; ) {
      const V = u[w], U = d[w] = T ? Ge(d[w]) : Ke(d[w]);
      if (mt(V, U))
        m(
          V,
          U,
          p,
          null,
          _,
          S,
          O,
          E,
          T
        );
      else
        break;
      w++;
    }
    for (; w <= M && w <= D; ) {
      const V = u[M], U = d[D] = T ? Ge(d[D]) : Ke(d[D]);
      if (mt(V, U))
        m(
          V,
          U,
          p,
          null,
          _,
          S,
          O,
          E,
          T
        );
      else
        break;
      M--, D--;
    }
    if (w > M) {
      if (w <= D) {
        const V = D + 1, U = V < L ? d[V].el : x;
        for (; w <= D; )
          m(
            null,
            d[w] = T ? Ge(d[w]) : Ke(d[w]),
            p,
            U,
            _,
            S,
            O,
            E,
            T
          ), w++;
      }
    } else if (w > D)
      for (; w <= M; )
        De(u[w], _, S, !0), w++;
    else {
      const V = w, U = w, ne = /* @__PURE__ */ new Map();
      for (w = U; w <= D; w++) {
        const Te = d[w] = T ? Ge(d[w]) : Ke(d[w]);
        Te.key != null && ne.set(Te.key, w);
      }
      let X, _e = 0;
      const Se = D - U + 1;
      let Ne = !1, je = 0;
      const Vt = new Array(Se);
      for (w = 0; w < Se; w++) Vt[w] = 0;
      for (w = V; w <= M; w++) {
        const Te = u[w];
        if (_e >= Se) {
          De(Te, _, S, !0);
          continue;
        }
        let Le;
        if (Te.key != null)
          Le = ne.get(Te.key);
        else
          for (X = U; X <= D; X++)
            if (Vt[X - U] === 0 && mt(Te, d[X])) {
              Le = X;
              break;
            }
        Le === void 0 ? De(Te, _, S, !0) : (Vt[Le - U] = w + 1, Le >= je ? je = Le : Ne = !0, m(
          Te,
          d[Le],
          p,
          null,
          _,
          S,
          O,
          E,
          T
        ), _e++);
      }
      const as = Ne ? Bf(Vt) : xt;
      for (X = as.length - 1, w = Se - 1; w >= 0; w--) {
        const Te = U + w, Le = d[Te], ds = d[Te + 1], hs = Te + 1 < L ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ds.el || Fo(ds)
        ) : x;
        Vt[w] === 0 ? m(
          null,
          Le,
          p,
          hs,
          _,
          S,
          O,
          E,
          T
        ) : Ne && (X < 0 || w !== as[X] ? ut(Le, p, hs, 2) : X--);
      }
    }
  }, ut = (u, d, p, x, _ = null) => {
    const { el: S, type: O, transition: E, children: T, shapeFlag: w } = u;
    if (w & 6) {
      ut(u.component.subTree, d, p, x);
      return;
    }
    if (w & 128) {
      u.suspense.move(d, p, x);
      return;
    }
    if (w & 64) {
      O.move(u, d, p, $t);
      return;
    }
    if (O === be) {
      r(S, d, p);
      for (let M = 0; M < T.length; M++)
        ut(T[M], d, p, x);
      r(u.anchor, d, p);
      return;
    }
    if (O === Qt) {
      A(u, d, p);
      return;
    }
    if (x !== 2 && w & 1 && E)
      if (x === 0)
        E.beforeEnter(S), r(S, d, p), pe(() => E.enter(S), _);
      else {
        const { leave: M, delayLeave: D, afterLeave: V } = E, U = () => {
          u.ctx.isUnmounted ? s(S) : r(S, d, p);
        }, ne = () => {
          S._isLeaving && S[Be](
            !0
            /* cancelled */
          ), M(S, () => {
            U(), V && V();
          });
        };
        D ? D(S, U, ne) : ne();
      }
    else
      r(S, d, p);
  }, De = (u, d, p, x = !1, _ = !1) => {
    const {
      type: S,
      props: O,
      ref: E,
      children: T,
      dynamicChildren: w,
      shapeFlag: L,
      patchFlag: M,
      dirs: D,
      cacheIndex: V
    } = u;
    if (M === -2 && (_ = !1), E != null && (Ze(), Xt(E, null, p, u, !0), Qe()), V != null && (d.renderCache[V] = void 0), L & 256) {
      d.ctx.deactivate(u);
      return;
    }
    const U = L & 1 && D, ne = !Et(u);
    let X;
    if (ne && (X = O && O.onVnodeBeforeUnmount) && $e(X, d, u), L & 6)
      fl(u.component, p, x);
    else {
      if (L & 128) {
        u.suspense.unmount(p, x);
        return;
      }
      U && at(u, null, d, "beforeUnmount"), L & 64 ? u.type.remove(
        u,
        d,
        p,
        $t,
        x
      ) : w && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !w.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (S !== be || M > 0 && M & 64) ? Lt(
        w,
        d,
        p,
        !1,
        !0
      ) : (S === be && M & 384 || !_ && L & 16) && Lt(T, d, p), x && cs(u);
    }
    (ne && (X = O && O.onVnodeUnmounted) || U) && pe(() => {
      X && $e(X, d, u), U && at(u, null, d, "unmounted");
    }, p);
  }, cs = (u) => {
    const { type: d, el: p, anchor: x, transition: _ } = u;
    if (d === be) {
      ll(p, x);
      return;
    }
    if (d === Qt) {
      P(u);
      return;
    }
    const S = () => {
      s(p), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (u.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: O, delayLeave: E } = _, T = () => O(p, S);
      E ? E(u.el, S, T) : T();
    } else
      S();
  }, ll = (u, d) => {
    let p;
    for (; u !== d; )
      p = g(u), s(u), u = p;
    s(d);
  }, fl = (u, d, p) => {
    const { bum: x, scope: _, job: S, subTree: O, um: E, m: T, a: w } = u;
    Is(T), Is(w), x && Cn(x), _.stop(), S && (S.flags |= 8, De(O, u, d, p)), E && pe(E, d), pe(() => {
      u.isUnmounted = !0;
    }, d);
  }, Lt = (u, d, p, x = !1, _ = !1, S = 0) => {
    for (let O = S; O < u.length; O++)
      De(u[O], d, p, x, _);
  }, gn = (u) => {
    if (u.shapeFlag & 6)
      return gn(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const d = g(u.anchor || u.el), p = d && d[Xi];
    return p ? g(p) : d;
  };
  let ir = !1;
  const us = (u, d, p) => {
    let x;
    u == null ? d._vnode && (De(d._vnode, null, null, !0), x = d._vnode.component) : m(
      d._vnode || null,
      u,
      d,
      null,
      null,
      null,
      p
    ), d._vnode = u, ir || (ir = !0, vs(x), Ki(), ir = !1);
  }, $t = {
    p: m,
    um: De,
    m: ut,
    r: cs,
    mt: j,
    mc: z,
    pc: te,
    pbc: K,
    n: gn,
    o: e
  };
  return {
    render: us,
    hydrate: void 0,
    createApp: Tf(us)
  };
}
function dr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function dt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Hf(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function is(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (N(r) && N(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let l = s[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[i] = Ge(s[i]), l.el = o.el), !n && l.patchFlag !== -2 && is(o, l)), l.type === dn && (l.patchFlag === -1 && (l = s[i] = Ge(l)), l.el = o.el), l.type === ue && !l.el && (l.el = o.el);
    }
}
function Bf(e) {
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
function Ro(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ro(t);
}
function Is(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Fo(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Fo(t.subTree) : null;
}
const Io = (e) => e.__isSuspense;
function Kf(e, t) {
  t && t.pendingBranch ? N(e) ? t.effects.push(...e) : t.effects.push(e) : Bi(e);
}
const be = /* @__PURE__ */ Symbol.for("v-fgt"), dn = /* @__PURE__ */ Symbol.for("v-txt"), ue = /* @__PURE__ */ Symbol.for("v-cmt"), Qt = /* @__PURE__ */ Symbol.for("v-stc"), en = [];
let Ee = null;
function Nn(e = !1) {
  en.push(Ee = e ? null : []);
}
function Wf() {
  en.pop(), Ee = en[en.length - 1] || null;
}
let sn = 1;
function on(e, t = !1) {
  sn += e, e < 0 && Ee && t && (Ee.hasOnce = !0);
}
function Do(e) {
  return e.dynamicChildren = sn > 0 ? Ee || xt : null, Wf(), sn > 0 && Ee && Ee.push(e), e;
}
function Uf(e, t, n, r, s, i) {
  return Do(
    os(
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
function jn(e, t, n, r, s) {
  return Do(
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
const No = ({ key: e }) => e ?? null, En = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ie(e) || /* @__PURE__ */ oe(e) || $(e) ? { i: de, r: e, k: t, f: !!n } : e : null);
function os(e, t = null, n = null, r = 0, s = null, i = e === be ? 0 : 1, o = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && No(t),
    ref: t && En(t),
    scopeId: Ui,
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
  return l ? (ls(f, n), i & 128 && e.normalize(f)) : n && (f.shapeFlag |= ie(n) ? 8 : 16), sn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Ee && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && Ee.push(f), f;
}
const ce = kf;
function kf(e, t = null, n = null, r = 0, s = null, i = !1) {
  if ((!e || e === po) && (e = ue), Rt(e)) {
    const l = et(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ls(l, n), sn > 0 && !i && Ee && (l.shapeFlag & 6 ? Ee[Ee.indexOf(e)] = l : Ee.push(l)), l.patchFlag = -2, l;
  }
  if (nc(e) && (e = e.__vccOpts), t) {
    t = jo(t);
    let { class: l, style: f } = t;
    l && !ie(l) && (t.class = zn(l)), q(f) && (/* @__PURE__ */ cn(f) && !N(f) && (f = le({}, f)), t.style = kn(f));
  }
  const o = ie(e) ? 1 : Io(e) ? 128 : Zi(e) ? 64 : q(e) ? 4 : $(e) ? 2 : 0;
  return os(
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
function jo(e) {
  return e ? /* @__PURE__ */ cn(e) || Co(e) ? le({}, e) : e : null;
}
function et(e, t, n = !1, r = !1) {
  const { props: s, ref: i, patchFlag: o, children: l, transition: f } = e, a = t ? $o(s || {}, t) : s, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && No(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? N(i) ? i.concat(En(t)) : [i, En(t)] : En(t)
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
    patchFlag: t && e.type !== be ? o === -1 ? 16 : o | 16 : o,
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
function Lo(e = " ", t = 0) {
  return ce(dn, null, e, t);
}
function zf(e, t) {
  const n = ce(Qt, null, e);
  return n.staticCount = t, n;
}
function Gf(e = "", t = !1) {
  return t ? (Nn(), jn(ue, null, e)) : ce(ue, null, e);
}
function Ke(e) {
  return e == null || typeof e == "boolean" ? ce(ue) : N(e) ? ce(
    be,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Rt(e) ? Ge(e) : ce(dn, null, String(e));
}
function Ge(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : et(e);
}
function ls(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (N(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), ls(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Co(t) ? t._ctx = de : s === 3 && de && (de.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else $(t) ? (t = { default: t, _ctx: de }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Lo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function $o(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = zn([t.class, r.class]));
      else if (s === "style")
        t.style = kn([t.style, r.style]);
      else if (Bn(s)) {
        const i = t[s], o = r[s];
        o && i !== o && !(N(i) && i.includes(o)) && (t[s] = i ? [].concat(i, o) : o);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function $e(e, t, n, r = null) {
  Me(e, t, 7, [
    n,
    r
  ]);
}
const qf = vo();
let Jf = 0;
function Yf(e, t, n) {
  const r = e.type, s = (t ? t.appContext : e.appContext) || qf, i = {
    uid: Jf++,
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
    scope: new vi(
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
    propsOptions: Eo(r, s),
    emitsOptions: _o(r, s),
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Of.bind(null, i), e.ce && e.ce(i), i;
}
let ae = null;
const bt = () => ae || de;
let Ln, Pr;
{
  const e = Un(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (i) => {
      s.length > 1 ? s.forEach((o) => o(i)) : s[0](i);
    };
  };
  Ln = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ae = n
  ), Pr = t(
    "__VUE_SSR_SETTERS__",
    (n) => Ft = n
  );
}
const hn = (e) => {
  const t = ae;
  return Ln(e), e.scope.on(), () => {
    e.scope.off(), Ln(t);
  };
}, Ds = () => {
  ae && ae.scope.off(), Ln(null);
};
function Vo(e) {
  return e.vnode.shapeFlag & 4;
}
let Ft = !1;
function Xf(e, t = !1, n = !1) {
  t && Pr(t);
  const { props: r, children: s } = e.vnode, i = Vo(e);
  If(e, r, i, t), Lf(e, s, n || t);
  const o = i ? Zf(e, t) : void 0;
  return t && Pr(!1), o;
}
function Zf(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, yf);
  const { setup: r } = n;
  if (r) {
    Ze();
    const s = e.setupContext = r.length > 1 ? ec(e) : null, i = hn(e), o = Nt(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), l = ui(o);
    if (Qe(), i(), (l || e.sp) && !Et(e) && Xr(e), l) {
      if (o.then(Ds, Ds), t)
        return o.then((f) => {
          Ns(e, f);
        }).catch((f) => {
          jt(f, e, 0);
        });
      e.asyncDep = o;
    } else
      Ns(e, o);
  } else
    Ho(e);
}
function Ns(e, t, n) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : q(t) && (e.setupState = Ur(t)), Ho(e);
}
function Ho(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || We);
  {
    const s = hn(e);
    Ze();
    try {
      bf(e);
    } finally {
      Qe(), s();
    }
  }
}
const Qf = {
  get(e, t) {
    return me(e, "get", ""), e[t];
  }
};
function ec(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Qf),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function sr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ur(Ni(e.exposed)), {
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
function tc(e, t = !0) {
  return $(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function nc(e) {
  return $(e) && "__vccOpts" in e;
}
const fe = (e, t) => /* @__PURE__ */ Zl(e, t, Ft);
function fs(e, t, n) {
  try {
    on(-1);
    const r = arguments.length;
    return r === 2 ? q(t) && !N(t) ? Rt(t) ? ce(e, null, [t]) : ce(e, t) : ce(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Rt(n) && (n = [n]), ce(e, t, n));
  } finally {
    on(1);
  }
}
const Bo = "3.5.28";
let Mr;
const js = typeof window < "u" && window.trustedTypes;
if (js)
  try {
    Mr = /* @__PURE__ */ js.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Ko = Mr ? (e) => Mr.createHTML(e) : (e) => e, rc = "http://www.w3.org/2000/svg", sc = "http://www.w3.org/1998/Math/MathML", ze = typeof document < "u" ? document : null, Ls = ze && /* @__PURE__ */ ze.createElement("template"), Wo = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? ze.createElementNS(rc, e) : t === "mathml" ? ze.createElementNS(sc, e) : n ? ze.createElement(e, { is: n }) : ze.createElement(e);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (e) => ze.createTextNode(e),
  createComment: (e) => ze.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ze.querySelector(e),
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
      Ls.innerHTML = Ko(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Ls.content;
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
}, rt = "transition", Kt = "animation", It = /* @__PURE__ */ Symbol("_vtc"), Uo = {
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
}, ko = /* @__PURE__ */ le(
  {},
  Jr,
  Uo
), ic = (e) => (e.displayName = "Transition", e.props = ko, e), oc = /* @__PURE__ */ ic(
  (e, { slots: t }) => fs(no, zo(e), t)
), ht = (e, t = []) => {
  N(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, $s = (e) => e ? N(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function zo(e) {
  const t = {};
  for (const R in e)
    R in Uo || (t[R] = e[R]);
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
    leaveToClass: y = `${n}-leave-to`
  } = e, C = lc(s), m = C && C[0], F = C && C[1], {
    onBeforeEnter: v,
    onEnter: b,
    onEnterCancelled: A,
    onLeave: P,
    onLeaveCancelled: H,
    onBeforeAppear: W = v,
    onAppear: B = b,
    onAppearCancelled: z = A
  } = t, I = (R, ee, j, Q) => {
    R._enterCancelled = Q, st(R, ee ? c : l), st(R, ee ? a : o), j && j();
  }, K = (R, ee) => {
    R._isLeaving = !1, st(R, h), st(R, y), st(R, g), ee && ee();
  }, Z = (R) => (ee, j) => {
    const Q = R ? B : b, J = () => I(ee, R, j);
    ht(Q, [ee, J]), Vs(() => {
      st(ee, R ? f : i), Ve(ee, R ? c : l), $s(Q) || Hs(ee, r, m, J);
    });
  };
  return le(t, {
    onBeforeEnter(R) {
      ht(v, [R]), Ve(R, i), Ve(R, o);
    },
    onBeforeAppear(R) {
      ht(W, [R]), Ve(R, f), Ve(R, a);
    },
    onEnter: Z(!1),
    onAppear: Z(!0),
    onLeave(R, ee) {
      R._isLeaving = !0;
      const j = () => K(R, ee);
      Ve(R, h), R._enterCancelled ? (Ve(R, g), Rr(R)) : (Rr(R), Ve(R, g)), Vs(() => {
        R._isLeaving && (st(R, h), Ve(R, y), $s(P) || Hs(R, r, F, j));
      }), ht(P, [R, j]);
    },
    onEnterCancelled(R) {
      I(R, !1, void 0, !0), ht(A, [R]);
    },
    onAppearCancelled(R) {
      I(R, !0, void 0, !0), ht(z, [R]);
    },
    onLeaveCancelled(R) {
      K(R), ht(H, [R]);
    }
  });
}
function lc(e) {
  if (e == null)
    return null;
  if (q(e))
    return [hr(e.enter), hr(e.leave)];
  {
    const t = hr(e);
    return [t, t];
  }
}
function hr(e) {
  return yl(e);
}
function Ve(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[It] || (e[It] = /* @__PURE__ */ new Set())).add(t);
}
function st(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[It];
  n && (n.delete(t), n.size || (e[It] = void 0));
}
function Vs(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let fc = 0;
function Hs(e, t, n, r) {
  const s = e._endId = ++fc, i = () => {
    s === e._endId && r();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: o, timeout: l, propCount: f } = Go(e, t);
  if (!o)
    return r();
  const a = o + "end";
  let c = 0;
  const h = () => {
    e.removeEventListener(a, g), i();
  }, g = (y) => {
    y.target === e && ++c >= f && h();
  };
  setTimeout(() => {
    c < f && h();
  }, l + 1), e.addEventListener(a, g);
}
function Go(e, t) {
  const n = window.getComputedStyle(e), r = (C) => (n[C] || "").split(", "), s = r(`${rt}Delay`), i = r(`${rt}Duration`), o = Bs(s, i), l = r(`${Kt}Delay`), f = r(`${Kt}Duration`), a = Bs(l, f);
  let c = null, h = 0, g = 0;
  t === rt ? o > 0 && (c = rt, h = o, g = i.length) : t === Kt ? a > 0 && (c = Kt, h = a, g = f.length) : (h = Math.max(o, a), c = h > 0 ? o > a ? rt : Kt : null, g = c ? c === rt ? i.length : f.length : 0);
  const y = c === rt && /\b(?:transform|all)(?:,|$)/.test(
    r(`${rt}Property`).toString()
  );
  return {
    type: c,
    timeout: h,
    propCount: g,
    hasTransform: y
  };
}
function Bs(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => Ks(n) + Ks(e[r])));
}
function Ks(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Rr(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function cc(e, t, n) {
  const r = e[It];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const $n = /* @__PURE__ */ Symbol("_vod"), qo = /* @__PURE__ */ Symbol("_vsh"), uc = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[$n] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Wt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Wt(e, !0), r.enter(e)) : r.leave(e, () => {
      Wt(e, !1);
    }) : Wt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Wt(e, t);
  }
};
function Wt(e, t) {
  e.style.display = t ? e[$n] : "none", e[qo] = !t;
}
const ac = /* @__PURE__ */ Symbol(""), dc = /(?:^|;)\s*display\s*:/;
function hc(e, t, n) {
  const r = e.style, s = ie(n);
  let i = !1;
  if (n && !s) {
    if (t)
      if (ie(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && On(r, l, "");
        }
      else
        for (const o in t)
          n[o] == null && On(r, o, "");
    for (const o in n)
      o === "display" && (i = !0), On(r, o, n[o]);
  } else if (s) {
    if (t !== n) {
      const o = r[ac];
      o && (n += ";" + o), r.cssText = n, i = dc.test(n);
    }
  } else t && e.removeAttribute("style");
  $n in e && (e[$n] = i ? r.display : "", e[qo] && (r.display = "none"));
}
const Ws = /\s*!important$/;
function On(e, t, n) {
  if (N(n))
    n.forEach((r) => On(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = pc(e, t);
    Ws.test(n) ? e.setProperty(
      tt(r),
      n.replace(Ws, ""),
      "important"
    ) : e[r] = n;
  }
}
const Us = ["Webkit", "Moz", "ms"], pr = {};
function pc(e, t) {
  const n = pr[t];
  if (n)
    return n;
  let r = Ce(t);
  if (r !== "filter" && r in e)
    return pr[t] = r;
  r = fn(r);
  for (let s = 0; s < Us.length; s++) {
    const i = Us[s] + r;
    if (i in e)
      return pr[t] = i;
  }
  return t;
}
const ks = "http://www.w3.org/1999/xlink";
function zs(e, t, n, r, s, i = xl(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ks, t.slice(6, t.length)) : e.setAttributeNS(ks, t, n) : n == null || i && !pi(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Fe(n) ? String(n) : n
  );
}
function Gs(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ko(n) : n);
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
    l === "boolean" ? n = pi(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(s || t);
}
function wt(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function gc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const qs = /* @__PURE__ */ Symbol("_vei");
function mc(e, t, n, r, s = null) {
  const i = e[qs] || (e[qs] = {}), o = i[t];
  if (r && o)
    o.value = r;
  else {
    const [l, f] = yc(t);
    if (r) {
      const a = i[t] = _c(
        r,
        s
      );
      wt(e, l, a, f);
    } else o && (gc(e, l, o, f), i[t] = void 0);
  }
}
const Js = /(?:Once|Passive|Capture)$/;
function yc(e) {
  let t;
  if (Js.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Js); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : tt(e.slice(2)), t];
}
let gr = 0;
const vc = /* @__PURE__ */ Promise.resolve(), bc = () => gr || (vc.then(() => gr = 0), gr = Date.now());
function _c(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Me(
      Sc(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = bc(), n;
}
function Sc(e, t) {
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
const Ys = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Jo = (e, t, n, r, s, i) => {
  const o = s === "svg";
  t === "class" ? cc(e, r, o) : t === "style" ? hc(e, n, r) : Bn(t) ? Nr(t) || mc(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : wc(e, t, r, o)) ? (Gs(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && zs(e, t, r, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ie(r)) ? Gs(e, Ce(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), zs(e, t, r, o));
};
function wc(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ys(t) && $(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Ys(t) && ie(n) ? !1 : t in e;
}
const Yo = /* @__PURE__ */ new WeakMap(), Xo = /* @__PURE__ */ new WeakMap(), Vn = /* @__PURE__ */ Symbol("_moveCb"), Xs = /* @__PURE__ */ Symbol("_enterCb"), xc = (e) => (delete e.props.mode, e), Cc = /* @__PURE__ */ xc({
  name: "TransitionGroup",
  props: /* @__PURE__ */ le({}, ko, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = bt(), r = qr();
    let s, i;
    return Zr(() => {
      if (!s.length)
        return;
      const o = e.moveClass || `${e.name || "v"}-move`;
      if (!Pc(
        s[0].el,
        n.vnode.el,
        o
      )) {
        s = [];
        return;
      }
      s.forEach(Ec), s.forEach(Oc);
      const l = s.filter(Ac);
      Rr(n.vnode.el), l.forEach((f) => {
        const a = f.el, c = a.style;
        Ve(a, o), c.transform = c.webkitTransform = c.transitionDuration = "";
        const h = a[Vn] = (g) => {
          g && g.target !== a || (!g || g.propertyName.endsWith("transform")) && (a.removeEventListener("transitionend", h), a[Vn] = null, st(a, o));
        };
        a.addEventListener("transitionend", h);
      }), s = [];
    }), () => {
      const o = /* @__PURE__ */ k(e), l = zo(o);
      let f = o.tag || be;
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
          ), Yo.set(c, Zo(c.el)));
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
}), Tc = Cc;
function Ec(e) {
  const t = e.el;
  t[Vn] && t[Vn](), t[Xs] && t[Xs]();
}
function Oc(e) {
  Xo.set(e, Zo(e.el));
}
function Ac(e) {
  const t = Yo.get(e), n = Xo.get(e), r = t.left - n.left, s = t.top - n.top;
  if (r || s) {
    const i = e.el, o = i.style, l = i.getBoundingClientRect();
    let f = 1, a = 1;
    return i.offsetWidth && (f = l.width / i.offsetWidth), i.offsetHeight && (a = l.height / i.offsetHeight), (!Number.isFinite(f) || f === 0) && (f = 1), (!Number.isFinite(a) || a === 0) && (a = 1), Math.abs(f - 1) < 0.01 && (f = 1), Math.abs(a - 1) < 0.01 && (a = 1), o.transform = o.webkitTransform = `translate(${r / f}px,${s / a}px)`, o.transitionDuration = "0s", e;
  }
}
function Zo(e) {
  const t = e.getBoundingClientRect();
  return {
    left: t.left,
    top: t.top
  };
}
function Pc(e, t, n) {
  const r = e.cloneNode(), s = e[It];
  s && s.forEach((l) => {
    l.split(/\s+/).forEach((f) => f && r.classList.remove(f));
  }), n.split(/\s+/).forEach((l) => l && r.classList.add(l)), r.style.display = "none";
  const i = t.nodeType === 1 ? t : t.parentNode;
  i.appendChild(r);
  const { hasTransform: o } = Go(r);
  return i.removeChild(r), o;
}
const Zs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return N(t) ? (n) => Cn(t, n) : t;
};
function Mc(e) {
  e.target.composing = !0;
}
function Qs(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const mr = /* @__PURE__ */ Symbol("_assign");
function ei(e, t, n) {
  return t && (e = e.trim()), n && (e = Lr(e)), e;
}
const Rc = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
    e[mr] = Zs(s);
    const i = r || s.props && s.props.type === "number";
    wt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[mr](ei(e.value, n, i));
    }), (n || i) && wt(e, "change", () => {
      e.value = ei(e.value, n, i);
    }), t || (wt(e, "compositionstart", Mc), wt(e, "compositionend", Qs), wt(e, "change", Qs));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: i } }, o) {
    if (e[mr] = Zs(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? Lr(e.value) : e.value, f = t ?? "";
    l !== f && (document.activeElement === e && e.type !== "range" && (r && t === n || s && e.value.trim() === f) || (e.value = f));
  }
}, Fc = ["ctrl", "shift", "alt", "meta"], Ic = {
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
  exact: (e, t) => Fc.some((n) => e[`${n}Key`] && !t.includes(n))
}, Dc = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((s, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const l = Ic[t[o]];
      if (l && l(s, t)) return;
    }
    return e(s, ...i);
  }));
}, Nc = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, jc = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return n[r] || (n[r] = ((s) => {
    if (!("key" in s))
      return;
    const i = tt(s.key);
    if (t.some(
      (o) => o === i || Nc[o] === i
    ))
      return e(s);
  }));
}, Lc = /* @__PURE__ */ le({ patchProp: Jo }, Wo);
let ti;
function $c() {
  return ti || (ti = Mo(Lc));
}
const Vc = ((...e) => {
  const t = $c().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const s = Bc(r);
    if (!s) return;
    const i = t._component;
    !$(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const o = n(s, !1, Hc(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
  }, t;
});
function Hc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Bc(e) {
  return ie(e) ? document.querySelector(e) : e;
}
const wu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, BaseTransition: no, BaseTransitionPropsValidators: Jr, Comment: ue, EffectScope: vi, Fragment: be, ReactiveEffect: Hr, Static: Qt, Teleport: of, Text: dn, Transition: oc, TransitionGroup: Tc, callWithAsyncErrorHandling: Me, callWithErrorHandling: Nt, camelize: Ce, capitalize: fn, cloneVNode: et, computed: fe, createApp: Vc, createBlock: jn, createCommentVNode: Gf, createElementBlock: Uf, createElementVNode: os, createRenderer: Mo, createStaticVNode: zf, createTextVNode: Lo, createVNode: ce, customRef: kr, defineAsyncComponent: cf, defineComponent: Yr, getCurrentInstance: bt, getCurrentScope: Gn, getTransitionRawChildren: tr, guardReactiveProps: jo, h: fs, handleError: jt, inject: Jt, isProxy: cn, isReactive: lt, isReadonly: Ue, isRef: oe, isShallow: xe, isVNode: Rt, markRaw: Ni, mergeModels: vf, mergeProps: $o, nextTick: er, nodeOps: Wo, normalizeClass: zn, normalizeStyle: kn, onActivated: so, onBeforeMount: lo, onBeforeUnmount: Qr, onBeforeUpdate: fo, onDeactivated: io, onErrorCaptured: ho, onMounted: an, onRenderTracked: ao, onRenderTriggered: uo, onScopeDispose: Vr, onServerPrefetch: co, onUnmounted: es, onUpdated: Zr, onWatcherCleanup: $i, openBlock: Nn, patchProp: Jo, provide: zi, proxyRefs: Ur, queuePostFlushCb: Bi, reactive: Xn, readonly: At, ref: Ae, renderList: gf, renderSlot: mf, resolveComponent: df, resolveDirective: pf, resolveDynamicComponent: hf, resolveTransitionHooks: Mt, setBlockTracking: on, setTransitionHooks: ft, shallowReactive: Di, shallowReadonly: pt, shallowRef: Qn, ssrContextKey: Gi, toDisplayString: mi, toHandlerKey: xn, toRaw: k, toRef: Li, toValue: Xe, triggerRef: kl, unref: Dt, useModel: Ef, useSSRContext: qi, useTransitionState: qr, vModelText: Rc, vShow: uc, version: Bo, watch: Pe, watchSyncEffect: Ji, withCtx: ki, withDirectives: nf, withKeys: jc, withModifiers: Dc }, Symbol.toStringTag, { value: "Module" }));
function he(e, t, n) {
  return (t = kc(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function ni(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ye(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ni(Object(n), !0).forEach(function(r) {
      he(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ni(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Kc(e, t) {
  if (e == null) return {};
  var n, r, s = Wc(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
  }
  return s;
}
function Wc(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function Uc(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function kc(e) {
  var t = Uc(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Hn(e) {
  "@babel/helpers - typeof";
  return Hn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hn(e);
}
function yr(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? he({}, e, t) : {};
}
function zc(e) {
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
var Gc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Qo = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(v, b, A) {
      if (!a(b) || h(b) || g(b) || y(b) || f(b))
        return b;
      var P, H = 0, W = 0;
      if (c(b))
        for (P = [], W = b.length; H < W; H++)
          P.push(n(v, b[H], A));
      else {
        P = {};
        for (var B in b)
          Object.prototype.hasOwnProperty.call(b, B) && (P[v(B, A)] = n(v, b[B], A));
      }
      return P;
    }, r = function(v, b) {
      b = b || {};
      var A = b.separator || "_", P = b.split || /(?=[A-Z])/;
      return v.split(P).join(A);
    }, s = function(v) {
      return C(v) ? v : (v = v.replace(/[\-_\s]+(.)?/g, function(b, A) {
        return A ? A.toUpperCase() : "";
      }), v.substr(0, 1).toLowerCase() + v.substr(1));
    }, i = function(v) {
      var b = s(v);
      return b.substr(0, 1).toUpperCase() + b.substr(1);
    }, o = function(v, b) {
      return r(v, b).toLowerCase();
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
    }, y = function(v) {
      return l.call(v) == "[object Boolean]";
    }, C = function(v) {
      return v = v - 0, v === v;
    }, m = function(v, b) {
      var A = b && "process" in b ? b.process : b;
      return typeof A != "function" ? v : function(P, H) {
        return A(P, v, H);
      };
    }, F = {
      camelize: s,
      decamelize: o,
      pascalize: i,
      depascalize: o,
      camelizeKeys: function(v, b) {
        return n(m(s, b), v);
      },
      decamelizeKeys: function(v, b) {
        return n(m(o, b), v, b);
      },
      pascalizeKeys: function(v, b) {
        return n(m(i, b), v);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = F : t.humps = F;
  })(Gc);
})(Qo);
var qc = Qo.exports, Jc = ["class", "style"];
function Yc(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), s = qc.camelize(n.slice(0, r)), i = n.slice(r + 1).trim();
    return t[s] = i, t;
  }, {});
}
function Xc(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function el(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var r = (e.children || []).map(function(f) {
    return el(f);
  }), s = Object.keys(e.attributes || {}).reduce(function(f, a) {
    var c = e.attributes[a];
    switch (a) {
      case "class":
        f.class = Xc(c);
        break;
      case "style":
        f.style = Yc(c);
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
  var i = n.style, o = i === void 0 ? {} : i, l = Kc(n, Jc);
  return fs(e.tag, Ye(Ye(Ye({}, t), {}, {
    class: s.class,
    style: Ye(Ye({}, s.style), o)
  }, s.attrs), l), r);
}
var tl = !1;
try {
  tl = !0;
} catch {
}
function Zc() {
  if (!tl && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function ri(e) {
  if (e && Hn(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (br.icon)
    return br.icon(e);
  if (e === null)
    return null;
  if (Hn(e) === "object" && e.prefix && e.iconName)
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
var Qc = /* @__PURE__ */ Yr({
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
      return ri(t.icon);
    }), i = fe(function() {
      return yr("classes", zc(t));
    }), o = fe(function() {
      return yr("transform", typeof t.transform == "string" ? br.transform(t.transform) : t.transform);
    }), l = fe(function() {
      return yr("mask", ri(t.mask));
    }), f = fe(function() {
      var c = Ye(Ye(Ye(Ye({}, i.value), o.value), l.value), {}, {
        symbol: t.symbol,
        maskId: t.maskId
      });
      return c.title = t.title, c.titleId = t.titleId, cl(s.value, c);
    });
    Pe(f, function(c) {
      if (!c)
        return Zc("Could not find one or more icon(s)", s.value, l.value);
    }, {
      immediate: !0
    });
    var a = fe(function() {
      return f.value ? el(f.value.abstract[0], {}, r) : null;
    });
    return function() {
      return a.value;
    };
  }
});
const xu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, FontAwesomeIcon: Qc }, Symbol.toStringTag, { value: "Module" }));
function eu(e, t) {
  return Gn() ? (Vr(e, t), !0) : !1;
}
const tu = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const nu = Object.prototype.toString, ru = (e) => nu.call(e) === "[object Object]", Fr = () => {
};
function su(...e) {
  if (e.length !== 1) return /* @__PURE__ */ Li(...e);
  const t = e[0];
  return typeof t == "function" ? /* @__PURE__ */ At(kr(() => ({
    get: t,
    set: Fr
  }))) : /* @__PURE__ */ Ae(t);
}
function nl(e, t) {
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
const rl = (e) => e();
function sl(...e) {
  let t = 0, n, r = !0, s = Fr, i, o, l, f, a;
  !/* @__PURE__ */ oe(e[0]) && typeof e[0] == "object" ? { delay: o, trailing: l = !0, leading: f = !0, rejectOnCancel: a = !1 } = e[0] : [o, l = !0, f = !0, a = !1] = e;
  const c = () => {
    n && (clearTimeout(n), n = void 0, s(), s = Fr);
  };
  return (g) => {
    const y = Xe(o), C = Date.now() - t, m = () => i = g();
    return c(), y <= 0 ? (t = Date.now(), m()) : (C > y ? (t = Date.now(), (f || !r) && m()) : l && (i = new Promise((F, v) => {
      s = a ? v : F, n = setTimeout(() => {
        t = Date.now(), r = !0, F(m()), c();
      }, Math.max(0, y - C));
    })), !f && !n && (n = setTimeout(() => r = !0, y)), r = !1, i);
  };
}
function iu(e = rl, t = {}) {
  const { initialState: n = "active" } = t, r = su(n === "active");
  function s() {
    r.value = !1;
  }
  function i() {
    r.value = !0;
  }
  return {
    isActive: /* @__PURE__ */ At(r),
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
function ou(e) {
  return bt();
}
// @__NO_SIDE_EFFECTS__
function Cu(e, t = 200, n = !1, r = !0, s = !1) {
  return nl(sl(t, n, r, s), e);
}
function il(e, t, n = {}) {
  const { eventFilter: r = rl, ...s } = n;
  return Pe(e, nl(r, t), s);
}
function lu(e, t, n = {}) {
  const { eventFilter: r, initialState: s = "active", ...i } = n, { eventFilter: o, pause: l, resume: f, isActive: a } = iu(r, { initialState: s });
  return {
    stop: il(e, t, {
      ...i,
      eventFilter: o
    }),
    pause: l,
    resume: f,
    isActive: a
  };
}
function fu(e, t = !0, n) {
  ou() ? an(e, n) : t ? e() : er(e);
}
function cu(e, t, n) {
  return Pe(e, t, {
    ...n,
    immediate: !0
  });
}
function Tu(e, t, n = {}) {
  const { throttle: r = 0, trailing: s = !0, leading: i = !0, ...o } = n;
  return il(e, t, {
    ...o,
    eventFilter: sl(r, s, i)
  });
}
const yt = tu ? window : void 0;
function Ir(e) {
  var t;
  const n = Xe(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function si(...e) {
  const t = (r, s, i, o) => (r.addEventListener(s, i, o), () => r.removeEventListener(s, i, o)), n = fe(() => {
    const r = vr(Xe(e[0])).filter((s) => s != null);
    return r.every((s) => typeof s != "string") ? r : void 0;
  });
  return cu(() => {
    var r, s;
    return [
      (r = (s = n.value) === null || s === void 0 ? void 0 : s.map((i) => Ir(i))) !== null && r !== void 0 ? r : [yt].filter((i) => i != null),
      vr(Xe(n.value ? e[1] : e[0])),
      vr(Dt(n.value ? e[2] : e[1])),
      Xe(n.value ? e[3] : e[2])
    ];
  }, ([r, s, i, o], l, f) => {
    if (!r?.length || !s?.length || !i?.length) return;
    const a = ru(o) ? { ...o } : o, c = r.flatMap((h) => s.flatMap((g) => i.map((y) => t(h, g, y, a))));
    f(() => {
      c.forEach((h) => h());
    });
  }, { flush: "post" });
}
// @__NO_SIDE_EFFECTS__
function uu() {
  const e = /* @__PURE__ */ Qn(!1), t = bt();
  return t && an(() => {
    e.value = !0;
  }, t), e;
}
// @__NO_SIDE_EFFECTS__
function au(e) {
  const t = /* @__PURE__ */ uu();
  return fe(() => (t.value, !!e()));
}
const Sn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, wn = "__vueuse_ssr_handlers__", du = /* @__PURE__ */ hu();
function hu() {
  return wn in Sn || (Sn[wn] = Sn[wn] || {}), Sn[wn];
}
function pu(e, t) {
  return du[e] || t;
}
function gu(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const mu = {
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
}, ii = "vueuse-storage";
function yu(e, t, n, r = {}) {
  var s;
  const { flush: i = "pre", deep: o = !0, listenToStorageChanges: l = !0, writeDefaults: f = !0, mergeDefaults: a = !1, shallow: c, window: h = yt, eventFilter: g, onError: y = (j) => {
    console.error(j);
  }, initOnMounted: C } = r, m = (c ? Qn : Ae)(typeof t == "function" ? t() : t), F = fe(() => Xe(e));
  if (!n) try {
    n = pu("getDefaultStorage", () => yt?.localStorage)();
  } catch (j) {
    y(j);
  }
  if (!n) return m;
  const v = Xe(t), b = gu(v), A = (s = r.serializer) !== null && s !== void 0 ? s : mu[b], { pause: P, resume: H } = lu(m, (j) => K(j), {
    flush: i,
    deep: o,
    eventFilter: g
  });
  Pe(F, () => R(), { flush: i });
  let W = !1;
  const B = (j) => {
    C && !W || R(j);
  }, z = (j) => {
    C && !W || ee(j);
  };
  h && l && (n instanceof Storage ? si(h, "storage", B, { passive: !0 }) : si(h, ii, z)), C ? fu(() => {
    W = !0, R();
  }) : R();
  function I(j, Q) {
    if (h) {
      const J = {
        key: F.value,
        oldValue: j,
        newValue: Q,
        storageArea: n
      };
      h.dispatchEvent(n instanceof Storage ? new StorageEvent("storage", J) : new CustomEvent(ii, { detail: J }));
    }
  }
  function K(j) {
    try {
      const Q = n.getItem(F.value);
      if (j == null)
        I(Q, null), n.removeItem(F.value);
      else {
        const J = A.write(j);
        Q !== J && (n.setItem(F.value, J), I(Q, J));
      }
    } catch (Q) {
      y(Q);
    }
  }
  function Z(j) {
    const Q = j ? j.newValue : n.getItem(F.value);
    if (Q == null)
      return f && v != null && n.setItem(F.value, A.write(v)), v;
    if (!j && a) {
      const J = A.read(Q);
      return typeof a == "function" ? a(J, v) : b === "object" && !Array.isArray(J) ? {
        ...v,
        ...J
      } : J;
    } else return typeof Q != "string" ? Q : A.read(Q);
  }
  function R(j) {
    if (!(j && j.storageArea !== n)) {
      if (j && j.key == null) {
        m.value = v;
        return;
      }
      if (!(j && j.key !== F.value)) {
        P();
        try {
          const Q = A.write(m.value);
          (j === void 0 || j?.newValue !== Q) && (m.value = Z(j));
        } catch (Q) {
          y(Q);
        } finally {
          j ? er(H) : H();
        }
      }
    }
  }
  function ee(j) {
    R(j.detail);
  }
  return m;
}
function Eu(e, t, n = {}) {
  const { window: r = yt, ...s } = n;
  let i;
  const o = /* @__PURE__ */ au(() => r && "ResizeObserver" in r), l = () => {
    i && (i.disconnect(), i = void 0);
  }, f = Pe(fe(() => {
    const c = Xe(e);
    return Array.isArray(c) ? c.map((h) => Ir(h)) : [Ir(c)];
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
  return eu(a), {
    isSupported: o,
    stop: a
  };
}
function Ou(e, t, n = {}) {
  const { window: r = yt } = n;
  return yu(e, t, r?.localStorage, n);
}
function vu(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function oi(e) {
  if (vu(e)) {
    const t = e.$el;
    return al(t) && dl(t) === "#comment" ? null : t;
  }
  return e;
}
function Ut(e) {
  return typeof e == "function" ? e() : Dt(e);
}
function ol(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function li(e, t) {
  const n = ol(e);
  return Math.round(t * n) / n;
}
function Au(e, t, n) {
  n === void 0 && (n = {});
  const r = n.whileElementsMounted, s = fe(() => {
    var B;
    return (B = Ut(n.open)) != null ? B : !0;
  }), i = fe(() => Ut(n.middleware)), o = fe(() => {
    var B;
    return (B = Ut(n.placement)) != null ? B : "bottom";
  }), l = fe(() => {
    var B;
    return (B = Ut(n.strategy)) != null ? B : "absolute";
  }), f = fe(() => {
    var B;
    return (B = Ut(n.transform)) != null ? B : !0;
  }), a = fe(() => oi(e.value)), c = fe(() => oi(t.value)), h = /* @__PURE__ */ Ae(0), g = /* @__PURE__ */ Ae(0), y = /* @__PURE__ */ Ae(l.value), C = /* @__PURE__ */ Ae(o.value), m = /* @__PURE__ */ Qn({}), F = /* @__PURE__ */ Ae(!1), v = fe(() => {
    const B = {
      position: y.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return B;
    const z = li(c.value, h.value), I = li(c.value, g.value);
    return f.value ? {
      ...B,
      transform: "translate(" + z + "px, " + I + "px)",
      ...ol(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: y.value,
      left: z + "px",
      top: I + "px"
    };
  });
  let b;
  function A() {
    if (a.value == null || c.value == null)
      return;
    const B = s.value;
    ul(a.value, c.value, {
      middleware: i.value,
      placement: o.value,
      strategy: l.value
    }).then((z) => {
      h.value = z.x, g.value = z.y, y.value = z.strategy, C.value = z.placement, m.value = z.middlewareData, F.value = B !== !1;
    });
  }
  function P() {
    typeof b == "function" && (b(), b = void 0);
  }
  function H() {
    if (P(), r === void 0) {
      A();
      return;
    }
    if (a.value != null && c.value != null) {
      b = r(a.value, c.value, A);
      return;
    }
  }
  function W() {
    s.value || (F.value = !1);
  }
  return Pe([i, o, l, s], A, {
    flush: "sync"
  }), Pe([a, c], H, {
    flush: "sync"
  }), Pe(s, W, {
    flush: "sync"
  }), Gn() && Vr(P), {
    x: /* @__PURE__ */ pt(h),
    y: /* @__PURE__ */ pt(g),
    strategy: /* @__PURE__ */ pt(y),
    placement: /* @__PURE__ */ pt(C),
    middlewareData: /* @__PURE__ */ pt(m),
    isPositioned: /* @__PURE__ */ pt(F),
    floatingStyles: v,
    update: A
  };
}
export {
  zf as $,
  Dc as A,
  kn as B,
  gf as C,
  $o as D,
  ki as E,
  be as F,
  mf as G,
  Lo as H,
  Qr as I,
  nf as J,
  Rc as K,
  df as L,
  uc as M,
  jc as N,
  fs as O,
  Li as P,
  Ou as Q,
  Xn as R,
  lo as S,
  of as T,
  Jt as U,
  Tc as V,
  Eu as W,
  Ef as X,
  vf as Y,
  Cu as Z,
  Tu as _,
  cf as a,
  pf as a0,
  oc as a1,
  wu as a2,
  xu as a3,
  jn as b,
  fe as c,
  Yr as d,
  Uf as e,
  Gf as f,
  Ae as g,
  an as h,
  ce as i,
  os as j,
  At as k,
  kl as l,
  Ni as m,
  er as n,
  Nn as o,
  zi as p,
  oe as q,
  hf as r,
  Qn as s,
  mi as t,
  Dt as u,
  Au as v,
  Pe as w,
  es as x,
  zn as y,
  Qc as z
};

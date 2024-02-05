var op = Object.defineProperty;
var ap = (t, e, n) => e in t ? op(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var p = (t, e, n) => (ap(t, typeof e != "symbol" ? e + "" : e, n), n);
/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ka(t, e) {
  const n = new Set(t.split(","));
  return e ? (i) => n.has(i.toLowerCase()) : (i) => n.has(i);
}
const wt = {}, oi = [], ye = () => {
}, lp = () => !1, Ms = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), Sa = (t) => t.startsWith("onUpdate:"), Vt = Object.assign, Ea = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, cp = Object.prototype.hasOwnProperty, ft = (t, e) => cp.call(t, e), Z = Array.isArray, ai = (t) => or(t) === "[object Map]", wi = (t) => or(t) === "[object Set]", Rl = (t) => or(t) === "[object Date]", rt = (t) => typeof t == "function", Lt = (t) => typeof t == "string", yn = (t) => typeof t == "symbol", _t = (t) => t !== null && typeof t == "object", lf = (t) => (_t(t) || rt(t)) && rt(t.then) && rt(t.catch), cf = Object.prototype.toString, or = (t) => cf.call(t), up = (t) => or(t).slice(8, -1), uf = (t) => or(t) === "[object Object]", Ta = (t) => Lt(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Vr = /* @__PURE__ */ ka(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Rs = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, fp = /-(\w)/g, Be = Rs((t) => t.replace(fp, (e, n) => n ? n.toUpperCase() : "")), hp = /\B([A-Z])/g, xi = Rs(
  (t) => t.replace(hp, "-$1").toLowerCase()
), Ds = Rs((t) => t.charAt(0).toUpperCase() + t.slice(1)), lo = Rs((t) => t ? `on${Ds(t)}` : ""), bn = (t, e) => !Object.is(t, e), Gr = (t, e) => {
  for (let n = 0; n < t.length; n++)
    t[n](e);
}, as = (t, e, n) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Hi = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let Dl;
const ff = () => Dl || (Dl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ht(t) {
  if (Z(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const i = t[n], r = Lt(i) ? gp(i) : Ht(i);
      if (r)
        for (const s in r)
          e[s] = r[s];
    }
    return e;
  } else if (Lt(t) || _t(t))
    return t;
}
const dp = /;(?![^(]*\))/g, pp = /:([^]+)/, mp = /\/\*[^]*?\*\//g;
function gp(t) {
  const e = {};
  return t.replace(mp, "").split(dp).forEach((n) => {
    if (n) {
      const i = n.split(pp);
      i.length > 1 && (e[i[0].trim()] = i[1].trim());
    }
  }), e;
}
function qn(t) {
  let e = "";
  if (Lt(t))
    e = t;
  else if (Z(t))
    for (let n = 0; n < t.length; n++) {
      const i = qn(t[n]);
      i && (e += i + " ");
    }
  else if (_t(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const yp = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", bp = /* @__PURE__ */ ka(yp);
function hf(t) {
  return !!t || t === "";
}
function vp(t, e) {
  if (t.length !== e.length)
    return !1;
  let n = !0;
  for (let i = 0; n && i < t.length; i++)
    n = vn(t[i], e[i]);
  return n;
}
function vn(t, e) {
  if (t === e)
    return !0;
  let n = Rl(t), i = Rl(e);
  if (n || i)
    return n && i ? t.getTime() === e.getTime() : !1;
  if (n = yn(t), i = yn(e), n || i)
    return t === e;
  if (n = Z(t), i = Z(e), n || i)
    return n && i ? vp(t, e) : !1;
  if (n = _t(t), i = _t(e), n || i) {
    if (!n || !i)
      return !1;
    const r = Object.keys(t).length, s = Object.keys(e).length;
    if (r !== s)
      return !1;
    for (const o in t) {
      const a = t.hasOwnProperty(o), l = e.hasOwnProperty(o);
      if (a && !l || !a && l || !vn(t[o], e[o]))
        return !1;
    }
  }
  return String(t) === String(e);
}
function Aa(t, e) {
  return t.findIndex((n) => vn(n, e));
}
const gt = (t) => Lt(t) ? t : t == null ? "" : Z(t) || _t(t) && (t.toString === cf || !rt(t.toString)) ? JSON.stringify(t, df, 2) : String(t), df = (t, e) => e && e.__v_isRef ? df(t, e.value) : ai(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (n, [i, r], s) => (n[co(i, s) + " =>"] = r, n),
    {}
  )
} : wi(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((n) => co(n))
} : yn(e) ? co(e) : _t(e) && !Z(e) && !uf(e) ? String(e) : e, co = (t, e = "") => {
  var n;
  return yn(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t;
};
/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let fe;
class pf {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this.effects = [], this.cleanups = [], this.parent = fe, !e && fe && (this.index = (fe.scopes || (fe.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(e) {
    if (this._active) {
      const n = fe;
      try {
        return fe = this, e();
      } finally {
        fe = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    fe = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    fe = this.parent;
  }
  stop(e) {
    if (this._active) {
      let n, i;
      for (n = 0, i = this.effects.length; n < i; n++)
        this.effects[n].stop();
      for (n = 0, i = this.cleanups.length; n < i; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, i = this.scopes.length; n < i; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !e) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function _p(t) {
  return new pf(t);
}
function wp(t, e = fe) {
  e && e.active && e.effects.push(t);
}
function mf() {
  return fe;
}
function xp(t) {
  fe && fe.cleanups.push(t);
}
let zn;
class Ca {
  constructor(e, n, i, r) {
    this.fn = e, this.trigger = n, this.scheduler = i, this.active = !0, this.deps = [], this._dirtyLevel = 2, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, wp(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      Yn();
      for (let e = 0; e < this._depsLength; e++) {
        const n = this.deps[e];
        if (n.computed && (kp(n.computed), this._dirtyLevel >= 2))
          break;
      }
      this._dirtyLevel < 2 && (this._dirtyLevel = 0), Kn();
    }
    return this._dirtyLevel >= 2;
  }
  set dirty(e) {
    this._dirtyLevel = e ? 2 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let e = pn, n = zn;
    try {
      return pn = !0, zn = this, this._runnings++, Fl(this), this.fn();
    } finally {
      zl(this), this._runnings--, zn = n, pn = e;
    }
  }
  stop() {
    var e;
    this.active && (Fl(this), zl(this), (e = this.onStop) == null || e.call(this), this.active = !1);
  }
}
function kp(t) {
  return t.value;
}
function Fl(t) {
  t._trackId++, t._depsLength = 0;
}
function zl(t) {
  if (t.deps && t.deps.length > t._depsLength) {
    for (let e = t._depsLength; e < t.deps.length; e++)
      gf(t.deps[e], t);
    t.deps.length = t._depsLength;
  }
}
function gf(t, e) {
  const n = t.get(e);
  n !== void 0 && e._trackId !== n && (t.delete(e), t.size === 0 && t.cleanup());
}
let pn = !0, Oo = 0;
const yf = [];
function Yn() {
  yf.push(pn), pn = !1;
}
function Kn() {
  const t = yf.pop();
  pn = t === void 0 ? !0 : t;
}
function Pa() {
  Oo++;
}
function Oa() {
  for (Oo--; !Oo && No.length; )
    No.shift()();
}
function bf(t, e, n) {
  if (e.get(t) !== t._trackId) {
    e.set(t, t._trackId);
    const i = t.deps[t._depsLength];
    i !== e ? (i && gf(i, t), t.deps[t._depsLength++] = e) : t._depsLength++;
  }
}
const No = [];
function vf(t, e, n) {
  Pa();
  for (const i of t.keys())
    if (i._dirtyLevel < e && t.get(i) === i._trackId) {
      const r = i._dirtyLevel;
      i._dirtyLevel = e, r === 0 && (i._shouldSchedule = !0, i.trigger());
    }
  _f(t), Oa();
}
function _f(t) {
  for (const e of t.keys())
    e.scheduler && e._shouldSchedule && (!e._runnings || e.allowRecurse) && t.get(e) === e._trackId && (e._shouldSchedule = !1, No.push(e.scheduler));
}
const wf = (t, e) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = t, n.computed = e, n;
}, Io = /* @__PURE__ */ new WeakMap(), $n = Symbol(""), Lo = Symbol("");
function oe(t, e, n) {
  if (pn && zn) {
    let i = Io.get(t);
    i || Io.set(t, i = /* @__PURE__ */ new Map());
    let r = i.get(n);
    r || i.set(n, r = wf(() => i.delete(n))), bf(
      zn,
      r
    );
  }
}
function je(t, e, n, i, r, s) {
  const o = Io.get(t);
  if (!o)
    return;
  let a = [];
  if (e === "clear")
    a = [...o.values()];
  else if (n === "length" && Z(t)) {
    const l = Number(i);
    o.forEach((c, u) => {
      (u === "length" || !yn(u) && u >= l) && a.push(c);
    });
  } else
    switch (n !== void 0 && a.push(o.get(n)), e) {
      case "add":
        Z(t) ? Ta(n) && a.push(o.get("length")) : (a.push(o.get($n)), ai(t) && a.push(o.get(Lo)));
        break;
      case "delete":
        Z(t) || (a.push(o.get($n)), ai(t) && a.push(o.get(Lo)));
        break;
      case "set":
        ai(t) && a.push(o.get($n));
        break;
    }
  Pa();
  for (const l of a)
    l && vf(
      l,
      2
    );
  Oa();
}
const Sp = /* @__PURE__ */ ka("__proto__,__v_isRef,__isVue"), xf = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(yn)
), $l = /* @__PURE__ */ Ep();
function Ep() {
  const t = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    t[e] = function(...n) {
      const i = dt(this);
      for (let s = 0, o = this.length; s < o; s++)
        oe(i, "get", s + "");
      const r = i[e](...n);
      return r === -1 || r === !1 ? i[e](...n.map(dt)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    t[e] = function(...n) {
      Yn(), Pa();
      const i = dt(this)[e].apply(this, n);
      return Oa(), Kn(), i;
    };
  }), t;
}
function Tp(t) {
  const e = dt(this);
  return oe(e, "has", t), e.hasOwnProperty(t);
}
class kf {
  constructor(e = !1, n = !1) {
    this._isReadonly = e, this._shallow = n;
  }
  get(e, n, i) {
    const r = this._isReadonly, s = this._shallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return i === (r ? s ? $p : Af : s ? Tf : Ef).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(i) ? e : void 0;
    const o = Z(e);
    if (!r) {
      if (o && ft($l, n))
        return Reflect.get($l, n, i);
      if (n === "hasOwnProperty")
        return Tp;
    }
    const a = Reflect.get(e, n, i);
    return (yn(n) ? xf.has(n) : Sp(n)) || (r || oe(e, "get", n), s) ? a : Zt(a) ? o && Ta(n) ? a : a.value : _t(a) ? r ? Ma(a) : La(a) : a;
  }
}
class Sf extends kf {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, i, r) {
    let s = e[n];
    if (!this._shallow) {
      const l = di(s);
      if (!ls(i) && !di(i) && (s = dt(s), i = dt(i)), !Z(e) && Zt(s) && !Zt(i))
        return l ? !1 : (s.value = i, !0);
    }
    const o = Z(e) && Ta(n) ? Number(n) < e.length : ft(e, n), a = Reflect.set(e, n, i, r);
    return e === dt(r) && (o ? bn(i, s) && je(e, "set", n, i) : je(e, "add", n, i)), a;
  }
  deleteProperty(e, n) {
    const i = ft(e, n);
    e[n];
    const r = Reflect.deleteProperty(e, n);
    return r && i && je(e, "delete", n, void 0), r;
  }
  has(e, n) {
    const i = Reflect.has(e, n);
    return (!yn(n) || !xf.has(n)) && oe(e, "has", n), i;
  }
  ownKeys(e) {
    return oe(
      e,
      "iterate",
      Z(e) ? "length" : $n
    ), Reflect.ownKeys(e);
  }
}
class Ap extends kf {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, n) {
    return !0;
  }
  deleteProperty(e, n) {
    return !0;
  }
}
const Cp = /* @__PURE__ */ new Sf(), Pp = /* @__PURE__ */ new Ap(), Op = /* @__PURE__ */ new Sf(
  !0
), Na = (t) => t, Fs = (t) => Reflect.getPrototypeOf(t);
function yr(t, e, n = !1, i = !1) {
  t = t.__v_raw;
  const r = dt(t), s = dt(e);
  n || (bn(e, s) && oe(r, "get", e), oe(r, "get", s));
  const { has: o } = Fs(r), a = i ? Na : n ? Fa : Vi;
  if (o.call(r, e))
    return a(t.get(e));
  if (o.call(r, s))
    return a(t.get(s));
  t !== r && t.get(e);
}
function br(t, e = !1) {
  const n = this.__v_raw, i = dt(n), r = dt(t);
  return e || (bn(t, r) && oe(i, "has", t), oe(i, "has", r)), t === r ? n.has(t) : n.has(t) || n.has(r);
}
function vr(t, e = !1) {
  return t = t.__v_raw, !e && oe(dt(t), "iterate", $n), Reflect.get(t, "size", t);
}
function Bl(t) {
  t = dt(t);
  const e = dt(this);
  return Fs(e).has.call(e, t) || (e.add(t), je(e, "add", t, t)), this;
}
function ql(t, e) {
  e = dt(e);
  const n = dt(this), { has: i, get: r } = Fs(n);
  let s = i.call(n, t);
  s || (t = dt(t), s = i.call(n, t));
  const o = r.call(n, t);
  return n.set(t, e), s ? bn(e, o) && je(n, "set", t, e) : je(n, "add", t, e), this;
}
function Ul(t) {
  const e = dt(this), { has: n, get: i } = Fs(e);
  let r = n.call(e, t);
  r || (t = dt(t), r = n.call(e, t)), i && i.call(e, t);
  const s = e.delete(t);
  return r && je(e, "delete", t, void 0), s;
}
function Wl() {
  const t = dt(this), e = t.size !== 0, n = t.clear();
  return e && je(t, "clear", void 0, void 0), n;
}
function _r(t, e) {
  return function(i, r) {
    const s = this, o = s.__v_raw, a = dt(o), l = e ? Na : t ? Fa : Vi;
    return !t && oe(a, "iterate", $n), o.forEach((c, u) => i.call(r, l(c), l(u), s));
  };
}
function wr(t, e, n) {
  return function(...i) {
    const r = this.__v_raw, s = dt(r), o = ai(s), a = t === "entries" || t === Symbol.iterator && o, l = t === "keys" && o, c = r[t](...i), u = n ? Na : e ? Fa : Vi;
    return !e && oe(
      s,
      "iterate",
      l ? Lo : $n
    ), {
      // iterator protocol
      next() {
        const { value: f, done: h } = c.next();
        return h ? { value: f, done: h } : {
          value: a ? [u(f[0]), u(f[1])] : u(f),
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
function sn(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function Np() {
  const t = {
    get(s) {
      return yr(this, s);
    },
    get size() {
      return vr(this);
    },
    has: br,
    add: Bl,
    set: ql,
    delete: Ul,
    clear: Wl,
    forEach: _r(!1, !1)
  }, e = {
    get(s) {
      return yr(this, s, !1, !0);
    },
    get size() {
      return vr(this);
    },
    has: br,
    add: Bl,
    set: ql,
    delete: Ul,
    clear: Wl,
    forEach: _r(!1, !0)
  }, n = {
    get(s) {
      return yr(this, s, !0);
    },
    get size() {
      return vr(this, !0);
    },
    has(s) {
      return br.call(this, s, !0);
    },
    add: sn("add"),
    set: sn("set"),
    delete: sn("delete"),
    clear: sn("clear"),
    forEach: _r(!0, !1)
  }, i = {
    get(s) {
      return yr(this, s, !0, !0);
    },
    get size() {
      return vr(this, !0);
    },
    has(s) {
      return br.call(this, s, !0);
    },
    add: sn("add"),
    set: sn("set"),
    delete: sn("delete"),
    clear: sn("clear"),
    forEach: _r(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    t[s] = wr(
      s,
      !1,
      !1
    ), n[s] = wr(
      s,
      !0,
      !1
    ), e[s] = wr(
      s,
      !1,
      !0
    ), i[s] = wr(
      s,
      !0,
      !0
    );
  }), [
    t,
    n,
    e,
    i
  ];
}
const [
  Ip,
  Lp,
  Mp,
  Rp
] = /* @__PURE__ */ Np();
function Ia(t, e) {
  const n = e ? t ? Rp : Mp : t ? Lp : Ip;
  return (i, r, s) => r === "__v_isReactive" ? !t : r === "__v_isReadonly" ? t : r === "__v_raw" ? i : Reflect.get(
    ft(n, r) && r in i ? n : i,
    r,
    s
  );
}
const Dp = {
  get: /* @__PURE__ */ Ia(!1, !1)
}, Fp = {
  get: /* @__PURE__ */ Ia(!1, !0)
}, zp = {
  get: /* @__PURE__ */ Ia(!0, !1)
}, Ef = /* @__PURE__ */ new WeakMap(), Tf = /* @__PURE__ */ new WeakMap(), Af = /* @__PURE__ */ new WeakMap(), $p = /* @__PURE__ */ new WeakMap();
function Bp(t) {
  switch (t) {
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
function qp(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Bp(up(t));
}
function La(t) {
  return di(t) ? t : Ra(
    t,
    !1,
    Cp,
    Dp,
    Ef
  );
}
function Up(t) {
  return Ra(
    t,
    !1,
    Op,
    Fp,
    Tf
  );
}
function Ma(t) {
  return Ra(
    t,
    !0,
    Pp,
    zp,
    Af
  );
}
function Ra(t, e, n, i, r) {
  if (!_t(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const s = r.get(t);
  if (s)
    return s;
  const o = qp(t);
  if (o === 0)
    return t;
  const a = new Proxy(
    t,
    o === 2 ? i : n
  );
  return r.set(t, a), a;
}
function li(t) {
  return di(t) ? li(t.__v_raw) : !!(t && t.__v_isReactive);
}
function di(t) {
  return !!(t && t.__v_isReadonly);
}
function ls(t) {
  return !!(t && t.__v_isShallow);
}
function Cf(t) {
  return li(t) || di(t);
}
function dt(t) {
  const e = t && t.__v_raw;
  return e ? dt(e) : t;
}
function Da(t) {
  return as(t, "__v_skip", !0), t;
}
const Vi = (t) => _t(t) ? La(t) : t, Fa = (t) => _t(t) ? Ma(t) : t;
class Pf {
  constructor(e, n, i, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Ca(
      () => e(this._value),
      () => jr(this, 1),
      () => this.dep && _f(this.dep)
    ), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = i;
  }
  get value() {
    const e = dt(this);
    return (!e._cacheable || e.effect.dirty) && bn(e._value, e._value = e.effect.run()) && jr(e, 2), Of(e), e.effect._dirtyLevel >= 1 && jr(e, 1), e._value;
  }
  set value(e) {
    this._setter(e);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(e) {
    this.effect.dirty = e;
  }
  // #endregion
}
function Wp(t, e, n = !1) {
  let i, r;
  const s = rt(t);
  return s ? (i = t, r = ye) : (i = t.get, r = t.set), new Pf(i, r, s || !r, n);
}
function Of(t) {
  pn && zn && (t = dt(t), bf(
    zn,
    t.dep || (t.dep = wf(
      () => t.dep = void 0,
      t instanceof Pf ? t : void 0
    ))
  ));
}
function jr(t, e = 2, n) {
  t = dt(t);
  const i = t.dep;
  i && vf(
    i,
    e
  );
}
function Zt(t) {
  return !!(t && t.__v_isRef === !0);
}
function ci(t) {
  return Nf(t, !1);
}
function ni(t) {
  return Nf(t, !0);
}
function Nf(t, e) {
  return Zt(t) ? t : new Hp(t, e);
}
class Hp {
  constructor(e, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? e : dt(e), this._value = n ? e : Vi(e);
  }
  get value() {
    return Of(this), this._value;
  }
  set value(e) {
    const n = this.__v_isShallow || ls(e) || di(e);
    e = n ? e : dt(e), bn(e, this._rawValue) && (this._rawValue = e, this._value = n ? e : Vi(e), jr(this, 2));
  }
}
function If(t) {
  return Zt(t) ? t.value : t;
}
const Vp = {
  get: (t, e, n) => If(Reflect.get(t, e, n)),
  set: (t, e, n, i) => {
    const r = t[e];
    return Zt(r) && !Zt(n) ? (r.value = n, !0) : Reflect.set(t, e, n, i);
  }
};
function Lf(t) {
  return li(t) ? t : new Proxy(t, Vp);
}
/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function mn(t, e, n, i) {
  let r;
  try {
    r = i ? t(...i) : t();
  } catch (s) {
    ar(s, e, n);
  }
  return r;
}
function Te(t, e, n, i) {
  if (rt(t)) {
    const s = mn(t, e, n, i);
    return s && lf(s) && s.catch((o) => {
      ar(o, e, n);
    }), s;
  }
  const r = [];
  for (let s = 0; s < t.length; s++)
    r.push(Te(t[s], e, n, i));
  return r;
}
function ar(t, e, n, i = !0) {
  const r = e ? e.vnode : null;
  if (e) {
    let s = e.parent;
    const o = e.proxy, a = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; s; ) {
      const c = s.ec;
      if (c) {
        for (let u = 0; u < c.length; u++)
          if (c[u](t, o, a) === !1)
            return;
      }
      s = s.parent;
    }
    const l = e.appContext.config.errorHandler;
    if (l) {
      mn(
        l,
        null,
        10,
        [t, o, a]
      );
      return;
    }
  }
  Gp(t, n, r, i);
}
function Gp(t, e, n, i = !0) {
  console.error(t);
}
let Gi = !1, Mo = !1;
const jt = [];
let Le = 0;
const ui = [];
let cn = null, Ln = 0;
const Mf = /* @__PURE__ */ Promise.resolve();
let za = null;
function zs(t) {
  const e = za || Mf;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function jp(t) {
  let e = Le + 1, n = jt.length;
  for (; e < n; ) {
    const i = e + n >>> 1, r = jt[i], s = ji(r);
    s < t || s === t && r.pre ? e = i + 1 : n = i;
  }
  return e;
}
function $s(t) {
  (!jt.length || !jt.includes(
    t,
    Gi && t.allowRecurse ? Le + 1 : Le
  )) && (t.id == null ? jt.push(t) : jt.splice(jp(t.id), 0, t), Rf());
}
function Rf() {
  !Gi && !Mo && (Mo = !0, za = Mf.then(Ff));
}
function Yp(t) {
  const e = jt.indexOf(t);
  e > Le && jt.splice(e, 1);
}
function Kp(t) {
  Z(t) ? ui.push(...t) : (!cn || !cn.includes(
    t,
    t.allowRecurse ? Ln + 1 : Ln
  )) && ui.push(t), Rf();
}
function Hl(t, e, n = Gi ? Le + 1 : 0) {
  for (; n < jt.length; n++) {
    const i = jt[n];
    if (i && i.pre) {
      if (t && i.id !== t.uid)
        continue;
      jt.splice(n, 1), n--, i();
    }
  }
}
function Df(t) {
  if (ui.length) {
    const e = [...new Set(ui)].sort(
      (n, i) => ji(n) - ji(i)
    );
    if (ui.length = 0, cn) {
      cn.push(...e);
      return;
    }
    for (cn = e, Ln = 0; Ln < cn.length; Ln++)
      cn[Ln]();
    cn = null, Ln = 0;
  }
}
const ji = (t) => t.id == null ? 1 / 0 : t.id, Xp = (t, e) => {
  const n = ji(t) - ji(e);
  if (n === 0) {
    if (t.pre && !e.pre)
      return -1;
    if (e.pre && !t.pre)
      return 1;
  }
  return n;
};
function Ff(t) {
  Mo = !1, Gi = !0, jt.sort(Xp);
  try {
    for (Le = 0; Le < jt.length; Le++) {
      const e = jt[Le];
      e && e.active !== !1 && mn(e, null, 14);
    }
  } finally {
    Le = 0, jt.length = 0, Df(), Gi = !1, za = null, (jt.length || ui.length) && Ff();
  }
}
function Jp(t, e, ...n) {
  if (t.isUnmounted)
    return;
  const i = t.vnode.props || wt;
  let r = n;
  const s = e.startsWith("update:"), o = s && e.slice(7);
  if (o && o in i) {
    const u = `${o === "modelValue" ? "model" : o}Modifiers`, { number: f, trim: h } = i[u] || wt;
    h && (r = n.map((d) => Lt(d) ? d.trim() : d)), f && (r = n.map(Hi));
  }
  let a, l = i[a = lo(e)] || // also try camelCase event handler (#2249)
  i[a = lo(Be(e))];
  !l && s && (l = i[a = lo(xi(e))]), l && Te(
    l,
    t,
    6,
    r
  );
  const c = i[a + "Once"];
  if (c) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[a])
      return;
    t.emitted[a] = !0, Te(
      c,
      t,
      6,
      r
    );
  }
}
function zf(t, e, n = !1) {
  const i = e.emitsCache, r = i.get(t);
  if (r !== void 0)
    return r;
  const s = t.emits;
  let o = {}, a = !1;
  if (!rt(t)) {
    const l = (c) => {
      const u = zf(c, e, !0);
      u && (a = !0, Vt(o, u));
    };
    !n && e.mixins.length && e.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l);
  }
  return !s && !a ? (_t(t) && i.set(t, null), null) : (Z(s) ? s.forEach((l) => o[l] = null) : Vt(o, s), _t(t) && i.set(t, o), o);
}
function Bs(t, e) {
  return !t || !Ms(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), ft(t, e[0].toLowerCase() + e.slice(1)) || ft(t, xi(e)) || ft(t, e));
}
let Qt = null, qs = null;
function cs(t) {
  const e = Qt;
  return Qt = t, qs = t && t.type.__scopeId || null, e;
}
function Qp(t) {
  qs = t;
}
function Zp() {
  qs = null;
}
function tm(t, e = Qt, n) {
  if (!e || t._n)
    return t;
  const i = (...r) => {
    i._d && ec(-1);
    const s = cs(e);
    let o;
    try {
      o = t(...r);
    } finally {
      cs(s), i._d && ec(1);
    }
    return o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function uo(t) {
  const {
    type: e,
    vnode: n,
    proxy: i,
    withProxy: r,
    props: s,
    propsOptions: [o],
    slots: a,
    attrs: l,
    emit: c,
    render: u,
    renderCache: f,
    data: h,
    setupState: d,
    ctx: m,
    inheritAttrs: v
  } = t;
  let _, g;
  const b = cs(t);
  try {
    if (n.shapeFlag & 4) {
      const S = r || i, C = S;
      _ = Ie(
        u.call(
          C,
          S,
          f,
          s,
          d,
          h,
          m
        )
      ), g = l;
    } else {
      const S = e;
      _ = Ie(
        S.length > 1 ? S(
          s,
          { attrs: l, slots: a, emit: c }
        ) : S(
          s,
          null
          /* we know it doesn't need it */
        )
      ), g = e.props ? l : em(l);
    }
  } catch (S) {
    qi.length = 0, ar(S, t, 1), _ = pt(Un);
  }
  let x = _;
  if (g && v !== !1) {
    const S = Object.keys(g), { shapeFlag: C } = x;
    S.length && C & 7 && (o && S.some(Sa) && (g = nm(
      g,
      o
    )), x = pi(x, g));
  }
  return n.dirs && (x = pi(x), x.dirs = x.dirs ? x.dirs.concat(n.dirs) : n.dirs), n.transition && (x.transition = n.transition), _ = x, cs(b), _;
}
const em = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || Ms(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, nm = (t, e) => {
  const n = {};
  for (const i in t)
    (!Sa(i) || !(i.slice(9) in e)) && (n[i] = t[i]);
  return n;
};
function im(t, e, n) {
  const { props: i, children: r, component: s } = t, { props: o, children: a, patchFlag: l } = e, c = s.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? Vl(i, o, c) : !!o;
    if (l & 8) {
      const u = e.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const h = u[f];
        if (o[h] !== i[h] && !Bs(c, h))
          return !0;
      }
    }
  } else
    return (r || a) && (!a || !a.$stable) ? !0 : i === o ? !1 : i ? o ? Vl(i, o, c) : !0 : !!o;
  return !1;
}
function Vl(t, e, n) {
  const i = Object.keys(e);
  if (i.length !== Object.keys(t).length)
    return !0;
  for (let r = 0; r < i.length; r++) {
    const s = i[r];
    if (e[s] !== t[s] && !Bs(n, s))
      return !0;
  }
  return !1;
}
function rm({ vnode: t, parent: e }, n) {
  for (; e; ) {
    const i = e.subTree;
    if (i.suspense && i.suspense.activeBranch === t && (i.el = t.el), i === t)
      (t = e.vnode).el = n, e = e.parent;
    else
      break;
  }
}
const $a = "components";
function Qn(t, e) {
  return Bf($a, t, !0, e) || t;
}
const $f = Symbol.for("v-ndc");
function sm(t) {
  return Lt(t) ? Bf($a, t, !1) || t : t || $f;
}
function Bf(t, e, n = !0, i = !1) {
  const r = Qt || $t;
  if (r) {
    const s = r.type;
    if (t === $a) {
      const a = Zm(
        s,
        !1
      );
      if (a && (a === e || a === Be(e) || a === Ds(Be(e))))
        return s;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      Gl(r[t] || s[t], e) || // global registration
      Gl(r.appContext[t], e)
    );
    return !o && i ? s : o;
  }
}
function Gl(t, e) {
  return t && (t[e] || t[Be(e)] || t[Ds(Be(e))]);
}
const om = (t) => t.__isSuspense;
function am(t, e) {
  e && e.pendingBranch ? Z(t) ? e.effects.push(...t) : e.effects.push(t) : Kp(t);
}
const lm = Symbol.for("v-scx"), cm = () => Bi(lm), xr = {};
function Ye(t, e, n) {
  return qf(t, e, n);
}
function qf(t, e, {
  immediate: n,
  deep: i,
  flush: r,
  once: s,
  onTrack: o,
  onTrigger: a
} = wt) {
  if (e && s) {
    const I = e;
    e = (...G) => {
      I(...G), C();
    };
  }
  const l = $t, c = (I) => i === !0 ? I : (
    // for deep: false, only traverse root-level properties
    Mn(I, i === !1 ? 1 : void 0)
  );
  let u, f = !1, h = !1;
  if (Zt(t) ? (u = () => t.value, f = ls(t)) : li(t) ? (u = () => c(t), f = !0) : Z(t) ? (h = !0, f = t.some((I) => li(I) || ls(I)), u = () => t.map((I) => {
    if (Zt(I))
      return I.value;
    if (li(I))
      return c(I);
    if (rt(I))
      return mn(I, l, 2);
  })) : rt(t) ? e ? u = () => mn(t, l, 2) : u = () => (d && d(), Te(
    t,
    l,
    3,
    [m]
  )) : u = ye, e && i) {
    const I = u;
    u = () => Mn(I());
  }
  let d, m = (I) => {
    d = x.onStop = () => {
      mn(I, l, 4), d = x.onStop = void 0;
    };
  }, v;
  if (ur)
    if (m = ye, e ? n && Te(e, l, 3, [
      u(),
      h ? [] : void 0,
      m
    ]) : u(), r === "sync") {
      const I = cm();
      v = I.__watcherHandles || (I.__watcherHandles = []);
    } else
      return ye;
  let _ = h ? new Array(t.length).fill(xr) : xr;
  const g = () => {
    if (!(!x.active || !x.dirty))
      if (e) {
        const I = x.run();
        (i || f || (h ? I.some((G, L) => bn(G, _[L])) : bn(I, _))) && (d && d(), Te(e, l, 3, [
          I,
          // pass undefined as the old value when it's changed for the first time
          _ === xr ? void 0 : h && _[0] === xr ? [] : _,
          m
        ]), _ = I);
      } else
        x.run();
  };
  g.allowRecurse = !!e;
  let b;
  r === "sync" ? b = g : r === "post" ? b = () => re(g, l && l.suspense) : (g.pre = !0, l && (g.id = l.uid), b = () => $s(g));
  const x = new Ca(u, ye, b), S = mf(), C = () => {
    x.stop(), S && Ea(S.effects, x);
  };
  return e ? n ? g() : _ = x.run() : r === "post" ? re(
    x.run.bind(x),
    l && l.suspense
  ) : x.run(), v && v.push(C), C;
}
function um(t, e, n) {
  const i = this.proxy, r = Lt(t) ? t.includes(".") ? Uf(i, t) : () => i[t] : t.bind(i, i);
  let s;
  rt(e) ? s = e : (s = e.handler, n = e);
  const o = cr(this), a = qf(r, s.bind(i), n);
  return o(), a;
}
function Uf(t, e) {
  const n = e.split(".");
  return () => {
    let i = t;
    for (let r = 0; r < n.length && i; r++)
      i = i[n[r]];
    return i;
  };
}
function Mn(t, e, n = 0, i) {
  if (!_t(t) || t.__v_skip)
    return t;
  if (e && e > 0) {
    if (n >= e)
      return t;
    n++;
  }
  if (i = i || /* @__PURE__ */ new Set(), i.has(t))
    return t;
  if (i.add(t), Zt(t))
    Mn(t.value, e, n, i);
  else if (Z(t))
    for (let r = 0; r < t.length; r++)
      Mn(t[r], e, n, i);
  else if (wi(t) || ai(t))
    t.forEach((r) => {
      Mn(r, e, n, i);
    });
  else if (uf(t))
    for (const r in t)
      Mn(t[r], e, n, i);
  return t;
}
function we(t, e) {
  if (Qt === null)
    return t;
  const n = Vs(Qt) || Qt.proxy, i = t.dirs || (t.dirs = []);
  for (let r = 0; r < e.length; r++) {
    let [s, o, a, l = wt] = e[r];
    s && (rt(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && Mn(o), i.push({
      dir: s,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: a,
      modifiers: l
    }));
  }
  return t;
}
function An(t, e, n, i) {
  const r = t.dirs, s = e && e.dirs;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    s && (a.oldValue = s[o].value);
    let l = a.dir[i];
    l && (Yn(), Te(l, n, 8, [
      t.el,
      a,
      t,
      e
    ]), Kn());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ki(t, e) {
  return rt(t) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Vt({ name: t.name }, e, { setup: t })
  ) : t;
}
const Yr = (t) => !!t.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Wf(t) {
  rt(t) && (t = { loader: t });
  const {
    loader: e,
    loadingComponent: n,
    errorComponent: i,
    delay: r = 200,
    timeout: s,
    // undefined = never times out
    suspensible: o = !0,
    onError: a
  } = t;
  let l = null, c, u = 0;
  const f = () => (u++, l = null, h()), h = () => {
    let d;
    return l || (d = l = e().catch((m) => {
      if (m = m instanceof Error ? m : new Error(String(m)), a)
        return new Promise((v, _) => {
          a(m, () => v(f()), () => _(m), u + 1);
        });
      throw m;
    }).then((m) => d !== l && l ? l : (m && (m.__esModule || m[Symbol.toStringTag] === "Module") && (m = m.default), c = m, m)));
  };
  return /* @__PURE__ */ ki({
    name: "AsyncComponentWrapper",
    __asyncLoader: h,
    get __asyncResolved() {
      return c;
    },
    setup() {
      const d = $t;
      if (c)
        return () => fo(c, d);
      const m = (b) => {
        l = null, ar(
          b,
          d,
          13,
          !i
        );
      };
      if (o && d.suspense || ur)
        return h().then((b) => () => fo(b, d)).catch((b) => (m(b), () => i ? pt(i, {
          error: b
        }) : null));
      const v = ci(!1), _ = ci(), g = ci(!!r);
      return r && setTimeout(() => {
        g.value = !1;
      }, r), s != null && setTimeout(() => {
        if (!v.value && !_.value) {
          const b = new Error(
            `Async component timed out after ${s}ms.`
          );
          m(b), _.value = b;
        }
      }, s), h().then(() => {
        v.value = !0, d.parent && Ba(d.parent.vnode) && (d.parent.effect.dirty = !0, $s(d.parent.update));
      }).catch((b) => {
        m(b), _.value = b;
      }), () => {
        if (v.value && c)
          return fo(c, d);
        if (_.value && i)
          return pt(i, {
            error: _.value
          });
        if (n && !g.value)
          return pt(n);
      };
    }
  });
}
function fo(t, e) {
  const { ref: n, props: i, children: r, ce: s } = e.vnode, o = pt(t, i, r);
  return o.ref = n, o.ce = s, delete e.vnode.ce, o;
}
const Ba = (t) => t.type.__isKeepAlive;
function fm(t, e) {
  Hf(t, "a", e);
}
function hm(t, e) {
  Hf(t, "da", e);
}
function Hf(t, e, n = $t) {
  const i = t.__wdc || (t.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return t();
  });
  if (Us(e, i, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Ba(r.parent.vnode) && dm(i, e, n, r), r = r.parent;
  }
}
function dm(t, e, n, i) {
  const r = Us(
    e,
    t,
    i,
    !0
    /* prepend */
  );
  Ua(() => {
    Ea(i[e], r);
  }, n);
}
function Us(t, e, n = $t, i = !1) {
  if (n) {
    const r = n[t] || (n[t] = []), s = e.__weh || (e.__weh = (...o) => {
      if (n.isUnmounted)
        return;
      Yn();
      const a = cr(n), l = Te(e, n, t, o);
      return a(), Kn(), l;
    });
    return i ? r.unshift(s) : r.push(s), s;
  }
}
const Qe = (t) => (e, n = $t) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!ur || t === "sp") && Us(t, (...i) => e(...i), n)
), pm = Qe("bm"), qa = Qe("m"), mm = Qe("bu"), gm = Qe("u"), ym = Qe("bum"), Ua = Qe("um"), bm = Qe("sp"), vm = Qe(
  "rtg"
), _m = Qe(
  "rtc"
);
function wm(t, e = $t) {
  Us("ec", t, e);
}
function Nn(t, e, n, i) {
  let r;
  const s = n && n[i];
  if (Z(t) || Lt(t)) {
    r = new Array(t.length);
    for (let o = 0, a = t.length; o < a; o++)
      r[o] = e(t[o], o, void 0, s && s[o]);
  } else if (typeof t == "number") {
    r = new Array(t);
    for (let o = 0; o < t; o++)
      r[o] = e(o + 1, o, void 0, s && s[o]);
  } else if (_t(t))
    if (t[Symbol.iterator])
      r = Array.from(
        t,
        (o, a) => e(o, a, void 0, s && s[a])
      );
    else {
      const o = Object.keys(t);
      r = new Array(o.length);
      for (let a = 0, l = o.length; a < l; a++) {
        const c = o[a];
        r[a] = e(t[c], c, a, s && s[a]);
      }
    }
  else
    r = [];
  return n && (n[i] = r), r;
}
const Ro = (t) => t ? nh(t) ? Vs(t) || t.proxy : Ro(t.parent) : null, $i = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Vt(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => Ro(t.parent),
    $root: (t) => Ro(t.root),
    $emit: (t) => t.emit,
    $options: (t) => Wa(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      t.effect.dirty = !0, $s(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = zs.bind(t.proxy)),
    $watch: (t) => um.bind(t)
  })
), ho = (t, e) => t !== wt && !t.__isScriptSetup && ft(t, e), xm = {
  get({ _: t }, e) {
    const { ctx: n, setupState: i, data: r, props: s, accessCache: o, type: a, appContext: l } = t;
    let c;
    if (e[0] !== "$") {
      const d = o[e];
      if (d !== void 0)
        switch (d) {
          case 1:
            return i[e];
          case 2:
            return r[e];
          case 4:
            return n[e];
          case 3:
            return s[e];
        }
      else {
        if (ho(i, e))
          return o[e] = 1, i[e];
        if (r !== wt && ft(r, e))
          return o[e] = 2, r[e];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = t.propsOptions[0]) && ft(c, e)
        )
          return o[e] = 3, s[e];
        if (n !== wt && ft(n, e))
          return o[e] = 4, n[e];
        Do && (o[e] = 0);
      }
    }
    const u = $i[e];
    let f, h;
    if (u)
      return e === "$attrs" && oe(t, "get", e), u(t);
    if (
      // css module (injected by vue-loader)
      (f = a.__cssModules) && (f = f[e])
    )
      return f;
    if (n !== wt && ft(n, e))
      return o[e] = 4, n[e];
    if (
      // global properties
      h = l.config.globalProperties, ft(h, e)
    )
      return h[e];
  },
  set({ _: t }, e, n) {
    const { data: i, setupState: r, ctx: s } = t;
    return ho(r, e) ? (r[e] = n, !0) : i !== wt && ft(i, e) ? (i[e] = n, !0) : ft(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (s[e] = n, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: n, ctx: i, appContext: r, propsOptions: s }
  }, o) {
    let a;
    return !!n[o] || t !== wt && ft(t, o) || ho(e, o) || (a = s[0]) && ft(a, o) || ft(i, o) || ft($i, o) || ft(r.config.globalProperties, o);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : ft(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
function jl(t) {
  return Z(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
let Do = !0;
function km(t) {
  const e = Wa(t), n = t.proxy, i = t.ctx;
  Do = !1, e.beforeCreate && Yl(e.beforeCreate, t, "bc");
  const {
    // state
    data: r,
    computed: s,
    methods: o,
    watch: a,
    provide: l,
    inject: c,
    // lifecycle
    created: u,
    beforeMount: f,
    mounted: h,
    beforeUpdate: d,
    updated: m,
    activated: v,
    deactivated: _,
    beforeDestroy: g,
    beforeUnmount: b,
    destroyed: x,
    unmounted: S,
    render: C,
    renderTracked: I,
    renderTriggered: G,
    errorCaptured: L,
    serverPrefetch: j,
    // public API
    expose: tt,
    inheritAttrs: z,
    // assets
    components: et,
    directives: B,
    filters: st
  } = e;
  if (c && Sm(c, i, null), o)
    for (const lt in o) {
      const at = o[lt];
      rt(at) && (i[lt] = at.bind(n));
    }
  if (r) {
    const lt = r.call(n, n);
    _t(lt) && (t.data = La(lt));
  }
  if (Do = !0, s)
    for (const lt in s) {
      const at = s[lt], St = rt(at) ? at.bind(n, n) : rt(at.get) ? at.get.bind(n, n) : ye, qt = !rt(at) && rt(at.set) ? at.set.bind(n) : ye, Xt = pe({
        get: St,
        set: qt
      });
      Object.defineProperty(i, lt, {
        enumerable: !0,
        configurable: !0,
        get: () => Xt.value,
        set: (Ut) => Xt.value = Ut
      });
    }
  if (a)
    for (const lt in a)
      Vf(a[lt], i, n, lt);
  if (l) {
    const lt = rt(l) ? l.call(n) : l;
    Reflect.ownKeys(lt).forEach((at) => {
      Om(at, lt[at]);
    });
  }
  u && Yl(u, t, "c");
  function bt(lt, at) {
    Z(at) ? at.forEach((St) => lt(St.bind(n))) : at && lt(at.bind(n));
  }
  if (bt(pm, f), bt(qa, h), bt(mm, d), bt(gm, m), bt(fm, v), bt(hm, _), bt(wm, L), bt(_m, I), bt(vm, G), bt(ym, b), bt(Ua, S), bt(bm, j), Z(tt))
    if (tt.length) {
      const lt = t.exposed || (t.exposed = {});
      tt.forEach((at) => {
        Object.defineProperty(lt, at, {
          get: () => n[at],
          set: (St) => n[at] = St
        });
      });
    } else
      t.exposed || (t.exposed = {});
  C && t.render === ye && (t.render = C), z != null && (t.inheritAttrs = z), et && (t.components = et), B && (t.directives = B);
}
function Sm(t, e, n = ye) {
  Z(t) && (t = Fo(t));
  for (const i in t) {
    const r = t[i];
    let s;
    _t(r) ? "default" in r ? s = Bi(
      r.from || i,
      r.default,
      !0
    ) : s = Bi(r.from || i) : s = Bi(r), Zt(s) ? Object.defineProperty(e, i, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (o) => s.value = o
    }) : e[i] = s;
  }
}
function Yl(t, e, n) {
  Te(
    Z(t) ? t.map((i) => i.bind(e.proxy)) : t.bind(e.proxy),
    e,
    n
  );
}
function Vf(t, e, n, i) {
  const r = i.includes(".") ? Uf(n, i) : () => n[i];
  if (Lt(t)) {
    const s = e[t];
    rt(s) && Ye(r, s);
  } else if (rt(t))
    Ye(r, t.bind(n));
  else if (_t(t))
    if (Z(t))
      t.forEach((s) => Vf(s, e, n, i));
    else {
      const s = rt(t.handler) ? t.handler.bind(n) : e[t.handler];
      rt(s) && Ye(r, s, t);
    }
}
function Wa(t) {
  const e = t.type, { mixins: n, extends: i } = e, {
    mixins: r,
    optionsCache: s,
    config: { optionMergeStrategies: o }
  } = t.appContext, a = s.get(e);
  let l;
  return a ? l = a : !r.length && !n && !i ? l = e : (l = {}, r.length && r.forEach(
    (c) => us(l, c, o, !0)
  ), us(l, e, o)), _t(e) && s.set(e, l), l;
}
function us(t, e, n, i = !1) {
  const { mixins: r, extends: s } = e;
  s && us(t, s, n, !0), r && r.forEach(
    (o) => us(t, o, n, !0)
  );
  for (const o in e)
    if (!(i && o === "expose")) {
      const a = Em[o] || n && n[o];
      t[o] = a ? a(t[o], e[o]) : e[o];
    }
  return t;
}
const Em = {
  data: Kl,
  props: Xl,
  emits: Xl,
  // objects
  methods: Ri,
  computed: Ri,
  // lifecycle
  beforeCreate: Jt,
  created: Jt,
  beforeMount: Jt,
  mounted: Jt,
  beforeUpdate: Jt,
  updated: Jt,
  beforeDestroy: Jt,
  beforeUnmount: Jt,
  destroyed: Jt,
  unmounted: Jt,
  activated: Jt,
  deactivated: Jt,
  errorCaptured: Jt,
  serverPrefetch: Jt,
  // assets
  components: Ri,
  directives: Ri,
  // watch
  watch: Am,
  // provide / inject
  provide: Kl,
  inject: Tm
};
function Kl(t, e) {
  return e ? t ? function() {
    return Vt(
      rt(t) ? t.call(this, this) : t,
      rt(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function Tm(t, e) {
  return Ri(Fo(t), Fo(e));
}
function Fo(t) {
  if (Z(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e;
  }
  return t;
}
function Jt(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function Ri(t, e) {
  return t ? Vt(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function Xl(t, e) {
  return t ? Z(t) && Z(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : Vt(
    /* @__PURE__ */ Object.create(null),
    jl(t),
    jl(e ?? {})
  ) : e;
}
function Am(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  const n = Vt(/* @__PURE__ */ Object.create(null), t);
  for (const i in e)
    n[i] = Jt(t[i], e[i]);
  return n;
}
function Gf() {
  return {
    app: null,
    config: {
      isNativeTag: lp,
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
let Cm = 0;
function Pm(t, e) {
  return function(i, r = null) {
    rt(i) || (i = Vt({}, i)), r != null && !_t(r) && (r = null);
    const s = Gf(), o = /* @__PURE__ */ new WeakSet();
    let a = !1;
    const l = s.app = {
      _uid: Cm++,
      _component: i,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: eg,
      get config() {
        return s.config;
      },
      set config(c) {
      },
      use(c, ...u) {
        return o.has(c) || (c && rt(c.install) ? (o.add(c), c.install(l, ...u)) : rt(c) && (o.add(c), c(l, ...u))), l;
      },
      mixin(c) {
        return s.mixins.includes(c) || s.mixins.push(c), l;
      },
      component(c, u) {
        return u ? (s.components[c] = u, l) : s.components[c];
      },
      directive(c, u) {
        return u ? (s.directives[c] = u, l) : s.directives[c];
      },
      mount(c, u, f) {
        if (!a) {
          const h = pt(i, r);
          return h.appContext = s, f === !0 ? f = "svg" : f === !1 && (f = void 0), u && e ? e(h, c) : t(h, c, f), a = !0, l._container = c, c.__vue_app__ = l, Vs(h.component) || h.component.proxy;
        }
      },
      unmount() {
        a && (t(null, l._container), delete l._container.__vue_app__);
      },
      provide(c, u) {
        return s.provides[c] = u, l;
      },
      runWithContext(c) {
        fs = l;
        try {
          return c();
        } finally {
          fs = null;
        }
      }
    };
    return l;
  };
}
let fs = null;
function Om(t, e) {
  if ($t) {
    let n = $t.provides;
    const i = $t.parent && $t.parent.provides;
    i === n && (n = $t.provides = Object.create(i)), n[t] = e;
  }
}
function Bi(t, e, n = !1) {
  const i = $t || Qt;
  if (i || fs) {
    const r = i ? i.parent == null ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : fs._context.provides;
    if (r && t in r)
      return r[t];
    if (arguments.length > 1)
      return n && rt(e) ? e.call(i && i.proxy) : e;
  }
}
function Nm(t, e, n, i = !1) {
  const r = {}, s = {};
  as(s, Ws, 1), t.propsDefaults = /* @__PURE__ */ Object.create(null), jf(t, e, r, s);
  for (const o in t.propsOptions[0])
    o in r || (r[o] = void 0);
  n ? t.props = i ? r : Up(r) : t.type.props ? t.props = r : t.props = s, t.attrs = s;
}
function Im(t, e, n, i) {
  const {
    props: r,
    attrs: s,
    vnode: { patchFlag: o }
  } = t, a = dt(r), [l] = t.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const u = t.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let h = u[f];
        if (Bs(t.emitsOptions, h))
          continue;
        const d = e[h];
        if (l)
          if (ft(s, h))
            d !== s[h] && (s[h] = d, c = !0);
          else {
            const m = Be(h);
            r[m] = zo(
              l,
              a,
              m,
              d,
              t,
              !1
            );
          }
        else
          d !== s[h] && (s[h] = d, c = !0);
      }
    }
  } else {
    jf(t, e, r, s) && (c = !0);
    let u;
    for (const f in a)
      (!e || // for camelCase
      !ft(e, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = xi(f)) === f || !ft(e, u))) && (l ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[u] !== void 0) && (r[f] = zo(
        l,
        a,
        f,
        void 0,
        t,
        !0
      )) : delete r[f]);
    if (s !== a)
      for (const f in s)
        (!e || !ft(e, f)) && (delete s[f], c = !0);
  }
  c && je(t, "set", "$attrs");
}
function jf(t, e, n, i) {
  const [r, s] = t.propsOptions;
  let o = !1, a;
  if (e)
    for (let l in e) {
      if (Vr(l))
        continue;
      const c = e[l];
      let u;
      r && ft(r, u = Be(l)) ? !s || !s.includes(u) ? n[u] = c : (a || (a = {}))[u] = c : Bs(t.emitsOptions, l) || (!(l in i) || c !== i[l]) && (i[l] = c, o = !0);
    }
  if (s) {
    const l = dt(n), c = a || wt;
    for (let u = 0; u < s.length; u++) {
      const f = s[u];
      n[f] = zo(
        r,
        l,
        f,
        c[f],
        t,
        !ft(c, f)
      );
    }
  }
  return o;
}
function zo(t, e, n, i, r, s) {
  const o = t[n];
  if (o != null) {
    const a = ft(o, "default");
    if (a && i === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && rt(l)) {
        const { propsDefaults: c } = r;
        if (n in c)
          i = c[n];
        else {
          const u = cr(r);
          i = c[n] = l.call(
            null,
            e
          ), u();
        }
      } else
        i = l;
    }
    o[
      0
      /* shouldCast */
    ] && (s && !a ? i = !1 : o[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === xi(n)) && (i = !0));
  }
  return i;
}
function Yf(t, e, n = !1) {
  const i = e.propsCache, r = i.get(t);
  if (r)
    return r;
  const s = t.props, o = {}, a = [];
  let l = !1;
  if (!rt(t)) {
    const u = (f) => {
      l = !0;
      const [h, d] = Yf(f, e, !0);
      Vt(o, h), d && a.push(...d);
    };
    !n && e.mixins.length && e.mixins.forEach(u), t.extends && u(t.extends), t.mixins && t.mixins.forEach(u);
  }
  if (!s && !l)
    return _t(t) && i.set(t, oi), oi;
  if (Z(s))
    for (let u = 0; u < s.length; u++) {
      const f = Be(s[u]);
      Jl(f) && (o[f] = wt);
    }
  else if (s)
    for (const u in s) {
      const f = Be(u);
      if (Jl(f)) {
        const h = s[u], d = o[f] = Z(h) || rt(h) ? { type: h } : Vt({}, h);
        if (d) {
          const m = tc(Boolean, d.type), v = tc(String, d.type);
          d[
            0
            /* shouldCast */
          ] = m > -1, d[
            1
            /* shouldCastTrue */
          ] = v < 0 || m < v, (m > -1 || ft(d, "default")) && a.push(f);
        }
      }
    }
  const c = [o, a];
  return _t(t) && i.set(t, c), c;
}
function Jl(t) {
  return t[0] !== "$";
}
function Ql(t) {
  const e = t && t.toString().match(/^\s*(function|class) (\w+)/);
  return e ? e[2] : t === null ? "null" : "";
}
function Zl(t, e) {
  return Ql(t) === Ql(e);
}
function tc(t, e) {
  return Z(e) ? e.findIndex((n) => Zl(n, t)) : rt(e) && Zl(e, t) ? 0 : -1;
}
const Kf = (t) => t[0] === "_" || t === "$stable", Ha = (t) => Z(t) ? t.map(Ie) : [Ie(t)], Lm = (t, e, n) => {
  if (e._n)
    return e;
  const i = tm((...r) => Ha(e(...r)), n);
  return i._c = !1, i;
}, Xf = (t, e, n) => {
  const i = t._ctx;
  for (const r in t) {
    if (Kf(r))
      continue;
    const s = t[r];
    if (rt(s))
      e[r] = Lm(r, s, i);
    else if (s != null) {
      const o = Ha(s);
      e[r] = () => o;
    }
  }
}, Jf = (t, e) => {
  const n = Ha(e);
  t.slots.default = () => n;
}, Mm = (t, e) => {
  if (t.vnode.shapeFlag & 32) {
    const n = e._;
    n ? (t.slots = dt(e), as(e, "_", n)) : Xf(
      e,
      t.slots = {}
    );
  } else
    t.slots = {}, e && Jf(t, e);
  as(t.slots, Ws, 1);
}, Rm = (t, e, n) => {
  const { vnode: i, slots: r } = t;
  let s = !0, o = wt;
  if (i.shapeFlag & 32) {
    const a = e._;
    a ? n && a === 1 ? s = !1 : (Vt(r, e), !n && a === 1 && delete r._) : (s = !e.$stable, Xf(e, r)), o = e;
  } else
    e && (Jf(t, e), o = { default: 1 });
  if (s)
    for (const a in r)
      !Kf(a) && o[a] == null && delete r[a];
};
function $o(t, e, n, i, r = !1) {
  if (Z(t)) {
    t.forEach(
      (h, d) => $o(
        h,
        e && (Z(e) ? e[d] : e),
        n,
        i,
        r
      )
    );
    return;
  }
  if (Yr(i) && !r)
    return;
  const s = i.shapeFlag & 4 ? Vs(i.component) || i.component.proxy : i.el, o = r ? null : s, { i: a, r: l } = t, c = e && e.r, u = a.refs === wt ? a.refs = {} : a.refs, f = a.setupState;
  if (c != null && c !== l && (Lt(c) ? (u[c] = null, ft(f, c) && (f[c] = null)) : Zt(c) && (c.value = null)), rt(l))
    mn(l, a, 12, [o, u]);
  else {
    const h = Lt(l), d = Zt(l), m = t.f;
    if (h || d) {
      const v = () => {
        if (m) {
          const _ = h ? ft(f, l) ? f[l] : u[l] : l.value;
          r ? Z(_) && Ea(_, s) : Z(_) ? _.includes(s) || _.push(s) : h ? (u[l] = [s], ft(f, l) && (f[l] = u[l])) : (l.value = [s], t.k && (u[t.k] = l.value));
        } else
          h ? (u[l] = o, ft(f, l) && (f[l] = o)) : d && (l.value = o, t.k && (u[t.k] = o));
      };
      r || m ? v() : (v.id = -1, re(v, n));
    }
  }
}
const re = am;
function Dm(t) {
  return Fm(t);
}
function Fm(t, e) {
  const n = ff();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: r,
    patchProp: s,
    createElement: o,
    createText: a,
    createComment: l,
    setText: c,
    setElementText: u,
    parentNode: f,
    nextSibling: h,
    setScopeId: d = ye,
    insertStaticContent: m
  } = t, v = (y, w, T, P = null, O = null, R = null, F = void 0, M = null, D = !!w.dynamicChildren) => {
    if (y === w)
      return;
    y && !Oi(y, w) && (P = Ce(y), Ut(y, O, R, !0), y = null), w.patchFlag === -2 && (D = !1, w.dynamicChildren = null);
    const { type: N, ref: q, shapeFlag: $ } = w;
    switch (N) {
      case lr:
        _(y, w, T, P);
        break;
      case Un:
        g(y, w, T, P);
        break;
      case Kr:
        y == null && b(w, T, P, F);
        break;
      case Mt:
        et(
          y,
          w,
          T,
          P,
          O,
          R,
          F,
          M,
          D
        );
        break;
      default:
        $ & 1 ? C(
          y,
          w,
          T,
          P,
          O,
          R,
          F,
          M,
          D
        ) : $ & 6 ? B(
          y,
          w,
          T,
          P,
          O,
          R,
          F,
          M,
          D
        ) : ($ & 64 || $ & 128) && N.process(
          y,
          w,
          T,
          P,
          O,
          R,
          F,
          M,
          D,
          _e
        );
    }
    q != null && O && $o(q, y && y.ref, R, w || y, !w);
  }, _ = (y, w, T, P) => {
    if (y == null)
      i(
        w.el = a(w.children),
        T,
        P
      );
    else {
      const O = w.el = y.el;
      w.children !== y.children && c(O, w.children);
    }
  }, g = (y, w, T, P) => {
    y == null ? i(
      w.el = l(w.children || ""),
      T,
      P
    ) : w.el = y.el;
  }, b = (y, w, T, P) => {
    [y.el, y.anchor] = m(
      y.children,
      w,
      T,
      P,
      y.el,
      y.anchor
    );
  }, x = ({ el: y, anchor: w }, T, P) => {
    let O;
    for (; y && y !== w; )
      O = h(y), i(y, T, P), y = O;
    i(w, T, P);
  }, S = ({ el: y, anchor: w }) => {
    let T;
    for (; y && y !== w; )
      T = h(y), r(y), y = T;
    r(w);
  }, C = (y, w, T, P, O, R, F, M, D) => {
    w.type === "svg" ? F = "svg" : w.type === "math" && (F = "mathml"), y == null ? I(
      w,
      T,
      P,
      O,
      R,
      F,
      M,
      D
    ) : j(
      y,
      w,
      O,
      R,
      F,
      M,
      D
    );
  }, I = (y, w, T, P, O, R, F, M) => {
    let D, N;
    const { props: q, shapeFlag: $, transition: k, dirs: E } = y;
    if (D = y.el = o(
      y.type,
      R,
      q && q.is,
      q
    ), $ & 8 ? u(D, y.children) : $ & 16 && L(
      y.children,
      D,
      null,
      P,
      O,
      po(y, R),
      F,
      M
    ), E && An(y, null, P, "created"), G(D, y, y.scopeId, F, P), q) {
      for (const J in q)
        J !== "value" && !Vr(J) && s(
          D,
          J,
          null,
          q[J],
          R,
          y.children,
          P,
          O,
          te
        );
      "value" in q && s(D, "value", null, q.value, R), (N = q.onVnodeBeforeMount) && Oe(N, P, y);
    }
    E && An(y, null, P, "beforeMount");
    const H = zm(O, k);
    H && k.beforeEnter(D), i(D, w, T), ((N = q && q.onVnodeMounted) || H || E) && re(() => {
      N && Oe(N, P, y), H && k.enter(D), E && An(y, null, P, "mounted");
    }, O);
  }, G = (y, w, T, P, O) => {
    if (T && d(y, T), P)
      for (let R = 0; R < P.length; R++)
        d(y, P[R]);
    if (O) {
      let R = O.subTree;
      if (w === R) {
        const F = O.vnode;
        G(
          y,
          F,
          F.scopeId,
          F.slotScopeIds,
          O.parent
        );
      }
    }
  }, L = (y, w, T, P, O, R, F, M, D = 0) => {
    for (let N = D; N < y.length; N++) {
      const q = y[N] = M ? un(y[N]) : Ie(y[N]);
      v(
        null,
        q,
        w,
        T,
        P,
        O,
        R,
        F,
        M
      );
    }
  }, j = (y, w, T, P, O, R, F) => {
    const M = w.el = y.el;
    let { patchFlag: D, dynamicChildren: N, dirs: q } = w;
    D |= y.patchFlag & 16;
    const $ = y.props || wt, k = w.props || wt;
    let E;
    if (T && Cn(T, !1), (E = k.onVnodeBeforeUpdate) && Oe(E, T, w, y), q && An(w, y, T, "beforeUpdate"), T && Cn(T, !0), N ? tt(
      y.dynamicChildren,
      N,
      M,
      T,
      P,
      po(w, O),
      R
    ) : F || at(
      y,
      w,
      M,
      null,
      T,
      P,
      po(w, O),
      R,
      !1
    ), D > 0) {
      if (D & 16)
        z(
          M,
          w,
          $,
          k,
          T,
          P,
          O
        );
      else if (D & 2 && $.class !== k.class && s(M, "class", null, k.class, O), D & 4 && s(M, "style", $.style, k.style, O), D & 8) {
        const H = w.dynamicProps;
        for (let J = 0; J < H.length; J++) {
          const ht = H[J], Tt = $[ht], Ft = k[ht];
          (Ft !== Tt || ht === "value") && s(
            M,
            ht,
            Tt,
            Ft,
            O,
            y.children,
            T,
            P,
            te
          );
        }
      }
      D & 1 && y.children !== w.children && u(M, w.children);
    } else
      !F && N == null && z(
        M,
        w,
        $,
        k,
        T,
        P,
        O
      );
    ((E = k.onVnodeUpdated) || q) && re(() => {
      E && Oe(E, T, w, y), q && An(w, y, T, "updated");
    }, P);
  }, tt = (y, w, T, P, O, R, F) => {
    for (let M = 0; M < w.length; M++) {
      const D = y[M], N = w[M], q = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        D.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (D.type === Mt || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Oi(D, N) || // - In the case of a component, it could contain anything.
        D.shapeFlag & 70) ? f(D.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          T
        )
      );
      v(
        D,
        N,
        q,
        null,
        P,
        O,
        R,
        F,
        !0
      );
    }
  }, z = (y, w, T, P, O, R, F) => {
    if (T !== P) {
      if (T !== wt)
        for (const M in T)
          !Vr(M) && !(M in P) && s(
            y,
            M,
            T[M],
            null,
            F,
            w.children,
            O,
            R,
            te
          );
      for (const M in P) {
        if (Vr(M))
          continue;
        const D = P[M], N = T[M];
        D !== N && M !== "value" && s(
          y,
          M,
          N,
          D,
          F,
          w.children,
          O,
          R,
          te
        );
      }
      "value" in P && s(y, "value", T.value, P.value, F);
    }
  }, et = (y, w, T, P, O, R, F, M, D) => {
    const N = w.el = y ? y.el : a(""), q = w.anchor = y ? y.anchor : a("");
    let { patchFlag: $, dynamicChildren: k, slotScopeIds: E } = w;
    E && (M = M ? M.concat(E) : E), y == null ? (i(N, T, P), i(q, T, P), L(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      w.children || [],
      T,
      q,
      O,
      R,
      F,
      M,
      D
    )) : $ > 0 && $ & 64 && k && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    y.dynamicChildren ? (tt(
      y.dynamicChildren,
      k,
      T,
      O,
      R,
      F,
      M
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (w.key != null || O && w === O.subTree) && Qf(
      y,
      w,
      !0
      /* shallow */
    )) : at(
      y,
      w,
      T,
      q,
      O,
      R,
      F,
      M,
      D
    );
  }, B = (y, w, T, P, O, R, F, M, D) => {
    w.slotScopeIds = M, y == null ? w.shapeFlag & 512 ? O.ctx.activate(
      w,
      T,
      P,
      F,
      D
    ) : st(
      w,
      T,
      P,
      O,
      R,
      F,
      D
    ) : Kt(y, w, D);
  }, st = (y, w, T, P, O, R, F) => {
    const M = y.component = Ym(
      y,
      P,
      O
    );
    if (Ba(y) && (M.ctx.renderer = _e), Km(M), M.asyncDep) {
      if (O && O.registerDep(M, bt), !y.el) {
        const D = M.subTree = pt(Un);
        g(null, D, w, T);
      }
    } else
      bt(
        M,
        y,
        w,
        T,
        O,
        R,
        F
      );
  }, Kt = (y, w, T) => {
    const P = w.component = y.component;
    if (im(y, w, T))
      if (P.asyncDep && !P.asyncResolved) {
        lt(P, w, T);
        return;
      } else
        P.next = w, Yp(P.update), P.effect.dirty = !0, P.update();
    else
      w.el = y.el, P.vnode = w;
  }, bt = (y, w, T, P, O, R, F) => {
    const M = () => {
      if (y.isMounted) {
        let { next: q, bu: $, u: k, parent: E, vnode: H } = y;
        {
          const rn = Zf(y);
          if (rn) {
            q && (q.el = H.el, lt(y, q, F)), rn.asyncDep.then(() => {
              y.isUnmounted || M();
            });
            return;
          }
        }
        let J = q, ht;
        Cn(y, !1), q ? (q.el = H.el, lt(y, q, F)) : q = H, $ && Gr($), (ht = q.props && q.props.onVnodeBeforeUpdate) && Oe(ht, E, q, H), Cn(y, !0);
        const Tt = uo(y), Ft = y.subTree;
        y.subTree = Tt, v(
          Ft,
          Tt,
          // parent may have changed if it's in a teleport
          f(Ft.el),
          // anchor may have changed if it's in a fragment
          Ce(Ft),
          y,
          O,
          R
        ), q.el = Tt.el, J === null && rm(y, Tt.el), k && re(k, O), (ht = q.props && q.props.onVnodeUpdated) && re(
          () => Oe(ht, E, q, H),
          O
        );
      } else {
        let q;
        const { el: $, props: k } = w, { bm: E, m: H, parent: J } = y, ht = Yr(w);
        if (Cn(y, !1), E && Gr(E), !ht && (q = k && k.onVnodeBeforeMount) && Oe(q, J, w), Cn(y, !0), $ && Ci) {
          const Tt = () => {
            y.subTree = uo(y), Ci(
              $,
              y.subTree,
              y,
              O,
              null
            );
          };
          ht ? w.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !y.isUnmounted && Tt()
          ) : Tt();
        } else {
          const Tt = y.subTree = uo(y);
          v(
            null,
            Tt,
            T,
            P,
            y,
            O,
            R
          ), w.el = Tt.el;
        }
        if (H && re(H, O), !ht && (q = k && k.onVnodeMounted)) {
          const Tt = w;
          re(
            () => Oe(q, J, Tt),
            O
          );
        }
        (w.shapeFlag & 256 || J && Yr(J.vnode) && J.vnode.shapeFlag & 256) && y.a && re(y.a, O), y.isMounted = !0, w = T = P = null;
      }
    }, D = y.effect = new Ca(
      M,
      ye,
      () => $s(N),
      y.scope
      // track it in component's effect scope
    ), N = y.update = () => {
      D.dirty && D.run();
    };
    N.id = y.uid, Cn(y, !0), N();
  }, lt = (y, w, T) => {
    w.component = y;
    const P = y.vnode.props;
    y.vnode = w, y.next = null, Im(y, w.props, P, T), Rm(y, w.children, T), Yn(), Hl(y), Kn();
  }, at = (y, w, T, P, O, R, F, M, D = !1) => {
    const N = y && y.children, q = y ? y.shapeFlag : 0, $ = w.children, { patchFlag: k, shapeFlag: E } = w;
    if (k > 0) {
      if (k & 128) {
        qt(
          N,
          $,
          T,
          P,
          O,
          R,
          F,
          M,
          D
        );
        return;
      } else if (k & 256) {
        St(
          N,
          $,
          T,
          P,
          O,
          R,
          F,
          M,
          D
        );
        return;
      }
    }
    E & 8 ? (q & 16 && te(N, O, R), $ !== N && u(T, $)) : q & 16 ? E & 16 ? qt(
      N,
      $,
      T,
      P,
      O,
      R,
      F,
      M,
      D
    ) : te(N, O, R, !0) : (q & 8 && u(T, ""), E & 16 && L(
      $,
      T,
      P,
      O,
      R,
      F,
      M,
      D
    ));
  }, St = (y, w, T, P, O, R, F, M, D) => {
    y = y || oi, w = w || oi;
    const N = y.length, q = w.length, $ = Math.min(N, q);
    let k;
    for (k = 0; k < $; k++) {
      const E = w[k] = D ? un(w[k]) : Ie(w[k]);
      v(
        y[k],
        E,
        T,
        null,
        O,
        R,
        F,
        M,
        D
      );
    }
    N > q ? te(
      y,
      O,
      R,
      !0,
      !1,
      $
    ) : L(
      w,
      T,
      P,
      O,
      R,
      F,
      M,
      D,
      $
    );
  }, qt = (y, w, T, P, O, R, F, M, D) => {
    let N = 0;
    const q = w.length;
    let $ = y.length - 1, k = q - 1;
    for (; N <= $ && N <= k; ) {
      const E = y[N], H = w[N] = D ? un(w[N]) : Ie(w[N]);
      if (Oi(E, H))
        v(
          E,
          H,
          T,
          null,
          O,
          R,
          F,
          M,
          D
        );
      else
        break;
      N++;
    }
    for (; N <= $ && N <= k; ) {
      const E = y[$], H = w[k] = D ? un(w[k]) : Ie(w[k]);
      if (Oi(E, H))
        v(
          E,
          H,
          T,
          null,
          O,
          R,
          F,
          M,
          D
        );
      else
        break;
      $--, k--;
    }
    if (N > $) {
      if (N <= k) {
        const E = k + 1, H = E < q ? w[E].el : P;
        for (; N <= k; )
          v(
            null,
            w[N] = D ? un(w[N]) : Ie(w[N]),
            T,
            H,
            O,
            R,
            F,
            M,
            D
          ), N++;
      }
    } else if (N > k)
      for (; N <= $; )
        Ut(y[N], O, R, !0), N++;
    else {
      const E = N, H = N, J = /* @__PURE__ */ new Map();
      for (N = H; N <= k; N++) {
        const ce = w[N] = D ? un(w[N]) : Ie(w[N]);
        ce.key != null && J.set(ce.key, N);
      }
      let ht, Tt = 0;
      const Ft = k - H + 1;
      let rn = !1, ao = 0;
      const Pi = new Array(Ft);
      for (N = 0; N < Ft; N++)
        Pi[N] = 0;
      for (N = E; N <= $; N++) {
        const ce = y[N];
        if (Tt >= Ft) {
          Ut(ce, O, R, !0);
          continue;
        }
        let Pe;
        if (ce.key != null)
          Pe = J.get(ce.key);
        else
          for (ht = H; ht <= k; ht++)
            if (Pi[ht - H] === 0 && Oi(ce, w[ht])) {
              Pe = ht;
              break;
            }
        Pe === void 0 ? Ut(ce, O, R, !0) : (Pi[Pe - H] = N + 1, Pe >= ao ? ao = Pe : rn = !0, v(
          ce,
          w[Pe],
          T,
          null,
          O,
          R,
          F,
          M,
          D
        ), Tt++);
      }
      const Ll = rn ? $m(Pi) : oi;
      for (ht = Ll.length - 1, N = Ft - 1; N >= 0; N--) {
        const ce = H + N, Pe = w[ce], Ml = ce + 1 < q ? w[ce + 1].el : P;
        Pi[N] === 0 ? v(
          null,
          Pe,
          T,
          Ml,
          O,
          R,
          F,
          M,
          D
        ) : rn && (ht < 0 || N !== Ll[ht] ? Xt(Pe, T, Ml, 2) : ht--);
      }
    }
  }, Xt = (y, w, T, P, O = null) => {
    const { el: R, type: F, transition: M, children: D, shapeFlag: N } = y;
    if (N & 6) {
      Xt(y.component.subTree, w, T, P);
      return;
    }
    if (N & 128) {
      y.suspense.move(w, T, P);
      return;
    }
    if (N & 64) {
      F.move(y, w, T, _e);
      return;
    }
    if (F === Mt) {
      i(R, w, T);
      for (let $ = 0; $ < D.length; $++)
        Xt(D[$], w, T, P);
      i(y.anchor, w, T);
      return;
    }
    if (F === Kr) {
      x(y, w, T);
      return;
    }
    if (P !== 2 && N & 1 && M)
      if (P === 0)
        M.beforeEnter(R), i(R, w, T), re(() => M.enter(R), O);
      else {
        const { leave: $, delayLeave: k, afterLeave: E } = M, H = () => i(R, w, T), J = () => {
          $(R, () => {
            H(), E && E();
          });
        };
        k ? k(R, H, J) : J();
      }
    else
      i(R, w, T);
  }, Ut = (y, w, T, P = !1, O = !1) => {
    const {
      type: R,
      props: F,
      ref: M,
      children: D,
      dynamicChildren: N,
      shapeFlag: q,
      patchFlag: $,
      dirs: k
    } = y;
    if (M != null && $o(M, null, T, y, !0), q & 256) {
      w.ctx.deactivate(y);
      return;
    }
    const E = q & 1 && k, H = !Yr(y);
    let J;
    if (H && (J = F && F.onVnodeBeforeUnmount) && Oe(J, w, y), q & 6)
      le(y.component, T, P);
    else {
      if (q & 128) {
        y.suspense.unmount(T, P);
        return;
      }
      E && An(y, null, w, "beforeUnmount"), q & 64 ? y.type.remove(
        y,
        w,
        T,
        O,
        _e,
        P
      ) : N && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (R !== Mt || $ > 0 && $ & 64) ? te(
        N,
        w,
        T,
        !1,
        !0
      ) : (R === Mt && $ & 384 || !O && q & 16) && te(D, w, T), P && tn(y);
    }
    (H && (J = F && F.onVnodeUnmounted) || E) && re(() => {
      J && Oe(J, w, y), E && An(y, null, w, "unmounted");
    }, T);
  }, tn = (y) => {
    const { type: w, el: T, anchor: P, transition: O } = y;
    if (w === Mt) {
      Tn(T, P);
      return;
    }
    if (w === Kr) {
      S(y);
      return;
    }
    const R = () => {
      r(T), O && !O.persisted && O.afterLeave && O.afterLeave();
    };
    if (y.shapeFlag & 1 && O && !O.persisted) {
      const { leave: F, delayLeave: M } = O, D = () => F(T, R);
      M ? M(y.el, R, D) : D();
    } else
      R();
  }, Tn = (y, w) => {
    let T;
    for (; y !== w; )
      T = h(y), r(y), y = T;
    r(w);
  }, le = (y, w, T) => {
    const { bum: P, scope: O, update: R, subTree: F, um: M } = y;
    P && Gr(P), O.stop(), R && (R.active = !1, Ut(F, y, w, T)), M && re(M, w), re(() => {
      y.isUnmounted = !0;
    }, w), w && w.pendingBranch && !w.isUnmounted && y.asyncDep && !y.asyncResolved && y.suspenseId === w.pendingId && (w.deps--, w.deps === 0 && w.resolve());
  }, te = (y, w, T, P = !1, O = !1, R = 0) => {
    for (let F = R; F < y.length; F++)
      Ut(y[F], w, T, P, O);
  }, Ce = (y) => y.shapeFlag & 6 ? Ce(y.component.subTree) : y.shapeFlag & 128 ? y.suspense.next() : h(y.anchor || y.el);
  let Ue = !1;
  const en = (y, w, T) => {
    y == null ? w._vnode && Ut(w._vnode, null, null, !0) : v(
      w._vnode || null,
      y,
      w,
      null,
      null,
      null,
      T
    ), Ue || (Ue = !0, Hl(), Df(), Ue = !1), w._vnode = y;
  }, _e = {
    p: v,
    um: Ut,
    m: Xt,
    r: tn,
    mt: st,
    mc: L,
    pc: at,
    pbc: tt,
    n: Ce,
    o: t
  };
  let nn, Ci;
  return e && ([nn, Ci] = e(
    _e
  )), {
    render: en,
    hydrate: nn,
    createApp: Pm(en, nn)
  };
}
function po({ type: t, props: e }, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n;
}
function Cn({ effect: t, update: e }, n) {
  t.allowRecurse = e.allowRecurse = n;
}
function zm(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function Qf(t, e, n = !1) {
  const i = t.children, r = e.children;
  if (Z(i) && Z(r))
    for (let s = 0; s < i.length; s++) {
      const o = i[s];
      let a = r[s];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = r[s] = un(r[s]), a.el = o.el), n || Qf(o, a)), a.type === lr && (a.el = o.el);
    }
}
function $m(t) {
  const e = t.slice(), n = [0];
  let i, r, s, o, a;
  const l = t.length;
  for (i = 0; i < l; i++) {
    const c = t[i];
    if (c !== 0) {
      if (r = n[n.length - 1], t[r] < c) {
        e[i] = r, n.push(i);
        continue;
      }
      for (s = 0, o = n.length - 1; s < o; )
        a = s + o >> 1, t[n[a]] < c ? s = a + 1 : o = a;
      c < t[n[s]] && (s > 0 && (e[i] = n[s - 1]), n[s] = i);
    }
  }
  for (s = n.length, o = n[s - 1]; s-- > 0; )
    n[s] = o, o = e[o];
  return n;
}
function Zf(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : Zf(e);
}
const Bm = (t) => t.__isTeleport, Mt = Symbol.for("v-fgt"), lr = Symbol.for("v-txt"), Un = Symbol.for("v-cmt"), Kr = Symbol.for("v-stc"), qi = [];
let Se = null;
function Q(t = !1) {
  qi.push(Se = t ? null : []);
}
function qm() {
  qi.pop(), Se = qi[qi.length - 1] || null;
}
let Yi = 1;
function ec(t) {
  Yi += t;
}
function th(t) {
  return t.dynamicChildren = Yi > 0 ? Se || oi : null, qm(), Yi > 0 && Se && Se.push(t), t;
}
function nt(t, e, n, i, r, s) {
  return th(
    X(
      t,
      e,
      n,
      i,
      r,
      s,
      !0
    )
  );
}
function Ki(t, e, n, i, r) {
  return th(
    pt(
      t,
      e,
      n,
      i,
      r,
      !0
    )
  );
}
function Bo(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function Oi(t, e) {
  return t.type === e.type && t.key === e.key;
}
const Ws = "__vInternal", eh = ({ key: t }) => t ?? null, Xr = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? Lt(t) || Zt(t) || rt(t) ? { i: Qt, r: t, k: e, f: !!n } : t : null);
function X(t, e = null, n = null, i = 0, r = null, s = t === Mt ? 0 : 1, o = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && eh(e),
    ref: e && Xr(e),
    scopeId: qs,
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
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: i,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Qt
  };
  return a ? (Va(l, n), s & 128 && t.normalize(l)) : n && (l.shapeFlag |= Lt(n) ? 8 : 16), Yi > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Se && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Se.push(l), l;
}
const pt = Um;
function Um(t, e = null, n = null, i = 0, r = null, s = !1) {
  if ((!t || t === $f) && (t = Un), Bo(t)) {
    const a = pi(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && Va(a, n), Yi > 0 && !s && Se && (a.shapeFlag & 6 ? Se[Se.indexOf(t)] = a : Se.push(a)), a.patchFlag |= -2, a;
  }
  if (tg(t) && (t = t.__vccOpts), e) {
    e = Wm(e);
    let { class: a, style: l } = e;
    a && !Lt(a) && (e.class = qn(a)), _t(l) && (Cf(l) && !Z(l) && (l = Vt({}, l)), e.style = Ht(l));
  }
  const o = Lt(t) ? 1 : om(t) ? 128 : Bm(t) ? 64 : _t(t) ? 4 : rt(t) ? 2 : 0;
  return X(
    t,
    e,
    n,
    i,
    r,
    o,
    s,
    !0
  );
}
function Wm(t) {
  return t ? Cf(t) || Ws in t ? Vt({}, t) : t : null;
}
function pi(t, e, n = !1) {
  const { props: i, ref: r, patchFlag: s, children: o } = t, a = e ? Vm(i || {}, e) : i;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: a,
    key: a && eh(a),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? Z(r) ? r.concat(Xr(e)) : [r, Xr(e)] : Xr(e)
    ) : r,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: o,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== Mt ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && pi(t.ssContent),
    ssFallback: t.ssFallback && pi(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
}
function Zn(t = " ", e = 0) {
  return pt(lr, null, t, e);
}
function Hm(t, e) {
  const n = pt(Kr, null, t);
  return n.staticCount = e, n;
}
function yt(t = "", e = !1) {
  return e ? (Q(), Ki(Un, null, t)) : pt(Un, null, t);
}
function Ie(t) {
  return t == null || typeof t == "boolean" ? pt(Un) : Z(t) ? pt(
    Mt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : typeof t == "object" ? un(t) : pt(lr, null, String(t));
}
function un(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : pi(t);
}
function Va(t, e) {
  let n = 0;
  const { shapeFlag: i } = t;
  if (e == null)
    e = null;
  else if (Z(e))
    n = 16;
  else if (typeof e == "object")
    if (i & 65) {
      const r = e.default;
      r && (r._c && (r._d = !1), Va(t, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = e._;
      !r && !(Ws in e) ? e._ctx = Qt : r === 3 && Qt && (Qt.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else
    rt(e) ? (e = { default: e, _ctx: Qt }, n = 32) : (e = String(e), i & 64 ? (n = 16, e = [Zn(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function Vm(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    for (const r in i)
      if (r === "class")
        e.class !== i.class && (e.class = qn([e.class, i.class]));
      else if (r === "style")
        e.style = Ht([e.style, i.style]);
      else if (Ms(r)) {
        const s = e[r], o = i[r];
        o && s !== o && !(Z(s) && s.includes(o)) && (e[r] = s ? [].concat(s, o) : o);
      } else
        r !== "" && (e[r] = i[r]);
  }
  return e;
}
function Oe(t, e, n, i = null) {
  Te(t, e, 7, [
    n,
    i
  ]);
}
const Gm = Gf();
let jm = 0;
function Ym(t, e, n) {
  const i = t.type, r = (e ? e.appContext : t.appContext) || Gm, s = {
    uid: jm++,
    vnode: t,
    type: i,
    parent: e,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new pf(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Yf(i, r),
    emitsOptions: zf(i, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: wt,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: wt,
    data: wt,
    props: wt,
    attrs: wt,
    slots: wt,
    refs: wt,
    setupState: wt,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
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
  return s.ctx = { _: s }, s.root = e ? e.root : s, s.emit = Jp.bind(null, s), t.ce && t.ce(s), s;
}
let $t = null;
const Hs = () => $t || Qt;
let hs, qo;
{
  const t = ff(), e = (n, i) => {
    let r;
    return (r = t[n]) || (r = t[n] = []), r.push(i), (s) => {
      r.length > 1 ? r.forEach((o) => o(s)) : r[0](s);
    };
  };
  hs = e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => $t = n
  ), qo = e(
    "__VUE_SSR_SETTERS__",
    (n) => ur = n
  );
}
const cr = (t) => {
  const e = $t;
  return hs(t), t.scope.on(), () => {
    t.scope.off(), hs(e);
  };
}, nc = () => {
  $t && $t.scope.off(), hs(null);
};
function nh(t) {
  return t.vnode.shapeFlag & 4;
}
let ur = !1;
function Km(t, e = !1) {
  e && qo(e);
  const { props: n, children: i } = t.vnode, r = nh(t);
  Nm(t, n, r, e), Mm(t, i);
  const s = r ? Xm(t, e) : void 0;
  return e && qo(!1), s;
}
function Xm(t, e) {
  const n = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = Da(new Proxy(t.ctx, xm));
  const { setup: i } = n;
  if (i) {
    const r = t.setupContext = i.length > 1 ? Qm(t) : null, s = cr(t);
    Yn();
    const o = mn(
      i,
      t,
      0,
      [
        t.props,
        r
      ]
    );
    if (Kn(), s(), lf(o)) {
      if (o.then(nc, nc), e)
        return o.then((a) => {
          ic(t, a, e);
        }).catch((a) => {
          ar(a, t, 0);
        });
      t.asyncDep = o;
    } else
      ic(t, o, e);
  } else
    ih(t, e);
}
function ic(t, e, n) {
  rt(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : _t(e) && (t.setupState = Lf(e)), ih(t, n);
}
let rc;
function ih(t, e, n) {
  const i = t.type;
  if (!t.render) {
    if (!e && rc && !i.render) {
      const r = i.template || Wa(t).template;
      if (r) {
        const { isCustomElement: s, compilerOptions: o } = t.appContext.config, { delimiters: a, compilerOptions: l } = i, c = Vt(
          Vt(
            {
              isCustomElement: s,
              delimiters: a
            },
            o
          ),
          l
        );
        i.render = rc(r, c);
      }
    }
    t.render = i.render || ye;
  }
  {
    const r = cr(t);
    Yn();
    try {
      km(t);
    } finally {
      Kn(), r();
    }
  }
}
function Jm(t) {
  return t.attrsProxy || (t.attrsProxy = new Proxy(
    t.attrs,
    {
      get(e, n) {
        return oe(t, "get", "$attrs"), e[n];
      }
    }
  ));
}
function Qm(t) {
  const e = (n) => {
    t.exposed = n || {};
  };
  return {
    get attrs() {
      return Jm(t);
    },
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function Vs(t) {
  if (t.exposed)
    return t.exposeProxy || (t.exposeProxy = new Proxy(Lf(Da(t.exposed)), {
      get(e, n) {
        if (n in e)
          return e[n];
        if (n in $i)
          return $i[n](t);
      },
      has(e, n) {
        return n in e || n in $i;
      }
    }));
}
function Zm(t, e = !0) {
  return rt(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function tg(t) {
  return rt(t) && "__vccOpts" in t;
}
const pe = (t, e) => Wp(t, e, ur);
function Ga(t, e, n) {
  const i = arguments.length;
  return i === 2 ? _t(e) && !Z(e) ? Bo(e) ? pt(t, null, [e]) : pt(t, e) : pt(t, null, e) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && Bo(n) && (n = [n]), pt(t, e, n));
}
const eg = "3.4.15";
/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const ng = "http://www.w3.org/2000/svg", ig = "http://www.w3.org/1998/Math/MathML", fn = typeof document < "u" ? document : null, sc = fn && /* @__PURE__ */ fn.createElement("template"), rg = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, i) => {
    const r = e === "svg" ? fn.createElementNS(ng, t) : e === "mathml" ? fn.createElementNS(ig, t) : fn.createElement(t, n ? { is: n } : void 0);
    return t === "select" && i && i.multiple != null && r.setAttribute("multiple", i.multiple), r;
  },
  createText: (t) => fn.createTextNode(t),
  createComment: (t) => fn.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => fn.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(t, e, n, i, r, s) {
    const o = n ? n.previousSibling : e.lastChild;
    if (r && (r === s || r.nextSibling))
      for (; e.insertBefore(r.cloneNode(!0), n), !(r === s || !(r = r.nextSibling)); )
        ;
    else {
      sc.innerHTML = i === "svg" ? `<svg>${t}</svg>` : i === "mathml" ? `<math>${t}</math>` : t;
      const a = sc.content;
      if (i === "svg" || i === "mathml") {
        const l = a.firstChild;
        for (; l.firstChild; )
          a.appendChild(l.firstChild);
        a.removeChild(l);
      }
      e.insertBefore(a, n);
    }
    return [
      // first
      o ? o.nextSibling : e.firstChild,
      // last
      n ? n.previousSibling : e.lastChild
    ];
  }
}, sg = Symbol("_vtc");
function og(t, e, n) {
  const i = t[sg];
  i && (e = (e ? [e, ...i] : [...i]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
const ja = Symbol("_vod"), rh = {
  beforeMount(t, { value: e }, { transition: n }) {
    t[ja] = t.style.display === "none" ? "" : t.style.display, n && e ? n.beforeEnter(t) : Ni(t, e);
  },
  mounted(t, { value: e }, { transition: n }) {
    n && e && n.enter(t);
  },
  updated(t, { value: e, oldValue: n }, { transition: i }) {
    !e != !n && (i ? e ? (i.beforeEnter(t), Ni(t, !0), i.enter(t)) : i.leave(t, () => {
      Ni(t, !1);
    }) : Ni(t, e));
  },
  beforeUnmount(t, { value: e }) {
    Ni(t, e);
  }
};
function Ni(t, e) {
  t.style.display = e ? t[ja] : "none";
}
const ag = Symbol("");
function lg(t, e, n) {
  const i = t.style, r = i.display, s = Lt(n);
  if (n && !s) {
    if (e && !Lt(e))
      for (const o in e)
        n[o] == null && Uo(i, o, "");
    for (const o in n)
      Uo(i, o, n[o]);
  } else if (s) {
    if (e !== n) {
      const o = i[ag];
      o && (n += ";" + o), i.cssText = n;
    }
  } else
    e && t.removeAttribute("style");
  ja in t && (i.display = r);
}
const oc = /\s*!important$/;
function Uo(t, e, n) {
  if (Z(n))
    n.forEach((i) => Uo(t, e, i));
  else if (n == null && (n = ""), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const i = cg(t, e);
    oc.test(n) ? t.setProperty(
      xi(i),
      n.replace(oc, ""),
      "important"
    ) : t[i] = n;
  }
}
const ac = ["Webkit", "Moz", "ms"], mo = {};
function cg(t, e) {
  const n = mo[e];
  if (n)
    return n;
  let i = Be(e);
  if (i !== "filter" && i in t)
    return mo[e] = i;
  i = Ds(i);
  for (let r = 0; r < ac.length; r++) {
    const s = ac[r] + i;
    if (s in t)
      return mo[e] = s;
  }
  return e;
}
const lc = "http://www.w3.org/1999/xlink";
function ug(t, e, n, i, r) {
  if (i && e.startsWith("xlink:"))
    n == null ? t.removeAttributeNS(lc, e.slice(6, e.length)) : t.setAttributeNS(lc, e, n);
  else {
    const s = bp(e);
    n == null || s && !hf(n) ? t.removeAttribute(e) : t.setAttribute(e, s ? "" : n);
  }
}
function fg(t, e, n, i, r, s, o) {
  if (e === "innerHTML" || e === "textContent") {
    i && o(i, r, s), t[e] = n ?? "";
    return;
  }
  const a = t.tagName;
  if (e === "value" && a !== "PROGRESS" && // custom elements may use _value internally
  !a.includes("-")) {
    t._value = n;
    const c = a === "OPTION" ? t.getAttribute("value") : t.value, u = n ?? "";
    c !== u && (t.value = u), n == null && t.removeAttribute(e);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const c = typeof t[e];
    c === "boolean" ? n = hf(n) : n == null && c === "string" ? (n = "", l = !0) : c === "number" && (n = 0, l = !0);
  }
  try {
    t[e] = n;
  } catch {
  }
  l && t.removeAttribute(e);
}
function He(t, e, n, i) {
  t.addEventListener(e, n, i);
}
function hg(t, e, n, i) {
  t.removeEventListener(e, n, i);
}
const cc = Symbol("_vei");
function dg(t, e, n, i, r = null) {
  const s = t[cc] || (t[cc] = {}), o = s[e];
  if (i && o)
    o.value = i;
  else {
    const [a, l] = pg(e);
    if (i) {
      const c = s[e] = yg(i, r);
      He(t, a, c, l);
    } else
      o && (hg(t, a, o, l), s[e] = void 0);
  }
}
const uc = /(?:Once|Passive|Capture)$/;
function pg(t) {
  let e;
  if (uc.test(t)) {
    e = {};
    let i;
    for (; i = t.match(uc); )
      t = t.slice(0, t.length - i[0].length), e[i[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : xi(t.slice(2)), e];
}
let go = 0;
const mg = /* @__PURE__ */ Promise.resolve(), gg = () => go || (mg.then(() => go = 0), go = Date.now());
function yg(t, e) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    Te(
      bg(i, n.value),
      e,
      5,
      [i]
    );
  };
  return n.value = t, n.attached = gg(), n;
}
function bg(t, e) {
  if (Z(e)) {
    const n = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      n.call(t), t._stopped = !0;
    }, e.map((i) => (r) => !r._stopped && i && i(r));
  } else
    return e;
}
const fc = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, vg = (t, e, n, i, r, s, o, a, l) => {
  const c = r === "svg";
  e === "class" ? og(t, i, c) : e === "style" ? lg(t, n, i) : Ms(e) ? Sa(e) || dg(t, e, n, i, o) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : _g(t, e, i, c)) ? fg(
    t,
    e,
    i,
    s,
    o,
    a,
    l
  ) : (e === "true-value" ? t._trueValue = i : e === "false-value" && (t._falseValue = i), ug(t, e, i, c));
};
function _g(t, e, n, i) {
  if (i)
    return !!(e === "innerHTML" || e === "textContent" || e in t && fc(e) && rt(n));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const r = t.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return fc(e) && Lt(n) ? !1 : e in t;
}
const _n = (t) => {
  const e = t.props["onUpdate:modelValue"] || !1;
  return Z(e) ? (n) => Gr(e, n) : e;
};
function wg(t) {
  t.target.composing = !0;
}
function hc(t) {
  const e = t.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
const be = Symbol("_assign"), ds = {
  created(t, { modifiers: { lazy: e, trim: n, number: i } }, r) {
    t[be] = _n(r);
    const s = i || r.props && r.props.type === "number";
    He(t, e ? "change" : "input", (o) => {
      if (o.target.composing)
        return;
      let a = t.value;
      n && (a = a.trim()), s && (a = Hi(a)), t[be](a);
    }), n && He(t, "change", () => {
      t.value = t.value.trim();
    }), e || (He(t, "compositionstart", wg), He(t, "compositionend", hc), He(t, "change", hc));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(t, { value: e }) {
    t.value = e ?? "";
  },
  beforeUpdate(t, { value: e, modifiers: { lazy: n, trim: i, number: r } }, s) {
    if (t[be] = _n(s), t.composing)
      return;
    const o = r || t.type === "number" ? Hi(t.value) : t.value, a = e ?? "";
    o !== a && (document.activeElement === t && t.type !== "range" && (n || i && t.value.trim() === a) || (t.value = a));
  }
}, xg = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(t, e, n) {
    t[be] = _n(n), He(t, "change", () => {
      const i = t._modelValue, r = mi(t), s = t.checked, o = t[be];
      if (Z(i)) {
        const a = Aa(i, r), l = a !== -1;
        if (s && !l)
          o(i.concat(r));
        else if (!s && l) {
          const c = [...i];
          c.splice(a, 1), o(c);
        }
      } else if (wi(i)) {
        const a = new Set(i);
        s ? a.add(r) : a.delete(r), o(a);
      } else
        o(sh(t, s));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: dc,
  beforeUpdate(t, e, n) {
    t[be] = _n(n), dc(t, e, n);
  }
};
function dc(t, { value: e, oldValue: n }, i) {
  t._modelValue = e, Z(e) ? t.checked = Aa(e, i.props.value) > -1 : wi(e) ? t.checked = e.has(i.props.value) : e !== n && (t.checked = vn(e, sh(t, !0)));
}
const kg = {
  created(t, { value: e }, n) {
    t.checked = vn(e, n.props.value), t[be] = _n(n), He(t, "change", () => {
      t[be](mi(t));
    });
  },
  beforeUpdate(t, { value: e, oldValue: n }, i) {
    t[be] = _n(i), e !== n && (t.checked = vn(e, i.props.value));
  }
}, ti = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(t, { value: e, modifiers: { number: n } }, i) {
    const r = wi(e);
    He(t, "change", () => {
      const s = Array.prototype.filter.call(t.options, (o) => o.selected).map(
        (o) => n ? Hi(mi(o)) : mi(o)
      );
      t[be](
        t.multiple ? r ? new Set(s) : s : s[0]
      ), t._assigning = !0, zs(() => {
        t._assigning = !1;
      });
    }), t[be] = _n(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(t, { value: e, oldValue: n, modifiers: { number: i } }) {
    pc(t, e, n, i);
  },
  beforeUpdate(t, e, n) {
    t[be] = _n(n);
  },
  updated(t, { value: e, oldValue: n, modifiers: { number: i } }) {
    t._assigning || pc(t, e, n, i);
  }
};
function pc(t, e, n, i) {
  const r = t.multiple, s = Z(e);
  if (!(r && !s && !wi(e)) && !(s && vn(e, n))) {
    for (let o = 0, a = t.options.length; o < a; o++) {
      const l = t.options[o], c = mi(l);
      if (r)
        if (s) {
          const u = typeof c;
          u === "string" || u === "number" ? l.selected = e.includes(
            i ? Hi(c) : c
          ) : l.selected = Aa(e, c) > -1;
        } else
          l.selected = e.has(c);
      else if (vn(mi(l), e)) {
        t.selectedIndex !== o && (t.selectedIndex = o);
        return;
      }
    }
    !r && t.selectedIndex !== -1 && (t.selectedIndex = -1);
  }
}
function mi(t) {
  return "_value" in t ? t._value : t.value;
}
function sh(t, e) {
  const n = e ? "_trueValue" : "_falseValue";
  return n in t ? t[n] : e;
}
const mc = {
  created(t, e, n) {
    kr(t, e, n, null, "created");
  },
  mounted(t, e, n) {
    kr(t, e, n, null, "mounted");
  },
  beforeUpdate(t, e, n, i) {
    kr(t, e, n, i, "beforeUpdate");
  },
  updated(t, e, n, i) {
    kr(t, e, n, i, "updated");
  }
};
function Sg(t, e) {
  switch (t) {
    case "SELECT":
      return ti;
    case "TEXTAREA":
      return ds;
    default:
      switch (e) {
        case "checkbox":
          return xg;
        case "radio":
          return kg;
        default:
          return ds;
      }
  }
}
function kr(t, e, n, i, r) {
  const o = Sg(
    t.tagName,
    n.props && n.props.type
  )[r];
  o && o(t, e, n, i);
}
const Eg = /* @__PURE__ */ Vt({ patchProp: vg }, rg);
let gc;
function Tg() {
  return gc || (gc = Dm(Eg));
}
const Ag = (...t) => {
  const e = Tg().createApp(...t), { mount: n } = e;
  return e.mount = (i) => {
    const r = Pg(i);
    if (!r)
      return;
    const s = e._component;
    !rt(s) && !s.render && !s.template && (s.template = r.innerHTML), r.innerHTML = "";
    const o = n(r, !1, Cg(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, e;
};
function Cg(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function Pg(t) {
  return Lt(t) ? document.querySelector(t) : t;
}
/*!
 * shared v9.9.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
const ps = typeof window < "u", Sn = (t, e = !1) => e ? Symbol.for(t) : Symbol(t), Og = (t, e, n) => Ng({ l: t, k: e, s: n }), Ng = (t) => JSON.stringify(t).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Bt = (t) => typeof t == "number" && isFinite(t), Ig = (t) => ah(t) === "[object Date]", ms = (t) => ah(t) === "[object RegExp]", Gs = (t) => ut(t) && Object.keys(t).length === 0, Yt = Object.assign;
let yc;
const Ya = () => yc || (yc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function bc(t) {
  return t.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const Lg = Object.prototype.hasOwnProperty;
function gs(t, e) {
  return Lg.call(t, e);
}
const Rt = Array.isArray, Pt = (t) => typeof t == "function", Y = (t) => typeof t == "string", Ot = (t) => typeof t == "boolean", mt = (t) => t !== null && typeof t == "object", Mg = (t) => mt(t) && Pt(t.then) && Pt(t.catch), oh = Object.prototype.toString, ah = (t) => oh.call(t), ut = (t) => {
  if (!mt(t))
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e.constructor === Object;
}, Rg = (t) => t == null ? "" : Rt(t) || ut(t) && t.toString === oh ? JSON.stringify(t, null, 2) : String(t);
function Dg(t, e = "") {
  return t.reduce((n, i, r) => r === 0 ? n + i : n + e + i, "");
}
function Ka(t) {
  let e = t;
  return () => ++e;
}
function Fg(t, e) {
  typeof console < "u" && (console.warn("[intlify] " + t), e && console.warn(e.stack));
}
const Sr = (t) => !mt(t) || Rt(t);
function Jr(t, e) {
  if (Sr(t) || Sr(e))
    throw new Error("Invalid value");
  const n = [{ src: t, des: e }];
  for (; n.length; ) {
    const { src: i, des: r } = n.pop();
    Object.keys(i).forEach((s) => {
      Sr(i[s]) || Sr(r[s]) ? r[s] = i[s] : n.push({ src: i[s], des: r[s] });
    });
  }
}
/*!
 * message-compiler v9.9.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
const zg = /\{([0-9a-zA-Z]+)\}/g;
function $g(t, ...e) {
  return e.length === 1 && Bg(e[0]) && (e = e[0]), (!e || !e.hasOwnProperty) && (e = {}), t.replace(zg, (n, i) => e.hasOwnProperty(i) ? e[i] : "");
}
const Bg = (t) => t !== null && typeof t == "object", Wt = {
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
}, qg = {
  // tokenizer error messages
  [Wt.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [Wt.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [Wt.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [Wt.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [Wt.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [Wt.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [Wt.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [Wt.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [Wt.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [Wt.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [Wt.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [Wt.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [Wt.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [Wt.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [Wt.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [Wt.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function lh(t, e, n = {}) {
  const { domain: i, messages: r, args: s } = n, o = $g((r || qg)[t] || "", ...s || []), a = new SyntaxError(String(o));
  return a.code = t, e && (a.location = e), a.domain = i, a;
}
/*!
 * core-base v9.9.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
function Ug() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Ya().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const En = [];
En[
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
En[
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
En[
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
En[
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
En[
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
En[
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
En[
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
const Wg = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Hg(t) {
  return Wg.test(t);
}
function Vg(t) {
  const e = t.charCodeAt(0), n = t.charCodeAt(t.length - 1);
  return e === n && (e === 34 || e === 39) ? t.slice(1, -1) : t;
}
function Gg(t) {
  if (t == null)
    return "o";
  switch (t.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return t;
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
function jg(t) {
  const e = t.trim();
  return t.charAt(0) === "0" && isNaN(parseInt(t)) ? !1 : Hg(e) ? Vg(e) : "*" + e;
}
function Yg(t) {
  const e = [];
  let n = -1, i = 0, r = 0, s, o, a, l, c, u, f;
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
    o !== void 0 && (e.push(o), o = void 0);
  }, h[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    h[
      0
      /* Actions.APPEND */
    ](), r++;
  }, h[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (r > 0)
      r--, i = 4, h[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (r = 0, o === void 0 || (o = jg(o), o === !1))
        return !1;
      h[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function d() {
    const m = t[n + 1];
    if (i === 5 && m === "'" || i === 6 && m === '"')
      return n++, a = "\\" + m, h[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; i !== null; )
    if (n++, s = t[n], !(s === "\\" && d())) {
      if (l = Gg(s), f = En[i], c = f[l] || f.l || 8, c === 8 || (i = c[0], c[1] !== void 0 && (u = h[c[1]], u && (a = s, u() === !1))))
        return;
      if (i === 7)
        return e;
    }
}
const vc = /* @__PURE__ */ new Map();
function Kg(t, e) {
  return mt(t) ? t[e] : null;
}
function Xg(t, e) {
  if (!mt(t))
    return null;
  let n = vc.get(e);
  if (n || (n = Yg(e), n && vc.set(e, n)), !n)
    return null;
  const i = n.length;
  let r = t, s = 0;
  for (; s < i; ) {
    const o = r[n[s]];
    if (o === void 0 || Pt(r))
      return null;
    r = o, s++;
  }
  return r;
}
const Jg = (t) => t, Qg = (t) => "", Zg = "text", ty = (t) => t.length === 0 ? "" : Dg(t), ey = Rg;
function _c(t, e) {
  return t = Math.abs(t), e === 2 ? t ? t > 1 ? 1 : 0 : 1 : t ? Math.min(t, 2) : 0;
}
function ny(t) {
  const e = Bt(t.pluralIndex) ? t.pluralIndex : -1;
  return t.named && (Bt(t.named.count) || Bt(t.named.n)) ? Bt(t.named.count) ? t.named.count : Bt(t.named.n) ? t.named.n : e : e;
}
function iy(t, e) {
  e.count || (e.count = t), e.n || (e.n = t);
}
function ry(t = {}) {
  const e = t.locale, n = ny(t), i = mt(t.pluralRules) && Y(e) && Pt(t.pluralRules[e]) ? t.pluralRules[e] : _c, r = mt(t.pluralRules) && Y(e) && Pt(t.pluralRules[e]) ? _c : void 0, s = (g) => g[i(n, g.length, r)], o = t.list || [], a = (g) => o[g], l = t.named || {};
  Bt(t.pluralIndex) && iy(n, l);
  const c = (g) => l[g];
  function u(g) {
    const b = Pt(t.messages) ? t.messages(g) : mt(t.messages) ? t.messages[g] : !1;
    return b || (t.parent ? t.parent.message(g) : Qg);
  }
  const f = (g) => t.modifiers ? t.modifiers[g] : Jg, h = ut(t.processor) && Pt(t.processor.normalize) ? t.processor.normalize : ty, d = ut(t.processor) && Pt(t.processor.interpolate) ? t.processor.interpolate : ey, m = ut(t.processor) && Y(t.processor.type) ? t.processor.type : Zg, _ = {
    list: a,
    named: c,
    plural: s,
    linked: (g, ...b) => {
      const [x, S] = b;
      let C = "text", I = "";
      b.length === 1 ? mt(x) ? (I = x.modifier || I, C = x.type || C) : Y(x) && (I = x || I) : b.length === 2 && (Y(x) && (I = x || I), Y(S) && (C = S || C));
      const G = u(g)(_), L = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        C === "vnode" && Rt(G) && I ? G[0] : G
      );
      return I ? f(I)(L, C) : L;
    },
    message: u,
    type: m,
    interpolate: d,
    normalize: h,
    values: Yt({}, o, l)
  };
  return _;
}
let Xi = null;
function sy(t) {
  Xi = t;
}
function oy(t, e, n) {
  Xi && Xi.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: t,
    version: e,
    meta: n
  });
}
const ay = /* @__PURE__ */ ly(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function ly(t) {
  return (e) => Xi && Xi.emit(t, e);
}
const cy = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
  __EXTEND_POINT__: 8
}, ch = Wt.__EXTEND_POINT__, Pn = Ka(ch), Re = {
  INVALID_ARGUMENT: ch,
  INVALID_DATE_ARGUMENT: Pn(),
  INVALID_ISO_DATE_ARGUMENT: Pn(),
  NOT_SUPPORT_NON_STRING_MESSAGE: Pn(),
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: Pn(),
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: Pn(),
  NOT_SUPPORT_LOCALE_TYPE: Pn(),
  __EXTEND_POINT__: Pn()
  // 25
};
function Ge(t) {
  return lh(t, null, void 0);
}
function Xa(t, e) {
  return e.locale != null ? wc(e.locale) : wc(t.locale);
}
let yo;
function wc(t) {
  if (Y(t))
    return t;
  if (Pt(t)) {
    if (t.resolvedOnce && yo != null)
      return yo;
    if (t.constructor.name === "Function") {
      const e = t();
      if (Mg(e))
        throw Ge(Re.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return yo = e;
    } else
      throw Ge(Re.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Ge(Re.NOT_SUPPORT_LOCALE_TYPE);
}
function uy(t, e, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Rt(e) ? e : mt(e) ? Object.keys(e) : Y(e) ? [e] : [n]
  ])];
}
function uh(t, e, n) {
  const i = Y(n) ? n : ys, r = t;
  r.__localeChainCache || (r.__localeChainCache = /* @__PURE__ */ new Map());
  let s = r.__localeChainCache.get(i);
  if (!s) {
    s = [];
    let o = [n];
    for (; Rt(o); )
      o = xc(s, o, e);
    const a = Rt(e) || !ut(e) ? e : e.default ? e.default : null;
    o = Y(a) ? [a] : a, Rt(o) && xc(s, o, !1), r.__localeChainCache.set(i, s);
  }
  return s;
}
function xc(t, e, n) {
  let i = !0;
  for (let r = 0; r < e.length && Ot(i); r++) {
    const s = e[r];
    Y(s) && (i = fy(t, e[r], n));
  }
  return i;
}
function fy(t, e, n) {
  let i;
  const r = e.split("-");
  do {
    const s = r.join("-");
    i = hy(t, s, n), r.splice(-1, 1);
  } while (r.length && i === !0);
  return i;
}
function hy(t, e, n) {
  let i = !1;
  if (!t.includes(e) && (i = !0, e)) {
    i = e[e.length - 1] !== "!";
    const r = e.replace(/!/g, "");
    t.push(r), (Rt(n) || ut(n)) && n[r] && (i = n[r]);
  }
  return i;
}
const dy = "9.9.1", js = -1, ys = "en-US", kc = "", Sc = (t) => `${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;
function py() {
  return {
    upper: (t, e) => e === "text" && Y(t) ? t.toUpperCase() : e === "vnode" && mt(t) && "__v_isVNode" in t ? t.children.toUpperCase() : t,
    lower: (t, e) => e === "text" && Y(t) ? t.toLowerCase() : e === "vnode" && mt(t) && "__v_isVNode" in t ? t.children.toLowerCase() : t,
    capitalize: (t, e) => e === "text" && Y(t) ? Sc(t) : e === "vnode" && mt(t) && "__v_isVNode" in t ? Sc(t.children) : t
  };
}
let my, fh;
function gy(t) {
  fh = t;
}
let hh;
function yy(t) {
  hh = t;
}
let dh = null;
const by = /* @__NO_SIDE_EFFECTS__ */ (t) => {
  dh = t;
}, vy = /* @__NO_SIDE_EFFECTS__ */ () => dh;
let ph = null;
const Ec = (t) => {
  ph = t;
}, _y = () => ph;
let Tc = 0;
function wy(t = {}) {
  const e = Pt(t.onWarn) ? t.onWarn : Fg, n = Y(t.version) ? t.version : dy, i = Y(t.locale) || Pt(t.locale) ? t.locale : ys, r = Pt(i) ? ys : i, s = Rt(t.fallbackLocale) || ut(t.fallbackLocale) || Y(t.fallbackLocale) || t.fallbackLocale === !1 ? t.fallbackLocale : r, o = ut(t.messages) ? t.messages : { [r]: {} }, a = ut(t.datetimeFormats) ? t.datetimeFormats : { [r]: {} }, l = ut(t.numberFormats) ? t.numberFormats : { [r]: {} }, c = Yt({}, t.modifiers || {}, py()), u = t.pluralRules || {}, f = Pt(t.missing) ? t.missing : null, h = Ot(t.missingWarn) || ms(t.missingWarn) ? t.missingWarn : !0, d = Ot(t.fallbackWarn) || ms(t.fallbackWarn) ? t.fallbackWarn : !0, m = !!t.fallbackFormat, v = !!t.unresolving, _ = Pt(t.postTranslation) ? t.postTranslation : null, g = ut(t.processor) ? t.processor : null, b = Ot(t.warnHtmlMessage) ? t.warnHtmlMessage : !0, x = !!t.escapeParameter, S = Pt(t.messageCompiler) ? t.messageCompiler : my, C = Pt(t.messageResolver) ? t.messageResolver : fh || Kg, I = Pt(t.localeFallbacker) ? t.localeFallbacker : hh || uy, G = mt(t.fallbackContext) ? t.fallbackContext : void 0, L = t, j = mt(L.__datetimeFormatters) ? L.__datetimeFormatters : /* @__PURE__ */ new Map(), tt = mt(L.__numberFormatters) ? L.__numberFormatters : /* @__PURE__ */ new Map(), z = mt(L.__meta) ? L.__meta : {};
  Tc++;
  const et = {
    version: n,
    cid: Tc,
    locale: i,
    fallbackLocale: s,
    messages: o,
    modifiers: c,
    pluralRules: u,
    missing: f,
    missingWarn: h,
    fallbackWarn: d,
    fallbackFormat: m,
    unresolving: v,
    postTranslation: _,
    processor: g,
    warnHtmlMessage: b,
    escapeParameter: x,
    messageCompiler: S,
    messageResolver: C,
    localeFallbacker: I,
    fallbackContext: G,
    onWarn: e,
    __meta: z
  };
  return et.datetimeFormats = a, et.numberFormats = l, et.__datetimeFormatters = j, et.__numberFormatters = tt, __INTLIFY_PROD_DEVTOOLS__ && oy(et, n, z), et;
}
function Ja(t, e, n, i, r) {
  const { missing: s, onWarn: o } = t;
  if (s !== null) {
    const a = s(t, n, e, r);
    return Y(a) ? a : e;
  } else
    return e;
}
function Ii(t, e, n) {
  const i = t;
  i.__localeChainCache = /* @__PURE__ */ new Map(), t.localeFallbacker(t, n, e);
}
const gi = (t) => mt(t) && (t.t === 0 || t.type === 0) && ("b" in t || "body" in t), Ac = () => "", me = (t) => Pt(t);
function Cc(t, ...e) {
  const { fallbackFormat: n, postTranslation: i, unresolving: r, messageCompiler: s, fallbackLocale: o, messages: a } = t, [l, c] = Wo(...e), u = Ot(c.missingWarn) ? c.missingWarn : t.missingWarn, f = Ot(c.fallbackWarn) ? c.fallbackWarn : t.fallbackWarn, h = Ot(c.escapeParameter) ? c.escapeParameter : t.escapeParameter, d = !!c.resolvedMessage, m = Y(c.default) || Ot(c.default) ? Ot(c.default) ? s ? l : () => l : c.default : n ? s ? l : () => l : "", v = n || m !== "", _ = Xa(t, c);
  h && xy(c);
  let [g, b, x] = d ? [
    l,
    _,
    a[_] || {}
  ] : mh(t, l, _, o, f, u), S = g, C = l;
  if (!d && !(Y(S) || gi(S) || me(S)) && v && (S = m, C = S), !d && (!(Y(S) || gi(S) || me(S)) || !Y(b)))
    return r ? js : l;
  let I = !1;
  const G = () => {
    I = !0;
  }, L = me(S) ? S : gh(t, l, b, S, C, G);
  if (I)
    return S;
  const j = Ey(t, b, x, c), tt = ry(j), z = ky(t, L, tt), et = i ? i(z, l) : z;
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const B = {
      timestamp: Date.now(),
      key: Y(l) ? l : me(S) ? S.key : "",
      locale: b || (me(S) ? S.locale : ""),
      format: Y(S) ? S : me(S) ? S.source : "",
      message: et
    };
    B.meta = Yt({}, t.__meta, /* @__PURE__ */ vy() || {}), ay(B);
  }
  return et;
}
function xy(t) {
  Rt(t.list) ? t.list = t.list.map((e) => Y(e) ? bc(e) : e) : mt(t.named) && Object.keys(t.named).forEach((e) => {
    Y(t.named[e]) && (t.named[e] = bc(t.named[e]));
  });
}
function mh(t, e, n, i, r, s) {
  const { messages: o, onWarn: a, messageResolver: l, localeFallbacker: c } = t, u = c(t, i, n);
  let f = {}, h, d = null;
  const m = "translate";
  for (let v = 0; v < u.length && (h = u[v], f = o[h] || {}, (d = l(f, e)) === null && (d = f[e]), !(Y(d) || gi(d) || me(d))); v++) {
    const _ = Ja(
      t,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      e,
      h,
      s,
      m
    );
    _ !== e && (d = _);
  }
  return [d, h, f];
}
function gh(t, e, n, i, r, s) {
  const { messageCompiler: o, warnHtmlMessage: a } = t;
  if (me(i)) {
    const c = i;
    return c.locale = c.locale || n, c.key = c.key || e, c;
  }
  if (o == null) {
    const c = () => i;
    return c.locale = n, c.key = e, c;
  }
  const l = o(i, Sy(t, n, r, i, a, s));
  return l.locale = n, l.key = e, l.source = i, l;
}
function ky(t, e, n) {
  return e(n);
}
function Wo(...t) {
  const [e, n, i] = t, r = {};
  if (!Y(e) && !Bt(e) && !me(e) && !gi(e))
    throw Ge(Re.INVALID_ARGUMENT);
  const s = Bt(e) ? String(e) : (me(e), e);
  return Bt(n) ? r.plural = n : Y(n) ? r.default = n : ut(n) && !Gs(n) ? r.named = n : Rt(n) && (r.list = n), Bt(i) ? r.plural = i : Y(i) ? r.default = i : ut(i) && Yt(r, i), [s, r];
}
function Sy(t, e, n, i, r, s) {
  return {
    locale: e,
    key: n,
    warnHtmlMessage: r,
    onError: (o) => {
      throw s && s(o), o;
    },
    onCacheKey: (o) => Og(e, n, o)
  };
}
function Ey(t, e, n, i) {
  const { modifiers: r, pluralRules: s, messageResolver: o, fallbackLocale: a, fallbackWarn: l, missingWarn: c, fallbackContext: u } = t, h = {
    locale: e,
    modifiers: r,
    pluralRules: s,
    messages: (d) => {
      let m = o(n, d);
      if (m == null && u) {
        const [, , v] = mh(u, d, e, a, l, c);
        m = o(v, d);
      }
      if (Y(m) || gi(m)) {
        let v = !1;
        const g = gh(t, d, e, m, d, () => {
          v = !0;
        });
        return v ? Ac : g;
      } else
        return me(m) ? m : Ac;
    }
  };
  return t.processor && (h.processor = t.processor), i.list && (h.list = i.list), i.named && (h.named = i.named), Bt(i.plural) && (h.pluralIndex = i.plural), h;
}
function Pc(t, ...e) {
  const { datetimeFormats: n, unresolving: i, fallbackLocale: r, onWarn: s, localeFallbacker: o } = t, { __datetimeFormatters: a } = t, [l, c, u, f] = Ho(...e), h = Ot(u.missingWarn) ? u.missingWarn : t.missingWarn;
  Ot(u.fallbackWarn) ? u.fallbackWarn : t.fallbackWarn;
  const d = !!u.part, m = Xa(t, u), v = o(
    t,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    m
  );
  if (!Y(l) || l === "")
    return new Intl.DateTimeFormat(m, f).format(c);
  let _ = {}, g, b = null;
  const x = "datetime format";
  for (let I = 0; I < v.length && (g = v[I], _ = n[g] || {}, b = _[l], !ut(b)); I++)
    Ja(t, l, g, h, x);
  if (!ut(b) || !Y(g))
    return i ? js : l;
  let S = `${g}__${l}`;
  Gs(f) || (S = `${S}__${JSON.stringify(f)}`);
  let C = a.get(S);
  return C || (C = new Intl.DateTimeFormat(g, Yt({}, b, f)), a.set(S, C)), d ? C.formatToParts(c) : C.format(c);
}
const yh = [
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
function Ho(...t) {
  const [e, n, i, r] = t, s = {};
  let o = {}, a;
  if (Y(e)) {
    const l = e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw Ge(Re.INVALID_ISO_DATE_ARGUMENT);
    const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    a = new Date(c);
    try {
      a.toISOString();
    } catch {
      throw Ge(Re.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Ig(e)) {
    if (isNaN(e.getTime()))
      throw Ge(Re.INVALID_DATE_ARGUMENT);
    a = e;
  } else if (Bt(e))
    a = e;
  else
    throw Ge(Re.INVALID_ARGUMENT);
  return Y(n) ? s.key = n : ut(n) && Object.keys(n).forEach((l) => {
    yh.includes(l) ? o[l] = n[l] : s[l] = n[l];
  }), Y(i) ? s.locale = i : ut(i) && (o = i), ut(r) && (o = r), [s.key || "", a, s, o];
}
function Oc(t, e, n) {
  const i = t;
  for (const r in n) {
    const s = `${e}__${r}`;
    i.__datetimeFormatters.has(s) && i.__datetimeFormatters.delete(s);
  }
}
function Nc(t, ...e) {
  const { numberFormats: n, unresolving: i, fallbackLocale: r, onWarn: s, localeFallbacker: o } = t, { __numberFormatters: a } = t, [l, c, u, f] = Vo(...e), h = Ot(u.missingWarn) ? u.missingWarn : t.missingWarn;
  Ot(u.fallbackWarn) ? u.fallbackWarn : t.fallbackWarn;
  const d = !!u.part, m = Xa(t, u), v = o(
    t,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    m
  );
  if (!Y(l) || l === "")
    return new Intl.NumberFormat(m, f).format(c);
  let _ = {}, g, b = null;
  const x = "number format";
  for (let I = 0; I < v.length && (g = v[I], _ = n[g] || {}, b = _[l], !ut(b)); I++)
    Ja(t, l, g, h, x);
  if (!ut(b) || !Y(g))
    return i ? js : l;
  let S = `${g}__${l}`;
  Gs(f) || (S = `${S}__${JSON.stringify(f)}`);
  let C = a.get(S);
  return C || (C = new Intl.NumberFormat(g, Yt({}, b, f)), a.set(S, C)), d ? C.formatToParts(c) : C.format(c);
}
const bh = [
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
function Vo(...t) {
  const [e, n, i, r] = t, s = {};
  let o = {};
  if (!Bt(e))
    throw Ge(Re.INVALID_ARGUMENT);
  const a = e;
  return Y(n) ? s.key = n : ut(n) && Object.keys(n).forEach((l) => {
    bh.includes(l) ? o[l] = n[l] : s[l] = n[l];
  }), Y(i) ? s.locale = i : ut(i) && (o = i), ut(r) && (o = r), [s.key || "", a, s, o];
}
function Ic(t, e, n) {
  const i = t;
  for (const r in n) {
    const s = `${e}__${r}`;
    i.__numberFormatters.has(s) && i.__numberFormatters.delete(s);
  }
}
Ug();
/*!
 * vue-i18n v9.9.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
const Ty = "9.9.1";
function Ay() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Ya().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const vh = cy.__EXTEND_POINT__, on = Ka(vh);
on(), on(), on(), on(), on(), on(), on(), on();
const _h = Re.__EXTEND_POINT__, ee = Ka(_h), ve = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: _h,
  // legacy module errors
  INVALID_ARGUMENT: ee(),
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: ee(),
  NOT_INSTALLED: ee(),
  NOT_AVAILABLE_IN_LEGACY_MODE: ee(),
  // directive module errors
  REQUIRED_VALUE: ee(),
  INVALID_VALUE: ee(),
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: ee(),
  NOT_INSTALLED_WITH_PROVIDE: ee(),
  // unexpected error
  UNEXPECTED_ERROR: ee(),
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: ee(),
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: ee(),
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: ee(),
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: ee(),
  // for enhancement
  __EXTEND_POINT__: ee()
  // 40
};
function Ae(t, ...e) {
  return lh(t, null, void 0);
}
const Go = /* @__PURE__ */ Sn("__translateVNode"), jo = /* @__PURE__ */ Sn("__datetimeParts"), Yo = /* @__PURE__ */ Sn("__numberParts"), Cy = Sn("__setPluralRules"), Py = /* @__PURE__ */ Sn("__injectWithOption"), Ko = /* @__PURE__ */ Sn("__dispose");
function Ji(t) {
  if (!mt(t))
    return t;
  for (const e in t)
    if (gs(t, e))
      if (!e.includes("."))
        mt(t[e]) && Ji(t[e]);
      else {
        const n = e.split("."), i = n.length - 1;
        let r = t, s = !1;
        for (let o = 0; o < i; o++) {
          if (n[o] in r || (r[n[o]] = {}), !mt(r[n[o]])) {
            s = !0;
            break;
          }
          r = r[n[o]];
        }
        s || (r[n[i]] = t[e], delete t[e]), mt(r[n[i]]) && Ji(r[n[i]]);
      }
  return t;
}
function wh(t, e) {
  const { messages: n, __i18n: i, messageResolver: r, flatJson: s } = e, o = ut(n) ? n : Rt(i) ? {} : { [t]: {} };
  if (Rt(i) && i.forEach((a) => {
    if ("locale" in a && "resource" in a) {
      const { locale: l, resource: c } = a;
      l ? (o[l] = o[l] || {}, Jr(c, o[l])) : Jr(c, o);
    } else
      Y(a) && Jr(JSON.parse(a), o);
  }), r == null && s)
    for (const a in o)
      gs(o, a) && Ji(o[a]);
  return o;
}
function xh(t) {
  return t.type;
}
function Oy(t, e, n) {
  let i = mt(e.messages) ? e.messages : {};
  "__i18nGlobal" in n && (i = wh(t.locale.value, {
    messages: i,
    __i18n: n.__i18nGlobal
  }));
  const r = Object.keys(i);
  r.length && r.forEach((s) => {
    t.mergeLocaleMessage(s, i[s]);
  });
  {
    if (mt(e.datetimeFormats)) {
      const s = Object.keys(e.datetimeFormats);
      s.length && s.forEach((o) => {
        t.mergeDateTimeFormat(o, e.datetimeFormats[o]);
      });
    }
    if (mt(e.numberFormats)) {
      const s = Object.keys(e.numberFormats);
      s.length && s.forEach((o) => {
        t.mergeNumberFormat(o, e.numberFormats[o]);
      });
    }
  }
}
function Lc(t) {
  return pt(lr, null, t, 0);
}
const Mc = "__INTLIFY_META__", Rc = () => [], Ny = () => !1;
let Dc = 0;
function Fc(t) {
  return (e, n, i, r) => t(n, i, Hs() || void 0, r);
}
const Iy = /* @__NO_SIDE_EFFECTS__ */ () => {
  const t = Hs();
  let e = null;
  return t && (e = xh(t)[Mc]) ? { [Mc]: e } : null;
};
function kh(t = {}, e) {
  const { __root: n, __injectWithOption: i } = t, r = n === void 0, s = t.flatJson, o = ps ? ci : ni;
  let a = Ot(t.inheritLocale) ? t.inheritLocale : !0;
  const l = o(
    // prettier-ignore
    n && a ? n.locale.value : Y(t.locale) ? t.locale : ys
  ), c = o(
    // prettier-ignore
    n && a ? n.fallbackLocale.value : Y(t.fallbackLocale) || Rt(t.fallbackLocale) || ut(t.fallbackLocale) || t.fallbackLocale === !1 ? t.fallbackLocale : l.value
  ), u = o(wh(l.value, t)), f = o(ut(t.datetimeFormats) ? t.datetimeFormats : { [l.value]: {} }), h = o(ut(t.numberFormats) ? t.numberFormats : { [l.value]: {} });
  let d = n ? n.missingWarn : Ot(t.missingWarn) || ms(t.missingWarn) ? t.missingWarn : !0, m = n ? n.fallbackWarn : Ot(t.fallbackWarn) || ms(t.fallbackWarn) ? t.fallbackWarn : !0, v = n ? n.fallbackRoot : Ot(t.fallbackRoot) ? t.fallbackRoot : !0, _ = !!t.fallbackFormat, g = Pt(t.missing) ? t.missing : null, b = Pt(t.missing) ? Fc(t.missing) : null, x = Pt(t.postTranslation) ? t.postTranslation : null, S = n ? n.warnHtmlMessage : Ot(t.warnHtmlMessage) ? t.warnHtmlMessage : !0, C = !!t.escapeParameter;
  const I = n ? n.modifiers : ut(t.modifiers) ? t.modifiers : {};
  let G = t.pluralRules || n && n.pluralRules, L;
  L = (() => {
    r && Ec(null);
    const k = {
      version: Ty,
      locale: l.value,
      fallbackLocale: c.value,
      messages: u.value,
      modifiers: I,
      pluralRules: G,
      missing: b === null ? void 0 : b,
      missingWarn: d,
      fallbackWarn: m,
      fallbackFormat: _,
      unresolving: !0,
      postTranslation: x === null ? void 0 : x,
      warnHtmlMessage: S,
      escapeParameter: C,
      messageResolver: t.messageResolver,
      messageCompiler: t.messageCompiler,
      __meta: { framework: "vue" }
    };
    k.datetimeFormats = f.value, k.numberFormats = h.value, k.__datetimeFormatters = ut(L) ? L.__datetimeFormatters : void 0, k.__numberFormatters = ut(L) ? L.__numberFormatters : void 0;
    const E = wy(k);
    return r && Ec(E), E;
  })(), Ii(L, l.value, c.value);
  function tt() {
    return [
      l.value,
      c.value,
      u.value,
      f.value,
      h.value
    ];
  }
  const z = pe({
    get: () => l.value,
    set: (k) => {
      l.value = k, L.locale = l.value;
    }
  }), et = pe({
    get: () => c.value,
    set: (k) => {
      c.value = k, L.fallbackLocale = c.value, Ii(L, l.value, k);
    }
  }), B = pe(() => u.value), st = /* @__PURE__ */ pe(() => f.value), Kt = /* @__PURE__ */ pe(() => h.value);
  function bt() {
    return Pt(x) ? x : null;
  }
  function lt(k) {
    x = k, L.postTranslation = k;
  }
  function at() {
    return g;
  }
  function St(k) {
    k !== null && (b = Fc(k)), g = k, L.missing = b;
  }
  const qt = (k, E, H, J, ht, Tt) => {
    tt();
    let Ft;
    try {
      __INTLIFY_PROD_DEVTOOLS__, r || (L.fallbackContext = n ? _y() : void 0), Ft = k(L);
    } finally {
      __INTLIFY_PROD_DEVTOOLS__, r || (L.fallbackContext = void 0);
    }
    if (H !== "translate exists" && // for not `te` (e.g `t`)
    Bt(Ft) && Ft === js || H === "translate exists" && !Ft) {
      const [rn, ao] = E();
      return n && v ? J(n) : ht(rn);
    } else {
      if (Tt(Ft))
        return Ft;
      throw Ae(ve.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Xt(...k) {
    return qt((E) => Reflect.apply(Cc, null, [E, ...k]), () => Wo(...k), "translate", (E) => Reflect.apply(E.t, E, [...k]), (E) => E, (E) => Y(E));
  }
  function Ut(...k) {
    const [E, H, J] = k;
    if (J && !mt(J))
      throw Ae(ve.INVALID_ARGUMENT);
    return Xt(E, H, Yt({ resolvedMessage: !0 }, J || {}));
  }
  function tn(...k) {
    return qt((E) => Reflect.apply(Pc, null, [E, ...k]), () => Ho(...k), "datetime format", (E) => Reflect.apply(E.d, E, [...k]), () => kc, (E) => Y(E));
  }
  function Tn(...k) {
    return qt((E) => Reflect.apply(Nc, null, [E, ...k]), () => Vo(...k), "number format", (E) => Reflect.apply(E.n, E, [...k]), () => kc, (E) => Y(E));
  }
  function le(k) {
    return k.map((E) => Y(E) || Bt(E) || Ot(E) ? Lc(String(E)) : E);
  }
  const Ce = {
    normalize: le,
    interpolate: (k) => k,
    type: "vnode"
  };
  function Ue(...k) {
    return qt(
      (E) => {
        let H;
        const J = E;
        try {
          J.processor = Ce, H = Reflect.apply(Cc, null, [J, ...k]);
        } finally {
          J.processor = null;
        }
        return H;
      },
      () => Wo(...k),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (E) => E[Go](...k),
      (E) => [Lc(E)],
      (E) => Rt(E)
    );
  }
  function en(...k) {
    return qt(
      (E) => Reflect.apply(Nc, null, [E, ...k]),
      () => Vo(...k),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (E) => E[Yo](...k),
      Rc,
      (E) => Y(E) || Rt(E)
    );
  }
  function _e(...k) {
    return qt(
      (E) => Reflect.apply(Pc, null, [E, ...k]),
      () => Ho(...k),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (E) => E[jo](...k),
      Rc,
      (E) => Y(E) || Rt(E)
    );
  }
  function nn(k) {
    G = k, L.pluralRules = G;
  }
  function Ci(k, E) {
    return qt(() => {
      if (!k)
        return !1;
      const H = Y(E) ? E : l.value, J = T(H), ht = L.messageResolver(J, k);
      return gi(ht) || me(ht) || Y(ht);
    }, () => [k], "translate exists", (H) => Reflect.apply(H.te, H, [k, E]), Ny, (H) => Ot(H));
  }
  function y(k) {
    let E = null;
    const H = uh(L, c.value, l.value);
    for (let J = 0; J < H.length; J++) {
      const ht = u.value[H[J]] || {}, Tt = L.messageResolver(ht, k);
      if (Tt != null) {
        E = Tt;
        break;
      }
    }
    return E;
  }
  function w(k) {
    const E = y(k);
    return E ?? (n ? n.tm(k) || {} : {});
  }
  function T(k) {
    return u.value[k] || {};
  }
  function P(k, E) {
    if (s) {
      const H = { [k]: E };
      for (const J in H)
        gs(H, J) && Ji(H[J]);
      E = H[k];
    }
    u.value[k] = E, L.messages = u.value;
  }
  function O(k, E) {
    u.value[k] = u.value[k] || {};
    const H = { [k]: E };
    if (s)
      for (const J in H)
        gs(H, J) && Ji(H[J]);
    E = H[k], Jr(E, u.value[k]), L.messages = u.value;
  }
  function R(k) {
    return f.value[k] || {};
  }
  function F(k, E) {
    f.value[k] = E, L.datetimeFormats = f.value, Oc(L, k, E);
  }
  function M(k, E) {
    f.value[k] = Yt(f.value[k] || {}, E), L.datetimeFormats = f.value, Oc(L, k, E);
  }
  function D(k) {
    return h.value[k] || {};
  }
  function N(k, E) {
    h.value[k] = E, L.numberFormats = h.value, Ic(L, k, E);
  }
  function q(k, E) {
    h.value[k] = Yt(h.value[k] || {}, E), L.numberFormats = h.value, Ic(L, k, E);
  }
  Dc++, n && ps && (Ye(n.locale, (k) => {
    a && (l.value = k, L.locale = k, Ii(L, l.value, c.value));
  }), Ye(n.fallbackLocale, (k) => {
    a && (c.value = k, L.fallbackLocale = k, Ii(L, l.value, c.value));
  }));
  const $ = {
    id: Dc,
    locale: z,
    fallbackLocale: et,
    get inheritLocale() {
      return a;
    },
    set inheritLocale(k) {
      a = k, k && n && (l.value = n.locale.value, c.value = n.fallbackLocale.value, Ii(L, l.value, c.value));
    },
    get availableLocales() {
      return Object.keys(u.value).sort();
    },
    messages: B,
    get modifiers() {
      return I;
    },
    get pluralRules() {
      return G || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return d;
    },
    set missingWarn(k) {
      d = k, L.missingWarn = d;
    },
    get fallbackWarn() {
      return m;
    },
    set fallbackWarn(k) {
      m = k, L.fallbackWarn = m;
    },
    get fallbackRoot() {
      return v;
    },
    set fallbackRoot(k) {
      v = k;
    },
    get fallbackFormat() {
      return _;
    },
    set fallbackFormat(k) {
      _ = k, L.fallbackFormat = _;
    },
    get warnHtmlMessage() {
      return S;
    },
    set warnHtmlMessage(k) {
      S = k, L.warnHtmlMessage = k;
    },
    get escapeParameter() {
      return C;
    },
    set escapeParameter(k) {
      C = k, L.escapeParameter = k;
    },
    t: Xt,
    getLocaleMessage: T,
    setLocaleMessage: P,
    mergeLocaleMessage: O,
    getPostTranslationHandler: bt,
    setPostTranslationHandler: lt,
    getMissingHandler: at,
    setMissingHandler: St,
    [Cy]: nn
  };
  return $.datetimeFormats = st, $.numberFormats = Kt, $.rt = Ut, $.te = Ci, $.tm = w, $.d = tn, $.n = Tn, $.getDateTimeFormat = R, $.setDateTimeFormat = F, $.mergeDateTimeFormat = M, $.getNumberFormat = D, $.setNumberFormat = N, $.mergeNumberFormat = q, $[Py] = i, $[Go] = Ue, $[jo] = _e, $[Yo] = en, $;
}
const Qa = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (t) => t === "parent" || t === "global",
    default: "parent"
    /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function Ly({ slots: t }, e) {
  return e.length === 1 && e[0] === "default" ? (t.default ? t.default() : []).reduce((i, r) => [
    ...i,
    // prettier-ignore
    ...r.type === Mt ? r.children : [r]
  ], []) : e.reduce((n, i) => {
    const r = t[i];
    return r && (n[i] = r()), n;
  }, {});
}
function Sh(t) {
  return Mt;
}
const My = /* @__PURE__ */ ki({
  /* eslint-disable */
  name: "i18n-t",
  props: Yt({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (t) => Bt(t) || !isNaN(t)
    }
  }, Qa),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(t, e) {
    const { slots: n, attrs: i } = e, r = t.i18n || Ys({
      useScope: t.scope,
      __useComponent: !0
    });
    return () => {
      const s = Object.keys(n).filter((f) => f !== "_"), o = {};
      t.locale && (o.locale = t.locale), t.plural !== void 0 && (o.plural = Y(t.plural) ? +t.plural : t.plural);
      const a = Ly(e, s), l = r[Go](t.keypath, a, o), c = Yt({}, i), u = Y(t.tag) || mt(t.tag) ? t.tag : Sh();
      return Ga(u, c, l);
    };
  }
}), zc = My;
function Ry(t) {
  return Rt(t) && !Y(t[0]);
}
function Eh(t, e, n, i) {
  const { slots: r, attrs: s } = e;
  return () => {
    const o = { part: !0 };
    let a = {};
    t.locale && (o.locale = t.locale), Y(t.format) ? o.key = t.format : mt(t.format) && (Y(t.format.key) && (o.key = t.format.key), a = Object.keys(t.format).reduce((h, d) => n.includes(d) ? Yt({}, h, { [d]: t.format[d] }) : h, {}));
    const l = i(t.value, o, a);
    let c = [o.key];
    Rt(l) ? c = l.map((h, d) => {
      const m = r[h.type], v = m ? m({ [h.type]: h.value, index: d, parts: l }) : [h.value];
      return Ry(v) && (v[0].key = `${h.type}-${d}`), v;
    }) : Y(l) && (c = [l]);
    const u = Yt({}, s), f = Y(t.tag) || mt(t.tag) ? t.tag : Sh();
    return Ga(f, u, c);
  };
}
const Dy = /* @__PURE__ */ ki({
  /* eslint-disable */
  name: "i18n-n",
  props: Yt({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, Qa),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(t, e) {
    const n = t.i18n || Ys({
      useScope: "parent",
      __useComponent: !0
    });
    return Eh(t, e, bh, (...i) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Yo](...i)
    ));
  }
}), $c = Dy, Fy = /* @__PURE__ */ ki({
  /* eslint-disable */
  name: "i18n-d",
  props: Yt({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, Qa),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(t, e) {
    const n = t.i18n || Ys({
      useScope: "parent",
      __useComponent: !0
    });
    return Eh(t, e, yh, (...i) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[jo](...i)
    ));
  }
}), Bc = Fy;
function zy(t, e) {
  const n = t;
  if (t.mode === "composition")
    return n.__getInstance(e) || t.global;
  {
    const i = n.__getInstance(e);
    return i != null ? i.__composer : t.global.__composer;
  }
}
function $y(t) {
  const e = (o) => {
    const { instance: a, modifiers: l, value: c } = o;
    if (!a || !a.$)
      throw Ae(ve.UNEXPECTED_ERROR);
    const u = zy(t, a.$), f = qc(c);
    return [
      Reflect.apply(u.t, u, [...Uc(f)]),
      u
    ];
  };
  return {
    created: (o, a) => {
      const [l, c] = e(a);
      ps && t.global === c && (o.__i18nWatcher = Ye(c.locale, () => {
        a.instance && a.instance.$forceUpdate();
      })), o.__composer = c, o.textContent = l;
    },
    unmounted: (o) => {
      ps && o.__i18nWatcher && (o.__i18nWatcher(), o.__i18nWatcher = void 0, delete o.__i18nWatcher), o.__composer && (o.__composer = void 0, delete o.__composer);
    },
    beforeUpdate: (o, { value: a }) => {
      if (o.__composer) {
        const l = o.__composer, c = qc(a);
        o.textContent = Reflect.apply(l.t, l, [
          ...Uc(c)
        ]);
      }
    },
    getSSRProps: (o) => {
      const [a] = e(o);
      return { textContent: a };
    }
  };
}
function qc(t) {
  if (Y(t))
    return { path: t };
  if (ut(t)) {
    if (!("path" in t))
      throw Ae(ve.REQUIRED_VALUE, "path");
    return t;
  } else
    throw Ae(ve.INVALID_VALUE);
}
function Uc(t) {
  const { path: e, locale: n, args: i, choice: r, plural: s } = t, o = {}, a = i || {};
  return Y(n) && (o.locale = n), Bt(r) && (o.plural = r), Bt(s) && (o.plural = s), [e, a, o];
}
function By(t, e, ...n) {
  const i = ut(n[0]) ? n[0] : {}, r = !!i.useI18nComponentName;
  (Ot(i.globalInstall) ? i.globalInstall : !0) && ([r ? "i18n" : zc.name, "I18nT"].forEach((o) => t.component(o, zc)), [$c.name, "I18nN"].forEach((o) => t.component(o, $c)), [Bc.name, "I18nD"].forEach((o) => t.component(o, Bc))), t.directive("t", $y(e));
}
const qy = /* @__PURE__ */ Sn("global-vue-i18n");
function Uy(t = {}, e) {
  const n = Ot(t.globalInjection) ? t.globalInjection : !0, i = !0, r = /* @__PURE__ */ new Map(), [s, o] = Wy(t), a = /* @__PURE__ */ Sn("");
  function l(f) {
    return r.get(f) || null;
  }
  function c(f, h) {
    r.set(f, h);
  }
  function u(f) {
    r.delete(f);
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
        if (h.__VUE_I18N_SYMBOL__ = a, h.provide(h.__VUE_I18N_SYMBOL__, f), ut(d[0])) {
          const _ = d[0];
          f.__composerExtend = _.__composerExtend, f.__vueI18nExtend = _.__vueI18nExtend;
        }
        let m = null;
        n && (m = Jy(h, f.global)), By(h, f, ...d);
        const v = h.unmount;
        h.unmount = () => {
          m && m(), f.dispose(), v();
        };
      },
      // global accessor
      get global() {
        return o;
      },
      dispose() {
        s.stop();
      },
      // @internal
      __instances: r,
      // @internal
      __getInstance: l,
      // @internal
      __setInstance: c,
      // @internal
      __deleteInstance: u
    };
    return f;
  }
}
function Ys(t = {}) {
  const e = Hs();
  if (e == null)
    throw Ae(ve.MUST_BE_CALL_SETUP_TOP);
  if (!e.isCE && e.appContext.app != null && !e.appContext.app.__VUE_I18N_SYMBOL__)
    throw Ae(ve.NOT_INSTALLED);
  const n = Hy(e), i = Gy(n), r = xh(e), s = Vy(t, r);
  if (s === "global")
    return Oy(i, t, r), i;
  if (s === "parent") {
    let l = jy(n, e, t.__useComponent);
    return l == null && (l = i), l;
  }
  const o = n;
  let a = o.__getInstance(e);
  if (a == null) {
    const l = Yt({}, t);
    "__i18n" in r && (l.__i18n = r.__i18n), i && (l.__root = i), a = kh(l), o.__composerExtend && (a[Ko] = o.__composerExtend(a)), Ky(o, e, a), o.__setInstance(e, a);
  }
  return a;
}
function Wy(t, e, n) {
  const i = _p();
  {
    const r = i.run(() => kh(t));
    if (r == null)
      throw Ae(ve.UNEXPECTED_ERROR);
    return [i, r];
  }
}
function Hy(t) {
  {
    const e = Bi(t.isCE ? qy : t.appContext.app.__VUE_I18N_SYMBOL__);
    if (!e)
      throw Ae(t.isCE ? ve.NOT_INSTALLED_WITH_PROVIDE : ve.UNEXPECTED_ERROR);
    return e;
  }
}
function Vy(t, e) {
  return Gs(t) ? "__i18n" in e ? "local" : "global" : t.useScope ? t.useScope : "local";
}
function Gy(t) {
  return t.mode === "composition" ? t.global : t.global.__composer;
}
function jy(t, e, n = !1) {
  let i = null;
  const r = e.root;
  let s = Yy(e, n);
  for (; s != null; ) {
    const o = t;
    if (t.mode === "composition" && (i = o.__getInstance(s)), i != null || r === s)
      break;
    s = s.parent;
  }
  return i;
}
function Yy(t, e = !1) {
  return t == null ? null : e && t.vnode.ctx || t.parent;
}
function Ky(t, e, n) {
  qa(() => {
  }, e), Ua(() => {
    const i = n;
    t.__deleteInstance(e);
    const r = i[Ko];
    r && (r(), delete i[Ko]);
  }, e);
}
const Xy = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], Wc = ["t", "rt", "d", "n", "tm", "te"];
function Jy(t, e) {
  const n = /* @__PURE__ */ Object.create(null);
  return Xy.forEach((r) => {
    const s = Object.getOwnPropertyDescriptor(e, r);
    if (!s)
      throw Ae(ve.UNEXPECTED_ERROR);
    const o = Zt(s.value) ? {
      get() {
        return s.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(a) {
        s.value.value = a;
      }
    } : {
      get() {
        return s.get && s.get();
      }
    };
    Object.defineProperty(n, r, o);
  }), t.config.globalProperties.$i18n = n, Wc.forEach((r) => {
    const s = Object.getOwnPropertyDescriptor(e, r);
    if (!s || !s.value)
      throw Ae(ve.UNEXPECTED_ERROR);
    Object.defineProperty(t.config.globalProperties, `$${r}`, s);
  }), () => {
    delete t.config.globalProperties.$i18n, Wc.forEach((r) => {
      delete t.config.globalProperties[`$${r}`];
    });
  };
}
Ay();
gy(Xg);
yy(uh);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const t = Ya();
  t.__INTLIFY__ = !0, sy(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const Qy = {
  length: "Length",
  l: "L",
  width: "Width",
  w: "W",
  thickness: "Thickness",
  t: "T",
  name: "Name",
  quantity: "Quantity",
  q: "Q",
  machining: "Machining",
  orientation: "Orientation",
  "add part": "Add part",
  "remove part": "Remove part",
  calculate: "Calculate",
  "full screen": "Full screen",
  b: "B",
  banding: "Banding",
  "delete banding": "Delete banding",
  delete: "Delete",
  clear: "Clear",
  l1: "L1",
  l2: "L2",
  w1: "W1",
  w2: "W2",
  "Powered by SmartCut": "Powered by SmartCut"
}, Zy = {
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
  b: "Cantell",
  banding: "Banding",
  "delete banding": "Elimina cantell",
  delete: "Elimina",
  clear: "Neteja",
  l1: "L1",
  l2: "L2",
  w1: "A1",
  w2: "A1",
  "Powered by SmartCut": "Desenvolupat per SmartCut"
}, tb = {
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
  b: "Canto",
  banding: "Banding",
  "delete banding": "Elimina canto",
  delete: "Elimina",
  clear: "Borra",
  l1: "L1",
  l2: "L2",
  w1: "A1",
  w2: "A1",
  "Powered by SmartCut": "Desarrollado por SmartCut"
}, eb = {
  en_US: Qy,
  ca: Zy,
  es_ES: tb
};
function nb(t) {
  return mf() ? (xp(t), !0) : !1;
}
function Za(t) {
  return typeof t == "function" ? t() : If(t);
}
const ib = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const rb = Object.prototype.toString, sb = (t) => rb.call(t) === "[object Object]", ob = () => {
};
function ab(t, e) {
  function n(...i) {
    return new Promise((r, s) => {
      Promise.resolve(t(() => e.apply(this, i), { fn: e, thisArg: this, args: i })).then(r).catch(s);
    });
  }
  return n;
}
const Th = (t) => t();
function lb(t = Th) {
  const e = ci(!0);
  function n() {
    e.value = !1;
  }
  function i() {
    e.value = !0;
  }
  const r = (...s) => {
    e.value && t(...s);
  };
  return { isActive: Ma(e), pause: n, resume: i, eventFilter: r };
}
function cb(t) {
  return t || Hs();
}
function ub(t, e, n = {}) {
  const {
    eventFilter: i = Th,
    ...r
  } = n;
  return Ye(
    t,
    ab(
      i,
      e
    ),
    r
  );
}
function fb(t, e, n = {}) {
  const {
    eventFilter: i,
    ...r
  } = n, { eventFilter: s, pause: o, resume: a, isActive: l } = lb(i);
  return { stop: ub(
    t,
    e,
    {
      ...r,
      eventFilter: s
    }
  ), pause: o, resume: a, isActive: l };
}
function hb(t, e = !0, n) {
  cb() ? qa(t, n) : e ? t() : zs(t);
}
function db(t) {
  var e;
  const n = Za(t);
  return (e = n == null ? void 0 : n.$el) != null ? e : n;
}
const bs = ib ? window : void 0;
function Hc(...t) {
  let e, n, i, r;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([n, i, r] = t, e = bs) : [e, n, i, r] = t, !e)
    return ob;
  Array.isArray(n) || (n = [n]), Array.isArray(i) || (i = [i]);
  const s = [], o = () => {
    s.forEach((u) => u()), s.length = 0;
  }, a = (u, f, h, d) => (u.addEventListener(f, h, d), () => u.removeEventListener(f, h, d)), l = Ye(
    () => [db(e), Za(r)],
    ([u, f]) => {
      if (o(), !u)
        return;
      const h = sb(f) ? { ...f } : f;
      s.push(
        ...n.flatMap((d) => i.map((m) => a(u, d, m, h)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    l(), o();
  };
  return nb(c), c;
}
const Er = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Tr = "__vueuse_ssr_handlers__", pb = /* @__PURE__ */ mb();
function mb() {
  return Tr in Er || (Er[Tr] = Er[Tr] || {}), Er[Tr];
}
function gb(t, e) {
  return pb[t] || e;
}
function yb(t) {
  return t == null ? "any" : t instanceof Set ? "set" : t instanceof Map ? "map" : t instanceof Date ? "date" : typeof t == "boolean" ? "boolean" : typeof t == "string" ? "string" : typeof t == "object" ? "object" : Number.isNaN(t) ? "any" : "number";
}
const bb = {
  boolean: {
    read: (t) => t === "true",
    write: (t) => String(t)
  },
  object: {
    read: (t) => JSON.parse(t),
    write: (t) => JSON.stringify(t)
  },
  number: {
    read: (t) => Number.parseFloat(t),
    write: (t) => String(t)
  },
  any: {
    read: (t) => t,
    write: (t) => String(t)
  },
  string: {
    read: (t) => t,
    write: (t) => String(t)
  },
  map: {
    read: (t) => new Map(JSON.parse(t)),
    write: (t) => JSON.stringify(Array.from(t.entries()))
  },
  set: {
    read: (t) => new Set(JSON.parse(t)),
    write: (t) => JSON.stringify(Array.from(t))
  },
  date: {
    read: (t) => new Date(t),
    write: (t) => t.toISOString()
  }
}, Vc = "vueuse-storage";
function vb(t, e, n, i = {}) {
  var r;
  const {
    flush: s = "pre",
    deep: o = !0,
    listenToStorageChanges: a = !0,
    writeDefaults: l = !0,
    mergeDefaults: c = !1,
    shallow: u,
    window: f = bs,
    eventFilter: h,
    onError: d = (j) => {
      console.error(j);
    },
    initOnMounted: m
  } = i, v = (u ? ni : ci)(typeof e == "function" ? e() : e);
  if (!n)
    try {
      n = gb("getDefaultStorage", () => {
        var j;
        return (j = bs) == null ? void 0 : j.localStorage;
      })();
    } catch (j) {
      d(j);
    }
  if (!n)
    return v;
  const _ = Za(e), g = yb(_), b = (r = i.serializer) != null ? r : bb[g], { pause: x, resume: S } = fb(
    v,
    () => C(v.value),
    { flush: s, deep: o, eventFilter: h }
  );
  return f && a && hb(() => {
    Hc(f, "storage", L), Hc(f, Vc, G), m && L();
  }), m || L(), v;
  function C(j) {
    try {
      if (j == null)
        n.removeItem(t);
      else {
        const tt = b.write(j), z = n.getItem(t);
        z !== tt && (n.setItem(t, tt), f && f.dispatchEvent(new CustomEvent(Vc, {
          detail: {
            key: t,
            oldValue: z,
            newValue: tt,
            storageArea: n
          }
        })));
      }
    } catch (tt) {
      d(tt);
    }
  }
  function I(j) {
    const tt = j ? j.newValue : n.getItem(t);
    if (tt == null)
      return l && _ != null && n.setItem(t, b.write(_)), _;
    if (!j && c) {
      const z = b.read(tt);
      return typeof c == "function" ? c(z, _) : g === "object" && !Array.isArray(z) ? { ..._, ...z } : z;
    } else
      return typeof tt != "string" ? tt : b.read(tt);
  }
  function G(j) {
    L(j.detail);
  }
  function L(j) {
    if (!(j && j.storageArea !== n)) {
      if (j && j.key == null) {
        v.value = _;
        return;
      }
      if (!(j && j.key !== t)) {
        x();
        try {
          (j == null ? void 0 : j.newValue) !== b.write(v.value) && (v.value = I(j));
        } catch (tt) {
          d(tt);
        } finally {
          j ? zs(S) : S();
        }
      }
    }
  }
}
function _b(t, e, n = {}) {
  const { window: i = bs } = n;
  return vb(t, e, i == null ? void 0 : i.localStorage, n);
}
const qe = /* @__PURE__ */ Object.create(null);
qe.open = "0";
qe.close = "1";
qe.ping = "2";
qe.pong = "3";
qe.message = "4";
qe.upgrade = "5";
qe.noop = "6";
const Qr = /* @__PURE__ */ Object.create(null);
Object.keys(qe).forEach((t) => {
  Qr[qe[t]] = t;
});
const Xo = { type: "error", data: "parser error" }, Ah = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Ch = typeof ArrayBuffer == "function", Ph = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer, tl = ({ type: t, data: e }, n, i) => Ah && e instanceof Blob ? n ? i(e) : Gc(e, i) : Ch && (e instanceof ArrayBuffer || Ph(e)) ? n ? i(e) : Gc(new Blob([e]), i) : i(qe[t] + (e || "")), Gc = (t, e) => {
  const n = new FileReader();
  return n.onload = function() {
    const i = n.result.split(",")[1];
    e("b" + (i || ""));
  }, n.readAsDataURL(t);
};
function jc(t) {
  return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
}
let bo;
function wb(t, e) {
  if (Ah && t.data instanceof Blob)
    return t.data.arrayBuffer().then(jc).then(e);
  if (Ch && (t.data instanceof ArrayBuffer || Ph(t.data)))
    return e(jc(t.data));
  tl(t, !1, (n) => {
    bo || (bo = new TextEncoder()), e(bo.encode(n));
  });
}
const Yc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Di = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < Yc.length; t++)
  Di[Yc.charCodeAt(t)] = t;
const xb = (t) => {
  let e = t.length * 0.75, n = t.length, i, r = 0, s, o, a, l;
  t[t.length - 1] === "=" && (e--, t[t.length - 2] === "=" && e--);
  const c = new ArrayBuffer(e), u = new Uint8Array(c);
  for (i = 0; i < n; i += 4)
    s = Di[t.charCodeAt(i)], o = Di[t.charCodeAt(i + 1)], a = Di[t.charCodeAt(i + 2)], l = Di[t.charCodeAt(i + 3)], u[r++] = s << 2 | o >> 4, u[r++] = (o & 15) << 4 | a >> 2, u[r++] = (a & 3) << 6 | l & 63;
  return c;
}, kb = typeof ArrayBuffer == "function", el = (t, e) => {
  if (typeof t != "string")
    return {
      type: "message",
      data: Oh(t, e)
    };
  const n = t.charAt(0);
  return n === "b" ? {
    type: "message",
    data: Sb(t.substring(1), e)
  } : Qr[n] ? t.length > 1 ? {
    type: Qr[n],
    data: t.substring(1)
  } : {
    type: Qr[n]
  } : Xo;
}, Sb = (t, e) => {
  if (kb) {
    const n = xb(t);
    return Oh(n, e);
  } else
    return { base64: !0, data: t };
}, Oh = (t, e) => {
  switch (e) {
    case "blob":
      return t instanceof Blob ? t : new Blob([t]);
    case "arraybuffer":
    default:
      return t instanceof ArrayBuffer ? t : t.buffer;
  }
}, Nh = "", Eb = (t, e) => {
  const n = t.length, i = new Array(n);
  let r = 0;
  t.forEach((s, o) => {
    tl(s, !1, (a) => {
      i[o] = a, ++r === n && e(i.join(Nh));
    });
  });
}, Tb = (t, e) => {
  const n = t.split(Nh), i = [];
  for (let r = 0; r < n.length; r++) {
    const s = el(n[r], e);
    if (i.push(s), s.type === "error")
      break;
  }
  return i;
};
function Ab() {
  return new TransformStream({
    transform(t, e) {
      wb(t, (n) => {
        const i = n.length;
        let r;
        if (i < 126)
          r = new Uint8Array(1), new DataView(r.buffer).setUint8(0, i);
        else if (i < 65536) {
          r = new Uint8Array(3);
          const s = new DataView(r.buffer);
          s.setUint8(0, 126), s.setUint16(1, i);
        } else {
          r = new Uint8Array(9);
          const s = new DataView(r.buffer);
          s.setUint8(0, 127), s.setBigUint64(1, BigInt(i));
        }
        t.data && typeof t.data != "string" && (r[0] |= 128), e.enqueue(r), e.enqueue(n);
      });
    }
  });
}
let vo;
function Ar(t) {
  return t.reduce((e, n) => e + n.length, 0);
}
function Cr(t, e) {
  if (t[0].length === e)
    return t.shift();
  const n = new Uint8Array(e);
  let i = 0;
  for (let r = 0; r < e; r++)
    n[r] = t[0][i++], i === t[0].length && (t.shift(), i = 0);
  return t.length && i < t[0].length && (t[0] = t[0].slice(i)), n;
}
function Cb(t, e) {
  vo || (vo = new TextDecoder());
  const n = [];
  let i = 0, r = -1, s = !1;
  return new TransformStream({
    transform(o, a) {
      for (n.push(o); ; ) {
        if (i === 0) {
          if (Ar(n) < 1)
            break;
          const l = Cr(n, 1);
          s = (l[0] & 128) === 128, r = l[0] & 127, r < 126 ? i = 3 : r === 126 ? i = 1 : i = 2;
        } else if (i === 1) {
          if (Ar(n) < 2)
            break;
          const l = Cr(n, 2);
          r = new DataView(l.buffer, l.byteOffset, l.length).getUint16(0), i = 3;
        } else if (i === 2) {
          if (Ar(n) < 8)
            break;
          const l = Cr(n, 8), c = new DataView(l.buffer, l.byteOffset, l.length), u = c.getUint32(0);
          if (u > Math.pow(2, 21) - 1) {
            a.enqueue(Xo);
            break;
          }
          r = u * Math.pow(2, 32) + c.getUint32(4), i = 3;
        } else {
          if (Ar(n) < r)
            break;
          const l = Cr(n, r);
          a.enqueue(el(s ? l : vo.decode(l), e)), i = 0;
        }
        if (r === 0 || r > t) {
          a.enqueue(Xo);
          break;
        }
      }
    }
  });
}
const Ih = 4;
function It(t) {
  if (t)
    return Pb(t);
}
function Pb(t) {
  for (var e in It.prototype)
    t[e] = It.prototype[e];
  return t;
}
It.prototype.on = It.prototype.addEventListener = function(t, e) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
};
It.prototype.once = function(t, e) {
  function n() {
    this.off(t, n), e.apply(this, arguments);
  }
  return n.fn = e, this.on(t, n), this;
};
It.prototype.off = It.prototype.removeListener = It.prototype.removeAllListeners = It.prototype.removeEventListener = function(t, e) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var n = this._callbacks["$" + t];
  if (!n)
    return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + t], this;
  for (var i, r = 0; r < n.length; r++)
    if (i = n[r], i === e || i.fn === e) {
      n.splice(r, 1);
      break;
    }
  return n.length === 0 && delete this._callbacks["$" + t], this;
};
It.prototype.emit = function(t) {
  this._callbacks = this._callbacks || {};
  for (var e = new Array(arguments.length - 1), n = this._callbacks["$" + t], i = 1; i < arguments.length; i++)
    e[i - 1] = arguments[i];
  if (n) {
    n = n.slice(0);
    for (var i = 0, r = n.length; i < r; ++i)
      n[i].apply(this, e);
  }
  return this;
};
It.prototype.emitReserved = It.prototype.emit;
It.prototype.listeners = function(t) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
};
It.prototype.hasListeners = function(t) {
  return !!this.listeners(t).length;
};
const ge = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
function Lh(t, ...e) {
  return e.reduce((n, i) => (t.hasOwnProperty(i) && (n[i] = t[i]), n), {});
}
const Ob = ge.setTimeout, Nb = ge.clearTimeout;
function Ks(t, e) {
  e.useNativeTimers ? (t.setTimeoutFn = Ob.bind(ge), t.clearTimeoutFn = Nb.bind(ge)) : (t.setTimeoutFn = ge.setTimeout.bind(ge), t.clearTimeoutFn = ge.clearTimeout.bind(ge));
}
const Ib = 1.33;
function Lb(t) {
  return typeof t == "string" ? Mb(t) : Math.ceil((t.byteLength || t.size) * Ib);
}
function Mb(t) {
  let e = 0, n = 0;
  for (let i = 0, r = t.length; i < r; i++)
    e = t.charCodeAt(i), e < 128 ? n += 1 : e < 2048 ? n += 2 : e < 55296 || e >= 57344 ? n += 3 : (i++, n += 4);
  return n;
}
function Rb(t) {
  let e = "";
  for (let n in t)
    t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
  return e;
}
function Db(t) {
  let e = {}, n = t.split("&");
  for (let i = 0, r = n.length; i < r; i++) {
    let s = n[i].split("=");
    e[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
  }
  return e;
}
class Fb extends Error {
  constructor(e, n, i) {
    super(e), this.description = n, this.context = i, this.type = "TransportError";
  }
}
class nl extends It {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(e) {
    super(), this.writable = !1, Ks(this, e), this.opts = e, this.query = e.query, this.socket = e.socket;
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
  onError(e, n, i) {
    return super.emitReserved("error", new Fb(e, n, i)), this;
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
  send(e) {
    this.readyState === "open" && this.write(e);
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
  onData(e) {
    const n = el(e, this.socket.binaryType);
    this.onPacket(n);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(e) {
    super.emitReserved("packet", e);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(e) {
    this.readyState = "closed", super.emitReserved("close", e);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(e) {
  }
  createUri(e, n = {}) {
    return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(n);
  }
  _hostname() {
    const e = this.opts.hostname;
    return e.indexOf(":") === -1 ? e : "[" + e + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(e) {
    const n = Rb(e);
    return n.length ? "?" + n : "";
  }
}
const Mh = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), Jo = 64, zb = {};
let Kc = 0, Pr = 0, Xc;
function Jc(t) {
  let e = "";
  do
    e = Mh[t % Jo] + e, t = Math.floor(t / Jo);
  while (t > 0);
  return e;
}
function Rh() {
  const t = Jc(+/* @__PURE__ */ new Date());
  return t !== Xc ? (Kc = 0, Xc = t) : t + "." + Jc(Kc++);
}
for (; Pr < Jo; Pr++)
  zb[Mh[Pr]] = Pr;
let Dh = !1;
try {
  Dh = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const $b = Dh;
function Fh(t) {
  const e = t.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!e || $b))
      return new XMLHttpRequest();
  } catch {
  }
  if (!e)
    try {
      return new ge[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
function Bb() {
}
const qb = function() {
  return new Fh({
    xdomain: !1
  }).responseType != null;
}();
class Ub extends nl {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(e) {
    if (super(e), this.polling = !1, typeof location < "u") {
      const i = location.protocol === "https:";
      let r = location.port;
      r || (r = i ? "443" : "80"), this.xd = typeof location < "u" && e.hostname !== location.hostname || r !== e.port;
    }
    const n = e && e.forceBase64;
    this.supportsBinary = qb && !n, this.opts.withCredentials && (this.cookieJar = void 0);
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
    this.poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} onPause - callback upon buffers are flushed and transport is paused
   * @package
   */
  pause(e) {
    this.readyState = "pausing";
    const n = () => {
      this.readyState = "paused", e();
    };
    if (this.polling || !this.writable) {
      let i = 0;
      this.polling && (i++, this.once("pollComplete", function() {
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
  poll() {
    this.polling = !0, this.doPoll(), this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(e) {
    const n = (i) => {
      if (this.readyState === "opening" && i.type === "open" && this.onOpen(), i.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(i);
    };
    Tb(e, this.socket.binaryType).forEach(n), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const e = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? e() : this.once("open", e);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(e) {
    this.writable = !1, Eb(e, (n) => {
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
    const e = this.opts.secure ? "https" : "http", n = this.query || {};
    return this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = Rh()), !this.supportsBinary && !n.sid && (n.b64 = 1), this.createUri(e, n);
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @private
   */
  request(e = {}) {
    return Object.assign(e, { xd: this.xd, cookieJar: this.cookieJar }, this.opts), new ze(this.uri(), e);
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(e, n) {
    const i = this.request({
      method: "POST",
      data: e
    });
    i.on("success", n), i.on("error", (r, s) => {
      this.onError("xhr post error", r, s);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const e = this.request();
    e.on("data", this.onData.bind(this)), e.on("error", (n, i) => {
      this.onError("xhr poll error", n, i);
    }), this.pollXhr = e;
  }
}
class ze extends It {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(e, n) {
    super(), Ks(this, n), this.opts = n, this.method = n.method || "GET", this.uri = e, this.data = n.data !== void 0 ? n.data : null, this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  create() {
    var e;
    const n = Lh(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    n.xdomain = !!this.opts.xd;
    const i = this.xhr = new Fh(n);
    try {
      i.open(this.method, this.uri, !0);
      try {
        if (this.opts.extraHeaders) {
          i.setDisableHeaderCheck && i.setDisableHeaderCheck(!0);
          for (let r in this.opts.extraHeaders)
            this.opts.extraHeaders.hasOwnProperty(r) && i.setRequestHeader(r, this.opts.extraHeaders[r]);
        }
      } catch {
      }
      if (this.method === "POST")
        try {
          i.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        i.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (e = this.opts.cookieJar) === null || e === void 0 || e.addCookies(i), "withCredentials" in i && (i.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (i.timeout = this.opts.requestTimeout), i.onreadystatechange = () => {
        var r;
        i.readyState === 3 && ((r = this.opts.cookieJar) === null || r === void 0 || r.parseCookies(i)), i.readyState === 4 && (i.status === 200 || i.status === 1223 ? this.onLoad() : this.setTimeoutFn(() => {
          this.onError(typeof i.status == "number" ? i.status : 0);
        }, 0));
      }, i.send(this.data);
    } catch (r) {
      this.setTimeoutFn(() => {
        this.onError(r);
      }, 0);
      return;
    }
    typeof document < "u" && (this.index = ze.requestsCount++, ze.requests[this.index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  onError(e) {
    this.emitReserved("error", e, this.xhr), this.cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  cleanup(e) {
    if (!(typeof this.xhr > "u" || this.xhr === null)) {
      if (this.xhr.onreadystatechange = Bb, e)
        try {
          this.xhr.abort();
        } catch {
        }
      typeof document < "u" && delete ze.requests[this.index], this.xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  onLoad() {
    const e = this.xhr.responseText;
    e !== null && (this.emitReserved("data", e), this.emitReserved("success"), this.cleanup());
  }
  /**
   * Aborts the request.
   *
   * @package
   */
  abort() {
    this.cleanup();
  }
}
ze.requestsCount = 0;
ze.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Qc);
  else if (typeof addEventListener == "function") {
    const t = "onpagehide" in ge ? "pagehide" : "unload";
    addEventListener(t, Qc, !1);
  }
}
function Qc() {
  for (let t in ze.requests)
    ze.requests.hasOwnProperty(t) && ze.requests[t].abort();
}
const il = typeof Promise == "function" && typeof Promise.resolve == "function" ? (e) => Promise.resolve().then(e) : (e, n) => n(e, 0), Or = ge.WebSocket || ge.MozWebSocket, Zc = !0, Wb = "arraybuffer", tu = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class Hb extends nl {
  /**
   * WebSocket transport constructor.
   *
   * @param {Object} opts - connection options
   * @protected
   */
  constructor(e) {
    super(e), this.supportsBinary = !e.forceBase64;
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check())
      return;
    const e = this.uri(), n = this.opts.protocols, i = tu ? {} : Lh(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (i.headers = this.opts.extraHeaders);
    try {
      this.ws = Zc && !tu ? n ? new Or(e, n) : new Or(e) : new Or(e, n, i);
    } catch (r) {
      return this.emitReserved("error", r);
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
    }, this.ws.onclose = (e) => this.onClose({
      description: "websocket connection closed",
      context: e
    }), this.ws.onmessage = (e) => this.onData(e.data), this.ws.onerror = (e) => this.onError("websocket error", e);
  }
  write(e) {
    this.writable = !1;
    for (let n = 0; n < e.length; n++) {
      const i = e[n], r = n === e.length - 1;
      tl(i, this.supportsBinary, (s) => {
        const o = {};
        try {
          Zc && this.ws.send(s);
        } catch {
        }
        r && il(() => {
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
    const e = this.opts.secure ? "wss" : "ws", n = this.query || {};
    return this.opts.timestampRequests && (n[this.opts.timestampParam] = Rh()), this.supportsBinary || (n.b64 = 1), this.createUri(e, n);
  }
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @private
   */
  check() {
    return !!Or;
  }
}
class Vb extends nl {
  get name() {
    return "webtransport";
  }
  doOpen() {
    typeof WebTransport == "function" && (this.transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]), this.transport.closed.then(() => {
      this.onClose();
    }).catch((e) => {
      this.onError("webtransport error", e);
    }), this.transport.ready.then(() => {
      this.transport.createBidirectionalStream().then((e) => {
        const n = Cb(Number.MAX_SAFE_INTEGER, this.socket.binaryType), i = e.readable.pipeThrough(n).getReader(), r = Ab();
        r.readable.pipeTo(e.writable), this.writer = r.writable.getWriter();
        const s = () => {
          i.read().then(({ done: a, value: l }) => {
            a || (this.onPacket(l), s());
          }).catch((a) => {
          });
        };
        s();
        const o = { type: "open" };
        this.query.sid && (o.data = `{"sid":"${this.query.sid}"}`), this.writer.write(o).then(() => this.onOpen());
      });
    }));
  }
  write(e) {
    this.writable = !1;
    for (let n = 0; n < e.length; n++) {
      const i = e[n], r = n === e.length - 1;
      this.writer.write(i).then(() => {
        r && il(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var e;
    (e = this.transport) === null || e === void 0 || e.close();
  }
}
const Gb = {
  websocket: Hb,
  webtransport: Vb,
  polling: Ub
}, jb = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Yb = [
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
function Qo(t) {
  if (t.length > 2e3)
    throw "URI too long";
  const e = t, n = t.indexOf("["), i = t.indexOf("]");
  n != -1 && i != -1 && (t = t.substring(0, n) + t.substring(n, i).replace(/:/g, ";") + t.substring(i, t.length));
  let r = jb.exec(t || ""), s = {}, o = 14;
  for (; o--; )
    s[Yb[o]] = r[o] || "";
  return n != -1 && i != -1 && (s.source = e, s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"), s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), s.ipv6uri = !0), s.pathNames = Kb(s, s.path), s.queryKey = Xb(s, s.query), s;
}
function Kb(t, e) {
  const n = /\/{2,9}/g, i = e.replace(n, "/").split("/");
  return (e.slice(0, 1) == "/" || e.length === 0) && i.splice(0, 1), e.slice(-1) == "/" && i.splice(i.length - 1, 1), i;
}
function Xb(t, e) {
  const n = {};
  return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(i, r, s) {
    r && (n[r] = s);
  }), n;
}
let zh = class ei extends It {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(e, n = {}) {
    super(), this.binaryType = Wb, this.writeBuffer = [], e && typeof e == "object" && (n = e, e = null), e ? (e = Qo(e), n.hostname = e.host, n.secure = e.protocol === "https" || e.protocol === "wss", n.port = e.port, e.query && (n.query = e.query)) : n.host && (n.hostname = Qo(n.host).host), Ks(this, n), this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:", n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = n.transports || [
      "polling",
      "websocket",
      "webtransport"
    ], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
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
    }, n), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Db(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this.beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this.offlineEventListener = () => {
      this.onClose("transport close", {
        description: "network connection lost"
      });
    }, addEventListener("offline", this.offlineEventListener, !1))), this.open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(e) {
    const n = Object.assign({}, this.opts.query);
    n.EIO = Ih, n.transport = e, this.id && (n.sid = this.id);
    const i = Object.assign({}, this.opts, {
      query: n,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[e]);
    return new Gb[e](i);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  open() {
    let e;
    if (this.opts.rememberUpgrade && ei.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
      e = "websocket";
    else if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else
      e = this.transports[0];
    this.readyState = "opening";
    try {
      e = this.createTransport(e);
    } catch {
      this.transports.shift(), this.open();
      return;
    }
    e.open(), this.setTransport(e);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(e) {
    this.transport && this.transport.removeAllListeners(), this.transport = e, e.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (n) => this.onClose("transport close", n));
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  probe(e) {
    let n = this.createTransport(e), i = !1;
    ei.priorWebsocketSuccess = !1;
    const r = () => {
      i || (n.send([{ type: "ping", data: "probe" }]), n.once("packet", (f) => {
        if (!i)
          if (f.type === "pong" && f.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", n), !n)
              return;
            ei.priorWebsocketSuccess = n.name === "websocket", this.transport.pause(() => {
              i || this.readyState !== "closed" && (u(), this.setTransport(n), n.send([{ type: "upgrade" }]), this.emitReserved("upgrade", n), n = null, this.upgrading = !1, this.flush());
            });
          } else {
            const h = new Error("probe error");
            h.transport = n.name, this.emitReserved("upgradeError", h);
          }
      }));
    };
    function s() {
      i || (i = !0, u(), n.close(), n = null);
    }
    const o = (f) => {
      const h = new Error("probe error: " + f);
      h.transport = n.name, s(), this.emitReserved("upgradeError", h);
    };
    function a() {
      o("transport closed");
    }
    function l() {
      o("socket closed");
    }
    function c(f) {
      n && f.name !== n.name && s();
    }
    const u = () => {
      n.removeListener("open", r), n.removeListener("error", o), n.removeListener("close", a), this.off("close", l), this.off("upgrading", c);
    };
    n.once("open", r), n.once("error", o), n.once("close", a), this.once("close", l), this.once("upgrading", c), this.upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn(() => {
      i || n.open();
    }, 200) : n.open();
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    if (this.readyState = "open", ei.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
      let e = 0;
      const n = this.upgrades.length;
      for (; e < n; e++)
        this.probe(this.upgrades[e]);
    }
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  onPacket(e) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", e), this.emitReserved("heartbeat"), this.resetPingTimeout(), e.type) {
        case "open":
          this.onHandshake(JSON.parse(e.data));
          break;
        case "ping":
          this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
          break;
        case "error":
          const n = new Error("server error");
          n.code = e.data, this.onError(n);
          break;
        case "message":
          this.emitReserved("data", e.data), this.emitReserved("message", e.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(e) {
    this.emitReserved("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.maxPayload = e.maxPayload, this.onOpen(), this.readyState !== "closed" && this.resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref();
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const e = this.getWritablePackets();
      this.transport.send(e), this.prevBufferLen = e.length, this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  getWritablePackets() {
    if (!(this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
      return this.writeBuffer;
    let n = 1;
    for (let i = 0; i < this.writeBuffer.length; i++) {
      const r = this.writeBuffer[i].data;
      if (r && (n += Lb(r)), i > 0 && n > this.maxPayload)
        return this.writeBuffer.slice(0, i);
      n += 2;
    }
    return this.writeBuffer;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} callback function.
   * @return {Socket} for chaining.
   */
  write(e, n, i) {
    return this.sendPacket("message", e, n, i), this;
  }
  send(e, n, i) {
    return this.sendPacket("message", e, n, i), this;
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
  sendPacket(e, n, i, r) {
    if (typeof n == "function" && (r = n, n = void 0), typeof i == "function" && (r = i, i = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    i = i || {}, i.compress = i.compress !== !1;
    const s = {
      type: e,
      data: n,
      options: i
    };
    this.emitReserved("packetCreate", s), this.writeBuffer.push(s), r && this.once("flush", r), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const e = () => {
      this.onClose("forced close"), this.transport.close();
    }, n = () => {
      this.off("upgrade", n), this.off("upgradeError", n), e();
    }, i = () => {
      this.once("upgrade", n), this.once("upgradeError", n);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? i() : e();
    }) : this.upgrading ? i() : e()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  onError(e) {
    ei.priorWebsocketSuccess = !1, this.emitReserved("error", e), this.onClose("transport error", e);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  onClose(e, n) {
    (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") && (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), typeof removeEventListener == "function" && (removeEventListener("beforeunload", this.beforeunloadEventListener, !1), removeEventListener("offline", this.offlineEventListener, !1)), this.readyState = "closed", this.id = null, this.emitReserved("close", e, n), this.writeBuffer = [], this.prevBufferLen = 0);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  filterUpgrades(e) {
    const n = [];
    let i = 0;
    const r = e.length;
    for (; i < r; i++)
      ~this.transports.indexOf(e[i]) && n.push(e[i]);
    return n;
  }
};
zh.protocol = Ih;
function Jb(t, e = "", n) {
  let i = t;
  n = n || typeof location < "u" && location, t == null && (t = n.protocol + "//" + n.host), typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = n.protocol + t : t = n.host + t), /^(https?|wss?):\/\//.test(t) || (typeof n < "u" ? t = n.protocol + "//" + t : t = "https://" + t), i = Qo(t)), i.port || (/^(http|ws)$/.test(i.protocol) ? i.port = "80" : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")), i.path = i.path || "/";
  const s = i.host.indexOf(":") !== -1 ? "[" + i.host + "]" : i.host;
  return i.id = i.protocol + "://" + s + ":" + i.port + e, i.href = i.protocol + "://" + s + (n && n.port === i.port ? "" : ":" + i.port), i;
}
const Qb = typeof ArrayBuffer == "function", Zb = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer, $h = Object.prototype.toString, t0 = typeof Blob == "function" || typeof Blob < "u" && $h.call(Blob) === "[object BlobConstructor]", e0 = typeof File == "function" || typeof File < "u" && $h.call(File) === "[object FileConstructor]";
function rl(t) {
  return Qb && (t instanceof ArrayBuffer || Zb(t)) || t0 && t instanceof Blob || e0 && t instanceof File;
}
function Zr(t, e) {
  if (!t || typeof t != "object")
    return !1;
  if (Array.isArray(t)) {
    for (let n = 0, i = t.length; n < i; n++)
      if (Zr(t[n]))
        return !0;
    return !1;
  }
  if (rl(t))
    return !0;
  if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
    return Zr(t.toJSON(), !0);
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n) && Zr(t[n]))
      return !0;
  return !1;
}
function n0(t) {
  const e = [], n = t.data, i = t;
  return i.data = Zo(n, e), i.attachments = e.length, { packet: i, buffers: e };
}
function Zo(t, e) {
  if (!t)
    return t;
  if (rl(t)) {
    const n = { _placeholder: !0, num: e.length };
    return e.push(t), n;
  } else if (Array.isArray(t)) {
    const n = new Array(t.length);
    for (let i = 0; i < t.length; i++)
      n[i] = Zo(t[i], e);
    return n;
  } else if (typeof t == "object" && !(t instanceof Date)) {
    const n = {};
    for (const i in t)
      Object.prototype.hasOwnProperty.call(t, i) && (n[i] = Zo(t[i], e));
    return n;
  }
  return t;
}
function i0(t, e) {
  return t.data = ta(t.data, e), delete t.attachments, t;
}
function ta(t, e) {
  if (!t)
    return t;
  if (t && t._placeholder === !0) {
    if (typeof t.num == "number" && t.num >= 0 && t.num < e.length)
      return e[t.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(t))
    for (let n = 0; n < t.length; n++)
      t[n] = ta(t[n], e);
  else if (typeof t == "object")
    for (const n in t)
      Object.prototype.hasOwnProperty.call(t, n) && (t[n] = ta(t[n], e));
  return t;
}
const r0 = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], s0 = 5;
var ct;
(function(t) {
  t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK";
})(ct || (ct = {}));
class o0 {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(e) {
    this.replacer = e;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(e) {
    return (e.type === ct.EVENT || e.type === ct.ACK) && Zr(e) ? this.encodeAsBinary({
      type: e.type === ct.EVENT ? ct.BINARY_EVENT : ct.BINARY_ACK,
      nsp: e.nsp,
      data: e.data,
      id: e.id
    }) : [this.encodeAsString(e)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(e) {
    let n = "" + e.type;
    return (e.type === ct.BINARY_EVENT || e.type === ct.BINARY_ACK) && (n += e.attachments + "-"), e.nsp && e.nsp !== "/" && (n += e.nsp + ","), e.id != null && (n += e.id), e.data != null && (n += JSON.stringify(e.data, this.replacer)), n;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(e) {
    const n = n0(e), i = this.encodeAsString(n.packet), r = n.buffers;
    return r.unshift(i), r;
  }
}
function eu(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
class sl extends It {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(e) {
    super(), this.reviver = e;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(e) {
    let n;
    if (typeof e == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      n = this.decodeString(e);
      const i = n.type === ct.BINARY_EVENT;
      i || n.type === ct.BINARY_ACK ? (n.type = i ? ct.EVENT : ct.ACK, this.reconstructor = new a0(n), n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n);
    } else if (rl(e) || e.base64)
      if (this.reconstructor)
        n = this.reconstructor.takeBinaryData(e), n && (this.reconstructor = null, super.emitReserved("decoded", n));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + e);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(e) {
    let n = 0;
    const i = {
      type: Number(e.charAt(0))
    };
    if (ct[i.type] === void 0)
      throw new Error("unknown packet type " + i.type);
    if (i.type === ct.BINARY_EVENT || i.type === ct.BINARY_ACK) {
      const s = n + 1;
      for (; e.charAt(++n) !== "-" && n != e.length; )
        ;
      const o = e.substring(s, n);
      if (o != Number(o) || e.charAt(n) !== "-")
        throw new Error("Illegal attachments");
      i.attachments = Number(o);
    }
    if (e.charAt(n + 1) === "/") {
      const s = n + 1;
      for (; ++n && !(e.charAt(n) === "," || n === e.length); )
        ;
      i.nsp = e.substring(s, n);
    } else
      i.nsp = "/";
    const r = e.charAt(n + 1);
    if (r !== "" && Number(r) == r) {
      const s = n + 1;
      for (; ++n; ) {
        const o = e.charAt(n);
        if (o == null || Number(o) != o) {
          --n;
          break;
        }
        if (n === e.length)
          break;
      }
      i.id = Number(e.substring(s, n + 1));
    }
    if (e.charAt(++n)) {
      const s = this.tryParse(e.substr(n));
      if (sl.isPayloadValid(i.type, s))
        i.data = s;
      else
        throw new Error("invalid payload");
    }
    return i;
  }
  tryParse(e) {
    try {
      return JSON.parse(e, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(e, n) {
    switch (e) {
      case ct.CONNECT:
        return eu(n);
      case ct.DISCONNECT:
        return n === void 0;
      case ct.CONNECT_ERROR:
        return typeof n == "string" || eu(n);
      case ct.EVENT:
      case ct.BINARY_EVENT:
        return Array.isArray(n) && (typeof n[0] == "number" || typeof n[0] == "string" && r0.indexOf(n[0]) === -1);
      case ct.ACK:
      case ct.BINARY_ACK:
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
class a0 {
  constructor(e) {
    this.packet = e, this.buffers = [], this.reconPack = e;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(e) {
    if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
      const n = i0(this.reconPack, this.buffers);
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
const l0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, Decoder: sl, Encoder: o0, get PacketType() {
  return ct;
}, protocol: s0 }, Symbol.toStringTag, { value: "Module" }));
function xe(t, e, n) {
  return t.on(e, n), function() {
    t.off(e, n);
  };
}
const c0 = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Bh extends It {
  /**
   * `Socket` constructor.
   */
  constructor(e, n, i) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = n, i && i.auth && (this.auth = i.auth), this._opts = Object.assign({}, i), this.io._autoConnect && this.open();
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
    const e = this.io;
    this.subs = [
      xe(e, "open", this.onopen.bind(this)),
      xe(e, "packet", this.onpacket.bind(this)),
      xe(e, "error", this.onerror.bind(this)),
      xe(e, "close", this.onclose.bind(this))
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
  send(...e) {
    return e.unshift("message"), this.emit.apply(this, e), this;
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
  emit(e, ...n) {
    if (c0.hasOwnProperty(e))
      throw new Error('"' + e.toString() + '" is a reserved event name');
    if (n.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(n), this;
    const i = {
      type: ct.EVENT,
      data: n
    };
    if (i.options = {}, i.options.compress = this.flags.compress !== !1, typeof n[n.length - 1] == "function") {
      const o = this.ids++, a = n.pop();
      this._registerAckCallback(o, a), i.id = o;
    }
    const r = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    return this.flags.volatile && (!r || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(i), this.packet(i)) : this.sendBuffer.push(i)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(e, n) {
    var i;
    const r = (i = this.flags.timeout) !== null && i !== void 0 ? i : this._opts.ackTimeout;
    if (r === void 0) {
      this.acks[e] = n;
      return;
    }
    const s = this.io.setTimeoutFn(() => {
      delete this.acks[e];
      for (let o = 0; o < this.sendBuffer.length; o++)
        this.sendBuffer[o].id === e && this.sendBuffer.splice(o, 1);
      n.call(this, new Error("operation has timed out"));
    }, r);
    this.acks[e] = (...o) => {
      this.io.clearTimeoutFn(s), n.apply(this, [null, ...o]);
    };
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
  emitWithAck(e, ...n) {
    const i = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
    return new Promise((r, s) => {
      n.push((o, a) => i ? o ? s(o) : r(a) : r(o)), this.emit(e, ...n);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(e) {
    let n;
    typeof e[e.length - 1] == "function" && (n = e.pop());
    const i = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: e,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    e.push((r, ...s) => i !== this._queue[0] ? void 0 : (r !== null ? i.tryCount > this._opts.retries && (this._queue.shift(), n && n(r)) : (this._queue.shift(), n && n(null, ...s)), i.pending = !1, this._drainQueue())), this._queue.push(i), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(e = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const n = this._queue[0];
    n.pending && !e || (n.pending = !0, n.tryCount++, this.flags = n.flags, this.emit.apply(this, n.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(e) {
    e.nsp = this.nsp, this.io._packet(e);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((e) => {
      this._sendConnectPacket(e);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(e) {
    this.packet({
      type: ct.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, e) : e
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(e) {
    this.connected || this.emitReserved("connect_error", e);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(e, n) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", e, n);
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(e) {
    if (e.nsp === this.nsp)
      switch (e.type) {
        case ct.CONNECT:
          e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case ct.EVENT:
        case ct.BINARY_EVENT:
          this.onevent(e);
          break;
        case ct.ACK:
        case ct.BINARY_ACK:
          this.onack(e);
          break;
        case ct.DISCONNECT:
          this.ondisconnect();
          break;
        case ct.CONNECT_ERROR:
          this.destroy();
          const i = new Error(e.data.message);
          i.data = e.data.data, this.emitReserved("connect_error", i);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(e) {
    const n = e.data || [];
    e.id != null && n.push(this.ack(e.id)), this.connected ? this.emitEvent(n) : this.receiveBuffer.push(Object.freeze(n));
  }
  emitEvent(e) {
    if (this._anyListeners && this._anyListeners.length) {
      const n = this._anyListeners.slice();
      for (const i of n)
        i.apply(this, e);
    }
    super.emit.apply(this, e), this._pid && e.length && typeof e[e.length - 1] == "string" && (this._lastOffset = e[e.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(e) {
    const n = this;
    let i = !1;
    return function(...r) {
      i || (i = !0, n.packet({
        type: ct.ACK,
        id: e,
        data: r
      }));
    };
  }
  /**
   * Called upon a server acknowlegement.
   *
   * @param packet
   * @private
   */
  onack(e) {
    const n = this.acks[e.id];
    typeof n == "function" && (n.apply(this, e.data), delete this.acks[e.id]);
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(e, n) {
    this.id = e, this.recovered = n && this._pid === n, this._pid = n, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((e) => this.emitEvent(e)), this.receiveBuffer = [], this.sendBuffer.forEach((e) => {
      this.notifyOutgoingListeners(e), this.packet(e);
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
    this.subs && (this.subs.forEach((e) => e()), this.subs = void 0), this.io._destroy(this);
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
    return this.connected && this.packet({ type: ct.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
  compress(e) {
    return this.flags.compress = e, this;
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
  timeout(e) {
    return this.flags.timeout = e, this;
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
  onAny(e) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(e), this;
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
  prependAny(e) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(e), this;
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
  offAny(e) {
    if (!this._anyListeners)
      return this;
    if (e) {
      const n = this._anyListeners;
      for (let i = 0; i < n.length; i++)
        if (e === n[i])
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
  onAnyOutgoing(e) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(e), this;
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
  prependAnyOutgoing(e) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(e), this;
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
  offAnyOutgoing(e) {
    if (!this._anyOutgoingListeners)
      return this;
    if (e) {
      const n = this._anyOutgoingListeners;
      for (let i = 0; i < n.length; i++)
        if (e === n[i])
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
  notifyOutgoingListeners(e) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const n = this._anyOutgoingListeners.slice();
      for (const i of n)
        i.apply(this, e.data);
    }
  }
}
function Si(t) {
  t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
}
Si.prototype.duration = function() {
  var t = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e = Math.random(), n = Math.floor(e * this.jitter * t);
    t = Math.floor(e * 10) & 1 ? t + n : t - n;
  }
  return Math.min(t, this.max) | 0;
};
Si.prototype.reset = function() {
  this.attempts = 0;
};
Si.prototype.setMin = function(t) {
  this.ms = t;
};
Si.prototype.setMax = function(t) {
  this.max = t;
};
Si.prototype.setJitter = function(t) {
  this.jitter = t;
};
class ea extends It {
  constructor(e, n) {
    var i;
    super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (n = e, e = void 0), n = n || {}, n.path = n.path || "/socket.io", this.opts = n, Ks(this, n), this.reconnection(n.reconnection !== !1), this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0), this.reconnectionDelay(n.reconnectionDelay || 1e3), this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3), this.randomizationFactor((i = n.randomizationFactor) !== null && i !== void 0 ? i : 0.5), this.backoff = new Si({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(n.timeout == null ? 2e4 : n.timeout), this._readyState = "closed", this.uri = e;
    const r = n.parser || l0;
    this.encoder = new r.Encoder(), this.decoder = new r.Decoder(), this._autoConnect = n.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(e) {
    return arguments.length ? (this._reconnection = !!e, this) : this._reconnection;
  }
  reconnectionAttempts(e) {
    return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this);
  }
  reconnectionDelay(e) {
    var n;
    return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e, (n = this.backoff) === null || n === void 0 || n.setMin(e), this);
  }
  randomizationFactor(e) {
    var n;
    return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e, (n = this.backoff) === null || n === void 0 || n.setJitter(e), this);
  }
  reconnectionDelayMax(e) {
    var n;
    return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, (n = this.backoff) === null || n === void 0 || n.setMax(e), this);
  }
  timeout(e) {
    return arguments.length ? (this._timeout = e, this) : this._timeout;
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
  open(e) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new zh(this.uri, this.opts);
    const n = this.engine, i = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const r = xe(n, "open", function() {
      i.onopen(), e && e();
    }), s = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), e ? e(a) : this.maybeReconnectOnOpen();
    }, o = xe(n, "error", s);
    if (this._timeout !== !1) {
      const a = this._timeout, l = this.setTimeoutFn(() => {
        r(), s(new Error("timeout")), n.close();
      }, a);
      this.opts.autoUnref && l.unref(), this.subs.push(() => {
        this.clearTimeoutFn(l);
      });
    }
    return this.subs.push(r), this.subs.push(o), this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(e) {
    return this.open(e);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const e = this.engine;
    this.subs.push(xe(e, "ping", this.onping.bind(this)), xe(e, "data", this.ondata.bind(this)), xe(e, "error", this.onerror.bind(this)), xe(e, "close", this.onclose.bind(this)), xe(this.decoder, "decoded", this.ondecoded.bind(this)));
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
  ondata(e) {
    try {
      this.decoder.add(e);
    } catch (n) {
      this.onclose("parse error", n);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(e) {
    il(() => {
      this.emitReserved("packet", e);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(e) {
    this.emitReserved("error", e);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(e, n) {
    let i = this.nsps[e];
    return i ? this._autoConnect && !i.active && i.connect() : (i = new Bh(this, e, n), this.nsps[e] = i), i;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(e) {
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
  _packet(e) {
    const n = this.encoder.encode(e);
    for (let i = 0; i < n.length; i++)
      this.engine.write(n[i], e.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((e) => e()), this.subs.length = 0, this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close"), this.engine && this.engine.close();
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
   * Called upon engine close.
   *
   * @private
   */
  onclose(e, n) {
    this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e, n), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const e = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const n = this.backoff.duration();
      this._reconnecting = !0;
      const i = this.setTimeoutFn(() => {
        e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts), !e.skipReconnect && e.open((r) => {
          r ? (e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", r)) : e.onreconnect();
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
    const e = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", e);
  }
}
const Li = {};
function ts(t, e) {
  typeof t == "object" && (e = t, t = void 0), e = e || {};
  const n = Jb(t, e.path || "/socket.io"), i = n.source, r = n.id, s = n.path, o = Li[r] && s in Li[r].nsps, a = e.forceNew || e["force new connection"] || e.multiplex === !1 || o;
  let l;
  return a ? l = new ea(i, e) : (Li[r] || (Li[r] = new ea(i, e)), l = Li[r]), n.query && !e.query && (e.query = n.queryKey), l.socket(n.path, e);
}
Object.assign(ts, {
  Manager: ea,
  Socket: Bh,
  io: ts,
  connect: ts
});
const u0 = 10;
function nu(t) {
  return typeof t < "u" && typeof t == "number";
}
const it = {
  greaterThan(t, e, n = 1e-10) {
    return t - e > n;
  },
  greaterThanOrEqualTo(t, e, n = 1e-10) {
    return t - e >= -n;
  },
  lessThan(t, e, n = 1e-10) {
    return e - t > n;
  },
  lessThanOrEqualTo(t, e, n = 1e-10) {
    return e - t >= -n;
  },
  equalTo(t, e, n = 1e-10) {
    return Math.abs(t - e) < n;
  },
  isNumber: nu,
  round(t) {
    return nu(t) ? t.toFixed(u0) : !1;
  },
  getRandom(t) {
    return Math.floor(Math.random() * t);
  },
  //https://stackoverflow.com/a/37835673/4734460
  getRandomSample(t, e) {
    let n, i = t.length, r;
    const s = i - e, o = [];
    for (; i-- > s; )
      n = this.getRandom(i + 1), r = t[n], t[n] = t[i], t[i] = r, o.push(i), o.push(n);
    const a = t.slice(s);
    for (; e--; )
      i = o.pop(), n = o.pop(), r = t[i], t[i] = t[n], t[n] = r;
    return a;
  }
};
function A(t) {
  return !(t === void 0 || t === null || t === "" || typeof t == "object" && !Object.values(t).length);
}
function f0(t) {
  return t.reduce((e, n) => {
    const i = A(n.q) && typeof n.q == "string" ? parseInt(n.q) : n.q;
    return !isNaN(i) && i > 0 ? e + i : e;
  }, 0);
}
function h0(t) {
  if (!(t != null && t.length))
    return [];
  const e = t.filter((i) => !i.added).map((i) => (i.parentID = i.getParentID(), i)), n = {};
  return e.forEach((i) => {
    n[i.parentID] ? ++n[i.parentID].count : (n[i.parentID] = {}, n[i.parentID].count = 1, n[i.parentID].id = i.parentID, n[i.parentID].name = i != null && i.name ? i.name : i.id, n[i.parentID].l = i.l, n[i.parentID].w = i.w, n[i.parentID].t = i.t, n[i.parentID].material = i.material, n[i.parentID].rot = i.rot);
  }), Object.values(n);
}
function Xs(t) {
  return structuredClone(t);
}
function d0(t) {
  return t != null && t.length ? t.filter((e) => e.used && (e.stack === !1 || typeof e.stack == "number")) : [];
}
function p0(t, e, n = "x") {
  if (!e)
    return !1;
  const i = n === "x" ? "l" : "w";
  return !!(it.greaterThanOrEqualTo(t[n], e[n]) && it.lessThanOrEqualTo(t[n] + t[i], e[n] + e[i]));
}
function iu(t, e, n) {
  if (t === "above")
    return qh(e, n);
  if (t === "right")
    return Uh(e, n);
  if (t === "below")
    return g0(e, n);
  if (t === "left")
    return m0(e, n);
}
function qh(t, e) {
  return e.y === t.getTopPosition() ? it.greaterThanOrEqualTo(e.getRightPosition(!1), t.x) && it.lessThanOrEqualTo(e.getRightPosition(!1), t.getRightPosition(!1)) : !1;
}
function Uh(t, e) {
  return e.x === t.getRightPosition() ? it.greaterThanOrEqualTo(e.getTopPosition(!1), t.y) && it.lessThanOrEqualTo(e.getTopPosition(!1), t.getTopPosition(!1)) : !1;
}
function m0(t, e) {
  return Uh(e, t);
}
function g0(t, e) {
  return qh(e, t);
}
function Wh(t) {
  return t ? (t = t.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^ a-z0-9.,_-]/gim, ""), t.trim()) : null;
}
function Hh(t, e = 50) {
  return t ? (t = t.substring(0, e), t.trim()) : null;
}
class y0 {
  constructor(e) {
    p(this, "x1");
    p(this, "x2");
    p(this, "y1");
    p(this, "y2");
    p(this, "direction");
    p(this, "shapeCollisions");
    this.x1 = e.x1, this.x2 = e.x2, this.y1 = e.y1, this.y2 = e.y2, this.direction = b0(this);
  }
}
function b0(t) {
  return typeof t > "u" || !it.isNumber(t.x1) || !it.isNumber(t.x2) || !it.isNumber(t.y1) || !it.isNumber(t.y2) ? null : t.x1 === t.x2 && t.y1 !== t.y2 ? "w" : t.y1 === t.y2 && t.x1 !== t.x2 ? "l" : null;
}
function v0(t) {
  if (t != null && t.direction)
    switch (t.direction) {
      case "l":
        return t.x2 - t.x1;
      case "w":
        return t.y2 - t.y1;
    }
  switch (t.type) {
    case "top":
    case "bottom":
      return t.x2 - t.x1;
    case "left":
    case "right":
      return t.y2 - t.y1;
  }
  return 0;
}
class Js extends y0 {
  //used to mark for removal
  constructor(n) {
    var i, r, s, o;
    n.x2 < n.x1 && ([n.x1, n.x2] = [n.x2, n.x1]), n.y2 < n.y1 && ([n.y1, n.y2] = [n.y2, n.y1]);
    super(n);
    p(this, "stock");
    p(this, "stockId");
    p(this, "type", null);
    p(this, "guillotine");
    p(this, "guillotineData");
    p(this, "isTrim");
    p(this, "distances");
    p(this, "beamTrimX1");
    p(this, "beamTrimY1");
    p(this, "remove");
    A(n == null ? void 0 : n.stock) && (((r = (i = n.stock) == null ? void 0 : i.constructor) == null ? void 0 : r.name) === "Stock" ? this.stock = n.stock : this.stock = new Wn(n.stock), this.stockId = this.stock.id), this.stockId = (s = n == null ? void 0 : n.stock) == null ? void 0 : s.id, this.type = n.type ?? null, this.guillotine = n.guillotine, this.guillotineData = A(n.guillotineData) ? n.guillotineData : {}, this.guillotineData.ptxDummyCut = (n == null ? void 0 : n.ptxDummyCut) || ((o = n == null ? void 0 : n.guillotineData) == null ? void 0 : o.ptxDummyCut) || !1, this.isTrim = A(n.isTrim) ? n.isTrim : !1, this.distances = A(n.distances) ? n.distances : {}, this.beamTrimX1 = n.beamTrimX1, this.beamTrimY1 = n.beamTrimY1;
  }
  //compress for saving / transfer
  compress() {
    var n;
    this.stockId = (this == null ? void 0 : this.stockId) ?? ((n = this == null ? void 0 : this.stock) == null ? void 0 : n.id), delete this.shapeCollisions, delete this.stock;
  }
  clone() {
    const n = Xs(this);
    return new Js(n);
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
    const r = {
      top: "l",
      bottom: "l",
      left: "w",
      right: "w"
    }[n];
    if (r)
      return r;
    throw new Error("no direction found in lookupDirectionByType");
  }
  isInsideStock() {
    switch (this.type) {
      case "bottom":
        return it.greaterThan(this.y1 + this.stock.getBladeWidth() / 2, 0);
      case "left":
        return it.greaterThan(this.x1 + this.stock.getBladeWidth() / 2, 0);
      case "top":
        return it.lessThan(this.y1 - this.stock.getBladeWidth() / 2, this.stock.w);
      case "right":
        return it.lessThan(this.x1 - this.stock.getBladeWidth() / 2, this.stock.l);
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
    return v0(this);
  }
  getArea() {
    const n = this.getLength();
    return n ? n * this.stock.getBladeWidth() : 0;
  }
}
class Ct {
  constructor(e, n) {
    p(this, "x");
    p(this, "y");
    p(this, "a");
    //shape id
    p(this, "b");
    //shape id
    p(this, "fromDirection");
    p(this, "corner", null);
    p(this, "grid", null);
    p(this, "raycast");
    p(this, "collision");
    p(this, "tooClose");
    this.x = parseFloat(e), this.y = parseFloat(n), this.validate();
  }
  validate() {
    if (isNaN(this.x) || isNaN(this.y))
      throw new Error("invalid point coordinates");
  }
  collidesWith(e) {
    return this.x >= e.x && this.x <= e.x + e.l && this.y >= e.y && this.y <= e.y + e.w;
  }
  isIdenticalTo(e) {
    return this.x === e.x && this.y === e.y;
  }
  //given a grid pont, get the available positions for this shape
  //does not cater for diagonals
  getAvailableShapePositions(e) {
    const n = /* @__PURE__ */ new Set();
    return (e == null ? void 0 : e.cutType) === "guillotine" ? (this.corner === "topLeft" && (this.grid === "top" || !this.grid) && n.add("topRight"), this.corner === "bottomRight" && (this.grid === "right" || !this.grid) && n.add("topRight"), n) : (this.corner === "topRight" && ((this.grid === "top" || !this.grid) && n.add("topLeft"), (this.grid === "right" || !this.grid) && n.add("bottomRight")), this.corner === "topLeft" && ((this.grid === "top" || !this.grid) && n.add("topRight"), (this.grid === "left" || !this.grid) && n.add("bottomLeft")), this.corner === "bottomRight" && ((this.grid === "bottom" || !this.grid) && n.add("bottomLeft"), (this.grid === "right" || !this.grid) && n.add("topRight")), this.corner === "bottomLeft" && ((this.grid === "bottom" || !this.grid) && n.add("bottomRight"), (this.grid === "left" || !this.grid) && n.add("topLeft")), n);
  }
}
class Qs {
  constructor(e = []) {
    p(this, "points", /* @__PURE__ */ new Map());
    e.forEach((n) => this.addPoint(n));
  }
  addPoint(e) {
    if (!(e instanceof Ct))
      throw new Error("p is not an instance of Point");
    this.points.has(this.createKey(e)) || (e.validate(), this.points.set(this.createKey(e), e));
  }
  createKey(e) {
    return `${e.x},${e.y}`;
  }
  getPoint(e) {
    return this.points.get(this.createKey(e));
  }
  addPoints(e) {
    e.forEach((n) => {
      n && (n.validate(), this.addPoint(n));
    });
  }
  deletePoint(e) {
    e.validate(), this.points.delete(this.createKey(e));
  }
  deletePoints(e) {
    e.forEach((n) => {
      n.validate(), this.deletePoint(n);
    });
  }
  clear() {
    this.points.clear();
  }
  toArray() {
    return Array.from(this.points.values());
  }
  contains(e) {
    return this.points.has(this.createKey(e));
  }
}
const an = {
  bottom: (t, e, n) => {
    const i = new Ct(t.x, t.y - n);
    return i.corner = e, i.grid = "bottom", i;
  },
  left: (t, e, n) => {
    const i = new Ct(t.x - n, t.y);
    return i.corner = e, i.grid = "left", i;
  },
  right: (t, e, n) => {
    const i = new Ct(t.x + n, t.y);
    return i.corner = e, i.grid = "right", i;
  },
  top: (t, e, n) => {
    const i = new Ct(t.x, t.y + n);
    return i.corner = e, i.grid = "top", i;
  }
};
function _0(t, e, n, i) {
  var o, a, l, c, u, f;
  const r = new Qs();
  if (n.toArray().sort(Vh).forEach((h) => {
    const d = h.corner;
    if (!i)
      r.addPoint(h);
    else
      switch (d) {
        case "topRight":
          r.addPoint(an.top(h, d, i)), r.addPoint(an.right(h, d, i));
          break;
        case "topLeft":
          r.addPoint(an.top(h, d, i)), r.addPoint(an.left(h, d, i));
          break;
        case "bottomRight":
          r.addPoint(an.bottom(h, d, i)), r.addPoint(an.right(h, d, i));
          break;
        case "bottomLeft":
          r.addPoint(an.bottom(h, d, i)), r.addPoint(an.left(h, d, i));
          break;
      }
    const m = r.toArray();
    if (i)
      for (let v = m.length; v--; ) {
        const _ = m[v];
        n.contains(_) && r.deletePoint(_);
      }
    else
      for (let v = m.length; v--; ) {
        const _ = m[v];
        for (let g = t.length; g--; ) {
          const b = t[g];
          if (_.x === b.x && _.y === b.y) {
            r.deletePoint(_);
            break;
          }
        }
      }
  }), i) {
    const h = /* @__PURE__ */ new Set();
    let d, m, v, _;
    ((o = e == null ? void 0 : e.constructor) == null ? void 0 : o.name) === "Stock" && (e != null && e.trimmed) || ((a = e == null ? void 0 : e.constructor) == null ? void 0 : a.name) === "Segment" ? (d = 0, m = 0, v = e.x + e.l, _ = e.y + e.w) : (d = (l = e == null ? void 0 : e.trim) == null ? void 0 : l.x1, m = (c = e == null ? void 0 : e.trim) == null ? void 0 : c.y1, v = e.l - ((u = e == null ? void 0 : e.trim) == null ? void 0 : u.x2), _ = e.w - ((f = e == null ? void 0 : e.trim) == null ? void 0 : f.y2));
    let g = r.toArray();
    for (let b = g.length; b--; ) {
      const x = g[b];
      (it.lessThan(x.x, d) || it.lessThan(x.y, m) || it.greaterThan(x.x, v) || it.greaterThan(x.y, _)) && g.splice(b, 1);
    }
    r.clear(), r.addPoints(g), h.clear(), g = r.toArray();
    for (let b = g.length; b--; ) {
      const x = g[b];
      for (let S = t.length; S--; ) {
        const C = t[S];
        if (x.collidesWith(C)) {
          r.deletePoint(x);
          break;
        }
      }
    }
  }
  return r;
}
function w0(t, e) {
  const n = new Qs();
  return t.sort(Vh), t.forEach((i) => {
    i.isGroup() ? i.shapes.forEach((r) => {
      n.addPoints(r.getCoords(e));
    }) : n.addPoints(i.getCoords(e));
  }), n;
}
function x0(t = [], e, n) {
  const i = n.getBladeWidth(), r = w0(t === null ? e : t, n);
  return _0(e, n, r, i);
}
function Vh(t, e) {
  return t.y === e.y ? e.x - t.x : e.y - t.y;
}
function k0(t, e, n) {
  const i = new Qs();
  return e.getAvailableShapePositions(n).forEach((s) => {
    switch (s) {
      case "bottomLeft":
        i.addPoint(new Ct(e.x - t.l, e.y - t.w));
        break;
      case "bottomRight":
        i.addPoint(new Ct(e.x, e.y - t.w));
        break;
      case "topLeft":
        i.addPoint(new Ct(e.x - t.l, e.y));
        break;
      case "topRight":
        i.addPoint(new Ct(e.x, e.y));
        break;
    }
  }), S0(t, n, i), i;
}
function S0(t, e, n) {
  var l, c, u, f, h, d;
  let i, r, s, o;
  ((l = e == null ? void 0 : e.constructor) == null ? void 0 : l.name) === "Stock" && (e != null && e.trimmed) || ((c = e == null ? void 0 : e.constructor) == null ? void 0 : c.name) === "Segment" ? (i = 0, r = 0, s = e.x + e.l - t.l, o = e.y + e.w - t.w) : (i = (u = e == null ? void 0 : e.trim) == null ? void 0 : u.x1, r = (f = e == null ? void 0 : e.trim) == null ? void 0 : f.y1, s = e.l - ((h = e == null ? void 0 : e.trim) == null ? void 0 : h.x2) - t.l, o = e.w - ((d = e == null ? void 0 : e.trim) == null ? void 0 : d.y2) - t.w);
  const a = n.toArray();
  for (let m = a.length; m--; ) {
    const v = a[m];
    (it.lessThan(v.x, i) || it.lessThan(v.y, r) || it.greaterThan(v.x, s) || it.greaterThan(v.y, o) || v.x < 0 || v.y < 0) && n.deletePoint(v);
  }
}
/**
* @license Fraction.js v4.3.7 31/08/2023
* https://www.xarg.org/2014/03/rational-numbers-in-javascript/
*
* Copyright (c) 2023, Robert Eisele (robert@raw.org)
* Dual licensed under the MIT or GPL Version 2 licenses.
**/
var E0 = 2e3, V = {
  s: 1,
  n: 0,
  d: 1
};
function We(t, e) {
  if (isNaN(t = parseInt(t, 10)))
    throw es();
  return t * e;
}
function At(t, e) {
  if (e === 0)
    throw ol();
  var n = Object.create(Me.prototype);
  n.s = t < 0 ? -1 : 1, t = t < 0 ? -t : t;
  var i = ii(t, e);
  return n.n = t / i, n.d = e / i, n;
}
function ru(t) {
  for (var e = {}, n = t, i = 2, r = 4; r <= n; ) {
    for (; n % i === 0; )
      n /= i, e[i] = (e[i] || 0) + 1;
    r += 1 + 2 * i++;
  }
  return n !== t ? n > 1 && (e[n] = (e[n] || 0) + 1) : e[t] = (e[t] || 0) + 1, e;
}
var ue = function(t, e) {
  var n = 0, i = 1, r = 1, s = 0, o = 0, a = 0, l = 1, c = 1, u = 0, f = 1, h = 1, d = 1, m = 1e7, v;
  if (t != null)
    if (e !== void 0) {
      if (n = t, i = e, r = n * i, n % 1 !== 0 || i % 1 !== 0)
        throw P0();
    } else
      switch (typeof t) {
        case "object": {
          if ("d" in t && "n" in t)
            n = t.n, i = t.d, "s" in t && (n *= t.s);
          else if (0 in t)
            n = t[0], 1 in t && (i = t[1]);
          else
            throw es();
          r = n * i;
          break;
        }
        case "number": {
          if (t < 0 && (r = t, t = -t), t % 1 === 0)
            n = t;
          else if (t > 0) {
            for (t >= 1 && (c = Math.pow(10, Math.floor(1 + Math.log(t) / Math.LN10)), t /= c); f <= m && d <= m; )
              if (v = (u + h) / (f + d), t === v) {
                f + d <= m ? (n = u + h, i = f + d) : d > f ? (n = h, i = d) : (n = u, i = f);
                break;
              } else
                t > v ? (u += h, f += d) : (h += u, d += f), f > m ? (n = h, i = d) : (n = u, i = f);
            n *= c;
          } else
            (isNaN(t) || isNaN(e)) && (i = n = NaN);
          break;
        }
        case "string": {
          if (f = t.match(/\d+|./g), f === null)
            throw es();
          if (f[u] === "-" ? (r = -1, u++) : f[u] === "+" && u++, f.length === u + 1 ? o = We(f[u++], r) : f[u + 1] === "." || f[u] === "." ? (f[u] !== "." && (s = We(f[u++], r)), u++, (u + 1 === f.length || f[u + 1] === "(" && f[u + 3] === ")" || f[u + 1] === "'" && f[u + 3] === "'") && (o = We(f[u], r), l = Math.pow(10, f[u].length), u++), (f[u] === "(" && f[u + 2] === ")" || f[u] === "'" && f[u + 2] === "'") && (a = We(f[u + 1], r), c = Math.pow(10, f[u + 1].length) - 1, u += 3)) : f[u + 1] === "/" || f[u + 1] === ":" ? (o = We(f[u], r), l = We(f[u + 2], 1), u += 3) : f[u + 3] === "/" && f[u + 1] === " " && (s = We(f[u], r), o = We(f[u + 2], r), l = We(f[u + 4], 1), u += 5), f.length <= u) {
            i = l * c, r = /* void */
            n = a + i * s + c * o;
            break;
          }
        }
        default:
          throw es();
      }
  if (i === 0)
    throw ol();
  V.s = r < 0 ? -1 : 1, V.n = Math.abs(n), V.d = Math.abs(i);
};
function T0(t, e, n) {
  for (var i = 1; e > 0; t = t * t % n, e >>= 1)
    e & 1 && (i = i * t % n);
  return i;
}
function A0(t, e) {
  for (; e % 2 === 0; e /= 2)
    ;
  for (; e % 5 === 0; e /= 5)
    ;
  if (e === 1)
    return 0;
  for (var n = 10 % e, i = 1; n !== 1; i++)
    if (n = n * 10 % e, i > E0)
      return 0;
  return i;
}
function C0(t, e, n) {
  for (var i = 1, r = T0(10, n, e), s = 0; s < 300; s++) {
    if (i === r)
      return s;
    i = i * 10 % e, r = r * 10 % e;
  }
  return 0;
}
function ii(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  for (; ; ) {
    if (t %= e, !t)
      return e;
    if (e %= t, !e)
      return t;
  }
}
function Me(t, e) {
  if (ue(t, e), this instanceof Me)
    t = ii(V.d, V.n), this.s = V.s, this.n = V.n / t, this.d = V.d / t;
  else
    return At(V.s * V.n, V.d);
}
var ol = function() {
  return new Error("Division by Zero");
}, es = function() {
  return new Error("Invalid argument");
}, P0 = function() {
  return new Error("Parameters must be integer");
};
Me.prototype = {
  s: 1,
  n: 0,
  d: 1,
  /**
   * Calculates the absolute value
   *
   * Ex: new Fraction(-4).abs() => 4
   **/
  abs: function() {
    return At(this.n, this.d);
  },
  /**
   * Inverts the sign of the current fraction
   *
   * Ex: new Fraction(-4).neg() => 4
   **/
  neg: function() {
    return At(-this.s * this.n, this.d);
  },
  /**
   * Adds two rational numbers
   *
   * Ex: new Fraction({n: 2, d: 3}).add("14.9") => 467 / 30
   **/
  add: function(t, e) {
    return ue(t, e), At(
      this.s * this.n * V.d + V.s * this.d * V.n,
      this.d * V.d
    );
  },
  /**
   * Subtracts two rational numbers
   *
   * Ex: new Fraction({n: 2, d: 3}).add("14.9") => -427 / 30
   **/
  sub: function(t, e) {
    return ue(t, e), At(
      this.s * this.n * V.d - V.s * this.d * V.n,
      this.d * V.d
    );
  },
  /**
   * Multiplies two rational numbers
   *
   * Ex: new Fraction("-17.(345)").mul(3) => 5776 / 111
   **/
  mul: function(t, e) {
    return ue(t, e), At(
      this.s * V.s * this.n * V.n,
      this.d * V.d
    );
  },
  /**
   * Divides two rational numbers
   *
   * Ex: new Fraction("-17.(345)").inverse().div(3)
   **/
  div: function(t, e) {
    return ue(t, e), At(
      this.s * V.s * this.n * V.d,
      this.d * V.n
    );
  },
  /**
   * Clones the actual object
   *
   * Ex: new Fraction("-17.(345)").clone()
   **/
  clone: function() {
    return At(this.s * this.n, this.d);
  },
  /**
   * Calculates the modulo of two rational numbers - a more precise fmod
   *
   * Ex: new Fraction('4.(3)').mod([7, 8]) => (13/3) % (7/8) = (5/6)
   **/
  mod: function(t, e) {
    if (isNaN(this.n) || isNaN(this.d))
      return new Me(NaN);
    if (t === void 0)
      return At(this.s * this.n % this.d, 1);
    if (ue(t, e), V.n === 0 && this.d === 0)
      throw ol();
    return At(
      this.s * (V.d * this.n) % (V.n * this.d),
      V.d * this.d
    );
  },
  /**
   * Calculates the fractional gcd of two rational numbers
   *
   * Ex: new Fraction(5,8).gcd(3,7) => 1/56
   */
  gcd: function(t, e) {
    return ue(t, e), At(ii(V.n, this.n) * ii(V.d, this.d), V.d * this.d);
  },
  /**
   * Calculates the fractional lcm of two rational numbers
   *
   * Ex: new Fraction(5,8).lcm(3,7) => 15
   */
  lcm: function(t, e) {
    return ue(t, e), V.n === 0 && this.n === 0 ? At(0, 1) : At(V.n * this.n, ii(V.n, this.n) * ii(V.d, this.d));
  },
  /**
   * Calculates the ceil of a rational number
   *
   * Ex: new Fraction('4.(3)').ceil() => (5 / 1)
   **/
  ceil: function(t) {
    return t = Math.pow(10, t || 0), isNaN(this.n) || isNaN(this.d) ? new Me(NaN) : At(Math.ceil(t * this.s * this.n / this.d), t);
  },
  /**
   * Calculates the floor of a rational number
   *
   * Ex: new Fraction('4.(3)').floor() => (4 / 1)
   **/
  floor: function(t) {
    return t = Math.pow(10, t || 0), isNaN(this.n) || isNaN(this.d) ? new Me(NaN) : At(Math.floor(t * this.s * this.n / this.d), t);
  },
  /**
   * Rounds a rational number
   *
   * Ex: new Fraction('4.(3)').round() => (4 / 1)
   **/
  round: function(t) {
    return t = Math.pow(10, t || 0), isNaN(this.n) || isNaN(this.d) ? new Me(NaN) : At(Math.round(t * this.s * this.n / this.d), t);
  },
  /**
   * Rounds a rational number to a multiple of another rational number
   *
   * Ex: new Fraction('0.9').roundTo("1/8") => 7 / 8
   **/
  roundTo: function(t, e) {
    return ue(t, e), At(this.s * Math.round(this.n * V.d / (this.d * V.n)) * V.n, V.d);
  },
  /**
   * Gets the inverse of the fraction, means numerator and denominator are exchanged
   *
   * Ex: new Fraction([-3, 4]).inverse() => -4 / 3
   **/
  inverse: function() {
    return At(this.s * this.d, this.n);
  },
  /**
   * Calculates the fraction to some rational exponent, if possible
   *
   * Ex: new Fraction(-1,2).pow(-3) => -8
   */
  pow: function(t, e) {
    if (ue(t, e), V.d === 1)
      return V.s < 0 ? At(Math.pow(this.s * this.d, V.n), Math.pow(this.n, V.n)) : At(Math.pow(this.s * this.n, V.n), Math.pow(this.d, V.n));
    if (this.s < 0)
      return null;
    var n = ru(this.n), i = ru(this.d), r = 1, s = 1;
    for (var o in n)
      if (o !== "1") {
        if (o === "0") {
          r = 0;
          break;
        }
        if (n[o] *= V.n, n[o] % V.d === 0)
          n[o] /= V.d;
        else
          return null;
        r *= Math.pow(o, n[o]);
      }
    for (var o in i)
      if (o !== "1") {
        if (i[o] *= V.n, i[o] % V.d === 0)
          i[o] /= V.d;
        else
          return null;
        s *= Math.pow(o, i[o]);
      }
    return V.s < 0 ? At(s, r) : At(r, s);
  },
  /**
   * Check if two rational numbers are the same
   *
   * Ex: new Fraction(19.6).equals([98, 5]);
   **/
  equals: function(t, e) {
    return ue(t, e), this.s * this.n * V.d === V.s * V.n * this.d;
  },
  /**
   * Check if two rational numbers are the same
   *
   * Ex: new Fraction(19.6).equals([98, 5]);
   **/
  compare: function(t, e) {
    ue(t, e);
    var n = this.s * this.n * V.d - V.s * V.n * this.d;
    return (0 < n) - (n < 0);
  },
  simplify: function(t) {
    if (isNaN(this.n) || isNaN(this.d))
      return this;
    t = t || 1e-3;
    for (var e = this.abs(), n = e.toContinued(), i = 1; i < n.length; i++) {
      for (var r = At(n[i - 1], 1), s = i - 2; s >= 0; s--)
        r = r.inverse().add(n[s]);
      if (Math.abs(r.sub(e).valueOf()) < t)
        return r.mul(this.s);
    }
    return this;
  },
  /**
   * Check if two rational numbers are divisible
   *
   * Ex: new Fraction(19.6).divisible(1.5);
   */
  divisible: function(t, e) {
    return ue(t, e), !(!(V.n * this.d) || this.n * V.d % (V.n * this.d));
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
  toFraction: function(t) {
    var e, n = "", i = this.n, r = this.d;
    return this.s < 0 && (n += "-"), r === 1 ? n += i : (t && (e = Math.floor(i / r)) > 0 && (n += e, n += " ", i %= r), n += i, n += "/", n += r), n;
  },
  /**
   * Returns a latex representation of a Fraction object
   *
   * Ex: new Fraction("1.'3'").toLatex() => "\frac{4}{3}"
   **/
  toLatex: function(t) {
    var e, n = "", i = this.n, r = this.d;
    return this.s < 0 && (n += "-"), r === 1 ? n += i : (t && (e = Math.floor(i / r)) > 0 && (n += e, i %= r), n += "\\frac{", n += i, n += "}{", n += r, n += "}"), n;
  },
  /**
   * Returns an array of continued fraction elements
   *
   * Ex: new Fraction("7/8").toContinued() => [0,1,7]
   */
  toContinued: function() {
    var t, e = this.n, n = this.d, i = [];
    if (isNaN(e) || isNaN(n))
      return i;
    do
      i.push(Math.floor(e / n)), t = e % n, e = n, n = t;
    while (e !== 1);
    return i;
  },
  /**
   * Creates a string representation of a fraction with all digits
   *
   * Ex: new Fraction("100.'91823'").toString() => "100.(91823)"
   **/
  toString: function(t) {
    var e = this.n, n = this.d;
    if (isNaN(e) || isNaN(n))
      return "NaN";
    t = t || 15;
    var i = A0(e, n), r = C0(e, n, i), s = this.s < 0 ? "-" : "";
    if (s += e / n | 0, e %= n, e *= 10, e && (s += "."), i) {
      for (var o = r; o--; )
        s += e / n | 0, e %= n, e *= 10;
      s += "(";
      for (var o = i; o--; )
        s += e / n | 0, e %= n, e *= 10;
      s += ")";
    } else
      for (var o = t; e && o--; )
        s += e / n | 0, e %= n, e *= 10;
    return s;
  }
};
function W(t, e = "decimal", n = !1) {
  if (!A(t) || !e)
    return null;
  if (e !== "decimal" && e !== "fraction")
    return console.error("incorrect conversion type specified for convertUnit"), null;
  try {
    let i = typeof t == "string" ? t.trim() : t.toString().trim();
    i.startsWith(".") && (i = "0" + i), i.replace(",", ".");
    const r = i.match(/[+-]?\d+(?:[./]?\d+)?/gm);
    let s, o;
    if (r && (s = r.join(" ").replace('"', "")), s != null && s.length && !(s != null && s.includes("/")) && (s = s.replace(" ", ".")), e === "fraction") {
      const l = parseFloat(s);
      Number.isInteger(l) ? o = new Me(s) : o = new Me(l);
    } else
      o = new Me(s);
    const a = 0;
    switch (e) {
      case "fraction":
        return o.toFraction(!0);
      case "decimal":
        return n === !1 || typeof n != "number" ? o.valueOf() : parseFloat(parseFloat(o.round(10)).toFixed(n));
    }
    return a;
  } catch (i) {
    return console.error(i), 0;
  }
}
class na {
  constructor({ x: e, y: n, diameter: i, depth: r = 0, side: s = 0, type: o = null }) {
    p(this, "x");
    p(this, "y");
    p(this, "diameter");
    p(this, "depth");
    p(this, "side");
    p(this, "valid");
    p(this, "type");
    this.x = e, this.y = n, this.diameter = i, this.depth = r, this.side = s, this.type = o;
  }
  getXDrawPosition(e) {
    let n = 0;
    const i = W(this.x);
    if (e.rot) {
      const r = W(this.y);
      n = e.l - r + ("x" in e ? e.x : 0);
    } else
      n = i + ("x" in e ? e.x : 0);
    return n;
  }
  getYDrawPosition(e, n, i) {
    let r = e.rot ? W(this.x) : W(this.y);
    return r += "y" in e ? e.y : 0, n === 1 && i && (r = i.w - r), r;
  }
  shouldShow(e, n) {
    return this.side === n || this.depth === 0 || W(this.depth) >= W(e.t);
  }
  getDistanceToEdge(e) {
    const n = this.x, i = this.y, r = this.diameter / 2, s = W(e.getLongSide()), o = W(e.getShortSide()), a = e.machining.corners.map((m) => m.type ? m.size : 0), l = [
      {
        edge: "left",
        distance: n - r
      },
      {
        edge: "right",
        distance: s - n - r
      },
      {
        edge: "bottom",
        distance: o - i - r
      },
      {
        edge: "top",
        distance: i - r
      }
    ], c = e.machining.corners.map((m, v) => {
      const _ = v === 0 || v === 3, g = v < 2, b = _ ? n : s - n;
      let x = null;
      this.side === 0 ? x = g ? i : o - i : this.side === 1 && (x = g ? o - i : i);
      const S = Math.sqrt(b * b + x * x);
      return {
        c: m,
        distance: S
      };
    }), u = Math.min(...l.map((m) => m.distance)), f = Math.min(...c.map((m) => m.distance)), h = c.findIndex((m) => m.distance === f), d = e.machining.corners[h];
    if (d && d.type === "radius") {
      let m = h === 0 || h === 3 ? 0 : s, v = h < 2 ? 0 : o;
      const _ = h < 2;
      m += h === 0 || h === 3 ? a[h] : -a[h], v += _ ? a[h] : -a[h];
      const b = n - m, x = h < 2;
      let S;
      this.side === 0 ? S = x ? i : o - i : this.side === 1 && (S = x ? o - i : i);
      const C = S - v, I = Math.sqrt(b * b + C * C), G = a[h] - I - r;
      let L = !1;
      return d.index === 0 ? L = n <= m && S <= v : d.index === 1 ? L = n >= m && S <= v : d.index === 2 ? L = n >= m && S >= v : d.index === 3 && (L = n <= m && S >= v), L && G < u ? G : u;
    } else if (d && d.type === "bevel") {
      let m, v, _;
      d.index === 0 ? (m = 1, v = 1, _ = -d.size) : d.index === 1 ? (m = 1, v = -1, _ = -s + d.size) : d.index === 2 ? (m = 1, v = 1, _ = -s - o + d.size) : d.index === 3 && (m = -1, v = 1, _ = -o + d.size);
      const g = d.index === 0 ? 1 : -1, b = (m * n + v * i + _) / Math.sqrt(m * m + v * v) * g - r;
      return b < u ? b : u;
    } else
      return u;
  }
  validate(e, n) {
    const i = [];
    return (!this.x || !this.y || !this.diameter) && i.push({
      index: n,
      message: "X, Y & diameter are all required"
    }), W(this.depth) < 0 && i.push({
      index: n,
      message: "Depth cannot be negative"
    }), "t" in e && W(e.t) > 0 && W(this.depth) > W(e.t) && i.push({
      index: n,
      message: "Depth cannot be greater than part thickness"
    }), (!("t" in e) || !e.t) && W(this.depth) > 0 && i.push({
      index: n,
      message: "Part thickness is not defined"
    }), this.getDistanceToEdge(e) < 0 && i.push({
      index: n,
      message: "Outside of part"
    }), i.length ? this.valid = !1 : this.valid = !0, i;
  }
}
class su {
  constructor({
    position: e = null,
    //from left or bottom
    edge: n = "x1",
    side: i = 0,
    numHoles: r = null,
    diameter: s = 0,
    depth: o = 0,
    distanceFromEdge: a = 0,
    outerSpacing: l,
    hingeLength: c = 0,
    minimumHoleDistance: u = 0,
    positionLimit: f = 0
  }, h) {
    p(this, "position");
    p(this, "edge");
    p(this, "side");
    p(this, "numHoles");
    p(this, "holes", []);
    p(this, "diameter");
    p(this, "depth");
    p(this, "distanceFromEdge");
    p(this, "outerSpacing");
    p(this, "hingeLength");
    p(this, "minimumHoleDistance");
    p(this, "positionLimit");
    p(this, "valid");
    this.position = e, this.edge = n, this.side = i, this.numHoles = r, this.diameter = s, this.depth = o, this.distanceFromEdge = a, this.outerSpacing = l, this.hingeLength = c, this.minimumHoleDistance = u, this.positionLimit = f, h && this.createHoles(h);
  }
  getHoleSpacing() {
    const e = W(this.hingeLength) - W(this.outerSpacing) * 2, n = this.numHoles - 1;
    return e / n;
  }
  getHoleXPosition(e, n) {
    let i = 0;
    const r = this.getHoleSpacing();
    switch (this.edge) {
      case "x1":
        i = this.distanceFromEdge;
        break;
      case "x2":
        i = e.getLongSide() - W(this.distanceFromEdge);
        break;
      case "y1":
      case "y2":
        i = W(this.position) + W(this.outerSpacing) + r * n;
        break;
    }
    return i;
  }
  getHoleYPosition(e, n) {
    let i = 0;
    const r = this.getHoleSpacing();
    switch (this.edge) {
      case "x1":
      case "x2":
        i = W(this.position) + W(this.outerSpacing) + r * n;
        break;
      case "y1":
        i = W(this.distanceFromEdge);
        break;
      case "y2":
        i = e.getShortSide() - W(this.distanceFromEdge);
        break;
    }
    return i;
  }
  createHoles(e) {
    this.holes = [];
    for (let n = 0; n < this.numHoles; n++) {
      const i = new na({
        x: this.getHoleXPosition(e, n),
        y: this.getHoleYPosition(e, n),
        diameter: this.diameter,
        depth: this.depth,
        side: this.side,
        type: "hinge"
      });
      this.holes.push(i);
    }
    return this.holes;
  }
  validate(e, n) {
    const i = [];
    return this.holes.forEach((r, s) => {
      const o = r.validate(e, s).map((a) => (a.index = n, a.message = `Hole ${s + 1}: ${a.message}`, a));
      i.push(...o);
    }), i.length ? this.valid = !1 : this.valid = !0, i;
  }
}
class ou {
  constructor({ type: e = "radius", size: n, index: i }) {
    p(this, "type");
    p(this, "size");
    p(this, "index");
    p(this, "valid");
    this.type = e, this.size = n, this.index = i;
  }
  validate(e, n) {
    const i = e.getShortSide(), r = [];
    if (this.type === null) {
      this.size = null;
      const s = ["a", "b", "c", "d"][this.index];
      e.banding[s] = !1, e.bandingType[s] = "";
    }
    return this.type && W(this.size) <= 0 && r.push({
      index: n,
      message: "Corner size cannot be zero or negative"
    }), this.type && W(this.size) > i / 2 && (this.size = i / 2), r.length ? this.valid = !1 : this.valid = !0, r;
  }
}
let Gh = class {
  //shelfHoles?: ShelfHoles[] = [];
  constructor({ holes: e = [], hingeHoles: n = [], corners: i = [] } = {}) {
    p(this, "holes", []);
    p(this, "corners", []);
    p(this, "hingeHoles", []);
    i && i.length === 4 ? this.corners = i.map((r) => new ou(r)) : [0, 1, 2, 3].forEach((r) => {
      this.corners.push(new ou({
        type: null,
        size: null,
        index: r
      }));
    }), e && (this.holes = e.map((r) => new na(r))), n && (this.hingeHoles = n.map((r) => new su(r)));
  }
  validateEverything(e) {
    const n = this.validate(e, "holes"), i = this.validate(e, "hingeHoles"), r = this.validate(e, "corners");
    e.issues.push(...n.map((s) => `Part ${e.parentID} hole issue: ${s.message}`)), e.issues.push(...i.map((s) => `Part ${e.parentID} hinge hole issue: ${s.message}`)), e.issues.push(...r.map((s) => `Part ${e.parentID} corner issue: ${s.message}`));
  }
  validate(e, n) {
    const i = [];
    return i.push(...this.validateAll(e, n)), i;
  }
  validateAll(e, n) {
    if (!e)
      return [];
    const i = [];
    return this[n].forEach((r, s) => i.push(...r.validate(e, s))), i;
  }
  createHole(e, n, i, r = 0, s = 0) {
    const o = new na({
      x: e,
      y: n,
      diameter: i,
      depth: r,
      side: s
    });
    return this.holes.push(o), o;
  }
  createHingeHoles({ numHoles: e, position: n, diameter: i, depth: r = 0, edge: s = "x1", side: o = 0, distanceFromEdge: a = 0, outerSpacing: l = 0, minimumHoleDistance: c = 0, hingeLength: u = 0 }) {
    const f = new su({
      numHoles: e,
      position: n,
      //from left or bottom
      edge: s,
      side: o,
      diameter: i,
      depth: r,
      distanceFromEdge: a,
      outerSpacing: l,
      minimumHoleDistance: c,
      hingeLength: u
    });
    return this.hingeHoles.push(f), f;
  }
  updateHingeHoles(e) {
    this.hingeHoles.forEach((n) => n.createHoles(e));
  }
  getAllHingeHoles(e) {
    const n = [];
    return this.hingeHoles.forEach((i, r) => {
      i.createHoles(e), i.validate(e, r), n.push(...i.holes);
    }), n;
  }
  getNumHoles() {
    return this.holes.length + this.hingeHoles.reduce((e, n) => e + n.numHoles, 0);
  }
  getNumCorners() {
    return this.corners.filter((e) => e.type !== null).length;
  }
};
function al(t) {
  if (!A(t) || typeof t != "object")
    return {};
  t = Object.assign({}, t);
  for (const [e, n] of Object.entries(t))
    e !== "_id" && e.startsWith("_") && (t[e.substring(1)] = n, delete t[e]);
  return t;
}
function O0(t) {
  return t.map((e) => (delete e.id, new jh(e)));
}
function N0({ stockList: t, removeScores: e = !1, saw: n = null, preventAutoRotation: i = !1, preventGrainRotation: r = !1 }) {
  return !t || !(t != null && t.length) ? [] : t.map((s) => {
    n && (s.saw = n), i && (s.preventAutoRotation = !0), r && (s.preventGrainRotation = !0);
    const o = new Wn(s);
    if (o.issues.length)
      throw new Error(`Issues found when attempting to recreate stock list - ${o.issues.join()}`, { cause: o.issues });
    return e && delete o.algoBenchmark, o;
  });
}
function I0({ shapeList: t, stockList: e, preventAutoRotation: n = !1 }) {
  if (typeof e > "u")
    throw new Error("recreateShapeList requires stockList");
  return !t || !(t != null && t.length) ? [] : t.map((i) => {
    n && (i.preventAutoRotation = !0);
    const r = new fr(i);
    if (r.issues.length)
      throw new Error(`Issues found when attempting to recreate shape list - ${r.issues.join()}`);
    const s = e.find((o) => {
      var a;
      return o.id === (((a = i == null ? void 0 : i.stock) == null ? void 0 : a.id) ?? (i == null ? void 0 : i.stockId));
    });
    return r.stock = s, r;
  });
}
function L0({ cutList: t, stockList: e }) {
  if (typeof e > "u")
    throw new Error("recreateCutList requires stockList");
  return !t || !(t != null && t.length) ? [] : t.map((n) => {
    const i = new Js(n), r = e.find((s) => {
      var o;
      return s.id === (((o = n == null ? void 0 : n.stock) == null ? void 0 : o.id) ?? (n == null ? void 0 : n.stockId));
    });
    return i.stock = r, i;
  });
}
function M0({ segmentList: t, stockList: e }) {
  return !t || !(t != null && t.length) ? [] : t.map((n) => {
    const i = e.find((s) => {
      var o;
      return s.id === (((o = n == null ? void 0 : n.stock) == null ? void 0 : o.id) ?? (n == null ? void 0 : n.stockId));
    });
    return n.stock = i, n.preventAutoRotation = !0, new $0(n);
  });
}
function R0(t = null, e = null, n = null) {
  var r, s, o, a, l, c, u, f, h, d, m, v, _, g, b, x;
  if (!t)
    throw new Error("no container supplied to willItFit");
  if (!e)
    throw new Error("no shape supplied to willItFit");
  const i = e.getGrainRotation(t);
  return A(n) && A(i) && n !== i ? !1 : n !== null ? e.rot == n ? (it.equalTo(e.l, t.l) || it.lessThanOrEqualTo(e.l, t.l - (((s = (r = t == null ? void 0 : t.saw) == null ? void 0 : r.options) == null ? void 0 : s.minSpacing) ?? 0))) && (it.equalTo(e.w, t.w) || it.lessThanOrEqualTo(e.w, t.w - (((a = (o = t == null ? void 0 : t.saw) == null ? void 0 : o.options) == null ? void 0 : a.minSpacing) ?? 0))) : (it.equalTo(e.w, t.l) || it.lessThanOrEqualTo(e.w, t.l - (((c = (l = t == null ? void 0 : t.saw) == null ? void 0 : l.options) == null ? void 0 : c.minSpacing) ?? 0))) && (it.equalTo(e.l, t.w) || it.lessThanOrEqualTo(e.l, t.w - (((f = (u = t == null ? void 0 : t.saw) == null ? void 0 : u.options) == null ? void 0 : f.minSpacing) ?? 0))) : (it.equalTo(e.l, t.l) || it.lessThanOrEqualTo(e.l, t.l - (((d = (h = t == null ? void 0 : t.saw) == null ? void 0 : h.options) == null ? void 0 : d.minSpacing) ?? 0))) && (it.equalTo(e.w, t.w) || it.lessThanOrEqualTo(e.w, t.w - (((v = (m = t == null ? void 0 : t.saw) == null ? void 0 : m.options) == null ? void 0 : v.minSpacing) ?? 0))) || (it.equalTo(e.w, t.l) || it.lessThanOrEqualTo(e.w, t.l - (((g = (_ = t == null ? void 0 : t.saw) == null ? void 0 : _.options) == null ? void 0 : g.minSpacing) ?? 0))) && (it.equalTo(e.l, t.w) || it.lessThanOrEqualTo(e.l, t.w - (((x = (b = t == null ? void 0 : t.saw) == null ? void 0 : b.options) == null ? void 0 : x.minSpacing) ?? 0)));
}
class D0 {
  constructor({ id: e = null, units: n = "decimal", l: i = null, w: r = null, t: s = null, q: o = 1, name: a = "", material: l = "", trim: c = {
    x1: null,
    x2: null,
    y1: null,
    y2: null
  }, cost: u = null, grain: f = "", multiSelect: h = !1, type: d = null, autoAdd: m = !1 }) {
    p(this, "id");
    p(this, "listId");
    p(this, "units");
    p(this, "l");
    p(this, "w");
    p(this, "t");
    p(this, "q");
    p(this, "name");
    p(this, "material");
    p(this, "trim");
    p(this, "cost");
    p(this, "grain");
    p(this, "selected");
    //used for multiple editing
    p(this, "multiSelect");
    //is this the multi-select stock
    p(this, "type");
    p(this, "autoAdd");
    p(this, "used");
    p(this, "saw");
    p(this, "preventGrainRotation");
    A(n) || console.warn("attempting to create InputStock without units"), this.units = n, this.id = e, this.listId = Date.now().toString() + Math.ceil(Math.random() * 1e16), this.l = i ? W(i, this.units) : null, this.w = r ? W(r, this.units) : null, this.t = s ? W(s, this.units) : null, this.q = A(o) ? typeof o == "string" ? parseInt(o) : o : null, this.autoAdd = A(m) ? m : !1, this.name = A(a) ? a.trim().toUpperCase() : "", this.material = A(l) ? l.trim().toUpperCase() : "", this.trim = {
      x1: A(c.x1) ? W(c.x1, this.units) : null,
      x2: A(c.x2) ? W(c.x2, this.units) : null,
      y1: A(c.y1) ? W(c.y1, this.units) : null,
      y2: A(c.y2) ? W(c.y2, this.units) : null
    }, this.cost = A(u) ? u : null, this.grain = A(f) ? f.toLowerCase() : "", this.selected = !1, this.multiSelect = h, this.type = d, this.preventGrainRotation = !0;
  }
  //change the units of the stock
  changeUnits(e) {
    (e === "decimal" || e === "fraction") && (this.units = e, this.l = this.l ? W(this.l, e) : null, this.w = this.w ? W(this.w, e) : null, this.t = this.t ? W(this.t, e) : null, this.trim = {
      x1: this.trim.x1 ? W(this.trim.x1, e) : null,
      x2: this.trim.x2 ? W(this.trim.x2, e) : null,
      y1: this.trim.y1 ? W(this.trim.y1, e) : null,
      y2: this.trim.y1 ? W(this.trim.y2, e) : null
    });
  }
  //change the type of stock
  changeType(e) {
    switch (e !== "sheet" && (this.grain = ""), e) {
      case "linear":
        this.trim.y1 = 0, this.trim.y2 = 0;
        break;
      case "roll":
        this.trim.x1 = 0, this.trim.x2 = 0, this.trim.y1 = 0, this.trim.y2 = 0, this.t = null;
        break;
    }
  }
  //create an id from an index
  createId(e, n = 0) {
    this.id = `${e + 1}.${n}`;
  }
}
class jh {
  constructor({ id: e = null, units: n = "decimal", l: i = null, w: r = null, t: s = null, q: o = 1, name: a = "", banding: l = {
    a: !1,
    b: !1,
    c: !1,
    d: !1,
    x1: !1,
    x2: !1,
    y1: !1,
    y2: !1
  }, bandingType: c = {
    a: "",
    b: "",
    c: "",
    d: "",
    x1: "",
    x2: "",
    y1: "",
    y2: ""
  }, orientationLock: u = "", material: f = "", multiSelect: h = !1, machining: d = null }) {
    p(this, "id");
    p(this, "listId");
    p(this, "units");
    p(this, "l");
    p(this, "w");
    p(this, "t");
    p(this, "q");
    p(this, "name");
    p(this, "material");
    p(this, "trim");
    p(this, "cost");
    p(this, "grain");
    p(this, "banding");
    p(this, "bandingType");
    p(this, "orientationLock");
    p(this, "selectedMaterial");
    p(this, "selected");
    //used for multiple editing
    p(this, "multiSelect");
    //is this the first shape in a multi-select shape
    p(this, "machining");
    A(n) || console.warn("attempting to create InputShape without units"), this.units = n, this.id = e, this.listId = Date.now().toString() + Math.ceil(Math.random() * 1e16), this.l = i ? W(i, this.units) : null, this.w = r ? W(r, this.units) : null, this.t = s ? W(s, this.units) : null, this.q = A(o) ? typeof o == "string" ? parseInt(o) : o : null, this.name = A(a) ? a.trim().toUpperCase() : "", this.material = A(f) ? f.trim().toUpperCase() : "", this.banding = {
      a: A(l.a) ? l.a : !1,
      b: A(l.b) ? l.b : !1,
      c: A(l.c) ? l.c : !1,
      d: A(l.d) ? l.d : !1,
      x1: A(l.x1) ? l.x1 : !1,
      x2: A(l.x2) ? l.x2 : !1,
      y1: A(l.y1) ? l.y1 : !1,
      y2: A(l.y2) ? l.y2 : !1
    }, this.bandingType = {
      a: A(c.a) ? c.a : "",
      b: A(c.b) ? c.b : "",
      c: A(c.c) ? c.c : "",
      d: A(c.d) ? c.d : "",
      x1: A(c.x1) ? c.x1 : "",
      x2: A(c.x2) ? c.x2 : "",
      y1: A(c.y1) ? c.y1 : "",
      y2: A(c.y2) ? c.y2 : ""
    }, this.orientationLock = A(u) ? u.toLowerCase() : "", this.selected = !1, this.multiSelect = h, this.machining = new Gh(d ?? {
      holes: [],
      corners: []
    });
  }
  /**
   * change the units of the shape
   * @param {String} newUnits
   */
  changeUnits(e) {
    (e === "decimal" || e === "fraction") && (this.units = e, this.l = this.l ? W(this.l, e) : null, this.w = this.w ? W(this.w, e) : null, this.t = this.t ? W(this.t, e) : null);
  }
  /**
   * change the type of the stock
   * @param {String} newType
   */
  changeStockType(e) {
    switch (e) {
      case "sheet":
      case "roll":
        this.orientationLock = "", e === "roll" && (this.t = null);
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
  createId(e, n = 0) {
    this.id = `${e + 1}.${n}`;
  }
  getLongSide() {
    return W(this.l) > W(this.w) ? W(this.l) : W(this.w);
  }
  getShortSide() {
    return W(this.l) < W(this.w) ? W(this.l) : W(this.w);
  }
  /**
   * to align with Shape
   * @remarks input shapes are always 0
   */
  get rot() {
    return 0;
  }
}
class hn {
  constructor(e) {
    p(this, "id");
    p(this, "parentID");
    p(this, "name");
    p(this, "x");
    p(this, "y");
    p(this, "l");
    p(this, "w");
    p(this, "t");
    p(this, "q");
    p(this, "material");
    p(this, "grain");
    p(this, "orientationLock");
    p(this, "duplicate");
    p(this, "_trim");
    p(this, "trimmed");
    p(this, "preventAutoRotation");
    p(this, "preventGrainRotation");
    p(this, "units");
    p(this, "issues");
    p(this, "stock");
    p(this, "stockId");
    //used when object is compressed
    p(this, "cost");
    p(this, "offcut");
    var i, r, s, o, a;
    this.issues = [], this.id = A(e.id) ? e.id.toString() : null, this.setParentID(), [
      {
        key: "x",
        default: 0,
        required: !1,
        validate: (l) => !isNaN(l) && l >= 0
      },
      {
        key: "y",
        default: 0,
        required: !1,
        validate: (l) => !isNaN(l) && l >= 0
      },
      {
        key: "l",
        default: null,
        required: !0,
        validate: (l) => !isNaN(l) && l > 0
      },
      {
        key: "w",
        default: 1,
        required: !0,
        validate: (l) => !isNaN(l) && l > 0
      },
      {
        key: "t",
        default: null,
        required: !1,
        validate: (l) => !isNaN(l) && l > 0
      }
    ].forEach((l) => {
      let c = e[l.key];
      if (!A(c))
        return l.required ? this.issues.push(this.createIssue(`${l.key} is required`)) : this[l.key] = l.default;
      typeof c == "string" && (c = W(c)), l.validate(c) || this.issues.push(this.createIssue(`${c ?? "N/A"} is not a valid value for ${l.key}`)), this[l.key] = c;
    }), A(e == null ? void 0 : e.q) ? isNaN(e.q) ? (this.issues.push(this.createIssue(`Quantity is not a number: ${e.q ?? "N/A"}`)), this.q = 0) : e.q < 0 ? (this.issues.push(this.createIssue(`Quantity must be positive: ${typeof e.q == "number" ? e.q : "N/A"}`)), this.q = 0) : Number.isInteger(e.q) ? this.q = e.q : (this.issues.push(this.createIssue(`Quantity must be an integer: ${e.q ?? "N/A"}`)), this.q = 0) : this.q = 0, this.name = A(e.name) && ((i = e == null ? void 0 : e.name) != null && i.length) ? (r = Hh(Wh(e == null ? void 0 : e.name))) == null ? void 0 : r.toUpperCase() : null, (e == null ? void 0 : e.orientationLock) === " " && (e.orientationLock = ""), this.orientationLock = A(e == null ? void 0 : e.orientationLock) && this.l !== this.w ? e.orientationLock.toLowerCase() : null, ["l", "w", null, void 0, ""].includes(e == null ? void 0 : e.grain) ? this.grain = typeof e.grain < "u" && A(e == null ? void 0 : e.grain) ? e.grain.toLowerCase() : null : this.issues.push(this.createIssue(`Grain is not a valid value - ${e.grain ?? "N/A"}`));
    try {
      this.trim = e == null ? void 0 : e.trim;
    } catch (l) {
      if ((s = l == null ? void 0 : l.cause) != null && s.issues)
        this.issues.push(...l.cause.issues);
      else
        throw new Error("error when attempting to set trim");
    }
    this.trimmed = A(e == null ? void 0 : e.trimmed) ? e.trimmed : !1, this.trimmed || this.l && this.w && this.l > 0 && this.w > 0 && (this.trim.x1 + this.trim.x2 >= this.l && this.issues.push(this.createIssue(`Trim W1 + W2 = ${this.trim.x1 + this.trim.x2}, which is greater than or equal to total length: ${this.l}`)), this.trim.y1 + this.trim.y2 >= this.w && this.issues.push(this.createIssue(`Trim L1 + L2 = ${this.trim.y1 + this.trim.y2}, which is greater than or equal to total width: ${this.w}`))), !(e != null && e.preventAutoRotation) && !e.trimmed && this.w > this.l && ([this.l, this.w] = [this.w, this.l], this.grain && !(e != null && e.preventGrainRotation) && (this.grain = this.grain === "l" ? "w" : "l")), this.material = A(e.material) ? e.material.trim().toLowerCase() : null, this.duplicate = A(e == null ? void 0 : e.duplicate) ? e.duplicate : !1, A(e == null ? void 0 : e.stock) && (((a = (o = e.stock) == null ? void 0 : o.constructor) == null ? void 0 : a.name) === "Stock" ? this.stock = e.stock : this.stock = new Wn(e.stock), this.stockId = this.stock.id), A(e == null ? void 0 : e.cost) ? typeof e.cost == "string" ? this.cost = parseFloat(e.cost) : typeof e.cost == "number" && (this.cost = e.cost) : this.cost = 0, this.offcut = A(e == null ? void 0 : e.offcut) ? e.offcut : !1;
  }
  set trim(e) {
    this._trim = {
      x1: 0,
      x2: 0,
      y1: 0,
      y2: 0
    }, A(e) && Object.keys(e).forEach((n) => {
      let i;
      if (typeof e[n] == "string") {
        const r = W(e[n]);
        this instanceof Wn ? isNaN(r) || r < 0 ? (this.issues.push(this.createIssue(`${e[n] ?? "N/A"} is not a valid value for trim: ${n}`)), i = 0) : i = r : isNaN(e[n]) || e[n] < 0 ? (this.issues.push(this.createIssue(`${e[n] ?? "N/A"} is not a valid value for trim: ${n}`)), i = 0) : i = e[n];
      } else
        i = e[n];
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
    return this.id ? this.parentID ? this.parentID : typeof this.id != "number" && this.id.includes(".") ? parseInt(this.id.split(".")[0]) : typeof this.id != "number" && !this.id.includes(".") || isNaN(parseInt(this.id)) ? null : parseInt(this.id) : null;
  }
  isGroup() {
    return this.constructor.name === "Group" && this.userGroup !== !0;
  }
  //user groups are treated like shapes
  isUserGroup() {
    return this.constructor.name === "Group" && this.userGroup === !0;
  }
  isShape() {
    return this.constructor.name === "Shape";
  }
  createIssue(e) {
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
    return `${e} [${n} ${(r = this == null ? void 0 : this.name) != null && r.length ? this.name.toUpperCase() : this.parentID}]`;
  }
  getDimensions() {
    return {
      id: this.id,
      l: this.l,
      w: this.w,
      t: this.t
    };
  }
  getCoordinates() {
    return {
      id: this.id,
      x: this.x,
      y: this.y
    };
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
  getSide(e) {
    switch (e) {
      case "bottom":
        return {
          x1: this.x,
          x2: this.x + this.l,
          y1: this.y,
          y2: this.y,
          type: "bottom",
          parentID: this.id
        };
      case "right":
        return {
          x1: this.x + this.l,
          x2: this.x + this.l,
          y1: this.y,
          y2: this.y + this.w,
          type: "right",
          parentID: this.id
        };
      case "top":
        return {
          x1: this.x,
          x2: this.x + this.l,
          y1: this.y + this.w,
          y2: this.y + this.w,
          type: "top",
          parentID: this.id
        };
      case "left":
        return {
          x1: this.x,
          x2: this.x,
          y1: this.y,
          y2: this.y + this.w,
          type: "left",
          parentID: this.id
        };
    }
  }
  getTopPosition(e = !0, n = null) {
    var i;
    if (e && typeof ((i = this.stock) == null ? void 0 : i.getBladeWidth) > "u" && n === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return e ? this.y + this.w + ((this.stock.getBladeWidth() || n) ?? 0) : this.y + this.w;
  }
  getRightPosition(e = !0, n = null) {
    var i;
    if (e && typeof ((i = this.stock) == null ? void 0 : i.getBladeWidth) > "u" && n === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return e ? this.x + this.l + ((this.stock.getBladeWidth() || n) ?? 0) : this.x + this.l;
  }
  getBottomPosition(e = !0, n = null) {
    var i;
    if (e && typeof ((i = this.stock) == null ? void 0 : i.getBladeWidth) > "u" && n === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return e ? this.y - ((this.stock.getBladeWidth() || n) ?? 0) : this.y;
  }
  getLeftPosition(e = !0, n = null) {
    var i;
    if (e && typeof ((i = this.stock) == null ? void 0 : i.getBladeWidth) > "u" && n === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return e ? this.x - ((this.stock.getBladeWidth() || n) ?? 0) : this.x;
  }
  sharesSide(e, n = 0, i = null) {
    switch (i) {
      case "left":
        return e.x + e.l + n === this.x;
      case "right":
        return e.x === this.x + this.l + n;
      case "bottom":
        return e.y + e.w + n === this.y;
      case "top":
        return e.y === this.y + this.w + n;
    }
    return !1;
  }
  sameSide(e, n = null) {
    switch (n) {
      case "left":
        return e.x === this.x;
      case "right":
        return e.x + e.l === this.x + this.l;
      case "bottom":
        return e.y === this.y;
      case "top":
        return e.y + e.w === this.y + this.w;
    }
    return !1;
  }
  //considers if the shape can rotate
  getLongestDimension(e) {
    return this.orientationLock ? this[e] : this.getLongSide();
  }
  getArea() {
    return this.w * this.l;
  }
  getCoords(e) {
    const n = new Ct(this.x + this.l, this.y);
    n.corner = "bottomRight";
    const i = new Ct(this.x, this.y + this.w);
    if (i.corner = "topLeft", (e == null ? void 0 : e.cutType) === "guillotine")
      return [i, n];
    const r = new Ct(this.x, this.y);
    r.corner = "bottomLeft";
    const s = new Ct(this.x + this.l, this.y + this.w);
    return s.corner = "topRight", [r, i, s, n];
  }
  getCorners() {
    return {
      bottomLeft: new Ct(this.x, this.y),
      topLeft: new Ct(this.x, this.y + this.w),
      topRight: new Ct(this.x + this.l, this.y + this.w),
      bottomRight: new Ct(this.x + this.l, this.y)
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
  /**
   * trim the rectangle
   */
  trimDimensions() {
    var e, n, i, r;
    return this.trimmed ? !1 : (this.trim && Object.values(this.trim).filter((s) => !isNaN(parseFloat(s))).length && (A(this.l) && (this.l -= ((e = this == null ? void 0 : this.trim) != null && e.x1 ? this.trim.x1 : 0) + ((n = this == null ? void 0 : this.trim) != null && n.x2 ? this.trim.x2 : 0), this.l <= 0 && (console.error(this), this.issues.push(this.createIssue("Applying trim has produced a negative length")))), A(this.w) && (this.w -= ((i = this == null ? void 0 : this.trim) != null && i.y1 ? this.trim.y1 : 0) + ((r = this == null ? void 0 : this.trim) != null && r.y2 ? this.trim.y2 : 0), this.w <= 0 && (console.error(this), this.issues.push(this.createIssue("Applying trim has produced a negative width"))))), this.trimmed = !0, !0);
  }
  /**
   * increase the size of the stock to the original size
   */
  removeTrim() {
    var e, n, i, r;
    if (this.trimmed) {
      if (this.l += (typeof ((e = this == null ? void 0 : this.trim) == null ? void 0 : e.x1) == "number" ? this.trim.x1 : 0) + (typeof ((n = this == null ? void 0 : this.trim) == null ? void 0 : n.x2) == "number" ? this.trim.x2 : 0), this.w += (typeof ((i = this == null ? void 0 : this.trim) == null ? void 0 : i.y1) == "number" ? this.trim.y1 : 0) + (typeof ((r = this == null ? void 0 : this.trim) == null ? void 0 : r.y2) == "number" ? this.trim.y2 : 0), this.l <= 0)
        throw new Error(`trimming this ${this.id} has produced a negative length`);
      if (this.w <= 0)
        throw new Error(`trimming this ${this.id} has produced a negative width`);
    }
    this.trimmed = !1;
  }
  /**
   * is this rectangle identical to another
   */
  isIdentical(e) {
    var n, i, r, s, o, a, l, c;
    if (this.getClass() !== e.getClass())
      return !1;
    if (this.getClass() !== "Group") {
      if (e.getParentID() === this.getParentID())
        return !0;
    } else if (e.id === this.id)
      return !0;
    return (this.t === e.t && e.w === this.w && e.l === this.l || e.l === this.w && e.w === this.l) && e.orientationLock === this.orientationLock && ((n = this == null ? void 0 : this.trim) == null ? void 0 : n.x1) === ((i = e == null ? void 0 : e.trim) == null ? void 0 : i.x1) && ((r = this == null ? void 0 : this.trim) == null ? void 0 : r.x2) === ((s = e == null ? void 0 : e.trim) == null ? void 0 : s.x2) && ((o = this == null ? void 0 : this.trim) == null ? void 0 : o.y1) === ((a = e == null ? void 0 : e.trim) == null ? void 0 : a.y1) && ((l = this == null ? void 0 : this.trim) == null ? void 0 : l.y2) === ((c = e == null ? void 0 : e.trim) == null ? void 0 : c.y2);
  }
  /**
   * is this rectangle a square
   */
  isSquare() {
    return this.l === this.w;
  }
  getDistancesToContainerEdges(e) {
    return [
      this.x - e.x,
      e.l - (this.x + this.l),
      e.w - (this.y + this.w),
      this.y - e.y
    ];
  }
  isTooCloseToEdges(e) {
    var n, i;
    return (i = (n = e.saw) == null ? void 0 : n.options) != null && i.minSpacing ? this.getDistancesToContainerEdges(e).some((r) => {
      var s, o;
      return r > 0 && r <= ((o = (s = e.saw) == null ? void 0 : s.options) == null ? void 0 : o.minSpacing);
    }) : !1;
  }
  isInsideStock(e) {
    return !(this.x + this.l > e.l || this.y + this.w > e.w || this.x < 0 || this.y < 0);
  }
  //create rectangles used to detect proximity to other shapes
  createProximityRectangles(e, n = null, i = !0) {
    let r;
    i && n ? r = n.getBladeWidth() : r = 0;
    let s, o, a, l;
    return (n === null || this.y + this.w < n.w) && (s = new hn({
      name: "top",
      id: "p-" + this.id + "-" + this.constructor.name,
      x: this.x,
      y: this.y + this.w + r,
      l: this.l,
      w: e,
      preventAutoRotation: !0
    })), (n === null || this.y > 0) && (o = new hn({
      name: "bottom",
      id: "p-" + this.id + "-" + this.constructor.name,
      x: this.x,
      y: this.y - e - r,
      l: this.l,
      w: e,
      preventAutoRotation: !0
    })), (n === null || this.x > 0) && (a = new hn({
      name: "left",
      id: "p-" + this.id + "-" + this.constructor.name,
      x: this.x - e - r,
      y: this.y,
      l: e,
      w: this.w,
      preventAutoRotation: !0
    })), (n === null || this.x + this.l < n.l) && (l = new hn({
      name: "right",
      id: "p-" + this.id + "-" + this.constructor.name,
      x: this.x + this.l + r,
      y: this.y,
      l: e,
      w: this.w,
      preventAutoRotation: !0
    })), [a, l, o, s].filter((c) => c);
  }
}
class Yh extends hn {
  //the winning cut preference if flex is used by saw
  constructor(n) {
    super(n);
    p(this, "type");
    p(this, "saw");
    p(this, "flex");
    switch (["sheet", "linear", "roll", null, void 0, ""].includes(n.type) ? this.type = n.type : this.issues.push(`Container type ${n.type ?? "N/A"} is not valid`), this.type || (this.type = "sheet"), this != null && this.isSegment() ? this.setSaw(n == null ? void 0 : n.stock) : this.setSaw(n), this.cutType) {
      case "beam":
        (!A(this.t) || this.t <= 0) && this.issues.push(this.createIssue("Stock for beam saws must have a thickness set"));
        break;
    }
    A(n.flex) && (this.flex = n.flex);
  }
  setSaw(n) {
    var i, r, s, o;
    if (A(n) || (this.saw = new gn(null)), A(n == null ? void 0 : n.saw)) {
      if (!((r = n == null ? void 0 : n.saw) != null && r.cutType)) {
        const { cutType: a, cutPreference: l } = ia(n.saw.cutPreference);
        n.saw.cutType = a, n.saw.cutPreference = l;
      }
    } else {
      n.saw = {};
      const { cutType: a, cutPreference: l } = ia(n.cutPreference);
      n.saw.cutType = a, n.saw.cutPreference = l, A(n == null ? void 0 : n.bladeWidth) && (n.saw.bladeWidth = n.bladeWidth), A((i = n == null ? void 0 : n.blade) == null ? void 0 : i.width) && (n.saw.bladeWidth = n.blade.width), A(n == null ? void 0 : n.efficiencyOptions) && (n.saw.efficiencyOptions = n.efficiencyOptions), A(n == null ? void 0 : n.guillotineOptions) && (n.saw.guillotineOptions = n.guillotineOptions), A(n == null ? void 0 : n.stackHeight) && (n.saw.stackHeight = n.stackHeight);
    }
    try {
      this.saw = A(n == null ? void 0 : n.saw) ? new gn(n.saw, this.type) : new gn(null, this.type), (o = (s = this.saw) == null ? void 0 : s.issues) != null && o.length && this.issues.push(...this.saw.issues);
    } catch (a) {
      throw new Error("error creating saw", { cause: a });
    }
  }
  get cutType() {
    var n, i, r, s;
    return A((n = this == null ? void 0 : this.saw) == null ? void 0 : n.cutType) ? this.saw.cutType : (i = this.stock) != null && i.isStock() ? null : ((s = (r = this == null ? void 0 : this.stock) == null ? void 0 : r.saw) == null ? void 0 : s.cutType) ?? null;
  }
  get cutPreference() {
    var n, i, r, s;
    return A(this.flex) ? this.flex : A((n = this.saw) == null ? void 0 : n.cutPreference) ? this.saw.cutPreference : (i = this.stock) != null && i.isStock() ? null : ((s = (r = this.stock) == null ? void 0 : r.saw) == null ? void 0 : s.cutPreference) ?? null;
  }
  get guillotineOptions() {
    var n, i, r, s;
    return A((n = this.saw) == null ? void 0 : n.guillotineOptions) ? this.saw.guillotineOptions : (i = this.stock) != null && i.isStock() ? null : ((s = (r = this == null ? void 0 : this.stock) == null ? void 0 : r.saw) == null ? void 0 : s.guillotineOptions) ?? null;
  }
  get efficiencyOptions() {
    var n, i, r, s;
    return A((n = this.saw) == null ? void 0 : n.efficiencyOptions) ? this.saw.efficiencyOptions : (i = this.stock) != null && i.isStock() ? null : ((s = (r = this == null ? void 0 : this.stock) == null ? void 0 : r.saw) == null ? void 0 : s.efficiencyOptions) ?? null;
  }
  getHalfBladeWidth() {
    const n = this.getBladeWidth();
    return n ? n / 2 : 0;
  }
  getBladeWidth() {
    var i, r, s;
    const n = (((i = this == null ? void 0 : this.saw) == null ? void 0 : i.bladeWidth) || ((s = (r = this == null ? void 0 : this.stock) == null ? void 0 : r.saw) == null ? void 0 : s.bladeWidth)) ?? 0;
    return isNaN(n) ? 0 : n;
  }
  getStock() {
    return this != null && this.stock ? this.stock : this;
  }
  getAspect() {
    return this.l > this.w ? this.w / this.l : this.l / this.w;
  }
  isSegment() {
    return this.constructor.name === "Segment";
  }
  isStock() {
    return this.constructor.name === "Stock";
  }
}
function ia(t) {
  let e, n;
  switch (t) {
    case "l":
    case "length":
      e = "guillotine", n = "l";
      break;
    case "w":
    case "width":
      e = "guillotine", n = "w";
      break;
    case "flex":
      e = "guillotine", n = "flex";
      break;
    case "efficiency":
      e = "efficiency", n = null;
      break;
    case "beam":
      e = "beam", n = "l";
      break;
    default:
      e = null, n = null;
      break;
  }
  return {
    cutPreference: n,
    cutType: e
  };
}
class gn {
  constructor(e, n = "sheet") {
    p(this, "issues");
    p(this, "bladeWidth");
    p(this, "cutType");
    p(this, "cutPreference");
    p(this, "guillotineOptions");
    p(this, "efficiencyOptions");
    p(this, "stackHeight");
    p(this, "stockType");
    p(this, "options");
    switch (e = al(e), this.issues = [], this.options = (e == null ? void 0 : e.options) ?? null, this.stackHeight = (e == null ? void 0 : e.stackHeight) ?? null, this.stockType = (e == null ? void 0 : e.stockType) ?? n, ["sheet", "linear", "roll"].includes(this.stockType) || this.issues.push(`Saw stock type: ${this.stockType} not valid`), this.stockType || (this.stockType = "sheet"), this.cutType = e == null ? void 0 : e.cutType, this.stockType) {
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
        [null, void 0].includes(this.cutType) || this.issues.push(`Saw cut type: ${this.cutType} not valid for stock type: ${this.stockType}`);
        break;
    }
    switch (this.cutPreference = e == null ? void 0 : e.cutPreference, this.cutType) {
      case "guillotine":
        ["l", "w", "flex"].includes(this.cutPreference) || this.issues.push(`Saw cut preference: ${this.cutPreference} not valid for cut type: ${this.cutType}`), this.cutType === "guillotine" && this.cutPreference === "l" && this.stockType === "roll" && this.issues.push(`Cut preference: ${this.cutPreference} not valid for cut type: ${this.cutType} and stock type: ${this.stockType}`);
        break;
      case "beam":
        ["l", null, void 0].includes(this.cutPreference) || this.issues.push(`Saw cut preference: ${this.cutPreference} not valid for cut type: ${this.cutType}`);
        break;
      default:
        [null, void 0].includes(this.cutPreference) || this.issues.push(`Saw cut preference: ${this.cutPreference} not valid for cut type: ${this.cutType}`);
        break;
    }
    switch (A(e == null ? void 0 : e.bladeWidth) ? typeof e.bladeWidth == "string" ? this.bladeWidth = W(e.bladeWidth) : this.bladeWidth = e.bladeWidth : this.bladeWidth = 0, (isNaN(this.bladeWidth) || this.bladeWidth < 0) && (this.issues.push(`Blade width: ${this.bladeWidth ?? "N/A"} is not valid`), this.bladeWidth = 0), this.stockType) {
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
        this.efficiencyOptions = A(e == null ? void 0 : e.efficiencyOptions) ? e.efficiencyOptions : { primaryCompression: "y" };
        break;
      case "guillotine":
        this.guillotineOptions = A(e == null ? void 0 : e.guillotineOptions) ? e.guillotineOptions : { strategy: "efficiency" };
        break;
      case "beam":
        this.guillotineOptions = A(e == null ? void 0 : e.guillotineOptions) ? e.guillotineOptions : { strategy: "efficiency" }, this.cutPreference = "l", [null, void 0].includes(this.stackHeight) && this.issues.push("Beam saws require a stack height to be set");
        break;
    }
  }
  clone() {
    const e = Xs(this);
    return new gn(e);
  }
}
class Wn extends Yh {
  //used by stock matching
  constructor(n) {
    n = al(n), n.preventAutoRotation = (n == null ? void 0 : n.type) === "roll";
    super(n);
    p(this, "_id");
    //used for mongo
    p(this, "autoAdd");
    p(this, "allowExactFitShapes");
    p(this, "analysis");
    p(this, "tidy");
    p(this, "used");
    p(this, "stack");
    p(this, "winningStrategy");
    //used for reporting
    p(this, "algoBenchmark");
    //used by evo
    p(this, "unusable");
    delete this.stock, this._id = n == null ? void 0 : n._id, this.autoAdd = A(n == null ? void 0 : n.autoAdd) ? n.autoAdd : !1, this.autoAdd && (this.q = 1), this.allowExactFitShapes = A(n == null ? void 0 : n.allowExactFitShapes) ? n.allowExactFitShapes : !1, this.analysis = A(n.analysis) ? n.analysis : null, this.tidy = A(n == null ? void 0 : n.tidy) ? n.tidy : !1, this.algoBenchmark = null, this.used = A(n == null ? void 0 : n.used) ? n.used : !1, this.stack = A(n == null ? void 0 : n.stack) ? n.stack : !1, this.initStock();
  }
  initStock() {
    switch (this.type) {
      case "linear":
      case "roll":
        this.trim.y1 = 0, this.trim.y2 = 0, this.grain = null;
        break;
    }
  }
  /**
   * compress for saving / transfer
   */
  compress() {
    var n;
    delete this.tidy, this == null || delete this.algoBenchmark, this.stack = typeof this.stack == "number" || this.stack === !1 ? this.stack : (n = this.stack) == null ? void 0 : n.id, !this.trim.x1 && !this.trim.x2 && !this.trim.y1 && !this.trim.y2 && (this.trim = null);
  }
  resetStrategies() {
    this.algoBenchmark = null;
  }
  isIdentical(n) {
    let i = !1, r = !1, s = !1, o = !1;
    if (this.material === n.material && (i = !0), this.t === n.t && (r = !0), this.l === n.l && (s = !0), this.w === n.w && (o = !0), i && r && s && o)
      return !0;
  }
  clone(n = null) {
    const i = this.id.split(".");
    n ? i.pop() : (n = parseInt(i.pop()), n++), i.push(n.toString());
    const r = i.join("."), s = Xs(this);
    return s.id = r, s.used = !1, s.duplicate = !0, s.stack = !1, s.saw = this.saw, new Wn(s);
  }
}
class F0 extends hn {
  constructor(n) {
    super(n);
    p(this, "addToInventory");
    //for front end selection
    p(this, "added");
    //for adding to inputStock
    p(this, "placementOrder");
    p(this, "flex");
    this.cost = this.getCost(), this.addToInventory = (n == null ? void 0 : n.addToInventory) ?? !0, this.added = !1, this.placementOrder = (n == null ? void 0 : n.placementOrder) ?? null, this.offcut = !0;
  }
  compress() {
    var n;
    this.stockId = (this == null ? void 0 : this.stockId) ?? ((n = this == null ? void 0 : this.stock) == null ? void 0 : n.id), delete this._trim, delete this.trimmed;
  }
  getCost() {
    var n;
    return (n = this.stock) != null && n.isStock() && this.stock ? parseFloat((this.getArea() / this.stock.getArea() * this.stock.cost).toFixed(2)) : 0;
  }
}
function z0({ offcuts: t, stockList: e, preventAutoRotation: n = !0 }) {
  return !t || !(t != null && t.length) ? [] : t.map((i) => {
    const r = e.find((o) => {
      var a;
      return o.id === (((a = i == null ? void 0 : i.stock) == null ? void 0 : a.id) ?? (i == null ? void 0 : i.stockId));
    });
    return i.stock = r, n && (i.preventAutoRotation = !0), new F0(i);
  });
}
class fr extends hn {
  constructor(n) {
    n = al(n);
    super(n);
    p(this, "added");
    p(this, "guillotineData");
    p(this, "_banding");
    p(this, "_bandingType");
    p(this, "stockLock");
    p(this, "score");
    p(this, "bestScore");
    p(this, "placementOrder");
    //groups
    p(this, "groupPlacementOrder");
    p(this, "group");
    p(this, "groupID");
    p(this, "inGroup");
    //is the shape currently part of at least one group
    p(this, "addedAsGroup");
    //user groups
    p(this, "userGroupX");
    p(this, "userGroupY");
    p(this, "stripShape");
    p(this, "isFirstShape");
    p(this, "firstShapeSampleRotations", []);
    //used for setting the rotation of the first shape (guillotine)
    p(this, "dimension");
    //used for apex shapes
    p(this, "subsetUsed");
    p(this, "index");
    //used for ptx
    p(this, "stackedMatch");
    //used for stack detection
    p(this, "stockMatch");
    p(this, "machining");
    p(this, "weighting");
    this.added = A(n == null ? void 0 : n.added) ? n.added : !1, this.guillotineData = n == null ? void 0 : n.guillotineData, ["l", "w", "", null, void 0].includes(n.orientationLock) || (this.issues.push(this.createIssue(`Invalid orientation lock value: ${n.orientationLock}`)), n.orientationLock = null), this.banding = n == null ? void 0 : n.banding, this.bandingType = n == null ? void 0 : n.bandingType, A(n == null ? void 0 : n.stockLock) ? Array.isArray(n == null ? void 0 : n.stockLock) ? this.stockLock = n.stockLock : this.stockLock = [n.stockLock] : this.stockLock = [], this.inGroup = A(n == null ? void 0 : n.inGroup) ? n.inGroup : !1, this.addedAsGroup = A(n == null ? void 0 : n.addedAsGroup) ? n.addedAsGroup : !1, this.userGroupX = A(n == null ? void 0 : n.userGroupX) ? n.userGroupX : null, this.userGroupY = A(n == null ? void 0 : n.userGroupY) ? n.userGroupY : null, this.groupID = A(n == null ? void 0 : n.groupID) ? n.groupID : null, this.score = A(n == null ? void 0 : n.score) ? n.score : null, this.bestScore = A(n == null ? void 0 : n.bestScore) ? n.bestScore : {
      x: 0,
      y: 0,
      rot: null,
      total: null,
      group: null
    }, this.placementOrder = A(n == null ? void 0 : n.placementOrder) ? n.placementOrder : null, this.groupPlacementOrder = A(n == null ? void 0 : n.groupPlacementOrder) ? n.groupPlacementOrder : null, this.machining = A(n == null ? void 0 : n.machining) ? new Gh(n.machining) : null, this.machining && this.machining.validateEverything(this);
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
    }, A(n) && Object.keys(n).forEach((i) => this._banding[i] = A(n == null ? void 0 : n[i]) ? n[i] : !1);
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
    }, !!A(n)) {
      Object.keys(n).forEach((i) => this._bandingType[i] = A(n[i]) ? Hh(Wh(n[i])) : "");
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
  compress() {
    var n, i, r;
    delete this.group, this == null || delete this.stripShape, this.stockId = (n = this == null ? void 0 : this.stock) == null ? void 0 : n.id, delete this.stock, delete this.score, delete this.bestScore, !this._banding.x1 && !this._banding.x2 && !this._banding.y1 && !this._banding.y2 && (this._banding = null), !this._bandingType.x1 && !this._bandingType.x2 && !this._bandingType.y1 && !this._bandingType.y2 && (this._bandingType = null), (i = this.guillotineData) == null || delete i.myStripShape, (r = this.guillotineData) == null || delete r.mySecondaryStripShape, delete this.score, delete this.inGroup, delete this.groupID, delete this.addedAsGroup;
  }
  isExactFit(n) {
    return this.orientationLock === "w" && this.w === n.w || this.orientationLock === "l" && this.l === n.l || !this.orientationLock && (this.w === n.w || this.l === n.l);
  }
  addToStock(n) {
    this.stock = n, this.added = !0, this.inGroup = !1, n.used = !0, this.grain = n.grain, n != null && n.grain && this.rot && (this.grain = n.grain === "l" ? "w" : "l");
  }
  removeFromStock() {
    this.placementOrder = null, this.stock = null, this.added = !1;
  }
  resetPosition() {
    this.x = 0, this.y = 0, this.placementOrder = null, this.guillotineData = {};
  }
  resetScore() {
    this.score = null, this.guillotineData = {};
  }
  setBestScore(n) {
    const i = {
      x: n.x,
      y: n.y,
      rot: n.rot,
      total: n.score.total,
      score: n.score,
      group: n.group,
      weighting: null
    };
    this.bestScore = i;
  }
  resetBestScore() {
    const n = {
      x: 0,
      y: 0,
      rot: null,
      total: null,
      group: null
    };
    this.bestScore = n, this.guillotineData = {};
  }
  resetBothScores() {
    this.resetBestScore(), this.resetScore(), this.placementOrder = null;
  }
  reset(n = !1) {
    this.removeFromStock(), n || this.resetBothScores(), this.resetPosition(), this.setRotation(0), this.guillotineData = {}, this.placementOrder = null, this == null || delete this.isFirstShape, this.stackedMatch = !1, this.subsetUsed = !1, this.isFirstShape = !1, this.group && this.group.destroy(), this.addedAsGroup = !1, this.groupID = null, this.group = null, this.inGroup = !1, this.groupPlacementOrder = null;
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
    for (let r = 0; r <= 1; r++)
      this.canRotate(r, n) && this.willItFit(n, r) && i.push(r);
    return i;
  }
  //check if the shape can rotate
  canRotate(n = null, i = null) {
    if (!A(n))
      throw new Error("no rotation provided to canRotate");
    if (n === !0 && (n = 1), n === !1 && (n = 0), this.isSquare() && n || i && !this.willItFit(i, n))
      return !1;
    const r = this.getOrientationLock(i);
    return !(r === "l" && n || r === "w" && !n);
  }
  //get the orientation lock catering for container grain
  convertShapeGrainToOrientationLock(n) {
    return A(this.orientationLock) ? A(n == null ? void 0 : n.grain) ? this.orientationLock === n.grain ? "l" : "w" : this.orientationLock : null;
  }
  /**
   * get the orientation lock catering for container grain
   */
  getOrientationLock(n) {
    return A(this.orientationLock) ? !n || this.isGroup() ? A(this.orientationLock) ? this.orientationLock : null : this.convertShapeGrainToOrientationLock(n) : null;
  }
  /**
   * get the required grain rotation
   */
  getGrainRotation(n) {
    return !A(this.orientationLock) || !A(n == null ? void 0 : n.grain) ? null : this.isGroup() ? this.orientationLock === "l" ? 0 : 1 : this.orientationLock === (n == null ? void 0 : n.grain) ? 0 : 1;
  }
  rotate(n = null, i = null) {
    return n === null && (n = !this.rot), this.canRotate(n, i) ? (this.rot === n || ([this.l, this.w] = [this.w, this.l]), !0) : !1;
  }
  //rotates the shape if allowed
  setRotation(n = null, i = null) {
    return n ? n = 1 : n = 0, i && n && !this.willItFit(i, n) ? !1 : this.rotate(n, i);
  }
  getBandingLength(n) {
    if (n === "x1" || n === "x2")
      return this.getShortSide();
    if (n === "y1" || n === "y2")
      return this.getLongSide();
  }
  getPerimeterCutVectors() {
    var r;
    const n = (r = this.stock) != null && r.isStock() ? this.stock.getBladeWidth() / 2 : null;
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
  getTrimmedDimensions() {
    return this.trimmed ? {
      l: this.l,
      w: this.w
    } : {
      l: this.l - this.trim.x1 - this.trim.x2,
      w: this.w - this.trim.y1 - this.trim.y2
    };
  }
  /**
   * create cuts around the perimeter of a shape
   * @param {Stock} stock
   * @returns {Array} cuts
   */
  createPerimeterCuts(n = null) {
    let i = [];
    if (n = n || this.stock, !n)
      throw new Error("stock is required to create a cut");
    return this.getPerimeterCutVectors().forEach((s) => {
      var o;
      return i.push(new Js({
        stock: (o = this.stock) != null && o.isStock() ? this.stock : n,
        x1: s.x1,
        x2: s.x2,
        y1: s.y1,
        y2: s.y2,
        type: s.type
      }));
    }), i = i.filter((s) => s.isInsideStock()), i;
  }
  createOffset(n) {
    if (!this.stock)
      throw new Error("createOffset - stock not defined");
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
    return R0(n, this, i);
  }
  clone(n = null) {
    const i = this.id.split(".");
    n ? i.pop() : (n = i.pop(), n++), i.push(n);
    const r = i.join("."), s = Xs(this);
    return s.id = r, s.added = !1, s.duplicate = !0, delete s.score, delete s.bestScore, delete s.stock, delete s.placementOrder, delete s.inGroup, delete s.addedAsGroup, delete s.groupID, delete s.isFirstShape, new fr(s);
  }
}
class $0 extends Yh {
  constructor(n) {
    var i, r;
    if (it.lessThanOrEqualTo(n.w, 0) || it.lessThanOrEqualTo(n.l, 0))
      throw new Error(`tried to create segment with zero / negative dimension - l: ${n.l}, w: ${n.w}`);
    if (it.lessThan(n.x, 0) || it.lessThan(n.y, 0))
      throw new Error(`tried to create segment with a negative position - x: ${n == null ? void 0 : n.x}, y: ${n == null ? void 0 : n.y}`);
    if (n != null && n.stock && (it.greaterThan(n.x + n.l, n.stock.l) || it.greaterThan(n.y + n.w, n.stock.w)))
      throw new Error(`tried to create segment outside of the stock - x: ${n.x}, y: ${n.y}, l: ${n.l}, w: ${n.w}, sl: ${(i = n == null ? void 0 : n.stock) == null ? void 0 : i.l}, sw: ${(r = n == null ? void 0 : n.stock) == null ? void 0 : r.w}`);
    n.preventAutoRotation = !0;
    super(n);
    p(this, "shapes");
    p(this, "cuts");
    p(this, "phase");
    p(this, "merged");
    p(this, "children");
    p(this, "siblings");
    //used by vis only
    p(this, "parent");
    p(this, "segmentType");
    p(this, "completed");
    //used by vis only
    p(this, "rowSegment");
    //used by cuts
    p(this, "placementOrder");
    p(this, "hasBeamTrim");
    delete this.trim, delete this.trimmed, this.shapes = A(n == null ? void 0 : n.shapes) ? n.shapes : [], this.cuts = [], this.phase = A(n == null ? void 0 : n.phase) ? n.phase : null, this.merged = A(n == null ? void 0 : n.merged) ? n.merged : !1, this.parent = A(n == null ? void 0 : n.parent) ? n.parent : null, this.children = A(n == null ? void 0 : n.children) ? n.children : [], this.siblings = A(n == null ? void 0 : n.siblings) ? n.siblings : [], this.offcut = A(n == null ? void 0 : n.offcut) ? n.offcut : !1, this.segmentType = A(n == null ? void 0 : n.segmentType) ? n.segmentType : null, this.placementOrder = null, this.flex = this.stock.flex, this.hasBeamTrim = A(n == null ? void 0 : n.hasBeamTrim) ? n.hasBeamTrim : !1;
  }
  //compress for saving / transfer
  compress() {
    var n;
    this.children = this.children.map((i) => ({
      id: i.id,
      x: i.x,
      y: i.y,
      l: i.l,
      w: i.w,
      offcut: i.offcut
    })), delete this.siblings, delete this.parent, this.stockId = (this == null ? void 0 : this.stockId) ?? ((n = this == null ? void 0 : this.stock) == null ? void 0 : n.id), delete this.stock, delete this.trim;
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
}
var B0 = typeof global == "object" && global && global.Object === Object && global, q0 = typeof self == "object" && self && self.Object === Object && self, ll = B0 || q0 || Function("return this")(), yi = ll.Symbol, Kh = Object.prototype, U0 = Kh.hasOwnProperty, W0 = Kh.toString, Mi = yi ? yi.toStringTag : void 0;
function H0(t) {
  var e = U0.call(t, Mi), n = t[Mi];
  try {
    t[Mi] = void 0;
    var i = !0;
  } catch {
  }
  var r = W0.call(t);
  return i && (e ? t[Mi] = n : delete t[Mi]), r;
}
var V0 = Object.prototype, G0 = V0.toString;
function j0(t) {
  return G0.call(t);
}
var Y0 = "[object Null]", K0 = "[object Undefined]", au = yi ? yi.toStringTag : void 0;
function Xh(t) {
  return t == null ? t === void 0 ? K0 : Y0 : au && au in Object(t) ? H0(t) : j0(t);
}
function X0(t) {
  return t != null && typeof t == "object";
}
var J0 = "[object Symbol]";
function cl(t) {
  return typeof t == "symbol" || X0(t) && Xh(t) == J0;
}
function Q0(t, e) {
  for (var n = -1, i = t == null ? 0 : t.length, r = Array(i); ++n < i; )
    r[n] = e(t[n], n, t);
  return r;
}
var ul = Array.isArray, Z0 = 1 / 0, lu = yi ? yi.prototype : void 0, cu = lu ? lu.toString : void 0;
function Jh(t) {
  if (typeof t == "string")
    return t;
  if (ul(t))
    return Q0(t, Jh) + "";
  if (cl(t))
    return cu ? cu.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -Z0 ? "-0" : e;
}
function vs(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var tv = "[object AsyncFunction]", ev = "[object Function]", nv = "[object GeneratorFunction]", iv = "[object Proxy]";
function rv(t) {
  if (!vs(t))
    return !1;
  var e = Xh(t);
  return e == ev || e == nv || e == tv || e == iv;
}
var _o = ll["__core-js_shared__"], uu = function() {
  var t = /[^.]+$/.exec(_o && _o.keys && _o.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function sv(t) {
  return !!uu && uu in t;
}
var ov = Function.prototype, av = ov.toString;
function lv(t) {
  if (t != null) {
    try {
      return av.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var cv = /[\\^$.*+?()[\]{}|]/g, uv = /^\[object .+?Constructor\]$/, fv = Function.prototype, hv = Object.prototype, dv = fv.toString, pv = hv.hasOwnProperty, mv = RegExp(
  "^" + dv.call(pv).replace(cv, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function gv(t) {
  if (!vs(t) || sv(t))
    return !1;
  var e = rv(t) ? mv : uv;
  return e.test(lv(t));
}
function yv(t, e) {
  return t == null ? void 0 : t[e];
}
function fl(t, e) {
  var n = yv(t, e);
  return gv(n) ? n : void 0;
}
var fu = function() {
  try {
    var t = fl(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), bv = 9007199254740991, vv = /^(?:0|[1-9]\d*)$/;
function _v(t, e) {
  var n = typeof t;
  return e = e ?? bv, !!e && (n == "number" || n != "symbol" && vv.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function wv(t, e, n) {
  e == "__proto__" && fu ? fu(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function Qh(t, e) {
  return t === e || t !== t && e !== e;
}
var xv = Object.prototype, kv = xv.hasOwnProperty;
function Sv(t, e, n) {
  var i = t[e];
  (!(kv.call(t, e) && Qh(i, n)) || n === void 0 && !(e in t)) && wv(t, e, n);
}
var Ev = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Tv = /^\w*$/;
function Av(t, e) {
  if (ul(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || cl(t) ? !0 : Tv.test(t) || !Ev.test(t) || e != null && t in Object(e);
}
var Qi = fl(Object, "create");
function Cv() {
  this.__data__ = Qi ? Qi(null) : {}, this.size = 0;
}
function Pv(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Ov = "__lodash_hash_undefined__", Nv = Object.prototype, Iv = Nv.hasOwnProperty;
function Lv(t) {
  var e = this.__data__;
  if (Qi) {
    var n = e[t];
    return n === Ov ? void 0 : n;
  }
  return Iv.call(e, t) ? e[t] : void 0;
}
var Mv = Object.prototype, Rv = Mv.hasOwnProperty;
function Dv(t) {
  var e = this.__data__;
  return Qi ? e[t] !== void 0 : Rv.call(e, t);
}
var Fv = "__lodash_hash_undefined__";
function zv(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Qi && e === void 0 ? Fv : e, this;
}
function Hn(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
Hn.prototype.clear = Cv;
Hn.prototype.delete = Pv;
Hn.prototype.get = Lv;
Hn.prototype.has = Dv;
Hn.prototype.set = zv;
function $v() {
  this.__data__ = [], this.size = 0;
}
function Zs(t, e) {
  for (var n = t.length; n--; )
    if (Qh(t[n][0], e))
      return n;
  return -1;
}
var Bv = Array.prototype, qv = Bv.splice;
function Uv(t) {
  var e = this.__data__, n = Zs(e, t);
  if (n < 0)
    return !1;
  var i = e.length - 1;
  return n == i ? e.pop() : qv.call(e, n, 1), --this.size, !0;
}
function Wv(t) {
  var e = this.__data__, n = Zs(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function Hv(t) {
  return Zs(this.__data__, t) > -1;
}
function Vv(t, e) {
  var n = this.__data__, i = Zs(n, t);
  return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this;
}
function Ei(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
Ei.prototype.clear = $v;
Ei.prototype.delete = Uv;
Ei.prototype.get = Wv;
Ei.prototype.has = Hv;
Ei.prototype.set = Vv;
var Gv = fl(ll, "Map");
function jv() {
  this.size = 0, this.__data__ = {
    hash: new Hn(),
    map: new (Gv || Ei)(),
    string: new Hn()
  };
}
function Yv(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function to(t, e) {
  var n = t.__data__;
  return Yv(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function Kv(t) {
  var e = to(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function Xv(t) {
  return to(this, t).get(t);
}
function Jv(t) {
  return to(this, t).has(t);
}
function Qv(t, e) {
  var n = to(this, t), i = n.size;
  return n.set(t, e), this.size += n.size == i ? 0 : 1, this;
}
function Xn(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
Xn.prototype.clear = jv;
Xn.prototype.delete = Kv;
Xn.prototype.get = Xv;
Xn.prototype.has = Jv;
Xn.prototype.set = Qv;
var Zv = "Expected a function";
function hl(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(Zv);
  var n = function() {
    var i = arguments, r = e ? e.apply(this, i) : i[0], s = n.cache;
    if (s.has(r))
      return s.get(r);
    var o = t.apply(this, i);
    return n.cache = s.set(r, o) || s, o;
  };
  return n.cache = new (hl.Cache || Xn)(), n;
}
hl.Cache = Xn;
var t_ = 500;
function e_(t) {
  var e = hl(t, function(i) {
    return n.size === t_ && n.clear(), i;
  }), n = e.cache;
  return e;
}
var n_ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, i_ = /\\(\\)?/g, r_ = e_(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(n_, function(n, i, r, s) {
    e.push(r ? s.replace(i_, "$1") : i || n);
  }), e;
});
function s_(t) {
  return t == null ? "" : Jh(t);
}
function Zh(t, e) {
  return ul(t) ? t : Av(t, e) ? [t] : r_(s_(t));
}
var o_ = 1 / 0;
function td(t) {
  if (typeof t == "string" || cl(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -o_ ? "-0" : e;
}
function a_(t, e) {
  e = Zh(e, t);
  for (var n = 0, i = e.length; t != null && n < i; )
    t = t[td(e[n++])];
  return n && n == i ? t : void 0;
}
function _s(t, e, n) {
  var i = t == null ? void 0 : a_(t, e);
  return i === void 0 ? n : i;
}
function l_(t, e, n, i) {
  if (!vs(t))
    return t;
  e = Zh(e, t);
  for (var r = -1, s = e.length, o = s - 1, a = t; a != null && ++r < s; ) {
    var l = td(e[r]), c = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return t;
    if (r != o) {
      var u = a[l];
      c = i ? i(u, l, a) : void 0, c === void 0 && (c = vs(u) ? u : _v(e[r + 1]) ? [] : {});
    }
    Sv(a, l, c), a = a[l];
  }
  return t;
}
function hu(t, e, n) {
  return t == null ? t : l_(t, e, n);
}
var ra = "http://www.w3.org/1999/xhtml";
const du = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ra,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ed(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), du.hasOwnProperty(e) ? { space: du[e], local: t } : t;
}
function c_(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === ra && e.documentElement.namespaceURI === ra ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function u_(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function nd(t) {
  var e = ed(t);
  return (e.local ? u_ : c_)(e);
}
function f_() {
}
function id(t) {
  return t == null ? f_ : function() {
    return this.querySelector(t);
  };
}
function h_(t) {
  typeof t != "function" && (t = id(t));
  for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
    for (var s = e[r], o = s.length, a = i[r] = new Array(o), l, c, u = 0; u < o; ++u)
      (l = s[u]) && (c = t.call(l, l.__data__, u, s)) && ("__data__" in l && (c.__data__ = l.__data__), a[u] = c);
  return new ae(i, this._parents);
}
function rd(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function d_() {
  return [];
}
function p_(t) {
  return t == null ? d_ : function() {
    return this.querySelectorAll(t);
  };
}
function m_(t) {
  return function() {
    return rd(t.apply(this, arguments));
  };
}
function g_(t) {
  typeof t == "function" ? t = m_(t) : t = p_(t);
  for (var e = this._groups, n = e.length, i = [], r = [], s = 0; s < n; ++s)
    for (var o = e[s], a = o.length, l, c = 0; c < a; ++c)
      (l = o[c]) && (i.push(t.call(l, l.__data__, c, o)), r.push(l));
  return new ae(i, r);
}
function y_(t) {
  return function() {
    return this.matches(t);
  };
}
function sd(t) {
  return function(e) {
    return e.matches(t);
  };
}
var b_ = Array.prototype.find;
function v_(t) {
  return function() {
    return b_.call(this.children, t);
  };
}
function __() {
  return this.firstElementChild;
}
function w_(t) {
  return this.select(t == null ? __ : v_(typeof t == "function" ? t : sd(t)));
}
var x_ = Array.prototype.filter;
function k_() {
  return Array.from(this.children);
}
function S_(t) {
  return function() {
    return x_.call(this.children, t);
  };
}
function E_(t) {
  return this.selectAll(t == null ? k_ : S_(typeof t == "function" ? t : sd(t)));
}
function T_(t) {
  typeof t != "function" && (t = y_(t));
  for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
    for (var s = e[r], o = s.length, a = i[r] = [], l, c = 0; c < o; ++c)
      (l = s[c]) && t.call(l, l.__data__, c, s) && a.push(l);
  return new ae(i, this._parents);
}
function od(t) {
  return new Array(t.length);
}
function A_() {
  return new ae(this._enter || this._groups.map(od), this._parents);
}
function ws(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
ws.prototype = {
  constructor: ws,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function C_(t) {
  return function() {
    return t;
  };
}
function P_(t, e, n, i, r, s) {
  for (var o = 0, a, l = e.length, c = s.length; o < c; ++o)
    (a = e[o]) ? (a.__data__ = s[o], i[o] = a) : n[o] = new ws(t, s[o]);
  for (; o < l; ++o)
    (a = e[o]) && (r[o] = a);
}
function O_(t, e, n, i, r, s, o) {
  var a, l, c = /* @__PURE__ */ new Map(), u = e.length, f = s.length, h = new Array(u), d;
  for (a = 0; a < u; ++a)
    (l = e[a]) && (h[a] = d = o.call(l, l.__data__, a, e) + "", c.has(d) ? r[a] = l : c.set(d, l));
  for (a = 0; a < f; ++a)
    d = o.call(t, s[a], a, s) + "", (l = c.get(d)) ? (i[a] = l, l.__data__ = s[a], c.delete(d)) : n[a] = new ws(t, s[a]);
  for (a = 0; a < u; ++a)
    (l = e[a]) && c.get(h[a]) === l && (r[a] = l);
}
function N_(t) {
  return t.__data__;
}
function I_(t, e) {
  if (!arguments.length)
    return Array.from(this, N_);
  var n = e ? O_ : P_, i = this._parents, r = this._groups;
  typeof t != "function" && (t = C_(t));
  for (var s = r.length, o = new Array(s), a = new Array(s), l = new Array(s), c = 0; c < s; ++c) {
    var u = i[c], f = r[c], h = f.length, d = L_(t.call(u, u && u.__data__, c, i)), m = d.length, v = a[c] = new Array(m), _ = o[c] = new Array(m), g = l[c] = new Array(h);
    n(u, f, v, _, g, d, e);
    for (var b = 0, x = 0, S, C; b < m; ++b)
      if (S = v[b]) {
        for (b >= x && (x = b + 1); !(C = _[x]) && ++x < m; )
          ;
        S._next = C || null;
      }
  }
  return o = new ae(o, i), o._enter = a, o._exit = l, o;
}
function L_(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function M_() {
  return new ae(this._exit || this._groups.map(od), this._parents);
}
function R_(t, e, n) {
  var i = this.enter(), r = this, s = this.exit();
  return typeof t == "function" ? (i = t(i), i && (i = i.selection())) : i = i.append(t + ""), e != null && (r = e(r), r && (r = r.selection())), n == null ? s.remove() : n(s), i && r ? i.merge(r).order() : r;
}
function D_(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, i = e._groups, r = n.length, s = i.length, o = Math.min(r, s), a = new Array(r), l = 0; l < o; ++l)
    for (var c = n[l], u = i[l], f = c.length, h = a[l] = new Array(f), d, m = 0; m < f; ++m)
      (d = c[m] || u[m]) && (h[m] = d);
  for (; l < r; ++l)
    a[l] = n[l];
  return new ae(a, this._parents);
}
function F_() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var i = t[e], r = i.length - 1, s = i[r], o; --r >= 0; )
      (o = i[r]) && (s && o.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(o, s), s = o);
  return this;
}
function z_(t) {
  t || (t = $_);
  function e(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var n = this._groups, i = n.length, r = new Array(i), s = 0; s < i; ++s) {
    for (var o = n[s], a = o.length, l = r[s] = new Array(a), c, u = 0; u < a; ++u)
      (c = o[u]) && (l[u] = c);
    l.sort(e);
  }
  return new ae(r, this._parents).order();
}
function $_(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function B_() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function q_() {
  return Array.from(this);
}
function U_() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var i = t[e], r = 0, s = i.length; r < s; ++r) {
      var o = i[r];
      if (o)
        return o;
    }
  return null;
}
function W_() {
  let t = 0;
  for (const e of this)
    ++t;
  return t;
}
function H_() {
  return !this.node();
}
function V_(t) {
  for (var e = this._groups, n = 0, i = e.length; n < i; ++n)
    for (var r = e[n], s = 0, o = r.length, a; s < o; ++s)
      (a = r[s]) && t.call(a, a.__data__, s, r);
  return this;
}
function G_(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function j_(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Y_(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function K_(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function X_(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function J_(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function Q_(t, e) {
  var n = ed(t);
  if (arguments.length < 2) {
    var i = this.node();
    return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n);
  }
  return this.each((e == null ? n.local ? j_ : G_ : typeof e == "function" ? n.local ? J_ : X_ : n.local ? K_ : Y_)(n, e));
}
function ad(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Z_(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function t1(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function e1(t, e, n) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.style.removeProperty(t) : this.style.setProperty(t, i, n);
  };
}
function n1(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Z_ : typeof e == "function" ? e1 : t1)(t, e, n ?? "")) : i1(this.node(), t);
}
function i1(t, e) {
  return t.style.getPropertyValue(e) || ad(t).getComputedStyle(t, null).getPropertyValue(e);
}
function r1(t) {
  return function() {
    delete this[t];
  };
}
function s1(t, e) {
  return function() {
    this[t] = e;
  };
}
function o1(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function a1(t, e) {
  return arguments.length > 1 ? this.each((e == null ? r1 : typeof e == "function" ? o1 : s1)(t, e)) : this.node()[t];
}
function ld(t) {
  return t.trim().split(/^|\s+/);
}
function dl(t) {
  return t.classList || new cd(t);
}
function cd(t) {
  this._node = t, this._names = ld(t.getAttribute("class") || "");
}
cd.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function ud(t, e) {
  for (var n = dl(t), i = -1, r = e.length; ++i < r; )
    n.add(e[i]);
}
function fd(t, e) {
  for (var n = dl(t), i = -1, r = e.length; ++i < r; )
    n.remove(e[i]);
}
function l1(t) {
  return function() {
    ud(this, t);
  };
}
function c1(t) {
  return function() {
    fd(this, t);
  };
}
function u1(t, e) {
  return function() {
    (e.apply(this, arguments) ? ud : fd)(this, t);
  };
}
function f1(t, e) {
  var n = ld(t + "");
  if (arguments.length < 2) {
    for (var i = dl(this.node()), r = -1, s = n.length; ++r < s; )
      if (!i.contains(n[r]))
        return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? u1 : e ? l1 : c1)(n, e));
}
function h1() {
  this.textContent = "";
}
function d1(t) {
  return function() {
    this.textContent = t;
  };
}
function p1(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function m1(t) {
  return arguments.length ? this.each(t == null ? h1 : (typeof t == "function" ? p1 : d1)(t)) : this.node().textContent;
}
function g1() {
  this.innerHTML = "";
}
function y1(t) {
  return function() {
    this.innerHTML = t;
  };
}
function b1(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function v1(t) {
  return arguments.length ? this.each(t == null ? g1 : (typeof t == "function" ? b1 : y1)(t)) : this.node().innerHTML;
}
function _1() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function w1() {
  return this.each(_1);
}
function x1() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function k1() {
  return this.each(x1);
}
function S1(t) {
  var e = typeof t == "function" ? t : nd(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function E1() {
  return null;
}
function T1(t, e) {
  var n = typeof t == "function" ? t : nd(t), i = e == null ? E1 : typeof e == "function" ? e : id(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function A1() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function C1() {
  return this.each(A1);
}
function P1() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function O1() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function N1(t) {
  return this.select(t ? O1 : P1);
}
function I1(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function L1(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function M1(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", i = e.indexOf(".");
    return i >= 0 && (n = e.slice(i + 1), e = e.slice(0, i)), { type: e, name: n };
  });
}
function R1(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, i = -1, r = e.length, s; n < r; ++n)
        s = e[n], (!t.type || s.type === t.type) && s.name === t.name ? this.removeEventListener(s.type, s.listener, s.options) : e[++i] = s;
      ++i ? e.length = i : delete this.__on;
    }
  };
}
function D1(t, e, n) {
  return function() {
    var i = this.__on, r, s = L1(e);
    if (i) {
      for (var o = 0, a = i.length; o < a; ++o)
        if ((r = i[o]).type === t.type && r.name === t.name) {
          this.removeEventListener(r.type, r.listener, r.options), this.addEventListener(r.type, r.listener = s, r.options = n), r.value = e;
          return;
        }
    }
    this.addEventListener(t.type, s, n), r = { type: t.type, name: t.name, value: e, listener: s, options: n }, i ? i.push(r) : this.__on = [r];
  };
}
function F1(t, e, n) {
  var i = M1(t + ""), r, s = i.length, o;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var l = 0, c = a.length, u; l < c; ++l)
        for (r = 0, u = a[l]; r < s; ++r)
          if ((o = i[r]).type === u.type && o.name === u.name)
            return u.value;
    }
    return;
  }
  for (a = e ? D1 : R1, r = 0; r < s; ++r)
    this.each(a(i[r], e, n));
  return this;
}
function hd(t, e, n) {
  var i = ad(t), r = i.CustomEvent;
  typeof r == "function" ? r = new r(e, n) : (r = i.document.createEvent("Event"), n ? (r.initEvent(e, n.bubbles, n.cancelable), r.detail = n.detail) : r.initEvent(e, !1, !1)), t.dispatchEvent(r);
}
function z1(t, e) {
  return function() {
    return hd(this, t, e);
  };
}
function $1(t, e) {
  return function() {
    return hd(this, t, e.apply(this, arguments));
  };
}
function B1(t, e) {
  return this.each((typeof e == "function" ? $1 : z1)(t, e));
}
function* q1() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var i = t[e], r = 0, s = i.length, o; r < s; ++r)
      (o = i[r]) && (yield o);
}
var dd = [null];
function ae(t, e) {
  this._groups = t, this._parents = e;
}
function U1() {
  return this;
}
ae.prototype = {
  constructor: ae,
  select: h_,
  selectAll: g_,
  selectChild: w_,
  selectChildren: E_,
  filter: T_,
  data: I_,
  enter: A_,
  exit: M_,
  join: R_,
  merge: D_,
  selection: U1,
  order: F_,
  sort: z_,
  call: B_,
  nodes: q_,
  node: U_,
  size: W_,
  empty: H_,
  each: V_,
  attr: Q_,
  style: n1,
  property: a1,
  classed: f1,
  text: m1,
  html: v1,
  raise: w1,
  lower: k1,
  append: S1,
  insert: T1,
  remove: C1,
  clone: N1,
  datum: I1,
  on: F1,
  dispatch: B1,
  [Symbol.iterator]: q1
};
function W1(t) {
  return typeof t == "string" ? new ae([[document.querySelector(t)]], [document.documentElement]) : new ae([[t]], dd);
}
function H1(t) {
  return typeof t == "string" ? new ae([document.querySelectorAll(t)], [document.documentElement]) : new ae([rd(t)], dd);
}
function ns(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function V1(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function pd(t) {
  let e, n, i;
  t.length !== 2 ? (e = ns, n = (a, l) => ns(t(a), l), i = (a, l) => t(a) - l) : (e = t === ns || t === V1 ? t : G1, n = t, i = t);
  function r(a, l, c = 0, u = a.length) {
    if (c < u) {
      if (e(l, l) !== 0)
        return u;
      do {
        const f = c + u >>> 1;
        n(a[f], l) < 0 ? c = f + 1 : u = f;
      } while (c < u);
    }
    return c;
  }
  function s(a, l, c = 0, u = a.length) {
    if (c < u) {
      if (e(l, l) !== 0)
        return u;
      do {
        const f = c + u >>> 1;
        n(a[f], l) <= 0 ? c = f + 1 : u = f;
      } while (c < u);
    }
    return c;
  }
  function o(a, l, c = 0, u = a.length) {
    const f = r(a, l, c, u - 1);
    return f > c && i(a[f - 1], l) > -i(a[f], l) ? f - 1 : f;
  }
  return { left: r, center: o, right: s };
}
function G1() {
  return 0;
}
function j1(t) {
  return t === null ? NaN : +t;
}
const Y1 = pd(ns), K1 = Y1.right;
pd(j1).center;
const X1 = Math.sqrt(50), J1 = Math.sqrt(10), Q1 = Math.sqrt(2);
function xs(t, e, n) {
  const i = (e - t) / Math.max(0, n), r = Math.floor(Math.log10(i)), s = i / Math.pow(10, r), o = s >= X1 ? 10 : s >= J1 ? 5 : s >= Q1 ? 2 : 1;
  let a, l, c;
  return r < 0 ? (c = Math.pow(10, -r) / o, a = Math.round(t * c), l = Math.round(e * c), a / c < t && ++a, l / c > e && --l, c = -c) : (c = Math.pow(10, r) * o, a = Math.round(t / c), l = Math.round(e / c), a * c < t && ++a, l * c > e && --l), l < a && 0.5 <= n && n < 2 ? xs(t, e, n * 2) : [a, l, c];
}
function Z1(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0))
    return [];
  if (t === e)
    return [t];
  const i = e < t, [r, s, o] = i ? xs(e, t, n) : xs(t, e, n);
  if (!(s >= r))
    return [];
  const a = s - r + 1, l = new Array(a);
  if (i)
    if (o < 0)
      for (let c = 0; c < a; ++c)
        l[c] = (s - c) / -o;
    else
      for (let c = 0; c < a; ++c)
        l[c] = (s - c) * o;
  else if (o < 0)
    for (let c = 0; c < a; ++c)
      l[c] = (r + c) / -o;
  else
    for (let c = 0; c < a; ++c)
      l[c] = (r + c) * o;
  return l;
}
function sa(t, e, n) {
  return e = +e, t = +t, n = +n, xs(t, e, n)[2];
}
function tw(t, e, n) {
  e = +e, t = +t, n = +n;
  const i = e < t, r = i ? sa(e, t, n) : sa(t, e, n);
  return (i ? -1 : 1) * (r < 0 ? 1 / -r : r);
}
function ew(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(e).domain(t);
      break;
  }
  return this;
}
function nw(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
    default: {
      this.domain(t), typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
  }
  return this;
}
function pl(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function md(t, e) {
  var n = Object.create(t.prototype);
  for (var i in e)
    n[i] = e[i];
  return n;
}
function hr() {
}
var Zi = 0.7, ks = 1 / Zi, fi = "\\s*([+-]?\\d+)\\s*", tr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", $e = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", iw = /^#([0-9a-f]{3,8})$/, rw = new RegExp(`^rgb\\(${fi},${fi},${fi}\\)$`), sw = new RegExp(`^rgb\\(${$e},${$e},${$e}\\)$`), ow = new RegExp(`^rgba\\(${fi},${fi},${fi},${tr}\\)$`), aw = new RegExp(`^rgba\\(${$e},${$e},${$e},${tr}\\)$`), lw = new RegExp(`^hsl\\(${tr},${$e},${$e}\\)$`), cw = new RegExp(`^hsla\\(${tr},${$e},${$e},${tr}\\)$`), pu = {
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
pl(hr, Vn, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: mu,
  // Deprecated! Use color.formatHex.
  formatHex: mu,
  formatHex8: uw,
  formatHsl: fw,
  formatRgb: gu,
  toString: gu
});
function mu() {
  return this.rgb().formatHex();
}
function uw() {
  return this.rgb().formatHex8();
}
function fw() {
  return gd(this).formatHsl();
}
function gu() {
  return this.rgb().formatRgb();
}
function Vn(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = iw.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? yu(e) : n === 3 ? new se(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Nr(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Nr(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = rw.exec(t)) ? new se(e[1], e[2], e[3], 1) : (e = sw.exec(t)) ? new se(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = ow.exec(t)) ? Nr(e[1], e[2], e[3], e[4]) : (e = aw.exec(t)) ? Nr(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = lw.exec(t)) ? _u(e[1], e[2] / 100, e[3] / 100, 1) : (e = cw.exec(t)) ? _u(e[1], e[2] / 100, e[3] / 100, e[4]) : pu.hasOwnProperty(t) ? yu(pu[t]) : t === "transparent" ? new se(NaN, NaN, NaN, 0) : null;
}
function yu(t) {
  return new se(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Nr(t, e, n, i) {
  return i <= 0 && (t = e = n = NaN), new se(t, e, n, i);
}
function hw(t) {
  return t instanceof hr || (t = Vn(t)), t ? (t = t.rgb(), new se(t.r, t.g, t.b, t.opacity)) : new se();
}
function zt(t, e, n, i) {
  return arguments.length === 1 ? hw(t) : new se(t, e, n, i ?? 1);
}
function se(t, e, n, i) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +i;
}
pl(se, zt, md(hr, {
  brighter(t) {
    return t = t == null ? ks : Math.pow(ks, t), new se(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Zi : Math.pow(Zi, t), new se(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new se(Bn(this.r), Bn(this.g), Bn(this.b), Ss(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: bu,
  // Deprecated! Use color.formatHex.
  formatHex: bu,
  formatHex8: dw,
  formatRgb: vu,
  toString: vu
}));
function bu() {
  return `#${Rn(this.r)}${Rn(this.g)}${Rn(this.b)}`;
}
function dw() {
  return `#${Rn(this.r)}${Rn(this.g)}${Rn(this.b)}${Rn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function vu() {
  const t = Ss(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Bn(this.r)}, ${Bn(this.g)}, ${Bn(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Ss(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Bn(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Rn(t) {
  return t = Bn(t), (t < 16 ? "0" : "") + t.toString(16);
}
function _u(t, e, n, i) {
  return i <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new ke(t, e, n, i);
}
function gd(t) {
  if (t instanceof ke)
    return new ke(t.h, t.s, t.l, t.opacity);
  if (t instanceof hr || (t = Vn(t)), !t)
    return new ke();
  if (t instanceof ke)
    return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, i = t.b / 255, r = Math.min(e, n, i), s = Math.max(e, n, i), o = NaN, a = s - r, l = (s + r) / 2;
  return a ? (e === s ? o = (n - i) / a + (n < i) * 6 : n === s ? o = (i - e) / a + 2 : o = (e - n) / a + 4, a /= l < 0.5 ? s + r : 2 - s - r, o *= 60) : a = l > 0 && l < 1 ? 0 : o, new ke(o, a, l, t.opacity);
}
function pw(t, e, n, i) {
  return arguments.length === 1 ? gd(t) : new ke(t, e, n, i ?? 1);
}
function ke(t, e, n, i) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +i;
}
pl(ke, pw, md(hr, {
  brighter(t) {
    return t = t == null ? ks : Math.pow(ks, t), new ke(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Zi : Math.pow(Zi, t), new ke(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, i = n + (n < 0.5 ? n : 1 - n) * e, r = 2 * n - i;
    return new se(
      wo(t >= 240 ? t - 240 : t + 120, r, i),
      wo(t, r, i),
      wo(t < 120 ? t + 240 : t - 120, r, i),
      this.opacity
    );
  },
  clamp() {
    return new ke(wu(this.h), Ir(this.s), Ir(this.l), Ss(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Ss(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${wu(this.h)}, ${Ir(this.s) * 100}%, ${Ir(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function wu(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Ir(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function wo(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const ml = (t) => () => t;
function mw(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function gw(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(i) {
    return Math.pow(t + i * e, n);
  };
}
function yw(t) {
  return (t = +t) == 1 ? yd : function(e, n) {
    return n - e ? gw(e, n, t) : ml(isNaN(e) ? n : e);
  };
}
function yd(t, e) {
  var n = e - t;
  return n ? mw(t, n) : ml(isNaN(t) ? e : t);
}
const xu = function t(e) {
  var n = yw(e);
  function i(r, s) {
    var o = n((r = zt(r)).r, (s = zt(s)).r), a = n(r.g, s.g), l = n(r.b, s.b), c = yd(r.opacity, s.opacity);
    return function(u) {
      return r.r = o(u), r.g = a(u), r.b = l(u), r.opacity = c(u), r + "";
    };
  }
  return i.gamma = t, i;
}(1);
function bw(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, i = e.slice(), r;
  return function(s) {
    for (r = 0; r < n; ++r)
      i[r] = t[r] * (1 - s) + e[r] * s;
    return i;
  };
}
function vw(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function _w(t, e) {
  var n = e ? e.length : 0, i = t ? Math.min(n, t.length) : 0, r = new Array(i), s = new Array(n), o;
  for (o = 0; o < i; ++o)
    r[o] = eo(t[o], e[o]);
  for (; o < n; ++o)
    s[o] = e[o];
  return function(a) {
    for (o = 0; o < i; ++o)
      s[o] = r[o](a);
    return s;
  };
}
function ww(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(i) {
    return n.setTime(t * (1 - i) + e * i), n;
  };
}
function Es(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function xw(t, e) {
  var n = {}, i = {}, r;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (r in e)
    r in t ? n[r] = eo(t[r], e[r]) : i[r] = e[r];
  return function(s) {
    for (r in n)
      i[r] = n[r](s);
    return i;
  };
}
var oa = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, xo = new RegExp(oa.source, "g");
function kw(t) {
  return function() {
    return t;
  };
}
function Sw(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Ew(t, e) {
  var n = oa.lastIndex = xo.lastIndex = 0, i, r, s, o = -1, a = [], l = [];
  for (t = t + "", e = e + ""; (i = oa.exec(t)) && (r = xo.exec(e)); )
    (s = r.index) > n && (s = e.slice(n, s), a[o] ? a[o] += s : a[++o] = s), (i = i[0]) === (r = r[0]) ? a[o] ? a[o] += r : a[++o] = r : (a[++o] = null, l.push({ i: o, x: Es(i, r) })), n = xo.lastIndex;
  return n < e.length && (s = e.slice(n), a[o] ? a[o] += s : a[++o] = s), a.length < 2 ? l[0] ? Sw(l[0].x) : kw(e) : (e = l.length, function(c) {
    for (var u = 0, f; u < e; ++u)
      a[(f = l[u]).i] = f.x(c);
    return a.join("");
  });
}
function eo(t, e) {
  var n = typeof e, i;
  return e == null || n === "boolean" ? ml(e) : (n === "number" ? Es : n === "string" ? (i = Vn(e)) ? (e = i, xu) : Ew : e instanceof Vn ? xu : e instanceof Date ? ww : vw(e) ? bw : Array.isArray(e) ? _w : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? xw : Es)(t, e);
}
function bd(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
function Tw(t) {
  return function() {
    return t;
  };
}
function Aw(t) {
  return +t;
}
var ku = [0, 1];
function dn(t) {
  return t;
}
function aa(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : Tw(isNaN(e) ? NaN : 0.5);
}
function Cw(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(i) {
    return Math.max(t, Math.min(e, i));
  };
}
function Pw(t, e, n) {
  var i = t[0], r = t[1], s = e[0], o = e[1];
  return r < i ? (i = aa(r, i), s = n(o, s)) : (i = aa(i, r), s = n(s, o)), function(a) {
    return s(i(a));
  };
}
function Ow(t, e, n) {
  var i = Math.min(t.length, e.length) - 1, r = new Array(i), s = new Array(i), o = -1;
  for (t[i] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++o < i; )
    r[o] = aa(t[o], t[o + 1]), s[o] = n(e[o], e[o + 1]);
  return function(a) {
    var l = K1(t, a, 1, i) - 1;
    return s[l](r[l](a));
  };
}
function Nw(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Iw() {
  var t = ku, e = ku, n = eo, i, r, s, o = dn, a, l, c;
  function u() {
    var h = Math.min(t.length, e.length);
    return o !== dn && (o = Cw(t[0], t[h - 1])), a = h > 2 ? Ow : Pw, l = c = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? s : (l || (l = a(t.map(i), e, n)))(i(o(h)));
  }
  return f.invert = function(h) {
    return o(r((c || (c = a(e, t.map(i), Es)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (t = Array.from(h, Aw), u()) : t.slice();
  }, f.range = function(h) {
    return arguments.length ? (e = Array.from(h), u()) : e.slice();
  }, f.rangeRound = function(h) {
    return e = Array.from(h), n = bd, u();
  }, f.clamp = function(h) {
    return arguments.length ? (o = h ? !0 : dn, u()) : o !== dn;
  }, f.interpolate = function(h) {
    return arguments.length ? (n = h, u()) : n;
  }, f.unknown = function(h) {
    return arguments.length ? (s = h, f) : s;
  }, function(h, d) {
    return i = h, r = d, u();
  };
}
function Lw() {
  return Iw()(dn, dn);
}
function Mw(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Ts(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0)
    return null;
  var n, i = t.slice(0, n);
  return [
    i.length > 1 ? i[0] + i.slice(2) : i,
    +t.slice(n + 1)
  ];
}
function bi(t) {
  return t = Ts(Math.abs(t)), t ? t[1] : NaN;
}
function Rw(t, e) {
  return function(n, i) {
    for (var r = n.length, s = [], o = 0, a = t[0], l = 0; r > 0 && a > 0 && (l + a + 1 > i && (a = Math.max(1, i - l)), s.push(n.substring(r -= a, r + a)), !((l += a + 1) > i)); )
      a = t[o = (o + 1) % t.length];
    return s.reverse().join(e);
  };
}
function Dw(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var Fw = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function As(t) {
  if (!(e = Fw.exec(t)))
    throw new Error("invalid format: " + t);
  var e;
  return new gl({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
As.prototype = gl.prototype;
function gl(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
gl.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function zw(t) {
  t:
    for (var e = t.length, n = 1, i = -1, r; n < e; ++n)
      switch (t[n]) {
        case ".":
          i = r = n;
          break;
        case "0":
          i === 0 && (i = n), r = n;
          break;
        default:
          if (!+t[n])
            break t;
          i > 0 && (i = 0);
          break;
      }
  return i > 0 ? t.slice(0, i) + t.slice(r + 1) : t;
}
var vd;
function $w(t, e) {
  var n = Ts(t, e);
  if (!n)
    return t + "";
  var i = n[0], r = n[1], s = r - (vd = Math.max(-8, Math.min(8, Math.floor(r / 3))) * 3) + 1, o = i.length;
  return s === o ? i : s > o ? i + new Array(s - o + 1).join("0") : s > 0 ? i.slice(0, s) + "." + i.slice(s) : "0." + new Array(1 - s).join("0") + Ts(t, Math.max(0, e + s - 1))[0];
}
function Su(t, e) {
  var n = Ts(t, e);
  if (!n)
    return t + "";
  var i = n[0], r = n[1];
  return r < 0 ? "0." + new Array(-r).join("0") + i : i.length > r + 1 ? i.slice(0, r + 1) + "." + i.slice(r + 1) : i + new Array(r - i.length + 2).join("0");
}
const Eu = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Mw,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => Su(t * 100, e),
  r: Su,
  s: $w,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Tu(t) {
  return t;
}
var Au = Array.prototype.map, Cu = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Bw(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? Tu : Rw(Au.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", i = t.currency === void 0 ? "" : t.currency[1] + "", r = t.decimal === void 0 ? "." : t.decimal + "", s = t.numerals === void 0 ? Tu : Dw(Au.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", a = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function c(f) {
    f = As(f);
    var h = f.fill, d = f.align, m = f.sign, v = f.symbol, _ = f.zero, g = f.width, b = f.comma, x = f.precision, S = f.trim, C = f.type;
    C === "n" ? (b = !0, C = "g") : Eu[C] || (x === void 0 && (x = 12), S = !0, C = "g"), (_ || h === "0" && d === "=") && (_ = !0, h = "0", d = "=");
    var I = v === "$" ? n : v === "#" && /[boxX]/.test(C) ? "0" + C.toLowerCase() : "", G = v === "$" ? i : /[%p]/.test(C) ? o : "", L = Eu[C], j = /[defgprs%]/.test(C);
    x = x === void 0 ? 6 : /[gprs]/.test(C) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x));
    function tt(z) {
      var et = I, B = G, st, Kt, bt;
      if (C === "c")
        B = L(z) + B, z = "";
      else {
        z = +z;
        var lt = z < 0 || 1 / z < 0;
        if (z = isNaN(z) ? l : L(Math.abs(z), x), S && (z = zw(z)), lt && +z == 0 && m !== "+" && (lt = !1), et = (lt ? m === "(" ? m : a : m === "-" || m === "(" ? "" : m) + et, B = (C === "s" ? Cu[8 + vd / 3] : "") + B + (lt && m === "(" ? ")" : ""), j) {
          for (st = -1, Kt = z.length; ++st < Kt; )
            if (bt = z.charCodeAt(st), 48 > bt || bt > 57) {
              B = (bt === 46 ? r + z.slice(st + 1) : z.slice(st)) + B, z = z.slice(0, st);
              break;
            }
        }
      }
      b && !_ && (z = e(z, 1 / 0));
      var at = et.length + z.length + B.length, St = at < g ? new Array(g - at + 1).join(h) : "";
      switch (b && _ && (z = e(St + z, St.length ? g - B.length : 1 / 0), St = ""), d) {
        case "<":
          z = et + z + B + St;
          break;
        case "=":
          z = et + St + z + B;
          break;
        case "^":
          z = St.slice(0, at = St.length >> 1) + et + z + B + St.slice(at);
          break;
        default:
          z = St + et + z + B;
          break;
      }
      return s(z);
    }
    return tt.toString = function() {
      return f + "";
    }, tt;
  }
  function u(f, h) {
    var d = c((f = As(f), f.type = "f", f)), m = Math.max(-8, Math.min(8, Math.floor(bi(h) / 3))) * 3, v = Math.pow(10, -m), _ = Cu[8 + m / 3];
    return function(g) {
      return d(v * g) + _;
    };
  }
  return {
    format: c,
    formatPrefix: u
  };
}
var Lr, yl, _d;
qw({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function qw(t) {
  return Lr = Bw(t), yl = Lr.format, _d = Lr.formatPrefix, Lr;
}
function wd(t) {
  return Math.max(0, -bi(Math.abs(t)));
}
function Uw(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(bi(e) / 3))) * 3 - bi(Math.abs(t)));
}
function Ww(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, bi(e) - bi(t)) + 1;
}
function Hw(t, e, n, i) {
  var r = tw(t, e, n), s;
  switch (i = As(i ?? ",f"), i.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(e));
      return i.precision == null && !isNaN(s = Uw(r, o)) && (i.precision = s), _d(i, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      i.precision == null && !isNaN(s = Ww(r, Math.max(Math.abs(t), Math.abs(e)))) && (i.precision = s - (i.type === "e"));
      break;
    }
    case "f":
    case "%": {
      i.precision == null && !isNaN(s = wd(r)) && (i.precision = s - (i.type === "%") * 2);
      break;
    }
  }
  return yl(i);
}
function xd(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var i = e();
    return Z1(i[0], i[i.length - 1], n ?? 10);
  }, t.tickFormat = function(n, i) {
    var r = e();
    return Hw(r[0], r[r.length - 1], n ?? 10, i);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var i = e(), r = 0, s = i.length - 1, o = i[r], a = i[s], l, c, u = 10;
    for (a < o && (c = o, o = a, a = c, c = r, r = s, s = c); u-- > 0; ) {
      if (c = sa(o, a, n), c === l)
        return i[r] = o, i[s] = a, e(i);
      if (c > 0)
        o = Math.floor(o / c) * c, a = Math.ceil(a / c) * c;
      else if (c < 0)
        o = Math.ceil(o * c) / c, a = Math.floor(a * c) / c;
      else
        break;
      l = c;
    }
    return t;
  }, t;
}
function kd() {
  var t = Lw();
  return t.copy = function() {
    return Nw(t, kd());
  }, ew.apply(t, arguments), xd(t);
}
function Vw() {
  var t = 0, e = 1, n, i, r, s, o = dn, a = !1, l;
  function c(f) {
    return f == null || isNaN(f = +f) ? l : o(r === 0 ? 0.5 : (f = (s(f) - n) * r, a ? Math.max(0, Math.min(1, f)) : f));
  }
  c.domain = function(f) {
    return arguments.length ? ([t, e] = f, n = s(t = +t), i = s(e = +e), r = n === i ? 0 : 1 / (i - n), c) : [t, e];
  }, c.clamp = function(f) {
    return arguments.length ? (a = !!f, c) : a;
  }, c.interpolator = function(f) {
    return arguments.length ? (o = f, c) : o;
  };
  function u(f) {
    return function(h) {
      var d, m;
      return arguments.length ? ([d, m] = h, o = f(d, m), c) : [o(0), o(1)];
    };
  }
  return c.range = u(eo), c.rangeRound = u(bd), c.unknown = function(f) {
    return arguments.length ? (l = f, c) : l;
  }, function(f) {
    return s = f, n = f(t), i = f(e), r = n === i ? 0 : 1 / (i - n), c;
  };
}
function Gw(t, e) {
  return e.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown());
}
function Sd() {
  var t = xd(Vw()(dn));
  return t.copy = function() {
    return Gw(t, Sd());
  }, nw.apply(t, arguments);
}
function jw(t) {
  return t;
}
var is = 1, rs = 2, la = 3, Fi = 4, Pu = 1e-6;
function Yw(t) {
  return "translate(" + t + ",0)";
}
function Kw(t) {
  return "translate(0," + t + ")";
}
function Xw(t) {
  return (e) => +t(e);
}
function Jw(t, e) {
  return e = Math.max(0, t.bandwidth() - e * 2) / 2, t.round() && (e = Math.round(e)), (n) => +t(n) + e;
}
function Qw() {
  return !this.__axis;
}
function no(t, e) {
  var n = [], i = null, r = null, s = 6, o = 6, a = 3, l = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, c = t === is || t === Fi ? -1 : 1, u = t === Fi || t === rs ? "x" : "y", f = t === is || t === la ? Yw : Kw;
  function h(d) {
    var m = i ?? (e.ticks ? e.ticks.apply(e, n) : e.domain()), v = r ?? (e.tickFormat ? e.tickFormat.apply(e, n) : jw), _ = Math.max(s, 0) + a, g = e.range(), b = +g[0] + l, x = +g[g.length - 1] + l, S = (e.bandwidth ? Jw : Xw)(e.copy(), l), C = d.selection ? d.selection() : d, I = C.selectAll(".domain").data([null]), G = C.selectAll(".tick").data(m, e).order(), L = G.exit(), j = G.enter().append("g").attr("class", "tick"), tt = G.select("line"), z = G.select("text");
    I = I.merge(I.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), G = G.merge(j), tt = tt.merge(j.append("line").attr("stroke", "currentColor").attr(u + "2", c * s)), z = z.merge(j.append("text").attr("fill", "currentColor").attr(u, c * _).attr("dy", t === is ? "0em" : t === la ? "0.71em" : "0.32em")), d !== C && (I = I.transition(d), G = G.transition(d), tt = tt.transition(d), z = z.transition(d), L = L.transition(d).attr("opacity", Pu).attr("transform", function(et) {
      return isFinite(et = S(et)) ? f(et + l) : this.getAttribute("transform");
    }), j.attr("opacity", Pu).attr("transform", function(et) {
      var B = this.parentNode.__axis;
      return f((B && isFinite(B = B(et)) ? B : S(et)) + l);
    })), L.remove(), I.attr("d", t === Fi || t === rs ? o ? "M" + c * o + "," + b + "H" + l + "V" + x + "H" + c * o : "M" + l + "," + b + "V" + x : o ? "M" + b + "," + c * o + "V" + l + "H" + x + "V" + c * o : "M" + b + "," + l + "H" + x), G.attr("opacity", 1).attr("transform", function(et) {
      return f(S(et) + l);
    }), tt.attr(u + "2", c * s), z.attr(u, c * _).text(v), C.filter(Qw).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === rs ? "start" : t === Fi ? "end" : "middle"), C.each(function() {
      this.__axis = S;
    });
  }
  return h.scale = function(d) {
    return arguments.length ? (e = d, h) : e;
  }, h.ticks = function() {
    return n = Array.from(arguments), h;
  }, h.tickArguments = function(d) {
    return arguments.length ? (n = d == null ? [] : Array.from(d), h) : n.slice();
  }, h.tickValues = function(d) {
    return arguments.length ? (i = d == null ? null : Array.from(d), h) : i && i.slice();
  }, h.tickFormat = function(d) {
    return arguments.length ? (r = d, h) : r;
  }, h.tickSize = function(d) {
    return arguments.length ? (s = o = +d, h) : s;
  }, h.tickSizeInner = function(d) {
    return arguments.length ? (s = +d, h) : s;
  }, h.tickSizeOuter = function(d) {
    return arguments.length ? (o = +d, h) : o;
  }, h.tickPadding = function(d) {
    return arguments.length ? (a = +d, h) : a;
  }, h.offset = function(d) {
    return arguments.length ? (l = +d, h) : l;
  }, h;
}
function Zw(t) {
  return no(is, t);
}
function tx(t) {
  return no(rs, t);
}
function ex(t) {
  return no(la, t);
}
function nx(t) {
  return no(Fi, t);
}
const ca = Math.PI, ua = 2 * ca, In = 1e-6, ix = ua - In;
function Ed(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function rx(t) {
  let e = Math.floor(t);
  if (!(e >= 0))
    throw new Error(`invalid digits: ${t}`);
  if (e > 15)
    return Ed;
  const n = 10 ** e;
  return function(i) {
    this._ += i[0];
    for (let r = 1, s = i.length; r < s; ++r)
      this._ += Math.round(arguments[r] * n) / n + i[r];
  };
}
class bl {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? Ed : rx(e);
  }
  moveTo(e, n) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(e, n) {
    this._append`L${this._x1 = +e},${this._y1 = +n}`;
  }
  quadraticCurveTo(e, n, i, r) {
    this._append`Q${+e},${+n},${this._x1 = +i},${this._y1 = +r}`;
  }
  bezierCurveTo(e, n, i, r, s, o) {
    this._append`C${+e},${+n},${+i},${+r},${this._x1 = +s},${this._y1 = +o}`;
  }
  arcTo(e, n, i, r, s) {
    if (e = +e, n = +n, i = +i, r = +r, s = +s, s < 0)
      throw new Error(`negative radius: ${s}`);
    let o = this._x1, a = this._y1, l = i - e, c = r - n, u = o - e, f = a - n, h = u * u + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = e},${this._y1 = n}`;
    else if (h > In)
      if (!(Math.abs(f * l - c * u) > In) || !s)
        this._append`L${this._x1 = e},${this._y1 = n}`;
      else {
        let d = i - o, m = r - a, v = l * l + c * c, _ = d * d + m * m, g = Math.sqrt(v), b = Math.sqrt(h), x = s * Math.tan((ca - Math.acos((v + h - _) / (2 * g * b))) / 2), S = x / b, C = x / g;
        Math.abs(S - 1) > In && this._append`L${e + S * u},${n + S * f}`, this._append`A${s},${s},0,0,${+(f * d > u * m)},${this._x1 = e + C * l},${this._y1 = n + C * c}`;
      }
  }
  arc(e, n, i, r, s, o) {
    if (e = +e, n = +n, i = +i, o = !!o, i < 0)
      throw new Error(`negative radius: ${i}`);
    let a = i * Math.cos(r), l = i * Math.sin(r), c = e + a, u = n + l, f = 1 ^ o, h = o ? r - s : s - r;
    this._x1 === null ? this._append`M${c},${u}` : (Math.abs(this._x1 - c) > In || Math.abs(this._y1 - u) > In) && this._append`L${c},${u}`, i && (h < 0 && (h = h % ua + ua), h > ix ? this._append`A${i},${i},0,1,${f},${e - a},${n - l}A${i},${i},0,1,${f},${this._x1 = c},${this._y1 = u}` : h > In && this._append`A${i},${i},0,${+(h >= ca)},${f},${this._x1 = e + i * Math.cos(s)},${this._y1 = n + i * Math.sin(s)}`);
  }
  rect(e, n, i, r) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${i = +i}v${+r}h${-i}Z`;
  }
  toString() {
    return this._;
  }
}
function Td() {
  return new bl();
}
Td.prototype = bl.prototype;
function de(t) {
  return function() {
    return t;
  };
}
const Ou = Math.abs, Gt = Math.atan2, On = Math.cos, sx = Math.max, ko = Math.min, Ne = Math.sin, De = Math.sqrt, ne = 1e-12, vi = Math.PI, Cs = vi / 2, Ad = 2 * vi;
function ox(t) {
  return t > 1 ? 0 : t < -1 ? vi : Math.acos(t);
}
function Nu(t) {
  return t >= 1 ? Cs : t <= -1 ? -Cs : Math.asin(t);
}
function Cd(t) {
  let e = 3;
  return t.digits = function(n) {
    if (!arguments.length)
      return e;
    if (n == null)
      e = null;
    else {
      const i = Math.floor(n);
      if (!(i >= 0))
        throw new RangeError(`invalid digits: ${n}`);
      e = i;
    }
    return t;
  }, () => new bl(e);
}
function ax(t) {
  return t.innerRadius;
}
function lx(t) {
  return t.outerRadius;
}
function cx(t) {
  return t.startAngle;
}
function ux(t) {
  return t.endAngle;
}
function fx(t) {
  return t && t.padAngle;
}
function hx(t, e, n, i, r, s, o, a) {
  var l = n - t, c = i - e, u = o - r, f = a - s, h = f * l - u * c;
  if (!(h * h < ne))
    return h = (u * (e - s) - f * (t - r)) / h, [t + h * l, e + h * c];
}
function Mr(t, e, n, i, r, s, o) {
  var a = t - n, l = e - i, c = (o ? s : -s) / De(a * a + l * l), u = c * l, f = -c * a, h = t + u, d = e + f, m = n + u, v = i + f, _ = (h + m) / 2, g = (d + v) / 2, b = m - h, x = v - d, S = b * b + x * x, C = r - s, I = h * v - m * d, G = (x < 0 ? -1 : 1) * De(sx(0, C * C * S - I * I)), L = (I * x - b * G) / S, j = (-I * b - x * G) / S, tt = (I * x + b * G) / S, z = (-I * b + x * G) / S, et = L - _, B = j - g, st = tt - _, Kt = z - g;
  return et * et + B * B > st * st + Kt * Kt && (L = tt, j = z), {
    cx: L,
    cy: j,
    x01: -u,
    y01: -f,
    x11: L * (r / C - 1),
    y11: j * (r / C - 1)
  };
}
function dx() {
  var t = ax, e = lx, n = de(0), i = null, r = cx, s = ux, o = fx, a = null, l = Cd(c);
  function c() {
    var u, f, h = +t.apply(this, arguments), d = +e.apply(this, arguments), m = r.apply(this, arguments) - Cs, v = s.apply(this, arguments) - Cs, _ = Ou(v - m), g = v > m;
    if (a || (a = u = l()), d < h && (f = d, d = h, h = f), !(d > ne))
      a.moveTo(0, 0);
    else if (_ > Ad - ne)
      a.moveTo(d * On(m), d * Ne(m)), a.arc(0, 0, d, m, v, !g), h > ne && (a.moveTo(h * On(v), h * Ne(v)), a.arc(0, 0, h, v, m, g));
    else {
      var b = m, x = v, S = m, C = v, I = _, G = _, L = o.apply(this, arguments) / 2, j = L > ne && (i ? +i.apply(this, arguments) : De(h * h + d * d)), tt = ko(Ou(d - h) / 2, +n.apply(this, arguments)), z = tt, et = tt, B, st;
      if (j > ne) {
        var Kt = Nu(j / h * Ne(L)), bt = Nu(j / d * Ne(L));
        (I -= Kt * 2) > ne ? (Kt *= g ? 1 : -1, S += Kt, C -= Kt) : (I = 0, S = C = (m + v) / 2), (G -= bt * 2) > ne ? (bt *= g ? 1 : -1, b += bt, x -= bt) : (G = 0, b = x = (m + v) / 2);
      }
      var lt = d * On(b), at = d * Ne(b), St = h * On(C), qt = h * Ne(C);
      if (tt > ne) {
        var Xt = d * On(x), Ut = d * Ne(x), tn = h * On(S), Tn = h * Ne(S), le;
        if (_ < vi)
          if (le = hx(lt, at, tn, Tn, Xt, Ut, St, qt)) {
            var te = lt - le[0], Ce = at - le[1], Ue = Xt - le[0], en = Ut - le[1], _e = 1 / Ne(ox((te * Ue + Ce * en) / (De(te * te + Ce * Ce) * De(Ue * Ue + en * en))) / 2), nn = De(le[0] * le[0] + le[1] * le[1]);
            z = ko(tt, (h - nn) / (_e - 1)), et = ko(tt, (d - nn) / (_e + 1));
          } else
            z = et = 0;
      }
      G > ne ? et > ne ? (B = Mr(tn, Tn, lt, at, d, et, g), st = Mr(Xt, Ut, St, qt, d, et, g), a.moveTo(B.cx + B.x01, B.cy + B.y01), et < tt ? a.arc(B.cx, B.cy, et, Gt(B.y01, B.x01), Gt(st.y01, st.x01), !g) : (a.arc(B.cx, B.cy, et, Gt(B.y01, B.x01), Gt(B.y11, B.x11), !g), a.arc(0, 0, d, Gt(B.cy + B.y11, B.cx + B.x11), Gt(st.cy + st.y11, st.cx + st.x11), !g), a.arc(st.cx, st.cy, et, Gt(st.y11, st.x11), Gt(st.y01, st.x01), !g))) : (a.moveTo(lt, at), a.arc(0, 0, d, b, x, !g)) : a.moveTo(lt, at), !(h > ne) || !(I > ne) ? a.lineTo(St, qt) : z > ne ? (B = Mr(St, qt, Xt, Ut, h, -z, g), st = Mr(lt, at, tn, Tn, h, -z, g), a.lineTo(B.cx + B.x01, B.cy + B.y01), z < tt ? a.arc(B.cx, B.cy, z, Gt(B.y01, B.x01), Gt(st.y01, st.x01), !g) : (a.arc(B.cx, B.cy, z, Gt(B.y01, B.x01), Gt(B.y11, B.x11), !g), a.arc(0, 0, h, Gt(B.cy + B.y11, B.cx + B.x11), Gt(st.cy + st.y11, st.cx + st.x11), g), a.arc(st.cx, st.cy, z, Gt(st.y11, st.x11), Gt(st.y01, st.x01), !g))) : a.arc(0, 0, h, C, S, g);
    }
    if (a.closePath(), u)
      return a = null, u + "" || null;
  }
  return c.centroid = function() {
    var u = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2, f = (+r.apply(this, arguments) + +s.apply(this, arguments)) / 2 - vi / 2;
    return [On(f) * u, Ne(f) * u];
  }, c.innerRadius = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : de(+u), c) : t;
  }, c.outerRadius = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : de(+u), c) : e;
  }, c.cornerRadius = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : de(+u), c) : n;
  }, c.padRadius = function(u) {
    return arguments.length ? (i = u == null ? null : typeof u == "function" ? u : de(+u), c) : i;
  }, c.startAngle = function(u) {
    return arguments.length ? (r = typeof u == "function" ? u : de(+u), c) : r;
  }, c.endAngle = function(u) {
    return arguments.length ? (s = typeof u == "function" ? u : de(+u), c) : s;
  }, c.padAngle = function(u) {
    return arguments.length ? (o = typeof u == "function" ? u : de(+u), c) : o;
  }, c.context = function(u) {
    return arguments.length ? (a = u ?? null, c) : a;
  }, c;
}
const px = {
  draw(t, e) {
    const n = De(e / vi);
    t.moveTo(n, 0), t.arc(0, 0, n, 0, Ad);
  }
}, mx = {
  draw(t, e) {
    const n = De(e), i = -n / 2;
    t.rect(i, i, n, n);
  }
}, So = De(3), gx = {
  draw(t, e) {
    const n = -De(e / (So * 3));
    t.moveTo(0, n * 2), t.lineTo(-So * n, -n), t.lineTo(So * n, -n), t.closePath();
  }
};
function yx(t, e) {
  let n = null, i = Cd(r);
  t = typeof t == "function" ? t : de(t || px), e = typeof e == "function" ? e : de(e === void 0 ? 64 : +e);
  function r() {
    let s;
    if (n || (n = s = i()), t.apply(this, arguments).draw(n, +e.apply(this, arguments)), s)
      return n = null, s + "" || null;
  }
  return r.type = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : de(s), r) : t;
  }, r.size = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : de(+s), r) : e;
  }, r.context = function(s) {
    return arguments.length ? (n = s ?? null, r) : n;
  }, r;
}
const ot = {
  precisionFixed: wd,
  format: yl,
  select: W1,
  selectAll: H1,
  scaleLinear: kd,
  scaleSequential: Sd,
  axisTop: Zw,
  axisBottom: ex,
  axisRight: tx,
  axisLeft: nx,
  symbol: yx,
  path: Td,
  arc: dx,
  symbolTriangle: gx,
  symbolSquare: mx
};
function Jn(t) {
  return typeof t == "string" && t.length === 6 && !isNaN(+("0x" + t.replace("#", "")));
}
class bx {
  constructor({
    elementID: e,
    env: n = "production",
    main: i = !0,
    units: r = "decimal",
    saw: s = null,
    app: o = !1,
    embed: a = !1,
    height: l = 0,
    width: c = 0,
    decimalPlaces: u = 2,
    flipY: f = !1,
    flipX: h = !1,
    colors: d = {
      partA: "#1d9bc4",
      partB: "#127da1",
      partHover: "#29c778",
      partSelected: "#1bc319",
      stock: "#ffd166",
      text: "#ffffff"
    },
    options: m = {
      disableClick: !1
    },
    vueComponent: v
  }) {
    p(this, "env");
    p(this, "main");
    //is this the main vis or not
    p(this, "units", "decimal");
    p(this, "decimalPlaces");
    p(this, "saw");
    p(this, "stockType");
    p(this, "numUniqueShapes");
    p(this, "app");
    p(this, "embed");
    p(this, "height");
    p(this, "width");
    p(this, "device");
    p(this, "vueComponent");
    p(this, "elWidth");
    p(this, "elHeight");
    p(this, "w");
    p(this, "h");
    p(this, "padding");
    p(this, "mobileBreakpoint");
    //scales
    p(this, "xScale", ot.scaleLinear());
    p(this, "yScale", ot.scaleLinear());
    p(this, "yPositionScale", ot.scaleLinear());
    p(this, "xPositionScale", ot.scaleLinear());
    p(this, "yAxisScale", ot.scaleLinear());
    p(this, "measurementScale", ot.scaleLinear());
    p(this, "xAxis");
    p(this, "yAxis");
    p(this, "shapeXAxis");
    p(this, "shapeYAxis");
    p(this, "cutMeasurementXAxes");
    p(this, "cutMeasurementYAxes");
    p(this, "axisSpacing");
    p(this, "flipY");
    p(this, "flipX");
    p(this, "colors");
    p(this, "options");
    p(this, "moveMode");
    p(this, "moveRotation");
    p(this, "moving");
    p(this, "shape");
    p(this, "shapeColorScale");
    p(this, "scoreColorScale");
    p(this, "hasTouch");
    p(this, "formatDp");
    p(this, "highlightguillotine");
    p(this, "elementID");
    //the id of the element to draw the vis in
    p(this, "el");
    p(this, "htmlEl");
    p(this, "svgCanvas");
    p(this, "axisGroup");
    p(this, "stockGroup");
    p(this, "stockWrappers");
    p(this, "stock");
    p(this, "shapeGroup");
    p(this, "shapeWrappers");
    p(this, "shapes");
    p(this, "shapeIDText");
    p(this, "shapeNameText");
    p(this, "shapeLengthText");
    p(this, "shapeWidthText");
    p(this, "bandingGroup");
    p(this, "bandingWrappers");
    p(this, "banding");
    p(this, "segmentGroup");
    p(this, "segments");
    p(this, "segment");
    p(this, "positionGroup");
    p(this, "position");
    p(this, "dotGroup");
    p(this, "dot");
    p(this, "cutGroup");
    p(this, "cuts");
    p(this, "cut");
    var g;
    if (!e)
      throw new Error("elementID is required");
    if (this.el = ot.select(e), this.el === null)
      return;
    const _ = this.el.node();
    if (_ !== null) {
      this.htmlEl = _, this.vueComponent = v, this.env = ((g = v == null ? void 0 : v.gs) == null ? void 0 : g.env) === "development" ? "development" : "production", this.app = o || !1, this.embed = a || !1, this.height = l, this.width = c, this.device = o ? "app" : "desktop", this.elWidth = this.htmlEl.offsetWidth, this.elHeight = this.htmlEl.offsetHeight, this.w = 0, this.h = 0, this.padding = 0, this.mobileBreakpoint = 450, this.main = i, this.saw = s, this.cutMeasurementXAxes = [], this.cutMeasurementYAxes = [], this.axisSpacing = 16, this.flipY = f, this.flipX = h, d = {
        ...d
      };
      for (const [b, x] of Object.entries(d))
        x && (d[b] = x.replace("#", ""));
      this.colors = {
        partA: Jn(d == null ? void 0 : d.partA) ? zt("#" + d.partA) : zt("#1d9bc4"),
        partB: Jn(d == null ? void 0 : d.partB) ? zt("#" + d.partB) : zt("#127da1"),
        partHover: Jn(d == null ? void 0 : d.partHover) ? zt("#" + d.partHover) : zt("#29c778"),
        partSelected: Jn(d == null ? void 0 : d.partSelected) ? zt("#" + d.partSelected) : zt("#1bc319"),
        stock: Jn(d == null ? void 0 : d.stock) ? zt("#" + d.stock) : zt("#ffd166"),
        text: Jn(d == null ? void 0 : d.text) ? zt("#" + d.text) : zt("#ffffff")
      }, this.shapeColorScale = ot.scaleSequential([
        this.colors.partA,
        this.colors.partB
      ]), this.env = n, this.moveMode = !1, this.moving = !1, this.moveRotation = !1, this.units = r, this.decimalPlaces = u, this.hasTouch = !1, this.options = m, this.init();
    }
  }
  /**
   * sets up the various wrappers - only needs to be called once
   * the z index is set by the order drawn
   */
  init() {
    if (!this.el)
      return !1;
    if ((this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces)) && (this.decimalPlaces = 2), this.formatDp = ot.format(`.${this.decimalPlaces}f`), !this.svgCanvas) {
      if (this.htmlEl.querySelector("svg") === null) {
        const n = this.el.append("svg").attr("class", "vis");
        if (n === null)
          return;
        n.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), n.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(90)").attr("id", "grain-l").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), n.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("id", "grain-w").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), this.svgCanvas = n;
      }
      this.axisGroup = this.svgCanvas.append("g").attr("class", "axis-group"), this.stockGroup = this.svgCanvas.append("g").attr("class", "stock-group"), this.shapeGroup = this.svgCanvas.append("g").attr("class", "shapes"), this.bandingGroup = this.svgCanvas.append("g").attr("class", "banding-group"), this.segmentGroup = this.svgCanvas.append("g").attr("class", "segments").attr("display", "none"), this.positionGroup = this.svgCanvas.append("g").attr("class", "positions"), this.dotGroup = this.svgCanvas.append("g").attr("class", "dots"), this.cutGroup = this.svgCanvas.append("g").attr("class", "cuts");
    }
    this.elWidth > 0 && this.updateSize(!0), this.hasTouch = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
  trimNameToFit(e, n) {
    function i(r, s, o) {
      const a = o[s], l = ot.select(a);
      l.text(r.name);
      let c = l.text();
      const u = l.node();
      if (!u)
        return;
      let f = u.getComputedTextLength();
      const h = this.getWidthAttribute(r) - 20;
      for (; f > h && c.length > 0; )
        c = c.slice(0, -1), l.text(c.length ? c + "..." : ""), f = l.node().getComputedTextLength();
    }
    e.each(i.bind(n));
  }
  getShapeColor(e) {
    return this.env === "development" ? this.scoreColorScale(e.bestScore.total) : this.shapeColorScale(e.parentID - 1);
  }
  updateDecimalPlaces(e) {
    this.decimalPlaces = e, this.formatDp = ot.format(`.${e}f`);
  }
  setDevice() {
    if (!(!this.htmlEl || this.htmlEl.style.display === "none") && this.htmlEl.offsetWidth) {
      if (this.elWidth = this.htmlEl.offsetWidth, this.elHeight = this.htmlEl.offsetHeight, this.elWidth === 0)
        return !1;
      this.main ? this.elWidth <= this.mobileBreakpoint || this.app ? (this.device = "mobile", this.padding = 0) : (this.device = "desktop", this.padding = 50) : this.padding = 0, this.w = this.elWidth;
    }
  }
  //find the largest dimensions of all the stock (not just the active one)
  findLargestStockDimensions() {
    const e = Et.call(this.vueComponent, ["stockList"]).filter((r) => r.used);
    if (!(e != null && e.length))
      return [null, null];
    const n = e.reduce(
      (r, s) => r.l > s.l ? r : s
    ), i = e.reduce(
      (r, s) => r.w > s.w ? r : s
    );
    return [n, i];
  }
  debounce(e, n, i = !1) {
    let r;
    return (...s) => new Promise((o) => {
      const a = () => {
        r = null, i || o(e.apply(this, s));
      };
      clearTimeout(r), i && !r && o(e.apply(this, s)), r = setTimeout(a, n);
    });
  }
  updateSize(e = !1) {
    return this.debounce(this._updateSize.bind(this), 10, e)();
  }
  _updateSize() {
    if (!this.htmlEl || this.htmlEl.style.display === "none")
      return;
    this.vueComponent && "suppressResizeObserver" in this.vueComponent && (this.vueComponent.suppressResizeObserver = !0);
    const e = Et.call(this.vueComponent, ["stockList"]), n = Et.call(this.vueComponent, ["shapeList"]);
    if (!(e != null && e.length) || !(n != null && n.length))
      return !1;
    this.setDevice();
    const [i, r] = this.findLargestStockDimensions();
    if (!(i != null && i.l) || !(r != null && r.w))
      return !1;
    if (r && i) {
      this.w = this.elWidth;
      const s = i.w / i.l;
      this.xScale.domain([0, i.l]).range([this.padding, this.w - this.padding]), s < 0.15 ? this.h = this.htmlEl.clientWidth * 0.15 + this.padding * 2 : this.h = this.xScale(i.getShortSide()) + this.padding, this.yScale.domain([0, r.w]).range([this.padding, this.h - this.padding]), this.yAxisScale.domain(this.flipY ? [0, r.w] : [r.w, 0]).range([this.padding, this.h - this.padding]), this.yPositionScale.domain([0, r.w]).range(
        this.flipY ? [this.padding, this.h - this.padding] : [this.h - this.padding, this.padding]
      ), s > 2 && (this.w = this.htmlEl.clientWidth / s + this.padding * 2, this.xScale.domain([0, i.l]).range([this.padding, this.w - this.padding]), this.h = this.xScale(i.getShortSide()) + this.padding), this.xPositionScale.domain([0, i.l]).range(
        this.flipX ? [this.w - this.padding, this.padding] : [this.padding, this.w - this.padding]
      ), this.measurementScale.domain([0, i.l]).range([0, this.w - this.padding * 2]), this.w > 0 && this.h > 0 && (s > 2 ? this.el.style("width", this.w + "px") : this.el.style("width", ""), this.el.style("height", this.h + "px"));
    }
    this.refreshStock(), this.refreshShapes();
  }
  refreshStock() {
    const e = Et.call(this.vueComponent, ["stockList"]);
    if (!(e != null && e.length))
      return !1;
    const n = Et.call(this.vueComponent, ["activeStock"]);
    this.initStock(n), this.resetCuts();
    const i = Et.call(this.vueComponent, ["activeCuts"]);
    this.initCuts(i), this.resetSegments();
    const r = Et.call(this.vueComponent, [
      "activeSegments"
    ]);
    this.initSegments(r), this.resetPositions(), typeof this.vueComponent.toggleSegments == "function" && this.vueComponent.toggleSegments(!1);
  }
  refreshShapes() {
    const e = Et.call(this.vueComponent, ["shapeList"]);
    if (!(e != null && e.length))
      return !1;
    this.resetPositions();
    const n = Et.call(this.vueComponent, ["activeShapes"]);
    this.initShapes(n, e);
  }
  //init or update the stock
  initStock(e) {
    if (this.resetStock(), !e || !(e != null && e.w) || !(e != null && e.l) || !this.elWidth)
      return !1;
    this.stockType = e.type;
    let n;
    const [i, r] = this.findLargestStockDimensions();
    if (!(i != null && i.l) || !(r != null && r.w))
      return !1;
    typeof e == "object" && (n = [e]), this.device === "desktop" && this.main && (this.xAxis = this.axisGroup.append("g").attr("transform", `translate(0, ${this.padding})`).attr("class", "axis stock x").call(ot.axisTop(this.xScale).ticks(5).tickSize(2)).selectAll("text").attr("dy", -5), this.yAxis = this.axisGroup.append("g").attr("transform", `translate(${this.w - this.padding}, 0)`).attr("class", "axis stock y").call(ot.axisRight(this.yAxisScale).ticks(5).tickSize(2)).selectAll("text").attr("dx", 5)), this.stockGroup.data(n).attr(
      "transform",
      () => `translate(${this.padding},${this.padding})`
    ), this.stockGroup.append("rect").attr("class", "background stock-area").attr("width", this.getWidthAttribute(i)).attr("height", this.getHeightAttribute(i)), this.stockGroup.append("rect").attr("class", "background stock").style("fill", this.colors.stock).attr("width", (s) => this.getWidthAttribute(s)).attr("height", (s) => this.getHeightAttribute(s)).attr(
      "x",
      (s) => this.getRectangleCoordinate(s, "x") - this.padding
    ).attr(
      "y",
      (s) => this.getRectangleCoordinate(s, "y") - this.padding
    ), this.stock = this.stockGroup.append("rect").attr("width", (s) => this.getWidthAttribute(s)).attr("height", (s) => this.getHeightAttribute(s)).attr(
      "x",
      (s) => this.getRectangleCoordinate(s, "x") - this.padding
    ).attr(
      "y",
      (s) => this.getRectangleCoordinate(s, "y") - this.padding
    ).style(
      "fill",
      (s) => s != null && s.grain ? `url(#grain-${s.grain.toLowerCase()})` : "url(#stripes)"
    );
  }
  getWidthAttribute(e) {
    return this.xScale(e.l) - this.padding;
  }
  getHeightAttribute(e) {
    return this.yScale(e.w) - this.padding;
  }
  //init or update the shapes
  initShapes(e, n) {
    var i, r, s;
    if (this.resetShapes(), !(!e || !e.length || !this.elWidth)) {
      if (this.numUniqueShapes = n.filter(
        (o) => !o.duplicate
      ).length, this.shapeColorScale.domain([0, this.numUniqueShapes]), (i = this == null ? void 0 : this.vueComponent) != null && i.gs) {
        this.vueComponent.gs.shapeColors = {};
        for (let o = e.length; o--; ) {
          const a = e[o];
          a.parentID && this.vueComponent.gs.shapeColors[a.parentID] || a.parentID && (this.vueComponent.gs.shapeColors[a.parentID] = Vn(
            this.shapeColorScale(a.parentID - 1)
          ).formatHex());
        }
      }
      if (this.env === "development") {
        let o = 1 / 0, a = -1 / 0;
        for (const u of e) {
          const f = (r = u == null ? void 0 : u.bestScore) == null ? void 0 : r.total;
          if (f !== 0 && f !== null && f !== void 0) {
            o = f, a = f;
            break;
          }
        }
        const l = e.reduce((u, f) => {
          var d;
          const h = (d = f == null ? void 0 : f.bestScore) == null ? void 0 : d.total;
          return h === 0 || h === null || h === void 0 ? u : h < u ? h : u;
        }, o), c = e.reduce((u, f) => {
          var d;
          const h = (d = f == null ? void 0 : f.bestScore) == null ? void 0 : d.total;
          return h == null ? u : h > u ? h : u;
        }, a);
        this.scoreColorScale = ot.scaleSequential([zt(251, 224, 255), zt(122, 0, 138)]).domain([l, c]);
      }
      if (!e || !e.length || (this.shapeWrappers = this.shapeGroup.selectAll("g").data(e).join("g").attr("class", "shape-group"), !this.shapeWrappers.size()))
        return !1;
      if (this.shapes = this.shapeWrappers.append("rect").attr("class", "shape").attr("fill", (o) => this.getShapeColor(o)).attr(
        "stroke",
        (o) => this.env === "development" && o.addedAsGroup ? zt(53, 186, 20) : "none"
      ).attr("stroke-width", () => this.env === "development" ? 3 : 0).attr("width", (o) => this.getWidthAttribute(o)).attr("height", (o) => this.getHeightAttribute(o)), this.main) {
        const o = [];
        e.forEach((a) => {
          if (a != null && a._banding)
            for (const [l, c] of Object.entries(a._banding)) {
              if (!c || ["a", "b", "c", "d"].includes(l))
                continue;
              let u = l;
              if (a.rot)
                switch (l) {
                  case "x1":
                    u = "y1";
                    break;
                  case "x2":
                    u = "y2";
                    break;
                  case "y1":
                    u = "x2";
                    break;
                  case "y2":
                    u = "x1";
                    break;
                }
              switch (u) {
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
        ).attr("stroke-width", 2).attr("stroke", "white"), this.shapeIDText = this.shapeWrappers.append("text").attr("class", "shape-text id").text((a) => this.env === "development" ? a.addedAsGroup ? a.addedAsGroup : a.getParentID() : a.parentID ? a.parentID : a.getParentID()).classed("hidden", (a, l, c) => {
          const u = c[l].getBBox();
          return u.width >= this.measurementScale(a.l) || u.height >= this.yScale(a.w) - this.padding;
        }).attr("dominant-baseline", "middle").attr("fill", this.colors.text), this.shapeNameText = this.shapeWrappers.append("text").attr("class", "shape-text name").text((a) => !(a != null && a.name) || typeof (a == null ? void 0 : a.name) != "string" ? null : a.name.toUpperCase().trim()).call(this.trimNameToFit, this).classed("hidden", (a, l, c) => c[l].getBBox().width >= this.measurementScale(a.l) || this.measurementScale(a.w) < 40).attr("dominant-baseline", "middle").attr("fill", this.colors.text), this.shapeLengthText = this.shapeWrappers.append("text").attr("class", "shape-text length").text(
          (a) => W(a.l, this.units, this.decimalPlaces)
        ).classed("hidden", (a, l, c) => this.app ? this.measurementScale(a.l) < 50 || this.measurementScale(a.w) < 50 : a.stock.type === "linear" ? !1 : c[l].getBBox().width >= this.measurementScale(a.l) || this.measurementScale(a.w) < 30).attr("dominant-baseline", "middle").attr("fill", this.colors.text), this.shapeWidthText = this.shapeWrappers.append("text").attr("class", "shape-text width").text(
          (a) => W(a.w, this.units, this.decimalPlaces)
        ).classed("hidden", (a, l, c) => {
          if (this.app)
            return this.measurementScale(a.l) < 50 || this.measurementScale(a.w) < 50;
          const u = c[l].getBBox();
          return this.measurementScale(a.l) < 30 || u.height >= this.measurementScale(a.w);
        }).attr("dominant-baseline", "middle").attr("fill", this.colors.text);
      }
      (this.main || this.app) && !((s = this == null ? void 0 : this.options) != null && s.disableClick) && (this.shapes.on("mousedown", (o, a) => {
        var l, c, u, f;
        if (this.moving)
          return !1;
        if (this.env === "development") {
          let h = function(v, _) {
            return _.split(".").reduce((g, b) => g[b], v);
          };
          console.clear();
          const d = JSON.parse(JSON.stringify(a));
          console.log(
            [
              // 'x',
              // 'y',
              "addedAsGroup",
              "groupID",
              "placementOrder"
            ].reduce((v, _) => (v[_] = h(d, _), v), {})
          );
        }
        if (this.app || this.embed) {
          const h = {
            name: a.name,
            id: a.id,
            x: a.x,
            y: a.y,
            l: a.l,
            w: a.w,
            banding: a != null && a.banding && typeof a.banding == "object" ? a.banding : null,
            rot: a.rot,
            stock: (l = a == null ? void 0 : a.stock) == null ? void 0 : l.id,
            color: Vn(this.getShapeColor(a)).formatHex()
          }, d = new CustomEvent("partClick", {
            detail: h
          });
          if (this.env === "development" && console.log(h), this.htmlEl.dispatchEvent(d), this.app)
            return !1;
        }
        !this.moveMode && ((c = this.vueComponent) != null && c.gs) && (this.vueComponent.gs.examineShape = a), this.device === "desktop" && (this.resetCutMeasurementAxes(), this.addShapeAxes(a)), this.shapes.classed("selected", !1), this.shapes.style("fill", (h) => this.getShapeColor(h)), this.moveMode ? (a.stock.cutType === "efficiency" || a.stock.type === "linear") && ((f = (u = this.vueComponent.$refs) == null ? void 0 : u.partsBin) == null || f.addToPartsBin(a)) : (ot.select(o.target).classed("selected", !0), ot.select(o.target).style(
          "fill",
          this.colors.partSelected.toString()
        ));
      }), !this.app && !this.hasTouch && this.shapes.on(
        "mouseover",
        (o) => {
          this != null && this.moveMode && this.moving || (ot.select(o.target).classed("hover", !0), ot.select(o.target).classed("selected") || ot.select(o.target).style(
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
          ot.select(o.target).classed("hover", !1), ot.select(o.target).classed("selected") || ot.select(o.target).style(
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
  updateShapeVisibility(e) {
    var n;
    (n = this == null ? void 0 : this.shapeWrappers) == null || n.style("visibility", (i) => (i == null ? void 0 : i.placementOrder) >= e ? "hidden" : "visible");
  }
  //update CUT visibility
  updateCutVisibility(e, n = null) {
    var a, l, c, u, f, h, d;
    if (n === null || e == null || this != null && this.cuts.empty())
      return;
    this.resetShapeAxes(), this.resetCutMeasurementAxes(), ot.select(this.cuts.nodes()[n].parentNode).raise();
    const i = (a = e.guillotineData) == null ? void 0 : a.parentSegmentID, r = this.getHalfBladeWidth(e.stock), s = e.direction === "l" ? "y" : "x", o = (l = e == null ? void 0 : e.stock) == null ? void 0 : l.trim;
    if ((e.stock.cutType === "guillotine" || e.stock.cutType === "beam") && i !== null && typeof i < "u") {
      this.cuts.style("visibility", (x) => typeof e.guillotineData.order == "number" && x.guillotineData.order <= e.guillotineData.order || x.guillotineData.parentSegmentID === i ? "visible" : "hidden"), this.cuts.classed("highlight", (x) => e.stock.cutType === "guillotine" && x.isTrim ? x.type === e.type : x.guillotineData.order === e.guillotineData.order);
      const m = (c = e == null ? void 0 : e.guillotineData) == null ? void 0 : c.segmentCutOrder;
      if (m == null)
        return;
      this.cuts.classed("completed", (x) => x.guillotineData.parentSegmentID === i && m && x.guillotineData.segmentCutOrder < m), this.cuts.classed("inside-segment", (x) => {
        var S;
        return ((S = x.guillotineData) == null ? void 0 : S.parentSegmentID) !== null && !(x != null && x.isTrim) ? x.guillotineData.parentSegmentID === i : !1;
      });
      let v, _;
      const g = this.getCutSegments(e);
      if (g === !1)
        return;
      const b = (f = g == null ? void 0 : g.siblings) == null ? void 0 : f[(u = g.main) != null && u.hasBeamTrim ? m - 1 : m];
      b && ((e == null ? void 0 : e.direction) === "l" ? v = [
        [
          b.y,
          b.y + b.w
        ],
        [
          e.y1 + r,
          (g == null ? void 0 : g.main.y) + (g == null ? void 0 : g.main.w)
        ]
      ] : (e == null ? void 0 : e.direction) === "w" && (v = [
        [
          b.x,
          b.x + b.l
        ],
        [
          e.x1 + r,
          (g == null ? void 0 : g.main.x) + (g == null ? void 0 : g.main.l)
        ]
      ]), (e == null ? void 0 : e.direction) === "l" ? _ = [(h = e == null ? void 0 : e.distances) == null ? void 0 : h.bottom, e == null ? void 0 : e.distances.top] : (e == null ? void 0 : e.direction) === "w" && (_ = [e == null ? void 0 : e.distances.left, (d = e == null ? void 0 : e.distances) == null ? void 0 : d.right]), this.device === "desktop" && !e.isTrim && this.addCutMeasurementAxes(v, _, s));
    } else {
      this.cuts.style(
        "visibility",
        (v, _) => _ <= n ? "visible" : "hidden"
      );
      let m;
      if ((e == null ? void 0 : e.direction) === "l" ? m = [
        [0 + (o.y1 ?? 0), e.y1 - r],
        [
          e.y1 + r,
          e.stock.w - (o != null && o.y2 ? o.y2 : 0)
        ]
      ] : (e == null ? void 0 : e.direction) === "w" && (m = [
        [0 + (o.x1 ?? 0), e.x1 - r],
        [
          e.x1 + r,
          e.stock.l - (o != null && o.x2 ? o.x2 : 0)
        ]
      ]), m != null && m.length) {
        const v = [
          m[0][1] - m[0][0],
          m[1][1] - m[1][0]
        ];
        this.device === "desktop" && !e.isTrim && this.addCutMeasurementAxes(m, v, s);
      }
      this.cuts.classed(
        "highlight",
        (v, _) => _ === n
      );
    }
    this.cuts.attr("stroke-width", (m, v) => {
      let _ = Math.ceil(
        this.measurementScale(this.getBladeWidth(m.stock))
      );
      return v === n && this.measurementScale(this.getBladeWidth(m.stock)) < 5 && (_ = 5), _;
    });
  }
  //highlight a specific cut (by order or index), segments and related measurements
  showCut(e, n = null) {
    if (n === null)
      return !1;
    this.updateCutVisibility(e, n);
    const i = this.getCutSegments(e);
    if (i === !1)
      return;
    const { siblings: r } = i, s = r == null ? void 0 : r.length;
    let o = [];
    if (s) {
      for (let l = s; l--; )
        r[l] && (r[l].completed = !1);
      if (e.guillotineData.segmentCutOrder === void 0 || e.guillotineData.segmentCutOrder === null)
        return;
      const a = e.guillotineData.segmentCutOrder;
      for (let l = 0; l < s; l++)
        l < a && (r[l].completed = !0);
      o.push(...r), o = o.filter((l) => l);
    }
    o.length && (this.resetSegments(), this.initSegments(o));
  }
  /**
   * toggle the visibility of the shapes
   * @param {Boolean} show
   */
  toggleShapes(e = !1) {
    e ? (this.shapeGroup.attr("display", "block"), this.bandingGroup.attr("display", "block")) : (this.shapeGroup.attr("display", "none"), this.bandingGroup.attr("display", "none"));
  }
  /**
   * add measurements to an axis
   * @param {Array} measurements array of arrays
   * @param {Array} values array of values
   * @param {String} axis x | y
   */
  addCutMeasurementAxes(e, n, i) {
    !i || !(e != null && e.length) || e.forEach((r, s) => {
      const o = r[0], a = r[1];
      if (i === "x") {
        const l = ot.scaleLinear().domain([o, a]).range([
          this.xPositionScale(o),
          this.xPositionScale(a)
        ]), c = (l.domain()[1] - l.domain()[0]) / 2 + l.domain()[0], u = this.axisGroup.append("g").attr(
          "transform",
          `translate(0, ${this.h - this.padding + this.axisSpacing})`
        ).attr("class", "axis measurement x").call(
          ot.axisBottom(l).tickValues([c]).tickSize(4).tickFormat(() => n[s].toFixed(
            this.decimalPlaces
          ))
        );
        u.selectAll("text").attr("x", 0).attr("y", 0).attr(
          "dy",
          (f, h, d) => d[h].getBBox().height + 10
        ), this.cutMeasurementXAxes.push(u);
      } else {
        const l = ot.scaleLinear().domain([o, a]).range([
          this.yPositionScale(o),
          this.yPositionScale(a)
        ]), c = (l.domain()[1] - l.domain()[0]) / 2 + l.domain()[0], u = this.axisGroup.append("g").attr(
          "transform",
          `translate(${this.padding - this.axisSpacing}, 0)`
        ).attr("class", "axis measurement y").call(
          ot.axisLeft(l).tickValues([c]).tickSize(4).tickFormat(
            () => n[s].toFixed(this.decimalPlaces)
          )
        );
        u.selectAll("text").attr("x", 0).attr("y", 0).attr(
          "dy",
          (f, h, d) => d[h].getBBox().height + 10
        ).attr(
          "dx",
          (f, h, d) => d[h].getBBox().width / 4
        ).attr(
          "transform",
          (f, h, d) => "rotate(90) translate(" + d[h].getBBox().width / 4 + ")"
        ), this.cutMeasurementYAxes.push(u);
      }
    });
  }
  /**
   * add the shape axes
   * @param {Shape} shape
   */
  addShapeAxes(e) {
    var l;
    this.shapeXAxis && this.shapeXAxis.remove(), this.shapeYAxis && this.shapeYAxis.remove();
    const n = e.x, i = e.x + e.l, r = ot.scaleLinear().domain([n, i]).range([this.xPositionScale(n), this.xPositionScale(i)]), s = e.y, o = e.y + e.w, a = ot.scaleLinear().domain([s, o]).range([this.yPositionScale(s), this.yPositionScale(o)]);
    this.shapeXAxis = this.axisGroup.append("g").attr(
      "transform",
      `translate(0, ${this.h - this.padding + this.axisSpacing})`
    ).attr("class", "axis shape x").call(
      ot.axisBottom(r).tickValues(r.domain()).tickSize(4).tickFormat(this.formatDp)
    ), this.shapeXAxis.selectAll("text").attr("dx", (c, u, f) => {
      const h = f[u];
      if (h === null)
        return;
      const d = h.getBBox();
      return u === 0 ? -d.width / 2 : d.width / 2;
    }), ((l = e == null ? void 0 : e.stock) == null ? void 0 : l.type) !== "linear" && (this.shapeYAxis = this.axisGroup.append("g").attr(
      "transform",
      `translate(${this.padding - this.axisSpacing}, 0)`
    ).attr("class", "axis shape y").call(
      ot.axisLeft(a).tickValues(a.domain()).tickSize(4).tickFormat(this.formatDp)
    ), this.shapeYAxis.selectAll("text").attr("x", 0).attr("y", 0).attr(
      "dy",
      (c, u, f) => {
        var h, d;
        return ((d = (h = f[u]) == null ? void 0 : h.getBBox()) == null ? void 0 : d.height) + 2;
      }
    ).attr(
      "dx",
      (c, u, f) => {
        var h, d;
        return ((d = (h = f[u]) == null ? void 0 : h.getBBox()) == null ? void 0 : d.width) / 2;
      }
    ).attr("transform", (c, u, f) => {
      var h, d, m, v, _, g, b, x;
      return this.flipY ? u === 0 ? "rotate(90) translate(-" + ((d = (h = f[u]) == null ? void 0 : h.getBBox()) == null ? void 0 : d.width) / 2 + ")" : "rotate(90) translate(" + ((v = (m = f[u]) == null ? void 0 : m.getBBox()) == null ? void 0 : v.width) / 2 + ")" : u === 0 ? "rotate(90) translate(" + ((g = (_ = f[u]) == null ? void 0 : _.getBBox()) == null ? void 0 : g.width) / 2 + ")" : "rotate(90) translate(-" + ((x = (b = f[u]) == null ? void 0 : b.getBBox()) == null ? void 0 : x.width) / 2 + ")";
    }));
  }
  getBandingAdjustment(e, n) {
    switch (e) {
      case "y1":
        if (n === "x")
          return 0;
        if (n === "y")
          return this.flipY ? 1 : -1;
        break;
      case "y2":
        if (n === "x")
          return 0;
        if (n === "y")
          return this.flipY ? -1 : 1;
        break;
      case "x1":
        if (n === "x")
          return this.flipX ? -1 : 1;
        if (n === "y")
          return 0;
        break;
      case "x2":
        if (n === "x")
          return this.flipX ? 1 : -1;
        if (n === "y")
          return 0;
        break;
    }
    return 0;
  }
  getRectangleCoordinate(e, n, i, r) {
    let s;
    if (n === "x") {
      let o;
      switch (i) {
        case "center":
          o = this.xPositionScale(e.x + e.l / 2), r && (o += r);
          break;
        case "right":
          o = this.xPositionScale(e.x + e.l), r && (o -= r);
          break;
        case "left":
        default:
          o = this.xPositionScale(
            this.flipX ? e.x - e.l : e.x
          ), r && (o -= r);
      }
      s = o;
    } else if (n === "y") {
      let o;
      switch (i) {
        case "center":
          o = this.yPositionScale(e.y + e.w / 2), r && (o += r);
          break;
        case "bottom":
          o = this.yPositionScale(
            this.flipY ? e.y + e.w : e.y
          ), r && (o += r);
          break;
        case "top":
        default:
          o = this.yPositionScale(
            this.flipY ? e.y : e.y + e.w
          ), r && (o -= r);
      }
      s = o;
    }
    return s;
  }
  getRotatedSide(e) {
    switch (e) {
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
    if (!this.shapes)
      return !1;
    this.shapes.attr("x", (e) => this.getRectangleCoordinate(e, "x")).attr("y", (e) => this.getRectangleCoordinate(e, "y")).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)), this.main && (this.shapeIDText.attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1), this.shapeNameText && this.shapeNameText.attr(
      "x",
      (e) => this.getRectangleCoordinate(e, "x", "center")
    ).attr(
      "y",
      (e, n, i) => this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(i[n].getBBox().height / 2 + 1)
      )
    ), this.shapeLengthText.attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr(
      "y",
      (e, n, i) => this.getRectangleCoordinate(
        e,
        "y",
        "top",
        -(i[n].getBBox().height / 2 + 2)
      )
    ), this.shapeWidthText.attr(
      "transform",
      (e, n, i) => `translate(${this.getRectangleCoordinate(
        e,
        "x",
        "left",
        -(i[n].getBBox().height / 2 + 2)
      )},${this.getRectangleCoordinate(e, "y", "center")}) ${this.device === "mobile" ? "rotate(90)" : "rotate(-90)"}`
    ));
  }
  //init or update the cuts
  initCuts(e) {
    if (!e || !(e != null && e.length) || !this.main || !this.elWidth)
      return !1;
    this.cuts = this.cutGroup.selectAll("line").data(e).join("line").attr("class", "cut").attr("stroke-width", (n) => {
      const i = this.measurementScale(
        this.getBladeWidth(n.stock)
      );
      return i < 1 ? 1 : Math.ceil(i);
    }).attr("x1", (n) => this.xPositionScale(n.getVisCoords("x1"))).attr("x2", (n) => this.xPositionScale(n.getVisCoords("x2"))).attr("y1", (n) => this.yPositionScale(n.getVisCoords("y1"))).attr("y2", (n) => this.yPositionScale(n.getVisCoords("y2"))).classed("trim", (n) => n.isTrim);
  }
  //init or update the segments
  initSegments(e) {
    if (!e || !(e != null && e.length) || !this.main || !this.elWidth)
      return !1;
    this.segments = this.segmentGroup.selectAll("rect").data(e).join("rect").attr("class", "segment").style("opacity", (n) => {
      if ((n == null ? void 0 : n.offcut) === !0)
        return 0.5;
    }).classed("offcut", (n) => n.offcut).classed("merged", (n) => n.merged).classed("near", (n) => n.shapePosition === "near").classed("far", (n) => n.shapePosition === "far").classed("completed", (n) => n.completed).attr("x", (n) => this.getRectangleCoordinate(n, "x")).attr("y", (n) => this.getRectangleCoordinate(n, "y")).attr("width", (n) => this.getWidthAttribute(n)).attr("height", (n) => this.getHeightAttribute(n)), !this.app && this.env === "development" && (this.segments.on("mousedown", function(n, i) {
      console.log(i);
    }), this.hasTouch || this.segments.on(
      "mouseover",
      function() {
        ot.select(this).classed("hover", !0);
      },
      {
        passive: !0
      }
    ).on(
      "mouseout",
      function() {
        ot.select(this).classed("hover", !1);
      },
      {
        passive: !0
      }
    ));
  }
  //get relevant segments for a specific cut
  getCutSegments(e) {
    var o, a, l, c;
    const n = (o = e == null ? void 0 : e.guillotineData) == null ? void 0 : o.parentSegmentID, i = ((l = (a = this.vueComponent) == null ? void 0 : a.gs) == null ? void 0 : l.activeSegments) ?? ((c = this.vueComponent) == null ? void 0 : c.activeSegments);
    if (!i.length)
      return !1;
    const r = i.find(
      (u) => u.id === n
    );
    if (r === void 0)
      return !1;
    const s = r == null ? void 0 : r.children;
    if (s != null && s.length) {
      const u = s.map((h) => {
        const d = i.find(
          (m) => m.x === h.x && m.y === h.y && m.l === h.l && m.w === h.w
        );
        return d !== void 0 ? d : null;
      }).filter((h) => h !== null);
      return {
        main: r,
        siblings: u
      };
    }
    return !1;
  }
  /**
   * toggle the visibility of the segments
   * @param {Boolean} show
   */
  toggleSegments(e = !0) {
    e ? this.segmentGroup.attr("display", "block") : this.segmentGroup.attr("display", "none");
  }
  /**
   * show a list of possible movement positions
   */
  initPositions(e, n) {
    if (!n || !e || !this.main)
      return !1;
    let i;
    if (n.trimDimensions(), !e.willItFit(n, e.rot))
      return !1;
    n.removeTrim();
    const r = Et.call(this.vueComponent, ["shapeList"]).filter(
      (a) => {
        var l;
        return a.added && ((l = a == null ? void 0 : a.stock) == null ? void 0 : l.id) === n.id;
      }
    ), s = x0(
      null,
      r,
      n
    ), o = new Qs();
    s.toArray().forEach((a) => {
      o.addPoints(
        k0(e, a, n).toArray()
      );
    }), n.cutType === "efficiency" ? ([
      new Ct(0 + (n.trim.x1 ?? 0), 0 + (n.trim.y1 ?? 0)),
      new Ct(0 + (n.trim.x1 ?? 0), 0 + (n.trim.y1 ?? 0)),
      new Ct(
        n.l - e.l - (n.trim.x2 ?? 0),
        0 + (n.trim.y1 ?? 0)
      ),
      new Ct(
        0 + (n.trim.x1 ?? 0),
        n.w - e.w - (n.trim.y2 ?? 0)
      ),
      new Ct(
        n.l - e.l - (n.trim.x2 ?? 0),
        n.w - e.w - (n.trim.y2 ?? 0)
      )
    ].forEach((a) => o.addPoint(a)), i = o.toArray()) : (o.addPoint(
      new Ct(0 + (n.trim.x1 ?? 0), 0 + (n.trim.y1 ?? 0))
    ), i = o.toArray(), i = i.filter((a) => {
      const l = new fr({
        x: a.x,
        y: a.y,
        l: e.l,
        w: e.w,
        stock: n
      }), c = n.cutPreference, u = c === "l" ? "x" : "y", f = u === "x" ? "y" : "x";
      if (l[u] === 0 + n.trim[u + 1])
        return !0;
      const h = r.find(
        (d) => d[u] === n.trim[u + 1] && p0(l, d, f)
      );
      if (!h)
        return !1;
      if (l[f] === h[f])
        return !0;
      for (let d = r.length; d--; ) {
        const m = r[d], v = r.find(
          (_) => iu(
            c === "l" ? "above" : "right",
            _,
            l
          )
        );
        if (iu(
          c === "l" ? "right" : "above",
          m,
          l
        ) && (l[f] === n.trim[f + 1] || v))
          return !0;
      }
      return !1;
    }));
    for (let a = i.length; a--; ) {
      e.x = i[a].x, e.y = i[a].y;
      for (let l = r.length; l--; )
        if (this.collision(e, r[l], n)) {
          i.splice(a, 1);
          break;
        }
    }
    return this.positionGroup.selectAll("rect").data(i).join("rect").attr("data-id", (a, l) => l).attr("class", "shape ghost").attr("x", (a) => (e.x = a.x, this.getRectangleCoordinate(e, "x"))).attr("y", (a) => (e.y = a.y, this.getRectangleCoordinate(e, "y"))).attr("width", this.getWidthAttribute(e)).attr("height", this.getHeightAttribute(e)).on("mousedown", (a, l) => {
      a.stopPropagation(), this.vueComponent.$refs.partsBin.moveShape(
        a.currentTarget,
        e,
        l
      );
    }), this.hasTouch || this.positionGroup.selectAll("rect").on(
      "mouseover",
      function(a) {
        a.stopPropagation(), ot.select(this).classed("hover", !0), ot.select(this).raise();
      },
      {
        passive: !0
      }
    ).on(
      "mouseout",
      function(a) {
        a.stopPropagation(), ot.select(this).classed("hover", !1);
      },
      {
        passive: !0
      }
    ), this.dotGroup.selectAll("circle").data(i).join("circle").attr("data-id", (a, l) => l).attr("class", "dot").attr("cx", (a) => (e.x = a.x, this.getRectangleCoordinate(e, "x"))).attr("cy", (a) => (e.y = a.y, this.getRectangleCoordinate(e, "y"))).attr("r", 8).on("mousedown", (a, l) => {
      a.stopPropagation(), this.vueComponent.$refs.partsBin.moveShape(
        a.currentTarget,
        e,
        l
      );
    }), e.x = 0, e.y = 0, this.hasTouch || this.dotGroup.selectAll("circle").on(
      "mouseover",
      function(a) {
        a.stopPropagation(), ot.select(this).classed("hover", !0);
        const l = ot.select(this).attr("data-id"), c = ot.select(`.ghost[data-id="${l}"]`);
        c.raise(), c.classed("highlight", !0);
      },
      {
        passive: !0
      }
    ).on(
      "mouseout",
      function(a) {
        a.stopPropagation(), ot.select(this).classed("hover", !1);
        const l = ot.select(this).attr("data-id");
        ot.select(`.ghost[data-id="${l}"]`).classed(
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
   * toggle the visibility of the cuts
   * @param {Boolean} show
   */
  toggleCuts(e = !0) {
    e ? this.cutGroup.attr("display", "block") : this.cutGroup.attr("display", "none");
  }
  clearSelection() {
    var e;
    this != null && this.shapes && (this.shapes.classed("selected", !1), this.shapes.classed("hover", !1), this.shapes.style("fill", (n) => this.getShapeColor(n))), this != null && this.cuts && (this.cuts.classed("selected", !1), this.cuts.classed("highlight", !1), this.cuts.classed("inside-segment", !1), this.cuts.style("visibility", "visible"), this.cuts.attr(
      "stroke-width",
      (n) => Math.ceil(
        this.measurementScale(
          this.getBladeWidth(n.stock)
        )
      )
    )), (e = this == null ? void 0 : this.shapes) != null && e.length && this.shapes.classed("selected", !1);
  }
  /**
   * add padding
   * this.padding will be 0 when necessary
   * @param {number} value
   */
  addPadding(e) {
    return e + this.padding;
  }
  /**
   * @param {Container} container
   * @returns {number} blade width
   */
  getBladeWidth(e = null) {
    var n, i;
    return A((n = this == null ? void 0 : this.saw) == null ? void 0 : n.bladeWidth) ? (i = this.saw) == null ? void 0 : i.bladeWidth : A(e) && e !== null ? e.getBladeWidth() : 0;
  }
  getHalfBladeWidth(e = null) {
    const n = this.getBladeWidth(e);
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
  resetCutMeasurementAxes() {
    var e, n;
    (e = this.cutMeasurementXAxes) != null && e.length && (this.cutMeasurementXAxes.forEach((i) => i.remove()), this.cutMeasurementXAxes.length = 0), (n = this.cutMeasurementYAxes) != null && n.length && (this.cutMeasurementYAxes.forEach((i) => i.remove()), this.cutMeasurementYAxes.length = 0);
  }
  resetPositions() {
    this.positionGroup && this.positionGroup.selectAll("*").remove(), this.dotGroup && this.dotGroup.selectAll("*").remove();
  }
  reset() {
    this.resetPositions(), this.resetShapes(), this.resetStock(), this.resetCuts(), this.resetSegments();
  }
  /**
   * detect collision - required for move mode
   * @param {object} thisShape
   * @param {object} testShape
   * @param {object} container
   * @returns {boolean} true if collision
   */
  collision(e, n, i) {
    if (e.id === n.id)
      throw new Error("collision comparing to self");
    return (
      // 1 left
      e.x < n.x + n.l + this.getBladeWidth(i) && // 2 right
      e.x + e.l + this.getBladeWidth(i) > n.x && // 3 bottom
      e.y < n.y + n.w + this.getBladeWidth(i) && // 4 top
      e.y + e.w + this.getBladeWidth(i) > n.y
    );
  }
}
function vt(t, e) {
  var n;
  return t != null && t[0] ? (typeof ((n = this == null ? void 0 : this.gs) == null ? void 0 : n[t[0]]) < "u" ? hu(this.gs, t, e) : typeof (this == null ? void 0 : this[t[0]]) < "u" && hu(this, t, e), !0) : !1;
}
function Et(t) {
  var e;
  if (!(t != null && t[0]))
    return null;
  if ("gs" in this && typeof ((e = this == null ? void 0 : this.gs) == null ? void 0 : e[t[0]]) < "u")
    return _s(this.gs, t);
  if (typeof (this == null ? void 0 : this[t[0]]) < "u")
    return _s(this, t);
}
function TE(t) {
  var e;
  if (!(t != null && t[0]))
    return null;
  if ("optionsStore" in this && typeof ((e = this == null ? void 0 : this.optionsStore) == null ? void 0 : e[t[0]]) < "u")
    return _s(this.optionsStore, t);
  if (typeof (this == null ? void 0 : this[t[0]]) < "u")
    return _s(this, t);
}
function Rr(t) {
  t.queue = 0, t.stockCount = 0, t.shapeCount = 0, t.resultCount = 0, t.complete = !1;
}
function vx(t, e = null) {
  var n, i;
  typeof ((n = this.$refs) == null ? void 0 : n[t]) > "u" || ((i = this.$refs) == null ? void 0 : i[t]) === null || (e !== null ? this.$refs[t].visible = e : this.$refs[t].visible = !this.$refs[t].visible);
}
function _x(t, e) {
  return t != null && t.length ? t.find((n) => n.id === e) : null;
}
function wx(t, e) {
  if (!(t != null && t.length) || !e)
    return [];
  const n = t.filter(
    (i) => {
      var r, s;
      return (((r = i == null ? void 0 : i.stock) == null ? void 0 : r.id) ?? (i == null ? void 0 : i.stockId)) === e.id && !((s = i == null ? void 0 : i.guillotineData) != null && s.ptxDummyCut);
    }
  );
  return n.sort((i, r) => {
    var s, o;
    return ((s = i == null ? void 0 : i.guillotineData) == null ? void 0 : s.order) - ((o = r == null ? void 0 : r.guillotineData) == null ? void 0 : o.order);
  }), n;
}
function xx(t) {
  return t != null && t.length ? t.filter((e) => e.used === !0) : [];
}
function kx(t = {
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
  if (this.visInit)
    return !1;
  this.vis = new bx(t), this.vis.initStock(this.activeStock), this.vis.initShapes(this.activeShapes, this.shapeList), this.vis.initCuts(this.activeCuts, this.activeStock), this.visInit = !0;
}
function Sx(t = !1) {
  var r;
  let e = ((r = this == null ? void 0 : this.gs) == null ? void 0 : r.inputStock) || (this == null ? void 0 : this.inputStock);
  if (!(e != null && e.length))
    return ["No stock input"];
  const n = Et.call(this, ["stockList"]);
  n && (n.length = 0);
  const i = [];
  t && (e = [e[0]]);
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    !(o != null && o.q) && !t || i.push(...this.createStock(o, s));
  }
  return i;
}
function Ex() {
  var n, i;
  if (this.thinking)
    return !1;
  this.thinking = !0, this.success = !1;
  const t = [];
  if (t.push(...Ox.call(this)), t.length) {
    this.showMessage({
      heading: `Part issue${t.length > 1 ? "s" : ""}`,
      main: `<p>${t.length} issue${t.length > 1 ? "s" : ""} found with part inputs</p>`,
      list: t.slice(0, 5)
    }), this.thinking = !1;
    return;
  }
  if (this.reset(), t.push(...this.createStockList()), t.length) {
    this.showMessage({
      heading: `Stock issue${t.length > 1 ? "s" : ""}`,
      main: `<p>${t.length} issue${t.length > 1 ? "s" : ""} found with stock inputs</p>`,
      list: t.slice(0, 5)
    }), this.thinking = !1;
    return;
  }
  if (t.push(...this.createShapeList()), t.length) {
    this.showMessage({
      heading: `Part issue${t.length > 1 ? "s" : ""}`,
      main: `<p>${t.length} issue${t.length > 1 ? "s" : ""} found with part inputs</p>`,
      list: t.slice(0, 5)
    }), this.thinking = !1;
    return;
  }
  const e = new gn(
    this.saw,
    ((n = this.saw) == null ? void 0 : n.stockType) ?? ((i = this.stockList) == null ? void 0 : i[0].type)
  );
  if (e.issues.length) {
    this.showMessage({
      heading: `Saw issue${e.issues.length > 1 ? "s" : ""}`,
      main: `<p>${e.issues.length} issue${e.issues.length > 1 ? "s" : ""} found with saw inputs</p>`,
      list: e.issues.slice(0, 5)
    }), this.thinking = !1;
    return;
  }
  this.saw = e, this.debug && console.log(
    "Smartcut - calculating...",
    this.stockList.map((r) => r.getDimensions()),
    this.shapeList.map((r) => r.getDimensions())
  ), this.socket.connect(), this.socket.compress(!0).emit(
    "calculate",
    {
      saw: this.saw,
      shapeList: this.shapeList,
      stockList: this.stockList,
      enableEvo: this.enableEvo,
      domain: this.domain
    },
    this.socket.id
  );
}
function Tx() {
  var i;
  const t = Et.call(this, ["vis"]);
  if (!t)
    return;
  const e = Et.call(this, ["shapeList"]);
  if (!(e != null && e.length))
    return !1;
  t.resetPositions(), t.resetShapes();
  const n = Et.call(this, ["activeShapes"]);
  t.initShapes(n, e), (i = this == null ? void 0 : this.$refs) != null && i.PartsBin && this.$refs.PartsBin.clear(!1);
}
function Ax() {
  const t = Et.call(this, ["vis"]);
  if (!t)
    return;
  const e = Et.call(this, ["stockList"]);
  if (!(e != null && e.length))
    return !1;
  t.resetStock();
  const n = Et.call(this, ["activeStock"]);
  t.initStock(n), t.resetCuts();
  const i = Et.call(this, ["activeCuts"]);
  t.initCuts(i), t.resetSegments();
  const r = Et.call(this, ["activeSegments"]);
  t.initSegments(r), t.resetPositions(), typeof this.toggleSegments == "function" && this.toggleSegments(!1), this != null && this.cutMode && (this == null || this.showCut(0));
}
function Cx() {
  var e;
  const t = ((e = this == null ? void 0 : this.gs) == null ? void 0 : e.vis) ?? (this == null ? void 0 : this.vis);
  t && (t.clearSelection(), t.resetShapeAxes(), t.resetCutMeasurementAxes(), t.resetPositions());
}
function Px(t) {
  Et.call(this, ["examineShape"]) && (this.examineShape = null), vt.call(this, ["activeStockId"], t);
}
function Ox() {
  var r;
  const t = [], e = ((r = this == null ? void 0 : this.gs) == null ? void 0 : r.inputShapes) ?? (this == null ? void 0 : this.inputShapes);
  let n = 0;
  for (let s = e.length; s--; ) {
    const o = e[s];
    (!o.l || !o.w) && n++, !o.l && !o.w && (s === 0 ? e.length > 1 && (this.removeShape(s), n--) : (this.removeShape(s), n--));
  }
  e.length || t.push("No valid parts found"), n && t.push("Some parts have missing dimensions");
  const i = f0(e);
  return (!(e != null && e.length) || !i) && t.push("No valid parts found"), t;
}
function Nx(t) {
  if (t === !1 && this.allowOnlineMessages) {
    const e = {
      heading: "Offline",
      main: "<p>Looks like you have just gone offline.</p><p>Calculations are disabled for now.</p>"
    };
    typeof this.showModalMessage == "function" && this.showModalMessage(e), this.allowOnlineMessages = !1, this.onlineTimer = setTimeout(() => {
      this.allowOnlineMessages = !0;
    }, 3e4);
  }
}
var Ix = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
function Lx(t = Ix.VITE_WS_SERVER) {
  this.socket = ts(t, {
    withCredentials: !0,
    //this is required to send passport user data
    autoConnect: !1
  }), this.socket.on("connect", () => {
    vt.call(this, ["connected"], !0);
  }), this.socket.on("maintenance", () => {
    vt.call(this, ["maintenanceMode"], !0), this.socket.disconnect(), this.env === "development" && console.log(
      "SmartCut - maintenance mode flag received from server"
    );
  }), this.socket.on("connect_error", (e) => {
    vt.call(this, ["connected"], !1), console.warn(`SmartCut - socket connect_error: ${e.message}`), typeof alert < "u" && alert(
      "We are having trouble connecting to the server. Please try again later."
    );
  }), this.socket.on("message", (e) => console.log(e)), this.socket.on("queued", () => {
    vt.call(this, ["progress", "queue"], 1);
  }), this.socket.on("jobInProgess", (e) => (alert(
    `You already have a job in progress, please wait for it to finish

Job ID: ${e}`
  ), !1)), this.socket.on(
    "jobStart",
    () => vt.call(this, ["progress", "queue"], 2)
  ), this.socket.on("progress", (e) => {
    const n = e.data;
    typeof n.shapeCount < "u" && vt.call(this, ["progress", "shapeCount"], n.shapeCount), typeof n.stockCount < "u" && vt.call(this, ["progress", "stockCount"], n.stockCount), typeof n.resultCount < "u" && vt.call(this, ["progress", "resultCount"], n.resultCount);
  }), this.socket.on("error", (e) => {
    var i;
    vt.call(this, ["thinking"], !1);
    const n = Et.call(this, ["reset"]);
    typeof n == "function" && n(), console.error("SmartCut error:", e), (i = window == null ? void 0 : window.top) == null || i.postMessage(
      {
        type: "scError",
        message: e
      },
      "*"
    ), "showMessage" in this && typeof this.showMessage == "function" && this.showMessage("Issue: " + e), typeof this.showModalMessage == "function" && this.showModalMessage({
      heading: "Issue",
      main: e ? `<p>${e}</p>` : "<p>We are having trouble connecting to the server.</p><p>Please try again later and let us know.</p>"
    });
  }), this.socket.on("result", (e) => {
    var a, l, c, u, f, h, d, m, v;
    this.socket.disconnect();
    const n = e.result, i = Et.call(this, ["resetProgress"]);
    if (vt.call(this, ["unusableShapes"], n.unusableShapes), vt.call(this, ["unavailableStock"], n.unavailableStock), vt.call(this, ["metadata"], n.metadata), !((a = n.shapeList) != null && a.length) || !n.stockList.length) {
      if (i(), typeof this.showModalMessage == "function") {
        let _ = "<p>We did not manage to fit any parts.</p>";
        (l = n == null ? void 0 : n.unusableShapes) != null && l.length ? _ = "<p>No parts were usable - see the message at the bottom of the inputs panel for more detail.</p>" : _ += "<p>Please double check your inputs.</p>", this.$nextTick(() => {
          this.showModalMessage({
            heading: "Parts unusable",
            main: _
          });
        });
      }
      return (c = window == null ? void 0 : window.top) == null || c.postMessage(
        {
          type: "scError",
          message: "No parts were added - please double check your inputs."
        },
        "*"
      ), "showMessage" in this && typeof this.showMessage == "function" && this.showMessage(
        "No parts were added - please double check your inputs."
      ), vt.call(this, ["thinking"], !1), typeof this.toggleWidget == "function" && this.toggleWidget.call(this, "inputs", !0), !1;
    }
    n.shapeList.find((_) => !_.added) && typeof this.showModalMessage == "function" && this.$nextTick(() => {
      this.showModalMessage({
        heading: "Parts unusable",
        main: "<p>We did not use all of your parts.</p><p>Check the results panel for more information.</p>"
      });
    }), vt.call(this, ["progress", "complete"], !0), vt.call(this, ["jobId"], e == null ? void 0 : e.jobId), this.toggleWidget("updateStock", !1), this.toggleWidget("options", !1), this.toggleWidget("offcuts", !1), this.toggleWidget("results", !1), this.toggleWidget("cutlist", !1), this.toggleWidget("export", !1), this.toggleWidget("labels", !1);
    let r;
    n != null && n.saw && (r = new gn(
      n == null ? void 0 : n.saw,
      ((u = n == null ? void 0 : n.saw) == null ? void 0 : u.stockType) ?? ((h = (f = n.stockList) == null ? void 0 : f[0]) == null ? void 0 : h.type)
    ), vt.call(this, ["saw"], r));
    const s = N0({
      saw: r,
      stockList: n.stockList,
      removeScores: !0,
      preventAutoRotation: !0
    });
    vt.call(this, ["stockList"], s);
    const o = Et.call(this, ["usedStock"]);
    o.length && this.$nextTick(() => {
      vt.call(this, ["activeStockId"], o[0].id);
    }), vt.call(
      this,
      ["shapeList"],
      I0({
        shapeList: n.shapeList,
        stockList: s,
        preventAutoRotation: !0
      })
    ), n != null && n.cutList && vt.call(
      this,
      ["cutList"],
      L0({
        cutList: n.cutList,
        stockList: s
      })
    ), n != null && n.segmentList && vt.call(
      this,
      ["segmentList"],
      M0({
        segmentList: n.segmentList,
        stockList: s
      })
    ), n != null && n.offcuts && vt.call(
      this,
      ["offcuts"],
      z0({
        offcuts: n.offcuts,
        stockList: s,
        preventAutoRotation: !0
      })
    ), n != null && n.metadata && vt.call(this, ["metadata"], n.metadata), (d = n == null ? void 0 : n.evolutionVisData) != null && d.length ? vt.call(this, ["evolutionVisData"], n.evolutionVisData) : typeof this.toggleWidget == "function" && this.toggleWidget.call(this, "evolution", !1), typeof this.toggleWidget == "function" && this.toggleWidget.call(this, "workbench", !0), vt.call(this, ["thinking"], !1), (v = (m = this.$refs) == null ? void 0 : m.inputs) != null && v.success && (this.$refs.inputs.success = !1), this.$nextTick(() => {
      var g, b;
      if (Et.call(this, ["addedShapes"]).length === 0) {
        if (i(), typeof this.showModalMessage == "function") {
          let x = "<p>We did not manage to fit any parts.</p>";
          (g = n == null ? void 0 : n.unusableShapes) != null && g.length ? x += "<p>Some parts were not usable - see the message at the bottom of the inputs panel for more detail.</p>" : x += "<p>Please double check your inputs.</p>", this.showModalMessage({
            heading: "No layouts",
            main: x
          });
        }
        (b = window == null ? void 0 : window.top) == null || b.postMessage(
          {
            type: "scError",
            message: "No parts were added."
          },
          "*"
        ), console.warn("No parts were added."), typeof this.toggleWidget == "function" && this.toggleWidget.call(this, "inputs", !0);
      }
    });
  });
}
function Ps(t, e, n, i) {
  var r, s;
  return !n || !i ? !1 : typeof ((s = (r = t == null ? void 0 : t[n]) == null ? void 0 : r[e]) == null ? void 0 : s[i]) < "u";
}
function Mx(t, e, n, i) {
  var r;
  return !n || !i ? !1 : Ps(t, e, n, i) ? (r = t[n][e][i]) == null ? void 0 : r.enabled : !1;
}
function Rx(t, e, n, i, r = !0) {
  if (!Ps(t, e, n, i))
    return !1;
  Ps(t, e, n, i) && (t[n][e][i].enabled = r);
}
function AE(t, e) {
  return t.type === "unitDependent" ? e === "decimal" ? "decimal" : "text" : t.type === "number" ? "decimal" : "text";
}
function CE(t, e) {
  return t.type === "unitDependent" ? e === "decimal" ? "number" : "text" : t.type === "boolean" ? "checkbox" : t.type === "number" ? "number" : "text";
}
function PE(t) {
  return typeof t.min > "u" ? null : typeof t.min == "function" ? t.min() : typeof t.min == "number" ? t.min : null;
}
function OE(t) {
  return typeof t.max > "u" ? null : typeof t.max == "function" ? t.max() : typeof t.max == "number" ? t.max : null;
}
const Dx = {
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
    showStock(t) {
      this.$emit("show-stock", t);
    }
  }
}, Ti = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [i, r] of e)
    n[i] = r;
  return n;
}, Fx = { id: "mini-stock-nav" }, zx = ["onMousedown"], $x = { class: "id" };
function Bx(t, e, n, i, r, s) {
  return Q(), nt("div", Fx, [
    (Q(!0), nt(Mt, null, Nn(n.stockList, (o, a) => (Q(), nt("button", {
      key: a,
      class: qn(["nav-button", { selected: o.id === n.activeStockId }]),
      type: "button",
      style: Ht({
        backgroundColor: o.id === n.activeStockId ? "#" + n.secondaryColor : "#" + n.primaryColor
      }),
      onMousedown: (l) => s.showStock(o.id)
    }, [
      X("div", $x, gt(a + 1), 1),
      we(X("div", { class: "stack legibility" }, gt(o.stack), 513), [
        [rh, typeof o.stack == "number" && o.stack > 1]
      ])
    ], 46, zx))), 128))
  ]);
}
const qx = /* @__PURE__ */ Ti(Dx, [["render", Bx]]), Ux = {
  name: "ShapePreview",
  props: {
    shape: {
      type: Object,
      default: () => null
    },
    buttonBackground: {
      type: String,
      default: "#e4e4e4"
    },
    iconColor: {
      type: String,
      default: "#FFFFFF"
    }
  }
}, Wx = /* @__PURE__ */ X("path", { d: "m481.2 33.81c-8.938-3.656-19.31-1.656-26.16 5.219l-50.51 50.51c-40.23-35.729-92.43-57.539-148.53-57.539-99 0-187.47 66.31-215.09 161.3-3.72 12.7 3.59 26 16.31 29.7 12.81 3.781 26.06-3.625 29.75-16.31 21.73-74.59 91.23-126.69 169.03-126.69 43.12 0 83.35 16.42 114.7 43.4l-59.63 59.63c-6.875 6.875-8.906 17.19-5.219 26.16 3.719 8.969 12.47 14.81 22.19 14.81h143.9c13.259-.9 24.059-10.7 24.059-24v-144c0-9.72-5.8-18.47-14.8-22.19zm-26.5 254.29c-12.78-3.75-26.06 3.594-29.75 16.31-21.65 75.49-91.15 127.59-169.85 127.59-43.12 0-83.38-16.42-114.7-43.41l59.62-59.62c6.875-6.875 8.891-17.03 5.203-26-2.823-8.97-11.523-14.97-22.123-14.97h-143.05c-13.25 0-24.11 10.74-24.11 23.99v144c0 9.719 5.844 18.47 14.81 22.19 2.97 1.22 6.09 1.82 9.19 1.82 6.25 0 12.38-2.438 16.97-7.031l50.51-50.52c40.18 35.751 92.48 57.551 147.68 57.551 99 0 187.4-66.31 215.1-161.3 4.6-13.6-2.8-26-15.5-30.6z" }, null, -1), Hx = [
  Wx
], Vx = /* @__PURE__ */ X("path", { d: "m512 256c0 6.688-2.812 13.09-7.719 17.62l-104 96c-4.581 4.28-10.481 6.38-16.281 6.38-6.469 0-12.91-2.594-17.62-7.719-9-9.75-8.406-24.94 1.344-33.91l58.876-54.371h-341.22l58.91 54.38c9.75 8.969 10.34 24.16 1.344 33.91-4.734 5.11-11.134 7.71-17.634 7.71-5.812 0-11.66-2.094-16.28-6.375l-104-96c-4.907-4.525-7.72-10.925-7.72-17.625s2.812-13.09 7.719-17.62l104-96c9.781-9.08 24.981-8.38 33.881 1.32 9 9.75 8.406 24.94-1.344 33.91l-58.876 54.39h341.3l-58.91-54.38c-9.75-8.969-10.34-24.16-1.344-33.91 8.874-9.71 24.074-10.41 33.874-1.31l104 96c4.9 4.5 7.7 10.9 7.7 17.6z" }, null, -1), Gx = [
  Vx
], jx = {
  key: 2,
  class: "orientation",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, Yx = /* @__PURE__ */ X("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1), Kx = [
  Yx
];
function Xx(t, e, n, i, r, s) {
  var o, a, l, c;
  return Q(), nt("div", {
    class: qn(["shape-preview", [
      {
        "banding-x1": (o = n.shape.banding) == null ? void 0 : o.x1,
        "banding-x2": (a = n.shape.banding) == null ? void 0 : a.x2,
        "banding-y1": (l = n.shape.banding) == null ? void 0 : l.y1,
        "banding-y2": (c = n.shape.banding) == null ? void 0 : c.y2,
        "orientation-l": n.shape.orientationLock === "l",
        "orientation-w": n.shape.orientationLock === "w"
      }
    ]]),
    "aria-label": "Orientation & banding",
    style: Ht({
      background: n.buttonBackground
    })
  }, [
    n.shape.orientationLock ? yt("", !0) : (Q(), nt("svg", {
      key: 0,
      class: "no-orientation",
      style: Ht({
        fill: n.iconColor
      }),
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, Hx, 4)),
    n.shape.orientationLock.trim().length ? (Q(), nt("svg", {
      key: 1,
      class: "orientation",
      style: Ht({
        fill: n.iconColor ? n.iconColor : "#ffffff"
      }),
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, Gx, 4)) : yt("", !0),
    n.shape.orientationLock === " " ? (Q(), nt("svg", jx, Kx)) : yt("", !0)
  ], 6);
}
const Jx = /* @__PURE__ */ Ti(Ux, [["render", Xx]]), Qx = {
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
}, Zx = { id: "spinner" }, tk = ["width", "height"], ek = /* @__PURE__ */ Hm('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7), nk = [
  ek
], ik = /* @__PURE__ */ X("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1), rk = [
  ik
], sk = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function ok(t, e, n, i, r, s) {
  return Q(), nt("div", Zx, [
    n.complete ? yt("", !0) : (Q(), nt("svg", {
      key: 0,
      class: "loading",
      style: Ht({ width: n.size + "px", height: n.size + "px" }),
      width: n.size,
      height: n.size,
      viewBox: "0 0 300 300"
    }, nk, 12, tk)),
    n.complete ? (Q(), nt("svg", {
      key: 1,
      class: "complete",
      style: Ht({ width: n.size + "px", height: n.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, rk, 4)) : yt("", !0),
    n.showNumber ? (Q(), nt("div", sk, gt(n.number), 1)) : yt("", !0)
  ]);
}
const ak = /* @__PURE__ */ Ti(Qx, [["render", ok]]);
function lk(t) {
  var e, n, i, r, s, o, a, l;
  return t.machining ? (n = (e = t.machining) == null ? void 0 : e.holes) != null && n.length || (r = (i = t.machining) == null ? void 0 : i.hingeHoles) != null && r.length ? !0 : (o = (s = t.machining) == null ? void 0 : s.corners) != null && o.length ? (l = (a = t.machining) == null ? void 0 : a.corners) == null ? void 0 : l.some((c) => c.type && c.size) : !1 : !1;
}
const ck = /* @__PURE__ */ Wf(
  () => import("./Machining-hZhyQTkD.js")
), Pd = {
  name: "CheckoutCalculator",
  components: {
    StockNavigation: qx,
    ShapePreview: Jx,
    Spinner: ak,
    Machining: ck
    // Offcuts,
  },
  props: {
    debug: {
      type: Boolean,
      default: !1
    },
    //stock is passed as a prop, which allows it to be changed after init (e.g. variations in WP)
    stock: {
      type: Array,
      default: () => []
    }
  },
  emits: ["result", "log", "error", "debug"],
  setup() {
    const { t, locale: e, fallbackLocale: n } = Ys({
      locale: "en_US"
    });
    return {
      t,
      locale: e,
      fallbackLocale: n
    };
  },
  data() {
    const t = _b(
      "Checkout/inputShapes",
      [],
      {
        serializer: {
          read: (e) => {
            const n = e ? JSON.parse(e) : [];
            return O0(n);
          },
          write: (e) => {
            const n = e.filter((i) => !(i != null && i.multiSelect));
            return JSON.stringify(n);
          }
        },
        listenToStorageChanges: !1
      }
    );
    return {
      domain: window.location.hostname,
      connected: !1,
      maintenanceMode: !1,
      creditVisible: !0,
      online: !0,
      onlineTimer: null,
      allowOnlineMessages: !0,
      socket: null,
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
      currentInputShape: null,
      inputShapes: t.value,
      inputStock: [],
      activeStockId: null,
      stockList: ni([]),
      shapeList: ni([]),
      cutList: ni([]),
      offcuts: ni([]),
      metadata: null,
      messageVisible: !1,
      messageContent: "",
      vis: Da({}),
      visInit: !1,
      isFullScreen: !1,
      machiningEnabled: !1,
      selectedShapeId: null,
      //default options
      options: {
        units: "decimal",
        decimalPlaces: 2,
        stackHeight: 100,
        maxParts: null,
        showBanding: !1,
        disableBanding: !1,
        disableOrientation: !1,
        bandingTypes: [],
        //array of banding strings
        showDiagram: !0,
        showProgressNumber: !0,
        locale: "en_US"
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
        marginBottom: "10px",
        userSelect: "none"
      },
      creditLinkStyles: {
        width: "auto",
        height: "auto",
        display: "block",
        position: "relative",
        visibility: "visible",
        opacity: "1",
        color: "#4e4e4e"
      },
      machiningOptions: {
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
      canGoFullScreen: !0,
      multiThicknesses: [],
      progress: {
        queue: 0,
        stockCount: 0,
        shapeCount: 0,
        complete: !1
      },
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
        disableClick: !1
      },
      viewportWidth: null,
      mounted: !1,
      loaded: !1,
      w: 0,
      h: 0,
      //remove definition to disable
      fieldDefinitions: {
        parts: {
          sheet: {
            l: {
              enabled: !0,
              type: "unitDependent"
            },
            w: {
              enabled: !0,
              type: "unitDependent"
            },
            t: {
              enabled: !1,
              type: "unitDependent"
            },
            q: {
              enabled: !0,
              type: "number",
              default: 1
            },
            name: {
              enabled: !0,
              type: "string"
            },
            orientation: {
              enabled: !0,
              type: null,
              w: "26px"
            },
            machining: {
              enabled: !1,
              type: null,
              w: "26px"
            },
            banding: {
              enabled: !0,
              type: "unitDependent"
            }
          },
          linear: {
            l: {
              enabled: !0,
              type: "unitDependent"
            },
            q: {
              enabled: !0,
              type: "number",
              default: 1
            },
            name: {
              enabled: !0,
              type: "string"
            }
          }
        }
      }
    };
  },
  computed: {
    server() {
      return this.domain === "sc-store" || this.domain === "localhost" ? "http://localhost:5000" : "https://api.cutlistevo.com/";
    },
    selectedShape() {
      return this.selectedShapeId ? this.inputShapes.find(
        (t) => t.id === this.selectedShapeId
      ) : null;
    },
    inputType() {
      return this.options.units === "decimal" ? "number" : "string";
    },
    inputMode() {
      return this.options.units === "decimal" ? "decimal" : "text";
    },
    partColumns() {
      let t = Object.values(
        this.fieldDefinitions.parts[this.saw.stockType]
      ).filter((e) => e.enabled).length;
      return this.inputShapes.length > 1 && t++, this.isFieldEnabled("parts", "banding") && t--, t;
    },
    partColumnsStyle() {
      const t = {
        id: "34px",
        del: "30px"
      }, e = [];
      for (const i in this.fieldDefinitions.parts[this.saw.stockType]) {
        if (["banding", "trim"].includes(i))
          continue;
        const r = this.fieldDefinitions.parts[this.saw.stockType][i];
        r.enabled && e.push(r.w ?? "1fr");
      }
      return e.unshift(t.id), this.inputShapes.length > 1 && e.push(t.del), e.join(" ");
    },
    addedShapes() {
      return this.shapeList.filter((t) => t.added);
    },
    uniqueShapes() {
      return this.shapeList.filter(
        (t) => t.added && !t.duplicate
      );
    },
    numUniqueShapes() {
      return this.uniqueShapes.length;
    },
    uniqueAddedShapes() {
      return this.uniqueShapes.filter((t) => t.added);
    },
    uniqueStock() {
      return this.stockList.filter(
        (t) => t.used && !t.duplicate
      );
    },
    uniqueUsedStock() {
      return this.uniqueStock.filter((t) => t.used).map((t) => (t.q = this.uniqueStock.filter((e) => e.parentID === t.parentID).reduce(
        (e, n) => e + (n == null ? void 0 : n.stack) > 0 ? n.stack : 1,
        0
      ), t));
    },
    usedStock() {
      return xx(this.stockList);
    },
    activeStock() {
      return this.activeStockId ? _x(this.stockList, this.activeStockId) : null;
    },
    activeStockArea() {
      return this.activeStock.getArea();
    },
    stackedStock() {
      return d0(this.stockList);
    },
    activeShapes() {
      return this.shapeList.filter(
        (t) => {
          var e, n;
          return t.added && ((e = t == null ? void 0 : t.stock) == null ? void 0 : e.id) === ((n = this.activeStock) == null ? void 0 : n.id);
        }
      );
    },
    activeCuts() {
      return wx(this.cutList, this.activeStock);
    },
    unplacedShapes() {
      return h0(this.shapeList);
    },
    totalCutLength() {
      return !this.cutList.length || !this.metadata.totalCutLength ? 0 : this.metadata.totalCutLength;
    },
    totalInputShapes() {
      return this.inputShapes.reduce((t, e) => t + e.q, 0);
    }
  },
  watch: {
    online(t) {
      Nx.call(this, t);
    },
    jobId(t) {
      if (!t)
        return;
      this.visInit && this.updateVisSize(), this.metadata || this.$emit(
        "error",
        "SmartCut - no metadata received from server"
      ), this.changePartQuantitiesBasedOnThickness();
      const e = {
        jobId: this.jobId,
        metadata: this.metadata,
        parts: this.uniqueAddedShapes.map((n) => {
          var i;
          return {
            l: n.l,
            w: n.w,
            t: n == null ? void 0 : n.t,
            q: (i = this.metadata.addedPartTally) == null ? void 0 : i[n.parentID]
          };
        }),
        stock: this.uniqueUsedStock.map((n) => {
          var i;
          return {
            name: n == null ? void 0 : n.name,
            l: n.l,
            w: n.w,
            t: n == null ? void 0 : n.t,
            q: (i = this.metadata.usedStockTally) == null ? void 0 : i[n.parentID]
          };
        }),
        offcuts: this.offcuts.map((n) => ({
          l: n.l,
          w: n.w,
          t: (n == null ? void 0 : n.t) ?? null,
          q: n.q
        }))
      };
      if (this.$emit("log", ["result", e]), this.unplacedShapes.length) {
        const n = this.unplacedShapes.map((i) => i.id).join();
        this.showMessage(`The following parts did not fit: ${n}`);
      }
      this.$emit("result", e);
    },
    viewportWidth() {
      this.visInit && this.updateVisSize();
    },
    activeStockId() {
      this.visInit && this.$nextTick(() => this.refresh());
    },
    stock(t) {
      Array.isArray(t) || console.warn("SmartCut - stock must be passed as an array"), this.inputStock = [], this.multiThicknesses = [], this.setFieldEnabled("parts", "t", !1), this.inputShapes.forEach((e) => e.t = null), t.forEach((e, n) => {
        e.type = this.saw.stockType, e.t && typeof e.t == "string" && e.t.includes(",") && (e.t = e.t.split(","), e.t.length !== 2 ? this.$emit(
          "error",
          "double thickness options must have two options"
        ) : (this.setFieldEnabled("parts", "t", !0), this.multiThicknesses = e.t, e.t = e.t[0]));
        const i = this.createStockInput(e);
        this.inputStock.push(i), this.$emit("log", [`stock ${n + 1}`, i]);
      }), this.inputStock.length && (this.inputShapes.length ? this.inputShapes.forEach(
        (e) => e.t = this.inputStock[0].t
      ) : this.addShape(1, !1));
    }
  },
  mounted() {
    if (this.isCreditVisible() || alert(
      "The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support."
    ), this.mounted)
      return;
    this.locale = this.options.locale, Lx.call(this, this.server), this.viewportWidth = window.innerWidth, this.resizeTimer = null;
    const t = this.debounce(this.handleResize, 30);
    window.addEventListener("resize", t, {
      passive: !0
    }), this.mounted = !0;
  },
  methods: {
    isCreditVisible() {
      let t = !0;
      const e = document.querySelector(
        "#smartcut-app #credit"
      ), n = document.querySelector(
        "#smartcut-app #credit a"
      );
      return [e, n].forEach((i, r) => {
        if (!i)
          return t = !1;
        const s = window.getComputedStyle(i);
        if (s.display === "none" || s.display === "hidden" || s.opacity === "0" || s.color === "transparent" || s.position !== "relative" || r === 1 && s.color !== "#4e4e4e" && s.color !== "rgb(78, 78, 78)")
          return t = !1;
      }), this.creditVisible = t, t;
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
    openMachining(t = null) {
      this.currentInputShape = t, t && t.l && t.w ? this.machiningEnabled = !0 : alert("Please enter dimensions first");
    },
    closeMachining() {
      this.machiningEnabled = !1, document.exitFullscreen && document.exitFullscreen();
    },
    hasMachining(t = null) {
      return t ? lk(t) : !1;
    },
    resetProgress() {
      Rr(this.progress);
    },
    reset() {
      Rr(this.progress), this.stockList = [], this.shapeList = [], this.cutList = [], this.jobId = 0;
    },
    async updateVisSize(t = !1) {
      if (!this.vis)
        return !1;
      await this.vis.updateSize(t), this.clearSelection();
    },
    isFieldEnabled(t, e) {
      return Mx(
        this.fieldDefinitions,
        this.saw.stockType,
        t,
        e
      );
    },
    isFieldPresent(t, e) {
      return Ps(
        this.fieldDefinitions,
        this.saw.stockType,
        t,
        e
      );
    },
    setFieldEnabled(t, e, n = !0) {
      return Rx(
        this.fieldDefinitions,
        this.saw.stockType,
        t,
        e,
        n
      );
    },
    clear() {
      this.inputShapes.length = 0, this.addShape(1, !0);
    },
    calculate() {
      var t;
      if (this.clearMessage(), (t = this.options) != null && t.maxParts && this.totalInputShapes > this.options.maxParts) {
        this.showMessage(
          `The maximum number of parts is ${this.options.maxParts}`
        );
        return;
      }
      Ex.call(this);
    },
    init(t) {
      if (this.$emit("log", ["init", t]), t != null && t.type && delete t.type, t != null && t.options) {
        const e = t.options;
        [
          "stockType",
          "cutPreference",
          "bladeWidth"
        ].forEach((r) => {
          r in e || this.$emit("error", `${r} is a required option`);
        });
        const i = {
          debug: () => {
            this.$emit("debug", e.debug), this.$emit("log", ["data received", t]);
          },
          stockType: () => {
            this.saw.stockType = e.stockType;
          },
          cutPreference: () => {
            const r = [
              "efficiency",
              "length",
              "width",
              "beam"
            ];
            if (r.includes(
              e.cutPreference
            )) {
              const { cutType: s, cutPreference: o } = ia(e.cutPreference);
              this.saw.cutType = s, this.saw.cutPreference = o, this.saw.stackHeight = e.stackHeight, e.stockType === "linear" && (this.saw.cutType = null, this.saw.cutPreference = null), e.cutPreference === "beam" && (this.saw.stackHeight = e.stackHeight);
            } else
              console.warn(
                `SmartCut - ${e.cutPreference} is not one of ${r.join()}`
              );
          },
          bladeWidth: () => {
            e.bladeWidth >= 0 ? this.saw.bladeWidth = e.bladeWidth : console.warn(
              `SmartCut - you provided an incorrect blade width of: ${e.bladeWidth}`
            );
          },
          disableClick: () => {
            this.visOptions.disableClick = e.disableClick;
          },
          colors: () => {
            for (const [r, s] of Object.entries(
              e == null ? void 0 : e.colors
            ))
              s && (this.colors[r] = s);
          },
          maxParts: () => {
            this.options.maxParts = e.maxParts;
          },
          disableOrientation: () => {
            this.setFieldEnabled(
              "parts",
              "orientation",
              !e.disableOrientation
            );
          },
          disablePartName: () => {
            this.setFieldEnabled(
              "parts",
              "name",
              !e.disablePartName
            );
          },
          bandingTypes: () => e.disableBanding ? this.setFieldEnabled(
            "parts",
            "banding",
            !1
          ) : (this.options.bandingTypes = e.bandingTypes, this.options.bandingTypes && Object.values(this.options.bandingTypes).length > 0 ? this.setFieldEnabled(
            "parts",
            "banding",
            !0
          ) : this.setFieldEnabled("parts", "banding", !1)),
          locale: () => {
            this.locale = e.locale;
          },
          units: () => {
            this.options.units = e != null && e.units ? e.units : "decimal";
          },
          enableMachining: () => {
            var r, s, o, a, l;
            this.setFieldEnabled(
              "parts",
              "machining",
              e.enableMachining ?? !1
            ), this.machiningOptions = e.machining, ["holes", "hingeHoles"].forEach((c) => {
              var u, f;
              (u = e == null ? void 0 : e.machining) != null && u[c] && (this.machiningOptions[c].enabled = (f = e == null ? void 0 : e.machining) == null ? void 0 : f[c].enabled);
            }), (o = (s = (r = e == null ? void 0 : e.machining) == null ? void 0 : r.corners) == null ? void 0 : s.types) != null && o.length && (this.machiningOptions.corners.enabled = !0, this.machiningOptions.corners.types = (l = (a = e == null ? void 0 : e.machining) == null ? void 0 : a.corners) == null ? void 0 : l.types);
          }
        };
        for (const r in t == null ? void 0 : t.options)
          this.options[r] = t.options[r], r in i && i[r]();
        if (this.visInit === !1) {
          const r = {
            elementID: "#smartcut-svg-wrapper",
            env: "production",
            main: !0,
            units: this.options.units,
            decimalPlaces: this.options.decimalPlaces,
            saw: this.saw,
            app: !1,
            embed: !0,
            colors: this.colors,
            options: this.visOptions,
            vueComponent: this
          };
          kx.call(this, r);
        }
      }
    },
    showMessage(t = {
      main: null,
      heading: null,
      list: []
    }) {
      var e;
      typeof t == "object" ? (this.messageContent = t == null ? void 0 : t.main, (e = t == null ? void 0 : t.list) != null && e.length && (this.messageContent += "<ul>", t.list.forEach((n) => {
        this.messageContent += `<li>${n}</li>`;
      }), this.messageContent += "</ul>")) : this.messageContent = t, this.messageVisible = !0;
    },
    clearMessage() {
      this.messageVisible = !1, this.messageContent = null;
    },
    createStockInput({
      l: t = null,
      w: e = null,
      t: n = null,
      q: i = 1,
      name: r = "",
      trim: s = {
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 0
      },
      cost: o = 0
    }) {
      return new D0({
        id: (this.inputStock.length + 1).toString(),
        units: this.options.units,
        w: e,
        l: t,
        t: n,
        q: i,
        cost: o,
        autoAdd: !0,
        name: r,
        trim: s
      });
    },
    createShapeInput({
      l: t = null,
      w: e = null,
      t: n = null,
      q: i = 1,
      orientationLock: r = null
    }) {
      var o;
      return new jh({
        id: (this.inputShapes.length + 1).toString(),
        units: this.options.units,
        l: t,
        w: this.saw.stockType === "linear" ? (o = this.inputStock[0]) == null ? void 0 : o.w : e,
        t: this.multiThicknesses.length ? this.multiThicknesses[0] : n,
        q: i,
        orientationLock: r
      });
    },
    addShape(t = 1, e = !0) {
      var n, i;
      for (let r = t; r--; )
        this.inputShapes.push(
          this.createShapeInput({
            t: ((i = (n = this.inputStock) == null ? void 0 : n[0]) == null ? void 0 : i.t) ?? null
          })
        );
      e && this.$nextTick(() => {
        var r, s;
        t === 1 && (Array.isArray((r = this.$refs) == null ? void 0 : r.shapeInputFocus) ? (s = this.$refs) == null || s.shapeInputFocus.pop().focus() : this.$refs.shapeInputFocus.focus()), Rr(this.progress);
      });
    },
    removeShape(t) {
      this.inputShapes.splice(t, 1), Rr(this.progress);
    },
    createStock(t, e) {
      const n = W(t.l), i = W(t.w), r = t.t ? W(t.t) : null, s = new Wn({
        id: (e + 1).toString() + ".0",
        name: `${n}x${i}`,
        l: n,
        w: i,
        t: r,
        saw: new gn(this.saw),
        autoAdd: !0,
        cost: t == null ? void 0 : t.cost,
        trim: t.trim,
        allowExactFitShapes: t.allowExactFitShapes,
        type: this.saw.stockType
      });
      return console.log(s), this.stockList.push(s), s.issues;
    },
    createStockList() {
      return Sx.call(this, !1);
    },
    //this is for double thickness bonded sheets
    changePartQuantitiesBasedOnThickness() {
      if (this.multiThicknesses.length > 0) {
        const t = W(this.multiThicknesses[0]);
        this.shapeList.forEach((e) => {
          e.q = e.q * (W(e.t) / t), e.t = t;
        });
      }
    },
    createShapeList() {
      var e;
      const t = [];
      for (let n = 0; n < this.inputShapes.length; n++) {
        const i = this.inputShapes[n], r = new fr({
          id: (n + 1).toString() + ".0",
          l: W(i == null ? void 0 : i.l),
          w: W(i == null ? void 0 : i.w),
          t: i.t ? W(i == null ? void 0 : i.t) : null,
          q: typeof i.q != "number" ? parseInt(i.q) : i.q,
          name: i.name,
          orientationLock: i.orientationLock,
          banding: i.banding,
          bandingType: i.bandingType,
          machining: i.machining
        });
        this.shapeList.push(r), (e = r == null ? void 0 : r.issues) != null && e.length && t.push(...r.issues);
      }
      return this.changePartQuantitiesBasedOnThickness(), t;
    },
    toggleShapeOrientation(t) {
      const e = ["", "l", "w"];
      let n = e.findIndex(
        (i) => i === t.orientationLock
      );
      n++, n > 2 && (n = 0), t.orientationLock = e[n];
    },
    refresh() {
      this.refreshStock(), this.refreshShapes();
    },
    refreshStock() {
      Ax.call(this);
    },
    refreshShapes() {
      Tx.call(this, this.uniqueShapes.length);
    },
    toggleWidget(t, e = null) {
      vx.call(this, t, e);
    },
    clearSelection() {
      Cx.call(this);
    },
    showStock(t) {
      Px.call(this, t);
    },
    deleteBanding(t) {
      for (const e in t.banding)
        t.banding[e] = !1;
      for (const e in t.bandingType)
        t.bandingType[e] = "";
    },
    debounce(t, e) {
      let n;
      return function(...r) {
        const s = () => {
          clearTimeout(n), t(...r);
        };
        clearTimeout(n), n = setTimeout(s, e);
      };
    },
    handleResize() {
      this.viewportWidth = window.innerWidth;
    }
  }
};
function Iu(t) {
  const e = t;
  e.__i18n = e.__i18n || [], e.__i18n.push({
    locale: "",
    resource: {
      en_US: {
        length: (n) => {
          const { normalize: i } = n;
          return i(["Length"]);
        },
        l: (n) => {
          const { normalize: i } = n;
          return i(["L"]);
        },
        width: (n) => {
          const { normalize: i } = n;
          return i(["Width"]);
        },
        w: (n) => {
          const { normalize: i } = n;
          return i(["W"]);
        },
        thickness: (n) => {
          const { normalize: i } = n;
          return i(["Thickness"]);
        },
        t: (n) => {
          const { normalize: i } = n;
          return i(["T"]);
        },
        name: (n) => {
          const { normalize: i } = n;
          return i(["Name"]);
        },
        quantity: (n) => {
          const { normalize: i } = n;
          return i(["Quantity"]);
        },
        q: (n) => {
          const { normalize: i } = n;
          return i(["Q"]);
        },
        machining: (n) => {
          const { normalize: i } = n;
          return i(["Machining"]);
        },
        orientation: (n) => {
          const { normalize: i } = n;
          return i(["Orientation"]);
        },
        "add part": (n) => {
          const { normalize: i } = n;
          return i(["Add part"]);
        },
        "remove part": (n) => {
          const { normalize: i } = n;
          return i(["Remove part"]);
        },
        calculate: (n) => {
          const { normalize: i } = n;
          return i(["Calculate"]);
        },
        "full screen": (n) => {
          const { normalize: i } = n;
          return i(["Full screen"]);
        },
        b: (n) => {
          const { normalize: i } = n;
          return i(["B"]);
        },
        banding: (n) => {
          const { normalize: i } = n;
          return i(["Banding"]);
        },
        "delete banding": (n) => {
          const { normalize: i } = n;
          return i(["Delete banding"]);
        },
        delete: (n) => {
          const { normalize: i } = n;
          return i(["Delete"]);
        },
        clear: (n) => {
          const { normalize: i } = n;
          return i(["Clear"]);
        },
        l1: (n) => {
          const { normalize: i } = n;
          return i(["L1"]);
        },
        l2: (n) => {
          const { normalize: i } = n;
          return i(["L2"]);
        },
        w1: (n) => {
          const { normalize: i } = n;
          return i(["W1"]);
        },
        w2: (n) => {
          const { normalize: i } = n;
          return i(["W2"]);
        },
        "Powered by SmartCut": (n) => {
          const { normalize: i } = n;
          return i(["Powered by SmartCut"]);
        }
      },
      ca: {
        length: (n) => {
          const { normalize: i } = n;
          return i(["Llarg"]);
        },
        l: (n) => {
          const { normalize: i } = n;
          return i(["L"]);
        },
        width: (n) => {
          const { normalize: i } = n;
          return i(["Ample"]);
        },
        w: (n) => {
          const { normalize: i } = n;
          return i(["A"]);
        },
        thickness: (n) => {
          const { normalize: i } = n;
          return i(["Gruix"]);
        },
        t: (n) => {
          const { normalize: i } = n;
          return i(["G"]);
        },
        name: (n) => {
          const { normalize: i } = n;
          return i(["Nom"]);
        },
        quantity: (n) => {
          const { normalize: i } = n;
          return i(["Quantitat"]);
        },
        q: (n) => {
          const { normalize: i } = n;
          return i(["Q"]);
        },
        machining: (n) => {
          const { normalize: i } = n;
          return i(["Mecanitzat"]);
        },
        orientation: (n) => {
          const { normalize: i } = n;
          return i(["Gir"]);
        },
        "add part": (n) => {
          const { normalize: i } = n;
          return i(["Afegeix"]);
        },
        "remove part": (n) => {
          const { normalize: i } = n;
          return i(["Elimina"]);
        },
        calculate: (n) => {
          const { normalize: i } = n;
          return i(["Calcula"]);
        },
        "full screen": (n) => {
          const { normalize: i } = n;
          return i(["Pantalla completa"]);
        },
        b: (n) => {
          const { normalize: i } = n;
          return i(["Cantell"]);
        },
        banding: (n) => {
          const { normalize: i } = n;
          return i(["Banding"]);
        },
        "delete banding": (n) => {
          const { normalize: i } = n;
          return i(["Elimina cantell"]);
        },
        delete: (n) => {
          const { normalize: i } = n;
          return i(["Elimina"]);
        },
        clear: (n) => {
          const { normalize: i } = n;
          return i(["Neteja"]);
        },
        l1: (n) => {
          const { normalize: i } = n;
          return i(["L1"]);
        },
        l2: (n) => {
          const { normalize: i } = n;
          return i(["L2"]);
        },
        w1: (n) => {
          const { normalize: i } = n;
          return i(["A1"]);
        },
        w2: (n) => {
          const { normalize: i } = n;
          return i(["A1"]);
        },
        "Powered by SmartCut": (n) => {
          const { normalize: i } = n;
          return i(["Desenvolupat per SmartCut"]);
        }
      },
      es_ES: {
        length: (n) => {
          const { normalize: i } = n;
          return i(["Largo"]);
        },
        l: (n) => {
          const { normalize: i } = n;
          return i(["L"]);
        },
        width: (n) => {
          const { normalize: i } = n;
          return i(["Ancho"]);
        },
        w: (n) => {
          const { normalize: i } = n;
          return i(["A"]);
        },
        thickness: (n) => {
          const { normalize: i } = n;
          return i(["Grueso"]);
        },
        t: (n) => {
          const { normalize: i } = n;
          return i(["G"]);
        },
        name: (n) => {
          const { normalize: i } = n;
          return i(["Nombre"]);
        },
        quantity: (n) => {
          const { normalize: i } = n;
          return i(["Cantidad"]);
        },
        q: (n) => {
          const { normalize: i } = n;
          return i(["C"]);
        },
        machining: (n) => {
          const { normalize: i } = n;
          return i(["Mecanizado"]);
        },
        orientation: (n) => {
          const { normalize: i } = n;
          return i(["Giro"]);
        },
        "add part": (n) => {
          const { normalize: i } = n;
          return i(["Añade"]);
        },
        "remove part": (n) => {
          const { normalize: i } = n;
          return i(["Elimina"]);
        },
        calculate: (n) => {
          const { normalize: i } = n;
          return i(["Calcula"]);
        },
        "full screen": (n) => {
          const { normalize: i } = n;
          return i(["Pantalla completa"]);
        },
        b: (n) => {
          const { normalize: i } = n;
          return i(["Canto"]);
        },
        banding: (n) => {
          const { normalize: i } = n;
          return i(["Banding"]);
        },
        "delete banding": (n) => {
          const { normalize: i } = n;
          return i(["Elimina canto"]);
        },
        delete: (n) => {
          const { normalize: i } = n;
          return i(["Elimina"]);
        },
        clear: (n) => {
          const { normalize: i } = n;
          return i(["Borra"]);
        },
        l1: (n) => {
          const { normalize: i } = n;
          return i(["L1"]);
        },
        l2: (n) => {
          const { normalize: i } = n;
          return i(["L2"]);
        },
        w1: (n) => {
          const { normalize: i } = n;
          return i(["A1"]);
        },
        w2: (n) => {
          const { normalize: i } = n;
          return i(["A1"]);
        },
        "Powered by SmartCut": (n) => {
          const { normalize: i } = n;
          return i(["Desarrollado por SmartCut"]);
        }
      }
    }
  });
}
const dr = (t) => (Qp("data-v-693fe1ac"), t = t(), Zp(), t), uk = {
  id: "shape-input",
  class: "inputs no-margin-top grid-table"
}, fk = /* @__PURE__ */ dr(() => /* @__PURE__ */ X("div", { class: "cell" }, null, -1)), hk = {
  key: 0,
  class: "cell"
}, dk = {
  key: 1,
  class: "cell"
}, pk = {
  key: 2,
  class: "cell"
}, mk = { class: "cell" }, gk = {
  key: 3,
  class: "cell"
}, yk = {
  key: 4,
  class: "cell center"
}, bk = {
  key: 5,
  class: "cell center"
}, vk = {
  key: 6,
  class: "cell"
}, _k = { class: "cell" }, wk = {
  key: 0,
  class: "number length cell"
}, xk = ["for"], kk = ["id", "onUpdate:modelValue", "type", "inputmode", "placeholder"], Sk = {
  key: 1,
  class: "number width cell"
}, Ek = ["for"], Tk = ["id", "onUpdate:modelValue", "type", "inputmode", "placeholder"], Ak = {
  key: 2,
  class: "thickness cell"
}, Ck = ["id", "onUpdate:modelValue"], Pk = ["value"], Ok = { class: "number quant cell" }, Nk = ["for"], Ik = ["id", "onUpdate:modelValue", "placeholder"], Lk = {
  key: 3,
  class: "text name cell"
}, Mk = ["id", "onUpdate:modelValue", "aria-label", "placeholder"], Rk = {
  key: 4,
  class: "cell"
}, Dk = ["onClick"], Fk = {
  key: 6,
  class: "cell"
}, zk = ["aria-label", "onClick"], $k = {
  id: "banding-label",
  class: "label small-font"
}, Bk = { class: "inputs" }, qk = ["for"], Uk = ["id", "onUpdate:modelValue"], Wk = /* @__PURE__ */ dr(() => /* @__PURE__ */ X("option", { value: "" }, " ✘ ", -1)), Hk = ["value"], Vk = ["for"], Gk = ["id", "onUpdate:modelValue"], jk = /* @__PURE__ */ dr(() => /* @__PURE__ */ X("option", { value: "" }, " ✘ ", -1)), Yk = ["value"], Kk = ["for"], Xk = ["id", "onUpdate:modelValue"], Jk = /* @__PURE__ */ dr(() => /* @__PURE__ */ X("option", { value: "" }, " ✘ ", -1)), Qk = ["value"], Zk = ["for"], tS = ["id", "onUpdate:modelValue"], eS = /* @__PURE__ */ dr(() => /* @__PURE__ */ X("option", { value: "" }, " ✘ ", -1)), nS = ["value"], iS = ["aria-label", "onClick"], rS = { class: "button-wrapper main" }, sS = ["aria-label"], oS = ["aria-label", "disabled"], aS = ["aria-label"], lS = { id: "part-count" }, cS = ["innerHTML"], uS = {
  key: 2,
  id: "progress"
}, fS = {
  id: "smartcut-svg-wrapper",
  class: "svg-wrapper production"
}, hS = {
  key: 0,
  id: "stack"
};
function dS(t, e, n, i, r, s) {
  var f, h, d, m, v;
  const o = Qn("Machining"), a = Qn("font-awesome-icon"), l = Qn("ShapePreview"), c = Qn("Spinner"), u = Qn("StockNavigation");
  return Q(), nt(Mt, null, [
    r.machiningEnabled ? (Q(), Ki(o, {
      key: 0,
      shape: r.currentInputShape,
      options: r.machiningOptions,
      onClose: s.closeMachining
    }, null, 8, ["shape", "options", "onClose"])) : yt("", !0),
    r.creditVisible ? (Q(), nt("div", {
      key: 1,
      id: "smartcut-checkout",
      class: qn({ fullscreen: r.isFullScreen })
    }, [
      r.canGoFullScreen ? (Q(), nt("div", {
        key: 0,
        id: "smartcut-full-screen",
        class: "icon-left",
        onClick: e[0] || (e[0] = (_) => s.toggleFullScreen())
      }, [
        pt(a, { icon: ["fasr", "expand"] }),
        Zn(" " + gt(i.t("full screen")), 1)
      ])) : yt("", !0),
      X("div", uk, [
        r.inputShapes.length ? (Q(), nt("div", {
          key: 0,
          class: "row table-heading",
          style: Ht({ "grid-template-columns": s.partColumnsStyle })
        }, [
          fk,
          s.isFieldEnabled("parts", "l") ? (Q(), nt("div", hk, [
            X("span", null, [
              pt(a, { icon: ["fasr", "arrows-left-right"] }),
              Zn(" " + gt(i.t("length")), 1)
            ])
          ])) : yt("", !0),
          s.isFieldEnabled("parts", "w") ? (Q(), nt("div", dk, [
            X("span", null, [
              pt(a, { icon: ["fasr", "arrows-up-down"] }),
              Zn(" " + gt(i.t("width")), 1)
            ])
          ])) : yt("", !0),
          s.isFieldEnabled("parts", "t") ? (Q(), nt("div", pk, gt(i.t("thickness")), 1)) : yt("", !0),
          X("div", mk, gt(i.t("quantity")), 1),
          s.isFieldEnabled("parts", "name") ? (Q(), nt("div", gk, gt(i.t("name")), 1)) : yt("", !0),
          s.isFieldEnabled("parts", "orientation") ? (Q(), nt("div", yk, gt(i.t("orientation")), 1)) : yt("", !0),
          r.canGoFullScreen && s.isFieldEnabled("parts", "machining") ? (Q(), nt("div", bk, gt(i.t("machining")), 1)) : yt("", !0),
          r.inputShapes.length > 1 ? (Q(), nt("div", vk)) : yt("", !0)
        ], 4)) : yt("", !0),
        (Q(!0), nt(Mt, null, Nn(r.inputShapes, (_, g) => (Q(), nt("div", {
          key: g,
          class: "row grid-table",
          style: Ht({ "grid-template-columns": s.partColumnsStyle })
        }, [
          X("div", _k, [
            X("div", {
              class: "id",
              style: Ht({
                background: r.colors.partA,
                color: r.colors.text
              })
            }, gt(g + 1), 5)
          ]),
          s.isFieldEnabled("parts", "l") ? (Q(), nt("div", wk, [
            X("label", {
              for: "part-length-" + g
            }, gt(i.t("length")), 9, xk),
            we(X("input", {
              id: "part-length-" + g,
              ref_for: !0,
              ref: g === r.inputShapes.length - 1 ? "shapeInputFocus" : void 0,
              "onUpdate:modelValue": (b) => _.l = b,
              type: s.inputType,
              inputmode: s.inputMode,
              min: "0",
              placeholder: i.t("l")
            }, null, 8, kk), [
              [
                mc,
                _.l,
                void 0,
                {
                  lazy: !0,
                  trim: !0
                }
              ]
            ])
          ])) : yt("", !0),
          s.isFieldEnabled("parts", "w") ? (Q(), nt("div", Sk, [
            X("label", {
              for: "part-width-" + g
            }, gt(i.t("width")), 9, Ek),
            we(X("input", {
              id: "part-width-" + g,
              "onUpdate:modelValue": (b) => _.w = b,
              type: s.inputType,
              inputmode: s.inputMode,
              min: "0",
              placeholder: i.t("w")
            }, null, 8, Tk), [
              [
                mc,
                _.w,
                void 0,
                {
                  lazy: !0,
                  trim: !0
                }
              ]
            ])
          ])) : yt("", !0),
          s.isFieldEnabled("parts", "t") ? (Q(), nt("div", Ak, [
            we(X("select", {
              id: "part-thickness" + g,
              "onUpdate:modelValue": (b) => _.t = b,
              "aria-label": "Thickness"
            }, [
              (Q(!0), nt(Mt, null, Nn(r.multiThicknesses, (b, x) => (Q(), nt("option", {
                key: x,
                value: b
              }, gt(b), 9, Pk))), 128))
            ], 8, Ck), [
              [
                ti,
                _.t,
                void 0,
                { lazy: !0 }
              ]
            ])
          ])) : yt("", !0),
          X("div", Ok, [
            X("label", {
              for: "part-quantity-" + g
            }, gt(i.t("quantity")), 9, Nk),
            we(X("input", {
              id: "part-quantity-" + g,
              "onUpdate:modelValue": (b) => _.q = b,
              type: "number",
              inputmode: "numeric",
              min: "0",
              placeholder: i.t("q")
            }, null, 8, Ik), [
              [
                ds,
                _.q,
                void 0,
                {
                  lazy: !0,
                  number: !0
                }
              ]
            ])
          ]),
          s.isFieldEnabled("parts", "name") ? (Q(), nt("div", Lk, [
            we(X("input", {
              id: "part-name-" + g,
              "onUpdate:modelValue": (b) => _.name = b,
              "aria-label": i.t("name"),
              type: "text",
              placeholder: i.t("name")
            }, null, 8, Mk), [
              [
                ds,
                _.name,
                void 0,
                { lazy: !0 }
              ]
            ])
          ])) : yt("", !0),
          s.isFieldEnabled("parts", "orientation") ? (Q(), nt("div", Rk, [
            pt(l, {
              shape: _,
              "button-background": r.colors.button,
              "icon-color": r.colors.buttonText,
              onClick: (b) => s.toggleShapeOrientation(_)
            }, null, 8, ["shape", "button-background", "icon-color", "onClick"])
          ])) : yt("", !0),
          r.canGoFullScreen && s.isFieldEnabled("parts", "machining") ? (Q(), nt("div", {
            key: 5,
            class: qn(["cell machining", { active: s.hasMachining(_) }])
          }, [
            X("button", {
              type: "button",
              onClick: (b) => s.openMachining(_)
            }, [
              pt(a, { icon: ["fass", "hammer"] })
            ], 8, Dk)
          ], 2)) : yt("", !0),
          r.inputShapes.length > 1 ? (Q(), nt("div", Fk, [
            X("button", {
              type: "button",
              class: "remove",
              "aria-label": i.t("remove part"),
              onClick: (b) => s.removeShape(g)
            }, [
              pt(a, { icon: ["fass", "trash"] })
            ], 8, zk)
          ])) : yt("", !0),
          s.isFieldEnabled("parts", "banding") && Object.values(r.options.bandingTypes).length > 0 ? (Q(), nt("div", {
            key: 7,
            class: "group banding",
            style: Ht({ "grid-column-end": "span " + (s.partColumns + 1) })
          }, [
            X("div", $k, gt(i.t("b")), 1),
            X("div", Bk, [
              X("div", null, [
                X("label", {
                  for: "banding-y1-" + g
                }, gt(i.t("l1")), 9, qk),
                we(X("select", {
                  id: "banding-y1-" + g,
                  "onUpdate:modelValue": (b) => _.bandingType.y1 = b
                }, [
                  Wk,
                  (Q(!0), nt(Mt, null, Nn(r.options.bandingTypes, (b, x, S) => (Q(), nt("option", {
                    key: x,
                    value: x
                  }, gt(S + 1), 9, Hk))), 128))
                ], 8, Uk), [
                  [
                    ti,
                    _.bandingType.y1,
                    void 0,
                    { lazy: !0 }
                  ]
                ])
              ]),
              X("div", null, [
                X("label", {
                  for: "banding-y2-" + g
                }, gt(i.t("l2")), 9, Vk),
                we(X("select", {
                  id: "banding-y2-" + g,
                  "onUpdate:modelValue": (b) => _.bandingType.y2 = b
                }, [
                  jk,
                  (Q(!0), nt(Mt, null, Nn(r.options.bandingTypes, (b, x, S) => (Q(), nt("option", {
                    key: x,
                    value: x
                  }, gt(S + 1), 9, Yk))), 128))
                ], 8, Gk), [
                  [
                    ti,
                    _.bandingType.y2,
                    void 0,
                    { lazy: !0 }
                  ]
                ])
              ]),
              X("div", null, [
                X("label", {
                  for: "banding-x1-" + g
                }, gt(i.t("w1")), 9, Kk),
                we(X("select", {
                  id: "banding-x1-" + g,
                  "onUpdate:modelValue": (b) => _.bandingType.x1 = b
                }, [
                  Jk,
                  (Q(!0), nt(Mt, null, Nn(r.options.bandingTypes, (b, x, S) => (Q(), nt("option", {
                    key: x,
                    value: x
                  }, gt(S + 1), 9, Qk))), 128))
                ], 8, Xk), [
                  [
                    ti,
                    _.bandingType.x1,
                    void 0,
                    { lazy: !0 }
                  ]
                ])
              ]),
              X("div", null, [
                X("label", {
                  for: "banding-x2-" + g
                }, gt(i.t("w2")), 9, Zk),
                we(X("select", {
                  id: "banding-x2-" + g,
                  "onUpdate:modelValue": (b) => _.bandingType.x2 = b
                }, [
                  eS,
                  (Q(!0), nt(Mt, null, Nn(r.options.bandingTypes, (b, x, S) => (Q(), nt("option", {
                    key: x,
                    value: x
                  }, gt(S + 1), 9, nS))), 128))
                ], 8, tS), [
                  [
                    ti,
                    _.bandingType.x2,
                    void 0,
                    { lazy: !0 }
                  ]
                ])
              ]),
              X("button", {
                class: "delete",
                "aria-label": i.t("delete banding"),
                onClick: (b) => s.deleteBanding(_)
              }, [
                pt(a, { icon: ["fass", "trash"] })
              ], 8, iS)
            ])
          ], 4)) : yt("", !0)
        ], 4))), 128))
      ]),
      X("div", rS, [
        X("button", {
          type: "button",
          "aria-label": i.t("add part"),
          style: Ht({ background: r.colors.button, color: r.colors.buttonText }),
          class: "add c-btn icon-left",
          onClick: e[1] || (e[1] = (_) => s.addShape(1))
        }, [
          pt(a, { icon: ["fasr", "plus-large"] }),
          Zn(" Add ")
        ], 12, sS),
        X("button", {
          class: "c-btn calculate icon-left",
          type: "button",
          "aria-label": i.t("calculate"),
          style: Ht({
            background: r.colors.button,
            color: r.colors.buttonText
          }),
          disabled: !((f = r.inputStock) != null && f.length) || r.thinking,
          onClick: e[2] || (e[2] = (_) => s.calculate())
        }, [
          pt(a, { icon: ["fass", "calculator"] }),
          Zn("Calculate price ")
        ], 12, oS),
        X("button", {
          type: "button",
          class: "c-btn clear",
          "aria-label": i.t("clear"),
          onClick: e[3] || (e[3] = (_) => s.clear())
        }, [
          pt(a, { icon: ["fass", "trash"] })
        ], 8, aS),
        X("div", lS, gt(s.totalInputShapes) + gt((h = r.options) != null && h.maxParts ? "/" + r.options.maxParts : ""), 1)
      ]),
      X("div", {
        id: "credit",
        style: Ht(r.creditStyles)
      }, [
        X("a", {
          title: "SmartCut | Cut list optimization software",
          style: Ht(r.creditLinkStyles),
          target: "_blank",
          href: "https://smartcut.dev/"
        }, gt(i.t("Powered by SmartCut")), 5)
      ], 4),
      r.messageVisible ? (Q(), nt("div", {
        key: 1,
        id: "messages",
        innerHTML: r.messageContent
      }, null, 8, cS)) : yt("", !0),
      (r.options.showDiagram ? r.thinking && !r.progress.complete : r.thinking || r.progress.complete) ? (Q(), nt("div", uS, [
        pt(c, {
          size: 50,
          number: r.progress.shapeCount,
          complete: r.progress.complete,
          "show-number": r.options.showProgressNumber
        }, null, 8, ["number", "complete", "show-number"])
      ])) : yt("", !0),
      we(X("div", fS, [
        ((d = s.activeStock) == null ? void 0 : d.type) !== "roll" ? (Q(), nt("div", hS, gt((m = s.activeStock) != null && m.stack ? (v = s.activeStock) == null ? void 0 : v.stack : 1), 1)) : yt("", !0)
      ], 512), [
        [rh, r.options.showDiagram && r.jobId > 0 && r.progress.complete]
      ]),
      r.options.showDiagram && r.visInit && s.usedStock.length > 1 && r.jobId > 0 && r.progress.complete ? (Q(), Ki(u, {
        key: 3,
        ref: "stockNavigation",
        "active-stock-id": r.activeStockId,
        "stock-list": s.stackedStock,
        "stock-count": r.stockList.length,
        "viewport-width": r.viewportWidth,
        onShowStock: s.showStock
      }, null, 8, ["active-stock-id", "stock-list", "stock-count", "viewport-width", "onShowStock"])) : yt("", !0)
    ], 2)) : yt("", !0)
  ], 64);
}
typeof Iu == "function" && Iu(Pd);
const pS = /* @__PURE__ */ Ti(Pd, [["render", dS], ["__scopeId", "data-v-693fe1ac"]]), mS = {
  name: "Wordpress",
  //needs to be Wordpress not WordPress
  components: {
    CheckoutCalculator: pS
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
  created() {
    console.log(
      "💥 Powered by https://smartcut.dev",
      smartcutConfig.version
    );
  },
  mounted() {
    console.log("Launching WordPress checkout..."), this.bandingData = (smartcutConfig == null ? void 0 : smartcutConfig.banding_data) ?? null, this.machiningPricing = (smartcutConfig == null ? void 0 : smartcutConfig.machining_pricing) ?? null, this.variations = (smartcutConfig == null ? void 0 : smartcutConfig.variations) ?? null, this.cacheElements(), this.cacheInputFields(), this.configureProduct(smartcutConfig), this.configurePricing(smartcutConfig), this.initCheckout(), this.configureStock(), jQuery(".variations_form").on("reset_data", () => {
      this.disableCutToSize();
    }), jQuery(".variations_form").on("found_variation", (e, n) => {
      var r, s, o;
      this.reset(), this.stock = [];
      const i = (r = n == null ? void 0 : n.attributes) == null ? void 0 : r.attribute_thickness;
      if (this.product.selected_thickness = i, this.product.multiple_sizes) {
        const a = this.getSizes(n);
        if (!a)
          return this.disableCutToSize(), this.el.cart_button.disabled = !0, this.el.quantity.readOnly = !0, this.error(
            "The size of this multiple size product could not be found"
          );
        Array.isArray(a) ? this.enableCutToSize() : this.isFullSheetSize(a) ? (this.disableCutToSize(), this.enableFullSheet(), this.el.quantity.style.display = "inline-block") : (this.enableCutToSize(), this.el.quantity.style.display = "none"), this.log(["variation found", a, i]);
        let l;
        if ((s = this.variations) != null && s.length && this.product.selected_thickness) {
          if (Array.isArray(a)) {
            const c = this.variations.find(
              (u) => u.attributes.thickness === this.product.selected_thickness
            );
            if (!c)
              return this.error(
                `variation not found for thickness ${this.product.selected_thickness}`
              );
            l = a.map((u) => ({
              size: u,
              l: u.split("x")[0],
              w: u.split("x")[1],
              t: this.product.selected_thickness,
              price: c == null ? void 0 : c.price
            }));
          } else
            l = this.variations.filter((c) => {
              var u, f;
              return /\d+x\d+/.test((u = c == null ? void 0 : c.attributes) == null ? void 0 : u.size) ? this.product.selected_thickness === ((f = c == null ? void 0 : c.attributes) == null ? void 0 : f.thickness) : !1;
            }).map((c) => {
              var u, f, h;
              return {
                size: (u = c == null ? void 0 : c.attributes) == null ? void 0 : u.size,
                l: (f = c == null ? void 0 : c.attributes) == null ? void 0 : f.size.split("x")[0],
                w: (h = c == null ? void 0 : c.attributes) == null ? void 0 : h.size.split("x")[1],
                t: this.product.selected_thickness,
                price: c == null ? void 0 : c.price
                //the base price entered by the admin
              };
            });
          l.forEach((c) => {
            const u = this.createStock(
              c.l,
              c.w,
              c.t,
              c.price
            );
            this.stock.push(u);
          });
        }
      } else {
        this.el.quantity.style.display = "inline-block";
        const a = this.variations.find(
          (c) => c.attributes.thickness === this.product.selected_thickness
        );
        if (!a)
          return this.error(
            `variation not found for thickness ${this.product.selected_thickness}`
          );
        const l = (o = n == null ? void 0 : n.attributes) == null ? void 0 : o.attribute_thickness;
        this.stock.push(
          this.createStock(
            this.product.l,
            this.product.w,
            l,
            a.price
          )
        ), this.enableCutToSize();
      }
    }), [
      "div.quantity > input.plus",
      "div.quantity > input.minus",
      "div.quantity .qty-plus",
      "div.quantity .qty-minus"
    ].forEach((e) => {
      const n = document.querySelector(e);
      n && (n.style.display = "none");
    });
  },
  methods: {
    toggleDebug(t) {
      this.debug = t;
    },
    log(t) {
      this.debug && console.log("SmartCut -", ...t);
    },
    enableCutToSize() {
      [
        "checkout",
        "intro_text",
        "offcuts",
        "banding_key"
      ].forEach((e) => {
        const n = this.el[e];
        n && (n.style.display = "block");
      }), this.isPricingTableNeeded() && (this.el.pricing_table.style.display = "table"), this.el.cart_button.disabled = !0, this.el.quantity.readOnly = !0, this.el.quantity.style.display = "inline-block";
    },
    disableCutToSize() {
      var e;
      [
        "checkout",
        "intro_text",
        "offcuts",
        "banding_key",
        "pricing_table"
      ].forEach((n) => {
        const i = this.el[n];
        i && (i.style.display = "none");
      }), (e = this.el) != null && e.quantity && (this.el.quantity.style.display = "inline-block");
    },
    enableFullSheet() {
      this.el.cart_button.disabled = !1, this.el.quantity.readOnly = !1;
    },
    parseValue(t, e) {
      let n;
      switch (e) {
        case "string":
        case "hex":
          n = this.parseString(t);
          break;
        case "boolean":
          n = this.parseBoolean(t);
          break;
        case "int":
          n = this.parseInt(t);
          break;
        case "float":
          n = this.parseFloat(t);
          break;
        default:
          n = this.parseString(t);
          break;
      }
      return n;
    },
    parseInt(t) {
      return t ? parseInt(t) : 0;
    },
    parseFloat(t) {
      return t ? parseFloat(t) : 0;
    },
    parseBoolean(t) {
      return t ? t === "1" : !1;
    },
    parseString(t) {
      return t || "";
    },
    initCheckout() {
      var t, e, n, i, r, s, o, a, l, c, u, f, h, d, m, v, _;
      if (!smartcutConfig) {
        console.error("SmartCut config not found");
        return;
      }
      for (const g in smartcutConfig.settings_fields)
        this.settings[g] = this.parseValue(
          smartcutConfig.settings[g],
          smartcutConfig.settings_fields[g]
        );
      this.options = {
        debug: this.settings.debug,
        units: this.settings.units,
        locale: smartcutConfig.locale,
        //saw settings
        bladeWidth: this.settings.blade_width,
        stockType: this.settings.stock_type,
        cutPreference: this.settings.cut_preference,
        stackHeight: this.settings.stack_height,
        maxParts: this.settings.max_parts ?? null,
        //disable defauls options
        disableBanding: this.settings.disable_banding,
        disableOrientation: this.settings.disable_orientation,
        disablePartName: this.settings.disable_part_name,
        //diagram
        showDiagram: !this.settings.hide_diagram,
        showProgressNumber: this.settings.pricing_strategy !== "part_area",
        //banding
        bandingTypes: (smartcutConfig == null ? void 0 : smartcutConfig.banding_data) ?? null,
        enableMachining: this.settings.enable_machining,
        //machining - this needs to match the MachiningOptions type
        machining: {
          sides: {
            enabled: this.settings.machining_sides
          },
          holes: {
            enabled: this.settings.machining_holes,
            defaultDiameter: this.settings.machining_holes_default_diameter,
            diameters: this.settings.machining_holes_diameters.split(",").map((g) => g.trim()).filter((g) => g),
            minDiameter: this.settings.machining_holes_min_diameter,
            maxDiameter: this.settings.machining_holes_max_diameter,
            enableDepth: this.settings.machining_holes_depth,
            depths: this.settings.machining_holes_depths.split(",").map((g) => g.trim()).filter((g) => g),
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
            ].filter((g) => g),
            minValue: this.settings.machining_corners_min_value,
            maxValue: this.settings.machining_corners_max_value
          },
          banding: {
            enabled: !!(!this.settings.disable_banding && ((t = smartcutConfig == null ? void 0 : smartcutConfig.banding_data) != null && t.length)),
            enableCorners: this.settings.machining_corners_enable_banding,
            types: smartcutConfig == null ? void 0 : smartcutConfig.banding_data,
            enableTypes: (smartcutConfig == null ? void 0 : smartcutConfig.banding_data) ?? !1
          }
        },
        //colors
        colors: {
          partA: (e = this.settings) != null && e.part_a_color ? (n = this.settings) == null ? void 0 : n.part_a_color : "#1d9bc4",
          partB: (i = this.settings) != null && i.part_b_color ? (r = this.settings) == null ? void 0 : r.part_b_color : "#065d7a",
          partHover: (s = this.settings) != null && s.part_hover_color ? (o = this.settings) == null ? void 0 : o.part_hover_color : "#f8b029",
          partSelected: (a = this.settings) != null && a.part_selected_color ? (l = this.settings) == null ? void 0 : l.part_selected_color : "#5bc85b",
          stock: (c = this.settings) != null && c.stock_color ? (u = this.settings) == null ? void 0 : u.stock_color : "#ffd166",
          button: (f = this.settings) != null && f.button_color ? (h = this.settings) == null ? void 0 : h.button_color : "#118ab2",
          buttonText: (d = this.settings) != null && d.button_text_color ? (m = this.settings) == null ? void 0 : m.button_text_color : "#ffffff",
          text: (v = this.settings) != null && v.text_color ? (_ = this.settings) == null ? void 0 : _.text_color : "#ffffff"
        }
      }, this.$refs.calculator.init({
        stock: this.stock,
        options: this.options,
        type: this.product.type,
        variations: this.variations ?? null
      });
    },
    formatPrice(t = 0) {
      return typeof t == "string" && (t = parseFloat(t)), t.toFixed(this.formatting.number_of_decimals).replace(".", this.formatting.decimal_separator);
    },
    configureProduct(t) {
      const e = (t == null ? void 0 : t.multiple_sizes) === "1";
      this.product = {
        type: t == null ? void 0 : t.product_type,
        multiple_sizes: e,
        size: t != null && t.size ? t.size.split(" | ") : [],
        l: !e && (t != null && t.l) ? this.parseFloat(t.l) : null,
        w: !e && (t != null && t.w) ? this.parseFloat(t.w) : null,
        t: (t == null ? void 0 : t.t) ?? null
        //do not parse to allow for multiple thicknesses separated by a comma
      }, this.product.stock_name = t.stock_name, this.product.multiple_sizes || (this.product.l || this.error("product 'length' attribute not available"), this.product.w || this.error("product 'width' attribute not available"));
    },
    configurePricing(t) {
      this.formatting = {
        thousands_separator: t == null ? void 0 : t.thousands_separator,
        decimal_separator: t == null ? void 0 : t.decimal_separator,
        number_of_decimals: t == null ? void 0 : t.number_of_decimals,
        currency_symbol: t == null ? void 0 : t.currency_symbol,
        currency_position: t == null ? void 0 : t.currency_position
      };
    },
    cacheElements() {
      if (this.el.checkout = document.getElementById("smartcut-app"), !this.el.checkout)
        return this.error("checkout iframe not found");
      if (this.el.intro_text = document.getElementById("smartcut-intro-text"), this.el.pricing_table = document.getElementById(
        "smartcut-pricing-table"
      ), this.el.offcuts = document.getElementById("include_offcuts_field"), this.el.banding_key = document.getElementById(
        "smartcut-banding-key"
      ), this.el.banding_total_price = document.querySelector(
        "#smartcut-banding-total bdi .smartcut-price-selector"
      ), this.el.cut_length_price = document.querySelector(
        "#smartcut-cut-length-total bdi .smartcut-price-selector"
      ), this.el.per_part_price = document.querySelector(
        "#smartcut-per-part-total bdi .smartcut-price-selector"
      ), this.el.surcharge_price = document.querySelector(
        "#smartcut-surcharge-total bdi .smartcut-price-selector"
      ), this.el.machining_total_price = document.querySelector(
        "#smartcut-machining-total bdi .smartcut-price-selector"
      ), this.el.quantity = document.querySelector(
        ".smartcut-stock-quantity"
      ), this.el.cart_button = document.querySelector(
        ".single_add_to_cart_button"
      ), !this.el.quantity)
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
    createStock(t = null, e = null, n = null, i = null) {
      return {
        name: this.product.stock_name,
        type: this.settings.stock_type,
        l: t,
        w: e,
        t: n,
        cost: parseFloat(i),
        trim: this.getStockTrim()
      };
    },
    configureStock() {
      var t, e;
      (t = this.product) != null && t.stock_name || this.error("product name not specified"), this.product.type === "variable" ? this.disableCutToSize() : (this.enableCutToSize(), this.stock = [], this.product.multiple_sizes ? this.product.size.forEach((n) => {
        var o;
        const [i, r] = n.split("x"), s = this.createStock(
          i,
          r,
          (o = this.product) == null ? void 0 : o.t,
          n.price
        );
        this.stock.push(s);
      }) : this.stock.push(
        this.createStock(
          this.product.l,
          this.product.w,
          (e = this.product) == null ? void 0 : e.t
        )
      ));
    },
    getTotalBandingPrice(t) {
      var n;
      let e = 0;
      if (typeof t == "object") {
        for (let [i, r] of Object.entries(t)) {
          typeof r == "string" && (r = parseFloat(r));
          const s = r / (this.settings.units === "fraction" ? 12 : 1e3) * parseFloat(this.bandingData[i].price);
          e += s;
        }
        if ("min_banding_charge" in this.settings) {
          const i = parseFloat(
            (n = this.settings) == null ? void 0 : n.min_banding_charge
          );
          if (i > 0 && e > 0 && e < i)
            return i;
        }
        return e;
      } else
        return 0;
    },
    getTotalMachiningPrice(t) {
      return (this.machiningPricing.holes ?? 0) * (t.metadata.numHoles ?? 0) + (this.machiningPricing.corners ?? 0) * (t.metadata.numCorners ?? 0);
    },
    reset() {
      this.el.quantity.value = 1, this.el.cart_button.disabled = !0, this.inputs["smartcut-cut-to-size-surcharge"].value = 0, this.el.banding_total_price && (this.el.banding_total_price.innerText = this.formatPrice(0)), this.el.machining_total_price && (this.el.machining_total_price.innerText = this.formatPrice(0)), this.el.cut_length_price && (this.el.cut_length_price.innerText = this.formatPrice(0)), this.el.per_part_price && (this.el.per_part_price.innerText = this.formatPrice(0));
      for (const t in this.inputs)
        this.inputs[t].value = null;
    },
    error(t) {
      console.error(`SmartCut - ${t}`);
    },
    isQuantityPricing() {
      if ((smartcutConfig == null ? void 0 : smartcutConfig.product_type) === "variable")
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
      return !(this.settings.disable_banding === "1" || !this.bandingData || !Object.values(this.bandingData).length);
    },
    isMachiningEnabled() {
      return this.settings.enable_machining === "1";
    },
    isSurchargeEnabled() {
      var t, e;
      return !(((t = this.settings) == null ? void 0 : t.surcharge_type) === "none" || !((e = this == null ? void 0 : this.settings) != null && e.surcharge) || this.settings.surcharge === "0.00");
    },
    //[] update for machining
    isPricingTableNeeded() {
      return !!(this.settings.pricing_strategy === "full_sheet_plus_cut_length" || this.settings.pricing_strategy === "full_sheet_plus_num_parts" || this.isSurchargeEnabled() || this.isBandingEnabled() || this.isMachiningEnabled());
    },
    /**
     * @param {WC_Product_Variation} variation
     * @returns {string[] | string}
     */
    getSizes(t) {
      var n, i;
      let e = null;
      return t && (e = (n = t == null ? void 0 : t.attributes) == null ? void 0 : n.attribute_size), e || (e = (i = this.product) == null ? void 0 : i.size), e;
    },
    isFullSheetSize(t) {
      return /\d+x\d+/.test(t);
    },
    cacheInputFields() {
      smartcutConfig.input_fields.forEach((t) => {
        const e = t.replaceAll("_", "-");
        this.inputs[e] = document.getElementById(e);
      });
    },
    result(t) {
      var s, o, a, l;
      this.reset();
      const e = this.isQuantityPricing();
      let n = e ? t.metadata.totalStockCost / t.metadata.totalUsedStock : 0;
      if (this.log(["result event received", t]), !(t != null && t.jobId))
        return;
      switch (this.product.multiple_sizes && this.log(["result event received for multiple sizes"]), this.settings.pricing_strategy) {
        case "full_sheet":
          this.log(["calculating cost by full sheet"]), e ? this.el.quantity.value = t.metadata.totalUsedStock : this.el.quantity.value = 1, this.el.cart_button.disabled = !1;
          break;
        case "part_area":
          {
            this.log([
              "calculating cost by part area in meters / sq feet"
            ]);
            const c = this.settings.units === "fraction" ? t.metadata.totalPartArea / 144 : t.metadata.totalPartArea / 1e6;
            this.log([
              `part area in square ${this.settings.units === "fraction" ? "feet" : "meters"}`,
              c
            ]), this.el.quantity.value = c.toFixed(2), this.el.cart_button.disabled = !1;
          }
          break;
        case "cut_length":
          {
            this.log([
              "calculating cost by cut length in feet / meters"
            ]);
            const c = t.metadata.totalCutLength / (this.settings.units === "fraction" ? 12 : 1e3);
            this.el.quantity.value = c.toFixed(2), this.el.cart_button.disabled = !1;
          }
          break;
        case "full_sheet_plus_cut_length":
          {
            this.log([
              "calculating cost by full sheet plus cut length"
            ]), e ? (this.el.quantity.style.display = "inline-block", this.el.quantity.value = t.metadata.totalUsedStock) : (this.el.quantity.value = 1, this.el.quantity.style.display = "none");
            const u = t.metadata.totalCutLength / (this.settings.units === "fraction" ? 12 : 1e3) * this.settings.cut_length_price;
            this.el.cut_length_price && (this.el.cut_length_price.innerText = this.formatPrice(u)), this.inputs["smartcut-cut-length-price"].value = u, n += u, this.el.cart_button.disabled = !1;
          }
          break;
        case "full_sheet_plus_num_parts":
          {
            this.log([
              "calculating cost by full sheet plus number of parts"
            ]), e ? (this.el.quantity.style.display = "inline-block", this.el.quantity.value = t.metadata.totalUsedStock) : (this.el.quantity.value = 1, this.el.quantity.style.display = "none");
            const c = t.metadata.totalPartsProduced * this.settings.per_part_price;
            this.el.per_part_price && (this.el.per_part_price.innerText = this.formatPrice(c)), this.inputs["smartcut-per-part-price"].value = c, n += c, this.el.cart_button.disabled = !1;
          }
          break;
      }
      if (!e) {
        if (!t.metadata.totalStockCost)
          return this.error(
            "Total stock cost not returned for a multiple size product"
          );
        const c = parseFloat(t.metadata.totalStockCost);
        this.log(["total price", c]), document.getElementById(
          "smartcut-custom-price"
        ).value = c.toString(), n += c;
      }
      if (this.isBandingEnabled()) {
        const c = this.getTotalBandingPrice(
          t.metadata.bandingLengthByType
        );
        this.inputs["smartcut-banding-price"].value = c, this.el.banding_total_price && (this.el.banding_total_price.innerText = this.formatPrice(c)), n += c;
      }
      if (this.isMachiningEnabled()) {
        const c = this.getTotalMachiningPrice(t);
        this.inputs["smartcut-machining-price"].value = c, this.el.machining_total_price && (this.el.machining_total_price.innerText = this.formatPrice(c)), n += c;
      }
      if (this.isSurchargeEnabled() && (s = this.settings) != null && s.surcharge) {
        let c = 0;
        ((o = this.settings) == null ? void 0 : o.surcharge_type) === "per_sheet" ? c = parseFloat((a = this.settings) == null ? void 0 : a.surcharge) * parseFloat(t.metadata.totalUsedStock) : c = parseFloat((l = this.settings) == null ? void 0 : l.surcharge), this.inputs["smartcut-cut-to-size-surcharge"].value = c, this.el.surcharge_price && (this.el.surcharge_price.innerText = this.formatPrice(c)), this.log(["added surcharge", c]), n += c;
      }
      const i = document.querySelector(
        ".woocommerce-variation-price .smartcut-price-selector"
      );
      i && (i.innerText = this.formatPrice(n)), this.inputs["smartcut-job-id"].value = t == null ? void 0 : t.jobId, this.inputs["smartcut-total-cut-length"].value = t.metadata.totalCutLength, this.inputs["smartcut-part-area"].value = t.metadata.totalPartArea, this.inputs["smartcut-total-cuts"].value = t.metadata.totalCuts, this.inputs["smartcut-total-parts"].value = t.metadata.totalPartsProduced, this.inputs["smartcut-machining"].value = t.metadata.hasMachining ? "Y" : "N";
      const r = t == null ? void 0 : t.parts.map((c) => `${c.l}x${c.w} [${c.q}]`).join(", ");
      this.inputs["smartcut-dimensions"].value = r;
    }
  }
};
function gS(t, e, n, i, r, s) {
  const o = Qn("CheckoutCalculator");
  return Q(), Ki(o, {
    ref: "calculator",
    debug: r.debug,
    stock: r.stock,
    onLog: s.log,
    onError: s.error,
    onDebug: s.toggleDebug,
    onResult: s.result
  }, null, 8, ["debug", "stock", "onLog", "onError", "onDebug", "onResult"]);
}
const yS = /* @__PURE__ */ Ti(mS, [["render", gS]]), bS = /* @__PURE__ */ Wf(() => import("./Vanilla-T-LpqHv2.js")), vS = /* @__PURE__ */ ki({
  name: "Launch",
  components: {
    Wordpress: yS,
    Vanilla: bS
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
  },
  mounted() {
    this.type === "vanilla" && (window.smartcutCheckout = this);
  },
  //these will be exposed on window.smartcutCheckout
  methods: {
    test() {
      console.log("test");
    }
    //init can be called at any time an fire up the checkout
    /* init(data) {
      this.$refs.checkout.init(data);
    }, */
  }
});
function _S(t, e, n, i, r, s) {
  return Q(), Ki(sm(t.currentComponent), { ref: "checkout" }, null, 512);
}
const wS = /* @__PURE__ */ Ti(vS, [["render", _S]]);
function Lu(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    e && (i = i.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function U(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Lu(Object(n), !0).forEach(function(i) {
      Dt(t, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Lu(Object(n)).forEach(function(i) {
      Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return t;
}
function Os(t) {
  "@babel/helpers - typeof";
  return Os = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Os(t);
}
function xS(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Mu(t, e) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
  }
}
function kS(t, e, n) {
  return e && Mu(t.prototype, e), n && Mu(t, n), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function Dt(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function vl(t, e) {
  return ES(t) || AS(t, e) || Od(t, e) || PS();
}
function pr(t) {
  return SS(t) || TS(t) || Od(t) || CS();
}
function SS(t) {
  if (Array.isArray(t))
    return fa(t);
}
function ES(t) {
  if (Array.isArray(t))
    return t;
}
function TS(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function AS(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var i = [], r = !0, s = !1, o, a;
    try {
      for (n = n.call(t); !(r = (o = n.next()).done) && (i.push(o.value), !(e && i.length === e)); r = !0)
        ;
    } catch (l) {
      s = !0, a = l;
    } finally {
      try {
        !r && n.return != null && n.return();
      } finally {
        if (s)
          throw a;
      }
    }
    return i;
  }
}
function Od(t, e) {
  if (t) {
    if (typeof t == "string")
      return fa(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return fa(t, e);
  }
}
function fa(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, i = new Array(e); n < e; n++)
    i[n] = t[n];
  return i;
}
function CS() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function PS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ru = function() {
}, _l = {}, Nd = {}, Id = null, Ld = {
  mark: Ru,
  measure: Ru
};
try {
  typeof window < "u" && (_l = window), typeof document < "u" && (Nd = document), typeof MutationObserver < "u" && (Id = MutationObserver), typeof performance < "u" && (Ld = performance);
} catch {
}
var OS = _l.navigator || {}, Du = OS.userAgent, Fu = Du === void 0 ? "" : Du, wn = _l, kt = Nd, zu = Id, Dr = Ld;
wn.document;
var Ze = !!kt.documentElement && !!kt.head && typeof kt.addEventListener == "function" && typeof kt.createElement == "function", Md = ~Fu.indexOf("MSIE") || ~Fu.indexOf("Trident/"), Fr, zr, $r, Br, qr, Ke = "___FONT_AWESOME___", ha = 16, Rd = "fa", Dd = "svg-inline--fa", Gn = "data-fa-i2svg", da = "data-fa-pseudo-element", NS = "data-fa-pseudo-element-pending", wl = "data-prefix", xl = "data-icon", $u = "fontawesome-i2svg", IS = "async", LS = ["HTML", "HEAD", "STYLE", "SCRIPT"], Fd = function() {
  try {
    return !0;
  } catch {
    return !1;
  }
}(), xt = "classic", Nt = "sharp", kl = [xt, Nt];
function mr(t) {
  return new Proxy(t, {
    get: function(n, i) {
      return i in n ? n[i] : n[xt];
    }
  });
}
var er = mr((Fr = {}, Dt(Fr, xt, {
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
  "fa-brands": "brands",
  fak: "kit",
  fakd: "kit",
  "fa-kit": "kit",
  "fa-kit-duotone": "kit"
}), Dt(Fr, Nt, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), Fr)), nr = mr((zr = {}, Dt(zr, xt, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), Dt(zr, Nt, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), zr)), ir = mr(($r = {}, Dt($r, xt, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), Dt($r, Nt, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), $r)), MS = mr((Br = {}, Dt(Br, xt, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), Dt(Br, Nt, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), Br)), RS = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, zd = "fa-layers-text", DS = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, FS = mr((qr = {}, Dt(qr, xt, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), Dt(qr, Nt, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), qr)), $d = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], zS = $d.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), $S = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Dn = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, rr = /* @__PURE__ */ new Set();
Object.keys(nr[xt]).map(rr.add.bind(rr));
Object.keys(nr[Nt]).map(rr.add.bind(rr));
var BS = [].concat(kl, pr(rr), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Dn.GROUP, Dn.SWAP_OPACITY, Dn.PRIMARY, Dn.SECONDARY]).concat($d.map(function(t) {
  return "".concat(t, "x");
})).concat(zS.map(function(t) {
  return "w-".concat(t);
})), Ui = wn.FontAwesomeConfig || {};
function qS(t) {
  var e = kt.querySelector("script[" + t + "]");
  if (e)
    return e.getAttribute(t);
}
function US(t) {
  return t === "" ? !0 : t === "false" ? !1 : t === "true" ? !0 : t;
}
if (kt && typeof kt.querySelector == "function") {
  var WS = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  WS.forEach(function(t) {
    var e = vl(t, 2), n = e[0], i = e[1], r = US(qS(n));
    r != null && (Ui[i] = r);
  });
}
var Bd = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: Rd,
  replacementClass: Dd,
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
Ui.familyPrefix && (Ui.cssPrefix = Ui.familyPrefix);
var _i = U(U({}, Bd), Ui);
_i.autoReplaceSvg || (_i.observeMutations = !1);
var K = {};
Object.keys(Bd).forEach(function(t) {
  Object.defineProperty(K, t, {
    enumerable: !0,
    set: function(n) {
      _i[t] = n, Wi.forEach(function(i) {
        return i(K);
      });
    },
    get: function() {
      return _i[t];
    }
  });
});
Object.defineProperty(K, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    _i.cssPrefix = e, Wi.forEach(function(n) {
      return n(K);
    });
  },
  get: function() {
    return _i.cssPrefix;
  }
});
wn.FontAwesomeConfig = K;
var Wi = [];
function HS(t) {
  return Wi.push(t), function() {
    Wi.splice(Wi.indexOf(t), 1);
  };
}
var ln = ha, Fe = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function VS(t) {
  if (!(!t || !Ze)) {
    var e = kt.createElement("style");
    e.setAttribute("type", "text/css"), e.innerHTML = t;
    for (var n = kt.head.childNodes, i = null, r = n.length - 1; r > -1; r--) {
      var s = n[r], o = (s.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (i = s);
    }
    return kt.head.insertBefore(e, i), t;
  }
}
var GS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function sr() {
  for (var t = 12, e = ""; t-- > 0; )
    e += GS[Math.random() * 62 | 0];
  return e;
}
function Ai(t) {
  for (var e = [], n = (t || []).length >>> 0; n--; )
    e[n] = t[n];
  return e;
}
function Sl(t) {
  return t.classList ? Ai(t.classList) : (t.getAttribute("class") || "").split(" ").filter(function(e) {
    return e;
  });
}
function qd(t) {
  return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function jS(t) {
  return Object.keys(t || {}).reduce(function(e, n) {
    return e + "".concat(n, '="').concat(qd(t[n]), '" ');
  }, "").trim();
}
function io(t) {
  return Object.keys(t || {}).reduce(function(e, n) {
    return e + "".concat(n, ": ").concat(t[n].trim(), ";");
  }, "");
}
function El(t) {
  return t.size !== Fe.size || t.x !== Fe.x || t.y !== Fe.y || t.rotate !== Fe.rotate || t.flipX || t.flipY;
}
function YS(t) {
  var e = t.transform, n = t.containerWidth, i = t.iconWidth, r = {
    transform: "translate(".concat(n / 2, " 256)")
  }, s = "translate(".concat(e.x * 32, ", ").concat(e.y * 32, ") "), o = "scale(".concat(e.size / 16 * (e.flipX ? -1 : 1), ", ").concat(e.size / 16 * (e.flipY ? -1 : 1), ") "), a = "rotate(".concat(e.rotate, " 0 0)"), l = {
    transform: "".concat(s, " ").concat(o, " ").concat(a)
  }, c = {
    transform: "translate(".concat(i / 2 * -1, " -256)")
  };
  return {
    outer: r,
    inner: l,
    path: c
  };
}
function KS(t) {
  var e = t.transform, n = t.width, i = n === void 0 ? ha : n, r = t.height, s = r === void 0 ? ha : r, o = t.startCentered, a = o === void 0 ? !1 : o, l = "";
  return a && Md ? l += "translate(".concat(e.x / ln - i / 2, "em, ").concat(e.y / ln - s / 2, "em) ") : a ? l += "translate(calc(-50% + ".concat(e.x / ln, "em), calc(-50% + ").concat(e.y / ln, "em)) ") : l += "translate(".concat(e.x / ln, "em, ").concat(e.y / ln, "em) "), l += "scale(".concat(e.size / ln * (e.flipX ? -1 : 1), ", ").concat(e.size / ln * (e.flipY ? -1 : 1), ") "), l += "rotate(".concat(e.rotate, "deg) "), l;
}
var XS = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
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
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
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
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
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
  left: calc(var(--fa-li-width, 2em) * -1);
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
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
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
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
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
function Ud() {
  var t = Rd, e = Dd, n = K.cssPrefix, i = K.replacementClass, r = XS;
  if (n !== t || i !== e) {
    var s = new RegExp("\\.".concat(t, "\\-"), "g"), o = new RegExp("\\--".concat(t, "\\-"), "g"), a = new RegExp("\\.".concat(e), "g");
    r = r.replace(s, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(a, ".".concat(i));
  }
  return r;
}
var Bu = !1;
function Eo() {
  K.autoAddCss && !Bu && (VS(Ud()), Bu = !0);
}
var JS = {
  mixout: function() {
    return {
      dom: {
        css: Ud,
        insertCss: Eo
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        Eo();
      },
      beforeI2svg: function() {
        Eo();
      }
    };
  }
}, Xe = wn || {};
Xe[Ke] || (Xe[Ke] = {});
Xe[Ke].styles || (Xe[Ke].styles = {});
Xe[Ke].hooks || (Xe[Ke].hooks = {});
Xe[Ke].shims || (Xe[Ke].shims = []);
var Ee = Xe[Ke], Wd = [], QS = function t() {
  kt.removeEventListener("DOMContentLoaded", t), Ns = 1, Wd.map(function(e) {
    return e();
  });
}, Ns = !1;
Ze && (Ns = (kt.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(kt.readyState), Ns || kt.addEventListener("DOMContentLoaded", QS));
function ZS(t) {
  Ze && (Ns ? setTimeout(t, 0) : Wd.push(t));
}
function gr(t) {
  var e = t.tag, n = t.attributes, i = n === void 0 ? {} : n, r = t.children, s = r === void 0 ? [] : r;
  return typeof t == "string" ? qd(t) : "<".concat(e, " ").concat(jS(i), ">").concat(s.map(gr).join(""), "</").concat(e, ">");
}
function qu(t, e, n) {
  if (t && t[e] && t[e][n])
    return {
      prefix: e,
      iconName: n,
      icon: t[e][n]
    };
}
var t2 = function(e, n) {
  return function(i, r, s, o) {
    return e.call(n, i, r, s, o);
  };
}, To = function(e, n, i, r) {
  var s = Object.keys(e), o = s.length, a = r !== void 0 ? t2(n, r) : n, l, c, u;
  for (i === void 0 ? (l = 1, u = e[s[0]]) : (l = 0, u = i); l < o; l++)
    c = s[l], u = a(u, e[c], c, e);
  return u;
};
function e2(t) {
  for (var e = [], n = 0, i = t.length; n < i; ) {
    var r = t.charCodeAt(n++);
    if (r >= 55296 && r <= 56319 && n < i) {
      var s = t.charCodeAt(n++);
      (s & 64512) == 56320 ? e.push(((r & 1023) << 10) + (s & 1023) + 65536) : (e.push(r), n--);
    } else
      e.push(r);
  }
  return e;
}
function pa(t) {
  var e = e2(t);
  return e.length === 1 ? e[0].toString(16) : null;
}
function n2(t, e) {
  var n = t.length, i = t.charCodeAt(e), r;
  return i >= 55296 && i <= 56319 && n > e + 1 && (r = t.charCodeAt(e + 1), r >= 56320 && r <= 57343) ? (i - 55296) * 1024 + r - 56320 + 65536 : i;
}
function Uu(t) {
  return Object.keys(t).reduce(function(e, n) {
    var i = t[n], r = !!i.icon;
    return r ? e[i.iconName] = i.icon : e[n] = i, e;
  }, {});
}
function ma(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = n.skipHooks, r = i === void 0 ? !1 : i, s = Uu(e);
  typeof Ee.hooks.addPack == "function" && !r ? Ee.hooks.addPack(t, Uu(e)) : Ee.styles[t] = U(U({}, Ee.styles[t] || {}), s), t === "fas" && ma("fa", e);
}
var Ur, Wr, Hr, ri = Ee.styles, i2 = Ee.shims, r2 = (Ur = {}, Dt(Ur, xt, Object.values(ir[xt])), Dt(Ur, Nt, Object.values(ir[Nt])), Ur), Tl = null, Hd = {}, Vd = {}, Gd = {}, jd = {}, Yd = {}, s2 = (Wr = {}, Dt(Wr, xt, Object.keys(er[xt])), Dt(Wr, Nt, Object.keys(er[Nt])), Wr);
function o2(t) {
  return ~BS.indexOf(t);
}
function a2(t, e) {
  var n = e.split("-"), i = n[0], r = n.slice(1).join("-");
  return i === t && r !== "" && !o2(r) ? r : null;
}
var Kd = function() {
  var e = function(s) {
    return To(ri, function(o, a, l) {
      return o[l] = To(a, s, {}), o;
    }, {});
  };
  Hd = e(function(r, s, o) {
    if (s[3] && (r[s[3]] = o), s[2]) {
      var a = s[2].filter(function(l) {
        return typeof l == "number";
      });
      a.forEach(function(l) {
        r[l.toString(16)] = o;
      });
    }
    return r;
  }), Vd = e(function(r, s, o) {
    if (r[o] = o, s[2]) {
      var a = s[2].filter(function(l) {
        return typeof l == "string";
      });
      a.forEach(function(l) {
        r[l] = o;
      });
    }
    return r;
  }), Yd = e(function(r, s, o) {
    var a = s[2];
    return r[o] = o, a.forEach(function(l) {
      r[l] = o;
    }), r;
  });
  var n = "far" in ri || K.autoFetchSvg, i = To(i2, function(r, s) {
    var o = s[0], a = s[1], l = s[2];
    return a === "far" && !n && (a = "fas"), typeof o == "string" && (r.names[o] = {
      prefix: a,
      iconName: l
    }), typeof o == "number" && (r.unicodes[o.toString(16)] = {
      prefix: a,
      iconName: l
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  Gd = i.names, jd = i.unicodes, Tl = ro(K.styleDefault, {
    family: K.familyDefault
  });
};
HS(function(t) {
  Tl = ro(t.styleDefault, {
    family: K.familyDefault
  });
});
Kd();
function Al(t, e) {
  return (Hd[t] || {})[e];
}
function l2(t, e) {
  return (Vd[t] || {})[e];
}
function Fn(t, e) {
  return (Yd[t] || {})[e];
}
function Xd(t) {
  return Gd[t] || {
    prefix: null,
    iconName: null
  };
}
function c2(t) {
  var e = jd[t], n = Al("fas", t);
  return e || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function xn() {
  return Tl;
}
var Cl = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function ro(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = e.family, i = n === void 0 ? xt : n, r = er[i][t], s = nr[i][t] || nr[i][r], o = t in Ee.styles ? t : null;
  return s || o || null;
}
var Wu = (Hr = {}, Dt(Hr, xt, Object.keys(ir[xt])), Dt(Hr, Nt, Object.keys(ir[Nt])), Hr);
function so(t) {
  var e, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.skipLookups, r = i === void 0 ? !1 : i, s = (e = {}, Dt(e, xt, "".concat(K.cssPrefix, "-").concat(xt)), Dt(e, Nt, "".concat(K.cssPrefix, "-").concat(Nt)), e), o = null, a = xt;
  (t.includes(s[xt]) || t.some(function(c) {
    return Wu[xt].includes(c);
  })) && (a = xt), (t.includes(s[Nt]) || t.some(function(c) {
    return Wu[Nt].includes(c);
  })) && (a = Nt);
  var l = t.reduce(function(c, u) {
    var f = a2(K.cssPrefix, u);
    if (ri[u] ? (u = r2[a].includes(u) ? MS[a][u] : u, o = u, c.prefix = u) : s2[a].indexOf(u) > -1 ? (o = u, c.prefix = ro(u, {
      family: a
    })) : f ? c.iconName = f : u !== K.replacementClass && u !== s[xt] && u !== s[Nt] && c.rest.push(u), !r && c.prefix && c.iconName) {
      var h = o === "fa" ? Xd(c.iconName) : {}, d = Fn(c.prefix, c.iconName);
      h.prefix && (o = null), c.iconName = h.iconName || d || c.iconName, c.prefix = h.prefix || c.prefix, c.prefix === "far" && !ri.far && ri.fas && !K.autoFetchSvg && (c.prefix = "fas");
    }
    return c;
  }, Cl());
  return (t.includes("fa-brands") || t.includes("fab")) && (l.prefix = "fab"), (t.includes("fa-duotone") || t.includes("fad")) && (l.prefix = "fad"), !l.prefix && a === Nt && (ri.fass || K.autoFetchSvg) && (l.prefix = "fass", l.iconName = Fn(l.prefix, l.iconName) || l.iconName), (l.prefix === "fa" || o === "fa") && (l.prefix = xn() || "fas"), l;
}
var u2 = /* @__PURE__ */ function() {
  function t() {
    xS(this, t), this.definitions = {};
  }
  return kS(t, [{
    key: "add",
    value: function() {
      for (var n = this, i = arguments.length, r = new Array(i), s = 0; s < i; s++)
        r[s] = arguments[s];
      var o = r.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(a) {
        n.definitions[a] = U(U({}, n.definitions[a] || {}), o[a]), ma(a, o[a]);
        var l = ir[xt][a];
        l && ma(l, o[a]), Kd();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(n, i) {
      var r = i.prefix && i.iconName && i.icon ? {
        0: i
      } : i;
      return Object.keys(r).map(function(s) {
        var o = r[s], a = o.prefix, l = o.iconName, c = o.icon, u = c[2];
        n[a] || (n[a] = {}), u.length > 0 && u.forEach(function(f) {
          typeof f == "string" && (n[a][f] = c);
        }), n[a][l] = c;
      }), n;
    }
  }]), t;
}(), Hu = [], si = {}, hi = {}, f2 = Object.keys(hi);
function h2(t, e) {
  var n = e.mixoutsTo;
  return Hu = t, si = {}, Object.keys(hi).forEach(function(i) {
    f2.indexOf(i) === -1 && delete hi[i];
  }), Hu.forEach(function(i) {
    var r = i.mixout ? i.mixout() : {};
    if (Object.keys(r).forEach(function(o) {
      typeof r[o] == "function" && (n[o] = r[o]), Os(r[o]) === "object" && Object.keys(r[o]).forEach(function(a) {
        n[o] || (n[o] = {}), n[o][a] = r[o][a];
      });
    }), i.hooks) {
      var s = i.hooks();
      Object.keys(s).forEach(function(o) {
        si[o] || (si[o] = []), si[o].push(s[o]);
      });
    }
    i.provides && i.provides(hi);
  }), n;
}
function ga(t, e) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++)
    i[r - 2] = arguments[r];
  var s = si[t] || [];
  return s.forEach(function(o) {
    e = o.apply(null, [e].concat(i));
  }), e;
}
function jn(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    n[i - 1] = arguments[i];
  var r = si[t] || [];
  r.forEach(function(s) {
    s.apply(null, n);
  });
}
function Je() {
  var t = arguments[0], e = Array.prototype.slice.call(arguments, 1);
  return hi[t] ? hi[t].apply(null, e) : void 0;
}
function ya(t) {
  t.prefix === "fa" && (t.prefix = "fas");
  var e = t.iconName, n = t.prefix || xn();
  if (e)
    return e = Fn(n, e) || e, qu(Jd.definitions, n, e) || qu(Ee.styles, n, e);
}
var Jd = new u2(), d2 = function() {
  K.autoReplaceSvg = !1, K.observeMutations = !1, jn("noAuto");
}, p2 = {
  i2svg: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Ze ? (jn("beforeI2svg", e), Je("pseudoElements2svg", e), Je("i2svg", e)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.autoReplaceSvgRoot;
    K.autoReplaceSvg === !1 && (K.autoReplaceSvg = !0), K.observeMutations = !0, ZS(function() {
      g2({
        autoReplaceSvgRoot: n
      }), jn("watch", e);
    });
  }
}, m2 = {
  icon: function(e) {
    if (e === null)
      return null;
    if (Os(e) === "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: Fn(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      var n = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], i = ro(e[0]);
      return {
        prefix: i,
        iconName: Fn(i, n) || n
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(K.cssPrefix, "-")) > -1 || e.match(RS))) {
      var r = so(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: r.prefix || xn(),
        iconName: Fn(r.prefix, r.iconName) || r.iconName
      };
    }
    if (typeof e == "string") {
      var s = xn();
      return {
        prefix: s,
        iconName: Fn(s, e) || e
      };
    }
  }
}, he = {
  noAuto: d2,
  config: K,
  dom: p2,
  parse: m2,
  library: Jd,
  findIconDefinition: ya,
  toHtml: gr
}, g2 = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.autoReplaceSvgRoot, i = n === void 0 ? kt : n;
  (Object.keys(Ee.styles).length > 0 || K.autoFetchSvg) && Ze && K.autoReplaceSvg && he.dom.i2svg({
    node: i
  });
};
function oo(t, e) {
  return Object.defineProperty(t, "abstract", {
    get: e
  }), Object.defineProperty(t, "html", {
    get: function() {
      return t.abstract.map(function(i) {
        return gr(i);
      });
    }
  }), Object.defineProperty(t, "node", {
    get: function() {
      if (Ze) {
        var i = kt.createElement("div");
        return i.innerHTML = t.html, i.children;
      }
    }
  }), t;
}
function y2(t) {
  var e = t.children, n = t.main, i = t.mask, r = t.attributes, s = t.styles, o = t.transform;
  if (El(o) && n.found && !i.found) {
    var a = n.width, l = n.height, c = {
      x: a / l / 2,
      y: 0.5
    };
    r.style = io(U(U({}, s), {}, {
      "transform-origin": "".concat(c.x + o.x / 16, "em ").concat(c.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: r,
    children: e
  }];
}
function b2(t) {
  var e = t.prefix, n = t.iconName, i = t.children, r = t.attributes, s = t.symbol, o = s === !0 ? "".concat(e, "-").concat(K.cssPrefix, "-").concat(n) : s;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: U(U({}, r), {}, {
        id: o
      }),
      children: i
    }]
  }];
}
function Pl(t) {
  var e = t.icons, n = e.main, i = e.mask, r = t.prefix, s = t.iconName, o = t.transform, a = t.symbol, l = t.title, c = t.maskId, u = t.titleId, f = t.extra, h = t.watchable, d = h === void 0 ? !1 : h, m = i.found ? i : n, v = m.width, _ = m.height, g = r === "fak", b = [K.replacementClass, s ? "".concat(K.cssPrefix, "-").concat(s) : ""].filter(function(j) {
    return f.classes.indexOf(j) === -1;
  }).filter(function(j) {
    return j !== "" || !!j;
  }).concat(f.classes).join(" "), x = {
    children: [],
    attributes: U(U({}, f.attributes), {}, {
      "data-prefix": r,
      "data-icon": s,
      class: b,
      role: f.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(v, " ").concat(_)
    })
  }, S = g && !~f.classes.indexOf("fa-fw") ? {
    width: "".concat(v / _ * 16 * 0.0625, "em")
  } : {};
  d && (x.attributes[Gn] = ""), l && (x.children.push({
    tag: "title",
    attributes: {
      id: x.attributes["aria-labelledby"] || "title-".concat(u || sr())
    },
    children: [l]
  }), delete x.attributes.title);
  var C = U(U({}, x), {}, {
    prefix: r,
    iconName: s,
    main: n,
    mask: i,
    maskId: c,
    transform: o,
    symbol: a,
    styles: U(U({}, S), f.styles)
  }), I = i.found && n.found ? Je("generateAbstractMask", C) || {
    children: [],
    attributes: {}
  } : Je("generateAbstractIcon", C) || {
    children: [],
    attributes: {}
  }, G = I.children, L = I.attributes;
  return C.children = G, C.attributes = L, a ? b2(C) : y2(C);
}
function Vu(t) {
  var e = t.content, n = t.width, i = t.height, r = t.transform, s = t.title, o = t.extra, a = t.watchable, l = a === void 0 ? !1 : a, c = U(U(U({}, o.attributes), s ? {
    title: s
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  l && (c[Gn] = "");
  var u = U({}, o.styles);
  El(r) && (u.transform = KS({
    transform: r,
    startCentered: !0,
    width: n,
    height: i
  }), u["-webkit-transform"] = u.transform);
  var f = io(u);
  f.length > 0 && (c.style = f);
  var h = [];
  return h.push({
    tag: "span",
    attributes: c,
    children: [e]
  }), s && h.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [s]
  }), h;
}
function v2(t) {
  var e = t.content, n = t.title, i = t.extra, r = U(U(U({}, i.attributes), n ? {
    title: n
  } : {}), {}, {
    class: i.classes.join(" ")
  }), s = io(i.styles);
  s.length > 0 && (r.style = s);
  var o = [];
  return o.push({
    tag: "span",
    attributes: r,
    children: [e]
  }), n && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), o;
}
var Ao = Ee.styles;
function ba(t) {
  var e = t[0], n = t[1], i = t.slice(4), r = vl(i, 1), s = r[0], o = null;
  return Array.isArray(s) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(K.cssPrefix, "-").concat(Dn.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(K.cssPrefix, "-").concat(Dn.SECONDARY),
        fill: "currentColor",
        d: s[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(K.cssPrefix, "-").concat(Dn.PRIMARY),
        fill: "currentColor",
        d: s[1]
      }
    }]
  } : o = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: s
    }
  }, {
    found: !0,
    width: e,
    height: n,
    icon: o
  };
}
var _2 = {
  found: !1,
  width: 512,
  height: 512
};
function w2(t, e) {
  !Fd && !K.showMissingIcons && t && console.error('Icon with name "'.concat(t, '" and prefix "').concat(e, '" is missing.'));
}
function va(t, e) {
  var n = e;
  return e === "fa" && K.styleDefault !== null && (e = xn()), new Promise(function(i, r) {
    if (Je("missingIconAbstract"), n === "fa") {
      var s = Xd(t) || {};
      t = s.iconName || t, e = s.prefix || e;
    }
    if (t && e && Ao[e] && Ao[e][t]) {
      var o = Ao[e][t];
      return i(ba(o));
    }
    w2(t, e), i(U(U({}, _2), {}, {
      icon: K.showMissingIcons && t ? Je("missingIconAbstract") || {} : {}
    }));
  });
}
var Gu = function() {
}, _a = K.measurePerformance && Dr && Dr.mark && Dr.measure ? Dr : {
  mark: Gu,
  measure: Gu
}, zi = 'FA "6.5.1"', x2 = function(e) {
  return _a.mark("".concat(zi, " ").concat(e, " begins")), function() {
    return Qd(e);
  };
}, Qd = function(e) {
  _a.mark("".concat(zi, " ").concat(e, " ends")), _a.measure("".concat(zi, " ").concat(e), "".concat(zi, " ").concat(e, " begins"), "".concat(zi, " ").concat(e, " ends"));
}, Ol = {
  begin: x2,
  end: Qd
}, ss = function() {
};
function ju(t) {
  var e = t.getAttribute ? t.getAttribute(Gn) : null;
  return typeof e == "string";
}
function k2(t) {
  var e = t.getAttribute ? t.getAttribute(wl) : null, n = t.getAttribute ? t.getAttribute(xl) : null;
  return e && n;
}
function S2(t) {
  return t && t.classList && t.classList.contains && t.classList.contains(K.replacementClass);
}
function E2() {
  if (K.autoReplaceSvg === !0)
    return os.replace;
  var t = os[K.autoReplaceSvg];
  return t || os.replace;
}
function T2(t) {
  return kt.createElementNS("http://www.w3.org/2000/svg", t);
}
function A2(t) {
  return kt.createElement(t);
}
function Zd(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = e.ceFn, i = n === void 0 ? t.tag === "svg" ? T2 : A2 : n;
  if (typeof t == "string")
    return kt.createTextNode(t);
  var r = i(t.tag);
  Object.keys(t.attributes || []).forEach(function(o) {
    r.setAttribute(o, t.attributes[o]);
  });
  var s = t.children || [];
  return s.forEach(function(o) {
    r.appendChild(Zd(o, {
      ceFn: i
    }));
  }), r;
}
function C2(t) {
  var e = " ".concat(t.outerHTML, " ");
  return e = "".concat(e, "Font Awesome fontawesome.com "), e;
}
var os = {
  replace: function(e) {
    var n = e[0];
    if (n.parentNode)
      if (e[1].forEach(function(r) {
        n.parentNode.insertBefore(Zd(r), n);
      }), n.getAttribute(Gn) === null && K.keepOriginalSource) {
        var i = kt.createComment(C2(n));
        n.parentNode.replaceChild(i, n);
      } else
        n.remove();
  },
  nest: function(e) {
    var n = e[0], i = e[1];
    if (~Sl(n).indexOf(K.replacementClass))
      return os.replace(e);
    var r = new RegExp("".concat(K.cssPrefix, "-.*"));
    if (delete i[0].attributes.id, i[0].attributes.class) {
      var s = i[0].attributes.class.split(" ").reduce(function(a, l) {
        return l === K.replacementClass || l.match(r) ? a.toSvg.push(l) : a.toNode.push(l), a;
      }, {
        toNode: [],
        toSvg: []
      });
      i[0].attributes.class = s.toSvg.join(" "), s.toNode.length === 0 ? n.removeAttribute("class") : n.setAttribute("class", s.toNode.join(" "));
    }
    var o = i.map(function(a) {
      return gr(a);
    }).join(`
`);
    n.setAttribute(Gn, ""), n.innerHTML = o;
  }
};
function Yu(t) {
  t();
}
function tp(t, e) {
  var n = typeof e == "function" ? e : ss;
  if (t.length === 0)
    n();
  else {
    var i = Yu;
    K.mutateApproach === IS && (i = wn.requestAnimationFrame || Yu), i(function() {
      var r = E2(), s = Ol.begin("mutate");
      t.map(r), s(), n();
    });
  }
}
var Nl = !1;
function ep() {
  Nl = !0;
}
function wa() {
  Nl = !1;
}
var Is = null;
function Ku(t) {
  if (zu && K.observeMutations) {
    var e = t.treeCallback, n = e === void 0 ? ss : e, i = t.nodeCallback, r = i === void 0 ? ss : i, s = t.pseudoElementsCallback, o = s === void 0 ? ss : s, a = t.observeMutationsRoot, l = a === void 0 ? kt : a;
    Is = new zu(function(c) {
      if (!Nl) {
        var u = xn();
        Ai(c).forEach(function(f) {
          if (f.type === "childList" && f.addedNodes.length > 0 && !ju(f.addedNodes[0]) && (K.searchPseudoElements && o(f.target), n(f.target)), f.type === "attributes" && f.target.parentNode && K.searchPseudoElements && o(f.target.parentNode), f.type === "attributes" && ju(f.target) && ~$S.indexOf(f.attributeName))
            if (f.attributeName === "class" && k2(f.target)) {
              var h = so(Sl(f.target)), d = h.prefix, m = h.iconName;
              f.target.setAttribute(wl, d || u), m && f.target.setAttribute(xl, m);
            } else
              S2(f.target) && r(f.target);
        });
      }
    }), Ze && Is.observe(l, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function P2() {
  Is && Is.disconnect();
}
function O2(t) {
  var e = t.getAttribute("style"), n = [];
  return e && (n = e.split(";").reduce(function(i, r) {
    var s = r.split(":"), o = s[0], a = s.slice(1);
    return o && a.length > 0 && (i[o] = a.join(":").trim()), i;
  }, {})), n;
}
function N2(t) {
  var e = t.getAttribute("data-prefix"), n = t.getAttribute("data-icon"), i = t.innerText !== void 0 ? t.innerText.trim() : "", r = so(Sl(t));
  return r.prefix || (r.prefix = xn()), e && n && (r.prefix = e, r.iconName = n), r.iconName && r.prefix || (r.prefix && i.length > 0 && (r.iconName = l2(r.prefix, t.innerText) || Al(r.prefix, pa(t.innerText))), !r.iconName && K.autoFetchSvg && t.firstChild && t.firstChild.nodeType === Node.TEXT_NODE && (r.iconName = t.firstChild.data)), r;
}
function I2(t) {
  var e = Ai(t.attributes).reduce(function(r, s) {
    return r.name !== "class" && r.name !== "style" && (r[s.name] = s.value), r;
  }, {}), n = t.getAttribute("title"), i = t.getAttribute("data-fa-title-id");
  return K.autoA11y && (n ? e["aria-labelledby"] = "".concat(K.replacementClass, "-title-").concat(i || sr()) : (e["aria-hidden"] = "true", e.focusable = "false")), e;
}
function L2() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Fe,
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
function Xu(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, n = N2(t), i = n.iconName, r = n.prefix, s = n.rest, o = I2(t), a = ga("parseNodeAttributes", {}, t), l = e.styleParser ? O2(t) : [];
  return U({
    iconName: i,
    title: t.getAttribute("title"),
    titleId: t.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: Fe,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: s,
      styles: l,
      attributes: o
    }
  }, a);
}
var M2 = Ee.styles;
function np(t) {
  var e = K.autoReplaceSvg === "nest" ? Xu(t, {
    styleParser: !1
  }) : Xu(t);
  return ~e.extra.classes.indexOf(zd) ? Je("generateLayersText", t, e) : Je("generateSvgReplacementMutation", t, e);
}
var kn = /* @__PURE__ */ new Set();
kl.map(function(t) {
  kn.add("fa-".concat(t));
});
Object.keys(er[xt]).map(kn.add.bind(kn));
Object.keys(er[Nt]).map(kn.add.bind(kn));
kn = pr(kn);
function Ju(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Ze)
    return Promise.resolve();
  var n = kt.documentElement.classList, i = function(f) {
    return n.add("".concat($u, "-").concat(f));
  }, r = function(f) {
    return n.remove("".concat($u, "-").concat(f));
  }, s = K.autoFetchSvg ? kn : kl.map(function(u) {
    return "fa-".concat(u);
  }).concat(Object.keys(M2));
  s.includes("fa") || s.push("fa");
  var o = [".".concat(zd, ":not([").concat(Gn, "])")].concat(s.map(function(u) {
    return ".".concat(u, ":not([").concat(Gn, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var a = [];
  try {
    a = Ai(t.querySelectorAll(o));
  } catch {
  }
  if (a.length > 0)
    i("pending"), r("complete");
  else
    return Promise.resolve();
  var l = Ol.begin("onTree"), c = a.reduce(function(u, f) {
    try {
      var h = np(f);
      h && u.push(h);
    } catch (d) {
      Fd || d.name === "MissingIcon" && console.error(d);
    }
    return u;
  }, []);
  return new Promise(function(u, f) {
    Promise.all(c).then(function(h) {
      tp(h, function() {
        i("active"), i("complete"), r("pending"), typeof e == "function" && e(), l(), u();
      });
    }).catch(function(h) {
      l(), f(h);
    });
  });
}
function R2(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  np(t).then(function(n) {
    n && tp([n], e);
  });
}
function D2(t) {
  return function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = (e || {}).icon ? e : ya(e || {}), r = n.mask;
    return r && (r = (r || {}).icon ? r : ya(r || {})), t(i, U(U({}, n), {}, {
      mask: r
    }));
  };
}
var F2 = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.transform, r = i === void 0 ? Fe : i, s = n.symbol, o = s === void 0 ? !1 : s, a = n.mask, l = a === void 0 ? null : a, c = n.maskId, u = c === void 0 ? null : c, f = n.title, h = f === void 0 ? null : f, d = n.titleId, m = d === void 0 ? null : d, v = n.classes, _ = v === void 0 ? [] : v, g = n.attributes, b = g === void 0 ? {} : g, x = n.styles, S = x === void 0 ? {} : x;
  if (e) {
    var C = e.prefix, I = e.iconName, G = e.icon;
    return oo(U({
      type: "icon"
    }, e), function() {
      return jn("beforeDOMElementCreation", {
        iconDefinition: e,
        params: n
      }), K.autoA11y && (h ? b["aria-labelledby"] = "".concat(K.replacementClass, "-title-").concat(m || sr()) : (b["aria-hidden"] = "true", b.focusable = "false")), Pl({
        icons: {
          main: ba(G),
          mask: l ? ba(l.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: C,
        iconName: I,
        transform: U(U({}, Fe), r),
        symbol: o,
        title: h,
        maskId: u,
        titleId: m,
        extra: {
          attributes: b,
          styles: S,
          classes: _
        }
      });
    });
  }
}, z2 = {
  mixout: function() {
    return {
      icon: D2(F2)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.treeCallback = Ju, n.nodeCallback = R2, n;
      }
    };
  },
  provides: function(e) {
    e.i2svg = function(n) {
      var i = n.node, r = i === void 0 ? kt : i, s = n.callback, o = s === void 0 ? function() {
      } : s;
      return Ju(r, o);
    }, e.generateSvgReplacementMutation = function(n, i) {
      var r = i.iconName, s = i.title, o = i.titleId, a = i.prefix, l = i.transform, c = i.symbol, u = i.mask, f = i.maskId, h = i.extra;
      return new Promise(function(d, m) {
        Promise.all([va(r, a), u.iconName ? va(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(v) {
          var _ = vl(v, 2), g = _[0], b = _[1];
          d([n, Pl({
            icons: {
              main: g,
              mask: b
            },
            prefix: a,
            iconName: r,
            transform: l,
            symbol: c,
            maskId: f,
            title: s,
            titleId: o,
            extra: h,
            watchable: !0
          })]);
        }).catch(m);
      });
    }, e.generateAbstractIcon = function(n) {
      var i = n.children, r = n.attributes, s = n.main, o = n.transform, a = n.styles, l = io(a);
      l.length > 0 && (r.style = l);
      var c;
      return El(o) && (c = Je("generateAbstractTransformGrouping", {
        main: s,
        transform: o,
        containerWidth: s.width,
        iconWidth: s.width
      })), i.push(c || s.icon), {
        children: i,
        attributes: r
      };
    };
  }
}, $2 = {
  mixout: function() {
    return {
      layer: function(n) {
        var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = i.classes, s = r === void 0 ? [] : r;
        return oo({
          type: "layer"
        }, function() {
          jn("beforeDOMElementCreation", {
            assembler: n,
            params: i
          });
          var o = [];
          return n(function(a) {
            Array.isArray(a) ? a.map(function(l) {
              o = o.concat(l.abstract);
            }) : o = o.concat(a.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(K.cssPrefix, "-layers")].concat(pr(s)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, B2 = {
  mixout: function() {
    return {
      counter: function(n) {
        var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = i.title, s = r === void 0 ? null : r, o = i.classes, a = o === void 0 ? [] : o, l = i.attributes, c = l === void 0 ? {} : l, u = i.styles, f = u === void 0 ? {} : u;
        return oo({
          type: "counter",
          content: n
        }, function() {
          return jn("beforeDOMElementCreation", {
            content: n,
            params: i
          }), v2({
            content: n.toString(),
            title: s,
            extra: {
              attributes: c,
              styles: f,
              classes: ["".concat(K.cssPrefix, "-layers-counter")].concat(pr(a))
            }
          });
        });
      }
    };
  }
}, q2 = {
  mixout: function() {
    return {
      text: function(n) {
        var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = i.transform, s = r === void 0 ? Fe : r, o = i.title, a = o === void 0 ? null : o, l = i.classes, c = l === void 0 ? [] : l, u = i.attributes, f = u === void 0 ? {} : u, h = i.styles, d = h === void 0 ? {} : h;
        return oo({
          type: "text",
          content: n
        }, function() {
          return jn("beforeDOMElementCreation", {
            content: n,
            params: i
          }), Vu({
            content: n,
            transform: U(U({}, Fe), s),
            title: a,
            extra: {
              attributes: f,
              styles: d,
              classes: ["".concat(K.cssPrefix, "-layers-text")].concat(pr(c))
            }
          });
        });
      }
    };
  },
  provides: function(e) {
    e.generateLayersText = function(n, i) {
      var r = i.title, s = i.transform, o = i.extra, a = null, l = null;
      if (Md) {
        var c = parseInt(getComputedStyle(n).fontSize, 10), u = n.getBoundingClientRect();
        a = u.width / c, l = u.height / c;
      }
      return K.autoA11y && !r && (o.attributes["aria-hidden"] = "true"), Promise.resolve([n, Vu({
        content: n.innerHTML,
        width: a,
        height: l,
        transform: s,
        title: r,
        extra: o,
        watchable: !0
      })]);
    };
  }
}, U2 = new RegExp('"', "ug"), Qu = [1105920, 1112319];
function W2(t) {
  var e = t.replace(U2, ""), n = n2(e, 0), i = n >= Qu[0] && n <= Qu[1], r = e.length === 2 ? e[0] === e[1] : !1;
  return {
    value: pa(r ? e[0] : e),
    isSecondary: i || r
  };
}
function Zu(t, e) {
  var n = "".concat(NS).concat(e.replace(":", "-"));
  return new Promise(function(i, r) {
    if (t.getAttribute(n) !== null)
      return i();
    var s = Ai(t.children), o = s.filter(function(G) {
      return G.getAttribute(da) === e;
    })[0], a = wn.getComputedStyle(t, e), l = a.getPropertyValue("font-family").match(DS), c = a.getPropertyValue("font-weight"), u = a.getPropertyValue("content");
    if (o && !l)
      return t.removeChild(o), i();
    if (l && u !== "none" && u !== "") {
      var f = a.getPropertyValue("content"), h = ~["Sharp"].indexOf(l[2]) ? Nt : xt, d = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(l[2]) ? nr[h][l[2].toLowerCase()] : FS[h][c], m = W2(f), v = m.value, _ = m.isSecondary, g = l[0].startsWith("FontAwesome"), b = Al(d, v), x = b;
      if (g) {
        var S = c2(v);
        S.iconName && S.prefix && (b = S.iconName, d = S.prefix);
      }
      if (b && !_ && (!o || o.getAttribute(wl) !== d || o.getAttribute(xl) !== x)) {
        t.setAttribute(n, x), o && t.removeChild(o);
        var C = L2(), I = C.extra;
        I.attributes[da] = e, va(b, d).then(function(G) {
          var L = Pl(U(U({}, C), {}, {
            icons: {
              main: G,
              mask: Cl()
            },
            prefix: d,
            iconName: x,
            extra: I,
            watchable: !0
          })), j = kt.createElementNS("http://www.w3.org/2000/svg", "svg");
          e === "::before" ? t.insertBefore(j, t.firstChild) : t.appendChild(j), j.outerHTML = L.map(function(tt) {
            return gr(tt);
          }).join(`
`), t.removeAttribute(n), i();
        }).catch(r);
      } else
        i();
    } else
      i();
  });
}
function H2(t) {
  return Promise.all([Zu(t, "::before"), Zu(t, "::after")]);
}
function V2(t) {
  return t.parentNode !== document.head && !~LS.indexOf(t.tagName.toUpperCase()) && !t.getAttribute(da) && (!t.parentNode || t.parentNode.tagName !== "svg");
}
function tf(t) {
  if (Ze)
    return new Promise(function(e, n) {
      var i = Ai(t.querySelectorAll("*")).filter(V2).map(H2), r = Ol.begin("searchPseudoElements");
      ep(), Promise.all(i).then(function() {
        r(), wa(), e();
      }).catch(function() {
        r(), wa(), n();
      });
    });
}
var G2 = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.pseudoElementsCallback = tf, n;
      }
    };
  },
  provides: function(e) {
    e.pseudoElements2svg = function(n) {
      var i = n.node, r = i === void 0 ? kt : i;
      K.searchPseudoElements && tf(r);
    };
  }
}, ef = !1, j2 = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          ep(), ef = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        Ku(ga("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        P2();
      },
      watch: function(n) {
        var i = n.observeMutationsRoot;
        ef ? wa() : Ku(ga("mutationObserverCallbacks", {
          observeMutationsRoot: i
        }));
      }
    };
  }
}, nf = function(e) {
  var n = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce(function(i, r) {
    var s = r.toLowerCase().split("-"), o = s[0], a = s.slice(1).join("-");
    if (o && a === "h")
      return i.flipX = !0, i;
    if (o && a === "v")
      return i.flipY = !0, i;
    if (a = parseFloat(a), isNaN(a))
      return i;
    switch (o) {
      case "grow":
        i.size = i.size + a;
        break;
      case "shrink":
        i.size = i.size - a;
        break;
      case "left":
        i.x = i.x - a;
        break;
      case "right":
        i.x = i.x + a;
        break;
      case "up":
        i.y = i.y - a;
        break;
      case "down":
        i.y = i.y + a;
        break;
      case "rotate":
        i.rotate = i.rotate + a;
        break;
    }
    return i;
  }, n);
}, Y2 = {
  mixout: function() {
    return {
      parse: {
        transform: function(n) {
          return nf(n);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(n, i) {
        var r = i.getAttribute("data-fa-transform");
        return r && (n.transform = nf(r)), n;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractTransformGrouping = function(n) {
      var i = n.main, r = n.transform, s = n.containerWidth, o = n.iconWidth, a = {
        transform: "translate(".concat(s / 2, " 256)")
      }, l = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), c = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), u = "rotate(".concat(r.rotate, " 0 0)"), f = {
        transform: "".concat(l, " ").concat(c, " ").concat(u)
      }, h = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, d = {
        outer: a,
        inner: f,
        path: h
      };
      return {
        tag: "g",
        attributes: U({}, d.outer),
        children: [{
          tag: "g",
          attributes: U({}, d.inner),
          children: [{
            tag: i.icon.tag,
            children: i.icon.children,
            attributes: U(U({}, i.icon.attributes), d.path)
          }]
        }]
      };
    };
  }
}, Co = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function rf(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return t.attributes && (t.attributes.fill || e) && (t.attributes.fill = "black"), t;
}
function K2(t) {
  return t.tag === "g" ? t.children : [t];
}
var X2 = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, i) {
        var r = i.getAttribute("data-fa-mask"), s = r ? so(r.split(" ").map(function(o) {
          return o.trim();
        })) : Cl();
        return s.prefix || (s.prefix = xn()), n.mask = s, n.maskId = i.getAttribute("data-fa-mask-id"), n;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractMask = function(n) {
      var i = n.children, r = n.attributes, s = n.main, o = n.mask, a = n.maskId, l = n.transform, c = s.width, u = s.icon, f = o.width, h = o.icon, d = YS({
        transform: l,
        containerWidth: f,
        iconWidth: c
      }), m = {
        tag: "rect",
        attributes: U(U({}, Co), {}, {
          fill: "white"
        })
      }, v = u.children ? {
        children: u.children.map(rf)
      } : {}, _ = {
        tag: "g",
        attributes: U({}, d.inner),
        children: [rf(U({
          tag: u.tag,
          attributes: U(U({}, u.attributes), d.path)
        }, v))]
      }, g = {
        tag: "g",
        attributes: U({}, d.outer),
        children: [_]
      }, b = "mask-".concat(a || sr()), x = "clip-".concat(a || sr()), S = {
        tag: "mask",
        attributes: U(U({}, Co), {}, {
          id: b,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [m, g]
      }, C = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: x
          },
          children: K2(h)
        }, S]
      };
      return i.push(C, {
        tag: "rect",
        attributes: U({
          fill: "currentColor",
          "clip-path": "url(#".concat(x, ")"),
          mask: "url(#".concat(b, ")")
        }, Co)
      }), {
        children: i,
        attributes: r
      };
    };
  }
}, J2 = {
  provides: function(e) {
    var n = !1;
    wn.matchMedia && (n = wn.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      var i = [], r = {
        fill: "currentColor"
      }, s = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      i.push({
        tag: "path",
        attributes: U(U({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var o = U(U({}, s), {}, {
        attributeName: "opacity"
      }), a = {
        tag: "circle",
        attributes: U(U({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return n || a.children.push({
        tag: "animate",
        attributes: U(U({}, s), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: U(U({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), i.push(a), i.push({
        tag: "path",
        attributes: U(U({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: n ? [] : [{
          tag: "animate",
          attributes: U(U({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), n || i.push({
        tag: "path",
        attributes: U(U({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: U(U({}, o), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: i
      };
    };
  }
}, Q2 = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, i) {
        var r = i.getAttribute("data-fa-symbol"), s = r === null ? !1 : r === "" ? !0 : r;
        return n.symbol = s, n;
      }
    };
  }
}, Z2 = [JS, z2, $2, B2, q2, G2, j2, Y2, X2, J2, Q2];
h2(Z2, {
  mixoutsTo: he
});
he.noAuto;
he.config;
var tE = he.library;
he.dom;
var xa = he.parse;
he.findIconDefinition;
he.toHtml;
var eE = he.icon;
he.layer;
he.text;
he.counter;
function sf(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    e && (i = i.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function Ve(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? sf(Object(n), !0).forEach(function(i) {
      ie(t, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : sf(Object(n)).forEach(function(i) {
      Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return t;
}
function Ls(t) {
  "@babel/helpers - typeof";
  return Ls = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ls(t);
}
function ie(t, e, n) {
  return e = sE(e), e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function nE(t, e) {
  if (t == null)
    return {};
  var n = {}, i = Object.keys(t), r, s;
  for (s = 0; s < i.length; s++)
    r = i[s], !(e.indexOf(r) >= 0) && (n[r] = t[r]);
  return n;
}
function iE(t, e) {
  if (t == null)
    return {};
  var n = nE(t, e), i, r;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (r = 0; r < s.length; r++)
      i = s[r], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(t, i) && (n[i] = t[i]);
  }
  return n;
}
function rE(t, e) {
  if (typeof t != "object" || t === null)
    return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(t, e || "default");
    if (typeof i != "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function sE(t) {
  var e = rE(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
var oE = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ip = { exports: {} };
(function(t) {
  (function(e) {
    var n = function(g, b, x) {
      if (!c(b) || f(b) || h(b) || d(b) || l(b))
        return b;
      var S, C = 0, I = 0;
      if (u(b))
        for (S = [], I = b.length; C < I; C++)
          S.push(n(g, b[C], x));
      else {
        S = {};
        for (var G in b)
          Object.prototype.hasOwnProperty.call(b, G) && (S[g(G, x)] = n(g, b[G], x));
      }
      return S;
    }, i = function(g, b) {
      b = b || {};
      var x = b.separator || "_", S = b.split || /(?=[A-Z])/;
      return g.split(S).join(x);
    }, r = function(g) {
      return m(g) ? g : (g = g.replace(/[\-_\s]+(.)?/g, function(b, x) {
        return x ? x.toUpperCase() : "";
      }), g.substr(0, 1).toLowerCase() + g.substr(1));
    }, s = function(g) {
      var b = r(g);
      return b.substr(0, 1).toUpperCase() + b.substr(1);
    }, o = function(g, b) {
      return i(g, b).toLowerCase();
    }, a = Object.prototype.toString, l = function(g) {
      return typeof g == "function";
    }, c = function(g) {
      return g === Object(g);
    }, u = function(g) {
      return a.call(g) == "[object Array]";
    }, f = function(g) {
      return a.call(g) == "[object Date]";
    }, h = function(g) {
      return a.call(g) == "[object RegExp]";
    }, d = function(g) {
      return a.call(g) == "[object Boolean]";
    }, m = function(g) {
      return g = g - 0, g === g;
    }, v = function(g, b) {
      var x = b && "process" in b ? b.process : b;
      return typeof x != "function" ? g : function(S, C) {
        return x(S, g, C);
      };
    }, _ = {
      camelize: r,
      decamelize: o,
      pascalize: s,
      depascalize: o,
      camelizeKeys: function(g, b) {
        return n(v(r, b), g);
      },
      decamelizeKeys: function(g, b) {
        return n(v(o, b), g, b);
      },
      pascalizeKeys: function(g, b) {
        return n(v(s, b), g);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    t.exports ? t.exports = _ : e.humps = _;
  })(oE);
})(ip);
var aE = ip.exports, lE = ["class", "style"];
function cE(t) {
  return t.split(";").map(function(e) {
    return e.trim();
  }).filter(function(e) {
    return e;
  }).reduce(function(e, n) {
    var i = n.indexOf(":"), r = aE.camelize(n.slice(0, i)), s = n.slice(i + 1).trim();
    return e[r] = s, e;
  }, {});
}
function uE(t) {
  return t.split(/\s+/).reduce(function(e, n) {
    return e[n] = !0, e;
  }, {});
}
function rp(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var i = (t.children || []).map(function(l) {
    return rp(l);
  }), r = Object.keys(t.attributes || {}).reduce(function(l, c) {
    var u = t.attributes[c];
    switch (c) {
      case "class":
        l.class = uE(u);
        break;
      case "style":
        l.style = cE(u);
        break;
      default:
        l.attrs[c] = u;
    }
    return l;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  n.class;
  var s = n.style, o = s === void 0 ? {} : s, a = iE(n, lE);
  return Ga(t.tag, Ve(Ve(Ve({}, e), {}, {
    class: r.class,
    style: Ve(Ve({}, r.style), o)
  }, r.attrs), a), i);
}
var sp = !1;
try {
  sp = !0;
} catch {
}
function fE() {
  if (!sp && console && typeof console.error == "function") {
    var t;
    (t = console).error.apply(t, arguments);
  }
}
function Po(t, e) {
  return Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e ? ie({}, t, e) : {};
}
function hE(t) {
  var e, n = (e = {
    "fa-spin": t.spin,
    "fa-pulse": t.pulse,
    "fa-fw": t.fixedWidth,
    "fa-border": t.border,
    "fa-li": t.listItem,
    "fa-inverse": t.inverse,
    "fa-flip": t.flip === !0,
    "fa-flip-horizontal": t.flip === "horizontal" || t.flip === "both",
    "fa-flip-vertical": t.flip === "vertical" || t.flip === "both"
  }, ie(e, "fa-".concat(t.size), t.size !== null), ie(e, "fa-rotate-".concat(t.rotation), t.rotation !== null), ie(e, "fa-pull-".concat(t.pull), t.pull !== null), ie(e, "fa-swap-opacity", t.swapOpacity), ie(e, "fa-bounce", t.bounce), ie(e, "fa-shake", t.shake), ie(e, "fa-beat", t.beat), ie(e, "fa-fade", t.fade), ie(e, "fa-beat-fade", t.beatFade), ie(e, "fa-flash", t.flash), ie(e, "fa-spin-pulse", t.spinPulse), ie(e, "fa-spin-reverse", t.spinReverse), e);
  return Object.keys(n).map(function(i) {
    return n[i] ? i : null;
  }).filter(function(i) {
    return i;
  });
}
function of(t) {
  if (t && Ls(t) === "object" && t.prefix && t.iconName && t.icon)
    return t;
  if (xa.icon)
    return xa.icon(t);
  if (t === null)
    return null;
  if (Ls(t) === "object" && t.prefix && t.iconName)
    return t;
  if (Array.isArray(t) && t.length === 2)
    return {
      prefix: t[0],
      iconName: t[1]
    };
  if (typeof t == "string")
    return {
      prefix: "fas",
      iconName: t
    };
}
var dE = /* @__PURE__ */ ki({
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
      validator: function(e) {
        return [!0, !1, "horizontal", "vertical", "both"].indexOf(e) > -1;
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
      validator: function(e) {
        return ["right", "left"].indexOf(e) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: !1
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function(e) {
        return [90, 180, 270].indexOf(Number.parseInt(e, 10)) > -1;
      }
    },
    swapOpacity: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null,
      validator: function(e) {
        return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(e) > -1;
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
  setup: function(e, n) {
    var i = n.attrs, r = pe(function() {
      return of(e.icon);
    }), s = pe(function() {
      return Po("classes", hE(e));
    }), o = pe(function() {
      return Po("transform", typeof e.transform == "string" ? xa.transform(e.transform) : e.transform);
    }), a = pe(function() {
      return Po("mask", of(e.mask));
    }), l = pe(function() {
      return eE(r.value, Ve(Ve(Ve(Ve({}, s.value), o.value), a.value), {}, {
        symbol: e.symbol,
        title: e.title,
        titleId: e.titleId,
        maskId: e.maskId
      }));
    });
    Ye(l, function(u) {
      if (!u)
        return fE("Could not find one or more icon(s)", r.value, a.value);
    }, {
      immediate: !0
    });
    var c = pe(function() {
      return l.value ? rp(l.value.abstract[0], {}, i) : null;
    });
    return function() {
      return c.value;
    };
  }
}), pE = {
  prefix: "fasr",
  iconName: "arrows-left-right",
  icon: [512, 512, ["arrows-h"], "f07e", "M493.8 273l17-17-17-17-96-96-17-17L346.9 160l17 17 55 55L93.1 232l55-55 17-17-33.9-33.9-17 17-96 96-17 17 17 17 96 96 17 17L165.1 352l-17-17-55-55 325.7 0-55 55-17 17 33.9 33.9 17-17 96-96z"]
}, mE = {
  prefix: "fasr",
  iconName: "plus-large",
  icon: [512, 512, [], "e59e", "M488 232l24 0 0 48-24 0-208 0V488l0 24H232l0-24 0-208L24 280 0 280V232l24 0 208 0 0-208 0-24 48 0V24l0 208 208 0z"]
}, gE = {
  prefix: "fasr",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M136 32h24V80H136 48v88 24H0V168 56 32H24 136zM0 344V320H48v24 88h88 24v48H136 24 0V456 344zM424 32h24V56 168v24H400V168 80H312 288V32h24H424zM400 344V320h48v24V456v24H424 312 288V432h24 88V344z"]
}, yE = {
  prefix: "fasr",
  iconName: "arrows-up-down",
  icon: [320, 512, ["arrows-v"], "f07d", "M177 18.2l-17-17-17 17-96 96-17 17L64 165.1l17-17 55-55V418.9l-55-55-17-17L30.1 380.8l17 17 96 96 17 17 17-17 96-96 17-17L256 346.9l-17 17-55 55V93.1l55 55 17 17 33.9-33.9-17-17-96-96z"]
}, bE = {
  prefix: "fass",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z"]
}, vE = {
  prefix: "fass",
  iconName: "calculator",
  icon: [384, 512, [128425], "f1ec", "M384 0H0V512H384V0zM320 64v96H64V64H320zM64 192h64v64H64V192zm64 96v64H64V288h64zM64 384H224v64H64V384zM224 192v64H160V192h64zm-64 96h64v64H160V288zm160-96v64H256V192h64zm-64 96h64v64H256V288zm64 96v64H256V384h64z"]
}, _E = {
  prefix: "fass",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M326.6 166.6L349.3 144 304 98.7l-22.6 22.6L192 210.7l-89.4-89.4L80 98.7 34.7 144l22.6 22.6L146.7 256 57.4 345.4 34.7 368 80 413.3l22.6-22.6L192 301.3l89.4 89.4L304 413.3 349.3 368l-22.6-22.6L237.3 256l89.4-89.4z"]
}, wE = {
  prefix: "fass",
  iconName: "hammer",
  icon: [576, 512, [128296], "f6e3", "M225.6 18.2L176 48l96 48v48L384 256l24-24 24 24-24 24 48 48L576 208l-48-48-24 24-24-24 24-24L405.5 37.5C381.5 13.5 348.9 0 315 0H291.5c-23.2 0-46 6.3-65.9 18.2zM0 416l96 96L330.7 248 264 181.3 0 416z"]
};
tE.add(
  _E,
  gE,
  pE,
  yE,
  wE,
  bE,
  mE,
  vE
);
const xE = Uy({
  locale: "en_US",
  fallbackLocale: "en_US",
  messages: eb
}), af = document.querySelector("#smartcut-app"), kE = af ? af.getAttribute("data-type") : "", Il = Ag(wS, { type: kE });
Il.use(xE);
Il.component("font-awesome-icon", dE);
Il.mount("#smartcut-app");
export {
  ti as A,
  rh as B,
  pS as C,
  mc as D,
  Mt as F,
  Ti as _,
  W as a,
  PE as b,
  Ki as c,
  ot as d,
  OE as e,
  Ps as f,
  TE as g,
  AE as h,
  Mx as i,
  CE as j,
  nt as k,
  X as l,
  Da as m,
  pt as n,
  Q as o,
  yt as p,
  qn as q,
  Qn as r,
  Rx as s,
  gt as t,
  Nn as u,
  A as v,
  we as w,
  ds as x,
  Ht as y,
  xg as z
};

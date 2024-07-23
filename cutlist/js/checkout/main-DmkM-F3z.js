var Tb = Object.defineProperty;
var Ab = (e, t, n) => t in e ? Tb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var g = (e, t, n) => Ab(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.4.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function pc(e, t) {
  const n = new Set(e.split(","));
  return (i) => n.has(i);
}
const Me = {}, ji = [], Lt = () => {
}, Ob = () => !1, Lo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), gc = (e) => e.startsWith("onUpdate:"), it = Object.assign, mc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Pb = Object.prototype.hasOwnProperty, me = (e, t) => Pb.call(e, t), oe = Array.isArray, qi = (e) => Zs(e) === "[object Map]", Do = (e) => Zs(e) === "[object Set]", cf = (e) => Zs(e) === "[object Date]", ce = (e) => typeof e == "function", Ge = (e) => typeof e == "string", un = (e) => typeof e == "symbol", Oe = (e) => e !== null && typeof e == "object", up = (e) => (Oe(e) || ce(e)) && ce(e.then) && ce(e.catch), fp = Object.prototype.toString, Zs = (e) => fp.call(e), Nb = (e) => Zs(e).slice(8, -1), hp = (e) => Zs(e) === "[object Object]", yc = (e) => Ge(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ps = /* @__PURE__ */ pc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ro = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ib = /-(\w)/g, Wt = Ro((e) => e.replace(Ib, (t, n) => n ? n.toUpperCase() : "")), Mb = /\B([A-Z])/g, Ci = Ro(
  (e) => e.replace(Mb, "-$1").toLowerCase()
), Fo = Ro((e) => e.charAt(0).toUpperCase() + e.slice(1)), xa = Ro((e) => e ? `on${Fo(e)}` : ""), Vn = (e, t) => !Object.is(e, t), Rr = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, dp = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, pp = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let uf;
const gp = () => uf || (uf = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ve(e) {
  if (oe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], s = Ge(i) ? Fb(i) : Ve(i);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (Ge(e) || Oe(e))
    return e;
}
const Lb = /;(?![^(]*\))/g, Db = /:([^]+)/, Rb = /\/\*[^]*?\*\//g;
function Fb(e) {
  const t = {};
  return e.replace(Rb, "").split(Lb).forEach((n) => {
    if (n) {
      const i = n.split(Db);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function an(e) {
  let t = "";
  if (Ge(e))
    t = e;
  else if (oe(e))
    for (let n = 0; n < e.length; n++) {
      const i = an(e[n]);
      i && (t += i + " ");
    }
  else if (Oe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const $b = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Bb = /* @__PURE__ */ pc($b);
function mp(e) {
  return !!e || e === "";
}
function jb(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = $o(e[i], t[i]);
  return n;
}
function $o(e, t) {
  if (e === t) return !0;
  let n = cf(e), i = cf(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = un(e), i = un(t), n || i)
    return e === t;
  if (n = oe(e), i = oe(t), n || i)
    return n && i ? jb(e, t) : !1;
  if (n = Oe(e), i = Oe(t), n || i) {
    if (!n || !i)
      return !1;
    const s = Object.keys(e).length, r = Object.keys(t).length;
    if (s !== r)
      return !1;
    for (const o in e) {
      const a = e.hasOwnProperty(o), l = t.hasOwnProperty(o);
      if (a && !l || !a && l || !$o(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function qb(e, t) {
  return e.findIndex((n) => $o(n, t));
}
const yp = (e) => !!(e && e.__v_isRef === !0), We = (e) => Ge(e) ? e : e == null ? "" : oe(e) || Oe(e) && (e.toString === fp || !ce(e.toString)) ? yp(e) ? We(e.value) : JSON.stringify(e, bp, 2) : String(e), bp = (e, t) => yp(t) ? bp(e, t.value) : qi(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, s], r) => (n[Sa(i, r) + " =>"] = s, n),
    {}
  )
} : Do(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Sa(n))
} : un(t) ? Sa(t) : Oe(t) && !oe(t) && !hp(t) ? String(t) : t, Sa = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    un(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.4.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let kt;
class wp {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = kt, !t && kt && (this.index = (kt.scopes || (kt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = kt;
      try {
        return kt = this, t();
      } finally {
        kt = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    kt = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    kt = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, i;
      for (n = 0, i = this.effects.length; n < i; n++)
        this.effects[n].stop();
      for (n = 0, i = this.cleanups.length; n < i; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, i = this.scopes.length; n < i; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Ub(e) {
  return new wp(e);
}
function Wb(e, t = kt) {
  t && t.active && t.effects.push(e);
}
function vp() {
  return kt;
}
function Vb(e) {
  kt && kt.cleanups.push(e);
}
let fi;
class bc {
  constructor(t, n, i, s) {
    this.fn = t, this.trigger = n, this.scheduler = i, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Wb(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Xn();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (zb(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Jn();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = qn, n = fi;
    try {
      return qn = !0, fi = this, this._runnings++, ff(this), this.fn();
    } finally {
      hf(this), this._runnings--, fi = n, qn = t;
    }
  }
  stop() {
    this.active && (ff(this), hf(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function zb(e) {
  return e.value;
}
function ff(e) {
  e._trackId++, e._depsLength = 0;
}
function hf(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      _p(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function _p(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let qn = !0, Za = 0;
const xp = [];
function Xn() {
  xp.push(qn), qn = !1;
}
function Jn() {
  const e = xp.pop();
  qn = e === void 0 ? !0 : e;
}
function wc() {
  Za++;
}
function vc() {
  for (Za--; !Za && el.length; )
    el.shift()();
}
function Sp(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const i = e.deps[e._depsLength];
    i !== t ? (i && _p(i, e), e.deps[e._depsLength++] = t) : e._depsLength++;
  }
}
const el = [];
function kp(e, t, n) {
  wc();
  for (const i of e.keys()) {
    let s;
    i._dirtyLevel < t && (s ?? (s = e.get(i) === i._trackId)) && (i._shouldSchedule || (i._shouldSchedule = i._dirtyLevel === 0), i._dirtyLevel = t), i._shouldSchedule && (s ?? (s = e.get(i) === i._trackId)) && (i.trigger(), (!i._runnings || i.allowRecurse) && i._dirtyLevel !== 2 && (i._shouldSchedule = !1, i.scheduler && el.push(i.scheduler)));
  }
  vc();
}
const Ep = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, tl = /* @__PURE__ */ new WeakMap(), hi = Symbol(""), nl = Symbol("");
function gt(e, t, n) {
  if (qn && fi) {
    let i = tl.get(e);
    i || tl.set(e, i = /* @__PURE__ */ new Map());
    let s = i.get(n);
    s || i.set(n, s = Ep(() => i.delete(n))), Sp(
      fi,
      s
    );
  }
}
function Sn(e, t, n, i, s, r) {
  const o = tl.get(e);
  if (!o)
    return;
  let a = [];
  if (t === "clear")
    a = [...o.values()];
  else if (n === "length" && oe(e)) {
    const l = Number(i);
    o.forEach((u, c) => {
      (c === "length" || !un(c) && c >= l) && a.push(u);
    });
  } else
    switch (n !== void 0 && a.push(o.get(n)), t) {
      case "add":
        oe(e) ? yc(n) && a.push(o.get("length")) : (a.push(o.get(hi)), qi(e) && a.push(o.get(nl)));
        break;
      case "delete":
        oe(e) || (a.push(o.get(hi)), qi(e) && a.push(o.get(nl)));
        break;
      case "set":
        qi(e) && a.push(o.get(hi));
        break;
    }
  wc();
  for (const l of a)
    l && kp(
      l,
      4
    );
  vc();
}
const Gb = /* @__PURE__ */ pc("__proto__,__v_isRef,__isVue"), Cp = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(un)
), df = /* @__PURE__ */ Hb();
function Hb() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const i = _e(this);
      for (let r = 0, o = this.length; r < o; r++)
        gt(i, "get", r + "");
      const s = i[t](...n);
      return s === -1 || s === !1 ? i[t](...n.map(_e)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Xn(), wc();
      const i = _e(this)[t].apply(this, n);
      return vc(), Jn(), i;
    };
  }), e;
}
function Kb(e) {
  un(e) || (e = String(e));
  const t = _e(this);
  return gt(t, "has", e), t.hasOwnProperty(e);
}
class Tp {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, i) {
    const s = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return i === (s ? r ? a0 : Np : r ? Pp : Op).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const o = oe(t);
    if (!s) {
      if (o && me(df, n))
        return Reflect.get(df, n, i);
      if (n === "hasOwnProperty")
        return Kb;
    }
    const a = Reflect.get(t, n, i);
    return (un(n) ? Cp.has(n) : Gb(n)) || (s || gt(t, "get", n), r) ? a : at(a) ? o && yc(n) ? a : a.value : Oe(a) ? s ? kc(a) : Sc(a) : a;
  }
}
class Ap extends Tp {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, s) {
    let r = t[n];
    if (!this._isShallow) {
      const l = bi(r);
      if (!Ki(i) && !bi(i) && (r = _e(r), i = _e(i)), !oe(t) && at(r) && !at(i))
        return l ? !1 : (r.value = i, !0);
    }
    const o = oe(t) && yc(n) ? Number(n) < t.length : me(t, n), a = Reflect.set(t, n, i, s);
    return t === _e(s) && (o ? Vn(i, r) && Sn(t, "set", n, i) : Sn(t, "add", n, i)), a;
  }
  deleteProperty(t, n) {
    const i = me(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && i && Sn(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!un(n) || !Cp.has(n)) && gt(t, "has", n), i;
  }
  ownKeys(t) {
    return gt(
      t,
      "iterate",
      oe(t) ? "length" : hi
    ), Reflect.ownKeys(t);
  }
}
class Yb extends Tp {
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
const Xb = /* @__PURE__ */ new Ap(), Jb = /* @__PURE__ */ new Yb(), Qb = /* @__PURE__ */ new Ap(
  !0
);
const _c = (e) => e, Bo = (e) => Reflect.getPrototypeOf(e);
function pr(e, t, n = !1, i = !1) {
  e = e.__v_raw;
  const s = _e(e), r = _e(t);
  n || (Vn(t, r) && gt(s, "get", t), gt(s, "get", r));
  const { has: o } = Bo(s), a = i ? _c : n ? Cc : js;
  if (o.call(s, t))
    return a(e.get(t));
  if (o.call(s, r))
    return a(e.get(r));
  e !== s && e.get(t);
}
function gr(e, t = !1) {
  const n = this.__v_raw, i = _e(n), s = _e(e);
  return t || (Vn(e, s) && gt(i, "has", e), gt(i, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function mr(e, t = !1) {
  return e = e.__v_raw, !t && gt(_e(e), "iterate", hi), Reflect.get(e, "size", e);
}
function pf(e, t = !1) {
  !t && !Ki(e) && !bi(e) && (e = _e(e));
  const n = _e(this);
  return Bo(n).has.call(n, e) || (n.add(e), Sn(n, "add", e, e)), this;
}
function gf(e, t, n = !1) {
  !n && !Ki(t) && !bi(t) && (t = _e(t));
  const i = _e(this), { has: s, get: r } = Bo(i);
  let o = s.call(i, e);
  o || (e = _e(e), o = s.call(i, e));
  const a = r.call(i, e);
  return i.set(e, t), o ? Vn(t, a) && Sn(i, "set", e, t) : Sn(i, "add", e, t), this;
}
function mf(e) {
  const t = _e(this), { has: n, get: i } = Bo(t);
  let s = n.call(t, e);
  s || (e = _e(e), s = n.call(t, e)), i && i.call(t, e);
  const r = t.delete(e);
  return s && Sn(t, "delete", e, void 0), r;
}
function yf() {
  const e = _e(this), t = e.size !== 0, n = e.clear();
  return t && Sn(e, "clear", void 0, void 0), n;
}
function yr(e, t) {
  return function(i, s) {
    const r = this, o = r.__v_raw, a = _e(o), l = t ? _c : e ? Cc : js;
    return !e && gt(a, "iterate", hi), o.forEach((u, c) => i.call(s, l(u), l(c), r));
  };
}
function br(e, t, n) {
  return function(...i) {
    const s = this.__v_raw, r = _e(s), o = qi(r), a = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = s[e](...i), c = n ? _c : t ? Cc : js;
    return !t && gt(
      r,
      "iterate",
      l ? nl : hi
    ), {
      // iterator protocol
      next() {
        const { value: f, done: h } = u.next();
        return h ? { value: f, done: h } : {
          value: a ? [c(f[0]), c(f[1])] : c(f),
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
function Nn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Zb() {
  const e = {
    get(r) {
      return pr(this, r);
    },
    get size() {
      return mr(this);
    },
    has: gr,
    add: pf,
    set: gf,
    delete: mf,
    clear: yf,
    forEach: yr(!1, !1)
  }, t = {
    get(r) {
      return pr(this, r, !1, !0);
    },
    get size() {
      return mr(this);
    },
    has: gr,
    add(r) {
      return pf.call(this, r, !0);
    },
    set(r, o) {
      return gf.call(this, r, o, !0);
    },
    delete: mf,
    clear: yf,
    forEach: yr(!1, !0)
  }, n = {
    get(r) {
      return pr(this, r, !0);
    },
    get size() {
      return mr(this, !0);
    },
    has(r) {
      return gr.call(this, r, !0);
    },
    add: Nn("add"),
    set: Nn("set"),
    delete: Nn("delete"),
    clear: Nn("clear"),
    forEach: yr(!0, !1)
  }, i = {
    get(r) {
      return pr(this, r, !0, !0);
    },
    get size() {
      return mr(this, !0);
    },
    has(r) {
      return gr.call(this, r, !0);
    },
    add: Nn("add"),
    set: Nn("set"),
    delete: Nn("delete"),
    clear: Nn("clear"),
    forEach: yr(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    e[r] = br(r, !1, !1), n[r] = br(r, !0, !1), t[r] = br(r, !1, !0), i[r] = br(
      r,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    i
  ];
}
const [
  e0,
  t0,
  n0,
  i0
] = /* @__PURE__ */ Zb();
function xc(e, t) {
  const n = t ? e ? i0 : n0 : e ? t0 : e0;
  return (i, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? i : Reflect.get(
    me(n, s) && s in i ? n : i,
    s,
    r
  );
}
const s0 = {
  get: /* @__PURE__ */ xc(!1, !1)
}, r0 = {
  get: /* @__PURE__ */ xc(!1, !0)
}, o0 = {
  get: /* @__PURE__ */ xc(!0, !1)
};
const Op = /* @__PURE__ */ new WeakMap(), Pp = /* @__PURE__ */ new WeakMap(), Np = /* @__PURE__ */ new WeakMap(), a0 = /* @__PURE__ */ new WeakMap();
function l0(e) {
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
function c0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : l0(Nb(e));
}
function Sc(e) {
  return bi(e) ? e : Ec(
    e,
    !1,
    Xb,
    s0,
    Op
  );
}
function u0(e) {
  return Ec(
    e,
    !1,
    Qb,
    r0,
    Pp
  );
}
function kc(e) {
  return Ec(
    e,
    !0,
    Jb,
    o0,
    Np
  );
}
function Ec(e, t, n, i, s) {
  if (!Oe(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const o = c0(e);
  if (o === 0)
    return e;
  const a = new Proxy(
    e,
    o === 2 ? i : n
  );
  return s.set(e, a), a;
}
function Ns(e) {
  return bi(e) ? Ns(e.__v_raw) : !!(e && e.__v_isReactive);
}
function bi(e) {
  return !!(e && e.__v_isReadonly);
}
function Ki(e) {
  return !!(e && e.__v_isShallow);
}
function Ip(e) {
  return e ? !!e.__v_raw : !1;
}
function _e(e) {
  const t = e && e.__v_raw;
  return t ? _e(t) : e;
}
function jo(e) {
  return Object.isExtensible(e) && dp(e, "__v_skip", !0), e;
}
const js = (e) => Oe(e) ? Sc(e) : e, Cc = (e) => Oe(e) ? kc(e) : e;
class Mp {
  constructor(t, n, i, s) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new bc(
      () => t(this._value),
      () => Fr(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = i;
  }
  get value() {
    const t = _e(this);
    return (!t._cacheable || t.effect.dirty) && Vn(t._value, t._value = t.effect.run()) && Fr(t, 4), Lp(t), t.effect._dirtyLevel >= 2 && Fr(t, 2), t._value;
  }
  set value(t) {
    this._setter(t);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
  // #endregion
}
function f0(e, t, n = !1) {
  let i, s;
  const r = ce(e);
  return r ? (i = e, s = Lt) : (i = e.get, s = e.set), new Mp(i, s, r || !s, n);
}
function Lp(e) {
  var t;
  qn && fi && (e = _e(e), Sp(
    fi,
    (t = e.dep) != null ? t : e.dep = Ep(
      () => e.dep = void 0,
      e instanceof Mp ? e : void 0
    )
  ));
}
function Fr(e, t = 4, n, i) {
  e = _e(e);
  const s = e.dep;
  s && kp(
    s,
    t
  );
}
function at(e) {
  return !!(e && e.__v_isRef === !0);
}
function Ui(e) {
  return Dp(e, !1);
}
function Fn(e) {
  return Dp(e, !0);
}
function Dp(e, t) {
  return at(e) ? e : new h0(e, t);
}
class h0 {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : _e(t), this._value = n ? t : js(t);
  }
  get value() {
    return Lp(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Ki(t) || bi(t);
    t = n ? t : _e(t), Vn(t, this._rawValue) && (this._rawValue, this._rawValue = t, this._value = n ? t : js(t), Fr(this, 4));
  }
}
function Rp(e) {
  return at(e) ? e.value : e;
}
const d0 = {
  get: (e, t, n) => Rp(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const s = e[t];
    return at(s) && !at(n) ? (s.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function Fp(e) {
  return Ns(e) ? e : new Proxy(e, d0);
}
/**
* @vue/runtime-core v3.4.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Un(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (s) {
    er(s, t, n);
  }
}
function Ut(e, t, n, i) {
  if (ce(e)) {
    const s = Un(e, t, n, i);
    return s && up(s) && s.catch((r) => {
      er(r, t, n);
    }), s;
  }
  if (oe(e)) {
    const s = [];
    for (let r = 0; r < e.length; r++)
      s.push(Ut(e[r], t, n, i));
    return s;
  }
}
function er(e, t, n, i = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const o = t.proxy, a = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const u = r.ec;
      if (u) {
        for (let c = 0; c < u.length; c++)
          if (u[c](e, o, a) === !1)
            return;
      }
      r = r.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      Xn(), Un(
        l,
        null,
        10,
        [e, o, a]
      ), Jn();
      return;
    }
  }
  p0(e, n, s, i);
}
function p0(e, t, n, i = !0) {
  console.error(e);
}
let qs = !1, il = !1;
const tt = [];
let tn = 0;
const Wi = [];
let Dn = null, li = 0;
const $p = /* @__PURE__ */ Promise.resolve();
let Tc = null;
function qo(e) {
  const t = Tc || $p;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function g0(e) {
  let t = tn + 1, n = tt.length;
  for (; t < n; ) {
    const i = t + n >>> 1, s = tt[i], r = Us(s);
    r < e || r === e && s.pre ? t = i + 1 : n = i;
  }
  return t;
}
function Uo(e) {
  (!tt.length || !tt.includes(
    e,
    qs && e.allowRecurse ? tn + 1 : tn
  )) && (e.id == null ? tt.push(e) : tt.splice(g0(e.id), 0, e), Bp());
}
function Bp() {
  !qs && !il && (il = !0, Tc = $p.then(qp));
}
function m0(e) {
  const t = tt.indexOf(e);
  t > tn && tt.splice(t, 1);
}
function y0(e) {
  oe(e) ? Wi.push(...e) : (!Dn || !Dn.includes(
    e,
    e.allowRecurse ? li + 1 : li
  )) && Wi.push(e), Bp();
}
function bf(e, t, n = qs ? tn + 1 : 0) {
  for (; n < tt.length; n++) {
    const i = tt[n];
    if (i && i.pre) {
      if (e && i.id !== e.uid)
        continue;
      tt.splice(n, 1), n--, i();
    }
  }
}
function jp(e) {
  if (Wi.length) {
    const t = [...new Set(Wi)].sort(
      (n, i) => Us(n) - Us(i)
    );
    if (Wi.length = 0, Dn) {
      Dn.push(...t);
      return;
    }
    for (Dn = t, li = 0; li < Dn.length; li++) {
      const n = Dn[li];
      n.active !== !1 && n();
    }
    Dn = null, li = 0;
  }
}
const Us = (e) => e.id == null ? 1 / 0 : e.id, b0 = (e, t) => {
  const n = Us(e) - Us(t);
  if (n === 0) {
    if (e.pre && !t.pre) return -1;
    if (t.pre && !e.pre) return 1;
  }
  return n;
};
function qp(e) {
  il = !1, qs = !0, tt.sort(b0);
  try {
    for (tn = 0; tn < tt.length; tn++) {
      const t = tt[tn];
      t && t.active !== !1 && Un(
        t,
        t.i,
        t.i ? 15 : 14
      );
    }
  } finally {
    tn = 0, tt.length = 0, jp(), qs = !1, Tc = null, (tt.length || Wi.length) && qp();
  }
}
let dt = null, Wo = null;
function Zr(e) {
  const t = dt;
  return dt = e, Wo = e && e.type.__scopeId || null, t;
}
function w0(e) {
  Wo = e;
}
function v0() {
  Wo = null;
}
function _0(e, t = dt, n) {
  if (!t || e._n)
    return e;
  const i = (...s) => {
    i._d && Pf(-1);
    const r = Zr(t);
    let o;
    try {
      o = e(...s);
    } finally {
      Zr(r), i._d && Pf(1);
    }
    return o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function sl(e, t) {
  if (dt === null)
    return e;
  const n = Ko(dt), i = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [r, o, a, l = Me] = t[s];
    r && (ce(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && $n(o), i.push({
      dir: r,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: a,
      modifiers: l
    }));
  }
  return e;
}
function ni(e, t, n, i) {
  const s = e.dirs, r = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    r && (a.oldValue = r[o].value);
    let l = a.dir[i];
    l && (Xn(), Ut(l, n, 8, [
      e.el,
      a,
      e,
      t
    ]), Jn());
  }
}
function Up(e, t) {
  e.shapeFlag & 6 && e.component ? Up(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ti(e, t) {
  return ce(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    it({ name: e.name }, t, { setup: e })
  ) : e;
}
const $r = (e) => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Vo(e) {
  ce(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: i,
    delay: s = 200,
    timeout: r,
    // undefined = never times out
    suspensible: o = !0,
    onError: a
  } = e;
  let l = null, u, c = 0;
  const f = () => (c++, l = null, h()), h = () => {
    let d;
    return l || (d = l = t().catch((p) => {
      if (p = p instanceof Error ? p : new Error(String(p)), a)
        return new Promise((y, w) => {
          a(p, () => y(f()), () => w(p), c + 1);
        });
      throw p;
    }).then((p) => d !== l && l ? l : (p && (p.__esModule || p[Symbol.toStringTag] === "Module") && (p = p.default), u = p, p)));
  };
  return /* @__PURE__ */ Ti({
    name: "AsyncComponentWrapper",
    __asyncLoader: h,
    get __asyncResolved() {
      return u;
    },
    setup() {
      const d = Ke;
      if (u)
        return () => ka(u, d);
      const p = (k) => {
        l = null, er(
          k,
          d,
          13,
          !i
        );
      };
      if (o && d.suspense || ir)
        return h().then((k) => () => ka(k, d)).catch((k) => (p(k), () => i ? we(i, {
          error: k
        }) : null));
      const y = Ui(!1), w = Ui(), S = Ui(!!s);
      return s && setTimeout(() => {
        S.value = !1;
      }, s), r != null && setTimeout(() => {
        if (!y.value && !w.value) {
          const k = new Error(
            `Async component timed out after ${r}ms.`
          );
          p(k), w.value = k;
        }
      }, r), h().then(() => {
        y.value = !0, d.parent && Ac(d.parent.vnode) && (d.parent.effect.dirty = !0, Uo(d.parent.update));
      }).catch((k) => {
        p(k), w.value = k;
      }), () => {
        if (y.value && u)
          return ka(u, d);
        if (w.value && i)
          return we(i, {
            error: w.value
          });
        if (n && !S.value)
          return we(n);
      };
    }
  });
}
function ka(e, t) {
  const { ref: n, props: i, children: s, ce: r } = t.vnode, o = we(e, i, s);
  return o.ref = n, o.ce = r, delete t.vnode.ce, o;
}
const Ac = (e) => e.type.__isKeepAlive;
function x0(e, t) {
  Wp(e, "a", t);
}
function S0(e, t) {
  Wp(e, "da", t);
}
function Wp(e, t, n = Ke) {
  const i = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (zo(t, i, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      Ac(s.parent.vnode) && k0(i, t, n, s), s = s.parent;
  }
}
function k0(e, t, n, i) {
  const s = zo(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  Pc(() => {
    mc(i[t], s);
  }, n);
}
function zo(e, t, n = Ke, i = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      Xn();
      const a = nr(n), l = Ut(t, n, e, o);
      return a(), Jn(), l;
    });
    return i ? s.unshift(r) : s.push(r), r;
  }
}
const An = (e) => (t, n = Ke) => {
  (!ir || e === "sp") && zo(e, (...i) => t(...i), n);
}, E0 = An("bm"), Oc = An("m"), C0 = An("bu"), T0 = An("u"), A0 = An("bum"), Pc = An("um"), O0 = An("sp"), P0 = An(
  "rtg"
), N0 = An(
  "rtc"
);
function I0(e, t = Ke) {
  zo("ec", e, t);
}
const Vp = "components";
function yn(e, t) {
  return Gp(Vp, e, !0, t) || e;
}
const zp = Symbol.for("v-ndc");
function M0(e) {
  return Ge(e) ? Gp(Vp, e, !1) || e : e || zp;
}
function Gp(e, t, n = !0, i = !1) {
  const s = dt || Ke;
  if (s) {
    const r = s.type;
    {
      const a = kw(
        r,
        !1
      );
      if (a && (a === t || a === Wt(t) || a === Fo(Wt(t))))
        return r;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      wf(s[e] || r[e], t) || // global registration
      wf(s.appContext[e], t)
    );
    return !o && i ? r : o;
  }
}
function wf(e, t) {
  return e && (e[t] || e[Wt(t)] || e[Fo(Wt(t))]);
}
function bn(e, t, n, i) {
  let s;
  const r = n;
  if (oe(e) || Ge(e)) {
    s = new Array(e.length);
    for (let o = 0, a = e.length; o < a; o++)
      s[o] = t(e[o], o, void 0, r);
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let o = 0; o < e; o++)
      s[o] = t(o + 1, o, void 0, r);
  } else if (Oe(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (o, a) => t(o, a, void 0, r)
      );
    else {
      const o = Object.keys(e);
      s = new Array(o.length);
      for (let a = 0, l = o.length; a < l; a++) {
        const u = o[a];
        s[a] = t(e[u], u, a, r);
      }
    }
  else
    s = [];
  return s;
}
const rl = (e) => e ? fg(e) ? Ko(e) : rl(e.parent) : null, Is = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ it(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => rl(e.parent),
    $root: (e) => rl(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Nc(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, Uo(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = qo.bind(e.proxy)),
    $watch: (e) => iw.bind(e)
  })
), Ea = (e, t) => e !== Me && !e.__isScriptSetup && me(e, t), L0 = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: s, props: r, accessCache: o, type: a, appContext: l } = e;
    let u;
    if (t[0] !== "$") {
      const d = o[t];
      if (d !== void 0)
        switch (d) {
          case 1:
            return i[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (Ea(i, t))
          return o[t] = 1, i[t];
        if (s !== Me && me(s, t))
          return o[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && me(u, t)
        )
          return o[t] = 3, r[t];
        if (n !== Me && me(n, t))
          return o[t] = 4, n[t];
        ol && (o[t] = 0);
      }
    }
    const c = Is[t];
    let f, h;
    if (c)
      return t === "$attrs" && gt(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (f = a.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== Me && me(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      h = l.config.globalProperties, me(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: s, ctx: r } = e;
    return Ea(s, t) ? (s[t] = n, !0) : i !== Me && me(i, t) ? (i[t] = n, !0) : me(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: s, propsOptions: r }
  }, o) {
    let a;
    return !!n[o] || e !== Me && me(e, o) || Ea(t, o) || (a = r[0]) && me(a, o) || me(i, o) || me(Is, o) || me(s.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : me(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function vf(e) {
  return oe(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let ol = !0;
function D0(e) {
  const t = Nc(e), n = e.proxy, i = e.ctx;
  ol = !1, t.beforeCreate && _f(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: r,
    methods: o,
    watch: a,
    provide: l,
    inject: u,
    // lifecycle
    created: c,
    beforeMount: f,
    mounted: h,
    beforeUpdate: d,
    updated: p,
    activated: y,
    deactivated: w,
    beforeDestroy: S,
    beforeUnmount: k,
    destroyed: b,
    unmounted: C,
    render: A,
    renderTracked: I,
    renderTriggered: P,
    errorCaptured: D,
    serverPrefetch: W,
    // public API
    expose: G,
    inheritAttrs: z,
    // assets
    components: X,
    directives: H,
    filters: le
  } = t;
  if (u && R0(u, i, null), o)
    for (const de in o) {
      const ue = o[de];
      ce(ue) && (i[de] = ue.bind(n));
    }
  if (s) {
    const de = s.call(n, n);
    Oe(de) && (e.data = Sc(de));
  }
  if (ol = !0, r)
    for (const de in r) {
      const ue = r[de], Te = ce(ue) ? ue.bind(n, n) : ce(ue.get) ? ue.get.bind(n, n) : Lt, yt = !ce(ue) && ce(ue.set) ? ue.set.bind(n) : Lt, Fe = Pt({
        get: Te,
        set: yt
      });
      Object.defineProperty(i, de, {
        enumerable: !0,
        configurable: !0,
        get: () => Fe.value,
        set: (je) => Fe.value = je
      });
    }
  if (a)
    for (const de in a)
      Hp(a[de], i, n, de);
  if (l) {
    const de = ce(l) ? l.call(n) : l;
    Reflect.ownKeys(de).forEach((ue) => {
      U0(ue, de[ue]);
    });
  }
  c && _f(c, e, "c");
  function xe(de, ue) {
    oe(ue) ? ue.forEach((Te) => de(Te.bind(n))) : ue && de(ue.bind(n));
  }
  if (xe(E0, f), xe(Oc, h), xe(C0, d), xe(T0, p), xe(x0, y), xe(S0, w), xe(I0, D), xe(N0, I), xe(P0, P), xe(A0, k), xe(Pc, C), xe(O0, W), oe(G))
    if (G.length) {
      const de = e.exposed || (e.exposed = {});
      G.forEach((ue) => {
        Object.defineProperty(de, ue, {
          get: () => n[ue],
          set: (Te) => n[ue] = Te
        });
      });
    } else e.exposed || (e.exposed = {});
  A && e.render === Lt && (e.render = A), z != null && (e.inheritAttrs = z), X && (e.components = X), H && (e.directives = H);
}
function R0(e, t, n = Lt) {
  oe(e) && (e = al(e));
  for (const i in e) {
    const s = e[i];
    let r;
    Oe(s) ? "default" in s ? r = Ls(
      s.from || i,
      s.default,
      !0
    ) : r = Ls(s.from || i) : r = Ls(s), at(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[i] = r;
  }
}
function _f(e, t, n) {
  Ut(
    oe(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Hp(e, t, n, i) {
  const s = i.includes(".") ? ag(n, i) : () => n[i];
  if (Ge(e)) {
    const r = t[e];
    ce(r) && kn(s, r);
  } else if (ce(e))
    kn(s, e.bind(n));
  else if (Oe(e))
    if (oe(e))
      e.forEach((r) => Hp(r, t, n, i));
    else {
      const r = ce(e.handler) ? e.handler.bind(n) : t[e.handler];
      ce(r) && kn(s, r, e);
    }
}
function Nc(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, a = r.get(t);
  let l;
  return a ? l = a : !s.length && !n && !i ? l = t : (l = {}, s.length && s.forEach(
    (u) => eo(l, u, o, !0)
  ), eo(l, t, o)), Oe(t) && r.set(t, l), l;
}
function eo(e, t, n, i = !1) {
  const { mixins: s, extends: r } = t;
  r && eo(e, r, n, !0), s && s.forEach(
    (o) => eo(e, o, n, !0)
  );
  for (const o in t)
    if (!(i && o === "expose")) {
      const a = F0[o] || n && n[o];
      e[o] = a ? a(e[o], t[o]) : t[o];
    }
  return e;
}
const F0 = {
  data: xf,
  props: Sf,
  emits: Sf,
  // objects
  methods: _s,
  computed: _s,
  // lifecycle
  beforeCreate: rt,
  created: rt,
  beforeMount: rt,
  mounted: rt,
  beforeUpdate: rt,
  updated: rt,
  beforeDestroy: rt,
  beforeUnmount: rt,
  destroyed: rt,
  unmounted: rt,
  activated: rt,
  deactivated: rt,
  errorCaptured: rt,
  serverPrefetch: rt,
  // assets
  components: _s,
  directives: _s,
  // watch
  watch: B0,
  // provide / inject
  provide: xf,
  inject: $0
};
function xf(e, t) {
  return t ? e ? function() {
    return it(
      ce(e) ? e.call(this, this) : e,
      ce(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function $0(e, t) {
  return _s(al(e), al(t));
}
function al(e) {
  if (oe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function rt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function _s(e, t) {
  return e ? it(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Sf(e, t) {
  return e ? oe(e) && oe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : it(
    /* @__PURE__ */ Object.create(null),
    vf(e),
    vf(t ?? {})
  ) : t;
}
function B0(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = it(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = rt(e[i], t[i]);
  return n;
}
function Kp() {
  return {
    app: null,
    config: {
      isNativeTag: Ob,
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
let j0 = 0;
function q0(e, t) {
  return function(i, s = null) {
    ce(i) || (i = it({}, i)), s != null && !Oe(s) && (s = null);
    const r = Kp(), o = /* @__PURE__ */ new WeakSet();
    let a = !1;
    const l = r.app = {
      _uid: j0++,
      _component: i,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: Cw,
      get config() {
        return r.config;
      },
      set config(u) {
      },
      use(u, ...c) {
        return o.has(u) || (u && ce(u.install) ? (o.add(u), u.install(l, ...c)) : ce(u) && (o.add(u), u(l, ...c))), l;
      },
      mixin(u) {
        return r.mixins.includes(u) || r.mixins.push(u), l;
      },
      component(u, c) {
        return c ? (r.components[u] = c, l) : r.components[u];
      },
      directive(u, c) {
        return c ? (r.directives[u] = c, l) : r.directives[u];
      },
      mount(u, c, f) {
        if (!a) {
          const h = we(i, s);
          return h.appContext = r, f === !0 ? f = "svg" : f === !1 && (f = void 0), c && t ? t(h, u) : e(h, u, f), a = !0, l._container = u, u.__vue_app__ = l, Ko(h.component);
        }
      },
      unmount() {
        a && (e(null, l._container), delete l._container.__vue_app__);
      },
      provide(u, c) {
        return r.provides[u] = c, l;
      },
      runWithContext(u) {
        const c = Ms;
        Ms = l;
        try {
          return u();
        } finally {
          Ms = c;
        }
      }
    };
    return l;
  };
}
let Ms = null;
function U0(e, t) {
  if (Ke) {
    let n = Ke.provides;
    const i = Ke.parent && Ke.parent.provides;
    i === n && (n = Ke.provides = Object.create(i)), n[e] = t;
  }
}
function Ls(e, t, n = !1) {
  const i = Ke || dt;
  if (i || Ms) {
    const s = i ? i.parent == null ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : Ms._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && ce(t) ? t.call(i && i.proxy) : t;
  }
}
const Yp = {}, Xp = () => Object.create(Yp), Jp = (e) => Object.getPrototypeOf(e) === Yp;
function W0(e, t, n, i = !1) {
  const s = {}, r = Xp();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Qp(e, t, s, r);
  for (const o in e.propsOptions[0])
    o in s || (s[o] = void 0);
  n ? e.props = i ? s : u0(s) : e.type.props ? e.props = s : e.props = r, e.attrs = r;
}
function V0(e, t, n, i) {
  const {
    props: s,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, a = _e(s), [l] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const c = e.vnode.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        let h = c[f];
        if (Go(e.emitsOptions, h))
          continue;
        const d = t[h];
        if (l)
          if (me(r, h))
            d !== r[h] && (r[h] = d, u = !0);
          else {
            const p = Wt(h);
            s[p] = ll(
              l,
              a,
              p,
              d,
              e,
              !1
            );
          }
        else
          d !== r[h] && (r[h] = d, u = !0);
      }
    }
  } else {
    Qp(e, t, s, r) && (u = !0);
    let c;
    for (const f in a)
      (!t || // for camelCase
      !me(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Ci(f)) === f || !me(t, c))) && (l ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[c] !== void 0) && (s[f] = ll(
        l,
        a,
        f,
        void 0,
        e,
        !0
      )) : delete s[f]);
    if (r !== a)
      for (const f in r)
        (!t || !me(t, f)) && (delete r[f], u = !0);
  }
  u && Sn(e.attrs, "set", "");
}
function Qp(e, t, n, i) {
  const [s, r] = e.propsOptions;
  let o = !1, a;
  if (t)
    for (let l in t) {
      if (Ps(l))
        continue;
      const u = t[l];
      let c;
      s && me(s, c = Wt(l)) ? !r || !r.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : Go(e.emitsOptions, l) || (!(l in i) || u !== i[l]) && (i[l] = u, o = !0);
    }
  if (r) {
    const l = _e(n), u = a || Me;
    for (let c = 0; c < r.length; c++) {
      const f = r[c];
      n[f] = ll(
        s,
        l,
        f,
        u[f],
        e,
        !me(u, f)
      );
    }
  }
  return o;
}
function ll(e, t, n, i, s, r) {
  const o = e[n];
  if (o != null) {
    const a = me(o, "default");
    if (a && i === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && ce(l)) {
        const { propsDefaults: u } = s;
        if (n in u)
          i = u[n];
        else {
          const c = nr(s);
          i = u[n] = l.call(
            null,
            t
          ), c();
        }
      } else
        i = l;
    }
    o[
      0
      /* shouldCast */
    ] && (r && !a ? i = !1 : o[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === Ci(n)) && (i = !0));
  }
  return i;
}
const z0 = /* @__PURE__ */ new WeakMap();
function Zp(e, t, n = !1) {
  const i = n ? z0 : t.propsCache, s = i.get(e);
  if (s)
    return s;
  const r = e.props, o = {}, a = [];
  let l = !1;
  if (!ce(e)) {
    const c = (f) => {
      l = !0;
      const [h, d] = Zp(f, t, !0);
      it(o, h), d && a.push(...d);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!r && !l)
    return Oe(e) && i.set(e, ji), ji;
  if (oe(r))
    for (let c = 0; c < r.length; c++) {
      const f = Wt(r[c]);
      kf(f) && (o[f] = Me);
    }
  else if (r)
    for (const c in r) {
      const f = Wt(c);
      if (kf(f)) {
        const h = r[c], d = o[f] = oe(h) || ce(h) ? { type: h } : it({}, h);
        if (d) {
          const p = Tf(Boolean, d.type), y = Tf(String, d.type);
          d[
            0
            /* shouldCast */
          ] = p > -1, d[
            1
            /* shouldCastTrue */
          ] = y < 0 || p < y, (p > -1 || me(d, "default")) && a.push(f);
        }
      }
    }
  const u = [o, a];
  return Oe(e) && i.set(e, u), u;
}
function kf(e) {
  return e[0] !== "$" && !Ps(e);
}
function Ef(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Cf(e, t) {
  return Ef(e) === Ef(t);
}
function Tf(e, t) {
  return oe(t) ? t.findIndex((n) => Cf(n, e)) : ce(t) && Cf(t, e) ? 0 : -1;
}
const eg = (e) => e[0] === "_" || e === "$stable", Ic = (e) => oe(e) ? e.map(en) : [en(e)], G0 = (e, t, n) => {
  if (t._n)
    return t;
  const i = _0((...s) => Ic(t(...s)), n);
  return i._c = !1, i;
}, tg = (e, t, n) => {
  const i = e._ctx;
  for (const s in e) {
    if (eg(s)) continue;
    const r = e[s];
    if (ce(r))
      t[s] = G0(s, r, i);
    else if (r != null) {
      const o = Ic(r);
      t[s] = () => o;
    }
  }
}, ng = (e, t) => {
  const n = Ic(t);
  e.slots.default = () => n;
}, ig = (e, t, n) => {
  for (const i in t)
    (n || i !== "_") && (e[i] = t[i]);
}, H0 = (e, t, n) => {
  const i = e.slots = Xp();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (ig(i, t, n), n && dp(i, "_", s, !0)) : tg(t, i);
  } else t && ng(e, t);
}, K0 = (e, t, n) => {
  const { vnode: i, slots: s } = e;
  let r = !0, o = Me;
  if (i.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? r = !1 : ig(s, t, n) : (r = !t.$stable, tg(t, s)), o = t;
  } else t && (ng(e, t), o = { default: 1 });
  if (r)
    for (const a in s)
      !eg(a) && o[a] == null && delete s[a];
};
function cl(e, t, n, i, s = !1) {
  if (oe(e)) {
    e.forEach(
      (h, d) => cl(
        h,
        t && (oe(t) ? t[d] : t),
        n,
        i,
        s
      )
    );
    return;
  }
  if ($r(i) && !s)
    return;
  const r = i.shapeFlag & 4 ? Ko(i.component) : i.el, o = s ? null : r, { i: a, r: l } = e, u = t && t.r, c = a.refs === Me ? a.refs = {} : a.refs, f = a.setupState;
  if (u != null && u !== l && (Ge(u) ? (c[u] = null, me(f, u) && (f[u] = null)) : at(u) && (u.value = null)), ce(l))
    Un(l, a, 12, [o, c]);
  else {
    const h = Ge(l), d = at(l);
    if (h || d) {
      const p = () => {
        if (e.f) {
          const y = h ? me(f, l) ? f[l] : c[l] : l.value;
          s ? oe(y) && mc(y, r) : oe(y) ? y.includes(r) || y.push(r) : h ? (c[l] = [r], me(f, l) && (f[l] = c[l])) : (l.value = [r], e.k && (c[e.k] = l.value));
        } else h ? (c[l] = o, me(f, l) && (f[l] = o)) : d && (l.value = o, e.k && (c[e.k] = o));
      };
      o ? (p.id = -1, ht(p, n)) : p();
    }
  }
}
const Y0 = Symbol("_vte"), X0 = (e) => e.__isTeleport, ht = fw;
function J0(e) {
  return Q0(e);
}
function Q0(e, t) {
  const n = gp();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: s,
    patchProp: r,
    createElement: o,
    createText: a,
    createComment: l,
    setText: u,
    setElementText: c,
    parentNode: f,
    nextSibling: h,
    setScopeId: d = Lt,
    insertStaticContent: p
  } = e, y = (E, O, F, q = null, j = null, V = null, Y = void 0, m = null, v = !!O.dynamicChildren) => {
    if (E === O)
      return;
    E && !ps(E, O) && (q = Ft(E), je(E, j, V, !0), E = null), O.patchFlag === -2 && (v = !1, O.dynamicChildren = null);
    const { type: T, ref: B, shapeFlag: K } = O;
    switch (T) {
      case tr:
        w(E, O, F, q);
        break;
      case wi:
        S(E, O, F, q);
        break;
      case Br:
        E == null && k(O, F, q, Y);
        break;
      case $e:
        X(
          E,
          O,
          F,
          q,
          j,
          V,
          Y,
          m,
          v
        );
        break;
      default:
        K & 1 ? A(
          E,
          O,
          F,
          q,
          j,
          V,
          Y,
          m,
          v
        ) : K & 6 ? H(
          E,
          O,
          F,
          q,
          j,
          V,
          Y,
          m,
          v
        ) : (K & 64 || K & 128) && T.process(
          E,
          O,
          F,
          q,
          j,
          V,
          Y,
          m,
          v,
          wt
        );
    }
    B != null && j && cl(B, E && E.ref, V, O || E, !O);
  }, w = (E, O, F, q) => {
    if (E == null)
      i(
        O.el = a(O.children),
        F,
        q
      );
    else {
      const j = O.el = E.el;
      O.children !== E.children && u(j, O.children);
    }
  }, S = (E, O, F, q) => {
    E == null ? i(
      O.el = l(O.children || ""),
      F,
      q
    ) : O.el = E.el;
  }, k = (E, O, F, q) => {
    [E.el, E.anchor] = p(
      E.children,
      O,
      F,
      q,
      E.el,
      E.anchor
    );
  }, b = ({ el: E, anchor: O }, F, q) => {
    let j;
    for (; E && E !== O; )
      j = h(E), i(E, F, q), E = j;
    i(O, F, q);
  }, C = ({ el: E, anchor: O }) => {
    let F;
    for (; E && E !== O; )
      F = h(E), s(E), E = F;
    s(O);
  }, A = (E, O, F, q, j, V, Y, m, v) => {
    O.type === "svg" ? Y = "svg" : O.type === "math" && (Y = "mathml"), E == null ? I(
      O,
      F,
      q,
      j,
      V,
      Y,
      m,
      v
    ) : W(
      E,
      O,
      j,
      V,
      Y,
      m,
      v
    );
  }, I = (E, O, F, q, j, V, Y, m) => {
    let v, T;
    const { props: B, shapeFlag: K, transition: U, dirs: M } = E;
    if (v = E.el = o(
      E.type,
      V,
      B && B.is,
      B
    ), K & 8 ? c(v, E.children) : K & 16 && D(
      E.children,
      v,
      null,
      q,
      j,
      Ca(E, V),
      Y,
      m
    ), M && ni(E, null, q, "created"), P(v, E, E.scopeId, Y, q), B) {
      for (const ne in B)
        ne !== "value" && !Ps(ne) && r(v, ne, null, B[ne], V, q);
      "value" in B && r(v, "value", null, B.value, V), (T = B.onVnodeBeforeMount) && Xt(T, q, E);
    }
    M && ni(E, null, q, "beforeMount");
    const R = Z0(j, U);
    R && U.beforeEnter(v), i(v, O, F), ((T = B && B.onVnodeMounted) || R || M) && ht(() => {
      T && Xt(T, q, E), R && U.enter(v), M && ni(E, null, q, "mounted");
    }, j);
  }, P = (E, O, F, q, j) => {
    if (F && d(E, F), q)
      for (let V = 0; V < q.length; V++)
        d(E, q[V]);
    if (j) {
      let V = j.subTree;
      if (O === V) {
        const Y = j.vnode;
        P(
          E,
          Y,
          Y.scopeId,
          Y.slotScopeIds,
          j.parent
        );
      }
    }
  }, D = (E, O, F, q, j, V, Y, m, v = 0) => {
    for (let T = v; T < E.length; T++) {
      const B = E[T] = m ? Rn(E[T]) : en(E[T]);
      y(
        null,
        B,
        O,
        F,
        q,
        j,
        V,
        Y,
        m
      );
    }
  }, W = (E, O, F, q, j, V, Y) => {
    const m = O.el = E.el;
    let { patchFlag: v, dynamicChildren: T, dirs: B } = O;
    v |= E.patchFlag & 16;
    const K = E.props || Me, U = O.props || Me;
    let M;
    if (F && ii(F, !1), (M = U.onVnodeBeforeUpdate) && Xt(M, F, O, E), B && ni(O, E, F, "beforeUpdate"), F && ii(F, !0), (K.innerHTML && U.innerHTML == null || K.textContent && U.textContent == null) && c(m, ""), T ? G(
      E.dynamicChildren,
      T,
      m,
      F,
      q,
      Ca(O, j),
      V
    ) : Y || ue(
      E,
      O,
      m,
      null,
      F,
      q,
      Ca(O, j),
      V,
      !1
    ), v > 0) {
      if (v & 16)
        z(m, K, U, F, j);
      else if (v & 2 && K.class !== U.class && r(m, "class", null, U.class, j), v & 4 && r(m, "style", K.style, U.style, j), v & 8) {
        const R = O.dynamicProps;
        for (let ne = 0; ne < R.length; ne++) {
          const ie = R[ne], Ee = K[ie], Qe = U[ie];
          (Qe !== Ee || ie === "value") && r(m, ie, Ee, Qe, j, F);
        }
      }
      v & 1 && E.children !== O.children && c(m, O.children);
    } else !Y && T == null && z(m, K, U, F, j);
    ((M = U.onVnodeUpdated) || B) && ht(() => {
      M && Xt(M, F, O, E), B && ni(O, E, F, "updated");
    }, q);
  }, G = (E, O, F, q, j, V, Y) => {
    for (let m = 0; m < O.length; m++) {
      const v = E[m], T = O[m], B = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        v.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (v.type === $e || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ps(v, T) || // - In the case of a component, it could contain anything.
        v.shapeFlag & 70) ? f(v.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          F
        )
      );
      y(
        v,
        T,
        B,
        null,
        q,
        j,
        V,
        Y,
        !0
      );
    }
  }, z = (E, O, F, q, j) => {
    if (O !== F) {
      if (O !== Me)
        for (const V in O)
          !Ps(V) && !(V in F) && r(
            E,
            V,
            O[V],
            null,
            j,
            q
          );
      for (const V in F) {
        if (Ps(V)) continue;
        const Y = F[V], m = O[V];
        Y !== m && V !== "value" && r(E, V, m, Y, j, q);
      }
      "value" in F && r(E, "value", O.value, F.value, j);
    }
  }, X = (E, O, F, q, j, V, Y, m, v) => {
    const T = O.el = E ? E.el : a(""), B = O.anchor = E ? E.anchor : a("");
    let { patchFlag: K, dynamicChildren: U, slotScopeIds: M } = O;
    M && (m = m ? m.concat(M) : M), E == null ? (i(T, F, q), i(B, F, q), D(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      O.children || [],
      F,
      B,
      j,
      V,
      Y,
      m,
      v
    )) : K > 0 && K & 64 && U && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    E.dynamicChildren ? (G(
      E.dynamicChildren,
      U,
      F,
      j,
      V,
      Y,
      m
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (O.key != null || j && O === j.subTree) && sg(
      E,
      O,
      !0
      /* shallow */
    )) : ue(
      E,
      O,
      F,
      B,
      j,
      V,
      Y,
      m,
      v
    );
  }, H = (E, O, F, q, j, V, Y, m, v) => {
    O.slotScopeIds = m, E == null ? O.shapeFlag & 512 ? j.ctx.activate(
      O,
      F,
      q,
      Y,
      v
    ) : le(
      O,
      F,
      q,
      j,
      V,
      Y,
      v
    ) : Xe(E, O, v);
  }, le = (E, O, F, q, j, V, Y) => {
    const m = E.component = ww(
      E,
      q,
      j
    );
    if (Ac(E) && (m.ctx.renderer = wt), vw(m, !1, Y), m.asyncDep) {
      if (j && j.registerDep(m, xe, Y), !E.el) {
        const v = m.subTree = we(wi);
        S(null, v, O, F);
      }
    } else
      xe(
        m,
        E,
        O,
        F,
        j,
        V,
        Y
      );
  }, Xe = (E, O, F) => {
    const q = O.component = E.component;
    if (lw(E, O, F))
      if (q.asyncDep && !q.asyncResolved) {
        de(q, O, F);
        return;
      } else
        q.next = O, m0(q.update), q.effect.dirty = !0, q.update();
    else
      O.el = E.el, q.vnode = O;
  }, xe = (E, O, F, q, j, V, Y) => {
    const m = () => {
      if (E.isMounted) {
        let { next: B, bu: K, u: U, parent: M, vnode: R } = E;
        {
          const vt = rg(E);
          if (vt) {
            B && (B.el = R.el, de(E, B, Y)), vt.asyncDep.then(() => {
              E.isUnmounted || m();
            });
            return;
          }
        }
        let ne = B, ie;
        ii(E, !1), B ? (B.el = R.el, de(E, B, Y)) : B = R, K && Rr(K), (ie = B.props && B.props.onVnodeBeforeUpdate) && Xt(ie, M, B, R), ii(E, !0);
        const Ee = Ta(E), Qe = E.subTree;
        E.subTree = Ee, y(
          Qe,
          Ee,
          // parent may have changed if it's in a teleport
          f(Qe.el),
          // anchor may have changed if it's in a fragment
          Ft(Qe),
          E,
          j,
          V
        ), B.el = Ee.el, ne === null && cw(E, Ee.el), U && ht(U, j), (ie = B.props && B.props.onVnodeUpdated) && ht(
          () => Xt(ie, M, B, R),
          j
        );
      } else {
        let B;
        const { el: K, props: U } = O, { bm: M, m: R, parent: ne } = E, ie = $r(O);
        if (ii(E, !1), M && Rr(M), !ie && (B = U && U.onVnodeBeforeMount) && Xt(B, ne, O), ii(E, !0), K && Ni) {
          const Ee = () => {
            E.subTree = Ta(E), Ni(
              K,
              E.subTree,
              E,
              j,
              null
            );
          };
          ie ? O.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !E.isUnmounted && Ee()
          ) : Ee();
        } else {
          const Ee = E.subTree = Ta(E);
          y(
            null,
            Ee,
            F,
            q,
            E,
            j,
            V
          ), O.el = Ee.el;
        }
        if (R && ht(R, j), !ie && (B = U && U.onVnodeMounted)) {
          const Ee = O;
          ht(
            () => Xt(B, ne, Ee),
            j
          );
        }
        (O.shapeFlag & 256 || ne && $r(ne.vnode) && ne.vnode.shapeFlag & 256) && E.a && ht(E.a, j), E.isMounted = !0, O = F = q = null;
      }
    }, v = E.effect = new bc(
      m,
      Lt,
      () => Uo(T),
      E.scope
      // track it in component's effect scope
    ), T = E.update = () => {
      v.dirty && v.run();
    };
    T.i = E, T.id = E.uid, ii(E, !0), T();
  }, de = (E, O, F) => {
    O.component = E;
    const q = E.vnode.props;
    E.vnode = O, E.next = null, V0(E, O.props, q, F), K0(E, O.children, F), Xn(), bf(E), Jn();
  }, ue = (E, O, F, q, j, V, Y, m, v = !1) => {
    const T = E && E.children, B = E ? E.shapeFlag : 0, K = O.children, { patchFlag: U, shapeFlag: M } = O;
    if (U > 0) {
      if (U & 128) {
        yt(
          T,
          K,
          F,
          q,
          j,
          V,
          Y,
          m,
          v
        );
        return;
      } else if (U & 256) {
        Te(
          T,
          K,
          F,
          q,
          j,
          V,
          Y,
          m,
          v
        );
        return;
      }
    }
    M & 8 ? (B & 16 && bt(T, j, V), K !== T && c(F, K)) : B & 16 ? M & 16 ? yt(
      T,
      K,
      F,
      q,
      j,
      V,
      Y,
      m,
      v
    ) : bt(T, j, V, !0) : (B & 8 && c(F, ""), M & 16 && D(
      K,
      F,
      q,
      j,
      V,
      Y,
      m,
      v
    ));
  }, Te = (E, O, F, q, j, V, Y, m, v) => {
    E = E || ji, O = O || ji;
    const T = E.length, B = O.length, K = Math.min(T, B);
    let U;
    for (U = 0; U < K; U++) {
      const M = O[U] = v ? Rn(O[U]) : en(O[U]);
      y(
        E[U],
        M,
        F,
        null,
        j,
        V,
        Y,
        m,
        v
      );
    }
    T > B ? bt(
      E,
      j,
      V,
      !0,
      !1,
      K
    ) : D(
      O,
      F,
      q,
      j,
      V,
      Y,
      m,
      v,
      K
    );
  }, yt = (E, O, F, q, j, V, Y, m, v) => {
    let T = 0;
    const B = O.length;
    let K = E.length - 1, U = B - 1;
    for (; T <= K && T <= U; ) {
      const M = E[T], R = O[T] = v ? Rn(O[T]) : en(O[T]);
      if (ps(M, R))
        y(
          M,
          R,
          F,
          null,
          j,
          V,
          Y,
          m,
          v
        );
      else
        break;
      T++;
    }
    for (; T <= K && T <= U; ) {
      const M = E[K], R = O[U] = v ? Rn(O[U]) : en(O[U]);
      if (ps(M, R))
        y(
          M,
          R,
          F,
          null,
          j,
          V,
          Y,
          m,
          v
        );
      else
        break;
      K--, U--;
    }
    if (T > K) {
      if (T <= U) {
        const M = U + 1, R = M < B ? O[M].el : q;
        for (; T <= U; )
          y(
            null,
            O[T] = v ? Rn(O[T]) : en(O[T]),
            F,
            R,
            j,
            V,
            Y,
            m,
            v
          ), T++;
      }
    } else if (T > U)
      for (; T <= K; )
        je(E[T], j, V, !0), T++;
    else {
      const M = T, R = T, ne = /* @__PURE__ */ new Map();
      for (T = R; T <= U; T++) {
        const _t = O[T] = v ? Rn(O[T]) : en(O[T]);
        _t.key != null && ne.set(_t.key, T);
      }
      let ie, Ee = 0;
      const Qe = U - R + 1;
      let vt = !1, dr = 0;
      const Ii = new Array(Qe);
      for (T = 0; T < Qe; T++) Ii[T] = 0;
      for (T = M; T <= K; T++) {
        const _t = E[T];
        if (Ee >= Qe) {
          je(_t, j, V, !0);
          continue;
        }
        let Yt;
        if (_t.key != null)
          Yt = ne.get(_t.key);
        else
          for (ie = R; ie <= U; ie++)
            if (Ii[ie - R] === 0 && ps(_t, O[ie])) {
              Yt = ie;
              break;
            }
        Yt === void 0 ? je(_t, j, V, !0) : (Ii[Yt - R] = T + 1, Yt >= dr ? dr = Yt : vt = !0, y(
          _t,
          O[Yt],
          F,
          null,
          j,
          V,
          Y,
          m,
          v
        ), Ee++);
      }
      const af = vt ? ew(Ii) : ji;
      for (ie = af.length - 1, T = Qe - 1; T >= 0; T--) {
        const _t = R + T, Yt = O[_t], lf = _t + 1 < B ? O[_t + 1].el : q;
        Ii[T] === 0 ? y(
          null,
          Yt,
          F,
          lf,
          j,
          V,
          Y,
          m,
          v
        ) : vt && (ie < 0 || T !== af[ie] ? Fe(Yt, F, lf, 2) : ie--);
      }
    }
  }, Fe = (E, O, F, q, j = null) => {
    const { el: V, type: Y, transition: m, children: v, shapeFlag: T } = E;
    if (T & 6) {
      Fe(E.component.subTree, O, F, q);
      return;
    }
    if (T & 128) {
      E.suspense.move(O, F, q);
      return;
    }
    if (T & 64) {
      Y.move(E, O, F, wt);
      return;
    }
    if (Y === $e) {
      i(V, O, F);
      for (let K = 0; K < v.length; K++)
        Fe(v[K], O, F, q);
      i(E.anchor, O, F);
      return;
    }
    if (Y === Br) {
      b(E, O, F);
      return;
    }
    if (q !== 2 && T & 1 && m)
      if (q === 0)
        m.beforeEnter(V), i(V, O, F), ht(() => m.enter(V), j);
      else {
        const { leave: K, delayLeave: U, afterLeave: M } = m, R = () => i(V, O, F), ne = () => {
          K(V, () => {
            R(), M && M();
          });
        };
        U ? U(V, R, ne) : ne();
      }
    else
      i(V, O, F);
  }, je = (E, O, F, q = !1, j = !1) => {
    const {
      type: V,
      props: Y,
      ref: m,
      children: v,
      dynamicChildren: T,
      shapeFlag: B,
      patchFlag: K,
      dirs: U,
      cacheIndex: M
    } = E;
    if (K === -2 && (j = !1), m != null && cl(m, null, F, E, !0), M != null && (O.renderCache[M] = void 0), B & 256) {
      O.ctx.deactivate(E);
      return;
    }
    const R = B & 1 && U, ne = !$r(E);
    let ie;
    if (ne && (ie = Y && Y.onVnodeBeforeUnmount) && Xt(ie, O, E), B & 6)
      st(E.component, F, q);
    else {
      if (B & 128) {
        E.suspense.unmount(F, q);
        return;
      }
      R && ni(E, null, O, "beforeUnmount"), B & 64 ? E.type.remove(
        E,
        O,
        F,
        wt,
        q
      ) : T && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !T.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (V !== $e || K > 0 && K & 64) ? bt(
        T,
        O,
        F,
        !1,
        !0
      ) : (V === $e && K & 384 || !j && B & 16) && bt(v, O, F), q && Gt(E);
    }
    (ne && (ie = Y && Y.onVnodeUnmounted) || R) && ht(() => {
      ie && Xt(ie, O, E), R && ni(E, null, O, "unmounted");
    }, F);
  }, Gt = (E) => {
    const { type: O, el: F, anchor: q, transition: j } = E;
    if (O === $e) {
      Ht(F, q);
      return;
    }
    if (O === Br) {
      C(E);
      return;
    }
    const V = () => {
      s(F), j && !j.persisted && j.afterLeave && j.afterLeave();
    };
    if (E.shapeFlag & 1 && j && !j.persisted) {
      const { leave: Y, delayLeave: m } = j, v = () => Y(F, V);
      m ? m(E.el, V, v) : v();
    } else
      V();
  }, Ht = (E, O) => {
    let F;
    for (; E !== O; )
      F = h(E), s(E), E = F;
    s(O);
  }, st = (E, O, F) => {
    const { bum: q, scope: j, update: V, subTree: Y, um: m, m: v, a: T } = E;
    Af(v), Af(T), q && Rr(q), j.stop(), V && (V.active = !1, je(Y, E, O, F)), m && ht(m, O), ht(() => {
      E.isUnmounted = !0;
    }, O), O && O.pendingBranch && !O.isUnmounted && E.asyncDep && !E.asyncResolved && E.suspenseId === O.pendingId && (O.deps--, O.deps === 0 && O.resolve());
  }, bt = (E, O, F, q = !1, j = !1, V = 0) => {
    for (let Y = V; Y < E.length; Y++)
      je(E[Y], O, F, q, j);
  }, Ft = (E) => {
    if (E.shapeFlag & 6)
      return Ft(E.component.subTree);
    if (E.shapeFlag & 128)
      return E.suspense.next();
    const O = h(E.anchor || E.el), F = O && O[Y0];
    return F ? h(F) : O;
  };
  let $t = !1;
  const Kt = (E, O, F) => {
    E == null ? O._vnode && je(O._vnode, null, null, !0) : y(
      O._vnode || null,
      E,
      O,
      null,
      null,
      null,
      F
    ), $t || ($t = !0, bf(), jp(), $t = !1), O._vnode = E;
  }, wt = {
    p: y,
    um: je,
    m: Fe,
    r: Gt,
    mt: le,
    mc: D,
    pc: ue,
    pbc: G,
    n: Ft,
    o: e
  };
  let dn, Ni;
  return {
    render: Kt,
    hydrate: dn,
    createApp: q0(Kt, dn)
  };
}
function Ca({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ii({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Z0(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function sg(e, t, n = !1) {
  const i = e.children, s = t.children;
  if (oe(i) && oe(s))
    for (let r = 0; r < i.length; r++) {
      const o = i[r];
      let a = s[r];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[r] = Rn(s[r]), a.el = o.el), !n && a.patchFlag !== -2 && sg(o, a)), a.type === tr && (a.el = o.el);
    }
}
function ew(e) {
  const t = e.slice(), n = [0];
  let i, s, r, o, a;
  const l = e.length;
  for (i = 0; i < l; i++) {
    const u = e[i];
    if (u !== 0) {
      if (s = n[n.length - 1], e[s] < u) {
        t[i] = s, n.push(i);
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; )
        a = r + o >> 1, e[n[a]] < u ? r = a + 1 : o = a;
      u < e[n[r]] && (r > 0 && (t[i] = n[r - 1]), n[r] = i);
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; )
    n[r] = o, o = t[o];
  return n;
}
function rg(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : rg(t);
}
function Af(e) {
  if (e)
    for (let t = 0; t < e.length; t++) e[t].active = !1;
}
const tw = Symbol.for("v-scx"), nw = () => Ls(tw), wr = {};
function kn(e, t, n) {
  return og(e, t, n);
}
function og(e, t, {
  immediate: n,
  deep: i,
  flush: s,
  once: r,
  onTrack: o,
  onTrigger: a
} = Me) {
  if (t && r) {
    const I = t;
    t = (...P) => {
      I(...P), A();
    };
  }
  const l = Ke, u = (I) => i === !0 ? I : (
    // for deep: false, only traverse root-level properties
    $n(I, i === !1 ? 1 : void 0)
  );
  let c, f = !1, h = !1;
  if (at(e) ? (c = () => e.value, f = Ki(e)) : Ns(e) ? (c = () => u(e), f = !0) : oe(e) ? (h = !0, f = e.some((I) => Ns(I) || Ki(I)), c = () => e.map((I) => {
    if (at(I))
      return I.value;
    if (Ns(I))
      return u(I);
    if (ce(I))
      return Un(I, l, 2);
  })) : ce(e) ? t ? c = () => Un(e, l, 2) : c = () => (d && d(), Ut(
    e,
    l,
    3,
    [p]
  )) : c = Lt, t && i) {
    const I = c;
    c = () => $n(I());
  }
  let d, p = (I) => {
    d = b.onStop = () => {
      Un(I, l, 4), d = b.onStop = void 0;
    };
  }, y;
  if (ir)
    if (p = Lt, t ? n && Ut(t, l, 3, [
      c(),
      h ? [] : void 0,
      p
    ]) : c(), s === "sync") {
      const I = nw();
      y = I.__watcherHandles || (I.__watcherHandles = []);
    } else
      return Lt;
  let w = h ? new Array(e.length).fill(wr) : wr;
  const S = () => {
    if (!(!b.active || !b.dirty))
      if (t) {
        const I = b.run();
        (i || f || (h ? I.some((P, D) => Vn(P, w[D])) : Vn(I, w))) && (d && d(), Ut(t, l, 3, [
          I,
          // pass undefined as the old value when it's changed for the first time
          w === wr ? void 0 : h && w[0] === wr ? [] : w,
          p
        ]), w = I);
      } else
        b.run();
  };
  S.allowRecurse = !!t;
  let k;
  s === "sync" ? k = S : s === "post" ? k = () => ht(S, l && l.suspense) : (S.pre = !0, l && (S.id = l.uid), k = () => Uo(S));
  const b = new bc(c, Lt, k), C = vp(), A = () => {
    b.stop(), C && mc(C.effects, b);
  };
  return t ? n ? S() : w = b.run() : s === "post" ? ht(
    b.run.bind(b),
    l && l.suspense
  ) : b.run(), y && y.push(A), A;
}
function iw(e, t, n) {
  const i = this.proxy, s = Ge(e) ? e.includes(".") ? ag(i, e) : () => i[e] : e.bind(i, i);
  let r;
  ce(t) ? r = t : (r = t.handler, n = t);
  const o = nr(this), a = og(s, r.bind(i), n);
  return o(), a;
}
function ag(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let s = 0; s < n.length && i; s++)
      i = i[n[s]];
    return i;
  };
}
function $n(e, t = 1 / 0, n) {
  if (t <= 0 || !Oe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, at(e))
    $n(e.value, t, n);
  else if (oe(e))
    for (let i = 0; i < e.length; i++)
      $n(e[i], t, n);
  else if (Do(e) || qi(e))
    e.forEach((i) => {
      $n(i, t, n);
    });
  else if (hp(e)) {
    for (const i in e)
      $n(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && $n(e[i], t, n);
  }
  return e;
}
const sw = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Wt(t)}Modifiers`] || e[`${Ci(t)}Modifiers`];
function rw(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || Me;
  let s = n;
  const r = t.startsWith("update:"), o = r && sw(i, t.slice(7));
  o && (o.trim && (s = n.map((c) => Ge(c) ? c.trim() : c)), o.number && (s = n.map(pp)));
  let a, l = i[a = xa(t)] || // also try camelCase event handler (#2249)
  i[a = xa(Wt(t))];
  !l && r && (l = i[a = xa(Ci(t))]), l && Ut(
    l,
    e,
    6,
    s
  );
  const u = i[a + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, Ut(
      u,
      e,
      6,
      s
    );
  }
}
function lg(e, t, n = !1) {
  const i = t.emitsCache, s = i.get(e);
  if (s !== void 0)
    return s;
  const r = e.emits;
  let o = {}, a = !1;
  if (!ce(e)) {
    const l = (u) => {
      const c = lg(u, t, !0);
      c && (a = !0, it(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !r && !a ? (Oe(e) && i.set(e, null), null) : (oe(r) ? r.forEach((l) => o[l] = null) : it(o, r), Oe(e) && i.set(e, o), o);
}
function Go(e, t) {
  return !e || !Lo(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), me(e, t[0].toLowerCase() + t.slice(1)) || me(e, Ci(t)) || me(e, t));
}
function Ta(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: s,
    propsOptions: [r],
    slots: o,
    attrs: a,
    emit: l,
    render: u,
    renderCache: c,
    props: f,
    data: h,
    setupState: d,
    ctx: p,
    inheritAttrs: y
  } = e, w = Zr(e);
  let S, k;
  try {
    if (n.shapeFlag & 4) {
      const C = s || i, A = C;
      S = en(
        u.call(
          A,
          C,
          c,
          f,
          d,
          h,
          p
        )
      ), k = a;
    } else {
      const C = t;
      S = en(
        C.length > 1 ? C(
          f,
          { attrs: a, slots: o, emit: l }
        ) : C(
          f,
          null
        )
      ), k = t.props ? a : ow(a);
    }
  } catch (C) {
    Ds.length = 0, er(C, e, 1), S = we(wi);
  }
  let b = S;
  if (k && y !== !1) {
    const C = Object.keys(k), { shapeFlag: A } = b;
    C.length && A & 7 && (r && C.some(gc) && (k = aw(
      k,
      r
    )), b = Yi(b, k, !1, !0));
  }
  return n.dirs && (b = Yi(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && (b.transition = n.transition), S = b, Zr(w), S;
}
const ow = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Lo(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, aw = (e, t) => {
  const n = {};
  for (const i in e)
    (!gc(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function lw(e, t, n) {
  const { props: i, children: s, component: r } = e, { props: o, children: a, patchFlag: l } = t, u = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? Of(i, o, u) : !!o;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const h = c[f];
        if (o[h] !== i[h] && !Go(u, h))
          return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable) ? !0 : i === o ? !1 : i ? o ? Of(i, o, u) : !0 : !!o;
  return !1;
}
function Of(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < i.length; s++) {
    const r = i[s];
    if (t[r] !== e[r] && !Go(n, r))
      return !0;
  }
  return !1;
}
function cw({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const uw = (e) => e.__isSuspense;
function fw(e, t) {
  t && t.pendingBranch ? oe(e) ? t.effects.push(...e) : t.effects.push(e) : y0(e);
}
const $e = Symbol.for("v-fgt"), tr = Symbol.for("v-txt"), wi = Symbol.for("v-cmt"), Br = Symbol.for("v-stc"), Ds = [];
let Et = null;
function te(e = !1) {
  Ds.push(Et = e ? null : []);
}
function hw() {
  Ds.pop(), Et = Ds[Ds.length - 1] || null;
}
let Ws = 1;
function Pf(e) {
  Ws += e, e < 0 && Et && (Et.hasOnce = !0);
}
function cg(e) {
  return e.dynamicChildren = Ws > 0 ? Et || ji : null, hw(), Ws > 0 && Et && Et.push(e), e;
}
function ae(e, t, n, i, s, r) {
  return cg(
    se(
      e,
      t,
      n,
      i,
      s,
      r,
      !0
    )
  );
}
function Zt(e, t, n, i, s) {
  return cg(
    we(
      e,
      t,
      n,
      i,
      s,
      !0
    )
  );
}
function ul(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ps(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ug = ({ key: e }) => e ?? null, jr = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ge(e) || at(e) || ce(e) ? { i: dt, r: e, k: t, f: !!n } : e : null);
function se(e, t = null, n = null, i = 0, s = null, r = e === $e ? 0 : 1, o = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ug(t),
    ref: t && jr(t),
    scopeId: Wo,
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
    shapeFlag: r,
    patchFlag: i,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: dt
  };
  return a ? (Mc(l, n), r & 128 && e.normalize(l)) : n && (l.shapeFlag |= Ge(n) ? 8 : 16), Ws > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Et && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Et.push(l), l;
}
const we = dw;
function dw(e, t = null, n = null, i = 0, s = null, r = !1) {
  if ((!e || e === zp) && (e = wi), ul(e)) {
    const a = Yi(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Mc(a, n), Ws > 0 && !r && Et && (a.shapeFlag & 6 ? Et[Et.indexOf(e)] = a : Et.push(a)), a.patchFlag = -2, a;
  }
  if (Ew(e) && (e = e.__vccOpts), t) {
    t = pw(t);
    let { class: a, style: l } = t;
    a && !Ge(a) && (t.class = an(a)), Oe(l) && (Ip(l) && !oe(l) && (l = it({}, l)), t.style = Ve(l));
  }
  const o = Ge(e) ? 1 : uw(e) ? 128 : X0(e) ? 64 : Oe(e) ? 4 : ce(e) ? 2 : 0;
  return se(
    e,
    t,
    n,
    i,
    s,
    o,
    r,
    !0
  );
}
function pw(e) {
  return e ? Ip(e) || Jp(e) ? it({}, e) : e : null;
}
function Yi(e, t, n = !1, i = !1) {
  const { props: s, ref: r, patchFlag: o, children: a, transition: l } = e, u = t ? mw(s || {}, t) : s, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && ug(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? oe(r) ? r.concat(jr(t)) : [r, jr(t)] : jr(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== $e ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && Yi(e.ssContent),
    ssFallback: e.ssFallback && Yi(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && i && Up(
    c,
    l.clone(c)
  ), c;
}
function xs(e = " ", t = 0) {
  return we(tr, null, e, t);
}
function gw(e, t) {
  const n = we(Br, null, e);
  return n.staticCount = t, n;
}
function Pe(e = "", t = !1) {
  return t ? (te(), Zt(wi, null, e)) : we(wi, null, e);
}
function en(e) {
  return e == null || typeof e == "boolean" ? we(wi) : oe(e) ? we(
    $e,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Rn(e) : we(tr, null, String(e));
}
function Rn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Yi(e);
}
function Mc(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (oe(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Mc(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Jp(t) ? t._ctx = dt : s === 3 && dt && (dt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ce(t) ? (t = { default: t, _ctx: dt }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [xs(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function mw(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const s in i)
      if (s === "class")
        t.class !== i.class && (t.class = an([t.class, i.class]));
      else if (s === "style")
        t.style = Ve([t.style, i.style]);
      else if (Lo(s)) {
        const r = t[s], o = i[s];
        o && r !== o && !(oe(r) && r.includes(o)) && (t[s] = r ? [].concat(r, o) : o);
      } else s !== "" && (t[s] = i[s]);
  }
  return t;
}
function Xt(e, t, n, i = null) {
  Ut(e, t, 7, [
    n,
    i
  ]);
}
const yw = Kp();
let bw = 0;
function ww(e, t, n) {
  const i = e.type, s = (t ? t.appContext : e.appContext) || yw, r = {
    uid: bw++,
    vnode: e,
    type: i,
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
    scope: new wp(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Zp(i, s),
    emitsOptions: lg(i, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Me,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: Me,
    data: Me,
    props: Me,
    attrs: Me,
    slots: Me,
    refs: Me,
    setupState: Me,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = rw.bind(null, r), e.ce && e.ce(r), r;
}
let Ke = null;
const Ho = () => Ke || dt;
let to, fl;
{
  const e = gp(), t = (n, i) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(i), (r) => {
      s.length > 1 ? s.forEach((o) => o(r)) : s[0](r);
    };
  };
  to = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ke = n
  ), fl = t(
    "__VUE_SSR_SETTERS__",
    (n) => ir = n
  );
}
const nr = (e) => {
  const t = Ke;
  return to(e), e.scope.on(), () => {
    e.scope.off(), to(t);
  };
}, Nf = () => {
  Ke && Ke.scope.off(), to(null);
};
function fg(e) {
  return e.vnode.shapeFlag & 4;
}
let ir = !1;
function vw(e, t = !1, n = !1) {
  t && fl(t);
  const { props: i, children: s } = e.vnode, r = fg(e);
  W0(e, i, r, t), H0(e, s, n);
  const o = r ? _w(e, t) : void 0;
  return t && fl(!1), o;
}
function _w(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, L0);
  const { setup: i } = n;
  if (i) {
    const s = e.setupContext = i.length > 1 ? Sw(e) : null, r = nr(e);
    Xn();
    const o = Un(
      i,
      e,
      0,
      [
        e.props,
        s
      ]
    );
    if (Jn(), r(), up(o)) {
      if (o.then(Nf, Nf), t)
        return o.then((a) => {
          If(e, a, t);
        }).catch((a) => {
          er(a, e, 0);
        });
      e.asyncDep = o;
    } else
      If(e, o, t);
  } else
    hg(e, t);
}
function If(e, t, n) {
  ce(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Oe(t) && (e.setupState = Fp(t)), hg(e, n);
}
let Mf;
function hg(e, t, n) {
  const i = e.type;
  if (!e.render) {
    if (!t && Mf && !i.render) {
      const s = i.template || Nc(e).template;
      if (s) {
        const { isCustomElement: r, compilerOptions: o } = e.appContext.config, { delimiters: a, compilerOptions: l } = i, u = it(
          it(
            {
              isCustomElement: r,
              delimiters: a
            },
            o
          ),
          l
        );
        i.render = Mf(s, u);
      }
    }
    e.render = i.render || Lt;
  }
  {
    const s = nr(e);
    Xn();
    try {
      D0(e);
    } finally {
      Jn(), s();
    }
  }
}
const xw = {
  get(e, t) {
    return gt(e, "get", ""), e[t];
  }
};
function Sw(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, xw),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ko(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Fp(jo(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Is)
        return Is[n](e);
    },
    has(t, n) {
      return n in t || n in Is;
    }
  })) : e.proxy;
}
function kw(e, t = !0) {
  return ce(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ew(e) {
  return ce(e) && "__vccOpts" in e;
}
const Pt = (e, t) => f0(e, t, ir);
function Lc(e, t, n) {
  const i = arguments.length;
  return i === 2 ? Oe(t) && !oe(t) ? ul(t) ? we(e, null, [t]) : we(e, t) : we(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && ul(n) && (n = [n]), we(e, t, n));
}
const Cw = "3.4.32";
/**
* @vue/runtime-dom v3.4.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Tw = "http://www.w3.org/2000/svg", Aw = "http://www.w3.org/1998/Math/MathML", wn = typeof document < "u" ? document : null, Lf = wn && /* @__PURE__ */ wn.createElement("template"), Ow = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const s = t === "svg" ? wn.createElementNS(Tw, e) : t === "mathml" ? wn.createElementNS(Aw, e) : n ? wn.createElement(e, { is: n }) : wn.createElement(e);
    return e === "select" && i && i.multiple != null && s.setAttribute("multiple", i.multiple), s;
  },
  createText: (e) => wn.createTextNode(e),
  createComment: (e) => wn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => wn.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, i, s, r) {
    const o = n ? n.previousSibling : t.lastChild;
    if (s && (s === r || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === r || !(s = s.nextSibling)); )
        ;
    else {
      Lf.innerHTML = i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e;
      const a = Lf.content;
      if (i === "svg" || i === "mathml") {
        const l = a.firstChild;
        for (; l.firstChild; )
          a.appendChild(l.firstChild);
        a.removeChild(l);
      }
      t.insertBefore(a, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Pw = Symbol("_vtc");
function Nw(e, t, n) {
  const i = e[Pw];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const no = Symbol("_vod"), dg = Symbol("_vsh"), pg = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[no] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : gs(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), gs(e, !0), i.enter(e)) : i.leave(e, () => {
      gs(e, !1);
    }) : gs(e, t));
  },
  beforeUnmount(e, { value: t }) {
    gs(e, t);
  }
};
function gs(e, t) {
  e.style.display = t ? e[no] : "none", e[dg] = !t;
}
const Iw = Symbol(""), Mw = /(^|;)\s*display\s*:/;
function Lw(e, t, n) {
  const i = e.style, s = Ge(n);
  let r = !1;
  if (n && !s) {
    if (t)
      if (Ge(t))
        for (const o of t.split(";")) {
          const a = o.slice(0, o.indexOf(":")).trim();
          n[a] == null && qr(i, a, "");
        }
      else
        for (const o in t)
          n[o] == null && qr(i, o, "");
    for (const o in n)
      o === "display" && (r = !0), qr(i, o, n[o]);
  } else if (s) {
    if (t !== n) {
      const o = i[Iw];
      o && (n += ";" + o), i.cssText = n, r = Mw.test(n);
    }
  } else t && e.removeAttribute("style");
  no in e && (e[no] = r ? i.display : "", e[dg] && (i.display = "none"));
}
const Df = /\s*!important$/;
function qr(e, t, n) {
  if (oe(n))
    n.forEach((i) => qr(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = Dw(e, t);
    Df.test(n) ? e.setProperty(
      Ci(i),
      n.replace(Df, ""),
      "important"
    ) : e[i] = n;
  }
}
const Rf = ["Webkit", "Moz", "ms"], Aa = {};
function Dw(e, t) {
  const n = Aa[t];
  if (n)
    return n;
  let i = Wt(t);
  if (i !== "filter" && i in e)
    return Aa[t] = i;
  i = Fo(i);
  for (let s = 0; s < Rf.length; s++) {
    const r = Rf[s] + i;
    if (r in e)
      return Aa[t] = r;
  }
  return t;
}
const Ff = "http://www.w3.org/1999/xlink";
function $f(e, t, n, i, s, r = Bb(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ff, t.slice(6, t.length)) : e.setAttributeNS(Ff, t, n) : n == null || r && !mp(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : un(n) ? String(n) : n
  );
}
function Rw(e, t, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    if (n === null) return;
    e[t] = n;
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const o = s === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? "" : String(n);
    (o !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let r = !1;
  if (n === "" || n == null) {
    const o = typeof e[t];
    o === "boolean" ? n = mp(n) : n == null && o === "string" ? (n = "", r = !0) : o === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  r && e.removeAttribute(t);
}
function gg(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function Fw(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const Bf = Symbol("_vei");
function $w(e, t, n, i, s = null) {
  const r = e[Bf] || (e[Bf] = {}), o = r[t];
  if (i && o)
    o.value = i;
  else {
    const [a, l] = Bw(t);
    if (i) {
      const u = r[t] = Uw(
        i,
        s
      );
      gg(e, a, u, l);
    } else o && (Fw(e, a, o, l), r[t] = void 0);
  }
}
const jf = /(?:Once|Passive|Capture)$/;
function Bw(e) {
  let t;
  if (jf.test(e)) {
    t = {};
    let i;
    for (; i = e.match(jf); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ci(e.slice(2)), t];
}
let Oa = 0;
const jw = /* @__PURE__ */ Promise.resolve(), qw = () => Oa || (jw.then(() => Oa = 0), Oa = Date.now());
function Uw(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    Ut(
      Ww(i, n.value),
      t,
      5,
      [i]
    );
  };
  return n.value = e, n.attached = qw(), n;
}
function Ww(e, t) {
  if (oe(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (i) => (s) => !s._stopped && i && i(s)
    );
  } else
    return t;
}
const qf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Vw = (e, t, n, i, s, r) => {
  const o = s === "svg";
  t === "class" ? Nw(e, i, o) : t === "style" ? Lw(e, n, i) : Lo(t) ? gc(t) || $w(e, t, n, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : zw(e, t, i, o)) ? (Rw(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && $f(e, t, i, o, r, t !== "value")) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), $f(e, t, i, o));
};
function zw(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && qf(t) && ce(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return qf(t) && Ge(n) ? !1 : t in e;
}
const Uf = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return oe(t) ? (n) => Rr(t, n) : t;
}, Pa = Symbol("_assign"), Gw = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, i) {
    const s = Do(t);
    gg(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (o) => o.selected).map(
        (o) => n ? pp(io(o)) : io(o)
      );
      e[Pa](
        e.multiple ? s ? new Set(r) : r : r[0]
      ), e._assigning = !0, qo(() => {
        e._assigning = !1;
      });
    }), e[Pa] = Uf(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t, modifiers: { number: n } }) {
    Wf(e, t);
  },
  beforeUpdate(e, t, n) {
    e[Pa] = Uf(n);
  },
  updated(e, { value: t, modifiers: { number: n } }) {
    e._assigning || Wf(e, t);
  }
};
function Wf(e, t, n) {
  const i = e.multiple, s = oe(t);
  if (!(i && !s && !Do(t))) {
    for (let r = 0, o = e.options.length; r < o; r++) {
      const a = e.options[r], l = io(a);
      if (i)
        if (s) {
          const u = typeof l;
          u === "string" || u === "number" ? a.selected = t.some((c) => String(c) === String(l)) : a.selected = qb(t, l) > -1;
        } else
          a.selected = t.has(l);
      else if ($o(io(a), t)) {
        e.selectedIndex !== r && (e.selectedIndex = r);
        return;
      }
    }
    !i && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function io(e) {
  return "_value" in e ? e._value : e.value;
}
const Hw = ["ctrl", "shift", "alt", "meta"], Kw = {
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
  exact: (e, t) => Hw.some((n) => e[`${n}Key`] && !t.includes(n))
}, GI = (e, t) => {
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = (s, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const a = Kw[t[o]];
      if (a && a(s, t)) return;
    }
    return e(s, ...r);
  });
}, Yw = /* @__PURE__ */ it({ patchProp: Vw }, Ow);
let Vf;
function Xw() {
  return Vf || (Vf = J0(Yw));
}
const Jw = (...e) => {
  const t = Xw().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const s = Zw(i);
    if (!s) return;
    const r = t._component;
    !ce(r) && !r.render && !r.template && (r.template = s.innerHTML), s.innerHTML = "";
    const o = n(s, !1, Qw(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
  }, t;
};
function Qw(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Zw(e) {
  return Ge(e) ? document.querySelector(e) : e;
}
/*!
 * shared v9.13.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
const so = typeof window < "u", Qn = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), e1 = (e, t, n) => t1({ l: e, k: t, s: n }), t1 = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ye = (e) => typeof e == "number" && isFinite(e), n1 = (e) => yg(e) === "[object Date]", ro = (e) => yg(e) === "[object RegExp]", Yo = (e) => ge(e) && Object.keys(e).length === 0, nt = Object.assign;
let zf;
const Dc = () => zf || (zf = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Gf(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const i1 = Object.prototype.hasOwnProperty;
function oo(e, t) {
  return i1.call(e, t);
}
const He = Array.isArray, Be = (e) => typeof e == "function", ee = (e) => typeof e == "string", Re = (e) => typeof e == "boolean", ve = (e) => e !== null && typeof e == "object", s1 = (e) => ve(e) && Be(e.then) && Be(e.catch), mg = Object.prototype.toString, yg = (e) => mg.call(e), ge = (e) => {
  if (!ve(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, r1 = (e) => e == null ? "" : He(e) || ge(e) && e.toString === mg ? JSON.stringify(e, null, 2) : String(e);
function o1(e, t = "") {
  return e.reduce((n, i, s) => s === 0 ? n + i : n + t + i, "");
}
function Xo(e) {
  let t = e;
  return () => ++t;
}
function a1(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const vr = (e) => !ve(e) || He(e);
function Ur(e, t) {
  if (vr(e) || vr(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: i, des: s } = n.pop();
    Object.keys(i).forEach((r) => {
      vr(i[r]) || vr(s[r]) ? s[r] = i[r] : n.push({ src: i[r], des: s[r] });
    });
  }
}
/*!
 * message-compiler v9.13.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
function l1(e, t, n) {
  return { line: e, column: t, offset: n };
}
function ao(e, t, n) {
  return { start: e, end: t };
}
const c1 = /\{([0-9a-zA-Z]+)\}/g;
function bg(e, ...t) {
  return t.length === 1 && u1(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(c1, (n, i) => t.hasOwnProperty(i) ? t[i] : "");
}
const wg = Object.assign, Hf = (e) => typeof e == "string", u1 = (e) => e !== null && typeof e == "object";
function vg(e, t = "") {
  return e.reduce((n, i, s) => s === 0 ? n + i : n + t + i, "");
}
const Rc = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2
}, f1 = {
  [Rc.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
};
function h1(e, t, ...n) {
  const i = bg(f1[e], ...n || []), s = { message: String(i), code: e };
  return t && (s.location = t), s;
}
const re = {
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
}, d1 = {
  // tokenizer error messages
  [re.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [re.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [re.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [re.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [re.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [re.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [re.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [re.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [re.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [re.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [re.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [re.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [re.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [re.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [re.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [re.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function ls(e, t, n = {}) {
  const { domain: i, messages: s, args: r } = n, o = bg((s || d1)[e] || "", ...r || []), a = new SyntaxError(String(o));
  return a.code = e, t && (a.location = t), a.domain = i, a;
}
function p1(e) {
  throw e;
}
const pn = " ", g1 = "\r", ot = `
`, m1 = "\u2028", y1 = "\u2029";
function b1(e) {
  const t = e;
  let n = 0, i = 1, s = 1, r = 0;
  const o = (P) => t[P] === g1 && t[P + 1] === ot, a = (P) => t[P] === ot, l = (P) => t[P] === y1, u = (P) => t[P] === m1, c = (P) => o(P) || a(P) || l(P) || u(P), f = () => n, h = () => i, d = () => s, p = () => r, y = (P) => o(P) || l(P) || u(P) ? ot : t[P], w = () => y(n), S = () => y(n + r);
  function k() {
    return r = 0, c(n) && (i++, s = 0), o(n) && n++, n++, s++, t[n];
  }
  function b() {
    return o(n + r) && r++, r++, t[n + r];
  }
  function C() {
    n = 0, i = 1, s = 1, r = 0;
  }
  function A(P = 0) {
    r = P;
  }
  function I() {
    const P = n + r;
    for (; P !== n; )
      k();
    r = 0;
  }
  return {
    index: f,
    line: h,
    column: d,
    peekOffset: p,
    charAt: y,
    currentChar: w,
    currentPeek: S,
    next: k,
    peek: b,
    reset: C,
    resetPeek: A,
    skipToPeek: I
  };
}
const In = void 0, w1 = ".", Kf = "'", v1 = "tokenizer";
function _1(e, t = {}) {
  const n = t.location !== !1, i = b1(e), s = () => i.index(), r = () => l1(i.line(), i.column(), i.index()), o = r(), a = s(), l = {
    currentType: 14,
    offset: a,
    startLoc: o,
    endLoc: o,
    lastType: 14,
    lastOffset: a,
    lastStartLoc: o,
    lastEndLoc: o,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, u = () => l, { onError: c } = t;
  function f(m, v, T, ...B) {
    const K = u();
    if (v.column += T, v.offset += T, c) {
      const U = n ? ao(K.startLoc, v) : null, M = ls(m, U, {
        domain: v1,
        args: B
      });
      c(M);
    }
  }
  function h(m, v, T) {
    m.endLoc = r(), m.currentType = v;
    const B = { type: v };
    return n && (B.loc = ao(m.startLoc, m.endLoc)), T != null && (B.value = T), B;
  }
  const d = (m) => h(
    m,
    14
    /* TokenTypes.EOF */
  );
  function p(m, v) {
    return m.currentChar() === v ? (m.next(), v) : (f(re.EXPECTED_TOKEN, r(), 0, v), "");
  }
  function y(m) {
    let v = "";
    for (; m.currentPeek() === pn || m.currentPeek() === ot; )
      v += m.currentPeek(), m.peek();
    return v;
  }
  function w(m) {
    const v = y(m);
    return m.skipToPeek(), v;
  }
  function S(m) {
    if (m === In)
      return !1;
    const v = m.charCodeAt(0);
    return v >= 97 && v <= 122 || // a-z
    v >= 65 && v <= 90 || // A-Z
    v === 95;
  }
  function k(m) {
    if (m === In)
      return !1;
    const v = m.charCodeAt(0);
    return v >= 48 && v <= 57;
  }
  function b(m, v) {
    const { currentType: T } = v;
    if (T !== 2)
      return !1;
    y(m);
    const B = S(m.currentPeek());
    return m.resetPeek(), B;
  }
  function C(m, v) {
    const { currentType: T } = v;
    if (T !== 2)
      return !1;
    y(m);
    const B = m.currentPeek() === "-" ? m.peek() : m.currentPeek(), K = k(B);
    return m.resetPeek(), K;
  }
  function A(m, v) {
    const { currentType: T } = v;
    if (T !== 2)
      return !1;
    y(m);
    const B = m.currentPeek() === Kf;
    return m.resetPeek(), B;
  }
  function I(m, v) {
    const { currentType: T } = v;
    if (T !== 8)
      return !1;
    y(m);
    const B = m.currentPeek() === ".";
    return m.resetPeek(), B;
  }
  function P(m, v) {
    const { currentType: T } = v;
    if (T !== 9)
      return !1;
    y(m);
    const B = S(m.currentPeek());
    return m.resetPeek(), B;
  }
  function D(m, v) {
    const { currentType: T } = v;
    if (!(T === 8 || T === 12))
      return !1;
    y(m);
    const B = m.currentPeek() === ":";
    return m.resetPeek(), B;
  }
  function W(m, v) {
    const { currentType: T } = v;
    if (T !== 10)
      return !1;
    const B = () => {
      const U = m.currentPeek();
      return U === "{" ? S(m.peek()) : U === "@" || U === "%" || U === "|" || U === ":" || U === "." || U === pn || !U ? !1 : U === ot ? (m.peek(), B()) : X(m, !1);
    }, K = B();
    return m.resetPeek(), K;
  }
  function G(m) {
    y(m);
    const v = m.currentPeek() === "|";
    return m.resetPeek(), v;
  }
  function z(m) {
    const v = y(m), T = m.currentPeek() === "%" && m.peek() === "{";
    return m.resetPeek(), {
      isModulo: T,
      hasSpace: v.length > 0
    };
  }
  function X(m, v = !0) {
    const T = (K = !1, U = "", M = !1) => {
      const R = m.currentPeek();
      return R === "{" ? U === "%" ? !1 : K : R === "@" || !R ? U === "%" ? !0 : K : R === "%" ? (m.peek(), T(K, "%", !0)) : R === "|" ? U === "%" || M ? !0 : !(U === pn || U === ot) : R === pn ? (m.peek(), T(!0, pn, M)) : R === ot ? (m.peek(), T(!0, ot, M)) : !0;
    }, B = T();
    return v && m.resetPeek(), B;
  }
  function H(m, v) {
    const T = m.currentChar();
    return T === In ? In : v(T) ? (m.next(), T) : null;
  }
  function le(m) {
    const v = m.charCodeAt(0);
    return v >= 97 && v <= 122 || // a-z
    v >= 65 && v <= 90 || // A-Z
    v >= 48 && v <= 57 || // 0-9
    v === 95 || // _
    v === 36;
  }
  function Xe(m) {
    return H(m, le);
  }
  function xe(m) {
    const v = m.charCodeAt(0);
    return v >= 97 && v <= 122 || // a-z
    v >= 65 && v <= 90 || // A-Z
    v >= 48 && v <= 57 || // 0-9
    v === 95 || // _
    v === 36 || // $
    v === 45;
  }
  function de(m) {
    return H(m, xe);
  }
  function ue(m) {
    const v = m.charCodeAt(0);
    return v >= 48 && v <= 57;
  }
  function Te(m) {
    return H(m, ue);
  }
  function yt(m) {
    const v = m.charCodeAt(0);
    return v >= 48 && v <= 57 || // 0-9
    v >= 65 && v <= 70 || // A-F
    v >= 97 && v <= 102;
  }
  function Fe(m) {
    return H(m, yt);
  }
  function je(m) {
    let v = "", T = "";
    for (; v = Te(m); )
      T += v;
    return T;
  }
  function Gt(m) {
    w(m);
    const v = m.currentChar();
    return v !== "%" && f(re.EXPECTED_TOKEN, r(), 0, v), m.next(), "%";
  }
  function Ht(m) {
    let v = "";
    for (; ; ) {
      const T = m.currentChar();
      if (T === "{" || T === "}" || T === "@" || T === "|" || !T)
        break;
      if (T === "%")
        if (X(m))
          v += T, m.next();
        else
          break;
      else if (T === pn || T === ot)
        if (X(m))
          v += T, m.next();
        else {
          if (G(m))
            break;
          v += T, m.next();
        }
      else
        v += T, m.next();
    }
    return v;
  }
  function st(m) {
    w(m);
    let v = "", T = "";
    for (; v = de(m); )
      T += v;
    return m.currentChar() === In && f(re.UNTERMINATED_CLOSING_BRACE, r(), 0), T;
  }
  function bt(m) {
    w(m);
    let v = "";
    return m.currentChar() === "-" ? (m.next(), v += `-${je(m)}`) : v += je(m), m.currentChar() === In && f(re.UNTERMINATED_CLOSING_BRACE, r(), 0), v;
  }
  function Ft(m) {
    return m !== Kf && m !== ot;
  }
  function $t(m) {
    w(m), p(m, "'");
    let v = "", T = "";
    for (; v = H(m, Ft); )
      v === "\\" ? T += Kt(m) : T += v;
    const B = m.currentChar();
    return B === ot || B === In ? (f(re.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, r(), 0), B === ot && (m.next(), p(m, "'")), T) : (p(m, "'"), T);
  }
  function Kt(m) {
    const v = m.currentChar();
    switch (v) {
      case "\\":
      case "'":
        return m.next(), `\\${v}`;
      case "u":
        return wt(m, v, 4);
      case "U":
        return wt(m, v, 6);
      default:
        return f(re.UNKNOWN_ESCAPE_SEQUENCE, r(), 0, v), "";
    }
  }
  function wt(m, v, T) {
    p(m, v);
    let B = "";
    for (let K = 0; K < T; K++) {
      const U = Fe(m);
      if (!U) {
        f(re.INVALID_UNICODE_ESCAPE_SEQUENCE, r(), 0, `\\${v}${B}${m.currentChar()}`);
        break;
      }
      B += U;
    }
    return `\\${v}${B}`;
  }
  function dn(m) {
    return m !== "{" && m !== "}" && m !== pn && m !== ot;
  }
  function Ni(m) {
    w(m);
    let v = "", T = "";
    for (; v = H(m, dn); )
      T += v;
    return T;
  }
  function E(m) {
    let v = "", T = "";
    for (; v = Xe(m); )
      T += v;
    return T;
  }
  function O(m) {
    const v = (T) => {
      const B = m.currentChar();
      return B === "{" || B === "%" || B === "@" || B === "|" || B === "(" || B === ")" || !B || B === pn ? T : (T += B, m.next(), v(T));
    };
    return v("");
  }
  function F(m) {
    w(m);
    const v = p(
      m,
      "|"
      /* TokenChars.Pipe */
    );
    return w(m), v;
  }
  function q(m, v) {
    let T = null;
    switch (m.currentChar()) {
      case "{":
        return v.braceNest >= 1 && f(re.NOT_ALLOW_NEST_PLACEHOLDER, r(), 0), m.next(), T = h(
          v,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), w(m), v.braceNest++, T;
      case "}":
        return v.braceNest > 0 && v.currentType === 2 && f(re.EMPTY_PLACEHOLDER, r(), 0), m.next(), T = h(
          v,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), v.braceNest--, v.braceNest > 0 && w(m), v.inLinked && v.braceNest === 0 && (v.inLinked = !1), T;
      case "@":
        return v.braceNest > 0 && f(re.UNTERMINATED_CLOSING_BRACE, r(), 0), T = j(m, v) || d(v), v.braceNest = 0, T;
      default: {
        let K = !0, U = !0, M = !0;
        if (G(m))
          return v.braceNest > 0 && f(re.UNTERMINATED_CLOSING_BRACE, r(), 0), T = h(v, 1, F(m)), v.braceNest = 0, v.inLinked = !1, T;
        if (v.braceNest > 0 && (v.currentType === 5 || v.currentType === 6 || v.currentType === 7))
          return f(re.UNTERMINATED_CLOSING_BRACE, r(), 0), v.braceNest = 0, V(m, v);
        if (K = b(m, v))
          return T = h(v, 5, st(m)), w(m), T;
        if (U = C(m, v))
          return T = h(v, 6, bt(m)), w(m), T;
        if (M = A(m, v))
          return T = h(v, 7, $t(m)), w(m), T;
        if (!K && !U && !M)
          return T = h(v, 13, Ni(m)), f(re.INVALID_TOKEN_IN_PLACEHOLDER, r(), 0, T.value), w(m), T;
        break;
      }
    }
    return T;
  }
  function j(m, v) {
    const { currentType: T } = v;
    let B = null;
    const K = m.currentChar();
    switch ((T === 8 || T === 9 || T === 12 || T === 10) && (K === ot || K === pn) && f(re.INVALID_LINKED_FORMAT, r(), 0), K) {
      case "@":
        return m.next(), B = h(
          v,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), v.inLinked = !0, B;
      case ".":
        return w(m), m.next(), h(
          v,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return w(m), m.next(), h(
          v,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return G(m) ? (B = h(v, 1, F(m)), v.braceNest = 0, v.inLinked = !1, B) : I(m, v) || D(m, v) ? (w(m), j(m, v)) : P(m, v) ? (w(m), h(v, 12, E(m))) : W(m, v) ? (w(m), K === "{" ? q(m, v) || B : h(v, 11, O(m))) : (T === 8 && f(re.INVALID_LINKED_FORMAT, r(), 0), v.braceNest = 0, v.inLinked = !1, V(m, v));
    }
  }
  function V(m, v) {
    let T = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (v.braceNest > 0)
      return q(m, v) || d(v);
    if (v.inLinked)
      return j(m, v) || d(v);
    switch (m.currentChar()) {
      case "{":
        return q(m, v) || d(v);
      case "}":
        return f(re.UNBALANCED_CLOSING_BRACE, r(), 0), m.next(), h(
          v,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return j(m, v) || d(v);
      default: {
        if (G(m))
          return T = h(v, 1, F(m)), v.braceNest = 0, v.inLinked = !1, T;
        const { isModulo: K, hasSpace: U } = z(m);
        if (K)
          return U ? h(v, 0, Ht(m)) : h(v, 4, Gt(m));
        if (X(m))
          return h(v, 0, Ht(m));
        break;
      }
    }
    return T;
  }
  function Y() {
    const { currentType: m, offset: v, startLoc: T, endLoc: B } = l;
    return l.lastType = m, l.lastOffset = v, l.lastStartLoc = T, l.lastEndLoc = B, l.offset = s(), l.startLoc = r(), i.currentChar() === In ? h(
      l,
      14
      /* TokenTypes.EOF */
    ) : V(i, l);
  }
  return {
    nextToken: Y,
    currentOffset: s,
    currentPosition: r,
    context: u
  };
}
const x1 = "parser", S1 = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function k1(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const i = parseInt(t || n, 16);
      return i <= 55295 || i >= 57344 ? String.fromCodePoint(i) : "�";
    }
  }
}
function E1(e = {}) {
  const t = e.location !== !1, { onError: n, onWarn: i } = e;
  function s(b, C, A, I, ...P) {
    const D = b.currentPosition();
    if (D.offset += I, D.column += I, n) {
      const W = t ? ao(A, D) : null, G = ls(C, W, {
        domain: x1,
        args: P
      });
      n(G);
    }
  }
  function r(b, C, A, I, ...P) {
    const D = b.currentPosition();
    if (D.offset += I, D.column += I, i) {
      const W = t ? ao(A, D) : null;
      i(h1(C, W, P));
    }
  }
  function o(b, C, A) {
    const I = { type: b };
    return t && (I.start = C, I.end = C, I.loc = { start: A, end: A }), I;
  }
  function a(b, C, A, I) {
    t && (b.end = C, b.loc && (b.loc.end = A));
  }
  function l(b, C) {
    const A = b.context(), I = o(3, A.offset, A.startLoc);
    return I.value = C, a(I, b.currentOffset(), b.currentPosition()), I;
  }
  function u(b, C) {
    const A = b.context(), { lastOffset: I, lastStartLoc: P } = A, D = o(5, I, P);
    return D.index = parseInt(C, 10), b.nextToken(), a(D, b.currentOffset(), b.currentPosition()), D;
  }
  function c(b, C, A) {
    const I = b.context(), { lastOffset: P, lastStartLoc: D } = I, W = o(4, P, D);
    return W.key = C, A === !0 && (W.modulo = !0), b.nextToken(), a(W, b.currentOffset(), b.currentPosition()), W;
  }
  function f(b, C) {
    const A = b.context(), { lastOffset: I, lastStartLoc: P } = A, D = o(9, I, P);
    return D.value = C.replace(S1, k1), b.nextToken(), a(D, b.currentOffset(), b.currentPosition()), D;
  }
  function h(b) {
    const C = b.nextToken(), A = b.context(), { lastOffset: I, lastStartLoc: P } = A, D = o(8, I, P);
    return C.type !== 12 ? (s(b, re.UNEXPECTED_EMPTY_LINKED_MODIFIER, A.lastStartLoc, 0), D.value = "", a(D, I, P), {
      nextConsumeToken: C,
      node: D
    }) : (C.value == null && s(b, re.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, Bt(C)), D.value = C.value || "", a(D, b.currentOffset(), b.currentPosition()), {
      node: D
    });
  }
  function d(b, C) {
    const A = b.context(), I = o(7, A.offset, A.startLoc);
    return I.value = C, a(I, b.currentOffset(), b.currentPosition()), I;
  }
  function p(b) {
    const C = b.context(), A = o(6, C.offset, C.startLoc);
    let I = b.nextToken();
    if (I.type === 9) {
      const P = h(b);
      A.modifier = P.node, I = P.nextConsumeToken || b.nextToken();
    }
    switch (I.type !== 10 && s(b, re.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Bt(I)), I = b.nextToken(), I.type === 2 && (I = b.nextToken()), I.type) {
      case 11:
        I.value == null && s(b, re.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Bt(I)), A.key = d(b, I.value || "");
        break;
      case 5:
        I.value == null && s(b, re.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Bt(I)), A.key = c(b, I.value || "");
        break;
      case 6:
        I.value == null && s(b, re.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Bt(I)), A.key = u(b, I.value || "");
        break;
      case 7:
        I.value == null && s(b, re.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Bt(I)), A.key = f(b, I.value || "");
        break;
      default: {
        s(b, re.UNEXPECTED_EMPTY_LINKED_KEY, C.lastStartLoc, 0);
        const P = b.context(), D = o(7, P.offset, P.startLoc);
        return D.value = "", a(D, P.offset, P.startLoc), A.key = D, a(A, P.offset, P.startLoc), {
          nextConsumeToken: I,
          node: A
        };
      }
    }
    return a(A, b.currentOffset(), b.currentPosition()), {
      node: A
    };
  }
  function y(b) {
    const C = b.context(), A = C.currentType === 1 ? b.currentOffset() : C.offset, I = C.currentType === 1 ? C.endLoc : C.startLoc, P = o(2, A, I);
    P.items = [];
    let D = null, W = null;
    do {
      const X = D || b.nextToken();
      switch (D = null, X.type) {
        case 0:
          X.value == null && s(b, re.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Bt(X)), P.items.push(l(b, X.value || ""));
          break;
        case 6:
          X.value == null && s(b, re.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Bt(X)), P.items.push(u(b, X.value || ""));
          break;
        case 4:
          W = !0;
          break;
        case 5:
          X.value == null && s(b, re.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Bt(X)), P.items.push(c(b, X.value || "", !!W)), W && (r(b, Rc.USE_MODULO_SYNTAX, C.lastStartLoc, 0, Bt(X)), W = null);
          break;
        case 7:
          X.value == null && s(b, re.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Bt(X)), P.items.push(f(b, X.value || ""));
          break;
        case 8: {
          const H = p(b);
          P.items.push(H.node), D = H.nextConsumeToken || null;
          break;
        }
      }
    } while (C.currentType !== 14 && C.currentType !== 1);
    const G = C.currentType === 1 ? C.lastOffset : b.currentOffset(), z = C.currentType === 1 ? C.lastEndLoc : b.currentPosition();
    return a(P, G, z), P;
  }
  function w(b, C, A, I) {
    const P = b.context();
    let D = I.items.length === 0;
    const W = o(1, C, A);
    W.cases = [], W.cases.push(I);
    do {
      const G = y(b);
      D || (D = G.items.length === 0), W.cases.push(G);
    } while (P.currentType !== 14);
    return D && s(b, re.MUST_HAVE_MESSAGES_IN_PLURAL, A, 0), a(W, b.currentOffset(), b.currentPosition()), W;
  }
  function S(b) {
    const C = b.context(), { offset: A, startLoc: I } = C, P = y(b);
    return C.currentType === 14 ? P : w(b, A, I, P);
  }
  function k(b) {
    const C = _1(b, wg({}, e)), A = C.context(), I = o(0, A.offset, A.startLoc);
    return t && I.loc && (I.loc.source = b), I.body = S(C), e.onCacheKey && (I.cacheKey = e.onCacheKey(b)), A.currentType !== 14 && s(C, re.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, b[A.offset] || ""), a(I, C.currentOffset(), C.currentPosition()), I;
  }
  return { parse: k };
}
function Bt(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function C1(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (r) => (n.helpers.add(r), r) };
}
function Yf(e, t) {
  for (let n = 0; n < e.length; n++)
    Fc(e[n], t);
}
function Fc(e, t) {
  switch (e.type) {
    case 1:
      Yf(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Yf(e.items, t);
      break;
    case 6: {
      Fc(e.key, t), t.helper(
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
function T1(e, t = {}) {
  const n = C1(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Fc(e.body, n);
  const i = n.context();
  e.helpers = Array.from(i.helpers);
}
function A1(e) {
  const t = e.body;
  return t.type === 2 ? Xf(t) : t.cases.forEach((n) => Xf(n)), e;
}
function Xf(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const i = e.items[n];
      if (!(i.type === 3 || i.type === 9) || i.value == null)
        break;
      t.push(i.value);
    }
    if (t.length === e.items.length) {
      e.static = vg(t);
      for (let n = 0; n < e.items.length; n++) {
        const i = e.items[n];
        (i.type === 3 || i.type === 9) && delete i.value;
      }
    }
  }
}
const O1 = "minifier";
function Li(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Li(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let i = 0; i < n.length; i++)
        Li(n[i]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let i = 0; i < n.length; i++)
        Li(n[i]);
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
      Li(t.key), t.k = t.key, delete t.key, t.modifier && (Li(t.modifier), t.m = t.modifier, delete t.modifier);
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
      throw ls(re.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: O1,
        args: [e.type]
      });
  }
  delete e.type;
}
const P1 = "parser";
function N1(e, t) {
  const { sourceMap: n, filename: i, breakLineCode: s, needIndent: r } = t, o = t.location !== !1, a = {
    filename: i,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: s,
    needIndent: r,
    indentLevel: 0
  };
  o && e.loc && (a.source = e.loc.source);
  const l = () => a;
  function u(w, S) {
    a.code += w;
  }
  function c(w, S = !0) {
    const k = S ? s : "";
    u(r ? k + "  ".repeat(w) : k);
  }
  function f(w = !0) {
    const S = ++a.indentLevel;
    w && c(S);
  }
  function h(w = !0) {
    const S = --a.indentLevel;
    w && c(S);
  }
  function d() {
    c(a.indentLevel);
  }
  return {
    context: l,
    push: u,
    indent: f,
    deindent: h,
    newline: d,
    helper: (w) => `_${w}`,
    needIndent: () => a.needIndent
  };
}
function I1(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Xi(e, t.key), t.modifier ? (e.push(", "), Xi(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function M1(e, t) {
  const { helper: n, needIndent: i } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(i());
  const s = t.items.length;
  for (let r = 0; r < s && (Xi(e, t.items[r]), r !== s - 1); r++)
    e.push(", ");
  e.deindent(i()), e.push("])");
}
function L1(e, t) {
  const { helper: n, needIndent: i } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(i());
    const s = t.cases.length;
    for (let r = 0; r < s && (Xi(e, t.cases[r]), r !== s - 1); r++)
      e.push(", ");
    e.deindent(i()), e.push("])");
  }
}
function D1(e, t) {
  t.body ? Xi(e, t.body) : e.push("null");
}
function Xi(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      D1(e, t);
      break;
    case 1:
      L1(e, t);
      break;
    case 2:
      M1(e, t);
      break;
    case 6:
      I1(e, t);
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
      throw ls(re.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: P1,
        args: [t.type]
      });
  }
}
const R1 = (e, t = {}) => {
  const n = Hf(t.mode) ? t.mode : "normal", i = Hf(t.filename) ? t.filename : "message.intl", s = !!t.sourceMap, r = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, o = t.needIndent ? t.needIndent : n !== "arrow", a = e.helpers || [], l = N1(e, {
    mode: n,
    filename: i,
    sourceMap: s,
    breakLineCode: r,
    needIndent: o
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(o), a.length > 0 && (l.push(`const { ${vg(a.map((f) => `${f}: _${f}`), ", ")} } = ctx`), l.newline()), l.push("return "), Xi(l, e), l.deindent(o), l.push("}"), delete e.helpers;
  const { code: u, map: c } = l.context();
  return {
    ast: e,
    code: u,
    map: c ? c.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function F1(e, t = {}) {
  const n = wg({}, t), i = !!n.jit, s = !!n.minify, r = n.optimize == null ? !0 : n.optimize, a = E1(n).parse(e);
  return i ? (r && A1(a), s && Li(a), { ast: a, code: "" }) : (T1(a, n), R1(a, n));
}
/*!
 * core-base v9.13.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
function $1() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Dc().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Zn = [];
Zn[
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
Zn[
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
Zn[
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
Zn[
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
Zn[
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
Zn[
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
Zn[
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
const B1 = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function j1(e) {
  return B1.test(e);
}
function q1(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function U1(e) {
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
function W1(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : j1(t) ? q1(t) : "*" + t;
}
function V1(e) {
  const t = [];
  let n = -1, i = 0, s = 0, r, o, a, l, u, c, f;
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
    o !== void 0 && (t.push(o), o = void 0);
  }, h[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    h[
      0
      /* Actions.APPEND */
    ](), s++;
  }, h[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (s > 0)
      s--, i = 4, h[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (s = 0, o === void 0 || (o = W1(o), o === !1))
        return !1;
      h[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function d() {
    const p = e[n + 1];
    if (i === 5 && p === "'" || i === 6 && p === '"')
      return n++, a = "\\" + p, h[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; i !== null; )
    if (n++, r = e[n], !(r === "\\" && d())) {
      if (l = U1(r), f = Zn[i], u = f[l] || f.l || 8, u === 8 || (i = u[0], u[1] !== void 0 && (c = h[u[1]], c && (a = r, c() === !1))))
        return;
      if (i === 7)
        return t;
    }
}
const Jf = /* @__PURE__ */ new Map();
function z1(e, t) {
  return ve(e) ? e[t] : null;
}
function G1(e, t) {
  if (!ve(e))
    return null;
  let n = Jf.get(t);
  if (n || (n = V1(t), n && Jf.set(t, n)), !n)
    return null;
  const i = n.length;
  let s = e, r = 0;
  for (; r < i; ) {
    const o = s[n[r]];
    if (o === void 0 || Be(s))
      return null;
    s = o, r++;
  }
  return s;
}
const H1 = (e) => e, K1 = (e) => "", Y1 = "text", X1 = (e) => e.length === 0 ? "" : o1(e), J1 = r1;
function Qf(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Q1(e) {
  const t = Ye(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ye(e.named.count) || Ye(e.named.n)) ? Ye(e.named.count) ? e.named.count : Ye(e.named.n) ? e.named.n : t : t;
}
function Z1(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function ev(e = {}) {
  const t = e.locale, n = Q1(e), i = ve(e.pluralRules) && ee(t) && Be(e.pluralRules[t]) ? e.pluralRules[t] : Qf, s = ve(e.pluralRules) && ee(t) && Be(e.pluralRules[t]) ? Qf : void 0, r = (S) => S[i(n, S.length, s)], o = e.list || [], a = (S) => o[S], l = e.named || {};
  Ye(e.pluralIndex) && Z1(n, l);
  const u = (S) => l[S];
  function c(S) {
    const k = Be(e.messages) ? e.messages(S) : ve(e.messages) ? e.messages[S] : !1;
    return k || (e.parent ? e.parent.message(S) : K1);
  }
  const f = (S) => e.modifiers ? e.modifiers[S] : H1, h = ge(e.processor) && Be(e.processor.normalize) ? e.processor.normalize : X1, d = ge(e.processor) && Be(e.processor.interpolate) ? e.processor.interpolate : J1, p = ge(e.processor) && ee(e.processor.type) ? e.processor.type : Y1, w = {
    list: a,
    named: u,
    plural: r,
    linked: (S, ...k) => {
      const [b, C] = k;
      let A = "text", I = "";
      k.length === 1 ? ve(b) ? (I = b.modifier || I, A = b.type || A) : ee(b) && (I = b || I) : k.length === 2 && (ee(b) && (I = b || I), ee(C) && (A = C || A));
      const P = c(S)(w), D = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        A === "vnode" && He(P) && I ? P[0] : P
      );
      return I ? f(I)(D, A) : D;
    },
    message: c,
    type: p,
    interpolate: d,
    normalize: h,
    values: nt({}, o, l)
  };
  return w;
}
let Vs = null;
function tv(e) {
  Vs = e;
}
function nv(e, t, n) {
  Vs && Vs.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const iv = /* @__PURE__ */ sv(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function sv(e) {
  return (t) => Vs && Vs.emit(e, t);
}
const _g = Rc.__EXTEND_POINT__, si = Xo(_g), rv = {
  NOT_FOUND_KEY: _g,
  // 2
  FALLBACK_TO_TRANSLATE: si(),
  // 3
  CANNOT_FORMAT_NUMBER: si(),
  // 4
  FALLBACK_TO_NUMBER_FORMAT: si(),
  // 5
  CANNOT_FORMAT_DATE: si(),
  // 6
  FALLBACK_TO_DATE_FORMAT: si(),
  // 7
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: si(),
  // 8
  __EXTEND_POINT__: si()
  // 9
}, xg = re.__EXTEND_POINT__, ri = Xo(xg), nn = {
  INVALID_ARGUMENT: xg,
  // 17
  INVALID_DATE_ARGUMENT: ri(),
  // 18
  INVALID_ISO_DATE_ARGUMENT: ri(),
  // 19
  NOT_SUPPORT_NON_STRING_MESSAGE: ri(),
  // 20
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: ri(),
  // 21
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: ri(),
  // 22
  NOT_SUPPORT_LOCALE_TYPE: ri(),
  // 23
  __EXTEND_POINT__: ri()
  // 24
};
function _n(e) {
  return ls(e, null, void 0);
}
function $c(e, t) {
  return t.locale != null ? Zf(t.locale) : Zf(e.locale);
}
let Na;
function Zf(e) {
  if (ee(e))
    return e;
  if (Be(e)) {
    if (e.resolvedOnce && Na != null)
      return Na;
    if (e.constructor.name === "Function") {
      const t = e();
      if (s1(t))
        throw _n(nn.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Na = t;
    } else
      throw _n(nn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw _n(nn.NOT_SUPPORT_LOCALE_TYPE);
}
function ov(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...He(t) ? t : ve(t) ? Object.keys(t) : ee(t) ? [t] : [n]
  ])];
}
function Sg(e, t, n) {
  const i = ee(n) ? n : lo, s = e;
  s.__localeChainCache || (s.__localeChainCache = /* @__PURE__ */ new Map());
  let r = s.__localeChainCache.get(i);
  if (!r) {
    r = [];
    let o = [n];
    for (; He(o); )
      o = eh(r, o, t);
    const a = He(t) || !ge(t) ? t : t.default ? t.default : null;
    o = ee(a) ? [a] : a, He(o) && eh(r, o, !1), s.__localeChainCache.set(i, r);
  }
  return r;
}
function eh(e, t, n) {
  let i = !0;
  for (let s = 0; s < t.length && Re(i); s++) {
    const r = t[s];
    ee(r) && (i = av(e, t[s], n));
  }
  return i;
}
function av(e, t, n) {
  let i;
  const s = t.split("-");
  do {
    const r = s.join("-");
    i = lv(e, r, n), s.splice(-1, 1);
  } while (s.length && i === !0);
  return i;
}
function lv(e, t, n) {
  let i = !1;
  if (!e.includes(t) && (i = !0, t)) {
    i = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (He(n) || ge(n)) && n[s] && (i = n[s]);
  }
  return i;
}
const cv = "9.13.1", Jo = -1, lo = "en-US", th = "", nh = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function uv() {
  return {
    upper: (e, t) => t === "text" && ee(e) ? e.toUpperCase() : t === "vnode" && ve(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && ee(e) ? e.toLowerCase() : t === "vnode" && ve(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && ee(e) ? nh(e) : t === "vnode" && ve(e) && "__v_isVNode" in e ? nh(e.children) : e
  };
}
let kg;
function fv(e) {
  kg = e;
}
let Eg;
function hv(e) {
  Eg = e;
}
let Cg;
function dv(e) {
  Cg = e;
}
let Tg = null;
const pv = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  Tg = e;
}, gv = /* @__NO_SIDE_EFFECTS__ */ () => Tg;
let Ag = null;
const ih = (e) => {
  Ag = e;
}, mv = () => Ag;
let sh = 0;
function yv(e = {}) {
  const t = Be(e.onWarn) ? e.onWarn : a1, n = ee(e.version) ? e.version : cv, i = ee(e.locale) || Be(e.locale) ? e.locale : lo, s = Be(i) ? lo : i, r = He(e.fallbackLocale) || ge(e.fallbackLocale) || ee(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s, o = ge(e.messages) ? e.messages : { [s]: {} }, a = ge(e.datetimeFormats) ? e.datetimeFormats : { [s]: {} }, l = ge(e.numberFormats) ? e.numberFormats : { [s]: {} }, u = nt({}, e.modifiers || {}, uv()), c = e.pluralRules || {}, f = Be(e.missing) ? e.missing : null, h = Re(e.missingWarn) || ro(e.missingWarn) ? e.missingWarn : !0, d = Re(e.fallbackWarn) || ro(e.fallbackWarn) ? e.fallbackWarn : !0, p = !!e.fallbackFormat, y = !!e.unresolving, w = Be(e.postTranslation) ? e.postTranslation : null, S = ge(e.processor) ? e.processor : null, k = Re(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, b = !!e.escapeParameter, C = Be(e.messageCompiler) ? e.messageCompiler : kg, A = Be(e.messageResolver) ? e.messageResolver : Eg || z1, I = Be(e.localeFallbacker) ? e.localeFallbacker : Cg || ov, P = ve(e.fallbackContext) ? e.fallbackContext : void 0, D = e, W = ve(D.__datetimeFormatters) ? D.__datetimeFormatters : /* @__PURE__ */ new Map(), G = ve(D.__numberFormatters) ? D.__numberFormatters : /* @__PURE__ */ new Map(), z = ve(D.__meta) ? D.__meta : {};
  sh++;
  const X = {
    version: n,
    cid: sh,
    locale: i,
    fallbackLocale: r,
    messages: o,
    modifiers: u,
    pluralRules: c,
    missing: f,
    missingWarn: h,
    fallbackWarn: d,
    fallbackFormat: p,
    unresolving: y,
    postTranslation: w,
    processor: S,
    warnHtmlMessage: k,
    escapeParameter: b,
    messageCompiler: C,
    messageResolver: A,
    localeFallbacker: I,
    fallbackContext: P,
    onWarn: t,
    __meta: z
  };
  return X.datetimeFormats = a, X.numberFormats = l, X.__datetimeFormatters = W, X.__numberFormatters = G, __INTLIFY_PROD_DEVTOOLS__ && nv(X, n, z), X;
}
function Bc(e, t, n, i, s) {
  const { missing: r, onWarn: o } = e;
  if (r !== null) {
    const a = r(e, n, t, s);
    return ee(a) ? a : t;
  } else
    return t;
}
function ms(e, t, n) {
  const i = e;
  i.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function bv(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function wv(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let i = n + 1; i < t.length; i++)
    if (bv(e, t[i]))
      return !0;
  return !1;
}
function Ia(e) {
  return (n) => vv(n, e);
}
function vv(e, t) {
  const n = t.b || t.body;
  if ((n.t || n.type) === 1) {
    const i = n, s = i.c || i.cases;
    return e.plural(s.reduce((r, o) => [
      ...r,
      rh(e, o)
    ], []));
  } else
    return rh(e, n);
}
function rh(e, t) {
  const n = t.s || t.static;
  if (n)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const i = (t.i || t.items).reduce((s, r) => [...s, hl(e, r)], []);
    return e.normalize(i);
  }
}
function hl(e, t) {
  const n = t.t || t.type;
  switch (n) {
    case 3: {
      const i = t;
      return i.v || i.value;
    }
    case 9: {
      const i = t;
      return i.v || i.value;
    }
    case 4: {
      const i = t;
      return e.interpolate(e.named(i.k || i.key));
    }
    case 5: {
      const i = t;
      return e.interpolate(e.list(i.i != null ? i.i : i.index));
    }
    case 6: {
      const i = t, s = i.m || i.modifier;
      return e.linked(hl(e, i.k || i.key), s ? hl(e, s) : void 0, e.type);
    }
    case 7: {
      const i = t;
      return i.v || i.value;
    }
    case 8: {
      const i = t;
      return i.v || i.value;
    }
    default:
      throw new Error(`unhandled node type on format message part: ${n}`);
  }
}
const _v = (e) => e;
let _r = /* @__PURE__ */ Object.create(null);
const Ji = (e) => ve(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e);
function xv(e, t = {}) {
  let n = !1;
  const i = t.onError || p1;
  return t.onError = (s) => {
    n = !0, i(s);
  }, { ...F1(e, t), detectError: n };
}
function Sv(e, t) {
  if (ee(e)) {
    Re(t.warnHtmlMessage) && t.warnHtmlMessage;
    const i = (t.onCacheKey || _v)(e), s = _r[i];
    if (s)
      return s;
    const { ast: r, detectError: o } = xv(e, {
      ...t,
      location: !1,
      jit: !0
    }), a = Ia(r);
    return o ? a : _r[i] = a;
  } else {
    const n = e.cacheKey;
    if (n) {
      const i = _r[n];
      return i || (_r[n] = Ia(e));
    } else
      return Ia(e);
  }
}
const oh = () => "", Nt = (e) => Be(e);
function ah(e, ...t) {
  const { fallbackFormat: n, postTranslation: i, unresolving: s, messageCompiler: r, fallbackLocale: o, messages: a } = e, [l, u] = dl(...t), c = Re(u.missingWarn) ? u.missingWarn : e.missingWarn, f = Re(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, h = Re(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, d = !!u.resolvedMessage, p = ee(u.default) || Re(u.default) ? Re(u.default) ? r ? l : () => l : u.default : n ? r ? l : () => l : "", y = n || p !== "", w = $c(e, u);
  h && kv(u);
  let [S, k, b] = d ? [
    l,
    w,
    a[w] || {}
  ] : Og(e, l, w, o, f, c), C = S, A = l;
  if (!d && !(ee(C) || Ji(C) || Nt(C)) && y && (C = p, A = C), !d && (!(ee(C) || Ji(C) || Nt(C)) || !ee(k)))
    return s ? Jo : l;
  let I = !1;
  const P = () => {
    I = !0;
  }, D = Nt(C) ? C : Pg(e, l, k, C, A, P);
  if (I)
    return C;
  const W = Tv(e, k, b, u), G = ev(W), z = Ev(e, D, G), X = i ? i(z, l) : z;
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const H = {
      timestamp: Date.now(),
      key: ee(l) ? l : Nt(C) ? C.key : "",
      locale: k || (Nt(C) ? C.locale : ""),
      format: ee(C) ? C : Nt(C) ? C.source : "",
      message: X
    };
    H.meta = nt({}, e.__meta, /* @__PURE__ */ gv() || {}), iv(H);
  }
  return X;
}
function kv(e) {
  He(e.list) ? e.list = e.list.map((t) => ee(t) ? Gf(t) : t) : ve(e.named) && Object.keys(e.named).forEach((t) => {
    ee(e.named[t]) && (e.named[t] = Gf(e.named[t]));
  });
}
function Og(e, t, n, i, s, r) {
  const { messages: o, onWarn: a, messageResolver: l, localeFallbacker: u } = e, c = u(e, i, n);
  let f = {}, h, d = null;
  const p = "translate";
  for (let y = 0; y < c.length && (h = c[y], f = o[h] || {}, (d = l(f, t)) === null && (d = f[t]), !(ee(d) || Ji(d) || Nt(d))); y++)
    if (!wv(h, c)) {
      const w = Bc(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        h,
        r,
        p
      );
      w !== t && (d = w);
    }
  return [d, h, f];
}
function Pg(e, t, n, i, s, r) {
  const { messageCompiler: o, warnHtmlMessage: a } = e;
  if (Nt(i)) {
    const u = i;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (o == null) {
    const u = () => i;
    return u.locale = n, u.key = t, u;
  }
  const l = o(i, Cv(e, n, s, i, a, r));
  return l.locale = n, l.key = t, l.source = i, l;
}
function Ev(e, t, n) {
  return t(n);
}
function dl(...e) {
  const [t, n, i] = e, s = {};
  if (!ee(t) && !Ye(t) && !Nt(t) && !Ji(t))
    throw _n(nn.INVALID_ARGUMENT);
  const r = Ye(t) ? String(t) : (Nt(t), t);
  return Ye(n) ? s.plural = n : ee(n) ? s.default = n : ge(n) && !Yo(n) ? s.named = n : He(n) && (s.list = n), Ye(i) ? s.plural = i : ee(i) ? s.default = i : ge(i) && nt(s, i), [r, s];
}
function Cv(e, t, n, i, s, r) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (o) => {
      throw r && r(o), o;
    },
    onCacheKey: (o) => e1(t, n, o)
  };
}
function Tv(e, t, n, i) {
  const { modifiers: s, pluralRules: r, messageResolver: o, fallbackLocale: a, fallbackWarn: l, missingWarn: u, fallbackContext: c } = e, h = {
    locale: t,
    modifiers: s,
    pluralRules: r,
    messages: (d) => {
      let p = o(n, d);
      if (p == null && c) {
        const [, , y] = Og(c, d, t, a, l, u);
        p = o(y, d);
      }
      if (ee(p) || Ji(p)) {
        let y = !1;
        const S = Pg(e, d, t, p, d, () => {
          y = !0;
        });
        return y ? oh : S;
      } else return Nt(p) ? p : oh;
    }
  };
  return e.processor && (h.processor = e.processor), i.list && (h.list = i.list), i.named && (h.named = i.named), Ye(i.plural) && (h.pluralIndex = i.plural), h;
}
function lh(e, ...t) {
  const { datetimeFormats: n, unresolving: i, fallbackLocale: s, onWarn: r, localeFallbacker: o } = e, { __datetimeFormatters: a } = e, [l, u, c, f] = pl(...t), h = Re(c.missingWarn) ? c.missingWarn : e.missingWarn;
  Re(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const d = !!c.part, p = $c(e, c), y = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    p
  );
  if (!ee(l) || l === "")
    return new Intl.DateTimeFormat(p, f).format(u);
  let w = {}, S, k = null;
  const b = "datetime format";
  for (let I = 0; I < y.length && (S = y[I], w = n[S] || {}, k = w[l], !ge(k)); I++)
    Bc(e, l, S, h, b);
  if (!ge(k) || !ee(S))
    return i ? Jo : l;
  let C = `${S}__${l}`;
  Yo(f) || (C = `${C}__${JSON.stringify(f)}`);
  let A = a.get(C);
  return A || (A = new Intl.DateTimeFormat(S, nt({}, k, f)), a.set(C, A)), d ? A.formatToParts(u) : A.format(u);
}
const Ng = [
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
function pl(...e) {
  const [t, n, i, s] = e, r = {};
  let o = {}, a;
  if (ee(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw _n(nn.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    a = new Date(u);
    try {
      a.toISOString();
    } catch {
      throw _n(nn.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (n1(t)) {
    if (isNaN(t.getTime()))
      throw _n(nn.INVALID_DATE_ARGUMENT);
    a = t;
  } else if (Ye(t))
    a = t;
  else
    throw _n(nn.INVALID_ARGUMENT);
  return ee(n) ? r.key = n : ge(n) && Object.keys(n).forEach((l) => {
    Ng.includes(l) ? o[l] = n[l] : r[l] = n[l];
  }), ee(i) ? r.locale = i : ge(i) && (o = i), ge(s) && (o = s), [r.key || "", a, r, o];
}
function ch(e, t, n) {
  const i = e;
  for (const s in n) {
    const r = `${t}__${s}`;
    i.__datetimeFormatters.has(r) && i.__datetimeFormatters.delete(r);
  }
}
function uh(e, ...t) {
  const { numberFormats: n, unresolving: i, fallbackLocale: s, onWarn: r, localeFallbacker: o } = e, { __numberFormatters: a } = e, [l, u, c, f] = gl(...t), h = Re(c.missingWarn) ? c.missingWarn : e.missingWarn;
  Re(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const d = !!c.part, p = $c(e, c), y = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    p
  );
  if (!ee(l) || l === "")
    return new Intl.NumberFormat(p, f).format(u);
  let w = {}, S, k = null;
  const b = "number format";
  for (let I = 0; I < y.length && (S = y[I], w = n[S] || {}, k = w[l], !ge(k)); I++)
    Bc(e, l, S, h, b);
  if (!ge(k) || !ee(S))
    return i ? Jo : l;
  let C = `${S}__${l}`;
  Yo(f) || (C = `${C}__${JSON.stringify(f)}`);
  let A = a.get(C);
  return A || (A = new Intl.NumberFormat(S, nt({}, k, f)), a.set(C, A)), d ? A.formatToParts(u) : A.format(u);
}
const Ig = [
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
function gl(...e) {
  const [t, n, i, s] = e, r = {};
  let o = {};
  if (!Ye(t))
    throw _n(nn.INVALID_ARGUMENT);
  const a = t;
  return ee(n) ? r.key = n : ge(n) && Object.keys(n).forEach((l) => {
    Ig.includes(l) ? o[l] = n[l] : r[l] = n[l];
  }), ee(i) ? r.locale = i : ge(i) && (o = i), ge(s) && (o = s), [r.key || "", a, r, o];
}
function fh(e, t, n) {
  const i = e;
  for (const s in n) {
    const r = `${t}__${s}`;
    i.__numberFormatters.has(r) && i.__numberFormatters.delete(r);
  }
}
$1();
/*!
 * vue-i18n v9.13.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
const Av = "9.13.1";
function Ov() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Dc().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Mg = rv.__EXTEND_POINT__, gn = Xo(Mg);
gn(), gn(), gn(), gn(), gn(), gn(), gn(), gn(), gn();
const Lg = nn.__EXTEND_POINT__, ct = Xo(Lg), Dt = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Lg,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: ct(),
  // 25
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: ct(),
  // 26
  NOT_INSTALLED: ct(),
  // 27
  NOT_AVAILABLE_IN_LEGACY_MODE: ct(),
  // 28
  // directive module errors
  REQUIRED_VALUE: ct(),
  // 29
  INVALID_VALUE: ct(),
  // 30
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: ct(),
  // 31
  NOT_INSTALLED_WITH_PROVIDE: ct(),
  // 32
  // unexpected error
  UNEXPECTED_ERROR: ct(),
  // 33
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: ct(),
  // 34
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: ct(),
  // 35
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: ct(),
  // 36
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: ct(),
  // 37
  // for enhancement
  __EXTEND_POINT__: ct()
  // 38
};
function Vt(e, ...t) {
  return ls(e, null, void 0);
}
const ml = /* @__PURE__ */ Qn("__translateVNode"), yl = /* @__PURE__ */ Qn("__datetimeParts"), bl = /* @__PURE__ */ Qn("__numberParts"), Pv = Qn("__setPluralRules"), Nv = /* @__PURE__ */ Qn("__injectWithOption"), wl = /* @__PURE__ */ Qn("__dispose");
function zs(e) {
  if (!ve(e))
    return e;
  for (const t in e)
    if (oo(e, t))
      if (!t.includes("."))
        ve(e[t]) && zs(e[t]);
      else {
        const n = t.split("."), i = n.length - 1;
        let s = e, r = !1;
        for (let o = 0; o < i; o++) {
          if (n[o] in s || (s[n[o]] = {}), !ve(s[n[o]])) {
            r = !0;
            break;
          }
          s = s[n[o]];
        }
        r || (s[n[i]] = e[t], delete e[t]), ve(s[n[i]]) && zs(s[n[i]]);
      }
  return e;
}
function Dg(e, t) {
  const { messages: n, __i18n: i, messageResolver: s, flatJson: r } = t, o = ge(n) ? n : He(i) ? {} : { [e]: {} };
  if (He(i) && i.forEach((a) => {
    if ("locale" in a && "resource" in a) {
      const { locale: l, resource: u } = a;
      l ? (o[l] = o[l] || {}, Ur(u, o[l])) : Ur(u, o);
    } else
      ee(a) && Ur(JSON.parse(a), o);
  }), s == null && r)
    for (const a in o)
      oo(o, a) && zs(o[a]);
  return o;
}
function Rg(e) {
  return e.type;
}
function Iv(e, t, n) {
  let i = ve(t.messages) ? t.messages : {};
  "__i18nGlobal" in n && (i = Dg(e.locale.value, {
    messages: i,
    __i18n: n.__i18nGlobal
  }));
  const s = Object.keys(i);
  s.length && s.forEach((r) => {
    e.mergeLocaleMessage(r, i[r]);
  });
  {
    if (ve(t.datetimeFormats)) {
      const r = Object.keys(t.datetimeFormats);
      r.length && r.forEach((o) => {
        e.mergeDateTimeFormat(o, t.datetimeFormats[o]);
      });
    }
    if (ve(t.numberFormats)) {
      const r = Object.keys(t.numberFormats);
      r.length && r.forEach((o) => {
        e.mergeNumberFormat(o, t.numberFormats[o]);
      });
    }
  }
}
function hh(e) {
  return we(tr, null, e, 0);
}
const dh = "__INTLIFY_META__", ph = () => [], Mv = () => !1;
let gh = 0;
function mh(e) {
  return (t, n, i, s) => e(n, i, Ho() || void 0, s);
}
const Lv = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = Ho();
  let t = null;
  return e && (t = Rg(e)[dh]) ? { [dh]: t } : null;
};
function Fg(e = {}, t) {
  const { __root: n, __injectWithOption: i } = e, s = n === void 0, r = e.flatJson, o = so ? Ui : Fn, a = !!e.translateExistCompatible;
  let l = Re(e.inheritLocale) ? e.inheritLocale : !0;
  const u = o(
    // prettier-ignore
    n && l ? n.locale.value : ee(e.locale) ? e.locale : lo
  ), c = o(
    // prettier-ignore
    n && l ? n.fallbackLocale.value : ee(e.fallbackLocale) || He(e.fallbackLocale) || ge(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : u.value
  ), f = o(Dg(u.value, e)), h = o(ge(e.datetimeFormats) ? e.datetimeFormats : { [u.value]: {} }), d = o(ge(e.numberFormats) ? e.numberFormats : { [u.value]: {} });
  let p = n ? n.missingWarn : Re(e.missingWarn) || ro(e.missingWarn) ? e.missingWarn : !0, y = n ? n.fallbackWarn : Re(e.fallbackWarn) || ro(e.fallbackWarn) ? e.fallbackWarn : !0, w = n ? n.fallbackRoot : Re(e.fallbackRoot) ? e.fallbackRoot : !0, S = !!e.fallbackFormat, k = Be(e.missing) ? e.missing : null, b = Be(e.missing) ? mh(e.missing) : null, C = Be(e.postTranslation) ? e.postTranslation : null, A = n ? n.warnHtmlMessage : Re(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, I = !!e.escapeParameter;
  const P = n ? n.modifiers : ge(e.modifiers) ? e.modifiers : {};
  let D = e.pluralRules || n && n.pluralRules, W;
  W = (() => {
    s && ih(null);
    const M = {
      version: Av,
      locale: u.value,
      fallbackLocale: c.value,
      messages: f.value,
      modifiers: P,
      pluralRules: D,
      missing: b === null ? void 0 : b,
      missingWarn: p,
      fallbackWarn: y,
      fallbackFormat: S,
      unresolving: !0,
      postTranslation: C === null ? void 0 : C,
      warnHtmlMessage: A,
      escapeParameter: I,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    M.datetimeFormats = h.value, M.numberFormats = d.value, M.__datetimeFormatters = ge(W) ? W.__datetimeFormatters : void 0, M.__numberFormatters = ge(W) ? W.__numberFormatters : void 0;
    const R = yv(M);
    return s && ih(R), R;
  })(), ms(W, u.value, c.value);
  function z() {
    return [
      u.value,
      c.value,
      f.value,
      h.value,
      d.value
    ];
  }
  const X = Pt({
    get: () => u.value,
    set: (M) => {
      u.value = M, W.locale = u.value;
    }
  }), H = Pt({
    get: () => c.value,
    set: (M) => {
      c.value = M, W.fallbackLocale = c.value, ms(W, u.value, M);
    }
  }), le = Pt(() => f.value), Xe = /* @__PURE__ */ Pt(() => h.value), xe = /* @__PURE__ */ Pt(() => d.value);
  function de() {
    return Be(C) ? C : null;
  }
  function ue(M) {
    C = M, W.postTranslation = M;
  }
  function Te() {
    return k;
  }
  function yt(M) {
    M !== null && (b = mh(M)), k = M, W.missing = b;
  }
  const Fe = (M, R, ne, ie, Ee, Qe) => {
    z();
    let vt;
    try {
      __INTLIFY_PROD_DEVTOOLS__, s || (W.fallbackContext = n ? mv() : void 0), vt = M(W);
    } finally {
      __INTLIFY_PROD_DEVTOOLS__, s || (W.fallbackContext = void 0);
    }
    if (ne !== "translate exists" && // for not `te` (e.g `t`)
    Ye(vt) && vt === Jo || ne === "translate exists" && !vt) {
      const [dr, Ii] = R();
      return n && w ? ie(n) : Ee(dr);
    } else {
      if (Qe(vt))
        return vt;
      throw Vt(Dt.UNEXPECTED_RETURN_TYPE);
    }
  };
  function je(...M) {
    return Fe((R) => Reflect.apply(ah, null, [R, ...M]), () => dl(...M), "translate", (R) => Reflect.apply(R.t, R, [...M]), (R) => R, (R) => ee(R));
  }
  function Gt(...M) {
    const [R, ne, ie] = M;
    if (ie && !ve(ie))
      throw Vt(Dt.INVALID_ARGUMENT);
    return je(R, ne, nt({ resolvedMessage: !0 }, ie || {}));
  }
  function Ht(...M) {
    return Fe((R) => Reflect.apply(lh, null, [R, ...M]), () => pl(...M), "datetime format", (R) => Reflect.apply(R.d, R, [...M]), () => th, (R) => ee(R));
  }
  function st(...M) {
    return Fe((R) => Reflect.apply(uh, null, [R, ...M]), () => gl(...M), "number format", (R) => Reflect.apply(R.n, R, [...M]), () => th, (R) => ee(R));
  }
  function bt(M) {
    return M.map((R) => ee(R) || Ye(R) || Re(R) ? hh(String(R)) : R);
  }
  const $t = {
    normalize: bt,
    interpolate: (M) => M,
    type: "vnode"
  };
  function Kt(...M) {
    return Fe(
      (R) => {
        let ne;
        const ie = R;
        try {
          ie.processor = $t, ne = Reflect.apply(ah, null, [ie, ...M]);
        } finally {
          ie.processor = null;
        }
        return ne;
      },
      () => dl(...M),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (R) => R[ml](...M),
      (R) => [hh(R)],
      (R) => He(R)
    );
  }
  function wt(...M) {
    return Fe(
      (R) => Reflect.apply(uh, null, [R, ...M]),
      () => gl(...M),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (R) => R[bl](...M),
      ph,
      (R) => ee(R) || He(R)
    );
  }
  function dn(...M) {
    return Fe(
      (R) => Reflect.apply(lh, null, [R, ...M]),
      () => pl(...M),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (R) => R[yl](...M),
      ph,
      (R) => ee(R) || He(R)
    );
  }
  function Ni(M) {
    D = M, W.pluralRules = D;
  }
  function E(M, R) {
    return Fe(() => {
      if (!M)
        return !1;
      const ne = ee(R) ? R : u.value, ie = q(ne), Ee = W.messageResolver(ie, M);
      return a ? Ee != null : Ji(Ee) || Nt(Ee) || ee(Ee);
    }, () => [M], "translate exists", (ne) => Reflect.apply(ne.te, ne, [M, R]), Mv, (ne) => Re(ne));
  }
  function O(M) {
    let R = null;
    const ne = Sg(W, c.value, u.value);
    for (let ie = 0; ie < ne.length; ie++) {
      const Ee = f.value[ne[ie]] || {}, Qe = W.messageResolver(Ee, M);
      if (Qe != null) {
        R = Qe;
        break;
      }
    }
    return R;
  }
  function F(M) {
    const R = O(M);
    return R ?? (n ? n.tm(M) || {} : {});
  }
  function q(M) {
    return f.value[M] || {};
  }
  function j(M, R) {
    if (r) {
      const ne = { [M]: R };
      for (const ie in ne)
        oo(ne, ie) && zs(ne[ie]);
      R = ne[M];
    }
    f.value[M] = R, W.messages = f.value;
  }
  function V(M, R) {
    f.value[M] = f.value[M] || {};
    const ne = { [M]: R };
    if (r)
      for (const ie in ne)
        oo(ne, ie) && zs(ne[ie]);
    R = ne[M], Ur(R, f.value[M]), W.messages = f.value;
  }
  function Y(M) {
    return h.value[M] || {};
  }
  function m(M, R) {
    h.value[M] = R, W.datetimeFormats = h.value, ch(W, M, R);
  }
  function v(M, R) {
    h.value[M] = nt(h.value[M] || {}, R), W.datetimeFormats = h.value, ch(W, M, R);
  }
  function T(M) {
    return d.value[M] || {};
  }
  function B(M, R) {
    d.value[M] = R, W.numberFormats = d.value, fh(W, M, R);
  }
  function K(M, R) {
    d.value[M] = nt(d.value[M] || {}, R), W.numberFormats = d.value, fh(W, M, R);
  }
  gh++, n && so && (kn(n.locale, (M) => {
    l && (u.value = M, W.locale = M, ms(W, u.value, c.value));
  }), kn(n.fallbackLocale, (M) => {
    l && (c.value = M, W.fallbackLocale = M, ms(W, u.value, c.value));
  }));
  const U = {
    id: gh,
    locale: X,
    fallbackLocale: H,
    get inheritLocale() {
      return l;
    },
    set inheritLocale(M) {
      l = M, M && n && (u.value = n.locale.value, c.value = n.fallbackLocale.value, ms(W, u.value, c.value));
    },
    get availableLocales() {
      return Object.keys(f.value).sort();
    },
    messages: le,
    get modifiers() {
      return P;
    },
    get pluralRules() {
      return D || {};
    },
    get isGlobal() {
      return s;
    },
    get missingWarn() {
      return p;
    },
    set missingWarn(M) {
      p = M, W.missingWarn = p;
    },
    get fallbackWarn() {
      return y;
    },
    set fallbackWarn(M) {
      y = M, W.fallbackWarn = y;
    },
    get fallbackRoot() {
      return w;
    },
    set fallbackRoot(M) {
      w = M;
    },
    get fallbackFormat() {
      return S;
    },
    set fallbackFormat(M) {
      S = M, W.fallbackFormat = S;
    },
    get warnHtmlMessage() {
      return A;
    },
    set warnHtmlMessage(M) {
      A = M, W.warnHtmlMessage = M;
    },
    get escapeParameter() {
      return I;
    },
    set escapeParameter(M) {
      I = M, W.escapeParameter = M;
    },
    t: je,
    getLocaleMessage: q,
    setLocaleMessage: j,
    mergeLocaleMessage: V,
    getPostTranslationHandler: de,
    setPostTranslationHandler: ue,
    getMissingHandler: Te,
    setMissingHandler: yt,
    [Pv]: Ni
  };
  return U.datetimeFormats = Xe, U.numberFormats = xe, U.rt = Gt, U.te = E, U.tm = F, U.d = Ht, U.n = st, U.getDateTimeFormat = Y, U.setDateTimeFormat = m, U.mergeDateTimeFormat = v, U.getNumberFormat = T, U.setNumberFormat = B, U.mergeNumberFormat = K, U[Nv] = i, U[ml] = Kt, U[yl] = dn, U[bl] = wt, U;
}
const jc = {
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
function Dv({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((i, s) => [
    ...i,
    // prettier-ignore
    ...s.type === $e ? s.children : [s]
  ], []) : t.reduce((n, i) => {
    const s = e[i];
    return s && (n[i] = s()), n;
  }, {});
}
function $g(e) {
  return $e;
}
const Rv = /* @__PURE__ */ Ti({
  /* eslint-disable */
  name: "i18n-t",
  props: nt({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (e) => Ye(e) || !isNaN(e)
    }
  }, jc),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const { slots: n, attrs: i } = t, s = e.i18n || Qo({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const r = Object.keys(n).filter((f) => f !== "_"), o = {};
      e.locale && (o.locale = e.locale), e.plural !== void 0 && (o.plural = ee(e.plural) ? +e.plural : e.plural);
      const a = Dv(t, r), l = s[ml](e.keypath, a, o), u = nt({}, i), c = ee(e.tag) || ve(e.tag) ? e.tag : $g();
      return Lc(c, u, l);
    };
  }
}), yh = Rv;
function Fv(e) {
  return He(e) && !ee(e[0]);
}
function Bg(e, t, n, i) {
  const { slots: s, attrs: r } = t;
  return () => {
    const o = { part: !0 };
    let a = {};
    e.locale && (o.locale = e.locale), ee(e.format) ? o.key = e.format : ve(e.format) && (ee(e.format.key) && (o.key = e.format.key), a = Object.keys(e.format).reduce((h, d) => n.includes(d) ? nt({}, h, { [d]: e.format[d] }) : h, {}));
    const l = i(e.value, o, a);
    let u = [o.key];
    He(l) ? u = l.map((h, d) => {
      const p = s[h.type], y = p ? p({ [h.type]: h.value, index: d, parts: l }) : [h.value];
      return Fv(y) && (y[0].key = `${h.type}-${d}`), y;
    }) : ee(l) && (u = [l]);
    const c = nt({}, r), f = ee(e.tag) || ve(e.tag) ? e.tag : $g();
    return Lc(f, c, u);
  };
}
const $v = /* @__PURE__ */ Ti({
  /* eslint-disable */
  name: "i18n-n",
  props: nt({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, jc),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || Qo({
      useScope: e.scope,
      __useComponent: !0
    });
    return Bg(e, t, Ig, (...i) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[bl](...i)
    ));
  }
}), bh = $v, Bv = /* @__PURE__ */ Ti({
  /* eslint-disable */
  name: "i18n-d",
  props: nt({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, jc),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || Qo({
      useScope: e.scope,
      __useComponent: !0
    });
    return Bg(e, t, Ng, (...i) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[yl](...i)
    ));
  }
}), wh = Bv;
function jv(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const i = n.__getInstance(t);
    return i != null ? i.__composer : e.global.__composer;
  }
}
function qv(e) {
  const t = (o) => {
    const { instance: a, modifiers: l, value: u } = o;
    if (!a || !a.$)
      throw Vt(Dt.UNEXPECTED_ERROR);
    const c = jv(e, a.$), f = vh(u);
    return [
      Reflect.apply(c.t, c, [..._h(f)]),
      c
    ];
  };
  return {
    created: (o, a) => {
      const [l, u] = t(a);
      so && e.global === u && (o.__i18nWatcher = kn(u.locale, () => {
        a.instance && a.instance.$forceUpdate();
      })), o.__composer = u, o.textContent = l;
    },
    unmounted: (o) => {
      so && o.__i18nWatcher && (o.__i18nWatcher(), o.__i18nWatcher = void 0, delete o.__i18nWatcher), o.__composer && (o.__composer = void 0, delete o.__composer);
    },
    beforeUpdate: (o, { value: a }) => {
      if (o.__composer) {
        const l = o.__composer, u = vh(a);
        o.textContent = Reflect.apply(l.t, l, [
          ..._h(u)
        ]);
      }
    },
    getSSRProps: (o) => {
      const [a] = t(o);
      return { textContent: a };
    }
  };
}
function vh(e) {
  if (ee(e))
    return { path: e };
  if (ge(e)) {
    if (!("path" in e))
      throw Vt(Dt.REQUIRED_VALUE, "path");
    return e;
  } else
    throw Vt(Dt.INVALID_VALUE);
}
function _h(e) {
  const { path: t, locale: n, args: i, choice: s, plural: r } = e, o = {}, a = i || {};
  return ee(n) && (o.locale = n), Ye(s) && (o.plural = s), Ye(r) && (o.plural = r), [t, a, o];
}
function Uv(e, t, ...n) {
  const i = ge(n[0]) ? n[0] : {}, s = !!i.useI18nComponentName;
  (Re(i.globalInstall) ? i.globalInstall : !0) && ([s ? "i18n" : yh.name, "I18nT"].forEach((o) => e.component(o, yh)), [bh.name, "I18nN"].forEach((o) => e.component(o, bh)), [wh.name, "I18nD"].forEach((o) => e.component(o, wh))), e.directive("t", qv(t));
}
const Wv = /* @__PURE__ */ Qn("global-vue-i18n");
function Vv(e = {}, t) {
  const n = Re(e.globalInjection) ? e.globalInjection : !0, i = !0, s = /* @__PURE__ */ new Map(), [r, o] = zv(e), a = /* @__PURE__ */ Qn("");
  function l(f) {
    return s.get(f) || null;
  }
  function u(f, h) {
    s.set(f, h);
  }
  function c(f) {
    s.delete(f);
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
        if (h.__VUE_I18N_SYMBOL__ = a, h.provide(h.__VUE_I18N_SYMBOL__, f), ge(d[0])) {
          const w = d[0];
          f.__composerExtend = w.__composerExtend, f.__vueI18nExtend = w.__vueI18nExtend;
        }
        let p = null;
        n && (p = Zv(h, f.global)), Uv(h, f, ...d);
        const y = h.unmount;
        h.unmount = () => {
          p && p(), f.dispose(), y();
        };
      },
      // global accessor
      get global() {
        return o;
      },
      dispose() {
        r.stop();
      },
      // @internal
      __instances: s,
      // @internal
      __getInstance: l,
      // @internal
      __setInstance: u,
      // @internal
      __deleteInstance: c
    };
    return f;
  }
}
function Qo(e = {}) {
  const t = Ho();
  if (t == null)
    throw Vt(Dt.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Vt(Dt.NOT_INSTALLED);
  const n = Gv(t), i = Kv(n), s = Rg(t), r = Hv(e, s);
  if (r === "global")
    return Iv(i, e, s), i;
  if (r === "parent") {
    let l = Yv(n, t, e.__useComponent);
    return l == null && (l = i), l;
  }
  const o = n;
  let a = o.__getInstance(t);
  if (a == null) {
    const l = nt({}, e);
    "__i18n" in s && (l.__i18n = s.__i18n), i && (l.__root = i), a = Fg(l), o.__composerExtend && (a[wl] = o.__composerExtend(a)), Jv(o, t, a), o.__setInstance(t, a);
  }
  return a;
}
function zv(e, t, n) {
  const i = Ub();
  {
    const s = i.run(() => Fg(e));
    if (s == null)
      throw Vt(Dt.UNEXPECTED_ERROR);
    return [i, s];
  }
}
function Gv(e) {
  {
    const t = Ls(e.isCE ? Wv : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw Vt(e.isCE ? Dt.NOT_INSTALLED_WITH_PROVIDE : Dt.UNEXPECTED_ERROR);
    return t;
  }
}
function Hv(e, t) {
  return Yo(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Kv(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Yv(e, t, n = !1) {
  let i = null;
  const s = t.root;
  let r = Xv(t, n);
  for (; r != null; ) {
    const o = e;
    if (e.mode === "composition" && (i = o.__getInstance(r)), i != null || s === r)
      break;
    r = r.parent;
  }
  return i;
}
function Xv(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Jv(e, t, n) {
  Oc(() => {
  }, t), Pc(() => {
    const i = n;
    e.__deleteInstance(t);
    const s = i[wl];
    s && (s(), delete i[wl]);
  }, t);
}
const Qv = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], xh = ["t", "rt", "d", "n", "tm", "te"];
function Zv(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return Qv.forEach((s) => {
    const r = Object.getOwnPropertyDescriptor(t, s);
    if (!r)
      throw Vt(Dt.UNEXPECTED_ERROR);
    const o = at(r.value) ? {
      get() {
        return r.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(a) {
        r.value.value = a;
      }
    } : {
      get() {
        return r.get && r.get();
      }
    };
    Object.defineProperty(n, s, o);
  }), e.config.globalProperties.$i18n = n, xh.forEach((s) => {
    const r = Object.getOwnPropertyDescriptor(t, s);
    if (!r || !r.value)
      throw Vt(Dt.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${s}`, r);
  }), () => {
    delete e.config.globalProperties.$i18n, xh.forEach((s) => {
      delete e.config.globalProperties[`$${s}`];
    });
  };
}
Ov();
fv(Sv);
hv(G1);
dv(Sg);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const e = Dc();
  e.__INTLIFY__ = !0, tv(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const e_ = {
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
  select: "Select",
  delete: "Delete",
  clear: "Clear",
  l1: "L1",
  l2: "L2",
  w1: "W1",
  w2: "W2",
  all: "All",
  "Drop CSV file here": "Drop CSV file here",
  "Powered by SmartCut": "Powered by SmartCut",
  Part: "Part",
  Issue: "Issue",
  "Part issue": "Part issue",
  "Issue with part inputs:": "Issue with part inputs:",
  "No parts": "No parts",
  "No parts in list": "No parts in list",
  "No quantity of parts found": "No quantity of parts found",
  "No parts were added - please double check your list": "No parts were added - please double check your list",
  "The following parts did not fit": "The following parts did not fit",
  "The maximum number of parts is": "The maximum number of parts is",
  "No valid parts found": "No valid parts found"
}, t_ = {
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
}, n_ = {
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
}, i_ = {
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
  "Powered by SmartCut": "",
  Part: "Pièce",
  "Drop CSV file here": "Télécharger CSV",
  Issue: "Erreur",
  "Part issue": "Pièce erreur",
  "Issue with part inputs": "Erreur avec l'importation de pièces",
  "No parts": "Aucune pièce",
  "No parts in list": "Aucune pièce dans la liste",
  "No quantity of parts found": "Aucune quantité trouvé pour certaines pièces",
  "No parts were added - please double check your list": "Aucune pièce n'a été ajoutée - veuillez vérifier votre liste",
  "The following parts did not fit": "Les pièces suivantes ne s'adaptent pas",
  "The maximum number of parts is": "Le nombre maximum de pièces est",
  "No valid parts found": "Aucune pièce valide trouvée"
}, s_ = {
  en_US: e_,
  ca: t_,
  es_ES: n_,
  fr_FR: i_
};
var r_ = typeof global == "object" && global && global.Object === Object && global, o_ = typeof self == "object" && self && self.Object === Object && self, qc = r_ || o_ || Function("return this")(), Qi = qc.Symbol, jg = Object.prototype, a_ = jg.hasOwnProperty, l_ = jg.toString, ys = Qi ? Qi.toStringTag : void 0;
function c_(e) {
  var t = a_.call(e, ys), n = e[ys];
  try {
    e[ys] = void 0;
    var i = !0;
  } catch {
  }
  var s = l_.call(e);
  return i && (t ? e[ys] = n : delete e[ys]), s;
}
var u_ = Object.prototype, f_ = u_.toString;
function h_(e) {
  return f_.call(e);
}
var d_ = "[object Null]", p_ = "[object Undefined]", Sh = Qi ? Qi.toStringTag : void 0;
function qg(e) {
  return e == null ? e === void 0 ? p_ : d_ : Sh && Sh in Object(e) ? c_(e) : h_(e);
}
function g_(e) {
  return e != null && typeof e == "object";
}
var m_ = "[object Symbol]";
function Uc(e) {
  return typeof e == "symbol" || g_(e) && qg(e) == m_;
}
function y_(e, t) {
  for (var n = -1, i = e == null ? 0 : e.length, s = Array(i); ++n < i; )
    s[n] = t(e[n], n, e);
  return s;
}
var Wc = Array.isArray, b_ = 1 / 0, kh = Qi ? Qi.prototype : void 0, Eh = kh ? kh.toString : void 0;
function Ug(e) {
  if (typeof e == "string")
    return e;
  if (Wc(e))
    return y_(e, Ug) + "";
  if (Uc(e))
    return Eh ? Eh.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -b_ ? "-0" : t;
}
function co(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var w_ = "[object AsyncFunction]", v_ = "[object Function]", __ = "[object GeneratorFunction]", x_ = "[object Proxy]";
function S_(e) {
  if (!co(e))
    return !1;
  var t = qg(e);
  return t == v_ || t == __ || t == w_ || t == x_;
}
var Ma = qc["__core-js_shared__"], Ch = function() {
  var e = /[^.]+$/.exec(Ma && Ma.keys && Ma.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function k_(e) {
  return !!Ch && Ch in e;
}
var E_ = Function.prototype, C_ = E_.toString;
function T_(e) {
  if (e != null) {
    try {
      return C_.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var A_ = /[\\^$.*+?()[\]{}|]/g, O_ = /^\[object .+?Constructor\]$/, P_ = Function.prototype, N_ = Object.prototype, I_ = P_.toString, M_ = N_.hasOwnProperty, L_ = RegExp(
  "^" + I_.call(M_).replace(A_, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function D_(e) {
  if (!co(e) || k_(e))
    return !1;
  var t = S_(e) ? L_ : O_;
  return t.test(T_(e));
}
function R_(e, t) {
  return e == null ? void 0 : e[t];
}
function Vc(e, t) {
  var n = R_(e, t);
  return D_(n) ? n : void 0;
}
var Th = function() {
  try {
    var e = Vc(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), F_ = 9007199254740991, $_ = /^(?:0|[1-9]\d*)$/;
function B_(e, t) {
  var n = typeof e;
  return t = t ?? F_, !!t && (n == "number" || n != "symbol" && $_.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function j_(e, t, n) {
  t == "__proto__" && Th ? Th(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Wg(e, t) {
  return e === t || e !== e && t !== t;
}
var q_ = Object.prototype, U_ = q_.hasOwnProperty;
function W_(e, t, n) {
  var i = e[t];
  (!(U_.call(e, t) && Wg(i, n)) || n === void 0 && !(t in e)) && j_(e, t, n);
}
var V_ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, z_ = /^\w*$/;
function G_(e, t) {
  if (Wc(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Uc(e) ? !0 : z_.test(e) || !V_.test(e) || t != null && e in Object(t);
}
var Gs = Vc(Object, "create");
function H_() {
  this.__data__ = Gs ? Gs(null) : {}, this.size = 0;
}
function K_(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Y_ = "__lodash_hash_undefined__", X_ = Object.prototype, J_ = X_.hasOwnProperty;
function Q_(e) {
  var t = this.__data__;
  if (Gs) {
    var n = t[e];
    return n === Y_ ? void 0 : n;
  }
  return J_.call(t, e) ? t[e] : void 0;
}
var Z_ = Object.prototype, ex = Z_.hasOwnProperty;
function tx(e) {
  var t = this.__data__;
  return Gs ? t[e] !== void 0 : ex.call(t, e);
}
var nx = "__lodash_hash_undefined__";
function ix(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Gs && t === void 0 ? nx : t, this;
}
function vi(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
vi.prototype.clear = H_;
vi.prototype.delete = K_;
vi.prototype.get = Q_;
vi.prototype.has = tx;
vi.prototype.set = ix;
function sx() {
  this.__data__ = [], this.size = 0;
}
function Zo(e, t) {
  for (var n = e.length; n--; )
    if (Wg(e[n][0], t))
      return n;
  return -1;
}
var rx = Array.prototype, ox = rx.splice;
function ax(e) {
  var t = this.__data__, n = Zo(t, e);
  if (n < 0)
    return !1;
  var i = t.length - 1;
  return n == i ? t.pop() : ox.call(t, n, 1), --this.size, !0;
}
function lx(e) {
  var t = this.__data__, n = Zo(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function cx(e) {
  return Zo(this.__data__, e) > -1;
}
function ux(e, t) {
  var n = this.__data__, i = Zo(n, e);
  return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this;
}
function cs(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
cs.prototype.clear = sx;
cs.prototype.delete = ax;
cs.prototype.get = lx;
cs.prototype.has = cx;
cs.prototype.set = ux;
var fx = Vc(qc, "Map");
function hx() {
  this.size = 0, this.__data__ = {
    hash: new vi(),
    map: new (fx || cs)(),
    string: new vi()
  };
}
function dx(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ea(e, t) {
  var n = e.__data__;
  return dx(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function px(e) {
  var t = ea(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function gx(e) {
  return ea(this, e).get(e);
}
function mx(e) {
  return ea(this, e).has(e);
}
function yx(e, t) {
  var n = ea(this, e), i = n.size;
  return n.set(e, t), this.size += n.size == i ? 0 : 1, this;
}
function Ai(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Ai.prototype.clear = hx;
Ai.prototype.delete = px;
Ai.prototype.get = gx;
Ai.prototype.has = mx;
Ai.prototype.set = yx;
var bx = "Expected a function";
function zc(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(bx);
  var n = function() {
    var i = arguments, s = t ? t.apply(this, i) : i[0], r = n.cache;
    if (r.has(s))
      return r.get(s);
    var o = e.apply(this, i);
    return n.cache = r.set(s, o) || r, o;
  };
  return n.cache = new (zc.Cache || Ai)(), n;
}
zc.Cache = Ai;
var wx = 500;
function vx(e) {
  var t = zc(e, function(i) {
    return n.size === wx && n.clear(), i;
  }), n = t.cache;
  return t;
}
var _x = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, xx = /\\(\\)?/g, Sx = vx(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(_x, function(n, i, s, r) {
    t.push(s ? r.replace(xx, "$1") : i || n);
  }), t;
});
function kx(e) {
  return e == null ? "" : Ug(e);
}
function Vg(e, t) {
  return Wc(e) ? e : G_(e, t) ? [e] : Sx(kx(e));
}
var Ex = 1 / 0;
function zg(e) {
  if (typeof e == "string" || Uc(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Ex ? "-0" : t;
}
function Cx(e, t) {
  t = Vg(t, e);
  for (var n = 0, i = t.length; e != null && n < i; )
    e = e[zg(t[n++])];
  return n && n == i ? e : void 0;
}
function uo(e, t, n) {
  var i = e == null ? void 0 : Cx(e, t);
  return i === void 0 ? n : i;
}
function Tx(e, t, n, i) {
  if (!co(e))
    return e;
  t = Vg(t, e);
  for (var s = -1, r = t.length, o = r - 1, a = e; a != null && ++s < r; ) {
    var l = zg(t[s]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (s != o) {
      var c = a[l];
      u = void 0, u === void 0 && (u = co(c) ? c : B_(t[s + 1]) ? [] : {});
    }
    W_(a, l, u), a = a[l];
  }
  return e;
}
function Ah(e, t, n) {
  return e == null ? e : Tx(e, t, n);
}
var vl = "http://www.w3.org/1999/xhtml";
const Oh = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: vl,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Gg(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Oh.hasOwnProperty(t) ? { space: Oh[t], local: e } : e;
}
function Ax(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === vl && t.documentElement.namespaceURI === vl ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Ox(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Hg(e) {
  var t = Gg(e);
  return (t.local ? Ox : Ax)(t);
}
function Px() {
}
function Kg(e) {
  return e == null ? Px : function() {
    return this.querySelector(e);
  };
}
function Nx(e) {
  typeof e != "function" && (e = Kg(e));
  for (var t = this._groups, n = t.length, i = new Array(n), s = 0; s < n; ++s)
    for (var r = t[s], o = r.length, a = i[s] = new Array(o), l, u, c = 0; c < o; ++c)
      (l = r[c]) && (u = e.call(l, l.__data__, c, r)) && ("__data__" in l && (u.__data__ = l.__data__), a[c] = u);
  return new mt(i, this._parents);
}
function Yg(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Ix() {
  return [];
}
function Mx(e) {
  return e == null ? Ix : function() {
    return this.querySelectorAll(e);
  };
}
function Lx(e) {
  return function() {
    return Yg(e.apply(this, arguments));
  };
}
function Dx(e) {
  typeof e == "function" ? e = Lx(e) : e = Mx(e);
  for (var t = this._groups, n = t.length, i = [], s = [], r = 0; r < n; ++r)
    for (var o = t[r], a = o.length, l, u = 0; u < a; ++u)
      (l = o[u]) && (i.push(e.call(l, l.__data__, u, o)), s.push(l));
  return new mt(i, s);
}
function Rx(e) {
  return function() {
    return this.matches(e);
  };
}
function Xg(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Fx = Array.prototype.find;
function $x(e) {
  return function() {
    return Fx.call(this.children, e);
  };
}
function Bx() {
  return this.firstElementChild;
}
function jx(e) {
  return this.select(e == null ? Bx : $x(typeof e == "function" ? e : Xg(e)));
}
var qx = Array.prototype.filter;
function Ux() {
  return Array.from(this.children);
}
function Wx(e) {
  return function() {
    return qx.call(this.children, e);
  };
}
function Vx(e) {
  return this.selectAll(e == null ? Ux : Wx(typeof e == "function" ? e : Xg(e)));
}
function zx(e) {
  typeof e != "function" && (e = Rx(e));
  for (var t = this._groups, n = t.length, i = new Array(n), s = 0; s < n; ++s)
    for (var r = t[s], o = r.length, a = i[s] = [], l, u = 0; u < o; ++u)
      (l = r[u]) && e.call(l, l.__data__, u, r) && a.push(l);
  return new mt(i, this._parents);
}
function Jg(e) {
  return new Array(e.length);
}
function Gx() {
  return new mt(this._enter || this._groups.map(Jg), this._parents);
}
function fo(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
fo.prototype = {
  constructor: fo,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function Hx(e) {
  return function() {
    return e;
  };
}
function Kx(e, t, n, i, s, r) {
  for (var o = 0, a, l = t.length, u = r.length; o < u; ++o)
    (a = t[o]) ? (a.__data__ = r[o], i[o] = a) : n[o] = new fo(e, r[o]);
  for (; o < l; ++o)
    (a = t[o]) && (s[o] = a);
}
function Yx(e, t, n, i, s, r, o) {
  var a, l, u = /* @__PURE__ */ new Map(), c = t.length, f = r.length, h = new Array(c), d;
  for (a = 0; a < c; ++a)
    (l = t[a]) && (h[a] = d = o.call(l, l.__data__, a, t) + "", u.has(d) ? s[a] = l : u.set(d, l));
  for (a = 0; a < f; ++a)
    d = o.call(e, r[a], a, r) + "", (l = u.get(d)) ? (i[a] = l, l.__data__ = r[a], u.delete(d)) : n[a] = new fo(e, r[a]);
  for (a = 0; a < c; ++a)
    (l = t[a]) && u.get(h[a]) === l && (s[a] = l);
}
function Xx(e) {
  return e.__data__;
}
function Jx(e, t) {
  if (!arguments.length) return Array.from(this, Xx);
  var n = t ? Yx : Kx, i = this._parents, s = this._groups;
  typeof e != "function" && (e = Hx(e));
  for (var r = s.length, o = new Array(r), a = new Array(r), l = new Array(r), u = 0; u < r; ++u) {
    var c = i[u], f = s[u], h = f.length, d = Qx(e.call(c, c && c.__data__, u, i)), p = d.length, y = a[u] = new Array(p), w = o[u] = new Array(p), S = l[u] = new Array(h);
    n(c, f, y, w, S, d, t);
    for (var k = 0, b = 0, C, A; k < p; ++k)
      if (C = y[k]) {
        for (k >= b && (b = k + 1); !(A = w[b]) && ++b < p; ) ;
        C._next = A || null;
      }
  }
  return o = new mt(o, i), o._enter = a, o._exit = l, o;
}
function Qx(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Zx() {
  return new mt(this._exit || this._groups.map(Jg), this._parents);
}
function eS(e, t, n) {
  var i = this.enter(), s = this, r = this.exit();
  return typeof e == "function" ? (i = e(i), i && (i = i.selection())) : i = i.append(e + ""), t != null && (s = t(s), s && (s = s.selection())), n == null ? r.remove() : n(r), i && s ? i.merge(s).order() : s;
}
function tS(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, i = t._groups, s = n.length, r = i.length, o = Math.min(s, r), a = new Array(s), l = 0; l < o; ++l)
    for (var u = n[l], c = i[l], f = u.length, h = a[l] = new Array(f), d, p = 0; p < f; ++p)
      (d = u[p] || c[p]) && (h[p] = d);
  for (; l < s; ++l)
    a[l] = n[l];
  return new mt(a, this._parents);
}
function nS() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var i = e[t], s = i.length - 1, r = i[s], o; --s >= 0; )
      (o = i[s]) && (r && o.compareDocumentPosition(r) ^ 4 && r.parentNode.insertBefore(o, r), r = o);
  return this;
}
function iS(e) {
  e || (e = sS);
  function t(f, h) {
    return f && h ? e(f.__data__, h.__data__) : !f - !h;
  }
  for (var n = this._groups, i = n.length, s = new Array(i), r = 0; r < i; ++r) {
    for (var o = n[r], a = o.length, l = s[r] = new Array(a), u, c = 0; c < a; ++c)
      (u = o[c]) && (l[c] = u);
    l.sort(t);
  }
  return new mt(s, this._parents).order();
}
function sS(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function rS() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function oS() {
  return Array.from(this);
}
function aS() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var i = e[t], s = 0, r = i.length; s < r; ++s) {
      var o = i[s];
      if (o) return o;
    }
  return null;
}
function lS() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function cS() {
  return !this.node();
}
function uS(e) {
  for (var t = this._groups, n = 0, i = t.length; n < i; ++n)
    for (var s = t[n], r = 0, o = s.length, a; r < o; ++r)
      (a = s[r]) && e.call(a, a.__data__, r, s);
  return this;
}
function fS(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function hS(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function dS(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function pS(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function gS(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function mS(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function yS(e, t) {
  var n = Gg(e);
  if (arguments.length < 2) {
    var i = this.node();
    return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n);
  }
  return this.each((t == null ? n.local ? hS : fS : typeof t == "function" ? n.local ? mS : gS : n.local ? pS : dS)(n, t));
}
function Qg(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function bS(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function wS(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function vS(e, t, n) {
  return function() {
    var i = t.apply(this, arguments);
    i == null ? this.style.removeProperty(e) : this.style.setProperty(e, i, n);
  };
}
function _S(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? bS : typeof t == "function" ? vS : wS)(e, t, n ?? "")) : xS(this.node(), e);
}
function xS(e, t) {
  return e.style.getPropertyValue(t) || Qg(e).getComputedStyle(e, null).getPropertyValue(t);
}
function SS(e) {
  return function() {
    delete this[e];
  };
}
function kS(e, t) {
  return function() {
    this[e] = t;
  };
}
function ES(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function CS(e, t) {
  return arguments.length > 1 ? this.each((t == null ? SS : typeof t == "function" ? ES : kS)(e, t)) : this.node()[e];
}
function Zg(e) {
  return e.trim().split(/^|\s+/);
}
function Gc(e) {
  return e.classList || new em(e);
}
function em(e) {
  this._node = e, this._names = Zg(e.getAttribute("class") || "");
}
em.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function tm(e, t) {
  for (var n = Gc(e), i = -1, s = t.length; ++i < s; ) n.add(t[i]);
}
function nm(e, t) {
  for (var n = Gc(e), i = -1, s = t.length; ++i < s; ) n.remove(t[i]);
}
function TS(e) {
  return function() {
    tm(this, e);
  };
}
function AS(e) {
  return function() {
    nm(this, e);
  };
}
function OS(e, t) {
  return function() {
    (t.apply(this, arguments) ? tm : nm)(this, e);
  };
}
function PS(e, t) {
  var n = Zg(e + "");
  if (arguments.length < 2) {
    for (var i = Gc(this.node()), s = -1, r = n.length; ++s < r; ) if (!i.contains(n[s])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? OS : t ? TS : AS)(n, t));
}
function NS() {
  this.textContent = "";
}
function IS(e) {
  return function() {
    this.textContent = e;
  };
}
function MS(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function LS(e) {
  return arguments.length ? this.each(e == null ? NS : (typeof e == "function" ? MS : IS)(e)) : this.node().textContent;
}
function DS() {
  this.innerHTML = "";
}
function RS(e) {
  return function() {
    this.innerHTML = e;
  };
}
function FS(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function $S(e) {
  return arguments.length ? this.each(e == null ? DS : (typeof e == "function" ? FS : RS)(e)) : this.node().innerHTML;
}
function BS() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function jS() {
  return this.each(BS);
}
function qS() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function US() {
  return this.each(qS);
}
function WS(e) {
  var t = typeof e == "function" ? e : Hg(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function VS() {
  return null;
}
function zS(e, t) {
  var n = typeof e == "function" ? e : Hg(e), i = t == null ? VS : typeof t == "function" ? t : Kg(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function GS() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function HS() {
  return this.each(GS);
}
function KS() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function YS() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function XS(e) {
  return this.select(e ? YS : KS);
}
function JS(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function QS(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function ZS(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", i = t.indexOf(".");
    return i >= 0 && (n = t.slice(i + 1), t = t.slice(0, i)), { type: t, name: n };
  });
}
function ek(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, i = -1, s = t.length, r; n < s; ++n)
        r = t[n], (!e.type || r.type === e.type) && r.name === e.name ? this.removeEventListener(r.type, r.listener, r.options) : t[++i] = r;
      ++i ? t.length = i : delete this.__on;
    }
  };
}
function tk(e, t, n) {
  return function() {
    var i = this.__on, s, r = QS(t);
    if (i) {
      for (var o = 0, a = i.length; o < a; ++o)
        if ((s = i[o]).type === e.type && s.name === e.name) {
          this.removeEventListener(s.type, s.listener, s.options), this.addEventListener(s.type, s.listener = r, s.options = n), s.value = t;
          return;
        }
    }
    this.addEventListener(e.type, r, n), s = { type: e.type, name: e.name, value: t, listener: r, options: n }, i ? i.push(s) : this.__on = [s];
  };
}
function nk(e, t, n) {
  var i = ZS(e + ""), s, r = i.length, o;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var l = 0, u = a.length, c; l < u; ++l)
        for (s = 0, c = a[l]; s < r; ++s)
          if ((o = i[s]).type === c.type && o.name === c.name)
            return c.value;
    }
    return;
  }
  for (a = t ? tk : ek, s = 0; s < r; ++s) this.each(a(i[s], t, n));
  return this;
}
function im(e, t, n) {
  var i = Qg(e), s = i.CustomEvent;
  typeof s == "function" ? s = new s(t, n) : (s = i.document.createEvent("Event"), n ? (s.initEvent(t, n.bubbles, n.cancelable), s.detail = n.detail) : s.initEvent(t, !1, !1)), e.dispatchEvent(s);
}
function ik(e, t) {
  return function() {
    return im(this, e, t);
  };
}
function sk(e, t) {
  return function() {
    return im(this, e, t.apply(this, arguments));
  };
}
function rk(e, t) {
  return this.each((typeof t == "function" ? sk : ik)(e, t));
}
function* ok() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var i = e[t], s = 0, r = i.length, o; s < r; ++s)
      (o = i[s]) && (yield o);
}
var sm = [null];
function mt(e, t) {
  this._groups = e, this._parents = t;
}
function ak() {
  return this;
}
mt.prototype = {
  constructor: mt,
  select: Nx,
  selectAll: Dx,
  selectChild: jx,
  selectChildren: Vx,
  filter: zx,
  data: Jx,
  enter: Gx,
  exit: Zx,
  join: eS,
  merge: tS,
  selection: ak,
  order: nS,
  sort: iS,
  call: rS,
  nodes: oS,
  node: aS,
  size: lS,
  empty: cS,
  each: uS,
  attr: yS,
  style: _S,
  property: CS,
  classed: PS,
  text: LS,
  html: $S,
  raise: jS,
  lower: US,
  append: WS,
  insert: zS,
  remove: HS,
  clone: XS,
  datum: JS,
  on: nk,
  dispatch: rk,
  [Symbol.iterator]: ok
};
function lk(e) {
  return typeof e == "string" ? new mt([[document.querySelector(e)]], [document.documentElement]) : new mt([[e]], sm);
}
function ck(e) {
  return typeof e == "string" ? new mt([document.querySelectorAll(e)], [document.documentElement]) : new mt([Yg(e)], sm);
}
function Wr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function uk(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function rm(e) {
  let t, n, i;
  e.length !== 2 ? (t = Wr, n = (a, l) => Wr(e(a), l), i = (a, l) => e(a) - l) : (t = e === Wr || e === uk ? e : fk, n = e, i = e);
  function s(a, l, u = 0, c = a.length) {
    if (u < c) {
      if (t(l, l) !== 0) return c;
      do {
        const f = u + c >>> 1;
        n(a[f], l) < 0 ? u = f + 1 : c = f;
      } while (u < c);
    }
    return u;
  }
  function r(a, l, u = 0, c = a.length) {
    if (u < c) {
      if (t(l, l) !== 0) return c;
      do {
        const f = u + c >>> 1;
        n(a[f], l) <= 0 ? u = f + 1 : c = f;
      } while (u < c);
    }
    return u;
  }
  function o(a, l, u = 0, c = a.length) {
    const f = s(a, l, u, c - 1);
    return f > u && i(a[f - 1], l) > -i(a[f], l) ? f - 1 : f;
  }
  return { left: s, center: o, right: r };
}
function fk() {
  return 0;
}
function hk(e) {
  return e === null ? NaN : +e;
}
const dk = rm(Wr), pk = dk.right;
rm(hk).center;
const gk = Math.sqrt(50), mk = Math.sqrt(10), yk = Math.sqrt(2);
function ho(e, t, n) {
  const i = (t - e) / Math.max(0, n), s = Math.floor(Math.log10(i)), r = i / Math.pow(10, s), o = r >= gk ? 10 : r >= mk ? 5 : r >= yk ? 2 : 1;
  let a, l, u;
  return s < 0 ? (u = Math.pow(10, -s) / o, a = Math.round(e * u), l = Math.round(t * u), a / u < e && ++a, l / u > t && --l, u = -u) : (u = Math.pow(10, s) * o, a = Math.round(e / u), l = Math.round(t / u), a * u < e && ++a, l * u > t && --l), l < a && 0.5 <= n && n < 2 ? ho(e, t, n * 2) : [a, l, u];
}
function bk(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0)) return [];
  if (e === t) return [e];
  const i = t < e, [s, r, o] = i ? ho(t, e, n) : ho(e, t, n);
  if (!(r >= s)) return [];
  const a = r - s + 1, l = new Array(a);
  if (i)
    if (o < 0) for (let u = 0; u < a; ++u) l[u] = (r - u) / -o;
    else for (let u = 0; u < a; ++u) l[u] = (r - u) * o;
  else if (o < 0) for (let u = 0; u < a; ++u) l[u] = (s + u) / -o;
  else for (let u = 0; u < a; ++u) l[u] = (s + u) * o;
  return l;
}
function _l(e, t, n) {
  return t = +t, e = +e, n = +n, ho(e, t, n)[2];
}
function wk(e, t, n) {
  t = +t, e = +e, n = +n;
  const i = t < e, s = i ? _l(t, e, n) : _l(e, t, n);
  return (i ? -1 : 1) * (s < 0 ? 1 / -s : s);
}
function vk(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function _k(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
function Hc(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function om(e, t) {
  var n = Object.create(e.prototype);
  for (var i in t) n[i] = t[i];
  return n;
}
function sr() {
}
var Hs = 0.7, po = 1 / Hs, Vi = "\\s*([+-]?\\d+)\\s*", Ks = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ln = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", xk = /^#([0-9a-f]{3,8})$/, Sk = new RegExp(`^rgb\\(${Vi},${Vi},${Vi}\\)$`), kk = new RegExp(`^rgb\\(${ln},${ln},${ln}\\)$`), Ek = new RegExp(`^rgba\\(${Vi},${Vi},${Vi},${Ks}\\)$`), Ck = new RegExp(`^rgba\\(${ln},${ln},${ln},${Ks}\\)$`), Tk = new RegExp(`^hsl\\(${Ks},${ln},${ln}\\)$`), Ak = new RegExp(`^hsla\\(${Ks},${ln},${ln},${Ks}\\)$`), Ph = {
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
Hc(sr, Zi, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Nh,
  // Deprecated! Use color.formatHex.
  formatHex: Nh,
  formatHex8: Ok,
  formatHsl: Pk,
  formatRgb: Ih,
  toString: Ih
});
function Nh() {
  return this.rgb().formatHex();
}
function Ok() {
  return this.rgb().formatHex8();
}
function Pk() {
  return am(this).formatHsl();
}
function Ih() {
  return this.rgb().formatRgb();
}
function Zi(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = xk.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Mh(t) : n === 3 ? new pt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? xr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? xr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Sk.exec(e)) ? new pt(t[1], t[2], t[3], 1) : (t = kk.exec(e)) ? new pt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Ek.exec(e)) ? xr(t[1], t[2], t[3], t[4]) : (t = Ck.exec(e)) ? xr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Tk.exec(e)) ? Rh(t[1], t[2] / 100, t[3] / 100, 1) : (t = Ak.exec(e)) ? Rh(t[1], t[2] / 100, t[3] / 100, t[4]) : Ph.hasOwnProperty(e) ? Mh(Ph[e]) : e === "transparent" ? new pt(NaN, NaN, NaN, 0) : null;
}
function Mh(e) {
  return new pt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function xr(e, t, n, i) {
  return i <= 0 && (e = t = n = NaN), new pt(e, t, n, i);
}
function Nk(e) {
  return e instanceof sr || (e = Zi(e)), e ? (e = e.rgb(), new pt(e.r, e.g, e.b, e.opacity)) : new pt();
}
function Ue(e, t, n, i) {
  return arguments.length === 1 ? Nk(e) : new pt(e, t, n, i ?? 1);
}
function pt(e, t, n, i) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +i;
}
Hc(pt, Ue, om(sr, {
  brighter(e) {
    return e = e == null ? po : Math.pow(po, e), new pt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Hs : Math.pow(Hs, e), new pt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new pt(di(this.r), di(this.g), di(this.b), go(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Lh,
  // Deprecated! Use color.formatHex.
  formatHex: Lh,
  formatHex8: Ik,
  formatRgb: Dh,
  toString: Dh
}));
function Lh() {
  return `#${ui(this.r)}${ui(this.g)}${ui(this.b)}`;
}
function Ik() {
  return `#${ui(this.r)}${ui(this.g)}${ui(this.b)}${ui((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Dh() {
  const e = go(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${di(this.r)}, ${di(this.g)}, ${di(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function go(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function di(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function ui(e) {
  return e = di(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Rh(e, t, n, i) {
  return i <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new qt(e, t, n, i);
}
function am(e) {
  if (e instanceof qt) return new qt(e.h, e.s, e.l, e.opacity);
  if (e instanceof sr || (e = Zi(e)), !e) return new qt();
  if (e instanceof qt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, i = e.b / 255, s = Math.min(t, n, i), r = Math.max(t, n, i), o = NaN, a = r - s, l = (r + s) / 2;
  return a ? (t === r ? o = (n - i) / a + (n < i) * 6 : n === r ? o = (i - t) / a + 2 : o = (t - n) / a + 4, a /= l < 0.5 ? r + s : 2 - r - s, o *= 60) : a = l > 0 && l < 1 ? 0 : o, new qt(o, a, l, e.opacity);
}
function Mk(e, t, n, i) {
  return arguments.length === 1 ? am(e) : new qt(e, t, n, i ?? 1);
}
function qt(e, t, n, i) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +i;
}
Hc(qt, Mk, om(sr, {
  brighter(e) {
    return e = e == null ? po : Math.pow(po, e), new qt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Hs : Math.pow(Hs, e), new qt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, i = n + (n < 0.5 ? n : 1 - n) * t, s = 2 * n - i;
    return new pt(
      La(e >= 240 ? e - 240 : e + 120, s, i),
      La(e, s, i),
      La(e < 120 ? e + 240 : e - 120, s, i),
      this.opacity
    );
  },
  clamp() {
    return new qt(Fh(this.h), Sr(this.s), Sr(this.l), go(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = go(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Fh(this.h)}, ${Sr(this.s) * 100}%, ${Sr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Fh(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Sr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function La(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Kc = (e) => () => e;
function Lk(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Dk(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(i) {
    return Math.pow(e + i * t, n);
  };
}
function Rk(e) {
  return (e = +e) == 1 ? lm : function(t, n) {
    return n - t ? Dk(t, n, e) : Kc(isNaN(t) ? n : t);
  };
}
function lm(e, t) {
  var n = t - e;
  return n ? Lk(e, n) : Kc(isNaN(e) ? t : e);
}
const $h = function e(t) {
  var n = Rk(t);
  function i(s, r) {
    var o = n((s = Ue(s)).r, (r = Ue(r)).r), a = n(s.g, r.g), l = n(s.b, r.b), u = lm(s.opacity, r.opacity);
    return function(c) {
      return s.r = o(c), s.g = a(c), s.b = l(c), s.opacity = u(c), s + "";
    };
  }
  return i.gamma = e, i;
}(1);
function Fk(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, i = t.slice(), s;
  return function(r) {
    for (s = 0; s < n; ++s) i[s] = e[s] * (1 - r) + t[s] * r;
    return i;
  };
}
function $k(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Bk(e, t) {
  var n = t ? t.length : 0, i = e ? Math.min(n, e.length) : 0, s = new Array(i), r = new Array(n), o;
  for (o = 0; o < i; ++o) s[o] = ta(e[o], t[o]);
  for (; o < n; ++o) r[o] = t[o];
  return function(a) {
    for (o = 0; o < i; ++o) r[o] = s[o](a);
    return r;
  };
}
function jk(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(i) {
    return n.setTime(e * (1 - i) + t * i), n;
  };
}
function mo(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function qk(e, t) {
  var n = {}, i = {}, s;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (s in t)
    s in e ? n[s] = ta(e[s], t[s]) : i[s] = t[s];
  return function(r) {
    for (s in n) i[s] = n[s](r);
    return i;
  };
}
var xl = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Da = new RegExp(xl.source, "g");
function Uk(e) {
  return function() {
    return e;
  };
}
function Wk(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Vk(e, t) {
  var n = xl.lastIndex = Da.lastIndex = 0, i, s, r, o = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (i = xl.exec(e)) && (s = Da.exec(t)); )
    (r = s.index) > n && (r = t.slice(n, r), a[o] ? a[o] += r : a[++o] = r), (i = i[0]) === (s = s[0]) ? a[o] ? a[o] += s : a[++o] = s : (a[++o] = null, l.push({ i: o, x: mo(i, s) })), n = Da.lastIndex;
  return n < t.length && (r = t.slice(n), a[o] ? a[o] += r : a[++o] = r), a.length < 2 ? l[0] ? Wk(l[0].x) : Uk(t) : (t = l.length, function(u) {
    for (var c = 0, f; c < t; ++c) a[(f = l[c]).i] = f.x(u);
    return a.join("");
  });
}
function ta(e, t) {
  var n = typeof t, i;
  return t == null || n === "boolean" ? Kc(t) : (n === "number" ? mo : n === "string" ? (i = Zi(t)) ? (t = i, $h) : Vk : t instanceof Zi ? $h : t instanceof Date ? jk : $k(t) ? Fk : Array.isArray(t) ? Bk : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? qk : mo)(e, t);
}
function cm(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function zk(e) {
  return function() {
    return e;
  };
}
function Gk(e) {
  return +e;
}
var Bh = [0, 1];
function Bn(e) {
  return e;
}
function Sl(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : zk(isNaN(t) ? NaN : 0.5);
}
function Hk(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(i) {
    return Math.max(e, Math.min(t, i));
  };
}
function Kk(e, t, n) {
  var i = e[0], s = e[1], r = t[0], o = t[1];
  return s < i ? (i = Sl(s, i), r = n(o, r)) : (i = Sl(i, s), r = n(r, o)), function(a) {
    return r(i(a));
  };
}
function Yk(e, t, n) {
  var i = Math.min(e.length, t.length) - 1, s = new Array(i), r = new Array(i), o = -1;
  for (e[i] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < i; )
    s[o] = Sl(e[o], e[o + 1]), r[o] = n(t[o], t[o + 1]);
  return function(a) {
    var l = pk(e, a, 1, i) - 1;
    return r[l](s[l](a));
  };
}
function Xk(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Jk() {
  var e = Bh, t = Bh, n = ta, i, s, r, o = Bn, a, l, u;
  function c() {
    var h = Math.min(e.length, t.length);
    return o !== Bn && (o = Hk(e[0], e[h - 1])), a = h > 2 ? Yk : Kk, l = u = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? r : (l || (l = a(e.map(i), t, n)))(i(o(h)));
  }
  return f.invert = function(h) {
    return o(s((u || (u = a(t, e.map(i), mo)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (e = Array.from(h, Gk), c()) : e.slice();
  }, f.range = function(h) {
    return arguments.length ? (t = Array.from(h), c()) : t.slice();
  }, f.rangeRound = function(h) {
    return t = Array.from(h), n = cm, c();
  }, f.clamp = function(h) {
    return arguments.length ? (o = h ? !0 : Bn, c()) : o !== Bn;
  }, f.interpolate = function(h) {
    return arguments.length ? (n = h, c()) : n;
  }, f.unknown = function(h) {
    return arguments.length ? (r = h, f) : r;
  }, function(h, d) {
    return i = h, s = d, c();
  };
}
function Qk() {
  return Jk()(Bn, Bn);
}
function Zk(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function yo(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var n, i = e.slice(0, n);
  return [
    i.length > 1 ? i[0] + i.slice(2) : i,
    +e.slice(n + 1)
  ];
}
function es(e) {
  return e = yo(Math.abs(e)), e ? e[1] : NaN;
}
function eE(e, t) {
  return function(n, i) {
    for (var s = n.length, r = [], o = 0, a = e[0], l = 0; s > 0 && a > 0 && (l + a + 1 > i && (a = Math.max(1, i - l)), r.push(n.substring(s -= a, s + a)), !((l += a + 1) > i)); )
      a = e[o = (o + 1) % e.length];
    return r.reverse().join(t);
  };
}
function tE(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var nE = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function bo(e) {
  if (!(t = nE.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Yc({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
bo.prototype = Yc.prototype;
function Yc(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Yc.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function iE(e) {
  e: for (var t = e.length, n = 1, i = -1, s; n < t; ++n)
    switch (e[n]) {
      case ".":
        i = s = n;
        break;
      case "0":
        i === 0 && (i = n), s = n;
        break;
      default:
        if (!+e[n]) break e;
        i > 0 && (i = 0);
        break;
    }
  return i > 0 ? e.slice(0, i) + e.slice(s + 1) : e;
}
var um;
function sE(e, t) {
  var n = yo(e, t);
  if (!n) return e + "";
  var i = n[0], s = n[1], r = s - (um = Math.max(-8, Math.min(8, Math.floor(s / 3))) * 3) + 1, o = i.length;
  return r === o ? i : r > o ? i + new Array(r - o + 1).join("0") : r > 0 ? i.slice(0, r) + "." + i.slice(r) : "0." + new Array(1 - r).join("0") + yo(e, Math.max(0, t + r - 1))[0];
}
function jh(e, t) {
  var n = yo(e, t);
  if (!n) return e + "";
  var i = n[0], s = n[1];
  return s < 0 ? "0." + new Array(-s).join("0") + i : i.length > s + 1 ? i.slice(0, s + 1) + "." + i.slice(s + 1) : i + new Array(s - i.length + 2).join("0");
}
const qh = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Zk,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => jh(e * 100, t),
  r: jh,
  s: sE,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Uh(e) {
  return e;
}
var Wh = Array.prototype.map, Vh = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function rE(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Uh : eE(Wh.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", i = e.currency === void 0 ? "" : e.currency[1] + "", s = e.decimal === void 0 ? "." : e.decimal + "", r = e.numerals === void 0 ? Uh : tE(Wh.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", a = e.minus === void 0 ? "−" : e.minus + "", l = e.nan === void 0 ? "NaN" : e.nan + "";
  function u(f) {
    f = bo(f);
    var h = f.fill, d = f.align, p = f.sign, y = f.symbol, w = f.zero, S = f.width, k = f.comma, b = f.precision, C = f.trim, A = f.type;
    A === "n" ? (k = !0, A = "g") : qh[A] || (b === void 0 && (b = 12), C = !0, A = "g"), (w || h === "0" && d === "=") && (w = !0, h = "0", d = "=");
    var I = y === "$" ? n : y === "#" && /[boxX]/.test(A) ? "0" + A.toLowerCase() : "", P = y === "$" ? i : /[%p]/.test(A) ? o : "", D = qh[A], W = /[defgprs%]/.test(A);
    b = b === void 0 ? 6 : /[gprs]/.test(A) ? Math.max(1, Math.min(21, b)) : Math.max(0, Math.min(20, b));
    function G(z) {
      var X = I, H = P, le, Xe, xe;
      if (A === "c")
        H = D(z) + H, z = "";
      else {
        z = +z;
        var de = z < 0 || 1 / z < 0;
        if (z = isNaN(z) ? l : D(Math.abs(z), b), C && (z = iE(z)), de && +z == 0 && p !== "+" && (de = !1), X = (de ? p === "(" ? p : a : p === "-" || p === "(" ? "" : p) + X, H = (A === "s" ? Vh[8 + um / 3] : "") + H + (de && p === "(" ? ")" : ""), W) {
          for (le = -1, Xe = z.length; ++le < Xe; )
            if (xe = z.charCodeAt(le), 48 > xe || xe > 57) {
              H = (xe === 46 ? s + z.slice(le + 1) : z.slice(le)) + H, z = z.slice(0, le);
              break;
            }
        }
      }
      k && !w && (z = t(z, 1 / 0));
      var ue = X.length + z.length + H.length, Te = ue < S ? new Array(S - ue + 1).join(h) : "";
      switch (k && w && (z = t(Te + z, Te.length ? S - H.length : 1 / 0), Te = ""), d) {
        case "<":
          z = X + z + H + Te;
          break;
        case "=":
          z = X + Te + z + H;
          break;
        case "^":
          z = Te.slice(0, ue = Te.length >> 1) + X + z + H + Te.slice(ue);
          break;
        default:
          z = Te + X + z + H;
          break;
      }
      return r(z);
    }
    return G.toString = function() {
      return f + "";
    }, G;
  }
  function c(f, h) {
    var d = u((f = bo(f), f.type = "f", f)), p = Math.max(-8, Math.min(8, Math.floor(es(h) / 3))) * 3, y = Math.pow(10, -p), w = Vh[8 + p / 3];
    return function(S) {
      return d(y * S) + w;
    };
  }
  return {
    format: u,
    formatPrefix: c
  };
}
var kr, Xc, fm;
oE({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function oE(e) {
  return kr = rE(e), Xc = kr.format, fm = kr.formatPrefix, kr;
}
function hm(e) {
  return Math.max(0, -es(Math.abs(e)));
}
function aE(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(es(t) / 3))) * 3 - es(Math.abs(e)));
}
function lE(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, es(t) - es(e)) + 1;
}
function cE(e, t, n, i) {
  var s = wk(e, t, n), r;
  switch (i = bo(i ?? ",f"), i.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return i.precision == null && !isNaN(r = aE(s, o)) && (i.precision = r), fm(i, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      i.precision == null && !isNaN(r = lE(s, Math.max(Math.abs(e), Math.abs(t)))) && (i.precision = r - (i.type === "e"));
      break;
    }
    case "f":
    case "%": {
      i.precision == null && !isNaN(r = hm(s)) && (i.precision = r - (i.type === "%") * 2);
      break;
    }
  }
  return Xc(i);
}
function dm(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var i = t();
    return bk(i[0], i[i.length - 1], n ?? 10);
  }, e.tickFormat = function(n, i) {
    var s = t();
    return cE(s[0], s[s.length - 1], n ?? 10, i);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var i = t(), s = 0, r = i.length - 1, o = i[s], a = i[r], l, u, c = 10;
    for (a < o && (u = o, o = a, a = u, u = s, s = r, r = u); c-- > 0; ) {
      if (u = _l(o, a, n), u === l)
        return i[s] = o, i[r] = a, t(i);
      if (u > 0)
        o = Math.floor(o / u) * u, a = Math.ceil(a / u) * u;
      else if (u < 0)
        o = Math.ceil(o * u) / u, a = Math.floor(a * u) / u;
      else
        break;
      l = u;
    }
    return e;
  }, e;
}
function pm() {
  var e = Qk();
  return e.copy = function() {
    return Xk(e, pm());
  }, vk.apply(e, arguments), dm(e);
}
function uE() {
  var e = 0, t = 1, n, i, s, r, o = Bn, a = !1, l;
  function u(f) {
    return f == null || isNaN(f = +f) ? l : o(s === 0 ? 0.5 : (f = (r(f) - n) * s, a ? Math.max(0, Math.min(1, f)) : f));
  }
  u.domain = function(f) {
    return arguments.length ? ([e, t] = f, n = r(e = +e), i = r(t = +t), s = n === i ? 0 : 1 / (i - n), u) : [e, t];
  }, u.clamp = function(f) {
    return arguments.length ? (a = !!f, u) : a;
  }, u.interpolator = function(f) {
    return arguments.length ? (o = f, u) : o;
  };
  function c(f) {
    return function(h) {
      var d, p;
      return arguments.length ? ([d, p] = h, o = f(d, p), u) : [o(0), o(1)];
    };
  }
  return u.range = c(ta), u.rangeRound = c(cm), u.unknown = function(f) {
    return arguments.length ? (l = f, u) : l;
  }, function(f) {
    return r = f, n = f(e), i = f(t), s = n === i ? 0 : 1 / (i - n), u;
  };
}
function fE(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function gm() {
  var e = dm(uE()(Bn));
  return e.copy = function() {
    return fE(e, gm());
  }, _k.apply(e, arguments);
}
function hE(e) {
  return e;
}
var Vr = 1, zr = 2, kl = 3, Ss = 4, zh = 1e-6;
function dE(e) {
  return "translate(" + e + ",0)";
}
function pE(e) {
  return "translate(0," + e + ")";
}
function gE(e) {
  return (t) => +e(t);
}
function mE(e, t) {
  return t = Math.max(0, e.bandwidth() - t * 2) / 2, e.round() && (t = Math.round(t)), (n) => +e(n) + t;
}
function yE() {
  return !this.__axis;
}
function na(e, t) {
  var n = [], i = null, s = null, r = 6, o = 6, a = 3, l = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, u = e === Vr || e === Ss ? -1 : 1, c = e === Ss || e === zr ? "x" : "y", f = e === Vr || e === kl ? dE : pE;
  function h(d) {
    var p = i ?? (t.ticks ? t.ticks.apply(t, n) : t.domain()), y = s ?? (t.tickFormat ? t.tickFormat.apply(t, n) : hE), w = Math.max(r, 0) + a, S = t.range(), k = +S[0] + l, b = +S[S.length - 1] + l, C = (t.bandwidth ? mE : gE)(t.copy(), l), A = d.selection ? d.selection() : d, I = A.selectAll(".domain").data([null]), P = A.selectAll(".tick").data(p, t).order(), D = P.exit(), W = P.enter().append("g").attr("class", "tick"), G = P.select("line"), z = P.select("text");
    I = I.merge(I.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), P = P.merge(W), G = G.merge(W.append("line").attr("stroke", "currentColor").attr(c + "2", u * r)), z = z.merge(W.append("text").attr("fill", "currentColor").attr(c, u * w).attr("dy", e === Vr ? "0em" : e === kl ? "0.71em" : "0.32em")), d !== A && (I = I.transition(d), P = P.transition(d), G = G.transition(d), z = z.transition(d), D = D.transition(d).attr("opacity", zh).attr("transform", function(X) {
      return isFinite(X = C(X)) ? f(X + l) : this.getAttribute("transform");
    }), W.attr("opacity", zh).attr("transform", function(X) {
      var H = this.parentNode.__axis;
      return f((H && isFinite(H = H(X)) ? H : C(X)) + l);
    })), D.remove(), I.attr("d", e === Ss || e === zr ? o ? "M" + u * o + "," + k + "H" + l + "V" + b + "H" + u * o : "M" + l + "," + k + "V" + b : o ? "M" + k + "," + u * o + "V" + l + "H" + b + "V" + u * o : "M" + k + "," + l + "H" + b), P.attr("opacity", 1).attr("transform", function(X) {
      return f(C(X) + l);
    }), G.attr(c + "2", u * r), z.attr(c, u * w).text(y), A.filter(yE).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", e === zr ? "start" : e === Ss ? "end" : "middle"), A.each(function() {
      this.__axis = C;
    });
  }
  return h.scale = function(d) {
    return arguments.length ? (t = d, h) : t;
  }, h.ticks = function() {
    return n = Array.from(arguments), h;
  }, h.tickArguments = function(d) {
    return arguments.length ? (n = d == null ? [] : Array.from(d), h) : n.slice();
  }, h.tickValues = function(d) {
    return arguments.length ? (i = d == null ? null : Array.from(d), h) : i && i.slice();
  }, h.tickFormat = function(d) {
    return arguments.length ? (s = d, h) : s;
  }, h.tickSize = function(d) {
    return arguments.length ? (r = o = +d, h) : r;
  }, h.tickSizeInner = function(d) {
    return arguments.length ? (r = +d, h) : r;
  }, h.tickSizeOuter = function(d) {
    return arguments.length ? (o = +d, h) : o;
  }, h.tickPadding = function(d) {
    return arguments.length ? (a = +d, h) : a;
  }, h.offset = function(d) {
    return arguments.length ? (l = +d, h) : l;
  }, h;
}
function bE(e) {
  return na(Vr, e);
}
function wE(e) {
  return na(zr, e);
}
function vE(e) {
  return na(kl, e);
}
function _E(e) {
  return na(Ss, e);
}
const El = Math.PI, Cl = 2 * El, ai = 1e-6, xE = Cl - ai;
function mm(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function SE(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return mm;
  const n = 10 ** t;
  return function(i) {
    this._ += i[0];
    for (let s = 1, r = i.length; s < r; ++s)
      this._ += Math.round(arguments[s] * n) / n + i[s];
  };
}
class Jc {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? mm : SE(t);
  }
  moveTo(t, n) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, n) {
    this._append`L${this._x1 = +t},${this._y1 = +n}`;
  }
  quadraticCurveTo(t, n, i, s) {
    this._append`Q${+t},${+n},${this._x1 = +i},${this._y1 = +s}`;
  }
  bezierCurveTo(t, n, i, s, r, o) {
    this._append`C${+t},${+n},${+i},${+s},${this._x1 = +r},${this._y1 = +o}`;
  }
  arcTo(t, n, i, s, r) {
    if (t = +t, n = +n, i = +i, s = +s, r = +r, r < 0) throw new Error(`negative radius: ${r}`);
    let o = this._x1, a = this._y1, l = i - t, u = s - n, c = o - t, f = a - n, h = c * c + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (h > ai) if (!(Math.abs(f * l - u * c) > ai) || !r)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let d = i - o, p = s - a, y = l * l + u * u, w = d * d + p * p, S = Math.sqrt(y), k = Math.sqrt(h), b = r * Math.tan((El - Math.acos((y + h - w) / (2 * S * k))) / 2), C = b / k, A = b / S;
      Math.abs(C - 1) > ai && this._append`L${t + C * c},${n + C * f}`, this._append`A${r},${r},0,0,${+(f * d > c * p)},${this._x1 = t + A * l},${this._y1 = n + A * u}`;
    }
  }
  arc(t, n, i, s, r, o) {
    if (t = +t, n = +n, i = +i, o = !!o, i < 0) throw new Error(`negative radius: ${i}`);
    let a = i * Math.cos(s), l = i * Math.sin(s), u = t + a, c = n + l, f = 1 ^ o, h = o ? s - r : r - s;
    this._x1 === null ? this._append`M${u},${c}` : (Math.abs(this._x1 - u) > ai || Math.abs(this._y1 - c) > ai) && this._append`L${u},${c}`, i && (h < 0 && (h = h % Cl + Cl), h > xE ? this._append`A${i},${i},0,1,${f},${t - a},${n - l}A${i},${i},0,1,${f},${this._x1 = u},${this._y1 = c}` : h > ai && this._append`A${i},${i},0,${+(h >= El)},${f},${this._x1 = t + i * Math.cos(r)},${this._y1 = n + i * Math.sin(r)}`);
  }
  rect(t, n, i, s) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${i = +i}v${+s}h${-i}Z`;
  }
  toString() {
    return this._;
  }
}
function ym() {
  return new Jc();
}
ym.prototype = Jc.prototype;
function Ot(e) {
  return function() {
    return e;
  };
}
const Gh = Math.abs, Ze = Math.atan2, oi = Math.cos, kE = Math.max, Ra = Math.min, Jt = Math.sin, sn = Math.sqrt, ut = 1e-12, ts = Math.PI, wo = ts / 2, bm = 2 * ts;
function EE(e) {
  return e > 1 ? 0 : e < -1 ? ts : Math.acos(e);
}
function Hh(e) {
  return e >= 1 ? wo : e <= -1 ? -wo : Math.asin(e);
}
function wm(e) {
  let t = 3;
  return e.digits = function(n) {
    if (!arguments.length) return t;
    if (n == null)
      t = null;
    else {
      const i = Math.floor(n);
      if (!(i >= 0)) throw new RangeError(`invalid digits: ${n}`);
      t = i;
    }
    return e;
  }, () => new Jc(t);
}
function CE(e) {
  return e.innerRadius;
}
function TE(e) {
  return e.outerRadius;
}
function AE(e) {
  return e.startAngle;
}
function OE(e) {
  return e.endAngle;
}
function PE(e) {
  return e && e.padAngle;
}
function NE(e, t, n, i, s, r, o, a) {
  var l = n - e, u = i - t, c = o - s, f = a - r, h = f * l - c * u;
  if (!(h * h < ut))
    return h = (c * (t - r) - f * (e - s)) / h, [e + h * l, t + h * u];
}
function Er(e, t, n, i, s, r, o) {
  var a = e - n, l = t - i, u = (o ? r : -r) / sn(a * a + l * l), c = u * l, f = -u * a, h = e + c, d = t + f, p = n + c, y = i + f, w = (h + p) / 2, S = (d + y) / 2, k = p - h, b = y - d, C = k * k + b * b, A = s - r, I = h * y - p * d, P = (b < 0 ? -1 : 1) * sn(kE(0, A * A * C - I * I)), D = (I * b - k * P) / C, W = (-I * k - b * P) / C, G = (I * b + k * P) / C, z = (-I * k + b * P) / C, X = D - w, H = W - S, le = G - w, Xe = z - S;
  return X * X + H * H > le * le + Xe * Xe && (D = G, W = z), {
    cx: D,
    cy: W,
    x01: -c,
    y01: -f,
    x11: D * (s / A - 1),
    y11: W * (s / A - 1)
  };
}
function IE() {
  var e = CE, t = TE, n = Ot(0), i = null, s = AE, r = OE, o = PE, a = null, l = wm(u);
  function u() {
    var c, f, h = +e.apply(this, arguments), d = +t.apply(this, arguments), p = s.apply(this, arguments) - wo, y = r.apply(this, arguments) - wo, w = Gh(y - p), S = y > p;
    if (a || (a = c = l()), d < h && (f = d, d = h, h = f), !(d > ut)) a.moveTo(0, 0);
    else if (w > bm - ut)
      a.moveTo(d * oi(p), d * Jt(p)), a.arc(0, 0, d, p, y, !S), h > ut && (a.moveTo(h * oi(y), h * Jt(y)), a.arc(0, 0, h, y, p, S));
    else {
      var k = p, b = y, C = p, A = y, I = w, P = w, D = o.apply(this, arguments) / 2, W = D > ut && (i ? +i.apply(this, arguments) : sn(h * h + d * d)), G = Ra(Gh(d - h) / 2, +n.apply(this, arguments)), z = G, X = G, H, le;
      if (W > ut) {
        var Xe = Hh(W / h * Jt(D)), xe = Hh(W / d * Jt(D));
        (I -= Xe * 2) > ut ? (Xe *= S ? 1 : -1, C += Xe, A -= Xe) : (I = 0, C = A = (p + y) / 2), (P -= xe * 2) > ut ? (xe *= S ? 1 : -1, k += xe, b -= xe) : (P = 0, k = b = (p + y) / 2);
      }
      var de = d * oi(k), ue = d * Jt(k), Te = h * oi(A), yt = h * Jt(A);
      if (G > ut) {
        var Fe = d * oi(b), je = d * Jt(b), Gt = h * oi(C), Ht = h * Jt(C), st;
        if (w < ts)
          if (st = NE(de, ue, Gt, Ht, Fe, je, Te, yt)) {
            var bt = de - st[0], Ft = ue - st[1], $t = Fe - st[0], Kt = je - st[1], wt = 1 / Jt(EE((bt * $t + Ft * Kt) / (sn(bt * bt + Ft * Ft) * sn($t * $t + Kt * Kt))) / 2), dn = sn(st[0] * st[0] + st[1] * st[1]);
            z = Ra(G, (h - dn) / (wt - 1)), X = Ra(G, (d - dn) / (wt + 1));
          } else
            z = X = 0;
      }
      P > ut ? X > ut ? (H = Er(Gt, Ht, de, ue, d, X, S), le = Er(Fe, je, Te, yt, d, X, S), a.moveTo(H.cx + H.x01, H.cy + H.y01), X < G ? a.arc(H.cx, H.cy, X, Ze(H.y01, H.x01), Ze(le.y01, le.x01), !S) : (a.arc(H.cx, H.cy, X, Ze(H.y01, H.x01), Ze(H.y11, H.x11), !S), a.arc(0, 0, d, Ze(H.cy + H.y11, H.cx + H.x11), Ze(le.cy + le.y11, le.cx + le.x11), !S), a.arc(le.cx, le.cy, X, Ze(le.y11, le.x11), Ze(le.y01, le.x01), !S))) : (a.moveTo(de, ue), a.arc(0, 0, d, k, b, !S)) : a.moveTo(de, ue), !(h > ut) || !(I > ut) ? a.lineTo(Te, yt) : z > ut ? (H = Er(Te, yt, Fe, je, h, -z, S), le = Er(de, ue, Gt, Ht, h, -z, S), a.lineTo(H.cx + H.x01, H.cy + H.y01), z < G ? a.arc(H.cx, H.cy, z, Ze(H.y01, H.x01), Ze(le.y01, le.x01), !S) : (a.arc(H.cx, H.cy, z, Ze(H.y01, H.x01), Ze(H.y11, H.x11), !S), a.arc(0, 0, h, Ze(H.cy + H.y11, H.cx + H.x11), Ze(le.cy + le.y11, le.cx + le.x11), S), a.arc(le.cx, le.cy, z, Ze(le.y11, le.x11), Ze(le.y01, le.x01), !S))) : a.arc(0, 0, h, A, C, S);
    }
    if (a.closePath(), c) return a = null, c + "" || null;
  }
  return u.centroid = function() {
    var c = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, f = (+s.apply(this, arguments) + +r.apply(this, arguments)) / 2 - ts / 2;
    return [oi(f) * c, Jt(f) * c];
  }, u.innerRadius = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : Ot(+c), u) : e;
  }, u.outerRadius = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : Ot(+c), u) : t;
  }, u.cornerRadius = function(c) {
    return arguments.length ? (n = typeof c == "function" ? c : Ot(+c), u) : n;
  }, u.padRadius = function(c) {
    return arguments.length ? (i = c == null ? null : typeof c == "function" ? c : Ot(+c), u) : i;
  }, u.startAngle = function(c) {
    return arguments.length ? (s = typeof c == "function" ? c : Ot(+c), u) : s;
  }, u.endAngle = function(c) {
    return arguments.length ? (r = typeof c == "function" ? c : Ot(+c), u) : r;
  }, u.padAngle = function(c) {
    return arguments.length ? (o = typeof c == "function" ? c : Ot(+c), u) : o;
  }, u.context = function(c) {
    return arguments.length ? (a = c ?? null, u) : a;
  }, u;
}
const ME = {
  draw(e, t) {
    const n = sn(t / ts);
    e.moveTo(n, 0), e.arc(0, 0, n, 0, bm);
  }
}, LE = {
  draw(e, t) {
    const n = sn(t), i = -n / 2;
    e.rect(i, i, n, n);
  }
}, Fa = sn(3), DE = {
  draw(e, t) {
    const n = -sn(t / (Fa * 3));
    e.moveTo(0, n * 2), e.lineTo(-Fa * n, -n), e.lineTo(Fa * n, -n), e.closePath();
  }
};
function RE(e, t) {
  let n = null, i = wm(s);
  e = typeof e == "function" ? e : Ot(e || ME), t = typeof t == "function" ? t : Ot(t === void 0 ? 64 : +t);
  function s() {
    let r;
    if (n || (n = r = i()), e.apply(this, arguments).draw(n, +t.apply(this, arguments)), r) return n = null, r + "" || null;
  }
  return s.type = function(r) {
    return arguments.length ? (e = typeof r == "function" ? r : Ot(r), s) : e;
  }, s.size = function(r) {
    return arguments.length ? (t = typeof r == "function" ? r : Ot(+r), s) : t;
  }, s.context = function(r) {
    return arguments.length ? (n = r ?? null, s) : n;
  }, s;
}
const he = {
  precisionFixed: hm,
  format: Xc,
  select: lk,
  selectAll: ck,
  scaleLinear: pm,
  scaleSequential: gm,
  axisTop: bE,
  axisBottom: vE,
  axisRight: wE,
  axisLeft: _E,
  symbol: RE,
  path: ym,
  arc: IE,
  symbolTriangle: DE,
  symbolSquare: LE
};
let Cr;
const FE = new Uint8Array(16);
function $E() {
  if (!Cr && (Cr = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Cr))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Cr(FE);
}
const Je = [];
for (let e = 0; e < 256; ++e)
  Je.push((e + 256).toString(16).slice(1));
function BE(e, t = 0) {
  return Je[e[t + 0]] + Je[e[t + 1]] + Je[e[t + 2]] + Je[e[t + 3]] + "-" + Je[e[t + 4]] + Je[e[t + 5]] + "-" + Je[e[t + 6]] + Je[e[t + 7]] + "-" + Je[e[t + 8]] + Je[e[t + 9]] + "-" + Je[e[t + 10]] + Je[e[t + 11]] + Je[e[t + 12]] + Je[e[t + 13]] + Je[e[t + 14]] + Je[e[t + 15]];
}
const jE = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Kh = {
  randomUUID: jE
};
function vm(e, t, n) {
  if (Kh.randomUUID && !t && !e)
    return Kh.randomUUID();
  e = e || {};
  const i = e.random || (e.rng || $E)();
  return i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, BE(i);
}
const Di = 1e-10, qE = 10;
function bs(e, t, n = Di) {
  const i = e - t;
  return Math.abs(i) < n ? 0 : i;
}
const Yh = (e) => typeof e == "number" && Number.isFinite(e), ke = {
  greaterThan: (e, t, n = Di) => bs(
    e,
    t,
    n
  ) > 0,
  greaterThanOrEqualTo: (e, t, n = Di) => bs(
    e,
    t,
    n
  ) >= 0,
  lessThan: (e, t, n = Di) => bs(
    e,
    t,
    n
  ) < 0,
  lessThanOrEqualTo: (e, t, n = Di) => bs(
    e,
    t,
    n
  ) <= 0,
  equalTo: (e, t, n = Di) => bs(
    e,
    t,
    n
  ) === 0,
  isNumber: Yh,
  round: (e) => Yh(e) ? Number(e.toFixed(qE)) : !1,
  getRandom: (e) => Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296 * e),
  getRandomSample(e, t) {
    const n = e.slice();
    let i = e.length;
    const s = i - t;
    for (; i-- > s; ) {
      const r = Math.floor(Math.random() * (i + 1));
      [n[i], n[r]] = [n[r], n[i]];
    }
    return n.slice(s);
  }
};
function $(e) {
  return !(e === void 0 || e === null || e === "" || typeof e == "object" && !Object.values(e).length);
}
function Tr(e, t = !0) {
  return !$(e) || typeof e != "object" ? !1 : !!Object.values(e).some((i) => !(!$(i) || t && !i));
}
function UE(e) {
  return e ? e.reduce((t, n) => {
    const i = $(n.q) && typeof n.q == "string" ? parseInt(n.q) : n.q;
    return !isNaN(i) && i > 0 ? t + i : t;
  }, 0) : 0;
}
function WE(e) {
  if (!(e != null && e.length)) return [];
  const t = e.filter((i) => !i.added).map((i) => (i.parentID = i.getParentID(), i)), n = {};
  return t.forEach((i) => {
    n[i.parentID] ? ++n[i.parentID].count : (n[i.parentID] = {}, n[i.parentID].count = 1, n[i.parentID].id = i.parentID, n[i.parentID].name = i != null && i.name ? i.name : i.id, n[i.parentID].l = i.l, n[i.parentID].w = i.w, n[i.parentID].t = i.t, n[i.parentID].material = i.material, n[i.parentID].rot = i.rot);
  }), Object.values(n);
}
function VE(e) {
  return e != null && e.length ? e.filter((t) => t.used && (t.stack === !1 || typeof t.stack == "number")) : [];
}
function zE() {
  const e = document.documentElement;
  return "requestFullscreen" in e || "webkitRequestFullscreen" in e || "mozRequestFullScreen" in e || "msRequestFullscreen" in e;
}
function us(e) {
  return e ? (e = e.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^ a-z0-9._\-|]/gim, ""), e.trim()) : null;
}
function Qc(e, t = 100) {
  return e ? (e = e.trim(), e = e.substring(0, t), e) : "";
}
const ns = {
  //sort by width then length - use .sort(sortHeightDescWidthDesc)
  WDLD(e, t) {
    if (e.w < t.w) return 1;
    if (e.w > t.w) return -1;
    if (e.l === t.l) return 0;
    if (e.l < t.l) return 1;
    if (e.l > t.l) return -1;
  },
  WALA(e, t) {
    if (e.w > t.w) return 1;
    if (e.w < t.w) return -1;
    if (e.l === t.l) return 0;
    if (e.l > t.l) return 1;
    if (e.l < t.l) return -1;
  },
  //sort by length d then width d
  LDWD(e, t) {
    if (e.l < t.l) return 1;
    if (e.l > t.l) return -1;
    if (e.w === t.w) return 0;
    if (e.w < t.w) return 1;
    if (e.w > t.w) return -1;
  },
  LAWA(e, t) {
    if (e.l > t.l) return 1;
    if (e.l < t.l) return -1;
    if (e.w === t.w) return 0;
    if (e.w > t.w) return 1;
    if (e.w < t.w) return -1;
  },
  //sort by width d
  WD(e, t) {
    if (e.w < t.w) return 1;
    if (e.w > t.w) return -1;
    if (e.w === t.w) return 0;
  },
  LD(e, t) {
    if (e.l < t.l) return 1;
    if (e.l > t.l) return -1;
    if (e.l === t.l) return 0;
  },
  LDIDA(e, t) {
    if (e.l < t.l) return 1;
    if (e.l > t.l) return -1;
    const n = e.id.toString().split("."), i = t.id.toString().split(".");
    return n[0] !== i[0] ? parseInt(n[0]) - parseInt(i[0]) : parseInt(n[1]) - parseInt(i[1]);
  },
  WDIDA(e, t) {
    if (e.w < t.w) return 1;
    if (e.w > t.w) return -1;
    const n = e.id.toString().split("."), i = t.id.toString().split(".");
    return n[0] !== i[0] ? parseInt(n[0]) - parseInt(i[0]) : parseInt(n[1]) - parseInt(i[1]);
  },
  //sort by proportion
  /* sortProportion: function(a, b) {
  
  		if (a.proportion < b.proportion) return 1;
  		if (a.proportion > b.proportion) return -1;
  
  		if (a.proportion === b.proportion) return a.index - b.index;
  
  	} */
  //area descending
  AD(e, t) {
    const n = e.getArea(), i = t.getArea();
    if (n < i) return 1;
    if (n > i) return -1;
    if (n === i) return 0;
  },
  AA(e, t) {
    const n = e.getArea(), i = t.getArea();
    if (n < i) return -1;
    if (n > i) return 1;
    if (n === i) return 0;
  },
  AAID(e, t) {
    const n = e.getArea(), i = t.getArea();
    if (n < i) return -1;
    if (n > i) return 1;
    if (n === i) {
      const s = e.id.toString().split("."), r = t.id.toString().split(".");
      return s[0] !== r[0] ? parseInt(s[0]) - parseInt(r[0]) : parseInt(s[1]) - parseInt(r[1]);
    }
    return 0;
  },
  ADID(e, t) {
    const n = e.getArea(), i = t.getArea();
    if (n < i) return 1;
    if (n > i) return -1;
    if (n === i) return 0;
    if (n === i) {
      const s = e.id.toString().split("."), r = t.id.toString().split(".");
      return s[0] !== r[0] ? parseInt(s[0]) - parseInt(r[0]) : parseInt(s[1]) - parseInt(r[1]);
    }
    return 0;
  },
  //by id ascending
  ID(e, t) {
    const n = e.id.toString().split("."), i = t.id.toString().split(".");
    return n[0] !== i[0] ? parseInt(n[0]) - parseInt(i[0]) : parseInt(n[1]) - parseInt(i[1]);
  },
  IDDesc(e, t) {
    const n = e.id.toString().split("."), i = t.id.toString().split(".");
    return n[0] !== i[0] ? parseInt(i[0]) - parseInt(n[0]) : parseInt(i[1]) - parseInt(n[1]);
  },
  StockID(e, t) {
    const n = e.stock.id.toString().split("."), i = t.stock.id.toString().split(".");
    return n[0] !== i[0] ? parseInt(n[0]) - parseInt(i[0]) : parseInt(n[1]) - parseInt(i[1]);
  },
  StockIDAD(e, t) {
    const n = e.stock.id.toString().split("."), i = t.stock.id.toString().split(".");
    if (n[0] !== i[0])
      return parseInt(n[0]) - parseInt(i[0]);
    if (n[1] !== i[1])
      return parseInt(n[1]) - parseInt(i[1]);
    const s = e.getArea(), r = t.getArea();
    if (s < r) return 1;
    if (s > r) return -1;
  },
  parentID(e, t) {
    return e.parentID - t.parentID;
  },
  YX(e, t) {
    if (e.y < t.y) return -1;
    if (e.y > t.y) return 1;
    if (e.y === t.y) return 0;
    if (e.x < t.x) return -1;
    if (e.x > t.x) return 1;
  },
  XY(e, t) {
    if (e.x < t.x) return -1;
    if (e.x > t.x) return 1;
    if (e.x === t.x) return 0;
    if (e.y < t.y) return -1;
    if (e.y > t.y) return 1;
  },
  subset(e, t) {
    if (e.totalLength < t.totalLength) return 1;
    if (e.totalLength > t.totalLength) return -1;
    if (e.area === t.area) return 0;
    if (e.area < t.area) return 1;
    if (e.area > t.area) return -1;
  },
  placementOrder(e, t) {
    return (e == null ? void 0 : e.placementOrder) - (t == null ? void 0 : t.placementOrder);
  },
  typePlacementOrder(e, t) {
    if (e.offcut && !t.offcut) return 1;
    if (!e.offcut && t.offcut) return 0;
    if (e.offcut === t.offcut) return e.placementOrder - t.placementOrder;
  },
  stockIDTypePlacementOrder(e, t) {
    const n = e.stock.id.toString().split("."), i = t.stock.id.toString().split(".");
    if (n[0] !== i[0])
      return parseInt(n[0]) - parseInt(i[0]);
    if (n[1] !== i[1])
      return parseInt(n[1]) - parseInt(i[1]);
    if (e.offcut && !t.offcut) return 1;
    if (!e.offcut && t.offcut) return 0;
    if (e.offcut === t.offcut) return e.placementOrder - t.placementOrder;
  },
  offcutPlacementOrder(e, t) {
    var s, r;
    if (!((s = e == null ? void 0 : e.stock) != null && s.id) || !((r = t == null ? void 0 : t.stock) != null && r.id)) return 0;
    const n = e.stock.id.toString().split("."), i = t.stock.id.toString().split(".");
    return n[0] !== i[0] ? parseInt(n[0]) - parseInt(i[0]) : n[1] !== i[1] ? parseInt(n[1]) - parseInt(i[1]) : (e == null ? void 0 : e.placementOrder) - (t == null ? void 0 : t.placementOrder);
  },
  groupPlacementOrder(e, t) {
    if (e.placementOrder > t.placementOrder) return 1;
    if (e.placementOrder < t.placementOrder) return -1;
    if (e.groupPlacementOrder === t.groupPlacementOrder) return 0;
    if (e.groupPlacementOrder > t.groupPlacementOrder) return 1;
    if (e.groupPlacementOrder < t.groupPlacementOrder) return -1;
  },
  swapFirstTwo(e) {
    const t = e[1];
    e[1] = e[0], e[0] = t;
  },
  //Fisher-Yates shuffle
  shuffle(e) {
    for (let t = e.length - 1; t > 0; t--) {
      const n = Math.floor(Math.random() * (t + 1));
      [e[t], e[n]] = [e[n], e[t]];
    }
  },
  /**
      * generator function which accepts a dimension to cater for shape rotation lock
      */
  fillThenArea(e) {
    return function(t, n) {
      return t.getLongSide(e) > n.getLongSide(e) ? -1 : t.getLongSide(e) < n.getLongSide(e) ? 1 : t.getArea() > n.getArea() ? -1 : t.getArea() < n.getArea() ? 1 : 0;
    };
  },
  aspect(e, t) {
    const n = e.getAspect(), i = t.getAspect();
    return n > i ? -1 : n < i ? 1 : 0;
  }
};
function Ys(e) {
  return e ? e === "l" ? "w" : "l" : null;
}
var HI = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _m(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Tl = { exports: {} }, $a, Xh;
function GE() {
  if (Xh) return $a;
  Xh = 1;
  var e = 1e3, t = e * 60, n = t * 60, i = n * 24, s = i * 7, r = i * 365.25;
  $a = function(c, f) {
    f = f || {};
    var h = typeof c;
    if (h === "string" && c.length > 0)
      return o(c);
    if (h === "number" && isFinite(c))
      return f.long ? l(c) : a(c);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(c)
    );
  };
  function o(c) {
    if (c = String(c), !(c.length > 100)) {
      var f = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        c
      );
      if (f) {
        var h = parseFloat(f[1]), d = (f[2] || "ms").toLowerCase();
        switch (d) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return h * r;
          case "weeks":
          case "week":
          case "w":
            return h * s;
          case "days":
          case "day":
          case "d":
            return h * i;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return h * n;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return h * t;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return h * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return h;
          default:
            return;
        }
      }
    }
  }
  function a(c) {
    var f = Math.abs(c);
    return f >= i ? Math.round(c / i) + "d" : f >= n ? Math.round(c / n) + "h" : f >= t ? Math.round(c / t) + "m" : f >= e ? Math.round(c / e) + "s" : c + "ms";
  }
  function l(c) {
    var f = Math.abs(c);
    return f >= i ? u(c, f, i, "day") : f >= n ? u(c, f, n, "hour") : f >= t ? u(c, f, t, "minute") : f >= e ? u(c, f, e, "second") : c + " ms";
  }
  function u(c, f, h, d) {
    var p = f >= h * 1.5;
    return Math.round(c / h) + " " + d + (p ? "s" : "");
  }
  return $a;
}
function HE(e) {
  n.debug = n, n.default = n, n.coerce = l, n.disable = r, n.enable = s, n.enabled = o, n.humanize = GE(), n.destroy = u, Object.keys(e).forEach((c) => {
    n[c] = e[c];
  }), n.names = [], n.skips = [], n.formatters = {};
  function t(c) {
    let f = 0;
    for (let h = 0; h < c.length; h++)
      f = (f << 5) - f + c.charCodeAt(h), f |= 0;
    return n.colors[Math.abs(f) % n.colors.length];
  }
  n.selectColor = t;
  function n(c) {
    let f, h = null, d, p;
    function y(...w) {
      if (!y.enabled)
        return;
      const S = y, k = Number(/* @__PURE__ */ new Date()), b = k - (f || k);
      S.diff = b, S.prev = f, S.curr = k, f = k, w[0] = n.coerce(w[0]), typeof w[0] != "string" && w.unshift("%O");
      let C = 0;
      w[0] = w[0].replace(/%([a-zA-Z%])/g, (I, P) => {
        if (I === "%%")
          return "%";
        C++;
        const D = n.formatters[P];
        if (typeof D == "function") {
          const W = w[C];
          I = D.call(S, W), w.splice(C, 1), C--;
        }
        return I;
      }), n.formatArgs.call(S, w), (S.log || n.log).apply(S, w);
    }
    return y.namespace = c, y.useColors = n.useColors(), y.color = n.selectColor(c), y.extend = i, y.destroy = n.destroy, Object.defineProperty(y, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => h !== null ? h : (d !== n.namespaces && (d = n.namespaces, p = n.enabled(c)), p),
      set: (w) => {
        h = w;
      }
    }), typeof n.init == "function" && n.init(y), y;
  }
  function i(c, f) {
    const h = n(this.namespace + (typeof f > "u" ? ":" : f) + c);
    return h.log = this.log, h;
  }
  function s(c) {
    n.save(c), n.namespaces = c, n.names = [], n.skips = [];
    let f;
    const h = (typeof c == "string" ? c : "").split(/[\s,]+/), d = h.length;
    for (f = 0; f < d; f++)
      h[f] && (c = h[f].replace(/\*/g, ".*?"), c[0] === "-" ? n.skips.push(new RegExp("^" + c.slice(1) + "$")) : n.names.push(new RegExp("^" + c + "$")));
  }
  function r() {
    const c = [
      ...n.names.map(a),
      ...n.skips.map(a).map((f) => "-" + f)
    ].join(",");
    return n.enable(""), c;
  }
  function o(c) {
    if (c[c.length - 1] === "*")
      return !0;
    let f, h;
    for (f = 0, h = n.skips.length; f < h; f++)
      if (n.skips[f].test(c))
        return !1;
    for (f = 0, h = n.names.length; f < h; f++)
      if (n.names[f].test(c))
        return !0;
    return !1;
  }
  function a(c) {
    return c.toString().substring(2, c.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function l(c) {
    return c instanceof Error ? c.stack || c.message : c;
  }
  function u() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return n.enable(n.load()), n;
}
var KE = HE;
(function(e, t) {
  t.formatArgs = i, t.save = s, t.load = r, t.useColors = n, t.storage = o(), t.destroy = /* @__PURE__ */ (() => {
    let l = !1;
    return () => {
      l || (l = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), t.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
  ];
  function n() {
    return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function i(l) {
    if (l[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + l[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors)
      return;
    const u = "color: " + this.color;
    l.splice(1, 0, u, "color: inherit");
    let c = 0, f = 0;
    l[0].replace(/%[a-zA-Z%]/g, (h) => {
      h !== "%%" && (c++, h === "%c" && (f = c));
    }), l.splice(f, 0, u);
  }
  t.log = console.debug || console.log || (() => {
  });
  function s(l) {
    try {
      l ? t.storage.setItem("debug", l) : t.storage.removeItem("debug");
    } catch {
    }
  }
  function r() {
    let l;
    try {
      l = t.storage.getItem("debug");
    } catch {
    }
    return !l && typeof process < "u" && "env" in process && (l = void 0), l;
  }
  function o() {
    try {
      return localStorage;
    } catch {
    }
  }
  e.exports = KE(t);
  const { formatters: a } = e.exports;
  a.j = function(l) {
    try {
      return JSON.stringify(l);
    } catch (u) {
      return "[UnexpectedJSONParseError]: " + u.message;
    }
  };
})(Tl, Tl.exports);
var YE = Tl.exports;
const ei = /* @__PURE__ */ _m(YE);
ei("logs");
ei("guillotine");
ei("results");
ei("scoring");
ei("calculations");
ei("errors");
ei("secondRun");
ei("stack");
class XE {
  constructor(t) {
    g(this, "x1");
    g(this, "x2");
    g(this, "y1");
    g(this, "y2");
    g(this, "direction");
    g(this, "shapeCollisions");
    this.x1 = t.x1, this.x2 = t.x2, this.y1 = t.y1, this.y2 = t.y2, this.direction = JE(this);
  }
  getCoordinates() {
    return {
      x1: this.x1,
      x2: this.x2,
      y1: this.y1,
      y2: this.y2
    };
  }
}
function JE(e) {
  return typeof e > "u" || !ke.isNumber(e.x1) || !ke.isNumber(e.x2) || !ke.isNumber(e.y1) || !ke.isNumber(e.y2) ? null : e.x1 === e.x2 && e.y1 !== e.y2 ? "w" : e.y1 === e.y2 && e.x1 !== e.x2 ? "l" : null;
}
function QE(e) {
  if (e != null && e.direction)
    switch (e.direction) {
      case "l":
        return e.x2 - e.x1;
      case "w":
        return e.y2 - e.y1;
    }
  switch (e.type) {
    case "top":
    case "bottom":
      return e.x2 - e.x1;
    case "left":
    case "right":
      return e.y2 - e.y1;
  }
  return 0;
}
class ia extends XE {
  //used to mark for removal
  constructor(n) {
    var i, s, r, o;
    n.x2 < n.x1 && ([n.x1, n.x2] = [n.x2, n.x1]), n.y2 < n.y1 && ([n.y1, n.y2] = [n.y2, n.y1]);
    super(n);
    g(this, "stock");
    g(this, "stockId");
    g(this, "type", null);
    g(this, "guillotine");
    g(this, "guillotineData");
    g(this, "isTrim");
    g(this, "distances");
    g(this, "beamTrimX1");
    g(this, "beamTrimY1");
    g(this, "remove");
    $(n == null ? void 0 : n.stock) && (((s = (i = n.stock) == null ? void 0 : i.constructor) == null ? void 0 : s.name) === "Stock" ? this.stock = n.stock : this.stock = new ti(n.stock), this.stockId = this.stock.id), this.stockId = (r = n == null ? void 0 : n.stock) == null ? void 0 : r.id, this.type = n.type ?? null, this.guillotine = n.guillotine, this.guillotineData = $(n.guillotineData) ? n.guillotineData : {}, this.guillotineData.ptxDummyCut = (n == null ? void 0 : n.ptxDummyCut) || ((o = n == null ? void 0 : n.guillotineData) == null ? void 0 : o.ptxDummyCut) || !1, this.isTrim = $(n.isTrim) ? n.isTrim : !1, this.distances = $(n.distances) ? n.distances : {}, this.beamTrimX1 = n.beamTrimX1, this.beamTrimY1 = n.beamTrimY1;
  }
  //compress for saving / transfer
  compress() {
    var n;
    this.stockId = (this == null ? void 0 : this.stockId) ?? ((n = this == null ? void 0 : this.stock) == null ? void 0 : n.id), delete this.shapeCollisions, delete this.stock;
  }
  clone() {
    const n = structuredClone(this);
    return new ia(n);
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
    const s = {
      top: "l",
      bottom: "l",
      left: "w",
      right: "w"
    }[n];
    if (s) return s;
    throw new Error("no direction found in lookupDirectionByType");
  }
  isInsideStock() {
    switch (this.type) {
      case "bottom":
        return ke.greaterThan(
          this.y1 + this.stock.getBladeWidth() / 2,
          0
        );
      case "left":
        return ke.greaterThan(
          this.x1 + this.stock.getBladeWidth() / 2,
          0
        );
      case "top":
        return ke.lessThan(
          this.y1 - this.stock.getBladeWidth() / 2,
          this.stock.w
        );
      case "right":
        return ke.lessThan(
          this.x1 - this.stock.getBladeWidth() / 2,
          this.stock.l
        );
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
    return QE(this);
  }
  getArea() {
    const n = this.getLength();
    return n ? n * this.stock.getBladeWidth() : 0;
  }
}
/**
* @license Fraction.js v4.3.7 31/08/2023
* https://www.xarg.org/2014/03/rational-numbers-in-javascript/
*
* Copyright (c) 2023, Robert Eisele (robert@raw.org)
* Dual licensed under the MIT or GPL Version 2 licenses.
**/
var ZE = 2e3, Q = {
  s: 1,
  n: 0,
  d: 1
};
function mn(e, t) {
  if (isNaN(e = parseInt(e, 10)))
    throw Gr();
  return e * t;
}
function De(e, t) {
  if (t === 0)
    throw Zc();
  var n = Object.create(Mt.prototype);
  n.s = e < 0 ? -1 : 1, e = e < 0 ? -e : e;
  var i = Fi(e, t);
  return n.n = e / i, n.d = t / i, n;
}
function Jh(e) {
  for (var t = {}, n = e, i = 2, s = 4; s <= n; ) {
    for (; n % i === 0; )
      n /= i, t[i] = (t[i] || 0) + 1;
    s += 1 + 2 * i++;
  }
  return n !== e ? n > 1 && (t[n] = (t[n] || 0) + 1) : t[e] = (t[e] || 0) + 1, t;
}
var xt = function(e, t) {
  var n = 0, i = 1, s = 1, r = 0, o = 0, a = 0, l = 1, u = 1, c = 0, f = 1, h = 1, d = 1, p = 1e7, y;
  if (e != null) if (t !== void 0) {
    if (n = e, i = t, s = n * i, n % 1 !== 0 || i % 1 !== 0)
      throw iC();
  } else
    switch (typeof e) {
      case "object": {
        if ("d" in e && "n" in e)
          n = e.n, i = e.d, "s" in e && (n *= e.s);
        else if (0 in e)
          n = e[0], 1 in e && (i = e[1]);
        else
          throw Gr();
        s = n * i;
        break;
      }
      case "number": {
        if (e < 0 && (s = e, e = -e), e % 1 === 0)
          n = e;
        else if (e > 0) {
          for (e >= 1 && (u = Math.pow(10, Math.floor(1 + Math.log(e) / Math.LN10)), e /= u); f <= p && d <= p; )
            if (y = (c + h) / (f + d), e === y) {
              f + d <= p ? (n = c + h, i = f + d) : d > f ? (n = h, i = d) : (n = c, i = f);
              break;
            } else
              e > y ? (c += h, f += d) : (h += c, d += f), f > p ? (n = h, i = d) : (n = c, i = f);
          n *= u;
        } else (isNaN(e) || isNaN(t)) && (i = n = NaN);
        break;
      }
      case "string": {
        if (f = e.match(/\d+|./g), f === null)
          throw Gr();
        if (f[c] === "-" ? (s = -1, c++) : f[c] === "+" && c++, f.length === c + 1 ? o = mn(f[c++], s) : f[c + 1] === "." || f[c] === "." ? (f[c] !== "." && (r = mn(f[c++], s)), c++, (c + 1 === f.length || f[c + 1] === "(" && f[c + 3] === ")" || f[c + 1] === "'" && f[c + 3] === "'") && (o = mn(f[c], s), l = Math.pow(10, f[c].length), c++), (f[c] === "(" && f[c + 2] === ")" || f[c] === "'" && f[c + 2] === "'") && (a = mn(f[c + 1], s), u = Math.pow(10, f[c + 1].length) - 1, c += 3)) : f[c + 1] === "/" || f[c + 1] === ":" ? (o = mn(f[c], s), l = mn(f[c + 2], 1), c += 3) : f[c + 3] === "/" && f[c + 1] === " " && (r = mn(f[c], s), o = mn(f[c + 2], s), l = mn(f[c + 4], 1), c += 5), f.length <= c) {
          i = l * u, s = /* void */
          n = a + i * r + u * o;
          break;
        }
      }
      default:
        throw Gr();
    }
  if (i === 0)
    throw Zc();
  Q.s = s < 0 ? -1 : 1, Q.n = Math.abs(n), Q.d = Math.abs(i);
};
function eC(e, t, n) {
  for (var i = 1; t > 0; e = e * e % n, t >>= 1)
    t & 1 && (i = i * e % n);
  return i;
}
function tC(e, t) {
  for (; t % 2 === 0; t /= 2)
    ;
  for (; t % 5 === 0; t /= 5)
    ;
  if (t === 1)
    return 0;
  for (var n = 10 % t, i = 1; n !== 1; i++)
    if (n = n * 10 % t, i > ZE)
      return 0;
  return i;
}
function nC(e, t, n) {
  for (var i = 1, s = eC(10, n, t), r = 0; r < 300; r++) {
    if (i === s)
      return r;
    i = i * 10 % t, s = s * 10 % t;
  }
  return 0;
}
function Fi(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  for (; ; ) {
    if (e %= t, !e)
      return t;
    if (t %= e, !t)
      return e;
  }
}
function Mt(e, t) {
  if (xt(e, t), this instanceof Mt)
    e = Fi(Q.d, Q.n), this.s = Q.s, this.n = Q.n / e, this.d = Q.d / e;
  else
    return De(Q.s * Q.n, Q.d);
}
var Zc = function() {
  return new Error("Division by Zero");
}, Gr = function() {
  return new Error("Invalid argument");
}, iC = function() {
  return new Error("Parameters must be integer");
};
Mt.prototype = {
  s: 1,
  n: 0,
  d: 1,
  /**
   * Calculates the absolute value
   *
   * Ex: new Fraction(-4).abs() => 4
   **/
  abs: function() {
    return De(this.n, this.d);
  },
  /**
   * Inverts the sign of the current fraction
   *
   * Ex: new Fraction(-4).neg() => 4
   **/
  neg: function() {
    return De(-this.s * this.n, this.d);
  },
  /**
   * Adds two rational numbers
   *
   * Ex: new Fraction({n: 2, d: 3}).add("14.9") => 467 / 30
   **/
  add: function(e, t) {
    return xt(e, t), De(
      this.s * this.n * Q.d + Q.s * this.d * Q.n,
      this.d * Q.d
    );
  },
  /**
   * Subtracts two rational numbers
   *
   * Ex: new Fraction({n: 2, d: 3}).add("14.9") => -427 / 30
   **/
  sub: function(e, t) {
    return xt(e, t), De(
      this.s * this.n * Q.d - Q.s * this.d * Q.n,
      this.d * Q.d
    );
  },
  /**
   * Multiplies two rational numbers
   *
   * Ex: new Fraction("-17.(345)").mul(3) => 5776 / 111
   **/
  mul: function(e, t) {
    return xt(e, t), De(
      this.s * Q.s * this.n * Q.n,
      this.d * Q.d
    );
  },
  /**
   * Divides two rational numbers
   *
   * Ex: new Fraction("-17.(345)").inverse().div(3)
   **/
  div: function(e, t) {
    return xt(e, t), De(
      this.s * Q.s * this.n * Q.d,
      this.d * Q.n
    );
  },
  /**
   * Clones the actual object
   *
   * Ex: new Fraction("-17.(345)").clone()
   **/
  clone: function() {
    return De(this.s * this.n, this.d);
  },
  /**
   * Calculates the modulo of two rational numbers - a more precise fmod
   *
   * Ex: new Fraction('4.(3)').mod([7, 8]) => (13/3) % (7/8) = (5/6)
   **/
  mod: function(e, t) {
    if (isNaN(this.n) || isNaN(this.d))
      return new Mt(NaN);
    if (e === void 0)
      return De(this.s * this.n % this.d, 1);
    if (xt(e, t), Q.n === 0 && this.d === 0)
      throw Zc();
    return De(
      this.s * (Q.d * this.n) % (Q.n * this.d),
      Q.d * this.d
    );
  },
  /**
   * Calculates the fractional gcd of two rational numbers
   *
   * Ex: new Fraction(5,8).gcd(3,7) => 1/56
   */
  gcd: function(e, t) {
    return xt(e, t), De(Fi(Q.n, this.n) * Fi(Q.d, this.d), Q.d * this.d);
  },
  /**
   * Calculates the fractional lcm of two rational numbers
   *
   * Ex: new Fraction(5,8).lcm(3,7) => 15
   */
  lcm: function(e, t) {
    return xt(e, t), Q.n === 0 && this.n === 0 ? De(0, 1) : De(Q.n * this.n, Fi(Q.n, this.n) * Fi(Q.d, this.d));
  },
  /**
   * Calculates the ceil of a rational number
   *
   * Ex: new Fraction('4.(3)').ceil() => (5 / 1)
   **/
  ceil: function(e) {
    return e = Math.pow(10, e || 0), isNaN(this.n) || isNaN(this.d) ? new Mt(NaN) : De(Math.ceil(e * this.s * this.n / this.d), e);
  },
  /**
   * Calculates the floor of a rational number
   *
   * Ex: new Fraction('4.(3)').floor() => (4 / 1)
   **/
  floor: function(e) {
    return e = Math.pow(10, e || 0), isNaN(this.n) || isNaN(this.d) ? new Mt(NaN) : De(Math.floor(e * this.s * this.n / this.d), e);
  },
  /**
   * Rounds a rational number
   *
   * Ex: new Fraction('4.(3)').round() => (4 / 1)
   **/
  round: function(e) {
    return e = Math.pow(10, e || 0), isNaN(this.n) || isNaN(this.d) ? new Mt(NaN) : De(Math.round(e * this.s * this.n / this.d), e);
  },
  /**
   * Rounds a rational number to a multiple of another rational number
   *
   * Ex: new Fraction('0.9').roundTo("1/8") => 7 / 8
   **/
  roundTo: function(e, t) {
    return xt(e, t), De(this.s * Math.round(this.n * Q.d / (this.d * Q.n)) * Q.n, Q.d);
  },
  /**
   * Gets the inverse of the fraction, means numerator and denominator are exchanged
   *
   * Ex: new Fraction([-3, 4]).inverse() => -4 / 3
   **/
  inverse: function() {
    return De(this.s * this.d, this.n);
  },
  /**
   * Calculates the fraction to some rational exponent, if possible
   *
   * Ex: new Fraction(-1,2).pow(-3) => -8
   */
  pow: function(e, t) {
    if (xt(e, t), Q.d === 1)
      return Q.s < 0 ? De(Math.pow(this.s * this.d, Q.n), Math.pow(this.n, Q.n)) : De(Math.pow(this.s * this.n, Q.n), Math.pow(this.d, Q.n));
    if (this.s < 0) return null;
    var n = Jh(this.n), i = Jh(this.d), s = 1, r = 1;
    for (var o in n)
      if (o !== "1") {
        if (o === "0") {
          s = 0;
          break;
        }
        if (n[o] *= Q.n, n[o] % Q.d === 0)
          n[o] /= Q.d;
        else return null;
        s *= Math.pow(o, n[o]);
      }
    for (var o in i)
      if (o !== "1") {
        if (i[o] *= Q.n, i[o] % Q.d === 0)
          i[o] /= Q.d;
        else return null;
        r *= Math.pow(o, i[o]);
      }
    return Q.s < 0 ? De(r, s) : De(s, r);
  },
  /**
   * Check if two rational numbers are the same
   *
   * Ex: new Fraction(19.6).equals([98, 5]);
   **/
  equals: function(e, t) {
    return xt(e, t), this.s * this.n * Q.d === Q.s * Q.n * this.d;
  },
  /**
   * Check if two rational numbers are the same
   *
   * Ex: new Fraction(19.6).equals([98, 5]);
   **/
  compare: function(e, t) {
    xt(e, t);
    var n = this.s * this.n * Q.d - Q.s * Q.n * this.d;
    return (0 < n) - (n < 0);
  },
  simplify: function(e) {
    if (isNaN(this.n) || isNaN(this.d))
      return this;
    e = e || 1e-3;
    for (var t = this.abs(), n = t.toContinued(), i = 1; i < n.length; i++) {
      for (var s = De(n[i - 1], 1), r = i - 2; r >= 0; r--)
        s = s.inverse().add(n[r]);
      if (Math.abs(s.sub(t).valueOf()) < e)
        return s.mul(this.s);
    }
    return this;
  },
  /**
   * Check if two rational numbers are divisible
   *
   * Ex: new Fraction(19.6).divisible(1.5);
   */
  divisible: function(e, t) {
    return xt(e, t), !(!(Q.n * this.d) || this.n * Q.d % (Q.n * this.d));
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
  toFraction: function(e) {
    var t, n = "", i = this.n, s = this.d;
    return this.s < 0 && (n += "-"), s === 1 ? n += i : (e && (t = Math.floor(i / s)) > 0 && (n += t, n += " ", i %= s), n += i, n += "/", n += s), n;
  },
  /**
   * Returns a latex representation of a Fraction object
   *
   * Ex: new Fraction("1.'3'").toLatex() => "\frac{4}{3}"
   **/
  toLatex: function(e) {
    var t, n = "", i = this.n, s = this.d;
    return this.s < 0 && (n += "-"), s === 1 ? n += i : (e && (t = Math.floor(i / s)) > 0 && (n += t, i %= s), n += "\\frac{", n += i, n += "}{", n += s, n += "}"), n;
  },
  /**
   * Returns an array of continued fraction elements
   *
   * Ex: new Fraction("7/8").toContinued() => [0,1,7]
   */
  toContinued: function() {
    var e, t = this.n, n = this.d, i = [];
    if (isNaN(t) || isNaN(n))
      return i;
    do
      i.push(Math.floor(t / n)), e = t % n, t = n, n = e;
    while (t !== 1);
    return i;
  },
  /**
   * Creates a string representation of a fraction with all digits
   *
   * Ex: new Fraction("100.'91823'").toString() => "100.(91823)"
   **/
  toString: function(e) {
    var t = this.n, n = this.d;
    if (isNaN(t) || isNaN(n))
      return "NaN";
    e = e || 15;
    var i = tC(t, n), s = nC(t, n, i), r = this.s < 0 ? "-" : "";
    if (r += t / n | 0, t %= n, t *= 10, t && (r += "."), i) {
      for (var o = s; o--; )
        r += t / n | 0, t %= n, t *= 10;
      r += "(";
      for (var o = i; o--; )
        r += t / n | 0, t %= n, t *= 10;
      r += ")";
    } else
      for (var o = e; t && o--; )
        r += t / n | 0, t %= n, t *= 10;
    return r;
  }
};
function sC(e) {
  if (!e) return null;
  if (e = e.toString().trim(), typeof navigator > "u" || typeof navigator.language > "u")
    return parseFloat(e);
  const { thousandsSeparator: t, decimalSeparator: n } = rC();
  return e = Array.from(e, (i) => i === t ? "" : i === n ? "." : i).join(""), parseFloat(e);
}
function rC() {
  const e = navigator.language, t = 123456789e-2.toLocaleString(e), n = t.replace(/\d/g, ""), i = Array.from(new Set(n.split("")));
  let s = "", r = "";
  if (i.length === 1)
    r = i[0];
  else if (i.length === 2) {
    const o = t[t.length - 3];
    i.includes(o) ? (r = o, s = i.find((a) => a !== o)) : (r = i[1], s = i[0]);
  }
  return { thousandsSeparator: s, decimalSeparator: r };
}
function xm(e) {
  if (!e || typeof e == "number") return !1;
  e = e.toString().replace(/[^0-9/ ]/g, "");
  const t = /\b\d+\/\d+\b/g;
  return e.match(t);
}
function oC(e, t = !1) {
  if (!$(e)) return null;
  if (e === 0) return "0";
  let n = e.toString().trim();
  if (!n) return null;
  if (xm(e))
    return n = n.replace(/[^0-9/,. -]/g, "").replace(/  +/g, " "), n;
  {
    n = n.replace(/[^0-9,. -]/g, ""), n.startsWith(".") && (n = "0" + n);
    let i;
    return t ? i = sC(n) : i = parseFloat(n), i ? i.toString() : null;
  }
}
function J(e, t = "decimal", n = !1, i = !1, s = 0) {
  if (!$(e) || !t) return null;
  if (t !== "decimal" && t !== "fraction")
    return console.error("incorrect conversion type specified for convertUnit"), null;
  try {
    const r = oC(e, i);
    if (!r) return 0;
    let o;
    if (t === "fraction")
      if (xm(r))
        o = new Mt(r);
      else {
        const a = parseFloat(r);
        Number.isInteger(a) ? o = new Mt(r) : o = new Mt(a);
      }
    else o = new Mt(r);
    switch (t) {
      case "fraction":
        if (s > 0) {
          const a = o.valueOf(), l = Math.round(a * s) / s;
          o = new Mt(l);
        }
        return o.toFraction(!0);
      case "decimal":
        return n === !1 || typeof n != "number" ? o.valueOf() : parseFloat(parseFloat(o.round(10)).toFixed(n));
      default:
        return 0;
    }
  } catch (r) {
    return console.error(r), 0;
  }
}
function aC(e) {
  let t = e;
  return typeof e != "number" && (t = parseFloat(e)), t % 1 !== 0;
}
const et = {
  customData: (e) => {
    const t = [];
    return typeof e != "object" ? (t.push("Custom data must be an object."), t) : (Object.entries(e).forEach(([n, i]) => {
      $(i) && (["string", "number", "boolean"].includes(typeof i) || t.push(`Custom data ${n} must be a string, number or boolean.`));
    }), t);
  },
  banding: (e) => {
    const t = [];
    if (!$(e)) return [];
    if (typeof e != "object")
      return t.push("Banding must be an object."), t;
    Object.entries(e).forEach(([n, i]) => {
      $(i) && i !== !0 && i !== !1 && t.push(`Banding ${n} must be a boolean.`);
    });
  },
  //when trim provided as number
  partTrim(e, t) {
    t = J(t);
    const n = J(e.l), i = J(e.w), s = n - t * 2, r = i - t * 2;
    return s < 0 || r < 0 ? [
      `When applying trim of ${t}, part is ${s} x ${r}.`
    ] : [];
  },
  //when trim provided as object
  trim: (e) => {
    const t = [];
    if (!$(e.trim)) return t;
    if (["x1", "x2", "y1", "y2"].forEach((n) => {
      $(e.trim[n]) || (e.trim[n] = 0);
    }), !rs(e) || rs(e) && !(e != null && e.trimmed)) {
      const n = J(e.l), i = J(e.w), s = J(e.trim.x1), r = J(e.trim.x2), o = J(e.trim.y1), a = J(e.trim.y2);
      Object.entries({ x1: s, x2: r, y1: o, y2: a }).forEach(([u, c]) => {
        isNaN(c) && t.push(`The value of trim ${Ey[u]} is not understood.`);
      }), n && i && n > 0 && i > 0 && (s + r >= e.l && t.push(`Trim W1 + W2 = ${s + r}, which is greater than or equal to total length of ${n}.`), a + a >= e.w && t.push(`Trim L1 + L2 = ${o + a}, which is greater than or equal to total width of ${i}.`));
    }
    return t;
  },
  x: (e) => {
    const t = [];
    return $(e) ? (e = J(e), isNaN(e) ? (t.push("X value is not understood."), t) : (e < 0 && t.push("X must be greater than or equal to zero."), t)) : t;
  },
  y: (e) => {
    const t = [];
    return $(e) && (e = J(e), isNaN(e) && t.push("Y value is not understood."), e < 0 && t.push("Y must be greater than or equal to zero.")), t;
  },
  l: (e) => {
    const t = [];
    return $(e) ? (e = J(e), isNaN(e) ? (t.push("Width value is not understood."), t) : (e <= 0 && t.push(`Length must be greater than zero, got ${e}`), t)) : (t.push("Length is required."), t);
  },
  w: (e) => {
    const t = [];
    return $(e) ? (e = J(e), isNaN(e) ? (t.push("Width value is not understood."), t) : (e <= 0 && t.push(`Width must be greater than zero, got ${e}`), t)) : (t.push("Width is required."), t);
  },
  t: (e) => {
    const t = [];
    return !$(e) || e === "" ? t : (e = J(e), isNaN(e) ? (t.push("Thickness value is not understood."), t) : (e && e <= 0 && t.push(`Thickness must be greater than zero, got ${e}`), t));
  },
  q: (e, t = null) => {
    const n = [];
    return $(e) ? (e = parseInt(e), isNaN(e) ? (n.push("Quantity value is not understood."), n) : (aC(e) && n.push("Quantity must be an integer."), e <= 0 && (t || n.push("Quantity should be greater than or equal to zero.")), n)) : n;
  },
  orientationLock: (e) => {
    const t = [];
    return $(e) && (e = e.toLowerCase(), e !== "l" && e !== "w" && t.push(`Orientation lock must be l or w, got ${e}`)), t;
  },
  grain: (e) => {
    const t = [];
    return $(e) && (e = e.toLowerCase(), e !== "l" && e !== "w" && t.push("Grain must be l or w.")), t;
  },
  stockMatch: (e, t, n = 0) => {
    if (!e.q) return [];
    if (e.applyPartTrim(n), e.issues.length) return [];
    const i = PT([e], t);
    if (!i) return [];
    const s = [];
    if (i.unusableShapes.length) {
      const r = i.unusableShapes[0], o = r.stockMatch;
      if (!o.fit) {
        const a = r.getTrimmedDimensions();
        s.push(`${a.l.toFixed(0)}x${a.w.toFixed(0)} will not fit on any stock - check trim, dimensions & orientation lock.`);
      }
      o.material || s.push("No matching stock material found."), o.thickness || s.push("No matching stock thickness found."), o.width || s.push("No matching stock width found (required for linear calculations).");
    }
    return s;
  },
  machining: (e) => {
    e.machining.validateEverything(e);
  }
};
var Sm = typeof global == "object" && global && global.Object === Object && global, lC = typeof self == "object" && self && self.Object === Object && self, eu = Sm || lC || Function("return this")(), vo = eu.Symbol, km = Object.prototype, cC = km.hasOwnProperty, uC = km.toString, ws = vo ? vo.toStringTag : void 0;
function fC(e) {
  var t = cC.call(e, ws), n = e[ws];
  try {
    e[ws] = void 0;
    var i = !0;
  } catch {
  }
  var s = uC.call(e);
  return i && (t ? e[ws] = n : delete e[ws]), s;
}
var hC = Object.prototype, dC = hC.toString;
function pC(e) {
  return dC.call(e);
}
var gC = "[object Null]", mC = "[object Undefined]", Qh = vo ? vo.toStringTag : void 0;
function tu(e) {
  return e == null ? e === void 0 ? mC : gC : Qh && Qh in Object(e) ? fC(e) : pC(e);
}
function nu(e) {
  return e != null && typeof e == "object";
}
var yC = Array.isArray;
function sa(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Em(e) {
  return e;
}
var bC = "[object AsyncFunction]", wC = "[object Function]", vC = "[object GeneratorFunction]", _C = "[object Proxy]";
function Cm(e) {
  if (!sa(e))
    return !1;
  var t = tu(e);
  return t == wC || t == vC || t == bC || t == _C;
}
var Ba = eu["__core-js_shared__"], Zh = function() {
  var e = /[^.]+$/.exec(Ba && Ba.keys && Ba.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function xC(e) {
  return !!Zh && Zh in e;
}
var SC = Function.prototype, kC = SC.toString;
function EC(e) {
  if (e != null) {
    try {
      return kC.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var CC = /[\\^$.*+?()[\]{}|]/g, TC = /^\[object .+?Constructor\]$/, AC = Function.prototype, OC = Object.prototype, PC = AC.toString, NC = OC.hasOwnProperty, IC = RegExp(
  "^" + PC.call(NC).replace(CC, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function MC(e) {
  if (!sa(e) || xC(e))
    return !1;
  var t = Cm(e) ? IC : TC;
  return t.test(EC(e));
}
function LC(e, t) {
  return e == null ? void 0 : e[t];
}
function DC(e, t) {
  var n = LC(e, t);
  return MC(n) ? n : void 0;
}
function RC(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var FC = 800, $C = 16, BC = Date.now;
function jC(e) {
  var t = 0, n = 0;
  return function() {
    var i = BC(), s = $C - (i - n);
    if (n = i, s > 0) {
      if (++t >= FC)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function qC(e) {
  return function() {
    return e;
  };
}
var ed = function() {
  try {
    var e = DC(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), UC = ed ? function(e, t) {
  return ed(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: qC(t),
    writable: !0
  });
} : Em, WC = jC(UC), VC = 9007199254740991, zC = /^(?:0|[1-9]\d*)$/;
function Tm(e, t) {
  var n = typeof e;
  return t = t ?? VC, !!t && (n == "number" || n != "symbol" && zC.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Am(e, t) {
  return e === t || e !== e && t !== t;
}
var td = Math.max;
function GC(e, t, n) {
  return t = td(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var i = arguments, s = -1, r = td(i.length - t, 0), o = Array(r); ++s < r; )
      o[s] = i[t + s];
    s = -1;
    for (var a = Array(t + 1); ++s < t; )
      a[s] = i[s];
    return a[t] = n(o), RC(e, this, a);
  };
}
function HC(e, t) {
  return WC(GC(e, t, Em), e + "");
}
var KC = 9007199254740991;
function Om(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= KC;
}
function Pm(e) {
  return e != null && Om(e.length) && !Cm(e);
}
function YC(e, t, n) {
  if (!sa(n))
    return !1;
  var i = typeof t;
  return (i == "number" ? Pm(n) && Tm(t, n.length) : i == "string" && t in n) ? Am(n[t], e) : !1;
}
var XC = Object.prototype;
function JC(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || XC;
  return e === n;
}
function QC(e, t) {
  for (var n = -1, i = Array(e); ++n < e; )
    i[n] = t(n);
  return i;
}
var ZC = "[object Arguments]";
function nd(e) {
  return nu(e) && tu(e) == ZC;
}
var Nm = Object.prototype, e2 = Nm.hasOwnProperty, t2 = Nm.propertyIsEnumerable, n2 = nd(/* @__PURE__ */ function() {
  return arguments;
}()) ? nd : function(e) {
  return nu(e) && e2.call(e, "callee") && !t2.call(e, "callee");
};
function i2() {
  return !1;
}
var Im = typeof exports == "object" && exports && !exports.nodeType && exports, id = Im && typeof module == "object" && module && !module.nodeType && module, s2 = id && id.exports === Im, sd = s2 ? eu.Buffer : void 0, r2 = sd ? sd.isBuffer : void 0, o2 = r2 || i2, a2 = "[object Arguments]", l2 = "[object Array]", c2 = "[object Boolean]", u2 = "[object Date]", f2 = "[object Error]", h2 = "[object Function]", d2 = "[object Map]", p2 = "[object Number]", g2 = "[object Object]", m2 = "[object RegExp]", y2 = "[object Set]", b2 = "[object String]", w2 = "[object WeakMap]", v2 = "[object ArrayBuffer]", _2 = "[object DataView]", x2 = "[object Float32Array]", S2 = "[object Float64Array]", k2 = "[object Int8Array]", E2 = "[object Int16Array]", C2 = "[object Int32Array]", T2 = "[object Uint8Array]", A2 = "[object Uint8ClampedArray]", O2 = "[object Uint16Array]", P2 = "[object Uint32Array]", Ne = {};
Ne[x2] = Ne[S2] = Ne[k2] = Ne[E2] = Ne[C2] = Ne[T2] = Ne[A2] = Ne[O2] = Ne[P2] = !0;
Ne[a2] = Ne[l2] = Ne[v2] = Ne[c2] = Ne[_2] = Ne[u2] = Ne[f2] = Ne[h2] = Ne[d2] = Ne[p2] = Ne[g2] = Ne[m2] = Ne[y2] = Ne[b2] = Ne[w2] = !1;
function N2(e) {
  return nu(e) && Om(e.length) && !!Ne[tu(e)];
}
function I2(e) {
  return function(t) {
    return e(t);
  };
}
var Mm = typeof exports == "object" && exports && !exports.nodeType && exports, Rs = Mm && typeof module == "object" && module && !module.nodeType && module, M2 = Rs && Rs.exports === Mm, ja = M2 && Sm.process, rd = function() {
  try {
    var e = Rs && Rs.require && Rs.require("util").types;
    return e || ja && ja.binding && ja.binding("util");
  } catch {
  }
}(), od = rd && rd.isTypedArray, L2 = od ? I2(od) : N2;
function D2(e, t) {
  var n = yC(e), i = !n && n2(e), s = !n && !i && o2(e), r = !n && !i && !s && L2(e), o = n || i || s || r, a = o ? QC(e.length, String) : [], l = a.length;
  for (var u in e)
    o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    r && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Tm(u, l)) || a.push(u);
  return a;
}
function R2(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var F2 = Object.prototype, $2 = F2.hasOwnProperty;
function B2(e) {
  if (!sa(e))
    return R2(e);
  var t = JC(e), n = [];
  for (var i in e)
    i == "constructor" && (t || !$2.call(e, i)) || n.push(i);
  return n;
}
function j2(e) {
  return Pm(e) ? D2(e) : B2(e);
}
var Lm = Object.prototype, q2 = Lm.hasOwnProperty, ks = HC(function(e, t) {
  e = Object(e);
  var n = -1, i = t.length, s = i > 2 ? t[2] : void 0;
  for (s && YC(t[0], t[1], s) && (i = 1); ++n < i; )
    for (var r = t[n], o = j2(r), a = -1, l = o.length; ++a < l; ) {
      var u = o[a], c = e[u];
      (c === void 0 || Am(c, Lm[u]) && !q2.call(e, u)) && (e[u] = r[u]);
    }
  return e;
});
class Al {
  constructor({ x: t, y: n, diameter: i, depth: s = 0, side: r = 0, type: o = null }) {
    g(this, "x");
    g(this, "y");
    g(this, "diameter");
    g(this, "depth");
    g(this, "side");
    g(this, "valid");
    g(this, "type");
    this.x = t, this.y = n, this.diameter = i, this.depth = s, this.side = r, this.type = o;
  }
  getXDrawPosition(t) {
    let n = 0;
    const i = J(this.x);
    if (t.rot) {
      const s = J(this.y);
      n = t.l - s + ("x" in t ? t.x : 0);
    } else
      n = i + ("x" in t ? t.x : 0);
    return n;
  }
  getYDrawPosition(t, n, i) {
    let s = t.rot ? J(this.x) : J(this.y);
    return s += "y" in t ? t.y : 0, n === 1 && i && (s = i.w - s), s;
  }
  shouldShow(t, n) {
    return this.side === n || this.depth === 0 || J(this.depth) >= J(t.t);
  }
  getDistanceToEdge(t) {
    const n = this.x, i = this.y, s = this.diameter / 2, r = J(t.getLongSide()), o = J(t.getShortSide()), a = t.machining.corners.map((p) => p.type ? p.size : 0), l = [
      {
        edge: "left",
        distance: n - s
      },
      {
        edge: "right",
        distance: r - n - s
      },
      {
        edge: "bottom",
        distance: o - i - s
      },
      {
        edge: "top",
        distance: i - s
      }
    ], u = t.machining.corners.map((p, y) => {
      const w = y === 0 || y === 3, S = y < 2, k = w ? n : r - n;
      let b = null;
      this.side === 0 ? b = S ? i : o - i : this.side === 1 && (b = S ? o - i : i);
      const C = Math.sqrt(k * k + b * b);
      return {
        c: p,
        distance: C
      };
    }), c = Math.min(...l.map((p) => p.distance)), f = Math.min(...u.map((p) => p.distance)), h = u.findIndex((p) => p.distance === f), d = t.machining.corners[h];
    if (d && d.type === "radius") {
      let p = h === 0 || h === 3 ? 0 : r, y = h < 2 ? 0 : o;
      const w = h < 2;
      p += h === 0 || h === 3 ? a[h] : -a[h], y += w ? a[h] : -a[h];
      const k = n - p, b = h < 2;
      let C;
      this.side === 0 ? C = b ? i : o - i : this.side === 1 && (C = b ? o - i : i);
      const A = C - y, I = Math.sqrt(k * k + A * A), P = a[h] - I - s;
      let D = !1;
      return d.index === 0 ? D = n <= p && C <= y : d.index === 1 ? D = n >= p && C <= y : d.index === 2 ? D = n >= p && C >= y : d.index === 3 && (D = n <= p && C >= y), D && P < c ? P : c;
    } else if (d && d.type === "bevel") {
      let p, y, w;
      d.index === 0 ? (p = 1, y = 1, w = -d.size) : d.index === 1 ? (p = 1, y = -1, w = -r + d.size) : d.index === 2 ? (p = 1, y = 1, w = -r - o + d.size) : d.index === 3 && (p = -1, y = 1, w = -o + d.size);
      const S = d.index === 0 ? 1 : -1, k = (p * n + y * i + w) / Math.sqrt(p * p + y * y) * S - s;
      return k < c ? k : c;
    } else
      return c;
  }
  validate(t, n) {
    const i = [];
    return (!this.x || !this.y || !this.diameter) && i.push({
      index: n,
      message: "X, Y & diameter are all required."
    }), J(this.depth) < 0 && i.push({
      index: n,
      message: "Depth cannot be negative."
    }), "t" in t && J(t.t) > 0 && J(this.depth) > J(t.t) && i.push({
      index: n,
      message: "Depth cannot be greater than part thickness."
    }), (!("t" in t) || !t.t) && J(this.depth) > 0 && i.push({
      index: n,
      message: "Part thickness is not defined."
    }), this.getDistanceToEdge(t) < 0 && i.push({
      index: n,
      message: "Outside of part."
    }), i.length ? this.valid = !1 : this.valid = !0, i;
  }
}
class ad {
  constructor({
    position: t = null,
    //from left or bottom
    edge: n = "x1",
    side: i = 0,
    numHoles: s = null,
    diameter: r = 0,
    depth: o = 0,
    distanceFromEdge: a = 0,
    outerSpacing: l,
    hingeLength: u = 0,
    minimumHoleDistance: c = 0,
    positionLimit: f = 0
  }, h) {
    g(this, "position");
    g(this, "edge");
    g(this, "side");
    g(this, "numHoles");
    g(this, "holes", []);
    g(this, "diameter");
    g(this, "depth");
    g(this, "distanceFromEdge");
    g(this, "outerSpacing");
    g(this, "hingeLength");
    g(this, "minimumHoleDistance");
    g(this, "positionLimit");
    g(this, "valid");
    this.position = t, this.edge = n, this.side = i, this.numHoles = s, this.diameter = r, this.depth = o, this.distanceFromEdge = a, this.outerSpacing = l, this.hingeLength = u, this.minimumHoleDistance = c, this.positionLimit = f, h && this.createHoles(h);
  }
  getHoleSpacing() {
    const t = J(this.hingeLength) - J(this.outerSpacing) * 2, n = this.numHoles - 1;
    return t / n;
  }
  getHoleXPosition(t, n) {
    let i = 0;
    const s = this.getHoleSpacing();
    switch (this.edge) {
      case "x1":
        i = this.distanceFromEdge;
        break;
      case "x2":
        i = t.getLongSide() - J(this.distanceFromEdge);
        break;
      case "y1":
      case "y2":
        i = J(this.position) + J(this.outerSpacing) + s * n;
        break;
    }
    return i;
  }
  getHoleYPosition(t, n) {
    let i = 0;
    const s = this.getHoleSpacing();
    switch (this.edge) {
      case "x1":
      case "x2":
        i = J(this.position) + J(this.outerSpacing) + s * n;
        break;
      case "y1":
        i = J(this.distanceFromEdge);
        break;
      case "y2":
        i = t.getShortSide() - J(this.distanceFromEdge);
        break;
    }
    return i;
  }
  createHoles(t) {
    this.holes = [];
    for (let n = 0; n < this.numHoles; n++) {
      const i = new Al({
        x: this.getHoleXPosition(t, n),
        y: this.getHoleYPosition(t, n),
        diameter: this.diameter,
        depth: this.depth,
        side: this.side,
        type: "hinge"
      });
      this.holes.push(i);
    }
    return this.holes;
  }
  validate(t, n) {
    const i = [];
    return this.holes.forEach((s, r) => {
      const o = s.validate(t, r).map((a) => (a.index = n, a.message = `Hole ${r + 1}: ${a.message}`, a));
      i.push(...o);
    }), i.length ? this.valid = !1 : this.valid = !0, i;
  }
}
class ld {
  constructor({ type: t = "radius", size: n, index: i }) {
    g(this, "type");
    g(this, "size");
    g(this, "index");
    g(this, "valid");
    this.type = t, this.size = n, this.index = i;
  }
  validate(t, n) {
    const i = t.getShortSide(), s = [];
    if (this.type === null) {
      this.size = null;
      const r = ["a", "b", "c", "d"][this.index];
      t.banding[r] = !1, t.bandingType[r] = "";
    }
    return this.type && J(this.size) <= 0 && s.push({
      index: n,
      message: "Corner size cannot be zero or negative"
    }), this.type && J(this.size) > i / 2 && (this.size = i / 2), s.length ? this.valid = !1 : this.valid = !0, s;
  }
  //get the coordinates of a corner in the clockwise direction
  /* getCoords( shape: Shape | InputShape, side: 0 | 1 ): { x1; x2; y1; y2 }
  	{
  		let x1, x2, y1, y2;
  		switch ( this.index )
  		{
  		case 0:
  			x1 = 0;
  			x2 = cu( this.size );
  			y1 = side === 0 ? cu( this.size ) : shape.getShortSide() - cu( this.size );
  			y2 = side === 0 ? 0 : shape.getShortSide();
  			break;
  		case 1:
  			x1 = shape.getLongSide() - cu( this.size );
  			x2 = shape.getLongSide();
  			y1 = side === 0 ? 0 : shape.getShortSide();
  			y2 = side === 0 ? cu( this.size ) : shape.getShortSide() - cu( this.size );
  			break;
  		case 2:
  			x1 = shape.getLongSide();
  			x2 = shape.getLongSide() - cu( this.size );
  			y1 = side === 0 ? shape.getShortSide() - cu( this.size ) : cu( this.size );
  			y2 = side === 0 ? shape.getShortSide() : 0;
  			break;
  		case 3:
  			x1 = cu( this.size );
  			x2 = 0;
  			y1 = side === 0 ? shape.getShortSide() : 0;
  			y2 = side === 0 ? shape.getShortSide() - cu( this.size ) : cu( this.size );
  			break;
  		}
  
  		return {
  			x1,
  			x2,
  			y1,
  			y2
  		};
  	} */
}
let Dm = class {
  //shelfHoles?: ShelfHoles[] = [];
  constructor({
    holes: t = [],
    hingeHoles: n = [],
    corners: i = []
  } = {}) {
    g(this, "holes", []);
    g(this, "corners", []);
    g(this, "hingeHoles", []);
    i && i.length === 4 ? this.corners = i.map((s) => new ld(s)) : [0, 1, 2, 3].forEach((s) => {
      this.corners.push(new ld({
        type: null,
        size: null,
        index: s
      }));
    }), t && (this.holes = t.map((s) => new Al(s))), n && (this.hingeHoles = n.map((s) => new ad(s)));
  }
  validateEverything(t) {
    const n = this.validate(t, "holes"), i = this.validate(t, "hingeHoles"), s = this.validate(t, "corners");
    t.issues.push(...n.map((r) => En(t) ? `Part ${t.id} hole issue: ${r.message}` : `Hole issue: ${r.message}`)), t.issues.push(...i.map((r) => En(t) ? `Part ${t.id} hinge hole issue: ${r.message}` : `Hinge hole issue: ${r.message}`)), t.issues.push(...s.map((r) => En(t) ? `Part ${t.id} corner issue: ${r.message}` : `Corner issue: ${r.message}`));
  }
  validate(t, n) {
    const i = [];
    return i.push(...this.validateAll(t, n)), i;
  }
  validateAll(t, n) {
    if (!t) return [];
    const i = [];
    return this[n].forEach((s, r) => i.push(...s.validate(t, r))), i;
  }
  createHole(t, n, i, s = 0, r = 0) {
    const o = new Al({
      x: t,
      y: n,
      diameter: i,
      depth: s,
      side: r
    });
    return this.holes.push(o), o;
  }
  createHingeHoles({
    numHoles: t,
    position: n,
    diameter: i,
    depth: s = 0,
    edge: r = "x1",
    side: o = 0,
    distanceFromEdge: a = 0,
    outerSpacing: l = 0,
    minimumHoleDistance: u = 0,
    hingeLength: c = 0
  }) {
    const f = new ad({
      numHoles: t,
      position: n,
      //from left or bottom
      edge: r,
      side: o,
      diameter: i,
      depth: s,
      distanceFromEdge: a,
      outerSpacing: l,
      minimumHoleDistance: u,
      hingeLength: c
    });
    return this.hingeHoles.push(f), f;
  }
  updateHingeHoles(t) {
    this.hingeHoles.forEach((n) => n.createHoles(t));
  }
  getAllHingeHoles(t) {
    const n = [];
    return this.hingeHoles.forEach((i, s) => {
      i.createHoles(t), i.validate(t, s), n.push(...i.holes);
    }), n;
  }
  getNumHoles() {
    return this.holes.length + this.hingeHoles.reduce(
      (t, n) => t + n.numHoles,
      0
    );
  }
  getNumCorners() {
    return this.corners.filter((t) => t.type !== null).length;
  }
};
function U2(e) {
  var t, n, i, s, r, o, a, l;
  return e.machining ? (n = (t = e.machining) == null ? void 0 : t.holes) != null && n.length || (s = (i = e.machining) == null ? void 0 : i.hingeHoles) != null && s.length ? !0 : (o = (r = e.machining) == null ? void 0 : r.corners) != null && o.length ? (l = (a = e.machining) == null ? void 0 : a.corners) == null ? void 0 : l.some((u) => u.type && u.size) : !1 : !1;
}
const W2 = {
  captureProfile: !1,
  runTests: !1,
  cacheResults: !0,
  successMetric: "efficiency",
  calculateCuts: !0,
  stack: !0,
  findDuplicatePatterns: !0,
  recordPlacementPositions: !1,
  sample: {
    enable: !0,
    priorityShape: !0,
    //largest shape placed first
    size: 5,
    groupSize: 6,
    efficiency: 5,
    guillotine: 5
  },
  secondRun: {
    enabled: !1,
    efficiencyCutoff: 0.5,
    stack: !1
  },
  efficiency: {
    tidy: !1,
    //[] issue with picking winner when tidy is enabled
    rayCasting: !0
  },
  groups: {
    shapeAreaCutOff: 0.7,
    size: 5,
    guillotine: {
      limit: 100,
      segments: !0,
      //requires sample to be enabled
      runWithout: !0,
      strips: !0
    },
    efficiency: {
      firstShapes: !0,
      position: !0,
      limit: 100
    }
  },
  guillotine: {
    stripShapeAllocation: !0,
    stripShapeIterations: 5,
    stripShapeRunAllCandidates: !0,
    // runWithoutStripShapeBatches: isDevOrTest ? false : false, //[] implement
    rerunThreshold: 0.5,
    orderStripsByLongest: !0,
    secondPass: !1,
    stripEfficiencyThreshold: 0.7
  },
  subset: {
    shuffles: 80,
    //this is the default - can be overwritten (for example when creating groups)
    guillotine: {
      shuffles: 100
    },
    efficiency: {
      limit: 0.8
    }
  },
  evo: {
    disable: !1,
    stockLimit: 40
  }
};
var Rm = Object.defineProperty, V2 = Object.getOwnPropertyNames, L = (e, t) => Rm(e, "name", { value: t, configurable: !0 }), z2 = (e, t) => function() {
  return t || (0, e[V2(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, iu = (e, t) => {
  for (var n in t)
    Rm(e, n, { get: t[n], enumerable: !0 });
}, G2 = z2({
  "(disabled):util"() {
  }
}), _o = {};
iu(_o, {
  addChainableMethod: () => gu,
  addLengthGuard: () => ar,
  addMethod: () => hu,
  addProperty: () => fu,
  checkError: () => St,
  compareByInspect: () => Eo,
  eql: () => ly,
  expectTypes: () => Wm,
  flag: () => fe,
  getActual: () => oa,
  getMessage: () => ou,
  getName: () => la,
  getOperator: () => wu,
  getOwnEnumerableProperties: () => bu,
  getOwnEnumerablePropertySymbols: () => yu,
  getPathInfo: () => uu,
  hasProperty: () => aa,
  inspect: () => ye,
  isNaN: () => Co,
  isProxyEnabled: () => or,
  isRegExp: () => To,
  objDisplay: () => pi,
  overwriteChainableMethod: () => mu,
  overwriteMethod: () => pu,
  overwriteProperty: () => du,
  proxify: () => fs,
  test: () => su,
  transferFlags: () => zt,
  type: () => Ae
});
var St = {};
iu(St, {
  compatibleConstructor: () => Bm,
  compatibleInstance: () => $m,
  compatibleMessage: () => jm,
  getConstructorName: () => qm,
  getMessage: () => Um
});
function ra(e) {
  return e instanceof Error || Object.prototype.toString.call(e) === "[object Error]";
}
L(ra, "isErrorInstance");
function Fm(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
L(Fm, "isRegExp");
function $m(e, t) {
  return ra(t) && e === t;
}
L($m, "compatibleInstance");
function Bm(e, t) {
  return ra(t) ? e.constructor === t.constructor || e instanceof t.constructor : (typeof t == "object" || typeof t == "function") && t.prototype ? e.constructor === t || e instanceof t : !1;
}
L(Bm, "compatibleConstructor");
function jm(e, t) {
  const n = typeof e == "string" ? e : e.message;
  return Fm(t) ? t.test(n) : typeof t == "string" ? n.indexOf(t) !== -1 : !1;
}
L(jm, "compatibleMessage");
function qm(e) {
  let t = e;
  return ra(e) ? t = e.constructor.name : typeof e == "function" && (t = e.name, t === "" && (t = new e().name || t)), t;
}
L(qm, "getConstructorName");
function Um(e) {
  let t = "";
  return e && e.message ? t = e.message : typeof e == "string" && (t = e), t;
}
L(Um, "getMessage");
function fe(e, t, n) {
  var i = e.__flags || (e.__flags = /* @__PURE__ */ Object.create(null));
  if (arguments.length === 3)
    i[t] = n;
  else
    return i[t];
}
L(fe, "flag");
function su(e, t) {
  var n = fe(e, "negate"), i = t[0];
  return n ? !i : i;
}
L(su, "test");
function Ae(e) {
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  const t = e[Symbol.toStringTag];
  return typeof t == "string" ? t : Object.prototype.toString.call(e).slice(8, -1);
}
L(Ae, "type");
var H2 = "captureStackTrace" in Error, yi, Se = (yi = class extends Error {
  constructor(n = "Unspecified AssertionError", i, s) {
    super(n);
    g(this, "message");
    this.message = n, H2 && Error.captureStackTrace(this, s || yi);
    for (const r in i)
      r in this || (this[r] = i[r]);
  }
  get name() {
    return "AssertionError";
  }
  get ok() {
    return !1;
  }
  toJSON(n) {
    return {
      ...this,
      name: this.name,
      message: this.message,
      ok: !1,
      stack: n !== !1 ? this.stack : void 0
    };
  }
}, L(yi, "AssertionError"), yi);
function Wm(e, t) {
  var n = fe(e, "message"), i = fe(e, "ssfi");
  n = n ? n + ": " : "", e = fe(e, "object"), t = t.map(function(o) {
    return o.toLowerCase();
  }), t.sort();
  var s = t.map(function(o, a) {
    var l = ~["a", "e", "i", "o", "u"].indexOf(o.charAt(0)) ? "an" : "a", u = t.length > 1 && a === t.length - 1 ? "or " : "";
    return u + l + " " + o;
  }).join(", "), r = Ae(e).toLowerCase();
  if (!t.some(function(o) {
    return r === o;
  }))
    throw new Se(
      n + "object tested must be " + s + ", but " + r + " given",
      void 0,
      i
    );
}
L(Wm, "expectTypes");
function oa(e, t) {
  return t.length > 4 ? t[4] : e._obj;
}
L(oa, "getActual");
var cd = {
  bold: ["1", "22"],
  dim: ["2", "22"],
  italic: ["3", "23"],
  underline: ["4", "24"],
  // 5 & 6 are blinking
  inverse: ["7", "27"],
  hidden: ["8", "28"],
  strike: ["9", "29"],
  // 10-20 are fonts
  // 21-29 are resets for 1-9
  black: ["30", "39"],
  red: ["31", "39"],
  green: ["32", "39"],
  yellow: ["33", "39"],
  blue: ["34", "39"],
  magenta: ["35", "39"],
  cyan: ["36", "39"],
  white: ["37", "39"],
  brightblack: ["30;1", "39"],
  brightred: ["31;1", "39"],
  brightgreen: ["32;1", "39"],
  brightyellow: ["33;1", "39"],
  brightblue: ["34;1", "39"],
  brightmagenta: ["35;1", "39"],
  brightcyan: ["36;1", "39"],
  brightwhite: ["37;1", "39"],
  grey: ["90", "39"]
}, K2 = {
  special: "cyan",
  number: "yellow",
  bigint: "yellow",
  boolean: "yellow",
  undefined: "grey",
  null: "bold",
  string: "green",
  symbol: "green",
  date: "magenta",
  regexp: "red"
}, is = "…";
function Vm(e, t) {
  const n = cd[K2[t]] || cd[t] || "";
  return n ? `\x1B[${n[0]}m${String(e)}\x1B[${n[1]}m` : String(e);
}
L(Vm, "colorise");
function zm({
  showHidden: e = !1,
  depth: t = 2,
  colors: n = !1,
  customInspect: i = !0,
  showProxy: s = !1,
  maxArrayLength: r = 1 / 0,
  breakLength: o = 1 / 0,
  seen: a = [],
  // eslint-disable-next-line no-shadow
  truncate: l = 1 / 0,
  stylize: u = String
} = {}, c) {
  const f = {
    showHidden: !!e,
    depth: Number(t),
    colors: !!n,
    customInspect: !!i,
    showProxy: !!s,
    maxArrayLength: Number(r),
    breakLength: Number(o),
    truncate: Number(l),
    seen: a,
    inspect: c,
    stylize: u
  };
  return f.colors && (f.stylize = Vm), f;
}
L(zm, "normaliseOptions");
function On(e, t, n = is) {
  e = String(e);
  const i = n.length, s = e.length;
  return i > t && s > i ? n : s > t && s > i ? `${e.slice(0, t - i)}${n}` : e;
}
L(On, "truncate");
function Rt(e, t, n, i = ", ") {
  n = n || t.inspect;
  const s = e.length;
  if (s === 0)
    return "";
  const r = t.truncate;
  let o = "", a = "", l = "";
  for (let u = 0; u < s; u += 1) {
    const c = u + 1 === e.length, f = u + 2 === e.length;
    l = `${is}(${e.length - u})`;
    const h = e[u];
    t.truncate = r - o.length - (c ? 0 : i.length);
    const d = a || n(h, t) + (c ? "" : i), p = o.length + d.length, y = p + l.length;
    if (c && p > r && o.length + l.length <= r || !c && !f && y > r || (a = c ? "" : n(e[u + 1], t) + (f ? "" : i), !c && f && y > r && p + a.length > r))
      break;
    if (o += d, !c && !f && p + a.length >= r) {
      l = `${is}(${e.length - u - 1})`;
      break;
    }
    l = "";
  }
  return `${o}${l}`;
}
L(Rt, "inspectList");
function Gm(e) {
  return e.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/) ? e : JSON.stringify(e).replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
}
L(Gm, "quoteComplexKey");
function ss([e, t], n) {
  return n.truncate -= 2, typeof e == "string" ? e = Gm(e) : typeof e != "number" && (e = `[${n.inspect(e, n)}]`), n.truncate -= e.length, t = n.inspect(t, n), `${e}: ${t}`;
}
L(ss, "inspectProperty");
function Hm(e, t) {
  const n = Object.keys(e).slice(e.length);
  if (!e.length && !n.length)
    return "[]";
  t.truncate -= 4;
  const i = Rt(e, t);
  t.truncate -= i.length;
  let s = "";
  return n.length && (s = Rt(n.map((r) => [r, e[r]]), t, ss)), `[ ${i}${s ? `, ${s}` : ""} ]`;
}
L(Hm, "inspectArray");
var Y2 = /* @__PURE__ */ L((e) => typeof Buffer == "function" && e instanceof Buffer ? "Buffer" : e[Symbol.toStringTag] ? e[Symbol.toStringTag] : e.constructor.name, "getArrayName");
function Qt(e, t) {
  const n = Y2(e);
  t.truncate -= n.length + 4;
  const i = Object.keys(e).slice(e.length);
  if (!e.length && !i.length)
    return `${n}[]`;
  let s = "";
  for (let o = 0; o < e.length; o++) {
    const a = `${t.stylize(On(e[o], t.truncate), "number")}${o === e.length - 1 ? "" : ", "}`;
    if (t.truncate -= a.length, e[o] !== e.length && t.truncate <= 3) {
      s += `${is}(${e.length - e[o] + 1})`;
      break;
    }
    s += a;
  }
  let r = "";
  return i.length && (r = Rt(i.map((o) => [o, e[o]]), t, ss)), `${n}[ ${s}${r ? `, ${r}` : ""} ]`;
}
L(Qt, "inspectTypedArray");
function Km(e, t) {
  const n = e.toJSON();
  if (n === null)
    return "Invalid Date";
  const i = n.split("T"), s = i[0];
  return t.stylize(`${s}T${On(i[1], t.truncate - s.length - 1)}`, "date");
}
L(Km, "inspectDate");
function Ol(e, t) {
  const n = e[Symbol.toStringTag] || "Function", i = e.name;
  return i ? t.stylize(`[${n} ${On(i, t.truncate - 11)}]`, "special") : t.stylize(`[${n}]`, "special");
}
L(Ol, "inspectFunction");
function Ym([e, t], n) {
  return n.truncate -= 4, e = n.inspect(e, n), n.truncate -= e.length, t = n.inspect(t, n), `${e} => ${t}`;
}
L(Ym, "inspectMapEntry");
function Xm(e) {
  const t = [];
  return e.forEach((n, i) => {
    t.push([i, n]);
  }), t;
}
L(Xm, "mapToEntries");
function Jm(e, t) {
  return e.size - 1 <= 0 ? "Map{}" : (t.truncate -= 7, `Map{ ${Rt(Xm(e), t, Ym)} }`);
}
L(Jm, "inspectMap");
var X2 = Number.isNaN || ((e) => e !== e);
function Pl(e, t) {
  return X2(e) ? t.stylize("NaN", "number") : e === 1 / 0 ? t.stylize("Infinity", "number") : e === -1 / 0 ? t.stylize("-Infinity", "number") : e === 0 ? t.stylize(1 / e === 1 / 0 ? "+0" : "-0", "number") : t.stylize(On(String(e), t.truncate), "number");
}
L(Pl, "inspectNumber");
function Nl(e, t) {
  let n = On(e.toString(), t.truncate - 1);
  return n !== is && (n += "n"), t.stylize(n, "bigint");
}
L(Nl, "inspectBigInt");
function Qm(e, t) {
  const n = e.toString().split("/")[2], i = t.truncate - (2 + n.length), s = e.source;
  return t.stylize(`/${On(s, i)}/${n}`, "regexp");
}
L(Qm, "inspectRegExp");
function Zm(e) {
  const t = [];
  return e.forEach((n) => {
    t.push(n);
  }), t;
}
L(Zm, "arrayFromSet");
function ey(e, t) {
  return e.size === 0 ? "Set{}" : (t.truncate -= 7, `Set{ ${Rt(Zm(e), t)} }`);
}
L(ey, "inspectSet");
var ud = new RegExp("['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]", "g"), J2 = {
  "\b": "\\b",
  "	": "\\t",
  "\n": "\\n",
  "\f": "\\f",
  "\r": "\\r",
  "'": "\\'",
  "\\": "\\\\"
}, Q2 = 16, Z2 = 4;
function ty(e) {
  return J2[e] || `\\u${`0000${e.charCodeAt(0).toString(Q2)}`.slice(-Z2)}`;
}
L(ty, "escape");
function Il(e, t) {
  return ud.test(e) && (e = e.replace(ud, ty)), t.stylize(`'${On(e, t.truncate - 2)}'`, "string");
}
L(Il, "inspectString");
function Ml(e) {
  return "description" in Symbol.prototype ? e.description ? `Symbol(${e.description})` : "Symbol()" : e.toString();
}
L(Ml, "inspectSymbol");
var ny = /* @__PURE__ */ L(() => "Promise{…}", "getPromiseValue");
try {
  const { getPromiseDetails: e, kPending: t, kRejected: n } = process.binding("util");
  Array.isArray(e(Promise.resolve())) && (ny = /* @__PURE__ */ L((i, s) => {
    const [r, o] = e(i);
    return r === t ? "Promise{<pending>}" : `Promise${r === n ? "!" : ""}{${s.inspect(o, s)}}`;
  }, "getPromiseValue"));
} catch {
}
var eT = ny;
function Fs(e, t) {
  const n = Object.getOwnPropertyNames(e), i = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : [];
  if (n.length === 0 && i.length === 0)
    return "{}";
  if (t.truncate -= 4, t.seen = t.seen || [], t.seen.indexOf(e) >= 0)
    return "[Circular]";
  t.seen.push(e);
  const s = Rt(n.map((a) => [a, e[a]]), t, ss), r = Rt(i.map((a) => [a, e[a]]), t, ss);
  t.seen.pop();
  let o = "";
  return s && r && (o = ", "), `{ ${s}${o}${r} }`;
}
L(Fs, "inspectObject");
var qa = typeof Symbol < "u" && Symbol.toStringTag ? Symbol.toStringTag : !1;
function iy(e, t) {
  let n = "";
  return qa && qa in e && (n = e[qa]), n = n || e.constructor.name, (!n || n === "_class") && (n = "<Anonymous Class>"), t.truncate -= n.length, `${n}${Fs(e, t)}`;
}
L(iy, "inspectClass");
function sy(e, t) {
  return e.length === 0 ? "Arguments[]" : (t.truncate -= 13, `Arguments[ ${Rt(e, t)} ]`);
}
L(sy, "inspectArguments");
var tT = [
  "stack",
  "line",
  "column",
  "name",
  "message",
  "fileName",
  "lineNumber",
  "columnNumber",
  "number",
  "description"
];
function ry(e, t) {
  const n = Object.getOwnPropertyNames(e).filter((o) => tT.indexOf(o) === -1), i = e.name;
  t.truncate -= i.length;
  let s = "";
  typeof e.message == "string" ? s = On(e.message, t.truncate) : n.unshift("message"), s = s ? `: ${s}` : "", t.truncate -= s.length + 5;
  const r = Rt(n.map((o) => [o, e[o]]), t, ss);
  return `${i}${s}${r ? ` { ${r} }` : ""}`;
}
L(ry, "inspectObject");
function oy([e, t], n) {
  return n.truncate -= 3, t ? `${n.stylize(String(e), "yellow")}=${n.stylize(`"${t}"`, "string")}` : `${n.stylize(String(e), "yellow")}`;
}
L(oy, "inspectAttribute");
function xo(e, t) {
  return Rt(e, t, ru, `
`);
}
L(xo, "inspectHTMLCollection");
function ru(e, t) {
  const n = e.getAttributeNames(), i = e.tagName.toLowerCase(), s = t.stylize(`<${i}`, "special"), r = t.stylize(">", "special"), o = t.stylize(`</${i}>`, "special");
  t.truncate -= i.length * 2 + 5;
  let a = "";
  n.length > 0 && (a += " ", a += Rt(n.map((c) => [c, e.getAttribute(c)]), t, oy, " ")), t.truncate -= a.length;
  const l = t.truncate;
  let u = xo(e.children, t);
  return u && u.length > l && (u = `${is}(${e.children.length})`), `${s}${a}${r}${u}${o}`;
}
L(ru, "inspectHTML");
var nT = typeof Symbol == "function" && typeof Symbol.for == "function", Ua = nT ? Symbol.for("chai/inspect") : "@@chai/inspect", $i = !1;
try {
  const e = G2();
  $i = e.inspect ? e.inspect.custom : !1;
} catch {
  $i = !1;
}
var fd = /* @__PURE__ */ new WeakMap(), hd = {}, dd = {
  undefined: (e, t) => t.stylize("undefined", "undefined"),
  null: (e, t) => t.stylize("null", "null"),
  boolean: (e, t) => t.stylize(String(e), "boolean"),
  Boolean: (e, t) => t.stylize(String(e), "boolean"),
  number: Pl,
  Number: Pl,
  bigint: Nl,
  BigInt: Nl,
  string: Il,
  String: Il,
  function: Ol,
  Function: Ol,
  symbol: Ml,
  // A Symbol polyfill will return `Symbol` not `symbol` from typedetect
  Symbol: Ml,
  Array: Hm,
  Date: Km,
  Map: Jm,
  Set: ey,
  RegExp: Qm,
  Promise: eT,
  // WeakSet, WeakMap are totally opaque to us
  WeakSet: (e, t) => t.stylize("WeakSet{…}", "special"),
  WeakMap: (e, t) => t.stylize("WeakMap{…}", "special"),
  Arguments: sy,
  Int8Array: Qt,
  Uint8Array: Qt,
  Uint8ClampedArray: Qt,
  Int16Array: Qt,
  Uint16Array: Qt,
  Int32Array: Qt,
  Uint32Array: Qt,
  Float32Array: Qt,
  Float64Array: Qt,
  Generator: () => "",
  DataView: () => "",
  ArrayBuffer: () => "",
  Error: ry,
  HTMLCollection: xo,
  NodeList: xo
}, iT = /* @__PURE__ */ L((e, t, n) => Ua in e && typeof e[Ua] == "function" ? e[Ua](t) : $i && $i in e && typeof e[$i] == "function" ? e[$i](t.depth, t) : "inspect" in e && typeof e.inspect == "function" ? e.inspect(t.depth, t) : "constructor" in e && fd.has(e.constructor) ? fd.get(e.constructor)(e, t) : hd[n] ? hd[n](e, t) : "", "inspectCustom"), sT = Object.prototype.toString;
function So(e, t = {}) {
  const n = zm(t, So), { customInspect: i } = n;
  let s = e === null ? "null" : typeof e;
  if (s === "object" && (s = sT.call(e).slice(8, -1)), s in dd)
    return dd[s](e, n);
  if (i && e) {
    const o = iT(e, n, s);
    if (o)
      return typeof o == "string" ? o : So(o, n);
  }
  const r = e ? Object.getPrototypeOf(e) : !1;
  return r === Object.prototype || r === null ? Fs(e, n) : e && typeof HTMLElement == "function" && e instanceof HTMLElement ? ru(e, n) : "constructor" in e ? e.constructor !== Object ? iy(e, n) : Fs(e, n) : e === Object(e) ? Fs(e, n) : n.stylize(String(e), s);
}
L(So, "inspect");
var lt = {
  /**
   * ### config.includeStack
   *
   * User configurable property, influences whether stack trace
   * is included in Assertion error message. Default of false
   * suppresses stack trace in the error message.
   *
   *     chai.config.includeStack = true;  // enable stack on error
   *
   * @param {boolean}
   * @public
   */
  includeStack: !1,
  /**
   * ### config.showDiff
   *
   * User configurable property, influences whether or not
   * the `showDiff` flag should be included in the thrown
   * AssertionErrors. `false` will always be `false`; `true`
   * will be true when the assertion has requested a diff
   * be shown.
   *
   * @param {boolean}
   * @public
   */
  showDiff: !0,
  /**
   * ### config.truncateThreshold
   *
   * User configurable property, sets length threshold for actual and
   * expected values in assertion errors. If this threshold is exceeded, for
   * example for large data structures, the value is replaced with something
   * like `[ Array(3) ]` or `{ Object (prop1, prop2) }`.
   *
   * Set it to zero if you want to disable truncating altogether.
   *
   * This is especially userful when doing assertions on arrays: having this
   * set to a reasonable large value makes the failure messages readily
   * inspectable.
   *
   *     chai.config.truncateThreshold = 0;  // disable truncating
   *
   * @param {number}
   * @public
   */
  truncateThreshold: 40,
  /**
   * ### config.useProxy
   *
   * User configurable property, defines if chai will use a Proxy to throw
   * an error when a non-existent property is read, which protects users
   * from typos when using property-based assertions.
   *
   * Set it to false if you want to disable this feature.
   *
   *     chai.config.useProxy = false;  // disable use of Proxy
   *
   * This feature is automatically disabled regardless of this config value
   * in environments that don't support proxies.
   *
   * @param {boolean}
   * @public
   */
  useProxy: !0,
  /**
   * ### config.proxyExcludedKeys
   *
   * User configurable property, defines which properties should be ignored
   * instead of throwing an error if they do not exist on the assertion.
   * This is only applied if the environment Chai is running in supports proxies and
   * if the `useProxy` configuration setting is enabled.
   * By default, `then` and `inspect` will not throw an error if they do not exist on the
   * assertion object because the `.inspect` property is read by `util.inspect` (for example, when
   * using `console.log` on the assertion object) and `.then` is necessary for promise type-checking.
   *
   *     // By default these keys will not throw an error if they do not exist on the assertion object
   *     chai.config.proxyExcludedKeys = ['then', 'inspect'];
   *
   * @param {Array}
   * @public
   */
  proxyExcludedKeys: ["then", "catch", "inspect", "toJSON"],
  /**
   * ### config.deepEqual
   *
   * User configurable property, defines which a custom function to use for deepEqual
   * comparisons.
   * By default, the function used is the one from the `deep-eql` package without custom comparator.
   *
   *     // use a custom comparator
   *     chai.config.deepEqual = (expected, actual) => {
   *         return chai.util.eql(expected, actual, {
   *             comparator: (expected, actual) => {
   *                 // for non number comparison, use the default behavior
   *                 if(typeof expected !== 'number') return null;
   *                 // allow a difference of 10 between compared numbers
   *                 return typeof actual === 'number' && Math.abs(actual - expected) < 10
   *             }
   *         })
   *     };
   *
   * @param {Function}
   * @public
   */
  deepEqual: null
};
function ye(e, t, n, i) {
  var s = {
    colors: i,
    depth: typeof n > "u" ? 2 : n,
    showHidden: t,
    truncate: lt.truncateThreshold ? lt.truncateThreshold : 1 / 0
  };
  return So(e, s);
}
L(ye, "inspect");
function pi(e) {
  var t = ye(e), n = Object.prototype.toString.call(e);
  if (lt.truncateThreshold && t.length >= lt.truncateThreshold) {
    if (n === "[object Function]")
      return !e.name || e.name === "" ? "[Function]" : "[Function: " + e.name + "]";
    if (n === "[object Array]")
      return "[ Array(" + e.length + ") ]";
    if (n === "[object Object]") {
      var i = Object.keys(e), s = i.length > 2 ? i.splice(0, 2).join(", ") + ", ..." : i.join(", ");
      return "{ Object (" + s + ") }";
    } else
      return t;
  } else
    return t;
}
L(pi, "objDisplay");
function ou(e, t) {
  var n = fe(e, "negate"), i = fe(e, "object"), s = t[3], r = oa(e, t), o = n ? t[2] : t[1], a = fe(e, "message");
  return typeof o == "function" && (o = o()), o = o || "", o = o.replace(/#\{this\}/g, function() {
    return pi(i);
  }).replace(/#\{act\}/g, function() {
    return pi(r);
  }).replace(/#\{exp\}/g, function() {
    return pi(s);
  }), a ? a + ": " + o : o;
}
L(ou, "getMessage");
function zt(e, t, n) {
  var i = e.__flags || (e.__flags = /* @__PURE__ */ Object.create(null));
  t.__flags || (t.__flags = /* @__PURE__ */ Object.create(null)), n = arguments.length === 3 ? n : !0;
  for (var s in i)
    (n || s !== "object" && s !== "ssfi" && s !== "lockSsfi" && s != "message") && (t.__flags[s] = i[s]);
}
L(zt, "transferFlags");
function Ll(e) {
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  const t = e[Symbol.toStringTag];
  return typeof t == "string" ? t : Object.prototype.toString.call(e).slice(8, -1);
}
L(Ll, "type");
function au() {
  this._key = "chai/deep-eql__" + Math.random() + Date.now();
}
L(au, "FakeMap");
au.prototype = {
  get: /* @__PURE__ */ L(function(t) {
    return t[this._key];
  }, "get"),
  set: /* @__PURE__ */ L(function(t, n) {
    Object.isExtensible(t) && Object.defineProperty(t, this._key, {
      value: n,
      configurable: !0
    });
  }, "set")
};
var ay = typeof WeakMap == "function" ? WeakMap : au;
function Dl(e, t, n) {
  if (!n || _i(e) || _i(t))
    return null;
  var i = n.get(e);
  if (i) {
    var s = i.get(t);
    if (typeof s == "boolean")
      return s;
  }
  return null;
}
L(Dl, "memoizeCompare");
function Es(e, t, n, i) {
  if (!(!n || _i(e) || _i(t))) {
    var s = n.get(e);
    s ? s.set(t, i) : (s = new ay(), s.set(t, i), n.set(e, s));
  }
}
L(Es, "memoizeSet");
var ly = rr;
function rr(e, t, n) {
  if (n && n.comparator)
    return Rl(e, t, n);
  var i = lu(e, t);
  return i !== null ? i : Rl(e, t, n);
}
L(rr, "deepEqual");
function lu(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && // eslint-disable-line no-self-compare
  t !== t ? !0 : _i(e) || _i(t) ? !1 : null;
}
L(lu, "simpleEqual");
function Rl(e, t, n) {
  n = n || {}, n.memoize = n.memoize === !1 ? !1 : n.memoize || new ay();
  var i = n && n.comparator, s = Dl(e, t, n.memoize);
  if (s !== null)
    return s;
  var r = Dl(t, e, n.memoize);
  if (r !== null)
    return r;
  if (i) {
    var o = i(e, t);
    if (o === !1 || o === !0)
      return Es(e, t, n.memoize, o), o;
    var a = lu(e, t);
    if (a !== null)
      return a;
  }
  var l = Ll(e);
  if (l !== Ll(t))
    return Es(e, t, n.memoize, !1), !1;
  Es(e, t, n.memoize, !0);
  var u = cy(e, t, l, n);
  return Es(e, t, n.memoize, u), u;
}
L(Rl, "extensiveDeepEqual");
function cy(e, t, n, i) {
  switch (n) {
    case "String":
    case "Number":
    case "Boolean":
    case "Date":
      return rr(e.valueOf(), t.valueOf());
    case "Promise":
    case "Symbol":
    case "function":
    case "WeakMap":
    case "WeakSet":
      return e === t;
    case "Error":
      return cu(e, t, ["name", "message", "code"], i);
    case "Arguments":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "Array":
      return Wn(e, t, i);
    case "RegExp":
      return uy(e, t);
    case "Generator":
      return fy(e, t, i);
    case "DataView":
      return Wn(new Uint8Array(e.buffer), new Uint8Array(t.buffer), i);
    case "ArrayBuffer":
      return Wn(new Uint8Array(e), new Uint8Array(t), i);
    case "Set":
      return Fl(e, t, i);
    case "Map":
      return Fl(e, t, i);
    case "Temporal.PlainDate":
    case "Temporal.PlainTime":
    case "Temporal.PlainDateTime":
    case "Temporal.Instant":
    case "Temporal.ZonedDateTime":
    case "Temporal.PlainYearMonth":
    case "Temporal.PlainMonthDay":
      return e.equals(t);
    case "Temporal.Duration":
      return e.total("nanoseconds") === t.total("nanoseconds");
    case "Temporal.TimeZone":
    case "Temporal.Calendar":
      return e.toString() === t.toString();
    default:
      return dy(e, t, i);
  }
}
L(cy, "extensiveDeepEqualByType");
function uy(e, t) {
  return e.toString() === t.toString();
}
L(uy, "regexpEqual");
function Fl(e, t, n) {
  if (e.size !== t.size)
    return !1;
  if (e.size === 0)
    return !0;
  var i = [], s = [];
  return e.forEach(/* @__PURE__ */ L(function(o, a) {
    i.push([o, a]);
  }, "gatherEntries")), t.forEach(/* @__PURE__ */ L(function(o, a) {
    s.push([o, a]);
  }, "gatherEntries")), Wn(i.sort(), s.sort(), n);
}
L(Fl, "entriesEqual");
function Wn(e, t, n) {
  var i = e.length;
  if (i !== t.length)
    return !1;
  if (i === 0)
    return !0;
  for (var s = -1; ++s < i; )
    if (rr(e[s], t[s], n) === !1)
      return !1;
  return !0;
}
L(Wn, "iterableEqual");
function fy(e, t, n) {
  return Wn(ko(e), ko(t), n);
}
L(fy, "generatorEqual");
function hy(e) {
  return typeof Symbol < "u" && typeof e == "object" && typeof Symbol.iterator < "u" && typeof e[Symbol.iterator] == "function";
}
L(hy, "hasIteratorFunction");
function $l(e) {
  if (hy(e))
    try {
      return ko(e[Symbol.iterator]());
    } catch {
      return [];
    }
  return [];
}
L($l, "getIteratorEntries");
function ko(e) {
  for (var t = e.next(), n = [t.value]; t.done === !1; )
    t = e.next(), n.push(t.value);
  return n;
}
L(ko, "getGeneratorEntries");
function Bl(e) {
  var t = [];
  for (var n in e)
    t.push(n);
  return t;
}
L(Bl, "getEnumerableKeys");
function jl(e) {
  for (var t = [], n = Object.getOwnPropertySymbols(e), i = 0; i < n.length; i += 1) {
    var s = n[i];
    Object.getOwnPropertyDescriptor(e, s).enumerable && t.push(s);
  }
  return t;
}
L(jl, "getEnumerableSymbols");
function cu(e, t, n, i) {
  var s = n.length;
  if (s === 0)
    return !0;
  for (var r = 0; r < s; r += 1)
    if (rr(e[n[r]], t[n[r]], i) === !1)
      return !1;
  return !0;
}
L(cu, "keysEqual");
function dy(e, t, n) {
  var i = Bl(e), s = Bl(t), r = jl(e), o = jl(t);
  if (i = i.concat(r), s = s.concat(o), i.length && i.length === s.length)
    return Wn(ql(i).sort(), ql(s).sort()) === !1 ? !1 : cu(e, t, i, n);
  var a = $l(e), l = $l(t);
  return a.length && a.length === l.length ? (a.sort(), l.sort(), Wn(a, l, n)) : i.length === 0 && a.length === 0 && s.length === 0 && l.length === 0;
}
L(dy, "objectEqual");
function _i(e) {
  return e === null || typeof e != "object";
}
L(_i, "isPrimitive");
function ql(e) {
  return e.map(/* @__PURE__ */ L(function(n) {
    return typeof n == "symbol" ? n.toString() : n;
  }, "mapSymbol"));
}
L(ql, "mapSymbols");
function aa(e, t) {
  return typeof e > "u" || e === null ? !1 : t in Object(e);
}
L(aa, "hasProperty");
function py(e) {
  return e.replace(/([^\\])\[/g, "$1.[").match(/(\\\.|[^.]+?)+/g).map((i) => {
    if (i === "constructor" || i === "__proto__" || i === "prototype")
      return {};
    const r = /^\[(\d+)\]$/.exec(i);
    let o = null;
    return r ? o = { i: parseFloat(r[1]) } : o = { p: i.replace(/\\([.[\]])/g, "$1") }, o;
  });
}
L(py, "parsePath");
function Ul(e, t, n) {
  let i = e, s = null;
  n = typeof n > "u" ? t.length : n;
  for (let r = 0; r < n; r++) {
    const o = t[r];
    i && (typeof o.p > "u" ? i = i[o.i] : i = i[o.p], r === n - 1 && (s = i));
  }
  return s;
}
L(Ul, "internalGetPathValue");
function uu(e, t) {
  const n = py(t), i = n[n.length - 1], s = {
    parent: n.length > 1 ? Ul(e, n, n.length - 1) : e,
    name: i.p || i.i,
    value: Ul(e, n)
  };
  return s.exists = aa(s.parent, s.name), s;
}
L(uu, "getPathInfo");
function x(e, t, n, i) {
  return fe(this, "ssfi", n || x), fe(this, "lockSsfi", i), fe(this, "object", e), fe(this, "message", t), fe(this, "eql", lt.deepEqual || ly), fs(this);
}
L(x, "Assertion");
Object.defineProperty(x, "includeStack", {
  get: function() {
    return console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."), lt.includeStack;
  },
  set: function(e) {
    console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."), lt.includeStack = e;
  }
});
Object.defineProperty(x, "showDiff", {
  get: function() {
    return console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."), lt.showDiff;
  },
  set: function(e) {
    console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."), lt.showDiff = e;
  }
});
x.addProperty = function(e, t) {
  fu(this.prototype, e, t);
};
x.addMethod = function(e, t) {
  hu(this.prototype, e, t);
};
x.addChainableMethod = function(e, t, n) {
  gu(this.prototype, e, t, n);
};
x.overwriteProperty = function(e, t) {
  du(this.prototype, e, t);
};
x.overwriteMethod = function(e, t) {
  pu(this.prototype, e, t);
};
x.overwriteChainableMethod = function(e, t, n) {
  mu(this.prototype, e, t, n);
};
x.prototype.assert = function(e, t, n, i, s, r) {
  var o = su(this, arguments);
  if (r !== !1 && (r = !0), i === void 0 && s === void 0 && (r = !1), lt.showDiff !== !0 && (r = !1), !o) {
    t = ou(this, arguments);
    var a = oa(this, arguments), l = {
      actual: a,
      expected: i,
      showDiff: r
    }, u = wu(this, arguments);
    throw u && (l.operator = u), new Se(
      t,
      l,
      lt.includeStack ? this.assert : fe(this, "ssfi")
    );
  }
};
Object.defineProperty(
  x.prototype,
  "_obj",
  {
    get: function() {
      return fe(this, "object");
    },
    set: function(e) {
      fe(this, "object", e);
    }
  }
);
function or() {
  return lt.useProxy && typeof Proxy < "u" && typeof Reflect < "u";
}
L(or, "isProxyEnabled");
function fu(e, t, n) {
  n = n === void 0 ? function() {
  } : n, Object.defineProperty(
    e,
    t,
    {
      get: /* @__PURE__ */ L(function i() {
        !or() && !fe(this, "lockSsfi") && fe(this, "ssfi", i);
        var s = n.call(this);
        if (s !== void 0)
          return s;
        var r = new x();
        return zt(this, r), r;
      }, "propertyGetter"),
      configurable: !0
    }
  );
}
L(fu, "addProperty");
var rT = Object.getOwnPropertyDescriptor(function() {
}, "length");
function ar(e, t, n) {
  return rT.configurable && Object.defineProperty(e, "length", {
    get: function() {
      throw Error(n ? "Invalid Chai property: " + t + '.length. Due to a compatibility issue, "length" cannot directly follow "' + t + '". Use "' + t + '.lengthOf" instead.' : "Invalid Chai property: " + t + '.length. See docs for proper usage of "' + t + '".');
    }
  }), e;
}
L(ar, "addLengthGuard");
function gy(e) {
  var t = Object.getOwnPropertyNames(e);
  function n(s) {
    t.indexOf(s) === -1 && t.push(s);
  }
  L(n, "addProperty");
  for (var i = Object.getPrototypeOf(e); i !== null; )
    Object.getOwnPropertyNames(i).forEach(n), i = Object.getPrototypeOf(i);
  return t;
}
L(gy, "getProperties");
var pd = ["__flags", "__methods", "_obj", "assert"];
function fs(e, t) {
  return or() ? new Proxy(e, {
    get: /* @__PURE__ */ L(function n(i, s) {
      if (typeof s == "string" && lt.proxyExcludedKeys.indexOf(s) === -1 && !Reflect.has(i, s)) {
        if (t)
          throw Error("Invalid Chai property: " + t + "." + s + '. See docs for proper usage of "' + t + '".');
        var r = null, o = 4;
        throw gy(i).forEach(function(a) {
          if (!Object.prototype.hasOwnProperty(a) && pd.indexOf(a) === -1) {
            var l = my(
              s,
              a,
              o
            );
            l < o && (r = a, o = l);
          }
        }), Error(r !== null ? "Invalid Chai property: " + s + '. Did you mean "' + r + '"?' : "Invalid Chai property: " + s);
      }
      return pd.indexOf(s) === -1 && !fe(i, "lockSsfi") && fe(i, "ssfi", n), Reflect.get(i, s);
    }, "proxyGetter")
  }) : e;
}
L(fs, "proxify");
function my(e, t, n) {
  if (Math.abs(e.length - t.length) >= n)
    return n;
  for (var i = [], s = 0; s <= e.length; s++)
    i[s] = Array(t.length + 1).fill(0), i[s][0] = s;
  for (var r = 0; r < t.length; r++)
    i[0][r] = r;
  for (var s = 1; s <= e.length; s++)
    for (var o = e.charCodeAt(s - 1), r = 1; r <= t.length; r++) {
      if (Math.abs(s - r) >= n) {
        i[s][r] = n;
        continue;
      }
      i[s][r] = Math.min(
        i[s - 1][r] + 1,
        i[s][r - 1] + 1,
        i[s - 1][r - 1] + (o === t.charCodeAt(r - 1) ? 0 : 1)
      );
    }
  return i[e.length][t.length];
}
L(my, "stringDistanceCapped");
function hu(e, t, n) {
  var i = /* @__PURE__ */ L(function() {
    fe(this, "lockSsfi") || fe(this, "ssfi", i);
    var s = n.apply(this, arguments);
    if (s !== void 0)
      return s;
    var r = new x();
    return zt(this, r), r;
  }, "methodWrapper");
  ar(i, t, !1), e[t] = fs(i, t);
}
L(hu, "addMethod");
function du(e, t, n) {
  var i = Object.getOwnPropertyDescriptor(e, t), s = /* @__PURE__ */ L(function() {
  }, "_super");
  i && typeof i.get == "function" && (s = i.get), Object.defineProperty(
    e,
    t,
    {
      get: /* @__PURE__ */ L(function r() {
        !or() && !fe(this, "lockSsfi") && fe(this, "ssfi", r);
        var o = fe(this, "lockSsfi");
        fe(this, "lockSsfi", !0);
        var a = n(s).call(this);
        if (fe(this, "lockSsfi", o), a !== void 0)
          return a;
        var l = new x();
        return zt(this, l), l;
      }, "overwritingPropertyGetter"),
      configurable: !0
    }
  );
}
L(du, "overwriteProperty");
function pu(e, t, n) {
  var i = e[t], s = /* @__PURE__ */ L(function() {
    throw new Error(t + " is not a function");
  }, "_super");
  i && typeof i == "function" && (s = i);
  var r = /* @__PURE__ */ L(function() {
    fe(this, "lockSsfi") || fe(this, "ssfi", r);
    var o = fe(this, "lockSsfi");
    fe(this, "lockSsfi", !0);
    var a = n(s).apply(this, arguments);
    if (fe(this, "lockSsfi", o), a !== void 0)
      return a;
    var l = new x();
    return zt(this, l), l;
  }, "overwritingMethodWrapper");
  ar(r, t, !1), e[t] = fs(r, t);
}
L(pu, "overwriteMethod");
var oT = typeof Object.setPrototypeOf == "function", gd = /* @__PURE__ */ L(function() {
}, "testFn"), aT = Object.getOwnPropertyNames(gd).filter(function(e) {
  var t = Object.getOwnPropertyDescriptor(gd, e);
  return typeof t != "object" ? !0 : !t.configurable;
}), lT = Function.prototype.call, cT = Function.prototype.apply;
function gu(e, t, n, i) {
  typeof i != "function" && (i = /* @__PURE__ */ L(function() {
  }, "chainingBehavior"));
  var s = {
    method: n,
    chainingBehavior: i
  };
  e.__methods || (e.__methods = {}), e.__methods[t] = s, Object.defineProperty(
    e,
    t,
    {
      get: /* @__PURE__ */ L(function() {
        s.chainingBehavior.call(this);
        var o = /* @__PURE__ */ L(function() {
          fe(this, "lockSsfi") || fe(this, "ssfi", o);
          var u = s.method.apply(this, arguments);
          if (u !== void 0)
            return u;
          var c = new x();
          return zt(this, c), c;
        }, "chainableMethodWrapper");
        if (ar(o, t, !0), oT) {
          var a = Object.create(this);
          a.call = lT, a.apply = cT, Object.setPrototypeOf(o, a);
        } else {
          var l = Object.getOwnPropertyNames(e);
          l.forEach(function(u) {
            if (aT.indexOf(u) === -1) {
              var c = Object.getOwnPropertyDescriptor(e, u);
              Object.defineProperty(o, u, c);
            }
          });
        }
        return zt(this, o), fs(o);
      }, "chainableMethodGetter"),
      configurable: !0
    }
  );
}
L(gu, "addChainableMethod");
function mu(e, t, n, i) {
  var s = e.__methods[t], r = s.chainingBehavior;
  s.chainingBehavior = /* @__PURE__ */ L(function() {
    var l = i(r).call(this);
    if (l !== void 0)
      return l;
    var u = new x();
    return zt(this, u), u;
  }, "overwritingChainableMethodGetter");
  var o = s.method;
  s.method = /* @__PURE__ */ L(function() {
    var l = n(o).apply(this, arguments);
    if (l !== void 0)
      return l;
    var u = new x();
    return zt(this, u), u;
  }, "overwritingChainableMethodWrapper");
}
L(mu, "overwriteChainableMethod");
function Eo(e, t) {
  return ye(e) < ye(t) ? -1 : 1;
}
L(Eo, "compareByInspect");
function yu(e) {
  return typeof Object.getOwnPropertySymbols != "function" ? [] : Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.getOwnPropertyDescriptor(e, t).enumerable;
  });
}
L(yu, "getOwnEnumerablePropertySymbols");
function bu(e) {
  return Object.keys(e).concat(yu(e));
}
L(bu, "getOwnEnumerableProperties");
function yy(e) {
  return e !== e;
}
L(yy, "_isNaN");
var Co = Number.isNaN || yy;
function by(e) {
  var t = Ae(e), n = ["Array", "Object", "Function"];
  return n.indexOf(t) !== -1;
}
L(by, "isObjectType");
function wu(e, t) {
  var n = fe(e, "operator"), i = fe(e, "negate"), s = t[3], r = i ? t[2] : t[1];
  if (n)
    return n;
  if (typeof r == "function" && (r = r()), r = r || "", !!r && !/\shave\s/.test(r)) {
    var o = by(s);
    return /\snot\s/.test(r) ? o ? "notDeepStrictEqual" : "notStrictEqual" : o ? "deepStrictEqual" : "strictEqual";
  }
}
L(wu, "getOperator");
function la(e) {
  return e.name;
}
L(la, "getName");
function To(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
L(To, "isRegExp");
var { flag: N } = _o;
[
  "to",
  "be",
  "been",
  "is",
  "and",
  "has",
  "have",
  "with",
  "that",
  "which",
  "at",
  "of",
  "same",
  "but",
  "does",
  "still",
  "also"
].forEach(function(e) {
  x.addProperty(e);
});
x.addProperty("not", function() {
  N(this, "negate", !0);
});
x.addProperty("deep", function() {
  N(this, "deep", !0);
});
x.addProperty("nested", function() {
  N(this, "nested", !0);
});
x.addProperty("own", function() {
  N(this, "own", !0);
});
x.addProperty("ordered", function() {
  N(this, "ordered", !0);
});
x.addProperty("any", function() {
  N(this, "any", !0), N(this, "all", !1);
});
x.addProperty("all", function() {
  N(this, "all", !0), N(this, "any", !1);
});
var md = {
  function: ["function", "asyncfunction", "generatorfunction", "asyncgeneratorfunction"],
  asyncfunction: ["asyncfunction", "asyncgeneratorfunction"],
  generatorfunction: ["generatorfunction", "asyncgeneratorfunction"],
  asyncgeneratorfunction: ["asyncgeneratorfunction"]
};
function vu(e, t) {
  t && N(this, "message", t), e = e.toLowerCase();
  var n = N(this, "object"), i = ~["a", "e", "i", "o", "u"].indexOf(e.charAt(0)) ? "an " : "a ";
  const s = Ae(n).toLowerCase();
  md.function.includes(e) ? this.assert(
    md[e].includes(s),
    "expected #{this} to be " + i + e,
    "expected #{this} not to be " + i + e
  ) : this.assert(
    e === s,
    "expected #{this} to be " + i + e,
    "expected #{this} not to be " + i + e
  );
}
L(vu, "an");
x.addChainableMethod("an", vu);
x.addChainableMethod("a", vu);
function wy(e, t) {
  return Co(e) && Co(t) || e === t;
}
L(wy, "SameValueZero");
function lr() {
  N(this, "contains", !0);
}
L(lr, "includeChainingBehavior");
function cr(e, t) {
  t && N(this, "message", t);
  var n = N(this, "object"), i = Ae(n).toLowerCase(), s = N(this, "message"), r = N(this, "negate"), o = N(this, "ssfi"), a = N(this, "deep"), l = a ? "deep " : "", u = a ? N(this, "eql") : wy;
  s = s ? s + ": " : "";
  var c = !1;
  switch (i) {
    case "string":
      c = n.indexOf(e) !== -1;
      break;
    case "weakset":
      if (a)
        throw new Se(
          s + "unable to use .deep.include with WeakSet",
          void 0,
          o
        );
      c = n.has(e);
      break;
    case "map":
      n.forEach(function(p) {
        c = c || u(p, e);
      });
      break;
    case "set":
      a ? n.forEach(function(p) {
        c = c || u(p, e);
      }) : c = n.has(e);
      break;
    case "array":
      a ? c = n.some(function(p) {
        return u(p, e);
      }) : c = n.indexOf(e) !== -1;
      break;
    default:
      if (e !== Object(e))
        throw new Se(
          s + "the given combination of arguments (" + i + " and " + Ae(e).toLowerCase() + ") is invalid for this assertion. You can use an array, a map, an object, a set, a string, or a weakset instead of a " + Ae(e).toLowerCase(),
          void 0,
          o
        );
      var f = Object.keys(e), h = null, d = 0;
      if (f.forEach(function(p) {
        var y = new x(n);
        if (zt(this, y, !0), N(y, "lockSsfi", !0), !r || f.length === 1) {
          y.property(p, e[p]);
          return;
        }
        try {
          y.property(p, e[p]);
        } catch (w) {
          if (!St.compatibleConstructor(w, Se))
            throw w;
          h === null && (h = w), d++;
        }
      }, this), r && f.length > 1 && d === f.length)
        throw h;
      return;
  }
  this.assert(
    c,
    "expected #{this} to " + l + "include " + ye(e),
    "expected #{this} to not " + l + "include " + ye(e)
  );
}
L(cr, "include");
x.addChainableMethod("include", cr, lr);
x.addChainableMethod("contain", cr, lr);
x.addChainableMethod("contains", cr, lr);
x.addChainableMethod("includes", cr, lr);
x.addProperty("ok", function() {
  this.assert(
    N(this, "object"),
    "expected #{this} to be truthy",
    "expected #{this} to be falsy"
  );
});
x.addProperty("true", function() {
  this.assert(
    N(this, "object") === !0,
    "expected #{this} to be true",
    "expected #{this} to be false",
    !N(this, "negate")
  );
});
x.addProperty("callable", function() {
  const e = N(this, "object"), t = N(this, "ssfi"), n = N(this, "message"), i = n ? `${n}: ` : "", s = N(this, "negate"), r = s ? `${i}expected ${ye(e)} not to be a callable function` : `${i}expected ${ye(e)} to be a callable function`, o = ["Function", "AsyncFunction", "GeneratorFunction", "AsyncGeneratorFunction"].includes(Ae(e));
  if (o && s || !o && !s)
    throw new Se(
      r,
      void 0,
      t
    );
});
x.addProperty("false", function() {
  this.assert(
    N(this, "object") === !1,
    "expected #{this} to be false",
    "expected #{this} to be true",
    !!N(this, "negate")
  );
});
x.addProperty("null", function() {
  this.assert(
    N(this, "object") === null,
    "expected #{this} to be null",
    "expected #{this} not to be null"
  );
});
x.addProperty("undefined", function() {
  this.assert(
    N(this, "object") === void 0,
    "expected #{this} to be undefined",
    "expected #{this} not to be undefined"
  );
});
x.addProperty("NaN", function() {
  this.assert(
    Co(N(this, "object")),
    "expected #{this} to be NaN",
    "expected #{this} not to be NaN"
  );
});
function _u() {
  var e = N(this, "object");
  this.assert(
    e != null,
    "expected #{this} to exist",
    "expected #{this} to not exist"
  );
}
L(_u, "assertExist");
x.addProperty("exist", _u);
x.addProperty("exists", _u);
x.addProperty("empty", function() {
  var e = N(this, "object"), t = N(this, "ssfi"), n = N(this, "message"), i;
  switch (n = n ? n + ": " : "", Ae(e).toLowerCase()) {
    case "array":
    case "string":
      i = e.length;
      break;
    case "map":
    case "set":
      i = e.size;
      break;
    case "weakmap":
    case "weakset":
      throw new Se(
        n + ".empty was passed a weak collection",
        void 0,
        t
      );
    case "function":
      var s = n + ".empty was passed a function " + la(e);
      throw new Se(s.trim(), void 0, t);
    default:
      if (e !== Object(e))
        throw new Se(
          n + ".empty was passed non-string primitive " + ye(e),
          void 0,
          t
        );
      i = Object.keys(e).length;
  }
  this.assert(
    i === 0,
    "expected #{this} to be empty",
    "expected #{this} not to be empty"
  );
});
function xu() {
  var e = N(this, "object"), t = Ae(e);
  this.assert(
    t === "Arguments",
    "expected #{this} to be arguments but got " + t,
    "expected #{this} to not be arguments"
  );
}
L(xu, "checkArguments");
x.addProperty("arguments", xu);
x.addProperty("Arguments", xu);
function ca(e, t) {
  t && N(this, "message", t);
  var n = N(this, "object");
  if (N(this, "deep")) {
    var i = N(this, "lockSsfi");
    N(this, "lockSsfi", !0), this.eql(e), N(this, "lockSsfi", i);
  } else
    this.assert(
      e === n,
      "expected #{this} to equal #{exp}",
      "expected #{this} to not equal #{exp}",
      e,
      this._obj,
      !0
    );
}
L(ca, "assertEqual");
x.addMethod("equal", ca);
x.addMethod("equals", ca);
x.addMethod("eq", ca);
function Su(e, t) {
  t && N(this, "message", t);
  var n = N(this, "eql");
  this.assert(
    n(e, N(this, "object")),
    "expected #{this} to deeply equal #{exp}",
    "expected #{this} to not deeply equal #{exp}",
    e,
    this._obj,
    !0
  );
}
L(Su, "assertEql");
x.addMethod("eql", Su);
x.addMethod("eqls", Su);
function ua(e, t) {
  t && N(this, "message", t);
  var n = N(this, "object"), i = N(this, "doLength"), s = N(this, "message"), r = s ? s + ": " : "", o = N(this, "ssfi"), a = Ae(n).toLowerCase(), l = Ae(e).toLowerCase(), u, c = !0;
  if (i && a !== "map" && a !== "set" && new x(n, s, o, !0).to.have.property("length"), !i && a === "date" && l !== "date")
    u = r + "the argument to above must be a date";
  else if (l !== "number" && (i || a === "number"))
    u = r + "the argument to above must be a number";
  else if (!i && a !== "date" && a !== "number") {
    var f = a === "string" ? "'" + n + "'" : n;
    u = r + "expected " + f + " to be a number or a date";
  } else
    c = !1;
  if (c)
    throw new Se(u, void 0, o);
  if (i) {
    var h = "length", d;
    a === "map" || a === "set" ? (h = "size", d = n.size) : d = n.length, this.assert(
      d > e,
      "expected #{this} to have a " + h + " above #{exp} but got #{act}",
      "expected #{this} to not have a " + h + " above #{exp}",
      e,
      d
    );
  } else
    this.assert(
      n > e,
      "expected #{this} to be above #{exp}",
      "expected #{this} to be at most #{exp}",
      e
    );
}
L(ua, "assertAbove");
x.addMethod("above", ua);
x.addMethod("gt", ua);
x.addMethod("greaterThan", ua);
function fa(e, t) {
  t && N(this, "message", t);
  var n = N(this, "object"), i = N(this, "doLength"), s = N(this, "message"), r = s ? s + ": " : "", o = N(this, "ssfi"), a = Ae(n).toLowerCase(), l = Ae(e).toLowerCase(), u, c = !0;
  if (i && a !== "map" && a !== "set" && new x(n, s, o, !0).to.have.property("length"), !i && a === "date" && l !== "date")
    u = r + "the argument to least must be a date";
  else if (l !== "number" && (i || a === "number"))
    u = r + "the argument to least must be a number";
  else if (!i && a !== "date" && a !== "number") {
    var f = a === "string" ? "'" + n + "'" : n;
    u = r + "expected " + f + " to be a number or a date";
  } else
    c = !1;
  if (c)
    throw new Se(u, void 0, o);
  if (i) {
    var h = "length", d;
    a === "map" || a === "set" ? (h = "size", d = n.size) : d = n.length, this.assert(
      d >= e,
      "expected #{this} to have a " + h + " at least #{exp} but got #{act}",
      "expected #{this} to have a " + h + " below #{exp}",
      e,
      d
    );
  } else
    this.assert(
      n >= e,
      "expected #{this} to be at least #{exp}",
      "expected #{this} to be below #{exp}",
      e
    );
}
L(fa, "assertLeast");
x.addMethod("least", fa);
x.addMethod("gte", fa);
x.addMethod("greaterThanOrEqual", fa);
function ha(e, t) {
  t && N(this, "message", t);
  var n = N(this, "object"), i = N(this, "doLength"), s = N(this, "message"), r = s ? s + ": " : "", o = N(this, "ssfi"), a = Ae(n).toLowerCase(), l = Ae(e).toLowerCase(), u, c = !0;
  if (i && a !== "map" && a !== "set" && new x(n, s, o, !0).to.have.property("length"), !i && a === "date" && l !== "date")
    u = r + "the argument to below must be a date";
  else if (l !== "number" && (i || a === "number"))
    u = r + "the argument to below must be a number";
  else if (!i && a !== "date" && a !== "number") {
    var f = a === "string" ? "'" + n + "'" : n;
    u = r + "expected " + f + " to be a number or a date";
  } else
    c = !1;
  if (c)
    throw new Se(u, void 0, o);
  if (i) {
    var h = "length", d;
    a === "map" || a === "set" ? (h = "size", d = n.size) : d = n.length, this.assert(
      d < e,
      "expected #{this} to have a " + h + " below #{exp} but got #{act}",
      "expected #{this} to not have a " + h + " below #{exp}",
      e,
      d
    );
  } else
    this.assert(
      n < e,
      "expected #{this} to be below #{exp}",
      "expected #{this} to be at least #{exp}",
      e
    );
}
L(ha, "assertBelow");
x.addMethod("below", ha);
x.addMethod("lt", ha);
x.addMethod("lessThan", ha);
function da(e, t) {
  t && N(this, "message", t);
  var n = N(this, "object"), i = N(this, "doLength"), s = N(this, "message"), r = s ? s + ": " : "", o = N(this, "ssfi"), a = Ae(n).toLowerCase(), l = Ae(e).toLowerCase(), u, c = !0;
  if (i && a !== "map" && a !== "set" && new x(n, s, o, !0).to.have.property("length"), !i && a === "date" && l !== "date")
    u = r + "the argument to most must be a date";
  else if (l !== "number" && (i || a === "number"))
    u = r + "the argument to most must be a number";
  else if (!i && a !== "date" && a !== "number") {
    var f = a === "string" ? "'" + n + "'" : n;
    u = r + "expected " + f + " to be a number or a date";
  } else
    c = !1;
  if (c)
    throw new Se(u, void 0, o);
  if (i) {
    var h = "length", d;
    a === "map" || a === "set" ? (h = "size", d = n.size) : d = n.length, this.assert(
      d <= e,
      "expected #{this} to have a " + h + " at most #{exp} but got #{act}",
      "expected #{this} to have a " + h + " above #{exp}",
      e,
      d
    );
  } else
    this.assert(
      n <= e,
      "expected #{this} to be at most #{exp}",
      "expected #{this} to be above #{exp}",
      e
    );
}
L(da, "assertMost");
x.addMethod("most", da);
x.addMethod("lte", da);
x.addMethod("lessThanOrEqual", da);
x.addMethod("within", function(e, t, n) {
  n && N(this, "message", n);
  var i = N(this, "object"), s = N(this, "doLength"), r = N(this, "message"), o = r ? r + ": " : "", a = N(this, "ssfi"), l = Ae(i).toLowerCase(), u = Ae(e).toLowerCase(), c = Ae(t).toLowerCase(), f, h = !0, d = u === "date" && c === "date" ? e.toISOString() + ".." + t.toISOString() : e + ".." + t;
  if (s && l !== "map" && l !== "set" && new x(i, r, a, !0).to.have.property("length"), !s && l === "date" && (u !== "date" || c !== "date"))
    f = o + "the arguments to within must be dates";
  else if ((u !== "number" || c !== "number") && (s || l === "number"))
    f = o + "the arguments to within must be numbers";
  else if (!s && l !== "date" && l !== "number") {
    var p = l === "string" ? "'" + i + "'" : i;
    f = o + "expected " + p + " to be a number or a date";
  } else
    h = !1;
  if (h)
    throw new Se(f, void 0, a);
  if (s) {
    var y = "length", w;
    l === "map" || l === "set" ? (y = "size", w = i.size) : w = i.length, this.assert(
      w >= e && w <= t,
      "expected #{this} to have a " + y + " within " + d,
      "expected #{this} to not have a " + y + " within " + d
    );
  } else
    this.assert(
      i >= e && i <= t,
      "expected #{this} to be within " + d,
      "expected #{this} to not be within " + d
    );
});
function ku(e, t) {
  t && N(this, "message", t);
  var n = N(this, "object"), i = N(this, "ssfi"), s = N(this, "message");
  try {
    var r = n instanceof e;
  } catch (a) {
    throw a instanceof TypeError ? (s = s ? s + ": " : "", new Se(
      s + "The instanceof assertion needs a constructor but " + Ae(e) + " was given.",
      void 0,
      i
    )) : a;
  }
  var o = la(e);
  o == null && (o = "an unnamed constructor"), this.assert(
    r,
    "expected #{this} to be an instance of " + o,
    "expected #{this} to not be an instance of " + o
  );
}
L(ku, "assertInstanceOf");
x.addMethod("instanceof", ku);
x.addMethod("instanceOf", ku);
function Eu(e, t, n) {
  n && N(this, "message", n);
  var i = N(this, "nested"), s = N(this, "own"), r = N(this, "message"), o = N(this, "object"), a = N(this, "ssfi"), l = typeof e;
  if (r = r ? r + ": " : "", i) {
    if (l !== "string")
      throw new Se(
        r + "the argument to property must be a string when using nested syntax",
        void 0,
        a
      );
  } else if (l !== "string" && l !== "number" && l !== "symbol")
    throw new Se(
      r + "the argument to property must be a string, number, or symbol",
      void 0,
      a
    );
  if (i && s)
    throw new Se(
      r + 'The "nested" and "own" flags cannot be combined.',
      void 0,
      a
    );
  if (o == null)
    throw new Se(
      r + "Target cannot be null or undefined.",
      void 0,
      a
    );
  var u = N(this, "deep"), c = N(this, "negate"), f = i ? uu(o, e) : null, h = i ? f.value : o[e], d = u ? N(this, "eql") : (w, S) => w === S, p = "";
  u && (p += "deep "), s && (p += "own "), i && (p += "nested "), p += "property ";
  var y;
  s ? y = Object.prototype.hasOwnProperty.call(o, e) : i ? y = f.exists : y = aa(o, e), (!c || arguments.length === 1) && this.assert(
    y,
    "expected #{this} to have " + p + ye(e),
    "expected #{this} to not have " + p + ye(e)
  ), arguments.length > 1 && this.assert(
    y && d(t, h),
    "expected #{this} to have " + p + ye(e) + " of #{exp}, but got #{act}",
    "expected #{this} to not have " + p + ye(e) + " of #{act}",
    t,
    h
  ), N(this, "object", h);
}
L(Eu, "assertProperty");
x.addMethod("property", Eu);
function Cu(e, t, n) {
  N(this, "own", !0), Eu.apply(this, arguments);
}
L(Cu, "assertOwnProperty");
x.addMethod("ownProperty", Cu);
x.addMethod("haveOwnProperty", Cu);
function Tu(e, t, n) {
  typeof t == "string" && (n = t, t = null), n && N(this, "message", n);
  var i = N(this, "object"), s = Object.getOwnPropertyDescriptor(Object(i), e), r = N(this, "eql");
  s && t ? this.assert(
    r(t, s),
    "expected the own property descriptor for " + ye(e) + " on #{this} to match " + ye(t) + ", got " + ye(s),
    "expected the own property descriptor for " + ye(e) + " on #{this} to not match " + ye(t),
    t,
    s,
    !0
  ) : this.assert(
    s,
    "expected #{this} to have an own property descriptor for " + ye(e),
    "expected #{this} to not have an own property descriptor for " + ye(e)
  ), N(this, "object", s);
}
L(Tu, "assertOwnPropertyDescriptor");
x.addMethod("ownPropertyDescriptor", Tu);
x.addMethod("haveOwnPropertyDescriptor", Tu);
function Au() {
  N(this, "doLength", !0);
}
L(Au, "assertLengthChain");
function Ou(e, t) {
  t && N(this, "message", t);
  var n = N(this, "object"), i = Ae(n).toLowerCase(), s = N(this, "message"), r = N(this, "ssfi"), o = "length", a;
  switch (i) {
    case "map":
    case "set":
      o = "size", a = n.size;
      break;
    default:
      new x(n, s, r, !0).to.have.property("length"), a = n.length;
  }
  this.assert(
    a == e,
    "expected #{this} to have a " + o + " of #{exp} but got #{act}",
    "expected #{this} to not have a " + o + " of #{act}",
    e,
    a
  );
}
L(Ou, "assertLength");
x.addChainableMethod("length", Ou, Au);
x.addChainableMethod("lengthOf", Ou, Au);
function Pu(e, t) {
  t && N(this, "message", t);
  var n = N(this, "object");
  this.assert(
    e.exec(n),
    "expected #{this} to match " + e,
    "expected #{this} not to match " + e
  );
}
L(Pu, "assertMatch");
x.addMethod("match", Pu);
x.addMethod("matches", Pu);
x.addMethod("string", function(e, t) {
  t && N(this, "message", t);
  var n = N(this, "object"), i = N(this, "message"), s = N(this, "ssfi");
  new x(n, i, s, !0).is.a("string"), this.assert(
    ~n.indexOf(e),
    "expected #{this} to contain " + ye(e),
    "expected #{this} to not contain " + ye(e)
  );
});
function Nu(e) {
  var t = N(this, "object"), n = Ae(t), i = Ae(e), s = N(this, "ssfi"), r = N(this, "deep"), o, a = "", l, u = !0, c = N(this, "message");
  c = c ? c + ": " : "";
  var f = c + "when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments";
  if (n === "Map" || n === "Set")
    a = r ? "deeply " : "", l = [], t.forEach(function(k, b) {
      l.push(b);
    }), i !== "Array" && (e = Array.prototype.slice.call(arguments));
  else {
    switch (l = bu(t), i) {
      case "Array":
        if (arguments.length > 1)
          throw new Se(f, void 0, s);
        break;
      case "Object":
        if (arguments.length > 1)
          throw new Se(f, void 0, s);
        e = Object.keys(e);
        break;
      default:
        e = Array.prototype.slice.call(arguments);
    }
    e = e.map(function(k) {
      return typeof k == "symbol" ? k : String(k);
    });
  }
  if (!e.length)
    throw new Se(c + "keys required", void 0, s);
  var h = e.length, d = N(this, "any"), p = N(this, "all"), y = e, w = r ? N(this, "eql") : (k, b) => k === b;
  if (!d && !p && (p = !0), d && (u = y.some(function(k) {
    return l.some(function(b) {
      return w(k, b);
    });
  })), p && (u = y.every(function(k) {
    return l.some(function(b) {
      return w(k, b);
    });
  }), N(this, "contains") || (u = u && e.length == l.length)), h > 1) {
    e = e.map(function(k) {
      return ye(k);
    });
    var S = e.pop();
    p && (o = e.join(", ") + ", and " + S), d && (o = e.join(", ") + ", or " + S);
  } else
    o = ye(e[0]);
  o = (h > 1 ? "keys " : "key ") + o, o = (N(this, "contains") ? "contain " : "have ") + o, this.assert(
    u,
    "expected #{this} to " + a + o,
    "expected #{this} to not " + a + o,
    y.slice(0).sort(Eo),
    l.sort(Eo),
    !0
  );
}
L(Nu, "assertKeys");
x.addMethod("keys", Nu);
x.addMethod("key", Nu);
function pa(e, t, n) {
  n && N(this, "message", n);
  var i = N(this, "object"), s = N(this, "ssfi"), r = N(this, "message"), o = N(this, "negate") || !1;
  new x(i, r, s, !0).is.a("function"), (To(e) || typeof e == "string") && (t = e, e = null);
  let a, l = !1;
  try {
    i();
  } catch (k) {
    l = !0, a = k;
  }
  var u = e === void 0 && t === void 0, c = !!(e && t), f = !1, h = !1;
  if (u || !u && !o) {
    var d = "an error";
    e instanceof Error ? d = "#{exp}" : e && (d = St.getConstructorName(e));
    let k = a;
    if (a instanceof Error)
      k = a.toString();
    else if (typeof a == "string")
      k = a;
    else if (a && (typeof a == "object" || typeof a == "function"))
      try {
        k = St.getConstructorName(a);
      } catch {
      }
    this.assert(
      l,
      "expected #{this} to throw " + d,
      "expected #{this} to not throw an error but #{act} was thrown",
      e && e.toString(),
      k
    );
  }
  if (e && a) {
    if (e instanceof Error) {
      var p = St.compatibleInstance(a, e);
      p === o && (c && o ? f = !0 : this.assert(
        o,
        "expected #{this} to throw #{exp} but #{act} was thrown",
        "expected #{this} to not throw #{exp}" + (a && !o ? " but #{act} was thrown" : ""),
        e.toString(),
        a.toString()
      ));
    }
    var y = St.compatibleConstructor(a, e);
    y === o && (c && o ? f = !0 : this.assert(
      o,
      "expected #{this} to throw #{exp} but #{act} was thrown",
      "expected #{this} to not throw #{exp}" + (a ? " but #{act} was thrown" : ""),
      e instanceof Error ? e.toString() : e && St.getConstructorName(e),
      a instanceof Error ? a.toString() : a && St.getConstructorName(a)
    ));
  }
  if (a && t !== void 0 && t !== null) {
    var w = "including";
    To(t) && (w = "matching");
    var S = St.compatibleMessage(a, t);
    S === o && (c && o ? h = !0 : this.assert(
      o,
      "expected #{this} to throw error " + w + " #{exp} but got #{act}",
      "expected #{this} to throw error not " + w + " #{exp}",
      t,
      St.getMessage(a)
    ));
  }
  f && h && this.assert(
    o,
    "expected #{this} to throw #{exp} but #{act} was thrown",
    "expected #{this} to not throw #{exp}" + (a ? " but #{act} was thrown" : ""),
    e instanceof Error ? e.toString() : e && St.getConstructorName(e),
    a instanceof Error ? a.toString() : a && St.getConstructorName(a)
  ), N(this, "object", a);
}
L(pa, "assertThrows");
x.addMethod("throw", pa);
x.addMethod("throws", pa);
x.addMethod("Throw", pa);
function Iu(e, t) {
  t && N(this, "message", t);
  var n = N(this, "object"), i = N(this, "itself"), s = typeof n == "function" && !i ? n.prototype[e] : n[e];
  this.assert(
    typeof s == "function",
    "expected #{this} to respond to " + ye(e),
    "expected #{this} to not respond to " + ye(e)
  );
}
L(Iu, "respondTo");
x.addMethod("respondTo", Iu);
x.addMethod("respondsTo", Iu);
x.addProperty("itself", function() {
  N(this, "itself", !0);
});
function Mu(e, t) {
  t && N(this, "message", t);
  var n = N(this, "object"), i = e(n);
  this.assert(
    i,
    "expected #{this} to satisfy " + pi(e),
    "expected #{this} to not satisfy" + pi(e),
    !N(this, "negate"),
    i
  );
}
L(Mu, "satisfy");
x.addMethod("satisfy", Mu);
x.addMethod("satisfies", Mu);
function Lu(e, t, n) {
  n && N(this, "message", n);
  var i = N(this, "object"), s = N(this, "message"), r = N(this, "ssfi");
  if (new x(i, s, r, !0).is.a("number"), typeof e != "number" || typeof t != "number") {
    s = s ? s + ": " : "";
    var o = t === void 0 ? ", and a delta is required" : "";
    throw new Se(
      s + "the arguments to closeTo or approximately must be numbers" + o,
      void 0,
      r
    );
  }
  this.assert(
    Math.abs(i - e) <= t,
    "expected #{this} to be close to " + e + " +/- " + t,
    "expected #{this} not to be close to " + e + " +/- " + t
  );
}
L(Lu, "closeTo");
x.addMethod("closeTo", Lu);
x.addMethod("approximately", Lu);
function vy(e, t, n, i, s) {
  let r = Array.from(t), o = Array.from(e);
  if (!i) {
    if (o.length !== r.length)
      return !1;
    r = r.slice();
  }
  return o.every(function(a, l) {
    if (s)
      return n ? n(a, r[l]) : a === r[l];
    if (!n) {
      var u = r.indexOf(a);
      return u === -1 ? !1 : (i || r.splice(u, 1), !0);
    }
    return r.some(function(c, f) {
      return n(a, c) ? (i || r.splice(f, 1), !0) : !1;
    });
  });
}
L(vy, "isSubsetOf");
x.addMethod("members", function(e, t) {
  t && N(this, "message", t);
  var n = N(this, "object"), i = N(this, "message"), s = N(this, "ssfi");
  new x(n, i, s, !0).to.be.iterable, new x(e, i, s, !0).to.be.iterable;
  var r = N(this, "contains"), o = N(this, "ordered"), a, l, u;
  r ? (a = o ? "an ordered superset" : "a superset", l = "expected #{this} to be " + a + " of #{exp}", u = "expected #{this} to not be " + a + " of #{exp}") : (a = o ? "ordered members" : "members", l = "expected #{this} to have the same " + a + " as #{exp}", u = "expected #{this} to not have the same " + a + " as #{exp}");
  var c = N(this, "deep") ? N(this, "eql") : void 0;
  this.assert(
    vy(e, n, c, r, o),
    l,
    u,
    e,
    n,
    !0
  );
});
x.addProperty("iterable", function(e) {
  e && N(this, "message", e);
  var t = N(this, "object");
  this.assert(
    t != null && t[Symbol.iterator],
    "expected #{this} to be an iterable",
    "expected #{this} to not be an iterable",
    t
  );
});
function _y(e, t) {
  t && N(this, "message", t);
  var n = N(this, "object"), i = N(this, "message"), s = N(this, "ssfi"), r = N(this, "contains"), o = N(this, "deep"), a = N(this, "eql");
  new x(e, i, s, !0).to.be.an("array"), r ? this.assert(
    e.some(function(l) {
      return n.indexOf(l) > -1;
    }),
    "expected #{this} to contain one of #{exp}",
    "expected #{this} to not contain one of #{exp}",
    e,
    n
  ) : o ? this.assert(
    e.some(function(l) {
      return a(n, l);
    }),
    "expected #{this} to deeply equal one of #{exp}",
    "expected #{this} to deeply equal one of #{exp}",
    e,
    n
  ) : this.assert(
    e.indexOf(n) > -1,
    "expected #{this} to be one of #{exp}",
    "expected #{this} to not be one of #{exp}",
    e,
    n
  );
}
L(_y, "oneOf");
x.addMethod("oneOf", _y);
function Du(e, t, n) {
  n && N(this, "message", n);
  var i = N(this, "object"), s = N(this, "message"), r = N(this, "ssfi");
  new x(i, s, r, !0).is.a("function");
  var o;
  t ? (new x(e, s, r, !0).to.have.property(t), o = e[t]) : (new x(e, s, r, !0).is.a("function"), o = e()), i();
  var a = t == null ? e() : e[t], l = t == null ? o : "." + t;
  N(this, "deltaMsgObj", l), N(this, "initialDeltaValue", o), N(this, "finalDeltaValue", a), N(this, "deltaBehavior", "change"), N(this, "realDelta", a !== o), this.assert(
    o !== a,
    "expected " + l + " to change",
    "expected " + l + " to not change"
  );
}
L(Du, "assertChanges");
x.addMethod("change", Du);
x.addMethod("changes", Du);
function Ru(e, t, n) {
  n && N(this, "message", n);
  var i = N(this, "object"), s = N(this, "message"), r = N(this, "ssfi");
  new x(i, s, r, !0).is.a("function");
  var o;
  t ? (new x(e, s, r, !0).to.have.property(t), o = e[t]) : (new x(e, s, r, !0).is.a("function"), o = e()), new x(o, s, r, !0).is.a("number"), i();
  var a = t == null ? e() : e[t], l = t == null ? o : "." + t;
  N(this, "deltaMsgObj", l), N(this, "initialDeltaValue", o), N(this, "finalDeltaValue", a), N(this, "deltaBehavior", "increase"), N(this, "realDelta", a - o), this.assert(
    a - o > 0,
    "expected " + l + " to increase",
    "expected " + l + " to not increase"
  );
}
L(Ru, "assertIncreases");
x.addMethod("increase", Ru);
x.addMethod("increases", Ru);
function Fu(e, t, n) {
  n && N(this, "message", n);
  var i = N(this, "object"), s = N(this, "message"), r = N(this, "ssfi");
  new x(i, s, r, !0).is.a("function");
  var o;
  t ? (new x(e, s, r, !0).to.have.property(t), o = e[t]) : (new x(e, s, r, !0).is.a("function"), o = e()), new x(o, s, r, !0).is.a("number"), i();
  var a = t == null ? e() : e[t], l = t == null ? o : "." + t;
  N(this, "deltaMsgObj", l), N(this, "initialDeltaValue", o), N(this, "finalDeltaValue", a), N(this, "deltaBehavior", "decrease"), N(this, "realDelta", o - a), this.assert(
    a - o < 0,
    "expected " + l + " to decrease",
    "expected " + l + " to not decrease"
  );
}
L(Fu, "assertDecreases");
x.addMethod("decrease", Fu);
x.addMethod("decreases", Fu);
function xy(e, t) {
  t && N(this, "message", t);
  var n = N(this, "deltaMsgObj"), i = N(this, "initialDeltaValue"), s = N(this, "finalDeltaValue"), r = N(this, "deltaBehavior"), o = N(this, "realDelta"), a;
  r === "change" ? a = Math.abs(s - i) === Math.abs(e) : a = o === Math.abs(e), this.assert(
    a,
    "expected " + n + " to " + r + " by " + e,
    "expected " + n + " to not " + r + " by " + e
  );
}
L(xy, "assertDelta");
x.addMethod("by", xy);
x.addProperty("extensible", function() {
  var e = N(this, "object"), t = e === Object(e) && Object.isExtensible(e);
  this.assert(
    t,
    "expected #{this} to be extensible",
    "expected #{this} to not be extensible"
  );
});
x.addProperty("sealed", function() {
  var e = N(this, "object"), t = e === Object(e) ? Object.isSealed(e) : !0;
  this.assert(
    t,
    "expected #{this} to be sealed",
    "expected #{this} to not be sealed"
  );
});
x.addProperty("frozen", function() {
  var e = N(this, "object"), t = e === Object(e) ? Object.isFrozen(e) : !0;
  this.assert(
    t,
    "expected #{this} to be frozen",
    "expected #{this} to not be frozen"
  );
});
x.addProperty("finite", function(e) {
  var t = N(this, "object");
  this.assert(
    typeof t == "number" && isFinite(t),
    "expected #{this} to be a finite number",
    "expected #{this} to not be a finite number"
  );
});
function Xs(e, t) {
  return new x(e, t);
}
L(Xs, "expect");
Xs.fail = function(e, t, n, i) {
  throw arguments.length < 2 && (n = e, e = void 0), n = n || "expect.fail()", new Se(n, {
    actual: e,
    expected: t,
    operator: i
  }, Xs.fail);
};
var Sy = {};
iu(Sy, {
  Should: () => fT,
  should: () => uT
});
function $u() {
  function e() {
    return this instanceof String || this instanceof Number || this instanceof Boolean || typeof Symbol == "function" && this instanceof Symbol || typeof BigInt == "function" && this instanceof BigInt ? new x(this.valueOf(), null, e) : new x(this, null, e);
  }
  L(e, "shouldGetter");
  function t(i) {
    Object.defineProperty(this, "should", {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    });
  }
  L(t, "shouldSetter"), Object.defineProperty(Object.prototype, "should", {
    set: t,
    get: e,
    configurable: !0
  });
  var n = {};
  return n.fail = function(i, s, r, o) {
    throw arguments.length < 2 && (r = i, i = void 0), r = r || "should.fail()", new Se(r, {
      actual: i,
      expected: s,
      operator: o
    }, n.fail);
  }, n.equal = function(i, s, r) {
    new x(i, r).to.equal(s);
  }, n.Throw = function(i, s, r, o) {
    new x(i, o).to.Throw(s, r);
  }, n.exist = function(i, s) {
    new x(i, s).to.exist;
  }, n.not = {}, n.not.equal = function(i, s, r) {
    new x(i, r).to.not.equal(s);
  }, n.not.Throw = function(i, s, r, o) {
    new x(i, o).to.not.Throw(s, r);
  }, n.not.exist = function(i, s) {
    new x(i, s).to.not.exist;
  }, n.throw = n.Throw, n.not.throw = n.not.Throw, n;
}
L($u, "loadShould");
var uT = $u, fT = $u;
function _(e, t) {
  var n = new x(null, null, _, !0);
  n.assert(
    e,
    t,
    "[ negation message unavailable ]"
  );
}
L(_, "assert");
_.fail = function(e, t, n, i) {
  throw arguments.length < 2 && (n = e, e = void 0), n = n || "assert.fail()", new Se(n, {
    actual: e,
    expected: t,
    operator: i
  }, _.fail);
};
_.isOk = function(e, t) {
  new x(e, t, _.isOk, !0).is.ok;
};
_.isNotOk = function(e, t) {
  new x(e, t, _.isNotOk, !0).is.not.ok;
};
_.equal = function(e, t, n) {
  var i = new x(e, n, _.equal, !0);
  i.assert(
    t == fe(i, "object"),
    "expected #{this} to equal #{exp}",
    "expected #{this} to not equal #{act}",
    t,
    e,
    !0
  );
};
_.notEqual = function(e, t, n) {
  var i = new x(e, n, _.notEqual, !0);
  i.assert(
    t != fe(i, "object"),
    "expected #{this} to not equal #{exp}",
    "expected #{this} to equal #{act}",
    t,
    e,
    !0
  );
};
_.strictEqual = function(e, t, n) {
  new x(e, n, _.strictEqual, !0).to.equal(t);
};
_.notStrictEqual = function(e, t, n) {
  new x(e, n, _.notStrictEqual, !0).to.not.equal(t);
};
_.deepEqual = _.deepStrictEqual = function(e, t, n) {
  new x(e, n, _.deepEqual, !0).to.eql(t);
};
_.notDeepEqual = function(e, t, n) {
  new x(e, n, _.notDeepEqual, !0).to.not.eql(t);
};
_.isAbove = function(e, t, n) {
  new x(e, n, _.isAbove, !0).to.be.above(t);
};
_.isAtLeast = function(e, t, n) {
  new x(e, n, _.isAtLeast, !0).to.be.least(t);
};
_.isBelow = function(e, t, n) {
  new x(e, n, _.isBelow, !0).to.be.below(t);
};
_.isAtMost = function(e, t, n) {
  new x(e, n, _.isAtMost, !0).to.be.most(t);
};
_.isTrue = function(e, t) {
  new x(e, t, _.isTrue, !0).is.true;
};
_.isNotTrue = function(e, t) {
  new x(e, t, _.isNotTrue, !0).to.not.equal(!0);
};
_.isFalse = function(e, t) {
  new x(e, t, _.isFalse, !0).is.false;
};
_.isNotFalse = function(e, t) {
  new x(e, t, _.isNotFalse, !0).to.not.equal(!1);
};
_.isNull = function(e, t) {
  new x(e, t, _.isNull, !0).to.equal(null);
};
_.isNotNull = function(e, t) {
  new x(e, t, _.isNotNull, !0).to.not.equal(null);
};
_.isNaN = function(e, t) {
  new x(e, t, _.isNaN, !0).to.be.NaN;
};
_.isNotNaN = function(e, t) {
  new x(e, t, _.isNotNaN, !0).not.to.be.NaN;
};
_.exists = function(e, t) {
  new x(e, t, _.exists, !0).to.exist;
};
_.notExists = function(e, t) {
  new x(e, t, _.notExists, !0).to.not.exist;
};
_.isUndefined = function(e, t) {
  new x(e, t, _.isUndefined, !0).to.equal(void 0);
};
_.isDefined = function(e, t) {
  new x(e, t, _.isDefined, !0).to.not.equal(void 0);
};
_.isCallable = function(e, t) {
  new x(e, t, _.isCallable, !0).is.callable;
};
_.isNotCallable = function(e, t) {
  new x(e, t, _.isNotCallable, !0).is.not.callable;
};
_.isObject = function(e, t) {
  new x(e, t, _.isObject, !0).to.be.a("object");
};
_.isNotObject = function(e, t) {
  new x(e, t, _.isNotObject, !0).to.not.be.a("object");
};
_.isArray = function(e, t) {
  new x(e, t, _.isArray, !0).to.be.an("array");
};
_.isNotArray = function(e, t) {
  new x(e, t, _.isNotArray, !0).to.not.be.an("array");
};
_.isString = function(e, t) {
  new x(e, t, _.isString, !0).to.be.a("string");
};
_.isNotString = function(e, t) {
  new x(e, t, _.isNotString, !0).to.not.be.a("string");
};
_.isNumber = function(e, t) {
  new x(e, t, _.isNumber, !0).to.be.a("number");
};
_.isNotNumber = function(e, t) {
  new x(e, t, _.isNotNumber, !0).to.not.be.a("number");
};
_.isFinite = function(e, t) {
  new x(e, t, _.isFinite, !0).to.be.finite;
};
_.isBoolean = function(e, t) {
  new x(e, t, _.isBoolean, !0).to.be.a("boolean");
};
_.isNotBoolean = function(e, t) {
  new x(e, t, _.isNotBoolean, !0).to.not.be.a("boolean");
};
_.typeOf = function(e, t, n) {
  new x(e, n, _.typeOf, !0).to.be.a(t);
};
_.notTypeOf = function(e, t, n) {
  new x(e, n, _.notTypeOf, !0).to.not.be.a(t);
};
_.instanceOf = function(e, t, n) {
  new x(e, n, _.instanceOf, !0).to.be.instanceOf(t);
};
_.notInstanceOf = function(e, t, n) {
  new x(e, n, _.notInstanceOf, !0).to.not.be.instanceOf(t);
};
_.include = function(e, t, n) {
  new x(e, n, _.include, !0).include(t);
};
_.notInclude = function(e, t, n) {
  new x(e, n, _.notInclude, !0).not.include(t);
};
_.deepInclude = function(e, t, n) {
  new x(e, n, _.deepInclude, !0).deep.include(t);
};
_.notDeepInclude = function(e, t, n) {
  new x(e, n, _.notDeepInclude, !0).not.deep.include(t);
};
_.nestedInclude = function(e, t, n) {
  new x(e, n, _.nestedInclude, !0).nested.include(t);
};
_.notNestedInclude = function(e, t, n) {
  new x(e, n, _.notNestedInclude, !0).not.nested.include(t);
};
_.deepNestedInclude = function(e, t, n) {
  new x(e, n, _.deepNestedInclude, !0).deep.nested.include(t);
};
_.notDeepNestedInclude = function(e, t, n) {
  new x(e, n, _.notDeepNestedInclude, !0).not.deep.nested.include(t);
};
_.ownInclude = function(e, t, n) {
  new x(e, n, _.ownInclude, !0).own.include(t);
};
_.notOwnInclude = function(e, t, n) {
  new x(e, n, _.notOwnInclude, !0).not.own.include(t);
};
_.deepOwnInclude = function(e, t, n) {
  new x(e, n, _.deepOwnInclude, !0).deep.own.include(t);
};
_.notDeepOwnInclude = function(e, t, n) {
  new x(e, n, _.notDeepOwnInclude, !0).not.deep.own.include(t);
};
_.match = function(e, t, n) {
  new x(e, n, _.match, !0).to.match(t);
};
_.notMatch = function(e, t, n) {
  new x(e, n, _.notMatch, !0).to.not.match(t);
};
_.property = function(e, t, n) {
  new x(e, n, _.property, !0).to.have.property(t);
};
_.notProperty = function(e, t, n) {
  new x(e, n, _.notProperty, !0).to.not.have.property(t);
};
_.propertyVal = function(e, t, n, i) {
  new x(e, i, _.propertyVal, !0).to.have.property(t, n);
};
_.notPropertyVal = function(e, t, n, i) {
  new x(e, i, _.notPropertyVal, !0).to.not.have.property(t, n);
};
_.deepPropertyVal = function(e, t, n, i) {
  new x(e, i, _.deepPropertyVal, !0).to.have.deep.property(t, n);
};
_.notDeepPropertyVal = function(e, t, n, i) {
  new x(e, i, _.notDeepPropertyVal, !0).to.not.have.deep.property(t, n);
};
_.ownProperty = function(e, t, n) {
  new x(e, n, _.ownProperty, !0).to.have.own.property(t);
};
_.notOwnProperty = function(e, t, n) {
  new x(e, n, _.notOwnProperty, !0).to.not.have.own.property(t);
};
_.ownPropertyVal = function(e, t, n, i) {
  new x(e, i, _.ownPropertyVal, !0).to.have.own.property(t, n);
};
_.notOwnPropertyVal = function(e, t, n, i) {
  new x(e, i, _.notOwnPropertyVal, !0).to.not.have.own.property(t, n);
};
_.deepOwnPropertyVal = function(e, t, n, i) {
  new x(e, i, _.deepOwnPropertyVal, !0).to.have.deep.own.property(t, n);
};
_.notDeepOwnPropertyVal = function(e, t, n, i) {
  new x(e, i, _.notDeepOwnPropertyVal, !0).to.not.have.deep.own.property(t, n);
};
_.nestedProperty = function(e, t, n) {
  new x(e, n, _.nestedProperty, !0).to.have.nested.property(t);
};
_.notNestedProperty = function(e, t, n) {
  new x(e, n, _.notNestedProperty, !0).to.not.have.nested.property(t);
};
_.nestedPropertyVal = function(e, t, n, i) {
  new x(e, i, _.nestedPropertyVal, !0).to.have.nested.property(t, n);
};
_.notNestedPropertyVal = function(e, t, n, i) {
  new x(e, i, _.notNestedPropertyVal, !0).to.not.have.nested.property(t, n);
};
_.deepNestedPropertyVal = function(e, t, n, i) {
  new x(e, i, _.deepNestedPropertyVal, !0).to.have.deep.nested.property(t, n);
};
_.notDeepNestedPropertyVal = function(e, t, n, i) {
  new x(e, i, _.notDeepNestedPropertyVal, !0).to.not.have.deep.nested.property(t, n);
};
_.lengthOf = function(e, t, n) {
  new x(e, n, _.lengthOf, !0).to.have.lengthOf(t);
};
_.hasAnyKeys = function(e, t, n) {
  new x(e, n, _.hasAnyKeys, !0).to.have.any.keys(t);
};
_.hasAllKeys = function(e, t, n) {
  new x(e, n, _.hasAllKeys, !0).to.have.all.keys(t);
};
_.containsAllKeys = function(e, t, n) {
  new x(e, n, _.containsAllKeys, !0).to.contain.all.keys(t);
};
_.doesNotHaveAnyKeys = function(e, t, n) {
  new x(e, n, _.doesNotHaveAnyKeys, !0).to.not.have.any.keys(t);
};
_.doesNotHaveAllKeys = function(e, t, n) {
  new x(e, n, _.doesNotHaveAllKeys, !0).to.not.have.all.keys(t);
};
_.hasAnyDeepKeys = function(e, t, n) {
  new x(e, n, _.hasAnyDeepKeys, !0).to.have.any.deep.keys(t);
};
_.hasAllDeepKeys = function(e, t, n) {
  new x(e, n, _.hasAllDeepKeys, !0).to.have.all.deep.keys(t);
};
_.containsAllDeepKeys = function(e, t, n) {
  new x(e, n, _.containsAllDeepKeys, !0).to.contain.all.deep.keys(t);
};
_.doesNotHaveAnyDeepKeys = function(e, t, n) {
  new x(e, n, _.doesNotHaveAnyDeepKeys, !0).to.not.have.any.deep.keys(t);
};
_.doesNotHaveAllDeepKeys = function(e, t, n) {
  new x(e, n, _.doesNotHaveAllDeepKeys, !0).to.not.have.all.deep.keys(t);
};
_.throws = function(e, t, n, i) {
  (typeof t == "string" || t instanceof RegExp) && (n = t, t = null);
  var s = new x(e, i, _.throws, !0).to.throw(t, n);
  return fe(s, "object");
};
_.doesNotThrow = function(e, t, n, i) {
  (typeof t == "string" || t instanceof RegExp) && (n = t, t = null), new x(e, i, _.doesNotThrow, !0).to.not.throw(t, n);
};
_.operator = function(e, t, n, i) {
  var s;
  switch (t) {
    case "==":
      s = e == n;
      break;
    case "===":
      s = e === n;
      break;
    case ">":
      s = e > n;
      break;
    case ">=":
      s = e >= n;
      break;
    case "<":
      s = e < n;
      break;
    case "<=":
      s = e <= n;
      break;
    case "!=":
      s = e != n;
      break;
    case "!==":
      s = e !== n;
      break;
    default:
      throw i = i && i + ": ", new Se(
        i + 'Invalid operator "' + t + '"',
        void 0,
        _.operator
      );
  }
  var r = new x(s, i, _.operator, !0);
  r.assert(
    fe(r, "object") === !0,
    "expected " + ye(e) + " to be " + t + " " + ye(n),
    "expected " + ye(e) + " to not be " + t + " " + ye(n)
  );
};
_.closeTo = function(e, t, n, i) {
  new x(e, i, _.closeTo, !0).to.be.closeTo(t, n);
};
_.approximately = function(e, t, n, i) {
  new x(e, i, _.approximately, !0).to.be.approximately(t, n);
};
_.sameMembers = function(e, t, n) {
  new x(e, n, _.sameMembers, !0).to.have.same.members(t);
};
_.notSameMembers = function(e, t, n) {
  new x(e, n, _.notSameMembers, !0).to.not.have.same.members(t);
};
_.sameDeepMembers = function(e, t, n) {
  new x(e, n, _.sameDeepMembers, !0).to.have.same.deep.members(t);
};
_.notSameDeepMembers = function(e, t, n) {
  new x(e, n, _.notSameDeepMembers, !0).to.not.have.same.deep.members(t);
};
_.sameOrderedMembers = function(e, t, n) {
  new x(e, n, _.sameOrderedMembers, !0).to.have.same.ordered.members(t);
};
_.notSameOrderedMembers = function(e, t, n) {
  new x(e, n, _.notSameOrderedMembers, !0).to.not.have.same.ordered.members(t);
};
_.sameDeepOrderedMembers = function(e, t, n) {
  new x(e, n, _.sameDeepOrderedMembers, !0).to.have.same.deep.ordered.members(t);
};
_.notSameDeepOrderedMembers = function(e, t, n) {
  new x(e, n, _.notSameDeepOrderedMembers, !0).to.not.have.same.deep.ordered.members(t);
};
_.includeMembers = function(e, t, n) {
  new x(e, n, _.includeMembers, !0).to.include.members(t);
};
_.notIncludeMembers = function(e, t, n) {
  new x(e, n, _.notIncludeMembers, !0).to.not.include.members(t);
};
_.includeDeepMembers = function(e, t, n) {
  new x(e, n, _.includeDeepMembers, !0).to.include.deep.members(t);
};
_.notIncludeDeepMembers = function(e, t, n) {
  new x(e, n, _.notIncludeDeepMembers, !0).to.not.include.deep.members(t);
};
_.includeOrderedMembers = function(e, t, n) {
  new x(e, n, _.includeOrderedMembers, !0).to.include.ordered.members(t);
};
_.notIncludeOrderedMembers = function(e, t, n) {
  new x(e, n, _.notIncludeOrderedMembers, !0).to.not.include.ordered.members(t);
};
_.includeDeepOrderedMembers = function(e, t, n) {
  new x(e, n, _.includeDeepOrderedMembers, !0).to.include.deep.ordered.members(t);
};
_.notIncludeDeepOrderedMembers = function(e, t, n) {
  new x(e, n, _.notIncludeDeepOrderedMembers, !0).to.not.include.deep.ordered.members(t);
};
_.oneOf = function(e, t, n) {
  new x(e, n, _.oneOf, !0).to.be.oneOf(t);
};
_.isIterable = function(e, t) {
  if (e == null || !e[Symbol.iterator])
    throw t = t ? `${t} expected ${ye(e)} to be an iterable` : `expected ${ye(e)} to be an iterable`, new Se(
      t,
      void 0,
      _.isIterable
    );
};
_.changes = function(e, t, n, i) {
  arguments.length === 3 && typeof t == "function" && (i = n, n = null), new x(e, i, _.changes, !0).to.change(t, n);
};
_.changesBy = function(e, t, n, i, s) {
  if (arguments.length === 4 && typeof t == "function") {
    var r = i;
    i = n, s = r;
  } else arguments.length === 3 && (i = n, n = null);
  new x(e, s, _.changesBy, !0).to.change(t, n).by(i);
};
_.doesNotChange = function(e, t, n, i) {
  return arguments.length === 3 && typeof t == "function" && (i = n, n = null), new x(e, i, _.doesNotChange, !0).to.not.change(t, n);
};
_.changesButNotBy = function(e, t, n, i, s) {
  if (arguments.length === 4 && typeof t == "function") {
    var r = i;
    i = n, s = r;
  } else arguments.length === 3 && (i = n, n = null);
  new x(e, s, _.changesButNotBy, !0).to.change(t, n).but.not.by(i);
};
_.increases = function(e, t, n, i) {
  return arguments.length === 3 && typeof t == "function" && (i = n, n = null), new x(e, i, _.increases, !0).to.increase(t, n);
};
_.increasesBy = function(e, t, n, i, s) {
  if (arguments.length === 4 && typeof t == "function") {
    var r = i;
    i = n, s = r;
  } else arguments.length === 3 && (i = n, n = null);
  new x(e, s, _.increasesBy, !0).to.increase(t, n).by(i);
};
_.doesNotIncrease = function(e, t, n, i) {
  return arguments.length === 3 && typeof t == "function" && (i = n, n = null), new x(e, i, _.doesNotIncrease, !0).to.not.increase(t, n);
};
_.increasesButNotBy = function(e, t, n, i, s) {
  if (arguments.length === 4 && typeof t == "function") {
    var r = i;
    i = n, s = r;
  } else arguments.length === 3 && (i = n, n = null);
  new x(e, s, _.increasesButNotBy, !0).to.increase(t, n).but.not.by(i);
};
_.decreases = function(e, t, n, i) {
  return arguments.length === 3 && typeof t == "function" && (i = n, n = null), new x(e, i, _.decreases, !0).to.decrease(t, n);
};
_.decreasesBy = function(e, t, n, i, s) {
  if (arguments.length === 4 && typeof t == "function") {
    var r = i;
    i = n, s = r;
  } else arguments.length === 3 && (i = n, n = null);
  new x(e, s, _.decreasesBy, !0).to.decrease(t, n).by(i);
};
_.doesNotDecrease = function(e, t, n, i) {
  return arguments.length === 3 && typeof t == "function" && (i = n, n = null), new x(e, i, _.doesNotDecrease, !0).to.not.decrease(t, n);
};
_.doesNotDecreaseBy = function(e, t, n, i, s) {
  if (arguments.length === 4 && typeof t == "function") {
    var r = i;
    i = n, s = r;
  } else arguments.length === 3 && (i = n, n = null);
  return new x(e, s, _.doesNotDecreaseBy, !0).to.not.decrease(t, n).by(i);
};
_.decreasesButNotBy = function(e, t, n, i, s) {
  if (arguments.length === 4 && typeof t == "function") {
    var r = i;
    i = n, s = r;
  } else arguments.length === 3 && (i = n, n = null);
  new x(e, s, _.decreasesButNotBy, !0).to.decrease(t, n).but.not.by(i);
};
_.ifError = function(e) {
  if (e)
    throw e;
};
_.isExtensible = function(e, t) {
  new x(e, t, _.isExtensible, !0).to.be.extensible;
};
_.isNotExtensible = function(e, t) {
  new x(e, t, _.isNotExtensible, !0).to.not.be.extensible;
};
_.isSealed = function(e, t) {
  new x(e, t, _.isSealed, !0).to.be.sealed;
};
_.isNotSealed = function(e, t) {
  new x(e, t, _.isNotSealed, !0).to.not.be.sealed;
};
_.isFrozen = function(e, t) {
  new x(e, t, _.isFrozen, !0).to.be.frozen;
};
_.isNotFrozen = function(e, t) {
  new x(e, t, _.isNotFrozen, !0).to.not.be.frozen;
};
_.isEmpty = function(e, t) {
  new x(e, t, _.isEmpty, !0).to.be.empty;
};
_.isNotEmpty = function(e, t) {
  new x(e, t, _.isNotEmpty, !0).to.not.be.empty;
};
(/* @__PURE__ */ L(function e(t, n) {
  return _[n] = _[t], e;
}, "alias"))("isOk", "ok")("isNotOk", "notOk")("throws", "throw")("throws", "Throw")("isExtensible", "extensible")("isNotExtensible", "notExtensible")("isSealed", "sealed")("isNotSealed", "notSealed")("isFrozen", "frozen")("isNotFrozen", "notFrozen")("isEmpty", "empty")("isNotEmpty", "notEmpty")("isCallable", "isFunction")("isNotCallable", "isNotFunction");
var yd = [];
function hT(e) {
  const t = {
    AssertionError: Se,
    util: _o,
    config: lt,
    expect: Xs,
    assert: _,
    Assertion: x,
    ...Sy
  };
  return ~yd.indexOf(e) || (e(t, _o), yd.push(e)), t;
}
L(hT, "use");
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - test utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - expectTypes utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - getActual utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - message composition utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - transferFlags utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - isProxyEnabled helper
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - addProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - addLengthGuard utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - getProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - proxify utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - addMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - overwriteProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - overwriteMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - addChainingMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - overwriteChainableMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - compareByInspect utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - getOwnEnumerablePropertySymbols utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - getOwnEnumerableProperties utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - isNaN utility
 * Copyright(c) 2012-2015 Sakthipriyan Vairamani <thechargingvolcano@gmail.com>
 * MIT Licensed
 */
/*!
 * chai
 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*! Bundled license information:

deep-eql/index.js:
  (*!
   * deep-eql
   * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Check to see if the MemoizeMap has recorded a result of the two operands
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {MemoizeMap} memoizeMap
   * @returns {Boolean|null} result
  *)
  (*!
   * Set the result of the equality into the MemoizeMap
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {MemoizeMap} memoizeMap
   * @param {Boolean} result
  *)
  (*!
   * Primary Export
   *)
  (*!
   * The main logic of the `deepEqual` function.
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {Object} [options] (optional) Additional options
   * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
   * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
      complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
      references to blow the stack.
   * @return {Boolean} equal match
  *)
  (*!
   * Compare two Regular Expressions for equality.
   *
   * @param {RegExp} leftHandOperand
   * @param {RegExp} rightHandOperand
   * @return {Boolean} result
   *)
  (*!
   * Compare two Sets/Maps for equality. Faster than other equality functions.
   *
   * @param {Set} leftHandOperand
   * @param {Set} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
   *
   * @param {Iterable} leftHandOperand
   * @param {Iterable} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Simple equality for generator objects such as those returned by generator functions.
   *
   * @param {Iterable} leftHandOperand
   * @param {Iterable} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Determine if the given object has an @@iterator function.
   *
   * @param {Object} target
   * @return {Boolean} `true` if the object has an @@iterator function.
   *)
  (*!
   * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
   * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
   *
   * @param {Object} target
   * @returns {Array} an array of entries from the @@iterator function
   *)
  (*!
   * Gets all entries from a Generator. This will consume the generator - which could have side effects.
   *
   * @param {Generator} target
   * @returns {Array} an array of entries from the Generator.
   *)
  (*!
   * Gets all own and inherited enumerable keys from a target.
   *
   * @param {Object} target
   * @returns {Array} an array of own and inherited enumerable keys from the target.
   *)
  (*!
   * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
   * each key. If any value of the given key is not equal, the function will return false (early).
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
   * for each enumerable key in the object.
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Returns true if the argument is a primitive.
   *
   * This intentionally returns true for all objects that can be compared by reference,
   * including functions and symbols.
   *
   * @param {Mixed} value
   * @return {Boolean} result
   *)
*/
var Wl = { exports: {} }, Wa, bd;
function dT() {
  if (bd) return Wa;
  bd = 1;
  var e = 1e3, t = e * 60, n = t * 60, i = n * 24, s = i * 7, r = i * 365.25;
  Wa = function(c, f) {
    f = f || {};
    var h = typeof c;
    if (h === "string" && c.length > 0)
      return o(c);
    if (h === "number" && isFinite(c))
      return f.long ? l(c) : a(c);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(c)
    );
  };
  function o(c) {
    if (c = String(c), !(c.length > 100)) {
      var f = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        c
      );
      if (f) {
        var h = parseFloat(f[1]), d = (f[2] || "ms").toLowerCase();
        switch (d) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return h * r;
          case "weeks":
          case "week":
          case "w":
            return h * s;
          case "days":
          case "day":
          case "d":
            return h * i;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return h * n;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return h * t;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return h * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return h;
          default:
            return;
        }
      }
    }
  }
  function a(c) {
    var f = Math.abs(c);
    return f >= i ? Math.round(c / i) + "d" : f >= n ? Math.round(c / n) + "h" : f >= t ? Math.round(c / t) + "m" : f >= e ? Math.round(c / e) + "s" : c + "ms";
  }
  function l(c) {
    var f = Math.abs(c);
    return f >= i ? u(c, f, i, "day") : f >= n ? u(c, f, n, "hour") : f >= t ? u(c, f, t, "minute") : f >= e ? u(c, f, e, "second") : c + " ms";
  }
  function u(c, f, h, d) {
    var p = f >= h * 1.5;
    return Math.round(c / h) + " " + d + (p ? "s" : "");
  }
  return Wa;
}
function pT(e) {
  n.debug = n, n.default = n, n.coerce = l, n.disable = r, n.enable = s, n.enabled = o, n.humanize = dT(), n.destroy = u, Object.keys(e).forEach((c) => {
    n[c] = e[c];
  }), n.names = [], n.skips = [], n.formatters = {};
  function t(c) {
    let f = 0;
    for (let h = 0; h < c.length; h++)
      f = (f << 5) - f + c.charCodeAt(h), f |= 0;
    return n.colors[Math.abs(f) % n.colors.length];
  }
  n.selectColor = t;
  function n(c) {
    let f, h = null, d, p;
    function y(...w) {
      if (!y.enabled)
        return;
      const S = y, k = Number(/* @__PURE__ */ new Date()), b = k - (f || k);
      S.diff = b, S.prev = f, S.curr = k, f = k, w[0] = n.coerce(w[0]), typeof w[0] != "string" && w.unshift("%O");
      let C = 0;
      w[0] = w[0].replace(/%([a-zA-Z%])/g, (I, P) => {
        if (I === "%%")
          return "%";
        C++;
        const D = n.formatters[P];
        if (typeof D == "function") {
          const W = w[C];
          I = D.call(S, W), w.splice(C, 1), C--;
        }
        return I;
      }), n.formatArgs.call(S, w), (S.log || n.log).apply(S, w);
    }
    return y.namespace = c, y.useColors = n.useColors(), y.color = n.selectColor(c), y.extend = i, y.destroy = n.destroy, Object.defineProperty(y, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => h !== null ? h : (d !== n.namespaces && (d = n.namespaces, p = n.enabled(c)), p),
      set: (w) => {
        h = w;
      }
    }), typeof n.init == "function" && n.init(y), y;
  }
  function i(c, f) {
    const h = n(this.namespace + (typeof f > "u" ? ":" : f) + c);
    return h.log = this.log, h;
  }
  function s(c) {
    n.save(c), n.namespaces = c, n.names = [], n.skips = [];
    let f;
    const h = (typeof c == "string" ? c : "").split(/[\s,]+/), d = h.length;
    for (f = 0; f < d; f++)
      h[f] && (c = h[f].replace(/\*/g, ".*?"), c[0] === "-" ? n.skips.push(new RegExp("^" + c.slice(1) + "$")) : n.names.push(new RegExp("^" + c + "$")));
  }
  function r() {
    const c = [
      ...n.names.map(a),
      ...n.skips.map(a).map((f) => "-" + f)
    ].join(",");
    return n.enable(""), c;
  }
  function o(c) {
    if (c[c.length - 1] === "*")
      return !0;
    let f, h;
    for (f = 0, h = n.skips.length; f < h; f++)
      if (n.skips[f].test(c))
        return !1;
    for (f = 0, h = n.names.length; f < h; f++)
      if (n.names[f].test(c))
        return !0;
    return !1;
  }
  function a(c) {
    return c.toString().substring(2, c.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function l(c) {
    return c instanceof Error ? c.stack || c.message : c;
  }
  function u() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return n.enable(n.load()), n;
}
var gT = pT;
(function(e, t) {
  t.formatArgs = i, t.save = s, t.load = r, t.useColors = n, t.storage = o(), t.destroy = /* @__PURE__ */ (() => {
    let l = !1;
    return () => {
      l || (l = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), t.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
  ];
  function n() {
    return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function i(l) {
    if (l[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + l[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors)
      return;
    const u = "color: " + this.color;
    l.splice(1, 0, u, "color: inherit");
    let c = 0, f = 0;
    l[0].replace(/%[a-zA-Z%]/g, (h) => {
      h !== "%%" && (c++, h === "%c" && (f = c));
    }), l.splice(f, 0, u);
  }
  t.log = console.debug || console.log || (() => {
  });
  function s(l) {
    try {
      l ? t.storage.setItem("debug", l) : t.storage.removeItem("debug");
    } catch {
    }
  }
  function r() {
    let l;
    try {
      l = t.storage.getItem("debug");
    } catch {
    }
    return !l && typeof process < "u" && "env" in process && (l = void 0), l;
  }
  function o() {
    try {
      return localStorage;
    } catch {
    }
  }
  e.exports = gT(t);
  const { formatters: a } = e.exports;
  a.j = function(l) {
    try {
      return JSON.stringify(l);
    } catch (u) {
      return "[UnexpectedJSONParseError]: " + u.message;
    }
  };
})(Wl, Wl.exports);
var mT = Wl.exports;
const ky = /* @__PURE__ */ _m(mT);
lt.showDiff = !0;
const wd = ky("tests");
ky("timers");
function yT() {
  return typeof process < "u" && (process != null && process.env), !1;
}
function bT(e, t = null) {
  yT() && W2.runTests && e.forEach((n) => {
    try {
      n();
    } catch (i) {
      throw t ? wd(t, i.message) : wd(i.message), i;
    }
  });
}
function vd(e, t) {
  e != null && e.length && e.forEach((n) => wT(n, t));
}
function wT(e, t) {
  if (!e.isSquare()) {
    if (e.getShortSide() === t.w && e.rot) {
      if (!e.setRotation(0, t))
        throw new Error("could not rotate shape correctly for subset calculation");
    } else if (!t.isSquare() && e.getLongSide() === t.w && !e.rot && !e.setRotation(1, t))
      throw new Error("could not rotate shape correctly for subset calculation");
  }
}
function vT(e, t, n = null, i = "l", s = !0, r = !0) {
  if (!(e != null && e.length)) return;
  if (!t) throw new Error("positionShapes requires stock");
  const o = i === "l" ? "x" : "y", a = i === "l" ? "y" : "x";
  let l = 0;
  xn(n) || ga(n) ? vd(e, n) : vd(e, n ?? t), r && (i === "l" ? e.sort(ns.LDIDA) : e.sort(ns.WDIDA)), e.forEach((u, c) => {
    u[o] = n ? n[o] + l : l, n && (u[a] = n[a]), l += u[o === "x" ? "l" : "w"] + t.getBladeWidth() + u.getMinSpacing(t, !0), bT([() => Xs(l).to.be.a("number")]), n != null && n.isGroup() ? u.groupPlacementOrder = c : u.placementOrder = c, s && u.addToStock(t);
  });
}
class _T {
  constructor(t = null) {
    g(this, "id");
    //api
    g(this, "listId");
    g(this, "shapeListIds", []);
    g(this, "shapes");
    g(this, "direction");
    g(this, "q");
    g(this, "duplicate", !1);
    g(this, "issues", []);
    g(this, "stockMatch");
    var n;
    this.listId = t != null && t.listId ? t.listId : Date.now().toString() + Math.ceil(Math.random() * 1e16), this.id = t == null ? void 0 : t.id, this.shapes = $(t == null ? void 0 : t.shapes) ? t.shapes.map((i) => i.toString()) : [], this.shapeListIds = $(t == null ? void 0 : t.shapeListIds) ? t.shapeListIds : [], this.direction = $(t == null ? void 0 : t.direction) ? t.direction : "l", this.q = $(t == null ? void 0 : t.q) ? t.q : 1, $(t == null ? void 0 : t.shapeList) && ((n = t.shapeList) != null && n.length) && this.validate(t.shapeList);
  }
  validate(t = []) {
    var o, a;
    if (this.issues = [], !(t != null && t.length))
      throw new Error("shapeList is required to validate user group");
    const n = this.findShapes(t);
    if (!n.length)
      return this.issues.push("Must have 2 or more parts."), this.issues;
    const i = n[0];
    if (En(i)) {
      if (!(this != null && this.shapes) || ((o = this.shapes) == null ? void 0 : o.length) < 2)
        return this.issues.push("Must have 2 or more parts."), this.issues;
    } else if (!(this != null && this.shapeListIds) || ((a = this.shapeListIds) == null ? void 0 : a.length) < 2)
      return this.issues.push("Must have 2 or more parts."), this.issues;
    if (n.forEach((l, u) => {
      !l.isSquare() && !["l", "w"].includes(l.orientationLock) && this.issues.push(`Part in position ${u + 1} must have orientation lock set to be part of a group.`);
    }), this.issues.length) return this.issues;
    const s = Ys(this.direction), r = i.getTrimmedDimensions(!0)[s];
    return n.forEach((l, u) => {
      if (l.id === i.id) return;
      const c = l.getTrimmedDimensions(!0)[s];
      ke.equalTo(c, r) || this.issues.push(`Part in position ${u + 1} final ${s === "l" ? "length" : "width"} is not correct for the group. Expected ${r} and is ${c}. Check the dimensions, trim & orientation lock.`);
    }), this.issues;
  }
  findShapes(t = []) {
    var i, s;
    if (!t.length) return [];
    let n = [];
    if (Si(t[0])) {
      if (!((i = this.shapeListIds) != null && i.length)) return [];
      if (n = this.shapeListIds.map((r) => t.find((o) => o.listId === r)).filter((r) => r), !n.length)
        throw new Error("could not map group shapes to shape list");
      return n;
    } else {
      if (!((s = this.shapes) != null && s.length)) return [];
      const r = /* @__PURE__ */ new Set();
      n = this.shapes.map((o) => {
        const a = t.find((l) => l.parentID === o && !l.inUserGroup && !r.has(l.id));
        return a ? (r.add(a.id), a) : null;
      }).filter((o) => o);
    }
    if (!n.length)
      throw new Error("could not map group shapes to shape list");
    return n;
  }
  populateParentID(t) {
    var n;
    t != null && t.length && (n = this == null ? void 0 : this.shapeListIds) != null && n.length && (this.shapes = this.shapeListIds.map((i) => (t.findIndex((r) => r.listId === i) + 1).toString()));
  }
  //create a group from a user group
  createGroup(t = 0, n = 0, i = [], s = null) {
    if (!(i != null && i.length))
      throw new Error("some parts are required to create a user group");
    if (!En(i[0]))
      throw new Error("shapeList must be of type Shape[]");
    const r = this.findShapes(i);
    if (!r.length) return !1;
    const o = r[0];
    r.forEach((c) => {
      const f = i.findIndex((h) => !h.inUserGroup && h.parentID === c.parentID);
      if (f === -1)
        throw new Error("shape not found in shapeList while creating user group.");
      i.splice(f, 1), c.setRotationToOrientationLockWithoutContainer(), c.inUserGroup = !0;
    });
    let a = 0, l = 0;
    this.direction === "l" ? l = o.w : a = o.l;
    const u = new Oi({
      id: `ug${t}.${n}`,
      shapes: r,
      l: a,
      w: l,
      t: o == null ? void 0 : o.t,
      material: o == null ? void 0 : o.material,
      joinDimension: o.l === a ? o.l : o.w,
      direction: this.direction,
      preventAutoRotation: !0,
      type: "user"
    });
    return u ? (u.parentID = `ug${t}`, s && u.updateShapeSpacing(s), u) : !1;
  }
}
const Ey = {
  x: "x",
  y: "y",
  l: "length",
  w: "width",
  t: "thickness",
  q: "quantity",
  orientationLock: "rotation",
  name: "name",
  material: "material",
  banding: "banding",
  cost: "cost",
  grain: "grain",
  trim: "trim",
  x1: "w1",
  x2: "w2",
  y1: "l1",
  y2: "l2",
  all: "all"
};
function xi(e) {
  if (!$(e) || typeof e != "object") return {};
  e = { ...e };
  for (const [t, n] of Object.entries(e))
    t !== "_id" && t.startsWith("_") && (e[t.substring(1)] = n, delete e[t]);
  return e;
}
function xT(e, t = null) {
  return e.map((n) => {
    var i;
    return delete n.id, t ? n.units = t : n.units || (n.units = ((i = this == null ? void 0 : this.optionsStore) == null ? void 0 : i.units) ?? "decimal"), new Oo(n);
  });
}
function ST({
  stockList: e,
  removeScores: t = !1,
  saw: n = null,
  preventAutoRotation: i = !1,
  preventGrainRotation: s = !1
}) {
  return !e || !(e != null && e.length) ? [] : e.map((r) => {
    n && (r.saw = n), i && (r.preventAutoRotation = !0), s && (r.preventGrainRotation = !0);
    const o = new ti(r);
    if (o.issues.length)
      throw new Error(
        `Issues found when attempting to recreate stock list - ${o.issues.join()}`,
        { cause: o.issues }
      );
    return t && delete o.algoBenchmark, o;
  }).sort(ns.ID);
}
function kT({
  shapeList: e,
  stockList: t,
  preventAutoRotation: n = !1
}) {
  if (typeof t > "u")
    throw new Error("recreateShapeList requires stockList");
  return !e || !(e != null && e.length) ? [] : e.map((i) => {
    var o;
    n && (i.preventAutoRotation = !0);
    let s;
    if (IT(i) && ((o = i == null ? void 0 : i.shapes) != null && o.length) ? (i.shapes = i.shapes.map((a) => new Gn(a)), s = new Oi(i)) : s = new Gn(i), s.issues.length)
      throw new Error(`Issues found when attempting to recreate shape list - ${s.issues.join()}`);
    const r = t.find((a) => {
      var l;
      return a.id === (((l = i == null ? void 0 : i.stock) == null ? void 0 : l.id) ?? (i == null ? void 0 : i.stockId));
    });
    return s.stock = r, s;
  }).sort(ns.ID);
}
function ET({
  cutList: e,
  stockList: t
}) {
  if (typeof t > "u")
    throw new Error("recreateCutList requires stockList");
  return !e || !(e != null && e.length) ? [] : e.map((n) => {
    const i = new ia(n), s = t.find((r) => {
      var o;
      return r.id === (((o = n == null ? void 0 : n.stock) == null ? void 0 : o.id) ?? (n == null ? void 0 : n.stockId));
    });
    return i.stock = s, i;
  });
}
function CT({
  segmentList: e,
  stockList: t
}) {
  return !e || !(e != null && e.length) ? [] : e.map((n) => {
    const i = t.find((r) => {
      var o;
      return r.id === (((o = n == null ? void 0 : n.stock) == null ? void 0 : o.id) ?? (n == null ? void 0 : n.stockId));
    });
    return n.stock = i, new Ay(n);
  });
}
function Cy(e = null, t = null, n = null) {
  if (!e) throw new Error("no container supplied to willItFit");
  if (!t) throw new Error("no shape supplied to willItFit");
  const i = t.rot;
  function s(h = !1, d = "l") {
    var p, y;
    return ke.equalTo(
      t[h ? Ys(d) : d],
      e[d]
    ) || ke.lessThanOrEqualTo(
      t[h ? Ys(d) : d],
      e[d] - (zl(e) ? (y = (p = e == null ? void 0 : e.saw) == null ? void 0 : p.options) == null ? void 0 : y.minSpacing : 0)
    );
  }
  function r(h = !0) {
    return t.setRotation(i), h;
  }
  const o = t.getNecessaryOrientation(e);
  let a = null;
  if (o && (a = o === "l" ? 0 : 1), t.orientationLock) {
    if ($(n) && n !== a)
      return r(!1);
    t.forceRotate(a);
  } else $(n) && t.forceRotate(n);
  if (a && t.rot !== a)
    return r(!1);
  const l = s(!1, "l"), u = s(!1, "w"), c = s(!0, "l"), f = s(!0, "w");
  return $(n) || o ? r(l && u) : r(l && u || c && f);
}
function Ao(e, t, n = "decimal", i = !1) {
  return $(e == null ? void 0 : e[t]) ? J(
    e[t],
    n,
    !1,
    i
  ) : null;
}
class Ty {
  constructor(t, n = !1) {
    g(this, "readonly");
    g(this, "id");
    g(this, "listId");
    g(this, "units", "decimal");
    g(this, "l");
    g(this, "w");
    g(this, "t");
    g(this, "q");
    g(this, "name");
    g(this, "material");
    g(this, "trim", {
      x1: 0,
      x2: 0,
      y1: 0,
      y2: 0
    });
    g(this, "cost", null);
    g(this, "grain", "");
    g(this, "selected", !1);
    //used for multiple editing
    g(this, "multiEdit", !1);
    //is this the multi-select stock
    g(this, "type", null);
    g(this, "autoAdd", !1);
    g(this, "used");
    g(this, "saw");
    g(this, "preventGrainRotation");
    g(this, "issues", []);
    g(this, "warnings", []);
    g(this, "notes", "");
    var r, o;
    t = xi(t), $(t.units) || console.warn("Attempting to create InputStock without units"), this.units = t.units, this.readonly = t.readonly, this.id = t.id, this.listId = t != null && t.listId ? t.listId : Date.now().toString() + vm(), ["l", "w", "t"].forEach((a) => {
      this[a] = Ao(
        t,
        a,
        this.units,
        n
      );
    }), this.q = $(t.q) ? typeof t.q == "string" ? parseInt(t.q) : t.q : null, this.autoAdd = $(t.autoAdd) ? t.autoAdd : !1, this.name = $(t.name) ? us(t.name).toUpperCase() : "", this.material = $(t.material) ? t.material.trim().toUpperCase() : "";
    const s = ["x1", "x2", "y1", "y2"];
    this.trim = {
      x1: null,
      x2: null,
      y1: null,
      y2: null
    }, s.forEach((a) => {
      this.trim[a] = Ao(
        t.trim,
        a,
        this.units,
        n
      );
    }), this.cost = $(t.cost) ? t.cost : null, this.grain = $(t.grain) ? (r = t == null ? void 0 : t.grain) == null ? void 0 : r.toLowerCase() : "", this.multiEdit = t.multiEdit, this.type = t.type, this.preventGrainRotation = !0, this.notes = t != null && t.notes ? (o = t.notes) == null ? void 0 : o.replace(/,/g, "") : "";
  }
  //change the units of the stock
  changeUnits(t, n, i) {
    if (!(t === "decimal" || t === "fraction")) return;
    this.units = t;
    function s(o) {
      return o ? J(
        o,
        t,
        !1,
        !1,
        i
      ) : null;
    }
    this.l = s(this.l), this.w = s(this.w), this.t = s(this.t), ["x1", "x2", "y1", "y2"].forEach((o) => {
      var a;
      this.trim[o] = $((a = this.trim) == null ? void 0 : a[o]) ? s(this.trim[o]) : null;
    });
  }
  //change the type of stock
  changeType(t) {
    switch (t !== "sheet" && (this.grain = ""), t) {
      case "linear":
        this.trim.y1 = 0, this.trim.y2 = 0;
        break;
      case "roll":
        this.trim.x1 = 0, this.trim.x2 = 0, this.trim.y1 = 0, this.trim.y2 = 0, this.t = null;
        break;
    }
  }
  //create an id from an index
  createId(t, n = 0) {
    this.id = `${t + 1}.${n}`;
  }
  isSquare() {
    return this.l === this.w;
  }
  getWarnings() {
    this.warnings = [], ["q"].forEach((t) => {
      this.warnings.push(...et[t](this[t]));
    });
  }
  validate() {
    return this.issues = [], ["l", "w", "t"].forEach((t) => {
      this.issues.push(...et[t](this[t]));
    }), this.issues.push(...et.trim(this)), this.getWarnings(), this.issues;
  }
}
class Oo {
  constructor(t, n = !1) {
    g(this, "readonly");
    g(this, "id");
    g(this, "listId");
    g(this, "units", "decimal");
    g(this, "l");
    g(this, "w");
    g(this, "t");
    g(this, "q", 1);
    g(this, "name", "");
    g(this, "material", "");
    g(this, "trim", {
      x1: 0,
      x2: 0,
      y1: 0,
      y2: 0
    });
    g(this, "cost");
    g(this, "banding", {
      a: !1,
      b: !1,
      c: !1,
      d: !1,
      x1: !1,
      x2: !1,
      y1: !1,
      y2: !1
    });
    g(this, "bandingType", {
      a: "",
      b: "",
      c: "",
      d: "",
      x1: "",
      x2: "",
      y1: "",
      y2: ""
    });
    g(this, "bandingOptions");
    g(this, "orientationLock");
    g(this, "selectedMaterial");
    g(this, "selected");
    //used for multiple editing
    g(this, "multiEdit", !1);
    g(this, "machining");
    g(this, "issues", []);
    g(this, "warnings", []);
    g(this, "notes", "");
    g(this, "stockLock");
    g(this, "stockMatch");
    g(this, "customData");
    var a;
    t = t = xi(t), this.units = t.units, this.readonly = t.readonly, this.id = t.id, this.listId = t != null && t.listId ? t.listId : Date.now().toString() + vm(), ["l", "w", "t"].forEach((l) => {
      this[l] = Ao(
        t,
        l,
        this.units,
        n
      );
    }), this.q = $(t == null ? void 0 : t.q) ? typeof t.q == "string" ? parseInt(t.q) : t.q : null, this.name = $(t.name) ? us(t.name).toUpperCase() : "", this.material = $(t.material) ? t.material.trim().toUpperCase() : "";
    const s = ["x1", "x2", "y1", "y2"];
    this.trim = {
      x1: null,
      x2: null,
      y1: null,
      y2: null
    }, s.forEach((l) => {
      this.trim[l] = Ao(
        t.trim,
        l,
        this.units,
        n
      );
    });
    const r = ["a", "b", "c", "d", "x1", "x2", "y1", "y2", "all"];
    this.bandingOptions = {
      a: {},
      b: {},
      c: {},
      d: {},
      x1: {},
      x2: {},
      y1: {},
      y2: {},
      all: {}
    }, r.forEach((l) => {
      var u;
      this.bandingOptions[l] = $((u = t == null ? void 0 : t.bandingOptions) == null ? void 0 : u[l]) ? t.bandingOptions[l] : {};
    });
    const o = ["a", "b", "c", "d", "x1", "x2", "y1", "y2"];
    this.banding = {
      a: !1,
      b: !1,
      c: !1,
      d: !1,
      x1: !1,
      x2: !1,
      y1: !1,
      y2: !1
    }, o.forEach((l) => {
      var u;
      this.banding[l] = $((u = t == null ? void 0 : t.banding) == null ? void 0 : u[l]) ? t.banding[l] : !1;
    }), this.bandingType = {
      a: "",
      b: "",
      c: "",
      d: "",
      x1: "",
      x2: "",
      y1: "",
      y2: ""
    }, o.forEach((l) => {
      var u;
      this.bandingType[l] = $((u = t == null ? void 0 : t.bandingType) == null ? void 0 : u[l]) ? t.bandingType[l] : "";
    }), this.orientationLock = $(t.orientationLock) ? t.orientationLock.toLowerCase() : "", this.selected = !1, this.multiEdit = t.multiEdit, this.machining = new Dm(t.machining ?? {
      holes: [],
      corners: []
    }), this.notes = t != null && t.notes ? (a = t.notes) == null ? void 0 : a.replace(/,/g, "") : "", this.stockLock = (t == null ? void 0 : t.stockLock) ?? [], this.customData = (t == null ? void 0 : t.customData) ?? {};
  }
  /**
   * change the units of the shape
   * @param {String} newUnits
   */
  changeUnits(t, n, i) {
    if (!(t === "decimal" || t === "fraction")) return;
    this.units = t;
    function s(o) {
      return o ? J(
        o,
        t,
        !1,
        !1,
        i
      ) : null;
    }
    this.l = s(this.l), this.w = s(this.w), this.t = s(this.t), ["x1", "x2", "y1", "y2"].forEach((o) => {
      var a;
      this.trim[o] = $((a = this.trim) == null ? void 0 : a[o]) ? s(this.trim[o]) : null;
    });
  }
  isSquare() {
    return this.l === this.w;
  }
  /**
   * change the type of the stock
   * @param {String} newType
   */
  changeStockType(t) {
    switch (t) {
      case "sheet":
      case "roll":
        this.orientationLock = "", t === "roll" && (this.t = null);
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
  createId(t, n = 0) {
    this.id = `${t + 1}.${n}`;
  }
  getLongSide() {
    return J(this.l) > J(this.w) ? J(this.l) : J(this.w);
  }
  getShortSide() {
    return J(this.l) < J(this.w) ? J(this.l) : J(this.w);
  }
  getRotatedDimensions() {
    return ["l", "w"].includes(this.orientationLock) ? {
      name: this.name,
      listId: this.listId,
      l: this.orientationLock === "l" ? this.getLongSide() : this.getShortSide(),
      w: this.orientationLock === "l" ? this.getShortSide() : this.getLongSide(),
      orientationLock: this.orientationLock
    } : {
      name: this.name,
      l: this.getLongSide(),
      w: this.getShortSide(),
      orientationLock: this.orientationLock
    };
  }
  getTrimmedDimensions(t = !1) {
    let n = { l: J(this.l), w: J(this.w) };
    return t && (n = this.getRotatedDimensions()), {
      name: this.name,
      listId: this.listId,
      l: n.l - (this.trim.x1 + this.trim.x2),
      w: n.w - (this.trim.y1 + this.trim.y2),
      orientationLock: this.orientationLock
    };
  }
  //used to apply a single trim value to all sides
  applyPartTrim(t, n) {
    if (!this.readonly)
      if (t = J(t), this.trim) {
        for (const i in this.trim)
          this.trim[i] = t;
        n === "linear" && (this.trim.y1 = 0, this.trim.y2 = 0);
      } else
        this.trim = {
          x1: t,
          x2: t,
          y1: n !== "linear" ? t : 0,
          y2: n !== "linear" ? t : 0
        };
  }
  /**
   * to align with Shape
   * @remarks input shapes are always 0
   */
  get rot() {
    return 0;
  }
  validate(t, n = 0, i = !1) {
    return this.issues = [], ["l", "w", "t"].forEach((s) => {
      this.issues.push(...et[s](this[s]));
    }), n = J(n), this.issues.push(...et.partTrim(this, n)), this.issues.push(...et.trim(this)), et.machining(this), this.getWarnings(
      t,
      n,
      i
    ), this.issues;
  }
  getWarnings(t, n = 0, i = !1) {
    this.warnings = [], ["q"].forEach((s) => {
      this.warnings.push(...et[s](this[s]));
    }), t.length && !i && this.warnings.push(...et.stockMatch(
      this,
      t,
      n
    ));
  }
  convertBandingOptionsToBanding() {
    for (const t in this.bandingOptions) {
      if (t === "all") continue;
      const n = Object.values(this.bandingOptions[t]);
      if (n.some((i) => i) && (n.every((i) => i) || this.issues.push("If using banding, all options must be set.")), n.length === 1 && typeof n[0] == "boolean") {
        const i = Object.keys(this.bandingOptions[t])[0];
        i && n[0] === !0 ? (this.banding[t] = !0, this.bandingType[t] = i) : (this.banding[t] = !1, this.bandingType[t] = "");
      } else {
        const i = n.filter((s) => s).map((s) => s.toString().trim().replace("|", "_"));
        if (!i.length) {
          this.banding[t] = !1, this.bandingType[t] = "";
          continue;
        }
        this.banding[t] = !0, this.bandingType[t] = i.join("|");
      }
    }
  }
  removeBandingApartFromBandingOptions() {
    const t = ["a", "b", "c", "d", "x1", "x2", "y1", "y2"];
    for (const n of t)
      this.banding[n] = !1, this.bandingType[n] = "";
  }
  setAllBandingOptions(t, n, i = ["x1", "x2", "y1", "y2"]) {
    for (const s of i)
      $(n) ? (this.banding[s] = !0, this.bandingOptions[s][t] = n) : (this.banding[s] = !1, this.bandingOptions[s][t] = "");
  }
  removeBanding() {
    const t = ["a", "b", "c", "d", "x1", "x2", "y1", "y2", "all"];
    for (const n of t)
      this.bandingOptions[n] = {}, n !== "all" && (this.banding[n] = !1, this.bandingType[n] = "");
  }
}
class ur {
  constructor(t) {
    g(this, "id");
    g(this, "parentID");
    g(this, "name");
    g(this, "x");
    g(this, "y");
    g(this, "l");
    g(this, "w");
    g(this, "t");
    g(this, "q");
    g(this, "material");
    g(this, "grain");
    g(this, "orientationLock");
    g(this, "duplicate");
    g(this, "_trim");
    g(this, "trimmed");
    g(this, "preventAutoRotation");
    g(this, "preventGrainRotation");
    g(this, "units");
    g(this, "issues", []);
    g(this, "stock");
    g(this, "stockId");
    //used when object is compressed
    g(this, "cost");
    g(this, "offcut");
    g(this, "notes");
    //for user notes
    g(this, "customData");
    this.initRectangle(t);
  }
  validateRectangle(t) {
    xn(this) || ["x", "y", "l", "w", "t"].forEach((n) => {
      this.createIssues(et[n](t[n]));
    }), rs(this) && "q" in t && this.createIssues(et.q((t == null ? void 0 : t.q) ?? 0, t.autoAdd)), "q" in t && this.isShape() && !this.isGroup() && !this.isUserGroup() && this.createIssues(et.q((t == null ? void 0 : t.q) ?? 0)), "customData" in t && this.createIssues(et.customData((t == null ? void 0 : t.customData) ?? {}));
  }
  initRectangle(t) {
    var i, s, r, o, a;
    if (this.validateRectangle(t), this.issues.length) return;
    this.id = $(t.id) ? t.id.toString() : null, this.setParentID(), [
      {
        key: "x",
        default: 0,
        required: !1
      },
      {
        key: "y",
        default: 0,
        required: !1
      },
      {
        key: "l",
        default: null,
        required: !0
      },
      {
        key: "w",
        default: 1,
        //for linear
        required: !0
      },
      {
        key: "t",
        default: null,
        required: !1
      }
    ].forEach((l) => {
      let u = t[l.key];
      if (!$(u))
        return this[l.key] = l.default;
      typeof u == "string" && (u = J(u)), this[l.key] = u;
    }), $(t == null ? void 0 : t.q) ? typeof t.q == "string" ? this.q = parseInt(t.q) : this.q = t.q : this.q = 0, this.name = $(t.name) && ((i = t == null ? void 0 : t.name) != null && i.length) ? (s = Qc(us(t == null ? void 0 : t.name))) == null ? void 0 : s.toUpperCase() : null, !(t != null && t.preventAutoRotation) && !t.trimmed && this.w > this.l && ([this.l, this.w] = [this.w, this.l], this.grain && !(t != null && t.preventGrainRotation) && (this.grain = Ys(this.grain))), this.material = $(t.material) ? t.material.trim().toLowerCase() : null, this.duplicate = $(t == null ? void 0 : t.duplicate) ? t.duplicate : !1, $(t == null ? void 0 : t.stock) && (((o = (r = t.stock) == null ? void 0 : r.constructor) == null ? void 0 : o.name) === "Stock" ? this.stock = t.stock : this.stock = new ti(t.stock), this.stockId = this.stock.id), $(t == null ? void 0 : t.cost) ? typeof t.cost == "string" ? this.cost = parseFloat(t.cost) : typeof t.cost == "number" && (this.cost = t.cost) : this.cost = 0, this.grain = typeof t.grain < "u" && $(t == null ? void 0 : t.grain) ? t.grain.toLowerCase() : null;
    try {
      this.trim = t == null ? void 0 : t.trim;
    } catch (l) {
      if ((a = l == null ? void 0 : l.cause) != null && a.issues) this.issues.push(...l.cause.issues);
      else throw new Error("error when attempting to set trim");
    }
    this.trimmed = $(t == null ? void 0 : t.trimmed) ? t.trimmed : !1, this.offcut = $(t == null ? void 0 : t.offcut) ? t.offcut : !1, this.notes = typeof (t == null ? void 0 : t.notes) == "string" && t.notes.length ? t.notes.replace(/,/g, "").substring(0, 200) : "", this.customData = (t == null ? void 0 : t.customData) ?? {};
  }
  updateRectangle(t) {
    t.preventAutoRotation = !0, this.initRectangle(t);
  }
  set trim(t) {
    this._trim = {
      x1: 0,
      x2: 0,
      y1: 0,
      y2: 0
    }, $(t) && Object.keys(t).forEach((n) => {
      let i;
      if (typeof t[n] == "string") {
        const s = J(t[n]);
        isNaN(s) || s < 0 ? (this.issues.push(this.createIssue(`${t[n] ?? "N/A"} is not a valid value for trim: ${n}`)), i = 0) : i = s;
      } else
        i = t[n];
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
    return this.id ? this.parentID ? this.parentID : typeof this.id != "number" && this.id.includes(".") ? this.id.split(".")[0] : typeof this.id != "number" && !this.id.includes(".") ? null : this != null && this.id ? this.id.toString() : null : null;
  }
  createIssues(t) {
    t != null && t.length && t.forEach((n) => {
      this.issues.push(this.createIssue(n));
    });
  }
  createIssue(t) {
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
    const s = (r = this == null ? void 0 : this.name) != null && r.length ? this.name.toUpperCase() : this.parentID;
    return s ? `${t} [${n.charAt(0).toUpperCase() + n.slice(1)} ${s}]` : t;
  }
  getDimensions() {
    return {
      id: this.id,
      l: this.l,
      w: this.w
      // t: this.t
    };
  }
  getRotatedDimensions() {
    return ["l", "w"].includes(this.orientationLock) ? {
      l: this.orientationLock === "l" ? this.getLongSide() : this.getShortSide(),
      w: this.orientationLock === "l" ? this.getShortSide() : this.getLongSide(),
      orientationLock: this.orientationLock
    } : {
      l: this.getLongSide(),
      w: this.getShortSide(),
      orientationLock: this.orientationLock
    };
  }
  getCoordinates() {
    return {
      id: this.id,
      x: this.x,
      y: this.y
    };
  }
  getAspect() {
    return this.l > this.w ? this.w / this.l : this.l / this.w;
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
  getSide(t) {
    switch (t) {
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
  getTopPosition(t = !0, n = null) {
    var i;
    if (t && typeof ((i = this.stock) == null ? void 0 : i.getBladeWidth) > "u" && n === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return t ? this.y + this.w + ((this.stock.getBladeWidth() || n) ?? 0) : this.y + this.w;
  }
  getRightPosition(t = !0, n = null) {
    var i;
    if (t && typeof ((i = this.stock) == null ? void 0 : i.getBladeWidth) > "u" && n === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return t ? this.x + this.l + ((this.stock.getBladeWidth() || n) ?? 0) : this.x + this.l;
  }
  getBottomPosition(t = !0, n = null) {
    var i;
    if (t && typeof ((i = this.stock) == null ? void 0 : i.getBladeWidth) > "u" && n === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return t ? this.y - ((this.stock.getBladeWidth() || n) ?? 0) : this.y;
  }
  getLeftPosition(t = !0, n = null) {
    var i;
    if (t && typeof ((i = this.stock) == null ? void 0 : i.getBladeWidth) > "u" && n === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return t ? this.x - ((this.stock.getBladeWidth() || n) ?? 0) : this.x;
  }
  sharesSide(t, n = 0, i = null) {
    switch (i) {
      case "left":
        return t.x + t.l + n === this.x;
      case "right":
        return t.x === this.x + this.l + n;
      case "bottom":
        return t.y + t.w + n === this.y;
      case "top":
        return t.y === this.y + this.w + n;
    }
    return !1;
  }
  sameSide(t, n = null) {
    switch (n) {
      case "left":
        return t.x === this.x;
      case "right":
        return t.x + t.l === this.x + this.l;
      case "bottom":
        return t.y === this.y;
      case "top":
        return t.y + t.w === this.y + this.w;
    }
    return !1;
  }
  //considers if the shape can rotate
  getLongestDimension(t) {
    return this.orientationLock ? this[t] : this.getLongSide();
  }
  getArea() {
    return this.w * this.l;
  }
  getCoords(t, n = !1) {
    const i = new qe(this.x + this.l, this.y);
    i.corner = "bottomRight";
    const s = new qe(this.x, this.y + this.w);
    if (s.corner = "topLeft", (t == null ? void 0 : t.cutType) !== "efficiency" && !n)
      return [s, i];
    const r = new qe(this.x, this.y);
    r.corner = "bottomLeft";
    const o = new qe(this.x + this.l, this.y + this.w);
    return o.corner = "topRight", [r, s, o, i];
  }
  getCorners() {
    return {
      bottomLeft: new qe(this.x, this.y),
      topLeft: new qe(this.x, this.y + this.w),
      topRight: new qe(this.x + this.l, this.y + this.w),
      bottomRight: new qe(this.x + this.l, this.y)
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
  getTrimmedDimensions(t = !1) {
    let n = { l: this.l, w: this.w };
    return t && (n = this.getRotatedDimensions()), this.trimmed ? n : {
      l: n.l - (this.trim.x1 + this.trim.x2),
      w: n.w - (this.trim.y1 + this.trim.y2)
    };
  }
  //trim the rectangle
  trimDimensions() {
    var t, n, i, s;
    return this.trimmed ? !1 : (this.trim && Object.values(this.trim).filter((r) => !isNaN(parseFloat(String(r)))).length && ($(this.l) && (this.l -= ((t = this == null ? void 0 : this.trim) != null && t.x1 ? this.trim.x1 : 0) + ((n = this == null ? void 0 : this.trim) != null && n.x2 ? this.trim.x2 : 0), this.l <= 0 && (console.error(this), this.issues.push(this.createIssue("Applying trim has produced a negative length")))), $(this.w) && (this.w -= ((i = this == null ? void 0 : this.trim) != null && i.y1 ? this.trim.y1 : 0) + ((s = this == null ? void 0 : this.trim) != null && s.y2 ? this.trim.y2 : 0), this.w <= 0 && (console.error(this), this.issues.push(this.createIssue("Applying trim has produced a negative width"))))), this.trimmed = !0, !0);
  }
  /**
   * change the size of the rectangle back to the original size
   */
  removeTrim() {
    var t, n, i, s;
    if (this.trimmed) {
      if (this.l += (typeof ((t = this == null ? void 0 : this.trim) == null ? void 0 : t.x1) == "number" ? this.trim.x1 : 0) + (typeof ((n = this == null ? void 0 : this.trim) == null ? void 0 : n.x2) == "number" ? this.trim.x2 : 0), this.w += (typeof ((i = this == null ? void 0 : this.trim) == null ? void 0 : i.y1) == "number" ? this.trim.y1 : 0) + (typeof ((s = this == null ? void 0 : this.trim) == null ? void 0 : s.y2) == "number" ? this.trim.y2 : 0), this.l <= 0)
        throw new Error(`trimming this ${this.id} has produced a negative length`);
      if (this.w <= 0)
        throw new Error(`trimming this ${this.id} has produced a negative width`);
      this.trimmed = !1;
    }
  }
  getUntrimmedDimensions() {
    var i, s, r, o;
    if (!this.trimmed) return { l: this.l, w: this.w };
    const t = this.getLongSide(), n = this.getShortSide();
    return {
      l: t + (typeof ((i = this == null ? void 0 : this.trim) == null ? void 0 : i.x1) == "number" ? this.trim.x1 : 0) + (typeof ((s = this == null ? void 0 : this.trim) == null ? void 0 : s.x2) == "number" ? this.trim.x2 : 0),
      w: n + (typeof ((r = this == null ? void 0 : this.trim) == null ? void 0 : r.y1) == "number" ? this.trim.y1 : 0) + (typeof ((o = this == null ? void 0 : this.trim) == null ? void 0 : o.y2) == "number" ? this.trim.y2 : 0)
    };
  }
  /**
   * is this rectangle identical to another
   */
  /* isIdentical( rectangle: Rectangle ): boolean
  	{
  		if ( this.getClass() !== rectangle.getClass() ) return false;
  
  		if ( !isGroup( this ) )
  		{
  			if ( rectangle.getParentID() === this.getParentID() ) return true;
  		}
  		else
  		{
  			if ( rectangle.id === this.id ) return true;
  		}
  
  		if (
  			( ( this.t === rectangle.t &&
                  rectangle.w === this.w &&
                  rectangle.l === this.l ) ||
                  ( rectangle.l === this.w && rectangle.w === this.l ) ) &&
              rectangle.orientationLock === this.orientationLock
  		)
  		{
  			if (
  				this?.trim?.x1 === rectangle?.trim?.x1 &&
                  this?.trim?.x2 === rectangle?.trim?.x2 &&
                  this?.trim?.y1 === rectangle?.trim?.y1 &&
                  this?.trim?.y2 === rectangle?.trim?.y2
  			)
  			{
  				return true;
  			}
  		}
  
  		return false;
  	} */
  isIdentical(t) {
    if (this.constructor !== t.constructor) return !1;
    if (xn(this)) {
      if (t.id === this.id) return !0;
    } else if (t.parentID === this.parentID) return !0;
    if (this.t !== t.t || this.orientationLock !== t.orientationLock || !(this.w === t.w && this.l === t.l || this.w === t.l && this.l === t.w)) return !1;
    const i = this.trim, s = t.trim;
    return !i || !s ? i === s : i.x1 === s.x1 && i.x2 === s.x2 && i.y1 === s.y1 && i.y2 === s.y2;
  }
  /**
   * is this rectangle a square
   */
  isSquare() {
    return this.l === this.w;
  }
  getDistancesToContainerEdges(t) {
    return [
      this.x - t.x,
      t.l - (this.x + this.l),
      t.w - (this.y + this.w),
      this.y - t.y
    ];
  }
  isInsideStock(t) {
    return !(this.x + this.l > t.l || this.y + this.w > t.w || this.x < 0 || this.y < 0);
  }
  //create a rectangle used to detect proximity to other shapes
  createProximityRectangle(t) {
    if (!t) return !1;
    let n = this.x - t, i = this.y - t, s = this.l + t * 2, r = this.w + t * 2;
    return n < 0 && (s += n, n = 0), i < 0 && (r += i, i = 0), s = Math.max(0, s), r = Math.max(0, r), new ur({
      name: "proximity",
      x: n,
      y: i,
      l: s,
      w: r,
      preventAutoRotation: !0
    });
  }
  isShape() {
    return En(this);
  }
  isSegment() {
    return MT(this);
  }
  isStock() {
    return rs(this);
  }
  isGroup() {
    return xn(this);
  }
  isUserGroup() {
    return ga(this);
  }
}
class Bu extends ur {
  //used by evo
  constructor(n) {
    super(n);
    g(this, "type");
    g(this, "saw");
    g(this, "algoBenchmark");
    switch (["sheet", "linear", "roll", null, void 0, ""].includes(n.type) ? this.type = n.type : this.issues.push(`Container type ${n.type ?? "N/A"} is not valid`), this.type || (this.type = "sheet"), this.setSaw(n), this.cutType) {
      case "beam":
        (!$(this.t) || this.t <= 0) && this.issues.push(this.createIssue("Stock for beam saws must have a thickness set"));
        break;
    }
  }
  setSaw(n) {
    var i, s, r, o;
    if ($(n) || (this.saw = new zn(null)), $(n == null ? void 0 : n.saw)) {
      if (!((s = n == null ? void 0 : n.saw) != null && s.cutType)) {
        const { cutType: a, cutPreference: l } = Vl(n.saw.cutPreference);
        n.saw.cutType = a, n.saw.cutPreference = l;
      }
    } else {
      n.saw = {};
      const { cutType: a, cutPreference: l } = Vl(n.cutPreference);
      n.saw.cutType = a, n.saw.cutPreference = l, $(n == null ? void 0 : n.bladeWidth) && (n.saw.bladeWidth = n.bladeWidth), $((i = n == null ? void 0 : n.blade) == null ? void 0 : i.width) && (n.saw.bladeWidth = n.blade.width), $(n == null ? void 0 : n.efficiencyOptions) && (n.saw.efficiencyOptions = n.efficiencyOptions), $(n == null ? void 0 : n.guillotineOptions) && (n.saw.guillotineOptions = n.guillotineOptions), $(n == null ? void 0 : n.stackHeight) && (n.saw.stackHeight = n.stackHeight);
    }
    try {
      $(n == null ? void 0 : n.saw) && (LT(n.saw) ? this.saw = n.saw : this.saw = new zn(n.saw, this.type)), (o = (r = this.saw) == null ? void 0 : r.issues) != null && o.length && this.issues.push(...this.saw.issues);
    } catch (a) {
      throw new Error("error creating saw", { cause: a });
    }
  }
  get cutType() {
    var n, i, s, r;
    return $((n = this == null ? void 0 : this.saw) == null ? void 0 : n.cutType) ? this.saw.cutType : (i = this.stock) != null && i.isStock() ? null : ((r = (s = this == null ? void 0 : this.stock) == null ? void 0 : s.saw) == null ? void 0 : r.cutType) ?? null;
  }
  get cutPreference() {
    var n, i, s, r;
    return $((n = this.saw) == null ? void 0 : n.cutPreference) ? this.saw.cutPreference : (i = this.stock) != null && i.isStock() ? null : ((r = (s = this.stock) == null ? void 0 : s.saw) == null ? void 0 : r.cutPreference) ?? null;
  }
  get guillotineOptions() {
    var n, i, s, r;
    return $((n = this.saw) == null ? void 0 : n.guillotineOptions) ? this.saw.guillotineOptions : (i = this.stock) != null && i.isStock() ? null : ((r = (s = this == null ? void 0 : this.stock) == null ? void 0 : s.saw) == null ? void 0 : r.guillotineOptions) ?? null;
  }
  get efficiencyOptions() {
    var n, i, s, r;
    return $((n = this.saw) == null ? void 0 : n.efficiencyOptions) ? this.saw.efficiencyOptions : (i = this.stock) != null && i.isStock() ? null : ((r = (s = this == null ? void 0 : this.stock) == null ? void 0 : s.saw) == null ? void 0 : r.efficiencyOptions) ?? null;
  }
  get primaryCompression() {
    var n, i;
    return this.cutType === "efficiency" ? (i = (n = this.saw) == null ? void 0 : n.efficiencyOptions) != null && i.primaryCompression ? this.efficiencyOptions.primaryCompression : "y" : null;
  }
  getHalfBladeWidth() {
    const n = this.getBladeWidth();
    return n ? n / 2 : 0;
  }
  getBladeWidth() {
    var i, s, r;
    const n = (((i = this == null ? void 0 : this.saw) == null ? void 0 : i.bladeWidth) || ((r = (s = this == null ? void 0 : this.stock) == null ? void 0 : s.saw) == null ? void 0 : r.bladeWidth)) ?? 0;
    return isNaN(n) ? 0 : n;
  }
  getStock() {
    return rs(this) ? this : this != null && this.stock ? this.stock : null;
  }
}
function Vl(e) {
  let t, n;
  switch (e) {
    case "l":
    case "length":
      t = "guillotine", n = "l";
      break;
    case "w":
    case "width":
      t = "guillotine", n = "w";
      break;
    case "flex":
      t = "guillotine", n = "flex";
      break;
    case "efficiency":
      t = "efficiency", n = null;
      break;
    case "beam":
      t = "beam", n = "l";
      break;
    default:
      t = null, n = null;
      break;
  }
  return {
    cutPreference: n,
    cutType: t
  };
}
class zn {
  constructor(t, n = "sheet") {
    g(this, "issues");
    g(this, "bladeWidth");
    g(this, "cutType");
    g(this, "cutPreference");
    g(this, "guillotineOptions");
    g(this, "efficiencyOptions");
    g(this, "stackHeight");
    g(this, "stockType");
    g(this, "options");
    switch (t = xi(t), this.options = ks(
      {},
      t == null ? void 0 : t.options,
      {
        prioritiseLargerParts: !1,
        stockSelection: "efficiency",
        minSpacing: 0,
        minSpacingDimension: {}
      }
    ), this.stackHeight = (t == null ? void 0 : t.stackHeight) ?? null, this.stockType = (t == null ? void 0 : t.stockType) ?? n, this.issues = [], ["sheet", "linear", "roll"].includes(this.stockType) || this.issues.push(`Saw stock type: ${this.stockType} not valid`), this.stockType || (this.stockType = "sheet"), this.cutType = t == null ? void 0 : t.cutType, this.stockType) {
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
        ["none", null, void 0].includes(this.cutType) || this.issues.push(`Saw cut type: ${this.cutType} not valid for stock type: ${this.stockType}`);
        break;
    }
    switch (this.cutPreference = t == null ? void 0 : t.cutPreference, this.cutType) {
      case "guillotine":
        ["l", "w", "flex"].includes(this.cutPreference) || this.issues.push(`Saw cut preference: ${this.cutPreference} not valid for cut type: ${this.cutType}`), this.cutType === "guillotine" && this.cutPreference === "l" && this.stockType === "roll" && this.issues.push(`Cut preference: ${this.cutPreference} not valid for cut type: ${this.cutType} and stock type: ${this.stockType}`), this.options.minSpacing = 0;
        break;
      case "beam":
        ["l", null, void 0].includes(this.cutPreference) || this.issues.push(`Saw cut preference: ${this.cutPreference} not valid for cut type: ${this.cutType}`), this.options.minSpacing = 0;
        break;
      default:
        ["none", null, void 0].includes(this.cutPreference) || this.issues.push(`Saw cut preference: ${this.cutPreference} not valid for cut type: ${this.cutType}`);
        break;
    }
    switch ($(t == null ? void 0 : t.bladeWidth) ? typeof t.bladeWidth == "string" ? this.bladeWidth = J(t.bladeWidth) : this.bladeWidth = t.bladeWidth : this.bladeWidth = 0, (isNaN(this.bladeWidth) || this.bladeWidth < 0) && (this.issues.push(`Blade width: ${this.bladeWidth ?? "N/A"} is not valid`), this.bladeWidth = 0), this.stockType) {
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
        this.efficiencyOptions = ks(
          {},
          t == null ? void 0 : t.efficiencyOptions,
          { primaryCompression: "y" }
        );
        break;
      case "guillotine":
        this.guillotineOptions = ks(
          {},
          t == null ? void 0 : t.guillotineOptions,
          { strategy: "efficiency", maxPhase: null }
        );
        break;
      case "beam":
        this.guillotineOptions = ks(
          {},
          t == null ? void 0 : t.guillotineOptions,
          { strategy: "efficiency", maxPhase: null }
        ), this.cutPreference = "l", [null, void 0].includes(this.stackHeight) && this.issues.push("Beam saws require a stack height to be set");
        break;
    }
  }
  clone() {
    const t = structuredClone(this);
    return new zn(t);
  }
}
class ti extends Bu {
  constructor(n) {
    n = xi(n), n.preventAutoRotation = (n == null ? void 0 : n.type) === "roll", n.autoAdd && !n.q && (n.q = 1);
    super(n);
    g(this, "_id");
    //used for mongo
    g(this, "autoAdd");
    g(this, "allowExactFitShapes");
    g(this, "analysis");
    g(this, "tidy");
    g(this, "used");
    g(this, "stack");
    g(this, "winningStrategy");
    //used for reporting
    g(this, "unusable");
    //used by stock matching
    g(this, "duplicatePattern");
    g(this, "score");
    g(this, "shapes");
    g(this, "rootSegment");
    delete this.stock, this._id = n == null ? void 0 : n._id, this.autoAdd = $(n == null ? void 0 : n.autoAdd) ? n.autoAdd : !1, this.allowExactFitShapes = $(n == null ? void 0 : n.allowExactFitShapes) ? n.allowExactFitShapes : !1, this.analysis = $(n.analysis) ? n.analysis : null, this.tidy = $(n == null ? void 0 : n.tidy) ? n.tidy : !1, this.algoBenchmark = null, this.used = $(n == null ? void 0 : n.used) ? n.used : !1, this.stack = $(n == null ? void 0 : n.stack) ? n.stack : !1, this.duplicatePattern = (n == null ? void 0 : n.duplicatePattern) ?? null, this.initStock(n);
  }
  initStock(n) {
    switch (this.type) {
      case "linear":
      case "roll":
        this.trim.y1 = 0, this.trim.y2 = 0, this.grain = null;
        break;
    }
    this.validateStock(n), this.issues.length;
  }
  validateStock(n) {
    ["grain"].forEach((i) => {
      this.createIssues(et[i](n[i]));
    }), this.createIssues(et.trim(this));
  }
  /**
   * compress for saving / transfer
   */
  compress() {
    var n;
    delete this.tidy, delete this.score, delete this.rootSegment, delete this.shapes, this == null || delete this.algoBenchmark, this.stack = typeof this.stack == "number" || this.stack === !1 ? this.stack : (n = this.stack) == null ? void 0 : n.id, !this.trim.x1 && !this.trim.x2 && !this.trim.y1 && !this.trim.y2 && (this.trim = null);
  }
  resetStrategies() {
    this.algoBenchmark = null;
  }
  isIdentical(n) {
    let i = !1, s = !1, r = !1, o = !1;
    if (this.material === n.material && (i = !0), this.t === n.t && (s = !0), this.l === n.l && (r = !0), this.w === n.w && (o = !0), i && s && r && o) return !0;
  }
  clone(n = null) {
    const i = this.id.split(".");
    n ? i.pop() : (n = parseInt(i.pop()), n++), i.push(n.toString());
    const s = i.join("."), r = structuredClone(this);
    return r.id = s, r.used = !1, r.duplicate = !0, r.stack = !1, r.saw = this.saw, new ti(r);
  }
}
class TT extends ur {
  constructor(n) {
    super(n);
    g(this, "addToInventory");
    //for front end selection
    g(this, "added");
    //for adding to inputStock
    g(this, "placementOrder");
    g(this, "flex");
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
function AT({
  offcuts: e,
  stockList: t,
  preventAutoRotation: n = !0
}) {
  return !e || !(e != null && e.length) ? [] : e.map((i) => {
    const s = t.find((o) => {
      var a;
      return o.id === (((a = i == null ? void 0 : i.stock) == null ? void 0 : a.id) ?? (i == null ? void 0 : i.stockId));
    });
    return i.stock = s, n && (i.preventAutoRotation = !0), new TT(i);
  });
}
class Gn extends ur {
  constructor(n) {
    n = xi(n);
    super(n);
    g(this, "added");
    g(this, "guillotineData");
    g(this, "_banding");
    g(this, "_bandingType");
    g(this, "stockLock");
    g(this, "orientationModel");
    g(this, "score");
    g(this, "bestScore");
    g(this, "placementOrder");
    //groups
    g(this, "groupPlacementOrder");
    g(this, "group");
    g(this, "groupID");
    g(this, "inGroup");
    //is the shape currently part of at least one group
    g(this, "inUserGroup");
    //is the shape currently part of a user group`
    g(this, "addedAsGroup");
    g(this, "isFirstShape");
    g(this, "firstShapeSampleRotations", []);
    //used for setting the rotation of the first shape (guillotine)
    g(this, "index");
    //used for ptx
    g(this, "patternMatch");
    //used for stack detection
    g(this, "stockMatch");
    g(this, "machining");
    g(this, "weighting");
    g(this, "minSpacing");
    g(this, "priorityStock");
    this.initShape(n);
  }
  initGuillotineData(n) {
    this.guillotineData = ks(
      {},
      n == null ? void 0 : n.guillotineData,
      {
        stripShape: null,
        direction: null,
        myPrimaryStripShape: null,
        mySecondaryStripShape: null,
        phase: null,
        stripShapeBatches: {
          subsetUsed: !1,
          groups: {}
        }
      }
    );
  }
  initShape(n) {
    var i;
    if (this.validateShape(n), this.issues.length) throw new Error(this.issues.join(`
`));
    this.added = $(n == null ? void 0 : n.added) ? n.added : !1, this.initGuillotineData(n), n.orientationLock = (i = n == null ? void 0 : n.orientationLock) == null ? void 0 : i.toLowerCase(), (n == null ? void 0 : n.orientationLock) === " " && (n.orientationLock = ""), this.orientationLock = $(n == null ? void 0 : n.orientationLock) && this.l !== this.w ? n.orientationLock : null, this.banding = n == null ? void 0 : n.banding, this.bandingType = n == null ? void 0 : n.bandingType, $(n == null ? void 0 : n.stockLock) ? Array.isArray(n == null ? void 0 : n.stockLock) && (this.stockLock = n.stockLock.map((s) => s.toString())) : this.stockLock = [], this.inGroup = $(n == null ? void 0 : n.inGroup) ? n.inGroup : !1, this.inUserGroup = $(n == null ? void 0 : n.inUserGroup) ? n.inUserGroup : !1, this.groupID = $(n == null ? void 0 : n.groupID) ? n.groupID : null, this.addedAsGroup = $(n == null ? void 0 : n.addedAsGroup) ? n.addedAsGroup : !1, this.score = $(n == null ? void 0 : n.score) ? n.score : null, this.bestScore = $(n == null ? void 0 : n.bestScore) ? n.bestScore : {
      x: 0,
      y: 0,
      rot: null,
      total: null,
      group: null
    }, this.placementOrder = $(n == null ? void 0 : n.placementOrder) ? n.placementOrder : null, this.groupPlacementOrder = $(n == null ? void 0 : n.groupPlacementOrder) ? n.groupPlacementOrder : null, this.weighting = {}, this.minSpacing = (n == null ? void 0 : n.minSpacing) ?? 0, this.priorityStock = (n == null ? void 0 : n.priorityStock) ?? [], this.machining = $(n == null ? void 0 : n.machining) ? new Dm(n.machining) : null;
  }
  getCopyNumber() {
    return parseInt(this.id.split(".").pop());
  }
  getMinSpacing(n, i = !1) {
    var o, a;
    let s = (this == null ? void 0 : this.minSpacing) || ((a = (o = n.saw) == null ? void 0 : o.options) == null ? void 0 : a.minSpacing) || 0;
    const r = n.getBladeWidth();
    return r > s && (s = r), i && (s -= r), s < 0 && (s = 0), s;
  }
  validateShape(n) {
    ["orientationLock", "banding"].forEach((i) => {
      this.createIssues(et[i](n[i]));
    }), this.machining && this.machining.validateEverything(this);
  }
  //individual shape weighting
  calculateWeighting() {
  }
  update(n) {
    n = xi(n), this.initShape(n), this.updateRectangle(n);
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
    }, $(n) && Object.keys(n).forEach((i) => this._banding[i] = $(n == null ? void 0 : n[i]) ? n[i] : !1);
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
    }, !!$(n)) {
      Object.keys(n).forEach((i) => this._bandingType[i] = $(n[i]) ? Qc(us(n[i])) : "");
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
    var n, i, s, r, o, a, l, u, c, f, h, d, p;
    delete this.group, (n = this == null ? void 0 : this.guillotineData) == null || delete n.stripShapeBatches, this.stockId = (i = this == null ? void 0 : this.stock) == null ? void 0 : i.id, delete this.stock, delete this.score, delete this.bestScore, !((s = this._banding) != null && s.x1) && !((r = this._banding) != null && r.x2) && !((o = this._banding) != null && o.y1) && !((a = this._banding) != null && a.y2) && (this._banding = null), !((l = this._bandingType) != null && l.x1) && !((u = this._bandingType) != null && u.x2) && !((c = this._bandingType) != null && c.y1) && !((f = this._bandingType) != null && f.y2) && (this._bandingType = null), (h = this.guillotineData) == null || delete h.myPrimaryStripShape, (d = this.guillotineData) == null || delete d.mySecondaryStripShape, (p = this.guillotineData) == null || delete p.myParentStripShape, delete this.score, delete this.inGroup, delete this.groupID, delete this.addedAsGroup;
  }
  isExactFit(n) {
    return this.orientationLock === "w" && this.w === n.w || this.orientationLock === "l" && this.l === n.l || !this.orientationLock && this.w === n.w && this.l === n.l;
  }
  addToStock(n) {
    this.stock = n, this.stockId = n.id, this.added = !0, this.inGroup = !1, n.used = !0, this.grain = n.grain, n != null && n.grain && this.rot && (this.grain = Ys(n.grain));
  }
  setBestScore(n, i = null) {
    const s = {
      x: n.x,
      y: n.y,
      rot: n.rot,
      total: n.score.total,
      score: n.score,
      group: n.group,
      weighting: null,
      point: i
    };
    this.bestScore = s;
  }
  removeFromStock() {
    this.placementOrder = null, this.stock = null, this.stockId = null, this.added = !1, this.addedAsGroup = !1;
  }
  resetPosition() {
    this.x = 0, this.y = 0, this.placementOrder = null, this.resetGuillotineData(!0);
  }
  resetScore() {
    this.score = null, this.resetGuillotineData(!0);
  }
  resetBestScore() {
    const n = {
      x: 0,
      y: 0,
      rot: null,
      total: null,
      group: null
    };
    this.bestScore = n, this.resetGuillotineData(!0);
  }
  resetBothScores() {
    this.resetBestScore(), this.resetScore(), this.placementOrder = null;
  }
  reset(n = !1, i = !0) {
    this.removeFromStock(), n || this.resetBothScores(), this.resetPosition(), this.setRotation(0), this.resetGuillotineData(i), this.placementOrder = null, this == null || delete this.isFirstShape, this.patternMatch = !1, this.isFirstShape = !1, this.group && this.group.destroy(), this.groupID = null, this.group = null, this.inGroup = !1, this.groupPlacementOrder = null, this.grain = null;
  }
  resetGuillotineData(n = !1) {
    var s, r;
    const i = {
      firstShape: !1,
      currentPhase: null,
      myStripDirection: null,
      myPrimaryStripShape: null,
      mySecondaryStripShape: null,
      stripShapeBatches: {
        subsetUsed: !1,
        groups: {}
      }
    };
    n && (i.stripShapeBatches.groups = (r = (s = this.guillotineData) == null ? void 0 : s.stripShapeBatches) == null ? void 0 : r.groups), this.guillotineData = i;
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
    for (let s = 0; s <= 1; s++)
      this.canRotate(s, n) && this.willItFit(n, s) && i.push(s);
    return i;
  }
  /**
   * checks if a shape can rotate
   * checks for fit and grain
   * does not change the shape's rotation during the checks
   * @returns false if cannot rotate or can rotate but won't fit
   */
  canRotate(n = null, i = null) {
    if (!$(n))
      throw new Error("no rotation provided to canRotate");
    if (n === !0 && (n = 1), n === !1 && (n = 0), this.isSquare() && n || i && !this.willItFit(i, n))
      return !1;
    const s = this.getNecessaryOrientation(i);
    return !(s === "l" && n === 1 || s === "w" && n === 0);
  }
  /**
   * can a shape rotate to produce the specified dimensions
   * @todo tests
   */
  canRotateToDimension(n, i, s = null) {
    if (!i) throw new Error("requiredSide not supplied to canRotateToDimension");
    if (this.l !== n && this.w !== n) return !1;
    if (this.l === this.w) return !0;
    const r = this.getLongSide(), o = this.getShortSide();
    if (s) {
      if (i === "l") {
        if (r === n && this.canRotate(0, s) || o === n && this.canRotate(1, s)) return !0;
      } else if (i === "w" && (o === n && this.canRotate(0, s) || r === n && this.canRotate(1, s)))
        return !0;
    } else {
      if (this.orientationLock === "l")
        return i === "l" && n === r;
      if (this.orientationLock === "w")
        return i === "l" && n === o;
    }
    return !1;
  }
  rotateToDimension(n, i, s) {
    if (!i) throw new Error("requiredSide not supplied to rotateToDimension");
    if (this.l !== n && this.w !== n) return !1;
    if (this.l === this.w) return !0;
    const r = this.getLongSide(), o = this.getShortSide();
    if (i === "l") {
      if (r === n && this.canRotate(0, s)) return this.setRotation(0);
      if (o === n && this.canRotate(1, s)) return this.setRotation(1);
    } else if (i === "w") {
      if (o === n && this.canRotate(0, s)) return this.setRotation(0);
      if (r === n && this.canRotate(1, s)) return this.setRotation(1);
    }
    return !1;
  }
  //get the orientation lock catering for container grain
  convertShapeGrainToOrientationLock(n) {
    if (!n) throw new Error("container not supplied to convertShapeGrainToOrientationLock");
    if (!zl(n)) throw new Error("container is not a container");
    if (xn(this)) return this.orientationLock;
    if (!$(this.orientationLock)) return null;
    const i = n.getStock();
    return $(i.grain) ? this.orientationLock === i.grain ? "l" : "w" : this.orientationLock;
  }
  /**
   * get the orientation lock catering for container grain
   */
  getNecessaryOrientation(n) {
    if (xn(this)) return this.orientationLock;
    if (!$(this.orientationLock)) return null;
    if (zl(n))
      return this.convertShapeGrainToOrientationLock(n);
    if (xn(this) || ga(this))
      return $(this.orientationLock) ? this.orientationLock : null;
  }
  /**
   * get the required grain rotation
   * checks for stock grain and part orientationLock
   * does not check for fit
   */
  getGrainRotation(n) {
    if (xn(this)) return this.rot;
    if (!$(this.orientationLock)) return null;
    const i = n.getStock();
    return !this.orientationLock || !$(i == null ? void 0 : i.grain) ? null : this.isGroup() ? this.orientationLock === "l" ? 0 : 1 : this.orientationLock === (i == null ? void 0 : i.grain) ? 0 : 1;
  }
  /**
   * rotates the shape if allowed
   * checks for fit and grain
   * @returns false if cannot rotate or can rotate but won't fit
   */
  rotate(n = null, i = null) {
    return n === null && (n = this.rot === 0 ? 1 : 0), this.canRotate(n, i) ? (this.rot === n || this.swapDimensions(), !0) : !1;
  }
  swapDimensions() {
    [this.l, this.w] = [this.w, this.l];
  }
  forceRotate(n) {
    return n === null && (n = this.rot === 0 ? 1 : 0), this.rot === n || this.swapDimensions(), !0;
  }
  /**
   * rotates the shape if allowed
   * checks for fit and grain
   * @returns false if cannot rotate or can rotate but won't fit
   */
  setRotation(n = null, i = null) {
    return n ? n = 1 : n = 0, i && n && !this.willItFit(i, n) ? !1 : this.rotate(n, i);
  }
  /**
   * rotates the shape if allowed
   * checks for fit and grain
   * @returns false if cannot rotate or can rotate but won't fit
   */
  setRotationToOrientationLock(n) {
    if (!n)
      throw new Error("container not supplied to setRotationToOrientationLock");
    const i = this.getNecessaryOrientation(n);
    if (i === "l") return this.setRotation(0);
    if (i === "w") return this.setRotation(1);
  }
  setRotationToOrientationLockWithoutContainer() {
    if (this.orientationLock === "l") return this.setRotation(0);
    if (this.orientationLock === "w") return this.setRotation(1);
  }
  getBandingLength(n) {
    if (n === "x1" || n === "x2") return this.getShortSide();
    if (n === "y1" || n === "y2") return this.getLongSide();
  }
  getPerimeterCutVectors() {
    var s;
    const n = (s = this.stock) != null && s.isStock() ? this.stock.getBladeWidth() / 2 : null;
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
  /* getTrimmedDimensions()
  	{
  		if ( this.trimmed )
  			return {
  				l: this.l,
  				w: this.w
  			};
  
  		return {
  			l: this.l - this.trim.x1 - this.trim.x2,
  			w: this.w - this.trim.y1 - this.trim.y2
  		};
  	} */
  /**
   * create cuts around the perimeter of a shape
   * @param {Stock} stock
   * @returns {Array} cuts
   */
  createPerimeterCuts(n = null) {
    let i = [];
    if (n = n || this.stock, !n) throw new Error("stock is required to create a cut");
    return this.getPerimeterCutVectors().forEach((r) => {
      var o;
      return i.push(new ia({
        stock: (o = this.stock) != null && o.isStock() ? this.stock : n,
        x1: r.x1,
        x2: r.x2,
        y1: r.y1,
        y2: r.y2,
        type: r.type
      }));
    }), i = i.filter((r) => r.isInsideStock()), i;
  }
  createOffset(n) {
    if (!this.stock) throw new Error("createOffset - stock not defined");
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
    return Cy(
      n,
      this,
      i
    );
  }
  clone(n = null) {
    const i = this.id.split(".");
    n ? i.pop() : (n = i.pop(), n++), i.push(n);
    const s = i.join("."), r = structuredClone(this);
    return r.id = s, r.added = !1, r.duplicate = !0, delete r.score, delete r.bestScore, delete r.stock, delete r.placementOrder, delete r.inGroup, delete r.addedAsGroup, delete r.groupID, delete r.isFirstShape, new Gn(r);
  }
  isTooCloseToEdges(n) {
    var s, r;
    const i = ((r = (s = n.saw) == null ? void 0 : s.options) == null ? void 0 : r.minSpacing) || this.minSpacing;
    return i ? this.getDistancesToContainerEdges(n).some((o) => o > 0 && o <= i) : !1;
  }
  validateStripShapeBatches() {
    const n = Object.values(this.guillotineData.stripShapeBatches.groups);
    for (let i = 0; i < n.length; i++) {
      const s = n[i];
      if (s.id !== this.id)
        throw new Error(`strip shape group id does not match shape id ${this.id} ${s.id} ${i}`);
      if (![this.l, this.w].includes(s.dimension))
        throw new Error(`strip shape group dimension does not match shape dimensions ${this.id} ${s.id} ${i} ${this.l} ${this.w} ${s.dimension}`);
    }
  }
  getStripShapeBatchInfo(n) {
    var i;
    return typeof n != "number" || !((i = this == null ? void 0 : this.guillotineData) != null && i.stripShapeBatches) || !this.guillotineData.stripShapeBatches.groups || !(n in this.guillotineData.stripShapeBatches.groups) ? !1 : this.guillotineData.stripShapeBatches.groups[n];
  }
}
class Ay extends Bu {
  constructor(n) {
    var t = (...rM) => (super(...rM), g(this, "shapes"), g(this, "cuts"), g(this, "phase"), g(this, "merged"), g(this, "children"), g(this, "siblings"), //used by vis only
    g(this, "parent"), g(this, "segmentType"), g(this, "completed"), //used by vis only
    g(this, "rowSegment"), //used by cuts
    g(this, "placementOrder"), g(this, "hasBeamTrim"), g(this, "cutDirection"), this);
    if (n) {
      if (n.preventAutoRotation = !0, t(n), this.validateSegment(n), this.issues.length)
        throw new Error(`Segment validation failed - ${this.issues.join(" ")}`);
      delete this.trim, delete this.trimmed, this.shapes = $(n == null ? void 0 : n.shapes) ? n.shapes : [], this.cuts = [], this.phase = $(n == null ? void 0 : n.phase) ? n.phase : null, this.merged = $(n == null ? void 0 : n.merged) ? n.merged : !1, this.parent = $(n == null ? void 0 : n.parent) ? n.parent : null, this.children = $(n == null ? void 0 : n.children) ? n.children : [], this.siblings = $(n == null ? void 0 : n.siblings) ? n.siblings : [], this.offcut = $(n == null ? void 0 : n.offcut) ? n.offcut : !1, this.segmentType = $(n == null ? void 0 : n.segmentType) ? n.segmentType : null, this.placementOrder = null, this.cutDirection = $(n == null ? void 0 : n.cutDirection) ? n.cutDirection : "l", this.hasBeamTrim = $(n == null ? void 0 : n.hasBeamTrim) ? n.hasBeamTrim : !1;
    }
  }
  validateSegment(n) {
    var i, s;
    (ke.lessThanOrEqualTo(n.w, 0) || ke.lessThanOrEqualTo(n.l, 0)) && this.issues.push(`Zero / negative dimension - l: ${n.l}, w: ${n.w}.`), (ke.lessThan(n.x, 0) || ke.lessThan(n.y, 0)) && this.issues.push(`Negative position - x: ${n == null ? void 0 : n.x}, y: ${n == null ? void 0 : n.y}.`), n != null && n.stock && (ke.greaterThan(n.x + n.l, n.stock.l) || ke.greaterThan(n.y + n.w, n.stock.w)) && this.issues.push(`Outside of stock ${n.stock.id} - x: ${n.x}, y: ${n.y}, l: ${n.l}, w: ${n.w}, sl: ${(i = n == null ? void 0 : n.stock) == null ? void 0 : i.l}, sw: ${(s = n == null ? void 0 : n.stock) == null ? void 0 : s.w}.`);
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
    })), delete this.shapes, delete this.siblings, delete this.parent, this.stockId = (this == null ? void 0 : this.stockId) ?? ((n = this == null ? void 0 : this.stock) == null ? void 0 : n.id), delete this.stock, delete this.trim, this.algoBenchmark = null;
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
  reset() {
    this.children = [], this.siblings = [], this.parent = null, this.cuts = [], this.phase = null;
  }
}
class Oi extends Gn {
  //used for sorting
  constructor(n) {
    var i;
    if (n = xi(n), !((i = n == null ? void 0 : n.shapes) != null && i.length))
      throw new Error("attempting to create a group with no shapes");
    n.preventAutoRotation = !0;
    super(n);
    g(this, "shapes");
    g(this, "joinDimension");
    g(this, "direction");
    g(this, "container");
    g(this, "outOfBounds");
    g(this, "collision");
    g(this, "counter", 0);
    g(this, "type");
    g(this, "efficiency");
    if (this.q = 1, (n == null ? void 0 : n.type) !== "user" && n.joinDimension !== this.l && n.joinDimension !== this.w)
      throw new Error(`joinDimension must be either the width or length of the group [${n.joinDimension}, ${this.l}, ${this.w}]`);
    this.shapes = n.shapes, this.joinDimension = n.joinDimension, this.direction = n.direction, this.container = n.container, this.type = (n == null ? void 0 : n.type) ?? "auto", this.initGroup();
  }
  initGroup() {
    var n;
    (n = this == null ? void 0 : this.shapes) != null && n.length && (this.shapes.forEach((i) => i.inGroup = !0), this.w > this.l ? this.orientationLock = "w" : this.orientationLock = "l", this.container && (this.efficiency = this[this.direction] / this.container[this.direction]));
  }
  //update the shape spacing and overall group dimensions to account for min spacing
  updateShapeSpacing(n) {
    const i = this.shapes.slice(0, -1).reduce((r, o) => r + o.getMinSpacing(n), 0), s = this.shapes.reduce((r, o) => r + o[this.direction], 0);
    this[this.direction] = s + i, this.w > this.l ? this.orientationLock = "w" : this.orientationLock = "l", this.container && (this.efficiency = this[this.direction] / this.container[this.direction]);
  }
  //get the area of the shapes (does not include blade width) - overwrites the rectangle method
  getArea() {
    return this.shapes.reduce((n, i) => n + i.getArea(), 0);
  }
  destroy() {
    this.shapes.forEach((n) => {
      n.inGroup = !1, n.addedAsGroup = !1, n == null || delete n.group, n == null || delete n.groupID, n == null || delete n.groupPlacementOrder;
    });
  }
  shouldRotateShape(n) {
    return this.direction === "l" && n.l === this.joinDimension && n.w !== this.joinDimension || this.direction === "w" && n.w === this.joinDimension && n.l !== this.joinDimension;
  }
  /**
   * orientate all the shapes correctly to fit in the group
   */
  orientateShapes(n) {
    this.shapes.forEach((i) => {
      this.shouldRotateShape(i) && i.rotate(null, n);
    });
  }
  /**
   * sort the shapes by size
   */
  sortShapes() {
    this.shapes.sort((n, i) => n[this.direction] !== i[this.direction] ? i[this.direction] - n[this.direction] : n.id.localeCompare(
      i.id,
      void 0,
      { numeric: !0 }
    ));
  }
  /**
   * place the group shapes on the stock
   */
  placeShapes(n) {
    if (!n) throw new Error("placeShapes requires stock");
    this.added = !0, this.orientateShapes(n), this.type !== "user" && this.sortShapes();
    for (let i = 0; i < this.shapes.length; i++) {
      const s = this.shapes[i];
      i === 0 && this.x === 0 && this.y === 0 && (s.isFirstShape = !0), s.addedAsGroup = this.id, s.inGroup = !1, s.score = this.score;
      const r = s.guillotineData.stripShapeBatches;
      s.guillotineData = structuredClone(this.guillotineData), s.guillotineData.stripShapeBatches = r, s.bestScore = this.bestScore, typeof this.placementOrder == "number" && (s.groupPlacementOrder = i, s.placementOrder = this.placementOrder + i / 1e6);
    }
    this.setShapeCoordinates(!0, n);
  }
  /**
   * get shape coordinates if the shapes have not yet been placed
   */
  setShapeCoordinates(n = !0, i) {
    if (!i) throw new Error("setShapeCoordinates requires stock");
    vT(
      this.shapes,
      i,
      this,
      this.direction,
      n,
      this.type !== "user"
    );
  }
  //this is for groups which are created once and reused between stock e.g. user groups
  orientateCorrectly(n) {
    this.orientateShapes(n), this.setRotationToOrientationLock(n);
  }
  clone(n = []) {
    const s = `g${parseInt(this.id.split("g")[1]) + 1}`, r = structuredClone(this);
    return r.shapes = n, r.id = s, new Oi(r);
  }
}
function OT(e, t, n, i) {
  return t.filter((s, r) => (e.stockMatch.material[r] = null, e.stockMatch.thickness[r] = null, e.stockMatch.width[r] = null, e.stockMatch.fit[r] = null, (En(e) || ga(e)) && (Cy(s, e) ? e.stockMatch.fit[r] = !0 : e.stockMatch.fit[r] = !1), n ? s.material === e.material ? e.stockMatch.material[r] = !0 : e.stockMatch.material[r] = !1 : e.stockMatch.material[r] = !0, i ? $(e.t) && $(s.t) ? (En(e) && ke.equalTo(e.t, s.t) || e.t === s.t) && (e.stockMatch.thickness[r] = !0) : e.stockMatch.thickness[r] = !1 : e.stockMatch.thickness[r] = !0, s.type === "linear" ? En(e) && (e.canRotate(0, s) && ke.equalTo(e.w, s.w) || e.canRotate(1, s) && ke.equalTo(e.l, s.w) ? e.stockMatch.width[r] = !0 : e.stockMatch.width[r] = !1) : e.stockMatch.width[r] = !0, e.stockMatch.fit[r] && e.stockMatch.material[r] && e.stockMatch.thickness[r] && e.stockMatch.width[r]));
}
function PT(e, t) {
  const n = Si(e[0]);
  if (n && (e = e.map((c) => {
    const f = new Gn(c);
    return f.trimDimensions(), f;
  })), Cs(t[0]) && (t = t.map((c, f) => (c.id = `${f.toString()}.0`, new ti(c)))), e.some((c) => $(c.stockLock) && c.stockLock.length)) return;
  t = t.filter((c) => c.autoAdd === !0 || $(c.q) && c.q > 0);
  const s = t.some((c) => $(c.material)), r = t.some((c) => $(c.t));
  if (!t.every((c) => $(c.type === "linear")) && !s && !r)
    return !1;
  const a = /* @__PURE__ */ new Set();
  for (let c = 0; c < e.length; c++) {
    const f = e[c];
    f.stockMatch = {
      material: [],
      thickness: [],
      width: [],
      fit: []
    };
    const h = OT(
      f,
      t,
      s,
      r
    );
    if (f.stockMatch.fit = !f.stockMatch.fit.every((d) => d === !1), f.stockMatch.material = !f.stockMatch.material.every((d) => d === !1), f.stockMatch.thickness = !f.stockMatch.thickness.every((d) => d === !1), f.stockMatch.width = !f.stockMatch.width.every((d) => d === !1), !n) {
      if (h.length) {
        const d = h.map((p) => p.parentID);
        f.stockLock = d, d.forEach((p) => a.add(p));
      } else if (f.stockMatch.fit)
        f.stockMatch.material || f.issues.push(`materials must match - could not find any stock with ${f.material ? f.material + " material" : "no material set"}`), f.stockMatch.thickness || f.issues.push(`thicknesses must match - could not find any stock with ${f.t ? "thickness " + f.t : "no thickness set"}`), f.stockMatch.width || f.issues.push(`widths must match for linear calculations - could not find any stock with ${f.w ? "width " + f.w : "no width set"}`);
      else {
        const d = f.getTrimmedDimensions();
        f.issues.push(`${d.l.toFixed()}x${d.w.toFixed()} will not fit on any stock - check dimensions, min spacing, trim & orientation lock`);
      }
      f.stockMatch = null;
    }
  }
  const l = e.filter((c) => !c.stockLock || !c.stockLock.length).sort(ns.ID), u = t.filter((c) => !a.has(c.parentID)).sort(ns.ID);
  return t = t.filter((c) => rs(c)).filter((c) => a.has(c.parentID)), (s || r) && (e = e.filter((c) => {
    var f;
    return (f = c == null ? void 0 : c.stockLock) == null ? void 0 : f.length;
  })), {
    stockList: t,
    unusableShapes: l,
    shapeList: e,
    unusableStock: u
  };
}
function NT(e) {
  const t = e.map((n) => n.grain).filter((n) => n);
  return t.length ? t.every((n) => n === "l") ? "l" : t.every((n) => n === "w") ? "w" : t.some((n) => n === "l" || n === "w") ? "y" : "n" : "n";
}
function IT(e) {
  return e.shapes !== void 0;
}
function xn(e) {
  return e instanceof Oi && e.type !== "user";
}
function ga(e) {
  return e instanceof Oi && e.type === "user";
}
function zi(e) {
  return e instanceof _T;
}
function Cs(e) {
  return e instanceof Ty;
}
function Si(e) {
  return e instanceof Oo;
}
function rs(e) {
  return e instanceof ti;
}
function zl(e) {
  return e instanceof Bu;
}
function En(e) {
  return e instanceof Gn && !(e instanceof Oi);
}
function MT(e) {
  return e instanceof Ay;
}
function LT(e) {
  return e instanceof zn;
}
class qe {
  constructor(t, n, i = null) {
    g(this, "x");
    g(this, "y");
    g(this, "z");
    g(this, "a");
    //shape id
    g(this, "b");
    //shape id
    g(this, "fromDirection");
    g(this, "type");
    g(this, "corner");
    g(this, "grid");
    g(this, "stockID");
    g(this, "raycast");
    g(this, "collision");
    g(this, "tooClose");
    g(this, "adjustedForMinSpacing");
    this.x = parseFloat(t), this.y = parseFloat(n), this.z = parseFloat(i) || 0, this.validate();
  }
  clone(t = null, n = null) {
    const i = structuredClone(this), s = new qe(
      t === null ? i.x : t,
      n === null ? i.y : n
    );
    for (const r in i)
      r === "x" || r === "y" || (s[r] = i[r]);
    return s;
  }
  validate() {
    if (isNaN(this.x) || isNaN(this.y))
      throw new Error("invalid point coordinates");
  }
  collidesWith(t) {
    return this.x >= t.x && this.x <= t.x + t.l && this.y >= t.y && this.y <= t.y + t.w;
  }
  isIdenticalTo(t) {
    return this.x === t.x && this.y === t.y;
  }
  /* given a grid point, get the available positions for this shape
     does not cater for diagonals */
  getAvailableShapePositions(t) {
    const n = /* @__PURE__ */ new Set();
    return (t == null ? void 0 : t.cutType) !== "efficiency" ? (this.corner === "topLeft" && (this.grid === "top" || !this.grid) && n.add("topRight"), this.corner === "bottomRight" && (this.grid === "right" || !this.grid) && n.add("topRight"), n) : (this.corner === "topRight" && ((this.grid === "top" || !this.grid) && n.add("topLeft"), (this.grid === "right" || !this.grid) && n.add("bottomRight")), this.corner === "topLeft" && ((this.grid === "top" || !this.grid) && n.add("topRight"), (this.grid === "left" || !this.grid) && n.add("bottomLeft")), this.corner === "bottomRight" && ((this.grid === "bottom" || !this.grid) && n.add("bottomLeft"), (this.grid === "right" || !this.grid) && n.add("topRight")), this.corner === "bottomLeft" && ((this.grid === "bottom" || !this.grid) && n.add("bottomRight"), (this.grid === "left" || !this.grid) && n.add("topLeft")), n);
  }
}
class ma {
  constructor(t = []) {
    g(this, "points", /* @__PURE__ */ new Map());
    t.forEach((n) => this.addPoint(n));
  }
  addPoint(t, n = null) {
    if (!(t instanceof qe))
      throw new Error("p is not an instance of Point");
    if (this.contains(t)) {
      const i = this.getPoint(t);
      i.type === "group" && !n && (i.type = void 0);
      return;
    }
    t.validate(), n && (t.type = n), this.points.set(this.createKey(t), t);
  }
  addPoints(t, n = null) {
    t.forEach((i) => {
      i && (i.validate(), this.addPoint(i, n));
    });
  }
  createKey(t) {
    return `${t.x},${t.y}`;
  }
  getPoint(t) {
    return this.points.get(this.createKey(t));
  }
  deletePoint(t) {
    t.validate(), this.points.delete(this.createKey(t));
  }
  deletePoints(t) {
    t.forEach((n) => {
      n.validate(), this.deletePoint(n);
    });
  }
  clear() {
    this.points.clear();
  }
  toArray() {
    return Array.from(this.points.values());
  }
  contains(t) {
    return this.points.has(this.createKey(t));
  }
}
const Mn = {
  bottom: (e, t, n) => {
    const i = new qe(e.x, e.y - n);
    return i.corner = t, i.grid = "bottom", i;
  },
  left: (e, t, n) => {
    const i = new qe(e.x - n, e.y);
    return i.corner = t, i.grid = "left", i;
  },
  right: (e, t, n) => {
    const i = new qe(e.x + n, e.y);
    return i.corner = t, i.grid = "right", i;
  },
  top: (e, t, n) => {
    const i = new qe(e.x, e.y + n);
    return i.corner = t, i.grid = "top", i;
  }
};
function DT(e, t, n, i) {
  var o, a, l, u, c, f;
  const s = new ma();
  if (n.toArray().sort(Oy).forEach((h) => {
    const d = h.corner, p = h.type;
    if (!i)
      s.addPoint(h);
    else
      switch (d) {
        case "topRight":
          s.addPoint(
            Mn.top(
              h,
              d,
              i
            ),
            p
          ), s.addPoint(
            Mn.right(
              h,
              d,
              i
            ),
            p
          );
          break;
        case "topLeft":
          s.addPoint(
            Mn.top(
              h,
              d,
              i
            ),
            p
          ), s.addPoint(
            Mn.left(
              h,
              d,
              i
            ),
            p
          );
          break;
        case "bottomRight":
          s.addPoint(
            Mn.bottom(
              h,
              d,
              i
            ),
            p
          ), s.addPoint(
            Mn.right(
              h,
              d,
              i
            ),
            p
          );
          break;
        case "bottomLeft":
          s.addPoint(
            Mn.bottom(
              h,
              d,
              i
            ),
            p
          ), s.addPoint(
            Mn.left(
              h,
              d,
              i
            ),
            p
          );
          break;
      }
    const y = s.toArray();
    if (i)
      for (let w = y.length; w--; ) {
        const S = y[w];
        n.contains(S) && s.deletePoint(S);
      }
    else
      for (let w = y.length; w--; ) {
        const S = y[w];
        for (let k = e.length; k--; ) {
          const b = e[k];
          if (S.x === b.x && S.y === b.y) {
            s.deletePoint(S);
            break;
          }
        }
      }
  }), i) {
    const h = /* @__PURE__ */ new Set();
    let d, p, y, w;
    ((o = t == null ? void 0 : t.constructor) == null ? void 0 : o.name) === "Stock" && (t != null && t.trimmed) || ((a = t == null ? void 0 : t.constructor) == null ? void 0 : a.name) === "Segment" ? (d = t.x, p = t.y, y = t.x + t.l, w = t.y + t.w) : (d = t.x + ((l = t == null ? void 0 : t.trim) == null ? void 0 : l.x1), p = t.y + ((u = t == null ? void 0 : t.trim) == null ? void 0 : u.y1), y = t.x + t.l - ((c = t == null ? void 0 : t.trim) == null ? void 0 : c.x2), w = t.y + t.w - ((f = t == null ? void 0 : t.trim) == null ? void 0 : f.y2));
    let S = s.toArray();
    for (let k = S.length; k--; ) {
      const b = S[k];
      (ke.lessThan(b.x, d) || ke.lessThan(b.y, p) || ke.greaterThan(b.x, y) || ke.greaterThan(b.y, w)) && S.splice(k, 1);
    }
    s.clear(), s.addPoints(S), h.clear(), S = s.toArray();
    for (let k = S.length; k--; ) {
      const b = S[k];
      for (let C = e.length; C--; ) {
        const A = e[C];
        if (b.collidesWith(A)) {
          s.deletePoint(b);
          break;
        }
      }
    }
  }
  return s;
}
function RT(e, t) {
  const n = new ma();
  return e.sort(Oy), e.forEach((i) => {
    xn(i) ? (n.addPoints(i.getCoords(t)), i.shapes.forEach((s) => {
      const r = s.getCoords(t);
      n.addPoints(r, "group");
    })) : n.addPoints(i.getCoords(t));
  }), n.points.forEach((i) => {
    i.stockID = t.getStock().id;
  }), n;
}
function FT(e = [], t, n) {
  const i = n.getBladeWidth(), s = RT(
    e === null ? t : e,
    n
  );
  return DT(
    t,
    n,
    s,
    i
  );
}
function Oy(e, t) {
  return e.y === t.y ? t.x - e.x : t.y - e.y;
}
function Ar(e, t, n) {
  if (n.saw.cutType !== "efficiency") return e;
  const i = t.getMinSpacing(n);
  if (!i) return e;
  const s = n.getBladeWidth();
  let r;
  if (!i || !e.grid) return e;
  switch (e.grid) {
    case "bottom":
      r = e.clone(e.x, e.y - i + s);
      break;
    case "top":
      r = e.clone(e.x, e.y + i - s);
      break;
    case "left":
      r = e.clone(e.x - i + s, e.y);
      break;
    case "right":
      r = e.clone(e.x + i - s, e.y);
      break;
  }
  return r.adjustedForMinSpacing = !0, r;
}
function $T(e, t, n) {
  const i = new ma();
  return t.getAvailableShapePositions(n).forEach((r) => {
    switch (r) {
      case "bottomLeft":
        {
          let o = Ar(
            t,
            e,
            n
          );
          o = o.clone(o.x - e.l, o.y - e.w), i.addPoint(o);
        }
        break;
      case "bottomRight":
        {
          let o = Ar(
            t,
            e,
            n
          );
          o = o.clone(o.x, o.y - e.w), i.addPoint(o);
        }
        break;
      case "topLeft":
        {
          let o = Ar(
            t,
            e,
            n
          );
          o = o.clone(o.x - e.l, o.y), i.addPoint(o);
        }
        break;
      case "topRight":
        {
          let o = Ar(
            t,
            e,
            n
          );
          o = o.clone(o.x, o.y), i.addPoint(o);
        }
        break;
    }
  }), BT(
    e,
    n,
    i
  ), i;
}
function BT(e, t, n) {
  var l, u, c, f, h, d;
  let i, s, r, o;
  ((l = t == null ? void 0 : t.constructor) == null ? void 0 : l.name) === "Stock" && (t != null && t.trimmed) || ((u = t == null ? void 0 : t.constructor) == null ? void 0 : u.name) === "Segment" ? (i = 0, s = 0, r = t.x + t.l - e.l, o = t.y + t.w - e.w) : (i = (c = t == null ? void 0 : t.trim) == null ? void 0 : c.x1, s = (f = t == null ? void 0 : t.trim) == null ? void 0 : f.y1, r = t.l - ((h = t == null ? void 0 : t.trim) == null ? void 0 : h.x2) - e.l, o = t.w - ((d = t == null ? void 0 : t.trim) == null ? void 0 : d.y2) - e.w);
  const a = n.toArray();
  for (let p = a.length; p--; ) {
    const y = a[p];
    (ke.lessThan(y.x, i) || ke.lessThan(y.y, s) || ke.greaterThan(y.x, r) || ke.greaterThan(y.y, o) || y.x < 0 || y.y < 0) && n.deletePoint(y);
  }
}
function Mi(e) {
  return typeof e == "string" && e.length === 6 && !isNaN(+("0x" + e.replace("#", "")));
}
class jT {
  constructor({
    elementID: t,
    env: n = "production",
    main: i = !0,
    units: s = "decimal",
    decimalPlaces: r = 2,
    fractionRoundTo: o = 0,
    saw: a = null,
    app: l = !1,
    embed: u = !1,
    height: c = 0,
    width: f = 0,
    flipY: h = !1,
    flipX: d = !1,
    colors: p = {
      partA: "#1d9bc4",
      partB: "#127da1",
      partHover: "#29c778",
      partSelected: "#1bc319",
      stock: "#ffd166",
      text: "#ffffff"
    },
    options: y = {
      disableClick: !1,
      enableStretch: !0
    },
    vueComponent: w
  }) {
    g(this, "env");
    g(this, "main");
    //is this the main vis or not
    g(this, "units", "decimal");
    g(this, "decimalPlaces");
    g(this, "fractionRoundTo");
    g(this, "fn");
    g(this, "saw");
    g(this, "stockType");
    g(this, "numUniqueShapes");
    g(this, "app");
    g(this, "embed");
    g(this, "height");
    g(this, "width");
    g(this, "device");
    g(this, "vueComponent");
    g(this, "elWidth");
    g(this, "elHeight");
    g(this, "w");
    g(this, "h");
    g(this, "padding");
    g(this, "mobileBreakpoint");
    //scales
    g(this, "xScale", he.scaleLinear());
    g(this, "yScale", he.scaleLinear());
    g(this, "yPositionScale", he.scaleLinear());
    g(this, "xPositionScale", he.scaleLinear());
    g(this, "yAxisScale", he.scaleLinear());
    g(this, "measurementScale", he.scaleLinear());
    g(this, "xAxis");
    g(this, "yAxis");
    g(this, "stretched");
    g(this, "shapeXAxis");
    g(this, "shapeYAxis");
    g(this, "cutMeasurementXAxes");
    g(this, "cutMeasurementYAxes");
    g(this, "axisSpacing");
    g(this, "flipY");
    g(this, "flipX");
    g(this, "colors");
    g(this, "options");
    g(this, "moveMode");
    g(this, "moveRotation");
    g(this, "moving");
    g(this, "shape");
    g(this, "shapeColorScale");
    g(this, "scoreColorScale");
    g(this, "hasTouch");
    g(this, "highlightguillotine");
    g(this, "debug", "");
    //groups | guillotine | positions
    g(this, "elementID");
    //the id of the element to draw the vis in
    g(this, "el");
    g(this, "htmlEl");
    g(this, "svgCanvas");
    g(this, "axisGroup");
    g(this, "stockGroup");
    g(this, "stockWrappers");
    g(this, "stock");
    g(this, "shapeGroup");
    g(this, "shapeWrappers");
    g(this, "shapes");
    g(this, "shapeIDText");
    g(this, "shapeNameText");
    g(this, "shapeLengthText");
    g(this, "shapeWidthText");
    g(this, "groupGroup");
    g(this, "groups");
    g(this, "bandingGroup");
    g(this, "bandingWrappers");
    g(this, "banding");
    g(this, "segmentGroup");
    g(this, "segments");
    g(this, "segment");
    g(this, "positionGroup");
    g(this, "position");
    g(this, "dotGroup");
    g(this, "placementPositionGroup");
    g(this, "dot");
    g(this, "cutGroup");
    g(this, "cuts");
    g(this, "cut");
    var k;
    if (!t) throw new Error("elementID is required");
    if (this.el = he.select(t), this.el === null) return;
    const S = this.el.node();
    if (S !== null) {
      this.htmlEl = S, this.vueComponent = w, this.env = ((k = w == null ? void 0 : w.gs) == null ? void 0 : k.env) === "development" ? "development" : "production", this.debug = this.env === "development" ? "groups" : "", this.app = l || !1, this.embed = u || !1, this.height = c, this.width = f, this.device = l ? "app" : "desktop", this.stretched = !1, this.elWidth = this.htmlEl.offsetWidth, this.elHeight = this.htmlEl.offsetHeight, this.w = 0, this.h = 0, this.padding = 0, this.mobileBreakpoint = 450, this.main = i, this.saw = a, this.cutMeasurementXAxes = [], this.cutMeasurementYAxes = [], this.axisSpacing = 16, this.flipY = h, this.flipX = d, p = {
        ...p
      };
      for (const [b, C] of Object.entries(p))
        C && (p[b] = C.replace("#", ""));
      this.colors = {
        partA: Mi(p == null ? void 0 : p.partA) ? Ue("#" + p.partA) : Ue("#1d9bc4"),
        partB: Mi(p == null ? void 0 : p.partB) ? Ue("#" + p.partB) : Ue("#127da1"),
        partHover: Mi(p == null ? void 0 : p.partHover) ? Ue("#" + p.partHover) : Ue("#29c778"),
        partSelected: Mi(p == null ? void 0 : p.partSelected) ? Ue("#" + p.partSelected) : Ue("#1bc319"),
        stock: Mi(p == null ? void 0 : p.stock) ? Ue("#" + p.stock) : Ue("#ffd166"),
        text: Mi(p == null ? void 0 : p.text) ? Ue("#" + p.text) : Ue("#ffffff")
      }, this.shapeColorScale = he.scaleSequential([
        this.colors.partA,
        this.colors.partB
      ]), this.env = n, this.moveMode = !1, this.moving = !1, this.moveRotation = !1, this.units = s, this.decimalPlaces = r, this.fractionRoundTo = o, this.fn = (b) => J(
        b,
        this.units,
        this.decimalPlaces ?? 2,
        !1,
        this.fractionRoundTo ?? 0
      ).toString(), this.hasTouch = !1, this.options = y, this.init();
    }
  }
  /**
      * sets up the various wrappers - only needs to be called once
      * the z index is set by the order drawn
      */
  init() {
    if (!this.el) return !1;
    if ((this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces)) && (this.decimalPlaces = 2), (this.fractionRoundTo === null || this.fractionRoundTo === void 0 || isNaN(this.fractionRoundTo)) && (this.fractionRoundTo = 0), !this.svgCanvas) {
      if (this.htmlEl.querySelector("svg") === null) {
        const n = this.el.append("svg").attr("class", "vis");
        if (n === null) return;
        n.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), n.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(90)").attr("id", "grain-l").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), n.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("id", "grain-w").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), this.svgCanvas = n;
      }
      this.axisGroup = this.svgCanvas.append("g").attr("class", "axis-group"), this.stockGroup = this.svgCanvas.append("g").attr("class", "stock-group"), this.shapeGroup = this.svgCanvas.append("g").attr("class", "shapes"), this.bandingGroup = this.svgCanvas.append("g").attr("class", "banding-group"), this.segmentGroup = this.svgCanvas.append("g").attr("class", "segments").attr("display", "none"), this.groupGroup = this.svgCanvas.append("g").attr("class", "groups").attr("display", "none"), this.positionGroup = this.svgCanvas.append("g").attr("class", "positions"), this.dotGroup = this.svgCanvas.append("g").attr("class", "dots"), this.env === "development" && (this.placementPositionGroup = this.svgCanvas.append("g").attr("class", "placements")), this.cutGroup = this.svgCanvas.append("g").attr("class", "cuts");
    }
    this.elWidth > 0 && this.updateSize(!0), this.hasTouch = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
  trimNameToFit(t, n) {
    function i(s, r, o) {
      const a = o[r], l = he.select(a);
      l.text(s.name);
      let u = l.text();
      const c = l.node();
      if (!c) return;
      let f = c.getComputedTextLength();
      const h = this.getWidthAttribute(s) - 20;
      for (; f > h && u.length > 0; )
        u = u.slice(0, -1), l.text(u.length ? u + "..." : ""), f = l.node().getComputedTextLength();
    }
    t.each(i.bind(n));
  }
  getShapeColor(t) {
    if (this.env === "development")
      if (this.debug === "guillotine") {
        if (t.guillotineData.firstShape)
          return Ue(
            252,
            3,
            182
          );
        if (typeof t.guillotineData.currentPhase == "number") {
          const n = [0, 115, 255], i = [176, 255, 231];
          return `rgb(${n.map((r, o) => Math.round(r + t.guillotineData.currentPhase / 5 * (i[o] - r))).join(",")})`;
        }
      } else {
        if (this.debug === "groups")
          return t.addedAsGroup !== !1 ? Ue(
            53,
            186,
            20
          ) : Ue(
            17,
            138,
            178
          );
        if (this.debug === "score")
          return this.scoreColorScale(t.bestScore.total);
      }
    return this.shapeColorScale(t.parentID - 1);
  }
  setDevice() {
    if (!(!this.htmlEl || this.htmlEl.style.display === "none") && this.htmlEl.offsetWidth) {
      if (this.elWidth = this.htmlEl.offsetWidth, this.elHeight = this.htmlEl.offsetHeight, this.elWidth === 0) return !1;
      this.main ? this.elWidth <= this.mobileBreakpoint || this.app ? (this.device = "mobile", this.padding = 0) : (this.device = "desktop", this.padding = 50) : this.padding = 0, this.w = this.elWidth;
    }
  }
  //find the largest dimensions of all the stock (not just the active one)
  findLargestStockDimensions() {
    const t = Ce.call(this.vueComponent, ["stockList"]).filter((s) => s.used);
    if (!(t != null && t.length)) return [null, null];
    const n = t.reduce((s, r) => s.l > r.l ? s : r), i = t.reduce((s, r) => s.w > r.w ? s : r);
    return [n, i];
  }
  debounce(t, n, i = !1) {
    let s;
    return (...r) => new Promise((o) => {
      const a = () => {
        s = null, i || o(t.apply(this, r));
      };
      clearTimeout(s), i && !s && o(t.apply(this, r)), s = setTimeout(a, n);
    });
  }
  updateSize(t = !1) {
    return this.debounce(
      this._updateSize.bind(this),
      10,
      t
    )();
  }
  requiresStretch(t, n = null) {
    return t ? (n === null && (n = t.w / t.l), n < 0.15) : !1;
  }
  setAspectRatio(t) {
    if (t) {
      this.w = this.elWidth;
      const n = t.w / t.l;
      this.xScale.domain([0, t.l]).range([this.padding, this.w - this.padding]), this.requiresStretch(t, n) && this.options.enableStretch ? (this.h = this.htmlEl.clientWidth * 0.15 + this.padding * 2, this.stretched = !0) : (this.h = this.xScale(t.getShortSide()) + this.padding, this.stretched = !1), this.yScale.domain([0, t.w]).range([this.padding, this.h - this.padding]), this.yAxisScale.domain(this.flipY ? [0, t.w] : [t.w, 0]).range([this.padding, this.h - this.padding]), this.yPositionScale.domain([0, t.w]).range(this.flipY ? [this.padding, this.h - this.padding] : [this.h - this.padding, this.padding]), n > 2 && (this.w = this.htmlEl.clientWidth / n + this.padding * 2, this.xScale.domain([0, t.l]).range([this.padding, this.w - this.padding]), this.h = this.xScale(t.getShortSide()) + this.padding), this.xPositionScale.domain([0, t.l]).range(this.flipX ? [this.w - this.padding, this.padding] : [this.padding, this.w - this.padding]), this.measurementScale.domain([0, t.l]).range([0, this.w - this.padding * 2]), this.w > 0 && this.h > 0 && (n > 2 ? this.el.style("width", this.w + "px") : this.el.style("width", ""), this.el.style("height", this.h + "px"));
    }
  }
  _updateSize() {
    if (!this.htmlEl || this.htmlEl.style.display === "none") return;
    this.vueComponent && "suppressResizeObserver" in this.vueComponent && (this.vueComponent.suppressResizeObserver = !0);
    const t = Ce.call(this.vueComponent, ["stockList"]), n = Ce.call(this.vueComponent, ["shapeList"]);
    if (!(t != null && t.length) || !(n != null && n.length)) return !1;
    this.setDevice(), this.refreshStock(), this.refreshShapes(), this.env === "development" && this.refreshPlacementPositions();
  }
  refreshStock() {
    const t = Ce.call(this.vueComponent, ["stockList"]);
    if (!(t != null && t.length)) return !1;
    const n = Ce.call(this.vueComponent, ["activeStock"]);
    this.initStock(n);
    const i = Ce.call(this.vueComponent, ["activeCuts"]);
    this.initCuts(i);
    const s = Ce.call(this.vueComponent, [
      "activeSegments"
    ]);
    this.initSegments(s), this.resetPositions(), typeof this.vueComponent.toggleSegments == "function" && this.vueComponent.toggleSegments(!1);
  }
  refreshShapes() {
    const t = Ce.call(this.vueComponent, ["shapeList"]);
    if (!(t != null && t.length)) return !1;
    this.resetPositions();
    const n = Ce.call(this.vueComponent, ["activeShapes"]);
    this.initShapes(n, t);
  }
  refreshPlacementPositions() {
    const t = Ce.call(this.vueComponent, ["placementPositions"]);
    if (!(t != null && t.length)) return !1;
    this.resetPlacementPositions();
    const n = t.filter((i) => i.stockID === Ce.call(this.vueComponent, ["activeStock"]).id);
    this.initPlacementPositions(n);
  }
  recreateUerGroups(t) {
    t.filter((s) => s.inUserGroup);
    const n = [];
    for (let s = 0; s < t.length; s++) {
      const o = t[s].addedAsGroup, a = t.filter((l) => l.addedAsGroup === o);
      n.push(a), s += a.length;
    }
    const i = [];
    n.forEach((s) => {
      const r = Math.min(...s.map((c) => c.x)), o = Math.min(...s.map((c) => c.y)), a = Math.max(...s.map((c) => c.x + c.l)) - r, l = Math.max(...s.map((c) => c.y + c.w)) - o, u = {
        x: r,
        y: o,
        l: a,
        w: l,
        shapes: s
      };
      i.push(u);
    }), this.initGroups(i);
  }
  //init or update the stock
  initStock(t) {
    if (this.resetStock(), this.setAspectRatio(t), !t || !(t != null && t.w) || !(t != null && t.l) || !this.elWidth)
      return !1;
    this.stockType = t.type;
    let n;
    if (typeof t == "object" && (n = [t]), this.device === "desktop" && this.main) {
      this.xAxis = this.axisGroup.append("g").attr("transform", `translate(0, ${this.padding})`).attr("class", "axis stock x").call(he.axisTop(this.xScale).ticks(5).tickSize(5)).selectAll("text").attr("dy", -5);
      const i = this.requiresStretch(t);
      (!i || i && this.stretched) && (this.yAxis = this.axisGroup.append("g").attr(
        "transform",
        `translate(${this.w - this.padding}, 0)`
      ).attr("class", "axis stock y").call(he.axisRight(this.yAxisScale).ticks(5).tickSize(5)).selectAll("text").attr("dx", 5));
    }
    this.stockGroup.data(n).attr(
      "transform",
      () => `translate(${this.padding},${this.padding})`
    ), this.stockGroup.append("rect").attr("class", "background stock").style("fill", this.colors.stock).attr("width", (i) => this.getWidthAttribute(i)).attr("height", (i) => this.getHeightAttribute(i)).attr("x", (i) => {
      i.x = 0;
      const s = i.x;
      i.x = 0;
      const r = this.getRectangleCoordinate(i, "x") - this.padding;
      return i.x = s, r;
    }).attr("y", (i) => {
      i.y = 0;
      const s = i.y;
      i.y = 0;
      const r = this.getRectangleCoordinate(i, "y") - this.padding;
      return i.y = s, r;
    }), this.stock = this.stockGroup.append("rect").attr("width", (i) => this.getWidthAttribute(i)).attr("height", (i) => this.getHeightAttribute(i)).attr(
      "x",
      (i) => this.getRectangleCoordinate(i, "x") - this.padding
    ).attr(
      "y",
      (i) => this.getRectangleCoordinate(i, "y") - this.padding
    ).attr("class", "stock-pattern").style("fill", (i) => i != null && i.grain ? `url(#grain-${i.grain.toLowerCase()})` : "url(#stripes)");
  }
  getWidthAttribute(t) {
    return this.xScale(t.l) - this.padding;
  }
  getHeightAttribute(t) {
    return this.yScale(t.w) - this.padding;
  }
  //init or update the shapes
  initShapes(t, n) {
    var i, s, r;
    if (this.resetShapes(), !(!t || !t.length || !this.elWidth)) {
      if (this.numUniqueShapes = n.filter((o) => !o.duplicate).length, this.shapeColorScale.domain([0, this.numUniqueShapes]), (i = this == null ? void 0 : this.vueComponent) != null && i.gs) {
        this.vueComponent.gs.shapeColors = {};
        for (let o = t.length; o--; ) {
          const a = t[o];
          a.parentID && this.vueComponent.gs.shapeColors[a.parentID] || a.parentID && (this.vueComponent.gs.shapeColors[a.parentID] = Zi(this.shapeColorScale(parseInt(a.parentID) - 1)).formatHex());
        }
      }
      if (this.env === "development") {
        let o = 1 / 0, a = -1 / 0;
        for (const c of t) {
          const f = (s = c == null ? void 0 : c.bestScore) == null ? void 0 : s.total;
          if (f !== 0 && f !== null && f !== void 0) {
            o = f, a = f;
            break;
          }
        }
        const l = t.reduce((c, f) => {
          var d;
          const h = (d = f == null ? void 0 : f.bestScore) == null ? void 0 : d.total;
          return h === 0 || h === null || h === void 0 ? c : h < c ? h : c;
        }, o), u = t.reduce((c, f) => {
          var d;
          const h = (d = f == null ? void 0 : f.bestScore) == null ? void 0 : d.total;
          return h == null ? c : h > c ? h : c;
        }, a);
        this.scoreColorScale = he.scaleSequential([Ue(
          251,
          224,
          255
        ), Ue(
          122,
          0,
          138
        )]).domain([l, u]);
      }
      if (!t || !t.length || (this.shapeWrappers = this.shapeGroup.selectAll("g").data(t).join("g").attr("class", "shape-group"), !this.shapeWrappers.size())) return !1;
      if (this.shapes = this.shapeWrappers.append("rect").attr("class", "shape").attr("fill", (o) => this.getShapeColor(o)).attr("stroke-width", () => this.env === "development" ? 3 : 0).attr("width", (o) => this.getWidthAttribute(o)).attr("height", (o) => this.getHeightAttribute(o)), this.main) {
        const o = [];
        t.forEach((a) => {
          if (a != null && a._banding)
            for (const [l, u] of Object.entries(a._banding)) {
              if (!u || ["a", "b", "c", "d"].includes(l)) continue;
              let c = l;
              if (a.rot)
                switch (l) {
                  case "x1":
                    c = "y1";
                    break;
                  case "x2":
                    c = "y2";
                    break;
                  case "y1":
                    c = "x2";
                    break;
                  case "y2":
                    c = "x1";
                    break;
                }
              switch (c) {
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
        ).attr("stroke-width", 2).attr("stroke", "white"), this.shapeIDText = this.shapeWrappers.append("text").attr("class", "shape-text id").text((a) => {
          if (this.env === "development") {
            if (this.debug === "guillotine") {
              const l = a.guillotineData.currentStripDirection;
              if (l === "l")
                return "→ " + a.id;
              if (l === "w")
                return "↑ " + a.id;
            } else if (this.debug === "groups") {
              const l = a.addedAsGroup;
              if (l) return l;
            }
          }
          return a.parentID ? a.parentID : a.getParentID();
        }).classed("hidden", (a, l, u) => {
          const c = u[l].getBBox();
          return c.width >= this.measurementScale(a.l) || c.height >= this.yScale(a.w) - this.padding;
        }).attr("dominant-baseline", "middle").attr("fill", this.colors.text), this.shapeNameText = this.shapeWrappers.append("text").attr("class", "shape-text name").text((a) => !(a != null && a.name) || typeof (a == null ? void 0 : a.name) != "string" ? null : a.name.toUpperCase().trim()).call(this.trimNameToFit, this).classed("hidden", (a, l, u) => u[l].getBBox().width >= this.measurementScale(a.l) || this.measurementScale(a.w) < 40).attr("dominant-baseline", "middle").attr("fill", this.colors.text), this.shapeLengthText = this.shapeWrappers.append("text").attr("class", "shape-text length").text((a) => this.debug === "guillotine" ? "" : J(
          a.l,
          this.units,
          this.decimalPlaces,
          !1,
          this.fractionRoundTo
        )).classed("hidden", (a, l, u) => {
          var f;
          return this.app ? this.measurementScale(a.l) < 50 || this.measurementScale(a.w) < 50 : ((f = a == null ? void 0 : a.stock) == null ? void 0 : f.type) === "linear" ? !1 : u[l].getBBox().width >= this.measurementScale(a.l) || this.measurementScale(a.w) < 30;
        }).attr("dominant-baseline", "middle").attr("fill", this.colors.text), this.shapeWidthText = this.shapeWrappers.append("text").attr("class", "shape-text width").text((a) => this.debug === "guillotine" ? "" : J(
          a.w,
          this.units,
          this.decimalPlaces,
          !1,
          this.fractionRoundTo
        )).classed("hidden", (a, l, u) => {
          if (this.app)
            return this.measurementScale(a.l) < 50 || this.measurementScale(a.w) < 50;
          const c = u[l].getBBox();
          return this.measurementScale(a.l) < 30 || c.height >= this.measurementScale(a.w);
        }).attr("dominant-baseline", "middle").attr("fill", this.colors.text);
      }
      (this.main || this.app) && !((r = this == null ? void 0 : this.options) != null && r.disableClick) && (this.shapes.on("mousedown", (o, a) => {
        var l, u, c, f, h, d;
        if (this.moving) return !1;
        if (this.env === "development") {
          if ("structuredClone" in window) {
            console.clear();
            let p;
            try {
              p = structuredClone(a);
            } catch (y) {
              console.log("issue with structuredClone", y);
            }
            if (p) {
              let y = ["id", "placementOrder"];
              this.debug === "guillotine" ? y = [
                "guillotineData.currentPhase",
                "guillotineData.myPhase",
                "guillotineData.currentStripDirection",
                "guillotineData.keyStripDirection",
                "guillotineData.myStripDirection",
                "guillotineData.myParentStripShape",
                "guillotineData.myPrimaryStripShape",
                "guillotineData.mySecondaryStripShape",
                "guillotineData.firstShape",
                "addedAsGroup"
              ] : this.debug === "groups" && (y = [
                "id",
                "addedAsGroup"
              ]), console.table(y.reduce((w, S) => (w[S] = _d(p, S), w), {}));
            }
          }
          this.debug === "guillotine" && (this.shapeWrappers.selectAll(".highlight-a").classed("highlight-a", !1), this.shapeWrappers.selectAll(".highlight-b").classed("highlight-b", !1), this.shapeWrappers.selectAll(".highlight-c").classed("highlight-c", !1), (l = a.guillotineData) != null && l.myParentStripShape && this.shapeWrappers.filter((w) => w.id === a.guillotineData.myParentStripShape).select("rect").classed("highlight-a", !0), (u = a.guillotineData) != null && u.myPrimaryStripShape && this.shapeWrappers.filter((w) => w.id === a.guillotineData.myPrimaryStripShape).select("rect").classed("highlight-b", !0), (c = a.guillotineData) != null && c.mySecondaryStripShape && this.shapeWrappers.filter((w) => w.id === a.guillotineData.mySecondaryStripShape).select("rect").classed("highlight-c", !0));
        }
        if (this.app || this.embed) {
          const p = {
            name: a.name,
            id: a.id,
            x: a.x,
            y: a.y,
            l: a.l,
            w: a.w,
            banding: a != null && a.banding && typeof a.banding == "object" ? a.banding : null,
            rot: a.rot,
            stock: (f = a == null ? void 0 : a.stock) == null ? void 0 : f.id,
            color: (h = this.getShapeColor(a)) == null ? void 0 : h.toString(),
            notes: a == null ? void 0 : a.notes
          }, y = new CustomEvent("partClick", {
            detail: p
          });
          if (this.env === "development" && console.log(p), this.htmlEl.dispatchEvent(y), this.app) return !1;
        }
        if (!this.moveMode && ((d = this.vueComponent) != null && d.gs) && (this.vueComponent.gs.examineShape = a), this.device === "desktop" && (this.resetCutMeasurementAxes(), this.addShapeAxes(a)), this.shapes.classed("selected", !1), this.shapes.style("fill", (p) => this.getShapeColor(p)), this.moveMode) {
          if (a.stock.cutType === "efficiency" || a.stock.type === "linear") {
            const p = Gi.call(this.vueComponent, "partsBin");
            p && p.addToPartsBin(a);
          }
        } else
          he.select(o.target).classed("selected", !0), he.select(o.target).style(
            "fill",
            this.colors.partSelected.toString()
          );
      }), !this.app && !this.hasTouch && this.shapes.on(
        "mouseover",
        (o) => {
          this != null && this.moveMode && this.moving || (he.select(o.target).classed("hover", !0), he.select(o.target).classed("selected") || he.select(o.target).style(
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
          he.select(o.target).classed("hover", !1), he.select(o.target).classed("selected") || he.select(o.target).style(
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
  updateShapeVisibility(t) {
    var n;
    (n = this == null ? void 0 : this.shapeWrappers) == null || n.style("visibility", (i) => (i == null ? void 0 : i.placementOrder) >= t ? "hidden" : "visible");
  }
  isCutComplete(t, n, i) {
    return t.guillotineData.parentSegmentID === n && i && t.guillotineData.segmentCutOrder < i;
  }
  isCutInsideSegment(t, n) {
    var i;
    return ((i = t.guillotineData) == null ? void 0 : i.parentSegmentID) !== null && !(t != null && t.isTrim) ? t.guillotineData.parentSegmentID === n : !1;
  }
  //update CUT visibility
  updateCutVisibility(t, n = null) {
    var a, l, u, c, f, h, d, p, y;
    if (n === null || t == null || this != null && this.cuts.empty()) return;
    this.resetShapeAxes(), this.resetCutMeasurementAxes(), he.select(this.cuts.nodes()[n].parentNode).raise();
    const i = (a = t.guillotineData) == null ? void 0 : a.parentSegmentID, s = this.getHalfBladeWidth(t.stock), r = t.direction === "l" ? "y" : "x", o = (l = t == null ? void 0 : t.stock) == null ? void 0 : l.trim;
    if ((((u = t == null ? void 0 : t.stock) == null ? void 0 : u.cutType) === "guillotine" || ((c = t == null ? void 0 : t.stock) == null ? void 0 : c.cutType) === "beam") && i !== null && typeof i < "u") {
      this.cuts.style("visibility", (A) => typeof t.guillotineData.order == "number" && A.guillotineData.order <= t.guillotineData.order || A.guillotineData.parentSegmentID === i ? "visible" : "hidden"), this.cuts.classed("highlight", (A) => t.stock.cutType === "guillotine" && A.isTrim ? A.type === t.type : A.guillotineData.order === t.guillotineData.order);
      const w = (f = t == null ? void 0 : t.guillotineData) == null ? void 0 : f.segmentCutOrder;
      if (w == null)
        return;
      this.cuts.classed("completed", (A) => this.isCutComplete(
        A,
        i,
        w
      )), this.cuts.classed("inside-segment", (A) => this.isCutInsideSegment(A, i));
      let S, k;
      const b = this.getCutSegments(t);
      if (b === !1) return;
      const C = (d = b == null ? void 0 : b.siblings) == null ? void 0 : d[(h = b.main) != null && h.hasBeamTrim ? w - 1 : w];
      C && ((t == null ? void 0 : t.direction) === "l" ? S = [
        [
          C.y,
          C.y + C.w
        ],
        [
          t.y1 + s,
          (b == null ? void 0 : b.main.y) + (b == null ? void 0 : b.main.w)
        ]
      ] : (t == null ? void 0 : t.direction) === "w" && (S = [
        [
          C.x,
          C.x + C.l
        ],
        [
          t.x1 + s,
          (b == null ? void 0 : b.main.x) + (b == null ? void 0 : b.main.l)
        ]
      ]), (t == null ? void 0 : t.direction) === "l" ? k = [(p = t == null ? void 0 : t.distances) == null ? void 0 : p.bottom, t == null ? void 0 : t.distances.top] : (t == null ? void 0 : t.direction) === "w" && (k = [t == null ? void 0 : t.distances.left, (y = t == null ? void 0 : t.distances) == null ? void 0 : y.right]), this.device === "desktop" && !t.isTrim && this.addCutMeasurementAxes(
        S,
        k,
        r
      ));
    } else {
      this.cuts.style("visibility", (S, k) => k <= n ? "visible" : "hidden");
      let w;
      if ((t == null ? void 0 : t.direction) === "l" ? w = [
        [0 + (o.y1 ?? 0), t.y1 - s],
        [
          t.y1 + s,
          t.stock.w - (o != null && o.y2 ? o.y2 : 0)
        ]
      ] : (t == null ? void 0 : t.direction) === "w" && (w = [
        [0 + (o.x1 ?? 0), t.x1 - s],
        [
          t.x1 + s,
          t.stock.l - (o != null && o.x2 ? o.x2 : 0)
        ]
      ]), w != null && w.length) {
        const S = [
          w[0][1] - w[0][0],
          w[1][1] - w[1][0]
        ];
        this.device === "desktop" && !t.isTrim && this.addCutMeasurementAxes(
          w,
          S,
          r
        );
      }
      this.cuts.classed(
        "highlight",
        (S, k) => k === n
      );
    }
    this.cuts.attr("stroke-width", (w, S) => {
      var C;
      let k = Math.ceil(this.measurementScale(this.getBladeWidth(w.stock)));
      const b = (C = t == null ? void 0 : t.guillotineData) == null ? void 0 : C.segmentCutOrder;
      return (this.isCutComplete(
        w,
        i,
        b
      ) || this.isCutInsideSegment(w, i)) && (k += 1), S === n && Math.ceil(this.measurementScale(this.getBladeWidth(w.stock))) < 5 && (k = 5), k;
    });
  }
  //highlight a specific cut (by order or index), segments and related measurements
  showCut(t, n = null) {
    if (n === null) return !1;
    this.updateCutVisibility(t, n);
    const i = this.getCutSegments(t);
    if (i === !1) return;
    const { siblings: s } = i, r = s == null ? void 0 : s.length;
    let o = [];
    if (r) {
      for (let l = r; l--; )
        s[l] && (s[l].completed = !1);
      if (t.guillotineData.segmentCutOrder === void 0 || t.guillotineData.segmentCutOrder === null)
        return;
      const a = t.guillotineData.segmentCutOrder;
      for (let l = 0; l < r; l++)
        l < a && (s[l].completed = !0);
      o.push(...s), o = o.filter((l) => l);
    }
    o.length && (this.resetSegments(), this.initSegments(o));
  }
  /**
      * toggle the visibility of the shapes
      * @param {Boolean} show
      */
  toggleShapes(t = !1) {
    t ? (this.shapeGroup.attr("display", "block"), this.bandingGroup.attr("display", "block")) : (this.shapeGroup.attr("display", "none"), this.bandingGroup.attr("display", "none"));
  }
  /**
      * add measurements to an axis
      * @param {Array} measurements array of arrays
      * @param {Array} values array of values
      * @param {String} axis x | y
      */
  addCutMeasurementAxes(t, n, i) {
    !i || !(t != null && t.length) || t.forEach((s, r) => {
      const o = s[0], a = s[1];
      if (i === "x") {
        const l = he.scaleLinear().domain([o, a]).range([
          this.xPositionScale(o),
          this.xPositionScale(a)
        ]), u = (l.domain()[1] - l.domain()[0]) / 2 + l.domain()[0], c = this.axisGroup.append("g").attr(
          "transform",
          `translate(0, ${this.h - this.padding + this.axisSpacing})`
        ).attr("class", "axis measurement x").call(he.axisBottom(l).tickValues([u]).tickSize(4).tickFormat((f) => f === u ? n[r].toString() : this.fn(f)));
        c.selectAll("text").attr("x", 0).attr("y", 0).attr(
          "dy",
          (f, h, d) => d[h].getBBox().height + 10
        ), this.cutMeasurementXAxes.push(c);
      } else {
        const l = he.scaleLinear().domain([o, a]).range([
          this.yPositionScale(o),
          this.yPositionScale(a)
        ]), u = (l.domain()[1] - l.domain()[0]) / 2 + l.domain()[0], c = this.axisGroup.append("g").attr(
          "transform",
          `translate(${this.padding - this.axisSpacing}, 0)`
        ).attr("class", "axis measurement y").call(he.axisLeft(l).tickValues([u]).tickSize(4).tickFormat((f) => f === u ? n[r].toString() : this.fn(f)));
        c.selectAll("text").attr("x", 0).attr("y", 0).attr(
          "dy",
          (f, h, d) => d[h].getBBox().height + 10
        ).attr(
          "dx",
          (f, h, d) => d[h].getBBox().width / 4
        ).attr(
          "transform",
          (f, h, d) => "rotate(90) translate(" + d[h].getBBox().width / 4 + ")"
        ), this.cutMeasurementYAxes.push(c);
      }
    });
  }
  /**
      * add the shape axes
      * @param {Shape} shape
      */
  addShapeAxes(t) {
    var l;
    this.shapeXAxis && this.shapeXAxis.remove(), this.shapeYAxis && this.shapeYAxis.remove();
    const n = t.x, i = t.x + t.l, s = he.scaleLinear().domain([n, i]).range([this.xPositionScale(n), this.xPositionScale(i)]), r = t.y, o = t.y + t.w, a = he.scaleLinear().domain([r, o]).range([this.yPositionScale(r), this.yPositionScale(o)]);
    this.shapeXAxis = this.axisGroup.append("g").attr(
      "transform",
      `translate(0, ${this.h - this.padding + this.axisSpacing})`
    ).attr("class", "axis shape x").call(he.axisBottom(s).tickValues(s.domain()).tickSize(4).tickFormat(this.fn)), this.shapeXAxis.selectAll("text").attr("dx", (u, c, f) => {
      const h = f[c];
      if (h === null) return;
      const d = h.getBBox();
      return c === 0 ? -d.width / 2 : d.width / 2;
    }), ((l = t == null ? void 0 : t.stock) == null ? void 0 : l.type) !== "linear" && (this.shapeYAxis = this.axisGroup.append("g").attr(
      "transform",
      `translate(${this.padding - this.axisSpacing}, 0)`
    ).attr("class", "axis shape y").call(he.axisLeft(a).tickValues(a.domain()).tickSize(4).tickFormat(this.fn)), this.shapeYAxis.selectAll("text").attr("x", 0).attr("y", 0).attr(
      "dy",
      (u, c, f) => {
        var h, d;
        return ((d = (h = f[c]) == null ? void 0 : h.getBBox()) == null ? void 0 : d.height) + 2;
      }
    ).attr(
      "dx",
      (u, c, f) => {
        var h, d;
        return ((d = (h = f[c]) == null ? void 0 : h.getBBox()) == null ? void 0 : d.width) / 2;
      }
    ).attr("transform", (u, c, f) => {
      var h, d, p, y, w, S, k, b;
      return this.flipY ? c === 0 ? "rotate(90) translate(-" + ((d = (h = f[c]) == null ? void 0 : h.getBBox()) == null ? void 0 : d.width) / 2 + ")" : "rotate(90) translate(" + ((y = (p = f[c]) == null ? void 0 : p.getBBox()) == null ? void 0 : y.width) / 2 + ")" : c === 0 ? "rotate(90) translate(" + ((S = (w = f[c]) == null ? void 0 : w.getBBox()) == null ? void 0 : S.width) / 2 + ")" : "rotate(90) translate(-" + ((b = (k = f[c]) == null ? void 0 : k.getBBox()) == null ? void 0 : b.width) / 2 + ")";
    }));
  }
  getBandingAdjustment(t, n) {
    switch (t) {
      case "y1":
        if (n === "x") return 0;
        if (n === "y") return this.flipY ? 1 : -1;
        break;
      case "y2":
        if (n === "x") return 0;
        if (n === "y") return this.flipY ? -1 : 1;
        break;
      case "x1":
        if (n === "x") return this.flipX ? -1 : 1;
        if (n === "y") return 0;
        break;
      case "x2":
        if (n === "x") return this.flipX ? 1 : -1;
        if (n === "y") return 0;
        break;
    }
    return 0;
  }
  getRectangleCoordinate(t, n, i, s) {
    let r;
    if (n === "x") {
      let o;
      switch (i) {
        case "center":
          o = this.xPositionScale(t.x + t.l / 2), s && (o += s);
          break;
        case "right":
          o = this.xPositionScale(t.x + t.l), s && (o -= s);
          break;
        case "left":
        default:
          o = this.xPositionScale(this.flipX ? t.x - t.l : t.x), s && (o -= s);
      }
      r = o;
    } else if (n === "y") {
      let o;
      switch (i) {
        case "center":
          o = this.yPositionScale(t.y + t.w / 2), s && (o += s);
          break;
        case "bottom":
          o = this.yPositionScale(this.flipY ? t.y + t.w : t.y), s && (o += s);
          break;
        case "top":
        default:
          o = this.yPositionScale(this.flipY ? t.y : t.y + t.w), s && (o -= s);
      }
      r = o;
    }
    return r;
  }
  getRotatedSide(t) {
    switch (t) {
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
    if (!this.shapes) return !1;
    this.shapes.attr("x", (t) => this.getRectangleCoordinate(t, "x")).attr("y", (t) => this.getRectangleCoordinate(t, "y")).attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t)), this.main && (this.shapeIDText.attr("x", (t) => this.getRectangleCoordinate(
      t,
      "x",
      "center"
    )).attr("y", (t) => this.getRectangleCoordinate(
      t,
      "y",
      "center"
    )).attr("dy", 1), this.shapeNameText && this.shapeNameText.attr("x", (t) => this.getRectangleCoordinate(
      t,
      "x",
      "center"
    )).attr("y", (t, n, i) => this.getRectangleCoordinate(
      t,
      "y",
      "bottom",
      -(i[n].getBBox().height / 2 + 1)
    )), this.shapeLengthText.attr("x", (t) => this.getRectangleCoordinate(
      t,
      "x",
      "center"
    )).attr("y", (t, n, i) => this.getRectangleCoordinate(
      t,
      "y",
      "top",
      -(i[n].getBBox().height / 2 + 2)
    )), this.shapeWidthText.attr(
      "transform",
      (t, n, i) => `translate(${this.getRectangleCoordinate(
        t,
        "x",
        "left",
        -(i[n].getBBox().height / 2 + 2)
      )},${this.getRectangleCoordinate(
        t,
        "y",
        "center"
      )}) ${this.device === "mobile" ? "rotate(90)" : "rotate(-90)"}`
    ));
  }
  //init or update the cuts
  initCuts(t) {
    if (!t || !(t != null && t.length) || !this.main || !this.elWidth)
      return !1;
    this.resetCuts(), this.cuts = this.cutGroup.selectAll("line").data(t).join("line").attr("class", "cut").attr("stroke-width", (n) => {
      const i = this.measurementScale(this.getBladeWidth(n.stock));
      return i < 1 ? 1 : Math.ceil(i);
    }).attr("x1", (n) => this.xPositionScale(n.getVisCoords("x1"))).attr("x2", (n) => this.xPositionScale(n.getVisCoords("x2"))).attr("y1", (n) => this.yPositionScale(n.getVisCoords("y1"))).attr("y2", (n) => this.yPositionScale(n.getVisCoords("y2"))).classed("trim", (n) => n.isTrim);
  }
  //init or update the segments
  initSegments(t) {
    if (!t || !(t != null && t.length) || !this.main || !this.elWidth)
      return !1;
    this.resetSegments(), this.segments = this.segmentGroup.selectAll("rect").data(t).join("rect").attr("class", "segment").style("opacity", (n) => {
      if ((n == null ? void 0 : n.offcut) === !0) return 0.5;
    }).classed("offcut", (n) => n.offcut).classed("merged", (n) => n.merged).classed("near", (n) => n.shapePosition === "near").classed("far", (n) => n.shapePosition === "far").classed("completed", (n) => n.completed).attr("x", (n) => this.getRectangleCoordinate(n, "x")).attr("y", (n) => this.getRectangleCoordinate(n, "y")).attr("width", (n) => this.getWidthAttribute(n)).attr("height", (n) => this.getHeightAttribute(n)), !this.app && this.env === "development" && (this.segments.on("mousedown", function(n, i) {
      const s = structuredClone(i);
      console.log([
        "id",
        "x",
        "y",
        "l",
        "w",
        "cutDirection",
        "cutPreference"
      ].reduce((o, a) => (o[a] = _d(s, a), o), {}));
    }), this.hasTouch || this.segments.on(
      "mouseover",
      function() {
        he.select(this).classed("hover", !0);
      },
      {
        passive: !0
      }
    ).on(
      "mouseout",
      function() {
        he.select(this).classed("hover", !1);
      },
      {
        passive: !0
      }
    ));
  }
  initGroups(t) {
    if (!t || !(t != null && t.length) || !this.main || !this.elWidth)
      return !1;
    this.resetGroups(), this.groups = this.groupGroup.selectAll("rect").data(t).join("rect").attr("class", "group").attr("x", (n) => this.getRectangleCoordinate(n, "x")).attr("y", (n) => this.getRectangleCoordinate(n, "y")).attr("width", (n) => this.getWidthAttribute(n)).attr("height", (n) => this.getHeightAttribute(n)), this.groupGroup.attr("display", "block");
  }
  //get relevant segments for a specific cut
  getCutSegments(t) {
    var o, a, l, u;
    const n = (o = t == null ? void 0 : t.guillotineData) == null ? void 0 : o.parentSegmentID, i = ((l = (a = this.vueComponent) == null ? void 0 : a.gs) == null ? void 0 : l.activeSegments) ?? ((u = this.vueComponent) == null ? void 0 : u.activeSegments);
    if (!i.length) return !1;
    const s = i.find((c) => c.id === n);
    if (s === void 0) return !1;
    const r = s == null ? void 0 : s.children;
    if (r != null && r.length) {
      const c = r.map((h) => {
        const d = i.find((p) => p.x === h.x && p.y === h.y && p.l === h.l && p.w === h.w);
        return d !== void 0 ? d : null;
      }).filter((h) => h !== null);
      return {
        main: s,
        siblings: c
      };
    }
    return !1;
  }
  /**
      * toggle the visibility of the segments
      * @param {Boolean} show
      */
  toggleSegments(t = !0) {
    t ? this.segmentGroup.attr("display", "block") : this.segmentGroup.attr("display", "none");
  }
  /**
      * show a list of possible movement positions
      */
  initPositions(t, n) {
    if (!n || !t || !this.main) return !1;
    let i;
    if (n.trimDimensions(), !t.willItFit(n, t.rot)) return !1;
    n.removeTrim();
    const s = Ce.call(this.vueComponent, ["shapeList"]).filter((a) => {
      var l;
      return a.added && ((l = a == null ? void 0 : a.stock) == null ? void 0 : l.id) === n.id;
    }), r = FT(
      null,
      s,
      n
    ), o = new ma();
    r.toArray().forEach((a) => {
      o.addPoints($T(
        t,
        a,
        n
      ).toArray());
    }), n.cutType === "efficiency" ? ([
      new qe(0 + (n.trim.x1 ?? 0), 0 + (n.trim.y1 ?? 0)),
      new qe(0 + (n.trim.x1 ?? 0), 0 + (n.trim.y1 ?? 0)),
      new qe(
        n.l - t.l - (n.trim.x2 ?? 0),
        0 + (n.trim.y1 ?? 0)
      ),
      new qe(
        0 + (n.trim.x1 ?? 0),
        n.w - t.w - (n.trim.y2 ?? 0)
      ),
      new qe(
        n.l - t.l - (n.trim.x2 ?? 0),
        n.w - t.w - (n.trim.y2 ?? 0)
      )
    ].forEach((a) => o.addPoint(a)), i = o.toArray()) : (o.addPoint(new qe(0 + (n.trim.x1 ?? 0), 0 + (n.trim.y1 ?? 0))), i = o.toArray());
    for (let a = i.length; a--; ) {
      t.x = i[a].x, t.y = i[a].y;
      for (let l = s.length; l--; )
        if (this.collision(
          t,
          s[l],
          n
        )) {
          i.splice(a, 1);
          break;
        }
    }
    return this.positionGroup.selectAll("rect").data(i).join("rect").attr("data-id", (a, l) => l).attr("class", "shape ghost").attr("x", (a) => (t.x = a.x, this.getRectangleCoordinate(t, "x"))).attr("y", (a) => (t.y = a.y, this.getRectangleCoordinate(t, "y"))).attr("width", this.getWidthAttribute(t)).attr("height", this.getHeightAttribute(t)).on("mousedown", (a, l) => {
      a.stopPropagation();
      const u = Gi.call(this.vueComponent, "partsBin");
      u && u.moveShape(
        a.currentTarget,
        t,
        l
      );
    }), this.hasTouch || this.positionGroup.selectAll("rect").on(
      "mouseover",
      function(a) {
        a.stopPropagation(), he.select(this).classed("hover", !0), he.select(this).raise();
      },
      {
        passive: !0
      }
    ).on(
      "mouseout",
      function(a) {
        a.stopPropagation(), he.select(this).classed("hover", !1);
      },
      {
        passive: !0
      }
    ), this.dotGroup.selectAll("circle").data(i).join("circle").attr("data-id", (a, l) => l).attr("class", "dot").attr("cx", (a) => (t.x = a.x, this.getRectangleCoordinate(t, "x"))).attr("cy", (a) => (t.y = a.y, this.getRectangleCoordinate(t, "y"))).attr("r", 8).on("mousedown", (a, l) => {
      a.stopPropagation();
      const u = Gi.call(this.vueComponent, "partsBin");
      u && u.moveShape(
        a.currentTarget,
        t,
        l
      );
    }), t.x = 0, t.y = 0, this.hasTouch || this.dotGroup.selectAll("circle").on(
      "mouseover",
      function(a) {
        a.stopPropagation(), he.select(this).classed("hover", !0);
        const l = he.select(this).attr("data-id"), u = he.select(`.ghost[data-id="${l}"]`);
        u.raise(), u.classed("highlight", !0);
      },
      {
        passive: !0
      }
    ).on(
      "mouseout",
      function(a) {
        a.stopPropagation(), he.select(this).classed("hover", !1);
        const l = he.select(this).attr("data-id");
        he.select(`.ghost[data-id="${l}"]`).classed(
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
      * show a list of placement positions
      */
  initPlacementPositions(t) {
    if (!(this.env !== "development" || this.debug !== "positions")) {
      if (!(t != null && t.length)) return !1;
      this.placementPositionGroup.selectAll("circle").data(t).join("circle").attr("data-id", (n, i) => i).attr("class", "dot").attr("cx", (n) => this.xPositionScale(n.x)).attr("cy", (n) => this.yPositionScale(n.y)).attr("r", 3).on("mousedown", (n, i) => {
        n.stopPropagation(), console.log(i);
      });
    }
  }
  /**
      * toggle the visibility of the cuts
      * @param {Boolean} show
      */
  toggleCuts(t = !0) {
    t ? this.cutGroup.attr("display", "block") : this.cutGroup.attr("display", "none");
  }
  clearSelection() {
    var t;
    this != null && this.shapes && (this.shapes.classed("selected", !1), this.shapes.classed("hover", !1), this.shapes.style("fill", (n) => this.getShapeColor(n))), this != null && this.cuts && (this.cuts.classed("selected", !1), this.cuts.classed("highlight", !1), this.cuts.classed("inside-segment", !1), this.cuts.style("visibility", "visible"), this.cuts.attr("stroke-width", (n) => Math.ceil(this.measurementScale(this.getBladeWidth(n.stock))))), (t = this == null ? void 0 : this.shapes) != null && t.length && this.shapes.classed("selected", !1);
  }
  /**
      * add padding
      * this.padding will be 0 when necessary
      * @param {number} value
      */
  addPadding(t) {
    return t + this.padding;
  }
  /**
      * @param {Container} container
      * @returns {number} blade width
      */
  getBladeWidth(t = null) {
    var n, i;
    return $((n = this == null ? void 0 : this.saw) == null ? void 0 : n.bladeWidth) ? (i = this.saw) == null ? void 0 : i.bladeWidth : $(t) && t !== null ? t.getBladeWidth() : 0;
  }
  getHalfBladeWidth(t = null) {
    const n = this.getBladeWidth(t);
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
  resetGroups() {
    this.groupGroup && this.groupGroup.selectAll("*").remove();
  }
  resetCutMeasurementAxes() {
    var t, n;
    (t = this.cutMeasurementXAxes) != null && t.length && (this.cutMeasurementXAxes.forEach((i) => i.remove()), this.cutMeasurementXAxes.length = 0), (n = this.cutMeasurementYAxes) != null && n.length && (this.cutMeasurementYAxes.forEach((i) => i.remove()), this.cutMeasurementYAxes.length = 0);
  }
  resetPositions() {
    this.positionGroup && this.positionGroup.selectAll("*").remove(), this.dotGroup && this.dotGroup.selectAll("*").remove();
  }
  resetPlacementPositions() {
    this.placementPositionGroup && this.dotGroup.selectAll("*").remove();
  }
  reset() {
    this.resetPositions(), this.resetPlacementPositions(), this.resetShapes(), this.resetStock(), this.resetCuts(), this.resetSegments();
  }
  /**
      * detect collision - required for move mode
      * @param {object} thisShape
      * @param {object} testShape
      * @param {object} container
      * @returns {boolean} true if collision
      */
  collision(t, n, i) {
    if (t.id === n.id)
      throw new Error("collision comparing to self");
    return (
      // 1 left
      t.x < n.x + n.l + this.getBladeWidth(i) && // 2 right
      t.x + t.l + this.getBladeWidth(i) > n.x && // 3 bottom
      t.y < n.y + n.w + this.getBladeWidth(i) && // 4 top
      t.y + t.w + this.getBladeWidth(i) > n.y
    );
  }
}
function _d(e, t) {
  return t.split(".").reduce((n, i) => n[i], e);
}
function be(e, t, n = null) {
  var i;
  if (!(e != null && e[0])) return !1;
  switch (n) {
    case "shallow":
      t = Fn(t);
      break;
    case "raw":
      t = jo(t);
      break;
  }
  return typeof ((i = this == null ? void 0 : this.gs) == null ? void 0 : i[e[0]]) < "u" ? Ah(
    this.gs,
    e,
    t
  ) : typeof (this == null ? void 0 : this[e[0]]) < "u" && Ah(
    this,
    e,
    t
  ), !0;
}
function Ce(e) {
  var t;
  if (!(e != null && e[0])) return null;
  if ("gs" in this && typeof ((t = this == null ? void 0 : this.gs) == null ? void 0 : t[e[0]]) < "u")
    return uo(this.gs, e);
  if (typeof (this == null ? void 0 : this[e[0]]) < "u") return uo(this, e);
}
function YI(e) {
  var t;
  if (!(e != null && e[0])) return null;
  if ("optionsStore" in this && typeof ((t = this == null ? void 0 : this.optionsStore) == null ? void 0 : t[e[0]]) < "u")
    return uo(this.optionsStore, e);
  if (typeof (this == null ? void 0 : this[e[0]]) < "u") return uo(this, e);
}
function Va(e) {
  e.queue = 0, e.stockCount = 0, e.shapeCount = 0, e.resultCount = 0, e.complete = !1;
}
function qT(e, t = null) {
  var n, i;
  typeof ((n = this.$refs) == null ? void 0 : n[e]) > "u" || ((i = this.$refs) == null ? void 0 : i[e]) === null || (t !== null ? this.$refs[e].visible = t : this.$refs[e].visible = !this.$refs[e].visible);
}
function UT(e, t) {
  return e != null && e.length ? e.find((n) => n.id === t) : null;
}
function WT(e, t) {
  if (!(e != null && e.length) || !t) return [];
  const n = e.filter((i) => {
    var s, r;
    return (((s = i == null ? void 0 : i.stock) == null ? void 0 : s.id) ?? (i == null ? void 0 : i.stockId)) === t.id && !((r = i == null ? void 0 : i.guillotineData) != null && r.ptxDummyCut);
  });
  return n.sort((i, s) => {
    var r, o;
    return ((r = i == null ? void 0 : i.guillotineData) == null ? void 0 : r.order) - ((o = s == null ? void 0 : s.guillotineData) == null ? void 0 : o.order);
  }), n;
}
function VT(e) {
  return e != null && e.length ? e.filter((t) => t.used === !0) : [];
}
function zT(e = {
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
  if (this.visInit) return !1;
  this.vis = jo(new jT(e)), this.vis.initStock(this.activeStock), this.vis.initShapes(this.activeShapes, this.shapeList), this.vis.initCuts(this.activeCuts, this.activeStock), this.visInit = !0;
}
function GT(e = !1) {
  var s;
  let t = ((s = this == null ? void 0 : this.gs) == null ? void 0 : s.inputStock) || (this == null ? void 0 : this.inputStock);
  if (!(t != null && t.length)) return ["No stock input"];
  const n = Ce.call(this, ["stockList"]);
  n && (n.length = 0);
  const i = [];
  e && (t = [t[0]]);
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    !(o != null && o.q) && !o.autoAdd && !e || i.push(...this.createStock(o, r));
  }
  return i;
}
function HT(e = 0) {
  var i, s, r, o;
  if (this.thinking) return !1;
  this.thinking = !0, this.success = !1;
  const t = [];
  if (t.push(...QT.call(this)), t.length) {
    this.showMessage({
      heading: "Part issue",
      main: "Issue with part inputs:",
      list: t.slice(0, 5)
    }), this.thinking = !1;
    return;
  }
  if (this.reset(), t.push(...this.createStockList()), t.length) {
    this.showMessage({
      heading: `Stock issue${t.length > 1 ? "s" : ""}`,
      main: `${t.length} issue${t.length > 1 ? "s" : ""} found with stock inputs`,
      list: t.slice(0, 5)
    }), this.thinking = !1;
    return;
  }
  if (t.push(...this.createShapeList(e)), t.length) {
    this.showMessage({
      heading: "Part issue",
      main: "Issue with part inputs:",
      list: t.slice(0, 5)
    }), this.thinking = !1;
    return;
  }
  const n = new zn(
    this.saw,
    ((i = this.saw) == null ? void 0 : i.stockType) ?? ((s = this.stockList) == null ? void 0 : s[0].type)
  );
  if (n.issues.length) {
    this.showMessage({
      heading: `Saw issue${n.issues.length > 1 ? "s" : ""}`,
      main: `${n.issues.length} issue${n.issues.length > 1 ? "s" : ""} found with saw inputs:`,
      list: n.issues.slice(0, 5)
    }), this.thinking = !1;
    return;
  }
  if (this.saw = n, !((r = this.stockList) != null && r.length)) {
    this.showMessage({
      heading: "No stock",
      main: "No stock items were found."
    }), this.thinking = !1;
    return;
  }
  if (!((o = this.shapeList) != null && o.length)) {
    this.showMessage({
      heading: "No parts",
      main: "No parts in list."
    }), this.thinking = !1;
    return;
  }
  this.debug && console.log(
    "SmartCut - calculating",
    this.stockList.map((a) => a.getDimensions()),
    this.shapeList.map((a) => a.getDimensions())
  ), this.socket.connect(), this.socket.compress(!0).emit(
    "calculate",
    {
      inputs: {
        shapeList: this.inputShapes,
        stockList: this.inputStock,
        saw: this.saw
      },
      saw: this.saw,
      shapeList: this.shapeList,
      stockList: this.stockList,
      enableEvo: this.enableEvo,
      domain: this.domain
    }
  );
}
function KT() {
  const e = Ce.call(this, ["vis"]);
  if (!e) return;
  const t = Ce.call(this, ["shapeList"]);
  if (!(t != null && t.length)) return !1;
  e.resetPositions(), e.resetShapes();
  const n = Ce.call(this, ["activeShapes"]);
  e.initShapes(n, t);
  const i = Gi.call(this, "PartsBin");
  i && i.clear(!1);
}
function YT() {
  const e = Ce.call(this, ["vis"]);
  if (!e) return;
  const t = Ce.call(this, ["stockList"]);
  if (!(t != null && t.length)) return !1;
  const n = Ce.call(this, ["activeStock"]);
  e.initStock(n);
  const i = Ce.call(this, ["activeCuts"]);
  e.initCuts(i);
  const s = Ce.call(this, ["activeSegments"]);
  e.initSegments(s), e.resetPositions(), typeof this.toggleSegments == "function" && this.toggleSegments(!1), this != null && this.cutMode && (this == null || this.showCut(0));
}
function XT() {
  var t;
  const e = ((t = this == null ? void 0 : this.gs) == null ? void 0 : t.vis) ?? (this == null ? void 0 : this.vis);
  e && (e.clearSelection(), e.resetShapeAxes(), e.resetCutMeasurementAxes(), e.resetPositions());
}
function JT(e) {
  Ce.call(this, ["examineShape"]) && (this.examineShape = null), be.call(
    this,
    ["activeStockId"],
    e
  );
}
function QT() {
  var i;
  const e = [], t = ((i = this == null ? void 0 : this.gs) == null ? void 0 : i.inputShapes) ?? (this == null ? void 0 : this.inputShapes);
  t.length || e.push("No parts found");
  const n = UE(t);
  return (!(t != null && t.length) || !n) && e.push("No quantity of parts found"), e;
}
function Gi(e, t = 0) {
  var s;
  let n = this;
  for (let r = 0; r < t; r++) {
    if (!n.$parent)
      return null;
    n = n.$parent;
  }
  const i = (s = n == null ? void 0 : n.$refs) == null ? void 0 : s[e];
  return i || null;
}
function ZT(e) {
  if (e === !1 && this.allowOnlineMessages) {
    const t = {
      heading: "Offline",
      main: "<p>Looks like you have just gone offline.</p><p>Calculations are disabled for now.</p>"
    };
    typeof this.showModalMessage == "function" && this.showModalMessage(t), this.allowOnlineMessages = !1, this.onlineTimer = setTimeout(() => {
      this.allowOnlineMessages = !0;
    }, 3e4);
  }
}
function eA(e) {
  return vp() ? (Vb(e), !0) : !1;
}
function ju(e) {
  return typeof e == "function" ? e() : Rp(e);
}
const tA = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const nA = Object.prototype.toString, iA = (e) => nA.call(e) === "[object Object]", sA = () => {
};
function rA(e, t) {
  function n(...i) {
    return new Promise((s, r) => {
      Promise.resolve(e(() => t.apply(this, i), { fn: t, thisArg: this, args: i })).then(s).catch(r);
    });
  }
  return n;
}
const Py = (e) => e();
function oA(e = Py) {
  const t = Ui(!0);
  function n() {
    t.value = !1;
  }
  function i() {
    t.value = !0;
  }
  const s = (...r) => {
    t.value && e(...r);
  };
  return { isActive: kc(t), pause: n, resume: i, eventFilter: s };
}
function aA(e) {
  return Ho();
}
function lA(e, t, n = {}) {
  const {
    eventFilter: i = Py,
    ...s
  } = n;
  return kn(
    e,
    rA(
      i,
      t
    ),
    s
  );
}
function cA(e, t, n = {}) {
  const {
    eventFilter: i,
    ...s
  } = n, { eventFilter: r, pause: o, resume: a, isActive: l } = oA(i);
  return { stop: lA(
    e,
    t,
    {
      ...s,
      eventFilter: r
    }
  ), pause: o, resume: a, isActive: l };
}
function uA(e, t = !0, n) {
  aA() ? Oc(e, n) : t ? e() : qo(e);
}
function fA(e) {
  var t;
  const n = ju(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Po = tA ? window : void 0;
function xd(...e) {
  let t, n, i, s;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, i, s] = e, t = Po) : [t, n, i, s] = e, !t)
    return sA;
  Array.isArray(n) || (n = [n]), Array.isArray(i) || (i = [i]);
  const r = [], o = () => {
    r.forEach((c) => c()), r.length = 0;
  }, a = (c, f, h, d) => (c.addEventListener(f, h, d), () => c.removeEventListener(f, h, d)), l = kn(
    () => [fA(t), ju(s)],
    ([c, f]) => {
      if (o(), !c)
        return;
      const h = iA(f) ? { ...f } : f;
      r.push(
        ...n.flatMap((d) => i.map((p) => a(c, d, p, h)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    l(), o();
  };
  return eA(u), u;
}
const Or = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Pr = "__vueuse_ssr_handlers__", hA = /* @__PURE__ */ dA();
function dA() {
  return Pr in Or || (Or[Pr] = Or[Pr] || {}), Or[Pr];
}
function pA(e, t) {
  return hA[e] || t;
}
function gA(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const mA = {
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
}, Sd = "vueuse-storage";
function yA(e, t, n, i = {}) {
  var s;
  const {
    flush: r = "pre",
    deep: o = !0,
    listenToStorageChanges: a = !0,
    writeDefaults: l = !0,
    mergeDefaults: u = !1,
    shallow: c,
    window: f = Po,
    eventFilter: h,
    onError: d = (G) => {
      console.error(G);
    },
    initOnMounted: p
  } = i, y = (c ? Fn : Ui)(typeof t == "function" ? t() : t);
  if (!n)
    try {
      n = pA("getDefaultStorage", () => {
        var G;
        return (G = Po) == null ? void 0 : G.localStorage;
      })();
    } catch (G) {
      d(G);
    }
  if (!n)
    return y;
  const w = ju(t), S = gA(w), k = (s = i.serializer) != null ? s : mA[S], { pause: b, resume: C } = cA(
    y,
    () => I(y.value),
    { flush: r, deep: o, eventFilter: h }
  );
  f && a && uA(() => {
    xd(f, "storage", D), xd(f, Sd, W), p && D();
  }), p || D();
  function A(G, z) {
    f && f.dispatchEvent(new CustomEvent(Sd, {
      detail: {
        key: e,
        oldValue: G,
        newValue: z,
        storageArea: n
      }
    }));
  }
  function I(G) {
    try {
      const z = n.getItem(e);
      if (G == null)
        A(z, null), n.removeItem(e);
      else {
        const X = k.write(G);
        z !== X && (n.setItem(e, X), A(z, X));
      }
    } catch (z) {
      d(z);
    }
  }
  function P(G) {
    const z = G ? G.newValue : n.getItem(e);
    if (z == null)
      return l && w != null && n.setItem(e, k.write(w)), w;
    if (!G && u) {
      const X = k.read(z);
      return typeof u == "function" ? u(X, w) : S === "object" && !Array.isArray(X) ? { ...w, ...X } : X;
    } else return typeof z != "string" ? z : k.read(z);
  }
  function D(G) {
    if (!(G && G.storageArea !== n)) {
      if (G && G.key == null) {
        y.value = w;
        return;
      }
      if (!(G && G.key !== e)) {
        b();
        try {
          (G == null ? void 0 : G.newValue) !== k.write(y.value) && (y.value = P(G));
        } catch (z) {
          d(z);
        } finally {
          G ? qo(C) : C();
        }
      }
    }
  }
  function W(G) {
    D(G.detail);
  }
  return y;
}
function kd(e, t, n = {}) {
  const { window: i = Po } = n;
  return yA(e, t, i == null ? void 0 : i.localStorage, n);
}
const fn = /* @__PURE__ */ Object.create(null);
fn.open = "0";
fn.close = "1";
fn.ping = "2";
fn.pong = "3";
fn.message = "4";
fn.upgrade = "5";
fn.noop = "6";
const Hr = /* @__PURE__ */ Object.create(null);
Object.keys(fn).forEach((e) => {
  Hr[fn[e]] = e;
});
const Gl = { type: "error", data: "parser error" }, Ny = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Iy = typeof ArrayBuffer == "function", My = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, qu = ({ type: e, data: t }, n, i) => Ny && t instanceof Blob ? n ? i(t) : Ed(t, i) : Iy && (t instanceof ArrayBuffer || My(t)) ? n ? i(t) : Ed(new Blob([t]), i) : i(fn[e] + (t || "")), Ed = (e, t) => {
  const n = new FileReader();
  return n.onload = function() {
    const i = n.result.split(",")[1];
    t("b" + (i || ""));
  }, n.readAsDataURL(e);
};
function Cd(e) {
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let za;
function bA(e, t) {
  if (Ny && e.data instanceof Blob)
    return e.data.arrayBuffer().then(Cd).then(t);
  if (Iy && (e.data instanceof ArrayBuffer || My(e.data)))
    return t(Cd(e.data));
  qu(e, !1, (n) => {
    za || (za = new TextEncoder()), t(za.encode(n));
  });
}
const Td = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ts = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < Td.length; e++)
  Ts[Td.charCodeAt(e)] = e;
const wA = (e) => {
  let t = e.length * 0.75, n = e.length, i, s = 0, r, o, a, l;
  e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
  const u = new ArrayBuffer(t), c = new Uint8Array(u);
  for (i = 0; i < n; i += 4)
    r = Ts[e.charCodeAt(i)], o = Ts[e.charCodeAt(i + 1)], a = Ts[e.charCodeAt(i + 2)], l = Ts[e.charCodeAt(i + 3)], c[s++] = r << 2 | o >> 4, c[s++] = (o & 15) << 4 | a >> 2, c[s++] = (a & 3) << 6 | l & 63;
  return u;
}, vA = typeof ArrayBuffer == "function", Uu = (e, t) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: Ly(e, t)
    };
  const n = e.charAt(0);
  return n === "b" ? {
    type: "message",
    data: _A(e.substring(1), t)
  } : Hr[n] ? e.length > 1 ? {
    type: Hr[n],
    data: e.substring(1)
  } : {
    type: Hr[n]
  } : Gl;
}, _A = (e, t) => {
  if (vA) {
    const n = wA(e);
    return Ly(n, t);
  } else
    return { base64: !0, data: e };
}, Ly = (e, t) => {
  switch (t) {
    case "blob":
      return e instanceof Blob ? e : new Blob([e]);
    case "arraybuffer":
    default:
      return e instanceof ArrayBuffer ? e : e.buffer;
  }
}, Dy = "", xA = (e, t) => {
  const n = e.length, i = new Array(n);
  let s = 0;
  e.forEach((r, o) => {
    qu(r, !1, (a) => {
      i[o] = a, ++s === n && t(i.join(Dy));
    });
  });
}, SA = (e, t) => {
  const n = e.split(Dy), i = [];
  for (let s = 0; s < n.length; s++) {
    const r = Uu(n[s], t);
    if (i.push(r), r.type === "error")
      break;
  }
  return i;
};
function kA() {
  return new TransformStream({
    transform(e, t) {
      bA(e, (n) => {
        const i = n.length;
        let s;
        if (i < 126)
          s = new Uint8Array(1), new DataView(s.buffer).setUint8(0, i);
        else if (i < 65536) {
          s = new Uint8Array(3);
          const r = new DataView(s.buffer);
          r.setUint8(0, 126), r.setUint16(1, i);
        } else {
          s = new Uint8Array(9);
          const r = new DataView(s.buffer);
          r.setUint8(0, 127), r.setBigUint64(1, BigInt(i));
        }
        e.data && typeof e.data != "string" && (s[0] |= 128), t.enqueue(s), t.enqueue(n);
      });
    }
  });
}
let Ga;
function Nr(e) {
  return e.reduce((t, n) => t + n.length, 0);
}
function Ir(e, t) {
  if (e[0].length === t)
    return e.shift();
  const n = new Uint8Array(t);
  let i = 0;
  for (let s = 0; s < t; s++)
    n[s] = e[0][i++], i === e[0].length && (e.shift(), i = 0);
  return e.length && i < e[0].length && (e[0] = e[0].slice(i)), n;
}
function EA(e, t) {
  Ga || (Ga = new TextDecoder());
  const n = [];
  let i = 0, s = -1, r = !1;
  return new TransformStream({
    transform(o, a) {
      for (n.push(o); ; ) {
        if (i === 0) {
          if (Nr(n) < 1)
            break;
          const l = Ir(n, 1);
          r = (l[0] & 128) === 128, s = l[0] & 127, s < 126 ? i = 3 : s === 126 ? i = 1 : i = 2;
        } else if (i === 1) {
          if (Nr(n) < 2)
            break;
          const l = Ir(n, 2);
          s = new DataView(l.buffer, l.byteOffset, l.length).getUint16(0), i = 3;
        } else if (i === 2) {
          if (Nr(n) < 8)
            break;
          const l = Ir(n, 8), u = new DataView(l.buffer, l.byteOffset, l.length), c = u.getUint32(0);
          if (c > Math.pow(2, 21) - 1) {
            a.enqueue(Gl);
            break;
          }
          s = c * Math.pow(2, 32) + u.getUint32(4), i = 3;
        } else {
          if (Nr(n) < s)
            break;
          const l = Ir(n, s);
          a.enqueue(Uu(r ? l : Ga.decode(l), t)), i = 0;
        }
        if (s === 0 || s > e) {
          a.enqueue(Gl);
          break;
        }
      }
    }
  });
}
const Ry = 4;
function ze(e) {
  if (e) return CA(e);
}
function CA(e) {
  for (var t in ze.prototype)
    e[t] = ze.prototype[t];
  return e;
}
ze.prototype.on = ze.prototype.addEventListener = function(e, t) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this;
};
ze.prototype.once = function(e, t) {
  function n() {
    this.off(e, n), t.apply(this, arguments);
  }
  return n.fn = t, this.on(e, n), this;
};
ze.prototype.off = ze.prototype.removeListener = ze.prototype.removeAllListeners = ze.prototype.removeEventListener = function(e, t) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var n = this._callbacks["$" + e];
  if (!n) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + e], this;
  for (var i, s = 0; s < n.length; s++)
    if (i = n[s], i === t || i.fn === t) {
      n.splice(s, 1);
      break;
    }
  return n.length === 0 && delete this._callbacks["$" + e], this;
};
ze.prototype.emit = function(e) {
  this._callbacks = this._callbacks || {};
  for (var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], i = 1; i < arguments.length; i++)
    t[i - 1] = arguments[i];
  if (n) {
    n = n.slice(0);
    for (var i = 0, s = n.length; i < s; ++i)
      n[i].apply(this, t);
  }
  return this;
};
ze.prototype.emitReserved = ze.prototype.emit;
ze.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
ze.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const It = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
function Fy(e, ...t) {
  return t.reduce((n, i) => (e.hasOwnProperty(i) && (n[i] = e[i]), n), {});
}
const TA = It.setTimeout, AA = It.clearTimeout;
function ya(e, t) {
  t.useNativeTimers ? (e.setTimeoutFn = TA.bind(It), e.clearTimeoutFn = AA.bind(It)) : (e.setTimeoutFn = It.setTimeout.bind(It), e.clearTimeoutFn = It.clearTimeout.bind(It));
}
const OA = 1.33;
function PA(e) {
  return typeof e == "string" ? NA(e) : Math.ceil((e.byteLength || e.size) * OA);
}
function NA(e) {
  let t = 0, n = 0;
  for (let i = 0, s = e.length; i < s; i++)
    t = e.charCodeAt(i), t < 128 ? n += 1 : t < 2048 ? n += 2 : t < 55296 || t >= 57344 ? n += 3 : (i++, n += 4);
  return n;
}
function IA(e) {
  let t = "";
  for (let n in e)
    e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
  return t;
}
function MA(e) {
  let t = {}, n = e.split("&");
  for (let i = 0, s = n.length; i < s; i++) {
    let r = n[i].split("=");
    t[decodeURIComponent(r[0])] = decodeURIComponent(r[1]);
  }
  return t;
}
class LA extends Error {
  constructor(t, n, i) {
    super(t), this.description = n, this.context = i, this.type = "TransportError";
  }
}
class Wu extends ze {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(t) {
    super(), this.writable = !1, ya(this, t), this.opts = t, this.query = t.query, this.socket = t.socket;
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
  onError(t, n, i) {
    return super.emitReserved("error", new LA(t, n, i)), this;
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
  send(t) {
    this.readyState === "open" && this.write(t);
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
  onData(t) {
    const n = Uu(t, this.socket.binaryType);
    this.onPacket(n);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(t) {
    super.emitReserved("packet", t);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(t) {
    this.readyState = "closed", super.emitReserved("close", t);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(t) {
  }
  createUri(t, n = {}) {
    return t + "://" + this._hostname() + this._port() + this.opts.path + this._query(n);
  }
  _hostname() {
    const t = this.opts.hostname;
    return t.indexOf(":") === -1 ? t : "[" + t + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(t) {
    const n = IA(t);
    return n.length ? "?" + n : "";
  }
}
const $y = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), Hl = 64, DA = {};
let Ad = 0, Mr = 0, Od;
function Pd(e) {
  let t = "";
  do
    t = $y[e % Hl] + t, e = Math.floor(e / Hl);
  while (e > 0);
  return t;
}
function By() {
  const e = Pd(+/* @__PURE__ */ new Date());
  return e !== Od ? (Ad = 0, Od = e) : e + "." + Pd(Ad++);
}
for (; Mr < Hl; Mr++)
  DA[$y[Mr]] = Mr;
let jy = !1;
try {
  jy = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const RA = jy;
function qy(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || RA))
      return new XMLHttpRequest();
  } catch {
  }
  if (!t)
    try {
      return new It[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
function FA() {
}
const $A = function() {
  return new qy({
    xdomain: !1
  }).responseType != null;
}();
class BA extends Wu {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(t) {
    if (super(t), this.polling = !1, typeof location < "u") {
      const i = location.protocol === "https:";
      let s = location.port;
      s || (s = i ? "443" : "80"), this.xd = typeof location < "u" && t.hostname !== location.hostname || s !== t.port;
    }
    const n = t && t.forceBase64;
    this.supportsBinary = $A && !n, this.opts.withCredentials && (this.cookieJar = void 0);
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
  pause(t) {
    this.readyState = "pausing";
    const n = () => {
      this.readyState = "paused", t();
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
  onData(t) {
    const n = (i) => {
      if (this.readyState === "opening" && i.type === "open" && this.onOpen(), i.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(i);
    };
    SA(t, this.socket.binaryType).forEach(n), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const t = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? t() : this.once("open", t);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(t) {
    this.writable = !1, xA(t, (n) => {
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
    const t = this.opts.secure ? "https" : "http", n = this.query || {};
    return this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = By()), !this.supportsBinary && !n.sid && (n.b64 = 1), this.createUri(t, n);
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @private
   */
  request(t = {}) {
    return Object.assign(t, { xd: this.xd, cookieJar: this.cookieJar }, this.opts), new cn(this.uri(), t);
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(t, n) {
    const i = this.request({
      method: "POST",
      data: t
    });
    i.on("success", n), i.on("error", (s, r) => {
      this.onError("xhr post error", s, r);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const t = this.request();
    t.on("data", this.onData.bind(this)), t.on("error", (n, i) => {
      this.onError("xhr poll error", n, i);
    }), this.pollXhr = t;
  }
}
class cn extends ze {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(t, n) {
    super(), ya(this, n), this.opts = n, this.method = n.method || "GET", this.uri = t, this.data = n.data !== void 0 ? n.data : null, this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  create() {
    var t;
    const n = Fy(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    n.xdomain = !!this.opts.xd;
    const i = this.xhr = new qy(n);
    try {
      i.open(this.method, this.uri, !0);
      try {
        if (this.opts.extraHeaders) {
          i.setDisableHeaderCheck && i.setDisableHeaderCheck(!0);
          for (let s in this.opts.extraHeaders)
            this.opts.extraHeaders.hasOwnProperty(s) && i.setRequestHeader(s, this.opts.extraHeaders[s]);
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
      (t = this.opts.cookieJar) === null || t === void 0 || t.addCookies(i), "withCredentials" in i && (i.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (i.timeout = this.opts.requestTimeout), i.onreadystatechange = () => {
        var s;
        i.readyState === 3 && ((s = this.opts.cookieJar) === null || s === void 0 || s.parseCookies(i)), i.readyState === 4 && (i.status === 200 || i.status === 1223 ? this.onLoad() : this.setTimeoutFn(() => {
          this.onError(typeof i.status == "number" ? i.status : 0);
        }, 0));
      }, i.send(this.data);
    } catch (s) {
      this.setTimeoutFn(() => {
        this.onError(s);
      }, 0);
      return;
    }
    typeof document < "u" && (this.index = cn.requestsCount++, cn.requests[this.index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  onError(t) {
    this.emitReserved("error", t, this.xhr), this.cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  cleanup(t) {
    if (!(typeof this.xhr > "u" || this.xhr === null)) {
      if (this.xhr.onreadystatechange = FA, t)
        try {
          this.xhr.abort();
        } catch {
        }
      typeof document < "u" && delete cn.requests[this.index], this.xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  onLoad() {
    const t = this.xhr.responseText;
    t !== null && (this.emitReserved("data", t), this.emitReserved("success"), this.cleanup());
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
cn.requestsCount = 0;
cn.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Nd);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in It ? "pagehide" : "unload";
    addEventListener(e, Nd, !1);
  }
}
function Nd() {
  for (let e in cn.requests)
    cn.requests.hasOwnProperty(e) && cn.requests[e].abort();
}
const Vu = typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, n) => n(t, 0), Lr = It.WebSocket || It.MozWebSocket, Id = !0, jA = "arraybuffer", Md = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class qA extends Wu {
  /**
   * WebSocket transport constructor.
   *
   * @param {Object} opts - connection options
   * @protected
   */
  constructor(t) {
    super(t), this.supportsBinary = !t.forceBase64;
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check())
      return;
    const t = this.uri(), n = this.opts.protocols, i = Md ? {} : Fy(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (i.headers = this.opts.extraHeaders);
    try {
      this.ws = Id && !Md ? n ? new Lr(t, n) : new Lr(t) : new Lr(t, n, i);
    } catch (s) {
      return this.emitReserved("error", s);
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
    }, this.ws.onclose = (t) => this.onClose({
      description: "websocket connection closed",
      context: t
    }), this.ws.onmessage = (t) => this.onData(t.data), this.ws.onerror = (t) => this.onError("websocket error", t);
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const i = t[n], s = n === t.length - 1;
      qu(i, this.supportsBinary, (r) => {
        const o = {};
        try {
          Id && this.ws.send(r);
        } catch {
        }
        s && Vu(() => {
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
    const t = this.opts.secure ? "wss" : "ws", n = this.query || {};
    return this.opts.timestampRequests && (n[this.opts.timestampParam] = By()), this.supportsBinary || (n.b64 = 1), this.createUri(t, n);
  }
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @private
   */
  check() {
    return !!Lr;
  }
}
class UA extends Wu {
  get name() {
    return "webtransport";
  }
  doOpen() {
    typeof WebTransport == "function" && (this.transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]), this.transport.closed.then(() => {
      this.onClose();
    }).catch((t) => {
      this.onError("webtransport error", t);
    }), this.transport.ready.then(() => {
      this.transport.createBidirectionalStream().then((t) => {
        const n = EA(Number.MAX_SAFE_INTEGER, this.socket.binaryType), i = t.readable.pipeThrough(n).getReader(), s = kA();
        s.readable.pipeTo(t.writable), this.writer = s.writable.getWriter();
        const r = () => {
          i.read().then(({ done: a, value: l }) => {
            a || (this.onPacket(l), r());
          }).catch((a) => {
          });
        };
        r();
        const o = { type: "open" };
        this.query.sid && (o.data = `{"sid":"${this.query.sid}"}`), this.writer.write(o).then(() => this.onOpen());
      });
    }));
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const i = t[n], s = n === t.length - 1;
      this.writer.write(i).then(() => {
        s && Vu(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var t;
    (t = this.transport) === null || t === void 0 || t.close();
  }
}
const WA = {
  websocket: qA,
  webtransport: UA,
  polling: BA
}, VA = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, zA = [
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
function Kl(e) {
  if (e.length > 2e3)
    throw "URI too long";
  const t = e, n = e.indexOf("["), i = e.indexOf("]");
  n != -1 && i != -1 && (e = e.substring(0, n) + e.substring(n, i).replace(/:/g, ";") + e.substring(i, e.length));
  let s = VA.exec(e || ""), r = {}, o = 14;
  for (; o--; )
    r[zA[o]] = s[o] || "";
  return n != -1 && i != -1 && (r.source = t, r.host = r.host.substring(1, r.host.length - 1).replace(/;/g, ":"), r.authority = r.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), r.ipv6uri = !0), r.pathNames = GA(r, r.path), r.queryKey = HA(r, r.query), r;
}
function GA(e, t) {
  const n = /\/{2,9}/g, i = t.replace(n, "/").split("/");
  return (t.slice(0, 1) == "/" || t.length === 0) && i.splice(0, 1), t.slice(-1) == "/" && i.splice(i.length - 1, 1), i;
}
function HA(e, t) {
  const n = {};
  return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(i, s, r) {
    s && (n[s] = r);
  }), n;
}
let Uy = class Ri extends ze {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(t, n = {}) {
    super(), this.binaryType = jA, this.writeBuffer = [], t && typeof t == "object" && (n = t, t = null), t ? (t = Kl(t), n.hostname = t.host, n.secure = t.protocol === "https" || t.protocol === "wss", n.port = t.port, t.query && (n.query = t.query)) : n.host && (n.hostname = Kl(n.host).host), ya(this, n), this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:", n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = n.transports || [
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
    }, n), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = MA(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
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
  createTransport(t) {
    const n = Object.assign({}, this.opts.query);
    n.EIO = Ry, n.transport = t, this.id && (n.sid = this.id);
    const i = Object.assign({}, this.opts, {
      query: n,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[t]);
    return new WA[t](i);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  open() {
    let t;
    if (this.opts.rememberUpgrade && Ri.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
      t = "websocket";
    else if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else
      t = this.transports[0];
    this.readyState = "opening";
    try {
      t = this.createTransport(t);
    } catch {
      this.transports.shift(), this.open();
      return;
    }
    t.open(), this.setTransport(t);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(t) {
    this.transport && this.transport.removeAllListeners(), this.transport = t, t.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (n) => this.onClose("transport close", n));
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  probe(t) {
    let n = this.createTransport(t), i = !1;
    Ri.priorWebsocketSuccess = !1;
    const s = () => {
      i || (n.send([{ type: "ping", data: "probe" }]), n.once("packet", (f) => {
        if (!i)
          if (f.type === "pong" && f.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", n), !n)
              return;
            Ri.priorWebsocketSuccess = n.name === "websocket", this.transport.pause(() => {
              i || this.readyState !== "closed" && (c(), this.setTransport(n), n.send([{ type: "upgrade" }]), this.emitReserved("upgrade", n), n = null, this.upgrading = !1, this.flush());
            });
          } else {
            const h = new Error("probe error");
            h.transport = n.name, this.emitReserved("upgradeError", h);
          }
      }));
    };
    function r() {
      i || (i = !0, c(), n.close(), n = null);
    }
    const o = (f) => {
      const h = new Error("probe error: " + f);
      h.transport = n.name, r(), this.emitReserved("upgradeError", h);
    };
    function a() {
      o("transport closed");
    }
    function l() {
      o("socket closed");
    }
    function u(f) {
      n && f.name !== n.name && r();
    }
    const c = () => {
      n.removeListener("open", s), n.removeListener("error", o), n.removeListener("close", a), this.off("close", l), this.off("upgrading", u);
    };
    n.once("open", s), n.once("error", o), n.once("close", a), this.once("close", l), this.once("upgrading", u), this.upgrades.indexOf("webtransport") !== -1 && t !== "webtransport" ? this.setTimeoutFn(() => {
      i || n.open();
    }, 200) : n.open();
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    if (this.readyState = "open", Ri.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
      let t = 0;
      const n = this.upgrades.length;
      for (; t < n; t++)
        this.probe(this.upgrades[t]);
    }
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  onPacket(t) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", t), this.emitReserved("heartbeat"), this.resetPingTimeout(), t.type) {
        case "open":
          this.onHandshake(JSON.parse(t.data));
          break;
        case "ping":
          this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
          break;
        case "error":
          const n = new Error("server error");
          n.code = t.data, this.onError(n);
          break;
        case "message":
          this.emitReserved("data", t.data), this.emitReserved("message", t.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(t) {
    this.emitReserved("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.maxPayload = t.maxPayload, this.onOpen(), this.readyState !== "closed" && this.resetPingTimeout();
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
      const t = this.getWritablePackets();
      this.transport.send(t), this.prevBufferLen = t.length, this.emitReserved("flush");
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
      const s = this.writeBuffer[i].data;
      if (s && (n += PA(s)), i > 0 && n > this.maxPayload)
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
  write(t, n, i) {
    return this.sendPacket("message", t, n, i), this;
  }
  send(t, n, i) {
    return this.sendPacket("message", t, n, i), this;
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
  sendPacket(t, n, i, s) {
    if (typeof n == "function" && (s = n, n = void 0), typeof i == "function" && (s = i, i = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    i = i || {}, i.compress = i.compress !== !1;
    const r = {
      type: t,
      data: n,
      options: i
    };
    this.emitReserved("packetCreate", r), this.writeBuffer.push(r), s && this.once("flush", s), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const t = () => {
      this.onClose("forced close"), this.transport.close();
    }, n = () => {
      this.off("upgrade", n), this.off("upgradeError", n), t();
    }, i = () => {
      this.once("upgrade", n), this.once("upgradeError", n);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? i() : t();
    }) : this.upgrading ? i() : t()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  onError(t) {
    Ri.priorWebsocketSuccess = !1, this.emitReserved("error", t), this.onClose("transport error", t);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  onClose(t, n) {
    (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") && (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), typeof removeEventListener == "function" && (removeEventListener("beforeunload", this.beforeunloadEventListener, !1), removeEventListener("offline", this.offlineEventListener, !1)), this.readyState = "closed", this.id = null, this.emitReserved("close", t, n), this.writeBuffer = [], this.prevBufferLen = 0);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  filterUpgrades(t) {
    const n = [];
    let i = 0;
    const s = t.length;
    for (; i < s; i++)
      ~this.transports.indexOf(t[i]) && n.push(t[i]);
    return n;
  }
};
Uy.protocol = Ry;
function KA(e, t = "", n) {
  let i = e;
  n = n || typeof location < "u" && location, e == null && (e = n.protocol + "//" + n.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = n.protocol + e : e = n.host + e), /^(https?|wss?):\/\//.test(e) || (typeof n < "u" ? e = n.protocol + "//" + e : e = "https://" + e), i = Kl(e)), i.port || (/^(http|ws)$/.test(i.protocol) ? i.port = "80" : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")), i.path = i.path || "/";
  const r = i.host.indexOf(":") !== -1 ? "[" + i.host + "]" : i.host;
  return i.id = i.protocol + "://" + r + ":" + i.port + t, i.href = i.protocol + "://" + r + (n && n.port === i.port ? "" : ":" + i.port), i;
}
const YA = typeof ArrayBuffer == "function", XA = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, Wy = Object.prototype.toString, JA = typeof Blob == "function" || typeof Blob < "u" && Wy.call(Blob) === "[object BlobConstructor]", QA = typeof File == "function" || typeof File < "u" && Wy.call(File) === "[object FileConstructor]";
function zu(e) {
  return YA && (e instanceof ArrayBuffer || XA(e)) || JA && e instanceof Blob || QA && e instanceof File;
}
function Kr(e, t) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let n = 0, i = e.length; n < i; n++)
      if (Kr(e[n]))
        return !0;
    return !1;
  }
  if (zu(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return Kr(e.toJSON(), !0);
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && Kr(e[n]))
      return !0;
  return !1;
}
function ZA(e) {
  const t = [], n = e.data, i = e;
  return i.data = Yl(n, t), i.attachments = t.length, { packet: i, buffers: t };
}
function Yl(e, t) {
  if (!e)
    return e;
  if (zu(e)) {
    const n = { _placeholder: !0, num: t.length };
    return t.push(e), n;
  } else if (Array.isArray(e)) {
    const n = new Array(e.length);
    for (let i = 0; i < e.length; i++)
      n[i] = Yl(e[i], t);
    return n;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const n = {};
    for (const i in e)
      Object.prototype.hasOwnProperty.call(e, i) && (n[i] = Yl(e[i], t));
    return n;
  }
  return e;
}
function eO(e, t) {
  return e.data = Xl(e.data, t), delete e.attachments, e;
}
function Xl(e, t) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
      e[n] = Xl(e[n], t);
  else if (typeof e == "object")
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (e[n] = Xl(e[n], t));
  return e;
}
const tO = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], nO = 5;
var pe;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(pe || (pe = {}));
class iO {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(t) {
    this.replacer = t;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(t) {
    return (t.type === pe.EVENT || t.type === pe.ACK) && Kr(t) ? this.encodeAsBinary({
      type: t.type === pe.EVENT ? pe.BINARY_EVENT : pe.BINARY_ACK,
      nsp: t.nsp,
      data: t.data,
      id: t.id
    }) : [this.encodeAsString(t)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(t) {
    let n = "" + t.type;
    return (t.type === pe.BINARY_EVENT || t.type === pe.BINARY_ACK) && (n += t.attachments + "-"), t.nsp && t.nsp !== "/" && (n += t.nsp + ","), t.id != null && (n += t.id), t.data != null && (n += JSON.stringify(t.data, this.replacer)), n;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(t) {
    const n = ZA(t), i = this.encodeAsString(n.packet), s = n.buffers;
    return s.unshift(i), s;
  }
}
function Ld(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class Gu extends ze {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(t) {
    super(), this.reviver = t;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(t) {
    let n;
    if (typeof t == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      n = this.decodeString(t);
      const i = n.type === pe.BINARY_EVENT;
      i || n.type === pe.BINARY_ACK ? (n.type = i ? pe.EVENT : pe.ACK, this.reconstructor = new sO(n), n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n);
    } else if (zu(t) || t.base64)
      if (this.reconstructor)
        n = this.reconstructor.takeBinaryData(t), n && (this.reconstructor = null, super.emitReserved("decoded", n));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + t);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(t) {
    let n = 0;
    const i = {
      type: Number(t.charAt(0))
    };
    if (pe[i.type] === void 0)
      throw new Error("unknown packet type " + i.type);
    if (i.type === pe.BINARY_EVENT || i.type === pe.BINARY_ACK) {
      const r = n + 1;
      for (; t.charAt(++n) !== "-" && n != t.length; )
        ;
      const o = t.substring(r, n);
      if (o != Number(o) || t.charAt(n) !== "-")
        throw new Error("Illegal attachments");
      i.attachments = Number(o);
    }
    if (t.charAt(n + 1) === "/") {
      const r = n + 1;
      for (; ++n && !(t.charAt(n) === "," || n === t.length); )
        ;
      i.nsp = t.substring(r, n);
    } else
      i.nsp = "/";
    const s = t.charAt(n + 1);
    if (s !== "" && Number(s) == s) {
      const r = n + 1;
      for (; ++n; ) {
        const o = t.charAt(n);
        if (o == null || Number(o) != o) {
          --n;
          break;
        }
        if (n === t.length)
          break;
      }
      i.id = Number(t.substring(r, n + 1));
    }
    if (t.charAt(++n)) {
      const r = this.tryParse(t.substr(n));
      if (Gu.isPayloadValid(i.type, r))
        i.data = r;
      else
        throw new Error("invalid payload");
    }
    return i;
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(t, n) {
    switch (t) {
      case pe.CONNECT:
        return Ld(n);
      case pe.DISCONNECT:
        return n === void 0;
      case pe.CONNECT_ERROR:
        return typeof n == "string" || Ld(n);
      case pe.EVENT:
      case pe.BINARY_EVENT:
        return Array.isArray(n) && (typeof n[0] == "number" || typeof n[0] == "string" && tO.indexOf(n[0]) === -1);
      case pe.ACK:
      case pe.BINARY_ACK:
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
class sO {
  constructor(t) {
    this.packet = t, this.buffers = [], this.reconPack = t;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(t) {
    if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
      const n = eO(this.reconPack, this.buffers);
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
const rO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, Decoder: Gu, Encoder: iO, get PacketType() {
  return pe;
}, protocol: nO }, Symbol.toStringTag, { value: "Module" }));
function jt(e, t, n) {
  return e.on(t, n), function() {
    e.off(t, n);
  };
}
const oO = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Vy extends ze {
  /**
   * `Socket` constructor.
   */
  constructor(t, n, i) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = t, this.nsp = n, i && i.auth && (this.auth = i.auth), this._opts = Object.assign({}, i), this.io._autoConnect && this.open();
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
    const t = this.io;
    this.subs = [
      jt(t, "open", this.onopen.bind(this)),
      jt(t, "packet", this.onpacket.bind(this)),
      jt(t, "error", this.onerror.bind(this)),
      jt(t, "close", this.onclose.bind(this))
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
  send(...t) {
    return t.unshift("message"), this.emit.apply(this, t), this;
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
  emit(t, ...n) {
    if (oO.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (n.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(n), this;
    const i = {
      type: pe.EVENT,
      data: n
    };
    if (i.options = {}, i.options.compress = this.flags.compress !== !1, typeof n[n.length - 1] == "function") {
      const o = this.ids++, a = n.pop();
      this._registerAckCallback(o, a), i.id = o;
    }
    const s = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    return this.flags.volatile && (!s || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(i), this.packet(i)) : this.sendBuffer.push(i)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(t, n) {
    var i;
    const s = (i = this.flags.timeout) !== null && i !== void 0 ? i : this._opts.ackTimeout;
    if (s === void 0) {
      this.acks[t] = n;
      return;
    }
    const r = this.io.setTimeoutFn(() => {
      delete this.acks[t];
      for (let a = 0; a < this.sendBuffer.length; a++)
        this.sendBuffer[a].id === t && this.sendBuffer.splice(a, 1);
      n.call(this, new Error("operation has timed out"));
    }, s), o = (...a) => {
      this.io.clearTimeoutFn(r), n.apply(this, a);
    };
    o.withError = !0, this.acks[t] = o;
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
  emitWithAck(t, ...n) {
    return new Promise((i, s) => {
      const r = (o, a) => o ? s(o) : i(a);
      r.withError = !0, n.push(r), this.emit(t, ...n);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(t) {
    let n;
    typeof t[t.length - 1] == "function" && (n = t.pop());
    const i = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    t.push((s, ...r) => i !== this._queue[0] ? void 0 : (s !== null ? i.tryCount > this._opts.retries && (this._queue.shift(), n && n(s)) : (this._queue.shift(), n && n(null, ...r)), i.pending = !1, this._drainQueue())), this._queue.push(i), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(t = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const n = this._queue[0];
    n.pending && !t || (n.pending = !0, n.tryCount++, this.flags = n.flags, this.emit.apply(this, n.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(t) {
    t.nsp = this.nsp, this.io._packet(t);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((t) => {
      this._sendConnectPacket(t);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(t) {
    this.packet({
      type: pe.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t) : t
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(t) {
    this.connected || this.emitReserved("connect_error", t);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(t, n) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", t, n), this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((t) => {
      if (!this.sendBuffer.some((i) => String(i.id) === t)) {
        const i = this.acks[t];
        delete this.acks[t], i.withError && i.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(t) {
    if (t.nsp === this.nsp)
      switch (t.type) {
        case pe.CONNECT:
          t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case pe.EVENT:
        case pe.BINARY_EVENT:
          this.onevent(t);
          break;
        case pe.ACK:
        case pe.BINARY_ACK:
          this.onack(t);
          break;
        case pe.DISCONNECT:
          this.ondisconnect();
          break;
        case pe.CONNECT_ERROR:
          this.destroy();
          const i = new Error(t.data.message);
          i.data = t.data.data, this.emitReserved("connect_error", i);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(t) {
    const n = t.data || [];
    t.id != null && n.push(this.ack(t.id)), this.connected ? this.emitEvent(n) : this.receiveBuffer.push(Object.freeze(n));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const n = this._anyListeners.slice();
      for (const i of n)
        i.apply(this, t);
    }
    super.emit.apply(this, t), this._pid && t.length && typeof t[t.length - 1] == "string" && (this._lastOffset = t[t.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(t) {
    const n = this;
    let i = !1;
    return function(...s) {
      i || (i = !0, n.packet({
        type: pe.ACK,
        id: t,
        data: s
      }));
    };
  }
  /**
   * Called upon a server acknowledgement.
   *
   * @param packet
   * @private
   */
  onack(t) {
    const n = this.acks[t.id];
    typeof n == "function" && (delete this.acks[t.id], n.withError && t.data.unshift(null), n.apply(this, t.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(t, n) {
    this.id = t, this.recovered = n && this._pid === n, this._pid = n, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((t) => this.emitEvent(t)), this.receiveBuffer = [], this.sendBuffer.forEach((t) => {
      this.notifyOutgoingListeners(t), this.packet(t);
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
    this.subs && (this.subs.forEach((t) => t()), this.subs = void 0), this.io._destroy(this);
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
    return this.connected && this.packet({ type: pe.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
  compress(t) {
    return this.flags.compress = t, this;
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
  timeout(t) {
    return this.flags.timeout = t, this;
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
  onAny(t) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t), this;
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
  prependAny(t) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t), this;
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
  offAny(t) {
    if (!this._anyListeners)
      return this;
    if (t) {
      const n = this._anyListeners;
      for (let i = 0; i < n.length; i++)
        if (t === n[i])
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
  onAnyOutgoing(t) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(t), this;
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
  prependAnyOutgoing(t) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(t), this;
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
  offAnyOutgoing(t) {
    if (!this._anyOutgoingListeners)
      return this;
    if (t) {
      const n = this._anyOutgoingListeners;
      for (let i = 0; i < n.length; i++)
        if (t === n[i])
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
  notifyOutgoingListeners(t) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const n = this._anyOutgoingListeners.slice();
      for (const i of n)
        i.apply(this, t.data);
    }
  }
}
function hs(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
hs.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(), n = Math.floor(t * this.jitter * e);
    e = Math.floor(t * 10) & 1 ? e + n : e - n;
  }
  return Math.min(e, this.max) | 0;
};
hs.prototype.reset = function() {
  this.attempts = 0;
};
hs.prototype.setMin = function(e) {
  this.ms = e;
};
hs.prototype.setMax = function(e) {
  this.max = e;
};
hs.prototype.setJitter = function(e) {
  this.jitter = e;
};
class Jl extends ze {
  constructor(t, n) {
    var i;
    super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (n = t, t = void 0), n = n || {}, n.path = n.path || "/socket.io", this.opts = n, ya(this, n), this.reconnection(n.reconnection !== !1), this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0), this.reconnectionDelay(n.reconnectionDelay || 1e3), this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3), this.randomizationFactor((i = n.randomizationFactor) !== null && i !== void 0 ? i : 0.5), this.backoff = new hs({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(n.timeout == null ? 2e4 : n.timeout), this._readyState = "closed", this.uri = t;
    const s = n.parser || rO;
    this.encoder = new s.Encoder(), this.decoder = new s.Decoder(), this._autoConnect = n.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(t) {
    return arguments.length ? (this._reconnection = !!t, this) : this._reconnection;
  }
  reconnectionAttempts(t) {
    return t === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this);
  }
  reconnectionDelay(t) {
    var n;
    return t === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = t, (n = this.backoff) === null || n === void 0 || n.setMin(t), this);
  }
  randomizationFactor(t) {
    var n;
    return t === void 0 ? this._randomizationFactor : (this._randomizationFactor = t, (n = this.backoff) === null || n === void 0 || n.setJitter(t), this);
  }
  reconnectionDelayMax(t) {
    var n;
    return t === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, (n = this.backoff) === null || n === void 0 || n.setMax(t), this);
  }
  timeout(t) {
    return arguments.length ? (this._timeout = t, this) : this._timeout;
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
  open(t) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new Uy(this.uri, this.opts);
    const n = this.engine, i = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const s = jt(n, "open", function() {
      i.onopen(), t && t();
    }), r = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), t ? t(a) : this.maybeReconnectOnOpen();
    }, o = jt(n, "error", r);
    if (this._timeout !== !1) {
      const a = this._timeout, l = this.setTimeoutFn(() => {
        s(), r(new Error("timeout")), n.close();
      }, a);
      this.opts.autoUnref && l.unref(), this.subs.push(() => {
        this.clearTimeoutFn(l);
      });
    }
    return this.subs.push(s), this.subs.push(o), this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(t) {
    return this.open(t);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const t = this.engine;
    this.subs.push(jt(t, "ping", this.onping.bind(this)), jt(t, "data", this.ondata.bind(this)), jt(t, "error", this.onerror.bind(this)), jt(t, "close", this.onclose.bind(this)), jt(this.decoder, "decoded", this.ondecoded.bind(this)));
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
  ondata(t) {
    try {
      this.decoder.add(t);
    } catch (n) {
      this.onclose("parse error", n);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(t) {
    Vu(() => {
      this.emitReserved("packet", t);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(t) {
    this.emitReserved("error", t);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(t, n) {
    let i = this.nsps[t];
    return i ? this._autoConnect && !i.active && i.connect() : (i = new Vy(this, t, n), this.nsps[t] = i), i;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(t) {
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
  _packet(t) {
    const n = this.encoder.encode(t);
    for (let i = 0; i < n.length; i++)
      this.engine.write(n[i], t.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((t) => t()), this.subs.length = 0, this.decoder.destroy();
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
  onclose(t, n) {
    this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t, n), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const t = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const n = this.backoff.duration();
      this._reconnecting = !0;
      const i = this.setTimeoutFn(() => {
        t.skipReconnect || (this.emitReserved("reconnect_attempt", t.backoff.attempts), !t.skipReconnect && t.open((s) => {
          s ? (t._reconnecting = !1, t.reconnect(), this.emitReserved("reconnect_error", s)) : t.onreconnect();
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
    const t = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", t);
  }
}
const vs = {};
function Yr(e, t) {
  typeof e == "object" && (t = e, e = void 0), t = t || {};
  const n = KA(e, t.path || "/socket.io"), i = n.source, s = n.id, r = n.path, o = vs[s] && r in vs[s].nsps, a = t.forceNew || t["force new connection"] || t.multiplex === !1 || o;
  let l;
  return a ? l = new Jl(i, t) : (vs[s] || (vs[s] = new Jl(i, t)), l = vs[s]), n.query && !t.query && (t.query = n.queryKey), l.socket(n.path, t);
}
Object.assign(Yr, {
  Manager: Jl,
  Socket: Vy,
  io: Yr,
  connect: Yr
});
var aO = { VITE_HTTP_SERVER: "https://api.cutlistevo.com/", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
function lO(e = aO.VITE_WS_SERVER) {
  this.socket = Yr(e, {
    withCredentials: !0,
    //this is required to send passport user data
    autoConnect: !1
  }), this.socket.on("connect", () => {
    be.call(
      this,
      ["connected"],
      !0
    );
  }), this.socket.on("maintenance", () => {
    be.call(
      this,
      ["maintenanceMode"],
      !0
    ), this.socket.disconnect(), this.env === "development" && console.log("SmartCut - maintenance mode flag received from server");
  }), this.socket.on("connect_error", (t) => {
    be.call(
      this,
      ["connected"],
      !1
    ), console.warn(`SmartCut - socket connect_error: ${t.message}`), typeof alert < "u" && alert("We are having trouble connecting to the server. Please try again later."), this.socket.close();
  }), this.socket.on("message", (t) => console.log(t)), this.socket.on("user", (t) => {
    be.call(
      this,
      ["user"],
      t,
      "shallow"
    );
  }), this.socket.on("queued", () => {
    be.call(
      this,
      ["progress", "queue"],
      1
    );
  }), this.socket.on("jobInProgess", (t) => (alert(`You already have a job in progress, please wait for it to finish

Job ID: ${t}`), !1)), this.socket.on("jobStart", () => be.call(
    this,
    ["progress", "queue"],
    2
  )), this.socket.on("progress", (t) => {
    const n = t.data;
    if (typeof n.shapeCount < "u" && be.call(
      this,
      ["progress", "shapeCount"],
      n.shapeCount
    ), typeof n.stockCount < "u" && be.call(
      this,
      ["progress", "stockCount"],
      n.stockCount
    ), !n.stockCount && !n.shapeCount) {
      const i = Ce.call(this, ["progress", "resultCount"]);
      be.call(
        this,
        ["progress", "resultCount"],
        i + 1
      );
    }
  }), this.socket.on("upgrade", () => {
    "showUpgradeModal" in this && typeof this.showUpgradeModal == "function" && this.showUpgradeModal(), be.call(
      this,
      ["thinking"],
      !1
    );
  }), this.socket.on("error", (t) => {
    var i;
    be.call(
      this,
      ["thinking"],
      !1
    );
    const n = Ce.call(this, ["reset"]);
    typeof n == "function" && n(), console.error("SmartCut error:", t), (i = window == null ? void 0 : window.top) == null || i.postMessage(
      {
        type: "scError",
        message: t
      },
      "*"
    ), "showMessage" in this && typeof this.showMessage == "function" && this.showMessage(t), typeof this.showModalMessage == "function" && this.showModalMessage({
      heading: "Issue",
      main: t ? `<p>${t}</p>` : "<p>We are having trouble connecting to the server.</p><p>Please try again later and let us know.</p>"
    });
  }), this.socket.on("result", (t) => {
    var l, u, c, f, h, d, p, y;
    this.socket.disconnect();
    const n = t.result, i = Ce.call(this, ["resetProgress"]);
    if (be.call(
      this,
      ["placementPositions"],
      n.placementPositions ?? []
    ), be.call(
      this,
      ["metadata"],
      n.metadata ?? {}
    ), be.call(
      this,
      ["unusableShapes"],
      n.unusableShapes ?? []
    ), be.call(
      this,
      ["unavailableStock"],
      n.unavailableStock ?? []
    ), !((l = n.shapeList) != null && l.length) || !((u = n.stockList) != null && u.length)) {
      if (i(), typeof this.showModalMessage == "function") {
        let w = "<p>We did not manage to fit any parts.</p>";
        (c = n == null ? void 0 : n.unusableShapes) != null && c.length ? (w = "<p>No parts were usable.</p><p>Click below to view the <strong>Unusable parts</strong> message in the <strong>Inputs panel</stong>.</p>", this.showModalMessage({
          heading: "Parts unusable",
          main: w,
          buttonText: "Show me",
          buttonCallback: (S) => {
            S.showInputPanel(
              "parts",
              "inputs-unusable-parts"
            );
          }
        })) : (w += "<p>Please double check your list.</p>", this.$nextTick(() => {
          this.showModalMessage({
            heading: "Parts unusable",
            main: w
          });
        }));
      }
      return (f = window == null ? void 0 : window.top) == null || f.postMessage(
        {
          type: "scError",
          message: "No parts were added - please double check your list."
        },
        "*"
      ), "showMessage" in this && typeof this.showMessage == "function" && this.showMessage("No parts were added - please double check your list."), be.call(
        this,
        ["thinking"],
        !1
      ), typeof this.toggleWidget == "function" && this.toggleWidget.call(
        this,
        "inputs",
        !0
      ), !1;
    }
    n.shapeList.find((w) => !w.added) && typeof this.showModalMessage == "function" && this.$nextTick(() => {
      this.showModalMessage({
        heading: "Parts not used",
        main: "<p>We did not use all your parts.</p><p>Click below to view the <strong>Unusable parts</strong> message in the <strong>Inputs panel</stong>.</p>",
        buttonText: "Show me",
        buttonCallback: (w) => {
          w.showInputPanel(
            "parts",
            "inputs-unusable-parts"
          );
        }
      });
    }), be.call(
      this,
      ["progress", "complete"],
      !0
    ), be.call(
      this,
      ["jobId"],
      t == null ? void 0 : t.jobId
    ), this.toggleWidget("updateStock", !1), this.toggleWidget("options", !1), this.toggleWidget("offcuts", !1), this.toggleWidget("results", !1), this.toggleWidget("cutlist", !1), this.toggleWidget("export", !1), this.toggleWidget("labels", !1);
    let s;
    n != null && n.saw && (s = new zn(
      n == null ? void 0 : n.saw,
      ((h = n == null ? void 0 : n.saw) == null ? void 0 : h.stockType) ?? ((p = (d = n.stockList) == null ? void 0 : d[0]) == null ? void 0 : p.type)
    ), be.call(
      this,
      ["saw"],
      s,
      "shallow"
    ));
    const r = ST({
      saw: s,
      stockList: n.stockList,
      removeScores: !0,
      preventAutoRotation: !0
    });
    be.call(
      this,
      ["stockList"],
      r,
      "shallow"
    );
    const o = Ce.call(
      this,
      ["usedStock"],
      "shallow"
    );
    o.length && this.$nextTick(() => {
      be.call(
        this,
        ["activeStockId"],
        o[0].id
      );
    }), be.call(
      this,
      ["shapeList"],
      kT({
        shapeList: n.shapeList,
        stockList: r,
        preventAutoRotation: !0
      }),
      "shallow"
    ), n != null && n.cutList && be.call(
      this,
      ["cutList"],
      ET({
        cutList: n.cutList,
        stockList: r
      }),
      "shallow"
    ), n != null && n.segmentList && be.call(
      this,
      ["segmentList"],
      CT({
        segmentList: n.segmentList,
        stockList: r
      }),
      "shallow"
    ), n != null && n.offcuts && be.call(
      this,
      ["offcuts"],
      AT({
        offcuts: n.offcuts,
        stockList: r,
        preventAutoRotation: !0
      })
    ), n != null && n.metadata && be.call(
      this,
      ["metadata"],
      n.metadata,
      "shallow"
    ), n != null && n.inputs && be.call(
      this,
      ["inputs"],
      n.inputs,
      "raw"
    ), (y = n == null ? void 0 : n.evolutionVisData) != null && y.length ? be.call(
      this,
      ["evolutionVisData"],
      n.evolutionVisData,
      "raw"
    ) : typeof this.toggleWidget == "function" && this.toggleWidget.call(
      this,
      "evolution",
      !1
    ), typeof this.toggleWidget == "function" && this.toggleWidget.call(
      this,
      "workbench",
      !0
    ), be.call(
      this,
      ["thinking"],
      !1
    );
    const a = Gi.call(this, "inputs");
    a && (a != null && a.success) && (a.success = !1), this.$nextTick(() => {
      var S, k;
      if (Ce.call(this, ["addedShapes"]).length === 0) {
        if (i(), typeof this.showModalMessage == "function") {
          let b = "<p>We could not fit any parts.</p>";
          (S = n == null ? void 0 : n.unusableShapes) != null && S.length ? (b += "<p>Some parts were not usable - click below to view the <strong>Unusable parts</strong> message in the <strong>Inputs panel</stong>.</p>", this.showModalMessage({
            heading: "No layouts",
            main: b,
            buttonText: "More info",
            buttonCallback: (C) => {
              C.showInputPanel(
                "parts",
                "inputs-unusable-parts"
              );
            }
          })) : (b += "<p>Please double check your list.</p>", this.showModalMessage({
            heading: "No layouts",
            main: b
          }));
        }
        (k = window == null ? void 0 : window.top) == null || k.postMessage(
          {
            type: "scError",
            message: "No parts were added."
          },
          "*"
        ), console.warn("No parts were added."), typeof this.toggleWidget == "function" && this.toggleWidget.call(
          this,
          "inputs",
          !0
        );
      }
    });
  });
}
function Ql(e = 0, t, n = null, i = null, s = null) {
  if (!Si(n) && !zi || i === "stock") return !1;
  let r, o;
  if (Si(n) ? r = n.orientationLock : zi(n) ? r = n.direction : i === "shape" && (r = s), e === 0 || zi(n))
    switch (t) {
      case "n":
        o = r === "w" || s === "w";
        break;
      case "l":
      case "y":
        o = r === "w" || s === "w";
        break;
      case "w":
        o = r === "l" || s === "l";
        break;
      default:
        o = s === "w";
    }
  else if (e === 1)
    o = n.w > n.l;
  else if (e === 2)
    switch (t) {
      case "n":
        o = n.w > n.l;
        break;
      case "y":
      case "l":
        o = n.w > n.l;
        break;
      case "w":
        o = n.w > n.l;
        break;
      default:
        o = !1;
    }
  return o;
}
function cO(e, t, n = null, i = null, s = null) {
  if (!Si(n) || i === "shape") return !1;
  let r;
  return e === 0 || e === 1 ? Ql(
    e,
    t,
    n,
    i,
    s
  ) : e === 2 ? !1 : r;
}
function uO(e, t = 0) {
  if (!t) return e;
  if (t === 1 || t === 2) {
    switch (e.preventAutoRotation = !0, e.orientationLock) {
      case "l":
        e.l < e.w && (t === 2 && Dd(e), e.orientationLock = "w");
        break;
      case "w":
        e.l < e.w && (e.orientationLock = "l");
        break;
      default:
        e.l < e.w && t === 2 && Dd(e), e.orientationLock = "";
    }
    return e;
  }
}
function Dd(e) {
  e.banding && (e.banding = Xr(e.banding)), e.bandingType && (e.bandingType = Xr(e.bandingType)), e.trim && (e.trim = Xr(e.trim));
}
function Xr(e, t = !1) {
  const n = {
    x1: null,
    x2: null,
    y1: null,
    y2: null
  };
  return t ? ([e.y1, e.y2, e.x2, e.x1] = [n.x1, n.x2, n.y1, n.y2], "a" in e && "b" in e && "c" in e && "d" in e && ([e.a, e.b, e.c, e.d] = [n.d, n.a, n.b, n.c])) : ([n.x1, n.x2, n.y1, n.y2] = [e.y1, e.y2, e.x2, e.x1], "a" in e && "b" in e && "c" in e && "d" in e && ([n.d, n.a, n.b, n.c] = [e.a, e.b, e.c, e.d])), n;
}
const fO = {
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
    showStock(e) {
      this.$emit("show-stock", e);
    }
  }
}, Pi = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, s] of t)
    n[i] = s;
  return n;
}, hO = { id: "mini-stock-nav" }, dO = ["onMousedown"], pO = { class: "id" };
function gO(e, t, n, i, s, r) {
  return te(), ae("div", hO, [
    (te(!0), ae($e, null, bn(n.stockList, (o, a) => (te(), ae("button", {
      key: a,
      class: an(["nav-button", { selected: o.id === n.activeStockId }]),
      type: "button",
      style: Ve({
        backgroundColor: o.id === n.activeStockId ? "#" + n.secondaryColor : "#" + n.primaryColor
      }),
      onMousedown: (l) => r.showStock(o.id)
    }, [
      se("div", pO, We(a + 1), 1),
      sl(se("div", { class: "stack legibility" }, We(o.stack), 513), [
        [pg, typeof o.stack == "number" && o.stack > 1]
      ])
    ], 46, dO))), 128))
  ]);
}
const mO = /* @__PURE__ */ Pi(fO, [["render", gO]]), yO = {
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
}, bO = { id: "spinner" }, wO = ["width", "height"], vO = /* @__PURE__ */ gw('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7), _O = [
  vO
], xO = /* @__PURE__ */ se("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1), SO = [
  xO
], kO = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function EO(e, t, n, i, s, r) {
  return te(), ae("div", bO, [
    n.complete ? Pe("", !0) : (te(), ae("svg", {
      key: 0,
      class: "loading",
      style: Ve({ width: n.size + "px", height: n.size + "px" }),
      width: n.size,
      height: n.size,
      viewBox: "0 0 300 300"
    }, _O, 12, wO)),
    n.complete ? (te(), ae("svg", {
      key: 1,
      class: "complete",
      style: Ve({ width: n.size + "px", height: n.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, SO, 4)) : Pe("", !0),
    n.showNumber ? (te(), ae("div", kO, We(n.number), 1)) : Pe("", !0)
  ]);
}
const CO = /* @__PURE__ */ Pi(yO, [["render", EO]]);
function XI(e, t) {
  return e === "unitDependent" ? t === "decimal" ? "decimal" : "text" : e === "float" ? "decimal" : e === "integer" ? "numeric" : "text";
}
function JI(e, t) {
  return e === "unitDependent" ? t === "decimal" ? "number" : "text" : e === "checkbox" ? "checkbox" : e === "float" || e === "integer" ? "number" : "text";
}
function QI(e, t = null, n = "decimal") {
  switch (e) {
    case "float":
    case "integer":
    case "string":
      return e;
    case "unitDependent":
      return n === "decimal" ? "float" : "string";
    case "checkbox":
      return t || "boolean";
    case "select":
      return t || "string";
    default:
      return "string";
  }
}
function ZI(e) {
  return !!e;
}
function eM(e) {
  return typeof e.min > "u" ? null : typeof e.min == "function" ? e.min() : typeof e.min == "number" ? e.min : null;
}
function tM(e) {
  return typeof e.max > "u" ? null : typeof e.max == "function" ? e.max() : typeof e.max == "number" ? e.max : null;
}
function TO(e, t) {
  return t ? t.split(".").reduce((i, s) => i && i[s] !== "undefined" ? i[s] : void 0, e) : null;
}
function AO(e, t, n, i = !0) {
  const s = t.split(".");
  let r = e;
  for (let o = 0; o < s.length - 1; o++)
    r[s[o]] || (r[s[o]] = {}), r = r[s[o]];
  (i || !$(r[s[s.length - 1]])) && (r[s[s.length - 1]] = n);
}
function OO(e, t, n, i, s = !0) {
  var o;
  if (!((o = e == null ? void 0 : e[t]) != null && o[n])) return;
  const r = e[t][n].find((a) => a.id === i);
  r && (s ? r.enabled = !0 : r.enabled = !1);
}
function nM(e, t, n, i) {
  var r;
  if (!((r = e == null ? void 0 : e[t]) != null && r[n])) return !1;
  const s = e[t][n].find((o) => o.id === i);
  return s ? s.enabled : !1;
}
function iM(e, t, n, i) {
  var s;
  return (s = e == null ? void 0 : e[t]) != null && s[n] ? e[t][n].findIndex((r) => r.id === i) > -1 : !1;
}
function zy(e, t, n) {
  var i;
  return (i = e == null ? void 0 : e[t]) != null && i[n] ? e[t][n].filter((s) => s.enabled === !0).map((s) => s.id) : [];
}
function PO(e, t, n, i, s = []) {
  const r = zy(
    e,
    n,
    i
  );
  if (!r.length) return [];
  const o = t.filter((a) => r.includes(a.id) || a.custom === !0);
  return r.length !== o.filter((a) => (a == null ? void 0 : a.fieldMap) && !a.fieldMap.startsWith("customData.")).length && console.warn("Not all enabled fields are present in the field definitions"), s.length && o.sort((a, l) => {
    const u = s.indexOf(a.id), c = s.indexOf(l.id);
    return u === -1 ? 1 : c === -1 ? -1 : u - c;
  }), o;
}
const NO = {
  name: "OrientationButton",
  props: {
    //obsidian://open?vault=SmartCut%20documentation&file=Orientation%20philosophy
    orientationModel: {
      type: Number,
      default: 0
    },
    //allows use without passing a rectangle
    rectangleType: {
      type: String,
      default: null
    },
    rectangle: {
      type: Object,
      default: () => null
    },
    //if a shape object is not available, use shapeOrientation
    shapeOrientation: {
      type: String,
      default: ""
    },
    stockGrain: {
      type: String,
      default: "n"
    },
    buttonBackground: {
      type: String,
      default: "#848484"
    },
    iconColor: {
      type: String,
      default: "#FFFFFF"
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["updateOrientation"],
  computed: {
    orientationOptions() {
      if (!this.rectangle) return ["l", "w"];
      if (zi(this.rectangle)) return ["l", "w"];
      let e = ["", "l", "w"];
      return this.rectangle.multiEdit && (e = [" ", "", "l", "w"]), Cs(this.rectangle) ? e : this.orientationModel === 1 ? this.stockGrain !== "n" ? e = ["", "l", "w"] : e = [""] : this.orientationModel === 2 ? this.stockGrain !== "n" ? e = ["", "l"] : e = [""] : e;
    },
    isSquare() {
      var e;
      return typeof ((e = this.rectangle) == null ? void 0 : e.isSquare) == "function" ? this.rectangle.isSquare() : !1;
    },
    iconType() {
      var e;
      if (Cs(this.rectangle) || this.rectangleType === "stock") {
        if (!this.rectangle) return "noGrain";
      } else if (!this.rectangle && !this.shapeOrientation)
        return "freeRotation";
      if (Cs(this.rectangle) || this.rectangleType === "stock")
        switch ((e = this.rectangle) == null ? void 0 : e.grain) {
          case " ":
            return "delete";
          case "l":
            return "grainLeftRight";
          case "w":
            return "grainTopBottom";
          default:
            return "noGrain";
        }
      else
        return this.getIconType();
    },
    shouldRotate() {
      return Ql(
        this.orientationModel,
        this.stockGrain,
        this.rectangle,
        this.rectangleType,
        this.shapeOrientation
      );
    }
  },
  mounted() {
    this.$el.addEventListener("keydown", this.handleKeyDown);
  },
  unmounted() {
    this.$el.removeEventListener("keydown", this.handleKeyDown);
  },
  methods: {
    getIconType() {
      var s, r, o;
      const e = {
        n: {
          " ": "delete",
          l: "leftRight",
          w: "leftRight",
          default: "freeRotation"
        },
        y: {
          " ": "delete",
          l: "grainLeftRight",
          w: "grainTopBottom",
          default: "freeRotation"
        },
        l: {
          " ": "delete",
          l: "grainLeftRight",
          w: "grainTopBottom",
          default: "freeRotation"
        },
        w: {
          " ": "delete",
          l: "grainLeftRight",
          w: "grainTopBottom",
          default: "freeRotation"
        },
        default: {
          " ": "delete",
          l: "leftRight",
          w: "topBottom",
          default: "freeRotation"
        }
      }, t = this.stockGrain || "default";
      let n = "default";
      if (Si(this.rectangle))
        switch (this.orientationModel) {
          case 0:
            if (!((s = this.rectangle) != null && s.orientationLock)) {
              n = "default";
              break;
            }
            if (this.stockGrain === "n") {
              n = ((r = this.rectangle) == null ? void 0 : r.orientationLock) || this.shapeOrientation || "default";
              break;
            }
            switch (this.stockGrain) {
              case "w":
                n = this.rectangle.orientationLock === "w" ? "w" : "l";
                break;
              case "l":
              case "y":
                n = this.rectangle.orientationLock === "l" ? "l" : "w";
                break;
            }
            break;
          case 1:
            if (this.stockGrain === "n" || !this.rectangle.orientationLock) {
              n = "default";
              break;
            }
            switch (this.stockGrain) {
              case "l":
              case "y":
              case "w":
                if (this.shouldRotate) {
                  n = this.rectangle.orientationLock === "l" ? "w" : "l";
                  break;
                }
                n = this.rectangle.orientationLock === "l" ? "l" : "w";
                break;
              default:
                n = "default";
                break;
            }
            break;
          case 2: {
            if (this.stockGrain === "n") {
              n = "default";
              break;
            }
            switch (this.rectangle.orientationLock) {
              case "l":
                n = this.shouldRotate ? "w" : "l";
                break;
              default:
                n = "default";
                break;
            }
            break;
          }
        }
      else if (zi(this.rectangle))
        n = this.rectangle.direction || "default";
      else if (this.rectangleType === "shape" && this.stockGrain !== "n")
        switch (this.shapeOrientation) {
          case "l":
            switch (this.stockGrain) {
              case "y":
              case "l":
                n = "l";
                break;
              case "w":
                n = "w";
                break;
              default:
                n = "l";
                break;
            }
            break;
          case "w":
            switch (this.stockGrain) {
              case "y":
              case "l":
                n = "w";
                break;
              case "w":
                n = "l";
                break;
              default:
                n = "l";
                break;
            }
            break;
          default:
            n = "default";
            break;
        }
      return ((o = e[t]) == null ? void 0 : o[n]) || e[t].default;
    },
    click() {
      if (this.orientationOptions.length <= 1) return;
      let e = "";
      zi(this.rectangle) ? e = this.rectangle.direction : Si(this.rectangle) ? e = this.rectangle.orientationLock : Cs(this.rectangle) && (e = this.rectangle.grain);
      let t = this.orientationOptions.findIndex((n) => n === e);
      t++, t > this.orientationOptions.length - 1 && (t = 0), this.$emit("updateOrientation", this.orientationOptions[t]);
    },
    handleKeyDown(e) {
      (e.key === "Enter" || e.key === " ") && this.click();
    }
  }
}, IO = {
  key: 0,
  class: "delete",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, MO = /* @__PURE__ */ se("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1), LO = [
  MO
], DO = /* @__PURE__ */ se("g", null, [
  /* @__PURE__ */ se("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
  /* @__PURE__ */ se("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
  /* @__PURE__ */ se("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
  /* @__PURE__ */ se("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
], -1), RO = [
  DO
], FO = /* @__PURE__ */ se("g", null, [
  /* @__PURE__ */ se("path", { d: "m5.408 19.408h61.095" }),
  /* @__PURE__ */ se("g", null, [
    /* @__PURE__ */ se("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
    /* @__PURE__ */ se("path", { d: "m17.408 33.408-12-14 12-14" })
  ])
], -1), $O = [
  FO
], BO = /* @__PURE__ */ se("g", null, [
  /* @__PURE__ */ se("path", { d: "m19.408 66.503v-61.095" }),
  /* @__PURE__ */ se("g", null, [
    /* @__PURE__ */ se("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
    /* @__PURE__ */ se("path", { d: "m33.408 54.503-14 12-14-12" })
  ])
], -1), jO = [
  BO
], qO = /* @__PURE__ */ se("g", null, [
  /* @__PURE__ */ se("path", { d: "m3 3h99.887" }),
  /* @__PURE__ */ se("path", { d: "m3.113 32h99.887" }),
  /* @__PURE__ */ se("path", { d: "m3.113 61h99.887" })
], -1), UO = [
  qO
], WO = /* @__PURE__ */ se("g", null, [
  /* @__PURE__ */ se("path", { d: "m61 3v99.887" }),
  /* @__PURE__ */ se("path", { d: "m32 3.113v99.887" }),
  /* @__PURE__ */ se("path", { d: "m3 3.113v99.887" })
], -1), VO = [
  WO
];
function zO(e, t, n, i, s, r) {
  return te(), ae("div", {
    class: an(["orientation-button", { rot: r.shouldRotate, square: r.isSquare, disabled: n.disabled, [r.iconType]: !0 }]),
    tabindex: "0",
    "aria-label": "Part orientation",
    style: Ve({
      backgroundColor: n.buttonBackground
    }),
    onClick: t[0] || (t[0] = (...o) => r.click && r.click(...o))
  }, [
    r.iconType === "delete" ? (te(), ae("svg", IO, LO)) : Pe("", !0),
    r.iconType === "freeRotation" ? (te(), ae("svg", {
      key: 1,
      class: "arrow",
      style: Ve({
        stroke: n.iconColor ? n.iconColor : "#ffffff"
      }),
      viewBox: "0 0 67 63",
      xmlns: "http://www.w3.org/2000/svg"
    }, RO, 4)) : Pe("", !0),
    r.iconType === "leftRight" ? (te(), ae("svg", {
      key: 2,
      class: "arrow",
      style: Ve({
        stroke: n.iconColor ? n.iconColor : "#ffffff"
      }),
      viewBox: "0 0 72 39",
      xmlns: "http://www.w3.org/2000/svg"
    }, $O, 4)) : Pe("", !0),
    r.iconType === "topBottom" ? (te(), ae("svg", {
      key: 3,
      class: "arrow",
      style: Ve({
        stroke: n.iconColor ? n.iconColor : "#ffffff"
      }),
      viewBox: "0 0 39 72",
      xmlns: "http://www.w3.org/2000/svg"
    }, jO, 4)) : Pe("", !0),
    r.iconType === "grainLeftRight" ? (te(), ae("svg", {
      key: 4,
      class: "grain",
      style: Ve({
        stroke: n.iconColor ? n.iconColor : "#ffffff"
      }),
      viewBox: "0 0 106 64",
      xmlns: "http://www.w3.org/2000/svg"
    }, UO, 4)) : Pe("", !0),
    r.iconType === "grainTopBottom" ? (te(), ae("svg", {
      key: 5,
      class: "grain",
      style: Ve({
        stroke: n.iconColor ? n.iconColor : "#ffffff"
      }),
      viewBox: "0 0 64 106",
      xmlns: "http://www.w3.org/2000/svg"
    }, VO, 4)) : Pe("", !0)
  ], 6);
}
const GO = /* @__PURE__ */ Pi(NO, [["render", zO]]), HO = /* @__PURE__ */ Ti({
  name: "BandingButton",
  props: {
    inputShape: {
      type: Object,
      default: null
    },
    open: {
      type: Boolean,
      default: !1
    },
    //obsidian://open?vault=SmartCut%20documentation&file=Orientation%20philosophy
    orientationModel: {
      type: Number,
      default: 0
    },
    stockGrain: {
      type: String,
      default: "n"
    }
  },
  emits: ["clicked"],
  computed: {
    x1() {
      const e = Tr(this.inputShape.bandingOptions.x1) ? Object.values(this.inputShape.bandingOptions.x1).every((n) => n) : null, t = this.inputShape.banding.x1;
      return e || t;
    },
    x2() {
      const e = Tr(this.inputShape.bandingOptions.x2) ? Object.values(this.inputShape.bandingOptions.x2).every((n) => n) : null, t = this.inputShape.banding.x2;
      return e || t;
    },
    y1() {
      const e = Tr(this.inputShape.bandingOptions.y1) ? Object.values(this.inputShape.bandingOptions.y1).every((n) => n) : null, t = this.inputShape.banding.y1;
      return e || t;
    },
    y2() {
      const e = Tr(this.inputShape.bandingOptions.y2) ? Object.values(this.inputShape.bandingOptions.y2).every((n) => n) : null, t = this.inputShape.banding.y2;
      return e || t;
    },
    mappedBanding() {
      let e = {
        x1: this.x1,
        x2: this.x2,
        y1: this.y1,
        y2: this.y2
      };
      return cO(
        this.orientationModel,
        this.stockGrain,
        this.inputShape
      ) && (e = Xr(e)), e;
    }
  },
  mounted() {
    this.$el.addEventListener("keydown", this.handleKeyDown);
  },
  unmounted() {
    this.$el.removeEventListener("keydown", this.handleKeyDown);
  },
  methods: {
    handleKeyDown(e) {
      (e.key === "Enter" || e.key === " ") && this.click();
    },
    click() {
      this.$emit("clicked");
    }
  }
  /* watch: {
  	'inputShape.bandingOptions': {
  		deep: true,
  		immediate: true,
  		handler( v )
  		{
  			console.table( v )
  		}
  	}
  }, */
}), KO = /* @__PURE__ */ se("div", { class: "inner" }, null, -1), YO = [
  KO
];
function XO(e, t, n, i, s, r) {
  return te(), ae("div", {
    class: an(["banding-button", { open: e.open }]),
    tabindex: "0",
    onClick: t[0] || (t[0] = (...o) => e.click && e.click(...o))
  }, [
    se("div", {
      class: an(["outer", { x1: e.mappedBanding.x1, x2: e.mappedBanding.x2, y1: e.mappedBanding.y1, y2: e.mappedBanding.y2 }])
    }, YO, 2)
  ], 2);
}
const JO = /* @__PURE__ */ Pi(HO, [["render", XO]]), QO = /* @__PURE__ */ Vo(() => import("./Machining-Dt6LP6eg.js")), ZO = /* @__PURE__ */ Vo(() => import("./ImportCSV-C1fCE2Bc.js")), eP = /* @__PURE__ */ Vo(() => import("./InputField-CTbBVe6D.js")), Gy = {
  name: "CheckoutCalculator",
  components: {
    StockNavigation: mO,
    OrientationButton: GO,
    Spinner: CO,
    Machining: QO,
    BandingButton: JO,
    ImportCSV: ZO,
    InputField: eP
    // Offcuts,
  },
  props: {
    debug: {
      type: Boolean,
      default: !1
    },
    units: {
      type: String,
      default: "decimal"
    },
    //stock is passed as a prop, which allows it to be changed after init (e.g. variations in WP)
    stock: {
      type: Array,
      default: () => []
    }
  },
  emits: ["calculating", "result", "log", "error", "debug"],
  setup() {
    const { t: e, locale: t, fallbackLocale: n } = Qo({
      locale: "en_US"
    });
    return {
      t: e,
      locale: t,
      fallbackLocale: n
    };
  },
  data() {
    const e = kd(
      "Checkout/inputShapes",
      [],
      {
        serializer: {
          read: (t) => {
            const n = t ? JSON.parse(t) : [];
            return xT(n, this.units);
          },
          write: (t) => JSON.stringify(t)
        },
        listenToStorageChanges: !1
      }
    );
    return {
      domain: window.location.hostname,
      connected: !1,
      maintenanceMode: !1,
      creditVisible: !0,
      currentURL: kd(
        "Checkout/currentURL",
        window.location.href
      ),
      online: !0,
      onlineTimer: null,
      allowOnlineMessages: !0,
      socket: null,
      mounted: !1,
      loaded: !1,
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
      inputShapes: e.value,
      inputStock: [],
      stockList: Fn([]).value,
      shapeList: Fn([]).value,
      cutList: Fn([]).value,
      offcuts: Fn([]).value,
      inputs: Fn({}),
      //used to save inputs
      currentInputShape: null,
      activeStockId: null,
      selectedShapeId: null,
      metadata: null,
      //messages
      messageVisible: !1,
      messageHeading: "",
      messageContent: "",
      vis: jo({}),
      visInit: !1,
      isFullScreen: !1,
      //special sections
      machiningEnabled: !1,
      bandingEnabled: null,
      //index of the shape with banding dropdowns
      CSVImportEnabled: !1,
      allFields: {
        parts: {
          sheet: [
            { id: "material", enabled: !1 },
            { id: "l", enabled: !0 },
            { id: "w", enabled: !0 },
            { id: "t", enabled: !0 },
            { id: "q", enabled: !0 },
            { id: "name", enabled: !0 },
            { id: "orientationLock", enabled: !0 },
            { id: "banding", enabled: !0 }
          ],
          linear: [
            { id: "l", enabled: !0 },
            { id: "q", enabled: !0 },
            { id: "name", enabled: !0 }
          ]
        }
      },
      //default options
      options: {
        decimalPlaces: 2,
        stackHeight: 100,
        maxParts: null,
        disableBanding: !1,
        disableOrientation: !1,
        showDiagram: !0,
        showProgressNumber: !0,
        locale: "en_US",
        orientationModel: 0,
        customFields: []
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
        marginBottom: "2px",
        userSelect: "none",
        alignItems: "center"
      },
      creditLinkStyles: {
        width: "auto",
        height: "auto",
        display: "inline-block",
        position: "relative",
        visibility: "visible",
        opacity: "1",
        color: "#4e4e4e"
      },
      materials: [],
      thicknesses: [],
      bondedThicknesses: [],
      bandingChoices: {},
      machiningOptions: {
        units: "decimal",
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
      canGoFullScreen: zE(),
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
        disableClick: !1,
        enableStretch: !0
      },
      viewportWidth: null,
      w: 0,
      h: 0,
      userFriendlyFieldMap: Ey,
      customFieldDefinitions: [],
      user: null
    };
  },
  computed: {
    fieldDefinitions() {
      var n;
      return [
        ...[
          {
            id: "material",
            fieldMap: "material",
            label: this.t("material"),
            w: "minmax(20px, max-content)",
            type: "select",
            output: "string",
            default: (n = this.materials[0]) == null ? void 0 : n.name,
            options: this.materials.map((i) => ({
              value: i.name,
              label: i.name
            }))
          },
          {
            //options are set on the InputField directly as related to individual shape material
            id: "t",
            fieldMap: "t",
            w: "minmax(20px, max-content)",
            type: "select",
            output: this.units === "decimal" ? "float" : "string",
            label: this.t("thickness")
          },
          {
            id: "l",
            fieldMap: "l",
            type: "unitDependent",
            label: this.t("length"),
            min: 0
          },
          {
            id: "w",
            fieldMap: "w",
            type: "unitDependent",
            label: this.t("width"),
            min: 0
          },
          {
            id: "q",
            fieldMap: "q",
            type: "integer",
            default: 1,
            label: this.t("quantity"),
            min: 0
          },
          {
            id: "name",
            fieldMap: "name",
            type: "string",
            label: this.t("name")
          },
          {
            id: "orientationLock",
            w: "32px",
            label: this.t("orientation"),
            fieldMap: "orientationLock"
          },
          {
            id: "banding",
            w: "32px",
            label: this.t("banding"),
            fieldMap: "bandingOptions"
          },
          {
            id: "machining",
            w: "28px",
            label: this.t("machining"),
            fieldMap: "machining"
          }
        ],
        ...this.customFieldDefinitions
      ];
    },
    relevantFieldDefinitions() {
      return PO(
        this.allFields,
        this.fieldDefinitions,
        "parts",
        this.saw.stockType,
        this.options.fieldOrder
      );
    },
    selectedShape() {
      return this.selectedShapeId ? this.inputShapes.find((e) => e.id === this.selectedShapeId) : null;
    },
    inputType() {
      return this.units === "decimal" ? "number" : "string";
    },
    inputMode() {
      return this.units === "decimal" ? "decimal" : "text";
    },
    partColumns() {
      let e = this.relevantFieldDefinitions.length;
      return this.inputShapes.length > 1 && e++, e;
    },
    partColumnsStyle() {
      const e = {
        id: "34px",
        del: "30px"
      }, t = [];
      for (let i = 0; i < this.relevantFieldDefinitions.length; i++) {
        const s = this.relevantFieldDefinitions[i];
        s.id !== "trim" && t.push(s.w ?? "minmax(20px, 1fr)");
      }
      return t.unshift(e.id), this.inputShapes.length > 1 && t.push(e.del), t.join(" ");
    },
    bandingColumnsStyle() {
      if (!this.bandingChoices) return "auto";
      const e = Object.keys(this.bandingChoices).length;
      return e ? `repeat(${e + 2 - 1}, minmax(20px, max-content)) 1fr` : "auto";
    },
    addedShapes() {
      return this.shapeList.filter((e) => e.added);
    },
    uniqueShapes() {
      return this.shapeList.filter((e) => e.added && !e.duplicate);
    },
    numUniqueShapes() {
      return this.uniqueShapes.length;
    },
    uniqueAddedShapes() {
      return this.uniqueShapes.filter((e) => e.added);
    },
    uniqueStock() {
      return this.stockList.filter((e) => e.used && !e.duplicate);
    },
    uniqueUsedStock() {
      return this.uniqueStock.filter((e) => e.used).map((e) => (e.q = this.uniqueStock.filter((t) => t.parentID === e.parentID).reduce(
        (t, n) => t + (n == null ? void 0 : n.stack) > 0 ? n.stack : 1,
        0
      ), e));
    },
    usedStock() {
      return VT(this.stockList);
    },
    activeStock() {
      return this.activeStockId ? UT(this.stockList, this.activeStockId) : null;
    },
    activeStockArea() {
      return this.activeStock.getArea();
    },
    stackedStock() {
      return VE(this.stockList);
    },
    activeShapes() {
      return this.shapeList.filter((e) => {
        var t, n;
        return e.added && ((t = e == null ? void 0 : e.stock) == null ? void 0 : t.id) === ((n = this.activeStock) == null ? void 0 : n.id);
      });
    },
    activeCuts() {
      return WT(this.cutList, this.activeStock);
    },
    unplacedShapes() {
      return WE(this.shapeList);
    },
    totalCutLength() {
      return !this.cutList.length || !this.metadata.totalCutLength ? 0 : this.metadata.totalCutLength;
    },
    totalInputShapes() {
      return this.inputShapes.reduce((e, t) => e + t.q, 0);
    },
    materialNames() {
      return this.materials.map((e) => e.name);
    }
  },
  watch: {
    online(e) {
      ZT.call(this, e);
    },
    jobId(e) {
      if (!e) return;
      this.visInit && this.updateVisSize(), this.metadata || this.$emit(
        "error",
        "SmartCut - no metadata received from server"
      ), this.updatePartQuantitiesBasedOnThickness();
      const t = {
        jobId: this.jobId,
        metadata: this.metadata,
        parts: this.uniqueAddedShapes.map((n) => {
          var i, s;
          return {
            l: n.l,
            w: n.w,
            t: n == null ? void 0 : n.t,
            material: n.material,
            orientationLock: n.orientationLock,
            q: (s = (i = this == null ? void 0 : this.metadata) == null ? void 0 : i.addedPartTally) == null ? void 0 : s[n.parentID],
            name: n.name,
            banding: n.banding,
            bandingType: n.bandingType,
            customData: n.customData
          };
        }),
        stock: this.uniqueUsedStock.map((n) => {
          var i, s, r;
          return {
            name: n == null ? void 0 : n.name,
            l: n.l,
            w: n.w,
            t: n == null ? void 0 : n.t,
            material: n.material,
            q: (r = (s = (i = this == null ? void 0 : this.metadata) == null ? void 0 : i.metadata) == null ? void 0 : s.usedStockTally) == null ? void 0 : r[n.parentID],
            trim: n == null ? void 0 : n.trim,
            cost: n == null ? void 0 : n.cost,
            analysis: n == null ? void 0 : n.analysis
          };
        }),
        offcuts: this.offcuts.map((n) => ({
          l: n.l,
          w: n.w,
          t: (n == null ? void 0 : n.t) ?? null,
          q: n.q
        })),
        inputs: {
          parts: this.inputs.shapeList.map((n) => (delete n.listId, n))
        }
      };
      if (this.unplacedShapes.length) {
        const n = this.unplacedShapes.map((i) => i.id).join();
        this.showMessage(this.$t("The following parts did not fit") + ": " + n);
      }
      this.$emit("result", t);
    },
    viewportWidth() {
      this.visInit && this.updateVisSize();
    },
    activeStockId() {
      this.visInit && this.$nextTick(() => this.refresh());
    },
    //stock changes when a thickness is selected in WC
    stock(e) {
      Array.isArray(e) || console.warn("SmartCut - stock must be passed as an array"), this.inputStock = [], this.materials.length || (this.thicknesses = [], this.bondedThicknesses = [], this.inputShapes.forEach((t) => t.t = null)), e.forEach((t) => {
        t.type = this.saw.stockType, this.materials.length || (this.setFieldEnabled("t", !1), t.t && typeof t.t == "string" && t.t.includes(",") && (t.t = this.getBondedThicknesses(t.t, !0), t.t.length !== 2 ? this.$emit(
          "error",
          "bonded thickness options must have exactly two options"
        ) : (this.addBondedThicknesses(t.t), this.setFieldEnabled("t", !0), t.t = this.thicknesses[0])));
        const n = this.createStockInput(t);
        this.inputStock.push(n);
      }), this.inputStock.length && (this.inputShapes.length ? this.inputShapes.forEach((t) => {
        t.t = this.inputStock[0].t;
      }) : this.addInputShape(1));
    },
    inputShapes: {
      handler(e) {
        e.forEach((t) => {
          const n = this.materials.find((i) => i.name === t.material);
          n && (n.thicknesses.includes(t.t) || (t.t = n.thicknesses[0]));
        });
      },
      deep: !0
    }
  },
  mounted() {
    if (this.mounted) return;
    const e = new URL(window.location.href), t = e.searchParams.toString(), n = e.origin + e.pathname + (t ? `?${t}` : "");
    this.currentURL !== n && (this.inputShapes.length = 0), this.currentURL = n, this.locale = this.options.locale, lO.call(this, "https://api.cutlistevo.com/"), this.socket.connect(), this.socket.emit("getUserFromDomain"), this.viewportWidth = window.innerWidth, this.resizeTimer = null;
    const i = this.debounce(this.handleResize, 30);
    window.addEventListener(
      "resize",
      i,
      {
        passive: !0
      }
    ), window.addEventListener("smartcut/load", (s) => {
      this.parseInputs(s.detail);
    }), this.mounted = !0, this.debug && this.$emit("log", ["SmartCut - ready...", "fields:", this.relevantFieldDefinitions.map((s) => s.id)]);
  },
  methods: {
    parseInputs(e) {
      console.log(e.inputs), this.$nextTick(() => {
        var t, n;
        !e || !((n = (t = e == null ? void 0 : e.inputs) == null ? void 0 : t.parts) != null && n.length) || e.inputs.parts.forEach((i) => {
          this.inputShapes = [];
          const s = new Oo(i);
          s && this.inputShapes.push(s);
        });
      });
    },
    getEnabledFields(e) {
      return zy(
        this.allFields,
        e,
        this.saw.stockType
      );
    },
    setFieldEnabled(e, t = !0) {
      OO(
        this.allFields,
        "parts",
        this.saw.stockType,
        e,
        t
      );
    },
    importParts(e) {
      this.inputShapes.length = 0, console.log(e), this.$nextTick(() => {
        e.forEach((t) => {
          var n, i;
          t.t = ((i = (n = this.inputStock) == null ? void 0 : n[0]) == null ? void 0 : i.t) ?? null, this.inputShapes.push(this.createShapeInput(t));
        });
      });
    },
    isCreditVisible() {
      var i, s;
      if ((s = (i = this.user) == null ? void 0 : i.api) != null && s.whiteLabel) return !0;
      let e = !0;
      const t = document.querySelector("#smartcut-app #credit"), n = document.querySelector("#smartcut-app #credit a");
      return [t, n].forEach((r, o) => {
        if (!r) return e = !1;
        const a = window.getComputedStyle(r);
        if (a.display === "none" || a.display === "hidden" || a.opacity === "0" || a.color === "transparent" || a.position !== "relative" || o === 1 && a.color !== "#4e4e4e" && a.color !== "rgb(78, 78, 78)")
          return e = !1;
      }), this.creditVisible = e, e;
    },
    getNestedValue(e, t) {
      return TO(e, t);
    },
    setNestedValue(e, t, n, i = !0) {
      AO(
        e,
        t,
        n,
        i
      );
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
    openMachining(e = null) {
      this.currentInputShape = e, e && e.l && e.w ? this.machiningEnabled = !0 : alert("Please enter dimensions first");
    },
    openBanding(e = null) {
      this.currentInputShape === e ? (this.currentInputShape = null, this.bandingEnabled = null) : (this.currentInputShape = e, this.bandingEnabled = this.inputShapes.indexOf(e));
    },
    closeMachining() {
      this.machiningEnabled = !1, document.exitFullscreen && document.exitFullscreen();
    },
    hasMachining(e = null) {
      return e ? U2(e) : !1;
    },
    resetProgress() {
      Va(this.progress);
    },
    reset() {
      Va(this.progress), this.stockList = [], this.shapeList = [], this.cutList = [], this.jobId = 0;
    },
    async updateVisSize(e = !1) {
      if (!this.vis) return !1;
      await this.vis.updateSize(e), this.clearSelection();
    },
    clear() {
      this.inputShapes.length = 0, this.addInputShape(1);
    },
    addBondedThicknesses(e, t) {
      const n = [];
      for (let i = 0; i < e.length; i++) {
        let s = e[i];
        this.units === "decimal" && (s = parseFloat(s)), this.thicknesses.push(s), t && t.thicknesses.push(s), n.push(this.thicknesses.length - 1);
      }
      this.bondedThicknesses.push(n);
    },
    init(e) {
      var t, n, i, s, r, o, a, l, u, c;
      if (this.debug && this.$emit("log", ["SmartCut - init...", e]), e != null && e.type && delete e.type, e != null && e.options) {
        const f = e.options;
        [
          "stockType",
          "cutPreference",
          "bladeWidth"
        ].forEach((p) => {
          p in f || this.$emit("error", `${p} is a required option`);
        });
        const d = {
          stockType: () => {
            const p = ["sheet", "linear"];
            p.includes(f.stockType) || console.warn(`${f.stockType} is not a valid stockType, expected ${p.join("|")}`), this.saw.stockType = f.stockType;
          },
          cutPreference: () => {
            const p = [
              "efficiency",
              "length",
              "width",
              "beam"
            ];
            if (p.includes(f.cutPreference)) {
              const { cutType: y, cutPreference: w } = Vl(f.cutPreference);
              this.saw.cutType = y, this.saw.cutPreference = w, this.saw.stackHeight = f.stackHeight, f.stockType === "linear" && (this.saw.cutType = null, this.saw.cutPreference = null), f.cutPreference === "beam" && (this.saw.stackHeight = f.stackHeight);
            } else
              console.warn(`SmartCut - ${f.cutPreference} is not one of ${p.join("|")}`);
          },
          bladeWidth: () => {
            f.bladeWidth >= 0 ? this.saw.bladeWidth = f.bladeWidth : console.warn(`SmartCut - you provided an incorrect blade width of: ${f.bladeWidth}`);
          },
          disableClick: () => {
            this.visOptions.disableClick = f.disableClick;
          },
          colors: () => {
            for (const [p, y] of Object.entries(f == null ? void 0 : f.colors))
              y && (this.colors[p] = y);
          },
          maxParts: () => {
            this.options.maxParts = f.maxParts;
          },
          disableOrientation: () => {
            this.setFieldEnabled(
              "orientationLock",
              !f.disableOrientation
            );
          },
          disablePartName: () => {
            this.setFieldEnabled(
              "name",
              !f.disablePartName
            );
          },
          enableCSVImport: () => {
            this.CSVImportEnabled = f.enableCSVImport;
          },
          locale: () => {
            this.locale = f.locale;
          },
          disableBanding: () => {
            this.setFieldEnabled("banding", !1);
          },
          enableMachining: () => {
            this.setFieldEnabled(
              "machining",
              f.enableMachining ?? !1
            );
          },
          customFields: () => {
            var y;
            if (!Array.isArray(f.customFields) || !((y = f.customFields) != null && y.length)) return;
            const p = [];
            f.customFields.forEach((w, S) => {
              p.push(w), p[S].custom = !0;
              const k = this.getCustomFieldId(w.id);
              p[S].id = k, p[S].fieldMap = "customData." + k, w.type === "checkbox" && (p[S].w = "32px"), w.type === "select" && (p[S].output = w.output ?? "string", p[S].options = w.options);
            }), this.customFieldDefinitions = p, this.inputShapes.forEach((w) => {
              w.customData = f.customFields.reduce((S, k) => {
                const b = this.getCustomFieldId(k.id);
                return S[b] = w.customData[b] || k.default || "", S;
              }, {});
            });
          }
        };
        for (const p in e == null ? void 0 : e.options)
          this.options[p] = e.options[p], p in d && d[p]();
      }
      if (!((t = this == null ? void 0 : this.options) != null && t.disableBanding)) {
        if ([e == null ? void 0 : e.banding, e == null ? void 0 : e.bandingPricing].forEach((d) => {
          d && typeof d != "object" && this.$emit("error", "banding and bandingPricing data must be an object");
        }), e != null && e.banding) {
          for (const y in e.banding) {
            const w = e.banding[y];
            Array.isArray(w) || this.$emit("error", "banding values must be an array");
          }
          const d = Object.keys(e.banding), p = /,/;
          for (let y = 0; y < length; y++)
            p.test(d[y]) && this.$emit("error", "banding keys must not contain commas");
        }
        if (e != null && e.bandingPricing) {
          for (const y in e.bandingPricing) {
            const w = e.bandingPricing[y];
            isNaN(w) && this.$emit("error", "bandingPricing values must be a number");
          }
          const d = Object.keys(e.bandingPricing), p = /,/;
          for (let y = 0; y < length; y++)
            p.test(d[y]) && this.$emit("error", "bandingPricing keys must not contain commas");
        }
        this.bandingChoices = e.banding;
        const f = Object.keys(this.bandingChoices), h = Object.values(this.bandingChoices).flat();
        this.inputShapes.forEach((d) => {
          if (d.removeBandingApartFromBandingOptions(), d.bandingOptions)
            for (const p in d.bandingOptions)
              Object.keys(d.bandingOptions[p]).forEach((w) => {
                f.includes(w) || delete d.bandingOptions[p][w];
              }), f.forEach((w) => {
                var S, k;
                if (!h.length) {
                  Object.keys(this.bandingChoices).includes(w) || delete d.bandingOptions[p][w];
                  return;
                }
                h.includes((k = (S = d.bandingOptions) == null ? void 0 : S[p]) == null ? void 0 : k[w]) || (d.bandingOptions[p][w] = "");
              });
        }), this.inputShapes.forEach((d) => {
          d.removeBandingApartFromBandingOptions();
        }), this.bandingChoices && Object.values(this.bandingChoices).length > 0 ? this.setFieldEnabled("banding", !0) : this.setFieldEnabled("banding", !1);
      }
      if ((n = e == null ? void 0 : e.stock) != null && n.some((f) => f == null ? void 0 : f.material)) {
        const f = Object.values(e.stock.reduce((h, d) => {
          const p = d.material.toUpperCase();
          return h[p] || (h[p] = { name: p, thicknesses: [] }), h[p].thicknesses.includes(d.t) || h[p].thicknesses.push(d.t), h;
        }, {}));
        this.materials = f, this.thicknesses = [], this.bondedThicknesses = [], f.forEach((h) => {
          const d = h.thicknesses;
          for (let p = d.length; p--; ) {
            const y = d[p], w = this.getBondedThicknesses(y);
            if (!w.length)
              return this.thicknesses.push(y);
            d.splice(p, 1), this.addBondedThicknesses(w, h);
          }
        }), this.setFieldEnabled("t", !0), f.length > 1 && (console.log("enabling material field"), this.setFieldEnabled("material", !0));
      }
      !((i = this == null ? void 0 : this.thicknesses) != null && i.length) && !((s = this == null ? void 0 : this.materials) != null && s.length) ? this.setFieldEnabled("t", !1) : this.setFieldEnabled("t", !0), (r = this == null ? void 0 : this.options) != null && r.enableMachining && (this.machiningOptions = e == null ? void 0 : e.machining, ["holes", "hingeHoles"].forEach((f) => {
        var h, d;
        (h = e == null ? void 0 : e.machining) != null && h[f] && (this.machiningOptions[f].enabled = (d = e == null ? void 0 : e.machining) == null ? void 0 : d[f].enabled);
      }), (l = (a = (o = e == null ? void 0 : e.machining) == null ? void 0 : o.corners) == null ? void 0 : a.types) != null && l.length && (this.machiningOptions.corners.enabled = !0, this.machiningOptions.corners.types = (c = (u = e == null ? void 0 : e.machining) == null ? void 0 : u.corners) == null ? void 0 : c.types)), this.loaded = !0, this.$nextTick(() => {
        if (this.visInit === !1) {
          const f = {
            elementID: "#smartcut-svg-wrapper",
            env: "production",
            main: !0,
            units: this.units,
            decimalPlaces: this.options.decimalPlaces,
            saw: this.saw,
            app: !1,
            embed: !0,
            colors: this.colors,
            options: this.visOptions,
            vueComponent: this
          };
          zT.call(this, f);
        }
        this.isCreditVisible() || alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      });
    },
    calculate() {
      var e;
      if (this.clearMessage(), (e = this.options) != null && e.maxParts && this.totalInputShapes > this.options.maxParts) {
        this.showMessage(this.$t("The maximum number of parts is") + " " + this.options.maxParts);
        return;
      }
      this.$emit("calculating"), HT.call(this);
    },
    showMessage(e = {
      main: null,
      heading: null,
      list: []
    }) {
      var t;
      typeof e == "object" ? (this.messageContent = e == null ? void 0 : e.main, this.messageHeading = e.heading, (t = e == null ? void 0 : e.list) != null && t.length && e.list.forEach((n) => {
        this.messageContent += `

${this.$t(n)}`;
      })) : this.messageContent = e, this.messageVisible = !0;
    },
    clearMessage() {
      this.messageVisible = !1, this.messageContent = "", this.messageHeading = "";
    },
    createStockInput({
      name: e = "",
      l: t = null,
      w: n = null,
      t: i = null,
      material: s = "",
      q: r = 1,
      trim: o = {
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 0
      },
      grain: a = "",
      cost: l = 0,
      notes: u = ""
    }) {
      return new Ty({
        id: (this.inputStock.length + 1).toString(),
        name: e,
        units: this.units,
        l: t,
        w: n,
        t: i,
        material: s,
        q: r,
        autoAdd: !0,
        trim: o,
        grain: a,
        cost: l,
        notes: u
      });
    },
    createShapeInput({
      l: e = null,
      w: t = this.saw.stockType === "linear" ? ((u) => (u = this.inputStock[0]) == null ? void 0 : u.w)() : null,
      t: n = this.thicknesses.length ? this.thicknesses[0] : null,
      q: i = 1,
      material: s = ((c) => (c = this == null ? void 0 : this.materials) == null ? void 0 : c.length)() === 1 ? this.materials[0].name : "",
      name: r = null,
      orientationLock: o = this.options.orientationModel === 2 ? "l" : null,
      bandingOptions: a = null,
      customData: l = null
    } = {}) {
      const f = new Oo({
        id: (this.inputShapes.length + 1).toString(),
        units: this.units,
        l: e,
        w: t,
        t: n,
        q: i,
        material: s,
        name: r,
        orientationLock: o,
        bandingOptions: a,
        customData: l
      });
      return this.bandingChoices && Object.keys(this.bandingChoices).forEach((d) => {
        var p, y;
        for (const w in f.bandingOptions)
          (y = (p = f.bandingOptions) == null ? void 0 : p[w]) != null && y[d] || (f.bandingOptions[w][d] = "");
      }), f;
    },
    addInputShape(e = 1) {
      for (let t = e; t--; ) {
        let n;
        if (this.inputShapes.length > 0) {
          const i = this.inputShapes[this.inputShapes.length - 1];
          n = this.createShapeInput({
            material: i.material,
            t: i.t
          });
        } else
          n = this.createShapeInput();
        this.inputShapes.push(n);
      }
    },
    removeShape(e) {
      var n;
      if (this.inputShapes.length === 1) return;
      const t = this.inputShapes[e].listId;
      this.inputShapes.splice(e, 1), ((n = this.currentInputShape) == null ? void 0 : n.listId) === t && (this.currentInputShape = null), Va(this.progress);
    },
    createStock(e, t) {
      const n = J(e.l), i = J(e.w), s = e.t ? J(e.t) : null, r = new ti({
        id: (t + 1).toString() + ".0",
        name: e != null && e.name ? e.name : `${n}x${i}`,
        l: n,
        w: i,
        t: s,
        saw: new zn(this.saw),
        material: e.material,
        grain: e.grain,
        autoAdd: !0,
        cost: e == null ? void 0 : e.cost,
        trim: e.trim,
        allowExactFitShapes: e.allowExactFitShapes,
        type: this.saw.stockType,
        notes: e == null ? void 0 : e.notes
      });
      return this.stockList.push(r), r.issues;
    },
    createStockList() {
      return GT.call(this, !1);
    },
    createShapeList() {
      var t, n;
      const e = [];
      for (let i = 0; i < this.inputShapes.length; i++) {
        const s = this.inputShapes[i];
        if (s.convertBandingOptionsToBanding(), (t = s == null ? void 0 : s.issues) != null && t.length && e.push(...s.issues.map((o) => this.$t("Part") + ` ${i + 1}: ${o}`)), !s.l || !s.w || !s.q) continue;
        const r = new Gn(uO({
          id: (i + 1).toString() + ".0",
          l: J(s == null ? void 0 : s.l),
          w: J(s == null ? void 0 : s.w),
          t: s != null && s.t ? J(s.t) : null,
          material: s != null && s.material ? s.material : null,
          q: typeof s.q != "number" ? parseInt(s.q) : s.q,
          name: s.name,
          orientationLock: s.orientationLock,
          banding: s.banding,
          bandingType: s.bandingType,
          machining: s.machining,
          customData: s.customData
        }, this.options.orientationModel));
        this.shapeList.push(r), (n = r == null ? void 0 : r.issues) != null && n.length && e.push(...r.issues);
      }
      return this.updatePartQuantitiesBasedOnThickness(), e;
    },
    /* toggleShapeOrientation( shape )
    		{
    			let orientations = ['', 'l', 'w'];
    
    			//cater for orientation model
    			if ( this.options.orientationModel === 2 ) orientations = ['', 'l'];
    
    			let index = orientations.findIndex( ( o ) => o === shape.orientationLock );
    			index++;
    			if ( index > 2 ) index = 0;
    			shape.orientationLock = orientations[index];
    		}, */
    refresh() {
      this.refreshStock(), this.refreshShapes();
    },
    refreshStock() {
      YT.call(this);
    },
    refreshShapes() {
      KT.call(this, this.uniqueShapes.length);
    },
    toggleWidget(e, t = null) {
      qT.call(
        this,
        e,
        t
      );
    },
    clearSelection() {
      XT.call(this);
    },
    showStock(e) {
      JT.call(this, e);
    },
    updateAllBanding(e, t, n) {
      n.setAllBandingOptions(e, t);
    },
    deleteBanding(e) {
      e.removeBandingApartFromBandingOptions(), Object.keys(this.bandingChoices).forEach((n) => {
        for (const i in e.bandingOptions)
          e.bandingOptions[i][n] = "";
      });
    },
    getBandingPrice(e) {
      const t = Object.values(e || {});
      if (!Array.isArray(t) || !t.every((i) => i) || !this.$parent.findBandingPrice || typeof this.$parent.findBandingPrice != "function" || !this.$parent.formatPrice || typeof this.$parent.formatPrice != "function")
        return "";
      const n = this.$parent.findBandingPrice(t);
      return this.$parent.formatPrice(n, this.locale);
    },
    //update the thickness data and return
    getShapeThicknesses(e) {
      var s;
      if (!e)
        return {
          thicknesses: [],
          bondedThicknesses: []
        };
      if (!((s = this.materials) != null && s.length))
        return {
          thicknesses: this.thicknesses,
          bondedThicknesses: []
        };
      if (!e.material)
        return {
          thicknesses: [],
          bondedThicknesses: []
        };
      const t = this.materials.find((r) => r.name === e.material);
      if (!t)
        return {
          thicknesses: [],
          bondedThicknesses: []
        };
      const n = t.thicknesses, i = [];
      for (let r = 0; r < n.length; r++) {
        const o = n[r], a = this.getBondedThicknesses(o), l = [];
        a.length && (a.forEach((u) => {
          n.splice(
            r,
            1,
            u
          ), l.push(r);
        }), r++), l.length && i.push(l);
      }
      return {
        thicknesses: n,
        bondedThicknesses: i
      };
    },
    getShapeThicknessOptions(e) {
      return this.getShapeThicknesses(e).thicknesses.map((i) => ({
        label: i.toString(),
        value: i
      }));
    },
    getBondedThicknesses(e, t = !1) {
      if (typeof e == "string" && e.includes(",")) {
        const n = e.split(",");
        return t ? n.map((i) => J(i)) : n;
      }
      return [];
    },
    getShapeStockGrainSummary(e) {
      const t = e.material, n = e.t, i = this.inputStock.filter((r) => r.material === t && r.t === n);
      return NT(i);
    },
    //this is for bonded thicknesses
    updatePartQuantitiesBasedOnThickness() {
      this.thicknesses.length && this.shapeList.forEach((e) => {
        if (!e.t) return;
        const t = this.thicknesses.findIndex((s) => J(s) === e.t), n = this.bondedThicknesses.find((s) => s.includes(t));
        if (!n)
          return;
        const i = Math.min(...n.map((s) => this.thicknesses[s]));
        e.t > i && (e.q = e.q * (e.t / i), e.t = i);
      });
    },
    debounce(e, t) {
      let n;
      return function(...s) {
        const r = () => {
          clearTimeout(n), e(...s);
        };
        clearTimeout(n), n = setTimeout(r, t);
      };
    },
    handleResize() {
      this.viewportWidth = window.innerWidth;
    },
    getCustomFieldId(e) {
      return e ? us(e).toLowerCase() : null;
    }
  }
};
function Rd(e) {
  const t = e;
  t.__i18n = t.__i18n || [], t.__i18n.push({
    locale: "",
    resource: {
      en_US: {
        length: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Length" } },
        l: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "L" } },
        width: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Width" } },
        w: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "W" } },
        thickness: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Thickness" } },
        t: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "T" } },
        name: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Name" } },
        quantity: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Quantity" } },
        q: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Q" } },
        material: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Material" } },
        orientation: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Orientation" } },
        machining: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Machining" } },
        grain: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Grain" } },
        "add part": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Add part" } },
        "remove part": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Remove part" } },
        calculate: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Calculate" } },
        "full screen": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Full screen" } },
        banding: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Banding" } },
        "delete banding": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Delete banding" } },
        select: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Select" } },
        delete: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Delete" } },
        clear: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Clear" } },
        l1: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "L1" } },
        l2: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "L2" } },
        w1: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "W1" } },
        w2: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "W2" } },
        all: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "All" } },
        "Drop CSV file here": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Drop CSV file here" } },
        "Powered by SmartCut": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Powered by SmartCut" } },
        Part: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Part" } },
        Issue: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Issue" } },
        "Part issue": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Part issue" } },
        "Issue with part inputs:": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Issue with part inputs:" } },
        "No parts": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "No parts" } },
        "No parts in list": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "No parts in list" } },
        "No quantity of parts found": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "No quantity of parts found" } },
        "No parts were added - please double check your list": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "No parts were added - please double check your list" } },
        "The following parts did not fit": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "The following parts did not fit" } },
        "The maximum number of parts is": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "The maximum number of parts is" } },
        "No valid parts found": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "No valid parts found" } }
      },
      ca: {
        length: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Llarg" } },
        l: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "L" } },
        width: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Ample" } },
        w: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "A" } },
        thickness: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Gruix" } },
        t: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "G" } },
        name: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Nom" } },
        quantity: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Quantitat" } },
        q: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Q" } },
        machining: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Mecanitzat" } },
        orientation: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Gir" } },
        "add part": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Afegeix" } },
        "remove part": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Elimina" } },
        calculate: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Calcula" } },
        "full screen": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Pantalla completa" } },
        banding: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Cantell" } },
        "delete banding": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Elimina cantell" } },
        delete: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Elimina" } },
        clear: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Neteja" } },
        l1: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "L1" } },
        l2: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "L2" } },
        w1: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "A1" } },
        w2: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "A1" } },
        all: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Todos" } },
        Part: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Peça" } },
        Issue: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Tema" } },
        "The following parts did not fit": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Les peces següents no encaixaven" } },
        "The maximum number of parts is": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "El número màxim de peces és" } },
        "No valid parts found": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "No s'han trobat peces vàlides" } },
        "Drop CSV file here": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "No s'han trobat peces vàlides" } },
        "Powered by SmartCut": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Desenvolupat per SmartCut" } }
      },
      es_ES: {
        length: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Largo" } },
        l: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "L" } },
        width: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Ancho" } },
        w: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "A" } },
        thickness: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Grueso" } },
        t: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "G" } },
        name: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Nombre" } },
        quantity: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Cantidad" } },
        q: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "C" } },
        machining: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Mecanizado" } },
        orientation: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Giro" } },
        "add part": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Añade" } },
        "remove part": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Elimina" } },
        calculate: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Calcula" } },
        "full screen": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Pantalla completa" } },
        banding: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Canto" } },
        "delete banding": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Elimina canto" } },
        delete: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Elimina" } },
        clear: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Borra" } },
        l1: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "L1" } },
        l2: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "L2" } },
        w1: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "A1" } },
        w2: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "A1" } },
        all: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Todos" } },
        Part: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Pieza" } },
        Issue: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Tema" } },
        "The following parts did not fit": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Las siguientes piezas no encajaban" } },
        "The maximum number of parts is": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "El número máximo de piezas es" } },
        "No valid parts found": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "No se encontraron piezas válidas" } },
        "Drop CSV file here": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Carga el archivo CSV aquí" } },
        "Powered by SmartCut": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Desarrollado por SmartCut" } }
      },
      fr_FR: {
        length: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Longueur" } },
        l: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "L" } },
        width: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Largeur" } },
        w: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "la" } },
        thickness: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Epaisseur" } },
        t: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "ep" } },
        name: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Nom" } },
        quantity: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Quantité" } },
        q: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Qt" } },
        material: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Matèriel" } },
        machining: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Machinage" } },
        grain: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Sens de fil" } },
        orientation: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Orientation" } },
        "add part": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Ajouter pièce" } },
        "remove part": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Supprimer pièce" } },
        calculate: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Optimiser" } },
        "full screen": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Plein écran" } },
        banding: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Chants" } },
        "delete banding": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Supprimer chants" } },
        select: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Sélectionner" } },
        delete: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Supprimer" } },
        clear: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Effacer" } },
        l1: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "L1" } },
        l2: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "L2" } },
        w1: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "la1" } },
        w2: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "la2" } },
        "Powered by SmartCut": { t: 0, b: { static: "", t: 2, i: [] } },
        Part: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Pièce" } },
        "Drop CSV file here": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Télécharger CSV" } },
        Issue: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Erreur" } },
        "Part issue": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Pièce erreur" } },
        "Issue with part inputs": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Erreur avec l'importation de pièces" } },
        "No parts": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Aucune pièce" } },
        "No parts in list": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Aucune pièce dans la liste" } },
        "No quantity of parts found": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Aucune quantité trouvé pour certaines pièces" } },
        "No parts were added - please double check your list": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Aucune pièce n'a été ajoutée - veuillez vérifier votre liste" } },
        "The following parts did not fit": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Les pièces suivantes ne s'adaptent pas" } },
        "The maximum number of parts is": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Le nombre maximum de pièces est" } },
        "No valid parts found": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Aucune pièce valide trouvée" } }
      }
    }
  });
}
const Hu = (e) => (w0("data-v-796d770d"), e = e(), v0(), e), tP = { key: 1 }, nP = {
  key: 0,
  class: "row table-heading"
}, iP = /* @__PURE__ */ Hu(() => /* @__PURE__ */ se("div", { class: "cell id" }, null, -1)), sP = {
  key: 0,
  class: "cell delete"
}, rP = { class: "cell" }, oP = ["onClick"], aP = {
  key: 0,
  class: "cell"
}, lP = ["aria-label", "onClick"], cP = {
  key: 0,
  class: "inputs"
}, uP = ["onUpdate:modelValue", "onChange"], fP = /* @__PURE__ */ Hu(() => /* @__PURE__ */ se("option", { value: "" }, " ✘ ", -1)), hP = ["value"], dP = /* @__PURE__ */ Hu(() => /* @__PURE__ */ se("div", null, null, -1)), pP = { class: "banding-price" }, gP = ["aria-label", "onClick"], mP = { class: "button-wrapper main" }, yP = ["aria-label"], bP = ["aria-label", "disabled"], wP = ["aria-label"], vP = { id: "part-count" }, _P = {
  key: 3,
  id: "messages"
}, xP = {
  key: 0,
  class: "heading"
}, SP = { class: "content" }, kP = {
  key: 4,
  id: "progress"
}, EP = {
  id: "smartcut-svg-wrapper",
  class: "svg-wrapper production"
}, CP = {
  key: 0,
  id: "stack"
};
function TP(e, t, n, i, s, r) {
  var p, y, w, S, k, b, C;
  const o = yn("Machining"), a = yn("Spinner"), l = yn("font-awesome-icon"), u = yn("InputField"), c = yn("OrientationButton"), f = yn("BandingButton"), h = yn("ImportCSV"), d = yn("StockNavigation");
  return te(), ae($e, null, [
    s.machiningEnabled ? (te(), Zt(o, {
      key: 0,
      shape: s.currentInputShape,
      options: s.machiningOptions,
      onClose: r.closeMachining
    }, null, 8, ["shape", "options", "onClose"])) : Pe("", !0),
    s.loaded ? Pe("", !0) : (te(), ae("div", tP, [
      we(a, {
        size: 50,
        "show-number": !1
      })
    ])),
    s.loaded ? (te(), ae("div", {
      key: 2,
      id: "smartcut-checkout",
      class: an({ fullscreen: s.isFullScreen })
    }, [
      s.canGoFullScreen ? (te(), ae("div", {
        key: 0,
        id: "smartcut-full-screen",
        class: "icon-left",
        onClick: t[0] || (t[0] = (A) => r.toggleFullScreen())
      }, [
        we(l, { icon: ["fasr", "expand"] }),
        xs(" " + We(i.t("full screen")), 1)
      ])) : Pe("", !0),
      (y = (p = s.user) == null ? void 0 : p.api) != null && y.whiteLabel ? Pe("", !0) : (te(), ae("div", {
        key: 1,
        id: "credit",
        style: Ve(s.creditStyles)
      }, [
        se("a", {
          title: "SmartCut | Cut list optimization software",
          style: Ve(s.creditLinkStyles),
          target: "_blank",
          href: "https://smartcut.dev/"
        }, We(i.t("Powered by SmartCut")), 5)
      ], 4)),
      se("div", {
        id: "part-input",
        class: "inputs no-margin-top grid-table",
        style: Ve({ "grid-template-columns": r.partColumnsStyle })
      }, [
        s.inputShapes.length ? (te(), ae("div", nP, [
          iP,
          (te(!0), ae($e, null, bn(r.relevantFieldDefinitions, (A) => (te(), ae("div", {
            key: A.id,
            class: an(["cell", { center: ["orientationLock", "banding", "machining"].includes(A.id) || A.type === "checkbox" }])
          }, We(A.label), 3))), 128)),
          s.inputShapes.length > 1 ? (te(), ae("div", sP)) : Pe("", !0)
        ])) : Pe("", !0),
        (te(!0), ae($e, null, bn(s.inputShapes, (A, I) => (te(), ae("div", {
          key: I,
          class: "row"
        }, [
          se("div", rP, [
            se("div", {
              class: "id",
              style: Ve({
                background: s.colors.partA,
                color: s.colors.text
              })
            }, We(I + 1), 5)
          ]),
          (te(!0), ae($e, null, bn(r.relevantFieldDefinitions, (P) => (te(), ae("div", {
            key: P.fieldMap,
            class: an(["cell", { center: ["orientationLock", "banding", "machining"].includes(P.id) || P.type === "checkbox" }])
          }, [
            ["orientationLock", "banding", "machining"].includes(P.id) ? P.id === "orientationLock" ? (te(), Zt(c, {
              key: 1,
              rectangle: A,
              "stock-grain": r.getShapeStockGrainSummary(A),
              "button-background": s.colors.button,
              "icon-color": s.colors.buttonText,
              "orientation-model": s.options.orientationModel,
              onUpdateOrientation: (D) => A.orientationLock = D
            }, null, 8, ["rectangle", "stock-grain", "button-background", "icon-color", "orientation-model", "onUpdateOrientation"])) : P.id === "banding" ? (te(), Zt(f, {
              key: 2,
              "input-shape": A,
              "stock-grain": r.getShapeStockGrainSummary(A),
              open: s.bandingEnabled === I,
              "orientation-model": s.options.orientationModel,
              onClicked: (D) => r.openBanding(A)
            }, null, 8, ["input-shape", "stock-grain", "open", "orientation-model", "onClicked"])) : P.fieldMap === "machining" && s.canGoFullScreen ? (te(), ae("button", {
              key: 3,
              type: "button",
              onClick: (D) => r.openMachining(A)
            }, [
              we(l, { icon: ["fass", "hammer"] })
            ], 8, oP)) : Pe("", !0) : (te(), Zt(u, {
              key: 0,
              id: P.id + "-" + I,
              focus: I === s.inputShapes.length - 1 && P.id === "l",
              type: P.type,
              output: P.output,
              label: P.label,
              units: n.units,
              placeholder: P == null ? void 0 : P.placeholder,
              options: P.id === "t" ? r.getShapeThicknessOptions(A) : P == null ? void 0 : P.options,
              "true-value": P == null ? void 0 : P.trueValue,
              "false-value": P == null ? void 0 : P.falseValue,
              default: P == null ? void 0 : P.default,
              min: typeof (P == null ? void 0 : P.min) == "number" ? P.min : null,
              max: typeof (P == null ? void 0 : P.max) == "number" ? P.max : null,
              custom: P == null ? void 0 : P.custom,
              value: r.getNestedValue(A, P.fieldMap),
              text: {
                delete: i.t("delete"),
                select: i.t("select")
              },
              onUpdate: (D) => r.setNestedValue(A, P.fieldMap, D)
            }, null, 8, ["id", "focus", "type", "output", "label", "units", "placeholder", "options", "true-value", "false-value", "default", "min", "max", "custom", "value", "text", "onUpdate"]))
          ], 2))), 128)),
          s.inputShapes.length > 1 ? (te(), ae("div", aP, [
            se("button", {
              type: "button",
              class: "delete",
              "aria-label": i.t("remove part"),
              onClick: (P) => r.removeShape(I)
            }, [
              we(l, { icon: ["fass", "trash"] })
            ], 8, lP)
          ])) : Pe("", !0),
          s.bandingEnabled === I && Object.values(s.bandingChoices).length > 0 ? (te(), ae("div", {
            key: 1,
            class: "group banding",
            style: Ve({ "grid-column-end": "span " + (r.partColumns + 1) })
          }, [
            Object.values(s.bandingChoices).length === 1 && s.bandingChoices[Object.keys(s.bandingChoices)[0]].length === 0 ? (te(), ae("div", cP, [
              we(u, {
                id: "banding-all-" + I,
                type: "checkbox",
                label: i.t("all"),
                "true-value": !0,
                "false-value": "",
                value: A.bandingOptions.all[Object.keys(s.bandingChoices)[0]],
                onUpdate: (P) => r.updateAllBanding(Object.keys(s.bandingChoices)[0], P, A)
              }, null, 8, ["id", "label", "value", "onUpdate"]),
              (te(), ae($e, null, bn(["y1", "y2", "x1", "x2"], (P) => we(u, {
                key: P,
                id: "banding-" + P + "-" + I,
                type: "checkbox",
                label: i.t(s.userFriendlyFieldMap[P]),
                "true-value": !0,
                "false-value": "",
                value: A.bandingOptions[P][Object.keys(s.bandingChoices)[0]],
                onUpdate: (D) => A.bandingOptions[P][Object.keys(s.bandingChoices)[0]] = D
              }, null, 8, ["id", "label", "value", "onUpdate"])), 64))
            ])) : (te(), ae("div", {
              key: 1,
              class: "grid",
              style: Ve({
                "grid-template-columns": r.bandingColumnsStyle
              })
            }, [
              se("div", null, We(i.t("all")), 1),
              (te(!0), ae($e, null, bn(s.bandingChoices, (P, D, W) => sl((te(), ae("select", {
                key: D + W.toString(),
                "onUpdate:modelValue": (G) => A.bandingOptions.all[D] = G,
                onChange: (G) => r.updateAllBanding(D, A.bandingOptions.all[D], A)
              }, [
                fP,
                (te(!0), ae($e, null, bn(P, (G, z) => (te(), ae("option", {
                  key: z,
                  value: G
                }, We(G), 9, hP))), 128))
              ], 40, uP)), [
                [Gw, A.bandingOptions.all[D]]
              ])), 128)),
              dP,
              (te(), ae($e, null, bn(["y1", "y2", "x1", "x2"], (P) => (te(), ae($e, { key: P }, [
                se("div", null, We(i.t(s.userFriendlyFieldMap[P])), 1),
                (te(!0), ae($e, null, bn(s.bandingChoices, (D, W, G) => (te(), Zt(u, {
                  id: "banding-" + W + "-" + P + "-" + G + "-" + I,
                  key: P + W + G.toString(),
                  type: "select",
                  options: D.map((z) => ({
                    value: z,
                    label: z
                  })),
                  text: { select: "✘" },
                  "select-first-option-disabled": !1,
                  value: A.bandingOptions[P][W],
                  onUpdate: (z) => A.bandingOptions[P][W] = z
                }, null, 8, ["id", "options", "value", "onUpdate"]))), 128)),
                se("div", pP, We(r.getBandingPrice(A.bandingOptions[P])), 1)
              ], 64))), 64))
            ], 4)),
            se("button", {
              type: "button",
              class: "delete icon-left",
              "aria-label": i.t("delete banding"),
              onClick: (P) => r.deleteBanding(A)
            }, [
              we(l, { icon: ["fass", "trash"] }),
              xs(" " + We(i.t("delete banding")), 1)
            ], 8, gP)
          ], 4)) : Pe("", !0)
        ]))), 128))
      ], 4),
      se("div", mP, [
        se("button", {
          type: "button",
          "aria-label": i.t("add part"),
          style: Ve({ background: s.colors.button, color: s.colors.buttonText }),
          class: "add c-btn icon-left",
          onClick: t[1] || (t[1] = (A) => r.addInputShape(1))
        }, [
          we(l, { icon: ["fasr", "plus-large"] }),
          xs(" " + We(i.t("add part")), 1)
        ], 12, yP),
        se("button", {
          class: "c-btn calculate icon-left",
          type: "button",
          "aria-label": i.t("calculate"),
          style: Ve({
            background: s.colors.button,
            color: s.colors.buttonText
          }),
          disabled: !((w = s.inputStock) != null && w.length) || s.thinking,
          onClick: t[2] || (t[2] = (A) => r.calculate())
        }, [
          we(l, { icon: ["fass", "calculator"] }),
          xs(We(i.t("calculate")), 1)
        ], 12, bP),
        se("button", {
          type: "button",
          class: "c-btn clear",
          "aria-label": i.t("clear"),
          onClick: t[3] || (t[3] = (A) => r.clear())
        }, [
          we(l, { icon: ["fass", "trash"] })
        ], 8, wP),
        se("div", vP, We(r.totalInputShapes) + We((S = s.options) != null && S.maxParts ? "/" + s.options.maxParts : ""), 1)
      ]),
      s.CSVImportEnabled ? (te(), Zt(h, {
        key: 2,
        ref: "import",
        units: n.units,
        "custom-fields": s.customFieldDefinitions,
        "banding-choices": s.bandingChoices,
        options: {
          locale: s.options.locale
        },
        onImport: r.importParts
      }, null, 8, ["units", "custom-fields", "banding-choices", "options", "onImport"])) : Pe("", !0),
      s.messageVisible ? (te(), ae("div", _P, [
        s.messageHeading ? (te(), ae("div", xP, We(s.messageHeading), 1)) : Pe("", !0),
        se("pre", SP, We(s.messageContent), 1)
      ])) : Pe("", !0),
      (s.options.showDiagram ? s.thinking && !s.progress.complete : s.thinking || s.progress.complete) ? (te(), ae("div", kP, [
        we(a, {
          size: 50,
          number: s.progress.shapeCount,
          complete: s.progress.complete,
          "show-number": s.options.showProgressNumber
        }, null, 8, ["number", "complete", "show-number"])
      ])) : Pe("", !0),
      sl(se("div", EP, [
        ((k = r.activeStock) == null ? void 0 : k.type) !== "roll" ? (te(), ae("div", CP, We((b = r.activeStock) != null && b.stack ? (C = r.activeStock) == null ? void 0 : C.stack : 1), 1)) : Pe("", !0)
      ], 512), [
        [pg, s.options.showDiagram && s.jobId > 0]
      ]),
      s.options.showDiagram && s.visInit && r.usedStock.length > 1 && s.jobId > 0 && s.progress.complete ? (te(), Zt(d, {
        key: 5,
        ref: "stockNavigation",
        "active-stock-id": s.activeStockId,
        "stock-list": r.stackedStock,
        "stock-count": s.stockList.length,
        "viewport-width": s.viewportWidth,
        onShowStock: r.showStock
      }, null, 8, ["active-stock-id", "stock-list", "stock-count", "viewport-width", "onShowStock"])) : Pe("", !0)
    ], 2)) : Pe("", !0)
  ], 64);
}
typeof Rd == "function" && Rd(Gy);
const AP = /* @__PURE__ */ Pi(Gy, [["render", TP], ["__scopeId", "data-v-796d770d"]]), OP = {
  name: "Wordpress",
  //needs to be Wordpress not WordPress
  components: {
    CheckoutCalculator: AP
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
  computed: {
    smartcutConfigUnits() {
      return window.smartcutConfig.settings.units ?? "decimal";
    }
  },
  created() {
    console.log(
      "💥 Powered by https://smartcut.dev",
      window.smartcutConfig.version
    );
  },
  mounted() {
    var t, n, i;
    console.log("Launching WordPress checkout..."), this.bandingData = ((t = window.smartcutConfig) == null ? void 0 : t.banding_data) ?? null, this.machiningPricing = ((n = window.smartcutConfig) == null ? void 0 : n.machining_pricing) ?? null, this.variations = ((i = window.smartcutConfig) == null ? void 0 : i.variations) ?? null, this.cacheElements(), this.cacheInputFields(), this.configureProduct(window.smartcutConfig), this.configurePricing(window.smartcutConfig), this.initCheckout(), this.configureStock(), jQuery(".variations_form").on("reset_data", () => {
      this.disableCutToSize();
    }), jQuery(".variations_form").on("found_variation", (s, r) => {
      var a, l, u;
      this.reset(), this.stock = [];
      const o = (a = r == null ? void 0 : r.attributes) == null ? void 0 : a.attribute_thickness;
      if (this.product.selected_thickness = o, this.product.multiple_sizes) {
        const c = this.getSizes(r);
        if (!c)
          return this.disableCutToSize(), this.el.cart_button.disabled = !0, this.el.quantity.readOnly = !0, this.error("The size of this multiple size product could not be found");
        Array.isArray(c) ? this.enableCutToSize() : this.isFullSheetSize(c) ? (this.disableCutToSize(), this.enableFullSheet(), this.el.quantity.style.display = "inline-block") : (this.enableCutToSize(), this.el.quantity.style.display = "none"), this.log(["variation found", c, o]);
        let f;
        if ((l = this.variations) != null && l.length && this.product.selected_thickness) {
          if (Array.isArray(c)) {
            const h = this.variations.find((d) => d.attributes.thickness === this.product.selected_thickness);
            if (!h)
              return this.error(`variation not found for thickness ${this.product.selected_thickness}`);
            f = c.map((d) => ({
              size: d,
              l: d.split("x")[0],
              w: d.split("x")[1],
              t: this.product.selected_thickness,
              price: h == null ? void 0 : h.price
            }));
          } else
            f = this.variations.filter((h) => {
              var d, p;
              return /\d+x\d+/.test((d = h == null ? void 0 : h.attributes) == null ? void 0 : d.size) ? this.product.selected_thickness === ((p = h == null ? void 0 : h.attributes) == null ? void 0 : p.thickness) : !1;
            }).map((h) => {
              var d, p, y;
              return {
                size: (d = h == null ? void 0 : h.attributes) == null ? void 0 : d.size,
                l: (p = h == null ? void 0 : h.attributes) == null ? void 0 : p.size.split("x")[0],
                w: (y = h == null ? void 0 : h.attributes) == null ? void 0 : y.size.split("x")[1],
                t: this.product.selected_thickness,
                price: h == null ? void 0 : h.price
                //the base price entered by the admin
              };
            });
          f.forEach((h) => {
            const d = this.createStock(
              h.l,
              h.w,
              h.t,
              h.price,
              r == null ? void 0 : r.attributes
            );
            this.stock.push(d);
          });
        }
      } else {
        this.el.quantity.style.display = "inline-block";
        const c = this.variations.find((h) => h.attributes.thickness === this.product.selected_thickness);
        if (!c)
          return this.error(`variation not found for thickness ${this.product.selected_thickness}`);
        const f = (u = r == null ? void 0 : r.attributes) == null ? void 0 : u.attribute_thickness;
        this.stock.push(this.createStock(
          this.product.l,
          this.product.w,
          f,
          c.price,
          r == null ? void 0 : r.attributes
        )), this.enableCutToSize();
      }
    }), [
      "div.quantity > input.plus",
      "div.quantity > input.minus",
      "div.quantity .qty-plus",
      "div.quantity .qty-minus"
    ].forEach((s) => {
      const r = document.querySelector(s);
      r && (r.style.display = "none");
    });
  },
  methods: {
    toggleDebug(e) {
      this.debug = e;
    },
    log(e) {
      this.debug && console.log("SmartCut -", ...e);
    },
    enableCutToSize() {
      [
        "checkout",
        "intro_text",
        "offcuts",
        "banding_key"
      ].forEach((t) => {
        const n = this.el[t];
        n && (n.style.display = "block");
      }), this.isPricingTableNeeded() && (this.el.pricing_table.style.display = "table"), this.el.cart_button.disabled = !0, this.el.quantity.readOnly = !0, this.el.quantity.style.display = "inline-block";
    },
    disableCutToSize() {
      var t;
      [
        "checkout",
        "intro_text",
        "offcuts",
        "banding_key",
        "pricing_table"
      ].forEach((n) => {
        const i = this.el[n];
        i && (i.style.display = "none");
      }), (t = this.el) != null && t.quantity && (this.el.quantity.style.display = "inline-block");
    },
    enableFullSheet() {
      this.el.cart_button.disabled = !1, this.el.quantity.readOnly = !1;
    },
    parseValue(e, t) {
      let n;
      switch (t) {
        case "string":
        case "hex":
          n = this.parseString(e);
          break;
        case "boolean":
          n = this.parseBoolean(e);
          break;
        case "int":
          n = this.parseInt(e);
          break;
        case "float":
          n = this.parseFloat(e);
          break;
        default:
          n = this.parseString(e);
          break;
      }
      return n;
    },
    parseInt(e) {
      return e ? parseInt(e) : 0;
    },
    parseFloat(e) {
      return e ? parseFloat(e) : 0;
    },
    parseBoolean(e) {
      return e ? e === "1" : !1;
    },
    parseString(e) {
      return e || "";
    },
    initCheckout() {
      var s, r, o, a, l, u, c, f, h, d, p, y, w, S, k, b, C, A, I, P;
      if (!(window != null && window.smartcutConfig)) {
        console.error("SmartCut config not found");
        return;
      }
      for (const D in window.smartcutConfig.settings_fields)
        this.settings[D] = this.parseValue(
          window.smartcutConfig.settings[D],
          window.smartcutConfig.settings_fields[D]
        );
      const e = this.getBandingOptions((s = window.smartcutConfig) == null ? void 0 : s.banding_data), t = {
        debug: this.settings.debug,
        units: this.settings.units,
        locale: window.smartcutConfig.locale,
        //saw settings
        bladeWidth: this.settings.blade_width,
        stockType: this.settings.stock_type,
        cutPreference: this.settings.cut_preference,
        stackHeight: this.settings.stack_height,
        maxParts: this.settings.max_parts ?? null,
        //disable default options
        disableBanding: this.settings.disable_banding,
        disableOrientation: this.settings.disable_orientation,
        disablePartName: this.settings.disable_part_name,
        enableCSVImport: this.settings.enable_import,
        //diagram
        showDiagram: !this.settings.hide_diagram,
        showProgressNumber: this.settings.pricing_strategy !== "part_area",
        enableMachining: this.settings.enable_machining,
        disableClick: !1,
        orientationModel: 0,
        decimalPlaces: 2,
        //colors
        colors: {
          partA: (r = this.settings) != null && r.part_a_color ? (o = this.settings) == null ? void 0 : o.part_a_color : "#1d9bc4",
          partB: (a = this.settings) != null && a.part_b_color ? (l = this.settings) == null ? void 0 : l.part_b_color : "#065d7a",
          partHover: (u = this.settings) != null && u.part_hover_color ? (c = this.settings) == null ? void 0 : c.part_hover_color : "#f8b029",
          partSelected: (f = this.settings) != null && f.part_selected_color ? (h = this.settings) == null ? void 0 : h.part_selected_color : "#5bc85b",
          stock: (d = this.settings) != null && d.stock_color ? (p = this.settings) == null ? void 0 : p.stock_color : "#ffd166",
          button: (y = this.settings) != null && y.button_color ? (w = this.settings) == null ? void 0 : w.button_color : "#118ab2",
          buttonText: (S = this.settings) != null && S.button_text_color ? (k = this.settings) == null ? void 0 : k.button_text_color : "#ffffff",
          text: (b = this.settings) != null && b.text_color ? (C = this.settings) == null ? void 0 : C.text_color : "#ffffff"
        }
      }, n = {
        units: "decimal",
        sides: {
          enabled: this.settings.machining_sides
        },
        holes: {
          enabled: this.settings.machining_holes,
          defaultDiameter: this.settings.machining_holes_default_diameter,
          diameters: this.settings.machining_holes_diameters.split(",").map((D) => D.trim()).filter((D) => D),
          minDiameter: this.settings.machining_holes_min_diameter,
          maxDiameter: this.settings.machining_holes_max_diameter,
          enableDepth: this.settings.machining_holes_depth,
          depths: this.settings.machining_holes_depths.split(",").map((D) => D.trim()).filter((D) => D),
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
          ].filter((D) => D),
          minValue: this.settings.machining_corners_min_value,
          maxValue: this.settings.machining_corners_max_value,
          enableBanding: this.settings.machining_corners_enable_banding
        },
        banding: {
          enabled: !!(!this.settings.disable_banding && ((I = (A = window.smartcutConfig) == null ? void 0 : A.banding_data) != null && I.length)),
          enableCorners: this.settings.machining_corners_enable_banding,
          types: window.smartcutConfig.banding_data ? Object.values(window.smartcutConfig.banding_data).map((D) => D.name) : [],
          enableTypes: !!((P = window.smartcutConfig) != null && P.banding_data)
        }
      }, i = Gi.call(this, "calculator");
      i && i.init({
        stock: this.stock,
        banding: e,
        machining: n,
        options: t,
        type: this.product.type,
        variations: this.variations ?? null
      });
    },
    formatPrice(e = 0, t = !1) {
      if (!e)
        return t ? this.addCurrencySymbol("0.00") : "0.00";
      typeof e == "string" && (e = parseFloat(e));
      const n = e.toFixed(this.formatting.number_of_decimals).replace(".", this.formatting.decimal_separator);
      return t ? this.addCurrencySymbol(n) : n;
    },
    addCurrencySymbol(e) {
      switch (this.formatting.currency_position) {
        case "left":
          return `${this.formatting.currency_symbol}${e}`;
        case "right":
          return `${e}${this.formatting.currency_symbol}`;
        default:
          return `${this.formatting.currency_symbol}${e}`;
      }
    },
    configureProduct(e) {
      const t = (e == null ? void 0 : e.multiple_sizes) === "1";
      this.product = {
        type: e == null ? void 0 : e.product_type,
        multiple_sizes: t,
        size: e != null && e.size ? e.size.split(" | ") : [],
        l: !t && (e != null && e.l) ? this.parseFloat(e.l) : null,
        w: !t && (e != null && e.w) ? this.parseFloat(e.w) : null,
        t: (e == null ? void 0 : e.t) ?? null
        //do not parse to allow for multiple thicknesses separated by a comma
      }, this.product.stock_name = e.stock_name, this.product.multiple_sizes || (this.product.l || this.error("product 'length' attribute not available"), this.product.w || this.error("product 'width' attribute not available"));
    },
    configurePricing(e) {
      this.formatting = {
        thousands_separator: e == null ? void 0 : e.thousands_separator,
        decimal_separator: e == null ? void 0 : e.decimal_separator,
        number_of_decimals: e == null ? void 0 : e.number_of_decimals,
        currency_symbol: e == null ? void 0 : e.currency_symbol,
        currency_position: e == null ? void 0 : e.currency_position
      };
    },
    cacheElements() {
      if (this.el.checkout = document.getElementById("smartcut-app"), !this.el.checkout)
        return this.error("checkout iframe not found");
      if (this.el.intro_text = document.getElementById("smartcut-intro-text"), this.el.pricing_table = document.getElementById("smartcut-pricing-table"), this.el.offcuts = document.getElementById("include_offcuts_field"), this.el.banding_key = document.getElementById("smartcut-banding-key"), this.el.banding_total_price = document.querySelector("#smartcut-banding-total bdi .smartcut-price-selector"), this.el.cut_length_price = document.querySelector("#smartcut-cut-length-total bdi .smartcut-price-selector"), this.el.per_part_price = document.querySelector("#smartcut-per-part-total bdi .smartcut-price-selector"), this.el.surcharge_price = document.querySelector("#smartcut-surcharge-total bdi .smartcut-price-selector"), this.el.machining_total_price = document.querySelector("#smartcut-machining-total bdi .smartcut-price-selector"), this.el.quantity = document.querySelector(".smartcut-stock-quantity"), this.el.cart_button = document.querySelector(".single_add_to_cart_button"), !this.el.quantity)
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
    createStock(e = null, t = null, n = null, i = null, s = null) {
      let r;
      if (s && typeof s == "object") {
        if (r = [], s && typeof s == "object")
          for (const [a, l] of Object.entries(s))
            a !== "attribute_size" && a !== "attribute_thickness" && r.push(`${a.replace("attribute_", "")}: ${l}`);
        r = r.join(" - ");
      }
      return {
        name: this.product.stock_name,
        type: this.settings.stock_type,
        l: e,
        w: t,
        t: n,
        cost: parseFloat(i),
        trim: this.getStockTrim(),
        notes: r
      };
    },
    configureStock() {
      var e, t;
      (e = this.product) != null && e.stock_name || this.error("product name not specified"), this.product.type === "variable" ? this.disableCutToSize() : (this.enableCutToSize(), this.stock = [], this.product.multiple_sizes ? this.product.size.forEach((n) => {
        var o;
        const [i, s] = n.split("x"), r = this.createStock(
          i,
          s,
          (o = this.product) == null ? void 0 : o.t,
          n.price
        );
        this.stock.push(r);
      }) : this.stock.push(this.createStock(
        this.product.l,
        this.product.w,
        (t = this.product) == null ? void 0 : t.t
      )));
    },
    formatBandingKey(e) {
      return Qc(us(e), 100).replace("|", "_");
    },
    //map the banding data into options and ensure the keys are formatted correctly
    getBandingOptions(e) {
      if (!e) return null;
      const t = {};
      for (const n of Object.values(e)) {
        const i = n == null ? void 0 : n.options;
        if (!(n == null ? void 0 : n.variations)) {
          "simple" in t ? t.simple.push(...Object.values(i).flat()) : t.simple = Object.values(i).flat();
          continue;
        }
        for (const [r, o] of Object.entries(i))
          t[r] = Array.isArray(o) ? o : [o];
      }
      for (const [n, i] of Object.entries(t))
        t[n] = i.map((s) => this.formatBandingKey(s));
      return t;
    },
    //find the price of a banding option based on an array of options
    findBandingPrice(e) {
      const n = Object.values(this.bandingData).map((i) => i != null && i.variations ? Object.values(i.variations) : i).flat().find((i) => {
        const s = Object.values(i.options);
        return s ? e.every((r, o) => {
          const a = s == null ? void 0 : s[o];
          return a ? this.formatBandingKey(a) === e[o] : !1;
        }) : !1;
      });
      return n ? n.price : null;
    },
    //get the total price of the banding based on the bandingLengthByType metadata
    getTotalBandingPrice(e) {
      var n;
      let t = 0;
      if (typeof e == "object") {
        for (let [i, s] of Object.entries(e)) {
          typeof s == "string" && (s = parseFloat(s));
          const r = i.split("|"), o = this.findBandingPrice(r);
          if (o === null) continue;
          const a = s / (this.settings.units === "fraction" ? 12 : 1e3) * parseFloat(o);
          t += a;
        }
        if ("min_banding_charge" in this.settings) {
          const i = parseFloat((n = this.settings) == null ? void 0 : n.min_banding_charge);
          if (i > 0 && t > 0 && t < i)
            return i;
        }
        return t;
      } else
        return 0;
    },
    getTotalMachiningPrice(e) {
      return (this.machiningPricing.holes ?? 0) * (e.metadata.numHoles ?? 0) + (this.machiningPricing.corners ?? 0) * (e.metadata.numCorners ?? 0);
    },
    reset() {
      this.el.quantity.value = 1, this.el.cart_button.disabled = !0, this.inputs["smartcut-cut-to-size-surcharge"].value = 0, this.el.banding_total_price && (this.el.banding_total_price.innerText = this.formatPrice(0)), this.el.machining_total_price && (this.el.machining_total_price.innerText = this.formatPrice(0)), this.el.cut_length_price && (this.el.cut_length_price.innerText = this.formatPrice(0)), this.el.per_part_price && (this.el.per_part_price.innerText = this.formatPrice(0));
      for (const e in this.inputs)
        this.inputs[e].value = null;
    },
    error(e) {
      console.error(`SmartCut - ${e}`);
    },
    isQuantityPricing() {
      var e;
      if (((e = window.smartcutConfig) == null ? void 0 : e.product_type) === "variable")
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
      var e;
      return !(((e = this.settings) == null ? void 0 : e.disable_banding) === !0 || !this.bandingData || !Object.values(this.bandingData).length);
    },
    isMachiningEnabled() {
      return this.settings.enable_machining === !0;
    },
    isSurchargeEnabled() {
      var e, t;
      return !(((e = this.settings) == null ? void 0 : e.surcharge_type) === "none" || !((t = this == null ? void 0 : this.settings) != null && t.surcharge) || this.settings.surcharge === "0.00");
    },
    isPricingTableNeeded() {
      return !!(this.settings.pricing_strategy === "full_sheet_plus_cut_length" || this.settings.pricing_strategy === "full_sheet_plus_num_parts" || this.isSurchargeEnabled() || this.isBandingEnabled() || this.isMachiningEnabled());
    },
    /**
           * @param {WC_Product_Variation} variation
           * @returns {string[] | string}
           */
    getSizes(e) {
      var n, i;
      let t = null;
      return e && (t = (n = e == null ? void 0 : e.attributes) == null ? void 0 : n.attribute_size), t || (t = (i = this.product) == null ? void 0 : i.size), t;
    },
    isFullSheetSize(e) {
      return /\d+x\d+/.test(e);
    },
    cacheInputFields() {
      window.smartcutConfig.input_fields.forEach((e) => {
        const t = e.replaceAll("_", "-");
        this.inputs[t] = document.getElementById(t);
      });
    },
    result(e) {
      var u, c, f, h;
      this.reset();
      const t = this.isQuantityPricing();
      let n = t ? e.metadata.totalStockCost / e.metadata.totalUsedStock : 0;
      if (this.log(["result event received", e]), !(e != null && e.jobId)) return;
      switch (this.product.multiple_sizes && this.log(["result event received for multiple sizes"]), this.settings.pricing_strategy) {
        case "full_sheet":
          this.log(["calculating cost by full sheet"]), t ? this.el.quantity.value = e.metadata.totalUsedStock : this.el.quantity.value = 1, this.el.cart_button.disabled = !1;
          break;
        case "part_area":
          {
            this.log([
              "calculating cost by part area in meters / sq feet"
            ]);
            const d = this.settings.units === "fraction" ? e.metadata.totalPartArea / 144 : e.metadata.totalPartArea / 1e6;
            this.log([
              `part area in square ${this.settings.units === "fraction" ? "feet" : "meters"}`,
              d
            ]), this.el.quantity.value = d.toFixed(2), this.el.cart_button.disabled = !1;
          }
          break;
        case "cut_length":
          {
            this.log([
              "calculating cost by cut length in feet / meters"
            ]);
            const d = e.metadata.totalCutLength / (this.settings.units === "fraction" ? 12 : 1e3);
            this.el.quantity.value = d.toFixed(2), this.el.cart_button.disabled = !1;
          }
          break;
        case "full_sheet_plus_cut_length":
          {
            this.log([
              "calculating cost by full sheet plus cut length"
            ]), t ? (this.el.quantity.style.display = "inline-block", this.el.quantity.value = e.metadata.totalUsedStock) : (this.el.quantity.value = 1, this.el.quantity.style.display = "none");
            const p = e.metadata.totalCutLength / (this.settings.units === "fraction" ? 12 : 1e3) * this.settings.cut_length_price;
            this.el.cut_length_price && (this.el.cut_length_price.innerText = this.formatPrice(p)), this.inputs["smartcut-cut-length-price"].value = p, n += p, this.el.cart_button.disabled = !1;
          }
          break;
        case "full_sheet_plus_num_parts":
          {
            this.log([
              "calculating cost by full sheet plus number of parts"
            ]), t ? (this.el.quantity.style.display = "inline-block", this.el.quantity.value = e.metadata.totalUsedStock) : (this.el.quantity.value = 1, this.el.quantity.style.display = "none");
            const d = e.metadata.totalPartsProduced * this.settings.per_part_price;
            this.el.per_part_price && (this.el.per_part_price.innerText = this.formatPrice(d)), this.inputs["smartcut-per-part-price"].value = d, n += d, this.el.cart_button.disabled = !1;
          }
          break;
      }
      if (!t) {
        if (!e.metadata.totalStockCost)
          return this.error("Total stock cost not returned for a multiple size product");
        const d = parseFloat(e.metadata.totalStockCost);
        this.log(["total price", d]), document.getElementById("smartcut-custom-price").value = d.toString(), n += d;
      }
      if (this.isBandingEnabled()) {
        const d = this.getTotalBandingPrice(e.metadata.bandingLengthByType);
        this.inputs["smartcut-banding-price"].value = d, this.el.banding_total_price && (this.el.banding_total_price.innerText = this.formatPrice(d)), n += d;
      }
      if (this.isMachiningEnabled()) {
        const d = this.getTotalMachiningPrice(e);
        this.inputs["smartcut-machining-price"].value = d, this.el.machining_total_price && (this.el.machining_total_price.innerText = this.formatPrice(d)), n += d;
      }
      if (this.isSurchargeEnabled() && (u = this.settings) != null && u.surcharge) {
        let d = 0;
        ((c = this.settings) == null ? void 0 : c.surcharge_type) === "per_sheet" ? d = parseFloat((f = this.settings) == null ? void 0 : f.surcharge) * parseFloat(e.metadata.totalUsedStock) : d = parseFloat((h = this.settings) == null ? void 0 : h.surcharge), this.inputs["smartcut-cut-to-size-surcharge"].value = d, this.el.surcharge_price && (this.el.surcharge_price.innerText = this.formatPrice(d)), this.log(["added surcharge", d]), n += d;
      }
      const i = document.querySelector(".woocommerce-variation-price .smartcut-price-selector");
      i && (i.innerText = this.formatPrice(n));
      const s = {
        "smartcut-job-id": null,
        "smartcut-dimensions": null,
        "smartcut-total-cut-length": "totalCutLength",
        "smartcut-part-area": "totalPartArea",
        "smartcut-total-cuts": "totalCuts",
        "smartcut-total-parts": "totalPartsProduced",
        "smartcut-machining": "hasMachining"
      }, r = Object.keys(s), o = r.filter((d) => d in this.inputs);
      o.length !== r.length && console.error(
        "Some requried hidden fields are missing",
        r.join(),
        o.join()
      ), this.inputs["smartcut-job-id"].value = e == null ? void 0 : e.jobId;
      const a = e == null ? void 0 : e.parts.map((d) => `${d.l}x${d.w} [${d.q}]`).join(", ");
      this.inputs["smartcut-dimensions"].value = a, Object.entries(s).filter(([, d]) => d !== null).map(([d]) => d).forEach((d) => {
        this.inputs[d].value = e.metadata[s[d]];
      });
    }
  }
};
function PP(e, t, n, i, s, r) {
  const o = yn("CheckoutCalculator");
  return te(), Zt(o, {
    ref: "calculator",
    debug: s.debug,
    stock: s.stock,
    units: r.smartcutConfigUnits,
    onLog: r.log,
    onError: r.error,
    onDebug: r.toggleDebug,
    onResult: r.result
  }, null, 8, ["debug", "stock", "units", "onLog", "onError", "onDebug", "onResult"]);
}
const NP = /* @__PURE__ */ Pi(OP, [["render", PP]]), IP = /* @__PURE__ */ Vo(() => import("./Vanilla-xu9BSczK.js")), MP = /* @__PURE__ */ Ti({
  name: "Launch",
  components: {
    Wordpress: NP,
    Vanilla: IP
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
  }
  //these will be exposed on window.smartcutCheckout
  /* methods: {
  	test()
  	{
  		console.log( 'test' );
  	}
  } */
});
function LP(e, t, n, i, s, r) {
  return te(), Zt(M0(e.currentComponent), { ref: "checkout" }, null, 512);
}
const DP = /* @__PURE__ */ Pi(MP, [["render", LP]]), Fd = () => {
};
let Ku = {}, Hy = {}, Ky = null, Yy = {
  mark: Fd,
  measure: Fd
};
try {
  typeof window < "u" && (Ku = window), typeof document < "u" && (Hy = document), typeof MutationObserver < "u" && (Ky = MutationObserver), typeof performance < "u" && (Yy = performance);
} catch {
}
const {
  userAgent: $d = ""
} = Ku.navigator || {}, Hn = Ku, Ie = Hy, Bd = Ky, Dr = Yy;
Hn.document;
const Pn = !!Ie.documentElement && !!Ie.head && typeof Ie.addEventListener == "function" && typeof Ie.createElement == "function", Xy = ~$d.indexOf("MSIE") || ~$d.indexOf("Trident/");
var Le = "classic", Jy = "duotone", Ct = "sharp", Tt = "sharp-duotone", RP = [Le, Jy, Ct, Tt], FP = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds"
  }
}, jd = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, $P = ["kit"], BP = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/, jP = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, qP = {
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
}, UP = {
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
    900: "fad"
  },
  "Font Awesome 6 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 6 Sharp Duotone": {
    900: "fasds"
  }
}, WP = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds"
  }
}, VP = {
  classic: ["fas", "far", "fal", "fat"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds"]
}, zP = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid"
  }
}, GP = {
  classic: {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    duotone: "fad",
    brands: "fab"
  },
  sharp: {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
  },
  "sharp-duotone": {
    solid: "fasds"
  }
}, Qy = {
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
    fad: "duotone",
    "fa-duotone": "duotone",
    fab: "brands",
    "fa-brands": "brands"
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
    "fa-solid": "solid"
  }
}, HP = ["solid", "regular", "light", "thin", "duotone", "brands"], Zy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], KP = Zy.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), As = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, YP = [...Object.keys(VP), ...HP, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", As.GROUP, As.SWAP_OPACITY, As.PRIMARY, As.SECONDARY].concat(Zy.map((e) => "".concat(e, "x"))).concat(KP.map((e) => "w-".concat(e))), XP = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, JP = {
  kit: {
    "fa-kit": "fak"
  },
  "kit-duotone": {
    "fa-kit-duotone": "fakd"
  }
}, QP = {
  kit: {
    fak: "fa-kit"
  },
  "kit-duotone": {
    fakd: "fa-kit-duotone"
  }
}, qd = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
};
const Cn = "___FONT_AWESOME___", Zl = 16, eb = "fa", tb = "svg-inline--fa", ki = "data-fa-i2svg", ec = "data-fa-pseudo-element", ZP = "data-fa-pseudo-element-pending", Yu = "data-prefix", Xu = "data-icon", Ud = "fontawesome-i2svg", eN = "async", tN = ["HTML", "HEAD", "STYLE", "SCRIPT"], nb = (() => {
  try {
    return !0;
  } catch {
    return !1;
  }
})(), ib = [Le, Ct, Tt];
function fr(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[Le];
    }
  });
}
const sb = {
  ...Qy
};
sb[Le] = {
  ...Qy[Le],
  ...jd.kit,
  ...jd["kit-duotone"]
};
const gi = fr(sb), tc = {
  ...GP
};
tc[Le] = {
  ...tc[Le],
  ...qd.kit,
  ...qd["kit-duotone"]
};
const Js = fr(tc), nc = {
  ...zP
};
nc[Le] = {
  ...nc[Le],
  ...QP.kit
};
const mi = fr(nc), ic = {
  ...WP
};
ic[Le] = {
  ...ic[Le],
  ...JP.kit
};
const nN = fr(ic), iN = BP, rb = "fa-layers-text", sN = jP, rN = {
  ...FP
};
fr(rN);
const oN = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Ha = As, os = /* @__PURE__ */ new Set();
Object.keys(Js[Le]).map(os.add.bind(os));
Object.keys(Js[Ct]).map(os.add.bind(os));
Object.keys(Js[Tt]).map(os.add.bind(os));
const aN = [...$P, ...YP], $s = Hn.FontAwesomeConfig || {};
function lN(e) {
  var t = Ie.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function cN(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
Ie && typeof Ie.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, i] = t;
  const s = cN(lN(n));
  s != null && ($s[i] = s);
});
const ob = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: eb,
  replacementClass: tb,
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
$s.familyPrefix && ($s.cssPrefix = $s.familyPrefix);
const as = {
  ...ob,
  ...$s
};
as.autoReplaceSvg || (as.observeMutations = !1);
const Z = {};
Object.keys(ob).forEach((e) => {
  Object.defineProperty(Z, e, {
    enumerable: !0,
    set: function(t) {
      as[e] = t, Bs.forEach((n) => n(Z));
    },
    get: function() {
      return as[e];
    }
  });
});
Object.defineProperty(Z, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    as.cssPrefix = e, Bs.forEach((t) => t(Z));
  },
  get: function() {
    return as.cssPrefix;
  }
});
Hn.FontAwesomeConfig = Z;
const Bs = [];
function uN(e) {
  return Bs.push(e), () => {
    Bs.splice(Bs.indexOf(e), 1);
  };
}
const Ln = Zl, rn = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function fN(e) {
  if (!e || !Pn)
    return;
  const t = Ie.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = Ie.head.childNodes;
  let i = null;
  for (let s = n.length - 1; s > -1; s--) {
    const r = n[s], o = (r.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(o) > -1 && (i = r);
  }
  return Ie.head.insertBefore(t, i), e;
}
const hN = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Qs() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += hN[Math.random() * 62 | 0];
  return t;
}
function ds(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function Ju(e) {
  return e.classList ? ds(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function ab(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function dN(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(ab(e[n]), '" '), "").trim();
}
function ba(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function Qu(e) {
  return e.size !== rn.size || e.x !== rn.x || e.y !== rn.y || e.rotate !== rn.rotate || e.flipX || e.flipY;
}
function pN(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: i
  } = e;
  const s = {
    transform: "translate(".concat(n / 2, " 256)")
  }, r = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), a = "rotate(".concat(t.rotate, " 0 0)"), l = {
    transform: "".concat(r, " ").concat(o, " ").concat(a)
  }, u = {
    transform: "translate(".concat(i / 2 * -1, " -256)")
  };
  return {
    outer: s,
    inner: l,
    path: u
  };
}
function gN(e) {
  let {
    transform: t,
    width: n = Zl,
    height: i = Zl,
    startCentered: s = !1
  } = e, r = "";
  return s && Xy ? r += "translate(".concat(t.x / Ln - n / 2, "em, ").concat(t.y / Ln - i / 2, "em) ") : s ? r += "translate(calc(-50% + ".concat(t.x / Ln, "em), calc(-50% + ").concat(t.y / Ln, "em)) ") : r += "translate(".concat(t.x / Ln, "em, ").concat(t.y / Ln, "em) "), r += "scale(".concat(t.size / Ln * (t.flipX ? -1 : 1), ", ").concat(t.size / Ln * (t.flipY ? -1 : 1), ") "), r += "rotate(".concat(t.rotate, "deg) "), r;
}
var mN = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
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
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function lb() {
  const e = eb, t = tb, n = Z.cssPrefix, i = Z.replacementClass;
  let s = mN;
  if (n !== e || i !== t) {
    const r = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), a = new RegExp("\\.".concat(t), "g");
    s = s.replace(r, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(a, ".".concat(i));
  }
  return s;
}
let Wd = !1;
function Ka() {
  Z.autoAddCss && !Wd && (fN(lb()), Wd = !0);
}
var yN = {
  mixout() {
    return {
      dom: {
        css: lb,
        insertCss: Ka
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Ka();
      },
      beforeI2svg() {
        Ka();
      }
    };
  }
};
const Tn = Hn || {};
Tn[Cn] || (Tn[Cn] = {});
Tn[Cn].styles || (Tn[Cn].styles = {});
Tn[Cn].hooks || (Tn[Cn].hooks = {});
Tn[Cn].shims || (Tn[Cn].shims = []);
var on = Tn[Cn];
const cb = [], ub = function() {
  Ie.removeEventListener("DOMContentLoaded", ub), No = 1, cb.map((e) => e());
};
let No = !1;
Pn && (No = (Ie.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Ie.readyState), No || Ie.addEventListener("DOMContentLoaded", ub));
function bN(e) {
  Pn && (No ? setTimeout(e, 0) : cb.push(e));
}
function hr(e) {
  const {
    tag: t,
    attributes: n = {},
    children: i = []
  } = e;
  return typeof e == "string" ? ab(e) : "<".concat(t, " ").concat(dN(n), ">").concat(i.map(hr).join(""), "</").concat(t, ">");
}
function Vd(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var Ya = function(t, n, i, s) {
  var r = Object.keys(t), o = r.length, a = n, l, u, c;
  for (i === void 0 ? (l = 1, c = t[r[0]]) : (l = 0, c = i); l < o; l++)
    u = r[l], c = a(c, t[u], u, t);
  return c;
};
function wN(e) {
  const t = [];
  let n = 0;
  const i = e.length;
  for (; n < i; ) {
    const s = e.charCodeAt(n++);
    if (s >= 55296 && s <= 56319 && n < i) {
      const r = e.charCodeAt(n++);
      (r & 64512) == 56320 ? t.push(((s & 1023) << 10) + (r & 1023) + 65536) : (t.push(s), n--);
    } else
      t.push(s);
  }
  return t;
}
function sc(e) {
  const t = wN(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function vN(e, t) {
  const n = e.length;
  let i = e.charCodeAt(t), s;
  return i >= 55296 && i <= 56319 && n > t + 1 && (s = e.charCodeAt(t + 1), s >= 56320 && s <= 57343) ? (i - 55296) * 1024 + s - 56320 + 65536 : i;
}
function zd(e) {
  return Object.keys(e).reduce((t, n) => {
    const i = e[n];
    return !!i.icon ? t[i.iconName] = i.icon : t[n] = i, t;
  }, {});
}
function rc(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: i = !1
  } = n, s = zd(t);
  typeof on.hooks.addPack == "function" && !i ? on.hooks.addPack(e, zd(t)) : on.styles[e] = {
    ...on.styles[e] || {},
    ...s
  }, e === "fas" && rc("fa", t);
}
const {
  styles: ci,
  shims: _N
} = on, xN = {
  [Le]: Object.values(mi[Le]),
  [Ct]: Object.values(mi[Ct]),
  [Tt]: Object.values(mi[Tt])
};
let Zu = null, fb = {}, hb = {}, db = {}, pb = {}, gb = {};
const SN = {
  [Le]: Object.keys(gi[Le]),
  [Ct]: Object.keys(gi[Ct]),
  [Tt]: Object.keys(gi[Tt])
};
function kN(e) {
  return ~aN.indexOf(e);
}
function EN(e, t) {
  const n = t.split("-"), i = n[0], s = n.slice(1).join("-");
  return i === e && s !== "" && !kN(s) ? s : null;
}
const mb = () => {
  const e = (i) => Ya(ci, (s, r, o) => (s[o] = Ya(r, i, {}), s), {});
  fb = e((i, s, r) => (s[3] && (i[s[3]] = r), s[2] && s[2].filter((a) => typeof a == "number").forEach((a) => {
    i[a.toString(16)] = r;
  }), i)), hb = e((i, s, r) => (i[r] = r, s[2] && s[2].filter((a) => typeof a == "string").forEach((a) => {
    i[a] = r;
  }), i)), gb = e((i, s, r) => {
    const o = s[2];
    return i[r] = r, o.forEach((a) => {
      i[a] = r;
    }), i;
  });
  const t = "far" in ci || Z.autoFetchSvg, n = Ya(_N, (i, s) => {
    const r = s[0];
    let o = s[1];
    const a = s[2];
    return o === "far" && !t && (o = "fas"), typeof r == "string" && (i.names[r] = {
      prefix: o,
      iconName: a
    }), typeof r == "number" && (i.unicodes[r.toString(16)] = {
      prefix: o,
      iconName: a
    }), i;
  }, {
    names: {},
    unicodes: {}
  });
  db = n.names, pb = n.unicodes, Zu = wa(Z.styleDefault, {
    family: Z.familyDefault
  });
};
uN((e) => {
  Zu = wa(e.styleDefault, {
    family: Z.familyDefault
  });
});
mb();
function ef(e, t) {
  return (fb[e] || {})[t];
}
function CN(e, t) {
  return (hb[e] || {})[t];
}
function jn(e, t) {
  return (gb[e] || {})[t];
}
function yb(e) {
  return db[e] || {
    prefix: null,
    iconName: null
  };
}
function TN(e) {
  const t = pb[e], n = ef("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Kn() {
  return Zu;
}
const tf = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function wa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = Le
  } = t, i = gi[n][e], s = Js[n][e] || Js[n][i], r = e in on.styles ? e : null;
  return s || r || null;
}
const AN = {
  [Le]: Object.keys(mi[Le]),
  [Ct]: Object.keys(mi[Ct]),
  [Tt]: Object.keys(mi[Tt])
};
function va(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t, i = {
    [Le]: "".concat(Z.cssPrefix, "-").concat(Le),
    [Ct]: "".concat(Z.cssPrefix, "-").concat(Ct),
    [Tt]: "".concat(Z.cssPrefix, "-").concat(Tt)
  };
  let s = null, r = Le;
  const o = RP.filter((l) => l !== Jy);
  o.forEach((l) => {
    (e.includes(i[l]) || e.some((u) => AN[l].includes(u))) && (r = l);
  });
  const a = e.reduce((l, u) => {
    const c = EN(Z.cssPrefix, u);
    if (ci[u] ? (u = xN[r].includes(u) ? nN[r][u] : u, s = u, l.prefix = u) : SN[r].indexOf(u) > -1 ? (s = u, l.prefix = wa(u, {
      family: r
    })) : c ? l.iconName = c : u !== Z.replacementClass && !o.some((f) => u === i[f]) && l.rest.push(u), !n && l.prefix && l.iconName) {
      const f = s === "fa" ? yb(l.iconName) : {}, h = jn(l.prefix, l.iconName);
      f.prefix && (s = null), l.iconName = f.iconName || h || l.iconName, l.prefix = f.prefix || l.prefix, l.prefix === "far" && !ci.far && ci.fas && !Z.autoFetchSvg && (l.prefix = "fas");
    }
    return l;
  }, tf());
  return (e.includes("fa-brands") || e.includes("fab")) && (a.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (a.prefix = "fad"), !a.prefix && r === Ct && (ci.fass || Z.autoFetchSvg) && (a.prefix = "fass", a.iconName = jn(a.prefix, a.iconName) || a.iconName), !a.prefix && r === Tt && (ci.fasds || Z.autoFetchSvg) && (a.prefix = "fasds", a.iconName = jn(a.prefix, a.iconName) || a.iconName), (a.prefix === "fa" || s === "fa") && (a.prefix = Kn() || "fas"), a;
}
class ON {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    const s = n.reduce(this._pullDefinitions, {});
    Object.keys(s).forEach((r) => {
      this.definitions[r] = {
        ...this.definitions[r] || {},
        ...s[r]
      }, rc(r, s[r]);
      const o = mi[Le][r];
      o && rc(o, s[r]), mb();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, n) {
    const i = n.prefix && n.iconName && n.icon ? {
      0: n
    } : n;
    return Object.keys(i).map((s) => {
      const {
        prefix: r,
        iconName: o,
        icon: a
      } = i[s], l = a[2];
      t[r] || (t[r] = {}), l.length > 0 && l.forEach((u) => {
        typeof u == "string" && (t[r][u] = a);
      }), t[r][o] = a;
    }), t;
  }
}
let Gd = [], Bi = {};
const Hi = {}, PN = Object.keys(Hi);
function NN(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return Gd = e, Bi = {}, Object.keys(Hi).forEach((i) => {
    PN.indexOf(i) === -1 && delete Hi[i];
  }), Gd.forEach((i) => {
    const s = i.mixout ? i.mixout() : {};
    if (Object.keys(s).forEach((r) => {
      typeof s[r] == "function" && (n[r] = s[r]), typeof s[r] == "object" && Object.keys(s[r]).forEach((o) => {
        n[r] || (n[r] = {}), n[r][o] = s[r][o];
      });
    }), i.hooks) {
      const r = i.hooks();
      Object.keys(r).forEach((o) => {
        Bi[o] || (Bi[o] = []), Bi[o].push(r[o]);
      });
    }
    i.provides && i.provides(Hi);
  }), n;
}
function oc(e, t) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return (Bi[e] || []).forEach((o) => {
    t = o.apply(null, [t, ...i]);
  }), t;
}
function Ei(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    n[i - 1] = arguments[i];
  (Bi[e] || []).forEach((r) => {
    r.apply(null, n);
  });
}
function Yn() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Hi[e] ? Hi[e].apply(null, t) : void 0;
}
function ac(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || Kn();
  if (t)
    return t = jn(n, t) || t, Vd(bb.definitions, n, t) || Vd(on.styles, n, t);
}
const bb = new ON(), IN = () => {
  Z.autoReplaceSvg = !1, Z.observeMutations = !1, Ei("noAuto");
}, MN = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Pn ? (Ei("beforeI2svg", e), Yn("pseudoElements2svg", e), Yn("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    Z.autoReplaceSvg === !1 && (Z.autoReplaceSvg = !0), Z.observeMutations = !0, bN(() => {
      DN({
        autoReplaceSvgRoot: t
      }), Ei("watch", e);
    });
  }
}, LN = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: jn(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = wa(e[0]);
      return {
        prefix: n,
        iconName: jn(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(Z.cssPrefix, "-")) > -1 || e.match(iN))) {
      const t = va(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || Kn(),
        iconName: jn(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = Kn();
      return {
        prefix: t,
        iconName: jn(t, e) || e
      };
    }
  }
}, At = {
  noAuto: IN,
  config: Z,
  dom: MN,
  parse: LN,
  library: bb,
  findIconDefinition: ac,
  toHtml: hr
}, DN = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = Ie
  } = e;
  (Object.keys(on.styles).length > 0 || Z.autoFetchSvg) && Pn && Z.autoReplaceSvg && At.dom.i2svg({
    node: t
  });
};
function _a(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => hr(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!Pn) return;
      const n = Ie.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function RN(e) {
  let {
    children: t,
    main: n,
    mask: i,
    attributes: s,
    styles: r,
    transform: o
  } = e;
  if (Qu(o) && n.found && !i.found) {
    const {
      width: a,
      height: l
    } = n, u = {
      x: a / l / 2,
      y: 0.5
    };
    s.style = ba({
      ...r,
      "transform-origin": "".concat(u.x + o.x / 16, "em ").concat(u.y + o.y / 16, "em")
    });
  }
  return [{
    tag: "svg",
    attributes: s,
    children: t
  }];
}
function FN(e) {
  let {
    prefix: t,
    iconName: n,
    children: i,
    attributes: s,
    symbol: r
  } = e;
  const o = r === !0 ? "".concat(t, "-").concat(Z.cssPrefix, "-").concat(n) : r;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: {
        ...s,
        id: o
      },
      children: i
    }]
  }];
}
function nf(e) {
  const {
    icons: {
      main: t,
      mask: n
    },
    prefix: i,
    iconName: s,
    transform: r,
    symbol: o,
    title: a,
    maskId: l,
    titleId: u,
    extra: c,
    watchable: f = !1
  } = e, {
    width: h,
    height: d
  } = n.found ? n : t, p = i === "fak", y = [Z.replacementClass, s ? "".concat(Z.cssPrefix, "-").concat(s) : ""].filter((A) => c.classes.indexOf(A) === -1).filter((A) => A !== "" || !!A).concat(c.classes).join(" ");
  let w = {
    children: [],
    attributes: {
      ...c.attributes,
      "data-prefix": i,
      "data-icon": s,
      class: y,
      role: c.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(h, " ").concat(d)
    }
  };
  const S = p && !~c.classes.indexOf("fa-fw") ? {
    width: "".concat(h / d * 16 * 0.0625, "em")
  } : {};
  f && (w.attributes[ki] = ""), a && (w.children.push({
    tag: "title",
    attributes: {
      id: w.attributes["aria-labelledby"] || "title-".concat(u || Qs())
    },
    children: [a]
  }), delete w.attributes.title);
  const k = {
    ...w,
    prefix: i,
    iconName: s,
    main: t,
    mask: n,
    maskId: l,
    transform: r,
    symbol: o,
    styles: {
      ...S,
      ...c.styles
    }
  }, {
    children: b,
    attributes: C
  } = n.found && t.found ? Yn("generateAbstractMask", k) || {
    children: [],
    attributes: {}
  } : Yn("generateAbstractIcon", k) || {
    children: [],
    attributes: {}
  };
  return k.children = b, k.attributes = C, o ? FN(k) : RN(k);
}
function Hd(e) {
  const {
    content: t,
    width: n,
    height: i,
    transform: s,
    title: r,
    extra: o,
    watchable: a = !1
  } = e, l = {
    ...o.attributes,
    ...r ? {
      title: r
    } : {},
    class: o.classes.join(" ")
  };
  a && (l[ki] = "");
  const u = {
    ...o.styles
  };
  Qu(s) && (u.transform = gN({
    transform: s,
    startCentered: !0,
    width: n,
    height: i
  }), u["-webkit-transform"] = u.transform);
  const c = ba(u);
  c.length > 0 && (l.style = c);
  const f = [];
  return f.push({
    tag: "span",
    attributes: l,
    children: [t]
  }), r && f.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [r]
  }), f;
}
function $N(e) {
  const {
    content: t,
    title: n,
    extra: i
  } = e, s = {
    ...i.attributes,
    ...n ? {
      title: n
    } : {},
    class: i.classes.join(" ")
  }, r = ba(i.styles);
  r.length > 0 && (s.style = r);
  const o = [];
  return o.push({
    tag: "span",
    attributes: s,
    children: [t]
  }), n && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), o;
}
const {
  styles: Xa
} = on;
function lc(e) {
  const t = e[0], n = e[1], [i] = e.slice(4);
  let s = null;
  return Array.isArray(i) ? s = {
    tag: "g",
    attributes: {
      class: "".concat(Z.cssPrefix, "-").concat(Ha.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(Z.cssPrefix, "-").concat(Ha.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(Z.cssPrefix, "-").concat(Ha.PRIMARY),
        fill: "currentColor",
        d: i[1]
      }
    }]
  } : s = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: i
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: s
  };
}
const BN = {
  found: !1,
  width: 512,
  height: 512
};
function jN(e, t) {
  !nb && !Z.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function cc(e, t) {
  let n = t;
  return t === "fa" && Z.styleDefault !== null && (t = Kn()), new Promise((i, s) => {
    if (n === "fa") {
      const r = yb(e) || {};
      e = r.iconName || e, t = r.prefix || t;
    }
    if (e && t && Xa[t] && Xa[t][e]) {
      const r = Xa[t][e];
      return i(lc(r));
    }
    jN(e, t), i({
      ...BN,
      icon: Z.showMissingIcons && e ? Yn("missingIconAbstract") || {} : {}
    });
  });
}
const Kd = () => {
}, uc = Z.measurePerformance && Dr && Dr.mark && Dr.measure ? Dr : {
  mark: Kd,
  measure: Kd
}, Os = 'FA "6.6.0"', qN = (e) => (uc.mark("".concat(Os, " ").concat(e, " begins")), () => wb(e)), wb = (e) => {
  uc.mark("".concat(Os, " ").concat(e, " ends")), uc.measure("".concat(Os, " ").concat(e), "".concat(Os, " ").concat(e, " begins"), "".concat(Os, " ").concat(e, " ends"));
};
var sf = {
  begin: qN,
  end: wb
};
const Jr = () => {
};
function Yd(e) {
  return typeof (e.getAttribute ? e.getAttribute(ki) : null) == "string";
}
function UN(e) {
  const t = e.getAttribute ? e.getAttribute(Yu) : null, n = e.getAttribute ? e.getAttribute(Xu) : null;
  return t && n;
}
function WN(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(Z.replacementClass);
}
function VN() {
  return Z.autoReplaceSvg === !0 ? Qr.replace : Qr[Z.autoReplaceSvg] || Qr.replace;
}
function zN(e) {
  return Ie.createElementNS("http://www.w3.org/2000/svg", e);
}
function GN(e) {
  return Ie.createElement(e);
}
function vb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? zN : GN
  } = t;
  if (typeof e == "string")
    return Ie.createTextNode(e);
  const i = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(r) {
    i.setAttribute(r, e.attributes[r]);
  }), (e.children || []).forEach(function(r) {
    i.appendChild(vb(r, {
      ceFn: n
    }));
  }), i;
}
function HN(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const Qr = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(vb(n), t);
      }), t.getAttribute(ki) === null && Z.keepOriginalSource) {
        let n = Ie.createComment(HN(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~Ju(t).indexOf(Z.replacementClass))
      return Qr.replace(e);
    const i = new RegExp("".concat(Z.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const r = n[0].attributes.class.split(" ").reduce((o, a) => (a === Z.replacementClass || a.match(i) ? o.toSvg.push(a) : o.toNode.push(a), o), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = r.toSvg.join(" "), r.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", r.toNode.join(" "));
    }
    const s = n.map((r) => hr(r)).join(`
`);
    t.setAttribute(ki, ""), t.innerHTML = s;
  }
};
function Xd(e) {
  e();
}
function _b(e, t) {
  const n = typeof t == "function" ? t : Jr;
  if (e.length === 0)
    n();
  else {
    let i = Xd;
    Z.mutateApproach === eN && (i = Hn.requestAnimationFrame || Xd), i(() => {
      const s = VN(), r = sf.begin("mutate");
      e.map(s), r(), n();
    });
  }
}
let rf = !1;
function xb() {
  rf = !0;
}
function fc() {
  rf = !1;
}
let Io = null;
function Jd(e) {
  if (!Bd || !Z.observeMutations)
    return;
  const {
    treeCallback: t = Jr,
    nodeCallback: n = Jr,
    pseudoElementsCallback: i = Jr,
    observeMutationsRoot: s = Ie
  } = e;
  Io = new Bd((r) => {
    if (rf) return;
    const o = Kn();
    ds(r).forEach((a) => {
      if (a.type === "childList" && a.addedNodes.length > 0 && !Yd(a.addedNodes[0]) && (Z.searchPseudoElements && i(a.target), t(a.target)), a.type === "attributes" && a.target.parentNode && Z.searchPseudoElements && i(a.target.parentNode), a.type === "attributes" && Yd(a.target) && ~oN.indexOf(a.attributeName))
        if (a.attributeName === "class" && UN(a.target)) {
          const {
            prefix: l,
            iconName: u
          } = va(Ju(a.target));
          a.target.setAttribute(Yu, l || o), u && a.target.setAttribute(Xu, u);
        } else WN(a.target) && n(a.target);
    });
  }), Pn && Io.observe(s, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function KN() {
  Io && Io.disconnect();
}
function YN(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((i, s) => {
    const r = s.split(":"), o = r[0], a = r.slice(1);
    return o && a.length > 0 && (i[o] = a.join(":").trim()), i;
  }, {})), n;
}
function XN(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), i = e.innerText !== void 0 ? e.innerText.trim() : "";
  let s = va(Ju(e));
  return s.prefix || (s.prefix = Kn()), t && n && (s.prefix = t, s.iconName = n), s.iconName && s.prefix || (s.prefix && i.length > 0 && (s.iconName = CN(s.prefix, e.innerText) || ef(s.prefix, sc(e.innerText))), !s.iconName && Z.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (s.iconName = e.firstChild.data)), s;
}
function JN(e) {
  const t = ds(e.attributes).reduce((s, r) => (s.name !== "class" && s.name !== "style" && (s[r.name] = r.value), s), {}), n = e.getAttribute("title"), i = e.getAttribute("data-fa-title-id");
  return Z.autoA11y && (n ? t["aria-labelledby"] = "".concat(Z.replacementClass, "-title-").concat(i || Qs()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function QN() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: rn,
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
function Qd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: i,
    rest: s
  } = XN(e), r = JN(e), o = oc("parseNodeAttributes", {}, e);
  let a = t.styleParser ? YN(e) : [];
  return {
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: i,
    transform: rn,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: s,
      styles: a,
      attributes: r
    },
    ...o
  };
}
const {
  styles: ZN
} = on;
function Sb(e) {
  const t = Z.autoReplaceSvg === "nest" ? Qd(e, {
    styleParser: !1
  }) : Qd(e);
  return ~t.extra.classes.indexOf(rb) ? Yn("generateLayersText", e, t) : Yn("generateSvgReplacementMutation", e, t);
}
let hn = /* @__PURE__ */ new Set();
ib.map((e) => {
  hn.add("fa-".concat(e));
});
Object.keys(gi[Le]).map(hn.add.bind(hn));
Object.keys(gi[Ct]).map(hn.add.bind(hn));
Object.keys(gi[Tt]).map(hn.add.bind(hn));
hn = [...hn];
function Zd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Pn) return Promise.resolve();
  const n = Ie.documentElement.classList, i = (c) => n.add("".concat(Ud, "-").concat(c)), s = (c) => n.remove("".concat(Ud, "-").concat(c)), r = Z.autoFetchSvg ? hn : ib.map((c) => "fa-".concat(c)).concat(Object.keys(ZN));
  r.includes("fa") || r.push("fa");
  const o = [".".concat(rb, ":not([").concat(ki, "])")].concat(r.map((c) => ".".concat(c, ":not([").concat(ki, "])"))).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  let a = [];
  try {
    a = ds(e.querySelectorAll(o));
  } catch {
  }
  if (a.length > 0)
    i("pending"), s("complete");
  else
    return Promise.resolve();
  const l = sf.begin("onTree"), u = a.reduce((c, f) => {
    try {
      const h = Sb(f);
      h && c.push(h);
    } catch (h) {
      nb || h.name === "MissingIcon" && console.error(h);
    }
    return c;
  }, []);
  return new Promise((c, f) => {
    Promise.all(u).then((h) => {
      _b(h, () => {
        i("active"), i("complete"), s("pending"), typeof t == "function" && t(), l(), c();
      });
    }).catch((h) => {
      l(), f(h);
    });
  });
}
function eI(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Sb(e).then((n) => {
    n && _b([n], t);
  });
}
function tI(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const i = (t || {}).icon ? t : ac(t || {});
    let {
      mask: s
    } = n;
    return s && (s = (s || {}).icon ? s : ac(s || {})), e(i, {
      ...n,
      mask: s
    });
  };
}
const nI = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = rn,
    symbol: i = !1,
    mask: s = null,
    maskId: r = null,
    title: o = null,
    titleId: a = null,
    classes: l = [],
    attributes: u = {},
    styles: c = {}
  } = t;
  if (!e) return;
  const {
    prefix: f,
    iconName: h,
    icon: d
  } = e;
  return _a({
    type: "icon",
    ...e
  }, () => (Ei("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), Z.autoA11y && (o ? u["aria-labelledby"] = "".concat(Z.replacementClass, "-title-").concat(a || Qs()) : (u["aria-hidden"] = "true", u.focusable = "false")), nf({
    icons: {
      main: lc(d),
      mask: s ? lc(s.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: f,
    iconName: h,
    transform: {
      ...rn,
      ...n
    },
    symbol: i,
    title: o,
    maskId: r,
    titleId: a,
    extra: {
      attributes: u,
      styles: c,
      classes: l
    }
  })));
};
var iI = {
  mixout() {
    return {
      icon: tI(nI)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = Zd, e.nodeCallback = eI, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = Ie,
        callback: i = () => {
        }
      } = t;
      return Zd(n, i);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: i,
        title: s,
        titleId: r,
        prefix: o,
        transform: a,
        symbol: l,
        mask: u,
        maskId: c,
        extra: f
      } = n;
      return new Promise((h, d) => {
        Promise.all([cc(i, o), u.iconName ? cc(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((p) => {
          let [y, w] = p;
          h([t, nf({
            icons: {
              main: y,
              mask: w
            },
            prefix: o,
            iconName: i,
            transform: a,
            symbol: l,
            maskId: c,
            title: s,
            titleId: r,
            extra: f,
            watchable: !0
          })]);
        }).catch(d);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: i,
        main: s,
        transform: r,
        styles: o
      } = t;
      const a = ba(o);
      a.length > 0 && (i.style = a);
      let l;
      return Qu(r) && (l = Yn("generateAbstractTransformGrouping", {
        main: s,
        transform: r,
        containerWidth: s.width,
        iconWidth: s.width
      })), n.push(l || s.icon), {
        children: n,
        attributes: i
      };
    };
  }
}, sI = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return _a({
          type: "layer"
        }, () => {
          Ei("beforeDOMElementCreation", {
            assembler: e,
            params: t
          });
          let i = [];
          return e((s) => {
            Array.isArray(s) ? s.map((r) => {
              i = i.concat(r.abstract);
            }) : i = i.concat(s.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(Z.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: i
          }];
        });
      }
    };
  }
}, rI = {
  mixout() {
    return {
      counter(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: n = null,
          classes: i = [],
          attributes: s = {},
          styles: r = {}
        } = t;
        return _a({
          type: "counter",
          content: e
        }, () => (Ei("beforeDOMElementCreation", {
          content: e,
          params: t
        }), $N({
          content: e.toString(),
          title: n,
          extra: {
            attributes: s,
            styles: r,
            classes: ["".concat(Z.cssPrefix, "-layers-counter"), ...i]
          }
        })));
      }
    };
  }
}, oI = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = rn,
          title: i = null,
          classes: s = [],
          attributes: r = {},
          styles: o = {}
        } = t;
        return _a({
          type: "text",
          content: e
        }, () => (Ei("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Hd({
          content: e,
          transform: {
            ...rn,
            ...n
          },
          title: i,
          extra: {
            attributes: r,
            styles: o,
            classes: ["".concat(Z.cssPrefix, "-layers-text"), ...s]
          }
        })));
      }
    };
  },
  provides(e) {
    e.generateLayersText = function(t, n) {
      const {
        title: i,
        transform: s,
        extra: r
      } = n;
      let o = null, a = null;
      if (Xy) {
        const l = parseInt(getComputedStyle(t).fontSize, 10), u = t.getBoundingClientRect();
        o = u.width / l, a = u.height / l;
      }
      return Z.autoA11y && !i && (r.attributes["aria-hidden"] = "true"), Promise.resolve([t, Hd({
        content: t.innerHTML,
        width: o,
        height: a,
        transform: s,
        title: i,
        extra: r,
        watchable: !0
      })]);
    };
  }
};
const aI = new RegExp('"', "ug"), ep = [1105920, 1112319], tp = {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  },
  ...UP,
  ...qP,
  ...XP
}, hc = Object.keys(tp).reduce((e, t) => (e[t.toLowerCase()] = tp[t], e), {}), lI = Object.keys(hc).reduce((e, t) => {
  const n = hc[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function cI(e) {
  const t = e.replace(aI, ""), n = vN(t, 0), i = n >= ep[0] && n <= ep[1], s = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: sc(s ? t[0] : t),
    isSecondary: i || s
  };
}
function uI(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), i = parseInt(t), s = isNaN(i) ? "normal" : i;
  return (hc[n] || {})[s] || lI[n];
}
function np(e, t) {
  const n = "".concat(ZP).concat(t.replace(":", "-"));
  return new Promise((i, s) => {
    if (e.getAttribute(n) !== null)
      return i();
    const o = ds(e.children).filter((h) => h.getAttribute(ec) === t)[0], a = Hn.getComputedStyle(e, t), l = a.getPropertyValue("font-family"), u = l.match(sN), c = a.getPropertyValue("font-weight"), f = a.getPropertyValue("content");
    if (o && !u)
      return e.removeChild(o), i();
    if (u && f !== "none" && f !== "") {
      const h = a.getPropertyValue("content");
      let d = uI(l, c);
      const {
        value: p,
        isSecondary: y
      } = cI(h), w = u[0].startsWith("FontAwesome");
      let S = ef(d, p), k = S;
      if (w) {
        const b = TN(p);
        b.iconName && b.prefix && (S = b.iconName, d = b.prefix);
      }
      if (S && !y && (!o || o.getAttribute(Yu) !== d || o.getAttribute(Xu) !== k)) {
        e.setAttribute(n, k), o && e.removeChild(o);
        const b = QN(), {
          extra: C
        } = b;
        C.attributes[ec] = t, cc(S, d).then((A) => {
          const I = nf({
            ...b,
            icons: {
              main: A,
              mask: tf()
            },
            prefix: d,
            iconName: k,
            extra: C,
            watchable: !0
          }), P = Ie.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(P, e.firstChild) : e.appendChild(P), P.outerHTML = I.map((D) => hr(D)).join(`
`), e.removeAttribute(n), i();
        }).catch(s);
      } else
        i();
    } else
      i();
  });
}
function fI(e) {
  return Promise.all([np(e, "::before"), np(e, "::after")]);
}
function hI(e) {
  return e.parentNode !== document.head && !~tN.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(ec) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function ip(e) {
  if (Pn)
    return new Promise((t, n) => {
      const i = ds(e.querySelectorAll("*")).filter(hI).map(fI), s = sf.begin("searchPseudoElements");
      xb(), Promise.all(i).then(() => {
        s(), fc(), t();
      }).catch(() => {
        s(), fc(), n();
      });
    });
}
var dI = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = ip, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = Ie
      } = t;
      Z.searchPseudoElements && ip(n);
    };
  }
};
let sp = !1;
var pI = {
  mixout() {
    return {
      dom: {
        unwatch() {
          xb(), sp = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        Jd(oc("mutationObserverCallbacks", {}));
      },
      noAuto() {
        KN();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        sp ? fc() : Jd(oc("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const rp = (e) => {
  let t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce((n, i) => {
    const s = i.toLowerCase().split("-"), r = s[0];
    let o = s.slice(1).join("-");
    if (r && o === "h")
      return n.flipX = !0, n;
    if (r && o === "v")
      return n.flipY = !0, n;
    if (o = parseFloat(o), isNaN(o))
      return n;
    switch (r) {
      case "grow":
        n.size = n.size + o;
        break;
      case "shrink":
        n.size = n.size - o;
        break;
      case "left":
        n.x = n.x - o;
        break;
      case "right":
        n.x = n.x + o;
        break;
      case "up":
        n.y = n.y - o;
        break;
      case "down":
        n.y = n.y + o;
        break;
      case "rotate":
        n.rotate = n.rotate + o;
        break;
    }
    return n;
  }, t);
};
var gI = {
  mixout() {
    return {
      parse: {
        transform: (e) => rp(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = rp(n)), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function(t) {
      let {
        main: n,
        transform: i,
        containerWidth: s,
        iconWidth: r
      } = t;
      const o = {
        transform: "translate(".concat(s / 2, " 256)")
      }, a = "translate(".concat(i.x * 32, ", ").concat(i.y * 32, ") "), l = "scale(".concat(i.size / 16 * (i.flipX ? -1 : 1), ", ").concat(i.size / 16 * (i.flipY ? -1 : 1), ") "), u = "rotate(".concat(i.rotate, " 0 0)"), c = {
        transform: "".concat(a, " ").concat(l, " ").concat(u)
      }, f = {
        transform: "translate(".concat(r / 2 * -1, " -256)")
      }, h = {
        outer: o,
        inner: c,
        path: f
      };
      return {
        tag: "g",
        attributes: {
          ...h.outer
        },
        children: [{
          tag: "g",
          attributes: {
            ...h.inner
          },
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: {
              ...n.icon.attributes,
              ...h.path
            }
          }]
        }]
      };
    };
  }
};
const Ja = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function op(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function mI(e) {
  return e.tag === "g" ? e.children : [e];
}
var yI = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), i = n ? va(n.split(" ").map((s) => s.trim())) : tf();
        return i.prefix || (i.prefix = Kn()), e.mask = i, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(t) {
      let {
        children: n,
        attributes: i,
        main: s,
        mask: r,
        maskId: o,
        transform: a
      } = t;
      const {
        width: l,
        icon: u
      } = s, {
        width: c,
        icon: f
      } = r, h = pN({
        transform: a,
        containerWidth: c,
        iconWidth: l
      }), d = {
        tag: "rect",
        attributes: {
          ...Ja,
          fill: "white"
        }
      }, p = u.children ? {
        children: u.children.map(op)
      } : {}, y = {
        tag: "g",
        attributes: {
          ...h.inner
        },
        children: [op({
          tag: u.tag,
          attributes: {
            ...u.attributes,
            ...h.path
          },
          ...p
        })]
      }, w = {
        tag: "g",
        attributes: {
          ...h.outer
        },
        children: [y]
      }, S = "mask-".concat(o || Qs()), k = "clip-".concat(o || Qs()), b = {
        tag: "mask",
        attributes: {
          ...Ja,
          id: S,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        },
        children: [d, w]
      }, C = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: k
          },
          children: mI(f)
        }, b]
      };
      return n.push(C, {
        tag: "rect",
        attributes: {
          fill: "currentColor",
          "clip-path": "url(#".concat(k, ")"),
          mask: "url(#".concat(S, ")"),
          ...Ja
        }
      }), {
        children: n,
        attributes: i
      };
    };
  }
}, bI = {
  provides(e) {
    let t = !1;
    Hn.matchMedia && (t = Hn.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], i = {
        fill: "currentColor"
      }, s = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: {
          ...i,
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        }
      });
      const r = {
        ...s,
        attributeName: "opacity"
      }, o = {
        tag: "circle",
        attributes: {
          ...i,
          cx: "256",
          cy: "364",
          r: "28"
        },
        children: []
      };
      return t || o.children.push({
        tag: "animate",
        attributes: {
          ...s,
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        }
      }, {
        tag: "animate",
        attributes: {
          ...r,
          values: "1;0;1;1;0;1;"
        }
      }), n.push(o), n.push({
        tag: "path",
        attributes: {
          ...i,
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        },
        children: t ? [] : [{
          tag: "animate",
          attributes: {
            ...r,
            values: "1;0;0;0;0;1;"
          }
        }]
      }), t || n.push({
        tag: "path",
        attributes: {
          ...i,
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        },
        children: [{
          tag: "animate",
          attributes: {
            ...r,
            values: "0;0;1;1;0;0;"
          }
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
}, wI = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), i = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = i, e;
      }
    };
  }
}, vI = [yN, iI, sI, rI, oI, dI, pI, gI, yI, bI, wI];
NN(vI, {
  mixoutsTo: At
});
At.noAuto;
At.config;
const _I = At.library;
At.dom;
const dc = At.parse;
At.findIconDefinition;
At.toHtml;
const xI = At.icon;
At.layer;
At.text;
At.counter;
function ap(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function vn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ap(Object(n), !0).forEach(function(i) {
      ft(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ap(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function SI(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function kI(e) {
  var t = SI(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Mo(e) {
  "@babel/helpers - typeof";
  return Mo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mo(e);
}
function ft(e, t, n) {
  return t = kI(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function EI(e, t) {
  if (e == null) return {};
  var n = {};
  for (var i in e)
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      if (t.indexOf(i) >= 0) continue;
      n[i] = e[i];
    }
  return n;
}
function CI(e, t) {
  if (e == null) return {};
  var n = EI(e, t), i, s;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    for (s = 0; s < r.length; s++)
      i = r[s], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (n[i] = e[i]);
  }
  return n;
}
var TI = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, kb = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(S, k, b) {
      if (!u(k) || f(k) || h(k) || d(k) || l(k))
        return k;
      var C, A = 0, I = 0;
      if (c(k))
        for (C = [], I = k.length; A < I; A++)
          C.push(n(S, k[A], b));
      else {
        C = {};
        for (var P in k)
          Object.prototype.hasOwnProperty.call(k, P) && (C[S(P, b)] = n(S, k[P], b));
      }
      return C;
    }, i = function(S, k) {
      k = k || {};
      var b = k.separator || "_", C = k.split || /(?=[A-Z])/;
      return S.split(C).join(b);
    }, s = function(S) {
      return p(S) ? S : (S = S.replace(/[\-_\s]+(.)?/g, function(k, b) {
        return b ? b.toUpperCase() : "";
      }), S.substr(0, 1).toLowerCase() + S.substr(1));
    }, r = function(S) {
      var k = s(S);
      return k.substr(0, 1).toUpperCase() + k.substr(1);
    }, o = function(S, k) {
      return i(S, k).toLowerCase();
    }, a = Object.prototype.toString, l = function(S) {
      return typeof S == "function";
    }, u = function(S) {
      return S === Object(S);
    }, c = function(S) {
      return a.call(S) == "[object Array]";
    }, f = function(S) {
      return a.call(S) == "[object Date]";
    }, h = function(S) {
      return a.call(S) == "[object RegExp]";
    }, d = function(S) {
      return a.call(S) == "[object Boolean]";
    }, p = function(S) {
      return S = S - 0, S === S;
    }, y = function(S, k) {
      var b = k && "process" in k ? k.process : k;
      return typeof b != "function" ? S : function(C, A) {
        return b(C, S, A);
      };
    }, w = {
      camelize: s,
      decamelize: o,
      pascalize: r,
      depascalize: o,
      camelizeKeys: function(S, k) {
        return n(y(s, k), S);
      },
      decamelizeKeys: function(S, k) {
        return n(y(o, k), S, k);
      },
      pascalizeKeys: function(S, k) {
        return n(y(r, k), S);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = w : t.humps = w;
  })(TI);
})(kb);
var AI = kb.exports, OI = ["class", "style"];
function PI(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var i = n.indexOf(":"), s = AI.camelize(n.slice(0, i)), r = n.slice(i + 1).trim();
    return t[s] = r, t;
  }, {});
}
function NI(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function Eb(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var i = (e.children || []).map(function(l) {
    return Eb(l);
  }), s = Object.keys(e.attributes || {}).reduce(function(l, u) {
    var c = e.attributes[u];
    switch (u) {
      case "class":
        l.class = NI(c);
        break;
      case "style":
        l.style = PI(c);
        break;
      default:
        l.attrs[u] = c;
    }
    return l;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  n.class;
  var r = n.style, o = r === void 0 ? {} : r, a = CI(n, OI);
  return Lc(e.tag, vn(vn(vn({}, t), {}, {
    class: s.class,
    style: vn(vn({}, s.style), o)
  }, s.attrs), a), i);
}
var Cb = !1;
try {
  Cb = !0;
} catch {
}
function II() {
  if (!Cb && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Qa(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? ft({}, e, t) : {};
}
function MI(e) {
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
  }, ft(ft(ft(ft(ft(ft(ft(ft(ft(ft(t, "fa-".concat(e.size), e.size !== null), "fa-rotate-".concat(e.rotation), e.rotation !== null), "fa-pull-".concat(e.pull), e.pull !== null), "fa-swap-opacity", e.swapOpacity), "fa-bounce", e.bounce), "fa-shake", e.shake), "fa-beat", e.beat), "fa-fade", e.fade), "fa-beat-fade", e.beatFade), "fa-flash", e.flash), ft(ft(t, "fa-spin-pulse", e.spinPulse), "fa-spin-reverse", e.spinReverse));
  return Object.keys(n).map(function(i) {
    return n[i] ? i : null;
  }).filter(function(i) {
    return i;
  });
}
function lp(e) {
  if (e && Mo(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (dc.icon)
    return dc.icon(e);
  if (e === null)
    return null;
  if (Mo(e) === "object" && e.prefix && e.iconName)
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
var LI = /* @__PURE__ */ Ti({
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
    var i = n.attrs, s = Pt(function() {
      return lp(t.icon);
    }), r = Pt(function() {
      return Qa("classes", MI(t));
    }), o = Pt(function() {
      return Qa("transform", typeof t.transform == "string" ? dc.transform(t.transform) : t.transform);
    }), a = Pt(function() {
      return Qa("mask", lp(t.mask));
    }), l = Pt(function() {
      return xI(s.value, vn(vn(vn(vn({}, r.value), o.value), a.value), {}, {
        symbol: t.symbol,
        title: t.title,
        titleId: t.titleId,
        maskId: t.maskId
      }));
    });
    kn(l, function(c) {
      if (!c)
        return II("Could not find one or more icon(s)", s.value, a.value);
    }, {
      immediate: !0
    });
    var u = Pt(function() {
      return l.value ? Eb(l.value.abstract[0], {}, i) : null;
    });
    return function() {
      return u.value;
    };
  }
});
const DI = {
  prefix: "fasr",
  iconName: "arrows-left-right",
  icon: [512, 512, ["arrows-h"], "f07e", "M493.8 273l17-17-17-17-96-96-17-17L346.9 160l17 17 55 55L93.1 232l55-55 17-17-33.9-33.9-17 17-96 96-17 17 17 17 96 96 17 17L165.1 352l-17-17-55-55 325.7 0-55 55-17 17 33.9 33.9 17-17 96-96z"]
}, RI = {
  prefix: "fasr",
  iconName: "plus-large",
  icon: [512, 512, [], "e59e", "M488 232l24 0 0 48-24 0-208 0 0 208 0 24-48 0 0-24 0-208L24 280 0 280l0-48 24 0 208 0 0-208 0-24 48 0 0 24 0 208 208 0z"]
}, FI = {
  prefix: "fasr",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M136 32l24 0 0 48-24 0L48 80l0 88 0 24L0 192l0-24L0 56 0 32l24 0 112 0zM0 344l0-24 48 0 0 24 0 88 88 0 24 0 0 48-24 0L24 480 0 480l0-24L0 344zM424 32l24 0 0 24 0 112 0 24-48 0 0-24 0-88-88 0-24 0 0-48 24 0 112 0zM400 344l0-24 48 0 0 24 0 112 0 24-24 0-112 0-24 0 0-48 24 0 88 0 0-88z"]
}, $I = {
  prefix: "fasr",
  iconName: "arrows-up-down",
  icon: [320, 512, ["arrows-v"], "f07d", "M177 18.2l-17-17-17 17-96 96-17 17L64 165.1l17-17 55-55 0 325.7-55-55-17-17L30.1 380.8l17 17 96 96 17 17 17-17 96-96 17-17L256 346.9l-17 17-55 55 0-325.7 55 55 17 17 33.9-33.9-17-17-96-96z"]
}, BI = {
  prefix: "fass",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M144 0L128 32 0 32 0 96l448 0 0-64L320 32 304 0 144 0zM416 128L32 128 56 512l336 0 24-384z"]
}, jI = {
  prefix: "fass",
  iconName: "calculator",
  icon: [384, 512, [128425], "f1ec", "M384 0L0 0 0 512l384 0L384 0zM320 64l0 96L64 160l0-96 256 0zM64 192l64 0 0 64-64 0 0-64zm64 96l0 64-64 0 0-64 64 0zM64 384l160 0 0 64L64 448l0-64zM224 192l0 64-64 0 0-64 64 0zm-64 96l64 0 0 64-64 0 0-64zm160-96l0 64-64 0 0-64 64 0zm-64 96l64 0 0 64-64 0 0-64zm64 96l0 64-64 0 0-64 64 0z"]
}, qI = {
  prefix: "fass",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M326.6 166.6L349.3 144 304 98.7l-22.6 22.6L192 210.7l-89.4-89.4L80 98.7 34.7 144l22.6 22.6L146.7 256 57.4 345.4 34.7 368 80 413.3l22.6-22.6L192 301.3l89.4 89.4L304 413.3 349.3 368l-22.6-22.6L237.3 256l89.4-89.4z"]
}, UI = {
  prefix: "fass",
  iconName: "hammer",
  icon: [576, 512, [128296], "f6e3", "M225.6 18.2L176 48l96 48 0 48L384 256l24-24 24 24-24 24 48 48L576 208l-48-48-24 24-24-24 24-24L405.5 37.5C381.5 13.5 348.9 0 315 0L291.5 0c-23.2 0-46 6.3-65.9 18.2zM0 416l96 96L330.7 248 264 181.3 0 416z"]
};
_I.add(
  qI,
  FI,
  DI,
  $I,
  UI,
  BI,
  RI,
  jI
);
const WI = Vv({
  locale: "en_US",
  fallbackLocale: "en_US",
  messages: s_
}), cp = document.querySelector("#smartcut-app"), VI = cp ? cp.getAttribute("data-type") : "", of = Jw(DP, { type: VI });
of.use(WI);
of.component("font-awesome-icon", LI);
of.mount("#smartcut-app");
export {
  GI as A,
  _m as B,
  AP as C,
  HI as D,
  Qo as E,
  $e as F,
  Ey as G,
  rC as H,
  sC as I,
  Rd as J,
  QI as K,
  ZI as L,
  Pi as _,
  J as a,
  YI as b,
  Zt as c,
  he as d,
  eM as e,
  tM as f,
  Gi as g,
  iM as h,
  nM as i,
  XI as j,
  JI as k,
  ae as l,
  jo as m,
  se as n,
  te as o,
  we as p,
  Pe as q,
  yn as r,
  OO as s,
  We as t,
  an as u,
  $ as v,
  bn as w,
  Ve as x,
  sl as y,
  pg as z
};

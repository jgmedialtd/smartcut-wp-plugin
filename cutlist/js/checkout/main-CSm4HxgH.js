var Ug = Object.defineProperty;
var qg = (t, e, n) => e in t ? Ug(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var v = (t, e, n) => (qg(t, typeof e != "symbol" ? e + "" : e, n), n);
/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ul(t, e) {
  const n = new Set(t.split(","));
  return e ? (i) => n.has(i.toLowerCase()) : (i) => n.has(i);
}
const Et = {}, bi = [], Te = () => {
}, Hg = () => !1, fo = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), fl = (t) => t.startsWith("onUpdate:"), Gt = Object.assign, hl = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, Wg = Object.prototype.hasOwnProperty, ht = (t, e) => Wg.call(t, e), tt = Array.isArray, vi = (t) => Ar(t) === "[object Map]", $i = (t) => Ar(t) === "[object Set]", Pc = (t) => Ar(t) === "[object Date]", ot = (t) => typeof t == "function", Bt = (t) => typeof t == "string", Tn = (t) => typeof t == "symbol", St = (t) => t !== null && typeof t == "object", Sh = (t) => (St(t) || ot(t)) && ot(t.then) && ot(t.catch), kh = Object.prototype.toString, Ar = (t) => kh.call(t), Vg = (t) => Ar(t).slice(8, -1), Eh = (t) => Ar(t) === "[object Object]", dl = (t) => Bt(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, nr = /* @__PURE__ */ ul(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ho = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, jg = /-(\w)/g, Ke = ho((t) => t.replace(jg, (e, n) => n ? n.toUpperCase() : "")), zg = /\B([A-Z])/g, Fi = ho(
  (t) => t.replace(zg, "-$1").toLowerCase()
), po = ho((t) => t.charAt(0).toUpperCase() + t.slice(1)), Ho = ho((t) => t ? `on${po(t)}` : ""), An = (t, e) => !Object.is(t, e), ms = (t, e) => {
  for (let n = 0; n < t.length; n++)
    t[n](e);
}, Ms = (t, e, n) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, ur = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let Nc;
const Th = () => Nc || (Nc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function zt(t) {
  if (tt(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const i = t[n], r = Bt(i) ? Xg(i) : zt(i);
      if (r)
        for (const s in r)
          e[s] = r[s];
    }
    return e;
  } else if (Bt(t) || St(t))
    return t;
}
const Gg = /;(?![^(]*\))/g, Yg = /:([^]+)/, Kg = /\/\*[^]*?\*\//g;
function Xg(t) {
  const e = {};
  return t.replace(Kg, "").split(Gg).forEach((n) => {
    if (n) {
      const i = n.split(Yg);
      i.length > 1 && (e[i[0].trim()] = i[1].trim());
    }
  }), e;
}
function an(t) {
  let e = "";
  if (Bt(t))
    e = t;
  else if (tt(t))
    for (let n = 0; n < t.length; n++) {
      const i = an(t[n]);
      i && (e += i + " ");
    }
  else if (St(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const Jg = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Qg = /* @__PURE__ */ ul(Jg);
function Ah(t) {
  return !!t || t === "";
}
function Zg(t, e) {
  if (t.length !== e.length)
    return !1;
  let n = !0;
  for (let i = 0; n && i < t.length; i++)
    n = Qn(t[i], e[i]);
  return n;
}
function Qn(t, e) {
  if (t === e)
    return !0;
  let n = Pc(t), i = Pc(e);
  if (n || i)
    return n && i ? t.getTime() === e.getTime() : !1;
  if (n = Tn(t), i = Tn(e), n || i)
    return t === e;
  if (n = tt(t), i = tt(e), n || i)
    return n && i ? Zg(t, e) : !1;
  if (n = St(t), i = St(e), n || i) {
    if (!n || !i)
      return !1;
    const r = Object.keys(t).length, s = Object.keys(e).length;
    if (r !== s)
      return !1;
    for (const o in t) {
      const a = t.hasOwnProperty(o), l = e.hasOwnProperty(o);
      if (a && !l || !a && l || !Qn(t[o], e[o]))
        return !1;
    }
  }
  return String(t) === String(e);
}
function pl(t, e) {
  return t.findIndex((n) => Qn(n, e));
}
const yt = (t) => Bt(t) ? t : t == null ? "" : tt(t) || St(t) && (t.toString === kh || !ot(t.toString)) ? JSON.stringify(t, Ch, 2) : String(t), Ch = (t, e) => e && e.__v_isRef ? Ch(t, e.value) : vi(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (n, [i, r], s) => (n[Wo(i, s) + " =>"] = r, n),
    {}
  )
} : $i(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((n) => Wo(n))
} : Tn(e) ? Wo(e) : St(e) && !tt(e) && !Eh(e) ? String(e) : e, Wo = (t, e = "") => {
  var n;
  return Tn(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t;
};
/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ye;
class Oh {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this.effects = [], this.cleanups = [], this.parent = ye, !e && ye && (this.index = (ye.scopes || (ye.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(e) {
    if (this._active) {
      const n = ye;
      try {
        return ye = this, e();
      } finally {
        ye = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ye = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    ye = this.parent;
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
function tm(t) {
  return new Oh(t);
}
function em(t, e = ye) {
  e && e.active && e.effects.push(t);
}
function Ph() {
  return ye;
}
function nm(t) {
  ye && ye.cleanups.push(t);
}
let Kn;
class gl {
  constructor(e, n, i, r) {
    this.fn = e, this.trigger = n, this.scheduler = i, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, em(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, ri();
      for (let e = 0; e < this._depsLength; e++) {
        const n = this.deps[e];
        if (n.computed && (im(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), si();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(e) {
    this._dirtyLevel = e ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let e = kn, n = Kn;
    try {
      return kn = !0, Kn = this, this._runnings++, Ic(this), this.fn();
    } finally {
      Lc(this), this._runnings--, Kn = n, kn = e;
    }
  }
  stop() {
    var e;
    this.active && (Ic(this), Lc(this), (e = this.onStop) == null || e.call(this), this.active = !1);
  }
}
function im(t) {
  return t.value;
}
function Ic(t) {
  t._trackId++, t._depsLength = 0;
}
function Lc(t) {
  if (t.deps.length > t._depsLength) {
    for (let e = t._depsLength; e < t.deps.length; e++)
      Nh(t.deps[e], t);
    t.deps.length = t._depsLength;
  }
}
function Nh(t, e) {
  const n = t.get(e);
  n !== void 0 && e._trackId !== n && (t.delete(e), t.size === 0 && t.cleanup());
}
let kn = !0, ha = 0;
const Ih = [];
function ri() {
  Ih.push(kn), kn = !1;
}
function si() {
  const t = Ih.pop();
  kn = t === void 0 ? !0 : t;
}
function ml() {
  ha++;
}
function yl() {
  for (ha--; !ha && da.length; )
    da.shift()();
}
function Lh(t, e, n) {
  if (e.get(t) !== t._trackId) {
    e.set(t, t._trackId);
    const i = t.deps[t._depsLength];
    i !== e ? (i && Nh(i, t), t.deps[t._depsLength++] = e) : t._depsLength++;
  }
}
const da = [];
function Mh(t, e, n) {
  ml();
  for (const i of t.keys()) {
    let r;
    i._dirtyLevel < e && (r ?? (r = t.get(i) === i._trackId)) && (i._shouldSchedule || (i._shouldSchedule = i._dirtyLevel === 0), i._dirtyLevel = e), i._shouldSchedule && (r ?? (r = t.get(i) === i._trackId)) && (i.trigger(), (!i._runnings || i.allowRecurse) && i._dirtyLevel !== 2 && (i._shouldSchedule = !1, i.scheduler && da.push(i.scheduler)));
  }
  yl();
}
const Rh = (t, e) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = t, n.computed = e, n;
}, pa = /* @__PURE__ */ new WeakMap(), Xn = Symbol(""), ga = Symbol("");
function ue(t, e, n) {
  if (kn && Kn) {
    let i = pa.get(t);
    i || pa.set(t, i = /* @__PURE__ */ new Map());
    let r = i.get(n);
    r || i.set(n, r = Rh(() => i.delete(n))), Lh(
      Kn,
      r
    );
  }
}
function sn(t, e, n, i, r, s) {
  const o = pa.get(t);
  if (!o)
    return;
  let a = [];
  if (e === "clear")
    a = [...o.values()];
  else if (n === "length" && tt(t)) {
    const l = Number(i);
    o.forEach((c, u) => {
      (u === "length" || !Tn(u) && u >= l) && a.push(c);
    });
  } else
    switch (n !== void 0 && a.push(o.get(n)), e) {
      case "add":
        tt(t) ? dl(n) && a.push(o.get("length")) : (a.push(o.get(Xn)), vi(t) && a.push(o.get(ga)));
        break;
      case "delete":
        tt(t) || (a.push(o.get(Xn)), vi(t) && a.push(o.get(ga)));
        break;
      case "set":
        vi(t) && a.push(o.get(Xn));
        break;
    }
  ml();
  for (const l of a)
    l && Mh(
      l,
      4
    );
  yl();
}
const rm = /* @__PURE__ */ ul("__proto__,__v_isRef,__isVue"), Dh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Tn)
), Mc = /* @__PURE__ */ sm();
function sm() {
  const t = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    t[e] = function(...n) {
      const i = mt(this);
      for (let s = 0, o = this.length; s < o; s++)
        ue(i, "get", s + "");
      const r = i[e](...n);
      return r === -1 || r === !1 ? i[e](...n.map(mt)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    t[e] = function(...n) {
      ri(), ml();
      const i = mt(this)[e].apply(this, n);
      return yl(), si(), i;
    };
  }), t;
}
function om(t) {
  const e = mt(this);
  return ue(e, "has", t), e.hasOwnProperty(t);
}
class $h {
  constructor(e = !1, n = !1) {
    this._isReadonly = e, this._isShallow = n;
  }
  get(e, n, i) {
    const r = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return i === (r ? s ? vm : qh : s ? Uh : Bh).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(i) ? e : void 0;
    const o = tt(e);
    if (!r) {
      if (o && ht(Mc, n))
        return Reflect.get(Mc, n, i);
      if (n === "hasOwnProperty")
        return om;
    }
    const a = Reflect.get(e, n, i);
    return (Tn(n) ? Dh.has(n) : rm(n)) || (r || ue(e, "get", n), s) ? a : re(a) ? o && dl(n) ? a : a.value : St(a) ? r ? wl(a) : _l(a) : a;
  }
}
class Fh extends $h {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, i, r) {
    let s = e[n];
    if (!this._isShallow) {
      const l = Ti(s);
      if (!Rs(i) && !Ti(i) && (s = mt(s), i = mt(i)), !tt(e) && re(s) && !re(i))
        return l ? !1 : (s.value = i, !0);
    }
    const o = tt(e) && dl(n) ? Number(n) < e.length : ht(e, n), a = Reflect.set(e, n, i, r);
    return e === mt(r) && (o ? An(i, s) && sn(e, "set", n, i) : sn(e, "add", n, i)), a;
  }
  deleteProperty(e, n) {
    const i = ht(e, n);
    e[n];
    const r = Reflect.deleteProperty(e, n);
    return r && i && sn(e, "delete", n, void 0), r;
  }
  has(e, n) {
    const i = Reflect.has(e, n);
    return (!Tn(n) || !Dh.has(n)) && ue(e, "has", n), i;
  }
  ownKeys(e) {
    return ue(
      e,
      "iterate",
      tt(e) ? "length" : Xn
    ), Reflect.ownKeys(e);
  }
}
class am extends $h {
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
const lm = /* @__PURE__ */ new Fh(), cm = /* @__PURE__ */ new am(), um = /* @__PURE__ */ new Fh(
  !0
), bl = (t) => t, go = (t) => Reflect.getPrototypeOf(t);
function Ur(t, e, n = !1, i = !1) {
  t = t.__v_raw;
  const r = mt(t), s = mt(e);
  n || (An(e, s) && ue(r, "get", e), ue(r, "get", s));
  const { has: o } = go(r), a = i ? bl : n ? kl : fr;
  if (o.call(r, e))
    return a(t.get(e));
  if (o.call(r, s))
    return a(t.get(s));
  t !== r && t.get(e);
}
function qr(t, e = !1) {
  const n = this.__v_raw, i = mt(n), r = mt(t);
  return e || (An(t, r) && ue(i, "has", t), ue(i, "has", r)), t === r ? n.has(t) : n.has(t) || n.has(r);
}
function Hr(t, e = !1) {
  return t = t.__v_raw, !e && ue(mt(t), "iterate", Xn), Reflect.get(t, "size", t);
}
function Rc(t) {
  t = mt(t);
  const e = mt(this);
  return go(e).has.call(e, t) || (e.add(t), sn(e, "add", t, t)), this;
}
function Dc(t, e) {
  e = mt(e);
  const n = mt(this), { has: i, get: r } = go(n);
  let s = i.call(n, t);
  s || (t = mt(t), s = i.call(n, t));
  const o = r.call(n, t);
  return n.set(t, e), s ? An(e, o) && sn(n, "set", t, e) : sn(n, "add", t, e), this;
}
function $c(t) {
  const e = mt(this), { has: n, get: i } = go(e);
  let r = n.call(e, t);
  r || (t = mt(t), r = n.call(e, t)), i && i.call(e, t);
  const s = e.delete(t);
  return r && sn(e, "delete", t, void 0), s;
}
function Fc() {
  const t = mt(this), e = t.size !== 0, n = t.clear();
  return e && sn(t, "clear", void 0, void 0), n;
}
function Wr(t, e) {
  return function(i, r) {
    const s = this, o = s.__v_raw, a = mt(o), l = e ? bl : t ? kl : fr;
    return !t && ue(a, "iterate", Xn), o.forEach((c, u) => i.call(r, l(c), l(u), s));
  };
}
function Vr(t, e, n) {
  return function(...i) {
    const r = this.__v_raw, s = mt(r), o = vi(s), a = t === "entries" || t === Symbol.iterator && o, l = t === "keys" && o, c = r[t](...i), u = n ? bl : e ? kl : fr;
    return !e && ue(
      s,
      "iterate",
      l ? ga : Xn
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
function pn(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function fm() {
  const t = {
    get(s) {
      return Ur(this, s);
    },
    get size() {
      return Hr(this);
    },
    has: qr,
    add: Rc,
    set: Dc,
    delete: $c,
    clear: Fc,
    forEach: Wr(!1, !1)
  }, e = {
    get(s) {
      return Ur(this, s, !1, !0);
    },
    get size() {
      return Hr(this);
    },
    has: qr,
    add: Rc,
    set: Dc,
    delete: $c,
    clear: Fc,
    forEach: Wr(!1, !0)
  }, n = {
    get(s) {
      return Ur(this, s, !0);
    },
    get size() {
      return Hr(this, !0);
    },
    has(s) {
      return qr.call(this, s, !0);
    },
    add: pn("add"),
    set: pn("set"),
    delete: pn("delete"),
    clear: pn("clear"),
    forEach: Wr(!0, !1)
  }, i = {
    get(s) {
      return Ur(this, s, !0, !0);
    },
    get size() {
      return Hr(this, !0);
    },
    has(s) {
      return qr.call(this, s, !0);
    },
    add: pn("add"),
    set: pn("set"),
    delete: pn("delete"),
    clear: pn("clear"),
    forEach: Wr(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    t[s] = Vr(
      s,
      !1,
      !1
    ), n[s] = Vr(
      s,
      !0,
      !1
    ), e[s] = Vr(
      s,
      !1,
      !0
    ), i[s] = Vr(
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
  hm,
  dm,
  pm,
  gm
] = /* @__PURE__ */ fm();
function vl(t, e) {
  const n = e ? t ? gm : pm : t ? dm : hm;
  return (i, r, s) => r === "__v_isReactive" ? !t : r === "__v_isReadonly" ? t : r === "__v_raw" ? i : Reflect.get(
    ht(n, r) && r in i ? n : i,
    r,
    s
  );
}
const mm = {
  get: /* @__PURE__ */ vl(!1, !1)
}, ym = {
  get: /* @__PURE__ */ vl(!1, !0)
}, bm = {
  get: /* @__PURE__ */ vl(!0, !1)
}, Bh = /* @__PURE__ */ new WeakMap(), Uh = /* @__PURE__ */ new WeakMap(), qh = /* @__PURE__ */ new WeakMap(), vm = /* @__PURE__ */ new WeakMap();
function _m(t) {
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
function wm(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : _m(Vg(t));
}
function _l(t) {
  return Ti(t) ? t : xl(
    t,
    !1,
    lm,
    mm,
    Bh
  );
}
function xm(t) {
  return xl(
    t,
    !1,
    um,
    ym,
    Uh
  );
}
function wl(t) {
  return xl(
    t,
    !0,
    cm,
    bm,
    qh
  );
}
function xl(t, e, n, i, r) {
  if (!St(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const s = r.get(t);
  if (s)
    return s;
  const o = wm(t);
  if (o === 0)
    return t;
  const a = new Proxy(
    t,
    o === 2 ? i : n
  );
  return r.set(t, a), a;
}
function _i(t) {
  return Ti(t) ? _i(t.__v_raw) : !!(t && t.__v_isReactive);
}
function Ti(t) {
  return !!(t && t.__v_isReadonly);
}
function Rs(t) {
  return !!(t && t.__v_isShallow);
}
function Hh(t) {
  return _i(t) || Ti(t);
}
function mt(t) {
  const e = t && t.__v_raw;
  return e ? mt(e) : t;
}
function Sl(t) {
  return Object.isExtensible(t) && Ms(t, "__v_skip", !0), t;
}
const fr = (t) => St(t) ? _l(t) : t, kl = (t) => St(t) ? wl(t) : t;
class Wh {
  constructor(e, n, i, r) {
    this.getter = e, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new gl(
      () => e(this._value),
      () => ys(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = i;
  }
  get value() {
    const e = mt(this);
    return (!e._cacheable || e.effect.dirty) && An(e._value, e._value = e.effect.run()) && ys(e, 4), Vh(e), e.effect._dirtyLevel >= 2 && ys(e, 2), e._value;
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
function Sm(t, e, n = !1) {
  let i, r;
  const s = ot(t);
  return s ? (i = t, r = Te) : (i = t.get, r = t.set), new Wh(i, r, s || !r, n);
}
function Vh(t) {
  var e;
  kn && Kn && (t = mt(t), Lh(
    Kn,
    (e = t.dep) != null ? e : t.dep = Rh(
      () => t.dep = void 0,
      t instanceof Wh ? t : void 0
    )
  ));
}
function ys(t, e = 4, n) {
  t = mt(t);
  const i = t.dep;
  i && Mh(
    i,
    e
  );
}
function re(t) {
  return !!(t && t.__v_isRef === !0);
}
function wi(t) {
  return jh(t, !1);
}
function pi(t) {
  return jh(t, !0);
}
function jh(t, e) {
  return re(t) ? t : new km(t, e);
}
class km {
  constructor(e, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? e : mt(e), this._value = n ? e : fr(e);
  }
  get value() {
    return Vh(this), this._value;
  }
  set value(e) {
    const n = this.__v_isShallow || Rs(e) || Ti(e);
    e = n ? e : mt(e), An(e, this._rawValue) && (this._rawValue = e, this._value = n ? e : fr(e), ys(this, 4));
  }
}
function zh(t) {
  return re(t) ? t.value : t;
}
const Em = {
  get: (t, e, n) => zh(Reflect.get(t, e, n)),
  set: (t, e, n, i) => {
    const r = t[e];
    return re(r) && !re(n) ? (r.value = n, !0) : Reflect.set(t, e, n, i);
  }
};
function Gh(t) {
  return _i(t) ? t : new Proxy(t, Em);
}
/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function En(t, e, n, i) {
  try {
    return i ? t(...i) : t();
  } catch (r) {
    Cr(r, e, n);
  }
}
function Me(t, e, n, i) {
  if (ot(t)) {
    const s = En(t, e, n, i);
    return s && Sh(s) && s.catch((o) => {
      Cr(o, e, n);
    }), s;
  }
  const r = [];
  for (let s = 0; s < t.length; s++)
    r.push(Me(t[s], e, n, i));
  return r;
}
function Cr(t, e, n, i = !0) {
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
      En(
        l,
        null,
        10,
        [t, o, a]
      );
      return;
    }
  }
  Tm(t, n, r, i);
}
function Tm(t, e, n, i = !0) {
  console.error(t);
}
let hr = !1, ma = !1;
const Jt = [];
let We = 0;
const xi = [];
let _n = null, Vn = 0;
const Yh = /* @__PURE__ */ Promise.resolve();
let El = null;
function mo(t) {
  const e = El || Yh;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Am(t) {
  let e = We + 1, n = Jt.length;
  for (; e < n; ) {
    const i = e + n >>> 1, r = Jt[i], s = dr(r);
    s < t || s === t && r.pre ? e = i + 1 : n = i;
  }
  return e;
}
function yo(t) {
  (!Jt.length || !Jt.includes(
    t,
    hr && t.allowRecurse ? We + 1 : We
  )) && (t.id == null ? Jt.push(t) : Jt.splice(Am(t.id), 0, t), Kh());
}
function Kh() {
  !hr && !ma && (ma = !0, El = Yh.then(Jh));
}
function Cm(t) {
  const e = Jt.indexOf(t);
  e > We && Jt.splice(e, 1);
}
function Om(t) {
  tt(t) ? xi.push(...t) : (!_n || !_n.includes(
    t,
    t.allowRecurse ? Vn + 1 : Vn
  )) && xi.push(t), Kh();
}
function Bc(t, e, n = hr ? We + 1 : 0) {
  for (; n < Jt.length; n++) {
    const i = Jt[n];
    if (i && i.pre) {
      if (t && i.id !== t.uid)
        continue;
      Jt.splice(n, 1), n--, i();
    }
  }
}
function Xh(t) {
  if (xi.length) {
    const e = [...new Set(xi)].sort(
      (n, i) => dr(n) - dr(i)
    );
    if (xi.length = 0, _n) {
      _n.push(...e);
      return;
    }
    for (_n = e, Vn = 0; Vn < _n.length; Vn++)
      _n[Vn]();
    _n = null, Vn = 0;
  }
}
const dr = (t) => t.id == null ? 1 / 0 : t.id, Pm = (t, e) => {
  const n = dr(t) - dr(e);
  if (n === 0) {
    if (t.pre && !e.pre)
      return -1;
    if (e.pre && !t.pre)
      return 1;
  }
  return n;
};
function Jh(t) {
  ma = !1, hr = !0, Jt.sort(Pm);
  try {
    for (We = 0; We < Jt.length; We++) {
      const e = Jt[We];
      e && e.active !== !1 && En(e, null, 14);
    }
  } finally {
    We = 0, Jt.length = 0, Xh(), hr = !1, El = null, (Jt.length || xi.length) && Jh();
  }
}
function Nm(t, e, ...n) {
  if (t.isUnmounted)
    return;
  const i = t.vnode.props || Et;
  let r = n;
  const s = e.startsWith("update:"), o = s && e.slice(7);
  if (o && o in i) {
    const u = `${o === "modelValue" ? "model" : o}Modifiers`, { number: f, trim: h } = i[u] || Et;
    h && (r = n.map((p) => Bt(p) ? p.trim() : p)), f && (r = n.map(ur));
  }
  let a, l = i[a = Ho(e)] || // also try camelCase event handler (#2249)
  i[a = Ho(Ke(e))];
  !l && s && (l = i[a = Ho(Fi(e))]), l && Me(
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
    t.emitted[a] = !0, Me(
      c,
      t,
      6,
      r
    );
  }
}
function Qh(t, e, n = !1) {
  const i = e.emitsCache, r = i.get(t);
  if (r !== void 0)
    return r;
  const s = t.emits;
  let o = {}, a = !1;
  if (!ot(t)) {
    const l = (c) => {
      const u = Qh(c, e, !0);
      u && (a = !0, Gt(o, u));
    };
    !n && e.mixins.length && e.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l);
  }
  return !s && !a ? (St(t) && i.set(t, null), null) : (tt(s) ? s.forEach((l) => o[l] = null) : Gt(o, s), St(t) && i.set(t, o), o);
}
function bo(t, e) {
  return !t || !fo(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), ht(t, e[0].toLowerCase() + e.slice(1)) || ht(t, Fi(e)) || ht(t, e));
}
let ie = null, vo = null;
function Ds(t) {
  const e = ie;
  return ie = t, vo = t && t.type.__scopeId || null, e;
}
function Im(t) {
  vo = t;
}
function Lm() {
  vo = null;
}
function Mm(t, e = ie, n) {
  if (!e || t._n)
    return t;
  const i = (...r) => {
    i._d && Xc(-1);
    const s = Ds(e);
    let o;
    try {
      o = t(...r);
    } finally {
      Ds(s), i._d && Xc(1);
    }
    return o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Vo(t) {
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
    setupState: p,
    ctx: y,
    inheritAttrs: S
  } = t;
  let k, m;
  const b = Ds(t);
  try {
    if (n.shapeFlag & 4) {
      const _ = r || i, E = _;
      k = He(
        u.call(
          E,
          _,
          f,
          s,
          p,
          h,
          y
        )
      ), m = l;
    } else {
      const _ = e;
      k = He(
        _.length > 1 ? _(
          s,
          { attrs: l, slots: a, emit: c }
        ) : _(
          s,
          null
          /* we know it doesn't need it */
        )
      ), m = e.props ? l : Rm(l);
    }
  } catch (_) {
    or.length = 0, Cr(_, t, 1), k = gt(Zn);
  }
  let x = k;
  if (m && S !== !1) {
    const _ = Object.keys(m), { shapeFlag: E } = x;
    _.length && E & 7 && (o && _.some(fl) && (m = Dm(
      m,
      o
    )), x = Ai(x, m));
  }
  return n.dirs && (x = Ai(x), x.dirs = x.dirs ? x.dirs.concat(n.dirs) : n.dirs), n.transition && (x.transition = n.transition), k = x, Ds(b), k;
}
const Rm = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || fo(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, Dm = (t, e) => {
  const n = {};
  for (const i in t)
    (!fl(i) || !(i.slice(9) in e)) && (n[i] = t[i]);
  return n;
};
function $m(t, e, n) {
  const { props: i, children: r, component: s } = t, { props: o, children: a, patchFlag: l } = e, c = s.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? Uc(i, o, c) : !!o;
    if (l & 8) {
      const u = e.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const h = u[f];
        if (o[h] !== i[h] && !bo(c, h))
          return !0;
      }
    }
  } else
    return (r || a) && (!a || !a.$stable) ? !0 : i === o ? !1 : i ? o ? Uc(i, o, c) : !0 : !!o;
  return !1;
}
function Uc(t, e, n) {
  const i = Object.keys(e);
  if (i.length !== Object.keys(t).length)
    return !0;
  for (let r = 0; r < i.length; r++) {
    const s = i[r];
    if (e[s] !== t[s] && !bo(n, s))
      return !0;
  }
  return !1;
}
function Fm({ vnode: t, parent: e }, n) {
  for (; e; ) {
    const i = e.subTree;
    if (i.suspense && i.suspense.activeBranch === t && (i.el = t.el), i === t)
      (t = e.vnode).el = n, e = e.parent;
    else
      break;
  }
}
const Tl = "components";
function bn(t, e) {
  return td(Tl, t, !0, e) || t;
}
const Zh = Symbol.for("v-ndc");
function Bm(t) {
  return Bt(t) ? td(Tl, t, !1) || t : t || Zh;
}
function td(t, e, n = !0, i = !1) {
  const r = ie || Wt;
  if (r) {
    const s = r.type;
    if (t === Tl) {
      const a = Ly(
        s,
        !1
      );
      if (a && (a === e || a === Ke(e) || a === po(Ke(e))))
        return s;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      qc(r[t] || s[t], e) || // global registration
      qc(r.appContext[t], e)
    );
    return !o && i ? s : o;
  }
}
function qc(t, e) {
  return t && (t[e] || t[Ke(e)] || t[po(Ke(e))]);
}
const Um = (t) => t.__isSuspense;
function qm(t, e) {
  e && e.pendingBranch ? tt(t) ? e.effects.push(...t) : e.effects.push(t) : Om(t);
}
const Hm = Symbol.for("v-scx"), Wm = () => sr(Hm), jr = {};
function on(t, e, n) {
  return ed(t, e, n);
}
function ed(t, e, {
  immediate: n,
  deep: i,
  flush: r,
  once: s,
  onTrack: o,
  onTrigger: a
} = Et) {
  if (e && s) {
    const P = e;
    e = (...L) => {
      P(...L), E();
    };
  }
  const l = Wt, c = (P) => i === !0 ? P : (
    // for deep: false, only traverse root-level properties
    jn(P, i === !1 ? 1 : void 0)
  );
  let u, f = !1, h = !1;
  if (re(t) ? (u = () => t.value, f = Rs(t)) : _i(t) ? (u = () => c(t), f = !0) : tt(t) ? (h = !0, f = t.some((P) => _i(P) || Rs(P)), u = () => t.map((P) => {
    if (re(P))
      return P.value;
    if (_i(P))
      return c(P);
    if (ot(P))
      return En(P, l, 2);
  })) : ot(t) ? e ? u = () => En(t, l, 2) : u = () => (p && p(), Me(
    t,
    l,
    3,
    [y]
  )) : u = Te, e && i) {
    const P = u;
    u = () => jn(P());
  }
  let p, y = (P) => {
    p = x.onStop = () => {
      En(P, l, 4), p = x.onStop = void 0;
    };
  }, S;
  if (Nr)
    if (y = Te, e ? n && Me(e, l, 3, [
      u(),
      h ? [] : void 0,
      y
    ]) : u(), r === "sync") {
      const P = Wm();
      S = P.__watcherHandles || (P.__watcherHandles = []);
    } else
      return Te;
  let k = h ? new Array(t.length).fill(jr) : jr;
  const m = () => {
    if (!(!x.active || !x.dirty))
      if (e) {
        const P = x.run();
        (i || f || (h ? P.some((L, W) => An(L, k[W])) : An(P, k))) && (p && p(), Me(e, l, 3, [
          P,
          // pass undefined as the old value when it's changed for the first time
          k === jr ? void 0 : h && k[0] === jr ? [] : k,
          y
        ]), k = P);
      } else
        x.run();
  };
  m.allowRecurse = !!e;
  let b;
  r === "sync" ? b = m : r === "post" ? b = () => le(m, l && l.suspense) : (m.pre = !0, l && (m.id = l.uid), b = () => yo(m));
  const x = new gl(u, Te, b), _ = Ph(), E = () => {
    x.stop(), _ && hl(_.effects, x);
  };
  return e ? n ? m() : k = x.run() : r === "post" ? le(
    x.run.bind(x),
    l && l.suspense
  ) : x.run(), S && S.push(E), E;
}
function Vm(t, e, n) {
  const i = this.proxy, r = Bt(t) ? t.includes(".") ? nd(i, t) : () => i[t] : t.bind(i, i);
  let s;
  ot(e) ? s = e : (s = e.handler, n = e);
  const o = Pr(this), a = ed(r, s.bind(i), n);
  return o(), a;
}
function nd(t, e) {
  const n = e.split(".");
  return () => {
    let i = t;
    for (let r = 0; r < n.length && i; r++)
      i = i[n[r]];
    return i;
  };
}
function jn(t, e, n = 0, i) {
  if (!St(t) || t.__v_skip)
    return t;
  if (e && e > 0) {
    if (n >= e)
      return t;
    n++;
  }
  if (i = i || /* @__PURE__ */ new Set(), i.has(t))
    return t;
  if (i.add(t), re(t))
    jn(t.value, e, n, i);
  else if (tt(t))
    for (let r = 0; r < t.length; r++)
      jn(t[r], e, n, i);
  else if ($i(t) || vi(t))
    t.forEach((r) => {
      jn(r, e, n, i);
    });
  else if (Eh(t))
    for (const r in t)
      jn(t[r], e, n, i);
  return t;
}
function tn(t, e) {
  if (ie === null)
    return t;
  const n = So(ie) || ie.proxy, i = t.dirs || (t.dirs = []);
  for (let r = 0; r < e.length; r++) {
    let [s, o, a, l = Et] = e[r];
    s && (ot(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && jn(o), i.push({
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
function Fn(t, e, n, i) {
  const r = t.dirs, s = e && e.dirs;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    s && (a.oldValue = s[o].value);
    let l = a.dir[i];
    l && (ri(), Me(l, n, 8, [
      t.el,
      a,
      t,
      e
    ]), si());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function oi(t, e) {
  return ot(t) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Gt({ name: t.name }, e, { setup: t })
  ) : t;
}
const bs = (t) => !!t.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Al(t) {
  ot(t) && (t = { loader: t });
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
    let p;
    return l || (p = l = e().catch((y) => {
      if (y = y instanceof Error ? y : new Error(String(y)), a)
        return new Promise((S, k) => {
          a(y, () => S(f()), () => k(y), u + 1);
        });
      throw y;
    }).then((y) => p !== l && l ? l : (y && (y.__esModule || y[Symbol.toStringTag] === "Module") && (y = y.default), c = y, y)));
  };
  return /* @__PURE__ */ oi({
    name: "AsyncComponentWrapper",
    __asyncLoader: h,
    get __asyncResolved() {
      return c;
    },
    setup() {
      const p = Wt;
      if (c)
        return () => jo(c, p);
      const y = (b) => {
        l = null, Cr(
          b,
          p,
          13,
          !i
        );
      };
      if (o && p.suspense || Nr)
        return h().then((b) => () => jo(b, p)).catch((b) => (y(b), () => i ? gt(i, {
          error: b
        }) : null));
      const S = wi(!1), k = wi(), m = wi(!!r);
      return r && setTimeout(() => {
        m.value = !1;
      }, r), s != null && setTimeout(() => {
        if (!S.value && !k.value) {
          const b = new Error(
            `Async component timed out after ${s}ms.`
          );
          y(b), k.value = b;
        }
      }, s), h().then(() => {
        S.value = !0, p.parent && Cl(p.parent.vnode) && (p.parent.effect.dirty = !0, yo(p.parent.update));
      }).catch((b) => {
        y(b), k.value = b;
      }), () => {
        if (S.value && c)
          return jo(c, p);
        if (k.value && i)
          return gt(i, {
            error: k.value
          });
        if (n && !m.value)
          return gt(n);
      };
    }
  });
}
function jo(t, e) {
  const { ref: n, props: i, children: r, ce: s } = e.vnode, o = gt(t, i, r);
  return o.ref = n, o.ce = s, delete e.vnode.ce, o;
}
const Cl = (t) => t.type.__isKeepAlive;
function jm(t, e) {
  id(t, "a", e);
}
function zm(t, e) {
  id(t, "da", e);
}
function id(t, e, n = Wt) {
  const i = t.__wdc || (t.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return t();
  });
  if (_o(e, i, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Cl(r.parent.vnode) && Gm(i, e, n, r), r = r.parent;
  }
}
function Gm(t, e, n, i) {
  const r = _o(
    e,
    t,
    i,
    !0
    /* prepend */
  );
  Pl(() => {
    hl(i[e], r);
  }, n);
}
function _o(t, e, n = Wt, i = !1) {
  if (n) {
    const r = n[t] || (n[t] = []), s = e.__weh || (e.__weh = (...o) => {
      if (n.isUnmounted)
        return;
      ri();
      const a = Pr(n), l = Me(e, n, t, o);
      return a(), si(), l;
    });
    return i ? r.unshift(s) : r.push(s), s;
  }
}
const fn = (t) => (e, n = Wt) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Nr || t === "sp") && _o(t, (...i) => e(...i), n)
), Ym = fn("bm"), Ol = fn("m"), Km = fn("bu"), Xm = fn("u"), Jm = fn("bum"), Pl = fn("um"), Qm = fn("sp"), Zm = fn(
  "rtg"
), ty = fn(
  "rtc"
);
function ey(t, e = Wt) {
  _o("ec", t, e);
}
function vn(t, e, n, i) {
  let r;
  const s = n && n[i];
  if (tt(t) || Bt(t)) {
    r = new Array(t.length);
    for (let o = 0, a = t.length; o < a; o++)
      r[o] = e(t[o], o, void 0, s && s[o]);
  } else if (typeof t == "number") {
    r = new Array(t);
    for (let o = 0; o < t; o++)
      r[o] = e(o + 1, o, void 0, s && s[o]);
  } else if (St(t))
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
const ya = (t) => t ? gd(t) ? So(t) || t.proxy : ya(t.parent) : null, ir = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Gt(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => ya(t.parent),
    $root: (t) => ya(t.root),
    $emit: (t) => t.emit,
    $options: (t) => Nl(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      t.effect.dirty = !0, yo(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = mo.bind(t.proxy)),
    $watch: (t) => Vm.bind(t)
  })
), zo = (t, e) => t !== Et && !t.__isScriptSetup && ht(t, e), ny = {
  get({ _: t }, e) {
    const { ctx: n, setupState: i, data: r, props: s, accessCache: o, type: a, appContext: l } = t;
    let c;
    if (e[0] !== "$") {
      const p = o[e];
      if (p !== void 0)
        switch (p) {
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
        if (zo(i, e))
          return o[e] = 1, i[e];
        if (r !== Et && ht(r, e))
          return o[e] = 2, r[e];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = t.propsOptions[0]) && ht(c, e)
        )
          return o[e] = 3, s[e];
        if (n !== Et && ht(n, e))
          return o[e] = 4, n[e];
        ba && (o[e] = 0);
      }
    }
    const u = ir[e];
    let f, h;
    if (u)
      return e === "$attrs" && ue(t, "get", e), u(t);
    if (
      // css module (injected by vue-loader)
      (f = a.__cssModules) && (f = f[e])
    )
      return f;
    if (n !== Et && ht(n, e))
      return o[e] = 4, n[e];
    if (
      // global properties
      h = l.config.globalProperties, ht(h, e)
    )
      return h[e];
  },
  set({ _: t }, e, n) {
    const { data: i, setupState: r, ctx: s } = t;
    return zo(r, e) ? (r[e] = n, !0) : i !== Et && ht(i, e) ? (i[e] = n, !0) : ht(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (s[e] = n, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: n, ctx: i, appContext: r, propsOptions: s }
  }, o) {
    let a;
    return !!n[o] || t !== Et && ht(t, o) || zo(e, o) || (a = s[0]) && ht(a, o) || ht(i, o) || ht(ir, o) || ht(r.config.globalProperties, o);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : ht(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
function Hc(t) {
  return tt(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
let ba = !0;
function iy(t) {
  const e = Nl(t), n = t.proxy, i = t.ctx;
  ba = !1, e.beforeCreate && Wc(e.beforeCreate, t, "bc");
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
    beforeUpdate: p,
    updated: y,
    activated: S,
    deactivated: k,
    beforeDestroy: m,
    beforeUnmount: b,
    destroyed: x,
    unmounted: _,
    render: E,
    renderTracked: P,
    renderTriggered: L,
    errorCaptured: W,
    serverPrefetch: M,
    // public API
    expose: H,
    inheritAttrs: F,
    // assets
    components: G,
    directives: q,
    filters: it
  } = e;
  if (c && ry(c, i, null), o)
    for (const lt in o) {
      const at = o[lt];
      ot(at) && (i[lt] = at.bind(n));
    }
  if (r) {
    const lt = r.call(n, n);
    St(lt) && (t.data = _l(lt));
  }
  if (ba = !0, s)
    for (const lt in s) {
      const at = s[lt], vt = ot(at) ? at.bind(n, n) : ot(at.get) ? at.get.bind(n, n) : Te, he = !ot(at) && ot(at.set) ? at.set.bind(n) : Te, Nt = xe({
        get: vt,
        set: he
      });
      Object.defineProperty(i, lt, {
        enumerable: !0,
        configurable: !0,
        get: () => Nt.value,
        set: (Dt) => Nt.value = Dt
      });
    }
  if (a)
    for (const lt in a)
      rd(a[lt], i, n, lt);
  if (l) {
    const lt = ot(l) ? l.call(n) : l;
    Reflect.ownKeys(lt).forEach((at) => {
      uy(at, lt[at]);
    });
  }
  u && Wc(u, t, "c");
  function dt(lt, at) {
    tt(at) ? at.forEach((vt) => lt(vt.bind(n))) : at && lt(at.bind(n));
  }
  if (dt(Ym, f), dt(Ol, h), dt(Km, p), dt(Xm, y), dt(jm, S), dt(zm, k), dt(ey, W), dt(ty, P), dt(Zm, L), dt(Jm, b), dt(Pl, _), dt(Qm, M), tt(H))
    if (H.length) {
      const lt = t.exposed || (t.exposed = {});
      H.forEach((at) => {
        Object.defineProperty(lt, at, {
          get: () => n[at],
          set: (vt) => n[at] = vt
        });
      });
    } else
      t.exposed || (t.exposed = {});
  E && t.render === Te && (t.render = E), F != null && (t.inheritAttrs = F), G && (t.components = G), q && (t.directives = q);
}
function ry(t, e, n = Te) {
  tt(t) && (t = va(t));
  for (const i in t) {
    const r = t[i];
    let s;
    St(r) ? "default" in r ? s = sr(
      r.from || i,
      r.default,
      !0
    ) : s = sr(r.from || i) : s = sr(r), re(s) ? Object.defineProperty(e, i, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (o) => s.value = o
    }) : e[i] = s;
  }
}
function Wc(t, e, n) {
  Me(
    tt(t) ? t.map((i) => i.bind(e.proxy)) : t.bind(e.proxy),
    e,
    n
  );
}
function rd(t, e, n, i) {
  const r = i.includes(".") ? nd(n, i) : () => n[i];
  if (Bt(t)) {
    const s = e[t];
    ot(s) && on(r, s);
  } else if (ot(t))
    on(r, t.bind(n));
  else if (St(t))
    if (tt(t))
      t.forEach((s) => rd(s, e, n, i));
    else {
      const s = ot(t.handler) ? t.handler.bind(n) : e[t.handler];
      ot(s) && on(r, s, t);
    }
}
function Nl(t) {
  const e = t.type, { mixins: n, extends: i } = e, {
    mixins: r,
    optionsCache: s,
    config: { optionMergeStrategies: o }
  } = t.appContext, a = s.get(e);
  let l;
  return a ? l = a : !r.length && !n && !i ? l = e : (l = {}, r.length && r.forEach(
    (c) => $s(l, c, o, !0)
  ), $s(l, e, o)), St(e) && s.set(e, l), l;
}
function $s(t, e, n, i = !1) {
  const { mixins: r, extends: s } = e;
  s && $s(t, s, n, !0), r && r.forEach(
    (o) => $s(t, o, n, !0)
  );
  for (const o in e)
    if (!(i && o === "expose")) {
      const a = sy[o] || n && n[o];
      t[o] = a ? a(t[o], e[o]) : e[o];
    }
  return t;
}
const sy = {
  data: Vc,
  props: jc,
  emits: jc,
  // objects
  methods: Qi,
  computed: Qi,
  // lifecycle
  beforeCreate: te,
  created: te,
  beforeMount: te,
  mounted: te,
  beforeUpdate: te,
  updated: te,
  beforeDestroy: te,
  beforeUnmount: te,
  destroyed: te,
  unmounted: te,
  activated: te,
  deactivated: te,
  errorCaptured: te,
  serverPrefetch: te,
  // assets
  components: Qi,
  directives: Qi,
  // watch
  watch: ay,
  // provide / inject
  provide: Vc,
  inject: oy
};
function Vc(t, e) {
  return e ? t ? function() {
    return Gt(
      ot(t) ? t.call(this, this) : t,
      ot(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function oy(t, e) {
  return Qi(va(t), va(e));
}
function va(t) {
  if (tt(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e;
  }
  return t;
}
function te(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function Qi(t, e) {
  return t ? Gt(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function jc(t, e) {
  return t ? tt(t) && tt(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : Gt(
    /* @__PURE__ */ Object.create(null),
    Hc(t),
    Hc(e ?? {})
  ) : e;
}
function ay(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  const n = Gt(/* @__PURE__ */ Object.create(null), t);
  for (const i in e)
    n[i] = te(t[i], e[i]);
  return n;
}
function sd() {
  return {
    app: null,
    config: {
      isNativeTag: Hg,
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
let ly = 0;
function cy(t, e) {
  return function(i, r = null) {
    ot(i) || (i = Gt({}, i)), r != null && !St(r) && (r = null);
    const s = sd(), o = /* @__PURE__ */ new WeakSet();
    let a = !1;
    const l = s.app = {
      _uid: ly++,
      _component: i,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: Ry,
      get config() {
        return s.config;
      },
      set config(c) {
      },
      use(c, ...u) {
        return o.has(c) || (c && ot(c.install) ? (o.add(c), c.install(l, ...u)) : ot(c) && (o.add(c), c(l, ...u))), l;
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
          const h = gt(i, r);
          return h.appContext = s, f === !0 ? f = "svg" : f === !1 && (f = void 0), u && e ? e(h, c) : t(h, c, f), a = !0, l._container = c, c.__vue_app__ = l, So(h.component) || h.component.proxy;
        }
      },
      unmount() {
        a && (t(null, l._container), delete l._container.__vue_app__);
      },
      provide(c, u) {
        return s.provides[c] = u, l;
      },
      runWithContext(c) {
        const u = rr;
        rr = l;
        try {
          return c();
        } finally {
          rr = u;
        }
      }
    };
    return l;
  };
}
let rr = null;
function uy(t, e) {
  if (Wt) {
    let n = Wt.provides;
    const i = Wt.parent && Wt.parent.provides;
    i === n && (n = Wt.provides = Object.create(i)), n[t] = e;
  }
}
function sr(t, e, n = !1) {
  const i = Wt || ie;
  if (i || rr) {
    const r = i ? i.parent == null ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : rr._context.provides;
    if (r && t in r)
      return r[t];
    if (arguments.length > 1)
      return n && ot(e) ? e.call(i && i.proxy) : e;
  }
}
function fy(t, e, n, i = !1) {
  const r = {}, s = {};
  Ms(s, wo, 1), t.propsDefaults = /* @__PURE__ */ Object.create(null), od(t, e, r, s);
  for (const o in t.propsOptions[0])
    o in r || (r[o] = void 0);
  n ? t.props = i ? r : xm(r) : t.type.props ? t.props = r : t.props = s, t.attrs = s;
}
function hy(t, e, n, i) {
  const {
    props: r,
    attrs: s,
    vnode: { patchFlag: o }
  } = t, a = mt(r), [l] = t.propsOptions;
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
        if (bo(t.emitsOptions, h))
          continue;
        const p = e[h];
        if (l)
          if (ht(s, h))
            p !== s[h] && (s[h] = p, c = !0);
          else {
            const y = Ke(h);
            r[y] = _a(
              l,
              a,
              y,
              p,
              t,
              !1
            );
          }
        else
          p !== s[h] && (s[h] = p, c = !0);
      }
    }
  } else {
    od(t, e, r, s) && (c = !0);
    let u;
    for (const f in a)
      (!e || // for camelCase
      !ht(e, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Fi(f)) === f || !ht(e, u))) && (l ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[u] !== void 0) && (r[f] = _a(
        l,
        a,
        f,
        void 0,
        t,
        !0
      )) : delete r[f]);
    if (s !== a)
      for (const f in s)
        (!e || !ht(e, f)) && (delete s[f], c = !0);
  }
  c && sn(t, "set", "$attrs");
}
function od(t, e, n, i) {
  const [r, s] = t.propsOptions;
  let o = !1, a;
  if (e)
    for (let l in e) {
      if (nr(l))
        continue;
      const c = e[l];
      let u;
      r && ht(r, u = Ke(l)) ? !s || !s.includes(u) ? n[u] = c : (a || (a = {}))[u] = c : bo(t.emitsOptions, l) || (!(l in i) || c !== i[l]) && (i[l] = c, o = !0);
    }
  if (s) {
    const l = mt(n), c = a || Et;
    for (let u = 0; u < s.length; u++) {
      const f = s[u];
      n[f] = _a(
        r,
        l,
        f,
        c[f],
        t,
        !ht(c, f)
      );
    }
  }
  return o;
}
function _a(t, e, n, i, r, s) {
  const o = t[n];
  if (o != null) {
    const a = ht(o, "default");
    if (a && i === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && ot(l)) {
        const { propsDefaults: c } = r;
        if (n in c)
          i = c[n];
        else {
          const u = Pr(r);
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
    ] && (i === "" || i === Fi(n)) && (i = !0));
  }
  return i;
}
function ad(t, e, n = !1) {
  const i = e.propsCache, r = i.get(t);
  if (r)
    return r;
  const s = t.props, o = {}, a = [];
  let l = !1;
  if (!ot(t)) {
    const u = (f) => {
      l = !0;
      const [h, p] = ad(f, e, !0);
      Gt(o, h), p && a.push(...p);
    };
    !n && e.mixins.length && e.mixins.forEach(u), t.extends && u(t.extends), t.mixins && t.mixins.forEach(u);
  }
  if (!s && !l)
    return St(t) && i.set(t, bi), bi;
  if (tt(s))
    for (let u = 0; u < s.length; u++) {
      const f = Ke(s[u]);
      zc(f) && (o[f] = Et);
    }
  else if (s)
    for (const u in s) {
      const f = Ke(u);
      if (zc(f)) {
        const h = s[u], p = o[f] = tt(h) || ot(h) ? { type: h } : Gt({}, h);
        if (p) {
          const y = Kc(Boolean, p.type), S = Kc(String, p.type);
          p[
            0
            /* shouldCast */
          ] = y > -1, p[
            1
            /* shouldCastTrue */
          ] = S < 0 || y < S, (y > -1 || ht(p, "default")) && a.push(f);
        }
      }
    }
  const c = [o, a];
  return St(t) && i.set(t, c), c;
}
function zc(t) {
  return t[0] !== "$" && !nr(t);
}
function Gc(t) {
  return t === null ? "null" : typeof t == "function" ? t.name || "" : typeof t == "object" && t.constructor && t.constructor.name || "";
}
function Yc(t, e) {
  return Gc(t) === Gc(e);
}
function Kc(t, e) {
  return tt(e) ? e.findIndex((n) => Yc(n, t)) : ot(e) && Yc(e, t) ? 0 : -1;
}
const ld = (t) => t[0] === "_" || t === "$stable", Il = (t) => tt(t) ? t.map(He) : [He(t)], dy = (t, e, n) => {
  if (e._n)
    return e;
  const i = Mm((...r) => Il(e(...r)), n);
  return i._c = !1, i;
}, cd = (t, e, n) => {
  const i = t._ctx;
  for (const r in t) {
    if (ld(r))
      continue;
    const s = t[r];
    if (ot(s))
      e[r] = dy(r, s, i);
    else if (s != null) {
      const o = Il(s);
      e[r] = () => o;
    }
  }
}, ud = (t, e) => {
  const n = Il(e);
  t.slots.default = () => n;
}, py = (t, e) => {
  if (t.vnode.shapeFlag & 32) {
    const n = e._;
    n ? (t.slots = mt(e), Ms(e, "_", n)) : cd(
      e,
      t.slots = {}
    );
  } else
    t.slots = {}, e && ud(t, e);
  Ms(t.slots, wo, 1);
}, gy = (t, e, n) => {
  const { vnode: i, slots: r } = t;
  let s = !0, o = Et;
  if (i.shapeFlag & 32) {
    const a = e._;
    a ? n && a === 1 ? s = !1 : (Gt(r, e), !n && a === 1 && delete r._) : (s = !e.$stable, cd(e, r)), o = e;
  } else
    e && (ud(t, e), o = { default: 1 });
  if (s)
    for (const a in r)
      !ld(a) && o[a] == null && delete r[a];
};
function wa(t, e, n, i, r = !1) {
  if (tt(t)) {
    t.forEach(
      (h, p) => wa(
        h,
        e && (tt(e) ? e[p] : e),
        n,
        i,
        r
      )
    );
    return;
  }
  if (bs(i) && !r)
    return;
  const s = i.shapeFlag & 4 ? So(i.component) || i.component.proxy : i.el, o = r ? null : s, { i: a, r: l } = t, c = e && e.r, u = a.refs === Et ? a.refs = {} : a.refs, f = a.setupState;
  if (c != null && c !== l && (Bt(c) ? (u[c] = null, ht(f, c) && (f[c] = null)) : re(c) && (c.value = null)), ot(l))
    En(l, a, 12, [o, u]);
  else {
    const h = Bt(l), p = re(l);
    if (h || p) {
      const y = () => {
        if (t.f) {
          const S = h ? ht(f, l) ? f[l] : u[l] : l.value;
          r ? tt(S) && hl(S, s) : tt(S) ? S.includes(s) || S.push(s) : h ? (u[l] = [s], ht(f, l) && (f[l] = u[l])) : (l.value = [s], t.k && (u[t.k] = l.value));
        } else
          h ? (u[l] = o, ht(f, l) && (f[l] = o)) : p && (l.value = o, t.k && (u[t.k] = o));
      };
      o ? (y.id = -1, le(y, n)) : y();
    }
  }
}
const le = qm;
function my(t) {
  return yy(t);
}
function yy(t, e) {
  const n = Th();
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
    setScopeId: p = Te,
    insertStaticContent: y
  } = t, S = (d, g, w, T = null, O = null, I = null, B = void 0, D = null, U = !!g.dynamicChildren) => {
    if (d === g)
      return;
    d && !zi(d, g) && (T = Oe(d), Dt(d, O, I, !0), d = null), g.patchFlag === -2 && (U = !1, g.dynamicChildren = null);
    const { type: R, ref: j, shapeFlag: Z } = g;
    switch (R) {
      case Or:
        k(d, g, w, T);
        break;
      case Zn:
        m(d, g, w, T);
        break;
      case vs:
        d == null && b(g, w, T, B);
        break;
      case $t:
        G(
          d,
          g,
          w,
          T,
          O,
          I,
          B,
          D,
          U
        );
        break;
      default:
        Z & 1 ? E(
          d,
          g,
          w,
          T,
          O,
          I,
          B,
          D,
          U
        ) : Z & 6 ? q(
          d,
          g,
          w,
          T,
          O,
          I,
          B,
          D,
          U
        ) : (Z & 64 || Z & 128) && R.process(
          d,
          g,
          w,
          T,
          O,
          I,
          B,
          D,
          U,
          Yt
        );
    }
    j != null && O && wa(j, d && d.ref, I, g || d, !g);
  }, k = (d, g, w, T) => {
    if (d == null)
      i(
        g.el = a(g.children),
        w,
        T
      );
    else {
      const O = g.el = d.el;
      g.children !== d.children && c(O, g.children);
    }
  }, m = (d, g, w, T) => {
    d == null ? i(
      g.el = l(g.children || ""),
      w,
      T
    ) : g.el = d.el;
  }, b = (d, g, w, T) => {
    [d.el, d.anchor] = y(
      d.children,
      g,
      w,
      T,
      d.el,
      d.anchor
    );
  }, x = ({ el: d, anchor: g }, w, T) => {
    let O;
    for (; d && d !== g; )
      O = h(d), i(d, w, T), d = O;
    i(g, w, T);
  }, _ = ({ el: d, anchor: g }) => {
    let w;
    for (; d && d !== g; )
      w = h(d), r(d), d = w;
    r(g);
  }, E = (d, g, w, T, O, I, B, D, U) => {
    g.type === "svg" ? B = "svg" : g.type === "math" && (B = "mathml"), d == null ? P(
      g,
      w,
      T,
      O,
      I,
      B,
      D,
      U
    ) : M(
      d,
      g,
      O,
      I,
      B,
      D,
      U
    );
  }, P = (d, g, w, T, O, I, B, D) => {
    let U, R;
    const { props: j, shapeFlag: Z, transition: V, dirs: C } = d;
    if (U = d.el = o(
      d.type,
      I,
      j && j.is,
      j
    ), Z & 8 ? u(U, d.children) : Z & 16 && W(
      d.children,
      U,
      null,
      T,
      O,
      Go(d, I),
      B,
      D
    ), C && Fn(d, null, T, "created"), L(U, d, d.scopeId, B, T), j) {
      for (const J in j)
        J !== "value" && !nr(J) && s(
          U,
          J,
          null,
          j[J],
          I,
          d.children,
          T,
          O,
          jt
        );
      "value" in j && s(U, "value", null, j.value, I), (R = j.onVnodeBeforeMount) && Be(R, T, d);
    }
    C && Fn(d, null, T, "beforeMount");
    const N = by(O, V);
    N && V.beforeEnter(U), i(U, g, w), ((R = j && j.onVnodeMounted) || N || C) && le(() => {
      R && Be(R, T, d), N && V.enter(U), C && Fn(d, null, T, "mounted");
    }, O);
  }, L = (d, g, w, T, O) => {
    if (w && p(d, w), T)
      for (let I = 0; I < T.length; I++)
        p(d, T[I]);
    if (O) {
      let I = O.subTree;
      if (g === I) {
        const B = O.vnode;
        L(
          d,
          B,
          B.scopeId,
          B.slotScopeIds,
          O.parent
        );
      }
    }
  }, W = (d, g, w, T, O, I, B, D, U = 0) => {
    for (let R = U; R < d.length; R++) {
      const j = d[R] = D ? wn(d[R]) : He(d[R]);
      S(
        null,
        j,
        g,
        w,
        T,
        O,
        I,
        B,
        D
      );
    }
  }, M = (d, g, w, T, O, I, B) => {
    const D = g.el = d.el;
    let { patchFlag: U, dynamicChildren: R, dirs: j } = g;
    U |= d.patchFlag & 16;
    const Z = d.props || Et, V = g.props || Et;
    let C;
    if (w && Bn(w, !1), (C = V.onVnodeBeforeUpdate) && Be(C, w, g, d), j && Fn(g, d, w, "beforeUpdate"), w && Bn(w, !0), R ? H(
      d.dynamicChildren,
      R,
      D,
      w,
      T,
      Go(g, O),
      I
    ) : B || at(
      d,
      g,
      D,
      null,
      w,
      T,
      Go(g, O),
      I,
      !1
    ), U > 0) {
      if (U & 16)
        F(
          D,
          g,
          Z,
          V,
          w,
          T,
          O
        );
      else if (U & 2 && Z.class !== V.class && s(D, "class", null, V.class, O), U & 4 && s(D, "style", Z.style, V.style, O), U & 8) {
        const N = g.dynamicProps;
        for (let J = 0; J < N.length; J++) {
          const rt = N[J], _t = Z[rt], Kt = V[rt];
          (Kt !== _t || rt === "value") && s(
            D,
            rt,
            _t,
            Kt,
            O,
            d.children,
            w,
            T,
            jt
          );
        }
      }
      U & 1 && d.children !== g.children && u(D, g.children);
    } else
      !B && R == null && F(
        D,
        g,
        Z,
        V,
        w,
        T,
        O
      );
    ((C = V.onVnodeUpdated) || j) && le(() => {
      C && Be(C, w, g, d), j && Fn(g, d, w, "updated");
    }, T);
  }, H = (d, g, w, T, O, I, B) => {
    for (let D = 0; D < g.length; D++) {
      const U = d[D], R = g[D], j = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        U.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (U.type === $t || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !zi(U, R) || // - In the case of a component, it could contain anything.
        U.shapeFlag & 70) ? f(U.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          w
        )
      );
      S(
        U,
        R,
        j,
        null,
        T,
        O,
        I,
        B,
        !0
      );
    }
  }, F = (d, g, w, T, O, I, B) => {
    if (w !== T) {
      if (w !== Et)
        for (const D in w)
          !nr(D) && !(D in T) && s(
            d,
            D,
            w[D],
            null,
            B,
            g.children,
            O,
            I,
            jt
          );
      for (const D in T) {
        if (nr(D))
          continue;
        const U = T[D], R = w[D];
        U !== R && D !== "value" && s(
          d,
          D,
          R,
          U,
          B,
          g.children,
          O,
          I,
          jt
        );
      }
      "value" in T && s(d, "value", w.value, T.value, B);
    }
  }, G = (d, g, w, T, O, I, B, D, U) => {
    const R = g.el = d ? d.el : a(""), j = g.anchor = d ? d.anchor : a("");
    let { patchFlag: Z, dynamicChildren: V, slotScopeIds: C } = g;
    C && (D = D ? D.concat(C) : C), d == null ? (i(R, w, T), i(j, w, T), W(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      g.children || [],
      w,
      j,
      O,
      I,
      B,
      D,
      U
    )) : Z > 0 && Z & 64 && V && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    d.dynamicChildren ? (H(
      d.dynamicChildren,
      V,
      w,
      O,
      I,
      B,
      D
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (g.key != null || O && g === O.subTree) && fd(
      d,
      g,
      !0
      /* shallow */
    )) : at(
      d,
      g,
      w,
      j,
      O,
      I,
      B,
      D,
      U
    );
  }, q = (d, g, w, T, O, I, B, D, U) => {
    g.slotScopeIds = D, d == null ? g.shapeFlag & 512 ? O.ctx.activate(
      g,
      w,
      T,
      B,
      U
    ) : it(
      g,
      w,
      T,
      O,
      I,
      B,
      U
    ) : Rt(d, g, U);
  }, it = (d, g, w, T, O, I, B) => {
    const D = d.component = Cy(
      d,
      T,
      O
    );
    if (Cl(d) && (D.ctx.renderer = Yt), Oy(D), D.asyncDep) {
      if (O && O.registerDep(D, dt), !d.el) {
        const U = D.subTree = gt(Zn);
        m(null, U, g, w);
      }
    } else
      dt(
        D,
        d,
        g,
        w,
        O,
        I,
        B
      );
  }, Rt = (d, g, w) => {
    const T = g.component = d.component;
    if ($m(d, g, w))
      if (T.asyncDep && !T.asyncResolved) {
        lt(T, g, w);
        return;
      } else
        T.next = g, Cm(T.update), T.effect.dirty = !0, T.update();
    else
      g.el = d.el, T.vnode = g;
  }, dt = (d, g, w, T, O, I, B) => {
    const D = () => {
      if (d.isMounted) {
        let { next: j, bu: Z, u: V, parent: C, vnode: N } = d;
        {
          const pe = hd(d);
          if (pe) {
            j && (j.el = N.el, lt(d, j, B)), pe.asyncDep.then(() => {
              d.isUnmounted || D();
            });
            return;
          }
        }
        let J = j, rt;
        Bn(d, !1), j ? (j.el = N.el, lt(d, j, B)) : j = N, Z && ms(Z), (rt = j.props && j.props.onVnodeBeforeUpdate) && Be(rt, C, j, N), Bn(d, !0);
        const _t = Vo(d), Kt = d.subTree;
        d.subTree = _t, S(
          Kt,
          _t,
          // parent may have changed if it's in a teleport
          f(Kt.el),
          // anchor may have changed if it's in a fragment
          Oe(Kt),
          d,
          O,
          I
        ), j.el = _t.el, J === null && Fm(d, _t.el), V && le(V, O), (rt = j.props && j.props.onVnodeUpdated) && le(
          () => Be(rt, C, j, N),
          O
        );
      } else {
        let j;
        const { el: Z, props: V } = g, { bm: C, m: N, parent: J } = d, rt = bs(g);
        if (Bn(d, !1), C && ms(C), !rt && (j = V && V.onVnodeBeforeMount) && Be(j, J, g), Bn(d, !0), Z && $n) {
          const _t = () => {
            d.subTree = Vo(d), $n(
              Z,
              d.subTree,
              d,
              O,
              null
            );
          };
          rt ? g.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !d.isUnmounted && _t()
          ) : _t();
        } else {
          const _t = d.subTree = Vo(d);
          S(
            null,
            _t,
            w,
            T,
            d,
            O,
            I
          ), g.el = _t.el;
        }
        if (N && le(N, O), !rt && (j = V && V.onVnodeMounted)) {
          const _t = g;
          le(
            () => Be(j, J, _t),
            O
          );
        }
        (g.shapeFlag & 256 || J && bs(J.vnode) && J.vnode.shapeFlag & 256) && d.a && le(d.a, O), d.isMounted = !0, g = w = T = null;
      }
    }, U = d.effect = new gl(
      D,
      Te,
      () => yo(R),
      d.scope
      // track it in component's effect scope
    ), R = d.update = () => {
      U.dirty && U.run();
    };
    R.id = d.uid, Bn(d, !0), R();
  }, lt = (d, g, w) => {
    g.component = d;
    const T = d.vnode.props;
    d.vnode = g, d.next = null, hy(d, g.props, T, w), gy(d, g.children, w), ri(), Bc(d), si();
  }, at = (d, g, w, T, O, I, B, D, U = !1) => {
    const R = d && d.children, j = d ? d.shapeFlag : 0, Z = g.children, { patchFlag: V, shapeFlag: C } = g;
    if (V > 0) {
      if (V & 128) {
        he(
          R,
          Z,
          w,
          T,
          O,
          I,
          B,
          D,
          U
        );
        return;
      } else if (V & 256) {
        vt(
          R,
          Z,
          w,
          T,
          O,
          I,
          B,
          D,
          U
        );
        return;
      }
    }
    C & 8 ? (j & 16 && jt(R, O, I), Z !== R && u(w, Z)) : j & 16 ? C & 16 ? he(
      R,
      Z,
      w,
      T,
      O,
      I,
      B,
      D,
      U
    ) : jt(R, O, I, !0) : (j & 8 && u(w, ""), C & 16 && W(
      Z,
      w,
      T,
      O,
      I,
      B,
      D,
      U
    ));
  }, vt = (d, g, w, T, O, I, B, D, U) => {
    d = d || bi, g = g || bi;
    const R = d.length, j = g.length, Z = Math.min(R, j);
    let V;
    for (V = 0; V < Z; V++) {
      const C = g[V] = U ? wn(g[V]) : He(g[V]);
      S(
        d[V],
        C,
        w,
        null,
        O,
        I,
        B,
        D,
        U
      );
    }
    R > j ? jt(
      d,
      O,
      I,
      !0,
      !1,
      Z
    ) : W(
      g,
      w,
      T,
      O,
      I,
      B,
      D,
      U,
      Z
    );
  }, he = (d, g, w, T, O, I, B, D, U) => {
    let R = 0;
    const j = g.length;
    let Z = d.length - 1, V = j - 1;
    for (; R <= Z && R <= V; ) {
      const C = d[R], N = g[R] = U ? wn(g[R]) : He(g[R]);
      if (zi(C, N))
        S(
          C,
          N,
          w,
          null,
          O,
          I,
          B,
          D,
          U
        );
      else
        break;
      R++;
    }
    for (; R <= Z && R <= V; ) {
      const C = d[Z], N = g[V] = U ? wn(g[V]) : He(g[V]);
      if (zi(C, N))
        S(
          C,
          N,
          w,
          null,
          O,
          I,
          B,
          D,
          U
        );
      else
        break;
      Z--, V--;
    }
    if (R > Z) {
      if (R <= V) {
        const C = V + 1, N = C < j ? g[C].el : T;
        for (; R <= V; )
          S(
            null,
            g[R] = U ? wn(g[R]) : He(g[R]),
            w,
            N,
            O,
            I,
            B,
            D,
            U
          ), R++;
      }
    } else if (R > V)
      for (; R <= Z; )
        Dt(d[R], O, I, !0), R++;
    else {
      const C = R, N = R, J = /* @__PURE__ */ new Map();
      for (R = N; R <= V; R++) {
        const ge = g[R] = U ? wn(g[R]) : He(g[R]);
        ge.key != null && J.set(ge.key, R);
      }
      let rt, _t = 0;
      const Kt = V - N + 1;
      let pe = !1, Br = 0;
      const ui = new Array(Kt);
      for (R = 0; R < Kt; R++)
        ui[R] = 0;
      for (R = C; R <= Z; R++) {
        const ge = d[R];
        if (_t >= Kt) {
          Dt(ge, O, I, !0);
          continue;
        }
        let Fe;
        if (ge.key != null)
          Fe = J.get(ge.key);
        else
          for (rt = N; rt <= V; rt++)
            if (ui[rt - N] === 0 && zi(ge, g[rt])) {
              Fe = rt;
              break;
            }
        Fe === void 0 ? Dt(ge, O, I, !0) : (ui[Fe - N] = R + 1, Fe >= Br ? Br = Fe : pe = !0, S(
          ge,
          g[Fe],
          w,
          null,
          O,
          I,
          B,
          D,
          U
        ), _t++);
      }
      const Cc = pe ? vy(ui) : bi;
      for (rt = Cc.length - 1, R = Kt - 1; R >= 0; R--) {
        const ge = N + R, Fe = g[ge], Oc = ge + 1 < j ? g[ge + 1].el : T;
        ui[R] === 0 ? S(
          null,
          Fe,
          w,
          Oc,
          O,
          I,
          B,
          D,
          U
        ) : pe && (rt < 0 || R !== Cc[rt] ? Nt(Fe, w, Oc, 2) : rt--);
      }
    }
  }, Nt = (d, g, w, T, O = null) => {
    const { el: I, type: B, transition: D, children: U, shapeFlag: R } = d;
    if (R & 6) {
      Nt(d.component.subTree, g, w, T);
      return;
    }
    if (R & 128) {
      d.suspense.move(g, w, T);
      return;
    }
    if (R & 64) {
      B.move(d, g, w, Yt);
      return;
    }
    if (B === $t) {
      i(I, g, w);
      for (let Z = 0; Z < U.length; Z++)
        Nt(U[Z], g, w, T);
      i(d.anchor, g, w);
      return;
    }
    if (B === vs) {
      x(d, g, w);
      return;
    }
    if (T !== 2 && R & 1 && D)
      if (T === 0)
        D.beforeEnter(I), i(I, g, w), le(() => D.enter(I), O);
      else {
        const { leave: Z, delayLeave: V, afterLeave: C } = D, N = () => i(I, g, w), J = () => {
          Z(I, () => {
            N(), C && C();
          });
        };
        V ? V(I, N, J) : J();
      }
    else
      i(I, g, w);
  }, Dt = (d, g, w, T = !1, O = !1) => {
    const {
      type: I,
      props: B,
      ref: D,
      children: U,
      dynamicChildren: R,
      shapeFlag: j,
      patchFlag: Z,
      dirs: V
    } = d;
    if (D != null && wa(D, null, w, d, !0), j & 256) {
      g.ctx.deactivate(d);
      return;
    }
    const C = j & 1 && V, N = !bs(d);
    let J;
    if (N && (J = B && B.onVnodeBeforeUnmount) && Be(J, g, d), j & 6)
      Zt(d.component, w, T);
    else {
      if (j & 128) {
        d.suspense.unmount(w, T);
        return;
      }
      C && Fn(d, null, g, "beforeUnmount"), j & 64 ? d.type.remove(
        d,
        g,
        w,
        O,
        Yt,
        T
      ) : R && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (I !== $t || Z > 0 && Z & 64) ? jt(
        R,
        g,
        w,
        !1,
        !0
      ) : (I === $t && Z & 384 || !O && j & 16) && jt(U, g, w), T && De(d);
    }
    (N && (J = B && B.onVnodeUnmounted) || C) && le(() => {
      J && Be(J, g, d), C && Fn(d, null, g, "unmounted");
    }, w);
  }, De = (d) => {
    const { type: g, el: w, anchor: T, transition: O } = d;
    if (g === $t) {
      $e(w, T);
      return;
    }
    if (g === vs) {
      _(d);
      return;
    }
    const I = () => {
      r(w), O && !O.persisted && O.afterLeave && O.afterLeave();
    };
    if (d.shapeFlag & 1 && O && !O.persisted) {
      const { leave: B, delayLeave: D } = O, U = () => B(w, I);
      D ? D(d.el, I, U) : U();
    } else
      I();
  }, $e = (d, g) => {
    let w;
    for (; d !== g; )
      w = h(d), r(d), d = w;
    r(g);
  }, Zt = (d, g, w) => {
    const { bum: T, scope: O, update: I, subTree: B, um: D } = d;
    T && ms(T), O.stop(), I && (I.active = !1, Dt(B, d, g, w)), D && le(D, g), le(() => {
      d.isUnmounted = !0;
    }, g), g && g.pendingBranch && !g.isUnmounted && d.asyncDep && !d.asyncResolved && d.suspenseId === g.pendingId && (g.deps--, g.deps === 0 && g.resolve());
  }, jt = (d, g, w, T = !1, O = !1, I = 0) => {
    for (let B = I; B < d.length; B++)
      Dt(d[B], g, w, T, O);
  }, Oe = (d) => d.shapeFlag & 6 ? Oe(d.component.subTree) : d.shapeFlag & 128 ? d.suspense.next() : h(d.anchor || d.el);
  let de = !1;
  const ve = (d, g, w) => {
    d == null ? g._vnode && Dt(g._vnode, null, null, !0) : S(
      g._vnode || null,
      d,
      g,
      null,
      null,
      null,
      w
    ), de || (de = !0, Bc(), Xh(), de = !1), g._vnode = d;
  }, Yt = {
    p: S,
    um: Dt,
    m: Nt,
    r: De,
    mt: it,
    mc: W,
    pc: at,
    pbc: H,
    n: Oe,
    o: t
  };
  let _e, $n;
  return e && ([_e, $n] = e(
    Yt
  )), {
    render: ve,
    hydrate: _e,
    createApp: cy(ve, _e)
  };
}
function Go({ type: t, props: e }, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n;
}
function Bn({ effect: t, update: e }, n) {
  t.allowRecurse = e.allowRecurse = n;
}
function by(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function fd(t, e, n = !1) {
  const i = t.children, r = e.children;
  if (tt(i) && tt(r))
    for (let s = 0; s < i.length; s++) {
      const o = i[s];
      let a = r[s];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = r[s] = wn(r[s]), a.el = o.el), n || fd(o, a)), a.type === Or && (a.el = o.el);
    }
}
function vy(t) {
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
function hd(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : hd(e);
}
const _y = (t) => t.__isTeleport, $t = Symbol.for("v-fgt"), Or = Symbol.for("v-txt"), Zn = Symbol.for("v-cmt"), vs = Symbol.for("v-stc"), or = [];
let Ie = null;
function Q(t = !1) {
  or.push(Ie = t ? null : []);
}
function wy() {
  or.pop(), Ie = or[or.length - 1] || null;
}
let pr = 1;
function Xc(t) {
  pr += t;
}
function dd(t) {
  return t.dynamicChildren = pr > 0 ? Ie || bi : null, wy(), pr > 0 && Ie && Ie.push(t), t;
}
function et(t, e, n, i, r, s) {
  return dd(
    st(
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
function Si(t, e, n, i, r) {
  return dd(
    gt(
      t,
      e,
      n,
      i,
      r,
      !0
    )
  );
}
function xa(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function zi(t, e) {
  return t.type === e.type && t.key === e.key;
}
const wo = "__vInternal", pd = ({ key: t }) => t ?? null, _s = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? Bt(t) || re(t) || ot(t) ? { i: ie, r: t, k: e, f: !!n } : t : null);
function st(t, e = null, n = null, i = 0, r = null, s = t === $t ? 0 : 1, o = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && pd(e),
    ref: e && _s(e),
    scopeId: vo,
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
    ctx: ie
  };
  return a ? (Ll(l, n), s & 128 && t.normalize(l)) : n && (l.shapeFlag |= Bt(n) ? 8 : 16), pr > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Ie && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Ie.push(l), l;
}
const gt = xy;
function xy(t, e = null, n = null, i = 0, r = null, s = !1) {
  if ((!t || t === Zh) && (t = Zn), xa(t)) {
    const a = Ai(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && Ll(a, n), pr > 0 && !s && Ie && (a.shapeFlag & 6 ? Ie[Ie.indexOf(t)] = a : Ie.push(a)), a.patchFlag |= -2, a;
  }
  if (My(t) && (t = t.__vccOpts), e) {
    e = Sy(e);
    let { class: a, style: l } = e;
    a && !Bt(a) && (e.class = an(a)), St(l) && (Hh(l) && !tt(l) && (l = Gt({}, l)), e.style = zt(l));
  }
  const o = Bt(t) ? 1 : Um(t) ? 128 : _y(t) ? 64 : St(t) ? 4 : ot(t) ? 2 : 0;
  return st(
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
function Sy(t) {
  return t ? Hh(t) || wo in t ? Gt({}, t) : t : null;
}
function Ai(t, e, n = !1) {
  const { props: i, ref: r, patchFlag: s, children: o } = t, a = e ? Ey(i || {}, e) : i;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: a,
    key: a && pd(a),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? tt(r) ? r.concat(_s(e)) : [r, _s(e)] : _s(e)
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
    patchFlag: e && t.type !== $t ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: t.ssContent && Ai(t.ssContent),
    ssFallback: t.ssFallback && Ai(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
}
function Hn(t = " ", e = 0) {
  return gt(Or, null, t, e);
}
function ky(t, e) {
  const n = gt(vs, null, t);
  return n.staticCount = e, n;
}
function pt(t = "", e = !1) {
  return e ? (Q(), Si(Zn, null, t)) : gt(Zn, null, t);
}
function He(t) {
  return t == null || typeof t == "boolean" ? gt(Zn) : tt(t) ? gt(
    $t,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : typeof t == "object" ? wn(t) : gt(Or, null, String(t));
}
function wn(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Ai(t);
}
function Ll(t, e) {
  let n = 0;
  const { shapeFlag: i } = t;
  if (e == null)
    e = null;
  else if (tt(e))
    n = 16;
  else if (typeof e == "object")
    if (i & 65) {
      const r = e.default;
      r && (r._c && (r._d = !1), Ll(t, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = e._;
      !r && !(wo in e) ? e._ctx = ie : r === 3 && ie && (ie.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else
    ot(e) ? (e = { default: e, _ctx: ie }, n = 32) : (e = String(e), i & 64 ? (n = 16, e = [Hn(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function Ey(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    for (const r in i)
      if (r === "class")
        e.class !== i.class && (e.class = an([e.class, i.class]));
      else if (r === "style")
        e.style = zt([e.style, i.style]);
      else if (fo(r)) {
        const s = e[r], o = i[r];
        o && s !== o && !(tt(s) && s.includes(o)) && (e[r] = s ? [].concat(s, o) : o);
      } else
        r !== "" && (e[r] = i[r]);
  }
  return e;
}
function Be(t, e, n, i = null) {
  Me(t, e, 7, [
    n,
    i
  ]);
}
const Ty = sd();
let Ay = 0;
function Cy(t, e, n) {
  const i = t.type, r = (e ? e.appContext : t.appContext) || Ty, s = {
    uid: Ay++,
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
    scope: new Oh(
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
    propsOptions: ad(i, r),
    emitsOptions: Qh(i, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Et,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: Et,
    data: Et,
    props: Et,
    attrs: Et,
    slots: Et,
    refs: Et,
    setupState: Et,
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
  return s.ctx = { _: s }, s.root = e ? e.root : s, s.emit = Nm.bind(null, s), t.ce && t.ce(s), s;
}
let Wt = null;
const xo = () => Wt || ie;
let Fs, Sa;
{
  const t = Th(), e = (n, i) => {
    let r;
    return (r = t[n]) || (r = t[n] = []), r.push(i), (s) => {
      r.length > 1 ? r.forEach((o) => o(s)) : r[0](s);
    };
  };
  Fs = e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Wt = n
  ), Sa = e(
    "__VUE_SSR_SETTERS__",
    (n) => Nr = n
  );
}
const Pr = (t) => {
  const e = Wt;
  return Fs(t), t.scope.on(), () => {
    t.scope.off(), Fs(e);
  };
}, Jc = () => {
  Wt && Wt.scope.off(), Fs(null);
};
function gd(t) {
  return t.vnode.shapeFlag & 4;
}
let Nr = !1;
function Oy(t, e = !1) {
  e && Sa(e);
  const { props: n, children: i } = t.vnode, r = gd(t);
  fy(t, n, r, e), py(t, i);
  const s = r ? Py(t, e) : void 0;
  return e && Sa(!1), s;
}
function Py(t, e) {
  const n = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = Sl(new Proxy(t.ctx, ny));
  const { setup: i } = n;
  if (i) {
    const r = t.setupContext = i.length > 1 ? Iy(t) : null, s = Pr(t);
    ri();
    const o = En(
      i,
      t,
      0,
      [
        t.props,
        r
      ]
    );
    if (si(), s(), Sh(o)) {
      if (o.then(Jc, Jc), e)
        return o.then((a) => {
          Qc(t, a, e);
        }).catch((a) => {
          Cr(a, t, 0);
        });
      t.asyncDep = o;
    } else
      Qc(t, o, e);
  } else
    md(t, e);
}
function Qc(t, e, n) {
  ot(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : St(e) && (t.setupState = Gh(e)), md(t, n);
}
let Zc;
function md(t, e, n) {
  const i = t.type;
  if (!t.render) {
    if (!e && Zc && !i.render) {
      const r = i.template || Nl(t).template;
      if (r) {
        const { isCustomElement: s, compilerOptions: o } = t.appContext.config, { delimiters: a, compilerOptions: l } = i, c = Gt(
          Gt(
            {
              isCustomElement: s,
              delimiters: a
            },
            o
          ),
          l
        );
        i.render = Zc(r, c);
      }
    }
    t.render = i.render || Te;
  }
  {
    const r = Pr(t);
    ri();
    try {
      iy(t);
    } finally {
      si(), r();
    }
  }
}
function Ny(t) {
  return t.attrsProxy || (t.attrsProxy = new Proxy(
    t.attrs,
    {
      get(e, n) {
        return ue(t, "get", "$attrs"), e[n];
      }
    }
  ));
}
function Iy(t) {
  const e = (n) => {
    t.exposed = n || {};
  };
  return {
    get attrs() {
      return Ny(t);
    },
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function So(t) {
  if (t.exposed)
    return t.exposeProxy || (t.exposeProxy = new Proxy(Gh(Sl(t.exposed)), {
      get(e, n) {
        if (n in e)
          return e[n];
        if (n in ir)
          return ir[n](t);
      },
      has(e, n) {
        return n in e || n in ir;
      }
    }));
}
function Ly(t, e = !0) {
  return ot(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function My(t) {
  return ot(t) && "__vccOpts" in t;
}
const xe = (t, e) => Sm(t, e, Nr);
function Ml(t, e, n) {
  const i = arguments.length;
  return i === 2 ? St(e) && !tt(e) ? xa(e) ? gt(t, null, [e]) : gt(t, e) : gt(t, null, e) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && xa(n) && (n = [n]), gt(t, e, n));
}
const Ry = "3.4.21";
/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Dy = "http://www.w3.org/2000/svg", $y = "http://www.w3.org/1998/Math/MathML", xn = typeof document < "u" ? document : null, tu = xn && /* @__PURE__ */ xn.createElement("template"), Fy = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, i) => {
    const r = e === "svg" ? xn.createElementNS(Dy, t) : e === "mathml" ? xn.createElementNS($y, t) : xn.createElement(t, n ? { is: n } : void 0);
    return t === "select" && i && i.multiple != null && r.setAttribute("multiple", i.multiple), r;
  },
  createText: (t) => xn.createTextNode(t),
  createComment: (t) => xn.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => xn.querySelector(t),
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
      tu.innerHTML = i === "svg" ? `<svg>${t}</svg>` : i === "mathml" ? `<math>${t}</math>` : t;
      const a = tu.content;
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
}, By = Symbol("_vtc");
function Uy(t, e, n) {
  const i = t[By];
  i && (e = (e ? [e, ...i] : [...i]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
const Bs = Symbol("_vod"), yd = Symbol("_vsh"), bd = {
  beforeMount(t, { value: e }, { transition: n }) {
    t[Bs] = t.style.display === "none" ? "" : t.style.display, n && e ? n.beforeEnter(t) : Gi(t, e);
  },
  mounted(t, { value: e }, { transition: n }) {
    n && e && n.enter(t);
  },
  updated(t, { value: e, oldValue: n }, { transition: i }) {
    !e != !n && (i ? e ? (i.beforeEnter(t), Gi(t, !0), i.enter(t)) : i.leave(t, () => {
      Gi(t, !1);
    }) : Gi(t, e));
  },
  beforeUnmount(t, { value: e }) {
    Gi(t, e);
  }
};
function Gi(t, e) {
  t.style.display = e ? t[Bs] : "none", t[yd] = !e;
}
const qy = Symbol(""), Hy = /(^|;)\s*display\s*:/;
function Wy(t, e, n) {
  const i = t.style, r = Bt(n);
  let s = !1;
  if (n && !r) {
    if (e)
      if (Bt(e))
        for (const o of e.split(";")) {
          const a = o.slice(0, o.indexOf(":")).trim();
          n[a] == null && ws(i, a, "");
        }
      else
        for (const o in e)
          n[o] == null && ws(i, o, "");
    for (const o in n)
      o === "display" && (s = !0), ws(i, o, n[o]);
  } else if (r) {
    if (e !== n) {
      const o = i[qy];
      o && (n += ";" + o), i.cssText = n, s = Hy.test(n);
    }
  } else
    e && t.removeAttribute("style");
  Bs in t && (t[Bs] = s ? i.display : "", t[yd] && (i.display = "none"));
}
const eu = /\s*!important$/;
function ws(t, e, n) {
  if (tt(n))
    n.forEach((i) => ws(t, e, i));
  else if (n == null && (n = ""), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const i = Vy(t, e);
    eu.test(n) ? t.setProperty(
      Fi(i),
      n.replace(eu, ""),
      "important"
    ) : t[i] = n;
  }
}
const nu = ["Webkit", "Moz", "ms"], Yo = {};
function Vy(t, e) {
  const n = Yo[e];
  if (n)
    return n;
  let i = Ke(e);
  if (i !== "filter" && i in t)
    return Yo[e] = i;
  i = po(i);
  for (let r = 0; r < nu.length; r++) {
    const s = nu[r] + i;
    if (s in t)
      return Yo[e] = s;
  }
  return e;
}
const iu = "http://www.w3.org/1999/xlink";
function jy(t, e, n, i, r) {
  if (i && e.startsWith("xlink:"))
    n == null ? t.removeAttributeNS(iu, e.slice(6, e.length)) : t.setAttributeNS(iu, e, n);
  else {
    const s = Qg(e);
    n == null || s && !Ah(n) ? t.removeAttribute(e) : t.setAttribute(e, s ? "" : n);
  }
}
function zy(t, e, n, i, r, s, o) {
  if (e === "innerHTML" || e === "textContent") {
    i && o(i, r, s), t[e] = n ?? "";
    return;
  }
  const a = t.tagName;
  if (e === "value" && a !== "PROGRESS" && // custom elements may use _value internally
  !a.includes("-")) {
    const c = a === "OPTION" ? t.getAttribute("value") || "" : t.value, u = n ?? "";
    (c !== u || !("_value" in t)) && (t.value = u), n == null && t.removeAttribute(e), t._value = n;
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const c = typeof t[e];
    c === "boolean" ? n = Ah(n) : n == null && c === "string" ? (n = "", l = !0) : c === "number" && (n = 0, l = !0);
  }
  try {
    t[e] = n;
  } catch {
  }
  l && t.removeAttribute(e);
}
function en(t, e, n, i) {
  t.addEventListener(e, n, i);
}
function Gy(t, e, n, i) {
  t.removeEventListener(e, n, i);
}
const ru = Symbol("_vei");
function Yy(t, e, n, i, r = null) {
  const s = t[ru] || (t[ru] = {}), o = s[e];
  if (i && o)
    o.value = i;
  else {
    const [a, l] = Ky(e);
    if (i) {
      const c = s[e] = Qy(i, r);
      en(t, a, c, l);
    } else
      o && (Gy(t, a, o, l), s[e] = void 0);
  }
}
const su = /(?:Once|Passive|Capture)$/;
function Ky(t) {
  let e;
  if (su.test(t)) {
    e = {};
    let i;
    for (; i = t.match(su); )
      t = t.slice(0, t.length - i[0].length), e[i[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : Fi(t.slice(2)), e];
}
let Ko = 0;
const Xy = /* @__PURE__ */ Promise.resolve(), Jy = () => Ko || (Xy.then(() => Ko = 0), Ko = Date.now());
function Qy(t, e) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    Me(
      Zy(i, n.value),
      e,
      5,
      [i]
    );
  };
  return n.value = t, n.attached = Jy(), n;
}
function Zy(t, e) {
  if (tt(e)) {
    const n = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      n.call(t), t._stopped = !0;
    }, e.map((i) => (r) => !r._stopped && i && i(r));
  } else
    return e;
}
const ou = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, tb = (t, e, n, i, r, s, o, a, l) => {
  const c = r === "svg";
  e === "class" ? Uy(t, i, c) : e === "style" ? Wy(t, n, i) : fo(e) ? fl(e) || Yy(t, e, n, i, o) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : eb(t, e, i, c)) ? zy(
    t,
    e,
    i,
    s,
    o,
    a,
    l
  ) : (e === "true-value" ? t._trueValue = i : e === "false-value" && (t._falseValue = i), jy(t, e, i, c));
};
function eb(t, e, n, i) {
  if (i)
    return !!(e === "innerHTML" || e === "textContent" || e in t && ou(e) && ot(n));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const r = t.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return ou(e) && Bt(n) ? !1 : e in t;
}
const Cn = (t) => {
  const e = t.props["onUpdate:modelValue"] || !1;
  return tt(e) ? (n) => ms(e, n) : e;
};
function nb(t) {
  t.target.composing = !0;
}
function au(t) {
  const e = t.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
const Ae = Symbol("_assign"), Us = {
  created(t, { modifiers: { lazy: e, trim: n, number: i } }, r) {
    t[Ae] = Cn(r);
    const s = i || r.props && r.props.type === "number";
    en(t, e ? "change" : "input", (o) => {
      if (o.target.composing)
        return;
      let a = t.value;
      n && (a = a.trim()), s && (a = ur(a)), t[Ae](a);
    }), n && en(t, "change", () => {
      t.value = t.value.trim();
    }), e || (en(t, "compositionstart", nb), en(t, "compositionend", au), en(t, "change", au));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(t, { value: e }) {
    t.value = e ?? "";
  },
  beforeUpdate(t, { value: e, modifiers: { lazy: n, trim: i, number: r } }, s) {
    if (t[Ae] = Cn(s), t.composing)
      return;
    const o = r || t.type === "number" ? ur(t.value) : t.value, a = e ?? "";
    o !== a && (document.activeElement === t && t.type !== "range" && (n || i && t.value.trim() === a) || (t.value = a));
  }
}, ib = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(t, e, n) {
    t[Ae] = Cn(n), en(t, "change", () => {
      const i = t._modelValue, r = Ci(t), s = t.checked, o = t[Ae];
      if (tt(i)) {
        const a = pl(i, r), l = a !== -1;
        if (s && !l)
          o(i.concat(r));
        else if (!s && l) {
          const c = [...i];
          c.splice(a, 1), o(c);
        }
      } else if ($i(i)) {
        const a = new Set(i);
        s ? a.add(r) : a.delete(r), o(a);
      } else
        o(vd(t, s));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: lu,
  beforeUpdate(t, e, n) {
    t[Ae] = Cn(n), lu(t, e, n);
  }
};
function lu(t, { value: e, oldValue: n }, i) {
  t._modelValue = e, tt(e) ? t.checked = pl(e, i.props.value) > -1 : $i(e) ? t.checked = e.has(i.props.value) : e !== n && (t.checked = Qn(e, vd(t, !0)));
}
const rb = {
  created(t, { value: e }, n) {
    t.checked = Qn(e, n.props.value), t[Ae] = Cn(n), en(t, "change", () => {
      t[Ae](Ci(t));
    });
  },
  beforeUpdate(t, { value: e, oldValue: n }, i) {
    t[Ae] = Cn(i), e !== n && (t.checked = Qn(e, i.props.value));
  }
}, xs = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(t, { value: e, modifiers: { number: n } }, i) {
    const r = $i(e);
    en(t, "change", () => {
      const s = Array.prototype.filter.call(t.options, (o) => o.selected).map(
        (o) => n ? ur(Ci(o)) : Ci(o)
      );
      t[Ae](
        t.multiple ? r ? new Set(s) : s : s[0]
      ), t._assigning = !0, mo(() => {
        t._assigning = !1;
      });
    }), t[Ae] = Cn(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(t, { value: e, modifiers: { number: n } }) {
    cu(t, e, n);
  },
  beforeUpdate(t, e, n) {
    t[Ae] = Cn(n);
  },
  updated(t, { value: e, modifiers: { number: n } }) {
    t._assigning || cu(t, e, n);
  }
};
function cu(t, e, n) {
  const i = t.multiple, r = tt(e);
  if (!(i && !r && !$i(e))) {
    for (let s = 0, o = t.options.length; s < o; s++) {
      const a = t.options[s], l = Ci(a);
      if (i)
        if (r) {
          const c = typeof l;
          c === "string" || c === "number" ? a.selected = e.includes(
            n ? ur(l) : l
          ) : a.selected = pl(e, l) > -1;
        } else
          a.selected = e.has(l);
      else if (Qn(Ci(a), e)) {
        t.selectedIndex !== s && (t.selectedIndex = s);
        return;
      }
    }
    !i && t.selectedIndex !== -1 && (t.selectedIndex = -1);
  }
}
function Ci(t) {
  return "_value" in t ? t._value : t.value;
}
function vd(t, e) {
  const n = e ? "_trueValue" : "_falseValue";
  return n in t ? t[n] : e;
}
const uu = {
  created(t, e, n) {
    zr(t, e, n, null, "created");
  },
  mounted(t, e, n) {
    zr(t, e, n, null, "mounted");
  },
  beforeUpdate(t, e, n, i) {
    zr(t, e, n, i, "beforeUpdate");
  },
  updated(t, e, n, i) {
    zr(t, e, n, i, "updated");
  }
};
function sb(t, e) {
  switch (t) {
    case "SELECT":
      return xs;
    case "TEXTAREA":
      return Us;
    default:
      switch (e) {
        case "checkbox":
          return ib;
        case "radio":
          return rb;
        default:
          return Us;
      }
  }
}
function zr(t, e, n, i, r) {
  const o = sb(
    t.tagName,
    n.props && n.props.type
  )[r];
  o && o(t, e, n, i);
}
const ob = ["ctrl", "shift", "alt", "meta"], ab = {
  stop: (t) => t.stopPropagation(),
  prevent: (t) => t.preventDefault(),
  self: (t) => t.target !== t.currentTarget,
  ctrl: (t) => !t.ctrlKey,
  shift: (t) => !t.shiftKey,
  alt: (t) => !t.altKey,
  meta: (t) => !t.metaKey,
  left: (t) => "button" in t && t.button !== 0,
  middle: (t) => "button" in t && t.button !== 1,
  right: (t) => "button" in t && t.button !== 2,
  exact: (t, e) => ob.some((n) => t[`${n}Key`] && !e.includes(n))
}, mP = (t, e) => {
  const n = t._withMods || (t._withMods = {}), i = e.join(".");
  return n[i] || (n[i] = (r, ...s) => {
    for (let o = 0; o < e.length; o++) {
      const a = ab[e[o]];
      if (a && a(r, e))
        return;
    }
    return t(r, ...s);
  });
}, lb = /* @__PURE__ */ Gt({ patchProp: tb }, Fy);
let fu;
function cb() {
  return fu || (fu = my(lb));
}
const ub = (...t) => {
  const e = cb().createApp(...t), { mount: n } = e;
  return e.mount = (i) => {
    const r = hb(i);
    if (!r)
      return;
    const s = e._component;
    !ot(s) && !s.render && !s.template && (s.template = r.innerHTML), r.innerHTML = "";
    const o = n(r, !1, fb(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, e;
};
function fb(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function hb(t) {
  return Bt(t) ? document.querySelector(t) : t;
}
/*!
 * shared v9.10.2
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
const qs = typeof window < "u", Mn = (t, e = !1) => e ? Symbol.for(t) : Symbol(t), db = (t, e, n) => pb({ l: t, k: e, s: n }), pb = (t) => JSON.stringify(t).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Vt = (t) => typeof t == "number" && isFinite(t), gb = (t) => wd(t) === "[object Date]", Hs = (t) => wd(t) === "[object RegExp]", ko = (t) => ft(t) && Object.keys(t).length === 0, Qt = Object.assign;
let hu;
const Rl = () => hu || (hu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function du(t) {
  return t.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const mb = Object.prototype.hasOwnProperty;
function Ws(t, e) {
  return mb.call(t, e);
}
const Ut = Array.isArray, It = (t) => typeof t == "function", K = (t) => typeof t == "string", Pt = (t) => typeof t == "boolean", bt = (t) => t !== null && typeof t == "object", yb = (t) => bt(t) && It(t.then) && It(t.catch), _d = Object.prototype.toString, wd = (t) => _d.call(t), ft = (t) => {
  if (!bt(t))
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e.constructor === Object;
}, bb = (t) => t == null ? "" : Ut(t) || ft(t) && t.toString === _d ? JSON.stringify(t, null, 2) : String(t);
function vb(t, e = "") {
  return t.reduce((n, i, r) => r === 0 ? n + i : n + e + i, "");
}
function Dl(t) {
  let e = t;
  return () => ++e;
}
function _b(t, e) {
  typeof console < "u" && (console.warn("[intlify] " + t), e && console.warn(e.stack));
}
const Gr = (t) => !bt(t) || Ut(t);
function Ss(t, e) {
  if (Gr(t) || Gr(e))
    throw new Error("Invalid value");
  const n = [{ src: t, des: e }];
  for (; n.length; ) {
    const { src: i, des: r } = n.pop();
    Object.keys(i).forEach((s) => {
      Gr(i[s]) || Gr(r[s]) ? r[s] = i[s] : n.push({ src: i[s], des: r[s] });
    });
  }
}
/*!
 * message-compiler v9.10.2
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
function wb(t, e, n) {
  return { line: t, column: e, offset: n };
}
function ka(t, e, n) {
  const i = { start: t, end: e };
  return n != null && (i.source = n), i;
}
const xb = /\{([0-9a-zA-Z]+)\}/g;
function Sb(t, ...e) {
  return e.length === 1 && kb(e[0]) && (e = e[0]), (!e || !e.hasOwnProperty) && (e = {}), t.replace(xb, (n, i) => e.hasOwnProperty(i) ? e[i] : "");
}
const xd = Object.assign, pu = (t) => typeof t == "string", kb = (t) => t !== null && typeof t == "object";
function Sd(t, e = "") {
  return t.reduce((n, i, r) => r === 0 ? n + i : n + e + i, "");
}
const nt = {
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
}, Eb = {
  // tokenizer error messages
  [nt.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [nt.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [nt.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [nt.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [nt.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [nt.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [nt.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [nt.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [nt.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [nt.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [nt.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [nt.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [nt.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [nt.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [nt.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [nt.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function Bi(t, e, n = {}) {
  const { domain: i, messages: r, args: s } = n, o = Sb((r || Eb)[t] || "", ...s || []), a = new SyntaxError(String(o));
  return a.code = t, e && (a.location = e), a.domain = i, a;
}
function Tb(t) {
  throw t;
}
const Je = " ", Ab = "\r", ee = `
`, Cb = "\u2028", Ob = "\u2029";
function Pb(t) {
  const e = t;
  let n = 0, i = 1, r = 1, s = 0;
  const o = (L) => e[L] === Ab && e[L + 1] === ee, a = (L) => e[L] === ee, l = (L) => e[L] === Ob, c = (L) => e[L] === Cb, u = (L) => o(L) || a(L) || l(L) || c(L), f = () => n, h = () => i, p = () => r, y = () => s, S = (L) => o(L) || l(L) || c(L) ? ee : e[L], k = () => S(n), m = () => S(n + s);
  function b() {
    return s = 0, u(n) && (i++, r = 0), o(n) && n++, n++, r++, e[n];
  }
  function x() {
    return o(n + s) && s++, s++, e[n + s];
  }
  function _() {
    n = 0, i = 1, r = 1, s = 0;
  }
  function E(L = 0) {
    s = L;
  }
  function P() {
    const L = n + s;
    for (; L !== n; )
      b();
    s = 0;
  }
  return {
    index: f,
    line: h,
    column: p,
    peekOffset: y,
    charAt: S,
    currentChar: k,
    currentPeek: m,
    next: b,
    peek: x,
    reset: _,
    resetPeek: E,
    skipToPeek: P
  };
}
const gn = void 0, Nb = ".", gu = "'", Ib = "tokenizer";
function Lb(t, e = {}) {
  const n = e.location !== !1, i = Pb(t), r = () => i.index(), s = () => wb(i.line(), i.column(), i.index()), o = s(), a = r(), l = {
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
  }, c = () => l, { onError: u } = e;
  function f(d, g, w, ...T) {
    const O = c();
    if (g.column += w, g.offset += w, u) {
      const I = n ? ka(O.startLoc, g) : null, B = Bi(d, I, {
        domain: Ib,
        args: T
      });
      u(B);
    }
  }
  function h(d, g, w) {
    d.endLoc = s(), d.currentType = g;
    const T = { type: g };
    return n && (T.loc = ka(d.startLoc, d.endLoc)), w != null && (T.value = w), T;
  }
  const p = (d) => h(
    d,
    14
    /* TokenTypes.EOF */
  );
  function y(d, g) {
    return d.currentChar() === g ? (d.next(), g) : (f(nt.EXPECTED_TOKEN, s(), 0, g), "");
  }
  function S(d) {
    let g = "";
    for (; d.currentPeek() === Je || d.currentPeek() === ee; )
      g += d.currentPeek(), d.peek();
    return g;
  }
  function k(d) {
    const g = S(d);
    return d.skipToPeek(), g;
  }
  function m(d) {
    if (d === gn)
      return !1;
    const g = d.charCodeAt(0);
    return g >= 97 && g <= 122 || // a-z
    g >= 65 && g <= 90 || // A-Z
    g === 95;
  }
  function b(d) {
    if (d === gn)
      return !1;
    const g = d.charCodeAt(0);
    return g >= 48 && g <= 57;
  }
  function x(d, g) {
    const { currentType: w } = g;
    if (w !== 2)
      return !1;
    S(d);
    const T = m(d.currentPeek());
    return d.resetPeek(), T;
  }
  function _(d, g) {
    const { currentType: w } = g;
    if (w !== 2)
      return !1;
    S(d);
    const T = d.currentPeek() === "-" ? d.peek() : d.currentPeek(), O = b(T);
    return d.resetPeek(), O;
  }
  function E(d, g) {
    const { currentType: w } = g;
    if (w !== 2)
      return !1;
    S(d);
    const T = d.currentPeek() === gu;
    return d.resetPeek(), T;
  }
  function P(d, g) {
    const { currentType: w } = g;
    if (w !== 8)
      return !1;
    S(d);
    const T = d.currentPeek() === ".";
    return d.resetPeek(), T;
  }
  function L(d, g) {
    const { currentType: w } = g;
    if (w !== 9)
      return !1;
    S(d);
    const T = m(d.currentPeek());
    return d.resetPeek(), T;
  }
  function W(d, g) {
    const { currentType: w } = g;
    if (!(w === 8 || w === 12))
      return !1;
    S(d);
    const T = d.currentPeek() === ":";
    return d.resetPeek(), T;
  }
  function M(d, g) {
    const { currentType: w } = g;
    if (w !== 10)
      return !1;
    const T = () => {
      const I = d.currentPeek();
      return I === "{" ? m(d.peek()) : I === "@" || I === "%" || I === "|" || I === ":" || I === "." || I === Je || !I ? !1 : I === ee ? (d.peek(), T()) : m(I);
    }, O = T();
    return d.resetPeek(), O;
  }
  function H(d) {
    S(d);
    const g = d.currentPeek() === "|";
    return d.resetPeek(), g;
  }
  function F(d) {
    const g = S(d), w = d.currentPeek() === "%" && d.peek() === "{";
    return d.resetPeek(), {
      isModulo: w,
      hasSpace: g.length > 0
    };
  }
  function G(d, g = !0) {
    const w = (O = !1, I = "", B = !1) => {
      const D = d.currentPeek();
      return D === "{" ? I === "%" ? !1 : O : D === "@" || !D ? I === "%" ? !0 : O : D === "%" ? (d.peek(), w(O, "%", !0)) : D === "|" ? I === "%" || B ? !0 : !(I === Je || I === ee) : D === Je ? (d.peek(), w(!0, Je, B)) : D === ee ? (d.peek(), w(!0, ee, B)) : !0;
    }, T = w();
    return g && d.resetPeek(), T;
  }
  function q(d, g) {
    const w = d.currentChar();
    return w === gn ? gn : g(w) ? (d.next(), w) : null;
  }
  function it(d) {
    return q(d, (w) => {
      const T = w.charCodeAt(0);
      return T >= 97 && T <= 122 || // a-z
      T >= 65 && T <= 90 || // A-Z
      T >= 48 && T <= 57 || // 0-9
      T === 95 || // _
      T === 36;
    });
  }
  function Rt(d) {
    return q(d, (w) => {
      const T = w.charCodeAt(0);
      return T >= 48 && T <= 57;
    });
  }
  function dt(d) {
    return q(d, (w) => {
      const T = w.charCodeAt(0);
      return T >= 48 && T <= 57 || // 0-9
      T >= 65 && T <= 70 || // A-F
      T >= 97 && T <= 102;
    });
  }
  function lt(d) {
    let g = "", w = "";
    for (; g = Rt(d); )
      w += g;
    return w;
  }
  function at(d) {
    k(d);
    const g = d.currentChar();
    return g !== "%" && f(nt.EXPECTED_TOKEN, s(), 0, g), d.next(), "%";
  }
  function vt(d) {
    let g = "";
    for (; ; ) {
      const w = d.currentChar();
      if (w === "{" || w === "}" || w === "@" || w === "|" || !w)
        break;
      if (w === "%")
        if (G(d))
          g += w, d.next();
        else
          break;
      else if (w === Je || w === ee)
        if (G(d))
          g += w, d.next();
        else {
          if (H(d))
            break;
          g += w, d.next();
        }
      else
        g += w, d.next();
    }
    return g;
  }
  function he(d) {
    k(d);
    let g = "", w = "";
    for (; g = it(d); )
      w += g;
    return d.currentChar() === gn && f(nt.UNTERMINATED_CLOSING_BRACE, s(), 0), w;
  }
  function Nt(d) {
    k(d);
    let g = "";
    return d.currentChar() === "-" ? (d.next(), g += `-${lt(d)}`) : g += lt(d), d.currentChar() === gn && f(nt.UNTERMINATED_CLOSING_BRACE, s(), 0), g;
  }
  function Dt(d) {
    k(d), y(d, "'");
    let g = "", w = "";
    const T = (I) => I !== gu && I !== ee;
    for (; g = q(d, T); )
      g === "\\" ? w += De(d) : w += g;
    const O = d.currentChar();
    return O === ee || O === gn ? (f(nt.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), O === ee && (d.next(), y(d, "'")), w) : (y(d, "'"), w);
  }
  function De(d) {
    const g = d.currentChar();
    switch (g) {
      case "\\":
      case "'":
        return d.next(), `\\${g}`;
      case "u":
        return $e(d, g, 4);
      case "U":
        return $e(d, g, 6);
      default:
        return f(nt.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, g), "";
    }
  }
  function $e(d, g, w) {
    y(d, g);
    let T = "";
    for (let O = 0; O < w; O++) {
      const I = dt(d);
      if (!I) {
        f(nt.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${g}${T}${d.currentChar()}`);
        break;
      }
      T += I;
    }
    return `\\${g}${T}`;
  }
  function Zt(d) {
    k(d);
    let g = "", w = "";
    const T = (O) => O !== "{" && O !== "}" && O !== Je && O !== ee;
    for (; g = q(d, T); )
      w += g;
    return w;
  }
  function jt(d) {
    let g = "", w = "";
    for (; g = it(d); )
      w += g;
    return w;
  }
  function Oe(d) {
    const g = (w = !1, T) => {
      const O = d.currentChar();
      return O === "{" || O === "%" || O === "@" || O === "|" || O === "(" || O === ")" || !O || O === Je ? T : O === ee || O === Nb ? (T += O, d.next(), g(w, T)) : (T += O, d.next(), g(!0, T));
    };
    return g(!1, "");
  }
  function de(d) {
    k(d);
    const g = y(
      d,
      "|"
      /* TokenChars.Pipe */
    );
    return k(d), g;
  }
  function ve(d, g) {
    let w = null;
    switch (d.currentChar()) {
      case "{":
        return g.braceNest >= 1 && f(nt.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), d.next(), w = h(
          g,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), k(d), g.braceNest++, w;
      case "}":
        return g.braceNest > 0 && g.currentType === 2 && f(nt.EMPTY_PLACEHOLDER, s(), 0), d.next(), w = h(
          g,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), g.braceNest--, g.braceNest > 0 && k(d), g.inLinked && g.braceNest === 0 && (g.inLinked = !1), w;
      case "@":
        return g.braceNest > 0 && f(nt.UNTERMINATED_CLOSING_BRACE, s(), 0), w = Yt(d, g) || p(g), g.braceNest = 0, w;
      default: {
        let O = !0, I = !0, B = !0;
        if (H(d))
          return g.braceNest > 0 && f(nt.UNTERMINATED_CLOSING_BRACE, s(), 0), w = h(g, 1, de(d)), g.braceNest = 0, g.inLinked = !1, w;
        if (g.braceNest > 0 && (g.currentType === 5 || g.currentType === 6 || g.currentType === 7))
          return f(nt.UNTERMINATED_CLOSING_BRACE, s(), 0), g.braceNest = 0, _e(d, g);
        if (O = x(d, g))
          return w = h(g, 5, he(d)), k(d), w;
        if (I = _(d, g))
          return w = h(g, 6, Nt(d)), k(d), w;
        if (B = E(d, g))
          return w = h(g, 7, Dt(d)), k(d), w;
        if (!O && !I && !B)
          return w = h(g, 13, Zt(d)), f(nt.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, w.value), k(d), w;
        break;
      }
    }
    return w;
  }
  function Yt(d, g) {
    const { currentType: w } = g;
    let T = null;
    const O = d.currentChar();
    switch ((w === 8 || w === 9 || w === 12 || w === 10) && (O === ee || O === Je) && f(nt.INVALID_LINKED_FORMAT, s(), 0), O) {
      case "@":
        return d.next(), T = h(
          g,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), g.inLinked = !0, T;
      case ".":
        return k(d), d.next(), h(
          g,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return k(d), d.next(), h(
          g,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return H(d) ? (T = h(g, 1, de(d)), g.braceNest = 0, g.inLinked = !1, T) : P(d, g) || W(d, g) ? (k(d), Yt(d, g)) : L(d, g) ? (k(d), h(g, 12, jt(d))) : M(d, g) ? (k(d), O === "{" ? ve(d, g) || T : h(g, 11, Oe(d))) : (w === 8 && f(nt.INVALID_LINKED_FORMAT, s(), 0), g.braceNest = 0, g.inLinked = !1, _e(d, g));
    }
  }
  function _e(d, g) {
    let w = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (g.braceNest > 0)
      return ve(d, g) || p(g);
    if (g.inLinked)
      return Yt(d, g) || p(g);
    switch (d.currentChar()) {
      case "{":
        return ve(d, g) || p(g);
      case "}":
        return f(nt.UNBALANCED_CLOSING_BRACE, s(), 0), d.next(), h(
          g,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Yt(d, g) || p(g);
      default: {
        if (H(d))
          return w = h(g, 1, de(d)), g.braceNest = 0, g.inLinked = !1, w;
        const { isModulo: O, hasSpace: I } = F(d);
        if (O)
          return I ? h(g, 0, vt(d)) : h(g, 4, at(d));
        if (G(d))
          return h(g, 0, vt(d));
        break;
      }
    }
    return w;
  }
  function $n() {
    const { currentType: d, offset: g, startLoc: w, endLoc: T } = l;
    return l.lastType = d, l.lastOffset = g, l.lastStartLoc = w, l.lastEndLoc = T, l.offset = r(), l.startLoc = s(), i.currentChar() === gn ? h(
      l,
      14
      /* TokenTypes.EOF */
    ) : _e(i, l);
  }
  return {
    nextToken: $n,
    currentOffset: r,
    currentPosition: s,
    context: c
  };
}
const Mb = "parser", Rb = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Db(t, e, n) {
  switch (t) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const i = parseInt(e || n, 16);
      return i <= 55295 || i >= 57344 ? String.fromCodePoint(i) : "�";
    }
  }
}
function $b(t = {}) {
  const e = t.location !== !1, { onError: n } = t;
  function i(m, b, x, _, ...E) {
    const P = m.currentPosition();
    if (P.offset += _, P.column += _, n) {
      const L = e ? ka(x, P) : null, W = Bi(b, L, {
        domain: Mb,
        args: E
      });
      n(W);
    }
  }
  function r(m, b, x) {
    const _ = { type: m };
    return e && (_.start = b, _.end = b, _.loc = { start: x, end: x }), _;
  }
  function s(m, b, x, _) {
    _ && (m.type = _), e && (m.end = b, m.loc && (m.loc.end = x));
  }
  function o(m, b) {
    const x = m.context(), _ = r(3, x.offset, x.startLoc);
    return _.value = b, s(_, m.currentOffset(), m.currentPosition()), _;
  }
  function a(m, b) {
    const x = m.context(), { lastOffset: _, lastStartLoc: E } = x, P = r(5, _, E);
    return P.index = parseInt(b, 10), m.nextToken(), s(P, m.currentOffset(), m.currentPosition()), P;
  }
  function l(m, b) {
    const x = m.context(), { lastOffset: _, lastStartLoc: E } = x, P = r(4, _, E);
    return P.key = b, m.nextToken(), s(P, m.currentOffset(), m.currentPosition()), P;
  }
  function c(m, b) {
    const x = m.context(), { lastOffset: _, lastStartLoc: E } = x, P = r(9, _, E);
    return P.value = b.replace(Rb, Db), m.nextToken(), s(P, m.currentOffset(), m.currentPosition()), P;
  }
  function u(m) {
    const b = m.nextToken(), x = m.context(), { lastOffset: _, lastStartLoc: E } = x, P = r(8, _, E);
    return b.type !== 12 ? (i(m, nt.UNEXPECTED_EMPTY_LINKED_MODIFIER, x.lastStartLoc, 0), P.value = "", s(P, _, E), {
      nextConsumeToken: b,
      node: P
    }) : (b.value == null && i(m, nt.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, Ue(b)), P.value = b.value || "", s(P, m.currentOffset(), m.currentPosition()), {
      node: P
    });
  }
  function f(m, b) {
    const x = m.context(), _ = r(7, x.offset, x.startLoc);
    return _.value = b, s(_, m.currentOffset(), m.currentPosition()), _;
  }
  function h(m) {
    const b = m.context(), x = r(6, b.offset, b.startLoc);
    let _ = m.nextToken();
    if (_.type === 9) {
      const E = u(m);
      x.modifier = E.node, _ = E.nextConsumeToken || m.nextToken();
    }
    switch (_.type !== 10 && i(m, nt.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Ue(_)), _ = m.nextToken(), _.type === 2 && (_ = m.nextToken()), _.type) {
      case 11:
        _.value == null && i(m, nt.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Ue(_)), x.key = f(m, _.value || "");
        break;
      case 5:
        _.value == null && i(m, nt.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Ue(_)), x.key = l(m, _.value || "");
        break;
      case 6:
        _.value == null && i(m, nt.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Ue(_)), x.key = a(m, _.value || "");
        break;
      case 7:
        _.value == null && i(m, nt.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Ue(_)), x.key = c(m, _.value || "");
        break;
      default: {
        i(m, nt.UNEXPECTED_EMPTY_LINKED_KEY, b.lastStartLoc, 0);
        const E = m.context(), P = r(7, E.offset, E.startLoc);
        return P.value = "", s(P, E.offset, E.startLoc), x.key = P, s(x, E.offset, E.startLoc), {
          nextConsumeToken: _,
          node: x
        };
      }
    }
    return s(x, m.currentOffset(), m.currentPosition()), {
      node: x
    };
  }
  function p(m) {
    const b = m.context(), x = b.currentType === 1 ? m.currentOffset() : b.offset, _ = b.currentType === 1 ? b.endLoc : b.startLoc, E = r(2, x, _);
    E.items = [];
    let P = null;
    do {
      const M = P || m.nextToken();
      switch (P = null, M.type) {
        case 0:
          M.value == null && i(m, nt.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Ue(M)), E.items.push(o(m, M.value || ""));
          break;
        case 6:
          M.value == null && i(m, nt.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Ue(M)), E.items.push(a(m, M.value || ""));
          break;
        case 5:
          M.value == null && i(m, nt.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Ue(M)), E.items.push(l(m, M.value || ""));
          break;
        case 7:
          M.value == null && i(m, nt.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Ue(M)), E.items.push(c(m, M.value || ""));
          break;
        case 8: {
          const H = h(m);
          E.items.push(H.node), P = H.nextConsumeToken || null;
          break;
        }
      }
    } while (b.currentType !== 14 && b.currentType !== 1);
    const L = b.currentType === 1 ? b.lastOffset : m.currentOffset(), W = b.currentType === 1 ? b.lastEndLoc : m.currentPosition();
    return s(E, L, W), E;
  }
  function y(m, b, x, _) {
    const E = m.context();
    let P = _.items.length === 0;
    const L = r(1, b, x);
    L.cases = [], L.cases.push(_);
    do {
      const W = p(m);
      P || (P = W.items.length === 0), L.cases.push(W);
    } while (E.currentType !== 14);
    return P && i(m, nt.MUST_HAVE_MESSAGES_IN_PLURAL, x, 0), s(L, m.currentOffset(), m.currentPosition()), L;
  }
  function S(m) {
    const b = m.context(), { offset: x, startLoc: _ } = b, E = p(m);
    return b.currentType === 14 ? E : y(m, x, _, E);
  }
  function k(m) {
    const b = Lb(m, xd({}, t)), x = b.context(), _ = r(0, x.offset, x.startLoc);
    return e && _.loc && (_.loc.source = m), _.body = S(b), t.onCacheKey && (_.cacheKey = t.onCacheKey(m)), x.currentType !== 14 && i(b, nt.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, m[x.offset] || ""), s(_, b.currentOffset(), b.currentPosition()), _;
  }
  return { parse: k };
}
function Ue(t) {
  if (t.type === 14)
    return "EOF";
  const e = (t.value || "").replace(/\r?\n/gu, "\\n");
  return e.length > 10 ? e.slice(0, 9) + "…" : e;
}
function Fb(t, e = {}) {
  const n = {
    ast: t,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (s) => (n.helpers.add(s), s) };
}
function mu(t, e) {
  for (let n = 0; n < t.length; n++)
    $l(t[n], e);
}
function $l(t, e) {
  switch (t.type) {
    case 1:
      mu(t.cases, e), e.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      mu(t.items, e);
      break;
    case 6: {
      $l(t.key, e), e.helper(
        "linked"
        /* HelperNameMap.LINKED */
      ), e.helper(
        "type"
        /* HelperNameMap.TYPE */
      );
      break;
    }
    case 5:
      e.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), e.helper(
        "list"
        /* HelperNameMap.LIST */
      );
      break;
    case 4:
      e.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), e.helper(
        "named"
        /* HelperNameMap.NAMED */
      );
      break;
  }
}
function Bb(t, e = {}) {
  const n = Fb(t);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), t.body && $l(t.body, n);
  const i = n.context();
  t.helpers = Array.from(i.helpers);
}
function Ub(t) {
  const e = t.body;
  return e.type === 2 ? yu(e) : e.cases.forEach((n) => yu(n)), t;
}
function yu(t) {
  if (t.items.length === 1) {
    const e = t.items[0];
    (e.type === 3 || e.type === 9) && (t.static = e.value, delete e.value);
  } else {
    const e = [];
    for (let n = 0; n < t.items.length; n++) {
      const i = t.items[n];
      if (!(i.type === 3 || i.type === 9) || i.value == null)
        break;
      e.push(i.value);
    }
    if (e.length === t.items.length) {
      t.static = Sd(e);
      for (let n = 0; n < t.items.length; n++) {
        const i = t.items[n];
        (i.type === 3 || i.type === 9) && delete i.value;
      }
    }
  }
}
const qb = "minifier";
function hi(t) {
  switch (t.t = t.type, t.type) {
    case 0: {
      const e = t;
      hi(e.body), e.b = e.body, delete e.body;
      break;
    }
    case 1: {
      const e = t, n = e.cases;
      for (let i = 0; i < n.length; i++)
        hi(n[i]);
      e.c = n, delete e.cases;
      break;
    }
    case 2: {
      const e = t, n = e.items;
      for (let i = 0; i < n.length; i++)
        hi(n[i]);
      e.i = n, delete e.items, e.static && (e.s = e.static, delete e.static);
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const e = t;
      e.value && (e.v = e.value, delete e.value);
      break;
    }
    case 6: {
      const e = t;
      hi(e.key), e.k = e.key, delete e.key, e.modifier && (hi(e.modifier), e.m = e.modifier, delete e.modifier);
      break;
    }
    case 5: {
      const e = t;
      e.i = e.index, delete e.index;
      break;
    }
    case 4: {
      const e = t;
      e.k = e.key, delete e.key;
      break;
    }
    default:
      throw Bi(nt.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: qb,
        args: [t.type]
      });
  }
  delete t.type;
}
const Hb = "parser";
function Wb(t, e) {
  const { sourceMap: n, filename: i, breakLineCode: r, needIndent: s } = e, o = e.location !== !1, a = {
    filename: i,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: r,
    needIndent: s,
    indentLevel: 0
  };
  o && t.loc && (a.source = t.loc.source);
  const l = () => a;
  function c(k, m) {
    a.code += k;
  }
  function u(k, m = !0) {
    const b = m ? r : "";
    c(s ? b + "  ".repeat(k) : b);
  }
  function f(k = !0) {
    const m = ++a.indentLevel;
    k && u(m);
  }
  function h(k = !0) {
    const m = --a.indentLevel;
    k && u(m);
  }
  function p() {
    u(a.indentLevel);
  }
  return {
    context: l,
    push: c,
    indent: f,
    deindent: h,
    newline: p,
    helper: (k) => `_${k}`,
    needIndent: () => a.needIndent
  };
}
function Vb(t, e) {
  const { helper: n } = t;
  t.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Oi(t, e.key), e.modifier ? (t.push(", "), Oi(t, e.modifier), t.push(", _type")) : t.push(", undefined, _type"), t.push(")");
}
function jb(t, e) {
  const { helper: n, needIndent: i } = t;
  t.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), t.indent(i());
  const r = e.items.length;
  for (let s = 0; s < r && (Oi(t, e.items[s]), s !== r - 1); s++)
    t.push(", ");
  t.deindent(i()), t.push("])");
}
function zb(t, e) {
  const { helper: n, needIndent: i } = t;
  if (e.cases.length > 1) {
    t.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), t.indent(i());
    const r = e.cases.length;
    for (let s = 0; s < r && (Oi(t, e.cases[s]), s !== r - 1); s++)
      t.push(", ");
    t.deindent(i()), t.push("])");
  }
}
function Gb(t, e) {
  e.body ? Oi(t, e.body) : t.push("null");
}
function Oi(t, e) {
  const { helper: n } = t;
  switch (e.type) {
    case 0:
      Gb(t, e);
      break;
    case 1:
      zb(t, e);
      break;
    case 2:
      jb(t, e);
      break;
    case 6:
      Vb(t, e);
      break;
    case 8:
      t.push(JSON.stringify(e.value), e);
      break;
    case 7:
      t.push(JSON.stringify(e.value), e);
      break;
    case 5:
      t.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "list"
        /* HelperNameMap.LIST */
      )}(${e.index}))`, e);
      break;
    case 4:
      t.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "named"
        /* HelperNameMap.NAMED */
      )}(${JSON.stringify(e.key)}))`, e);
      break;
    case 9:
      t.push(JSON.stringify(e.value), e);
      break;
    case 3:
      t.push(JSON.stringify(e.value), e);
      break;
    default:
      throw Bi(nt.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: Hb,
        args: [e.type]
      });
  }
}
const Yb = (t, e = {}) => {
  const n = pu(e.mode) ? e.mode : "normal", i = pu(e.filename) ? e.filename : "message.intl", r = !!e.sourceMap, s = e.breakLineCode != null ? e.breakLineCode : n === "arrow" ? ";" : `
`, o = e.needIndent ? e.needIndent : n !== "arrow", a = t.helpers || [], l = Wb(t, {
    mode: n,
    filename: i,
    sourceMap: r,
    breakLineCode: s,
    needIndent: o
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(o), a.length > 0 && (l.push(`const { ${Sd(a.map((f) => `${f}: _${f}`), ", ")} } = ctx`), l.newline()), l.push("return "), Oi(l, t), l.deindent(o), l.push("}"), delete t.helpers;
  const { code: c, map: u } = l.context();
  return {
    ast: t,
    code: c,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Kb(t, e = {}) {
  const n = xd({}, e), i = !!n.jit, r = !!n.minify, s = n.optimize == null ? !0 : n.optimize, a = $b(n).parse(t);
  return i ? (s && Ub(a), r && hi(a), { ast: a, code: "" }) : (Bb(a, n), Yb(a, n));
}
/*!
 * core-base v9.10.2
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
function Xb() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Rl().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Rn = [];
Rn[
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
Rn[
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
Rn[
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
Rn[
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
Rn[
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
Rn[
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
Rn[
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
const Jb = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Qb(t) {
  return Jb.test(t);
}
function Zb(t) {
  const e = t.charCodeAt(0), n = t.charCodeAt(t.length - 1);
  return e === n && (e === 34 || e === 39) ? t.slice(1, -1) : t;
}
function t0(t) {
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
function e0(t) {
  const e = t.trim();
  return t.charAt(0) === "0" && isNaN(parseInt(t)) ? !1 : Qb(e) ? Zb(e) : "*" + e;
}
function n0(t) {
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
      if (r = 0, o === void 0 || (o = e0(o), o === !1))
        return !1;
      h[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function p() {
    const y = t[n + 1];
    if (i === 5 && y === "'" || i === 6 && y === '"')
      return n++, a = "\\" + y, h[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; i !== null; )
    if (n++, s = t[n], !(s === "\\" && p())) {
      if (l = t0(s), f = Rn[i], c = f[l] || f.l || 8, c === 8 || (i = c[0], c[1] !== void 0 && (u = h[c[1]], u && (a = s, u() === !1))))
        return;
      if (i === 7)
        return e;
    }
}
const bu = /* @__PURE__ */ new Map();
function i0(t, e) {
  return bt(t) ? t[e] : null;
}
function r0(t, e) {
  if (!bt(t))
    return null;
  let n = bu.get(e);
  if (n || (n = n0(e), n && bu.set(e, n)), !n)
    return null;
  const i = n.length;
  let r = t, s = 0;
  for (; s < i; ) {
    const o = r[n[s]];
    if (o === void 0 || It(r))
      return null;
    r = o, s++;
  }
  return r;
}
const s0 = (t) => t, o0 = (t) => "", a0 = "text", l0 = (t) => t.length === 0 ? "" : vb(t), c0 = bb;
function vu(t, e) {
  return t = Math.abs(t), e === 2 ? t ? t > 1 ? 1 : 0 : 1 : t ? Math.min(t, 2) : 0;
}
function u0(t) {
  const e = Vt(t.pluralIndex) ? t.pluralIndex : -1;
  return t.named && (Vt(t.named.count) || Vt(t.named.n)) ? Vt(t.named.count) ? t.named.count : Vt(t.named.n) ? t.named.n : e : e;
}
function f0(t, e) {
  e.count || (e.count = t), e.n || (e.n = t);
}
function h0(t = {}) {
  const e = t.locale, n = u0(t), i = bt(t.pluralRules) && K(e) && It(t.pluralRules[e]) ? t.pluralRules[e] : vu, r = bt(t.pluralRules) && K(e) && It(t.pluralRules[e]) ? vu : void 0, s = (m) => m[i(n, m.length, r)], o = t.list || [], a = (m) => o[m], l = t.named || {};
  Vt(t.pluralIndex) && f0(n, l);
  const c = (m) => l[m];
  function u(m) {
    const b = It(t.messages) ? t.messages(m) : bt(t.messages) ? t.messages[m] : !1;
    return b || (t.parent ? t.parent.message(m) : o0);
  }
  const f = (m) => t.modifiers ? t.modifiers[m] : s0, h = ft(t.processor) && It(t.processor.normalize) ? t.processor.normalize : l0, p = ft(t.processor) && It(t.processor.interpolate) ? t.processor.interpolate : c0, y = ft(t.processor) && K(t.processor.type) ? t.processor.type : a0, k = {
    list: a,
    named: c,
    plural: s,
    linked: (m, ...b) => {
      const [x, _] = b;
      let E = "text", P = "";
      b.length === 1 ? bt(x) ? (P = x.modifier || P, E = x.type || E) : K(x) && (P = x || P) : b.length === 2 && (K(x) && (P = x || P), K(_) && (E = _ || E));
      const L = u(m)(k), W = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        E === "vnode" && Ut(L) && P ? L[0] : L
      );
      return P ? f(P)(W, E) : W;
    },
    message: u,
    type: y,
    interpolate: p,
    normalize: h,
    values: Qt({}, o, l)
  };
  return k;
}
let gr = null;
function d0(t) {
  gr = t;
}
function p0(t, e, n) {
  gr && gr.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: t,
    version: e,
    meta: n
  });
}
const g0 = /* @__PURE__ */ m0(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function m0(t) {
  return (e) => gr && gr.emit(t, e);
}
const y0 = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
  __EXTEND_POINT__: 8
}, kd = nt.__EXTEND_POINT__, Un = Dl(kd), Ve = {
  INVALID_ARGUMENT: kd,
  // 18
  INVALID_DATE_ARGUMENT: Un(),
  // 19
  INVALID_ISO_DATE_ARGUMENT: Un(),
  // 20
  NOT_SUPPORT_NON_STRING_MESSAGE: Un(),
  // 21
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: Un(),
  // 22
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: Un(),
  // 23
  NOT_SUPPORT_LOCALE_TYPE: Un(),
  // 24
  __EXTEND_POINT__: Un()
  // 25
};
function rn(t) {
  return Bi(t, null, void 0);
}
function Fl(t, e) {
  return e.locale != null ? _u(e.locale) : _u(t.locale);
}
let Xo;
function _u(t) {
  if (K(t))
    return t;
  if (It(t)) {
    if (t.resolvedOnce && Xo != null)
      return Xo;
    if (t.constructor.name === "Function") {
      const e = t();
      if (yb(e))
        throw rn(Ve.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Xo = e;
    } else
      throw rn(Ve.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw rn(Ve.NOT_SUPPORT_LOCALE_TYPE);
}
function b0(t, e, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Ut(e) ? e : bt(e) ? Object.keys(e) : K(e) ? [e] : [n]
  ])];
}
function Ed(t, e, n) {
  const i = K(n) ? n : Vs, r = t;
  r.__localeChainCache || (r.__localeChainCache = /* @__PURE__ */ new Map());
  let s = r.__localeChainCache.get(i);
  if (!s) {
    s = [];
    let o = [n];
    for (; Ut(o); )
      o = wu(s, o, e);
    const a = Ut(e) || !ft(e) ? e : e.default ? e.default : null;
    o = K(a) ? [a] : a, Ut(o) && wu(s, o, !1), r.__localeChainCache.set(i, s);
  }
  return s;
}
function wu(t, e, n) {
  let i = !0;
  for (let r = 0; r < e.length && Pt(i); r++) {
    const s = e[r];
    K(s) && (i = v0(t, e[r], n));
  }
  return i;
}
function v0(t, e, n) {
  let i;
  const r = e.split("-");
  do {
    const s = r.join("-");
    i = _0(t, s, n), r.splice(-1, 1);
  } while (r.length && i === !0);
  return i;
}
function _0(t, e, n) {
  let i = !1;
  if (!t.includes(e) && (i = !0, e)) {
    i = e[e.length - 1] !== "!";
    const r = e.replace(/!/g, "");
    t.push(r), (Ut(n) || ft(n)) && n[r] && (i = n[r]);
  }
  return i;
}
const w0 = "9.10.2", Eo = -1, Vs = "en-US", xu = "", Su = (t) => `${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;
function x0() {
  return {
    upper: (t, e) => e === "text" && K(t) ? t.toUpperCase() : e === "vnode" && bt(t) && "__v_isVNode" in t ? t.children.toUpperCase() : t,
    lower: (t, e) => e === "text" && K(t) ? t.toLowerCase() : e === "vnode" && bt(t) && "__v_isVNode" in t ? t.children.toLowerCase() : t,
    capitalize: (t, e) => e === "text" && K(t) ? Su(t) : e === "vnode" && bt(t) && "__v_isVNode" in t ? Su(t.children) : t
  };
}
let Td;
function S0(t) {
  Td = t;
}
let Ad;
function k0(t) {
  Ad = t;
}
let Cd;
function E0(t) {
  Cd = t;
}
let Od = null;
const T0 = /* @__NO_SIDE_EFFECTS__ */ (t) => {
  Od = t;
}, A0 = /* @__NO_SIDE_EFFECTS__ */ () => Od;
let Pd = null;
const ku = (t) => {
  Pd = t;
}, C0 = () => Pd;
let Eu = 0;
function O0(t = {}) {
  const e = It(t.onWarn) ? t.onWarn : _b, n = K(t.version) ? t.version : w0, i = K(t.locale) || It(t.locale) ? t.locale : Vs, r = It(i) ? Vs : i, s = Ut(t.fallbackLocale) || ft(t.fallbackLocale) || K(t.fallbackLocale) || t.fallbackLocale === !1 ? t.fallbackLocale : r, o = ft(t.messages) ? t.messages : { [r]: {} }, a = ft(t.datetimeFormats) ? t.datetimeFormats : { [r]: {} }, l = ft(t.numberFormats) ? t.numberFormats : { [r]: {} }, c = Qt({}, t.modifiers || {}, x0()), u = t.pluralRules || {}, f = It(t.missing) ? t.missing : null, h = Pt(t.missingWarn) || Hs(t.missingWarn) ? t.missingWarn : !0, p = Pt(t.fallbackWarn) || Hs(t.fallbackWarn) ? t.fallbackWarn : !0, y = !!t.fallbackFormat, S = !!t.unresolving, k = It(t.postTranslation) ? t.postTranslation : null, m = ft(t.processor) ? t.processor : null, b = Pt(t.warnHtmlMessage) ? t.warnHtmlMessage : !0, x = !!t.escapeParameter, _ = It(t.messageCompiler) ? t.messageCompiler : Td, E = It(t.messageResolver) ? t.messageResolver : Ad || i0, P = It(t.localeFallbacker) ? t.localeFallbacker : Cd || b0, L = bt(t.fallbackContext) ? t.fallbackContext : void 0, W = t, M = bt(W.__datetimeFormatters) ? W.__datetimeFormatters : /* @__PURE__ */ new Map(), H = bt(W.__numberFormatters) ? W.__numberFormatters : /* @__PURE__ */ new Map(), F = bt(W.__meta) ? W.__meta : {};
  Eu++;
  const G = {
    version: n,
    cid: Eu,
    locale: i,
    fallbackLocale: s,
    messages: o,
    modifiers: c,
    pluralRules: u,
    missing: f,
    missingWarn: h,
    fallbackWarn: p,
    fallbackFormat: y,
    unresolving: S,
    postTranslation: k,
    processor: m,
    warnHtmlMessage: b,
    escapeParameter: x,
    messageCompiler: _,
    messageResolver: E,
    localeFallbacker: P,
    fallbackContext: L,
    onWarn: e,
    __meta: F
  };
  return G.datetimeFormats = a, G.numberFormats = l, G.__datetimeFormatters = M, G.__numberFormatters = H, __INTLIFY_PROD_DEVTOOLS__ && p0(G, n, F), G;
}
function Bl(t, e, n, i, r) {
  const { missing: s, onWarn: o } = t;
  if (s !== null) {
    const a = s(t, n, e, r);
    return K(a) ? a : e;
  } else
    return e;
}
function Yi(t, e, n) {
  const i = t;
  i.__localeChainCache = /* @__PURE__ */ new Map(), t.localeFallbacker(t, n, e);
}
function Jo(t) {
  return (n) => P0(n, t);
}
function P0(t, e) {
  const n = e.b || e.body;
  if ((n.t || n.type) === 1) {
    const i = n, r = i.c || i.cases;
    return t.plural(r.reduce((s, o) => [
      ...s,
      Tu(t, o)
    ], []));
  } else
    return Tu(t, n);
}
function Tu(t, e) {
  const n = e.s || e.static;
  if (n)
    return t.type === "text" ? n : t.normalize([n]);
  {
    const i = (e.i || e.items).reduce((r, s) => [...r, Ea(t, s)], []);
    return t.normalize(i);
  }
}
function Ea(t, e) {
  const n = e.t || e.type;
  switch (n) {
    case 3: {
      const i = e;
      return i.v || i.value;
    }
    case 9: {
      const i = e;
      return i.v || i.value;
    }
    case 4: {
      const i = e;
      return t.interpolate(t.named(i.k || i.key));
    }
    case 5: {
      const i = e;
      return t.interpolate(t.list(i.i != null ? i.i : i.index));
    }
    case 6: {
      const i = e, r = i.m || i.modifier;
      return t.linked(Ea(t, i.k || i.key), r ? Ea(t, r) : void 0, t.type);
    }
    case 7: {
      const i = e;
      return i.v || i.value;
    }
    case 8: {
      const i = e;
      return i.v || i.value;
    }
    default:
      throw new Error(`unhandled node type on format message part: ${n}`);
  }
}
const N0 = (t) => t;
let Yr = /* @__PURE__ */ Object.create(null);
const Pi = (t) => bt(t) && (t.t === 0 || t.type === 0) && ("b" in t || "body" in t);
function I0(t, e = {}) {
  let n = !1;
  const i = e.onError || Tb;
  return e.onError = (r) => {
    n = !0, i(r);
  }, { ...Kb(t, e), detectError: n };
}
function L0(t, e) {
  if (K(t)) {
    Pt(e.warnHtmlMessage) && e.warnHtmlMessage;
    const i = (e.onCacheKey || N0)(t), r = Yr[i];
    if (r)
      return r;
    const { ast: s, detectError: o } = I0(t, {
      ...e,
      location: !1,
      jit: !0
    }), a = Jo(s);
    return o ? a : Yr[i] = a;
  } else {
    const n = t.cacheKey;
    if (n) {
      const i = Yr[n];
      return i || (Yr[n] = Jo(t));
    } else
      return Jo(t);
  }
}
const Au = () => "", Se = (t) => It(t);
function Cu(t, ...e) {
  const { fallbackFormat: n, postTranslation: i, unresolving: r, messageCompiler: s, fallbackLocale: o, messages: a } = t, [l, c] = Ta(...e), u = Pt(c.missingWarn) ? c.missingWarn : t.missingWarn, f = Pt(c.fallbackWarn) ? c.fallbackWarn : t.fallbackWarn, h = Pt(c.escapeParameter) ? c.escapeParameter : t.escapeParameter, p = !!c.resolvedMessage, y = K(c.default) || Pt(c.default) ? Pt(c.default) ? s ? l : () => l : c.default : n ? s ? l : () => l : "", S = n || y !== "", k = Fl(t, c);
  h && M0(c);
  let [m, b, x] = p ? [
    l,
    k,
    a[k] || {}
  ] : Nd(t, l, k, o, f, u), _ = m, E = l;
  if (!p && !(K(_) || Pi(_) || Se(_)) && S && (_ = y, E = _), !p && (!(K(_) || Pi(_) || Se(_)) || !K(b)))
    return r ? Eo : l;
  let P = !1;
  const L = () => {
    P = !0;
  }, W = Se(_) ? _ : Id(t, l, b, _, E, L);
  if (P)
    return _;
  const M = $0(t, b, x, c), H = h0(M), F = R0(t, W, H), G = i ? i(F, l) : F;
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const q = {
      timestamp: Date.now(),
      key: K(l) ? l : Se(_) ? _.key : "",
      locale: b || (Se(_) ? _.locale : ""),
      format: K(_) ? _ : Se(_) ? _.source : "",
      message: G
    };
    q.meta = Qt({}, t.__meta, /* @__PURE__ */ A0() || {}), g0(q);
  }
  return G;
}
function M0(t) {
  Ut(t.list) ? t.list = t.list.map((e) => K(e) ? du(e) : e) : bt(t.named) && Object.keys(t.named).forEach((e) => {
    K(t.named[e]) && (t.named[e] = du(t.named[e]));
  });
}
function Nd(t, e, n, i, r, s) {
  const { messages: o, onWarn: a, messageResolver: l, localeFallbacker: c } = t, u = c(t, i, n);
  let f = {}, h, p = null;
  const y = "translate";
  for (let S = 0; S < u.length && (h = u[S], f = o[h] || {}, (p = l(f, e)) === null && (p = f[e]), !(K(p) || Pi(p) || Se(p))); S++) {
    const k = Bl(
      t,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      e,
      h,
      s,
      y
    );
    k !== e && (p = k);
  }
  return [p, h, f];
}
function Id(t, e, n, i, r, s) {
  const { messageCompiler: o, warnHtmlMessage: a } = t;
  if (Se(i)) {
    const c = i;
    return c.locale = c.locale || n, c.key = c.key || e, c;
  }
  if (o == null) {
    const c = () => i;
    return c.locale = n, c.key = e, c;
  }
  const l = o(i, D0(t, n, r, i, a, s));
  return l.locale = n, l.key = e, l.source = i, l;
}
function R0(t, e, n) {
  return e(n);
}
function Ta(...t) {
  const [e, n, i] = t, r = {};
  if (!K(e) && !Vt(e) && !Se(e) && !Pi(e))
    throw rn(Ve.INVALID_ARGUMENT);
  const s = Vt(e) ? String(e) : (Se(e), e);
  return Vt(n) ? r.plural = n : K(n) ? r.default = n : ft(n) && !ko(n) ? r.named = n : Ut(n) && (r.list = n), Vt(i) ? r.plural = i : K(i) ? r.default = i : ft(i) && Qt(r, i), [s, r];
}
function D0(t, e, n, i, r, s) {
  return {
    locale: e,
    key: n,
    warnHtmlMessage: r,
    onError: (o) => {
      throw s && s(o), o;
    },
    onCacheKey: (o) => db(e, n, o)
  };
}
function $0(t, e, n, i) {
  const { modifiers: r, pluralRules: s, messageResolver: o, fallbackLocale: a, fallbackWarn: l, missingWarn: c, fallbackContext: u } = t, h = {
    locale: e,
    modifiers: r,
    pluralRules: s,
    messages: (p) => {
      let y = o(n, p);
      if (y == null && u) {
        const [, , S] = Nd(u, p, e, a, l, c);
        y = o(S, p);
      }
      if (K(y) || Pi(y)) {
        let S = !1;
        const m = Id(t, p, e, y, p, () => {
          S = !0;
        });
        return S ? Au : m;
      } else
        return Se(y) ? y : Au;
    }
  };
  return t.processor && (h.processor = t.processor), i.list && (h.list = i.list), i.named && (h.named = i.named), Vt(i.plural) && (h.pluralIndex = i.plural), h;
}
function Ou(t, ...e) {
  const { datetimeFormats: n, unresolving: i, fallbackLocale: r, onWarn: s, localeFallbacker: o } = t, { __datetimeFormatters: a } = t, [l, c, u, f] = Aa(...e), h = Pt(u.missingWarn) ? u.missingWarn : t.missingWarn;
  Pt(u.fallbackWarn) ? u.fallbackWarn : t.fallbackWarn;
  const p = !!u.part, y = Fl(t, u), S = o(
    t,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    y
  );
  if (!K(l) || l === "")
    return new Intl.DateTimeFormat(y, f).format(c);
  let k = {}, m, b = null;
  const x = "datetime format";
  for (let P = 0; P < S.length && (m = S[P], k = n[m] || {}, b = k[l], !ft(b)); P++)
    Bl(t, l, m, h, x);
  if (!ft(b) || !K(m))
    return i ? Eo : l;
  let _ = `${m}__${l}`;
  ko(f) || (_ = `${_}__${JSON.stringify(f)}`);
  let E = a.get(_);
  return E || (E = new Intl.DateTimeFormat(m, Qt({}, b, f)), a.set(_, E)), p ? E.formatToParts(c) : E.format(c);
}
const Ld = [
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
function Aa(...t) {
  const [e, n, i, r] = t, s = {};
  let o = {}, a;
  if (K(e)) {
    const l = e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw rn(Ve.INVALID_ISO_DATE_ARGUMENT);
    const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    a = new Date(c);
    try {
      a.toISOString();
    } catch {
      throw rn(Ve.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (gb(e)) {
    if (isNaN(e.getTime()))
      throw rn(Ve.INVALID_DATE_ARGUMENT);
    a = e;
  } else if (Vt(e))
    a = e;
  else
    throw rn(Ve.INVALID_ARGUMENT);
  return K(n) ? s.key = n : ft(n) && Object.keys(n).forEach((l) => {
    Ld.includes(l) ? o[l] = n[l] : s[l] = n[l];
  }), K(i) ? s.locale = i : ft(i) && (o = i), ft(r) && (o = r), [s.key || "", a, s, o];
}
function Pu(t, e, n) {
  const i = t;
  for (const r in n) {
    const s = `${e}__${r}`;
    i.__datetimeFormatters.has(s) && i.__datetimeFormatters.delete(s);
  }
}
function Nu(t, ...e) {
  const { numberFormats: n, unresolving: i, fallbackLocale: r, onWarn: s, localeFallbacker: o } = t, { __numberFormatters: a } = t, [l, c, u, f] = Ca(...e), h = Pt(u.missingWarn) ? u.missingWarn : t.missingWarn;
  Pt(u.fallbackWarn) ? u.fallbackWarn : t.fallbackWarn;
  const p = !!u.part, y = Fl(t, u), S = o(
    t,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    y
  );
  if (!K(l) || l === "")
    return new Intl.NumberFormat(y, f).format(c);
  let k = {}, m, b = null;
  const x = "number format";
  for (let P = 0; P < S.length && (m = S[P], k = n[m] || {}, b = k[l], !ft(b)); P++)
    Bl(t, l, m, h, x);
  if (!ft(b) || !K(m))
    return i ? Eo : l;
  let _ = `${m}__${l}`;
  ko(f) || (_ = `${_}__${JSON.stringify(f)}`);
  let E = a.get(_);
  return E || (E = new Intl.NumberFormat(m, Qt({}, b, f)), a.set(_, E)), p ? E.formatToParts(c) : E.format(c);
}
const Md = [
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
function Ca(...t) {
  const [e, n, i, r] = t, s = {};
  let o = {};
  if (!Vt(e))
    throw rn(Ve.INVALID_ARGUMENT);
  const a = e;
  return K(n) ? s.key = n : ft(n) && Object.keys(n).forEach((l) => {
    Md.includes(l) ? o[l] = n[l] : s[l] = n[l];
  }), K(i) ? s.locale = i : ft(i) && (o = i), ft(r) && (o = r), [s.key || "", a, s, o];
}
function Iu(t, e, n) {
  const i = t;
  for (const r in n) {
    const s = `${e}__${r}`;
    i.__numberFormatters.has(s) && i.__numberFormatters.delete(s);
  }
}
Xb();
/*!
 * vue-i18n v9.10.2
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
const F0 = "9.10.2";
function B0() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Rl().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Rd = y0.__EXTEND_POINT__, Qe = Dl(Rd);
Qe(), Qe(), Qe(), Qe(), Qe(), Qe(), Qe(), Qe(), Qe();
const Dd = Ve.__EXTEND_POINT__, se = Dl(Dd), Ce = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Dd,
  // 26
  // legacy module errors
  INVALID_ARGUMENT: se(),
  // 27
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: se(),
  // 28
  NOT_INSTALLED: se(),
  // 29
  NOT_AVAILABLE_IN_LEGACY_MODE: se(),
  // 30
  // directive module errors
  REQUIRED_VALUE: se(),
  // 31
  INVALID_VALUE: se(),
  // 32
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: se(),
  // 33
  NOT_INSTALLED_WITH_PROVIDE: se(),
  // 34
  // unexpected error
  UNEXPECTED_ERROR: se(),
  // 35
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: se(),
  // 36
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: se(),
  // 37
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: se(),
  // 38
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: se(),
  // 39
  // for enhancement
  __EXTEND_POINT__: se()
  // 40
};
function Re(t, ...e) {
  return Bi(t, null, void 0);
}
const Oa = /* @__PURE__ */ Mn("__translateVNode"), Pa = /* @__PURE__ */ Mn("__datetimeParts"), Na = /* @__PURE__ */ Mn("__numberParts"), U0 = Mn("__setPluralRules"), q0 = /* @__PURE__ */ Mn("__injectWithOption"), Ia = /* @__PURE__ */ Mn("__dispose");
function mr(t) {
  if (!bt(t))
    return t;
  for (const e in t)
    if (Ws(t, e))
      if (!e.includes("."))
        bt(t[e]) && mr(t[e]);
      else {
        const n = e.split("."), i = n.length - 1;
        let r = t, s = !1;
        for (let o = 0; o < i; o++) {
          if (n[o] in r || (r[n[o]] = {}), !bt(r[n[o]])) {
            s = !0;
            break;
          }
          r = r[n[o]];
        }
        s || (r[n[i]] = t[e], delete t[e]), bt(r[n[i]]) && mr(r[n[i]]);
      }
  return t;
}
function $d(t, e) {
  const { messages: n, __i18n: i, messageResolver: r, flatJson: s } = e, o = ft(n) ? n : Ut(i) ? {} : { [t]: {} };
  if (Ut(i) && i.forEach((a) => {
    if ("locale" in a && "resource" in a) {
      const { locale: l, resource: c } = a;
      l ? (o[l] = o[l] || {}, Ss(c, o[l])) : Ss(c, o);
    } else
      K(a) && Ss(JSON.parse(a), o);
  }), r == null && s)
    for (const a in o)
      Ws(o, a) && mr(o[a]);
  return o;
}
function Fd(t) {
  return t.type;
}
function H0(t, e, n) {
  let i = bt(e.messages) ? e.messages : {};
  "__i18nGlobal" in n && (i = $d(t.locale.value, {
    messages: i,
    __i18n: n.__i18nGlobal
  }));
  const r = Object.keys(i);
  r.length && r.forEach((s) => {
    t.mergeLocaleMessage(s, i[s]);
  });
  {
    if (bt(e.datetimeFormats)) {
      const s = Object.keys(e.datetimeFormats);
      s.length && s.forEach((o) => {
        t.mergeDateTimeFormat(o, e.datetimeFormats[o]);
      });
    }
    if (bt(e.numberFormats)) {
      const s = Object.keys(e.numberFormats);
      s.length && s.forEach((o) => {
        t.mergeNumberFormat(o, e.numberFormats[o]);
      });
    }
  }
}
function Lu(t) {
  return gt(Or, null, t, 0);
}
const Mu = "__INTLIFY_META__", Ru = () => [], W0 = () => !1;
let Du = 0;
function $u(t) {
  return (e, n, i, r) => t(n, i, xo() || void 0, r);
}
const V0 = /* @__NO_SIDE_EFFECTS__ */ () => {
  const t = xo();
  let e = null;
  return t && (e = Fd(t)[Mu]) ? { [Mu]: e } : null;
};
function Bd(t = {}, e) {
  const { __root: n, __injectWithOption: i } = t, r = n === void 0, s = t.flatJson, o = qs ? wi : pi, a = !!t.translateExistCompatible;
  let l = Pt(t.inheritLocale) ? t.inheritLocale : !0;
  const c = o(
    // prettier-ignore
    n && l ? n.locale.value : K(t.locale) ? t.locale : Vs
  ), u = o(
    // prettier-ignore
    n && l ? n.fallbackLocale.value : K(t.fallbackLocale) || Ut(t.fallbackLocale) || ft(t.fallbackLocale) || t.fallbackLocale === !1 ? t.fallbackLocale : c.value
  ), f = o($d(c.value, t)), h = o(ft(t.datetimeFormats) ? t.datetimeFormats : { [c.value]: {} }), p = o(ft(t.numberFormats) ? t.numberFormats : { [c.value]: {} });
  let y = n ? n.missingWarn : Pt(t.missingWarn) || Hs(t.missingWarn) ? t.missingWarn : !0, S = n ? n.fallbackWarn : Pt(t.fallbackWarn) || Hs(t.fallbackWarn) ? t.fallbackWarn : !0, k = n ? n.fallbackRoot : Pt(t.fallbackRoot) ? t.fallbackRoot : !0, m = !!t.fallbackFormat, b = It(t.missing) ? t.missing : null, x = It(t.missing) ? $u(t.missing) : null, _ = It(t.postTranslation) ? t.postTranslation : null, E = n ? n.warnHtmlMessage : Pt(t.warnHtmlMessage) ? t.warnHtmlMessage : !0, P = !!t.escapeParameter;
  const L = n ? n.modifiers : ft(t.modifiers) ? t.modifiers : {};
  let W = t.pluralRules || n && n.pluralRules, M;
  M = (() => {
    r && ku(null);
    const C = {
      version: F0,
      locale: c.value,
      fallbackLocale: u.value,
      messages: f.value,
      modifiers: L,
      pluralRules: W,
      missing: x === null ? void 0 : x,
      missingWarn: y,
      fallbackWarn: S,
      fallbackFormat: m,
      unresolving: !0,
      postTranslation: _ === null ? void 0 : _,
      warnHtmlMessage: E,
      escapeParameter: P,
      messageResolver: t.messageResolver,
      messageCompiler: t.messageCompiler,
      __meta: { framework: "vue" }
    };
    C.datetimeFormats = h.value, C.numberFormats = p.value, C.__datetimeFormatters = ft(M) ? M.__datetimeFormatters : void 0, C.__numberFormatters = ft(M) ? M.__numberFormatters : void 0;
    const N = O0(C);
    return r && ku(N), N;
  })(), Yi(M, c.value, u.value);
  function F() {
    return [
      c.value,
      u.value,
      f.value,
      h.value,
      p.value
    ];
  }
  const G = xe({
    get: () => c.value,
    set: (C) => {
      c.value = C, M.locale = c.value;
    }
  }), q = xe({
    get: () => u.value,
    set: (C) => {
      u.value = C, M.fallbackLocale = u.value, Yi(M, c.value, C);
    }
  }), it = xe(() => f.value), Rt = /* @__PURE__ */ xe(() => h.value), dt = /* @__PURE__ */ xe(() => p.value);
  function lt() {
    return It(_) ? _ : null;
  }
  function at(C) {
    _ = C, M.postTranslation = C;
  }
  function vt() {
    return b;
  }
  function he(C) {
    C !== null && (x = $u(C)), b = C, M.missing = x;
  }
  const Nt = (C, N, J, rt, _t, Kt) => {
    F();
    let pe;
    try {
      __INTLIFY_PROD_DEVTOOLS__, r || (M.fallbackContext = n ? C0() : void 0), pe = C(M);
    } finally {
      __INTLIFY_PROD_DEVTOOLS__, r || (M.fallbackContext = void 0);
    }
    if (J !== "translate exists" && // for not `te` (e.g `t`)
    Vt(pe) && pe === Eo || J === "translate exists" && !pe) {
      const [Br, ui] = N();
      return n && k ? rt(n) : _t(Br);
    } else {
      if (Kt(pe))
        return pe;
      throw Re(Ce.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Dt(...C) {
    return Nt((N) => Reflect.apply(Cu, null, [N, ...C]), () => Ta(...C), "translate", (N) => Reflect.apply(N.t, N, [...C]), (N) => N, (N) => K(N));
  }
  function De(...C) {
    const [N, J, rt] = C;
    if (rt && !bt(rt))
      throw Re(Ce.INVALID_ARGUMENT);
    return Dt(N, J, Qt({ resolvedMessage: !0 }, rt || {}));
  }
  function $e(...C) {
    return Nt((N) => Reflect.apply(Ou, null, [N, ...C]), () => Aa(...C), "datetime format", (N) => Reflect.apply(N.d, N, [...C]), () => xu, (N) => K(N));
  }
  function Zt(...C) {
    return Nt((N) => Reflect.apply(Nu, null, [N, ...C]), () => Ca(...C), "number format", (N) => Reflect.apply(N.n, N, [...C]), () => xu, (N) => K(N));
  }
  function jt(C) {
    return C.map((N) => K(N) || Vt(N) || Pt(N) ? Lu(String(N)) : N);
  }
  const de = {
    normalize: jt,
    interpolate: (C) => C,
    type: "vnode"
  };
  function ve(...C) {
    return Nt(
      (N) => {
        let J;
        const rt = N;
        try {
          rt.processor = de, J = Reflect.apply(Cu, null, [rt, ...C]);
        } finally {
          rt.processor = null;
        }
        return J;
      },
      () => Ta(...C),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (N) => N[Oa](...C),
      (N) => [Lu(N)],
      (N) => Ut(N)
    );
  }
  function Yt(...C) {
    return Nt(
      (N) => Reflect.apply(Nu, null, [N, ...C]),
      () => Ca(...C),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (N) => N[Na](...C),
      Ru,
      (N) => K(N) || Ut(N)
    );
  }
  function _e(...C) {
    return Nt(
      (N) => Reflect.apply(Ou, null, [N, ...C]),
      () => Aa(...C),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (N) => N[Pa](...C),
      Ru,
      (N) => K(N) || Ut(N)
    );
  }
  function $n(C) {
    W = C, M.pluralRules = W;
  }
  function d(C, N) {
    return Nt(() => {
      if (!C)
        return !1;
      const J = K(N) ? N : c.value, rt = T(J), _t = M.messageResolver(rt, C);
      return a ? _t != null : Pi(_t) || Se(_t) || K(_t);
    }, () => [C], "translate exists", (J) => Reflect.apply(J.te, J, [C, N]), W0, (J) => Pt(J));
  }
  function g(C) {
    let N = null;
    const J = Ed(M, u.value, c.value);
    for (let rt = 0; rt < J.length; rt++) {
      const _t = f.value[J[rt]] || {}, Kt = M.messageResolver(_t, C);
      if (Kt != null) {
        N = Kt;
        break;
      }
    }
    return N;
  }
  function w(C) {
    const N = g(C);
    return N ?? (n ? n.tm(C) || {} : {});
  }
  function T(C) {
    return f.value[C] || {};
  }
  function O(C, N) {
    if (s) {
      const J = { [C]: N };
      for (const rt in J)
        Ws(J, rt) && mr(J[rt]);
      N = J[C];
    }
    f.value[C] = N, M.messages = f.value;
  }
  function I(C, N) {
    f.value[C] = f.value[C] || {};
    const J = { [C]: N };
    if (s)
      for (const rt in J)
        Ws(J, rt) && mr(J[rt]);
    N = J[C], Ss(N, f.value[C]), M.messages = f.value;
  }
  function B(C) {
    return h.value[C] || {};
  }
  function D(C, N) {
    h.value[C] = N, M.datetimeFormats = h.value, Pu(M, C, N);
  }
  function U(C, N) {
    h.value[C] = Qt(h.value[C] || {}, N), M.datetimeFormats = h.value, Pu(M, C, N);
  }
  function R(C) {
    return p.value[C] || {};
  }
  function j(C, N) {
    p.value[C] = N, M.numberFormats = p.value, Iu(M, C, N);
  }
  function Z(C, N) {
    p.value[C] = Qt(p.value[C] || {}, N), M.numberFormats = p.value, Iu(M, C, N);
  }
  Du++, n && qs && (on(n.locale, (C) => {
    l && (c.value = C, M.locale = C, Yi(M, c.value, u.value));
  }), on(n.fallbackLocale, (C) => {
    l && (u.value = C, M.fallbackLocale = C, Yi(M, c.value, u.value));
  }));
  const V = {
    id: Du,
    locale: G,
    fallbackLocale: q,
    get inheritLocale() {
      return l;
    },
    set inheritLocale(C) {
      l = C, C && n && (c.value = n.locale.value, u.value = n.fallbackLocale.value, Yi(M, c.value, u.value));
    },
    get availableLocales() {
      return Object.keys(f.value).sort();
    },
    messages: it,
    get modifiers() {
      return L;
    },
    get pluralRules() {
      return W || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return y;
    },
    set missingWarn(C) {
      y = C, M.missingWarn = y;
    },
    get fallbackWarn() {
      return S;
    },
    set fallbackWarn(C) {
      S = C, M.fallbackWarn = S;
    },
    get fallbackRoot() {
      return k;
    },
    set fallbackRoot(C) {
      k = C;
    },
    get fallbackFormat() {
      return m;
    },
    set fallbackFormat(C) {
      m = C, M.fallbackFormat = m;
    },
    get warnHtmlMessage() {
      return E;
    },
    set warnHtmlMessage(C) {
      E = C, M.warnHtmlMessage = C;
    },
    get escapeParameter() {
      return P;
    },
    set escapeParameter(C) {
      P = C, M.escapeParameter = C;
    },
    t: Dt,
    getLocaleMessage: T,
    setLocaleMessage: O,
    mergeLocaleMessage: I,
    getPostTranslationHandler: lt,
    setPostTranslationHandler: at,
    getMissingHandler: vt,
    setMissingHandler: he,
    [U0]: $n
  };
  return V.datetimeFormats = Rt, V.numberFormats = dt, V.rt = De, V.te = d, V.tm = w, V.d = $e, V.n = Zt, V.getDateTimeFormat = B, V.setDateTimeFormat = D, V.mergeDateTimeFormat = U, V.getNumberFormat = R, V.setNumberFormat = j, V.mergeNumberFormat = Z, V[q0] = i, V[Oa] = ve, V[Pa] = _e, V[Na] = Yt, V;
}
const Ul = {
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
function j0({ slots: t }, e) {
  return e.length === 1 && e[0] === "default" ? (t.default ? t.default() : []).reduce((i, r) => [
    ...i,
    // prettier-ignore
    ...r.type === $t ? r.children : [r]
  ], []) : e.reduce((n, i) => {
    const r = t[i];
    return r && (n[i] = r()), n;
  }, {});
}
function Ud(t) {
  return $t;
}
const z0 = /* @__PURE__ */ oi({
  /* eslint-disable */
  name: "i18n-t",
  props: Qt({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (t) => Vt(t) || !isNaN(t)
    }
  }, Ul),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(t, e) {
    const { slots: n, attrs: i } = e, r = t.i18n || To({
      useScope: t.scope,
      __useComponent: !0
    });
    return () => {
      const s = Object.keys(n).filter((f) => f !== "_"), o = {};
      t.locale && (o.locale = t.locale), t.plural !== void 0 && (o.plural = K(t.plural) ? +t.plural : t.plural);
      const a = j0(e, s), l = r[Oa](t.keypath, a, o), c = Qt({}, i), u = K(t.tag) || bt(t.tag) ? t.tag : Ud();
      return Ml(u, c, l);
    };
  }
}), Fu = z0;
function G0(t) {
  return Ut(t) && !K(t[0]);
}
function qd(t, e, n, i) {
  const { slots: r, attrs: s } = e;
  return () => {
    const o = { part: !0 };
    let a = {};
    t.locale && (o.locale = t.locale), K(t.format) ? o.key = t.format : bt(t.format) && (K(t.format.key) && (o.key = t.format.key), a = Object.keys(t.format).reduce((h, p) => n.includes(p) ? Qt({}, h, { [p]: t.format[p] }) : h, {}));
    const l = i(t.value, o, a);
    let c = [o.key];
    Ut(l) ? c = l.map((h, p) => {
      const y = r[h.type], S = y ? y({ [h.type]: h.value, index: p, parts: l }) : [h.value];
      return G0(S) && (S[0].key = `${h.type}-${p}`), S;
    }) : K(l) && (c = [l]);
    const u = Qt({}, s), f = K(t.tag) || bt(t.tag) ? t.tag : Ud();
    return Ml(f, u, c);
  };
}
const Y0 = /* @__PURE__ */ oi({
  /* eslint-disable */
  name: "i18n-n",
  props: Qt({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, Ul),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(t, e) {
    const n = t.i18n || To({
      useScope: "parent",
      __useComponent: !0
    });
    return qd(t, e, Md, (...i) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Na](...i)
    ));
  }
}), Bu = Y0, K0 = /* @__PURE__ */ oi({
  /* eslint-disable */
  name: "i18n-d",
  props: Qt({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, Ul),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(t, e) {
    const n = t.i18n || To({
      useScope: "parent",
      __useComponent: !0
    });
    return qd(t, e, Ld, (...i) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Pa](...i)
    ));
  }
}), Uu = K0;
function X0(t, e) {
  const n = t;
  if (t.mode === "composition")
    return n.__getInstance(e) || t.global;
  {
    const i = n.__getInstance(e);
    return i != null ? i.__composer : t.global.__composer;
  }
}
function J0(t) {
  const e = (o) => {
    const { instance: a, modifiers: l, value: c } = o;
    if (!a || !a.$)
      throw Re(Ce.UNEXPECTED_ERROR);
    const u = X0(t, a.$), f = qu(c);
    return [
      Reflect.apply(u.t, u, [...Hu(f)]),
      u
    ];
  };
  return {
    created: (o, a) => {
      const [l, c] = e(a);
      qs && t.global === c && (o.__i18nWatcher = on(c.locale, () => {
        a.instance && a.instance.$forceUpdate();
      })), o.__composer = c, o.textContent = l;
    },
    unmounted: (o) => {
      qs && o.__i18nWatcher && (o.__i18nWatcher(), o.__i18nWatcher = void 0, delete o.__i18nWatcher), o.__composer && (o.__composer = void 0, delete o.__composer);
    },
    beforeUpdate: (o, { value: a }) => {
      if (o.__composer) {
        const l = o.__composer, c = qu(a);
        o.textContent = Reflect.apply(l.t, l, [
          ...Hu(c)
        ]);
      }
    },
    getSSRProps: (o) => {
      const [a] = e(o);
      return { textContent: a };
    }
  };
}
function qu(t) {
  if (K(t))
    return { path: t };
  if (ft(t)) {
    if (!("path" in t))
      throw Re(Ce.REQUIRED_VALUE, "path");
    return t;
  } else
    throw Re(Ce.INVALID_VALUE);
}
function Hu(t) {
  const { path: e, locale: n, args: i, choice: r, plural: s } = t, o = {}, a = i || {};
  return K(n) && (o.locale = n), Vt(r) && (o.plural = r), Vt(s) && (o.plural = s), [e, a, o];
}
function Q0(t, e, ...n) {
  const i = ft(n[0]) ? n[0] : {}, r = !!i.useI18nComponentName;
  (Pt(i.globalInstall) ? i.globalInstall : !0) && ([r ? "i18n" : Fu.name, "I18nT"].forEach((o) => t.component(o, Fu)), [Bu.name, "I18nN"].forEach((o) => t.component(o, Bu)), [Uu.name, "I18nD"].forEach((o) => t.component(o, Uu))), t.directive("t", J0(e));
}
const Z0 = /* @__PURE__ */ Mn("global-vue-i18n");
function t1(t = {}, e) {
  const n = Pt(t.globalInjection) ? t.globalInjection : !0, i = !0, r = /* @__PURE__ */ new Map(), [s, o] = e1(t), a = /* @__PURE__ */ Mn("");
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
      async install(h, ...p) {
        if (h.__VUE_I18N_SYMBOL__ = a, h.provide(h.__VUE_I18N_SYMBOL__, f), ft(p[0])) {
          const k = p[0];
          f.__composerExtend = k.__composerExtend, f.__vueI18nExtend = k.__vueI18nExtend;
        }
        let y = null;
        n && (y = c1(h, f.global)), Q0(h, f, ...p);
        const S = h.unmount;
        h.unmount = () => {
          y && y(), f.dispose(), S();
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
function To(t = {}) {
  const e = xo();
  if (e == null)
    throw Re(Ce.MUST_BE_CALL_SETUP_TOP);
  if (!e.isCE && e.appContext.app != null && !e.appContext.app.__VUE_I18N_SYMBOL__)
    throw Re(Ce.NOT_INSTALLED);
  const n = n1(e), i = r1(n), r = Fd(e), s = i1(t, r);
  if (s === "global")
    return H0(i, t, r), i;
  if (s === "parent") {
    let l = s1(n, e, t.__useComponent);
    return l == null && (l = i), l;
  }
  const o = n;
  let a = o.__getInstance(e);
  if (a == null) {
    const l = Qt({}, t);
    "__i18n" in r && (l.__i18n = r.__i18n), i && (l.__root = i), a = Bd(l), o.__composerExtend && (a[Ia] = o.__composerExtend(a)), a1(o, e, a), o.__setInstance(e, a);
  }
  return a;
}
function e1(t, e, n) {
  const i = tm();
  {
    const r = i.run(() => Bd(t));
    if (r == null)
      throw Re(Ce.UNEXPECTED_ERROR);
    return [i, r];
  }
}
function n1(t) {
  {
    const e = sr(t.isCE ? Z0 : t.appContext.app.__VUE_I18N_SYMBOL__);
    if (!e)
      throw Re(t.isCE ? Ce.NOT_INSTALLED_WITH_PROVIDE : Ce.UNEXPECTED_ERROR);
    return e;
  }
}
function i1(t, e) {
  return ko(t) ? "__i18n" in e ? "local" : "global" : t.useScope ? t.useScope : "local";
}
function r1(t) {
  return t.mode === "composition" ? t.global : t.global.__composer;
}
function s1(t, e, n = !1) {
  let i = null;
  const r = e.root;
  let s = o1(e, n);
  for (; s != null; ) {
    const o = t;
    if (t.mode === "composition" && (i = o.__getInstance(s)), i != null || r === s)
      break;
    s = s.parent;
  }
  return i;
}
function o1(t, e = !1) {
  return t == null ? null : e && t.vnode.ctx || t.parent;
}
function a1(t, e, n) {
  Ol(() => {
  }, e), Pl(() => {
    const i = n;
    t.__deleteInstance(e);
    const r = i[Ia];
    r && (r(), delete i[Ia]);
  }, e);
}
const l1 = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], Wu = ["t", "rt", "d", "n", "tm", "te"];
function c1(t, e) {
  const n = /* @__PURE__ */ Object.create(null);
  return l1.forEach((r) => {
    const s = Object.getOwnPropertyDescriptor(e, r);
    if (!s)
      throw Re(Ce.UNEXPECTED_ERROR);
    const o = re(s.value) ? {
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
  }), t.config.globalProperties.$i18n = n, Wu.forEach((r) => {
    const s = Object.getOwnPropertyDescriptor(e, r);
    if (!s || !s.value)
      throw Re(Ce.UNEXPECTED_ERROR);
    Object.defineProperty(t.config.globalProperties, `$${r}`, s);
  }), () => {
    delete t.config.globalProperties.$i18n, Wu.forEach((r) => {
      delete t.config.globalProperties[`$${r}`];
    });
  };
}
B0();
S0(L0);
k0(r0);
E0(Ed);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const t = Rl();
  t.__INTLIFY__ = !0, d0(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const u1 = {
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
  banding: "Banding",
  "delete banding": "Delete banding",
  delete: "Delete",
  clear: "Clear",
  l1: "L1",
  l2: "L2",
  w1: "W1",
  w2: "W2",
  all: "All",
  Part: "Part",
  Issue: "Issue",
  "The following parts did not fit": "The following parts did not fit",
  "The maximum number of parts is": "The maximum number of parts is",
  "No valid parts found": "No valid parts found",
  "Drop CSV file here": "Drop CSV file here",
  "Powered by SmartCut": "Powered by SmartCut"
}, f1 = {
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
}, h1 = {
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
}, d1 = {
  en_US: u1,
  ca: f1,
  es_ES: h1
};
function A(t) {
  return !(t === void 0 || t === null || t === "" || typeof t == "object" && !Object.values(t).length);
}
function p1(t) {
  return t.reduce((e, n) => {
    const i = A(n.q) && typeof n.q == "string" ? parseInt(n.q) : n.q;
    return !isNaN(i) && i > 0 ? e + i : e;
  }, 0);
}
function g1(t) {
  if (!(t != null && t.length))
    return [];
  const e = t.filter((i) => !i.added).map((i) => (i.parentID = i.getParentID(), i)), n = {};
  return e.forEach((i) => {
    n[i.parentID] ? ++n[i.parentID].count : (n[i.parentID] = {}, n[i.parentID].count = 1, n[i.parentID].id = i.parentID, n[i.parentID].name = i != null && i.name ? i.name : i.id, n[i.parentID].l = i.l, n[i.parentID].w = i.w, n[i.parentID].t = i.t, n[i.parentID].material = i.material, n[i.parentID].rot = i.rot);
  }), Object.values(n);
}
function m1(t) {
  return t != null && t.length ? t.filter((e) => e.used && (e.stack === !1 || typeof e.stack == "number")) : [];
}
function y1() {
  const t = document.documentElement;
  return "requestFullscreen" in t || "webkitRequestFullscreen" in t || "mozRequestFullScreen" in t || "msRequestFullscreen" in t;
}
const b1 = 10;
function Vu(t) {
  return typeof t < "u" && typeof t == "number";
}
const xt = {
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
  isNumber: Vu,
  round(t) {
    return Vu(t) ? t.toFixed(b1) : !1;
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
}, js = {
  //sort by width then length - use .sort(sortHeightDescWidthDesc)
  WDLD(t, e) {
    if (t.w < e.w)
      return 1;
    if (t.w > e.w)
      return -1;
    if (t.l === e.l)
      return 0;
    if (t.l < e.l)
      return 1;
    if (t.l > e.l)
      return -1;
  },
  WALA(t, e) {
    if (t.w > e.w)
      return 1;
    if (t.w < e.w)
      return -1;
    if (t.l === e.l)
      return 0;
    if (t.l > e.l)
      return 1;
    if (t.l < e.l)
      return -1;
  },
  //sort by length d then width d
  LDWD(t, e) {
    if (t.l < e.l)
      return 1;
    if (t.l > e.l)
      return -1;
    if (t.w === e.w)
      return 0;
    if (t.w < e.w)
      return 1;
    if (t.w > e.w)
      return -1;
  },
  LAWA(t, e) {
    if (t.l > e.l)
      return 1;
    if (t.l < e.l)
      return -1;
    if (t.w === e.w)
      return 0;
    if (t.w > e.w)
      return 1;
    if (t.w < e.w)
      return -1;
  },
  //sort by width d
  WD(t, e) {
    if (t.w < e.w)
      return 1;
    if (t.w > e.w)
      return -1;
    if (t.w === e.w)
      return 0;
  },
  LD(t, e) {
    if (t.l < e.l)
      return 1;
    if (t.l > e.l)
      return -1;
    if (t.l === e.l)
      return 0;
  },
  LDIDA(t, e) {
    if (t.l < e.l)
      return 1;
    if (t.l > e.l)
      return -1;
    const n = t.id.toString().split("."), i = e.id.toString().split(".");
    return n[0] !== i[0] ? parseInt(n[0]) - parseInt(i[0]) : parseInt(n[1]) - parseInt(i[1]);
  },
  WDIDA(t, e) {
    if (t.w < e.w)
      return 1;
    if (t.w > e.w)
      return -1;
    const n = t.id.toString().split("."), i = e.id.toString().split(".");
    return n[0] !== i[0] ? parseInt(n[0]) - parseInt(i[0]) : parseInt(n[1]) - parseInt(i[1]);
  },
  //sort by proportion
  /* sortProportion: function(a, b) {
  
          if (a.proportion < b.proportion) return 1;
          if (a.proportion > b.proportion) return -1;
  
          if (a.proportion === b.proportion) return a.index - b.index;
  
      } */
  //area descending
  AD(t, e) {
    const n = t.getArea(), i = e.getArea();
    if (n < i)
      return 1;
    if (n > i)
      return -1;
    if (n === i)
      return 0;
  },
  AA(t, e) {
    const n = t.getArea(), i = e.getArea();
    if (n < i)
      return -1;
    if (n > i)
      return 1;
    if (n === i)
      return 0;
  },
  AAID(t, e) {
    const n = t.getArea(), i = e.getArea();
    if (n < i)
      return -1;
    if (n > i)
      return 1;
    if (n === i) {
      const r = t.id.toString().split("."), s = e.id.toString().split(".");
      return r[0] !== s[0] ? parseInt(r[0]) - parseInt(s[0]) : parseInt(r[1]) - parseInt(s[1]);
    }
    return 0;
  },
  ADID(t, e) {
    const n = t.getArea(), i = e.getArea();
    if (n < i)
      return 1;
    if (n > i)
      return -1;
    if (n === i)
      return 0;
    if (n === i) {
      const r = t.id.toString().split("."), s = e.id.toString().split(".");
      return r[0] !== s[0] ? parseInt(r[0]) - parseInt(s[0]) : parseInt(r[1]) - parseInt(s[1]);
    }
    return 0;
  },
  //by id ascending
  ID(t, e) {
    const n = t.id.toString().split("."), i = e.id.toString().split(".");
    return n[0] !== i[0] ? parseInt(n[0]) - parseInt(i[0]) : parseInt(n[1]) - parseInt(i[1]);
  },
  IDDesc(t, e) {
    const n = t.id.toString().split("."), i = e.id.toString().split(".");
    return n[0] !== i[0] ? parseInt(i[0]) - parseInt(n[0]) : parseInt(i[1]) - parseInt(n[1]);
  },
  StockID(t, e) {
    const n = t.stock.id.toString().split("."), i = e.stock.id.toString().split(".");
    return n[0] !== i[0] ? parseInt(n[0]) - parseInt(i[0]) : parseInt(n[1]) - parseInt(i[1]);
  },
  StockIDAD(t, e) {
    const n = t.stock.id.toString().split("."), i = e.stock.id.toString().split(".");
    if (n[0] !== i[0])
      return parseInt(n[0]) - parseInt(i[0]);
    if (n[1] !== i[1])
      return parseInt(n[1]) - parseInt(i[1]);
    const r = t.getArea(), s = e.getArea();
    if (r < s)
      return 1;
    if (r > s)
      return -1;
  },
  parentID(t, e) {
    return t.parentID - e.parentID;
  },
  YX(t, e) {
    if (t.y < e.y)
      return -1;
    if (t.y > e.y)
      return 1;
    if (t.y === e.y)
      return 0;
    if (t.x < e.x)
      return -1;
    if (t.x > e.x)
      return 1;
  },
  XY(t, e) {
    if (t.x < e.x)
      return -1;
    if (t.x > e.x)
      return 1;
    if (t.x === e.x)
      return 0;
    if (t.y < e.y)
      return -1;
    if (t.y > e.y)
      return 1;
  },
  subset(t, e) {
    if (t.totalLength < e.totalLength)
      return 1;
    if (t.totalLength > e.totalLength)
      return -1;
    if (t.area === e.area)
      return 0;
    if (t.area < e.area)
      return 1;
    if (t.area > e.area)
      return -1;
  },
  placementOrder(t, e) {
    return (t == null ? void 0 : t.placementOrder) - (e == null ? void 0 : e.placementOrder);
  },
  typePlacementOrder(t, e) {
    if (t.offcut && !e.offcut)
      return 1;
    if (!t.offcut && e.offcut)
      return 0;
    if (t.offcut === e.offcut)
      return t.placementOrder - e.placementOrder;
  },
  stockIDTypePlacementOrder(t, e) {
    const n = t.stock.id.toString().split("."), i = e.stock.id.toString().split(".");
    if (n[0] !== i[0])
      return parseInt(n[0]) - parseInt(i[0]);
    if (n[1] !== i[1])
      return parseInt(n[1]) - parseInt(i[1]);
    if (t.offcut && !e.offcut)
      return 1;
    if (!t.offcut && e.offcut)
      return 0;
    if (t.offcut === e.offcut)
      return t.placementOrder - e.placementOrder;
  },
  offcutPlacementOrder(t, e) {
    var r, s;
    if (!((r = t == null ? void 0 : t.stock) != null && r.id) || !((s = e == null ? void 0 : e.stock) != null && s.id))
      return 0;
    const n = t.stock.id.toString().split("."), i = e.stock.id.toString().split(".");
    return n[0] !== i[0] ? parseInt(n[0]) - parseInt(i[0]) : n[1] !== i[1] ? parseInt(n[1]) - parseInt(i[1]) : (t == null ? void 0 : t.placementOrder) - (e == null ? void 0 : e.placementOrder);
  },
  groupPlacementOrder(t, e) {
    if (t.placementOrder - e.placementOrder, t.placementOrder > e.placementOrder)
      return 1;
    if (t.placementOrder < e.placementOrder)
      return -1;
    if (t.groupPlacementOrder === e.groupPlacementOrder)
      return 0;
    if (t.groupPlacementOrder > e.groupPlacementOrder)
      return 1;
    if (t.groupPlacementOrder < e.groupPlacementOrder)
      return -1;
  },
  swapFirstTwo(t) {
    const e = t[1];
    t[1] = t[0], t[0] = e;
  },
  //Fisher-Yates shuffle
  shuffle(t) {
    for (let e = t.length - 1; e > 0; e--) {
      const n = Math.floor(Math.random() * (e + 1));
      [t[e], t[n]] = [t[n], t[e]];
    }
  },
  /**
   * generator function which accepts a dimension to cater for shape rotation lock
   */
  fillThenArea(t) {
    return function(e, n) {
      return e.getLongSide(t) > n.getLongSide(t) ? -1 : e.getLongSide(t) < n.getLongSide(t) ? 1 : e.getArea() > n.getArea() ? -1 : e.getArea() < n.getArea() ? 1 : 0;
    };
  },
  aspect(t, e) {
    const n = t.getAspect(), i = e.getAspect();
    return n > i ? -1 : n < i ? 1 : 0;
  }
};
class v1 {
  constructor(e) {
    v(this, "x1");
    v(this, "x2");
    v(this, "y1");
    v(this, "y2");
    v(this, "direction");
    v(this, "shapeCollisions");
    this.x1 = e.x1, this.x2 = e.x2, this.y1 = e.y1, this.y2 = e.y2, this.direction = _1(this);
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
function _1(t) {
  return typeof t > "u" || !xt.isNumber(t.x1) || !xt.isNumber(t.x2) || !xt.isNumber(t.y1) || !xt.isNumber(t.y2) ? null : t.x1 === t.x2 && t.y1 !== t.y2 ? "w" : t.y1 === t.y2 && t.x1 !== t.x2 ? "l" : null;
}
function w1(t) {
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
class Ao extends v1 {
  //used to mark for removal
  constructor(n) {
    var i, r, s, o;
    n.x2 < n.x1 && ([n.x1, n.x2] = [n.x2, n.x1]), n.y2 < n.y1 && ([n.y1, n.y2] = [n.y2, n.y1]);
    super(n);
    v(this, "stock");
    v(this, "stockId");
    v(this, "type", null);
    v(this, "guillotine");
    v(this, "guillotineData");
    v(this, "isTrim");
    v(this, "distances");
    v(this, "beamTrimX1");
    v(this, "beamTrimY1");
    v(this, "remove");
    A(n == null ? void 0 : n.stock) && (((r = (i = n.stock) == null ? void 0 : i.constructor) == null ? void 0 : r.name) === "Stock" ? this.stock = n.stock : this.stock = new Dn(n.stock), this.stockId = this.stock.id), this.stockId = (s = n == null ? void 0 : n.stock) == null ? void 0 : s.id, this.type = n.type ?? null, this.guillotine = n.guillotine, this.guillotineData = A(n.guillotineData) ? n.guillotineData : {}, this.guillotineData.ptxDummyCut = (n == null ? void 0 : n.ptxDummyCut) || ((o = n == null ? void 0 : n.guillotineData) == null ? void 0 : o.ptxDummyCut) || !1, this.isTrim = A(n.isTrim) ? n.isTrim : !1, this.distances = A(n.distances) ? n.distances : {}, this.beamTrimX1 = n.beamTrimX1, this.beamTrimY1 = n.beamTrimY1;
  }
  //compress for saving / transfer
  compress() {
    var n;
    this.stockId = (this == null ? void 0 : this.stockId) ?? ((n = this == null ? void 0 : this.stock) == null ? void 0 : n.id), delete this.shapeCollisions, delete this.stock;
  }
  clone() {
    const n = structuredClone(this);
    return new Ao(n);
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
        return xt.greaterThan(this.y1 + this.stock.getBladeWidth() / 2, 0);
      case "left":
        return xt.greaterThan(this.x1 + this.stock.getBladeWidth() / 2, 0);
      case "top":
        return xt.lessThan(this.y1 - this.stock.getBladeWidth() / 2, this.stock.w);
      case "right":
        return xt.lessThan(this.x1 - this.stock.getBladeWidth() / 2, this.stock.l);
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
    return w1(this);
  }
  getArea() {
    const n = this.getLength();
    return n ? n * this.stock.getBladeWidth() : 0;
  }
}
class Mt {
  constructor(e, n, i = null) {
    v(this, "x");
    v(this, "y");
    v(this, "z");
    v(this, "a");
    //shape id
    v(this, "b");
    //shape id
    v(this, "fromDirection");
    v(this, "type");
    v(this, "corner");
    v(this, "grid");
    v(this, "raycast");
    v(this, "collision");
    v(this, "tooClose");
    v(this, "adjustedForMinSpacing");
    this.x = parseFloat(e), this.y = parseFloat(n), this.z = parseFloat(i) || 0, this.validate();
  }
  clone(e = null, n = null) {
    const i = structuredClone(this), r = new Mt(e === null ? i.x : e, n === null ? i.y : n);
    for (const s in i)
      s === "x" || s === "y" || (r[s] = i[s]);
    return r;
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
  //given a grid point, get the available positions for this shape
  //does not cater for diagonals
  getAvailableShapePositions(e) {
    const n = /* @__PURE__ */ new Set();
    return (e == null ? void 0 : e.cutType) !== "efficiency" ? (this.corner === "topLeft" && (this.grid === "top" || !this.grid) && n.add("topRight"), this.corner === "bottomRight" && (this.grid === "right" || !this.grid) && n.add("topRight"), n) : (this.corner === "topRight" && ((this.grid === "top" || !this.grid) && n.add("topLeft"), (this.grid === "right" || !this.grid) && n.add("bottomRight")), this.corner === "topLeft" && ((this.grid === "top" || !this.grid) && n.add("topRight"), (this.grid === "left" || !this.grid) && n.add("bottomLeft")), this.corner === "bottomRight" && ((this.grid === "bottom" || !this.grid) && n.add("bottomLeft"), (this.grid === "right" || !this.grid) && n.add("topRight")), this.corner === "bottomLeft" && ((this.grid === "bottom" || !this.grid) && n.add("bottomRight"), (this.grid === "left" || !this.grid) && n.add("topLeft")), n);
  }
}
class Co {
  constructor(e = []) {
    v(this, "points", /* @__PURE__ */ new Map());
    e.forEach((n) => this.addPoint(n));
  }
  addPoint(e, n = null) {
    if (!(e instanceof Mt))
      throw new Error("p is not an instance of Point");
    if (this.contains(e)) {
      const i = this.getPoint(e);
      i.type === "group" && !n && (i.type = void 0);
      return;
    }
    e.validate(), n && (e.type = n), this.points.set(this.createKey(e), e);
  }
  addPoints(e, n = null) {
    e.forEach((i) => {
      i && (i.validate(), this.addPoint(i, n));
    });
  }
  createKey(e) {
    return `${e.x},${e.y}`;
  }
  getPoint(e) {
    return this.points.get(this.createKey(e));
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
const mn = {
  bottom: (t, e, n) => {
    const i = new Mt(t.x, t.y - n);
    return i.corner = e, i.grid = "bottom", i;
  },
  left: (t, e, n) => {
    const i = new Mt(t.x - n, t.y);
    return i.corner = e, i.grid = "left", i;
  },
  right: (t, e, n) => {
    const i = new Mt(t.x + n, t.y);
    return i.corner = e, i.grid = "right", i;
  },
  top: (t, e, n) => {
    const i = new Mt(t.x, t.y + n);
    return i.corner = e, i.grid = "top", i;
  }
};
function x1(t, e, n, i) {
  var o, a, l, c, u, f;
  const r = new Co();
  if (n.toArray().sort(Hd).forEach((h) => {
    const p = h.corner, y = h.type;
    if (!i)
      r.addPoint(h);
    else
      switch (p) {
        case "topRight":
          r.addPoint(mn.top(h, p, i), y), r.addPoint(mn.right(h, p, i), y);
          break;
        case "topLeft":
          r.addPoint(mn.top(h, p, i), y), r.addPoint(mn.left(h, p, i), y);
          break;
        case "bottomRight":
          r.addPoint(mn.bottom(h, p, i), y), r.addPoint(mn.right(h, p, i), y);
          break;
        case "bottomLeft":
          r.addPoint(mn.bottom(h, p, i), y), r.addPoint(mn.left(h, p, i), y);
          break;
      }
    const S = r.toArray();
    if (i)
      for (let k = S.length; k--; ) {
        const m = S[k];
        n.contains(m) && r.deletePoint(m);
      }
    else
      for (let k = S.length; k--; ) {
        const m = S[k];
        for (let b = t.length; b--; ) {
          const x = t[b];
          if (m.x === x.x && m.y === x.y) {
            r.deletePoint(m);
            break;
          }
        }
      }
  }), i) {
    const h = /* @__PURE__ */ new Set();
    let p, y, S, k;
    ((o = e == null ? void 0 : e.constructor) == null ? void 0 : o.name) === "Stock" && (e != null && e.trimmed) || ((a = e == null ? void 0 : e.constructor) == null ? void 0 : a.name) === "Segment" ? (p = 0, y = 0, S = e.x + e.l, k = e.y + e.w) : (p = (l = e == null ? void 0 : e.trim) == null ? void 0 : l.x1, y = (c = e == null ? void 0 : e.trim) == null ? void 0 : c.y1, S = e.l - ((u = e == null ? void 0 : e.trim) == null ? void 0 : u.x2), k = e.w - ((f = e == null ? void 0 : e.trim) == null ? void 0 : f.y2));
    let m = r.toArray();
    for (let b = m.length; b--; ) {
      const x = m[b];
      (xt.lessThan(x.x, p) || xt.lessThan(x.y, y) || xt.greaterThan(x.x, S) || xt.greaterThan(x.y, k)) && m.splice(b, 1);
    }
    r.clear(), r.addPoints(m), h.clear(), m = r.toArray();
    for (let b = m.length; b--; ) {
      const x = m[b];
      for (let _ = t.length; _--; ) {
        const E = t[_];
        if (x.collidesWith(E)) {
          r.deletePoint(x);
          break;
        }
      }
    }
  }
  return r;
}
function S1(t, e) {
  const n = new Co();
  return t.sort(Hd), t.forEach((i) => {
    Ys(i) ? (n.addPoints(i.getCoords(e)), i.shapes.forEach((r) => {
      const s = r.getCoords(e);
      n.addPoints(s, "group");
    })) : n.addPoints(i.getCoords(e));
  }), n;
}
function k1(t = [], e, n) {
  const i = n.getBladeWidth(), r = S1(t === null ? e : t, n);
  return x1(e, n, r, i);
}
function Hd(t, e) {
  return t.y === e.y ? e.x - t.x : e.y - t.y;
}
function Kr(t, e, n) {
  var o, a;
  if (n.saw.cutType !== "efficiency")
    return t;
  const i = (e == null ? void 0 : e.minSpacing) || ((a = (o = n.saw) == null ? void 0 : o.options) == null ? void 0 : a.minSpacing) || 0;
  if (!i)
    return t;
  const r = n.getBladeWidth();
  let s;
  if (!i || !t.grid)
    return t;
  switch (t.grid) {
    case "bottom":
      s = t.clone(t.x, t.y - i + r);
      break;
    case "top":
      s = t.clone(t.x, t.y + i - r);
      break;
    case "left":
      s = t.clone(t.x - i + r, t.y);
      break;
    case "right":
      s = t.clone(t.x + i - r, t.y);
      break;
  }
  return s.adjustedForMinSpacing = !0, s;
}
function E1(t, e, n) {
  const i = new Co();
  return e.getAvailableShapePositions(n).forEach((s) => {
    switch (s) {
      case "bottomLeft":
        {
          let o = Kr(e, t, n);
          o = o.clone(o.x - t.l, o.y - t.w), i.addPoint(o);
        }
        break;
      case "bottomRight":
        {
          let o = Kr(e, t, n);
          o = o.clone(o.x, o.y - t.w), i.addPoint(o);
        }
        break;
      case "topLeft":
        {
          let o = Kr(e, t, n);
          o = o.clone(o.x - t.l, o.y), i.addPoint(o);
        }
        break;
      case "topRight":
        {
          let o = Kr(e, t, n);
          o = o.clone(o.x, o.y), i.addPoint(o);
        }
        break;
    }
  }), T1(t, n, i), i;
}
function T1(t, e, n) {
  var l, c, u, f, h, p;
  let i, r, s, o;
  ((l = e == null ? void 0 : e.constructor) == null ? void 0 : l.name) === "Stock" && (e != null && e.trimmed) || ((c = e == null ? void 0 : e.constructor) == null ? void 0 : c.name) === "Segment" ? (i = 0, r = 0, s = e.x + e.l - t.l, o = e.y + e.w - t.w) : (i = (u = e == null ? void 0 : e.trim) == null ? void 0 : u.x1, r = (f = e == null ? void 0 : e.trim) == null ? void 0 : f.y1, s = e.l - ((h = e == null ? void 0 : e.trim) == null ? void 0 : h.x2) - t.l, o = e.w - ((p = e == null ? void 0 : e.trim) == null ? void 0 : p.y2) - t.w);
  const a = n.toArray();
  for (let y = a.length; y--; ) {
    const S = a[y];
    (xt.lessThan(S.x, i) || xt.lessThan(S.y, r) || xt.greaterThan(S.x, s) || xt.greaterThan(S.y, o) || S.x < 0 || S.y < 0) && n.deletePoint(S);
  }
}
/**
* @license Fraction.js v4.3.7 31/08/2023
* https://www.xarg.org/2014/03/rational-numbers-in-javascript/
*
* Copyright (c) 2023, Robert Eisele (robert@raw.org)
* Dual licensed under the MIT or GPL Version 2 licenses.
**/
var A1 = 2e3, Y = {
  s: 1,
  n: 0,
  d: 1
};
function Ze(t, e) {
  if (isNaN(t = parseInt(t, 10)))
    throw ks();
  return t * e;
}
function Ot(t, e) {
  if (e === 0)
    throw ql();
  var n = Object.create(Ee.prototype);
  n.s = t < 0 ? -1 : 1, t = t < 0 ? -t : t;
  var i = gi(t, e);
  return n.n = t / i, n.d = e / i, n;
}
function ju(t) {
  for (var e = {}, n = t, i = 2, r = 4; r <= n; ) {
    for (; n % i === 0; )
      n /= i, e[i] = (e[i] || 0) + 1;
    r += 1 + 2 * i++;
  }
  return n !== t ? n > 1 && (e[n] = (e[n] || 0) + 1) : e[t] = (e[t] || 0) + 1, e;
}
var me = function(t, e) {
  var n = 0, i = 1, r = 1, s = 0, o = 0, a = 0, l = 1, c = 1, u = 0, f = 1, h = 1, p = 1, y = 1e7, S;
  if (t != null)
    if (e !== void 0) {
      if (n = t, i = e, r = n * i, n % 1 !== 0 || i % 1 !== 0)
        throw N1();
    } else
      switch (typeof t) {
        case "object": {
          if ("d" in t && "n" in t)
            n = t.n, i = t.d, "s" in t && (n *= t.s);
          else if (0 in t)
            n = t[0], 1 in t && (i = t[1]);
          else
            throw ks();
          r = n * i;
          break;
        }
        case "number": {
          if (t < 0 && (r = t, t = -t), t % 1 === 0)
            n = t;
          else if (t > 0) {
            for (t >= 1 && (c = Math.pow(10, Math.floor(1 + Math.log(t) / Math.LN10)), t /= c); f <= y && p <= y; )
              if (S = (u + h) / (f + p), t === S) {
                f + p <= y ? (n = u + h, i = f + p) : p > f ? (n = h, i = p) : (n = u, i = f);
                break;
              } else
                t > S ? (u += h, f += p) : (h += u, p += f), f > y ? (n = h, i = p) : (n = u, i = f);
            n *= c;
          } else
            (isNaN(t) || isNaN(e)) && (i = n = NaN);
          break;
        }
        case "string": {
          if (f = t.match(/\d+|./g), f === null)
            throw ks();
          if (f[u] === "-" ? (r = -1, u++) : f[u] === "+" && u++, f.length === u + 1 ? o = Ze(f[u++], r) : f[u + 1] === "." || f[u] === "." ? (f[u] !== "." && (s = Ze(f[u++], r)), u++, (u + 1 === f.length || f[u + 1] === "(" && f[u + 3] === ")" || f[u + 1] === "'" && f[u + 3] === "'") && (o = Ze(f[u], r), l = Math.pow(10, f[u].length), u++), (f[u] === "(" && f[u + 2] === ")" || f[u] === "'" && f[u + 2] === "'") && (a = Ze(f[u + 1], r), c = Math.pow(10, f[u + 1].length) - 1, u += 3)) : f[u + 1] === "/" || f[u + 1] === ":" ? (o = Ze(f[u], r), l = Ze(f[u + 2], 1), u += 3) : f[u + 3] === "/" && f[u + 1] === " " && (s = Ze(f[u], r), o = Ze(f[u + 2], r), l = Ze(f[u + 4], 1), u += 5), f.length <= u) {
            i = l * c, r = /* void */
            n = a + i * s + c * o;
            break;
          }
        }
        default:
          throw ks();
      }
  if (i === 0)
    throw ql();
  Y.s = r < 0 ? -1 : 1, Y.n = Math.abs(n), Y.d = Math.abs(i);
};
function C1(t, e, n) {
  for (var i = 1; e > 0; t = t * t % n, e >>= 1)
    e & 1 && (i = i * t % n);
  return i;
}
function O1(t, e) {
  for (; e % 2 === 0; e /= 2)
    ;
  for (; e % 5 === 0; e /= 5)
    ;
  if (e === 1)
    return 0;
  for (var n = 10 % e, i = 1; n !== 1; i++)
    if (n = n * 10 % e, i > A1)
      return 0;
  return i;
}
function P1(t, e, n) {
  for (var i = 1, r = C1(10, n, e), s = 0; s < 300; s++) {
    if (i === r)
      return s;
    i = i * 10 % e, r = r * 10 % e;
  }
  return 0;
}
function gi(t, e) {
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
function Ee(t, e) {
  if (me(t, e), this instanceof Ee)
    t = gi(Y.d, Y.n), this.s = Y.s, this.n = Y.n / t, this.d = Y.d / t;
  else
    return Ot(Y.s * Y.n, Y.d);
}
var ql = function() {
  return new Error("Division by Zero");
}, ks = function() {
  return new Error("Invalid argument");
}, N1 = function() {
  return new Error("Parameters must be integer");
};
Ee.prototype = {
  s: 1,
  n: 0,
  d: 1,
  /**
   * Calculates the absolute value
   *
   * Ex: new Fraction(-4).abs() => 4
   **/
  abs: function() {
    return Ot(this.n, this.d);
  },
  /**
   * Inverts the sign of the current fraction
   *
   * Ex: new Fraction(-4).neg() => 4
   **/
  neg: function() {
    return Ot(-this.s * this.n, this.d);
  },
  /**
   * Adds two rational numbers
   *
   * Ex: new Fraction({n: 2, d: 3}).add("14.9") => 467 / 30
   **/
  add: function(t, e) {
    return me(t, e), Ot(
      this.s * this.n * Y.d + Y.s * this.d * Y.n,
      this.d * Y.d
    );
  },
  /**
   * Subtracts two rational numbers
   *
   * Ex: new Fraction({n: 2, d: 3}).add("14.9") => -427 / 30
   **/
  sub: function(t, e) {
    return me(t, e), Ot(
      this.s * this.n * Y.d - Y.s * this.d * Y.n,
      this.d * Y.d
    );
  },
  /**
   * Multiplies two rational numbers
   *
   * Ex: new Fraction("-17.(345)").mul(3) => 5776 / 111
   **/
  mul: function(t, e) {
    return me(t, e), Ot(
      this.s * Y.s * this.n * Y.n,
      this.d * Y.d
    );
  },
  /**
   * Divides two rational numbers
   *
   * Ex: new Fraction("-17.(345)").inverse().div(3)
   **/
  div: function(t, e) {
    return me(t, e), Ot(
      this.s * Y.s * this.n * Y.d,
      this.d * Y.n
    );
  },
  /**
   * Clones the actual object
   *
   * Ex: new Fraction("-17.(345)").clone()
   **/
  clone: function() {
    return Ot(this.s * this.n, this.d);
  },
  /**
   * Calculates the modulo of two rational numbers - a more precise fmod
   *
   * Ex: new Fraction('4.(3)').mod([7, 8]) => (13/3) % (7/8) = (5/6)
   **/
  mod: function(t, e) {
    if (isNaN(this.n) || isNaN(this.d))
      return new Ee(NaN);
    if (t === void 0)
      return Ot(this.s * this.n % this.d, 1);
    if (me(t, e), Y.n === 0 && this.d === 0)
      throw ql();
    return Ot(
      this.s * (Y.d * this.n) % (Y.n * this.d),
      Y.d * this.d
    );
  },
  /**
   * Calculates the fractional gcd of two rational numbers
   *
   * Ex: new Fraction(5,8).gcd(3,7) => 1/56
   */
  gcd: function(t, e) {
    return me(t, e), Ot(gi(Y.n, this.n) * gi(Y.d, this.d), Y.d * this.d);
  },
  /**
   * Calculates the fractional lcm of two rational numbers
   *
   * Ex: new Fraction(5,8).lcm(3,7) => 15
   */
  lcm: function(t, e) {
    return me(t, e), Y.n === 0 && this.n === 0 ? Ot(0, 1) : Ot(Y.n * this.n, gi(Y.n, this.n) * gi(Y.d, this.d));
  },
  /**
   * Calculates the ceil of a rational number
   *
   * Ex: new Fraction('4.(3)').ceil() => (5 / 1)
   **/
  ceil: function(t) {
    return t = Math.pow(10, t || 0), isNaN(this.n) || isNaN(this.d) ? new Ee(NaN) : Ot(Math.ceil(t * this.s * this.n / this.d), t);
  },
  /**
   * Calculates the floor of a rational number
   *
   * Ex: new Fraction('4.(3)').floor() => (4 / 1)
   **/
  floor: function(t) {
    return t = Math.pow(10, t || 0), isNaN(this.n) || isNaN(this.d) ? new Ee(NaN) : Ot(Math.floor(t * this.s * this.n / this.d), t);
  },
  /**
   * Rounds a rational number
   *
   * Ex: new Fraction('4.(3)').round() => (4 / 1)
   **/
  round: function(t) {
    return t = Math.pow(10, t || 0), isNaN(this.n) || isNaN(this.d) ? new Ee(NaN) : Ot(Math.round(t * this.s * this.n / this.d), t);
  },
  /**
   * Rounds a rational number to a multiple of another rational number
   *
   * Ex: new Fraction('0.9').roundTo("1/8") => 7 / 8
   **/
  roundTo: function(t, e) {
    return me(t, e), Ot(this.s * Math.round(this.n * Y.d / (this.d * Y.n)) * Y.n, Y.d);
  },
  /**
   * Gets the inverse of the fraction, means numerator and denominator are exchanged
   *
   * Ex: new Fraction([-3, 4]).inverse() => -4 / 3
   **/
  inverse: function() {
    return Ot(this.s * this.d, this.n);
  },
  /**
   * Calculates the fraction to some rational exponent, if possible
   *
   * Ex: new Fraction(-1,2).pow(-3) => -8
   */
  pow: function(t, e) {
    if (me(t, e), Y.d === 1)
      return Y.s < 0 ? Ot(Math.pow(this.s * this.d, Y.n), Math.pow(this.n, Y.n)) : Ot(Math.pow(this.s * this.n, Y.n), Math.pow(this.d, Y.n));
    if (this.s < 0)
      return null;
    var n = ju(this.n), i = ju(this.d), r = 1, s = 1;
    for (var o in n)
      if (o !== "1") {
        if (o === "0") {
          r = 0;
          break;
        }
        if (n[o] *= Y.n, n[o] % Y.d === 0)
          n[o] /= Y.d;
        else
          return null;
        r *= Math.pow(o, n[o]);
      }
    for (var o in i)
      if (o !== "1") {
        if (i[o] *= Y.n, i[o] % Y.d === 0)
          i[o] /= Y.d;
        else
          return null;
        s *= Math.pow(o, i[o]);
      }
    return Y.s < 0 ? Ot(s, r) : Ot(r, s);
  },
  /**
   * Check if two rational numbers are the same
   *
   * Ex: new Fraction(19.6).equals([98, 5]);
   **/
  equals: function(t, e) {
    return me(t, e), this.s * this.n * Y.d === Y.s * Y.n * this.d;
  },
  /**
   * Check if two rational numbers are the same
   *
   * Ex: new Fraction(19.6).equals([98, 5]);
   **/
  compare: function(t, e) {
    me(t, e);
    var n = this.s * this.n * Y.d - Y.s * Y.n * this.d;
    return (0 < n) - (n < 0);
  },
  simplify: function(t) {
    if (isNaN(this.n) || isNaN(this.d))
      return this;
    t = t || 1e-3;
    for (var e = this.abs(), n = e.toContinued(), i = 1; i < n.length; i++) {
      for (var r = Ot(n[i - 1], 1), s = i - 2; s >= 0; s--)
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
    return me(t, e), !(!(Y.n * this.d) || this.n * Y.d % (Y.n * this.d));
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
    var i = O1(e, n), r = P1(e, n, i), s = this.s < 0 ? "-" : "";
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
function I1(t) {
  if (!t)
    return null;
  if (t = t.toString().trim(), typeof navigator > "u" || typeof navigator.language > "u")
    return parseFloat(t);
  const { thousandsSeparator: e, decimalSeparator: n } = L1();
  return t = Array.from(t, (i) => i === e ? "" : i === n ? "." : i).join(""), parseFloat(t);
}
function L1() {
  const t = navigator.language, e = 123456789e-2.toLocaleString(t), n = e.replace(/\d/g, ""), i = Array.from(new Set(n.split("")));
  let r = "", s = "";
  if (i.length === 1)
    s = i[0];
  else if (i.length === 2) {
    const o = e[e.length - 3];
    i.includes(o) ? (s = o, r = i.find((a) => a !== o)) : (s = i[1], r = i[0]);
  }
  return { thousandsSeparator: r, decimalSeparator: s };
}
function Wd(t) {
  if (!t || typeof t == "number")
    return !1;
  t = t.toString().replace(/[^0-9/ ]/g, "");
  const e = /\b\d+\/\d+\b/g;
  return t.match(e);
}
function M1(t, e = !1) {
  if (!A(t))
    return null;
  if (t === 0)
    return "0";
  let n = t.toString().trim();
  if (!n)
    return null;
  if (Wd(t))
    return n = n.replace(/[^0-9/,. - ]/g, ""), n;
  {
    n = n.replace(/[^0-9,. -]/g, ""), n.startsWith(".") && (n = "0" + n);
    let i;
    return e ? i = I1(n) : i = parseFloat(n), i ? i.toString() : null;
  }
}
function $(t, e = "decimal", n = !1, i = !1, r = 0) {
  if (!A(t) || !e)
    return null;
  if (e !== "decimal" && e !== "fraction")
    return console.error("incorrect conversion type specified for convertUnit"), null;
  try {
    const s = M1(t, i);
    if (!s)
      return 0;
    let o;
    if (e === "fraction")
      if (Wd(s))
        o = new Ee(s);
      else {
        const a = parseFloat(s);
        Number.isInteger(a) ? o = new Ee(s) : o = new Ee(a);
      }
    else
      o = new Ee(s);
    switch (e) {
      case "fraction":
        if (r > 0) {
          const a = o.valueOf(), l = Math.round(a * r) / r;
          o = new Ee(l);
        }
        return o.toFraction(!0);
      case "decimal":
        return n === !1 || typeof n != "number" ? o.valueOf() : parseFloat(parseFloat(o.round(10)).toFixed(n));
      default:
        return 0;
    }
  } catch (s) {
    return console.error(s), 0;
  }
}
const ne = {
  banding: (t) => {
    const e = [];
    if (!A(t))
      return [];
    if (typeof t != "object")
      return e.push("Banding must be an object."), e;
    Object.entries(t).forEach(([n, i]) => {
      A(i) && i !== !0 && i !== !1 && e.push(`Banding ${n} must be a boolean.`);
    });
  },
  //when trim provided as number
  partTrim(t, e) {
    e = $(e);
    const n = $(t.l), i = $(t.w), r = n - e * 2, s = i - e * 2;
    return r < 0 || s < 0 ? [
      `When applying trim of ${e}, part is ${r} x ${s}.`
    ] : [];
  },
  //when trim provided as object
  trim: (t) => {
    const e = [];
    if (!A(t.trim))
      return e;
    if (["x1", "x2", "y1", "y2"].forEach((n) => {
      A(t.trim[n]) || (t.trim[n] = 0);
    }), !br(t) || br(t) && !(t != null && t.trimmed)) {
      const n = $(t.l), i = $(t.w), r = $(t.trim.x1), s = $(t.trim.x2), o = $(t.trim.y1), a = $(t.trim.y2);
      Object.entries({ x1: r, x2: s, y1: o, y2: a }).forEach(([c, u]) => {
        isNaN(u) && e.push(`The value of trim ${pw[c]} is not understood.`);
      }), n && i && n > 0 && i > 0 && (r + s >= t.l && e.push(`Trim W1 + W2 = ${r + s}, which is greater than or equal to total length of ${n}.`), a + a >= t.w && e.push(`Trim L1 + L2 = ${o + a}, which is greater than or equal to total width of ${i}.`));
    }
    return e;
  },
  x: (t) => {
    const e = [];
    return A(t) ? (t = $(t), isNaN(t) ? (e.push("X value is not understood."), e) : (t < 0 && e.push("X must be greater than or equal to zero."), e)) : e;
  },
  y: (t) => {
    const e = [];
    return A(t) && (t = $(t), isNaN(t) && e.push("Y value is not understood."), t < 0 && e.push("Y must be greater than or equal to zero.")), e;
  },
  l: (t) => {
    const e = [];
    return A(t) ? (t = $(t), isNaN(t) ? (e.push("Width value is not understood."), e) : (t <= 0 && e.push("Length must be greater than zero."), e)) : (e.push("Length is required."), e);
  },
  w: (t) => {
    const e = [];
    return A(t) ? (t = $(t), isNaN(t) ? (e.push("Width value is not understood."), e) : (t <= 0 && e.push("Width must be greater than zero."), e)) : (e.push("Width is required."), e);
  },
  t: (t) => {
    const e = [];
    return A(t) ? (t = $(t), isNaN(t) ? (e.push("Thickness value is not understood."), e) : (t <= 0 && e.push("Thickness must be greater than zero."), e)) : e;
  },
  q: (t) => {
    const e = [];
    return A(t) ? (t = parseInt(t), isNaN(t) ? (e.push("Quantity value is not understood."), e) : (t <= 0 && e.push("Quantity should be greater than or equal to zero."), e)) : e;
  },
  orientationLock: (t) => {
    const e = [];
    return A(t) && (t = t.toLowerCase(), t !== "l" && t !== "w" && e.push("Orientation lock must be l or w.")), e;
  },
  grain: (t) => {
    const e = [];
    return A(t) && (t = t.toLowerCase(), t !== "l" && t !== "w" && e.push("Grain must be l or w.")), e;
  },
  stockMatch: (t, e, n = 0) => {
    if (!t.q)
      return [];
    t.applyPartTrim(n);
    const i = xw([t], e);
    if (!i)
      return [];
    const r = [];
    if (i.unusableShapes.length) {
      const o = i.unusableShapes[0].stockMatch;
      o.fit || r.push("Cannot fit in any stock."), o.material || r.push("No matching stock material found."), o.thickness || r.push("No matching stock thickness found."), o.width || r.push("No matching stock width found (required for linear calculations).");
    }
    return r;
  },
  machining: (t) => {
    t.machining.validateEverything(t);
  }
};
var Vd = typeof global == "object" && global && global.Object === Object && global, R1 = typeof self == "object" && self && self.Object === Object && self, Ui = Vd || R1 || Function("return this")(), zs = Ui.Symbol, jd = Object.prototype, D1 = jd.hasOwnProperty, $1 = jd.toString, Ki = zs ? zs.toStringTag : void 0;
function F1(t) {
  var e = D1.call(t, Ki), n = t[Ki];
  try {
    t[Ki] = void 0;
    var i = !0;
  } catch {
  }
  var r = $1.call(t);
  return i && (e ? t[Ki] = n : delete t[Ki]), r;
}
var B1 = Object.prototype, U1 = B1.toString;
function q1(t) {
  return U1.call(t);
}
var H1 = "[object Null]", W1 = "[object Undefined]", zu = zs ? zs.toStringTag : void 0;
function Oo(t) {
  return t == null ? t === void 0 ? W1 : H1 : zu && zu in Object(t) ? F1(t) : q1(t);
}
function Ir(t) {
  return t != null && typeof t == "object";
}
var La = Array.isArray;
function ai(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
function zd(t) {
  return t;
}
var V1 = "[object AsyncFunction]", j1 = "[object Function]", z1 = "[object GeneratorFunction]", G1 = "[object Proxy]";
function Hl(t) {
  if (!ai(t))
    return !1;
  var e = Oo(t);
  return e == j1 || e == z1 || e == V1 || e == G1;
}
var Qo = Ui["__core-js_shared__"], Gu = function() {
  var t = /[^.]+$/.exec(Qo && Qo.keys && Qo.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Y1(t) {
  return !!Gu && Gu in t;
}
var K1 = Function.prototype, X1 = K1.toString;
function J1(t) {
  if (t != null) {
    try {
      return X1.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Q1 = /[\\^$.*+?()[\]{}|]/g, Z1 = /^\[object .+?Constructor\]$/, tv = Function.prototype, ev = Object.prototype, nv = tv.toString, iv = ev.hasOwnProperty, rv = RegExp(
  "^" + nv.call(iv).replace(Q1, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function sv(t) {
  if (!ai(t) || Y1(t))
    return !1;
  var e = Hl(t) ? rv : Z1;
  return e.test(J1(t));
}
function ov(t, e) {
  return t == null ? void 0 : t[e];
}
function Wl(t, e) {
  var n = ov(t, e);
  return sv(n) ? n : void 0;
}
var Yu = Object.create, av = /* @__PURE__ */ function() {
  function t() {
  }
  return function(e) {
    if (!ai(e))
      return {};
    if (Yu)
      return Yu(e);
    t.prototype = e;
    var n = new t();
    return t.prototype = void 0, n;
  };
}();
function lv(t, e, n) {
  switch (n.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, n[0]);
    case 2:
      return t.call(e, n[0], n[1]);
    case 3:
      return t.call(e, n[0], n[1], n[2]);
  }
  return t.apply(e, n);
}
function cv(t, e) {
  var n = -1, i = t.length;
  for (e || (e = Array(i)); ++n < i; )
    e[n] = t[n];
  return e;
}
var uv = 800, fv = 16, hv = Date.now;
function dv(t) {
  var e = 0, n = 0;
  return function() {
    var i = hv(), r = fv - (i - n);
    if (n = i, r > 0) {
      if (++e >= uv)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function pv(t) {
  return function() {
    return t;
  };
}
var Gs = function() {
  try {
    var t = Wl(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), gv = Gs ? function(t, e) {
  return Gs(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: pv(e),
    writable: !0
  });
} : zd;
const mv = gv;
var yv = dv(mv), bv = 9007199254740991, vv = /^(?:0|[1-9]\d*)$/;
function Gd(t, e) {
  var n = typeof t;
  return e = e ?? bv, !!e && (n == "number" || n != "symbol" && vv.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function Vl(t, e, n) {
  e == "__proto__" && Gs ? Gs(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function Po(t, e) {
  return t === e || t !== t && e !== e;
}
var _v = Object.prototype, wv = _v.hasOwnProperty;
function xv(t, e, n) {
  var i = t[e];
  (!(wv.call(t, e) && Po(i, n)) || n === void 0 && !(e in t)) && Vl(t, e, n);
}
function Sv(t, e, n, i) {
  var r = !n;
  n || (n = {});
  for (var s = -1, o = e.length; ++s < o; ) {
    var a = e[s], l = i ? i(n[a], t[a], a, n, t) : void 0;
    l === void 0 && (l = t[a]), r ? Vl(n, a, l) : xv(n, a, l);
  }
  return n;
}
var Ku = Math.max;
function kv(t, e, n) {
  return e = Ku(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var i = arguments, r = -1, s = Ku(i.length - e, 0), o = Array(s); ++r < s; )
      o[r] = i[e + r];
    r = -1;
    for (var a = Array(e + 1); ++r < e; )
      a[r] = i[r];
    return a[e] = n(o), lv(t, this, a);
  };
}
function Ev(t, e) {
  return yv(kv(t, e, zd), t + "");
}
var Tv = 9007199254740991;
function Yd(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Tv;
}
function jl(t) {
  return t != null && Yd(t.length) && !Hl(t);
}
function Av(t, e, n) {
  if (!ai(n))
    return !1;
  var i = typeof e;
  return (i == "number" ? jl(n) && Gd(e, n.length) : i == "string" && e in n) ? Po(n[e], t) : !1;
}
function Cv(t) {
  return Ev(function(e, n) {
    var i = -1, r = n.length, s = r > 1 ? n[r - 1] : void 0, o = r > 2 ? n[2] : void 0;
    for (s = t.length > 3 && typeof s == "function" ? (r--, s) : void 0, o && Av(n[0], n[1], o) && (s = r < 3 ? void 0 : s, r = 1), e = Object(e); ++i < r; ) {
      var a = n[i];
      a && t(e, a, i, s);
    }
    return e;
  });
}
var Ov = Object.prototype;
function Kd(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || Ov;
  return t === n;
}
function Pv(t, e) {
  for (var n = -1, i = Array(t); ++n < t; )
    i[n] = e(n);
  return i;
}
var Nv = "[object Arguments]";
function Xu(t) {
  return Ir(t) && Oo(t) == Nv;
}
var Xd = Object.prototype, Iv = Xd.hasOwnProperty, Lv = Xd.propertyIsEnumerable, Mv = Xu(/* @__PURE__ */ function() {
  return arguments;
}()) ? Xu : function(t) {
  return Ir(t) && Iv.call(t, "callee") && !Lv.call(t, "callee");
};
const Ma = Mv;
function Rv() {
  return !1;
}
var Jd = typeof exports == "object" && exports && !exports.nodeType && exports, Ju = Jd && typeof module == "object" && module && !module.nodeType && module, Dv = Ju && Ju.exports === Jd, Qu = Dv ? Ui.Buffer : void 0, $v = Qu ? Qu.isBuffer : void 0, Qd = $v || Rv, Fv = "[object Arguments]", Bv = "[object Array]", Uv = "[object Boolean]", qv = "[object Date]", Hv = "[object Error]", Wv = "[object Function]", Vv = "[object Map]", jv = "[object Number]", zv = "[object Object]", Gv = "[object RegExp]", Yv = "[object Set]", Kv = "[object String]", Xv = "[object WeakMap]", Jv = "[object ArrayBuffer]", Qv = "[object DataView]", Zv = "[object Float32Array]", t_ = "[object Float64Array]", e_ = "[object Int8Array]", n_ = "[object Int16Array]", i_ = "[object Int32Array]", r_ = "[object Uint8Array]", s_ = "[object Uint8ClampedArray]", o_ = "[object Uint16Array]", a_ = "[object Uint32Array]", kt = {};
kt[Zv] = kt[t_] = kt[e_] = kt[n_] = kt[i_] = kt[r_] = kt[s_] = kt[o_] = kt[a_] = !0;
kt[Fv] = kt[Bv] = kt[Jv] = kt[Uv] = kt[Qv] = kt[qv] = kt[Hv] = kt[Wv] = kt[Vv] = kt[jv] = kt[zv] = kt[Gv] = kt[Yv] = kt[Kv] = kt[Xv] = !1;
function l_(t) {
  return Ir(t) && Yd(t.length) && !!kt[Oo(t)];
}
function c_(t) {
  return function(e) {
    return t(e);
  };
}
var Zd = typeof exports == "object" && exports && !exports.nodeType && exports, ar = Zd && typeof module == "object" && module && !module.nodeType && module, u_ = ar && ar.exports === Zd, Zo = u_ && Vd.process, Zu = function() {
  try {
    var t = ar && ar.require && ar.require("util").types;
    return t || Zo && Zo.binding && Zo.binding("util");
  } catch {
  }
}(), tf = Zu && Zu.isTypedArray, tp = tf ? c_(tf) : l_, f_ = Object.prototype, h_ = f_.hasOwnProperty;
function d_(t, e) {
  var n = La(t), i = !n && Ma(t), r = !n && !i && Qd(t), s = !n && !i && !r && tp(t), o = n || i || r || s, a = o ? Pv(t.length, String) : [], l = a.length;
  for (var c in t)
    (e || h_.call(t, c)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Gd(c, l))) && a.push(c);
  return a;
}
function p_(t, e) {
  return function(n) {
    return t(e(n));
  };
}
function g_(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var m_ = Object.prototype, y_ = m_.hasOwnProperty;
function b_(t) {
  if (!ai(t))
    return g_(t);
  var e = Kd(t), n = [];
  for (var i in t)
    i == "constructor" && (e || !y_.call(t, i)) || n.push(i);
  return n;
}
function ep(t) {
  return jl(t) ? d_(t, !0) : b_(t);
}
var yr = Wl(Object, "create");
function v_() {
  this.__data__ = yr ? yr(null) : {}, this.size = 0;
}
function __(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var w_ = "__lodash_hash_undefined__", x_ = Object.prototype, S_ = x_.hasOwnProperty;
function k_(t) {
  var e = this.__data__;
  if (yr) {
    var n = e[t];
    return n === w_ ? void 0 : n;
  }
  return S_.call(e, t) ? e[t] : void 0;
}
var E_ = Object.prototype, T_ = E_.hasOwnProperty;
function A_(t) {
  var e = this.__data__;
  return yr ? e[t] !== void 0 : T_.call(e, t);
}
var C_ = "__lodash_hash_undefined__";
function O_(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = yr && e === void 0 ? C_ : e, this;
}
function ti(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
ti.prototype.clear = v_;
ti.prototype.delete = __;
ti.prototype.get = k_;
ti.prototype.has = A_;
ti.prototype.set = O_;
function P_() {
  this.__data__ = [], this.size = 0;
}
function No(t, e) {
  for (var n = t.length; n--; )
    if (Po(t[n][0], e))
      return n;
  return -1;
}
var N_ = Array.prototype, I_ = N_.splice;
function L_(t) {
  var e = this.__data__, n = No(e, t);
  if (n < 0)
    return !1;
  var i = e.length - 1;
  return n == i ? e.pop() : I_.call(e, n, 1), --this.size, !0;
}
function M_(t) {
  var e = this.__data__, n = No(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function R_(t) {
  return No(this.__data__, t) > -1;
}
function D_(t, e) {
  var n = this.__data__, i = No(n, t);
  return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this;
}
function hn(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
hn.prototype.clear = P_;
hn.prototype.delete = L_;
hn.prototype.get = M_;
hn.prototype.has = R_;
hn.prototype.set = D_;
var np = Wl(Ui, "Map");
function $_() {
  this.size = 0, this.__data__ = {
    hash: new ti(),
    map: new (np || hn)(),
    string: new ti()
  };
}
function F_(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Io(t, e) {
  var n = t.__data__;
  return F_(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function B_(t) {
  var e = Io(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function U_(t) {
  return Io(this, t).get(t);
}
function q_(t) {
  return Io(this, t).has(t);
}
function H_(t, e) {
  var n = Io(this, t), i = n.size;
  return n.set(t, e), this.size += n.size == i ? 0 : 1, this;
}
function qi(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
qi.prototype.clear = $_;
qi.prototype.delete = B_;
qi.prototype.get = U_;
qi.prototype.has = q_;
qi.prototype.set = H_;
var ip = p_(Object.getPrototypeOf, Object), W_ = "[object Object]", V_ = Function.prototype, j_ = Object.prototype, rp = V_.toString, z_ = j_.hasOwnProperty, G_ = rp.call(Object);
function Y_(t) {
  if (!Ir(t) || Oo(t) != W_)
    return !1;
  var e = ip(t);
  if (e === null)
    return !0;
  var n = z_.call(e, "constructor") && e.constructor;
  return typeof n == "function" && n instanceof n && rp.call(n) == G_;
}
function K_() {
  this.__data__ = new hn(), this.size = 0;
}
function X_(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function J_(t) {
  return this.__data__.get(t);
}
function Q_(t) {
  return this.__data__.has(t);
}
var Z_ = 200;
function tw(t, e) {
  var n = this.__data__;
  if (n instanceof hn) {
    var i = n.__data__;
    if (!np || i.length < Z_ - 1)
      return i.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new qi(i);
  }
  return n.set(t, e), this.size = n.size, this;
}
function Hi(t) {
  var e = this.__data__ = new hn(t);
  this.size = e.size;
}
Hi.prototype.clear = K_;
Hi.prototype.delete = X_;
Hi.prototype.get = J_;
Hi.prototype.has = Q_;
Hi.prototype.set = tw;
var sp = typeof exports == "object" && exports && !exports.nodeType && exports, ef = sp && typeof module == "object" && module && !module.nodeType && module, ew = ef && ef.exports === sp, nf = ew ? Ui.Buffer : void 0, rf = nf ? nf.allocUnsafe : void 0;
function nw(t, e) {
  if (e)
    return t.slice();
  var n = t.length, i = rf ? rf(n) : new t.constructor(n);
  return t.copy(i), i;
}
var sf = Ui.Uint8Array;
function iw(t) {
  var e = new t.constructor(t.byteLength);
  return new sf(e).set(new sf(t)), e;
}
function rw(t, e) {
  var n = e ? iw(t.buffer) : t.buffer;
  return new t.constructor(n, t.byteOffset, t.length);
}
function sw(t) {
  return typeof t.constructor == "function" && !Kd(t) ? av(ip(t)) : {};
}
function ow(t) {
  return function(e, n, i) {
    for (var r = -1, s = Object(e), o = i(e), a = o.length; a--; ) {
      var l = o[t ? a : ++r];
      if (n(s[l], l, s) === !1)
        break;
    }
    return e;
  };
}
var aw = ow();
function Ra(t, e, n) {
  (n !== void 0 && !Po(t[e], n) || n === void 0 && !(e in t)) && Vl(t, e, n);
}
function lw(t) {
  return Ir(t) && jl(t);
}
function Da(t, e) {
  if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__")
    return t[e];
}
function cw(t) {
  return Sv(t, ep(t));
}
function uw(t, e, n, i, r, s, o) {
  var a = Da(t, n), l = Da(e, n), c = o.get(l);
  if (c) {
    Ra(t, n, c);
    return;
  }
  var u = s ? s(a, l, n + "", t, e, o) : void 0, f = u === void 0;
  if (f) {
    var h = La(l), p = !h && Qd(l), y = !h && !p && tp(l);
    u = l, h || p || y ? La(a) ? u = a : lw(a) ? u = cv(a) : p ? (f = !1, u = nw(l, !0)) : y ? (f = !1, u = rw(l, !0)) : u = [] : Y_(l) || Ma(l) ? (u = a, Ma(a) ? u = cw(a) : (!ai(a) || Hl(a)) && (u = sw(l))) : f = !1;
  }
  f && (o.set(l, u), r(u, l, i, s, o), o.delete(l)), Ra(t, n, u);
}
function op(t, e, n, i, r) {
  t !== e && aw(e, function(s, o) {
    if (r || (r = new Hi()), ai(s))
      uw(t, e, o, n, op, i, r);
    else {
      var a = i ? i(Da(t, o), s, o + "", t, e, r) : void 0;
      a === void 0 && (a = s), Ra(t, o, a);
    }
  }, ep);
}
var fw = Cv(function(t, e, n) {
  op(t, e, n);
});
class $a {
  constructor({ x: e, y: n, diameter: i, depth: r = 0, side: s = 0, type: o = null }) {
    v(this, "x");
    v(this, "y");
    v(this, "diameter");
    v(this, "depth");
    v(this, "side");
    v(this, "valid");
    v(this, "type");
    this.x = e, this.y = n, this.diameter = i, this.depth = r, this.side = s, this.type = o;
  }
  getXDrawPosition(e) {
    let n = 0;
    const i = $(this.x);
    if (e.rot) {
      const r = $(this.y);
      n = e.l - r + ("x" in e ? e.x : 0);
    } else
      n = i + ("x" in e ? e.x : 0);
    return n;
  }
  getYDrawPosition(e, n, i) {
    let r = e.rot ? $(this.x) : $(this.y);
    return r += "y" in e ? e.y : 0, n === 1 && i && (r = i.w - r), r;
  }
  shouldShow(e, n) {
    return this.side === n || this.depth === 0 || $(this.depth) >= $(e.t);
  }
  getDistanceToEdge(e) {
    const n = this.x, i = this.y, r = this.diameter / 2, s = $(e.getLongSide()), o = $(e.getShortSide()), a = e.machining.corners.map((y) => y.type ? y.size : 0), l = [
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
    ], c = e.machining.corners.map((y, S) => {
      const k = S === 0 || S === 3, m = S < 2, b = k ? n : s - n;
      let x = null;
      this.side === 0 ? x = m ? i : o - i : this.side === 1 && (x = m ? o - i : i);
      const _ = Math.sqrt(b * b + x * x);
      return {
        c: y,
        distance: _
      };
    }), u = Math.min(...l.map((y) => y.distance)), f = Math.min(...c.map((y) => y.distance)), h = c.findIndex((y) => y.distance === f), p = e.machining.corners[h];
    if (p && p.type === "radius") {
      let y = h === 0 || h === 3 ? 0 : s, S = h < 2 ? 0 : o;
      const k = h < 2;
      y += h === 0 || h === 3 ? a[h] : -a[h], S += k ? a[h] : -a[h];
      const b = n - y, x = h < 2;
      let _;
      this.side === 0 ? _ = x ? i : o - i : this.side === 1 && (_ = x ? o - i : i);
      const E = _ - S, P = Math.sqrt(b * b + E * E), L = a[h] - P - r;
      let W = !1;
      return p.index === 0 ? W = n <= y && _ <= S : p.index === 1 ? W = n >= y && _ <= S : p.index === 2 ? W = n >= y && _ >= S : p.index === 3 && (W = n <= y && _ >= S), W && L < u ? L : u;
    } else if (p && p.type === "bevel") {
      let y, S, k;
      p.index === 0 ? (y = 1, S = 1, k = -p.size) : p.index === 1 ? (y = 1, S = -1, k = -s + p.size) : p.index === 2 ? (y = 1, S = 1, k = -s - o + p.size) : p.index === 3 && (y = -1, S = 1, k = -o + p.size);
      const m = p.index === 0 ? 1 : -1, b = (y * n + S * i + k) / Math.sqrt(y * y + S * S) * m - r;
      return b < u ? b : u;
    } else
      return u;
  }
  validate(e, n) {
    const i = [];
    return (!this.x || !this.y || !this.diameter) && i.push({
      index: n,
      message: "X, Y & diameter are all required."
    }), $(this.depth) < 0 && i.push({
      index: n,
      message: "Depth cannot be negative."
    }), "t" in e && $(e.t) > 0 && $(this.depth) > $(e.t) && i.push({
      index: n,
      message: "Depth cannot be greater than part thickness."
    }), (!("t" in e) || !e.t) && $(this.depth) > 0 && i.push({
      index: n,
      message: "Part thickness is not defined."
    }), this.getDistanceToEdge(e) < 0 && i.push({
      index: n,
      message: "Outside of part."
    }), i.length ? this.valid = !1 : this.valid = !0, i;
  }
}
class of {
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
    v(this, "position");
    v(this, "edge");
    v(this, "side");
    v(this, "numHoles");
    v(this, "holes", []);
    v(this, "diameter");
    v(this, "depth");
    v(this, "distanceFromEdge");
    v(this, "outerSpacing");
    v(this, "hingeLength");
    v(this, "minimumHoleDistance");
    v(this, "positionLimit");
    v(this, "valid");
    this.position = e, this.edge = n, this.side = i, this.numHoles = r, this.diameter = s, this.depth = o, this.distanceFromEdge = a, this.outerSpacing = l, this.hingeLength = c, this.minimumHoleDistance = u, this.positionLimit = f, h && this.createHoles(h);
  }
  getHoleSpacing() {
    const e = $(this.hingeLength) - $(this.outerSpacing) * 2, n = this.numHoles - 1;
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
        i = e.getLongSide() - $(this.distanceFromEdge);
        break;
      case "y1":
      case "y2":
        i = $(this.position) + $(this.outerSpacing) + r * n;
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
        i = $(this.position) + $(this.outerSpacing) + r * n;
        break;
      case "y1":
        i = $(this.distanceFromEdge);
        break;
      case "y2":
        i = e.getShortSide() - $(this.distanceFromEdge);
        break;
    }
    return i;
  }
  createHoles(e) {
    this.holes = [];
    for (let n = 0; n < this.numHoles; n++) {
      const i = new $a({
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
class af {
  constructor({ type: e = "radius", size: n, index: i }) {
    v(this, "type");
    v(this, "size");
    v(this, "index");
    v(this, "valid");
    this.type = e, this.size = n, this.index = i;
  }
  validate(e, n) {
    const i = e.getShortSide(), r = [];
    if (this.type === null) {
      this.size = null;
      const s = ["a", "b", "c", "d"][this.index];
      e.banding[s] = !1, e.bandingType[s] = "";
    }
    return this.type && $(this.size) <= 0 && r.push({
      index: n,
      message: "Corner size cannot be zero or negative"
    }), this.type && $(this.size) > i / 2 && (this.size = i / 2), r.length ? this.valid = !1 : this.valid = !0, r;
  }
}
let ap = class {
  //shelfHoles?: ShelfHoles[] = [];
  constructor({ holes: e = [], hingeHoles: n = [], corners: i = [] } = {}) {
    v(this, "holes", []);
    v(this, "corners", []);
    v(this, "hingeHoles", []);
    i && i.length === 4 ? this.corners = i.map((r) => new af(r)) : [0, 1, 2, 3].forEach((r) => {
      this.corners.push(new af({
        type: null,
        size: null,
        index: r
      }));
    }), e && (this.holes = e.map((r) => new $a(r))), n && (this.hingeHoles = n.map((r) => new of(r)));
  }
  validateEverything(e) {
    const n = this.validate(e, "holes"), i = this.validate(e, "hingeHoles"), r = this.validate(e, "corners");
    e.issues.push(...n.map((s) => Es(e) ? `Part ${e.id} hole issue: ${s.message}` : `Hole issue: ${s.message}`)), e.issues.push(...i.map((s) => Es(e) ? `Part ${e.id} hinge hole issue: ${s.message}` : `Hinge hole issue: ${s.message}`)), e.issues.push(...r.map((s) => Es(e) ? `Part ${e.id} corner issue: ${s.message}` : `Corner issue: ${s.message}`));
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
    const o = new $a({
      x: e,
      y: n,
      diameter: i,
      depth: r,
      side: s
    });
    return this.holes.push(o), o;
  }
  createHingeHoles({ numHoles: e, position: n, diameter: i, depth: r = 0, edge: s = "x1", side: o = 0, distanceFromEdge: a = 0, outerSpacing: l = 0, minimumHoleDistance: c = 0, hingeLength: u = 0 }) {
    const f = new of({
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
function lf(t, e) {
  t != null && t.length && t.forEach((n) => hw(n, e));
}
function hw(t, e) {
  if (!t.isSquare()) {
    if (t.getShortSide() === e.w && t.rot) {
      if (!t.setRotation(0, e))
        throw new Error("could not rotate shape correctly for subset calculation");
    } else if (!e.isSquare() && t.getLongSide() === e.w && !t.rot && !t.setRotation(1, e))
      throw new Error("could not rotate shape correctly for subset calculation");
  }
}
function dw(t, e, n = null, i = "l", r = !0, s = !0) {
  if (!(t != null && t.length))
    return;
  if (!e)
    throw new Error("positionShapes requires stock");
  const o = i === "l" ? "x" : "y", a = i === "l" ? "y" : "x";
  let l = 0;
  Ys(n) || hp(n) ? lf(t, n) : lf(t, n ?? e), s && (i === "l" ? t.sort(js.LDIDA) : t.sort(js.WDIDA)), t.forEach((c, u) => {
    c[o] = n ? n[o] + l : l, n && (c[a] = n[a]), l += c[o === "x" ? "l" : "w"] + e.getBladeWidth(), n != null && n.isGroup() ? c.groupPlacementOrder = u : c.placementOrder = u, r && c.addToStock(e);
  });
}
const pw = {
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
  x1: "l1",
  x2: "l2",
  y1: "w1",
  y2: "w2"
};
function Ni(t) {
  if (!A(t) || typeof t != "object")
    return {};
  t = fw({}, t);
  for (const [e, n] of Object.entries(t))
    e !== "_id" && e.startsWith("_") && (t[e.substring(1)] = n, delete t[e]);
  return t;
}
function gw(t, e = null) {
  return t.map((n) => {
    var i;
    return delete n.id, e ? n.units = e : n.units || (n.units = ((i = this == null ? void 0 : this.optionsStore) == null ? void 0 : i.units) ?? "decimal"), new zl(n);
  });
}
function mw({ stockList: t, removeScores: e = !1, saw: n = null, preventAutoRotation: i = !1, preventGrainRotation: r = !1 }) {
  return !t || !(t != null && t.length) ? [] : t.map((s) => {
    n && (s.saw = n), i && (s.preventAutoRotation = !0), r && (s.preventGrainRotation = !0);
    const o = new Dn(s);
    if (o.issues.length)
      throw new Error(`Issues found when attempting to recreate stock list - ${o.issues.join()}`, { cause: o.issues });
    return e && delete o.algoBenchmark, o;
  });
}
function yw({ shapeList: t, stockList: e, preventAutoRotation: n = !1 }) {
  if (typeof e > "u")
    throw new Error("recreateShapeList requires stockList");
  return !t || !(t != null && t.length) ? [] : t.map((i) => {
    var o;
    n && (i.preventAutoRotation = !0);
    let r;
    if (Sw(i) && ((o = i == null ? void 0 : i.shapes) != null && o.length) ? (i.shapes = i.shapes.map((a) => new Pn(a)), r = new Gl(i)) : r = new Pn(i), r.issues.length)
      throw new Error(`Issues found when attempting to recreate shape list - ${r.issues.join()}`);
    const s = e.find((a) => {
      var l;
      return a.id === (((l = i == null ? void 0 : i.stock) == null ? void 0 : l.id) ?? (i == null ? void 0 : i.stockId));
    });
    return r.stock = s, r;
  });
}
function bw({ cutList: t, stockList: e }) {
  if (typeof e > "u")
    throw new Error("recreateCutList requires stockList");
  return !t || !(t != null && t.length) ? [] : t.map((n) => {
    const i = new Ao(n), r = e.find((s) => {
      var o;
      return s.id === (((o = n == null ? void 0 : n.stock) == null ? void 0 : o.id) ?? (n == null ? void 0 : n.stockId));
    });
    return i.stock = r, i;
  });
}
function vw({ segmentList: t, stockList: e }) {
  return !t || !(t != null && t.length) ? [] : t.map((n) => {
    const i = e.find((s) => {
      var o;
      return s.id === (((o = n == null ? void 0 : n.stock) == null ? void 0 : o.id) ?? (n == null ? void 0 : n.stockId));
    });
    return n.stock = i, n.preventAutoRotation = !0, new fp(n);
  });
}
function lp(t = null, e = null, n = null) {
  if (!t)
    throw new Error("no container supplied to willItFit");
  if (!e)
    throw new Error("no shape supplied to willItFit");
  const i = e.rot;
  function r(h = !1, p = "l") {
    var y, S;
    return xt.equalTo(e[h ? p === "l" ? "w" : "l" : p], t[p]) || xt.lessThanOrEqualTo(e[h ? p === "l" ? "w" : "l" : p], t[p] - (((S = (y = t == null ? void 0 : t.saw) == null ? void 0 : y.options) == null ? void 0 : S.minSpacing) ?? 0));
  }
  function s(h = !0) {
    return e.setRotation(i), h;
  }
  const o = e.getNecessaryOrientation(t);
  let a = null;
  if (o && (a = o === "l" ? 0 : 1), e.orientationLock) {
    if (A(n) && n !== a)
      return s(!1);
    e.forceRotate(a);
  } else
    A(n) && e.forceRotate(n);
  if (a && e.rot !== a)
    return s(!1);
  const l = r(!1, "l"), c = r(!1, "w"), u = r(!0, "l"), f = r(!0, "w");
  return A(n) || o ? s(l && c) : s(l && c || u && f);
}
class cp {
  constructor(e, n = !1) {
    v(this, "readonly");
    v(this, "id");
    v(this, "listId");
    v(this, "units", "decimal");
    v(this, "l");
    v(this, "w");
    v(this, "t");
    v(this, "q");
    v(this, "name");
    v(this, "material");
    v(this, "trim", {
      x1: 0,
      x2: 0,
      y1: 0,
      y2: 0
    });
    v(this, "cost", null);
    v(this, "grain", "");
    v(this, "selected", !1);
    //used for multiple editing
    v(this, "multiSelect", !1);
    //is this the multi-select stock
    v(this, "type", null);
    v(this, "autoAdd", !1);
    v(this, "used");
    v(this, "saw");
    v(this, "preventGrainRotation");
    v(this, "issues", []);
    v(this, "warnings", []);
    v(this, "notes", "");
    var i, r, s, o, a;
    e = Ni(e), A(e.units) || console.warn("Attempting to create InputStock without units"), this.units = e.units, this.readonly = e.readonly, this.id = e.id, this.listId = Date.now().toString() + Math.ceil(Math.random() * 1e16), this.l = A(e.l) ? $(e.l, this.units, !1, n) : null, this.w = A(e.w) ? $(e.w, this.units, !1, n) : null, this.t = A(e.t) ? $(e.t, this.units, !1, n) : null, this.q = A(e.q) ? typeof e.q == "string" ? parseInt(e.q) : e.q : null, this.autoAdd = A(e.autoAdd) ? e.autoAdd : !1, this.name = A(e.name) ? Mr(e.name).toUpperCase() : "", this.material = A(e.material) ? e.material.trim().toUpperCase() : "", this.trim = {
      x1: A((i = e == null ? void 0 : e.trim) == null ? void 0 : i.x1) ? $(e.trim.x1, this.units, !1, n) : null,
      x2: A((r = e == null ? void 0 : e.trim) == null ? void 0 : r.x2) ? $(e.trim.x2, this.units, !1, n) : null,
      y1: A((s = e == null ? void 0 : e.trim) == null ? void 0 : s.y1) ? $(e.trim.y1, this.units, !1, n) : null,
      y2: A((o = e == null ? void 0 : e.trim) == null ? void 0 : o.y2) ? $(e.trim.y2, this.units, !1, n) : null
    }, this.cost = A(e.cost) ? e.cost : null, this.grain = A(e.grain) ? e.grain.toLowerCase() : "", this.multiSelect = e.multiSelect, this.type = e.type, this.preventGrainRotation = !0, this.notes = e != null && e.notes ? (a = e.notes) == null ? void 0 : a.replace(/,/g, "") : "";
  }
  //change the units of the stock
  changeUnits(e, n, i) {
    var r, s, o, a;
    (e === "decimal" || e === "fraction") && (this.units = e, this.l = this.l ? $(this.l, e, !1, !1, i) : null, this.w = this.w ? $(this.w, e, !1, !1, i) : null, this.t = this.t ? $(this.t, e, !1, !1, i) : null, this.trim = {
      x1: A((r = this == null ? void 0 : this.trim) == null ? void 0 : r.x1) ? $(this.trim.x1, e, !1, !1, i) : null,
      x2: A((s = this == null ? void 0 : this.trim) == null ? void 0 : s.x2) ? $(this.trim.x2, e, !1, !1, i) : null,
      y1: A((o = this == null ? void 0 : this.trim) == null ? void 0 : o.y1) ? $(this.trim.y1, e, !1, !1, i) : null,
      y2: A((a = this == null ? void 0 : this.trim) == null ? void 0 : a.y1) ? $(this.trim.y2, e, !1, !1, i) : null
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
  getWarnings() {
    this.warnings = [], ["q"].forEach((e) => {
      this.warnings.push(...ne[e](this[e]));
    }), $(this.l, "decimal") < $(this.w, "decimal") && this.warnings.push(`Length should be greater than width and it has no impact on ${dp(this) ? "grain direction" : "orientation"}.`);
  }
  validate() {
    return this.issues = [], ["l", "w", "t"].forEach((e) => {
      this.issues.push(...ne[e](this[e]));
    }), this.issues.push(...ne.trim(this)), this.getWarnings(), this.issues;
  }
}
class zl {
  constructor(e, n = !1) {
    v(this, "readonly");
    v(this, "id");
    v(this, "listId");
    v(this, "units", "decimal");
    v(this, "l");
    v(this, "w");
    v(this, "t");
    v(this, "q", 1);
    v(this, "name", "");
    v(this, "material", "");
    v(this, "stockLock");
    v(this, "trim", {
      x1: 0,
      x2: 0,
      y1: 0,
      y2: 0
    });
    v(this, "cost");
    v(this, "grain");
    v(this, "bandingOptions");
    //used for checkout
    v(this, "banding", {
      a: !1,
      b: !1,
      c: !1,
      d: !1,
      x1: !1,
      x2: !1,
      y1: !1,
      y2: !1
    });
    v(this, "bandingType", {
      a: "",
      b: "",
      c: "",
      d: "",
      x1: "",
      x2: "",
      y1: "",
      y2: ""
    });
    v(this, "orientationLock");
    v(this, "selectedMaterial");
    v(this, "selected");
    //used for multiple editing
    v(this, "multiSelect", !1);
    //is this the first shape in a multi-select shape
    v(this, "machining");
    v(this, "issues", []);
    v(this, "warnings", []);
    v(this, "notes", "");
    var i, r, s, o, a, l, c, u, f, h, p, y, S, k, m, b, x, _, E, P, L, W, M, H, F, G, q, it, Rt, dt;
    e = e = Ni(e), this.units = e.units, this.readonly = e.readonly, this.id = e.id, this.listId = Date.now().toString() + Math.ceil(Math.random() * 1e16), this.l = A(e.l) ? $(e.l, this.units, !1, n) : null, this.w = A(e.w) ? $(e.w, this.units, !1, n) : null, this.t = A(e.t) ? $(e.t, this.units, !1, n) : null, this.q = A(e == null ? void 0 : e.q) ? typeof e.q == "string" ? parseInt(e.q) : e.q : null, this.name = A(e.name) ? Mr(e.name).toUpperCase() : "", this.material = A(e.material) ? e.material.trim().toUpperCase() : "", this.trim = {
      x1: A((i = e == null ? void 0 : e.trim) == null ? void 0 : i.x1) ? $(e.trim.x1, this.units, !1, n) : null,
      x2: A((r = e == null ? void 0 : e.trim) == null ? void 0 : r.x2) ? $(e.trim.x2, this.units, !1, n) : null,
      y1: A((s = e == null ? void 0 : e.trim) == null ? void 0 : s.y1) ? $(e.trim.y1, this.units, !1, n) : null,
      y2: A((o = e == null ? void 0 : e.trim) == null ? void 0 : o.y2) ? $(e.trim.y2, this.units, !1, n) : null
    }, this.bandingOptions = {
      a: A((a = e == null ? void 0 : e.bandingOptions) == null ? void 0 : a.a) ? e.bandingOptions.a : {},
      b: A((l = e == null ? void 0 : e.bandingOptions) == null ? void 0 : l.b) ? e.bandingOptions.b : {},
      c: A((c = e == null ? void 0 : e.bandingOptions) == null ? void 0 : c.c) ? e.bandingOptions.c : {},
      d: A((u = e == null ? void 0 : e.bandingOptions) == null ? void 0 : u.d) ? e.bandingOptions.d : {},
      x1: A((f = e == null ? void 0 : e.bandingOptions) == null ? void 0 : f.x1) ? e.bandingOptions.x1 : {},
      x2: A((h = e == null ? void 0 : e.bandingOptions) == null ? void 0 : h.x2) ? e.bandingOptions.x2 : {},
      y1: A((p = e == null ? void 0 : e.bandingOptions) == null ? void 0 : p.y1) ? e.bandingOptions.y1 : {},
      y2: A((y = e == null ? void 0 : e.bandingOptions) == null ? void 0 : y.y2) ? e.bandingOptions.y2 : {},
      all: A((S = e == null ? void 0 : e.bandingOptions) == null ? void 0 : S.all) ? e.bandingOptions.all : {}
    }, this.banding = {
      a: A((k = e == null ? void 0 : e.banding) == null ? void 0 : k.a) ? e.banding.a : !1,
      b: A((m = e == null ? void 0 : e.banding) == null ? void 0 : m.b) ? e.banding.b : !1,
      c: A((b = e == null ? void 0 : e.banding) == null ? void 0 : b.c) ? e.banding.c : !1,
      d: A((x = e == null ? void 0 : e.banding) == null ? void 0 : x.d) ? e.banding.d : !1,
      x1: A((_ = e == null ? void 0 : e.banding) == null ? void 0 : _.x1) ? e.banding.x1 : !1,
      x2: A((E = e == null ? void 0 : e.banding) == null ? void 0 : E.x2) ? e.banding.x2 : !1,
      y1: A((P = e == null ? void 0 : e.banding) == null ? void 0 : P.y1) ? e.banding.y1 : !1,
      y2: A((L = e == null ? void 0 : e.banding) == null ? void 0 : L.y2) ? e.banding.y2 : !1
    }, this.bandingType = {
      a: A((W = e == null ? void 0 : e.bandingType) == null ? void 0 : W.a) ? e.bandingType.a : "",
      b: A((M = e == null ? void 0 : e.bandingType) == null ? void 0 : M.b) ? e.bandingType.b : "",
      c: A((H = e == null ? void 0 : e.bandingType) == null ? void 0 : H.c) ? e.bandingType.c : "",
      d: A((F = e == null ? void 0 : e.bandingType) == null ? void 0 : F.d) ? e.bandingType.d : "",
      x1: A((G = e == null ? void 0 : e.bandingType) == null ? void 0 : G.x1) ? e.bandingType.x1 : "",
      x2: A((q = e == null ? void 0 : e.bandingType) == null ? void 0 : q.x2) ? e.bandingType.x2 : "",
      y1: A((it = e == null ? void 0 : e.bandingType) == null ? void 0 : it.y1) ? e.bandingType.y1 : "",
      y2: A((Rt = e == null ? void 0 : e.bandingType) == null ? void 0 : Rt.y2) ? e.bandingType.y2 : ""
    }, this.orientationLock = A(e.orientationLock) ? e.orientationLock.toLowerCase() : "", this.selected = !1, this.multiSelect = e.multiSelect, this.machining = new ap(e.machining ?? {
      holes: [],
      corners: []
    }), this.notes = e != null && e.notes ? (dt = e.notes) == null ? void 0 : dt.replace(/,/g, "") : "";
  }
  /**
   * change the units of the shape
   * @param {String} newUnits
   */
  changeUnits(e, n, i) {
    var r, s, o, a;
    (e === "decimal" || e === "fraction") && (this.units = e, this.l = this.l ? $(this.l, e, !1, !1, i) : null, this.w = this.w ? $(this.w, e, !1, !1, i) : null, this.t = this.t ? $(this.t, e, !1, !1, i) : null, this.trim = {
      x1: A((r = this == null ? void 0 : this.trim) == null ? void 0 : r.x1) ? $(this.trim.x1, e, !1, !1, i) : null,
      x2: A((s = this == null ? void 0 : this.trim) == null ? void 0 : s.x2) ? $(this.trim.x2, e, !1, !1, i) : null,
      y1: A((o = this == null ? void 0 : this.trim) == null ? void 0 : o.y1) ? $(this.trim.y1, e, !1, !1, i) : null,
      y2: A((a = this == null ? void 0 : this.trim) == null ? void 0 : a.y1) ? $(this.trim.y2, e, !1, !1, i) : null
    });
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
    return $(this.l) > $(this.w) ? $(this.l) : $(this.w);
  }
  getShortSide() {
    return $(this.l) < $(this.w) ? $(this.l) : $(this.w);
  }
  //used to apply a single trim value to all sides
  applyPartTrim(e, n) {
    if (e = $(e), this.trim) {
      for (const i in this.trim)
        this.trim[i] += e;
      n === "linear" && (this.trim.y1 = 0, this.trim.y2 = 0);
    } else
      this.trim = {
        x1: e,
        x2: e,
        y1: n !== "linear" ? e : 0,
        y2: n !== "linear" ? e : 0
      };
  }
  /**
   * to align with Shape
   * @remarks input shapes are always 0
   */
  get rot() {
    return 0;
  }
  validate(e, n = 0) {
    return this.issues = [], n = $(n), ["l", "w", "t"].forEach((i) => {
      this.issues.push(...ne[i](this[i]));
    }), this.issues.push(...ne.partTrim(this, n)), this.issues.push(...ne.trim(this)), ne.machining(this), this.getWarnings(e, n), this.issues;
  }
  getWarnings(e, n = 0) {
    this.warnings = [], e.length && this.warnings.push(...ne.stockMatch(this, e, n)), ["q"].forEach((i) => {
      this.warnings.push(...ne[i](this[i]));
    }), $(this.l, "decimal") < $(this.w, "decimal") && this.warnings.push('Length should be greater than width and has no impact on orientation. To set rotation based on these values use the "Rotate to L/W" button.');
  }
  convertBandingOptionsToBanding() {
    for (const e in this.bandingOptions) {
      if (e === "all")
        continue;
      const n = Object.values(this.bandingOptions[e]);
      n.some((r) => r) && (n.every((r) => r) || this.issues.push("If using banding, all options must be set."));
      const i = n.filter((r) => r).map((r) => r.toString().trim().replace("|", "_"));
      if (!i.length) {
        this.banding[e] = !1, this.bandingType[e] = "";
        continue;
      }
      this.banding[e] = !0, this.bandingType[e] = i.join("|");
    }
  }
  removeBandingApartFromBandingOptions() {
    const e = ["a", "b", "c", "d", "x1", "x2", "y1", "y2"];
    for (const n of e)
      this.banding[n] = !1, this.bandingType[n] = "";
  }
  setAllBandingOptions(e, n, i = ["x1", "x2", "y1", "y2"]) {
    for (const r of i)
      this.bandingOptions[r][e] = n;
  }
  removeBanding() {
    const e = ["a", "b", "c", "d", "x1", "x2", "y1", "y2", "all"];
    for (const n of e)
      this.bandingOptions[n] = {}, n !== "all" && (this.banding[n] = !1, this.bandingType[n] = "");
  }
}
class Lr {
  //for user notes
  constructor(e) {
    v(this, "id");
    v(this, "parentID");
    v(this, "name");
    v(this, "x");
    v(this, "y");
    v(this, "l");
    v(this, "w");
    v(this, "t");
    v(this, "q");
    v(this, "material");
    v(this, "grain");
    v(this, "orientationLock");
    v(this, "duplicate");
    v(this, "_trim");
    v(this, "trimmed");
    v(this, "preventAutoRotation");
    v(this, "preventGrainRotation");
    v(this, "units");
    v(this, "issues", []);
    v(this, "stock");
    v(this, "stockId");
    //used when object is compressed
    v(this, "cost");
    v(this, "offcut");
    v(this, "notes");
    this.initRectangle(e);
  }
  validateRectangle(e) {
    ["x", "y", "l", "w", "t"].forEach((n) => {
      this.createIssues(ne[n](e[n]));
    }), br(this) && !e.autoAdd && "q" in e && this.createIssues(ne.q((e == null ? void 0 : e.q) ?? 0)), "q" in e && (this.isShape() || this.isStock()) && !this.isGroup() && !this.isUserGroup() && this.createIssues(ne.q((e == null ? void 0 : e.q) ?? 0));
  }
  initRectangle(e) {
    var i, r, s, o, a;
    if (this.validateRectangle(e), this.issues.length)
      return;
    this.id = A(e.id) ? e.id.toString() : null, this.setParentID(), [
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
      let c = e[l.key];
      if (!A(c))
        return this[l.key] = l.default;
      typeof c == "string" && (c = $(c)), this[l.key] = c;
    }), A(e == null ? void 0 : e.q) ? typeof e.q == "string" ? this.q = parseInt(e.q) : this.q = e.q : this.q = 0, this.name = A(e.name) && ((i = e == null ? void 0 : e.name) != null && i.length) ? (r = Yl(Mr(e == null ? void 0 : e.name))) == null ? void 0 : r.toUpperCase() : null, !(e != null && e.preventAutoRotation) && !e.trimmed && this.w > this.l && ([this.l, this.w] = [this.w, this.l], this.grain && !(e != null && e.preventGrainRotation) && (this.grain = this.grain === "l" ? "w" : "l")), this.material = A(e.material) ? e.material.trim().toLowerCase() : null, this.duplicate = A(e == null ? void 0 : e.duplicate) ? e.duplicate : !1, A(e == null ? void 0 : e.stock) && (((o = (s = e.stock) == null ? void 0 : s.constructor) == null ? void 0 : o.name) === "Stock" ? this.stock = e.stock : this.stock = new Dn(e.stock), this.stockId = this.stock.id), A(e == null ? void 0 : e.cost) ? typeof e.cost == "string" ? this.cost = parseFloat(e.cost) : typeof e.cost == "number" && (this.cost = e.cost) : this.cost = 0, this.grain = typeof e.grain < "u" && A(e == null ? void 0 : e.grain) ? e.grain.toLowerCase() : null;
    try {
      this.trim = e == null ? void 0 : e.trim;
    } catch (l) {
      if ((a = l == null ? void 0 : l.cause) != null && a.issues)
        this.issues.push(...l.cause.issues);
      else
        throw new Error("error when attempting to set trim");
    }
    this.trimmed = A(e == null ? void 0 : e.trimmed) ? e.trimmed : !1, this.offcut = A(e == null ? void 0 : e.offcut) ? e.offcut : !1, this.notes = typeof (e == null ? void 0 : e.notes) == "string" && e.notes.length ? e.notes.replace(/,/g, "").substring(0, 200) : "";
  }
  updateRectangle(e) {
    e.preventAutoRotation = !0, this.initRectangle(e);
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
        const r = $(e[n]);
        isNaN(r) || r < 0 ? (this.issues.push(this.createIssue(`${e[n] ?? "N/A"} is not a valid value for trim: ${n}`)), i = 0) : i = r;
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
    return this.id ? this.parentID ? this.parentID : typeof this.id != "number" && this.id.includes(".") ? this.id.split(".")[0] : typeof this.id != "number" && !this.id.includes(".") ? null : this != null && this.id ? this.id.toString() : null : null;
  }
  createIssues(e) {
    e != null && e.length && e.forEach((n) => {
      this.issues.push(this.createIssue(n));
    });
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
    return `${e} [${n.charAt(0).toUpperCase() + n.slice(1)} ${(r = this == null ? void 0 : this.name) != null && r.length ? this.name.toUpperCase() : this.parentID}]`;
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
  getCoords(e, n = !1) {
    const i = new Mt(this.x + this.l, this.y);
    i.corner = "bottomRight";
    const r = new Mt(this.x, this.y + this.w);
    if (r.corner = "topLeft", (e == null ? void 0 : e.cutType) !== "efficiency" && !n)
      return [r, i];
    const s = new Mt(this.x, this.y);
    s.corner = "bottomLeft";
    const o = new Mt(this.x + this.l, this.y + this.w);
    return o.corner = "topRight", [s, r, o, i];
  }
  getCorners() {
    return {
      bottomLeft: new Mt(this.x, this.y),
      topLeft: new Mt(this.x, this.y + this.w),
      topRight: new Mt(this.x + this.l, this.y + this.w),
      bottomRight: new Mt(this.x + this.l, this.y)
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
  //trim the rectangle
  trimDimensions() {
    var e, n, i, r;
    return this.trimmed ? !1 : (this.trim && Object.values(this.trim).filter((s) => !isNaN(parseFloat(s))).length && (A(this.l) && (this.l -= ((e = this == null ? void 0 : this.trim) != null && e.x1 ? this.trim.x1 : 0) + ((n = this == null ? void 0 : this.trim) != null && n.x2 ? this.trim.x2 : 0), this.l <= 0 && (console.error(this), this.issues.push(this.createIssue("Applying trim has produced a negative length")))), A(this.w) && (this.w -= ((i = this == null ? void 0 : this.trim) != null && i.y1 ? this.trim.y1 : 0) + ((r = this == null ? void 0 : this.trim) != null && r.y2 ? this.trim.y2 : 0), this.w <= 0 && (console.error(this), this.issues.push(this.createIssue("Applying trim has produced a negative width"))))), this.trimmed = !0, !0);
  }
  /**
   * change the size of the rectangle back to the original size
   */
  removeTrim() {
    var e, n, i, r;
    if (this.trimmed) {
      if (this.l += (typeof ((e = this == null ? void 0 : this.trim) == null ? void 0 : e.x1) == "number" ? this.trim.x1 : 0) + (typeof ((n = this == null ? void 0 : this.trim) == null ? void 0 : n.x2) == "number" ? this.trim.x2 : 0), this.w += (typeof ((i = this == null ? void 0 : this.trim) == null ? void 0 : i.y1) == "number" ? this.trim.y1 : 0) + (typeof ((r = this == null ? void 0 : this.trim) == null ? void 0 : r.y2) == "number" ? this.trim.y2 : 0), this.l <= 0)
        throw new Error(`trimming this ${this.id} has produced a negative length`);
      if (this.w <= 0)
        throw new Error(`trimming this ${this.id} has produced a negative width`);
      this.trimmed = !1;
    }
  }
  getUntrimmedDimensions() {
    var i, r, s, o;
    if (!this.trimmed)
      return { l: this.l, w: this.w };
    const e = this.getLongSide(), n = this.getShortSide();
    return {
      l: e + (typeof ((i = this == null ? void 0 : this.trim) == null ? void 0 : i.x1) == "number" ? this.trim.x1 : 0) + (typeof ((r = this == null ? void 0 : this.trim) == null ? void 0 : r.x2) == "number" ? this.trim.x2 : 0),
      w: n + (typeof ((s = this == null ? void 0 : this.trim) == null ? void 0 : s.y1) == "number" ? this.trim.y1 : 0) + (typeof ((o = this == null ? void 0 : this.trim) == null ? void 0 : o.y2) == "number" ? this.trim.y2 : 0)
    };
  }
  /**
   * is this rectangle identical to another
   */
  isIdentical(e) {
    var n, i, r, s, o, a, l, c;
    if (this.getClass() !== e.getClass())
      return !1;
    if (Ys(this)) {
      if (e.id === this.id)
        return !0;
    } else if (e.getParentID() === this.getParentID())
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
  isInsideStock(e) {
    return !(this.x + this.l > e.l || this.y + this.w > e.w || this.x < 0 || this.y < 0);
  }
  //create a rectangle used to detect proximity to other shapes
  createProximityRectangle(e) {
    if (!e)
      return !1;
    let n = this.x - e, i = this.y - e, r = this.l + e * 2, s = this.w + e * 2;
    return n < 0 && (r += n, n = 0), i < 0 && (s += i, i = 0), r = Math.max(0, r), s = Math.max(0, s), new Lr({
      name: "proximity",
      x: n,
      y: i,
      l: r,
      w: s,
      preventAutoRotation: !0
    });
  }
  isShape() {
    return Es(this);
  }
  isSegment() {
    return Ew(this);
  }
  isStock() {
    return br(this);
  }
  isGroup() {
    return Ys(this);
  }
  isUserGroup() {
    return hp(this);
  }
}
class up extends Lr {
  //used by evo
  constructor(n) {
    super(n);
    v(this, "type");
    v(this, "saw");
    v(this, "algoBenchmark");
    switch (["sheet", "linear", "roll", null, void 0, ""].includes(n.type) ? this.type = n.type : this.issues.push(`Container type ${n.type ?? "N/A"} is not valid`), this.type || (this.type = "sheet"), this.setSaw(n), this.cutType) {
      case "beam":
        (!A(this.t) || this.t <= 0) && this.issues.push(this.createIssue("Stock for beam saws must have a thickness set"));
        break;
    }
  }
  setSaw(n) {
    var i, r, s, o;
    if (A(n) || (this.saw = new On(null)), A(n == null ? void 0 : n.saw)) {
      if (!((r = n == null ? void 0 : n.saw) != null && r.cutType)) {
        const { cutType: a, cutPreference: l } = Fa(n.saw.cutPreference);
        n.saw.cutType = a, n.saw.cutPreference = l;
      }
    } else {
      n.saw = {};
      const { cutType: a, cutPreference: l } = Fa(n.cutPreference);
      n.saw.cutType = a, n.saw.cutPreference = l, A(n == null ? void 0 : n.bladeWidth) && (n.saw.bladeWidth = n.bladeWidth), A((i = n == null ? void 0 : n.blade) == null ? void 0 : i.width) && (n.saw.bladeWidth = n.blade.width), A(n == null ? void 0 : n.efficiencyOptions) && (n.saw.efficiencyOptions = n.efficiencyOptions), A(n == null ? void 0 : n.guillotineOptions) && (n.saw.guillotineOptions = n.guillotineOptions), A(n == null ? void 0 : n.stackHeight) && (n.saw.stackHeight = n.stackHeight);
    }
    try {
      A(n == null ? void 0 : n.saw) && (Tw(n.saw) ? this.saw = n.saw : this.saw = new On(n.saw, this.type)), (o = (s = this.saw) == null ? void 0 : s.issues) != null && o.length && this.issues.push(...this.saw.issues);
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
    return A((n = this.saw) == null ? void 0 : n.cutPreference) ? this.saw.cutPreference : (i = this.stock) != null && i.isStock() ? null : ((s = (r = this.stock) == null ? void 0 : r.saw) == null ? void 0 : s.cutPreference) ?? null;
  }
  get guillotineOptions() {
    var n, i, r, s;
    return A((n = this.saw) == null ? void 0 : n.guillotineOptions) ? this.saw.guillotineOptions : (i = this.stock) != null && i.isStock() ? null : ((s = (r = this == null ? void 0 : this.stock) == null ? void 0 : r.saw) == null ? void 0 : s.guillotineOptions) ?? null;
  }
  get efficiencyOptions() {
    var n, i, r, s;
    return A((n = this.saw) == null ? void 0 : n.efficiencyOptions) ? this.saw.efficiencyOptions : (i = this.stock) != null && i.isStock() ? null : ((s = (r = this == null ? void 0 : this.stock) == null ? void 0 : r.saw) == null ? void 0 : s.efficiencyOptions) ?? null;
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
    var i, r, s;
    const n = (((i = this == null ? void 0 : this.saw) == null ? void 0 : i.bladeWidth) || ((s = (r = this == null ? void 0 : this.stock) == null ? void 0 : r.saw) == null ? void 0 : s.bladeWidth)) ?? 0;
    return isNaN(n) ? 0 : n;
  }
  getStock() {
    return this != null && this.stock ? this.stock : this;
  }
}
function Fa(t) {
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
class On {
  constructor(e, n = "sheet") {
    v(this, "issues");
    v(this, "bladeWidth");
    v(this, "cutType");
    v(this, "cutPreference");
    v(this, "guillotineOptions");
    v(this, "efficiencyOptions");
    v(this, "stackHeight");
    v(this, "stockType");
    v(this, "options");
    switch (e = Ni(e), this.options = (e == null ? void 0 : e.options) ?? null, this.stackHeight = (e == null ? void 0 : e.stackHeight) ?? null, this.stockType = (e == null ? void 0 : e.stockType) ?? n, this.issues = [], ["sheet", "linear", "roll"].includes(this.stockType) || this.issues.push(`Saw stock type: ${this.stockType} not valid`), this.stockType || (this.stockType = "sheet"), this.cutType = e == null ? void 0 : e.cutType, this.stockType) {
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
    switch (this.cutPreference = e == null ? void 0 : e.cutPreference, this.cutType) {
      case "guillotine":
        ["l", "w", "flex"].includes(this.cutPreference) || this.issues.push(`Saw cut preference: ${this.cutPreference} not valid for cut type: ${this.cutType}`), this.cutType === "guillotine" && this.cutPreference === "l" && this.stockType === "roll" && this.issues.push(`Cut preference: ${this.cutPreference} not valid for cut type: ${this.cutType} and stock type: ${this.stockType}`);
        break;
      case "beam":
        ["l", null, void 0].includes(this.cutPreference) || this.issues.push(`Saw cut preference: ${this.cutPreference} not valid for cut type: ${this.cutType}`);
        break;
      default:
        ["none", null, void 0].includes(this.cutPreference) || this.issues.push(`Saw cut preference: ${this.cutPreference} not valid for cut type: ${this.cutType}`);
        break;
    }
    switch (A(e == null ? void 0 : e.bladeWidth) ? typeof e.bladeWidth == "string" ? this.bladeWidth = $(e.bladeWidth) : this.bladeWidth = e.bladeWidth : this.bladeWidth = 0, (isNaN(this.bladeWidth) || this.bladeWidth < 0) && (this.issues.push(`Blade width: ${this.bladeWidth ?? "N/A"} is not valid`), this.bladeWidth = 0), this.stockType) {
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
    const e = structuredClone(this);
    return new On(e);
  }
}
class Dn extends up {
  //used by stock matching
  constructor(n) {
    n = Ni(n), n.preventAutoRotation = (n == null ? void 0 : n.type) === "roll", n.autoAdd && !n.q && (n.q = 1);
    super(n);
    v(this, "_id");
    //used for mongo
    v(this, "autoAdd");
    v(this, "allowExactFitShapes");
    v(this, "analysis");
    v(this, "tidy");
    v(this, "used");
    v(this, "stack");
    v(this, "winningStrategy");
    //used for reporting
    v(this, "unusable");
    delete this.stock, this._id = n == null ? void 0 : n._id, this.autoAdd = A(n == null ? void 0 : n.autoAdd) ? n.autoAdd : !1, this.allowExactFitShapes = A(n == null ? void 0 : n.allowExactFitShapes) ? n.allowExactFitShapes : !1, this.analysis = A(n.analysis) ? n.analysis : null, this.tidy = A(n == null ? void 0 : n.tidy) ? n.tidy : !1, this.algoBenchmark = null, this.used = A(n == null ? void 0 : n.used) ? n.used : !1, this.stack = A(n == null ? void 0 : n.stack) ? n.stack : !1, this.initStock(n);
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
      this.createIssues(ne[i](n[i]));
    }), this.createIssues(ne.trim(this));
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
    const r = i.join("."), s = structuredClone(this);
    return s.id = r, s.used = !1, s.duplicate = !0, s.stack = !1, s.saw = this.saw, new Dn(s);
  }
}
class _w extends Lr {
  constructor(n) {
    super(n);
    v(this, "addToInventory");
    //for front end selection
    v(this, "added");
    //for adding to inputStock
    v(this, "placementOrder");
    v(this, "flex");
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
function ww({ offcuts: t, stockList: e, preventAutoRotation: n = !0 }) {
  return !t || !(t != null && t.length) ? [] : t.map((i) => {
    const r = e.find((o) => {
      var a;
      return o.id === (((a = i == null ? void 0 : i.stock) == null ? void 0 : a.id) ?? (i == null ? void 0 : i.stockId));
    });
    return i.stock = r, n && (i.preventAutoRotation = !0), new _w(i);
  });
}
class Pn extends Lr {
  constructor(n) {
    n = Ni(n);
    super(n);
    v(this, "added");
    v(this, "guillotineData");
    v(this, "_banding");
    v(this, "_bandingType");
    v(this, "stockLock");
    v(this, "score");
    v(this, "bestScore");
    v(this, "placementOrder");
    //groups
    v(this, "groupPlacementOrder");
    v(this, "group");
    v(this, "groupID");
    v(this, "inGroup");
    //is the shape currently part of at least one group
    v(this, "inUserGroup");
    //is the shape currently part of a user group`
    v(this, "addedAsGroup");
    v(this, "stripShape");
    v(this, "isFirstShape");
    v(this, "firstShapeSampleRotations", []);
    //used for setting the rotation of the first shape (guillotine)
    v(this, "dimension");
    //used for apex shapes
    v(this, "subsetUsed");
    v(this, "index");
    //used for ptx
    v(this, "stackedMatch");
    //used for stack detection
    v(this, "stockMatch");
    v(this, "machining");
    v(this, "weighting");
    v(this, "minSpacing");
    this.initShape(n);
  }
  initShape(n) {
    if (this.validateShape(n), this.issues.length)
      throw new Error(this.issues.join(`
`));
    this.added = A(n == null ? void 0 : n.added) ? n.added : !1, this.guillotineData = n == null ? void 0 : n.guillotineData, (n == null ? void 0 : n.orientationLock) === " " && (n.orientationLock = ""), this.orientationLock = A(n == null ? void 0 : n.orientationLock) && this.l !== this.w ? n.orientationLock.toLowerCase() : null, this.banding = n == null ? void 0 : n.banding, this.bandingType = n == null ? void 0 : n.bandingType, A(n == null ? void 0 : n.stockLock) ? Array.isArray(n == null ? void 0 : n.stockLock) && (this.stockLock = n.stockLock.map((i) => i.toString())) : this.stockLock = [], this.inGroup = A(n == null ? void 0 : n.inGroup) ? n.inGroup : !1, this.inUserGroup = A(n == null ? void 0 : n.inUserGroup) ? n.inUserGroup : !1, this.groupID = A(n == null ? void 0 : n.groupID) ? n.groupID : null, this.addedAsGroup = A(n == null ? void 0 : n.addedAsGroup) ? n.addedAsGroup : !1, this.score = A(n == null ? void 0 : n.score) ? n.score : null, this.bestScore = A(n == null ? void 0 : n.bestScore) ? n.bestScore : {
      x: 0,
      y: 0,
      rot: null,
      total: null,
      group: null
    }, this.placementOrder = A(n == null ? void 0 : n.placementOrder) ? n.placementOrder : null, this.groupPlacementOrder = A(n == null ? void 0 : n.groupPlacementOrder) ? n.groupPlacementOrder : null, this.weighting = {}, this.minSpacing = (n == null ? void 0 : n.minSpacing) ?? 0, this.machining = A(n == null ? void 0 : n.machining) ? new ap(n.machining) : null;
  }
  getCopyNumber() {
    return parseInt(this.id.split(".").pop());
  }
  validateShape(n) {
    ["orientationLock", "banding"].forEach((i) => {
      this.createIssues(ne[i](n[i]));
    }), this.machining && this.machining.validateEverything(this);
  }
  //individual shape weighting
  calculateWeighting() {
  }
  update(n) {
    n = Ni(n), this.initShape(n), this.updateRectangle(n);
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
      Object.keys(n).forEach((i) => this._bandingType[i] = A(n[i]) ? Yl(Mr(n[i])) : "");
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
  setBestScore(n, i = null) {
    const r = {
      x: n.x,
      y: n.y,
      rot: n.rot,
      total: n.score.total,
      score: n.score,
      group: n.group,
      weighting: null,
      point: i
    };
    this.bestScore = r;
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
  /**
   * checks if a shape can rotate
   * checks for fit and grain
   * does not change the shape's rotation during the checks
   * @returns false if cannot rotate or can rotate but won't fit
   */
  canRotate(n = null, i = null) {
    if (!A(n))
      throw new Error("no rotation provided to canRotate");
    if (n === !0 && (n = 1), n === !1 && (n = 0), this.isSquare() && n || i && !this.willItFit(i, n))
      return !1;
    const r = this.getNecessaryOrientation(i);
    return !(r === "l" && n === 1 || r === "w" && n === 0);
  }
  //get the orientation lock catering for container grain
  convertShapeGrainToOrientationLock(n) {
    if (!A(this.orientationLock))
      return null;
    const i = n.getStock();
    return A(i.grain) ? this.orientationLock === i.grain ? "l" : "w" : this.orientationLock;
  }
  /**
   * get the orientation lock catering for container grain
   */
  getNecessaryOrientation(n) {
    return A(this.orientationLock) ? !n || this.isGroup() ? A(this.orientationLock) ? this.orientationLock : null : this.convertShapeGrainToOrientationLock(n) : null;
  }
  /**
   * get the required grain rotation
   * checks for stock grain and part orientationLock
   * does not check for fit
   */
  getGrainRotation(n) {
    if (!A(this.orientationLock))
      return null;
    const i = n.getStock();
    return !this.orientationLock || !A(i == null ? void 0 : i.grain) ? null : this.isGroup() ? this.orientationLock === "l" ? 0 : 1 : this.orientationLock === (i == null ? void 0 : i.grain) ? 0 : 1;
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
    if (i === "l")
      return this.setRotation(0);
    if (i === "w")
      return this.setRotation(1);
  }
  setRotationToOrientationLockWithoutContainer() {
    if (this.orientationLock === "l")
      return this.setRotation(0);
    if (this.orientationLock === "w")
      return this.setRotation(1);
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
      return i.push(new Ao({
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
    return lp(n, this, i);
  }
  clone(n = null) {
    const i = this.id.split(".");
    n ? i.pop() : (n = i.pop(), n++), i.push(n);
    const r = i.join("."), s = structuredClone(this);
    return s.id = r, s.added = !1, s.duplicate = !0, delete s.score, delete s.bestScore, delete s.stock, delete s.placementOrder, delete s.inGroup, delete s.addedAsGroup, delete s.groupID, delete s.isFirstShape, new Pn(s);
  }
  isTooCloseToEdges(n) {
    var r, s;
    const i = ((s = (r = n.saw) == null ? void 0 : r.options) == null ? void 0 : s.minSpacing) || this.minSpacing;
    return i ? this.getDistancesToContainerEdges(n).some((o) => o > 0 && o <= i) : !1;
  }
}
class fp extends up {
  constructor(n) {
    n.preventAutoRotation = !0;
    super(n);
    v(this, "shapes");
    v(this, "cuts");
    v(this, "phase");
    v(this, "merged");
    v(this, "children");
    v(this, "siblings");
    //used by vis only
    v(this, "parent");
    v(this, "segmentType");
    v(this, "completed");
    //used by vis only
    v(this, "rowSegment");
    //used by cuts
    v(this, "placementOrder");
    v(this, "hasBeamTrim");
    v(this, "cutDirection");
    if (this.validateSegment(n), this.issues.length)
      throw new Error(`Segment validation failed - ${this.issues.join(" ")}`);
    delete this.trim, delete this.trimmed, this.shapes = A(n == null ? void 0 : n.shapes) ? n.shapes : [], this.cuts = [], this.phase = A(n == null ? void 0 : n.phase) ? n.phase : null, this.merged = A(n == null ? void 0 : n.merged) ? n.merged : !1, this.parent = A(n == null ? void 0 : n.parent) ? n.parent : null, this.children = A(n == null ? void 0 : n.children) ? n.children : [], this.siblings = A(n == null ? void 0 : n.siblings) ? n.siblings : [], this.offcut = A(n == null ? void 0 : n.offcut) ? n.offcut : !1, this.segmentType = A(n == null ? void 0 : n.segmentType) ? n.segmentType : null, this.placementOrder = null, this.cutDirection = A(n == null ? void 0 : n.cutDirection) ? n.cutDirection : "l", this.hasBeamTrim = A(n == null ? void 0 : n.hasBeamTrim) ? n.hasBeamTrim : !1;
  }
  validateSegment(n) {
    var i, r;
    (xt.lessThanOrEqualTo(n.w, 0) || xt.lessThanOrEqualTo(n.l, 0)) && this.issues.push(`Zero / negative dimension - l: ${n.l}, w: ${n.w}.`), (xt.lessThan(n.x, 0) || xt.lessThan(n.y, 0)) && this.issues.push(`Negative position - x: ${n == null ? void 0 : n.x}, y: ${n == null ? void 0 : n.y}.`), n != null && n.stock && (xt.greaterThan(n.x + n.l, n.stock.l) || xt.greaterThan(n.y + n.w, n.stock.w)) && this.issues.push(`Outside of stock ${n.stock.id} - x: ${n.x}, y: ${n.y}, l: ${n.l}, w: ${n.w}, sl: ${(i = n == null ? void 0 : n.stock) == null ? void 0 : i.l}, sw: ${(r = n == null ? void 0 : n.stock) == null ? void 0 : r.w}.`);
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
    })), delete this.siblings, delete this.parent, this.stockId = (this == null ? void 0 : this.stockId) ?? ((n = this == null ? void 0 : this.stock) == null ? void 0 : n.id), delete this.stock, delete this.trim, this.algoBenchmark = null;
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
class Gl extends Pn {
  constructor(n) {
    var i;
    if (!((i = n == null ? void 0 : n.shapes) != null && i.length))
      throw new Error("attempting to create a group with no shapes");
    super(n);
    v(this, "shapes");
    v(this, "joiningDimension");
    v(this, "container");
    v(this, "outOfBounds");
    v(this, "collision");
    v(this, "counter", 0);
    v(this, "type");
    if ((n == null ? void 0 : n.type) !== "user" && n.joiningDimension !== this.l && n.joiningDimension !== this.w)
      throw new Error("joiningDimension must be either w or l");
    this.shapes = n.shapes, this.joiningDimension = n.joiningDimension, this.container = n.container, this.type = (n == null ? void 0 : n.type) ?? "auto", this.initGroup();
  }
  initGroup() {
    var n;
    (n = this == null ? void 0 : this.shapes) != null && n.length && (this.shapes.forEach((i) => {
      i.inGroup = !0;
    }), this.type !== "user" && this.sortShapes());
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
    return this.l === this.joiningDimension ? n.l !== this.l : n.w !== this.w;
  }
  /**
   * orientate all the shapes correctly to fit in the group
   * @param {Stock} stock
   */
  orientateShapes(n) {
    this.shapes.forEach((i) => {
      this.shouldRotateShape(i) && i.rotate(null, n);
    });
  }
  /**
   * get the primary dimension of the group
   * @returns {String} 'w' or 'l'
   */
  getPrimaryDimension() {
    return this.isSquare() ? this.shapes[0].l === this.joiningDimension ? "w" : "l" : this.l === this.joiningDimension ? "w" : "l";
  }
  /**
   * sort the shapes by size
   */
  sortShapes() {
    this.shapes.sort((n, i) => i[this.getPrimaryDimension()] - n[this.getPrimaryDimension()]);
  }
  /**
   * place the group shapes on the stock
   */
  placeShapes(n) {
    this.added = !0, this.orientateShapes(n), this.shapes.forEach((i, r) => {
      r === 0 && this.x === 0 && this.y === 0 && (i.isFirstShape = !0), i.addedAsGroup = this.id, i.inGroup = !1, i.score = this.score, i.guillotineData = this.guillotineData, i.bestScore = this.bestScore, typeof this.placementOrder == "number" && (i.groupPlacementOrder = r, i.placementOrder = this.placementOrder + r / 1e6);
    }), this.setShapeCoordinates(!0, n);
  }
  /**
   * get shape coordinates if the shapes have not yet been placed
   */
  setShapeCoordinates(n = !0, i) {
    dw(this.shapes, i, this, this.getPrimaryDimension(), n, this.type !== "user");
  }
  //this is for groups which are created once and reused between stock e.g. user groups
  orientateCorrectly(n) {
    this.orientateShapes(n), this.setRotationToOrientationLock(n);
  }
}
function xw(t, e) {
  const n = kw(t[0]);
  if (n && (t = t.map((u) => {
    const f = new Pn(u);
    return f.trimDimensions(), f;
  })), dp(e[0]) && (e = e.map((u, f) => (u.id = `${f.toString()}.0`, new Dn(u)))), t.some((u) => A(u.stockLock) && u.stockLock.length))
    return;
  e = e.filter((u) => u.autoAdd === !0 || A(u.q) && u.q > 0);
  const r = e.some((u) => A(u.material)), s = e.some((u) => A(u.t));
  if (!e.every((u) => A(u.type === "linear")) && !r && !s)
    return !1;
  const a = /* @__PURE__ */ new Set();
  for (let u = 0; u < t.length; u++) {
    const f = t[u];
    f.stockMatch = {
      material: [],
      thickness: [],
      width: [],
      fit: []
    };
    const h = e.filter((p, y) => (f.stockMatch.material[y] = null, f.stockMatch.thickness[y] = null, f.stockMatch.width[y] = null, f.stockMatch.fit[y] = null, lp(p, f) ? f.stockMatch.fit[y] = !0 : f.stockMatch.fit[y] = !1, r ? p.material === f.material ? f.stockMatch.material[y] = !0 : f.stockMatch.material[y] = !1 : f.stockMatch.material[y] = !0, s ? A(f.t) && A(p.t) && xt.equalTo(f.t, p.t) ? f.stockMatch.thickness[y] = !0 : f.stockMatch.thickness[y] = !1 : f.stockMatch.thickness[y] = !0, p.type === "linear" ? (f.canRotate(0, p) && xt.equalTo(f.w, p.w) || f.canRotate(1, p) && xt.equalTo(f.l, p.w)) && (f.stockMatch.width[y] = !0) : f.stockMatch.width[y] = !0, f.stockMatch.fit[y] && f.stockMatch.material[y] && f.stockMatch.thickness[y] && f.stockMatch.width[y]));
    if (f.stockMatch.fit = !f.stockMatch.fit.every((p) => p === !1), f.stockMatch.material = !f.stockMatch.material.every((p) => p === !1), f.stockMatch.thickness = !f.stockMatch.thickness.every((p) => p === !1), f.stockMatch.width = !f.stockMatch.width.every((p) => p === !1), !n) {
      if (h.length) {
        const p = h.map((y) => y.parentID);
        f.stockLock = p, p.forEach((y) => a.add(y));
      } else
        f.stockMatch.fit ? (f.stockMatch.material || f.issues.push(`materials must match - could not find any stock with ${f.material ? f.material + " material" : "no material set"}`), f.stockMatch.thickness || f.issues.push(`thicknesses must match - could not find any stock with ${f.t ? "thickness " + f.t : "no thickness set"}`), f.stockMatch.width || f.issues.push(`widths must match for linear calculations - could not find any stock with ${f.w ? "width " + f.w : "no width set"}`)) : f.issues.push("will not fit on any stock");
      f.stockMatch = null;
    }
  }
  const l = t.filter((u) => !u.stockLock || !u.stockLock.length).sort(js.ID), c = e.filter((u) => !a.has(u.parentID)).sort(js.ID);
  return e = e.filter((u) => br(u)).filter((u) => a.has(u.parentID)), (r || s) && (t = t.filter((u) => {
    var f;
    return (f = u == null ? void 0 : u.stockLock) == null ? void 0 : f.length;
  })), {
    stockList: e,
    unusableShapes: l,
    shapeList: t,
    unusableStock: c
  };
}
function Sw(t) {
  return t.type === "user";
}
function Ys(t) {
  return t instanceof Gl && t.type !== "user";
}
function hp(t) {
  return t instanceof Gl && t.type === "user";
}
function dp(t) {
  return t instanceof cp;
}
function kw(t) {
  return t instanceof zl;
}
function br(t) {
  return t instanceof Dn;
}
function Es(t) {
  return t instanceof Pn;
}
function Ew(t) {
  return t instanceof fp;
}
function Tw(t) {
  return t instanceof On;
}
function Mr(t) {
  return t ? (t = t.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^ a-z0-9._\-|]/gim, ""), t.trim()) : null;
}
function Yl(t, e = 50) {
  return t ? (t = t.substring(0, e), t.trim()) : null;
}
function Aw(t) {
  return Ph() ? (nm(t), !0) : !1;
}
function Kl(t) {
  return typeof t == "function" ? t() : zh(t);
}
const Cw = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ow = Object.prototype.toString, Pw = (t) => Ow.call(t) === "[object Object]", Nw = () => {
};
function Iw(t, e) {
  function n(...i) {
    return new Promise((r, s) => {
      Promise.resolve(t(() => e.apply(this, i), { fn: e, thisArg: this, args: i })).then(r).catch(s);
    });
  }
  return n;
}
const pp = (t) => t();
function Lw(t = pp) {
  const e = wi(!0);
  function n() {
    e.value = !1;
  }
  function i() {
    e.value = !0;
  }
  const r = (...s) => {
    e.value && t(...s);
  };
  return { isActive: wl(e), pause: n, resume: i, eventFilter: r };
}
function Mw(t) {
  return t || xo();
}
function Rw(t, e, n = {}) {
  const {
    eventFilter: i = pp,
    ...r
  } = n;
  return on(
    t,
    Iw(
      i,
      e
    ),
    r
  );
}
function Dw(t, e, n = {}) {
  const {
    eventFilter: i,
    ...r
  } = n, { eventFilter: s, pause: o, resume: a, isActive: l } = Lw(i);
  return { stop: Rw(
    t,
    e,
    {
      ...r,
      eventFilter: s
    }
  ), pause: o, resume: a, isActive: l };
}
function $w(t, e = !0, n) {
  Mw() ? Ol(t, n) : e ? t() : mo(t);
}
function Fw(t) {
  var e;
  const n = Kl(t);
  return (e = n == null ? void 0 : n.$el) != null ? e : n;
}
const Ks = Cw ? window : void 0;
function cf(...t) {
  let e, n, i, r;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([n, i, r] = t, e = Ks) : [e, n, i, r] = t, !e)
    return Nw;
  Array.isArray(n) || (n = [n]), Array.isArray(i) || (i = [i]);
  const s = [], o = () => {
    s.forEach((u) => u()), s.length = 0;
  }, a = (u, f, h, p) => (u.addEventListener(f, h, p), () => u.removeEventListener(f, h, p)), l = on(
    () => [Fw(e), Kl(r)],
    ([u, f]) => {
      if (o(), !u)
        return;
      const h = Pw(f) ? { ...f } : f;
      s.push(
        ...n.flatMap((p) => i.map((y) => a(u, p, y, h)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    l(), o();
  };
  return Aw(c), c;
}
const Xr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Jr = "__vueuse_ssr_handlers__", Bw = /* @__PURE__ */ Uw();
function Uw() {
  return Jr in Xr || (Xr[Jr] = Xr[Jr] || {}), Xr[Jr];
}
function qw(t, e) {
  return Bw[t] || e;
}
function Hw(t) {
  return t == null ? "any" : t instanceof Set ? "set" : t instanceof Map ? "map" : t instanceof Date ? "date" : typeof t == "boolean" ? "boolean" : typeof t == "string" ? "string" : typeof t == "object" ? "object" : Number.isNaN(t) ? "any" : "number";
}
const Ww = {
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
}, uf = "vueuse-storage";
function Vw(t, e, n, i = {}) {
  var r;
  const {
    flush: s = "pre",
    deep: o = !0,
    listenToStorageChanges: a = !0,
    writeDefaults: l = !0,
    mergeDefaults: c = !1,
    shallow: u,
    window: f = Ks,
    eventFilter: h,
    onError: p = (H) => {
      console.error(H);
    },
    initOnMounted: y
  } = i, S = (u ? pi : wi)(typeof e == "function" ? e() : e);
  if (!n)
    try {
      n = qw("getDefaultStorage", () => {
        var H;
        return (H = Ks) == null ? void 0 : H.localStorage;
      })();
    } catch (H) {
      p(H);
    }
  if (!n)
    return S;
  const k = Kl(e), m = Hw(k), b = (r = i.serializer) != null ? r : Ww[m], { pause: x, resume: _ } = Dw(
    S,
    () => P(S.value),
    { flush: s, deep: o, eventFilter: h }
  );
  f && a && $w(() => {
    cf(f, "storage", W), cf(f, uf, M), y && W();
  }), y || W();
  function E(H, F) {
    f && f.dispatchEvent(new CustomEvent(uf, {
      detail: {
        key: t,
        oldValue: H,
        newValue: F,
        storageArea: n
      }
    }));
  }
  function P(H) {
    try {
      const F = n.getItem(t);
      if (H == null)
        E(F, null), n.removeItem(t);
      else {
        const G = b.write(H);
        F !== G && (n.setItem(t, G), E(F, G));
      }
    } catch (F) {
      p(F);
    }
  }
  function L(H) {
    const F = H ? H.newValue : n.getItem(t);
    if (F == null)
      return l && k != null && n.setItem(t, b.write(k)), k;
    if (!H && c) {
      const G = b.read(F);
      return typeof c == "function" ? c(G, k) : m === "object" && !Array.isArray(G) ? { ...k, ...G } : G;
    } else
      return typeof F != "string" ? F : b.read(F);
  }
  function W(H) {
    if (!(H && H.storageArea !== n)) {
      if (H && H.key == null) {
        S.value = k;
        return;
      }
      if (!(H && H.key !== t)) {
        x();
        try {
          (H == null ? void 0 : H.newValue) !== b.write(S.value) && (S.value = L(H));
        } catch (F) {
          p(F);
        } finally {
          H ? mo(_) : _();
        }
      }
    }
  }
  function M(H) {
    W(H.detail);
  }
  return S;
}
function ff(t, e, n = {}) {
  const { window: i = Ks } = n;
  return Vw(t, e, i == null ? void 0 : i.localStorage, n);
}
const Xe = /* @__PURE__ */ Object.create(null);
Xe.open = "0";
Xe.close = "1";
Xe.ping = "2";
Xe.pong = "3";
Xe.message = "4";
Xe.upgrade = "5";
Xe.noop = "6";
const Ts = /* @__PURE__ */ Object.create(null);
Object.keys(Xe).forEach((t) => {
  Ts[Xe[t]] = t;
});
const Ba = { type: "error", data: "parser error" }, gp = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", mp = typeof ArrayBuffer == "function", yp = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer, Xl = ({ type: t, data: e }, n, i) => gp && e instanceof Blob ? n ? i(e) : hf(e, i) : mp && (e instanceof ArrayBuffer || yp(e)) ? n ? i(e) : hf(new Blob([e]), i) : i(Xe[t] + (e || "")), hf = (t, e) => {
  const n = new FileReader();
  return n.onload = function() {
    const i = n.result.split(",")[1];
    e("b" + (i || ""));
  }, n.readAsDataURL(t);
};
function df(t) {
  return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
}
let ta;
function jw(t, e) {
  if (gp && t.data instanceof Blob)
    return t.data.arrayBuffer().then(df).then(e);
  if (mp && (t.data instanceof ArrayBuffer || yp(t.data)))
    return e(df(t.data));
  Xl(t, !1, (n) => {
    ta || (ta = new TextEncoder()), e(ta.encode(n));
  });
}
const pf = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Zi = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < pf.length; t++)
  Zi[pf.charCodeAt(t)] = t;
const zw = (t) => {
  let e = t.length * 0.75, n = t.length, i, r = 0, s, o, a, l;
  t[t.length - 1] === "=" && (e--, t[t.length - 2] === "=" && e--);
  const c = new ArrayBuffer(e), u = new Uint8Array(c);
  for (i = 0; i < n; i += 4)
    s = Zi[t.charCodeAt(i)], o = Zi[t.charCodeAt(i + 1)], a = Zi[t.charCodeAt(i + 2)], l = Zi[t.charCodeAt(i + 3)], u[r++] = s << 2 | o >> 4, u[r++] = (o & 15) << 4 | a >> 2, u[r++] = (a & 3) << 6 | l & 63;
  return c;
}, Gw = typeof ArrayBuffer == "function", Jl = (t, e) => {
  if (typeof t != "string")
    return {
      type: "message",
      data: bp(t, e)
    };
  const n = t.charAt(0);
  return n === "b" ? {
    type: "message",
    data: Yw(t.substring(1), e)
  } : Ts[n] ? t.length > 1 ? {
    type: Ts[n],
    data: t.substring(1)
  } : {
    type: Ts[n]
  } : Ba;
}, Yw = (t, e) => {
  if (Gw) {
    const n = zw(t);
    return bp(n, e);
  } else
    return { base64: !0, data: t };
}, bp = (t, e) => {
  switch (e) {
    case "blob":
      return t instanceof Blob ? t : new Blob([t]);
    case "arraybuffer":
    default:
      return t instanceof ArrayBuffer ? t : t.buffer;
  }
}, vp = "", Kw = (t, e) => {
  const n = t.length, i = new Array(n);
  let r = 0;
  t.forEach((s, o) => {
    Xl(s, !1, (a) => {
      i[o] = a, ++r === n && e(i.join(vp));
    });
  });
}, Xw = (t, e) => {
  const n = t.split(vp), i = [];
  for (let r = 0; r < n.length; r++) {
    const s = Jl(n[r], e);
    if (i.push(s), s.type === "error")
      break;
  }
  return i;
};
function Jw() {
  return new TransformStream({
    transform(t, e) {
      jw(t, (n) => {
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
let ea;
function Qr(t) {
  return t.reduce((e, n) => e + n.length, 0);
}
function Zr(t, e) {
  if (t[0].length === e)
    return t.shift();
  const n = new Uint8Array(e);
  let i = 0;
  for (let r = 0; r < e; r++)
    n[r] = t[0][i++], i === t[0].length && (t.shift(), i = 0);
  return t.length && i < t[0].length && (t[0] = t[0].slice(i)), n;
}
function Qw(t, e) {
  ea || (ea = new TextDecoder());
  const n = [];
  let i = 0, r = -1, s = !1;
  return new TransformStream({
    transform(o, a) {
      for (n.push(o); ; ) {
        if (i === 0) {
          if (Qr(n) < 1)
            break;
          const l = Zr(n, 1);
          s = (l[0] & 128) === 128, r = l[0] & 127, r < 126 ? i = 3 : r === 126 ? i = 1 : i = 2;
        } else if (i === 1) {
          if (Qr(n) < 2)
            break;
          const l = Zr(n, 2);
          r = new DataView(l.buffer, l.byteOffset, l.length).getUint16(0), i = 3;
        } else if (i === 2) {
          if (Qr(n) < 8)
            break;
          const l = Zr(n, 8), c = new DataView(l.buffer, l.byteOffset, l.length), u = c.getUint32(0);
          if (u > Math.pow(2, 21) - 1) {
            a.enqueue(Ba);
            break;
          }
          r = u * Math.pow(2, 32) + c.getUint32(4), i = 3;
        } else {
          if (Qr(n) < r)
            break;
          const l = Zr(n, r);
          a.enqueue(Jl(s ? l : ea.decode(l), e)), i = 0;
        }
        if (r === 0 || r > t) {
          a.enqueue(Ba);
          break;
        }
      }
    }
  });
}
const _p = 4;
function Ft(t) {
  if (t)
    return Zw(t);
}
function Zw(t) {
  for (var e in Ft.prototype)
    t[e] = Ft.prototype[e];
  return t;
}
Ft.prototype.on = Ft.prototype.addEventListener = function(t, e) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
};
Ft.prototype.once = function(t, e) {
  function n() {
    this.off(t, n), e.apply(this, arguments);
  }
  return n.fn = e, this.on(t, n), this;
};
Ft.prototype.off = Ft.prototype.removeListener = Ft.prototype.removeAllListeners = Ft.prototype.removeEventListener = function(t, e) {
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
Ft.prototype.emit = function(t) {
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
Ft.prototype.emitReserved = Ft.prototype.emit;
Ft.prototype.listeners = function(t) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
};
Ft.prototype.hasListeners = function(t) {
  return !!this.listeners(t).length;
};
const ke = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
function wp(t, ...e) {
  return e.reduce((n, i) => (t.hasOwnProperty(i) && (n[i] = t[i]), n), {});
}
const tx = ke.setTimeout, ex = ke.clearTimeout;
function Lo(t, e) {
  e.useNativeTimers ? (t.setTimeoutFn = tx.bind(ke), t.clearTimeoutFn = ex.bind(ke)) : (t.setTimeoutFn = ke.setTimeout.bind(ke), t.clearTimeoutFn = ke.clearTimeout.bind(ke));
}
const nx = 1.33;
function ix(t) {
  return typeof t == "string" ? rx(t) : Math.ceil((t.byteLength || t.size) * nx);
}
function rx(t) {
  let e = 0, n = 0;
  for (let i = 0, r = t.length; i < r; i++)
    e = t.charCodeAt(i), e < 128 ? n += 1 : e < 2048 ? n += 2 : e < 55296 || e >= 57344 ? n += 3 : (i++, n += 4);
  return n;
}
function sx(t) {
  let e = "";
  for (let n in t)
    t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
  return e;
}
function ox(t) {
  let e = {}, n = t.split("&");
  for (let i = 0, r = n.length; i < r; i++) {
    let s = n[i].split("=");
    e[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
  }
  return e;
}
class ax extends Error {
  constructor(e, n, i) {
    super(e), this.description = n, this.context = i, this.type = "TransportError";
  }
}
class Ql extends Ft {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(e) {
    super(), this.writable = !1, Lo(this, e), this.opts = e, this.query = e.query, this.socket = e.socket;
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
    return super.emitReserved("error", new ax(e, n, i)), this;
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
    const n = Jl(e, this.socket.binaryType);
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
    const n = sx(e);
    return n.length ? "?" + n : "";
  }
}
const xp = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), Ua = 64, lx = {};
let gf = 0, ts = 0, mf;
function yf(t) {
  let e = "";
  do
    e = xp[t % Ua] + e, t = Math.floor(t / Ua);
  while (t > 0);
  return e;
}
function Sp() {
  const t = yf(+/* @__PURE__ */ new Date());
  return t !== mf ? (gf = 0, mf = t) : t + "." + yf(gf++);
}
for (; ts < Ua; ts++)
  lx[xp[ts]] = ts;
let kp = !1;
try {
  kp = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const cx = kp;
function Ep(t) {
  const e = t.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!e || cx))
      return new XMLHttpRequest();
  } catch {
  }
  if (!e)
    try {
      return new ke[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
function ux() {
}
const fx = function() {
  return new Ep({
    xdomain: !1
  }).responseType != null;
}();
class hx extends Ql {
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
    this.supportsBinary = fx && !n, this.opts.withCredentials && (this.cookieJar = void 0);
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
    Xw(e, this.socket.binaryType).forEach(n), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
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
    this.writable = !1, Kw(e, (n) => {
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
    return this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = Sp()), !this.supportsBinary && !n.sid && (n.b64 = 1), this.createUri(e, n);
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @private
   */
  request(e = {}) {
    return Object.assign(e, { xd: this.xd, cookieJar: this.cookieJar }, this.opts), new Ge(this.uri(), e);
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
class Ge extends Ft {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(e, n) {
    super(), Lo(this, n), this.opts = n, this.method = n.method || "GET", this.uri = e, this.data = n.data !== void 0 ? n.data : null, this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  create() {
    var e;
    const n = wp(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    n.xdomain = !!this.opts.xd;
    const i = this.xhr = new Ep(n);
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
    typeof document < "u" && (this.index = Ge.requestsCount++, Ge.requests[this.index] = this);
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
      if (this.xhr.onreadystatechange = ux, e)
        try {
          this.xhr.abort();
        } catch {
        }
      typeof document < "u" && delete Ge.requests[this.index], this.xhr = null;
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
Ge.requestsCount = 0;
Ge.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", bf);
  else if (typeof addEventListener == "function") {
    const t = "onpagehide" in ke ? "pagehide" : "unload";
    addEventListener(t, bf, !1);
  }
}
function bf() {
  for (let t in Ge.requests)
    Ge.requests.hasOwnProperty(t) && Ge.requests[t].abort();
}
const Zl = typeof Promise == "function" && typeof Promise.resolve == "function" ? (e) => Promise.resolve().then(e) : (e, n) => n(e, 0), es = ke.WebSocket || ke.MozWebSocket, vf = !0, dx = "arraybuffer", _f = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class px extends Ql {
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
    const e = this.uri(), n = this.opts.protocols, i = _f ? {} : wp(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (i.headers = this.opts.extraHeaders);
    try {
      this.ws = vf && !_f ? n ? new es(e, n) : new es(e) : new es(e, n, i);
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
      Xl(i, this.supportsBinary, (s) => {
        const o = {};
        try {
          vf && this.ws.send(s);
        } catch {
        }
        r && Zl(() => {
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
    return this.opts.timestampRequests && (n[this.opts.timestampParam] = Sp()), this.supportsBinary || (n.b64 = 1), this.createUri(e, n);
  }
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @private
   */
  check() {
    return !!es;
  }
}
class gx extends Ql {
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
        const n = Qw(Number.MAX_SAFE_INTEGER, this.socket.binaryType), i = e.readable.pipeThrough(n).getReader(), r = Jw();
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
        r && Zl(() => {
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
const mx = {
  websocket: px,
  webtransport: gx,
  polling: hx
}, yx = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, bx = [
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
function qa(t) {
  if (t.length > 2e3)
    throw "URI too long";
  const e = t, n = t.indexOf("["), i = t.indexOf("]");
  n != -1 && i != -1 && (t = t.substring(0, n) + t.substring(n, i).replace(/:/g, ";") + t.substring(i, t.length));
  let r = yx.exec(t || ""), s = {}, o = 14;
  for (; o--; )
    s[bx[o]] = r[o] || "";
  return n != -1 && i != -1 && (s.source = e, s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"), s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), s.ipv6uri = !0), s.pathNames = vx(s, s.path), s.queryKey = _x(s, s.query), s;
}
function vx(t, e) {
  const n = /\/{2,9}/g, i = e.replace(n, "/").split("/");
  return (e.slice(0, 1) == "/" || e.length === 0) && i.splice(0, 1), e.slice(-1) == "/" && i.splice(i.length - 1, 1), i;
}
function _x(t, e) {
  const n = {};
  return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(i, r, s) {
    r && (n[r] = s);
  }), n;
}
let Tp = class di extends Ft {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(e, n = {}) {
    super(), this.binaryType = dx, this.writeBuffer = [], e && typeof e == "object" && (n = e, e = null), e ? (e = qa(e), n.hostname = e.host, n.secure = e.protocol === "https" || e.protocol === "wss", n.port = e.port, e.query && (n.query = e.query)) : n.host && (n.hostname = qa(n.host).host), Lo(this, n), this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:", n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = n.transports || [
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
    }, n), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = ox(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
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
    n.EIO = _p, n.transport = e, this.id && (n.sid = this.id);
    const i = Object.assign({}, this.opts, {
      query: n,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[e]);
    return new mx[e](i);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  open() {
    let e;
    if (this.opts.rememberUpgrade && di.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
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
    di.priorWebsocketSuccess = !1;
    const r = () => {
      i || (n.send([{ type: "ping", data: "probe" }]), n.once("packet", (f) => {
        if (!i)
          if (f.type === "pong" && f.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", n), !n)
              return;
            di.priorWebsocketSuccess = n.name === "websocket", this.transport.pause(() => {
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
    if (this.readyState = "open", di.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
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
      if (r && (n += ix(r)), i > 0 && n > this.maxPayload)
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
    di.priorWebsocketSuccess = !1, this.emitReserved("error", e), this.onClose("transport error", e);
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
Tp.protocol = _p;
function wx(t, e = "", n) {
  let i = t;
  n = n || typeof location < "u" && location, t == null && (t = n.protocol + "//" + n.host), typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = n.protocol + t : t = n.host + t), /^(https?|wss?):\/\//.test(t) || (typeof n < "u" ? t = n.protocol + "//" + t : t = "https://" + t), i = qa(t)), i.port || (/^(http|ws)$/.test(i.protocol) ? i.port = "80" : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")), i.path = i.path || "/";
  const s = i.host.indexOf(":") !== -1 ? "[" + i.host + "]" : i.host;
  return i.id = i.protocol + "://" + s + ":" + i.port + e, i.href = i.protocol + "://" + s + (n && n.port === i.port ? "" : ":" + i.port), i;
}
const xx = typeof ArrayBuffer == "function", Sx = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer, Ap = Object.prototype.toString, kx = typeof Blob == "function" || typeof Blob < "u" && Ap.call(Blob) === "[object BlobConstructor]", Ex = typeof File == "function" || typeof File < "u" && Ap.call(File) === "[object FileConstructor]";
function tc(t) {
  return xx && (t instanceof ArrayBuffer || Sx(t)) || kx && t instanceof Blob || Ex && t instanceof File;
}
function As(t, e) {
  if (!t || typeof t != "object")
    return !1;
  if (Array.isArray(t)) {
    for (let n = 0, i = t.length; n < i; n++)
      if (As(t[n]))
        return !0;
    return !1;
  }
  if (tc(t))
    return !0;
  if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
    return As(t.toJSON(), !0);
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n) && As(t[n]))
      return !0;
  return !1;
}
function Tx(t) {
  const e = [], n = t.data, i = t;
  return i.data = Ha(n, e), i.attachments = e.length, { packet: i, buffers: e };
}
function Ha(t, e) {
  if (!t)
    return t;
  if (tc(t)) {
    const n = { _placeholder: !0, num: e.length };
    return e.push(t), n;
  } else if (Array.isArray(t)) {
    const n = new Array(t.length);
    for (let i = 0; i < t.length; i++)
      n[i] = Ha(t[i], e);
    return n;
  } else if (typeof t == "object" && !(t instanceof Date)) {
    const n = {};
    for (const i in t)
      Object.prototype.hasOwnProperty.call(t, i) && (n[i] = Ha(t[i], e));
    return n;
  }
  return t;
}
function Ax(t, e) {
  return t.data = Wa(t.data, e), delete t.attachments, t;
}
function Wa(t, e) {
  if (!t)
    return t;
  if (t && t._placeholder === !0) {
    if (typeof t.num == "number" && t.num >= 0 && t.num < e.length)
      return e[t.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(t))
    for (let n = 0; n < t.length; n++)
      t[n] = Wa(t[n], e);
  else if (typeof t == "object")
    for (const n in t)
      Object.prototype.hasOwnProperty.call(t, n) && (t[n] = Wa(t[n], e));
  return t;
}
const Cx = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], Ox = 5;
var ut;
(function(t) {
  t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK";
})(ut || (ut = {}));
class Px {
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
    return (e.type === ut.EVENT || e.type === ut.ACK) && As(e) ? this.encodeAsBinary({
      type: e.type === ut.EVENT ? ut.BINARY_EVENT : ut.BINARY_ACK,
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
    return (e.type === ut.BINARY_EVENT || e.type === ut.BINARY_ACK) && (n += e.attachments + "-"), e.nsp && e.nsp !== "/" && (n += e.nsp + ","), e.id != null && (n += e.id), e.data != null && (n += JSON.stringify(e.data, this.replacer)), n;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(e) {
    const n = Tx(e), i = this.encodeAsString(n.packet), r = n.buffers;
    return r.unshift(i), r;
  }
}
function wf(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
class ec extends Ft {
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
      const i = n.type === ut.BINARY_EVENT;
      i || n.type === ut.BINARY_ACK ? (n.type = i ? ut.EVENT : ut.ACK, this.reconstructor = new Nx(n), n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n);
    } else if (tc(e) || e.base64)
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
    if (ut[i.type] === void 0)
      throw new Error("unknown packet type " + i.type);
    if (i.type === ut.BINARY_EVENT || i.type === ut.BINARY_ACK) {
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
      if (ec.isPayloadValid(i.type, s))
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
      case ut.CONNECT:
        return wf(n);
      case ut.DISCONNECT:
        return n === void 0;
      case ut.CONNECT_ERROR:
        return typeof n == "string" || wf(n);
      case ut.EVENT:
      case ut.BINARY_EVENT:
        return Array.isArray(n) && (typeof n[0] == "number" || typeof n[0] == "string" && Cx.indexOf(n[0]) === -1);
      case ut.ACK:
      case ut.BINARY_ACK:
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
class Nx {
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
      const n = Ax(this.reconPack, this.buffers);
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
const Ix = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, Decoder: ec, Encoder: Px, get PacketType() {
  return ut;
}, protocol: Ox }, Symbol.toStringTag, { value: "Module" }));
function Pe(t, e, n) {
  return t.on(e, n), function() {
    t.off(e, n);
  };
}
const Lx = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Cp extends Ft {
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
      Pe(e, "open", this.onopen.bind(this)),
      Pe(e, "packet", this.onpacket.bind(this)),
      Pe(e, "error", this.onerror.bind(this)),
      Pe(e, "close", this.onclose.bind(this))
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
    if (Lx.hasOwnProperty(e))
      throw new Error('"' + e.toString() + '" is a reserved event name');
    if (n.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(n), this;
    const i = {
      type: ut.EVENT,
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
      for (let a = 0; a < this.sendBuffer.length; a++)
        this.sendBuffer[a].id === e && this.sendBuffer.splice(a, 1);
      n.call(this, new Error("operation has timed out"));
    }, r), o = (...a) => {
      this.io.clearTimeoutFn(s), n.apply(this, a);
    };
    o.withError = !0, this.acks[e] = o;
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
    return new Promise((i, r) => {
      const s = (o, a) => o ? r(o) : i(a);
      s.withError = !0, n.push(s), this.emit(e, ...n);
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
      type: ut.CONNECT,
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
    this.connected = !1, delete this.id, this.emitReserved("disconnect", e, n), this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((e) => {
      if (!this.sendBuffer.some((i) => String(i.id) === e)) {
        const i = this.acks[e];
        delete this.acks[e], i.withError && i.call(this, new Error("socket has been disconnected"));
      }
    });
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
        case ut.CONNECT:
          e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case ut.EVENT:
        case ut.BINARY_EVENT:
          this.onevent(e);
          break;
        case ut.ACK:
        case ut.BINARY_ACK:
          this.onack(e);
          break;
        case ut.DISCONNECT:
          this.ondisconnect();
          break;
        case ut.CONNECT_ERROR:
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
        type: ut.ACK,
        id: e,
        data: r
      }));
    };
  }
  /**
   * Called upon a server acknowledgement.
   *
   * @param packet
   * @private
   */
  onack(e) {
    const n = this.acks[e.id];
    typeof n == "function" && (delete this.acks[e.id], n.withError && e.data.unshift(null), n.apply(this, e.data));
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
    return this.connected && this.packet({ type: ut.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
function Wi(t) {
  t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
}
Wi.prototype.duration = function() {
  var t = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e = Math.random(), n = Math.floor(e * this.jitter * t);
    t = Math.floor(e * 10) & 1 ? t + n : t - n;
  }
  return Math.min(t, this.max) | 0;
};
Wi.prototype.reset = function() {
  this.attempts = 0;
};
Wi.prototype.setMin = function(t) {
  this.ms = t;
};
Wi.prototype.setMax = function(t) {
  this.max = t;
};
Wi.prototype.setJitter = function(t) {
  this.jitter = t;
};
class Va extends Ft {
  constructor(e, n) {
    var i;
    super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (n = e, e = void 0), n = n || {}, n.path = n.path || "/socket.io", this.opts = n, Lo(this, n), this.reconnection(n.reconnection !== !1), this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0), this.reconnectionDelay(n.reconnectionDelay || 1e3), this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3), this.randomizationFactor((i = n.randomizationFactor) !== null && i !== void 0 ? i : 0.5), this.backoff = new Wi({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(n.timeout == null ? 2e4 : n.timeout), this._readyState = "closed", this.uri = e;
    const r = n.parser || Ix;
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
    this.engine = new Tp(this.uri, this.opts);
    const n = this.engine, i = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const r = Pe(n, "open", function() {
      i.onopen(), e && e();
    }), s = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), e ? e(a) : this.maybeReconnectOnOpen();
    }, o = Pe(n, "error", s);
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
    this.subs.push(Pe(e, "ping", this.onping.bind(this)), Pe(e, "data", this.ondata.bind(this)), Pe(e, "error", this.onerror.bind(this)), Pe(e, "close", this.onclose.bind(this)), Pe(this.decoder, "decoded", this.ondecoded.bind(this)));
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
    Zl(() => {
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
    return i ? this._autoConnect && !i.active && i.connect() : (i = new Cp(this, e, n), this.nsps[e] = i), i;
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
const Xi = {};
function Cs(t, e) {
  typeof t == "object" && (e = t, t = void 0), e = e || {};
  const n = wx(t, e.path || "/socket.io"), i = n.source, r = n.id, s = n.path, o = Xi[r] && s in Xi[r].nsps, a = e.forceNew || e["force new connection"] || e.multiplex === !1 || o;
  let l;
  return a ? l = new Va(i, e) : (Xi[r] || (Xi[r] = new Va(i, e)), l = Xi[r]), n.query && !e.query && (e.query = n.queryKey), l.socket(n.path, e);
}
Object.assign(Cs, {
  Manager: Va,
  Socket: Cp,
  io: Cs,
  connect: Cs
});
var Mx = typeof global == "object" && global && global.Object === Object && global, Rx = typeof self == "object" && self && self.Object === Object && self, nc = Mx || Rx || Function("return this")(), Ii = nc.Symbol, Op = Object.prototype, Dx = Op.hasOwnProperty, $x = Op.toString, Ji = Ii ? Ii.toStringTag : void 0;
function Fx(t) {
  var e = Dx.call(t, Ji), n = t[Ji];
  try {
    t[Ji] = void 0;
    var i = !0;
  } catch {
  }
  var r = $x.call(t);
  return i && (e ? t[Ji] = n : delete t[Ji]), r;
}
var Bx = Object.prototype, Ux = Bx.toString;
function qx(t) {
  return Ux.call(t);
}
var Hx = "[object Null]", Wx = "[object Undefined]", xf = Ii ? Ii.toStringTag : void 0;
function Pp(t) {
  return t == null ? t === void 0 ? Wx : Hx : xf && xf in Object(t) ? Fx(t) : qx(t);
}
function Vx(t) {
  return t != null && typeof t == "object";
}
var jx = "[object Symbol]";
function ic(t) {
  return typeof t == "symbol" || Vx(t) && Pp(t) == jx;
}
function zx(t, e) {
  for (var n = -1, i = t == null ? 0 : t.length, r = Array(i); ++n < i; )
    r[n] = e(t[n], n, t);
  return r;
}
var rc = Array.isArray, Gx = 1 / 0, Sf = Ii ? Ii.prototype : void 0, kf = Sf ? Sf.toString : void 0;
function Np(t) {
  if (typeof t == "string")
    return t;
  if (rc(t))
    return zx(t, Np) + "";
  if (ic(t))
    return kf ? kf.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -Gx ? "-0" : e;
}
function Xs(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Yx = "[object AsyncFunction]", Kx = "[object Function]", Xx = "[object GeneratorFunction]", Jx = "[object Proxy]";
function Qx(t) {
  if (!Xs(t))
    return !1;
  var e = Pp(t);
  return e == Kx || e == Xx || e == Yx || e == Jx;
}
var na = nc["__core-js_shared__"], Ef = function() {
  var t = /[^.]+$/.exec(na && na.keys && na.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Zx(t) {
  return !!Ef && Ef in t;
}
var tS = Function.prototype, eS = tS.toString;
function nS(t) {
  if (t != null) {
    try {
      return eS.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var iS = /[\\^$.*+?()[\]{}|]/g, rS = /^\[object .+?Constructor\]$/, sS = Function.prototype, oS = Object.prototype, aS = sS.toString, lS = oS.hasOwnProperty, cS = RegExp(
  "^" + aS.call(lS).replace(iS, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function uS(t) {
  if (!Xs(t) || Zx(t))
    return !1;
  var e = Qx(t) ? cS : rS;
  return e.test(nS(t));
}
function fS(t, e) {
  return t == null ? void 0 : t[e];
}
function sc(t, e) {
  var n = fS(t, e);
  return uS(n) ? n : void 0;
}
var Tf = function() {
  try {
    var t = sc(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), hS = 9007199254740991, dS = /^(?:0|[1-9]\d*)$/;
function pS(t, e) {
  var n = typeof t;
  return e = e ?? hS, !!e && (n == "number" || n != "symbol" && dS.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function gS(t, e, n) {
  e == "__proto__" && Tf ? Tf(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function Ip(t, e) {
  return t === e || t !== t && e !== e;
}
var mS = Object.prototype, yS = mS.hasOwnProperty;
function bS(t, e, n) {
  var i = t[e];
  (!(yS.call(t, e) && Ip(i, n)) || n === void 0 && !(e in t)) && gS(t, e, n);
}
var vS = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, _S = /^\w*$/;
function wS(t, e) {
  if (rc(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || ic(t) ? !0 : _S.test(t) || !vS.test(t) || e != null && t in Object(e);
}
var vr = sc(Object, "create");
function xS() {
  this.__data__ = vr ? vr(null) : {}, this.size = 0;
}
function SS(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var kS = "__lodash_hash_undefined__", ES = Object.prototype, TS = ES.hasOwnProperty;
function AS(t) {
  var e = this.__data__;
  if (vr) {
    var n = e[t];
    return n === kS ? void 0 : n;
  }
  return TS.call(e, t) ? e[t] : void 0;
}
var CS = Object.prototype, OS = CS.hasOwnProperty;
function PS(t) {
  var e = this.__data__;
  return vr ? e[t] !== void 0 : OS.call(e, t);
}
var NS = "__lodash_hash_undefined__";
function IS(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = vr && e === void 0 ? NS : e, this;
}
function ei(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
ei.prototype.clear = xS;
ei.prototype.delete = SS;
ei.prototype.get = AS;
ei.prototype.has = PS;
ei.prototype.set = IS;
function LS() {
  this.__data__ = [], this.size = 0;
}
function Mo(t, e) {
  for (var n = t.length; n--; )
    if (Ip(t[n][0], e))
      return n;
  return -1;
}
var MS = Array.prototype, RS = MS.splice;
function DS(t) {
  var e = this.__data__, n = Mo(e, t);
  if (n < 0)
    return !1;
  var i = e.length - 1;
  return n == i ? e.pop() : RS.call(e, n, 1), --this.size, !0;
}
function $S(t) {
  var e = this.__data__, n = Mo(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function FS(t) {
  return Mo(this.__data__, t) > -1;
}
function BS(t, e) {
  var n = this.__data__, i = Mo(n, t);
  return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this;
}
function Vi(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
Vi.prototype.clear = LS;
Vi.prototype.delete = DS;
Vi.prototype.get = $S;
Vi.prototype.has = FS;
Vi.prototype.set = BS;
var US = sc(nc, "Map");
function qS() {
  this.size = 0, this.__data__ = {
    hash: new ei(),
    map: new (US || Vi)(),
    string: new ei()
  };
}
function HS(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Ro(t, e) {
  var n = t.__data__;
  return HS(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function WS(t) {
  var e = Ro(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function VS(t) {
  return Ro(this, t).get(t);
}
function jS(t) {
  return Ro(this, t).has(t);
}
function zS(t, e) {
  var n = Ro(this, t), i = n.size;
  return n.set(t, e), this.size += n.size == i ? 0 : 1, this;
}
function li(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
li.prototype.clear = qS;
li.prototype.delete = WS;
li.prototype.get = VS;
li.prototype.has = jS;
li.prototype.set = zS;
var GS = "Expected a function";
function oc(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(GS);
  var n = function() {
    var i = arguments, r = e ? e.apply(this, i) : i[0], s = n.cache;
    if (s.has(r))
      return s.get(r);
    var o = t.apply(this, i);
    return n.cache = s.set(r, o) || s, o;
  };
  return n.cache = new (oc.Cache || li)(), n;
}
oc.Cache = li;
var YS = 500;
function KS(t) {
  var e = oc(t, function(i) {
    return n.size === YS && n.clear(), i;
  }), n = e.cache;
  return e;
}
var XS = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, JS = /\\(\\)?/g, QS = KS(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(XS, function(n, i, r, s) {
    e.push(r ? s.replace(JS, "$1") : i || n);
  }), e;
});
function ZS(t) {
  return t == null ? "" : Np(t);
}
function Lp(t, e) {
  return rc(t) ? t : wS(t, e) ? [t] : QS(ZS(t));
}
var tk = 1 / 0;
function Mp(t) {
  if (typeof t == "string" || ic(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -tk ? "-0" : e;
}
function ek(t, e) {
  e = Lp(e, t);
  for (var n = 0, i = e.length; t != null && n < i; )
    t = t[Mp(e[n++])];
  return n && n == i ? t : void 0;
}
function Js(t, e, n) {
  var i = t == null ? void 0 : ek(t, e);
  return i === void 0 ? n : i;
}
function nk(t, e, n, i) {
  if (!Xs(t))
    return t;
  e = Lp(e, t);
  for (var r = -1, s = e.length, o = s - 1, a = t; a != null && ++r < s; ) {
    var l = Mp(e[r]), c = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return t;
    if (r != o) {
      var u = a[l];
      c = i ? i(u, l, a) : void 0, c === void 0 && (c = Xs(u) ? u : pS(e[r + 1]) ? [] : {});
    }
    bS(a, l, c), a = a[l];
  }
  return t;
}
function Af(t, e, n) {
  return t == null ? t : nk(t, e, n);
}
var ja = "http://www.w3.org/1999/xhtml";
const Cf = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ja,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Rp(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Cf.hasOwnProperty(e) ? { space: Cf[e], local: t } : t;
}
function ik(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === ja && e.documentElement.namespaceURI === ja ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function rk(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Dp(t) {
  var e = Rp(t);
  return (e.local ? rk : ik)(e);
}
function sk() {
}
function $p(t) {
  return t == null ? sk : function() {
    return this.querySelector(t);
  };
}
function ok(t) {
  typeof t != "function" && (t = $p(t));
  for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
    for (var s = e[r], o = s.length, a = i[r] = new Array(o), l, c, u = 0; u < o; ++u)
      (l = s[u]) && (c = t.call(l, l.__data__, u, s)) && ("__data__" in l && (c.__data__ = l.__data__), a[u] = c);
  return new fe(i, this._parents);
}
function Fp(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function ak() {
  return [];
}
function lk(t) {
  return t == null ? ak : function() {
    return this.querySelectorAll(t);
  };
}
function ck(t) {
  return function() {
    return Fp(t.apply(this, arguments));
  };
}
function uk(t) {
  typeof t == "function" ? t = ck(t) : t = lk(t);
  for (var e = this._groups, n = e.length, i = [], r = [], s = 0; s < n; ++s)
    for (var o = e[s], a = o.length, l, c = 0; c < a; ++c)
      (l = o[c]) && (i.push(t.call(l, l.__data__, c, o)), r.push(l));
  return new fe(i, r);
}
function fk(t) {
  return function() {
    return this.matches(t);
  };
}
function Bp(t) {
  return function(e) {
    return e.matches(t);
  };
}
var hk = Array.prototype.find;
function dk(t) {
  return function() {
    return hk.call(this.children, t);
  };
}
function pk() {
  return this.firstElementChild;
}
function gk(t) {
  return this.select(t == null ? pk : dk(typeof t == "function" ? t : Bp(t)));
}
var mk = Array.prototype.filter;
function yk() {
  return Array.from(this.children);
}
function bk(t) {
  return function() {
    return mk.call(this.children, t);
  };
}
function vk(t) {
  return this.selectAll(t == null ? yk : bk(typeof t == "function" ? t : Bp(t)));
}
function _k(t) {
  typeof t != "function" && (t = fk(t));
  for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
    for (var s = e[r], o = s.length, a = i[r] = [], l, c = 0; c < o; ++c)
      (l = s[c]) && t.call(l, l.__data__, c, s) && a.push(l);
  return new fe(i, this._parents);
}
function Up(t) {
  return new Array(t.length);
}
function wk() {
  return new fe(this._enter || this._groups.map(Up), this._parents);
}
function Qs(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Qs.prototype = {
  constructor: Qs,
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
function xk(t) {
  return function() {
    return t;
  };
}
function Sk(t, e, n, i, r, s) {
  for (var o = 0, a, l = e.length, c = s.length; o < c; ++o)
    (a = e[o]) ? (a.__data__ = s[o], i[o] = a) : n[o] = new Qs(t, s[o]);
  for (; o < l; ++o)
    (a = e[o]) && (r[o] = a);
}
function kk(t, e, n, i, r, s, o) {
  var a, l, c = /* @__PURE__ */ new Map(), u = e.length, f = s.length, h = new Array(u), p;
  for (a = 0; a < u; ++a)
    (l = e[a]) && (h[a] = p = o.call(l, l.__data__, a, e) + "", c.has(p) ? r[a] = l : c.set(p, l));
  for (a = 0; a < f; ++a)
    p = o.call(t, s[a], a, s) + "", (l = c.get(p)) ? (i[a] = l, l.__data__ = s[a], c.delete(p)) : n[a] = new Qs(t, s[a]);
  for (a = 0; a < u; ++a)
    (l = e[a]) && c.get(h[a]) === l && (r[a] = l);
}
function Ek(t) {
  return t.__data__;
}
function Tk(t, e) {
  if (!arguments.length)
    return Array.from(this, Ek);
  var n = e ? kk : Sk, i = this._parents, r = this._groups;
  typeof t != "function" && (t = xk(t));
  for (var s = r.length, o = new Array(s), a = new Array(s), l = new Array(s), c = 0; c < s; ++c) {
    var u = i[c], f = r[c], h = f.length, p = Ak(t.call(u, u && u.__data__, c, i)), y = p.length, S = a[c] = new Array(y), k = o[c] = new Array(y), m = l[c] = new Array(h);
    n(u, f, S, k, m, p, e);
    for (var b = 0, x = 0, _, E; b < y; ++b)
      if (_ = S[b]) {
        for (b >= x && (x = b + 1); !(E = k[x]) && ++x < y; )
          ;
        _._next = E || null;
      }
  }
  return o = new fe(o, i), o._enter = a, o._exit = l, o;
}
function Ak(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Ck() {
  return new fe(this._exit || this._groups.map(Up), this._parents);
}
function Ok(t, e, n) {
  var i = this.enter(), r = this, s = this.exit();
  return typeof t == "function" ? (i = t(i), i && (i = i.selection())) : i = i.append(t + ""), e != null && (r = e(r), r && (r = r.selection())), n == null ? s.remove() : n(s), i && r ? i.merge(r).order() : r;
}
function Pk(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, i = e._groups, r = n.length, s = i.length, o = Math.min(r, s), a = new Array(r), l = 0; l < o; ++l)
    for (var c = n[l], u = i[l], f = c.length, h = a[l] = new Array(f), p, y = 0; y < f; ++y)
      (p = c[y] || u[y]) && (h[y] = p);
  for (; l < r; ++l)
    a[l] = n[l];
  return new fe(a, this._parents);
}
function Nk() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var i = t[e], r = i.length - 1, s = i[r], o; --r >= 0; )
      (o = i[r]) && (s && o.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(o, s), s = o);
  return this;
}
function Ik(t) {
  t || (t = Lk);
  function e(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var n = this._groups, i = n.length, r = new Array(i), s = 0; s < i; ++s) {
    for (var o = n[s], a = o.length, l = r[s] = new Array(a), c, u = 0; u < a; ++u)
      (c = o[u]) && (l[u] = c);
    l.sort(e);
  }
  return new fe(r, this._parents).order();
}
function Lk(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Mk() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Rk() {
  return Array.from(this);
}
function Dk() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var i = t[e], r = 0, s = i.length; r < s; ++r) {
      var o = i[r];
      if (o)
        return o;
    }
  return null;
}
function $k() {
  let t = 0;
  for (const e of this)
    ++t;
  return t;
}
function Fk() {
  return !this.node();
}
function Bk(t) {
  for (var e = this._groups, n = 0, i = e.length; n < i; ++n)
    for (var r = e[n], s = 0, o = r.length, a; s < o; ++s)
      (a = r[s]) && t.call(a, a.__data__, s, r);
  return this;
}
function Uk(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function qk(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Hk(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function Wk(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function Vk(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function jk(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function zk(t, e) {
  var n = Rp(t);
  if (arguments.length < 2) {
    var i = this.node();
    return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n);
  }
  return this.each((e == null ? n.local ? qk : Uk : typeof e == "function" ? n.local ? jk : Vk : n.local ? Wk : Hk)(n, e));
}
function qp(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Gk(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Yk(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Kk(t, e, n) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.style.removeProperty(t) : this.style.setProperty(t, i, n);
  };
}
function Xk(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Gk : typeof e == "function" ? Kk : Yk)(t, e, n ?? "")) : Jk(this.node(), t);
}
function Jk(t, e) {
  return t.style.getPropertyValue(e) || qp(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Qk(t) {
  return function() {
    delete this[t];
  };
}
function Zk(t, e) {
  return function() {
    this[t] = e;
  };
}
function t2(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function e2(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Qk : typeof e == "function" ? t2 : Zk)(t, e)) : this.node()[t];
}
function Hp(t) {
  return t.trim().split(/^|\s+/);
}
function ac(t) {
  return t.classList || new Wp(t);
}
function Wp(t) {
  this._node = t, this._names = Hp(t.getAttribute("class") || "");
}
Wp.prototype = {
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
function Vp(t, e) {
  for (var n = ac(t), i = -1, r = e.length; ++i < r; )
    n.add(e[i]);
}
function jp(t, e) {
  for (var n = ac(t), i = -1, r = e.length; ++i < r; )
    n.remove(e[i]);
}
function n2(t) {
  return function() {
    Vp(this, t);
  };
}
function i2(t) {
  return function() {
    jp(this, t);
  };
}
function r2(t, e) {
  return function() {
    (e.apply(this, arguments) ? Vp : jp)(this, t);
  };
}
function s2(t, e) {
  var n = Hp(t + "");
  if (arguments.length < 2) {
    for (var i = ac(this.node()), r = -1, s = n.length; ++r < s; )
      if (!i.contains(n[r]))
        return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? r2 : e ? n2 : i2)(n, e));
}
function o2() {
  this.textContent = "";
}
function a2(t) {
  return function() {
    this.textContent = t;
  };
}
function l2(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function c2(t) {
  return arguments.length ? this.each(t == null ? o2 : (typeof t == "function" ? l2 : a2)(t)) : this.node().textContent;
}
function u2() {
  this.innerHTML = "";
}
function f2(t) {
  return function() {
    this.innerHTML = t;
  };
}
function h2(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function d2(t) {
  return arguments.length ? this.each(t == null ? u2 : (typeof t == "function" ? h2 : f2)(t)) : this.node().innerHTML;
}
function p2() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function g2() {
  return this.each(p2);
}
function m2() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function y2() {
  return this.each(m2);
}
function b2(t) {
  var e = typeof t == "function" ? t : Dp(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function v2() {
  return null;
}
function _2(t, e) {
  var n = typeof t == "function" ? t : Dp(t), i = e == null ? v2 : typeof e == "function" ? e : $p(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function w2() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function x2() {
  return this.each(w2);
}
function S2() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function k2() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function E2(t) {
  return this.select(t ? k2 : S2);
}
function T2(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function A2(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function C2(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", i = e.indexOf(".");
    return i >= 0 && (n = e.slice(i + 1), e = e.slice(0, i)), { type: e, name: n };
  });
}
function O2(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, i = -1, r = e.length, s; n < r; ++n)
        s = e[n], (!t.type || s.type === t.type) && s.name === t.name ? this.removeEventListener(s.type, s.listener, s.options) : e[++i] = s;
      ++i ? e.length = i : delete this.__on;
    }
  };
}
function P2(t, e, n) {
  return function() {
    var i = this.__on, r, s = A2(e);
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
function N2(t, e, n) {
  var i = C2(t + ""), r, s = i.length, o;
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
  for (a = e ? P2 : O2, r = 0; r < s; ++r)
    this.each(a(i[r], e, n));
  return this;
}
function zp(t, e, n) {
  var i = qp(t), r = i.CustomEvent;
  typeof r == "function" ? r = new r(e, n) : (r = i.document.createEvent("Event"), n ? (r.initEvent(e, n.bubbles, n.cancelable), r.detail = n.detail) : r.initEvent(e, !1, !1)), t.dispatchEvent(r);
}
function I2(t, e) {
  return function() {
    return zp(this, t, e);
  };
}
function L2(t, e) {
  return function() {
    return zp(this, t, e.apply(this, arguments));
  };
}
function M2(t, e) {
  return this.each((typeof e == "function" ? L2 : I2)(t, e));
}
function* R2() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var i = t[e], r = 0, s = i.length, o; r < s; ++r)
      (o = i[r]) && (yield o);
}
var Gp = [null];
function fe(t, e) {
  this._groups = t, this._parents = e;
}
function D2() {
  return this;
}
fe.prototype = {
  constructor: fe,
  select: ok,
  selectAll: uk,
  selectChild: gk,
  selectChildren: vk,
  filter: _k,
  data: Tk,
  enter: wk,
  exit: Ck,
  join: Ok,
  merge: Pk,
  selection: D2,
  order: Nk,
  sort: Ik,
  call: Mk,
  nodes: Rk,
  node: Dk,
  size: $k,
  empty: Fk,
  each: Bk,
  attr: zk,
  style: Xk,
  property: e2,
  classed: s2,
  text: c2,
  html: d2,
  raise: g2,
  lower: y2,
  append: b2,
  insert: _2,
  remove: x2,
  clone: E2,
  datum: T2,
  on: N2,
  dispatch: M2,
  [Symbol.iterator]: R2
};
function $2(t) {
  return typeof t == "string" ? new fe([[document.querySelector(t)]], [document.documentElement]) : new fe([[t]], Gp);
}
function F2(t) {
  return typeof t == "string" ? new fe([document.querySelectorAll(t)], [document.documentElement]) : new fe([Fp(t)], Gp);
}
function Os(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function B2(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Yp(t) {
  let e, n, i;
  t.length !== 2 ? (e = Os, n = (a, l) => Os(t(a), l), i = (a, l) => t(a) - l) : (e = t === Os || t === B2 ? t : U2, n = t, i = t);
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
function U2() {
  return 0;
}
function q2(t) {
  return t === null ? NaN : +t;
}
const H2 = Yp(Os), W2 = H2.right;
Yp(q2).center;
const V2 = Math.sqrt(50), j2 = Math.sqrt(10), z2 = Math.sqrt(2);
function Zs(t, e, n) {
  const i = (e - t) / Math.max(0, n), r = Math.floor(Math.log10(i)), s = i / Math.pow(10, r), o = s >= V2 ? 10 : s >= j2 ? 5 : s >= z2 ? 2 : 1;
  let a, l, c;
  return r < 0 ? (c = Math.pow(10, -r) / o, a = Math.round(t * c), l = Math.round(e * c), a / c < t && ++a, l / c > e && --l, c = -c) : (c = Math.pow(10, r) * o, a = Math.round(t / c), l = Math.round(e / c), a * c < t && ++a, l * c > e && --l), l < a && 0.5 <= n && n < 2 ? Zs(t, e, n * 2) : [a, l, c];
}
function G2(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0))
    return [];
  if (t === e)
    return [t];
  const i = e < t, [r, s, o] = i ? Zs(e, t, n) : Zs(t, e, n);
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
function za(t, e, n) {
  return e = +e, t = +t, n = +n, Zs(t, e, n)[2];
}
function Y2(t, e, n) {
  e = +e, t = +t, n = +n;
  const i = e < t, r = i ? za(e, t, n) : za(t, e, n);
  return (i ? -1 : 1) * (r < 0 ? 1 / -r : r);
}
function K2(t, e) {
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
function X2(t, e) {
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
function lc(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Kp(t, e) {
  var n = Object.create(t.prototype);
  for (var i in e)
    n[i] = e[i];
  return n;
}
function Rr() {
}
var _r = 0.7, to = 1 / _r, ki = "\\s*([+-]?\\d+)\\s*", wr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Ye = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", J2 = /^#([0-9a-f]{3,8})$/, Q2 = new RegExp(`^rgb\\(${ki},${ki},${ki}\\)$`), Z2 = new RegExp(`^rgb\\(${Ye},${Ye},${Ye}\\)$`), tE = new RegExp(`^rgba\\(${ki},${ki},${ki},${wr}\\)$`), eE = new RegExp(`^rgba\\(${Ye},${Ye},${Ye},${wr}\\)$`), nE = new RegExp(`^hsl\\(${wr},${Ye},${Ye}\\)$`), iE = new RegExp(`^hsla\\(${wr},${Ye},${Ye},${wr}\\)$`), Of = {
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
lc(Rr, Li, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Pf,
  // Deprecated! Use color.formatHex.
  formatHex: Pf,
  formatHex8: rE,
  formatHsl: sE,
  formatRgb: Nf,
  toString: Nf
});
function Pf() {
  return this.rgb().formatHex();
}
function rE() {
  return this.rgb().formatHex8();
}
function sE() {
  return Xp(this).formatHsl();
}
function Nf() {
  return this.rgb().formatRgb();
}
function Li(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = J2.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? If(e) : n === 3 ? new ce(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? ns(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? ns(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = Q2.exec(t)) ? new ce(e[1], e[2], e[3], 1) : (e = Z2.exec(t)) ? new ce(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = tE.exec(t)) ? ns(e[1], e[2], e[3], e[4]) : (e = eE.exec(t)) ? ns(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = nE.exec(t)) ? Rf(e[1], e[2] / 100, e[3] / 100, 1) : (e = iE.exec(t)) ? Rf(e[1], e[2] / 100, e[3] / 100, e[4]) : Of.hasOwnProperty(t) ? If(Of[t]) : t === "transparent" ? new ce(NaN, NaN, NaN, 0) : null;
}
function If(t) {
  return new ce(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function ns(t, e, n, i) {
  return i <= 0 && (t = e = n = NaN), new ce(t, e, n, i);
}
function oE(t) {
  return t instanceof Rr || (t = Li(t)), t ? (t = t.rgb(), new ce(t.r, t.g, t.b, t.opacity)) : new ce();
}
function Ht(t, e, n, i) {
  return arguments.length === 1 ? oE(t) : new ce(t, e, n, i ?? 1);
}
function ce(t, e, n, i) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +i;
}
lc(ce, Ht, Kp(Rr, {
  brighter(t) {
    return t = t == null ? to : Math.pow(to, t), new ce(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? _r : Math.pow(_r, t), new ce(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new ce(Jn(this.r), Jn(this.g), Jn(this.b), eo(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Lf,
  // Deprecated! Use color.formatHex.
  formatHex: Lf,
  formatHex8: aE,
  formatRgb: Mf,
  toString: Mf
}));
function Lf() {
  return `#${zn(this.r)}${zn(this.g)}${zn(this.b)}`;
}
function aE() {
  return `#${zn(this.r)}${zn(this.g)}${zn(this.b)}${zn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Mf() {
  const t = eo(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Jn(this.r)}, ${Jn(this.g)}, ${Jn(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function eo(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Jn(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function zn(t) {
  return t = Jn(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Rf(t, e, n, i) {
  return i <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Ne(t, e, n, i);
}
function Xp(t) {
  if (t instanceof Ne)
    return new Ne(t.h, t.s, t.l, t.opacity);
  if (t instanceof Rr || (t = Li(t)), !t)
    return new Ne();
  if (t instanceof Ne)
    return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, i = t.b / 255, r = Math.min(e, n, i), s = Math.max(e, n, i), o = NaN, a = s - r, l = (s + r) / 2;
  return a ? (e === s ? o = (n - i) / a + (n < i) * 6 : n === s ? o = (i - e) / a + 2 : o = (e - n) / a + 4, a /= l < 0.5 ? s + r : 2 - s - r, o *= 60) : a = l > 0 && l < 1 ? 0 : o, new Ne(o, a, l, t.opacity);
}
function lE(t, e, n, i) {
  return arguments.length === 1 ? Xp(t) : new Ne(t, e, n, i ?? 1);
}
function Ne(t, e, n, i) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +i;
}
lc(Ne, lE, Kp(Rr, {
  brighter(t) {
    return t = t == null ? to : Math.pow(to, t), new Ne(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? _r : Math.pow(_r, t), new Ne(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, i = n + (n < 0.5 ? n : 1 - n) * e, r = 2 * n - i;
    return new ce(
      ia(t >= 240 ? t - 240 : t + 120, r, i),
      ia(t, r, i),
      ia(t < 120 ? t + 240 : t - 120, r, i),
      this.opacity
    );
  },
  clamp() {
    return new Ne(Df(this.h), is(this.s), is(this.l), eo(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = eo(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Df(this.h)}, ${is(this.s) * 100}%, ${is(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Df(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function is(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function ia(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const cc = (t) => () => t;
function cE(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function uE(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(i) {
    return Math.pow(t + i * e, n);
  };
}
function fE(t) {
  return (t = +t) == 1 ? Jp : function(e, n) {
    return n - e ? uE(e, n, t) : cc(isNaN(e) ? n : e);
  };
}
function Jp(t, e) {
  var n = e - t;
  return n ? cE(t, n) : cc(isNaN(t) ? e : t);
}
const $f = function t(e) {
  var n = fE(e);
  function i(r, s) {
    var o = n((r = Ht(r)).r, (s = Ht(s)).r), a = n(r.g, s.g), l = n(r.b, s.b), c = Jp(r.opacity, s.opacity);
    return function(u) {
      return r.r = o(u), r.g = a(u), r.b = l(u), r.opacity = c(u), r + "";
    };
  }
  return i.gamma = t, i;
}(1);
function hE(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, i = e.slice(), r;
  return function(s) {
    for (r = 0; r < n; ++r)
      i[r] = t[r] * (1 - s) + e[r] * s;
    return i;
  };
}
function dE(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function pE(t, e) {
  var n = e ? e.length : 0, i = t ? Math.min(n, t.length) : 0, r = new Array(i), s = new Array(n), o;
  for (o = 0; o < i; ++o)
    r[o] = Do(t[o], e[o]);
  for (; o < n; ++o)
    s[o] = e[o];
  return function(a) {
    for (o = 0; o < i; ++o)
      s[o] = r[o](a);
    return s;
  };
}
function gE(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(i) {
    return n.setTime(t * (1 - i) + e * i), n;
  };
}
function no(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function mE(t, e) {
  var n = {}, i = {}, r;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (r in e)
    r in t ? n[r] = Do(t[r], e[r]) : i[r] = e[r];
  return function(s) {
    for (r in n)
      i[r] = n[r](s);
    return i;
  };
}
var Ga = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ra = new RegExp(Ga.source, "g");
function yE(t) {
  return function() {
    return t;
  };
}
function bE(t) {
  return function(e) {
    return t(e) + "";
  };
}
function vE(t, e) {
  var n = Ga.lastIndex = ra.lastIndex = 0, i, r, s, o = -1, a = [], l = [];
  for (t = t + "", e = e + ""; (i = Ga.exec(t)) && (r = ra.exec(e)); )
    (s = r.index) > n && (s = e.slice(n, s), a[o] ? a[o] += s : a[++o] = s), (i = i[0]) === (r = r[0]) ? a[o] ? a[o] += r : a[++o] = r : (a[++o] = null, l.push({ i: o, x: no(i, r) })), n = ra.lastIndex;
  return n < e.length && (s = e.slice(n), a[o] ? a[o] += s : a[++o] = s), a.length < 2 ? l[0] ? bE(l[0].x) : yE(e) : (e = l.length, function(c) {
    for (var u = 0, f; u < e; ++u)
      a[(f = l[u]).i] = f.x(c);
    return a.join("");
  });
}
function Do(t, e) {
  var n = typeof e, i;
  return e == null || n === "boolean" ? cc(e) : (n === "number" ? no : n === "string" ? (i = Li(e)) ? (e = i, $f) : vE : e instanceof Li ? $f : e instanceof Date ? gE : dE(e) ? hE : Array.isArray(e) ? pE : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? mE : no)(t, e);
}
function Qp(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
function _E(t) {
  return function() {
    return t;
  };
}
function wE(t) {
  return +t;
}
var Ff = [0, 1];
function Sn(t) {
  return t;
}
function Ya(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : _E(isNaN(e) ? NaN : 0.5);
}
function xE(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(i) {
    return Math.max(t, Math.min(e, i));
  };
}
function SE(t, e, n) {
  var i = t[0], r = t[1], s = e[0], o = e[1];
  return r < i ? (i = Ya(r, i), s = n(o, s)) : (i = Ya(i, r), s = n(s, o)), function(a) {
    return s(i(a));
  };
}
function kE(t, e, n) {
  var i = Math.min(t.length, e.length) - 1, r = new Array(i), s = new Array(i), o = -1;
  for (t[i] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++o < i; )
    r[o] = Ya(t[o], t[o + 1]), s[o] = n(e[o], e[o + 1]);
  return function(a) {
    var l = W2(t, a, 1, i) - 1;
    return s[l](r[l](a));
  };
}
function EE(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function TE() {
  var t = Ff, e = Ff, n = Do, i, r, s, o = Sn, a, l, c;
  function u() {
    var h = Math.min(t.length, e.length);
    return o !== Sn && (o = xE(t[0], t[h - 1])), a = h > 2 ? kE : SE, l = c = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? s : (l || (l = a(t.map(i), e, n)))(i(o(h)));
  }
  return f.invert = function(h) {
    return o(r((c || (c = a(e, t.map(i), no)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (t = Array.from(h, wE), u()) : t.slice();
  }, f.range = function(h) {
    return arguments.length ? (e = Array.from(h), u()) : e.slice();
  }, f.rangeRound = function(h) {
    return e = Array.from(h), n = Qp, u();
  }, f.clamp = function(h) {
    return arguments.length ? (o = h ? !0 : Sn, u()) : o !== Sn;
  }, f.interpolate = function(h) {
    return arguments.length ? (n = h, u()) : n;
  }, f.unknown = function(h) {
    return arguments.length ? (s = h, f) : s;
  }, function(h, p) {
    return i = h, r = p, u();
  };
}
function AE() {
  return TE()(Sn, Sn);
}
function CE(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function io(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0)
    return null;
  var n, i = t.slice(0, n);
  return [
    i.length > 1 ? i[0] + i.slice(2) : i,
    +t.slice(n + 1)
  ];
}
function Mi(t) {
  return t = io(Math.abs(t)), t ? t[1] : NaN;
}
function OE(t, e) {
  return function(n, i) {
    for (var r = n.length, s = [], o = 0, a = t[0], l = 0; r > 0 && a > 0 && (l + a + 1 > i && (a = Math.max(1, i - l)), s.push(n.substring(r -= a, r + a)), !((l += a + 1) > i)); )
      a = t[o = (o + 1) % t.length];
    return s.reverse().join(e);
  };
}
function PE(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var NE = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ro(t) {
  if (!(e = NE.exec(t)))
    throw new Error("invalid format: " + t);
  var e;
  return new uc({
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
ro.prototype = uc.prototype;
function uc(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
uc.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function IE(t) {
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
var Zp;
function LE(t, e) {
  var n = io(t, e);
  if (!n)
    return t + "";
  var i = n[0], r = n[1], s = r - (Zp = Math.max(-8, Math.min(8, Math.floor(r / 3))) * 3) + 1, o = i.length;
  return s === o ? i : s > o ? i + new Array(s - o + 1).join("0") : s > 0 ? i.slice(0, s) + "." + i.slice(s) : "0." + new Array(1 - s).join("0") + io(t, Math.max(0, e + s - 1))[0];
}
function Bf(t, e) {
  var n = io(t, e);
  if (!n)
    return t + "";
  var i = n[0], r = n[1];
  return r < 0 ? "0." + new Array(-r).join("0") + i : i.length > r + 1 ? i.slice(0, r + 1) + "." + i.slice(r + 1) : i + new Array(r - i.length + 2).join("0");
}
const Uf = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: CE,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => Bf(t * 100, e),
  r: Bf,
  s: LE,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function qf(t) {
  return t;
}
var Hf = Array.prototype.map, Wf = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function ME(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? qf : OE(Hf.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", i = t.currency === void 0 ? "" : t.currency[1] + "", r = t.decimal === void 0 ? "." : t.decimal + "", s = t.numerals === void 0 ? qf : PE(Hf.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", a = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function c(f) {
    f = ro(f);
    var h = f.fill, p = f.align, y = f.sign, S = f.symbol, k = f.zero, m = f.width, b = f.comma, x = f.precision, _ = f.trim, E = f.type;
    E === "n" ? (b = !0, E = "g") : Uf[E] || (x === void 0 && (x = 12), _ = !0, E = "g"), (k || h === "0" && p === "=") && (k = !0, h = "0", p = "=");
    var P = S === "$" ? n : S === "#" && /[boxX]/.test(E) ? "0" + E.toLowerCase() : "", L = S === "$" ? i : /[%p]/.test(E) ? o : "", W = Uf[E], M = /[defgprs%]/.test(E);
    x = x === void 0 ? 6 : /[gprs]/.test(E) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x));
    function H(F) {
      var G = P, q = L, it, Rt, dt;
      if (E === "c")
        q = W(F) + q, F = "";
      else {
        F = +F;
        var lt = F < 0 || 1 / F < 0;
        if (F = isNaN(F) ? l : W(Math.abs(F), x), _ && (F = IE(F)), lt && +F == 0 && y !== "+" && (lt = !1), G = (lt ? y === "(" ? y : a : y === "-" || y === "(" ? "" : y) + G, q = (E === "s" ? Wf[8 + Zp / 3] : "") + q + (lt && y === "(" ? ")" : ""), M) {
          for (it = -1, Rt = F.length; ++it < Rt; )
            if (dt = F.charCodeAt(it), 48 > dt || dt > 57) {
              q = (dt === 46 ? r + F.slice(it + 1) : F.slice(it)) + q, F = F.slice(0, it);
              break;
            }
        }
      }
      b && !k && (F = e(F, 1 / 0));
      var at = G.length + F.length + q.length, vt = at < m ? new Array(m - at + 1).join(h) : "";
      switch (b && k && (F = e(vt + F, vt.length ? m - q.length : 1 / 0), vt = ""), p) {
        case "<":
          F = G + F + q + vt;
          break;
        case "=":
          F = G + vt + F + q;
          break;
        case "^":
          F = vt.slice(0, at = vt.length >> 1) + G + F + q + vt.slice(at);
          break;
        default:
          F = vt + G + F + q;
          break;
      }
      return s(F);
    }
    return H.toString = function() {
      return f + "";
    }, H;
  }
  function u(f, h) {
    var p = c((f = ro(f), f.type = "f", f)), y = Math.max(-8, Math.min(8, Math.floor(Mi(h) / 3))) * 3, S = Math.pow(10, -y), k = Wf[8 + y / 3];
    return function(m) {
      return p(S * m) + k;
    };
  }
  return {
    format: c,
    formatPrefix: u
  };
}
var rs, fc, tg;
RE({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function RE(t) {
  return rs = ME(t), fc = rs.format, tg = rs.formatPrefix, rs;
}
function eg(t) {
  return Math.max(0, -Mi(Math.abs(t)));
}
function DE(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Mi(e) / 3))) * 3 - Mi(Math.abs(t)));
}
function $E(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, Mi(e) - Mi(t)) + 1;
}
function FE(t, e, n, i) {
  var r = Y2(t, e, n), s;
  switch (i = ro(i ?? ",f"), i.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(e));
      return i.precision == null && !isNaN(s = DE(r, o)) && (i.precision = s), tg(i, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      i.precision == null && !isNaN(s = $E(r, Math.max(Math.abs(t), Math.abs(e)))) && (i.precision = s - (i.type === "e"));
      break;
    }
    case "f":
    case "%": {
      i.precision == null && !isNaN(s = eg(r)) && (i.precision = s - (i.type === "%") * 2);
      break;
    }
  }
  return fc(i);
}
function ng(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var i = e();
    return G2(i[0], i[i.length - 1], n ?? 10);
  }, t.tickFormat = function(n, i) {
    var r = e();
    return FE(r[0], r[r.length - 1], n ?? 10, i);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var i = e(), r = 0, s = i.length - 1, o = i[r], a = i[s], l, c, u = 10;
    for (a < o && (c = o, o = a, a = c, c = r, r = s, s = c); u-- > 0; ) {
      if (c = za(o, a, n), c === l)
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
function ig() {
  var t = AE();
  return t.copy = function() {
    return EE(t, ig());
  }, K2.apply(t, arguments), ng(t);
}
function BE() {
  var t = 0, e = 1, n, i, r, s, o = Sn, a = !1, l;
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
      var p, y;
      return arguments.length ? ([p, y] = h, o = f(p, y), c) : [o(0), o(1)];
    };
  }
  return c.range = u(Do), c.rangeRound = u(Qp), c.unknown = function(f) {
    return arguments.length ? (l = f, c) : l;
  }, function(f) {
    return s = f, n = f(t), i = f(e), r = n === i ? 0 : 1 / (i - n), c;
  };
}
function UE(t, e) {
  return e.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown());
}
function rg() {
  var t = ng(BE()(Sn));
  return t.copy = function() {
    return UE(t, rg());
  }, X2.apply(t, arguments);
}
function qE(t) {
  return t;
}
var Ps = 1, Ns = 2, Ka = 3, tr = 4, Vf = 1e-6;
function HE(t) {
  return "translate(" + t + ",0)";
}
function WE(t) {
  return "translate(0," + t + ")";
}
function VE(t) {
  return (e) => +t(e);
}
function jE(t, e) {
  return e = Math.max(0, t.bandwidth() - e * 2) / 2, t.round() && (e = Math.round(e)), (n) => +t(n) + e;
}
function zE() {
  return !this.__axis;
}
function $o(t, e) {
  var n = [], i = null, r = null, s = 6, o = 6, a = 3, l = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, c = t === Ps || t === tr ? -1 : 1, u = t === tr || t === Ns ? "x" : "y", f = t === Ps || t === Ka ? HE : WE;
  function h(p) {
    var y = i ?? (e.ticks ? e.ticks.apply(e, n) : e.domain()), S = r ?? (e.tickFormat ? e.tickFormat.apply(e, n) : qE), k = Math.max(s, 0) + a, m = e.range(), b = +m[0] + l, x = +m[m.length - 1] + l, _ = (e.bandwidth ? jE : VE)(e.copy(), l), E = p.selection ? p.selection() : p, P = E.selectAll(".domain").data([null]), L = E.selectAll(".tick").data(y, e).order(), W = L.exit(), M = L.enter().append("g").attr("class", "tick"), H = L.select("line"), F = L.select("text");
    P = P.merge(P.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), L = L.merge(M), H = H.merge(M.append("line").attr("stroke", "currentColor").attr(u + "2", c * s)), F = F.merge(M.append("text").attr("fill", "currentColor").attr(u, c * k).attr("dy", t === Ps ? "0em" : t === Ka ? "0.71em" : "0.32em")), p !== E && (P = P.transition(p), L = L.transition(p), H = H.transition(p), F = F.transition(p), W = W.transition(p).attr("opacity", Vf).attr("transform", function(G) {
      return isFinite(G = _(G)) ? f(G + l) : this.getAttribute("transform");
    }), M.attr("opacity", Vf).attr("transform", function(G) {
      var q = this.parentNode.__axis;
      return f((q && isFinite(q = q(G)) ? q : _(G)) + l);
    })), W.remove(), P.attr("d", t === tr || t === Ns ? o ? "M" + c * o + "," + b + "H" + l + "V" + x + "H" + c * o : "M" + l + "," + b + "V" + x : o ? "M" + b + "," + c * o + "V" + l + "H" + x + "V" + c * o : "M" + b + "," + l + "H" + x), L.attr("opacity", 1).attr("transform", function(G) {
      return f(_(G) + l);
    }), H.attr(u + "2", c * s), F.attr(u, c * k).text(S), E.filter(zE).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === Ns ? "start" : t === tr ? "end" : "middle"), E.each(function() {
      this.__axis = _;
    });
  }
  return h.scale = function(p) {
    return arguments.length ? (e = p, h) : e;
  }, h.ticks = function() {
    return n = Array.from(arguments), h;
  }, h.tickArguments = function(p) {
    return arguments.length ? (n = p == null ? [] : Array.from(p), h) : n.slice();
  }, h.tickValues = function(p) {
    return arguments.length ? (i = p == null ? null : Array.from(p), h) : i && i.slice();
  }, h.tickFormat = function(p) {
    return arguments.length ? (r = p, h) : r;
  }, h.tickSize = function(p) {
    return arguments.length ? (s = o = +p, h) : s;
  }, h.tickSizeInner = function(p) {
    return arguments.length ? (s = +p, h) : s;
  }, h.tickSizeOuter = function(p) {
    return arguments.length ? (o = +p, h) : o;
  }, h.tickPadding = function(p) {
    return arguments.length ? (a = +p, h) : a;
  }, h.offset = function(p) {
    return arguments.length ? (l = +p, h) : l;
  }, h;
}
function GE(t) {
  return $o(Ps, t);
}
function YE(t) {
  return $o(Ns, t);
}
function KE(t) {
  return $o(Ka, t);
}
function XE(t) {
  return $o(tr, t);
}
const Xa = Math.PI, Ja = 2 * Xa, Wn = 1e-6, JE = Ja - Wn;
function sg(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function QE(t) {
  let e = Math.floor(t);
  if (!(e >= 0))
    throw new Error(`invalid digits: ${t}`);
  if (e > 15)
    return sg;
  const n = 10 ** e;
  return function(i) {
    this._ += i[0];
    for (let r = 1, s = i.length; r < s; ++r)
      this._ += Math.round(arguments[r] * n) / n + i[r];
  };
}
class hc {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? sg : QE(e);
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
    else if (h > Wn)
      if (!(Math.abs(f * l - c * u) > Wn) || !s)
        this._append`L${this._x1 = e},${this._y1 = n}`;
      else {
        let p = i - o, y = r - a, S = l * l + c * c, k = p * p + y * y, m = Math.sqrt(S), b = Math.sqrt(h), x = s * Math.tan((Xa - Math.acos((S + h - k) / (2 * m * b))) / 2), _ = x / b, E = x / m;
        Math.abs(_ - 1) > Wn && this._append`L${e + _ * u},${n + _ * f}`, this._append`A${s},${s},0,0,${+(f * p > u * y)},${this._x1 = e + E * l},${this._y1 = n + E * c}`;
      }
  }
  arc(e, n, i, r, s, o) {
    if (e = +e, n = +n, i = +i, o = !!o, i < 0)
      throw new Error(`negative radius: ${i}`);
    let a = i * Math.cos(r), l = i * Math.sin(r), c = e + a, u = n + l, f = 1 ^ o, h = o ? r - s : s - r;
    this._x1 === null ? this._append`M${c},${u}` : (Math.abs(this._x1 - c) > Wn || Math.abs(this._y1 - u) > Wn) && this._append`L${c},${u}`, i && (h < 0 && (h = h % Ja + Ja), h > JE ? this._append`A${i},${i},0,1,${f},${e - a},${n - l}A${i},${i},0,1,${f},${this._x1 = c},${this._y1 = u}` : h > Wn && this._append`A${i},${i},0,${+(h >= Xa)},${f},${this._x1 = e + i * Math.cos(s)},${this._y1 = n + i * Math.sin(s)}`);
  }
  rect(e, n, i, r) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${i = +i}v${+r}h${-i}Z`;
  }
  toString() {
    return this._;
  }
}
function og() {
  return new hc();
}
og.prototype = hc.prototype;
function we(t) {
  return function() {
    return t;
  };
}
const jf = Math.abs, Xt = Math.atan2, qn = Math.cos, ZE = Math.max, sa = Math.min, qe = Math.sin, je = Math.sqrt, oe = 1e-12, Ri = Math.PI, so = Ri / 2, ag = 2 * Ri;
function tT(t) {
  return t > 1 ? 0 : t < -1 ? Ri : Math.acos(t);
}
function zf(t) {
  return t >= 1 ? so : t <= -1 ? -so : Math.asin(t);
}
function lg(t) {
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
  }, () => new hc(e);
}
function eT(t) {
  return t.innerRadius;
}
function nT(t) {
  return t.outerRadius;
}
function iT(t) {
  return t.startAngle;
}
function rT(t) {
  return t.endAngle;
}
function sT(t) {
  return t && t.padAngle;
}
function oT(t, e, n, i, r, s, o, a) {
  var l = n - t, c = i - e, u = o - r, f = a - s, h = f * l - u * c;
  if (!(h * h < oe))
    return h = (u * (e - s) - f * (t - r)) / h, [t + h * l, e + h * c];
}
function ss(t, e, n, i, r, s, o) {
  var a = t - n, l = e - i, c = (o ? s : -s) / je(a * a + l * l), u = c * l, f = -c * a, h = t + u, p = e + f, y = n + u, S = i + f, k = (h + y) / 2, m = (p + S) / 2, b = y - h, x = S - p, _ = b * b + x * x, E = r - s, P = h * S - y * p, L = (x < 0 ? -1 : 1) * je(ZE(0, E * E * _ - P * P)), W = (P * x - b * L) / _, M = (-P * b - x * L) / _, H = (P * x + b * L) / _, F = (-P * b + x * L) / _, G = W - k, q = M - m, it = H - k, Rt = F - m;
  return G * G + q * q > it * it + Rt * Rt && (W = H, M = F), {
    cx: W,
    cy: M,
    x01: -u,
    y01: -f,
    x11: W * (r / E - 1),
    y11: M * (r / E - 1)
  };
}
function aT() {
  var t = eT, e = nT, n = we(0), i = null, r = iT, s = rT, o = sT, a = null, l = lg(c);
  function c() {
    var u, f, h = +t.apply(this, arguments), p = +e.apply(this, arguments), y = r.apply(this, arguments) - so, S = s.apply(this, arguments) - so, k = jf(S - y), m = S > y;
    if (a || (a = u = l()), p < h && (f = p, p = h, h = f), !(p > oe))
      a.moveTo(0, 0);
    else if (k > ag - oe)
      a.moveTo(p * qn(y), p * qe(y)), a.arc(0, 0, p, y, S, !m), h > oe && (a.moveTo(h * qn(S), h * qe(S)), a.arc(0, 0, h, S, y, m));
    else {
      var b = y, x = S, _ = y, E = S, P = k, L = k, W = o.apply(this, arguments) / 2, M = W > oe && (i ? +i.apply(this, arguments) : je(h * h + p * p)), H = sa(jf(p - h) / 2, +n.apply(this, arguments)), F = H, G = H, q, it;
      if (M > oe) {
        var Rt = zf(M / h * qe(W)), dt = zf(M / p * qe(W));
        (P -= Rt * 2) > oe ? (Rt *= m ? 1 : -1, _ += Rt, E -= Rt) : (P = 0, _ = E = (y + S) / 2), (L -= dt * 2) > oe ? (dt *= m ? 1 : -1, b += dt, x -= dt) : (L = 0, b = x = (y + S) / 2);
      }
      var lt = p * qn(b), at = p * qe(b), vt = h * qn(E), he = h * qe(E);
      if (H > oe) {
        var Nt = p * qn(x), Dt = p * qe(x), De = h * qn(_), $e = h * qe(_), Zt;
        if (k < Ri)
          if (Zt = oT(lt, at, De, $e, Nt, Dt, vt, he)) {
            var jt = lt - Zt[0], Oe = at - Zt[1], de = Nt - Zt[0], ve = Dt - Zt[1], Yt = 1 / qe(tT((jt * de + Oe * ve) / (je(jt * jt + Oe * Oe) * je(de * de + ve * ve))) / 2), _e = je(Zt[0] * Zt[0] + Zt[1] * Zt[1]);
            F = sa(H, (h - _e) / (Yt - 1)), G = sa(H, (p - _e) / (Yt + 1));
          } else
            F = G = 0;
      }
      L > oe ? G > oe ? (q = ss(De, $e, lt, at, p, G, m), it = ss(Nt, Dt, vt, he, p, G, m), a.moveTo(q.cx + q.x01, q.cy + q.y01), G < H ? a.arc(q.cx, q.cy, G, Xt(q.y01, q.x01), Xt(it.y01, it.x01), !m) : (a.arc(q.cx, q.cy, G, Xt(q.y01, q.x01), Xt(q.y11, q.x11), !m), a.arc(0, 0, p, Xt(q.cy + q.y11, q.cx + q.x11), Xt(it.cy + it.y11, it.cx + it.x11), !m), a.arc(it.cx, it.cy, G, Xt(it.y11, it.x11), Xt(it.y01, it.x01), !m))) : (a.moveTo(lt, at), a.arc(0, 0, p, b, x, !m)) : a.moveTo(lt, at), !(h > oe) || !(P > oe) ? a.lineTo(vt, he) : F > oe ? (q = ss(vt, he, Nt, Dt, h, -F, m), it = ss(lt, at, De, $e, h, -F, m), a.lineTo(q.cx + q.x01, q.cy + q.y01), F < H ? a.arc(q.cx, q.cy, F, Xt(q.y01, q.x01), Xt(it.y01, it.x01), !m) : (a.arc(q.cx, q.cy, F, Xt(q.y01, q.x01), Xt(q.y11, q.x11), !m), a.arc(0, 0, h, Xt(q.cy + q.y11, q.cx + q.x11), Xt(it.cy + it.y11, it.cx + it.x11), m), a.arc(it.cx, it.cy, F, Xt(it.y11, it.x11), Xt(it.y01, it.x01), !m))) : a.arc(0, 0, h, E, _, m);
    }
    if (a.closePath(), u)
      return a = null, u + "" || null;
  }
  return c.centroid = function() {
    var u = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2, f = (+r.apply(this, arguments) + +s.apply(this, arguments)) / 2 - Ri / 2;
    return [qn(f) * u, qe(f) * u];
  }, c.innerRadius = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : we(+u), c) : t;
  }, c.outerRadius = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : we(+u), c) : e;
  }, c.cornerRadius = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : we(+u), c) : n;
  }, c.padRadius = function(u) {
    return arguments.length ? (i = u == null ? null : typeof u == "function" ? u : we(+u), c) : i;
  }, c.startAngle = function(u) {
    return arguments.length ? (r = typeof u == "function" ? u : we(+u), c) : r;
  }, c.endAngle = function(u) {
    return arguments.length ? (s = typeof u == "function" ? u : we(+u), c) : s;
  }, c.padAngle = function(u) {
    return arguments.length ? (o = typeof u == "function" ? u : we(+u), c) : o;
  }, c.context = function(u) {
    return arguments.length ? (a = u ?? null, c) : a;
  }, c;
}
const lT = {
  draw(t, e) {
    const n = je(e / Ri);
    t.moveTo(n, 0), t.arc(0, 0, n, 0, ag);
  }
}, cT = {
  draw(t, e) {
    const n = je(e), i = -n / 2;
    t.rect(i, i, n, n);
  }
}, oa = je(3), uT = {
  draw(t, e) {
    const n = -je(e / (oa * 3));
    t.moveTo(0, n * 2), t.lineTo(-oa * n, -n), t.lineTo(oa * n, -n), t.closePath();
  }
};
function fT(t, e) {
  let n = null, i = lg(r);
  t = typeof t == "function" ? t : we(t || lT), e = typeof e == "function" ? e : we(e === void 0 ? 64 : +e);
  function r() {
    let s;
    if (n || (n = s = i()), t.apply(this, arguments).draw(n, +e.apply(this, arguments)), s)
      return n = null, s + "" || null;
  }
  return r.type = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : we(s), r) : t;
  }, r.size = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : we(+s), r) : e;
  }, r.context = function(s) {
    return arguments.length ? (n = s ?? null, r) : n;
  }, r;
}
const ct = {
  precisionFixed: eg,
  format: fc,
  select: $2,
  selectAll: F2,
  scaleLinear: ig,
  scaleSequential: rg,
  axisTop: GE,
  axisBottom: KE,
  axisRight: YE,
  axisLeft: XE,
  symbol: fT,
  path: og,
  arc: aT,
  symbolTriangle: uT,
  symbolSquare: cT
};
function fi(t) {
  return typeof t == "string" && t.length === 6 && !isNaN(+("0x" + t.replace("#", "")));
}
class hT {
  constructor({
    elementID: e,
    env: n = "production",
    main: i = !0,
    units: r = "decimal",
    decimalPlaces: s = 2,
    fractionRoundTo: o = 0,
    saw: a = null,
    app: l = !1,
    embed: c = !1,
    height: u = 0,
    width: f = 0,
    flipY: h = !1,
    flipX: p = !1,
    colors: y = {
      partA: "#1d9bc4",
      partB: "#127da1",
      partHover: "#29c778",
      partSelected: "#1bc319",
      stock: "#ffd166",
      text: "#ffffff"
    },
    options: S = {
      disableClick: !1,
      enableStretch: !0
    },
    vueComponent: k
  }) {
    v(this, "env");
    v(this, "main");
    //is this the main vis or not
    v(this, "units", "decimal");
    v(this, "decimalPlaces");
    v(this, "fractionRoundTo");
    v(this, "fn");
    v(this, "saw");
    v(this, "stockType");
    v(this, "numUniqueShapes");
    v(this, "app");
    v(this, "embed");
    v(this, "height");
    v(this, "width");
    v(this, "device");
    v(this, "vueComponent");
    v(this, "elWidth");
    v(this, "elHeight");
    v(this, "w");
    v(this, "h");
    v(this, "padding");
    v(this, "mobileBreakpoint");
    //scales
    v(this, "xScale", ct.scaleLinear());
    v(this, "yScale", ct.scaleLinear());
    v(this, "yPositionScale", ct.scaleLinear());
    v(this, "xPositionScale", ct.scaleLinear());
    v(this, "yAxisScale", ct.scaleLinear());
    v(this, "measurementScale", ct.scaleLinear());
    v(this, "xAxis");
    v(this, "yAxis");
    v(this, "stretched");
    v(this, "shapeXAxis");
    v(this, "shapeYAxis");
    v(this, "cutMeasurementXAxes");
    v(this, "cutMeasurementYAxes");
    v(this, "axisSpacing");
    v(this, "flipY");
    v(this, "flipX");
    v(this, "colors");
    v(this, "options");
    v(this, "moveMode");
    v(this, "moveRotation");
    v(this, "moving");
    v(this, "shape");
    v(this, "shapeColorScale");
    v(this, "scoreColorScale");
    v(this, "hasTouch");
    v(this, "highlightguillotine");
    v(this, "elementID");
    //the id of the element to draw the vis in
    v(this, "el");
    v(this, "htmlEl");
    v(this, "svgCanvas");
    v(this, "axisGroup");
    v(this, "stockGroup");
    v(this, "stockWrappers");
    v(this, "stock");
    v(this, "shapeGroup");
    v(this, "shapeWrappers");
    v(this, "shapes");
    v(this, "shapeIDText");
    v(this, "shapeNameText");
    v(this, "shapeLengthText");
    v(this, "shapeWidthText");
    v(this, "bandingGroup");
    v(this, "bandingWrappers");
    v(this, "banding");
    v(this, "segmentGroup");
    v(this, "segments");
    v(this, "segment");
    v(this, "positionGroup");
    v(this, "position");
    v(this, "dotGroup");
    v(this, "dot");
    v(this, "cutGroup");
    v(this, "cuts");
    v(this, "cut");
    var b;
    if (!e)
      throw new Error("elementID is required");
    if (this.el = ct.select(e), this.el === null)
      return;
    const m = this.el.node();
    if (m !== null) {
      this.htmlEl = m, this.vueComponent = k, this.env = ((b = k == null ? void 0 : k.gs) == null ? void 0 : b.env) === "development" ? "development" : "production", this.app = l || !1, this.embed = c || !1, this.height = u, this.width = f, this.device = l ? "app" : "desktop", this.stretched = !1, this.elWidth = this.htmlEl.offsetWidth, this.elHeight = this.htmlEl.offsetHeight, this.w = 0, this.h = 0, this.padding = 0, this.mobileBreakpoint = 450, this.main = i, this.saw = a, this.cutMeasurementXAxes = [], this.cutMeasurementYAxes = [], this.axisSpacing = 16, this.flipY = h, this.flipX = p, y = {
        ...y
      };
      for (const [x, _] of Object.entries(y))
        _ && (y[x] = _.replace("#", ""));
      this.colors = {
        partA: fi(y == null ? void 0 : y.partA) ? Ht("#" + y.partA) : Ht("#1d9bc4"),
        partB: fi(y == null ? void 0 : y.partB) ? Ht("#" + y.partB) : Ht("#127da1"),
        partHover: fi(y == null ? void 0 : y.partHover) ? Ht("#" + y.partHover) : Ht("#29c778"),
        partSelected: fi(y == null ? void 0 : y.partSelected) ? Ht("#" + y.partSelected) : Ht("#1bc319"),
        stock: fi(y == null ? void 0 : y.stock) ? Ht("#" + y.stock) : Ht("#ffd166"),
        text: fi(y == null ? void 0 : y.text) ? Ht("#" + y.text) : Ht("#ffffff")
      }, this.shapeColorScale = ct.scaleSequential([
        this.colors.partA,
        this.colors.partB
      ]), this.env = n, this.moveMode = !1, this.moving = !1, this.moveRotation = !1, this.units = r, this.decimalPlaces = s, this.fractionRoundTo = o, this.fn = (x) => $(
        x,
        this.units,
        this.decimalPlaces ?? 2,
        !1,
        this.fractionRoundTo ?? 0
      ).toString(), this.hasTouch = !1, this.options = S, this.init();
    }
  }
  /**
   * sets up the various wrappers - only needs to be called once
   * the z index is set by the order drawn
   */
  init() {
    if (!this.el)
      return !1;
    if ((this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces)) && (this.decimalPlaces = 2), (this.fractionRoundTo === null || this.fractionRoundTo === void 0 || isNaN(this.fractionRoundTo)) && (this.fractionRoundTo = 0), !this.svgCanvas) {
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
      const a = o[s], l = ct.select(a);
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
  setDevice() {
    if (!(!this.htmlEl || this.htmlEl.style.display === "none") && this.htmlEl.offsetWidth) {
      if (this.elWidth = this.htmlEl.offsetWidth, this.elHeight = this.htmlEl.offsetHeight, this.elWidth === 0)
        return !1;
      this.main ? this.elWidth <= this.mobileBreakpoint || this.app ? (this.device = "mobile", this.padding = 0) : (this.device = "desktop", this.padding = 50) : this.padding = 0, this.w = this.elWidth;
    }
  }
  //find the largest dimensions of all the stock (not just the active one)
  findLargestStockDimensions() {
    const e = Ct.call(this.vueComponent, ["stockList"]).filter((r) => r.used);
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
  requiresStretch(e, n = null) {
    return e ? (n === null && (n = e.w / e.l), n < 0.15) : !1;
  }
  setAspectRatio(e) {
    if (e) {
      this.w = this.elWidth;
      const n = e.w / e.l;
      this.xScale.domain([0, e.l]).range([this.padding, this.w - this.padding]), this.requiresStretch(e, n) && this.options.enableStretch ? (this.h = this.htmlEl.clientWidth * 0.15 + this.padding * 2, this.stretched = !0) : (this.h = this.xScale(e.getShortSide()) + this.padding, this.stretched = !1), this.yScale.domain([0, e.w]).range([this.padding, this.h - this.padding]), this.yAxisScale.domain(this.flipY ? [0, e.w] : [e.w, 0]).range([this.padding, this.h - this.padding]), this.yPositionScale.domain([0, e.w]).range(
        this.flipY ? [this.padding, this.h - this.padding] : [this.h - this.padding, this.padding]
      ), n > 2 && (this.w = this.htmlEl.clientWidth / n + this.padding * 2, this.xScale.domain([0, e.l]).range([this.padding, this.w - this.padding]), this.h = this.xScale(e.getShortSide()) + this.padding), this.xPositionScale.domain([0, e.l]).range(
        this.flipX ? [this.w - this.padding, this.padding] : [this.padding, this.w - this.padding]
      ), this.measurementScale.domain([0, e.l]).range([0, this.w - this.padding * 2]), this.w > 0 && this.h > 0 && (n > 2 ? this.el.style("width", this.w + "px") : this.el.style("width", ""), this.el.style("height", this.h + "px"));
    }
  }
  _updateSize() {
    if (!this.htmlEl || this.htmlEl.style.display === "none")
      return;
    this.vueComponent && "suppressResizeObserver" in this.vueComponent && (this.vueComponent.suppressResizeObserver = !0);
    const e = Ct.call(this.vueComponent, ["stockList"]), n = Ct.call(this.vueComponent, ["shapeList"]);
    if (!(e != null && e.length) || !(n != null && n.length))
      return !1;
    this.setDevice(), this.refreshStock(), this.refreshShapes();
  }
  refreshStock() {
    const e = Ct.call(this.vueComponent, ["stockList"]);
    if (!(e != null && e.length))
      return !1;
    const n = Ct.call(this.vueComponent, ["activeStock"]);
    this.initStock(n);
    const i = Ct.call(this.vueComponent, ["activeCuts"]);
    this.initCuts(i);
    const r = Ct.call(this.vueComponent, [
      "activeSegments"
    ]);
    this.initSegments(r), this.resetPositions(), typeof this.vueComponent.toggleSegments == "function" && this.vueComponent.toggleSegments(!1);
  }
  refreshShapes() {
    const e = Ct.call(this.vueComponent, ["shapeList"]);
    if (!(e != null && e.length))
      return !1;
    this.resetPositions();
    const n = Ct.call(this.vueComponent, ["activeShapes"]);
    this.initShapes(n, e);
  }
  //init or update the stock
  initStock(e) {
    if (this.resetStock(), this.setAspectRatio(e), !e || !(e != null && e.w) || !(e != null && e.l) || !this.elWidth)
      return !1;
    this.stockType = e.type;
    let n;
    if (typeof e == "object" && (n = [e]), this.device === "desktop" && this.main) {
      this.xAxis = this.axisGroup.append("g").attr("transform", `translate(0, ${this.padding})`).attr("class", "axis stock x").call(ct.axisTop(this.xScale).ticks(5).tickSize(2)).selectAll("text").attr("dy", -5);
      const i = this.requiresStretch(e);
      (!i || i && this.stretched) && (this.yAxis = this.axisGroup.append("g").attr(
        "transform",
        `translate(${this.w - this.padding}, 0)`
      ).attr("class", "axis stock y").call(
        ct.axisRight(this.yAxisScale).ticks(5).tickSize(2)
      ).selectAll("text").attr("dx", 5));
    }
    this.stockGroup.data(n).attr(
      "transform",
      () => `translate(${this.padding},${this.padding})`
    ), this.stockGroup.append("rect").attr("class", "background stock").style("fill", this.colors.stock).attr("width", (i) => this.getWidthAttribute(i)).attr("height", (i) => this.getHeightAttribute(i)).attr("x", (i) => {
      i.x = 0;
      const r = i.x;
      i.x = 0;
      const s = this.getRectangleCoordinate(i, "x") - this.padding;
      return i.x = r, s;
    }).attr("y", (i) => {
      i.y = 0;
      const r = i.y;
      i.y = 0;
      const s = this.getRectangleCoordinate(i, "y") - this.padding;
      return i.y = r, s;
    }), this.stock = this.stockGroup.append("rect").attr("width", (i) => this.getWidthAttribute(i)).attr("height", (i) => this.getHeightAttribute(i)).attr(
      "x",
      (i) => this.getRectangleCoordinate(i, "x") - this.padding
    ).attr(
      "y",
      (i) => this.getRectangleCoordinate(i, "y") - this.padding
    ).attr("class", "stock-pattern").style(
      "fill",
      (i) => i != null && i.grain ? `url(#grain-${i.grain.toLowerCase()})` : "url(#stripes)"
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
          a.parentID && this.vueComponent.gs.shapeColors[a.parentID] || a.parentID && (this.vueComponent.gs.shapeColors[a.parentID] = Li(
            this.shapeColorScale(parseInt(a.parentID) - 1)
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
          var p;
          const h = (p = f == null ? void 0 : f.bestScore) == null ? void 0 : p.total;
          return h === 0 || h === null || h === void 0 ? u : h < u ? h : u;
        }, o), c = e.reduce((u, f) => {
          var p;
          const h = (p = f == null ? void 0 : f.bestScore) == null ? void 0 : p.total;
          return h == null ? u : h > u ? h : u;
        }, a);
        this.scoreColorScale = ct.scaleSequential([Ht(251, 224, 255), Ht(122, 0, 138)]).domain([l, c]);
      }
      if (!e || !e.length || (this.shapeWrappers = this.shapeGroup.selectAll("g").data(e).join("g").attr("class", "shape-group"), !this.shapeWrappers.size()))
        return !1;
      if (this.shapes = this.shapeWrappers.append("rect").attr("class", "shape").attr("fill", (o) => this.getShapeColor(o)).attr(
        "stroke",
        (o) => this.env === "development" && o.addedAsGroup ? Ht(53, 186, 20) : "none"
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
          (a) => $(
            a.l,
            this.units,
            this.decimalPlaces,
            !1,
            this.fractionRoundTo
          )
        ).classed("hidden", (a, l, c) => this.app ? this.measurementScale(a.l) < 50 || this.measurementScale(a.w) < 50 : a.stock.type === "linear" ? !1 : c[l].getBBox().width >= this.measurementScale(a.l) || this.measurementScale(a.w) < 30).attr("dominant-baseline", "middle").attr("fill", this.colors.text), this.shapeWidthText = this.shapeWrappers.append("text").attr("class", "shape-text width").text(
          (a) => $(
            a.w,
            this.units,
            this.decimalPlaces,
            !1,
            this.fractionRoundTo
          )
        ).classed("hidden", (a, l, c) => {
          if (this.app)
            return this.measurementScale(a.l) < 50 || this.measurementScale(a.w) < 50;
          const u = c[l].getBBox();
          return this.measurementScale(a.l) < 30 || u.height >= this.measurementScale(a.w);
        }).attr("dominant-baseline", "middle").attr("fill", this.colors.text);
      }
      (this.main || this.app) && !((s = this == null ? void 0 : this.options) != null && s.disableClick) && (this.shapes.on("mousedown", (o, a) => {
        var l, c, u, f, h;
        if (this.moving)
          return !1;
        if (this.env === "development" && "structuredClone" in window) {
          console.clear();
          let p;
          try {
            p = structuredClone(a);
          } catch (y) {
            console.log("issue with structuredClone", y);
          }
          p && console.log(
            [
              // 'bestScore.point'
              // 'addedAsGroup',
              // 'weighting'
              // 'placementOrder',
              "guillotineData"
            ].reduce((S, k) => (S[k] = Gf(p, k), S), {})
          );
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
            stock: (l = a == null ? void 0 : a.stock) == null ? void 0 : l.id,
            color: (c = this.getShapeColor(a)) == null ? void 0 : c.toString(),
            notes: a == null ? void 0 : a.notes
          }, y = new CustomEvent("partClick", {
            detail: p
          });
          if (this.env === "development" && console.log(p), this.htmlEl.dispatchEvent(y), this.app)
            return !1;
        }
        !this.moveMode && ((u = this.vueComponent) != null && u.gs) && (this.vueComponent.gs.examineShape = a), this.device === "desktop" && (this.resetCutMeasurementAxes(), this.addShapeAxes(a)), this.shapes.classed("selected", !1), this.shapes.style("fill", (p) => this.getShapeColor(p)), this.moveMode ? (a.stock.cutType === "efficiency" || a.stock.type === "linear") && ((h = (f = this.vueComponent.$refs) == null ? void 0 : f.partsBin) == null || h.addToPartsBin(a)) : (ct.select(o.target).classed("selected", !0), ct.select(o.target).style(
          "fill",
          this.colors.partSelected.toString()
        ));
      }), !this.app && !this.hasTouch && this.shapes.on(
        "mouseover",
        (o) => {
          this != null && this.moveMode && this.moving || (ct.select(o.target).classed("hover", !0), ct.select(o.target).classed("selected") || ct.select(o.target).style(
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
          ct.select(o.target).classed("hover", !1), ct.select(o.target).classed("selected") || ct.select(o.target).style(
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
  isCutComplete(e, n, i) {
    return e.guillotineData.parentSegmentID === n && i && e.guillotineData.segmentCutOrder < i;
  }
  isCutInsideSegment(e, n) {
    var i;
    return ((i = e.guillotineData) == null ? void 0 : i.parentSegmentID) !== null && !(e != null && e.isTrim) ? e.guillotineData.parentSegmentID === n : !1;
  }
  //update CUT visibility
  updateCutVisibility(e, n = null) {
    var a, l, c, u, f, h, p;
    if (n === null || e == null || this != null && this.cuts.empty())
      return;
    this.resetShapeAxes(), this.resetCutMeasurementAxes(), ct.select(this.cuts.nodes()[n].parentNode).raise();
    const i = (a = e.guillotineData) == null ? void 0 : a.parentSegmentID, r = this.getHalfBladeWidth(e.stock), s = e.direction === "l" ? "y" : "x", o = (l = e == null ? void 0 : e.stock) == null ? void 0 : l.trim;
    if ((e.stock.cutType === "guillotine" || e.stock.cutType === "beam") && i !== null && typeof i < "u") {
      this.cuts.style("visibility", (x) => typeof e.guillotineData.order == "number" && x.guillotineData.order <= e.guillotineData.order || x.guillotineData.parentSegmentID === i ? "visible" : "hidden"), this.cuts.classed("highlight", (x) => e.stock.cutType === "guillotine" && x.isTrim ? x.type === e.type : x.guillotineData.order === e.guillotineData.order);
      const y = (c = e == null ? void 0 : e.guillotineData) == null ? void 0 : c.segmentCutOrder;
      if (y == null)
        return;
      this.cuts.classed("completed", (x) => this.isCutComplete(x, i, y)), this.cuts.classed("inside-segment", (x) => this.isCutInsideSegment(x, i));
      let S, k;
      const m = this.getCutSegments(e);
      if (m === !1)
        return;
      const b = (f = m == null ? void 0 : m.siblings) == null ? void 0 : f[(u = m.main) != null && u.hasBeamTrim ? y - 1 : y];
      b && ((e == null ? void 0 : e.direction) === "l" ? S = [
        [
          b.y,
          b.y + b.w
        ],
        [
          e.y1 + r,
          (m == null ? void 0 : m.main.y) + (m == null ? void 0 : m.main.w)
        ]
      ] : (e == null ? void 0 : e.direction) === "w" && (S = [
        [
          b.x,
          b.x + b.l
        ],
        [
          e.x1 + r,
          (m == null ? void 0 : m.main.x) + (m == null ? void 0 : m.main.l)
        ]
      ]), (e == null ? void 0 : e.direction) === "l" ? k = [(h = e == null ? void 0 : e.distances) == null ? void 0 : h.bottom, e == null ? void 0 : e.distances.top] : (e == null ? void 0 : e.direction) === "w" && (k = [e == null ? void 0 : e.distances.left, (p = e == null ? void 0 : e.distances) == null ? void 0 : p.right]), this.device === "desktop" && !e.isTrim && this.addCutMeasurementAxes(S, k, s));
    } else {
      this.cuts.style(
        "visibility",
        (S, k) => k <= n ? "visible" : "hidden"
      );
      let y;
      if ((e == null ? void 0 : e.direction) === "l" ? y = [
        [0 + (o.y1 ?? 0), e.y1 - r],
        [
          e.y1 + r,
          e.stock.w - (o != null && o.y2 ? o.y2 : 0)
        ]
      ] : (e == null ? void 0 : e.direction) === "w" && (y = [
        [0 + (o.x1 ?? 0), e.x1 - r],
        [
          e.x1 + r,
          e.stock.l - (o != null && o.x2 ? o.x2 : 0)
        ]
      ]), y != null && y.length) {
        const S = [
          y[0][1] - y[0][0],
          y[1][1] - y[1][0]
        ];
        this.device === "desktop" && !e.isTrim && this.addCutMeasurementAxes(y, S, s);
      }
      this.cuts.classed(
        "highlight",
        (S, k) => k === n
      );
    }
    this.cuts.attr("stroke-width", (y, S) => {
      var b;
      let k = Math.ceil(
        this.measurementScale(this.getBladeWidth(y.stock))
      );
      const m = (b = e == null ? void 0 : e.guillotineData) == null ? void 0 : b.segmentCutOrder;
      return (this.isCutComplete(y, i, m) || this.isCutInsideSegment(y, i)) && (k += 1), S === n && Math.ceil(
        this.measurementScale(this.getBladeWidth(y.stock))
      ) < 5 && (k = 5), k;
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
    !i || !(e != null && e.length) || e.forEach((r) => {
      const s = r[0], o = r[1];
      if (i === "x") {
        const a = ct.scaleLinear().domain([s, o]).range([
          this.xPositionScale(s),
          this.xPositionScale(o)
        ]), l = (a.domain()[1] - a.domain()[0]) / 2 + a.domain()[0], c = this.axisGroup.append("g").attr(
          "transform",
          `translate(0, ${this.h - this.padding + this.axisSpacing})`
        ).attr("class", "axis measurement x").call(
          ct.axisBottom(a).tickValues([l]).tickSize(4).tickFormat(this.fn)
        );
        c.selectAll("text").attr("x", 0).attr("y", 0).attr(
          "dy",
          (u, f, h) => h[f].getBBox().height + 10
        ), this.cutMeasurementXAxes.push(c);
      } else {
        const a = ct.scaleLinear().domain([s, o]).range([
          this.yPositionScale(s),
          this.yPositionScale(o)
        ]), l = (a.domain()[1] - a.domain()[0]) / 2 + a.domain()[0], c = this.axisGroup.append("g").attr(
          "transform",
          `translate(${this.padding - this.axisSpacing}, 0)`
        ).attr("class", "axis measurement y").call(
          ct.axisLeft(a).tickValues([l]).tickSize(4).tickFormat(this.fn)
        );
        c.selectAll("text").attr("x", 0).attr("y", 0).attr(
          "dy",
          (u, f, h) => h[f].getBBox().height + 10
        ).attr(
          "dx",
          (u, f, h) => h[f].getBBox().width / 4
        ).attr(
          "transform",
          (u, f, h) => "rotate(90) translate(" + h[f].getBBox().width / 4 + ")"
        ), this.cutMeasurementYAxes.push(c);
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
    const n = e.x, i = e.x + e.l, r = ct.scaleLinear().domain([n, i]).range([this.xPositionScale(n), this.xPositionScale(i)]), s = e.y, o = e.y + e.w, a = ct.scaleLinear().domain([s, o]).range([this.yPositionScale(s), this.yPositionScale(o)]);
    this.shapeXAxis = this.axisGroup.append("g").attr(
      "transform",
      `translate(0, ${this.h - this.padding + this.axisSpacing})`
    ).attr("class", "axis shape x").call(
      ct.axisBottom(r).tickValues(r.domain()).tickSize(4).tickFormat(this.fn)
    ), this.shapeXAxis.selectAll("text").attr("dx", (c, u, f) => {
      const h = f[u];
      if (h === null)
        return;
      const p = h.getBBox();
      return u === 0 ? -p.width / 2 : p.width / 2;
    }), ((l = e == null ? void 0 : e.stock) == null ? void 0 : l.type) !== "linear" && (this.shapeYAxis = this.axisGroup.append("g").attr(
      "transform",
      `translate(${this.padding - this.axisSpacing}, 0)`
    ).attr("class", "axis shape y").call(
      ct.axisLeft(a).tickValues(a.domain()).tickSize(4).tickFormat(this.fn)
    ), this.shapeYAxis.selectAll("text").attr("x", 0).attr("y", 0).attr(
      "dy",
      (c, u, f) => {
        var h, p;
        return ((p = (h = f[u]) == null ? void 0 : h.getBBox()) == null ? void 0 : p.height) + 2;
      }
    ).attr(
      "dx",
      (c, u, f) => {
        var h, p;
        return ((p = (h = f[u]) == null ? void 0 : h.getBBox()) == null ? void 0 : p.width) / 2;
      }
    ).attr("transform", (c, u, f) => {
      var h, p, y, S, k, m, b, x;
      return this.flipY ? u === 0 ? "rotate(90) translate(-" + ((p = (h = f[u]) == null ? void 0 : h.getBBox()) == null ? void 0 : p.width) / 2 + ")" : "rotate(90) translate(" + ((S = (y = f[u]) == null ? void 0 : y.getBBox()) == null ? void 0 : S.width) / 2 + ")" : u === 0 ? "rotate(90) translate(" + ((m = (k = f[u]) == null ? void 0 : k.getBBox()) == null ? void 0 : m.width) / 2 + ")" : "rotate(90) translate(-" + ((x = (b = f[u]) == null ? void 0 : b.getBBox()) == null ? void 0 : x.width) / 2 + ")";
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
    this.resetCuts(), this.cuts = this.cutGroup.selectAll("line").data(e).join("line").attr("class", "cut").attr("stroke-width", (n) => {
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
    this.resetSegments(), this.segments = this.segmentGroup.selectAll("rect").data(e).join("rect").attr("class", "segment").style("opacity", (n) => {
      if ((n == null ? void 0 : n.offcut) === !0)
        return 0.5;
    }).classed("offcut", (n) => n.offcut).classed("merged", (n) => n.merged).classed("near", (n) => n.shapePosition === "near").classed("far", (n) => n.shapePosition === "far").classed("completed", (n) => n.completed).attr("x", (n) => this.getRectangleCoordinate(n, "x")).attr("y", (n) => this.getRectangleCoordinate(n, "y")).attr("width", (n) => this.getWidthAttribute(n)).attr("height", (n) => this.getHeightAttribute(n)), !this.app && this.env === "development" && (this.segments.on("mousedown", function(n, i) {
      const r = structuredClone(i);
      console.log(
        [
          "id",
          "x",
          "y",
          "cutDirection",
          "cutPreference"
        ].reduce((o, a) => (o[a] = Gf(r, a), o), {})
      );
    }), this.hasTouch || this.segments.on(
      "mouseover",
      function() {
        ct.select(this).classed("hover", !0);
      },
      {
        passive: !0
      }
    ).on(
      "mouseout",
      function() {
        ct.select(this).classed("hover", !1);
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
        const p = i.find(
          (y) => y.x === h.x && y.y === h.y && y.l === h.l && y.w === h.w
        );
        return p !== void 0 ? p : null;
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
    const r = Ct.call(this.vueComponent, ["shapeList"]).filter(
      (a) => {
        var l;
        return a.added && ((l = a == null ? void 0 : a.stock) == null ? void 0 : l.id) === n.id;
      }
    ), s = k1(
      null,
      r,
      n
    ), o = new Co();
    s.toArray().forEach((a) => {
      o.addPoints(
        E1(e, a, n).toArray()
      );
    }), n.cutType === "efficiency" ? ([
      new Mt(0 + (n.trim.x1 ?? 0), 0 + (n.trim.y1 ?? 0)),
      new Mt(0 + (n.trim.x1 ?? 0), 0 + (n.trim.y1 ?? 0)),
      new Mt(
        n.l - e.l - (n.trim.x2 ?? 0),
        0 + (n.trim.y1 ?? 0)
      ),
      new Mt(
        0 + (n.trim.x1 ?? 0),
        n.w - e.w - (n.trim.y2 ?? 0)
      ),
      new Mt(
        n.l - e.l - (n.trim.x2 ?? 0),
        n.w - e.w - (n.trim.y2 ?? 0)
      )
    ].forEach((a) => o.addPoint(a)), i = o.toArray()) : (o.addPoint(
      new Mt(0 + (n.trim.x1 ?? 0), 0 + (n.trim.y1 ?? 0))
    ), i = o.toArray());
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
        a.stopPropagation(), ct.select(this).classed("hover", !0), ct.select(this).raise();
      },
      {
        passive: !0
      }
    ).on(
      "mouseout",
      function(a) {
        a.stopPropagation(), ct.select(this).classed("hover", !1);
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
        a.stopPropagation(), ct.select(this).classed("hover", !0);
        const l = ct.select(this).attr("data-id"), c = ct.select(`.ghost[data-id="${l}"]`);
        c.raise(), c.classed("highlight", !0);
      },
      {
        passive: !0
      }
    ).on(
      "mouseout",
      function(a) {
        a.stopPropagation(), ct.select(this).classed("hover", !1);
        const l = ct.select(this).attr("data-id");
        ct.select(`.ghost[data-id="${l}"]`).classed(
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
function Gf(t, e) {
  return e.split(".").reduce((n, i) => n[i], t);
}
function wt(t, e) {
  var n;
  return t != null && t[0] ? (typeof ((n = this == null ? void 0 : this.gs) == null ? void 0 : n[t[0]]) < "u" ? Af(this.gs, t, e) : typeof (this == null ? void 0 : this[t[0]]) < "u" && Af(this, t, e), !0) : !1;
}
function Ct(t) {
  var e;
  if (!(t != null && t[0]))
    return null;
  if ("gs" in this && typeof ((e = this == null ? void 0 : this.gs) == null ? void 0 : e[t[0]]) < "u")
    return Js(this.gs, t);
  if (typeof (this == null ? void 0 : this[t[0]]) < "u")
    return Js(this, t);
}
function bP(t) {
  var e;
  if (!(t != null && t[0]))
    return null;
  if ("optionsStore" in this && typeof ((e = this == null ? void 0 : this.optionsStore) == null ? void 0 : e[t[0]]) < "u")
    return Js(this.optionsStore, t);
  if (typeof (this == null ? void 0 : this[t[0]]) < "u")
    return Js(this, t);
}
function os(t) {
  t.queue = 0, t.stockCount = 0, t.shapeCount = 0, t.resultCount = 0, t.complete = !1;
}
function dT(t, e = null) {
  var n, i;
  typeof ((n = this.$refs) == null ? void 0 : n[t]) > "u" || ((i = this.$refs) == null ? void 0 : i[t]) === null || (e !== null ? this.$refs[t].visible = e : this.$refs[t].visible = !this.$refs[t].visible);
}
function pT(t, e) {
  return t != null && t.length ? t.find((n) => n.id === e) : null;
}
function gT(t, e) {
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
function mT(t) {
  return t != null && t.length ? t.filter((e) => e.used === !0) : [];
}
function yT(t = {
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
  this.vis = new hT(t), this.vis.initStock(this.activeStock), this.vis.initShapes(this.activeShapes, this.shapeList), this.vis.initCuts(this.activeCuts, this.activeStock), this.visInit = !0;
}
function bT(t = !1) {
  var r;
  let e = ((r = this == null ? void 0 : this.gs) == null ? void 0 : r.inputStock) || (this == null ? void 0 : this.inputStock);
  if (!(e != null && e.length))
    return ["No stock input"];
  const n = Ct.call(this, ["stockList"]);
  n && (n.length = 0);
  const i = [];
  t && (e = [e[0]]);
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    !(o != null && o.q) && !o.autoAdd && !t || i.push(...this.createStock(o, s));
  }
  return i;
}
function vT() {
  var n, i;
  if (this.thinking)
    return !1;
  this.thinking = !0, this.success = !1;
  const t = [];
  if (t.push(...kT.call(this)), t.length) {
    this.showMessage({
      heading: `Part issue${t.length > 1 ? "s" : ""}`,
      main: `<p>${t.length} issue${t.length > 1 ? "s" : ""} found with part inputs:</p>`,
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
      main: `<p>${t.length} issue${t.length > 1 ? "s" : ""} found with part inputs:</p>`,
      list: t.slice(0, 5)
    }), this.thinking = !1;
    return;
  }
  const e = new On(
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
function _T() {
  var i;
  const t = Ct.call(this, ["vis"]);
  if (!t)
    return;
  const e = Ct.call(this, ["shapeList"]);
  if (!(e != null && e.length))
    return !1;
  t.resetPositions(), t.resetShapes();
  const n = Ct.call(this, ["activeShapes"]);
  t.initShapes(n, e), (i = this == null ? void 0 : this.$refs) != null && i.PartsBin && this.$refs.PartsBin.clear(!1);
}
function wT() {
  const t = Ct.call(this, ["vis"]);
  if (!t)
    return;
  const e = Ct.call(this, ["stockList"]);
  if (!(e != null && e.length))
    return !1;
  const n = Ct.call(this, ["activeStock"]);
  t.initStock(n);
  const i = Ct.call(this, ["activeCuts"]);
  t.initCuts(i);
  const r = Ct.call(this, ["activeSegments"]);
  t.initSegments(r), t.resetPositions(), typeof this.toggleSegments == "function" && this.toggleSegments(!1), this != null && this.cutMode && (this == null || this.showCut(0));
}
function xT() {
  var e;
  const t = ((e = this == null ? void 0 : this.gs) == null ? void 0 : e.vis) ?? (this == null ? void 0 : this.vis);
  t && (t.clearSelection(), t.resetShapeAxes(), t.resetCutMeasurementAxes(), t.resetPositions());
}
function ST(t) {
  Ct.call(this, ["examineShape"]) && (this.examineShape = null), wt.call(this, ["activeStockId"], t);
}
function kT() {
  var i;
  const t = [], e = ((i = this == null ? void 0 : this.gs) == null ? void 0 : i.inputShapes) ?? (this == null ? void 0 : this.inputShapes);
  e.length || t.push("No valid parts found");
  const n = p1(e);
  return (!(e != null && e.length) || !n) && t.push("No quantity of parts found"), t;
}
function ET(t) {
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
var TT = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
function AT(t = TT.VITE_WS_SERVER) {
  this.socket = Cs(t, {
    withCredentials: !0,
    //this is required to send passport user data
    autoConnect: !1
  }), this.socket.on("connect", () => {
    wt.call(this, ["connected"], !0);
  }), this.socket.on("maintenance", () => {
    wt.call(this, ["maintenanceMode"], !0), this.socket.disconnect(), this.env === "development" && console.log(
      "SmartCut - maintenance mode flag received from server"
    );
  }), this.socket.on("connect_error", (e) => {
    wt.call(this, ["connected"], !1), console.warn(`SmartCut - socket connect_error: ${e.message}`), typeof alert < "u" && alert(
      "We are having trouble connecting to the server. Please try again later."
    );
  }), this.socket.on("message", (e) => console.log(e)), this.socket.on("queued", () => {
    wt.call(this, ["progress", "queue"], 1);
  }), this.socket.on("jobInProgess", (e) => (alert(
    `You already have a job in progress, please wait for it to finish

Job ID: ${e}`
  ), !1)), this.socket.on(
    "jobStart",
    () => wt.call(this, ["progress", "queue"], 2)
  ), this.socket.on("progress", (e) => {
    const n = e.data;
    typeof n.shapeCount < "u" && wt.call(this, ["progress", "shapeCount"], n.shapeCount), typeof n.stockCount < "u" && wt.call(this, ["progress", "stockCount"], n.stockCount), typeof n.resultCount < "u" && wt.call(this, ["progress", "resultCount"], n.resultCount);
  }), this.socket.on("upgrade", () => {
    "showUpgradeModal" in this && typeof this.showUpgradeModal == "function" && this.showUpgradeModal(), wt.call(this, ["thinking"], !1);
  }), this.socket.on("error", (e) => {
    var i;
    wt.call(this, ["thinking"], !1);
    const n = Ct.call(this, ["reset"]);
    typeof n == "function" && n(), console.error("SmartCut error:", e), (i = window == null ? void 0 : window.top) == null || i.postMessage(
      {
        type: "scError",
        message: e
      },
      "*"
    ), "showMessage" in this && typeof this.showMessage == "function" && this.showMessage(e), typeof this.showModalMessage == "function" && this.showModalMessage({
      heading: "Issue",
      main: e ? `<p>${e}</p>` : "<p>We are having trouble connecting to the server.</p><p>Please try again later and let us know.</p>"
    });
  }), this.socket.on("result", (e) => {
    var a, l, c, u, f, h, p, y, S, k;
    this.socket.disconnect();
    const n = e.result, i = Ct.call(this, ["resetProgress"]);
    if (wt.call(this, ["metadata"], n.metadata ?? {}), wt.call(this, ["unusableShapes"], n.unusableShapes ?? []), wt.call(this, ["unavailableStock"], n.unavailableStock ?? []), !((a = n.shapeList) != null && a.length) || !((l = n.stockList) != null && l.length)) {
      if (i(), typeof this.showModalMessage == "function") {
        let m = "<p>We did not manage to fit any parts.</p>";
        (c = n == null ? void 0 : n.unusableShapes) != null && c.length ? (m = "<p>No parts were usable.</p><p>Click below to view the <strong>Unusable parts</strong> message in the <strong>Inputs panel</stong>.</p>", this.showModalMessage({
          heading: "Parts unusable",
          main: m,
          buttonText: "Show me",
          buttonCallback: (b) => {
            b.showPanel("inputs", !1), this.$nextTick(() => {
              b.showPageElement("ununsable-parts");
            });
          }
        })) : (m += "<p>Please double check your inputs.</p>", this.$nextTick(() => {
          this.showModalMessage({
            heading: "Parts unusable",
            main: m
          });
        }));
      }
      return (u = window == null ? void 0 : window.top) == null || u.postMessage(
        {
          type: "scError",
          message: "No parts were added - please double check your inputs."
        },
        "*"
      ), "showMessage" in this && typeof this.showMessage == "function" && this.showMessage(
        "No parts were added - please double check your inputs."
      ), wt.call(this, ["thinking"], !1), typeof this.toggleWidget == "function" && this.toggleWidget.call(this, "inputs", !0), !1;
    }
    n.shapeList.find((m) => !m.added) && typeof this.showModalMessage == "function" && this.$nextTick(() => {
      this.showModalMessage({
        heading: "Parts not used",
        main: "<p>We did not use all your parts.</p><p>Click below to view the <strong>Unusable parts</strong> message in the <strong>Inputs panel</stong>.</p>",
        buttonText: "Show me",
        buttonCallback: (m) => {
          m.showPanel("inputs", !1), this.$nextTick(() => {
            m.showPageElement("ununsable-parts");
          });
        }
      });
    }), wt.call(this, ["progress", "complete"], !0), wt.call(this, ["jobId"], e == null ? void 0 : e.jobId), this.toggleWidget("updateStock", !1), this.toggleWidget("options", !1), this.toggleWidget("offcuts", !1), this.toggleWidget("results", !1), this.toggleWidget("cutlist", !1), this.toggleWidget("export", !1), this.toggleWidget("labels", !1);
    let r;
    n != null && n.saw && (r = new On(
      n == null ? void 0 : n.saw,
      ((f = n == null ? void 0 : n.saw) == null ? void 0 : f.stockType) ?? ((p = (h = n.stockList) == null ? void 0 : h[0]) == null ? void 0 : p.type)
    ), wt.call(this, ["saw"], r));
    const s = mw({
      saw: r,
      stockList: n.stockList,
      removeScores: !0,
      preventAutoRotation: !0
    });
    wt.call(this, ["stockList"], s);
    const o = Ct.call(this, ["usedStock"]);
    o.length && this.$nextTick(() => {
      wt.call(this, ["activeStockId"], o[0].id);
    }), wt.call(
      this,
      ["shapeList"],
      yw({
        shapeList: n.shapeList,
        stockList: s,
        preventAutoRotation: !0
      })
    ), n != null && n.cutList && wt.call(
      this,
      ["cutList"],
      bw({
        cutList: n.cutList,
        stockList: s
      })
    ), n != null && n.segmentList && wt.call(
      this,
      ["segmentList"],
      vw({
        segmentList: n.segmentList,
        stockList: s
      })
    ), n != null && n.offcuts && wt.call(
      this,
      ["offcuts"],
      ww({
        offcuts: n.offcuts,
        stockList: s,
        preventAutoRotation: !0
      })
    ), n != null && n.metadata && wt.call(this, ["metadata"], n.metadata), (y = n == null ? void 0 : n.evolutionVisData) != null && y.length ? wt.call(this, ["evolutionVisData"], n.evolutionVisData) : typeof this.toggleWidget == "function" && this.toggleWidget.call(this, "evolution", !1), typeof this.toggleWidget == "function" && this.toggleWidget.call(this, "workbench", !0), wt.call(this, ["thinking"], !1), (k = (S = this.$refs) == null ? void 0 : S.inputs) != null && k.success && (this.$refs.inputs.success = !1), this.$nextTick(() => {
      var b, x;
      if (Ct.call(this, ["addedShapes"]).length === 0) {
        if (i(), typeof this.showModalMessage == "function") {
          let _ = "<p>We could not fit any parts.</p>";
          (b = n == null ? void 0 : n.unusableShapes) != null && b.length ? (_ += "<p>Some parts were not usable - click below to view the <strong>Unusable parts</strong> message in the <strong>Inputs panel</stong>.</p>", this.showModalMessage({
            heading: "No layouts",
            main: _,
            buttonText: "More info",
            buttonCallback: (E) => {
              E.showPanel("inputs", !1), this.$nextTick(() => {
                E.showPageElement("ununsable-parts");
              });
            }
          })) : (_ += "<p>Please double check your inputs.</p>", this.showModalMessage({
            heading: "No layouts",
            main: _
          }));
        }
        (x = window == null ? void 0 : window.top) == null || x.postMessage(
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
function oo(t, e, n, i) {
  var r, s;
  return !n || !i ? !1 : typeof ((s = (r = t == null ? void 0 : t[n]) == null ? void 0 : r[e]) == null ? void 0 : s[i]) < "u";
}
function CT(t, e, n, i) {
  var r;
  return !n || !i ? !1 : oo(t, e, n, i) ? (r = t[n][e][i]) == null ? void 0 : r.enabled : !1;
}
function OT(t, e, n, i, r = !0) {
  if (!oo(t, e, n, i))
    return !1;
  oo(t, e, n, i) && (t[n][e][i].enabled = r);
}
function vP(t, e) {
  return t.type === "unitDependent" ? e === "decimal" ? "decimal" : "text" : t.type === "number" ? "decimal" : "text";
}
function _P(t, e) {
  return t.type === "unitDependent" ? e === "decimal" ? "number" : "text" : t.type === "boolean" ? "checkbox" : t.type === "number" ? "number" : "text";
}
function wP(t) {
  return typeof t.min > "u" ? null : typeof t.min == "function" ? t.min() : typeof t.min == "number" ? t.min : null;
}
function xP(t) {
  return typeof t.max > "u" ? null : typeof t.max == "function" ? t.max() : typeof t.max == "number" ? t.max : null;
}
const PT = {
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
}, ci = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [i, r] of e)
    n[i] = r;
  return n;
}, NT = { id: "mini-stock-nav" }, IT = ["onMousedown"], LT = { class: "id" };
function MT(t, e, n, i, r, s) {
  return Q(), et("div", NT, [
    (Q(!0), et($t, null, vn(n.stockList, (o, a) => (Q(), et("button", {
      key: a,
      class: an(["nav-button", { selected: o.id === n.activeStockId }]),
      type: "button",
      style: zt({
        backgroundColor: o.id === n.activeStockId ? "#" + n.secondaryColor : "#" + n.primaryColor
      }),
      onMousedown: (l) => s.showStock(o.id)
    }, [
      st("div", LT, yt(a + 1), 1),
      tn(st("div", { class: "stack legibility" }, yt(o.stack), 513), [
        [bd, typeof o.stack == "number" && o.stack > 1]
      ])
    ], 46, IT))), 128))
  ]);
}
const RT = /* @__PURE__ */ ci(PT, [["render", MT]]), DT = {
  name: "OrientationButton",
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
}, $T = /* @__PURE__ */ st("path", { d: "m481.2 33.81c-8.938-3.656-19.31-1.656-26.16 5.219l-50.51 50.51c-40.23-35.729-92.43-57.539-148.53-57.539-99 0-187.47 66.31-215.09 161.3-3.72 12.7 3.59 26 16.31 29.7 12.81 3.781 26.06-3.625 29.75-16.31 21.73-74.59 91.23-126.69 169.03-126.69 43.12 0 83.35 16.42 114.7 43.4l-59.63 59.63c-6.875 6.875-8.906 17.19-5.219 26.16 3.719 8.969 12.47 14.81 22.19 14.81h143.9c13.259-.9 24.059-10.7 24.059-24v-144c0-9.72-5.8-18.47-14.8-22.19zm-26.5 254.29c-12.78-3.75-26.06 3.594-29.75 16.31-21.65 75.49-91.15 127.59-169.85 127.59-43.12 0-83.38-16.42-114.7-43.41l59.62-59.62c6.875-6.875 8.891-17.03 5.203-26-2.823-8.97-11.523-14.97-22.123-14.97h-143.05c-13.25 0-24.11 10.74-24.11 23.99v144c0 9.719 5.844 18.47 14.81 22.19 2.97 1.22 6.09 1.82 9.19 1.82 6.25 0 12.38-2.438 16.97-7.031l50.51-50.52c40.18 35.751 92.48 57.551 147.68 57.551 99 0 187.4-66.31 215.1-161.3 4.6-13.6-2.8-26-15.5-30.6z" }, null, -1), FT = [
  $T
], BT = /* @__PURE__ */ st("path", { d: "m512 256c0 6.688-2.812 13.09-7.719 17.62l-104 96c-4.581 4.28-10.481 6.38-16.281 6.38-6.469 0-12.91-2.594-17.62-7.719-9-9.75-8.406-24.94 1.344-33.91l58.876-54.371h-341.22l58.91 54.38c9.75 8.969 10.34 24.16 1.344 33.91-4.734 5.11-11.134 7.71-17.634 7.71-5.812 0-11.66-2.094-16.28-6.375l-104-96c-4.907-4.525-7.72-10.925-7.72-17.625s2.812-13.09 7.719-17.62l104-96c9.781-9.08 24.981-8.38 33.881 1.32 9 9.75 8.406 24.94-1.344 33.91l-58.876 54.39h341.3l-58.91-54.38c-9.75-8.969-10.34-24.16-1.344-33.91 8.874-9.71 24.074-10.41 33.874-1.31l104 96c4.9 4.5 7.7 10.9 7.7 17.6z" }, null, -1), UT = [
  BT
], qT = {
  key: 2,
  class: "orientation",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, HT = /* @__PURE__ */ st("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1), WT = [
  HT
];
function VT(t, e, n, i, r, s) {
  var o, a, l;
  return Q(), et("div", {
    class: an(["orientation-button", [
      {
        "orientation-l": n.shape.orientationLock === "l",
        "orientation-w": n.shape.orientationLock === "w"
      }
    ]]),
    "aria-label": "Part orientation",
    style: zt({
      background: n.buttonBackground
    })
  }, [
    n.shape.orientationLock ? pt("", !0) : (Q(), et("svg", {
      key: 0,
      class: "no-orientation",
      style: zt({
        fill: n.iconColor
      }),
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, FT, 4)),
    (l = (a = (o = n.shape) == null ? void 0 : o.orientationLock) == null ? void 0 : a.trim()) != null && l.length ? (Q(), et("svg", {
      key: 1,
      class: "orientation",
      style: zt({
        fill: n.iconColor ? n.iconColor : "#ffffff"
      }),
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, UT, 4)) : pt("", !0),
    n.shape.orientationLock === " " ? (Q(), et("svg", qT, WT)) : pt("", !0)
  ], 6);
}
const jT = /* @__PURE__ */ ci(DT, [["render", VT]]), zT = /* @__PURE__ */ oi({
  name: "BandingButton",
  props: {
    inputShape: {
      type: Object,
      default: null
    },
    open: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["clicked"],
  computed: {
    x1() {
      const t = Object.values(
        this.inputShape.bandingOptions.x1
      ).every((n) => n), e = this.inputShape.banding.x1;
      return t || e;
    },
    x2() {
      const t = Object.values(
        this.inputShape.bandingOptions.x2
      ).every((n) => n), e = this.inputShape.banding.x2;
      return t || e;
    },
    y1() {
      const t = Object.values(
        this.inputShape.bandingOptions.y1
      ).every((n) => n), e = this.inputShape.banding.y1;
      return t || e;
    },
    y2() {
      const t = Object.values(
        this.inputShape.bandingOptions.y2
      ).every((n) => n), e = this.inputShape.banding.y2;
      return t || e;
    }
  },
  methods: {
    click() {
      this.$emit("clicked");
    }
  }
}), GT = /* @__PURE__ */ st("div", { class: "inner" }, null, -1), YT = [
  GT
];
function KT(t, e, n, i, r, s) {
  return Q(), et("div", {
    class: an(["banding-button", { open: t.open }]),
    onClick: e[0] || (e[0] = (...o) => t.click && t.click(...o))
  }, [
    st("div", {
      class: an(["outer", { x1: t.x1, x2: t.x2, y1: t.y1, y2: t.y2 }])
    }, YT, 2)
  ], 2);
}
const XT = /* @__PURE__ */ ci(zT, [["render", KT]]), JT = {
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
}, QT = { id: "spinner" }, ZT = ["width", "height"], tA = /* @__PURE__ */ ky('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7), eA = [
  tA
], nA = /* @__PURE__ */ st("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1), iA = [
  nA
], rA = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function sA(t, e, n, i, r, s) {
  return Q(), et("div", QT, [
    n.complete ? pt("", !0) : (Q(), et("svg", {
      key: 0,
      class: "loading",
      style: zt({ width: n.size + "px", height: n.size + "px" }),
      width: n.size,
      height: n.size,
      viewBox: "0 0 300 300"
    }, eA, 12, ZT)),
    n.complete ? (Q(), et("svg", {
      key: 1,
      class: "complete",
      style: zt({ width: n.size + "px", height: n.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, iA, 4)) : pt("", !0),
    n.showNumber ? (Q(), et("div", rA, yt(n.number), 1)) : pt("", !0)
  ]);
}
const oA = /* @__PURE__ */ ci(JT, [["render", sA]]);
function aA(t) {
  var e, n, i, r, s, o, a, l;
  return t.machining ? (n = (e = t.machining) == null ? void 0 : e.holes) != null && n.length || (r = (i = t.machining) == null ? void 0 : i.hingeHoles) != null && r.length ? !0 : (o = (s = t.machining) == null ? void 0 : s.corners) != null && o.length ? (l = (a = t.machining) == null ? void 0 : a.corners) == null ? void 0 : l.some((c) => c.type && c.size) : !1 : !1;
}
const lA = /* @__PURE__ */ Al(
  () => import("./Machining-C1WnI-2Q.js")
), cA = /* @__PURE__ */ Al(() => import("./Import-BEDG7S9A.js")), cg = {
  name: "CheckoutCalculator",
  components: {
    StockNavigation: RT,
    OrientationButton: jT,
    Spinner: oA,
    Machining: lA,
    BandingButton: XT,
    Import: cA
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
  emits: ["result", "log", "error", "debug"],
  setup() {
    const { t, locale: e, fallbackLocale: n } = To({
      locale: "en_US"
    });
    return {
      t,
      locale: e,
      fallbackLocale: n
    };
  },
  data() {
    const t = ff(
      "Checkout/inputShapes",
      [],
      {
        serializer: {
          read: (e) => {
            const n = e ? JSON.parse(e) : [];
            return gw(n, this.units);
          },
          write: (e) => JSON.stringify(e)
        },
        listenToStorageChanges: !1
      }
    );
    return {
      domain: window.location.hostname,
      connected: !1,
      maintenanceMode: !1,
      creditVisible: !0,
      currentURL: ff(
        "Checkout/currentURL",
        window.location.href
      ),
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
      stockList: pi([]),
      shapeList: pi([]),
      cutList: pi([]),
      offcuts: pi([]),
      metadata: null,
      messageVisible: !1,
      messageContent: "",
      vis: Sl({}),
      visInit: !1,
      isFullScreen: !1,
      selectedShapeId: null,
      //special sections
      machiningEnabled: !1,
      bandingEnabled: null,
      //index of the shape with banding dropdowns
      importEnabled: !1,
      //default options
      options: {
        decimalPlaces: 2,
        stackHeight: 100,
        maxParts: null,
        disableBanding: !1,
        disableOrientation: !1,
        bandingOptions: {},
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
        marginBottom: "0px",
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
      canGoFullScreen: y1(),
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
              w: "28px"
            },
            banding: {
              enabled: !0,
              type: null,
              w: "28px"
            },
            machining: {
              enabled: !1,
              type: null,
              w: "26px"
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
      return this.units === "decimal" ? "number" : "string";
    },
    inputMode() {
      return this.units === "decimal" ? "decimal" : "text";
    },
    partColumns() {
      let t = Object.values(
        this.fieldDefinitions.parts[this.saw.stockType]
      ).filter((e) => e.enabled).length;
      return this.inputShapes.length > 1 && t++, t;
    },
    partColumnsStyle() {
      const t = {
        id: "34px",
        del: "30px"
      }, e = [];
      for (const i in this.fieldDefinitions.parts[this.saw.stockType]) {
        if (["trim"].includes(i))
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
      return mT(this.stockList);
    },
    activeStock() {
      return this.activeStockId ? pT(this.stockList, this.activeStockId) : null;
    },
    activeStockArea() {
      return this.activeStock.getArea();
    },
    stackedStock() {
      return m1(this.stockList);
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
      return gT(this.cutList, this.activeStock);
    },
    unplacedShapes() {
      return g1(this.shapeList);
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
      ET.call(this, t);
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
          var i, r;
          return {
            l: n.l,
            w: n.w,
            t: n == null ? void 0 : n.t,
            q: (r = (i = this == null ? void 0 : this.metadata) == null ? void 0 : i.addedPartTally) == null ? void 0 : r[n.parentID]
          };
        }),
        stock: this.uniqueUsedStock.map((n) => {
          var i, r, s;
          return {
            name: n == null ? void 0 : n.name,
            l: n.l,
            w: n.w,
            t: n == null ? void 0 : n.t,
            q: (s = (r = (i = this == null ? void 0 : this.metadata) == null ? void 0 : i.metadata) == null ? void 0 : r.usedStockTally) == null ? void 0 : s[n.parentID]
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
        this.showMessage(
          this.$t("The following parts did not fit") + ": " + n
        );
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
    const t = new URL(window.location.href);
    t.search = "";
    const e = t.toString();
    this.currentURL !== e && (this.inputShapes.length = 0), this.currentURL = e, this.locale = this.options.locale, AT.call(this, this.server), this.viewportWidth = window.innerWidth, this.resizeTimer = null;
    const n = this.debounce(this.handleResize, 30);
    window.addEventListener("resize", n, {
      passive: !0
    }), this.mounted = !0;
  },
  methods: {
    importParts(t) {
      this.inputShapes.length = 0, this.$nextTick(() => {
        t.forEach((e) => {
          var n, i;
          e.t = ((i = (n = this.inputStock) == null ? void 0 : n[0]) == null ? void 0 : i.t) ?? null, this.inputShapes.push(this.createShapeInput(e));
        });
      });
    },
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
    openBanding(t = null) {
      this.currentInputShape === t ? (this.currentInputShape = null, this.bandingEnabled = null) : (this.currentInputShape = t, this.bandingEnabled = this.inputShapes.indexOf(t));
    },
    closeMachining() {
      this.machiningEnabled = !1, document.exitFullscreen && document.exitFullscreen();
    },
    hasMachining(t = null) {
      return t ? aA(t) : !1;
    },
    resetProgress() {
      os(this.progress);
    },
    reset() {
      os(this.progress), this.stockList = [], this.shapeList = [], this.cutList = [], this.jobId = 0;
    },
    async updateVisSize(t = !1) {
      if (!this.vis)
        return !1;
      await this.vis.updateSize(t), this.clearSelection();
    },
    isFieldEnabled(t, e) {
      return CT(
        this.fieldDefinitions,
        this.saw.stockType,
        t,
        e
      );
    },
    isFieldPresent(t, e) {
      return oo(
        this.fieldDefinitions,
        this.saw.stockType,
        t,
        e
      );
    },
    setFieldEnabled(t, e, n = !0) {
      return OT(
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
          this.$t("The maximum number of parts is") + " " + this.options.maxParts
        );
        return;
      }
      vT.call(this);
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
              const { cutType: s, cutPreference: o } = Fa(e.cutPreference);
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
          enableImport: () => {
            this.importEnabled = e.enableImport;
          },
          bandingOptions: () => {
            if (e.disableBanding)
              return this.setFieldEnabled(
                "parts",
                "banding",
                !1
              );
            this.options.bandingOptions = e.bandingOptions;
            const r = Object.keys(
              this.options.bandingOptions
            ), s = Object.values(
              this.options.bandingOptions
            ).flat();
            return this.inputShapes.forEach((o) => {
              if (o.removeBandingApartFromBandingOptions(), o.bandingOptions)
                for (const a in o.bandingOptions)
                  Object.keys(
                    o.bandingOptions[a]
                  ).forEach((c) => {
                    r.includes(
                      c
                    ) || delete o.bandingOptions[a][c];
                  }), r.forEach((c) => {
                    var u, f;
                    s.includes(
                      (f = (u = o.bandingOptions) == null ? void 0 : u[a]) == null ? void 0 : f[c]
                    ) || (o.bandingOptions[a][c] = "");
                  });
            }), this.options.bandingOptions && Object.values(this.options.bandingOptions).length > 0 ? this.setFieldEnabled(
              "parts",
              "banding",
              !0
            ) : this.setFieldEnabled("parts", "banding", !1);
          },
          locale: () => {
            this.locale = e.locale;
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
            units: this.units,
            decimalPlaces: this.options.decimalPlaces,
            saw: this.saw,
            app: !1,
            embed: !0,
            colors: this.colors,
            options: this.visOptions,
            vueComponent: this
          };
          yT.call(this, r);
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
        this.messageContent += `<li>${this.$t(n)}</li>`;
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
      cost: o = 0,
      notes: a = ""
    }) {
      return new cp({
        id: (this.inputStock.length + 1).toString(),
        units: this.units,
        w: e,
        l: t,
        t: n,
        q: i,
        cost: o,
        autoAdd: !0,
        name: r,
        trim: s,
        notes: a
      });
    },
    createShapeInput({
      l: t = null,
      w: e = null,
      t: n = null,
      q: i = 1,
      name: r = null,
      orientationLock: s = null
    }) {
      var l;
      const o = new zl({
        id: (this.inputShapes.length + 1).toString(),
        units: this.units,
        l: t,
        w: this.saw.stockType === "linear" ? (l = this.inputStock[0]) == null ? void 0 : l.w : e,
        t: this.multiThicknesses.length ? this.multiThicknesses[0] : n,
        q: i,
        name: r,
        orientationLock: s
      });
      return Object.keys(this.options.bandingOptions).forEach((c) => {
        for (const u in o.bandingOptions)
          o.bandingOptions[u][c] = "";
      }), o;
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
        t === 1 && (Array.isArray((r = this.$refs) == null ? void 0 : r.shapeInputFocus) ? (s = this.$refs) == null || s.shapeInputFocus.pop().focus() : this.$refs.shapeInputFocus.focus()), os(this.progress);
      });
    },
    removeShape(t) {
      this.inputShapes.splice(t, 1), os(this.progress);
    },
    createStock(t, e) {
      const n = $(t.l), i = $(t.w), r = t.t ? $(t.t) : null, s = new Dn({
        id: (e + 1).toString() + ".0",
        name: t != null && t.name ? t.name : `${n}x${i}`,
        l: n,
        w: i,
        t: r,
        saw: new On(this.saw),
        autoAdd: !0,
        cost: t == null ? void 0 : t.cost,
        trim: t.trim,
        allowExactFitShapes: t.allowExactFitShapes,
        type: this.saw.stockType,
        notes: t == null ? void 0 : t.notes
      });
      return this.stockList.push(s), s.issues;
    },
    createStockList() {
      return bT.call(this, !1);
    },
    //this is for double thickness bonded sheets
    changePartQuantitiesBasedOnThickness() {
      if (this.multiThicknesses.length > 0) {
        const t = $(this.multiThicknesses[0]);
        this.shapeList.forEach((e) => {
          e.q = e.q * ($(e.t) / t), e.t = t;
        });
      }
    },
    createShapeList() {
      var e, n;
      const t = [];
      for (let i = 0; i < this.inputShapes.length; i++) {
        const r = this.inputShapes[i];
        if (r.convertBandingOptionsToBanding(), (e = r == null ? void 0 : r.issues) != null && e.length && t.push(
          ...r.issues.map(
            (o) => this.$t("Part") + ` ${i + 1}: ${o}`
          )
        ), !r.l || !r.w || !r.q)
          continue;
        const s = new Pn({
          id: (i + 1).toString() + ".0",
          l: $(r == null ? void 0 : r.l),
          w: $(r == null ? void 0 : r.w),
          t: r.t ? $(r == null ? void 0 : r.t) : null,
          q: typeof r.q != "number" ? parseInt(r.q) : r.q,
          name: r.name,
          orientationLock: r.orientationLock,
          banding: r.banding,
          bandingType: r.bandingType,
          machining: r.machining
        });
        this.shapeList.push(s), (n = s == null ? void 0 : s.issues) != null && n.length && t.push(...s.issues);
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
      wT.call(this);
    },
    refreshShapes() {
      _T.call(this, this.uniqueShapes.length);
    },
    toggleWidget(t, e = null) {
      dT.call(this, t, e);
    },
    clearSelection() {
      xT.call(this);
    },
    showStock(t) {
      ST.call(this, t);
    },
    updateAllBanding(t, e, n) {
      n.setAllBandingOptions(e, t.target.value);
    },
    deleteBanding(t) {
      t.removeBandingApartFromBandingOptions(), Object.keys(this.options.bandingOptions).forEach((n) => {
        for (const i in t.bandingOptions)
          t.bandingOptions[i][n] = "";
      });
    },
    getBandingPrice(t) {
      const e = Object.values(t || {});
      if (!Array.isArray(e) || !e.every((i) => i))
        return "";
      const n = this.$parent.findBandingPrice(e);
      return this.$parent.formatPrice(n, !0);
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
function Yf(t) {
  const e = t;
  e.__i18n = e.__i18n || [], e.__i18n.push({
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
        machining: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Machining" } },
        orientation: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Orientation" } },
        "add part": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Add part" } },
        "remove part": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Remove part" } },
        calculate: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Calculate" } },
        "full screen": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Full screen" } },
        banding: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Banding" } },
        "delete banding": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Delete banding" } },
        delete: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Delete" } },
        clear: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Clear" } },
        l1: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "L1" } },
        l2: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "L2" } },
        w1: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "W1" } },
        w2: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "W2" } },
        all: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "All" } },
        Part: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Part" } },
        Issue: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Issue" } },
        "The following parts did not fit": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "The following parts did not fit" } },
        "The maximum number of parts is": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "The maximum number of parts is" } },
        "No valid parts found": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "No valid parts found" } },
        "Drop CSV file here": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Drop CSV file here" } },
        "Powered by SmartCut": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Powered by SmartCut" } }
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
      }
    }
  });
}
const dc = (t) => (Im("data-v-70f5ed12"), t = t(), Lm(), t), uA = {
  id: "shape-input",
  class: "inputs no-margin-top grid-table"
}, fA = /* @__PURE__ */ dc(() => /* @__PURE__ */ st("div", { class: "cell" }, null, -1)), hA = {
  key: 0,
  class: "cell"
}, dA = {
  key: 1,
  class: "cell"
}, pA = {
  key: 2,
  class: "cell"
}, gA = { class: "cell" }, mA = {
  key: 3,
  class: "cell"
}, yA = {
  key: 4,
  class: "cell center"
}, bA = {
  key: 5,
  class: "cell center"
}, vA = {
  key: 6,
  class: "cell center"
}, _A = {
  key: 7,
  class: "cell"
}, wA = { class: "cell" }, xA = {
  key: 0,
  class: "number length cell"
}, SA = ["for"], kA = ["id", "onUpdate:modelValue", "type", "inputmode", "placeholder"], EA = {
  key: 1,
  class: "number width cell"
}, TA = ["for"], AA = ["id", "onUpdate:modelValue", "type", "inputmode", "placeholder"], CA = {
  key: 2,
  class: "thickness cell"
}, OA = ["id", "onUpdate:modelValue"], PA = ["value"], NA = { class: "number quant cell" }, IA = ["for"], LA = ["id", "onUpdate:modelValue", "placeholder"], MA = {
  key: 3,
  class: "text name cell"
}, RA = ["id", "onUpdate:modelValue", "aria-label", "placeholder"], DA = {
  key: 4,
  class: "cell align-items-center"
}, $A = ["onClick"], FA = {
  key: 6,
  class: "cell center"
}, BA = {
  key: 7,
  class: "cell"
}, UA = ["aria-label", "onClick"], qA = ["for"], HA = ["id", "onUpdate:modelValue"], WA = /* @__PURE__ */ dc(() => /* @__PURE__ */ st("option", { value: "" }, " ✘ ", -1)), VA = ["value"], jA = ["onUpdate:modelValue", "onChange"], zA = /* @__PURE__ */ dc(() => /* @__PURE__ */ st("option", { value: "" }, " ✘ ", -1)), GA = ["value"], YA = ["aria-label", "onClick"], KA = { class: "button-wrapper main" }, XA = ["aria-label"], JA = ["aria-label", "disabled"], QA = ["aria-label"], ZA = { id: "part-count" }, tC = ["innerHTML"], eC = {
  key: 3,
  id: "progress"
}, nC = {
  id: "smartcut-svg-wrapper",
  class: "svg-wrapper production"
}, iC = {
  key: 0,
  id: "stack"
};
function rC(t, e, n, i, r, s) {
  var p, y, S, k, m;
  const o = bn("Machining"), a = bn("font-awesome-icon"), l = bn("OrientationButton"), c = bn("BandingButton"), u = bn("Import"), f = bn("Spinner"), h = bn("StockNavigation");
  return Q(), et($t, null, [
    r.machiningEnabled ? (Q(), Si(o, {
      key: 0,
      shape: r.currentInputShape,
      options: r.machiningOptions,
      onClose: s.closeMachining
    }, null, 8, ["shape", "options", "onClose"])) : pt("", !0),
    r.creditVisible ? (Q(), et("div", {
      key: 1,
      id: "smartcut-checkout",
      class: an({ fullscreen: r.isFullScreen })
    }, [
      r.canGoFullScreen ? (Q(), et("div", {
        key: 0,
        id: "smartcut-full-screen",
        class: "icon-left",
        onClick: e[0] || (e[0] = (b) => s.toggleFullScreen())
      }, [
        gt(a, { icon: ["fasr", "expand"] }),
        Hn(" " + yt(i.t("full screen")), 1)
      ])) : pt("", !0),
      st("div", {
        id: "credit",
        style: zt(r.creditStyles)
      }, [
        st("a", {
          title: "SmartCut | Cut list optimization software",
          style: zt(r.creditLinkStyles),
          target: "_blank",
          href: "https://smartcut.dev/"
        }, yt(i.t("Powered by SmartCut")), 5)
      ], 4),
      st("div", uA, [
        r.inputShapes.length ? (Q(), et("div", {
          key: 0,
          class: "row table-heading",
          style: zt({ "grid-template-columns": s.partColumnsStyle })
        }, [
          fA,
          s.isFieldEnabled("parts", "l") ? (Q(), et("div", hA, [
            st("span", null, [
              gt(a, { icon: ["fasr", "arrows-left-right"] }),
              Hn(" " + yt(i.t("length")), 1)
            ])
          ])) : pt("", !0),
          s.isFieldEnabled("parts", "w") ? (Q(), et("div", dA, [
            st("span", null, [
              gt(a, { icon: ["fasr", "arrows-up-down"] }),
              Hn(" " + yt(i.t("width")), 1)
            ])
          ])) : pt("", !0),
          s.isFieldEnabled("parts", "t") ? (Q(), et("div", pA, yt(i.t("thickness")), 1)) : pt("", !0),
          st("div", gA, yt(i.t("quantity")), 1),
          s.isFieldEnabled("parts", "name") ? (Q(), et("div", mA, yt(i.t("name")), 1)) : pt("", !0),
          s.isFieldEnabled("parts", "orientation") ? (Q(), et("div", yA, yt(i.t("orientation")), 1)) : pt("", !0),
          r.canGoFullScreen && s.isFieldEnabled("parts", "machining") ? (Q(), et("div", bA, yt(i.t("machining")), 1)) : pt("", !0),
          s.isFieldEnabled("parts", "banding") ? (Q(), et("div", vA, yt(i.t("banding")), 1)) : pt("", !0),
          r.inputShapes.length > 1 ? (Q(), et("div", _A)) : pt("", !0)
        ], 4)) : pt("", !0),
        (Q(!0), et($t, null, vn(r.inputShapes, (b, x) => (Q(), et("div", {
          key: x,
          class: "row grid-table",
          style: zt({ "grid-template-columns": s.partColumnsStyle })
        }, [
          st("div", wA, [
            st("div", {
              class: "id",
              style: zt({
                background: r.colors.partA,
                color: r.colors.text
              })
            }, yt(x + 1), 5)
          ]),
          s.isFieldEnabled("parts", "l") ? (Q(), et("div", xA, [
            st("label", {
              for: "part-length-" + x
            }, yt(i.t("length")), 9, SA),
            tn(st("input", {
              id: "part-length-" + x,
              ref_for: !0,
              ref: x === r.inputShapes.length - 1 ? "shapeInputFocus" : void 0,
              "onUpdate:modelValue": (_) => b.l = _,
              type: s.inputType,
              inputmode: s.inputMode,
              min: "0",
              placeholder: i.t("l")
            }, null, 8, kA), [
              [
                uu,
                b.l,
                void 0,
                {
                  lazy: !0,
                  trim: !0
                }
              ]
            ])
          ])) : pt("", !0),
          s.isFieldEnabled("parts", "w") ? (Q(), et("div", EA, [
            st("label", {
              for: "part-width-" + x
            }, yt(i.t("width")), 9, TA),
            tn(st("input", {
              id: "part-width-" + x,
              "onUpdate:modelValue": (_) => b.w = _,
              type: s.inputType,
              inputmode: s.inputMode,
              min: "0",
              placeholder: i.t("w")
            }, null, 8, AA), [
              [
                uu,
                b.w,
                void 0,
                {
                  lazy: !0,
                  trim: !0
                }
              ]
            ])
          ])) : pt("", !0),
          s.isFieldEnabled("parts", "t") ? (Q(), et("div", CA, [
            tn(st("select", {
              id: "part-thickness" + x,
              "onUpdate:modelValue": (_) => b.t = _,
              "aria-label": "Thickness"
            }, [
              (Q(!0), et($t, null, vn(r.multiThicknesses, (_, E) => (Q(), et("option", {
                key: E,
                value: _
              }, yt(_), 9, PA))), 128))
            ], 8, OA), [
              [
                xs,
                b.t,
                void 0,
                { lazy: !0 }
              ]
            ])
          ])) : pt("", !0),
          st("div", NA, [
            st("label", {
              for: "part-quantity-" + x
            }, yt(i.t("quantity")), 9, IA),
            tn(st("input", {
              id: "part-quantity-" + x,
              "onUpdate:modelValue": (_) => b.q = _,
              type: "number",
              inputmode: "numeric",
              min: "0",
              placeholder: i.t("q")
            }, null, 8, LA), [
              [
                Us,
                b.q,
                void 0,
                {
                  lazy: !0,
                  number: !0
                }
              ]
            ])
          ]),
          s.isFieldEnabled("parts", "name") ? (Q(), et("div", MA, [
            tn(st("input", {
              id: "part-name-" + x,
              "onUpdate:modelValue": (_) => b.name = _,
              "aria-label": i.t("name"),
              type: "text",
              placeholder: i.t("name")
            }, null, 8, RA), [
              [
                Us,
                b.name,
                void 0,
                { lazy: !0 }
              ]
            ])
          ])) : pt("", !0),
          s.isFieldEnabled("parts", "orientation") ? (Q(), et("div", DA, [
            gt(l, {
              shape: b,
              "button-background": r.colors.button,
              "icon-color": r.colors.buttonText,
              onClick: (_) => s.toggleShapeOrientation(b)
            }, null, 8, ["shape", "button-background", "icon-color", "onClick"])
          ])) : pt("", !0),
          r.canGoFullScreen && s.isFieldEnabled("parts", "machining") ? (Q(), et("div", {
            key: 5,
            class: an(["cell center", { active: s.hasMachining(b) }])
          }, [
            st("button", {
              type: "button",
              onClick: (_) => s.openMachining(b)
            }, [
              gt(a, { icon: ["fass", "hammer"] })
            ], 8, $A)
          ], 2)) : pt("", !0),
          s.isFieldEnabled("parts", "banding") ? (Q(), et("div", FA, [
            gt(c, {
              "input-shape": b,
              open: r.bandingEnabled === x,
              onClicked: (_) => s.openBanding(b)
            }, null, 8, ["input-shape", "open", "onClicked"])
          ])) : pt("", !0),
          r.inputShapes.length > 1 ? (Q(), et("div", BA, [
            st("button", {
              type: "button",
              class: "remove",
              "aria-label": i.t("remove part"),
              onClick: (_) => s.removeShape(x)
            }, [
              gt(a, { icon: ["fass", "trash"] })
            ], 8, UA)
          ])) : pt("", !0),
          r.bandingEnabled === x && s.isFieldEnabled("parts", "banding") && Object.values(r.options.bandingOptions).length > 0 ? (Q(), et("div", {
            key: 8,
            class: "group banding",
            style: zt({ "grid-column-end": "span " + (s.partColumns + 1) })
          }, [
            (Q(), et($t, null, vn(["y1", "y2", "x1", "x2"], (_, E) => st("div", { key: E }, [
              st("label", {
                for: "banding-" + _ + "-" + x
              }, yt(i.t(
                _ === "y1" || _ === "y2" ? "l" + (E % 2 + 1) : "w" + (E % 2 + 1)
              )), 9, qA),
              (Q(!0), et($t, null, vn(r.options.bandingOptions, (P, L, W) => tn((Q(), et("select", {
                id: "banding-" + L + "-" + _ + "-" + W + "-" + x,
                key: L + W.toString(),
                "onUpdate:modelValue": (M) => b.bandingOptions[_][L] = M
              }, [
                st("div", null, yt(L) + " " + yt(b.bandingOptions[_][L]), 1),
                WA,
                (Q(!0), et($t, null, vn(P, (M, H) => (Q(), et("option", {
                  key: H,
                  value: M
                }, yt(M), 9, VA))), 128))
              ], 8, HA)), [
                [
                  xs,
                  b.bandingOptions[_][L],
                  void 0,
                  { lazy: !0 }
                ]
              ])), 128)),
              st("div", null, yt(s.getBandingPrice(b.bandingOptions[_])), 1)
            ])), 64)),
            st("div", null, [
              st("label", null, yt(i.t("all")), 1),
              (Q(!0), et($t, null, vn(r.options.bandingOptions, (_, E, P) => tn((Q(), et("select", {
                key: E + P.toString(),
                "onUpdate:modelValue": (L) => b.bandingOptions.all[E] = L,
                onChange: (L) => s.updateAllBanding(L, E, b)
              }, [
                st("div", null, yt(i.t("all")), 1),
                zA,
                (Q(!0), et($t, null, vn(_, (L, W) => (Q(), et("option", {
                  key: W,
                  value: L
                }, yt(L), 9, GA))), 128))
              ], 40, jA)), [
                [
                  xs,
                  b.bandingOptions.all[E],
                  void 0,
                  { lazy: !0 }
                ]
              ])), 128))
            ]),
            st("button", {
              type: "button",
              class: "delete icon-left",
              "aria-label": i.t("delete banding"),
              onClick: (_) => s.deleteBanding(b)
            }, [
              gt(a, { icon: ["fass", "trash"] }),
              Hn(" " + yt(i.t("delete banding")), 1)
            ], 8, YA)
          ], 4)) : pt("", !0)
        ], 4))), 128))
      ]),
      st("div", KA, [
        st("button", {
          type: "button",
          "aria-label": i.t("add part"),
          style: zt({ background: r.colors.button, color: r.colors.buttonText }),
          class: "add c-btn icon-left",
          onClick: e[1] || (e[1] = (b) => s.addShape(1))
        }, [
          gt(a, { icon: ["fasr", "plus-large"] }),
          Hn(" Add ")
        ], 12, XA),
        st("button", {
          class: "c-btn calculate icon-left",
          type: "button",
          "aria-label": i.t("calculate"),
          style: zt({
            background: r.colors.button,
            color: r.colors.buttonText
          }),
          disabled: !((p = r.inputStock) != null && p.length) || r.thinking,
          onClick: e[2] || (e[2] = (b) => s.calculate())
        }, [
          gt(a, { icon: ["fass", "calculator"] }),
          Hn("Calculate price ")
        ], 12, JA),
        st("button", {
          type: "button",
          class: "c-btn clear",
          "aria-label": i.t("clear"),
          onClick: e[3] || (e[3] = (b) => s.clear())
        }, [
          gt(a, { icon: ["fass", "trash"] })
        ], 8, QA),
        st("div", ZA, yt(s.totalInputShapes) + yt((y = r.options) != null && y.maxParts ? "/" + r.options.maxParts : ""), 1)
      ]),
      r.importEnabled ? (Q(), Si(u, {
        key: 1,
        ref: "import",
        units: n.units,
        onImport: s.importParts
      }, null, 8, ["units", "onImport"])) : pt("", !0),
      r.messageVisible ? (Q(), et("div", {
        key: 2,
        id: "messages",
        innerHTML: r.messageContent
      }, null, 8, tC)) : pt("", !0),
      (r.options.showDiagram ? r.thinking && !r.progress.complete : r.thinking || r.progress.complete) ? (Q(), et("div", eC, [
        gt(f, {
          size: 50,
          number: r.progress.shapeCount,
          complete: r.progress.complete,
          "show-number": r.options.showProgressNumber
        }, null, 8, ["number", "complete", "show-number"])
      ])) : pt("", !0),
      tn(st("div", nC, [
        ((S = s.activeStock) == null ? void 0 : S.type) !== "roll" ? (Q(), et("div", iC, yt((k = s.activeStock) != null && k.stack ? (m = s.activeStock) == null ? void 0 : m.stack : 1), 1)) : pt("", !0)
      ], 512), [
        [bd, r.options.showDiagram && r.jobId > 0 && r.progress.complete]
      ]),
      r.options.showDiagram && r.visInit && s.usedStock.length > 1 && r.jobId > 0 && r.progress.complete ? (Q(), Si(h, {
        key: 4,
        ref: "stockNavigation",
        "active-stock-id": r.activeStockId,
        "stock-list": s.stackedStock,
        "stock-count": r.stockList.length,
        "viewport-width": r.viewportWidth,
        onShowStock: s.showStock
      }, null, 8, ["active-stock-id", "stock-list", "stock-count", "viewport-width", "onShowStock"])) : pt("", !0)
    ], 2)) : pt("", !0)
  ], 64);
}
typeof Yf == "function" && Yf(cg);
const sC = /* @__PURE__ */ ci(cg, [["render", rC], ["__scopeId", "data-v-70f5ed12"]]), oC = {
  name: "Wordpress",
  //needs to be Wordpress not WordPress
  components: {
    CheckoutCalculator: sC
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
      return window.smartcutConfig.settings.units;
    }
  },
  created() {
    console.log(
      "💥 Powered by https://smartcut.dev",
      window.smartcutConfig.version
    );
  },
  mounted() {
    var e, n, i;
    console.log("Launching WordPress checkout..."), this.bandingData = ((e = window.smartcutConfig) == null ? void 0 : e.banding_data) ?? null, this.machiningPricing = ((n = window.smartcutConfig) == null ? void 0 : n.machining_pricing) ?? null, this.variations = ((i = window.smartcutConfig) == null ? void 0 : i.variations) ?? null, this.cacheElements(), this.cacheInputFields(), this.configureProduct(window.smartcutConfig), this.configurePricing(window.smartcutConfig), this.initCheckout(), this.configureStock(), jQuery(".variations_form").on("reset_data", () => {
      this.disableCutToSize();
    }), jQuery(".variations_form").on("found_variation", (r, s) => {
      var a, l, c;
      this.reset(), this.stock = [];
      const o = (a = s == null ? void 0 : s.attributes) == null ? void 0 : a.attribute_thickness;
      if (this.product.selected_thickness = o, this.product.multiple_sizes) {
        const u = this.getSizes(s);
        if (!u)
          return this.disableCutToSize(), this.el.cart_button.disabled = !0, this.el.quantity.readOnly = !0, this.error(
            "The size of this multiple size product could not be found"
          );
        Array.isArray(u) ? this.enableCutToSize() : this.isFullSheetSize(u) ? (this.disableCutToSize(), this.enableFullSheet(), this.el.quantity.style.display = "inline-block") : (this.enableCutToSize(), this.el.quantity.style.display = "none"), this.log(["variation found", u, o]);
        let f;
        if ((l = this.variations) != null && l.length && this.product.selected_thickness) {
          if (Array.isArray(u)) {
            const h = this.variations.find(
              (p) => p.attributes.thickness === this.product.selected_thickness
            );
            if (!h)
              return this.error(
                `variation not found for thickness ${this.product.selected_thickness}`
              );
            f = u.map((p) => ({
              size: p,
              l: p.split("x")[0],
              w: p.split("x")[1],
              t: this.product.selected_thickness,
              price: h == null ? void 0 : h.price
            }));
          } else
            f = this.variations.filter((h) => {
              var p, y;
              return /\d+x\d+/.test((p = h == null ? void 0 : h.attributes) == null ? void 0 : p.size) ? this.product.selected_thickness === ((y = h == null ? void 0 : h.attributes) == null ? void 0 : y.thickness) : !1;
            }).map((h) => {
              var p, y, S;
              return {
                size: (p = h == null ? void 0 : h.attributes) == null ? void 0 : p.size,
                l: (y = h == null ? void 0 : h.attributes) == null ? void 0 : y.size.split("x")[0],
                w: (S = h == null ? void 0 : h.attributes) == null ? void 0 : S.size.split("x")[1],
                t: this.product.selected_thickness,
                price: h == null ? void 0 : h.price
                //the base price entered by the admin
              };
            });
          f.forEach((h) => {
            const p = this.createStock(
              h.l,
              h.w,
              h.t,
              h.price,
              s == null ? void 0 : s.attributes
            );
            this.stock.push(p);
          });
        }
      } else {
        this.el.quantity.style.display = "inline-block";
        const u = this.variations.find(
          (h) => h.attributes.thickness === this.product.selected_thickness
        );
        if (!u)
          return this.error(
            `variation not found for thickness ${this.product.selected_thickness}`
          );
        const f = (c = s == null ? void 0 : s.attributes) == null ? void 0 : c.attribute_thickness;
        this.stock.push(
          this.createStock(
            this.product.l,
            this.product.w,
            f,
            u.price,
            s == null ? void 0 : s.attributes
          )
        ), this.enableCutToSize();
      }
    }), [
      "div.quantity > input.plus",
      "div.quantity > input.minus",
      "div.quantity .qty-plus",
      "div.quantity .qty-minus"
    ].forEach((r) => {
      const s = document.querySelector(r);
      s && (s.style.display = "none");
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
      var t, e, n, i, r, s, o, a, l, c, u, f, h, p, y, S, k, m, b, x, _;
      if (!(window != null && window.smartcutConfig)) {
        console.error("SmartCut config not found");
        return;
      }
      for (const E in window.smartcutConfig.settings_fields)
        this.settings[E] = this.parseValue(
          window.smartcutConfig.settings[E],
          window.smartcutConfig.settings_fields[E]
        );
      this.options = {
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
        enableImport: this.settings.enable_import,
        //diagram
        showDiagram: !this.settings.hide_diagram,
        showProgressNumber: this.settings.pricing_strategy !== "part_area",
        //banding
        bandingOptions: this.getBandingOptions(
          (t = window.smartcutConfig) == null ? void 0 : t.banding_data
        ),
        enableMachining: this.settings.enable_machining,
        //machining - this needs to match the MachiningOptions type
        machining: {
          sides: {
            enabled: this.settings.machining_sides
          },
          holes: {
            enabled: this.settings.machining_holes,
            defaultDiameter: this.settings.machining_holes_default_diameter,
            diameters: this.settings.machining_holes_diameters.split(",").map((E) => E.trim()).filter((E) => E),
            minDiameter: this.settings.machining_holes_min_diameter,
            maxDiameter: this.settings.machining_holes_max_diameter,
            enableDepth: this.settings.machining_holes_depth,
            depths: this.settings.machining_holes_depths.split(",").map((E) => E.trim()).filter((E) => E),
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
            ].filter((E) => E),
            minValue: this.settings.machining_corners_min_value,
            maxValue: this.settings.machining_corners_max_value
          },
          banding: {
            enabled: !!(!this.settings.disable_banding && ((n = (e = window.smartcutConfig) == null ? void 0 : e.banding_data) != null && n.length)),
            enableCorners: this.settings.machining_corners_enable_banding,
            types: (i = window.smartcutConfig) == null ? void 0 : i.banding_data,
            enableTypes: ((r = window.smartcutConfig) == null ? void 0 : r.banding_data) ?? !1
          }
        },
        //colors
        colors: {
          partA: (s = this.settings) != null && s.part_a_color ? (o = this.settings) == null ? void 0 : o.part_a_color : "#1d9bc4",
          partB: (a = this.settings) != null && a.part_b_color ? (l = this.settings) == null ? void 0 : l.part_b_color : "#065d7a",
          partHover: (c = this.settings) != null && c.part_hover_color ? (u = this.settings) == null ? void 0 : u.part_hover_color : "#f8b029",
          partSelected: (f = this.settings) != null && f.part_selected_color ? (h = this.settings) == null ? void 0 : h.part_selected_color : "#5bc85b",
          stock: (p = this.settings) != null && p.stock_color ? (y = this.settings) == null ? void 0 : y.stock_color : "#ffd166",
          button: (S = this.settings) != null && S.button_color ? (k = this.settings) == null ? void 0 : k.button_color : "#118ab2",
          buttonText: (m = this.settings) != null && m.button_text_color ? (b = this.settings) == null ? void 0 : b.button_text_color : "#ffffff",
          text: (x = this.settings) != null && x.text_color ? (_ = this.settings) == null ? void 0 : _.text_color : "#ffffff"
        }
      }, console.log(this.options), this.$refs.calculator.init({
        stock: this.stock,
        options: this.options,
        type: this.product.type,
        variations: this.variations ?? null
      });
    },
    formatPrice(t = 0, e = !1) {
      if (!t)
        return e ? this.addCurrencySymbol("0.00") : "0.00";
      typeof t == "string" && (t = parseFloat(t));
      const n = t.toFixed(this.formatting.number_of_decimals).replace(".", this.formatting.decimal_separator);
      return e ? this.addCurrencySymbol(n) : n;
    },
    addCurrencySymbol(t) {
      switch (this.formatting.currency_position) {
        case "left":
          return `${this.formatting.currency_symbol}${t}`;
        case "right":
          return `${t}${this.formatting.currency_symbol}`;
        default:
          return `${this.formatting.currency_symbol}${t}`;
      }
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
    createStock(t = null, e = null, n = null, i = null, r = null) {
      let s;
      if (r && typeof r == "object") {
        if (s = [], r && typeof r == "object")
          for (const [a, l] of Object.entries(r))
            a !== "attribute_size" && a !== "attribute_thickness" && s.push(
              `${a.replace("attribute_", "")}: ${l}`
            );
        s = s.join(" - ");
      }
      return {
        name: this.product.stock_name,
        type: this.settings.stock_type,
        l: t,
        w: e,
        t: n,
        cost: parseFloat(i),
        trim: this.getStockTrim(),
        notes: s
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
    formatBandingKey(t) {
      return Yl(Mr(t)).replace("|", "_");
    },
    //map the banding data into options and ensure the keys are formatted correctly
    getBandingOptions(t) {
      if (!t)
        return null;
      const e = {};
      for (const n of Object.values(t)) {
        const i = n == null ? void 0 : n.options;
        if (!(n == null ? void 0 : n.variations)) {
          "simple" in e ? e.simple.push(
            ...Object.values(i).flat()
          ) : e.simple = Object.values(i).flat();
          continue;
        }
        for (const [s, o] of Object.entries(
          i
        ))
          e[s] = Array.isArray(o) ? o : [o];
      }
      for (const [n, i] of Object.entries(e))
        e[n] = i.map(
          (r) => this.formatBandingKey(r)
        );
      return e;
    },
    //find the price of a banding option based on an array of options
    findBandingPrice(t) {
      const n = Object.values(this.bandingData).map((i) => i != null && i.variations ? Object.values(i.variations) : i).flat().find((i) => {
        const r = Object.values(i.options);
        return r ? t.every((s, o) => {
          const a = r == null ? void 0 : r[o];
          return a ? this.formatBandingKey(a) === t[o] : !1;
        }) : !1;
      });
      return n ? n.price : null;
    },
    //get the total price of the banding based on the bandingLengthByType metadata
    getTotalBandingPrice(t) {
      var n;
      let e = 0;
      if (typeof t == "object") {
        for (let [i, r] of Object.entries(t)) {
          typeof r == "string" && (r = parseFloat(r));
          const s = i.split("|"), o = this.findBandingPrice(s);
          if (o === null)
            continue;
          const a = r / (this.settings.units === "fraction" ? 12 : 1e3) * parseFloat(o);
          e += a;
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
      var t;
      if (((t = window.smartcutConfig) == null ? void 0 : t.product_type) === "variable")
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
      var t;
      return !(((t = this.settings) == null ? void 0 : t.disable_banding) === !0 || !this.bandingData || !Object.values(this.bandingData).length);
    },
    isMachiningEnabled() {
      return this.settings.enable_machining === !0;
    },
    isSurchargeEnabled() {
      var t, e;
      return !(((t = this.settings) == null ? void 0 : t.surcharge_type) === "none" || !((e = this == null ? void 0 : this.settings) != null && e.surcharge) || this.settings.surcharge === "0.00");
    },
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
      window.smartcutConfig.input_fields.forEach((t) => {
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
function aC(t, e, n, i, r, s) {
  const o = bn("CheckoutCalculator");
  return Q(), Si(o, {
    ref: "calculator",
    debug: r.debug,
    stock: r.stock,
    units: s.smartcutConfigUnits ?? "decimal",
    onLog: s.log,
    onError: s.error,
    onDebug: s.toggleDebug,
    onResult: s.result
  }, null, 8, ["debug", "stock", "units", "onLog", "onError", "onDebug", "onResult"]);
}
const lC = /* @__PURE__ */ ci(oC, [["render", aC]]), cC = /* @__PURE__ */ Al(() => import("./Vanilla-D-gmKyER.js")), uC = /* @__PURE__ */ oi({
  name: "Launch",
  components: {
    Wordpress: lC,
    Vanilla: cC
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
function fC(t, e, n, i, r, s) {
  return Q(), Si(Bm(t.currentComponent), { ref: "checkout" }, null, 512);
}
const hC = /* @__PURE__ */ ci(uC, [["render", fC]]);
function Kf(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    e && (i = i.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function z(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Kf(Object(n), !0).forEach(function(i) {
      qt(t, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Kf(Object(n)).forEach(function(i) {
      Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return t;
}
function ao(t) {
  "@babel/helpers - typeof";
  return ao = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ao(t);
}
function dC(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Xf(t, e) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
  }
}
function pC(t, e, n) {
  return e && Xf(t.prototype, e), n && Xf(t, n), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function qt(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function pc(t, e) {
  return mC(t) || bC(t, e) || ug(t, e) || _C();
}
function Dr(t) {
  return gC(t) || yC(t) || ug(t) || vC();
}
function gC(t) {
  if (Array.isArray(t))
    return Qa(t);
}
function mC(t) {
  if (Array.isArray(t))
    return t;
}
function yC(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function bC(t, e) {
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
function ug(t, e) {
  if (t) {
    if (typeof t == "string")
      return Qa(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Qa(t, e);
  }
}
function Qa(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, i = new Array(e); n < e; n++)
    i[n] = t[n];
  return i;
}
function vC() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _C() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Jf = function() {
}, gc = {}, fg = {}, hg = null, dg = {
  mark: Jf,
  measure: Jf
};
try {
  typeof window < "u" && (gc = window), typeof document < "u" && (fg = document), typeof MutationObserver < "u" && (hg = MutationObserver), typeof performance < "u" && (dg = performance);
} catch {
}
var wC = gc.navigator || {}, Qf = wC.userAgent, Zf = Qf === void 0 ? "" : Qf, Nn = gc, At = fg, th = hg, as = dg;
Nn.document;
var dn = !!At.documentElement && !!At.head && typeof At.addEventListener == "function" && typeof At.createElement == "function", pg = ~Zf.indexOf("MSIE") || ~Zf.indexOf("Trident/"), ls, cs, us, fs, hs, ln = "___FONT_AWESOME___", Za = 16, gg = "fa", mg = "svg-inline--fa", ni = "data-fa-i2svg", tl = "data-fa-pseudo-element", xC = "data-fa-pseudo-element-pending", mc = "data-prefix", yc = "data-icon", eh = "fontawesome-i2svg", SC = "async", kC = ["HTML", "HEAD", "STYLE", "SCRIPT"], yg = function() {
  try {
    return !0;
  } catch {
    return !1;
  }
}(), Tt = "classic", Lt = "sharp", bc = [Tt, Lt];
function $r(t) {
  return new Proxy(t, {
    get: function(n, i) {
      return i in n ? n[i] : n[Tt];
    }
  });
}
var xr = $r((ls = {}, qt(ls, Tt, {
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
}), qt(ls, Lt, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), ls)), Sr = $r((cs = {}, qt(cs, Tt, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), qt(cs, Lt, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), cs)), kr = $r((us = {}, qt(us, Tt, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), qt(us, Lt, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), us)), EC = $r((fs = {}, qt(fs, Tt, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), qt(fs, Lt, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), fs)), TC = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, bg = "fa-layers-text", AC = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, CC = $r((hs = {}, qt(hs, Tt, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), qt(hs, Lt, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), hs)), vg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], OC = vg.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), PC = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Gn = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Er = /* @__PURE__ */ new Set();
Object.keys(Sr[Tt]).map(Er.add.bind(Er));
Object.keys(Sr[Lt]).map(Er.add.bind(Er));
var NC = [].concat(bc, Dr(Er), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Gn.GROUP, Gn.SWAP_OPACITY, Gn.PRIMARY, Gn.SECONDARY]).concat(vg.map(function(t) {
  return "".concat(t, "x");
})).concat(OC.map(function(t) {
  return "w-".concat(t);
})), lr = Nn.FontAwesomeConfig || {};
function IC(t) {
  var e = At.querySelector("script[" + t + "]");
  if (e)
    return e.getAttribute(t);
}
function LC(t) {
  return t === "" ? !0 : t === "false" ? !1 : t === "true" ? !0 : t;
}
if (At && typeof At.querySelector == "function") {
  var MC = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  MC.forEach(function(t) {
    var e = pc(t, 2), n = e[0], i = e[1], r = LC(IC(n));
    r != null && (lr[i] = r);
  });
}
var _g = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: gg,
  replacementClass: mg,
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
lr.familyPrefix && (lr.cssPrefix = lr.familyPrefix);
var Di = z(z({}, _g), lr);
Di.autoReplaceSvg || (Di.observeMutations = !1);
var X = {};
Object.keys(_g).forEach(function(t) {
  Object.defineProperty(X, t, {
    enumerable: !0,
    set: function(n) {
      Di[t] = n, cr.forEach(function(i) {
        return i(X);
      });
    },
    get: function() {
      return Di[t];
    }
  });
});
Object.defineProperty(X, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Di.cssPrefix = e, cr.forEach(function(n) {
      return n(X);
    });
  },
  get: function() {
    return Di.cssPrefix;
  }
});
Nn.FontAwesomeConfig = X;
var cr = [];
function RC(t) {
  return cr.push(t), function() {
    cr.splice(cr.indexOf(t), 1);
  };
}
var yn = Za, ze = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function DC(t) {
  if (!(!t || !dn)) {
    var e = At.createElement("style");
    e.setAttribute("type", "text/css"), e.innerHTML = t;
    for (var n = At.head.childNodes, i = null, r = n.length - 1; r > -1; r--) {
      var s = n[r], o = (s.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (i = s);
    }
    return At.head.insertBefore(e, i), t;
  }
}
var $C = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Tr() {
  for (var t = 12, e = ""; t-- > 0; )
    e += $C[Math.random() * 62 | 0];
  return e;
}
function ji(t) {
  for (var e = [], n = (t || []).length >>> 0; n--; )
    e[n] = t[n];
  return e;
}
function vc(t) {
  return t.classList ? ji(t.classList) : (t.getAttribute("class") || "").split(" ").filter(function(e) {
    return e;
  });
}
function wg(t) {
  return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function FC(t) {
  return Object.keys(t || {}).reduce(function(e, n) {
    return e + "".concat(n, '="').concat(wg(t[n]), '" ');
  }, "").trim();
}
function Fo(t) {
  return Object.keys(t || {}).reduce(function(e, n) {
    return e + "".concat(n, ": ").concat(t[n].trim(), ";");
  }, "");
}
function _c(t) {
  return t.size !== ze.size || t.x !== ze.x || t.y !== ze.y || t.rotate !== ze.rotate || t.flipX || t.flipY;
}
function BC(t) {
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
function UC(t) {
  var e = t.transform, n = t.width, i = n === void 0 ? Za : n, r = t.height, s = r === void 0 ? Za : r, o = t.startCentered, a = o === void 0 ? !1 : o, l = "";
  return a && pg ? l += "translate(".concat(e.x / yn - i / 2, "em, ").concat(e.y / yn - s / 2, "em) ") : a ? l += "translate(calc(-50% + ".concat(e.x / yn, "em), calc(-50% + ").concat(e.y / yn, "em)) ") : l += "translate(".concat(e.x / yn, "em, ").concat(e.y / yn, "em) "), l += "scale(".concat(e.size / yn * (e.flipX ? -1 : 1), ", ").concat(e.size / yn * (e.flipY ? -1 : 1), ") "), l += "rotate(".concat(e.rotate, "deg) "), l;
}
var qC = `:root, :host {
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
function xg() {
  var t = gg, e = mg, n = X.cssPrefix, i = X.replacementClass, r = qC;
  if (n !== t || i !== e) {
    var s = new RegExp("\\.".concat(t, "\\-"), "g"), o = new RegExp("\\--".concat(t, "\\-"), "g"), a = new RegExp("\\.".concat(e), "g");
    r = r.replace(s, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(a, ".".concat(i));
  }
  return r;
}
var nh = !1;
function aa() {
  X.autoAddCss && !nh && (DC(xg()), nh = !0);
}
var HC = {
  mixout: function() {
    return {
      dom: {
        css: xg,
        insertCss: aa
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        aa();
      },
      beforeI2svg: function() {
        aa();
      }
    };
  }
}, cn = Nn || {};
cn[ln] || (cn[ln] = {});
cn[ln].styles || (cn[ln].styles = {});
cn[ln].hooks || (cn[ln].hooks = {});
cn[ln].shims || (cn[ln].shims = []);
var Le = cn[ln], Sg = [], WC = function t() {
  At.removeEventListener("DOMContentLoaded", t), lo = 1, Sg.map(function(e) {
    return e();
  });
}, lo = !1;
dn && (lo = (At.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(At.readyState), lo || At.addEventListener("DOMContentLoaded", WC));
function VC(t) {
  dn && (lo ? setTimeout(t, 0) : Sg.push(t));
}
function Fr(t) {
  var e = t.tag, n = t.attributes, i = n === void 0 ? {} : n, r = t.children, s = r === void 0 ? [] : r;
  return typeof t == "string" ? wg(t) : "<".concat(e, " ").concat(FC(i), ">").concat(s.map(Fr).join(""), "</").concat(e, ">");
}
function ih(t, e, n) {
  if (t && t[e] && t[e][n])
    return {
      prefix: e,
      iconName: n,
      icon: t[e][n]
    };
}
var jC = function(e, n) {
  return function(i, r, s, o) {
    return e.call(n, i, r, s, o);
  };
}, la = function(e, n, i, r) {
  var s = Object.keys(e), o = s.length, a = r !== void 0 ? jC(n, r) : n, l, c, u;
  for (i === void 0 ? (l = 1, u = e[s[0]]) : (l = 0, u = i); l < o; l++)
    c = s[l], u = a(u, e[c], c, e);
  return u;
};
function zC(t) {
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
function el(t) {
  var e = zC(t);
  return e.length === 1 ? e[0].toString(16) : null;
}
function GC(t, e) {
  var n = t.length, i = t.charCodeAt(e), r;
  return i >= 55296 && i <= 56319 && n > e + 1 && (r = t.charCodeAt(e + 1), r >= 56320 && r <= 57343) ? (i - 55296) * 1024 + r - 56320 + 65536 : i;
}
function rh(t) {
  return Object.keys(t).reduce(function(e, n) {
    var i = t[n], r = !!i.icon;
    return r ? e[i.iconName] = i.icon : e[n] = i, e;
  }, {});
}
function nl(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = n.skipHooks, r = i === void 0 ? !1 : i, s = rh(e);
  typeof Le.hooks.addPack == "function" && !r ? Le.hooks.addPack(t, rh(e)) : Le.styles[t] = z(z({}, Le.styles[t] || {}), s), t === "fas" && nl("fa", e);
}
var ds, ps, gs, mi = Le.styles, YC = Le.shims, KC = (ds = {}, qt(ds, Tt, Object.values(kr[Tt])), qt(ds, Lt, Object.values(kr[Lt])), ds), wc = null, kg = {}, Eg = {}, Tg = {}, Ag = {}, Cg = {}, XC = (ps = {}, qt(ps, Tt, Object.keys(xr[Tt])), qt(ps, Lt, Object.keys(xr[Lt])), ps);
function JC(t) {
  return ~NC.indexOf(t);
}
function QC(t, e) {
  var n = e.split("-"), i = n[0], r = n.slice(1).join("-");
  return i === t && r !== "" && !JC(r) ? r : null;
}
var Og = function() {
  var e = function(s) {
    return la(mi, function(o, a, l) {
      return o[l] = la(a, s, {}), o;
    }, {});
  };
  kg = e(function(r, s, o) {
    if (s[3] && (r[s[3]] = o), s[2]) {
      var a = s[2].filter(function(l) {
        return typeof l == "number";
      });
      a.forEach(function(l) {
        r[l.toString(16)] = o;
      });
    }
    return r;
  }), Eg = e(function(r, s, o) {
    if (r[o] = o, s[2]) {
      var a = s[2].filter(function(l) {
        return typeof l == "string";
      });
      a.forEach(function(l) {
        r[l] = o;
      });
    }
    return r;
  }), Cg = e(function(r, s, o) {
    var a = s[2];
    return r[o] = o, a.forEach(function(l) {
      r[l] = o;
    }), r;
  });
  var n = "far" in mi || X.autoFetchSvg, i = la(YC, function(r, s) {
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
  Tg = i.names, Ag = i.unicodes, wc = Bo(X.styleDefault, {
    family: X.familyDefault
  });
};
RC(function(t) {
  wc = Bo(t.styleDefault, {
    family: X.familyDefault
  });
});
Og();
function xc(t, e) {
  return (kg[t] || {})[e];
}
function ZC(t, e) {
  return (Eg[t] || {})[e];
}
function Yn(t, e) {
  return (Cg[t] || {})[e];
}
function Pg(t) {
  return Tg[t] || {
    prefix: null,
    iconName: null
  };
}
function tO(t) {
  var e = Ag[t], n = xc("fas", t);
  return e || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function In() {
  return wc;
}
var Sc = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function Bo(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = e.family, i = n === void 0 ? Tt : n, r = xr[i][t], s = Sr[i][t] || Sr[i][r], o = t in Le.styles ? t : null;
  return s || o || null;
}
var sh = (gs = {}, qt(gs, Tt, Object.keys(kr[Tt])), qt(gs, Lt, Object.keys(kr[Lt])), gs);
function Uo(t) {
  var e, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.skipLookups, r = i === void 0 ? !1 : i, s = (e = {}, qt(e, Tt, "".concat(X.cssPrefix, "-").concat(Tt)), qt(e, Lt, "".concat(X.cssPrefix, "-").concat(Lt)), e), o = null, a = Tt;
  (t.includes(s[Tt]) || t.some(function(c) {
    return sh[Tt].includes(c);
  })) && (a = Tt), (t.includes(s[Lt]) || t.some(function(c) {
    return sh[Lt].includes(c);
  })) && (a = Lt);
  var l = t.reduce(function(c, u) {
    var f = QC(X.cssPrefix, u);
    if (mi[u] ? (u = KC[a].includes(u) ? EC[a][u] : u, o = u, c.prefix = u) : XC[a].indexOf(u) > -1 ? (o = u, c.prefix = Bo(u, {
      family: a
    })) : f ? c.iconName = f : u !== X.replacementClass && u !== s[Tt] && u !== s[Lt] && c.rest.push(u), !r && c.prefix && c.iconName) {
      var h = o === "fa" ? Pg(c.iconName) : {}, p = Yn(c.prefix, c.iconName);
      h.prefix && (o = null), c.iconName = h.iconName || p || c.iconName, c.prefix = h.prefix || c.prefix, c.prefix === "far" && !mi.far && mi.fas && !X.autoFetchSvg && (c.prefix = "fas");
    }
    return c;
  }, Sc());
  return (t.includes("fa-brands") || t.includes("fab")) && (l.prefix = "fab"), (t.includes("fa-duotone") || t.includes("fad")) && (l.prefix = "fad"), !l.prefix && a === Lt && (mi.fass || X.autoFetchSvg) && (l.prefix = "fass", l.iconName = Yn(l.prefix, l.iconName) || l.iconName), (l.prefix === "fa" || o === "fa") && (l.prefix = In() || "fas"), l;
}
var eO = /* @__PURE__ */ function() {
  function t() {
    dC(this, t), this.definitions = {};
  }
  return pC(t, [{
    key: "add",
    value: function() {
      for (var n = this, i = arguments.length, r = new Array(i), s = 0; s < i; s++)
        r[s] = arguments[s];
      var o = r.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(a) {
        n.definitions[a] = z(z({}, n.definitions[a] || {}), o[a]), nl(a, o[a]);
        var l = kr[Tt][a];
        l && nl(l, o[a]), Og();
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
}(), oh = [], yi = {}, Ei = {}, nO = Object.keys(Ei);
function iO(t, e) {
  var n = e.mixoutsTo;
  return oh = t, yi = {}, Object.keys(Ei).forEach(function(i) {
    nO.indexOf(i) === -1 && delete Ei[i];
  }), oh.forEach(function(i) {
    var r = i.mixout ? i.mixout() : {};
    if (Object.keys(r).forEach(function(o) {
      typeof r[o] == "function" && (n[o] = r[o]), ao(r[o]) === "object" && Object.keys(r[o]).forEach(function(a) {
        n[o] || (n[o] = {}), n[o][a] = r[o][a];
      });
    }), i.hooks) {
      var s = i.hooks();
      Object.keys(s).forEach(function(o) {
        yi[o] || (yi[o] = []), yi[o].push(s[o]);
      });
    }
    i.provides && i.provides(Ei);
  }), n;
}
function il(t, e) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++)
    i[r - 2] = arguments[r];
  var s = yi[t] || [];
  return s.forEach(function(o) {
    e = o.apply(null, [e].concat(i));
  }), e;
}
function ii(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    n[i - 1] = arguments[i];
  var r = yi[t] || [];
  r.forEach(function(s) {
    s.apply(null, n);
  });
}
function un() {
  var t = arguments[0], e = Array.prototype.slice.call(arguments, 1);
  return Ei[t] ? Ei[t].apply(null, e) : void 0;
}
function rl(t) {
  t.prefix === "fa" && (t.prefix = "fas");
  var e = t.iconName, n = t.prefix || In();
  if (e)
    return e = Yn(n, e) || e, ih(Ng.definitions, n, e) || ih(Le.styles, n, e);
}
var Ng = new eO(), rO = function() {
  X.autoReplaceSvg = !1, X.observeMutations = !1, ii("noAuto");
}, sO = {
  i2svg: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return dn ? (ii("beforeI2svg", e), un("pseudoElements2svg", e), un("i2svg", e)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.autoReplaceSvgRoot;
    X.autoReplaceSvg === !1 && (X.autoReplaceSvg = !0), X.observeMutations = !0, VC(function() {
      aO({
        autoReplaceSvgRoot: n
      }), ii("watch", e);
    });
  }
}, oO = {
  icon: function(e) {
    if (e === null)
      return null;
    if (ao(e) === "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: Yn(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      var n = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], i = Bo(e[0]);
      return {
        prefix: i,
        iconName: Yn(i, n) || n
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(X.cssPrefix, "-")) > -1 || e.match(TC))) {
      var r = Uo(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: r.prefix || In(),
        iconName: Yn(r.prefix, r.iconName) || r.iconName
      };
    }
    if (typeof e == "string") {
      var s = In();
      return {
        prefix: s,
        iconName: Yn(s, e) || e
      };
    }
  }
}, be = {
  noAuto: rO,
  config: X,
  dom: sO,
  parse: oO,
  library: Ng,
  findIconDefinition: rl,
  toHtml: Fr
}, aO = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.autoReplaceSvgRoot, i = n === void 0 ? At : n;
  (Object.keys(Le.styles).length > 0 || X.autoFetchSvg) && dn && X.autoReplaceSvg && be.dom.i2svg({
    node: i
  });
};
function qo(t, e) {
  return Object.defineProperty(t, "abstract", {
    get: e
  }), Object.defineProperty(t, "html", {
    get: function() {
      return t.abstract.map(function(i) {
        return Fr(i);
      });
    }
  }), Object.defineProperty(t, "node", {
    get: function() {
      if (dn) {
        var i = At.createElement("div");
        return i.innerHTML = t.html, i.children;
      }
    }
  }), t;
}
function lO(t) {
  var e = t.children, n = t.main, i = t.mask, r = t.attributes, s = t.styles, o = t.transform;
  if (_c(o) && n.found && !i.found) {
    var a = n.width, l = n.height, c = {
      x: a / l / 2,
      y: 0.5
    };
    r.style = Fo(z(z({}, s), {}, {
      "transform-origin": "".concat(c.x + o.x / 16, "em ").concat(c.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: r,
    children: e
  }];
}
function cO(t) {
  var e = t.prefix, n = t.iconName, i = t.children, r = t.attributes, s = t.symbol, o = s === !0 ? "".concat(e, "-").concat(X.cssPrefix, "-").concat(n) : s;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: z(z({}, r), {}, {
        id: o
      }),
      children: i
    }]
  }];
}
function kc(t) {
  var e = t.icons, n = e.main, i = e.mask, r = t.prefix, s = t.iconName, o = t.transform, a = t.symbol, l = t.title, c = t.maskId, u = t.titleId, f = t.extra, h = t.watchable, p = h === void 0 ? !1 : h, y = i.found ? i : n, S = y.width, k = y.height, m = r === "fak", b = [X.replacementClass, s ? "".concat(X.cssPrefix, "-").concat(s) : ""].filter(function(M) {
    return f.classes.indexOf(M) === -1;
  }).filter(function(M) {
    return M !== "" || !!M;
  }).concat(f.classes).join(" "), x = {
    children: [],
    attributes: z(z({}, f.attributes), {}, {
      "data-prefix": r,
      "data-icon": s,
      class: b,
      role: f.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(S, " ").concat(k)
    })
  }, _ = m && !~f.classes.indexOf("fa-fw") ? {
    width: "".concat(S / k * 16 * 0.0625, "em")
  } : {};
  p && (x.attributes[ni] = ""), l && (x.children.push({
    tag: "title",
    attributes: {
      id: x.attributes["aria-labelledby"] || "title-".concat(u || Tr())
    },
    children: [l]
  }), delete x.attributes.title);
  var E = z(z({}, x), {}, {
    prefix: r,
    iconName: s,
    main: n,
    mask: i,
    maskId: c,
    transform: o,
    symbol: a,
    styles: z(z({}, _), f.styles)
  }), P = i.found && n.found ? un("generateAbstractMask", E) || {
    children: [],
    attributes: {}
  } : un("generateAbstractIcon", E) || {
    children: [],
    attributes: {}
  }, L = P.children, W = P.attributes;
  return E.children = L, E.attributes = W, a ? cO(E) : lO(E);
}
function ah(t) {
  var e = t.content, n = t.width, i = t.height, r = t.transform, s = t.title, o = t.extra, a = t.watchable, l = a === void 0 ? !1 : a, c = z(z(z({}, o.attributes), s ? {
    title: s
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  l && (c[ni] = "");
  var u = z({}, o.styles);
  _c(r) && (u.transform = UC({
    transform: r,
    startCentered: !0,
    width: n,
    height: i
  }), u["-webkit-transform"] = u.transform);
  var f = Fo(u);
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
function uO(t) {
  var e = t.content, n = t.title, i = t.extra, r = z(z(z({}, i.attributes), n ? {
    title: n
  } : {}), {}, {
    class: i.classes.join(" ")
  }), s = Fo(i.styles);
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
var ca = Le.styles;
function sl(t) {
  var e = t[0], n = t[1], i = t.slice(4), r = pc(i, 1), s = r[0], o = null;
  return Array.isArray(s) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(X.cssPrefix, "-").concat(Gn.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(X.cssPrefix, "-").concat(Gn.SECONDARY),
        fill: "currentColor",
        d: s[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(X.cssPrefix, "-").concat(Gn.PRIMARY),
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
var fO = {
  found: !1,
  width: 512,
  height: 512
};
function hO(t, e) {
  !yg && !X.showMissingIcons && t && console.error('Icon with name "'.concat(t, '" and prefix "').concat(e, '" is missing.'));
}
function ol(t, e) {
  var n = e;
  return e === "fa" && X.styleDefault !== null && (e = In()), new Promise(function(i, r) {
    if (un("missingIconAbstract"), n === "fa") {
      var s = Pg(t) || {};
      t = s.iconName || t, e = s.prefix || e;
    }
    if (t && e && ca[e] && ca[e][t]) {
      var o = ca[e][t];
      return i(sl(o));
    }
    hO(t, e), i(z(z({}, fO), {}, {
      icon: X.showMissingIcons && t ? un("missingIconAbstract") || {} : {}
    }));
  });
}
var lh = function() {
}, al = X.measurePerformance && as && as.mark && as.measure ? as : {
  mark: lh,
  measure: lh
}, er = 'FA "6.5.1"', dO = function(e) {
  return al.mark("".concat(er, " ").concat(e, " begins")), function() {
    return Ig(e);
  };
}, Ig = function(e) {
  al.mark("".concat(er, " ").concat(e, " ends")), al.measure("".concat(er, " ").concat(e), "".concat(er, " ").concat(e, " begins"), "".concat(er, " ").concat(e, " ends"));
}, Ec = {
  begin: dO,
  end: Ig
}, Is = function() {
};
function ch(t) {
  var e = t.getAttribute ? t.getAttribute(ni) : null;
  return typeof e == "string";
}
function pO(t) {
  var e = t.getAttribute ? t.getAttribute(mc) : null, n = t.getAttribute ? t.getAttribute(yc) : null;
  return e && n;
}
function gO(t) {
  return t && t.classList && t.classList.contains && t.classList.contains(X.replacementClass);
}
function mO() {
  if (X.autoReplaceSvg === !0)
    return Ls.replace;
  var t = Ls[X.autoReplaceSvg];
  return t || Ls.replace;
}
function yO(t) {
  return At.createElementNS("http://www.w3.org/2000/svg", t);
}
function bO(t) {
  return At.createElement(t);
}
function Lg(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = e.ceFn, i = n === void 0 ? t.tag === "svg" ? yO : bO : n;
  if (typeof t == "string")
    return At.createTextNode(t);
  var r = i(t.tag);
  Object.keys(t.attributes || []).forEach(function(o) {
    r.setAttribute(o, t.attributes[o]);
  });
  var s = t.children || [];
  return s.forEach(function(o) {
    r.appendChild(Lg(o, {
      ceFn: i
    }));
  }), r;
}
function vO(t) {
  var e = " ".concat(t.outerHTML, " ");
  return e = "".concat(e, "Font Awesome fontawesome.com "), e;
}
var Ls = {
  replace: function(e) {
    var n = e[0];
    if (n.parentNode)
      if (e[1].forEach(function(r) {
        n.parentNode.insertBefore(Lg(r), n);
      }), n.getAttribute(ni) === null && X.keepOriginalSource) {
        var i = At.createComment(vO(n));
        n.parentNode.replaceChild(i, n);
      } else
        n.remove();
  },
  nest: function(e) {
    var n = e[0], i = e[1];
    if (~vc(n).indexOf(X.replacementClass))
      return Ls.replace(e);
    var r = new RegExp("".concat(X.cssPrefix, "-.*"));
    if (delete i[0].attributes.id, i[0].attributes.class) {
      var s = i[0].attributes.class.split(" ").reduce(function(a, l) {
        return l === X.replacementClass || l.match(r) ? a.toSvg.push(l) : a.toNode.push(l), a;
      }, {
        toNode: [],
        toSvg: []
      });
      i[0].attributes.class = s.toSvg.join(" "), s.toNode.length === 0 ? n.removeAttribute("class") : n.setAttribute("class", s.toNode.join(" "));
    }
    var o = i.map(function(a) {
      return Fr(a);
    }).join(`
`);
    n.setAttribute(ni, ""), n.innerHTML = o;
  }
};
function uh(t) {
  t();
}
function Mg(t, e) {
  var n = typeof e == "function" ? e : Is;
  if (t.length === 0)
    n();
  else {
    var i = uh;
    X.mutateApproach === SC && (i = Nn.requestAnimationFrame || uh), i(function() {
      var r = mO(), s = Ec.begin("mutate");
      t.map(r), s(), n();
    });
  }
}
var Tc = !1;
function Rg() {
  Tc = !0;
}
function ll() {
  Tc = !1;
}
var co = null;
function fh(t) {
  if (th && X.observeMutations) {
    var e = t.treeCallback, n = e === void 0 ? Is : e, i = t.nodeCallback, r = i === void 0 ? Is : i, s = t.pseudoElementsCallback, o = s === void 0 ? Is : s, a = t.observeMutationsRoot, l = a === void 0 ? At : a;
    co = new th(function(c) {
      if (!Tc) {
        var u = In();
        ji(c).forEach(function(f) {
          if (f.type === "childList" && f.addedNodes.length > 0 && !ch(f.addedNodes[0]) && (X.searchPseudoElements && o(f.target), n(f.target)), f.type === "attributes" && f.target.parentNode && X.searchPseudoElements && o(f.target.parentNode), f.type === "attributes" && ch(f.target) && ~PC.indexOf(f.attributeName))
            if (f.attributeName === "class" && pO(f.target)) {
              var h = Uo(vc(f.target)), p = h.prefix, y = h.iconName;
              f.target.setAttribute(mc, p || u), y && f.target.setAttribute(yc, y);
            } else
              gO(f.target) && r(f.target);
        });
      }
    }), dn && co.observe(l, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function _O() {
  co && co.disconnect();
}
function wO(t) {
  var e = t.getAttribute("style"), n = [];
  return e && (n = e.split(";").reduce(function(i, r) {
    var s = r.split(":"), o = s[0], a = s.slice(1);
    return o && a.length > 0 && (i[o] = a.join(":").trim()), i;
  }, {})), n;
}
function xO(t) {
  var e = t.getAttribute("data-prefix"), n = t.getAttribute("data-icon"), i = t.innerText !== void 0 ? t.innerText.trim() : "", r = Uo(vc(t));
  return r.prefix || (r.prefix = In()), e && n && (r.prefix = e, r.iconName = n), r.iconName && r.prefix || (r.prefix && i.length > 0 && (r.iconName = ZC(r.prefix, t.innerText) || xc(r.prefix, el(t.innerText))), !r.iconName && X.autoFetchSvg && t.firstChild && t.firstChild.nodeType === Node.TEXT_NODE && (r.iconName = t.firstChild.data)), r;
}
function SO(t) {
  var e = ji(t.attributes).reduce(function(r, s) {
    return r.name !== "class" && r.name !== "style" && (r[s.name] = s.value), r;
  }, {}), n = t.getAttribute("title"), i = t.getAttribute("data-fa-title-id");
  return X.autoA11y && (n ? e["aria-labelledby"] = "".concat(X.replacementClass, "-title-").concat(i || Tr()) : (e["aria-hidden"] = "true", e.focusable = "false")), e;
}
function kO() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: ze,
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
function hh(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, n = xO(t), i = n.iconName, r = n.prefix, s = n.rest, o = SO(t), a = il("parseNodeAttributes", {}, t), l = e.styleParser ? wO(t) : [];
  return z({
    iconName: i,
    title: t.getAttribute("title"),
    titleId: t.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: ze,
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
var EO = Le.styles;
function Dg(t) {
  var e = X.autoReplaceSvg === "nest" ? hh(t, {
    styleParser: !1
  }) : hh(t);
  return ~e.extra.classes.indexOf(bg) ? un("generateLayersText", t, e) : un("generateSvgReplacementMutation", t, e);
}
var Ln = /* @__PURE__ */ new Set();
bc.map(function(t) {
  Ln.add("fa-".concat(t));
});
Object.keys(xr[Tt]).map(Ln.add.bind(Ln));
Object.keys(xr[Lt]).map(Ln.add.bind(Ln));
Ln = Dr(Ln);
function dh(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!dn)
    return Promise.resolve();
  var n = At.documentElement.classList, i = function(f) {
    return n.add("".concat(eh, "-").concat(f));
  }, r = function(f) {
    return n.remove("".concat(eh, "-").concat(f));
  }, s = X.autoFetchSvg ? Ln : bc.map(function(u) {
    return "fa-".concat(u);
  }).concat(Object.keys(EO));
  s.includes("fa") || s.push("fa");
  var o = [".".concat(bg, ":not([").concat(ni, "])")].concat(s.map(function(u) {
    return ".".concat(u, ":not([").concat(ni, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var a = [];
  try {
    a = ji(t.querySelectorAll(o));
  } catch {
  }
  if (a.length > 0)
    i("pending"), r("complete");
  else
    return Promise.resolve();
  var l = Ec.begin("onTree"), c = a.reduce(function(u, f) {
    try {
      var h = Dg(f);
      h && u.push(h);
    } catch (p) {
      yg || p.name === "MissingIcon" && console.error(p);
    }
    return u;
  }, []);
  return new Promise(function(u, f) {
    Promise.all(c).then(function(h) {
      Mg(h, function() {
        i("active"), i("complete"), r("pending"), typeof e == "function" && e(), l(), u();
      });
    }).catch(function(h) {
      l(), f(h);
    });
  });
}
function TO(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Dg(t).then(function(n) {
    n && Mg([n], e);
  });
}
function AO(t) {
  return function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = (e || {}).icon ? e : rl(e || {}), r = n.mask;
    return r && (r = (r || {}).icon ? r : rl(r || {})), t(i, z(z({}, n), {}, {
      mask: r
    }));
  };
}
var CO = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.transform, r = i === void 0 ? ze : i, s = n.symbol, o = s === void 0 ? !1 : s, a = n.mask, l = a === void 0 ? null : a, c = n.maskId, u = c === void 0 ? null : c, f = n.title, h = f === void 0 ? null : f, p = n.titleId, y = p === void 0 ? null : p, S = n.classes, k = S === void 0 ? [] : S, m = n.attributes, b = m === void 0 ? {} : m, x = n.styles, _ = x === void 0 ? {} : x;
  if (e) {
    var E = e.prefix, P = e.iconName, L = e.icon;
    return qo(z({
      type: "icon"
    }, e), function() {
      return ii("beforeDOMElementCreation", {
        iconDefinition: e,
        params: n
      }), X.autoA11y && (h ? b["aria-labelledby"] = "".concat(X.replacementClass, "-title-").concat(y || Tr()) : (b["aria-hidden"] = "true", b.focusable = "false")), kc({
        icons: {
          main: sl(L),
          mask: l ? sl(l.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: E,
        iconName: P,
        transform: z(z({}, ze), r),
        symbol: o,
        title: h,
        maskId: u,
        titleId: y,
        extra: {
          attributes: b,
          styles: _,
          classes: k
        }
      });
    });
  }
}, OO = {
  mixout: function() {
    return {
      icon: AO(CO)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.treeCallback = dh, n.nodeCallback = TO, n;
      }
    };
  },
  provides: function(e) {
    e.i2svg = function(n) {
      var i = n.node, r = i === void 0 ? At : i, s = n.callback, o = s === void 0 ? function() {
      } : s;
      return dh(r, o);
    }, e.generateSvgReplacementMutation = function(n, i) {
      var r = i.iconName, s = i.title, o = i.titleId, a = i.prefix, l = i.transform, c = i.symbol, u = i.mask, f = i.maskId, h = i.extra;
      return new Promise(function(p, y) {
        Promise.all([ol(r, a), u.iconName ? ol(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(S) {
          var k = pc(S, 2), m = k[0], b = k[1];
          p([n, kc({
            icons: {
              main: m,
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
        }).catch(y);
      });
    }, e.generateAbstractIcon = function(n) {
      var i = n.children, r = n.attributes, s = n.main, o = n.transform, a = n.styles, l = Fo(a);
      l.length > 0 && (r.style = l);
      var c;
      return _c(o) && (c = un("generateAbstractTransformGrouping", {
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
}, PO = {
  mixout: function() {
    return {
      layer: function(n) {
        var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = i.classes, s = r === void 0 ? [] : r;
        return qo({
          type: "layer"
        }, function() {
          ii("beforeDOMElementCreation", {
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
              class: ["".concat(X.cssPrefix, "-layers")].concat(Dr(s)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, NO = {
  mixout: function() {
    return {
      counter: function(n) {
        var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = i.title, s = r === void 0 ? null : r, o = i.classes, a = o === void 0 ? [] : o, l = i.attributes, c = l === void 0 ? {} : l, u = i.styles, f = u === void 0 ? {} : u;
        return qo({
          type: "counter",
          content: n
        }, function() {
          return ii("beforeDOMElementCreation", {
            content: n,
            params: i
          }), uO({
            content: n.toString(),
            title: s,
            extra: {
              attributes: c,
              styles: f,
              classes: ["".concat(X.cssPrefix, "-layers-counter")].concat(Dr(a))
            }
          });
        });
      }
    };
  }
}, IO = {
  mixout: function() {
    return {
      text: function(n) {
        var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = i.transform, s = r === void 0 ? ze : r, o = i.title, a = o === void 0 ? null : o, l = i.classes, c = l === void 0 ? [] : l, u = i.attributes, f = u === void 0 ? {} : u, h = i.styles, p = h === void 0 ? {} : h;
        return qo({
          type: "text",
          content: n
        }, function() {
          return ii("beforeDOMElementCreation", {
            content: n,
            params: i
          }), ah({
            content: n,
            transform: z(z({}, ze), s),
            title: a,
            extra: {
              attributes: f,
              styles: p,
              classes: ["".concat(X.cssPrefix, "-layers-text")].concat(Dr(c))
            }
          });
        });
      }
    };
  },
  provides: function(e) {
    e.generateLayersText = function(n, i) {
      var r = i.title, s = i.transform, o = i.extra, a = null, l = null;
      if (pg) {
        var c = parseInt(getComputedStyle(n).fontSize, 10), u = n.getBoundingClientRect();
        a = u.width / c, l = u.height / c;
      }
      return X.autoA11y && !r && (o.attributes["aria-hidden"] = "true"), Promise.resolve([n, ah({
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
}, LO = new RegExp('"', "ug"), ph = [1105920, 1112319];
function MO(t) {
  var e = t.replace(LO, ""), n = GC(e, 0), i = n >= ph[0] && n <= ph[1], r = e.length === 2 ? e[0] === e[1] : !1;
  return {
    value: el(r ? e[0] : e),
    isSecondary: i || r
  };
}
function gh(t, e) {
  var n = "".concat(xC).concat(e.replace(":", "-"));
  return new Promise(function(i, r) {
    if (t.getAttribute(n) !== null)
      return i();
    var s = ji(t.children), o = s.filter(function(L) {
      return L.getAttribute(tl) === e;
    })[0], a = Nn.getComputedStyle(t, e), l = a.getPropertyValue("font-family").match(AC), c = a.getPropertyValue("font-weight"), u = a.getPropertyValue("content");
    if (o && !l)
      return t.removeChild(o), i();
    if (l && u !== "none" && u !== "") {
      var f = a.getPropertyValue("content"), h = ~["Sharp"].indexOf(l[2]) ? Lt : Tt, p = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(l[2]) ? Sr[h][l[2].toLowerCase()] : CC[h][c], y = MO(f), S = y.value, k = y.isSecondary, m = l[0].startsWith("FontAwesome"), b = xc(p, S), x = b;
      if (m) {
        var _ = tO(S);
        _.iconName && _.prefix && (b = _.iconName, p = _.prefix);
      }
      if (b && !k && (!o || o.getAttribute(mc) !== p || o.getAttribute(yc) !== x)) {
        t.setAttribute(n, x), o && t.removeChild(o);
        var E = kO(), P = E.extra;
        P.attributes[tl] = e, ol(b, p).then(function(L) {
          var W = kc(z(z({}, E), {}, {
            icons: {
              main: L,
              mask: Sc()
            },
            prefix: p,
            iconName: x,
            extra: P,
            watchable: !0
          })), M = At.createElementNS("http://www.w3.org/2000/svg", "svg");
          e === "::before" ? t.insertBefore(M, t.firstChild) : t.appendChild(M), M.outerHTML = W.map(function(H) {
            return Fr(H);
          }).join(`
`), t.removeAttribute(n), i();
        }).catch(r);
      } else
        i();
    } else
      i();
  });
}
function RO(t) {
  return Promise.all([gh(t, "::before"), gh(t, "::after")]);
}
function DO(t) {
  return t.parentNode !== document.head && !~kC.indexOf(t.tagName.toUpperCase()) && !t.getAttribute(tl) && (!t.parentNode || t.parentNode.tagName !== "svg");
}
function mh(t) {
  if (dn)
    return new Promise(function(e, n) {
      var i = ji(t.querySelectorAll("*")).filter(DO).map(RO), r = Ec.begin("searchPseudoElements");
      Rg(), Promise.all(i).then(function() {
        r(), ll(), e();
      }).catch(function() {
        r(), ll(), n();
      });
    });
}
var $O = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.pseudoElementsCallback = mh, n;
      }
    };
  },
  provides: function(e) {
    e.pseudoElements2svg = function(n) {
      var i = n.node, r = i === void 0 ? At : i;
      X.searchPseudoElements && mh(r);
    };
  }
}, yh = !1, FO = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          Rg(), yh = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        fh(il("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        _O();
      },
      watch: function(n) {
        var i = n.observeMutationsRoot;
        yh ? ll() : fh(il("mutationObserverCallbacks", {
          observeMutationsRoot: i
        }));
      }
    };
  }
}, bh = function(e) {
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
}, BO = {
  mixout: function() {
    return {
      parse: {
        transform: function(n) {
          return bh(n);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(n, i) {
        var r = i.getAttribute("data-fa-transform");
        return r && (n.transform = bh(r)), n;
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
      }, p = {
        outer: a,
        inner: f,
        path: h
      };
      return {
        tag: "g",
        attributes: z({}, p.outer),
        children: [{
          tag: "g",
          attributes: z({}, p.inner),
          children: [{
            tag: i.icon.tag,
            children: i.icon.children,
            attributes: z(z({}, i.icon.attributes), p.path)
          }]
        }]
      };
    };
  }
}, ua = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function vh(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return t.attributes && (t.attributes.fill || e) && (t.attributes.fill = "black"), t;
}
function UO(t) {
  return t.tag === "g" ? t.children : [t];
}
var qO = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, i) {
        var r = i.getAttribute("data-fa-mask"), s = r ? Uo(r.split(" ").map(function(o) {
          return o.trim();
        })) : Sc();
        return s.prefix || (s.prefix = In()), n.mask = s, n.maskId = i.getAttribute("data-fa-mask-id"), n;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractMask = function(n) {
      var i = n.children, r = n.attributes, s = n.main, o = n.mask, a = n.maskId, l = n.transform, c = s.width, u = s.icon, f = o.width, h = o.icon, p = BC({
        transform: l,
        containerWidth: f,
        iconWidth: c
      }), y = {
        tag: "rect",
        attributes: z(z({}, ua), {}, {
          fill: "white"
        })
      }, S = u.children ? {
        children: u.children.map(vh)
      } : {}, k = {
        tag: "g",
        attributes: z({}, p.inner),
        children: [vh(z({
          tag: u.tag,
          attributes: z(z({}, u.attributes), p.path)
        }, S))]
      }, m = {
        tag: "g",
        attributes: z({}, p.outer),
        children: [k]
      }, b = "mask-".concat(a || Tr()), x = "clip-".concat(a || Tr()), _ = {
        tag: "mask",
        attributes: z(z({}, ua), {}, {
          id: b,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [y, m]
      }, E = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: x
          },
          children: UO(h)
        }, _]
      };
      return i.push(E, {
        tag: "rect",
        attributes: z({
          fill: "currentColor",
          "clip-path": "url(#".concat(x, ")"),
          mask: "url(#".concat(b, ")")
        }, ua)
      }), {
        children: i,
        attributes: r
      };
    };
  }
}, HO = {
  provides: function(e) {
    var n = !1;
    Nn.matchMedia && (n = Nn.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      var i = [], r = {
        fill: "currentColor"
      }, s = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      i.push({
        tag: "path",
        attributes: z(z({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var o = z(z({}, s), {}, {
        attributeName: "opacity"
      }), a = {
        tag: "circle",
        attributes: z(z({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return n || a.children.push({
        tag: "animate",
        attributes: z(z({}, s), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: z(z({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), i.push(a), i.push({
        tag: "path",
        attributes: z(z({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: n ? [] : [{
          tag: "animate",
          attributes: z(z({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), n || i.push({
        tag: "path",
        attributes: z(z({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: z(z({}, o), {}, {
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
}, WO = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, i) {
        var r = i.getAttribute("data-fa-symbol"), s = r === null ? !1 : r === "" ? !0 : r;
        return n.symbol = s, n;
      }
    };
  }
}, VO = [HC, OO, PO, NO, IO, $O, FO, BO, qO, HO, WO];
iO(VO, {
  mixoutsTo: be
});
be.noAuto;
be.config;
var jO = be.library;
be.dom;
var cl = be.parse;
be.findIconDefinition;
be.toHtml;
var zO = be.icon;
be.layer;
be.text;
be.counter;
function _h(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    e && (i = i.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function nn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? _h(Object(n), !0).forEach(function(i) {
      ae(t, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : _h(Object(n)).forEach(function(i) {
      Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return t;
}
function uo(t) {
  "@babel/helpers - typeof";
  return uo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, uo(t);
}
function ae(t, e, n) {
  return e = XO(e), e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function GO(t, e) {
  if (t == null)
    return {};
  var n = {}, i = Object.keys(t), r, s;
  for (s = 0; s < i.length; s++)
    r = i[s], !(e.indexOf(r) >= 0) && (n[r] = t[r]);
  return n;
}
function YO(t, e) {
  if (t == null)
    return {};
  var n = GO(t, e), i, r;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (r = 0; r < s.length; r++)
      i = s[r], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(t, i) && (n[i] = t[i]);
  }
  return n;
}
function KO(t, e) {
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
function XO(t) {
  var e = KO(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
var JO = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, $g = { exports: {} };
(function(t) {
  (function(e) {
    var n = function(m, b, x) {
      if (!c(b) || f(b) || h(b) || p(b) || l(b))
        return b;
      var _, E = 0, P = 0;
      if (u(b))
        for (_ = [], P = b.length; E < P; E++)
          _.push(n(m, b[E], x));
      else {
        _ = {};
        for (var L in b)
          Object.prototype.hasOwnProperty.call(b, L) && (_[m(L, x)] = n(m, b[L], x));
      }
      return _;
    }, i = function(m, b) {
      b = b || {};
      var x = b.separator || "_", _ = b.split || /(?=[A-Z])/;
      return m.split(_).join(x);
    }, r = function(m) {
      return y(m) ? m : (m = m.replace(/[\-_\s]+(.)?/g, function(b, x) {
        return x ? x.toUpperCase() : "";
      }), m.substr(0, 1).toLowerCase() + m.substr(1));
    }, s = function(m) {
      var b = r(m);
      return b.substr(0, 1).toUpperCase() + b.substr(1);
    }, o = function(m, b) {
      return i(m, b).toLowerCase();
    }, a = Object.prototype.toString, l = function(m) {
      return typeof m == "function";
    }, c = function(m) {
      return m === Object(m);
    }, u = function(m) {
      return a.call(m) == "[object Array]";
    }, f = function(m) {
      return a.call(m) == "[object Date]";
    }, h = function(m) {
      return a.call(m) == "[object RegExp]";
    }, p = function(m) {
      return a.call(m) == "[object Boolean]";
    }, y = function(m) {
      return m = m - 0, m === m;
    }, S = function(m, b) {
      var x = b && "process" in b ? b.process : b;
      return typeof x != "function" ? m : function(_, E) {
        return x(_, m, E);
      };
    }, k = {
      camelize: r,
      decamelize: o,
      pascalize: s,
      depascalize: o,
      camelizeKeys: function(m, b) {
        return n(S(r, b), m);
      },
      decamelizeKeys: function(m, b) {
        return n(S(o, b), m, b);
      },
      pascalizeKeys: function(m, b) {
        return n(S(s, b), m);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    t.exports ? t.exports = k : e.humps = k;
  })(JO);
})($g);
var QO = $g.exports, ZO = ["class", "style"];
function tP(t) {
  return t.split(";").map(function(e) {
    return e.trim();
  }).filter(function(e) {
    return e;
  }).reduce(function(e, n) {
    var i = n.indexOf(":"), r = QO.camelize(n.slice(0, i)), s = n.slice(i + 1).trim();
    return e[r] = s, e;
  }, {});
}
function eP(t) {
  return t.split(/\s+/).reduce(function(e, n) {
    return e[n] = !0, e;
  }, {});
}
function Fg(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var i = (t.children || []).map(function(l) {
    return Fg(l);
  }), r = Object.keys(t.attributes || {}).reduce(function(l, c) {
    var u = t.attributes[c];
    switch (c) {
      case "class":
        l.class = eP(u);
        break;
      case "style":
        l.style = tP(u);
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
  var s = n.style, o = s === void 0 ? {} : s, a = YO(n, ZO);
  return Ml(t.tag, nn(nn(nn({}, e), {}, {
    class: r.class,
    style: nn(nn({}, r.style), o)
  }, r.attrs), a), i);
}
var Bg = !1;
try {
  Bg = !0;
} catch {
}
function nP() {
  if (!Bg && console && typeof console.error == "function") {
    var t;
    (t = console).error.apply(t, arguments);
  }
}
function fa(t, e) {
  return Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e ? ae({}, t, e) : {};
}
function iP(t) {
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
  }, ae(e, "fa-".concat(t.size), t.size !== null), ae(e, "fa-rotate-".concat(t.rotation), t.rotation !== null), ae(e, "fa-pull-".concat(t.pull), t.pull !== null), ae(e, "fa-swap-opacity", t.swapOpacity), ae(e, "fa-bounce", t.bounce), ae(e, "fa-shake", t.shake), ae(e, "fa-beat", t.beat), ae(e, "fa-fade", t.fade), ae(e, "fa-beat-fade", t.beatFade), ae(e, "fa-flash", t.flash), ae(e, "fa-spin-pulse", t.spinPulse), ae(e, "fa-spin-reverse", t.spinReverse), e);
  return Object.keys(n).map(function(i) {
    return n[i] ? i : null;
  }).filter(function(i) {
    return i;
  });
}
function wh(t) {
  if (t && uo(t) === "object" && t.prefix && t.iconName && t.icon)
    return t;
  if (cl.icon)
    return cl.icon(t);
  if (t === null)
    return null;
  if (uo(t) === "object" && t.prefix && t.iconName)
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
var rP = /* @__PURE__ */ oi({
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
    var i = n.attrs, r = xe(function() {
      return wh(e.icon);
    }), s = xe(function() {
      return fa("classes", iP(e));
    }), o = xe(function() {
      return fa("transform", typeof e.transform == "string" ? cl.transform(e.transform) : e.transform);
    }), a = xe(function() {
      return fa("mask", wh(e.mask));
    }), l = xe(function() {
      return zO(r.value, nn(nn(nn(nn({}, s.value), o.value), a.value), {}, {
        symbol: e.symbol,
        title: e.title,
        titleId: e.titleId,
        maskId: e.maskId
      }));
    });
    on(l, function(u) {
      if (!u)
        return nP("Could not find one or more icon(s)", r.value, a.value);
    }, {
      immediate: !0
    });
    var c = xe(function() {
      return l.value ? Fg(l.value.abstract[0], {}, i) : null;
    });
    return function() {
      return c.value;
    };
  }
}), sP = {
  prefix: "fasr",
  iconName: "arrows-left-right",
  icon: [512, 512, ["arrows-h"], "f07e", "M493.8 273l17-17-17-17-96-96-17-17L346.9 160l17 17 55 55L93.1 232l55-55 17-17-33.9-33.9-17 17-96 96-17 17 17 17 96 96 17 17L165.1 352l-17-17-55-55 325.7 0-55 55-17 17 33.9 33.9 17-17 96-96z"]
}, oP = {
  prefix: "fasr",
  iconName: "plus-large",
  icon: [512, 512, [], "e59e", "M488 232l24 0 0 48-24 0-208 0V488l0 24H232l0-24 0-208L24 280 0 280V232l24 0 208 0 0-208 0-24 48 0V24l0 208 208 0z"]
}, aP = {
  prefix: "fasr",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M136 32h24V80H136 48v88 24H0V168 56 32H24 136zM0 344V320H48v24 88h88 24v48H136 24 0V456 344zM424 32h24V56 168v24H400V168 80H312 288V32h24H424zM400 344V320h48v24V456v24H424 312 288V432h24 88V344z"]
}, lP = {
  prefix: "fasr",
  iconName: "arrows-up-down",
  icon: [320, 512, ["arrows-v"], "f07d", "M177 18.2l-17-17-17 17-96 96-17 17L64 165.1l17-17 55-55V418.9l-55-55-17-17L30.1 380.8l17 17 96 96 17 17 17-17 96-96 17-17L256 346.9l-17 17-55 55V93.1l55 55 17 17 33.9-33.9-17-17-96-96z"]
}, cP = {
  prefix: "fass",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z"]
}, uP = {
  prefix: "fass",
  iconName: "calculator",
  icon: [384, 512, [128425], "f1ec", "M384 0H0V512H384V0zM320 64v96H64V64H320zM64 192h64v64H64V192zm64 96v64H64V288h64zM64 384H224v64H64V384zM224 192v64H160V192h64zm-64 96h64v64H160V288zm160-96v64H256V192h64zm-64 96h64v64H256V288zm64 96v64H256V384h64z"]
}, fP = {
  prefix: "fass",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M326.6 166.6L349.3 144 304 98.7l-22.6 22.6L192 210.7l-89.4-89.4L80 98.7 34.7 144l22.6 22.6L146.7 256 57.4 345.4 34.7 368 80 413.3l22.6-22.6L192 301.3l89.4 89.4L304 413.3 349.3 368l-22.6-22.6L237.3 256l89.4-89.4z"]
}, hP = {
  prefix: "fass",
  iconName: "hammer",
  icon: [576, 512, [128296], "f6e3", "M225.6 18.2L176 48l96 48v48L384 256l24-24 24 24-24 24 48 48L576 208l-48-48-24 24-24-24 24-24L405.5 37.5C381.5 13.5 348.9 0 315 0H291.5c-23.2 0-46 6.3-65.9 18.2zM0 416l96 96L330.7 248 264 181.3 0 416z"]
};
jO.add(
  fP,
  aP,
  sP,
  lP,
  hP,
  cP,
  oP,
  uP
);
const dP = t1({
  locale: "en_US",
  fallbackLocale: "en_US",
  messages: d1
}), xh = document.querySelector("#smartcut-app"), pP = xh ? xh.getAttribute("data-type") : "", Ac = ub(hC, { type: pP });
Ac.use(dP);
Ac.component("font-awesome-icon", rP);
Ac.mount("#smartcut-app");
export {
  xs as A,
  bd as B,
  sC as C,
  uu as D,
  mP as E,
  $t as F,
  To as G,
  pw as H,
  L1 as I,
  I1 as J,
  Yf as K,
  ci as _,
  $ as a,
  wP as b,
  Si as c,
  ct as d,
  xP as e,
  oo as f,
  bP as g,
  vP as h,
  CT as i,
  _P as j,
  et as k,
  st as l,
  Sl as m,
  gt as n,
  Q as o,
  pt as p,
  an as q,
  bn as r,
  OT as s,
  yt as t,
  vn as u,
  A as v,
  tn as w,
  Us as x,
  zt as y,
  ib as z
};

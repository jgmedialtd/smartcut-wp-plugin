var Wg = Object.defineProperty;
var Vg = (t, e, n) => e in t ? Wg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var m = (t, e, n) => (Vg(t, typeof e != "symbol" ? e + "" : e, n), n);
/**
* @vue/shared v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ul(t, e) {
  const n = new Set(t.split(","));
  return (i) => n.has(i);
}
const Et = {}, vi = [], Se = () => {
}, jg = () => !1, ho = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), fl = (t) => t.startsWith("onUpdate:"), jt = Object.assign, hl = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, zg = Object.prototype.hasOwnProperty, dt = (t, e) => zg.call(t, e), nt = Array.isArray, _i = (t) => Ar(t) === "[object Map]", Di = (t) => Ar(t) === "[object Set]", Cc = (t) => Ar(t) === "[object Date]", ot = (t) => typeof t == "function", Ut = (t) => typeof t == "string", an = (t) => typeof t == "symbol", St = (t) => t !== null && typeof t == "object", vh = (t) => (St(t) || ot(t)) && ot(t.then) && ot(t.catch), _h = Object.prototype.toString, Ar = (t) => _h.call(t), Gg = (t) => Ar(t).slice(8, -1), wh = (t) => Ar(t) === "[object Object]", dl = (t) => Ut(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, er = /* @__PURE__ */ ul(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), po = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, Yg = /-(\w)/g, Ye = po((t) => t.replace(Yg, (e, n) => n ? n.toUpperCase() : "")), Kg = /\B([A-Z])/g, Fi = po(
  (t) => t.replace(Kg, "-$1").toLowerCase()
), go = po((t) => t.charAt(0).toUpperCase() + t.slice(1)), Wo = po((t) => t ? `on${go(t)}` : ""), An = (t, e) => !Object.is(t, e), ms = (t, e) => {
  for (let n = 0; n < t.length; n++)
    t[n](e);
}, xh = (t, e, n) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Ms = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let Oc;
const Sh = () => Oc || (Oc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ft(t) {
  if (nt(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const i = t[n], r = Ut(i) ? Zg(i) : Ft(i);
      if (r)
        for (const s in r)
          e[s] = r[s];
    }
    return e;
  } else if (Ut(t) || St(t))
    return t;
}
const Xg = /;(?![^(]*\))/g, Jg = /:([^]+)/, Qg = /\/\*[^]*?\*\//g;
function Zg(t) {
  const e = {};
  return t.replace(Qg, "").split(Xg).forEach((n) => {
    if (n) {
      const i = n.split(Jg);
      i.length > 1 && (e[i[0].trim()] = i[1].trim());
    }
  }), e;
}
function ln(t) {
  let e = "";
  if (Ut(t))
    e = t;
  else if (nt(t))
    for (let n = 0; n < t.length; n++) {
      const i = ln(t[n]);
      i && (e += i + " ");
    }
  else if (St(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const tm = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", em = /* @__PURE__ */ ul(tm);
function kh(t) {
  return !!t || t === "";
}
function nm(t, e) {
  if (t.length !== e.length)
    return !1;
  let n = !0;
  for (let i = 0; n && i < t.length; i++)
    n = ti(t[i], e[i]);
  return n;
}
function ti(t, e) {
  if (t === e)
    return !0;
  let n = Cc(t), i = Cc(e);
  if (n || i)
    return n && i ? t.getTime() === e.getTime() : !1;
  if (n = an(t), i = an(e), n || i)
    return t === e;
  if (n = nt(t), i = nt(e), n || i)
    return n && i ? nm(t, e) : !1;
  if (n = St(t), i = St(e), n || i) {
    if (!n || !i)
      return !1;
    const r = Object.keys(t).length, s = Object.keys(e).length;
    if (r !== s)
      return !1;
    for (const o in t) {
      const a = t.hasOwnProperty(o), l = e.hasOwnProperty(o);
      if (a && !l || !a && l || !ti(t[o], e[o]))
        return !1;
    }
  }
  return String(t) === String(e);
}
function pl(t, e) {
  return t.findIndex((n) => ti(n, e));
}
const mt = (t) => Ut(t) ? t : t == null ? "" : nt(t) || St(t) && (t.toString === _h || !ot(t.toString)) ? JSON.stringify(t, Eh, 2) : String(t), Eh = (t, e) => e && e.__v_isRef ? Eh(t, e.value) : _i(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (n, [i, r], s) => (n[Vo(i, s) + " =>"] = r, n),
    {}
  )
} : Di(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((n) => Vo(n))
} : an(e) ? Vo(e) : St(e) && !nt(e) && !wh(e) ? String(e) : e, Vo = (t, e = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    an(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t
  );
};
/**
* @vue/reactivity v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let me;
class Th {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this.effects = [], this.cleanups = [], this.parent = me, !e && me && (this.index = (me.scopes || (me.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(e) {
    if (this._active) {
      const n = me;
      try {
        return me = this, e();
      } finally {
        me = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    me = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    me = this.parent;
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
function im(t) {
  return new Th(t);
}
function rm(t, e = me) {
  e && e.active && e.effects.push(t);
}
function Ah() {
  return me;
}
function sm(t) {
  me && me.cleanups.push(t);
}
let Jn;
class gl {
  constructor(e, n, i, r) {
    this.fn = e, this.trigger = n, this.scheduler = i, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, rm(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Mn();
      for (let e = 0; e < this._depsLength; e++) {
        const n = this.deps[e];
        if (n.computed && (om(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Rn();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(e) {
    this._dirtyLevel = e ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let e = En, n = Jn;
    try {
      return En = !0, Jn = this, this._runnings++, Pc(this), this.fn();
    } finally {
      Nc(this), this._runnings--, Jn = n, En = e;
    }
  }
  stop() {
    var e;
    this.active && (Pc(this), Nc(this), (e = this.onStop) == null || e.call(this), this.active = !1);
  }
}
function om(t) {
  return t.value;
}
function Pc(t) {
  t._trackId++, t._depsLength = 0;
}
function Nc(t) {
  if (t.deps.length > t._depsLength) {
    for (let e = t._depsLength; e < t.deps.length; e++)
      Ch(t.deps[e], t);
    t.deps.length = t._depsLength;
  }
}
function Ch(t, e) {
  const n = t.get(e);
  n !== void 0 && e._trackId !== n && (t.delete(e), t.size === 0 && t.cleanup());
}
let En = !0, da = 0;
const Oh = [];
function Mn() {
  Oh.push(En), En = !1;
}
function Rn() {
  const t = Oh.pop();
  En = t === void 0 ? !0 : t;
}
function ml() {
  da++;
}
function yl() {
  for (da--; !da && pa.length; )
    pa.shift()();
}
function Ph(t, e, n) {
  if (e.get(t) !== t._trackId) {
    e.set(t, t._trackId);
    const i = t.deps[t._depsLength];
    i !== e ? (i && Ch(i, t), t.deps[t._depsLength++] = e) : t._depsLength++;
  }
}
const pa = [];
function Nh(t, e, n) {
  ml();
  for (const i of t.keys()) {
    let r;
    i._dirtyLevel < e && (r ?? (r = t.get(i) === i._trackId)) && (i._shouldSchedule || (i._shouldSchedule = i._dirtyLevel === 0), i._dirtyLevel = e), i._shouldSchedule && (r ?? (r = t.get(i) === i._trackId)) && (i.trigger(), (!i._runnings || i.allowRecurse) && i._dirtyLevel !== 2 && (i._shouldSchedule = !1, i.scheduler && pa.push(i.scheduler)));
  }
  yl();
}
const Ih = (t, e) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = t, n.computed = e, n;
}, ga = /* @__PURE__ */ new WeakMap(), Qn = Symbol(""), ma = Symbol("");
function ce(t, e, n) {
  if (En && Jn) {
    let i = ga.get(t);
    i || ga.set(t, i = /* @__PURE__ */ new Map());
    let r = i.get(n);
    r || i.set(n, r = Ih(() => i.delete(n))), Ph(
      Jn,
      r
    );
  }
}
function sn(t, e, n, i, r, s) {
  const o = ga.get(t);
  if (!o)
    return;
  let a = [];
  if (e === "clear")
    a = [...o.values()];
  else if (n === "length" && nt(t)) {
    const l = Number(i);
    o.forEach((c, u) => {
      (u === "length" || !an(u) && u >= l) && a.push(c);
    });
  } else
    switch (n !== void 0 && a.push(o.get(n)), e) {
      case "add":
        nt(t) ? dl(n) && a.push(o.get("length")) : (a.push(o.get(Qn)), _i(t) && a.push(o.get(ma)));
        break;
      case "delete":
        nt(t) || (a.push(o.get(Qn)), _i(t) && a.push(o.get(ma)));
        break;
      case "set":
        _i(t) && a.push(o.get(Qn));
        break;
    }
  ml();
  for (const l of a)
    l && Nh(
      l,
      4
    );
  yl();
}
const am = /* @__PURE__ */ ul("__proto__,__v_isRef,__isVue"), Lh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(an)
), Ic = /* @__PURE__ */ lm();
function lm() {
  const t = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    t[e] = function(...n) {
      const i = bt(this);
      for (let s = 0, o = this.length; s < o; s++)
        ce(i, "get", s + "");
      const r = i[e](...n);
      return r === -1 || r === !1 ? i[e](...n.map(bt)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    t[e] = function(...n) {
      Mn(), ml();
      const i = bt(this)[e].apply(this, n);
      return yl(), Rn(), i;
    };
  }), t;
}
function cm(t) {
  an(t) || (t = String(t));
  const e = bt(this);
  return ce(e, "has", t), e.hasOwnProperty(t);
}
class Mh {
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
      return i === (r ? s ? xm : $h : s ? Fh : Dh).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(i) ? e : void 0;
    const o = nt(e);
    if (!r) {
      if (o && dt(Ic, n))
        return Reflect.get(Ic, n, i);
      if (n === "hasOwnProperty")
        return cm;
    }
    const a = Reflect.get(e, n, i);
    return (an(n) ? Lh.has(n) : am(n)) || (r || ce(e, "get", n), s) ? a : ie(a) ? o && dl(n) ? a : a.value : St(a) ? r ? wl(a) : _l(a) : a;
  }
}
class Rh extends Mh {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, i, r) {
    let s = e[n];
    if (!this._isShallow) {
      const l = ur(s);
      if (!Rs(i) && !ur(i) && (s = bt(s), i = bt(i)), !nt(e) && ie(s) && !ie(i))
        return l ? !1 : (s.value = i, !0);
    }
    const o = nt(e) && dl(n) ? Number(n) < e.length : dt(e, n), a = Reflect.set(e, n, i, r);
    return e === bt(r) && (o ? An(i, s) && sn(e, "set", n, i) : sn(e, "add", n, i)), a;
  }
  deleteProperty(e, n) {
    const i = dt(e, n);
    e[n];
    const r = Reflect.deleteProperty(e, n);
    return r && i && sn(e, "delete", n, void 0), r;
  }
  has(e, n) {
    const i = Reflect.has(e, n);
    return (!an(n) || !Lh.has(n)) && ce(e, "has", n), i;
  }
  ownKeys(e) {
    return ce(
      e,
      "iterate",
      nt(e) ? "length" : Qn
    ), Reflect.ownKeys(e);
  }
}
class um extends Mh {
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
const fm = /* @__PURE__ */ new Rh(), hm = /* @__PURE__ */ new um(), dm = /* @__PURE__ */ new Rh(
  !0
);
const bl = (t) => t, mo = (t) => Reflect.getPrototypeOf(t);
function Ur(t, e, n = !1, i = !1) {
  t = t.__v_raw;
  const r = bt(t), s = bt(e);
  n || (An(e, s) && ce(r, "get", e), ce(r, "get", s));
  const { has: o } = mo(r), a = i ? bl : n ? Sl : fr;
  if (o.call(r, e))
    return a(t.get(e));
  if (o.call(r, s))
    return a(t.get(s));
  t !== r && t.get(e);
}
function qr(t, e = !1) {
  const n = this.__v_raw, i = bt(n), r = bt(t);
  return e || (An(t, r) && ce(i, "has", t), ce(i, "has", r)), t === r ? n.has(t) : n.has(t) || n.has(r);
}
function Hr(t, e = !1) {
  return t = t.__v_raw, !e && ce(bt(t), "iterate", Qn), Reflect.get(t, "size", t);
}
function Lc(t) {
  t = bt(t);
  const e = bt(this);
  return mo(e).has.call(e, t) || (e.add(t), sn(e, "add", t, t)), this;
}
function Mc(t, e) {
  e = bt(e);
  const n = bt(this), { has: i, get: r } = mo(n);
  let s = i.call(n, t);
  s || (t = bt(t), s = i.call(n, t));
  const o = r.call(n, t);
  return n.set(t, e), s ? An(e, o) && sn(n, "set", t, e) : sn(n, "add", t, e), this;
}
function Rc(t) {
  const e = bt(this), { has: n, get: i } = mo(e);
  let r = n.call(e, t);
  r || (t = bt(t), r = n.call(e, t)), i && i.call(e, t);
  const s = e.delete(t);
  return r && sn(e, "delete", t, void 0), s;
}
function Dc() {
  const t = bt(this), e = t.size !== 0, n = t.clear();
  return e && sn(t, "clear", void 0, void 0), n;
}
function Wr(t, e) {
  return function(i, r) {
    const s = this, o = s.__v_raw, a = bt(o), l = e ? bl : t ? Sl : fr;
    return !t && ce(a, "iterate", Qn), o.forEach((c, u) => i.call(r, l(c), l(u), s));
  };
}
function Vr(t, e, n) {
  return function(...i) {
    const r = this.__v_raw, s = bt(r), o = _i(s), a = t === "entries" || t === Symbol.iterator && o, l = t === "keys" && o, c = r[t](...i), u = n ? bl : e ? Sl : fr;
    return !e && ce(
      s,
      "iterate",
      l ? ma : Qn
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
function gn(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function pm() {
  const t = {
    get(s) {
      return Ur(this, s);
    },
    get size() {
      return Hr(this);
    },
    has: qr,
    add: Lc,
    set: Mc,
    delete: Rc,
    clear: Dc,
    forEach: Wr(!1, !1)
  }, e = {
    get(s) {
      return Ur(this, s, !1, !0);
    },
    get size() {
      return Hr(this);
    },
    has: qr,
    add: Lc,
    set: Mc,
    delete: Rc,
    clear: Dc,
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
    add: gn("add"),
    set: gn("set"),
    delete: gn("delete"),
    clear: gn("clear"),
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
    add: gn("add"),
    set: gn("set"),
    delete: gn("delete"),
    clear: gn("clear"),
    forEach: Wr(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    t[s] = Vr(s, !1, !1), n[s] = Vr(s, !0, !1), e[s] = Vr(s, !1, !0), i[s] = Vr(
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
  gm,
  mm,
  ym,
  bm
] = /* @__PURE__ */ pm();
function vl(t, e) {
  const n = e ? t ? bm : ym : t ? mm : gm;
  return (i, r, s) => r === "__v_isReactive" ? !t : r === "__v_isReadonly" ? t : r === "__v_raw" ? i : Reflect.get(
    dt(n, r) && r in i ? n : i,
    r,
    s
  );
}
const vm = {
  get: /* @__PURE__ */ vl(!1, !1)
}, _m = {
  get: /* @__PURE__ */ vl(!1, !0)
}, wm = {
  get: /* @__PURE__ */ vl(!0, !1)
};
const Dh = /* @__PURE__ */ new WeakMap(), Fh = /* @__PURE__ */ new WeakMap(), $h = /* @__PURE__ */ new WeakMap(), xm = /* @__PURE__ */ new WeakMap();
function Sm(t) {
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
function km(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Sm(Gg(t));
}
function _l(t) {
  return ur(t) ? t : xl(
    t,
    !1,
    fm,
    vm,
    Dh
  );
}
function Em(t) {
  return xl(
    t,
    !1,
    dm,
    _m,
    Fh
  );
}
function wl(t) {
  return xl(
    t,
    !0,
    hm,
    wm,
    $h
  );
}
function xl(t, e, n, i, r) {
  if (!St(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const s = r.get(t);
  if (s)
    return s;
  const o = km(t);
  if (o === 0)
    return t;
  const a = new Proxy(
    t,
    o === 2 ? i : n
  );
  return r.set(t, a), a;
}
function nr(t) {
  return ur(t) ? nr(t.__v_raw) : !!(t && t.__v_isReactive);
}
function ur(t) {
  return !!(t && t.__v_isReadonly);
}
function Rs(t) {
  return !!(t && t.__v_isShallow);
}
function Bh(t) {
  return t ? !!t.__v_raw : !1;
}
function bt(t) {
  const e = t && t.__v_raw;
  return e ? bt(e) : t;
}
function Uh(t) {
  return Object.isExtensible(t) && xh(t, "__v_skip", !0), t;
}
const fr = (t) => St(t) ? _l(t) : t, Sl = (t) => St(t) ? wl(t) : t;
class qh {
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
    const e = bt(this);
    return (!e._cacheable || e.effect.dirty) && An(e._value, e._value = e.effect.run()) && ys(e, 4), Hh(e), e.effect._dirtyLevel >= 2 && ys(e, 2), e._value;
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
function Tm(t, e, n = !1) {
  let i, r;
  const s = ot(t);
  return s ? (i = t, r = Se) : (i = t.get, r = t.set), new qh(i, r, s || !r, n);
}
function Hh(t) {
  var e;
  En && Jn && (t = bt(t), Ph(
    Jn,
    (e = t.dep) != null ? e : t.dep = Ih(
      () => t.dep = void 0,
      t instanceof qh ? t : void 0
    )
  ));
}
function ys(t, e = 4, n) {
  t = bt(t);
  const i = t.dep;
  i && Nh(
    i,
    e
  );
}
function ie(t) {
  return !!(t && t.__v_isRef === !0);
}
function wi(t) {
  return Wh(t, !1);
}
function gi(t) {
  return Wh(t, !0);
}
function Wh(t, e) {
  return ie(t) ? t : new Am(t, e);
}
class Am {
  constructor(e, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? e : bt(e), this._value = n ? e : fr(e);
  }
  get value() {
    return Hh(this), this._value;
  }
  set value(e) {
    const n = this.__v_isShallow || Rs(e) || ur(e);
    e = n ? e : bt(e), An(e, this._rawValue) && (this._rawValue = e, this._value = n ? e : fr(e), ys(this, 4));
  }
}
function Vh(t) {
  return ie(t) ? t.value : t;
}
const Cm = {
  get: (t, e, n) => Vh(Reflect.get(t, e, n)),
  set: (t, e, n, i) => {
    const r = t[e];
    return ie(r) && !ie(n) ? (r.value = n, !0) : Reflect.set(t, e, n, i);
  }
};
function jh(t) {
  return nr(t) ? t : new Proxy(t, Cm);
}
/**
* @vue/runtime-core v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Tn(t, e, n, i) {
  try {
    return i ? t(...i) : t();
  } catch (r) {
    Cr(r, e, n);
  }
}
function Le(t, e, n, i) {
  if (ot(t)) {
    const r = Tn(t, e, n, i);
    return r && vh(r) && r.catch((s) => {
      Cr(s, e, n);
    }), r;
  }
  if (nt(t)) {
    const r = [];
    for (let s = 0; s < t.length; s++)
      r.push(Le(t[s], e, n, i));
    return r;
  }
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
      Mn(), Tn(
        l,
        null,
        10,
        [t, o, a]
      ), Rn();
      return;
    }
  }
  Om(t, n, r, i);
}
function Om(t, e, n, i = !0) {
  console.error(t);
}
let hr = !1, ya = !1;
const Xt = [];
let He = 0;
const xi = [];
let wn = null, zn = 0;
const zh = /* @__PURE__ */ Promise.resolve();
let kl = null;
function yo(t) {
  const e = kl || zh;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Pm(t) {
  let e = He + 1, n = Xt.length;
  for (; e < n; ) {
    const i = e + n >>> 1, r = Xt[i], s = dr(r);
    s < t || s === t && r.pre ? e = i + 1 : n = i;
  }
  return e;
}
function bo(t) {
  (!Xt.length || !Xt.includes(
    t,
    hr && t.allowRecurse ? He + 1 : He
  )) && (t.id == null ? Xt.push(t) : Xt.splice(Pm(t.id), 0, t), Gh());
}
function Gh() {
  !hr && !ya && (ya = !0, kl = zh.then(Kh));
}
function Nm(t) {
  const e = Xt.indexOf(t);
  e > He && Xt.splice(e, 1);
}
function Im(t) {
  nt(t) ? xi.push(...t) : (!wn || !wn.includes(
    t,
    t.allowRecurse ? zn + 1 : zn
  )) && xi.push(t), Gh();
}
function Fc(t, e, n = hr ? He + 1 : 0) {
  for (; n < Xt.length; n++) {
    const i = Xt[n];
    if (i && i.pre) {
      if (t && i.id !== t.uid)
        continue;
      Xt.splice(n, 1), n--, i();
    }
  }
}
function Yh(t) {
  if (xi.length) {
    const e = [...new Set(xi)].sort(
      (n, i) => dr(n) - dr(i)
    );
    if (xi.length = 0, wn) {
      wn.push(...e);
      return;
    }
    for (wn = e, zn = 0; zn < wn.length; zn++)
      wn[zn]();
    wn = null, zn = 0;
  }
}
const dr = (t) => t.id == null ? 1 / 0 : t.id, Lm = (t, e) => {
  const n = dr(t) - dr(e);
  if (n === 0) {
    if (t.pre && !e.pre)
      return -1;
    if (e.pre && !t.pre)
      return 1;
  }
  return n;
};
function Kh(t) {
  ya = !1, hr = !0, Xt.sort(Lm);
  try {
    for (He = 0; He < Xt.length; He++) {
      const e = Xt[He];
      e && e.active !== !1 && Tn(e, null, 14);
    }
  } finally {
    He = 0, Xt.length = 0, Yh(), hr = !1, kl = null, (Xt.length || xi.length) && Kh();
  }
}
function Mm(t, e, ...n) {
  if (t.isUnmounted)
    return;
  const i = t.vnode.props || Et;
  let r = n;
  const s = e.startsWith("update:"), o = s && e.slice(7);
  if (o && o in i) {
    const u = `${o === "modelValue" ? "model" : o}Modifiers`, { number: f, trim: h } = i[u] || Et;
    h && (r = n.map((d) => Ut(d) ? d.trim() : d)), f && (r = n.map(Ms));
  }
  let a, l = i[a = Wo(e)] || // also try camelCase event handler (#2249)
  i[a = Wo(Ye(e))];
  !l && s && (l = i[a = Wo(Fi(e))]), l && Le(
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
    t.emitted[a] = !0, Le(
      c,
      t,
      6,
      r
    );
  }
}
function Xh(t, e, n = !1) {
  const i = e.emitsCache, r = i.get(t);
  if (r !== void 0)
    return r;
  const s = t.emits;
  let o = {}, a = !1;
  if (!ot(t)) {
    const l = (c) => {
      const u = Xh(c, e, !0);
      u && (a = !0, jt(o, u));
    };
    !n && e.mixins.length && e.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l);
  }
  return !s && !a ? (St(t) && i.set(t, null), null) : (nt(s) ? s.forEach((l) => o[l] = null) : jt(o, s), St(t) && i.set(t, o), o);
}
function vo(t, e) {
  return !t || !ho(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), dt(t, e[0].toLowerCase() + e.slice(1)) || dt(t, Fi(e)) || dt(t, e));
}
let ne = null, _o = null;
function Ds(t) {
  const e = ne;
  return ne = t, _o = t && t.type.__scopeId || null, e;
}
function Rm(t) {
  _o = t;
}
function Dm() {
  _o = null;
}
function Fm(t, e = ne, n) {
  if (!e || t._n)
    return t;
  const i = (...r) => {
    i._d && Yc(-1);
    const s = Ds(e);
    let o;
    try {
      o = t(...r);
    } finally {
      Ds(s), i._d && Yc(1);
    }
    return o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function jo(t) {
  const {
    type: e,
    vnode: n,
    proxy: i,
    withProxy: r,
    propsOptions: [s],
    slots: o,
    attrs: a,
    emit: l,
    render: c,
    renderCache: u,
    props: f,
    data: h,
    setupState: d,
    ctx: p,
    inheritAttrs: S
  } = t, A = Ds(t);
  let v, _;
  try {
    if (n.shapeFlag & 4) {
      const w = r || i, E = w;
      v = qe(
        c.call(
          E,
          w,
          u,
          f,
          d,
          h,
          p
        )
      ), _ = a;
    } else {
      const w = e;
      v = qe(
        w.length > 1 ? w(
          f,
          { attrs: a, slots: o, emit: l }
        ) : w(
          f,
          null
        )
      ), _ = e.props ? a : $m(a);
    }
  } catch (w) {
    or.length = 0, Cr(w, t, 1), v = gt(ei);
  }
  let b = v;
  if (_ && S !== !1) {
    const w = Object.keys(_), { shapeFlag: E } = b;
    w.length && E & 7 && (s && w.some(fl) && (_ = Bm(
      _,
      s
    )), b = Ti(b, _));
  }
  return n.dirs && (b = Ti(b), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && (b.transition = n.transition), v = b, Ds(A), v;
}
const $m = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || ho(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, Bm = (t, e) => {
  const n = {};
  for (const i in t)
    (!fl(i) || !(i.slice(9) in e)) && (n[i] = t[i]);
  return n;
};
function Um(t, e, n) {
  const { props: i, children: r, component: s } = t, { props: o, children: a, patchFlag: l } = e, c = s.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? $c(i, o, c) : !!o;
    if (l & 8) {
      const u = e.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const h = u[f];
        if (o[h] !== i[h] && !vo(c, h))
          return !0;
      }
    }
  } else
    return (r || a) && (!a || !a.$stable) ? !0 : i === o ? !1 : i ? o ? $c(i, o, c) : !0 : !!o;
  return !1;
}
function $c(t, e, n) {
  const i = Object.keys(e);
  if (i.length !== Object.keys(t).length)
    return !0;
  for (let r = 0; r < i.length; r++) {
    const s = i[r];
    if (e[s] !== t[s] && !vo(n, s))
      return !0;
  }
  return !1;
}
function qm({ vnode: t, parent: e }, n) {
  for (; e; ) {
    const i = e.subTree;
    if (i.suspense && i.suspense.activeBranch === t && (i.el = t.el), i === t)
      (t = e.vnode).el = n, e = e.parent;
    else
      break;
  }
}
const Jh = "components";
function vn(t, e) {
  return Zh(Jh, t, !0, e) || t;
}
const Qh = Symbol.for("v-ndc");
function Hm(t) {
  return Ut(t) ? Zh(Jh, t, !1) || t : t || Qh;
}
function Zh(t, e, n = !0, i = !1) {
  const r = ne || Wt;
  if (r) {
    const s = r.type;
    {
      const a = Dy(
        s,
        !1
      );
      if (a && (a === e || a === Ye(e) || a === go(Ye(e))))
        return s;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      Bc(r[t] || s[t], e) || // global registration
      Bc(r.appContext[t], e)
    );
    return !o && i ? s : o;
  }
}
function Bc(t, e) {
  return t && (t[e] || t[Ye(e)] || t[go(Ye(e))]);
}
const Wm = (t) => t.__isSuspense;
function Vm(t, e) {
  e && e.pendingBranch ? nt(t) ? e.effects.push(...t) : e.effects.push(t) : Im(t);
}
const jm = Symbol.for("v-scx"), zm = () => sr(jm), jr = {};
function on(t, e, n) {
  return td(t, e, n);
}
function td(t, e, {
  immediate: n,
  deep: i,
  flush: r,
  once: s,
  onTrack: o,
  onTrigger: a
} = Et) {
  if (e && s) {
    const C = e;
    e = (...N) => {
      C(...N), E();
    };
  }
  const l = Wt, c = (C) => i === !0 ? C : (
    // for deep: false, only traverse root-level properties
    Gn(C, i === !1 ? 1 : void 0)
  );
  let u, f = !1, h = !1;
  if (ie(t) ? (u = () => t.value, f = Rs(t)) : nr(t) ? (u = () => c(t), f = !0) : nt(t) ? (h = !0, f = t.some((C) => nr(C) || Rs(C)), u = () => t.map((C) => {
    if (ie(C))
      return C.value;
    if (nr(C))
      return c(C);
    if (ot(C))
      return Tn(C, l, 2);
  })) : ot(t) ? e ? u = () => Tn(t, l, 2) : u = () => (d && d(), Le(
    t,
    l,
    3,
    [p]
  )) : u = Se, e && i) {
    const C = u;
    u = () => Gn(C());
  }
  let d, p = (C) => {
    d = b.onStop = () => {
      Tn(C, l, 4), d = b.onStop = void 0;
    };
  }, S;
  if (Nr)
    if (p = Se, e ? n && Le(e, l, 3, [
      u(),
      h ? [] : void 0,
      p
    ]) : u(), r === "sync") {
      const C = zm();
      S = C.__watcherHandles || (C.__watcherHandles = []);
    } else
      return Se;
  let A = h ? new Array(t.length).fill(jr) : jr;
  const v = () => {
    if (!(!b.active || !b.dirty))
      if (e) {
        const C = b.run();
        (i || f || (h ? C.some((N, F) => An(N, A[F])) : An(C, A))) && (d && d(), Le(e, l, 3, [
          C,
          // pass undefined as the old value when it's changed for the first time
          A === jr ? void 0 : h && A[0] === jr ? [] : A,
          p
        ]), A = C);
      } else
        b.run();
  };
  v.allowRecurse = !!e;
  let _;
  r === "sync" ? _ = v : r === "post" ? _ = () => ae(v, l && l.suspense) : (v.pre = !0, l && (v.id = l.uid), _ = () => bo(v));
  const b = new gl(u, Se, _), w = Ah(), E = () => {
    b.stop(), w && hl(w.effects, b);
  };
  return e ? n ? v() : A = b.run() : r === "post" ? ae(
    b.run.bind(b),
    l && l.suspense
  ) : b.run(), S && S.push(E), E;
}
function Gm(t, e, n) {
  const i = this.proxy, r = Ut(t) ? t.includes(".") ? ed(i, t) : () => i[t] : t.bind(i, i);
  let s;
  ot(e) ? s = e : (s = e.handler, n = e);
  const o = Pr(this), a = td(r, s.bind(i), n);
  return o(), a;
}
function ed(t, e) {
  const n = e.split(".");
  return () => {
    let i = t;
    for (let r = 0; r < n.length && i; r++)
      i = i[n[r]];
    return i;
  };
}
function Gn(t, e, n = 0, i) {
  if (!St(t) || t.__v_skip)
    return t;
  if (e && e > 0) {
    if (n >= e)
      return t;
    n++;
  }
  if (i = i || /* @__PURE__ */ new Set(), i.has(t))
    return t;
  if (i.add(t), ie(t))
    Gn(t.value, e, n, i);
  else if (nt(t))
    for (let r = 0; r < t.length; r++)
      Gn(t[r], e, n, i);
  else if (Di(t) || _i(t))
    t.forEach((r) => {
      Gn(r, e, n, i);
    });
  else if (wh(t))
    for (const r in t)
      Gn(t[r], e, n, i);
  return t;
}
function tn(t, e) {
  if (ne === null)
    return t;
  const n = So(ne) || ne.proxy, i = t.dirs || (t.dirs = []);
  for (let r = 0; r < e.length; r++) {
    let [s, o, a, l = Et] = e[r];
    s && (ot(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && Gn(o), i.push({
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
function Bn(t, e, n, i) {
  const r = t.dirs, s = e && e.dirs;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    s && (a.oldValue = s[o].value);
    let l = a.dir[i];
    l && (Mn(), Le(l, n, 8, [
      t.el,
      a,
      t,
      e
    ]), Rn());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function oi(t, e) {
  return ot(t) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    jt({ name: t.name }, e, { setup: t })
  ) : t;
}
const bs = (t) => !!t.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function El(t) {
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
    let d;
    return l || (d = l = e().catch((p) => {
      if (p = p instanceof Error ? p : new Error(String(p)), a)
        return new Promise((S, A) => {
          a(p, () => S(f()), () => A(p), u + 1);
        });
      throw p;
    }).then((p) => d !== l && l ? l : (p && (p.__esModule || p[Symbol.toStringTag] === "Module") && (p = p.default), c = p, p)));
  };
  return /* @__PURE__ */ oi({
    name: "AsyncComponentWrapper",
    __asyncLoader: h,
    get __asyncResolved() {
      return c;
    },
    setup() {
      const d = Wt;
      if (c)
        return () => zo(c, d);
      const p = (_) => {
        l = null, Cr(
          _,
          d,
          13,
          !i
        );
      };
      if (o && d.suspense || Nr)
        return h().then((_) => () => zo(_, d)).catch((_) => (p(_), () => i ? gt(i, {
          error: _
        }) : null));
      const S = wi(!1), A = wi(), v = wi(!!r);
      return r && setTimeout(() => {
        v.value = !1;
      }, r), s != null && setTimeout(() => {
        if (!S.value && !A.value) {
          const _ = new Error(
            `Async component timed out after ${s}ms.`
          );
          p(_), A.value = _;
        }
      }, s), h().then(() => {
        S.value = !0, d.parent && Tl(d.parent.vnode) && (d.parent.effect.dirty = !0, bo(d.parent.update));
      }).catch((_) => {
        p(_), A.value = _;
      }), () => {
        if (S.value && c)
          return zo(c, d);
        if (A.value && i)
          return gt(i, {
            error: A.value
          });
        if (n && !v.value)
          return gt(n);
      };
    }
  });
}
function zo(t, e) {
  const { ref: n, props: i, children: r, ce: s } = e.vnode, o = gt(t, i, r);
  return o.ref = n, o.ce = s, delete e.vnode.ce, o;
}
const Tl = (t) => t.type.__isKeepAlive;
function Ym(t, e) {
  nd(t, "a", e);
}
function Km(t, e) {
  nd(t, "da", e);
}
function nd(t, e, n = Wt) {
  const i = t.__wdc || (t.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return t();
  });
  if (wo(e, i, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Tl(r.parent.vnode) && Xm(i, e, n, r), r = r.parent;
  }
}
function Xm(t, e, n, i) {
  const r = wo(
    e,
    t,
    i,
    !0
    /* prepend */
  );
  Cl(() => {
    hl(i[e], r);
  }, n);
}
function wo(t, e, n = Wt, i = !1) {
  if (n) {
    const r = n[t] || (n[t] = []), s = e.__weh || (e.__weh = (...o) => {
      if (n.isUnmounted)
        return;
      Mn();
      const a = Pr(n), l = Le(e, n, t, o);
      return a(), Rn(), l;
    });
    return i ? r.unshift(s) : r.push(s), s;
  }
}
const hn = (t) => (e, n = Wt) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Nr || t === "sp") && wo(t, (...i) => e(...i), n)
), Jm = hn("bm"), Al = hn("m"), Qm = hn("bu"), Zm = hn("u"), ty = hn("bum"), Cl = hn("um"), ey = hn("sp"), ny = hn(
  "rtg"
), iy = hn(
  "rtc"
);
function ry(t, e = Wt) {
  wo("ec", t, e);
}
function _n(t, e, n, i) {
  let r;
  const s = n;
  if (nt(t) || Ut(t)) {
    r = new Array(t.length);
    for (let o = 0, a = t.length; o < a; o++)
      r[o] = e(t[o], o, void 0, s);
  } else if (typeof t == "number") {
    r = new Array(t);
    for (let o = 0; o < t; o++)
      r[o] = e(o + 1, o, void 0, s);
  } else if (St(t))
    if (t[Symbol.iterator])
      r = Array.from(
        t,
        (o, a) => e(o, a, void 0, s)
      );
    else {
      const o = Object.keys(t);
      r = new Array(o.length);
      for (let a = 0, l = o.length; a < l; a++) {
        const c = o[a];
        r[a] = e(t[c], c, a, s);
      }
    }
  else
    r = [];
  return r;
}
const ba = (t) => t ? yd(t) ? So(t) || t.proxy : ba(t.parent) : null, ir = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ jt(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => ba(t.parent),
    $root: (t) => ba(t.root),
    $emit: (t) => t.emit,
    $options: (t) => Ol(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      t.effect.dirty = !0, bo(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = yo.bind(t.proxy)),
    $watch: (t) => Gm.bind(t)
  })
), Go = (t, e) => t !== Et && !t.__isScriptSetup && dt(t, e), sy = {
  get({ _: t }, e) {
    if (e === "__v_skip")
      return !0;
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
        if (Go(i, e))
          return o[e] = 1, i[e];
        if (r !== Et && dt(r, e))
          return o[e] = 2, r[e];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = t.propsOptions[0]) && dt(c, e)
        )
          return o[e] = 3, s[e];
        if (n !== Et && dt(n, e))
          return o[e] = 4, n[e];
        va && (o[e] = 0);
      }
    }
    const u = ir[e];
    let f, h;
    if (u)
      return e === "$attrs" && ce(t.attrs, "get", ""), u(t);
    if (
      // css module (injected by vue-loader)
      (f = a.__cssModules) && (f = f[e])
    )
      return f;
    if (n !== Et && dt(n, e))
      return o[e] = 4, n[e];
    if (
      // global properties
      h = l.config.globalProperties, dt(h, e)
    )
      return h[e];
  },
  set({ _: t }, e, n) {
    const { data: i, setupState: r, ctx: s } = t;
    return Go(r, e) ? (r[e] = n, !0) : i !== Et && dt(i, e) ? (i[e] = n, !0) : dt(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (s[e] = n, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: n, ctx: i, appContext: r, propsOptions: s }
  }, o) {
    let a;
    return !!n[o] || t !== Et && dt(t, o) || Go(e, o) || (a = s[0]) && dt(a, o) || dt(i, o) || dt(ir, o) || dt(r.config.globalProperties, o);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : dt(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
function Uc(t) {
  return nt(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
let va = !0;
function oy(t) {
  const e = Ol(t), n = t.proxy, i = t.ctx;
  va = !1, e.beforeCreate && qc(e.beforeCreate, t, "bc");
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
    updated: p,
    activated: S,
    deactivated: A,
    beforeDestroy: v,
    beforeUnmount: _,
    destroyed: b,
    unmounted: w,
    render: E,
    renderTracked: C,
    renderTriggered: N,
    errorCaptured: F,
    serverPrefetch: $,
    // public API
    expose: V,
    inheritAttrs: H,
    // assets
    components: j,
    directives: W,
    filters: rt
  } = e;
  if (c && ay(c, i, null), o)
    for (const ct in o) {
      const at = o[ct];
      ot(at) && (i[ct] = at.bind(n));
    }
  if (r) {
    const ct = r.call(n, n);
    St(ct) && (t.data = _l(ct));
  }
  if (va = !0, s)
    for (const ct in s) {
      const at = s[ct], xt = ot(at) ? at.bind(n, n) : ot(at.get) ? at.get.bind(n, n) : Se, fe = !ot(at) && ot(at.set) ? at.set.bind(n) : Se, Nt = ve({
        get: xt,
        set: fe
      });
      Object.defineProperty(i, ct, {
        enumerable: !0,
        configurable: !0,
        get: () => Nt.value,
        set: (Mt) => Nt.value = Mt
      });
    }
  if (a)
    for (const ct in a)
      id(a[ct], i, n, ct);
  if (l) {
    const ct = ot(l) ? l.call(n) : l;
    Reflect.ownKeys(ct).forEach((at) => {
      dy(at, ct[at]);
    });
  }
  u && qc(u, t, "c");
  function pt(ct, at) {
    nt(at) ? at.forEach((xt) => ct(xt.bind(n))) : at && ct(at.bind(n));
  }
  if (pt(Jm, f), pt(Al, h), pt(Qm, d), pt(Zm, p), pt(Ym, S), pt(Km, A), pt(ry, F), pt(iy, C), pt(ny, N), pt(ty, _), pt(Cl, w), pt(ey, $), nt(V))
    if (V.length) {
      const ct = t.exposed || (t.exposed = {});
      V.forEach((at) => {
        Object.defineProperty(ct, at, {
          get: () => n[at],
          set: (xt) => n[at] = xt
        });
      });
    } else
      t.exposed || (t.exposed = {});
  E && t.render === Se && (t.render = E), H != null && (t.inheritAttrs = H), j && (t.components = j), W && (t.directives = W);
}
function ay(t, e, n = Se) {
  nt(t) && (t = _a(t));
  for (const i in t) {
    const r = t[i];
    let s;
    St(r) ? "default" in r ? s = sr(
      r.from || i,
      r.default,
      !0
    ) : s = sr(r.from || i) : s = sr(r), ie(s) ? Object.defineProperty(e, i, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (o) => s.value = o
    }) : e[i] = s;
  }
}
function qc(t, e, n) {
  Le(
    nt(t) ? t.map((i) => i.bind(e.proxy)) : t.bind(e.proxy),
    e,
    n
  );
}
function id(t, e, n, i) {
  const r = i.includes(".") ? ed(n, i) : () => n[i];
  if (Ut(t)) {
    const s = e[t];
    ot(s) && on(r, s);
  } else if (ot(t))
    on(r, t.bind(n));
  else if (St(t))
    if (nt(t))
      t.forEach((s) => id(s, e, n, i));
    else {
      const s = ot(t.handler) ? t.handler.bind(n) : e[t.handler];
      ot(s) && on(r, s, t);
    }
}
function Ol(t) {
  const e = t.type, { mixins: n, extends: i } = e, {
    mixins: r,
    optionsCache: s,
    config: { optionMergeStrategies: o }
  } = t.appContext, a = s.get(e);
  let l;
  return a ? l = a : !r.length && !n && !i ? l = e : (l = {}, r.length && r.forEach(
    (c) => Fs(l, c, o, !0)
  ), Fs(l, e, o)), St(e) && s.set(e, l), l;
}
function Fs(t, e, n, i = !1) {
  const { mixins: r, extends: s } = e;
  s && Fs(t, s, n, !0), r && r.forEach(
    (o) => Fs(t, o, n, !0)
  );
  for (const o in e)
    if (!(i && o === "expose")) {
      const a = ly[o] || n && n[o];
      t[o] = a ? a(t[o], e[o]) : e[o];
    }
  return t;
}
const ly = {
  data: Hc,
  props: Wc,
  emits: Wc,
  // objects
  methods: Ji,
  computed: Ji,
  // lifecycle
  beforeCreate: Zt,
  created: Zt,
  beforeMount: Zt,
  mounted: Zt,
  beforeUpdate: Zt,
  updated: Zt,
  beforeDestroy: Zt,
  beforeUnmount: Zt,
  destroyed: Zt,
  unmounted: Zt,
  activated: Zt,
  deactivated: Zt,
  errorCaptured: Zt,
  serverPrefetch: Zt,
  // assets
  components: Ji,
  directives: Ji,
  // watch
  watch: uy,
  // provide / inject
  provide: Hc,
  inject: cy
};
function Hc(t, e) {
  return e ? t ? function() {
    return jt(
      ot(t) ? t.call(this, this) : t,
      ot(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function cy(t, e) {
  return Ji(_a(t), _a(e));
}
function _a(t) {
  if (nt(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e;
  }
  return t;
}
function Zt(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function Ji(t, e) {
  return t ? jt(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function Wc(t, e) {
  return t ? nt(t) && nt(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : jt(
    /* @__PURE__ */ Object.create(null),
    Uc(t),
    Uc(e ?? {})
  ) : e;
}
function uy(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  const n = jt(/* @__PURE__ */ Object.create(null), t);
  for (const i in e)
    n[i] = Zt(t[i], e[i]);
  return n;
}
function rd() {
  return {
    app: null,
    config: {
      isNativeTag: jg,
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
let fy = 0;
function hy(t, e) {
  return function(i, r = null) {
    ot(i) || (i = jt({}, i)), r != null && !St(r) && (r = null);
    const s = rd(), o = /* @__PURE__ */ new WeakSet();
    let a = !1;
    const l = s.app = {
      _uid: fy++,
      _component: i,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: $y,
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
function dy(t, e) {
  if (Wt) {
    let n = Wt.provides;
    const i = Wt.parent && Wt.parent.provides;
    i === n && (n = Wt.provides = Object.create(i)), n[t] = e;
  }
}
function sr(t, e, n = !1) {
  const i = Wt || ne;
  if (i || rr) {
    const r = i ? i.parent == null ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : rr._context.provides;
    if (r && t in r)
      return r[t];
    if (arguments.length > 1)
      return n && ot(e) ? e.call(i && i.proxy) : e;
  }
}
const sd = {}, od = () => Object.create(sd), ad = (t) => Object.getPrototypeOf(t) === sd;
function py(t, e, n, i = !1) {
  const r = {}, s = od();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), ld(t, e, r, s);
  for (const o in t.propsOptions[0])
    o in r || (r[o] = void 0);
  n ? t.props = i ? r : Em(r) : t.type.props ? t.props = r : t.props = s, t.attrs = s;
}
function gy(t, e, n, i) {
  const {
    props: r,
    attrs: s,
    vnode: { patchFlag: o }
  } = t, a = bt(r), [l] = t.propsOptions;
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
        if (vo(t.emitsOptions, h))
          continue;
        const d = e[h];
        if (l)
          if (dt(s, h))
            d !== s[h] && (s[h] = d, c = !0);
          else {
            const p = Ye(h);
            r[p] = wa(
              l,
              a,
              p,
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
    ld(t, e, r, s) && (c = !0);
    let u;
    for (const f in a)
      (!e || // for camelCase
      !dt(e, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Fi(f)) === f || !dt(e, u))) && (l ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[u] !== void 0) && (r[f] = wa(
        l,
        a,
        f,
        void 0,
        t,
        !0
      )) : delete r[f]);
    if (s !== a)
      for (const f in s)
        (!e || !dt(e, f)) && (delete s[f], c = !0);
  }
  c && sn(t.attrs, "set", "");
}
function ld(t, e, n, i) {
  const [r, s] = t.propsOptions;
  let o = !1, a;
  if (e)
    for (let l in e) {
      if (er(l))
        continue;
      const c = e[l];
      let u;
      r && dt(r, u = Ye(l)) ? !s || !s.includes(u) ? n[u] = c : (a || (a = {}))[u] = c : vo(t.emitsOptions, l) || (!(l in i) || c !== i[l]) && (i[l] = c, o = !0);
    }
  if (s) {
    const l = bt(n), c = a || Et;
    for (let u = 0; u < s.length; u++) {
      const f = s[u];
      n[f] = wa(
        r,
        l,
        f,
        c[f],
        t,
        !dt(c, f)
      );
    }
  }
  return o;
}
function wa(t, e, n, i, r, s) {
  const o = t[n];
  if (o != null) {
    const a = dt(o, "default");
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
function cd(t, e, n = !1) {
  const i = e.propsCache, r = i.get(t);
  if (r)
    return r;
  const s = t.props, o = {}, a = [];
  let l = !1;
  if (!ot(t)) {
    const u = (f) => {
      l = !0;
      const [h, d] = cd(f, e, !0);
      jt(o, h), d && a.push(...d);
    };
    !n && e.mixins.length && e.mixins.forEach(u), t.extends && u(t.extends), t.mixins && t.mixins.forEach(u);
  }
  if (!s && !l)
    return St(t) && i.set(t, vi), vi;
  if (nt(s))
    for (let u = 0; u < s.length; u++) {
      const f = Ye(s[u]);
      Vc(f) && (o[f] = Et);
    }
  else if (s)
    for (const u in s) {
      const f = Ye(u);
      if (Vc(f)) {
        const h = s[u], d = o[f] = nt(h) || ot(h) ? { type: h } : jt({}, h);
        if (d) {
          const p = Gc(Boolean, d.type), S = Gc(String, d.type);
          d[
            0
            /* shouldCast */
          ] = p > -1, d[
            1
            /* shouldCastTrue */
          ] = S < 0 || p < S, (p > -1 || dt(d, "default")) && a.push(f);
        }
      }
    }
  const c = [o, a];
  return St(t) && i.set(t, c), c;
}
function Vc(t) {
  return t[0] !== "$" && !er(t);
}
function jc(t) {
  return t === null ? "null" : typeof t == "function" ? t.name || "" : typeof t == "object" && t.constructor && t.constructor.name || "";
}
function zc(t, e) {
  return jc(t) === jc(e);
}
function Gc(t, e) {
  return nt(e) ? e.findIndex((n) => zc(n, t)) : ot(e) && zc(e, t) ? 0 : -1;
}
const ud = (t) => t[0] === "_" || t === "$stable", Pl = (t) => nt(t) ? t.map(qe) : [qe(t)], my = (t, e, n) => {
  if (e._n)
    return e;
  const i = Fm((...r) => Pl(e(...r)), n);
  return i._c = !1, i;
}, fd = (t, e, n) => {
  const i = t._ctx;
  for (const r in t) {
    if (ud(r))
      continue;
    const s = t[r];
    if (ot(s))
      e[r] = my(r, s, i);
    else if (s != null) {
      const o = Pl(s);
      e[r] = () => o;
    }
  }
}, hd = (t, e) => {
  const n = Pl(e);
  t.slots.default = () => n;
}, yy = (t, e) => {
  const n = t.slots = od();
  if (t.vnode.shapeFlag & 32) {
    const i = e._;
    i ? (jt(n, e), xh(n, "_", i)) : fd(e, n);
  } else
    e && hd(t, e);
}, by = (t, e, n) => {
  const { vnode: i, slots: r } = t;
  let s = !0, o = Et;
  if (i.shapeFlag & 32) {
    const a = e._;
    a ? n && a === 1 ? s = !1 : (jt(r, e), !n && a === 1 && delete r._) : (s = !e.$stable, fd(e, r)), o = e;
  } else
    e && (hd(t, e), o = { default: 1 });
  if (s)
    for (const a in r)
      !ud(a) && o[a] == null && delete r[a];
};
function xa(t, e, n, i, r = !1) {
  if (nt(t)) {
    t.forEach(
      (h, d) => xa(
        h,
        e && (nt(e) ? e[d] : e),
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
  if (c != null && c !== l && (Ut(c) ? (u[c] = null, dt(f, c) && (f[c] = null)) : ie(c) && (c.value = null)), ot(l))
    Tn(l, a, 12, [o, u]);
  else {
    const h = Ut(l), d = ie(l);
    if (h || d) {
      const p = () => {
        if (t.f) {
          const S = h ? dt(f, l) ? f[l] : u[l] : l.value;
          r ? nt(S) && hl(S, s) : nt(S) ? S.includes(s) || S.push(s) : h ? (u[l] = [s], dt(f, l) && (f[l] = u[l])) : (l.value = [s], t.k && (u[t.k] = l.value));
        } else
          h ? (u[l] = o, dt(f, l) && (f[l] = o)) : d && (l.value = o, t.k && (u[t.k] = o));
      };
      o ? (p.id = -1, ae(p, n)) : p();
    }
  }
}
const ae = Vm;
function vy(t) {
  return _y(t);
}
function _y(t, e) {
  const n = Sh();
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
    setScopeId: d = Se,
    insertStaticContent: p
  } = t, S = (x, T, L, R = null, D = null, q = null, z = void 0, g = null, y = !!T.dynamicChildren) => {
    if (x === T)
      return;
    x && !ji(x, T) && (R = Te(x), Mt(x, D, q, !0), x = null), T.patchFlag === -2 && (y = !1, T.dynamicChildren = null);
    const { type: k, ref: M, shapeFlag: G } = T;
    switch (k) {
      case Or:
        A(x, T, L, R);
        break;
      case ei:
        v(x, T, L, R);
        break;
      case vs:
        x == null && _(T, L, R, z);
        break;
      case $t:
        j(
          x,
          T,
          L,
          R,
          D,
          q,
          z,
          g,
          y
        );
        break;
      default:
        G & 1 ? E(
          x,
          T,
          L,
          R,
          D,
          q,
          z,
          g,
          y
        ) : G & 6 ? W(
          x,
          T,
          L,
          R,
          D,
          q,
          z,
          g,
          y
        ) : (G & 64 || G & 128) && k.process(
          x,
          T,
          L,
          R,
          D,
          q,
          z,
          g,
          y,
          he
        );
    }
    M != null && D && xa(M, x && x.ref, q, T || x, !T);
  }, A = (x, T, L, R) => {
    if (x == null)
      i(
        T.el = a(T.children),
        L,
        R
      );
    else {
      const D = T.el = x.el;
      T.children !== x.children && c(D, T.children);
    }
  }, v = (x, T, L, R) => {
    x == null ? i(
      T.el = l(T.children || ""),
      L,
      R
    ) : T.el = x.el;
  }, _ = (x, T, L, R) => {
    [x.el, x.anchor] = p(
      x.children,
      T,
      L,
      R,
      x.el,
      x.anchor
    );
  }, b = ({ el: x, anchor: T }, L, R) => {
    let D;
    for (; x && x !== T; )
      D = h(x), i(x, L, R), x = D;
    i(T, L, R);
  }, w = ({ el: x, anchor: T }) => {
    let L;
    for (; x && x !== T; )
      L = h(x), r(x), x = L;
    r(T);
  }, E = (x, T, L, R, D, q, z, g, y) => {
    T.type === "svg" ? z = "svg" : T.type === "math" && (z = "mathml"), x == null ? C(
      T,
      L,
      R,
      D,
      q,
      z,
      g,
      y
    ) : $(
      x,
      T,
      D,
      q,
      z,
      g,
      y
    );
  }, C = (x, T, L, R, D, q, z, g) => {
    let y, k;
    const { props: M, shapeFlag: G, transition: B, dirs: O } = x;
    if (y = x.el = o(
      x.type,
      q,
      M && M.is,
      M
    ), G & 8 ? u(y, x.children) : G & 16 && F(
      x.children,
      y,
      null,
      R,
      D,
      Yo(x, q),
      z,
      g
    ), O && Bn(x, null, R, "created"), N(y, x, x.scopeId, z, R), M) {
      for (const tt in M)
        tt !== "value" && !er(tt) && s(
          y,
          tt,
          null,
          M[tt],
          q,
          x.children,
          R,
          D,
          zt
        );
      "value" in M && s(y, "value", null, M.value, q), (k = M.onVnodeBeforeMount) && Be(k, R, x);
    }
    O && Bn(x, null, R, "beforeMount");
    const I = wy(D, B);
    I && B.beforeEnter(y), i(y, T, L), ((k = M && M.onVnodeMounted) || I || O) && ae(() => {
      k && Be(k, R, x), I && B.enter(y), O && Bn(x, null, R, "mounted");
    }, D);
  }, N = (x, T, L, R, D) => {
    if (L && d(x, L), R)
      for (let q = 0; q < R.length; q++)
        d(x, R[q]);
    if (D) {
      let q = D.subTree;
      if (T === q) {
        const z = D.vnode;
        N(
          x,
          z,
          z.scopeId,
          z.slotScopeIds,
          D.parent
        );
      }
    }
  }, F = (x, T, L, R, D, q, z, g, y = 0) => {
    for (let k = y; k < x.length; k++) {
      const M = x[k] = g ? xn(x[k]) : qe(x[k]);
      S(
        null,
        M,
        T,
        L,
        R,
        D,
        q,
        z,
        g
      );
    }
  }, $ = (x, T, L, R, D, q, z) => {
    const g = T.el = x.el;
    let { patchFlag: y, dynamicChildren: k, dirs: M } = T;
    y |= x.patchFlag & 16;
    const G = x.props || Et, B = T.props || Et;
    let O;
    if (L && Un(L, !1), (O = B.onVnodeBeforeUpdate) && Be(O, L, T, x), M && Bn(T, x, L, "beforeUpdate"), L && Un(L, !0), k ? V(
      x.dynamicChildren,
      k,
      g,
      L,
      R,
      Yo(T, D),
      q
    ) : z || at(
      x,
      T,
      g,
      null,
      L,
      R,
      Yo(T, D),
      q,
      !1
    ), y > 0) {
      if (y & 16)
        H(
          g,
          T,
          G,
          B,
          L,
          R,
          D
        );
      else if (y & 2 && G.class !== B.class && s(g, "class", null, B.class, D), y & 4 && s(g, "style", G.style, B.style, D), y & 8) {
        const I = T.dynamicProps;
        for (let tt = 0; tt < I.length; tt++) {
          const st = I[tt], vt = G[st], Yt = B[st];
          (Yt !== vt || st === "value") && s(
            g,
            st,
            vt,
            Yt,
            D,
            x.children,
            L,
            R,
            zt
          );
        }
      }
      y & 1 && x.children !== T.children && u(g, T.children);
    } else
      !z && k == null && H(
        g,
        T,
        G,
        B,
        L,
        R,
        D
      );
    ((O = B.onVnodeUpdated) || M) && ae(() => {
      O && Be(O, L, T, x), M && Bn(T, x, L, "updated");
    }, R);
  }, V = (x, T, L, R, D, q, z) => {
    for (let g = 0; g < T.length; g++) {
      const y = x[g], k = T[g], M = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (y.type === $t || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ji(y, k) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 70) ? f(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          L
        )
      );
      S(
        y,
        k,
        M,
        null,
        R,
        D,
        q,
        z,
        !0
      );
    }
  }, H = (x, T, L, R, D, q, z) => {
    if (L !== R) {
      if (L !== Et)
        for (const g in L)
          !er(g) && !(g in R) && s(
            x,
            g,
            L[g],
            null,
            z,
            T.children,
            D,
            q,
            zt
          );
      for (const g in R) {
        if (er(g))
          continue;
        const y = R[g], k = L[g];
        y !== k && g !== "value" && s(
          x,
          g,
          k,
          y,
          z,
          T.children,
          D,
          q,
          zt
        );
      }
      "value" in R && s(x, "value", L.value, R.value, z);
    }
  }, j = (x, T, L, R, D, q, z, g, y) => {
    const k = T.el = x ? x.el : a(""), M = T.anchor = x ? x.anchor : a("");
    let { patchFlag: G, dynamicChildren: B, slotScopeIds: O } = T;
    O && (g = g ? g.concat(O) : O), x == null ? (i(k, L, R), i(M, L, R), F(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      T.children || [],
      L,
      M,
      D,
      q,
      z,
      g,
      y
    )) : G > 0 && G & 64 && B && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    x.dynamicChildren ? (V(
      x.dynamicChildren,
      B,
      L,
      D,
      q,
      z,
      g
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (T.key != null || D && T === D.subTree) && dd(
      x,
      T,
      !0
      /* shallow */
    )) : at(
      x,
      T,
      L,
      M,
      D,
      q,
      z,
      g,
      y
    );
  }, W = (x, T, L, R, D, q, z, g, y) => {
    T.slotScopeIds = g, x == null ? T.shapeFlag & 512 ? D.ctx.activate(
      T,
      L,
      R,
      z,
      y
    ) : rt(
      T,
      L,
      R,
      D,
      q,
      z,
      y
    ) : Dt(x, T, y);
  }, rt = (x, T, L, R, D, q, z) => {
    const g = x.component = Ny(
      x,
      R,
      D
    );
    if (Tl(x) && (g.ctx.renderer = he), Iy(g), g.asyncDep) {
      if (D && D.registerDep(g, pt), !x.el) {
        const y = g.subTree = gt(ei);
        v(null, y, T, L);
      }
    } else
      pt(
        g,
        x,
        T,
        L,
        D,
        q,
        z
      );
  }, Dt = (x, T, L) => {
    const R = T.component = x.component;
    if (Um(x, T, L))
      if (R.asyncDep && !R.asyncResolved) {
        ct(R, T, L);
        return;
      } else
        R.next = T, Nm(R.update), R.effect.dirty = !0, R.update();
    else
      T.el = x.el, R.vnode = T;
  }, pt = (x, T, L, R, D, q, z) => {
    const g = () => {
      if (x.isMounted) {
        let { next: M, bu: G, u: B, parent: O, vnode: I } = x;
        {
          const de = pd(x);
          if (de) {
            M && (M.el = I.el, ct(x, M, z)), de.asyncDep.then(() => {
              x.isUnmounted || g();
            });
            return;
          }
        }
        let tt = M, st;
        Un(x, !1), M ? (M.el = I.el, ct(x, M, z)) : M = I, G && ms(G), (st = M.props && M.props.onVnodeBeforeUpdate) && Be(st, O, M, I), Un(x, !0);
        const vt = jo(x), Yt = x.subTree;
        x.subTree = vt, S(
          Yt,
          vt,
          // parent may have changed if it's in a teleport
          f(Yt.el),
          // anchor may have changed if it's in a fragment
          Te(Yt),
          x,
          D,
          q
        ), M.el = vt.el, tt === null && qm(x, vt.el), B && ae(B, D), (st = M.props && M.props.onVnodeUpdated) && ae(
          () => Be(st, O, M, I),
          D
        );
      } else {
        let M;
        const { el: G, props: B } = T, { bm: O, m: I, parent: tt } = x, st = bs(T);
        if (Un(x, !1), O && ms(O), !st && (M = B && B.onVnodeBeforeMount) && Be(M, tt, T), Un(x, !0), G && ui) {
          const vt = () => {
            x.subTree = jo(x), ui(
              G,
              x.subTree,
              x,
              D,
              null
            );
          };
          st ? T.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !x.isUnmounted && vt()
          ) : vt();
        } else {
          const vt = x.subTree = jo(x);
          S(
            null,
            vt,
            L,
            R,
            x,
            D,
            q
          ), T.el = vt.el;
        }
        if (I && ae(I, D), !st && (M = B && B.onVnodeMounted)) {
          const vt = T;
          ae(
            () => Be(M, tt, vt),
            D
          );
        }
        (T.shapeFlag & 256 || tt && bs(tt.vnode) && tt.vnode.shapeFlag & 256) && x.a && ae(x.a, D), x.isMounted = !0, T = L = R = null;
      }
    }, y = x.effect = new gl(
      g,
      Se,
      () => bo(k),
      x.scope
      // track it in component's effect scope
    ), k = x.update = () => {
      y.dirty && y.run();
    };
    k.id = x.uid, Un(x, !0), k();
  }, ct = (x, T, L) => {
    T.component = x;
    const R = x.vnode.props;
    x.vnode = T, x.next = null, gy(x, T.props, R, L), by(x, T.children, L), Mn(), Fc(x), Rn();
  }, at = (x, T, L, R, D, q, z, g, y = !1) => {
    const k = x && x.children, M = x ? x.shapeFlag : 0, G = T.children, { patchFlag: B, shapeFlag: O } = T;
    if (B > 0) {
      if (B & 128) {
        fe(
          k,
          G,
          L,
          R,
          D,
          q,
          z,
          g,
          y
        );
        return;
      } else if (B & 256) {
        xt(
          k,
          G,
          L,
          R,
          D,
          q,
          z,
          g,
          y
        );
        return;
      }
    }
    O & 8 ? (M & 16 && zt(k, D, q), G !== k && u(L, G)) : M & 16 ? O & 16 ? fe(
      k,
      G,
      L,
      R,
      D,
      q,
      z,
      g,
      y
    ) : zt(k, D, q, !0) : (M & 8 && u(L, ""), O & 16 && F(
      G,
      L,
      R,
      D,
      q,
      z,
      g,
      y
    ));
  }, xt = (x, T, L, R, D, q, z, g, y) => {
    x = x || vi, T = T || vi;
    const k = x.length, M = T.length, G = Math.min(k, M);
    let B;
    for (B = 0; B < G; B++) {
      const O = T[B] = y ? xn(T[B]) : qe(T[B]);
      S(
        x[B],
        O,
        L,
        null,
        D,
        q,
        z,
        g,
        y
      );
    }
    k > M ? zt(
      x,
      D,
      q,
      !0,
      !1,
      G
    ) : F(
      T,
      L,
      R,
      D,
      q,
      z,
      g,
      y,
      G
    );
  }, fe = (x, T, L, R, D, q, z, g, y) => {
    let k = 0;
    const M = T.length;
    let G = x.length - 1, B = M - 1;
    for (; k <= G && k <= B; ) {
      const O = x[k], I = T[k] = y ? xn(T[k]) : qe(T[k]);
      if (ji(O, I))
        S(
          O,
          I,
          L,
          null,
          D,
          q,
          z,
          g,
          y
        );
      else
        break;
      k++;
    }
    for (; k <= G && k <= B; ) {
      const O = x[G], I = T[B] = y ? xn(T[B]) : qe(T[B]);
      if (ji(O, I))
        S(
          O,
          I,
          L,
          null,
          D,
          q,
          z,
          g,
          y
        );
      else
        break;
      G--, B--;
    }
    if (k > G) {
      if (k <= B) {
        const O = B + 1, I = O < M ? T[O].el : R;
        for (; k <= B; )
          S(
            null,
            T[k] = y ? xn(T[k]) : qe(T[k]),
            L,
            I,
            D,
            q,
            z,
            g,
            y
          ), k++;
      }
    } else if (k > B)
      for (; k <= G; )
        Mt(x[k], D, q, !0), k++;
    else {
      const O = k, I = k, tt = /* @__PURE__ */ new Map();
      for (k = I; k <= B; k++) {
        const pe = T[k] = y ? xn(T[k]) : qe(T[k]);
        pe.key != null && tt.set(pe.key, k);
      }
      let st, vt = 0;
      const Yt = B - I + 1;
      let de = !1, Br = 0;
      const fi = new Array(Yt);
      for (k = 0; k < Yt; k++)
        fi[k] = 0;
      for (k = O; k <= G; k++) {
        const pe = x[k];
        if (vt >= Yt) {
          Mt(pe, D, q, !0);
          continue;
        }
        let $e;
        if (pe.key != null)
          $e = tt.get(pe.key);
        else
          for (st = I; st <= B; st++)
            if (fi[st - I] === 0 && ji(pe, T[st])) {
              $e = st;
              break;
            }
        $e === void 0 ? Mt(pe, D, q, !0) : (fi[$e - I] = k + 1, $e >= Br ? Br = $e : de = !0, S(
          pe,
          T[$e],
          L,
          null,
          D,
          q,
          z,
          g,
          y
        ), vt++);
      }
      const Tc = de ? xy(fi) : vi;
      for (st = Tc.length - 1, k = Yt - 1; k >= 0; k--) {
        const pe = I + k, $e = T[pe], Ac = pe + 1 < M ? T[pe + 1].el : R;
        fi[k] === 0 ? S(
          null,
          $e,
          L,
          Ac,
          D,
          q,
          z,
          g,
          y
        ) : de && (st < 0 || k !== Tc[st] ? Nt($e, L, Ac, 2) : st--);
      }
    }
  }, Nt = (x, T, L, R, D = null) => {
    const { el: q, type: z, transition: g, children: y, shapeFlag: k } = x;
    if (k & 6) {
      Nt(x.component.subTree, T, L, R);
      return;
    }
    if (k & 128) {
      x.suspense.move(T, L, R);
      return;
    }
    if (k & 64) {
      z.move(x, T, L, he);
      return;
    }
    if (z === $t) {
      i(q, T, L);
      for (let G = 0; G < y.length; G++)
        Nt(y[G], T, L, R);
      i(x.anchor, T, L);
      return;
    }
    if (z === vs) {
      b(x, T, L);
      return;
    }
    if (R !== 2 && k & 1 && g)
      if (R === 0)
        g.beforeEnter(q), i(q, T, L), ae(() => g.enter(q), D);
      else {
        const { leave: G, delayLeave: B, afterLeave: O } = g, I = () => i(q, T, L), tt = () => {
          G(q, () => {
            I(), O && O();
          });
        };
        B ? B(q, I, tt) : tt();
      }
    else
      i(q, T, L);
  }, Mt = (x, T, L, R = !1, D = !1) => {
    const {
      type: q,
      props: z,
      ref: g,
      children: y,
      dynamicChildren: k,
      shapeFlag: M,
      patchFlag: G,
      dirs: B
    } = x;
    if (g != null && xa(g, null, L, x, !0), M & 256) {
      T.ctx.deactivate(x);
      return;
    }
    const O = M & 1 && B, I = !bs(x);
    let tt;
    if (I && (tt = z && z.onVnodeBeforeUnmount) && Be(tt, T, x), M & 6)
      Qt(x.component, L, R);
    else {
      if (M & 128) {
        x.suspense.unmount(L, R);
        return;
      }
      O && Bn(x, null, T, "beforeUnmount"), M & 64 ? x.type.remove(
        x,
        T,
        L,
        D,
        he,
        R
      ) : k && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (q !== $t || G > 0 && G & 64) ? zt(
        k,
        T,
        L,
        !1,
        !0
      ) : (q === $t && G & 384 || !D && M & 16) && zt(y, T, L), R && Re(x);
    }
    (I && (tt = z && z.onVnodeUnmounted) || O) && ae(() => {
      tt && Be(tt, T, x), O && Bn(x, null, T, "unmounted");
    }, L);
  }, Re = (x) => {
    const { type: T, el: L, anchor: R, transition: D } = x;
    if (T === $t) {
      De(L, R);
      return;
    }
    if (T === vs) {
      w(x);
      return;
    }
    const q = () => {
      r(L), D && !D.persisted && D.afterLeave && D.afterLeave();
    };
    if (x.shapeFlag & 1 && D && !D.persisted) {
      const { leave: z, delayLeave: g } = D, y = () => z(L, q);
      g ? g(x.el, q, y) : y();
    } else
      q();
  }, De = (x, T) => {
    let L;
    for (; x !== T; )
      L = h(x), r(x), x = L;
    r(T);
  }, Qt = (x, T, L) => {
    const { bum: R, scope: D, update: q, subTree: z, um: g } = x;
    R && ms(R), D.stop(), q && (q.active = !1, Mt(z, x, T, L)), g && ae(g, T), ae(() => {
      x.isUnmounted = !0;
    }, T), T && T.pendingBranch && !T.isUnmounted && x.asyncDep && !x.asyncResolved && x.suspenseId === T.pendingId && (T.deps--, T.deps === 0 && T.resolve());
  }, zt = (x, T, L, R = !1, D = !1, q = 0) => {
    for (let z = q; z < x.length; z++)
      Mt(x[z], T, L, R, D);
  }, Te = (x) => x.shapeFlag & 6 ? Te(x.component.subTree) : x.shapeFlag & 128 ? x.suspense.next() : h(x.anchor || x.el);
  let Ae = !1;
  const Fe = (x, T, L) => {
    x == null ? T._vnode && Mt(T._vnode, null, null, !0) : S(
      T._vnode || null,
      x,
      T,
      null,
      null,
      null,
      L
    ), Ae || (Ae = !0, Fc(), Yh(), Ae = !1), T._vnode = x;
  }, he = {
    p: S,
    um: Mt,
    m: Nt,
    r: Re,
    mt: rt,
    mc: F,
    pc: at,
    pbc: V,
    n: Te,
    o: t
  };
  let Xe, ui;
  return {
    render: Fe,
    hydrate: Xe,
    createApp: hy(Fe, Xe)
  };
}
function Yo({ type: t, props: e }, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n;
}
function Un({ effect: t, update: e }, n) {
  t.allowRecurse = e.allowRecurse = n;
}
function wy(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function dd(t, e, n = !1) {
  const i = t.children, r = e.children;
  if (nt(i) && nt(r))
    for (let s = 0; s < i.length; s++) {
      const o = i[s];
      let a = r[s];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = r[s] = xn(r[s]), a.el = o.el), n || dd(o, a)), a.type === Or && (a.el = o.el);
    }
}
function xy(t) {
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
function pd(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : pd(e);
}
const Sy = (t) => t.__isTeleport, $t = Symbol.for("v-fgt"), Or = Symbol.for("v-txt"), ei = Symbol.for("v-cmt"), vs = Symbol.for("v-stc"), or = [];
let Ne = null;
function Z(t = !1) {
  or.push(Ne = t ? null : []);
}
function ky() {
  or.pop(), Ne = or[or.length - 1] || null;
}
let pr = 1;
function Yc(t) {
  pr += t;
}
function gd(t) {
  return t.dynamicChildren = pr > 0 ? Ne || vi : null, ky(), pr > 0 && Ne && Ne.push(t), t;
}
function et(t, e, n, i, r, s) {
  return gd(
    Y(
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
  return gd(
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
function Sa(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function ji(t, e) {
  return t.type === e.type && t.key === e.key;
}
const md = ({ key: t }) => t ?? null, _s = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? Ut(t) || ie(t) || ot(t) ? { i: ne, r: t, k: e, f: !!n } : t : null);
function Y(t, e = null, n = null, i = 0, r = null, s = t === $t ? 0 : 1, o = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && md(e),
    ref: e && _s(e),
    scopeId: _o,
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
    ctx: ne
  };
  return a ? (Nl(l, n), s & 128 && t.normalize(l)) : n && (l.shapeFlag |= Ut(n) ? 8 : 16), pr > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Ne && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Ne.push(l), l;
}
const gt = Ey;
function Ey(t, e = null, n = null, i = 0, r = null, s = !1) {
  if ((!t || t === Qh) && (t = ei), Sa(t)) {
    const a = Ti(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && Nl(a, n), pr > 0 && !s && Ne && (a.shapeFlag & 6 ? Ne[Ne.indexOf(t)] = a : Ne.push(a)), a.patchFlag |= -2, a;
  }
  if (Fy(t) && (t = t.__vccOpts), e) {
    e = Ty(e);
    let { class: a, style: l } = e;
    a && !Ut(a) && (e.class = ln(a)), St(l) && (Bh(l) && !nt(l) && (l = jt({}, l)), e.style = Ft(l));
  }
  const o = Ut(t) ? 1 : Wm(t) ? 128 : Sy(t) ? 64 : St(t) ? 4 : ot(t) ? 2 : 0;
  return Y(
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
function Ty(t) {
  return t ? Bh(t) || ad(t) ? jt({}, t) : t : null;
}
function Ti(t, e, n = !1) {
  const { props: i, ref: r, patchFlag: s, children: o } = t, a = e ? Cy(i || {}, e) : i;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: a,
    key: a && md(a),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? nt(r) ? r.concat(_s(e)) : [r, _s(e)] : _s(e)
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
    ssContent: t.ssContent && Ti(t.ssContent),
    ssFallback: t.ssFallback && Ti(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
}
function Vn(t = " ", e = 0) {
  return gt(Or, null, t, e);
}
function Ay(t, e) {
  const n = gt(vs, null, t);
  return n.staticCount = e, n;
}
function ut(t = "", e = !1) {
  return e ? (Z(), Si(ei, null, t)) : gt(ei, null, t);
}
function qe(t) {
  return t == null || typeof t == "boolean" ? gt(ei) : nt(t) ? gt(
    $t,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : typeof t == "object" ? xn(t) : gt(Or, null, String(t));
}
function xn(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Ti(t);
}
function Nl(t, e) {
  let n = 0;
  const { shapeFlag: i } = t;
  if (e == null)
    e = null;
  else if (nt(e))
    n = 16;
  else if (typeof e == "object")
    if (i & 65) {
      const r = e.default;
      r && (r._c && (r._d = !1), Nl(t, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = e._;
      !r && !ad(e) ? e._ctx = ne : r === 3 && ne && (ne.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else
    ot(e) ? (e = { default: e, _ctx: ne }, n = 32) : (e = String(e), i & 64 ? (n = 16, e = [Vn(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function Cy(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    for (const r in i)
      if (r === "class")
        e.class !== i.class && (e.class = ln([e.class, i.class]));
      else if (r === "style")
        e.style = Ft([e.style, i.style]);
      else if (ho(r)) {
        const s = e[r], o = i[r];
        o && s !== o && !(nt(s) && s.includes(o)) && (e[r] = s ? [].concat(s, o) : o);
      } else
        r !== "" && (e[r] = i[r]);
  }
  return e;
}
function Be(t, e, n, i = null) {
  Le(t, e, 7, [
    n,
    i
  ]);
}
const Oy = rd();
let Py = 0;
function Ny(t, e, n) {
  const i = t.type, r = (e ? e.appContext : t.appContext) || Oy, s = {
    uid: Py++,
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
    scope: new Th(
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
    propsOptions: cd(i, r),
    emitsOptions: Xh(i, r),
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
  return s.ctx = { _: s }, s.root = e ? e.root : s, s.emit = Mm.bind(null, s), t.ce && t.ce(s), s;
}
let Wt = null;
const xo = () => Wt || ne;
let $s, ka;
{
  const t = Sh(), e = (n, i) => {
    let r;
    return (r = t[n]) || (r = t[n] = []), r.push(i), (s) => {
      r.length > 1 ? r.forEach((o) => o(s)) : r[0](s);
    };
  };
  $s = e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Wt = n
  ), ka = e(
    "__VUE_SSR_SETTERS__",
    (n) => Nr = n
  );
}
const Pr = (t) => {
  const e = Wt;
  return $s(t), t.scope.on(), () => {
    t.scope.off(), $s(e);
  };
}, Kc = () => {
  Wt && Wt.scope.off(), $s(null);
};
function yd(t) {
  return t.vnode.shapeFlag & 4;
}
let Nr = !1;
function Iy(t, e = !1) {
  e && ka(e);
  const { props: n, children: i } = t.vnode, r = yd(t);
  py(t, n, r, e), yy(t, i);
  const s = r ? Ly(t, e) : void 0;
  return e && ka(!1), s;
}
function Ly(t, e) {
  const n = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, sy);
  const { setup: i } = n;
  if (i) {
    const r = t.setupContext = i.length > 1 ? Ry(t) : null, s = Pr(t);
    Mn();
    const o = Tn(
      i,
      t,
      0,
      [
        t.props,
        r
      ]
    );
    if (Rn(), s(), vh(o)) {
      if (o.then(Kc, Kc), e)
        return o.then((a) => {
          Xc(t, a, e);
        }).catch((a) => {
          Cr(a, t, 0);
        });
      t.asyncDep = o;
    } else
      Xc(t, o, e);
  } else
    bd(t, e);
}
function Xc(t, e, n) {
  ot(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : St(e) && (t.setupState = jh(e)), bd(t, n);
}
let Jc;
function bd(t, e, n) {
  const i = t.type;
  if (!t.render) {
    if (!e && Jc && !i.render) {
      const r = i.template || Ol(t).template;
      if (r) {
        const { isCustomElement: s, compilerOptions: o } = t.appContext.config, { delimiters: a, compilerOptions: l } = i, c = jt(
          jt(
            {
              isCustomElement: s,
              delimiters: a
            },
            o
          ),
          l
        );
        i.render = Jc(r, c);
      }
    }
    t.render = i.render || Se;
  }
  {
    const r = Pr(t);
    Mn();
    try {
      oy(t);
    } finally {
      Rn(), r();
    }
  }
}
const My = {
  get(t, e) {
    return ce(t, "get", ""), t[e];
  }
};
function Ry(t) {
  const e = (n) => {
    t.exposed = n || {};
  };
  return {
    attrs: new Proxy(t.attrs, My),
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function So(t) {
  if (t.exposed)
    return t.exposeProxy || (t.exposeProxy = new Proxy(jh(Uh(t.exposed)), {
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
function Dy(t, e = !0) {
  return ot(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function Fy(t) {
  return ot(t) && "__vccOpts" in t;
}
const ve = (t, e) => Tm(t, e, Nr);
function Il(t, e, n) {
  const i = arguments.length;
  return i === 2 ? St(e) && !nt(e) ? Sa(e) ? gt(t, null, [e]) : gt(t, e) : gt(t, null, e) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && Sa(n) && (n = [n]), gt(t, e, n));
}
const $y = "3.4.25";
/**
* @vue/runtime-dom v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const By = "http://www.w3.org/2000/svg", Uy = "http://www.w3.org/1998/Math/MathML", Sn = typeof document < "u" ? document : null, Qc = Sn && /* @__PURE__ */ Sn.createElement("template"), qy = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, i) => {
    const r = e === "svg" ? Sn.createElementNS(By, t) : e === "mathml" ? Sn.createElementNS(Uy, t) : Sn.createElement(t, n ? { is: n } : void 0);
    return t === "select" && i && i.multiple != null && r.setAttribute("multiple", i.multiple), r;
  },
  createText: (t) => Sn.createTextNode(t),
  createComment: (t) => Sn.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => Sn.querySelector(t),
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
      Qc.innerHTML = i === "svg" ? `<svg>${t}</svg>` : i === "mathml" ? `<math>${t}</math>` : t;
      const a = Qc.content;
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
}, Hy = Symbol("_vtc");
function Wy(t, e, n) {
  const i = t[Hy];
  i && (e = (e ? [e, ...i] : [...i]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
const Bs = Symbol("_vod"), vd = Symbol("_vsh"), _d = {
  beforeMount(t, { value: e }, { transition: n }) {
    t[Bs] = t.style.display === "none" ? "" : t.style.display, n && e ? n.beforeEnter(t) : zi(t, e);
  },
  mounted(t, { value: e }, { transition: n }) {
    n && e && n.enter(t);
  },
  updated(t, { value: e, oldValue: n }, { transition: i }) {
    !e != !n && (i ? e ? (i.beforeEnter(t), zi(t, !0), i.enter(t)) : i.leave(t, () => {
      zi(t, !1);
    }) : zi(t, e));
  },
  beforeUnmount(t, { value: e }) {
    zi(t, e);
  }
};
function zi(t, e) {
  t.style.display = e ? t[Bs] : "none", t[vd] = !e;
}
const Vy = Symbol(""), jy = /(^|;)\s*display\s*:/;
function zy(t, e, n) {
  const i = t.style, r = Ut(n);
  let s = !1;
  if (n && !r) {
    if (e)
      if (Ut(e))
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
      const o = i[Vy];
      o && (n += ";" + o), i.cssText = n, s = jy.test(n);
    }
  } else
    e && t.removeAttribute("style");
  Bs in t && (t[Bs] = s ? i.display : "", t[vd] && (i.display = "none"));
}
const Zc = /\s*!important$/;
function ws(t, e, n) {
  if (nt(n))
    n.forEach((i) => ws(t, e, i));
  else if (n == null && (n = ""), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const i = Gy(t, e);
    Zc.test(n) ? t.setProperty(
      Fi(i),
      n.replace(Zc, ""),
      "important"
    ) : t[i] = n;
  }
}
const tu = ["Webkit", "Moz", "ms"], Ko = {};
function Gy(t, e) {
  const n = Ko[e];
  if (n)
    return n;
  let i = Ye(e);
  if (i !== "filter" && i in t)
    return Ko[e] = i;
  i = go(i);
  for (let r = 0; r < tu.length; r++) {
    const s = tu[r] + i;
    if (s in t)
      return Ko[e] = s;
  }
  return e;
}
const eu = "http://www.w3.org/1999/xlink";
function Yy(t, e, n, i, r) {
  if (i && e.startsWith("xlink:"))
    n == null ? t.removeAttributeNS(eu, e.slice(6, e.length)) : t.setAttributeNS(eu, e, n);
  else {
    const s = em(e);
    n == null || s && !kh(n) ? t.removeAttribute(e) : t.setAttribute(e, s ? "" : n);
  }
}
function Ky(t, e, n, i, r, s, o) {
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
    c === "boolean" ? n = kh(n) : n == null && c === "string" ? (n = "", l = !0) : c === "number" && (n = 0, l = !0);
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
function Xy(t, e, n, i) {
  t.removeEventListener(e, n, i);
}
const nu = Symbol("_vei");
function Jy(t, e, n, i, r = null) {
  const s = t[nu] || (t[nu] = {}), o = s[e];
  if (i && o)
    o.value = i;
  else {
    const [a, l] = Qy(e);
    if (i) {
      const c = s[e] = eb(
        i,
        r
      );
      en(t, a, c, l);
    } else
      o && (Xy(t, a, o, l), s[e] = void 0);
  }
}
const iu = /(?:Once|Passive|Capture)$/;
function Qy(t) {
  let e;
  if (iu.test(t)) {
    e = {};
    let i;
    for (; i = t.match(iu); )
      t = t.slice(0, t.length - i[0].length), e[i[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : Fi(t.slice(2)), e];
}
let Xo = 0;
const Zy = /* @__PURE__ */ Promise.resolve(), tb = () => Xo || (Zy.then(() => Xo = 0), Xo = Date.now());
function eb(t, e) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    Le(
      nb(i, n.value),
      e,
      5,
      [i]
    );
  };
  return n.value = t, n.attached = tb(), n;
}
function nb(t, e) {
  if (nt(e)) {
    const n = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      n.call(t), t._stopped = !0;
    }, e.map(
      (i) => (r) => !r._stopped && i && i(r)
    );
  } else
    return e;
}
const ru = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, ib = (t, e, n, i, r, s, o, a, l) => {
  const c = r === "svg";
  e === "class" ? Wy(t, i, c) : e === "style" ? zy(t, n, i) : ho(e) ? fl(e) || Jy(t, e, n, i, o) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : rb(t, e, i, c)) ? Ky(
    t,
    e,
    i,
    s,
    o,
    a,
    l
  ) : (e === "true-value" ? t._trueValue = i : e === "false-value" && (t._falseValue = i), Yy(t, e, i, c));
};
function rb(t, e, n, i) {
  if (i)
    return !!(e === "innerHTML" || e === "textContent" || e in t && ru(e) && ot(n));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const r = t.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return ru(e) && Ut(n) ? !1 : e in t;
}
const Cn = (t) => {
  const e = t.props["onUpdate:modelValue"] || !1;
  return nt(e) ? (n) => ms(e, n) : e;
};
function sb(t) {
  t.target.composing = !0;
}
function su(t) {
  const e = t.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
const ke = Symbol("_assign"), Us = {
  created(t, { modifiers: { lazy: e, trim: n, number: i } }, r) {
    t[ke] = Cn(r);
    const s = i || r.props && r.props.type === "number";
    en(t, e ? "change" : "input", (o) => {
      if (o.target.composing)
        return;
      let a = t.value;
      n && (a = a.trim()), s && (a = Ms(a)), t[ke](a);
    }), n && en(t, "change", () => {
      t.value = t.value.trim();
    }), e || (en(t, "compositionstart", sb), en(t, "compositionend", su), en(t, "change", su));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(t, { value: e }) {
    t.value = e ?? "";
  },
  beforeUpdate(t, { value: e, modifiers: { lazy: n, trim: i, number: r } }, s) {
    if (t[ke] = Cn(s), t.composing)
      return;
    const o = (r || t.type === "number") && !/^0\d/.test(t.value) ? Ms(t.value) : t.value, a = e ?? "";
    o !== a && (document.activeElement === t && t.type !== "range" && (n || i && t.value.trim() === a) || (t.value = a));
  }
}, ob = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(t, e, n) {
    t[ke] = Cn(n), en(t, "change", () => {
      const i = t._modelValue, r = Ai(t), s = t.checked, o = t[ke];
      if (nt(i)) {
        const a = pl(i, r), l = a !== -1;
        if (s && !l)
          o(i.concat(r));
        else if (!s && l) {
          const c = [...i];
          c.splice(a, 1), o(c);
        }
      } else if (Di(i)) {
        const a = new Set(i);
        s ? a.add(r) : a.delete(r), o(a);
      } else
        o(wd(t, s));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: ou,
  beforeUpdate(t, e, n) {
    t[ke] = Cn(n), ou(t, e, n);
  }
};
function ou(t, { value: e, oldValue: n }, i) {
  t._modelValue = e, nt(e) ? t.checked = pl(e, i.props.value) > -1 : Di(e) ? t.checked = e.has(i.props.value) : e !== n && (t.checked = ti(e, wd(t, !0)));
}
const ab = {
  created(t, { value: e }, n) {
    t.checked = ti(e, n.props.value), t[ke] = Cn(n), en(t, "change", () => {
      t[ke](Ai(t));
    });
  },
  beforeUpdate(t, { value: e, oldValue: n }, i) {
    t[ke] = Cn(i), e !== n && (t.checked = ti(e, i.props.value));
  }
}, xs = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(t, { value: e, modifiers: { number: n } }, i) {
    const r = Di(e);
    en(t, "change", () => {
      const s = Array.prototype.filter.call(t.options, (o) => o.selected).map(
        (o) => n ? Ms(Ai(o)) : Ai(o)
      );
      t[ke](
        t.multiple ? r ? new Set(s) : s : s[0]
      ), t._assigning = !0, yo(() => {
        t._assigning = !1;
      });
    }), t[ke] = Cn(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(t, { value: e, modifiers: { number: n } }) {
    au(t, e);
  },
  beforeUpdate(t, e, n) {
    t[ke] = Cn(n);
  },
  updated(t, { value: e, modifiers: { number: n } }) {
    t._assigning || au(t, e);
  }
};
function au(t, e, n) {
  const i = t.multiple, r = nt(e);
  if (!(i && !r && !Di(e))) {
    for (let s = 0, o = t.options.length; s < o; s++) {
      const a = t.options[s], l = Ai(a);
      if (i)
        if (r) {
          const c = typeof l;
          c === "string" || c === "number" ? a.selected = e.some((u) => String(u) === String(l)) : a.selected = pl(e, l) > -1;
        } else
          a.selected = e.has(l);
      else if (ti(Ai(a), e)) {
        t.selectedIndex !== s && (t.selectedIndex = s);
        return;
      }
    }
    !i && t.selectedIndex !== -1 && (t.selectedIndex = -1);
  }
}
function Ai(t) {
  return "_value" in t ? t._value : t.value;
}
function wd(t, e) {
  const n = e ? "_trueValue" : "_falseValue";
  return n in t ? t[n] : e;
}
const lu = {
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
function lb(t, e) {
  switch (t) {
    case "SELECT":
      return xs;
    case "TEXTAREA":
      return Us;
    default:
      switch (e) {
        case "checkbox":
          return ob;
        case "radio":
          return ab;
        default:
          return Us;
      }
  }
}
function zr(t, e, n, i, r) {
  const o = lb(
    t.tagName,
    n.props && n.props.type
  )[r];
  o && o(t, e, n, i);
}
const cb = ["ctrl", "shift", "alt", "meta"], ub = {
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
  exact: (t, e) => cb.some((n) => t[`${n}Key`] && !e.includes(n))
}, TP = (t, e) => {
  const n = t._withMods || (t._withMods = {}), i = e.join(".");
  return n[i] || (n[i] = (r, ...s) => {
    for (let o = 0; o < e.length; o++) {
      const a = ub[e[o]];
      if (a && a(r, e))
        return;
    }
    return t(r, ...s);
  });
}, fb = /* @__PURE__ */ jt({ patchProp: ib }, qy);
let cu;
function hb() {
  return cu || (cu = vy(fb));
}
const db = (...t) => {
  const e = hb().createApp(...t), { mount: n } = e;
  return e.mount = (i) => {
    const r = gb(i);
    if (!r)
      return;
    const s = e._component;
    !ot(s) && !s.render && !s.template && (s.template = r.innerHTML), r.innerHTML = "";
    const o = n(r, !1, pb(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, e;
};
function pb(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function gb(t) {
  return Ut(t) ? document.querySelector(t) : t;
}
/*!
 * shared v9.13.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
const qs = typeof window < "u", Dn = (t, e = !1) => e ? Symbol.for(t) : Symbol(t), mb = (t, e, n) => yb({ l: t, k: e, s: n }), yb = (t) => JSON.stringify(t).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Vt = (t) => typeof t == "number" && isFinite(t), bb = (t) => Sd(t) === "[object Date]", Hs = (t) => Sd(t) === "[object RegExp]", ko = (t) => ht(t) && Object.keys(t).length === 0, Jt = Object.assign;
let uu;
const Ll = () => uu || (uu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function fu(t) {
  return t.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const vb = Object.prototype.hasOwnProperty;
function Ws(t, e) {
  return vb.call(t, e);
}
const qt = Array.isArray, It = (t) => typeof t == "function", J = (t) => typeof t == "string", Pt = (t) => typeof t == "boolean", yt = (t) => t !== null && typeof t == "object", _b = (t) => yt(t) && It(t.then) && It(t.catch), xd = Object.prototype.toString, Sd = (t) => xd.call(t), ht = (t) => {
  if (!yt(t))
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e.constructor === Object;
}, wb = (t) => t == null ? "" : qt(t) || ht(t) && t.toString === xd ? JSON.stringify(t, null, 2) : String(t);
function xb(t, e = "") {
  return t.reduce((n, i, r) => r === 0 ? n + i : n + e + i, "");
}
function Eo(t) {
  let e = t;
  return () => ++e;
}
function Sb(t, e) {
  typeof console < "u" && (console.warn("[intlify] " + t), e && console.warn(e.stack));
}
const Gr = (t) => !yt(t) || qt(t);
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
 * message-compiler v9.13.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
function kb(t, e, n) {
  return { line: t, column: e, offset: n };
}
function Vs(t, e, n) {
  return { start: t, end: e };
}
const Eb = /\{([0-9a-zA-Z]+)\}/g;
function kd(t, ...e) {
  return e.length === 1 && Tb(e[0]) && (e = e[0]), (!e || !e.hasOwnProperty) && (e = {}), t.replace(Eb, (n, i) => e.hasOwnProperty(i) ? e[i] : "");
}
const Ed = Object.assign, hu = (t) => typeof t == "string", Tb = (t) => t !== null && typeof t == "object";
function Td(t, e = "") {
  return t.reduce((n, i, r) => r === 0 ? n + i : n + e + i, "");
}
const Ml = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2
}, Ab = {
  [Ml.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
};
function Cb(t, e, ...n) {
  const i = kd(Ab[t], ...n || []), r = { message: String(i), code: t };
  return e && (r.location = e), r;
}
const it = {
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
}, Ob = {
  // tokenizer error messages
  [it.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [it.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [it.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [it.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [it.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [it.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [it.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [it.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [it.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [it.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [it.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [it.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [it.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [it.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [it.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [it.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function $i(t, e, n = {}) {
  const { domain: i, messages: r, args: s } = n, o = kd((r || Ob)[t] || "", ...s || []), a = new SyntaxError(String(o));
  return a.code = t, e && (a.location = e), a.domain = i, a;
}
function Pb(t) {
  throw t;
}
const Je = " ", Nb = "\r", te = `
`, Ib = "\u2028", Lb = "\u2029";
function Mb(t) {
  const e = t;
  let n = 0, i = 1, r = 1, s = 0;
  const o = (N) => e[N] === Nb && e[N + 1] === te, a = (N) => e[N] === te, l = (N) => e[N] === Lb, c = (N) => e[N] === Ib, u = (N) => o(N) || a(N) || l(N) || c(N), f = () => n, h = () => i, d = () => r, p = () => s, S = (N) => o(N) || l(N) || c(N) ? te : e[N], A = () => S(n), v = () => S(n + s);
  function _() {
    return s = 0, u(n) && (i++, r = 0), o(n) && n++, n++, r++, e[n];
  }
  function b() {
    return o(n + s) && s++, s++, e[n + s];
  }
  function w() {
    n = 0, i = 1, r = 1, s = 0;
  }
  function E(N = 0) {
    s = N;
  }
  function C() {
    const N = n + s;
    for (; N !== n; )
      _();
    s = 0;
  }
  return {
    index: f,
    line: h,
    column: d,
    peekOffset: p,
    charAt: S,
    currentChar: A,
    currentPeek: v,
    next: _,
    peek: b,
    reset: w,
    resetPeek: E,
    skipToPeek: C
  };
}
const mn = void 0, Rb = ".", du = "'", Db = "tokenizer";
function Fb(t, e = {}) {
  const n = e.location !== !1, i = Mb(t), r = () => i.index(), s = () => kb(i.line(), i.column(), i.index()), o = s(), a = r(), l = {
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
  function f(g, y, k, ...M) {
    const G = c();
    if (y.column += k, y.offset += k, u) {
      const B = n ? Vs(G.startLoc, y) : null, O = $i(g, B, {
        domain: Db,
        args: M
      });
      u(O);
    }
  }
  function h(g, y, k) {
    g.endLoc = s(), g.currentType = y;
    const M = { type: y };
    return n && (M.loc = Vs(g.startLoc, g.endLoc)), k != null && (M.value = k), M;
  }
  const d = (g) => h(
    g,
    14
    /* TokenTypes.EOF */
  );
  function p(g, y) {
    return g.currentChar() === y ? (g.next(), y) : (f(it.EXPECTED_TOKEN, s(), 0, y), "");
  }
  function S(g) {
    let y = "";
    for (; g.currentPeek() === Je || g.currentPeek() === te; )
      y += g.currentPeek(), g.peek();
    return y;
  }
  function A(g) {
    const y = S(g);
    return g.skipToPeek(), y;
  }
  function v(g) {
    if (g === mn)
      return !1;
    const y = g.charCodeAt(0);
    return y >= 97 && y <= 122 || // a-z
    y >= 65 && y <= 90 || // A-Z
    y === 95;
  }
  function _(g) {
    if (g === mn)
      return !1;
    const y = g.charCodeAt(0);
    return y >= 48 && y <= 57;
  }
  function b(g, y) {
    const { currentType: k } = y;
    if (k !== 2)
      return !1;
    S(g);
    const M = v(g.currentPeek());
    return g.resetPeek(), M;
  }
  function w(g, y) {
    const { currentType: k } = y;
    if (k !== 2)
      return !1;
    S(g);
    const M = g.currentPeek() === "-" ? g.peek() : g.currentPeek(), G = _(M);
    return g.resetPeek(), G;
  }
  function E(g, y) {
    const { currentType: k } = y;
    if (k !== 2)
      return !1;
    S(g);
    const M = g.currentPeek() === du;
    return g.resetPeek(), M;
  }
  function C(g, y) {
    const { currentType: k } = y;
    if (k !== 8)
      return !1;
    S(g);
    const M = g.currentPeek() === ".";
    return g.resetPeek(), M;
  }
  function N(g, y) {
    const { currentType: k } = y;
    if (k !== 9)
      return !1;
    S(g);
    const M = v(g.currentPeek());
    return g.resetPeek(), M;
  }
  function F(g, y) {
    const { currentType: k } = y;
    if (!(k === 8 || k === 12))
      return !1;
    S(g);
    const M = g.currentPeek() === ":";
    return g.resetPeek(), M;
  }
  function $(g, y) {
    const { currentType: k } = y;
    if (k !== 10)
      return !1;
    const M = () => {
      const B = g.currentPeek();
      return B === "{" ? v(g.peek()) : B === "@" || B === "%" || B === "|" || B === ":" || B === "." || B === Je || !B ? !1 : B === te ? (g.peek(), M()) : j(g, !1);
    }, G = M();
    return g.resetPeek(), G;
  }
  function V(g) {
    S(g);
    const y = g.currentPeek() === "|";
    return g.resetPeek(), y;
  }
  function H(g) {
    const y = S(g), k = g.currentPeek() === "%" && g.peek() === "{";
    return g.resetPeek(), {
      isModulo: k,
      hasSpace: y.length > 0
    };
  }
  function j(g, y = !0) {
    const k = (G = !1, B = "", O = !1) => {
      const I = g.currentPeek();
      return I === "{" ? B === "%" ? !1 : G : I === "@" || !I ? B === "%" ? !0 : G : I === "%" ? (g.peek(), k(G, "%", !0)) : I === "|" ? B === "%" || O ? !0 : !(B === Je || B === te) : I === Je ? (g.peek(), k(!0, Je, O)) : I === te ? (g.peek(), k(!0, te, O)) : !0;
    }, M = k();
    return y && g.resetPeek(), M;
  }
  function W(g, y) {
    const k = g.currentChar();
    return k === mn ? mn : y(k) ? (g.next(), k) : null;
  }
  function rt(g) {
    const y = g.charCodeAt(0);
    return y >= 97 && y <= 122 || // a-z
    y >= 65 && y <= 90 || // A-Z
    y >= 48 && y <= 57 || // 0-9
    y === 95 || // _
    y === 36;
  }
  function Dt(g) {
    return W(g, rt);
  }
  function pt(g) {
    const y = g.charCodeAt(0);
    return y >= 97 && y <= 122 || // a-z
    y >= 65 && y <= 90 || // A-Z
    y >= 48 && y <= 57 || // 0-9
    y === 95 || // _
    y === 36 || // $
    y === 45;
  }
  function ct(g) {
    return W(g, pt);
  }
  function at(g) {
    const y = g.charCodeAt(0);
    return y >= 48 && y <= 57;
  }
  function xt(g) {
    return W(g, at);
  }
  function fe(g) {
    const y = g.charCodeAt(0);
    return y >= 48 && y <= 57 || // 0-9
    y >= 65 && y <= 70 || // A-F
    y >= 97 && y <= 102;
  }
  function Nt(g) {
    return W(g, fe);
  }
  function Mt(g) {
    let y = "", k = "";
    for (; y = xt(g); )
      k += y;
    return k;
  }
  function Re(g) {
    A(g);
    const y = g.currentChar();
    return y !== "%" && f(it.EXPECTED_TOKEN, s(), 0, y), g.next(), "%";
  }
  function De(g) {
    let y = "";
    for (; ; ) {
      const k = g.currentChar();
      if (k === "{" || k === "}" || k === "@" || k === "|" || !k)
        break;
      if (k === "%")
        if (j(g))
          y += k, g.next();
        else
          break;
      else if (k === Je || k === te)
        if (j(g))
          y += k, g.next();
        else {
          if (V(g))
            break;
          y += k, g.next();
        }
      else
        y += k, g.next();
    }
    return y;
  }
  function Qt(g) {
    A(g);
    let y = "", k = "";
    for (; y = ct(g); )
      k += y;
    return g.currentChar() === mn && f(it.UNTERMINATED_CLOSING_BRACE, s(), 0), k;
  }
  function zt(g) {
    A(g);
    let y = "";
    return g.currentChar() === "-" ? (g.next(), y += `-${Mt(g)}`) : y += Mt(g), g.currentChar() === mn && f(it.UNTERMINATED_CLOSING_BRACE, s(), 0), y;
  }
  function Te(g) {
    return g !== du && g !== te;
  }
  function Ae(g) {
    A(g), p(g, "'");
    let y = "", k = "";
    for (; y = W(g, Te); )
      y === "\\" ? k += Fe(g) : k += y;
    const M = g.currentChar();
    return M === te || M === mn ? (f(it.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), M === te && (g.next(), p(g, "'")), k) : (p(g, "'"), k);
  }
  function Fe(g) {
    const y = g.currentChar();
    switch (y) {
      case "\\":
      case "'":
        return g.next(), `\\${y}`;
      case "u":
        return he(g, y, 4);
      case "U":
        return he(g, y, 6);
      default:
        return f(it.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, y), "";
    }
  }
  function he(g, y, k) {
    p(g, y);
    let M = "";
    for (let G = 0; G < k; G++) {
      const B = Nt(g);
      if (!B) {
        f(it.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${y}${M}${g.currentChar()}`);
        break;
      }
      M += B;
    }
    return `\\${y}${M}`;
  }
  function Xe(g) {
    return g !== "{" && g !== "}" && g !== Je && g !== te;
  }
  function ui(g) {
    A(g);
    let y = "", k = "";
    for (; y = W(g, Xe); )
      k += y;
    return k;
  }
  function x(g) {
    let y = "", k = "";
    for (; y = Dt(g); )
      k += y;
    return k;
  }
  function T(g) {
    const y = (k) => {
      const M = g.currentChar();
      return M === "{" || M === "%" || M === "@" || M === "|" || M === "(" || M === ")" || !M || M === Je ? k : (k += M, g.next(), y(k));
    };
    return y("");
  }
  function L(g) {
    A(g);
    const y = p(
      g,
      "|"
      /* TokenChars.Pipe */
    );
    return A(g), y;
  }
  function R(g, y) {
    let k = null;
    switch (g.currentChar()) {
      case "{":
        return y.braceNest >= 1 && f(it.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), g.next(), k = h(
          y,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), A(g), y.braceNest++, k;
      case "}":
        return y.braceNest > 0 && y.currentType === 2 && f(it.EMPTY_PLACEHOLDER, s(), 0), g.next(), k = h(
          y,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), y.braceNest--, y.braceNest > 0 && A(g), y.inLinked && y.braceNest === 0 && (y.inLinked = !1), k;
      case "@":
        return y.braceNest > 0 && f(it.UNTERMINATED_CLOSING_BRACE, s(), 0), k = D(g, y) || d(y), y.braceNest = 0, k;
      default: {
        let G = !0, B = !0, O = !0;
        if (V(g))
          return y.braceNest > 0 && f(it.UNTERMINATED_CLOSING_BRACE, s(), 0), k = h(y, 1, L(g)), y.braceNest = 0, y.inLinked = !1, k;
        if (y.braceNest > 0 && (y.currentType === 5 || y.currentType === 6 || y.currentType === 7))
          return f(it.UNTERMINATED_CLOSING_BRACE, s(), 0), y.braceNest = 0, q(g, y);
        if (G = b(g, y))
          return k = h(y, 5, Qt(g)), A(g), k;
        if (B = w(g, y))
          return k = h(y, 6, zt(g)), A(g), k;
        if (O = E(g, y))
          return k = h(y, 7, Ae(g)), A(g), k;
        if (!G && !B && !O)
          return k = h(y, 13, ui(g)), f(it.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, k.value), A(g), k;
        break;
      }
    }
    return k;
  }
  function D(g, y) {
    const { currentType: k } = y;
    let M = null;
    const G = g.currentChar();
    switch ((k === 8 || k === 9 || k === 12 || k === 10) && (G === te || G === Je) && f(it.INVALID_LINKED_FORMAT, s(), 0), G) {
      case "@":
        return g.next(), M = h(
          y,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), y.inLinked = !0, M;
      case ".":
        return A(g), g.next(), h(
          y,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return A(g), g.next(), h(
          y,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return V(g) ? (M = h(y, 1, L(g)), y.braceNest = 0, y.inLinked = !1, M) : C(g, y) || F(g, y) ? (A(g), D(g, y)) : N(g, y) ? (A(g), h(y, 12, x(g))) : $(g, y) ? (A(g), G === "{" ? R(g, y) || M : h(y, 11, T(g))) : (k === 8 && f(it.INVALID_LINKED_FORMAT, s(), 0), y.braceNest = 0, y.inLinked = !1, q(g, y));
    }
  }
  function q(g, y) {
    let k = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (y.braceNest > 0)
      return R(g, y) || d(y);
    if (y.inLinked)
      return D(g, y) || d(y);
    switch (g.currentChar()) {
      case "{":
        return R(g, y) || d(y);
      case "}":
        return f(it.UNBALANCED_CLOSING_BRACE, s(), 0), g.next(), h(
          y,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return D(g, y) || d(y);
      default: {
        if (V(g))
          return k = h(y, 1, L(g)), y.braceNest = 0, y.inLinked = !1, k;
        const { isModulo: G, hasSpace: B } = H(g);
        if (G)
          return B ? h(y, 0, De(g)) : h(y, 4, Re(g));
        if (j(g))
          return h(y, 0, De(g));
        break;
      }
    }
    return k;
  }
  function z() {
    const { currentType: g, offset: y, startLoc: k, endLoc: M } = l;
    return l.lastType = g, l.lastOffset = y, l.lastStartLoc = k, l.lastEndLoc = M, l.offset = r(), l.startLoc = s(), i.currentChar() === mn ? h(
      l,
      14
      /* TokenTypes.EOF */
    ) : q(i, l);
  }
  return {
    nextToken: z,
    currentOffset: r,
    currentPosition: s,
    context: c
  };
}
const $b = "parser", Bb = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Ub(t, e, n) {
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
function qb(t = {}) {
  const e = t.location !== !1, { onError: n, onWarn: i } = t;
  function r(b, w, E, C, ...N) {
    const F = b.currentPosition();
    if (F.offset += C, F.column += C, n) {
      const $ = e ? Vs(E, F) : null, V = $i(w, $, {
        domain: $b,
        args: N
      });
      n(V);
    }
  }
  function s(b, w, E, C, ...N) {
    const F = b.currentPosition();
    if (F.offset += C, F.column += C, i) {
      const $ = e ? Vs(E, F) : null;
      i(Cb(w, $, N));
    }
  }
  function o(b, w, E) {
    const C = { type: b };
    return e && (C.start = w, C.end = w, C.loc = { start: E, end: E }), C;
  }
  function a(b, w, E, C) {
    e && (b.end = w, b.loc && (b.loc.end = E));
  }
  function l(b, w) {
    const E = b.context(), C = o(3, E.offset, E.startLoc);
    return C.value = w, a(C, b.currentOffset(), b.currentPosition()), C;
  }
  function c(b, w) {
    const E = b.context(), { lastOffset: C, lastStartLoc: N } = E, F = o(5, C, N);
    return F.index = parseInt(w, 10), b.nextToken(), a(F, b.currentOffset(), b.currentPosition()), F;
  }
  function u(b, w, E) {
    const C = b.context(), { lastOffset: N, lastStartLoc: F } = C, $ = o(4, N, F);
    return $.key = w, E === !0 && ($.modulo = !0), b.nextToken(), a($, b.currentOffset(), b.currentPosition()), $;
  }
  function f(b, w) {
    const E = b.context(), { lastOffset: C, lastStartLoc: N } = E, F = o(9, C, N);
    return F.value = w.replace(Bb, Ub), b.nextToken(), a(F, b.currentOffset(), b.currentPosition()), F;
  }
  function h(b) {
    const w = b.nextToken(), E = b.context(), { lastOffset: C, lastStartLoc: N } = E, F = o(8, C, N);
    return w.type !== 12 ? (r(b, it.UNEXPECTED_EMPTY_LINKED_MODIFIER, E.lastStartLoc, 0), F.value = "", a(F, C, N), {
      nextConsumeToken: w,
      node: F
    }) : (w.value == null && r(b, it.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ce(w)), F.value = w.value || "", a(F, b.currentOffset(), b.currentPosition()), {
      node: F
    });
  }
  function d(b, w) {
    const E = b.context(), C = o(7, E.offset, E.startLoc);
    return C.value = w, a(C, b.currentOffset(), b.currentPosition()), C;
  }
  function p(b) {
    const w = b.context(), E = o(6, w.offset, w.startLoc);
    let C = b.nextToken();
    if (C.type === 9) {
      const N = h(b);
      E.modifier = N.node, C = N.nextConsumeToken || b.nextToken();
    }
    switch (C.type !== 10 && r(b, it.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Ce(C)), C = b.nextToken(), C.type === 2 && (C = b.nextToken()), C.type) {
      case 11:
        C.value == null && r(b, it.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Ce(C)), E.key = d(b, C.value || "");
        break;
      case 5:
        C.value == null && r(b, it.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Ce(C)), E.key = u(b, C.value || "");
        break;
      case 6:
        C.value == null && r(b, it.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Ce(C)), E.key = c(b, C.value || "");
        break;
      case 7:
        C.value == null && r(b, it.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Ce(C)), E.key = f(b, C.value || "");
        break;
      default: {
        r(b, it.UNEXPECTED_EMPTY_LINKED_KEY, w.lastStartLoc, 0);
        const N = b.context(), F = o(7, N.offset, N.startLoc);
        return F.value = "", a(F, N.offset, N.startLoc), E.key = F, a(E, N.offset, N.startLoc), {
          nextConsumeToken: C,
          node: E
        };
      }
    }
    return a(E, b.currentOffset(), b.currentPosition()), {
      node: E
    };
  }
  function S(b) {
    const w = b.context(), E = w.currentType === 1 ? b.currentOffset() : w.offset, C = w.currentType === 1 ? w.endLoc : w.startLoc, N = o(2, E, C);
    N.items = [];
    let F = null, $ = null;
    do {
      const j = F || b.nextToken();
      switch (F = null, j.type) {
        case 0:
          j.value == null && r(b, it.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Ce(j)), N.items.push(l(b, j.value || ""));
          break;
        case 6:
          j.value == null && r(b, it.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Ce(j)), N.items.push(c(b, j.value || ""));
          break;
        case 4:
          $ = !0;
          break;
        case 5:
          j.value == null && r(b, it.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Ce(j)), N.items.push(u(b, j.value || "", !!$)), $ && (s(b, Ml.USE_MODULO_SYNTAX, w.lastStartLoc, 0, Ce(j)), $ = null);
          break;
        case 7:
          j.value == null && r(b, it.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Ce(j)), N.items.push(f(b, j.value || ""));
          break;
        case 8: {
          const W = p(b);
          N.items.push(W.node), F = W.nextConsumeToken || null;
          break;
        }
      }
    } while (w.currentType !== 14 && w.currentType !== 1);
    const V = w.currentType === 1 ? w.lastOffset : b.currentOffset(), H = w.currentType === 1 ? w.lastEndLoc : b.currentPosition();
    return a(N, V, H), N;
  }
  function A(b, w, E, C) {
    const N = b.context();
    let F = C.items.length === 0;
    const $ = o(1, w, E);
    $.cases = [], $.cases.push(C);
    do {
      const V = S(b);
      F || (F = V.items.length === 0), $.cases.push(V);
    } while (N.currentType !== 14);
    return F && r(b, it.MUST_HAVE_MESSAGES_IN_PLURAL, E, 0), a($, b.currentOffset(), b.currentPosition()), $;
  }
  function v(b) {
    const w = b.context(), { offset: E, startLoc: C } = w, N = S(b);
    return w.currentType === 14 ? N : A(b, E, C, N);
  }
  function _(b) {
    const w = Fb(b, Ed({}, t)), E = w.context(), C = o(0, E.offset, E.startLoc);
    return e && C.loc && (C.loc.source = b), C.body = v(w), t.onCacheKey && (C.cacheKey = t.onCacheKey(b)), E.currentType !== 14 && r(w, it.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, b[E.offset] || ""), a(C, w.currentOffset(), w.currentPosition()), C;
  }
  return { parse: _ };
}
function Ce(t) {
  if (t.type === 14)
    return "EOF";
  const e = (t.value || "").replace(/\r?\n/gu, "\\n");
  return e.length > 10 ? e.slice(0, 9) + "…" : e;
}
function Hb(t, e = {}) {
  const n = {
    ast: t,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (s) => (n.helpers.add(s), s) };
}
function pu(t, e) {
  for (let n = 0; n < t.length; n++)
    Rl(t[n], e);
}
function Rl(t, e) {
  switch (t.type) {
    case 1:
      pu(t.cases, e), e.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      pu(t.items, e);
      break;
    case 6: {
      Rl(t.key, e), e.helper(
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
function Wb(t, e = {}) {
  const n = Hb(t);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), t.body && Rl(t.body, n);
  const i = n.context();
  t.helpers = Array.from(i.helpers);
}
function Vb(t) {
  const e = t.body;
  return e.type === 2 ? gu(e) : e.cases.forEach((n) => gu(n)), t;
}
function gu(t) {
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
      t.static = Td(e);
      for (let n = 0; n < t.items.length; n++) {
        const i = t.items[n];
        (i.type === 3 || i.type === 9) && delete i.value;
      }
    }
  }
}
const jb = "minifier";
function di(t) {
  switch (t.t = t.type, t.type) {
    case 0: {
      const e = t;
      di(e.body), e.b = e.body, delete e.body;
      break;
    }
    case 1: {
      const e = t, n = e.cases;
      for (let i = 0; i < n.length; i++)
        di(n[i]);
      e.c = n, delete e.cases;
      break;
    }
    case 2: {
      const e = t, n = e.items;
      for (let i = 0; i < n.length; i++)
        di(n[i]);
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
      di(e.key), e.k = e.key, delete e.key, e.modifier && (di(e.modifier), e.m = e.modifier, delete e.modifier);
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
      throw $i(it.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: jb,
        args: [t.type]
      });
  }
  delete t.type;
}
const zb = "parser";
function Gb(t, e) {
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
  function c(A, v) {
    a.code += A;
  }
  function u(A, v = !0) {
    const _ = v ? r : "";
    c(s ? _ + "  ".repeat(A) : _);
  }
  function f(A = !0) {
    const v = ++a.indentLevel;
    A && u(v);
  }
  function h(A = !0) {
    const v = --a.indentLevel;
    A && u(v);
  }
  function d() {
    u(a.indentLevel);
  }
  return {
    context: l,
    push: c,
    indent: f,
    deindent: h,
    newline: d,
    helper: (A) => `_${A}`,
    needIndent: () => a.needIndent
  };
}
function Yb(t, e) {
  const { helper: n } = t;
  t.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Ci(t, e.key), e.modifier ? (t.push(", "), Ci(t, e.modifier), t.push(", _type")) : t.push(", undefined, _type"), t.push(")");
}
function Kb(t, e) {
  const { helper: n, needIndent: i } = t;
  t.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), t.indent(i());
  const r = e.items.length;
  for (let s = 0; s < r && (Ci(t, e.items[s]), s !== r - 1); s++)
    t.push(", ");
  t.deindent(i()), t.push("])");
}
function Xb(t, e) {
  const { helper: n, needIndent: i } = t;
  if (e.cases.length > 1) {
    t.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), t.indent(i());
    const r = e.cases.length;
    for (let s = 0; s < r && (Ci(t, e.cases[s]), s !== r - 1); s++)
      t.push(", ");
    t.deindent(i()), t.push("])");
  }
}
function Jb(t, e) {
  e.body ? Ci(t, e.body) : t.push("null");
}
function Ci(t, e) {
  const { helper: n } = t;
  switch (e.type) {
    case 0:
      Jb(t, e);
      break;
    case 1:
      Xb(t, e);
      break;
    case 2:
      Kb(t, e);
      break;
    case 6:
      Yb(t, e);
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
      throw $i(it.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: zb,
        args: [e.type]
      });
  }
}
const Qb = (t, e = {}) => {
  const n = hu(e.mode) ? e.mode : "normal", i = hu(e.filename) ? e.filename : "message.intl", r = !!e.sourceMap, s = e.breakLineCode != null ? e.breakLineCode : n === "arrow" ? ";" : `
`, o = e.needIndent ? e.needIndent : n !== "arrow", a = t.helpers || [], l = Gb(t, {
    mode: n,
    filename: i,
    sourceMap: r,
    breakLineCode: s,
    needIndent: o
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(o), a.length > 0 && (l.push(`const { ${Td(a.map((f) => `${f}: _${f}`), ", ")} } = ctx`), l.newline()), l.push("return "), Ci(l, t), l.deindent(o), l.push("}"), delete t.helpers;
  const { code: c, map: u } = l.context();
  return {
    ast: t,
    code: c,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Zb(t, e = {}) {
  const n = Ed({}, e), i = !!n.jit, r = !!n.minify, s = n.optimize == null ? !0 : n.optimize, a = qb(n).parse(t);
  return i ? (s && Vb(a), r && di(a), { ast: a, code: "" }) : (Wb(a, n), Qb(a, n));
}
/*!
 * core-base v9.13.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
function t0() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Ll().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Fn = [];
Fn[
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
Fn[
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
Fn[
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
Fn[
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
Fn[
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
Fn[
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
Fn[
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
const e0 = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function n0(t) {
  return e0.test(t);
}
function i0(t) {
  const e = t.charCodeAt(0), n = t.charCodeAt(t.length - 1);
  return e === n && (e === 34 || e === 39) ? t.slice(1, -1) : t;
}
function r0(t) {
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
function s0(t) {
  const e = t.trim();
  return t.charAt(0) === "0" && isNaN(parseInt(t)) ? !1 : n0(e) ? i0(e) : "*" + e;
}
function o0(t) {
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
      if (r = 0, o === void 0 || (o = s0(o), o === !1))
        return !1;
      h[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function d() {
    const p = t[n + 1];
    if (i === 5 && p === "'" || i === 6 && p === '"')
      return n++, a = "\\" + p, h[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; i !== null; )
    if (n++, s = t[n], !(s === "\\" && d())) {
      if (l = r0(s), f = Fn[i], c = f[l] || f.l || 8, c === 8 || (i = c[0], c[1] !== void 0 && (u = h[c[1]], u && (a = s, u() === !1))))
        return;
      if (i === 7)
        return e;
    }
}
const mu = /* @__PURE__ */ new Map();
function a0(t, e) {
  return yt(t) ? t[e] : null;
}
function l0(t, e) {
  if (!yt(t))
    return null;
  let n = mu.get(e);
  if (n || (n = o0(e), n && mu.set(e, n)), !n)
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
const c0 = (t) => t, u0 = (t) => "", f0 = "text", h0 = (t) => t.length === 0 ? "" : xb(t), d0 = wb;
function yu(t, e) {
  return t = Math.abs(t), e === 2 ? t ? t > 1 ? 1 : 0 : 1 : t ? Math.min(t, 2) : 0;
}
function p0(t) {
  const e = Vt(t.pluralIndex) ? t.pluralIndex : -1;
  return t.named && (Vt(t.named.count) || Vt(t.named.n)) ? Vt(t.named.count) ? t.named.count : Vt(t.named.n) ? t.named.n : e : e;
}
function g0(t, e) {
  e.count || (e.count = t), e.n || (e.n = t);
}
function m0(t = {}) {
  const e = t.locale, n = p0(t), i = yt(t.pluralRules) && J(e) && It(t.pluralRules[e]) ? t.pluralRules[e] : yu, r = yt(t.pluralRules) && J(e) && It(t.pluralRules[e]) ? yu : void 0, s = (v) => v[i(n, v.length, r)], o = t.list || [], a = (v) => o[v], l = t.named || {};
  Vt(t.pluralIndex) && g0(n, l);
  const c = (v) => l[v];
  function u(v) {
    const _ = It(t.messages) ? t.messages(v) : yt(t.messages) ? t.messages[v] : !1;
    return _ || (t.parent ? t.parent.message(v) : u0);
  }
  const f = (v) => t.modifiers ? t.modifiers[v] : c0, h = ht(t.processor) && It(t.processor.normalize) ? t.processor.normalize : h0, d = ht(t.processor) && It(t.processor.interpolate) ? t.processor.interpolate : d0, p = ht(t.processor) && J(t.processor.type) ? t.processor.type : f0, A = {
    list: a,
    named: c,
    plural: s,
    linked: (v, ..._) => {
      const [b, w] = _;
      let E = "text", C = "";
      _.length === 1 ? yt(b) ? (C = b.modifier || C, E = b.type || E) : J(b) && (C = b || C) : _.length === 2 && (J(b) && (C = b || C), J(w) && (E = w || E));
      const N = u(v)(A), F = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        E === "vnode" && qt(N) && C ? N[0] : N
      );
      return C ? f(C)(F, E) : F;
    },
    message: u,
    type: p,
    interpolate: d,
    normalize: h,
    values: Jt({}, o, l)
  };
  return A;
}
let gr = null;
function y0(t) {
  gr = t;
}
function b0(t, e, n) {
  gr && gr.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: t,
    version: e,
    meta: n
  });
}
const v0 = /* @__PURE__ */ _0(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function _0(t) {
  return (e) => gr && gr.emit(t, e);
}
const Ad = Ml.__EXTEND_POINT__, qn = Eo(Ad), w0 = {
  NOT_FOUND_KEY: Ad,
  // 2
  FALLBACK_TO_TRANSLATE: qn(),
  // 3
  CANNOT_FORMAT_NUMBER: qn(),
  // 4
  FALLBACK_TO_NUMBER_FORMAT: qn(),
  // 5
  CANNOT_FORMAT_DATE: qn(),
  // 6
  FALLBACK_TO_DATE_FORMAT: qn(),
  // 7
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: qn(),
  // 8
  __EXTEND_POINT__: qn()
  // 9
}, Cd = it.__EXTEND_POINT__, Hn = Eo(Cd), We = {
  INVALID_ARGUMENT: Cd,
  // 17
  INVALID_DATE_ARGUMENT: Hn(),
  // 18
  INVALID_ISO_DATE_ARGUMENT: Hn(),
  // 19
  NOT_SUPPORT_NON_STRING_MESSAGE: Hn(),
  // 20
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: Hn(),
  // 21
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: Hn(),
  // 22
  NOT_SUPPORT_LOCALE_TYPE: Hn(),
  // 23
  __EXTEND_POINT__: Hn()
  // 24
};
function rn(t) {
  return $i(t, null, void 0);
}
function Dl(t, e) {
  return e.locale != null ? bu(e.locale) : bu(t.locale);
}
let Jo;
function bu(t) {
  if (J(t))
    return t;
  if (It(t)) {
    if (t.resolvedOnce && Jo != null)
      return Jo;
    if (t.constructor.name === "Function") {
      const e = t();
      if (_b(e))
        throw rn(We.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Jo = e;
    } else
      throw rn(We.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw rn(We.NOT_SUPPORT_LOCALE_TYPE);
}
function x0(t, e, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...qt(e) ? e : yt(e) ? Object.keys(e) : J(e) ? [e] : [n]
  ])];
}
function Od(t, e, n) {
  const i = J(n) ? n : js, r = t;
  r.__localeChainCache || (r.__localeChainCache = /* @__PURE__ */ new Map());
  let s = r.__localeChainCache.get(i);
  if (!s) {
    s = [];
    let o = [n];
    for (; qt(o); )
      o = vu(s, o, e);
    const a = qt(e) || !ht(e) ? e : e.default ? e.default : null;
    o = J(a) ? [a] : a, qt(o) && vu(s, o, !1), r.__localeChainCache.set(i, s);
  }
  return s;
}
function vu(t, e, n) {
  let i = !0;
  for (let r = 0; r < e.length && Pt(i); r++) {
    const s = e[r];
    J(s) && (i = S0(t, e[r], n));
  }
  return i;
}
function S0(t, e, n) {
  let i;
  const r = e.split("-");
  do {
    const s = r.join("-");
    i = k0(t, s, n), r.splice(-1, 1);
  } while (r.length && i === !0);
  return i;
}
function k0(t, e, n) {
  let i = !1;
  if (!t.includes(e) && (i = !0, e)) {
    i = e[e.length - 1] !== "!";
    const r = e.replace(/!/g, "");
    t.push(r), (qt(n) || ht(n)) && n[r] && (i = n[r]);
  }
  return i;
}
const E0 = "9.13.1", To = -1, js = "en-US", _u = "", wu = (t) => `${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;
function T0() {
  return {
    upper: (t, e) => e === "text" && J(t) ? t.toUpperCase() : e === "vnode" && yt(t) && "__v_isVNode" in t ? t.children.toUpperCase() : t,
    lower: (t, e) => e === "text" && J(t) ? t.toLowerCase() : e === "vnode" && yt(t) && "__v_isVNode" in t ? t.children.toLowerCase() : t,
    capitalize: (t, e) => e === "text" && J(t) ? wu(t) : e === "vnode" && yt(t) && "__v_isVNode" in t ? wu(t.children) : t
  };
}
let Pd;
function A0(t) {
  Pd = t;
}
let Nd;
function C0(t) {
  Nd = t;
}
let Id;
function O0(t) {
  Id = t;
}
let Ld = null;
const P0 = /* @__NO_SIDE_EFFECTS__ */ (t) => {
  Ld = t;
}, N0 = /* @__NO_SIDE_EFFECTS__ */ () => Ld;
let Md = null;
const xu = (t) => {
  Md = t;
}, I0 = () => Md;
let Su = 0;
function L0(t = {}) {
  const e = It(t.onWarn) ? t.onWarn : Sb, n = J(t.version) ? t.version : E0, i = J(t.locale) || It(t.locale) ? t.locale : js, r = It(i) ? js : i, s = qt(t.fallbackLocale) || ht(t.fallbackLocale) || J(t.fallbackLocale) || t.fallbackLocale === !1 ? t.fallbackLocale : r, o = ht(t.messages) ? t.messages : { [r]: {} }, a = ht(t.datetimeFormats) ? t.datetimeFormats : { [r]: {} }, l = ht(t.numberFormats) ? t.numberFormats : { [r]: {} }, c = Jt({}, t.modifiers || {}, T0()), u = t.pluralRules || {}, f = It(t.missing) ? t.missing : null, h = Pt(t.missingWarn) || Hs(t.missingWarn) ? t.missingWarn : !0, d = Pt(t.fallbackWarn) || Hs(t.fallbackWarn) ? t.fallbackWarn : !0, p = !!t.fallbackFormat, S = !!t.unresolving, A = It(t.postTranslation) ? t.postTranslation : null, v = ht(t.processor) ? t.processor : null, _ = Pt(t.warnHtmlMessage) ? t.warnHtmlMessage : !0, b = !!t.escapeParameter, w = It(t.messageCompiler) ? t.messageCompiler : Pd, E = It(t.messageResolver) ? t.messageResolver : Nd || a0, C = It(t.localeFallbacker) ? t.localeFallbacker : Id || x0, N = yt(t.fallbackContext) ? t.fallbackContext : void 0, F = t, $ = yt(F.__datetimeFormatters) ? F.__datetimeFormatters : /* @__PURE__ */ new Map(), V = yt(F.__numberFormatters) ? F.__numberFormatters : /* @__PURE__ */ new Map(), H = yt(F.__meta) ? F.__meta : {};
  Su++;
  const j = {
    version: n,
    cid: Su,
    locale: i,
    fallbackLocale: s,
    messages: o,
    modifiers: c,
    pluralRules: u,
    missing: f,
    missingWarn: h,
    fallbackWarn: d,
    fallbackFormat: p,
    unresolving: S,
    postTranslation: A,
    processor: v,
    warnHtmlMessage: _,
    escapeParameter: b,
    messageCompiler: w,
    messageResolver: E,
    localeFallbacker: C,
    fallbackContext: N,
    onWarn: e,
    __meta: H
  };
  return j.datetimeFormats = a, j.numberFormats = l, j.__datetimeFormatters = $, j.__numberFormatters = V, __INTLIFY_PROD_DEVTOOLS__ && b0(j, n, H), j;
}
function Fl(t, e, n, i, r) {
  const { missing: s, onWarn: o } = t;
  if (s !== null) {
    const a = s(t, n, e, r);
    return J(a) ? a : e;
  } else
    return e;
}
function Gi(t, e, n) {
  const i = t;
  i.__localeChainCache = /* @__PURE__ */ new Map(), t.localeFallbacker(t, n, e);
}
function M0(t, e) {
  return t === e ? !1 : t.split("-")[0] === e.split("-")[0];
}
function R0(t, e) {
  const n = e.indexOf(t);
  if (n === -1)
    return !1;
  for (let i = n + 1; i < e.length; i++)
    if (M0(t, e[i]))
      return !0;
  return !1;
}
function Qo(t) {
  return (n) => D0(n, t);
}
function D0(t, e) {
  const n = e.b || e.body;
  if ((n.t || n.type) === 1) {
    const i = n, r = i.c || i.cases;
    return t.plural(r.reduce((s, o) => [
      ...s,
      ku(t, o)
    ], []));
  } else
    return ku(t, n);
}
function ku(t, e) {
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
const F0 = (t) => t;
let Yr = /* @__PURE__ */ Object.create(null);
const Oi = (t) => yt(t) && (t.t === 0 || t.type === 0) && ("b" in t || "body" in t);
function $0(t, e = {}) {
  let n = !1;
  const i = e.onError || Pb;
  return e.onError = (r) => {
    n = !0, i(r);
  }, { ...Zb(t, e), detectError: n };
}
function B0(t, e) {
  if (J(t)) {
    Pt(e.warnHtmlMessage) && e.warnHtmlMessage;
    const i = (e.onCacheKey || F0)(t), r = Yr[i];
    if (r)
      return r;
    const { ast: s, detectError: o } = $0(t, {
      ...e,
      location: !1,
      jit: !0
    }), a = Qo(s);
    return o ? a : Yr[i] = a;
  } else {
    const n = t.cacheKey;
    if (n) {
      const i = Yr[n];
      return i || (Yr[n] = Qo(t));
    } else
      return Qo(t);
  }
}
const Eu = () => "", _e = (t) => It(t);
function Tu(t, ...e) {
  const { fallbackFormat: n, postTranslation: i, unresolving: r, messageCompiler: s, fallbackLocale: o, messages: a } = t, [l, c] = Ta(...e), u = Pt(c.missingWarn) ? c.missingWarn : t.missingWarn, f = Pt(c.fallbackWarn) ? c.fallbackWarn : t.fallbackWarn, h = Pt(c.escapeParameter) ? c.escapeParameter : t.escapeParameter, d = !!c.resolvedMessage, p = J(c.default) || Pt(c.default) ? Pt(c.default) ? s ? l : () => l : c.default : n ? s ? l : () => l : "", S = n || p !== "", A = Dl(t, c);
  h && U0(c);
  let [v, _, b] = d ? [
    l,
    A,
    a[A] || {}
  ] : Rd(t, l, A, o, f, u), w = v, E = l;
  if (!d && !(J(w) || Oi(w) || _e(w)) && S && (w = p, E = w), !d && (!(J(w) || Oi(w) || _e(w)) || !J(_)))
    return r ? To : l;
  let C = !1;
  const N = () => {
    C = !0;
  }, F = _e(w) ? w : Dd(t, l, _, w, E, N);
  if (C)
    return w;
  const $ = W0(t, _, b, c), V = m0($), H = q0(t, F, V), j = i ? i(H, l) : H;
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const W = {
      timestamp: Date.now(),
      key: J(l) ? l : _e(w) ? w.key : "",
      locale: _ || (_e(w) ? w.locale : ""),
      format: J(w) ? w : _e(w) ? w.source : "",
      message: j
    };
    W.meta = Jt({}, t.__meta, /* @__PURE__ */ N0() || {}), v0(W);
  }
  return j;
}
function U0(t) {
  qt(t.list) ? t.list = t.list.map((e) => J(e) ? fu(e) : e) : yt(t.named) && Object.keys(t.named).forEach((e) => {
    J(t.named[e]) && (t.named[e] = fu(t.named[e]));
  });
}
function Rd(t, e, n, i, r, s) {
  const { messages: o, onWarn: a, messageResolver: l, localeFallbacker: c } = t, u = c(t, i, n);
  let f = {}, h, d = null;
  const p = "translate";
  for (let S = 0; S < u.length && (h = u[S], f = o[h] || {}, (d = l(f, e)) === null && (d = f[e]), !(J(d) || Oi(d) || _e(d))); S++)
    if (!R0(h, u)) {
      const A = Fl(
        t,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        e,
        h,
        s,
        p
      );
      A !== e && (d = A);
    }
  return [d, h, f];
}
function Dd(t, e, n, i, r, s) {
  const { messageCompiler: o, warnHtmlMessage: a } = t;
  if (_e(i)) {
    const c = i;
    return c.locale = c.locale || n, c.key = c.key || e, c;
  }
  if (o == null) {
    const c = () => i;
    return c.locale = n, c.key = e, c;
  }
  const l = o(i, H0(t, n, r, i, a, s));
  return l.locale = n, l.key = e, l.source = i, l;
}
function q0(t, e, n) {
  return e(n);
}
function Ta(...t) {
  const [e, n, i] = t, r = {};
  if (!J(e) && !Vt(e) && !_e(e) && !Oi(e))
    throw rn(We.INVALID_ARGUMENT);
  const s = Vt(e) ? String(e) : (_e(e), e);
  return Vt(n) ? r.plural = n : J(n) ? r.default = n : ht(n) && !ko(n) ? r.named = n : qt(n) && (r.list = n), Vt(i) ? r.plural = i : J(i) ? r.default = i : ht(i) && Jt(r, i), [s, r];
}
function H0(t, e, n, i, r, s) {
  return {
    locale: e,
    key: n,
    warnHtmlMessage: r,
    onError: (o) => {
      throw s && s(o), o;
    },
    onCacheKey: (o) => mb(e, n, o)
  };
}
function W0(t, e, n, i) {
  const { modifiers: r, pluralRules: s, messageResolver: o, fallbackLocale: a, fallbackWarn: l, missingWarn: c, fallbackContext: u } = t, h = {
    locale: e,
    modifiers: r,
    pluralRules: s,
    messages: (d) => {
      let p = o(n, d);
      if (p == null && u) {
        const [, , S] = Rd(u, d, e, a, l, c);
        p = o(S, d);
      }
      if (J(p) || Oi(p)) {
        let S = !1;
        const v = Dd(t, d, e, p, d, () => {
          S = !0;
        });
        return S ? Eu : v;
      } else
        return _e(p) ? p : Eu;
    }
  };
  return t.processor && (h.processor = t.processor), i.list && (h.list = i.list), i.named && (h.named = i.named), Vt(i.plural) && (h.pluralIndex = i.plural), h;
}
function Au(t, ...e) {
  const { datetimeFormats: n, unresolving: i, fallbackLocale: r, onWarn: s, localeFallbacker: o } = t, { __datetimeFormatters: a } = t, [l, c, u, f] = Aa(...e), h = Pt(u.missingWarn) ? u.missingWarn : t.missingWarn;
  Pt(u.fallbackWarn) ? u.fallbackWarn : t.fallbackWarn;
  const d = !!u.part, p = Dl(t, u), S = o(
    t,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    p
  );
  if (!J(l) || l === "")
    return new Intl.DateTimeFormat(p, f).format(c);
  let A = {}, v, _ = null;
  const b = "datetime format";
  for (let C = 0; C < S.length && (v = S[C], A = n[v] || {}, _ = A[l], !ht(_)); C++)
    Fl(t, l, v, h, b);
  if (!ht(_) || !J(v))
    return i ? To : l;
  let w = `${v}__${l}`;
  ko(f) || (w = `${w}__${JSON.stringify(f)}`);
  let E = a.get(w);
  return E || (E = new Intl.DateTimeFormat(v, Jt({}, _, f)), a.set(w, E)), d ? E.formatToParts(c) : E.format(c);
}
const Fd = [
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
  if (J(e)) {
    const l = e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw rn(We.INVALID_ISO_DATE_ARGUMENT);
    const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    a = new Date(c);
    try {
      a.toISOString();
    } catch {
      throw rn(We.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (bb(e)) {
    if (isNaN(e.getTime()))
      throw rn(We.INVALID_DATE_ARGUMENT);
    a = e;
  } else if (Vt(e))
    a = e;
  else
    throw rn(We.INVALID_ARGUMENT);
  return J(n) ? s.key = n : ht(n) && Object.keys(n).forEach((l) => {
    Fd.includes(l) ? o[l] = n[l] : s[l] = n[l];
  }), J(i) ? s.locale = i : ht(i) && (o = i), ht(r) && (o = r), [s.key || "", a, s, o];
}
function Cu(t, e, n) {
  const i = t;
  for (const r in n) {
    const s = `${e}__${r}`;
    i.__datetimeFormatters.has(s) && i.__datetimeFormatters.delete(s);
  }
}
function Ou(t, ...e) {
  const { numberFormats: n, unresolving: i, fallbackLocale: r, onWarn: s, localeFallbacker: o } = t, { __numberFormatters: a } = t, [l, c, u, f] = Ca(...e), h = Pt(u.missingWarn) ? u.missingWarn : t.missingWarn;
  Pt(u.fallbackWarn) ? u.fallbackWarn : t.fallbackWarn;
  const d = !!u.part, p = Dl(t, u), S = o(
    t,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    p
  );
  if (!J(l) || l === "")
    return new Intl.NumberFormat(p, f).format(c);
  let A = {}, v, _ = null;
  const b = "number format";
  for (let C = 0; C < S.length && (v = S[C], A = n[v] || {}, _ = A[l], !ht(_)); C++)
    Fl(t, l, v, h, b);
  if (!ht(_) || !J(v))
    return i ? To : l;
  let w = `${v}__${l}`;
  ko(f) || (w = `${w}__${JSON.stringify(f)}`);
  let E = a.get(w);
  return E || (E = new Intl.NumberFormat(v, Jt({}, _, f)), a.set(w, E)), d ? E.formatToParts(c) : E.format(c);
}
const $d = [
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
    throw rn(We.INVALID_ARGUMENT);
  const a = e;
  return J(n) ? s.key = n : ht(n) && Object.keys(n).forEach((l) => {
    $d.includes(l) ? o[l] = n[l] : s[l] = n[l];
  }), J(i) ? s.locale = i : ht(i) && (o = i), ht(r) && (o = r), [s.key || "", a, s, o];
}
function Pu(t, e, n) {
  const i = t;
  for (const r in n) {
    const s = `${e}__${r}`;
    i.__numberFormatters.has(s) && i.__numberFormatters.delete(s);
  }
}
t0();
/*!
 * vue-i18n v9.13.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
const V0 = "9.13.1";
function j0() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Ll().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Bd = w0.__EXTEND_POINT__, Qe = Eo(Bd);
Qe(), Qe(), Qe(), Qe(), Qe(), Qe(), Qe(), Qe(), Qe();
const Ud = We.__EXTEND_POINT__, re = Eo(Ud), Ee = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Ud,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: re(),
  // 25
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: re(),
  // 26
  NOT_INSTALLED: re(),
  // 27
  NOT_AVAILABLE_IN_LEGACY_MODE: re(),
  // 28
  // directive module errors
  REQUIRED_VALUE: re(),
  // 29
  INVALID_VALUE: re(),
  // 30
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: re(),
  // 31
  NOT_INSTALLED_WITH_PROVIDE: re(),
  // 32
  // unexpected error
  UNEXPECTED_ERROR: re(),
  // 33
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: re(),
  // 34
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: re(),
  // 35
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: re(),
  // 36
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: re(),
  // 37
  // for enhancement
  __EXTEND_POINT__: re()
  // 38
};
function Me(t, ...e) {
  return $i(t, null, void 0);
}
const Oa = /* @__PURE__ */ Dn("__translateVNode"), Pa = /* @__PURE__ */ Dn("__datetimeParts"), Na = /* @__PURE__ */ Dn("__numberParts"), z0 = Dn("__setPluralRules"), G0 = /* @__PURE__ */ Dn("__injectWithOption"), Ia = /* @__PURE__ */ Dn("__dispose");
function mr(t) {
  if (!yt(t))
    return t;
  for (const e in t)
    if (Ws(t, e))
      if (!e.includes("."))
        yt(t[e]) && mr(t[e]);
      else {
        const n = e.split("."), i = n.length - 1;
        let r = t, s = !1;
        for (let o = 0; o < i; o++) {
          if (n[o] in r || (r[n[o]] = {}), !yt(r[n[o]])) {
            s = !0;
            break;
          }
          r = r[n[o]];
        }
        s || (r[n[i]] = t[e], delete t[e]), yt(r[n[i]]) && mr(r[n[i]]);
      }
  return t;
}
function qd(t, e) {
  const { messages: n, __i18n: i, messageResolver: r, flatJson: s } = e, o = ht(n) ? n : qt(i) ? {} : { [t]: {} };
  if (qt(i) && i.forEach((a) => {
    if ("locale" in a && "resource" in a) {
      const { locale: l, resource: c } = a;
      l ? (o[l] = o[l] || {}, Ss(c, o[l])) : Ss(c, o);
    } else
      J(a) && Ss(JSON.parse(a), o);
  }), r == null && s)
    for (const a in o)
      Ws(o, a) && mr(o[a]);
  return o;
}
function Hd(t) {
  return t.type;
}
function Y0(t, e, n) {
  let i = yt(e.messages) ? e.messages : {};
  "__i18nGlobal" in n && (i = qd(t.locale.value, {
    messages: i,
    __i18n: n.__i18nGlobal
  }));
  const r = Object.keys(i);
  r.length && r.forEach((s) => {
    t.mergeLocaleMessage(s, i[s]);
  });
  {
    if (yt(e.datetimeFormats)) {
      const s = Object.keys(e.datetimeFormats);
      s.length && s.forEach((o) => {
        t.mergeDateTimeFormat(o, e.datetimeFormats[o]);
      });
    }
    if (yt(e.numberFormats)) {
      const s = Object.keys(e.numberFormats);
      s.length && s.forEach((o) => {
        t.mergeNumberFormat(o, e.numberFormats[o]);
      });
    }
  }
}
function Nu(t) {
  return gt(Or, null, t, 0);
}
const Iu = "__INTLIFY_META__", Lu = () => [], K0 = () => !1;
let Mu = 0;
function Ru(t) {
  return (e, n, i, r) => t(n, i, xo() || void 0, r);
}
const X0 = /* @__NO_SIDE_EFFECTS__ */ () => {
  const t = xo();
  let e = null;
  return t && (e = Hd(t)[Iu]) ? { [Iu]: e } : null;
};
function Wd(t = {}, e) {
  const { __root: n, __injectWithOption: i } = t, r = n === void 0, s = t.flatJson, o = qs ? wi : gi, a = !!t.translateExistCompatible;
  let l = Pt(t.inheritLocale) ? t.inheritLocale : !0;
  const c = o(
    // prettier-ignore
    n && l ? n.locale.value : J(t.locale) ? t.locale : js
  ), u = o(
    // prettier-ignore
    n && l ? n.fallbackLocale.value : J(t.fallbackLocale) || qt(t.fallbackLocale) || ht(t.fallbackLocale) || t.fallbackLocale === !1 ? t.fallbackLocale : c.value
  ), f = o(qd(c.value, t)), h = o(ht(t.datetimeFormats) ? t.datetimeFormats : { [c.value]: {} }), d = o(ht(t.numberFormats) ? t.numberFormats : { [c.value]: {} });
  let p = n ? n.missingWarn : Pt(t.missingWarn) || Hs(t.missingWarn) ? t.missingWarn : !0, S = n ? n.fallbackWarn : Pt(t.fallbackWarn) || Hs(t.fallbackWarn) ? t.fallbackWarn : !0, A = n ? n.fallbackRoot : Pt(t.fallbackRoot) ? t.fallbackRoot : !0, v = !!t.fallbackFormat, _ = It(t.missing) ? t.missing : null, b = It(t.missing) ? Ru(t.missing) : null, w = It(t.postTranslation) ? t.postTranslation : null, E = n ? n.warnHtmlMessage : Pt(t.warnHtmlMessage) ? t.warnHtmlMessage : !0, C = !!t.escapeParameter;
  const N = n ? n.modifiers : ht(t.modifiers) ? t.modifiers : {};
  let F = t.pluralRules || n && n.pluralRules, $;
  $ = (() => {
    r && xu(null);
    const O = {
      version: V0,
      locale: c.value,
      fallbackLocale: u.value,
      messages: f.value,
      modifiers: N,
      pluralRules: F,
      missing: b === null ? void 0 : b,
      missingWarn: p,
      fallbackWarn: S,
      fallbackFormat: v,
      unresolving: !0,
      postTranslation: w === null ? void 0 : w,
      warnHtmlMessage: E,
      escapeParameter: C,
      messageResolver: t.messageResolver,
      messageCompiler: t.messageCompiler,
      __meta: { framework: "vue" }
    };
    O.datetimeFormats = h.value, O.numberFormats = d.value, O.__datetimeFormatters = ht($) ? $.__datetimeFormatters : void 0, O.__numberFormatters = ht($) ? $.__numberFormatters : void 0;
    const I = L0(O);
    return r && xu(I), I;
  })(), Gi($, c.value, u.value);
  function H() {
    return [
      c.value,
      u.value,
      f.value,
      h.value,
      d.value
    ];
  }
  const j = ve({
    get: () => c.value,
    set: (O) => {
      c.value = O, $.locale = c.value;
    }
  }), W = ve({
    get: () => u.value,
    set: (O) => {
      u.value = O, $.fallbackLocale = u.value, Gi($, c.value, O);
    }
  }), rt = ve(() => f.value), Dt = /* @__PURE__ */ ve(() => h.value), pt = /* @__PURE__ */ ve(() => d.value);
  function ct() {
    return It(w) ? w : null;
  }
  function at(O) {
    w = O, $.postTranslation = O;
  }
  function xt() {
    return _;
  }
  function fe(O) {
    O !== null && (b = Ru(O)), _ = O, $.missing = b;
  }
  const Nt = (O, I, tt, st, vt, Yt) => {
    H();
    let de;
    try {
      __INTLIFY_PROD_DEVTOOLS__, r || ($.fallbackContext = n ? I0() : void 0), de = O($);
    } finally {
      __INTLIFY_PROD_DEVTOOLS__, r || ($.fallbackContext = void 0);
    }
    if (tt !== "translate exists" && // for not `te` (e.g `t`)
    Vt(de) && de === To || tt === "translate exists" && !de) {
      const [Br, fi] = I();
      return n && A ? st(n) : vt(Br);
    } else {
      if (Yt(de))
        return de;
      throw Me(Ee.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Mt(...O) {
    return Nt((I) => Reflect.apply(Tu, null, [I, ...O]), () => Ta(...O), "translate", (I) => Reflect.apply(I.t, I, [...O]), (I) => I, (I) => J(I));
  }
  function Re(...O) {
    const [I, tt, st] = O;
    if (st && !yt(st))
      throw Me(Ee.INVALID_ARGUMENT);
    return Mt(I, tt, Jt({ resolvedMessage: !0 }, st || {}));
  }
  function De(...O) {
    return Nt((I) => Reflect.apply(Au, null, [I, ...O]), () => Aa(...O), "datetime format", (I) => Reflect.apply(I.d, I, [...O]), () => _u, (I) => J(I));
  }
  function Qt(...O) {
    return Nt((I) => Reflect.apply(Ou, null, [I, ...O]), () => Ca(...O), "number format", (I) => Reflect.apply(I.n, I, [...O]), () => _u, (I) => J(I));
  }
  function zt(O) {
    return O.map((I) => J(I) || Vt(I) || Pt(I) ? Nu(String(I)) : I);
  }
  const Ae = {
    normalize: zt,
    interpolate: (O) => O,
    type: "vnode"
  };
  function Fe(...O) {
    return Nt(
      (I) => {
        let tt;
        const st = I;
        try {
          st.processor = Ae, tt = Reflect.apply(Tu, null, [st, ...O]);
        } finally {
          st.processor = null;
        }
        return tt;
      },
      () => Ta(...O),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (I) => I[Oa](...O),
      (I) => [Nu(I)],
      (I) => qt(I)
    );
  }
  function he(...O) {
    return Nt(
      (I) => Reflect.apply(Ou, null, [I, ...O]),
      () => Ca(...O),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (I) => I[Na](...O),
      Lu,
      (I) => J(I) || qt(I)
    );
  }
  function Xe(...O) {
    return Nt(
      (I) => Reflect.apply(Au, null, [I, ...O]),
      () => Aa(...O),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (I) => I[Pa](...O),
      Lu,
      (I) => J(I) || qt(I)
    );
  }
  function ui(O) {
    F = O, $.pluralRules = F;
  }
  function x(O, I) {
    return Nt(() => {
      if (!O)
        return !1;
      const tt = J(I) ? I : c.value, st = R(tt), vt = $.messageResolver(st, O);
      return a ? vt != null : Oi(vt) || _e(vt) || J(vt);
    }, () => [O], "translate exists", (tt) => Reflect.apply(tt.te, tt, [O, I]), K0, (tt) => Pt(tt));
  }
  function T(O) {
    let I = null;
    const tt = Od($, u.value, c.value);
    for (let st = 0; st < tt.length; st++) {
      const vt = f.value[tt[st]] || {}, Yt = $.messageResolver(vt, O);
      if (Yt != null) {
        I = Yt;
        break;
      }
    }
    return I;
  }
  function L(O) {
    const I = T(O);
    return I ?? (n ? n.tm(O) || {} : {});
  }
  function R(O) {
    return f.value[O] || {};
  }
  function D(O, I) {
    if (s) {
      const tt = { [O]: I };
      for (const st in tt)
        Ws(tt, st) && mr(tt[st]);
      I = tt[O];
    }
    f.value[O] = I, $.messages = f.value;
  }
  function q(O, I) {
    f.value[O] = f.value[O] || {};
    const tt = { [O]: I };
    if (s)
      for (const st in tt)
        Ws(tt, st) && mr(tt[st]);
    I = tt[O], Ss(I, f.value[O]), $.messages = f.value;
  }
  function z(O) {
    return h.value[O] || {};
  }
  function g(O, I) {
    h.value[O] = I, $.datetimeFormats = h.value, Cu($, O, I);
  }
  function y(O, I) {
    h.value[O] = Jt(h.value[O] || {}, I), $.datetimeFormats = h.value, Cu($, O, I);
  }
  function k(O) {
    return d.value[O] || {};
  }
  function M(O, I) {
    d.value[O] = I, $.numberFormats = d.value, Pu($, O, I);
  }
  function G(O, I) {
    d.value[O] = Jt(d.value[O] || {}, I), $.numberFormats = d.value, Pu($, O, I);
  }
  Mu++, n && qs && (on(n.locale, (O) => {
    l && (c.value = O, $.locale = O, Gi($, c.value, u.value));
  }), on(n.fallbackLocale, (O) => {
    l && (u.value = O, $.fallbackLocale = O, Gi($, c.value, u.value));
  }));
  const B = {
    id: Mu,
    locale: j,
    fallbackLocale: W,
    get inheritLocale() {
      return l;
    },
    set inheritLocale(O) {
      l = O, O && n && (c.value = n.locale.value, u.value = n.fallbackLocale.value, Gi($, c.value, u.value));
    },
    get availableLocales() {
      return Object.keys(f.value).sort();
    },
    messages: rt,
    get modifiers() {
      return N;
    },
    get pluralRules() {
      return F || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return p;
    },
    set missingWarn(O) {
      p = O, $.missingWarn = p;
    },
    get fallbackWarn() {
      return S;
    },
    set fallbackWarn(O) {
      S = O, $.fallbackWarn = S;
    },
    get fallbackRoot() {
      return A;
    },
    set fallbackRoot(O) {
      A = O;
    },
    get fallbackFormat() {
      return v;
    },
    set fallbackFormat(O) {
      v = O, $.fallbackFormat = v;
    },
    get warnHtmlMessage() {
      return E;
    },
    set warnHtmlMessage(O) {
      E = O, $.warnHtmlMessage = O;
    },
    get escapeParameter() {
      return C;
    },
    set escapeParameter(O) {
      C = O, $.escapeParameter = O;
    },
    t: Mt,
    getLocaleMessage: R,
    setLocaleMessage: D,
    mergeLocaleMessage: q,
    getPostTranslationHandler: ct,
    setPostTranslationHandler: at,
    getMissingHandler: xt,
    setMissingHandler: fe,
    [z0]: ui
  };
  return B.datetimeFormats = Dt, B.numberFormats = pt, B.rt = Re, B.te = x, B.tm = L, B.d = De, B.n = Qt, B.getDateTimeFormat = z, B.setDateTimeFormat = g, B.mergeDateTimeFormat = y, B.getNumberFormat = k, B.setNumberFormat = M, B.mergeNumberFormat = G, B[G0] = i, B[Oa] = Fe, B[Pa] = Xe, B[Na] = he, B;
}
const $l = {
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
function J0({ slots: t }, e) {
  return e.length === 1 && e[0] === "default" ? (t.default ? t.default() : []).reduce((i, r) => [
    ...i,
    // prettier-ignore
    ...r.type === $t ? r.children : [r]
  ], []) : e.reduce((n, i) => {
    const r = t[i];
    return r && (n[i] = r()), n;
  }, {});
}
function Vd(t) {
  return $t;
}
const Q0 = /* @__PURE__ */ oi({
  /* eslint-disable */
  name: "i18n-t",
  props: Jt({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (t) => Vt(t) || !isNaN(t)
    }
  }, $l),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(t, e) {
    const { slots: n, attrs: i } = e, r = t.i18n || Ao({
      useScope: t.scope,
      __useComponent: !0
    });
    return () => {
      const s = Object.keys(n).filter((f) => f !== "_"), o = {};
      t.locale && (o.locale = t.locale), t.plural !== void 0 && (o.plural = J(t.plural) ? +t.plural : t.plural);
      const a = J0(e, s), l = r[Oa](t.keypath, a, o), c = Jt({}, i), u = J(t.tag) || yt(t.tag) ? t.tag : Vd();
      return Il(u, c, l);
    };
  }
}), Du = Q0;
function Z0(t) {
  return qt(t) && !J(t[0]);
}
function jd(t, e, n, i) {
  const { slots: r, attrs: s } = e;
  return () => {
    const o = { part: !0 };
    let a = {};
    t.locale && (o.locale = t.locale), J(t.format) ? o.key = t.format : yt(t.format) && (J(t.format.key) && (o.key = t.format.key), a = Object.keys(t.format).reduce((h, d) => n.includes(d) ? Jt({}, h, { [d]: t.format[d] }) : h, {}));
    const l = i(t.value, o, a);
    let c = [o.key];
    qt(l) ? c = l.map((h, d) => {
      const p = r[h.type], S = p ? p({ [h.type]: h.value, index: d, parts: l }) : [h.value];
      return Z0(S) && (S[0].key = `${h.type}-${d}`), S;
    }) : J(l) && (c = [l]);
    const u = Jt({}, s), f = J(t.tag) || yt(t.tag) ? t.tag : Vd();
    return Il(f, u, c);
  };
}
const tv = /* @__PURE__ */ oi({
  /* eslint-disable */
  name: "i18n-n",
  props: Jt({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, $l),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(t, e) {
    const n = t.i18n || Ao({
      useScope: t.scope,
      __useComponent: !0
    });
    return jd(t, e, $d, (...i) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Na](...i)
    ));
  }
}), Fu = tv, ev = /* @__PURE__ */ oi({
  /* eslint-disable */
  name: "i18n-d",
  props: Jt({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, $l),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(t, e) {
    const n = t.i18n || Ao({
      useScope: t.scope,
      __useComponent: !0
    });
    return jd(t, e, Fd, (...i) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Pa](...i)
    ));
  }
}), $u = ev;
function nv(t, e) {
  const n = t;
  if (t.mode === "composition")
    return n.__getInstance(e) || t.global;
  {
    const i = n.__getInstance(e);
    return i != null ? i.__composer : t.global.__composer;
  }
}
function iv(t) {
  const e = (o) => {
    const { instance: a, modifiers: l, value: c } = o;
    if (!a || !a.$)
      throw Me(Ee.UNEXPECTED_ERROR);
    const u = nv(t, a.$), f = Bu(c);
    return [
      Reflect.apply(u.t, u, [...Uu(f)]),
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
        const l = o.__composer, c = Bu(a);
        o.textContent = Reflect.apply(l.t, l, [
          ...Uu(c)
        ]);
      }
    },
    getSSRProps: (o) => {
      const [a] = e(o);
      return { textContent: a };
    }
  };
}
function Bu(t) {
  if (J(t))
    return { path: t };
  if (ht(t)) {
    if (!("path" in t))
      throw Me(Ee.REQUIRED_VALUE, "path");
    return t;
  } else
    throw Me(Ee.INVALID_VALUE);
}
function Uu(t) {
  const { path: e, locale: n, args: i, choice: r, plural: s } = t, o = {}, a = i || {};
  return J(n) && (o.locale = n), Vt(r) && (o.plural = r), Vt(s) && (o.plural = s), [e, a, o];
}
function rv(t, e, ...n) {
  const i = ht(n[0]) ? n[0] : {}, r = !!i.useI18nComponentName;
  (Pt(i.globalInstall) ? i.globalInstall : !0) && ([r ? "i18n" : Du.name, "I18nT"].forEach((o) => t.component(o, Du)), [Fu.name, "I18nN"].forEach((o) => t.component(o, Fu)), [$u.name, "I18nD"].forEach((o) => t.component(o, $u))), t.directive("t", iv(e));
}
const sv = /* @__PURE__ */ Dn("global-vue-i18n");
function ov(t = {}, e) {
  const n = Pt(t.globalInjection) ? t.globalInjection : !0, i = !0, r = /* @__PURE__ */ new Map(), [s, o] = av(t), a = /* @__PURE__ */ Dn("");
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
        if (h.__VUE_I18N_SYMBOL__ = a, h.provide(h.__VUE_I18N_SYMBOL__, f), ht(d[0])) {
          const A = d[0];
          f.__composerExtend = A.__composerExtend, f.__vueI18nExtend = A.__vueI18nExtend;
        }
        let p = null;
        n && (p = gv(h, f.global)), rv(h, f, ...d);
        const S = h.unmount;
        h.unmount = () => {
          p && p(), f.dispose(), S();
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
function Ao(t = {}) {
  const e = xo();
  if (e == null)
    throw Me(Ee.MUST_BE_CALL_SETUP_TOP);
  if (!e.isCE && e.appContext.app != null && !e.appContext.app.__VUE_I18N_SYMBOL__)
    throw Me(Ee.NOT_INSTALLED);
  const n = lv(e), i = uv(n), r = Hd(e), s = cv(t, r);
  if (s === "global")
    return Y0(i, t, r), i;
  if (s === "parent") {
    let l = fv(n, e, t.__useComponent);
    return l == null && (l = i), l;
  }
  const o = n;
  let a = o.__getInstance(e);
  if (a == null) {
    const l = Jt({}, t);
    "__i18n" in r && (l.__i18n = r.__i18n), i && (l.__root = i), a = Wd(l), o.__composerExtend && (a[Ia] = o.__composerExtend(a)), dv(o, e, a), o.__setInstance(e, a);
  }
  return a;
}
function av(t, e, n) {
  const i = im();
  {
    const r = i.run(() => Wd(t));
    if (r == null)
      throw Me(Ee.UNEXPECTED_ERROR);
    return [i, r];
  }
}
function lv(t) {
  {
    const e = sr(t.isCE ? sv : t.appContext.app.__VUE_I18N_SYMBOL__);
    if (!e)
      throw Me(t.isCE ? Ee.NOT_INSTALLED_WITH_PROVIDE : Ee.UNEXPECTED_ERROR);
    return e;
  }
}
function cv(t, e) {
  return ko(t) ? "__i18n" in e ? "local" : "global" : t.useScope ? t.useScope : "local";
}
function uv(t) {
  return t.mode === "composition" ? t.global : t.global.__composer;
}
function fv(t, e, n = !1) {
  let i = null;
  const r = e.root;
  let s = hv(e, n);
  for (; s != null; ) {
    const o = t;
    if (t.mode === "composition" && (i = o.__getInstance(s)), i != null || r === s)
      break;
    s = s.parent;
  }
  return i;
}
function hv(t, e = !1) {
  return t == null ? null : e && t.vnode.ctx || t.parent;
}
function dv(t, e, n) {
  Al(() => {
  }, e), Cl(() => {
    const i = n;
    t.__deleteInstance(e);
    const r = i[Ia];
    r && (r(), delete i[Ia]);
  }, e);
}
const pv = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], qu = ["t", "rt", "d", "n", "tm", "te"];
function gv(t, e) {
  const n = /* @__PURE__ */ Object.create(null);
  return pv.forEach((r) => {
    const s = Object.getOwnPropertyDescriptor(e, r);
    if (!s)
      throw Me(Ee.UNEXPECTED_ERROR);
    const o = ie(s.value) ? {
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
  }), t.config.globalProperties.$i18n = n, qu.forEach((r) => {
    const s = Object.getOwnPropertyDescriptor(e, r);
    if (!s || !s.value)
      throw Me(Ee.UNEXPECTED_ERROR);
    Object.defineProperty(t.config.globalProperties, `$${r}`, s);
  }), () => {
    delete t.config.globalProperties.$i18n, qu.forEach((r) => {
      delete t.config.globalProperties[`$${r}`];
    });
  };
}
j0();
A0(B0);
C0(l0);
O0(Od);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const t = Ll();
  t.__INTLIFY__ = !0, y0(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const mv = {
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
}, yv = {
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
}, bv = {
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
}, vv = {
  en_US: mv,
  ca: yv,
  es_ES: bv
};
function P(t) {
  return !(t === void 0 || t === null || t === "" || typeof t == "object" && !Object.values(t).length);
}
function _v(t) {
  return t.reduce((e, n) => {
    const i = P(n.q) && typeof n.q == "string" ? parseInt(n.q) : n.q;
    return !isNaN(i) && i > 0 ? e + i : e;
  }, 0);
}
function wv(t) {
  if (!(t != null && t.length))
    return [];
  const e = t.filter((i) => !i.added).map((i) => (i.parentID = i.getParentID(), i)), n = {};
  return e.forEach((i) => {
    n[i.parentID] ? ++n[i.parentID].count : (n[i.parentID] = {}, n[i.parentID].count = 1, n[i.parentID].id = i.parentID, n[i.parentID].name = i != null && i.name ? i.name : i.id, n[i.parentID].l = i.l, n[i.parentID].w = i.w, n[i.parentID].t = i.t, n[i.parentID].material = i.material, n[i.parentID].rot = i.rot);
  }), Object.values(n);
}
function xv(t) {
  return t != null && t.length ? t.filter((e) => e.used && (e.stack === !1 || typeof e.stack == "number")) : [];
}
function Sv() {
  const t = document.documentElement;
  return "requestFullscreen" in t || "webkitRequestFullscreen" in t || "mozRequestFullScreen" in t || "msRequestFullscreen" in t;
}
const kv = 10;
function Hu(t) {
  return typeof t < "u" && typeof t == "number";
}
const wt = {
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
  isNumber: Hu,
  round(t) {
    return Hu(t) ? t.toFixed(kv) : !1;
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
}, zs = {
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
class Ev {
  constructor(e) {
    m(this, "x1");
    m(this, "x2");
    m(this, "y1");
    m(this, "y2");
    m(this, "direction");
    m(this, "shapeCollisions");
    this.x1 = e.x1, this.x2 = e.x2, this.y1 = e.y1, this.y2 = e.y2, this.direction = Tv(this);
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
function Tv(t) {
  return typeof t > "u" || !wt.isNumber(t.x1) || !wt.isNumber(t.x2) || !wt.isNumber(t.y1) || !wt.isNumber(t.y2) ? null : t.x1 === t.x2 && t.y1 !== t.y2 ? "w" : t.y1 === t.y2 && t.x1 !== t.x2 ? "l" : null;
}
function Av(t) {
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
class Co extends Ev {
  //used to mark for removal
  constructor(n) {
    var i, r, s, o;
    n.x2 < n.x1 && ([n.x1, n.x2] = [n.x2, n.x1]), n.y2 < n.y1 && ([n.y1, n.y2] = [n.y2, n.y1]);
    super(n);
    m(this, "stock");
    m(this, "stockId");
    m(this, "type", null);
    m(this, "guillotine");
    m(this, "guillotineData");
    m(this, "isTrim");
    m(this, "distances");
    m(this, "beamTrimX1");
    m(this, "beamTrimY1");
    m(this, "remove");
    P(n == null ? void 0 : n.stock) && (((r = (i = n.stock) == null ? void 0 : i.constructor) == null ? void 0 : r.name) === "Stock" ? this.stock = n.stock : this.stock = new $n(n.stock), this.stockId = this.stock.id), this.stockId = (s = n == null ? void 0 : n.stock) == null ? void 0 : s.id, this.type = n.type ?? null, this.guillotine = n.guillotine, this.guillotineData = P(n.guillotineData) ? n.guillotineData : {}, this.guillotineData.ptxDummyCut = (n == null ? void 0 : n.ptxDummyCut) || ((o = n == null ? void 0 : n.guillotineData) == null ? void 0 : o.ptxDummyCut) || !1, this.isTrim = P(n.isTrim) ? n.isTrim : !1, this.distances = P(n.distances) ? n.distances : {}, this.beamTrimX1 = n.beamTrimX1, this.beamTrimY1 = n.beamTrimY1;
  }
  //compress for saving / transfer
  compress() {
    var n;
    this.stockId = (this == null ? void 0 : this.stockId) ?? ((n = this == null ? void 0 : this.stock) == null ? void 0 : n.id), delete this.shapeCollisions, delete this.stock;
  }
  clone() {
    const n = structuredClone(this);
    return new Co(n);
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
        return wt.greaterThan(this.y1 + this.stock.getBladeWidth() / 2, 0);
      case "left":
        return wt.greaterThan(this.x1 + this.stock.getBladeWidth() / 2, 0);
      case "top":
        return wt.lessThan(this.y1 - this.stock.getBladeWidth() / 2, this.stock.w);
      case "right":
        return wt.lessThan(this.x1 - this.stock.getBladeWidth() / 2, this.stock.l);
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
    return Av(this);
  }
  getArea() {
    const n = this.getLength();
    return n ? n * this.stock.getBladeWidth() : 0;
  }
}
class Rt {
  constructor(e, n, i = null) {
    m(this, "x");
    m(this, "y");
    m(this, "z");
    m(this, "a");
    //shape id
    m(this, "b");
    //shape id
    m(this, "fromDirection");
    m(this, "type");
    m(this, "corner");
    m(this, "grid");
    m(this, "raycast");
    m(this, "collision");
    m(this, "tooClose");
    m(this, "adjustedForMinSpacing");
    this.x = parseFloat(e), this.y = parseFloat(n), this.z = parseFloat(i) || 0, this.validate();
  }
  clone(e = null, n = null) {
    const i = structuredClone(this), r = new Rt(e === null ? i.x : e, n === null ? i.y : n);
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
class Oo {
  constructor(e = []) {
    m(this, "points", /* @__PURE__ */ new Map());
    e.forEach((n) => this.addPoint(n));
  }
  addPoint(e, n = null) {
    if (!(e instanceof Rt))
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
const yn = {
  bottom: (t, e, n) => {
    const i = new Rt(t.x, t.y - n);
    return i.corner = e, i.grid = "bottom", i;
  },
  left: (t, e, n) => {
    const i = new Rt(t.x - n, t.y);
    return i.corner = e, i.grid = "left", i;
  },
  right: (t, e, n) => {
    const i = new Rt(t.x + n, t.y);
    return i.corner = e, i.grid = "right", i;
  },
  top: (t, e, n) => {
    const i = new Rt(t.x, t.y + n);
    return i.corner = e, i.grid = "top", i;
  }
};
function Cv(t, e, n, i) {
  var o, a, l, c, u, f;
  const r = new Oo();
  if (n.toArray().sort(zd).forEach((h) => {
    const d = h.corner, p = h.type;
    if (!i)
      r.addPoint(h);
    else
      switch (d) {
        case "topRight":
          r.addPoint(yn.top(h, d, i), p), r.addPoint(yn.right(h, d, i), p);
          break;
        case "topLeft":
          r.addPoint(yn.top(h, d, i), p), r.addPoint(yn.left(h, d, i), p);
          break;
        case "bottomRight":
          r.addPoint(yn.bottom(h, d, i), p), r.addPoint(yn.right(h, d, i), p);
          break;
        case "bottomLeft":
          r.addPoint(yn.bottom(h, d, i), p), r.addPoint(yn.left(h, d, i), p);
          break;
      }
    const S = r.toArray();
    if (i)
      for (let A = S.length; A--; ) {
        const v = S[A];
        n.contains(v) && r.deletePoint(v);
      }
    else
      for (let A = S.length; A--; ) {
        const v = S[A];
        for (let _ = t.length; _--; ) {
          const b = t[_];
          if (v.x === b.x && v.y === b.y) {
            r.deletePoint(v);
            break;
          }
        }
      }
  }), i) {
    const h = /* @__PURE__ */ new Set();
    let d, p, S, A;
    ((o = e == null ? void 0 : e.constructor) == null ? void 0 : o.name) === "Stock" && (e != null && e.trimmed) || ((a = e == null ? void 0 : e.constructor) == null ? void 0 : a.name) === "Segment" ? (d = 0, p = 0, S = e.x + e.l, A = e.y + e.w) : (d = (l = e == null ? void 0 : e.trim) == null ? void 0 : l.x1, p = (c = e == null ? void 0 : e.trim) == null ? void 0 : c.y1, S = e.l - ((u = e == null ? void 0 : e.trim) == null ? void 0 : u.x2), A = e.w - ((f = e == null ? void 0 : e.trim) == null ? void 0 : f.y2));
    let v = r.toArray();
    for (let _ = v.length; _--; ) {
      const b = v[_];
      (wt.lessThan(b.x, d) || wt.lessThan(b.y, p) || wt.greaterThan(b.x, S) || wt.greaterThan(b.y, A)) && v.splice(_, 1);
    }
    r.clear(), r.addPoints(v), h.clear(), v = r.toArray();
    for (let _ = v.length; _--; ) {
      const b = v[_];
      for (let w = t.length; w--; ) {
        const E = t[w];
        if (b.collidesWith(E)) {
          r.deletePoint(b);
          break;
        }
      }
    }
  }
  return r;
}
function Ov(t, e) {
  const n = new Oo();
  return t.sort(zd), t.forEach((i) => {
    Ks(i) ? (n.addPoints(i.getCoords(e)), i.shapes.forEach((r) => {
      const s = r.getCoords(e);
      n.addPoints(s, "group");
    })) : n.addPoints(i.getCoords(e));
  }), n;
}
function Pv(t = [], e, n) {
  const i = n.getBladeWidth(), r = Ov(t === null ? e : t, n);
  return Cv(e, n, r, i);
}
function zd(t, e) {
  return t.y === e.y ? e.x - t.x : e.y - t.y;
}
function Kr(t, e, n) {
  if (n.saw.cutType !== "efficiency")
    return t;
  const i = e.getMinSpacing(n);
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
function Nv(t, e, n) {
  const i = new Oo();
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
  }), Iv(t, n, i), i;
}
function Iv(t, e, n) {
  var l, c, u, f, h, d;
  let i, r, s, o;
  ((l = e == null ? void 0 : e.constructor) == null ? void 0 : l.name) === "Stock" && (e != null && e.trimmed) || ((c = e == null ? void 0 : e.constructor) == null ? void 0 : c.name) === "Segment" ? (i = 0, r = 0, s = e.x + e.l - t.l, o = e.y + e.w - t.w) : (i = (u = e == null ? void 0 : e.trim) == null ? void 0 : u.x1, r = (f = e == null ? void 0 : e.trim) == null ? void 0 : f.y1, s = e.l - ((h = e == null ? void 0 : e.trim) == null ? void 0 : h.x2) - t.l, o = e.w - ((d = e == null ? void 0 : e.trim) == null ? void 0 : d.y2) - t.w);
  const a = n.toArray();
  for (let p = a.length; p--; ) {
    const S = a[p];
    (wt.lessThan(S.x, i) || wt.lessThan(S.y, r) || wt.greaterThan(S.x, s) || wt.greaterThan(S.y, o) || S.x < 0 || S.y < 0) && n.deletePoint(S);
  }
}
/**
* @license Fraction.js v4.3.7 31/08/2023
* https://www.xarg.org/2014/03/rational-numbers-in-javascript/
*
* Copyright (c) 2023, Robert Eisele (robert@raw.org)
* Dual licensed under the MIT or GPL Version 2 licenses.
**/
var Lv = 2e3, X = {
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
    throw Bl();
  var n = Object.create(xe.prototype);
  n.s = t < 0 ? -1 : 1, t = t < 0 ? -t : t;
  var i = mi(t, e);
  return n.n = t / i, n.d = e / i, n;
}
function Wu(t) {
  for (var e = {}, n = t, i = 2, r = 4; r <= n; ) {
    for (; n % i === 0; )
      n /= i, e[i] = (e[i] || 0) + 1;
    r += 1 + 2 * i++;
  }
  return n !== t ? n > 1 && (e[n] = (e[n] || 0) + 1) : e[t] = (e[t] || 0) + 1, e;
}
var ge = function(t, e) {
  var n = 0, i = 1, r = 1, s = 0, o = 0, a = 0, l = 1, c = 1, u = 0, f = 1, h = 1, d = 1, p = 1e7, S;
  if (t != null)
    if (e !== void 0) {
      if (n = t, i = e, r = n * i, n % 1 !== 0 || i % 1 !== 0)
        throw Fv();
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
            for (t >= 1 && (c = Math.pow(10, Math.floor(1 + Math.log(t) / Math.LN10)), t /= c); f <= p && d <= p; )
              if (S = (u + h) / (f + d), t === S) {
                f + d <= p ? (n = u + h, i = f + d) : d > f ? (n = h, i = d) : (n = u, i = f);
                break;
              } else
                t > S ? (u += h, f += d) : (h += u, d += f), f > p ? (n = h, i = d) : (n = u, i = f);
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
    throw Bl();
  X.s = r < 0 ? -1 : 1, X.n = Math.abs(n), X.d = Math.abs(i);
};
function Mv(t, e, n) {
  for (var i = 1; e > 0; t = t * t % n, e >>= 1)
    e & 1 && (i = i * t % n);
  return i;
}
function Rv(t, e) {
  for (; e % 2 === 0; e /= 2)
    ;
  for (; e % 5 === 0; e /= 5)
    ;
  if (e === 1)
    return 0;
  for (var n = 10 % e, i = 1; n !== 1; i++)
    if (n = n * 10 % e, i > Lv)
      return 0;
  return i;
}
function Dv(t, e, n) {
  for (var i = 1, r = Mv(10, n, e), s = 0; s < 300; s++) {
    if (i === r)
      return s;
    i = i * 10 % e, r = r * 10 % e;
  }
  return 0;
}
function mi(t, e) {
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
function xe(t, e) {
  if (ge(t, e), this instanceof xe)
    t = mi(X.d, X.n), this.s = X.s, this.n = X.n / t, this.d = X.d / t;
  else
    return Ot(X.s * X.n, X.d);
}
var Bl = function() {
  return new Error("Division by Zero");
}, ks = function() {
  return new Error("Invalid argument");
}, Fv = function() {
  return new Error("Parameters must be integer");
};
xe.prototype = {
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
    return ge(t, e), Ot(
      this.s * this.n * X.d + X.s * this.d * X.n,
      this.d * X.d
    );
  },
  /**
   * Subtracts two rational numbers
   *
   * Ex: new Fraction({n: 2, d: 3}).add("14.9") => -427 / 30
   **/
  sub: function(t, e) {
    return ge(t, e), Ot(
      this.s * this.n * X.d - X.s * this.d * X.n,
      this.d * X.d
    );
  },
  /**
   * Multiplies two rational numbers
   *
   * Ex: new Fraction("-17.(345)").mul(3) => 5776 / 111
   **/
  mul: function(t, e) {
    return ge(t, e), Ot(
      this.s * X.s * this.n * X.n,
      this.d * X.d
    );
  },
  /**
   * Divides two rational numbers
   *
   * Ex: new Fraction("-17.(345)").inverse().div(3)
   **/
  div: function(t, e) {
    return ge(t, e), Ot(
      this.s * X.s * this.n * X.d,
      this.d * X.n
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
      return new xe(NaN);
    if (t === void 0)
      return Ot(this.s * this.n % this.d, 1);
    if (ge(t, e), X.n === 0 && this.d === 0)
      throw Bl();
    return Ot(
      this.s * (X.d * this.n) % (X.n * this.d),
      X.d * this.d
    );
  },
  /**
   * Calculates the fractional gcd of two rational numbers
   *
   * Ex: new Fraction(5,8).gcd(3,7) => 1/56
   */
  gcd: function(t, e) {
    return ge(t, e), Ot(mi(X.n, this.n) * mi(X.d, this.d), X.d * this.d);
  },
  /**
   * Calculates the fractional lcm of two rational numbers
   *
   * Ex: new Fraction(5,8).lcm(3,7) => 15
   */
  lcm: function(t, e) {
    return ge(t, e), X.n === 0 && this.n === 0 ? Ot(0, 1) : Ot(X.n * this.n, mi(X.n, this.n) * mi(X.d, this.d));
  },
  /**
   * Calculates the ceil of a rational number
   *
   * Ex: new Fraction('4.(3)').ceil() => (5 / 1)
   **/
  ceil: function(t) {
    return t = Math.pow(10, t || 0), isNaN(this.n) || isNaN(this.d) ? new xe(NaN) : Ot(Math.ceil(t * this.s * this.n / this.d), t);
  },
  /**
   * Calculates the floor of a rational number
   *
   * Ex: new Fraction('4.(3)').floor() => (4 / 1)
   **/
  floor: function(t) {
    return t = Math.pow(10, t || 0), isNaN(this.n) || isNaN(this.d) ? new xe(NaN) : Ot(Math.floor(t * this.s * this.n / this.d), t);
  },
  /**
   * Rounds a rational number
   *
   * Ex: new Fraction('4.(3)').round() => (4 / 1)
   **/
  round: function(t) {
    return t = Math.pow(10, t || 0), isNaN(this.n) || isNaN(this.d) ? new xe(NaN) : Ot(Math.round(t * this.s * this.n / this.d), t);
  },
  /**
   * Rounds a rational number to a multiple of another rational number
   *
   * Ex: new Fraction('0.9').roundTo("1/8") => 7 / 8
   **/
  roundTo: function(t, e) {
    return ge(t, e), Ot(this.s * Math.round(this.n * X.d / (this.d * X.n)) * X.n, X.d);
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
    if (ge(t, e), X.d === 1)
      return X.s < 0 ? Ot(Math.pow(this.s * this.d, X.n), Math.pow(this.n, X.n)) : Ot(Math.pow(this.s * this.n, X.n), Math.pow(this.d, X.n));
    if (this.s < 0)
      return null;
    var n = Wu(this.n), i = Wu(this.d), r = 1, s = 1;
    for (var o in n)
      if (o !== "1") {
        if (o === "0") {
          r = 0;
          break;
        }
        if (n[o] *= X.n, n[o] % X.d === 0)
          n[o] /= X.d;
        else
          return null;
        r *= Math.pow(o, n[o]);
      }
    for (var o in i)
      if (o !== "1") {
        if (i[o] *= X.n, i[o] % X.d === 0)
          i[o] /= X.d;
        else
          return null;
        s *= Math.pow(o, i[o]);
      }
    return X.s < 0 ? Ot(s, r) : Ot(r, s);
  },
  /**
   * Check if two rational numbers are the same
   *
   * Ex: new Fraction(19.6).equals([98, 5]);
   **/
  equals: function(t, e) {
    return ge(t, e), this.s * this.n * X.d === X.s * X.n * this.d;
  },
  /**
   * Check if two rational numbers are the same
   *
   * Ex: new Fraction(19.6).equals([98, 5]);
   **/
  compare: function(t, e) {
    ge(t, e);
    var n = this.s * this.n * X.d - X.s * X.n * this.d;
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
    return ge(t, e), !(!(X.n * this.d) || this.n * X.d % (X.n * this.d));
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
    var i = Rv(e, n), r = Dv(e, n, i), s = this.s < 0 ? "-" : "";
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
function $v(t) {
  if (!t)
    return null;
  if (t = t.toString().trim(), typeof navigator > "u" || typeof navigator.language > "u")
    return parseFloat(t);
  const { thousandsSeparator: e, decimalSeparator: n } = Bv();
  return t = Array.from(t, (i) => i === e ? "" : i === n ? "." : i).join(""), parseFloat(t);
}
function Bv() {
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
function Gd(t) {
  if (!t || typeof t == "number")
    return !1;
  t = t.toString().replace(/[^0-9/ ]/g, "");
  const e = /\b\d+\/\d+\b/g;
  return t.match(e);
}
function Uv(t, e = !1) {
  if (!P(t))
    return null;
  if (t === 0)
    return "0";
  let n = t.toString().trim();
  if (!n)
    return null;
  if (Gd(t))
    return n = n.replace(/[^0-9/,. - ]/g, ""), n;
  {
    n = n.replace(/[^0-9,. -]/g, ""), n.startsWith(".") && (n = "0" + n);
    let i;
    return e ? i = $v(n) : i = parseFloat(n), i ? i.toString() : null;
  }
}
function U(t, e = "decimal", n = !1, i = !1, r = 0) {
  if (!P(t) || !e)
    return null;
  if (e !== "decimal" && e !== "fraction")
    return console.error("incorrect conversion type specified for convertUnit"), null;
  try {
    const s = Uv(t, i);
    if (!s)
      return 0;
    let o;
    if (e === "fraction")
      if (Gd(s))
        o = new xe(s);
      else {
        const a = parseFloat(s);
        Number.isInteger(a) ? o = new xe(s) : o = new xe(a);
      }
    else
      o = new xe(s);
    switch (e) {
      case "fraction":
        if (r > 0) {
          const a = o.valueOf(), l = Math.round(a * r) / r;
          o = new xe(l);
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
function qv(t) {
  let e = t;
  return typeof t != "number" && (e = parseFloat(t)), e % 1 !== 0;
}
const ee = {
  banding: (t) => {
    const e = [];
    if (!P(t))
      return [];
    if (typeof t != "object")
      return e.push("Banding must be an object."), e;
    Object.entries(t).forEach(([n, i]) => {
      P(i) && i !== !0 && i !== !1 && e.push(`Banding ${n} must be a boolean.`);
    });
  },
  //when trim provided as number
  partTrim(t, e) {
    e = U(e);
    const n = U(t.l), i = U(t.w), r = n - e * 2, s = i - e * 2;
    return r < 0 || s < 0 ? [
      `When applying trim of ${e}, part is ${r} x ${s}.`
    ] : [];
  },
  //when trim provided as object
  trim: (t) => {
    const e = [];
    if (!P(t.trim))
      return e;
    if (["x1", "x2", "y1", "y2"].forEach((n) => {
      P(t.trim[n]) || (t.trim[n] = 0);
    }), !br(t) || br(t) && !(t != null && t.trimmed)) {
      const n = U(t.l), i = U(t.w), r = U(t.trim.x1), s = U(t.trim.x2), o = U(t.trim.y1), a = U(t.trim.y2);
      Object.entries({ x1: r, x2: s, y1: o, y2: a }).forEach(([c, u]) => {
        isNaN(u) && e.push(`The value of trim ${yw[c]} is not understood.`);
      }), n && i && n > 0 && i > 0 && (r + s >= t.l && e.push(`Trim W1 + W2 = ${r + s}, which is greater than or equal to total length of ${n}.`), a + a >= t.w && e.push(`Trim L1 + L2 = ${o + a}, which is greater than or equal to total width of ${i}.`));
    }
    return e;
  },
  x: (t) => {
    const e = [];
    return P(t) ? (t = U(t), isNaN(t) ? (e.push("X value is not understood."), e) : (t < 0 && e.push("X must be greater than or equal to zero."), e)) : e;
  },
  y: (t) => {
    const e = [];
    return P(t) && (t = U(t), isNaN(t) && e.push("Y value is not understood."), t < 0 && e.push("Y must be greater than or equal to zero.")), e;
  },
  l: (t) => {
    const e = [];
    return P(t) ? (t = U(t), isNaN(t) ? (e.push("Width value is not understood."), e) : (t <= 0 && e.push("Length must be greater than zero."), e)) : (e.push("Length is required."), e);
  },
  w: (t) => {
    const e = [];
    return P(t) ? (t = U(t), isNaN(t) ? (e.push("Width value is not understood."), e) : (t <= 0 && e.push("Width must be greater than zero."), e)) : (e.push("Width is required."), e);
  },
  t: (t) => {
    const e = [];
    return P(t) ? (t = U(t), isNaN(t) ? (e.push("Thickness value is not understood."), e) : (t <= 0 && e.push("Thickness must be greater than zero."), e)) : e;
  },
  q: (t) => {
    const e = [];
    return P(t) ? (t = parseInt(t), isNaN(t) ? (e.push("Quantity value is not understood."), e) : (qv(t) && e.push("Quantity must be an integer."), t <= 0 && e.push("Quantity should be greater than or equal to zero."), e)) : e;
  },
  orientationLock: (t) => {
    const e = [];
    return P(t) && (t = t.toLowerCase(), t !== "l" && t !== "w" && e.push("Orientation lock must be l or w.")), e;
  },
  grain: (t) => {
    const e = [];
    return P(t) && (t = t.toLowerCase(), t !== "l" && t !== "w" && e.push("Grain must be l or w.")), e;
  },
  stockMatch: (t, e, n = 0) => {
    if (!t.q)
      return [];
    t.applyPartTrim(n);
    const i = Ew([t], e);
    if (!i)
      return [];
    const r = [];
    if (i.unusableShapes.length) {
      const s = i.unusableShapes[0], o = s.stockMatch;
      if (!o.fit) {
        const a = s.getTrimmedDimensions();
        r.push(`${a.l.toFixed(0)}x${a.w.toFixed(0)} will not fit on any stock - check trim, dimensions & orientation lock.`);
      }
      o.material || r.push("No matching stock material found."), o.thickness || r.push("No matching stock thickness found."), o.width || r.push("No matching stock width found (required for linear calculations).");
    }
    return r;
  },
  machining: (t) => {
    t.machining.validateEverything(t);
  }
};
var Yd = typeof global == "object" && global && global.Object === Object && global, Hv = typeof self == "object" && self && self.Object === Object && self, Bi = Yd || Hv || Function("return this")(), Gs = Bi.Symbol, Kd = Object.prototype, Wv = Kd.hasOwnProperty, Vv = Kd.toString, Yi = Gs ? Gs.toStringTag : void 0;
function jv(t) {
  var e = Wv.call(t, Yi), n = t[Yi];
  try {
    t[Yi] = void 0;
    var i = !0;
  } catch {
  }
  var r = Vv.call(t);
  return i && (e ? t[Yi] = n : delete t[Yi]), r;
}
var zv = Object.prototype, Gv = zv.toString;
function Yv(t) {
  return Gv.call(t);
}
var Kv = "[object Null]", Xv = "[object Undefined]", Vu = Gs ? Gs.toStringTag : void 0;
function Po(t) {
  return t == null ? t === void 0 ? Xv : Kv : Vu && Vu in Object(t) ? jv(t) : Yv(t);
}
function Ir(t) {
  return t != null && typeof t == "object";
}
var La = Array.isArray;
function ai(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
function Xd(t) {
  return t;
}
var Jv = "[object AsyncFunction]", Qv = "[object Function]", Zv = "[object GeneratorFunction]", t1 = "[object Proxy]";
function Ul(t) {
  if (!ai(t))
    return !1;
  var e = Po(t);
  return e == Qv || e == Zv || e == Jv || e == t1;
}
var Zo = Bi["__core-js_shared__"], ju = function() {
  var t = /[^.]+$/.exec(Zo && Zo.keys && Zo.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function e1(t) {
  return !!ju && ju in t;
}
var n1 = Function.prototype, i1 = n1.toString;
function r1(t) {
  if (t != null) {
    try {
      return i1.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var s1 = /[\\^$.*+?()[\]{}|]/g, o1 = /^\[object .+?Constructor\]$/, a1 = Function.prototype, l1 = Object.prototype, c1 = a1.toString, u1 = l1.hasOwnProperty, f1 = RegExp(
  "^" + c1.call(u1).replace(s1, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function h1(t) {
  if (!ai(t) || e1(t))
    return !1;
  var e = Ul(t) ? f1 : o1;
  return e.test(r1(t));
}
function d1(t, e) {
  return t == null ? void 0 : t[e];
}
function ql(t, e) {
  var n = d1(t, e);
  return h1(n) ? n : void 0;
}
var zu = Object.create, p1 = /* @__PURE__ */ function() {
  function t() {
  }
  return function(e) {
    if (!ai(e))
      return {};
    if (zu)
      return zu(e);
    t.prototype = e;
    var n = new t();
    return t.prototype = void 0, n;
  };
}();
function g1(t, e, n) {
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
function m1(t, e) {
  var n = -1, i = t.length;
  for (e || (e = Array(i)); ++n < i; )
    e[n] = t[n];
  return e;
}
var y1 = 800, b1 = 16, v1 = Date.now;
function _1(t) {
  var e = 0, n = 0;
  return function() {
    var i = v1(), r = b1 - (i - n);
    if (n = i, r > 0) {
      if (++e >= y1)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function w1(t) {
  return function() {
    return t;
  };
}
var Ys = function() {
  try {
    var t = ql(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), x1 = Ys ? function(t, e) {
  return Ys(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: w1(e),
    writable: !0
  });
} : Xd, S1 = _1(x1), k1 = 9007199254740991, E1 = /^(?:0|[1-9]\d*)$/;
function Jd(t, e) {
  var n = typeof t;
  return e = e ?? k1, !!e && (n == "number" || n != "symbol" && E1.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function Hl(t, e, n) {
  e == "__proto__" && Ys ? Ys(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function No(t, e) {
  return t === e || t !== t && e !== e;
}
var T1 = Object.prototype, A1 = T1.hasOwnProperty;
function C1(t, e, n) {
  var i = t[e];
  (!(A1.call(t, e) && No(i, n)) || n === void 0 && !(e in t)) && Hl(t, e, n);
}
function O1(t, e, n, i) {
  var r = !n;
  n || (n = {});
  for (var s = -1, o = e.length; ++s < o; ) {
    var a = e[s], l = void 0;
    l === void 0 && (l = t[a]), r ? Hl(n, a, l) : C1(n, a, l);
  }
  return n;
}
var Gu = Math.max;
function P1(t, e, n) {
  return e = Gu(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var i = arguments, r = -1, s = Gu(i.length - e, 0), o = Array(s); ++r < s; )
      o[r] = i[e + r];
    r = -1;
    for (var a = Array(e + 1); ++r < e; )
      a[r] = i[r];
    return a[e] = n(o), g1(t, this, a);
  };
}
function N1(t, e) {
  return S1(P1(t, e, Xd), t + "");
}
var I1 = 9007199254740991;
function Qd(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= I1;
}
function Wl(t) {
  return t != null && Qd(t.length) && !Ul(t);
}
function L1(t, e, n) {
  if (!ai(n))
    return !1;
  var i = typeof e;
  return (i == "number" ? Wl(n) && Jd(e, n.length) : i == "string" && e in n) ? No(n[e], t) : !1;
}
function M1(t) {
  return N1(function(e, n) {
    var i = -1, r = n.length, s = r > 1 ? n[r - 1] : void 0, o = r > 2 ? n[2] : void 0;
    for (s = t.length > 3 && typeof s == "function" ? (r--, s) : void 0, o && L1(n[0], n[1], o) && (s = r < 3 ? void 0 : s, r = 1), e = Object(e); ++i < r; ) {
      var a = n[i];
      a && t(e, a, i, s);
    }
    return e;
  });
}
var R1 = Object.prototype;
function Zd(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || R1;
  return t === n;
}
function D1(t, e) {
  for (var n = -1, i = Array(t); ++n < t; )
    i[n] = e(n);
  return i;
}
var F1 = "[object Arguments]";
function Yu(t) {
  return Ir(t) && Po(t) == F1;
}
var tp = Object.prototype, $1 = tp.hasOwnProperty, B1 = tp.propertyIsEnumerable, Ma = Yu(/* @__PURE__ */ function() {
  return arguments;
}()) ? Yu : function(t) {
  return Ir(t) && $1.call(t, "callee") && !B1.call(t, "callee");
};
function U1() {
  return !1;
}
var ep = typeof exports == "object" && exports && !exports.nodeType && exports, Ku = ep && typeof module == "object" && module && !module.nodeType && module, q1 = Ku && Ku.exports === ep, Xu = q1 ? Bi.Buffer : void 0, H1 = Xu ? Xu.isBuffer : void 0, np = H1 || U1, W1 = "[object Arguments]", V1 = "[object Array]", j1 = "[object Boolean]", z1 = "[object Date]", G1 = "[object Error]", Y1 = "[object Function]", K1 = "[object Map]", X1 = "[object Number]", J1 = "[object Object]", Q1 = "[object RegExp]", Z1 = "[object Set]", t_ = "[object String]", e_ = "[object WeakMap]", n_ = "[object ArrayBuffer]", i_ = "[object DataView]", r_ = "[object Float32Array]", s_ = "[object Float64Array]", o_ = "[object Int8Array]", a_ = "[object Int16Array]", l_ = "[object Int32Array]", c_ = "[object Uint8Array]", u_ = "[object Uint8ClampedArray]", f_ = "[object Uint16Array]", h_ = "[object Uint32Array]", kt = {};
kt[r_] = kt[s_] = kt[o_] = kt[a_] = kt[l_] = kt[c_] = kt[u_] = kt[f_] = kt[h_] = !0;
kt[W1] = kt[V1] = kt[n_] = kt[j1] = kt[i_] = kt[z1] = kt[G1] = kt[Y1] = kt[K1] = kt[X1] = kt[J1] = kt[Q1] = kt[Z1] = kt[t_] = kt[e_] = !1;
function d_(t) {
  return Ir(t) && Qd(t.length) && !!kt[Po(t)];
}
function p_(t) {
  return function(e) {
    return t(e);
  };
}
var ip = typeof exports == "object" && exports && !exports.nodeType && exports, ar = ip && typeof module == "object" && module && !module.nodeType && module, g_ = ar && ar.exports === ip, ta = g_ && Yd.process, Ju = function() {
  try {
    var t = ar && ar.require && ar.require("util").types;
    return t || ta && ta.binding && ta.binding("util");
  } catch {
  }
}(), Qu = Ju && Ju.isTypedArray, rp = Qu ? p_(Qu) : d_;
function m_(t, e) {
  var n = La(t), i = !n && Ma(t), r = !n && !i && np(t), s = !n && !i && !r && rp(t), o = n || i || r || s, a = o ? D1(t.length, String) : [], l = a.length;
  for (var c in t)
    o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Jd(c, l)) || a.push(c);
  return a;
}
function y_(t, e) {
  return function(n) {
    return t(e(n));
  };
}
function b_(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var v_ = Object.prototype, __ = v_.hasOwnProperty;
function w_(t) {
  if (!ai(t))
    return b_(t);
  var e = Zd(t), n = [];
  for (var i in t)
    i == "constructor" && (e || !__.call(t, i)) || n.push(i);
  return n;
}
function sp(t) {
  return Wl(t) ? m_(t) : w_(t);
}
var yr = ql(Object, "create");
function x_() {
  this.__data__ = yr ? yr(null) : {}, this.size = 0;
}
function S_(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var k_ = "__lodash_hash_undefined__", E_ = Object.prototype, T_ = E_.hasOwnProperty;
function A_(t) {
  var e = this.__data__;
  if (yr) {
    var n = e[t];
    return n === k_ ? void 0 : n;
  }
  return T_.call(e, t) ? e[t] : void 0;
}
var C_ = Object.prototype, O_ = C_.hasOwnProperty;
function P_(t) {
  var e = this.__data__;
  return yr ? e[t] !== void 0 : O_.call(e, t);
}
var N_ = "__lodash_hash_undefined__";
function I_(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = yr && e === void 0 ? N_ : e, this;
}
function ni(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
ni.prototype.clear = x_;
ni.prototype.delete = S_;
ni.prototype.get = A_;
ni.prototype.has = P_;
ni.prototype.set = I_;
function L_() {
  this.__data__ = [], this.size = 0;
}
function Io(t, e) {
  for (var n = t.length; n--; )
    if (No(t[n][0], e))
      return n;
  return -1;
}
var M_ = Array.prototype, R_ = M_.splice;
function D_(t) {
  var e = this.__data__, n = Io(e, t);
  if (n < 0)
    return !1;
  var i = e.length - 1;
  return n == i ? e.pop() : R_.call(e, n, 1), --this.size, !0;
}
function F_(t) {
  var e = this.__data__, n = Io(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function $_(t) {
  return Io(this.__data__, t) > -1;
}
function B_(t, e) {
  var n = this.__data__, i = Io(n, t);
  return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this;
}
function dn(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
dn.prototype.clear = L_;
dn.prototype.delete = D_;
dn.prototype.get = F_;
dn.prototype.has = $_;
dn.prototype.set = B_;
var op = ql(Bi, "Map");
function U_() {
  this.size = 0, this.__data__ = {
    hash: new ni(),
    map: new (op || dn)(),
    string: new ni()
  };
}
function q_(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Lo(t, e) {
  var n = t.__data__;
  return q_(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function H_(t) {
  var e = Lo(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function W_(t) {
  return Lo(this, t).get(t);
}
function V_(t) {
  return Lo(this, t).has(t);
}
function j_(t, e) {
  var n = Lo(this, t), i = n.size;
  return n.set(t, e), this.size += n.size == i ? 0 : 1, this;
}
function Ui(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
Ui.prototype.clear = U_;
Ui.prototype.delete = H_;
Ui.prototype.get = W_;
Ui.prototype.has = V_;
Ui.prototype.set = j_;
var ap = y_(Object.getPrototypeOf, Object), z_ = "[object Object]", G_ = Function.prototype, Y_ = Object.prototype, lp = G_.toString, K_ = Y_.hasOwnProperty, X_ = lp.call(Object);
function J_(t) {
  if (!Ir(t) || Po(t) != z_)
    return !1;
  var e = ap(t);
  if (e === null)
    return !0;
  var n = K_.call(e, "constructor") && e.constructor;
  return typeof n == "function" && n instanceof n && lp.call(n) == X_;
}
function Q_() {
  this.__data__ = new dn(), this.size = 0;
}
function Z_(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function tw(t) {
  return this.__data__.get(t);
}
function ew(t) {
  return this.__data__.has(t);
}
var nw = 200;
function iw(t, e) {
  var n = this.__data__;
  if (n instanceof dn) {
    var i = n.__data__;
    if (!op || i.length < nw - 1)
      return i.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new Ui(i);
  }
  return n.set(t, e), this.size = n.size, this;
}
function qi(t) {
  var e = this.__data__ = new dn(t);
  this.size = e.size;
}
qi.prototype.clear = Q_;
qi.prototype.delete = Z_;
qi.prototype.get = tw;
qi.prototype.has = ew;
qi.prototype.set = iw;
var cp = typeof exports == "object" && exports && !exports.nodeType && exports, Zu = cp && typeof module == "object" && module && !module.nodeType && module, rw = Zu && Zu.exports === cp, tf = rw ? Bi.Buffer : void 0;
tf && tf.allocUnsafe;
function sw(t, e) {
  return t.slice();
}
var ef = Bi.Uint8Array;
function ow(t) {
  var e = new t.constructor(t.byteLength);
  return new ef(e).set(new ef(t)), e;
}
function aw(t, e) {
  var n = ow(t.buffer);
  return new t.constructor(n, t.byteOffset, t.length);
}
function lw(t) {
  return typeof t.constructor == "function" && !Zd(t) ? p1(ap(t)) : {};
}
function cw(t) {
  return function(e, n, i) {
    for (var r = -1, s = Object(e), o = i(e), a = o.length; a--; ) {
      var l = o[++r];
      if (n(s[l], l, s) === !1)
        break;
    }
    return e;
  };
}
var uw = cw();
function Ra(t, e, n) {
  (n !== void 0 && !No(t[e], n) || n === void 0 && !(e in t)) && Hl(t, e, n);
}
function fw(t) {
  return Ir(t) && Wl(t);
}
function Da(t, e) {
  if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__")
    return t[e];
}
function hw(t) {
  return O1(t, sp(t));
}
function dw(t, e, n, i, r, s, o) {
  var a = Da(t, n), l = Da(e, n), c = o.get(l);
  if (c) {
    Ra(t, n, c);
    return;
  }
  var u = s ? s(a, l, n + "", t, e, o) : void 0, f = u === void 0;
  if (f) {
    var h = La(l), d = !h && np(l), p = !h && !d && rp(l);
    u = l, h || d || p ? La(a) ? u = a : fw(a) ? u = m1(a) : d ? (f = !1, u = sw(l)) : p ? (f = !1, u = aw(l)) : u = [] : J_(l) || Ma(l) ? (u = a, Ma(a) ? u = hw(a) : (!ai(a) || Ul(a)) && (u = lw(l))) : f = !1;
  }
  f && (o.set(l, u), r(u, l, i, s, o), o.delete(l)), Ra(t, n, u);
}
function up(t, e, n, i, r) {
  t !== e && uw(e, function(s, o) {
    if (r || (r = new qi()), ai(s))
      dw(t, e, o, n, up, i, r);
    else {
      var a = i ? i(Da(t, o), s, o + "", t, e, r) : void 0;
      a === void 0 && (a = s), Ra(t, o, a);
    }
  }, sp);
}
var pw = M1(function(t, e, n) {
  up(t, e, n);
});
class Fa {
  constructor({ x: e, y: n, diameter: i, depth: r = 0, side: s = 0, type: o = null }) {
    m(this, "x");
    m(this, "y");
    m(this, "diameter");
    m(this, "depth");
    m(this, "side");
    m(this, "valid");
    m(this, "type");
    this.x = e, this.y = n, this.diameter = i, this.depth = r, this.side = s, this.type = o;
  }
  getXDrawPosition(e) {
    let n = 0;
    const i = U(this.x);
    if (e.rot) {
      const r = U(this.y);
      n = e.l - r + ("x" in e ? e.x : 0);
    } else
      n = i + ("x" in e ? e.x : 0);
    return n;
  }
  getYDrawPosition(e, n, i) {
    let r = e.rot ? U(this.x) : U(this.y);
    return r += "y" in e ? e.y : 0, n === 1 && i && (r = i.w - r), r;
  }
  shouldShow(e, n) {
    return this.side === n || this.depth === 0 || U(this.depth) >= U(e.t);
  }
  getDistanceToEdge(e) {
    const n = this.x, i = this.y, r = this.diameter / 2, s = U(e.getLongSide()), o = U(e.getShortSide()), a = e.machining.corners.map((p) => p.type ? p.size : 0), l = [
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
    ], c = e.machining.corners.map((p, S) => {
      const A = S === 0 || S === 3, v = S < 2, _ = A ? n : s - n;
      let b = null;
      this.side === 0 ? b = v ? i : o - i : this.side === 1 && (b = v ? o - i : i);
      const w = Math.sqrt(_ * _ + b * b);
      return {
        c: p,
        distance: w
      };
    }), u = Math.min(...l.map((p) => p.distance)), f = Math.min(...c.map((p) => p.distance)), h = c.findIndex((p) => p.distance === f), d = e.machining.corners[h];
    if (d && d.type === "radius") {
      let p = h === 0 || h === 3 ? 0 : s, S = h < 2 ? 0 : o;
      const A = h < 2;
      p += h === 0 || h === 3 ? a[h] : -a[h], S += A ? a[h] : -a[h];
      const _ = n - p, b = h < 2;
      let w;
      this.side === 0 ? w = b ? i : o - i : this.side === 1 && (w = b ? o - i : i);
      const E = w - S, C = Math.sqrt(_ * _ + E * E), N = a[h] - C - r;
      let F = !1;
      return d.index === 0 ? F = n <= p && w <= S : d.index === 1 ? F = n >= p && w <= S : d.index === 2 ? F = n >= p && w >= S : d.index === 3 && (F = n <= p && w >= S), F && N < u ? N : u;
    } else if (d && d.type === "bevel") {
      let p, S, A;
      d.index === 0 ? (p = 1, S = 1, A = -d.size) : d.index === 1 ? (p = 1, S = -1, A = -s + d.size) : d.index === 2 ? (p = 1, S = 1, A = -s - o + d.size) : d.index === 3 && (p = -1, S = 1, A = -o + d.size);
      const v = d.index === 0 ? 1 : -1, _ = (p * n + S * i + A) / Math.sqrt(p * p + S * S) * v - r;
      return _ < u ? _ : u;
    } else
      return u;
  }
  validate(e, n) {
    const i = [];
    return (!this.x || !this.y || !this.diameter) && i.push({
      index: n,
      message: "X, Y & diameter are all required."
    }), U(this.depth) < 0 && i.push({
      index: n,
      message: "Depth cannot be negative."
    }), "t" in e && U(e.t) > 0 && U(this.depth) > U(e.t) && i.push({
      index: n,
      message: "Depth cannot be greater than part thickness."
    }), (!("t" in e) || !e.t) && U(this.depth) > 0 && i.push({
      index: n,
      message: "Part thickness is not defined."
    }), this.getDistanceToEdge(e) < 0 && i.push({
      index: n,
      message: "Outside of part."
    }), i.length ? this.valid = !1 : this.valid = !0, i;
  }
}
class nf {
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
    m(this, "position");
    m(this, "edge");
    m(this, "side");
    m(this, "numHoles");
    m(this, "holes", []);
    m(this, "diameter");
    m(this, "depth");
    m(this, "distanceFromEdge");
    m(this, "outerSpacing");
    m(this, "hingeLength");
    m(this, "minimumHoleDistance");
    m(this, "positionLimit");
    m(this, "valid");
    this.position = e, this.edge = n, this.side = i, this.numHoles = r, this.diameter = s, this.depth = o, this.distanceFromEdge = a, this.outerSpacing = l, this.hingeLength = c, this.minimumHoleDistance = u, this.positionLimit = f, h && this.createHoles(h);
  }
  getHoleSpacing() {
    const e = U(this.hingeLength) - U(this.outerSpacing) * 2, n = this.numHoles - 1;
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
        i = e.getLongSide() - U(this.distanceFromEdge);
        break;
      case "y1":
      case "y2":
        i = U(this.position) + U(this.outerSpacing) + r * n;
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
        i = U(this.position) + U(this.outerSpacing) + r * n;
        break;
      case "y1":
        i = U(this.distanceFromEdge);
        break;
      case "y2":
        i = e.getShortSide() - U(this.distanceFromEdge);
        break;
    }
    return i;
  }
  createHoles(e) {
    this.holes = [];
    for (let n = 0; n < this.numHoles; n++) {
      const i = new Fa({
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
class rf {
  constructor({ type: e = "radius", size: n, index: i }) {
    m(this, "type");
    m(this, "size");
    m(this, "index");
    m(this, "valid");
    this.type = e, this.size = n, this.index = i;
  }
  validate(e, n) {
    const i = e.getShortSide(), r = [];
    if (this.type === null) {
      this.size = null;
      const s = ["a", "b", "c", "d"][this.index];
      e.banding[s] = !1, e.bandingType[s] = "";
    }
    return this.type && U(this.size) <= 0 && r.push({
      index: n,
      message: "Corner size cannot be zero or negative"
    }), this.type && U(this.size) > i / 2 && (this.size = i / 2), r.length ? this.valid = !1 : this.valid = !0, r;
  }
}
let fp = class {
  //shelfHoles?: ShelfHoles[] = [];
  constructor({ holes: e = [], hingeHoles: n = [], corners: i = [] } = {}) {
    m(this, "holes", []);
    m(this, "corners", []);
    m(this, "hingeHoles", []);
    i && i.length === 4 ? this.corners = i.map((r) => new rf(r)) : [0, 1, 2, 3].forEach((r) => {
      this.corners.push(new rf({
        type: null,
        size: null,
        index: r
      }));
    }), e && (this.holes = e.map((r) => new Fa(r))), n && (this.hingeHoles = n.map((r) => new nf(r)));
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
    const o = new Fa({
      x: e,
      y: n,
      diameter: i,
      depth: r,
      side: s
    });
    return this.holes.push(o), o;
  }
  createHingeHoles({ numHoles: e, position: n, diameter: i, depth: r = 0, edge: s = "x1", side: o = 0, distanceFromEdge: a = 0, outerSpacing: l = 0, minimumHoleDistance: c = 0, hingeLength: u = 0 }) {
    const f = new nf({
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
function sf(t, e) {
  t != null && t.length && t.forEach((n) => gw(n, e));
}
function gw(t, e) {
  if (!t.isSquare()) {
    if (t.getShortSide() === e.w && t.rot) {
      if (!t.setRotation(0, e))
        throw new Error("could not rotate shape correctly for subset calculation");
    } else if (!e.isSquare() && t.getLongSide() === e.w && !t.rot && !t.setRotation(1, e))
      throw new Error("could not rotate shape correctly for subset calculation");
  }
}
function mw(t, e, n = null, i = "l", r = !0, s = !0) {
  if (!(t != null && t.length))
    return;
  if (!e)
    throw new Error("positionShapes requires stock");
  const o = i === "l" ? "x" : "y", a = i === "l" ? "y" : "x";
  let l = 0;
  Ks(n) || mp(n) ? sf(t, n) : sf(t, n ?? e), s && (i === "l" ? t.sort(zs.LDIDA) : t.sort(zs.WDIDA)), t.forEach((c, u) => {
    c[o] = n ? n[o] + l : l, n && (c[a] = n[a]), l += c[o === "x" ? "l" : "w"] + e.getBladeWidth() + c.getMinSpacing(e, !0), n != null && n.isGroup() ? c.groupPlacementOrder = u : c.placementOrder = u, r && c.addToStock(e);
  });
}
const yw = {
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
function Pi(t) {
  if (!P(t) || typeof t != "object")
    return {};
  t = pw({}, t);
  for (const [e, n] of Object.entries(t))
    e !== "_id" && e.startsWith("_") && (t[e.substring(1)] = n, delete t[e]);
  return t;
}
function bw(t, e = null) {
  return t.map((n) => {
    var i;
    return delete n.id, e ? n.units = e : n.units || (n.units = ((i = this == null ? void 0 : this.optionsStore) == null ? void 0 : i.units) ?? "decimal"), new Vl(n);
  });
}
function vw({ stockList: t, removeScores: e = !1, saw: n = null, preventAutoRotation: i = !1, preventGrainRotation: r = !1 }) {
  return !t || !(t != null && t.length) ? [] : t.map((s) => {
    n && (s.saw = n), i && (s.preventAutoRotation = !0), r && (s.preventGrainRotation = !0);
    const o = new $n(s);
    if (o.issues.length)
      throw new Error(`Issues found when attempting to recreate stock list - ${o.issues.join()}`, { cause: o.issues });
    return e && delete o.algoBenchmark, o;
  });
}
function _w({ shapeList: t, stockList: e, preventAutoRotation: n = !1 }) {
  if (typeof e > "u")
    throw new Error("recreateShapeList requires stockList");
  return !t || !(t != null && t.length) ? [] : t.map((i) => {
    var o;
    n && (i.preventAutoRotation = !0);
    let r;
    if (Tw(i) && ((o = i == null ? void 0 : i.shapes) != null && o.length) ? (i.shapes = i.shapes.map((a) => new Pn(a)), r = new jl(i)) : r = new Pn(i), r.issues.length)
      throw new Error(`Issues found when attempting to recreate shape list - ${r.issues.join()}`);
    const s = e.find((a) => {
      var l;
      return a.id === (((l = i == null ? void 0 : i.stock) == null ? void 0 : l.id) ?? (i == null ? void 0 : i.stockId));
    });
    return r.stock = s, r;
  });
}
function ww({ cutList: t, stockList: e }) {
  if (typeof e > "u")
    throw new Error("recreateCutList requires stockList");
  return !t || !(t != null && t.length) ? [] : t.map((n) => {
    const i = new Co(n), r = e.find((s) => {
      var o;
      return s.id === (((o = n == null ? void 0 : n.stock) == null ? void 0 : o.id) ?? (n == null ? void 0 : n.stockId));
    });
    return i.stock = r, i;
  });
}
function xw({ segmentList: t, stockList: e }) {
  return !t || !(t != null && t.length) ? [] : t.map((n) => {
    const i = e.find((s) => {
      var o;
      return s.id === (((o = n == null ? void 0 : n.stock) == null ? void 0 : o.id) ?? (n == null ? void 0 : n.stockId));
    });
    return n.stock = i, n.preventAutoRotation = !0, new gp(n);
  });
}
function hp(t = null, e = null, n = null) {
  if (!t)
    throw new Error("no container supplied to willItFit");
  if (!e)
    throw new Error("no shape supplied to willItFit");
  const i = e.rot;
  function r(h = !1, d = "l") {
    var p, S;
    return wt.equalTo(e[h ? d === "l" ? "w" : "l" : d], t[d]) || wt.lessThanOrEqualTo(e[h ? d === "l" ? "w" : "l" : d], t[d] - (((S = (p = t == null ? void 0 : t.saw) == null ? void 0 : p.options) == null ? void 0 : S.minSpacing) ?? 0));
  }
  function s(h = !0) {
    return e.setRotation(i), h;
  }
  const o = e.getNecessaryOrientation(t);
  let a = null;
  if (o && (a = o === "l" ? 0 : 1), e.orientationLock) {
    if (P(n) && n !== a)
      return s(!1);
    e.forceRotate(a);
  } else
    P(n) && e.forceRotate(n);
  if (a && e.rot !== a)
    return s(!1);
  const l = r(!1, "l"), c = r(!1, "w"), u = r(!0, "l"), f = r(!0, "w");
  return P(n) || o ? s(l && c) : s(l && c || u && f);
}
class dp {
  constructor(e, n = !1) {
    m(this, "readonly");
    m(this, "id");
    m(this, "listId");
    m(this, "units", "decimal");
    m(this, "l");
    m(this, "w");
    m(this, "t");
    m(this, "q");
    m(this, "name");
    m(this, "material");
    m(this, "trim", {
      x1: 0,
      x2: 0,
      y1: 0,
      y2: 0
    });
    m(this, "cost", null);
    m(this, "grain", "");
    m(this, "selected", !1);
    //used for multiple editing
    m(this, "multiSelect", !1);
    //is this the multi-select stock
    m(this, "type", null);
    m(this, "autoAdd", !1);
    m(this, "used");
    m(this, "saw");
    m(this, "preventGrainRotation");
    m(this, "issues", []);
    m(this, "warnings", []);
    m(this, "notes", "");
    var i, r, s, o, a;
    e = Pi(e), P(e.units) || console.warn("Attempting to create InputStock without units"), this.units = e.units, this.readonly = e.readonly, this.id = e.id, this.listId = e != null && e.listId ? e.listId : Date.now().toString() + Math.ceil(Math.random() * 1e16), this.l = P(e.l) ? U(e.l, this.units, !1, n) : null, this.w = P(e.w) ? U(e.w, this.units, !1, n) : null, this.t = P(e.t) ? U(e.t, this.units, !1, n) : null, this.q = P(e.q) ? typeof e.q == "string" ? parseInt(e.q) : e.q : null, this.autoAdd = P(e.autoAdd) ? e.autoAdd : !1, this.name = P(e.name) ? Mr(e.name).toUpperCase() : "", this.material = P(e.material) ? e.material.trim().toUpperCase() : "", this.trim = {
      x1: P((i = e == null ? void 0 : e.trim) == null ? void 0 : i.x1) ? U(e.trim.x1, this.units, !1, n) : null,
      x2: P((r = e == null ? void 0 : e.trim) == null ? void 0 : r.x2) ? U(e.trim.x2, this.units, !1, n) : null,
      y1: P((s = e == null ? void 0 : e.trim) == null ? void 0 : s.y1) ? U(e.trim.y1, this.units, !1, n) : null,
      y2: P((o = e == null ? void 0 : e.trim) == null ? void 0 : o.y2) ? U(e.trim.y2, this.units, !1, n) : null
    }, this.cost = P(e.cost) ? e.cost : null, this.grain = P(e.grain) ? e.grain.toLowerCase() : "", this.multiSelect = e.multiSelect, this.type = e.type, this.preventGrainRotation = !0, this.notes = e != null && e.notes ? (a = e.notes) == null ? void 0 : a.replace(/,/g, "") : "";
  }
  //change the units of the stock
  changeUnits(e, n, i) {
    var r, s, o, a;
    (e === "decimal" || e === "fraction") && (this.units = e, this.l = this.l ? U(this.l, e, !1, !1, i) : null, this.w = this.w ? U(this.w, e, !1, !1, i) : null, this.t = this.t ? U(this.t, e, !1, !1, i) : null, this.trim = {
      x1: P((r = this == null ? void 0 : this.trim) == null ? void 0 : r.x1) ? U(this.trim.x1, e, !1, !1, i) : null,
      x2: P((s = this == null ? void 0 : this.trim) == null ? void 0 : s.x2) ? U(this.trim.x2, e, !1, !1, i) : null,
      y1: P((o = this == null ? void 0 : this.trim) == null ? void 0 : o.y1) ? U(this.trim.y1, e, !1, !1, i) : null,
      y2: P((a = this == null ? void 0 : this.trim) == null ? void 0 : a.y1) ? U(this.trim.y2, e, !1, !1, i) : null
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
  isSquare() {
    return this.l === this.w;
  }
  getWarnings() {
    this.warnings = [], ["q"].forEach((e) => {
      this.warnings.push(...ee[e](this[e]));
    });
  }
  validate() {
    return this.issues = [], ["l", "w", "t"].forEach((e) => {
      this.issues.push(...ee[e](this[e]));
    }), this.issues.push(...ee.trim(this)), this.getWarnings(), this.issues;
  }
}
class Vl {
  constructor(e, n = !1) {
    m(this, "readonly");
    m(this, "id");
    m(this, "listId");
    m(this, "units", "decimal");
    m(this, "l");
    m(this, "w");
    m(this, "t");
    m(this, "q", 1);
    m(this, "name", "");
    m(this, "material", "");
    m(this, "trim", {
      x1: 0,
      x2: 0,
      y1: 0,
      y2: 0
    });
    m(this, "cost");
    m(this, "grain");
    m(this, "bandingOptions");
    m(this, "banding", {
      a: !1,
      b: !1,
      c: !1,
      d: !1,
      x1: !1,
      x2: !1,
      y1: !1,
      y2: !1
    });
    m(this, "bandingType", {
      a: "",
      b: "",
      c: "",
      d: "",
      x1: "",
      x2: "",
      y1: "",
      y2: ""
    });
    m(this, "orientationLock");
    m(this, "selectedMaterial");
    m(this, "selected");
    //used for multiple editing
    m(this, "multiSelect", !1);
    m(this, "machining");
    m(this, "issues", []);
    m(this, "warnings", []);
    m(this, "notes", "");
    m(this, "stockLock");
    var i, r, s, o, a, l, c, u, f, h, d, p, S, A, v, _, b, w, E, C, N, F, $, V, H, j, W, rt, Dt, pt;
    e = e = Pi(e), this.units = e.units, this.readonly = e.readonly, this.id = e.id, this.listId = e != null && e.listId ? e.listId : Date.now().toString() + Math.ceil(Math.random() * 1e16), this.l = P(e.l) ? U(e.l, this.units, !1, n) : null, this.w = P(e.w) ? U(e.w, this.units, !1, n) : null, this.t = P(e.t) ? U(e.t, this.units, !1, n) : null, this.q = P(e == null ? void 0 : e.q) ? typeof e.q == "string" ? parseInt(e.q) : e.q : null, this.name = P(e.name) ? Mr(e.name).toUpperCase() : "", this.material = P(e.material) ? e.material.trim().toUpperCase() : "", this.trim = {
      x1: P((i = e == null ? void 0 : e.trim) == null ? void 0 : i.x1) ? U(e.trim.x1, this.units, !1, n) : null,
      x2: P((r = e == null ? void 0 : e.trim) == null ? void 0 : r.x2) ? U(e.trim.x2, this.units, !1, n) : null,
      y1: P((s = e == null ? void 0 : e.trim) == null ? void 0 : s.y1) ? U(e.trim.y1, this.units, !1, n) : null,
      y2: P((o = e == null ? void 0 : e.trim) == null ? void 0 : o.y2) ? U(e.trim.y2, this.units, !1, n) : null
    }, this.bandingOptions = {
      a: P((a = e == null ? void 0 : e.bandingOptions) == null ? void 0 : a.a) ? e.bandingOptions.a : {},
      b: P((l = e == null ? void 0 : e.bandingOptions) == null ? void 0 : l.b) ? e.bandingOptions.b : {},
      c: P((c = e == null ? void 0 : e.bandingOptions) == null ? void 0 : c.c) ? e.bandingOptions.c : {},
      d: P((u = e == null ? void 0 : e.bandingOptions) == null ? void 0 : u.d) ? e.bandingOptions.d : {},
      x1: P((f = e == null ? void 0 : e.bandingOptions) == null ? void 0 : f.x1) ? e.bandingOptions.x1 : {},
      x2: P((h = e == null ? void 0 : e.bandingOptions) == null ? void 0 : h.x2) ? e.bandingOptions.x2 : {},
      y1: P((d = e == null ? void 0 : e.bandingOptions) == null ? void 0 : d.y1) ? e.bandingOptions.y1 : {},
      y2: P((p = e == null ? void 0 : e.bandingOptions) == null ? void 0 : p.y2) ? e.bandingOptions.y2 : {},
      all: P((S = e == null ? void 0 : e.bandingOptions) == null ? void 0 : S.all) ? e.bandingOptions.all : {}
    }, this.banding = {
      a: P((A = e == null ? void 0 : e.banding) == null ? void 0 : A.a) ? e.banding.a : !1,
      b: P((v = e == null ? void 0 : e.banding) == null ? void 0 : v.b) ? e.banding.b : !1,
      c: P((_ = e == null ? void 0 : e.banding) == null ? void 0 : _.c) ? e.banding.c : !1,
      d: P((b = e == null ? void 0 : e.banding) == null ? void 0 : b.d) ? e.banding.d : !1,
      x1: P((w = e == null ? void 0 : e.banding) == null ? void 0 : w.x1) ? e.banding.x1 : !1,
      x2: P((E = e == null ? void 0 : e.banding) == null ? void 0 : E.x2) ? e.banding.x2 : !1,
      y1: P((C = e == null ? void 0 : e.banding) == null ? void 0 : C.y1) ? e.banding.y1 : !1,
      y2: P((N = e == null ? void 0 : e.banding) == null ? void 0 : N.y2) ? e.banding.y2 : !1
    }, this.bandingType = {
      a: P((F = e == null ? void 0 : e.bandingType) == null ? void 0 : F.a) ? e.bandingType.a : "",
      b: P(($ = e == null ? void 0 : e.bandingType) == null ? void 0 : $.b) ? e.bandingType.b : "",
      c: P((V = e == null ? void 0 : e.bandingType) == null ? void 0 : V.c) ? e.bandingType.c : "",
      d: P((H = e == null ? void 0 : e.bandingType) == null ? void 0 : H.d) ? e.bandingType.d : "",
      x1: P((j = e == null ? void 0 : e.bandingType) == null ? void 0 : j.x1) ? e.bandingType.x1 : "",
      x2: P((W = e == null ? void 0 : e.bandingType) == null ? void 0 : W.x2) ? e.bandingType.x2 : "",
      y1: P((rt = e == null ? void 0 : e.bandingType) == null ? void 0 : rt.y1) ? e.bandingType.y1 : "",
      y2: P((Dt = e == null ? void 0 : e.bandingType) == null ? void 0 : Dt.y2) ? e.bandingType.y2 : ""
    }, this.orientationLock = P(e.orientationLock) ? e.orientationLock.toLowerCase() : "", this.selected = !1, this.multiSelect = e.multiSelect, this.machining = new fp(e.machining ?? {
      holes: [],
      corners: []
    }), this.notes = e != null && e.notes ? (pt = e.notes) == null ? void 0 : pt.replace(/,/g, "") : "", this.stockLock = (e == null ? void 0 : e.stockLock) ?? [];
  }
  /**
   * change the units of the shape
   * @param {String} newUnits
   */
  changeUnits(e, n, i) {
    var r, s, o, a;
    (e === "decimal" || e === "fraction") && (this.units = e, this.l = this.l ? U(this.l, e, !1, !1, i) : null, this.w = this.w ? U(this.w, e, !1, !1, i) : null, this.t = this.t ? U(this.t, e, !1, !1, i) : null, this.trim = {
      x1: P((r = this == null ? void 0 : this.trim) == null ? void 0 : r.x1) ? U(this.trim.x1, e, !1, !1, i) : null,
      x2: P((s = this == null ? void 0 : this.trim) == null ? void 0 : s.x2) ? U(this.trim.x2, e, !1, !1, i) : null,
      y1: P((o = this == null ? void 0 : this.trim) == null ? void 0 : o.y1) ? U(this.trim.y1, e, !1, !1, i) : null,
      y2: P((a = this == null ? void 0 : this.trim) == null ? void 0 : a.y1) ? U(this.trim.y2, e, !1, !1, i) : null
    });
  }
  isSquare() {
    return this.l === this.w;
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
    return U(this.l) > U(this.w) ? U(this.l) : U(this.w);
  }
  getShortSide() {
    return U(this.l) < U(this.w) ? U(this.l) : U(this.w);
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
  getTrimmedDimensions(e = !1) {
    let n = { l: U(this.l), w: U(this.w) };
    return e && (n = this.getRotatedDimensions()), {
      name: this.name,
      listId: this.listId,
      l: n.l - (this.trim.x1 + this.trim.x2),
      w: n.w - (this.trim.y1 + this.trim.y2),
      orientationLock: this.orientationLock
    };
  }
  //used to apply a single trim value to all sides
  applyPartTrim(e, n) {
    if (!this.readonly)
      if (e = U(e), this.trim) {
        for (const i in this.trim)
          this.trim[i] = e;
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
    return this.issues = [], n = U(n), ["l", "w", "t"].forEach((i) => {
      this.issues.push(...ee[i](this[i]));
    }), this.issues.push(...ee.partTrim(this, n)), this.issues.push(...ee.trim(this)), ee.machining(this), this.getWarnings(e, n), this.issues;
  }
  getWarnings(e, n = 0) {
    this.warnings = [], e.length && this.warnings.push(...ee.stockMatch(this, e, n)), ["q"].forEach((i) => {
      this.warnings.push(...ee[i](this[i]));
    });
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
    m(this, "id");
    m(this, "parentID");
    m(this, "name");
    m(this, "x");
    m(this, "y");
    m(this, "l");
    m(this, "w");
    m(this, "t");
    m(this, "q");
    m(this, "material");
    m(this, "grain");
    m(this, "orientationLock");
    m(this, "duplicate");
    m(this, "_trim");
    m(this, "trimmed");
    m(this, "preventAutoRotation");
    m(this, "preventGrainRotation");
    m(this, "units");
    m(this, "issues", []);
    m(this, "stock");
    m(this, "stockId");
    //used when object is compressed
    m(this, "cost");
    m(this, "offcut");
    m(this, "notes");
    this.initRectangle(e);
  }
  validateRectangle(e) {
    ["x", "y", "l", "w", "t"].forEach((n) => {
      this.createIssues(ee[n](e[n]));
    }), br(this) && !e.autoAdd && "q" in e && this.createIssues(ee.q((e == null ? void 0 : e.q) ?? 0)), "q" in e && (this.isShape() || this.isStock()) && !this.isGroup() && !this.isUserGroup() && this.createIssues(ee.q((e == null ? void 0 : e.q) ?? 0));
  }
  initRectangle(e) {
    var i, r, s, o, a;
    if (this.validateRectangle(e), this.issues.length)
      return;
    this.id = P(e.id) ? e.id.toString() : null, this.setParentID(), [
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
      if (!P(c))
        return this[l.key] = l.default;
      typeof c == "string" && (c = U(c)), this[l.key] = c;
    }), P(e == null ? void 0 : e.q) ? typeof e.q == "string" ? this.q = parseInt(e.q) : this.q = e.q : this.q = 0, this.name = P(e.name) && ((i = e == null ? void 0 : e.name) != null && i.length) ? (r = zl(Mr(e == null ? void 0 : e.name))) == null ? void 0 : r.toUpperCase() : null, !(e != null && e.preventAutoRotation) && !e.trimmed && this.w > this.l && ([this.l, this.w] = [this.w, this.l], this.grain && !(e != null && e.preventGrainRotation) && (this.grain = this.grain === "l" ? "w" : "l")), this.material = P(e.material) ? e.material.trim().toLowerCase() : null, this.duplicate = P(e == null ? void 0 : e.duplicate) ? e.duplicate : !1, P(e == null ? void 0 : e.stock) && (((o = (s = e.stock) == null ? void 0 : s.constructor) == null ? void 0 : o.name) === "Stock" ? this.stock = e.stock : this.stock = new $n(e.stock), this.stockId = this.stock.id), P(e == null ? void 0 : e.cost) ? typeof e.cost == "string" ? this.cost = parseFloat(e.cost) : typeof e.cost == "number" && (this.cost = e.cost) : this.cost = 0, this.grain = typeof e.grain < "u" && P(e == null ? void 0 : e.grain) ? e.grain.toLowerCase() : null;
    try {
      this.trim = e == null ? void 0 : e.trim;
    } catch (l) {
      if ((a = l == null ? void 0 : l.cause) != null && a.issues)
        this.issues.push(...l.cause.issues);
      else
        throw new Error("error when attempting to set trim");
    }
    this.trimmed = P(e == null ? void 0 : e.trimmed) ? e.trimmed : !1, this.offcut = P(e == null ? void 0 : e.offcut) ? e.offcut : !1, this.notes = typeof (e == null ? void 0 : e.notes) == "string" && e.notes.length ? e.notes.replace(/,/g, "").substring(0, 200) : "";
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
    }, P(e) && Object.keys(e).forEach((n) => {
      let i;
      if (typeof e[n] == "string") {
        const r = U(e[n]);
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
    var s;
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
    const r = (s = this == null ? void 0 : this.name) != null && s.length ? this.name.toUpperCase() : this.parentID;
    return r ? `${e} [${n.charAt(0).toUpperCase() + n.slice(1)} ${r}]` : e;
  }
  getDimensions() {
    return {
      id: this.id,
      l: this.l,
      w: this.w,
      t: this.t
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
    const i = new Rt(this.x + this.l, this.y);
    i.corner = "bottomRight";
    const r = new Rt(this.x, this.y + this.w);
    if (r.corner = "topLeft", (e == null ? void 0 : e.cutType) !== "efficiency" && !n)
      return [r, i];
    const s = new Rt(this.x, this.y);
    s.corner = "bottomLeft";
    const o = new Rt(this.x + this.l, this.y + this.w);
    return o.corner = "topRight", [s, r, o, i];
  }
  getCorners() {
    return {
      bottomLeft: new Rt(this.x, this.y),
      topLeft: new Rt(this.x, this.y + this.w),
      topRight: new Rt(this.x + this.l, this.y + this.w),
      bottomRight: new Rt(this.x + this.l, this.y)
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
  getTrimmedDimensions(e = !1) {
    let n = { l: this.l, w: this.w };
    return e && (n = this.getRotatedDimensions()), this.trimmed ? n : {
      l: n.l - (this.trim.x1 + this.trim.x2),
      w: n.w - (this.trim.y1 + this.trim.y2)
    };
  }
  //trim the rectangle
  trimDimensions() {
    var e, n, i, r;
    return this.trimmed ? !1 : (this.trim && Object.values(this.trim).filter((s) => !isNaN(parseFloat(s))).length && (P(this.l) && (this.l -= ((e = this == null ? void 0 : this.trim) != null && e.x1 ? this.trim.x1 : 0) + ((n = this == null ? void 0 : this.trim) != null && n.x2 ? this.trim.x2 : 0), this.l <= 0 && (console.error(this), this.issues.push(this.createIssue("Applying trim has produced a negative length")))), P(this.w) && (this.w -= ((i = this == null ? void 0 : this.trim) != null && i.y1 ? this.trim.y1 : 0) + ((r = this == null ? void 0 : this.trim) != null && r.y2 ? this.trim.y2 : 0), this.w <= 0 && (console.error(this), this.issues.push(this.createIssue("Applying trim has produced a negative width"))))), this.trimmed = !0, !0);
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
    if (Ks(this)) {
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
    return Ow(this);
  }
  isStock() {
    return br(this);
  }
  isGroup() {
    return Ks(this);
  }
  isUserGroup() {
    return mp(this);
  }
}
class pp extends Lr {
  //used by evo
  constructor(n) {
    super(n);
    m(this, "type");
    m(this, "saw");
    m(this, "algoBenchmark");
    switch (["sheet", "linear", "roll", null, void 0, ""].includes(n.type) ? this.type = n.type : this.issues.push(`Container type ${n.type ?? "N/A"} is not valid`), this.type || (this.type = "sheet"), this.setSaw(n), this.cutType) {
      case "beam":
        (!P(this.t) || this.t <= 0) && this.issues.push(this.createIssue("Stock for beam saws must have a thickness set"));
        break;
    }
  }
  setSaw(n) {
    var i, r, s, o;
    if (P(n) || (this.saw = new On(null)), P(n == null ? void 0 : n.saw)) {
      if (!((r = n == null ? void 0 : n.saw) != null && r.cutType)) {
        const { cutType: a, cutPreference: l } = $a(n.saw.cutPreference);
        n.saw.cutType = a, n.saw.cutPreference = l;
      }
    } else {
      n.saw = {};
      const { cutType: a, cutPreference: l } = $a(n.cutPreference);
      n.saw.cutType = a, n.saw.cutPreference = l, P(n == null ? void 0 : n.bladeWidth) && (n.saw.bladeWidth = n.bladeWidth), P((i = n == null ? void 0 : n.blade) == null ? void 0 : i.width) && (n.saw.bladeWidth = n.blade.width), P(n == null ? void 0 : n.efficiencyOptions) && (n.saw.efficiencyOptions = n.efficiencyOptions), P(n == null ? void 0 : n.guillotineOptions) && (n.saw.guillotineOptions = n.guillotineOptions), P(n == null ? void 0 : n.stackHeight) && (n.saw.stackHeight = n.stackHeight);
    }
    try {
      P(n == null ? void 0 : n.saw) && (Pw(n.saw) ? this.saw = n.saw : this.saw = new On(n.saw, this.type)), (o = (s = this.saw) == null ? void 0 : s.issues) != null && o.length && this.issues.push(...this.saw.issues);
    } catch (a) {
      throw new Error("error creating saw", { cause: a });
    }
  }
  get cutType() {
    var n, i, r, s;
    return P((n = this == null ? void 0 : this.saw) == null ? void 0 : n.cutType) ? this.saw.cutType : (i = this.stock) != null && i.isStock() ? null : ((s = (r = this == null ? void 0 : this.stock) == null ? void 0 : r.saw) == null ? void 0 : s.cutType) ?? null;
  }
  get cutPreference() {
    var n, i, r, s;
    return P((n = this.saw) == null ? void 0 : n.cutPreference) ? this.saw.cutPreference : (i = this.stock) != null && i.isStock() ? null : ((s = (r = this.stock) == null ? void 0 : r.saw) == null ? void 0 : s.cutPreference) ?? null;
  }
  get guillotineOptions() {
    var n, i, r, s;
    return P((n = this.saw) == null ? void 0 : n.guillotineOptions) ? this.saw.guillotineOptions : (i = this.stock) != null && i.isStock() ? null : ((s = (r = this == null ? void 0 : this.stock) == null ? void 0 : r.saw) == null ? void 0 : s.guillotineOptions) ?? null;
  }
  get efficiencyOptions() {
    var n, i, r, s;
    return P((n = this.saw) == null ? void 0 : n.efficiencyOptions) ? this.saw.efficiencyOptions : (i = this.stock) != null && i.isStock() ? null : ((s = (r = this == null ? void 0 : this.stock) == null ? void 0 : r.saw) == null ? void 0 : s.efficiencyOptions) ?? null;
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
function $a(t) {
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
    m(this, "issues");
    m(this, "bladeWidth");
    m(this, "cutType");
    m(this, "cutPreference");
    m(this, "guillotineOptions");
    m(this, "efficiencyOptions");
    m(this, "stackHeight");
    m(this, "stockType");
    m(this, "options");
    switch (e = Pi(e), this.options = (e == null ? void 0 : e.options) ?? null, this.stackHeight = (e == null ? void 0 : e.stackHeight) ?? null, this.stockType = (e == null ? void 0 : e.stockType) ?? n, this.issues = [], ["sheet", "linear", "roll"].includes(this.stockType) || this.issues.push(`Saw stock type: ${this.stockType} not valid`), this.stockType || (this.stockType = "sheet"), this.cutType = e == null ? void 0 : e.cutType, this.stockType) {
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
    switch (P(e == null ? void 0 : e.bladeWidth) ? typeof e.bladeWidth == "string" ? this.bladeWidth = U(e.bladeWidth) : this.bladeWidth = e.bladeWidth : this.bladeWidth = 0, (isNaN(this.bladeWidth) || this.bladeWidth < 0) && (this.issues.push(`Blade width: ${this.bladeWidth ?? "N/A"} is not valid`), this.bladeWidth = 0), this.stockType) {
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
        this.efficiencyOptions = P(e == null ? void 0 : e.efficiencyOptions) ? e.efficiencyOptions : { primaryCompression: "y" };
        break;
      case "guillotine":
        this.guillotineOptions = P(e == null ? void 0 : e.guillotineOptions) ? e.guillotineOptions : { strategy: "efficiency" };
        break;
      case "beam":
        this.guillotineOptions = P(e == null ? void 0 : e.guillotineOptions) ? e.guillotineOptions : { strategy: "efficiency" }, this.cutPreference = "l", [null, void 0].includes(this.stackHeight) && this.issues.push("Beam saws require a stack height to be set");
        break;
    }
  }
  clone() {
    const e = structuredClone(this);
    return new On(e);
  }
}
class $n extends pp {
  //used by stock matching
  constructor(n) {
    n = Pi(n), n.preventAutoRotation = (n == null ? void 0 : n.type) === "roll", n.autoAdd && !n.q && (n.q = 1);
    super(n);
    m(this, "_id");
    //used for mongo
    m(this, "autoAdd");
    m(this, "allowExactFitShapes");
    m(this, "analysis");
    m(this, "tidy");
    m(this, "used");
    m(this, "stack");
    m(this, "winningStrategy");
    //used for reporting
    m(this, "unusable");
    delete this.stock, this._id = n == null ? void 0 : n._id, this.autoAdd = P(n == null ? void 0 : n.autoAdd) ? n.autoAdd : !1, this.allowExactFitShapes = P(n == null ? void 0 : n.allowExactFitShapes) ? n.allowExactFitShapes : !1, this.analysis = P(n.analysis) ? n.analysis : null, this.tidy = P(n == null ? void 0 : n.tidy) ? n.tidy : !1, this.algoBenchmark = null, this.used = P(n == null ? void 0 : n.used) ? n.used : !1, this.stack = P(n == null ? void 0 : n.stack) ? n.stack : !1, this.initStock(n);
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
      this.createIssues(ee[i](n[i]));
    }), this.createIssues(ee.trim(this));
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
    return s.id = r, s.used = !1, s.duplicate = !0, s.stack = !1, s.saw = this.saw, new $n(s);
  }
}
class Sw extends Lr {
  constructor(n) {
    super(n);
    m(this, "addToInventory");
    //for front end selection
    m(this, "added");
    //for adding to inputStock
    m(this, "placementOrder");
    m(this, "flex");
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
function kw({ offcuts: t, stockList: e, preventAutoRotation: n = !0 }) {
  return !t || !(t != null && t.length) ? [] : t.map((i) => {
    const r = e.find((o) => {
      var a;
      return o.id === (((a = i == null ? void 0 : i.stock) == null ? void 0 : a.id) ?? (i == null ? void 0 : i.stockId));
    });
    return i.stock = r, n && (i.preventAutoRotation = !0), new Sw(i);
  });
}
class Pn extends Lr {
  constructor(n) {
    n = Pi(n);
    super(n);
    m(this, "added");
    m(this, "guillotineData");
    m(this, "_banding");
    m(this, "_bandingType");
    m(this, "stockLock");
    m(this, "score");
    m(this, "bestScore");
    m(this, "placementOrder");
    //groups
    m(this, "groupPlacementOrder");
    m(this, "group");
    m(this, "groupID");
    m(this, "inGroup");
    //is the shape currently part of at least one group
    m(this, "inUserGroup");
    //is the shape currently part of a user group`
    m(this, "addedAsGroup");
    m(this, "stripShape");
    m(this, "isFirstShape");
    m(this, "firstShapeSampleRotations", []);
    //used for setting the rotation of the first shape (guillotine)
    m(this, "dimension");
    //used for apex shapes
    m(this, "subsetUsed");
    m(this, "index");
    //used for ptx
    m(this, "stackedMatch");
    //used for stack detection
    m(this, "stockMatch");
    m(this, "machining");
    m(this, "weighting");
    m(this, "minSpacing");
    this.initShape(n);
  }
  initShape(n) {
    if (this.validateShape(n), this.issues.length)
      throw new Error(this.issues.join(`
`));
    this.added = P(n == null ? void 0 : n.added) ? n.added : !1, this.guillotineData = n == null ? void 0 : n.guillotineData, (n == null ? void 0 : n.orientationLock) === " " && (n.orientationLock = ""), this.orientationLock = P(n == null ? void 0 : n.orientationLock) && this.l !== this.w ? n.orientationLock.toLowerCase() : null, this.banding = n == null ? void 0 : n.banding, this.bandingType = n == null ? void 0 : n.bandingType, P(n == null ? void 0 : n.stockLock) ? Array.isArray(n == null ? void 0 : n.stockLock) && (this.stockLock = n.stockLock.map((i) => i.toString())) : this.stockLock = [], this.inGroup = P(n == null ? void 0 : n.inGroup) ? n.inGroup : !1, this.inUserGroup = P(n == null ? void 0 : n.inUserGroup) ? n.inUserGroup : !1, this.groupID = P(n == null ? void 0 : n.groupID) ? n.groupID : null, this.addedAsGroup = P(n == null ? void 0 : n.addedAsGroup) ? n.addedAsGroup : !1, this.score = P(n == null ? void 0 : n.score) ? n.score : null, this.bestScore = P(n == null ? void 0 : n.bestScore) ? n.bestScore : {
      x: 0,
      y: 0,
      rot: null,
      total: null,
      group: null
    }, this.placementOrder = P(n == null ? void 0 : n.placementOrder) ? n.placementOrder : null, this.groupPlacementOrder = P(n == null ? void 0 : n.groupPlacementOrder) ? n.groupPlacementOrder : null, this.weighting = {}, this.minSpacing = (n == null ? void 0 : n.minSpacing) ?? 0, this.machining = P(n == null ? void 0 : n.machining) ? new fp(n.machining) : null;
  }
  getCopyNumber() {
    return parseInt(this.id.split(".").pop());
  }
  getMinSpacing(n, i = !1) {
    var o, a;
    let r = (this == null ? void 0 : this.minSpacing) || ((a = (o = n.saw) == null ? void 0 : o.options) == null ? void 0 : a.minSpacing) || 0;
    const s = n.getBladeWidth();
    return s > r && (r = s), i && (r -= s), r < 0 && (r = 0), r;
  }
  validateShape(n) {
    ["orientationLock", "banding"].forEach((i) => {
      this.createIssues(ee[i](n[i]));
    }), this.machining && this.machining.validateEverything(this);
  }
  //individual shape weighting
  calculateWeighting() {
  }
  update(n) {
    n = Pi(n), this.initShape(n), this.updateRectangle(n);
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
    }, P(n) && Object.keys(n).forEach((i) => this._banding[i] = P(n == null ? void 0 : n[i]) ? n[i] : !1);
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
    }, !!P(n)) {
      Object.keys(n).forEach((i) => this._bandingType[i] = P(n[i]) ? zl(Mr(n[i])) : "");
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
    if (!P(n))
      throw new Error("no rotation provided to canRotate");
    if (n === !0 && (n = 1), n === !1 && (n = 0), this.isSquare() && n || i && !this.willItFit(i, n))
      return !1;
    const r = this.getNecessaryOrientation(i);
    return !(r === "l" && n === 1 || r === "w" && n === 0);
  }
  //get the orientation lock catering for container grain
  convertShapeGrainToOrientationLock(n) {
    if (!P(this.orientationLock))
      return null;
    const i = n.getStock();
    return P(i.grain) ? this.orientationLock === i.grain ? "l" : "w" : this.orientationLock;
  }
  /**
   * get the orientation lock catering for container grain
   */
  getNecessaryOrientation(n) {
    return P(this.orientationLock) ? !n || this.isGroup() ? P(this.orientationLock) ? this.orientationLock : null : this.convertShapeGrainToOrientationLock(n) : null;
  }
  /**
   * get the required grain rotation
   * checks for stock grain and part orientationLock
   * does not check for fit
   */
  getGrainRotation(n) {
    if (!P(this.orientationLock))
      return null;
    const i = n.getStock();
    return !this.orientationLock || !P(i == null ? void 0 : i.grain) ? null : this.isGroup() ? this.orientationLock === "l" ? 0 : 1 : this.orientationLock === (i == null ? void 0 : i.grain) ? 0 : 1;
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
      return i.push(new Co({
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
    return hp(n, this, i);
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
class gp extends pp {
  constructor(n) {
    n.preventAutoRotation = !0;
    super(n);
    m(this, "shapes");
    m(this, "cuts");
    m(this, "phase");
    m(this, "merged");
    m(this, "children");
    m(this, "siblings");
    //used by vis only
    m(this, "parent");
    m(this, "segmentType");
    m(this, "completed");
    //used by vis only
    m(this, "rowSegment");
    //used by cuts
    m(this, "placementOrder");
    m(this, "hasBeamTrim");
    m(this, "cutDirection");
    if (this.validateSegment(n), this.issues.length)
      throw new Error(`Segment validation failed - ${this.issues.join(" ")}`);
    delete this.trim, delete this.trimmed, this.shapes = P(n == null ? void 0 : n.shapes) ? n.shapes : [], this.cuts = [], this.phase = P(n == null ? void 0 : n.phase) ? n.phase : null, this.merged = P(n == null ? void 0 : n.merged) ? n.merged : !1, this.parent = P(n == null ? void 0 : n.parent) ? n.parent : null, this.children = P(n == null ? void 0 : n.children) ? n.children : [], this.siblings = P(n == null ? void 0 : n.siblings) ? n.siblings : [], this.offcut = P(n == null ? void 0 : n.offcut) ? n.offcut : !1, this.segmentType = P(n == null ? void 0 : n.segmentType) ? n.segmentType : null, this.placementOrder = null, this.cutDirection = P(n == null ? void 0 : n.cutDirection) ? n.cutDirection : "l", this.hasBeamTrim = P(n == null ? void 0 : n.hasBeamTrim) ? n.hasBeamTrim : !1;
  }
  validateSegment(n) {
    var i, r;
    (wt.lessThanOrEqualTo(n.w, 0) || wt.lessThanOrEqualTo(n.l, 0)) && this.issues.push(`Zero / negative dimension - l: ${n.l}, w: ${n.w}.`), (wt.lessThan(n.x, 0) || wt.lessThan(n.y, 0)) && this.issues.push(`Negative position - x: ${n == null ? void 0 : n.x}, y: ${n == null ? void 0 : n.y}.`), n != null && n.stock && (wt.greaterThan(n.x + n.l, n.stock.l) || wt.greaterThan(n.y + n.w, n.stock.w)) && this.issues.push(`Outside of stock ${n.stock.id} - x: ${n.x}, y: ${n.y}, l: ${n.l}, w: ${n.w}, sl: ${(i = n == null ? void 0 : n.stock) == null ? void 0 : i.l}, sw: ${(r = n == null ? void 0 : n.stock) == null ? void 0 : r.w}.`);
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
class jl extends Pn {
  constructor(n) {
    var i;
    if (!((i = n == null ? void 0 : n.shapes) != null && i.length))
      throw new Error("attempting to create a group with no shapes");
    super(n);
    m(this, "shapes");
    m(this, "joiningDimension");
    m(this, "container");
    m(this, "outOfBounds");
    m(this, "collision");
    m(this, "counter", 0);
    m(this, "type");
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
    if (!n)
      throw new Error("placeShapes requires stock");
    this.added = !0, this.orientateShapes(n), this.shapes.forEach((i, r) => {
      r === 0 && this.x === 0 && this.y === 0 && (i.isFirstShape = !0), i.addedAsGroup = this.id, i.inGroup = !1, i.score = this.score, i.guillotineData = this.guillotineData, i.bestScore = this.bestScore, typeof this.placementOrder == "number" && (i.groupPlacementOrder = r, i.placementOrder = this.placementOrder + r / 1e6);
    }), this.setShapeCoordinates(!0, n);
  }
  /**
   * get shape coordinates if the shapes have not yet been placed
   */
  setShapeCoordinates(n = !0, i) {
    if (!i)
      throw new Error("setShapeCoordinates requires stock");
    mw(this.shapes, i, this, this.getPrimaryDimension(), n, this.type !== "user");
  }
  //this is for groups which are created once and reused between stock e.g. user groups
  orientateCorrectly(n) {
    this.orientateShapes(n), this.setRotationToOrientationLock(n);
  }
  //update the shape spacing and overall group dimensions to account for min spacing
  updateShapeSpacing(n) {
    const i = this.shapes.slice(0, -1).reduce((o, a) => o + a.getMinSpacing(n), 0), r = this.getPrimaryDimension(), s = this.shapes.reduce((o, a) => o + a[r], 0);
    this[r] = s + i;
  }
}
function Ew(t, e) {
  const n = Cw(t[0]);
  if (n && (t = t.map((u) => {
    const f = new Pn(u);
    return f.trimDimensions(), f;
  })), Aw(e[0]) && (e = e.map((u, f) => (u.id = `${f.toString()}.0`, new $n(u)))), t.some((u) => P(u.stockLock) && u.stockLock.length))
    return;
  e = e.filter((u) => u.autoAdd === !0 || P(u.q) && u.q > 0);
  const r = e.some((u) => P(u.material)), s = e.some((u) => P(u.t));
  if (!e.every((u) => P(u.type === "linear")) && !r && !s)
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
    const h = e.filter((d, p) => (f.stockMatch.material[p] = null, f.stockMatch.thickness[p] = null, f.stockMatch.width[p] = null, f.stockMatch.fit[p] = null, hp(d, f) ? f.stockMatch.fit[p] = !0 : f.stockMatch.fit[p] = !1, r ? d.material === f.material ? f.stockMatch.material[p] = !0 : f.stockMatch.material[p] = !1 : f.stockMatch.material[p] = !0, s ? P(f.t) && P(d.t) && wt.equalTo(f.t, d.t) ? f.stockMatch.thickness[p] = !0 : f.stockMatch.thickness[p] = !1 : f.stockMatch.thickness[p] = !0, d.type === "linear" ? f.canRotate(0, d) && wt.equalTo(f.w, d.w) || f.canRotate(1, d) && wt.equalTo(f.l, d.w) ? f.stockMatch.width[p] = !0 : f.stockMatch.width[p] = !1 : f.stockMatch.width[p] = !0, f.stockMatch.fit[p] && f.stockMatch.material[p] && f.stockMatch.thickness[p] && f.stockMatch.width[p]));
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
  const l = t.filter((u) => !u.stockLock || !u.stockLock.length).sort(zs.ID), c = e.filter((u) => !a.has(u.parentID)).sort(zs.ID);
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
function Tw(t) {
  return t.type === "user";
}
function Ks(t) {
  return t instanceof jl && t.type !== "user";
}
function mp(t) {
  return t instanceof jl && t.type === "user";
}
function Aw(t) {
  return t instanceof dp;
}
function Cw(t) {
  return t instanceof Vl;
}
function br(t) {
  return t instanceof $n;
}
function Es(t) {
  return t instanceof Pn;
}
function Ow(t) {
  return t instanceof gp;
}
function Pw(t) {
  return t instanceof On;
}
function Mr(t) {
  return t ? (t = t.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^ a-z0-9._\-|]/gim, ""), t.trim()) : null;
}
function zl(t, e = 100) {
  return t ? (t = t.substring(0, e), t.trim()) : null;
}
function Nw(t) {
  return Ah() ? (sm(t), !0) : !1;
}
function Gl(t) {
  return typeof t == "function" ? t() : Vh(t);
}
const Iw = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Lw = Object.prototype.toString, Mw = (t) => Lw.call(t) === "[object Object]", Rw = () => {
};
function Dw(t, e) {
  function n(...i) {
    return new Promise((r, s) => {
      Promise.resolve(t(() => e.apply(this, i), { fn: e, thisArg: this, args: i })).then(r).catch(s);
    });
  }
  return n;
}
const yp = (t) => t();
function Fw(t = yp) {
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
function $w(t) {
  return xo();
}
function Bw(t, e, n = {}) {
  const {
    eventFilter: i = yp,
    ...r
  } = n;
  return on(
    t,
    Dw(
      i,
      e
    ),
    r
  );
}
function Uw(t, e, n = {}) {
  const {
    eventFilter: i,
    ...r
  } = n, { eventFilter: s, pause: o, resume: a, isActive: l } = Fw(i);
  return { stop: Bw(
    t,
    e,
    {
      ...r,
      eventFilter: s
    }
  ), pause: o, resume: a, isActive: l };
}
function qw(t, e = !0, n) {
  $w() ? Al(t, n) : e ? t() : yo(t);
}
function Hw(t) {
  var e;
  const n = Gl(t);
  return (e = n == null ? void 0 : n.$el) != null ? e : n;
}
const Xs = Iw ? window : void 0;
function of(...t) {
  let e, n, i, r;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([n, i, r] = t, e = Xs) : [e, n, i, r] = t, !e)
    return Rw;
  Array.isArray(n) || (n = [n]), Array.isArray(i) || (i = [i]);
  const s = [], o = () => {
    s.forEach((u) => u()), s.length = 0;
  }, a = (u, f, h, d) => (u.addEventListener(f, h, d), () => u.removeEventListener(f, h, d)), l = on(
    () => [Hw(e), Gl(r)],
    ([u, f]) => {
      if (o(), !u)
        return;
      const h = Mw(f) ? { ...f } : f;
      s.push(
        ...n.flatMap((d) => i.map((p) => a(u, d, p, h)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    l(), o();
  };
  return Nw(c), c;
}
const Xr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Jr = "__vueuse_ssr_handlers__", Ww = /* @__PURE__ */ Vw();
function Vw() {
  return Jr in Xr || (Xr[Jr] = Xr[Jr] || {}), Xr[Jr];
}
function jw(t, e) {
  return Ww[t] || e;
}
function zw(t) {
  return t == null ? "any" : t instanceof Set ? "set" : t instanceof Map ? "map" : t instanceof Date ? "date" : typeof t == "boolean" ? "boolean" : typeof t == "string" ? "string" : typeof t == "object" ? "object" : Number.isNaN(t) ? "any" : "number";
}
const Gw = {
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
}, af = "vueuse-storage";
function Yw(t, e, n, i = {}) {
  var r;
  const {
    flush: s = "pre",
    deep: o = !0,
    listenToStorageChanges: a = !0,
    writeDefaults: l = !0,
    mergeDefaults: c = !1,
    shallow: u,
    window: f = Xs,
    eventFilter: h,
    onError: d = (V) => {
      console.error(V);
    },
    initOnMounted: p
  } = i, S = (u ? gi : wi)(typeof e == "function" ? e() : e);
  if (!n)
    try {
      n = jw("getDefaultStorage", () => {
        var V;
        return (V = Xs) == null ? void 0 : V.localStorage;
      })();
    } catch (V) {
      d(V);
    }
  if (!n)
    return S;
  const A = Gl(e), v = zw(A), _ = (r = i.serializer) != null ? r : Gw[v], { pause: b, resume: w } = Uw(
    S,
    () => C(S.value),
    { flush: s, deep: o, eventFilter: h }
  );
  f && a && qw(() => {
    of(f, "storage", F), of(f, af, $), p && F();
  }), p || F();
  function E(V, H) {
    f && f.dispatchEvent(new CustomEvent(af, {
      detail: {
        key: t,
        oldValue: V,
        newValue: H,
        storageArea: n
      }
    }));
  }
  function C(V) {
    try {
      const H = n.getItem(t);
      if (V == null)
        E(H, null), n.removeItem(t);
      else {
        const j = _.write(V);
        H !== j && (n.setItem(t, j), E(H, j));
      }
    } catch (H) {
      d(H);
    }
  }
  function N(V) {
    const H = V ? V.newValue : n.getItem(t);
    if (H == null)
      return l && A != null && n.setItem(t, _.write(A)), A;
    if (!V && c) {
      const j = _.read(H);
      return typeof c == "function" ? c(j, A) : v === "object" && !Array.isArray(j) ? { ...A, ...j } : j;
    } else
      return typeof H != "string" ? H : _.read(H);
  }
  function F(V) {
    if (!(V && V.storageArea !== n)) {
      if (V && V.key == null) {
        S.value = A;
        return;
      }
      if (!(V && V.key !== t)) {
        b();
        try {
          (V == null ? void 0 : V.newValue) !== _.write(S.value) && (S.value = N(V));
        } catch (H) {
          d(H);
        } finally {
          V ? yo(w) : w();
        }
      }
    }
  }
  function $(V) {
    F(V.detail);
  }
  return S;
}
function lf(t, e, n = {}) {
  const { window: i = Xs } = n;
  return Yw(t, e, i == null ? void 0 : i.localStorage, n);
}
const Ke = /* @__PURE__ */ Object.create(null);
Ke.open = "0";
Ke.close = "1";
Ke.ping = "2";
Ke.pong = "3";
Ke.message = "4";
Ke.upgrade = "5";
Ke.noop = "6";
const Ts = /* @__PURE__ */ Object.create(null);
Object.keys(Ke).forEach((t) => {
  Ts[Ke[t]] = t;
});
const Ba = { type: "error", data: "parser error" }, bp = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", vp = typeof ArrayBuffer == "function", _p = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer, Yl = ({ type: t, data: e }, n, i) => bp && e instanceof Blob ? n ? i(e) : cf(e, i) : vp && (e instanceof ArrayBuffer || _p(e)) ? n ? i(e) : cf(new Blob([e]), i) : i(Ke[t] + (e || "")), cf = (t, e) => {
  const n = new FileReader();
  return n.onload = function() {
    const i = n.result.split(",")[1];
    e("b" + (i || ""));
  }, n.readAsDataURL(t);
};
function uf(t) {
  return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
}
let ea;
function Kw(t, e) {
  if (bp && t.data instanceof Blob)
    return t.data.arrayBuffer().then(uf).then(e);
  if (vp && (t.data instanceof ArrayBuffer || _p(t.data)))
    return e(uf(t.data));
  Yl(t, !1, (n) => {
    ea || (ea = new TextEncoder()), e(ea.encode(n));
  });
}
const ff = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Qi = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < ff.length; t++)
  Qi[ff.charCodeAt(t)] = t;
const Xw = (t) => {
  let e = t.length * 0.75, n = t.length, i, r = 0, s, o, a, l;
  t[t.length - 1] === "=" && (e--, t[t.length - 2] === "=" && e--);
  const c = new ArrayBuffer(e), u = new Uint8Array(c);
  for (i = 0; i < n; i += 4)
    s = Qi[t.charCodeAt(i)], o = Qi[t.charCodeAt(i + 1)], a = Qi[t.charCodeAt(i + 2)], l = Qi[t.charCodeAt(i + 3)], u[r++] = s << 2 | o >> 4, u[r++] = (o & 15) << 4 | a >> 2, u[r++] = (a & 3) << 6 | l & 63;
  return c;
}, Jw = typeof ArrayBuffer == "function", Kl = (t, e) => {
  if (typeof t != "string")
    return {
      type: "message",
      data: wp(t, e)
    };
  const n = t.charAt(0);
  return n === "b" ? {
    type: "message",
    data: Qw(t.substring(1), e)
  } : Ts[n] ? t.length > 1 ? {
    type: Ts[n],
    data: t.substring(1)
  } : {
    type: Ts[n]
  } : Ba;
}, Qw = (t, e) => {
  if (Jw) {
    const n = Xw(t);
    return wp(n, e);
  } else
    return { base64: !0, data: t };
}, wp = (t, e) => {
  switch (e) {
    case "blob":
      return t instanceof Blob ? t : new Blob([t]);
    case "arraybuffer":
    default:
      return t instanceof ArrayBuffer ? t : t.buffer;
  }
}, xp = "", Zw = (t, e) => {
  const n = t.length, i = new Array(n);
  let r = 0;
  t.forEach((s, o) => {
    Yl(s, !1, (a) => {
      i[o] = a, ++r === n && e(i.join(xp));
    });
  });
}, tx = (t, e) => {
  const n = t.split(xp), i = [];
  for (let r = 0; r < n.length; r++) {
    const s = Kl(n[r], e);
    if (i.push(s), s.type === "error")
      break;
  }
  return i;
};
function ex() {
  return new TransformStream({
    transform(t, e) {
      Kw(t, (n) => {
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
let na;
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
function nx(t, e) {
  na || (na = new TextDecoder());
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
          a.enqueue(Kl(s ? l : na.decode(l), e)), i = 0;
        }
        if (r === 0 || r > t) {
          a.enqueue(Ba);
          break;
        }
      }
    }
  });
}
const Sp = 4;
function Bt(t) {
  if (t)
    return ix(t);
}
function ix(t) {
  for (var e in Bt.prototype)
    t[e] = Bt.prototype[e];
  return t;
}
Bt.prototype.on = Bt.prototype.addEventListener = function(t, e) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
};
Bt.prototype.once = function(t, e) {
  function n() {
    this.off(t, n), e.apply(this, arguments);
  }
  return n.fn = e, this.on(t, n), this;
};
Bt.prototype.off = Bt.prototype.removeListener = Bt.prototype.removeAllListeners = Bt.prototype.removeEventListener = function(t, e) {
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
Bt.prototype.emit = function(t) {
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
Bt.prototype.emitReserved = Bt.prototype.emit;
Bt.prototype.listeners = function(t) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
};
Bt.prototype.hasListeners = function(t) {
  return !!this.listeners(t).length;
};
const we = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
function kp(t, ...e) {
  return e.reduce((n, i) => (t.hasOwnProperty(i) && (n[i] = t[i]), n), {});
}
const rx = we.setTimeout, sx = we.clearTimeout;
function Mo(t, e) {
  e.useNativeTimers ? (t.setTimeoutFn = rx.bind(we), t.clearTimeoutFn = sx.bind(we)) : (t.setTimeoutFn = we.setTimeout.bind(we), t.clearTimeoutFn = we.clearTimeout.bind(we));
}
const ox = 1.33;
function ax(t) {
  return typeof t == "string" ? lx(t) : Math.ceil((t.byteLength || t.size) * ox);
}
function lx(t) {
  let e = 0, n = 0;
  for (let i = 0, r = t.length; i < r; i++)
    e = t.charCodeAt(i), e < 128 ? n += 1 : e < 2048 ? n += 2 : e < 55296 || e >= 57344 ? n += 3 : (i++, n += 4);
  return n;
}
function cx(t) {
  let e = "";
  for (let n in t)
    t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
  return e;
}
function ux(t) {
  let e = {}, n = t.split("&");
  for (let i = 0, r = n.length; i < r; i++) {
    let s = n[i].split("=");
    e[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
  }
  return e;
}
class fx extends Error {
  constructor(e, n, i) {
    super(e), this.description = n, this.context = i, this.type = "TransportError";
  }
}
class Xl extends Bt {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(e) {
    super(), this.writable = !1, Mo(this, e), this.opts = e, this.query = e.query, this.socket = e.socket;
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
    return super.emitReserved("error", new fx(e, n, i)), this;
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
    const n = Kl(e, this.socket.binaryType);
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
    const n = cx(e);
    return n.length ? "?" + n : "";
  }
}
const Ep = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), Ua = 64, hx = {};
let hf = 0, ts = 0, df;
function pf(t) {
  let e = "";
  do
    e = Ep[t % Ua] + e, t = Math.floor(t / Ua);
  while (t > 0);
  return e;
}
function Tp() {
  const t = pf(+/* @__PURE__ */ new Date());
  return t !== df ? (hf = 0, df = t) : t + "." + pf(hf++);
}
for (; ts < Ua; ts++)
  hx[Ep[ts]] = ts;
let Ap = !1;
try {
  Ap = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const dx = Ap;
function Cp(t) {
  const e = t.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!e || dx))
      return new XMLHttpRequest();
  } catch {
  }
  if (!e)
    try {
      return new we[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
function px() {
}
const gx = function() {
  return new Cp({
    xdomain: !1
  }).responseType != null;
}();
class mx extends Xl {
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
    this.supportsBinary = gx && !n, this.opts.withCredentials && (this.cookieJar = void 0);
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
    tx(e, this.socket.binaryType).forEach(n), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
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
    this.writable = !1, Zw(e, (n) => {
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
    return this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = Tp()), !this.supportsBinary && !n.sid && (n.b64 = 1), this.createUri(e, n);
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
class ze extends Bt {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(e, n) {
    super(), Mo(this, n), this.opts = n, this.method = n.method || "GET", this.uri = e, this.data = n.data !== void 0 ? n.data : null, this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  create() {
    var e;
    const n = kp(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    n.xdomain = !!this.opts.xd;
    const i = this.xhr = new Cp(n);
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
      if (this.xhr.onreadystatechange = px, e)
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
    attachEvent("onunload", gf);
  else if (typeof addEventListener == "function") {
    const t = "onpagehide" in we ? "pagehide" : "unload";
    addEventListener(t, gf, !1);
  }
}
function gf() {
  for (let t in ze.requests)
    ze.requests.hasOwnProperty(t) && ze.requests[t].abort();
}
const Jl = typeof Promise == "function" && typeof Promise.resolve == "function" ? (e) => Promise.resolve().then(e) : (e, n) => n(e, 0), es = we.WebSocket || we.MozWebSocket, mf = !0, yx = "arraybuffer", yf = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class bx extends Xl {
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
    const e = this.uri(), n = this.opts.protocols, i = yf ? {} : kp(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (i.headers = this.opts.extraHeaders);
    try {
      this.ws = mf && !yf ? n ? new es(e, n) : new es(e) : new es(e, n, i);
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
      Yl(i, this.supportsBinary, (s) => {
        const o = {};
        try {
          mf && this.ws.send(s);
        } catch {
        }
        r && Jl(() => {
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
    return this.opts.timestampRequests && (n[this.opts.timestampParam] = Tp()), this.supportsBinary || (n.b64 = 1), this.createUri(e, n);
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
class vx extends Xl {
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
        const n = nx(Number.MAX_SAFE_INTEGER, this.socket.binaryType), i = e.readable.pipeThrough(n).getReader(), r = ex();
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
        r && Jl(() => {
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
const _x = {
  websocket: bx,
  webtransport: vx,
  polling: mx
}, wx = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, xx = [
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
  let r = wx.exec(t || ""), s = {}, o = 14;
  for (; o--; )
    s[xx[o]] = r[o] || "";
  return n != -1 && i != -1 && (s.source = e, s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"), s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), s.ipv6uri = !0), s.pathNames = Sx(s, s.path), s.queryKey = kx(s, s.query), s;
}
function Sx(t, e) {
  const n = /\/{2,9}/g, i = e.replace(n, "/").split("/");
  return (e.slice(0, 1) == "/" || e.length === 0) && i.splice(0, 1), e.slice(-1) == "/" && i.splice(i.length - 1, 1), i;
}
function kx(t, e) {
  const n = {};
  return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(i, r, s) {
    r && (n[r] = s);
  }), n;
}
let Op = class pi extends Bt {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(e, n = {}) {
    super(), this.binaryType = yx, this.writeBuffer = [], e && typeof e == "object" && (n = e, e = null), e ? (e = qa(e), n.hostname = e.host, n.secure = e.protocol === "https" || e.protocol === "wss", n.port = e.port, e.query && (n.query = e.query)) : n.host && (n.hostname = qa(n.host).host), Mo(this, n), this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:", n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = n.transports || [
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
    }, n), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = ux(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
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
    n.EIO = Sp, n.transport = e, this.id && (n.sid = this.id);
    const i = Object.assign({}, this.opts, {
      query: n,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[e]);
    return new _x[e](i);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  open() {
    let e;
    if (this.opts.rememberUpgrade && pi.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
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
    pi.priorWebsocketSuccess = !1;
    const r = () => {
      i || (n.send([{ type: "ping", data: "probe" }]), n.once("packet", (f) => {
        if (!i)
          if (f.type === "pong" && f.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", n), !n)
              return;
            pi.priorWebsocketSuccess = n.name === "websocket", this.transport.pause(() => {
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
    if (this.readyState = "open", pi.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
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
      if (r && (n += ax(r)), i > 0 && n > this.maxPayload)
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
    pi.priorWebsocketSuccess = !1, this.emitReserved("error", e), this.onClose("transport error", e);
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
Op.protocol = Sp;
function Ex(t, e = "", n) {
  let i = t;
  n = n || typeof location < "u" && location, t == null && (t = n.protocol + "//" + n.host), typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = n.protocol + t : t = n.host + t), /^(https?|wss?):\/\//.test(t) || (typeof n < "u" ? t = n.protocol + "//" + t : t = "https://" + t), i = qa(t)), i.port || (/^(http|ws)$/.test(i.protocol) ? i.port = "80" : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")), i.path = i.path || "/";
  const s = i.host.indexOf(":") !== -1 ? "[" + i.host + "]" : i.host;
  return i.id = i.protocol + "://" + s + ":" + i.port + e, i.href = i.protocol + "://" + s + (n && n.port === i.port ? "" : ":" + i.port), i;
}
const Tx = typeof ArrayBuffer == "function", Ax = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer, Pp = Object.prototype.toString, Cx = typeof Blob == "function" || typeof Blob < "u" && Pp.call(Blob) === "[object BlobConstructor]", Ox = typeof File == "function" || typeof File < "u" && Pp.call(File) === "[object FileConstructor]";
function Ql(t) {
  return Tx && (t instanceof ArrayBuffer || Ax(t)) || Cx && t instanceof Blob || Ox && t instanceof File;
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
  if (Ql(t))
    return !0;
  if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
    return As(t.toJSON(), !0);
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n) && As(t[n]))
      return !0;
  return !1;
}
function Px(t) {
  const e = [], n = t.data, i = t;
  return i.data = Ha(n, e), i.attachments = e.length, { packet: i, buffers: e };
}
function Ha(t, e) {
  if (!t)
    return t;
  if (Ql(t)) {
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
function Nx(t, e) {
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
const Ix = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], Lx = 5;
var ft;
(function(t) {
  t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK";
})(ft || (ft = {}));
class Mx {
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
    return (e.type === ft.EVENT || e.type === ft.ACK) && As(e) ? this.encodeAsBinary({
      type: e.type === ft.EVENT ? ft.BINARY_EVENT : ft.BINARY_ACK,
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
    return (e.type === ft.BINARY_EVENT || e.type === ft.BINARY_ACK) && (n += e.attachments + "-"), e.nsp && e.nsp !== "/" && (n += e.nsp + ","), e.id != null && (n += e.id), e.data != null && (n += JSON.stringify(e.data, this.replacer)), n;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(e) {
    const n = Px(e), i = this.encodeAsString(n.packet), r = n.buffers;
    return r.unshift(i), r;
  }
}
function bf(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
class Zl extends Bt {
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
      const i = n.type === ft.BINARY_EVENT;
      i || n.type === ft.BINARY_ACK ? (n.type = i ? ft.EVENT : ft.ACK, this.reconstructor = new Rx(n), n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n);
    } else if (Ql(e) || e.base64)
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
    if (ft[i.type] === void 0)
      throw new Error("unknown packet type " + i.type);
    if (i.type === ft.BINARY_EVENT || i.type === ft.BINARY_ACK) {
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
      if (Zl.isPayloadValid(i.type, s))
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
      case ft.CONNECT:
        return bf(n);
      case ft.DISCONNECT:
        return n === void 0;
      case ft.CONNECT_ERROR:
        return typeof n == "string" || bf(n);
      case ft.EVENT:
      case ft.BINARY_EVENT:
        return Array.isArray(n) && (typeof n[0] == "number" || typeof n[0] == "string" && Ix.indexOf(n[0]) === -1);
      case ft.ACK:
      case ft.BINARY_ACK:
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
class Rx {
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
      const n = Nx(this.reconPack, this.buffers);
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
const Dx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, Decoder: Zl, Encoder: Mx, get PacketType() {
  return ft;
}, protocol: Lx }, Symbol.toStringTag, { value: "Module" }));
function Oe(t, e, n) {
  return t.on(e, n), function() {
    t.off(e, n);
  };
}
const Fx = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Np extends Bt {
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
      Oe(e, "open", this.onopen.bind(this)),
      Oe(e, "packet", this.onpacket.bind(this)),
      Oe(e, "error", this.onerror.bind(this)),
      Oe(e, "close", this.onclose.bind(this))
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
    if (Fx.hasOwnProperty(e))
      throw new Error('"' + e.toString() + '" is a reserved event name');
    if (n.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(n), this;
    const i = {
      type: ft.EVENT,
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
      type: ft.CONNECT,
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
        case ft.CONNECT:
          e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case ft.EVENT:
        case ft.BINARY_EVENT:
          this.onevent(e);
          break;
        case ft.ACK:
        case ft.BINARY_ACK:
          this.onack(e);
          break;
        case ft.DISCONNECT:
          this.ondisconnect();
          break;
        case ft.CONNECT_ERROR:
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
        type: ft.ACK,
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
    return this.connected && this.packet({ type: ft.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
function Hi(t) {
  t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
}
Hi.prototype.duration = function() {
  var t = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e = Math.random(), n = Math.floor(e * this.jitter * t);
    t = Math.floor(e * 10) & 1 ? t + n : t - n;
  }
  return Math.min(t, this.max) | 0;
};
Hi.prototype.reset = function() {
  this.attempts = 0;
};
Hi.prototype.setMin = function(t) {
  this.ms = t;
};
Hi.prototype.setMax = function(t) {
  this.max = t;
};
Hi.prototype.setJitter = function(t) {
  this.jitter = t;
};
class Va extends Bt {
  constructor(e, n) {
    var i;
    super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (n = e, e = void 0), n = n || {}, n.path = n.path || "/socket.io", this.opts = n, Mo(this, n), this.reconnection(n.reconnection !== !1), this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0), this.reconnectionDelay(n.reconnectionDelay || 1e3), this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3), this.randomizationFactor((i = n.randomizationFactor) !== null && i !== void 0 ? i : 0.5), this.backoff = new Hi({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(n.timeout == null ? 2e4 : n.timeout), this._readyState = "closed", this.uri = e;
    const r = n.parser || Dx;
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
    this.engine = new Op(this.uri, this.opts);
    const n = this.engine, i = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const r = Oe(n, "open", function() {
      i.onopen(), e && e();
    }), s = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), e ? e(a) : this.maybeReconnectOnOpen();
    }, o = Oe(n, "error", s);
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
    this.subs.push(Oe(e, "ping", this.onping.bind(this)), Oe(e, "data", this.ondata.bind(this)), Oe(e, "error", this.onerror.bind(this)), Oe(e, "close", this.onclose.bind(this)), Oe(this.decoder, "decoded", this.ondecoded.bind(this)));
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
    Jl(() => {
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
    return i ? this._autoConnect && !i.active && i.connect() : (i = new Np(this, e, n), this.nsps[e] = i), i;
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
const Ki = {};
function Cs(t, e) {
  typeof t == "object" && (e = t, t = void 0), e = e || {};
  const n = Ex(t, e.path || "/socket.io"), i = n.source, r = n.id, s = n.path, o = Ki[r] && s in Ki[r].nsps, a = e.forceNew || e["force new connection"] || e.multiplex === !1 || o;
  let l;
  return a ? l = new Va(i, e) : (Ki[r] || (Ki[r] = new Va(i, e)), l = Ki[r]), n.query && !e.query && (e.query = n.queryKey), l.socket(n.path, e);
}
Object.assign(Cs, {
  Manager: Va,
  Socket: Np,
  io: Cs,
  connect: Cs
});
var $x = typeof global == "object" && global && global.Object === Object && global, Bx = typeof self == "object" && self && self.Object === Object && self, tc = $x || Bx || Function("return this")(), Ni = tc.Symbol, Ip = Object.prototype, Ux = Ip.hasOwnProperty, qx = Ip.toString, Xi = Ni ? Ni.toStringTag : void 0;
function Hx(t) {
  var e = Ux.call(t, Xi), n = t[Xi];
  try {
    t[Xi] = void 0;
    var i = !0;
  } catch {
  }
  var r = qx.call(t);
  return i && (e ? t[Xi] = n : delete t[Xi]), r;
}
var Wx = Object.prototype, Vx = Wx.toString;
function jx(t) {
  return Vx.call(t);
}
var zx = "[object Null]", Gx = "[object Undefined]", vf = Ni ? Ni.toStringTag : void 0;
function Lp(t) {
  return t == null ? t === void 0 ? Gx : zx : vf && vf in Object(t) ? Hx(t) : jx(t);
}
function Yx(t) {
  return t != null && typeof t == "object";
}
var Kx = "[object Symbol]";
function ec(t) {
  return typeof t == "symbol" || Yx(t) && Lp(t) == Kx;
}
function Xx(t, e) {
  for (var n = -1, i = t == null ? 0 : t.length, r = Array(i); ++n < i; )
    r[n] = e(t[n], n, t);
  return r;
}
var nc = Array.isArray, Jx = 1 / 0, _f = Ni ? Ni.prototype : void 0, wf = _f ? _f.toString : void 0;
function Mp(t) {
  if (typeof t == "string")
    return t;
  if (nc(t))
    return Xx(t, Mp) + "";
  if (ec(t))
    return wf ? wf.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -Jx ? "-0" : e;
}
function Js(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Qx = "[object AsyncFunction]", Zx = "[object Function]", tS = "[object GeneratorFunction]", eS = "[object Proxy]";
function nS(t) {
  if (!Js(t))
    return !1;
  var e = Lp(t);
  return e == Zx || e == tS || e == Qx || e == eS;
}
var ia = tc["__core-js_shared__"], xf = function() {
  var t = /[^.]+$/.exec(ia && ia.keys && ia.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function iS(t) {
  return !!xf && xf in t;
}
var rS = Function.prototype, sS = rS.toString;
function oS(t) {
  if (t != null) {
    try {
      return sS.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var aS = /[\\^$.*+?()[\]{}|]/g, lS = /^\[object .+?Constructor\]$/, cS = Function.prototype, uS = Object.prototype, fS = cS.toString, hS = uS.hasOwnProperty, dS = RegExp(
  "^" + fS.call(hS).replace(aS, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function pS(t) {
  if (!Js(t) || iS(t))
    return !1;
  var e = nS(t) ? dS : lS;
  return e.test(oS(t));
}
function gS(t, e) {
  return t == null ? void 0 : t[e];
}
function ic(t, e) {
  var n = gS(t, e);
  return pS(n) ? n : void 0;
}
var Sf = function() {
  try {
    var t = ic(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), mS = 9007199254740991, yS = /^(?:0|[1-9]\d*)$/;
function bS(t, e) {
  var n = typeof t;
  return e = e ?? mS, !!e && (n == "number" || n != "symbol" && yS.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function vS(t, e, n) {
  e == "__proto__" && Sf ? Sf(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function Rp(t, e) {
  return t === e || t !== t && e !== e;
}
var _S = Object.prototype, wS = _S.hasOwnProperty;
function xS(t, e, n) {
  var i = t[e];
  (!(wS.call(t, e) && Rp(i, n)) || n === void 0 && !(e in t)) && vS(t, e, n);
}
var SS = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, kS = /^\w*$/;
function ES(t, e) {
  if (nc(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || ec(t) ? !0 : kS.test(t) || !SS.test(t) || e != null && t in Object(e);
}
var vr = ic(Object, "create");
function TS() {
  this.__data__ = vr ? vr(null) : {}, this.size = 0;
}
function AS(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var CS = "__lodash_hash_undefined__", OS = Object.prototype, PS = OS.hasOwnProperty;
function NS(t) {
  var e = this.__data__;
  if (vr) {
    var n = e[t];
    return n === CS ? void 0 : n;
  }
  return PS.call(e, t) ? e[t] : void 0;
}
var IS = Object.prototype, LS = IS.hasOwnProperty;
function MS(t) {
  var e = this.__data__;
  return vr ? e[t] !== void 0 : LS.call(e, t);
}
var RS = "__lodash_hash_undefined__";
function DS(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = vr && e === void 0 ? RS : e, this;
}
function ii(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
ii.prototype.clear = TS;
ii.prototype.delete = AS;
ii.prototype.get = NS;
ii.prototype.has = MS;
ii.prototype.set = DS;
function FS() {
  this.__data__ = [], this.size = 0;
}
function Ro(t, e) {
  for (var n = t.length; n--; )
    if (Rp(t[n][0], e))
      return n;
  return -1;
}
var $S = Array.prototype, BS = $S.splice;
function US(t) {
  var e = this.__data__, n = Ro(e, t);
  if (n < 0)
    return !1;
  var i = e.length - 1;
  return n == i ? e.pop() : BS.call(e, n, 1), --this.size, !0;
}
function qS(t) {
  var e = this.__data__, n = Ro(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function HS(t) {
  return Ro(this.__data__, t) > -1;
}
function WS(t, e) {
  var n = this.__data__, i = Ro(n, t);
  return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this;
}
function Wi(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
Wi.prototype.clear = FS;
Wi.prototype.delete = US;
Wi.prototype.get = qS;
Wi.prototype.has = HS;
Wi.prototype.set = WS;
var VS = ic(tc, "Map");
function jS() {
  this.size = 0, this.__data__ = {
    hash: new ii(),
    map: new (VS || Wi)(),
    string: new ii()
  };
}
function zS(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Do(t, e) {
  var n = t.__data__;
  return zS(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function GS(t) {
  var e = Do(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function YS(t) {
  return Do(this, t).get(t);
}
function KS(t) {
  return Do(this, t).has(t);
}
function XS(t, e) {
  var n = Do(this, t), i = n.size;
  return n.set(t, e), this.size += n.size == i ? 0 : 1, this;
}
function li(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
li.prototype.clear = jS;
li.prototype.delete = GS;
li.prototype.get = YS;
li.prototype.has = KS;
li.prototype.set = XS;
var JS = "Expected a function";
function rc(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(JS);
  var n = function() {
    var i = arguments, r = e ? e.apply(this, i) : i[0], s = n.cache;
    if (s.has(r))
      return s.get(r);
    var o = t.apply(this, i);
    return n.cache = s.set(r, o) || s, o;
  };
  return n.cache = new (rc.Cache || li)(), n;
}
rc.Cache = li;
var QS = 500;
function ZS(t) {
  var e = rc(t, function(i) {
    return n.size === QS && n.clear(), i;
  }), n = e.cache;
  return e;
}
var tk = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ek = /\\(\\)?/g, nk = ZS(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(tk, function(n, i, r, s) {
    e.push(r ? s.replace(ek, "$1") : i || n);
  }), e;
});
function ik(t) {
  return t == null ? "" : Mp(t);
}
function Dp(t, e) {
  return nc(t) ? t : ES(t, e) ? [t] : nk(ik(t));
}
var rk = 1 / 0;
function Fp(t) {
  if (typeof t == "string" || ec(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -rk ? "-0" : e;
}
function sk(t, e) {
  e = Dp(e, t);
  for (var n = 0, i = e.length; t != null && n < i; )
    t = t[Fp(e[n++])];
  return n && n == i ? t : void 0;
}
function Qs(t, e, n) {
  var i = t == null ? void 0 : sk(t, e);
  return i === void 0 ? n : i;
}
function ok(t, e, n, i) {
  if (!Js(t))
    return t;
  e = Dp(e, t);
  for (var r = -1, s = e.length, o = s - 1, a = t; a != null && ++r < s; ) {
    var l = Fp(e[r]), c = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return t;
    if (r != o) {
      var u = a[l];
      c = void 0, c === void 0 && (c = Js(u) ? u : bS(e[r + 1]) ? [] : {});
    }
    xS(a, l, c), a = a[l];
  }
  return t;
}
function kf(t, e, n) {
  return t == null ? t : ok(t, e, n);
}
var ja = "http://www.w3.org/1999/xhtml";
const Ef = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ja,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function $p(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Ef.hasOwnProperty(e) ? { space: Ef[e], local: t } : t;
}
function ak(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === ja && e.documentElement.namespaceURI === ja ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function lk(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Bp(t) {
  var e = $p(t);
  return (e.local ? lk : ak)(e);
}
function ck() {
}
function Up(t) {
  return t == null ? ck : function() {
    return this.querySelector(t);
  };
}
function uk(t) {
  typeof t != "function" && (t = Up(t));
  for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
    for (var s = e[r], o = s.length, a = i[r] = new Array(o), l, c, u = 0; u < o; ++u)
      (l = s[u]) && (c = t.call(l, l.__data__, u, s)) && ("__data__" in l && (c.__data__ = l.__data__), a[u] = c);
  return new ue(i, this._parents);
}
function qp(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function fk() {
  return [];
}
function hk(t) {
  return t == null ? fk : function() {
    return this.querySelectorAll(t);
  };
}
function dk(t) {
  return function() {
    return qp(t.apply(this, arguments));
  };
}
function pk(t) {
  typeof t == "function" ? t = dk(t) : t = hk(t);
  for (var e = this._groups, n = e.length, i = [], r = [], s = 0; s < n; ++s)
    for (var o = e[s], a = o.length, l, c = 0; c < a; ++c)
      (l = o[c]) && (i.push(t.call(l, l.__data__, c, o)), r.push(l));
  return new ue(i, r);
}
function gk(t) {
  return function() {
    return this.matches(t);
  };
}
function Hp(t) {
  return function(e) {
    return e.matches(t);
  };
}
var mk = Array.prototype.find;
function yk(t) {
  return function() {
    return mk.call(this.children, t);
  };
}
function bk() {
  return this.firstElementChild;
}
function vk(t) {
  return this.select(t == null ? bk : yk(typeof t == "function" ? t : Hp(t)));
}
var _k = Array.prototype.filter;
function wk() {
  return Array.from(this.children);
}
function xk(t) {
  return function() {
    return _k.call(this.children, t);
  };
}
function Sk(t) {
  return this.selectAll(t == null ? wk : xk(typeof t == "function" ? t : Hp(t)));
}
function kk(t) {
  typeof t != "function" && (t = gk(t));
  for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
    for (var s = e[r], o = s.length, a = i[r] = [], l, c = 0; c < o; ++c)
      (l = s[c]) && t.call(l, l.__data__, c, s) && a.push(l);
  return new ue(i, this._parents);
}
function Wp(t) {
  return new Array(t.length);
}
function Ek() {
  return new ue(this._enter || this._groups.map(Wp), this._parents);
}
function Zs(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Zs.prototype = {
  constructor: Zs,
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
function Tk(t) {
  return function() {
    return t;
  };
}
function Ak(t, e, n, i, r, s) {
  for (var o = 0, a, l = e.length, c = s.length; o < c; ++o)
    (a = e[o]) ? (a.__data__ = s[o], i[o] = a) : n[o] = new Zs(t, s[o]);
  for (; o < l; ++o)
    (a = e[o]) && (r[o] = a);
}
function Ck(t, e, n, i, r, s, o) {
  var a, l, c = /* @__PURE__ */ new Map(), u = e.length, f = s.length, h = new Array(u), d;
  for (a = 0; a < u; ++a)
    (l = e[a]) && (h[a] = d = o.call(l, l.__data__, a, e) + "", c.has(d) ? r[a] = l : c.set(d, l));
  for (a = 0; a < f; ++a)
    d = o.call(t, s[a], a, s) + "", (l = c.get(d)) ? (i[a] = l, l.__data__ = s[a], c.delete(d)) : n[a] = new Zs(t, s[a]);
  for (a = 0; a < u; ++a)
    (l = e[a]) && c.get(h[a]) === l && (r[a] = l);
}
function Ok(t) {
  return t.__data__;
}
function Pk(t, e) {
  if (!arguments.length)
    return Array.from(this, Ok);
  var n = e ? Ck : Ak, i = this._parents, r = this._groups;
  typeof t != "function" && (t = Tk(t));
  for (var s = r.length, o = new Array(s), a = new Array(s), l = new Array(s), c = 0; c < s; ++c) {
    var u = i[c], f = r[c], h = f.length, d = Nk(t.call(u, u && u.__data__, c, i)), p = d.length, S = a[c] = new Array(p), A = o[c] = new Array(p), v = l[c] = new Array(h);
    n(u, f, S, A, v, d, e);
    for (var _ = 0, b = 0, w, E; _ < p; ++_)
      if (w = S[_]) {
        for (_ >= b && (b = _ + 1); !(E = A[b]) && ++b < p; )
          ;
        w._next = E || null;
      }
  }
  return o = new ue(o, i), o._enter = a, o._exit = l, o;
}
function Nk(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Ik() {
  return new ue(this._exit || this._groups.map(Wp), this._parents);
}
function Lk(t, e, n) {
  var i = this.enter(), r = this, s = this.exit();
  return typeof t == "function" ? (i = t(i), i && (i = i.selection())) : i = i.append(t + ""), e != null && (r = e(r), r && (r = r.selection())), n == null ? s.remove() : n(s), i && r ? i.merge(r).order() : r;
}
function Mk(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, i = e._groups, r = n.length, s = i.length, o = Math.min(r, s), a = new Array(r), l = 0; l < o; ++l)
    for (var c = n[l], u = i[l], f = c.length, h = a[l] = new Array(f), d, p = 0; p < f; ++p)
      (d = c[p] || u[p]) && (h[p] = d);
  for (; l < r; ++l)
    a[l] = n[l];
  return new ue(a, this._parents);
}
function Rk() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var i = t[e], r = i.length - 1, s = i[r], o; --r >= 0; )
      (o = i[r]) && (s && o.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(o, s), s = o);
  return this;
}
function Dk(t) {
  t || (t = Fk);
  function e(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var n = this._groups, i = n.length, r = new Array(i), s = 0; s < i; ++s) {
    for (var o = n[s], a = o.length, l = r[s] = new Array(a), c, u = 0; u < a; ++u)
      (c = o[u]) && (l[u] = c);
    l.sort(e);
  }
  return new ue(r, this._parents).order();
}
function Fk(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function $k() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Bk() {
  return Array.from(this);
}
function Uk() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var i = t[e], r = 0, s = i.length; r < s; ++r) {
      var o = i[r];
      if (o)
        return o;
    }
  return null;
}
function qk() {
  let t = 0;
  for (const e of this)
    ++t;
  return t;
}
function Hk() {
  return !this.node();
}
function Wk(t) {
  for (var e = this._groups, n = 0, i = e.length; n < i; ++n)
    for (var r = e[n], s = 0, o = r.length, a; s < o; ++s)
      (a = r[s]) && t.call(a, a.__data__, s, r);
  return this;
}
function Vk(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function jk(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function zk(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function Gk(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function Yk(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function Kk(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function Xk(t, e) {
  var n = $p(t);
  if (arguments.length < 2) {
    var i = this.node();
    return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n);
  }
  return this.each((e == null ? n.local ? jk : Vk : typeof e == "function" ? n.local ? Kk : Yk : n.local ? Gk : zk)(n, e));
}
function Vp(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Jk(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Qk(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Zk(t, e, n) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.style.removeProperty(t) : this.style.setProperty(t, i, n);
  };
}
function t2(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Jk : typeof e == "function" ? Zk : Qk)(t, e, n ?? "")) : e2(this.node(), t);
}
function e2(t, e) {
  return t.style.getPropertyValue(e) || Vp(t).getComputedStyle(t, null).getPropertyValue(e);
}
function n2(t) {
  return function() {
    delete this[t];
  };
}
function i2(t, e) {
  return function() {
    this[t] = e;
  };
}
function r2(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function s2(t, e) {
  return arguments.length > 1 ? this.each((e == null ? n2 : typeof e == "function" ? r2 : i2)(t, e)) : this.node()[t];
}
function jp(t) {
  return t.trim().split(/^|\s+/);
}
function sc(t) {
  return t.classList || new zp(t);
}
function zp(t) {
  this._node = t, this._names = jp(t.getAttribute("class") || "");
}
zp.prototype = {
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
function Gp(t, e) {
  for (var n = sc(t), i = -1, r = e.length; ++i < r; )
    n.add(e[i]);
}
function Yp(t, e) {
  for (var n = sc(t), i = -1, r = e.length; ++i < r; )
    n.remove(e[i]);
}
function o2(t) {
  return function() {
    Gp(this, t);
  };
}
function a2(t) {
  return function() {
    Yp(this, t);
  };
}
function l2(t, e) {
  return function() {
    (e.apply(this, arguments) ? Gp : Yp)(this, t);
  };
}
function c2(t, e) {
  var n = jp(t + "");
  if (arguments.length < 2) {
    for (var i = sc(this.node()), r = -1, s = n.length; ++r < s; )
      if (!i.contains(n[r]))
        return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? l2 : e ? o2 : a2)(n, e));
}
function u2() {
  this.textContent = "";
}
function f2(t) {
  return function() {
    this.textContent = t;
  };
}
function h2(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function d2(t) {
  return arguments.length ? this.each(t == null ? u2 : (typeof t == "function" ? h2 : f2)(t)) : this.node().textContent;
}
function p2() {
  this.innerHTML = "";
}
function g2(t) {
  return function() {
    this.innerHTML = t;
  };
}
function m2(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function y2(t) {
  return arguments.length ? this.each(t == null ? p2 : (typeof t == "function" ? m2 : g2)(t)) : this.node().innerHTML;
}
function b2() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function v2() {
  return this.each(b2);
}
function _2() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function w2() {
  return this.each(_2);
}
function x2(t) {
  var e = typeof t == "function" ? t : Bp(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function S2() {
  return null;
}
function k2(t, e) {
  var n = typeof t == "function" ? t : Bp(t), i = e == null ? S2 : typeof e == "function" ? e : Up(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function E2() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function T2() {
  return this.each(E2);
}
function A2() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function C2() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function O2(t) {
  return this.select(t ? C2 : A2);
}
function P2(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function N2(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function I2(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", i = e.indexOf(".");
    return i >= 0 && (n = e.slice(i + 1), e = e.slice(0, i)), { type: e, name: n };
  });
}
function L2(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, i = -1, r = e.length, s; n < r; ++n)
        s = e[n], (!t.type || s.type === t.type) && s.name === t.name ? this.removeEventListener(s.type, s.listener, s.options) : e[++i] = s;
      ++i ? e.length = i : delete this.__on;
    }
  };
}
function M2(t, e, n) {
  return function() {
    var i = this.__on, r, s = N2(e);
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
function R2(t, e, n) {
  var i = I2(t + ""), r, s = i.length, o;
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
  for (a = e ? M2 : L2, r = 0; r < s; ++r)
    this.each(a(i[r], e, n));
  return this;
}
function Kp(t, e, n) {
  var i = Vp(t), r = i.CustomEvent;
  typeof r == "function" ? r = new r(e, n) : (r = i.document.createEvent("Event"), n ? (r.initEvent(e, n.bubbles, n.cancelable), r.detail = n.detail) : r.initEvent(e, !1, !1)), t.dispatchEvent(r);
}
function D2(t, e) {
  return function() {
    return Kp(this, t, e);
  };
}
function F2(t, e) {
  return function() {
    return Kp(this, t, e.apply(this, arguments));
  };
}
function $2(t, e) {
  return this.each((typeof e == "function" ? F2 : D2)(t, e));
}
function* B2() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var i = t[e], r = 0, s = i.length, o; r < s; ++r)
      (o = i[r]) && (yield o);
}
var Xp = [null];
function ue(t, e) {
  this._groups = t, this._parents = e;
}
function U2() {
  return this;
}
ue.prototype = {
  constructor: ue,
  select: uk,
  selectAll: pk,
  selectChild: vk,
  selectChildren: Sk,
  filter: kk,
  data: Pk,
  enter: Ek,
  exit: Ik,
  join: Lk,
  merge: Mk,
  selection: U2,
  order: Rk,
  sort: Dk,
  call: $k,
  nodes: Bk,
  node: Uk,
  size: qk,
  empty: Hk,
  each: Wk,
  attr: Xk,
  style: t2,
  property: s2,
  classed: c2,
  text: d2,
  html: y2,
  raise: v2,
  lower: w2,
  append: x2,
  insert: k2,
  remove: T2,
  clone: O2,
  datum: P2,
  on: R2,
  dispatch: $2,
  [Symbol.iterator]: B2
};
function q2(t) {
  return typeof t == "string" ? new ue([[document.querySelector(t)]], [document.documentElement]) : new ue([[t]], Xp);
}
function H2(t) {
  return typeof t == "string" ? new ue([document.querySelectorAll(t)], [document.documentElement]) : new ue([qp(t)], Xp);
}
function Os(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function W2(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Jp(t) {
  let e, n, i;
  t.length !== 2 ? (e = Os, n = (a, l) => Os(t(a), l), i = (a, l) => t(a) - l) : (e = t === Os || t === W2 ? t : V2, n = t, i = t);
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
function V2() {
  return 0;
}
function j2(t) {
  return t === null ? NaN : +t;
}
const z2 = Jp(Os), G2 = z2.right;
Jp(j2).center;
const Y2 = Math.sqrt(50), K2 = Math.sqrt(10), X2 = Math.sqrt(2);
function to(t, e, n) {
  const i = (e - t) / Math.max(0, n), r = Math.floor(Math.log10(i)), s = i / Math.pow(10, r), o = s >= Y2 ? 10 : s >= K2 ? 5 : s >= X2 ? 2 : 1;
  let a, l, c;
  return r < 0 ? (c = Math.pow(10, -r) / o, a = Math.round(t * c), l = Math.round(e * c), a / c < t && ++a, l / c > e && --l, c = -c) : (c = Math.pow(10, r) * o, a = Math.round(t / c), l = Math.round(e / c), a * c < t && ++a, l * c > e && --l), l < a && 0.5 <= n && n < 2 ? to(t, e, n * 2) : [a, l, c];
}
function J2(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0))
    return [];
  if (t === e)
    return [t];
  const i = e < t, [r, s, o] = i ? to(e, t, n) : to(t, e, n);
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
  return e = +e, t = +t, n = +n, to(t, e, n)[2];
}
function Q2(t, e, n) {
  e = +e, t = +t, n = +n;
  const i = e < t, r = i ? za(e, t, n) : za(t, e, n);
  return (i ? -1 : 1) * (r < 0 ? 1 / -r : r);
}
function Z2(t, e) {
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
function tE(t, e) {
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
function oc(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Qp(t, e) {
  var n = Object.create(t.prototype);
  for (var i in e)
    n[i] = e[i];
  return n;
}
function Rr() {
}
var _r = 0.7, eo = 1 / _r, ki = "\\s*([+-]?\\d+)\\s*", wr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Ge = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", eE = /^#([0-9a-f]{3,8})$/, nE = new RegExp(`^rgb\\(${ki},${ki},${ki}\\)$`), iE = new RegExp(`^rgb\\(${Ge},${Ge},${Ge}\\)$`), rE = new RegExp(`^rgba\\(${ki},${ki},${ki},${wr}\\)$`), sE = new RegExp(`^rgba\\(${Ge},${Ge},${Ge},${wr}\\)$`), oE = new RegExp(`^hsl\\(${wr},${Ge},${Ge}\\)$`), aE = new RegExp(`^hsla\\(${wr},${Ge},${Ge},${wr}\\)$`), Tf = {
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
oc(Rr, Ii, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Af,
  // Deprecated! Use color.formatHex.
  formatHex: Af,
  formatHex8: lE,
  formatHsl: cE,
  formatRgb: Cf,
  toString: Cf
});
function Af() {
  return this.rgb().formatHex();
}
function lE() {
  return this.rgb().formatHex8();
}
function cE() {
  return Zp(this).formatHsl();
}
function Cf() {
  return this.rgb().formatRgb();
}
function Ii(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = eE.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Of(e) : n === 3 ? new le(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? ns(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? ns(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = nE.exec(t)) ? new le(e[1], e[2], e[3], 1) : (e = iE.exec(t)) ? new le(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = rE.exec(t)) ? ns(e[1], e[2], e[3], e[4]) : (e = sE.exec(t)) ? ns(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = oE.exec(t)) ? If(e[1], e[2] / 100, e[3] / 100, 1) : (e = aE.exec(t)) ? If(e[1], e[2] / 100, e[3] / 100, e[4]) : Tf.hasOwnProperty(t) ? Of(Tf[t]) : t === "transparent" ? new le(NaN, NaN, NaN, 0) : null;
}
function Of(t) {
  return new le(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function ns(t, e, n, i) {
  return i <= 0 && (t = e = n = NaN), new le(t, e, n, i);
}
function uE(t) {
  return t instanceof Rr || (t = Ii(t)), t ? (t = t.rgb(), new le(t.r, t.g, t.b, t.opacity)) : new le();
}
function Gt(t, e, n, i) {
  return arguments.length === 1 ? uE(t) : new le(t, e, n, i ?? 1);
}
function le(t, e, n, i) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +i;
}
oc(le, Gt, Qp(Rr, {
  brighter(t) {
    return t = t == null ? eo : Math.pow(eo, t), new le(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? _r : Math.pow(_r, t), new le(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new le(Zn(this.r), Zn(this.g), Zn(this.b), no(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Pf,
  // Deprecated! Use color.formatHex.
  formatHex: Pf,
  formatHex8: fE,
  formatRgb: Nf,
  toString: Nf
}));
function Pf() {
  return `#${Yn(this.r)}${Yn(this.g)}${Yn(this.b)}`;
}
function fE() {
  return `#${Yn(this.r)}${Yn(this.g)}${Yn(this.b)}${Yn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Nf() {
  const t = no(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Zn(this.r)}, ${Zn(this.g)}, ${Zn(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function no(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Zn(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Yn(t) {
  return t = Zn(t), (t < 16 ? "0" : "") + t.toString(16);
}
function If(t, e, n, i) {
  return i <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Pe(t, e, n, i);
}
function Zp(t) {
  if (t instanceof Pe)
    return new Pe(t.h, t.s, t.l, t.opacity);
  if (t instanceof Rr || (t = Ii(t)), !t)
    return new Pe();
  if (t instanceof Pe)
    return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, i = t.b / 255, r = Math.min(e, n, i), s = Math.max(e, n, i), o = NaN, a = s - r, l = (s + r) / 2;
  return a ? (e === s ? o = (n - i) / a + (n < i) * 6 : n === s ? o = (i - e) / a + 2 : o = (e - n) / a + 4, a /= l < 0.5 ? s + r : 2 - s - r, o *= 60) : a = l > 0 && l < 1 ? 0 : o, new Pe(o, a, l, t.opacity);
}
function hE(t, e, n, i) {
  return arguments.length === 1 ? Zp(t) : new Pe(t, e, n, i ?? 1);
}
function Pe(t, e, n, i) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +i;
}
oc(Pe, hE, Qp(Rr, {
  brighter(t) {
    return t = t == null ? eo : Math.pow(eo, t), new Pe(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? _r : Math.pow(_r, t), new Pe(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, i = n + (n < 0.5 ? n : 1 - n) * e, r = 2 * n - i;
    return new le(
      ra(t >= 240 ? t - 240 : t + 120, r, i),
      ra(t, r, i),
      ra(t < 120 ? t + 240 : t - 120, r, i),
      this.opacity
    );
  },
  clamp() {
    return new Pe(Lf(this.h), is(this.s), is(this.l), no(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = no(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Lf(this.h)}, ${is(this.s) * 100}%, ${is(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Lf(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function is(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function ra(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const ac = (t) => () => t;
function dE(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function pE(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(i) {
    return Math.pow(t + i * e, n);
  };
}
function gE(t) {
  return (t = +t) == 1 ? tg : function(e, n) {
    return n - e ? pE(e, n, t) : ac(isNaN(e) ? n : e);
  };
}
function tg(t, e) {
  var n = e - t;
  return n ? dE(t, n) : ac(isNaN(t) ? e : t);
}
const Mf = function t(e) {
  var n = gE(e);
  function i(r, s) {
    var o = n((r = Gt(r)).r, (s = Gt(s)).r), a = n(r.g, s.g), l = n(r.b, s.b), c = tg(r.opacity, s.opacity);
    return function(u) {
      return r.r = o(u), r.g = a(u), r.b = l(u), r.opacity = c(u), r + "";
    };
  }
  return i.gamma = t, i;
}(1);
function mE(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, i = e.slice(), r;
  return function(s) {
    for (r = 0; r < n; ++r)
      i[r] = t[r] * (1 - s) + e[r] * s;
    return i;
  };
}
function yE(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function bE(t, e) {
  var n = e ? e.length : 0, i = t ? Math.min(n, t.length) : 0, r = new Array(i), s = new Array(n), o;
  for (o = 0; o < i; ++o)
    r[o] = Fo(t[o], e[o]);
  for (; o < n; ++o)
    s[o] = e[o];
  return function(a) {
    for (o = 0; o < i; ++o)
      s[o] = r[o](a);
    return s;
  };
}
function vE(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(i) {
    return n.setTime(t * (1 - i) + e * i), n;
  };
}
function io(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function _E(t, e) {
  var n = {}, i = {}, r;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (r in e)
    r in t ? n[r] = Fo(t[r], e[r]) : i[r] = e[r];
  return function(s) {
    for (r in n)
      i[r] = n[r](s);
    return i;
  };
}
var Ga = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, sa = new RegExp(Ga.source, "g");
function wE(t) {
  return function() {
    return t;
  };
}
function xE(t) {
  return function(e) {
    return t(e) + "";
  };
}
function SE(t, e) {
  var n = Ga.lastIndex = sa.lastIndex = 0, i, r, s, o = -1, a = [], l = [];
  for (t = t + "", e = e + ""; (i = Ga.exec(t)) && (r = sa.exec(e)); )
    (s = r.index) > n && (s = e.slice(n, s), a[o] ? a[o] += s : a[++o] = s), (i = i[0]) === (r = r[0]) ? a[o] ? a[o] += r : a[++o] = r : (a[++o] = null, l.push({ i: o, x: io(i, r) })), n = sa.lastIndex;
  return n < e.length && (s = e.slice(n), a[o] ? a[o] += s : a[++o] = s), a.length < 2 ? l[0] ? xE(l[0].x) : wE(e) : (e = l.length, function(c) {
    for (var u = 0, f; u < e; ++u)
      a[(f = l[u]).i] = f.x(c);
    return a.join("");
  });
}
function Fo(t, e) {
  var n = typeof e, i;
  return e == null || n === "boolean" ? ac(e) : (n === "number" ? io : n === "string" ? (i = Ii(e)) ? (e = i, Mf) : SE : e instanceof Ii ? Mf : e instanceof Date ? vE : yE(e) ? mE : Array.isArray(e) ? bE : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? _E : io)(t, e);
}
function eg(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
function kE(t) {
  return function() {
    return t;
  };
}
function EE(t) {
  return +t;
}
var Rf = [0, 1];
function kn(t) {
  return t;
}
function Ya(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : kE(isNaN(e) ? NaN : 0.5);
}
function TE(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(i) {
    return Math.max(t, Math.min(e, i));
  };
}
function AE(t, e, n) {
  var i = t[0], r = t[1], s = e[0], o = e[1];
  return r < i ? (i = Ya(r, i), s = n(o, s)) : (i = Ya(i, r), s = n(s, o)), function(a) {
    return s(i(a));
  };
}
function CE(t, e, n) {
  var i = Math.min(t.length, e.length) - 1, r = new Array(i), s = new Array(i), o = -1;
  for (t[i] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++o < i; )
    r[o] = Ya(t[o], t[o + 1]), s[o] = n(e[o], e[o + 1]);
  return function(a) {
    var l = G2(t, a, 1, i) - 1;
    return s[l](r[l](a));
  };
}
function OE(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function PE() {
  var t = Rf, e = Rf, n = Fo, i, r, s, o = kn, a, l, c;
  function u() {
    var h = Math.min(t.length, e.length);
    return o !== kn && (o = TE(t[0], t[h - 1])), a = h > 2 ? CE : AE, l = c = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? s : (l || (l = a(t.map(i), e, n)))(i(o(h)));
  }
  return f.invert = function(h) {
    return o(r((c || (c = a(e, t.map(i), io)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (t = Array.from(h, EE), u()) : t.slice();
  }, f.range = function(h) {
    return arguments.length ? (e = Array.from(h), u()) : e.slice();
  }, f.rangeRound = function(h) {
    return e = Array.from(h), n = eg, u();
  }, f.clamp = function(h) {
    return arguments.length ? (o = h ? !0 : kn, u()) : o !== kn;
  }, f.interpolate = function(h) {
    return arguments.length ? (n = h, u()) : n;
  }, f.unknown = function(h) {
    return arguments.length ? (s = h, f) : s;
  }, function(h, d) {
    return i = h, r = d, u();
  };
}
function NE() {
  return PE()(kn, kn);
}
function IE(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function ro(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0)
    return null;
  var n, i = t.slice(0, n);
  return [
    i.length > 1 ? i[0] + i.slice(2) : i,
    +t.slice(n + 1)
  ];
}
function Li(t) {
  return t = ro(Math.abs(t)), t ? t[1] : NaN;
}
function LE(t, e) {
  return function(n, i) {
    for (var r = n.length, s = [], o = 0, a = t[0], l = 0; r > 0 && a > 0 && (l + a + 1 > i && (a = Math.max(1, i - l)), s.push(n.substring(r -= a, r + a)), !((l += a + 1) > i)); )
      a = t[o = (o + 1) % t.length];
    return s.reverse().join(e);
  };
}
function ME(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var RE = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function so(t) {
  if (!(e = RE.exec(t)))
    throw new Error("invalid format: " + t);
  var e;
  return new lc({
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
so.prototype = lc.prototype;
function lc(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
lc.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function DE(t) {
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
var ng;
function FE(t, e) {
  var n = ro(t, e);
  if (!n)
    return t + "";
  var i = n[0], r = n[1], s = r - (ng = Math.max(-8, Math.min(8, Math.floor(r / 3))) * 3) + 1, o = i.length;
  return s === o ? i : s > o ? i + new Array(s - o + 1).join("0") : s > 0 ? i.slice(0, s) + "." + i.slice(s) : "0." + new Array(1 - s).join("0") + ro(t, Math.max(0, e + s - 1))[0];
}
function Df(t, e) {
  var n = ro(t, e);
  if (!n)
    return t + "";
  var i = n[0], r = n[1];
  return r < 0 ? "0." + new Array(-r).join("0") + i : i.length > r + 1 ? i.slice(0, r + 1) + "." + i.slice(r + 1) : i + new Array(r - i.length + 2).join("0");
}
const Ff = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: IE,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => Df(t * 100, e),
  r: Df,
  s: FE,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function $f(t) {
  return t;
}
var Bf = Array.prototype.map, Uf = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function $E(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? $f : LE(Bf.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", i = t.currency === void 0 ? "" : t.currency[1] + "", r = t.decimal === void 0 ? "." : t.decimal + "", s = t.numerals === void 0 ? $f : ME(Bf.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", a = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function c(f) {
    f = so(f);
    var h = f.fill, d = f.align, p = f.sign, S = f.symbol, A = f.zero, v = f.width, _ = f.comma, b = f.precision, w = f.trim, E = f.type;
    E === "n" ? (_ = !0, E = "g") : Ff[E] || (b === void 0 && (b = 12), w = !0, E = "g"), (A || h === "0" && d === "=") && (A = !0, h = "0", d = "=");
    var C = S === "$" ? n : S === "#" && /[boxX]/.test(E) ? "0" + E.toLowerCase() : "", N = S === "$" ? i : /[%p]/.test(E) ? o : "", F = Ff[E], $ = /[defgprs%]/.test(E);
    b = b === void 0 ? 6 : /[gprs]/.test(E) ? Math.max(1, Math.min(21, b)) : Math.max(0, Math.min(20, b));
    function V(H) {
      var j = C, W = N, rt, Dt, pt;
      if (E === "c")
        W = F(H) + W, H = "";
      else {
        H = +H;
        var ct = H < 0 || 1 / H < 0;
        if (H = isNaN(H) ? l : F(Math.abs(H), b), w && (H = DE(H)), ct && +H == 0 && p !== "+" && (ct = !1), j = (ct ? p === "(" ? p : a : p === "-" || p === "(" ? "" : p) + j, W = (E === "s" ? Uf[8 + ng / 3] : "") + W + (ct && p === "(" ? ")" : ""), $) {
          for (rt = -1, Dt = H.length; ++rt < Dt; )
            if (pt = H.charCodeAt(rt), 48 > pt || pt > 57) {
              W = (pt === 46 ? r + H.slice(rt + 1) : H.slice(rt)) + W, H = H.slice(0, rt);
              break;
            }
        }
      }
      _ && !A && (H = e(H, 1 / 0));
      var at = j.length + H.length + W.length, xt = at < v ? new Array(v - at + 1).join(h) : "";
      switch (_ && A && (H = e(xt + H, xt.length ? v - W.length : 1 / 0), xt = ""), d) {
        case "<":
          H = j + H + W + xt;
          break;
        case "=":
          H = j + xt + H + W;
          break;
        case "^":
          H = xt.slice(0, at = xt.length >> 1) + j + H + W + xt.slice(at);
          break;
        default:
          H = xt + j + H + W;
          break;
      }
      return s(H);
    }
    return V.toString = function() {
      return f + "";
    }, V;
  }
  function u(f, h) {
    var d = c((f = so(f), f.type = "f", f)), p = Math.max(-8, Math.min(8, Math.floor(Li(h) / 3))) * 3, S = Math.pow(10, -p), A = Uf[8 + p / 3];
    return function(v) {
      return d(S * v) + A;
    };
  }
  return {
    format: c,
    formatPrefix: u
  };
}
var rs, cc, ig;
BE({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function BE(t) {
  return rs = $E(t), cc = rs.format, ig = rs.formatPrefix, rs;
}
function rg(t) {
  return Math.max(0, -Li(Math.abs(t)));
}
function UE(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Li(e) / 3))) * 3 - Li(Math.abs(t)));
}
function qE(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, Li(e) - Li(t)) + 1;
}
function HE(t, e, n, i) {
  var r = Q2(t, e, n), s;
  switch (i = so(i ?? ",f"), i.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(e));
      return i.precision == null && !isNaN(s = UE(r, o)) && (i.precision = s), ig(i, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      i.precision == null && !isNaN(s = qE(r, Math.max(Math.abs(t), Math.abs(e)))) && (i.precision = s - (i.type === "e"));
      break;
    }
    case "f":
    case "%": {
      i.precision == null && !isNaN(s = rg(r)) && (i.precision = s - (i.type === "%") * 2);
      break;
    }
  }
  return cc(i);
}
function sg(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var i = e();
    return J2(i[0], i[i.length - 1], n ?? 10);
  }, t.tickFormat = function(n, i) {
    var r = e();
    return HE(r[0], r[r.length - 1], n ?? 10, i);
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
function og() {
  var t = NE();
  return t.copy = function() {
    return OE(t, og());
  }, Z2.apply(t, arguments), sg(t);
}
function WE() {
  var t = 0, e = 1, n, i, r, s, o = kn, a = !1, l;
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
      var d, p;
      return arguments.length ? ([d, p] = h, o = f(d, p), c) : [o(0), o(1)];
    };
  }
  return c.range = u(Fo), c.rangeRound = u(eg), c.unknown = function(f) {
    return arguments.length ? (l = f, c) : l;
  }, function(f) {
    return s = f, n = f(t), i = f(e), r = n === i ? 0 : 1 / (i - n), c;
  };
}
function VE(t, e) {
  return e.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown());
}
function ag() {
  var t = sg(WE()(kn));
  return t.copy = function() {
    return VE(t, ag());
  }, tE.apply(t, arguments);
}
function jE(t) {
  return t;
}
var Ps = 1, Ns = 2, Ka = 3, Zi = 4, qf = 1e-6;
function zE(t) {
  return "translate(" + t + ",0)";
}
function GE(t) {
  return "translate(0," + t + ")";
}
function YE(t) {
  return (e) => +t(e);
}
function KE(t, e) {
  return e = Math.max(0, t.bandwidth() - e * 2) / 2, t.round() && (e = Math.round(e)), (n) => +t(n) + e;
}
function XE() {
  return !this.__axis;
}
function $o(t, e) {
  var n = [], i = null, r = null, s = 6, o = 6, a = 3, l = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, c = t === Ps || t === Zi ? -1 : 1, u = t === Zi || t === Ns ? "x" : "y", f = t === Ps || t === Ka ? zE : GE;
  function h(d) {
    var p = i ?? (e.ticks ? e.ticks.apply(e, n) : e.domain()), S = r ?? (e.tickFormat ? e.tickFormat.apply(e, n) : jE), A = Math.max(s, 0) + a, v = e.range(), _ = +v[0] + l, b = +v[v.length - 1] + l, w = (e.bandwidth ? KE : YE)(e.copy(), l), E = d.selection ? d.selection() : d, C = E.selectAll(".domain").data([null]), N = E.selectAll(".tick").data(p, e).order(), F = N.exit(), $ = N.enter().append("g").attr("class", "tick"), V = N.select("line"), H = N.select("text");
    C = C.merge(C.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), N = N.merge($), V = V.merge($.append("line").attr("stroke", "currentColor").attr(u + "2", c * s)), H = H.merge($.append("text").attr("fill", "currentColor").attr(u, c * A).attr("dy", t === Ps ? "0em" : t === Ka ? "0.71em" : "0.32em")), d !== E && (C = C.transition(d), N = N.transition(d), V = V.transition(d), H = H.transition(d), F = F.transition(d).attr("opacity", qf).attr("transform", function(j) {
      return isFinite(j = w(j)) ? f(j + l) : this.getAttribute("transform");
    }), $.attr("opacity", qf).attr("transform", function(j) {
      var W = this.parentNode.__axis;
      return f((W && isFinite(W = W(j)) ? W : w(j)) + l);
    })), F.remove(), C.attr("d", t === Zi || t === Ns ? o ? "M" + c * o + "," + _ + "H" + l + "V" + b + "H" + c * o : "M" + l + "," + _ + "V" + b : o ? "M" + _ + "," + c * o + "V" + l + "H" + b + "V" + c * o : "M" + _ + "," + l + "H" + b), N.attr("opacity", 1).attr("transform", function(j) {
      return f(w(j) + l);
    }), V.attr(u + "2", c * s), H.attr(u, c * A).text(S), E.filter(XE).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === Ns ? "start" : t === Zi ? "end" : "middle"), E.each(function() {
      this.__axis = w;
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
function JE(t) {
  return $o(Ps, t);
}
function QE(t) {
  return $o(Ns, t);
}
function ZE(t) {
  return $o(Ka, t);
}
function tT(t) {
  return $o(Zi, t);
}
const Xa = Math.PI, Ja = 2 * Xa, jn = 1e-6, eT = Ja - jn;
function lg(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function nT(t) {
  let e = Math.floor(t);
  if (!(e >= 0))
    throw new Error(`invalid digits: ${t}`);
  if (e > 15)
    return lg;
  const n = 10 ** e;
  return function(i) {
    this._ += i[0];
    for (let r = 1, s = i.length; r < s; ++r)
      this._ += Math.round(arguments[r] * n) / n + i[r];
  };
}
class uc {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? lg : nT(e);
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
    else if (h > jn)
      if (!(Math.abs(f * l - c * u) > jn) || !s)
        this._append`L${this._x1 = e},${this._y1 = n}`;
      else {
        let d = i - o, p = r - a, S = l * l + c * c, A = d * d + p * p, v = Math.sqrt(S), _ = Math.sqrt(h), b = s * Math.tan((Xa - Math.acos((S + h - A) / (2 * v * _))) / 2), w = b / _, E = b / v;
        Math.abs(w - 1) > jn && this._append`L${e + w * u},${n + w * f}`, this._append`A${s},${s},0,0,${+(f * d > u * p)},${this._x1 = e + E * l},${this._y1 = n + E * c}`;
      }
  }
  arc(e, n, i, r, s, o) {
    if (e = +e, n = +n, i = +i, o = !!o, i < 0)
      throw new Error(`negative radius: ${i}`);
    let a = i * Math.cos(r), l = i * Math.sin(r), c = e + a, u = n + l, f = 1 ^ o, h = o ? r - s : s - r;
    this._x1 === null ? this._append`M${c},${u}` : (Math.abs(this._x1 - c) > jn || Math.abs(this._y1 - u) > jn) && this._append`L${c},${u}`, i && (h < 0 && (h = h % Ja + Ja), h > eT ? this._append`A${i},${i},0,1,${f},${e - a},${n - l}A${i},${i},0,1,${f},${this._x1 = c},${this._y1 = u}` : h > jn && this._append`A${i},${i},0,${+(h >= Xa)},${f},${this._x1 = e + i * Math.cos(s)},${this._y1 = n + i * Math.sin(s)}`);
  }
  rect(e, n, i, r) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${i = +i}v${+r}h${-i}Z`;
  }
  toString() {
    return this._;
  }
}
function cg() {
  return new uc();
}
cg.prototype = uc.prototype;
function be(t) {
  return function() {
    return t;
  };
}
const Hf = Math.abs, Kt = Math.atan2, Wn = Math.cos, iT = Math.max, oa = Math.min, Ue = Math.sin, Ve = Math.sqrt, se = 1e-12, Mi = Math.PI, oo = Mi / 2, ug = 2 * Mi;
function rT(t) {
  return t > 1 ? 0 : t < -1 ? Mi : Math.acos(t);
}
function Wf(t) {
  return t >= 1 ? oo : t <= -1 ? -oo : Math.asin(t);
}
function fg(t) {
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
  }, () => new uc(e);
}
function sT(t) {
  return t.innerRadius;
}
function oT(t) {
  return t.outerRadius;
}
function aT(t) {
  return t.startAngle;
}
function lT(t) {
  return t.endAngle;
}
function cT(t) {
  return t && t.padAngle;
}
function uT(t, e, n, i, r, s, o, a) {
  var l = n - t, c = i - e, u = o - r, f = a - s, h = f * l - u * c;
  if (!(h * h < se))
    return h = (u * (e - s) - f * (t - r)) / h, [t + h * l, e + h * c];
}
function ss(t, e, n, i, r, s, o) {
  var a = t - n, l = e - i, c = (o ? s : -s) / Ve(a * a + l * l), u = c * l, f = -c * a, h = t + u, d = e + f, p = n + u, S = i + f, A = (h + p) / 2, v = (d + S) / 2, _ = p - h, b = S - d, w = _ * _ + b * b, E = r - s, C = h * S - p * d, N = (b < 0 ? -1 : 1) * Ve(iT(0, E * E * w - C * C)), F = (C * b - _ * N) / w, $ = (-C * _ - b * N) / w, V = (C * b + _ * N) / w, H = (-C * _ + b * N) / w, j = F - A, W = $ - v, rt = V - A, Dt = H - v;
  return j * j + W * W > rt * rt + Dt * Dt && (F = V, $ = H), {
    cx: F,
    cy: $,
    x01: -u,
    y01: -f,
    x11: F * (r / E - 1),
    y11: $ * (r / E - 1)
  };
}
function fT() {
  var t = sT, e = oT, n = be(0), i = null, r = aT, s = lT, o = cT, a = null, l = fg(c);
  function c() {
    var u, f, h = +t.apply(this, arguments), d = +e.apply(this, arguments), p = r.apply(this, arguments) - oo, S = s.apply(this, arguments) - oo, A = Hf(S - p), v = S > p;
    if (a || (a = u = l()), d < h && (f = d, d = h, h = f), !(d > se))
      a.moveTo(0, 0);
    else if (A > ug - se)
      a.moveTo(d * Wn(p), d * Ue(p)), a.arc(0, 0, d, p, S, !v), h > se && (a.moveTo(h * Wn(S), h * Ue(S)), a.arc(0, 0, h, S, p, v));
    else {
      var _ = p, b = S, w = p, E = S, C = A, N = A, F = o.apply(this, arguments) / 2, $ = F > se && (i ? +i.apply(this, arguments) : Ve(h * h + d * d)), V = oa(Hf(d - h) / 2, +n.apply(this, arguments)), H = V, j = V, W, rt;
      if ($ > se) {
        var Dt = Wf($ / h * Ue(F)), pt = Wf($ / d * Ue(F));
        (C -= Dt * 2) > se ? (Dt *= v ? 1 : -1, w += Dt, E -= Dt) : (C = 0, w = E = (p + S) / 2), (N -= pt * 2) > se ? (pt *= v ? 1 : -1, _ += pt, b -= pt) : (N = 0, _ = b = (p + S) / 2);
      }
      var ct = d * Wn(_), at = d * Ue(_), xt = h * Wn(E), fe = h * Ue(E);
      if (V > se) {
        var Nt = d * Wn(b), Mt = d * Ue(b), Re = h * Wn(w), De = h * Ue(w), Qt;
        if (A < Mi)
          if (Qt = uT(ct, at, Re, De, Nt, Mt, xt, fe)) {
            var zt = ct - Qt[0], Te = at - Qt[1], Ae = Nt - Qt[0], Fe = Mt - Qt[1], he = 1 / Ue(rT((zt * Ae + Te * Fe) / (Ve(zt * zt + Te * Te) * Ve(Ae * Ae + Fe * Fe))) / 2), Xe = Ve(Qt[0] * Qt[0] + Qt[1] * Qt[1]);
            H = oa(V, (h - Xe) / (he - 1)), j = oa(V, (d - Xe) / (he + 1));
          } else
            H = j = 0;
      }
      N > se ? j > se ? (W = ss(Re, De, ct, at, d, j, v), rt = ss(Nt, Mt, xt, fe, d, j, v), a.moveTo(W.cx + W.x01, W.cy + W.y01), j < V ? a.arc(W.cx, W.cy, j, Kt(W.y01, W.x01), Kt(rt.y01, rt.x01), !v) : (a.arc(W.cx, W.cy, j, Kt(W.y01, W.x01), Kt(W.y11, W.x11), !v), a.arc(0, 0, d, Kt(W.cy + W.y11, W.cx + W.x11), Kt(rt.cy + rt.y11, rt.cx + rt.x11), !v), a.arc(rt.cx, rt.cy, j, Kt(rt.y11, rt.x11), Kt(rt.y01, rt.x01), !v))) : (a.moveTo(ct, at), a.arc(0, 0, d, _, b, !v)) : a.moveTo(ct, at), !(h > se) || !(C > se) ? a.lineTo(xt, fe) : H > se ? (W = ss(xt, fe, Nt, Mt, h, -H, v), rt = ss(ct, at, Re, De, h, -H, v), a.lineTo(W.cx + W.x01, W.cy + W.y01), H < V ? a.arc(W.cx, W.cy, H, Kt(W.y01, W.x01), Kt(rt.y01, rt.x01), !v) : (a.arc(W.cx, W.cy, H, Kt(W.y01, W.x01), Kt(W.y11, W.x11), !v), a.arc(0, 0, h, Kt(W.cy + W.y11, W.cx + W.x11), Kt(rt.cy + rt.y11, rt.cx + rt.x11), v), a.arc(rt.cx, rt.cy, H, Kt(rt.y11, rt.x11), Kt(rt.y01, rt.x01), !v))) : a.arc(0, 0, h, E, w, v);
    }
    if (a.closePath(), u)
      return a = null, u + "" || null;
  }
  return c.centroid = function() {
    var u = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2, f = (+r.apply(this, arguments) + +s.apply(this, arguments)) / 2 - Mi / 2;
    return [Wn(f) * u, Ue(f) * u];
  }, c.innerRadius = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : be(+u), c) : t;
  }, c.outerRadius = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : be(+u), c) : e;
  }, c.cornerRadius = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : be(+u), c) : n;
  }, c.padRadius = function(u) {
    return arguments.length ? (i = u == null ? null : typeof u == "function" ? u : be(+u), c) : i;
  }, c.startAngle = function(u) {
    return arguments.length ? (r = typeof u == "function" ? u : be(+u), c) : r;
  }, c.endAngle = function(u) {
    return arguments.length ? (s = typeof u == "function" ? u : be(+u), c) : s;
  }, c.padAngle = function(u) {
    return arguments.length ? (o = typeof u == "function" ? u : be(+u), c) : o;
  }, c.context = function(u) {
    return arguments.length ? (a = u ?? null, c) : a;
  }, c;
}
const hT = {
  draw(t, e) {
    const n = Ve(e / Mi);
    t.moveTo(n, 0), t.arc(0, 0, n, 0, ug);
  }
}, dT = {
  draw(t, e) {
    const n = Ve(e), i = -n / 2;
    t.rect(i, i, n, n);
  }
}, aa = Ve(3), pT = {
  draw(t, e) {
    const n = -Ve(e / (aa * 3));
    t.moveTo(0, n * 2), t.lineTo(-aa * n, -n), t.lineTo(aa * n, -n), t.closePath();
  }
};
function gT(t, e) {
  let n = null, i = fg(r);
  t = typeof t == "function" ? t : be(t || hT), e = typeof e == "function" ? e : be(e === void 0 ? 64 : +e);
  function r() {
    let s;
    if (n || (n = s = i()), t.apply(this, arguments).draw(n, +e.apply(this, arguments)), s)
      return n = null, s + "" || null;
  }
  return r.type = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : be(s), r) : t;
  }, r.size = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : be(+s), r) : e;
  }, r.context = function(s) {
    return arguments.length ? (n = s ?? null, r) : n;
  }, r;
}
const lt = {
  precisionFixed: rg,
  format: cc,
  select: q2,
  selectAll: H2,
  scaleLinear: og,
  scaleSequential: ag,
  axisTop: JE,
  axisBottom: ZE,
  axisRight: QE,
  axisLeft: tT,
  symbol: gT,
  path: cg,
  arc: fT,
  symbolTriangle: pT,
  symbolSquare: dT
};
function hi(t) {
  return typeof t == "string" && t.length === 6 && !isNaN(+("0x" + t.replace("#", "")));
}
class mT {
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
    flipX: d = !1,
    colors: p = {
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
    vueComponent: A
  }) {
    m(this, "env");
    m(this, "main");
    //is this the main vis or not
    m(this, "units", "decimal");
    m(this, "decimalPlaces");
    m(this, "fractionRoundTo");
    m(this, "fn");
    m(this, "saw");
    m(this, "stockType");
    m(this, "numUniqueShapes");
    m(this, "app");
    m(this, "embed");
    m(this, "height");
    m(this, "width");
    m(this, "device");
    m(this, "vueComponent");
    m(this, "elWidth");
    m(this, "elHeight");
    m(this, "w");
    m(this, "h");
    m(this, "padding");
    m(this, "mobileBreakpoint");
    //scales
    m(this, "xScale", lt.scaleLinear());
    m(this, "yScale", lt.scaleLinear());
    m(this, "yPositionScale", lt.scaleLinear());
    m(this, "xPositionScale", lt.scaleLinear());
    m(this, "yAxisScale", lt.scaleLinear());
    m(this, "measurementScale", lt.scaleLinear());
    m(this, "xAxis");
    m(this, "yAxis");
    m(this, "stretched");
    m(this, "shapeXAxis");
    m(this, "shapeYAxis");
    m(this, "cutMeasurementXAxes");
    m(this, "cutMeasurementYAxes");
    m(this, "axisSpacing");
    m(this, "flipY");
    m(this, "flipX");
    m(this, "colors");
    m(this, "options");
    m(this, "moveMode");
    m(this, "moveRotation");
    m(this, "moving");
    m(this, "shape");
    m(this, "shapeColorScale");
    m(this, "scoreColorScale");
    m(this, "hasTouch");
    m(this, "highlightguillotine");
    m(this, "elementID");
    //the id of the element to draw the vis in
    m(this, "el");
    m(this, "htmlEl");
    m(this, "svgCanvas");
    m(this, "axisGroup");
    m(this, "stockGroup");
    m(this, "stockWrappers");
    m(this, "stock");
    m(this, "shapeGroup");
    m(this, "shapeWrappers");
    m(this, "shapes");
    m(this, "shapeIDText");
    m(this, "shapeNameText");
    m(this, "shapeLengthText");
    m(this, "shapeWidthText");
    m(this, "groupGroup");
    m(this, "groups");
    m(this, "bandingGroup");
    m(this, "bandingWrappers");
    m(this, "banding");
    m(this, "segmentGroup");
    m(this, "segments");
    m(this, "segment");
    m(this, "positionGroup");
    m(this, "position");
    m(this, "dotGroup");
    m(this, "dot");
    m(this, "cutGroup");
    m(this, "cuts");
    m(this, "cut");
    var _;
    if (!e)
      throw new Error("elementID is required");
    if (this.el = lt.select(e), this.el === null)
      return;
    const v = this.el.node();
    if (v !== null) {
      this.htmlEl = v, this.vueComponent = A, this.env = ((_ = A == null ? void 0 : A.gs) == null ? void 0 : _.env) === "development" ? "development" : "production", this.app = l || !1, this.embed = c || !1, this.height = u, this.width = f, this.device = l ? "app" : "desktop", this.stretched = !1, this.elWidth = this.htmlEl.offsetWidth, this.elHeight = this.htmlEl.offsetHeight, this.w = 0, this.h = 0, this.padding = 0, this.mobileBreakpoint = 450, this.main = i, this.saw = a, this.cutMeasurementXAxes = [], this.cutMeasurementYAxes = [], this.axisSpacing = 16, this.flipY = h, this.flipX = d, p = {
        ...p
      };
      for (const [b, w] of Object.entries(p))
        w && (p[b] = w.replace("#", ""));
      this.colors = {
        partA: hi(p == null ? void 0 : p.partA) ? Gt("#" + p.partA) : Gt("#1d9bc4"),
        partB: hi(p == null ? void 0 : p.partB) ? Gt("#" + p.partB) : Gt("#127da1"),
        partHover: hi(p == null ? void 0 : p.partHover) ? Gt("#" + p.partHover) : Gt("#29c778"),
        partSelected: hi(p == null ? void 0 : p.partSelected) ? Gt("#" + p.partSelected) : Gt("#1bc319"),
        stock: hi(p == null ? void 0 : p.stock) ? Gt("#" + p.stock) : Gt("#ffd166"),
        text: hi(p == null ? void 0 : p.text) ? Gt("#" + p.text) : Gt("#ffffff")
      }, this.shapeColorScale = lt.scaleSequential([
        this.colors.partA,
        this.colors.partB
      ]), this.env = n, this.moveMode = !1, this.moving = !1, this.moveRotation = !1, this.units = r, this.decimalPlaces = s, this.fractionRoundTo = o, this.fn = (b) => U(
        b,
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
      this.axisGroup = this.svgCanvas.append("g").attr("class", "axis-group"), this.stockGroup = this.svgCanvas.append("g").attr("class", "stock-group"), this.shapeGroup = this.svgCanvas.append("g").attr("class", "shapes"), this.bandingGroup = this.svgCanvas.append("g").attr("class", "banding-group"), this.segmentGroup = this.svgCanvas.append("g").attr("class", "segments").attr("display", "none"), this.groupGroup = this.svgCanvas.append("g").attr("class", "groups").attr("display", "none"), this.positionGroup = this.svgCanvas.append("g").attr("class", "positions"), this.dotGroup = this.svgCanvas.append("g").attr("class", "dots"), this.cutGroup = this.svgCanvas.append("g").attr("class", "cuts");
    }
    this.elWidth > 0 && this.updateSize(!0), this.hasTouch = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
  trimNameToFit(e, n) {
    function i(r, s, o) {
      const a = o[s], l = lt.select(a);
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
  recreateUerGroups(e) {
    e.filter((r) => r.inUserGroup);
    const n = [];
    for (let r = 0; r < e.length; r++) {
      const o = e[r].addedAsGroup, a = e.filter(
        (l) => l.addedAsGroup === o
      );
      n.push(a), r += a.length;
    }
    const i = [];
    n.forEach((r) => {
      const s = Math.min(...r.map((u) => u.x)), o = Math.min(...r.map((u) => u.y)), a = Math.max(...r.map((u) => u.x + u.l)) - s, l = Math.max(...r.map((u) => u.y + u.w)) - o, c = {
        x: s,
        y: o,
        l: a,
        w: l,
        shapes: r
      };
      i.push(c);
    }), this.initGroups(i);
  }
  //init or update the stock
  initStock(e) {
    if (this.resetStock(), this.setAspectRatio(e), !e || !(e != null && e.w) || !(e != null && e.l) || !this.elWidth)
      return !1;
    this.stockType = e.type;
    let n;
    if (typeof e == "object" && (n = [e]), this.device === "desktop" && this.main) {
      this.xAxis = this.axisGroup.append("g").attr("transform", `translate(0, ${this.padding})`).attr("class", "axis stock x").call(lt.axisTop(this.xScale).ticks(5).tickSize(2)).selectAll("text").attr("dy", -5);
      const i = this.requiresStretch(e);
      (!i || i && this.stretched) && (this.yAxis = this.axisGroup.append("g").attr(
        "transform",
        `translate(${this.w - this.padding}, 0)`
      ).attr("class", "axis stock y").call(
        lt.axisRight(this.yAxisScale).ticks(5).tickSize(2)
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
          a.parentID && this.vueComponent.gs.shapeColors[a.parentID] || a.parentID && (this.vueComponent.gs.shapeColors[a.parentID] = Ii(
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
          var d;
          const h = (d = f == null ? void 0 : f.bestScore) == null ? void 0 : d.total;
          return h === 0 || h === null || h === void 0 ? u : h < u ? h : u;
        }, o), c = e.reduce((u, f) => {
          var d;
          const h = (d = f == null ? void 0 : f.bestScore) == null ? void 0 : d.total;
          return h == null ? u : h > u ? h : u;
        }, a);
        this.scoreColorScale = lt.scaleSequential([Gt(251, 224, 255), Gt(122, 0, 138)]).domain([l, c]);
      }
      if (!e || !e.length || (this.shapeWrappers = this.shapeGroup.selectAll("g").data(e).join("g").attr("class", "shape-group"), !this.shapeWrappers.size()))
        return !1;
      if (this.shapes = this.shapeWrappers.append("rect").attr("class", "shape").attr("fill", (o) => this.getShapeColor(o)).attr("stroke-width", () => this.env === "development" ? 3 : 0).attr("width", (o) => this.getWidthAttribute(o)).attr("height", (o) => this.getHeightAttribute(o)), this.main) {
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
          (a) => U(
            a.l,
            this.units,
            this.decimalPlaces,
            !1,
            this.fractionRoundTo
          )
        ).classed("hidden", (a, l, c) => this.app ? this.measurementScale(a.l) < 50 || this.measurementScale(a.w) < 50 : a.stock.type === "linear" ? !1 : c[l].getBBox().width >= this.measurementScale(a.l) || this.measurementScale(a.w) < 30).attr("dominant-baseline", "middle").attr("fill", this.colors.text), this.shapeWidthText = this.shapeWrappers.append("text").attr("class", "shape-text width").text(
          (a) => U(
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
          let d;
          try {
            d = structuredClone(a);
          } catch (p) {
            console.log("issue with structuredClone", p);
          }
          d && console.log(
            [
              // 'bestScore.point'
              // 'addedAsGroup',
              // 'weighting'
              // 'placementOrder',
              "guillotineData"
            ].reduce((S, A) => (S[A] = Vf(d, A), S), {})
          );
        }
        if (this.app || this.embed) {
          const d = {
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
          }, p = new CustomEvent("partClick", {
            detail: d
          });
          if (this.env === "development" && console.log(d), this.htmlEl.dispatchEvent(p), this.app)
            return !1;
        }
        !this.moveMode && ((u = this.vueComponent) != null && u.gs) && (this.vueComponent.gs.examineShape = a), this.device === "desktop" && (this.resetCutMeasurementAxes(), this.addShapeAxes(a)), this.shapes.classed("selected", !1), this.shapes.style("fill", (d) => this.getShapeColor(d)), this.moveMode ? (a.stock.cutType === "efficiency" || a.stock.type === "linear") && ((h = (f = this.vueComponent.$refs) == null ? void 0 : f.partsBin) == null || h.addToPartsBin(a)) : (lt.select(o.target).classed("selected", !0), lt.select(o.target).style(
          "fill",
          this.colors.partSelected.toString()
        ));
      }), !this.app && !this.hasTouch && this.shapes.on(
        "mouseover",
        (o) => {
          this != null && this.moveMode && this.moving || (lt.select(o.target).classed("hover", !0), lt.select(o.target).classed("selected") || lt.select(o.target).style(
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
          lt.select(o.target).classed("hover", !1), lt.select(o.target).classed("selected") || lt.select(o.target).style(
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
    var a, l, c, u, f, h, d;
    if (n === null || e == null || this != null && this.cuts.empty())
      return;
    this.resetShapeAxes(), this.resetCutMeasurementAxes(), lt.select(this.cuts.nodes()[n].parentNode).raise();
    const i = (a = e.guillotineData) == null ? void 0 : a.parentSegmentID, r = this.getHalfBladeWidth(e.stock), s = e.direction === "l" ? "y" : "x", o = (l = e == null ? void 0 : e.stock) == null ? void 0 : l.trim;
    if ((e.stock.cutType === "guillotine" || e.stock.cutType === "beam") && i !== null && typeof i < "u") {
      this.cuts.style("visibility", (b) => typeof e.guillotineData.order == "number" && b.guillotineData.order <= e.guillotineData.order || b.guillotineData.parentSegmentID === i ? "visible" : "hidden"), this.cuts.classed("highlight", (b) => e.stock.cutType === "guillotine" && b.isTrim ? b.type === e.type : b.guillotineData.order === e.guillotineData.order);
      const p = (c = e == null ? void 0 : e.guillotineData) == null ? void 0 : c.segmentCutOrder;
      if (p == null)
        return;
      this.cuts.classed("completed", (b) => this.isCutComplete(b, i, p)), this.cuts.classed("inside-segment", (b) => this.isCutInsideSegment(b, i));
      let S, A;
      const v = this.getCutSegments(e);
      if (v === !1)
        return;
      const _ = (f = v == null ? void 0 : v.siblings) == null ? void 0 : f[(u = v.main) != null && u.hasBeamTrim ? p - 1 : p];
      _ && ((e == null ? void 0 : e.direction) === "l" ? S = [
        [
          _.y,
          _.y + _.w
        ],
        [
          e.y1 + r,
          (v == null ? void 0 : v.main.y) + (v == null ? void 0 : v.main.w)
        ]
      ] : (e == null ? void 0 : e.direction) === "w" && (S = [
        [
          _.x,
          _.x + _.l
        ],
        [
          e.x1 + r,
          (v == null ? void 0 : v.main.x) + (v == null ? void 0 : v.main.l)
        ]
      ]), (e == null ? void 0 : e.direction) === "l" ? A = [(h = e == null ? void 0 : e.distances) == null ? void 0 : h.bottom, e == null ? void 0 : e.distances.top] : (e == null ? void 0 : e.direction) === "w" && (A = [e == null ? void 0 : e.distances.left, (d = e == null ? void 0 : e.distances) == null ? void 0 : d.right]), this.device === "desktop" && !e.isTrim && this.addCutMeasurementAxes(S, A, s));
    } else {
      this.cuts.style(
        "visibility",
        (S, A) => A <= n ? "visible" : "hidden"
      );
      let p;
      if ((e == null ? void 0 : e.direction) === "l" ? p = [
        [0 + (o.y1 ?? 0), e.y1 - r],
        [
          e.y1 + r,
          e.stock.w - (o != null && o.y2 ? o.y2 : 0)
        ]
      ] : (e == null ? void 0 : e.direction) === "w" && (p = [
        [0 + (o.x1 ?? 0), e.x1 - r],
        [
          e.x1 + r,
          e.stock.l - (o != null && o.x2 ? o.x2 : 0)
        ]
      ]), p != null && p.length) {
        const S = [
          p[0][1] - p[0][0],
          p[1][1] - p[1][0]
        ];
        this.device === "desktop" && !e.isTrim && this.addCutMeasurementAxes(p, S, s);
      }
      this.cuts.classed(
        "highlight",
        (S, A) => A === n
      );
    }
    this.cuts.attr("stroke-width", (p, S) => {
      var _;
      let A = Math.ceil(
        this.measurementScale(this.getBladeWidth(p.stock))
      );
      const v = (_ = e == null ? void 0 : e.guillotineData) == null ? void 0 : _.segmentCutOrder;
      return (this.isCutComplete(p, i, v) || this.isCutInsideSegment(p, i)) && (A += 1), S === n && Math.ceil(
        this.measurementScale(this.getBladeWidth(p.stock))
      ) < 5 && (A = 5), A;
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
        const a = lt.scaleLinear().domain([s, o]).range([
          this.xPositionScale(s),
          this.xPositionScale(o)
        ]), l = (a.domain()[1] - a.domain()[0]) / 2 + a.domain()[0], c = this.axisGroup.append("g").attr(
          "transform",
          `translate(0, ${this.h - this.padding + this.axisSpacing})`
        ).attr("class", "axis measurement x").call(
          lt.axisBottom(a).tickValues([l]).tickSize(4).tickFormat(this.fn)
        );
        c.selectAll("text").attr("x", 0).attr("y", 0).attr(
          "dy",
          (u, f, h) => h[f].getBBox().height + 10
        ), this.cutMeasurementXAxes.push(c);
      } else {
        const a = lt.scaleLinear().domain([s, o]).range([
          this.yPositionScale(s),
          this.yPositionScale(o)
        ]), l = (a.domain()[1] - a.domain()[0]) / 2 + a.domain()[0], c = this.axisGroup.append("g").attr(
          "transform",
          `translate(${this.padding - this.axisSpacing}, 0)`
        ).attr("class", "axis measurement y").call(
          lt.axisLeft(a).tickValues([l]).tickSize(4).tickFormat(this.fn)
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
    const n = e.x, i = e.x + e.l, r = lt.scaleLinear().domain([n, i]).range([this.xPositionScale(n), this.xPositionScale(i)]), s = e.y, o = e.y + e.w, a = lt.scaleLinear().domain([s, o]).range([this.yPositionScale(s), this.yPositionScale(o)]);
    this.shapeXAxis = this.axisGroup.append("g").attr(
      "transform",
      `translate(0, ${this.h - this.padding + this.axisSpacing})`
    ).attr("class", "axis shape x").call(
      lt.axisBottom(r).tickValues(r.domain()).tickSize(4).tickFormat(this.fn)
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
      lt.axisLeft(a).tickValues(a.domain()).tickSize(4).tickFormat(this.fn)
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
      var h, d, p, S, A, v, _, b;
      return this.flipY ? u === 0 ? "rotate(90) translate(-" + ((d = (h = f[u]) == null ? void 0 : h.getBBox()) == null ? void 0 : d.width) / 2 + ")" : "rotate(90) translate(" + ((S = (p = f[u]) == null ? void 0 : p.getBBox()) == null ? void 0 : S.width) / 2 + ")" : u === 0 ? "rotate(90) translate(" + ((v = (A = f[u]) == null ? void 0 : A.getBBox()) == null ? void 0 : v.width) / 2 + ")" : "rotate(90) translate(-" + ((b = (_ = f[u]) == null ? void 0 : _.getBBox()) == null ? void 0 : b.width) / 2 + ")";
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
        ].reduce((o, a) => (o[a] = Vf(r, a), o), {})
      );
    }), this.hasTouch || this.segments.on(
      "mouseover",
      function() {
        lt.select(this).classed("hover", !0);
      },
      {
        passive: !0
      }
    ).on(
      "mouseout",
      function() {
        lt.select(this).classed("hover", !1);
      },
      {
        passive: !0
      }
    ));
  }
  initGroups(e) {
    if (!e || !(e != null && e.length) || !this.main || !this.elWidth)
      return !1;
    this.resetGroups(), this.groups = this.groupGroup.selectAll("rect").data(e).join("rect").attr("class", "group").attr("x", (n) => this.getRectangleCoordinate(n, "x")).attr("y", (n) => this.getRectangleCoordinate(n, "y")).attr("width", (n) => this.getWidthAttribute(n)).attr("height", (n) => this.getHeightAttribute(n)), this.groupGroup.attr("display", "block");
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
          (p) => p.x === h.x && p.y === h.y && p.l === h.l && p.w === h.w
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
    const r = Ct.call(this.vueComponent, ["shapeList"]).filter(
      (a) => {
        var l;
        return a.added && ((l = a == null ? void 0 : a.stock) == null ? void 0 : l.id) === n.id;
      }
    ), s = Pv(
      null,
      r,
      n
    ), o = new Oo();
    s.toArray().forEach((a) => {
      o.addPoints(
        Nv(e, a, n).toArray()
      );
    }), n.cutType === "efficiency" ? ([
      new Rt(0 + (n.trim.x1 ?? 0), 0 + (n.trim.y1 ?? 0)),
      new Rt(0 + (n.trim.x1 ?? 0), 0 + (n.trim.y1 ?? 0)),
      new Rt(
        n.l - e.l - (n.trim.x2 ?? 0),
        0 + (n.trim.y1 ?? 0)
      ),
      new Rt(
        0 + (n.trim.x1 ?? 0),
        n.w - e.w - (n.trim.y2 ?? 0)
      ),
      new Rt(
        n.l - e.l - (n.trim.x2 ?? 0),
        n.w - e.w - (n.trim.y2 ?? 0)
      )
    ].forEach((a) => o.addPoint(a)), i = o.toArray()) : (o.addPoint(
      new Rt(0 + (n.trim.x1 ?? 0), 0 + (n.trim.y1 ?? 0))
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
        a.stopPropagation(), lt.select(this).classed("hover", !0), lt.select(this).raise();
      },
      {
        passive: !0
      }
    ).on(
      "mouseout",
      function(a) {
        a.stopPropagation(), lt.select(this).classed("hover", !1);
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
        a.stopPropagation(), lt.select(this).classed("hover", !0);
        const l = lt.select(this).attr("data-id"), c = lt.select(`.ghost[data-id="${l}"]`);
        c.raise(), c.classed("highlight", !0);
      },
      {
        passive: !0
      }
    ).on(
      "mouseout",
      function(a) {
        a.stopPropagation(), lt.select(this).classed("hover", !1);
        const l = lt.select(this).attr("data-id");
        lt.select(`.ghost[data-id="${l}"]`).classed(
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
    return P((n = this == null ? void 0 : this.saw) == null ? void 0 : n.bladeWidth) ? (i = this.saw) == null ? void 0 : i.bladeWidth : P(e) && e !== null ? e.getBladeWidth() : 0;
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
  resetGroups() {
    this.groupGroup && this.groupGroup.selectAll("*").remove();
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
function Vf(t, e) {
  return e.split(".").reduce((n, i) => n[i], t);
}
function _t(t, e) {
  var n;
  return t != null && t[0] ? (typeof ((n = this == null ? void 0 : this.gs) == null ? void 0 : n[t[0]]) < "u" ? kf(this.gs, t, e) : typeof (this == null ? void 0 : this[t[0]]) < "u" && kf(this, t, e), !0) : !1;
}
function Ct(t) {
  var e;
  if (!(t != null && t[0]))
    return null;
  if ("gs" in this && typeof ((e = this == null ? void 0 : this.gs) == null ? void 0 : e[t[0]]) < "u")
    return Qs(this.gs, t);
  if (typeof (this == null ? void 0 : this[t[0]]) < "u")
    return Qs(this, t);
}
function CP(t) {
  var e;
  if (!(t != null && t[0]))
    return null;
  if ("optionsStore" in this && typeof ((e = this == null ? void 0 : this.optionsStore) == null ? void 0 : e[t[0]]) < "u")
    return Qs(this.optionsStore, t);
  if (typeof (this == null ? void 0 : this[t[0]]) < "u")
    return Qs(this, t);
}
function os(t) {
  t.queue = 0, t.stockCount = 0, t.shapeCount = 0, t.resultCount = 0, t.complete = !1;
}
function yT(t, e = null) {
  var n, i;
  typeof ((n = this.$refs) == null ? void 0 : n[t]) > "u" || ((i = this.$refs) == null ? void 0 : i[t]) === null || (e !== null ? this.$refs[t].visible = e : this.$refs[t].visible = !this.$refs[t].visible);
}
function bT(t, e) {
  return t != null && t.length ? t.find((n) => n.id === e) : null;
}
function vT(t, e) {
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
function _T(t) {
  return t != null && t.length ? t.filter((e) => e.used === !0) : [];
}
function wT(t = {
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
  this.vis = new mT(t), this.vis.initStock(this.activeStock), this.vis.initShapes(this.activeShapes, this.shapeList), this.vis.initCuts(this.activeCuts, this.activeStock), this.visInit = !0;
}
function xT(t = !1) {
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
function ST() {
  var n, i;
  if (this.thinking)
    return !1;
  this.thinking = !0, this.success = !1;
  const t = [];
  if (t.push(...CT.call(this)), t.length) {
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
function kT() {
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
function ET() {
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
function TT() {
  var e;
  const t = ((e = this == null ? void 0 : this.gs) == null ? void 0 : e.vis) ?? (this == null ? void 0 : this.vis);
  t && (t.clearSelection(), t.resetShapeAxes(), t.resetCutMeasurementAxes(), t.resetPositions());
}
function AT(t) {
  Ct.call(this, ["examineShape"]) && (this.examineShape = null), _t.call(this, ["activeStockId"], t);
}
function CT() {
  var i;
  const t = [], e = ((i = this == null ? void 0 : this.gs) == null ? void 0 : i.inputShapes) ?? (this == null ? void 0 : this.inputShapes);
  e.length || t.push("No valid parts found");
  const n = _v(e);
  return (!(e != null && e.length) || !n) && t.push("No quantity of parts found"), t;
}
function OT(t) {
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
var PT = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
function NT(t = PT.VITE_WS_SERVER) {
  this.socket = Cs(t, {
    withCredentials: !0,
    //this is required to send passport user data
    autoConnect: !1
  }), this.socket.on("connect", () => {
    _t.call(this, ["connected"], !0);
  }), this.socket.on("maintenance", () => {
    _t.call(this, ["maintenanceMode"], !0), this.socket.disconnect(), this.env === "development" && console.log(
      "SmartCut - maintenance mode flag received from server"
    );
  }), this.socket.on("connect_error", (e) => {
    _t.call(this, ["connected"], !1), console.warn(`SmartCut - socket connect_error: ${e.message}`), typeof alert < "u" && alert(
      "We are having trouble connecting to the server. Please try again later."
    );
  }), this.socket.on("message", (e) => console.log(e)), this.socket.on("queued", () => {
    _t.call(this, ["progress", "queue"], 1);
  }), this.socket.on("jobInProgess", (e) => (alert(
    `You already have a job in progress, please wait for it to finish

Job ID: ${e}`
  ), !1)), this.socket.on(
    "jobStart",
    () => _t.call(this, ["progress", "queue"], 2)
  ), this.socket.on("progress", (e) => {
    const n = e.data;
    typeof n.shapeCount < "u" && _t.call(this, ["progress", "shapeCount"], n.shapeCount), typeof n.stockCount < "u" && _t.call(this, ["progress", "stockCount"], n.stockCount), typeof n.resultCount < "u" && _t.call(this, ["progress", "resultCount"], n.resultCount);
  }), this.socket.on("upgrade", () => {
    "showUpgradeModal" in this && typeof this.showUpgradeModal == "function" && this.showUpgradeModal(), _t.call(this, ["thinking"], !1);
  }), this.socket.on("error", (e) => {
    var i;
    _t.call(this, ["thinking"], !1);
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
    var a, l, c, u, f, h, d, p, S, A;
    this.socket.disconnect();
    const n = e.result, i = Ct.call(this, ["resetProgress"]);
    if (_t.call(this, ["metadata"], n.metadata ?? {}), _t.call(this, ["unusableShapes"], n.unusableShapes ?? []), _t.call(this, ["unavailableStock"], n.unavailableStock ?? []), !((a = n.shapeList) != null && a.length) || !((l = n.stockList) != null && l.length)) {
      if (i(), typeof this.showModalMessage == "function") {
        let v = "<p>We did not manage to fit any parts.</p>";
        (c = n == null ? void 0 : n.unusableShapes) != null && c.length ? (v = "<p>No parts were usable.</p><p>Click below to view the <strong>Unusable parts</strong> message in the <strong>Inputs panel</stong>.</p>", this.showModalMessage({
          heading: "Parts unusable",
          main: v,
          buttonText: "Show me",
          buttonCallback: (_) => {
            _.showInputPanel(
              "parts",
              "inputs-unusable-parts"
            );
          }
        })) : (v += "<p>Please double check your inputs.</p>", this.$nextTick(() => {
          this.showModalMessage({
            heading: "Parts unusable",
            main: v
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
      ), _t.call(this, ["thinking"], !1), typeof this.toggleWidget == "function" && this.toggleWidget.call(this, "inputs", !0), !1;
    }
    n.shapeList.find((v) => !v.added) && typeof this.showModalMessage == "function" && this.$nextTick(() => {
      this.showModalMessage({
        heading: "Parts not used",
        main: "<p>We did not use all your parts.</p><p>Click below to view the <strong>Unusable parts</strong> message in the <strong>Inputs panel</stong>.</p>",
        buttonText: "Show me",
        buttonCallback: (v) => {
          v.showInputPanel(
            "parts",
            "inputs-unusable-parts"
          );
        }
      });
    }), _t.call(this, ["progress", "complete"], !0), _t.call(this, ["jobId"], e == null ? void 0 : e.jobId), this.toggleWidget("updateStock", !1), this.toggleWidget("options", !1), this.toggleWidget("offcuts", !1), this.toggleWidget("results", !1), this.toggleWidget("cutlist", !1), this.toggleWidget("export", !1), this.toggleWidget("labels", !1);
    let r;
    n != null && n.saw && (r = new On(
      n == null ? void 0 : n.saw,
      ((f = n == null ? void 0 : n.saw) == null ? void 0 : f.stockType) ?? ((d = (h = n.stockList) == null ? void 0 : h[0]) == null ? void 0 : d.type)
    ), _t.call(this, ["saw"], r));
    const s = vw({
      saw: r,
      stockList: n.stockList,
      removeScores: !0,
      preventAutoRotation: !0
    });
    _t.call(this, ["stockList"], s);
    const o = Ct.call(this, ["usedStock"]);
    o.length && this.$nextTick(() => {
      _t.call(this, ["activeStockId"], o[0].id);
    }), _t.call(
      this,
      ["shapeList"],
      _w({
        shapeList: n.shapeList,
        stockList: s,
        preventAutoRotation: !0
      })
    ), n != null && n.cutList && _t.call(
      this,
      ["cutList"],
      ww({
        cutList: n.cutList,
        stockList: s
      })
    ), n != null && n.segmentList && _t.call(
      this,
      ["segmentList"],
      xw({
        segmentList: n.segmentList,
        stockList: s
      })
    ), n != null && n.offcuts && _t.call(
      this,
      ["offcuts"],
      kw({
        offcuts: n.offcuts,
        stockList: s,
        preventAutoRotation: !0
      })
    ), n != null && n.metadata && _t.call(this, ["metadata"], n.metadata), (p = n == null ? void 0 : n.evolutionVisData) != null && p.length ? _t.call(this, ["evolutionVisData"], n.evolutionVisData) : typeof this.toggleWidget == "function" && this.toggleWidget.call(this, "evolution", !1), typeof this.toggleWidget == "function" && this.toggleWidget.call(this, "workbench", !0), _t.call(this, ["thinking"], !1), (A = (S = this.$refs) == null ? void 0 : S.inputs) != null && A.success && (this.$refs.inputs.success = !1), this.$nextTick(() => {
      var _, b;
      if (Ct.call(this, ["addedShapes"]).length === 0) {
        if (i(), typeof this.showModalMessage == "function") {
          let w = "<p>We could not fit any parts.</p>";
          (_ = n == null ? void 0 : n.unusableShapes) != null && _.length ? (w += "<p>Some parts were not usable - click below to view the <strong>Unusable parts</strong> message in the <strong>Inputs panel</stong>.</p>", this.showModalMessage({
            heading: "No layouts",
            main: w,
            buttonText: "More info",
            buttonCallback: (E) => {
              E.showInputPanel(
                "parts",
                "inputs-unusable-parts"
              );
            }
          })) : (w += "<p>Please double check your inputs.</p>", this.showModalMessage({
            heading: "No layouts",
            main: w
          }));
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
function ao(t, e, n, i) {
  var r, s;
  return !n || !i ? !1 : typeof ((s = (r = t == null ? void 0 : t[n]) == null ? void 0 : r[e]) == null ? void 0 : s[i]) < "u";
}
function IT(t, e, n, i) {
  var r;
  return !n || !i ? !1 : ao(t, e, n, i) ? (r = t[n][e][i]) == null ? void 0 : r.enabled : !1;
}
function LT(t, e, n, i, r = !0) {
  if (!ao(t, e, n, i))
    return !1;
  ao(t, e, n, i) && (t[n][e][i].enabled = r);
}
function OP(t, e) {
  return t.type === "unitDependent" ? e === "decimal" ? "decimal" : "text" : t.type === "number" ? "decimal" : "text";
}
function PP(t, e) {
  return t.type === "unitDependent" ? e === "decimal" ? "number" : "text" : t.type === "boolean" ? "checkbox" : t.type === "number" ? "number" : "text";
}
function NP(t) {
  return typeof t.min > "u" ? null : typeof t.min == "function" ? t.min() : typeof t.min == "number" ? t.min : null;
}
function IP(t) {
  return typeof t.max > "u" ? null : typeof t.max == "function" ? t.max() : typeof t.max == "number" ? t.max : null;
}
const MT = {
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
}, RT = { id: "mini-stock-nav" }, DT = ["onMousedown"], FT = { class: "id" };
function $T(t, e, n, i, r, s) {
  return Z(), et("div", RT, [
    (Z(!0), et($t, null, _n(n.stockList, (o, a) => (Z(), et("button", {
      key: a,
      class: ln(["nav-button", { selected: o.id === n.activeStockId }]),
      type: "button",
      style: Ft({
        backgroundColor: o.id === n.activeStockId ? "#" + n.secondaryColor : "#" + n.primaryColor
      }),
      onMousedown: (l) => s.showStock(o.id)
    }, [
      Y("div", FT, mt(a + 1), 1),
      tn(Y("div", { class: "stack legibility" }, mt(o.stack), 513), [
        [_d, typeof o.stack == "number" && o.stack > 1]
      ])
    ], 46, DT))), 128))
  ]);
}
const BT = /* @__PURE__ */ ci(MT, [["render", $T]]), UT = {
  name: "OrientationButton",
  props: {
    shape: {
      type: Object,
      default: () => null
    },
    //if a shape is not available, use shapeOrientation
    shapeOrientation: {
      type: String,
      default: ""
    },
    stockGrain: {
      type: String,
      default: "n"
    },
    stock: {
      type: Object,
      default: () => null
    },
    buttonBackground: {
      type: String,
      default: "#848484"
    },
    iconColor: {
      type: String,
      default: "#FFFFFF"
    },
    rectangleType: {
      type: String,
      default: "shape"
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    isSquare() {
      var t, e;
      if (this.rectangleType === "stock") {
        if (this.stock && typeof ((t = this.stock) == null ? void 0 : t.isSquare) == "function")
          return this.stock.isSquare();
      } else if (this.shape && typeof ((e = this.shape) == null ? void 0 : e.isSquare) == "function")
        return this.shape.isSquare();
      return !1;
    },
    iconType() {
      var t;
      if (this.rectangleType === "stock") {
        if (!this.stock)
          return "noGrain";
      } else if (!this.shape && !this.shapeOrientation)
        return "freeRotation";
      if (this.rectangleType === "stock")
        switch ((t = this.stock) == null ? void 0 : t.grain) {
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
        return this.getShapeIconType();
    },
    isRotated() {
      var t;
      return (this.stockGrain === "n" || this.stockGrain === "l" || this.stockGrain === "w") && (((t = this.shape) == null ? void 0 : t.orientationLock) === "w" || this.shapeOrientation === "w");
    }
  },
  methods: {
    getShapeIconType() {
      var i;
      const t = {
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
          l: "grainTopBottom",
          w: "grainLeftRight",
          default: "freeRotation"
        },
        default: {
          " ": "delete",
          l: "leftRight",
          w: "topBottom",
          default: "freeRotation"
        }
      }, e = this.stockGrain || "default", n = ((i = this.shape) == null ? void 0 : i.orientationLock) || this.shapeOrientation || "default";
      return t[e][n] || t[e].default;
    }
  }
}, qT = {
  key: 0,
  class: "delete",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, HT = /* @__PURE__ */ Y("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1), WT = [
  HT
], VT = /* @__PURE__ */ Y("g", null, [
  /* @__PURE__ */ Y("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
  /* @__PURE__ */ Y("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
  /* @__PURE__ */ Y("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
  /* @__PURE__ */ Y("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
], -1), jT = [
  VT
], zT = /* @__PURE__ */ Y("g", null, [
  /* @__PURE__ */ Y("path", { d: "m5.408 19.408h61.095" }),
  /* @__PURE__ */ Y("g", null, [
    /* @__PURE__ */ Y("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
    /* @__PURE__ */ Y("path", { d: "m17.408 33.408-12-14 12-14" })
  ])
], -1), GT = [
  zT
], YT = /* @__PURE__ */ Y("g", null, [
  /* @__PURE__ */ Y("path", { d: "m19.408 66.503v-61.095" }),
  /* @__PURE__ */ Y("g", null, [
    /* @__PURE__ */ Y("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
    /* @__PURE__ */ Y("path", { d: "m33.408 54.503-14 12-14-12" })
  ])
], -1), KT = [
  YT
], XT = /* @__PURE__ */ Y("g", null, [
  /* @__PURE__ */ Y("path", { d: "m3 3h99.887" }),
  /* @__PURE__ */ Y("path", { d: "m3.113 32h99.887" }),
  /* @__PURE__ */ Y("path", { d: "m3.113 61h99.887" })
], -1), JT = [
  XT
], QT = /* @__PURE__ */ Y("g", null, [
  /* @__PURE__ */ Y("path", { d: "m61 3v99.887" }),
  /* @__PURE__ */ Y("path", { d: "m32 3.113v99.887" }),
  /* @__PURE__ */ Y("path", { d: "m3 3.113v99.887" })
], -1), ZT = [
  QT
];
function tA(t, e, n, i, r, s) {
  return Z(), et("div", {
    class: ln(["orientation-button", { rot: s.isRotated, square: s.isSquare, disabled: n.disabled }]),
    "aria-label": "Part orientation",
    style: Ft({
      background: n.buttonBackground
    })
  }, [
    s.iconType === "delete" ? (Z(), et("svg", qT, WT)) : ut("", !0),
    s.iconType === "freeRotation" ? (Z(), et("svg", {
      key: 1,
      class: "arrow",
      style: Ft({
        stroke: n.iconColor ? n.iconColor : "#ffffff"
      }),
      viewBox: "0 0 67 63",
      xmlns: "http://www.w3.org/2000/svg"
    }, jT, 4)) : ut("", !0),
    s.iconType === "leftRight" ? (Z(), et("svg", {
      key: 2,
      class: "arrow",
      style: Ft({
        stroke: n.iconColor ? n.iconColor : "#ffffff"
      }),
      viewBox: "0 0 72 39",
      xmlns: "http://www.w3.org/2000/svg"
    }, GT, 4)) : ut("", !0),
    s.iconType === "topBottom" ? (Z(), et("svg", {
      key: 3,
      class: "arrow",
      style: Ft({
        stroke: n.iconColor ? n.iconColor : "#ffffff"
      }),
      viewBox: "0 0 39 72",
      xmlns: "http://www.w3.org/2000/svg"
    }, KT, 4)) : ut("", !0),
    s.iconType === "grainLeftRight" ? (Z(), et("svg", {
      key: 4,
      class: "grain",
      style: Ft({
        stroke: n.iconColor ? n.iconColor : "#ffffff"
      }),
      viewBox: "0 0 106 64",
      xmlns: "http://www.w3.org/2000/svg"
    }, JT, 4)) : ut("", !0),
    s.iconType === "grainTopBottom" ? (Z(), et("svg", {
      key: 5,
      class: "grain",
      style: Ft({
        stroke: n.iconColor ? n.iconColor : "#ffffff"
      }),
      viewBox: "0 0 64 106",
      xmlns: "http://www.w3.org/2000/svg"
    }, ZT, 4)) : ut("", !0)
  ], 6);
}
const eA = /* @__PURE__ */ ci(UT, [["render", tA]]), nA = /* @__PURE__ */ oi({
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
}), iA = /* @__PURE__ */ Y("div", { class: "inner" }, null, -1), rA = [
  iA
];
function sA(t, e, n, i, r, s) {
  return Z(), et("div", {
    class: ln(["banding-button", { open: t.open }]),
    onClick: e[0] || (e[0] = (...o) => t.click && t.click(...o))
  }, [
    Y("div", {
      class: ln(["outer", { x1: t.x1, x2: t.x2, y1: t.y1, y2: t.y2 }])
    }, rA, 2)
  ], 2);
}
const oA = /* @__PURE__ */ ci(nA, [["render", sA]]), aA = {
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
}, lA = { id: "spinner" }, cA = ["width", "height"], uA = /* @__PURE__ */ Ay('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7), fA = [
  uA
], hA = /* @__PURE__ */ Y("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1), dA = [
  hA
], pA = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function gA(t, e, n, i, r, s) {
  return Z(), et("div", lA, [
    n.complete ? ut("", !0) : (Z(), et("svg", {
      key: 0,
      class: "loading",
      style: Ft({ width: n.size + "px", height: n.size + "px" }),
      width: n.size,
      height: n.size,
      viewBox: "0 0 300 300"
    }, fA, 12, cA)),
    n.complete ? (Z(), et("svg", {
      key: 1,
      class: "complete",
      style: Ft({ width: n.size + "px", height: n.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, dA, 4)) : ut("", !0),
    n.showNumber ? (Z(), et("div", pA, mt(n.number), 1)) : ut("", !0)
  ]);
}
const mA = /* @__PURE__ */ ci(aA, [["render", gA]]);
function yA(t) {
  var e, n, i, r, s, o, a, l;
  return t.machining ? (n = (e = t.machining) == null ? void 0 : e.holes) != null && n.length || (r = (i = t.machining) == null ? void 0 : i.hingeHoles) != null && r.length ? !0 : (o = (s = t.machining) == null ? void 0 : s.corners) != null && o.length ? (l = (a = t.machining) == null ? void 0 : a.corners) == null ? void 0 : l.some((c) => c.type && c.size) : !1 : !1;
}
const bA = /* @__PURE__ */ El(
  () => import("./Machining-IfhnYFX8.js")
), vA = /* @__PURE__ */ El(() => import("./Import-BQRjZlRC.js")), hg = {
  name: "CheckoutCalculator",
  components: {
    StockNavigation: BT,
    OrientationButton: eA,
    Spinner: mA,
    Machining: bA,
    BandingButton: oA,
    Import: vA
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
    const { t, locale: e, fallbackLocale: n } = Ao({
      locale: "en_US"
    });
    return {
      t,
      locale: e,
      fallbackLocale: n
    };
  },
  data() {
    const t = lf(
      "Checkout/inputShapes",
      [],
      {
        serializer: {
          read: (e) => {
            const n = e ? JSON.parse(e) : [];
            return bw(n, this.units);
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
      currentURL: lf(
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
      stockList: gi([]),
      shapeList: gi([]),
      cutList: gi([]),
      offcuts: gi([]),
      metadata: null,
      messageVisible: !1,
      messageContent: "",
      vis: Uh({}),
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
      canGoFullScreen: Sv(),
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
      return _T(this.stockList);
    },
    activeStock() {
      return this.activeStockId ? bT(this.stockList, this.activeStockId) : null;
    },
    activeStockArea() {
      return this.activeStock.getArea();
    },
    stackedStock() {
      return xv(this.stockList);
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
      return vT(this.cutList, this.activeStock);
    },
    unplacedShapes() {
      return wv(this.shapeList);
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
      OT.call(this, t);
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
        this.inputStock.push(i);
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
    this.currentURL !== e && (this.inputShapes.length = 0), this.currentURL = e, this.locale = this.options.locale, NT.call(this, this.server), this.viewportWidth = window.innerWidth, this.resizeTimer = null;
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
      return t ? yA(t) : !1;
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
      return IT(
        this.fieldDefinitions,
        this.saw.stockType,
        t,
        e
      );
    },
    isFieldPresent(t, e) {
      return ao(
        this.fieldDefinitions,
        this.saw.stockType,
        t,
        e
      );
    },
    setFieldEnabled(t, e, n = !0) {
      return LT(
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
      ST.call(this);
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
              const { cutType: s, cutPreference: o } = $a(e.cutPreference);
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
          wT.call(this, r);
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
      return new dp({
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
      const o = new Vl({
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
      const n = U(t.l), i = U(t.w), r = t.t ? U(t.t) : null, s = new $n({
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
      return xT.call(this, !1);
    },
    //this is for double thickness bonded sheets
    changePartQuantitiesBasedOnThickness() {
      if (this.multiThicknesses.length > 0) {
        const t = U(this.multiThicknesses[0]);
        this.shapeList.forEach((e) => {
          e.q = e.q * (U(e.t) / t), e.t = t;
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
          l: U(r == null ? void 0 : r.l),
          w: U(r == null ? void 0 : r.w),
          t: r.t ? U(r == null ? void 0 : r.t) : null,
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
      ET.call(this);
    },
    refreshShapes() {
      kT.call(this, this.uniqueShapes.length);
    },
    toggleWidget(t, e = null) {
      yT.call(this, t, e);
    },
    clearSelection() {
      TT.call(this);
    },
    showStock(t) {
      AT.call(this, t);
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
function jf(t) {
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
const fc = (t) => (Rm("data-v-d63fc20d"), t = t(), Dm(), t), _A = {
  id: "part-input",
  class: "inputs no-margin-top grid-table"
}, wA = /* @__PURE__ */ fc(() => /* @__PURE__ */ Y("div", { class: "cell" }, null, -1)), xA = {
  key: 0,
  class: "cell"
}, SA = {
  key: 1,
  class: "cell"
}, kA = {
  key: 2,
  class: "cell"
}, EA = { class: "cell" }, TA = {
  key: 3,
  class: "cell"
}, AA = {
  key: 4,
  class: "cell center"
}, CA = {
  key: 5,
  class: "cell center"
}, OA = {
  key: 6,
  class: "cell center"
}, PA = {
  key: 7,
  class: "cell"
}, NA = { class: "cell" }, IA = {
  key: 0,
  class: "number length cell"
}, LA = ["for"], MA = ["id", "onUpdate:modelValue", "type", "inputmode", "placeholder"], RA = {
  key: 1,
  class: "number width cell"
}, DA = ["for"], FA = ["id", "onUpdate:modelValue", "type", "inputmode", "placeholder"], $A = {
  key: 2,
  class: "thickness cell"
}, BA = ["id", "onUpdate:modelValue"], UA = ["value"], qA = { class: "number quant cell" }, HA = ["for"], WA = ["id", "onUpdate:modelValue", "placeholder"], VA = {
  key: 3,
  class: "text name cell"
}, jA = ["id", "onUpdate:modelValue", "aria-label", "placeholder"], zA = {
  key: 4,
  class: "cell align-items-center"
}, GA = ["onClick"], YA = {
  key: 6,
  class: "cell center"
}, KA = {
  key: 7,
  class: "cell"
}, XA = ["aria-label", "onClick"], JA = ["for"], QA = ["id", "onUpdate:modelValue"], ZA = /* @__PURE__ */ fc(() => /* @__PURE__ */ Y("option", { value: "" }, " ✘ ", -1)), tC = ["value"], eC = ["onUpdate:modelValue", "onChange"], nC = /* @__PURE__ */ fc(() => /* @__PURE__ */ Y("option", { value: "" }, " ✘ ", -1)), iC = ["value"], rC = ["aria-label", "onClick"], sC = { class: "button-wrapper main" }, oC = ["aria-label"], aC = ["aria-label", "disabled"], lC = ["aria-label"], cC = { id: "part-count" }, uC = ["innerHTML"], fC = {
  key: 3,
  id: "progress"
}, hC = {
  id: "smartcut-svg-wrapper",
  class: "svg-wrapper production"
}, dC = {
  key: 0,
  id: "stack"
};
function pC(t, e, n, i, r, s) {
  var d, p, S, A, v;
  const o = vn("Machining"), a = vn("font-awesome-icon"), l = vn("OrientationButton"), c = vn("BandingButton"), u = vn("Import"), f = vn("Spinner"), h = vn("StockNavigation");
  return Z(), et($t, null, [
    r.machiningEnabled ? (Z(), Si(o, {
      key: 0,
      shape: r.currentInputShape,
      options: r.machiningOptions,
      onClose: s.closeMachining
    }, null, 8, ["shape", "options", "onClose"])) : ut("", !0),
    r.creditVisible ? (Z(), et("div", {
      key: 1,
      id: "smartcut-checkout",
      class: ln({ fullscreen: r.isFullScreen })
    }, [
      r.canGoFullScreen ? (Z(), et("div", {
        key: 0,
        id: "smartcut-full-screen",
        class: "icon-left",
        onClick: e[0] || (e[0] = (_) => s.toggleFullScreen())
      }, [
        gt(a, { icon: ["fasr", "expand"] }),
        Vn(" " + mt(i.t("full screen")), 1)
      ])) : ut("", !0),
      Y("div", {
        id: "credit",
        style: Ft(r.creditStyles)
      }, [
        Y("a", {
          title: "SmartCut | Cut list optimization software",
          style: Ft(r.creditLinkStyles),
          target: "_blank",
          href: "https://smartcut.dev/"
        }, mt(i.t("Powered by SmartCut")), 5)
      ], 4),
      Y("div", _A, [
        r.inputShapes.length ? (Z(), et("div", {
          key: 0,
          class: "row table-heading",
          style: Ft({ "grid-template-columns": s.partColumnsStyle })
        }, [
          wA,
          s.isFieldEnabled("parts", "l") ? (Z(), et("div", xA, [
            Y("span", null, [
              gt(a, { icon: ["fasr", "arrows-left-right"] }),
              Vn(" " + mt(i.t("length")), 1)
            ])
          ])) : ut("", !0),
          s.isFieldEnabled("parts", "w") ? (Z(), et("div", SA, [
            Y("span", null, [
              gt(a, { icon: ["fasr", "arrows-up-down"] }),
              Vn(" " + mt(i.t("width")), 1)
            ])
          ])) : ut("", !0),
          s.isFieldEnabled("parts", "t") ? (Z(), et("div", kA, mt(i.t("thickness")), 1)) : ut("", !0),
          Y("div", EA, mt(i.t("quantity")), 1),
          s.isFieldEnabled("parts", "name") ? (Z(), et("div", TA, mt(i.t("name")), 1)) : ut("", !0),
          s.isFieldEnabled("parts", "orientation") ? (Z(), et("div", AA, mt(i.t("orientation")), 1)) : ut("", !0),
          r.canGoFullScreen && s.isFieldEnabled("parts", "machining") ? (Z(), et("div", CA, mt(i.t("machining")), 1)) : ut("", !0),
          s.isFieldEnabled("parts", "banding") ? (Z(), et("div", OA, mt(i.t("banding")), 1)) : ut("", !0),
          r.inputShapes.length > 1 ? (Z(), et("div", PA)) : ut("", !0)
        ], 4)) : ut("", !0),
        (Z(!0), et($t, null, _n(r.inputShapes, (_, b) => (Z(), et("div", {
          key: b,
          class: "row grid-table",
          style: Ft({ "grid-template-columns": s.partColumnsStyle })
        }, [
          Y("div", NA, [
            Y("div", {
              class: "id",
              style: Ft({
                background: r.colors.partA,
                color: r.colors.text
              })
            }, mt(b + 1), 5)
          ]),
          s.isFieldEnabled("parts", "l") ? (Z(), et("div", IA, [
            Y("label", {
              for: "part-length-" + b
            }, mt(i.t("length")), 9, LA),
            tn(Y("input", {
              id: "part-length-" + b,
              ref_for: !0,
              ref: b === r.inputShapes.length - 1 ? "shapeInputFocus" : void 0,
              "onUpdate:modelValue": (w) => _.l = w,
              type: s.inputType,
              inputmode: s.inputMode,
              min: "0",
              placeholder: i.t("l")
            }, null, 8, MA), [
              [
                lu,
                _.l,
                void 0,
                {
                  lazy: !0,
                  trim: !0
                }
              ]
            ])
          ])) : ut("", !0),
          s.isFieldEnabled("parts", "w") ? (Z(), et("div", RA, [
            Y("label", {
              for: "part-width-" + b
            }, mt(i.t("width")), 9, DA),
            tn(Y("input", {
              id: "part-width-" + b,
              "onUpdate:modelValue": (w) => _.w = w,
              type: s.inputType,
              inputmode: s.inputMode,
              min: "0",
              placeholder: i.t("w")
            }, null, 8, FA), [
              [
                lu,
                _.w,
                void 0,
                {
                  lazy: !0,
                  trim: !0
                }
              ]
            ])
          ])) : ut("", !0),
          s.isFieldEnabled("parts", "t") ? (Z(), et("div", $A, [
            tn(Y("select", {
              id: "part-thickness" + b,
              "onUpdate:modelValue": (w) => _.t = w,
              "aria-label": "Thickness"
            }, [
              (Z(!0), et($t, null, _n(r.multiThicknesses, (w, E) => (Z(), et("option", {
                key: E,
                value: w
              }, mt(w), 9, UA))), 128))
            ], 8, BA), [
              [
                xs,
                _.t,
                void 0,
                { lazy: !0 }
              ]
            ])
          ])) : ut("", !0),
          Y("div", qA, [
            Y("label", {
              for: "part-quantity-" + b
            }, mt(i.t("quantity")), 9, HA),
            tn(Y("input", {
              id: "part-quantity-" + b,
              "onUpdate:modelValue": (w) => _.q = w,
              type: "number",
              inputmode: "numeric",
              min: "0",
              placeholder: i.t("q")
            }, null, 8, WA), [
              [
                Us,
                _.q,
                void 0,
                {
                  lazy: !0,
                  number: !0
                }
              ]
            ])
          ]),
          s.isFieldEnabled("parts", "name") ? (Z(), et("div", VA, [
            tn(Y("input", {
              id: "part-name-" + b,
              "onUpdate:modelValue": (w) => _.name = w,
              "aria-label": i.t("name"),
              type: "text",
              placeholder: i.t("name")
            }, null, 8, jA), [
              [
                Us,
                _.name,
                void 0,
                { lazy: !0 }
              ]
            ])
          ])) : ut("", !0),
          s.isFieldEnabled("parts", "orientation") ? (Z(), et("div", zA, [
            gt(l, {
              shape: _,
              "button-background": r.colors.button,
              "icon-color": r.colors.buttonText,
              onClick: (w) => s.toggleShapeOrientation(_)
            }, null, 8, ["shape", "button-background", "icon-color", "onClick"])
          ])) : ut("", !0),
          r.canGoFullScreen && s.isFieldEnabled("parts", "machining") ? (Z(), et("div", {
            key: 5,
            class: ln(["cell center", { active: s.hasMachining(_) }])
          }, [
            Y("button", {
              type: "button",
              onClick: (w) => s.openMachining(_)
            }, [
              gt(a, { icon: ["fass", "hammer"] })
            ], 8, GA)
          ], 2)) : ut("", !0),
          s.isFieldEnabled("parts", "banding") ? (Z(), et("div", YA, [
            gt(c, {
              "input-shape": _,
              open: r.bandingEnabled === b,
              onClicked: (w) => s.openBanding(_)
            }, null, 8, ["input-shape", "open", "onClicked"])
          ])) : ut("", !0),
          r.inputShapes.length > 1 ? (Z(), et("div", KA, [
            Y("button", {
              type: "button",
              class: "remove",
              "aria-label": i.t("remove part"),
              onClick: (w) => s.removeShape(b)
            }, [
              gt(a, { icon: ["fass", "trash"] })
            ], 8, XA)
          ])) : ut("", !0),
          r.bandingEnabled === b && s.isFieldEnabled("parts", "banding") && Object.values(r.options.bandingOptions).length > 0 ? (Z(), et("div", {
            key: 8,
            class: "group banding",
            style: Ft({ "grid-column-end": "span " + (s.partColumns + 1) })
          }, [
            (Z(), et($t, null, _n(["y1", "y2", "x1", "x2"], (w, E) => Y("div", { key: E }, [
              Y("label", {
                for: "banding-" + w + "-" + b
              }, mt(i.t(
                w === "y1" || w === "y2" ? "l" + (E % 2 + 1) : "w" + (E % 2 + 1)
              )), 9, JA),
              (Z(!0), et($t, null, _n(r.options.bandingOptions, (C, N, F) => tn((Z(), et("select", {
                id: "banding-" + N + "-" + w + "-" + F + "-" + b,
                key: N + F.toString(),
                "onUpdate:modelValue": ($) => _.bandingOptions[w][N] = $
              }, [
                Y("div", null, mt(N) + " " + mt(_.bandingOptions[w][N]), 1),
                ZA,
                (Z(!0), et($t, null, _n(C, ($, V) => (Z(), et("option", {
                  key: V,
                  value: $
                }, mt($), 9, tC))), 128))
              ], 8, QA)), [
                [
                  xs,
                  _.bandingOptions[w][N],
                  void 0,
                  { lazy: !0 }
                ]
              ])), 128)),
              Y("div", null, mt(s.getBandingPrice(_.bandingOptions[w])), 1)
            ])), 64)),
            Y("div", null, [
              Y("label", null, mt(i.t("all")), 1),
              (Z(!0), et($t, null, _n(r.options.bandingOptions, (w, E, C) => tn((Z(), et("select", {
                key: E + C.toString(),
                "onUpdate:modelValue": (N) => _.bandingOptions.all[E] = N,
                onChange: (N) => s.updateAllBanding(N, E, _)
              }, [
                Y("div", null, mt(i.t("all")), 1),
                nC,
                (Z(!0), et($t, null, _n(w, (N, F) => (Z(), et("option", {
                  key: F,
                  value: N
                }, mt(N), 9, iC))), 128))
              ], 40, eC)), [
                [
                  xs,
                  _.bandingOptions.all[E],
                  void 0,
                  { lazy: !0 }
                ]
              ])), 128))
            ]),
            Y("button", {
              type: "button",
              class: "delete icon-left",
              "aria-label": i.t("delete banding"),
              onClick: (w) => s.deleteBanding(_)
            }, [
              gt(a, { icon: ["fass", "trash"] }),
              Vn(" " + mt(i.t("delete banding")), 1)
            ], 8, rC)
          ], 4)) : ut("", !0)
        ], 4))), 128))
      ]),
      Y("div", sC, [
        Y("button", {
          type: "button",
          "aria-label": i.t("add part"),
          style: Ft({ background: r.colors.button, color: r.colors.buttonText }),
          class: "add c-btn icon-left",
          onClick: e[1] || (e[1] = (_) => s.addShape(1))
        }, [
          gt(a, { icon: ["fasr", "plus-large"] }),
          Vn(" Add ")
        ], 12, oC),
        Y("button", {
          class: "c-btn calculate icon-left",
          type: "button",
          "aria-label": i.t("calculate"),
          style: Ft({
            background: r.colors.button,
            color: r.colors.buttonText
          }),
          disabled: !((d = r.inputStock) != null && d.length) || r.thinking,
          onClick: e[2] || (e[2] = (_) => s.calculate())
        }, [
          gt(a, { icon: ["fass", "calculator"] }),
          Vn("Calculate price ")
        ], 12, aC),
        Y("button", {
          type: "button",
          class: "c-btn clear",
          "aria-label": i.t("clear"),
          onClick: e[3] || (e[3] = (_) => s.clear())
        }, [
          gt(a, { icon: ["fass", "trash"] })
        ], 8, lC),
        Y("div", cC, mt(s.totalInputShapes) + mt((p = r.options) != null && p.maxParts ? "/" + r.options.maxParts : ""), 1)
      ]),
      r.importEnabled ? (Z(), Si(u, {
        key: 1,
        ref: "import",
        units: n.units,
        onImport: s.importParts
      }, null, 8, ["units", "onImport"])) : ut("", !0),
      r.messageVisible ? (Z(), et("div", {
        key: 2,
        id: "messages",
        innerHTML: r.messageContent
      }, null, 8, uC)) : ut("", !0),
      (r.options.showDiagram ? r.thinking && !r.progress.complete : r.thinking || r.progress.complete) ? (Z(), et("div", fC, [
        gt(f, {
          size: 50,
          number: r.progress.shapeCount,
          complete: r.progress.complete,
          "show-number": r.options.showProgressNumber
        }, null, 8, ["number", "complete", "show-number"])
      ])) : ut("", !0),
      tn(Y("div", hC, [
        ((S = s.activeStock) == null ? void 0 : S.type) !== "roll" ? (Z(), et("div", dC, mt((A = s.activeStock) != null && A.stack ? (v = s.activeStock) == null ? void 0 : v.stack : 1), 1)) : ut("", !0)
      ], 512), [
        [_d, r.options.showDiagram && r.jobId > 0 && r.progress.complete]
      ]),
      r.options.showDiagram && r.visInit && s.usedStock.length > 1 && r.jobId > 0 && r.progress.complete ? (Z(), Si(h, {
        key: 4,
        ref: "stockNavigation",
        "active-stock-id": r.activeStockId,
        "stock-list": s.stackedStock,
        "stock-count": r.stockList.length,
        "viewport-width": r.viewportWidth,
        onShowStock: s.showStock
      }, null, 8, ["active-stock-id", "stock-list", "stock-count", "viewport-width", "onShowStock"])) : ut("", !0)
    ], 2)) : ut("", !0)
  ], 64);
}
typeof jf == "function" && jf(hg);
const gC = /* @__PURE__ */ ci(hg, [["render", pC], ["__scopeId", "data-v-d63fc20d"]]), mC = {
  name: "Wordpress",
  //needs to be Wordpress not WordPress
  components: {
    CheckoutCalculator: gC
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
              (d) => d.attributes.thickness === this.product.selected_thickness
            );
            if (!h)
              return this.error(
                `variation not found for thickness ${this.product.selected_thickness}`
              );
            f = u.map((d) => ({
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
              var d, p, S;
              return {
                size: (d = h == null ? void 0 : h.attributes) == null ? void 0 : d.size,
                l: (p = h == null ? void 0 : h.attributes) == null ? void 0 : p.size.split("x")[0],
                w: (S = h == null ? void 0 : h.attributes) == null ? void 0 : S.size.split("x")[1],
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
              s == null ? void 0 : s.attributes
            );
            this.stock.push(d);
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
      var t, e, n, i, r, s, o, a, l, c, u, f, h, d, p, S, A, v, _, b, w;
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
          stock: (d = this.settings) != null && d.stock_color ? (p = this.settings) == null ? void 0 : p.stock_color : "#ffd166",
          button: (S = this.settings) != null && S.button_color ? (A = this.settings) == null ? void 0 : A.button_color : "#118ab2",
          buttonText: (v = this.settings) != null && v.button_text_color ? (_ = this.settings) == null ? void 0 : _.button_text_color : "#ffffff",
          text: (b = this.settings) != null && b.text_color ? (w = this.settings) == null ? void 0 : w.text_color : "#ffffff"
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
      return zl(Mr(t)).replace("|", "_");
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
      var c, u, f, h;
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
            const d = this.settings.units === "fraction" ? t.metadata.totalPartArea / 144 : t.metadata.totalPartArea / 1e6;
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
            const d = t.metadata.totalCutLength / (this.settings.units === "fraction" ? 12 : 1e3);
            this.el.quantity.value = d.toFixed(2), this.el.cart_button.disabled = !1;
          }
          break;
        case "full_sheet_plus_cut_length":
          {
            this.log([
              "calculating cost by full sheet plus cut length"
            ]), e ? (this.el.quantity.style.display = "inline-block", this.el.quantity.value = t.metadata.totalUsedStock) : (this.el.quantity.value = 1, this.el.quantity.style.display = "none");
            const p = t.metadata.totalCutLength / (this.settings.units === "fraction" ? 12 : 1e3) * this.settings.cut_length_price;
            this.el.cut_length_price && (this.el.cut_length_price.innerText = this.formatPrice(p)), this.inputs["smartcut-cut-length-price"].value = p, n += p, this.el.cart_button.disabled = !1;
          }
          break;
        case "full_sheet_plus_num_parts":
          {
            this.log([
              "calculating cost by full sheet plus number of parts"
            ]), e ? (this.el.quantity.style.display = "inline-block", this.el.quantity.value = t.metadata.totalUsedStock) : (this.el.quantity.value = 1, this.el.quantity.style.display = "none");
            const d = t.metadata.totalPartsProduced * this.settings.per_part_price;
            this.el.per_part_price && (this.el.per_part_price.innerText = this.formatPrice(d)), this.inputs["smartcut-per-part-price"].value = d, n += d, this.el.cart_button.disabled = !1;
          }
          break;
      }
      if (!e) {
        if (!t.metadata.totalStockCost)
          return this.error(
            "Total stock cost not returned for a multiple size product"
          );
        const d = parseFloat(t.metadata.totalStockCost);
        this.log(["total price", d]), document.getElementById(
          "smartcut-custom-price"
        ).value = d.toString(), n += d;
      }
      if (this.isBandingEnabled()) {
        const d = this.getTotalBandingPrice(
          t.metadata.bandingLengthByType
        );
        this.inputs["smartcut-banding-price"].value = d, this.el.banding_total_price && (this.el.banding_total_price.innerText = this.formatPrice(d)), n += d;
      }
      if (this.isMachiningEnabled()) {
        const d = this.getTotalMachiningPrice(t);
        this.inputs["smartcut-machining-price"].value = d, this.el.machining_total_price && (this.el.machining_total_price.innerText = this.formatPrice(d)), n += d;
      }
      if (this.isSurchargeEnabled() && (c = this.settings) != null && c.surcharge) {
        let d = 0;
        ((u = this.settings) == null ? void 0 : u.surcharge_type) === "per_sheet" ? d = parseFloat((f = this.settings) == null ? void 0 : f.surcharge) * parseFloat(t.metadata.totalUsedStock) : d = parseFloat((h = this.settings) == null ? void 0 : h.surcharge), this.inputs["smartcut-cut-to-size-surcharge"].value = d, this.el.surcharge_price && (this.el.surcharge_price.innerText = this.formatPrice(d)), this.log(["added surcharge", d]), n += d;
      }
      const i = document.querySelector(
        ".woocommerce-variation-price .smartcut-price-selector"
      );
      i && (i.innerText = this.formatPrice(n));
      const r = {
        "smartcut-job-id": null,
        "smartcut-dimensions": null,
        "smartcut-total-cut-length": "totalCutLength",
        "smartcut-part-area": "totalPartArea",
        "smartcut-total-cuts": "totalCuts",
        "smartcut-total-parts": "totalPartsProduced",
        "smartcut-machining": "hasMachining"
      }, s = Object.keys(r), o = s.filter(
        (d) => d in this.inputs
      );
      o.length !== s.length && console.error(
        "Some requried hidden fields are missing",
        s.join(),
        o.join()
      ), this.inputs["smartcut-job-id"].value = t == null ? void 0 : t.jobId;
      const a = t == null ? void 0 : t.parts.map((d) => `${d.l}x${d.w} [${d.q}]`).join(", ");
      this.inputs["smartcut-dimensions"].value = a, Object.entries(r).filter(([, d]) => d !== null).map(([d]) => d).forEach((d) => {
        this.inputs[d].value = t.metadata[r[d]];
      });
    }
  }
};
function yC(t, e, n, i, r, s) {
  const o = vn("CheckoutCalculator");
  return Z(), Si(o, {
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
const bC = /* @__PURE__ */ ci(mC, [["render", yC]]), vC = /* @__PURE__ */ El(() => import("./Vanilla-uDd7ONuB.js")), _C = /* @__PURE__ */ oi({
  name: "Launch",
  components: {
    Wordpress: bC,
    Vanilla: vC
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
function wC(t, e, n, i, r, s) {
  return Z(), Si(Hm(t.currentComponent), { ref: "checkout" }, null, 512);
}
const xC = /* @__PURE__ */ ci(_C, [["render", wC]]);
function zf(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    e && (i = i.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function K(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? zf(Object(n), !0).forEach(function(i) {
      Ht(t, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : zf(Object(n)).forEach(function(i) {
      Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return t;
}
function lo(t) {
  "@babel/helpers - typeof";
  return lo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, lo(t);
}
function SC(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function kC(t, e) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
  }
}
function EC(t, e, n) {
  return e && kC(t.prototype, e), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function Ht(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function hc(t, e) {
  return AC(t) || OC(t, e) || dg(t, e) || NC();
}
function Dr(t) {
  return TC(t) || CC(t) || dg(t) || PC();
}
function TC(t) {
  if (Array.isArray(t))
    return Qa(t);
}
function AC(t) {
  if (Array.isArray(t))
    return t;
}
function CC(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function OC(t, e) {
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
function dg(t, e) {
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
function PC() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function NC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Gf = function() {
}, dc = {}, pg = {}, gg = null, mg = {
  mark: Gf,
  measure: Gf
};
try {
  typeof window < "u" && (dc = window), typeof document < "u" && (pg = document), typeof MutationObserver < "u" && (gg = MutationObserver), typeof performance < "u" && (mg = performance);
} catch {
}
var IC = dc.navigator || {}, Yf = IC.userAgent, Kf = Yf === void 0 ? "" : Yf, Nn = dc, At = pg, Xf = gg, as = mg;
Nn.document;
var pn = !!At.documentElement && !!At.head && typeof At.addEventListener == "function" && typeof At.createElement == "function", yg = ~Kf.indexOf("MSIE") || ~Kf.indexOf("Trident/"), ls, cs, us, fs, hs, cn = "___FONT_AWESOME___", Za = 16, bg = "fa", vg = "svg-inline--fa", ri = "data-fa-i2svg", tl = "data-fa-pseudo-element", LC = "data-fa-pseudo-element-pending", pc = "data-prefix", gc = "data-icon", Jf = "fontawesome-i2svg", MC = "async", RC = ["HTML", "HEAD", "STYLE", "SCRIPT"], _g = function() {
  try {
    return !0;
  } catch {
    return !1;
  }
}(), Tt = "classic", Lt = "sharp", mc = [Tt, Lt];
function Fr(t) {
  return new Proxy(t, {
    get: function(n, i) {
      return i in n ? n[i] : n[Tt];
    }
  });
}
var xr = Fr((ls = {}, Ht(ls, Tt, {
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
}), Ht(ls, Lt, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), ls)), Sr = Fr((cs = {}, Ht(cs, Tt, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), Ht(cs, Lt, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), cs)), kr = Fr((us = {}, Ht(us, Tt, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), Ht(us, Lt, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), us)), DC = Fr((fs = {}, Ht(fs, Tt, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), Ht(fs, Lt, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), fs)), FC = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, wg = "fa-layers-text", $C = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, BC = Fr((hs = {}, Ht(hs, Tt, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), Ht(hs, Lt, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), hs)), xg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], UC = xg.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), qC = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Kn = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Er = /* @__PURE__ */ new Set();
Object.keys(Sr[Tt]).map(Er.add.bind(Er));
Object.keys(Sr[Lt]).map(Er.add.bind(Er));
var HC = [].concat(mc, Dr(Er), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Kn.GROUP, Kn.SWAP_OPACITY, Kn.PRIMARY, Kn.SECONDARY]).concat(xg.map(function(t) {
  return "".concat(t, "x");
})).concat(UC.map(function(t) {
  return "w-".concat(t);
})), lr = Nn.FontAwesomeConfig || {};
function WC(t) {
  var e = At.querySelector("script[" + t + "]");
  if (e)
    return e.getAttribute(t);
}
function VC(t) {
  return t === "" ? !0 : t === "false" ? !1 : t === "true" ? !0 : t;
}
if (At && typeof At.querySelector == "function") {
  var jC = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  jC.forEach(function(t) {
    var e = hc(t, 2), n = e[0], i = e[1], r = VC(WC(n));
    r != null && (lr[i] = r);
  });
}
var Sg = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: bg,
  replacementClass: vg,
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
var Ri = K(K({}, Sg), lr);
Ri.autoReplaceSvg || (Ri.observeMutations = !1);
var Q = {};
Object.keys(Sg).forEach(function(t) {
  Object.defineProperty(Q, t, {
    enumerable: !0,
    set: function(n) {
      Ri[t] = n, cr.forEach(function(i) {
        return i(Q);
      });
    },
    get: function() {
      return Ri[t];
    }
  });
});
Object.defineProperty(Q, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Ri.cssPrefix = e, cr.forEach(function(n) {
      return n(Q);
    });
  },
  get: function() {
    return Ri.cssPrefix;
  }
});
Nn.FontAwesomeConfig = Q;
var cr = [];
function zC(t) {
  return cr.push(t), function() {
    cr.splice(cr.indexOf(t), 1);
  };
}
var bn = Za, je = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function GC(t) {
  if (!(!t || !pn)) {
    var e = At.createElement("style");
    e.setAttribute("type", "text/css"), e.innerHTML = t;
    for (var n = At.head.childNodes, i = null, r = n.length - 1; r > -1; r--) {
      var s = n[r], o = (s.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (i = s);
    }
    return At.head.insertBefore(e, i), t;
  }
}
var YC = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Tr() {
  for (var t = 12, e = ""; t-- > 0; )
    e += YC[Math.random() * 62 | 0];
  return e;
}
function Vi(t) {
  for (var e = [], n = (t || []).length >>> 0; n--; )
    e[n] = t[n];
  return e;
}
function yc(t) {
  return t.classList ? Vi(t.classList) : (t.getAttribute("class") || "").split(" ").filter(function(e) {
    return e;
  });
}
function kg(t) {
  return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function KC(t) {
  return Object.keys(t || {}).reduce(function(e, n) {
    return e + "".concat(n, '="').concat(kg(t[n]), '" ');
  }, "").trim();
}
function Bo(t) {
  return Object.keys(t || {}).reduce(function(e, n) {
    return e + "".concat(n, ": ").concat(t[n].trim(), ";");
  }, "");
}
function bc(t) {
  return t.size !== je.size || t.x !== je.x || t.y !== je.y || t.rotate !== je.rotate || t.flipX || t.flipY;
}
function XC(t) {
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
function JC(t) {
  var e = t.transform, n = t.width, i = n === void 0 ? Za : n, r = t.height, s = r === void 0 ? Za : r, o = t.startCentered, a = o === void 0 ? !1 : o, l = "";
  return a && yg ? l += "translate(".concat(e.x / bn - i / 2, "em, ").concat(e.y / bn - s / 2, "em) ") : a ? l += "translate(calc(-50% + ".concat(e.x / bn, "em), calc(-50% + ").concat(e.y / bn, "em)) ") : l += "translate(".concat(e.x / bn, "em, ").concat(e.y / bn, "em) "), l += "scale(".concat(e.size / bn * (e.flipX ? -1 : 1), ", ").concat(e.size / bn * (e.flipY ? -1 : 1), ") "), l += "rotate(".concat(e.rotate, "deg) "), l;
}
var QC = `:root, :host {
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
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
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
function Eg() {
  var t = bg, e = vg, n = Q.cssPrefix, i = Q.replacementClass, r = QC;
  if (n !== t || i !== e) {
    var s = new RegExp("\\.".concat(t, "\\-"), "g"), o = new RegExp("\\--".concat(t, "\\-"), "g"), a = new RegExp("\\.".concat(e), "g");
    r = r.replace(s, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(a, ".".concat(i));
  }
  return r;
}
var Qf = !1;
function la() {
  Q.autoAddCss && !Qf && (GC(Eg()), Qf = !0);
}
var ZC = {
  mixout: function() {
    return {
      dom: {
        css: Eg,
        insertCss: la
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        la();
      },
      beforeI2svg: function() {
        la();
      }
    };
  }
}, un = Nn || {};
un[cn] || (un[cn] = {});
un[cn].styles || (un[cn].styles = {});
un[cn].hooks || (un[cn].hooks = {});
un[cn].shims || (un[cn].shims = []);
var Ie = un[cn], Tg = [], tO = function t() {
  At.removeEventListener("DOMContentLoaded", t), co = 1, Tg.map(function(e) {
    return e();
  });
}, co = !1;
pn && (co = (At.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(At.readyState), co || At.addEventListener("DOMContentLoaded", tO));
function eO(t) {
  pn && (co ? setTimeout(t, 0) : Tg.push(t));
}
function $r(t) {
  var e = t.tag, n = t.attributes, i = n === void 0 ? {} : n, r = t.children, s = r === void 0 ? [] : r;
  return typeof t == "string" ? kg(t) : "<".concat(e, " ").concat(KC(i), ">").concat(s.map($r).join(""), "</").concat(e, ">");
}
function Zf(t, e, n) {
  if (t && t[e] && t[e][n])
    return {
      prefix: e,
      iconName: n,
      icon: t[e][n]
    };
}
var ca = function(e, n, i, r) {
  var s = Object.keys(e), o = s.length, a = n, l, c, u;
  for (i === void 0 ? (l = 1, u = e[s[0]]) : (l = 0, u = i); l < o; l++)
    c = s[l], u = a(u, e[c], c, e);
  return u;
};
function nO(t) {
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
  var e = nO(t);
  return e.length === 1 ? e[0].toString(16) : null;
}
function iO(t, e) {
  var n = t.length, i = t.charCodeAt(e), r;
  return i >= 55296 && i <= 56319 && n > e + 1 && (r = t.charCodeAt(e + 1), r >= 56320 && r <= 57343) ? (i - 55296) * 1024 + r - 56320 + 65536 : i;
}
function th(t) {
  return Object.keys(t).reduce(function(e, n) {
    var i = t[n], r = !!i.icon;
    return r ? e[i.iconName] = i.icon : e[n] = i, e;
  }, {});
}
function nl(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = n.skipHooks, r = i === void 0 ? !1 : i, s = th(e);
  typeof Ie.hooks.addPack == "function" && !r ? Ie.hooks.addPack(t, th(e)) : Ie.styles[t] = K(K({}, Ie.styles[t] || {}), s), t === "fas" && nl("fa", e);
}
var ds, ps, gs, yi = Ie.styles, rO = Ie.shims, sO = (ds = {}, Ht(ds, Tt, Object.values(kr[Tt])), Ht(ds, Lt, Object.values(kr[Lt])), ds), vc = null, Ag = {}, Cg = {}, Og = {}, Pg = {}, Ng = {}, oO = (ps = {}, Ht(ps, Tt, Object.keys(xr[Tt])), Ht(ps, Lt, Object.keys(xr[Lt])), ps);
function aO(t) {
  return ~HC.indexOf(t);
}
function lO(t, e) {
  var n = e.split("-"), i = n[0], r = n.slice(1).join("-");
  return i === t && r !== "" && !aO(r) ? r : null;
}
var Ig = function() {
  var e = function(s) {
    return ca(yi, function(o, a, l) {
      return o[l] = ca(a, s, {}), o;
    }, {});
  };
  Ag = e(function(r, s, o) {
    if (s[3] && (r[s[3]] = o), s[2]) {
      var a = s[2].filter(function(l) {
        return typeof l == "number";
      });
      a.forEach(function(l) {
        r[l.toString(16)] = o;
      });
    }
    return r;
  }), Cg = e(function(r, s, o) {
    if (r[o] = o, s[2]) {
      var a = s[2].filter(function(l) {
        return typeof l == "string";
      });
      a.forEach(function(l) {
        r[l] = o;
      });
    }
    return r;
  }), Ng = e(function(r, s, o) {
    var a = s[2];
    return r[o] = o, a.forEach(function(l) {
      r[l] = o;
    }), r;
  });
  var n = "far" in yi || Q.autoFetchSvg, i = ca(rO, function(r, s) {
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
  Og = i.names, Pg = i.unicodes, vc = Uo(Q.styleDefault, {
    family: Q.familyDefault
  });
};
zC(function(t) {
  vc = Uo(t.styleDefault, {
    family: Q.familyDefault
  });
});
Ig();
function _c(t, e) {
  return (Ag[t] || {})[e];
}
function cO(t, e) {
  return (Cg[t] || {})[e];
}
function Xn(t, e) {
  return (Ng[t] || {})[e];
}
function Lg(t) {
  return Og[t] || {
    prefix: null,
    iconName: null
  };
}
function uO(t) {
  var e = Pg[t], n = _c("fas", t);
  return e || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function In() {
  return vc;
}
var wc = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function Uo(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = e.family, i = n === void 0 ? Tt : n, r = xr[i][t], s = Sr[i][t] || Sr[i][r], o = t in Ie.styles ? t : null;
  return s || o || null;
}
var eh = (gs = {}, Ht(gs, Tt, Object.keys(kr[Tt])), Ht(gs, Lt, Object.keys(kr[Lt])), gs);
function qo(t) {
  var e, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.skipLookups, r = i === void 0 ? !1 : i, s = (e = {}, Ht(e, Tt, "".concat(Q.cssPrefix, "-").concat(Tt)), Ht(e, Lt, "".concat(Q.cssPrefix, "-").concat(Lt)), e), o = null, a = Tt;
  (t.includes(s[Tt]) || t.some(function(c) {
    return eh[Tt].includes(c);
  })) && (a = Tt), (t.includes(s[Lt]) || t.some(function(c) {
    return eh[Lt].includes(c);
  })) && (a = Lt);
  var l = t.reduce(function(c, u) {
    var f = lO(Q.cssPrefix, u);
    if (yi[u] ? (u = sO[a].includes(u) ? DC[a][u] : u, o = u, c.prefix = u) : oO[a].indexOf(u) > -1 ? (o = u, c.prefix = Uo(u, {
      family: a
    })) : f ? c.iconName = f : u !== Q.replacementClass && u !== s[Tt] && u !== s[Lt] && c.rest.push(u), !r && c.prefix && c.iconName) {
      var h = o === "fa" ? Lg(c.iconName) : {}, d = Xn(c.prefix, c.iconName);
      h.prefix && (o = null), c.iconName = h.iconName || d || c.iconName, c.prefix = h.prefix || c.prefix, c.prefix === "far" && !yi.far && yi.fas && !Q.autoFetchSvg && (c.prefix = "fas");
    }
    return c;
  }, wc());
  return (t.includes("fa-brands") || t.includes("fab")) && (l.prefix = "fab"), (t.includes("fa-duotone") || t.includes("fad")) && (l.prefix = "fad"), !l.prefix && a === Lt && (yi.fass || Q.autoFetchSvg) && (l.prefix = "fass", l.iconName = Xn(l.prefix, l.iconName) || l.iconName), (l.prefix === "fa" || o === "fa") && (l.prefix = In() || "fas"), l;
}
var fO = /* @__PURE__ */ function() {
  function t() {
    SC(this, t), this.definitions = {};
  }
  return EC(t, [{
    key: "add",
    value: function() {
      for (var n = this, i = arguments.length, r = new Array(i), s = 0; s < i; s++)
        r[s] = arguments[s];
      var o = r.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(a) {
        n.definitions[a] = K(K({}, n.definitions[a] || {}), o[a]), nl(a, o[a]);
        var l = kr[Tt][a];
        l && nl(l, o[a]), Ig();
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
}(), nh = [], bi = {}, Ei = {}, hO = Object.keys(Ei);
function dO(t, e) {
  var n = e.mixoutsTo;
  return nh = t, bi = {}, Object.keys(Ei).forEach(function(i) {
    hO.indexOf(i) === -1 && delete Ei[i];
  }), nh.forEach(function(i) {
    var r = i.mixout ? i.mixout() : {};
    if (Object.keys(r).forEach(function(o) {
      typeof r[o] == "function" && (n[o] = r[o]), lo(r[o]) === "object" && Object.keys(r[o]).forEach(function(a) {
        n[o] || (n[o] = {}), n[o][a] = r[o][a];
      });
    }), i.hooks) {
      var s = i.hooks();
      Object.keys(s).forEach(function(o) {
        bi[o] || (bi[o] = []), bi[o].push(s[o]);
      });
    }
    i.provides && i.provides(Ei);
  }), n;
}
function il(t, e) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++)
    i[r - 2] = arguments[r];
  var s = bi[t] || [];
  return s.forEach(function(o) {
    e = o.apply(null, [e].concat(i));
  }), e;
}
function si(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    n[i - 1] = arguments[i];
  var r = bi[t] || [];
  r.forEach(function(s) {
    s.apply(null, n);
  });
}
function fn() {
  var t = arguments[0], e = Array.prototype.slice.call(arguments, 1);
  return Ei[t] ? Ei[t].apply(null, e) : void 0;
}
function rl(t) {
  t.prefix === "fa" && (t.prefix = "fas");
  var e = t.iconName, n = t.prefix || In();
  if (e)
    return e = Xn(n, e) || e, Zf(Mg.definitions, n, e) || Zf(Ie.styles, n, e);
}
var Mg = new fO(), pO = function() {
  Q.autoReplaceSvg = !1, Q.observeMutations = !1, si("noAuto");
}, gO = {
  i2svg: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return pn ? (si("beforeI2svg", e), fn("pseudoElements2svg", e), fn("i2svg", e)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.autoReplaceSvgRoot;
    Q.autoReplaceSvg === !1 && (Q.autoReplaceSvg = !0), Q.observeMutations = !0, eO(function() {
      yO({
        autoReplaceSvgRoot: n
      }), si("watch", e);
    });
  }
}, mO = {
  icon: function(e) {
    if (e === null)
      return null;
    if (lo(e) === "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: Xn(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      var n = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], i = Uo(e[0]);
      return {
        prefix: i,
        iconName: Xn(i, n) || n
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(Q.cssPrefix, "-")) > -1 || e.match(FC))) {
      var r = qo(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: r.prefix || In(),
        iconName: Xn(r.prefix, r.iconName) || r.iconName
      };
    }
    if (typeof e == "string") {
      var s = In();
      return {
        prefix: s,
        iconName: Xn(s, e) || e
      };
    }
  }
}, ye = {
  noAuto: pO,
  config: Q,
  dom: gO,
  parse: mO,
  library: Mg,
  findIconDefinition: rl,
  toHtml: $r
}, yO = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.autoReplaceSvgRoot, i = n === void 0 ? At : n;
  (Object.keys(Ie.styles).length > 0 || Q.autoFetchSvg) && pn && Q.autoReplaceSvg && ye.dom.i2svg({
    node: i
  });
};
function Ho(t, e) {
  return Object.defineProperty(t, "abstract", {
    get: e
  }), Object.defineProperty(t, "html", {
    get: function() {
      return t.abstract.map(function(i) {
        return $r(i);
      });
    }
  }), Object.defineProperty(t, "node", {
    get: function() {
      if (pn) {
        var i = At.createElement("div");
        return i.innerHTML = t.html, i.children;
      }
    }
  }), t;
}
function bO(t) {
  var e = t.children, n = t.main, i = t.mask, r = t.attributes, s = t.styles, o = t.transform;
  if (bc(o) && n.found && !i.found) {
    var a = n.width, l = n.height, c = {
      x: a / l / 2,
      y: 0.5
    };
    r.style = Bo(K(K({}, s), {}, {
      "transform-origin": "".concat(c.x + o.x / 16, "em ").concat(c.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: r,
    children: e
  }];
}
function vO(t) {
  var e = t.prefix, n = t.iconName, i = t.children, r = t.attributes, s = t.symbol, o = s === !0 ? "".concat(e, "-").concat(Q.cssPrefix, "-").concat(n) : s;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: K(K({}, r), {}, {
        id: o
      }),
      children: i
    }]
  }];
}
function xc(t) {
  var e = t.icons, n = e.main, i = e.mask, r = t.prefix, s = t.iconName, o = t.transform, a = t.symbol, l = t.title, c = t.maskId, u = t.titleId, f = t.extra, h = t.watchable, d = h === void 0 ? !1 : h, p = i.found ? i : n, S = p.width, A = p.height, v = r === "fak", _ = [Q.replacementClass, s ? "".concat(Q.cssPrefix, "-").concat(s) : ""].filter(function($) {
    return f.classes.indexOf($) === -1;
  }).filter(function($) {
    return $ !== "" || !!$;
  }).concat(f.classes).join(" "), b = {
    children: [],
    attributes: K(K({}, f.attributes), {}, {
      "data-prefix": r,
      "data-icon": s,
      class: _,
      role: f.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(S, " ").concat(A)
    })
  }, w = v && !~f.classes.indexOf("fa-fw") ? {
    width: "".concat(S / A * 16 * 0.0625, "em")
  } : {};
  d && (b.attributes[ri] = ""), l && (b.children.push({
    tag: "title",
    attributes: {
      id: b.attributes["aria-labelledby"] || "title-".concat(u || Tr())
    },
    children: [l]
  }), delete b.attributes.title);
  var E = K(K({}, b), {}, {
    prefix: r,
    iconName: s,
    main: n,
    mask: i,
    maskId: c,
    transform: o,
    symbol: a,
    styles: K(K({}, w), f.styles)
  }), C = i.found && n.found ? fn("generateAbstractMask", E) || {
    children: [],
    attributes: {}
  } : fn("generateAbstractIcon", E) || {
    children: [],
    attributes: {}
  }, N = C.children, F = C.attributes;
  return E.children = N, E.attributes = F, a ? vO(E) : bO(E);
}
function ih(t) {
  var e = t.content, n = t.width, i = t.height, r = t.transform, s = t.title, o = t.extra, a = t.watchable, l = a === void 0 ? !1 : a, c = K(K(K({}, o.attributes), s ? {
    title: s
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  l && (c[ri] = "");
  var u = K({}, o.styles);
  bc(r) && (u.transform = JC({
    transform: r,
    startCentered: !0,
    width: n,
    height: i
  }), u["-webkit-transform"] = u.transform);
  var f = Bo(u);
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
function _O(t) {
  var e = t.content, n = t.title, i = t.extra, r = K(K(K({}, i.attributes), n ? {
    title: n
  } : {}), {}, {
    class: i.classes.join(" ")
  }), s = Bo(i.styles);
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
var ua = Ie.styles;
function sl(t) {
  var e = t[0], n = t[1], i = t.slice(4), r = hc(i, 1), s = r[0], o = null;
  return Array.isArray(s) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(Q.cssPrefix, "-").concat(Kn.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(Q.cssPrefix, "-").concat(Kn.SECONDARY),
        fill: "currentColor",
        d: s[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(Q.cssPrefix, "-").concat(Kn.PRIMARY),
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
var wO = {
  found: !1,
  width: 512,
  height: 512
};
function xO(t, e) {
  !_g && !Q.showMissingIcons && t && console.error('Icon with name "'.concat(t, '" and prefix "').concat(e, '" is missing.'));
}
function ol(t, e) {
  var n = e;
  return e === "fa" && Q.styleDefault !== null && (e = In()), new Promise(function(i, r) {
    if (fn("missingIconAbstract"), n === "fa") {
      var s = Lg(t) || {};
      t = s.iconName || t, e = s.prefix || e;
    }
    if (t && e && ua[e] && ua[e][t]) {
      var o = ua[e][t];
      return i(sl(o));
    }
    xO(t, e), i(K(K({}, wO), {}, {
      icon: Q.showMissingIcons && t ? fn("missingIconAbstract") || {} : {}
    }));
  });
}
var rh = function() {
}, al = Q.measurePerformance && as && as.mark && as.measure ? as : {
  mark: rh,
  measure: rh
}, tr = 'FA "6.5.2"', SO = function(e) {
  return al.mark("".concat(tr, " ").concat(e, " begins")), function() {
    return Rg(e);
  };
}, Rg = function(e) {
  al.mark("".concat(tr, " ").concat(e, " ends")), al.measure("".concat(tr, " ").concat(e), "".concat(tr, " ").concat(e, " begins"), "".concat(tr, " ").concat(e, " ends"));
}, Sc = {
  begin: SO,
  end: Rg
}, Is = function() {
};
function sh(t) {
  var e = t.getAttribute ? t.getAttribute(ri) : null;
  return typeof e == "string";
}
function kO(t) {
  var e = t.getAttribute ? t.getAttribute(pc) : null, n = t.getAttribute ? t.getAttribute(gc) : null;
  return e && n;
}
function EO(t) {
  return t && t.classList && t.classList.contains && t.classList.contains(Q.replacementClass);
}
function TO() {
  if (Q.autoReplaceSvg === !0)
    return Ls.replace;
  var t = Ls[Q.autoReplaceSvg];
  return t || Ls.replace;
}
function AO(t) {
  return At.createElementNS("http://www.w3.org/2000/svg", t);
}
function CO(t) {
  return At.createElement(t);
}
function Dg(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = e.ceFn, i = n === void 0 ? t.tag === "svg" ? AO : CO : n;
  if (typeof t == "string")
    return At.createTextNode(t);
  var r = i(t.tag);
  Object.keys(t.attributes || []).forEach(function(o) {
    r.setAttribute(o, t.attributes[o]);
  });
  var s = t.children || [];
  return s.forEach(function(o) {
    r.appendChild(Dg(o, {
      ceFn: i
    }));
  }), r;
}
function OO(t) {
  var e = " ".concat(t.outerHTML, " ");
  return e = "".concat(e, "Font Awesome fontawesome.com "), e;
}
var Ls = {
  replace: function(e) {
    var n = e[0];
    if (n.parentNode)
      if (e[1].forEach(function(r) {
        n.parentNode.insertBefore(Dg(r), n);
      }), n.getAttribute(ri) === null && Q.keepOriginalSource) {
        var i = At.createComment(OO(n));
        n.parentNode.replaceChild(i, n);
      } else
        n.remove();
  },
  nest: function(e) {
    var n = e[0], i = e[1];
    if (~yc(n).indexOf(Q.replacementClass))
      return Ls.replace(e);
    var r = new RegExp("".concat(Q.cssPrefix, "-.*"));
    if (delete i[0].attributes.id, i[0].attributes.class) {
      var s = i[0].attributes.class.split(" ").reduce(function(a, l) {
        return l === Q.replacementClass || l.match(r) ? a.toSvg.push(l) : a.toNode.push(l), a;
      }, {
        toNode: [],
        toSvg: []
      });
      i[0].attributes.class = s.toSvg.join(" "), s.toNode.length === 0 ? n.removeAttribute("class") : n.setAttribute("class", s.toNode.join(" "));
    }
    var o = i.map(function(a) {
      return $r(a);
    }).join(`
`);
    n.setAttribute(ri, ""), n.innerHTML = o;
  }
};
function oh(t) {
  t();
}
function Fg(t, e) {
  var n = typeof e == "function" ? e : Is;
  if (t.length === 0)
    n();
  else {
    var i = oh;
    Q.mutateApproach === MC && (i = Nn.requestAnimationFrame || oh), i(function() {
      var r = TO(), s = Sc.begin("mutate");
      t.map(r), s(), n();
    });
  }
}
var kc = !1;
function $g() {
  kc = !0;
}
function ll() {
  kc = !1;
}
var uo = null;
function ah(t) {
  if (Xf && Q.observeMutations) {
    var e = t.treeCallback, n = e === void 0 ? Is : e, i = t.nodeCallback, r = i === void 0 ? Is : i, s = t.pseudoElementsCallback, o = s === void 0 ? Is : s, a = t.observeMutationsRoot, l = a === void 0 ? At : a;
    uo = new Xf(function(c) {
      if (!kc) {
        var u = In();
        Vi(c).forEach(function(f) {
          if (f.type === "childList" && f.addedNodes.length > 0 && !sh(f.addedNodes[0]) && (Q.searchPseudoElements && o(f.target), n(f.target)), f.type === "attributes" && f.target.parentNode && Q.searchPseudoElements && o(f.target.parentNode), f.type === "attributes" && sh(f.target) && ~qC.indexOf(f.attributeName))
            if (f.attributeName === "class" && kO(f.target)) {
              var h = qo(yc(f.target)), d = h.prefix, p = h.iconName;
              f.target.setAttribute(pc, d || u), p && f.target.setAttribute(gc, p);
            } else
              EO(f.target) && r(f.target);
        });
      }
    }), pn && uo.observe(l, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function PO() {
  uo && uo.disconnect();
}
function NO(t) {
  var e = t.getAttribute("style"), n = [];
  return e && (n = e.split(";").reduce(function(i, r) {
    var s = r.split(":"), o = s[0], a = s.slice(1);
    return o && a.length > 0 && (i[o] = a.join(":").trim()), i;
  }, {})), n;
}
function IO(t) {
  var e = t.getAttribute("data-prefix"), n = t.getAttribute("data-icon"), i = t.innerText !== void 0 ? t.innerText.trim() : "", r = qo(yc(t));
  return r.prefix || (r.prefix = In()), e && n && (r.prefix = e, r.iconName = n), r.iconName && r.prefix || (r.prefix && i.length > 0 && (r.iconName = cO(r.prefix, t.innerText) || _c(r.prefix, el(t.innerText))), !r.iconName && Q.autoFetchSvg && t.firstChild && t.firstChild.nodeType === Node.TEXT_NODE && (r.iconName = t.firstChild.data)), r;
}
function LO(t) {
  var e = Vi(t.attributes).reduce(function(r, s) {
    return r.name !== "class" && r.name !== "style" && (r[s.name] = s.value), r;
  }, {}), n = t.getAttribute("title"), i = t.getAttribute("data-fa-title-id");
  return Q.autoA11y && (n ? e["aria-labelledby"] = "".concat(Q.replacementClass, "-title-").concat(i || Tr()) : (e["aria-hidden"] = "true", e.focusable = "false")), e;
}
function MO() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: je,
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
function lh(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, n = IO(t), i = n.iconName, r = n.prefix, s = n.rest, o = LO(t), a = il("parseNodeAttributes", {}, t), l = e.styleParser ? NO(t) : [];
  return K({
    iconName: i,
    title: t.getAttribute("title"),
    titleId: t.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: je,
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
var RO = Ie.styles;
function Bg(t) {
  var e = Q.autoReplaceSvg === "nest" ? lh(t, {
    styleParser: !1
  }) : lh(t);
  return ~e.extra.classes.indexOf(wg) ? fn("generateLayersText", t, e) : fn("generateSvgReplacementMutation", t, e);
}
var Ln = /* @__PURE__ */ new Set();
mc.map(function(t) {
  Ln.add("fa-".concat(t));
});
Object.keys(xr[Tt]).map(Ln.add.bind(Ln));
Object.keys(xr[Lt]).map(Ln.add.bind(Ln));
Ln = Dr(Ln);
function ch(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!pn)
    return Promise.resolve();
  var n = At.documentElement.classList, i = function(f) {
    return n.add("".concat(Jf, "-").concat(f));
  }, r = function(f) {
    return n.remove("".concat(Jf, "-").concat(f));
  }, s = Q.autoFetchSvg ? Ln : mc.map(function(u) {
    return "fa-".concat(u);
  }).concat(Object.keys(RO));
  s.includes("fa") || s.push("fa");
  var o = [".".concat(wg, ":not([").concat(ri, "])")].concat(s.map(function(u) {
    return ".".concat(u, ":not([").concat(ri, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var a = [];
  try {
    a = Vi(t.querySelectorAll(o));
  } catch {
  }
  if (a.length > 0)
    i("pending"), r("complete");
  else
    return Promise.resolve();
  var l = Sc.begin("onTree"), c = a.reduce(function(u, f) {
    try {
      var h = Bg(f);
      h && u.push(h);
    } catch (d) {
      _g || d.name === "MissingIcon" && console.error(d);
    }
    return u;
  }, []);
  return new Promise(function(u, f) {
    Promise.all(c).then(function(h) {
      Fg(h, function() {
        i("active"), i("complete"), r("pending"), typeof e == "function" && e(), l(), u();
      });
    }).catch(function(h) {
      l(), f(h);
    });
  });
}
function DO(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Bg(t).then(function(n) {
    n && Fg([n], e);
  });
}
function FO(t) {
  return function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = (e || {}).icon ? e : rl(e || {}), r = n.mask;
    return r && (r = (r || {}).icon ? r : rl(r || {})), t(i, K(K({}, n), {}, {
      mask: r
    }));
  };
}
var $O = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.transform, r = i === void 0 ? je : i, s = n.symbol, o = s === void 0 ? !1 : s, a = n.mask, l = a === void 0 ? null : a, c = n.maskId, u = c === void 0 ? null : c, f = n.title, h = f === void 0 ? null : f, d = n.titleId, p = d === void 0 ? null : d, S = n.classes, A = S === void 0 ? [] : S, v = n.attributes, _ = v === void 0 ? {} : v, b = n.styles, w = b === void 0 ? {} : b;
  if (e) {
    var E = e.prefix, C = e.iconName, N = e.icon;
    return Ho(K({
      type: "icon"
    }, e), function() {
      return si("beforeDOMElementCreation", {
        iconDefinition: e,
        params: n
      }), Q.autoA11y && (h ? _["aria-labelledby"] = "".concat(Q.replacementClass, "-title-").concat(p || Tr()) : (_["aria-hidden"] = "true", _.focusable = "false")), xc({
        icons: {
          main: sl(N),
          mask: l ? sl(l.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: E,
        iconName: C,
        transform: K(K({}, je), r),
        symbol: o,
        title: h,
        maskId: u,
        titleId: p,
        extra: {
          attributes: _,
          styles: w,
          classes: A
        }
      });
    });
  }
}, BO = {
  mixout: function() {
    return {
      icon: FO($O)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.treeCallback = ch, n.nodeCallback = DO, n;
      }
    };
  },
  provides: function(e) {
    e.i2svg = function(n) {
      var i = n.node, r = i === void 0 ? At : i, s = n.callback, o = s === void 0 ? function() {
      } : s;
      return ch(r, o);
    }, e.generateSvgReplacementMutation = function(n, i) {
      var r = i.iconName, s = i.title, o = i.titleId, a = i.prefix, l = i.transform, c = i.symbol, u = i.mask, f = i.maskId, h = i.extra;
      return new Promise(function(d, p) {
        Promise.all([ol(r, a), u.iconName ? ol(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(S) {
          var A = hc(S, 2), v = A[0], _ = A[1];
          d([n, xc({
            icons: {
              main: v,
              mask: _
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
        }).catch(p);
      });
    }, e.generateAbstractIcon = function(n) {
      var i = n.children, r = n.attributes, s = n.main, o = n.transform, a = n.styles, l = Bo(a);
      l.length > 0 && (r.style = l);
      var c;
      return bc(o) && (c = fn("generateAbstractTransformGrouping", {
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
}, UO = {
  mixout: function() {
    return {
      layer: function(n) {
        var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = i.classes, s = r === void 0 ? [] : r;
        return Ho({
          type: "layer"
        }, function() {
          si("beforeDOMElementCreation", {
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
              class: ["".concat(Q.cssPrefix, "-layers")].concat(Dr(s)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, qO = {
  mixout: function() {
    return {
      counter: function(n) {
        var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = i.title, s = r === void 0 ? null : r, o = i.classes, a = o === void 0 ? [] : o, l = i.attributes, c = l === void 0 ? {} : l, u = i.styles, f = u === void 0 ? {} : u;
        return Ho({
          type: "counter",
          content: n
        }, function() {
          return si("beforeDOMElementCreation", {
            content: n,
            params: i
          }), _O({
            content: n.toString(),
            title: s,
            extra: {
              attributes: c,
              styles: f,
              classes: ["".concat(Q.cssPrefix, "-layers-counter")].concat(Dr(a))
            }
          });
        });
      }
    };
  }
}, HO = {
  mixout: function() {
    return {
      text: function(n) {
        var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = i.transform, s = r === void 0 ? je : r, o = i.title, a = o === void 0 ? null : o, l = i.classes, c = l === void 0 ? [] : l, u = i.attributes, f = u === void 0 ? {} : u, h = i.styles, d = h === void 0 ? {} : h;
        return Ho({
          type: "text",
          content: n
        }, function() {
          return si("beforeDOMElementCreation", {
            content: n,
            params: i
          }), ih({
            content: n,
            transform: K(K({}, je), s),
            title: a,
            extra: {
              attributes: f,
              styles: d,
              classes: ["".concat(Q.cssPrefix, "-layers-text")].concat(Dr(c))
            }
          });
        });
      }
    };
  },
  provides: function(e) {
    e.generateLayersText = function(n, i) {
      var r = i.title, s = i.transform, o = i.extra, a = null, l = null;
      if (yg) {
        var c = parseInt(getComputedStyle(n).fontSize, 10), u = n.getBoundingClientRect();
        a = u.width / c, l = u.height / c;
      }
      return Q.autoA11y && !r && (o.attributes["aria-hidden"] = "true"), Promise.resolve([n, ih({
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
}, WO = new RegExp('"', "ug"), uh = [1105920, 1112319];
function VO(t) {
  var e = t.replace(WO, ""), n = iO(e, 0), i = n >= uh[0] && n <= uh[1], r = e.length === 2 ? e[0] === e[1] : !1;
  return {
    value: el(r ? e[0] : e),
    isSecondary: i || r
  };
}
function fh(t, e) {
  var n = "".concat(LC).concat(e.replace(":", "-"));
  return new Promise(function(i, r) {
    if (t.getAttribute(n) !== null)
      return i();
    var s = Vi(t.children), o = s.filter(function(N) {
      return N.getAttribute(tl) === e;
    })[0], a = Nn.getComputedStyle(t, e), l = a.getPropertyValue("font-family").match($C), c = a.getPropertyValue("font-weight"), u = a.getPropertyValue("content");
    if (o && !l)
      return t.removeChild(o), i();
    if (l && u !== "none" && u !== "") {
      var f = a.getPropertyValue("content"), h = ~["Sharp"].indexOf(l[2]) ? Lt : Tt, d = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(l[2]) ? Sr[h][l[2].toLowerCase()] : BC[h][c], p = VO(f), S = p.value, A = p.isSecondary, v = l[0].startsWith("FontAwesome"), _ = _c(d, S), b = _;
      if (v) {
        var w = uO(S);
        w.iconName && w.prefix && (_ = w.iconName, d = w.prefix);
      }
      if (_ && !A && (!o || o.getAttribute(pc) !== d || o.getAttribute(gc) !== b)) {
        t.setAttribute(n, b), o && t.removeChild(o);
        var E = MO(), C = E.extra;
        C.attributes[tl] = e, ol(_, d).then(function(N) {
          var F = xc(K(K({}, E), {}, {
            icons: {
              main: N,
              mask: wc()
            },
            prefix: d,
            iconName: b,
            extra: C,
            watchable: !0
          })), $ = At.createElementNS("http://www.w3.org/2000/svg", "svg");
          e === "::before" ? t.insertBefore($, t.firstChild) : t.appendChild($), $.outerHTML = F.map(function(V) {
            return $r(V);
          }).join(`
`), t.removeAttribute(n), i();
        }).catch(r);
      } else
        i();
    } else
      i();
  });
}
function jO(t) {
  return Promise.all([fh(t, "::before"), fh(t, "::after")]);
}
function zO(t) {
  return t.parentNode !== document.head && !~RC.indexOf(t.tagName.toUpperCase()) && !t.getAttribute(tl) && (!t.parentNode || t.parentNode.tagName !== "svg");
}
function hh(t) {
  if (pn)
    return new Promise(function(e, n) {
      var i = Vi(t.querySelectorAll("*")).filter(zO).map(jO), r = Sc.begin("searchPseudoElements");
      $g(), Promise.all(i).then(function() {
        r(), ll(), e();
      }).catch(function() {
        r(), ll(), n();
      });
    });
}
var GO = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.pseudoElementsCallback = hh, n;
      }
    };
  },
  provides: function(e) {
    e.pseudoElements2svg = function(n) {
      var i = n.node, r = i === void 0 ? At : i;
      Q.searchPseudoElements && hh(r);
    };
  }
}, dh = !1, YO = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          $g(), dh = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        ah(il("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        PO();
      },
      watch: function(n) {
        var i = n.observeMutationsRoot;
        dh ? ll() : ah(il("mutationObserverCallbacks", {
          observeMutationsRoot: i
        }));
      }
    };
  }
}, ph = function(e) {
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
}, KO = {
  mixout: function() {
    return {
      parse: {
        transform: function(n) {
          return ph(n);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(n, i) {
        var r = i.getAttribute("data-fa-transform");
        return r && (n.transform = ph(r)), n;
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
        attributes: K({}, d.outer),
        children: [{
          tag: "g",
          attributes: K({}, d.inner),
          children: [{
            tag: i.icon.tag,
            children: i.icon.children,
            attributes: K(K({}, i.icon.attributes), d.path)
          }]
        }]
      };
    };
  }
}, fa = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function gh(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return t.attributes && (t.attributes.fill || e) && (t.attributes.fill = "black"), t;
}
function XO(t) {
  return t.tag === "g" ? t.children : [t];
}
var JO = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, i) {
        var r = i.getAttribute("data-fa-mask"), s = r ? qo(r.split(" ").map(function(o) {
          return o.trim();
        })) : wc();
        return s.prefix || (s.prefix = In()), n.mask = s, n.maskId = i.getAttribute("data-fa-mask-id"), n;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractMask = function(n) {
      var i = n.children, r = n.attributes, s = n.main, o = n.mask, a = n.maskId, l = n.transform, c = s.width, u = s.icon, f = o.width, h = o.icon, d = XC({
        transform: l,
        containerWidth: f,
        iconWidth: c
      }), p = {
        tag: "rect",
        attributes: K(K({}, fa), {}, {
          fill: "white"
        })
      }, S = u.children ? {
        children: u.children.map(gh)
      } : {}, A = {
        tag: "g",
        attributes: K({}, d.inner),
        children: [gh(K({
          tag: u.tag,
          attributes: K(K({}, u.attributes), d.path)
        }, S))]
      }, v = {
        tag: "g",
        attributes: K({}, d.outer),
        children: [A]
      }, _ = "mask-".concat(a || Tr()), b = "clip-".concat(a || Tr()), w = {
        tag: "mask",
        attributes: K(K({}, fa), {}, {
          id: _,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [p, v]
      }, E = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: b
          },
          children: XO(h)
        }, w]
      };
      return i.push(E, {
        tag: "rect",
        attributes: K({
          fill: "currentColor",
          "clip-path": "url(#".concat(b, ")"),
          mask: "url(#".concat(_, ")")
        }, fa)
      }), {
        children: i,
        attributes: r
      };
    };
  }
}, QO = {
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
        attributes: K(K({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var o = K(K({}, s), {}, {
        attributeName: "opacity"
      }), a = {
        tag: "circle",
        attributes: K(K({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return n || a.children.push({
        tag: "animate",
        attributes: K(K({}, s), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: K(K({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), i.push(a), i.push({
        tag: "path",
        attributes: K(K({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: n ? [] : [{
          tag: "animate",
          attributes: K(K({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), n || i.push({
        tag: "path",
        attributes: K(K({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: K(K({}, o), {}, {
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
}, ZO = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, i) {
        var r = i.getAttribute("data-fa-symbol"), s = r === null ? !1 : r === "" ? !0 : r;
        return n.symbol = s, n;
      }
    };
  }
}, tP = [ZC, BO, UO, qO, HO, GO, YO, KO, JO, QO, ZO];
dO(tP, {
  mixoutsTo: ye
});
ye.noAuto;
ye.config;
var eP = ye.library;
ye.dom;
var cl = ye.parse;
ye.findIconDefinition;
ye.toHtml;
var nP = ye.icon;
ye.layer;
ye.text;
ye.counter;
function mh(t, e) {
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
    e % 2 ? mh(Object(n), !0).forEach(function(i) {
      oe(t, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : mh(Object(n)).forEach(function(i) {
      Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return t;
}
function fo(t) {
  "@babel/helpers - typeof";
  return fo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, fo(t);
}
function oe(t, e, n) {
  return e = oP(e), e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function iP(t, e) {
  if (t == null)
    return {};
  var n = {}, i = Object.keys(t), r, s;
  for (s = 0; s < i.length; s++)
    r = i[s], !(e.indexOf(r) >= 0) && (n[r] = t[r]);
  return n;
}
function rP(t, e) {
  if (t == null)
    return {};
  var n = iP(t, e), i, r;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (r = 0; r < s.length; r++)
      i = s[r], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(t, i) && (n[i] = t[i]);
  }
  return n;
}
function sP(t, e) {
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
function oP(t) {
  var e = sP(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
var aP = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ug = { exports: {} };
(function(t) {
  (function(e) {
    var n = function(v, _, b) {
      if (!c(_) || f(_) || h(_) || d(_) || l(_))
        return _;
      var w, E = 0, C = 0;
      if (u(_))
        for (w = [], C = _.length; E < C; E++)
          w.push(n(v, _[E], b));
      else {
        w = {};
        for (var N in _)
          Object.prototype.hasOwnProperty.call(_, N) && (w[v(N, b)] = n(v, _[N], b));
      }
      return w;
    }, i = function(v, _) {
      _ = _ || {};
      var b = _.separator || "_", w = _.split || /(?=[A-Z])/;
      return v.split(w).join(b);
    }, r = function(v) {
      return p(v) ? v : (v = v.replace(/[\-_\s]+(.)?/g, function(_, b) {
        return b ? b.toUpperCase() : "";
      }), v.substr(0, 1).toLowerCase() + v.substr(1));
    }, s = function(v) {
      var _ = r(v);
      return _.substr(0, 1).toUpperCase() + _.substr(1);
    }, o = function(v, _) {
      return i(v, _).toLowerCase();
    }, a = Object.prototype.toString, l = function(v) {
      return typeof v == "function";
    }, c = function(v) {
      return v === Object(v);
    }, u = function(v) {
      return a.call(v) == "[object Array]";
    }, f = function(v) {
      return a.call(v) == "[object Date]";
    }, h = function(v) {
      return a.call(v) == "[object RegExp]";
    }, d = function(v) {
      return a.call(v) == "[object Boolean]";
    }, p = function(v) {
      return v = v - 0, v === v;
    }, S = function(v, _) {
      var b = _ && "process" in _ ? _.process : _;
      return typeof b != "function" ? v : function(w, E) {
        return b(w, v, E);
      };
    }, A = {
      camelize: r,
      decamelize: o,
      pascalize: s,
      depascalize: o,
      camelizeKeys: function(v, _) {
        return n(S(r, _), v);
      },
      decamelizeKeys: function(v, _) {
        return n(S(o, _), v, _);
      },
      pascalizeKeys: function(v, _) {
        return n(S(s, _), v);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    t.exports ? t.exports = A : e.humps = A;
  })(aP);
})(Ug);
var lP = Ug.exports, cP = ["class", "style"];
function uP(t) {
  return t.split(";").map(function(e) {
    return e.trim();
  }).filter(function(e) {
    return e;
  }).reduce(function(e, n) {
    var i = n.indexOf(":"), r = lP.camelize(n.slice(0, i)), s = n.slice(i + 1).trim();
    return e[r] = s, e;
  }, {});
}
function fP(t) {
  return t.split(/\s+/).reduce(function(e, n) {
    return e[n] = !0, e;
  }, {});
}
function qg(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var i = (t.children || []).map(function(l) {
    return qg(l);
  }), r = Object.keys(t.attributes || {}).reduce(function(l, c) {
    var u = t.attributes[c];
    switch (c) {
      case "class":
        l.class = fP(u);
        break;
      case "style":
        l.style = uP(u);
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
  var s = n.style, o = s === void 0 ? {} : s, a = rP(n, cP);
  return Il(t.tag, nn(nn(nn({}, e), {}, {
    class: r.class,
    style: nn(nn({}, r.style), o)
  }, r.attrs), a), i);
}
var Hg = !1;
try {
  Hg = !0;
} catch {
}
function hP() {
  if (!Hg && console && typeof console.error == "function") {
    var t;
    (t = console).error.apply(t, arguments);
  }
}
function ha(t, e) {
  return Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e ? oe({}, t, e) : {};
}
function dP(t) {
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
  }, oe(e, "fa-".concat(t.size), t.size !== null), oe(e, "fa-rotate-".concat(t.rotation), t.rotation !== null), oe(e, "fa-pull-".concat(t.pull), t.pull !== null), oe(e, "fa-swap-opacity", t.swapOpacity), oe(e, "fa-bounce", t.bounce), oe(e, "fa-shake", t.shake), oe(e, "fa-beat", t.beat), oe(e, "fa-fade", t.fade), oe(e, "fa-beat-fade", t.beatFade), oe(e, "fa-flash", t.flash), oe(e, "fa-spin-pulse", t.spinPulse), oe(e, "fa-spin-reverse", t.spinReverse), e);
  return Object.keys(n).map(function(i) {
    return n[i] ? i : null;
  }).filter(function(i) {
    return i;
  });
}
function yh(t) {
  if (t && fo(t) === "object" && t.prefix && t.iconName && t.icon)
    return t;
  if (cl.icon)
    return cl.icon(t);
  if (t === null)
    return null;
  if (fo(t) === "object" && t.prefix && t.iconName)
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
var pP = /* @__PURE__ */ oi({
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
    var i = n.attrs, r = ve(function() {
      return yh(e.icon);
    }), s = ve(function() {
      return ha("classes", dP(e));
    }), o = ve(function() {
      return ha("transform", typeof e.transform == "string" ? cl.transform(e.transform) : e.transform);
    }), a = ve(function() {
      return ha("mask", yh(e.mask));
    }), l = ve(function() {
      return nP(r.value, nn(nn(nn(nn({}, s.value), o.value), a.value), {}, {
        symbol: e.symbol,
        title: e.title,
        titleId: e.titleId,
        maskId: e.maskId
      }));
    });
    on(l, function(u) {
      if (!u)
        return hP("Could not find one or more icon(s)", r.value, a.value);
    }, {
      immediate: !0
    });
    var c = ve(function() {
      return l.value ? qg(l.value.abstract[0], {}, i) : null;
    });
    return function() {
      return c.value;
    };
  }
}), gP = {
  prefix: "fasr",
  iconName: "arrows-left-right",
  icon: [512, 512, ["arrows-h"], "f07e", "M493.8 273l17-17-17-17-96-96-17-17L346.9 160l17 17 55 55L93.1 232l55-55 17-17-33.9-33.9-17 17-96 96-17 17 17 17 96 96 17 17L165.1 352l-17-17-55-55 325.7 0-55 55-17 17 33.9 33.9 17-17 96-96z"]
}, mP = {
  prefix: "fasr",
  iconName: "plus-large",
  icon: [512, 512, [], "e59e", "M488 232l24 0 0 48-24 0-208 0V488l0 24H232l0-24 0-208L24 280 0 280V232l24 0 208 0 0-208 0-24 48 0V24l0 208 208 0z"]
}, yP = {
  prefix: "fasr",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M136 32h24V80H136 48v88 24H0V168 56 32H24 136zM0 344V320H48v24 88h88 24v48H136 24 0V456 344zM424 32h24V56 168v24H400V168 80H312 288V32h24H424zM400 344V320h48v24V456v24H424 312 288V432h24 88V344z"]
}, bP = {
  prefix: "fasr",
  iconName: "arrows-up-down",
  icon: [320, 512, ["arrows-v"], "f07d", "M177 18.2l-17-17-17 17-96 96-17 17L64 165.1l17-17 55-55V418.9l-55-55-17-17L30.1 380.8l17 17 96 96 17 17 17-17 96-96 17-17L256 346.9l-17 17-55 55V93.1l55 55 17 17 33.9-33.9-17-17-96-96z"]
}, vP = {
  prefix: "fass",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z"]
}, _P = {
  prefix: "fass",
  iconName: "calculator",
  icon: [384, 512, [128425], "f1ec", "M384 0H0V512H384V0zM320 64v96H64V64H320zM64 192h64v64H64V192zm64 96v64H64V288h64zM64 384H224v64H64V384zM224 192v64H160V192h64zm-64 96h64v64H160V288zm160-96v64H256V192h64zm-64 96h64v64H256V288zm64 96v64H256V384h64z"]
}, wP = {
  prefix: "fass",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M326.6 166.6L349.3 144 304 98.7l-22.6 22.6L192 210.7l-89.4-89.4L80 98.7 34.7 144l22.6 22.6L146.7 256 57.4 345.4 34.7 368 80 413.3l22.6-22.6L192 301.3l89.4 89.4L304 413.3 349.3 368l-22.6-22.6L237.3 256l89.4-89.4z"]
}, xP = {
  prefix: "fass",
  iconName: "hammer",
  icon: [576, 512, [128296], "f6e3", "M225.6 18.2L176 48l96 48v48L384 256l24-24 24 24-24 24 48 48L576 208l-48-48-24 24-24-24 24-24L405.5 37.5C381.5 13.5 348.9 0 315 0H291.5c-23.2 0-46 6.3-65.9 18.2zM0 416l96 96L330.7 248 264 181.3 0 416z"]
};
eP.add(
  wP,
  yP,
  gP,
  bP,
  xP,
  vP,
  mP,
  _P
);
const SP = ov({
  locale: "en_US",
  fallbackLocale: "en_US",
  messages: vv
}), bh = document.querySelector("#smartcut-app"), kP = bh ? bh.getAttribute("data-type") : "", Ec = db(xC, { type: kP });
Ec.use(SP);
Ec.component("font-awesome-icon", pP);
Ec.mount("#smartcut-app");
export {
  xs as A,
  _d as B,
  gC as C,
  lu as D,
  TP as E,
  $t as F,
  Ao as G,
  yw as H,
  Bv as I,
  $v as J,
  jf as K,
  ci as _,
  U as a,
  NP as b,
  Si as c,
  lt as d,
  IP as e,
  ao as f,
  CP as g,
  OP as h,
  IT as i,
  PP as j,
  et as k,
  Y as l,
  Uh as m,
  gt as n,
  Z as o,
  ut as p,
  ln as q,
  vn as r,
  LT as s,
  mt as t,
  _n as u,
  P as v,
  tn as w,
  Us as x,
  Ft as y,
  ob as z
};

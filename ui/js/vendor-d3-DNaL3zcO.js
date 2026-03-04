function Nt(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Ie(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function ne(t) {
  let n, e, r;
  t.length !== 2 ? (n = Nt, e = (u, f) => Nt(t(u), f), r = (u, f) => t(u) - f) : (n = t === Nt || t === Ie ? t : qe, e = t, r = t);
  function i(u, f, s = 0, l = u.length) {
    if (s < l) {
      if (n(f, f) !== 0) return l;
      do {
        const h = s + l >>> 1;
        e(u[h], f) < 0 ? s = h + 1 : l = h;
      } while (s < l);
    }
    return s;
  }
  function o(u, f, s = 0, l = u.length) {
    if (s < l) {
      if (n(f, f) !== 0) return l;
      do {
        const h = s + l >>> 1;
        e(u[h], f) <= 0 ? s = h + 1 : l = h;
      } while (s < l);
    }
    return s;
  }
  function a(u, f, s = 0, l = u.length) {
    const h = i(u, f, s, l - 1);
    return h > s && r(u[h - 1], f) > -r(u[h], f) ? h - 1 : h;
  }
  return { left: i, center: a, right: o };
}
function qe() {
  return 0;
}
function He(t) {
  return t === null ? NaN : +t;
}
const De = ne(Nt), Le = De.right;
ne(He).center;
const Xe = Math.sqrt(50), Oe = Math.sqrt(10), Ve = Math.sqrt(2);
function Pt(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= Xe ? 10 : o >= Oe ? 5 : o >= Ve ? 2 : 1;
  let u, f, s;
  return i < 0 ? (s = Math.pow(10, -i) / a, u = Math.round(t * s), f = Math.round(n * s), u / s < t && ++u, f / s > n && --f, s = -s) : (s = Math.pow(10, i) * a, u = Math.round(t / s), f = Math.round(n / s), u * s < t && ++u, f * s > n && --f), f < u && 0.5 <= e && e < 2 ? Pt(t, n, e * 2) : [u, f, s];
}
function ze(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, o, a] = r ? Pt(n, t, e) : Pt(t, n, e);
  if (!(o >= i)) return [];
  const u = o - i + 1, f = new Array(u);
  if (r)
    if (a < 0) for (let s = 0; s < u; ++s) f[s] = (o - s) / -a;
    else for (let s = 0; s < u; ++s) f[s] = (o - s) * a;
  else if (a < 0) for (let s = 0; s < u; ++s) f[s] = (i + s) / -a;
  else for (let s = 0; s < u; ++s) f[s] = (i + s) * a;
  return f;
}
function un(t, n, e) {
  return n = +n, t = +t, e = +e, Pt(t, n, e)[2];
}
function Ye(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? un(n, t, e) : un(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Be(t) {
  return t;
}
var St = 1, Et = 2, sn = 3, ct = 4, Rn = 1e-6;
function Ue(t) {
  return "translate(" + t + ",0)";
}
function Ge(t) {
  return "translate(0," + t + ")";
}
function Ke(t) {
  return (n) => +t(n);
}
function Ze(t, n) {
  return n = Math.max(0, t.bandwidth() - n * 2) / 2, t.round() && (n = Math.round(n)), (e) => +t(e) + n;
}
function Qe() {
  return !this.__axis;
}
function Bt(t, n) {
  var e = [], r = null, i = null, o = 6, a = 6, u = 3, f = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, s = t === St || t === ct ? -1 : 1, l = t === ct || t === Et ? "x" : "y", h = t === St || t === sn ? Ue : Ge;
  function c(d) {
    var m = r ?? (n.ticks ? n.ticks.apply(n, e) : n.domain()), y = i ?? (n.tickFormat ? n.tickFormat.apply(n, e) : Be), M = Math.max(o, 0) + u, w = n.range(), v = +w[0] + f, b = +w[w.length - 1] + f, x = (n.bandwidth ? Ze : Ke)(n.copy(), f), k = d.selection ? d.selection() : d, $ = k.selectAll(".domain").data([null]), N = k.selectAll(".tick").data(m, n).order(), C = N.exit(), E = N.enter().append("g").attr("class", "tick"), S = N.select("line"), A = N.select("text");
    $ = $.merge($.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), N = N.merge(E), S = S.merge(E.append("line").attr("stroke", "currentColor").attr(l + "2", s * o)), A = A.merge(E.append("text").attr("fill", "currentColor").attr(l, s * M).attr("dy", t === St ? "0em" : t === sn ? "0.71em" : "0.32em")), d !== k && ($ = $.transition(d), N = N.transition(d), S = S.transition(d), A = A.transition(d), C = C.transition(d).attr("opacity", Rn).attr("transform", function(p) {
      return isFinite(p = x(p)) ? h(p + f) : this.getAttribute("transform");
    }), E.attr("opacity", Rn).attr("transform", function(p) {
      var g = this.parentNode.__axis;
      return h((g && isFinite(g = g(p)) ? g : x(p)) + f);
    })), C.remove(), $.attr("d", t === ct || t === Et ? a ? "M" + s * a + "," + v + "H" + f + "V" + b + "H" + s * a : "M" + f + "," + v + "V" + b : a ? "M" + v + "," + s * a + "V" + f + "H" + b + "V" + s * a : "M" + v + "," + f + "H" + b), N.attr("opacity", 1).attr("transform", function(p) {
      return h(x(p) + f);
    }), S.attr(l + "2", s * o), A.attr(l, s * M).text(y), k.filter(Qe).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === Et ? "start" : t === ct ? "end" : "middle"), k.each(function() {
      this.__axis = x;
    });
  }
  return c.scale = function(d) {
    return arguments.length ? (n = d, c) : n;
  }, c.ticks = function() {
    return e = Array.from(arguments), c;
  }, c.tickArguments = function(d) {
    return arguments.length ? (e = d == null ? [] : Array.from(d), c) : e.slice();
  }, c.tickValues = function(d) {
    return arguments.length ? (r = d == null ? null : Array.from(d), c) : r && r.slice();
  }, c.tickFormat = function(d) {
    return arguments.length ? (i = d, c) : i;
  }, c.tickSize = function(d) {
    return arguments.length ? (o = a = +d, c) : o;
  }, c.tickSizeInner = function(d) {
    return arguments.length ? (o = +d, c) : o;
  }, c.tickSizeOuter = function(d) {
    return arguments.length ? (a = +d, c) : a;
  }, c.tickPadding = function(d) {
    return arguments.length ? (u = +d, c) : u;
  }, c.offset = function(d) {
    return arguments.length ? (f = +d, c) : f;
  }, c;
}
function tu(t) {
  return Bt(St, t);
}
function nu(t) {
  return Bt(Et, t);
}
function eu(t) {
  return Bt(sn, t);
}
function ru(t) {
  return Bt(ct, t);
}
var We = { value: () => {
} };
function ee() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new Tt(e);
}
function Tt(t) {
  this._ = t;
}
function Je(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
Tt.prototype = ee.prototype = {
  constructor: Tt,
  on: function(t, n) {
    var e = this._, r = Je(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = je(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = Cn(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = Cn(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new Tt(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, o; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e);
  }
};
function je(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Cn(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = We, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var fn = "http://www.w3.org/1999/xhtml";
const Pn = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: fn,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ut(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Pn.hasOwnProperty(n) ? { space: Pn[n], local: t } : t;
}
function tr(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === fn && n.documentElement.namespaceURI === fn ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function nr(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function re(t) {
  var n = Ut(t);
  return (n.local ? nr : tr)(n);
}
function er() {
}
function wn(t) {
  return t == null ? er : function() {
    return this.querySelector(t);
  };
}
function rr(t) {
  typeof t != "function" && (t = wn(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, u = r[i] = new Array(a), f, s, l = 0; l < a; ++l)
      (f = o[l]) && (s = t.call(f, f.__data__, l, o)) && ("__data__" in f && (s.__data__ = f.__data__), u[l] = s);
  return new R(r, this._parents);
}
function ie(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function ir() {
  return [];
}
function oe(t) {
  return t == null ? ir : function() {
    return this.querySelectorAll(t);
  };
}
function or(t) {
  return function() {
    return ie(t.apply(this, arguments));
  };
}
function ar(t) {
  typeof t == "function" ? t = or(t) : t = oe(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], u = a.length, f, s = 0; s < u; ++s)
      (f = a[s]) && (r.push(t.call(f, f.__data__, s, a)), i.push(f));
  return new R(r, i);
}
function ae(t) {
  return function() {
    return this.matches(t);
  };
}
function ue(t) {
  return function(n) {
    return n.matches(t);
  };
}
var ur = Array.prototype.find;
function sr(t) {
  return function() {
    return ur.call(this.children, t);
  };
}
function fr() {
  return this.firstElementChild;
}
function lr(t) {
  return this.select(t == null ? fr : sr(typeof t == "function" ? t : ue(t)));
}
var cr = Array.prototype.filter;
function hr() {
  return Array.from(this.children);
}
function dr(t) {
  return function() {
    return cr.call(this.children, t);
  };
}
function pr(t) {
  return this.selectAll(t == null ? hr : dr(typeof t == "function" ? t : ue(t)));
}
function gr(t) {
  typeof t != "function" && (t = ae(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, u = r[i] = [], f, s = 0; s < a; ++s)
      (f = o[s]) && t.call(f, f.__data__, s, o) && u.push(f);
  return new R(r, this._parents);
}
function se(t) {
  return new Array(t.length);
}
function mr() {
  return new R(this._enter || this._groups.map(se), this._parents);
}
function Ft(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
Ft.prototype = {
  constructor: Ft,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function yr(t) {
  return function() {
    return t;
  };
}
function _r(t, n, e, r, i, o) {
  for (var a = 0, u, f = n.length, s = o.length; a < s; ++a)
    (u = n[a]) ? (u.__data__ = o[a], r[a] = u) : e[a] = new Ft(t, o[a]);
  for (; a < f; ++a)
    (u = n[a]) && (i[a] = u);
}
function wr(t, n, e, r, i, o, a) {
  var u, f, s = /* @__PURE__ */ new Map(), l = n.length, h = o.length, c = new Array(l), d;
  for (u = 0; u < l; ++u)
    (f = n[u]) && (c[u] = d = a.call(f, f.__data__, u, n) + "", s.has(d) ? i[u] = f : s.set(d, f));
  for (u = 0; u < h; ++u)
    d = a.call(t, o[u], u, o) + "", (f = s.get(d)) ? (r[u] = f, f.__data__ = o[u], s.delete(d)) : e[u] = new Ft(t, o[u]);
  for (u = 0; u < l; ++u)
    (f = n[u]) && s.get(c[u]) === f && (i[u] = f);
}
function xr(t) {
  return t.__data__;
}
function vr(t, n) {
  if (!arguments.length) return Array.from(this, xr);
  var e = n ? wr : _r, r = this._parents, i = this._groups;
  typeof t != "function" && (t = yr(t));
  for (var o = i.length, a = new Array(o), u = new Array(o), f = new Array(o), s = 0; s < o; ++s) {
    var l = r[s], h = i[s], c = h.length, d = br(t.call(l, l && l.__data__, s, r)), m = d.length, y = u[s] = new Array(m), M = a[s] = new Array(m), w = f[s] = new Array(c);
    e(l, h, y, M, w, d, n);
    for (var v = 0, b = 0, x, k; v < m; ++v)
      if (x = y[v]) {
        for (v >= b && (b = v + 1); !(k = M[b]) && ++b < m; ) ;
        x._next = k || null;
      }
  }
  return a = new R(a, r), a._enter = u, a._exit = f, a;
}
function br(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function $r() {
  return new R(this._exit || this._groups.map(se), this._parents);
}
function Mr(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function kr(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), u = new Array(i), f = 0; f < a; ++f)
    for (var s = e[f], l = r[f], h = s.length, c = u[f] = new Array(h), d, m = 0; m < h; ++m)
      (d = s[m] || l[m]) && (c[m] = d);
  for (; f < i; ++f)
    u[f] = e[f];
  return new R(u, this._parents);
}
function Ar() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function Nr(t) {
  t || (t = Sr);
  function n(h, c) {
    return h && c ? t(h.__data__, c.__data__) : !h - !c;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], u = a.length, f = i[o] = new Array(u), s, l = 0; l < u; ++l)
      (s = a[l]) && (f[l] = s);
    f.sort(n);
  }
  return new R(i, this._parents).order();
}
function Sr(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Er() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Tr() {
  return Array.from(this);
}
function Rr() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Cr() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Pr() {
  return !this.node();
}
function Fr(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, u; o < a; ++o)
      (u = i[o]) && t.call(u, u.__data__, o, i);
  return this;
}
function Ir(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function qr(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Hr(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Dr(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Lr(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Xr(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Or(t, n) {
  var e = Ut(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? qr : Ir : typeof n == "function" ? e.local ? Xr : Lr : e.local ? Dr : Hr)(e, n));
}
function fe(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Vr(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function zr(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function Yr(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function Br(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Vr : typeof n == "function" ? Yr : zr)(t, n, e ?? "")) : at(this.node(), t);
}
function at(t, n) {
  return t.style.getPropertyValue(n) || fe(t).getComputedStyle(t, null).getPropertyValue(n);
}
function Ur(t) {
  return function() {
    delete this[t];
  };
}
function Gr(t, n) {
  return function() {
    this[t] = n;
  };
}
function Kr(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function Zr(t, n) {
  return arguments.length > 1 ? this.each((n == null ? Ur : typeof n == "function" ? Kr : Gr)(t, n)) : this.node()[t];
}
function le(t) {
  return t.trim().split(/^|\s+/);
}
function xn(t) {
  return t.classList || new ce(t);
}
function ce(t) {
  this._node = t, this._names = le(t.getAttribute("class") || "");
}
ce.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function he(t, n) {
  for (var e = xn(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function de(t, n) {
  for (var e = xn(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function Qr(t) {
  return function() {
    he(this, t);
  };
}
function Wr(t) {
  return function() {
    de(this, t);
  };
}
function Jr(t, n) {
  return function() {
    (n.apply(this, arguments) ? he : de)(this, t);
  };
}
function jr(t, n) {
  var e = le(t + "");
  if (arguments.length < 2) {
    for (var r = xn(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Jr : n ? Qr : Wr)(e, n));
}
function ti() {
  this.textContent = "";
}
function ni(t) {
  return function() {
    this.textContent = t;
  };
}
function ei(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function ri(t) {
  return arguments.length ? this.each(t == null ? ti : (typeof t == "function" ? ei : ni)(t)) : this.node().textContent;
}
function ii() {
  this.innerHTML = "";
}
function oi(t) {
  return function() {
    this.innerHTML = t;
  };
}
function ai(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function ui(t) {
  return arguments.length ? this.each(t == null ? ii : (typeof t == "function" ? ai : oi)(t)) : this.node().innerHTML;
}
function si() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function fi() {
  return this.each(si);
}
function li() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ci() {
  return this.each(li);
}
function hi(t) {
  var n = typeof t == "function" ? t : re(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function di() {
  return null;
}
function pi(t, n) {
  var e = typeof t == "function" ? t : re(t), r = n == null ? di : typeof n == "function" ? n : wn(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function gi() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function mi() {
  return this.each(gi);
}
function yi() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function _i() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function wi(t) {
  return this.select(t ? _i : yi);
}
function xi(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function vi(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function bi(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function $i(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Mi(t, n, e) {
  return function() {
    var r = this.__on, i, o = vi(n);
    if (r) {
      for (var a = 0, u = r.length; a < u; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function ki(t, n, e) {
  var r = bi(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var u = this.node().__on;
    if (u) {
      for (var f = 0, s = u.length, l; f < s; ++f)
        for (i = 0, l = u[f]; i < o; ++i)
          if ((a = r[i]).type === l.type && a.name === l.name)
            return l.value;
    }
    return;
  }
  for (u = n ? Mi : $i, i = 0; i < o; ++i) this.each(u(r[i], n, e));
  return this;
}
function pe(t, n, e) {
  var r = fe(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Ai(t, n) {
  return function() {
    return pe(this, t, n);
  };
}
function Ni(t, n) {
  return function() {
    return pe(this, t, n.apply(this, arguments));
  };
}
function Si(t, n) {
  return this.each((typeof n == "function" ? Ni : Ai)(t, n));
}
function* Ei() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var vn = [null];
function R(t, n) {
  this._groups = t, this._parents = n;
}
function _t() {
  return new R([[document.documentElement]], vn);
}
function Ti() {
  return this;
}
R.prototype = _t.prototype = {
  constructor: R,
  select: rr,
  selectAll: ar,
  selectChild: lr,
  selectChildren: pr,
  filter: gr,
  data: vr,
  enter: mr,
  exit: $r,
  join: Mr,
  merge: kr,
  selection: Ti,
  order: Ar,
  sort: Nr,
  call: Er,
  nodes: Tr,
  node: Rr,
  size: Cr,
  empty: Pr,
  each: Fr,
  attr: Or,
  style: Br,
  property: Zr,
  classed: jr,
  text: ri,
  html: ui,
  raise: fi,
  lower: ci,
  append: hi,
  insert: pi,
  remove: mi,
  clone: wi,
  datum: xi,
  on: ki,
  dispatch: Si,
  [Symbol.iterator]: Ei
};
function iu(t) {
  return typeof t == "string" ? new R([[document.querySelector(t)]], [document.documentElement]) : new R([[t]], vn);
}
function ou(t) {
  return typeof t == "string" ? new R([document.querySelectorAll(t)], [document.documentElement]) : new R([ie(t)], vn);
}
function bn(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function ge(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function wt() {
}
var gt = 0.7, It = 1 / gt, ot = "\\s*([+-]?\\d+)\\s*", mt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", B = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ri = /^#([0-9a-f]{3,8})$/, Ci = new RegExp(`^rgb\\(${ot},${ot},${ot}\\)$`), Pi = new RegExp(`^rgb\\(${B},${B},${B}\\)$`), Fi = new RegExp(`^rgba\\(${ot},${ot},${ot},${mt}\\)$`), Ii = new RegExp(`^rgba\\(${B},${B},${B},${mt}\\)$`), qi = new RegExp(`^hsl\\(${mt},${B},${B}\\)$`), Hi = new RegExp(`^hsla\\(${mt},${B},${B},${mt}\\)$`), Fn = {
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
bn(wt, rt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: In,
  // Deprecated! Use color.formatHex.
  formatHex: In,
  formatHex8: Di,
  formatHsl: Li,
  formatRgb: qn,
  toString: qn
});
function In() {
  return this.rgb().formatHex();
}
function Di() {
  return this.rgb().formatHex8();
}
function Li() {
  return me(this).formatHsl();
}
function qn() {
  return this.rgb().formatRgb();
}
function rt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Ri.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Hn(n) : e === 3 ? new q(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? bt(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? bt(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Ci.exec(t)) ? new q(n[1], n[2], n[3], 1) : (n = Pi.exec(t)) ? new q(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Fi.exec(t)) ? bt(n[1], n[2], n[3], n[4]) : (n = Ii.exec(t)) ? bt(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = qi.exec(t)) ? Xn(n[1], n[2] / 100, n[3] / 100, 1) : (n = Hi.exec(t)) ? Xn(n[1], n[2] / 100, n[3] / 100, n[4]) : Fn.hasOwnProperty(t) ? Hn(Fn[t]) : t === "transparent" ? new q(NaN, NaN, NaN, 0) : null;
}
function Hn(t) {
  return new q(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function bt(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new q(t, n, e, r);
}
function Xi(t) {
  return t instanceof wt || (t = rt(t)), t ? (t = t.rgb(), new q(t.r, t.g, t.b, t.opacity)) : new q();
}
function ln(t, n, e, r) {
  return arguments.length === 1 ? Xi(t) : new q(t, n, e, r ?? 1);
}
function q(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
bn(q, ln, ge(wt, {
  brighter(t) {
    return t = t == null ? It : Math.pow(It, t), new q(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? gt : Math.pow(gt, t), new q(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new q(et(this.r), et(this.g), et(this.b), qt(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Dn,
  // Deprecated! Use color.formatHex.
  formatHex: Dn,
  formatHex8: Oi,
  formatRgb: Ln,
  toString: Ln
}));
function Dn() {
  return `#${nt(this.r)}${nt(this.g)}${nt(this.b)}`;
}
function Oi() {
  return `#${nt(this.r)}${nt(this.g)}${nt(this.b)}${nt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ln() {
  const t = qt(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${et(this.r)}, ${et(this.g)}, ${et(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function qt(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function et(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function nt(t) {
  return t = et(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Xn(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new O(t, n, e, r);
}
function me(t) {
  if (t instanceof O) return new O(t.h, t.s, t.l, t.opacity);
  if (t instanceof wt || (t = rt(t)), !t) return new O();
  if (t instanceof O) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, u = o - i, f = (o + i) / 2;
  return u ? (n === o ? a = (e - r) / u + (e < r) * 6 : e === o ? a = (r - n) / u + 2 : a = (n - e) / u + 4, u /= f < 0.5 ? o + i : 2 - o - i, a *= 60) : u = f > 0 && f < 1 ? 0 : a, new O(a, u, f, t.opacity);
}
function Vi(t, n, e, r) {
  return arguments.length === 1 ? me(t) : new O(t, n, e, r ?? 1);
}
function O(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
bn(O, Vi, ge(wt, {
  brighter(t) {
    return t = t == null ? It : Math.pow(It, t), new O(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? gt : Math.pow(gt, t), new O(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new q(
      en(t >= 240 ? t - 240 : t + 120, i, r),
      en(t, i, r),
      en(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new O(On(this.h), $t(this.s), $t(this.l), qt(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = qt(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${On(this.h)}, ${$t(this.s) * 100}%, ${$t(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function On(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function $t(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function en(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const $n = (t) => () => t;
function zi(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function Yi(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function Bi(t) {
  return (t = +t) == 1 ? ye : function(n, e) {
    return e - n ? Yi(n, e, t) : $n(isNaN(n) ? e : n);
  };
}
function ye(t, n) {
  var e = n - t;
  return e ? zi(t, e) : $n(isNaN(t) ? n : t);
}
const Ht = (function t(n) {
  var e = Bi(n);
  function r(i, o) {
    var a = e((i = ln(i)).r, (o = ln(o)).r), u = e(i.g, o.g), f = e(i.b, o.b), s = ye(i.opacity, o.opacity);
    return function(l) {
      return i.r = a(l), i.g = u(l), i.b = f(l), i.opacity = s(l), i + "";
    };
  }
  return r.gamma = t, r;
})(1);
function Ui(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function Gi(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Ki(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = Gt(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(u) {
    for (a = 0; a < r; ++a) o[a] = i[a](u);
    return o;
  };
}
function Zi(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function X(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function Qi(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = Gt(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var cn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, rn = new RegExp(cn.source, "g");
function Wi(t) {
  return function() {
    return t;
  };
}
function Ji(t) {
  return function(n) {
    return t(n) + "";
  };
}
function _e(t, n) {
  var e = cn.lastIndex = rn.lastIndex = 0, r, i, o, a = -1, u = [], f = [];
  for (t = t + "", n = n + ""; (r = cn.exec(t)) && (i = rn.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), u[a] ? u[a] += o : u[++a] = o), (r = r[0]) === (i = i[0]) ? u[a] ? u[a] += i : u[++a] = i : (u[++a] = null, f.push({ i: a, x: X(r, i) })), e = rn.lastIndex;
  return e < n.length && (o = n.slice(e), u[a] ? u[a] += o : u[++a] = o), u.length < 2 ? f[0] ? Ji(f[0].x) : Wi(n) : (n = f.length, function(s) {
    for (var l = 0, h; l < n; ++l) u[(h = f[l]).i] = h.x(s);
    return u.join("");
  });
}
function Gt(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? $n(n) : (e === "number" ? X : e === "string" ? (r = rt(n)) ? (n = r, Ht) : _e : n instanceof rt ? Ht : n instanceof Date ? Zi : Gi(n) ? Ui : Array.isArray(n) ? Ki : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? Qi : X)(t, n);
}
function we(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var Vn = 180 / Math.PI, hn = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function xe(t, n, e, r, i, o) {
  var a, u, f;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (f = t * e + n * r) && (e -= t * f, r -= n * f), (u = Math.sqrt(e * e + r * r)) && (e /= u, r /= u, f /= u), t * r < n * e && (t = -t, n = -n, f = -f, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * Vn,
    skewX: Math.atan(f) * Vn,
    scaleX: a,
    scaleY: u
  };
}
var Mt;
function ji(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? hn : xe(n.a, n.b, n.c, n.d, n.e, n.f);
}
function to(t) {
  return t == null || (Mt || (Mt = document.createElementNS("http://www.w3.org/2000/svg", "g")), Mt.setAttribute("transform", t), !(t = Mt.transform.baseVal.consolidate())) ? hn : (t = t.matrix, xe(t.a, t.b, t.c, t.d, t.e, t.f));
}
function ve(t, n, e, r) {
  function i(s) {
    return s.length ? s.pop() + " " : "";
  }
  function o(s, l, h, c, d, m) {
    if (s !== h || l !== c) {
      var y = d.push("translate(", null, n, null, e);
      m.push({ i: y - 4, x: X(s, h) }, { i: y - 2, x: X(l, c) });
    } else (h || c) && d.push("translate(" + h + n + c + e);
  }
  function a(s, l, h, c) {
    s !== l ? (s - l > 180 ? l += 360 : l - s > 180 && (s += 360), c.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: X(s, l) })) : l && h.push(i(h) + "rotate(" + l + r);
  }
  function u(s, l, h, c) {
    s !== l ? c.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: X(s, l) }) : l && h.push(i(h) + "skewX(" + l + r);
  }
  function f(s, l, h, c, d, m) {
    if (s !== h || l !== c) {
      var y = d.push(i(d) + "scale(", null, ",", null, ")");
      m.push({ i: y - 4, x: X(s, h) }, { i: y - 2, x: X(l, c) });
    } else (h !== 1 || c !== 1) && d.push(i(d) + "scale(" + h + "," + c + ")");
  }
  return function(s, l) {
    var h = [], c = [];
    return s = t(s), l = t(l), o(s.translateX, s.translateY, l.translateX, l.translateY, h, c), a(s.rotate, l.rotate, h, c), u(s.skewX, l.skewX, h, c), f(s.scaleX, s.scaleY, l.scaleX, l.scaleY, h, c), s = l = null, function(d) {
      for (var m = -1, y = c.length, M; ++m < y; ) h[(M = c[m]).i] = M.x(d);
      return h.join("");
    };
  };
}
var no = ve(ji, "px, ", "px)", "deg)"), eo = ve(to, ", ", ")", ")"), ut = 0, ht = 0, lt = 0, be = 1e3, Dt, dt, Lt = 0, it = 0, Kt = 0, yt = typeof performance == "object" && performance.now ? performance : Date, $e = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Mn() {
  return it || ($e(ro), it = yt.now() + Kt);
}
function ro() {
  it = 0;
}
function Xt() {
  this._call = this._time = this._next = null;
}
Xt.prototype = Me.prototype = {
  constructor: Xt,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? Mn() : +e) + (n == null ? 0 : +n), !this._next && dt !== this && (dt ? dt._next = this : Dt = this, dt = this), this._call = t, this._time = e, dn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, dn());
  }
};
function Me(t, n, e) {
  var r = new Xt();
  return r.restart(t, n, e), r;
}
function io() {
  Mn(), ++ut;
  for (var t = Dt, n; t; )
    (n = it - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --ut;
}
function zn() {
  it = (Lt = yt.now()) + Kt, ut = ht = 0;
  try {
    io();
  } finally {
    ut = 0, ao(), it = 0;
  }
}
function oo() {
  var t = yt.now(), n = t - Lt;
  n > be && (Kt -= n, Lt = t);
}
function ao() {
  for (var t, n = Dt, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : Dt = e);
  dt = t, dn(r);
}
function dn(t) {
  if (!ut) {
    ht && (ht = clearTimeout(ht));
    var n = t - it;
    n > 24 ? (t < 1 / 0 && (ht = setTimeout(zn, t - yt.now() - Kt)), lt && (lt = clearInterval(lt))) : (lt || (Lt = yt.now(), lt = setInterval(oo, be)), ut = 1, $e(zn));
  }
}
function Yn(t, n, e) {
  var r = new Xt();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var uo = ee("start", "end", "cancel", "interrupt"), so = [], ke = 0, Bn = 1, pn = 2, Rt = 3, Un = 4, gn = 5, Ct = 6;
function Zt(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  fo(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: uo,
    tween: so,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: ke
  });
}
function kn(t, n) {
  var e = V(t, n);
  if (e.state > ke) throw new Error("too late; already scheduled");
  return e;
}
function U(t, n) {
  var e = V(t, n);
  if (e.state > Rt) throw new Error("too late; already running");
  return e;
}
function V(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function fo(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = Me(o, 0, e.time);
  function o(s) {
    e.state = Bn, e.timer.restart(a, e.delay, e.time), e.delay <= s && a(s - e.delay);
  }
  function a(s) {
    var l, h, c, d;
    if (e.state !== Bn) return f();
    for (l in r)
      if (d = r[l], d.name === e.name) {
        if (d.state === Rt) return Yn(a);
        d.state === Un ? (d.state = Ct, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[l]) : +l < n && (d.state = Ct, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[l]);
      }
    if (Yn(function() {
      e.state === Rt && (e.state = Un, e.timer.restart(u, e.delay, e.time), u(s));
    }), e.state = pn, e.on.call("start", t, t.__data__, e.index, e.group), e.state === pn) {
      for (e.state = Rt, i = new Array(c = e.tween.length), l = 0, h = -1; l < c; ++l)
        (d = e.tween[l].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = d);
      i.length = h + 1;
    }
  }
  function u(s) {
    for (var l = s < e.duration ? e.ease.call(null, s / e.duration) : (e.timer.restart(f), e.state = gn, 1), h = -1, c = i.length; ++h < c; )
      i[h].call(t, l);
    e.state === gn && (e.on.call("end", t, t.__data__, e.index, e.group), f());
  }
  function f() {
    e.state = Ct, e.timer.stop(), delete r[n];
    for (var s in r) return;
    delete t.__transition;
  }
}
function lo(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > pn && r.state < gn, r.state = Ct, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function co(t) {
  return this.each(function() {
    lo(this, t);
  });
}
function ho(t, n) {
  var e, r;
  return function() {
    var i = U(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, u = r.length; a < u; ++a)
        if (r[a].name === n) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function po(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = U(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var u = { name: n, value: e }, f = 0, s = i.length; f < s; ++f)
        if (i[f].name === n) {
          i[f] = u;
          break;
        }
      f === s && i.push(u);
    }
    o.tween = i;
  };
}
function go(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = V(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? ho : po)(e, t, n));
}
function An(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = U(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return V(i, r).value[n];
  };
}
function Ae(t, n) {
  var e;
  return (typeof n == "number" ? X : n instanceof rt ? Ht : (e = rt(n)) ? (n = e, Ht) : _e)(t, n);
}
function mo(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function yo(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function _o(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function wo(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function xo(t, n, e) {
  var r, i, o;
  return function() {
    var a, u = e(this), f;
    return u == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), f = u + "", a === f ? null : a === r && f === i ? o : (i = f, o = n(r = a, u)));
  };
}
function vo(t, n, e) {
  var r, i, o;
  return function() {
    var a, u = e(this), f;
    return u == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), f = u + "", a === f ? null : a === r && f === i ? o : (i = f, o = n(r = a, u)));
  };
}
function bo(t, n) {
  var e = Ut(t), r = e === "transform" ? eo : Ae;
  return this.attrTween(t, typeof n == "function" ? (e.local ? vo : xo)(e, r, An(this, "attr." + t, n)) : n == null ? (e.local ? yo : mo)(e) : (e.local ? wo : _o)(e, r, n));
}
function $o(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Mo(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function ko(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Mo(t, o)), e;
  }
  return i._value = n, i;
}
function Ao(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && $o(t, o)), e;
  }
  return i._value = n, i;
}
function No(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = Ut(t);
  return this.tween(e, (r.local ? ko : Ao)(r, n));
}
function So(t, n) {
  return function() {
    kn(this, t).delay = +n.apply(this, arguments);
  };
}
function Eo(t, n) {
  return n = +n, function() {
    kn(this, t).delay = n;
  };
}
function To(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? So : Eo)(n, t)) : V(this.node(), n).delay;
}
function Ro(t, n) {
  return function() {
    U(this, t).duration = +n.apply(this, arguments);
  };
}
function Co(t, n) {
  return n = +n, function() {
    U(this, t).duration = n;
  };
}
function Po(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ro : Co)(n, t)) : V(this.node(), n).duration;
}
function Fo(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    U(this, t).ease = n;
  };
}
function Io(t) {
  var n = this._id;
  return arguments.length ? this.each(Fo(n, t)) : V(this.node(), n).ease;
}
function qo(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    U(this, t).ease = e;
  };
}
function Ho(t) {
  if (typeof t != "function") throw new Error();
  return this.each(qo(this._id, t));
}
function Do(t) {
  typeof t != "function" && (t = ae(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, u = r[i] = [], f, s = 0; s < a; ++s)
      (f = o[s]) && t.call(f, f.__data__, s, o) && u.push(f);
  return new Q(r, this._parents, this._name, this._id);
}
function Lo(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), u = 0; u < o; ++u)
    for (var f = n[u], s = e[u], l = f.length, h = a[u] = new Array(l), c, d = 0; d < l; ++d)
      (c = f[d] || s[d]) && (h[d] = c);
  for (; u < r; ++u)
    a[u] = n[u];
  return new Q(a, this._parents, this._name, this._id);
}
function Xo(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function Oo(t, n, e) {
  var r, i, o = Xo(n) ? kn : U;
  return function() {
    var a = o(this, t), u = a.on;
    u !== r && (i = (r = u).copy()).on(n, e), a.on = i;
  };
}
function Vo(t, n) {
  var e = this._id;
  return arguments.length < 2 ? V(this.node(), e).on.on(t) : this.each(Oo(e, t, n));
}
function zo(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function Yo() {
  return this.on("end.remove", zo(this._id));
}
function Bo(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = wn(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var u = r[a], f = u.length, s = o[a] = new Array(f), l, h, c = 0; c < f; ++c)
      (l = u[c]) && (h = t.call(l, l.__data__, c, u)) && ("__data__" in l && (h.__data__ = l.__data__), s[c] = h, Zt(s[c], n, e, c, s, V(l, e)));
  return new Q(o, this._parents, n, e);
}
function Uo(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = oe(t));
  for (var r = this._groups, i = r.length, o = [], a = [], u = 0; u < i; ++u)
    for (var f = r[u], s = f.length, l, h = 0; h < s; ++h)
      if (l = f[h]) {
        for (var c = t.call(l, l.__data__, h, f), d, m = V(l, e), y = 0, M = c.length; y < M; ++y)
          (d = c[y]) && Zt(d, n, e, y, c, m);
        o.push(c), a.push(l);
      }
  return new Q(o, a, n, e);
}
var Go = _t.prototype.constructor;
function Ko() {
  return new Go(this._groups, this._parents);
}
function Zo(t, n) {
  var e, r, i;
  return function() {
    var o = at(this, t), a = (this.style.removeProperty(t), at(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function Ne(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Qo(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = at(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Wo(t, n, e) {
  var r, i, o;
  return function() {
    var a = at(this, t), u = e(this), f = u + "";
    return u == null && (f = u = (this.style.removeProperty(t), at(this, t))), a === f ? null : a === r && f === i ? o : (i = f, o = n(r = a, u));
  };
}
function Jo(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, u;
  return function() {
    var f = U(this, t), s = f.on, l = f.value[o] == null ? u || (u = Ne(n)) : void 0;
    (s !== e || i !== l) && (r = (e = s).copy()).on(a, i = l), f.on = r;
  };
}
function jo(t, n, e) {
  var r = (t += "") == "transform" ? no : Ae;
  return n == null ? this.styleTween(t, Zo(t, r)).on("end.style." + t, Ne(t)) : typeof n == "function" ? this.styleTween(t, Wo(t, r, An(this, "style." + t, n))).each(Jo(this._id, t)) : this.styleTween(t, Qo(t, r, n), e).on("end.style." + t, null);
}
function ta(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function na(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && ta(t, a, e)), r;
  }
  return o._value = n, o;
}
function ea(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, na(t, n, e ?? ""));
}
function ra(t) {
  return function() {
    this.textContent = t;
  };
}
function ia(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function oa(t) {
  return this.tween("text", typeof t == "function" ? ia(An(this, "text", t)) : ra(t == null ? "" : t + ""));
}
function aa(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function ua(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && aa(i)), n;
  }
  return r._value = t, r;
}
function sa(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, ua(t));
}
function fa() {
  for (var t = this._name, n = this._id, e = Se(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], u = a.length, f, s = 0; s < u; ++s)
      if (f = a[s]) {
        var l = V(f, n);
        Zt(f, t, e, s, a, {
          time: l.time + l.delay + l.duration,
          delay: 0,
          duration: l.duration,
          ease: l.ease
        });
      }
  return new Q(r, this._parents, t, e);
}
function la() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var u = { value: a }, f = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var s = U(this, r), l = s.on;
      l !== t && (n = (t = l).copy(), n._.cancel.push(u), n._.interrupt.push(u), n._.end.push(f)), s.on = n;
    }), i === 0 && o();
  });
}
var ca = 0;
function Q(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Se() {
  return ++ca;
}
var Z = _t.prototype;
Q.prototype = {
  constructor: Q,
  select: Bo,
  selectAll: Uo,
  selectChild: Z.selectChild,
  selectChildren: Z.selectChildren,
  filter: Do,
  merge: Lo,
  selection: Ko,
  transition: fa,
  call: Z.call,
  nodes: Z.nodes,
  node: Z.node,
  size: Z.size,
  empty: Z.empty,
  each: Z.each,
  on: Vo,
  attr: bo,
  attrTween: No,
  style: jo,
  styleTween: ea,
  text: oa,
  textTween: sa,
  remove: Yo,
  tween: go,
  delay: To,
  duration: Po,
  ease: Io,
  easeVarying: Ho,
  end: la,
  [Symbol.iterator]: Z[Symbol.iterator]
};
function ha(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var da = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: ha
};
function pa(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function ga(t) {
  var n, e;
  t instanceof Q ? (n = t._id, t = t._name) : (n = Se(), (e = da).time = Mn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], u = a.length, f, s = 0; s < u; ++s)
      (f = a[s]) && Zt(f, t, n, s, a, e || pa(f, n));
  return new Q(r, this._parents, t, n);
}
_t.prototype.interrupt = co;
_t.prototype.transition = ga;
const mn = Math.PI, yn = 2 * mn, tt = 1e-6, ma = yn - tt;
function Ee(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function ya(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return Ee;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class Nn {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? Ee : ya(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, o, a) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(n, e, r, i, o) {
    if (n = +n, e = +e, r = +r, i = +i, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let a = this._x1, u = this._y1, f = r - n, s = i - e, l = a - n, h = u - e, c = l * l + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (c > tt) if (!(Math.abs(h * f - s * l) > tt) || !o)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let d = r - a, m = i - u, y = f * f + s * s, M = d * d + m * m, w = Math.sqrt(y), v = Math.sqrt(c), b = o * Math.tan((mn - Math.acos((y + c - M) / (2 * w * v))) / 2), x = b / v, k = b / w;
      Math.abs(x - 1) > tt && this._append`L${n + x * l},${e + x * h}`, this._append`A${o},${o},0,0,${+(h * d > l * m)},${this._x1 = n + k * f},${this._y1 = e + k * s}`;
    }
  }
  arc(n, e, r, i, o, a) {
    if (n = +n, e = +e, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let u = r * Math.cos(i), f = r * Math.sin(i), s = n + u, l = e + f, h = 1 ^ a, c = a ? i - o : o - i;
    this._x1 === null ? this._append`M${s},${l}` : (Math.abs(this._x1 - s) > tt || Math.abs(this._y1 - l) > tt) && this._append`L${s},${l}`, r && (c < 0 && (c = c % yn + yn), c > ma ? this._append`A${r},${r},0,1,${h},${n - u},${e - f}A${r},${r},0,1,${h},${this._x1 = s},${this._y1 = l}` : c > tt && this._append`A${r},${r},0,${+(c >= mn)},${h},${this._x1 = n + r * Math.cos(o)},${this._y1 = e + r * Math.sin(o)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function _a() {
  return new Nn();
}
_a.prototype = Nn.prototype;
function wa(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Ot(t, n) {
  if (!isFinite(t) || t === 0) return null;
  var e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e"), r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function st(t) {
  return t = Ot(Math.abs(t)), t ? t[1] : NaN;
}
function xa(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, u = t[0], f = 0; i > 0 && u > 0 && (f + u + 1 > r && (u = Math.max(1, r - f)), o.push(e.substring(i -= u, i + u)), !((f += u + 1) > r)); )
      u = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function va(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var ba = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Vt(t) {
  if (!(n = ba.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new Sn({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
Vt.prototype = Sn.prototype;
function Sn(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Sn.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function $a(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), i = e;
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var zt;
function Ma(t, n) {
  var e = Ot(t, n);
  if (!e) return zt = void 0, t.toPrecision(n);
  var r = e[0], i = e[1], o = i - (zt = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + Ot(t, Math.max(0, n + o - 1))[0];
}
function Gn(t, n) {
  var e = Ot(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Kn = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: wa,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => Gn(t * 100, n),
  r: Gn,
  s: Ma,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Zn(t) {
  return t;
}
var Qn = Array.prototype.map, Wn = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function ka(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? Zn : xa(Qn.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? Zn : va(Qn.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", u = t.minus === void 0 ? "−" : t.minus + "", f = t.nan === void 0 ? "NaN" : t.nan + "";
  function s(h, c) {
    h = Vt(h);
    var d = h.fill, m = h.align, y = h.sign, M = h.symbol, w = h.zero, v = h.width, b = h.comma, x = h.precision, k = h.trim, $ = h.type;
    $ === "n" ? (b = !0, $ = "g") : Kn[$] || (x === void 0 && (x = 12), k = !0, $ = "g"), (w || d === "0" && m === "=") && (w = !0, d = "0", m = "=");
    var N = (c && c.prefix !== void 0 ? c.prefix : "") + (M === "$" ? e : M === "#" && /[boxX]/.test($) ? "0" + $.toLowerCase() : ""), C = (M === "$" ? r : /[%p]/.test($) ? a : "") + (c && c.suffix !== void 0 ? c.suffix : ""), E = Kn[$], S = /[defgprs%]/.test($);
    x = x === void 0 ? 6 : /[gprs]/.test($) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x));
    function A(p) {
      var g = N, _ = C, P, J, D;
      if ($ === "c")
        _ = E(p) + _, p = "";
      else {
        p = +p;
        var L = p < 0 || 1 / p < 0;
        if (p = isNaN(p) ? f : E(Math.abs(p), x), k && (p = $a(p)), L && +p == 0 && y !== "+" && (L = !1), g = (L ? y === "(" ? y : u : y === "-" || y === "(" ? "" : y) + g, _ = ($ === "s" && !isNaN(p) && zt !== void 0 ? Wn[8 + zt / 3] : "") + _ + (L && y === "(" ? ")" : ""), S) {
          for (P = -1, J = p.length; ++P < J; )
            if (D = p.charCodeAt(P), 48 > D || D > 57) {
              _ = (D === 46 ? i + p.slice(P + 1) : p.slice(P)) + _, p = p.slice(0, P);
              break;
            }
        }
      }
      b && !w && (p = n(p, 1 / 0));
      var G = g.length + p.length + _.length, F = G < v ? new Array(v - G + 1).join(d) : "";
      switch (b && w && (p = n(F + p, F.length ? v - _.length : 1 / 0), F = ""), m) {
        case "<":
          p = g + p + _ + F;
          break;
        case "=":
          p = g + F + p + _;
          break;
        case "^":
          p = F.slice(0, G = F.length >> 1) + g + p + _ + F.slice(G);
          break;
        default:
          p = F + g + p + _;
          break;
      }
      return o(p);
    }
    return A.toString = function() {
      return h + "";
    }, A;
  }
  function l(h, c) {
    var d = Math.max(-8, Math.min(8, Math.floor(st(c) / 3))) * 3, m = Math.pow(10, -d), y = s((h = Vt(h), h.type = "f", h), { suffix: Wn[8 + d / 3] });
    return function(M) {
      return y(m * M);
    };
  }
  return {
    format: s,
    formatPrefix: l
  };
}
var kt, Te, Re;
Aa({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Aa(t) {
  return kt = ka(t), Te = kt.format, Re = kt.formatPrefix, kt;
}
function Na(t) {
  return Math.max(0, -st(Math.abs(t)));
}
function Sa(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(st(n) / 3))) * 3 - st(Math.abs(t)));
}
function Ea(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, st(n) - st(t)) + 1;
}
function Ta(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
function Ra(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
    default: {
      this.domain(t), typeof n == "function" ? this.interpolator(n) : this.range(n);
      break;
    }
  }
  return this;
}
function Ca(t) {
  return function() {
    return t;
  };
}
function Pa(t) {
  return +t;
}
var Jn = [0, 1];
function W(t) {
  return t;
}
function _n(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Ca(isNaN(n) ? NaN : 0.5);
}
function Fa(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function Ia(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = _n(i, r), o = e(a, o)) : (r = _n(r, i), o = e(o, a)), function(u) {
    return o(r(u));
  };
}
function qa(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = _n(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(u) {
    var f = Le(t, u, 1, r) - 1;
    return o[f](i[f](u));
  };
}
function Ha(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Da() {
  var t = Jn, n = Jn, e = Gt, r, i, o, a = W, u, f, s;
  function l() {
    var c = Math.min(t.length, n.length);
    return a !== W && (a = Fa(t[0], t[c - 1])), u = c > 2 ? qa : Ia, f = s = null, h;
  }
  function h(c) {
    return c == null || isNaN(c = +c) ? o : (f || (f = u(t.map(r), n, e)))(r(a(c)));
  }
  return h.invert = function(c) {
    return a(i((s || (s = u(n, t.map(r), X)))(c)));
  }, h.domain = function(c) {
    return arguments.length ? (t = Array.from(c, Pa), l()) : t.slice();
  }, h.range = function(c) {
    return arguments.length ? (n = Array.from(c), l()) : n.slice();
  }, h.rangeRound = function(c) {
    return n = Array.from(c), e = we, l();
  }, h.clamp = function(c) {
    return arguments.length ? (a = c ? !0 : W, l()) : a !== W;
  }, h.interpolate = function(c) {
    return arguments.length ? (e = c, l()) : e;
  }, h.unknown = function(c) {
    return arguments.length ? (o = c, h) : o;
  }, function(c, d) {
    return r = c, i = d, l();
  };
}
function La() {
  return Da()(W, W);
}
function Xa(t, n, e, r) {
  var i = Ye(t, n, e), o;
  switch (r = Vt(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = Sa(i, a)) && (r.precision = o), Re(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = Ea(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Na(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return Te(r);
}
function Ce(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return ze(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return Xa(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], u = r[o], f, s, l = 10;
    for (u < a && (s = a, a = u, u = s, s = i, i = o, o = s); l-- > 0; ) {
      if (s = un(a, u, e), s === f)
        return r[i] = a, r[o] = u, n(r);
      if (s > 0)
        a = Math.floor(a / s) * s, u = Math.ceil(u / s) * s;
      else if (s < 0)
        a = Math.ceil(a * s) / s, u = Math.floor(u * s) / s;
      else
        break;
      f = s;
    }
    return t;
  }, t;
}
function Oa() {
  var t = La();
  return t.copy = function() {
    return Ha(t, Oa());
  }, Ta.apply(t, arguments), Ce(t);
}
function Va() {
  var t = 0, n = 1, e, r, i, o, a = W, u = !1, f;
  function s(h) {
    return h == null || isNaN(h = +h) ? f : a(i === 0 ? 0.5 : (h = (o(h) - e) * i, u ? Math.max(0, Math.min(1, h)) : h));
  }
  s.domain = function(h) {
    return arguments.length ? ([t, n] = h, e = o(t = +t), r = o(n = +n), i = e === r ? 0 : 1 / (r - e), s) : [t, n];
  }, s.clamp = function(h) {
    return arguments.length ? (u = !!h, s) : u;
  }, s.interpolator = function(h) {
    return arguments.length ? (a = h, s) : a;
  };
  function l(h) {
    return function(c) {
      var d, m;
      return arguments.length ? ([d, m] = c, a = h(d, m), s) : [a(0), a(1)];
    };
  }
  return s.range = l(Gt), s.rangeRound = l(we), s.unknown = function(h) {
    return arguments.length ? (f = h, s) : f;
  }, function(h) {
    return o = h, e = h(t), r = h(n), i = e === r ? 0 : 1 / (r - e), s;
  };
}
function za(t, n) {
  return n.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown());
}
function Ya() {
  var t = Ce(Va()(W));
  return t.copy = function() {
    return za(t, Ya());
  }, Ra.apply(t, arguments);
}
function H(t) {
  return function() {
    return t;
  };
}
const jn = Math.abs, T = Math.atan2, j = Math.cos, Ba = Math.max, on = Math.min, z = Math.sin, Y = Math.sqrt, I = 1e-12, ft = Math.PI, Yt = ft / 2, Pe = 2 * ft;
function Ua(t) {
  return t > 1 ? 0 : t < -1 ? ft : Math.acos(t);
}
function te(t) {
  return t >= 1 ? Yt : t <= -1 ? -Yt : Math.asin(t);
}
function Fe(t) {
  let n = 3;
  return t.digits = function(e) {
    if (!arguments.length) return n;
    if (e == null)
      n = null;
    else {
      const r = Math.floor(e);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${e}`);
      n = r;
    }
    return t;
  }, () => new Nn(n);
}
function Ga(t) {
  return t.innerRadius;
}
function Ka(t) {
  return t.outerRadius;
}
function Za(t) {
  return t.startAngle;
}
function Qa(t) {
  return t.endAngle;
}
function Wa(t) {
  return t && t.padAngle;
}
function Ja(t, n, e, r, i, o, a, u) {
  var f = e - t, s = r - n, l = a - i, h = u - o, c = h * f - l * s;
  if (!(c * c < I))
    return c = (l * (n - o) - h * (t - i)) / c, [t + c * f, n + c * s];
}
function At(t, n, e, r, i, o, a) {
  var u = t - e, f = n - r, s = (a ? o : -o) / Y(u * u + f * f), l = s * f, h = -s * u, c = t + l, d = n + h, m = e + l, y = r + h, M = (c + m) / 2, w = (d + y) / 2, v = m - c, b = y - d, x = v * v + b * b, k = i - o, $ = c * y - m * d, N = (b < 0 ? -1 : 1) * Y(Ba(0, k * k * x - $ * $)), C = ($ * b - v * N) / x, E = (-$ * v - b * N) / x, S = ($ * b + v * N) / x, A = (-$ * v + b * N) / x, p = C - M, g = E - w, _ = S - M, P = A - w;
  return p * p + g * g > _ * _ + P * P && (C = S, E = A), {
    cx: C,
    cy: E,
    x01: -l,
    y01: -h,
    x11: C * (i / k - 1),
    y11: E * (i / k - 1)
  };
}
function au() {
  var t = Ga, n = Ka, e = H(0), r = null, i = Za, o = Qa, a = Wa, u = null, f = Fe(s);
  function s() {
    var l, h, c = +t.apply(this, arguments), d = +n.apply(this, arguments), m = i.apply(this, arguments) - Yt, y = o.apply(this, arguments) - Yt, M = jn(y - m), w = y > m;
    if (u || (u = l = f()), d < c && (h = d, d = c, c = h), !(d > I)) u.moveTo(0, 0);
    else if (M > Pe - I)
      u.moveTo(d * j(m), d * z(m)), u.arc(0, 0, d, m, y, !w), c > I && (u.moveTo(c * j(y), c * z(y)), u.arc(0, 0, c, y, m, w));
    else {
      var v = m, b = y, x = m, k = y, $ = M, N = M, C = a.apply(this, arguments) / 2, E = C > I && (r ? +r.apply(this, arguments) : Y(c * c + d * d)), S = on(jn(d - c) / 2, +e.apply(this, arguments)), A = S, p = S, g, _;
      if (E > I) {
        var P = te(E / c * z(C)), J = te(E / d * z(C));
        ($ -= P * 2) > I ? (P *= w ? 1 : -1, x += P, k -= P) : ($ = 0, x = k = (m + y) / 2), (N -= J * 2) > I ? (J *= w ? 1 : -1, v += J, b -= J) : (N = 0, v = b = (m + y) / 2);
      }
      var D = d * j(v), L = d * z(v), G = c * j(k), F = c * z(k);
      if (S > I) {
        var xt = d * j(b), vt = d * z(b), Qt = c * j(x), Wt = c * z(x), K;
        if (M < ft)
          if (K = Ja(D, L, Qt, Wt, xt, vt, G, F)) {
            var Jt = D - K[0], jt = L - K[1], tn = xt - K[0], nn = vt - K[1], En = 1 / z(Ua((Jt * tn + jt * nn) / (Y(Jt * Jt + jt * jt) * Y(tn * tn + nn * nn))) / 2), Tn = Y(K[0] * K[0] + K[1] * K[1]);
            A = on(S, (c - Tn) / (En - 1)), p = on(S, (d - Tn) / (En + 1));
          } else
            A = p = 0;
      }
      N > I ? p > I ? (g = At(Qt, Wt, D, L, d, p, w), _ = At(xt, vt, G, F, d, p, w), u.moveTo(g.cx + g.x01, g.cy + g.y01), p < S ? u.arc(g.cx, g.cy, p, T(g.y01, g.x01), T(_.y01, _.x01), !w) : (u.arc(g.cx, g.cy, p, T(g.y01, g.x01), T(g.y11, g.x11), !w), u.arc(0, 0, d, T(g.cy + g.y11, g.cx + g.x11), T(_.cy + _.y11, _.cx + _.x11), !w), u.arc(_.cx, _.cy, p, T(_.y11, _.x11), T(_.y01, _.x01), !w))) : (u.moveTo(D, L), u.arc(0, 0, d, v, b, !w)) : u.moveTo(D, L), !(c > I) || !($ > I) ? u.lineTo(G, F) : A > I ? (g = At(G, F, xt, vt, c, -A, w), _ = At(D, L, Qt, Wt, c, -A, w), u.lineTo(g.cx + g.x01, g.cy + g.y01), A < S ? u.arc(g.cx, g.cy, A, T(g.y01, g.x01), T(_.y01, _.x01), !w) : (u.arc(g.cx, g.cy, A, T(g.y01, g.x01), T(g.y11, g.x11), !w), u.arc(0, 0, c, T(g.cy + g.y11, g.cx + g.x11), T(_.cy + _.y11, _.cx + _.x11), w), u.arc(_.cx, _.cy, A, T(_.y11, _.x11), T(_.y01, _.x01), !w))) : u.arc(0, 0, c, k, x, w);
    }
    if (u.closePath(), l) return u = null, l + "" || null;
  }
  return s.centroid = function() {
    var l = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2, h = (+i.apply(this, arguments) + +o.apply(this, arguments)) / 2 - ft / 2;
    return [j(h) * l, z(h) * l];
  }, s.innerRadius = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : H(+l), s) : t;
  }, s.outerRadius = function(l) {
    return arguments.length ? (n = typeof l == "function" ? l : H(+l), s) : n;
  }, s.cornerRadius = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : H(+l), s) : e;
  }, s.padRadius = function(l) {
    return arguments.length ? (r = l == null ? null : typeof l == "function" ? l : H(+l), s) : r;
  }, s.startAngle = function(l) {
    return arguments.length ? (i = typeof l == "function" ? l : H(+l), s) : i;
  }, s.endAngle = function(l) {
    return arguments.length ? (o = typeof l == "function" ? l : H(+l), s) : o;
  }, s.padAngle = function(l) {
    return arguments.length ? (a = typeof l == "function" ? l : H(+l), s) : a;
  }, s.context = function(l) {
    return arguments.length ? (u = l ?? null, s) : u;
  }, s;
}
const ja = {
  draw(t, n) {
    const e = Y(n / ft);
    t.moveTo(e, 0), t.arc(0, 0, e, 0, Pe);
  }
}, uu = {
  draw(t, n) {
    const e = Y(n), r = -e / 2;
    t.rect(r, r, e, e);
  }
}, an = Y(3), su = {
  draw(t, n) {
    const e = -Y(n / (an * 3));
    t.moveTo(0, e * 2), t.lineTo(-an * e, -e), t.lineTo(an * e, -e), t.closePath();
  }
};
function fu(t, n) {
  let e = null, r = Fe(i);
  t = typeof t == "function" ? t : H(t || ja), n = typeof n == "function" ? n : H(n === void 0 ? 64 : +n);
  function i() {
    let o;
    if (e || (e = o = r()), t.apply(this, arguments).draw(e, +n.apply(this, arguments)), o) return e = null, o + "" || null;
  }
  return i.type = function(o) {
    return arguments.length ? (t = typeof o == "function" ? o : H(o), i) : t;
  }, i.size = function(o) {
    return arguments.length ? (n = typeof o == "function" ? o : H(+o), i) : n;
  }, i.context = function(o) {
    return arguments.length ? (e = o ?? null, i) : e;
  }, i;
}
function pt(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
pt.prototype = {
  constructor: pt,
  scale: function(t) {
    return t === 1 ? this : new pt(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new pt(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
pt.prototype;
export {
  fu as S,
  su as a,
  au as b,
  ru as c,
  nu as d,
  eu as e,
  tu as f,
  Ya as g,
  ou as h,
  iu as i,
  Te as j,
  Na as k,
  Oa as l,
  _a as p,
  ln as r,
  uu as s
};

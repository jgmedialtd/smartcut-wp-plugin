import { i as We, g as At, a as Be, e as Ot, b as _t, c as Pt, d as Ft, f as xt, h as Ht, j as Yt, t as ue, k as ht, l as pe, m as mt, n as Xt, o as es, r as ts, p as Ze, q as ss, s as Fe, u as ns, v as rs, w as as, S as is, x as os, y as ls, z as qe, A as ce, B as us, C as yt, D as cs, I as fs } from "./components-CILyqcuP.js";
import { r as j, w as Qe, c as C, Y as H, t as ve, L as Se } from "./vendor-vue-WkZl1F8L.js";
import { y as ds, o as Ge, b as xe, a as ps, c as gs, n as Ue, s as De, _ as vs, u as hs, j as bt, k as Ne, q as ms, A as ys, B as St, C as bs, e as Ee, t as Ke, v as ze, w as Re } from "./vendor-zod-DtqKDYvi.js";
import { l as Ss } from "./vendor-socketio-C18vLChF.js";
let $e = null;
if (We())
  try {
    $e = require("~/helpers/applicationSettings").applicationSettings;
  } catch (r) {
    console.error("[useCrossPlatformStorage] Failed to load ApplicationSettings:", r);
  }
function Is(r, s, t = {}) {
  const {
    serializer: a = {
      read: (u) => {
        try {
          return JSON.parse(u);
        } catch {
          return u;
        }
      },
      write: (u) => JSON.stringify(u)
    }
  } = t;
  if (!We()) {
    const c = j((() => {
      try {
        if (typeof window < "u" && window.localStorage) {
          const p = localStorage.getItem(r);
          if (p)
            return a.read(p);
        }
      } catch (p) {
        console.error("[useCrossPlatformStorage] Failed to load", r, "from localStorage:", p);
      }
      return s;
    })());
    return Qe(c, (p) => {
      try {
        if (typeof window < "u" && window.localStorage) {
          const v = a.write(p);
          localStorage.setItem(r, v);
        }
      } catch (v) {
        console.error("[useCrossPlatformStorage] Failed to save", r, "to localStorage:", v);
      }
    }, { deep: !0 }), c;
  }
  if (We()) {
    if (!$e)
      return console.error("[useCrossPlatformStorage] ApplicationSettings not available! Using in-memory fallback."), j(s);
    const c = j((() => {
      try {
        const p = $e.getString(r);
        if (p)
          return a.read(p);
      } catch (p) {
        console.error("[useCrossPlatformStorage] Failed to load", r, "from ApplicationSettings:", p);
      }
      return s;
    })());
    return Qe(c, (p) => {
      try {
        const v = a.write(p);
        $e.setString(r, v);
      } catch (v) {
        console.error("[useCrossPlatformStorage] Failed to save", r, "to ApplicationSettings:", v);
      }
    }, { deep: !0 }), c;
  }
  return console.warn("[useCrossPlatformStorage] No storage available for key", r, "- using in-memory fallback"), j(s);
}
const Nt = "cle-extras-config", Ls = () => {
  try {
    const r = localStorage.getItem(Nt);
    return r ? JSON.parse(r) : {};
  } catch {
    return {};
  }
}, ks = (r) => {
  try {
    localStorage.setItem(Nt, JSON.stringify(r));
  } catch {
  }
}, Lt = j(Ls()), js = (r, s) => {
  Lt.value[r] = s, ns(r, s), ks(Lt.value);
}, ge = (r) => Yt(r), Bs = (r, s) => {
  const t = ge(r);
  if (!t || !t.options || t.options.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const a = t.options[0], o = Array.isArray(a) && typeof a[0] == "string" ? a : [];
  if (o.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const u = (v) => t.options.length > 1 ? v.includes("|") ? t.pricing && Object.keys(t.pricing).length > 0 ? Object.prototype.hasOwnProperty.call(t.pricing, v) ? !0 : Object.keys(t.pricing).some((b) => b.startsWith(v + "|") || b === v) : v.split("|").every((g, b) => {
    if (b >= t.options.length) return !1;
    const P = t.options[b];
    return Array.isArray(P) && typeof P[0] == "string" && P.includes(g);
  }) : t.options.some((A) => Array.isArray(A) && typeof A[0] == "string" && A.includes(v)) : o.includes(v), c = /* @__PURE__ */ new Set();
  let p = 0;
  return s.forEach((v) => {
    if (!v.extras?.[r]) return;
    const A = v.extras[r].sides || {};
    Object.entries(A).forEach(([b, P]) => {
      typeof P == "string" && P && !u(P) && (c.add(P), A[b] = "", p++);
    });
    const g = v.extras[r].faces || {};
    Object.entries(g).forEach(([b, P]) => {
      typeof P == "string" && P && !u(P) && (c.add(P), g[b] = "", p++);
    });
  }), {
    cleanedCount: p,
    invalidOptions: Array.from(c)
  };
}, Zs = (r) => {
  const {
    shape: s,
    extraType: t,
    allOptions: a,
    labels: o,
    userFriendlyFieldMap: u,
    allowCustomNames: c,
    customNames: p = j([]),
    enablePricing: v = !1,
    pricing: A,
    locations: g = j([]),
    locationGroups: b = j([]),
    getAvailablePricingOptions: P,
    getPrice: L,
    findExtrasPrice: m,
    formatPrice: S
  } = r, O = () => {
    const e = ge(t), n = e?.options || a, i = e?.labels || o;
    Ht(s.value, t, n, i, p.value);
  };
  O(), Qe(s, (e) => {
    if (e) {
      const i = e.extras?.[t], l = i?.sides || {}, d = i?.options?.sides || {};
      let h = !1;
      for (const [N, E] of Object.entries(l))
        if (typeof E == "string") {
          if (E.includes("|") && !d[N]) {
            h = !0;
            break;
          } else if (E !== "" && !d[N]) {
            h = !0;
            break;
          }
        }
      h && O();
    }
  }, { deep: !0, immediate: !1 });
  const $ = C(() => ge(t)), T = C(() => {
    const n = $.value?.options || a;
    if (n.length > 1)
      return "multiple";
    const l = (n[0] || []).filter((E) => typeof E == "string"), d = (p.value || []).filter((E) => typeof E == "string"), N = Array.from(/* @__PURE__ */ new Set([...l, ...d])).length;
    return N === 0 ? "boolean" : N === 1 ? "single" : "multiple";
  }), U = C(() => At(t)), F = C(() => g.value && g.value.length > 0 ? g.value.filter((e) => e !== "all" && e !== "faces" && e !== "sides") : U.value), B = C(() => F.value.filter((e) => Be(e) === "face")), Z = C(() => F.value.filter((e) => Be(e) === "side")), _ = C(() => Ot(t)), M = C(() => _t(t)), q = C(() => Pt(t)), G = () => $.value?.options && $.value.options.length > 1, J = (e, n, i) => {
    const { singleOption: l = he(), operation: d } = i;
    switch (n) {
      case "boolean":
        return !!e;
      case "single":
        return l ? d === "process" || d === "set" ? e && l ? l : "" : e === l ? l : "" : !!e;
      case "multiple":
        return e || "";
      default:
        return e;
    }
  }, Y = (e, n, i) => J(n, i, { operation: "process" }), ee = (e, n, i, l, d, h) => {
    switch (h) {
      case "boolean":
        Fe(e, n, i, l, !!d);
        break;
      case "single": {
        const N = he();
        Fe(e, n, i, l, d ? N : "");
        break;
      }
      case "multiple":
        Fe(e, n, i, l, d || "");
        break;
    }
  }, Q = (e, n, i = {}) => {
    const l = i.singleOption || he();
    return i.allowCustomNames ?? (l && [].includes(l.toString())), J(e, n, {
      operation: "get",
      singleOption: l
    });
  }, se = (e, n, i, l) => {
    switch (l) {
      case "boolean":
        return !!e;
      case "single": {
        const d = he();
        if (d) {
          const h = n.map((w) => pe(s.value, t, w, i)), N = h.every((w) => w === d || w === !0), E = h.every((w) => !w || w === "");
          return N ? d : E ? "" : null;
        }
        return !!e;
      }
      case "multiple":
        return typeof e == "string" ? e : e || "";
      default:
        return e;
    }
  }, ne = (e, n, i, l = !1) => {
    if (l)
      e.forEach((d) => x(d, n, i));
    else {
      const d = o[n] || "", h = Y(d, i, T.value);
      e.forEach((N) => {
        ee(s.value, t, N, d, h, T.value);
      });
    }
  }, k = (e, n) => {
    if (G()) {
      const i = o[n] || "", l = e.map((E) => {
        const w = pe(s.value, t, E, i);
        return w === !0 ? ie(n)[0] || "" : String(w || "");
      }), d = l[0] || "";
      return l.every((E) => E === d) ? d : null;
    } else {
      const i = o[n] || "";
      if (T.value === "single") {
        const d = he();
        if (d) {
          const h = e.map((w) => pe(s.value, t, w, i)), N = h.every((w) => w === d || w === !0), E = h.every((w) => !w || w === "");
          return N ? d : E ? "" : null;
        }
      }
      const l = mt(s.value, t, e, i, T.value);
      return T.value === "multiple" && l === !1 && e.every((h) => {
        const N = pe(s.value, t, h, i, T.value);
        return N === "" || N === !1 || N === null || N === void 0;
      }) ? "" : l;
    }
  }, f = (e) => {
    const { location: n, locationType: i = "single", optionIndex: l, stateValue: d, isAggregate: h = !1, customLabel: N } = e, E = ie(l), w = E.length > 1 ? "select" : "checkbox", z = h ? ae(l, N || i) : ae(l, n), D = T.value === "multiple" && z.length === 1 && v;
    if (D && z[0]) {
      if (h) {
        let le = [];
        i === "all" ? le = F.value : i === "faces" ? le = B.value : i === "sides" ? le = Z.value : n && X(n) && (le = re(n)), le.forEach((gt) => {
          const vt = V(gt, l);
          (!vt || vt !== z[0]) && x(gt, l, z[0]);
        });
      } else if (n) {
        const le = V(n, l);
        (!le || le !== z[0]) && x(n, l, z[0]);
      }
    }
    const R = T.value === "multiple" && (z.length === 0 || D), K = d !== void 0 ? d : n ? V(n, l) : null, de = w === "select" ? lt(n || i, l) : void 0, oe = w === "checkbox" && E.length === 1 ? E[0] : void 0;
    let dt, pt;
    return w === "checkbox" && E.length === 1 && (dt = E[0], pt = ""), {
      inputType: w,
      // Alias for backward compatibility
      type: w,
      value: K,
      options: de,
      disabled: R,
      label: oe,
      indeterminate: K === null && w === "checkbox",
      trueValue: dt,
      falseValue: pt
    };
  }, y = (e, n, i) => f({
    locationType: e,
    optionIndex: n,
    stateValue: i,
    isAggregate: !0
  }), x = (e, n, i) => {
    const l = o[n] || "";
    if (G()) {
      const d = be(e, n);
      let h;
      if (d === "checkbox") {
        const E = ie(n)[0];
        h = i ? E : "";
      } else
        h = i || "";
      Fe(s.value, t, e, l, h);
    } else
      ee(s.value, t, e, l, i, T.value);
  }, V = (e, n) => {
    const i = o[n] || "";
    if (G()) {
      const l = pe(s.value, t, e, i);
      if (be(e, n) === "checkbox") {
        const N = ie(n)[0];
        return l === !0 || l === N ? N : "";
      } else
        return l || "";
    } else {
      const l = pe(s.value, t, e, i, T.value);
      return Q(l, T.value);
    }
  }, I = (e, n) => {
    ne(F.value, e, n, G());
  }, W = (e) => {
    if (G()) {
      const n = o[e] || "", i = F.value.map((h) => {
        const N = pe(s.value, t, h, n);
        return N === !0 ? ie(e)[0] || "" : String(N || "");
      }), l = i[0] || "";
      return i.every((h) => h === l) ? l : null;
    } else {
      const n = o[e] || "", i = mt(s.value, t, F.value, n, T.value);
      return se(i, F.value, n, T.value);
    }
  }, Le = () => {
    Ze(s.value, t, F.value, T.value);
  }, ke = (e) => e === "faces" ? {
    locations: B.value,
    isSupported: _.value
  } : {
    locations: Z.value,
    isSupported: M.value
  }, Je = (e, n, i) => {
    const { locations: l, isSupported: d } = ke(e);
    d && ne(l, n, i, G());
  }, Ve = (e, n) => {
    const { locations: i, isSupported: l } = ke(e);
    return l ? k(i, n) : null;
  }, He = (e) => {
    const { locations: n, isSupported: i } = ke(e);
    i && Ze(s.value, t, n, T.value);
  }, Ye = (e, n) => {
    const { isSupported: i } = ke(e);
    if (!i) return { type: "checkbox", value: !1 };
    const l = Ve(e, n);
    return y(e, n, l);
  }, Me = (e, n) => {
    Je("faces", e, n);
  }, Ie = (e, n) => {
    Je("sides", e, n);
  }, Ce = (e) => Ve("faces", e), we = (e) => Ve("sides", e), Xe = () => {
    He("faces");
  }, et = () => {
    He("sides");
  }, ye = (e) => b.value.find((n) => n.id === e), X = (e) => ["all", "faces", "sides"].includes(e) ? !1 : !e.includes("."), re = (e) => {
    const n = ye(e);
    return n ? n.locations.filter((i) => F.value.includes(i)) : [];
  }, tt = (e, n, i) => {
    const l = re(e);
    l.length !== 0 && (l.forEach((d) => x(d, n, i)), ve(s));
  }, Ae = (e, n) => {
    const i = re(e);
    if (i.length === 0) return null;
    const l = k(i, n);
    return !G() && (l === null || l === !1 || l === "") ? "" : l;
  }, Tt = (e) => {
    const n = re(e);
    n.length !== 0 && Ze(s.value, t, n, T.value);
  }, $t = (e, n) => {
    const i = Ae(e, n), l = ye(e);
    return f({
      location: e,
      optionIndex: n,
      stateValue: i,
      isAggregate: !0,
      customLabel: l?.label
    });
  }, st = (e) => {
    ss(s.value, t, e, T.value);
  }, nt = (e) => e === "all" ? F.value.some((n) => !!V(n, 0)) : e === "faces" && _.value ? B.value.some((n) => !!V(n, 0)) : e === "sides" && M.value ? Z.value.some((n) => !!V(n, 0)) : X(e) ? re(e).some((i) => !!V(i, 0)) : F.value.includes(e) ? !!V(e, 0) : !1, Oe = (e) => {
    if (e === "all") return ue("general.all");
    if (e === "faces") return `${ue("general.all")} ${ue("machining.face_other")}`;
    if (e === "sides") return `${ue("general.all")} ${ue("woodwork.edge_other")}`;
    if (X(e)) {
      const l = ye(e);
      if (l) return l.label;
    }
    if (e.startsWith("face.")) {
      const d = `faces.${e.replace("face.", "")}`;
      return ue(d);
    }
    if (e.startsWith("side.")) {
      const d = `sides.${e.replace("side.", "")}`;
      return ue(d);
    }
    const n = `fields.${e}`, i = ue(n);
    return i !== n ? i : u?.[e] ? u[e] : e;
  }, be = (e, n) => T.value === "boolean" ? "checkbox" : ie(n).length > 1 ? "select" : "checkbox", rt = (e, n) => f({
    location: e,
    optionIndex: n,
    isAggregate: !1
  }), at = (e) => {
    const n = W(e);
    return y("all", e, n);
  }, it = (e) => Ye("faces", e), ot = (e) => Ye("sides", e), Vt = (e, n) => e === "all" ? at(n) : e === "faces" ? it(n) : e === "sides" ? ot(n) : X(e) ? $t(e, n) : rt(e, n), ae = (e, n) => {
    const d = (ge(t)?.options || a)[e];
    if (!d || d[0] === !0)
      return [];
    const h = n && typeof n == "string" && (n.startsWith("face.") || n.startsWith("side.")), N = n && typeof n == "string" && X(n), E = !h && (n === "all" || n === "faces" || n === "sides" || N);
    if (Array.isArray(d) && d.length === 1 && typeof d[0] == "string" && !(v && P && (h || E) && e > 0))
      return d;
    if (v && P && h) {
      const D = [];
      if (e > 0)
        for (let R = 0; R < e; R++) {
          const K = V(n, R);
          if (typeof K == "string" && K)
            D.push(K);
          else if (typeof K == "boolean")
            D.push(K);
          else {
            const de = ge(t), oe = ht(s.value, t, n);
            return oe && typeof oe == "object" && !Array.isArray(oe) && Object.keys(oe).length > 1 && de?.options[e] ? de.options[e] : [];
          }
        }
      return P(A, D, e);
    }
    if (v && P && E) {
      const D = [];
      if (e > 0)
        for (let R = 0; R < e; R++) {
          let K;
          if (n === "all" ? K = W(R) : n === "faces" ? K = Ce(R) : n === "sides" ? K = we(R) : N && typeof n == "string" && (K = Ae(n, R)), typeof K == "string" && K)
            D.push(K);
          else if (typeof K == "boolean")
            D.push(K);
          else
            return [];
        }
      return P(A, D, e);
    }
    const w = d, z = c ? (p.value || []).filter((D) => typeof D == "string") : [];
    return [.../* @__PURE__ */ new Set([...w, ...z])];
  }, lt = (e, n) => {
    const l = ge(t)?.options[n] || [], d = c && p.value ? p.value.filter((z) => typeof z == "string") : [], h = [.../* @__PURE__ */ new Set([...l, ...d])], N = ae(n, e), E = new Set(N);
    return h.map((z) => ({
      value: z,
      label: z,
      disabled: !E.has(z)
    }));
  }, he = () => {
    const e = ae(0);
    return e.length === 1 ? e[0] : void 0;
  }, Mt = (e) => {
    const n = ae(e);
    return n.length === 1 ? n[0] : void 0;
  }, ie = (e) => {
    const n = ge(t);
    let i = [];
    if (n?.options && n.options[e] && Array.isArray(n.options[e])) {
      const d = n.options[e];
      Array.isArray(d) && d.every((h) => typeof h == "string") && (i = d);
    }
    const l = c && p.value ? p.value.filter((d) => typeof d == "string") : [];
    return [.../* @__PURE__ */ new Set([...i, ...l])];
  }, It = (e, n = 0) => {
    if (e === "all" || e === "faces" || e === "sides")
      return "";
    if (X(e)) {
      const l = ye(e);
      return l?.price !== void 0 && Ae(e, n) ? S ? S(l.price) : l.price.toString() : "";
    }
    if (!v || !L)
      return "";
    if (!F.value.includes(e))
      return "N/A";
    const i = L(s.value, t, e, m);
    return i ? S ? S(i) : i.toString() : "N/A";
  }, jt = (e) => !v || !L ? !1 : L(s.value, t, e, m), _e = C(() => F.value.length > 1), Pe = C(() => U.value.length > 1), ut = () => {
    if (g.value && g.value.length > 0) {
      const l = [];
      return b.value && b.value.length > 0 && b.value.forEach((d) => l.push(d.id)), l.push(...g.value), l;
    }
    const e = [];
    b.value && b.value.length > 0 && b.value.forEach((l) => e.push(l.id)), _e.value && e.push("all"), Pe.value && (Ft(t).length > 0 && e.push("faces"), xt(t).length > 0 && e.push("sides"));
    const n = /* @__PURE__ */ new Set();
    b.value && b.value.length > 0 && b.value.forEach((l) => {
      l.hideIndividualLocations && l.locations.forEach((d) => n.add(d));
    });
    const i = U.value.filter((l) => !n.has(l));
    return e.push(...i), e;
  }, Bt = () => T.value === "multiple", Zt = () => {
    const e = 1 + a.length, n = T.value === "multiple", i = v, l = e + (n ? 1 : 0) + (i ? 1 : 0);
    return {
      columns: l,
      style: `repeat(${l}, max-content)`
    };
  }, je = (e) => e === "all" ? "all" : e === "faces" ? "faces" : e === "sides" ? "sides" : "individual", ct = (e) => Be(e), qt = (e) => {
    if (e === "all")
      return _e.value;
    if (X(e))
      return ye(e) ? re(e).length > 0 : !1;
    if (g.value && g.value.length > 0)
      return g.value.includes(e);
    const n = je(e);
    return n === "all" ? _e.value : n === "faces" || n === "sides" ? n === "faces" && _.value && B.value.length > 0 || n === "sides" && M.value && Z.value.length > 0 ? Pe.value : !1 : U.value.includes(e);
  }, Gt = (e) => {
    ts(e, t, p);
  }, Ut = (e) => {
    es([s.value], t, e, o);
  }, Dt = (e) => {
    Xt([s.value], t, e);
  }, Kt = (e, n, i) => {
    if (e === "all")
      I(n, i);
    else if (e === "faces")
      Me(n, i);
    else if (e === "sides")
      Ie(n, i);
    else if (X(e)) {
      let d = i;
      if (!G() && typeof i == "boolean") {
        const h = ie(n);
        h.length === 1 && (d = i ? h[0] : "");
      }
      if (!G() && d) {
        const h = re(e), N = new Set(h);
        b.value && (b.value.forEach((E) => {
          E.id !== e && re(E.id).filter((D) => !N.has(D)).forEach((D) => {
            x(D, n, "");
          });
        }), ve(s));
      }
      tt(e, n, d);
    } else
      x(e, n, i), G() || ve(s);
    const l = o.length;
    for (let d = n + 1; d < l; d++) {
      let h;
      if (e === "all" ? h = W(d) : e === "faces" ? h = Ce(d) : e === "sides" ? h = we(d) : X(e) ? h = Ae(e, d) : h = V(e, d), !h) {
        console.groupEnd();
        continue;
      }
      const N = ae(d, e);
      let E = !1;
      if (typeof h == "string" ? E = N.includes(h) : typeof h == "boolean" && h === !0 && (E = N.length > 0), !E) {
        const w = be(e, d) === "checkbox" ? !1 : "";
        e === "all" ? I(d, w) : e === "faces" ? Me(d, w) : e === "sides" ? Ie(d, w) : X(e) ? tt(e, d, w) : x(e, d, w);
      }
      console.groupEnd();
    }
  }, zt = (e, n = !0) => n && !confirm(`Delete ${t} for ${Oe(e)}?`) ? !1 : (e === "all" ? Le() : e === "faces" ? Xe() : e === "sides" ? et() : X(e) ? Tt(e) : st(e), !0), Rt = () => {
    const e = s.value[t], n = s.value[`${t}Options`];
    return !(!e || typeof e != "object" || !n || typeof n != "object" || _.value && (!("faces" in e) || !("faces" in n)) || M.value && (!("sides" in e) || !("sides" in n)));
  }, Wt = () => {
    const e = [], n = s.value[t], i = s.value[`${t}Options`];
    return !n || typeof n != "object" ? e.push(`Missing or invalid ${t} property in shape`) : (_.value && !("faces" in n) && e.push(`Missing faces property in ${t}`), M.value && !("sides" in n) && e.push(`Missing sides property in ${t}`)), !i || typeof i != "object" ? e.push(`Missing or invalid ${t}Options property in shape`) : (_.value && !("faces" in i) && e.push(`Missing faces property in ${t}Options`), M.value && !("sides" in i) && e.push(`Missing sides property in ${t}Options`)), e;
  }, ft = (e) => {
    const n = [];
    if (!e || !Object.keys(e).length)
      return { valid: !0, errors: n };
    const i = Object.keys(e), l = Math.max(...i.map((d) => d.split("|").length));
    if (l <= 1)
      return { valid: !0, errors: n };
    for (const d of F.value) {
      let h;
      if (G()) {
        const w = ht(s.value, t, d);
        w && typeof w == "object" && !Array.isArray(w) ? h = o.map((D) => {
          const R = w[D];
          if (R === !0) {
            const K = o.indexOf(D);
            return ie(K)[0] || "";
          }
          return String(R || "");
        }).join("|") : h = "";
      } else {
        const w = V(d, 0);
        h = typeof w == "string" ? w : "";
      }
      if (!h || h === "")
        continue;
      const N = h.includes("|") ? h.split("|") : [h], E = N.filter((w) => w.trim() !== "").length;
      if (E > 0 && E < l) {
        const w = N.join("|"), z = i.some((R) => R.startsWith(w + "|")), D = i.includes(w);
        if (z && !D) {
          const R = l - E, K = N.filter((oe) => oe.trim() !== "").join(", "), de = Oe(d);
          n.push(`${t} selection incomplete for ${de}. Selected: "${K}" but ${R} more level${R > 1 ? "s" : ""} required.`);
        }
      }
    }
    return { valid: n.length === 0, errors: n };
  }, Qt = (e) => ft(e).errors, Jt = C(() => ut().map((e) => ({
    location: e,
    label: Oe(e),
    isAggregate: ["all", "faces", "sides"].includes(e) || X(e)
  })));
  return {
    // State - provide raw computed refs for other composables
    mode: T,
    // Raw computed ref (not readonly wrapped)
    allLocations: H(F),
    faceLocations: H(B),
    sideLocations: H(Z),
    shouldShowAll: _e,
    // Raw computed ref (not readonly wrapped)
    shouldShowGroupControls: H(Pe),
    renderLocations: H(Jt),
    // Expose computed renderLocations
    // Support flags
    supportsFaces: H(_),
    supportsSides: H(M),
    supportsBoth: H(q),
    // Core operations
    setValue: x,
    getValue: V,
    setAll: I,
    getAll: W,
    getAllState: W,
    // Alias for backward compatibility
    deleteSingle: st,
    deleteAll: Le,
    canDelete: nt,
    // Group-specific operations
    setAllFaces: Me,
    setAllSides: Ie,
    getAllFaces: Ce,
    getAllSides: we,
    deleteAllFaces: Xe,
    deleteAllSides: et,
    // UI helpers
    getLocationLabel: Oe,
    getInputType: be,
    getInputConfig: rt,
    getAllInputConfig: at,
    getAllFacesInputConfig: it,
    getAllSidesInputConfig: ot,
    getInputConfigForLocation: Vt,
    getSelectOptions: lt,
    getSingleOptionLabel: Mt,
    // Pricing
    getPriceDisplay: It,
    getCalculatedPrice: jt,
    // Layout & rendering
    getRenderLocations: ut,
    shouldShowDeleteButton: Bt,
    getGridConfig: Zt,
    getLocationGroup: je,
    getLocationScope: ct,
    isLocationVisible: qt,
    // Options management
    getAvailableOptions: ae,
    getSingleAvailableOption: he,
    // Initialization & migration
    initialize: O,
    initializeExtra: O,
    // Alias for backward compatibility
    initializeCustomNames: Gt,
    migrateToSingle: Ut,
    migrateToBoolean: Dt,
    // Event handlers
    handleInputChange: Kt,
    handleDelete: zt,
    // Validation
    validateShape: Rt,
    getValidationErrors: Wt,
    validateIncompleteSelections: ft,
    getIncompleteSelectionErrors: Qt,
    // Debug helpers (development only)
    getDebugInfo: (e, n) => ({
      mode: T.value,
      location: e,
      optionIndex: n,
      value: F.value.includes(e) ? V(e, n) : "N/A",
      inputType: be(e, n),
      canDelete: nt(e),
      allState: W(n),
      availableOptions: ae(n),
      locationGroup: je(e),
      config: $.value,
      supportsFaces: _.value,
      supportsSides: M.value,
      supportsBoth: q.value,
      ..._.value && {
        allFacesState: Ce(n)
      },
      ...M.value && {
        allSidesState: we(n)
      },
      ...F.value.includes(e) && {
        locationScope: ct(e)
      }
    })
  };
}, qs = (r) => {
  const {
    customNames: s,
    usedNames: t,
    allowCustomNames: a,
    getSelectOptions: o,
    onCustomNameAdded: u,
    onCustomNameDeleted: c
  } = r, p = j(""), v = C(() => a && p.value?.trim()), A = C(() => !a || !s.value || s.value.length === 0 || s.value.length === 1 && s.value[0] === !0 ? !0 : s.value.filter((m) => typeof m == "string").every((m) => t.value.includes(m))), g = C(() => {
    const L = [];
    if (a && s.value && s.value.length > 0) {
      if (s.value.length === 1 && s.value[0] === !0)
        return L;
      const S = [...s.value.filter((O) => typeof O == "string")].sort();
      L.push({
        id: "delete-header",
        type: "group",
        label: "Delete Type"
      }), S.forEach((O) => {
        (t.value?.includes(O) ?? !1) || L.push({
          id: `delete-${O}`,
          label: `Delete "${O}"`,
          icon: ["fass", "trash"],
          class: "del"
        });
      });
    }
    return L;
  }), b = () => {
    const L = p.value?.trim();
    if (!L) return;
    if (o("", 0).map((S) => S.value).includes(L)) {
      p.value = "";
      return;
    }
    u(L), p.value = "";
  }, P = (L) => {
    const m = L.item || L;
    if (m.id?.startsWith("delete-")) {
      const S = m.id.replace("delete-", "");
      if (t.value?.includes(S)) {
        console.warn(`Cannot delete ${r.extraType} type "${S}" - it is currently in use`);
        return;
      }
      c(S);
    }
  };
  return {
    newCustomName: p,
    canAddCustomName: H(v),
    isActionMenuDisabled: H(A),
    customNameActions: g,
    handleAddCustomName: b,
    handleCustomNameAction: P
  };
}, Gs = (r) => {
  const {
    extraType: s,
    allOptions: t,
    labels: a,
    shapeIndex: o,
    enablePricing: u,
    mode: c,
    shouldShowAll: p,
    locations: v,
    locationGroups: A = j([]),
    getInputType: g,
    getInputConfig: b,
    getAllInputConfig: P,
    getInputConfigForLocation: L,
    canDelete: m,
    getLocationLabel: S,
    shouldShowDeleteButton: O
  } = r, $ = C(() => {
    const _ = [], M = /* @__PURE__ */ new Set();
    if (A.value && A.value.length > 0 && A.value.forEach((q) => {
      q.hideIndividualLocations && q.locations.forEach((G) => M.add(G));
    }), A.value && A.value.length > 0 && A.value.forEach((q) => _.push(q.id)), p.value && _.push("all"), v.value && v.value.length > 0)
      _.push(...v.value.filter((q) => q !== "all" && !M.has(q)));
    else {
      const q = At(s), G = Pt(s), J = Ot(s), Y = _t(s);
      G && J && Y && (Ft(s).length > 0 && _.push("faces"), xt(s).length > 0 && _.push("sides")), _.push(...q.filter((Q) => !M.has(Q)));
    }
    return Array.from(new Set(_));
  }), T = C(() => {
    const _ = 1 + t.length, M = c.value === "multiple", q = u;
    return `repeat(${_ + (M ? 1 : 0) + (q ? 1 : 0)}, max-content)`;
  }), U = (_, M) => `${s}-${_}-${a[M]}-${M}-${o}`, F = (_) => {
    const M = S(_);
    return `Delete ${s} for ${M}`;
  }, B = (_) => ({
    show: O(_),
    enabled: m(_),
    ariaLabel: F(_)
  }), Z = (_, M) => g(_, M);
  return {
    renderLocations: H($),
    gridStyle: H(T),
    getInputId: U,
    getDeleteAriaLabel: F,
    getInputConfigForLocation: L,
    getDeleteConfig: B,
    getInputTypeForLocation: Z,
    // Re-export the passed functions for consistency
    getInputType: g,
    getInputConfig: b,
    getAllInputConfig: P,
    canDelete: m,
    shouldShowDeleteButton: O,
    getLocationLabel: S
  };
};
let Te = null;
function Cs() {
  const r = j(null), s = j(null), t = j(null), a = Se([]), o = Se([]), u = Se([]), c = Se([]), p = j([]), v = j(null), A = Se([]), g = j(null), b = j(null);
  return {
    // All state
    jobId: r,
    saw: s,
    activeStockAutoId: t,
    shapeList: a,
    stockList: o,
    cutList: u,
    segmentList: c,
    offcuts: p,
    metadata: v,
    unusableShapes: A,
    currentCutIndex: g,
    activeShape: b,
    r: {
      saw: s,
      activeStockAutoId: t,
      jobId: r,
      shapeList: a,
      stockList: o,
      cutList: u,
      segmentList: c,
      offcuts: p,
      unusableShapes: A,
      metadata: v,
      currentCutIndex: g
    }
  };
}
function Us() {
  if (Te) return Te;
  const r = Cs(), s = C(() => r.activeStockAutoId.value ? Y(r.activeStockAutoId.value) : []), t = C(() => !r.activeStockAutoId.value || !r.stockList.value?.length ? null : J(r.activeStockAutoId.value)), a = C(() => !t.value || !r.cutList.value?.length ? [] : Q(t.value.autoId)), o = C(() => !t.value || !r.segmentList.value?.length ? [] : ee(r.activeStockAutoId.value)), u = C(() => r.stockList.value?.length ? se(r.stockList.value) : []), c = C(() => r.shapeList.value.filter((k) => k.added)), p = C(() => r.shapeList.value?.length ? r.shapeList.value.filter((k) => !k.added) : []), v = C(() => r.shapeList.value?.length ? rs(r.shapeList.value) : []), A = C(() => r.shapeList.value?.length ? r.shapeList.value.filter((k) => !k.duplicate) : []), g = C(() => A.value.filter((k) => k.added)), b = C(() => r.stockList.value?.length ? r.stockList.value.filter((k) => k.used && !k.duplicate) : []), P = C(() => b.value.filter((k) => k.used)), L = C(() => r.cutList.value?.length ? a.value.reduce((k, f) => k + f.area, 0) : 0), m = C(() => !r.stockList.value?.length || !t.value ? 0 : t.value ? t.value.area : 0), S = C(() => !r.shapeList.value?.length || !s.value ? 0 : s.value ? s.value.reduce((k, f) => k + f.area, 0) : 0), O = C(() => !r.cutList.value?.length || !t.value ? null : t.value.cutType), $ = C(() => r.stockList.value?.length ? r.stockList.value.filter((f) => f.used && !f.isStacked) : []), T = C(() => r.stockList.value?.length ? as(t.value, r.stockList.value) : 0), U = C(() => {
    if (!r.stockList.value?.length) return 0;
    let k = m.value ? (L.value + S.value) / m.value : null;
    return k > 1 && (k = 1), k;
  }), F = () => {
    r.saw.value = null, r.shapeList.value.length = 0, r.stockList.value.length = 0, r.cutList.value.length = 0, r.segmentList.value.length = 0, r.offcuts.value.length = 0, r.unusableShapes.value.length = 0, r.currentCutIndex.value = null;
  }, B = () => {
    r.saw.value = null, r.activeStockAutoId.value = null, r.activeShape.value = null, r.metadata.value = null, r.shapeList.value = [], r.stockList.value = [], r.cutList.value = [], r.segmentList.value = [], r.offcuts.value = [], r.currentCutIndex.value = null, r.unusableShapes.value = [];
  }, Z = (k, f) => {
    k in this && this[k]?.sort(ls[f]);
  }, _ = (k) => {
    ve(k);
  }, M = () => {
    ve(r.shapeList);
  }, q = () => {
    ve(r.stockList);
  }, G = (k) => {
    if (!k?.shapeList?.some((f) => f.added)) {
      B();
      return;
    }
    r.metadata.value = k.metadata, r.unusableShapes.value = k.unusableShapes || [];
    try {
      k?.saw && (r.saw.value = new is(k.saw));
      const f = os(k, {
        preventAutoRotation: !0
      });
      r.stockList.value = f.stockList, r.shapeList.value = f.shapeList, r.cutList.value = f.cutList, r.segmentList.value = f.segmentList, r.offcuts.value = f.offcuts, ["saw", "stockList", "shapeList", "cutList", "segmentList"].forEach((x) => ve(r[x])), r.activeStockAutoId.value = se(r.stockList.value)?.[0]?.autoId || null;
    } catch (f) {
      console.error("Error updating from result", f);
    }
  }, J = (k) => r.stockList.value?.length ? r.stockList.value.find((f) => f.autoId === k) : null, Y = (k) => r.shapeList.value?.length ? r.shapeList.value.filter((f) => f.added && f?.stock?.autoId === k) : [], ee = (k) => r.segmentList.value?.length ? r.segmentList.value.filter((y) => y?.stock?.autoId === k) : [], Q = (k) => {
    const f = r?.cutList?.value;
    return !f && !f.length ? [] : f.filter((y) => y?.stock?.autoId === k).sort((y, x) => y?.guillotineState?.order - x?.guillotineState?.order);
  }, se = (k) => k?.length ? k.filter((f) => f.used === !0) : [], ne = (k) => {
    r.activeStockAutoId.value !== k && (r.activeShape.value = null, r.activeStockAutoId.value = k);
  };
  return Te = {
    // all result items for convenience
    r: r.r,
    // state
    activeStockAutoId: r.activeStockAutoId,
    saw: r.saw,
    shapeList: r.shapeList,
    stockList: r.stockList,
    cutList: r.cutList,
    segmentList: r.segmentList,
    offcuts: r.offcuts,
    unusableShapes: r.unusableShapes,
    currentCutIndex: r.currentCutIndex,
    activeShape: r.activeShape,
    // computed
    addedShapes: c,
    activeShapes: s,
    unplacedShapes: p,
    uniqueShapes: A,
    uniqueAddedShapes: g,
    unplacedShapeTally: v,
    uniqueStock: b,
    uniqueUsedStock: P,
    activeStock: t,
    activeCuts: a,
    activeCutsArea: L,
    activeCutType: O,
    usedStock: u,
    stackedStock: $,
    activeStockArea: m,
    activeShapeArea: S,
    activeStockStackCount: T,
    activeTotalArea: U,
    activeSegments: o,
    // methods
    reset: F,
    clear: B,
    sortItems: Z,
    update: _,
    updateShapes: M,
    updateStock: q,
    updateFromResult: G,
    getStock: J,
    getShapes: Y,
    getSegments: ee,
    getCuts: Q,
    setActiveStockAutoId: ne
  }, Te;
}
const te = j(null);
let ws = 0;
function Ds(r) {
  const s = r || `action-menu-${++ws}-${Date.now()}`, t = C({
    get: () => te.value === s,
    set: (g) => {
      g ? te.value = s : te.value === s && (te.value = null);
    }
  }), a = () => {
    te.value = s;
  }, o = () => {
    te.value === s && (te.value = null);
  }, u = () => {
    te.value = null;
  }, c = () => {
    t.value = !t.value;
  }, p = C(() => te.value !== null), v = C(() => te.value), A = C(() => te.value === s);
  return {
    // Instance-specific
    id: H(j(s)),
    isOpen: t,
    open: a,
    close: o,
    toggle: c,
    isThisMenuOpen: A,
    // Global singleton state (shared across all instances)
    closeAll: u,
    isAnyMenuOpen: p,
    currentOpenMenuId: v
  };
}
function As() {
  const r = Date.now(), s = Math.random().toString(36).substring(2, 15), t = Math.random().toString(36).substring(2, 15);
  return `${r.toString(36)}-${s}-${t}`;
}
const fe = j([]), Os = 6;
function Ks() {
  const r = ({
    message: t,
    type: a = "info",
    additional: o = [],
    options: u = {},
    action: c = () => {
    }
  }) => {
    Array.isArray(o) || (console.warn("addNotice - additional must be an array"), o = []);
    const p = {
      id: As(),
      message: qe(t),
      additional: o.length > 5 ? o.slice(0, 5).map((A) => qe(A)).join("<br>") + "<br>..." : o.slice(0, 5).map((A) => qe(A)).join("<br>"),
      type: a,
      persistent: u.persistent || !1,
      timestamp: /* @__PURE__ */ new Date(),
      action: c
    }, v = u.maxNotices ?? Os;
    if (fe.value.length >= v) {
      const A = fe.value.findIndex((g) => !g.persistent);
      if (A !== -1)
        fe.value.splice(A, 1);
      else if (!p.persistent)
        return console.warn("Cannot add new notice: maximum limit reached and all existing notices are persistent"), p.id;
    }
    return fe.value.push(p), !p.persistent && u.timeout !== 0 && setTimeout(() => s(p.id), u.timeout || 6e3), p.id;
  }, s = (t) => {
    fe.value.findIndex((o) => o.id === t) !== -1 && (fe.value = fe.value.filter((o) => o.id !== t));
  };
  return {
    notices: fe,
    addNotice: r,
    dismissNotice: s
  };
}
const kt = j({
  queued: !1,
  started: !1,
  stockCount: 0,
  shapeCount: 0,
  resultCount: 0,
  complete: !1
});
function _s() {
  return {
    progress: kt,
    reset: () => {
      kt.value = {
        queued: !1,
        started: !1,
        stockCount: 0,
        shapeCount: 0,
        resultCount: 0,
        complete: !1
      };
    }
  };
}
const Ps = ds(() => Ge({
  // Material field
  material: ce(
    De().optional(),
    {
      label: "fields.material",
      placeholder: "fields.material",
      propertyPath: "material",
      output: "string",
      group: "properties",
      order: 0
    }
  ),
  // Thickness field
  t: ce(
    hs([Ue(), De()]).optional(),
    {
      label: "fields.t",
      propertyPath: "t",
      group: "dimensions",
      order: 0,
      allowZero: !1
    }
  ),
  // Length field
  l: yt({
    label: "fields.l",
    placeholder: "fields.l",
    allowZero: !1
  }),
  // Width field
  w: yt({
    label: "fields.w",
    placeholder: "fields.w",
    allowZero: !1
  }),
  // Quantity field
  q: ce(
    Ue().int().positive().default(1),
    {
      label: "fields.q",
      placeholder: "fields.q",
      propertyPath: "q",
      group: "general",
      order: 1,
      step: 1
    }
  ),
  // Name field
  name: us({
    placeholder: "fields.name"
  }),
  // Orientation lock field
  orientationLock: ce(
    vs(["n", "l", "w"]).default("n").optional(),
    {
      label: "fields.orientationLock",
      propertyPath: "orientationLock",
      group: "properties",
      order: 3,
      options: [
        { value: "n", label: "fields.orientationLock.free" },
        { value: "l", label: "fields.orientationLock.length" },
        { value: "w", label: "fields.orientationLock.width" }
      ]
    }
  ),
  // Banding button
  banding: ce(
    xe().default(!1),
    {
      label: "fields.banding",
      propertyPath: "banding",
      group: "extras",
      order: 0
    }
  ),
  // Finish options
  finish: ce(
    Ge({
      enabled: xe().default(!1),
      type: De().optional(),
      sides: Ue().optional()
    }).optional(),
    {
      label: "fields.finish",
      propertyPath: "finish",
      group: "extras",
      order: 2
    }
  ),
  // Machining options
  machining: ce(
    Ge({
      enabled: xe().default(!1),
      operations: ps(gs()).optional()
    }).optional(),
    {
      label: "fields.machining",
      propertyPath: "machining",
      group: "extras",
      order: 3
    }
  ),
  // Planing button
  planing: ce(
    xe().default(!1),
    {
      label: "fields.planing",
      propertyPath: "planing",
      group: "extras",
      order: 4
    }
  )
  // Image upload
  /* imageUpload: field(
  	z.object( {
  		enabled: z.boolean().default( false ),
  		url: z.string().optional(),
  		file: z.any().optional()
  	} ).optional(),
  	{
  		label: 'image_upload',
  		propertyPath: 'imageUpload',
  		group: 'extras',
  		order: 4
  	}
  ) */
}));
function Fs(r) {
  const s = Ps._def.getter();
  return r === "linear" ? s.omit({
    w: !0,
    orientationLock: !0,
    banding: !0,
    machining: !0,
    planing: !0
  }) : r === "roll" ? s.omit({
    banding: !0,
    machining: !0,
    planing: !0
  }) : s;
}
class xs {
  /**
   * Generate field metadata from a Zod schema
   * @param schema - The Zod schema to extract fields from
   * @param options - Options for field generation
   */
  generateFields(s, t) {
    const a = [], o = this.unwrapSchema(s);
    if (!this.isZodObject(o))
      return console.warn("Schema is not a ZodObject:", o), a;
    const u = o.shape;
    for (const [c, p] of Object.entries(u)) {
      if (c.startsWith("_") || this.isComputedField(p))
        continue;
      if (c === "trim" && this.isTrimField(p)) {
        const A = this.generateTrimFields(p);
        a.push(...A);
        continue;
      }
      const v = this.extractFieldMetadata(c, p);
      v && a.push(v);
    }
    return t?.sortByOrder ? a.sort((c, p) => (c.order || 999) - (p.order || 999)) : a;
  }
  /**
   * Extract metadata from a single field
   */
  extractFieldMetadata(s, t) {
    let a = t._metadata;
    const o = this.unwrapField(t);
    if (a || (a = o._metadata), a) {
      if (a.hidden)
        return null;
      const v = {
        name: s,
        type: a.type || this.getFieldType(o),
        label: a.label || this.formatLabel(s),
        description: a.description,
        required: !this.isOptional(t),
        defaultValue: a.defaultValue ?? this.getDefaultValue(o),
        ...a
      };
      return this.extractTypeSpecificMetadata(v, o), v;
    }
    const u = o._def?.description, c = this.parseFieldDescription(u), p = {
      name: s,
      type: this.getFieldType(o),
      label: c.label || this.formatLabel(s),
      description: c.description,
      required: !this.isOptional(t),
      defaultValue: this.getDefaultValue(o),
      ...c
    };
    return this.extractTypeSpecificMetadata(p, o), p;
  }
  /**
   * Get the field type from a Zod schema
   */
  getFieldType(s) {
    const t = this.unwrapField(s);
    if (t instanceof bt) {
      const a = t._def?.options || [];
      for (const o of a)
        if (o instanceof Ne)
          return this.isIntegerNumber(o) ? "integer" : "number";
    }
    return t instanceof Ne ? this.isIntegerNumber(t) ? "integer" : "number" : t instanceof ms ? "string" : t instanceof ys ? "boolean" : t instanceof St || t._def?.typeName === "ZodNativeEnum" ? "enum" : t instanceof bs ? "array" : t instanceof Ee ? "object" : "string";
  }
  /**
   * Extract constraints from a ZodNumber schema
   */
  extractNumberConstraints(s, t) {
    const a = t;
    if (a.minValue !== void 0 && a.minValue !== -1 / 0) {
      s.min = a.minValue;
      const u = t._def?.checks?.find(
        (c) => c.constructor?.name === "$ZodCheckGreaterThan"
      );
      if (u && a.minValue === 0) {
        const c = u._zod?.def?.inclusive ?? u.inclusive;
        s.allowZero = c === !0;
      } else
        s.allowZero = a.minValue === 0;
    }
    a.maxValue !== void 0 && a.maxValue !== 1 / 0 && (s.max = a.maxValue);
    const o = t._def?.checks || [];
    for (const u of o) {
      let c, p, v = !0;
      if (u.kind)
        c = u.kind, p = u.value, v = u.inclusive !== void 0 ? u.inclusive : !0;
      else if (u?._zod?.def) {
        const A = u._zod.def;
        c = A.check, p = A.value, v = A.inclusive !== void 0 ? A.inclusive : !0;
      } else
        continue;
      c === "min" || c === "greater_than" ? s.min === void 0 && (s.min = c === "greater_than" && !v ? p + 1e-6 : p, s.allowZero = s.min === 0) : c === "max" || c === "less_than" ? s.max === void 0 && (s.max = c === "less_than" && !v ? p - 1e-6 : p) : c === "int" && (s.step = 1);
    }
  }
  /**
   * Extract type-specific metadata
   */
  extractTypeSpecificMetadata(s, t) {
    if (t instanceof bt) {
      const a = t._def?.options || [];
      for (const o of a)
        if (o instanceof Ne) {
          this.extractNumberConstraints(s, o), s.type = "number";
          break;
        }
    } else t instanceof Ne && this.extractNumberConstraints(s, t);
    if (!s.options) {
      if (t instanceof St) {
        const a = t._def?.values;
        Array.isArray(a) ? s.options = a.map((o) => ({
          value: o,
          label: this.formatLabel(String(o))
        })) : a ? s.options = Object.values(a).map((o) => ({
          value: o,
          label: this.formatLabel(String(o))
        })) : s.options = [];
      }
      if (t._def?.typeName === "ZodNativeEnum") {
        const a = t._def?.values || {};
        s.options = Object.entries(a).filter(([o]) => isNaN(Number(o))).map(([o, u]) => ({
          value: u,
          label: this.formatLabel(o)
        }));
      }
    }
  }
  /**
   * Parse field description for metadata
   */
  parseFieldDescription(s) {
    if (!s) return {};
    const t = {}, a = s.match(/^(.+?)\s*\[(.+?)\]\s*$/);
    if (a) {
      t.description = a[1].trim();
      const o = a[2].split(",");
      for (const u of o) {
        const [c, p] = u.split(":").map((v) => v.trim());
        c === "group" && (t.group = p), c === "order" && (t.order = parseInt(p)), c === "units" && (t.units = p), c === "hidden" && (t.hidden = p === "true"), c === "readonly" && (t.readonly = p === "true"), c === "placeholder" && (t.placeholder = p);
      }
    } else
      t.description = s;
    return t;
  }
  /**
   * Format a field name as a label
   */
  formatLabel(s) {
    return s.replace(/([A-Z])/g, " $1").replace(/^./, (t) => t.toUpperCase()).replace(/_/g, " ").trim();
  }
  /**
   * Check if a field is optional
   */
  isOptional(s) {
    if (s instanceof Ke || s instanceof ze)
      return !0;
    if (s.constructor?.name === "ZodPipe" || s._def?.type === "pipe") {
      const t = s._def?.out, a = s._def?.in;
      if (t) {
        const o = this.isOptional(t);
        if (o) return o;
      }
      if (a) {
        const o = this.isOptional(a);
        if (o) return o;
      }
    }
    return s._def?.typeName === "ZodEffects" ? this.isOptional(s._def?.schema) : s instanceof Re ? this.isOptional(s._def?.innerType) : !1;
  }
  /**
   * Check if a field is computed
   */
  isComputedField(s) {
    return s?._def?.typeName === "ZodComputed" || s?._def?.isComputed === !0;
  }
  /**
   * Unwrap schema from effects/transforms
   */
  unwrapSchema(s) {
    if (s._def?.typeName === "ZodEffects")
      return this.unwrapSchema(s._def?.schema);
    if (s._def?.typeName === "ZodLazy" || s._def?.type === "lazy") {
      const t = s._def?.getter;
      if (typeof t == "function")
        return this.unwrapSchema(t());
    }
    return s;
  }
  /**
   * Unwrap a field schema
   */
  unwrapField(s) {
    const t = s._def?.typeName, a = s.constructor.name;
    if (s instanceof Ke || s instanceof ze)
      return this.unwrapField(s._def?.innerType);
    if (s instanceof Re || a === "ZodDefault")
      return this.unwrapField(s._def?.innerType);
    if (t === "ZodEffects")
      return this.unwrapField(s._def?.schema);
    if (a === "ZodPipe" || s._def?.type === "pipe") {
      const o = s._def?.out;
      if (o)
        return this.unwrapField(o);
    }
    return s;
  }
  /**
   * Get default value from schema
   */
  getDefaultValue(s) {
    if (s instanceof Re) {
      const t = s._def?.defaultValue;
      return typeof t == "function" ? t() : t;
    }
    if (s.constructor?.name === "ZodPipe" || s._def?.type === "pipe") {
      const t = s._def?.in;
      if (t)
        return this.getDefaultValue(t);
    }
    if (s instanceof Ke || s instanceof ze) {
      const t = s._def?.innerType;
      if (t)
        return this.getDefaultValue(t);
    }
    if (s._def?.typeName === "ZodEffects") {
      const t = s._def?.schema;
      if (t)
        return this.getDefaultValue(t);
    }
    if ("_def" in s && "defaultValue" in s._def) {
      const t = s._def?.defaultValue;
      return typeof t == "function" ? t() : t;
    }
  }
  /**
   * Check if a ZodNumber schema has integer constraints
   */
  isIntegerNumber(s) {
    return s.isInt === !0 ? !0 : (s._def?.checks || []).some((a) => a.kind === "int");
  }
  /**
   * Check if schema is a ZodObject
   */
  isZodObject(s) {
    return s instanceof Ee;
  }
  /**
   * Group fields by their group metadata
   */
  groupFields(s) {
    const t = /* @__PURE__ */ new Map(), a = [];
    for (const u of s)
      u.group ? (t.has(u.group) || t.set(u.group, []), t.get(u.group).push(u)) : a.push(u);
    const o = [];
    return t.forEach((u, c) => {
      o.push({
        name: c,
        label: this.formatLabel(c),
        fields: u.sort((p, v) => (p.order || 999) - (v.order || 999))
      });
    }), a.length > 0 && o.push({
      name: "general",
      label: "General",
      fields: a.sort((u, c) => (u.order || 999) - (c.order || 999))
    }), o.sort((u, c) => (u.order || 999) - (c.order || 999));
  }
  /**
   * Check if a field is a trim object (has l1, l2, w1, w2 properties)
   */
  isTrimField(s) {
    const t = this.unwrapField(s);
    if (t instanceof Ee) {
      const a = t.shape;
      return "l1" in a && "l2" in a && "w1" in a && "w2" in a;
    }
    return !1;
  }
  /**
   * Generate individual field metadata for trim sides (l1, l2, w1, w2)
   */
  generateTrimFields(s) {
    const t = [], a = this.unwrapField(s);
    if (!(a instanceof Ee))
      return t;
    const o = a.shape, u = ["l1", "l2", "w1", "w2"];
    for (const c of u)
      if (c in o) {
        const p = o[c], v = this.extractFieldMetadata(`trim.${c}`, p);
        v && (v.propertyPath = `trim.${c}`, v.name = `trim.${c}`, v.group || (v.group = "trim"), t.push(v));
      }
    return t;
  }
}
const Ct = new xs();
function Ns(r, s = {}) {
  const t = j([]), a = j([]), o = j(/* @__PURE__ */ new Map()), u = j(/* @__PURE__ */ new Map()), c = (L) => {
    let m = Ct.generateFields(r);
    s.overrides && (m = m.map((O) => {
      const $ = s.overrides[O.name];
      if ($) {
        const T = { ...O, ...$ };
        return $.min === void 0 && O.min !== void 0 && (T.min = O.min), $.max === void 0 && O.max !== void 0 && (T.max = O.max), T;
      }
      return O;
    })), u.value.clear();
    for (const O of m)
      u.value.set(O.name, O);
    const S = L || s.allowedFieldIds;
    if (S && S.length > 0) {
      const O = S, $ = /* @__PURE__ */ new Map();
      for (const U of m)
        $.set(U.name, U);
      const T = [];
      for (const U of O) {
        const F = $.get(U);
        F && T.push(F);
      }
      m = T;
    }
    s.filter && (m = m.filter(s.filter)), t.value = m, o.value.clear();
    for (const O of m)
      o.value.set(O.name, O);
    s.grouped && (a.value = Ct.groupFields(m));
  };
  c();
  const p = (L) => o.value.get(L), v = (L) => u.value.get(L), A = () => u.value, g = (L, m) => {
    const S = o.value.get(L);
    S && Object.assign(S, m);
  }, b = (L) => {
    const m = p(L);
    return !(!m || m.hidden);
  }, P = (L) => {
    const m = p(L);
    if (!m) return {};
    const S = {};
    return m.required && (S.required = !0), m.type === "number" && (m.min !== void 0 && (S.min = m.min), m.max !== void 0 && (S.max = m.max)), S;
  };
  return {
    fields: C(() => t.value),
    groups: C(() => a.value),
    fieldMap: C(() => o.value),
    allFieldsMap: C(() => u.value),
    getField: p,
    getFieldMetadata: v,
    getAllFieldMetadata: A,
    updateField: g,
    isFieldVisible: b,
    getFieldValidation: P,
    regenerateFields: c
  };
}
function zs(r) {
  const { stockType: s, materials: t = [], minDimension: a = 0 } = r, o = Fs(s), u = {
    // Add minimum dimensions for length/width
    l: {
      min: a,
      w: "1fr"
      // Full width for length field
    },
    w: {
      min: a,
      w: "1fr"
      // Full width for width field
    },
    // Specific widths for compact fields
    material: {
      w: "minmax(20px, max-content)"
    },
    t: {
      w: "minmax(20px, max-content)"
    },
    q: {
      w: "80px"
    },
    name: {
      w: "1fr"
    },
    // Icon-sized fields for special components
    orientationLock: {
      w: "36px"
    },
    banding: {
      w: "32px"
    },
    finish: {
      w: "32px"
    },
    planing: {
      w: "32px"
    },
    machining: {
      w: "32px"
    },
    imageUpload: {
      w: "32px"
    }
  };
  return t.length > 0 && (u.material = {
    ...u.material,
    type: "enum",
    options: t.map((c) => ({ value: c.name, label: c.name })),
    defaultValue: t[0]?.name
  }), Ns(o, {
    ...r,
    overrides: { ...u, ...r.overrides }
  });
}
const { progress: me, reset: wt } = _s();
function Rs(r) {
  const s = "https://api.cutlistevo.com/";
  let t;
  const a = () => {
    t = Ss(s, {
      withCredentials: !0,
      autoConnect: !1,
      perMessageDeflate: {
        threshold: 1024
      }
    }), t.on("connect", () => {
      r.refs?.connected && (r.refs.connected.value = !0), r.callbacks?.onConnect?.();
    }), t.on("connect_error", (c) => {
      r.refs?.connected && (r.refs.connected.value = !1), r.refs?.thinking && (r.refs.thinking.value = !1), r.callbacks?.onConnectError?.(c);
    }), t.on("connect_timeout", (c) => {
      r.refs?.connected && (r.refs.connected.value = !1), r.refs?.thinking && (r.refs.thinking.value = !1), r.callbacks?.onConnectError?.(c);
    }), t.on("result", (c) => {
      me.value.complete = !0, r.callbacks?.onResult?.(c), t.disconnect();
    }), t.on("queued", () => {
      wt(), me.value.queued = !0;
    }), t.on("started", () => {
      me.value.started = !0;
    }), t.on("progress", (c) => {
      c?.data?.message === "result" ? me.value.resultCount++ : (me.value.stockCount = c.data.stockCount, me.value.shapeCount = c.data.shapeCount);
    }), t.on("user", (c) => {
      r.callbacks?.onUser?.(c);
    }), t.on("error", (c) => {
      r.refs?.thinking && (r.refs.thinking.value = !1), wt(), r.callbacks?.onError?.(c);
    });
  }, o = () => t?.disconnect(), u = () => t?.connect();
  return a(), {
    socket: t,
    connect: u,
    disconnect: o
  };
}
const Et = ["banding", "finish", "cutLength", "perPart", "partArea", "offcutArea", "rollLength", "surcharge", "machining", "stock", "custom"], Es = (r) => Et.includes(r);
function Ws(r, s) {
  const t = (g) => {
    s.log?.(g);
  }, a = (g) => (s.error?.(g), { success: !1, error: g }), o = () => {
    for (const g of Et) u(g, 0);
  }, u = (g, b) => {
    t(["setting price", g, b]);
    const { inputs: P, elements: L, setInputValue: m, formatPrice: S } = s;
    if (isNaN(b)) throw new Error("Price must be a number");
    if (!Es(g)) return;
    const $ = {
      //this should not include any extra costs
      custom: {
        visible: null,
        hidden: "smartcut-custom-price"
      },
      perPart: {
        hidden: "smartcut-per-part-price",
        visible: "per_part_price"
      },
      partArea: {
        hidden: null,
        visible: "part_area_price"
      },
      offcutArea: {
        hidden: null,
        visible: "offcut_area_price"
      },
      rollLength: {
        hidden: null,
        visible: "roll_length_price"
      },
      banding: {
        hidden: "smartcut-banding-price",
        visible: "banding_total_price"
      },
      finish: {
        hidden: "smartcut-finish-price",
        visible: "finish_total_price"
      },
      machining: {
        hidden: "smartcut-machining-price",
        visible: "machining_total_price"
      },
      surcharge: {
        hidden: "smartcut-cut-to-size-surcharge",
        visible: "surcharge_price"
      },
      cutLength: {
        hidden: "smartcut-cut-length-price",
        visible: "cut_length_price"
      },
      stock: {
        hidden: "smartcut-stock-total-price",
        visible: "stock_total_price"
      }
    }[g];
    $?.hidden && P[$.hidden] && (t(["setting hidden price", $.hidden, b]), m($.hidden, b)), $?.visible && L[$.visible] && (L[$.visible].innerText = S(b));
  }, c = (g) => {
    const { product: b, getCurrentVariationPrice: P, isQuantityPricing: L, enableAddToCart: m, setCartQuantity: S } = s;
    let O = b?.price || P(!0) || 0;
    typeof O == "string" && (O = parseFloat(O));
    const $ = r.unit_system === "imperial" ? "feet" : "meters", U = {
      full_stock: (B) => {
        if (t(["calculating cost by full sheet"]), !L()) {
          const Z = B.metadata.totalStockCost;
          return u("stock", Z), Z;
        }
        return L() && S(B.metadata.totalUsedStock), 0;
      },
      part_area: (B) => {
        t([`calculating cost by part area in square ${$}`]);
        const Z = r.unit_system === "imperial" ? 144 : 1e6, _ = B.metadata.totalPartArea / Z, M = _ * O;
        u("partArea", M), t([`part area price in square ${$} is ${_} (part area) * ${O} (product price) = ${M}`]);
        let q = M;
        if (r?.enable_offcut_pricing && B?.offcuts) {
          const J = B?.offcuts.reduce((ee, Q) => {
            const se = Q.l >= Q.w ? Q.l : Q.w, ne = Q.l >= Q.w ? Q.w : Q.l;
            return se < r.offcut_min_length || ne < r.offcut_min_width ? ee + se * ne : ee;
          }, 0) / Z, Y = J * O;
          u("offcutArea", Y), t([`calculated sellable offcut area as ${J} square ${$}, with price ${Y}`]), q += Y;
        }
        if (t([`calculated total price as ${q}`]), L()) {
          const G = q / O;
          return t([`setting cart quantity to ${G}`]), S(G, 2), 0;
        } else
          return q;
      },
      cut_length: (B) => {
        t([`calculating cost by cut length in  ${$}`]);
        const Z = r.unit_system === "imperial" ? 12 : 1e3, _ = B.metadata.totalCutLength / Z;
        return S(_, 2), 0;
      },
      full_stock_plus_cut_length: (B) => {
        t(["calculating cost by full sheet plus cut length"]);
        let Z = 0;
        const _ = B.metadata.totalStockCost;
        u("stock", _), Z = _, L() && S(B.metadata.totalUsedStock);
        const M = r.unit_system === "imperial" ? 12 : 1e3, G = B.metadata.totalCutLength / M * r.cut_length_price;
        return u("cutLength", G), Z + G;
      },
      full_stock_plus_num_parts: (B) => {
        t(["calculating cost by full sheet plus number of parts"]);
        let Z = 0;
        const _ = B.metadata.totalStockCost;
        u("stock", _), Z = _, L() && S(B.metadata.totalUsedStock);
        const M = B.metadata.totalPartsProduced * r.per_part_price;
        return u("perPart", M), Z + M;
      },
      roll_length: (B) => {
        t([`calculating cost by roll length in ${$}`]);
        const Z = r.unit_system === "imperial" ? 12 : 1e3, _ = B.stock.reduce((M, q) => M + q.analysis.rollLength / Z * cs({ v: q.cost }), 0);
        return u("rollLength", _), _;
      }
    }[r.pricing_strategy], F = U(g);
    return m(), F;
  }, p = (g) => {
    const {
      isExtraEnabled: b,
      isMachiningEnabled: P,
      isSurchargeEnabled: L,
      inputType: m,
      getTotalBandingPrice: S,
      getTotalFinishPrice: O,
      getTotalMachiningPrice: $,
      getInputValue: T
    } = s;
    let U = 0;
    if (b("banding") && g.metadata.bandingLengthByType) {
      const F = S(g.metadata.bandingLengthByType);
      u("banding", F), U += F;
    }
    if (b("finish") && g.metadata.finishAreaByType) {
      const F = O(g.metadata.finishAreaByType);
      u("finish", F), U += F;
    }
    if (m.value === "formula") {
      const F = parseFloat(T("smartcut-hardware-price"));
      isNaN(F) || (U += F);
    }
    if (P()) {
      const F = $(g);
      u("machining", F), U += F;
    }
    if (L() && r.surcharge) {
      const F = r.surcharge_type === "per_sheet" ? parseFloat(r.surcharge.toString()) * g.metadata.totalUsedStock : parseFloat(r.surcharge.toString());
      u("surcharge", F), t(["added surcharge", F]), U += F;
    }
    return U;
  }, v = (g) => {
    const { getInputValue: b, setInputValue: P } = s, L = {
      "smartcut-job-id": g.jobId,
      "smartcut-dimensions": g.parts.map((m) => `${m.l}x${m.w} [${m.q}]`).join(", "),
      "smartcut-total-cut-length": g.metadata.totalCutLength,
      "smartcut-part-area": g.metadata.totalPartArea,
      "smartcut-total-cuts": g.metadata.totalCuts,
      "smartcut-total-parts": g.metadata.totalPartsProduced,
      "smartcut-machining": g.metadata.hasMachining
    };
    if (Object.entries(L).forEach(([m, S]) => {
      b(m) !== void 0 && P(m, S);
    }), b("smartcut-stock-summary") !== void 0) {
      const m = g.stock.map((S) => `${S.l}x${S.w}${S.t ? "x" + S.t : ""} [${S.q}]`).join(", ");
      P("smartcut-stock-summary", m);
    }
  };
  return {
    calculatePrice: async (g) => {
      o();
      const { isQuantityPricing: b, selectedVariation: P, setVariationPrice: L, setCartQuantity: m } = s;
      if (!g?.jobId)
        return a("No job ID provided");
      b() || m(1);
      let S = c(g);
      const O = p(g);
      if (S += O, b()) {
        const $ = g.metadata.totalUsedStock, T = S / $;
        u("custom", T);
      } else {
        if (!g.metadata.totalStockCost)
          return a("Total stock cost not returned for a multiple size product");
        t([`total cost is ${S}`]), u("custom", S);
      }
      return P.value && L(S), v(g), { success: !0, totalPrice: S };
    },
    resetPricing: o
  };
}
function Qs(r) {
  const {
    stockOptions: s,
    config: t,
    initialState: a,
    numberFormat: o = j("decimal")
  } = r, u = j(a?.activeFilters || []), c = j(a?.searchQuery || ""), p = j(a?.sortBy || t?.value?.defaultSort.field || "cost"), v = j(a?.sortOrder || t?.value?.defaultSort.order || "asc"), A = j(a?.displayMode || t?.value?.displayMode || "grid"), g = j(a?.currentPage || 1), b = j([]);
  function P(f, y) {
    return y.split(".").reduce((x, V) => x?.[V], f);
  }
  function L(f, y) {
    return typeof f == "object" && f !== null && typeof y == "object" && y !== null && "hex" in f && "hex" in y ? f.hex === y.hex : f === y;
  }
  function m(f, y) {
    const x = P(f, y.field);
    switch (y.type) {
      case "select":
        return L(x, y.value);
      case "multiselect":
        return Array.isArray(y.value) ? y.value.some((V) => L(x, V)) : L(x, y.value);
      case "range":
        if (y.value && typeof y.value == "object") {
          const { min: V, max: I } = y.value, W = Number(x);
          return !(isNaN(W) || V !== void 0 && W < V || I !== void 0 && W > I);
        }
        return !1;
      case "boolean":
        return !!x == !!y.value;
      case "search":
        return !0;
      default:
        return !0;
    }
  }
  function S(f, y) {
    if (!y.trim()) return !0;
    const x = y.toLowerCase();
    return [
      f.name,
      f.material,
      f.description,
      f.category,
      ...f.tags || []
    ].some((I) => I && String(I).toLowerCase().includes(x));
  }
  const O = C(() => {
    let f = [...s.value];
    c.value && (f = f.filter((y) => S(y, c.value)));
    for (const y of u.value)
      f = f.filter((x) => m(x, y));
    return f;
  }), $ = C(() => {
    const f = [...O.value];
    return f.sort((y, x) => {
      const V = P(y, p.value), I = P(x, p.value);
      if (V == null && I == null) return 0;
      if (V == null) return 1;
      if (I == null) return -1;
      let W = 0;
      return typeof V == "string" && typeof I == "string" ? W = V.localeCompare(I) : typeof V == "number" && typeof I == "number" ? W = V - I : W = String(V).localeCompare(String(I)), v.value === "asc" ? W : -W;
    }), f;
  }), T = C(() => {
    const f = t?.value?.itemsPerPage || 20, y = (g.value - 1) * f, x = y + f;
    return $.value.slice(y, x);
  }), U = C(() => {
    const f = t?.value?.itemsPerPage || 20;
    return Math.ceil($.value.length / f);
  });
  function F(f, y, x = "select") {
    B(f), u.value.push({ field: f, value: y, type: x }), g.value = 1;
  }
  function B(f) {
    u.value = u.value.filter((y) => y.field !== f);
  }
  function Z() {
    u.value = [], c.value = "", g.value = 1;
  }
  function _(f, y) {
    p.value = f, y ? v.value = y : v.value = v.value === "asc" ? "desc" : "asc", g.value = 1;
  }
  function M(f) {
    c.value = f, g.value = 1;
  }
  function q(f) {
    f >= 1 && f <= U.value && (g.value = f);
  }
  function G(f) {
    const y = f.id || `${f.material}-${f.l}-${f.w}-${f.t}`, x = b.value.indexOf(y);
    return x === -1 ? t?.value?.maxSelection && b.value.length >= t.value.maxSelection ? !1 : (b.value.push(y), !0) : (b.value.splice(x, 1), !1);
  }
  function J(f) {
    const y = f.id || `${f.material}-${f.l}-${f.w}-${f.t}`;
    return b.value.includes(y);
  }
  const Y = C(() => s.value.filter((f) => J(f)));
  function ee() {
    b.value = [];
  }
  function Q(f) {
    const {
      ...y
    } = f;
    return new fs(y, o.value);
  }
  function se(f) {
    if (f === "color") {
      const x = /* @__PURE__ */ new Map();
      return s.value.forEach((V) => {
        const I = P(V, f);
        I != null && (typeof I == "object" && "hex" in I ? x.has(I.hex) || x.set(I.hex, I) : typeof I == "string" && (x.has(I) || x.set(I, I)));
      }), Array.from(x.values()).sort((V, I) => {
        const W = typeof V == "object" && "name" in V ? V.name : String(V), Le = typeof I == "object" && "name" in I ? I.name : String(I);
        return W.localeCompare(Le);
      });
    }
    const y = /* @__PURE__ */ new Set();
    return s.value.forEach((x) => {
      const V = P(x, f);
      V != null && y.add(V);
    }), Array.from(y).sort();
  }
  function ne(f) {
    const y = s.value.map((x) => Number(P(x, f))).filter((x) => !isNaN(x));
    return y.length === 0 ? null : {
      min: Math.min(...y),
      max: Math.max(...y)
    };
  }
  const k = C(() => ({
    activeFilters: u.value,
    searchQuery: c.value,
    sortBy: p.value,
    sortOrder: v.value,
    displayMode: A.value,
    currentPage: g.value,
    selectedStockIds: b.value
  }));
  return {
    // State
    activeFilters: u,
    searchQuery: c,
    sortBy: p,
    sortOrder: v,
    displayMode: A,
    currentPage: g,
    selectedStockIds: b,
    // Computed
    filteredStock: O,
    sortedStock: $,
    paginatedStock: T,
    selectedStock: Y,
    totalPages: U,
    currentState: k,
    // Methods
    applyFilter: F,
    removeFilter: B,
    clearFilters: Z,
    updateSort: _,
    updateSearch: M,
    goToPage: q,
    toggleStockSelection: G,
    isStockSelected: J,
    clearSelection: ee,
    createInputStock: Q,
    getUniqueValues: se,
    getFieldRange: ne
  };
}
export {
  Us as a,
  Ds as b,
  Zs as c,
  qs as d,
  Gs as e,
  Ks as f,
  ge as g,
  Rs as h,
  zs as i,
  _s as j,
  Qs as k,
  Ws as l,
  js as s,
  Is as u,
  Bs as v
};

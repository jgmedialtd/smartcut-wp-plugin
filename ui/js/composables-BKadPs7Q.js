import { i as He, g as Ot, a as Ge, e as _t, b as Pt, c as Ft, d as xt, f as Nt, h as Yt, t as ue, j as mt, k as pe, l as yt, m as Xt, n as es, r as ts, o as Ue, p as ss, s as xe, q as ns, u as rs, v as as, S as is, w as os, x as ls, y as De, z as ce, A as us, B as bt, C as cs, I as fs } from "./components-zSEuX2uD.js";
import { r as j, w as Ye, c as C, Y as H, t as ve, L as Se } from "./vendor-vue-WkZl1F8L.js";
import { y as ds, o as Ke, b as Ne, a as ps, c as gs, n as ze, s as Re, _ as vs, u as hs, j as St, k as Te, q as ms, A as ys, B as Lt, C as bs, e as $e, t as We, v as Qe, w as Je } from "./vendor-zod-DtqKDYvi.js";
import { l as Ss } from "./vendor-socketio-C18vLChF.js";
let Ve = null;
if (He())
  try {
    Ve = require("~/helpers/applicationSettings").applicationSettings;
  } catch (r) {
    console.error("[useCrossPlatformStorage] Failed to load ApplicationSettings:", r);
  }
function Zs(r, s, t = {}) {
  const {
    serializer: i = {
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
  if (!He()) {
    const c = j((() => {
      try {
        if (typeof window < "u" && window.localStorage) {
          const p = localStorage.getItem(r);
          if (p)
            return i.read(p);
        }
      } catch (p) {
        console.error("[useCrossPlatformStorage] Failed to load", r, "from localStorage:", p);
      }
      return s;
    })());
    return Ye(c, (p) => {
      try {
        if (typeof window < "u" && window.localStorage) {
          const v = i.write(p);
          localStorage.setItem(r, v);
        }
      } catch (v) {
        console.error("[useCrossPlatformStorage] Failed to save", r, "to localStorage:", v);
      }
    }, { deep: !0 }), c;
  }
  if (He()) {
    if (!Ve)
      return console.error("[useCrossPlatformStorage] ApplicationSettings not available! Using in-memory fallback."), j(s);
    const c = j((() => {
      try {
        const p = Ve.getString(r);
        if (p)
          return i.read(p);
      } catch (p) {
        console.error("[useCrossPlatformStorage] Failed to load", r, "from ApplicationSettings:", p);
      }
      return s;
    })());
    return Ye(c, (p) => {
      try {
        const v = i.write(p);
        Ve.setString(r, v);
      } catch (v) {
        console.error("[useCrossPlatformStorage] Failed to save", r, "to ApplicationSettings:", v);
      }
    }, { deep: !0 }), c;
  }
  return console.warn("[useCrossPlatformStorage] No storage available for key", r, "- using in-memory fallback"), j(s);
}
const Tt = "cle-extras-config", Ls = () => {
  try {
    const r = localStorage.getItem(Tt);
    return r ? JSON.parse(r) : {};
  } catch {
    return {};
  }
}, ks = (r) => {
  try {
    localStorage.setItem(Tt, JSON.stringify(r));
  } catch {
  }
}, Le = j(Ls()), Cs = (r, s) => {
  Le.value[r] = s, ks(Le.value);
}, ge = (r) => Le.value[r] || null, ws = () => Le.value;
let kt = !1;
const As = () => {
  kt || (ns({
    getExtrasConfig: ge,
    getAllExtrasConfigs: ws,
    setExtrasConfig: Cs
  }), kt = !0);
}, qs = (r, s) => {
  const t = ge(r);
  if (!t || !t.options || t.options.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const i = t.options[0], l = Array.isArray(i) && typeof i[0] == "string" ? i : [];
  if (l.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const u = (v) => t.options.length > 1 ? v.includes("|") ? t.pricing && Object.keys(t.pricing).length > 0 ? Object.prototype.hasOwnProperty.call(t.pricing, v) ? !0 : Object.keys(t.pricing).some((b) => b.startsWith(v + "|") || b === v) : v.split("|").every((g, b) => {
    if (b >= t.options.length) return !1;
    const P = t.options[b];
    return Array.isArray(P) && typeof P[0] == "string" && P.includes(g);
  }) : t.options.some((A) => Array.isArray(A) && typeof A[0] == "string" && A.includes(v)) : l.includes(v), c = /* @__PURE__ */ new Set();
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
}, Gs = (r) => {
  As();
  const {
    shape: s,
    extraType: t,
    allOptions: i,
    labels: l,
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
    const e = ge(t), n = e?.options || i, o = e?.labels || l;
    Yt(s.value, t, n, o, p.value);
  };
  O(), Ye(
    () => s.value?.extras?.[t],
    (e) => {
      if (e) {
        const n = e?.sides || {}, o = e?.options?.sides || {};
        let a = !1;
        for (const [d, h] of Object.entries(n))
          if (typeof h == "string") {
            if (h.includes("|") && !o[d]) {
              a = !0;
              break;
            } else if (h !== "" && !o[d]) {
              a = !0;
              break;
            }
          }
        a && O();
      }
    },
    { immediate: !1 }
  );
  const T = C(() => Le.value[t] || null), N = C(() => {
    const n = T.value?.options || i;
    if (n.length > 1)
      return "multiple";
    const a = (n[0] || []).filter((M) => typeof M == "string"), d = (p.value || []).filter((M) => typeof M == "string"), E = Array.from(/* @__PURE__ */ new Set([...a, ...d])).length;
    return E === 0 ? "boolean" : E === 1 ? "single" : "multiple";
  }), D = C(() => Ot(t)), F = C(() => g.value && g.value.length > 0 ? g.value.filter((e) => e !== "all" && e !== "faces" && e !== "sides") : D.value), B = C(() => F.value.filter((e) => Ge(e) === "face")), q = C(() => F.value.filter((e) => Ge(e) === "side")), _ = C(() => _t(t)), V = C(() => Pt(t)), G = C(() => Ft(t)), U = () => T.value?.options && T.value.options.length > 1, J = (e, n, o) => {
    const { singleOption: a = he(), operation: d } = o;
    switch (n) {
      case "boolean":
        return !!e;
      case "single":
        return a ? d === "process" || d === "set" ? e && a ? a : "" : e === a ? a : "" : !!e;
      case "multiple":
        return e || "";
      default:
        return e;
    }
  }, Y = (e, n, o) => J(n, o, { operation: "process" }), ee = (e, n, o, a, d, h) => {
    switch (h) {
      case "boolean":
        xe(e, n, o, a, !!d);
        break;
      case "single": {
        const E = he();
        xe(e, n, o, a, d ? E : "");
        break;
      }
      case "multiple":
        xe(e, n, o, a, d || "");
        break;
    }
  }, W = (e, n, o = {}) => {
    const a = o.singleOption || he();
    return o.allowCustomNames, J(e, n, {
      operation: "get",
      singleOption: a
    });
  }, se = (e, n, o, a) => {
    switch (a) {
      case "boolean":
        return !!e;
      case "single": {
        const d = he();
        if (d) {
          const h = n.map((w) => pe(s.value, t, w, o)), E = h.every((w) => w === d || w === !0), M = h.every((w) => !w || w === "");
          return E ? d : M ? "" : null;
        }
        return !!e;
      }
      case "multiple":
        return typeof e == "string" ? e : e || "";
      default:
        return e;
    }
  }, ne = (e, n, o, a = !1) => {
    if (a)
      e.forEach((d) => x(d, n, o));
    else {
      const d = l[n] || "", h = Y(d, o, N.value);
      e.forEach((E) => {
        ee(s.value, t, E, d, h, N.value);
      });
    }
  }, k = (e, n) => {
    if (U()) {
      const o = l[n] || "", a = e.map((M) => {
        const w = pe(s.value, t, M, o);
        return w === !0 ? ie(n)[0] || "" : String(w || "");
      }), d = a[0] || "";
      return a.every((M) => M === d) ? d : null;
    } else {
      const o = l[n] || "";
      if (N.value === "single") {
        const d = he();
        if (d) {
          const h = e.map((w) => pe(s.value, t, w, o)), E = h.every((w) => w === d || w === !0), M = h.every((w) => !w || w === "");
          return E ? d : M ? "" : null;
        }
      }
      const a = yt(s.value, t, e, o, N.value);
      return N.value === "multiple" && a === !1 && e.every((h) => {
        const E = pe(s.value, t, h, o, N.value);
        return E === "" || E === !1 || E === null || E === void 0;
      }) ? "" : a;
    }
  }, f = (e) => {
    const { location: n, locationType: o = "single", optionIndex: a, stateValue: d, isAggregate: h = !1, customLabel: E } = e, M = ie(a), w = M.length > 1 ? "select" : "checkbox", Q = h ? ae(a, E || o) : ae(a, n), Z = N.value === "multiple" && Q.length === 1 && v;
    if (Z && Q[0]) {
      if (h) {
        let le = [];
        o === "all" ? le = F.value : o === "faces" ? le = B.value : o === "sides" ? le = q.value : n && X(n) && (le = re(n)), le.forEach((vt) => {
          const ht = $(vt, a);
          (!ht || ht !== Q[0]) && x(vt, a, Q[0]);
        });
      } else if (n) {
        const le = $(n, a);
        (!le || le !== Q[0]) && x(n, a, Q[0]);
      }
    }
    const z = N.value === "multiple" && (Q.length === 0 || Z), K = d !== void 0 ? d : n ? $(n, a) : null, de = w === "select" ? ft(n || o, a) : void 0, oe = w === "checkbox" && M.length === 1 ? M[0] : void 0;
    let Ze, qe;
    return w === "checkbox" && M.length === 1 && (Ze = M[0], qe = ""), {
      inputType: w,
      // Alias for backward compatibility
      type: w,
      value: K,
      options: de,
      disabled: z,
      label: oe,
      indeterminate: K === null && w === "checkbox",
      trueValue: Ze,
      falseValue: qe
    };
  }, y = (e, n, o) => f({
    locationType: e,
    optionIndex: n,
    stateValue: o,
    isAggregate: !0
  }), x = (e, n, o) => {
    const a = l[n] || "";
    if (U()) {
      const d = be(e, n);
      let h;
      if (d === "checkbox") {
        const M = ie(n)[0];
        h = o ? M : "";
      } else
        h = o || "";
      xe(s.value, t, e, a, h);
    } else
      ee(s.value, t, e, a, o, N.value);
  }, $ = (e, n) => {
    const o = l[n] || "";
    if (U()) {
      const a = pe(s.value, t, e, o);
      if (be(e, n) === "checkbox") {
        const E = ie(n)[0];
        return a === !0 || a === E ? E : "";
      } else
        return a || "";
    } else {
      const a = pe(s.value, t, e, o, N.value);
      return W(a, N.value);
    }
  }, I = (e, n) => {
    ne(F.value, e, n, U());
  }, R = (e) => {
    if (U()) {
      const n = l[e] || "", o = F.value.map((h) => {
        const E = pe(s.value, t, h, n);
        return E === !0 ? ie(e)[0] || "" : String(E || "");
      }), a = o[0] || "";
      return o.every((h) => h === a) ? a : null;
    } else {
      const n = l[e] || "", o = yt(s.value, t, F.value, n, N.value);
      return se(o, F.value, n, N.value);
    }
  }, ke = () => {
    Ue(s.value, t, F.value, N.value);
  }, Ce = (e) => e === "faces" ? {
    locations: B.value,
    isSupported: _.value
  } : {
    locations: q.value,
    isSupported: V.value
  }, Xe = (e, n, o) => {
    const { locations: a, isSupported: d } = Ce(e);
    d && ne(a, n, o, U());
  }, Me = (e, n) => {
    const { locations: o, isSupported: a } = Ce(e);
    return a ? k(o, n) : null;
  }, et = (e) => {
    const { locations: n, isSupported: o } = Ce(e);
    o && Ue(s.value, t, n, N.value);
  }, tt = (e, n) => {
    const { isSupported: o } = Ce(e);
    if (!o) return { type: "checkbox", value: !1 };
    const a = Me(e, n);
    return y(e, n, a);
  }, Ie = (e, n) => {
    Xe("faces", e, n);
  }, je = (e, n) => {
    Xe("sides", e, n);
  }, we = (e) => Me("faces", e), Ae = (e) => Me("sides", e), st = () => {
    et("faces");
  }, nt = () => {
    et("sides");
  }, ye = (e) => b.value.find((n) => n.id === e), X = (e) => ["all", "faces", "sides"].includes(e) ? !1 : !e.includes("."), re = (e) => {
    const n = ye(e);
    return n ? n.locations.filter((o) => F.value.includes(o)) : [];
  }, rt = (e, n, o) => {
    const a = re(e);
    a.length !== 0 && (a.forEach((d) => x(d, n, o)), ve(s));
  }, Oe = (e, n) => {
    const o = re(e);
    if (o.length === 0) return null;
    const a = k(o, n);
    return !U() && (a === null || a === !1 || a === "") ? "" : a;
  }, Et = (e) => {
    const n = re(e);
    n.length !== 0 && Ue(s.value, t, n, N.value);
  }, Vt = (e, n) => {
    const o = Oe(e, n), a = ye(e);
    return f({
      location: e,
      optionIndex: n,
      stateValue: o,
      isAggregate: !0,
      customLabel: a?.label
    });
  }, at = (e) => {
    ss(s.value, t, e, N.value);
  }, it = (e) => e === "all" ? F.value.some((n) => !!$(n, 0)) : e === "faces" && _.value ? B.value.some((n) => !!$(n, 0)) : e === "sides" && V.value ? q.value.some((n) => !!$(n, 0)) : X(e) ? re(e).some((o) => !!$(o, 0)) : F.value.includes(e) ? !!$(e, 0) : !1, _e = (e) => {
    if (e === "all") return ue("general.all");
    if (e === "faces") return `${ue("general.all")} ${ue("machining.face_other")}`;
    if (e === "sides") return `${ue("general.all")} ${ue("woodwork.edge_other")}`;
    if (X(e)) {
      const a = ye(e);
      if (a) return a.label;
    }
    if (e.startsWith("face.")) {
      const d = `faces.${e.replace("face.", "")}`;
      return ue(d);
    }
    if (e.startsWith("side.")) {
      const d = `sides.${e.replace("side.", "")}`;
      return ue(d);
    }
    const n = `fields.${e}`, o = ue(n);
    return o !== n ? o : u?.[e] ? u[e] : e;
  }, be = (e, n) => N.value === "boolean" ? "checkbox" : ie(n).length > 1 ? "select" : "checkbox", ot = (e, n) => f({
    location: e,
    optionIndex: n,
    isAggregate: !1
  }), lt = (e) => {
    const n = R(e);
    return y("all", e, n);
  }, ut = (e) => tt("faces", e), ct = (e) => tt("sides", e), Mt = (e, n) => {
    const o = t === "banding" && e === "side.l1";
    o && console.log(`[getInputConfigForLocation] location=${e}, optionIndex=${n}`);
    let a;
    return e === "all" ? a = lt(n) : e === "faces" ? a = ut(n) : e === "sides" ? a = ct(n) : X(e) ? a = Vt(e, n) : a = ot(e, n), o && console.log("[getInputConfigForLocation] result config:", a), a;
  }, ae = (e, n) => {
    const d = (ge(t)?.options || i)[e];
    if (!d || d[0] === !0)
      return [];
    const h = n && typeof n == "string" && (n.startsWith("face.") || n.startsWith("side.")), E = n && typeof n == "string" && X(n), M = !h && (n === "all" || n === "faces" || n === "sides" || E);
    if (Array.isArray(d) && d.length === 1 && typeof d[0] == "string" && !(v && P && (h || M) && e > 0))
      return d;
    if (v && P && h) {
      const Z = [];
      if (e > 0)
        for (let z = 0; z < e; z++) {
          const K = $(n, z);
          if (typeof K == "string" && K)
            Z.push(K);
          else if (typeof K == "boolean")
            Z.push(K);
          else {
            const de = ge(t), oe = mt(s.value, t, n);
            return oe && typeof oe == "object" && !Array.isArray(oe) && Object.keys(oe).length > 1 && de?.options[e] ? de.options[e] : [];
          }
        }
      return P(A, Z, e);
    }
    if (v && P && M) {
      const Z = [];
      if (e > 0)
        for (let z = 0; z < e; z++) {
          let K;
          if (n === "all" ? K = R(z) : n === "faces" ? K = we(z) : n === "sides" ? K = Ae(z) : E && typeof n == "string" && (K = Oe(n, z)), typeof K == "string" && K)
            Z.push(K);
          else if (typeof K == "boolean")
            Z.push(K);
          else
            return [];
        }
      return P(A, Z, e);
    }
    const w = d, Q = c ? (p.value || []).filter((Z) => typeof Z == "string") : [];
    return [.../* @__PURE__ */ new Set([...w, ...Q])];
  }, ft = (e, n) => {
    const a = ge(t)?.options[n] || [];
    t === "banding" && console.log(`[getSelectOptions] location=${e}, options available:`, a);
    const h = c && p.value ? p.value.filter((Z) => typeof Z == "string") : [], E = [.../* @__PURE__ */ new Set([...a, ...h])], M = ae(n, e), w = new Set(M);
    return E.map((Z) => ({
      value: Z,
      label: Z,
      disabled: !w.has(Z)
    }));
  }, he = () => {
    const e = ae(0);
    return e.length === 1 ? e[0] : void 0;
  }, It = (e) => {
    const n = ae(e);
    return n.length === 1 ? n[0] : void 0;
  }, ie = (e) => {
    const n = ge(t);
    let o = [];
    if (n?.options && n.options[e] && Array.isArray(n.options[e])) {
      const d = n.options[e];
      Array.isArray(d) && d.every((h) => typeof h == "string") && (o = d);
    }
    const a = c && p.value ? p.value.filter((d) => typeof d == "string") : [];
    return [.../* @__PURE__ */ new Set([...o, ...a])];
  }, jt = (e, n = 0) => {
    if (e === "all" || e === "faces" || e === "sides")
      return "";
    if (X(e)) {
      const a = ye(e);
      return a?.price !== void 0 && Oe(e, n) ? S ? S(a.price) : a.price.toString() : "";
    }
    if (!v || !L)
      return "";
    if (!F.value.includes(e))
      return "N/A";
    const o = L(s.value, t, e, m);
    return o ? S ? S(o) : o.toString() : "N/A";
  }, Bt = (e) => !v || !L ? !1 : L(s.value, t, e, m), Pe = C(() => F.value.length > 1), Fe = C(() => D.value.length > 1), dt = () => {
    if (g.value && g.value.length > 0) {
      const a = [];
      return b.value && b.value.length > 0 && b.value.forEach((d) => a.push(d.id)), a.push(...g.value), a;
    }
    const e = [];
    b.value && b.value.length > 0 && b.value.forEach((a) => e.push(a.id)), Pe.value && e.push("all"), Fe.value && (xt(t).length > 0 && e.push("faces"), Nt(t).length > 0 && e.push("sides"));
    const n = /* @__PURE__ */ new Set();
    b.value && b.value.length > 0 && b.value.forEach((a) => {
      a.hideIndividualLocations && a.locations.forEach((d) => n.add(d));
    });
    const o = D.value.filter((a) => !n.has(a));
    return e.push(...o), e;
  }, Zt = () => N.value === "multiple", qt = () => {
    const e = 1 + i.length, n = N.value === "multiple", o = v, a = e + (n ? 1 : 0) + (o ? 1 : 0);
    return {
      columns: a,
      style: `repeat(${a}, max-content)`
    };
  }, Be = (e) => e === "all" ? "all" : e === "faces" ? "faces" : e === "sides" ? "sides" : "individual", pt = (e) => Ge(e), Gt = (e) => {
    if (e === "all")
      return Pe.value;
    if (X(e))
      return ye(e) ? re(e).length > 0 : !1;
    if (g.value && g.value.length > 0)
      return g.value.includes(e);
    const n = Be(e);
    return n === "all" ? Pe.value : n === "faces" || n === "sides" ? n === "faces" && _.value && B.value.length > 0 || n === "sides" && V.value && q.value.length > 0 ? Fe.value : !1 : D.value.includes(e);
  }, Ut = (e) => {
    ts(e, t, p);
  }, Dt = (e) => {
    es([s.value], t, e, l);
  }, Kt = (e) => {
    Xt([s.value], t, e);
  }, zt = (e, n, o) => {
    if (e === "all")
      I(n, o);
    else if (e === "faces")
      Ie(n, o);
    else if (e === "sides")
      je(n, o);
    else if (X(e)) {
      let d = o;
      if (!U() && typeof o == "boolean") {
        const h = ie(n);
        h.length === 1 && (d = o ? h[0] : "");
      }
      if (!U() && d) {
        const h = re(e), E = new Set(h);
        b.value && (b.value.forEach((M) => {
          M.id !== e && re(M.id).filter((Z) => !E.has(Z)).forEach((Z) => {
            x(Z, n, "");
          });
        }), ve(s));
      }
      rt(e, n, d);
    } else
      x(e, n, o), U() || ve(s);
    const a = l.length;
    for (let d = n + 1; d < a; d++) {
      let h;
      if (e === "all" ? h = R(d) : e === "faces" ? h = we(d) : e === "sides" ? h = Ae(d) : X(e) ? h = Oe(e, d) : h = $(e, d), !h) {
        console.groupEnd();
        continue;
      }
      const E = ae(d, e);
      let M = !1;
      if (typeof h == "string" ? M = E.includes(h) : typeof h == "boolean" && h === !0 && (M = E.length > 0), !M) {
        const w = be(e, d) === "checkbox" ? !1 : "";
        e === "all" ? I(d, w) : e === "faces" ? Ie(d, w) : e === "sides" ? je(d, w) : X(e) ? rt(e, d, w) : x(e, d, w);
      }
      console.groupEnd();
    }
  }, Rt = (e, n = !0) => n && !confirm(`Delete ${t} for ${_e(e)}?`) ? !1 : (e === "all" ? ke() : e === "faces" ? st() : e === "sides" ? nt() : X(e) ? Et(e) : at(e), !0), Wt = () => {
    const e = s.value[t], n = s.value[`${t}Options`];
    return !(!e || typeof e != "object" || !n || typeof n != "object" || _.value && (!("faces" in e) || !("faces" in n)) || V.value && (!("sides" in e) || !("sides" in n)));
  }, Qt = () => {
    const e = [], n = s.value[t], o = s.value[`${t}Options`];
    return !n || typeof n != "object" ? e.push(`Missing or invalid ${t} property in shape`) : (_.value && !("faces" in n) && e.push(`Missing faces property in ${t}`), V.value && !("sides" in n) && e.push(`Missing sides property in ${t}`)), !o || typeof o != "object" ? e.push(`Missing or invalid ${t}Options property in shape`) : (_.value && !("faces" in o) && e.push(`Missing faces property in ${t}Options`), V.value && !("sides" in o) && e.push(`Missing sides property in ${t}Options`)), e;
  }, gt = (e) => {
    const n = [];
    if (!e || !Object.keys(e).length)
      return { valid: !0, errors: n };
    const o = Object.keys(e), a = Math.max(...o.map((d) => d.split("|").length));
    if (a <= 1)
      return { valid: !0, errors: n };
    for (const d of F.value) {
      let h;
      if (U()) {
        const w = mt(s.value, t, d);
        w && typeof w == "object" && !Array.isArray(w) ? h = l.map((Z) => {
          const z = w[Z];
          if (z === !0) {
            const K = l.indexOf(Z);
            return ie(K)[0] || "";
          }
          return String(z || "");
        }).join("|") : h = "";
      } else {
        const w = $(d, 0);
        h = typeof w == "string" ? w : "";
      }
      if (!h || h === "")
        continue;
      const E = h.includes("|") ? h.split("|") : [h], M = E.filter((w) => w.trim() !== "").length;
      if (M > 0 && M < a) {
        const w = E.join("|"), Q = o.some((z) => z.startsWith(w + "|")), Z = o.includes(w);
        if (Q && !Z) {
          const z = a - M, K = E.filter((oe) => oe.trim() !== "").join(", "), de = _e(d);
          n.push(`${t} selection incomplete for ${de}. Selected: "${K}" but ${z} more level${z > 1 ? "s" : ""} required.`);
        }
      }
    }
    return { valid: n.length === 0, errors: n };
  }, Jt = (e) => gt(e).errors, Ht = C(() => dt().map((e) => ({
    location: e,
    label: _e(e),
    isAggregate: ["all", "faces", "sides"].includes(e) || X(e)
  })));
  return {
    // State - provide raw computed refs for other composables
    mode: N,
    // Raw computed ref (not readonly wrapped)
    allLocations: H(F),
    faceLocations: H(B),
    sideLocations: H(q),
    shouldShowAll: Pe,
    // Raw computed ref (not readonly wrapped)
    shouldShowGroupControls: H(Fe),
    renderLocations: H(Ht),
    // Expose computed renderLocations
    // Support flags
    supportsFaces: H(_),
    supportsSides: H(V),
    supportsBoth: H(G),
    // Core operations
    setValue: x,
    getValue: $,
    setAll: I,
    getAll: R,
    getAllState: R,
    // Alias for backward compatibility
    deleteSingle: at,
    deleteAll: ke,
    canDelete: it,
    // Group-specific operations
    setAllFaces: Ie,
    setAllSides: je,
    getAllFaces: we,
    getAllSides: Ae,
    deleteAllFaces: st,
    deleteAllSides: nt,
    // UI helpers
    getLocationLabel: _e,
    getInputType: be,
    getInputConfig: ot,
    getAllInputConfig: lt,
    getAllFacesInputConfig: ut,
    getAllSidesInputConfig: ct,
    getInputConfigForLocation: Mt,
    getSelectOptions: ft,
    getSingleOptionLabel: It,
    // Pricing
    getPriceDisplay: jt,
    getCalculatedPrice: Bt,
    // Layout & rendering
    getRenderLocations: dt,
    shouldShowDeleteButton: Zt,
    getGridConfig: qt,
    getLocationGroup: Be,
    getLocationScope: pt,
    isLocationVisible: Gt,
    // Options management
    getAvailableOptions: ae,
    getSingleAvailableOption: he,
    // Initialization & migration
    initialize: O,
    initializeExtra: O,
    // Alias for backward compatibility
    initializeCustomNames: Ut,
    migrateToSingle: Dt,
    migrateToBoolean: Kt,
    // Event handlers
    handleInputChange: zt,
    handleDelete: Rt,
    // Validation
    validateShape: Wt,
    getValidationErrors: Qt,
    validateIncompleteSelections: gt,
    getIncompleteSelectionErrors: Jt,
    // Debug helpers (development only)
    getDebugInfo: (e, n) => ({
      mode: N.value,
      location: e,
      optionIndex: n,
      value: F.value.includes(e) ? $(e, n) : "N/A",
      inputType: be(e, n),
      canDelete: it(e),
      allState: R(n),
      availableOptions: ae(n),
      locationGroup: Be(e),
      config: T.value,
      supportsFaces: _.value,
      supportsSides: V.value,
      supportsBoth: G.value,
      ..._.value && {
        allFacesState: we(n)
      },
      ...V.value && {
        allSidesState: Ae(n)
      },
      ...F.value.includes(e) && {
        locationScope: pt(e)
      }
    })
  };
}, Us = (r) => {
  const {
    customNames: s,
    usedNames: t,
    allowCustomNames: i,
    getSelectOptions: l,
    onCustomNameAdded: u,
    onCustomNameDeleted: c
  } = r, p = j(""), v = C(() => i && p.value?.trim()), A = C(() => !i || !s.value || s.value.length === 0 || s.value.length === 1 && s.value[0] === !0 ? !0 : s.value.filter((m) => typeof m == "string").every((m) => t.value.includes(m))), g = C(() => {
    const L = [];
    if (i && s.value && s.value.length > 0) {
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
    if (l("", 0).map((S) => S.value).includes(L)) {
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
}, Ds = (r) => {
  const {
    extraType: s,
    allOptions: t,
    labels: i,
    shapeIndex: l,
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
  } = r, T = C(() => {
    const _ = [], V = /* @__PURE__ */ new Set();
    if (A.value && A.value.length > 0 && A.value.forEach((G) => {
      G.hideIndividualLocations && G.locations.forEach((U) => V.add(U));
    }), A.value && A.value.length > 0 && A.value.forEach((G) => _.push(G.id)), p.value && _.push("all"), v.value && v.value.length > 0)
      _.push(...v.value.filter((G) => G !== "all" && !V.has(G)));
    else {
      const G = Ot(s), U = Ft(s), J = _t(s), Y = Pt(s);
      U && J && Y && (xt(s).length > 0 && _.push("faces"), Nt(s).length > 0 && _.push("sides")), _.push(...G.filter((W) => !V.has(W)));
    }
    return Array.from(new Set(_));
  }), N = C(() => {
    const _ = 1 + t.length, V = c.value === "multiple", G = u;
    return `repeat(${_ + (V ? 1 : 0) + (G ? 1 : 0)}, max-content)`;
  }), D = (_, V) => `${s}-${_}-${i[V]}-${V}-${l}`, F = (_) => {
    const V = S(_);
    return `Delete ${s} for ${V}`;
  }, B = (_) => ({
    show: O(_),
    enabled: m(_),
    ariaLabel: F(_)
  }), q = (_, V) => g(_, V);
  return {
    renderLocations: H(T),
    gridStyle: H(N),
    getInputId: D,
    getDeleteAriaLabel: F,
    getInputConfigForLocation: L,
    getDeleteConfig: B,
    getInputTypeForLocation: q,
    // Re-export the passed functions for consistency
    getInputType: g,
    getInputConfig: b,
    getAllInputConfig: P,
    canDelete: m,
    shouldShowDeleteButton: O,
    getLocationLabel: S
  };
};
let Ee = null;
function Os() {
  const r = j(null), s = j(null), t = j(null), i = Se([]), l = Se([]), u = Se([]), c = Se([]), p = j([]), v = j(null), A = Se([]), g = j(null), b = j(null);
  return {
    // All state
    jobId: r,
    saw: s,
    activeStockAutoId: t,
    shapeList: i,
    stockList: l,
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
      shapeList: i,
      stockList: l,
      cutList: u,
      segmentList: c,
      offcuts: p,
      unusableShapes: A,
      metadata: v,
      currentCutIndex: g
    }
  };
}
function Ks() {
  if (Ee) return Ee;
  const r = Os(), s = C(() => r.activeStockAutoId.value ? Y(r.activeStockAutoId.value) : []), t = C(() => !r.activeStockAutoId.value || !r.stockList.value?.length ? null : J(r.activeStockAutoId.value)), i = C(() => !t.value || !r.cutList.value?.length ? [] : W(t.value.autoId)), l = C(() => !t.value || !r.segmentList.value?.length ? [] : ee(r.activeStockAutoId.value)), u = C(() => r.stockList.value?.length ? se(r.stockList.value) : []), c = C(() => r.shapeList.value.filter((k) => k.added)), p = C(() => r.shapeList.value?.length ? r.shapeList.value.filter((k) => !k.added) : []), v = C(() => r.shapeList.value?.length ? rs(r.shapeList.value) : []), A = C(() => r.shapeList.value?.length ? r.shapeList.value.filter((k) => !k.duplicate) : []), g = C(() => A.value.filter((k) => k.added)), b = C(() => r.stockList.value?.length ? r.stockList.value.filter((k) => k.used && !k.duplicate) : []), P = C(() => b.value.filter((k) => k.used)), L = C(() => r.cutList.value?.length ? i.value.reduce((k, f) => k + f.area, 0) : 0), m = C(() => !r.stockList.value?.length || !t.value ? 0 : t.value ? t.value.area : 0), S = C(() => !r.shapeList.value?.length || !s.value ? 0 : s.value ? s.value.reduce((k, f) => k + f.area, 0) : 0), O = C(() => !r.cutList.value?.length || !t.value ? null : t.value.cutType), T = C(() => r.stockList.value?.length ? r.stockList.value.filter((f) => f.used && !f.isStacked) : []), N = C(() => r.stockList.value?.length ? as(t.value, r.stockList.value) : 0), D = C(() => {
    if (!r.stockList.value?.length) return 0;
    let k = m.value ? (L.value + S.value) / m.value : null;
    return k > 1 && (k = 1), k;
  }), F = () => {
    r.saw.value = null, r.shapeList.value.length = 0, r.stockList.value.length = 0, r.cutList.value.length = 0, r.segmentList.value.length = 0, r.offcuts.value.length = 0, r.unusableShapes.value.length = 0, r.currentCutIndex.value = null;
  }, B = () => {
    r.saw.value = null, r.activeStockAutoId.value = null, r.activeShape.value = null, r.metadata.value = null, r.shapeList.value = [], r.stockList.value = [], r.cutList.value = [], r.segmentList.value = [], r.offcuts.value = [], r.currentCutIndex.value = null, r.unusableShapes.value = [];
  }, q = (k, f) => {
    k in this && this[k]?.sort(ls[f]);
  }, _ = (k) => {
    ve(k);
  }, V = () => {
    ve(r.shapeList);
  }, G = () => {
    ve(r.stockList);
  }, U = (k) => {
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
  }, J = (k) => r.stockList.value?.length ? r.stockList.value.find((f) => f.autoId === k) : null, Y = (k) => r.shapeList.value?.length ? r.shapeList.value.filter((f) => f.added && f?.stock?.autoId === k) : [], ee = (k) => r.segmentList.value?.length ? r.segmentList.value.filter((y) => y?.stock?.autoId === k) : [], W = (k) => {
    const f = r?.cutList?.value;
    return !f && !f.length ? [] : f.filter((y) => y?.stock?.autoId === k).sort((y, x) => y?.guillotineState?.order - x?.guillotineState?.order);
  }, se = (k) => k?.length ? k.filter((f) => f.used === !0) : [], ne = (k) => {
    r.activeStockAutoId.value !== k && (r.activeShape.value = null, r.activeStockAutoId.value = k);
  };
  return Ee = {
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
    activeCuts: i,
    activeCutsArea: L,
    activeCutType: O,
    usedStock: u,
    stackedStock: T,
    activeStockArea: m,
    activeShapeArea: S,
    activeStockStackCount: N,
    activeTotalArea: D,
    activeSegments: l,
    // methods
    reset: F,
    clear: B,
    sortItems: q,
    update: _,
    updateShapes: V,
    updateStock: G,
    updateFromResult: U,
    getStock: J,
    getShapes: Y,
    getSegments: ee,
    getCuts: W,
    setActiveStockAutoId: ne
  }, Ee;
}
const te = j(null);
let _s = 0;
function zs(r) {
  const s = r || `action-menu-${++_s}-${Date.now()}`, t = C({
    get: () => te.value === s,
    set: (g) => {
      g ? te.value = s : te.value === s && (te.value = null);
    }
  }), i = () => {
    te.value = s;
  }, l = () => {
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
    open: i,
    close: l,
    toggle: c,
    isThisMenuOpen: A,
    // Global singleton state (shared across all instances)
    closeAll: u,
    isAnyMenuOpen: p,
    currentOpenMenuId: v
  };
}
function Ps() {
  const r = Date.now(), s = Math.random().toString(36).substring(2, 15), t = Math.random().toString(36).substring(2, 15);
  return `${r.toString(36)}-${s}-${t}`;
}
const fe = j([]), Fs = 6;
function Rs() {
  const r = ({
    message: t,
    type: i = "info",
    additional: l = [],
    options: u = {},
    action: c = () => {
    }
  }) => {
    Array.isArray(l) || (console.warn("addNotice - additional must be an array"), l = []);
    const p = {
      id: Ps(),
      message: De(t),
      additional: l.length > 5 ? l.slice(0, 5).map((A) => De(A)).join("<br>") + "<br>..." : l.slice(0, 5).map((A) => De(A)).join("<br>"),
      type: i,
      persistent: u.persistent || !1,
      timestamp: /* @__PURE__ */ new Date(),
      action: c
    }, v = u.maxNotices ?? Fs;
    if (fe.value.length >= v) {
      const A = fe.value.findIndex((g) => !g.persistent);
      if (A !== -1)
        fe.value.splice(A, 1);
      else if (!p.persistent)
        return console.warn("Cannot add new notice: maximum limit reached and all existing notices are persistent"), p.id;
    }
    return fe.value.push(p), !p.persistent && u.timeout !== 0 && setTimeout(() => s(p.id), u.timeout || 6e3), p.id;
  }, s = (t) => {
    fe.value.findIndex((l) => l.id === t) !== -1 && (fe.value = fe.value.filter((l) => l.id !== t));
  };
  return {
    notices: fe,
    addNotice: r,
    dismissNotice: s
  };
}
const Ct = j({
  queued: !1,
  started: !1,
  stockCount: 0,
  shapeCount: 0,
  resultCount: 0,
  complete: !1
});
function xs() {
  return {
    progress: Ct,
    reset: () => {
      Ct.value = {
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
const Ns = ds(() => Ke({
  // Material field
  material: ce(
    Re().optional(),
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
    hs([ze(), Re()]).optional(),
    {
      label: "fields.t",
      propertyPath: "t",
      group: "dimensions",
      order: 0,
      allowZero: !1
    }
  ),
  // Length field
  l: bt({
    label: "fields.l",
    placeholder: "fields.l",
    allowZero: !1
  }),
  // Width field
  w: bt({
    label: "fields.w",
    placeholder: "fields.w",
    allowZero: !1
  }),
  // Quantity field
  q: ce(
    ze().int().positive().default(1),
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
    Ne().default(!1),
    {
      label: "fields.banding",
      propertyPath: "banding",
      group: "extras",
      order: 0
    }
  ),
  // Finish options
  finish: ce(
    Ke({
      enabled: Ne().default(!1),
      type: Re().optional(),
      sides: ze().optional()
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
    Ke({
      enabled: Ne().default(!1),
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
    Ne().default(!1),
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
function Ts(r) {
  const s = Ns._def.getter();
  return r === "linear" ? s.omit({
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
class $s {
  /**
   * Generate field metadata from a Zod schema
   * @param schema - The Zod schema to extract fields from
   * @param options - Options for field generation
   */
  generateFields(s, t) {
    const i = [], l = this.unwrapSchema(s);
    if (!this.isZodObject(l))
      return console.warn("Schema is not a ZodObject:", l), i;
    const u = l.shape;
    for (const [c, p] of Object.entries(u)) {
      if (c.startsWith("_") || this.isComputedField(p))
        continue;
      if (c === "trim" && this.isTrimField(p)) {
        const A = this.generateTrimFields(p);
        i.push(...A);
        continue;
      }
      const v = this.extractFieldMetadata(c, p);
      v && i.push(v);
    }
    return t?.sortByOrder ? i.sort((c, p) => (c.order || 999) - (p.order || 999)) : i;
  }
  /**
   * Extract metadata from a single field
   */
  extractFieldMetadata(s, t) {
    let i = t._metadata;
    const l = this.unwrapField(t);
    if (i || (i = l._metadata), i) {
      if (i.hidden)
        return null;
      const v = {
        name: s,
        type: i.type || this.getFieldType(l),
        label: i.label || this.formatLabel(s),
        description: i.description,
        required: !this.isOptional(t),
        defaultValue: i.defaultValue ?? this.getDefaultValue(l),
        ...i
      };
      return this.extractTypeSpecificMetadata(v, l), v;
    }
    const u = l._def?.description, c = this.parseFieldDescription(u), p = {
      name: s,
      type: this.getFieldType(l),
      label: c.label || this.formatLabel(s),
      description: c.description,
      required: !this.isOptional(t),
      defaultValue: this.getDefaultValue(l),
      ...c
    };
    return this.extractTypeSpecificMetadata(p, l), p;
  }
  /**
   * Get the field type from a Zod schema
   */
  getFieldType(s) {
    const t = this.unwrapField(s);
    if (t instanceof St) {
      const i = t._def?.options || [];
      for (const l of i)
        if (l instanceof Te)
          return this.isIntegerNumber(l) ? "integer" : "number";
    }
    return t instanceof Te ? this.isIntegerNumber(t) ? "integer" : "number" : t instanceof ms ? "string" : t instanceof ys ? "boolean" : t instanceof Lt || t._def?.typeName === "ZodNativeEnum" ? "enum" : t instanceof bs ? "array" : t instanceof $e ? "object" : "string";
  }
  /**
   * Extract constraints from a ZodNumber schema
   */
  extractNumberConstraints(s, t) {
    const i = t;
    if (i.minValue !== void 0 && i.minValue !== -1 / 0) {
      s.min = i.minValue;
      const u = t._def?.checks?.find(
        (c) => c.constructor?.name === "$ZodCheckGreaterThan"
      );
      if (u && i.minValue === 0) {
        const c = u._zod?.def?.inclusive ?? u.inclusive;
        s.allowZero = c === !0;
      } else
        s.allowZero = i.minValue === 0;
    }
    i.maxValue !== void 0 && i.maxValue !== 1 / 0 && (s.max = i.maxValue);
    const l = t._def?.checks || [];
    for (const u of l) {
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
    if (t instanceof St) {
      const i = t._def?.options || [];
      for (const l of i)
        if (l instanceof Te) {
          this.extractNumberConstraints(s, l), s.type = "number";
          break;
        }
    } else t instanceof Te && this.extractNumberConstraints(s, t);
    if (!s.options) {
      if (t instanceof Lt) {
        const i = t._def?.values;
        Array.isArray(i) ? s.options = i.map((l) => ({
          value: l,
          label: this.formatLabel(String(l))
        })) : i ? s.options = Object.values(i).map((l) => ({
          value: l,
          label: this.formatLabel(String(l))
        })) : s.options = [];
      }
      if (t._def?.typeName === "ZodNativeEnum") {
        const i = t._def?.values || {};
        s.options = Object.entries(i).filter(([l]) => isNaN(Number(l))).map(([l, u]) => ({
          value: u,
          label: this.formatLabel(l)
        }));
      }
    }
  }
  /**
   * Parse field description for metadata
   */
  parseFieldDescription(s) {
    if (!s) return {};
    const t = {}, i = s.match(/^(.+?)\s*\[(.+?)\]\s*$/);
    if (i) {
      t.description = i[1].trim();
      const l = i[2].split(",");
      for (const u of l) {
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
    if (s instanceof We || s instanceof Qe)
      return !0;
    if (s.constructor?.name === "ZodPipe" || s._def?.type === "pipe") {
      const t = s._def?.out, i = s._def?.in;
      if (t) {
        const l = this.isOptional(t);
        if (l) return l;
      }
      if (i) {
        const l = this.isOptional(i);
        if (l) return l;
      }
    }
    return s._def?.typeName === "ZodEffects" ? this.isOptional(s._def?.schema) : s instanceof Je ? this.isOptional(s._def?.innerType) : !1;
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
    const t = s._def?.typeName, i = s.constructor.name;
    if (s instanceof We || s instanceof Qe)
      return this.unwrapField(s._def?.innerType);
    if (s instanceof Je || i === "ZodDefault")
      return this.unwrapField(s._def?.innerType);
    if (t === "ZodEffects")
      return this.unwrapField(s._def?.schema);
    if (i === "ZodPipe" || s._def?.type === "pipe") {
      const l = s._def?.out;
      if (l)
        return this.unwrapField(l);
    }
    return s;
  }
  /**
   * Get default value from schema
   */
  getDefaultValue(s) {
    if (s instanceof Je) {
      const t = s._def?.defaultValue;
      return typeof t == "function" ? t() : t;
    }
    if (s.constructor?.name === "ZodPipe" || s._def?.type === "pipe") {
      const t = s._def?.in;
      if (t)
        return this.getDefaultValue(t);
    }
    if (s instanceof We || s instanceof Qe) {
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
    return s.isInt === !0 ? !0 : (s._def?.checks || []).some((i) => i.kind === "int");
  }
  /**
   * Check if schema is a ZodObject
   */
  isZodObject(s) {
    return s instanceof $e;
  }
  /**
   * Group fields by their group metadata
   */
  groupFields(s) {
    const t = /* @__PURE__ */ new Map(), i = [];
    for (const u of s)
      u.group ? (t.has(u.group) || t.set(u.group, []), t.get(u.group).push(u)) : i.push(u);
    const l = [];
    return t.forEach((u, c) => {
      l.push({
        name: c,
        label: this.formatLabel(c),
        fields: u.sort((p, v) => (p.order || 999) - (v.order || 999))
      });
    }), i.length > 0 && l.push({
      name: "general",
      label: "General",
      fields: i.sort((u, c) => (u.order || 999) - (c.order || 999))
    }), l.sort((u, c) => (u.order || 999) - (c.order || 999));
  }
  /**
   * Check if a field is a trim object (has l1, l2, w1, w2 properties)
   */
  isTrimField(s) {
    const t = this.unwrapField(s);
    if (t instanceof $e) {
      const i = t.shape;
      return "l1" in i && "l2" in i && "w1" in i && "w2" in i;
    }
    return !1;
  }
  /**
   * Generate individual field metadata for trim sides (l1, l2, w1, w2)
   */
  generateTrimFields(s) {
    const t = [], i = this.unwrapField(s);
    if (!(i instanceof $e))
      return t;
    const l = i.shape, u = ["l1", "l2", "w1", "w2"];
    for (const c of u)
      if (c in l) {
        const p = l[c], v = this.extractFieldMetadata(`trim.${c}`, p);
        v && (v.propertyPath = `trim.${c}`, v.name = `trim.${c}`, v.group || (v.group = "trim"), t.push(v));
      }
    return t;
  }
}
const wt = new $s();
function Es(r, s = {}) {
  const t = j([]), i = j([]), l = j(/* @__PURE__ */ new Map()), u = j(/* @__PURE__ */ new Map()), c = (L) => {
    let m = wt.generateFields(r);
    s.overrides && (m = m.map((O) => {
      const T = s.overrides[O.name];
      if (T) {
        const N = { ...O, ...T };
        return T.min === void 0 && O.min !== void 0 && (N.min = O.min), T.max === void 0 && O.max !== void 0 && (N.max = O.max), N;
      }
      return O;
    })), u.value.clear();
    for (const O of m)
      u.value.set(O.name, O);
    const S = L || s.allowedFieldIds;
    if (S && S.length > 0) {
      const O = S, T = /* @__PURE__ */ new Map();
      for (const D of m)
        T.set(D.name, D);
      const N = [];
      for (const D of O) {
        const F = T.get(D);
        F && N.push(F);
      }
      m = N;
    }
    s.filter && (m = m.filter(s.filter)), t.value = m, l.value.clear();
    for (const O of m)
      l.value.set(O.name, O);
    s.grouped && (i.value = wt.groupFields(m));
  };
  c();
  const p = (L) => l.value.get(L), v = (L) => u.value.get(L), A = () => u.value, g = (L, m) => {
    const S = l.value.get(L);
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
    groups: C(() => i.value),
    fieldMap: C(() => l.value),
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
function Ws(r) {
  const { stockType: s, materials: t = [], minDimension: i = 0 } = r, l = Ts(s), u = {
    // Add minimum dimensions for length/width
    l: {
      min: i,
      w: "1fr"
      // Full width for length field
    },
    w: {
      min: i,
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
  }), Es(l, {
    ...r,
    overrides: { ...u, ...r.overrides }
  });
}
const { progress: me, reset: At } = xs();
function Qs(r) {
  const s = "https://api.cutlistevo.com/";
  let t;
  const i = () => {
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
      At(), me.value.queued = !0;
    }), t.on("started", () => {
      me.value.started = !0;
    }), t.on("progress", (c) => {
      c?.data?.message === "result" ? me.value.resultCount++ : (me.value.stockCount = c.data.stockCount, me.value.shapeCount = c.data.shapeCount);
    }), t.on("user", (c) => {
      r.callbacks?.onUser?.(c);
    }), t.on("error", (c) => {
      r.refs?.thinking && (r.refs.thinking.value = !1), At(), r.callbacks?.onError?.(c);
    });
  }, l = () => t?.disconnect(), u = () => t?.connect();
  return i(), {
    socket: t,
    connect: u,
    disconnect: l
  };
}
const $t = ["banding", "finish", "cutLength", "perPart", "partArea", "offcutArea", "rollLength", "surcharge", "machining", "stock", "custom"], Vs = (r) => $t.includes(r);
function Js(r, s) {
  const t = (g) => {
    s.log?.(g);
  }, i = (g) => (s.error?.(g), { success: !1, error: g }), l = () => {
    for (const g of $t) u(g, 0);
  }, u = (g, b) => {
    t(["setting price", g, b]);
    const { inputs: P, elements: L, setInputValue: m, formatPrice: S } = s;
    if (isNaN(b)) throw new Error("Price must be a number");
    if (!Vs(g)) return;
    const T = {
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
    T?.hidden && P[T.hidden] && (t(["setting hidden price", T.hidden, b]), m(T.hidden, b)), T?.visible && L[T.visible] && (L[T.visible].innerText = S(b));
  }, c = (g) => {
    const { product: b, getCurrentVariationPrice: P, isQuantityPricing: L, enableAddToCart: m, setCartQuantity: S } = s;
    let O = b?.price || P(!0) || 0;
    typeof O == "string" && (O = parseFloat(O));
    const T = r.unit_system === "imperial" ? "feet" : "meters", D = {
      full_stock: (B) => {
        if (t(["calculating cost by full sheet"]), !L()) {
          const q = B.metadata.totalStockCost;
          return u("stock", q), q;
        }
        return L() && S(B.metadata.totalUsedStock), 0;
      },
      part_area: (B) => {
        t([`calculating cost by part area in square ${T}`]);
        const q = r.unit_system === "imperial" ? 144 : 1e6, _ = B.metadata.totalPartArea / q, V = _ * O;
        u("partArea", V), t([`part area price in square ${T} is ${_} (part area) * ${O} (product price) = ${V}`]);
        let G = V;
        if (r?.enable_offcut_pricing && B?.offcuts) {
          const J = B?.offcuts.reduce((ee, W) => {
            const se = W.l >= W.w ? W.l : W.w, ne = W.l >= W.w ? W.w : W.l;
            return se < r.offcut_min_length || ne < r.offcut_min_width ? ee + se * ne : ee;
          }, 0) / q, Y = J * O;
          u("offcutArea", Y), t([`calculated sellable offcut area as ${J} square ${T}, with price ${Y}`]), G += Y;
        }
        if (t([`calculated total price as ${G}`]), L()) {
          const U = G / O;
          return t([`setting cart quantity to ${U}`]), S(U, 2), 0;
        } else
          return G;
      },
      cut_length: (B) => {
        t([`calculating cost by cut length in  ${T}`]);
        const q = r.unit_system === "imperial" ? 12 : 1e3, _ = B.metadata.totalCutLength / q;
        return S(_, 2), 0;
      },
      full_stock_plus_cut_length: (B) => {
        t(["calculating cost by full sheet plus cut length"]);
        let q = 0;
        const _ = B.metadata.totalStockCost;
        u("stock", _), q = _, L() && S(B.metadata.totalUsedStock);
        const V = r.unit_system === "imperial" ? 12 : 1e3, U = B.metadata.totalCutLength / V * r.cut_length_price;
        return u("cutLength", U), q + U;
      },
      full_stock_plus_num_parts: (B) => {
        t(["calculating cost by full sheet plus number of parts"]);
        let q = 0;
        const _ = B.metadata.totalStockCost;
        u("stock", _), q = _, L() && S(B.metadata.totalUsedStock);
        const V = B.metadata.totalPartsProduced * r.per_part_price;
        return u("perPart", V), q + V;
      },
      roll_length: (B) => {
        t([`calculating cost by roll length in ${T}`]);
        const q = r.unit_system === "imperial" ? 12 : 1e3, _ = B.stock.reduce((V, G) => V + G.analysis.rollLength / q * cs({ v: G.cost }), 0);
        return u("rollLength", _), _;
      }
    }[r.pricing_strategy], F = D(g);
    return m(), F;
  }, p = (g) => {
    const {
      isExtraEnabled: b,
      isMachiningEnabled: P,
      isSurchargeEnabled: L,
      inputType: m,
      getTotalBandingPrice: S,
      getTotalFinishPrice: O,
      getTotalMachiningPrice: T,
      getInputValue: N
    } = s;
    let D = 0;
    if (b("banding") && g.metadata.bandingLengthByType) {
      const F = S(g.metadata.bandingLengthByType);
      u("banding", F), D += F;
    }
    if (b("finish") && g.metadata.finishAreaByType) {
      const F = O(g.metadata.finishAreaByType);
      u("finish", F), D += F;
    }
    if (m.value === "formula") {
      const F = parseFloat(N("smartcut-hardware-price"));
      isNaN(F) || (D += F);
    }
    if (P()) {
      const F = T(g);
      u("machining", F), D += F;
    }
    if (L() && r.surcharge) {
      const F = r.surcharge_type === "per_sheet" ? parseFloat(r.surcharge.toString()) * g.metadata.totalUsedStock : parseFloat(r.surcharge.toString());
      u("surcharge", F), t(["added surcharge", F]), D += F;
    }
    return D;
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
      l();
      const { isQuantityPricing: b, selectedVariation: P, setVariationPrice: L, setCartQuantity: m } = s;
      if (!g?.jobId)
        return i("No job ID provided");
      b() || m(1);
      let S = c(g);
      const O = p(g);
      if (S += O, b()) {
        const T = g.metadata.totalUsedStock, N = S / T;
        u("custom", N);
      } else {
        if (!g.metadata.totalStockCost)
          return i("Total stock cost not returned for a multiple size product");
        t([`total cost is ${S}`]), u("custom", S);
      }
      return P.value && L(S), v(g), { success: !0, totalPrice: S };
    },
    resetPricing: l
  };
}
function Hs(r) {
  const {
    stockOptions: s,
    config: t,
    initialState: i,
    numberFormat: l = j("decimal")
  } = r, u = j(i?.activeFilters || []), c = j(i?.searchQuery || ""), p = j(i?.sortBy || t?.value?.defaultSort.field || "cost"), v = j(i?.sortOrder || t?.value?.defaultSort.order || "asc"), A = j(i?.displayMode || t?.value?.displayMode || "grid"), g = j(i?.currentPage || 1), b = j([]);
  function P(f, y) {
    return y.split(".").reduce((x, $) => x?.[$], f);
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
        return Array.isArray(y.value) ? y.value.some(($) => L(x, $)) : L(x, y.value);
      case "range":
        if (y.value && typeof y.value == "object") {
          const { min: $, max: I } = y.value, R = Number(x);
          return !(isNaN(R) || $ !== void 0 && R < $ || I !== void 0 && R > I);
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
  }), T = C(() => {
    const f = [...O.value];
    return f.sort((y, x) => {
      const $ = P(y, p.value), I = P(x, p.value);
      if ($ == null && I == null) return 0;
      if ($ == null) return 1;
      if (I == null) return -1;
      let R = 0;
      return typeof $ == "string" && typeof I == "string" ? R = $.localeCompare(I) : typeof $ == "number" && typeof I == "number" ? R = $ - I : R = String($).localeCompare(String(I)), v.value === "asc" ? R : -R;
    }), f;
  }), N = C(() => {
    const f = t?.value?.itemsPerPage || 20, y = (g.value - 1) * f, x = y + f;
    return T.value.slice(y, x);
  }), D = C(() => {
    const f = t?.value?.itemsPerPage || 20;
    return Math.ceil(T.value.length / f);
  });
  function F(f, y, x = "select") {
    B(f), u.value.push({ field: f, value: y, type: x }), g.value = 1;
  }
  function B(f) {
    u.value = u.value.filter((y) => y.field !== f);
  }
  function q() {
    u.value = [], c.value = "", g.value = 1;
  }
  function _(f, y) {
    p.value = f, y ? v.value = y : v.value = v.value === "asc" ? "desc" : "asc", g.value = 1;
  }
  function V(f) {
    c.value = f, g.value = 1;
  }
  function G(f) {
    f >= 1 && f <= D.value && (g.value = f);
  }
  function U(f) {
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
  function W(f) {
    const {
      ...y
    } = f;
    return new fs(y, l.value);
  }
  function se(f) {
    if (f === "color") {
      const x = /* @__PURE__ */ new Map();
      return s.value.forEach(($) => {
        const I = P($, f);
        I != null && (typeof I == "object" && "hex" in I ? x.has(I.hex) || x.set(I.hex, I) : typeof I == "string" && (x.has(I) || x.set(I, I)));
      }), Array.from(x.values()).sort(($, I) => {
        const R = typeof $ == "object" && "name" in $ ? $.name : String($), ke = typeof I == "object" && "name" in I ? I.name : String(I);
        return R.localeCompare(ke);
      });
    }
    const y = /* @__PURE__ */ new Set();
    return s.value.forEach((x) => {
      const $ = P(x, f);
      $ != null && y.add($);
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
    sortedStock: T,
    paginatedStock: N,
    selectedStock: Y,
    totalPages: D,
    currentState: k,
    // Methods
    applyFilter: F,
    removeFilter: B,
    clearFilters: q,
    updateSort: _,
    updateSearch: V,
    goToPage: G,
    toggleStockSelection: U,
    isStockSelected: J,
    clearSelection: ee,
    createInputStock: W,
    getUniqueValues: se,
    getFieldRange: ne
  };
}
export {
  Ks as a,
  zs as b,
  Gs as c,
  Us as d,
  Ds as e,
  Rs as f,
  ge as g,
  Qs as h,
  Ws as i,
  xs as j,
  Hs as k,
  Js as l,
  Cs as s,
  Zs as u,
  qs as v
};

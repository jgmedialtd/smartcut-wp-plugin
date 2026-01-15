import { i as rt, s as xt, a as _t, g as $t, b as Qe, e as Ft, c as Tt, d as Et, f as Nt, h as Vt, j as ss, t as me, k as yt, l as be, m as bt, n as ns, o as rs, r as as, p as Je, q as is, u as Ue, v as os, w as ls, x as us, S as cs, y as fs, z as ds, A as He, B as ue, C as ps, D as St, E as gs, F as kt, I as vs } from "./components-Bf39GJww.js";
import { r as M, w as Te, c as O, Z as ae, t as ke, L as $e } from "./vendor-vue-ChIbPezZ.js";
import { A as hs, o as Ye, b as Fe, a as ms, c as ys, n as Xe, s as et, _ as bs, u as Ss, j as wt, k as Ze, q as ks, B as ws, C as Lt, D as Ls, e as qe, t as tt, v as st, w as nt } from "./vendor-zod-PVURV34D.js";
import { l as Cs } from "./vendor-socketio-C18vLChF.js";
let De = null;
if (rt())
  try {
    De = require("~/helpers/applicationSettings").applicationSettings;
  } catch (r) {
    console.error("[useCrossPlatformStorage] Failed to load ApplicationSettings:", r);
  }
function Rs(r, s, t = {}) {
  const {
    serializer: i = {
      read: (f) => {
        try {
          return JSON.parse(f);
        } catch {
          return f;
        }
      },
      write: (f) => JSON.stringify(f)
    }
  } = t;
  if (!rt()) {
    const l = M((() => {
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
    return Te(l, (p) => {
      try {
        if (typeof window < "u" && window.localStorage) {
          const h = i.write(p);
          localStorage.setItem(r, h);
        }
      } catch (h) {
        console.error("[useCrossPlatformStorage] Failed to save", r, "to localStorage:", h);
      }
    }, { deep: !0 }), l;
  }
  if (rt()) {
    if (!De)
      return console.error("[useCrossPlatformStorage] ApplicationSettings not available! Using in-memory fallback."), M(s);
    const l = M((() => {
      try {
        const p = De.getString(r);
        if (p)
          return i.read(p);
      } catch (p) {
        console.error("[useCrossPlatformStorage] Failed to load", r, "from ApplicationSettings:", p);
      }
      return s;
    })());
    return Te(l, (p) => {
      try {
        const h = i.write(p);
        De.setString(r, h);
      } catch (h) {
        console.error("[useCrossPlatformStorage] Failed to save", r, "to ApplicationSettings:", h);
      }
    }, { deep: !0 }), l;
  }
  return console.warn("[useCrossPlatformStorage] No storage available for key", r, "- using in-memory fallback"), M(s);
}
const Mt = "cle-extras-config", As = () => {
  try {
    const r = localStorage.getItem(Mt);
    return r ? JSON.parse(r) : {};
  } catch {
    return {};
  }
}, Os = (r) => {
  try {
    localStorage.setItem(Mt, JSON.stringify(r));
  } catch {
  }
}, Ee = M(As()), Ps = (r, s) => {
  Ee.value[r] = s, Os(Ee.value);
}, Se = (r) => Ee.value[r] || null, xs = () => Ee.value;
let Ct = !1;
const _s = () => {
  Ct || (os({
    getExtrasConfig: Se,
    getAllExtrasConfigs: xs,
    setExtrasConfig: Ps
  }), Ct = !0);
}, Ds = (r, s) => {
  const t = Se(r);
  if (!t || !t.options || t.options.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const i = t.options[0], u = Array.isArray(i) && typeof i[0] == "string" ? i : [];
  if (u.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const f = (h) => t.options.length > 1 ? h.includes("|") ? t.pricing && Object.keys(t.pricing).length > 0 ? Object.prototype.hasOwnProperty.call(t.pricing, h) ? !0 : Object.keys(t.pricing).some((g) => g.startsWith(h + "|") || g === h) : h.split("|").every((G, g) => {
    if (g >= t.options.length) return !1;
    const L = t.options[g];
    return Array.isArray(L) && typeof L[0] == "string" && L.includes(G);
  }) : t.options.some((C) => Array.isArray(C) && typeof C[0] == "string" && C.includes(h)) : u.includes(h), l = /* @__PURE__ */ new Set();
  let p = 0;
  return s.forEach((h) => {
    if (!h.extras?.[r]) return;
    const C = h.extras[r].sides || {};
    Object.entries(C).forEach(([g, L]) => {
      typeof L == "string" && L && !f(L) && (l.add(L), C[g] = "", p++);
    });
    const G = h.extras[r].faces || {};
    Object.entries(G).forEach(([g, L]) => {
      typeof L == "string" && L && !f(L) && (l.add(L), G[g] = "", p++);
    });
  }), {
    cleanedCount: p,
    invalidOptions: Array.from(l)
  };
}, Ks = (r) => {
  _s();
  const {
    shape: s,
    extraType: t,
    allOptions: i,
    labels: u,
    userFriendlyFieldMap: f,
    allowCustomNames: l,
    customNames: p = M([]),
    enablePricing: h = !1,
    pricing: C,
    locations: G = M([]),
    locationGroups: g = M([]),
    orientationModel: L = 0,
    getAvailablePricingOptions: k,
    getPrice: b,
    findExtrasPrice: P,
    formatPrice: m
  } = r, N = () => {
    const e = Se(t), n = e?.options || i, o = e?.labels || u;
    ss(s.value, t, n, o, p.value);
  };
  if (N(), Te(
    () => s.value?.extras?.[t],
    (e) => {
      if (e) {
        const n = e?.sides || {}, o = e?.options?.sides || {};
        let a = !1;
        for (const [d, y] of Object.entries(n))
          if (typeof y == "string") {
            if (y.includes("|") && !o[d]) {
              a = !0;
              break;
            } else if (y !== "" && !o[d]) {
              a = !0;
              break;
            }
          }
        a && N();
      }
    },
    { immediate: !1 }
  ), xt(L)) {
    const e = s.value ? { l: s.value.l, w: s.value.w } : null;
    if (e && s.value) {
      const n = e.w > e.l, a = s.value.extras?.[t]?.sides;
      if (a) {
        const d = a.l1 || a.l2, y = a.w1 || a.w2;
        (n && d && !y || !n && y && !d) && _t(s.value, t);
      }
    }
  }
  const S = O(() => Ee.value[t] || null), F = O(() => {
    const n = S.value?.options || i;
    if (n.length > 1)
      return "multiple";
    const a = (n[0] || []).filter((B) => typeof B == "string"), d = (p.value || []).filter((B) => typeof B == "string"), V = Array.from(/* @__PURE__ */ new Set([...a, ...d])).length;
    return V === 0 ? "boolean" : V === 1 ? "single" : "multiple";
  }), R = O(() => $t(t)), A = O(() => G.value && G.value.length > 0 ? G.value.filter((e) => e !== "all" && e !== "faces" && e !== "sides") : R.value), I = O(() => A.value.filter((e) => Qe(e) === "face")), q = O(() => A.value.filter((e) => Qe(e) === "side")), U = O(() => Ft(t)), T = O(() => Tt(t)), D = O(() => Et(t)), Z = () => S.value?.options && S.value.options.length > 1, K = (e, n, o) => {
    const { singleOption: a = Ce(), operation: d } = o;
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
  }, se = (e, n, o) => K(n, o, { operation: "process" }), X = (e, n, o, a, d, y) => {
    switch (y) {
      case "boolean":
        Ue(e, n, o, a, !!d);
        break;
      case "single": {
        const V = Ce();
        Ue(e, n, o, a, d ? V : "");
        break;
      }
      case "multiple":
        Ue(e, n, o, a, d || "");
        break;
    }
  }, ie = (e, n, o = {}) => {
    const a = o.singleOption || Ce();
    return o.allowCustomNames, K(e, n, {
      operation: "get",
      singleOption: a
    });
  }, ce = (e, n, o, a) => {
    switch (a) {
      case "boolean":
        return !!e;
      case "single": {
        const d = Ce();
        if (d) {
          const y = n.map(($) => be(s.value, t, $, o)), V = y.every(($) => $ === d || $ === !0), B = y.every(($) => !$ || $ === "");
          return V ? d : B ? "" : null;
        }
        return !!e;
      }
      case "multiple":
        return typeof e == "string" ? e : e || "";
      default:
        return e;
    }
  }, w = (e, n, o, a = !1) => {
    if (a)
      e.forEach((d) => le(d, n, o));
    else {
      const d = u[n] || "", y = se(d, o, F.value);
      e.forEach((V) => {
        X(s.value, t, V, d, y, F.value);
      });
    }
  }, _ = (e, n) => {
    if (Z()) {
      const o = u[n] || "", a = e.map((B) => {
        const $ = be(s.value, t, B, o);
        return console.log(`[getStateForLocations] extraType=${t} location=${B} optionIndex=${n} optionKey=${o} columnValue=`, $), $ === !0 ? ge(n)[0] || "" : String($ || "");
      }), d = a[0] || "", y = a.every((B) => B === d), V = y ? d : null;
      return console.log(`[getStateForLocations] extraType=${t} optionIndex=${n} columnValues=`, a, "allSame=", y, "result=", V), V;
    } else {
      const o = u[n] || "";
      if (F.value === "single") {
        const d = Ce();
        if (d) {
          const y = e.map(($) => be(s.value, t, $, o)), V = y.every(($) => $ === d || $ === !0), B = y.every(($) => !$ || $ === "");
          return V ? d : B ? "" : null;
        }
      }
      const a = bt(s.value, t, e, o, F.value);
      return F.value === "multiple" && a === !1 && e.every((y) => {
        const V = be(s.value, t, y, o, F.value);
        return V === "" || V === !1 || V === null || V === void 0;
      }) ? "" : a;
    }
  }, ee = (e) => {
    const { location: n, locationType: o = "single", optionIndex: a, stateValue: d, isAggregate: y = !1, customLabel: V } = e, B = ge(a), $ = B.length > 1 ? "select" : "checkbox", J = y ? pe(a, n && Y(n) ? n : o) : pe(a, n), z = F.value === "multiple" && J.length === 1 && h;
    if (z && J[0]) {
      if (y) {
        let he = [];
        o === "all" ? he = A.value : o === "faces" ? he = I.value : o === "sides" ? he = q.value : n && Y(n) && (he = re(n)), he.forEach((ht) => {
          const mt = ne(ht, a);
          (!mt || mt !== J[0]) && le(ht, a, J[0]);
        });
      } else if (n) {
        const he = ne(n, a);
        (!he || he !== J[0]) && le(n, a, J[0]);
      }
    }
    const te = F.value === "multiple" && (J.length === 0 || z), Q = d !== void 0 ? d : n ? ne(n, a) : null, H = $ === "select" ? dt(n || o, a) : void 0, ve = $ === "checkbox" && B.length === 1 ? B[0] : void 0;
    let ze, We;
    return $ === "checkbox" && B.length === 1 && (ze = B[0], We = ""), {
      inputType: $,
      // Alias for backward compatibility
      type: $,
      value: Q,
      options: H,
      disabled: te,
      label: ve,
      indeterminate: Q === null && $ === "checkbox",
      trueValue: ze,
      falseValue: We
    };
  }, fe = (e, n, o) => ee({
    locationType: e,
    optionIndex: n,
    stateValue: o,
    isAggregate: !0
  }), le = (e, n, o) => {
    const a = u[n] || "";
    if (t === "banding" && ["side.l1", "side.l2", "side.w1", "side.w2"].includes(e)) {
      const d = s.value ? { l: s.value.l, w: s.value.w } : null;
      console.log("[setValue] extraType:", t, "location:", e, "value:", o, "dims:", d, "model:", L);
    }
    if (Z()) {
      const d = _e(e, n);
      let y;
      if (d === "checkbox") {
        const B = ge(n)[0];
        y = o ? B : "";
      } else
        y = o || "";
      Ue(s.value, t, e, a, y);
    } else
      X(s.value, t, e, a, o, F.value);
  }, ne = (e, n) => {
    const o = u[n] || "";
    if (Z()) {
      const a = be(s.value, t, e, o);
      if (_e(e, n) === "checkbox") {
        const V = ge(n)[0];
        return a === !0 || a === V ? V : "";
      } else
        return a || "";
    } else {
      const a = be(s.value, t, e, o, F.value);
      return ie(a, F.value);
    }
  }, we = (e, n) => {
    w(A.value, e, n, Z());
  }, de = (e) => {
    if (Z()) {
      const n = u[e] || "", o = A.value.map((y) => {
        const V = be(s.value, t, y, n);
        return V === !0 ? ge(e)[0] || "" : String(V || "");
      }), a = o[0] || "";
      return o.every((y) => y === a) ? a : null;
    } else {
      const n = u[e] || "", o = bt(s.value, t, A.value, n, F.value);
      return ce(o, A.value, n, F.value);
    }
  }, Oe = () => {
    Je(s.value, t, A.value, F.value);
  }, Le = (e) => e === "faces" ? {
    locations: I.value,
    isSupported: U.value
  } : {
    locations: q.value,
    isSupported: T.value
  }, Ne = (e, n, o) => {
    const { locations: a, isSupported: d } = Le(e);
    d && w(a, n, o, Z());
  }, Pe = (e, n) => {
    const { locations: o, isSupported: a } = Le(e);
    return a ? _(o, n) : null;
  }, Ve = (e) => {
    const { locations: n, isSupported: o } = Le(e);
    o && Je(s.value, t, n, F.value);
  }, Me = (e, n) => {
    const { isSupported: o } = Le(e);
    if (!o) return { type: "checkbox", value: !1 };
    const a = Pe(e, n);
    return fe(e, n, a);
  }, xe = (e, n) => {
    Ne("faces", e, n);
  }, c = (e, n) => {
    Ne("sides", e, n);
  }, v = (e) => Pe("faces", e), E = (e) => Pe("sides", e), j = () => {
    Ve("faces");
  }, x = () => {
    Ve("sides");
  }, W = (e) => g.value.find((n) => n.id === e), Y = (e) => ["all", "faces", "sides"].includes(e) ? !1 : !e.includes("."), re = (e) => {
    const n = W(e);
    return n ? n.locations.filter((o) => A.value.includes(o)) : [];
  }, at = (e, n, o) => {
    const a = re(e);
    a.length !== 0 && (a.forEach((d) => le(d, n, o)), ke(s));
  }, Ie = (e, n) => {
    const o = re(e);
    if (console.log(`[getCustomGroupState] extraType=${t} groupId=${e} optionIndex=${n} groupLocations=`, o), o.length === 0) return null;
    const a = _(o, n);
    return console.log(`[getCustomGroupState] extraType=${t} groupId=${e} optionIndex=${n} state=`, a, "isMultiColumn=", Z()), !Z() && (a === null || a === !1 || a === "") ? "" : a;
  }, jt = (e) => {
    const n = re(e);
    n.length !== 0 && Je(s.value, t, n, F.value);
  }, Bt = (e, n) => {
    const o = Ie(e, n), a = W(e);
    return ee({
      location: e,
      optionIndex: n,
      stateValue: o,
      isAggregate: !0,
      customLabel: a?.label
    });
  }, it = (e) => {
    is(s.value, t, e, F.value);
  }, ot = (e) => e === "all" ? A.value.some((n) => !!ne(n, 0)) : e === "faces" && U.value ? I.value.some((n) => !!ne(n, 0)) : e === "sides" && T.value ? q.value.some((n) => !!ne(n, 0)) : Y(e) ? re(e).some((o) => !!ne(o, 0)) : A.value.includes(e) ? !!ne(e, 0) : !1, je = (e) => {
    if (e === "all") return me("general.all");
    if (e === "faces") return `${me("general.all")} ${me("machining.face_other")}`;
    if (e === "sides") return `${me("general.all")} ${me("woodwork.edge_other")}`;
    if (Y(e)) {
      const a = W(e);
      if (a) return a.label;
    }
    if (e.startsWith("face.")) {
      const d = `faces.${e.replace("face.", "")}`;
      return me(d);
    }
    if (e.startsWith("side.")) {
      let a = e.replace("side.", "");
      (L === 1 || L === 2) && s.value && s.value.w > s.value.l && (a = { l1: "w1", l2: "w2", w1: "l1", w2: "l2" }[a] || a);
      const d = `sides.${a}`;
      return me(d);
    }
    const n = `fields.${e}`, o = me(n);
    return o !== n ? o : f?.[e] ? f[e] : e;
  }, _e = (e, n) => F.value === "boolean" ? "checkbox" : ge(n).length > 1 ? "select" : "checkbox", lt = (e, n) => ee({
    location: e,
    optionIndex: n,
    isAggregate: !1
  }), ut = (e) => {
    const n = de(e);
    return fe("all", e, n);
  }, ct = (e) => Me("faces", e), ft = (e) => Me("sides", e), Gt = (e, n) => e === "all" ? ut(n) : e === "faces" ? ct(n) : e === "sides" ? ft(n) : Y(e) ? Bt(e, n) : lt(e, n), pe = (e, n) => {
    const d = (Se(t)?.options || i)[e];
    if (!d || d[0] === !0)
      return [];
    const y = n && typeof n == "string" && (n.startsWith("face.") || n.startsWith("side.")), V = n && typeof n == "string" && Y(n), B = !y && (n === "all" || n === "faces" || n === "sides" || V);
    if (Array.isArray(d) && d.length === 1 && typeof d[0] == "string" && !(h && k && (y || B) && e > 0))
      return d;
    if (h && k && y) {
      const z = [];
      if (e > 0)
        for (let te = 0; te < e; te++) {
          const Q = ne(n, te);
          if (typeof Q == "string" && Q)
            z.push(Q);
          else if (typeof Q == "boolean")
            z.push(Q);
          else {
            const H = Se(t), ve = yt(s.value, t, n);
            return ve && typeof ve == "object" && !Array.isArray(ve) && Object.keys(ve).length > 1 && H?.options[e] ? H.options[e] : [];
          }
        }
      return k(C, z, e);
    }
    if (h && k && B) {
      console.log(`[getAvailableOptions] AGGREGATE extraType=${t} location=${n} optionIndex=${e} isCustomGroup=${V}`);
      const z = [];
      if (e > 0)
        for (let Q = 0; Q < e; Q++) {
          let H;
          if (n === "all" ? H = de(Q) : n === "faces" ? H = v(Q) : n === "sides" ? H = E(Q) : V && typeof n == "string" && (H = Ie(n, Q), console.log(`[getAvailableOptions] customGroup=${n} prevOptionIndex=${Q} value=`, H)), typeof H == "string" && H)
            z.push(H);
          else if (typeof H == "boolean")
            z.push(H);
          else
            return console.log(`[getAvailableOptions] RETURNING EMPTY - value at index ${Q} is:`, H, "type:", typeof H), [];
        }
      console.log("[getAvailableOptions] currentSelections=", z, "calling getAvailablePricingOptions with optionIndex=", e);
      const te = k(C, z, e);
      return console.log("[getAvailableOptions] result=", te), te;
    }
    const $ = d, J = l ? (p.value || []).filter((z) => typeof z == "string") : [];
    return [.../* @__PURE__ */ new Set([...$, ...J])];
  }, dt = (e, n) => {
    const a = Se(t)?.options[n] || [], d = l && p.value ? p.value.filter((J) => typeof J == "string") : [], y = [.../* @__PURE__ */ new Set([...a, ...d])], V = pe(n, e), B = new Set(V);
    return y.map((J) => ({
      value: J,
      label: J,
      disabled: !B.has(J)
    }));
  }, Ce = () => {
    const e = pe(0);
    return e.length === 1 ? e[0] : void 0;
  }, Ut = (e) => {
    const n = pe(e);
    return n.length === 1 ? n[0] : void 0;
  }, ge = (e) => {
    const n = Se(t);
    let o = [];
    if (n?.options && n.options[e] && Array.isArray(n.options[e])) {
      const d = n.options[e];
      Array.isArray(d) && d.every((y) => typeof y == "string") && (o = d);
    }
    const a = l && p.value ? p.value.filter((d) => typeof d == "string") : [];
    return [.../* @__PURE__ */ new Set([...o, ...a])];
  }, Zt = (e, n = 0) => {
    if (e === "all" || e === "faces" || e === "sides")
      return "";
    if (Y(e)) {
      const a = W(e);
      return a?.price !== void 0 && Ie(e, n) ? m ? m(a.price) : a.price.toString() : "";
    }
    if (!h || !b)
      return "";
    if (!A.value.includes(e))
      return "N/A";
    const o = b(s.value, t, e, P);
    return o ? m ? m(o) : o.toString() : "N/A";
  }, qt = (e) => !h || !b ? !1 : b(s.value, t, e, P), Be = O(() => A.value.length > 1), Ge = O(() => R.value.length > 1), pt = () => {
    if (G.value && G.value.length > 0) {
      const a = [];
      return g.value && g.value.length > 0 && g.value.forEach((d) => a.push(d.id)), a.push(...G.value), a;
    }
    const e = [];
    g.value && g.value.length > 0 && g.value.forEach((a) => e.push(a.id)), Be.value && e.push("all"), Ge.value && (Nt(t).length > 0 && e.push("faces"), Vt(t).length > 0 && e.push("sides"));
    const n = /* @__PURE__ */ new Set();
    g.value && g.value.length > 0 && g.value.forEach((a) => {
      a.hideIndividualLocations && a.locations.forEach((d) => n.add(d));
    });
    const o = R.value.filter((a) => !n.has(a));
    return e.push(...o), e;
  }, Rt = () => F.value === "multiple", Dt = () => {
    const e = 1 + i.length, n = F.value === "multiple", o = h, a = e + (n ? 1 : 0) + (o ? 1 : 0);
    return {
      columns: a,
      style: `repeat(${a}, max-content)`
    };
  }, Ke = (e) => e === "all" ? "all" : e === "faces" ? "faces" : e === "sides" ? "sides" : "individual", gt = (e) => Qe(e), Kt = (e) => {
    if (e === "all")
      return Be.value;
    if (Y(e))
      return W(e) ? re(e).length > 0 : !1;
    if (G.value && G.value.length > 0)
      return G.value.includes(e);
    const n = Ke(e);
    return n === "all" ? Be.value : n === "faces" || n === "sides" ? n === "faces" && U.value && I.value.length > 0 || n === "sides" && T.value && q.value.length > 0 ? Ge.value : !1 : R.value.includes(e);
  }, zt = (e) => {
    as(e, t, p);
  }, Wt = (e) => {
    rs([s.value], t, e, u);
  }, Qt = (e) => {
    ns([s.value], t, e);
  }, Jt = (e, n, o) => {
    if (e === "all")
      we(n, o);
    else if (e === "faces")
      xe(n, o);
    else if (e === "sides")
      c(n, o);
    else if (Y(e)) {
      let d = o;
      if (!Z() && typeof o == "boolean") {
        const y = ge(n);
        y.length === 1 && (d = o ? y[0] : "");
      }
      if (!Z() && d) {
        const y = re(e), V = new Set(y);
        g.value && (g.value.forEach((B) => {
          B.id !== e && re(B.id).filter((z) => !V.has(z)).forEach((z) => {
            le(z, n, "");
          });
        }), ke(s));
      }
      at(e, n, d);
    } else
      le(e, n, o), Z() || ke(s);
    const a = u.length;
    for (let d = n + 1; d < a; d++) {
      let y;
      if (e === "all" ? y = de(d) : e === "faces" ? y = v(d) : e === "sides" ? y = E(d) : Y(e) ? y = Ie(e, d) : y = ne(e, d), !y) {
        console.groupEnd();
        continue;
      }
      const V = pe(d, e);
      let B = !1;
      if (typeof y == "string" ? B = V.includes(y) : typeof y == "boolean" && y === !0 && (B = V.length > 0), !B) {
        const $ = _e(e, d) === "checkbox" ? !1 : "";
        e === "all" ? we(d, $) : e === "faces" ? xe(d, $) : e === "sides" ? c(d, $) : Y(e) ? at(e, d, $) : le(e, d, $);
      }
      console.groupEnd();
    }
  }, Ht = (e, n = !0) => n && !confirm(`Delete ${t} for ${je(e)}?`) ? !1 : (e === "all" ? Oe() : e === "faces" ? j() : e === "sides" ? x() : Y(e) ? jt(e) : it(e), !0), Yt = () => {
    const e = s.value[t], n = s.value[`${t}Options`];
    return !(!e || typeof e != "object" || !n || typeof n != "object" || U.value && (!("faces" in e) || !("faces" in n)) || T.value && (!("sides" in e) || !("sides" in n)));
  }, Xt = () => {
    const e = [], n = s.value[t], o = s.value[`${t}Options`];
    return !n || typeof n != "object" ? e.push(`Missing or invalid ${t} property in shape`) : (U.value && !("faces" in n) && e.push(`Missing faces property in ${t}`), T.value && !("sides" in n) && e.push(`Missing sides property in ${t}`)), !o || typeof o != "object" ? e.push(`Missing or invalid ${t}Options property in shape`) : (U.value && !("faces" in o) && e.push(`Missing faces property in ${t}Options`), T.value && !("sides" in o) && e.push(`Missing sides property in ${t}Options`)), e;
  }, vt = (e) => {
    const n = [];
    if (!e || !Object.keys(e).length)
      return { valid: !0, errors: n };
    const o = Object.keys(e), a = Math.max(...o.map((d) => d.split("|").length));
    if (a <= 1)
      return { valid: !0, errors: n };
    for (const d of A.value) {
      let y;
      if (Z()) {
        const $ = yt(s.value, t, d);
        $ && typeof $ == "object" && !Array.isArray($) ? y = u.map((z) => {
          const te = $[z];
          if (te === !0) {
            const Q = u.indexOf(z);
            return ge(Q)[0] || "";
          }
          return String(te || "");
        }).join("|") : y = "";
      } else {
        const $ = ne(d, 0);
        y = typeof $ == "string" ? $ : "";
      }
      if (!y || y === "")
        continue;
      const V = y.includes("|") ? y.split("|") : [y], B = V.filter(($) => $.trim() !== "").length;
      if (B > 0 && B < a) {
        const $ = V.join("|"), J = o.some((te) => te.startsWith($ + "|")), z = o.includes($);
        if (J && !z) {
          const te = a - B, Q = V.filter((ve) => ve.trim() !== "").join(", "), H = je(d);
          n.push(`${t} selection incomplete for ${H}. Selected: "${Q}" but ${te} more level${te > 1 ? "s" : ""} required.`);
        }
      }
    }
    return { valid: n.length === 0, errors: n };
  }, es = (e) => vt(e).errors, ts = O(() => pt().map((e) => ({
    location: e,
    label: je(e),
    isAggregate: ["all", "faces", "sides"].includes(e) || Y(e)
  })));
  return {
    // State - provide raw computed refs for other composables
    mode: F,
    // Raw computed ref (not readonly wrapped)
    allLocations: ae(A),
    faceLocations: ae(I),
    sideLocations: ae(q),
    shouldShowAll: Be,
    // Raw computed ref (not readonly wrapped)
    shouldShowGroupControls: ae(Ge),
    renderLocations: ae(ts),
    // Expose computed renderLocations
    // Support flags
    supportsFaces: ae(U),
    supportsSides: ae(T),
    supportsBoth: ae(D),
    // Core operations
    setValue: le,
    getValue: ne,
    setAll: we,
    getAll: de,
    getAllState: de,
    // Alias for backward compatibility
    deleteSingle: it,
    deleteAll: Oe,
    canDelete: ot,
    // Group-specific operations
    setAllFaces: xe,
    setAllSides: c,
    getAllFaces: v,
    getAllSides: E,
    deleteAllFaces: j,
    deleteAllSides: x,
    // UI helpers
    getLocationLabel: je,
    getInputType: _e,
    getInputConfig: lt,
    getAllInputConfig: ut,
    getAllFacesInputConfig: ct,
    getAllSidesInputConfig: ft,
    getInputConfigForLocation: Gt,
    getSelectOptions: dt,
    getSingleOptionLabel: Ut,
    // Pricing
    getPriceDisplay: Zt,
    getCalculatedPrice: qt,
    // Layout & rendering
    getRenderLocations: pt,
    shouldShowDeleteButton: Rt,
    getGridConfig: Dt,
    getLocationGroup: Ke,
    getLocationScope: gt,
    isLocationVisible: Kt,
    // Options management
    getAvailableOptions: pe,
    getSingleAvailableOption: Ce,
    // Initialization & migration
    initialize: N,
    initializeExtra: N,
    // Alias for backward compatibility
    initializeCustomNames: zt,
    migrateToSingle: Wt,
    migrateToBoolean: Qt,
    // Event handlers
    handleInputChange: Jt,
    handleDelete: Ht,
    // Validation
    validateShape: Yt,
    getValidationErrors: Xt,
    validateIncompleteSelections: vt,
    getIncompleteSelectionErrors: es,
    // Debug helpers (development only)
    getDebugInfo: (e, n) => ({
      mode: F.value,
      location: e,
      optionIndex: n,
      value: A.value.includes(e) ? ne(e, n) : "N/A",
      inputType: _e(e, n),
      canDelete: ot(e),
      allState: de(n),
      availableOptions: pe(n),
      locationGroup: Ke(e),
      config: S.value,
      supportsFaces: U.value,
      supportsSides: T.value,
      supportsBoth: D.value,
      ...U.value && {
        allFacesState: v(n)
      },
      ...T.value && {
        allSidesState: E(n)
      },
      ...A.value.includes(e) && {
        locationScope: gt(e)
      }
    })
  };
}, zs = (r) => {
  const {
    customNames: s,
    usedNames: t,
    allowCustomNames: i,
    getSelectOptions: u,
    onCustomNameAdded: f,
    onCustomNameDeleted: l
  } = r, p = M(""), h = O(() => i && p.value?.trim()), C = O(() => !i || !s.value || s.value.length === 0 || s.value.length === 1 && s.value[0] === !0 ? !0 : s.value.filter((b) => typeof b == "string").every((b) => t.value.includes(b))), G = O(() => {
    const k = [];
    if (i && s.value && s.value.length > 0) {
      if (s.value.length === 1 && s.value[0] === !0)
        return k;
      const P = [...s.value.filter((m) => typeof m == "string")].sort();
      k.push({
        id: "delete-header",
        type: "group",
        label: "Delete Type"
      }), P.forEach((m) => {
        (t.value?.includes(m) ?? !1) || k.push({
          id: `delete-${m}`,
          label: `Delete "${m}"`,
          icon: ["fass", "trash"],
          class: "del"
        });
      });
    }
    return k;
  }), g = () => {
    const k = p.value?.trim();
    if (!k) return;
    if (u("", 0).map((P) => P.value).includes(k)) {
      p.value = "";
      return;
    }
    f(k), p.value = "";
  }, L = (k) => {
    const b = k.item || k;
    if (b.id?.startsWith("delete-")) {
      const P = b.id.replace("delete-", "");
      if (t.value?.includes(P)) {
        console.warn(`Cannot delete ${r.extraType} type "${P}" - it is currently in use`);
        return;
      }
      l(P);
    }
  };
  return {
    newCustomName: p,
    canAddCustomName: ae(h),
    isActionMenuDisabled: ae(C),
    customNameActions: G,
    handleAddCustomName: g,
    handleCustomNameAction: L
  };
}, Ws = (r) => {
  const {
    extraType: s,
    allOptions: t,
    labels: i,
    shapeIndex: u,
    enablePricing: f,
    mode: l,
    shouldShowAll: p,
    locations: h,
    locationGroups: C = M([]),
    shape: G = M(null),
    orientationModel: g = 0,
    getInputType: L,
    getInputConfig: k,
    getAllInputConfig: b,
    getInputConfigForLocation: P,
    canDelete: m,
    getLocationLabel: N,
    shouldShowDeleteButton: S
  } = r, F = O(() => {
    const T = [], D = /* @__PURE__ */ new Set();
    if (C.value && C.value.length > 0 && C.value.forEach((K) => {
      K.hideIndividualLocations && K.locations.forEach((se) => D.add(se));
    }), C.value && C.value.length > 0 && C.value.forEach((K) => T.push(K.id)), p.value && T.push("all"), h.value && h.value.length > 0)
      T.push(...h.value.filter((K) => K !== "all" && !D.has(K)));
    else {
      const K = $t(s), se = Et(s), X = Ft(s), ie = Tt(s);
      se && X && ie && (Nt(s).length > 0 && T.push("faces"), Vt(s).length > 0 && T.push("sides")), T.push(...K.filter((w) => !D.has(w)));
    }
    let Z = Array.from(new Set(T));
    if ((g === 1 || g === 2) && G.value && G.value.w > G.value.l) {
      const K = ["side.l1", "side.l2", "side.w1", "side.w2"], se = Z.map((X, ie) => ({ loc: X, i: ie })).filter((X) => K.includes(X.loc));
      if (se.length > 0) {
        const X = se[0].i, ie = se.filter((_) => _.loc.includes(".w")).sort((_, ee) => _.loc.localeCompare(ee.loc)), ce = se.filter((_) => _.loc.includes(".l")).sort((_, ee) => _.loc.localeCompare(ee.loc)), w = [...ie.map((_) => _.loc), ...ce.map((_) => _.loc)];
        Z = Z.filter((_) => !K.includes(_)), Z.splice(X, 0, ...w);
      }
    }
    return Z;
  }), R = O(() => {
    const T = 1 + t.length, D = l.value === "multiple", Z = f;
    return `repeat(${T + (D ? 1 : 0) + (Z ? 1 : 0)}, max-content)`;
  }), A = (T, D) => `${s}-${T}-${i[D]}-${D}-${u}`, I = (T) => {
    const D = N(T);
    return `Delete ${s} for ${D}`;
  }, q = (T) => ({
    show: S(T),
    enabled: m(T),
    ariaLabel: I(T)
  }), U = (T, D) => L(T, D);
  return {
    renderLocations: ae(F),
    gridStyle: ae(R),
    getInputId: A,
    getDeleteAriaLabel: I,
    getInputConfigForLocation: P,
    getDeleteConfig: q,
    getInputTypeForLocation: U,
    // Re-export the passed functions for consistency
    getInputType: L,
    getInputConfig: k,
    getAllInputConfig: b,
    canDelete: m,
    shouldShowDeleteButton: S,
    getLocationLabel: N
  };
};
let Re = null;
function $s() {
  const r = M(null), s = M(null), t = M(null), i = $e([]), u = $e([]), f = $e([]), l = $e([]), p = M([]), h = M(null), C = $e([]), G = M(null), g = M(null);
  return {
    // All state
    jobId: r,
    saw: s,
    activeStockAutoId: t,
    shapeList: i,
    stockList: u,
    cutList: f,
    segmentList: l,
    offcuts: p,
    metadata: h,
    unusableShapes: C,
    currentCutIndex: G,
    activeShape: g,
    r: {
      saw: s,
      activeStockAutoId: t,
      jobId: r,
      shapeList: i,
      stockList: u,
      cutList: f,
      segmentList: l,
      offcuts: p,
      unusableShapes: C,
      metadata: h,
      currentCutIndex: G
    }
  };
}
function Qs() {
  if (Re) return Re;
  const r = $s(), s = O(() => r.activeStockAutoId.value ? K(r.activeStockAutoId.value) : []), t = O(() => !r.activeStockAutoId.value || !r.stockList.value?.length ? null : Z(r.activeStockAutoId.value)), i = O(() => !t.value || !r.cutList.value?.length ? [] : X(t.value.autoId)), u = O(() => !t.value || !r.segmentList.value?.length ? [] : se(r.activeStockAutoId.value)), f = O(() => r.stockList.value?.length ? ie(r.stockList.value) : []), l = O(() => r.shapeList.value.filter((w) => w.added)), p = O(() => r.shapeList.value?.length ? r.shapeList.value.filter((w) => !w.added) : []), h = O(() => r.shapeList.value?.length ? ls(r.shapeList.value) : []), C = O(() => r.shapeList.value?.length ? r.shapeList.value.filter((w) => !w.duplicate) : []), G = O(() => C.value.filter((w) => w.added)), g = O(() => r.stockList.value?.length ? r.stockList.value.filter((w) => w.used && !w.duplicate) : []), L = O(() => g.value.filter((w) => w.used)), k = O(() => r.cutList.value?.length ? i.value.reduce((w, _) => w + _.area, 0) : 0), b = O(() => !r.stockList.value?.length || !t.value ? 0 : t.value ? t.value.area : 0), P = O(() => !r.shapeList.value?.length || !s.value ? 0 : s.value ? s.value.reduce((w, _) => w + _.area, 0) : 0), m = O(() => !r.cutList.value?.length || !t.value ? null : t.value.cutType), N = O(() => r.stockList.value?.length ? r.stockList.value.filter((_) => _.used && !_.isStacked) : []), S = O(() => r.stockList.value?.length ? us(t.value, r.stockList.value) : 0), F = O(() => {
    if (!r.stockList.value?.length) return 0;
    let w = b.value ? (k.value + P.value) / b.value : null;
    return w > 1 && (w = 1), w;
  }), R = () => {
    r.saw.value = null, r.shapeList.value.length = 0, r.stockList.value.length = 0, r.cutList.value.length = 0, r.segmentList.value.length = 0, r.offcuts.value.length = 0, r.unusableShapes.value.length = 0, r.currentCutIndex.value = null;
  }, A = () => {
    r.saw.value = null, r.activeStockAutoId.value = null, r.activeShape.value = null, r.metadata.value = null, r.shapeList.value = [], r.stockList.value = [], r.cutList.value = [], r.segmentList.value = [], r.offcuts.value = [], r.currentCutIndex.value = null, r.unusableShapes.value = [];
  }, I = (w, _) => {
    w in this && this[w]?.sort(ds[_]);
  }, q = (w) => {
    ke(w);
  }, U = () => {
    ke(r.shapeList);
  }, T = () => {
    ke(r.stockList);
  }, D = (w) => {
    if (!w?.shapeList?.some((_) => _.added)) {
      A();
      return;
    }
    r.metadata.value = w.metadata, r.unusableShapes.value = w.unusableShapes || [];
    try {
      w?.saw && (r.saw.value = new cs(w.saw));
      const _ = fs(w, {
        preventAutoRotation: !0
      });
      r.stockList.value = _.stockList, r.shapeList.value = _.shapeList, r.cutList.value = _.cutList, r.segmentList.value = _.segmentList, r.offcuts.value = _.offcuts, ["saw", "stockList", "shapeList", "cutList", "segmentList"].forEach((fe) => ke(r[fe])), r.activeStockAutoId.value = ie(r.stockList.value)?.[0]?.autoId || null;
    } catch (_) {
      console.error("Error updating from result", _);
    }
  }, Z = (w) => r.stockList.value?.length ? r.stockList.value.find((_) => _.autoId === w) : null, K = (w) => r.shapeList.value?.length ? r.shapeList.value.filter((_) => _.added && _?.stock?.autoId === w) : [], se = (w) => r.segmentList.value?.length ? r.segmentList.value.filter((ee) => ee?.stock?.autoId === w) : [], X = (w) => {
    const _ = r?.cutList?.value;
    return !_ && !_.length ? [] : _.filter((ee) => ee?.stock?.autoId === w).sort((ee, fe) => ee?.guillotineState?.order - fe?.guillotineState?.order);
  }, ie = (w) => w?.length ? w.filter((_) => _.used === !0) : [], ce = (w) => {
    r.activeStockAutoId.value !== w && (r.activeShape.value = null, r.activeStockAutoId.value = w);
  };
  return Re = {
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
    addedShapes: l,
    activeShapes: s,
    unplacedShapes: p,
    uniqueShapes: C,
    uniqueAddedShapes: G,
    unplacedShapeTally: h,
    uniqueStock: g,
    uniqueUsedStock: L,
    activeStock: t,
    activeCuts: i,
    activeCutsArea: k,
    activeCutType: m,
    usedStock: f,
    stackedStock: N,
    activeStockArea: b,
    activeShapeArea: P,
    activeStockStackCount: S,
    activeTotalArea: F,
    activeSegments: u,
    // methods
    reset: R,
    clear: A,
    sortItems: I,
    update: q,
    updateShapes: U,
    updateStock: T,
    updateFromResult: D,
    getStock: Z,
    getShapes: K,
    getSegments: se,
    getCuts: X,
    setActiveStockAutoId: ce
  }, Re;
}
const oe = M(null);
let Fs = 0;
function Js(r) {
  const s = r || `action-menu-${++Fs}-${Date.now()}`, t = O({
    get: () => oe.value === s,
    set: (G) => {
      G ? oe.value = s : oe.value === s && (oe.value = null);
    }
  }), i = () => {
    oe.value = s;
  }, u = () => {
    oe.value === s && (oe.value = null);
  }, f = () => {
    oe.value = null;
  }, l = () => {
    t.value = !t.value;
  }, p = O(() => oe.value !== null), h = O(() => oe.value), C = O(() => oe.value === s);
  return {
    // Instance-specific
    id: ae(M(s)),
    isOpen: t,
    open: i,
    close: u,
    toggle: l,
    isThisMenuOpen: C,
    // Global singleton state (shared across all instances)
    closeAll: f,
    isAnyMenuOpen: p,
    currentOpenMenuId: h
  };
}
function Ts() {
  const r = Date.now(), s = Math.random().toString(36).substring(2, 15), t = Math.random().toString(36).substring(2, 15);
  return `${r.toString(36)}-${s}-${t}`;
}
const ye = M([]), Es = 6;
function Hs() {
  const r = ({
    message: t,
    type: i = "info",
    additional: u = [],
    options: f = {},
    action: l = () => {
    }
  }) => {
    Array.isArray(u) || (console.warn("addNotice - additional must be an array"), u = []);
    const p = {
      id: Ts(),
      message: He(t),
      additional: u.length > 5 ? u.slice(0, 5).map((C) => He(C)).join("<br>") + "<br>..." : u.slice(0, 5).map((C) => He(C)).join("<br>"),
      type: i,
      persistent: f.persistent || !1,
      timestamp: /* @__PURE__ */ new Date(),
      action: l
    }, h = f.maxNotices ?? Es;
    if (ye.value.length >= h) {
      const C = ye.value.findIndex((G) => !G.persistent);
      if (C !== -1)
        ye.value.splice(C, 1);
      else if (!p.persistent)
        return console.warn("Cannot add new notice: maximum limit reached and all existing notices are persistent"), p.id;
    }
    return ye.value.push(p), !p.persistent && f.timeout !== 0 && setTimeout(() => s(p.id), f.timeout || 6e3), p.id;
  }, s = (t) => {
    ye.value.findIndex((u) => u.id === t) !== -1 && (ye.value = ye.value.filter((u) => u.id !== t));
  };
  return {
    notices: ye,
    addNotice: r,
    dismissNotice: s
  };
}
const At = M({
  queued: !1,
  started: !1,
  stockCount: 0,
  shapeCount: 0,
  resultCount: 0,
  complete: !1
});
function Ns() {
  return {
    progress: At,
    reset: () => {
      At.value = {
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
const Vs = hs(() => Ye({
  // Full stock - purchase entire sheet without cutting (first field after ID)
  fullStock: ue(
    Fe().default(!1),
    {
      label: "fields.fullStock",
      propertyPath: "fullStock",
      group: "properties",
      order: -1
    }
  ),
  // Material field
  material: ue(
    et().optional(),
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
  t: ue(
    Ss([Xe(), et()]).optional(),
    {
      label: "fields.t",
      propertyPath: "t",
      group: "dimensions",
      order: 0,
      allowZero: !1
    }
  ),
  // Length field
  l: St({
    label: "fields.l",
    placeholder: "fields.l",
    allowZero: !1
  }),
  // Width field
  w: St({
    label: "fields.w",
    placeholder: "fields.w",
    allowZero: !1
  }),
  // Quantity field
  q: ue(
    Xe().int().positive().default(1),
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
  name: ps({
    placeholder: "fields.name"
  }),
  // Orientation lock field
  orientationLock: ue(
    bs(["n", "l", "w"]).default("n").optional(),
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
  banding: ue(
    Fe().default(!1),
    {
      label: "fields.banding",
      propertyPath: "banding",
      group: "extras",
      order: 0
    }
  ),
  // Finish options
  finish: ue(
    Ye({
      enabled: Fe().default(!1),
      type: et().optional(),
      sides: Xe().optional()
    }).optional(),
    {
      label: "fields.finish",
      propertyPath: "finish",
      group: "extras",
      order: 2
    }
  ),
  // Machining options
  machining: ue(
    Ye({
      enabled: Fe().default(!1),
      operations: ms(ys()).optional()
    }).optional(),
    {
      label: "fields.machining",
      propertyPath: "machining",
      group: "extras",
      order: 3
    }
  ),
  // Planing button
  planing: ue(
    Fe().default(!1),
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
function Ms(r) {
  const s = Vs._def.getter();
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
class Is {
  /**
   * Generate field metadata from a Zod schema
   * @param schema - The Zod schema to extract fields from
   * @param options - Options for field generation
   */
  generateFields(s, t) {
    const i = [], u = this.unwrapSchema(s);
    if (!this.isZodObject(u))
      return console.warn("Schema is not a ZodObject:", u), i;
    const f = u.shape;
    for (const [l, p] of Object.entries(f)) {
      if (l.startsWith("_") || this.isComputedField(p))
        continue;
      if (l === "trim" && this.isTrimField(p)) {
        const C = this.generateTrimFields(p);
        i.push(...C);
        continue;
      }
      const h = this.extractFieldMetadata(l, p);
      h && i.push(h);
    }
    return t?.sortByOrder ? i.sort((l, p) => (l.order || 999) - (p.order || 999)) : i;
  }
  /**
   * Extract metadata from a single field
   */
  extractFieldMetadata(s, t) {
    let i = t._metadata;
    const u = this.unwrapField(t);
    if (i || (i = u._metadata), i) {
      if (i.hidden)
        return null;
      const h = {
        name: s,
        type: i.type || this.getFieldType(u),
        label: i.label || this.formatLabel(s),
        description: i.description,
        required: !this.isOptional(t),
        defaultValue: i.defaultValue ?? this.getDefaultValue(t),
        ...i
      };
      return this.extractTypeSpecificMetadata(h, u), h;
    }
    const f = u._def?.description, l = this.parseFieldDescription(f), p = {
      name: s,
      type: this.getFieldType(u),
      label: l.label || this.formatLabel(s),
      description: l.description,
      required: !this.isOptional(t),
      defaultValue: this.getDefaultValue(t),
      ...l
    };
    return this.extractTypeSpecificMetadata(p, u), p;
  }
  /**
   * Get the field type from a Zod schema
   */
  getFieldType(s) {
    const t = this.unwrapField(s);
    if (t instanceof wt) {
      const i = t._def?.options || [];
      for (const u of i)
        if (u instanceof Ze)
          return this.isIntegerNumber(u) ? "integer" : "number";
    }
    return t instanceof Ze ? this.isIntegerNumber(t) ? "integer" : "number" : t instanceof ks ? "string" : t instanceof ws ? "boolean" : t instanceof Lt || t._def?.typeName === "ZodNativeEnum" ? "enum" : t instanceof Ls ? "array" : t instanceof qe ? "object" : "string";
  }
  /**
   * Extract constraints from a ZodNumber schema
   */
  extractNumberConstraints(s, t) {
    const i = t;
    if (i.minValue !== void 0 && i.minValue !== -1 / 0) {
      s.min = i.minValue;
      const f = t._def?.checks?.find(
        (l) => l.constructor?.name === "$ZodCheckGreaterThan"
      );
      if (f && i.minValue === 0) {
        const l = f._zod?.def?.inclusive ?? f.inclusive;
        s.allowZero = l === !0;
      } else
        s.allowZero = i.minValue === 0;
    }
    i.maxValue !== void 0 && i.maxValue !== 1 / 0 && (s.max = i.maxValue);
    const u = t._def?.checks || [];
    for (const f of u) {
      let l, p, h = !0;
      if (f.kind)
        l = f.kind, p = f.value, h = f.inclusive !== void 0 ? f.inclusive : !0;
      else if (f?._zod?.def) {
        const C = f._zod.def;
        l = C.check, p = C.value, h = C.inclusive !== void 0 ? C.inclusive : !0;
      } else
        continue;
      l === "min" || l === "greater_than" ? s.min === void 0 && (s.min = l === "greater_than" && !h ? p + 1e-6 : p, s.allowZero = s.min === 0) : l === "max" || l === "less_than" ? s.max === void 0 && (s.max = l === "less_than" && !h ? p - 1e-6 : p) : l === "int" && (s.step = 1);
    }
  }
  /**
   * Extract type-specific metadata
   */
  extractTypeSpecificMetadata(s, t) {
    if (t instanceof wt) {
      const i = t._def?.options || [];
      for (const u of i)
        if (u instanceof Ze) {
          this.extractNumberConstraints(s, u), s.type = "number";
          break;
        }
    } else t instanceof Ze && this.extractNumberConstraints(s, t);
    if (!s.options) {
      if (t instanceof Lt) {
        const i = t._def?.values;
        Array.isArray(i) ? s.options = i.map((u) => ({
          value: u,
          label: this.formatLabel(String(u))
        })) : i ? s.options = Object.values(i).map((u) => ({
          value: u,
          label: this.formatLabel(String(u))
        })) : s.options = [];
      }
      if (t._def?.typeName === "ZodNativeEnum") {
        const i = t._def?.values || {};
        s.options = Object.entries(i).filter(([u]) => isNaN(Number(u))).map(([u, f]) => ({
          value: f,
          label: this.formatLabel(u)
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
      const u = i[2].split(",");
      for (const f of u) {
        const [l, p] = f.split(":").map((h) => h.trim());
        l === "group" && (t.group = p), l === "order" && (t.order = parseInt(p)), l === "units" && (t.units = p), l === "hidden" && (t.hidden = p === "true"), l === "readonly" && (t.readonly = p === "true"), l === "placeholder" && (t.placeholder = p);
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
    if (s instanceof tt || s instanceof st)
      return !0;
    if (s.constructor?.name === "ZodPipe" || s._def?.type === "pipe") {
      const t = s._def?.out, i = s._def?.in;
      if (t) {
        const u = this.isOptional(t);
        if (u) return u;
      }
      if (i) {
        const u = this.isOptional(i);
        if (u) return u;
      }
    }
    return s._def?.typeName === "ZodEffects" ? this.isOptional(s._def?.schema) : s instanceof nt ? this.isOptional(s._def?.innerType) : !1;
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
    if (s instanceof tt || s instanceof st)
      return this.unwrapField(s._def?.innerType);
    if (s instanceof nt || i === "ZodDefault")
      return this.unwrapField(s._def?.innerType);
    if (t === "ZodEffects")
      return this.unwrapField(s._def?.schema);
    if (i === "ZodPipe" || s._def?.type === "pipe") {
      const u = s._def?.out;
      if (u)
        return this.unwrapField(u);
    }
    return s;
  }
  /**
   * Get default value from schema
   */
  getDefaultValue(s) {
    if (s instanceof nt) {
      const t = s._def?.defaultValue;
      return typeof t == "function" ? t() : t;
    }
    if (s.constructor?.name === "ZodPipe" || s._def?.type === "pipe") {
      const t = s._def?.in;
      if (t)
        return this.getDefaultValue(t);
    }
    if (s instanceof tt || s instanceof st) {
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
    return s instanceof qe;
  }
  /**
   * Group fields by their group metadata
   */
  groupFields(s) {
    const t = /* @__PURE__ */ new Map(), i = [];
    for (const f of s)
      f.group ? (t.has(f.group) || t.set(f.group, []), t.get(f.group).push(f)) : i.push(f);
    const u = [];
    return t.forEach((f, l) => {
      u.push({
        name: l,
        label: this.formatLabel(l),
        fields: f.sort((p, h) => (p.order || 999) - (h.order || 999))
      });
    }), i.length > 0 && u.push({
      name: "general",
      label: "General",
      fields: i.sort((f, l) => (f.order || 999) - (l.order || 999))
    }), u.sort((f, l) => (f.order || 999) - (l.order || 999));
  }
  /**
   * Check if a field is a trim object (has l1, l2, w1, w2 properties)
   */
  isTrimField(s) {
    const t = this.unwrapField(s);
    if (t instanceof qe) {
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
    if (!(i instanceof qe))
      return t;
    const u = i.shape, f = ["l1", "l2", "w1", "w2"];
    for (const l of f)
      if (l in u) {
        const p = u[l], h = this.extractFieldMetadata(`trim.${l}`, p);
        h && (h.propertyPath = `trim.${l}`, h.name = `trim.${l}`, h.group || (h.group = "trim"), t.push(h));
      }
    return t;
  }
}
const Ot = new Is();
function js(r, s = {}) {
  const t = M([]), i = M([]), u = M(/* @__PURE__ */ new Map()), f = M(/* @__PURE__ */ new Map()), l = (k) => {
    let b = Ot.generateFields(r);
    s.overrides && (b = b.map((m) => {
      const N = s.overrides[m.name];
      if (N) {
        const S = { ...m, ...N };
        return N.min === void 0 && m.min !== void 0 && (S.min = m.min), N.max === void 0 && m.max !== void 0 && (S.max = m.max), S;
      }
      return m;
    })), f.value.clear();
    for (const m of b)
      f.value.set(m.name, m);
    const P = k || s.allowedFieldIds;
    if (P && P.length > 0) {
      const m = P, N = /* @__PURE__ */ new Map();
      for (const F of b)
        N.set(F.name, F);
      const S = [];
      for (const F of m) {
        const R = N.get(F);
        R && S.push(R);
      }
      b = S;
    }
    s.filter && (b = b.filter(s.filter)), t.value = b, u.value.clear();
    for (const m of b)
      u.value.set(m.name, m);
    s.grouped && (i.value = Ot.groupFields(b));
  };
  l();
  const p = (k) => u.value.get(k), h = (k) => f.value.get(k), C = () => f.value, G = (k, b) => {
    const P = u.value.get(k);
    P && Object.assign(P, b);
  }, g = (k) => {
    const b = p(k);
    return !(!b || b.hidden);
  }, L = (k) => {
    const b = p(k);
    if (!b) return {};
    const P = {};
    return b.required && (P.required = !0), b.type === "number" && (b.min !== void 0 && (P.min = b.min), b.max !== void 0 && (P.max = b.max)), P;
  };
  return {
    fields: O(() => t.value),
    groups: O(() => i.value),
    fieldMap: O(() => u.value),
    allFieldsMap: O(() => f.value),
    getField: p,
    getFieldMetadata: h,
    getAllFieldMetadata: C,
    updateField: G,
    isFieldVisible: g,
    getFieldValidation: L,
    regenerateFields: l
  };
}
function Ys(r) {
  const { stockType: s, materials: t = [], minDimension: i = 0 } = r, u = Ms(s), f = {
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
    },
    fullStock: {
      w: "32px"
    }
  };
  return t.length > 0 && (f.material = {
    ...f.material,
    type: "enum",
    options: t.map((l) => ({ value: l.name, label: l.name })),
    defaultValue: t[0]?.name
  }), js(u, {
    ...r,
    overrides: { ...f, ...r.overrides }
  });
}
const { progress: Ae, reset: Pt } = Ns();
function Xs(r) {
  const s = "https://api.cutlistevo.com/";
  let t;
  const i = () => {
    t = Cs(s, {
      withCredentials: !0,
      autoConnect: !1,
      perMessageDeflate: {
        threshold: 1024
      }
    }), t.on("connect", () => {
      r.refs?.connected && (r.refs.connected.value = !0), r.callbacks?.onConnect?.();
    }), t.on("connect_error", (l) => {
      r.refs?.connected && (r.refs.connected.value = !1), r.refs?.thinking && (r.refs.thinking.value = !1), r.callbacks?.onConnectError?.(l);
    }), t.on("connect_timeout", (l) => {
      r.refs?.connected && (r.refs.connected.value = !1), r.refs?.thinking && (r.refs.thinking.value = !1), r.callbacks?.onConnectError?.(l);
    }), t.on("result", (l) => {
      Ae.value.complete = !0, r.callbacks?.onResult?.(l), t.disconnect();
    }), t.on("queued", () => {
      Pt(), Ae.value.queued = !0;
    }), t.on("started", () => {
      Ae.value.started = !0;
    }), t.on("progress", (l) => {
      l?.data?.message === "result" ? Ae.value.resultCount++ : (Ae.value.stockCount = l.data.stockCount, Ae.value.shapeCount = l.data.shapeCount);
    }), t.on("user", (l) => {
      r.callbacks?.onUser?.(l);
    }), t.on("error", (l) => {
      r.refs?.thinking && (r.refs.thinking.value = !1), Pt(), r.callbacks?.onError?.(l);
    });
  }, u = () => t?.disconnect(), f = () => t?.connect();
  return i(), {
    socket: t,
    connect: f,
    disconnect: u
  };
}
function en(r, s, t) {
  let i = null;
  Te(
    () => r.value ? { l: r.value.l, w: r.value.w } : null,
    (u) => {
      const f = typeof s == "number" ? s : s.value;
      if (!xt(f) || !u || !r.value) return;
      const l = u.w > u.l;
      if (i === null) {
        i = l;
        return;
      }
      if (i !== l) {
        const p = gs(f);
        for (const h of p)
          _t(r.value, h);
        i = l;
      }
    },
    { immediate: !0 }
  );
}
const It = ["banding", "finish", "cutLength", "perPart", "partArea", "offcutArea", "rollLength", "surcharge", "machining", "stock", "custom"], Bs = (r) => It.includes(r);
function tn(r, s) {
  const t = (g) => {
    s.log?.(g);
  }, i = (g) => (s.error?.(g), { success: !1, error: g }), u = () => {
    for (const g of It) f(g, 0);
  }, f = (g, L) => {
    t(["setting price", g, L]);
    const { inputs: k, elements: b, setInputValue: P, formatPrice: m } = s;
    if (isNaN(L)) throw new Error("Price must be a number");
    if (!Bs(g)) return;
    const S = {
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
    S?.hidden && k[S.hidden] && (t(["setting hidden price", S.hidden, L]), P(S.hidden, L)), S?.visible && b[S.visible] && (b[S.visible].innerText = m(L));
  }, l = (g, L, k) => {
    if (!g?.offcuts?.length) return 0;
    const b = g.offcuts.filter((N) => {
      const S = Math.max(N.l, N.w), F = Math.min(N.l, N.w);
      return S >= (r.offcut_min_length || 0) && F >= (r.offcut_min_width || 0);
    });
    if (b.length === 0) return 0;
    const P = r.offcut_pricing_mode || "percentage";
    let m = 0;
    switch (P) {
      case "free":
        m = 0, t(["offcut pricing mode: free, price = $0"]);
        break;
      case "fixed":
        m = r.offcut_fixed_price || 0, t([`offcut pricing mode: fixed, price = ${m}`]);
        break;
      case "percentage":
      default: {
        const N = (r.offcut_pricing_percentage ?? 100) / 100, S = /* @__PURE__ */ new Map();
        for (const F of b) {
          const R = F.stockId;
          R && (S.has(R) || S.set(R, []), S.get(R).push(F));
        }
        for (const [F, R] of S) {
          const A = g.stock?.find((U) => U.id === F);
          if (!A || !A.cost) continue;
          const I = A.l * A.w;
          if (I === 0) continue;
          const q = R.reduce((U, T) => U + T.l * T.w * (T.q || 1), 0);
          m += q / I * kt({ v: A.cost }) * N;
        }
        m === 0 && b.length > 0 && (m = b.reduce((A, I) => A + I.l * I.w * (I.q || 1), 0) / L * k * N), t([`offcut pricing mode: percentage (${N * 100}%), price = ${m}`]);
        break;
      }
    }
    return m;
  }, p = (g) => {
    const { product: L, getCurrentVariationPrice: k, isQuantityPricing: b, enableAddToCart: P, setCartQuantity: m } = s;
    let N = L?.price || k(!0) || 0;
    typeof N == "string" && (N = parseFloat(N));
    const S = r.unit_system === "imperial" ? "feet" : "meters", R = {
      full_stock: (I) => {
        if (t(["calculating cost by full sheet"]), !b()) {
          const q = I.metadata.totalStockCost;
          return f("stock", q), q;
        }
        return b() && m(I.metadata.totalUsedStock), 0;
      },
      part_area: (I) => {
        t([`calculating cost by part area in square ${S}`]);
        const q = r.unit_system === "imperial" ? 144 : 1e6, U = I.metadata.totalPartArea / q, T = U * N;
        f("partArea", T), t([`part area price in square ${S} is ${U} (part area) * ${N} (product price) = ${T}`]);
        let D = T;
        if (r?.enable_offcut_pricing && I?.offcuts) {
          const Z = l(I, q, N);
          f("offcutArea", Z), D += Z;
        }
        if (t([`calculated total price as ${D}`]), b()) {
          const Z = D / N;
          return t([`setting cart quantity to ${Z}`]), m(Z, 2), 0;
        } else
          return D;
      },
      cut_length: (I) => {
        t([`calculating cost by cut length in  ${S}`]);
        const q = r.unit_system === "imperial" ? 12 : 1e3, U = I.metadata.totalCutLength / q;
        return m(U, 2), 0;
      },
      full_stock_plus_cut_length: (I) => {
        t(["calculating cost by full sheet plus cut length"]);
        let q = 0;
        const U = I.metadata.totalStockCost;
        f("stock", U), q = U, b() && m(I.metadata.totalUsedStock);
        const T = r.unit_system === "imperial" ? 12 : 1e3, Z = I.metadata.totalCutLength / T * r.cut_length_price;
        return f("cutLength", Z), q + Z;
      },
      full_stock_plus_num_parts: (I) => {
        t(["calculating cost by full sheet plus number of parts"]);
        let q = 0;
        const U = I.metadata.totalStockCost;
        f("stock", U), q = U, b() && m(I.metadata.totalUsedStock);
        const T = I.metadata.totalPartsProduced * r.per_part_price;
        return f("perPart", T), q + T;
      },
      roll_length: (I) => {
        t([`calculating cost by roll length in ${S}`]);
        const q = r.unit_system === "imperial" ? 12 : 1e3, U = I.stock.reduce((T, D) => T + D.analysis.rollLength / q * kt({ v: D.cost }), 0);
        return f("rollLength", U), U;
      }
    }[r.pricing_strategy], A = R(g);
    return P(), A;
  }, h = (g) => {
    const {
      isExtraEnabled: L,
      isMachiningEnabled: k,
      isSurchargeEnabled: b,
      inputType: P,
      getTotalBandingPrice: m,
      getTotalFinishPrice: N,
      getTotalMachiningPrice: S,
      getInputValue: F
    } = s;
    let R = 0;
    if (L("banding") && g.metadata.bandingLengthByType) {
      const A = m(g.metadata.bandingLengthByType);
      f("banding", A), R += A;
    }
    if (L("finish") && g.metadata.finishAreaByType) {
      const A = N(g.metadata.finishAreaByType);
      f("finish", A), R += A;
    }
    if (P.value === "formula") {
      const A = parseFloat(F("smartcut-hardware-price"));
      isNaN(A) || (R += A);
    }
    if (k()) {
      const A = S(g);
      f("machining", A), R += A;
    }
    if (b() && r.surcharge) {
      const A = r.surcharge_type === "per_sheet" ? parseFloat(r.surcharge.toString()) * g.metadata.totalUsedStock : parseFloat(r.surcharge.toString());
      f("surcharge", A), t(["added surcharge", A]), R += A;
    }
    return R;
  }, C = (g) => {
    const { getInputValue: L, setInputValue: k } = s, b = {
      "smartcut-job-id": g.jobId,
      "smartcut-dimensions": g.parts.map((P) => `${P.l}x${P.w} [${P.q}]`).join(", "),
      "smartcut-total-cut-length": g.metadata.totalCutLength,
      "smartcut-part-area": g.metadata.totalPartArea,
      "smartcut-total-cuts": g.metadata.totalCuts,
      "smartcut-total-parts": g.metadata.totalPartsProduced,
      "smartcut-machining": g.metadata.hasMachining
    };
    if (Object.entries(b).forEach(([P, m]) => {
      L(P) !== void 0 && k(P, m);
    }), L("smartcut-stock-summary") !== void 0) {
      const P = g.stock.map((m) => `${m.l}x${m.w}${m.t ? "x" + m.t : ""} [${m.q}]`).join(", ");
      k("smartcut-stock-summary", P);
    }
  };
  return {
    calculatePrice: async (g) => {
      u();
      const { isQuantityPricing: L, selectedVariation: k, setVariationPrice: b, setCartQuantity: P } = s;
      if (!g?.jobId)
        return i("No job ID provided");
      L() || P(1);
      let m = p(g);
      const N = h(g);
      if (m += N, L()) {
        const S = g.metadata.totalUsedStock, F = m / S;
        f("custom", F);
      } else {
        if (!g.metadata.totalStockCost)
          return i("Total stock cost not returned for a multiple size product");
        t([`total cost is ${m}`]), f("custom", m);
      }
      return k.value && b(m), C(g), { success: !0, totalPrice: m };
    },
    resetPricing: u
  };
}
function sn(r) {
  const {
    stockOptions: s,
    config: t,
    initialState: i,
    numberFormat: u = M("decimal"),
    serverPagination: f
  } = r, l = M(i?.activeFilters || []), p = M(i?.searchQuery || ""), h = M(i?.sortBy || t?.value?.defaultSort.field || "cost"), C = M(i?.sortOrder || t?.value?.defaultSort.order || "asc"), G = M(i?.displayMode || t?.value?.displayMode || "grid"), g = M(i?.currentPage || 1), L = M([]), k = f?.enabled || !1, b = M(!1), P = M([]), m = M(1), N = M(0), S = M(null);
  let F = null;
  function R() {
    if (!f) return "";
    const { apiUrl: c, orgSlug: v, isCustomDomain: E } = f;
    return E ? `${c}ecommerce/stock` : `${c}ecommerce/${v}/stock`;
  }
  async function A() {
    if (!(!k || !f)) {
      b.value = !0;
      try {
        const c = new URL(R());
        c.searchParams.set("page", String(g.value)), c.searchParams.set("limit", String(t?.value?.itemsPerPage || 20)), c.searchParams.set("sortBy", h.value), c.searchParams.set("sortOrder", C.value), p.value.trim() && c.searchParams.set("search", p.value.trim());
        const v = {};
        for (const x of l.value)
          if (x.type === "select" || x.type === "multiselect")
            v[x.field] = x.value;
          else if (x.type === "range" && x.value) {
            const { min: W, max: Y } = x.value;
            let re;
            x.field === "l" ? re = "Length" : x.field === "w" ? re = "Width" : re = x.field.charAt(0).toUpperCase() + x.field.slice(1), W !== void 0 && (v[`min${re}`] = W), Y !== void 0 && (v[`max${re}`] = Y);
          } else if (x.type === "boolean" && x.field.startsWith("hasExtras.")) {
            const W = x.field.replace("hasExtras.", "");
            v.hasExtras || (v.hasExtras = {}), v.hasExtras[W] = x.value;
          }
        Object.keys(v).length > 0 && c.searchParams.set("filters", JSON.stringify(v));
        const E = await fetch(c.toString(), {
          credentials: "include"
        });
        if (!E.ok)
          throw new Error(`Server returned ${E.status}`);
        const j = await E.json();
        P.value = j.items || [], m.value = j.pagination?.totalPages || 1, N.value = j.pagination?.total || 0, j.filterOptions && g.value === 1 && (S.value = j.filterOptions);
      } catch (c) {
        console.error("[useStockFilter] Server fetch error:", c), P.value = [], m.value = 1, N.value = 0;
      } finally {
        b.value = !1;
      }
    }
  }
  function I() {
    k && (F && clearTimeout(F), F = setTimeout(() => {
      A();
    }, f?.debounceMs || 300));
  }
  k && (Te([p, l, h, C], () => {
    g.value = 1, I();
  }, { deep: !0 }), A());
  function q(c, v) {
    return v.split(".").reduce((E, j) => E?.[j], c);
  }
  function U(c, v) {
    return typeof c == "object" && c !== null && typeof v == "object" && v !== null && "hex" in c && "hex" in v ? c.hex === v.hex : c === v;
  }
  function T(c, v) {
    const E = q(c, v.field);
    switch (v.type) {
      case "select":
        return U(E, v.value);
      case "multiselect":
        return Array.isArray(v.value) ? v.value.some((j) => U(E, j)) : U(E, v.value);
      case "range":
        if (v.value && typeof v.value == "object") {
          const { min: j, max: x } = v.value, W = Number(E);
          return !(isNaN(W) || j !== void 0 && W < j || x !== void 0 && W > x);
        }
        return !1;
      case "boolean":
        return !!E == !!v.value;
      case "search":
        return !0;
      default:
        return !0;
    }
  }
  function D(c, v) {
    if (!v.trim()) return !0;
    const E = v.toLowerCase();
    return [
      c.name,
      c.material,
      c.description,
      c.category,
      ...c.tags || []
    ].some((x) => x && String(x).toLowerCase().includes(E));
  }
  const Z = O(() => {
    let c = [...s.value];
    p.value && (c = c.filter((v) => D(v, p.value)));
    for (const v of l.value)
      c = c.filter((E) => T(E, v));
    return c;
  }), K = O(() => {
    const c = [...Z.value];
    return c.sort((v, E) => {
      const j = q(v, h.value), x = q(E, h.value);
      if (j == null && x == null) return 0;
      if (j == null) return 1;
      if (x == null) return -1;
      let W = 0;
      return typeof j == "string" && typeof x == "string" ? W = j.localeCompare(x) : typeof j == "number" && typeof x == "number" ? W = j - x : W = String(j).localeCompare(String(x)), C.value === "asc" ? W : -W;
    }), c;
  }), se = O(() => {
    if (k)
      return P.value;
    const c = t?.value?.itemsPerPage || 20, v = (g.value - 1) * c, E = v + c;
    return K.value.slice(v, E);
  }), X = O(() => {
    if (k)
      return m.value;
    const c = t?.value?.itemsPerPage || 20;
    return Math.ceil(K.value.length / c);
  }), ie = O(() => k ? N.value : K.value.length);
  function ce(c, v, E = "select") {
    w(c), l.value.push({ field: c, value: v, type: E }), g.value = 1;
  }
  function w(c) {
    l.value = l.value.filter((v) => v.field !== c);
  }
  function _() {
    l.value = [], p.value = "", g.value = 1;
  }
  function ee(c, v) {
    h.value = c, v ? C.value = v : C.value = C.value === "asc" ? "desc" : "asc", g.value = 1;
  }
  function fe(c) {
    p.value = c, g.value = 1;
  }
  function le(c) {
    c >= 1 && c <= X.value && (g.value = c, k && A());
  }
  function ne(c) {
    const v = c.db_id || `${c.material}-${c.l}-${c.w}-${c.t}`, E = L.value.indexOf(v);
    return E === -1 ? t?.value?.maxSelection && L.value.length >= t.value.maxSelection ? !1 : (L.value.push(v), !0) : (L.value.splice(E, 1), !1);
  }
  function we(c) {
    const v = c.db_id || `${c.material}-${c.l}-${c.w}-${c.t}`;
    return L.value.includes(v);
  }
  const de = O(() => s.value.filter((c) => we(c)));
  function Oe() {
    L.value = [];
  }
  function Le(c) {
    const v = s.value.find((j) => j.db_id === c);
    if (!v)
      return null;
    Oe();
    const E = v.db_id || `${v.material}-${v.l}-${v.w}-${v.t}`;
    return L.value.push(E), v;
  }
  function Ne(c) {
    const {
      ...v
    } = c;
    return new vs(v, u.value);
  }
  function Pe(c) {
    if (k && S.value) {
      if (c === "material" && S.value.materials)
        return S.value.materials;
      if (c === "category" && S.value.categories)
        return S.value.categories;
      if (c === "finish" && S.value.finishes)
        return S.value.finishes;
      if (c === "grain" && S.value.grains)
        return S.value.grains;
      if (c === "color" && S.value.colors)
        return S.value.colors;
    }
    if (c === "color") {
      const E = /* @__PURE__ */ new Map();
      return s.value.forEach((j) => {
        const x = q(j, c);
        x != null && (typeof x == "object" && "hex" in x ? x.hex && !E.has(x.hex) && E.set(x.hex, x) : typeof x == "string" && x.trim() !== "" && (E.has(x) || E.set(x, x)));
      }), Array.from(E.values()).sort((j, x) => {
        const W = typeof j == "object" && "name" in j ? j.name : String(j), Y = typeof x == "object" && "name" in x ? x.name : String(x);
        return W.localeCompare(Y);
      });
    }
    const v = /* @__PURE__ */ new Set();
    return s.value.forEach((E) => {
      const j = q(E, c);
      j != null && !(typeof j == "string" && j.trim() === "") && v.add(j);
    }), Array.from(v).sort();
  }
  function Ve(c) {
    if (k && S.value) {
      if (c === "t" && S.value.thicknessRange)
        return S.value.thicknessRange;
      if (c === "cost" && S.value.priceRange)
        return S.value.priceRange;
      if (c === "l" && S.value.dimensionRange?.length)
        return S.value.dimensionRange.length;
      if (c === "w" && S.value.dimensionRange?.width)
        return S.value.dimensionRange.width;
    }
    const v = s.value.map((E) => Number(q(E, c))).filter((E) => !isNaN(E));
    return v.length === 0 ? null : {
      min: Math.min(...v),
      max: Math.max(...v)
    };
  }
  function Me() {
    if (k && S.value?.hasExtras)
      return S.value.hasExtras;
    const c = { banding: !1, finish: !1, planing: !1, machining: !1 };
    for (const v of s.value)
      if (v.extras?.banding?.length && (c.banding = !0), v.extras?.finish?.length && (c.finish = !0), v.extras?.planing?.length && (c.planing = !0), v.extras?.machining?.length && (c.machining = !0), c.banding && c.finish && c.planing && c.machining) break;
    return c;
  }
  const xe = O(() => ({
    activeFilters: l.value,
    searchQuery: p.value,
    sortBy: h.value,
    sortOrder: C.value,
    displayMode: G.value,
    currentPage: g.value,
    selectedStockIds: L.value
  }));
  return {
    // State
    activeFilters: l,
    searchQuery: p,
    sortBy: h,
    sortOrder: C,
    displayMode: G,
    currentPage: g,
    selectedStockIds: L,
    // Server pagination state
    isLoading: b,
    serverMode: k,
    serverFilterOptions: S,
    // Computed
    filteredStock: Z,
    sortedStock: K,
    paginatedStock: se,
    selectedStock: de,
    totalPages: X,
    totalItems: ie,
    currentState: xe,
    // Methods
    applyFilter: ce,
    removeFilter: w,
    clearFilters: _,
    updateSort: ee,
    updateSearch: fe,
    goToPage: le,
    toggleStockSelection: ne,
    isStockSelected: we,
    clearSelection: Oe,
    selectById: Le,
    createInputStock: Ne,
    getUniqueValues: Pe,
    getFieldRange: Ve,
    getHasExtrasOptions: Me,
    fetchServerStock: A
  };
}
export {
  Qs as a,
  Js as b,
  Ks as c,
  zs as d,
  Ws as e,
  Hs as f,
  Se as g,
  en as h,
  Xs as i,
  Ys as j,
  Ns as k,
  sn as l,
  tn as m,
  Ps as s,
  Rs as u,
  Ds as v
};

import { i as We, g as wt, a as Be, e as At, b as _t, c as Ot, d as Pt, f as Ft, h as Jt, j as Ht, t as le, k as se, l as ht, m as Yt, n as Xt, r as es, o as Ze, p as ts, s as Fe, q as ss, u as ns, v as rs, S as as, w as is, x as os, y as qe, z as ue, A as ls, B as mt, C as us, I as cs } from "./components-DaaD3Nlt.js";
import { r as j, w as Qe, c as C, Y as H, t as de, L as be } from "./vendor-vue-WkZl1F8L.js";
import { y as fs, o as Ge, b as xe, a as ds, c as ps, n as Ue, s as De, _ as gs, u as vs, j as yt, k as Ne, q as hs, A as ms, B as St, C as ys, e as Ve, t as ze, v as Ke, w as Re } from "./vendor-zod-DtqKDYvi.js";
import { l as Ss } from "./vendor-socketio-C18vLChF.js";
let Ee = null;
if (We())
  try {
    Ee = require("~/helpers/applicationSettings").applicationSettings;
  } catch (r) {
    console.error("[useCrossPlatformStorage] Failed to load ApplicationSettings:", r);
  }
function Ms(r, s, t = {}) {
  const {
    serializer: a = {
      read: (o) => {
        try {
          return JSON.parse(o);
        } catch {
          return o;
        }
      },
      write: (o) => JSON.stringify(o)
    }
  } = t;
  if (!We()) {
    const l = j((() => {
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
    return Qe(l, (p) => {
      try {
        if (typeof window < "u" && window.localStorage) {
          const v = a.write(p);
          localStorage.setItem(r, v);
        }
      } catch (v) {
        console.error("[useCrossPlatformStorage] Failed to save", r, "to localStorage:", v);
      }
    }, { deep: !0 }), l;
  }
  if (We()) {
    if (!Ee)
      return console.error("[useCrossPlatformStorage] ApplicationSettings not available! Using in-memory fallback."), j(s);
    const l = j((() => {
      try {
        const p = Ee.getString(r);
        if (p)
          return a.read(p);
      } catch (p) {
        console.error("[useCrossPlatformStorage] Failed to load", r, "from ApplicationSettings:", p);
      }
      return s;
    })());
    return Qe(l, (p) => {
      try {
        const v = a.write(p);
        Ee.setString(r, v);
      } catch (v) {
        console.error("[useCrossPlatformStorage] Failed to save", r, "to ApplicationSettings:", v);
      }
    }, { deep: !0 }), l;
  }
  return console.warn("[useCrossPlatformStorage] No storage available for key", r, "- using in-memory fallback"), j(s);
}
const xt = "cle-extras-config", bs = () => {
  try {
    const r = localStorage.getItem(xt);
    return r ? JSON.parse(r) : {};
  } catch {
    return {};
  }
}, Ls = (r) => {
  try {
    localStorage.setItem(xt, JSON.stringify(r));
  } catch {
  }
}, bt = j(bs()), Is = (r, s) => {
  bt.value[r] = s, ss(r, s), Ls(bt.value);
}, fe = (r) => Ht(r), js = (r, s) => {
  const t = fe(r);
  if (!t || !t.options || t.options.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const a = t.options[0], c = Array.isArray(a) && typeof a[0] == "string" ? a : [];
  if (c.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const o = (v) => t.options.length > 1 ? v.includes("|") ? t.pricing && Object.keys(t.pricing).length > 0 ? Object.prototype.hasOwnProperty.call(t.pricing, v) ? !0 : Object.keys(t.pricing).some((S) => S.startsWith(v + "|") || S === v) : v.split("|").every((g, S) => {
    if (S >= t.options.length) return !1;
    const F = t.options[S];
    return Array.isArray(F) && typeof F[0] == "string" && F.includes(g);
  }) : t.options.some((_) => Array.isArray(_) && typeof _[0] == "string" && _.includes(v)) : c.includes(v), l = /* @__PURE__ */ new Set();
  let p = 0;
  return s.forEach((v) => {
    if (!v.extras?.[r]) return;
    const _ = v.extras[r].sides || {};
    Object.entries(_).forEach(([S, F]) => {
      typeof F == "string" && F && !o(F) && (l.add(F), _[S] = "", p++);
    });
    const g = v.extras[r].faces || {};
    Object.entries(g).forEach(([S, F]) => {
      typeof F == "string" && F && !o(F) && (l.add(F), g[S] = "", p++);
    });
  }), {
    cleanedCount: p,
    invalidOptions: Array.from(l)
  };
}, Bs = (r) => {
  const {
    shape: s,
    extraType: t,
    allOptions: a,
    labels: c,
    userFriendlyFieldMap: o,
    allowCustomNames: l,
    customNames: p = j([]),
    enablePricing: v = !1,
    pricing: _,
    locations: g = j([]),
    locationGroups: S = j([]),
    getAvailablePricingOptions: F,
    getPrice: L,
    findExtrasPrice: h,
    formatPrice: b
  } = r, O = () => {
    const e = fe(t), n = e?.options || a, i = e?.labels || c;
    Jt(s.value, t, n, i, p.value);
  };
  O(), Qe(s, (e) => {
    if (e) {
      const i = e.extras?.[t], f = i?.sides || {}, d = i?.options?.sides || {};
      let y = !1;
      for (const [A, $] of Object.entries(f))
        if (typeof $ == "string") {
          if ($.includes("|") && !d[A]) {
            y = !0;
            break;
          } else if ($ !== "" && !d[A]) {
            y = !0;
            break;
          }
        }
      y && O();
    }
  }, { deep: !0, immediate: !1 });
  const T = C(() => fe(t)), V = C(() => {
    const n = T.value?.options || a;
    if (n.length > 1)
      return "multiple";
    const f = (n[0] || []).filter(($) => typeof $ == "string"), d = (p.value || []).filter(($) => typeof $ == "string"), A = Array.from(/* @__PURE__ */ new Set([...f, ...d])).length;
    return A === 0 ? "boolean" : A === 1 ? "single" : "multiple";
  }), U = C(() => wt(t)), x = C(() => g.value && g.value.length > 0 ? g.value.filter((e) => e !== "all" && e !== "faces" && e !== "sides") : U.value), B = C(() => x.value.filter((e) => Be(e) === "face")), Z = C(() => x.value.filter((e) => Be(e) === "side")), P = C(() => At(t)), M = C(() => _t(t)), q = C(() => Ot(t)), G = () => T.value?.options && T.value.options.length > 1, J = (e, n, i) => {
    const { singleOption: f = pe(), operation: d } = i;
    switch (n) {
      case "boolean":
        return !!e;
      case "single":
        return f ? d === "process" || d === "set" ? e && f ? f : "" : e === f ? f : "" : !!e;
      case "multiple":
        return e || "";
      default:
        return e;
    }
  }, Y = (e, n, i) => J(n, i, { operation: "process" }), ee = (e, n, i, f, d, y) => {
    switch (y) {
      case "boolean":
        Fe(e, n, i, f, !!d);
        break;
      case "single": {
        const A = pe();
        Fe(e, n, i, f, d ? A : "");
        break;
      }
      case "multiple":
        Fe(e, n, i, f, d || "");
        break;
    }
  }, W = (e, n, i = {}) => {
    const f = i.singleOption || pe();
    return i.allowCustomNames ?? (f && [].includes(f.toString())), J(e, n, {
      operation: "get",
      singleOption: f
    });
  }, ne = (e, n, i, f) => {
    switch (f) {
      case "boolean":
        return !!e;
      case "single": {
        const d = pe();
        if (d) {
          const y = n.map((w) => se(s.value, t, w, i)), A = y.every((w) => w === d || w === !0), $ = y.every((w) => !w || w === "");
          return A ? d : $ ? "" : null;
        }
        return !!e;
      }
      case "multiple":
        return typeof e == "string" ? e : e || "";
      default:
        return e;
    }
  }, re = (e, n, i, f = !1) => {
    if (f)
      e.forEach((d) => N(d, n, i));
    else {
      const d = c[n] || "", y = Y(d, i, V.value);
      e.forEach((A) => {
        ee(s.value, t, A, d, y, V.value);
      });
    }
  }, k = (e, n) => {
    if (G()) {
      const i = e.map((A) => (se(s.value, t, A, "value") || "").split("|")[n] || ""), f = i[0] || "";
      return i.every((A) => A === f) ? f : null;
    } else {
      const i = c[n] || "";
      if (V.value === "single") {
        const d = pe();
        if (d) {
          const y = e.map((w) => se(s.value, t, w, i)), A = y.every((w) => w === d || w === !0), $ = y.every((w) => !w || w === "");
          return A ? d : $ ? "" : null;
        }
      }
      const f = ht(s.value, t, e, i, V.value);
      return V.value === "multiple" && f === !1 && e.every((y) => {
        const A = se(s.value, t, y, i, V.value);
        return A === "" || A === !1 || A === null || A === void 0;
      }) ? "" : f;
    }
  }, u = (e) => {
    const { location: n, locationType: i = "single", optionIndex: f, stateValue: d, isAggregate: y = !1, customLabel: A } = e, $ = Se(f), w = $.length > 1 ? "select" : "checkbox", D = y ? ie(f, A || i) : ie(f, n), z = V.value === "multiple" && D.length === 1 && v;
    if (z && D[0]) {
      if (y) {
        let oe = [];
        i === "all" ? oe = x.value : i === "faces" ? oe = B.value : i === "sides" ? oe = Z.value : n && X(n) && (oe = ae(n)), oe.forEach((gt) => {
          const vt = E(gt, f);
          (!vt || vt !== D[0]) && N(gt, f, D[0]);
        });
      } else if (n) {
        const oe = E(n, f);
        (!oe || oe !== D[0]) && N(n, f, D[0]);
      }
    }
    const Q = V.value === "multiple" && (D.length === 0 || z), K = d !== void 0 ? d : n ? E(n, f) : null, ge = w === "select" ? lt(n || i, f) : void 0, ve = w === "checkbox" && $.length === 1 ? $[0] : void 0;
    let dt, pt;
    return w === "checkbox" && $.length === 1 && (dt = $[0], pt = ""), {
      inputType: w,
      // Alias for backward compatibility
      type: w,
      value: K,
      options: ge,
      disabled: Q,
      label: ve,
      indeterminate: K === null && w === "checkbox",
      trueValue: dt,
      falseValue: pt
    };
  }, m = (e, n, i) => u({
    locationType: e,
    optionIndex: n,
    stateValue: i,
    isAggregate: !0
  }), N = (e, n, i) => {
    const f = c[n] || "";
    if (G()) {
      const d = ye(e, n);
      let y;
      if (d === "checkbox") {
        const D = Se(n)[0];
        y = i ? D : "";
      } else
        y = i || "";
      const A = [];
      for (let w = 0; w < c.length; w++)
        if (w === n)
          A[w] = y;
        else {
          const z = (se(s.value, t, e, "value") || "").split("|");
          A[w] = z[w] || "";
        }
      for (; A.length > 0 && A[A.length - 1] === ""; )
        A.pop();
      const $ = A.join("|");
      Fe(s.value, t, e, "value", $);
    } else
      ee(s.value, t, e, f, i, V.value);
  }, E = (e, n) => {
    const i = c[n] || "";
    if (G()) {
      const y = (se(s.value, t, e, "value") || "").split("|")[n] || "";
      if (ye(e, n) === "checkbox") {
        const w = Se(n)[0];
        return y === w ? w : "";
      } else
        return y;
    } else {
      const f = se(s.value, t, e, i, V.value);
      return W(f, V.value);
    }
  }, I = (e, n) => {
    re(x.value, e, n, G());
  }, R = (e) => {
    if (G()) {
      const n = x.value.map((d) => (se(s.value, t, d, "value") || "").split("|")[e] || ""), i = n[0] || "";
      return n.every((d) => d === i) ? i : null;
    } else {
      const n = c[e] || "", i = ht(s.value, t, x.value, n, V.value);
      return ne(i, x.value, n, V.value);
    }
  }, Le = () => {
    Ze(s.value, t, x.value, V.value);
  }, ke = (e) => e === "faces" ? {
    locations: B.value,
    isSupported: P.value
  } : {
    locations: Z.value,
    isSupported: M.value
  }, Je = (e, n, i) => {
    const { locations: f, isSupported: d } = ke(e);
    d && re(f, n, i, G());
  }, $e = (e, n) => {
    const { locations: i, isSupported: f } = ke(e);
    return f ? k(i, n) : null;
  }, He = (e) => {
    const { locations: n, isSupported: i } = ke(e);
    i && Ze(s.value, t, n, V.value);
  }, Ye = (e, n) => {
    const { isSupported: i } = ke(e);
    if (!i) return { type: "checkbox", value: !1 };
    const f = $e(e, n);
    return m(e, n, f);
  }, Me = (e, n) => {
    Je("faces", e, n);
  }, Ie = (e, n) => {
    Je("sides", e, n);
  }, Ce = (e) => $e("faces", e), we = (e) => $e("sides", e), Xe = () => {
    He("faces");
  }, et = () => {
    He("sides");
  }, me = (e) => S.value.find((n) => n.id === e), X = (e) => ["all", "faces", "sides"].includes(e) ? !1 : !e.includes("."), ae = (e) => {
    const n = me(e);
    return n ? n.locations.filter((i) => x.value.includes(i)) : [];
  }, tt = (e, n, i) => {
    const f = ae(e);
    f.length !== 0 && (f.forEach((d) => N(d, n, i)), de(s));
  }, Ae = (e, n) => {
    const i = ae(e);
    if (i.length === 0) return null;
    const f = k(i, n);
    return !G() && (f === null || f === !1 || f === "") ? "" : f;
  }, Vt = (e) => {
    const n = ae(e);
    n.length !== 0 && Ze(s.value, t, n, V.value);
  }, Tt = (e, n) => {
    const i = Ae(e, n), f = me(e);
    return u({
      location: e,
      optionIndex: n,
      stateValue: i,
      isAggregate: !0,
      customLabel: f?.label
    });
  }, st = (e) => {
    ts(s.value, t, e, V.value);
  }, nt = (e) => e === "all" ? x.value.some((n) => !!E(n, 0)) : e === "faces" && P.value ? B.value.some((n) => !!E(n, 0)) : e === "sides" && M.value ? Z.value.some((n) => !!E(n, 0)) : X(e) ? ae(e).some((i) => !!E(i, 0)) : x.value.includes(e) ? !!E(e, 0) : !1, _e = (e) => {
    if (e === "all") return le("general.all");
    if (e === "faces") return `${le("general.all")} ${le("machining.face_other")}`;
    if (e === "sides") return `${le("general.all")} ${le("woodwork.edge_other")}`;
    if (X(e)) {
      const f = me(e);
      if (f) return f.label;
    }
    if (e.startsWith("face.")) {
      const d = `faces.${e.replace("face.", "")}`;
      return le(d);
    }
    if (e.startsWith("side.")) {
      const d = `sides.${e.replace("side.", "")}`;
      return le(d);
    }
    const n = `fields.${e}`, i = le(n);
    return i !== n ? i : o?.[e] ? o[e] : e;
  }, ye = (e, n) => V.value === "boolean" ? "checkbox" : Se(n).length > 1 ? "select" : "checkbox", rt = (e, n) => u({
    location: e,
    optionIndex: n,
    isAggregate: !1
  }), at = (e) => {
    const n = R(e);
    return m("all", e, n);
  }, it = (e) => Ye("faces", e), ot = (e) => Ye("sides", e), Et = (e, n) => e === "all" ? at(n) : e === "faces" ? it(n) : e === "sides" ? ot(n) : X(e) ? Tt(e, n) : rt(e, n), ie = (e, n) => {
    const d = (fe(t)?.options || a)[e];
    if (!d || d[0] === !0)
      return [];
    const y = n && typeof n == "string" && (n.startsWith("face.") || n.startsWith("side.")), A = n && typeof n == "string" && X(n), $ = !y && (n === "all" || n === "faces" || n === "sides" || A);
    if (Array.isArray(d) && d.length === 1 && typeof d[0] == "string" && !(v && F && (y || $) && e > 0))
      return d;
    if (v && F && y) {
      const z = [];
      if (e > 0)
        for (let Q = 0; Q < e; Q++) {
          const K = E(n, Q);
          if (typeof K == "string" && K)
            z.push(K);
          else if (typeof K == "boolean")
            z.push(K);
          else {
            const ge = fe(t), ve = se(s.value, t, n, "value");
            return ve && ve.includes("|") && ge?.options[e] ? ge.options[e] : [];
          }
        }
      return F(_, z, e);
    }
    if (v && F && $) {
      const z = [];
      if (e > 0)
        for (let Q = 0; Q < e; Q++) {
          let K;
          if (n === "all" ? K = R(Q) : n === "faces" ? K = Ce(Q) : n === "sides" ? K = we(Q) : A && typeof n == "string" && (K = Ae(n, Q)), typeof K == "string" && K)
            z.push(K);
          else if (typeof K == "boolean")
            z.push(K);
          else
            return [];
        }
      return F(_, z, e);
    }
    const w = d, D = l ? (p.value || []).filter((z) => typeof z == "string") : [];
    return [.../* @__PURE__ */ new Set([...w, ...D])];
  }, lt = (e, n) => {
    const f = fe(t)?.options[n] || [], d = l && p.value ? p.value.filter((D) => typeof D == "string") : [], y = [.../* @__PURE__ */ new Set([...f, ...d])], A = ie(n, e), $ = new Set(A);
    return y.map((D) => ({
      value: D,
      label: D,
      disabled: !$.has(D)
    }));
  }, pe = () => {
    const e = ie(0);
    return e.length === 1 ? e[0] : void 0;
  }, $t = (e) => {
    const n = ie(e);
    return n.length === 1 ? n[0] : void 0;
  }, Se = (e) => {
    const n = fe(t);
    let i = [];
    if (n?.options && n.options[e] && Array.isArray(n.options[e])) {
      const d = n.options[e];
      Array.isArray(d) && d.every((y) => typeof y == "string") && (i = d);
    }
    const f = l && p.value ? p.value.filter((d) => typeof d == "string") : [];
    return [.../* @__PURE__ */ new Set([...i, ...f])];
  }, Mt = (e, n = 0) => {
    if (e === "all" || e === "faces" || e === "sides")
      return "";
    if (X(e)) {
      const f = me(e);
      return f?.price !== void 0 && Ae(e, n) ? b ? b(f.price) : f.price.toString() : "";
    }
    if (!v || !L)
      return "";
    if (!x.value.includes(e))
      return "N/A";
    const i = L(s.value, t, e, h);
    return i ? b ? b(i) : i.toString() : "N/A";
  }, It = (e) => !v || !L ? !1 : L(s.value, t, e, h), Oe = C(() => x.value.length > 1), Pe = C(() => U.value.length > 1), ut = () => {
    if (g.value && g.value.length > 0) {
      const f = [];
      return S.value && S.value.length > 0 && S.value.forEach((d) => f.push(d.id)), f.push(...g.value), f;
    }
    const e = [];
    S.value && S.value.length > 0 && S.value.forEach((f) => e.push(f.id)), Oe.value && e.push("all"), Pe.value && (Pt(t).length > 0 && e.push("faces"), Ft(t).length > 0 && e.push("sides"));
    const n = /* @__PURE__ */ new Set();
    S.value && S.value.length > 0 && S.value.forEach((f) => {
      f.hideIndividualLocations && f.locations.forEach((d) => n.add(d));
    });
    const i = U.value.filter((f) => !n.has(f));
    return e.push(...i), e;
  }, jt = () => V.value === "multiple", Bt = () => {
    const e = 1 + a.length, n = V.value === "multiple", i = v, f = e + (n ? 1 : 0) + (i ? 1 : 0);
    return {
      columns: f,
      style: `repeat(${f}, max-content)`
    };
  }, je = (e) => e === "all" ? "all" : e === "faces" ? "faces" : e === "sides" ? "sides" : "individual", ct = (e) => Be(e), Zt = (e) => {
    if (e === "all")
      return Oe.value;
    if (X(e))
      return me(e) ? ae(e).length > 0 : !1;
    if (g.value && g.value.length > 0)
      return g.value.includes(e);
    const n = je(e);
    return n === "all" ? Oe.value : n === "faces" || n === "sides" ? n === "faces" && P.value && B.value.length > 0 || n === "sides" && M.value && Z.value.length > 0 ? Pe.value : !1 : U.value.includes(e);
  }, qt = (e) => {
    es(e, t, p);
  }, Gt = (e) => {
    Xt([s.value], t, e, c);
  }, Ut = (e) => {
    Yt([s.value], t, e);
  }, Dt = (e, n, i) => {
    if (e === "all")
      I(n, i);
    else if (e === "faces")
      Me(n, i);
    else if (e === "sides")
      Ie(n, i);
    else if (X(e)) {
      let d = i;
      if (!G() && typeof i == "boolean") {
        const y = Se(n);
        y.length === 1 && (d = i ? y[0] : "");
      }
      if (!G() && d) {
        const y = ae(e), A = new Set(y);
        S.value && (S.value.forEach(($) => {
          $.id !== e && ae($.id).filter((z) => !A.has(z)).forEach((z) => {
            N(z, n, "");
          });
        }), de(s));
      }
      tt(e, n, d);
    } else
      N(e, n, i), G() || de(s);
    const f = c.length;
    for (let d = n + 1; d < f; d++) {
      console.group(`Checking downstream option at index: ${d}`);
      let y;
      if (e === "all" ? y = R(d) : e === "faces" ? y = Ce(d) : e === "sides" ? y = we(d) : X(e) ? y = Ae(e, d) : y = E(e, d), !y) {
        console.groupEnd();
        continue;
      }
      const A = ie(d, e);
      let $ = !1;
      if (typeof y == "string" ? $ = A.includes(y) : typeof y == "boolean" && y === !0 && ($ = A.length > 0), !$) {
        const w = ye(e, d) === "checkbox" ? !1 : "";
        e === "all" ? I(d, w) : e === "faces" ? Me(d, w) : e === "sides" ? Ie(d, w) : X(e) ? tt(e, d, w) : N(e, d, w);
      }
      console.groupEnd();
    }
  }, zt = (e, n = !0) => n && !confirm(`Delete ${t} for ${_e(e)}?`) ? !1 : (e === "all" ? Le() : e === "faces" ? Xe() : e === "sides" ? et() : X(e) ? Vt(e) : st(e), !0), Kt = () => {
    const e = s.value[t], n = s.value[`${t}Options`];
    return !(!e || typeof e != "object" || !n || typeof n != "object" || P.value && (!("faces" in e) || !("faces" in n)) || M.value && (!("sides" in e) || !("sides" in n)));
  }, Rt = () => {
    const e = [], n = s.value[t], i = s.value[`${t}Options`];
    return !n || typeof n != "object" ? e.push(`Missing or invalid ${t} property in shape`) : (P.value && !("faces" in n) && e.push(`Missing faces property in ${t}`), M.value && !("sides" in n) && e.push(`Missing sides property in ${t}`)), !i || typeof i != "object" ? e.push(`Missing or invalid ${t}Options property in shape`) : (P.value && !("faces" in i) && e.push(`Missing faces property in ${t}Options`), M.value && !("sides" in i) && e.push(`Missing sides property in ${t}Options`)), e;
  }, ft = (e) => {
    const n = [];
    if (!e || !Object.keys(e).length)
      return { valid: !0, errors: n };
    const i = Object.keys(e), f = Math.max(...i.map((d) => d.split("|").length));
    if (f <= 1)
      return { valid: !0, errors: n };
    for (const d of x.value) {
      const y = G() ? se(s.value, t, d, "value") || "" : E(d, 0);
      if (!y || typeof y != "string" || y === "")
        continue;
      const A = y.includes("|") ? y.split("|") : [y], $ = A.filter((w) => w.trim() !== "").length;
      if ($ > 0 && $ < f) {
        const w = A.join("|"), D = i.some((Q) => Q.startsWith(w + "|")), z = i.includes(w);
        if (D && !z) {
          const Q = f - $, K = A.filter((ve) => ve.trim() !== "").join(", "), ge = _e(d);
          n.push(`${t} selection incomplete for ${ge}. Selected: "${K}" but ${Q} more level${Q > 1 ? "s" : ""} required.`);
        }
      }
    }
    return { valid: n.length === 0, errors: n };
  }, Wt = (e) => ft(e).errors, Qt = C(() => ut().map((e) => ({
    location: e,
    label: _e(e),
    isAggregate: ["all", "faces", "sides"].includes(e) || X(e)
  })));
  return {
    // State - provide raw computed refs for other composables
    mode: V,
    // Raw computed ref (not readonly wrapped)
    allLocations: H(x),
    faceLocations: H(B),
    sideLocations: H(Z),
    shouldShowAll: Oe,
    // Raw computed ref (not readonly wrapped)
    shouldShowGroupControls: H(Pe),
    renderLocations: H(Qt),
    // Expose computed renderLocations
    // Support flags
    supportsFaces: H(P),
    supportsSides: H(M),
    supportsBoth: H(q),
    // Core operations
    setValue: N,
    getValue: E,
    setAll: I,
    getAll: R,
    getAllState: R,
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
    getLocationLabel: _e,
    getInputType: ye,
    getInputConfig: rt,
    getAllInputConfig: at,
    getAllFacesInputConfig: it,
    getAllSidesInputConfig: ot,
    getInputConfigForLocation: Et,
    getSelectOptions: lt,
    getSingleOptionLabel: $t,
    // Pricing
    getPriceDisplay: Mt,
    getCalculatedPrice: It,
    // Layout & rendering
    getRenderLocations: ut,
    shouldShowDeleteButton: jt,
    getGridConfig: Bt,
    getLocationGroup: je,
    getLocationScope: ct,
    isLocationVisible: Zt,
    // Options management
    getAvailableOptions: ie,
    getSingleAvailableOption: pe,
    // Initialization & migration
    initialize: O,
    initializeExtra: O,
    // Alias for backward compatibility
    initializeCustomNames: qt,
    migrateToSingle: Gt,
    migrateToBoolean: Ut,
    // Event handlers
    handleInputChange: Dt,
    handleDelete: zt,
    // Validation
    validateShape: Kt,
    getValidationErrors: Rt,
    validateIncompleteSelections: ft,
    getIncompleteSelectionErrors: Wt,
    // Debug helpers (development only)
    getDebugInfo: (e, n) => ({
      mode: V.value,
      location: e,
      optionIndex: n,
      value: x.value.includes(e) ? E(e, n) : "N/A",
      inputType: ye(e, n),
      canDelete: nt(e),
      allState: R(n),
      availableOptions: ie(n),
      locationGroup: je(e),
      config: T.value,
      supportsFaces: P.value,
      supportsSides: M.value,
      supportsBoth: q.value,
      ...P.value && {
        allFacesState: Ce(n)
      },
      ...M.value && {
        allSidesState: we(n)
      },
      ...x.value.includes(e) && {
        locationScope: ct(e)
      }
    })
  };
}, Zs = (r) => {
  const {
    customNames: s,
    usedNames: t,
    allowCustomNames: a,
    getSelectOptions: c,
    onCustomNameAdded: o,
    onCustomNameDeleted: l
  } = r, p = j(""), v = C(() => a && p.value?.trim()), _ = C(() => !a || !s.value || s.value.length === 0 || s.value.length === 1 && s.value[0] === !0 ? !0 : s.value.filter((h) => typeof h == "string").every((h) => t.value.includes(h))), g = C(() => {
    const L = [];
    if (a && s.value && s.value.length > 0) {
      if (s.value.length === 1 && s.value[0] === !0)
        return L;
      const b = [...s.value.filter((O) => typeof O == "string")].sort();
      L.push({
        id: "delete-header",
        type: "group",
        label: "Delete Type"
      }), b.forEach((O) => {
        (t.value?.includes(O) ?? !1) || L.push({
          id: `delete-${O}`,
          label: `Delete "${O}"`,
          icon: ["fass", "trash"],
          class: "del"
        });
      });
    }
    return L;
  }), S = () => {
    const L = p.value?.trim();
    if (!L) return;
    if (c("", 0).map((b) => b.value).includes(L)) {
      p.value = "";
      return;
    }
    o(L), p.value = "";
  }, F = (L) => {
    const h = L.item || L;
    if (h.id?.startsWith("delete-")) {
      const b = h.id.replace("delete-", "");
      if (t.value?.includes(b)) {
        console.warn(`Cannot delete ${r.extraType} type "${b}" - it is currently in use`);
        return;
      }
      l(b);
    }
  };
  return {
    newCustomName: p,
    canAddCustomName: H(v),
    isActionMenuDisabled: H(_),
    customNameActions: g,
    handleAddCustomName: S,
    handleCustomNameAction: F
  };
}, qs = (r) => {
  const {
    extraType: s,
    allOptions: t,
    labels: a,
    shapeIndex: c,
    enablePricing: o,
    mode: l,
    shouldShowAll: p,
    locations: v,
    locationGroups: _ = j([]),
    getInputType: g,
    getInputConfig: S,
    getAllInputConfig: F,
    getInputConfigForLocation: L,
    canDelete: h,
    getLocationLabel: b,
    shouldShowDeleteButton: O
  } = r, T = C(() => {
    const P = [], M = /* @__PURE__ */ new Set();
    if (_.value && _.value.length > 0 && _.value.forEach((q) => {
      q.hideIndividualLocations && q.locations.forEach((G) => M.add(G));
    }), _.value && _.value.length > 0 && _.value.forEach((q) => P.push(q.id)), p.value && P.push("all"), v.value && v.value.length > 0)
      P.push(...v.value.filter((q) => q !== "all" && !M.has(q)));
    else {
      const q = wt(s), G = Ot(s), J = At(s), Y = _t(s);
      G && J && Y && (Pt(s).length > 0 && P.push("faces"), Ft(s).length > 0 && P.push("sides")), P.push(...q.filter((W) => !M.has(W)));
    }
    return Array.from(new Set(P));
  }), V = C(() => {
    const P = 1 + t.length, M = l.value === "multiple", q = o;
    return `repeat(${P + (M ? 1 : 0) + (q ? 1 : 0)}, max-content)`;
  }), U = (P, M) => `${s}-${P}-${a[M]}-${M}-${c}`, x = (P) => {
    const M = b(P);
    return `Delete ${s} for ${M}`;
  }, B = (P) => ({
    show: O(P),
    enabled: h(P),
    ariaLabel: x(P)
  }), Z = (P, M) => g(P, M);
  return {
    renderLocations: H(T),
    gridStyle: H(V),
    getInputId: U,
    getDeleteAriaLabel: x,
    getInputConfigForLocation: L,
    getDeleteConfig: B,
    getInputTypeForLocation: Z,
    // Re-export the passed functions for consistency
    getInputType: g,
    getInputConfig: S,
    getAllInputConfig: F,
    canDelete: h,
    shouldShowDeleteButton: O,
    getLocationLabel: b
  };
};
let Te = null;
function ks() {
  const r = j(null), s = j(null), t = j(null), a = be([]), c = be([]), o = be([]), l = be([]), p = j([]), v = j(null), _ = be([]), g = j(null), S = j(null);
  return {
    // All state
    jobId: r,
    saw: s,
    activeStockAutoId: t,
    shapeList: a,
    stockList: c,
    cutList: o,
    segmentList: l,
    offcuts: p,
    metadata: v,
    unusableShapes: _,
    currentCutIndex: g,
    activeShape: S,
    r: {
      saw: s,
      activeStockAutoId: t,
      jobId: r,
      shapeList: a,
      stockList: c,
      cutList: o,
      segmentList: l,
      offcuts: p,
      unusableShapes: _,
      metadata: v,
      currentCutIndex: g
    }
  };
}
function Gs() {
  if (Te) return Te;
  const r = ks(), s = C(() => r.activeStockAutoId.value ? Y(r.activeStockAutoId.value) : []), t = C(() => !r.activeStockAutoId.value || !r.stockList.value?.length ? null : J(r.activeStockAutoId.value)), a = C(() => !t.value || !r.cutList.value?.length ? [] : W(t.value.autoId)), c = C(() => !t.value || !r.segmentList.value?.length ? [] : ee(r.activeStockAutoId.value)), o = C(() => r.stockList.value?.length ? ne(r.stockList.value) : []), l = C(() => r.shapeList.value.filter((k) => k.added)), p = C(() => r.shapeList.value?.length ? r.shapeList.value.filter((k) => !k.added) : []), v = C(() => r.shapeList.value?.length ? ns(r.shapeList.value) : []), _ = C(() => r.shapeList.value?.length ? r.shapeList.value.filter((k) => !k.duplicate) : []), g = C(() => _.value.filter((k) => k.added)), S = C(() => r.stockList.value?.length ? r.stockList.value.filter((k) => k.used && !k.duplicate) : []), F = C(() => S.value.filter((k) => k.used)), L = C(() => r.cutList.value?.length ? a.value.reduce((k, u) => k + u.area, 0) : 0), h = C(() => !r.stockList.value?.length || !t.value ? 0 : t.value ? t.value.area : 0), b = C(() => !r.shapeList.value?.length || !s.value ? 0 : s.value ? s.value.reduce((k, u) => k + u.area, 0) : 0), O = C(() => !r.cutList.value?.length || !t.value ? null : t.value.cutType), T = C(() => r.stockList.value?.length ? r.stockList.value.filter((u) => u.used && !u.isStacked) : []), V = C(() => r.stockList.value?.length ? rs(t.value, r.stockList.value) : 0), U = C(() => {
    if (!r.stockList.value?.length) return 0;
    let k = h.value ? (L.value + b.value) / h.value : null;
    return k > 1 && (k = 1), k;
  }), x = () => {
    r.saw.value = null, r.shapeList.value.length = 0, r.stockList.value.length = 0, r.cutList.value.length = 0, r.segmentList.value.length = 0, r.offcuts.value.length = 0, r.unusableShapes.value.length = 0, r.currentCutIndex.value = null;
  }, B = () => {
    r.saw.value = null, r.activeStockAutoId.value = null, r.activeShape.value = null, r.metadata.value = null, r.shapeList.value = [], r.stockList.value = [], r.cutList.value = [], r.segmentList.value = [], r.offcuts.value = [], r.currentCutIndex.value = null, r.unusableShapes.value = [];
  }, Z = (k, u) => {
    k in this && this[k]?.sort(os[u]);
  }, P = (k) => {
    de(k);
  }, M = () => {
    de(r.shapeList);
  }, q = () => {
    de(r.stockList);
  }, G = (k) => {
    if (!k?.shapeList?.some((u) => u.added)) {
      B();
      return;
    }
    r.metadata.value = k.metadata, r.unusableShapes.value = k.unusableShapes || [];
    try {
      k?.saw && (r.saw.value = new as(k.saw));
      const u = is(k, {
        preventAutoRotation: !0
      });
      r.stockList.value = u.stockList, r.shapeList.value = u.shapeList, r.cutList.value = u.cutList, r.segmentList.value = u.segmentList, r.offcuts.value = u.offcuts, ["saw", "stockList", "shapeList", "cutList", "segmentList"].forEach((N) => de(r[N])), r.activeStockAutoId.value = ne(r.stockList.value)?.[0]?.autoId || null;
    } catch (u) {
      console.error("Error updating from result", u);
    }
  }, J = (k) => r.stockList.value?.length ? r.stockList.value.find((u) => u.autoId === k) : null, Y = (k) => r.shapeList.value?.length ? r.shapeList.value.filter((u) => u.added && u?.stock?.autoId === k) : [], ee = (k) => r.segmentList.value?.length ? r.segmentList.value.filter((m) => m?.stock?.autoId === k) : [], W = (k) => {
    const u = r?.cutList?.value;
    return !u && !u.length ? [] : u.filter((m) => m?.stock?.autoId === k).sort((m, N) => m?.guillotineState?.order - N?.guillotineState?.order);
  }, ne = (k) => k?.length ? k.filter((u) => u.used === !0) : [], re = (k) => {
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
    addedShapes: l,
    activeShapes: s,
    unplacedShapes: p,
    uniqueShapes: _,
    uniqueAddedShapes: g,
    unplacedShapeTally: v,
    uniqueStock: S,
    uniqueUsedStock: F,
    activeStock: t,
    activeCuts: a,
    activeCutsArea: L,
    activeCutType: O,
    usedStock: o,
    stackedStock: T,
    activeStockArea: h,
    activeShapeArea: b,
    activeStockStackCount: V,
    activeTotalArea: U,
    activeSegments: c,
    // methods
    reset: x,
    clear: B,
    sortItems: Z,
    update: P,
    updateShapes: M,
    updateStock: q,
    updateFromResult: G,
    getStock: J,
    getShapes: Y,
    getSegments: ee,
    getCuts: W,
    setActiveStockAutoId: re
  }, Te;
}
const te = j(null);
let Cs = 0;
function Us(r) {
  const s = r || `action-menu-${++Cs}-${Date.now()}`, t = C({
    get: () => te.value === s,
    set: (g) => {
      g ? te.value = s : te.value === s && (te.value = null);
    }
  }), a = () => {
    te.value = s;
  }, c = () => {
    te.value === s && (te.value = null);
  }, o = () => {
    te.value = null;
  }, l = () => {
    t.value = !t.value;
  }, p = C(() => te.value !== null), v = C(() => te.value), _ = C(() => te.value === s);
  return {
    // Instance-specific
    id: H(j(s)),
    isOpen: t,
    open: a,
    close: c,
    toggle: l,
    isThisMenuOpen: _,
    // Global singleton state (shared across all instances)
    closeAll: o,
    isAnyMenuOpen: p,
    currentOpenMenuId: v
  };
}
function ws() {
  const r = Date.now(), s = Math.random().toString(36).substring(2, 15), t = Math.random().toString(36).substring(2, 15);
  return `${r.toString(36)}-${s}-${t}`;
}
const ce = j([]), As = 6;
function Ds() {
  const r = ({
    message: t,
    type: a = "info",
    additional: c = [],
    options: o = {},
    action: l = () => {
    }
  }) => {
    Array.isArray(c) || (console.warn("addNotice - additional must be an array"), c = []);
    const p = {
      id: ws(),
      message: qe(t),
      additional: c.length > 5 ? c.slice(0, 5).map((_) => qe(_)).join("<br>") + "<br>..." : c.slice(0, 5).map((_) => qe(_)).join("<br>"),
      type: a,
      persistent: o.persistent || !1,
      timestamp: /* @__PURE__ */ new Date(),
      action: l
    }, v = o.maxNotices ?? As;
    if (ce.value.length >= v) {
      const _ = ce.value.findIndex((g) => !g.persistent);
      if (_ !== -1)
        ce.value.splice(_, 1);
      else if (!p.persistent)
        return console.warn("Cannot add new notice: maximum limit reached and all existing notices are persistent"), p.id;
    }
    return ce.value.push(p), !p.persistent && o.timeout !== 0 && setTimeout(() => s(p.id), o.timeout || 6e3), p.id;
  }, s = (t) => {
    ce.value.findIndex((c) => c.id === t) !== -1 && (ce.value = ce.value.filter((c) => c.id !== t));
  };
  return {
    notices: ce,
    addNotice: r,
    dismissNotice: s
  };
}
const Lt = j({
  queued: !1,
  started: !1,
  stockCount: 0,
  shapeCount: 0,
  resultCount: 0,
  complete: !1
});
function _s() {
  return {
    progress: Lt,
    reset: () => {
      Lt.value = {
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
const Os = fs(() => Ge({
  // Material field
  material: ue(
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
  t: ue(
    vs([Ue(), De()]).optional(),
    {
      label: "fields.t",
      propertyPath: "t",
      group: "dimensions",
      order: 0,
      allowZero: !1
    }
  ),
  // Length field
  l: mt({
    label: "fields.l",
    placeholder: "fields.l",
    allowZero: !1
  }),
  // Width field
  w: mt({
    label: "fields.w",
    placeholder: "fields.w",
    allowZero: !1
  }),
  // Quantity field
  q: ue(
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
  name: ls({
    placeholder: "fields.name"
  }),
  // Orientation lock field
  orientationLock: ue(
    gs(["n", "l", "w"]).default("n").optional(),
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
    xe().default(!1),
    {
      label: "fields.banding",
      propertyPath: "banding",
      group: "extras",
      order: 0
    }
  ),
  // Finish options
  finish: ue(
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
  machining: ue(
    Ge({
      enabled: xe().default(!1),
      operations: ds(ps()).optional()
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
function Ps(r) {
  const s = Os._def.getter();
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
class Fs {
  /**
   * Generate field metadata from a Zod schema
   * @param schema - The Zod schema to extract fields from
   * @param options - Options for field generation
   */
  generateFields(s, t) {
    const a = [], c = this.unwrapSchema(s);
    if (!this.isZodObject(c))
      return console.warn("Schema is not a ZodObject:", c), a;
    const o = c.shape;
    for (const [l, p] of Object.entries(o)) {
      if (l.startsWith("_") || this.isComputedField(p))
        continue;
      if (l === "trim" && this.isTrimField(p)) {
        const _ = this.generateTrimFields(p);
        a.push(..._);
        continue;
      }
      const v = this.extractFieldMetadata(l, p);
      v && a.push(v);
    }
    return t?.sortByOrder ? a.sort((l, p) => (l.order || 999) - (p.order || 999)) : a;
  }
  /**
   * Extract metadata from a single field
   */
  extractFieldMetadata(s, t) {
    let a = t._metadata;
    const c = this.unwrapField(t);
    if (a || (a = c._metadata), a) {
      if (a.hidden)
        return null;
      const v = {
        name: s,
        type: a.type || this.getFieldType(c),
        label: a.label || this.formatLabel(s),
        description: a.description,
        required: !this.isOptional(t),
        defaultValue: a.defaultValue ?? this.getDefaultValue(c),
        ...a
      };
      return this.extractTypeSpecificMetadata(v, c), v;
    }
    const o = c._def?.description, l = this.parseFieldDescription(o), p = {
      name: s,
      type: this.getFieldType(c),
      label: l.label || this.formatLabel(s),
      description: l.description,
      required: !this.isOptional(t),
      defaultValue: this.getDefaultValue(c),
      ...l
    };
    return this.extractTypeSpecificMetadata(p, c), p;
  }
  /**
   * Get the field type from a Zod schema
   */
  getFieldType(s) {
    const t = this.unwrapField(s);
    if (t instanceof yt) {
      const a = t._def?.options || [];
      for (const c of a)
        if (c instanceof Ne)
          return this.isIntegerNumber(c) ? "integer" : "number";
    }
    return t instanceof Ne ? this.isIntegerNumber(t) ? "integer" : "number" : t instanceof hs ? "string" : t instanceof ms ? "boolean" : t instanceof St || t._def?.typeName === "ZodNativeEnum" ? "enum" : t instanceof ys ? "array" : t instanceof Ve ? "object" : "string";
  }
  /**
   * Extract constraints from a ZodNumber schema
   */
  extractNumberConstraints(s, t) {
    const a = t;
    if (a.minValue !== void 0 && a.minValue !== -1 / 0) {
      s.min = a.minValue;
      const o = t._def?.checks?.find(
        (l) => l.constructor?.name === "$ZodCheckGreaterThan"
      );
      if (o && a.minValue === 0) {
        const l = o._zod?.def?.inclusive ?? o.inclusive;
        s.allowZero = l === !0;
      } else
        s.allowZero = a.minValue === 0;
    }
    a.maxValue !== void 0 && a.maxValue !== 1 / 0 && (s.max = a.maxValue);
    const c = t._def?.checks || [];
    for (const o of c) {
      let l, p, v = !0;
      if (o.kind)
        l = o.kind, p = o.value, v = o.inclusive !== void 0 ? o.inclusive : !0;
      else if (o?._zod?.def) {
        const _ = o._zod.def;
        l = _.check, p = _.value, v = _.inclusive !== void 0 ? _.inclusive : !0;
      } else
        continue;
      l === "min" || l === "greater_than" ? s.min === void 0 && (s.min = l === "greater_than" && !v ? p + 1e-6 : p, s.allowZero = s.min === 0) : l === "max" || l === "less_than" ? s.max === void 0 && (s.max = l === "less_than" && !v ? p - 1e-6 : p) : l === "int" && (s.step = 1);
    }
  }
  /**
   * Extract type-specific metadata
   */
  extractTypeSpecificMetadata(s, t) {
    if (t instanceof yt) {
      const a = t._def?.options || [];
      for (const c of a)
        if (c instanceof Ne) {
          this.extractNumberConstraints(s, c), s.type = "number";
          break;
        }
    } else t instanceof Ne && this.extractNumberConstraints(s, t);
    if (!s.options) {
      if (t instanceof St) {
        const a = t._def?.values;
        Array.isArray(a) ? s.options = a.map((c) => ({
          value: c,
          label: this.formatLabel(String(c))
        })) : a ? s.options = Object.values(a).map((c) => ({
          value: c,
          label: this.formatLabel(String(c))
        })) : s.options = [];
      }
      if (t._def?.typeName === "ZodNativeEnum") {
        const a = t._def?.values || {};
        s.options = Object.entries(a).filter(([c]) => isNaN(Number(c))).map(([c, o]) => ({
          value: o,
          label: this.formatLabel(c)
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
      const c = a[2].split(",");
      for (const o of c) {
        const [l, p] = o.split(":").map((v) => v.trim());
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
    if (s instanceof ze || s instanceof Ke)
      return !0;
    if (s.constructor?.name === "ZodPipe" || s._def?.type === "pipe") {
      const t = s._def?.out, a = s._def?.in;
      if (t) {
        const c = this.isOptional(t);
        if (c) return c;
      }
      if (a) {
        const c = this.isOptional(a);
        if (c) return c;
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
    if (s instanceof ze || s instanceof Ke)
      return this.unwrapField(s._def?.innerType);
    if (s instanceof Re || a === "ZodDefault")
      return this.unwrapField(s._def?.innerType);
    if (t === "ZodEffects")
      return this.unwrapField(s._def?.schema);
    if (a === "ZodPipe" || s._def?.type === "pipe") {
      const c = s._def?.out;
      if (c)
        return this.unwrapField(c);
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
    if (s instanceof ze || s instanceof Ke) {
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
    return s instanceof Ve;
  }
  /**
   * Group fields by their group metadata
   */
  groupFields(s) {
    const t = /* @__PURE__ */ new Map(), a = [];
    for (const o of s)
      o.group ? (t.has(o.group) || t.set(o.group, []), t.get(o.group).push(o)) : a.push(o);
    const c = [];
    return t.forEach((o, l) => {
      c.push({
        name: l,
        label: this.formatLabel(l),
        fields: o.sort((p, v) => (p.order || 999) - (v.order || 999))
      });
    }), a.length > 0 && c.push({
      name: "general",
      label: "General",
      fields: a.sort((o, l) => (o.order || 999) - (l.order || 999))
    }), c.sort((o, l) => (o.order || 999) - (l.order || 999));
  }
  /**
   * Check if a field is a trim object (has l1, l2, w1, w2 properties)
   */
  isTrimField(s) {
    const t = this.unwrapField(s);
    if (t instanceof Ve) {
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
    if (!(a instanceof Ve))
      return t;
    const c = a.shape, o = ["l1", "l2", "w1", "w2"];
    for (const l of o)
      if (l in c) {
        const p = c[l], v = this.extractFieldMetadata(`trim.${l}`, p);
        v && (v.propertyPath = `trim.${l}`, v.name = `trim.${l}`, v.group || (v.group = "trim"), t.push(v));
      }
    return t;
  }
}
const kt = new Fs();
function xs(r, s = {}) {
  const t = j([]), a = j([]), c = j(/* @__PURE__ */ new Map()), o = j(/* @__PURE__ */ new Map()), l = (L) => {
    let h = kt.generateFields(r);
    s.overrides && (h = h.map((O) => {
      const T = s.overrides[O.name];
      if (T) {
        const V = { ...O, ...T };
        return T.min === void 0 && O.min !== void 0 && (V.min = O.min), T.max === void 0 && O.max !== void 0 && (V.max = O.max), V;
      }
      return O;
    })), o.value.clear();
    for (const O of h)
      o.value.set(O.name, O);
    const b = L || s.allowedFieldIds;
    if (b && b.length > 0) {
      const O = b, T = /* @__PURE__ */ new Map();
      for (const U of h)
        T.set(U.name, U);
      const V = [];
      for (const U of O) {
        const x = T.get(U);
        x && V.push(x);
      }
      h = V;
    }
    s.filter && (h = h.filter(s.filter)), t.value = h, c.value.clear();
    for (const O of h)
      c.value.set(O.name, O);
    s.grouped && (a.value = kt.groupFields(h));
  };
  l();
  const p = (L) => c.value.get(L), v = (L) => o.value.get(L), _ = () => o.value, g = (L, h) => {
    const b = c.value.get(L);
    b && Object.assign(b, h);
  }, S = (L) => {
    const h = p(L);
    return !(!h || h.hidden);
  }, F = (L) => {
    const h = p(L);
    if (!h) return {};
    const b = {};
    return h.required && (b.required = !0), h.type === "number" && (h.min !== void 0 && (b.min = h.min), h.max !== void 0 && (b.max = h.max)), b;
  };
  return {
    fields: C(() => t.value),
    groups: C(() => a.value),
    fieldMap: C(() => c.value),
    allFieldsMap: C(() => o.value),
    getField: p,
    getFieldMetadata: v,
    getAllFieldMetadata: _,
    updateField: g,
    isFieldVisible: S,
    getFieldValidation: F,
    regenerateFields: l
  };
}
function zs(r) {
  const { stockType: s, materials: t = [], minDimension: a = 0 } = r, c = Ps(s), o = {
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
  return t.length > 0 && (o.material = {
    ...o.material,
    type: "enum",
    options: t.map((l) => ({ value: l.name, label: l.name })),
    defaultValue: t[0]?.name
  }), xs(c, {
    ...r,
    overrides: { ...o, ...r.overrides }
  });
}
const { progress: he, reset: Ct } = _s();
function Ks(r) {
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
    }), t.on("connect_error", (l) => {
      r.refs?.connected && (r.refs.connected.value = !1), r.refs?.thinking && (r.refs.thinking.value = !1), r.callbacks?.onConnectError?.(l);
    }), t.on("connect_timeout", (l) => {
      r.refs?.connected && (r.refs.connected.value = !1), r.refs?.thinking && (r.refs.thinking.value = !1), r.callbacks?.onConnectError?.(l);
    }), t.on("result", (l) => {
      he.value.complete = !0, r.callbacks?.onResult?.(l), t.disconnect();
    }), t.on("queued", () => {
      Ct(), he.value.queued = !0;
    }), t.on("started", () => {
      he.value.started = !0;
    }), t.on("progress", (l) => {
      l?.data?.message === "result" ? he.value.resultCount++ : (he.value.stockCount = l.data.stockCount, he.value.shapeCount = l.data.shapeCount);
    }), t.on("user", (l) => {
      r.callbacks?.onUser?.(l);
    }), t.on("error", (l) => {
      r.refs?.thinking && (r.refs.thinking.value = !1), Ct(), r.callbacks?.onError?.(l);
    });
  }, c = () => t?.disconnect(), o = () => t?.connect();
  return a(), {
    socket: t,
    connect: o,
    disconnect: c
  };
}
const Nt = ["banding", "finish", "cutLength", "perPart", "partArea", "offcutArea", "rollLength", "surcharge", "machining", "stock", "custom"], Ns = (r) => Nt.includes(r);
function Rs(r, s) {
  const t = (g) => {
    s.log?.(g);
  }, a = (g) => (s.error?.(g), { success: !1, error: g }), c = () => {
    for (const g of Nt) o(g, 0);
  }, o = (g, S) => {
    t(["setting price", g, S]);
    const { inputs: F, elements: L, setInputValue: h, formatPrice: b } = s;
    if (isNaN(S)) throw new Error("Price must be a number");
    if (!Ns(g)) return;
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
    T?.hidden && F[T.hidden] && (t(["setting hidden price", T.hidden, S]), h(T.hidden, S)), T?.visible && L[T.visible] && (L[T.visible].innerText = b(S));
  }, l = (g) => {
    const { product: S, getCurrentVariationPrice: F, isQuantityPricing: L, enableAddToCart: h, setCartQuantity: b } = s;
    let O = S?.price || F(!0) || 0;
    typeof O == "string" && (O = parseFloat(O));
    const T = r.unit_system === "imperial" ? "feet" : "meters", U = {
      full_stock: (B) => {
        if (t(["calculating cost by full sheet"]), !L()) {
          const Z = B.metadata.totalStockCost;
          return o("stock", Z), Z;
        }
        return L() && b(B.metadata.totalUsedStock), 0;
      },
      part_area: (B) => {
        t([`calculating cost by part area in square ${T}`]);
        const Z = r.unit_system === "imperial" ? 144 : 1e6, P = B.metadata.totalPartArea / Z, M = P * O;
        o("partArea", M), t([`part area price in square ${T} is ${P} (part area) * ${O} (product price) = ${M}`]);
        let q = M;
        if (r?.enable_offcut_pricing && B?.offcuts) {
          const J = B?.offcuts.reduce((ee, W) => {
            const ne = W.l >= W.w ? W.l : W.w, re = W.l >= W.w ? W.w : W.l;
            return ne < r.offcut_min_length || re < r.offcut_min_width ? ee + ne * re : ee;
          }, 0) / Z, Y = J * O;
          o("offcutArea", Y), t([`calculated sellable offcut area as ${J} square ${T}, with price ${Y}`]), q += Y;
        }
        if (t([`calculated total price as ${q}`]), L()) {
          const G = q / O;
          return t([`setting cart quantity to ${G}`]), b(G, 2), 0;
        } else
          return q;
      },
      cut_length: (B) => {
        t([`calculating cost by cut length in  ${T}`]);
        const Z = r.unit_system === "imperial" ? 12 : 1e3, P = B.metadata.totalCutLength / Z;
        return b(P, 2), 0;
      },
      full_stock_plus_cut_length: (B) => {
        t(["calculating cost by full sheet plus cut length"]);
        let Z = 0;
        const P = B.metadata.totalStockCost;
        o("stock", P), Z = P, L() && b(B.metadata.totalUsedStock);
        const M = r.unit_system === "imperial" ? 12 : 1e3, G = B.metadata.totalCutLength / M * r.cut_length_price;
        return o("cutLength", G), Z + G;
      },
      full_stock_plus_num_parts: (B) => {
        t(["calculating cost by full sheet plus number of parts"]);
        let Z = 0;
        const P = B.metadata.totalStockCost;
        o("stock", P), Z = P, L() && b(B.metadata.totalUsedStock);
        const M = B.metadata.totalPartsProduced * r.per_part_price;
        return o("perPart", M), Z + M;
      },
      roll_length: (B) => {
        t([`calculating cost by roll length in ${T}`]);
        const Z = r.unit_system === "imperial" ? 12 : 1e3, P = B.stock.reduce((M, q) => M + q.analysis.rollLength / Z * us({ v: q.cost }), 0);
        return o("rollLength", P), P;
      }
    }[r.pricing_strategy], x = U(g);
    return h(), x;
  }, p = (g) => {
    const {
      isExtraEnabled: S,
      isMachiningEnabled: F,
      isSurchargeEnabled: L,
      inputType: h,
      getTotalBandingPrice: b,
      getTotalFinishPrice: O,
      getTotalMachiningPrice: T,
      getInputValue: V
    } = s;
    let U = 0;
    if (S("banding") && g.metadata.bandingLengthByType) {
      const x = b(g.metadata.bandingLengthByType);
      o("banding", x), U += x;
    }
    if (S("finish") && g.metadata.finishAreaByType) {
      const x = O(g.metadata.finishAreaByType);
      o("finish", x), U += x;
    }
    if (h.value === "formula") {
      const x = parseFloat(V("smartcut-hardware-price"));
      isNaN(x) || (U += x);
    }
    if (F()) {
      const x = T(g);
      o("machining", x), U += x;
    }
    if (L() && r.surcharge) {
      const x = r.surcharge_type === "per_sheet" ? parseFloat(r.surcharge.toString()) * g.metadata.totalUsedStock : parseFloat(r.surcharge.toString());
      o("surcharge", x), t(["added surcharge", x]), U += x;
    }
    return U;
  }, v = (g) => {
    const { getInputValue: S, setInputValue: F } = s, L = {
      "smartcut-job-id": g.jobId,
      "smartcut-dimensions": g.parts.map((h) => `${h.l}x${h.w} [${h.q}]`).join(", "),
      "smartcut-total-cut-length": g.metadata.totalCutLength,
      "smartcut-part-area": g.metadata.totalPartArea,
      "smartcut-total-cuts": g.metadata.totalCuts,
      "smartcut-total-parts": g.metadata.totalPartsProduced,
      "smartcut-machining": g.metadata.hasMachining
    };
    if (Object.entries(L).forEach(([h, b]) => {
      S(h) !== void 0 && F(h, b);
    }), S("smartcut-stock-summary") !== void 0) {
      const h = g.stock.map((b) => `${b.l}x${b.w}${b.t ? "x" + b.t : ""} [${b.q}]`).join(", ");
      F("smartcut-stock-summary", h);
    }
  };
  return {
    calculatePrice: async (g) => {
      c();
      const { isQuantityPricing: S, selectedVariation: F, setVariationPrice: L, setCartQuantity: h } = s;
      if (!g?.jobId)
        return a("No job ID provided");
      S() || h(1);
      let b = l(g);
      const O = p(g);
      if (b += O, S()) {
        const T = g.metadata.totalUsedStock, V = b / T;
        o("custom", V);
      } else {
        if (!g.metadata.totalStockCost)
          return a("Total stock cost not returned for a multiple size product");
        t([`total cost is ${b}`]), o("custom", b);
      }
      return F.value && L(b), v(g), { success: !0, totalPrice: b };
    },
    resetPricing: c
  };
}
function Ws(r) {
  const {
    stockOptions: s,
    config: t,
    initialState: a,
    numberFormat: c = j("decimal")
  } = r, o = j(a?.activeFilters || []), l = j(a?.searchQuery || ""), p = j(a?.sortBy || t?.value?.defaultSort.field || "cost"), v = j(a?.sortOrder || t?.value?.defaultSort.order || "asc"), _ = j(a?.displayMode || t?.value?.displayMode || "grid"), g = j(a?.currentPage || 1), S = j([]);
  function F(u, m) {
    return m.split(".").reduce((N, E) => N?.[E], u);
  }
  function L(u, m) {
    return typeof u == "object" && u !== null && typeof m == "object" && m !== null && "hex" in u && "hex" in m ? u.hex === m.hex : u === m;
  }
  function h(u, m) {
    const N = F(u, m.field);
    switch (m.type) {
      case "select":
        return L(N, m.value);
      case "multiselect":
        return Array.isArray(m.value) ? m.value.some((E) => L(N, E)) : L(N, m.value);
      case "range":
        if (m.value && typeof m.value == "object") {
          const { min: E, max: I } = m.value, R = Number(N);
          return !(isNaN(R) || E !== void 0 && R < E || I !== void 0 && R > I);
        }
        return !1;
      case "boolean":
        return !!N == !!m.value;
      case "search":
        return !0;
      default:
        return !0;
    }
  }
  function b(u, m) {
    if (!m.trim()) return !0;
    const N = m.toLowerCase();
    return [
      u.name,
      u.material,
      u.description,
      u.category,
      ...u.tags || []
    ].some((I) => I && String(I).toLowerCase().includes(N));
  }
  const O = C(() => {
    let u = [...s.value];
    l.value && (u = u.filter((m) => b(m, l.value)));
    for (const m of o.value)
      u = u.filter((N) => h(N, m));
    return u;
  }), T = C(() => {
    const u = [...O.value];
    return u.sort((m, N) => {
      const E = F(m, p.value), I = F(N, p.value);
      if (E == null && I == null) return 0;
      if (E == null) return 1;
      if (I == null) return -1;
      let R = 0;
      return typeof E == "string" && typeof I == "string" ? R = E.localeCompare(I) : typeof E == "number" && typeof I == "number" ? R = E - I : R = String(E).localeCompare(String(I)), v.value === "asc" ? R : -R;
    }), u;
  }), V = C(() => {
    const u = t?.value?.itemsPerPage || 20, m = (g.value - 1) * u, N = m + u;
    return T.value.slice(m, N);
  }), U = C(() => {
    const u = t?.value?.itemsPerPage || 20;
    return Math.ceil(T.value.length / u);
  });
  function x(u, m, N = "select") {
    B(u), o.value.push({ field: u, value: m, type: N }), g.value = 1;
  }
  function B(u) {
    o.value = o.value.filter((m) => m.field !== u);
  }
  function Z() {
    o.value = [], l.value = "", g.value = 1;
  }
  function P(u, m) {
    p.value = u, m ? v.value = m : v.value = v.value === "asc" ? "desc" : "asc", g.value = 1;
  }
  function M(u) {
    l.value = u, g.value = 1;
  }
  function q(u) {
    u >= 1 && u <= U.value && (g.value = u);
  }
  function G(u) {
    const m = u.id || `${u.material}-${u.l}-${u.w}-${u.t}`, N = S.value.indexOf(m);
    return N === -1 ? t?.value?.maxSelection && S.value.length >= t.value.maxSelection ? !1 : (S.value.push(m), !0) : (S.value.splice(N, 1), !1);
  }
  function J(u) {
    const m = u.id || `${u.material}-${u.l}-${u.w}-${u.t}`;
    return S.value.includes(m);
  }
  const Y = C(() => s.value.filter((u) => J(u)));
  function ee() {
    S.value = [];
  }
  function W(u) {
    const {
      ...m
    } = u;
    return new cs(m, c.value);
  }
  function ne(u) {
    if (u === "color") {
      const N = /* @__PURE__ */ new Map();
      return s.value.forEach((E) => {
        const I = F(E, u);
        I != null && (typeof I == "object" && "hex" in I ? N.has(I.hex) || N.set(I.hex, I) : typeof I == "string" && (N.has(I) || N.set(I, I)));
      }), Array.from(N.values()).sort((E, I) => {
        const R = typeof E == "object" && "name" in E ? E.name : String(E), Le = typeof I == "object" && "name" in I ? I.name : String(I);
        return R.localeCompare(Le);
      });
    }
    const m = /* @__PURE__ */ new Set();
    return s.value.forEach((N) => {
      const E = F(N, u);
      E != null && m.add(E);
    }), Array.from(m).sort();
  }
  function re(u) {
    const m = s.value.map((N) => Number(F(N, u))).filter((N) => !isNaN(N));
    return m.length === 0 ? null : {
      min: Math.min(...m),
      max: Math.max(...m)
    };
  }
  const k = C(() => ({
    activeFilters: o.value,
    searchQuery: l.value,
    sortBy: p.value,
    sortOrder: v.value,
    displayMode: _.value,
    currentPage: g.value,
    selectedStockIds: S.value
  }));
  return {
    // State
    activeFilters: o,
    searchQuery: l,
    sortBy: p,
    sortOrder: v,
    displayMode: _,
    currentPage: g,
    selectedStockIds: S,
    // Computed
    filteredStock: O,
    sortedStock: T,
    paginatedStock: V,
    selectedStock: Y,
    totalPages: U,
    currentState: k,
    // Methods
    applyFilter: x,
    removeFilter: B,
    clearFilters: Z,
    updateSort: P,
    updateSearch: M,
    goToPage: q,
    toggleStockSelection: G,
    isStockSelected: J,
    clearSelection: ee,
    createInputStock: W,
    getUniqueValues: ne,
    getFieldRange: re
  };
}
export {
  Gs as a,
  Us as b,
  Bs as c,
  Zs as d,
  qs as e,
  Ds as f,
  fe as g,
  Ks as h,
  zs as i,
  _s as j,
  Ws as k,
  Rs as l,
  Is as s,
  Ms as u,
  js as v
};

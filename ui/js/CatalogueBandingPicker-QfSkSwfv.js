import { m as h, r as w, d as Fe, w as M, x as $e, c as k, o as g, t as T, F as H, b as y, a as L, h as fe, D as Ie, l as ve, v as me, n as Ue, u as G, z as Pe, C as Be, k as Ee, p as Ae, i as J, H as Re } from "./vendor-vue-BgOQH8dC.js";
import { a as Ke } from "./vendor-axios-C2tLcKnN.js";
import { u as ze, j as Ve, L as We, I as Q } from "./EcommerceCalculator-CIJmnT15.js";
import { _ as je } from "./Launch-BRH4wqOZ.js";
function qe(o, n) {
  const { decor: e, finish: r, material: m, width: b } = n, p = (c) => o.entries.filter(c), l = e ? [...new Set(p((c) => c.decor === e).map((c) => c.finish))].sort() : [], s = e && r !== void 0 ? [...new Set(p((c) => c.decor === e && c.finish === r).map((c) => c.material))].sort() : [], f = e && r !== void 0 && m ? [...new Set(p((c) => c.decor === e && c.finish === r && c.material === m).map((c) => c.width))].sort((c, C) => c - C) : [], u = e && r !== void 0 && m && b !== void 0 ? [...new Set(p((c) => c.decor === e && c.finish === r && c.material === m && c.width === b).map((c) => c.thickness))].sort((c, C) => c - C) : [];
  let d = null;
  return e && r !== void 0 && m && b !== void 0 && n.thickness !== void 0 && (d = o.entries.find(
    (C) => C.decor === e && C.finish === r && C.material === m && C.width === b && C.thickness === n.thickness
  )?.code || null), { availableFinishes: l, availableMaterials: s, availableWidths: f, availableThicknesses: u, resolvedCode: d };
}
function oe(o) {
  return o.trim().toLowerCase().split(/[\s_-]+/).filter(Boolean);
}
function He(o) {
  return /[a-z]/.test(o) && /\d/.test(o);
}
const Ge = /* @__PURE__ */ new Set([
  "st",
  "p",
  "mm",
  "mb",
  "tm",
  "sm",
  "pm",
  "pa",
  "li",
  "ro",
  "r2"
]);
function he(o) {
  return oe(o).filter((n) => !Ge.has(n) && n.length > 1);
}
function Je(o, n) {
  let e = 0;
  const r = Math.min(o.length, n.length);
  for (; e < r && o[e] === n[e]; ) e++;
  return e;
}
function Qe(o) {
  return o ? typeof o == "string" ? { name: o } : o : {};
}
const Xe = 15;
function Ye(o, n) {
  const e = Qe(n);
  if (!e.name && !e.code && !e.material && !e.description || o.decors.length === 0) return null;
  if (e.name) {
    const f = e.name.trim().toLowerCase();
    if (f) {
      const u = o.decors.find((d) => d.decor.toLowerCase() === f);
      if (u) {
        const d = pe(o, u.decor);
        return { decor: u.decor, finish: d, score: 1e3, matchedOn: ["name"] };
      }
    }
  }
  const r = /* @__PURE__ */ new Set();
  for (const f of [e.name, e.material, e.description, e.code])
    if (f)
      for (const u of he(f)) r.add(u);
  const m = e.code || e.material ? oe(e.code || e.material || "") : [];
  let b = null, p = 0, l = [];
  for (const f of o.decors) {
    const u = he(f.decor);
    let d = 0;
    const c = [];
    if (e.name) {
      const S = e.name.trim().toLowerCase(), O = f.decor.toLowerCase();
      S && (S.includes(O) || O.includes(S)) && (d += 200, c.push("name-substring"));
    }
    let C = 0;
    for (const S of u)
      r.has(S) && (d += He(S) ? 20 : 5, C++);
    if (C > 0 && c.push("tokens"), e.color && f.color && e.color.trim().toLowerCase() === f.color.trim().toLowerCase() && (d += 30, c.push("color")), m.length > 0) {
      let S = 0;
      for (const O of o.entries) {
        if (O.decor !== f.decor) continue;
        const $ = Je(m, oe(O.code));
        $ > S && (S = $);
      }
      S >= 2 && (d += S * 15, c.push("code-prefix"));
    }
    d > p && (p = d, b = f, l = c);
  }
  if (!b || p < Xe) return null;
  const s = pe(o, b.decor);
  return { decor: b.decor, finish: s, score: p, matchedOn: l };
}
function pe(o, n) {
  const e = /* @__PURE__ */ new Set();
  for (const r of o.entries)
    r.decor === n && e.add(r.finish);
  return e.size === 1 ? [...e][0] : "";
}
const x = w(null), X = w([]), Y = w(null), Z = w(!1), ge = w("");
function Ze() {
  const o = h(() => x.value !== null), n = h(() => x.value?._id || null), e = h(() => x.value ? x.value.ecommerce?.company?.name || x.value.name || x.value.ecommerce?.slug || "Unknown" : null);
  async function r(s, f = 1) {
    Z.value = !0, ge.value = s || "";
    try {
      const u = { page: f, limit: 50 };
      s && (u.search = s);
      const d = await E.get("ecommerce/admin/organisations", { params: u });
      d.data?.success && (X.value = d.data.data || [], Y.value = d.data.pagination || null);
    } catch (u) {
      console.error("Failed to fetch organisations:", u), X.value = [], Y.value = null;
    } finally {
      Z.value = !1;
    }
  }
  function m(s) {
    x.value = s, s ? sessionStorage.setItem("adminSelectedOrg", JSON.stringify(s)) : sessionStorage.removeItem("adminSelectedOrg");
  }
  function b() {
    x.value = null, sessionStorage.removeItem("adminSelectedOrg");
  }
  function p() {
    const s = sessionStorage.getItem("adminSelectedOrg");
    if (s)
      try {
        x.value = JSON.parse(s);
      } catch {
        sessionStorage.removeItem("adminSelectedOrg");
      }
  }
  function l() {
    return x.value ? { orgId: x.value._id } : {};
  }
  return {
    // State
    selectedOrg: x,
    organisations: X,
    pagination: Y,
    loading: Z,
    searchQuery: ge,
    // Computed
    isManagingOtherOrg: o,
    currentOrgId: n,
    currentOrgName: e,
    // Methods
    fetchOrganisations: r,
    selectOrg: m,
    clearSelection: b,
    restoreSelection: p,
    getAdminQueryParams: l
  };
}
const K = w("production");
function et() {
  const o = h(() => K.value === "test");
  function n(r) {
    K.value = r, sessionStorage.setItem("ecommerceMode", r);
  }
  function e() {
    const r = sessionStorage.getItem("ecommerceMode");
    (r === "test" || r === "production") && (K.value = r);
  }
  return {
    currentMode: K,
    isTestMode: o,
    setMode: n,
    restoreMode: e
  };
}
const be = w(!1);
let ee = null;
function tt(o) {
  if (!(!o || be.value)) {
    if (!ee) {
      ee = o;
      return;
    }
    o !== ee && (be.value = !0);
  }
}
const { addNotice: ot } = ze(), B = {
  retries: 3,
  factor: 2,
  minTimeout: 1e3,
  maxTimeout: 1e4
}, E = Ke.create({
  withCredentials: !0,
  baseURL: "https://api.cutlistevo.com/",
  timeout: 5e3
}), { selectedOrg: ke } = Ze(), { currentMode: st } = et();
E.interceptors.request.use((o) => {
  const n = {};
  return ke.value?._id && (n.orgId = ke.value._id), st.value === "test" && (n.mode = "test"), Object.keys(n).length && (o.params = { ...n, ...o.params }), o;
});
function at(o) {
  if (!o.response) return !0;
  const n = o.response.status;
  return n >= 500 && n < 600;
}
function nt(o) {
  const n = B.minTimeout * Math.pow(B.factor, o), e = n * 0.2 * Math.random();
  return Math.min(n + e, B.maxTimeout);
}
function it(o) {
  return new Promise((n) => setTimeout(n, o));
}
E.interceptors.response.use(
  (o) => (tt(o.headers["x-app-version"]), o),
  async (o) => {
    const n = o.config, e = n?.url || "", r = e.includes("/user") || e.endsWith("user");
    if (at(o) && n && (n.__retryCount = n.__retryCount || 0, n.__retryCount < B.retries)) {
      n.__retryCount++;
      const m = nt(n.__retryCount - 1);
      return ot({
        message: `Connection issue, retrying in ${Math.round(m / 1e3)}s... (${n.__retryCount}/${B.retries})`,
        type: "warning"
      }), await it(m), E.request(n);
    }
    if (!o.response)
      return console.error("Request error:", o.message), Promise.reject(o);
    switch (o.response.status) {
      case 400:
        r ? console.log("User authentication: No valid session") : console.error("Bad request (400):", e);
        break;
      case 401:
        r ? console.log("User authentication: Token expired or invalid") : console.error("Unauthorized access (401):", e);
        break;
      case 403:
        r ? console.log("User authentication: Access denied") : console.error("Forbidden access (403):", e);
        break;
      case 404:
        console.error("Resource not found (404):", e);
        break;
      case 500:
        console.error("Server error (500):", e);
        break;
      default:
        console.error(`Error: ${o.response.status}`, e);
    }
    return Promise.reject(o);
  }
);
const rt = 300 * 1e3, te = /* @__PURE__ */ new Map();
function ct(o, n, e) {
  return `${o}|${n ?? ""}|${e ?? ""}`;
}
async function lt(o, n, e, r) {
  const m = ct(n, e, r), b = Date.now(), p = te.get(m);
  if (p && p.expiresAt > b) return p.promise;
  const l = {};
  typeof e == "number" && Number.isFinite(e) && e > 0 && (l.thickness = e), typeof r == "number" && Number.isFinite(r) && r > 0 && (l.maxGap = r);
  const s = `/catalogues/${n}/banding-axes`, f = o.get(s, { params: l }).then((u) => u.data).catch((u) => {
    throw te.delete(m), u;
  });
  return te.set(m, { promise: f, expiresAt: b + rt }), f;
}
const dt = { class: "catalogue-banding-picker" }, ut = {
  key: 0,
  class: "cbp-error"
}, ft = { class: "cbp-row cbp-row--decor" }, vt = ["for"], mt = {
  key: 0,
  class: "c-badge c-badge--light c-badge--sm cbp-count"
}, ht = ["id"], pt = {
  key: 0,
  class: "cbp-decor-selected"
}, gt = ["src"], bt = {
  key: 1,
  class: "cbp-decor-thumb cbp-decor-thumb--empty"
}, kt = { class: "cbp-decor-selected-meta" }, yt = { class: "cbp-decor-name" }, wt = { class: "c-badge c-badge--light c-badge--sm cbp-decor-code" }, _t = {
  key: 1,
  class: "cbp-decor-placeholder"
}, Ct = { class: "cbp-decor-search-wrap" }, St = {
  class: "cbp-decor-list",
  role: "listbox"
}, xt = {
  key: 1,
  class: "cbp-decor-empty"
}, Mt = ["aria-selected", "onMousedown", "onMouseenter"], Tt = ["src"], Ot = {
  key: 1,
  class: "cbp-decor-thumb cbp-decor-thumb--empty"
}, Dt = { class: "cbp-decor-option-meta" }, Lt = { class: "cbp-decor-option-main" }, Nt = { class: "cbp-decor-name" }, Ft = { class: "c-badge c-badge--light c-badge--sm cbp-decor-code" }, $t = {
  key: 0,
  class: "c-loz c-loz--col-2 c-loz--xs cbp-decor-suggested-badge"
}, It = {
  key: 0,
  class: "c-field-action extras-field-group cbp-row"
}, Ut = ["for"], Pt = { class: "c-field-action extras-field-group cbp-row" }, Bt = ["for"], Et = { class: "c-field-action extras-field-group cbp-row" }, At = ["for"], Rt = {
  key: 1,
  class: "cbp-resolved cbp-resolved--partial"
}, Kt = /* @__PURE__ */ Fe({
  __name: "CatalogueBandingPicker",
  props: {
    modelValue: { default: () => ({}) },
    catalogueKey: {},
    stockName: { default: "" },
    stockCode: { default: "" },
    stockMaterial: { default: "" },
    stockColor: { default: "" },
    initialCode: { default: "" },
    stockThickness: { default: void 0 },
    maxGap: { default: void 0 },
    id: { default: "cbp" },
    debug: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "update:resolvedCode"],
  setup(o, { emit: n }) {
    const e = o, r = h(() => ({
      name: e.stockName || void 0,
      code: e.stockCode || void 0,
      material: e.stockMaterial || void 0,
      color: e.stockColor || void 0
    })), m = n, b = w(!1), p = w(""), l = w(null), s = w({ ...e.modelValue }), f = w(""), u = w(!1), d = w(0), c = w(), C = w(), S = w(), { floatingStyles: O, teleportTarget: $, syncFloatingFont: ye } = Ve(
      c,
      C,
      {
        sizeApply({ rects: t, availableWidth: a, availableHeight: i, elements: v }) {
          const _ = t.reference.width, q = Math.min(a, Math.max(_, 420));
          Object.assign(v.floating.style, {
            maxHeight: `${Math.max(240, i)}px`,
            minWidth: `${_}px`,
            width: `${q}px`,
            maxWidth: `${a}px`
          });
        }
      },
      u
    );
    M(() => e.modelValue, (t) => {
      s.value = { ...t };
    }, { deep: !0 });
    function D() {
      m("update:modelValue", { ...s.value }), m("update:resolvedCode", ne.value);
    }
    const N = w(!1);
    M(() => e.initialCode, (t) => {
      t && !N.value && (N.value = !0);
    }, { immediate: !0 });
    async function we() {
      if (!e.catalogueKey) {
        l.value = null;
        return;
      }
      b.value = !0, p.value = "";
      try {
        l.value = await lt(E, e.catalogueKey, e.stockThickness, e.maxGap);
      } catch (t) {
        p.value = t?.response?.data?.error || "Failed to load banding options.", l.value = null;
      } finally {
        b.value = !1;
      }
    }
    M(
      [() => e.catalogueKey, () => e.stockThickness, () => e.maxGap, N],
      () => {
        N.value && we();
      },
      { immediate: !0 }
    );
    const se = h(() => l.value ? Ye(l.value, r.value) : null), I = h(() => {
      const t = se.value;
      return e.debug && l.value && console.log("[CatalogueBandingPicker] decor match", {
        catalogueKey: e.catalogueKey,
        stockIdentity: r.value,
        match: t || null,
        decorCount: l.value.decors.length,
        // Surface the first 3 decors so the developer can eyeball
        // the available identities vs the sheet identity. Avoid
        // dumping 1,669 SKUs into the console for egger.
        sampleDecors: l.value.decors.slice(0, 3).map((a) => a.decor)
      }), t?.decor || "";
    }), U = h(() => {
      if (!l.value) return [];
      const t = f.value.trim().toLowerCase(), a = [...l.value.decors];
      if (I.value) {
        const i = a.findIndex((v) => v.decor === I.value);
        if (i > 0) {
          const [v] = a.splice(i, 1);
          a.unshift(v);
        }
      }
      return t ? a.filter((i) => i.name.toLowerCase().includes(t) || i.decor.toLowerCase().includes(t)) : a;
    }), ae = h(() => l.value?.decors.length ?? 0), F = h(() => {
      if (!s.value.decor || !l.value) return null;
      const t = l.value.decors.find((a) => a.decor === s.value.decor);
      return t || { decor: s.value.decor, name: s.value.decor };
    }), P = h(() => l.value ? qe(l.value, s.value) : { availableFinishes: [], availableMaterials: [], availableWidths: [], availableThicknesses: [], resolvedCode: null }), A = h(() => P.value.availableFinishes), z = h(() => P.value.availableMaterials), _e = h(() => P.value.availableWidths), V = h(() => P.value.availableThicknesses), Ce = h(() => A.value.map((t) => ({ value: t, label: t || "(default)" }))), Se = h(() => z.value.map((t) => ({ value: t, label: t }))), xe = h(() => V.value.map((t) => ({ value: t, label: `${t} mm` }))), ne = h(() => P.value.resolvedCode), Me = h(() => !!s.value.decor && A.value.length > 1);
    M(A, (t) => {
      s.value.decor && s.value.finish === void 0 && t.length === 1 && ce(String(t[0]));
    }, { immediate: !0 }), M(z, (t) => {
      s.value.finish !== void 0 && s.value.material === void 0 && t.length === 1 && le(String(t[0]));
    }, { immediate: !0 }), M(_e, (t) => {
      if (!s.value.material) return;
      const a = s.value.width;
      a !== void 0 && t.includes(a) || (t.length > 0 ? de(String(t[0])) : a !== void 0 && de(""));
    }, { immediate: !0 }), M(V, (t) => {
      s.value.width !== void 0 && s.value.thickness === void 0 && t.length === 1 && ue(String(t[0]));
    }, { immediate: !0 });
    const Te = h(() => !!s.value.decor || s.value.finish !== void 0 || !!s.value.material || s.value.width !== void 0 || s.value.thickness !== void 0);
    let W = !1;
    M([l, () => e.initialCode], ([t, a]) => {
      if (!t || W) return;
      if (a) {
        const v = t.entries.find((_) => _.code === a);
        if (v) {
          s.value = { decor: v.decor, finish: v.finish, material: v.material, width: v.width, thickness: v.thickness }, W = !0, e.debug && console.log("[CatalogueBandingPicker] hydrated from stored SKU", { code: a, entry: v }), D();
          return;
        }
      }
      const i = se.value;
      i && !s.value.decor ? (s.value = i.finish ? { decor: i.decor, finish: i.finish } : { decor: i.decor }, W = !0, e.debug && console.log("[CatalogueBandingPicker] hydrated from sheet match", i), D()) : e.debug && !s.value.decor && console.log("[CatalogueBandingPicker] no auto-hydration", {
        stockIdentity: r.value,
        reason: !e.stockName && !e.stockCode && !e.stockMaterial ? "no sheet identity fields populated" : "no banding decor met the match-confidence threshold"
      });
    }, { immediate: !0 });
    function ie(t) {
      s.value = { decor: t }, R(), D();
    }
    function re() {
      u.value = !0, f.value = "", Re(() => {
        ye(), S.value?.focus();
        const t = U.value, a = s.value.decor;
        if (a) {
          const i = t.findIndex((v) => v.decor === a);
          d.value = i >= 0 ? i : 0;
        } else
          d.value = 0;
      });
    }
    function R() {
      u.value = !1, f.value = "";
    }
    function Oe() {
      N.value = !0, u.value ? R() : re();
    }
    function De(t) {
      (t.key === "Enter" || t.key === " " || t.key === "ArrowDown") && (t.preventDefault(), N.value = !0, re());
    }
    function Le(t) {
      const a = U.value;
      switch (t.key) {
        case "ArrowDown":
          t.preventDefault(), d.value < a.length - 1 && d.value++;
          break;
        case "ArrowUp":
          t.preventDefault(), d.value > 0 && d.value--;
          break;
        case "Enter":
          t.preventDefault(), a[d.value] && ie(a[d.value].decor);
          break;
        case "Escape":
          t.preventDefault(), R();
          break;
      }
    }
    M(U, () => {
      d.value = 0;
    });
    function j(t) {
      if (!u.value) return;
      const a = t.target;
      c.value?.contains(a) || C.value?.contains(a) || R();
    }
    M(u, (t) => {
      t ? document.addEventListener("mousedown", j) : document.removeEventListener("mousedown", j);
    }), $e(() => {
      document.removeEventListener("mousedown", j);
    });
    function ce(t) {
      s.value = { ...s.value, finish: t, material: void 0, width: void 0, thickness: void 0 }, D();
    }
    function le(t) {
      const a = { ...s.value, material: t || void 0, width: void 0, thickness: void 0 };
      if (t && typeof e.stockThickness == "number" && Number.isFinite(e.stockThickness)) {
        const v = Ne(a.decor, a.finish, t).find((_) => _ >= e.stockThickness);
        v !== void 0 && (a.width = v);
      }
      s.value = a, D();
    }
    function Ne(t, a, i) {
      if (!t || a === void 0 || !l.value) return [];
      const v = /* @__PURE__ */ new Set();
      for (const _ of l.value.entries)
        _.decor === t && _.finish === a && _.material === i && v.add(_.width);
      return [...v].sort((_, q) => _ - q);
    }
    function de(t) {
      const a = t === "" ? void 0 : Number(t);
      s.value = { ...s.value, width: Number.isFinite(a) ? a : void 0, thickness: void 0 }, D();
    }
    function ue(t) {
      const a = t === "" ? void 0 : Number(t);
      s.value = { ...s.value, thickness: Number.isFinite(a) ? a : void 0 }, D();
    }
    return (t, a) => (g(), k("div", dt, [
      p.value ? (g(), k("div", ut, T(p.value), 1)) : (g(), k(H, { key: 1 }, [
        y("div", ft, [
          y("label", {
            class: "cbp-label",
            for: `${o.id}-decor`
          }, [
            a[6] || (a[6] = Ie(" Decor ", -1)),
            ae.value ? (g(), k("span", mt, T(ae.value), 1)) : L("", !0)
          ], 8, vt),
          y("div", {
            id: `${o.id}-decor`,
            ref_key: "triggerRef",
            ref: c,
            class: ve(["cbp-decor-trigger", { focused: u.value, empty: !s.value.decor }]),
            tabindex: "0",
            onClick: Oe,
            onKeydown: De
          }, [
            F.value ? (g(), k("div", pt, [
              F.value.imageUrl ? (g(), k("img", {
                key: 0,
                src: F.value.imageUrl,
                class: "cbp-decor-thumb",
                alt: ""
              }, null, 8, gt)) : (g(), k("span", bt, T(F.value.name.slice(0, 2).toUpperCase()), 1)),
              y("span", kt, [
                y("span", yt, T(F.value.name), 1),
                y("span", wt, T(F.value.decor), 1)
              ])
            ])) : (g(), k("span", _t, T(I.value ? "Pick a decor — material match suggested" : "Pick a decor…"), 1))
          ], 42, ht),
          (g(), fe(Ae, {
            to: G($),
            disabled: !G($)
          }, [
            u.value ? (g(), k("div", {
              key: 0,
              ref_key: "floatingRef",
              ref: C,
              class: "cbp-decor-dropdown",
              style: Ue(G(O)),
              onMousedown: a[2] || (a[2] = me(() => {
              }, ["self", "prevent"]))
            }, [
              y("div", Ct, [
                Pe(y("input", {
                  ref_key: "searchRef",
                  ref: S,
                  "onUpdate:modelValue": a[0] || (a[0] = (i) => f.value = i),
                  type: "text",
                  class: "cbp-decor-search",
                  placeholder: "Search by name or decor code…",
                  onKeydown: Le
                }, null, 544), [
                  [Be, f.value]
                ])
              ]),
              y("div", St, [
                b.value && !l.value ? (g(), fe(We, {
                  key: 0,
                  size: "small",
                  label: "Loading…",
                  class: "cbp-decor-empty"
                })) : U.value.length === 0 ? (g(), k("div", xt, "No decors match.")) : L("", !0),
                (g(!0), k(H, null, Ee(U.value.slice(0, 200), (i, v) => (g(), k("div", {
                  key: i.decor,
                  class: ve(["cbp-decor-option", {
                    highlighted: v === d.value,
                    selected: s.value.decor === i.decor,
                    suggested: i.decor === I.value
                  }]),
                  role: "option",
                  "aria-selected": s.value.decor === i.decor,
                  onMousedown: me((_) => ie(i.decor), ["prevent"]),
                  onMouseenter: (_) => d.value = v
                }, [
                  i.imageUrl ? (g(), k("img", {
                    key: 0,
                    src: i.imageUrl,
                    class: "cbp-decor-thumb cbp-decor-thumb--lazy",
                    loading: "lazy",
                    alt: "",
                    onLoad: a[1] || (a[1] = (_) => _.target.classList.add("cbp-decor-thumb--loaded"))
                  }, null, 40, Tt)) : (g(), k("span", Ot, T(i.name.slice(0, 2).toUpperCase()), 1)),
                  y("div", Dt, [
                    y("div", Lt, [
                      y("span", Nt, T(i.name), 1),
                      y("span", Ft, T(i.decor), 1)
                    ]),
                    i.decor === I.value ? (g(), k("span", $t, "matches material")) : L("", !0)
                  ])
                ], 42, Mt))), 128))
              ])
            ], 36)) : L("", !0)
          ], 8, ["to", "disabled"]))
        ]),
        l.value ? (g(), k(H, { key: 0 }, [
          Me.value ? (g(), k("div", It, [
            y("label", {
              class: "extras-location-label",
              for: `${o.id}-finish`
            }, "Finish", 8, Ut),
            J(Q, {
              id: `${o.id}-finish`,
              type: "select",
              "enable-label": !1,
              value: s.value.finish ?? "",
              options: Ce.value,
              disabled: !s.value.decor || A.value.length === 0,
              text: { select: s.value.decor ? "Pick a finish…" : "Pick a decor first" },
              output: "string",
              "onUpdate:value": a[3] || (a[3] = (i) => ce(String(i ?? "")))
            }, null, 8, ["id", "value", "options", "disabled", "text"])
          ])) : L("", !0),
          y("div", Pt, [
            y("label", {
              class: "extras-location-label",
              for: `${o.id}-material`
            }, "Material", 8, Bt),
            J(Q, {
              id: `${o.id}-material`,
              type: "select",
              "enable-label": !1,
              value: s.value.material ?? "",
              options: Se.value,
              disabled: s.value.finish === void 0 || z.value.length === 0,
              text: { select: s.value.finish !== void 0 ? "Pick a material…" : "Pick a finish first" },
              output: "string",
              "onUpdate:value": a[4] || (a[4] = (i) => le(String(i ?? "")))
            }, null, 8, ["id", "value", "options", "disabled", "text"])
          ]),
          y("div", Et, [
            y("label", {
              class: "extras-location-label",
              for: `${o.id}-thickness`
            }, "Thickness (mm)", 8, At),
            J(Q, {
              id: `${o.id}-thickness`,
              type: "select",
              "enable-label": !1,
              value: s.value.thickness ?? "",
              options: xe.value,
              disabled: s.value.width === void 0 || V.value.length === 0,
              text: { select: s.value.width !== void 0 ? "Pick a thickness…" : "Pick a material first" },
              output: "number",
              "onUpdate:value": a[5] || (a[5] = (i) => ue(i == null ? "" : String(i)))
            }, null, 8, ["id", "value", "options", "disabled", "text"])
          ])
        ], 64)) : L("", !0),
        !ne.value && Te.value ? (g(), k("div", Rt, " Pick all fields to lock in a banding SKU. ")) : L("", !0)
      ], 64))
    ]));
  }
}), qt = /* @__PURE__ */ je(Kt, [["__scopeId", "data-v-4fd27c9a"]]);
export {
  qt as default
};

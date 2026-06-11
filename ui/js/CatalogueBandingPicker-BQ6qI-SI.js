import { a as Oe, q as ee, t as Te, L as Me, I as ve, v as fe } from "./EcommerceCalculator-ClNeqZHE.js";
import { a as $e } from "./vendor-axios-DZng9m6S.js";
import { c, g as w, d as we, w as M, I as Pe, o as u, e as m, t as I, F as G, u as f, j as L, H as Ue, f as P, y as me, b as le, T as Ne, A as he, B as Ee, J as Fe, K as Be, C as pe, i as ge, n as Ve } from "./vendor-vue-QD0FJS8o.js";
import { f as Re } from "./bandingAxesCache-DMR2pLrK.js";
import { _ as Ae } from "./Launch-NSW_K3VG.js";
const O = w(null), te = w([]), oe = w(null), se = w(!1), be = w("");
function ze() {
  const e = c(() => O.value !== null), n = c(() => O.value?._id || null), t = c(() => O.value ? O.value.ecommerce?.company?.name || O.value.name || O.value.ecommerce?.slug || "Unknown" : null);
  async function h(d, g = 1) {
    se.value = !0, be.value = d || "";
    try {
      const b = { page: g, limit: 50 };
      d && (b.search = d);
      const S = await R.get("ecommerce/admin/organisations", { params: b });
      S.data?.success && (te.value = S.data.data || [], oe.value = S.data.pagination || null);
    } catch (b) {
      console.error("Failed to fetch organisations:", b), te.value = [], oe.value = null;
    } finally {
      se.value = !1;
    }
  }
  function D(d) {
    O.value = d, d ? sessionStorage.setItem("adminSelectedOrg", JSON.stringify(d)) : sessionStorage.removeItem("adminSelectedOrg");
  }
  function x() {
    O.value = null, sessionStorage.removeItem("adminSelectedOrg");
  }
  function C() {
    const d = sessionStorage.getItem("adminSelectedOrg");
    if (d)
      try {
        O.value = JSON.parse(d);
      } catch {
        sessionStorage.removeItem("adminSelectedOrg");
      }
  }
  function a() {
    return O.value ? { orgId: O.value._id } : {};
  }
  return {
    // State
    selectedOrg: O,
    organisations: te,
    pagination: oe,
    loading: se,
    searchQuery: be,
    // Computed
    isManagingOtherOrg: e,
    currentOrgId: n,
    currentOrgName: t,
    // Methods
    fetchOrganisations: h,
    selectOrg: D,
    clearSelection: x,
    restoreSelection: C,
    getAdminQueryParams: a
  };
}
const H = w("production");
function je() {
  const e = c(() => H.value === "test");
  function n(h) {
    H.value = h, sessionStorage.setItem("ecommerceMode", h);
  }
  function t() {
    const h = sessionStorage.getItem("ecommerceMode");
    (h === "test" || h === "production") && (H.value = h);
  }
  return {
    currentMode: H,
    isTestMode: e,
    setMode: n,
    restoreMode: t
  };
}
const ke = w(!1);
let ae = null;
function We(e) {
  if (!(!e || ke.value)) {
    if (!ae) {
      ae = e;
      return;
    }
    e !== ae && (ke.value = !0);
  }
}
const { addNotice: qe } = Oe(), V = {
  retries: 3,
  factor: 2,
  minTimeout: 1e3,
  maxTimeout: 1e4
}, R = $e.create({
  withCredentials: !0,
  baseURL: "https://api.cutlistevo.com/",
  timeout: 5e3
}), { selectedOrg: ye } = ze(), { currentMode: Ke } = je();
R.interceptors.request.use((e) => {
  const n = {};
  return ye.value?._id && (n.orgId = ye.value._id), Ke.value === "test" && (n.mode = "test"), Object.keys(n).length && (e.params = { ...n, ...e.params }), e;
});
function Ge(e) {
  if (!e.response) return !0;
  const n = e.response.status;
  return n >= 500 && n < 600;
}
function He(e) {
  const n = V.minTimeout * Math.pow(V.factor, e), t = n * 0.2 * Math.random();
  return Math.min(n + t, V.maxTimeout);
}
function Je(e) {
  return new Promise((n) => setTimeout(n, e));
}
R.interceptors.response.use(
  (e) => (We(e.headers["x-app-version"]), e),
  async (e) => {
    const n = e.config, t = n?.url || "", h = t.includes("/user") || t.endsWith("user");
    if (Ge(e) && n && (n.__retryCount = n.__retryCount || 0, n.__retryCount < V.retries)) {
      n.__retryCount++;
      const D = He(n.__retryCount - 1);
      return qe({
        message: `Connection issue, retrying in ${Math.round(D / 1e3)}s... (${n.__retryCount}/${V.retries})`,
        type: "warning"
      }), await Je(D), R.request(n);
    }
    if (!e.response)
      return console.error("Request error:", e.message), Promise.reject(e);
    switch (e.response.status) {
      case 400:
        h ? console.log("User authentication: No valid session") : console.error("Bad request (400):", t);
        break;
      case 401:
        h ? console.log("User authentication: Token expired or invalid") : console.error("Unauthorized access (401):", t);
        break;
      case 403:
        h ? console.log("User authentication: Access denied") : console.error("Forbidden access (403):", t);
        break;
      case 404:
        console.error("Resource not found (404):", t);
        break;
      case 500:
        console.error("Server error (500):", t);
        break;
      default:
        console.error(`Error: ${e.response.status}`, t);
    }
    return Promise.reject(e);
  }
);
function Qe(e) {
  const { payload: n, selection: t, decorSearch: h } = e, D = c(() => e.suggestedDecor?.value ?? ""), x = c(() => n.value?.levelDefs ?? []), C = c(() => (n.value?.decors.length ?? 0) > 0), a = c(() => (n.value?.widths.length ?? 0) > 0), d = c(() => (n.value?.thicknesses.length ?? 0) > 0), g = c(() => n.value?.decors.length ?? 0), b = c(() => {
    if (!n.value) return [];
    const r = h.value.trim().toLowerCase(), s = [...n.value.decors];
    if (D.value) {
      const k = s.findIndex((y) => y.value === D.value);
      if (k > 0) {
        const [y] = s.splice(k, 1);
        s.unshift(y);
      }
    }
    return r ? s.filter((k) => k.name.toLowerCase().includes(r) || k.value.toLowerCase().includes(r)) : s;
  }), S = c(() => {
    if (!t.value.decor || !n.value) return null;
    const r = n.value.decors.find((s) => s.value === t.value.decor);
    return r || { value: t.value.decor, name: t.value.decor };
  }), U = c(() => C.value ? 1 : 0), p = c(() => U.value + x.value.length), _ = c(() => p.value + (a.value ? 1 : 0)), T = c(() => {
    const r = n.value;
    return r ? r.rows.map((s) => {
      const k = [];
      C.value && k.push(s.decor?.name ?? "");
      for (let y = 0; y < x.value.length; y++) k.push(s.levels[y] ?? "");
      return a.value && k.push(s.width !== void 0 ? String(s.width) : ""), d.value && k.push(s.thickness !== void 0 ? String(s.thickness) : ""), k;
    }) : [];
  }), F = c(() => {
    const r = t.value, s = [];
    C.value && s.push(r.decor);
    for (let k = 0; k < x.value.length; k++) s.push(r.levels?.[k]);
    return a.value && s.push(r.width !== void 0 ? String(r.width) : void 0), d.value && s.push(r.thickness !== void 0 ? String(r.thickness) : void 0), s;
  }), A = c(() => x.value.map((r, s) => ee(T.value, U.value + s, F.value).sort())), N = c(() => a.value ? ee(T.value, p.value, F.value).map(Number).sort((r, s) => r - s) : []), E = c(() => d.value ? ee(T.value, _.value, F.value).map(Number).sort((r, s) => r - s) : []), z = c(() => A.value.map((r) => r.map((s) => ({ value: s, label: s || "(default)" })))), j = c(() => E.value.map((r) => ({ value: r, label: `${r} mm` }))), W = c(() => {
    const r = n.value, s = t.value;
    if (!r || C.value && !s.decor) return null;
    for (let y = 0; y < x.value.length; y++) if (s.levels?.[y] === void 0) return null;
    return a.value && s.width === void 0 || d.value && s.thickness === void 0 ? null : r.rows.find((y) => (!C.value || (y.decor?.name ?? "") === s.decor) && x.value.every((J, B) => (y.levels[B] ?? "") === (s.levels?.[B] ?? "")) && (!a.value || y.width === s.width) && (!d.value || y.thickness === s.thickness))?.code ?? null;
  }), q = c(() => !!t.value.decor || (t.value.levels?.some((r) => r !== void 0) ?? !1) || t.value.width !== void 0 || t.value.thickness !== void 0);
  return {
    levelDefs: x,
    hasDecor: C,
    hasWidth: a,
    hasThickness: d,
    decorOptionCount: g,
    filteredDecors: b,
    selectedDecorOption: S,
    levelAvailable: A,
    availableWidths: N,
    availableThicknesses: E,
    levelOptions: z,
    thicknessOptions: j,
    resolvedCode: W,
    isPartial: q
  };
}
const Ye = { class: "catalogue-banding-picker levels-picker" }, Xe = {
  key: 0,
  class: "cbp-error"
}, Ze = {
  key: 0,
  class: "cbp-row cbp-row--decor"
}, et = ["for"], tt = {
  key: 0,
  class: "c-badge c-badge--light c-badge--sm cbp-count"
}, ot = ["id"], st = {
  key: 0,
  class: "cbp-decor-selected"
}, at = ["src"], lt = {
  key: 1,
  class: "cbp-decor-thumb cbp-decor-thumb--empty"
}, nt = { class: "cbp-decor-selected-meta" }, it = { class: "cbp-decor-name" }, rt = {
  key: 0,
  class: "c-badge c-badge--light c-badge--sm cbp-decor-code"
}, ct = {
  key: 1,
  class: "cbp-decor-placeholder"
}, ut = { class: "cbp-decor-search-wrap" }, dt = {
  class: "cbp-decor-list",
  role: "listbox"
}, vt = {
  key: 1,
  class: "cbp-decor-empty"
}, ft = ["aria-selected", "onMousedown", "onMouseenter"], mt = ["src"], ht = {
  key: 1,
  class: "cbp-decor-thumb cbp-decor-thumb--empty"
}, pt = { class: "cbp-decor-option-meta" }, gt = { class: "cbp-decor-option-main" }, bt = { class: "cbp-decor-name" }, kt = {
  key: 0,
  class: "c-badge c-badge--light c-badge--sm cbp-decor-code"
}, yt = {
  key: 0,
  class: "c-loz c-loz--col-2 c-loz--xs cbp-decor-suggested-badge"
}, wt = ["for"], xt = {
  key: 0,
  class: "c-field-action extras-field-group cbp-row"
}, Ct = ["for"], _t = {
  key: 2,
  class: "cbp-resolved cbp-resolved--partial"
}, Dt = /* @__PURE__ */ we({
  __name: "LevelsPicker",
  props: {
    payload: { default: null },
    loading: { type: Boolean, default: !1 },
    error: { default: "" },
    modelValue: { default: () => ({}) },
    initialCode: { default: "" },
    suggestedDecor: { default: "" },
    stockThickness: { default: void 0 },
    showDecor: { type: Boolean, default: !1 },
    decorLabel: { default: "Decor" },
    thicknessLabel: { default: "Thickness (mm)" },
    tidPrefix: { default: "catalogue-banding" },
    id: { default: "lvp" },
    partIndex: { default: 0 },
    scope: {},
    debug: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "update:resolvedCode", "engage"],
  setup(e, { emit: n }) {
    const t = e, h = n, D = c(() => t.payload?.definedFieldLabels?.decor?.trim() || t.decorLabel), x = c(() => t.payload?.definedFieldLabels?.thickness?.trim() || t.thicknessLabel), C = c(() => t.payload), a = w({ ...t.modelValue }), d = w(""), g = w(!1), b = w(0), S = c(() => t.suggestedDecor), U = w(), p = w(), _ = w(), { floatingStyles: T, teleportTarget: F, syncFloatingFont: A } = Te(
      U,
      p,
      {
        sizeApply({ rects: o, availableWidth: l, availableHeight: i, elements: v }) {
          const $ = o.reference.width, Le = Math.min(l, Math.max($, 420));
          Object.assign(v.floating.style, {
            maxHeight: `${Math.max(240, i)}px`,
            minWidth: `${$}px`,
            width: `${Le}px`,
            maxWidth: `${l}px`
          });
        }
      },
      g
    );
    M(() => t.modelValue, (o) => {
      a.value = { ...o };
    }, { deep: !0 });
    function N() {
      h("update:modelValue", { ...a.value }), h("update:resolvedCode", ne.value);
    }
    const {
      levelDefs: E,
      hasDecor: z,
      hasWidth: j,
      hasThickness: W,
      decorOptionCount: q,
      filteredDecors: r,
      selectedDecorOption: s,
      levelAvailable: k,
      availableWidths: y,
      availableThicknesses: J,
      levelOptions: B,
      thicknessOptions: xe,
      resolvedCode: ne,
      isPartial: Ce
    } = Qe({
      payload: C,
      selection: a,
      decorSearch: d,
      suggestedDecor: S
    });
    function Q(o) {
      return o === 0 ? !z.value || !!a.value.decor : a.value.levels?.[o - 1] !== void 0;
    }
    function _e(o) {
      return o === 0 ? "Pick a decor first" : `Pick ${E.value[o - 1]?.label ?? "the previous option"} first`;
    }
    const Y = c(() => (!j.value || a.value.width !== void 0) && E.value.every((o, l) => a.value.levels?.[l] !== void 0));
    M(k, (o) => {
      for (let l = 0; l < o.length; l++)
        if (Q(l) && a.value.levels?.[l] === void 0 && o[l].length === 1) {
          ce(l, String(o[l][0]));
          return;
        }
    }, { immediate: !0, deep: !0 }), M(y, (o) => {
      if (!j.value || !E.value.every((i, v) => a.value.levels?.[v] !== void 0)) return;
      const l = a.value.width;
      if (!(l !== void 0 && o.includes(l)))
        if (o.length > 0) {
          const i = t.stockThickness, v = typeof i == "number" && Number.isFinite(i) ? o.find(($) => $ >= i) : void 0;
          ue(v ?? o[0]);
        } else l !== void 0 && ue(void 0);
    }, { immediate: !0 }), M(J, (o) => {
      W.value && Y.value && a.value.thickness === void 0 && o.length === 1 && de(String(o[0]));
    }, { immediate: !0 });
    let X = !1;
    M([C, () => t.initialCode, () => t.suggestedDecor], ([o, l]) => {
      if (!(!o || X)) {
        if (l) {
          const i = o.rows.find((v) => v.code === l);
          if (i) {
            a.value = {
              decor: i.decor?.name,
              levels: [...i.levels],
              width: i.width,
              thickness: i.thickness
            }, X = !0, N();
            return;
          }
        }
        t.suggestedDecor && !a.value.decor && (a.value = { decor: t.suggestedDecor, levels: [], width: void 0, thickness: void 0 }, X = !0, N());
      }
    }, { immediate: !0 });
    function ie(o) {
      a.value = { decor: o, levels: [], width: void 0, thickness: void 0 }, K(), N();
    }
    function re() {
      g.value = !0, d.value = "", Ve(() => {
        A(), _.value?.focus();
        const o = r.value, l = a.value.decor;
        b.value = l ? Math.max(0, o.findIndex((i) => i.value === l)) : 0;
      });
    }
    function K() {
      g.value = !1, d.value = "";
    }
    function De() {
      h("engage"), g.value ? K() : re();
    }
    function Se(o) {
      (o.key === "Enter" || o.key === " " || o.key === "ArrowDown") && (o.preventDefault(), h("engage"), re());
    }
    function Ie(o) {
      const l = r.value;
      switch (o.key) {
        case "ArrowDown":
          o.preventDefault(), b.value < l.length - 1 && b.value++;
          break;
        case "ArrowUp":
          o.preventDefault(), b.value > 0 && b.value--;
          break;
        case "Enter":
          o.preventDefault(), l[b.value] && ie(l[b.value].value);
          break;
        case "Escape":
          o.preventDefault(), K();
          break;
      }
    }
    M(r, () => {
      b.value = 0;
    });
    function Z(o) {
      if (!g.value) return;
      const l = o.target;
      U.value?.contains(l) || p.value?.contains(l) || K();
    }
    M(g, (o) => {
      o ? document.addEventListener("mousedown", Z) : document.removeEventListener("mousedown", Z);
    }), Pe(() => {
      document.removeEventListener("mousedown", Z);
    });
    function ce(o, l) {
      const i = [...a.value.levels ?? []];
      i[o] = l;
      for (let v = o + 1; v < E.value.length; v++) i[v] = void 0;
      a.value = { ...a.value, levels: i, width: void 0, thickness: void 0 }, N();
    }
    function ue(o) {
      a.value = { ...a.value, width: o, thickness: void 0 }, N();
    }
    function de(o) {
      const l = o === "" ? void 0 : Number(o);
      a.value = { ...a.value, thickness: Number.isFinite(l) ? l : void 0 }, N();
    }
    return (o, l) => (u(), m("div", Ye, [
      e.error ? (u(), m("div", Xe, I(e.error), 1)) : (u(), m(G, { key: 1 }, [
        e.showDecor || f(z) ? (u(), m("div", Ze, [
          L("label", {
            class: "cbp-label",
            for: `${e.id}-decor`
          }, [
            Ue(I(D.value) + " ", 1),
            f(q) ? (u(), m("span", tt, I(f(q)), 1)) : P("", !0)
          ], 8, et),
          L("div", {
            id: `${e.id}-decor`,
            ref_key: "triggerRef",
            ref: U,
            class: me(["cbp-decor-trigger", { focused: g.value, empty: !a.value.decor }]),
            tabindex: "0",
            onClick: De,
            onKeydown: Se
          }, [
            f(s) ? (u(), m("div", st, [
              f(s).imageUrl ? (u(), m("img", {
                key: 0,
                src: f(s).imageUrl,
                class: "cbp-decor-thumb",
                alt: ""
              }, null, 8, at)) : (u(), m("span", lt, I(f(s).name.slice(0, 2).toUpperCase()), 1)),
              L("span", nt, [
                L("span", it, I(f(s).name), 1),
                f(s).value !== f(s).name ? (u(), m("span", rt, I(f(s).value), 1)) : P("", !0)
              ])
            ])) : (u(), m("span", ct, I(S.value ? "Pick a decor — material match suggested" : "Pick a decor…"), 1))
          ], 42, ot),
          (u(), le(Ne, {
            to: f(F),
            disabled: !f(F)
          }, [
            g.value ? (u(), m("div", {
              key: 0,
              ref_key: "floatingRef",
              ref: p,
              class: "cbp-decor-dropdown",
              style: Ee(f(T)),
              onMousedown: l[2] || (l[2] = he(() => {
              }, ["self", "prevent"]))
            }, [
              L("div", ut, [
                Fe(L("input", {
                  ref_key: "searchRef",
                  ref: _,
                  "onUpdate:modelValue": l[0] || (l[0] = (i) => d.value = i),
                  type: "text",
                  class: "cbp-decor-search",
                  placeholder: "Search by name or code…",
                  onKeydown: Ie
                }, null, 544), [
                  [Be, d.value]
                ])
              ]),
              L("div", dt, [
                e.loading && !e.payload ? (u(), le(Me, {
                  key: 0,
                  size: "small",
                  label: "Loading…",
                  class: "cbp-decor-empty"
                })) : f(r).length === 0 ? (u(), m("div", vt, "No options match.")) : P("", !0),
                (u(!0), m(G, null, pe(f(r).slice(0, 200), (i, v) => (u(), m("div", {
                  key: i.value,
                  class: me(["cbp-decor-option", {
                    highlighted: v === b.value,
                    selected: a.value.decor === i.value,
                    suggested: i.value === S.value
                  }]),
                  role: "option",
                  "aria-selected": a.value.decor === i.value,
                  onMousedown: he(($) => ie(i.value), ["prevent"]),
                  onMouseenter: ($) => b.value = v
                }, [
                  i.imageUrl ? (u(), m("img", {
                    key: 0,
                    src: i.imageUrl,
                    class: "cbp-decor-thumb cbp-decor-thumb--lazy",
                    loading: "lazy",
                    alt: "",
                    onLoad: l[1] || (l[1] = ($) => $.target.classList.add("cbp-decor-thumb--loaded"))
                  }, null, 40, mt)) : (u(), m("span", ht, I(i.name.slice(0, 2).toUpperCase()), 1)),
                  L("div", pt, [
                    L("div", gt, [
                      L("span", bt, I(i.name), 1),
                      i.value !== i.name ? (u(), m("span", kt, I(i.value), 1)) : P("", !0)
                    ]),
                    i.value === S.value ? (u(), m("span", yt, "matches material")) : P("", !0)
                  ])
                ], 42, ft))), 128))
              ])
            ], 36)) : P("", !0)
          ], 8, ["to", "disabled"]))
        ])) : P("", !0),
        e.payload ? (u(), m(G, { key: 1 }, [
          (u(!0), m(G, null, pe(f(E), (i, v) => (u(), m("div", {
            key: v,
            class: "c-field-action extras-field-group cbp-row"
          }, [
            L("label", {
              class: "extras-location-label",
              for: `${e.id}-level-${v}`
            }, I(i.label), 9, wt),
            ge(ve, {
              id: `${e.id}-level-${v}`,
              type: "select",
              "enable-label": !1,
              value: a.value.levels?.[v] ?? "",
              options: f(B)[v],
              disabled: !Q(v) || f(B)[v].length === 0,
              text: { select: Q(v) ? `Pick ${i.label}…` : _e(v) },
              output: "string",
              "onUpdate:value": ($) => ce(v, String($ ?? ""))
            }, null, 8, ["id", "value", "options", "disabled", "text", "onUpdate:value"])
          ]))), 128)),
          f(W) ? (u(), m("div", xt, [
            L("label", {
              class: "extras-location-label",
              for: `${e.id}-thickness`
            }, I(x.value), 9, Ct),
            ge(ve, {
              id: `${e.id}-thickness`,
              type: "select",
              "enable-label": !1,
              value: a.value.thickness ?? "",
              options: f(xe),
              disabled: !Y.value || f(J).length === 0,
              text: { select: Y.value ? "Pick a thickness…" : "Pick the options first" },
              output: "number",
              "onUpdate:value": l[3] || (l[3] = (i) => de(i == null ? "" : String(i)))
            }, null, 8, ["id", "value", "options", "disabled", "text"])
          ])) : P("", !0)
        ], 64)) : P("", !0),
        !f(ne) && f(Ce) ? (u(), m("div", _t, " Pick all fields to lock in a selection. ")) : P("", !0)
      ], 64))
    ]));
  }
}), St = /* @__PURE__ */ Ae(Dt, [["__scopeId", "data-v-1a65b0b3"]]), $t = /* @__PURE__ */ we({
  __name: "CatalogueBandingPicker",
  props: {
    modelValue: { default: () => ({}) },
    extraId: {},
    stockName: { default: "" },
    stockCode: { default: "" },
    stockMaterial: { default: "" },
    stockColor: { default: "" },
    initialCode: { default: "" },
    stockThickness: { default: void 0 },
    maxGap: { default: void 0 },
    id: { default: "cbp" },
    partIndex: { default: 0 },
    scope: {},
    tidPrefix: { default: "catalogue-banding" },
    showDecor: { type: Boolean, default: !0 },
    debug: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "update:resolvedCode"],
  setup(e, { emit: n }) {
    const t = e, h = n, D = c(() => ({
      name: t.stockName || void 0,
      code: t.stockCode || void 0,
      material: t.stockMaterial || void 0,
      color: t.stockColor || void 0
    })), x = w(!1), C = w(""), a = w(null), d = c(() => a.value && fe(a.value, D.value)?.value || ""), g = w(!1);
    function b() {
      g.value = !0;
    }
    M(() => t.initialCode, (p) => {
      p && !g.value && (g.value = !0);
    }, { immediate: !0 }), M(() => t.showDecor, (p) => {
      !p && !g.value && (g.value = !0);
    }, { immediate: !0 });
    function S(p) {
      if (p && typeof p == "object") {
        const _ = p.response?.data?.error;
        if (typeof _ == "string") return _;
      }
      return "";
    }
    async function U() {
      if (!t.extraId) {
        a.value = null;
        return;
      }
      x.value = !0, C.value = "";
      try {
        a.value = await Re(R, t.extraId, t.stockThickness, t.maxGap);
      } catch (p) {
        C.value = S(p) || "Failed to load banding options.", a.value = null;
      } finally {
        x.value = !1;
      }
    }
    return M(
      [() => t.extraId, () => t.stockThickness, () => t.maxGap, g],
      () => {
        g.value && U();
      },
      { immediate: !0 }
    ), M(a, (p) => {
      if (!t.debug || !p) return;
      const _ = fe(p, D.value);
      console.log("[CatalogueBandingPicker] decor match", {
        extraId: t.extraId,
        stockIdentity: D.value,
        match: _ || null,
        decorCount: p.decors.length,
        sampleDecors: p.decors.slice(0, 3).map((T) => T.value)
      }), _ || console.log("[CatalogueBandingPicker] no auto-hydration", { stockIdentity: D.value });
    }), (p, _) => (u(), le(St, {
      payload: a.value,
      loading: x.value,
      error: C.value,
      "model-value": e.modelValue,
      "initial-code": e.initialCode,
      "suggested-decor": d.value,
      "stock-thickness": e.stockThickness,
      "show-decor": e.showDecor,
      "tid-prefix": e.tidPrefix,
      id: e.id,
      "part-index": e.partIndex,
      scope: e.scope,
      debug: e.debug,
      onEngage: b,
      "onUpdate:modelValue": _[0] || (_[0] = (T) => h("update:modelValue", T)),
      "onUpdate:resolvedCode": _[1] || (_[1] = (T) => h("update:resolvedCode", T))
    }, null, 8, ["payload", "loading", "error", "model-value", "initial-code", "suggested-decor", "stock-thickness", "show-decor", "tid-prefix", "id", "part-index", "scope", "debug"]));
  }
});
export {
  $t as default
};

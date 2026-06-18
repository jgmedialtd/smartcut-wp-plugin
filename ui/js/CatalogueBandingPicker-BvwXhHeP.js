import { u as Pe, w as te, x as Ue, L as Ne, I as fe, y as me } from "./EcommerceCalculator-D4REKTU7.js";
import { a as Ee } from "./vendor-axios-DZng9m6S.js";
import { x as c, s as b, d as De, k as $, z as Fe, o as d, c as h, t as O, F as K, u as m, a as T, i as Re, b as U, g as he, j as ne, q as Be, w as pe, n as Ae, h as Ve, E as ze, f as ge, m as be, I as je } from "./vendor-vue-D6ZfZC0P.js";
import { f as We } from "./bandingAxesCache-DMR2pLrK.js";
import { _ as qe } from "./Launch-BnHg2-HI.js";
const L = b(null), ae = b([]), se = b(null), oe = b(!1), ke = b(""), ye = b(!1), we = b(null), H = b(!1);
let xe = !1;
function Ge() {
  const e = c(() => L.value !== null), n = c(
    () => ye.value && H.value && !L.value && !we.value
  ), t = c(() => L.value?._id || null), p = c(() => L.value ? L.value.ecommerce?.company?.name || L.value.name || L.value.ecommerce?.slug || "Unknown" : null);
  async function I(f, x = 1) {
    oe.value = !0, ke.value = f || "";
    try {
      const u = { page: x, limit: 50 };
      f && (u.search = f);
      const k = await R.get("ecommerce/admin/organisations", { params: u });
      k.data?.success && (ae.value = k.data.data || [], se.value = k.data.pagination || null);
    } catch (u) {
      console.error("Failed to fetch organisations:", u), ae.value = [], se.value = null;
    } finally {
      oe.value = !1;
    }
  }
  async function C(f) {
    try {
      return (await R.get("ecommerce/admin/organisations", { params: { id: f } })).data?.data?.[0] || null;
    } catch (x) {
      return console.error("Failed to fetch organisation by id:", x), null;
    }
  }
  async function S(f, x) {
    if (ye.value = !!f, we.value = x || null, !f) {
      H.value = !0;
      return;
    }
    if (!xe) {
      if (xe = !0, H.value = !1, g(), !L.value && x) {
        const u = await C(x);
        u && s(u);
      }
      H.value = !0;
    }
  }
  function s(f) {
    L.value = f, f ? sessionStorage.setItem("adminSelectedOrg", JSON.stringify(f)) : sessionStorage.removeItem("adminSelectedOrg");
  }
  function _() {
    L.value = null, sessionStorage.removeItem("adminSelectedOrg");
  }
  function g() {
    const f = sessionStorage.getItem("adminSelectedOrg");
    if (f)
      try {
        L.value = JSON.parse(f);
      } catch {
        sessionStorage.removeItem("adminSelectedOrg");
      }
  }
  function D() {
    return L.value ? { orgId: L.value._id } : {};
  }
  return {
    // State
    selectedOrg: L,
    organisations: ae,
    pagination: se,
    loading: oe,
    searchQuery: ke,
    // Computed
    isManagingOtherOrg: e,
    currentOrgId: t,
    currentOrgName: p,
    mustSelectStore: n,
    // Methods
    fetchOrganisations: I,
    fetchOrgById: C,
    initAdminSelection: S,
    selectOrg: s,
    clearSelection: _,
    restoreSelection: g,
    getAdminQueryParams: D
  };
}
const J = b("production");
function Ke() {
  const e = c(() => J.value === "test");
  function n(p) {
    J.value = p, sessionStorage.setItem("ecommerceMode", p);
  }
  function t() {
    const p = sessionStorage.getItem("ecommerceMode");
    (p === "test" || p === "production") && (J.value = p);
  }
  return {
    currentMode: J,
    isTestMode: e,
    setMode: n,
    restoreMode: t
  };
}
const Ce = b(!1);
let le = null;
function He(e) {
  if (!(!e || Ce.value)) {
    if (!le) {
      le = e;
      return;
    }
    e !== le && (Ce.value = !0);
  }
}
const { addNotice: Je } = Pe(), A = {
  retries: 3,
  factor: 2,
  minTimeout: 1e3,
  maxTimeout: 1e4
}, R = Ee.create({
  withCredentials: !0,
  baseURL: "https://api.cutlistevo.com/",
  timeout: 5e3
}), { selectedOrg: _e } = Ge(), { currentMode: Qe } = Ke();
R.interceptors.request.use((e) => {
  const n = {};
  return _e.value?._id && (n.orgId = _e.value._id), Qe.value === "test" && (n.mode = "test"), Object.keys(n).length && (e.params = { ...n, ...e.params }), e;
});
function Ye(e) {
  if (!e.response) return !0;
  const n = e.response.status;
  return n >= 500 && n < 600;
}
function Xe(e) {
  const n = A.minTimeout * Math.pow(A.factor, e), t = n * 0.2 * Math.random();
  return Math.min(n + t, A.maxTimeout);
}
function Ze(e) {
  return new Promise((n) => setTimeout(n, e));
}
R.interceptors.response.use(
  (e) => (He(e.headers["x-app-version"]), e),
  async (e) => {
    const n = e.config, t = n?.url || "", p = t.includes("/user") || t.endsWith("user");
    if (Ye(e) && n && (n.__retryCount = n.__retryCount || 0, n.__retryCount < A.retries)) {
      n.__retryCount++;
      const I = Xe(n.__retryCount - 1);
      return Je({
        message: `Connection issue, retrying in ${Math.round(I / 1e3)}s... (${n.__retryCount}/${A.retries})`,
        type: "warning"
      }), await Ze(I), R.request(n);
    }
    if (!e.response)
      return console.error("Request error:", e.message), Promise.reject(e);
    switch (e.response.status) {
      case 400:
        p ? console.log("User authentication: No valid session") : console.error("Bad request (400):", t);
        break;
      case 401:
        p ? console.log("User authentication: Token expired or invalid") : console.error("Unauthorized access (401):", t);
        break;
      case 403:
        p ? console.log("User authentication: Access denied") : console.error("Forbidden access (403):", t);
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
function et(e) {
  const { payload: n, selection: t, decorSearch: p } = e, I = c(() => e.suggestedDecor?.value ?? ""), C = c(() => n.value?.levelDefs ?? []), S = c(() => (n.value?.decors.length ?? 0) > 0), s = c(() => (n.value?.widths.length ?? 0) > 0), _ = c(() => (n.value?.thicknesses.length ?? 0) > 0), g = c(() => n.value?.decors.length ?? 0), D = c(() => {
    if (!n.value) return [];
    const r = p.value.trim().toLowerCase(), o = [...n.value.decors];
    if (I.value) {
      const y = o.findIndex((w) => w.value === I.value);
      if (y > 0) {
        const [w] = o.splice(y, 1);
        o.unshift(w);
      }
    }
    return r ? o.filter((y) => y.name.toLowerCase().includes(r) || y.value.toLowerCase().includes(r)) : o;
  }), f = c(() => {
    if (!t.value.decor || !n.value) return null;
    const r = n.value.decors.find((o) => o.value === t.value.decor);
    return r || { value: t.value.decor, name: t.value.decor };
  }), x = c(() => S.value ? 1 : 0), u = c(() => x.value + C.value.length), k = c(() => u.value + (s.value ? 1 : 0)), M = c(() => {
    const r = n.value;
    return r ? r.rows.map((o) => {
      const y = [];
      S.value && y.push(o.decor?.name ?? "");
      for (let w = 0; w < C.value.length; w++) y.push(o.levels[w] ?? "");
      return s.value && y.push(o.width !== void 0 ? String(o.width) : ""), _.value && y.push(o.thickness !== void 0 ? String(o.thickness) : ""), y;
    }) : [];
  }), F = c(() => {
    const r = t.value, o = [];
    S.value && o.push(r.decor);
    for (let y = 0; y < C.value.length; y++) o.push(r.levels?.[y]);
    return s.value && o.push(r.width !== void 0 ? String(r.width) : void 0), _.value && o.push(r.thickness !== void 0 ? String(r.thickness) : void 0), o;
  }), V = c(() => C.value.map((r, o) => te(M.value, x.value + o, F.value).sort())), N = c(() => s.value ? te(M.value, u.value, F.value).map(Number).sort((r, o) => r - o) : []), E = c(() => _.value ? te(M.value, k.value, F.value).map(Number).sort((r, o) => r - o) : []), z = c(() => V.value.map((r) => r.map((o) => ({ value: o, label: o || "(default)" })))), j = c(() => E.value.map((r) => ({ value: r, label: `${r} mm` }))), W = c(() => {
    const r = n.value, o = t.value;
    if (!r || S.value && !o.decor) return null;
    for (let w = 0; w < C.value.length; w++) if (o.levels?.[w] === void 0) return null;
    return s.value && o.width === void 0 || _.value && o.thickness === void 0 ? null : r.rows.find((w) => (!S.value || (w.decor?.name ?? "") === o.decor) && C.value.every((Q, B) => (w.levels[B] ?? "") === (o.levels?.[B] ?? "")) && (!s.value || w.width === o.width) && (!_.value || w.thickness === o.thickness))?.code ?? null;
  }), q = c(() => !!t.value.decor || (t.value.levels?.some((r) => r !== void 0) ?? !1) || t.value.width !== void 0 || t.value.thickness !== void 0);
  return {
    levelDefs: C,
    hasDecor: S,
    hasWidth: s,
    hasThickness: _,
    decorOptionCount: g,
    filteredDecors: D,
    selectedDecorOption: f,
    levelAvailable: V,
    availableWidths: N,
    availableThicknesses: E,
    levelOptions: z,
    thicknessOptions: j,
    resolvedCode: W,
    isPartial: q
  };
}
const tt = { class: "catalogue-banding-picker levels-picker" }, at = {
  key: 0,
  class: "cbp-error"
}, st = {
  key: 0,
  class: "cbp-row cbp-row--decor"
}, ot = ["for"], lt = {
  key: 0,
  class: "c-badge c-badge--light c-badge--sm cbp-count"
}, nt = ["id"], it = {
  key: 0,
  class: "cbp-decor-selected"
}, rt = ["src"], ct = {
  key: 1,
  class: "cbp-decor-thumb cbp-decor-thumb--empty"
}, ut = { class: "cbp-decor-selected-meta" }, dt = { class: "cbp-decor-name" }, vt = {
  key: 0,
  class: "c-badge c-badge--light c-badge--sm cbp-decor-code"
}, ft = {
  key: 1,
  class: "cbp-decor-placeholder"
}, mt = { class: "cbp-decor-search-wrap" }, ht = {
  class: "cbp-decor-list",
  role: "listbox"
}, pt = {
  key: 1,
  class: "cbp-decor-empty"
}, gt = ["aria-selected", "onMousedown", "onMouseenter"], bt = ["src"], kt = {
  key: 1,
  class: "cbp-decor-thumb cbp-decor-thumb--empty"
}, yt = { class: "cbp-decor-option-meta" }, wt = { class: "cbp-decor-option-main" }, xt = { class: "cbp-decor-name" }, Ct = {
  key: 0,
  class: "c-badge c-badge--light c-badge--sm cbp-decor-code"
}, _t = {
  key: 0,
  class: "c-loz c-loz--col-2 c-loz--xs cbp-decor-suggested-badge"
}, Dt = ["for"], St = {
  key: 0,
  class: "c-field-action extras-field-group cbp-row"
}, It = ["for"], Lt = {
  key: 2,
  class: "cbp-resolved cbp-resolved--partial"
}, Ot = /* @__PURE__ */ De({
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
    const t = e, p = n, I = c(() => t.payload?.definedFieldLabels?.decor?.trim() || t.decorLabel), C = c(() => t.payload?.definedFieldLabels?.thickness?.trim() || t.thicknessLabel), S = c(() => t.payload), s = b({ ...t.modelValue }), _ = b(""), g = b(!1), D = b(0), f = c(() => t.suggestedDecor), x = b(), u = b(), k = b(), { floatingStyles: M, teleportTarget: F, syncFloatingFont: V } = Ue(
      x,
      u,
      {
        sizeApply({ rects: a, availableWidth: l, availableHeight: i, elements: v }) {
          const P = a.reference.width, $e = Math.min(l, Math.max(P, 420));
          Object.assign(v.floating.style, {
            maxHeight: `${Math.max(240, i)}px`,
            minWidth: `${P}px`,
            width: `${$e}px`,
            maxWidth: `${l}px`
          });
        }
      },
      g
    );
    $(() => t.modelValue, (a) => {
      s.value = { ...a };
    }, { deep: !0 });
    function N() {
      p("update:modelValue", { ...s.value }), p("update:resolvedCode", ie.value);
    }
    const {
      levelDefs: E,
      hasDecor: z,
      hasWidth: j,
      hasThickness: W,
      decorOptionCount: q,
      filteredDecors: r,
      selectedDecorOption: o,
      levelAvailable: y,
      availableWidths: w,
      availableThicknesses: Q,
      levelOptions: B,
      thicknessOptions: Se,
      resolvedCode: ie,
      isPartial: Ie
    } = et({
      payload: S,
      selection: s,
      decorSearch: _,
      suggestedDecor: f
    });
    function Y(a) {
      return a === 0 ? !z.value || !!s.value.decor : s.value.levels?.[a - 1] !== void 0;
    }
    function Le(a) {
      return a === 0 ? "Pick a decor first" : `Pick ${E.value[a - 1]?.label ?? "the previous option"} first`;
    }
    const X = c(() => (!j.value || s.value.width !== void 0) && E.value.every((a, l) => s.value.levels?.[l] !== void 0));
    $(y, (a) => {
      for (let l = 0; l < a.length; l++)
        if (Y(l) && s.value.levels?.[l] === void 0 && a[l].length === 1) {
          ue(l, String(a[l][0]));
          return;
        }
    }, { immediate: !0, deep: !0 }), $(w, (a) => {
      if (!j.value || !E.value.every((i, v) => s.value.levels?.[v] !== void 0)) return;
      const l = s.value.width;
      if (!(l !== void 0 && a.includes(l)))
        if (a.length > 0) {
          const i = t.stockThickness, v = typeof i == "number" && Number.isFinite(i) ? a.find((P) => P >= i) : void 0;
          de(v ?? a[0]);
        } else l !== void 0 && de(void 0);
    }, { immediate: !0 }), $(Q, (a) => {
      W.value && X.value && s.value.thickness === void 0 && a.length === 1 && ve(String(a[0]));
    }, { immediate: !0 });
    let Z = !1;
    $([S, () => t.initialCode, () => t.suggestedDecor], ([a, l]) => {
      if (!(!a || Z)) {
        if (l) {
          const i = a.rows.find((v) => v.code === l);
          if (i) {
            s.value = {
              decor: i.decor?.name,
              levels: [...i.levels],
              width: i.width,
              thickness: i.thickness
            }, Z = !0, N();
            return;
          }
        }
        t.suggestedDecor && !s.value.decor && (s.value = { decor: t.suggestedDecor, levels: [], width: void 0, thickness: void 0 }, Z = !0, N());
      }
    }, { immediate: !0 });
    function re(a) {
      s.value = { decor: a, levels: [], width: void 0, thickness: void 0 }, G(), N();
    }
    function ce() {
      g.value = !0, _.value = "", je(() => {
        V(), k.value?.focus();
        const a = r.value, l = s.value.decor;
        D.value = l ? Math.max(0, a.findIndex((i) => i.value === l)) : 0;
      });
    }
    function G() {
      g.value = !1, _.value = "";
    }
    function Oe() {
      p("engage"), g.value ? G() : ce();
    }
    function Te(a) {
      (a.key === "Enter" || a.key === " " || a.key === "ArrowDown") && (a.preventDefault(), p("engage"), ce());
    }
    function Me(a) {
      const l = r.value;
      switch (a.key) {
        case "ArrowDown":
          a.preventDefault(), D.value < l.length - 1 && D.value++;
          break;
        case "ArrowUp":
          a.preventDefault(), D.value > 0 && D.value--;
          break;
        case "Enter":
          a.preventDefault(), l[D.value] && re(l[D.value].value);
          break;
        case "Escape":
          a.preventDefault(), G();
          break;
      }
    }
    $(r, () => {
      D.value = 0;
    });
    function ee(a) {
      if (!g.value) return;
      const l = a.target;
      x.value?.contains(l) || u.value?.contains(l) || G();
    }
    $(g, (a) => {
      a ? document.addEventListener("mousedown", ee) : document.removeEventListener("mousedown", ee);
    }), Fe(() => {
      document.removeEventListener("mousedown", ee);
    });
    function ue(a, l) {
      const i = [...s.value.levels ?? []];
      i[a] = l;
      for (let v = a + 1; v < E.value.length; v++) i[v] = void 0;
      s.value = { ...s.value, levels: i, width: void 0, thickness: void 0 }, N();
    }
    function de(a) {
      s.value = { ...s.value, width: a, thickness: void 0 }, N();
    }
    function ve(a) {
      const l = a === "" ? void 0 : Number(a);
      s.value = { ...s.value, thickness: Number.isFinite(l) ? l : void 0 }, N();
    }
    return (a, l) => (d(), h("div", tt, [
      e.error ? (d(), h("div", at, O(e.error), 1)) : (d(), h(K, { key: 1 }, [
        e.showDecor || m(z) ? (d(), h("div", st, [
          T("label", {
            class: "cbp-label",
            for: `${e.id}-decor`
          }, [
            Re(O(I.value) + " ", 1),
            m(q) ? (d(), h("span", lt, O(m(q)), 1)) : U("", !0)
          ], 8, ot),
          T("div", {
            id: `${e.id}-decor`,
            ref_key: "triggerRef",
            ref: x,
            class: he(["cbp-decor-trigger", { focused: g.value, empty: !s.value.decor }]),
            tabindex: "0",
            onClick: Oe,
            onKeydown: Te
          }, [
            m(o) ? (d(), h("div", it, [
              m(o).imageUrl ? (d(), h("img", {
                key: 0,
                src: m(o).imageUrl,
                class: "cbp-decor-thumb",
                alt: ""
              }, null, 8, rt)) : (d(), h("span", ct, O(m(o).name.slice(0, 2).toUpperCase()), 1)),
              T("span", ut, [
                T("span", dt, O(m(o).name), 1),
                m(o).value !== m(o).name ? (d(), h("span", vt, O(m(o).value), 1)) : U("", !0)
              ])
            ])) : (d(), h("span", ft, O(f.value ? "Pick a decor — material match suggested" : "Pick a decor…"), 1))
          ], 42, nt),
          (d(), ne(Be, {
            to: m(F),
            disabled: !m(F)
          }, [
            g.value ? (d(), h("div", {
              key: 0,
              ref_key: "floatingRef",
              ref: u,
              class: "cbp-decor-dropdown",
              style: Ae(m(M)),
              onMousedown: l[2] || (l[2] = pe(() => {
              }, ["self", "prevent"]))
            }, [
              T("div", mt, [
                Ve(T("input", {
                  ref_key: "searchRef",
                  ref: k,
                  "onUpdate:modelValue": l[0] || (l[0] = (i) => _.value = i),
                  type: "text",
                  class: "cbp-decor-search",
                  placeholder: "Search by name or code…",
                  onKeydown: Me
                }, null, 544), [
                  [ze, _.value]
                ])
              ]),
              T("div", ht, [
                e.loading && !e.payload ? (d(), ne(Ne, {
                  key: 0,
                  size: "small",
                  label: "Loading…",
                  class: "cbp-decor-empty"
                })) : m(r).length === 0 ? (d(), h("div", pt, "No options match.")) : U("", !0),
                (d(!0), h(K, null, ge(m(r).slice(0, 200), (i, v) => (d(), h("div", {
                  key: i.value,
                  class: he(["cbp-decor-option", {
                    highlighted: v === D.value,
                    selected: s.value.decor === i.value,
                    suggested: i.value === f.value
                  }]),
                  role: "option",
                  "aria-selected": s.value.decor === i.value,
                  onMousedown: pe((P) => re(i.value), ["prevent"]),
                  onMouseenter: (P) => D.value = v
                }, [
                  i.imageUrl ? (d(), h("img", {
                    key: 0,
                    src: i.imageUrl,
                    class: "cbp-decor-thumb cbp-decor-thumb--lazy",
                    loading: "lazy",
                    alt: "",
                    onLoad: l[1] || (l[1] = (P) => P.target.classList.add("cbp-decor-thumb--loaded"))
                  }, null, 40, bt)) : (d(), h("span", kt, O(i.name.slice(0, 2).toUpperCase()), 1)),
                  T("div", yt, [
                    T("div", wt, [
                      T("span", xt, O(i.name), 1),
                      i.value !== i.name ? (d(), h("span", Ct, O(i.value), 1)) : U("", !0)
                    ]),
                    i.value === f.value ? (d(), h("span", _t, "matches material")) : U("", !0)
                  ])
                ], 42, gt))), 128))
              ])
            ], 36)) : U("", !0)
          ], 8, ["to", "disabled"]))
        ])) : U("", !0),
        e.payload ? (d(), h(K, { key: 1 }, [
          (d(!0), h(K, null, ge(m(E), (i, v) => (d(), h("div", {
            key: v,
            class: "c-field-action extras-field-group cbp-row"
          }, [
            T("label", {
              class: "extras-location-label",
              for: `${e.id}-level-${v}`
            }, O(i.label), 9, Dt),
            be(fe, {
              id: `${e.id}-level-${v}`,
              type: "select",
              "enable-label": !1,
              value: s.value.levels?.[v] ?? "",
              options: m(B)[v],
              disabled: !Y(v) || m(B)[v].length === 0,
              text: { select: Y(v) ? `Pick ${i.label}…` : Le(v) },
              output: "string",
              "onUpdate:value": (P) => ue(v, String(P ?? ""))
            }, null, 8, ["id", "value", "options", "disabled", "text", "onUpdate:value"])
          ]))), 128)),
          m(W) ? (d(), h("div", St, [
            T("label", {
              class: "extras-location-label",
              for: `${e.id}-thickness`
            }, O(C.value), 9, It),
            be(fe, {
              id: `${e.id}-thickness`,
              type: "select",
              "enable-label": !1,
              value: s.value.thickness ?? "",
              options: m(Se),
              disabled: !X.value || m(Q).length === 0,
              text: { select: X.value ? "Pick a thickness…" : "Pick the options first" },
              output: "number",
              "onUpdate:value": l[3] || (l[3] = (i) => ve(i == null ? "" : String(i)))
            }, null, 8, ["id", "value", "options", "disabled", "text"])
          ])) : U("", !0)
        ], 64)) : U("", !0),
        !m(ie) && m(Ie) ? (d(), h("div", Lt, " Pick all fields to lock in a selection. ")) : U("", !0)
      ], 64))
    ]));
  }
}), Tt = /* @__PURE__ */ qe(Ot, [["__scopeId", "data-v-1a65b0b3"]]), Et = /* @__PURE__ */ De({
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
    const t = e, p = n, I = c(() => ({
      name: t.stockName || void 0,
      code: t.stockCode || void 0,
      material: t.stockMaterial || void 0,
      color: t.stockColor || void 0
    })), C = b(!1), S = b(""), s = b(null), _ = c(() => s.value && me(s.value, I.value)?.value || ""), g = b(!1);
    function D() {
      g.value = !0;
    }
    $(() => t.initialCode, (u) => {
      u && !g.value && (g.value = !0);
    }, { immediate: !0 }), $(() => t.showDecor, (u) => {
      !u && !g.value && (g.value = !0);
    }, { immediate: !0 });
    function f(u) {
      if (u && typeof u == "object") {
        const k = u.response?.data?.error;
        if (typeof k == "string") return k;
      }
      return "";
    }
    async function x() {
      if (!t.extraId) {
        s.value = null;
        return;
      }
      C.value = !0, S.value = "";
      try {
        s.value = await We(R, t.extraId, t.stockThickness, t.maxGap);
      } catch (u) {
        S.value = f(u) || "Failed to load banding options.", s.value = null;
      } finally {
        C.value = !1;
      }
    }
    return $(
      [() => t.extraId, () => t.stockThickness, () => t.maxGap, g],
      () => {
        g.value && x();
      },
      { immediate: !0 }
    ), $(s, (u) => {
      if (!t.debug || !u) return;
      const k = me(u, I.value);
      console.log("[CatalogueBandingPicker] decor match", {
        extraId: t.extraId,
        stockIdentity: I.value,
        match: k || null,
        decorCount: u.decors.length,
        sampleDecors: u.decors.slice(0, 3).map((M) => M.value)
      }), k || console.log("[CatalogueBandingPicker] no auto-hydration", { stockIdentity: I.value });
    }), (u, k) => (d(), ne(Tt, {
      payload: s.value,
      loading: C.value,
      error: S.value,
      "model-value": e.modelValue,
      "initial-code": e.initialCode,
      "suggested-decor": _.value,
      "stock-thickness": e.stockThickness,
      "show-decor": e.showDecor,
      "tid-prefix": e.tidPrefix,
      id: e.id,
      "part-index": e.partIndex,
      scope: e.scope,
      debug: e.debug,
      onEngage: D,
      "onUpdate:modelValue": k[0] || (k[0] = (M) => p("update:modelValue", M)),
      "onUpdate:resolvedCode": k[1] || (k[1] = (M) => p("update:resolvedCode", M))
    }, null, 8, ["payload", "loading", "error", "model-value", "initial-code", "suggested-decor", "stock-thickness", "show-decor", "tid-prefix", "id", "part-index", "scope", "debug"]));
  }
});
export {
  Et as default
};

import { d as he, r, c as R, L as ke, $ as ye, k as be, a as G, o as F, E as W, q as U, s as P, N as L, F as Q, x as X, h as we, v as Se, n as V, _ as Ce } from "./vendor-vue-ChIbPezZ.js";
import { U as Ee, I as Y, bF as Z, bA as De, bz as p, bG as Fe, bD as b } from "./components-Bf39GJww.js";
import { o as _, r as s, s as o, a as x, _ as te, u as $e, c as A, b as I, x as g } from "./vendor-zod-PVURV34D.js";
const Te = _({
  name: o().trim(),
  price: o().trim().default("0"),
  options: s(o(), x(o()))
}), Pe = s(o(), Te), Le = _({
  name: o().trim(),
  options: s(
    o(),
    $e([o(), x(o())])
  ).optional(),
  variations: Pe.optional(),
  price: o().trim().default("0"),
  type: te(["simple", "variable"]).optional()
}), ee = s(o(), Le);
_({
  env: o().default("production"),
  showDevInfo: I().default(!1),
  debug: I().default(!1),
  el: s(o(), g()).default({}),
  inputType: te(["manual", "formula"]).default("manual"),
  settings: s(o(), g()).default({}),
  // Note: HTMLInputElement cannot be validated with Zod, using unknown
  inputs: s(o(), g()).default({}),
  formatting: s(o(), g()).default({}),
  product: s(o(), g()).default({}),
  stock: x(Ee).default([]),
  variations: x(g()).default([]),
  selectedVariation: s(o(), g()).default({}),
  machiningPricing: A().optional(),
  quantityPricing: I().default(!1),
  extrasData: _({
    banding: ee,
    finish: ee
  }).default({
    banding: {},
    finish: {}
  }),
  formulaURL: o().url().optional().or(o().default("")),
  formulaSpec: o().default(""),
  hardwareResult: s(o(), A()).default({}),
  // HardwareResult type from formula.ts
  metadata: A().optional()
  // Metadata from optimize/main
});
const Ue = /* @__PURE__ */ he({
  __name: "Vanilla",
  emits: ["ready"],
  setup(_e, { expose: ae, emit: oe }) {
    const ne = L(() => import("./components-Bf39GJww.js").then((e) => e.bL)), re = L(() => import("./components-Bf39GJww.js").then((e) => e.bJ)), le = L(() => import("./components-Bf39GJww.js").then((e) => e.bK)), ie = L(() => import("./components-Bf39GJww.js").then((e) => e.bM)), se = oe, ue = "production", ce = "4.0.98", h = r(!1), l = r([]), i = r({
      banding: null,
      finish: null,
      planing: null,
      machining: null
    }), fe = R(() => l.value.map((e) => {
      if (e instanceof Y) return e;
      const { issues: t, ...a } = e, n = Array.isArray(t) ? t : [];
      return new Y({ ...a, issues: n });
    })), k = r("USD"), v = r("en-US"), d = r("manual"), w = r(""), S = ke(null), N = r(null), m = r(), C = r(!1), B = r([]), O = r(Z()), $ = r(!1), M = r("calculator"), f = r(null), j = r(null), pe = R(() => d.value === "manual" || d.value === "formula" && (w.value || S.value) ? C.value ? l.value.length > 0 : !0 : !1), ve = R(() => {
      if (!(!$.value || !f.value))
        return {
          enabled: !0,
          apiUrl: f.value.baseUrl,
          orgSlug: f.value.orgSlug,
          isCustomDomain: f.value.isCustomDomain
        };
    });
    Ce("calculator", () => m.value);
    const y = (e) => {
      h.value && console.log("SmartCut -", ...e);
    }, T = (e) => {
      console.error(`SmartCut - ${e}`);
    }, me = () => {
      const e = new CustomEvent("smartcut/validationError");
      window.dispatchEvent(e);
    }, q = () => {
      const e = new CustomEvent("smartcut/calculating");
      window.dispatchEvent(e);
    }, H = (e) => {
      N.value = e;
    }, E = (e = 0, t = v.value) => {
      if (e === !0) return "";
      try {
        t = t.replace("_", "-");
        const a = Number(e);
        return !a && a !== 0 ? "" : isNaN(a) ? (console.error("formatPrice - invalid price:", e), "") : a.toLocaleString(t, {
          style: "currency",
          currency: k.value
        });
      } catch (a) {
        return console.error("Error formatting price:", a), "";
      }
    }, J = (e, t) => {
      if (!i.value?.[e]) return null;
      const n = t.filter((c) => c && c.trim() !== "").join("|"), u = p(i.value, [e, n]);
      return typeof u == "number" ? u : parseFloat(u);
    }, de = (e) => {
      if (e.length === 0) return;
      const t = e.map((c) => {
        const D = c.toData();
        return D.autoAdd = !0, D;
      }), a = [...l.value, ...t], n = [], u = /* @__PURE__ */ new Set();
      for (const c of a) {
        const D = `${c.material}-${c.l}-${c.w}-${c.t}`;
        u.has(D) || (u.add(D), n.push(c));
      }
      l.value = n, y(["Stock added. Total stocks:", l.value.length]), m.value && V(() => {
        m.value.initMaterialsThicknesses({ stock: l.value });
      });
    }, ge = (e) => {
      const t = `${e.material}-${e.l}-${e.w}-${e.t}`;
      l.value = l.value.filter((a) => `${a.material}-${a.l}-${a.w}-${a.t}` !== t), y(["Stock removed. Total stocks:", l.value.length]), m.value && V(() => {
        m.value.initMaterialsThicknesses({ stock: l.value });
      });
    }, K = (e) => {
      Fe(e), e.api && (f.value = {
        baseUrl: e.api.baseUrl,
        orgSlug: e.api.orgSlug,
        isCustomDomain: e.api.isCustomDomain
      }), e.stockFilter?.enabled ? (C.value = !0, $.value = e.stockFilter.serverMode || !1, B.value = $.value ? [] : (e.stock || []).map((t) => ({ ...t })), O.value = e.stockFilter.config || Z(), l.value = [], y(["Stock filter enabled", $.value ? "(server mode)" : `with ${B.value.length} available options`])) : (C.value = !1, l.value = e.stock), i.value.banding = p(e, ["banding", "pricing"]), i.value.finish = p(e, ["finish", "pricing"]), i.value.planing = p(e, ["planing", "pricing"]), i.value.machining = p(e, ["machining", "pricing"]), b(e, ["options", "currency"]) && (k.value = p(e, ["options", "currency"])), b(e, ["options", "locale"]) && (v.value = p(e, ["options", "locale"]).replace("_", "-")), (b(e, ["options", "formula", "url"]) || b(e, ["options", "formula", "spec"])) && (d.value = "formula", w.value = p(e, ["options", "formula", "url"]) ?? null, S.value = p(e, ["options", "formula", "spec"]) ?? null), V(() => {
        if (m.value) {
          const t = {
            ...e,
            stock: l.value,
            // Pass flag to indicate stock filter is enabled
            stockFilterEnabled: C.value
          };
          m.value.init(t);
        }
      });
    }, z = (e) => {
      const t = e;
      if (t.checkout = {
        formattedTotalStockCost: "",
        formattedBandingCost: {},
        formattedFinishCost: {}
      }, e?.metadata?.totalStockCost && (t.checkout.formattedTotalStockCost = e.metadata.totalStockCost.toLocaleString(
        v.value,
        {
          style: "currency",
          currency: k.value
        }
      )), e?.metadata?.bandingLengthByType)
        for (const [n, u] of Object.entries(e.metadata.bandingLengthByType)) {
          if (!b(i.value, ["banding", n])) {
            T(`Banding price ${n} not found`);
            continue;
          }
          t.checkout.formattedBandingCost[n] = (u / 1e3 * i.value.banding[n]).toLocaleString(v.value, { style: "currency", currency: k.value });
        }
      if (e?.metadata?.finishAreaByType)
        for (const [n, u] of Object.entries(e.metadata.finishAreaByType)) {
          if (!b(i.value, ["finish", n])) {
            T(`Finish price ${n} not found`);
            continue;
          }
          t.checkout.formattedFinishCost[n] = (u / 1e6 * i.value.finish[n]).toLocaleString(v.value, { style: "currency", currency: k.value });
        }
      const a = new CustomEvent("smartcut/result", {
        detail: JSON.parse(JSON.stringify(t))
      });
      window.dispatchEvent(a);
    };
    return ye(() => {
      console.log(`💥 Powered by https://smartcut.dev ${"V" + ce} [${ue}]`);
      const e = new URLSearchParams(window.location.search);
      h.value = !!e.has("debug");
      const t = e.get("view");
      (t === "track-order" || t === "order-lookup") && (M.value = "order-lookup");
      const a = e.get("product");
      a && (j.value = a, y(["Deep link to product:", a])), h.value && console.log("Smartcut - debug enabled");
    }), be(() => {
      window.smartcutCheckout = { init: K }, se("ready");
      const e = new CustomEvent("smartcut/ready");
      window.dispatchEvent(e);
    }), ae({
      init: K,
      debug: h,
      stock: l,
      pricing: i,
      currency: k,
      locale: v,
      inputType: d,
      formulaURL: w,
      formulaSpec: S,
      hardWareResult: N,
      log: y,
      error: T,
      calculating: q,
      result: z,
      formatPrice: E,
      findExtrasPrice: J,
      setHardwareResult: H
    }), (e, t) => (F(), G(Q, null, [
      W(P(le), { position: "top-left" }),
      M.value === "order-lookup" && f.value ? (F(), U(P(ie), {
        key: 0,
        "api-base-url": f.value.baseUrl,
        "org-slug": f.value.orgSlug,
        "is-custom-domain": f.value.isCustomDomain,
        "format-price": E,
        locale: v.value
      }, null, 8, ["api-base-url", "org-slug", "is-custom-domain", "locale"])) : (F(), G(Q, { key: 1 }, [
        C.value ? (F(), U(P(ne), {
          key: 0,
          "stock-options": B.value,
          config: O.value,
          "format-price": E,
          colors: { button: "#118ab2", buttonText: "#ffffff" },
          "number-format": "decimal",
          locale: v.value,
          "initial-product-id": j.value,
          "server-pagination": ve.value,
          onStockAdded: de,
          onStockRemoved: ge
        }, null, 8, ["stock-options", "config", "locale", "initial-product-id", "server-pagination"])) : X("", !0),
        d.value === "formula" && (w.value || S.value) ? (F(), U(P(re), {
          key: 1,
          ref: "formulapricing",
          "format-price": E,
          url: w.value,
          spec: S.value,
          debug: h.value,
          onHardwareResult: H
        }, null, 8, ["url", "spec", "debug"])) : X("", !0),
        we(W(De, {
          ref_key: "calculator",
          ref: m,
          readonly: d.value === "formula",
          debug: h.value,
          "input-stock": fe.value,
          "input-type": d.value,
          "find-extras-price": J,
          "format-price": E,
          onLog: y,
          onError: T,
          onCalculating: q,
          onValidationError: me,
          onResult: z
        }, null, 8, ["readonly", "debug", "input-stock", "input-type"]), [
          [Se, pe.value]
        ])
      ], 64))
    ], 64));
  }
});
export {
  Ue as default
};

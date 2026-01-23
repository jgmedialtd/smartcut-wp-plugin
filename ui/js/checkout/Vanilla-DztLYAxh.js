import { d as ke, r, R as he, h as ye, s as be, b as z, o as P, i as G, a as V, u as T, g as L, F as Q, e as X, y as we, c as U, z as Se, n as A, p as Ce } from "./vendor-vue-CjllP6Mc.js";
import { j as Ee, aW as Y, b1 as m, b2 as g } from "./result.zod-CjJ6OKhV.js";
import { c as Z, E as De, m as Pe } from "./EcommerceCalculator-DwC9zTyQ.js";
import { o as R, C as s, k as a, l as _, i as te, D as Fe, j as I, h as N, W as k } from "./vendor-HGGdjwqM.js";
const $e = R({
  name: a().trim(),
  price: a().trim().default("0"),
  options: s(a(), _(a()))
}), Te = s(a(), $e), Le = R({
  name: a().trim(),
  options: s(
    a(),
    Fe([a(), _(a())])
  ).optional(),
  variations: Te.optional(),
  price: a().trim().default("0"),
  type: te(["simple", "variable"]).optional()
}), ee = s(a(), Le);
R({
  env: a().default("production"),
  showDevInfo: N().default(!1),
  debug: N().default(!1),
  el: s(a(), k()).default({}),
  inputType: te(["manual", "formula"]).default("manual"),
  settings: s(a(), k()).default({}),
  // Note: HTMLInputElement cannot be validated with Zod, using unknown
  inputs: s(a(), k()).default({}),
  formatting: s(a(), k()).default({}),
  product: s(a(), k()).default({}),
  stock: _(Ee).default([]),
  variations: _(k()).default([]),
  selectedVariation: s(a(), k()).default({}),
  machiningPricing: I().optional(),
  quantityPricing: N().default(!1),
  extrasData: R({
    banding: ee,
    finish: ee
  }).default({
    banding: {},
    finish: {}
  }),
  formulaURL: a().url().optional().or(a().default("")),
  formulaSpec: a().default(""),
  hardwareResult: s(a(), I()).default({}),
  // HardwareResult type from formula.ts
  metadata: I().optional()
  // Metadata from optimize/main
});
const Ue = /* @__PURE__ */ ke({
  __name: "Vanilla",
  emits: ["ready"],
  setup(Re, { expose: oe, emit: ae }) {
    const ne = L(() => import("./StockFilter-BjqLfgSu.js")), re = L(() => import("./FormulaPricing-B3o9hS5p.js")), le = L(() => import("./Notices-BE0X-frm.js")), ie = L(() => import("./OrderLookup-C66c0ETr.js")), se = ae, ue = "production", ce = "4.0.106", h = r(!1), l = r([]), i = r({
      banding: null,
      finish: null,
      planing: null,
      machining: null
    }), fe = U(() => l.value.map((e) => {
      if (e instanceof Y) return e;
      const { issues: t, ...o } = e, n = Array.isArray(t) ? t : [];
      return new Y({ ...o, issues: n });
    })), y = r("USD"), p = r("en-US"), v = r("manual"), b = r(""), w = be(null), O = r(null), d = r(), C = r(!1), x = r([]), B = r(Z()), F = r(!1), j = r("calculator"), f = r(null), M = r(null), me = U(() => v.value === "manual" || v.value === "formula" && (b.value || w.value) ? C.value ? l.value.length > 0 : !0 : !1), pe = U(() => {
      if (!(!F.value || !f.value))
        return {
          enabled: !0,
          apiUrl: f.value.baseUrl,
          orgSlug: f.value.orgSlug,
          isCustomDomain: f.value.isCustomDomain
        };
    });
    Ce("calculator", () => d.value);
    const S = (e) => {
      h.value && console.log("SmartCut -", ...e);
    }, $ = (e) => {
      console.error(`SmartCut - ${e}`);
    }, ve = () => {
      const e = new CustomEvent("smartcut/validationError");
      window.dispatchEvent(e);
    }, H = () => {
      const e = new CustomEvent("smartcut/calculating");
      window.dispatchEvent(e);
    }, W = (e) => {
      O.value = e;
    }, E = (e = 0, t = p.value) => {
      if (e === !0) return "";
      try {
        t = t.replace("_", "-");
        const o = Number(e);
        return !o && o !== 0 ? "" : isNaN(o) ? (console.error("formatPrice - invalid price:", e), "") : o.toLocaleString(t, {
          style: "currency",
          currency: y.value
        });
      } catch (o) {
        return console.error("Error formatting price:", o), "";
      }
    }, q = (e, t) => {
      if (!i.value?.[e]) return null;
      const n = t.filter((c) => c && c.trim() !== "").join("|"), u = m(i.value, [e, n]);
      return typeof u == "number" ? u : parseFloat(u);
    }, de = (e) => {
      if (e.length === 0) return;
      const t = e.map((c) => {
        const D = c.toData();
        return D.autoAdd = !0, D;
      }), o = [...l.value, ...t], n = [], u = /* @__PURE__ */ new Set();
      for (const c of o) {
        const D = `${c.material}-${c.l}-${c.w}-${c.t}`;
        u.has(D) || (u.add(D), n.push(c));
      }
      l.value = n, S(["Stock added. Total stocks:", l.value.length]), d.value && A(() => {
        d.value.initMaterialsThicknesses({ stock: l.value });
      });
    }, ge = (e) => {
      const t = `${e.material}-${e.l}-${e.w}-${e.t}`;
      l.value = l.value.filter((o) => `${o.material}-${o.l}-${o.w}-${o.t}` !== t), S(["Stock removed. Total stocks:", l.value.length]), d.value && A(() => {
        d.value.initMaterialsThicknesses({ stock: l.value });
      });
    }, J = (e) => {
      Pe(e), e.api && (f.value = {
        baseUrl: e.api.baseUrl,
        orgSlug: e.api.orgSlug,
        isCustomDomain: e.api.isCustomDomain
      }), e.stockFilter?.enabled ? (C.value = !0, F.value = e.stockFilter.serverMode || !1, x.value = F.value ? [] : (e.stock || []).map((t) => ({ ...t })), B.value = e.stockFilter.config || Z(), l.value = [], S(["Stock filter enabled", F.value ? "(server mode)" : `with ${x.value.length} available options`])) : (C.value = !1, l.value = e.stock), i.value.banding = m(e, ["banding", "pricing"]), i.value.finish = m(e, ["finish", "pricing"]), i.value.planing = m(e, ["planing", "pricing"]), i.value.machining = m(e, ["machining", "pricing"]), g(e, ["options", "currency"]) && (y.value = m(e, ["options", "currency"])), g(e, ["options", "locale"]) && (p.value = m(e, ["options", "locale"]).replace("_", "-")), g(e, ["config", "formulaPricing", "enabled"]) && e.config.formulaPricing.enabled ? (v.value = "formula", b.value = e.config.formulaPricing.url ?? null, w.value = e.config.formulaPricing.spec ?? null) : (g(e, ["options", "formula", "url"]) || g(e, ["options", "formula", "spec"])) && (v.value = "formula", b.value = m(e, ["options", "formula", "url"]) ?? null, w.value = m(e, ["options", "formula", "spec"]) ?? null), A(() => {
        if (d.value) {
          const t = {
            ...e,
            stock: l.value,
            // Pass flag to indicate stock filter is enabled
            stockFilterEnabled: C.value
          };
          d.value.init(t);
        }
      });
    }, K = (e) => {
      const t = e;
      if (t.checkout = {
        formattedTotalStockCost: "",
        formattedBandingCost: {},
        formattedFinishCost: {}
      }, e?.metadata?.totalStockCost && (t.checkout.formattedTotalStockCost = e.metadata.totalStockCost.toLocaleString(
        p.value,
        {
          style: "currency",
          currency: y.value
        }
      )), e?.metadata?.bandingLengthByType)
        for (const [n, u] of Object.entries(e.metadata.bandingLengthByType)) {
          if (!g(i.value, ["banding", n])) {
            $(`Banding price ${n} not found`);
            continue;
          }
          t.checkout.formattedBandingCost[n] = (u / 1e3 * i.value.banding[n]).toLocaleString(p.value, { style: "currency", currency: y.value });
        }
      if (e?.metadata?.finishAreaByType)
        for (const [n, u] of Object.entries(e.metadata.finishAreaByType)) {
          if (!g(i.value, ["finish", n])) {
            $(`Finish price ${n} not found`);
            continue;
          }
          t.checkout.formattedFinishCost[n] = (u / 1e6 * i.value.finish[n]).toLocaleString(p.value, { style: "currency", currency: y.value });
        }
      const o = new CustomEvent("smartcut/result", {
        detail: JSON.parse(JSON.stringify(t))
      });
      window.dispatchEvent(o);
    };
    return he(() => {
      console.log(`💥 Powered by https://smartcut.dev ${"V" + ce} [${ue}]`);
      const e = new URLSearchParams(window.location.search);
      h.value = !!e.has("debug");
      const t = e.get("view");
      (t === "track-order" || t === "order-lookup") && (j.value = "order-lookup");
      const o = e.get("product");
      o && (M.value = o, S(["Deep link to product:", o])), h.value && console.log("Smartcut - debug enabled");
    }), ye(() => {
      window.smartcutCheckout = { init: J }, se("ready");
      const e = new CustomEvent("smartcut/ready");
      window.dispatchEvent(e);
    }), oe({
      init: J,
      debug: h,
      stock: l,
      pricing: i,
      currency: y,
      locale: p,
      inputType: v,
      formulaURL: b,
      formulaSpec: w,
      hardWareResult: O,
      log: S,
      error: $,
      calculating: H,
      result: K,
      formatPrice: E,
      findExtrasPrice: q,
      setHardwareResult: W
    }), (e, t) => (P(), z(Q, null, [
      G(T(le), { position: "top-left" }),
      j.value === "order-lookup" && f.value ? (P(), V(T(ie), {
        key: 0,
        "api-base-url": f.value.baseUrl,
        "org-slug": f.value.orgSlug,
        "is-custom-domain": f.value.isCustomDomain,
        "format-price": E,
        locale: p.value
      }, null, 8, ["api-base-url", "org-slug", "is-custom-domain", "locale"])) : (P(), z(Q, { key: 1 }, [
        C.value ? (P(), V(T(ne), {
          key: 0,
          "stock-options": x.value,
          config: B.value,
          "format-price": E,
          colors: { button: "#118ab2", buttonText: "#ffffff" },
          "number-format": "decimal",
          locale: p.value,
          "initial-product-id": M.value,
          "server-pagination": pe.value,
          mode: B.value.mode || "stock",
          onStockAdded: de,
          onStockRemoved: ge
        }, null, 8, ["stock-options", "config", "locale", "initial-product-id", "server-pagination", "mode"])) : X("", !0),
        v.value === "formula" && (b.value || w.value) ? (P(), V(T(re), {
          key: 1,
          ref: "formulapricing",
          "format-price": E,
          url: b.value,
          spec: w.value,
          debug: h.value,
          onHardwareResult: W
        }, null, 8, ["url", "spec", "debug"])) : X("", !0),
        we(G(De, {
          ref_key: "calculator",
          ref: d,
          readonly: v.value === "formula",
          debug: h.value,
          "input-stock": fe.value,
          "input-type": v.value,
          "find-extras-price": q,
          "format-price": E,
          onLog: S,
          onError: $,
          onCalculating: H,
          onValidationError: ve,
          onResult: K
        }, null, 8, ["readonly", "debug", "input-stock", "input-type"]), [
          [Se, me.value]
        ])
      ], 64))
    ], 64));
  }
});
export {
  Ue as default
};

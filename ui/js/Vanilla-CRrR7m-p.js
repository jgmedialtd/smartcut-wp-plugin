import { d as ce, r as l, c as H, L as ue, _ as fe, k as pe, a as me, o as x, H as M, q, x as J, h as de, s as D, N as L, v as ve, F as ge, n as P, Z as he } from "./vendor-vue-WkZl1F8L.js";
import { U as ke, I as K, bF as z, bA as ye, bz as f, bG as be, bD as v } from "./components-DAYRnUab.js";
import { o as T, r as i, s as a, a as $, _ as W, u as we, c as B, b as R, x as g } from "./vendor-zod-PVURV34D.js";
const Se = T({
  name: a().trim(),
  price: a().trim().default("0"),
  options: i(a(), $(a()))
}), Ce = i(a(), Se), Ee = T({
  name: a().trim(),
  options: i(
    a(),
    we([a(), $(a())])
  ).optional(),
  variations: Ce.optional(),
  price: a().trim().default("0"),
  type: W(["simple", "variable"]).optional()
}), G = i(a(), Ee);
T({
  env: a().default("production"),
  showDevInfo: R().default(!1),
  debug: R().default(!1),
  el: i(a(), g()).default({}),
  inputType: W(["manual", "formula"]).default("manual"),
  settings: i(a(), g()).default({}),
  // Note: HTMLInputElement cannot be validated with Zod, using unknown
  inputs: i(a(), g()).default({}),
  formatting: i(a(), g()).default({}),
  product: i(a(), g()).default({}),
  stock: $(ke).default([]),
  variations: $(g()).default([]),
  selectedVariation: i(a(), g()).default({}),
  machiningPricing: B().optional(),
  quantityPricing: R().default(!1),
  extrasData: T({
    banding: G,
    finish: G
  }).default({
    banding: {},
    finish: {}
  }),
  formulaURL: a().url().optional().or(a().default("")),
  formulaSpec: a().default(""),
  hardwareResult: i(a(), B()).default({}),
  // HardwareResult type from formula.ts
  metadata: B().optional()
  // Metadata from optimize/main
});
const xe = /* @__PURE__ */ ce({
  __name: "Vanilla",
  emits: ["ready"],
  setup(Fe, { expose: Z, emit: Q }) {
    const X = L(() => import("./components-DAYRnUab.js").then((e) => e.bL)), Y = L(() => import("./components-DAYRnUab.js").then((e) => e.bJ)), ee = L(() => import("./components-DAYRnUab.js").then((e) => e.bK)), te = Q, ae = "production", ne = "4.0.87", h = l(!1), r = l([]), s = l({
      banding: null,
      finish: null,
      planing: null,
      machining: null
    }), oe = H(() => r.value.map((e) => {
      if (e instanceof K) return e;
      const { issues: t, ...n } = e, o = Array.isArray(t) ? t : [];
      return new K({ ...n, issues: o });
    })), k = l("USD"), m = l("en-US"), d = l("manual"), y = l(""), b = ue(null), A = l(null), p = l(), w = l(!1), _ = l([]), N = l(z()), re = H(() => d.value === "manual" || d.value === "formula" && (y.value || b.value) ? w.value ? r.value.length > 0 : !0 : !1);
    he("calculator", () => p.value);
    const S = (e) => {
      h.value && console.log("SmartCut -", ...e);
    }, E = (e) => {
      console.error(`SmartCut - ${e}`);
    }, le = () => {
      const e = new CustomEvent("smartcut/validationError");
      window.dispatchEvent(e);
    }, V = () => {
      const e = new CustomEvent("smartcut/calculating");
      window.dispatchEvent(e);
    }, I = (e) => {
      A.value = e;
    }, F = (e = 0, t = m.value) => {
      if (e === !0) return "";
      try {
        t = t.replace("_", "-");
        const n = Number(e);
        return !n && n !== 0 ? "" : isNaN(n) ? (console.error("formatPrice - invalid price:", e), "") : n.toLocaleString(t, {
          style: "currency",
          currency: k.value
        });
      } catch (n) {
        return console.error("Error formatting price:", n), "";
      }
    }, O = (e, t) => {
      if (!s.value?.[e]) return null;
      const o = t.filter((u) => u && u.trim() !== "").join("|"), c = f(s.value, [e, o]);
      return typeof c == "number" ? c : parseFloat(c);
    }, se = (e) => {
      if (e.length === 0) return;
      const t = e.map((u) => {
        const C = u.toData();
        return C.autoAdd = !0, C;
      }), n = [...r.value, ...t], o = [], c = /* @__PURE__ */ new Set();
      for (const u of n) {
        const C = `${u.material}-${u.l}-${u.w}-${u.t}`;
        c.has(C) || (c.add(C), o.push(u));
      }
      r.value = o, S(["Stock added. Total stocks:", r.value.length]), p.value && P(() => {
        p.value.initMaterialsThicknesses({ stock: r.value });
      });
    }, ie = (e) => {
      const t = `${e.material}-${e.l}-${e.w}-${e.t}`;
      r.value = r.value.filter((n) => `${n.material}-${n.l}-${n.w}-${n.t}` !== t), S(["Stock removed. Total stocks:", r.value.length]), p.value && P(() => {
        p.value.initMaterialsThicknesses({ stock: r.value });
      });
    }, U = (e) => {
      be(e), v(e, ["stockFilter", "enabled"]) && e.stockFilter?.enabled ? (w.value = !0, _.value = (e.stock || []).map((t) => ({ ...t })), N.value = e.stockFilter.config || z(), r.value = [], S(["Stock filter enabled with", _.value.length, "available options"])) : (w.value = !1, r.value = e.stock), s.value.banding = f(e, ["banding", "pricing"]), s.value.finish = f(e, ["finish", "pricing"]), s.value.planing = f(e, ["planing", "pricing"]), s.value.machining = f(e, ["machining", "pricing"]), v(e, ["options", "currency"]) && (k.value = f(e, ["options", "currency"])), v(e, ["options", "locale"]) && (m.value = f(e, ["options", "locale"]).replace("_", "-")), (v(e, ["options", "formula", "url"]) || v(e, ["options", "formula", "spec"])) && (d.value = "formula", y.value = f(e, ["options", "formula", "url"]) ?? null, b.value = f(e, ["options", "formula", "spec"]) ?? null), P(() => {
        if (p.value) {
          const t = {
            ...e,
            stock: r.value,
            // Pass flag to indicate stock filter is enabled
            stockFilterEnabled: w.value
          };
          p.value.init(t);
        }
      });
    }, j = (e) => {
      const t = e;
      if (t.checkout = {
        formattedTotalStockCost: "",
        formattedBandingCost: {},
        formattedFinishCost: {}
      }, e?.metadata?.totalStockCost && (t.checkout.formattedTotalStockCost = e.metadata.totalStockCost.toLocaleString(
        m.value,
        {
          style: "currency",
          currency: k.value
        }
      )), e?.metadata?.bandingLengthByType)
        for (const [o, c] of Object.entries(e.metadata.bandingLengthByType)) {
          if (!v(s.value, ["banding", o])) {
            E(`Banding price ${o} not found`);
            continue;
          }
          t.checkout.formattedBandingCost[o] = (c / 1e3 * s.value.banding[o]).toLocaleString(m.value, { style: "currency", currency: k.value });
        }
      if (e?.metadata?.finishAreaByType)
        for (const [o, c] of Object.entries(e.metadata.finishAreaByType)) {
          if (!v(s.value, ["finish", o])) {
            E(`Finish price ${o} not found`);
            continue;
          }
          t.checkout.formattedFinishCost[o] = (c / 1e6 * s.value.finish[o]).toLocaleString(m.value, { style: "currency", currency: k.value });
        }
      const n = new CustomEvent("smartcut/result", {
        detail: JSON.parse(JSON.stringify(t))
      });
      window.dispatchEvent(n);
    };
    return fe(() => {
      console.log(`💥 Powered by https://smartcut.dev ${"V" + ne} [${ae}]`);
      const e = new URLSearchParams(window.location.search);
      h.value = !!e.has("debug"), h.value && console.log("Smartcut - debug enabled");
    }), pe(() => {
      window.smartcutCheckout = { init: U }, te("ready");
      const e = new CustomEvent("smartcut/ready");
      window.dispatchEvent(e);
    }), Z({
      init: U,
      debug: h,
      stock: r,
      pricing: s,
      currency: k,
      locale: m,
      inputType: d,
      formulaURL: y,
      formulaSpec: b,
      hardWareResult: A,
      log: S,
      error: E,
      calculating: V,
      result: j,
      formatPrice: F,
      findExtrasPrice: O,
      setHardwareResult: I
    }), (e, t) => (x(), me(ge, null, [
      M(D(ee), { position: "top-left" }),
      w.value ? (x(), q(D(X), {
        key: 0,
        "stock-options": _.value,
        config: N.value,
        "format-price": F,
        colors: { button: "#118ab2", buttonText: "#ffffff" },
        "number-format": "decimal",
        locale: m.value,
        onStockAdded: se,
        onStockRemoved: ie
      }, null, 8, ["stock-options", "config", "locale"])) : J("", !0),
      d.value === "formula" && (y.value || b.value) ? (x(), q(D(Y), {
        key: 1,
        ref: "formulapricing",
        "format-price": F,
        url: y.value,
        spec: b.value,
        debug: h.value,
        onHardwareResult: I
      }, null, 8, ["url", "spec", "debug"])) : J("", !0),
      de(M(ye, {
        ref_key: "calculator",
        ref: p,
        readonly: d.value === "formula",
        debug: h.value,
        "input-stock": oe.value,
        "input-type": d.value,
        "find-extras-price": O,
        "format-price": F,
        onLog: S,
        onError: E,
        onCalculating: V,
        onValidationError: le,
        onResult: j
      }, null, 8, ["readonly", "debug", "input-stock", "input-type"]), [
        [ve, re.value]
      ])
    ], 64));
  }
});
export {
  xe as default
};

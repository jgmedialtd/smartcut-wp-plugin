import { C as x, g as c, m as F, c as f } from "./Launch-fuvmW32C.js";
import { B as O, r, s as A, L as U, N as D, o as H, j as C, k as $, H as T, u as J, A as N, F as M, K as I, n as K } from "./main-BFZHuxOW.js";
const G = /* @__PURE__ */ O({
  __name: "Vanilla",
  setup(W, { expose: R }) {
    const j = I(() => import("./FormulaPricing-BlmuBJfq.js")), l = r(!1), y = r([]), o = r({
      banding: null,
      finish: null,
      machining: null
    }), u = r("USD"), i = r("en-US"), s = r("manual"), m = r(""), v = A(null), w = r(null), g = r();
    U("calculator", () => g.value);
    const S = (e) => {
      l.value && console.log("SmartCut -", ...e);
    }, d = (e) => {
      console.error(`SmartCut - ${e}`);
    }, B = () => {
      const e = new CustomEvent("smartcut/calculating");
      window.dispatchEvent(e);
    }, E = (e) => {
      w.value = e;
    }, h = (e = 0, n = i.value) => {
      if (e === !0) return "";
      try {
        n = n.replace("_", "-");
        const t = Number(e);
        return !t && t !== 0 ? "" : isNaN(t) ? (console.error("formatPrice - invalid price:", e), "") : t.toLocaleString(n, {
          style: "currency",
          currency: u.value
        });
      } catch (t) {
        return console.error("Error formatting price:", t), "";
      }
    }, L = (e, n) => {
      var p;
      if (!((p = o.value) != null && p[e])) return null;
      const t = n.join("|");
      return c(o.value, [e, t]) || null;
    }, _ = (e) => {
      F.call({ debug: l.value }, e), y.value = e.stock, o.value.banding = c(e, ["banding", "pricing"]), o.value.finish = c(e, ["finish", "pricing"]), o.value.machining = c(e, ["machining", "pricing"]), f(e, ["options", "currency"]) && (u.value = c(e, ["options", "currency"])), f(e, ["options", "locale"]) && (i.value = c(e, ["options", "locale"]).replace("_", "-")), (f(e, ["options", "formula", "url"]) || f(e, ["options", "formula", "spec"])) && (s.value = "formula", m.value = c(e, ["options", "formula", "url"]) ?? null, v.value = c(e, ["options", "formula", "spec"]) ?? null), K(() => {
        g.value && g.value.init(e);
      });
    }, P = (e) => {
      var b, p;
      const n = e;
      if (n.checkout = {
        formattedTotalStockCost: "",
        formattedBandingCost: {},
        formattedFinishCost: {}
      }, n.checkout.formattedTotalStockCost = e.metadata.totalStockCost.toLocaleString(
        i.value,
        {
          style: "currency",
          currency: u.value
        }
      ), (b = e == null ? void 0 : e.metadata) != null && b.bandingLengthByType)
        for (const [a, k] of Object.entries(e.metadata.bandingLengthByType)) {
          if (!f(o.value, ["banding", a])) {
            d(`Banding price ${a} not found`);
            continue;
          }
          n.checkout.formattedBandingCost[a] = (k / 1e3 * o.value.banding[a]).toLocaleString(i.value, { style: "currency", currency: u.value });
        }
      if ((p = e == null ? void 0 : e.metadata) != null && p.finishAreaByType)
        for (const [a, k] of Object.entries(e.metadata.finishAreaByType)) {
          if (!f(o.value, ["finish", a])) {
            d(`Finish price ${a} not found`);
            continue;
          }
          n.checkout.formattedFinishCost[a] = (k / 1e6 * o.value.finish[a]).toLocaleString(i.value, { style: "currency", currency: u.value });
        }
      const t = new CustomEvent("smartcut/result", {
        detail: JSON.parse(JSON.stringify(n))
      });
      window.dispatchEvent(t);
    };
    return D(() => {
      console.log("💥 Powered by https://smartcut.dev");
      const e = new URLSearchParams(window.location.search);
      l.value = !!e.get("debug"), l.value && console.log("Smartcut - debug enabled");
    }), H(() => {
      window.smartcutCheckout = {
        init: _
      };
      const e = new CustomEvent("smartcut/ready");
      window.dispatchEvent(e);
    }), R({
      init: _,
      debug: l,
      stock: y,
      pricing: o,
      currency: u,
      locale: i,
      inputType: s,
      formulaURL: m,
      formulaSpec: v,
      hardWareResult: w,
      log: S,
      error: d,
      calculating: B,
      result: P,
      formatPrice: h,
      findExtrasPrice: L,
      setHardwareResult: E
    }), (e, n) => (C(), $(M, null, [
      s.value === "formula" && (m.value || v.value) ? (C(), T(J(j), {
        key: 0,
        ref: "formulapricing",
        "format-price": h,
        url: m.value,
        spec: v.value,
        debug: l.value,
        onHardwareResult: E
      }, null, 8, ["url", "spec", "debug"])) : N("", !0),
      s.value === "manual" || s.value === "formula" && (m.value || v.value) ? (C(), T(x, {
        key: 1,
        ref_key: "calculator",
        ref: g,
        readonly: s.value === "formula",
        debug: l.value,
        stock: y.value,
        "find-extras-price": L,
        "format-price": h,
        onLog: S,
        onError: d,
        onResult: P,
        onCalculating: B
      }, null, 8, ["readonly", "debug", "stock"])) : N("", !0)
    ], 64));
  }
});
export {
  G as default
};

import { C as j, g as c, m as x, c as f } from "./Launch-DWlubQZk.js";
import { B as F, r, s as A, M as U, O as D, o as H, j as C, k as M, H as T, u as $, A as N, F as J, L as I, n as W } from "./main-CV9Qcfe-.js";
const K = /* @__PURE__ */ F({
  __name: "Vanilla",
  setup(q, { expose: O }) {
    const R = I(() => import("./FormulaPricing-1Qcpf5mI.js")), l = r(!1), y = r([]), o = r({
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
      return c(o.value, [e, t]);
    }, _ = (e) => {
      x(e), y.value = e.stock, o.value.banding = c(e, ["banding", "pricing"]), o.value.finish = c(e, ["finish", "pricing"]), o.value.machining = c(e, ["machining", "pricing"]), f(e, ["options", "currency"]) && (u.value = c(e, ["options", "currency"])), f(e, ["options", "locale"]) && (i.value = c(e, ["options", "locale"]).replace("_", "-")), (f(e, ["options", "formula", "url"]) || f(e, ["options", "formula", "spec"])) && (s.value = "formula", m.value = c(e, ["options", "formula", "url"]) ?? null, v.value = c(e, ["options", "formula", "spec"]) ?? null), W(() => {
        g.value && g.value.init(e);
      });
    }, P = (e) => {
      var k, p;
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
      ), (k = e == null ? void 0 : e.metadata) != null && k.bandingLengthByType)
        for (const [a, b] of Object.entries(e.metadata.bandingLengthByType)) {
          if (!f(o.value, ["banding", a])) {
            d(`Banding price ${a} not found`);
            continue;
          }
          n.checkout.formattedBandingCost[a] = (b / 1e3 * o.value.banding[a]).toLocaleString(i.value, { style: "currency", currency: u.value });
        }
      if ((p = e == null ? void 0 : e.metadata) != null && p.finishAreaByType)
        for (const [a, b] of Object.entries(e.metadata.finishAreaByType)) {
          if (!f(o.value, ["finish", a])) {
            d(`Finish price ${a} not found`);
            continue;
          }
          n.checkout.formattedFinishCost[a] = (b / 1e6 * o.value.finish[a]).toLocaleString(i.value, { style: "currency", currency: u.value });
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
    }), O({
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
    }), (e, n) => (C(), M(J, null, [
      s.value === "formula" && (m.value || v.value) ? (C(), T($(R), {
        key: 0,
        ref: "formulapricing",
        "format-price": h,
        url: m.value,
        spec: v.value,
        debug: l.value,
        onHardwareResult: E
      }, null, 8, ["url", "spec", "debug"])) : N("", !0),
      s.value === "manual" || s.value === "formula" && (m.value || v.value) ? (C(), T(j, {
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
  K as default
};

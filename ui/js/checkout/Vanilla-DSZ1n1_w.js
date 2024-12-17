import { C as R, g as c, m as j, c as m } from "./Launch-CFZ5pGuw.js";
import { B as x, r, s as A, M as U, O as D, o as H, j as C, k as M, H as T, u as $, A as F, F as J, L as I, n as W } from "./main-DFMVGBIU.js";
const K = /* @__PURE__ */ x({
  __name: "Vanilla",
  setup(q, { expose: N }) {
    const O = I(() => import("./FormulaPricing-DVQyavY6.js")), l = r(!1), h = r([]), o = r({
      banding: null,
      finish: null,
      machining: null
    }), u = r("USD"), i = r("en-US"), s = r("manual"), v = r(""), p = A(null), w = r(null), d = r();
    U("calculator", () => d.value);
    const S = (e) => {
      l.value && console.log("SmartCut -", ...e);
    }, y = (e) => {
      console.error(`SmartCut - ${e}`);
    }, B = () => {
      const e = new CustomEvent("smartcut/calculating");
      window.dispatchEvent(e);
    }, E = (e) => {
      w.value = e;
    }, b = (e = 0, n = i.value) => {
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
      var g;
      if (!((g = o.value) != null && g[e])) return null;
      const t = n.join("|"), f = c(o.value, [e, t]);
      return typeof f == "number" ? f : parseFloat(f);
    }, _ = (e) => {
      j(e), h.value = e.stock, o.value.banding = c(e, ["banding", "pricing"]), o.value.finish = c(e, ["finish", "pricing"]), o.value.machining = c(e, ["machining", "pricing"]), m(e, ["options", "currency"]) && (u.value = c(e, ["options", "currency"])), m(e, ["options", "locale"]) && (i.value = c(e, ["options", "locale"]).replace("_", "-")), (m(e, ["options", "formula", "url"]) || m(e, ["options", "formula", "spec"])) && (s.value = "formula", v.value = c(e, ["options", "formula", "url"]) ?? null, p.value = c(e, ["options", "formula", "spec"]) ?? null), W(() => {
        d.value && d.value.init(e);
      });
    }, P = (e) => {
      var f, g;
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
      ), (f = e == null ? void 0 : e.metadata) != null && f.bandingLengthByType)
        for (const [a, k] of Object.entries(e.metadata.bandingLengthByType)) {
          if (!m(o.value, ["banding", a])) {
            y(`Banding price ${a} not found`);
            continue;
          }
          n.checkout.formattedBandingCost[a] = (k / 1e3 * o.value.banding[a]).toLocaleString(i.value, { style: "currency", currency: u.value });
        }
      if ((g = e == null ? void 0 : e.metadata) != null && g.finishAreaByType)
        for (const [a, k] of Object.entries(e.metadata.finishAreaByType)) {
          if (!m(o.value, ["finish", a])) {
            y(`Finish price ${a} not found`);
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
    }), N({
      init: _,
      debug: l,
      stock: h,
      pricing: o,
      currency: u,
      locale: i,
      inputType: s,
      formulaURL: v,
      formulaSpec: p,
      hardWareResult: w,
      log: S,
      error: y,
      calculating: B,
      result: P,
      formatPrice: b,
      findExtrasPrice: L,
      setHardwareResult: E
    }), (e, n) => (C(), M(J, null, [
      s.value === "formula" && (v.value || p.value) ? (C(), T($(O), {
        key: 0,
        ref: "formulapricing",
        "format-price": b,
        url: v.value,
        spec: p.value,
        debug: l.value,
        onHardwareResult: E
      }, null, 8, ["url", "spec", "debug"])) : F("", !0),
      s.value === "manual" || s.value === "formula" && (v.value || p.value) ? (C(), T(R, {
        key: 1,
        ref_key: "calculator",
        ref: d,
        readonly: s.value === "formula",
        debug: l.value,
        stock: h.value,
        "find-extras-price": L,
        "format-price": b,
        onLog: S,
        onError: y,
        onResult: P,
        onCalculating: B
      }, null, 8, ["readonly", "debug", "stock"])) : F("", !0)
    ], 64));
  }
});
export {
  K as default
};

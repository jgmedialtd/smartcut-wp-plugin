import { C as l, m as u, g as o, c as s, a as g, _ as h, r as d, o as f, b as m, d as p } from "./main-BHS4DK-s.js";
const y = {
  name: "Vanilla",
  components: {
    CheckoutCalculator: l
  },
  data() {
    return {
      debug: !1,
      //[] update this
      loaded: !1,
      stock: [],
      // materials: [],
      pricing: {
        banding: null,
        finish: null,
        machining: null
      },
      currency: "USD",
      locale: "en-US"
    };
  },
  created() {
    console.log("💥 Powered by https://smartcut.dev");
    const t = new URLSearchParams(window.location.search);
    this.debug = !!t.get("debug"), this.debug && console.log("Smartcut - debug enabled");
  },
  mounted() {
    window.smartcutCheckout = this;
    const t = new CustomEvent("smartcut/ready");
    window.dispatchEvent(t);
  },
  methods: {
    log(t) {
      console.log(...t);
    },
    error(t) {
      console.warn(t);
    },
    toggleDebug() {
      this.debug = !this.debug;
    },
    init(t) {
      u.call(this, t), this.stock = t.stock, this.pricing.banding = o(t, ["banding", "pricing"]), this.pricing.finish = o(t, ["finish", "pricing"]), this.pricing.machining = o(t, ["machining", "pricing"]), s(t, ["options", "currency"]) && (this.currency = o(t, ["options", "currency"])), s(t, ["options", "locale"]) && (this.locale = o(t, ["options", "locale"]).replace("_", "-")), this.loaded = !0, this.$nextTick(() => {
        const e = g.call(this, "calculator");
        e && e.init(t);
      });
    },
    calculating() {
      const t = new CustomEvent("smartcut/calculating");
      window.dispatchEvent(t);
    },
    result(t) {
      var r, i;
      const e = t;
      if (e.checkout = {
        formattedTotalStockCost: "",
        formattedBandingCost: {},
        formattedFinishCost: {}
      }, e.checkout.formattedTotalStockCost = t.metadata.totalStockCost.toLocaleString(
        this.locale,
        {
          style: "currency",
          currency: this.currency
        }
      ), (r = t == null ? void 0 : t.metadata) != null && r.bandingLengthByType)
        for (const [n, a] of Object.entries(t.metadata.bandingLengthByType)) {
          if (!s(this.pricing, ["banding", n])) {
            this.error(`Banding price ${n} not found`);
            continue;
          }
          e.checkout.formattedBandingCost[n] = (a / 1e3 * this.pricing.banding[n]).toLocaleString(this.locale, { style: "currency", currency: this.currency });
        }
      if ((i = t == null ? void 0 : t.metadata) != null && i.finishAreaByType)
        for (const [n, a] of Object.entries(t.metadata.finishAreaByType)) {
          if (!s(this.pricing, ["finish", n])) {
            this.error(`Finish price ${n} not found`);
            continue;
          }
          e.checkout.formattedFinishCost[n] = (a / 1e6 * this.pricing.finish[n]).toLocaleString(this.locale, { style: "currency", currency: this.currency });
        }
      const c = new CustomEvent("smartcut/result", {
        detail: JSON.parse(JSON.stringify(e))
      });
      window.dispatchEvent(c);
    },
    formatPrice(t = 0, e = this.locale) {
      try {
        e = e.replace("_", "-");
        const c = Number(t);
        return c ? isNaN(c) ? (console.error("Invalid price:", t), "") : c.toLocaleString(e, {
          style: "currency",
          currency: this.currency
        }) : "";
      } catch (c) {
        return console.error("Error formatting price:", c), "";
      }
    },
    findExtrasPrice(t, e) {
      var i;
      if (!((i = this.pricing) != null && i[t])) return null;
      const c = e.join("|");
      return o(this.pricing, [t, c]) || null;
    }
  }
};
function b(t, e, c, r, i, n) {
  const a = d("CheckoutCalculator");
  return i.loaded ? (f(), m(a, {
    key: 0,
    ref: "calculator",
    debug: i.debug,
    stock: i.stock,
    onLog: n.log,
    onError: n.error,
    onDebug: n.toggleDebug,
    onResult: n.result,
    onCalculating: n.calculating
  }, null, 8, ["debug", "stock", "onLog", "onError", "onDebug", "onResult", "onCalculating"])) : p("", !0);
}
const C = /* @__PURE__ */ h(y, [["render", b]]);
export {
  C as default
};

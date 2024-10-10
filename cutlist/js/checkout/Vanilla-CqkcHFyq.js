import { C as CheckoutCalculator, g as getRef, _ as _export_sfc, r as resolveComponent, o as openBlock, c as createBlock } from "./main-B9SQ6hUK.js";
const _sfc_main = {
  name: "Vanilla",
  components: {
    CheckoutCalculator
  },
  data() {
    return {
      debug: false,
      stock: [],
      // materials: [],
      bandingPricing: null,
      machiningPricing: null,
      currency: "USD",
      locale: "en-US"
    };
  },
  created() {
    console.log("💥 Powered by https://smartcut.dev");
    const urlParams = new URLSearchParams(window.location.search);
    this.debug = urlParams.get("debug") ? true : false;
    if (this.debug) {
      console.log("Smartcut - debug enabled");
    }
  },
  mounted() {
    window.smartcutCheckout = this;
    const event = new CustomEvent("smartcut/ready");
    window.dispatchEvent(event);
  },
  methods: {
    log(message) {
      console.log(...message);
    },
    error(message) {
      console.warn(message);
    },
    toggleDebug() {
      this.debug = !this.debug;
    },
    init(data) {
      this.stock = data.stock;
      this.bandingPricing = (data == null ? void 0 : data.bandingPricing) ?? null;
      this.machiningPricing = (data == null ? void 0 : data.machiningPricing) ?? null;
      if (data.options.currency) this.currency = data.options.currency;
      if (data.options.locale) this.locale = data.options.locale.replace("_", "-");
      const calculator = getRef.call(this, "calculator");
      if (calculator) calculator.init(data);
    },
    calculating() {
      const event = new CustomEvent("smartcut/calculating");
      window.dispatchEvent(event);
    },
    result(result) {
      var _a;
      const reponse = result;
      reponse.checkout = {
        formattedTotalStockCost: "",
        formattedBandingCost: {}
      };
      reponse.checkout.formattedTotalStockCost = result.metadata.totalStockCost.toLocaleString(
        this.locale,
        {
          style: "currency",
          currency: this.currency
        }
      );
      if ((_a = result == null ? void 0 : result.metadata) == null ? void 0 : _a.bandingLengthByType) {
        for (const [bandingType, length] of Object.entries(result.metadata.bandingLengthByType)) {
          reponse.checkout.formattedBandingCost[bandingType] = (length / 1e3 * this.bandingPricing[bandingType]).toLocaleString(this.locale, { style: "currency", currency: this.currency });
        }
      }
      const event = new CustomEvent("smartcut/result", {
        detail: JSON.parse(JSON.stringify(reponse))
      });
      window.dispatchEvent(event);
    },
    formatPrice(price = 0, locale = this.locale) {
      try {
        locale = locale.replace("_", "-");
        const numericPrice = Number(price);
        if (!numericPrice) {
          return "";
        }
        if (isNaN(numericPrice)) {
          console.error("Invalid price:", price);
          return "";
        }
        const formattedPrice = numericPrice.toLocaleString(locale, {
          style: "currency",
          currency: this.currency
        });
        return formattedPrice;
      } catch (error) {
        console.error("Error formatting price:", error);
        return "";
      }
    },
    findBandingPrice(selectedBandingOptions) {
      if (!this.bandingPricing) {
        return null;
      }
      const key = selectedBandingOptions.join("|");
      return this.bandingPricing[key] !== void 0 ? this.bandingPricing[key].toString() : null;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CheckoutCalculator = resolveComponent("CheckoutCalculator");
  return openBlock(), createBlock(_component_CheckoutCalculator, {
    ref: "calculator",
    debug: $data.debug,
    stock: $data.stock,
    onLog: $options.log,
    onError: $options.error,
    onDebug: $options.toggleDebug,
    onResult: $options.result,
    onCalculating: $options.calculating
  }, null, 8, ["debug", "stock", "onLog", "onError", "onDebug", "onResult", "onCalculating"]);
}
const Vanilla = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Vanilla as default
};

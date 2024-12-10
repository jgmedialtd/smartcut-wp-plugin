import { C as CheckoutCalculator, g as getNestedObjectData, m as mapLegacyInitData, c as checkObjectPathExists } from "./Launch-CIMl3I9R.js";
import { B as defineComponent, r as ref, s as shallowRef, L as provide, N as onBeforeMount, o as onMounted, j as openBlock, k as createElementBlock, H as createBlock, u as unref, A as createCommentVNode, F as Fragment, K as defineAsyncComponent, n as nextTick } from "./main-BuWv0poc.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Vanilla",
  setup(__props, { expose: __expose }) {
    const FormulaPricing = defineAsyncComponent(() => import("./FormulaPricing-lTJqhUQI.js"));
    const debug = ref(false);
    const stock = ref([]);
    const pricing = ref({
      banding: null,
      finish: null,
      machining: null
    });
    const currency = ref("USD");
    const locale = ref("en-US");
    const inputType = ref("manual");
    const formulaURL = ref("");
    const formulaSpec = shallowRef(null);
    const hardWareResult = ref(null);
    const calculator = ref();
    provide("calculator", () => calculator.value);
    const log = (messages) => {
      if (debug.value) {
        console.log("SmartCut -", ...messages);
      }
    };
    const error = (message) => {
      console.error(`SmartCut - ${message}`);
    };
    const calculating = () => {
      const event = new CustomEvent("smartcut/calculating");
      window.dispatchEvent(event);
    };
    const setHardwareResult = (result2) => {
      hardWareResult.value = result2;
    };
    const formatPrice = (price = 0, localeValue = locale.value) => {
      if (price === true) return "";
      try {
        localeValue = localeValue.replace("_", "-");
        const numericPrice = Number(price);
        if (!numericPrice && numericPrice !== 0) return "";
        if (isNaN(numericPrice)) {
          console.error("formatPrice - invalid price:", price);
          return "";
        }
        return numericPrice.toLocaleString(localeValue, {
          style: "currency",
          currency: currency.value
        });
      } catch (error2) {
        console.error("Error formatting price:", error2);
        return "";
      }
    };
    const findExtrasPrice = (extraType, selectedOptions) => {
      var _a;
      if (!((_a = pricing.value) == null ? void 0 : _a[extraType])) return null;
      const key = selectedOptions.join("|");
      const price = getNestedObjectData(pricing.value, [extraType, key]);
      return price || null;
    };
    const init = (data) => {
      mapLegacyInitData.call({ debug: debug.value }, data);
      stock.value = data.stock;
      pricing.value.banding = getNestedObjectData(data, ["banding", "pricing"]);
      pricing.value.finish = getNestedObjectData(data, ["finish", "pricing"]);
      pricing.value.machining = getNestedObjectData(data, ["machining", "pricing"]);
      if (checkObjectPathExists(data, ["options", "currency"])) {
        currency.value = getNestedObjectData(data, ["options", "currency"]);
      }
      if (checkObjectPathExists(data, ["options", "locale"])) {
        locale.value = getNestedObjectData(data, ["options", "locale"]).replace("_", "-");
      }
      if (checkObjectPathExists(data, ["options", "formula", "url"]) || checkObjectPathExists(data, ["options", "formula", "spec"])) {
        inputType.value = "formula";
        formulaURL.value = getNestedObjectData(data, ["options", "formula", "url"]) ?? null;
        formulaSpec.value = getNestedObjectData(data, ["options", "formula", "spec"]) ?? null;
      }
      nextTick(() => {
        if (calculator.value) calculator.value.init(data);
      });
    };
    const result = (result2) => {
      var _a, _b;
      const response = result2;
      response.checkout = {
        formattedTotalStockCost: "",
        formattedBandingCost: {},
        formattedFinishCost: {}
      };
      response.checkout.formattedTotalStockCost = result2.metadata.totalStockCost.toLocaleString(
        locale.value,
        {
          style: "currency",
          currency: currency.value
        }
      );
      if ((_a = result2 == null ? void 0 : result2.metadata) == null ? void 0 : _a.bandingLengthByType) {
        for (const [bandingType, length] of Object.entries(result2.metadata.bandingLengthByType)) {
          if (!checkObjectPathExists(pricing.value, ["banding", bandingType])) {
            error(`Banding price ${bandingType} not found`);
            continue;
          }
          response.checkout.formattedBandingCost[bandingType] = (length / 1e3 * pricing.value.banding[bandingType]).toLocaleString(locale.value, { style: "currency", currency: currency.value });
        }
      }
      if ((_b = result2 == null ? void 0 : result2.metadata) == null ? void 0 : _b.finishAreaByType) {
        for (const [finishType, area] of Object.entries(result2.metadata.finishAreaByType)) {
          if (!checkObjectPathExists(pricing.value, ["finish", finishType])) {
            error(`Finish price ${finishType} not found`);
            continue;
          }
          response.checkout.formattedFinishCost[finishType] = (area / 1e6 * pricing.value.finish[finishType]).toLocaleString(locale.value, { style: "currency", currency: currency.value });
        }
      }
      const event = new CustomEvent("smartcut/result", {
        detail: JSON.parse(JSON.stringify(response))
      });
      window.dispatchEvent(event);
    };
    onBeforeMount(() => {
      console.log("💥 Powered by https://smartcut.dev");
      const urlParams = new URLSearchParams(window.location.search);
      debug.value = urlParams.get("debug") ? true : false;
      if (debug.value) console.log("Smartcut - debug enabled");
    });
    onMounted(() => {
      window.smartcutCheckout = {
        init
      };
      const event = new CustomEvent("smartcut/ready");
      window.dispatchEvent(event);
    });
    __expose({
      init,
      debug,
      stock,
      pricing,
      currency,
      locale,
      inputType,
      formulaURL,
      formulaSpec,
      hardWareResult,
      log,
      error,
      calculating,
      result,
      formatPrice,
      findExtrasPrice,
      setHardwareResult
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        inputType.value === "formula" && (formulaURL.value || formulaSpec.value) ? (openBlock(), createBlock(unref(FormulaPricing), {
          key: 0,
          ref: "formulapricing",
          "format-price": formatPrice,
          url: formulaURL.value,
          spec: formulaSpec.value,
          debug: debug.value,
          onHardwareResult: setHardwareResult
        }, null, 8, ["url", "spec", "debug"])) : createCommentVNode("", true),
        inputType.value === "manual" || inputType.value === "formula" && (formulaURL.value || formulaSpec.value) ? (openBlock(), createBlock(CheckoutCalculator, {
          key: 1,
          ref_key: "calculator",
          ref: calculator,
          readonly: inputType.value === "formula",
          debug: debug.value,
          stock: stock.value,
          "find-extras-price": findExtrasPrice,
          "format-price": formatPrice,
          onLog: log,
          onError: error,
          onResult: result,
          onCalculating: calculating
        }, null, 8, ["readonly", "debug", "stock"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=Vanilla-cZeTVB6U.js.map

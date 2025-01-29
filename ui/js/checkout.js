import { d as defineComponent, y as useTranslation, g as ref, U as provide, j as onMounted, o as openBlock, c as createElementBlock, A as createVNode, u as unref, b as createBaseVNode, f as createCommentVNode, q as createBlock, F as Fragment, k as nextTick, O as markRaw, C as defineAsyncComponent, G as shallowRef, V as onBeforeMount, h as computed, W as resolveDynamicComponent, t as toDisplayString, X as createApp, Y as install, Z as FontAwesomeIcon } from "./vendor-vue-DYb4rgTA.js";
import { i as instance, B as Browser } from "./vendor-i18n-CwRLCSuJ.js";
import { q as capitalise, d as sentenceCase, v as setI18nInstance, w as mainSides, x as faces, y as getNestedProperty, C as CheckoutCalculator, z as checkObjectHasPropery, A as objectValuesPresent, B as truncateString, D as sanitiseString, E as mapLegacyInitData, _ as _export_sfc } from "./components-D88dKAyh.js";
import { J as JSZip, H as library$1, I as faXmark, K as faExpand, L as faArrowsLeftRight, M as faArrowsUpDown, N as faHammer, O as faSprayCan, Q as faImage, S as faFiles, T as faTrash, U as faPlusLarge, V as faCalculator } from "./vendor-CklyHjfV.js";
import { E, a as autoTable } from "./vendor-pdf-ClPw2zlg.js";
import { f as useProductPricing } from "./composables-DsZeVWk_.js";
const i18nextReady = initializeI18n();
async function initializeI18n() {
  const messageFiles = {
    main: import("./main-QyDB-v6h.js").then((module) => module.resources),
    errors: import("./errors-K1b58NK8.js").then((module) => module.resources)
  };
  const [main, errors] = await Promise.all([
    messageFiles.main,
    messageFiles.errors
  ]);
  const availableLocales = Object.keys(main);
  const resources = availableLocales.reduce((acc, locale) => ({
    ...acc,
    [locale]: {
      main: main[locale],
      errors: errors[locale]
    }
  }), {});
  setI18nInstance(instance);
  return instance.use(Browser).init({
    debug: false,
    // lng: 'fr',
    fallbackLng: "en",
    ns: ["main", "errors"],
    defaultNS: "errors",
    resources,
    load: "languageOnly",
    supportedLngs: availableLocales,
    interpolation: {
      format: function(value, format) {
        if (format === "capitalise") return capitalise(value);
        if (format === "sentenceCase") return sentenceCase(value);
        return value;
      }
    }
  });
}
const headingSpacing = 5;
const sectionSpacing = 10;
const extrasSeparator = ",";
const headStyles = {
  fillColor: [7, 59, 76],
  fontStyle: "normal"
};
const styles = {
  fontSize: 9
};
const margin = { left: 10 };
let headings = [];
const generateOrderSummaryPDF = (t, resultData, hardware, formatNumber = (number) => number.toString()) => {
  var _a;
  const doc = new E({ orientation: "landscape" });
  let yOffset = 10;
  doc.setFontSize(20);
  doc.text(sentenceCase(t("pdf.order_summary")), 10, yOffset);
  yOffset += 15;
  doc.setFontSize(14);
  doc.text(t("description_item_plural", { a: "Your", i: "part" }), 10, yOffset);
  yOffset += headingSpacing;
  headings = [
    sentenceCase(t("length")),
    sentenceCase(t("width")),
    sentenceCase(t("thickness")),
    sentenceCase(t("material")),
    sentenceCase(t("quantity")),
    sentenceCase(t("name")),
    `Banding (${mainSides.join(extrasSeparator)})`,
    `Finish (${faces.join(extrasSeparator)})`
  ];
  const partsData = resultData.parts.map((part) => {
    var _a2;
    const banding = mainSides.map((side) => part.banding[side] || "-").join(extrasSeparator);
    const finish = faces.map((face) => part.banding[face] || "-").join(extrasSeparator);
    return [
      formatNumber(part.l),
      formatNumber(part.w),
      formatNumber(part.t) || "-",
      ((_a2 = part == null ? void 0 : part.material) == null ? void 0 : _a2.toUpperCase()) || "-",
      formatNumber(part.q),
      part.name || "-",
      banding,
      finish
    ];
  });
  autoTable(doc, {
    startY: yOffset,
    head: [headings],
    body: partsData,
    margin,
    headStyles,
    styles
  });
  yOffset = doc.autoTable.previous.finalY + sectionSpacing;
  doc.setFontSize(14);
  doc.text(sentenceCase(t("pdf.stock_requirements")), 10, yOffset);
  yOffset += headingSpacing;
  headings = [
    sentenceCase(t("length")),
    sentenceCase(t("width")),
    sentenceCase(t("thickness")),
    sentenceCase(t("material")),
    sentenceCase(t("quantity"))
    // 'Cost'
  ];
  const stockData = resultData.stock.map((stock) => {
    var _a2;
    return [
      formatNumber(stock.l),
      formatNumber(stock.w),
      formatNumber(stock.t) || "-",
      ((_a2 = stock == null ? void 0 : stock.material) == null ? void 0 : _a2.toUpperCase()) || "-",
      formatNumber(stock.q)
      // stock.cost
    ];
  });
  autoTable(doc, {
    startY: yOffset,
    head: [headings],
    body: stockData,
    margin,
    headStyles,
    styles
  });
  yOffset = doc.autoTable.previous.finalY + sectionSpacing;
  if (resultData.metadata.totalRollLength > 0) {
    doc.setFontSize(14);
    doc.text(sentenceCase(t("pdf.roll_requirements")), 10, yOffset);
    yOffset += headingSpacing;
    headings = [
      t("name"),
      t("material"),
      t("length")
    ];
    const rollData = resultData.stock.map((stock) => {
      var _a2, _b;
      return [
        ((_a2 = stock == null ? void 0 : stock.name) == null ? void 0 : _a2.toUpperCase()) || "-",
        ((_b = stock == null ? void 0 : stock.material) == null ? void 0 : _b.toUpperCase()) || "-",
        formatNumber(stock.analysis.rollLength)
      ];
    });
    autoTable(doc, {
      startY: yOffset,
      head: [headings],
      body: rollData,
      margin,
      headStyles,
      styles
    });
    yOffset = doc.autoTable.previous.finalY + sectionSpacing;
  }
  if (hardware) {
    if (Object.values(hardware)) {
      doc.setFontSize(14);
      doc.text("Hardware", 10, yOffset);
      yOffset += headingSpacing;
      const hardwareData = Object.values(hardware).map((item) => [
        item.name.toUpperCase(),
        formatNumber(item.q)
        // item.totalCost.toFixed( 2 )
      ]);
      autoTable(doc, {
        startY: yOffset,
        head: [[sentenceCase(t("pdf.item")), sentenceCase(t("quantity"))]],
        body: hardwareData,
        margin,
        headStyles,
        styles
      });
      yOffset = doc.autoTable.previous.finalY + sectionSpacing;
    }
  }
  doc.setFontSize(14);
  doc.text(sentenceCase(t("pdf.totals")), 10, yOffset);
  yOffset += headingSpacing;
  const totalsData = [
    [sentenceCase(t("pdf.total_parts")), formatNumber(resultData.metadata.totalPartsProduced)],
    [sentenceCase(t("pdf.part_area")), formatNumber(resultData.metadata.totalPartArea)],
    [sentenceCase(t("pdf.total_stock_required")), formatNumber(resultData.metadata.totalUsedStock)],
    [sentenceCase(t("pdf.total_banding_length")), formatNumber(resultData.metadata.totalBandingLength)],
    [sentenceCase(t("pdf.total_finish_area")), formatNumber(resultData.metadata.totalFinishArea)],
    [sentenceCase(t("pdf.total_roll_length")), formatNumber(resultData.metadata.totalRollLength)]
  ];
  autoTable(doc, {
    startY: yOffset,
    body: totalsData,
    margin,
    headStyles,
    styles
  });
  yOffset = doc.autoTable.previous.finalY + sectionSpacing;
  if ((_a = window == null ? void 0 : window.smartcutImages) == null ? void 0 : _a.length) {
    doc.addPage();
    let yOffset2 = 10;
    doc.setFontSize(14);
    doc.text(sentenceCase(t("pdf.images")), 10, yOffset2);
    yOffset2 += headingSpacing;
    const imageNames = window.smartcutImages.flatMap((imageData, index) => imageData.metadata.map((meta) => [
      index + 1,
      meta.newName
    ]));
    autoTable(doc, {
      startY: yOffset2,
      body: imageNames,
      head: [[sentenceCase(t("pdf.part_index")), sentenceCase(t("pdf.file_name"))]],
      margin,
      headStyles,
      styles
    });
  }
  return doc.output("datauristring");
};
const _hoisted_1$1 = {
  key: 0,
  class: "debug"
};
const showDevInfo = false;
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "WordPress",
  setup(__props) {
    const { t } = useTranslation(["main", "errors"]);
    const FormulaPricing = defineAsyncComponent(() => import("./components-D88dKAyh.js").then((n) => n.F));
    const ObjectViewer = defineAsyncComponent(() => import("./components-D88dKAyh.js").then((n) => n.O));
    const Notices = defineAsyncComponent(() => import("./components-D88dKAyh.js").then((n) => n.N));
    const env = "development";
    const elements = {};
    const inputs = {};
    const calculatedVariationPrice = ref(null);
    let calculatePrice;
    let resetPricing;
    let settings;
    const extrasData = {
      banding: null,
      finish: null
    };
    let product = null;
    let variations = [];
    let machiningPricing = null;
    let formatting = {};
    const debug = ref(false);
    const inputType = ref("manual");
    const formulaURL = ref("");
    const stock = ref([]);
    const selectedVariation = ref(null);
    const quantityPricing = ref(true);
    const hardwareResult = ref(null);
    const checkoutEnabled = ref(false);
    const calculator = ref(null);
    provide("calculator", () => calculator.value);
    const log = (messages) => {
      if (debug.value) {
        console.log("SmartCut -", ...messages);
      }
    };
    const error = (message) => {
      console.error(`SmartCut - ${message}`);
    };
    const enableCutToSize = (setQuantityEnabled = true) => {
      checkoutEnabled.value = true;
      const relevantElements = ["checkout", "intro_text", "offcuts", "banding_key"];
      relevantElements.forEach((e) => setElementDisplay(e, "block"));
      if (isPricingTableNeeded()) {
        setElementDisplay("pricing_table", "table");
      }
      if (setQuantityEnabled) {
        enableQuantity(true);
      } else {
        disableQuantity();
      }
      disableAddToCart();
    };
    const disableCutToSize = (setQuantityEnabled = true, enableCartButton = true) => {
      checkoutEnabled.value = false;
      const relevantElements = ["checkout", "intro_text", "offcuts", "banding_key", "pricing_table"];
      relevantElements.forEach((e) => setElementDisplay(e, "none"));
      if (enableCartButton === true) {
        enableAddToCart();
      } else if (enableCartButton === false) {
        disableAddToCart();
      }
      {
        enableQuantity();
      }
    };
    const enableQuantity = (readonly = false) => {
      setElementDisplay("quantity", "inline-block");
      elements.quantity.readOnly = readonly;
    };
    const disableQuantity = () => {
      if (checkoutEnabled.value === false) return;
      setCartQuantity(1);
      setElementDisplay("quantity", "none");
      elements.quantity.readOnly = true;
    };
    const enableAddToCart = () => {
      if (!elements.cart_button) {
        error("Cart button not found");
        return;
      }
      elements.cart_button.disabled = false;
    };
    const disableAddToCart = () => {
      if (checkoutEnabled.value === false) return;
      if (!elements.cart_button) {
        error("Cart button not found");
        return;
      }
      elements.cart_button.disabled = true;
    };
    const handleValidationError = () => {
      error("Validation error");
      disableAddToCart();
    };
    const setCartQuantity = (quantity, decimalPlaces = 0) => {
      log(["setting cart quantity", quantity]);
      if (!elements.quantity) {
        error("Quantity field not found when trying to set");
        return;
      }
      elements.quantity.value = quantity.toFixed(decimalPlaces);
      console.assert(elements.quantity.value === quantity.toFixed(decimalPlaces), "Quantity field value not set correctly");
    };
    const setVariationPrice = (price) => {
      log(["setting variation price", price]);
      const variationPriceEl = document.querySelector(".woocommerce-variation-price .smartcut-price-selector");
      if (variationPriceEl) {
        variationPriceEl.innerText = formatPrice(price);
      }
      calculatedVariationPrice.value = price;
    };
    const getCurrentVariationPrice = () => {
      var _a;
      const price = calculatedVariationPrice.value ?? ((_a = selectedVariation.value) == null ? void 0 : _a.display_price) ?? 0;
      if (typeof price === "string") return parseFloat(price);
      return price;
    };
    const initCheckout = () => {
      if (!(window == null ? void 0 : window.smartcutConfig)) {
        error("SmartCut config not found");
        return;
      }
      const config = window.smartcutConfig;
      settings = config.settings;
      const banding = getExtrasData(getNestedProperty(window, ["smartcutConfig", "banding_data"]));
      const finish = getExtrasData(getNestedProperty(window, ["smartcutConfig", "finish_data"]));
      const options = {
        debug: settings.debug,
        numberFormat: settings.numberFormat,
        locale: config.locale,
        decimalPlaces: 2,
        //saw
        stockType: settings.stock_type,
        bladeWidth: settings.blade_width,
        cutPreference: settings.cut_preference,
        stackHeight: settings.stack_height,
        stockSelection: settings.stock_selection,
        stockGrain: settings.stock_grain,
        minSpacing: settings.min_spacing,
        maxParts: settings.max_parts ?? null,
        orientationModel: settings.orientation_model,
        minDimension: settings.min_dimension,
        partTrim: settings.part_trim,
        enable: {
          banding: settings.enable_banding,
          finish: settings.enable_finish,
          orientation: settings.enable_orientation,
          diagram: !settings.hide_diagram,
          machining: settings.enable_machining,
          csvImport: settings.enable_import,
          partName: settings.enable_part_name,
          imageUpload: settings.enable_image_upload,
          focus: true,
          click: true,
          progressNumber: settings.pricing_strategy === "part_area" ? false : true
        },
        colors: {
          partA: (settings == null ? void 0 : settings.part_a_color) ?? "#1d9bc4",
          partB: (settings == null ? void 0 : settings.part_b_color) ?? "#065d7a",
          partHover: (settings == null ? void 0 : settings.part_hover_color) ?? "#f8b029",
          partSelected: (settings == null ? void 0 : settings.part_selected_color) ?? "#5bc85b",
          stock: (settings == null ? void 0 : settings.stock_color) ?? "#ffd166",
          button: (settings == null ? void 0 : settings.button_color) ?? "#118ab2",
          buttonText: (settings == null ? void 0 : settings.button_text_color) ?? "#ffffff",
          text: (settings == null ? void 0 : settings.text_color) ?? "#ffffff"
        }
      };
      debug.value = options.debug;
      const machining = {
        numberFormat: settings.number_format,
        decimalPlaces: 2,
        fractionRoundTo: 0,
        faces: {
          enabled: settings.machining_sides
        },
        holes: {
          enabled: settings.machining_holes,
          defaultDiameter: settings.machining_holes_default_diameter,
          diameters: settings.machining_holes_diameters.split(",").map((v) => v.trim()).filter(Boolean),
          minDiameter: settings.machining_holes_min_diameter,
          maxDiameter: settings.machining_holes_max_diameter,
          enableDepth: settings.machining_holes_depth,
          depths: settings.machining_holes_depths.split(",").map((v) => v.trim()).filter(Boolean),
          defaultDepth: settings.machining_holes_default_depth,
          minDepth: settings.machining_holes_min_depth,
          maxDepth: settings.machining_holes_max_depth
        },
        hingeHoles: {
          enabled: settings.machining_hinge_holes,
          minimumHoleDistance: settings.machining_hinge_holes_minimum_hole_distance,
          defaultDistanceFromEdge: settings.machining_hinge_holes_default_distance_from_edge,
          defaultOuterSpacing: settings.machining_hinge_holes_default_outer_spacing,
          defaultHingeLength: settings.machining_hinge_holes_default_hinge_length
        },
        corners: {
          enabled: settings.machining_radius_corners || settings.machining_bevel_corners,
          types: [
            settings.machining_radius_corners ? "radius" : null,
            settings.machining_bevel_corners ? "bevel" : null
          ].filter(Boolean),
          minValue: settings.machining_corners_min_value,
          maxValue: settings.machining_corners_max_value,
          enableBanding: settings.machining_corners_enable_banding
        }
      };
      quantityPricing.value = isQuantityPricing();
      if (quantityPricing.value) {
        enableQuantity(true);
      } else {
        disableQuantity();
      }
      if (product.type === "variable") {
        disableCutToSize(false, false);
      } else {
        enableCutToSize(quantityPricing.value);
      }
      const initData = {
        type: product.type,
        stock: stock.value,
        variations: variations ?? null,
        options,
        banding,
        finish,
        machining
      };
      if (initData.type === "variable") {
        log(["setting variable product form listeners"]);
        jQuery(function($) {
          $(".variations_form").on("reset_data", () => disableCutToSize(false, false)).on("found_variation", (event, variation) => handleVariationFound(event, variation));
        });
      }
      const dependencies = {
        product,
        selectedVariation,
        inputs,
        elements,
        inputType,
        formatPrice,
        getCurrentVariationPrice,
        setInputValue,
        setCartQuantity,
        setVariationPrice,
        isExtraEnabled,
        isQuantityPricing,
        isMachiningEnabled,
        isSurchargeEnabled,
        getTotalBandingPrice,
        getTotalFinishPrice,
        getTotalMachiningPrice,
        getInputValue,
        enableAddToCart,
        log,
        error
      };
      const pricing = useProductPricing({
        pricing_strategy: settings.pricing_strategy,
        number_format: settings.number_format,
        unit_system: settings.unit_system,
        cut_length_price: settings.cut_length_price,
        per_part_price: settings.per_part_price,
        surcharge: settings.surcharge,
        surcharge_type: settings.surcharge_type,
        enable_offcut_pricing: settings.enable_offcut_pricing,
        offcut_min_length: settings.offcut_min_length,
        offcut_min_width: settings.offcut_min_width
      }, dependencies);
      calculatePrice = pricing.calculatePrice;
      resetPricing = pricing.resetPricing;
      nextTick(() => {
        if (calculator.value) calculator.value.init(initData);
      });
    };
    const configureProduct = (smartcutConfig) => {
      const multiple_sizes = (smartcutConfig == null ? void 0 : smartcutConfig.multiple_sizes) === true;
      product = {
        type: smartcutConfig == null ? void 0 : smartcutConfig.product_type,
        multiple_sizes,
        size: (smartcutConfig == null ? void 0 : smartcutConfig.size) ? smartcutConfig.size.split(" | ") : [],
        l: !multiple_sizes && (smartcutConfig == null ? void 0 : smartcutConfig.l) ? parseFloat(smartcutConfig.l) : null,
        w: !multiple_sizes && (smartcutConfig == null ? void 0 : smartcutConfig.w) ? parseFloat(smartcutConfig.w) : null,
        t: (smartcutConfig == null ? void 0 : smartcutConfig.t) ?? null,
        price: (smartcutConfig == null ? void 0 : smartcutConfig.price) ? parseFloat(smartcutConfig.price) : null,
        stock_name: (smartcutConfig == null ? void 0 : smartcutConfig.stock_sku) || smartcutConfig.stock_name
      };
      if (!product.multiple_sizes) {
        if (!product.l) {
          error("product 'length' attribute not available");
        }
        if (!product.w) {
          error("product 'width' attribute not available");
        }
      }
    };
    const configurePricing = (smartcutConfig) => {
      inputType.value = getNestedProperty(window, ["smartcutConfig", "settings", "enable_formula"]) === true ? "formula" : "manual";
      formulaURL.value = getNestedProperty(window, ["smartcutConfig", "settings", "formula_url"]);
      log([`Input type: ${inputType.value}`]);
      log([`Input type: ${inputType.value}`]);
      formatting = {
        thousands_separator: smartcutConfig == null ? void 0 : smartcutConfig.thousands_separator,
        decimal_separator: smartcutConfig == null ? void 0 : smartcutConfig.decimal_separator,
        number_of_decimals: smartcutConfig == null ? void 0 : smartcutConfig.number_of_decimals,
        currency_symbol: smartcutConfig == null ? void 0 : smartcutConfig.currency_symbol,
        currency_position: smartcutConfig == null ? void 0 : smartcutConfig.currency_position
      };
    };
    const cacheElements = () => {
      const elementIds = {
        checkout: "#smartcut-app",
        intro_text: "#smartcut-intro-text",
        pricing_table: "#smartcut-pricing-table",
        offcuts: "#include_offcuts_field",
        banding_key: "#smartcut-banding-key",
        finish_key: "#smartcut-finish-key",
        banding_total_price: "#smartcut-banding-total bdi .smartcut-price-selector",
        finish_total_price: "#smartcut-finish-total bdi .smartcut-price-selector",
        cut_length_price: "#smartcut-cut-length-total bdi .smartcut-price-selector",
        per_part_price: "#smartcut-per-part-total bdi .smartcut-price-selector",
        part_area_price: "#smartcut-area-total bdi .smartcut-price-selector",
        offcut_area_price: "#smartcut-offcut-area-total bdi .smartcut-price-selector",
        roll_length_price: "#smartcut-roll-length-total bdi .smartcut-price-selector",
        surcharge_price: "#smartcut-surcharge-total bdi .smartcut-price-selector",
        machining_total_price: "#smartcut-machining-total bdi .smartcut-price-selector",
        stock_total_price: "#smartcut-stock-total bdi .smartcut-price-selector",
        quantity: ".smartcut-stock-quantity",
        //this is the add to cart quantity element(s)
        cart_button: ".single_add_to_cart_button"
      };
      for (const [key, selector] of Object.entries(elementIds)) {
        elements[key] = document.querySelector(selector);
      }
      if (!elements.checkout) {
        return error("checkout iframe not found");
      }
      if (!elements.quantity) {
        return error("quantity field not found");
      }
      if (!elements.cart_button) {
        return error("cart button not found");
      }
      elements.quantity.readOnly = true;
      disableAddToCart();
    };
    const getStockTrim = () => {
      return {
        x1: settings.stock_trim_x1 ?? 0,
        x2: settings.stock_trim_x2 ?? 0,
        y1: settings.stock_type === "linear" ? 0 : settings.stock_trim_y1 ?? 0,
        y2: settings.stock_type === "linear" ? 0 : settings.stock_trim_y2 ?? 0
      };
    };
    const createStock = (l = null, w = null, t2 = null, cost = null, attributes = null) => {
      let notes;
      if (attributes && typeof attributes === "object") {
        notes = [];
        for (const [key, value] of Object.entries(attributes)) {
          if (key === "attribute_size") continue;
          if (key === "attribute_thickness") continue;
          notes.push(`${key.replace("attribute_", "")}: ${value}`);
        }
        notes = notes.join(" - ");
      }
      const inputStockData = {
        name: product.stock_name,
        l,
        w,
        t: t2,
        grain: settings.stock_grain,
        cost: parseFloat((cost == null ? void 0 : cost.toString()) || "0"),
        trim: getStockTrim(),
        allowExactFitShapes: true,
        notes
      };
      return inputStockData;
    };
    const configureStock = () => {
      if (!(product == null ? void 0 : product.stock_name)) {
        error("product name not specified");
      }
      stock.value = [];
      if (product.multiple_sizes) {
        for (const size of product.size) {
          if (!isStockSize(size)) continue;
          const [l, w] = size.split("x");
          const newStock = createStock(
            parseFloat(l),
            parseFloat(w),
            product == null ? void 0 : product.t,
            product.price
          );
          stock.value.push(newStock);
        }
      } else {
        stock.value.push(createStock(
          product.l,
          product.w,
          product == null ? void 0 : product.t,
          product == null ? void 0 : product.price
        ));
      }
    };
    const addThousandsSeparators = (numStr, separator) => {
      const parts = numStr.split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
      return parts.join(".");
    };
    const formatPrice = (price = 0, locale = "") => {
      if (!price) {
        if (!locale) return "0.00";
        return addCurrencySymbol("0.00");
      }
      if (typeof price === "string") price = parseFloat(price);
      const formattedPrice = price.toFixed(formatting.number_of_decimals).replace(".", formatting.decimal_separator);
      const withSeparators = addThousandsSeparators(formattedPrice, formatting.thousands_separator);
      if (!locale) return withSeparators;
      return addCurrencySymbol(withSeparators);
    };
    const formatNumber = (number) => {
      if (number === null || number === void 0) return "";
      if (typeof number === "string") number = parseFloat(number);
      const hasDecimals = number % 1 !== 0;
      const decimals = hasDecimals ? formatting.number_of_decimals : 0;
      const formatted = number.toFixed(decimals).replace(".", formatting.decimal_separator);
      return addThousandsSeparators(formatted, formatting.thousands_separator);
    };
    const addCurrencySymbol = (price) => {
      switch (formatting.currency_position) {
        case "left":
          return `${formatting.currency_symbol}${price}`;
        case "right":
          return `${price}${formatting.currency_symbol}`;
        default:
          return `${formatting.currency_symbol}${price}`;
      }
    };
    const formatExtrasKey = (key) => {
      const processString = (str) => {
        return truncateString(sanitiseString(str), 100).replace("|", "_");
      };
      if (Array.isArray(key)) {
        return key.map(processString).join(",");
      } else {
        return processString(key);
      }
    };
    const getExtrasData = (wcExtrasData) => {
      if (!wcExtrasData) return null;
      const extrasData2 = {
        labels: [],
        pricing: {}
      };
      const items = Object.values(wcExtrasData);
      for (const item of items) {
        if (item == null ? void 0 : item.variations) {
          extrasData2.labels.push(...Object.keys(item.options));
          Object.values(item.variations).forEach((variation) => {
            const { options } = variation;
            const key = Object.values(options).map((o) => formatExtrasKey(o)).join("|");
            extrasData2.pricing[key] = parseInt(variation.price);
          });
        } else if (item == null ? void 0 : item.options) {
          Object.keys(item.options).forEach((option) => {
            extrasData2.pricing[formatExtrasKey(option)] = parseInt(item.price);
          });
        }
      }
      if (!extrasData2.labels.length) extrasData2.labels.push("type");
      return extrasData2;
    };
    const findExtrasPrice = (extraType, selectedExtrasOptions) => {
      if (!selectedExtrasOptions.length) return null;
      if (!checkObjectHasPropery(extrasData, [extraType])) return null;
      const extraData = getNestedProperty(extrasData, [extraType]);
      if (!objectValuesPresent(extraData)) return null;
      const allVariations = Object.values(extraData).map((i) => {
        if (i == null ? void 0 : i.variations) {
          return Object.values(i.variations).map((i2) => {
            i2.type = "variable";
            return i2;
          });
        } else {
          i.type = "simple";
          return i;
        }
      }).flat();
      const foundVariation = allVariations.find((variation) => {
        let variationOptions;
        if (variation.type === "simple") {
          variationOptions = Object.keys(variation.options);
        } else {
          variationOptions = Object.values(variation.options);
        }
        if (!variationOptions) return false;
        return variationOptions.every((option, index) => formatExtrasKey(option) === formatExtrasKey(selectedExtrasOptions[index]));
      });
      return (foundVariation == null ? void 0 : foundVariation.price) ? parseFloat(foundVariation.price) : null;
    };
    const getTotalFinishPrice = (totalFinish) => {
      let total = 0;
      if (typeof totalFinish === "object") {
        for (let [finishKey, area] of Object.entries(totalFinish)) {
          if (typeof area === "string") {
            area = parseFloat(area);
          }
          const finishOptions = finishKey.split("|");
          const price = findExtrasPrice("finish", finishOptions);
          if (price === null) continue;
          const areaInSquareMeters = Number(area) / 1e6;
          const cost = areaInSquareMeters * parseFloat(price.toString());
          total += cost;
        }
        if ("min_finish_charge" in settings) {
          const minFinishCharge = parseFloat(settings == null ? void 0 : settings.min_finish_charge);
          if (minFinishCharge > 0 && total > 0 && total < minFinishCharge) {
            return minFinishCharge;
          }
        }
      }
      return total;
    };
    const getTotalBandingPrice = (totalBanding) => {
      let total = 0;
      if (typeof totalBanding === "object") {
        for (let [bandingKey, length] of Object.entries(totalBanding)) {
          if (typeof length === "string") length = parseFloat(length);
          const bandingOptions = bandingKey.split("|");
          const price = findExtrasPrice("banding", bandingOptions);
          if (price === null) continue;
          const cost = length / (settings.unit_system === "imperial" ? 12 : 1e3) * parseFloat(price.toString());
          total += cost;
        }
        if ("min_banding_charge" in settings) {
          const minBandingCharge = parseFloat(settings == null ? void 0 : settings.min_banding_charge);
          if (minBandingCharge > 0 && total > 0 && total < minBandingCharge) {
            return minBandingCharge;
          }
        }
      }
      return total;
    };
    const getTotalMachiningPrice = (data) => {
      return (machiningPricing.holes ?? 0) * (data.metadata.numHoles ?? 0) + (machiningPricing.corners ?? 0) * (data.metadata.numCorners ?? 0);
    };
    const setElementDisplay = (element, display) => {
      var _a;
      if (element in elements && ((_a = elements[element]) == null ? void 0 : _a.style)) elements[element].style.display = display;
    };
    const setInputValue = (key, value) => {
      if (doesInputExist(key)) {
        inputs[key].value = value;
      } else {
        error(`Attempting to set input but key '${key}' does not exist`);
      }
    };
    const getInputValue = (key) => {
      if (doesInputExist(key)) {
        return inputs[key].value;
      } else {
        error(`Attempting to get input but key '${key}' does not exist`);
      }
    };
    const doesInputExist = (key) => {
      return key in inputs && inputs[key] instanceof HTMLInputElement;
    };
    const reset = () => {
      setCartQuantity(1);
      disableAddToCart();
      resetPricing();
      for (const key in inputs) {
        if (key === "smartcut-hardware-price") continue;
        setInputValue(key, null);
      }
    };
    const isQuantityPricing = () => {
      var _a;
      if (((_a = window.smartcutConfig) == null ? void 0 : _a.product_type) === "variable") {
        return false;
      }
      switch (settings.pricing_strategy) {
        case "full_stock":
        case "part_area":
        case "full_stock_plus_cut_length":
        case "full_stock_plus_num_parts":
          return true;
        case "roll_length":
        case "cut_length":
          return false;
        default:
          return false;
      }
    };
    const isExtraEnabled = (extraType) => {
      if (checkObjectHasPropery(settings, ["enable", extraType]) && getNestedProperty(settings, ["enable", extraType]) === false) {
        return false;
      }
      const extraData = getNestedProperty(extrasData, [extraType]);
      return !!(extraData && Object.values(extraData).length);
    };
    const isMachiningEnabled = () => {
      return settings.enable_machining === true;
    };
    const isSurchargeEnabled = () => {
      if ((settings == null ? void 0 : settings.surcharge_type) === "none") return false;
      if (!(settings == null ? void 0 : settings.surcharge) || settings.surcharge === "0.00") return false;
      return true;
    };
    const isPricingTableNeeded = () => {
      if (settings.pricing_strategy === "full_stock_plus_cut_length") return true;
      if (settings.pricing_strategy === "full_stock_plus_num_parts") return true;
      if (settings.pricing_strategy === "part_area") return true;
      if (settings.pricing_strategy === "roll_length") return true;
      if (isSurchargeEnabled()) return true;
      if (isExtraEnabled("banding")) return true;
      if (isExtraEnabled("finish")) return true;
      if (isMachiningEnabled()) return true;
      return false;
    };
    const getSizes = (variation) => {
      var _a;
      let sizes = (_a = variation == null ? void 0 : variation.attributes) == null ? void 0 : _a.attribute_size;
      if (!sizes) sizes = product == null ? void 0 : product.size;
      return sizes;
    };
    const isStockSize = (size) => {
      return /\d+x\d+/.test(size);
    };
    const cacheInputFields = () => {
      window.smartcutConfig.input_fields.forEach((f) => {
        const fieldId = f.replaceAll("_", "-");
        inputs[fieldId] = document.getElementById(fieldId);
      });
    };
    const handleVariationFound = (e, variation) => {
      reset();
      selectedVariation.value = variation;
      log(["variation selected", variation.attributes]);
      stock.value = [];
      const thickness = getNestedProperty(variation, ["attributes", "attribute_thickness"]);
      product.selected_thickness = thickness;
      if (product.multiple_sizes) {
        const size = getSizes(variation);
        log([`variation found with size: ${size} & thickness: ${thickness}`]);
        if (!size) {
          disableCutToSize(false);
          return error("The size of this multiple size product could not be found");
        }
        if (!Array.isArray(size)) {
          if (isStockSize(size)) disableCutToSize(true, true);
          else enableCutToSize(quantityPricing.value);
        } else {
          enableCutToSize(quantityPricing.value);
        }
        if ((variations == null ? void 0 : variations.length) && thickness) {
          let stockSizes;
          if (Array.isArray(size)) {
            stockSizes = size.map((size2) => ({
              size: size2,
              l: size2.split("x")[0],
              w: size2.split("x")[1],
              t: thickness,
              price: variation.display_price
            }));
          } else {
            stockSizes = variations.filter((v) => {
              var _a, _b;
              if (isStockSize((_a = v == null ? void 0 : v.attributes) == null ? void 0 : _a.size)) {
                return thickness === ((_b = v == null ? void 0 : v.attributes) == null ? void 0 : _b.thickness);
              }
              return false;
            }).map((v) => {
              var _a, _b, _c, _d;
              log([
                `size attribute: '${(_a = v == null ? void 0 : v.attributes) == null ? void 0 : _a.size}'`,
                `price for 'thickness ${thickness}, size: ${size}' is ${variation.display_price}`
              ]);
              return {
                size: (_b = v == null ? void 0 : v.attributes) == null ? void 0 : _b.size,
                l: (_c = v == null ? void 0 : v.attributes) == null ? void 0 : _c.size.split("x")[0],
                w: (_d = v == null ? void 0 : v.attributes) == null ? void 0 : _d.size.split("x")[1],
                t: product.selected_thickness,
                price: variation.display_price
              };
            });
          }
          if (checkoutEnabled.value === true) {
            stockSizes.forEach((size2) => {
              const newStock = createStock(
                size2.l,
                size2.w,
                size2.t,
                size2.price,
                variation == null ? void 0 : variation.attributes
              );
              stock.value.push(newStock);
            });
          }
        }
      } else {
        const v = variations.find((v2) => v2.attributes.thickness === thickness);
        if (!v) return error(`variation not found for thickness ${thickness}`);
        stock.value.push(createStock(
          product.l,
          product.w,
          thickness,
          v.price,
          variation == null ? void 0 : variation.attributes
        ));
        enableCutToSize(quantityPricing.value);
      }
    };
    const result = async (resultData) => {
      reset();
      log(["result event received", resultData]);
      const calculationResult = await calculatePrice(resultData);
      if (!calculationResult.success) {
        console.error(calculationResult.error);
        return;
      }
      await createPDFSummary(resultData);
    };
    const createPDFSummary = async (resultData) => {
      const pdfDataUri = generateOrderSummaryPDF(t, resultData, hardwareResult.value, formatNumber);
      const base64PDF = pdfDataUri.split(",")[1];
      const zip = new JSZip();
      zip.file("order-summary.pdf", base64PDF);
      const compressedBlob = await zip.generateAsync({ type: "blob" });
      const zipFile = new File([compressedBlob], "order-summary.zip", { type: "application/zip" });
      if (!doesInputExist("smartcut-order-summary")) return;
      const form = inputs["smartcut-order-summary"].closest("form");
      if (!form) return;
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(zipFile);
      const fileInput = form.querySelector('[name="smartcut_order_summary"]');
      if (fileInput instanceof HTMLInputElement) {
        fileInput.files = dataTransfer.files;
      }
    };
    const setHardwareResult = (result2, total) => {
      disableAddToCart();
      if (result2) {
        hardwareResult.value = markRaw(result2);
      }
      setInputValue("smartcut-hardware-price", total ?? 0);
    };
    onMounted(() => {
      console.log("💥 Powered by https://smartcut.dev", window.smartcutConfig.version);
      log(["Launching WordPress checkout..."]);
      extrasData.banding = getNestedProperty(window, ["smartcutConfig", "banding_data"]);
      extrasData.finish = getNestedProperty(window, ["smartcutConfig", "finish_data"]);
      machiningPricing = getNestedProperty(window, ["smartcutConfig", "machining_pricing"]);
      variations = getNestedProperty(window, ["smartcutConfig", "variations"]);
      cacheElements();
      cacheInputFields();
      configureProduct(window.smartcutConfig);
      configurePricing(window.smartcutConfig);
      initCheckout();
      configureStock();
      const elementsToHide = [
        "div.quantity > input.plus",
        "div.quantity > input.minus",
        "div.quantity .qty-plus",
        "div.quantity .qty-minus"
      ];
      elementsToHide.forEach((e) => {
        const element = document.querySelector(e);
        if (element) element.style.display = "none";
      });
      const event = new CustomEvent("smartcut/ready");
      window.dispatchEvent(event);
      log(["Wordpress checkout ready"]);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(Notices), { position: "top-left" }),
        unref(env) === "development" && showDevInfo ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
          _cache[0] || (_cache[0] = createBaseVNode("div", null, "WP - developer information", -1)),
          createVNode(unref(ObjectViewer), {
            data: [unref(variations)],
            paths: ["variations"]
          }, null, 8, ["data"])
        ])) : createCommentVNode("", true),
        inputType.value === "formula" && formulaURL.value ? (openBlock(), createBlock(unref(FormulaPricing), {
          key: 1,
          ref: "formulapricing",
          "format-price": formatPrice,
          url: formulaURL.value,
          debug: debug.value,
          onHardwareResult: setHardwareResult,
          onPanelResult: disableAddToCart
        }, null, 8, ["url", "debug"])) : createCommentVNode("", true),
        inputType.value === "manual" || inputType.value === "formula" && formulaURL.value ? (openBlock(), createBlock(CheckoutCalculator, {
          key: 2,
          ref_key: "calculator",
          ref: calculator,
          readonly: inputType.value === "formula",
          debug: debug.value,
          stock: stock.value,
          "find-extras-price": findExtrasPrice,
          "format-price": formatPrice,
          onLog: log,
          onError: error,
          onInputsChanged: disableAddToCart,
          onValidationError: handleValidationError,
          onResult: result
        }, null, 8, ["readonly", "debug", "stock"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Vanilla",
  emits: ["ready"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const FormulaPricing = defineAsyncComponent(() => import("./components-D88dKAyh.js").then((n) => n.F));
    const Notices = defineAsyncComponent(() => import("./components-D88dKAyh.js").then((n) => n.N));
    const emit = __emit;
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
    const handleValidationError = () => {
      const event = new CustomEvent("smartcut/validationError");
      window.dispatchEvent(event);
    };
    const handleCalculating = () => {
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
      const price = getNestedProperty(pricing.value, [extraType, key]);
      return typeof price === "number" ? price : parseFloat(price);
    };
    const init = (data) => {
      mapLegacyInitData(data);
      stock.value = data.stock;
      pricing.value.banding = getNestedProperty(data, ["banding", "pricing"]);
      pricing.value.finish = getNestedProperty(data, ["finish", "pricing"]);
      pricing.value.machining = getNestedProperty(data, ["machining", "pricing"]);
      if (checkObjectHasPropery(data, ["options", "currency"])) {
        currency.value = getNestedProperty(data, ["options", "currency"]);
      }
      if (checkObjectHasPropery(data, ["options", "locale"])) {
        locale.value = getNestedProperty(data, ["options", "locale"]).replace("_", "-");
      }
      if (checkObjectHasPropery(data, ["options", "formula", "url"]) || checkObjectHasPropery(data, ["options", "formula", "spec"])) {
        inputType.value = "formula";
        formulaURL.value = getNestedProperty(data, ["options", "formula", "url"]) ?? null;
        formulaSpec.value = getNestedProperty(data, ["options", "formula", "spec"]) ?? null;
      }
      nextTick(() => {
        if (calculator.value) calculator.value.init(data);
      });
    };
    const result = (result2) => {
      var _a, _b, _c;
      const response = result2;
      response.checkout = {
        formattedTotalStockCost: "",
        formattedBandingCost: {},
        formattedFinishCost: {}
      };
      if ((_a = result2 == null ? void 0 : result2.metadata) == null ? void 0 : _a.totalStockCost) {
        response.checkout.formattedTotalStockCost = result2.metadata.totalStockCost.toLocaleString(
          locale.value,
          {
            style: "currency",
            currency: currency.value
          }
        );
      }
      if ((_b = result2 == null ? void 0 : result2.metadata) == null ? void 0 : _b.bandingLengthByType) {
        for (const [bandingType, length] of Object.entries(result2.metadata.bandingLengthByType)) {
          if (!checkObjectHasPropery(pricing.value, ["banding", bandingType])) {
            error(`Banding price ${bandingType} not found`);
            continue;
          }
          response.checkout.formattedBandingCost[bandingType] = (length / 1e3 * pricing.value.banding[bandingType]).toLocaleString(locale.value, { style: "currency", currency: currency.value });
        }
      }
      if ((_c = result2 == null ? void 0 : result2.metadata) == null ? void 0 : _c.finishAreaByType) {
        for (const [finishType, area] of Object.entries(result2.metadata.finishAreaByType)) {
          if (!checkObjectHasPropery(pricing.value, ["finish", finishType])) {
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
      debug.value = urlParams.has("debug") ? true : false;
      if (debug.value) console.log("Smartcut - debug enabled");
    });
    onMounted(() => {
      window.smartcutCheckout = { init };
      emit("ready");
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
      calculating: handleCalculating,
      result,
      formatPrice,
      findExtrasPrice,
      setHardwareResult
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(Notices), { position: "top-left" }),
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
          onCalculating: handleCalculating,
          onValidationError: handleValidationError,
          onResult: result
        }, null, 8, ["readonly", "debug", "stock"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const _hoisted_1 = {
  key: 1,
  class: "error-message"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Launch",
  props: {
    type: { default: "vanilla" }
  },
  setup(__props, { expose: __expose }) {
    const isComponentMounted = ref(false);
    const checkoutRef = ref(null);
    const components = markRaw({
      wordpress: _sfc_main$2,
      vanilla: _sfc_main$1
    });
    const props = __props;
    const currentComponent = computed(() => {
      if (!props.type) return null;
      const componentKey = props.type.toLowerCase();
      return components[componentKey] || null;
    });
    __expose({
      componentType: computed(() => props.type),
      isComponentMounted,
      checkout: checkoutRef
    });
    return (_ctx, _cache) => {
      return currentComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(currentComponent.value), {
        key: 0,
        ref_key: "checkoutRef",
        ref: checkoutRef
      }, null, 512)) : props.type ? (openBlock(), createElementBlock("div", _hoisted_1, " Invalid component type: " + toDisplayString(props.type), 1)) : createCommentVNode("", true);
    };
  }
});
const Launch = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6d642def"]]);
library$1.add(
  faXmark,
  faExpand,
  faArrowsLeftRight,
  faArrowsUpDown,
  faHammer,
  faSprayCan,
  faImage,
  faFiles,
  faTrash,
  faPlusLarge,
  faCalculator
);
let app = null;
let isMounting = false;
const mount = async () => {
  if (isMounting) return;
  isMounting = true;
  try {
    const mountPoint = document.querySelector("#smartcut-app");
    if (!mountPoint) {
      console.warn("No #smartcut-app element found");
      return;
    }
    const type = mountPoint.getAttribute("data-type") || "";
    app = createApp(Launch, { type });
    await i18nextReady;
    app.use(install, { i18next: instance });
    app.component("FontAwesomeIcon", FontAwesomeIcon);
    app.mount("#smartcut-app");
  } catch (error) {
    console.error("SmartCut mount error:", error);
  } finally {
    isMounting = false;
  }
};
mount();
export {
  app,
  mount
};
//# sourceMappingURL=checkout.js.map

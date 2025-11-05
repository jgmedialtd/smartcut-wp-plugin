import { F as bt, G as Oe, bp as He, bq as Ke, br as w, bs as vt, bt as H, bu as kt, bv as Ye, Q as wt, bw as St, bx as xt, by as Pt, t as Ft, bz as Et } from "./components-ChmrVdkS.js";
import "./vendor-i18n-BuJwRgtG.js";
import { o as xe, r as R, s as v, a as Pe, _ as We, u as Ct, c as qe, b as je, ai as Z, aj as Tt } from "./vendor-4AnxBRif.js";
import { d as Ie, e as b, h as Fe, K as Ne, Z as zt, g as Ge, c as Ee, o as M, G as we, p as ce, s as X, q as Q, M as ue, F as Je, k as Se, _ as Ze, b as $t, Q as Xe, z as Dt, t as qt } from "./vendor-vue-V1I1Po2P.js";
import { f as jt, k as Ot } from "./composables-Db3BGJOY.js";
import { E as It, a as ae } from "./vendor-pdf-4rRPwXuv.js";
const At = xe({
  name: v().trim(),
  price: v().trim().default("0"),
  options: R(v(), Pe(v()))
}), Vt = R(v(), At), Lt = xe({
  name: v().trim(),
  options: R(
    v(),
    Ct([v(), Pe(v())])
  ).optional(),
  variations: Vt.optional(),
  price: v().trim().default("0"),
  type: We(["simple", "variable"]).optional()
}), Qe = R(v(), Lt);
xe({
  env: v().default("production"),
  showDevInfo: je().default(!1),
  debug: je().default(!1),
  el: R(v(), Z()).default({}),
  inputType: We(["manual", "formula"]).default("manual"),
  settings: R(v(), Z()).default({}),
  // Note: HTMLInputElement cannot be validated with Zod, using unknown
  inputs: R(v(), Z()).default({}),
  formatting: R(v(), Z()).default({}),
  product: R(v(), Z()).default({}),
  stock: Pe(bt).default([]),
  variations: Pe(Z()).default([]),
  selectedVariation: R(v(), Z()).default({}),
  machiningPricing: qe().optional(),
  quantityPricing: je().default(!1),
  extrasData: xe({
    banding: Qe,
    finish: Qe
  }).default({
    banding: {},
    finish: {}
  }),
  formulaURL: v().url().optional().or(v().default("")),
  formulaSpec: v().default(""),
  hardwareResult: R(v(), qe()).default({}),
  // HardwareResult type from formula.ts
  metadata: qe().optional()
  // Metadata from optimize/main
});
const Rt = /* @__PURE__ */ Ie({
  __name: "Vanilla",
  emits: ["ready"],
  setup(s, { expose: T, emit: B }) {
    const h = ue(() => import("./components-ChmrVdkS.js").then((a) => a.bC)), l = ue(() => import("./components-ChmrVdkS.js").then((a) => a.bD)), f = ue(() => import("./components-ChmrVdkS.js").then((a) => a.bE)), m = B, z = "4.0.20", j = b(!1), o = b([]), _ = b({
      banding: null,
      finish: null,
      planing: null,
      machining: null
    }), t = Fe(() => o.value.map((a) => {
      if (a instanceof Oe) return a;
      const { issues: p, ...S } = a, k = Array.isArray(p) ? p : [];
      return new Oe({ ...S, issues: k });
    })), P = b("USD"), c = b("en-US"), $ = b("manual"), U = b(""), F = Ne(null), K = b(null), E = b(), W = b(!1), D = b([]), _e = b(He());
    Ze("calculator", () => E.value);
    const V = (a) => {
      j.value && console.log("SmartCut -", ...a);
    }, L = (a) => {
      console.error(`SmartCut - ${a}`);
    }, ge = () => {
      const a = new CustomEvent("smartcut/validationError");
      window.dispatchEvent(a);
    }, Y = () => {
      const a = new CustomEvent("smartcut/calculating");
      window.dispatchEvent(a);
    }, N = (a) => {
      K.value = a;
    }, C = (a = 0, p = c.value) => {
      if (a === !0) return "";
      try {
        p = p.replace("_", "-");
        const S = Number(a);
        return !S && S !== 0 ? "" : isNaN(S) ? (console.error("formatPrice - invalid price:", a), "") : S.toLocaleString(p, {
          style: "currency",
          currency: P.value
        });
      } catch (S) {
        return console.error("Error formatting price:", S), "";
      }
    }, x = (a, p) => {
      if (!_.value?.[a]) return null;
      const k = p.filter((A) => A && A.trim() !== "").join("|"), I = w(_.value, [a, k]);
      return typeof I == "number" ? I : parseFloat(I);
    }, ee = (a) => {
      if (a.length === 0) return;
      const p = a.map((A) => {
        const J = A.toData();
        return J.autoAdd = !0, J;
      }), S = [...o.value, ...p], k = [], I = /* @__PURE__ */ new Set();
      for (const A of S) {
        const J = `${A.material}-${A.l}-${A.w}-${A.t}`;
        I.has(J) || (I.add(J), k.push(A));
      }
      o.value = k, V(["Stock added. Total stocks:", o.value.length]), E.value && Se(() => {
        E.value.initMaterialsThicknesses({ stock: o.value });
      });
    }, te = (a) => {
      const p = `${a.material}-${a.l}-${a.w}-${a.t}`;
      o.value = o.value.filter((S) => `${S.material}-${S.l}-${S.w}-${S.t}` !== p), V(["Stock removed. Total stocks:", o.value.length]), E.value && Se(() => {
        E.value.initMaterialsThicknesses({ stock: o.value });
      });
    }, G = (a) => {
      console.log("init data", a), vt(a), H(a, ["stockFilter", "enabled"]) && a.stockFilter?.enabled ? (W.value = !0, D.value = (a.stock || []).map((p) => ({ ...p })), _e.value = a.stockFilter.config || He(), o.value = [], V(["Stock filter enabled with", D.value.length, "available options"])) : o.value = a.stock, _.value.banding = w(a, ["banding", "pricing"]), _.value.finish = w(a, ["finish", "pricing"]), _.value.planing = w(a, ["planing", "pricing"]), _.value.machining = w(a, ["machining", "pricing"]), H(a, ["options", "currency"]) && (P.value = w(a, ["options", "currency"])), H(a, ["options", "locale"]) && (c.value = w(a, ["options", "locale"]).replace("_", "-")), (H(a, ["options", "formula", "url"]) || H(a, ["options", "formula", "spec"])) && ($.value = "formula", U.value = w(a, ["options", "formula", "url"]) ?? null, F.value = w(a, ["options", "formula", "spec"]) ?? null), Se(() => {
        if (E.value) {
          const p = { ...a, stock: o.value };
          E.value.init(p);
        }
      });
    }, ne = (a) => {
      const p = a;
      if (p.checkout = {
        formattedTotalStockCost: "",
        formattedBandingCost: {},
        formattedFinishCost: {}
      }, a?.metadata?.totalStockCost && (p.checkout.formattedTotalStockCost = a.metadata.totalStockCost.toLocaleString(
        c.value,
        {
          style: "currency",
          currency: P.value
        }
      )), a?.metadata?.bandingLengthByType)
        for (const [k, I] of Object.entries(a.metadata.bandingLengthByType)) {
          if (!H(_.value, ["banding", k])) {
            L(`Banding price ${k} not found`);
            continue;
          }
          p.checkout.formattedBandingCost[k] = (I / 1e3 * _.value.banding[k]).toLocaleString(c.value, { style: "currency", currency: P.value });
        }
      if (a?.metadata?.finishAreaByType)
        for (const [k, I] of Object.entries(a.metadata.finishAreaByType)) {
          if (!H(_.value, ["finish", k])) {
            L(`Finish price ${k} not found`);
            continue;
          }
          p.checkout.formattedFinishCost[k] = (I / 1e6 * _.value.finish[k]).toLocaleString(c.value, { style: "currency", currency: P.value });
        }
      const S = new CustomEvent("smartcut/result", {
        detail: JSON.parse(JSON.stringify(p))
      });
      window.dispatchEvent(S);
    };
    return zt(() => {
      console.log(`💥 Powered by https://smartcut.dev ${"V" + z}`);
      const a = new URLSearchParams(window.location.search);
      j.value = !!a.has("debug"), j.value && console.log("Smartcut - debug enabled");
    }), Ge(() => {
      window.smartcutCheckout = { init: G }, m("ready");
      const a = new CustomEvent("smartcut/ready");
      window.dispatchEvent(a);
    }), T({
      init: G,
      debug: j,
      stock: o,
      pricing: _,
      currency: P,
      locale: c,
      inputType: $,
      formulaURL: U,
      formulaSpec: F,
      hardWareResult: K,
      log: V,
      error: L,
      calculating: Y,
      result: ne,
      formatPrice: C,
      findExtrasPrice: x,
      setHardwareResult: N
    }), (a, p) => (M(), Ee(Je, null, [
      we(Q(f), { position: "top-left" }),
      W.value ? (M(), ce(Q(h), {
        key: 0,
        "stock-options": D.value,
        config: _e.value,
        "format-price": C,
        colors: { button: "#118ab2", buttonText: "#ffffff" },
        "number-format": "decimal",
        locale: c.value,
        onStockAdded: ee,
        onStockRemoved: te
      }, null, 8, ["stock-options", "config", "locale"])) : X("", !0),
      $.value === "formula" && (U.value || F.value) ? (M(), ce(Q(l), {
        key: 1,
        ref: "formulapricing",
        "format-price": C,
        url: U.value,
        spec: F.value,
        debug: j.value,
        onHardwareResult: N
      }, null, 8, ["url", "spec", "debug"])) : X("", !0),
      $.value === "manual" || $.value === "formula" && (U.value || F.value) ? (M(), ce(Ke, {
        key: 2,
        ref_key: "calculator",
        ref: E,
        readonly: $.value === "formula",
        debug: j.value,
        "input-stock": t.value,
        "input-type": $.value,
        "find-extras-price": x,
        "format-price": C,
        onLog: V,
        onError: L,
        onCalculating: Y,
        onValidationError: ge,
        onResult: ne
      }, null, 8, ["readonly", "debug", "input-stock", "input-type"])) : X("", !0)
    ], 64));
  }
}), re = 5, me = 10, ke = ",", ie = {
  fillColor: [7, 59, 76],
  fontStyle: "normal"
}, oe = {
  fontSize: 9
}, se = { left: 10 };
let le = [];
const Bt = (s, T, B, h = (l) => l.toString()) => {
  const l = new It({ orientation: "landscape" });
  let f = 10;
  l.setFontSize(20), l.text(s("pdf.order_summary"), 10, f), f += 15, l.setFontSize(14), l.text(`${s("general.your")} ${s("woodwork.part")}`, 10, f), f += re, le = [
    s("woodwork.length"),
    s("woodwork.width"),
    s("woodwork.thickness"),
    s("woodwork.material"),
    s("woodwork.quantity"),
    s("woodwork.name"),
    `${s("woodwork.banding")} (${kt.join(ke)})`,
    `${s("woodwork.finish")} (${Ye.join(ke)})`
  ];
  const m = T.parts.map((o) => {
    const _ = ["y1", "y2", "x1", "x2"].map((P) => o.banding?.[P] || "-").join(ke), t = Ye.map((P) => o.finish?.faces?.[P] || "-").join(ke);
    return [
      h(o.l),
      h(o.w),
      h(o.t) || "-",
      o?.material?.toUpperCase() || "-",
      h(o.q),
      o.name || "-",
      _,
      t
    ];
  });
  ae(l, {
    startY: f,
    head: [le],
    body: m,
    margin: se,
    headStyles: ie,
    styles: oe
  }), f = l.lastAutoTable.finalY + me, l.setFontSize(14), l.text(s("pdf.stock_requirements"), 10, f), f += re, le = [
    s("woodwork.length"),
    s("woodwork.width"),
    s("woodwork.thickness"),
    s("woodwork.material"),
    s("woodwork.quantity")
    // 'Cost'
  ];
  const z = T.stock.map((o) => [
    h(o.l),
    h(o.w),
    h(o.t) || "-",
    o?.material?.toUpperCase() || "-",
    h(o.q)
    // stock.cost
  ]);
  if (ae(l, {
    startY: f,
    head: [le],
    body: z,
    margin: se,
    headStyles: ie,
    styles: oe
  }), f = l.lastAutoTable.finalY + me, T.metadata.totalRollLength > 0) {
    l.setFontSize(14), l.text(s("pdf.roll_requirements"), 10, f), f += re, le = [
      s("woodwork.name"),
      s("woodwork.material"),
      s("woodwork.length")
    ];
    const o = T.stock.map((_) => [
      _?.name?.toUpperCase() || "-",
      _?.material?.toUpperCase() || "-",
      h(_.analysis.rollLength)
    ]);
    ae(l, {
      startY: f,
      head: [le],
      body: o,
      margin: se,
      headStyles: ie,
      styles: oe
    }), f = l.lastAutoTable.finalY + me;
  }
  if (B && Object.values(B)) {
    l.setFontSize(14), l.text(s("pdf.hardware"), 10, f), f += re;
    const o = Object.values(B).map((_) => [
      _.name.toUpperCase(),
      h(_.q)
      // item.totalCost.toFixed( 2 )
    ]);
    ae(l, {
      startY: f,
      head: [[s("pdf.item"), s("woodwork.quantity")]],
      body: o,
      margin: se,
      headStyles: ie,
      styles: oe
    }), f = l.lastAutoTable.finalY + me;
  }
  l.setFontSize(14), l.text(s("pdf.totals"), 10, f), f += re;
  const j = [
    [s("pdf.total_parts"), h(T.metadata.totalPartsProduced)],
    [s("pdf.part_area"), h(T.metadata.totalPartArea)],
    [s("pdf.total_stock_required"), h(T.metadata.totalUsedStock)],
    [s("pdf.total_banding_length"), h(T.metadata.totalBandingLength)],
    [s("pdf.total_finish_area"), h(T.metadata.totalFinishArea)],
    [s("pdf.total_roll_length"), h(T.metadata.totalRollLength)]
  ];
  if (ae(l, {
    startY: f,
    body: j,
    margin: se,
    headStyles: ie,
    styles: oe
  }), f = l.lastAutoTable.finalY + me, window?.smartcutImages?.length) {
    l.addPage();
    let o = 10;
    l.setFontSize(14), l.text(s("pdf.images"), 10, o), o += re;
    const _ = window.smartcutImages.flatMap((t, P) => t.metadata.map((c) => [
      P + 1,
      c.newName
    ]));
    ae(l, {
      startY: o,
      body: _,
      head: [[s("pdf.part_index"), s("pdf.file_name")]],
      margin: se,
      headStyles: ie,
      styles: oe
    });
  }
  return l.output("datauristring");
}, Mt = {
  key: 0,
  class: "debug"
}, Ut = !1, Ht = /* @__PURE__ */ Ie({
  __name: "WordPress",
  setup(s) {
    const T = ue(() => import("./components-ChmrVdkS.js").then((e) => e.bD)), B = ue(() => import("./components-ChmrVdkS.js").then((e) => e.bB)), h = ue(() => import("./components-ChmrVdkS.js").then((e) => e.bE)), { inputShapes: l } = jt(), f = "production", m = {}, z = {}, j = b(null);
    let o, _, t;
    const P = {
      banding: null,
      finish: null
    };
    let c = null, $ = [], U = null, F = {};
    const K = b(!1), E = b("manual"), W = b(""), D = Ne([]), _e = Fe(() => D.value), V = b(null), L = b(!0), ge = b(null), Y = b(!1), N = b(null);
    Ze("calculator", () => N.value);
    const C = (e) => {
      K.value && console.log("SmartCut -", ...e);
    }, x = (e) => {
      console.error(`SmartCut - ${e}`);
    }, ee = (e = !0) => {
      Y.value = !0, ["checkout", "intro_text", "offcuts", "banding_key"].forEach((r) => pe(r, "block")), ut() && pe("pricing_table", "table"), e ? G(!0) : ne(), p();
    }, te = (e = !0, n = !0) => {
      Y.value = !1, ["checkout", "intro_text", "offcuts", "banding_key", "pricing_table"].forEach((i) => pe(i, "none")), n === !0 ? a() : n === !1 && p(), G ? G() : e === !1 && ne();
    }, G = (e = !1) => {
      pe("quantity", "inline-block"), m.quantity.readOnly = e;
    }, ne = () => {
      Y.value !== !1 && (k(1), pe("quantity", "none"), m.quantity.readOnly = !0);
    }, a = () => {
      if (!m.cart_button) {
        x("Cart button not found");
        return;
      }
      m.cart_button.disabled = !1;
    }, p = () => {
      if (Y.value !== !1) {
        if (!m.cart_button) {
          x("Cart button not found");
          return;
        }
        m.cart_button.disabled = !0;
      }
    }, S = () => {
      x("Validation error"), p();
    }, k = (e, n = 0) => {
      if (C(["setting cart quantity", e]), !m.quantity) {
        x("Quantity field not found when trying to set");
        return;
      }
      m.quantity.value = e.toFixed(n), console.assert(m.quantity.value === e.toFixed(n), "Quantity field value not set correctly");
    }, I = (e) => {
      C(["setting variation price", e]);
      const n = document.querySelector(".woocommerce-variation-price .smartcut-price-selector");
      n && (n.innerText = he(e)), j.value = e;
    }, A = (e = !1) => {
      const n = e ? V.value?.display_price ?? 0 : j.value ?? V.value?.display_price ?? 0;
      return console.log("getCurrentVariationPrice", j.value, V.value?.display_price), typeof n == "string" ? parseFloat(n) : n;
    }, J = () => {
      if (!window?.smartcutConfig) {
        x("SmartCut config not found");
        return;
      }
      const e = window.smartcutConfig;
      t = e.settings;
      const n = Le(w(window, ["smartcutConfig", "banding_data"])), r = Le(w(window, ["smartcutConfig", "finish_data"])), i = (q) => {
        switch (q) {
          case "length":
            return { cutType: "guillotine", cutPreference: "l" };
          case "width":
            return { cutType: "guillotine", cutPreference: "w" };
          case "flex":
            return { cutType: "guillotine", cutPreference: "l" };
          case "efficiency":
            return { cutType: "efficiency", cutPreference: "none" };
          case "beam":
            return { cutType: "beam", cutPreference: "l" };
          default:
            return { cutType: "guillotine", cutPreference: "l" };
        }
      }, { cutType: g, cutPreference: d } = i(t.cut_preference), y = {
        stockType: t.stock_type,
        bladeWidth: t.blade_width,
        cutType: g,
        cutPreference: d,
        stackHeight: t.stack_height || 100,
        guillotineOptions: {
          strategy: "efficiency",
          maxPhase: 0,
          headCuts: !1
        }
      }, u = {
        debug: t.debug,
        numberFormat: t.numberFormat || "decimal",
        locale: e.locale,
        decimalPlaces: 2,
        currency: t.currency || "USD",
        stockSelection: t.stock_selection,
        stockGrain: t.stock_grain,
        minSpacing: t.min_spacing,
        maxParts: t.max_parts ?? null,
        orientationModel: t.orientation_model,
        minDimension: t.min_dimension,
        partTrim: t.part_trim,
        enable: {
          banding: t?.enable_banding || !1,
          finish: t?.enable_finish || !1,
          planing: t?.enable_planing || !1,
          orientation: t?.enable_orientation || !1,
          diagram: !t.hide_diagram,
          machining: t.enable_machining,
          csvImport: t.enable_import,
          partName: t.enable_part_name,
          // imageUpload: settings.enable_image_upload,
          focus: !0,
          click: !0,
          progressNumber: t.pricing_strategy !== "part_area"
        },
        colors: {
          partA: t?.part_a_color ?? "#1d9bc4",
          partB: t?.part_b_color ?? "#065d7a",
          partSelected: t?.part_selected_color ?? "#5bc85b",
          stock: t?.stock_color ?? "#ffd166",
          button: t?.button_color ?? "#118ab2",
          buttonText: t?.button_text_color ?? "#ffffff",
          text: t?.text_color ?? "#ffffff"
        }
      };
      K.value = u.debug;
      const O = {
        numberFormat: t.number_format,
        decimalPlaces: 2,
        fractionRoundTo: 0,
        faces: {
          enabled: t.machining_sides
        },
        holes: {
          enabled: t.machining_holes,
          defaultDiameter: t.machining_holes_default_diameter,
          diameters: t.machining_holes_diameters.split(",").map((q) => q.trim()).filter(Boolean),
          minDiameter: t.machining_holes_min_diameter,
          maxDiameter: t.machining_holes_max_diameter,
          enableDepth: t.machining_holes_depth,
          depths: t.machining_holes_depths.split(",").map((q) => q.trim()).filter(Boolean),
          defaultDepth: t.machining_holes_default_depth,
          minDepth: t.machining_holes_min_depth,
          maxDepth: t.machining_holes_max_depth
        },
        hingeHoles: {
          enabled: t.machining_hinge_holes,
          minimumHoleDistance: t.machining_hinge_holes_minimum_hole_distance,
          defaultDistanceFromEdge: t.machining_hinge_holes_default_distance_from_edge,
          defaultOuterSpacing: t.machining_hinge_holes_default_outer_spacing,
          defaultHingeLength: t.machining_hinge_holes_default_hinge_length
        },
        corners: {
          enabled: t.machining_radius_corners || t.machining_bevel_corners,
          types: [
            t.machining_radius_corners ? "radius" : null,
            t.machining_bevel_corners ? "bevel" : null
          ].filter(Boolean),
          minValue: t.machining_corners_min_value,
          maxValue: t.machining_corners_max_value,
          enableBanding: t.machining_corners_enable_banding
        }
      };
      L.value = Be(), L.value ? G(!0) : ne(), c.type === "variable" ? te(!1, !1) : ee(L.value);
      const de = {
        type: c.type,
        stock: D.value.map((q) => q.toData()),
        variations: $ ?? null,
        saw: y,
        options: u,
        banding: n,
        finish: r,
        machining: O
      };
      de.type === "variable" && (C(["setting variable product form listeners"]), jQuery(function(q) {
        q(".variations_form").on("reset_data", () => te(!1, !1)).on("found_variation", (ht, yt) => dt(ht, yt));
      }));
      const ve = {
        product: c,
        selectedVariation: V,
        inputs: z,
        elements: m,
        inputType: E,
        formatPrice: he,
        getCurrentVariationPrice: A,
        setInputValue: Te,
        setCartQuantity: k,
        setVariationPrice: I,
        isExtraEnabled: $e,
        isQuantityPricing: Be,
        isMachiningEnabled: Me,
        isSurchargeEnabled: Ue,
        getTotalBandingPrice: st,
        getTotalFinishPrice: ot,
        getTotalMachiningPrice: lt,
        getInputValue: ct,
        enableAddToCart: a,
        log: C,
        error: x
      }, De = Ot({
        pricing_strategy: t.pricing_strategy,
        number_format: t.number_format,
        unit_system: t.unit_system,
        cut_length_price: t.cut_length_price,
        per_part_price: t.per_part_price,
        surcharge: t.surcharge,
        surcharge_type: t.surcharge_type,
        enable_offcut_pricing: t.enable_offcut_pricing,
        offcut_min_length: t.offcut_min_length,
        offcut_min_width: t.offcut_min_width
      }, ve);
      o = De.calculatePrice, _ = De.resetPricing, Se(() => {
        N.value && N.value.init(de);
      });
    }, et = (e) => {
      const n = e?.multiple_sizes === !0;
      c = {
        type: e?.product_type,
        multiple_sizes: n,
        size: e?.size ? e.size.split(" | ") : [],
        l: !n && e?.l ? parseFloat(e.l) : null,
        w: !n && e?.w ? parseFloat(e.w) : null,
        t: e?.t ?? null,
        price: e?.price ? parseFloat(e.price) : null,
        stock_name: e?.stock_sku || e.stock_name
      }, c.multiple_sizes || (c.l || x("product 'length' attribute not available"), c.w || x("product 'width' attribute not available"));
    }, tt = (e) => {
      E.value = w(window, ["smartcutConfig", "settings", "enable_formula"]) === !0 ? "formula" : "manual", W.value = w(window, ["smartcutConfig", "settings", "formula_url"]), C([`Input type: ${E.value}`]), F = {
        thousands_separator: e?.thousands_separator,
        decimal_separator: e?.decimal_separator,
        number_of_decimals: e?.number_of_decimals,
        currency_symbol: e?.currency_symbol,
        currency_position: e?.currency_position
      };
    }, nt = () => {
      const e = {
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
      for (const [n, r] of Object.entries(e))
        m[n] = document.querySelector(r);
      if (!m.checkout)
        return x("checkout iframe not found");
      if (!m.quantity)
        return x("quantity field not found");
      if (!m.cart_button)
        return x("cart button not found");
      m.quantity.readOnly = !0, p();
    }, at = () => ({
      w1: t.stock_trim_x1 ?? 0,
      w2: t.stock_trim_x2 ?? 0,
      l1: t.stock_type === "linear" ? 0 : t.stock_trim_y1 ?? 0,
      l2: t.stock_type === "linear" ? 0 : t.stock_trim_y2 ?? 0
    }), fe = (e = null, n = null, r = null, i = null, g = null) => {
      let d;
      if (g && typeof g == "object") {
        d = [];
        for (const [u, O] of Object.entries(g))
          u !== "attribute_size" && u !== "attribute_thickness" && d.push(`${u.replace("attribute_", "")}: ${O}`);
        d = d.join(" - ");
      }
      const y = {
        name: c.stock_name,
        l: e,
        w: n,
        t: r,
        grain: t.stock_grain,
        cost: parseFloat(i?.toString() || "0"),
        trim: at(),
        allowExactFitShapes: !0,
        notes: d
      };
      return new Oe(y, t.numberFormat || "decimal");
    }, rt = () => {
      if (c?.stock_name || x("product name not specified"), D.value = [], c.multiple_sizes)
        for (const e of c.size) {
          if (!be(e)) continue;
          const [n, r] = e.split("x"), i = fe(
            parseFloat(n),
            parseFloat(r),
            c?.t,
            c.price
          );
          D.value.push(i);
        }
      else
        D.value.push(fe(
          c.l,
          c.w,
          c?.t,
          c?.price
        ));
    }, Ae = (e, n) => {
      const r = e.split(".");
      return r[0] = r[0].replace(/\B(?=(\d{3})+(?!\d))/g, n), r.join(".");
    }, he = (e = 0, n = "") => {
      if (!e)
        return n ? Ve("0.00") : "0.00";
      typeof e == "string" && (e = parseFloat(e));
      const r = e.toFixed(F.number_of_decimals).replace(".", F.decimal_separator), i = Ae(r, F.thousands_separator);
      return n ? Ve(i) : i;
    }, it = (e) => {
      if (e == null) return "";
      typeof e == "string" && (e = parseFloat(e));
      const r = e % 1 !== 0 ? F.number_of_decimals : 0, i = e.toFixed(r).replace(".", F.decimal_separator);
      return Ae(i, F.thousands_separator);
    }, Ve = (e) => {
      switch (F.currency_position) {
        case "left":
          return `${F.currency_symbol}${e}`;
        case "right":
          return `${e}${F.currency_symbol}`;
        default:
          return `${F.currency_symbol}${e}`;
      }
    }, ye = (e) => {
      const n = (r) => St(xt(r), 100).replace("|", "_");
      return Array.isArray(e) ? e.map(n).join(",") : n(e);
    }, Le = (e) => {
      if (!e) return null;
      const n = {
        labels: [],
        pricing: {}
      }, r = Object.values(e);
      for (const i of r)
        i?.variations ? (n.labels.push(...Object.keys(i.options)), Object.values(i.variations).forEach((g) => {
          const { options: d } = g, y = Object.values(d).map((u) => ye(u)).join("|");
          n.pricing[y] = parseInt(g.price);
        })) : i?.options && Object.keys(i.options).forEach((g) => {
          n.pricing[ye(g)] = parseInt(i.price);
        });
      return n.labels.length || n.labels.push("type"), n;
    }, Ce = (e, n) => {
      if (!n.length || !H(P, [e])) return null;
      const r = w(P, [e]);
      if (!Pt(r)) return null;
      const g = Object.values(r).map((d) => d?.variations ? Object.values(d.variations).map((y) => (y.type = "variable", y)) : (d.type = "simple", d)).flat().find((d) => {
        let y;
        return d.type === "simple" ? y = Object.keys(d.options) : y = Object.values(d.options), y ? y.every((u, O) => ye(u) === ye(n[O])) : !1;
      });
      return g?.price ? parseFloat(g.price) : null;
    }, ot = (e) => {
      let n = 0;
      if (typeof e == "object") {
        for (let [r, i] of Object.entries(e)) {
          typeof i == "string" && (i = parseFloat(i));
          const g = r.split("|"), d = Ce("finish", g);
          if (d === null) continue;
          const u = Number(i) / 1e6 * parseFloat(d.toString());
          n += u;
        }
        if ("min_finish_charge" in t) {
          const r = parseFloat(t?.min_finish_charge);
          if (r > 0 && n > 0 && n < r)
            return r;
        }
      }
      return n;
    }, st = (e) => {
      let n = 0;
      if (typeof e == "object") {
        for (let [r, i] of Object.entries(e)) {
          typeof i == "string" && (i = parseFloat(i));
          const g = r.split("|"), d = Ce("banding", g);
          if (d === null) continue;
          const y = i / (t.unit_system === "imperial" ? 12 : 1e3) * parseFloat(d.toString());
          n += y;
        }
        if ("min_banding_charge" in t) {
          const r = parseFloat(t?.min_banding_charge);
          if (r > 0 && n > 0 && n < r)
            return r;
        }
      }
      return n;
    }, lt = (e) => (U.holes ?? 0) * (e.metadata.numHoles ?? 0) + (U.corners ?? 0) * (e.metadata.numCorners ?? 0), pe = (e, n) => {
      e in m && m[e]?.style && (m[e].style.display = n);
    }, Te = (e, n) => {
      ze(e) ? z[e].value = n : x(`Attempting to set input but key '${e}' does not exist`);
    }, ct = (e) => {
      if (ze(e))
        return z[e].value;
    }, ze = (e) => e in z && z[e] instanceof HTMLInputElement, Re = () => {
      k(1), p(), _();
      for (const e in z)
        e !== "smartcut-hardware-price" && Te(e, null);
    }, Be = () => {
      if (window.smartcutConfig?.product_type === "variable")
        return !1;
      switch (t.pricing_strategy) {
        case "full_stock":
        case "part_area":
        case "full_stock_plus_cut_length":
        case "full_stock_plus_num_parts":
          return !0;
        case "roll_length":
        case "cut_length":
          return !1;
        default:
          return !1;
      }
    }, $e = (e) => {
      if (H(t, ["enable", e]) && w(t, ["enable", e]) === !1)
        return !1;
      const n = w(P, [e]);
      return !!(n && Object.values(n).length);
    }, Me = () => t.enable_machining === !0, Ue = () => !(t?.surcharge_type === "none" || !t?.surcharge || t.surcharge === "0.00"), ut = () => !!(t.pricing_strategy === "full_stock_plus_cut_length" || t.pricing_strategy === "full_stock_plus_num_parts" || t.pricing_strategy === "part_area" || t.pricing_strategy === "roll_length" || Ue() || $e("banding") || $e("finish") || Me()), ft = (e) => {
      let n = e?.attributes?.attribute_size;
      return n || (n = c?.size), n;
    }, be = (e) => /\d+x\d+/.test(e), pt = () => {
      window.smartcutConfig.input_fields.forEach((e) => {
        const n = e.replaceAll("_", "-");
        z[n] = document.getElementById(n);
      });
    }, dt = (e, n) => {
      Re(), V.value = n, C(["variation selected", n.attributes]), D.value = [];
      const r = w(n, ["attributes", "attribute_thickness"]) ?? null;
      if (c.selected_thickness = r, l.value.forEach((i) => {
        i.t = wt({ v: r });
      }), c.multiple_sizes) {
        const i = ft(n);
        if (C([`variation found with size: ${i} & thickness: ${r}`]), !i)
          return te(!1), x("The size of this multiple size product could not be found");
        if (Array.isArray(i) ? ee(L.value) : be(i) ? te(!0, !0) : ee(L.value), $?.length) {
          let g;
          const d = r;
          let y = n.display_price;
          Array.isArray(i) ? g = i.map((u) => ({
            size: u,
            l: u.split("x")[0],
            w: u.split("x")[1],
            t: d,
            price: y
          })) : g = $.filter((u) => be(u?.attributes?.size) ? r === (u?.attributes?.thickness ?? null) : !1).map((u) => {
            const O = u?.attributes?.size.split("x")[0] ?? null, de = u?.attributes?.size.split("x")[1] ?? null;
            let ve = 0;
            return n.display_price || (ve = $.find((q) => be(q.attributes?.size) && q.attributes?.thickness === u?.attributes?.thickness && q.attributes?.size === u?.attributes?.size && q.display_price > 0).display_price), C([
              `size attribute: '${u?.attributes?.size}'`,
              `price for thickness ${r}, dimensions: ${O}x${de} is ${y}`
            ]), {
              size: u?.attributes?.size,
              l: O,
              w: de,
              t: d,
              price: y || ve
            };
          }), Y.value === !0 && g.forEach((u) => {
            const O = fe(
              u.l,
              u.w,
              u.t,
              u.price,
              n?.attributes
            );
            D.value.push(O);
          });
        }
      } else {
        if (!$.some((i) => "thickness" in i.attributes))
          D.value.push(fe(
            c.l,
            c.w,
            r,
            n.display_price,
            n?.attributes
          ));
        else {
          const i = $.find((g) => g.attributes?.thickness === r);
          if (!i) return x(`variation not found for thickness ${r}`);
          D.value.push(fe(
            c.l,
            c.w,
            r,
            i.price,
            n?.attributes
          ));
        }
        ee(L.value);
      }
    }, mt = async (e) => {
      Re(), C(["result event received", e]);
      const n = await o(e);
      if (!n.success) {
        console.error(n.error);
        return;
      }
      await _t(e);
    }, _t = async (e) => {
      debugger;
      const r = Bt(Ft, e, ge.value, it).split(",")[1], i = new Tt();
      i.file("order-summary.pdf", r);
      const g = await i.generateAsync({ type: "blob" }), d = new File([g], "order-summary.zip", { type: "application/zip" });
      if (!ze("smartcut-order-summary")) return;
      const y = z["smartcut-order-summary"].closest("form");
      if (!y) return;
      const u = new DataTransfer();
      u.items.add(d);
      const O = y.querySelector('[name="smartcut_order_summary"]');
      O instanceof HTMLInputElement && (O.files = u.files);
    }, gt = (e, n) => {
      p(), e && (ge.value = Xe(e)), Te("smartcut-hardware-price", n ?? 0);
    };
    return Ge(() => {
      console.log("💥 Powered by https://smartcut.dev", window?.smartcutConfig?.version), C(["Launching WordPress checkout..."]), P.banding = w(window, ["smartcutConfig", "banding_data"]), P.finish = w(window, ["smartcutConfig", "finish_data"]), U = w(window, ["smartcutConfig", "machining_pricing"]), $ = w(window, ["smartcutConfig", "variations"]), nt(), pt(), et(window.smartcutConfig), tt(window.smartcutConfig), J(), rt(), [
        "div.quantity > input.plus",
        "div.quantity > input.minus",
        "div.quantity .qty-plus",
        "div.quantity .qty-minus"
      ].forEach((r) => {
        const i = document.querySelector(r);
        i && (i.style.display = "none");
      });
      const n = new CustomEvent("smartcut/ready");
      window.dispatchEvent(n), C(["Wordpress checkout ready"]);
    }), (e, n) => (M(), Ee(Je, null, [
      we(Q(h), { position: "top-left" }),
      Q(f) === "development" && Ut ? (M(), Ee("div", Mt, [
        n[0] || (n[0] = $t("div", null, "WP - developer information", -1)),
        we(Q(B), {
          data: [D.value],
          paths: ["stock"]
        }, null, 8, ["data"]),
        we(Q(B), {
          data: [D.value.map((r) => r.trim)],
          paths: ["stock trim"]
        }, null, 8, ["data"])
      ])) : X("", !0),
      E.value === "formula" && W.value ? (M(), ce(Q(T), {
        key: 1,
        ref: "formulapricing",
        "format-price": he,
        url: W.value,
        debug: K.value,
        onHardwareResult: gt,
        onPanelResult: p
      }, null, 8, ["url", "debug"])) : X("", !0),
      E.value === "manual" || E.value === "formula" && W.value ? (M(), ce(Ke, {
        key: 2,
        ref_key: "calculator",
        ref: N,
        readonly: E.value === "formula",
        debug: K.value,
        "input-stock": _e.value,
        "find-extras-price": Ce,
        "format-price": he,
        "input-type": E.value,
        onLog: C,
        onError: x,
        onInputsChanged: p,
        onValidationError: S,
        onResult: mt
      }, null, 8, ["readonly", "debug", "input-stock", "input-type"])) : X("", !0)
    ], 64));
  }
}), Yt = {
  key: 1,
  class: "error-message"
}, Qt = /* @__PURE__ */ Ie({
  __name: "Launch",
  props: {
    type: { default: "vanilla" }
  },
  setup(s, { expose: T }) {
    const B = b(!1), h = b(null), l = Xe({
      wordpress: Ht,
      vanilla: Rt
    }), f = s, m = Fe(() => {
      if (!f.type) return null;
      const z = f?.type?.toLowerCase();
      return l[z] || null;
    });
    return T({
      componentType: Fe(() => f.type),
      isComponentMounted: B,
      checkout: h
    }), (z, j) => m.value ? (M(), ce(Dt(m.value), {
      key: 0,
      ref_key: "checkoutRef",
      ref: h
    }, null, 512)) : f.type ? (M(), Ee("div", Yt, " Invalid component type: " + qt(f.type), 1)) : X("", !0);
  }
}), Xt = /* @__PURE__ */ Et(Qt, [["__scopeId", "data-v-1bae2c3d"]]);
export {
  Xt as default
};

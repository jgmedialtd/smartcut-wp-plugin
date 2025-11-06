import { F as bt, G as Ie, bp as Ye, bq as We, br as S, bs as vt, bt as H, bu as kt, bv as Qe, Q as wt, bw as St, bx as xt, by as Pt, t as Ft, bz as Et } from "./components-DT95ezWO.js";
import "./vendor-i18n-BuJwRgtG.js";
import { o as Pe, r as L, s as k, a as Fe, _ as Ne, u as Ct, c as je, b as Oe, ai as X, aj as Tt } from "./vendor-4AnxBRif.js";
import { d as Ae, e as b, h as Ee, K as Ge, Z as zt, g as Je, c as Ce, o as U, G as Se, p as ue, s as ee, q as K, M as fe, F as Ze, k as xe, _ as Xe, b as $t, Q as et, z as Dt, t as qt } from "./vendor-vue-V1I1Po2P.js";
import { f as jt, k as Ot } from "./composables-HxE52_XC.js";
import { E as It, a as re } from "./vendor-pdf-4rRPwXuv.js";
const At = Pe({
  name: k().trim(),
  price: k().trim().default("0"),
  options: L(k(), Fe(k()))
}), Vt = L(k(), At), Rt = Pe({
  name: k().trim(),
  options: L(
    k(),
    Ct([k(), Fe(k())])
  ).optional(),
  variations: Vt.optional(),
  price: k().trim().default("0"),
  type: Ne(["simple", "variable"]).optional()
}), Ke = L(k(), Rt);
Pe({
  env: k().default("production"),
  showDevInfo: Oe().default(!1),
  debug: Oe().default(!1),
  el: L(k(), X()).default({}),
  inputType: Ne(["manual", "formula"]).default("manual"),
  settings: L(k(), X()).default({}),
  // Note: HTMLInputElement cannot be validated with Zod, using unknown
  inputs: L(k(), X()).default({}),
  formatting: L(k(), X()).default({}),
  product: L(k(), X()).default({}),
  stock: Fe(bt).default([]),
  variations: Fe(X()).default([]),
  selectedVariation: L(k(), X()).default({}),
  machiningPricing: je().optional(),
  quantityPricing: Oe().default(!1),
  extrasData: Pe({
    banding: Ke,
    finish: Ke
  }).default({
    banding: {},
    finish: {}
  }),
  formulaURL: k().url().optional().or(k().default("")),
  formulaSpec: k().default(""),
  hardwareResult: L(k(), je()).default({}),
  // HardwareResult type from formula.ts
  metadata: je().optional()
  // Metadata from optimize/main
});
const Lt = /* @__PURE__ */ Ae({
  __name: "Vanilla",
  emits: ["ready"],
  setup(o, { expose: F, emit: B }) {
    const h = fe(() => import("./components-DT95ezWO.js").then((a) => a.bC)), s = fe(() => import("./components-DT95ezWO.js").then((a) => a.bD)), u = fe(() => import("./components-DT95ezWO.js").then((a) => a.bE)), m = B, E = "production", Y = "4.0.27", f = b(!1), d = b([]), t = b({
      banding: null,
      finish: null,
      planing: null,
      machining: null
    }), D = Ee(() => d.value.map((a) => {
      if (a instanceof Ie) return a;
      const { issues: _, ...v } = a, x = Array.isArray(_) ? _ : [];
      return new Ie({ ...v, issues: x });
    })), c = b("USD"), C = b("en-US"), V = b("manual"), P = b(""), M = Ge(null), R = b(null), q = b(), z = b(!1), pe = b([]), Q = b(Ye());
    Xe("calculator", () => q.value);
    const O = (a) => {
      f.value && console.log("SmartCut -", ...a);
    }, W = (a) => {
      console.error(`SmartCut - ${a}`);
    }, N = () => {
      const a = new CustomEvent("smartcut/validationError");
      window.dispatchEvent(a);
    }, G = () => {
      const a = new CustomEvent("smartcut/calculating");
      window.dispatchEvent(a);
    }, T = (a) => {
      R.value = a;
    }, w = (a = 0, _ = C.value) => {
      if (a === !0) return "";
      try {
        _ = _.replace("_", "-");
        const v = Number(a);
        return !v && v !== 0 ? "" : isNaN(v) ? (console.error("formatPrice - invalid price:", a), "") : v.toLocaleString(_, {
          style: "currency",
          currency: c.value
        });
      } catch (v) {
        return console.error("Error formatting price:", v), "";
      }
    }, J = (a, _) => {
      if (!t.value?.[a]) return null;
      const x = _.filter((A) => A && A.trim() !== "").join("|"), I = S(t.value, [a, x]);
      return typeof I == "number" ? I : parseFloat(I);
    }, te = (a) => {
      if (a.length === 0) return;
      const _ = a.map((A) => {
        const Z = A.toData();
        return Z.autoAdd = !0, Z;
      }), v = [...d.value, ..._], x = [], I = /* @__PURE__ */ new Set();
      for (const A of v) {
        const Z = `${A.material}-${A.l}-${A.w}-${A.t}`;
        I.has(Z) || (I.add(Z), x.push(A));
      }
      d.value = x, O(["Stock added. Total stocks:", d.value.length]), q.value && xe(() => {
        q.value.initMaterialsThicknesses({ stock: d.value });
      });
    }, ne = (a) => {
      const _ = `${a.material}-${a.l}-${a.w}-${a.t}`;
      d.value = d.value.filter((v) => `${v.material}-${v.l}-${v.w}-${v.t}` !== _), O(["Stock removed. Total stocks:", d.value.length]), q.value && xe(() => {
        q.value.initMaterialsThicknesses({ stock: d.value });
      });
    }, ae = (a) => {
      console.log("init data", a), vt(a), H(a, ["stockFilter", "enabled"]) && a.stockFilter?.enabled ? (z.value = !0, pe.value = (a.stock || []).map((_) => ({ ..._ })), Q.value = a.stockFilter.config || Ye(), d.value = [], O(["Stock filter enabled with", pe.value.length, "available options"])) : d.value = a.stock, t.value.banding = S(a, ["banding", "pricing"]), t.value.finish = S(a, ["finish", "pricing"]), t.value.planing = S(a, ["planing", "pricing"]), t.value.machining = S(a, ["machining", "pricing"]), H(a, ["options", "currency"]) && (c.value = S(a, ["options", "currency"])), H(a, ["options", "locale"]) && (C.value = S(a, ["options", "locale"]).replace("_", "-")), (H(a, ["options", "formula", "url"]) || H(a, ["options", "formula", "spec"])) && (V.value = "formula", P.value = S(a, ["options", "formula", "url"]) ?? null, M.value = S(a, ["options", "formula", "spec"]) ?? null), xe(() => {
        if (q.value) {
          const _ = { ...a, stock: d.value };
          q.value.init(_);
        }
      });
    }, de = (a) => {
      const _ = a;
      if (_.checkout = {
        formattedTotalStockCost: "",
        formattedBandingCost: {},
        formattedFinishCost: {}
      }, a?.metadata?.totalStockCost && (_.checkout.formattedTotalStockCost = a.metadata.totalStockCost.toLocaleString(
        C.value,
        {
          style: "currency",
          currency: c.value
        }
      )), a?.metadata?.bandingLengthByType)
        for (const [x, I] of Object.entries(a.metadata.bandingLengthByType)) {
          if (!H(t.value, ["banding", x])) {
            W(`Banding price ${x} not found`);
            continue;
          }
          _.checkout.formattedBandingCost[x] = (I / 1e3 * t.value.banding[x]).toLocaleString(C.value, { style: "currency", currency: c.value });
        }
      if (a?.metadata?.finishAreaByType)
        for (const [x, I] of Object.entries(a.metadata.finishAreaByType)) {
          if (!H(t.value, ["finish", x])) {
            W(`Finish price ${x} not found`);
            continue;
          }
          _.checkout.formattedFinishCost[x] = (I / 1e6 * t.value.finish[x]).toLocaleString(C.value, { style: "currency", currency: c.value });
        }
      const v = new CustomEvent("smartcut/result", {
        detail: JSON.parse(JSON.stringify(_))
      });
      window.dispatchEvent(v);
    };
    return zt(() => {
      console.log(`💥 Powered by https://smartcut.dev ${"V" + Y} [${E}]`);
      const a = new URLSearchParams(window.location.search);
      f.value = !!a.has("debug"), f.value && console.log("Smartcut - debug enabled");
    }), Je(() => {
      window.smartcutCheckout = { init: ae }, m("ready");
      const a = new CustomEvent("smartcut/ready");
      window.dispatchEvent(a);
    }), F({
      init: ae,
      debug: f,
      stock: d,
      pricing: t,
      currency: c,
      locale: C,
      inputType: V,
      formulaURL: P,
      formulaSpec: M,
      hardWareResult: R,
      log: O,
      error: W,
      calculating: G,
      result: de,
      formatPrice: w,
      findExtrasPrice: J,
      setHardwareResult: T
    }), (a, _) => (U(), Ce(Ze, null, [
      Se(K(u), { position: "top-left" }),
      z.value ? (U(), ue(K(h), {
        key: 0,
        "stock-options": pe.value,
        config: Q.value,
        "format-price": w,
        colors: { button: "#118ab2", buttonText: "#ffffff" },
        "number-format": "decimal",
        locale: C.value,
        onStockAdded: te,
        onStockRemoved: ne
      }, null, 8, ["stock-options", "config", "locale"])) : ee("", !0),
      V.value === "formula" && (P.value || M.value) ? (U(), ue(K(s), {
        key: 1,
        ref: "formulapricing",
        "format-price": w,
        url: P.value,
        spec: M.value,
        debug: f.value,
        onHardwareResult: T
      }, null, 8, ["url", "spec", "debug"])) : ee("", !0),
      V.value === "manual" || V.value === "formula" && (P.value || M.value) ? (U(), ue(We, {
        key: 2,
        ref_key: "calculator",
        ref: q,
        readonly: V.value === "formula",
        debug: f.value,
        "input-stock": D.value,
        "input-type": V.value,
        "find-extras-price": J,
        "format-price": w,
        onLog: O,
        onError: W,
        onCalculating: G,
        onValidationError: N,
        onResult: de
      }, null, 8, ["readonly", "debug", "input-stock", "input-type"])) : ee("", !0)
    ], 64));
  }
}), ie = 5, he = 10, we = ",", oe = {
  fillColor: [7, 59, 76],
  fontStyle: "normal"
}, se = {
  fontSize: 9
}, le = { left: 10 };
let ce = [];
const Bt = (o, F, B, h = (s) => s.toString()) => {
  const s = new It({ orientation: "landscape" });
  let u = 10;
  s.setFontSize(20), s.text(o("pdf.order_summary"), 10, u), u += 15, s.setFontSize(14), s.text(`${o("general.your")} ${o("woodwork.part")}`, 10, u), u += ie, ce = [
    o("woodwork.length"),
    o("woodwork.width"),
    o("woodwork.thickness"),
    o("woodwork.material"),
    o("woodwork.quantity"),
    o("woodwork.name"),
    `${o("woodwork.banding")} (${kt.join(we)})`,
    `${o("woodwork.finish")} (${Qe.join(we)})`
  ];
  const m = F.parts.map((f) => {
    const d = ["y1", "y2", "x1", "x2"].map((D) => f.banding?.[D] || "-").join(we), t = Qe.map((D) => f.finish?.faces?.[D] || "-").join(we);
    return [
      h(f.l),
      h(f.w),
      h(f.t) || "-",
      f?.material?.toUpperCase() || "-",
      h(f.q),
      f.name || "-",
      d,
      t
    ];
  });
  re(s, {
    startY: u,
    head: [ce],
    body: m,
    margin: le,
    headStyles: oe,
    styles: se
  }), u = s.lastAutoTable.finalY + he, s.setFontSize(14), s.text(o("pdf.stock_requirements"), 10, u), u += ie, ce = [
    o("woodwork.length"),
    o("woodwork.width"),
    o("woodwork.thickness"),
    o("woodwork.material"),
    o("woodwork.quantity")
    // 'Cost'
  ];
  const E = F.stock.map((f) => [
    h(f.l),
    h(f.w),
    h(f.t) || "-",
    f?.material?.toUpperCase() || "-",
    h(f.q)
    // stock.cost
  ]);
  if (re(s, {
    startY: u,
    head: [ce],
    body: E,
    margin: le,
    headStyles: oe,
    styles: se
  }), u = s.lastAutoTable.finalY + he, F.metadata.totalRollLength > 0) {
    s.setFontSize(14), s.text(o("pdf.roll_requirements"), 10, u), u += ie, ce = [
      o("woodwork.name"),
      o("woodwork.material"),
      o("woodwork.length")
    ];
    const f = F.stock.map((d) => [
      d?.name?.toUpperCase() || "-",
      d?.material?.toUpperCase() || "-",
      h(d.analysis.rollLength)
    ]);
    re(s, {
      startY: u,
      head: [ce],
      body: f,
      margin: le,
      headStyles: oe,
      styles: se
    }), u = s.lastAutoTable.finalY + he;
  }
  if (B && Object.values(B)) {
    s.setFontSize(14), s.text(o("pdf.hardware"), 10, u), u += ie;
    const f = Object.values(B).map((d) => [
      d.name.toUpperCase(),
      h(d.q)
      // item.totalCost.toFixed( 2 )
    ]);
    re(s, {
      startY: u,
      head: [[o("pdf.item"), o("woodwork.quantity")]],
      body: f,
      margin: le,
      headStyles: oe,
      styles: se
    }), u = s.lastAutoTable.finalY + he;
  }
  s.setFontSize(14), s.text(o("pdf.totals"), 10, u), u += ie;
  const Y = [
    [o("pdf.total_parts"), h(F.metadata.totalPartsProduced)],
    [o("pdf.part_area"), h(F.metadata.totalPartArea)],
    [o("pdf.total_stock_required"), h(F.metadata.totalUsedStock)],
    [o("pdf.total_banding_length"), h(F.metadata.totalBandingLength)],
    [o("pdf.total_finish_area"), h(F.metadata.totalFinishArea)],
    [o("pdf.total_roll_length"), h(F.metadata.totalRollLength)]
  ];
  if (re(s, {
    startY: u,
    body: Y,
    margin: le,
    headStyles: oe,
    styles: se
  }), u = s.lastAutoTable.finalY + he, window?.smartcutImages?.length) {
    s.addPage();
    let f = 10;
    s.setFontSize(14), s.text(o("pdf.images"), 10, f), f += ie;
    const d = window.smartcutImages.flatMap((t, D) => t.metadata.map((c) => [
      D + 1,
      c.newName
    ]));
    re(s, {
      startY: f,
      body: d,
      head: [[o("pdf.part_index"), o("pdf.file_name")]],
      margin: le,
      headStyles: oe,
      styles: se
    });
  }
  return s.output("datauristring");
}, Mt = {
  key: 0,
  class: "debug"
}, Ut = !1, Ht = /* @__PURE__ */ Ae({
  __name: "WordPress",
  setup(o) {
    const F = fe(() => import("./components-DT95ezWO.js").then((e) => e.bD)), B = fe(() => import("./components-DT95ezWO.js").then((e) => e.bB)), h = fe(() => import("./components-DT95ezWO.js").then((e) => e.bE)), { inputShapes: s } = jt(), u = "production", m = {}, E = {}, Y = b(null);
    let f, d, t;
    const D = {
      banding: null,
      finish: null
    };
    let c = null, C = [], V = null, P = {};
    const M = b(!1), R = b("manual"), q = b(""), z = Ge([]), pe = Ee(() => z.value), Q = b(null), O = b(!0), W = b(null), N = b(!1), G = b(null);
    Xe("calculator", () => G.value);
    const T = (e) => {
      M.value && console.log("SmartCut -", ...e);
    }, w = (e) => {
      console.error(`SmartCut - ${e}`);
    }, J = (e = !0) => {
      N.value = !0, ["checkout", "intro_text", "offcuts", "banding_key"].forEach((r) => _e(r, "block")), ut() && _e("pricing_table", "table"), e ? ne(!0) : ae(), a();
    }, te = (e = !0, n = !0) => {
      N.value = !1, ["checkout", "intro_text", "offcuts", "banding_key", "pricing_table"].forEach((i) => _e(i, "none")), n === !0 ? de() : n === !1 && a(), ne ? ne() : e === !1 && ae();
    }, ne = (e = !1) => {
      _e("quantity", "inline-block"), m.quantity.readOnly = e;
    }, ae = () => {
      N.value !== !1 && (v(1), _e("quantity", "none"), m.quantity.readOnly = !0);
    }, de = () => {
      if (!m.cart_button) {
        w("Cart button not found");
        return;
      }
      m.cart_button.disabled = !1;
    }, a = () => {
      if (N.value !== !1) {
        if (!m.cart_button) {
          w("Cart button not found");
          return;
        }
        m.cart_button.disabled = !0;
      }
    }, _ = () => {
      w("Validation error"), a();
    }, v = (e, n = 0) => {
      if (T(["setting cart quantity", e]), !m.quantity) {
        w("Quantity field not found when trying to set");
        return;
      }
      m.quantity.value = e.toFixed(n), console.assert(m.quantity.value === e.toFixed(n), "Quantity field value not set correctly");
    }, x = (e) => {
      T(["setting variation price", e]);
      const n = document.querySelector(".woocommerce-variation-price .smartcut-price-selector");
      n && (n.innerText = ye(e)), Y.value = e;
    }, I = (e = !1) => {
      const n = e ? Q.value?.display_price ?? 0 : Y.value ?? Q.value?.display_price ?? 0;
      return console.log("getCurrentVariationPrice", Y.value, Q.value?.display_price), typeof n == "string" ? parseFloat(n) : n;
    }, A = () => {
      if (!window?.smartcutConfig) {
        w("SmartCut config not found");
        return;
      }
      const e = window.smartcutConfig;
      t = e.settings;
      const n = Le(S(window, ["smartcutConfig", "banding_data"])), r = Le(S(window, ["smartcutConfig", "finish_data"])), i = ($) => {
        switch ($) {
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
      }, { cutType: g, cutPreference: p } = i(t.cut_preference), y = {
        stockType: t.stock_type,
        bladeWidth: t.blade_width,
        cutType: g,
        cutPreference: p,
        stackHeight: t.stack_height || 100,
        guillotineOptions: {
          strategy: "efficiency",
          maxPhase: 0,
          headCuts: !1
        }
      }, l = {
        debug: t.debug,
        numberFormat: t.numberFormat || "decimal",
        locale: e.locale,
        decimalPlaces: 2,
        fractionRoundTo: 0,
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
      M.value = l.debug;
      const j = {
        numberFormat: t.number_format,
        decimalPlaces: 2,
        fractionRoundTo: 0,
        faces: {
          enabled: t.machining_sides
        },
        holes: {
          enabled: t.machining_holes,
          defaultDiameter: t.machining_holes_default_diameter,
          diameters: t.machining_holes_diameters.split(",").map(($) => $.trim()).filter(Boolean),
          minDiameter: t.machining_holes_min_diameter,
          maxDiameter: t.machining_holes_max_diameter,
          enableDepth: t.machining_holes_depth,
          depths: t.machining_holes_depths.split(",").map(($) => $.trim()).filter(Boolean),
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
      O.value = Me(), O.value ? ne(!0) : ae(), c.type === "variable" ? te(!1, !1) : J(O.value);
      const ge = {
        type: c.type,
        stock: z.value.map(($) => $.toData()),
        variations: C ?? null,
        saw: y,
        options: l,
        banding: n,
        finish: r,
        machining: j
      };
      ge.type === "variable" && (T(["setting variable product form listeners"]), jQuery(function($) {
        $(".variations_form").on("reset_data", () => te(!1, !1)).on("found_variation", (ht, yt) => dt(ht, yt));
      }));
      const ke = {
        product: c,
        selectedVariation: Q,
        inputs: E,
        elements: m,
        inputType: R,
        formatPrice: ye,
        getCurrentVariationPrice: I,
        setInputValue: ze,
        setCartQuantity: v,
        setVariationPrice: x,
        isExtraEnabled: De,
        isQuantityPricing: Me,
        isMachiningEnabled: Ue,
        isSurchargeEnabled: He,
        getTotalBandingPrice: st,
        getTotalFinishPrice: ot,
        getTotalMachiningPrice: lt,
        getInputValue: ct,
        enableAddToCart: de,
        log: T,
        error: w
      }, qe = Ot({
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
      }, ke);
      f = qe.calculatePrice, d = qe.resetPricing, xe(() => {
        G.value && G.value.init(ge);
      });
    }, Z = (e) => {
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
      }, c.multiple_sizes || (c.l || w("product 'length' attribute not available"), c.w || w("product 'width' attribute not available"));
    }, tt = (e) => {
      R.value = S(window, ["smartcutConfig", "settings", "enable_formula"]) === !0 ? "formula" : "manual", q.value = S(window, ["smartcutConfig", "settings", "formula_url"]), T([`Input type: ${R.value}`]), P = {
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
        return w("checkout iframe not found");
      if (!m.quantity)
        return w("quantity field not found");
      if (!m.cart_button)
        return w("cart button not found");
      m.quantity.readOnly = !0, a();
    }, at = () => ({
      w1: t.stock_trim_x1 ?? 0,
      w2: t.stock_trim_x2 ?? 0,
      l1: t.stock_type === "linear" ? 0 : t.stock_trim_y1 ?? 0,
      l2: t.stock_type === "linear" ? 0 : t.stock_trim_y2 ?? 0
    }), me = (e = null, n = null, r = null, i = null, g = null) => {
      let p;
      if (g && typeof g == "object") {
        p = [];
        for (const [l, j] of Object.entries(g))
          l !== "attribute_size" && l !== "attribute_thickness" && p.push(`${l.replace("attribute_", "")}: ${j}`);
        p = p.join(" - ");
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
        notes: p
      };
      return new Ie(y, t.numberFormat || "decimal");
    }, rt = () => {
      if (c?.stock_name || w("product name not specified"), z.value = [], c.multiple_sizes)
        for (const e of c.size) {
          if (!ve(e)) continue;
          const [n, r] = e.split("x"), i = me(
            parseFloat(n),
            parseFloat(r),
            c?.t,
            c.price
          );
          z.value.push(i);
        }
      else
        z.value.push(me(
          c.l,
          c.w,
          c?.t,
          c?.price
        ));
    }, Ve = (e, n) => {
      const r = e.split(".");
      return r[0] = r[0].replace(/\B(?=(\d{3})+(?!\d))/g, n), r.join(".");
    }, ye = (e = 0, n = "") => {
      if (!e)
        return n ? Re("0.00") : "0.00";
      typeof e == "string" && (e = parseFloat(e));
      const r = e.toFixed(P.number_of_decimals).replace(".", P.decimal_separator), i = Ve(r, P.thousands_separator);
      return n ? Re(i) : i;
    }, it = (e) => {
      if (e == null) return "";
      typeof e == "string" && (e = parseFloat(e));
      const r = e % 1 !== 0 ? P.number_of_decimals : 0, i = e.toFixed(r).replace(".", P.decimal_separator);
      return Ve(i, P.thousands_separator);
    }, Re = (e) => {
      switch (P.currency_position) {
        case "left":
          return `${P.currency_symbol}${e}`;
        case "right":
          return `${e}${P.currency_symbol}`;
        default:
          return `${P.currency_symbol}${e}`;
      }
    }, be = (e) => {
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
          const { options: p } = g, y = Object.values(p).map((l) => be(l)).join("|");
          n.pricing[y] = parseInt(g.price);
        })) : i?.options && Object.keys(i.options).forEach((g) => {
          n.pricing[be(g)] = parseInt(i.price);
        });
      return n.labels.length || n.labels.push("type"), n;
    }, Te = (e, n) => {
      if (!n.length || !H(D, [e])) return null;
      const r = S(D, [e]);
      if (!Pt(r)) return null;
      const g = Object.values(r).map((p) => p?.variations ? Object.values(p.variations).map((y) => (y.type = "variable", y)) : (p.type = "simple", p)).flat().find((p) => {
        let y;
        return p.type === "simple" ? y = Object.keys(p.options) : y = Object.values(p.options), y ? y.every((l, j) => be(l) === be(n[j])) : !1;
      });
      return g?.price ? parseFloat(g.price) : null;
    }, ot = (e) => {
      let n = 0;
      if (typeof e == "object") {
        for (let [r, i] of Object.entries(e)) {
          typeof i == "string" && (i = parseFloat(i));
          const g = r.split("|"), p = Te("finish", g);
          if (p === null) continue;
          const l = Number(i) / 1e6 * parseFloat(p.toString());
          n += l;
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
          const g = r.split("|"), p = Te("banding", g);
          if (p === null) continue;
          const y = i / (t.unit_system === "imperial" ? 12 : 1e3) * parseFloat(p.toString());
          n += y;
        }
        if ("min_banding_charge" in t) {
          const r = parseFloat(t?.min_banding_charge);
          if (r > 0 && n > 0 && n < r)
            return r;
        }
      }
      return n;
    }, lt = (e) => (V.holes ?? 0) * (e.metadata.numHoles ?? 0) + (V.corners ?? 0) * (e.metadata.numCorners ?? 0), _e = (e, n) => {
      e in m && m[e]?.style && (m[e].style.display = n);
    }, ze = (e, n) => {
      $e(e) ? E[e].value = n : w(`Attempting to set input but key '${e}' does not exist`);
    }, ct = (e) => {
      if ($e(e))
        return E[e].value;
    }, $e = (e) => e in E && E[e] instanceof HTMLInputElement, Be = () => {
      v(1), a(), d();
      for (const e in E)
        e !== "smartcut-hardware-price" && ze(e, null);
    }, Me = () => {
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
    }, De = (e) => {
      if (H(t, ["enable", e]) && S(t, ["enable", e]) === !1)
        return !1;
      const n = S(D, [e]);
      return !!(n && Object.values(n).length);
    }, Ue = () => t.enable_machining === !0, He = () => !(t?.surcharge_type === "none" || !t?.surcharge || t.surcharge === "0.00"), ut = () => !!(t.pricing_strategy === "full_stock_plus_cut_length" || t.pricing_strategy === "full_stock_plus_num_parts" || t.pricing_strategy === "part_area" || t.pricing_strategy === "roll_length" || He() || De("banding") || De("finish") || Ue()), ft = (e) => {
      let n = e?.attributes?.attribute_size;
      return n || (n = c?.size), n;
    }, ve = (e) => /\d+x\d+/.test(e), pt = () => {
      window.smartcutConfig.input_fields.forEach((e) => {
        const n = e.replaceAll("_", "-");
        E[n] = document.getElementById(n);
      });
    }, dt = (e, n) => {
      Be(), Q.value = n, T(["variation selected", n.attributes]), z.value = [];
      const r = S(n, ["attributes", "attribute_thickness"]) ?? null;
      if (c.selected_thickness = r, s.value.forEach((i) => {
        i.t = wt({ v: r });
      }), c.multiple_sizes) {
        const i = ft(n);
        if (T([`variation found with size: ${i} & thickness: ${r}`]), !i)
          return te(!1), w("The size of this multiple size product could not be found");
        if (Array.isArray(i) ? J(O.value) : ve(i) ? te(!0, !0) : J(O.value), C?.length) {
          let g;
          const p = r;
          let y = n.display_price;
          Array.isArray(i) ? g = i.map((l) => ({
            size: l,
            l: l.split("x")[0],
            w: l.split("x")[1],
            t: p,
            price: y
          })) : g = C.filter((l) => ve(l?.attributes?.size) ? r === (l?.attributes?.thickness ?? null) : !1).map((l) => {
            const j = l?.attributes?.size.split("x")[0] ?? null, ge = l?.attributes?.size.split("x")[1] ?? null;
            let ke = 0;
            return n.display_price || (ke = C.find(($) => ve($.attributes?.size) && $.attributes?.thickness === l?.attributes?.thickness && $.attributes?.size === l?.attributes?.size && $.display_price > 0).display_price), T([
              `size attribute: '${l?.attributes?.size}'`,
              `price for thickness ${r}, dimensions: ${j}x${ge} is ${y}`
            ]), {
              size: l?.attributes?.size,
              l: j,
              w: ge,
              t: p,
              price: y || ke
            };
          }), N.value === !0 && g.forEach((l) => {
            const j = me(
              l.l,
              l.w,
              l.t,
              l.price,
              n?.attributes
            );
            z.value.push(j);
          });
        }
      } else {
        if (!C.some((i) => "thickness" in i.attributes))
          z.value.push(me(
            c.l,
            c.w,
            r,
            n.display_price,
            n?.attributes
          ));
        else {
          const i = C.find((g) => g.attributes?.thickness === r);
          if (!i) return w(`variation not found for thickness ${r}`);
          z.value.push(me(
            c.l,
            c.w,
            r,
            i.price,
            n?.attributes
          ));
        }
        J(O.value);
      }
    }, mt = async (e) => {
      Be(), T(["result event received", e]);
      const n = await f(e);
      if (!n.success) {
        console.error(n.error);
        return;
      }
      await _t(e);
    }, _t = async (e) => {
      const r = Bt(Ft, e, W.value, it).split(",")[1], i = new Tt();
      i.file("order-summary.pdf", r);
      const g = await i.generateAsync({ type: "blob" }), p = new File([g], "order-summary.zip", { type: "application/zip" });
      if (!$e("smartcut-order-summary")) return;
      const y = E["smartcut-order-summary"].closest("form");
      if (!y) return;
      const l = new DataTransfer();
      l.items.add(p);
      const j = y.querySelector('[name="smartcut_order_summary"]');
      j instanceof HTMLInputElement && (j.files = l.files);
    }, gt = (e, n) => {
      a(), e && (W.value = et(e)), ze("smartcut-hardware-price", n ?? 0);
    };
    return Je(() => {
      console.log("💥 Powered by https://smartcut.dev", window?.smartcutConfig?.version), T(["Launching WordPress checkout..."]), D.banding = S(window, ["smartcutConfig", "banding_data"]), D.finish = S(window, ["smartcutConfig", "finish_data"]), V = S(window, ["smartcutConfig", "machining_pricing"]), C = S(window, ["smartcutConfig", "variations"]), nt(), pt(), Z(window.smartcutConfig), tt(window.smartcutConfig), A(), rt(), [
        "div.quantity > input.plus",
        "div.quantity > input.minus",
        "div.quantity .qty-plus",
        "div.quantity .qty-minus"
      ].forEach((r) => {
        const i = document.querySelector(r);
        i && (i.style.display = "none");
      });
      const n = new CustomEvent("smartcut/ready");
      window.dispatchEvent(n), T(["Wordpress checkout ready"]);
    }), (e, n) => (U(), Ce(Ze, null, [
      Se(K(h), { position: "top-left" }),
      K(u) === "development" && Ut ? (U(), Ce("div", Mt, [
        n[0] || (n[0] = $t("div", null, "WP - developer information", -1)),
        Se(K(B), {
          data: [z.value],
          paths: ["stock"]
        }, null, 8, ["data"]),
        Se(K(B), {
          data: [z.value.map((r) => r.trim)],
          paths: ["stock trim"]
        }, null, 8, ["data"])
      ])) : ee("", !0),
      R.value === "formula" && q.value ? (U(), ue(K(F), {
        key: 1,
        ref: "formulapricing",
        "format-price": ye,
        url: q.value,
        debug: M.value,
        onHardwareResult: gt,
        onPanelResult: a
      }, null, 8, ["url", "debug"])) : ee("", !0),
      R.value === "manual" || R.value === "formula" && q.value ? (U(), ue(We, {
        key: 2,
        ref_key: "calculator",
        ref: G,
        readonly: R.value === "formula",
        debug: M.value,
        "input-stock": pe.value,
        "find-extras-price": Te,
        "format-price": ye,
        "input-type": R.value,
        onLog: T,
        onError: w,
        onInputsChanged: a,
        onValidationError: _,
        onResult: mt
      }, null, 8, ["readonly", "debug", "input-stock", "input-type"])) : ee("", !0)
    ], 64));
  }
}), Yt = {
  key: 1,
  class: "error-message"
}, Qt = /* @__PURE__ */ Ae({
  __name: "Launch",
  props: {
    type: { default: "vanilla" }
  },
  setup(o, { expose: F }) {
    const B = b(!1), h = b(null), s = et({
      wordpress: Ht,
      vanilla: Lt
    }), u = o, m = Ee(() => {
      if (!u.type) return null;
      const E = u?.type?.toLowerCase();
      return s[E] || null;
    });
    return F({
      componentType: Ee(() => u.type),
      isComponentMounted: B,
      checkout: h
    }), (E, Y) => m.value ? (U(), ue(Dt(m.value), {
      key: 0,
      ref_key: "checkoutRef",
      ref: h
    }, null, 512)) : u.type ? (U(), Ce("div", Yt, " Invalid component type: " + qt(u.type), 1)) : ee("", !0);
  }
}), Xt = /* @__PURE__ */ Et(Qt, [["__scopeId", "data-v-1bae2c3d"]]);
export {
  Xt as default
};

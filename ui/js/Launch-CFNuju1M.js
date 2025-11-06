import { d as Ve, e as b, h as be, K as We, Z as bt, g as Je, c as Ee, o as Q, G as ye, p as ve, s as ce, w as vt, q as G, M as ue, v as kt, F as Ge, k as Fe, _ as Ze, b as wt, Q as Xe, z as St, t as xt } from "./vendor-vue-V1I1Po2P.js";
import { C as Pt, D as Ae, bp as Qe, bq as et, br as k, bs as Ft, bt as Y, bu as Et, bv as Ke, N as Ct, bw as Tt, bx as zt, by as $t, t as Dt, bz as qt } from "./components-r1yHOfcv.js";
import "./vendor-i18n-BuJwRgtG.js";
import { o as Ce, r as L, s as v, a as Te, _ as tt, u as jt, c as Oe, b as Ie, ai as ee, aj as Ot } from "./vendor-4AnxBRif.js";
import { f as It, k as At } from "./composables-DSQtSYAm.js";
import { E as Vt, a as ae } from "./vendor-pdf-4rRPwXuv.js";
const Rt = Ce({
  name: v().trim(),
  price: v().trim().default("0"),
  options: L(v(), Te(v()))
}), Lt = L(v(), Rt), Bt = Ce({
  name: v().trim(),
  options: L(
    v(),
    jt([v(), Te(v())])
  ).optional(),
  variations: Lt.optional(),
  price: v().trim().default("0"),
  type: tt(["simple", "variable"]).optional()
}), Ne = L(v(), Bt);
Ce({
  env: v().default("production"),
  showDevInfo: Ie().default(!1),
  debug: Ie().default(!1),
  el: L(v(), ee()).default({}),
  inputType: tt(["manual", "formula"]).default("manual"),
  settings: L(v(), ee()).default({}),
  // Note: HTMLInputElement cannot be validated with Zod, using unknown
  inputs: L(v(), ee()).default({}),
  formatting: L(v(), ee()).default({}),
  product: L(v(), ee()).default({}),
  stock: Te(Pt).default([]),
  variations: Te(ee()).default([]),
  selectedVariation: L(v(), ee()).default({}),
  machiningPricing: Oe().optional(),
  quantityPricing: Ie().default(!1),
  extrasData: Ce({
    banding: Ne,
    finish: Ne
  }).default({
    banding: {},
    finish: {}
  }),
  formulaURL: v().url().optional().or(v().default("")),
  formulaSpec: v().default(""),
  hardwareResult: L(v(), Oe()).default({}),
  // HardwareResult type from formula.ts
  metadata: Oe().optional()
  // Metadata from optimize/main
});
const Mt = /* @__PURE__ */ Ve({
  __name: "Vanilla",
  emits: ["ready"],
  setup(o, { expose: E, emit: B }) {
    const h = ue(() => import("./components-r1yHOfcv.js").then((a) => a.bC)), s = ue(() => import("./components-r1yHOfcv.js").then((a) => a.bD)), u = ue(() => import("./components-r1yHOfcv.js").then((a) => a.bE)), _ = B, C = "production", K = "4.0.34", f = b(!1), d = b([]), t = b({
      banding: null,
      finish: null,
      planing: null,
      machining: null
    }), D = be(() => d.value.map((a) => {
      if (a instanceof Ae) return a;
      const { issues: m, ...w } = a, x = Array.isArray(m) ? m : [];
      return new Ae({ ...w, issues: x });
    })), c = b("USD"), T = b("en-US"), A = b("manual"), P = b(""), M = We(null), V = b(null), q = b(), F = b(!1), fe = b([]), N = b(Qe()), W = be(() => A.value === "manual" || A.value === "formula" && (P.value || M.value) ? F.value ? d.value.length > 0 : !0 : !1);
    Ze("calculator", () => q.value);
    const J = (a) => {
      f.value && console.log("SmartCut -", ...a);
    }, U = (a) => {
      console.error(`SmartCut - ${a}`);
    }, te = () => {
      const a = new CustomEvent("smartcut/validationError");
      window.dispatchEvent(a);
    }, z = () => {
      const a = new CustomEvent("smartcut/calculating");
      window.dispatchEvent(a);
    }, S = (a) => {
      V.value = a;
    }, H = (a = 0, m = T.value) => {
      if (a === !0) return "";
      try {
        m = m.replace("_", "-");
        const w = Number(a);
        return !w && w !== 0 ? "" : isNaN(w) ? (console.error("formatPrice - invalid price:", a), "") : w.toLocaleString(m, {
          style: "currency",
          currency: c.value
        });
      } catch (w) {
        return console.error("Error formatting price:", w), "";
      }
    }, Z = (a, m) => {
      if (!t.value?.[a]) return null;
      const x = m.filter((I) => I && I.trim() !== "").join("|"), O = k(t.value, [a, x]);
      return typeof O == "number" ? O : parseFloat(O);
    }, ne = (a) => {
      if (a.length === 0) return;
      const m = a.map((I) => {
        const X = I.toData();
        return X.autoAdd = !0, X;
      }), w = [...d.value, ...m], x = [], O = /* @__PURE__ */ new Set();
      for (const I of w) {
        const X = `${I.material}-${I.l}-${I.w}-${I.t}`;
        O.has(X) || (O.add(X), x.push(I));
      }
      d.value = x, J(["Stock added. Total stocks:", d.value.length]), q.value && Fe(() => {
        q.value.initMaterialsThicknesses({ stock: d.value });
      });
    }, pe = (a) => {
      const m = `${a.material}-${a.l}-${a.w}-${a.t}`;
      d.value = d.value.filter((w) => `${w.material}-${w.l}-${w.w}-${w.t}` !== m), J(["Stock removed. Total stocks:", d.value.length]), q.value && Fe(() => {
        q.value.initMaterialsThicknesses({ stock: d.value });
      });
    }, de = (a) => {
      Ft(a), Y(a, ["stockFilter", "enabled"]) && a.stockFilter?.enabled ? (F.value = !0, fe.value = (a.stock || []).map((m) => ({ ...m })), N.value = a.stockFilter.config || Qe(), d.value = [], J(["Stock filter enabled with", fe.value.length, "available options"])) : (F.value = !1, d.value = a.stock), t.value.banding = k(a, ["banding", "pricing"]), t.value.finish = k(a, ["finish", "pricing"]), t.value.planing = k(a, ["planing", "pricing"]), t.value.machining = k(a, ["machining", "pricing"]), Y(a, ["options", "currency"]) && (c.value = k(a, ["options", "currency"])), Y(a, ["options", "locale"]) && (T.value = k(a, ["options", "locale"]).replace("_", "-")), (Y(a, ["options", "formula", "url"]) || Y(a, ["options", "formula", "spec"])) && (A.value = "formula", P.value = k(a, ["options", "formula", "url"]) ?? null, M.value = k(a, ["options", "formula", "spec"]) ?? null), Fe(() => {
        if (q.value) {
          const m = {
            ...a,
            stock: d.value,
            // Pass flag to indicate stock filter is enabled
            stockFilterEnabled: F.value
          };
          q.value.init(m);
        }
      });
    }, R = (a) => {
      const m = a;
      if (m.checkout = {
        formattedTotalStockCost: "",
        formattedBandingCost: {},
        formattedFinishCost: {}
      }, a?.metadata?.totalStockCost && (m.checkout.formattedTotalStockCost = a.metadata.totalStockCost.toLocaleString(
        T.value,
        {
          style: "currency",
          currency: c.value
        }
      )), a?.metadata?.bandingLengthByType)
        for (const [x, O] of Object.entries(a.metadata.bandingLengthByType)) {
          if (!Y(t.value, ["banding", x])) {
            U(`Banding price ${x} not found`);
            continue;
          }
          m.checkout.formattedBandingCost[x] = (O / 1e3 * t.value.banding[x]).toLocaleString(T.value, { style: "currency", currency: c.value });
        }
      if (a?.metadata?.finishAreaByType)
        for (const [x, O] of Object.entries(a.metadata.finishAreaByType)) {
          if (!Y(t.value, ["finish", x])) {
            U(`Finish price ${x} not found`);
            continue;
          }
          m.checkout.formattedFinishCost[x] = (O / 1e6 * t.value.finish[x]).toLocaleString(T.value, { style: "currency", currency: c.value });
        }
      const w = new CustomEvent("smartcut/result", {
        detail: JSON.parse(JSON.stringify(m))
      });
      window.dispatchEvent(w);
    };
    return bt(() => {
      console.log(`💥 Powered by https://smartcut.dev ${"V" + K} [${C}]`);
      const a = new URLSearchParams(window.location.search);
      f.value = !!a.has("debug"), f.value && console.log("Smartcut - debug enabled");
    }), Je(() => {
      window.smartcutCheckout = { init: de }, _("ready");
      const a = new CustomEvent("smartcut/ready");
      window.dispatchEvent(a);
    }), E({
      init: de,
      debug: f,
      stock: d,
      pricing: t,
      currency: c,
      locale: T,
      inputType: A,
      formulaURL: P,
      formulaSpec: M,
      hardWareResult: V,
      log: J,
      error: U,
      calculating: z,
      result: R,
      formatPrice: H,
      findExtrasPrice: Z,
      setHardwareResult: S
    }), (a, m) => (Q(), Ee(Ge, null, [
      ye(G(u), { position: "top-left" }),
      F.value ? (Q(), ve(G(h), {
        key: 0,
        "stock-options": fe.value,
        config: N.value,
        "format-price": H,
        colors: { button: "#118ab2", buttonText: "#ffffff" },
        "number-format": "decimal",
        locale: T.value,
        onStockAdded: ne,
        onStockRemoved: pe
      }, null, 8, ["stock-options", "config", "locale"])) : ce("", !0),
      A.value === "formula" && (P.value || M.value) ? (Q(), ve(G(s), {
        key: 1,
        ref: "formulapricing",
        "format-price": H,
        url: P.value,
        spec: M.value,
        debug: f.value,
        onHardwareResult: S
      }, null, 8, ["url", "spec", "debug"])) : ce("", !0),
      vt(ye(et, {
        ref_key: "calculator",
        ref: q,
        readonly: A.value === "formula",
        debug: f.value,
        "input-stock": D.value,
        "input-type": A.value,
        "find-extras-price": Z,
        "format-price": H,
        onLog: J,
        onError: U,
        onCalculating: z,
        onValidationError: te,
        onResult: R
      }, null, 8, ["readonly", "debug", "input-stock", "input-type"]), [
        [kt, W.value]
      ])
    ], 64));
  }
}), re = 5, he = 10, Pe = ",", ie = {
  fillColor: [7, 59, 76],
  fontStyle: "normal"
}, oe = {
  fontSize: 9
}, se = { left: 10 };
let le = [];
const Ut = (o, E, B, h = (s) => s.toString()) => {
  const s = new Vt({ orientation: "landscape" });
  let u = 10;
  s.setFontSize(20), s.text(o("pdf.order_summary"), 10, u), u += 15, s.setFontSize(14), s.text(`${o("general.your")} ${o("woodwork.part")}`, 10, u), u += re, le = [
    o("woodwork.length"),
    o("woodwork.width"),
    o("woodwork.thickness"),
    o("woodwork.material"),
    o("woodwork.quantity"),
    o("woodwork.name"),
    `${o("woodwork.banding")} (${Et.join(Pe)})`,
    `${o("woodwork.finish")} (${Ke.join(Pe)})`
  ];
  const _ = E.parts.map((f) => {
    const d = ["y1", "y2", "x1", "x2"].map((D) => f.banding?.[D] || "-").join(Pe), t = Ke.map((D) => f.finish?.faces?.[D] || "-").join(Pe);
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
  ae(s, {
    startY: u,
    head: [le],
    body: _,
    margin: se,
    headStyles: ie,
    styles: oe
  }), u = s.lastAutoTable.finalY + he, s.setFontSize(14), s.text(o("pdf.stock_requirements"), 10, u), u += re, le = [
    o("woodwork.length"),
    o("woodwork.width"),
    o("woodwork.thickness"),
    o("woodwork.material"),
    o("woodwork.quantity")
    // 'Cost'
  ];
  const C = E.stock.map((f) => [
    h(f.l),
    h(f.w),
    h(f.t) || "-",
    f?.material?.toUpperCase() || "-",
    h(f.q)
    // stock.cost
  ]);
  if (ae(s, {
    startY: u,
    head: [le],
    body: C,
    margin: se,
    headStyles: ie,
    styles: oe
  }), u = s.lastAutoTable.finalY + he, E.metadata.totalRollLength > 0) {
    s.setFontSize(14), s.text(o("pdf.roll_requirements"), 10, u), u += re, le = [
      o("woodwork.name"),
      o("woodwork.material"),
      o("woodwork.length")
    ];
    const f = E.stock.map((d) => [
      d?.name?.toUpperCase() || "-",
      d?.material?.toUpperCase() || "-",
      h(d.analysis.rollLength)
    ]);
    ae(s, {
      startY: u,
      head: [le],
      body: f,
      margin: se,
      headStyles: ie,
      styles: oe
    }), u = s.lastAutoTable.finalY + he;
  }
  if (B && Object.values(B)) {
    s.setFontSize(14), s.text(o("pdf.hardware"), 10, u), u += re;
    const f = Object.values(B).map((d) => [
      d.name.toUpperCase(),
      h(d.q)
      // item.totalCost.toFixed( 2 )
    ]);
    ae(s, {
      startY: u,
      head: [[o("pdf.item"), o("woodwork.quantity")]],
      body: f,
      margin: se,
      headStyles: ie,
      styles: oe
    }), u = s.lastAutoTable.finalY + he;
  }
  s.setFontSize(14), s.text(o("pdf.totals"), 10, u), u += re;
  const K = [
    [o("pdf.total_parts"), h(E.metadata.totalPartsProduced)],
    [o("pdf.part_area"), h(E.metadata.totalPartArea)],
    [o("pdf.total_stock_required"), h(E.metadata.totalUsedStock)],
    [o("pdf.total_banding_length"), h(E.metadata.totalBandingLength)],
    [o("pdf.total_finish_area"), h(E.metadata.totalFinishArea)],
    [o("pdf.total_roll_length"), h(E.metadata.totalRollLength)]
  ];
  if (ae(s, {
    startY: u,
    body: K,
    margin: se,
    headStyles: ie,
    styles: oe
  }), u = s.lastAutoTable.finalY + he, window?.smartcutImages?.length) {
    s.addPage();
    let f = 10;
    s.setFontSize(14), s.text(o("pdf.images"), 10, f), f += re;
    const d = window.smartcutImages.flatMap((t, D) => t.metadata.map((c) => [
      D + 1,
      c.newName
    ]));
    ae(s, {
      startY: f,
      body: d,
      head: [[o("pdf.part_index"), o("pdf.file_name")]],
      margin: se,
      headStyles: ie,
      styles: oe
    });
  }
  return s.output("datauristring");
}, Ht = {
  key: 0,
  class: "debug"
}, Yt = !1, Qt = /* @__PURE__ */ Ve({
  __name: "WordPress",
  setup(o) {
    const E = ue(() => import("./components-r1yHOfcv.js").then((e) => e.bD)), B = ue(() => import("./components-r1yHOfcv.js").then((e) => e.bB)), h = ue(() => import("./components-r1yHOfcv.js").then((e) => e.bE)), { inputShapes: s } = It(), u = "production", _ = {}, C = {}, K = b(null);
    let f, d, t;
    const D = {
      banding: null,
      finish: null
    };
    let c = null, T = [], A = null, P = {};
    const M = b(!1), V = b("manual"), q = b(""), F = We([]), fe = be(() => F.value), N = b(null), W = b(!0), J = b(null), U = b(!1), te = b(null);
    Ze("calculator", () => te.value);
    const z = (e) => {
      M.value && console.log("SmartCut -", ...e);
    }, S = (e) => {
      console.error(`SmartCut - ${e}`);
    }, H = (e = !0) => {
      U.value = !0, ["checkout", "intro_text", "offcuts", "banding_key"].forEach((r) => _e(r, "block")), ut() && _e("pricing_table", "table"), e ? ne(!0) : pe(), R();
    }, Z = (e = !0, n = !0) => {
      U.value = !1, ["checkout", "intro_text", "offcuts", "banding_key", "pricing_table"].forEach((i) => _e(i, "none")), n === !0 ? de() : n === !1 && R(), ne ? ne() : e === !1 && pe();
    }, ne = (e = !1) => {
      _e("quantity", "inline-block"), _.quantity.readOnly = e;
    }, pe = () => {
      U.value !== !1 && (m(1), _e("quantity", "none"), _.quantity.readOnly = !0);
    }, de = () => {
      if (!_.cart_button) {
        S("Cart button not found");
        return;
      }
      _.cart_button.disabled = !1;
    }, R = () => {
      if (U.value !== !1) {
        if (!_.cart_button) {
          S("Cart button not found");
          return;
        }
        _.cart_button.disabled = !0;
      }
    }, a = () => {
      S("Validation error"), R();
    }, m = (e, n = 0) => {
      if (z(["setting cart quantity", e]), !_.quantity) {
        S("Quantity field not found when trying to set");
        return;
      }
      _.quantity.value = e.toFixed(n), console.assert(_.quantity.value === e.toFixed(n), "Quantity field value not set correctly");
    }, w = (e) => {
      z(["setting variation price", e]);
      const n = document.querySelector(".woocommerce-variation-price .smartcut-price-selector");
      n && (n.innerText = ke(e)), K.value = e;
    }, x = (e = !1) => {
      const n = e ? N.value?.display_price ?? 0 : K.value ?? N.value?.display_price ?? 0;
      return console.log("getCurrentVariationPrice", K.value, N.value?.display_price), typeof n == "string" ? parseFloat(n) : n;
    }, O = () => {
      if (!window?.smartcutConfig) {
        S("SmartCut config not found");
        return;
      }
      const e = window.smartcutConfig;
      t = e.settings;
      const n = Be(k(window, ["smartcutConfig", "banding_data"])), r = Be(k(window, ["smartcutConfig", "finish_data"])), i = ($) => {
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
      W.value = Ue(), W.value ? ne(!0) : pe(), c.type === "variable" ? Z(!1, !1) : H(W.value);
      const ge = {
        type: c.type,
        stock: F.value.map(($) => $.toData()),
        variations: T ?? null,
        saw: y,
        options: l,
        banding: n,
        finish: r,
        machining: j
      };
      ge.type === "variable" && (z(["setting variable product form listeners"]), jQuery(function($) {
        $(".variations_form").on("reset_data", () => Z(!1, !1)).on("found_variation", (ht, yt) => dt(ht, yt));
      }));
      const xe = {
        product: c,
        selectedVariation: N,
        inputs: C,
        elements: _,
        inputType: V,
        formatPrice: ke,
        getCurrentVariationPrice: x,
        setInputValue: $e,
        setCartQuantity: m,
        setVariationPrice: w,
        isExtraEnabled: qe,
        isQuantityPricing: Ue,
        isMachiningEnabled: He,
        isSurchargeEnabled: Ye,
        getTotalBandingPrice: st,
        getTotalFinishPrice: ot,
        getTotalMachiningPrice: lt,
        getInputValue: ct,
        enableAddToCart: de,
        log: z,
        error: S
      }, je = At({
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
      }, xe);
      f = je.calculatePrice, d = je.resetPricing, Fe(() => {
        te.value && te.value.init(ge);
      });
    }, I = (e) => {
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
      }, c.multiple_sizes || (c.l || S("product 'length' attribute not available"), c.w || S("product 'width' attribute not available"));
    }, X = (e) => {
      V.value = k(window, ["smartcutConfig", "settings", "enable_formula"]) === !0 ? "formula" : "manual", q.value = k(window, ["smartcutConfig", "settings", "formula_url"]), z([`Input type: ${V.value}`]), P = {
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
        _[n] = document.querySelector(r);
      if (!_.checkout)
        return S("checkout iframe not found");
      if (!_.quantity)
        return S("quantity field not found");
      if (!_.cart_button)
        return S("cart button not found");
      _.quantity.readOnly = !0, R();
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
      return new Ae(y, t.numberFormat || "decimal");
    }, rt = () => {
      if (c?.stock_name || S("product name not specified"), F.value = [], c.multiple_sizes)
        for (const e of c.size) {
          if (!Se(e)) continue;
          const [n, r] = e.split("x"), i = me(
            parseFloat(n),
            parseFloat(r),
            c?.t,
            c.price
          );
          F.value.push(i);
        }
      else
        F.value.push(me(
          c.l,
          c.w,
          c?.t,
          c?.price
        ));
    }, Re = (e, n) => {
      const r = e.split(".");
      return r[0] = r[0].replace(/\B(?=(\d{3})+(?!\d))/g, n), r.join(".");
    }, ke = (e = 0, n = "") => {
      if (!e)
        return n ? Le("0.00") : "0.00";
      typeof e == "string" && (e = parseFloat(e));
      const r = e.toFixed(P.number_of_decimals).replace(".", P.decimal_separator), i = Re(r, P.thousands_separator);
      return n ? Le(i) : i;
    }, it = (e) => {
      if (e == null) return "";
      typeof e == "string" && (e = parseFloat(e));
      const r = e % 1 !== 0 ? P.number_of_decimals : 0, i = e.toFixed(r).replace(".", P.decimal_separator);
      return Re(i, P.thousands_separator);
    }, Le = (e) => {
      switch (P.currency_position) {
        case "left":
          return `${P.currency_symbol}${e}`;
        case "right":
          return `${e}${P.currency_symbol}`;
        default:
          return `${P.currency_symbol}${e}`;
      }
    }, we = (e) => {
      const n = (r) => Tt(zt(r), 100).replace("|", "_");
      return Array.isArray(e) ? e.map(n).join(",") : n(e);
    }, Be = (e) => {
      if (!e) return null;
      const n = {
        labels: [],
        pricing: {}
      }, r = Object.values(e);
      for (const i of r)
        i?.variations ? (n.labels.push(...Object.keys(i.options)), Object.values(i.variations).forEach((g) => {
          const { options: p } = g, y = Object.values(p).map((l) => we(l)).join("|");
          n.pricing[y] = parseInt(g.price);
        })) : i?.options && Object.keys(i.options).forEach((g) => {
          n.pricing[we(g)] = parseInt(i.price);
        });
      return n.labels.length || n.labels.push("type"), n;
    }, ze = (e, n) => {
      if (!n.length || !Y(D, [e])) return null;
      const r = k(D, [e]);
      if (!$t(r)) return null;
      const g = Object.values(r).map((p) => p?.variations ? Object.values(p.variations).map((y) => (y.type = "variable", y)) : (p.type = "simple", p)).flat().find((p) => {
        let y;
        return p.type === "simple" ? y = Object.keys(p.options) : y = Object.values(p.options), y ? y.every((l, j) => we(l) === we(n[j])) : !1;
      });
      return g?.price ? parseFloat(g.price) : null;
    }, ot = (e) => {
      let n = 0;
      if (typeof e == "object") {
        for (let [r, i] of Object.entries(e)) {
          typeof i == "string" && (i = parseFloat(i));
          const g = r.split("|"), p = ze("finish", g);
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
          const g = r.split("|"), p = ze("banding", g);
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
    }, lt = (e) => (A.holes ?? 0) * (e.metadata.numHoles ?? 0) + (A.corners ?? 0) * (e.metadata.numCorners ?? 0), _e = (e, n) => {
      e in _ && _[e]?.style && (_[e].style.display = n);
    }, $e = (e, n) => {
      De(e) ? C[e].value = n : S(`Attempting to set input but key '${e}' does not exist`);
    }, ct = (e) => {
      if (De(e))
        return C[e].value;
    }, De = (e) => e in C && C[e] instanceof HTMLInputElement, Me = () => {
      m(1), R(), d();
      for (const e in C)
        e !== "smartcut-hardware-price" && $e(e, null);
    }, Ue = () => {
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
    }, qe = (e) => {
      if (Y(t, ["enable", e]) && k(t, ["enable", e]) === !1)
        return !1;
      const n = k(D, [e]);
      return !!(n && Object.values(n).length);
    }, He = () => t.enable_machining === !0, Ye = () => !(t?.surcharge_type === "none" || !t?.surcharge || t.surcharge === "0.00"), ut = () => !!(t.pricing_strategy === "full_stock_plus_cut_length" || t.pricing_strategy === "full_stock_plus_num_parts" || t.pricing_strategy === "part_area" || t.pricing_strategy === "roll_length" || Ye() || qe("banding") || qe("finish") || He()), ft = (e) => {
      let n = e?.attributes?.attribute_size;
      return n || (n = c?.size), n;
    }, Se = (e) => /\d+x\d+/.test(e), pt = () => {
      window.smartcutConfig.input_fields.forEach((e) => {
        const n = e.replaceAll("_", "-");
        C[n] = document.getElementById(n);
      });
    }, dt = (e, n) => {
      Me(), N.value = n, z(["variation selected", n.attributes]), F.value = [];
      const r = k(n, ["attributes", "attribute_thickness"]) ?? null;
      if (c.selected_thickness = r, s.value.forEach((i) => {
        i.t = Ct({ v: r });
      }), c.multiple_sizes) {
        const i = ft(n);
        if (z([`variation found with size: ${i} & thickness: ${r}`]), !i)
          return Z(!1), S("The size of this multiple size product could not be found");
        if (Array.isArray(i) ? H(W.value) : Se(i) ? Z(!0, !0) : H(W.value), T?.length) {
          let g;
          const p = r;
          let y = n.display_price;
          Array.isArray(i) ? g = i.map((l) => ({
            size: l,
            l: l.split("x")[0],
            w: l.split("x")[1],
            t: p,
            price: y
          })) : g = T.filter((l) => Se(l?.attributes?.size) ? r === (l?.attributes?.thickness ?? null) : !1).map((l) => {
            const j = l?.attributes?.size.split("x")[0] ?? null, ge = l?.attributes?.size.split("x")[1] ?? null;
            let xe = 0;
            return n.display_price || (xe = T.find(($) => Se($.attributes?.size) && $.attributes?.thickness === l?.attributes?.thickness && $.attributes?.size === l?.attributes?.size && $.display_price > 0).display_price), z([
              `size attribute: '${l?.attributes?.size}'`,
              `price for thickness ${r}, dimensions: ${j}x${ge} is ${y}`
            ]), {
              size: l?.attributes?.size,
              l: j,
              w: ge,
              t: p,
              price: y || xe
            };
          }), U.value === !0 && g.forEach((l) => {
            const j = me(
              l.l,
              l.w,
              l.t,
              l.price,
              n?.attributes
            );
            F.value.push(j);
          });
        }
      } else {
        if (!T.some((i) => "thickness" in i.attributes))
          F.value.push(me(
            c.l,
            c.w,
            r,
            n.display_price,
            n?.attributes
          ));
        else {
          const i = T.find((g) => g.attributes?.thickness === r);
          if (!i) return S(`variation not found for thickness ${r}`);
          F.value.push(me(
            c.l,
            c.w,
            r,
            i.price,
            n?.attributes
          ));
        }
        H(W.value);
      }
    }, mt = async (e) => {
      Me(), z(["result event received", e]);
      const n = await f(e);
      if (!n.success) {
        console.error(n.error);
        return;
      }
      await _t(e);
    }, _t = async (e) => {
      const r = Ut(Dt, e, J.value, it).split(",")[1], i = new Ot();
      i.file("order-summary.pdf", r);
      const g = await i.generateAsync({ type: "blob" }), p = new File([g], "order-summary.zip", { type: "application/zip" });
      if (!De("smartcut-order-summary")) return;
      const y = C["smartcut-order-summary"].closest("form");
      if (!y) return;
      const l = new DataTransfer();
      l.items.add(p);
      const j = y.querySelector('[name="smartcut_order_summary"]');
      j instanceof HTMLInputElement && (j.files = l.files);
    }, gt = (e, n) => {
      R(), e && (J.value = Xe(e)), $e("smartcut-hardware-price", n ?? 0);
    };
    return Je(() => {
      console.log("💥 Powered by https://smartcut.dev", window?.smartcutConfig?.version), z(["Launching WordPress checkout..."]), D.banding = k(window, ["smartcutConfig", "banding_data"]), D.finish = k(window, ["smartcutConfig", "finish_data"]), A = k(window, ["smartcutConfig", "machining_pricing"]), T = k(window, ["smartcutConfig", "variations"]), nt(), pt(), I(window.smartcutConfig), X(window.smartcutConfig), O(), rt(), [
        "div.quantity > input.plus",
        "div.quantity > input.minus",
        "div.quantity .qty-plus",
        "div.quantity .qty-minus"
      ].forEach((r) => {
        const i = document.querySelector(r);
        i && (i.style.display = "none");
      });
      const n = new CustomEvent("smartcut/ready");
      window.dispatchEvent(n), z(["Wordpress checkout ready"]);
    }), (e, n) => (Q(), Ee(Ge, null, [
      ye(G(h), { position: "top-left" }),
      G(u) === "development" && Yt ? (Q(), Ee("div", Ht, [
        n[0] || (n[0] = wt("div", null, "WP - developer information", -1)),
        ye(G(B), {
          data: [F.value],
          paths: ["stock"]
        }, null, 8, ["data"]),
        ye(G(B), {
          data: [F.value.map((r) => r.trim)],
          paths: ["stock trim"]
        }, null, 8, ["data"])
      ])) : ce("", !0),
      V.value === "formula" && q.value ? (Q(), ve(G(E), {
        key: 1,
        ref: "formulapricing",
        "format-price": ke,
        url: q.value,
        debug: M.value,
        onHardwareResult: gt,
        onPanelResult: R
      }, null, 8, ["url", "debug"])) : ce("", !0),
      V.value === "manual" || V.value === "formula" && q.value ? (Q(), ve(et, {
        key: 2,
        ref_key: "calculator",
        ref: te,
        readonly: V.value === "formula",
        debug: M.value,
        "input-stock": fe.value,
        "find-extras-price": ze,
        "format-price": ke,
        "input-type": V.value,
        onLog: z,
        onError: S,
        onInputsChanged: R,
        onValidationError: a,
        onResult: mt
      }, null, 8, ["readonly", "debug", "input-stock", "input-type"])) : ce("", !0)
    ], 64));
  }
}), Kt = {
  key: 1,
  class: "error-message"
}, Nt = /* @__PURE__ */ Ve({
  __name: "Launch",
  props: {
    type: { default: "vanilla" }
  },
  setup(o, { expose: E }) {
    const B = b(!1), h = b(null), s = Xe({
      wordpress: Qt,
      vanilla: Mt
    }), u = o, _ = be(() => {
      if (!u.type) return null;
      const C = u?.type?.toLowerCase();
      return s[C] || null;
    });
    return E({
      componentType: be(() => u.type),
      isComponentMounted: B,
      checkout: h
    }), (C, K) => _.value ? (Q(), ve(St(_.value), {
      key: 0,
      ref_key: "checkoutRef",
      ref: h
    }, null, 512)) : u.type ? (Q(), Ee("div", Kt, " Invalid component type: " + xt(u.type), 1)) : ce("", !0);
  }
}), tn = /* @__PURE__ */ qt(Nt, [["__scopeId", "data-v-1bae2c3d"]]);
export {
  tn as default
};

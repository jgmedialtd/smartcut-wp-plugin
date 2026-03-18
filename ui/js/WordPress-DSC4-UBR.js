import { c as pt, M as zt, F as yt, g as ut, a as M, I as se, b as At, o as oe } from "./result.zod-BdTA-p3B.js";
import { J as ce } from "./vendor-jszip-BunSI5We.js";
import { t as le, b as ue } from "./i18n-DT7wACvc.js";
import { a as fe, E as pe, u as de } from "./EcommerceCalculator-Cp9dpABY.js";
import { t as me } from "./i18n-CYUWq18B.js";
import { E as _e, a as Q } from "./vendor-jspdf-BVlDd7Ff.js";
import { d as ge, o as he, a as jt, b as ft, g as kt, e as wt, j as It, u as et, h as vt, f as be, D as ye, r as U, c as ke, F as we, n as ve, E as Pe, B as Se } from "./vendor-vue-XczpOw2V.js";
function nt(a, T) {
  return T === "area" ? a === "imperial" ? 144 : 1e6 : a === "imperial" ? 12 : 1e3;
}
const qt = ["banding", "finish", "cutLength", "perPart", "partArea", "offcutArea", "rollLength", "surcharge", "machining", "stock", "custom"], xe = (a) => qt.includes(a);
function Fe(a, T) {
  const S = (o) => {
    T.log?.(o);
  }, E = (o) => (T.error?.(o), { success: !1, error: o }), p = () => {
    for (const o of qt) c(o, 0);
  }, c = (o, e) => {
    S(["setting price", o, e]);
    const { inputs: y, elements: s, setInputValue: v, formatPrice: l } = T;
    if (isNaN(e)) throw new Error("Price must be a number");
    if (!xe(o)) return;
    const b = {
      //this should not include any extra costs
      custom: {
        visible: null,
        hidden: "smartcut-custom-price"
      },
      perPart: {
        hidden: "smartcut-per-part-price",
        visible: "per_part_price"
      },
      partArea: {
        hidden: null,
        visible: "part_area_price"
      },
      offcutArea: {
        hidden: null,
        visible: "offcut_area_price"
      },
      rollLength: {
        hidden: null,
        visible: "roll_length_price"
      },
      banding: {
        hidden: "smartcut-banding-price",
        visible: "banding_total_price"
      },
      finish: {
        hidden: "smartcut-finish-price",
        visible: "finish_total_price"
      },
      machining: {
        hidden: "smartcut-machining-price",
        visible: "machining_total_price"
      },
      surcharge: {
        hidden: "smartcut-cut-to-size-surcharge",
        visible: "surcharge_price"
      },
      cutLength: {
        hidden: "smartcut-cut-length-price",
        visible: "cut_length_price"
      },
      stock: {
        hidden: "smartcut-stock-total-price",
        visible: "stock_total_price"
      }
    }[o];
    b?.hidden && y[b.hidden] && (S(["setting hidden price", b.hidden, e]), v(b.hidden, e)), b?.visible && s[b.visible] && (s[b.visible].innerText = l(e));
  }, G = (o, e, y) => {
    if (!o?.offcuts?.length) return 0;
    const s = o.offcuts.filter((_) => {
      const b = Math.max(_.l, _.w), z = Math.min(_.l, _.w);
      return b >= (a.offcut_min_length || 0) && z >= (a.offcut_min_width || 0);
    });
    if (s.length === 0) return 0;
    const v = a.offcut_pricing_mode || "percentage";
    let l = 0;
    switch (v) {
      case "free":
        l = 0, S(["offcut pricing mode: free, price = $0"]);
        break;
      case "fixed":
        l = a.offcut_fixed_price || 0, S([`offcut pricing mode: fixed, price = ${l}`]);
        break;
      default: {
        const _ = (a.offcut_pricing_percentage ?? 100) / 100, b = /* @__PURE__ */ new Map();
        for (const z of s) {
          const A = z.stockId;
          A && (b.has(A) || b.set(A, []), b.get(A).push(z));
        }
        for (const [z, A] of b) {
          const u = o.stock?.find((h) => h.id === z);
          if (!u || !u.cost) continue;
          const d = u.l * u.w;
          if (d === 0) continue;
          const k = A.reduce((h, I) => h + I.l * I.w * (I.q || 1), 0);
          l += k / d * pt({ v: u.cost }) * _;
        }
        l === 0 && s.length > 0 && (l = s.reduce((u, d) => u + d.l * d.w * (d.q || 1), 0) / e * y * _), S([`offcut pricing mode: percentage (${_ * 100}%), price = ${l}`]);
        break;
      }
    }
    return l;
  }, $ = (o) => {
    const { product: e, getCurrentVariationPrice: y, isQuantityPricing: s, enableAddToCart: v, setCartQuantity: l } = T;
    let _ = e?.price || y(!0) || 0;
    typeof _ == "string" && (_ = parseFloat(_));
    const b = a.unit_system === "imperial" ? "feet" : "meters", A = {
      full_stock: (d) => {
        if (S(["calculating cost by full sheet"]), !s()) {
          const k = d.metadata.totalStockCost;
          return c("stock", k), k;
        }
        return s() && l(d.metadata.totalUsedStock), 0;
      },
      part_area: (d) => {
        S([`calculating cost by part area in square ${b}`]);
        const k = nt(a.unit_system, "area");
        let h = 0;
        for (const x of d.stock) {
          const j = pt({ v: x.cost });
          if (!j) continue;
          const F = x.l * x.w;
          if (F === 0) continue;
          const C = x.analysis?.partArea || 0;
          C > 0 && (h += C / F * j, S([`stock ${x.id}: (${C} / ${F}) * ${j} = ${C / F * j}`]));
        }
        if (h === 0 && d.metadata.totalPartArea > 0 && _ > 0) {
          const x = d.metadata.totalPartArea / k;
          h = x * _, S([`fallback: part area price in square ${b} is ${x} (part area) * ${_} (product price) = ${h}`]);
        }
        c("partArea", h);
        let I = h;
        if (a?.enable_offcut_pricing && d?.offcuts) {
          const x = G(d, k, _);
          c("offcutArea", x), I += x;
        }
        if (S([`calculated total price as ${I}`]), s()) {
          const x = d.metadata.totalPartArea / k;
          return S([`setting cart quantity to ${x}`]), l(x, 2), 0;
        } else
          return I;
      },
      cut_length: (d) => {
        S([`calculating cost by cut length in  ${b}`]);
        const k = nt(a.unit_system, "length"), h = d.metadata.totalCutLength / k;
        return l(h, 2), 0;
      },
      full_stock_plus_cut_length: (d) => {
        S(["calculating cost by full sheet plus cut length"]);
        let k = 0;
        const h = d.metadata.totalStockCost;
        c("stock", h), k = h, s() && l(d.metadata.totalUsedStock);
        const I = nt(a.unit_system, "length");
        let j = d.metadata.totalCutLength / I * a.cut_length_price;
        const F = a.min_cut_length_charge ?? 0;
        return F > 0 && j > 0 && (j = Math.max(j, F)), c("cutLength", j), k + j;
      },
      full_stock_plus_num_parts: (d) => {
        S(["calculating cost by full sheet plus number of parts"]);
        let k = 0;
        const h = d.metadata.totalStockCost;
        c("stock", h), k = h, s() && l(d.metadata.totalUsedStock);
        const I = d.metadata.totalPartsProduced * a.per_part_price;
        return c("perPart", I), k + I;
      },
      full_stock_plus_part_perimeter: (d) => {
        S(["calculating cost by full stock plus part perimeter"]);
        let k = 0;
        const h = d.metadata.totalStockCost;
        c("stock", h), k = h, s() && l(d.metadata.totalUsedStock);
        const I = nt(a.unit_system, "length");
        let j = d.inputs.parts.reduce(
          (C, R) => C + 2 * (R.l + R.w) * (R.q ?? 1),
          0
        ) / I * a.cut_length_price;
        const F = a.min_cut_length_charge ?? 0;
        return F > 0 && j > 0 && (j = Math.max(j, F)), c("cutLength", j), k + j;
      },
      roll_length: (d) => {
        S([`calculating cost by roll length in ${b}`]);
        const k = nt(a.unit_system, "length"), h = d.stock.reduce((I, x) => I + x.analysis.rollLength / k * pt({ v: x.cost }), 0);
        return c("rollLength", h), h;
      }
    }[a.pricing_strategy], u = A(o);
    return v(), u;
  }, V = (o) => {
    const {
      isExtraEnabled: e,
      isMachiningEnabled: y,
      isSurchargeEnabled: s,
      inputType: v,
      getTotalBandingPrice: l,
      getTotalFinishPrice: _,
      getTotalMachiningPrice: b,
      getInputValue: z
    } = T;
    let A = 0;
    if (e("banding") && o.metadata.bandingLengthByType) {
      const u = l(o.metadata.bandingLengthByType);
      c("banding", u), A += u;
    }
    if (e("finish") && o.metadata.finishAreaByType) {
      const u = _(o.metadata.finishAreaByType);
      c("finish", u), A += u;
    }
    if (v.value === "formula") {
      const u = parseFloat(z("smartcut-hardware-price"));
      isNaN(u) || (A += u);
    }
    if (y()) {
      const u = b(o);
      c("machining", u), A += u;
    }
    if (s() && a.surcharge) {
      const u = a.surcharge_type === "per_sheet" ? parseFloat(a.surcharge.toString()) * o.metadata.totalUsedStock : parseFloat(a.surcharge.toString());
      c("surcharge", u), S(["added surcharge", u]), A += u;
    }
    return A;
  }, g = (o) => {
    const { getInputValue: e, setInputValue: y } = T, s = {
      "smartcut-job-id": o.jobId,
      "smartcut-dimensions": o.parts.map((v) => `${v.l}x${v.w} [${v.q}]`).join(", "),
      "smartcut-total-cut-length": o.metadata.totalCutLength,
      "smartcut-part-area": o.metadata.totalPartArea,
      "smartcut-total-cuts": o.metadata.totalCuts,
      "smartcut-total-parts": o.metadata.totalPartsProduced,
      "smartcut-machining": o.metadata.hasMachining
    };
    if (Object.entries(s).forEach(([v, l]) => {
      e(v) !== void 0 && y(v, l);
    }), e("smartcut-stock-summary") !== void 0) {
      const v = o.stock.map((l) => `${l.l}x${l.w}${l.t ? "x" + l.t : ""} [${l.q}]`).join(", ");
      y("smartcut-stock-summary", v);
    }
  };
  return {
    calculatePrice: async (o) => {
      p();
      const { isQuantityPricing: e, selectedVariation: y, setVariationPrice: s, setCartQuantity: v } = T;
      if (!o?.jobId)
        return E("No job ID provided");
      e() || v(1);
      let l = $(o);
      const _ = V(o);
      if (l += _, e()) {
        const b = o.metadata.totalUsedStock, z = l / b;
        c("custom", z);
      } else {
        if (!o.metadata.totalStockCost)
          return E("Total stock cost not returned for a multiple size product");
        S([`total cost is ${l}`]), c("custom", l);
      }
      return y.value && s(l), g(o), { success: !0, totalPrice: l };
    },
    resetPricing: p
  };
}
const Y = 5, at = 10, D = ",", N = {
  fillColor: [7, 59, 76],
  fontStyle: "normal"
}, W = {
  fontSize: 9
}, J = { left: 10 };
let K = [];
const Ce = (a, T, S, E = (p) => p.toString()) => {
  const p = new _e({ orientation: "landscape" });
  let c = 10;
  p.setFontSize(20), p.text(a("pdf.order_summary"), 10, c), c += 15, p.setFontSize(14), p.text(`${a("general.your")} ${a("woodwork.part")}`, 10, c), c += Y, K = [
    a("woodwork.length"),
    a("woodwork.width"),
    a("woodwork.thickness"),
    a("woodwork.material"),
    a("woodwork.quantity"),
    a("woodwork.name"),
    `${a("woodwork.banding")} (${zt.join(D)})`,
    `${a("woodwork.finish")} (${yt.join(D)})`
  ];
  const G = T.parts.map((g) => {
    let q, o;
    if ("extras" in g && g.extras)
      q = zt.map((y) => ut(g.extras?.banding?.sides?.[y], "-")).join(D), o = yt.map((y) => ut(g.extras?.finish?.faces?.[y], "-")).join(D);
    else {
      const y = g;
      q = ["y1", "y2", "x1", "x2"].map((s) => ut(y.banding?.[s], "-")).join(D), o = yt.map((s) => ut(y.finish?.faces?.[s], "-")).join(D);
    }
    return [
      E(g.l),
      E(g.w),
      E(g.t) || "-",
      g?.material?.toUpperCase() || "-",
      E(g.q),
      g.name || "-",
      q,
      o
    ];
  });
  Q(p, {
    startY: c,
    head: [K],
    body: G,
    margin: J,
    headStyles: N,
    styles: W
  }), c = p.lastAutoTable.finalY + at, p.setFontSize(14), p.text(a("pdf.stock_requirements"), 10, c), c += Y, K = [
    a("woodwork.length"),
    a("woodwork.width"),
    a("woodwork.thickness"),
    a("woodwork.material"),
    a("woodwork.quantity")
    // 'Cost'
  ];
  const $ = T.stock.map((g) => [
    E(g.l),
    E(g.w),
    E(g.t) || "-",
    g?.material?.toUpperCase() || "-",
    E(g.q)
    // stock.cost
  ]);
  if (Q(p, {
    startY: c,
    head: [K],
    body: $,
    margin: J,
    headStyles: N,
    styles: W
  }), c = p.lastAutoTable.finalY + at, T.metadata.totalRollLength > 0) {
    p.setFontSize(14), p.text(a("pdf.roll_requirements"), 10, c), c += Y, K = [
      a("woodwork.name"),
      a("woodwork.material"),
      a("woodwork.length")
    ];
    const g = T.stock.map((q) => [
      q?.name?.toUpperCase() || "-",
      q?.material?.toUpperCase() || "-",
      E(q.analysis.rollLength)
    ]);
    Q(p, {
      startY: c,
      head: [K],
      body: g,
      margin: J,
      headStyles: N,
      styles: W
    }), c = p.lastAutoTable.finalY + at;
  }
  if (S && Object.values(S)) {
    p.setFontSize(14), p.text(a("pdf.hardware"), 10, c), c += Y;
    const g = Object.values(S).map((q) => [
      q.name.toUpperCase(),
      E(q.q)
      // item.totalCost.toFixed( 2 )
    ]);
    Q(p, {
      startY: c,
      head: [[a("pdf.item"), a("woodwork.quantity")]],
      body: g,
      margin: J,
      headStyles: N,
      styles: W
    }), c = p.lastAutoTable.finalY + at;
  }
  p.setFontSize(14), p.text(a("pdf.totals"), 10, c), c += Y;
  const V = [
    [a("pdf.total_parts"), E(T.metadata.totalPartsProduced)],
    [a("pdf.part_area"), E(T.metadata.totalPartArea)],
    [a("pdf.total_stock_required"), E(T.metadata.totalUsedStock)],
    [a("pdf.total_banding_length"), E(T.metadata.totalBandingLength)],
    [a("pdf.total_finish_area"), E(T.metadata.totalFinishArea)],
    [a("pdf.total_roll_length"), E(T.metadata.totalRollLength)]
  ];
  if (Q(p, {
    startY: c,
    body: V,
    margin: J,
    headStyles: N,
    styles: W
  }), c = p.lastAutoTable.finalY + at, window?.smartcutImages?.length) {
    p.addPage();
    let g = 10;
    p.setFontSize(14), p.text(a("pdf.images"), 10, g), g += Y;
    const q = window.smartcutImages.flatMap((o, e) => o.metadata.map((y) => [
      e + 1,
      y.newName
    ]));
    Q(p, {
      startY: g,
      body: q,
      head: [[a("pdf.part_index"), a("pdf.file_name")]],
      margin: J,
      headStyles: N,
      styles: W
    });
  }
  return p.output("datauristring");
}, Te = {
  key: 0,
  class: "debug"
}, $e = !1, Ve = /* @__PURE__ */ ge({
  __name: "WordPress",
  setup(a) {
    const T = vt(() => import("./FormulaPricing-Dh472dwc.js")), S = vt(() => import("./ObjectViewer-BW_ItcGL.js")), E = vt(() => import("./Notices-DzzU2HPd.js")), { inputShapes: p } = fe(), { addNotice: c } = de(), G = "production", $ = {}, V = {}, g = U(null);
    let q, o, e;
    const y = {
      banding: null,
      finish: null
    };
    let s = null, v = [], l = null, _ = {};
    const b = U(!1), z = U("manual"), A = U(""), u = ye([]), d = ke(() => u.value), k = U(null), h = U(!0), I = U(null), x = U(!1), j = U(null);
    Pe("calculator", () => j.value);
    const F = (t) => {
      b.value && console.log("SmartCut -", ...t);
    }, C = (t) => {
      console.error(`SmartCut - ${t}`);
    }, R = (t = !0) => {
      x.value = !0, ["checkout", "intro_text", "offcuts", "banding_key"].forEach((r) => X(r, "block")), Kt() && X("pricing_table", "table"), t ? it(!0) : dt(), B();
    }, rt = (t = !0, n = !0) => {
      x.value = !1, ["checkout", "intro_text", "offcuts", "banding_key", "pricing_table"].forEach((i) => X(i, "none")), n === !0 ? Pt() : n === !1 && B(), it ? it() : t === !1 && dt();
    }, it = (t = !1) => {
      X("quantity", "inline-block"), $.quantity.readOnly = t;
    }, dt = () => {
      x.value !== !1 && (mt(1), X("quantity", "none"), $.quantity.readOnly = !0);
    }, Pt = () => {
      if (!$.cart_button) {
        C("Cart button not found");
        return;
      }
      $.cart_button.disabled = !1;
    }, B = () => {
      if (x.value !== !1) {
        if (!$.cart_button) {
          C("Cart button not found");
          return;
        }
        $.cart_button.disabled = !0;
      }
    }, Ot = () => {
      C("Validation error"), B();
    }, mt = (t, n = 0) => {
      if (F(["setting cart quantity", t]), !$.quantity) {
        C("Quantity field not found when trying to set");
        return;
      }
      $.quantity.value = t.toFixed(n), console.assert($.quantity.value === t.toFixed(n), "Quantity field value not set correctly");
    }, Vt = (t) => {
      F(["setting variation price", t]);
      const n = document.querySelector(".woocommerce-variation-price .smartcut-price-selector");
      n && (n.innerText = H(t)), g.value = t;
    }, Lt = (t = !1) => {
      const n = t ? k.value?.display_price ?? 0 : g.value ?? k.value?.display_price ?? 0;
      return console.log("getCurrentVariationPrice", g.value, k.value?.display_price), typeof n == "string" ? parseFloat(n) : n;
    }, Mt = () => {
      if (!window?.smartcutConfig) {
        C("SmartCut config not found");
        return;
      }
      const t = window.smartcutConfig;
      e = t.settings;
      const n = Ft(M(window, ["smartcutConfig", "banding_data"])), r = Ft(M(window, ["smartcutConfig", "finish_data"])), i = (O) => {
        switch (O) {
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
      }, { cutType: w, cutPreference: f } = i(e.cut_preference), P = {
        stockType: e.stock_type,
        bladeWidth: e.blade_width,
        cutType: w,
        cutPreference: f,
        stackHeight: e.stack_height || 100,
        guillotineOptions: {
          strategy: "efficiency",
          maxPhase: 0,
          headCuts: !1,
          limitStripDimensions: !1
        }
      }, m = {
        apiVersion: 3,
        debug: e.debug,
        emitAPIResult: !!e.store_api_result,
        numberFormat: e.numberFormat || "decimal",
        locale: t.locale,
        decimalPlaces: 2,
        fractionRoundTo: 0,
        currency: e.currency || "USD",
        stockSelection: e.stock_selection,
        stockGrain: e.stock_grain,
        minSpacing: e.min_spacing,
        maxParts: e.max_parts ?? null,
        orientationModel: e.orientation_model,
        resultOrientationModel: 0,
        minDimension: e.min_dimension,
        partTrim: e.part_trim,
        enable: {
          banding: e?.enable_banding || !1,
          finish: e?.enable_finish || !1,
          planing: e?.enable_planing || !1,
          orientation: e?.enable_orientation || !1,
          diagram: !e.hide_diagram,
          machining: e.enable_machining,
          csvImport: e.enable_import,
          partName: e.enable_part_name,
          imageUpload: e.enable_image_upload,
          focus: !0,
          click: !0,
          progressNumber: e.pricing_strategy !== "part_area"
        },
        colors: {
          partA: e?.part_a_color ?? "#1d9bc4",
          partB: e?.part_b_color ?? "#065d7a",
          partSelected: e?.part_selected_color ?? "#5bc85b",
          stock: e?.stock_color ?? "#ffd166",
          button: e?.button_color ?? "#118ab2",
          buttonText: e?.button_text_color ?? "#ffffff",
          text: e?.text_color ?? "#ffffff"
        }
      };
      b.value = m.debug;
      const L = {
        numberFormat: e.number_format,
        decimalPlaces: 2,
        fractionRoundTo: 0,
        faces: {
          enabled: e.machining_sides
        },
        holes: {
          enabled: e.machining_holes,
          defaultDiameter: e.machining_holes_default_diameter,
          diameters: e.machining_holes_diameters.split(",").map((O) => O.trim()).filter(Boolean),
          minDiameter: e.machining_holes_min_diameter,
          maxDiameter: e.machining_holes_max_diameter,
          enableDepth: e.machining_holes_depth,
          depths: e.machining_holes_depths.split(",").map((O) => O.trim()).filter(Boolean),
          defaultDepth: e.machining_holes_default_depth,
          minDepth: e.machining_holes_min_depth,
          maxDepth: e.machining_holes_max_depth
        },
        hingeHoles: {
          enabled: e.machining_hinge_holes,
          minimumHoleDistance: e.machining_hinge_holes_minimum_hole_distance,
          defaultDistanceFromEdge: e.machining_hinge_holes_default_distance_from_edge,
          defaultOuterSpacing: e.machining_hinge_holes_default_outer_spacing,
          defaultHingeLength: e.machining_hinge_holes_default_hinge_length
        },
        corners: {
          enabled: e.machining_radius_corners || e.machining_bevel_corners,
          types: [
            e.machining_radius_corners ? "radius" : null,
            e.machining_bevel_corners ? "bevel" : null
          ].filter(Boolean),
          minValue: e.machining_corners_min_value,
          maxValue: e.machining_corners_max_value,
          enableBanding: e.machining_corners_enable_banding
        }
      };
      h.value = Tt(), h.value ? it(!0) : dt(), s.type === "variable" ? rt(!1, !1) : R(h.value);
      const tt = {
        type: s.type,
        stock: u.value.map((O) => O.toData()),
        variations: v ?? null,
        saw: P,
        options: m,
        banding: n,
        finish: r,
        machining: L
      };
      tt.type === "variable" && (F(["setting variable product form listeners"]), jQuery(function(O) {
        O(".variations_form").on("reset_data", () => rt(!1, !1)).on("found_variation", (re, ie) => Xt(re, ie));
      }));
      const lt = {
        product: s,
        selectedVariation: k,
        inputs: V,
        elements: $,
        inputType: z,
        formatPrice: H,
        getCurrentVariationPrice: Lt,
        setInputValue: gt,
        setCartQuantity: mt,
        setVariationPrice: Vt,
        isExtraEnabled: ht,
        isQuantityPricing: Tt,
        isMachiningEnabled: $t,
        isSurchargeEnabled: Et,
        getTotalBandingPrice: Nt,
        getTotalFinishPrice: Dt,
        getTotalMachiningPrice: Wt,
        getInputValue: Jt,
        enableAddToCart: Pt,
        log: F,
        error: C
      }, bt = Fe({
        pricing_strategy: e.pricing_strategy,
        number_format: e.number_format,
        unit_system: e.unit_system,
        cut_length_price: e.cut_length_price,
        min_cut_length_charge: e.min_cut_length_charge,
        per_part_price: e.per_part_price,
        surcharge: e.surcharge,
        surcharge_type: e.surcharge_type,
        enable_offcut_pricing: e.enable_offcut_pricing,
        offcut_min_length: e.offcut_min_length,
        offcut_min_width: e.offcut_min_width
      }, lt);
      q = bt.calculatePrice, o = bt.resetPricing, ve(() => {
        j.value && j.value.init(tt);
      });
    }, Bt = (t) => {
      const n = t?.multiple_sizes === !0;
      s = {
        type: t?.product_type,
        multiple_sizes: n,
        size: t?.size ? t.size.split(" | ") : [],
        l: !n && t?.l ? parseFloat(t.l) : null,
        w: !n && t?.w ? parseFloat(t.w) : null,
        t: t?.t ?? null,
        price: t?.price ? parseFloat(t.price) : null,
        stock_name: t?.stock_sku || t.stock_name
      }, s.multiple_sizes || (s.l || C("product 'length' attribute not available"), s.w || C("product 'width' attribute not available"));
    }, Ut = (t) => {
      z.value = M(window, ["smartcutConfig", "settings", "enable_formula"]) === !0 ? "formula" : "manual", A.value = M(window, ["smartcutConfig", "settings", "formula_url"]), F([`Input type: ${z.value}`]), _ = {
        thousands_separator: t?.thousands_separator,
        decimal_separator: t?.decimal_separator,
        number_of_decimals: t?.number_of_decimals,
        currency_symbol: t?.currency_symbol,
        currency_position: t?.currency_position
      };
    }, Rt = () => {
      const t = {
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
      for (const [n, r] of Object.entries(t))
        $[n] = document.querySelector(r);
      if (!$.checkout)
        return C("checkout iframe not found");
      if (!$.quantity)
        return C("quantity field not found");
      if (!$.cart_button)
        return C("cart button not found");
      $.quantity.readOnly = !0, B();
    }, Ht = () => ({
      w1: e.stock_trim_x1 ?? 0,
      w2: e.stock_trim_x2 ?? 0,
      l1: e.stock_type === "linear" ? 0 : e.stock_trim_y1 ?? 0,
      l2: e.stock_type === "linear" ? 0 : e.stock_trim_y2 ?? 0
    }), Z = (t = null, n = null, r = null, i = null, w = null) => {
      let f;
      if (w && typeof w == "object") {
        f = [];
        for (const [m, L] of Object.entries(w))
          m !== "attribute_size" && m !== "attribute_thickness" && f.push(`${m.replace("attribute_", "")}: ${L}`);
        f = f.join(" - ");
      }
      const P = {
        name: s.stock_name,
        l: t,
        w: n,
        t: r,
        grain: e.stock_grain,
        cost: parseFloat(i?.toString() || "0"),
        trim: Ht(),
        allowExactFitShapes: !0,
        notes: f
      };
      return new se(P, e.numberFormat || "decimal");
    }, Qt = () => {
      if (s?.stock_name || C("product name not specified"), u.value = [], s.multiple_sizes)
        for (const t of s.size) {
          if (!ct(t)) continue;
          const [n, r] = t.split("x"), i = Z(
            parseFloat(n),
            parseFloat(r),
            s?.t,
            s.price
          );
          u.value.push(i);
        }
      else
        u.value.push(Z(
          s.l,
          s.w,
          s?.t,
          s?.price
        ));
    }, St = (t, n) => {
      const r = t.split(".");
      return r[0] = r[0].replace(/\B(?=(\d{3})+(?!\d))/g, n), r.join(".");
    }, H = (t = 0, n = "") => {
      if (!t)
        return n ? xt("0.00") : "0.00";
      typeof t == "string" && (t = parseFloat(t));
      const r = t.toFixed(_.number_of_decimals).replace(".", _.decimal_separator), i = St(r, _.thousands_separator);
      return n ? xt(i) : i;
    }, Yt = (t) => {
      if (t == null) return "";
      typeof t == "string" && (t = parseFloat(t));
      const r = t % 1 !== 0 ? _.number_of_decimals : 0, i = t.toFixed(r).replace(".", _.decimal_separator);
      return St(i, _.thousands_separator);
    }, xt = (t) => {
      switch (_.currency_position) {
        case "left":
          return `${_.currency_symbol}${t}`;
        case "right":
          return `${t}${_.currency_symbol}`;
        default:
          return `${_.currency_symbol}${t}`;
      }
    }, st = (t) => {
      const n = (r) => le(ue(r), 100).replace("|", "_");
      return Array.isArray(t) ? t.map(n).join(",") : n(t);
    }, Ft = (t) => {
      if (!t) return null;
      const n = {
        labels: [],
        pricing: {},
        displayNames: {}
      }, r = Object.values(t);
      for (const i of r)
        i?.variations ? (n.labels.push(...Object.keys(i.options)), Object.values(i.variations).forEach((w) => {
          const { options: f } = w, P = Object.values(f).map((m) => st(m)).join("|");
          n.pricing[P] = parseInt(w.price);
        })) : i?.options && Object.keys(i.options).forEach((w) => {
          const f = st(w);
          n.pricing[f] = parseInt(i.price), i.name && (n.displayNames[f] = i.name);
        });
      return n.labels.length || n.labels.push("type"), n;
    }, _t = (t, n) => {
      if (!n.length || !At(y, [t])) return null;
      const r = M(y, [t]);
      if (!oe(r)) return null;
      const w = Object.values(r).map((f) => f?.variations ? Object.values(f.variations).map((P) => (P.type = "variable", P)) : (f.type = "simple", f)).flat().find((f) => {
        let P;
        return f.type === "simple" ? P = Object.keys(f.options) : P = Object.values(f.options), P ? P.every((m, L) => st(m) === st(n[L])) : !1;
      });
      return w?.price ? parseFloat(w.price) : null;
    }, Dt = (t) => {
      let n = 0;
      if (typeof t == "object") {
        for (let [r, i] of Object.entries(t)) {
          typeof i == "string" && (i = parseFloat(i));
          const w = r.split("|"), f = _t("finish", w);
          if (f === null) continue;
          const m = Number(i) / 1e6 * parseFloat(f.toString());
          n += m;
        }
        if ("min_finish_charge" in e) {
          const r = parseFloat(e?.min_finish_charge);
          if (r > 0 && n > 0 && n < r)
            return r;
        }
      }
      return n;
    }, Nt = (t) => {
      let n = 0;
      if (typeof t == "object") {
        for (let [r, i] of Object.entries(t)) {
          typeof i == "string" && (i = parseFloat(i));
          const w = r.split("|"), f = _t("banding", w);
          if (f === null) continue;
          const P = i / (e.unit_system === "imperial" ? 12 : 1e3) * parseFloat(f.toString());
          n += P;
        }
        if ("min_banding_charge" in e) {
          const r = parseFloat(e?.min_banding_charge);
          if (r > 0 && n > 0 && n < r)
            return r;
        }
      }
      return n;
    }, Wt = (t) => (l.holes ?? 0) * (t.metadata.numHoles ?? 0) + (l.corners ?? 0) * (t.metadata.numCorners ?? 0), X = (t, n) => {
      t in $ && $[t]?.style && ($[t].style.display = n);
    }, gt = (t, n) => {
      ot(t) ? V[t].value = n : C(`Attempting to set input but key '${t}' does not exist`);
    }, Jt = (t) => {
      if (ot(t))
        return V[t].value;
    }, ot = (t) => t in V && V[t] instanceof HTMLInputElement, Ct = () => {
      mt(1), B(), o();
      for (const t in V)
        t !== "smartcut-hardware-price" && gt(t, null);
    }, Tt = () => {
      if (window.smartcutConfig?.product_type === "variable")
        return !1;
      switch (e.pricing_strategy) {
        case "full_stock":
        case "part_area":
        case "full_stock_plus_cut_length":
        case "full_stock_plus_num_parts":
        case "full_stock_plus_part_perimeter":
          return !0;
        case "roll_length":
        case "cut_length":
          return !1;
        default:
          return !1;
      }
    }, ht = (t) => {
      if (At(e, ["enable", t]) && M(e, ["enable", t]) === !1)
        return !1;
      const n = M(y, [t]);
      return !!(n && Object.values(n).length);
    }, $t = () => e.enable_machining === !0, Et = () => !(e?.surcharge_type === "none" || !e?.surcharge || e.surcharge === "0.00"), Kt = () => !!(e.pricing_strategy === "full_stock_plus_cut_length" || e.pricing_strategy === "full_stock_plus_num_parts" || e.pricing_strategy === "full_stock_plus_part_perimeter" || e.pricing_strategy === "part_area" || e.pricing_strategy === "roll_length" || Et() || ht("banding") || ht("finish") || $t()), Gt = (t) => {
      let n = t?.attributes?.attribute_size;
      return n || (n = s?.size), n;
    }, ct = (t) => /\d+x\d+/.test(t), Zt = () => {
      window.smartcutConfig.input_fields.forEach((t) => {
        const n = t.replaceAll("_", "-");
        V[n] = document.getElementById(n);
      });
    }, Xt = (t, n) => {
      Ct(), k.value = n, F(["variation selected", n.attributes]), u.value = [];
      const r = M(n, ["attributes", "attribute_thickness"]) ?? null;
      if (s.selected_thickness = r, p.value.forEach((i) => {
        i.t = pt({ v: r });
      }), s.multiple_sizes) {
        const i = Gt(n);
        if (F([`variation found with size: ${i} & thickness: ${r}`]), !i)
          return rt(!1), C("The size of this multiple size product could not be found");
        if (Array.isArray(i) ? R(h.value) : ct(i) ? rt(!0, !0) : R(h.value), v?.length) {
          let w;
          const f = r;
          let P = n.display_price;
          Array.isArray(i) ? w = i.map((m) => ({
            size: m,
            l: m.split("x")[0],
            w: m.split("x")[1],
            t: f,
            price: P
          })) : w = v.filter((m) => ct(m?.attributes?.size) ? r === (m?.attributes?.thickness ?? null) : !1).map((m) => {
            const L = m?.attributes?.size.split("x")[0] ?? null, tt = m?.attributes?.size.split("x")[1] ?? null;
            let lt = 0;
            return n.display_price || (lt = v.find((O) => ct(O.attributes?.size) && O.attributes?.thickness === m?.attributes?.thickness && O.attributes?.size === m?.attributes?.size && O.display_price > 0).display_price), F([
              `size attribute: '${m?.attributes?.size}'`,
              `price for thickness ${r}, dimensions: ${L}x${tt} is ${P}`
            ]), {
              size: m?.attributes?.size,
              l: L,
              w: tt,
              t: f,
              price: P || lt
            };
          }), x.value === !0 && w.forEach((m) => {
            const L = Z(
              m.l,
              m.w,
              m.t,
              m.price,
              n?.attributes
            );
            u.value.push(L);
          });
        }
      } else {
        if (!v.some((i) => "thickness" in i.attributes))
          u.value.push(Z(
            s.l,
            s.w,
            r,
            n.display_price,
            n?.attributes
          ));
        else {
          const i = v.find((w) => w.attributes?.thickness === r);
          if (!i) return C(`variation not found for thickness ${r}`);
          u.value.push(Z(
            s.l,
            s.w,
            r,
            i.price,
            n?.attributes
          ));
        }
        R(h.value);
      }
    }, te = (t) => {
      if (!ot("smartcut-api-result")) return;
      const n = V["smartcut-api-result"].closest("form");
      if (!n) return;
      const r = JSON.stringify(t.apiResultV3), i = new Blob([r], { type: "application/json" }), w = new File([i], "api-result.json", { type: "application/json" }), f = new DataTransfer();
      f.items.add(w);
      const P = n.querySelector('[name="smartcut_api_result"]');
      P instanceof HTMLInputElement && (P.files = f.files);
    }, ee = async (t) => {
      const r = Ce(me, t, I.value, Yt).split(",")[1], i = new ce();
      i.file("order-summary.pdf", r);
      const w = await i.generateAsync({ type: "blob" }), f = new File([w], "order-summary.zip", { type: "application/zip" });
      if (!ot("smartcut-order-summary")) return;
      const P = V["smartcut-order-summary"].closest("form");
      if (!P) return;
      const m = new DataTransfer();
      m.items.add(f);
      const L = P.querySelector('[name="smartcut_order_summary"]');
      L instanceof HTMLInputElement && (L.files = m.files);
    }, ne = async (t) => {
      Ct(), F(["result event received", t]);
      const n = await q(t);
      if (!n.success) {
        console.error(n.error);
        return;
      }
      const r = e.minimum_cut_to_size_price ?? 0;
      if (r > 0 && (n.totalPrice ?? 0) < r) {
        B(), c({
          message: `A minimum cut-to-size order of ${H(r)} is required. Your order total is ${H(n.totalPrice ?? 0)}.`,
          type: "warning"
        });
        return;
      }
      await ee(t), t.apiResultV3 && te(t);
    }, ae = (t, n) => {
      B(), t && (I.value = Se(t)), gt("smartcut-hardware-price", n ?? 0);
    };
    return he(() => {
      console.log("💥 Powered by https://smartcut.dev", window?.smartcutConfig?.version), F(["Launching WordPress checkout..."]), y.banding = M(window, ["smartcutConfig", "banding_data"]), y.finish = M(window, ["smartcutConfig", "finish_data"]), l = M(window, ["smartcutConfig", "machining_pricing"]), v = M(window, ["smartcutConfig", "variations"]), Rt(), Zt(), Bt(window.smartcutConfig), Ut(window.smartcutConfig), Mt(), Qt(), [
        "div.quantity > input.plus",
        "div.quantity > input.minus",
        "div.quantity .qty-plus",
        "div.quantity .qty-minus"
      ].forEach((r) => {
        const i = document.querySelector(r);
        i && (i.style.display = "none");
      });
      const n = new CustomEvent("smartcut/ready");
      window.dispatchEvent(n), F(["Wordpress checkout ready"]);
    }), (t, n) => (ft(), jt(we, null, [
      kt(et(E), { position: "top-left" }),
      et(G) === "development" && $e ? (ft(), jt("div", Te, [
        n[0] || (n[0] = be("div", null, "WP - developer information", -1)),
        kt(et(S), {
          data: [u.value],
          paths: ["stock"]
        }, null, 8, ["data"]),
        kt(et(S), {
          data: [u.value.map((r) => r.trim)],
          paths: ["stock trim"]
        }, null, 8, ["data"])
      ])) : wt("", !0),
      z.value === "formula" && A.value ? (ft(), It(et(T), {
        key: 1,
        ref: "formulapricing",
        "format-price": H,
        url: A.value,
        debug: b.value,
        onHardwareResult: ae,
        onPanelResult: B
      }, null, 8, ["url", "debug"])) : wt("", !0),
      z.value === "manual" || z.value === "formula" && A.value ? (ft(), It(pe, {
        key: 2,
        ref_key: "calculator",
        ref: j,
        readonly: z.value === "formula",
        debug: b.value,
        "input-stock": d.value,
        "find-extras-price": _t,
        "format-price": H,
        "input-type": z.value,
        onLog: F,
        onError: C,
        onInputsChanged: B,
        onValidationError: Ot,
        onResult: ne
      }, null, 8, ["readonly", "debug", "input-stock", "input-type"])) : wt("", !0)
    ], 64));
  }
});
export {
  Ve as default
};

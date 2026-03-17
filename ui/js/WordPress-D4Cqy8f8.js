import { c as ft, M as Et, F as yt, g as lt, a as B, I as ie, b as At, o as se } from "./result.zod-P7rQl8ib.js";
import { J as oe } from "./vendor-jszip-BunSI5We.js";
import { t as ce, b as le } from "./i18n-DT7wACvc.js";
import { a as ue, E as fe, u as pe } from "./EcommerceCalculator-5LWTyQpi.js";
import { t as de } from "./i18n-CYUWq18B.js";
import { E as me, a as H } from "./vendor-jspdf-BVlDd7Ff.js";
import { d as _e, o as ge, a as It, b as ut, g as kt, e as wt, j as jt, u as tt, h as vt, f as he, D as be, r as U, c as ye, F as ke, n as we, E as ve, B as Pe } from "./vendor-vue-XczpOw2V.js";
function et(a, F) {
  return F === "area" ? a === "imperial" ? 144 : 1e6 : a === "imperial" ? 12 : 1e3;
}
const qt = ["banding", "finish", "cutLength", "perPart", "partArea", "offcutArea", "rollLength", "surcharge", "machining", "stock", "custom"], Se = (a) => qt.includes(a);
function xe(a, F) {
  const v = (o) => {
    F.log?.(o);
  }, C = (o) => (F.error?.(o), { success: !1, error: o }), f = () => {
    for (const o of qt) c(o, 0);
  }, c = (o, e) => {
    v(["setting price", o, e]);
    const { inputs: y, elements: s, setInputValue: w, formatPrice: l } = F;
    if (isNaN(e)) throw new Error("Price must be a number");
    if (!Se(o)) return;
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
    b?.hidden && y[b.hidden] && (v(["setting hidden price", b.hidden, e]), w(b.hidden, e)), b?.visible && s[b.visible] && (s[b.visible].innerText = l(e));
  }, J = (o, e, y) => {
    if (!o?.offcuts?.length) return 0;
    const s = o.offcuts.filter((m) => {
      const b = Math.max(m.l, m.w), T = Math.min(m.l, m.w);
      return b >= (a.offcut_min_length || 0) && T >= (a.offcut_min_width || 0);
    });
    if (s.length === 0) return 0;
    const w = a.offcut_pricing_mode || "percentage";
    let l = 0;
    switch (w) {
      case "free":
        l = 0, v(["offcut pricing mode: free, price = $0"]);
        break;
      case "fixed":
        l = a.offcut_fixed_price || 0, v([`offcut pricing mode: fixed, price = ${l}`]);
        break;
      default: {
        const m = (a.offcut_pricing_percentage ?? 100) / 100, b = /* @__PURE__ */ new Map();
        for (const T of s) {
          const z = T.stockId;
          z && (b.has(z) || b.set(z, []), b.get(z).push(T));
        }
        for (const [T, z] of b) {
          const u = o.stock?.find((h) => h.id === T);
          if (!u || !u.cost) continue;
          const p = u.l * u.w;
          if (p === 0) continue;
          const k = z.reduce((h, A) => h + A.l * A.w * (A.q || 1), 0);
          l += k / p * ft({ v: u.cost }) * m;
        }
        l === 0 && s.length > 0 && (l = s.reduce((u, p) => u + p.l * p.w * (p.q || 1), 0) / e * y * m), v([`offcut pricing mode: percentage (${m * 100}%), price = ${l}`]);
        break;
      }
    }
    return l;
  }, $ = (o) => {
    const { product: e, getCurrentVariationPrice: y, isQuantityPricing: s, enableAddToCart: w, setCartQuantity: l } = F;
    let m = e?.price || y(!0) || 0;
    typeof m == "string" && (m = parseFloat(m));
    const b = a.unit_system === "imperial" ? "feet" : "meters", z = {
      full_stock: (p) => {
        if (v(["calculating cost by full sheet"]), !s()) {
          const k = p.metadata.totalStockCost;
          return c("stock", k), k;
        }
        return s() && l(p.metadata.totalUsedStock), 0;
      },
      part_area: (p) => {
        v([`calculating cost by part area in square ${b}`]);
        const k = et(a.unit_system, "area");
        let h = 0;
        for (const P of p.stock) {
          const q = ft({ v: P.cost });
          if (!q) continue;
          const I = P.l * P.w;
          if (I === 0) continue;
          const E = P.analysis?.partArea || 0;
          E > 0 && (h += E / I * q, v([`stock ${P.id}: (${E} / ${I}) * ${q} = ${E / I * q}`]));
        }
        if (h === 0 && p.metadata.totalPartArea > 0 && m > 0) {
          const P = p.metadata.totalPartArea / k;
          h = P * m, v([`fallback: part area price in square ${b} is ${P} (part area) * ${m} (product price) = ${h}`]);
        }
        c("partArea", h);
        let A = h;
        if (a?.enable_offcut_pricing && p?.offcuts) {
          const P = J(p, k, m);
          c("offcutArea", P), A += P;
        }
        if (v([`calculated total price as ${A}`]), s()) {
          const P = p.metadata.totalPartArea / k;
          return v([`setting cart quantity to ${P}`]), l(P, 2), 0;
        } else
          return A;
      },
      cut_length: (p) => {
        v([`calculating cost by cut length in  ${b}`]);
        const k = et(a.unit_system, "length"), h = p.metadata.totalCutLength / k;
        return l(h, 2), 0;
      },
      full_stock_plus_cut_length: (p) => {
        v(["calculating cost by full sheet plus cut length"]);
        let k = 0;
        const h = p.metadata.totalStockCost;
        c("stock", h), k = h, s() && l(p.metadata.totalUsedStock);
        const A = et(a.unit_system, "length"), q = p.metadata.totalCutLength / A * a.cut_length_price;
        return c("cutLength", q), k + q;
      },
      full_stock_plus_num_parts: (p) => {
        v(["calculating cost by full sheet plus number of parts"]);
        let k = 0;
        const h = p.metadata.totalStockCost;
        c("stock", h), k = h, s() && l(p.metadata.totalUsedStock);
        const A = p.metadata.totalPartsProduced * a.per_part_price;
        return c("perPart", A), k + A;
      },
      full_stock_plus_part_perimeter: (p) => {
        v(["calculating cost by full stock plus part perimeter"]);
        let k = 0;
        const h = p.metadata.totalStockCost;
        c("stock", h), k = h, s() && l(p.metadata.totalUsedStock);
        const A = et(a.unit_system, "length"), q = p.metadata.totalCutLength / A * a.cut_length_price;
        return c("cutLength", q), k + q;
      },
      roll_length: (p) => {
        v([`calculating cost by roll length in ${b}`]);
        const k = et(a.unit_system, "length"), h = p.stock.reduce((A, P) => A + P.analysis.rollLength / k * ft({ v: P.cost }), 0);
        return c("rollLength", h), h;
      }
    }[a.pricing_strategy], u = z(o);
    return w(), u;
  }, V = (o) => {
    const {
      isExtraEnabled: e,
      isMachiningEnabled: y,
      isSurchargeEnabled: s,
      inputType: w,
      getTotalBandingPrice: l,
      getTotalFinishPrice: m,
      getTotalMachiningPrice: b,
      getInputValue: T
    } = F;
    let z = 0;
    if (e("banding") && o.metadata.bandingLengthByType) {
      const u = l(o.metadata.bandingLengthByType);
      c("banding", u), z += u;
    }
    if (e("finish") && o.metadata.finishAreaByType) {
      const u = m(o.metadata.finishAreaByType);
      c("finish", u), z += u;
    }
    if (w.value === "formula") {
      const u = parseFloat(T("smartcut-hardware-price"));
      isNaN(u) || (z += u);
    }
    if (y()) {
      const u = b(o);
      c("machining", u), z += u;
    }
    if (s() && a.surcharge) {
      const u = a.surcharge_type === "per_sheet" ? parseFloat(a.surcharge.toString()) * o.metadata.totalUsedStock : parseFloat(a.surcharge.toString());
      c("surcharge", u), v(["added surcharge", u]), z += u;
    }
    return z;
  }, g = (o) => {
    const { getInputValue: e, setInputValue: y } = F, s = {
      "smartcut-job-id": o.jobId,
      "smartcut-dimensions": o.parts.map((w) => `${w.l}x${w.w} [${w.q}]`).join(", "),
      "smartcut-total-cut-length": o.metadata.totalCutLength,
      "smartcut-part-area": o.metadata.totalPartArea,
      "smartcut-total-cuts": o.metadata.totalCuts,
      "smartcut-total-parts": o.metadata.totalPartsProduced,
      "smartcut-machining": o.metadata.hasMachining
    };
    if (Object.entries(s).forEach(([w, l]) => {
      e(w) !== void 0 && y(w, l);
    }), e("smartcut-stock-summary") !== void 0) {
      const w = o.stock.map((l) => `${l.l}x${l.w}${l.t ? "x" + l.t : ""} [${l.q}]`).join(", ");
      y("smartcut-stock-summary", w);
    }
  };
  return {
    calculatePrice: async (o) => {
      f();
      const { isQuantityPricing: e, selectedVariation: y, setVariationPrice: s, setCartQuantity: w } = F;
      if (!o?.jobId)
        return C("No job ID provided");
      e() || w(1);
      let l = $(o);
      const m = V(o);
      if (l += m, e()) {
        const b = o.metadata.totalUsedStock, T = l / b;
        c("custom", T);
      } else {
        if (!o.metadata.totalStockCost)
          return C("Total stock cost not returned for a multiple size product");
        v([`total cost is ${l}`]), c("custom", l);
      }
      return y.value && s(l), g(o), { success: !0, totalPrice: l };
    },
    resetPricing: f
  };
}
const Q = 5, nt = 10, Y = ",", D = {
  fillColor: [7, 59, 76],
  fontStyle: "normal"
}, N = {
  fontSize: 9
}, W = { left: 10 };
let K = [];
const Fe = (a, F, v, C = (f) => f.toString()) => {
  const f = new me({ orientation: "landscape" });
  let c = 10;
  f.setFontSize(20), f.text(a("pdf.order_summary"), 10, c), c += 15, f.setFontSize(14), f.text(`${a("general.your")} ${a("woodwork.part")}`, 10, c), c += Q, K = [
    a("woodwork.length"),
    a("woodwork.width"),
    a("woodwork.thickness"),
    a("woodwork.material"),
    a("woodwork.quantity"),
    a("woodwork.name"),
    `${a("woodwork.banding")} (${Et.join(Y)})`,
    `${a("woodwork.finish")} (${yt.join(Y)})`
  ];
  const J = F.parts.map((g) => {
    let j, o;
    if ("extras" in g && g.extras)
      j = Et.map((y) => lt(g.extras?.banding?.sides?.[y], "-")).join(Y), o = yt.map((y) => lt(g.extras?.finish?.faces?.[y], "-")).join(Y);
    else {
      const y = g;
      j = ["y1", "y2", "x1", "x2"].map((s) => lt(y.banding?.[s], "-")).join(Y), o = yt.map((s) => lt(y.finish?.faces?.[s], "-")).join(Y);
    }
    return [
      C(g.l),
      C(g.w),
      C(g.t) || "-",
      g?.material?.toUpperCase() || "-",
      C(g.q),
      g.name || "-",
      j,
      o
    ];
  });
  H(f, {
    startY: c,
    head: [K],
    body: J,
    margin: W,
    headStyles: D,
    styles: N
  }), c = f.lastAutoTable.finalY + nt, f.setFontSize(14), f.text(a("pdf.stock_requirements"), 10, c), c += Q, K = [
    a("woodwork.length"),
    a("woodwork.width"),
    a("woodwork.thickness"),
    a("woodwork.material"),
    a("woodwork.quantity")
    // 'Cost'
  ];
  const $ = F.stock.map((g) => [
    C(g.l),
    C(g.w),
    C(g.t) || "-",
    g?.material?.toUpperCase() || "-",
    C(g.q)
    // stock.cost
  ]);
  if (H(f, {
    startY: c,
    head: [K],
    body: $,
    margin: W,
    headStyles: D,
    styles: N
  }), c = f.lastAutoTable.finalY + nt, F.metadata.totalRollLength > 0) {
    f.setFontSize(14), f.text(a("pdf.roll_requirements"), 10, c), c += Q, K = [
      a("woodwork.name"),
      a("woodwork.material"),
      a("woodwork.length")
    ];
    const g = F.stock.map((j) => [
      j?.name?.toUpperCase() || "-",
      j?.material?.toUpperCase() || "-",
      C(j.analysis.rollLength)
    ]);
    H(f, {
      startY: c,
      head: [K],
      body: g,
      margin: W,
      headStyles: D,
      styles: N
    }), c = f.lastAutoTable.finalY + nt;
  }
  if (v && Object.values(v)) {
    f.setFontSize(14), f.text(a("pdf.hardware"), 10, c), c += Q;
    const g = Object.values(v).map((j) => [
      j.name.toUpperCase(),
      C(j.q)
      // item.totalCost.toFixed( 2 )
    ]);
    H(f, {
      startY: c,
      head: [[a("pdf.item"), a("woodwork.quantity")]],
      body: g,
      margin: W,
      headStyles: D,
      styles: N
    }), c = f.lastAutoTable.finalY + nt;
  }
  f.setFontSize(14), f.text(a("pdf.totals"), 10, c), c += Q;
  const V = [
    [a("pdf.total_parts"), C(F.metadata.totalPartsProduced)],
    [a("pdf.part_area"), C(F.metadata.totalPartArea)],
    [a("pdf.total_stock_required"), C(F.metadata.totalUsedStock)],
    [a("pdf.total_banding_length"), C(F.metadata.totalBandingLength)],
    [a("pdf.total_finish_area"), C(F.metadata.totalFinishArea)],
    [a("pdf.total_roll_length"), C(F.metadata.totalRollLength)]
  ];
  if (H(f, {
    startY: c,
    body: V,
    margin: W,
    headStyles: D,
    styles: N
  }), c = f.lastAutoTable.finalY + nt, window?.smartcutImages?.length) {
    f.addPage();
    let g = 10;
    f.setFontSize(14), f.text(a("pdf.images"), 10, g), g += Q;
    const j = window.smartcutImages.flatMap((o, e) => o.metadata.map((y) => [
      e + 1,
      y.newName
    ]));
    H(f, {
      startY: g,
      body: j,
      head: [[a("pdf.part_index"), a("pdf.file_name")]],
      margin: W,
      headStyles: D,
      styles: N
    });
  }
  return f.output("datauristring");
}, $e = {
  key: 0,
  class: "debug"
}, Ce = !1, Oe = /* @__PURE__ */ _e({
  __name: "WordPress",
  setup(a) {
    const F = vt(() => import("./FormulaPricing-EqdUi8JJ.js")), v = vt(() => import("./ObjectViewer-CykR8qB-.js")), C = vt(() => import("./Notices-CJT9Dpvh.js")), { inputShapes: f } = ue(), { addNotice: c } = pe(), J = "production", $ = {}, V = {}, g = U(null);
    let j, o, e;
    const y = {
      banding: null,
      finish: null
    };
    let s = null, w = [], l = null, m = {};
    const b = U(!1), T = U("manual"), z = U(""), u = be([]), p = ye(() => u.value), k = U(null), h = U(!0), A = U(null), P = U(!1), q = U(null);
    ve("calculator", () => q.value);
    const I = (t) => {
      b.value && console.log("SmartCut -", ...t);
    }, E = (t) => {
      console.error(`SmartCut - ${t}`);
    }, at = (t = !0) => {
      P.value = !0, ["checkout", "intro_text", "offcuts", "banding_key"].forEach((r) => Z(r, "block")), Jt() && Z("pricing_table", "table"), t ? it(!0) : pt(), M();
    }, rt = (t = !0, n = !0) => {
      P.value = !1, ["checkout", "intro_text", "offcuts", "banding_key", "pricing_table"].forEach((i) => Z(i, "none")), n === !0 ? Pt() : n === !1 && M(), it ? it() : t === !1 && pt();
    }, it = (t = !1) => {
      Z("quantity", "inline-block"), $.quantity.readOnly = t;
    }, pt = () => {
      P.value !== !1 && (dt(1), Z("quantity", "none"), $.quantity.readOnly = !0);
    }, Pt = () => {
      if (!$.cart_button) {
        E("Cart button not found");
        return;
      }
      $.cart_button.disabled = !1;
    }, M = () => {
      if (P.value !== !1) {
        if (!$.cart_button) {
          E("Cart button not found");
          return;
        }
        $.cart_button.disabled = !0;
      }
    }, Ot = () => {
      E("Validation error"), M();
    }, dt = (t, n = 0) => {
      if (I(["setting cart quantity", t]), !$.quantity) {
        E("Quantity field not found when trying to set");
        return;
      }
      $.quantity.value = t.toFixed(n), console.assert($.quantity.value === t.toFixed(n), "Quantity field value not set correctly");
    }, Lt = (t) => {
      I(["setting variation price", t]);
      const n = document.querySelector(".woocommerce-variation-price .smartcut-price-selector");
      n && (n.innerText = R(t)), g.value = t;
    }, Vt = (t = !1) => {
      const n = t ? k.value?.display_price ?? 0 : g.value ?? k.value?.display_price ?? 0;
      return console.log("getCurrentVariationPrice", g.value, k.value?.display_price), typeof n == "string" ? parseFloat(n) : n;
    }, Bt = () => {
      if (!window?.smartcutConfig) {
        E("SmartCut config not found");
        return;
      }
      const t = window.smartcutConfig;
      e = t.settings;
      const n = Ft(B(window, ["smartcutConfig", "banding_data"])), r = Ft(B(window, ["smartcutConfig", "finish_data"])), i = (O) => {
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
      }, { cutType: S, cutPreference: _ } = i(e.cut_preference), x = {
        stockType: e.stock_type,
        bladeWidth: e.blade_width,
        cutType: S,
        cutPreference: _,
        stackHeight: e.stack_height || 100,
        guillotineOptions: {
          strategy: "efficiency",
          maxPhase: 0,
          headCuts: !1,
          limitStripDimensions: !1
        }
      }, d = {
        apiVersion: 3,
        debug: e.debug,
        emitAPIResult: !1,
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
      b.value = d.debug;
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
      h.value = Ct(), h.value ? it(!0) : pt(), s.type === "variable" ? rt(!1, !1) : at(h.value);
      const X = {
        type: s.type,
        stock: u.value.map((O) => O.toData()),
        variations: w ?? null,
        saw: x,
        options: d,
        banding: n,
        finish: r,
        machining: L
      };
      X.type === "variable" && (I(["setting variable product form listeners"]), jQuery(function(O) {
        O(".variations_form").on("reset_data", () => rt(!1, !1)).on("found_variation", (ae, re) => Xt(ae, re));
      }));
      const ct = {
        product: s,
        selectedVariation: k,
        inputs: V,
        elements: $,
        inputType: T,
        formatPrice: R,
        getCurrentVariationPrice: Vt,
        setInputValue: _t,
        setCartQuantity: dt,
        setVariationPrice: Lt,
        isExtraEnabled: ht,
        isQuantityPricing: Ct,
        isMachiningEnabled: Tt,
        isSurchargeEnabled: zt,
        getTotalBandingPrice: Nt,
        getTotalFinishPrice: Dt,
        getTotalMachiningPrice: Wt,
        getInputValue: Kt,
        enableAddToCart: Pt,
        log: I,
        error: E
      }, bt = xe({
        pricing_strategy: e.pricing_strategy,
        number_format: e.number_format,
        unit_system: e.unit_system,
        cut_length_price: e.cut_length_price,
        per_part_price: e.per_part_price,
        surcharge: e.surcharge,
        surcharge_type: e.surcharge_type,
        enable_offcut_pricing: e.enable_offcut_pricing,
        offcut_min_length: e.offcut_min_length,
        offcut_min_width: e.offcut_min_width
      }, ct);
      j = bt.calculatePrice, o = bt.resetPricing, we(() => {
        q.value && q.value.init(X);
      });
    }, Mt = (t) => {
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
      }, s.multiple_sizes || (s.l || E("product 'length' attribute not available"), s.w || E("product 'width' attribute not available"));
    }, Ut = (t) => {
      T.value = B(window, ["smartcutConfig", "settings", "enable_formula"]) === !0 ? "formula" : "manual", z.value = B(window, ["smartcutConfig", "settings", "formula_url"]), I([`Input type: ${T.value}`]), m = {
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
        return E("checkout iframe not found");
      if (!$.quantity)
        return E("quantity field not found");
      if (!$.cart_button)
        return E("cart button not found");
      $.quantity.readOnly = !0, M();
    }, Ht = () => ({
      w1: e.stock_trim_x1 ?? 0,
      w2: e.stock_trim_x2 ?? 0,
      l1: e.stock_type === "linear" ? 0 : e.stock_trim_y1 ?? 0,
      l2: e.stock_type === "linear" ? 0 : e.stock_trim_y2 ?? 0
    }), G = (t = null, n = null, r = null, i = null, S = null) => {
      let _;
      if (S && typeof S == "object") {
        _ = [];
        for (const [d, L] of Object.entries(S))
          d !== "attribute_size" && d !== "attribute_thickness" && _.push(`${d.replace("attribute_", "")}: ${L}`);
        _ = _.join(" - ");
      }
      const x = {
        name: s.stock_name,
        l: t,
        w: n,
        t: r,
        grain: e.stock_grain,
        cost: parseFloat(i?.toString() || "0"),
        trim: Ht(),
        allowExactFitShapes: !0,
        notes: _
      };
      return new ie(x, e.numberFormat || "decimal");
    }, Qt = () => {
      if (s?.stock_name || E("product name not specified"), u.value = [], s.multiple_sizes)
        for (const t of s.size) {
          if (!ot(t)) continue;
          const [n, r] = t.split("x"), i = G(
            parseFloat(n),
            parseFloat(r),
            s?.t,
            s.price
          );
          u.value.push(i);
        }
      else
        u.value.push(G(
          s.l,
          s.w,
          s?.t,
          s?.price
        ));
    }, St = (t, n) => {
      const r = t.split(".");
      return r[0] = r[0].replace(/\B(?=(\d{3})+(?!\d))/g, n), r.join(".");
    }, R = (t = 0, n = "") => {
      if (!t)
        return n ? xt("0.00") : "0.00";
      typeof t == "string" && (t = parseFloat(t));
      const r = t.toFixed(m.number_of_decimals).replace(".", m.decimal_separator), i = St(r, m.thousands_separator);
      return n ? xt(i) : i;
    }, Yt = (t) => {
      if (t == null) return "";
      typeof t == "string" && (t = parseFloat(t));
      const r = t % 1 !== 0 ? m.number_of_decimals : 0, i = t.toFixed(r).replace(".", m.decimal_separator);
      return St(i, m.thousands_separator);
    }, xt = (t) => {
      switch (m.currency_position) {
        case "left":
          return `${m.currency_symbol}${t}`;
        case "right":
          return `${t}${m.currency_symbol}`;
        default:
          return `${m.currency_symbol}${t}`;
      }
    }, st = (t) => {
      const n = (r) => ce(le(r), 100).replace("|", "_");
      return Array.isArray(t) ? t.map(n).join(",") : n(t);
    }, Ft = (t) => {
      if (!t) return null;
      const n = {
        labels: [],
        pricing: {},
        displayNames: {}
      }, r = Object.values(t);
      for (const i of r)
        i?.variations ? (n.labels.push(...Object.keys(i.options)), Object.values(i.variations).forEach((S) => {
          const { options: _ } = S, x = Object.values(_).map((d) => st(d)).join("|");
          n.pricing[x] = parseInt(S.price);
        })) : i?.options && Object.keys(i.options).forEach((S) => {
          const _ = st(S);
          n.pricing[_] = parseInt(i.price), i.name && (n.displayNames[_] = i.name);
        });
      return n.labels.length || n.labels.push("type"), n;
    }, mt = (t, n) => {
      if (!n.length || !At(y, [t])) return null;
      const r = B(y, [t]);
      if (!se(r)) return null;
      const S = Object.values(r).map((_) => _?.variations ? Object.values(_.variations).map((x) => (x.type = "variable", x)) : (_.type = "simple", _)).flat().find((_) => {
        let x;
        return _.type === "simple" ? x = Object.keys(_.options) : x = Object.values(_.options), x ? x.every((d, L) => st(d) === st(n[L])) : !1;
      });
      return S?.price ? parseFloat(S.price) : null;
    }, Dt = (t) => {
      let n = 0;
      if (typeof t == "object") {
        for (let [r, i] of Object.entries(t)) {
          typeof i == "string" && (i = parseFloat(i));
          const S = r.split("|"), _ = mt("finish", S);
          if (_ === null) continue;
          const d = Number(i) / 1e6 * parseFloat(_.toString());
          n += d;
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
          const S = r.split("|"), _ = mt("banding", S);
          if (_ === null) continue;
          const x = i / (e.unit_system === "imperial" ? 12 : 1e3) * parseFloat(_.toString());
          n += x;
        }
        if ("min_banding_charge" in e) {
          const r = parseFloat(e?.min_banding_charge);
          if (r > 0 && n > 0 && n < r)
            return r;
        }
      }
      return n;
    }, Wt = (t) => (l.holes ?? 0) * (t.metadata.numHoles ?? 0) + (l.corners ?? 0) * (t.metadata.numCorners ?? 0), Z = (t, n) => {
      t in $ && $[t]?.style && ($[t].style.display = n);
    }, _t = (t, n) => {
      gt(t) ? V[t].value = n : E(`Attempting to set input but key '${t}' does not exist`);
    }, Kt = (t) => {
      if (gt(t))
        return V[t].value;
    }, gt = (t) => t in V && V[t] instanceof HTMLInputElement, $t = () => {
      dt(1), M(), o();
      for (const t in V)
        t !== "smartcut-hardware-price" && _t(t, null);
    }, Ct = () => {
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
      if (At(e, ["enable", t]) && B(e, ["enable", t]) === !1)
        return !1;
      const n = B(y, [t]);
      return !!(n && Object.values(n).length);
    }, Tt = () => e.enable_machining === !0, zt = () => !(e?.surcharge_type === "none" || !e?.surcharge || e.surcharge === "0.00"), Jt = () => !!(e.pricing_strategy === "full_stock_plus_cut_length" || e.pricing_strategy === "full_stock_plus_num_parts" || e.pricing_strategy === "full_stock_plus_part_perimeter" || e.pricing_strategy === "part_area" || e.pricing_strategy === "roll_length" || zt() || ht("banding") || ht("finish") || Tt()), Gt = (t) => {
      let n = t?.attributes?.attribute_size;
      return n || (n = s?.size), n;
    }, ot = (t) => /\d+x\d+/.test(t), Zt = () => {
      window.smartcutConfig.input_fields.forEach((t) => {
        const n = t.replaceAll("_", "-");
        V[n] = document.getElementById(n);
      });
    }, Xt = (t, n) => {
      $t(), k.value = n, I(["variation selected", n.attributes]), u.value = [];
      const r = B(n, ["attributes", "attribute_thickness"]) ?? null;
      if (s.selected_thickness = r, f.value.forEach((i) => {
        i.t = ft({ v: r });
      }), s.multiple_sizes) {
        const i = Gt(n);
        if (I([`variation found with size: ${i} & thickness: ${r}`]), !i)
          return rt(!1), E("The size of this multiple size product could not be found");
        if (Array.isArray(i) ? at(h.value) : ot(i) ? rt(!0, !0) : at(h.value), w?.length) {
          let S;
          const _ = r;
          let x = n.display_price;
          Array.isArray(i) ? S = i.map((d) => ({
            size: d,
            l: d.split("x")[0],
            w: d.split("x")[1],
            t: _,
            price: x
          })) : S = w.filter((d) => ot(d?.attributes?.size) ? r === (d?.attributes?.thickness ?? null) : !1).map((d) => {
            const L = d?.attributes?.size.split("x")[0] ?? null, X = d?.attributes?.size.split("x")[1] ?? null;
            let ct = 0;
            return n.display_price || (ct = w.find((O) => ot(O.attributes?.size) && O.attributes?.thickness === d?.attributes?.thickness && O.attributes?.size === d?.attributes?.size && O.display_price > 0).display_price), I([
              `size attribute: '${d?.attributes?.size}'`,
              `price for thickness ${r}, dimensions: ${L}x${X} is ${x}`
            ]), {
              size: d?.attributes?.size,
              l: L,
              w: X,
              t: _,
              price: x || ct
            };
          }), P.value === !0 && S.forEach((d) => {
            const L = G(
              d.l,
              d.w,
              d.t,
              d.price,
              n?.attributes
            );
            u.value.push(L);
          });
        }
      } else {
        if (!w.some((i) => "thickness" in i.attributes))
          u.value.push(G(
            s.l,
            s.w,
            r,
            n.display_price,
            n?.attributes
          ));
        else {
          const i = w.find((S) => S.attributes?.thickness === r);
          if (!i) return E(`variation not found for thickness ${r}`);
          u.value.push(G(
            s.l,
            s.w,
            r,
            i.price,
            n?.attributes
          ));
        }
        at(h.value);
      }
    }, te = async (t) => {
      $t(), I(["result event received", t]);
      const n = await j(t);
      if (!n.success) {
        console.error(n.error);
        return;
      }
      const r = e.minimum_cut_to_size_price ?? 0;
      if (r > 0 && (n.totalPrice ?? 0) < r) {
        M(), c({
          message: `A minimum cut-to-size order of ${R(r)} is required. Your order total is ${R(n.totalPrice ?? 0)}.`,
          type: "warning"
        });
        return;
      }
      await ee(t);
    }, ee = async (t) => {
      const r = Fe(de, t, A.value, Yt).split(",")[1], i = new oe();
      i.file("order-summary.pdf", r);
      const S = await i.generateAsync({ type: "blob" }), _ = new File([S], "order-summary.zip", { type: "application/zip" });
      if (!gt("smartcut-order-summary")) return;
      const x = V["smartcut-order-summary"].closest("form");
      if (!x) return;
      const d = new DataTransfer();
      d.items.add(_);
      const L = x.querySelector('[name="smartcut_order_summary"]');
      L instanceof HTMLInputElement && (L.files = d.files);
    }, ne = (t, n) => {
      M(), t && (A.value = Pe(t)), _t("smartcut-hardware-price", n ?? 0);
    };
    return ge(() => {
      console.log("💥 Powered by https://smartcut.dev", window?.smartcutConfig?.version), I(["Launching WordPress checkout..."]), y.banding = B(window, ["smartcutConfig", "banding_data"]), y.finish = B(window, ["smartcutConfig", "finish_data"]), l = B(window, ["smartcutConfig", "machining_pricing"]), w = B(window, ["smartcutConfig", "variations"]), Rt(), Zt(), Mt(window.smartcutConfig), Ut(window.smartcutConfig), Bt(), Qt(), [
        "div.quantity > input.plus",
        "div.quantity > input.minus",
        "div.quantity .qty-plus",
        "div.quantity .qty-minus"
      ].forEach((r) => {
        const i = document.querySelector(r);
        i && (i.style.display = "none");
      });
      const n = new CustomEvent("smartcut/ready");
      window.dispatchEvent(n), I(["Wordpress checkout ready"]);
    }), (t, n) => (ut(), It(ke, null, [
      kt(tt(C), { position: "top-left" }),
      tt(J) === "development" && Ce ? (ut(), It("div", $e, [
        n[0] || (n[0] = he("div", null, "WP - developer information", -1)),
        kt(tt(v), {
          data: [u.value],
          paths: ["stock"]
        }, null, 8, ["data"]),
        kt(tt(v), {
          data: [u.value.map((r) => r.trim)],
          paths: ["stock trim"]
        }, null, 8, ["data"])
      ])) : wt("", !0),
      T.value === "formula" && z.value ? (ut(), jt(tt(F), {
        key: 1,
        ref: "formulapricing",
        "format-price": R,
        url: z.value,
        debug: b.value,
        onHardwareResult: ne,
        onPanelResult: M
      }, null, 8, ["url", "debug"])) : wt("", !0),
      T.value === "manual" || T.value === "formula" && z.value ? (ut(), jt(fe, {
        key: 2,
        ref_key: "calculator",
        ref: q,
        readonly: T.value === "formula",
        debug: b.value,
        "input-stock": p.value,
        "find-extras-price": mt,
        "format-price": R,
        "input-type": T.value,
        onLog: I,
        onError: E,
        onInputsChanged: M,
        onValidationError: Ot,
        onResult: te
      }, null, 8, ["readonly", "debug", "input-stock", "input-type"])) : wt("", !0)
    ], 64));
  }
});
export {
  Oe as default
};

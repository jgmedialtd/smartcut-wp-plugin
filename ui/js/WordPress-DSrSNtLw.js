import { c as ft, M as se, a as vt, F as oe, g as V, I as ce, b as zt, o as le } from "./result.zod-B05sXwuC.js";
import { J as ue } from "./vendor-jszip-CrvM3pe8.js";
import { t as fe, b as pe } from "./i18n-DT7wACvc.js";
import { c as de, d as me, u as _e } from "./EcommerceCalculator-jfzcy_Dy.js";
import { t as ge } from "./i18n-Ck7sLK64.js";
import { E as he, a as D } from "./vendor-jspdf-zXVbrxOb.js";
import { d as be, o as ye, a as It, b as ut, g as yt, e as kt, j as jt, u as nt, h as wt, f as ke, K as we, r as N, c as ve, F as Pe, n as Se, L as xe, B as Fe } from "./vendor-vue-BJlZsQnE.js";
function at(a, l) {
  return l === "area" ? a === "imperial" ? 144 : 1e6 : a === "imperial" ? 12 : 1e3;
}
const Ot = ["banding", "finish", "cutLength", "perPart", "partArea", "offcutArea", "rollLength", "surcharge", "machining", "stock", "custom"], Ae = (a) => Ot.includes(a);
function $e(a, l) {
  const p = (o) => {
    l.log?.(o);
  }, T = (o) => (l.error?.(o), { success: !1, error: o }), _ = () => {
    for (const o of Ot) c(o, 0);
  }, c = (o, e) => {
    p(["setting price", o, e]);
    const { inputs: I, elements: s, setInputValue: S, formatPrice: u } = l;
    if (isNaN(e)) throw new Error("Price must be a number");
    if (!Ae(o)) return;
    const w = {
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
    w?.hidden && I[w.hidden] && (p(["setting hidden price", w.hidden, e]), S(w.hidden, e)), w?.visible && s[w.visible] && (s[w.visible].innerText = u(e));
  }, X = (o, e, I) => {
    if (!o?.offcuts?.length) return 0;
    const s = o.offcuts.filter((h) => {
      const w = Math.max(h.l, h.w), C = Math.min(h.l, h.w);
      return w >= (a.offcut_min_length || 0) && C >= (a.offcut_min_width || 0);
    });
    if (s.length === 0) return 0;
    const S = a.offcut_pricing_mode || "percentage";
    let u = 0;
    switch (S) {
      case "free":
        u = 0, p(["offcut pricing mode: free, price = $0"]);
        break;
      case "fixed":
        u = a.offcut_fixed_price || 0, p([`offcut pricing mode: fixed, price = ${u}`]);
        break;
      default: {
        const h = (a.offcut_pricing_percentage ?? 100) / 100, w = /* @__PURE__ */ new Map();
        for (const C of s) {
          const E = C.stockId;
          E && (w.has(E) || w.set(E, []), w.get(E).push(C));
        }
        for (const [C, E] of w) {
          const d = o.stock?.find((b) => b.id === C);
          if (!d || !d.cost) continue;
          const g = d.l * d.w;
          if (g === 0) continue;
          const v = E.reduce((b, j) => b + j.l * j.w * (j.q || 1), 0);
          u += v / g * ft({ v: d.cost }) * h;
        }
        u === 0 && s.length > 0 && (u = s.reduce((d, g) => d + g.l * g.w * (g.q || 1), 0) / e * I * h), p([`offcut pricing mode: percentage (${h * 100}%), price = ${u}`]);
        break;
      }
    }
    return u;
  }, $ = (o) => {
    const { product: e, getCurrentVariationPrice: I, isQuantityPricing: s, enableAddToCart: S, setCartQuantity: u } = l;
    let h = e?.price || I(!0) || 0;
    typeof h == "string" && (h = parseFloat(h));
    const w = a.unit_system === "imperial" ? "feet" : "meters", E = {
      full_stock: (g) => {
        if (p(["calculating cost by full sheet"]), !s()) {
          const v = g.metadata.totalStockCost;
          return c("stock", v), v;
        }
        return s() && u(g.metadata.totalUsedStock), 0;
      },
      part_area: (g) => {
        p([`calculating cost by part area in square ${w}`]);
        const v = at(a.unit_system, "area");
        let b = 0;
        for (const x of g.stock) {
          const z = ft({ v: x.cost });
          if (!z) continue;
          const F = x.l * x.w;
          if (F === 0) continue;
          const A = x.analysis?.partArea || 0;
          A > 0 && (b += A / F * z, p([`stock ${x.id}: (${A} / ${F}) * ${z} = ${A / F * z}`]));
        }
        if (b === 0 && g.metadata.totalPartArea > 0 && h > 0) {
          const x = g.metadata.totalPartArea / v;
          b = x * h, p([`fallback: part area price in square ${w} is ${x} (part area) * ${h} (product price) = ${b}`]);
        }
        c("partArea", b);
        let j = b;
        if (a?.enable_offcut_pricing && g?.offcuts) {
          const x = X(g, v, h);
          c("offcutArea", x), j += x;
        }
        if (p([`calculated total price as ${j}`]), s()) {
          const x = g.metadata.totalPartArea / v;
          return p([`setting cart quantity to ${x}`]), u(x, 2), 0;
        } else
          return j;
      },
      cut_length: (g) => {
        p([`calculating cost by cut length in  ${w}`]);
        const v = at(a.unit_system, "length"), b = g.metadata.totalCutLength / v;
        return u(b, 2), 0;
      },
      full_stock_plus_cut_length: (g) => {
        p(["calculating cost by full sheet plus cut length"]);
        let v = 0;
        const b = g.metadata.totalStockCost;
        c("stock", b), v = b, s() && u(g.metadata.totalUsedStock);
        const j = at(a.unit_system, "length");
        let z = g.metadata.totalCutLength / j * a.cut_length_price;
        const F = a.min_cut_length_charge ?? 0;
        return F > 0 && z > 0 && (z = Math.max(z, F)), c("cutLength", z), v + z;
      },
      full_stock_plus_num_parts: (g) => {
        p(["calculating cost by full sheet plus number of parts"]);
        let v = 0;
        const b = g.metadata.totalStockCost;
        c("stock", b), v = b, s() && u(g.metadata.totalUsedStock);
        const j = g.metadata.totalPartsProduced * a.per_part_price;
        return c("perPart", j), v + j;
      },
      full_stock_plus_part_perimeter: (g) => {
        p(["calculating cost by full stock plus part perimeter"]);
        let v = 0;
        const b = g.metadata.totalStockCost;
        c("stock", b), v = b, s() && u(g.metadata.totalUsedStock);
        const j = at(a.unit_system, "length");
        let z = g.inputs.parts.reduce(
          (A, R) => A + 2 * (R.l + R.w) * (R.q ?? 1),
          0
        ) / j * a.cut_length_price;
        const F = a.min_cut_length_charge ?? 0;
        return F > 0 && z > 0 && (z = Math.max(z, F)), c("cutLength", z), v + z;
      },
      roll_length: (g) => {
        p([`calculating cost by roll length in ${w}`]);
        const v = at(a.unit_system, "length"), b = g.stock.reduce((j, x) => j + x.analysis.rollLength / v * ft({ v: x.cost }), 0);
        return c("rollLength", b), b;
      }
    }[a.pricing_strategy], d = E(o);
    return S(), d;
  }, L = (o) => {
    const {
      isExtraEnabled: e,
      isMachiningEnabled: I,
      isSurchargeEnabled: s,
      inputType: S,
      getTotalBandingPrice: u,
      getTotalFinishPrice: h,
      getTotalMachiningPrice: w,
      getInputValue: C
    } = l;
    let E = 0;
    if (e("banding") && o.metadata.bandingLengthByType) {
      const d = u(o.metadata.bandingLengthByType);
      c("banding", d), E += d;
    }
    if (e("finish") && o.metadata.finishAreaByType) {
      const d = h(o.metadata.finishAreaByType);
      c("finish", d), E += d;
    }
    if (S.value === "formula") {
      const d = parseFloat(C("smartcut-hardware-price"));
      isNaN(d) || (E += d);
    }
    if (I()) {
      const d = w(o);
      c("machining", d), E += d;
    }
    if (s() && a.surcharge) {
      const d = a.surcharge_type === "per_sheet" ? parseFloat(a.surcharge.toString()) * o.metadata.totalUsedStock : parseFloat(a.surcharge.toString());
      c("surcharge", d), p(["added surcharge", d]), E += d;
    }
    return E;
  }, y = (o) => {
    const { getInputValue: e, setInputValue: I } = l, s = {
      "smartcut-job-id": o.jobId,
      "smartcut-dimensions": o.parts.map((S) => `${S.l}x${S.w} [${S.q}]`).join(", "),
      "smartcut-total-cut-length": o.metadata.totalCutLength,
      "smartcut-part-area": o.metadata.totalPartArea,
      "smartcut-total-cuts": o.metadata.totalCuts,
      "smartcut-total-parts": o.metadata.totalPartsProduced,
      "smartcut-machining": o.metadata.hasMachining
    };
    if (Object.entries(s).forEach(([S, u]) => {
      e(S) !== void 0 && I(S, u);
    }), e("smartcut-stock-summary") !== void 0) {
      const S = o.stock.map((u) => `${u.l}x${u.w}${u.t ? "x" + u.t : ""} [${u.q}]`).join(", ");
      I("smartcut-stock-summary", S);
    }
  };
  return {
    calculatePrice: async (o) => {
      _();
      const { isQuantityPricing: e, selectedVariation: I, setVariationPrice: s, setCartQuantity: S } = l;
      if (!o?.jobId)
        return T("No job ID provided");
      e() || S(1);
      let u = $(o);
      const h = L(o);
      if (u += h, e()) {
        const w = o.metadata.totalUsedStock, C = u / w;
        c("custom", C);
      } else {
        if (!o.metadata.totalStockCost)
          return T("Total stock cost not returned for a multiple size product");
        p([`total cost is ${u}`]), c("custom", u);
      }
      return I.value && s(u), y(o), { success: !0, totalPrice: u };
    },
    resetPricing: _
  };
}
const qt = ["L1", "L2", "W1", "W2"], Te = ["A", "B"], Ce = ["y1", "y2", "x1", "x2"];
function Ee(a) {
  return "extras" in a && a.extras ? se.map((l, p) => ({ label: qt[p], value: vt(a.extras?.banding?.sides?.[l], "-") })).filter(({ value: l }) => l !== "-").map(({ label: l, value: p }) => `${l}: ${p}`).join(`
`) || "-" : Ce.map((l, p) => ({ label: qt[p], value: vt(a.banding?.[l], "-") })).filter(({ value: l }) => l !== "-").map(({ label: l, value: p }) => `${l}: ${p}`).join(`
`) || "-";
}
function ze(a) {
  return oe.map((l, p) => ({ label: Te[p], value: vt(a.extras?.finish?.faces?.[l] ?? a.finish?.faces?.[l], "-") })).filter(({ value: l }) => l !== "-").map(({ label: l, value: p }) => `${l}: ${p}`).join(`
`) || "-";
}
const W = 5, rt = 10, K = {
  fillColor: [7, 59, 76],
  fontStyle: "normal"
}, G = {
  fontSize: 9
}, J = { left: 10 };
let Z = [];
const Ie = (a, l, p, T = (_) => _.toString()) => {
  const _ = new he({ orientation: "landscape" });
  let c = 10;
  _.setFontSize(20), _.text(a("pdf.order_summary"), 10, c), c += 15, _.setFontSize(14), _.text(`${a("general.your")} ${a("woodwork.part")}`, 10, c), c += W, Z = [
    a("woodwork.length"),
    a("woodwork.width"),
    a("woodwork.thickness"),
    a("woodwork.material"),
    a("woodwork.code"),
    a("woodwork.quantity"),
    a("woodwork.name"),
    a("woodwork.banding"),
    a("woodwork.finish")
  ];
  const X = l.parts.map((y) => [
    T(y.l),
    T(y.w),
    T(y.t) || "-",
    y?.material?.toUpperCase() || "-",
    y?.code || "-",
    T(y.q),
    y.name || "-",
    Ee(y),
    ze(y)
  ]);
  D(_, {
    startY: c,
    head: [Z],
    body: X,
    margin: J,
    headStyles: K,
    styles: G
  }), c = _.lastAutoTable.finalY + rt, _.setFontSize(14), _.text(a("pdf.stock_requirements"), 10, c), c += W, Z = [
    a("woodwork.length"),
    a("woodwork.width"),
    a("woodwork.thickness"),
    a("woodwork.material"),
    a("woodwork.code"),
    a("woodwork.quantity")
    // 'Cost'
  ];
  const $ = l.stock.map((y) => [
    T(y.l),
    T(y.w),
    T(y.t) || "-",
    y?.material?.toUpperCase() || "-",
    y?.code || "-",
    T(y.q)
    // stock.cost
  ]);
  if (D(_, {
    startY: c,
    head: [Z],
    body: $,
    margin: J,
    headStyles: K,
    styles: G
  }), c = _.lastAutoTable.finalY + rt, l.metadata.totalRollLength > 0) {
    _.setFontSize(14), _.text(a("pdf.roll_requirements"), 10, c), c += W, Z = [
      a("woodwork.name"),
      a("woodwork.material"),
      a("woodwork.length")
    ];
    const y = l.stock.map((B) => [
      B?.name?.toUpperCase() || "-",
      B?.material?.toUpperCase() || "-",
      T(B.analysis.rollLength)
    ]);
    D(_, {
      startY: c,
      head: [Z],
      body: y,
      margin: J,
      headStyles: K,
      styles: G
    }), c = _.lastAutoTable.finalY + rt;
  }
  if (p && Object.values(p)) {
    _.setFontSize(14), _.text(a("pdf.hardware"), 10, c), c += W;
    const y = Object.values(p).map((B) => [
      B.name.toUpperCase(),
      T(B.q)
      // item.totalCost.toFixed( 2 )
    ]);
    D(_, {
      startY: c,
      head: [[a("pdf.item"), a("woodwork.quantity")]],
      body: y,
      margin: J,
      headStyles: K,
      styles: G
    }), c = _.lastAutoTable.finalY + rt;
  }
  _.setFontSize(14), _.text(a("pdf.totals"), 10, c), c += W;
  const L = [
    [a("pdf.total_parts"), T(l.metadata.totalPartsProduced)],
    [a("pdf.part_area"), T(l.metadata.totalPartArea)],
    [a("pdf.total_stock_required"), T(l.metadata.totalUsedStock)],
    [a("pdf.total_banding_length"), T(l.metadata.totalBandingLength)],
    [a("pdf.total_finish_area"), T(l.metadata.totalFinishArea)],
    [a("pdf.total_roll_length"), T(l.metadata.totalRollLength)]
  ];
  if (D(_, {
    startY: c,
    body: L,
    margin: J,
    headStyles: K,
    styles: G
  }), c = _.lastAutoTable.finalY + rt, window?.smartcutImages?.length) {
    _.addPage();
    let y = 10;
    _.setFontSize(14), _.text(a("pdf.images"), 10, y), y += W;
    const B = window.smartcutImages.flatMap((o, e) => o.metadata.map((I) => [
      e + 1,
      I.newName
    ]));
    D(_, {
      startY: y,
      body: B,
      head: [[a("pdf.part_index"), a("pdf.file_name")]],
      margin: J,
      headStyles: K,
      styles: G
    });
  }
  return _.output("datauristring");
}, je = {
  key: 0,
  class: "debug"
}, qe = !1, He = /* @__PURE__ */ be({
  __name: "WordPress",
  setup(a) {
    const l = wt(() => import("./FormulaPricing-D121pJ0s.js")), p = wt(() => import("./EcommerceCalculator-jfzcy_Dy.js").then((t) => t.O)), T = wt(() => import("./Notices-CDXnmOSG.js")), { inputShapes: _ } = de(), { addNotice: c } = _e(), X = "production", $ = {}, L = {}, y = N(null);
    let B, o, e;
    const I = {
      banding: null,
      finish: null
    };
    let s = null, S = [], u = null, h = {};
    const w = N(!1), C = N("manual"), E = N(""), d = we([]), g = ve(() => d.value), v = N(null), b = N(!0), j = N(null), x = N(!1), z = N(null);
    xe("calculator", () => z.value);
    const F = (t) => {
      w.value && console.log("SmartCut -", ...t);
    }, A = (t) => {
      console.error(`SmartCut - ${t}`);
    }, R = (t = !0) => {
      x.value = !0, ["checkout", "intro_text", "offcuts", "banding_key"].forEach((r) => et(r, "block")), Jt() && et("pricing_table", "table"), t ? st(!0) : pt(), U();
    }, it = (t = !0, n = !0) => {
      x.value = !1, ["checkout", "intro_text", "offcuts", "banding_key", "pricing_table"].forEach((i) => et(i, "none")), n === !0 ? Pt() : n === !1 && U(), st ? st() : t === !1 && pt();
    }, st = (t = !1) => {
      et("quantity", "inline-block"), $.quantity.readOnly = t;
    }, pt = () => {
      x.value !== !1 && (dt(1), et("quantity", "none"), $.quantity.readOnly = !0);
    }, Pt = () => {
      if (!$.cart_button) {
        A("Cart button not found");
        return;
      }
      $.cart_button.disabled = !1;
    }, U = () => {
      if (x.value !== !1) {
        if (!$.cart_button) {
          A("Cart button not found");
          return;
        }
        $.cart_button.disabled = !0;
      }
    }, Lt = () => {
      A("Validation error"), U();
    }, dt = (t, n = 0) => {
      if (F(["setting cart quantity", t]), !$.quantity) {
        A("Quantity field not found when trying to set");
        return;
      }
      $.quantity.value = t.toFixed(n), console.assert($.quantity.value === t.toFixed(n), "Quantity field value not set correctly");
    }, Bt = (t) => {
      F(["setting variation price", t]);
      const n = document.querySelector(".woocommerce-variation-price .smartcut-price-selector");
      n && (n.innerText = Y(t)), y.value = t;
    }, Vt = (t = !1) => {
      const n = t ? v.value?.display_price ?? 0 : y.value ?? v.value?.display_price ?? 0;
      return console.log("getCurrentVariationPrice", y.value, v.value?.display_price), typeof n == "string" ? parseFloat(n) : n;
    }, Mt = () => {
      if (!window?.smartcutConfig) {
        A("SmartCut config not found");
        return;
      }
      const t = window.smartcutConfig;
      e = t.settings;
      const n = Ft(V(window, ["smartcutConfig", "banding_data"])), r = Ft(V(window, ["smartcutConfig", "finish_data"])), i = (q) => {
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
      }, { cutType: P, cutPreference: m } = i(e.cut_preference), k = {
        stockType: e.stock_type,
        bladeWidth: e.blade_width,
        cutType: P,
        cutPreference: m,
        stackHeight: e.stack_height || 100,
        guillotineOptions: {
          strategy: "efficiency",
          maxPhase: 0,
          headCuts: !1,
          limitStripDimensions: !1
        }
      }, f = {
        apiVersion: 3,
        debug: e.debug,
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
      w.value = f.debug;
      const O = {
        numberFormat: e.number_format,
        decimalPlaces: 2,
        fractionRoundTo: 0,
        faces: {
          enabled: e.machining_sides
        },
        holes: {
          enabled: e.machining_holes,
          defaultDiameter: e.machining_holes_default_diameter,
          diameters: e.machining_holes_diameters.split(",").map((q) => q.trim()).filter(Boolean),
          minDiameter: e.machining_holes_min_diameter,
          maxDiameter: e.machining_holes_max_diameter,
          enableDepth: e.machining_holes_depth,
          depths: e.machining_holes_depths.split(",").map((q) => q.trim()).filter(Boolean),
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
      b.value = $t(), b.value ? st(!0) : pt(), s.type === "variable" ? it(!1, !1) : R(b.value);
      const M = {
        type: s.type,
        stock: d.value.map((q) => q.toData()),
        variations: S ?? null,
        saw: k,
        options: f,
        banding: n,
        finish: r,
        machining: O
      };
      M.type === "variable" && (F(["setting variable product form listeners"]), jQuery(function(q) {
        const Et = q(".variations_form");
        Et.on("reset_data", () => it(!1, !1)).on("found_variation", (bt, ie) => te(bt, ie));
        const ht = Et.find("select");
        ht.length > 0 && ht.toArray().every((bt) => bt.value !== "") && ht.last().trigger("change");
      }));
      const Q = {
        product: s,
        selectedVariation: v,
        inputs: L,
        elements: $,
        inputType: C,
        formatPrice: Y,
        getCurrentVariationPrice: Vt,
        setInputValue: _t,
        setCartQuantity: dt,
        setVariationPrice: Bt,
        isExtraEnabled: gt,
        isQuantityPricing: $t,
        isMachiningEnabled: Tt,
        isSurchargeEnabled: Ct,
        getTotalBandingPrice: Wt,
        getTotalFinishPrice: Dt,
        getTotalMachiningPrice: Kt,
        getInputValue: Gt,
        enableAddToCart: Pt,
        log: F,
        error: A
      }, H = $e({
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
      }, Q);
      B = H.calculatePrice, o = H.resetPricing, Se(() => {
        z.value && z.value.init(M);
      });
    }, Ut = (t) => {
      const n = t?.multiple_sizes === !0;
      s = {
        type: t?.product_type,
        multiple_sizes: n,
        size: t?.size ? t.size.split(" | ") : [],
        l: !n && t?.l ? parseFloat(t.l) : null,
        w: !n && t?.w ? parseFloat(t.w) : null,
        t: t?.t ?? null,
        price: t?.price ? parseFloat(t.price) : null,
        stock_name: t?.stock_sku || t.stock_name,
        stock_sku: t?.stock_sku || null
      }, s.multiple_sizes || (s.l || A("product 'length' attribute not available"), s.w || A("product 'width' attribute not available"));
    }, Nt = (t) => {
      C.value = V(window, ["smartcutConfig", "settings", "enable_formula"]) === !0 ? "formula" : "manual", E.value = V(window, ["smartcutConfig", "settings", "formula_url"]), F([`Input type: ${C.value}`]), h = {
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
        return A("checkout iframe not found");
      if (!$.quantity)
        return A("quantity field not found");
      if (!$.cart_button)
        return A("cart button not found");
      $.quantity.readOnly = !0, U();
    }, Ht = () => ({
      w1: e.stock_trim_x1 ?? 0,
      w2: e.stock_trim_x2 ?? 0,
      l1: e.stock_type === "linear" ? 0 : e.stock_trim_y1 ?? 0,
      l2: e.stock_type === "linear" ? 0 : e.stock_trim_y2 ?? 0
    }), tt = (t = null, n = null, r = null, i = null, P = null) => {
      let m;
      if (P && typeof P == "object") {
        m = [];
        for (const [f, O] of Object.entries(P))
          f !== "attribute_size" && f !== "attribute_thickness" && m.push(`${f.replace("attribute_", "")}: ${O}`);
        m = m.join(" - ");
      }
      const k = {
        name: s.stock_name,
        code: s.stock_sku || void 0,
        l: t,
        w: n,
        t: r,
        grain: e.stock_grain,
        cost: parseFloat(i?.toString() || "0"),
        trim: Ht(),
        allowExactFitShapes: !0,
        notes: m
      };
      return new ce(k, e.numberFormat || "decimal");
    }, Yt = () => {
      if (s?.stock_name || A("product name not specified"), d.value = [], s.multiple_sizes)
        for (const t of s.size) {
          if (!lt(t)) continue;
          const [n, r] = t.split("x"), i = tt(
            parseFloat(n),
            parseFloat(r),
            s?.t,
            s.price
          );
          d.value.push(i);
        }
      else
        d.value.push(tt(
          s.l,
          s.w,
          s?.t,
          s?.price
        ));
    }, St = (t, n) => {
      const r = t.split(".");
      return r[0] = r[0].replace(/\B(?=(\d{3})+(?!\d))/g, n), r.join(".");
    }, Y = (t = 0, n = "") => {
      if (!t)
        return n ? xt("0.00") : "0.00";
      typeof t == "string" && (t = parseFloat(t));
      const r = t.toFixed(h.number_of_decimals).replace(".", h.decimal_separator), i = St(r, h.thousands_separator);
      return n ? xt(i) : i;
    }, Qt = (t) => {
      if (t == null) return "";
      typeof t == "string" && (t = parseFloat(t));
      const r = t % 1 !== 0 ? h.number_of_decimals : 0, i = t.toFixed(r).replace(".", h.decimal_separator);
      return St(i, h.thousands_separator);
    }, xt = (t) => {
      switch (h.currency_position) {
        case "left":
          return `${h.currency_symbol}${t}`;
        case "right":
          return `${t}${h.currency_symbol}`;
        default:
          return `${h.currency_symbol}${t}`;
      }
    }, ot = (t) => {
      const n = (r) => fe(pe(r), 100).replace("|", "_");
      return Array.isArray(t) ? t.map(n).join(",") : n(t);
    }, Ft = (t) => {
      if (!t) return null;
      const n = {
        labels: [],
        pricing: {},
        displayNames: {}
      }, r = Object.values(t);
      for (const i of r)
        i?.variations ? (n.labels.push(...Object.keys(i.options)), Object.values(i.variations).forEach((P) => {
          const { options: m } = P, k = Object.values(m), f = k.map((M) => ot(M)), O = f.join("|");
          n.pricing[O] = parseInt(P.price), k.forEach((M, Q) => {
            const H = f[Q], q = Array.isArray(M) ? M.join(", ") : String(M);
            H && q && !n.displayNames[H] && (n.displayNames[H] = q);
          });
        })) : i?.options && Object.entries(i.options).forEach(([P, m]) => {
          const k = ot(P);
          n.pricing[k] = parseInt(i.price);
          const f = i.name || (typeof m == "string" ? m : Array.isArray(m) ? m.join(", ") : "");
          f && (n.displayNames[k] = f);
        });
      return n.labels.length || n.labels.push("type"), n;
    }, mt = (t, n) => {
      if (!n.length || !zt(I, [t])) return null;
      const r = V(I, [t]);
      if (!le(r)) return null;
      const P = Object.values(r).map((m) => m?.variations ? Object.values(m.variations).map((k) => (k.type = "variable", k)) : (m.type = "simple", m)).flat().find((m) => {
        let k;
        return m.type === "simple" ? k = Object.keys(m.options) : k = Object.values(m.options), k ? k.every((f, O) => ot(f) === ot(n[O])) : !1;
      });
      return P?.price ? parseFloat(P.price) : null;
    }, Dt = (t) => {
      let n = 0;
      if (typeof t == "object") {
        for (let [r, i] of Object.entries(t)) {
          typeof i == "string" && (i = parseFloat(i));
          const P = r.split("|"), m = mt("finish", P);
          if (m === null) continue;
          const f = Number(i) / 1e6 * parseFloat(m.toString());
          n += f;
        }
        if ("min_finish_charge" in e) {
          const r = parseFloat(e?.min_finish_charge);
          if (r > 0 && n > 0 && n < r)
            return r;
        }
      }
      return n;
    }, Wt = (t) => {
      let n = 0;
      if (typeof t == "object") {
        for (let [r, i] of Object.entries(t)) {
          typeof i == "string" && (i = parseFloat(i));
          const P = r.split("|"), m = mt("banding", P);
          if (m === null) continue;
          const k = i / (e.unit_system === "imperial" ? 12 : 1e3) * parseFloat(m.toString());
          n += k;
        }
        if ("min_banding_charge" in e) {
          const r = parseFloat(e?.min_banding_charge);
          if (r > 0 && n > 0 && n < r)
            return r;
        }
      }
      return n;
    }, Kt = (t) => (u.holes ?? 0) * (t.metadata.numHoles ?? 0) + (u.corners ?? 0) * (t.metadata.numCorners ?? 0), et = (t, n) => {
      t in $ && $[t]?.style && ($[t].style.display = n);
    }, _t = (t, n) => {
      ct(t) ? L[t].value = n : A(`Attempting to set input but key '${t}' does not exist`);
    }, Gt = (t) => {
      if (ct(t))
        return L[t].value;
    }, ct = (t) => t in L && L[t] instanceof HTMLInputElement, At = () => {
      dt(1), U(), o();
      for (const t in L)
        t !== "smartcut-hardware-price" && _t(t, null);
    }, $t = () => {
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
    }, gt = (t) => {
      if (zt(e, ["enable", t]) && V(e, ["enable", t]) === !1)
        return !1;
      const n = V(I, [t]);
      return !!(n && Object.values(n).length);
    }, Tt = () => e.enable_machining === !0, Ct = () => !(e?.surcharge_type === "none" || !e?.surcharge || e.surcharge === "0.00"), Jt = () => !!(e.pricing_strategy === "full_stock_plus_cut_length" || e.pricing_strategy === "full_stock_plus_num_parts" || e.pricing_strategy === "full_stock_plus_part_perimeter" || e.pricing_strategy === "part_area" || e.pricing_strategy === "roll_length" || Ct() || gt("banding") || gt("finish") || Tt()), Zt = (t) => {
      let n = t?.attributes?.attribute_size;
      return n || (n = s?.size), n;
    }, lt = (t) => /\d+x\d+/.test(t), Xt = () => {
      window.smartcutConfig.input_fields.forEach((t) => {
        const n = t.replaceAll("_", "-");
        L[n] = document.getElementById(n);
      });
    }, te = (t, n) => {
      At(), v.value = n, F(["variation selected", n.attributes]), d.value = [];
      const r = V(n, ["attributes", "attribute_thickness"]) ?? null;
      if (s.selected_thickness = r, _.value.forEach((i) => {
        i.t = ft({ v: r });
      }), s.multiple_sizes) {
        const i = Zt(n);
        if (F([`variation found with size: ${i} & thickness: ${r}`]), !i)
          return it(!1), A("The size of this multiple size product could not be found");
        if (Array.isArray(i) ? R(b.value) : lt(i) ? it(!0, !0) : R(b.value), S?.length) {
          let P;
          const m = r;
          let k = n.display_price;
          Array.isArray(i) ? P = i.map((f) => ({
            size: f,
            l: f.split("x")[0],
            w: f.split("x")[1],
            t: m,
            price: k
          })) : P = S.filter((f) => lt(f?.attributes?.size) ? r === (f?.attributes?.thickness ?? null) : !1).map((f) => {
            const O = f?.attributes?.size.split("x")[0] ?? null, M = f?.attributes?.size.split("x")[1] ?? null;
            let Q = 0;
            return n.display_price || (Q = S.find((q) => lt(q.attributes?.size) && q.attributes?.thickness === f?.attributes?.thickness && q.attributes?.size === f?.attributes?.size && q.display_price > 0).display_price), F([
              `size attribute: '${f?.attributes?.size}'`,
              `price for thickness ${r}, dimensions: ${O}x${M} is ${k}`
            ]), {
              size: f?.attributes?.size,
              l: O,
              w: M,
              t: m,
              price: k || Q
            };
          }), x.value === !0 && P.forEach((f) => {
            const O = tt(
              f.l,
              f.w,
              f.t,
              f.price,
              n?.attributes
            );
            d.value.push(O);
          });
        }
      } else {
        if (!S.some((i) => "thickness" in i.attributes))
          d.value.push(tt(
            s.l,
            s.w,
            r,
            n.display_price,
            n?.attributes
          ));
        else {
          const i = S.find((P) => P.attributes?.thickness === r);
          if (!i) return A(`variation not found for thickness ${r}`);
          d.value.push(tt(
            s.l,
            s.w,
            r,
            i.price,
            n?.attributes
          ));
        }
        R(b.value);
      }
    }, ee = (t) => {
      if (!ct("smartcut-api-result")) return;
      const n = L["smartcut-api-result"].closest("form");
      if (!n) return;
      const r = JSON.stringify(t.apiResultV3), i = new Blob([r], { type: "application/json" }), P = new File([i], "api-result.json", { type: "application/json" }), m = new DataTransfer();
      m.items.add(P);
      const k = n.querySelector('[name="smartcut_api_result"]');
      k instanceof HTMLInputElement && (k.files = m.files);
    }, ne = async (t) => {
      const r = Ie(ge, t, j.value, Qt).split(",")[1], i = new ue();
      i.file("order-summary.pdf", r);
      const P = await i.generateAsync({ type: "blob" }), m = new File([P], "order-summary.zip", { type: "application/zip" });
      if (!ct("smartcut-order-summary")) return;
      const k = L["smartcut-order-summary"].closest("form");
      if (!k) return;
      const f = new DataTransfer();
      f.items.add(m);
      const O = k.querySelector('[name="smartcut_order_summary"]');
      O instanceof HTMLInputElement && (O.files = f.files);
    }, ae = async (t) => {
      At(), F(["result event received", t]);
      const n = await B(t);
      if (!n.success) {
        console.error(n.error);
        return;
      }
      const r = e.minimum_cut_to_size_price ?? 0;
      if (r > 0 && (n.totalPrice ?? 0) < r) {
        U(), c({
          message: `A minimum cut-to-size order of ${Y(r)} is required. Your order total is ${Y(n.totalPrice ?? 0)}.`,
          type: "warning"
        });
        return;
      }
      await ne(t), t.apiResultV3 && ee(t);
    }, re = (t, n) => {
      U(), t && (j.value = Fe(t)), _t("smartcut-hardware-price", n ?? 0);
    };
    return ye(() => {
      console.log("💥 Powered by https://smartcut.dev", window?.smartcutConfig?.version), F(["Launching WordPress checkout..."]), I.banding = V(window, ["smartcutConfig", "banding_data"]), I.finish = V(window, ["smartcutConfig", "finish_data"]), u = V(window, ["smartcutConfig", "machining_pricing"]), S = V(window, ["smartcutConfig", "variations"]), Rt(), Xt(), Ut(window.smartcutConfig), Nt(window.smartcutConfig), Mt(), Yt(), [
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
    }), (t, n) => (ut(), It(Pe, null, [
      yt(nt(T), { position: "top-left" }),
      nt(X) === "development" && qe ? (ut(), It("div", je, [
        n[0] || (n[0] = ke("div", null, "WP - developer information", -1)),
        yt(nt(p), {
          data: [d.value],
          paths: ["stock"]
        }, null, 8, ["data"]),
        yt(nt(p), {
          data: [d.value.map((r) => r.trim)],
          paths: ["stock trim"]
        }, null, 8, ["data"])
      ])) : kt("", !0),
      C.value === "formula" && E.value ? (ut(), jt(nt(l), {
        key: 1,
        ref: "formulapricing",
        "format-price": Y,
        url: E.value,
        debug: w.value,
        onHardwareResult: re,
        onPanelResult: U
      }, null, 8, ["url", "debug"])) : kt("", !0),
      C.value === "manual" || C.value === "formula" && E.value ? (ut(), jt(me, {
        key: 2,
        ref_key: "calculator",
        ref: z,
        readonly: C.value === "formula",
        "input-stock": g.value,
        "find-extras-price": mt,
        "format-price": Y,
        "input-type": C.value,
        onLog: F,
        onError: A,
        onInputsChanged: U,
        onValidationError: Lt,
        onResult: ae
      }, null, 8, ["readonly", "input-stock", "input-type"])) : kt("", !0)
    ], 64));
  }
});
export {
  He as default
};

import { c as ut, M as Ct, F as bt, g as ot, a as L, I as re, b as zt, o as ie } from "./result.zod-Jpm7fspL.js";
import { J as se } from "./vendor-jszip-BunSI5We.js";
import { t as oe, b as ce } from "./i18n-DT7wACvc.js";
import { a as le, E as ue } from "./EcommerceCalculator-CvSy71zh.js";
import { t as fe } from "./i18n-CYUWq18B.js";
import { E as de, a as H } from "./vendor-jspdf-BVlDd7Ff.js";
import { d as pe, o as me, a as At, b as ct, g as yt, e as kt, j as It, u as X, h as wt, f as _e, D as ge, r as M, c as he, F as be, n as ye, E as ke, B as we } from "./vendor-vue-XczpOw2V.js";
function lt(a, F) {
  return F === "area" ? a === "imperial" ? 144 : 1e6 : a === "imperial" ? 12 : 1e3;
}
const jt = ["banding", "finish", "cutLength", "perPart", "partArea", "offcutArea", "rollLength", "surcharge", "machining", "stock", "custom"], ve = (a) => jt.includes(a);
function Pe(a, F) {
  const v = (t) => {
    F.log?.(t);
  }, E = (t) => (F.error?.(t), { success: !1, error: t }), l = () => {
    for (const t of jt) c(t, 0);
  }, c = (t, h) => {
    v(["setting price", t, h]);
    const { inputs: s, elements: m, setInputValue: T, formatPrice: o } = F;
    if (isNaN(h)) throw new Error("Price must be a number");
    if (!ve(t)) return;
    const d = {
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
    }[t];
    d?.hidden && s[d.hidden] && (v(["setting hidden price", d.hidden, h]), T(d.hidden, h)), d?.visible && m[d.visible] && (m[d.visible].innerText = o(h));
  }, $ = (t, h, s) => {
    if (!t?.offcuts?.length) return 0;
    const m = t.offcuts.filter((y) => {
      const d = Math.max(y.l, y.w), I = Math.min(y.l, y.w);
      return d >= (a.offcut_min_length || 0) && I >= (a.offcut_min_width || 0);
    });
    if (m.length === 0) return 0;
    const T = a.offcut_pricing_mode || "percentage";
    let o = 0;
    switch (T) {
      case "free":
        o = 0, v(["offcut pricing mode: free, price = $0"]);
        break;
      case "fixed":
        o = a.offcut_fixed_price || 0, v([`offcut pricing mode: fixed, price = ${o}`]);
        break;
      default: {
        const y = (a.offcut_pricing_percentage ?? 100) / 100, d = /* @__PURE__ */ new Map();
        for (const I of m) {
          const g = I.stockId;
          g && (d.has(g) || d.set(g, []), d.get(g).push(I));
        }
        for (const [I, g] of d) {
          const b = t.stock?.find((P) => P.id === I);
          if (!b || !b.cost) continue;
          const u = b.l * b.w;
          if (u === 0) continue;
          const k = g.reduce((P, z) => P + z.l * z.w * (z.q || 1), 0);
          o += k / u * ut({ v: b.cost }) * y;
        }
        o === 0 && m.length > 0 && (o = m.reduce((b, u) => b + u.l * u.w * (u.q || 1), 0) / h * s * y), v([`offcut pricing mode: percentage (${y * 100}%), price = ${o}`]);
        break;
      }
    }
    return o;
  }, V = (t) => {
    const { product: h, getCurrentVariationPrice: s, isQuantityPricing: m, enableAddToCart: T, setCartQuantity: o } = F;
    let y = h?.price || s(!0) || 0;
    typeof y == "string" && (y = parseFloat(y));
    const d = a.unit_system === "imperial" ? "feet" : "meters", g = {
      full_stock: (u) => {
        if (v(["calculating cost by full sheet"]), !m()) {
          const k = u.metadata.totalStockCost;
          return c("stock", k), k;
        }
        return m() && o(u.metadata.totalUsedStock), 0;
      },
      part_area: (u) => {
        v([`calculating cost by part area in square ${d}`]);
        const k = lt(a.unit_system, "area");
        let P = 0;
        for (const S of u.stock) {
          const A = ut({ v: S.cost });
          if (!A) continue;
          const C = S.l * S.w;
          if (C === 0) continue;
          const B = S.analysis?.partArea || 0;
          B > 0 && (P += B / C * A, v([`stock ${S.id}: (${B} / ${C}) * ${A} = ${B / C * A}`]));
        }
        if (P === 0 && u.metadata.totalPartArea > 0 && y > 0) {
          const S = u.metadata.totalPartArea / k;
          P = S * y, v([`fallback: part area price in square ${d} is ${S} (part area) * ${y} (product price) = ${P}`]);
        }
        c("partArea", P);
        let z = P;
        if (a?.enable_offcut_pricing && u?.offcuts) {
          const S = $(u, k, y);
          c("offcutArea", S), z += S;
        }
        if (v([`calculated total price as ${z}`]), m()) {
          const S = u.metadata.totalPartArea / k;
          return v([`setting cart quantity to ${S}`]), o(S, 2), 0;
        } else
          return z;
      },
      cut_length: (u) => {
        v([`calculating cost by cut length in  ${d}`]);
        const k = lt(a.unit_system, "length"), P = u.metadata.totalCutLength / k;
        return o(P, 2), 0;
      },
      full_stock_plus_cut_length: (u) => {
        v(["calculating cost by full sheet plus cut length"]);
        let k = 0;
        const P = u.metadata.totalStockCost;
        c("stock", P), k = P, m() && o(u.metadata.totalUsedStock);
        const z = lt(a.unit_system, "length"), A = u.metadata.totalCutLength / z * a.cut_length_price;
        return c("cutLength", A), k + A;
      },
      full_stock_plus_num_parts: (u) => {
        v(["calculating cost by full sheet plus number of parts"]);
        let k = 0;
        const P = u.metadata.totalStockCost;
        c("stock", P), k = P, m() && o(u.metadata.totalUsedStock);
        const z = u.metadata.totalPartsProduced * a.per_part_price;
        return c("perPart", z), k + z;
      },
      roll_length: (u) => {
        v([`calculating cost by roll length in ${d}`]);
        const k = lt(a.unit_system, "length"), P = u.stock.reduce((z, S) => z + S.analysis.rollLength / k * ut({ v: S.cost }), 0);
        return c("rollLength", P), P;
      }
    }[a.pricing_strategy], b = g(t);
    return T(), b;
  }, R = (t) => {
    const {
      isExtraEnabled: h,
      isMachiningEnabled: s,
      isSurchargeEnabled: m,
      inputType: T,
      getTotalBandingPrice: o,
      getTotalFinishPrice: y,
      getTotalMachiningPrice: d,
      getInputValue: I
    } = F;
    let g = 0;
    if (h("banding") && t.metadata.bandingLengthByType) {
      const b = o(t.metadata.bandingLengthByType);
      c("banding", b), g += b;
    }
    if (h("finish") && t.metadata.finishAreaByType) {
      const b = y(t.metadata.finishAreaByType);
      c("finish", b), g += b;
    }
    if (T.value === "formula") {
      const b = parseFloat(I("smartcut-hardware-price"));
      isNaN(b) || (g += b);
    }
    if (s()) {
      const b = d(t);
      c("machining", b), g += b;
    }
    if (m() && a.surcharge) {
      const b = a.surcharge_type === "per_sheet" ? parseFloat(a.surcharge.toString()) * t.metadata.totalUsedStock : parseFloat(a.surcharge.toString());
      c("surcharge", b), v(["added surcharge", b]), g += b;
    }
    return g;
  }, _ = (t) => {
    const { getInputValue: h, setInputValue: s } = F, m = {
      "smartcut-job-id": t.jobId,
      "smartcut-dimensions": t.parts.map((T) => `${T.l}x${T.w} [${T.q}]`).join(", "),
      "smartcut-total-cut-length": t.metadata.totalCutLength,
      "smartcut-part-area": t.metadata.totalPartArea,
      "smartcut-total-cuts": t.metadata.totalCuts,
      "smartcut-total-parts": t.metadata.totalPartsProduced,
      "smartcut-machining": t.metadata.hasMachining
    };
    if (Object.entries(m).forEach(([T, o]) => {
      h(T) !== void 0 && s(T, o);
    }), h("smartcut-stock-summary") !== void 0) {
      const T = t.stock.map((o) => `${o.l}x${o.w}${o.t ? "x" + o.t : ""} [${o.q}]`).join(", ");
      s("smartcut-stock-summary", T);
    }
  };
  return {
    calculatePrice: async (t) => {
      l();
      const { isQuantityPricing: h, selectedVariation: s, setVariationPrice: m, setCartQuantity: T } = F;
      if (!t?.jobId)
        return E("No job ID provided");
      h() || T(1);
      let o = V(t);
      const y = R(t);
      if (o += y, h()) {
        const d = t.metadata.totalUsedStock, I = o / d;
        c("custom", I);
      } else {
        if (!t.metadata.totalStockCost)
          return E("Total stock cost not returned for a multiple size product");
        v([`total cost is ${o}`]), c("custom", o);
      }
      return s.value && m(o), _(t), { success: !0, totalPrice: o };
    },
    resetPricing: l
  };
}
const Q = 5, tt = 10, Y = ",", D = {
  fillColor: [7, 59, 76],
  fontStyle: "normal"
}, N = {
  fontSize: 9
}, W = { left: 10 };
let K = [];
const Se = (a, F, v, E = (l) => l.toString()) => {
  const l = new de({ orientation: "landscape" });
  let c = 10;
  l.setFontSize(20), l.text(a("pdf.order_summary"), 10, c), c += 15, l.setFontSize(14), l.text(`${a("general.your")} ${a("woodwork.part")}`, 10, c), c += Q, K = [
    a("woodwork.length"),
    a("woodwork.width"),
    a("woodwork.thickness"),
    a("woodwork.material"),
    a("woodwork.quantity"),
    a("woodwork.name"),
    `${a("woodwork.banding")} (${Ct.join(Y)})`,
    `${a("woodwork.finish")} (${bt.join(Y)})`
  ];
  const $ = F.parts.map((_) => {
    let j, t;
    if ("extras" in _ && _.extras)
      j = Ct.map((s) => ot(_.extras?.banding?.sides?.[s], "-")).join(Y), t = bt.map((s) => ot(_.extras?.finish?.faces?.[s], "-")).join(Y);
    else {
      const s = _;
      j = ["y1", "y2", "x1", "x2"].map((m) => ot(s.banding?.[m], "-")).join(Y), t = bt.map((m) => ot(s.finish?.faces?.[m], "-")).join(Y);
    }
    return [
      E(_.l),
      E(_.w),
      E(_.t) || "-",
      _?.material?.toUpperCase() || "-",
      E(_.q),
      _.name || "-",
      j,
      t
    ];
  });
  H(l, {
    startY: c,
    head: [K],
    body: $,
    margin: W,
    headStyles: D,
    styles: N
  }), c = l.lastAutoTable.finalY + tt, l.setFontSize(14), l.text(a("pdf.stock_requirements"), 10, c), c += Q, K = [
    a("woodwork.length"),
    a("woodwork.width"),
    a("woodwork.thickness"),
    a("woodwork.material"),
    a("woodwork.quantity")
    // 'Cost'
  ];
  const V = F.stock.map((_) => [
    E(_.l),
    E(_.w),
    E(_.t) || "-",
    _?.material?.toUpperCase() || "-",
    E(_.q)
    // stock.cost
  ]);
  if (H(l, {
    startY: c,
    head: [K],
    body: V,
    margin: W,
    headStyles: D,
    styles: N
  }), c = l.lastAutoTable.finalY + tt, F.metadata.totalRollLength > 0) {
    l.setFontSize(14), l.text(a("pdf.roll_requirements"), 10, c), c += Q, K = [
      a("woodwork.name"),
      a("woodwork.material"),
      a("woodwork.length")
    ];
    const _ = F.stock.map((j) => [
      j?.name?.toUpperCase() || "-",
      j?.material?.toUpperCase() || "-",
      E(j.analysis.rollLength)
    ]);
    H(l, {
      startY: c,
      head: [K],
      body: _,
      margin: W,
      headStyles: D,
      styles: N
    }), c = l.lastAutoTable.finalY + tt;
  }
  if (v && Object.values(v)) {
    l.setFontSize(14), l.text(a("pdf.hardware"), 10, c), c += Q;
    const _ = Object.values(v).map((j) => [
      j.name.toUpperCase(),
      E(j.q)
      // item.totalCost.toFixed( 2 )
    ]);
    H(l, {
      startY: c,
      head: [[a("pdf.item"), a("woodwork.quantity")]],
      body: _,
      margin: W,
      headStyles: D,
      styles: N
    }), c = l.lastAutoTable.finalY + tt;
  }
  l.setFontSize(14), l.text(a("pdf.totals"), 10, c), c += Q;
  const R = [
    [a("pdf.total_parts"), E(F.metadata.totalPartsProduced)],
    [a("pdf.part_area"), E(F.metadata.totalPartArea)],
    [a("pdf.total_stock_required"), E(F.metadata.totalUsedStock)],
    [a("pdf.total_banding_length"), E(F.metadata.totalBandingLength)],
    [a("pdf.total_finish_area"), E(F.metadata.totalFinishArea)],
    [a("pdf.total_roll_length"), E(F.metadata.totalRollLength)]
  ];
  if (H(l, {
    startY: c,
    body: R,
    margin: W,
    headStyles: D,
    styles: N
  }), c = l.lastAutoTable.finalY + tt, window?.smartcutImages?.length) {
    l.addPage();
    let _ = 10;
    l.setFontSize(14), l.text(a("pdf.images"), 10, _), _ += Q;
    const j = window.smartcutImages.flatMap((t, h) => t.metadata.map((s) => [
      h + 1,
      s.newName
    ]));
    H(l, {
      startY: _,
      body: j,
      head: [[a("pdf.part_index"), a("pdf.file_name")]],
      margin: W,
      headStyles: D,
      styles: N
    });
  }
  return l.output("datauristring");
}, xe = {
  key: 0,
  class: "debug"
}, Fe = !1, je = /* @__PURE__ */ pe({
  __name: "WordPress",
  setup(a) {
    const F = wt(() => import("./FormulaPricing-Ce4Ltv_C.js")), v = wt(() => import("./ObjectViewer-DkGCIFpQ.js")), E = wt(() => import("./Notices-Du1WXYEB.js")), { inputShapes: l } = le(), c = "production", $ = {}, V = {}, R = M(null);
    let _, j, t;
    const h = {
      banding: null,
      finish: null
    };
    let s = null, m = [], T = null, o = {};
    const y = M(!1), d = M("manual"), I = M(""), g = ge([]), b = he(() => g.value), u = M(null), k = M(!0), P = M(null), z = M(!1), S = M(null);
    ke("calculator", () => S.value);
    const A = (e) => {
      y.value && console.log("SmartCut -", ...e);
    }, C = (e) => {
      console.error(`SmartCut - ${e}`);
    }, B = (e = !0) => {
      z.value = !0, ["checkout", "intro_text", "offcuts", "banding_key"].forEach((r) => G(r, "block")), Kt() && G("pricing_table", "table"), e ? nt(!0) : ft(), U();
    }, et = (e = !0, n = !0) => {
      z.value = !1, ["checkout", "intro_text", "offcuts", "banding_key", "pricing_table"].forEach((i) => G(i, "none")), n === !0 ? vt() : n === !1 && U(), nt ? nt() : e === !1 && ft();
    }, nt = (e = !1) => {
      G("quantity", "inline-block"), $.quantity.readOnly = e;
    }, ft = () => {
      z.value !== !1 && (dt(1), G("quantity", "none"), $.quantity.readOnly = !0);
    }, vt = () => {
      if (!$.cart_button) {
        C("Cart button not found");
        return;
      }
      $.cart_button.disabled = !1;
    }, U = () => {
      if (z.value !== !1) {
        if (!$.cart_button) {
          C("Cart button not found");
          return;
        }
        $.cart_button.disabled = !0;
      }
    }, qt = () => {
      C("Validation error"), U();
    }, dt = (e, n = 0) => {
      if (A(["setting cart quantity", e]), !$.quantity) {
        C("Quantity field not found when trying to set");
        return;
      }
      $.quantity.value = e.toFixed(n), console.assert($.quantity.value === e.toFixed(n), "Quantity field value not set correctly");
    }, Ot = (e) => {
      A(["setting variation price", e]);
      const n = document.querySelector(".woocommerce-variation-price .smartcut-price-selector");
      n && (n.innerText = at(e)), R.value = e;
    }, Vt = (e = !1) => {
      const n = e ? u.value?.display_price ?? 0 : R.value ?? u.value?.display_price ?? 0;
      return console.log("getCurrentVariationPrice", R.value, u.value?.display_price), typeof n == "string" ? parseFloat(n) : n;
    }, Lt = () => {
      if (!window?.smartcutConfig) {
        C("SmartCut config not found");
        return;
      }
      const e = window.smartcutConfig;
      t = e.settings;
      const n = xt(L(window, ["smartcutConfig", "banding_data"])), r = xt(L(window, ["smartcutConfig", "finish_data"])), i = (q) => {
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
      }, { cutType: w, cutPreference: p } = i(t.cut_preference), x = {
        stockType: t.stock_type,
        bladeWidth: t.blade_width,
        cutType: w,
        cutPreference: p,
        stackHeight: t.stack_height || 100,
        guillotineOptions: {
          strategy: "efficiency",
          maxPhase: 0,
          headCuts: !1,
          limitStripDimensions: !1
        }
      }, f = {
        apiVersion: 3,
        debug: t.debug,
        emitAPIResult: !1,
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
        resultOrientationModel: 0,
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
          imageUpload: t.enable_image_upload,
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
      y.value = f.debug;
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
      k.value = $t(), k.value ? nt(!0) : ft(), s.type === "variable" ? et(!1, !1) : B(k.value);
      const Z = {
        type: s.type,
        stock: g.value.map((q) => q.toData()),
        variations: m ?? null,
        saw: x,
        options: f,
        banding: n,
        finish: r,
        machining: O
      };
      Z.type === "variable" && (A(["setting variable product form listeners"]), jQuery(function(q) {
        q(".variations_form").on("reset_data", () => et(!1, !1)).on("found_variation", (ne, ae) => Zt(ne, ae));
      }));
      const st = {
        product: s,
        selectedVariation: u,
        inputs: V,
        elements: $,
        inputType: d,
        formatPrice: at,
        getCurrentVariationPrice: Vt,
        setInputValue: mt,
        setCartQuantity: dt,
        setVariationPrice: Ot,
        isExtraEnabled: gt,
        isQuantityPricing: $t,
        isMachiningEnabled: Tt,
        isSurchargeEnabled: Et,
        getTotalBandingPrice: Dt,
        getTotalFinishPrice: Yt,
        getTotalMachiningPrice: Nt,
        getInputValue: Wt,
        enableAddToCart: vt,
        log: A,
        error: C
      }, ht = Pe({
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
      }, st);
      _ = ht.calculatePrice, j = ht.resetPricing, ye(() => {
        S.value && S.value.init(Z);
      });
    }, Bt = (e) => {
      const n = e?.multiple_sizes === !0;
      s = {
        type: e?.product_type,
        multiple_sizes: n,
        size: e?.size ? e.size.split(" | ") : [],
        l: !n && e?.l ? parseFloat(e.l) : null,
        w: !n && e?.w ? parseFloat(e.w) : null,
        t: e?.t ?? null,
        price: e?.price ? parseFloat(e.price) : null,
        stock_name: e?.stock_sku || e.stock_name
      }, s.multiple_sizes || (s.l || C("product 'length' attribute not available"), s.w || C("product 'width' attribute not available"));
    }, Mt = (e) => {
      d.value = L(window, ["smartcutConfig", "settings", "enable_formula"]) === !0 ? "formula" : "manual", I.value = L(window, ["smartcutConfig", "settings", "formula_url"]), A([`Input type: ${d.value}`]), o = {
        thousands_separator: e?.thousands_separator,
        decimal_separator: e?.decimal_separator,
        number_of_decimals: e?.number_of_decimals,
        currency_symbol: e?.currency_symbol,
        currency_position: e?.currency_position
      };
    }, Ut = () => {
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
        $[n] = document.querySelector(r);
      if (!$.checkout)
        return C("checkout iframe not found");
      if (!$.quantity)
        return C("quantity field not found");
      if (!$.cart_button)
        return C("cart button not found");
      $.quantity.readOnly = !0, U();
    }, Rt = () => ({
      w1: t.stock_trim_x1 ?? 0,
      w2: t.stock_trim_x2 ?? 0,
      l1: t.stock_type === "linear" ? 0 : t.stock_trim_y1 ?? 0,
      l2: t.stock_type === "linear" ? 0 : t.stock_trim_y2 ?? 0
    }), J = (e = null, n = null, r = null, i = null, w = null) => {
      let p;
      if (w && typeof w == "object") {
        p = [];
        for (const [f, O] of Object.entries(w))
          f !== "attribute_size" && f !== "attribute_thickness" && p.push(`${f.replace("attribute_", "")}: ${O}`);
        p = p.join(" - ");
      }
      const x = {
        name: s.stock_name,
        l: e,
        w: n,
        t: r,
        grain: t.stock_grain,
        cost: parseFloat(i?.toString() || "0"),
        trim: Rt(),
        allowExactFitShapes: !0,
        notes: p
      };
      return new re(x, t.numberFormat || "decimal");
    }, Ht = () => {
      if (s?.stock_name || C("product name not specified"), g.value = [], s.multiple_sizes)
        for (const e of s.size) {
          if (!it(e)) continue;
          const [n, r] = e.split("x"), i = J(
            parseFloat(n),
            parseFloat(r),
            s?.t,
            s.price
          );
          g.value.push(i);
        }
      else
        g.value.push(J(
          s.l,
          s.w,
          s?.t,
          s?.price
        ));
    }, Pt = (e, n) => {
      const r = e.split(".");
      return r[0] = r[0].replace(/\B(?=(\d{3})+(?!\d))/g, n), r.join(".");
    }, at = (e = 0, n = "") => {
      if (!e)
        return n ? St("0.00") : "0.00";
      typeof e == "string" && (e = parseFloat(e));
      const r = e.toFixed(o.number_of_decimals).replace(".", o.decimal_separator), i = Pt(r, o.thousands_separator);
      return n ? St(i) : i;
    }, Qt = (e) => {
      if (e == null) return "";
      typeof e == "string" && (e = parseFloat(e));
      const r = e % 1 !== 0 ? o.number_of_decimals : 0, i = e.toFixed(r).replace(".", o.decimal_separator);
      return Pt(i, o.thousands_separator);
    }, St = (e) => {
      switch (o.currency_position) {
        case "left":
          return `${o.currency_symbol}${e}`;
        case "right":
          return `${e}${o.currency_symbol}`;
        default:
          return `${o.currency_symbol}${e}`;
      }
    }, rt = (e) => {
      const n = (r) => oe(ce(r), 100).replace("|", "_");
      return Array.isArray(e) ? e.map(n).join(",") : n(e);
    }, xt = (e) => {
      if (!e) return null;
      const n = {
        labels: [],
        pricing: {},
        displayNames: {}
      }, r = Object.values(e);
      for (const i of r)
        i?.variations ? (n.labels.push(...Object.keys(i.options)), Object.values(i.variations).forEach((w) => {
          const { options: p } = w, x = Object.values(p).map((f) => rt(f)).join("|");
          n.pricing[x] = parseInt(w.price);
        })) : i?.options && Object.keys(i.options).forEach((w) => {
          const p = rt(w);
          n.pricing[p] = parseInt(i.price), i.name && (n.displayNames[p] = i.name);
        });
      return n.labels.length || n.labels.push("type"), n;
    }, pt = (e, n) => {
      if (!n.length || !zt(h, [e])) return null;
      const r = L(h, [e]);
      if (!ie(r)) return null;
      const w = Object.values(r).map((p) => p?.variations ? Object.values(p.variations).map((x) => (x.type = "variable", x)) : (p.type = "simple", p)).flat().find((p) => {
        let x;
        return p.type === "simple" ? x = Object.keys(p.options) : x = Object.values(p.options), x ? x.every((f, O) => rt(f) === rt(n[O])) : !1;
      });
      return w?.price ? parseFloat(w.price) : null;
    }, Yt = (e) => {
      let n = 0;
      if (typeof e == "object") {
        for (let [r, i] of Object.entries(e)) {
          typeof i == "string" && (i = parseFloat(i));
          const w = r.split("|"), p = pt("finish", w);
          if (p === null) continue;
          const f = Number(i) / 1e6 * parseFloat(p.toString());
          n += f;
        }
        if ("min_finish_charge" in t) {
          const r = parseFloat(t?.min_finish_charge);
          if (r > 0 && n > 0 && n < r)
            return r;
        }
      }
      return n;
    }, Dt = (e) => {
      let n = 0;
      if (typeof e == "object") {
        for (let [r, i] of Object.entries(e)) {
          typeof i == "string" && (i = parseFloat(i));
          const w = r.split("|"), p = pt("banding", w);
          if (p === null) continue;
          const x = i / (t.unit_system === "imperial" ? 12 : 1e3) * parseFloat(p.toString());
          n += x;
        }
        if ("min_banding_charge" in t) {
          const r = parseFloat(t?.min_banding_charge);
          if (r > 0 && n > 0 && n < r)
            return r;
        }
      }
      return n;
    }, Nt = (e) => (T.holes ?? 0) * (e.metadata.numHoles ?? 0) + (T.corners ?? 0) * (e.metadata.numCorners ?? 0), G = (e, n) => {
      e in $ && $[e]?.style && ($[e].style.display = n);
    }, mt = (e, n) => {
      _t(e) ? V[e].value = n : C(`Attempting to set input but key '${e}' does not exist`);
    }, Wt = (e) => {
      if (_t(e))
        return V[e].value;
    }, _t = (e) => e in V && V[e] instanceof HTMLInputElement, Ft = () => {
      dt(1), U(), j();
      for (const e in V)
        e !== "smartcut-hardware-price" && mt(e, null);
    }, $t = () => {
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
    }, gt = (e) => {
      if (zt(t, ["enable", e]) && L(t, ["enable", e]) === !1)
        return !1;
      const n = L(h, [e]);
      return !!(n && Object.values(n).length);
    }, Tt = () => t.enable_machining === !0, Et = () => !(t?.surcharge_type === "none" || !t?.surcharge || t.surcharge === "0.00"), Kt = () => !!(t.pricing_strategy === "full_stock_plus_cut_length" || t.pricing_strategy === "full_stock_plus_num_parts" || t.pricing_strategy === "part_area" || t.pricing_strategy === "roll_length" || Et() || gt("banding") || gt("finish") || Tt()), Jt = (e) => {
      let n = e?.attributes?.attribute_size;
      return n || (n = s?.size), n;
    }, it = (e) => /\d+x\d+/.test(e), Gt = () => {
      window.smartcutConfig.input_fields.forEach((e) => {
        const n = e.replaceAll("_", "-");
        V[n] = document.getElementById(n);
      });
    }, Zt = (e, n) => {
      Ft(), u.value = n, A(["variation selected", n.attributes]), g.value = [];
      const r = L(n, ["attributes", "attribute_thickness"]) ?? null;
      if (s.selected_thickness = r, l.value.forEach((i) => {
        i.t = ut({ v: r });
      }), s.multiple_sizes) {
        const i = Jt(n);
        if (A([`variation found with size: ${i} & thickness: ${r}`]), !i)
          return et(!1), C("The size of this multiple size product could not be found");
        if (Array.isArray(i) ? B(k.value) : it(i) ? et(!0, !0) : B(k.value), m?.length) {
          let w;
          const p = r;
          let x = n.display_price;
          Array.isArray(i) ? w = i.map((f) => ({
            size: f,
            l: f.split("x")[0],
            w: f.split("x")[1],
            t: p,
            price: x
          })) : w = m.filter((f) => it(f?.attributes?.size) ? r === (f?.attributes?.thickness ?? null) : !1).map((f) => {
            const O = f?.attributes?.size.split("x")[0] ?? null, Z = f?.attributes?.size.split("x")[1] ?? null;
            let st = 0;
            return n.display_price || (st = m.find((q) => it(q.attributes?.size) && q.attributes?.thickness === f?.attributes?.thickness && q.attributes?.size === f?.attributes?.size && q.display_price > 0).display_price), A([
              `size attribute: '${f?.attributes?.size}'`,
              `price for thickness ${r}, dimensions: ${O}x${Z} is ${x}`
            ]), {
              size: f?.attributes?.size,
              l: O,
              w: Z,
              t: p,
              price: x || st
            };
          }), z.value === !0 && w.forEach((f) => {
            const O = J(
              f.l,
              f.w,
              f.t,
              f.price,
              n?.attributes
            );
            g.value.push(O);
          });
        }
      } else {
        if (!m.some((i) => "thickness" in i.attributes))
          g.value.push(J(
            s.l,
            s.w,
            r,
            n.display_price,
            n?.attributes
          ));
        else {
          const i = m.find((w) => w.attributes?.thickness === r);
          if (!i) return C(`variation not found for thickness ${r}`);
          g.value.push(J(
            s.l,
            s.w,
            r,
            i.price,
            n?.attributes
          ));
        }
        B(k.value);
      }
    }, Xt = async (e) => {
      Ft(), A(["result event received", e]);
      const n = await _(e);
      if (!n.success) {
        console.error(n.error);
        return;
      }
      await te(e);
    }, te = async (e) => {
      const r = Se(fe, e, P.value, Qt).split(",")[1], i = new se();
      i.file("order-summary.pdf", r);
      const w = await i.generateAsync({ type: "blob" }), p = new File([w], "order-summary.zip", { type: "application/zip" });
      if (!_t("smartcut-order-summary")) return;
      const x = V["smartcut-order-summary"].closest("form");
      if (!x) return;
      const f = new DataTransfer();
      f.items.add(p);
      const O = x.querySelector('[name="smartcut_order_summary"]');
      O instanceof HTMLInputElement && (O.files = f.files);
    }, ee = (e, n) => {
      U(), e && (P.value = we(e)), mt("smartcut-hardware-price", n ?? 0);
    };
    return me(() => {
      console.log("💥 Powered by https://smartcut.dev", window?.smartcutConfig?.version), A(["Launching WordPress checkout..."]), h.banding = L(window, ["smartcutConfig", "banding_data"]), h.finish = L(window, ["smartcutConfig", "finish_data"]), T = L(window, ["smartcutConfig", "machining_pricing"]), m = L(window, ["smartcutConfig", "variations"]), Ut(), Gt(), Bt(window.smartcutConfig), Mt(window.smartcutConfig), Lt(), Ht(), [
        "div.quantity > input.plus",
        "div.quantity > input.minus",
        "div.quantity .qty-plus",
        "div.quantity .qty-minus"
      ].forEach((r) => {
        const i = document.querySelector(r);
        i && (i.style.display = "none");
      });
      const n = new CustomEvent("smartcut/ready");
      window.dispatchEvent(n), A(["Wordpress checkout ready"]);
    }), (e, n) => (ct(), At(be, null, [
      yt(X(E), { position: "top-left" }),
      X(c) === "development" && Fe ? (ct(), At("div", xe, [
        n[0] || (n[0] = _e("div", null, "WP - developer information", -1)),
        yt(X(v), {
          data: [g.value],
          paths: ["stock"]
        }, null, 8, ["data"]),
        yt(X(v), {
          data: [g.value.map((r) => r.trim)],
          paths: ["stock trim"]
        }, null, 8, ["data"])
      ])) : kt("", !0),
      d.value === "formula" && I.value ? (ct(), It(X(F), {
        key: 1,
        ref: "formulapricing",
        "format-price": at,
        url: I.value,
        debug: y.value,
        onHardwareResult: ee,
        onPanelResult: U
      }, null, 8, ["url", "debug"])) : kt("", !0),
      d.value === "manual" || d.value === "formula" && I.value ? (ct(), It(ue, {
        key: 2,
        ref_key: "calculator",
        ref: S,
        readonly: d.value === "formula",
        debug: y.value,
        "input-stock": b.value,
        "find-extras-price": pt,
        "format-price": at,
        "input-type": d.value,
        onLog: A,
        onError: C,
        onInputsChanged: U,
        onValidationError: qt,
        onResult: Xt
      }, null, 8, ["readonly", "debug", "input-stock", "input-type"])) : kt("", !0)
    ], 64));
  }
});
export {
  je as default
};

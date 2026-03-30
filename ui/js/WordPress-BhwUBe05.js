import { c as ut, M as oe, a as vt, F as se, g as B, I as ce, b as zt, o as le } from "./result.zod-IZEZ_DzE.js";
import { J as ue } from "./vendor-jszip-CrvM3pe8.js";
import { t as fe, b as pe } from "./i18n-DT7wACvc.js";
import { c as de, d as me, u as _e } from "./EcommerceCalculator-Dh9Rp8oe.js";
import { t as ge } from "./i18n-Ck7sLK64.js";
import { E as he, a as N } from "./vendor-jspdf-zXVbrxOb.js";
import { d as be, o as ye, a as It, b as lt, g as yt, e as kt, j as qt, u as tt, h as wt, f as ke, K as we, r as U, c as ve, F as Pe, n as Se, L as xe, C as Fe } from "./vendor-vue-DyIrsOEK.js";
function et(a, l) {
  return l === "area" ? a === "imperial" ? 144 : 1e6 : a === "imperial" ? 12 : 1e3;
}
const Lt = ["banding", "finish", "cutLength", "perPart", "partArea", "offcutArea", "rollLength", "surcharge", "machining", "stock", "custom"], $e = (a) => Lt.includes(a);
function Te(a, l) {
  const f = (s) => {
    l.log?.(s);
  }, C = (s) => (l.error?.(s), { success: !1, error: s }), m = () => {
    for (const s of Lt) c(s, 0);
  }, c = (s, e) => {
    f(["setting price", s, e]);
    const { inputs: I, elements: o, setInputValue: P, formatPrice: u } = l;
    if (isNaN(e)) throw new Error("Price must be a number");
    if (!$e(s)) return;
    const k = {
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
    }[s];
    k?.hidden && I[k.hidden] && (f(["setting hidden price", k.hidden, e]), P(k.hidden, e)), k?.visible && o[k.visible] && (o[k.visible].innerText = u(e));
  }, G = (s, e, I) => {
    if (!s?.offcuts?.length) return 0;
    const o = s.offcuts.filter((h) => {
      const k = Math.max(h.l, h.w), A = Math.min(h.l, h.w);
      return k >= (a.offcut_min_length || 0) && A >= (a.offcut_min_width || 0);
    });
    if (o.length === 0) return 0;
    const P = a.offcut_pricing_mode || "percentage";
    let u = 0;
    switch (P) {
      case "free":
        u = 0, f(["offcut pricing mode: free, price = $0"]);
        break;
      case "fixed":
        u = a.offcut_fixed_price || 0, f([`offcut pricing mode: fixed, price = ${u}`]);
        break;
      default: {
        const h = (a.offcut_pricing_percentage ?? 100) / 100, k = /* @__PURE__ */ new Map();
        for (const A of o) {
          const E = A.stockId;
          E && (k.has(E) || k.set(E, []), k.get(E).push(A));
        }
        for (const [A, E] of k) {
          const p = s.stock?.find((b) => b.id === A);
          if (!p || !p.cost) continue;
          const _ = p.l * p.w;
          if (_ === 0) continue;
          const w = E.reduce((b, q) => b + q.l * q.w * (q.q || 1), 0);
          u += w / _ * ut({ v: p.cost }) * h;
        }
        u === 0 && o.length > 0 && (u = o.reduce((p, _) => p + _.l * _.w * (_.q || 1), 0) / e * I * h), f([`offcut pricing mode: percentage (${h * 100}%), price = ${u}`]);
        break;
      }
    }
    return u;
  }, T = (s) => {
    const { product: e, getCurrentVariationPrice: I, isQuantityPricing: o, enableAddToCart: P, setCartQuantity: u } = l;
    let h = e?.price || I(!0) || 0;
    typeof h == "string" && (h = parseFloat(h));
    const k = a.unit_system === "imperial" ? "feet" : "meters", E = {
      full_stock: (_) => {
        if (f(["calculating cost by full sheet"]), !o()) {
          const w = _.metadata.totalStockCost;
          return c("stock", w), w;
        }
        return o() && u(_.metadata.totalUsedStock), 0;
      },
      part_area: (_) => {
        f([`calculating cost by part area in square ${k}`]);
        const w = et(a.unit_system, "area");
        let b = 0;
        for (const x of _.stock) {
          const z = ut({ v: x.cost });
          if (!z) continue;
          const F = x.l * x.w;
          if (F === 0) continue;
          const $ = x.analysis?.partArea || 0;
          $ > 0 && (b += $ / F * z, f([`stock ${x.id}: (${$} / ${F}) * ${z} = ${$ / F * z}`]));
        }
        if (b === 0 && _.metadata.totalPartArea > 0 && h > 0) {
          const x = _.metadata.totalPartArea / w;
          b = x * h, f([`fallback: part area price in square ${k} is ${x} (part area) * ${h} (product price) = ${b}`]);
        }
        c("partArea", b);
        let q = b;
        if (a?.enable_offcut_pricing && _?.offcuts) {
          const x = G(_, w, h);
          c("offcutArea", x), q += x;
        }
        if (f([`calculated total price as ${q}`]), o()) {
          const x = _.metadata.totalPartArea / w;
          return f([`setting cart quantity to ${x}`]), u(x, 2), 0;
        } else
          return q;
      },
      cut_length: (_) => {
        f([`calculating cost by cut length in  ${k}`]);
        const w = et(a.unit_system, "length"), b = _.metadata.totalCutLength / w;
        return u(b, 2), 0;
      },
      full_stock_plus_cut_length: (_) => {
        f(["calculating cost by full sheet plus cut length"]);
        let w = 0;
        const b = _.metadata.totalStockCost;
        c("stock", b), w = b, o() && u(_.metadata.totalUsedStock);
        const q = et(a.unit_system, "length");
        let z = _.metadata.totalCutLength / q * a.cut_length_price;
        const F = a.min_cut_length_charge ?? 0;
        return F > 0 && z > 0 && (z = Math.max(z, F)), c("cutLength", z), w + z;
      },
      full_stock_plus_num_parts: (_) => {
        f(["calculating cost by full sheet plus number of parts"]);
        let w = 0;
        const b = _.metadata.totalStockCost;
        c("stock", b), w = b, o() && u(_.metadata.totalUsedStock);
        const q = _.metadata.totalPartsProduced * a.per_part_price;
        return c("perPart", q), w + q;
      },
      full_stock_plus_part_perimeter: (_) => {
        f(["calculating cost by full stock plus part perimeter"]);
        let w = 0;
        const b = _.metadata.totalStockCost;
        c("stock", b), w = b, o() && u(_.metadata.totalUsedStock);
        const q = et(a.unit_system, "length");
        let z = _.inputs.parts.reduce(
          ($, R) => $ + 2 * (R.l + R.w) * (R.q ?? 1),
          0
        ) / q * a.cut_length_price;
        const F = a.min_cut_length_charge ?? 0;
        return F > 0 && z > 0 && (z = Math.max(z, F)), c("cutLength", z), w + z;
      },
      roll_length: (_) => {
        f([`calculating cost by roll length in ${k}`]);
        const w = et(a.unit_system, "length"), b = _.stock.reduce((q, x) => q + x.analysis.rollLength / w * ut({ v: x.cost }), 0);
        return c("rollLength", b), b;
      }
    }[a.pricing_strategy], p = E(s);
    return P(), p;
  }, L = (s) => {
    const {
      isExtraEnabled: e,
      isMachiningEnabled: I,
      isSurchargeEnabled: o,
      inputType: P,
      getTotalBandingPrice: u,
      getTotalFinishPrice: h,
      getTotalMachiningPrice: k,
      getInputValue: A
    } = l;
    let E = 0;
    if (e("banding") && s.metadata.bandingLengthByType) {
      const p = u(s.metadata.bandingLengthByType);
      c("banding", p), E += p;
    }
    if (e("finish") && s.metadata.finishAreaByType) {
      const p = h(s.metadata.finishAreaByType);
      c("finish", p), E += p;
    }
    if (P.value === "formula") {
      const p = parseFloat(A("smartcut-hardware-price"));
      isNaN(p) || (E += p);
    }
    if (I()) {
      const p = k(s);
      c("machining", p), E += p;
    }
    if (o() && a.surcharge) {
      const p = a.surcharge_type === "per_sheet" ? parseFloat(a.surcharge.toString()) * s.metadata.totalUsedStock : parseFloat(a.surcharge.toString());
      c("surcharge", p), f(["added surcharge", p]), E += p;
    }
    return E;
  }, y = (s) => {
    const { getInputValue: e, setInputValue: I } = l, o = {
      "smartcut-job-id": s.jobId,
      "smartcut-dimensions": s.parts.map((P) => `${P.l}x${P.w} [${P.q}]`).join(", "),
      "smartcut-total-cut-length": s.metadata.totalCutLength,
      "smartcut-part-area": s.metadata.totalPartArea,
      "smartcut-total-cuts": s.metadata.totalCuts,
      "smartcut-total-parts": s.metadata.totalPartsProduced,
      "smartcut-machining": s.metadata.hasMachining
    };
    if (Object.entries(o).forEach(([P, u]) => {
      e(P) !== void 0 && I(P, u);
    }), e("smartcut-stock-summary") !== void 0) {
      const P = s.stock.map((u) => `${u.l}x${u.w}${u.t ? "x" + u.t : ""} [${u.q}]`).join(", ");
      I("smartcut-stock-summary", P);
    }
  };
  return {
    calculatePrice: async (s) => {
      m();
      const { isQuantityPricing: e, selectedVariation: I, setVariationPrice: o, setCartQuantity: P } = l;
      if (!s?.jobId)
        return C("No job ID provided");
      e() || P(1);
      let u = T(s);
      const h = L(s);
      if (u += h, e()) {
        const k = s.metadata.totalUsedStock, A = u / k;
        c("custom", A);
      } else {
        if (!s.metadata.totalStockCost)
          return C("Total stock cost not returned for a multiple size product");
        f([`total cost is ${u}`]), c("custom", u);
      }
      return I.value && o(u), y(s), { success: !0, totalPrice: u };
    },
    resetPricing: m
  };
}
const jt = ["L1", "L2", "W1", "W2"], Ce = ["A", "B"], Ae = ["y1", "y2", "x1", "x2"];
function Ee(a) {
  return "extras" in a && a.extras ? oe.map((l, f) => ({ label: jt[f], value: vt(a.extras?.banding?.sides?.[l], "-") })).filter(({ value: l }) => l !== "-").map(({ label: l, value: f }) => `${l}: ${f}`).join(`
`) || "-" : Ae.map((l, f) => ({ label: jt[f], value: vt(a.banding?.[l], "-") })).filter(({ value: l }) => l !== "-").map(({ label: l, value: f }) => `${l}: ${f}`).join(`
`) || "-";
}
function ze(a) {
  return se.map((l, f) => ({ label: Ce[f], value: vt(a.extras?.finish?.faces?.[l] ?? a.finish?.faces?.[l], "-") })).filter(({ value: l }) => l !== "-").map(({ label: l, value: f }) => `${l}: ${f}`).join(`
`) || "-";
}
const Y = 5, nt = 10, Q = {
  fillColor: [7, 59, 76],
  fontStyle: "normal"
}, D = {
  fontSize: 9
}, W = { left: 10 };
let K = [];
const Ie = (a, l, f, C = (m) => m.toString()) => {
  const m = new he({ orientation: "landscape" });
  let c = 10;
  m.setFontSize(20), m.text(a("pdf.order_summary"), 10, c), c += 15, m.setFontSize(14), m.text(`${a("general.your")} ${a("woodwork.part")}`, 10, c), c += Y, K = [
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
  const G = l.parts.map((y) => [
    C(y.l),
    C(y.w),
    C(y.t) || "-",
    y?.material?.toUpperCase() || "-",
    y?.code || "-",
    C(y.q),
    y.name || "-",
    Ee(y),
    ze(y)
  ]);
  N(m, {
    startY: c,
    head: [K],
    body: G,
    margin: W,
    headStyles: Q,
    styles: D
  }), c = m.lastAutoTable.finalY + nt, m.setFontSize(14), m.text(a("pdf.stock_requirements"), 10, c), c += Y, K = [
    a("woodwork.length"),
    a("woodwork.width"),
    a("woodwork.thickness"),
    a("woodwork.material"),
    a("woodwork.code"),
    a("woodwork.quantity")
    // 'Cost'
  ];
  const T = l.stock.map((y) => [
    C(y.l),
    C(y.w),
    C(y.t) || "-",
    y?.material?.toUpperCase() || "-",
    y?.code || "-",
    C(y.q)
    // stock.cost
  ]);
  if (N(m, {
    startY: c,
    head: [K],
    body: T,
    margin: W,
    headStyles: Q,
    styles: D
  }), c = m.lastAutoTable.finalY + nt, l.metadata.totalRollLength > 0) {
    m.setFontSize(14), m.text(a("pdf.roll_requirements"), 10, c), c += Y, K = [
      a("woodwork.name"),
      a("woodwork.material"),
      a("woodwork.length")
    ];
    const y = l.stock.map((V) => [
      V?.name?.toUpperCase() || "-",
      V?.material?.toUpperCase() || "-",
      C(V.analysis.rollLength)
    ]);
    N(m, {
      startY: c,
      head: [K],
      body: y,
      margin: W,
      headStyles: Q,
      styles: D
    }), c = m.lastAutoTable.finalY + nt;
  }
  if (f && Object.values(f)) {
    m.setFontSize(14), m.text(a("pdf.hardware"), 10, c), c += Y;
    const y = Object.values(f).map((V) => [
      V.name.toUpperCase(),
      C(V.q)
      // item.totalCost.toFixed( 2 )
    ]);
    N(m, {
      startY: c,
      head: [[a("pdf.item"), a("woodwork.quantity")]],
      body: y,
      margin: W,
      headStyles: Q,
      styles: D
    }), c = m.lastAutoTable.finalY + nt;
  }
  m.setFontSize(14), m.text(a("pdf.totals"), 10, c), c += Y;
  const L = [
    [a("pdf.total_parts"), C(l.metadata.totalPartsProduced)],
    [a("pdf.part_area"), C(l.metadata.totalPartArea)],
    [a("pdf.total_stock_required"), C(l.metadata.totalUsedStock)],
    [a("pdf.total_banding_length"), C(l.metadata.totalBandingLength)],
    [a("pdf.total_finish_area"), C(l.metadata.totalFinishArea)],
    [a("pdf.total_roll_length"), C(l.metadata.totalRollLength)]
  ];
  if (N(m, {
    startY: c,
    body: L,
    margin: W,
    headStyles: Q,
    styles: D
  }), c = m.lastAutoTable.finalY + nt, window?.smartcutImages?.length) {
    m.addPage();
    let y = 10;
    m.setFontSize(14), m.text(a("pdf.images"), 10, y), y += Y;
    const V = window.smartcutImages.flatMap((s, e) => s.metadata.map((I) => [
      e + 1,
      I.newName
    ]));
    N(m, {
      startY: y,
      body: V,
      head: [[a("pdf.part_index"), a("pdf.file_name")]],
      margin: W,
      headStyles: Q,
      styles: D
    });
  }
  return m.output("datauristring");
}, qe = {
  key: 0,
  class: "debug"
}, je = !1, Ne = /* @__PURE__ */ be({
  __name: "WordPress",
  setup(a) {
    const l = wt(() => import("./FormulaPricing-B0cdKtSF.js")), f = wt(() => import("./ObjectViewer-D_txyYGU.js")), C = wt(() => import("./Notices-Bd8hOYKb.js")), { inputShapes: m } = de(), { addNotice: c } = _e(), G = "production", T = {}, L = {}, y = U(null);
    let V, s, e;
    const I = {
      banding: null,
      finish: null
    };
    let o = null, P = [], u = null, h = {};
    const k = U(!1), A = U("manual"), E = U(""), p = we([]), _ = ve(() => p.value), w = U(null), b = U(!0), q = U(null), x = U(!1), z = U(null);
    xe("calculator", () => z.value);
    const F = (t) => {
      k.value && console.log("SmartCut -", ...t);
    }, $ = (t) => {
      console.error(`SmartCut - ${t}`);
    }, R = (t = !0) => {
      x.value = !0, ["checkout", "intro_text", "offcuts", "banding_key"].forEach((r) => Z(r, "block")), Jt() && Z("pricing_table", "table"), t ? rt(!0) : ft(), M();
    }, at = (t = !0, n = !0) => {
      x.value = !1, ["checkout", "intro_text", "offcuts", "banding_key", "pricing_table"].forEach((i) => Z(i, "none")), n === !0 ? Pt() : n === !1 && M(), rt ? rt() : t === !1 && ft();
    }, rt = (t = !1) => {
      Z("quantity", "inline-block"), T.quantity.readOnly = t;
    }, ft = () => {
      x.value !== !1 && (pt(1), Z("quantity", "none"), T.quantity.readOnly = !0);
    }, Pt = () => {
      if (!T.cart_button) {
        $("Cart button not found");
        return;
      }
      T.cart_button.disabled = !1;
    }, M = () => {
      if (x.value !== !1) {
        if (!T.cart_button) {
          $("Cart button not found");
          return;
        }
        T.cart_button.disabled = !0;
      }
    }, Ot = () => {
      $("Validation error"), M();
    }, pt = (t, n = 0) => {
      if (F(["setting cart quantity", t]), !T.quantity) {
        $("Quantity field not found when trying to set");
        return;
      }
      T.quantity.value = t.toFixed(n), console.assert(T.quantity.value === t.toFixed(n), "Quantity field value not set correctly");
    }, Vt = (t) => {
      F(["setting variation price", t]);
      const n = document.querySelector(".woocommerce-variation-price .smartcut-price-selector");
      n && (n.innerText = H(t)), y.value = t;
    }, Bt = (t = !1) => {
      const n = t ? w.value?.display_price ?? 0 : y.value ?? w.value?.display_price ?? 0;
      return console.log("getCurrentVariationPrice", y.value, w.value?.display_price), typeof n == "string" ? parseFloat(n) : n;
    }, Mt = () => {
      if (!window?.smartcutConfig) {
        $("SmartCut config not found");
        return;
      }
      const t = window.smartcutConfig;
      e = t.settings;
      const n = Ft(B(window, ["smartcutConfig", "banding_data"])), r = Ft(B(window, ["smartcutConfig", "finish_data"])), i = (j) => {
        switch (j) {
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
      }, { cutType: v, cutPreference: d } = i(e.cut_preference), S = {
        stockType: e.stock_type,
        bladeWidth: e.blade_width,
        cutType: v,
        cutPreference: d,
        stackHeight: e.stack_height || 100,
        guillotineOptions: {
          strategy: "efficiency",
          maxPhase: 0,
          headCuts: !1,
          limitStripDimensions: !1
        }
      }, g = {
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
      k.value = g.debug;
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
          diameters: e.machining_holes_diameters.split(",").map((j) => j.trim()).filter(Boolean),
          minDiameter: e.machining_holes_min_diameter,
          maxDiameter: e.machining_holes_max_diameter,
          enableDepth: e.machining_holes_depth,
          depths: e.machining_holes_depths.split(",").map((j) => j.trim()).filter(Boolean),
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
      b.value = Tt(), b.value ? rt(!0) : ft(), o.type === "variable" ? at(!1, !1) : R(b.value);
      const X = {
        type: o.type,
        stock: p.value.map((j) => j.toData()),
        variations: P ?? null,
        saw: S,
        options: g,
        banding: n,
        finish: r,
        machining: O
      };
      X.type === "variable" && (F(["setting variable product form listeners"]), jQuery(function(j) {
        const Et = j(".variations_form");
        Et.on("reset_data", () => at(!1, !1)).on("found_variation", (bt, ie) => te(bt, ie));
        const ht = Et.find("select");
        ht.length > 0 && ht.toArray().every((bt) => bt.value !== "") && ht.last().trigger("change");
      }));
      const ct = {
        product: o,
        selectedVariation: w,
        inputs: L,
        elements: T,
        inputType: A,
        formatPrice: H,
        getCurrentVariationPrice: Bt,
        setInputValue: mt,
        setCartQuantity: pt,
        setVariationPrice: Vt,
        isExtraEnabled: _t,
        isQuantityPricing: Tt,
        isMachiningEnabled: Ct,
        isSurchargeEnabled: At,
        getTotalBandingPrice: Wt,
        getTotalFinishPrice: Dt,
        getTotalMachiningPrice: Kt,
        getInputValue: Gt,
        enableAddToCart: Pt,
        log: F,
        error: $
      }, gt = Te({
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
      }, ct);
      V = gt.calculatePrice, s = gt.resetPricing, Se(() => {
        z.value && z.value.init(X);
      });
    }, Ut = (t) => {
      const n = t?.multiple_sizes === !0;
      o = {
        type: t?.product_type,
        multiple_sizes: n,
        size: t?.size ? t.size.split(" | ") : [],
        l: !n && t?.l ? parseFloat(t.l) : null,
        w: !n && t?.w ? parseFloat(t.w) : null,
        t: t?.t ?? null,
        price: t?.price ? parseFloat(t.price) : null,
        stock_name: t?.stock_sku || t.stock_name,
        stock_sku: t?.stock_sku || null
      }, o.multiple_sizes || (o.l || $("product 'length' attribute not available"), o.w || $("product 'width' attribute not available"));
    }, Rt = (t) => {
      A.value = B(window, ["smartcutConfig", "settings", "enable_formula"]) === !0 ? "formula" : "manual", E.value = B(window, ["smartcutConfig", "settings", "formula_url"]), F([`Input type: ${A.value}`]), h = {
        thousands_separator: t?.thousands_separator,
        decimal_separator: t?.decimal_separator,
        number_of_decimals: t?.number_of_decimals,
        currency_symbol: t?.currency_symbol,
        currency_position: t?.currency_position
      };
    }, Ht = () => {
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
        T[n] = document.querySelector(r);
      if (!T.checkout)
        return $("checkout iframe not found");
      if (!T.quantity)
        return $("quantity field not found");
      if (!T.cart_button)
        return $("cart button not found");
      T.quantity.readOnly = !0, M();
    }, Nt = () => ({
      w1: e.stock_trim_x1 ?? 0,
      w2: e.stock_trim_x2 ?? 0,
      l1: e.stock_type === "linear" ? 0 : e.stock_trim_y1 ?? 0,
      l2: e.stock_type === "linear" ? 0 : e.stock_trim_y2 ?? 0
    }), J = (t = null, n = null, r = null, i = null, v = null) => {
      let d;
      if (v && typeof v == "object") {
        d = [];
        for (const [g, O] of Object.entries(v))
          g !== "attribute_size" && g !== "attribute_thickness" && d.push(`${g.replace("attribute_", "")}: ${O}`);
        d = d.join(" - ");
      }
      const S = {
        name: o.stock_name,
        code: o.stock_sku || void 0,
        l: t,
        w: n,
        t: r,
        grain: e.stock_grain,
        cost: parseFloat(i?.toString() || "0"),
        trim: Nt(),
        allowExactFitShapes: !0,
        notes: d
      };
      return new ce(S, e.numberFormat || "decimal");
    }, Yt = () => {
      if (o?.stock_name || $("product name not specified"), p.value = [], o.multiple_sizes)
        for (const t of o.size) {
          if (!st(t)) continue;
          const [n, r] = t.split("x"), i = J(
            parseFloat(n),
            parseFloat(r),
            o?.t,
            o.price
          );
          p.value.push(i);
        }
      else
        p.value.push(J(
          o.l,
          o.w,
          o?.t,
          o?.price
        ));
    }, St = (t, n) => {
      const r = t.split(".");
      return r[0] = r[0].replace(/\B(?=(\d{3})+(?!\d))/g, n), r.join(".");
    }, H = (t = 0, n = "") => {
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
    }, it = (t) => {
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
        i?.variations ? (n.labels.push(...Object.keys(i.options)), Object.values(i.variations).forEach((v) => {
          const { options: d } = v, S = Object.values(d).map((g) => it(g)).join("|");
          n.pricing[S] = parseInt(v.price);
        })) : i?.options && Object.keys(i.options).forEach((v) => {
          const d = it(v);
          n.pricing[d] = parseInt(i.price), i.name && (n.displayNames[d] = i.name);
        });
      return n.labels.length || n.labels.push("type"), n;
    }, dt = (t, n) => {
      if (!n.length || !zt(I, [t])) return null;
      const r = B(I, [t]);
      if (!le(r)) return null;
      const v = Object.values(r).map((d) => d?.variations ? Object.values(d.variations).map((S) => (S.type = "variable", S)) : (d.type = "simple", d)).flat().find((d) => {
        let S;
        return d.type === "simple" ? S = Object.keys(d.options) : S = Object.values(d.options), S ? S.every((g, O) => it(g) === it(n[O])) : !1;
      });
      return v?.price ? parseFloat(v.price) : null;
    }, Dt = (t) => {
      let n = 0;
      if (typeof t == "object") {
        for (let [r, i] of Object.entries(t)) {
          typeof i == "string" && (i = parseFloat(i));
          const v = r.split("|"), d = dt("finish", v);
          if (d === null) continue;
          const g = Number(i) / 1e6 * parseFloat(d.toString());
          n += g;
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
          const v = r.split("|"), d = dt("banding", v);
          if (d === null) continue;
          const S = i / (e.unit_system === "imperial" ? 12 : 1e3) * parseFloat(d.toString());
          n += S;
        }
        if ("min_banding_charge" in e) {
          const r = parseFloat(e?.min_banding_charge);
          if (r > 0 && n > 0 && n < r)
            return r;
        }
      }
      return n;
    }, Kt = (t) => (u.holes ?? 0) * (t.metadata.numHoles ?? 0) + (u.corners ?? 0) * (t.metadata.numCorners ?? 0), Z = (t, n) => {
      t in T && T[t]?.style && (T[t].style.display = n);
    }, mt = (t, n) => {
      ot(t) ? L[t].value = n : $(`Attempting to set input but key '${t}' does not exist`);
    }, Gt = (t) => {
      if (ot(t))
        return L[t].value;
    }, ot = (t) => t in L && L[t] instanceof HTMLInputElement, $t = () => {
      pt(1), M(), s();
      for (const t in L)
        t !== "smartcut-hardware-price" && mt(t, null);
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
    }, _t = (t) => {
      if (zt(e, ["enable", t]) && B(e, ["enable", t]) === !1)
        return !1;
      const n = B(I, [t]);
      return !!(n && Object.values(n).length);
    }, Ct = () => e.enable_machining === !0, At = () => !(e?.surcharge_type === "none" || !e?.surcharge || e.surcharge === "0.00"), Jt = () => !!(e.pricing_strategy === "full_stock_plus_cut_length" || e.pricing_strategy === "full_stock_plus_num_parts" || e.pricing_strategy === "full_stock_plus_part_perimeter" || e.pricing_strategy === "part_area" || e.pricing_strategy === "roll_length" || At() || _t("banding") || _t("finish") || Ct()), Zt = (t) => {
      let n = t?.attributes?.attribute_size;
      return n || (n = o?.size), n;
    }, st = (t) => /\d+x\d+/.test(t), Xt = () => {
      window.smartcutConfig.input_fields.forEach((t) => {
        const n = t.replaceAll("_", "-");
        L[n] = document.getElementById(n);
      });
    }, te = (t, n) => {
      $t(), w.value = n, F(["variation selected", n.attributes]), p.value = [];
      const r = B(n, ["attributes", "attribute_thickness"]) ?? null;
      if (o.selected_thickness = r, m.value.forEach((i) => {
        i.t = ut({ v: r });
      }), o.multiple_sizes) {
        const i = Zt(n);
        if (F([`variation found with size: ${i} & thickness: ${r}`]), !i)
          return at(!1), $("The size of this multiple size product could not be found");
        if (Array.isArray(i) ? R(b.value) : st(i) ? at(!0, !0) : R(b.value), P?.length) {
          let v;
          const d = r;
          let S = n.display_price;
          Array.isArray(i) ? v = i.map((g) => ({
            size: g,
            l: g.split("x")[0],
            w: g.split("x")[1],
            t: d,
            price: S
          })) : v = P.filter((g) => st(g?.attributes?.size) ? r === (g?.attributes?.thickness ?? null) : !1).map((g) => {
            const O = g?.attributes?.size.split("x")[0] ?? null, X = g?.attributes?.size.split("x")[1] ?? null;
            let ct = 0;
            return n.display_price || (ct = P.find((j) => st(j.attributes?.size) && j.attributes?.thickness === g?.attributes?.thickness && j.attributes?.size === g?.attributes?.size && j.display_price > 0).display_price), F([
              `size attribute: '${g?.attributes?.size}'`,
              `price for thickness ${r}, dimensions: ${O}x${X} is ${S}`
            ]), {
              size: g?.attributes?.size,
              l: O,
              w: X,
              t: d,
              price: S || ct
            };
          }), x.value === !0 && v.forEach((g) => {
            const O = J(
              g.l,
              g.w,
              g.t,
              g.price,
              n?.attributes
            );
            p.value.push(O);
          });
        }
      } else {
        if (!P.some((i) => "thickness" in i.attributes))
          p.value.push(J(
            o.l,
            o.w,
            r,
            n.display_price,
            n?.attributes
          ));
        else {
          const i = P.find((v) => v.attributes?.thickness === r);
          if (!i) return $(`variation not found for thickness ${r}`);
          p.value.push(J(
            o.l,
            o.w,
            r,
            i.price,
            n?.attributes
          ));
        }
        R(b.value);
      }
    }, ee = (t) => {
      if (!ot("smartcut-api-result")) return;
      const n = L["smartcut-api-result"].closest("form");
      if (!n) return;
      const r = JSON.stringify(t.apiResultV3), i = new Blob([r], { type: "application/json" }), v = new File([i], "api-result.json", { type: "application/json" }), d = new DataTransfer();
      d.items.add(v);
      const S = n.querySelector('[name="smartcut_api_result"]');
      S instanceof HTMLInputElement && (S.files = d.files);
    }, ne = async (t) => {
      const r = Ie(ge, t, q.value, Qt).split(",")[1], i = new ue();
      i.file("order-summary.pdf", r);
      const v = await i.generateAsync({ type: "blob" }), d = new File([v], "order-summary.zip", { type: "application/zip" });
      if (!ot("smartcut-order-summary")) return;
      const S = L["smartcut-order-summary"].closest("form");
      if (!S) return;
      const g = new DataTransfer();
      g.items.add(d);
      const O = S.querySelector('[name="smartcut_order_summary"]');
      O instanceof HTMLInputElement && (O.files = g.files);
    }, ae = async (t) => {
      $t(), F(["result event received", t]);
      const n = await V(t);
      if (!n.success) {
        console.error(n.error);
        return;
      }
      const r = e.minimum_cut_to_size_price ?? 0;
      if (r > 0 && (n.totalPrice ?? 0) < r) {
        M(), c({
          message: `A minimum cut-to-size order of ${H(r)} is required. Your order total is ${H(n.totalPrice ?? 0)}.`,
          type: "warning"
        });
        return;
      }
      await ne(t), t.apiResultV3 && ee(t);
    }, re = (t, n) => {
      M(), t && (q.value = Fe(t)), mt("smartcut-hardware-price", n ?? 0);
    };
    return ye(() => {
      console.log("💥 Powered by https://smartcut.dev", window?.smartcutConfig?.version), F(["Launching WordPress checkout..."]), I.banding = B(window, ["smartcutConfig", "banding_data"]), I.finish = B(window, ["smartcutConfig", "finish_data"]), u = B(window, ["smartcutConfig", "machining_pricing"]), P = B(window, ["smartcutConfig", "variations"]), Ht(), Xt(), Ut(window.smartcutConfig), Rt(window.smartcutConfig), Mt(), Yt(), [
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
    }), (t, n) => (lt(), It(Pe, null, [
      yt(tt(C), { position: "top-left" }),
      tt(G) === "development" && je ? (lt(), It("div", qe, [
        n[0] || (n[0] = ke("div", null, "WP - developer information", -1)),
        yt(tt(f), {
          data: [p.value],
          paths: ["stock"]
        }, null, 8, ["data"]),
        yt(tt(f), {
          data: [p.value.map((r) => r.trim)],
          paths: ["stock trim"]
        }, null, 8, ["data"])
      ])) : kt("", !0),
      A.value === "formula" && E.value ? (lt(), qt(tt(l), {
        key: 1,
        ref: "formulapricing",
        "format-price": H,
        url: E.value,
        debug: k.value,
        onHardwareResult: re,
        onPanelResult: M
      }, null, 8, ["url", "debug"])) : kt("", !0),
      A.value === "manual" || A.value === "formula" && E.value ? (lt(), qt(me, {
        key: 2,
        ref_key: "calculator",
        ref: z,
        readonly: A.value === "formula",
        "input-stock": _.value,
        "find-extras-price": dt,
        "format-price": H,
        "input-type": A.value,
        onLog: F,
        onError: $,
        onInputsChanged: M,
        onValidationError: Ot,
        onResult: ae
      }, null, 8, ["readonly", "input-stock", "input-type"])) : kt("", !0)
    ], 64));
  }
});
export {
  Ne as default
};

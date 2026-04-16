import { c as ft, M as ce, a as vt, F as le, g as B, I as ue, b as zt, o as fe } from "./result.zod-C4CRDjtE.js";
import { J as de } from "./vendor-jszip-D2ejww_t.js";
import { t as pe, b as me } from "./i18n-B29Te7vQ.js";
import { c as _e, d as ge, u as he } from "./EcommerceCalculator-rD4Yl4Hs.js";
import { t as be } from "./i18n-BrgccvNc.js";
import { E as ye, a as W } from "./vendor-jspdf-Cqh869j1.js";
import { d as ke, o as we, a as It, b as ut, g as yt, e as kt, j as jt, u as nt, h as wt, f as ve, K as Pe, r as R, c as Se, F as xe, n as $e, L as Fe, B as Ae } from "./vendor-vue-BYiwvu61.js";
function at(a, l) {
  return l === "area" ? a === "imperial" ? 144 : 1e6 : a === "imperial" ? 12 : 1e3;
}
const Ot = ["banding", "finish", "cutLength", "perPart", "partArea", "offcutArea", "rollLength", "surcharge", "machining", "stock", "custom"], Ce = (a) => Ot.includes(a);
function Te(a, l) {
  const o = (r) => {
    l.log?.(r);
  }, F = (r) => (l.error?.(r), { success: !1, error: r }), p = () => {
    for (const r of Ot) u(r, 0);
  }, u = (r, e) => {
    o(["setting price", r, e]);
    const { inputs: I, elements: c, setInputValue: S, formatPrice: f } = l;
    if (isNaN(e)) throw new Error("Price must be a number");
    if (!Ce(r)) return;
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
    }[r];
    w?.hidden && I[w.hidden] && (o(["setting hidden price", w.hidden, e]), S(w.hidden, e)), w?.visible && c[w.visible] && (c[w.visible].innerText = f(e));
  }, M = (r, e, I) => {
    if (!r?.offcuts?.length) return 0;
    const c = r.offcuts.filter((b) => {
      const w = Math.max(b.l, b.w), T = Math.min(b.l, b.w);
      return w >= (a.offcut_min_length || 0) && T >= (a.offcut_min_width || 0);
    });
    if (c.length === 0) return 0;
    const S = a.offcut_pricing_mode || "percentage";
    let f = 0;
    switch (S) {
      case "free":
        f = 0, o(["offcut pricing mode: free, price = $0"]);
        break;
      case "fixed":
        f = a.offcut_fixed_price || 0, o([`offcut pricing mode: fixed, price = ${f}`]);
        break;
      default: {
        const b = (a.offcut_pricing_percentage ?? 100) / 100, w = /* @__PURE__ */ new Map();
        for (const T of c) {
          const E = T.stockId;
          E && (w.has(E) || w.set(E, []), w.get(E).push(T));
        }
        for (const [T, E] of w) {
          const m = r.stock?.find((y) => y.id === T);
          if (!m || !m.cost) continue;
          const h = m.l * m.w;
          if (h === 0) continue;
          const v = E.reduce((y, j) => y + j.l * j.w * (j.q || 1), 0);
          f += v / h * ft({ v: m.cost }) * b;
        }
        f === 0 && c.length > 0 && (f = c.reduce((m, h) => m + h.l * h.w * (h.q || 1), 0) / e * I * b), o([`offcut pricing mode: percentage (${b * 100}%), price = ${f}`]);
        break;
      }
    }
    return f;
  }, x = (r) => {
    const { product: e, getCurrentVariationPrice: I, isQuantityPricing: c, enableAddToCart: S, setCartQuantity: f } = l;
    let b = e?.price || I(!0) || 0;
    typeof b == "string" && (b = parseFloat(b));
    const w = a.unit_system === "imperial" ? "feet" : "meters", E = {
      full_stock: (h) => {
        if (o(["calculating cost by full sheet"]), !c()) {
          const v = h.metadata.totalStockCost;
          return u("stock", v), v;
        }
        return c() && f(h.metadata.totalUsedStock), 0;
      },
      part_area: (h) => {
        o([`calculating cost by part area in square ${w}`]);
        const v = at(a.unit_system, "area");
        let y = 0;
        for (const $ of h.stock) {
          const z = ft({ v: $.cost });
          if (!z) continue;
          const A = $.l * $.w;
          if (A === 0) continue;
          const C = $.analysis?.partArea || 0;
          C > 0 && (y += C / A * z, o([`stock ${$.id}: (${C} / ${A}) * ${z} = ${C / A * z}`]));
        }
        if (y === 0 && h.metadata.totalPartArea > 0 && b > 0) {
          const $ = h.metadata.totalPartArea / v;
          y = $ * b, o([`fallback: part area price in square ${w} is ${$} (part area) * ${b} (product price) = ${y}`]);
        }
        u("partArea", y);
        let j = y;
        if (a?.enable_offcut_pricing && h?.offcuts) {
          const $ = M(h, v, b);
          u("offcutArea", $), j += $;
        }
        if (o([`calculated total price as ${j}`]), c()) {
          const $ = h.metadata.totalPartArea / v;
          return o([`setting cart quantity to ${$}`]), f($, 2), 0;
        } else
          return j;
      },
      cut_length: (h) => {
        o([`calculating cost by cut length in  ${w}`]);
        const v = at(a.unit_system, "length"), y = h.metadata.totalCutLength / v;
        return f(y, 2), 0;
      },
      full_stock_plus_cut_length: (h) => {
        o(["calculating cost by full sheet plus cut length"]);
        let v = 0;
        const y = h.metadata.totalStockCost;
        u("stock", y), v = y, c() && f(h.metadata.totalUsedStock);
        const j = at(a.unit_system, "length");
        let z = h.metadata.totalCutLength / j * a.cut_length_price;
        const A = a.min_cut_length_charge ?? 0;
        return A > 0 && z > 0 && (z = Math.max(z, A)), u("cutLength", z), v + z;
      },
      full_stock_plus_num_parts: (h) => {
        o(["calculating cost by full sheet plus number of parts"]);
        let v = 0;
        const y = h.metadata.totalStockCost;
        u("stock", y), v = y, c() && f(h.metadata.totalUsedStock);
        const j = h.metadata.totalPartsProduced * a.per_part_price;
        return u("perPart", j), v + j;
      },
      full_stock_plus_part_perimeter: (h) => {
        o(["calculating cost by full stock plus part perimeter"]);
        let v = 0;
        const y = h.metadata.totalStockCost;
        u("stock", y), v = y, c() && f(h.metadata.totalUsedStock);
        const j = at(a.unit_system, "length");
        let z = h.inputs.parts.reduce(
          (C, N) => C + 2 * (N.l + N.w) * (N.q ?? 1),
          0
        ) / j * a.cut_length_price;
        const A = a.min_cut_length_charge ?? 0;
        return A > 0 && z > 0 && (z = Math.max(z, A)), u("cutLength", z), v + z;
      },
      roll_length: (h) => {
        o([`calculating cost by roll length in ${w}`]);
        const v = at(a.unit_system, "length"), y = h.stock.reduce((j, $) => j + $.analysis.rollLength / v * ft({ v: $.cost }), 0);
        return u("rollLength", y), y;
      }
    }[a.pricing_strategy], m = E(r);
    return S(), m;
  }, q = (r) => {
    const {
      isExtraEnabled: e,
      isMachiningEnabled: I,
      isSurchargeEnabled: c,
      inputType: S,
      getTotalBandingPrice: f,
      getTotalFinishPrice: b,
      getTotalMachiningPrice: w,
      getInputValue: T
    } = l;
    let E = 0;
    if (e("banding") && r.metadata.bandingLengthByType) {
      const m = f(r.metadata.bandingLengthByType);
      u("banding", m), E += m;
    }
    if (e("finish") && r.metadata.finishAreaByType) {
      const m = b(r.metadata.finishAreaByType);
      u("finish", m), E += m;
    }
    if (S.value === "formula") {
      const m = parseFloat(T("smartcut-hardware-price"));
      isNaN(m) || (E += m);
    }
    if (I()) {
      const m = w(r);
      u("machining", m), E += m;
    }
    if (c() && a.surcharge) {
      const m = a.surcharge_type === "per_sheet" ? parseFloat(a.surcharge.toString()) * r.metadata.totalUsedStock : parseFloat(a.surcharge.toString());
      u("surcharge", m), o(["added surcharge", m]), E += m;
    }
    return E;
  }, H = (r) => {
    const { getInputValue: e, setInputValue: I } = l, c = {
      "smartcut-job-id": r.jobId,
      "smartcut-dimensions": r.parts.map((S) => `${S.l}x${S.w} [${S.q}]`).join(", "),
      "smartcut-total-cut-length": r.metadata.totalCutLength,
      "smartcut-part-area": r.metadata.totalPartArea,
      "smartcut-total-cuts": r.metadata.totalCuts,
      "smartcut-total-parts": r.metadata.totalPartsProduced,
      "smartcut-machining": r.metadata.hasMachining
    };
    if (Object.entries(c).forEach(([S, f]) => {
      e(S) !== void 0 && I(S, f);
    }), e("smartcut-stock-summary") !== void 0) {
      const S = r.stock.map((f) => `${f.l}x${f.w}${f.t ? "x" + f.t : ""} [${f.q}]`).join(", ");
      I("smartcut-stock-summary", S);
    }
  };
  return {
    calculatePrice: async (r) => {
      p();
      const { isQuantityPricing: e, selectedVariation: I, setVariationPrice: c, setCartQuantity: S } = l;
      if (!r?.jobId)
        return F("No job ID provided");
      e() || S(1);
      let f = x(r);
      const b = q(r);
      if (f += b, e()) {
        const w = r.metadata.totalUsedStock, T = f / w;
        u("custom", T);
      } else {
        if (!r.metadata.totalStockCost)
          return F("Total stock cost not returned for a multiple size product");
        o([`total cost is ${f}`]), u("custom", f);
      }
      return I.value && c(f), H(r), { success: !0, totalPrice: f };
    },
    resetPricing: p
  };
}
const qt = ["L1", "L2", "W1", "W2"], Ee = ["A", "B"], ze = ["y1", "y2", "x1", "x2"];
function Lt(a) {
  return "extras" in a && a.extras ? ce.map((l, o) => ({ label: qt[o], value: vt(a.extras?.banding?.sides?.[l], "-") })).filter(({ value: l }) => l !== "-").map(({ label: l, value: o }) => `${l}: ${o}`).join(`
`) || "-" : ze.map((l, o) => ({ label: qt[o], value: vt(a.banding?.[l], "-") })).filter(({ value: l }) => l !== "-").map(({ label: l, value: o }) => `${l}: ${o}`).join(`
`) || "-";
}
function Bt(a) {
  return le.map((l, o) => ({ label: Ee[o], value: vt(a.extras?.finish?.faces?.[l] ?? a.finish?.faces?.[l], "-") })).filter(({ value: l }) => l !== "-").map(({ label: l, value: o }) => `${l}: ${o}`).join(`
`) || "-";
}
const Ie = (a, l) => {
  const o = [];
  a?.name && o.push(`Name: ${a.name}`), a?.code && o.push(`Code: ${a.code}`);
  const F = l(a.l), p = l(a.w), u = a.t ? l(a.t) : null;
  o.push(`Dimensions: ${F} × ${p}${u ? ` × ${u}` : ""}`), a?.material && o.push(`Material: ${String(a.material).toUpperCase()}`), a?.q != null && o.push(`Quantity: ${l(a.q)}`);
  const M = Lt(a);
  if (M && M !== "-") {
    o.push("Banding:");
    for (const q of M.split(`
`)) o.push(`  ${q}`);
  }
  const x = Bt(a);
  if (x !== "-") {
    o.push("Finish:");
    for (const q of x.split(`
`)) o.push(`  ${q}`);
  }
  return a?.notes && o.push(`Notes: ${a.notes}`), o.join(`
`);
}, K = 5, it = 10, G = {
  fillColor: [7, 59, 76],
  fontStyle: "normal"
}, J = {
  fontSize: 9
}, Z = { left: 10 };
let X = [];
const je = (a, l, o, F = (p) => p.toString()) => {
  const p = new ye({ orientation: "landscape" });
  let u = 10;
  p.setFontSize(20), p.text(a("pdf.order_summary"), 10, u), u += 15, p.setFontSize(14), p.text(`${a("general.your")} ${a("woodwork.part")}`, 10, u), u += K, X = [
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
  const M = l.parts.map((g) => [
    F(g.l),
    F(g.w),
    F(g.t) || "-",
    g?.material?.toUpperCase() || "-",
    g?.code || "-",
    F(g.q),
    g.name || "-",
    Lt(g),
    Bt(g)
  ]), x = 6;
  W(p, {
    startY: u,
    head: [X],
    body: M,
    margin: Z,
    headStyles: G,
    styles: J,
    didDrawCell: (g) => {
      if (g.section !== "body" || g.column.index !== x) return;
      const r = l.parts[g.row.index];
      if (r)
        try {
          const e = Ie(r, F);
          if (!e) return;
          p.createAnnotation({
            type: "text",
            title: r?.name || "Part",
            contents: e,
            bounds: {
              x: g.cell.x + 1,
              y: g.cell.y + 1,
              w: 8,
              h: 8
            },
            open: !1
          });
        } catch (e) {
          console.error("Error adding part annotation:", e);
        }
    }
  }), u = p.lastAutoTable.finalY + it, p.setFontSize(14), p.text(a("pdf.stock_requirements"), 10, u), u += K, X = [
    a("woodwork.length"),
    a("woodwork.width"),
    a("woodwork.thickness"),
    a("woodwork.material"),
    a("woodwork.code"),
    a("woodwork.quantity")
    // 'Cost'
  ];
  const q = l.stock.map((g) => [
    F(g.l),
    F(g.w),
    F(g.t) || "-",
    g?.material?.toUpperCase() || "-",
    g?.code || "-",
    F(g.q)
    // stock.cost
  ]);
  if (W(p, {
    startY: u,
    head: [X],
    body: q,
    margin: Z,
    headStyles: G,
    styles: J
  }), u = p.lastAutoTable.finalY + it, l.metadata.totalRollLength > 0) {
    p.setFontSize(14), p.text(a("pdf.roll_requirements"), 10, u), u += K, X = [
      a("woodwork.name"),
      a("woodwork.material"),
      a("woodwork.length")
    ];
    const g = l.stock.map((r) => [
      r?.name?.toUpperCase() || "-",
      r?.material?.toUpperCase() || "-",
      F(r.analysis.rollLength)
    ]);
    W(p, {
      startY: u,
      head: [X],
      body: g,
      margin: Z,
      headStyles: G,
      styles: J
    }), u = p.lastAutoTable.finalY + it;
  }
  if (o && Object.values(o)) {
    p.setFontSize(14), p.text(a("pdf.hardware"), 10, u), u += K;
    const g = Object.values(o).map((r) => [
      r.name.toUpperCase(),
      F(r.q)
      // item.totalCost.toFixed( 2 )
    ]);
    W(p, {
      startY: u,
      head: [[a("pdf.item"), a("woodwork.quantity")]],
      body: g,
      margin: Z,
      headStyles: G,
      styles: J
    }), u = p.lastAutoTable.finalY + it;
  }
  p.setFontSize(14), p.text(a("pdf.totals"), 10, u), u += K;
  const H = [
    [a("pdf.total_parts"), F(l.metadata.totalPartsProduced)],
    [a("pdf.part_area"), F(l.metadata.totalPartArea)],
    [a("pdf.total_stock_required"), F(l.metadata.totalUsedStock)],
    [a("pdf.total_banding_length"), F(l.metadata.totalBandingLength)],
    [a("pdf.total_finish_area"), F(l.metadata.totalFinishArea)],
    [a("pdf.total_roll_length"), F(l.metadata.totalRollLength)]
  ];
  if (W(p, {
    startY: u,
    body: H,
    margin: Z,
    headStyles: G,
    styles: J
  }), u = p.lastAutoTable.finalY + it, window?.smartcutImages?.length) {
    p.addPage();
    let g = 10;
    p.setFontSize(14), p.text(a("pdf.images"), 10, g), g += K;
    const r = window.smartcutImages.flatMap((e, I) => e.metadata.map((c) => [
      I + 1,
      c.newName
    ]));
    W(p, {
      startY: g,
      body: r,
      head: [[a("pdf.part_index"), a("pdf.file_name")]],
      margin: Z,
      headStyles: G,
      styles: J
    });
  }
  return p.output("datauristring");
}, qe = {
  key: 0,
  class: "debug"
}, Oe = !1, Qe = /* @__PURE__ */ ke({
  __name: "WordPress",
  setup(a) {
    const l = wt(() => import("./FormulaPricing-is41o-8B.js")), o = wt(() => import("./EcommerceCalculator-rD4Yl4Hs.js").then((t) => t.O)), F = wt(() => import("./Notices-DtDLFP7E.js")), { inputShapes: p } = _e(), { addNotice: u } = he(), M = "production", x = {}, q = {}, H = R(null);
    let g, r, e;
    const I = {
      banding: null,
      finish: null
    };
    let c = null, S = [], f = null, b = {};
    const w = R(!1), T = R("manual"), E = R(""), m = Pe([]), h = Se(() => m.value), v = R(null), y = R(!0), j = R(null), $ = R(!1), z = R(null);
    Fe("calculator", () => z.value);
    const A = (t) => {
      w.value && console.log("SmartCut -", ...t);
    }, C = (t) => {
      console.error(`SmartCut - ${t}`);
    }, N = (t = !0) => {
      $.value = !0, ["checkout", "intro_text", "offcuts", "banding_key"].forEach((i) => et(i, "block")), Xt() && et("pricing_table", "table"), t ? st(!0) : dt(), U();
    }, rt = (t = !0, n = !0) => {
      $.value = !1, ["checkout", "intro_text", "offcuts", "banding_key", "pricing_table"].forEach((s) => et(s, "none")), n === !0 ? Pt() : n === !1 && U(), st ? st() : t === !1 && dt();
    }, st = (t = !1) => {
      et("quantity", "inline-block"), x.quantity.readOnly = t;
    }, dt = () => {
      $.value !== !1 && (pt(1), et("quantity", "none"), x.quantity.readOnly = !0);
    }, Pt = () => {
      if (!x.cart_button) {
        C("Cart button not found");
        return;
      }
      x.cart_button.disabled = !1;
    }, U = () => {
      if ($.value !== !1) {
        if (!x.cart_button) {
          C("Cart button not found");
          return;
        }
        x.cart_button.disabled = !0;
      }
    }, Vt = () => {
      C("Validation error"), U();
    }, pt = (t, n = 0) => {
      if (A(["setting cart quantity", t]), !x.quantity) {
        C("Quantity field not found when trying to set");
        return;
      }
      x.quantity.value = t.toFixed(n), console.assert(x.quantity.value === t.toFixed(n), "Quantity field value not set correctly");
    }, Mt = (t) => {
      A(["setting variation price", t]);
      const n = document.querySelector(".woocommerce-variation-price .smartcut-price-selector");
      n && (n.innerText = Y(t)), H.value = t;
    }, Ut = (t = !1) => {
      const n = t ? v.value?.display_price ?? 0 : H.value ?? v.value?.display_price ?? 0;
      return console.log("getCurrentVariationPrice", H.value, v.value?.display_price), typeof n == "string" ? parseFloat(n) : n;
    }, Rt = () => {
      if (!window?.smartcutConfig) {
        C("SmartCut config not found");
        return;
      }
      const t = window.smartcutConfig;
      e = t.settings;
      const n = $t(B(window, ["smartcutConfig", "banding_data"])), i = $t(B(window, ["smartcutConfig", "finish_data"])), s = (O) => {
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
      }, { cutType: P, cutPreference: _ } = s(e.cut_preference), k = {
        stockType: e.stock_type,
        bladeWidth: e.blade_width,
        cutType: P,
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
      w.value = d.debug;
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
      y.value = At(), y.value ? st(!0) : dt(), c.type === "variable" ? rt(!1, !1) : N(y.value);
      const V = {
        type: c.type,
        stock: m.value.map((O) => O.toData()),
        variations: S ?? null,
        saw: k,
        options: d,
        banding: n,
        finish: i,
        machining: L
      };
      V.type === "variable" && (A(["setting variable product form listeners"]), jQuery(function(O) {
        const Et = O(".variations_form");
        Et.on("reset_data", () => rt(!1, !1)).on("found_variation", (bt, oe) => ne(bt, oe));
        const ht = Et.find("select");
        ht.length > 0 && ht.toArray().every((bt) => bt.value !== "") && ht.last().trigger("change");
      }));
      const D = {
        product: c,
        selectedVariation: v,
        inputs: q,
        elements: x,
        inputType: T,
        formatPrice: Y,
        getCurrentVariationPrice: Ut,
        setInputValue: _t,
        setCartQuantity: pt,
        setVariationPrice: Mt,
        isExtraEnabled: gt,
        isQuantityPricing: At,
        isMachiningEnabled: Ct,
        isSurchargeEnabled: Tt,
        getTotalBandingPrice: Gt,
        getTotalFinishPrice: Kt,
        getTotalMachiningPrice: Jt,
        getInputValue: Zt,
        enableAddToCart: Pt,
        log: A,
        error: C
      }, Q = Te({
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
      }, D);
      g = Q.calculatePrice, r = Q.resetPricing, $e(() => {
        z.value && z.value.init(V);
      });
    }, Nt = (t) => {
      const n = t?.multiple_sizes === !0;
      c = {
        type: t?.product_type,
        multiple_sizes: n,
        size: t?.size ? t.size.split(" | ") : [],
        l: !n && t?.l ? parseFloat(t.l) : null,
        w: !n && t?.w ? parseFloat(t.w) : null,
        t: t?.t ?? null,
        price: t?.price ? parseFloat(t.price) : null,
        stock_name: t?.stock_sku || t.stock_name,
        stock_sku: t?.stock_sku || null
      }, c.multiple_sizes || (c.l || C("product 'length' attribute not available"), c.w || C("product 'width' attribute not available"));
    }, Ht = (t) => {
      T.value = B(window, ["smartcutConfig", "settings", "enable_formula"]) === !0 ? "formula" : "manual", E.value = B(window, ["smartcutConfig", "settings", "formula_url"]), A([`Input type: ${T.value}`]), b = {
        thousands_separator: t?.thousands_separator,
        decimal_separator: t?.decimal_separator,
        number_of_decimals: t?.number_of_decimals,
        currency_symbol: t?.currency_symbol,
        currency_position: t?.currency_position
      };
    }, Qt = () => {
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
      for (const [n, i] of Object.entries(t))
        x[n] = document.querySelector(i);
      if (!x.checkout)
        return C("checkout iframe not found");
      if (!x.quantity)
        return C("quantity field not found");
      if (!x.cart_button)
        return C("cart button not found");
      x.quantity.readOnly = !0, U();
    }, Yt = () => ({
      w1: e.stock_trim_x1 ?? 0,
      w2: e.stock_trim_x2 ?? 0,
      l1: e.stock_type === "linear" ? 0 : e.stock_trim_y1 ?? 0,
      l2: e.stock_type === "linear" ? 0 : e.stock_trim_y2 ?? 0
    }), tt = (t = null, n = null, i = null, s = null, P = null) => {
      let _;
      if (P && typeof P == "object") {
        _ = [];
        for (const [d, L] of Object.entries(P))
          d !== "attribute_size" && d !== "attribute_thickness" && _.push(`${d.replace("attribute_", "")}: ${L}`);
        _ = _.join(" - ");
      }
      const k = {
        name: c.stock_name,
        code: c.stock_sku || void 0,
        l: t,
        w: n,
        t: i,
        grain: e.stock_grain,
        cost: parseFloat(s?.toString() || "0"),
        trim: Yt(),
        allowExactFitShapes: !0,
        notes: _
      };
      return new ue(k, e.numberFormat || "decimal");
    }, Dt = () => {
      if (c?.stock_name || C("product name not specified"), m.value = [], c.multiple_sizes)
        for (const t of c.size) {
          if (!lt(t)) continue;
          const [n, i] = t.split("x"), s = tt(
            parseFloat(n),
            parseFloat(i),
            c?.t,
            c.price
          );
          m.value.push(s);
        }
      else
        m.value.push(tt(
          c.l,
          c.w,
          c?.t,
          c?.price
        ));
    }, St = (t, n) => {
      const i = t.split(".");
      return i[0] = i[0].replace(/\B(?=(\d{3})+(?!\d))/g, n), i.join(".");
    }, Y = (t = 0, n = "") => {
      if (!t)
        return n ? xt("0.00") : "0.00";
      typeof t == "string" && (t = parseFloat(t));
      const i = t.toFixed(b.number_of_decimals).replace(".", b.decimal_separator), s = St(i, b.thousands_separator);
      return n ? xt(s) : s;
    }, Wt = (t) => {
      if (t == null) return "";
      typeof t == "string" && (t = parseFloat(t));
      const i = t % 1 !== 0 ? b.number_of_decimals : 0, s = t.toFixed(i).replace(".", b.decimal_separator);
      return St(s, b.thousands_separator);
    }, xt = (t) => {
      switch (b.currency_position) {
        case "left":
          return `${b.currency_symbol}${t}`;
        case "right":
          return `${t}${b.currency_symbol}`;
        default:
          return `${b.currency_symbol}${t}`;
      }
    }, ot = (t) => {
      const n = (i) => pe(me(i), 100).replace("|", "_");
      return Array.isArray(t) ? t.map(n).join(",") : n(t);
    }, $t = (t) => {
      if (!t) return null;
      const n = {
        labels: [],
        pricing: {},
        displayNames: {}
      }, i = Object.values(t);
      for (const s of i)
        s?.variations ? (n.labels.push(...Object.keys(s.options)), Object.values(s.variations).forEach((P) => {
          const { options: _ } = P, k = Object.values(_), d = k.map((V) => ot(V)), L = d.join("|");
          n.pricing[L] = parseInt(P.price), k.forEach((V, D) => {
            const Q = d[D], O = Array.isArray(V) ? V.join(", ") : String(V);
            Q && O && !n.displayNames[Q] && (n.displayNames[Q] = O);
          });
        })) : s?.options && Object.entries(s.options).forEach(([P, _]) => {
          const k = ot(P);
          n.pricing[k] = parseInt(s.price);
          const d = s.name || (typeof _ == "string" ? _ : Array.isArray(_) ? _.join(", ") : "");
          d && (n.displayNames[k] = d);
        });
      return n.labels.length || n.labels.push("type"), n;
    }, mt = (t, n) => {
      if (!n.length || !zt(I, [t])) return null;
      const i = B(I, [t]);
      if (!fe(i)) return null;
      const P = Object.values(i).map((_) => _?.variations ? Object.values(_.variations).map((k) => (k.type = "variable", k)) : (_.type = "simple", _)).flat().find((_) => {
        let k;
        return _.type === "simple" ? k = Object.keys(_.options) : k = Object.values(_.options), k ? k.every((d, L) => ot(d) === ot(n[L])) : !1;
      });
      return P?.price ? parseFloat(P.price) : null;
    }, Kt = (t) => {
      let n = 0;
      if (typeof t == "object") {
        for (let [i, s] of Object.entries(t)) {
          typeof s == "string" && (s = parseFloat(s));
          const P = i.split("|"), _ = mt("finish", P);
          if (_ === null) continue;
          const d = Number(s) / 1e6 * parseFloat(_.toString());
          n += d;
        }
        if ("min_finish_charge" in e) {
          const i = parseFloat(e?.min_finish_charge);
          if (i > 0 && n > 0 && n < i)
            return i;
        }
      }
      return n;
    }, Gt = (t) => {
      let n = 0;
      if (typeof t == "object") {
        for (let [i, s] of Object.entries(t)) {
          typeof s == "string" && (s = parseFloat(s));
          const P = i.split("|"), _ = mt("banding", P);
          if (_ === null) continue;
          const k = s / (e.unit_system === "imperial" ? 12 : 1e3) * parseFloat(_.toString());
          n += k;
        }
        if ("min_banding_charge" in e) {
          const i = parseFloat(e?.min_banding_charge);
          if (i > 0 && n > 0 && n < i)
            return i;
        }
      }
      return n;
    }, Jt = (t) => (f.holes ?? 0) * (t.metadata.numHoles ?? 0) + (f.corners ?? 0) * (t.metadata.numCorners ?? 0), et = (t, n) => {
      t in x && x[t]?.style && (x[t].style.display = n);
    }, _t = (t, n) => {
      ct(t) ? q[t].value = n : C(`Attempting to set input but key '${t}' does not exist`);
    }, Zt = (t) => {
      if (ct(t))
        return q[t].value;
    }, ct = (t) => t in q && q[t] instanceof HTMLInputElement, Ft = () => {
      pt(1), U(), r();
      for (const t in q)
        t !== "smartcut-hardware-price" && _t(t, null);
    }, At = () => {
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
      if (zt(e, ["enable", t]) && B(e, ["enable", t]) === !1)
        return !1;
      const n = B(I, [t]);
      return !!(n && Object.values(n).length);
    }, Ct = () => e.enable_machining === !0, Tt = () => !(e?.surcharge_type === "none" || !e?.surcharge || e.surcharge === "0.00"), Xt = () => !!(e.pricing_strategy === "full_stock_plus_cut_length" || e.pricing_strategy === "full_stock_plus_num_parts" || e.pricing_strategy === "full_stock_plus_part_perimeter" || e.pricing_strategy === "part_area" || e.pricing_strategy === "roll_length" || Tt() || gt("banding") || gt("finish") || Ct()), te = (t) => {
      let n = t?.attributes?.attribute_size;
      return n || (n = c?.size), n;
    }, lt = (t) => /\d+x\d+/.test(t), ee = () => {
      window.smartcutConfig.input_fields.forEach((t) => {
        const n = t.replaceAll("_", "-");
        q[n] = document.getElementById(n);
      });
    }, ne = (t, n) => {
      Ft(), v.value = n, A(["variation selected", n.attributes]), m.value = [];
      const i = B(n, ["attributes", "attribute_thickness"]) ?? null;
      if (c.selected_thickness = i, p.value.forEach((s) => {
        s.t = ft({ v: i });
      }), c.multiple_sizes) {
        const s = te(n);
        if (A([`variation found with size: ${s} & thickness: ${i}`]), !s)
          return rt(!1), C("The size of this multiple size product could not be found");
        if (Array.isArray(s) ? N(y.value) : lt(s) ? rt(!0, !0) : N(y.value), S?.length) {
          let P;
          const _ = i;
          let k = n.display_price;
          Array.isArray(s) ? P = s.map((d) => ({
            size: d,
            l: d.split("x")[0],
            w: d.split("x")[1],
            t: _,
            price: k
          })) : P = S.filter((d) => lt(d?.attributes?.size) ? i === (d?.attributes?.thickness ?? null) : !1).map((d) => {
            const L = d?.attributes?.size.split("x")[0] ?? null, V = d?.attributes?.size.split("x")[1] ?? null;
            let D = 0;
            return n.display_price || (D = S.find((O) => lt(O.attributes?.size) && O.attributes?.thickness === d?.attributes?.thickness && O.attributes?.size === d?.attributes?.size && O.display_price > 0).display_price), A([
              `size attribute: '${d?.attributes?.size}'`,
              `price for thickness ${i}, dimensions: ${L}x${V} is ${k}`
            ]), {
              size: d?.attributes?.size,
              l: L,
              w: V,
              t: _,
              price: k || D
            };
          }), $.value === !0 && P.forEach((d) => {
            const L = tt(
              d.l,
              d.w,
              d.t,
              d.price,
              n?.attributes
            );
            m.value.push(L);
          });
        }
      } else {
        if (!S.some((s) => "thickness" in s.attributes))
          m.value.push(tt(
            c.l,
            c.w,
            i,
            n.display_price,
            n?.attributes
          ));
        else {
          const s = S.find((P) => P.attributes?.thickness === i);
          if (!s) return C(`variation not found for thickness ${i}`);
          m.value.push(tt(
            c.l,
            c.w,
            i,
            s.price,
            n?.attributes
          ));
        }
        N(y.value);
      }
    }, ae = (t) => {
      if (!ct("smartcut-api-result")) return;
      const n = q["smartcut-api-result"].closest("form");
      if (!n) return;
      const i = JSON.stringify(t.apiResultV3), s = new Blob([i], { type: "application/json" }), P = new File([s], "api-result.json", { type: "application/json" }), _ = new DataTransfer();
      _.items.add(P);
      const k = n.querySelector('[name="smartcut_api_result"]');
      k instanceof HTMLInputElement && (k.files = _.files);
    }, ie = async (t) => {
      const i = je(be, t, j.value, Wt).split(",")[1], s = new de();
      s.file("order-summary.pdf", i);
      const P = await s.generateAsync({ type: "blob" }), _ = new File([P], "order-summary.zip", { type: "application/zip" });
      if (!ct("smartcut-order-summary")) return;
      const k = q["smartcut-order-summary"].closest("form");
      if (!k) return;
      const d = new DataTransfer();
      d.items.add(_);
      const L = k.querySelector('[name="smartcut_order_summary"]');
      L instanceof HTMLInputElement && (L.files = d.files);
    }, re = async (t) => {
      Ft(), A(["result event received", t]);
      const n = await g(t);
      if (!n.success) {
        console.error(n.error);
        return;
      }
      const i = e.minimum_cut_to_size_price ?? 0;
      if (i > 0 && (n.totalPrice ?? 0) < i) {
        U(), u({
          message: `A minimum cut-to-size order of ${Y(i)} is required. Your order total is ${Y(n.totalPrice ?? 0)}.`,
          type: "warning"
        });
        return;
      }
      await ie(t), t.apiResultV3 && ae(t);
    }, se = (t, n) => {
      U(), t && (j.value = Ae(t)), _t("smartcut-hardware-price", n ?? 0);
    };
    return we(() => {
      console.log("💥 Powered by https://smartcut.dev", window?.smartcutConfig?.version), A(["Launching WordPress checkout..."]), I.banding = B(window, ["smartcutConfig", "banding_data"]), I.finish = B(window, ["smartcutConfig", "finish_data"]), f = B(window, ["smartcutConfig", "machining_pricing"]), S = B(window, ["smartcutConfig", "variations"]), Qt(), ee(), Nt(window.smartcutConfig), Ht(window.smartcutConfig), Rt(), Dt(), [
        "div.quantity > input.plus",
        "div.quantity > input.minus",
        "div.quantity .qty-plus",
        "div.quantity .qty-minus"
      ].forEach((i) => {
        const s = document.querySelector(i);
        s && (s.style.display = "none");
      });
      const n = new CustomEvent("smartcut/ready");
      window.dispatchEvent(n), A(["Wordpress checkout ready"]);
    }), (t, n) => (ut(), It(xe, null, [
      yt(nt(F), { position: "top-left" }),
      nt(M) === "development" && Oe ? (ut(), It("div", qe, [
        n[0] || (n[0] = ve("div", null, "WP - developer information", -1)),
        yt(nt(o), {
          data: [m.value],
          paths: ["stock"]
        }, null, 8, ["data"]),
        yt(nt(o), {
          data: [m.value.map((i) => i.trim)],
          paths: ["stock trim"]
        }, null, 8, ["data"])
      ])) : kt("", !0),
      T.value === "formula" && E.value ? (ut(), jt(nt(l), {
        key: 1,
        ref: "formulapricing",
        "format-price": Y,
        url: E.value,
        debug: w.value,
        onHardwareResult: se,
        onPanelResult: U
      }, null, 8, ["url", "debug"])) : kt("", !0),
      T.value === "manual" || T.value === "formula" && E.value ? (ut(), jt(ge, {
        key: 2,
        ref_key: "calculator",
        ref: z,
        readonly: T.value === "formula",
        "input-stock": h.value,
        "find-extras-price": mt,
        "format-price": Y,
        "input-type": T.value,
        onLog: A,
        onError: C,
        onInputsChanged: U,
        onValidationError: Vt,
        onResult: re
      }, null, 8, ["readonly", "input-stock", "input-type"])) : kt("", !0)
    ], 64));
  }
});
export {
  Qe as default
};

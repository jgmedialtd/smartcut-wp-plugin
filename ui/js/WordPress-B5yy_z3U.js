import { Y as J, Z as ue, a3 as vt, a4 as fe, T as de } from "./NestingShape-JAVnw-aP.js";
import { J as pe } from "./vendor-jszip-B4o1R1rN.js";
import { o as me, F as ge, n as _e, q as he, t as be, b as ye, g as N, e as ke, u as we, f as ve, i as Pe, p as Ce } from "./EcommerceCalculator-CTmE4c2O.js";
import { b as Se, d as xe } from "./i18n-_RhbYOEZ.js";
import { t as Fe } from "./i18n-DGE8ywV5.js";
import { E as Ae, a as H } from "./vendor-jspdf-BdWWvdnO.js";
import { d as Ee, l as Te, o as ct, c as $t, m as yt, u as lt, a as Le, b as kt, j as zt, F as $e, C as wt, s as V, O as ze, x as je, I as Oe, G as qe, P as Be } from "./vendor-vue-CrNGqS0k.js";
function ut(e) {
  const r = (f) => Se(xe(f), 100).replace(/\|/g, "_");
  return Array.isArray(e) ? e.map(r).join(",") : r(e);
}
function jt(e) {
  if (!e) return null;
  const r = {
    labels: [],
    pricing: {},
    displayNames: {}
  }, f = Object.values(e);
  for (const l of f)
    l?.variations ? (r.labels.push(...Object.keys(l.options)), Object.values(l.variations).forEach((c) => {
      const { options: o } = c, u = Object.values(o), w = u.map((h) => ut(h)), x = w.join("|");
      r.pricing[x] = parseFloat(c.price), c.sku && (r.codes ??= {}, r.codes[x] = c.sku), u.forEach((h, j) => {
        const t = w[j], d = Array.isArray(h) ? h.join(", ") : String(h);
        t && d && !r.displayNames[t] && (r.displayNames[t] = d);
      });
    })) : l?.options && Object.entries(l.options).forEach(([c, o]) => {
      const u = ut(c);
      r.pricing[u] = parseFloat(l.price), l.sku && (r.codes ??= {}, r.codes[u] = l.sku);
      const w = l.name || (typeof o == "string" ? o : Array.isArray(o) ? o.join(", ") : "");
      w && (r.displayNames[u] = w);
    });
  return r.labels.length || r.labels.push("type"), r;
}
function Ne(e, r) {
  if (!r.length || !me(e)) return null;
  const f = r.filter(
    (o) => o != null && String(o).trim() !== ""
  );
  if (!f.length) return null;
  const c = Object.values(e).map((o) => o?.variations ? Object.values(o.variations).map((u) => (u.type = "variable", u)) : (o.type = "simple", o)).flat().find((o) => {
    let u;
    return o.type === "simple" ? u = Object.keys(o.options) : u = Object.values(o.options), !u || u.length !== f.length ? !1 : u.every((w, x) => ut(w) === ut(f[x]));
  });
  return c?.price ? parseFloat(c.price) : null;
}
const Ot = new ge({});
function Pt(e, r, f) {
  const l = e?.pricingFormula, c = typeof l == "string" && l.trim() ? l : typeof r == "string" && r.trim() ? r : null;
  if (!c) return null;
  const o = c.trim().startsWith("=") ? c.trim().substring(1).trim() : c.trim(), u = Me(f), w = Array.isArray(e.sheets) && e.sheets.length > 0 ? e.sheets : void 0;
  try {
    if (w) {
      let d = 0;
      for (const s of w) {
        const v = s.q ?? 1, i = qt(e, s.analysis ?? {}, v, u), p = Ot.evaluateExpression(o, i), y = Number(p);
        if (!Number.isFinite(y) || y < 0) return null;
        d += y * v;
      }
      return d;
    }
    const x = e.q ?? 1, h = qt(e, e.analysis ?? {}, x, u), j = Ot.evaluateExpression(o, h), t = Number(j);
    return !Number.isFinite(t) || t < 0 ? null : t * x;
  } catch (x) {
    return console.error("[pricing-formula] evaluation failed", { formula: c, err: x }), null;
  }
}
function qt(e, r, f, l) {
  const c = (e.l ?? 0) * (e.w ?? 0), o = r?.partArea ?? 0, u = J({ v: e.cost }) ?? 0, w = Number(e.discount), x = Number.isFinite(w) ? Math.max(0, Math.min(100, w)) : 0, h = u * (1 - x / 100);
  return {
    usedFraction: c > 0 && f > 0 ? o / (c * f) : 0,
    stockArea: c,
    discountedCost: h,
    l: e.l ?? 0,
    w: e.w ?? 0,
    t: e.t ?? 0,
    q: f,
    cost: u,
    discount: x,
    // Per-row weight for the shipping formula. Falls through to density
    // × volume when the stock row carries `density` instead of a stored
    // `weight` — keeps the formula context in sync with the result-mapper
    // row payload (same compute helper, same fallback rules).
    weight: he(e) ?? 0,
    "analysis.partArea": o,
    "analysis.areaEfficiency": r?.areaEfficiency ?? 0,
    "analysis.totalParts": r?.totalParts ?? 0,
    "analysis.cutLength": r?.cutLength ?? 0,
    "analysis.stackedCutLength": r?.stackedCutLength ?? 0,
    "analysis.numberOfCuts": r?.numberOfCuts ?? 0,
    "analysis.stackedNumberOfCuts": r?.stackedNumberOfCuts ?? 0,
    "analysis.bandingLength": r?.bandingLength ?? 0,
    "analysis.finishArea": r?.finishArea ?? 0,
    "analysis.rollLength": r?.rollLength ?? 0,
    ...l
  };
}
const Ie = [
  "totalUsedStock",
  "totalStockCost",
  "totalPartArea",
  "totalCutLength",
  "totalPartsProduced"
];
function Me(e) {
  const r = {};
  for (const f of _e(be))
    r[`metadata.${f}`] = 0;
  for (const f of Ie) {
    const l = e?.[f];
    typeof l == "number" && (r[`metadata.${f}`] = l);
  }
  return r;
}
function Ve(e, r) {
  return !!r?.trim() || e.some((f) => typeof f.pricingFormula == "string" && f.pricingFormula.trim());
}
function et(e, r, f) {
  return e.reduce((l, c) => {
    const o = Pt(c, f, r);
    if (o !== null) return l + o;
    const u = c.q ?? 1, w = typeof c.cost == "object" ? J(c.cost) : c.cost || 0;
    return l + w * u;
  }, 0);
}
const Re = 1e3, Ue = 1e6, Qe = 12, He = 144;
function U(e, r) {
  return r === "area" ? e === "imperial" ? He : Ue : e === "imperial" ? Qe : Re;
}
function Ye(e, r, f, l) {
  const { strategy: c, unitSystem: o, cutLengthPrice: u = 0, perPartPrice: w = 0, productPrice: x = 0, pricingFormula: h, minCutLengthCharge: j } = f, t = (s) => j && j > 0 && s > 0 ? Math.max(s, j) : s, d = {
    total: 0,
    breakdown: {},
    strategy: c
  };
  switch (c) {
    case "full_stock": {
      const s = et(r, e, h);
      d.breakdown.stockCost = s, d.total = s;
      break;
    }
    case "part_area": {
      const s = U(o, "area");
      let v = 0;
      for (const i of r) {
        const p = Pt(i, h, e);
        if (p !== null) {
          v += p;
          continue;
        }
        const y = typeof i.cost == "object" ? J(i.cost) : i.cost || 0;
        if (!y) continue;
        const P = i.l * i.w;
        if (P === 0) continue;
        const F = i.analysis?.partArea || 0;
        F > 0 && (v += F / P * y);
      }
      v === 0 && e.totalPartArea > 0 && x > 0 && (v = e.totalPartArea / s * x), d.breakdown.partAreaCost = v, d.total = v;
      break;
    }
    case "cut_length": {
      const s = U(o, "length"), i = e.totalCutLength / s * u;
      d.breakdown.cutLengthCost = i, d.total = i;
      break;
    }
    case "full_stock_plus_cut_length": {
      const s = et(r, e, h);
      d.breakdown.stockCost = s;
      const v = U(o, "length"), i = e.totalCutLength / v, p = t(i * u);
      d.breakdown.cutLengthCost = p, d.total = s + p;
      break;
    }
    case "full_stock_plus_num_parts": {
      const s = et(r, e, h);
      d.breakdown.stockCost = s;
      const v = e.totalPartsProduced * w;
      d.breakdown.perPartCost = v, d.total = s + v;
      break;
    }
    case "full_stock_plus_part_perimeter": {
      const s = et(r, e, h);
      d.breakdown.stockCost = s;
      const v = U(o, "length"), i = l && l.length > 0 ? l.reduce((y, P) => y + 2 * (P.l + P.w) * (P.q ?? 1), 0) : e.totalCutLength, p = t(i / v * u);
      d.breakdown.cutLengthCost = p, d.total = s + p;
      break;
    }
    case "roll_length": {
      const s = U(o, "length");
      let v = 0;
      for (const i of r) {
        const p = Pt(i, h, e);
        if (p !== null) {
          v += p;
          continue;
        }
        const y = i.analysis?.rollLength || 0, P = typeof i.cost == "object" ? J(i.cost) : i.cost || 0;
        v += y / s * P;
      }
      d.breakdown.rollLengthCost = v, d.total = v;
      break;
    }
    default: {
      const s = et(r, e, h);
      d.breakdown.stockCost = s, d.total = s;
    }
  }
  return d;
}
const Nt = ["banding", "finish", "cutLength", "perPart", "partArea", "offcutArea", "rollLength", "surcharge", "machining", "stock", "custom"], We = (e) => Nt.includes(e);
function De(e, r) {
  const f = (i) => {
    r.log?.(i);
  }, l = (i) => (r.error?.(i), { success: !1, error: i }), c = () => {
    for (const i of Nt) h(i, 0);
  };
  let o = 1;
  const u = (i, p = 0) => {
    r.setCartQuantity(i, p), o = Number(i.toFixed(p));
  }, w = () => {
    const { product: i, getCurrentVariationPrice: p } = r, y = i?.price || p(!0) || 0;
    return typeof y == "string" ? parseFloat(y) : y;
  }, x = (i) => {
    const p = e.pricing_strategy;
    return p === "cut_length" ? !0 : r.isQuantityPricing() && !Ve(i.stock, e.pricing_formula) && (p === "full_stock" || p === "part_area");
  }, h = (i, p) => {
    f(["setting price", i, p]);
    const { inputs: y, elements: P, setInputValue: F, formatPrice: _ } = r;
    if (isNaN(p)) throw new Error("Price must be a number");
    if (!We(i)) return;
    const S = {
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
    }[i];
    S?.hidden && y[S.hidden] && (f(["setting hidden price", S.hidden, p]), F(S.hidden, p)), S?.visible && P[S.visible] && (P[S.visible].innerText = _(p));
  }, j = (i, p, y) => {
    if (!i?.offcuts?.length) return 0;
    const P = i.offcuts.filter((L) => {
      const S = Math.max(L.l, L.w), k = Math.min(L.l, L.w);
      return S >= (e.offcut_min_length || 0) && k >= (e.offcut_min_width || 0);
    });
    if (P.length === 0) return 0;
    const F = e.offcut_pricing_mode || "percentage";
    let _ = 0;
    switch (F) {
      case "free":
        _ = 0, f(["offcut pricing mode: free, price = $0"]);
        break;
      case "fixed":
        _ = e.offcut_fixed_price || 0, f([`offcut pricing mode: fixed, price = ${_}`]);
        break;
      default: {
        const L = (e.offcut_pricing_percentage ?? 100) / 100, S = /* @__PURE__ */ new Map();
        for (const k of P) {
          const E = k.stockId;
          E && (S.has(E) || S.set(E, []), S.get(E).push(k));
        }
        for (const [k, E] of S) {
          const b = i.stock?.find((T) => T.id === k);
          if (!b || !b.cost) continue;
          const O = b.l * b.w;
          if (O === 0) continue;
          const q = E.reduce((T, R) => T + R.l * R.w * (R.q || 1), 0);
          _ += q / O * J({ v: b.cost }) * L;
        }
        _ === 0 && P.length > 0 && (_ = P.reduce((b, O) => b + O.l * O.w * (O.q || 1), 0) / p * y * L), f([`offcut pricing mode: percentage (${L * 100}%), price = ${_}`]);
        break;
      }
    }
    return _;
  }, t = (i) => {
    const { isQuantityPricing: p } = r, y = w(), P = e.unit_system === "imperial" ? "feet" : "meters", F = e.pricing_formula, _ = e.pricing_strategy, L = {
      strategy: _,
      unitSystem: e.unit_system,
      cutLengthPrice: e.cut_length_price,
      perPartPrice: e.per_part_price,
      productPrice: y,
      pricingFormula: F,
      minCutLengthCharge: e.min_cut_length_charge
    };
    f([`calculating cost by ${_} in ${P}`]);
    const S = Ye(
      i.metadata,
      i.stock,
      L,
      i.inputs?.parts
    ), { breakdown: k } = S;
    k.stockCost !== void 0 && h("stock", k.stockCost), k.partAreaCost !== void 0 && h("partArea", k.partAreaCost), k.cutLengthCost !== void 0 && h("cutLength", k.cutLengthCost), k.perPartCost !== void 0 && h("perPart", k.perPartCost), k.rollLengthCost !== void 0 && h("rollLength", k.rollLengthCost);
    let E = S.total;
    if (_ === "part_area" && e?.enable_offcut_pricing && i?.offcuts) {
      const b = U(e.unit_system, "area"), O = j(i, b, y);
      h("offcutArea", O), E += O;
    }
    if (p())
      if (_ === "cut_length") {
        const b = U(e.unit_system, "length");
        u(i.metadata.totalCutLength / b, 2);
      } else if (_ === "part_area") {
        const b = U(e.unit_system, "area");
        u(i.metadata.totalPartArea / b, 2);
      } else
        u(i.metadata.totalUsedStock);
    return E;
  }, d = (i) => {
    const {
      isExtraEnabled: p,
      isMachiningEnabled: y,
      isSurchargeEnabled: P,
      inputType: F,
      getTotalBandingPrice: _,
      getTotalFinishPrice: L,
      getTotalMachiningPrice: S,
      getInputValue: k
    } = r;
    let E = 0;
    if (p("banding") && i.metadata.bandingLengthByType) {
      const b = _(i);
      h("banding", b), E += b;
    }
    if (p("finish") && i.metadata.finishAreaByType) {
      const b = L(i);
      h("finish", b), E += b;
    }
    if (F.value === "formula") {
      const b = parseFloat(k("smartcut-hardware-price"));
      isNaN(b) || (E += b);
    }
    if (y()) {
      const b = S(i);
      h("machining", b), E += b;
    }
    if (P() && e.surcharge) {
      const b = e.surcharge_type === "per_sheet" ? parseFloat(e.surcharge.toString()) * i.metadata.totalUsedStock : parseFloat(e.surcharge.toString());
      h("surcharge", b), f(["added surcharge", b]), E += b;
    }
    return E;
  }, s = (i) => {
    const { getInputValue: p, setInputValue: y } = r, P = {
      "smartcut-job-id": i.jobId,
      "smartcut-dimensions": i.parts.map((F) => `${F.l}x${F.w} [${F.q}]`).join(", "),
      "smartcut-total-cut-length": i.metadata.totalCutLength,
      "smartcut-part-area": i.metadata.totalPartArea,
      "smartcut-total-cuts": i.metadata.totalCuts,
      "smartcut-total-parts": i.metadata.totalPartsProduced,
      "smartcut-machining": i.metadata.hasMachining
    };
    if (Object.entries(P).forEach(([F, _]) => {
      p(F) !== void 0 && y(F, _);
    }), p("smartcut-stock-summary") !== void 0) {
      const F = i.stock.map((_) => `${_.l}x${_.w}${_.t ? "x" + _.t : ""} [${_.q}]`).join(", ");
      y("smartcut-stock-summary", F);
    }
  };
  return {
    calculatePrice: async (i) => {
      c(), o = 1;
      const { isQuantityPricing: p, selectedVariation: y, setVariationPrice: P, enableAddToCart: F } = r;
      if (!i?.jobId)
        return l("No job ID provided");
      p() || u(1);
      const _ = t(i), L = d(i);
      if (F(), !p() && !i.metadata.totalStockCost)
        return l("Total stock cost not returned for a multiple size product");
      if (!(o > 0))
        return l(`Cart quantity resolved to ${o} — cannot derive a unit price`);
      const S = w();
      let k;
      x(i) ? k = L > 0 ? S + L / o : 0 : k = (_ + L) / o, h("custom", k);
      const E = k > 0 ? k : S, b = E * o;
      return f([`order total ${b} = ${E} × ${o}`]), y.value && P(b), s(i), { success: !0, customPrice: k, orderTotal: b };
    },
    resetPricing: c
  };
}
const Bt = ["L1", "L2", "W1", "W2"], Ke = ["A", "B"], Ge = ["y1", "y2", "x1", "x2"];
function It(e) {
  return "extras" in e && e.extras ? ue.map((r, f) => ({ label: Bt[f], value: vt(e.extras?.banding?.sides?.[r], "-") })).filter(({ value: r }) => r !== "-").map(({ label: r, value: f }) => `${r}: ${f}`).join(`
`) || "-" : Ge.map((r, f) => ({ label: Bt[f], value: vt(e.banding?.[r], "-") })).filter(({ value: r }) => r !== "-").map(({ label: r, value: f }) => `${r}: ${f}`).join(`
`) || "-";
}
function Mt(e) {
  return fe.map((r, f) => ({ label: Ke[f], value: vt(e.extras?.finish?.faces?.[r] ?? e.finish?.faces?.[r], "-") })).filter(({ value: r }) => r !== "-").map(({ label: r, value: f }) => `${r}: ${f}`).join(`
`) || "-";
}
const Je = (e, r, f) => {
  const l = [];
  e?.name && l.push(`Name: ${e.name}`), e?.code && l.push(`Code: ${e.code}`);
  const c = r(e.l), o = r(e.w), u = e.t ? r(e.t) : null;
  l.push(`Dimensions: ${c} × ${o}${u ? ` × ${u}` : ""}`);
  const x = (e?.code ? f?.get(String(e.code).toUpperCase()) : void 0) || e?.customData?.materialName || e?.material;
  x && l.push(`Material: ${String(x).toUpperCase()}`), e?.q != null && l.push(`Quantity: ${r(e.q)}`);
  const h = It(e);
  if (h && h !== "-") {
    l.push("Banding:");
    for (const t of h.split(`
`)) l.push(`  ${t}`);
  }
  const j = Mt(e);
  if (j !== "-") {
    l.push("Finish:");
    for (const t of j.split(`
`)) l.push(`  ${t}`);
  }
  return e?.notes && l.push(`Notes: ${e.notes}`), l.join(`
`);
}, Y = 5, nt = 10, W = {
  fillColor: [7, 59, 76],
  fontStyle: "normal"
}, D = {
  fontSize: 9
}, K = { left: 10 };
let G = [];
const Ze = (e, r, f, l = (c) => c.toString()) => {
  const c = new Ae({ orientation: "landscape" });
  let o = 10;
  c.setFontSize(20), c.text(e("pdf.order_summary"), 10, o), o += 15, c.setFontSize(14), c.text(`${e("general.your")} ${e("woodwork.part")}`, 10, o), o += Y, G = [
    e("woodwork.length"),
    e("woodwork.width"),
    e("woodwork.thickness"),
    e("woodwork.material"),
    e("woodwork.code"),
    e("woodwork.quantity"),
    e("woodwork.name"),
    e("woodwork.banding"),
    e("woodwork.finish")
  ];
  const u = /* @__PURE__ */ new Map();
  for (const t of r.stock || []) {
    const d = t?.customData?.materialName || t?.material;
    t?.code && d && u.set(String(t.code).toUpperCase(), String(d));
  }
  const w = r.parts.map((t) => {
    const s = (t?.code ? u.get(String(t.code).toUpperCase()) : void 0) || t?.customData?.materialName || t?.material;
    return [
      l(t.l),
      l(t.w),
      l(t.t) || "-",
      s ? String(s).toUpperCase() : "-",
      t?.code || "-",
      l(t.q),
      t.name || "-",
      It(t),
      Mt(t)
    ];
  }), x = 6;
  H(c, {
    startY: o,
    head: [G],
    body: w,
    margin: K,
    headStyles: W,
    styles: D,
    didDrawCell: (t) => {
      if (t.section !== "body" || t.column.index !== x) return;
      const d = r.parts[t.row.index];
      if (d)
        try {
          const s = Je(d, l, u);
          if (!s) return;
          c.createAnnotation({
            type: "text",
            title: d?.name || "Part",
            contents: s,
            bounds: {
              x: t.cell.x + 1,
              y: t.cell.y + 1,
              w: 8,
              h: 8
            },
            open: !1
          });
        } catch (s) {
          console.error("Error adding part annotation:", s);
        }
    }
  }), o = c.lastAutoTable.finalY + nt, c.setFontSize(14), c.text(e("pdf.stock_requirements"), 10, o), o += Y, G = [
    e("woodwork.length"),
    e("woodwork.width"),
    e("woodwork.thickness"),
    e("woodwork.material"),
    e("woodwork.code"),
    e("woodwork.quantity")
    // 'Cost'
  ];
  const h = r.stock.map((t) => {
    const d = t?.customData?.materialName || t?.material;
    return [
      l(t.l),
      l(t.w),
      l(t.t) || "-",
      d ? String(d).toUpperCase() : "-",
      t?.code || "-",
      l(t.q)
      // stock.cost
    ];
  });
  if (H(c, {
    startY: o,
    head: [G],
    body: h,
    margin: K,
    headStyles: W,
    styles: D
  }), o = c.lastAutoTable.finalY + nt, r.metadata.totalRollLength > 0) {
    c.setFontSize(14), c.text(e("pdf.roll_requirements"), 10, o), o += Y, G = [
      e("woodwork.name"),
      e("woodwork.material"),
      e("woodwork.length")
    ];
    const t = r.stock.map((d) => {
      const s = d?.customData?.materialName || d?.customData?.stockName || d?.material;
      return [
        d?.name?.toUpperCase() || "-",
        s ? String(s).toUpperCase() : "-",
        l(d.analysis.rollLength)
      ];
    });
    H(c, {
      startY: o,
      head: [G],
      body: t,
      margin: K,
      headStyles: W,
      styles: D
    }), o = c.lastAutoTable.finalY + nt;
  }
  if (f && Object.values(f)) {
    c.setFontSize(14), c.text(e("pdf.hardware"), 10, o), o += Y;
    const t = Object.values(f).map((d) => [
      d.name.toUpperCase(),
      l(d.q)
      // item.totalCost.toFixed( 2 )
    ]);
    H(c, {
      startY: o,
      head: [[e("pdf.item"), e("woodwork.quantity")]],
      body: t,
      margin: K,
      headStyles: W,
      styles: D
    }), o = c.lastAutoTable.finalY + nt;
  }
  c.setFontSize(14), c.text(e("pdf.totals"), 10, o), o += Y;
  const j = [
    [e("pdf.total_parts"), l(r.metadata.totalPartsProduced)],
    [e("pdf.part_area"), l(r.metadata.totalPartArea)],
    [e("pdf.total_stock_required"), l(r.metadata.totalUsedStock)],
    [e("pdf.total_banding_length"), l(r.metadata.totalBandingLength)],
    [e("pdf.total_finish_area"), l(r.metadata.totalFinishArea)],
    [e("pdf.total_roll_length"), l(r.metadata.totalRollLength)]
  ];
  if (H(c, {
    startY: o,
    body: j,
    margin: K,
    headStyles: W,
    styles: D
  }), o = c.lastAutoTable.finalY + nt, window?.smartcutImages?.length) {
    c.addPage();
    let t = 10;
    c.setFontSize(14), c.text(e("pdf.images"), 10, t), t += Y;
    const d = window.smartcutImages.flatMap((s, v) => s.metadata.map((i) => [
      v + 1,
      i.newName
    ]));
    H(c, {
      startY: t,
      body: d,
      head: [[e("pdf.part_index"), e("pdf.file_name")]],
      margin: K,
      headStyles: W,
      styles: D
    });
  }
  return c.output("datauristring");
}, Xe = {
  key: 0,
  class: "debug"
}, ln = /* @__PURE__ */ Ee({
  __name: "WordPress",
  setup(e) {
    const r = wt(() => import("./Configurator-Cgvs20oP.js")), f = wt(() => import("./ObjectViewer-IjOsrd1T.js")), l = wt(() => import("./Notices-DFNWLH6S.js")), { inputShapes: c } = ye(), { addNotice: o } = we(), u = {}, w = {}, x = V(null);
    let h, j, t;
    const d = {
      banding: null,
      finish: null
    };
    let s = null, v = [], i = null, p = {};
    const y = V(!1), P = V("manual"), F = V(""), _ = ze([]), L = je(() => _.value), S = V(null), k = V(!0), E = V(null), b = V(!1), O = V(null);
    Be("calculator", () => O.value);
    const q = (n) => {
      y.value && console.log("SmartCut -", ...n);
    }, T = (n) => {
      console.error(`SmartCut - ${n}`);
    }, R = (n = !0) => {
      b.value = !0, ["checkout", "intro_text", "offcuts", "banding_key"].forEach((m) => X(m, "block")), ee() && X("pricing_table", "table"), n ? it(!0) : ft(), M();
    }, rt = (n = !0, a = !0) => {
      b.value = !1, ["checkout", "intro_text", "offcuts", "banding_key", "pricing_table"].forEach((g) => X(g, "none")), a === !0 ? Ct() : a === !1 && M(), it ? it() : n === !1 && ft();
    }, it = (n = !1) => {
      X("quantity", "inline-block"), u.quantity.readOnly = n;
    }, ft = () => {
      b.value !== !1 && (dt(1), X("quantity", "none"), u.quantity.readOnly = !0);
    }, Ct = () => {
      if (!u.cart_button) {
        T("Cart button not found");
        return;
      }
      u.cart_button.disabled = !1;
    }, M = () => {
      if (b.value !== !1) {
        if (!u.cart_button) {
          T("Cart button not found");
          return;
        }
        u.cart_button.disabled = !0;
      }
    }, Vt = () => {
      T("Validation error"), M();
    }, dt = (n, a = 0) => {
      if (q(["setting cart quantity", n]), !u.quantity) {
        T("Quantity field not found when trying to set");
        return;
      }
      u.quantity.value = n.toFixed(a), console.assert(u.quantity.value === n.toFixed(a), "Quantity field value not set correctly");
    }, Rt = (n) => {
      q(["setting variation price", n]);
      const a = document.querySelector(".woocommerce-variation-price .smartcut-price-selector");
      a && (a.innerText = Q(n)), x.value = n;
    }, Ut = (n = !1) => {
      const a = n ? S.value?.display_price ?? 0 : x.value ?? S.value?.display_price ?? 0;
      return console.log("getCurrentVariationPrice", x.value, S.value?.display_price), typeof a == "string" ? parseFloat(a) : a;
    }, Qt = () => {
      if (!window?.smartcutConfig) {
        T("SmartCut config not found");
        return;
      }
      const n = window.smartcutConfig;
      t = n.settings;
      const a = jt(N(window, ["smartcutConfig", "banding_data"])), m = jt(N(window, ["smartcutConfig", "finish_data"])), g = (B) => {
        switch (B) {
          case "length":
            return { cutType: "guillotine", cutPreference: "l" };
          case "width":
            return { cutType: "guillotine", cutPreference: "w" };
          // 'flex' is a live value (per-sheet direction choice), not a legacy alias for 'l'.
          case "flex":
            return { cutType: "guillotine", cutPreference: "flex" };
          // Efficiency has no direction — `undefined` is the representation (the saw-rules
          // registry clears any value sent here; there is no 'none' sentinel).
          case "efficiency":
            return { cutType: "efficiency", cutPreference: void 0 };
          case "beam":
            return { cutType: "beam", cutPreference: "l" };
          default:
            return { cutType: "guillotine", cutPreference: "l" };
        }
      }, { cutType: A, cutPreference: $ } = g(t.cut_preference), z = {
        stockType: t.stock_type,
        bladeWidth: t.blade_width,
        cutType: A,
        cutPreference: $,
        stackHeight: t.stack_height || 100,
        guillotineOptions: {
          strategy: "efficiency",
          maxPhase: 0,
          headCuts: !1,
          limitStripDimensions: !1
        }
      }, C = {
        apiVersion: 3,
        debug: t.debug,
        numberFormat: t.numberFormat || "decimal",
        locale: n.locale,
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
          button: t?.button_color ?? "#0e7fa6",
          buttonText: t?.button_text_color ?? "#ffffff",
          text: t?.text_color ?? "#ffffff"
        }
      };
      y.value = C.debug;
      const I = {
        numberFormat: t.number_format,
        decimalPlaces: 2,
        fractionRoundTo: 0,
        faces: {
          enabled: t.machining_sides
        },
        holes: {
          enabled: t.machining_holes,
          defaultDiameter: t.machining_holes_default_diameter,
          diameters: t.machining_holes_diameters.split(",").map((B) => B.trim()).filter(Boolean),
          minDiameter: t.machining_holes_min_diameter,
          maxDiameter: t.machining_holes_max_diameter,
          enableDepth: t.machining_holes_depth,
          depths: t.machining_holes_depths.split(",").map((B) => B.trim()).filter(Boolean),
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
      k.value = At(), k.value ? it(!0) : ft(), s.type === "variable" ? rt(!1, !1) : R(k.value);
      const tt = {
        type: s.type,
        stock: _.value.map((B) => B.toData()),
        variations: v ?? null,
        saw: z,
        options: C,
        banding: a,
        finish: m,
        machining: I
      };
      tt.type === "variable" && (q(["setting variable product form listeners"]), jQuery(function(B) {
        const Lt = B(".variations_form");
        Lt.on("reset_data", () => rt(!1, !1)).on("found_variation", (bt, le) => ie(bt, le));
        const ht = Lt.find("select");
        ht.length > 0 && ht.toArray().every((bt) => bt.value !== "") && ht.last().trigger("change");
      }));
      const st = {
        product: s,
        selectedVariation: S,
        inputs: w,
        elements: u,
        inputType: P,
        formatPrice: Q,
        getCurrentVariationPrice: Ut,
        setInputValue: mt,
        setCartQuantity: dt,
        setVariationPrice: Rt,
        isExtraEnabled: gt,
        isQuantityPricing: At,
        isMachiningEnabled: Et,
        isSurchargeEnabled: Tt,
        getTotalBandingPrice: Zt,
        getTotalFinishPrice: Jt,
        getTotalMachiningPrice: Xt,
        getInputValue: te,
        enableAddToCart: Ct,
        log: q,
        error: T
      }, _t = De({
        pricing_strategy: t.pricing_strategy,
        number_format: t.number_format,
        unit_system: t.unit_system,
        cut_length_price: t.cut_length_price,
        min_cut_length_charge: t.min_cut_length_charge,
        per_part_price: t.per_part_price,
        surcharge: t.surcharge,
        surcharge_type: t.surcharge_type,
        enable_offcut_pricing: t.enable_offcut_pricing,
        offcut_min_length: t.offcut_min_length,
        offcut_min_width: t.offcut_min_width,
        // Forward the WC plugin's per-product pricing override. The
        // runtime in useProductPricing falls back to this when a stock
        // has no per-stock `pricingFormula` (the platform rules path).
        pricing_formula: t.pricing_formula
      }, st);
      h = _t.calculatePrice, j = _t.resetPricing, Oe(() => {
        O.value && O.value.init(tt);
      });
    }, Ht = (n) => {
      const a = n?.multiple_sizes === !0;
      s = {
        type: n?.product_type,
        multiple_sizes: a,
        size: n?.size ? n.size.split(" | ") : [],
        l: !a && n?.l ? parseFloat(n.l) : null,
        w: !a && n?.w ? parseFloat(n.w) : null,
        t: n?.t ?? null,
        price: n?.price ? parseFloat(n.price) : null,
        stock_name: n?.stock_sku || n.stock_name,
        stock_sku: n?.stock_sku || null
      }, s.multiple_sizes || (s.l || T("product 'length' attribute not available"), s.w || T("product 'width' attribute not available"));
    }, Yt = (n) => {
      P.value = N(window, ["smartcutConfig", "settings", "enable_formula"]) === !0 ? "formula" : "manual", F.value = N(window, ["smartcutConfig", "settings", "formula_url"]), q([`Input type: ${P.value}`]), p = {
        thousands_separator: n?.thousands_separator,
        decimal_separator: n?.decimal_separator,
        number_of_decimals: n?.number_of_decimals,
        currency_symbol: n?.currency_symbol,
        currency_position: n?.currency_position
      };
    }, Wt = () => {
      const n = {
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
      for (const [a, m] of Object.entries(n))
        u[a] = document.querySelector(m);
      if (!u.checkout)
        return T("checkout iframe not found");
      if (!u.quantity)
        return T("quantity field not found");
      if (!u.cart_button)
        return T("cart button not found");
      u.quantity.readOnly = !0, M();
    }, Dt = () => ({
      w1: t.stock_trim_x1 ?? 0,
      w2: t.stock_trim_x2 ?? 0,
      l1: t.stock_type === "linear" ? 0 : t.stock_trim_y1 ?? 0,
      l2: t.stock_type === "linear" ? 0 : t.stock_trim_y2 ?? 0
    }), Z = (n = null, a = null, m = null, g = null, A = null) => {
      let $;
      if (A && typeof A == "object") {
        $ = [];
        for (const [C, I] of Object.entries(A))
          C !== "attribute_size" && C !== "attribute_thickness" && $.push(`${C.replace("attribute_", "")}: ${I}`);
        $ = $.join(" - ");
      }
      const z = {
        name: s.stock_name,
        code: s.stock_sku || void 0,
        l: n,
        w: a,
        t: m,
        grain: t.stock_grain,
        cost: parseFloat(g?.toString() || "0"),
        trim: Dt(),
        // Opt-in: a part matching the untrimmed sheet drops the stock trim so the
        // board ships whole. Off by default — with trim set, the usable size is
        // smaller than the raw sheet and ordering the raw size is not cuttable.
        allowExactFitShapes: t.allow_full_stock_orders === !0,
        notes: $
      };
      return new de(z, t.numberFormat || "decimal");
    }, Kt = () => {
      if (s?.stock_name || T("product name not specified"), _.value = [], s.multiple_sizes)
        for (const n of s.size) {
          if (!ot(n)) continue;
          const [a, m] = n.split("x"), g = Z(
            parseFloat(a),
            parseFloat(m),
            s?.t,
            s.price
          );
          _.value.push(g);
        }
      else
        _.value.push(Z(
          s.l,
          s.w,
          s?.t,
          s?.price
        ));
    }, St = (n, a) => {
      const m = n.split(".");
      return m[0] = m[0].replace(/\B(?=(\d{3})+(?!\d))/g, a), m.join(".");
    }, Q = (n = 0, a = "") => {
      if (!n)
        return a ? xt("0.00") : "0.00";
      typeof n == "string" && (n = parseFloat(n));
      const m = n.toFixed(p.number_of_decimals).replace(".", p.decimal_separator), g = St(m, p.thousands_separator);
      return a ? xt(g) : g;
    }, Gt = (n) => {
      if (n == null) return "";
      typeof n == "string" && (n = parseFloat(n));
      const m = n % 1 !== 0 ? p.number_of_decimals : 0, g = n.toFixed(m).replace(".", p.decimal_separator);
      return St(g, p.thousands_separator);
    }, xt = (n) => {
      switch (p.currency_position) {
        case "left":
          return `${p.currency_symbol}${n}`;
        case "right":
          return `${n}${p.currency_symbol}`;
        default:
          return `${p.currency_symbol}${n}`;
      }
    }, pt = (n, a) => Ne(N(d, [n]), a), Jt = (n) => {
      const a = n.metadata?.finishAreaByType ?? {};
      let m = 0;
      if (typeof a == "object") {
        for (let [g, A] of Object.entries(a)) {
          typeof A == "string" && (A = parseFloat(A));
          const $ = g.split("|"), z = pt("finish", $);
          if (z === null) continue;
          const C = Pe(parseFloat(z.toString()), Number(A));
          m += C;
        }
        if ("min_finish_charge" in t) {
          const g = parseFloat(t?.min_finish_charge);
          if (g > 0 && m > 0 && m < g)
            return g;
        }
      }
      return m;
    }, Zt = (n) => {
      const a = n.metadata?.bandingLengthByType ?? {};
      let m = 0;
      if (typeof a == "object") {
        for (let [g, A] of Object.entries(a)) {
          typeof A == "string" && (A = parseFloat(A));
          const $ = g.split("|"), z = pt("banding", $);
          if (z === null) continue;
          const C = Ce(parseFloat(z.toString()), Number(A), t.unit_system === "imperial" ? "imperial" : "metric");
          m += C;
        }
        if ("min_banding_charge" in t) {
          const g = parseFloat(t?.min_banding_charge);
          if (g > 0 && m > 0 && m < g)
            return g;
        }
      }
      return m;
    }, Xt = (n) => (i.holes ?? 0) * (n.metadata.numHoles ?? 0) + (i.corners ?? 0) * (n.metadata.numCorners ?? 0), X = (n, a) => {
      n in u && u[n]?.style && (u[n].style.display = a);
    }, mt = (n, a) => {
      at(n) ? w[n].value = a : T(`Attempting to set input but key '${n}' does not exist`);
    }, te = (n) => {
      if (at(n))
        return w[n].value;
    }, at = (n) => n in w && w[n] instanceof HTMLInputElement, Ft = () => {
      dt(1), M(), j();
      for (const n in w)
        n !== "smartcut-hardware-price" && mt(n, null);
    }, At = () => {
      if (window.smartcutConfig?.product_type === "variable")
        return !1;
      switch (t.pricing_strategy) {
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
    }, gt = (n) => {
      if (ve(t, ["enable", n]) && N(t, ["enable", n]) === !1)
        return !1;
      const a = N(d, [n]);
      return !!(a && Object.values(a).length);
    }, Et = () => t.enable_machining === !0, Tt = () => !(t?.surcharge_type === "none" || !t?.surcharge || t.surcharge === "0.00"), ee = () => !!(t.pricing_strategy === "full_stock_plus_cut_length" || t.pricing_strategy === "full_stock_plus_num_parts" || t.pricing_strategy === "full_stock_plus_part_perimeter" || t.pricing_strategy === "part_area" || t.pricing_strategy === "roll_length" || Tt() || gt("banding") || gt("finish") || Et()), ne = (n) => {
      let a = n?.attributes?.attribute_size;
      return a || (a = s?.size), a;
    }, ot = (n) => /\d+x\d+/.test(n), re = () => {
      window.smartcutConfig.input_fields.forEach((n) => {
        const a = n.replaceAll("_", "-");
        w[a] = document.getElementById(a);
      });
    }, ie = (n, a) => {
      Ft(), S.value = a, q(["variation selected", a.attributes]), _.value = [];
      const m = N(a, ["attributes", "attribute_thickness"]) ?? null;
      if (s.selected_thickness = m, c.value.forEach((g) => {
        g.t = J({ v: m });
      }), s.multiple_sizes) {
        const g = ne(a);
        if (q([`variation found with size: ${g} & thickness: ${m}`]), !g)
          return rt(!1), T("The size of this multiple size product could not be found");
        if (Array.isArray(g) ? R(k.value) : ot(g) ? rt(!0, !0) : R(k.value), v?.length) {
          let A;
          const $ = m;
          let z = a.display_price;
          Array.isArray(g) ? A = g.map((C) => ({
            size: C,
            l: C.split("x")[0],
            w: C.split("x")[1],
            t: $,
            price: z
          })) : A = v.filter((C) => ot(C?.attributes?.size) ? m === (C?.attributes?.thickness ?? null) : !1).map((C) => {
            const I = C?.attributes?.size.split("x")[0] ?? null, tt = C?.attributes?.size.split("x")[1] ?? null;
            let st = 0;
            return a.display_price || (st = v.find((B) => ot(B.attributes?.size) && B.attributes?.thickness === C?.attributes?.thickness && B.attributes?.size === C?.attributes?.size && B.display_price > 0).display_price), q([
              `size attribute: '${C?.attributes?.size}'`,
              `price for thickness ${m}, dimensions: ${I}x${tt} is ${z}`
            ]), {
              size: C?.attributes?.size,
              l: I,
              w: tt,
              t: $,
              price: z || st
            };
          }), b.value === !0 && A.forEach((C) => {
            const I = Z(
              C.l,
              C.w,
              C.t,
              C.price,
              a?.attributes
            );
            _.value.push(I);
          });
        }
      } else {
        if (!v.some((g) => "thickness" in g.attributes))
          _.value.push(Z(
            s.l,
            s.w,
            m,
            a.display_price,
            a?.attributes
          ));
        else {
          const g = v.find((A) => A.attributes?.thickness === m);
          if (!g) return T(`variation not found for thickness ${m}`);
          _.value.push(Z(
            s.l,
            s.w,
            m,
            g.price,
            a?.attributes
          ));
        }
        R(k.value);
      }
    }, ae = (n) => {
      if (!at("smartcut-api-result")) return;
      const a = w["smartcut-api-result"].closest("form");
      if (!a) return;
      const m = JSON.stringify(n.apiResultV3), g = new Blob([m], { type: "application/json" }), A = new File([g], "api-result.json", { type: "application/json" }), $ = new DataTransfer();
      $.items.add(A);
      const z = a.querySelector('[name="smartcut_api_result"]');
      z instanceof HTMLInputElement && (z.files = $.files);
    }, oe = async (n) => {
      const m = Ze(Fe, n, E.value, Gt).split(",")[1], g = new pe();
      g.file("order-summary.pdf", m);
      const A = await g.generateAsync({ type: "blob" }), $ = new File([A], "order-summary.zip", { type: "application/zip" });
      if (!at("smartcut-order-summary")) return;
      const z = w["smartcut-order-summary"].closest("form");
      if (!z) return;
      const C = new DataTransfer();
      C.items.add($);
      const I = z.querySelector('[name="smartcut_order_summary"]');
      I instanceof HTMLInputElement && (I.files = C.files);
    }, se = async (n) => {
      Ft(), q(["result event received", n]);
      const a = await h(n);
      if (!a.success) {
        console.error(a.error);
        return;
      }
      const m = t.minimum_cut_to_size_price ?? 0, g = a.orderTotal ?? 0;
      if (m > 0 && g < m) {
        M(), o({
          message: `A minimum cut-to-size order of ${Q(m)} is required. Your order total is ${Q(g)}.`,
          type: "warning"
        });
        return;
      }
      await oe(n), n.apiResultV3 && ae(n);
    }, ce = (n, a) => {
      M(), n && (E.value = qe(n)), mt("smartcut-hardware-price", a ?? 0);
    };
    return Te(() => {
      console.log("💥 Powered by https://smartcut.dev", window?.smartcutConfig?.version), q(["Launching WordPress checkout..."]), d.banding = N(window, ["smartcutConfig", "banding_data"]), d.finish = N(window, ["smartcutConfig", "finish_data"]), i = N(window, ["smartcutConfig", "machining_pricing"]), v = N(window, ["smartcutConfig", "variations"]), Wt(), re(), Ht(window.smartcutConfig), Yt(window.smartcutConfig), Qt(), Kt(), [
        "div.quantity > input.plus",
        "div.quantity > input.minus",
        "div.quantity .qty-plus",
        "div.quantity .qty-minus"
      ].forEach((m) => {
        const g = document.querySelector(m);
        g && (g.style.display = "none");
      });
      const a = new CustomEvent("smartcut/ready");
      window.dispatchEvent(a), q(["Wordpress checkout ready"]);
    }), (n, a) => (ct(), $t($e, null, [
      yt(lt(l), { position: "top-left" }),
      y.value ? (ct(), $t("div", Xe, [
        a[0] || (a[0] = Le("div", null, "WP - developer information", -1)),
        yt(lt(f), {
          data: [_.value],
          paths: ["stock"]
        }, null, 8, ["data"]),
        yt(lt(f), {
          data: [_.value.map((m) => m.trim)],
          paths: ["stock trim"]
        }, null, 8, ["data"])
      ])) : kt("", !0),
      P.value === "formula" && F.value ? (ct(), zt(lt(r), {
        key: 1,
        ref: "configurator",
        "format-price": Q,
        url: F.value,
        debug: y.value,
        onHardwareResult: ce,
        onPanelResult: M
      }, null, 8, ["url", "debug"])) : kt("", !0),
      P.value === "manual" || P.value === "formula" && F.value ? (ct(), zt(ke, {
        key: 2,
        ref_key: "calculator",
        ref: O,
        readonly: P.value === "formula",
        "input-stock": L.value,
        "find-extras-price": pt,
        "format-price": Q,
        "input-type": P.value,
        debug: y.value,
        onLog: q,
        onError: T,
        onInputsChanged: M,
        onValidationError: Vt,
        onResult: se
      }, null, 8, ["readonly", "input-stock", "input-type", "debug"])) : kt("", !0)
    ], 64));
  }
});
export {
  ln as default
};

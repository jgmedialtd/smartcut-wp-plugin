import { bu as ze, bv as me, bw as ie, bx as tt, by as v, bz as nt, D as at, I as it, bA as rt, bB as st, bC as Ee, bD as ot, t as lt } from "./components-CILyqcuP.js";
import { J as ct } from "./vendor-jszip-BLbRTMPM.js";
import { l as ut } from "./composables-CmvJKH1l.js";
import { E as dt, a as O } from "./vendor-jspdf-Bqt6WuR5.js";
import { d as pt, r as z, L as ft, c as mt, k as _t, a as Te, o as re, H as _e, x as ge, q as qe, s as Q, N as he, g as gt, F as ht, n as bt, Z as yt, R as wt } from "./vendor-vue-WkZl1F8L.js";
const I = 5, W = 10, D = ",", $ = {
  fillColor: [7, 59, 76],
  fontStyle: "normal"
}, A = {
  fontSize: 9
}, V = { left: 10 };
let B = [];
const kt = (r, w, j, _ = (l) => l.toString()) => {
  const l = new dt({ orientation: "landscape" });
  let p = 10;
  l.setFontSize(20), l.text(r("pdf.order_summary"), 10, p), p += 15, l.setFontSize(14), l.text(`${r("general.your")} ${r("woodwork.part")}`, 10, p), p += I, B = [
    r("woodwork.length"),
    r("woodwork.width"),
    r("woodwork.thickness"),
    r("woodwork.material"),
    r("woodwork.quantity"),
    r("woodwork.name"),
    `${r("woodwork.banding")} (${ze.join(D)})`,
    `${r("woodwork.finish")} (${me.join(D)})`
  ];
  const m = w.parts.map((u) => {
    let h, t;
    if ("extras" in u && u.extras)
      h = ze.map((o) => ie(u.extras?.banding?.sides?.[o], "-")).join(D), t = me.map((o) => ie(u.extras?.finish?.faces?.[o], "-")).join(D);
    else {
      const o = u;
      h = ["y1", "y2", "x1", "x2"].map((S) => ie(o.banding?.[S], "-")).join(D), t = me.map((S) => ie(o.finish?.faces?.[S], "-")).join(D);
    }
    return [
      _(u.l),
      _(u.w),
      _(u.t) || "-",
      u?.material?.toUpperCase() || "-",
      _(u.q),
      u.name || "-",
      h,
      t
    ];
  });
  O(l, {
    startY: p,
    head: [B],
    body: m,
    margin: V,
    headStyles: $,
    styles: A
  }), p = l.lastAutoTable.finalY + W, l.setFontSize(14), l.text(r("pdf.stock_requirements"), 10, p), p += I, B = [
    r("woodwork.length"),
    r("woodwork.width"),
    r("woodwork.thickness"),
    r("woodwork.material"),
    r("woodwork.quantity")
    // 'Cost'
  ];
  const F = w.stock.map((u) => [
    _(u.l),
    _(u.w),
    _(u.t) || "-",
    u?.material?.toUpperCase() || "-",
    _(u.q)
    // stock.cost
  ]);
  if (O(l, {
    startY: p,
    head: [B],
    body: F,
    margin: V,
    headStyles: $,
    styles: A
  }), p = l.lastAutoTable.finalY + W, w.metadata.totalRollLength > 0) {
    l.setFontSize(14), l.text(r("pdf.roll_requirements"), 10, p), p += I, B = [
      r("woodwork.name"),
      r("woodwork.material"),
      r("woodwork.length")
    ];
    const u = w.stock.map((h) => [
      h?.name?.toUpperCase() || "-",
      h?.material?.toUpperCase() || "-",
      _(h.analysis.rollLength)
    ]);
    O(l, {
      startY: p,
      head: [B],
      body: u,
      margin: V,
      headStyles: $,
      styles: A
    }), p = l.lastAutoTable.finalY + W;
  }
  if (j && Object.values(j)) {
    l.setFontSize(14), l.text(r("pdf.hardware"), 10, p), p += I;
    const u = Object.values(j).map((h) => [
      h.name.toUpperCase(),
      _(h.q)
      // item.totalCost.toFixed( 2 )
    ]);
    O(l, {
      startY: p,
      head: [[r("pdf.item"), r("woodwork.quantity")]],
      body: u,
      margin: V,
      headStyles: $,
      styles: A
    }), p = l.lastAutoTable.finalY + W;
  }
  l.setFontSize(14), l.text(r("pdf.totals"), 10, p), p += I;
  const H = [
    [r("pdf.total_parts"), _(w.metadata.totalPartsProduced)],
    [r("pdf.part_area"), _(w.metadata.totalPartArea)],
    [r("pdf.total_stock_required"), _(w.metadata.totalUsedStock)],
    [r("pdf.total_banding_length"), _(w.metadata.totalBandingLength)],
    [r("pdf.total_finish_area"), _(w.metadata.totalFinishArea)],
    [r("pdf.total_roll_length"), _(w.metadata.totalRollLength)]
  ];
  if (O(l, {
    startY: p,
    body: H,
    margin: V,
    headStyles: $,
    styles: A
  }), p = l.lastAutoTable.finalY + W, window?.smartcutImages?.length) {
    l.addPage();
    let u = 10;
    l.setFontSize(14), l.text(r("pdf.images"), 10, u), u += I;
    const h = window.smartcutImages.flatMap((t, E) => t.metadata.map((o) => [
      E + 1,
      o.newName
    ]));
    O(l, {
      startY: u,
      body: h,
      head: [[r("pdf.part_index"), r("pdf.file_name")]],
      margin: V,
      headStyles: $,
      styles: A
    });
  }
  return l.output("datauristring");
}, vt = {
  key: 0,
  class: "debug"
}, St = !1, Tt = /* @__PURE__ */ pt({
  __name: "WordPress",
  setup(r) {
    const w = he(() => import("./components-CILyqcuP.js").then((e) => e.bI)), j = he(() => import("./components-CILyqcuP.js").then((e) => e.bH)), _ = he(() => import("./components-CILyqcuP.js").then((e) => e.bJ)), { inputShapes: l } = tt(), p = "production", m = {}, F = {}, H = z(null);
    let u, h, t;
    const E = {
      banding: null,
      finish: null
    };
    let o = null, S = [], se = null, x = {};
    const J = z(!1), T = z("manual"), K = z(""), P = ft([]), je = mt(() => P.value), R = z(null), C = z(!0), be = z(null), L = z(!1), Z = z(null);
    yt("calculator", () => Z.value);
    const k = (e) => {
      J.value && console.log("SmartCut -", ...e);
    }, g = (e) => {
      console.error(`SmartCut - ${e}`);
    }, G = (e = !0) => {
      L.value = !0, ["checkout", "intro_text", "offcuts", "banding_key"].forEach((a) => Y(a, "block")), Qe() && Y("pricing_table", "table"), e ? X(!0) : oe(), q();
    }, N = (e = !0, n = !0) => {
      L.value = !1, ["checkout", "intro_text", "offcuts", "banding_key", "pricing_table"].forEach((i) => Y(i, "none")), n === !0 ? ye() : n === !1 && q(), X ? X() : e === !1 && oe();
    }, X = (e = !1) => {
      Y("quantity", "inline-block"), m.quantity.readOnly = e;
    }, oe = () => {
      L.value !== !1 && (le(1), Y("quantity", "none"), m.quantity.readOnly = !0);
    }, ye = () => {
      if (!m.cart_button) {
        g("Cart button not found");
        return;
      }
      m.cart_button.disabled = !1;
    }, q = () => {
      if (L.value !== !1) {
        if (!m.cart_button) {
          g("Cart button not found");
          return;
        }
        m.cart_button.disabled = !0;
      }
    }, Ce = () => {
      g("Validation error"), q();
    }, le = (e, n = 0) => {
      if (k(["setting cart quantity", e]), !m.quantity) {
        g("Quantity field not found when trying to set");
        return;
      }
      m.quantity.value = e.toFixed(n), console.assert(m.quantity.value === e.toFixed(n), "Quantity field value not set correctly");
    }, Oe = (e) => {
      k(["setting variation price", e]);
      const n = document.querySelector(".woocommerce-variation-price .smartcut-price-selector");
      n && (n.innerText = ee(e)), H.value = e;
    }, Ie = (e = !1) => {
      const n = e ? R.value?.display_price ?? 0 : H.value ?? R.value?.display_price ?? 0;
      return console.log("getCurrentVariationPrice", H.value, R.value?.display_price), typeof n == "string" ? parseFloat(n) : n;
    }, De = () => {
      if (!window?.smartcutConfig) {
        g("SmartCut config not found");
        return;
      }
      const e = window.smartcutConfig;
      t = e.settings;
      const n = ve(v(window, ["smartcutConfig", "banding_data"])), a = ve(v(window, ["smartcutConfig", "finish_data"])), i = (b) => {
        switch (b) {
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
      }, { cutType: d, cutPreference: c } = i(t.cut_preference), f = {
        stockType: t.stock_type,
        bladeWidth: t.blade_width,
        cutType: d,
        cutPreference: c,
        stackHeight: t.stack_height || 100,
        guillotineOptions: {
          strategy: "efficiency",
          maxPhase: 0,
          headCuts: !1
        }
      }, s = {
        apiVersion: 3,
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
      J.value = s.debug;
      const y = {
        numberFormat: t.number_format,
        decimalPlaces: 2,
        fractionRoundTo: 0,
        faces: {
          enabled: t.machining_sides
        },
        holes: {
          enabled: t.machining_holes,
          defaultDiameter: t.machining_holes_default_diameter,
          diameters: t.machining_holes_diameters.split(",").map((b) => b.trim()).filter(Boolean),
          minDiameter: t.machining_holes_min_diameter,
          maxDiameter: t.machining_holes_max_diameter,
          enableDepth: t.machining_holes_depth,
          depths: t.machining_holes_depths.split(",").map((b) => b.trim()).filter(Boolean),
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
      C.value = xe(), C.value ? X(!0) : oe(), o.type === "variable" ? N(!1, !1) : G(C.value);
      const U = {
        type: o.type,
        stock: P.value.map((b) => b.toData()),
        variations: S ?? null,
        saw: f,
        options: s,
        banding: n,
        finish: a,
        machining: y
      };
      U.type === "variable" && (k(["setting variable product form listeners"]), jQuery(function(b) {
        b(".variations_form").on("reset_data", () => N(!1, !1)).on("found_variation", (Xe, et) => Ke(Xe, et));
      }));
      const ae = {
        product: o,
        selectedVariation: R,
        inputs: F,
        elements: m,
        inputType: T,
        formatPrice: ee,
        getCurrentVariationPrice: Ie,
        setInputValue: ue,
        setCartQuantity: le,
        setVariationPrice: Oe,
        isExtraEnabled: pe,
        isQuantityPricing: xe,
        isMachiningEnabled: Pe,
        isSurchargeEnabled: Fe,
        getTotalBandingPrice: Me,
        getTotalFinishPrice: Le,
        getTotalMachiningPrice: Ye,
        getInputValue: Ue,
        enableAddToCart: ye,
        log: k,
        error: g
      }, fe = ut({
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
      }, ae);
      u = fe.calculatePrice, h = fe.resetPricing, bt(() => {
        Z.value && Z.value.init(U);
      });
    }, $e = (e) => {
      const n = e?.multiple_sizes === !0;
      o = {
        type: e?.product_type,
        multiple_sizes: n,
        size: e?.size ? e.size.split(" | ") : [],
        l: !n && e?.l ? parseFloat(e.l) : null,
        w: !n && e?.w ? parseFloat(e.w) : null,
        t: e?.t ?? null,
        price: e?.price ? parseFloat(e.price) : null,
        stock_name: e?.stock_sku || e.stock_name
      }, o.multiple_sizes || (o.l || g("product 'length' attribute not available"), o.w || g("product 'width' attribute not available"));
    }, Ae = (e) => {
      T.value = v(window, ["smartcutConfig", "settings", "enable_formula"]) === !0 ? "formula" : "manual", K.value = v(window, ["smartcutConfig", "settings", "formula_url"]), k([`Input type: ${T.value}`]), x = {
        thousands_separator: e?.thousands_separator,
        decimal_separator: e?.decimal_separator,
        number_of_decimals: e?.number_of_decimals,
        currency_symbol: e?.currency_symbol,
        currency_position: e?.currency_position
      };
    }, Ve = () => {
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
      for (const [n, a] of Object.entries(e))
        m[n] = document.querySelector(a);
      if (!m.checkout)
        return g("checkout iframe not found");
      if (!m.quantity)
        return g("quantity field not found");
      if (!m.cart_button)
        return g("cart button not found");
      m.quantity.readOnly = !0, q();
    }, Be = () => ({
      w1: t.stock_trim_x1 ?? 0,
      w2: t.stock_trim_x2 ?? 0,
      l1: t.stock_type === "linear" ? 0 : t.stock_trim_y1 ?? 0,
      l2: t.stock_type === "linear" ? 0 : t.stock_trim_y2 ?? 0
    }), M = (e = null, n = null, a = null, i = null, d = null) => {
      let c;
      if (d && typeof d == "object") {
        c = [];
        for (const [s, y] of Object.entries(d))
          s !== "attribute_size" && s !== "attribute_thickness" && c.push(`${s.replace("attribute_", "")}: ${y}`);
        c = c.join(" - ");
      }
      const f = {
        name: o.stock_name,
        l: e,
        w: n,
        t: a,
        grain: t.stock_grain,
        cost: parseFloat(i?.toString() || "0"),
        trim: Be(),
        allowExactFitShapes: !0,
        notes: c
      };
      return new it(f, t.numberFormat || "decimal");
    }, He = () => {
      if (o?.stock_name || g("product name not specified"), P.value = [], o.multiple_sizes)
        for (const e of o.size) {
          if (!ne(e)) continue;
          const [n, a] = e.split("x"), i = M(
            parseFloat(n),
            parseFloat(a),
            o?.t,
            o.price
          );
          P.value.push(i);
        }
      else
        P.value.push(M(
          o.l,
          o.w,
          o?.t,
          o?.price
        ));
    }, we = (e, n) => {
      const a = e.split(".");
      return a[0] = a[0].replace(/\B(?=(\d{3})+(?!\d))/g, n), a.join(".");
    }, ee = (e = 0, n = "") => {
      if (!e)
        return n ? ke("0.00") : "0.00";
      typeof e == "string" && (e = parseFloat(e));
      const a = e.toFixed(x.number_of_decimals).replace(".", x.decimal_separator), i = we(a, x.thousands_separator);
      return n ? ke(i) : i;
    }, Re = (e) => {
      if (e == null) return "";
      typeof e == "string" && (e = parseFloat(e));
      const a = e % 1 !== 0 ? x.number_of_decimals : 0, i = e.toFixed(a).replace(".", x.decimal_separator);
      return we(i, x.thousands_separator);
    }, ke = (e) => {
      switch (x.currency_position) {
        case "left":
          return `${x.currency_symbol}${e}`;
        case "right":
          return `${e}${x.currency_symbol}`;
        default:
          return `${x.currency_symbol}${e}`;
      }
    }, te = (e) => {
      const n = (a) => rt(st(a), 100).replace("|", "_");
      return Array.isArray(e) ? e.map(n).join(",") : n(e);
    }, ve = (e) => {
      if (!e) return null;
      const n = {
        labels: [],
        pricing: {}
      }, a = Object.values(e);
      for (const i of a)
        i?.variations ? (n.labels.push(...Object.keys(i.options)), Object.values(i.variations).forEach((d) => {
          const { options: c } = d, f = Object.values(c).map((s) => te(s)).join("|");
          n.pricing[f] = parseInt(d.price);
        })) : i?.options && Object.keys(i.options).forEach((d) => {
          n.pricing[te(d)] = parseInt(i.price);
        });
      return n.labels.length || n.labels.push("type"), n;
    }, ce = (e, n) => {
      if (!n.length || !Ee(E, [e])) return null;
      const a = v(E, [e]);
      if (!ot(a)) return null;
      const d = Object.values(a).map((c) => c?.variations ? Object.values(c.variations).map((f) => (f.type = "variable", f)) : (c.type = "simple", c)).flat().find((c) => {
        let f;
        return c.type === "simple" ? f = Object.keys(c.options) : f = Object.values(c.options), f ? f.every((s, y) => te(s) === te(n[y])) : !1;
      });
      return d?.price ? parseFloat(d.price) : null;
    }, Le = (e) => {
      let n = 0;
      if (typeof e == "object") {
        for (let [a, i] of Object.entries(e)) {
          typeof i == "string" && (i = parseFloat(i));
          const d = a.split("|"), c = ce("finish", d);
          if (c === null) continue;
          const s = Number(i) / 1e6 * parseFloat(c.toString());
          n += s;
        }
        if ("min_finish_charge" in t) {
          const a = parseFloat(t?.min_finish_charge);
          if (a > 0 && n > 0 && n < a)
            return a;
        }
      }
      return n;
    }, Me = (e) => {
      let n = 0;
      if (typeof e == "object") {
        for (let [a, i] of Object.entries(e)) {
          typeof i == "string" && (i = parseFloat(i));
          const d = a.split("|"), c = ce("banding", d);
          if (c === null) continue;
          const f = i / (t.unit_system === "imperial" ? 12 : 1e3) * parseFloat(c.toString());
          n += f;
        }
        if ("min_banding_charge" in t) {
          const a = parseFloat(t?.min_banding_charge);
          if (a > 0 && n > 0 && n < a)
            return a;
        }
      }
      return n;
    }, Ye = (e) => (se.holes ?? 0) * (e.metadata.numHoles ?? 0) + (se.corners ?? 0) * (e.metadata.numCorners ?? 0), Y = (e, n) => {
      e in m && m[e]?.style && (m[e].style.display = n);
    }, ue = (e, n) => {
      de(e) ? F[e].value = n : g(`Attempting to set input but key '${e}' does not exist`);
    }, Ue = (e) => {
      if (de(e))
        return F[e].value;
    }, de = (e) => e in F && F[e] instanceof HTMLInputElement, Se = () => {
      le(1), q(), h();
      for (const e in F)
        e !== "smartcut-hardware-price" && ue(e, null);
    }, xe = () => {
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
    }, pe = (e) => {
      if (Ee(t, ["enable", e]) && v(t, ["enable", e]) === !1)
        return !1;
      const n = v(E, [e]);
      return !!(n && Object.values(n).length);
    }, Pe = () => t.enable_machining === !0, Fe = () => !(t?.surcharge_type === "none" || !t?.surcharge || t.surcharge === "0.00"), Qe = () => !!(t.pricing_strategy === "full_stock_plus_cut_length" || t.pricing_strategy === "full_stock_plus_num_parts" || t.pricing_strategy === "part_area" || t.pricing_strategy === "roll_length" || Fe() || pe("banding") || pe("finish") || Pe()), We = (e) => {
      let n = e?.attributes?.attribute_size;
      return n || (n = o?.size), n;
    }, ne = (e) => /\d+x\d+/.test(e), Je = () => {
      window.smartcutConfig.input_fields.forEach((e) => {
        const n = e.replaceAll("_", "-");
        F[n] = document.getElementById(n);
      });
    }, Ke = (e, n) => {
      Se(), R.value = n, k(["variation selected", n.attributes]), P.value = [];
      const a = v(n, ["attributes", "attribute_thickness"]) ?? null;
      if (o.selected_thickness = a, l.value.forEach((i) => {
        i.t = at({ v: a });
      }), o.multiple_sizes) {
        const i = We(n);
        if (k([`variation found with size: ${i} & thickness: ${a}`]), !i)
          return N(!1), g("The size of this multiple size product could not be found");
        if (Array.isArray(i) ? G(C.value) : ne(i) ? N(!0, !0) : G(C.value), S?.length) {
          let d;
          const c = a;
          let f = n.display_price;
          Array.isArray(i) ? d = i.map((s) => ({
            size: s,
            l: s.split("x")[0],
            w: s.split("x")[1],
            t: c,
            price: f
          })) : d = S.filter((s) => ne(s?.attributes?.size) ? a === (s?.attributes?.thickness ?? null) : !1).map((s) => {
            const y = s?.attributes?.size.split("x")[0] ?? null, U = s?.attributes?.size.split("x")[1] ?? null;
            let ae = 0;
            return n.display_price || (ae = S.find((b) => ne(b.attributes?.size) && b.attributes?.thickness === s?.attributes?.thickness && b.attributes?.size === s?.attributes?.size && b.display_price > 0).display_price), k([
              `size attribute: '${s?.attributes?.size}'`,
              `price for thickness ${a}, dimensions: ${y}x${U} is ${f}`
            ]), {
              size: s?.attributes?.size,
              l: y,
              w: U,
              t: c,
              price: f || ae
            };
          }), L.value === !0 && d.forEach((s) => {
            const y = M(
              s.l,
              s.w,
              s.t,
              s.price,
              n?.attributes
            );
            P.value.push(y);
          });
        }
      } else {
        if (!S.some((i) => "thickness" in i.attributes))
          P.value.push(M(
            o.l,
            o.w,
            a,
            n.display_price,
            n?.attributes
          ));
        else {
          const i = S.find((d) => d.attributes?.thickness === a);
          if (!i) return g(`variation not found for thickness ${a}`);
          P.value.push(M(
            o.l,
            o.w,
            a,
            i.price,
            n?.attributes
          ));
        }
        G(C.value);
      }
    }, Ze = async (e) => {
      Se(), k(["result event received", e]);
      const n = await u(e);
      if (!n.success) {
        console.error(n.error);
        return;
      }
      await Ge(e);
    }, Ge = async (e) => {
      const a = kt(lt, e, be.value, Re).split(",")[1], i = new ct();
      i.file("order-summary.pdf", a);
      const d = await i.generateAsync({ type: "blob" }), c = new File([d], "order-summary.zip", { type: "application/zip" });
      if (!de("smartcut-order-summary")) return;
      const f = F["smartcut-order-summary"].closest("form");
      if (!f) return;
      const s = new DataTransfer();
      s.items.add(c);
      const y = f.querySelector('[name="smartcut_order_summary"]');
      y instanceof HTMLInputElement && (y.files = s.files);
    }, Ne = (e, n) => {
      q(), e && (be.value = wt(e)), ue("smartcut-hardware-price", n ?? 0);
    };
    return _t(() => {
      console.log("💥 Powered by https://smartcut.dev", window?.smartcutConfig?.version), k(["Launching WordPress checkout..."]), E.banding = v(window, ["smartcutConfig", "banding_data"]), E.finish = v(window, ["smartcutConfig", "finish_data"]), se = v(window, ["smartcutConfig", "machining_pricing"]), S = v(window, ["smartcutConfig", "variations"]), Ve(), Je(), $e(window.smartcutConfig), Ae(window.smartcutConfig), De(), He(), [
        "div.quantity > input.plus",
        "div.quantity > input.minus",
        "div.quantity .qty-plus",
        "div.quantity .qty-minus"
      ].forEach((a) => {
        const i = document.querySelector(a);
        i && (i.style.display = "none");
      });
      const n = new CustomEvent("smartcut/ready");
      window.dispatchEvent(n), k(["Wordpress checkout ready"]);
    }), (e, n) => (re(), Te(ht, null, [
      _e(Q(_), { position: "top-left" }),
      Q(p) === "development" && St ? (re(), Te("div", vt, [
        n[0] || (n[0] = gt("div", null, "WP - developer information", -1)),
        _e(Q(j), {
          data: [P.value],
          paths: ["stock"]
        }, null, 8, ["data"]),
        _e(Q(j), {
          data: [P.value.map((a) => a.trim)],
          paths: ["stock trim"]
        }, null, 8, ["data"])
      ])) : ge("", !0),
      T.value === "formula" && K.value ? (re(), qe(Q(w), {
        key: 1,
        ref: "formulapricing",
        "format-price": ee,
        url: K.value,
        debug: J.value,
        onHardwareResult: Ne,
        onPanelResult: q
      }, null, 8, ["url", "debug"])) : ge("", !0),
      T.value === "manual" || T.value === "formula" && K.value ? (re(), qe(nt, {
        key: 2,
        ref_key: "calculator",
        ref: Z,
        readonly: T.value === "formula",
        debug: J.value,
        "input-stock": je.value,
        "find-extras-price": ce,
        "format-price": ee,
        "input-type": T.value,
        onLog: k,
        onError: g,
        onInputsChanged: q,
        onValidationError: Ce,
        onResult: Ze
      }, null, 8, ["readonly", "debug", "input-stock", "input-type"])) : ge("", !0)
    ], 64));
  }
});
export {
  Tt as default
};

import { bu as Xe, bv as Pe, bw as et, bx as v, by as tt, C as nt, I as at, bz as rt, bA as it, bB as Fe, bC as st, t as ot } from "./components-DaaD3Nlt.js";
import { J as lt } from "./vendor-jszip-BLbRTMPM.js";
import { l as ct } from "./composables-Dr5gJ-9j.js";
import { E as ut, a as O } from "./vendor-jspdf-Bqt6WuR5.js";
import { d as dt, r as z, L as pt, c as ft, k as mt, a as ze, o as ae, H as fe, x as me, q as Ee, s as U, N as _e, g as _t, F as gt, n as ht, Z as bt, R as yt } from "./vendor-vue-WkZl1F8L.js";
const I = 5, Q = 10, re = ",", $ = {
  fillColor: [7, 59, 76],
  fontStyle: "normal"
}, A = {
  fontSize: 9
}, D = { left: 10 };
let V = [];
const wt = (i, w, C, _ = (o) => o.toString()) => {
  const o = new ut({ orientation: "landscape" });
  let p = 10;
  o.setFontSize(20), o.text(i("pdf.order_summary"), 10, p), p += 15, o.setFontSize(14), o.text(`${i("general.your")} ${i("woodwork.part")}`, 10, p), p += I, V = [
    i("woodwork.length"),
    i("woodwork.width"),
    i("woodwork.thickness"),
    i("woodwork.material"),
    i("woodwork.quantity"),
    i("woodwork.name"),
    `${i("woodwork.banding")} (${Xe.join(re)})`,
    `${i("woodwork.finish")} (${Pe.join(re)})`
  ];
  const m = w.parts.map((u) => {
    const b = ["y1", "y2", "x1", "x2"].map((S) => u.banding?.[S] || "-").join(re), t = Pe.map((S) => u.finish?.faces?.[S] || "-").join(re);
    return [
      _(u.l),
      _(u.w),
      _(u.t) || "-",
      u?.material?.toUpperCase() || "-",
      _(u.q),
      u.name || "-",
      b,
      t
    ];
  });
  O(o, {
    startY: p,
    head: [V],
    body: m,
    margin: D,
    headStyles: $,
    styles: A
  }), p = o.lastAutoTable.finalY + Q, o.setFontSize(14), o.text(i("pdf.stock_requirements"), 10, p), p += I, V = [
    i("woodwork.length"),
    i("woodwork.width"),
    i("woodwork.thickness"),
    i("woodwork.material"),
    i("woodwork.quantity")
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
  if (O(o, {
    startY: p,
    head: [V],
    body: F,
    margin: D,
    headStyles: $,
    styles: A
  }), p = o.lastAutoTable.finalY + Q, w.metadata.totalRollLength > 0) {
    o.setFontSize(14), o.text(i("pdf.roll_requirements"), 10, p), p += I, V = [
      i("woodwork.name"),
      i("woodwork.material"),
      i("woodwork.length")
    ];
    const u = w.stock.map((b) => [
      b?.name?.toUpperCase() || "-",
      b?.material?.toUpperCase() || "-",
      _(b.analysis.rollLength)
    ]);
    O(o, {
      startY: p,
      head: [V],
      body: u,
      margin: D,
      headStyles: $,
      styles: A
    }), p = o.lastAutoTable.finalY + Q;
  }
  if (C && Object.values(C)) {
    o.setFontSize(14), o.text(i("pdf.hardware"), 10, p), p += I;
    const u = Object.values(C).map((b) => [
      b.name.toUpperCase(),
      _(b.q)
      // item.totalCost.toFixed( 2 )
    ]);
    O(o, {
      startY: p,
      head: [[i("pdf.item"), i("woodwork.quantity")]],
      body: u,
      margin: D,
      headStyles: $,
      styles: A
    }), p = o.lastAutoTable.finalY + Q;
  }
  o.setFontSize(14), o.text(i("pdf.totals"), 10, p), p += I;
  const B = [
    [i("pdf.total_parts"), _(w.metadata.totalPartsProduced)],
    [i("pdf.part_area"), _(w.metadata.totalPartArea)],
    [i("pdf.total_stock_required"), _(w.metadata.totalUsedStock)],
    [i("pdf.total_banding_length"), _(w.metadata.totalBandingLength)],
    [i("pdf.total_finish_area"), _(w.metadata.totalFinishArea)],
    [i("pdf.total_roll_length"), _(w.metadata.totalRollLength)]
  ];
  if (O(o, {
    startY: p,
    body: B,
    margin: D,
    headStyles: $,
    styles: A
  }), p = o.lastAutoTable.finalY + Q, window?.smartcutImages?.length) {
    o.addPage();
    let u = 10;
    o.setFontSize(14), o.text(i("pdf.images"), 10, u), u += I;
    const b = window.smartcutImages.flatMap((t, S) => t.metadata.map((c) => [
      S + 1,
      c.newName
    ]));
    O(o, {
      startY: u,
      body: b,
      head: [[i("pdf.part_index"), i("pdf.file_name")]],
      margin: D,
      headStyles: $,
      styles: A
    });
  }
  return o.output("datauristring");
}, kt = {
  key: 0,
  class: "debug"
}, vt = !1, Et = /* @__PURE__ */ dt({
  __name: "WordPress",
  setup(i) {
    const w = _e(() => import("./components-DaaD3Nlt.js").then((e) => e.bH)), C = _e(() => import("./components-DaaD3Nlt.js").then((e) => e.bG)), _ = _e(() => import("./components-DaaD3Nlt.js").then((e) => e.bI)), { inputShapes: o } = et(), p = "production", m = {}, F = {}, B = z(null);
    let u, b, t;
    const S = {
      banding: null,
      finish: null
    };
    let c = null, q = [], ie = null, x = {};
    const W = z(!1), E = z("manual"), K = z(""), P = pt([]), Te = ft(() => P.value), H = z(null), j = z(!0), ge = z(null), R = z(!1), G = z(null);
    bt("calculator", () => G.value);
    const k = (e) => {
      W.value && console.log("SmartCut -", ...e);
    }, g = (e) => {
      console.error(`SmartCut - ${e}`);
    }, J = (e = !0) => {
      R.value = !0, ["checkout", "intro_text", "offcuts", "banding_key"].forEach((a) => M(a, "block")), Ye() && M("pricing_table", "table"), e ? N(!0) : se(), T();
    }, Z = (e = !0, n = !0) => {
      R.value = !1, ["checkout", "intro_text", "offcuts", "banding_key", "pricing_table"].forEach((r) => M(r, "none")), n === !0 ? he() : n === !1 && T(), N ? N() : e === !1 && se();
    }, N = (e = !1) => {
      M("quantity", "inline-block"), m.quantity.readOnly = e;
    }, se = () => {
      R.value !== !1 && (oe(1), M("quantity", "none"), m.quantity.readOnly = !0);
    }, he = () => {
      if (!m.cart_button) {
        g("Cart button not found");
        return;
      }
      m.cart_button.disabled = !1;
    }, T = () => {
      if (R.value !== !1) {
        if (!m.cart_button) {
          g("Cart button not found");
          return;
        }
        m.cart_button.disabled = !0;
      }
    }, qe = () => {
      g("Validation error"), T();
    }, oe = (e, n = 0) => {
      if (k(["setting cart quantity", e]), !m.quantity) {
        g("Quantity field not found when trying to set");
        return;
      }
      m.quantity.value = e.toFixed(n), console.assert(m.quantity.value === e.toFixed(n), "Quantity field value not set correctly");
    }, Ce = (e) => {
      k(["setting variation price", e]);
      const n = document.querySelector(".woocommerce-variation-price .smartcut-price-selector");
      n && (n.innerText = X(e)), B.value = e;
    }, je = (e = !1) => {
      const n = e ? H.value?.display_price ?? 0 : B.value ?? H.value?.display_price ?? 0;
      return console.log("getCurrentVariationPrice", B.value, H.value?.display_price), typeof n == "string" ? parseFloat(n) : n;
    }, Oe = () => {
      if (!window?.smartcutConfig) {
        g("SmartCut config not found");
        return;
      }
      const e = window.smartcutConfig;
      t = e.settings;
      const n = we(v(window, ["smartcutConfig", "banding_data"])), a = we(v(window, ["smartcutConfig", "finish_data"])), r = (h) => {
        switch (h) {
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
      }, { cutType: d, cutPreference: l } = r(t.cut_preference), f = {
        stockType: t.stock_type,
        bladeWidth: t.blade_width,
        cutType: d,
        cutPreference: l,
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
      W.value = s.debug;
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
          diameters: t.machining_holes_diameters.split(",").map((h) => h.trim()).filter(Boolean),
          minDiameter: t.machining_holes_min_diameter,
          maxDiameter: t.machining_holes_max_diameter,
          enableDepth: t.machining_holes_depth,
          depths: t.machining_holes_depths.split(",").map((h) => h.trim()).filter(Boolean),
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
      j.value = ve(), j.value ? N(!0) : se(), c.type === "variable" ? Z(!1, !1) : J(j.value);
      const Y = {
        type: c.type,
        stock: P.value.map((h) => h.toData()),
        variations: q ?? null,
        saw: f,
        options: s,
        banding: n,
        finish: a,
        machining: y
      };
      Y.type === "variable" && (k(["setting variable product form listeners"]), jQuery(function(h) {
        h(".variations_form").on("reset_data", () => Z(!1, !1)).on("found_variation", (Ze, Ne) => We(Ze, Ne));
      }));
      const ne = {
        product: c,
        selectedVariation: H,
        inputs: F,
        elements: m,
        inputType: E,
        formatPrice: X,
        getCurrentVariationPrice: je,
        setInputValue: ce,
        setCartQuantity: oe,
        setVariationPrice: Ce,
        isExtraEnabled: de,
        isQuantityPricing: ve,
        isMachiningEnabled: Se,
        isSurchargeEnabled: xe,
        getTotalBandingPrice: Re,
        getTotalFinishPrice: He,
        getTotalMachiningPrice: Le,
        getInputValue: Me,
        enableAddToCart: he,
        log: k,
        error: g
      }, pe = ct({
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
      }, ne);
      u = pe.calculatePrice, b = pe.resetPricing, ht(() => {
        G.value && G.value.init(Y);
      });
    }, Ie = (e) => {
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
      }, c.multiple_sizes || (c.l || g("product 'length' attribute not available"), c.w || g("product 'width' attribute not available"));
    }, $e = (e) => {
      E.value = v(window, ["smartcutConfig", "settings", "enable_formula"]) === !0 ? "formula" : "manual", K.value = v(window, ["smartcutConfig", "settings", "formula_url"]), k([`Input type: ${E.value}`]), x = {
        thousands_separator: e?.thousands_separator,
        decimal_separator: e?.decimal_separator,
        number_of_decimals: e?.number_of_decimals,
        currency_symbol: e?.currency_symbol,
        currency_position: e?.currency_position
      };
    }, Ae = () => {
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
      m.quantity.readOnly = !0, T();
    }, De = () => ({
      w1: t.stock_trim_x1 ?? 0,
      w2: t.stock_trim_x2 ?? 0,
      l1: t.stock_type === "linear" ? 0 : t.stock_trim_y1 ?? 0,
      l2: t.stock_type === "linear" ? 0 : t.stock_trim_y2 ?? 0
    }), L = (e = null, n = null, a = null, r = null, d = null) => {
      let l;
      if (d && typeof d == "object") {
        l = [];
        for (const [s, y] of Object.entries(d))
          s !== "attribute_size" && s !== "attribute_thickness" && l.push(`${s.replace("attribute_", "")}: ${y}`);
        l = l.join(" - ");
      }
      const f = {
        name: c.stock_name,
        l: e,
        w: n,
        t: a,
        grain: t.stock_grain,
        cost: parseFloat(r?.toString() || "0"),
        trim: De(),
        allowExactFitShapes: !0,
        notes: l
      };
      return new at(f, t.numberFormat || "decimal");
    }, Ve = () => {
      if (c?.stock_name || g("product name not specified"), P.value = [], c.multiple_sizes)
        for (const e of c.size) {
          if (!te(e)) continue;
          const [n, a] = e.split("x"), r = L(
            parseFloat(n),
            parseFloat(a),
            c?.t,
            c.price
          );
          P.value.push(r);
        }
      else
        P.value.push(L(
          c.l,
          c.w,
          c?.t,
          c?.price
        ));
    }, be = (e, n) => {
      const a = e.split(".");
      return a[0] = a[0].replace(/\B(?=(\d{3})+(?!\d))/g, n), a.join(".");
    }, X = (e = 0, n = "") => {
      if (!e)
        return n ? ye("0.00") : "0.00";
      typeof e == "string" && (e = parseFloat(e));
      const a = e.toFixed(x.number_of_decimals).replace(".", x.decimal_separator), r = be(a, x.thousands_separator);
      return n ? ye(r) : r;
    }, Be = (e) => {
      if (e == null) return "";
      typeof e == "string" && (e = parseFloat(e));
      const a = e % 1 !== 0 ? x.number_of_decimals : 0, r = e.toFixed(a).replace(".", x.decimal_separator);
      return be(r, x.thousands_separator);
    }, ye = (e) => {
      switch (x.currency_position) {
        case "left":
          return `${x.currency_symbol}${e}`;
        case "right":
          return `${e}${x.currency_symbol}`;
        default:
          return `${x.currency_symbol}${e}`;
      }
    }, ee = (e) => {
      const n = (a) => rt(it(a), 100).replace("|", "_");
      return Array.isArray(e) ? e.map(n).join(",") : n(e);
    }, we = (e) => {
      if (!e) return null;
      const n = {
        labels: [],
        pricing: {}
      }, a = Object.values(e);
      for (const r of a)
        r?.variations ? (n.labels.push(...Object.keys(r.options)), Object.values(r.variations).forEach((d) => {
          const { options: l } = d, f = Object.values(l).map((s) => ee(s)).join("|");
          n.pricing[f] = parseInt(d.price);
        })) : r?.options && Object.keys(r.options).forEach((d) => {
          n.pricing[ee(d)] = parseInt(r.price);
        });
      return n.labels.length || n.labels.push("type"), n;
    }, le = (e, n) => {
      if (!n.length || !Fe(S, [e])) return null;
      const a = v(S, [e]);
      if (!st(a)) return null;
      const d = Object.values(a).map((l) => l?.variations ? Object.values(l.variations).map((f) => (f.type = "variable", f)) : (l.type = "simple", l)).flat().find((l) => {
        let f;
        return l.type === "simple" ? f = Object.keys(l.options) : f = Object.values(l.options), f ? f.every((s, y) => ee(s) === ee(n[y])) : !1;
      });
      return d?.price ? parseFloat(d.price) : null;
    }, He = (e) => {
      let n = 0;
      if (typeof e == "object") {
        for (let [a, r] of Object.entries(e)) {
          typeof r == "string" && (r = parseFloat(r));
          const d = a.split("|"), l = le("finish", d);
          if (l === null) continue;
          const s = Number(r) / 1e6 * parseFloat(l.toString());
          n += s;
        }
        if ("min_finish_charge" in t) {
          const a = parseFloat(t?.min_finish_charge);
          if (a > 0 && n > 0 && n < a)
            return a;
        }
      }
      return n;
    }, Re = (e) => {
      let n = 0;
      if (typeof e == "object") {
        for (let [a, r] of Object.entries(e)) {
          typeof r == "string" && (r = parseFloat(r));
          const d = a.split("|"), l = le("banding", d);
          if (l === null) continue;
          const f = r / (t.unit_system === "imperial" ? 12 : 1e3) * parseFloat(l.toString());
          n += f;
        }
        if ("min_banding_charge" in t) {
          const a = parseFloat(t?.min_banding_charge);
          if (a > 0 && n > 0 && n < a)
            return a;
        }
      }
      return n;
    }, Le = (e) => (ie.holes ?? 0) * (e.metadata.numHoles ?? 0) + (ie.corners ?? 0) * (e.metadata.numCorners ?? 0), M = (e, n) => {
      e in m && m[e]?.style && (m[e].style.display = n);
    }, ce = (e, n) => {
      ue(e) ? F[e].value = n : g(`Attempting to set input but key '${e}' does not exist`);
    }, Me = (e) => {
      if (ue(e))
        return F[e].value;
    }, ue = (e) => e in F && F[e] instanceof HTMLInputElement, ke = () => {
      oe(1), T(), b();
      for (const e in F)
        e !== "smartcut-hardware-price" && ce(e, null);
    }, ve = () => {
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
    }, de = (e) => {
      if (Fe(t, ["enable", e]) && v(t, ["enable", e]) === !1)
        return !1;
      const n = v(S, [e]);
      return !!(n && Object.values(n).length);
    }, Se = () => t.enable_machining === !0, xe = () => !(t?.surcharge_type === "none" || !t?.surcharge || t.surcharge === "0.00"), Ye = () => !!(t.pricing_strategy === "full_stock_plus_cut_length" || t.pricing_strategy === "full_stock_plus_num_parts" || t.pricing_strategy === "part_area" || t.pricing_strategy === "roll_length" || xe() || de("banding") || de("finish") || Se()), Ue = (e) => {
      let n = e?.attributes?.attribute_size;
      return n || (n = c?.size), n;
    }, te = (e) => /\d+x\d+/.test(e), Qe = () => {
      window.smartcutConfig.input_fields.forEach((e) => {
        const n = e.replaceAll("_", "-");
        F[n] = document.getElementById(n);
      });
    }, We = (e, n) => {
      ke(), H.value = n, k(["variation selected", n.attributes]), P.value = [];
      const a = v(n, ["attributes", "attribute_thickness"]) ?? null;
      if (c.selected_thickness = a, o.value.forEach((r) => {
        r.t = nt({ v: a });
      }), c.multiple_sizes) {
        const r = Ue(n);
        if (k([`variation found with size: ${r} & thickness: ${a}`]), !r)
          return Z(!1), g("The size of this multiple size product could not be found");
        if (Array.isArray(r) ? J(j.value) : te(r) ? Z(!0, !0) : J(j.value), q?.length) {
          let d;
          const l = a;
          let f = n.display_price;
          Array.isArray(r) ? d = r.map((s) => ({
            size: s,
            l: s.split("x")[0],
            w: s.split("x")[1],
            t: l,
            price: f
          })) : d = q.filter((s) => te(s?.attributes?.size) ? a === (s?.attributes?.thickness ?? null) : !1).map((s) => {
            const y = s?.attributes?.size.split("x")[0] ?? null, Y = s?.attributes?.size.split("x")[1] ?? null;
            let ne = 0;
            return n.display_price || (ne = q.find((h) => te(h.attributes?.size) && h.attributes?.thickness === s?.attributes?.thickness && h.attributes?.size === s?.attributes?.size && h.display_price > 0).display_price), k([
              `size attribute: '${s?.attributes?.size}'`,
              `price for thickness ${a}, dimensions: ${y}x${Y} is ${f}`
            ]), {
              size: s?.attributes?.size,
              l: y,
              w: Y,
              t: l,
              price: f || ne
            };
          }), R.value === !0 && d.forEach((s) => {
            const y = L(
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
        if (!q.some((r) => "thickness" in r.attributes))
          P.value.push(L(
            c.l,
            c.w,
            a,
            n.display_price,
            n?.attributes
          ));
        else {
          const r = q.find((d) => d.attributes?.thickness === a);
          if (!r) return g(`variation not found for thickness ${a}`);
          P.value.push(L(
            c.l,
            c.w,
            a,
            r.price,
            n?.attributes
          ));
        }
        J(j.value);
      }
    }, Ke = async (e) => {
      ke(), k(["result event received", e]);
      const n = await u(e);
      if (!n.success) {
        console.error(n.error);
        return;
      }
      await Ge(e);
    }, Ge = async (e) => {
      const a = wt(ot, e, ge.value, Be).split(",")[1], r = new lt();
      r.file("order-summary.pdf", a);
      const d = await r.generateAsync({ type: "blob" }), l = new File([d], "order-summary.zip", { type: "application/zip" });
      if (!ue("smartcut-order-summary")) return;
      const f = F["smartcut-order-summary"].closest("form");
      if (!f) return;
      const s = new DataTransfer();
      s.items.add(l);
      const y = f.querySelector('[name="smartcut_order_summary"]');
      y instanceof HTMLInputElement && (y.files = s.files);
    }, Je = (e, n) => {
      T(), e && (ge.value = yt(e)), ce("smartcut-hardware-price", n ?? 0);
    };
    return mt(() => {
      console.log("💥 Powered by https://smartcut.dev", window?.smartcutConfig?.version), k(["Launching WordPress checkout..."]), S.banding = v(window, ["smartcutConfig", "banding_data"]), S.finish = v(window, ["smartcutConfig", "finish_data"]), ie = v(window, ["smartcutConfig", "machining_pricing"]), q = v(window, ["smartcutConfig", "variations"]), Ae(), Qe(), Ie(window.smartcutConfig), $e(window.smartcutConfig), Oe(), Ve(), [
        "div.quantity > input.plus",
        "div.quantity > input.minus",
        "div.quantity .qty-plus",
        "div.quantity .qty-minus"
      ].forEach((a) => {
        const r = document.querySelector(a);
        r && (r.style.display = "none");
      });
      const n = new CustomEvent("smartcut/ready");
      window.dispatchEvent(n), k(["Wordpress checkout ready"]);
    }), (e, n) => (ae(), ze(gt, null, [
      fe(U(_), { position: "top-left" }),
      U(p) === "development" && vt ? (ae(), ze("div", kt, [
        n[0] || (n[0] = _t("div", null, "WP - developer information", -1)),
        fe(U(C), {
          data: [P.value],
          paths: ["stock"]
        }, null, 8, ["data"]),
        fe(U(C), {
          data: [P.value.map((a) => a.trim)],
          paths: ["stock trim"]
        }, null, 8, ["data"])
      ])) : me("", !0),
      E.value === "formula" && K.value ? (ae(), Ee(U(w), {
        key: 1,
        ref: "formulapricing",
        "format-price": X,
        url: K.value,
        debug: W.value,
        onHardwareResult: Je,
        onPanelResult: T
      }, null, 8, ["url", "debug"])) : me("", !0),
      E.value === "manual" || E.value === "formula" && K.value ? (ae(), Ee(tt, {
        key: 2,
        ref_key: "calculator",
        ref: G,
        readonly: E.value === "formula",
        debug: W.value,
        "input-stock": Te.value,
        "find-extras-price": le,
        "format-price": X,
        "input-type": E.value,
        onLog: k,
        onError: g,
        onInputsChanged: T,
        onValidationError: qe,
        onResult: Ke
      }, null, 8, ["readonly", "debug", "input-stock", "input-type"])) : me("", !0)
    ], 64));
  }
});
export {
  Et as default
};

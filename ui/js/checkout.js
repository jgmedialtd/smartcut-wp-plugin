import { d as xe, y as bt, g as S, j as Qe, c as he, o as B, A as _e, e as te, q as se, u as Q, C as oe, b as vt, F as We, k as Ke, O as Ce, U as Je, G as wt, V as kt, h as Ue, W as St, t as xt, X as Ft, Y as Pt, Z as Et } from "./vendor-vue-D8CfTNeX.js";
import { i as Se, B as zt } from "./vendor-i18n-Bf4ASP8L.js";
import { q as Tt, d as y, v as jt, w as Me, x as Ye, y as P, C as Ge, p as qt, z as H, A as Ot, B as $t, D as At, E as It, _ as Lt } from "./components-DaRBMrhg.js";
import { J as Dt, D as Bt, E as Rt, G as Vt, H as Ht, I as Ne, K as Ut, L as Mt, M as Yt, N as Nt, O as Qt, Q as Wt, S as Kt, T as Ct, U as Jt } from "./vendor-DABu9zvL.js";
import { E as Gt, a as C } from "./vendor-pdf-utk3c_zC.js";
import { u as Xt, f as Zt } from "./composables-DZFlso1I.js";
const en = tn();
async function tn() {
  const l = {
    main: import("./main-DQj1MkcK.js").then((c) => c.resources),
    errors: import("./errors-CMbWVxrq.js").then((c) => c.resources)
  }, [k, A] = await Promise.all([
    l.main,
    l.errors
  ]), _ = Object.keys(k), u = _.reduce((c, x) => ({
    ...c,
    [x]: {
      main: k[x],
      errors: A[x]
    }
  }), {});
  return jt(Se), Se.use(zt).init({
    debug: !1,
    // lng: 'fr',
    fallbackLng: "en",
    ns: ["main", "errors"],
    defaultNS: "errors",
    resources: u,
    load: "languageOnly",
    supportedLngs: _,
    interpolation: {
      format: function(c, x) {
        return x === "capitalise" ? Tt(c) : x === "sentenceCase" ? y(c) : c;
      }
    }
  });
}
const J = 5, ie = 10, fe = ",", G = {
  fillColor: [7, 59, 76],
  fontStyle: "normal"
}, X = {
  fontSize: 9
}, Z = { left: 10 };
let ee = [];
const nn = (l, k, A, _ = (u) => u.toString()) => {
  var $;
  const u = new Gt({ orientation: "landscape" });
  let c = 10;
  u.setFontSize(20), u.text(y(l("pdf.order_summary")), 10, c), c += 15, u.setFontSize(14), u.text(l("description_item_plural", { a: "Your", i: "part" }), 10, c), c += J, ee = [
    y(l("length")),
    y(l("width")),
    y(l("thickness")),
    y(l("material")),
    y(l("quantity")),
    y(l("name")),
    `Banding (${Me.join(fe)})`,
    `Finish (${Ye.join(fe)})`
  ];
  const x = k.parts.map((p) => {
    var E;
    const m = Me.map((s) => p.banding[s] || "-").join(fe), t = Ye.map((s) => p.banding[s] || "-").join(fe);
    return [
      _(p.l),
      _(p.w),
      _(p.t) || "-",
      ((E = p == null ? void 0 : p.material) == null ? void 0 : E.toUpperCase()) || "-",
      _(p.q),
      p.name || "-",
      m,
      t
    ];
  });
  C(u, {
    startY: c,
    head: [ee],
    body: x,
    margin: Z,
    headStyles: G,
    styles: X
  }), c = u.lastAutoTable.finalY + ie, u.setFontSize(14), u.text(y(l("pdf.stock_requirements")), 10, c), c += J, ee = [
    y(l("length")),
    y(l("width")),
    y(l("thickness")),
    y(l("material")),
    y(l("quantity"))
    // 'Cost'
  ];
  const h = k.stock.map((p) => {
    var m;
    return [
      _(p.l),
      _(p.w),
      _(p.t) || "-",
      ((m = p == null ? void 0 : p.material) == null ? void 0 : m.toUpperCase()) || "-",
      _(p.q)
      // stock.cost
    ];
  });
  if (C(u, {
    startY: c,
    head: [ee],
    body: h,
    margin: Z,
    headStyles: G,
    styles: X
  }), c = u.lastAutoTable.finalY + ie, k.metadata.totalRollLength > 0) {
    u.setFontSize(14), u.text(y(l("pdf.roll_requirements")), 10, c), c += J, ee = [
      l("name"),
      l("material"),
      l("length")
    ];
    const p = k.stock.map((m) => {
      var t, E;
      return [
        ((t = m == null ? void 0 : m.name) == null ? void 0 : t.toUpperCase()) || "-",
        ((E = m == null ? void 0 : m.material) == null ? void 0 : E.toUpperCase()) || "-",
        _(m.analysis.rollLength)
      ];
    });
    C(u, {
      startY: c,
      head: [ee],
      body: p,
      margin: Z,
      headStyles: G,
      styles: X
    }), c = u.lastAutoTable.finalY + ie;
  }
  if (A && Object.values(A)) {
    u.setFontSize(14), u.text("Hardware", 10, c), c += J;
    const p = Object.values(A).map((m) => [
      m.name.toUpperCase(),
      _(m.q)
      // item.totalCost.toFixed( 2 )
    ]);
    C(u, {
      startY: c,
      head: [[y(l("pdf.item")), y(l("quantity"))]],
      body: p,
      margin: Z,
      headStyles: G,
      styles: X
    }), c = u.lastAutoTable.finalY + ie;
  }
  u.setFontSize(14), u.text(y(l("pdf.totals")), 10, c), c += J;
  const v = [
    [y(l("pdf.total_parts")), _(k.metadata.totalPartsProduced)],
    [y(l("pdf.part_area")), _(k.metadata.totalPartArea)],
    [y(l("pdf.total_stock_required")), _(k.metadata.totalUsedStock)],
    [y(l("pdf.total_banding_length")), _(k.metadata.totalBandingLength)],
    [y(l("pdf.total_finish_area")), _(k.metadata.totalFinishArea)],
    [y(l("pdf.total_roll_length")), _(k.metadata.totalRollLength)]
  ];
  if (C(u, {
    startY: c,
    body: v,
    margin: Z,
    headStyles: G,
    styles: X
  }), c = u.lastAutoTable.finalY + ie, ($ = window == null ? void 0 : window.smartcutImages) != null && $.length) {
    u.addPage();
    let p = 10;
    u.setFontSize(14), u.text(y(l("pdf.images")), 10, p), p += J;
    const m = window.smartcutImages.flatMap((t, E) => t.metadata.map((s) => [
      E + 1,
      s.newName
    ]));
    C(u, {
      startY: p,
      body: m,
      head: [[y(l("pdf.part_index")), y(l("pdf.file_name"))]],
      margin: Z,
      headStyles: G,
      styles: X
    });
  }
  return u.output("datauristring");
}, an = {
  key: 0,
  class: "debug"
}, rn = !1, on = /* @__PURE__ */ xe({
  __name: "WordPress",
  setup(l) {
    const { t: k } = bt(["main", "errors"]), A = oe(() => import("./components-DaRBMrhg.js").then((e) => e.F)), _ = oe(() => import("./components-DaRBMrhg.js").then((e) => e.O)), u = oe(() => import("./components-DaRBMrhg.js").then((e) => e.N)), { inputShapes: c } = Xt(), x = "production", h = {}, v = {}, $ = S(null);
    let p, m, t;
    const E = {
      banding: null,
      finish: null
    };
    let s = null, q = [], W = null, T = {};
    const K = S(!1), I = S("manual"), U = S(""), j = S([]), R = S(null), D = S(!0), ne = S(null), r = S(!1), z = S(null);
    Je("calculator", () => z.value);
    const b = (e) => {
      K.value && console.log("SmartCut -", ...e);
    }, g = (e) => {
      console.error(`SmartCut - ${e}`);
    }, L = (e = !0) => {
      r.value = !0, ["checkout", "intro_text", "offcuts", "banding_key"].forEach((a) => re(a, "block")), dt() && re("pricing_table", "table"), e ? O(!0) : Y(), V();
    }, M = (e = !0, n = !0) => {
      r.value = !1, ["checkout", "intro_text", "offcuts", "banding_key", "pricing_table"].forEach((i) => re(i, "none")), n === !0 ? Fe() : n === !1 && V(), O ? O() : e === !1 && Y();
    }, O = (e = !1) => {
      re("quantity", "inline-block"), h.quantity.readOnly = e;
    }, Y = () => {
      r.value !== !1 && (ye(1), re("quantity", "none"), h.quantity.readOnly = !0);
    }, Fe = () => {
      if (!h.cart_button) {
        g("Cart button not found");
        return;
      }
      h.cart_button.disabled = !1;
    }, V = () => {
      if (r.value !== !1) {
        if (!h.cart_button) {
          g("Cart button not found");
          return;
        }
        h.cart_button.disabled = !0;
      }
    }, Xe = () => {
      g("Validation error"), V();
    }, ye = (e, n = 0) => {
      if (b(["setting cart quantity", e]), !h.quantity) {
        g("Quantity field not found when trying to set");
        return;
      }
      h.quantity.value = e.toFixed(n), console.assert(h.quantity.value === e.toFixed(n), "Quantity field value not set correctly");
    }, Ze = (e) => {
      b(["setting variation price", e]);
      const n = document.querySelector(".woocommerce-variation-price .smartcut-price-selector");
      n && (n.innerText = le(e)), $.value = e;
    }, et = (e = !1) => {
      var a, i, f;
      const n = e ? ((a = R.value) == null ? void 0 : a.display_price) ?? 0 : $.value ?? ((i = R.value) == null ? void 0 : i.display_price) ?? 0;
      return console.log("getCurrentVariationPrice", $.value, (f = R.value) == null ? void 0 : f.display_price), typeof n == "string" ? parseFloat(n) : n;
    }, tt = () => {
      if (!(window != null && window.smartcutConfig)) {
        g("SmartCut config not found");
        return;
      }
      const e = window.smartcutConfig;
      t = e.settings;
      const n = ze(P(window, ["smartcutConfig", "banding_data"])), a = ze(P(window, ["smartcutConfig", "finish_data"])), i = {
        debug: t.debug,
        numberFormat: t.numberFormat,
        locale: e.locale,
        decimalPlaces: 2,
        //saw
        stockType: t.stock_type,
        bladeWidth: t.blade_width,
        cutPreference: t.cut_preference,
        stackHeight: t.stack_height,
        stockSelection: t.stock_selection,
        stockGrain: t.stock_grain,
        minSpacing: t.min_spacing,
        maxParts: t.max_parts ?? null,
        orientationModel: t.orientation_model,
        minDimension: t.min_dimension,
        partTrim: t.part_trim,
        enable: {
          banding: t.enable_banding,
          finish: t.enable_finish,
          orientation: t.enable_orientation,
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
          partA: (t == null ? void 0 : t.part_a_color) ?? "#1d9bc4",
          partB: (t == null ? void 0 : t.part_b_color) ?? "#065d7a",
          partHover: (t == null ? void 0 : t.part_hover_color) ?? "#f8b029",
          partSelected: (t == null ? void 0 : t.part_selected_color) ?? "#5bc85b",
          stock: (t == null ? void 0 : t.stock_color) ?? "#ffd166",
          button: (t == null ? void 0 : t.button_color) ?? "#118ab2",
          buttonText: (t == null ? void 0 : t.button_text_color) ?? "#ffffff",
          text: (t == null ? void 0 : t.text_color) ?? "#ffffff"
        }
      };
      K.value = i.debug;
      const f = {
        numberFormat: t.number_format,
        decimalPlaces: 2,
        fractionRoundTo: 0,
        faces: {
          enabled: t.machining_sides
        },
        holes: {
          enabled: t.machining_holes,
          defaultDiameter: t.machining_holes_default_diameter,
          diameters: t.machining_holes_diameters.split(",").map((F) => F.trim()).filter(Boolean),
          minDiameter: t.machining_holes_min_diameter,
          maxDiameter: t.machining_holes_max_diameter,
          enableDepth: t.machining_holes_depth,
          depths: t.machining_holes_depths.split(",").map((F) => F.trim()).filter(Boolean),
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
      D.value = je(), D.value ? O(!0) : Y(), s.type === "variable" ? M(!1, !1) : L(D.value);
      const d = {
        type: s.type,
        stock: j.value,
        variations: q ?? null,
        options: i,
        banding: n,
        finish: a,
        machining: f
      };
      d.type === "variable" && (b(["setting variable product form listeners"]), jQuery(function(F) {
        F(".variations_form").on("reset_data", () => M(!1, !1)).on("found_variation", (N, pe) => _t(N, pe));
      }));
      const w = {
        product: s,
        selectedVariation: R,
        inputs: v,
        elements: h,
        inputType: I,
        formatPrice: le,
        getCurrentVariationPrice: et,
        setInputValue: be,
        setCartQuantity: ye,
        setVariationPrice: Ze,
        isExtraEnabled: we,
        isQuantityPricing: je,
        isMachiningEnabled: qe,
        isSurchargeEnabled: Oe,
        getTotalBandingPrice: ct,
        getTotalFinishPrice: lt,
        getTotalMachiningPrice: ut,
        getInputValue: pt,
        enableAddToCart: Fe,
        log: b,
        error: g
      }, o = Zt({
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
      }, w);
      p = o.calculatePrice, m = o.resetPricing, Ke(() => {
        z.value && z.value.init(d);
      });
    }, nt = (e) => {
      const n = (e == null ? void 0 : e.multiple_sizes) === !0;
      s = {
        type: e == null ? void 0 : e.product_type,
        multiple_sizes: n,
        size: e != null && e.size ? e.size.split(" | ") : [],
        l: !n && (e != null && e.l) ? parseFloat(e.l) : null,
        w: !n && (e != null && e.w) ? parseFloat(e.w) : null,
        t: (e == null ? void 0 : e.t) ?? null,
        price: e != null && e.price ? parseFloat(e.price) : null,
        stock_name: (e == null ? void 0 : e.stock_sku) || e.stock_name
      }, s.multiple_sizes || (s.l || g("product 'length' attribute not available"), s.w || g("product 'width' attribute not available"));
    }, at = (e) => {
      I.value = P(window, ["smartcutConfig", "settings", "enable_formula"]) === !0 ? "formula" : "manual", U.value = P(window, ["smartcutConfig", "settings", "formula_url"]), b([`Input type: ${I.value}`]), T = {
        thousands_separator: e == null ? void 0 : e.thousands_separator,
        decimal_separator: e == null ? void 0 : e.decimal_separator,
        number_of_decimals: e == null ? void 0 : e.number_of_decimals,
        currency_symbol: e == null ? void 0 : e.currency_symbol,
        currency_position: e == null ? void 0 : e.currency_position
      };
    }, rt = () => {
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
        h[n] = document.querySelector(a);
      if (!h.checkout)
        return g("checkout iframe not found");
      if (!h.quantity)
        return g("quantity field not found");
      if (!h.cart_button)
        return g("cart button not found");
      h.quantity.readOnly = !0, V();
    }, it = () => ({
      x1: t.stock_trim_x1 ?? 0,
      x2: t.stock_trim_x2 ?? 0,
      y1: t.stock_type === "linear" ? 0 : t.stock_trim_y1 ?? 0,
      y2: t.stock_type === "linear" ? 0 : t.stock_trim_y2 ?? 0
    }), ae = (e = null, n = null, a = null, i = null, f = null) => {
      let d;
      if (f && typeof f == "object") {
        d = [];
        for (const [o, F] of Object.entries(f))
          o !== "attribute_size" && o !== "attribute_thickness" && d.push(`${o.replace("attribute_", "")}: ${F}`);
        d = d.join(" - ");
      }
      return {
        name: s.stock_name,
        l: e,
        w: n,
        t: a,
        grain: t.stock_grain,
        cost: parseFloat((i == null ? void 0 : i.toString()) || "0"),
        trim: it(),
        allowExactFitShapes: !0,
        notes: d
      };
    }, ot = () => {
      if (s != null && s.stock_name || g("product name not specified"), j.value = [], s.multiple_sizes)
        for (const e of s.size) {
          if (!ue(e)) continue;
          const [n, a] = e.split("x"), i = ae(
            parseFloat(n),
            parseFloat(a),
            s == null ? void 0 : s.t,
            s.price
          );
          j.value.push(i);
        }
      else
        j.value.push(ae(
          s.l,
          s.w,
          s == null ? void 0 : s.t,
          s == null ? void 0 : s.price
        ));
    }, Pe = (e, n) => {
      const a = e.split(".");
      return a[0] = a[0].replace(/\B(?=(\d{3})+(?!\d))/g, n), a.join(".");
    }, le = (e = 0, n = "") => {
      if (!e)
        return n ? Ee("0.00") : "0.00";
      typeof e == "string" && (e = parseFloat(e));
      const a = e.toFixed(T.number_of_decimals).replace(".", T.decimal_separator), i = Pe(a, T.thousands_separator);
      return n ? Ee(i) : i;
    }, st = (e) => {
      if (e == null) return "";
      typeof e == "string" && (e = parseFloat(e));
      const a = e % 1 !== 0 ? T.number_of_decimals : 0, i = e.toFixed(a).replace(".", T.decimal_separator);
      return Pe(i, T.thousands_separator);
    }, Ee = (e) => {
      switch (T.currency_position) {
        case "left":
          return `${T.currency_symbol}${e}`;
        case "right":
          return `${e}${T.currency_symbol}`;
        default:
          return `${T.currency_symbol}${e}`;
      }
    }, ce = (e) => {
      const n = (a) => $t(At(a), 100).replace("|", "_");
      return Array.isArray(e) ? e.map(n).join(",") : n(e);
    }, ze = (e) => {
      if (!e) return null;
      const n = {
        labels: [],
        pricing: {}
      }, a = Object.values(e);
      for (const i of a)
        i != null && i.variations ? (n.labels.push(...Object.keys(i.options)), Object.values(i.variations).forEach((f) => {
          const { options: d } = f, w = Object.values(d).map((o) => ce(o)).join("|");
          n.pricing[w] = parseInt(f.price);
        })) : i != null && i.options && Object.keys(i.options).forEach((f) => {
          n.pricing[ce(f)] = parseInt(i.price);
        });
      return n.labels.length || n.labels.push("type"), n;
    }, ge = (e, n) => {
      if (!n.length || !H(E, [e])) return null;
      const a = P(E, [e]);
      if (!Ot(a)) return null;
      const f = Object.values(a).map((d) => d != null && d.variations ? Object.values(d.variations).map((w) => (w.type = "variable", w)) : (d.type = "simple", d)).flat().find((d) => {
        let w;
        return d.type === "simple" ? w = Object.keys(d.options) : w = Object.values(d.options), w ? w.every((o, F) => ce(o) === ce(n[F])) : !1;
      });
      return f != null && f.price ? parseFloat(f.price) : null;
    }, lt = (e) => {
      let n = 0;
      if (typeof e == "object") {
        for (let [a, i] of Object.entries(e)) {
          typeof i == "string" && (i = parseFloat(i));
          const f = a.split("|"), d = ge("finish", f);
          if (d === null) continue;
          const o = Number(i) / 1e6 * parseFloat(d.toString());
          n += o;
        }
        if ("min_finish_charge" in t) {
          const a = parseFloat(t == null ? void 0 : t.min_finish_charge);
          if (a > 0 && n > 0 && n < a)
            return a;
        }
      }
      return n;
    }, ct = (e) => {
      let n = 0;
      if (typeof e == "object") {
        for (let [a, i] of Object.entries(e)) {
          typeof i == "string" && (i = parseFloat(i));
          const f = a.split("|"), d = ge("banding", f);
          if (d === null) continue;
          const w = i / (t.unit_system === "imperial" ? 12 : 1e3) * parseFloat(d.toString());
          n += w;
        }
        if ("min_banding_charge" in t) {
          const a = parseFloat(t == null ? void 0 : t.min_banding_charge);
          if (a > 0 && n > 0 && n < a)
            return a;
        }
      }
      return n;
    }, ut = (e) => (W.holes ?? 0) * (e.metadata.numHoles ?? 0) + (W.corners ?? 0) * (e.metadata.numCorners ?? 0), re = (e, n) => {
      var a;
      e in h && ((a = h[e]) != null && a.style) && (h[e].style.display = n);
    }, be = (e, n) => {
      ve(e) ? v[e].value = n : g(`Attempting to set input but key '${e}' does not exist`);
    }, pt = (e) => {
      if (ve(e))
        return v[e].value;
      g(`Attempting to get input but key '${e}' does not exist`);
    }, ve = (e) => e in v && v[e] instanceof HTMLInputElement, Te = () => {
      ye(1), V(), m();
      for (const e in v)
        e !== "smartcut-hardware-price" && be(e, null);
    }, je = () => {
      var e;
      if (((e = window.smartcutConfig) == null ? void 0 : e.product_type) === "variable")
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
    }, we = (e) => {
      if (H(t, ["enable", e]) && P(t, ["enable", e]) === !1)
        return !1;
      const n = P(E, [e]);
      return !!(n && Object.values(n).length);
    }, qe = () => t.enable_machining === !0, Oe = () => !((t == null ? void 0 : t.surcharge_type) === "none" || !(t != null && t.surcharge) || t.surcharge === "0.00"), dt = () => !!(t.pricing_strategy === "full_stock_plus_cut_length" || t.pricing_strategy === "full_stock_plus_num_parts" || t.pricing_strategy === "part_area" || t.pricing_strategy === "roll_length" || Oe() || we("banding") || we("finish") || qe()), ft = (e) => {
      var a;
      let n = (a = e == null ? void 0 : e.attributes) == null ? void 0 : a.attribute_size;
      return n || (n = s == null ? void 0 : s.size), n;
    }, ue = (e) => /\d+x\d+/.test(e), mt = () => {
      window.smartcutConfig.input_fields.forEach((e) => {
        const n = e.replaceAll("_", "-");
        v[n] = document.getElementById(n);
      });
    }, _t = (e, n) => {
      Te(), R.value = n, b(["variation selected", n.attributes]), j.value = [];
      const a = P(n, ["attributes", "attribute_thickness"]) ?? null;
      if (s.selected_thickness = a, c.value.forEach((i) => {
        i.t = qt({ v: a });
      }), s.multiple_sizes) {
        const i = ft(n);
        if (b([`variation found with size: ${i} & thickness: ${a}`]), !i)
          return M(!1), g("The size of this multiple size product could not be found");
        if (Array.isArray(i) ? L(D.value) : ue(i) ? M(!0, !0) : L(D.value), q != null && q.length) {
          let f;
          const d = a;
          let w = n.display_price;
          Array.isArray(i) ? f = i.map((o) => ({
            size: o,
            l: o.split("x")[0],
            w: o.split("x")[1],
            t: d,
            price: w
          })) : f = q.filter((o) => {
            var F, N;
            return ue((F = o == null ? void 0 : o.attributes) == null ? void 0 : F.size) ? a === (((N = o == null ? void 0 : o.attributes) == null ? void 0 : N.thickness) ?? null) : !1;
          }).map((o) => {
            var $e, Ae, Ie, Le;
            const F = (($e = o == null ? void 0 : o.attributes) == null ? void 0 : $e.size.split("x")[0]) ?? null, N = ((Ae = o == null ? void 0 : o.attributes) == null ? void 0 : Ae.size.split("x")[1]) ?? null;
            let pe = 0;
            return n.display_price || (pe = q.find((de) => {
              var De, Be, Re, Ve, He;
              return ue((De = de.attributes) == null ? void 0 : De.size) && ((Be = de.attributes) == null ? void 0 : Be.thickness) === ((Re = o == null ? void 0 : o.attributes) == null ? void 0 : Re.thickness) && ((Ve = de.attributes) == null ? void 0 : Ve.size) === ((He = o == null ? void 0 : o.attributes) == null ? void 0 : He.size) && de.display_price > 0;
            }).display_price), b([
              `size attribute: '${(Ie = o == null ? void 0 : o.attributes) == null ? void 0 : Ie.size}'`,
              `price for thickness ${a}, dimensions: ${F}x${N} is ${w}`
            ]), {
              size: (Le = o == null ? void 0 : o.attributes) == null ? void 0 : Le.size,
              l: F,
              w: N,
              t: d,
              price: w || pe
            };
          }), r.value === !0 && f.forEach((o) => {
            const F = ae(
              o.l,
              o.w,
              o.t,
              o.price,
              n == null ? void 0 : n.attributes
            );
            j.value.push(F);
          });
        }
      } else {
        if (!q.some((i) => "thickness" in i.attributes))
          j.value.push(ae(
            s.l,
            s.w,
            a,
            n.display_price,
            n == null ? void 0 : n.attributes
          ));
        else {
          const i = q.find((f) => {
            var d;
            return ((d = f.attributes) == null ? void 0 : d.thickness) === a;
          });
          if (!i) return g(`variation not found for thickness ${a}`);
          j.value.push(ae(
            s.l,
            s.w,
            a,
            i.price,
            n == null ? void 0 : n.attributes
          ));
        }
        L(D.value);
      }
    }, ht = async (e) => {
      Te(), b(["result event received", e]);
      const n = await p(e);
      if (!n.success) {
        console.error(n.error);
        return;
      }
      await yt(e);
    }, yt = async (e) => {
      const a = nn(k, e, ne.value, st).split(",")[1], i = new Dt();
      i.file("order-summary.pdf", a);
      const f = await i.generateAsync({ type: "blob" }), d = new File([f], "order-summary.zip", { type: "application/zip" });
      if (!ve("smartcut-order-summary")) return;
      const w = v["smartcut-order-summary"].closest("form");
      if (!w) return;
      const o = new DataTransfer();
      o.items.add(d);
      const F = w.querySelector('[name="smartcut_order_summary"]');
      F instanceof HTMLInputElement && (F.files = o.files);
    }, gt = (e, n) => {
      V(), e && (ne.value = Ce(e)), be("smartcut-hardware-price", n ?? 0);
    };
    return Qe(() => {
      console.log("💥 Powered by https://smartcut.dev", window.smartcutConfig.version), b(["Launching WordPress checkout..."]), E.banding = P(window, ["smartcutConfig", "banding_data"]), E.finish = P(window, ["smartcutConfig", "finish_data"]), W = P(window, ["smartcutConfig", "machining_pricing"]), q = P(window, ["smartcutConfig", "variations"]), rt(), mt(), nt(window.smartcutConfig), at(window.smartcutConfig), tt(), ot(), [
        "div.quantity > input.plus",
        "div.quantity > input.minus",
        "div.quantity .qty-plus",
        "div.quantity .qty-minus"
      ].forEach((a) => {
        const i = document.querySelector(a);
        i && (i.style.display = "none");
      });
      const n = new CustomEvent("smartcut/ready");
      window.dispatchEvent(n), b(["Wordpress checkout ready"]);
    }), (e, n) => (B(), he(We, null, [
      _e(Q(u), { position: "top-left" }),
      Q(x) === "development" && rn ? (B(), he("div", an, [
        n[0] || (n[0] = vt("div", null, "WP - developer information", -1)),
        _e(Q(_), {
          data: [j.value],
          paths: ["stock"]
        }, null, 8, ["data"]),
        _e(Q(_), {
          data: [j.value.map((a) => a.trim)],
          paths: ["stock trim"]
        }, null, 8, ["data"])
      ])) : te("", !0),
      I.value === "formula" && U.value ? (B(), se(Q(A), {
        key: 1,
        ref: "formulapricing",
        "format-price": le,
        url: U.value,
        debug: K.value,
        onHardwareResult: gt,
        onPanelResult: V
      }, null, 8, ["url", "debug"])) : te("", !0),
      I.value === "manual" || I.value === "formula" && U.value ? (B(), se(Ge, {
        key: 2,
        ref_key: "calculator",
        ref: z,
        readonly: I.value === "formula",
        debug: K.value,
        stock: j.value,
        "find-extras-price": ge,
        "format-price": le,
        "input-type": I.value,
        onLog: b,
        onError: g,
        onInputsChanged: V,
        onValidationError: Xe,
        onResult: ht
      }, null, 8, ["readonly", "debug", "stock", "input-type"])) : te("", !0)
    ], 64));
  }
}), sn = /* @__PURE__ */ xe({
  __name: "Vanilla",
  emits: ["ready"],
  setup(l, { expose: k, emit: A }) {
    const _ = oe(() => import("./components-DaRBMrhg.js").then((r) => r.F)), u = oe(() => import("./components-DaRBMrhg.js").then((r) => r.N)), c = A, x = S(!1), h = S([]), v = S({
      banding: null,
      finish: null,
      machining: null
    }), $ = S("USD"), p = S("en-US"), m = S("manual"), t = S(""), E = wt(null), s = S(null), q = S();
    Je("calculator", () => q.value);
    const W = (r) => {
      x.value && console.log("SmartCut -", ...r);
    }, T = (r) => {
      console.error(`SmartCut - ${r}`);
    }, K = () => {
      const r = new CustomEvent("smartcut/validationError");
      window.dispatchEvent(r);
    }, I = () => {
      const r = new CustomEvent("smartcut/calculating");
      window.dispatchEvent(r);
    }, U = (r) => {
      s.value = r;
    }, j = (r = 0, z = p.value) => {
      if (r === !0) return "";
      try {
        z = z.replace("_", "-");
        const b = Number(r);
        return !b && b !== 0 ? "" : isNaN(b) ? (console.error("formatPrice - invalid price:", r), "") : b.toLocaleString(z, {
          style: "currency",
          currency: $.value
        });
      } catch (b) {
        return console.error("Error formatting price:", b), "";
      }
    }, R = (r, z) => {
      var L;
      if (!((L = v.value) != null && L[r])) return null;
      const b = z.join("|"), g = P(v.value, [r, b]);
      return typeof g == "number" ? g : parseFloat(g);
    }, D = (r) => {
      It(r), h.value = r.stock, v.value.banding = P(r, ["banding", "pricing"]), v.value.finish = P(r, ["finish", "pricing"]), v.value.machining = P(r, ["machining", "pricing"]), H(r, ["options", "currency"]) && ($.value = P(r, ["options", "currency"])), H(r, ["options", "locale"]) && (p.value = P(r, ["options", "locale"]).replace("_", "-")), (H(r, ["options", "formula", "url"]) || H(r, ["options", "formula", "spec"])) && (m.value = "formula", t.value = P(r, ["options", "formula", "url"]) ?? null, E.value = P(r, ["options", "formula", "spec"]) ?? null), Ke(() => {
        q.value && q.value.init(r);
      });
    }, ne = (r) => {
      var g, L, M;
      const z = r;
      if (z.checkout = {
        formattedTotalStockCost: "",
        formattedBandingCost: {},
        formattedFinishCost: {}
      }, (g = r == null ? void 0 : r.metadata) != null && g.totalStockCost && (z.checkout.formattedTotalStockCost = r.metadata.totalStockCost.toLocaleString(
        p.value,
        {
          style: "currency",
          currency: $.value
        }
      )), (L = r == null ? void 0 : r.metadata) != null && L.bandingLengthByType)
        for (const [O, Y] of Object.entries(r.metadata.bandingLengthByType)) {
          if (!H(v.value, ["banding", O])) {
            T(`Banding price ${O} not found`);
            continue;
          }
          z.checkout.formattedBandingCost[O] = (Y / 1e3 * v.value.banding[O]).toLocaleString(p.value, { style: "currency", currency: $.value });
        }
      if ((M = r == null ? void 0 : r.metadata) != null && M.finishAreaByType)
        for (const [O, Y] of Object.entries(r.metadata.finishAreaByType)) {
          if (!H(v.value, ["finish", O])) {
            T(`Finish price ${O} not found`);
            continue;
          }
          z.checkout.formattedFinishCost[O] = (Y / 1e6 * v.value.finish[O]).toLocaleString(p.value, { style: "currency", currency: $.value });
        }
      const b = new CustomEvent("smartcut/result", {
        detail: JSON.parse(JSON.stringify(z))
      });
      window.dispatchEvent(b);
    };
    return kt(() => {
      console.log("💥 Powered by https://smartcut.dev ");
      const r = new URLSearchParams(window.location.search);
      x.value = !!r.has("debug"), x.value && console.log("Smartcut - debug enabled");
    }), Qe(() => {
      window.smartcutCheckout = { init: D }, c("ready");
      const r = new CustomEvent("smartcut/ready");
      window.dispatchEvent(r);
    }), k({
      init: D,
      debug: x,
      stock: h,
      pricing: v,
      currency: $,
      locale: p,
      inputType: m,
      formulaURL: t,
      formulaSpec: E,
      hardWareResult: s,
      log: W,
      error: T,
      calculating: I,
      result: ne,
      formatPrice: j,
      findExtrasPrice: R,
      setHardwareResult: U
    }), (r, z) => (B(), he(We, null, [
      _e(Q(u), { position: "top-left" }),
      m.value === "formula" && (t.value || E.value) ? (B(), se(Q(_), {
        key: 0,
        ref: "formulapricing",
        "format-price": j,
        url: t.value,
        spec: E.value,
        debug: x.value,
        onHardwareResult: U
      }, null, 8, ["url", "spec", "debug"])) : te("", !0),
      m.value === "manual" || m.value === "formula" && (t.value || E.value) ? (B(), se(Ge, {
        key: 1,
        ref_key: "calculator",
        ref: q,
        readonly: m.value === "formula",
        debug: x.value,
        stock: h.value,
        "input-type": m.value,
        "find-extras-price": R,
        "format-price": j,
        onLog: W,
        onError: T,
        onCalculating: I,
        onValidationError: K,
        onResult: ne
      }, null, 8, ["readonly", "debug", "stock", "input-type"])) : te("", !0)
    ], 64));
  }
}), ln = {
  key: 1,
  class: "error-message"
}, cn = /* @__PURE__ */ xe({
  __name: "Launch",
  props: {
    type: { default: "vanilla" }
  },
  setup(l, { expose: k }) {
    const A = S(!1), _ = S(null), u = Ce({
      wordpress: on,
      vanilla: sn
    }), c = l, x = Ue(() => {
      if (!c.type) return null;
      const h = c.type.toLowerCase();
      return u[h] || null;
    });
    return k({
      componentType: Ue(() => c.type),
      isComponentMounted: A,
      checkout: _
    }), (h, v) => x.value ? (B(), se(St(x.value), {
      key: 0,
      ref_key: "checkoutRef",
      ref: _
    }, null, 512)) : c.type ? (B(), he("div", ln, " Invalid component type: " + xt(c.type), 1)) : te("", !0);
  }
}), un = /* @__PURE__ */ Lt(cn, [["__scopeId", "data-v-6d642def"]]);
Bt.add(
  Rt,
  Vt,
  Ht,
  Ne,
  Ut,
  Mt,
  Yt,
  Nt,
  Qt,
  Wt,
  Kt,
  Ct,
  Ne,
  Jt
);
let me = null, ke = !1;
const pn = async () => {
  if (!ke) {
    ke = !0;
    try {
      const l = document.querySelector("#smartcut-app");
      if (!l) {
        console.warn("No #smartcut-app element found");
        return;
      }
      const k = l.getAttribute("data-type") || "";
      me = Ft(un, { type: k }), await en, me.use(Pt, { i18next: Se }), me.component("FontAwesomeIcon", Et), me.mount("#smartcut-app");
    } catch (l) {
      console.error("SmartCut mount error:", l);
    } finally {
      ke = !1;
    }
  }
};
pn();
export {
  me as app,
  pn as mount
};

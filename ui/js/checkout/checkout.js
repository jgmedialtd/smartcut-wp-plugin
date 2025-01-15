import { d as ye, y as at, g as S, U as Te, j as je, o as A, c as ce, u as ee, b as rt, A as it, f as G, q as te, F as qe, k as Oe, P as Ie, C as _e, G as ot, V as st, h as Pe, W as lt, t as ct, X as ut, Y as pt, Z as dt } from "./vendor-vue-3xcI29J2.js";
import { i as he, B as ft } from "./vendor-i18n-D9hV6ZJH.js";
import { p as mt, s as _, q as Ee, v as ze, w as k, C as Le, x as B, y as _t, z as ht, A as yt, B as gt, _ as bt } from "./components-BNP5xiAl.js";
import { J as vt, H as wt, I as kt, K as St, L as xt, M as Ft, N as Pt, O as Et, Q as zt, S as Tt, T as jt, U as qt, V as Ot } from "./vendor-UJdh33XB.js";
import { E as It, a as Y } from "./vendor-pdf-13rSvHGI.js";
import { f as Lt } from "./composables-SvIqviDe.js";
$t();
async function $t() {
  const c = {
    main: import("./main-BZ59B34d.js").then((a) => a.resources),
    errors: import("./errors-DnuBU3hq.js").then((a) => a.resources)
  }, [v, O] = await Promise.all([
    c.main,
    c.errors
  ]), d = Object.keys(v), u = d.reduce((a, f) => ({
    ...a,
    [f]: {
      main: v[f],
      errors: O[f]
    }
  }), {});
  return await he.use(ft).init({
    debug: !0,
    fallbackLng: "en",
    ns: ["main", "errors"],
    defaultNS: "main",
    resources: u,
    load: "currentOnly",
    supportedLngs: d,
    interpolation: {
      format: function(a, f) {
        return f === "capitalise" ? mt(a) : f === "sentenceCase" ? _(a) : a;
      }
    }
  }), he;
}
const Q = 5, C = 10, se = ",", W = {
  fillColor: [7, 59, 76],
  fontStyle: "normal"
}, K = {
  fontSize: 9
}, J = { left: 10 };
let N = [];
const At = (c, v, O, d = (u) => u.toString()) => {
  var t;
  const u = new It({ orientation: "landscape" });
  let a = 10;
  u.setFontSize(20), u.text(_(c("pdf.order_summary")), 10, a), a += 15, u.setFontSize(14), u.text(c("description_item_plural", { a: "Your", i: "part" }), 10, a), a += Q, N = [
    _(c("length")),
    _(c("width")),
    _(c("thickness")),
    _(c("material")),
    _(c("quantity")),
    _(c("name")),
    `Banding (${Ee.join(se)})`,
    `Finish (${ze.join(se)})`
  ];
  const f = v.parts.map((p) => {
    var z;
    const s = Ee.map((b) => p.banding[b] || "-").join(se), x = ze.map((b) => p.banding[b] || "-").join(se);
    return [
      d(p.l),
      d(p.w),
      d(p.t) || "-",
      ((z = p == null ? void 0 : p.material) == null ? void 0 : z.toUpperCase()) || "-",
      d(p.q),
      p.name || "-",
      s,
      x
    ];
  });
  Y(u, {
    startY: a,
    head: [N],
    body: f,
    margin: J,
    headStyles: W,
    styles: K
  }), a = u.autoTable.previous.finalY + C, u.setFontSize(14), u.text(_(c("pdf.stock_requirements")), 10, a), a += Q, N = [
    _(c("length")),
    _(c("width")),
    _(c("thickness")),
    _(c("material")),
    _(c("quantity"))
    // 'Cost'
  ];
  const E = v.stock.map((p) => {
    var s;
    return [
      d(p.l),
      d(p.w),
      d(p.t) || "-",
      ((s = p == null ? void 0 : p.material) == null ? void 0 : s.toUpperCase()) || "-",
      d(p.q)
      // stock.cost
    ];
  });
  if (Y(u, {
    startY: a,
    head: [N],
    body: E,
    margin: J,
    headStyles: W,
    styles: K
  }), a = u.autoTable.previous.finalY + C, v.metadata.totalRollLength > 0) {
    u.setFontSize(14), u.text(_(c("pdf.roll_requirements")), 10, a), a += Q, N = [
      c("name"),
      c("material"),
      c("length")
    ];
    const p = v.stock.map((s) => {
      var x, z;
      return [
        ((x = s == null ? void 0 : s.name) == null ? void 0 : x.toUpperCase()) || "-",
        ((z = s == null ? void 0 : s.material) == null ? void 0 : z.toUpperCase()) || "-",
        d(s.analysis.rollLength)
      ];
    });
    Y(u, {
      startY: a,
      head: [N],
      body: p,
      margin: J,
      headStyles: W,
      styles: K
    }), a = u.autoTable.previous.finalY + C;
  }
  if (O && Object.values(O)) {
    u.setFontSize(14), u.text("Hardware", 10, a), a += Q;
    const p = Object.values(O).map((s) => [
      s.name.toUpperCase(),
      d(s.q)
      // item.totalCost.toFixed( 2 )
    ]);
    Y(u, {
      startY: a,
      head: [[_(c("pdf.item")), _(c("quantity"))]],
      body: p,
      margin: J,
      headStyles: W,
      styles: K
    }), a = u.autoTable.previous.finalY + C;
  }
  u.setFontSize(14), u.text(_(c("pdf.totals")), 10, a), a += Q;
  const j = [
    [_(c("pdf.total_parts")), d(v.metadata.totalPartsProduced)],
    [_(c("pdf.part_area")), d(v.metadata.totalPartArea)],
    [_(c("pdf.total_stock_required")), d(v.metadata.totalUsedStock)],
    [_(c("pdf.total_banding_length")), d(v.metadata.totalBandingLength)],
    [_(c("pdf.total_finish_area")), d(v.metadata.totalFinishArea)],
    [_(c("pdf.total_roll_length")), d(v.metadata.totalRollLength)]
  ];
  if (Y(u, {
    startY: a,
    body: j,
    margin: J,
    headStyles: W,
    styles: K
  }), a = u.autoTable.previous.finalY + C, (t = window == null ? void 0 : window.smartcutImages) != null && t.length) {
    u.addPage();
    let p = 10;
    u.setFontSize(14), u.text(_(c("pdf.images")), 10, p), p += Q;
    const s = window.smartcutImages.flatMap((x, z) => x.metadata.map((b) => [
      z + 1,
      b.newName
    ]));
    Y(u, {
      startY: p,
      body: s,
      head: [[_(c("pdf.part_index")), _(c("pdf.file_name"))]],
      margin: J,
      headStyles: W,
      styles: K
    });
  }
  return u.output("datauristring");
}, Dt = {
  key: 0,
  class: "debug"
}, Bt = !0, Rt = /* @__PURE__ */ ye({
  __name: "WordPress",
  setup(c) {
    const { t: v } = at(["main", "errors"]), O = _e(() => import("./components-BNP5xiAl.js").then((e) => e.F)), d = _e(() => import("./components-BNP5xiAl.js").then((e) => e.O)), u = "production", a = {}, f = {};
    let E, j, t;
    const p = {
      banding: null,
      finish: null
    };
    let s = null, x = [], z = null, b = {};
    const H = S(!1), I = S("manual"), R = S(""), q = S([]), U = S(null), $ = S(!0), X = S(null), r = S(!1), F = S(null);
    Te("calculator", () => F.value);
    const y = (e) => {
      H.value && console.log("SmartCut -", ...e);
    }, g = (e) => {
      console.error(`SmartCut - ${e}`);
    }, L = (e = !0) => {
      r.value = !0, ["checkout", "intro_text", "offcuts", "banding_key"].forEach((o) => Z(o, "block")), Je() && Z("pricing_table", "table"), e ? T(!0) : M(), D();
    }, V = (e = !0, n = !0) => {
      r.value = !1, ["checkout", "intro_text", "offcuts", "banding_key", "pricing_table"].forEach((l) => Z(l, "none")), n === !0 ? ge() : n === !1 && D(), T();
    }, T = (e = !1) => {
      Z("quantity", "inline-block"), a.quantity.readOnly = e;
    }, M = () => {
      r.value !== !1 && (ue(1), Z("quantity", "none"), a.quantity.readOnly = !0);
    }, ge = () => {
      if (!a.cart_button) {
        g("Cart button not found");
        return;
      }
      a.cart_button.disabled = !1;
    }, D = () => {
      if (r.value !== !1) {
        if (!a.cart_button) {
          g("Cart button not found");
          return;
        }
        a.cart_button.disabled = !0;
      }
    }, $e = () => {
      g("Validation error"), D();
    }, ue = (e, n = 0) => {
      if (y(["setting cart quantity", e]), !a.quantity) {
        g("Quantity field not found when trying to set");
        return;
      }
      a.quantity.value = e.toFixed(n), console.assert(a.quantity.value === e.toFixed(n), "Quantity field value not set correctly");
    }, Ae = (e) => {
      y(["setting variation price", e]);
      const n = document.querySelector(".woocommerce-variation-price .smartcut-price-selector");
      n && (n.innerText = ae(e)), U.value.display_price = e;
    }, De = () => {
      if (!(window != null && window.smartcutConfig)) {
        g("SmartCut config not found");
        return;
      }
      const e = window.smartcutConfig;
      t = e.settings;
      const n = we(k(window, ["smartcutConfig", "banding_data"])), o = we(k(window, ["smartcutConfig", "finish_data"])), l = {
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
      H.value = l.debug;
      const m = {
        numberFormat: t.number_format,
        decimalPlaces: 2,
        fractionRoundTo: 0,
        faces: {
          enabled: t.machining_sides
        },
        holes: {
          enabled: t.machining_holes,
          defaultDiameter: t.machining_holes_default_diameter,
          diameters: t.machining_holes_diameters.split(",").map((P) => P.trim()).filter(Boolean),
          minDiameter: t.machining_holes_min_diameter,
          maxDiameter: t.machining_holes_max_diameter,
          enableDepth: t.machining_holes_depth,
          depths: t.machining_holes_depths.split(",").map((P) => P.trim()).filter(Boolean),
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
      $.value = Se(), $.value ? T(!0) : M(), s.type === "variable" ? V(!1, !1) : L($.value);
      const i = {
        type: s.type,
        stock: q.value,
        variations: x ?? null,
        options: l,
        banding: n,
        finish: o,
        machining: m
      };
      i.type === "variable" && (y(["setting variable product form listeners"]), jQuery(function(P) {
        P(".variations_form").on("reset_data", () => V(!1, !1)).on("found_variation", (oe, nt) => Ze(oe, nt));
      }));
      const h = {
        product: s,
        selectedVariation: U,
        inputs: f,
        elements: a,
        inputType: I,
        formatPrice: ae,
        setInputValue: ie,
        setCartQuantity: ue,
        setVariationPrice: Ae,
        isExtraEnabled: fe,
        isQuantityPricing: Se,
        isMachiningEnabled: xe,
        isSurchargeEnabled: Fe,
        getTotalBandingPrice: Qe,
        getTotalFinishPrice: Ye,
        getTotalMachiningPrice: We,
        getInputValue: Ke,
        enableAddToCart: ge,
        log: y,
        error: g
      }, w = Lt({
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
      }, h);
      E = w.calculatePrice, j = w.resetPricing, Oe(() => {
        F.value && F.value.init(i);
      });
    }, Be = (e) => {
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
    }, Re = (e) => {
      I.value = k(window, ["smartcutConfig", "settings", "enable_formula"]) === !0 ? "formula" : "manual", R.value = k(window, ["smartcutConfig", "settings", "formula_url"]), y([`Input type: ${I.value}`]), y([`Input type: ${I.value}`]), b = {
        thousands_separator: e == null ? void 0 : e.thousands_separator,
        decimal_separator: e == null ? void 0 : e.decimal_separator,
        number_of_decimals: e == null ? void 0 : e.number_of_decimals,
        currency_symbol: e == null ? void 0 : e.currency_symbol,
        currency_position: e == null ? void 0 : e.currency_position
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
      for (const [n, o] of Object.entries(e))
        a[n] = document.querySelector(o);
      if (!a.checkout)
        return g("checkout iframe not found");
      if (!a.quantity)
        return g("quantity field not found");
      if (!a.cart_button)
        return g("cart button not found");
      a.quantity.readOnly = !0, D();
    }, He = () => ({
      x1: t.stock_trim_x1 ?? 0,
      x2: t.stock_trim_x2 ?? 0,
      y1: t.stock_type === "linear" ? 0 : t.stock_trim_y1 ?? 0,
      y2: t.stock_type === "linear" ? 0 : t.stock_trim_y2 ?? 0
    }), ne = (e = null, n = null, o = null, l = null, m = null) => {
      let i;
      if (m && typeof m == "object") {
        i = [];
        for (const [w, P] of Object.entries(m))
          w !== "attribute_size" && w !== "attribute_thickness" && i.push(`${w.replace("attribute_", "")}: ${P}`);
        i = i.join(" - ");
      }
      return {
        name: s.stock_name,
        type: t.stock_type,
        l: e,
        w: n,
        t: o,
        grain: t.stock_grain,
        cost: parseFloat((l == null ? void 0 : l.toString()) || "0"),
        trim: He(),
        allowExactFitShapes: !0,
        notes: i
      };
    }, Ue = () => {
      s != null && s.stock_name || g("product name not specified"), q.value = [], s.multiple_sizes ? s.size.forEach((e) => {
        const [n, o] = e.split("x"), l = ne(
          parseFloat(n),
          parseFloat(o),
          s == null ? void 0 : s.t,
          s.price
        );
        q.value.push(l);
      }) : q.value.push(ne(
        s.l,
        s.w,
        s == null ? void 0 : s.t,
        s == null ? void 0 : s.price
      ));
    }, be = (e, n) => {
      const o = e.split(".");
      return o[0] = o[0].replace(/\B(?=(\d{3})+(?!\d))/g, n), o.join(".");
    }, ae = (e = 0, n = "") => {
      if (!e)
        return n ? ve("0.00") : "0.00";
      typeof e == "string" && (e = parseFloat(e));
      const o = e.toFixed(b.number_of_decimals).replace(".", b.decimal_separator), l = be(o, b.thousands_separator);
      return n ? ve(l) : l;
    }, Me = (e) => {
      if (e == null) return "";
      typeof e == "string" && (e = parseFloat(e));
      const o = e % 1 !== 0 ? b.number_of_decimals : 0, l = e.toFixed(o).replace(".", b.decimal_separator);
      return be(l, b.thousands_separator);
    }, ve = (e) => {
      switch (b.currency_position) {
        case "left":
          return `${b.currency_symbol}${e}`;
        case "right":
          return `${e}${b.currency_symbol}`;
        default:
          return `${b.currency_symbol}${e}`;
      }
    }, re = (e) => {
      const n = (o) => ht(yt(o), 100).replace("|", "_");
      return Array.isArray(e) ? e.map(n).join(",") : n(e);
    }, we = (e) => {
      if (!e) return null;
      const n = {
        labels: [],
        pricing: {}
      }, o = Object.values(e);
      for (const l of o)
        l != null && l.variations ? (n.labels.push(...Object.keys(l.options)), Object.values(l.variations).forEach((m) => {
          const { options: i } = m, h = Object.values(i).map((w) => re(w)).join("|");
          n.pricing[h] = parseInt(m.price);
        })) : l != null && l.options && Object.keys(l.options).forEach((m) => {
          n.pricing[re(m)] = parseInt(l.price);
        });
      return n.labels.length || n.labels.push("type"), n;
    }, pe = (e, n) => {
      if (!n.length || !B(p, [e])) return null;
      const o = k(p, [e]);
      if (!_t(o)) return null;
      const m = Object.values(o).map((i) => i != null && i.variations ? Object.values(i.variations).map((h) => (h.type = "variable", h)) : (i.type = "simple", i)).flat().find((i) => {
        let h;
        return i.type === "simple" ? h = Object.keys(i.options) : h = Object.values(i.options), h ? h.every((w, P) => re(w) === re(n[P])) : !1;
      });
      return m != null && m.price ? parseFloat(m.price) : null;
    }, Ye = (e) => {
      let n = 0;
      if (typeof e == "object") {
        for (let [o, l] of Object.entries(e)) {
          typeof l == "string" && (l = parseFloat(l));
          const m = o.split("|"), i = pe("finish", m);
          if (i === null) continue;
          const w = Number(l) / 1e6 * parseFloat(i.toString());
          n += w;
        }
        if ("min_finish_charge" in t) {
          const o = parseFloat(t == null ? void 0 : t.min_finish_charge);
          if (o > 0 && n > 0 && n < o)
            return o;
        }
      }
      return n;
    }, Qe = (e) => {
      let n = 0;
      if (typeof e == "object") {
        for (let [o, l] of Object.entries(e)) {
          typeof l == "string" && (l = parseFloat(l));
          const m = o.split("|"), i = pe("banding", m);
          if (i === null) continue;
          const h = l / (t.unit_system === "imperial" ? 12 : 1e3) * parseFloat(i.toString());
          n += h;
        }
        if ("min_banding_charge" in t) {
          const o = parseFloat(t == null ? void 0 : t.min_banding_charge);
          if (o > 0 && n > 0 && n < o)
            return o;
        }
      }
      return n;
    }, We = (e) => (z.holes ?? 0) * (e.metadata.numHoles ?? 0) + (z.corners ?? 0) * (e.metadata.numCorners ?? 0), Z = (e, n) => {
      var o;
      e in a && ((o = a[e]) != null && o.style) && (a[e].style.display = n);
    }, ie = (e, n) => {
      de(e) ? f[e].value = n : g(`Attempting to set input but key '${e}' does not exist`);
    }, Ke = (e) => {
      if (de(e))
        return f[e].value;
      g(`Attempting to get input but key '${e}' does not exist`);
    }, de = (e) => e in f && f[e] instanceof HTMLInputElement, ke = () => {
      ue(1), D(), ie("smartcut-cut-to-size-surcharge", 0), j();
      for (const e in f)
        e !== "smartcut-hardware-price" && ie(e, null);
    }, Se = () => {
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
    }, fe = (e) => {
      if (B(t, ["enable", e]) && k(t, ["enable", e]) === !1)
        return !1;
      const n = k(p, [e]);
      return !!(n && Object.values(n).length);
    }, xe = () => t.enable_machining === !0, Fe = () => !((t == null ? void 0 : t.surcharge_type) === "none" || !(t != null && t.surcharge) || t.surcharge === "0.00"), Je = () => !!(t.pricing_strategy === "full_stock_plus_cut_length" || t.pricing_strategy === "full_stock_plus_num_parts" || t.pricing_strategy === "part_area" || t.pricing_strategy === "roll_length" || Fe() || fe("banding") || fe("finish") || xe()), Ne = (e) => {
      var o;
      let n = (o = e == null ? void 0 : e.attributes) == null ? void 0 : o.attribute_size;
      return n || (n = s == null ? void 0 : s.size), n;
    }, Ge = (e) => /\d+x\d+/.test(e), Xe = () => {
      window.smartcutConfig.input_fields.forEach((e) => {
        const n = e.replaceAll("_", "-");
        f[n] = document.getElementById(n);
      });
    }, Ze = (e, n) => {
      ke(), U.value = n, y(["variation selected", n.attributes]), q.value = [];
      const o = k(n, ["attributes", "attribute_thickness"]);
      if (s.selected_thickness = o, s.multiple_sizes) {
        const l = Ne(n);
        if (y([`variation found with size: ${l} & thickness: ${o}`]), !l)
          return V(!1), g("The size of this multiple size product could not be found");
        if (Array.isArray(l) ? L($.value) : Ge(l) ? V(!0, !0) : L($.value), x != null && x.length && o) {
          let m;
          Array.isArray(l) ? m = l.map((i) => ({
            size: i,
            l: i.split("x")[0],
            w: i.split("x")[1],
            t: o,
            price: n.display_price
          })) : m = x.filter((i) => {
            var h, w;
            return /\d+x\d+/.test((h = i == null ? void 0 : i.attributes) == null ? void 0 : h.size) ? o === ((w = i == null ? void 0 : i.attributes) == null ? void 0 : w.thickness) : !1;
          }).map((i) => {
            var h, w, P, oe;
            return y([
              `size attribute: '${(h = i == null ? void 0 : i.attributes) == null ? void 0 : h.size}'`,
              `price for 'thickness ${o}, size: ${l}' is ${n.display_price}`
            ]), {
              size: (w = i == null ? void 0 : i.attributes) == null ? void 0 : w.size,
              l: (P = i == null ? void 0 : i.attributes) == null ? void 0 : P.size.split("x")[0],
              w: (oe = i == null ? void 0 : i.attributes) == null ? void 0 : oe.size.split("x")[1],
              t: s.selected_thickness,
              price: n.display_price
            };
          }), r.value === !0 && m.forEach((i) => {
            const h = ne(
              i.l,
              i.w,
              i.t,
              i.price,
              n == null ? void 0 : n.attributes
            );
            q.value.push(h);
          });
        }
      } else {
        const l = x.find((m) => m.attributes.thickness === o);
        if (!l) return g(`variation not found for thickness ${o}`);
        q.value.push(ne(
          s.l,
          s.w,
          o,
          l.price,
          n == null ? void 0 : n.attributes
        )), L($.value);
      }
    }, Ce = async (e) => {
      ke(), console.log("result"), y(["result event received", e]);
      const n = await E(e);
      if (!n.success) {
        console.error(n.error);
        return;
      }
      await et(e);
    }, et = async (e) => {
      const o = At(v, e, X.value, Me).split(",")[1], l = new vt();
      l.file("order-summary.pdf", o);
      const m = await l.generateAsync({ type: "blob" }), i = new File([m], "order-summary.zip", { type: "application/zip" });
      if (!de("smartcut-order-summary")) return;
      const h = f["smartcut-order-summary"].closest("form");
      if (!h) return;
      const w = new DataTransfer();
      w.items.add(i);
      const P = h.querySelector('[name="smartcut_order_summary"]');
      P instanceof HTMLInputElement && (P.files = w.files);
    }, tt = (e, n) => {
      D(), X.value = Ie(e), ie("smartcut-hardware-price", n);
    };
    return je(() => {
      console.log("💥 Powered by https://smartcut.dev", window.smartcutConfig.version), y(["Launching WordPress checkout..."]), p.banding = k(window, ["smartcutConfig", "banding_data"]), p.finish = k(window, ["smartcutConfig", "finish_data"]), z = k(window, ["smartcutConfig", "machining_pricing"]), x = k(window, ["smartcutConfig", "variations"]), Ve(), Xe(), Be(window.smartcutConfig), Re(window.smartcutConfig), De(), Ue(), [
        "div.quantity > input.plus",
        "div.quantity > input.minus",
        "div.quantity .qty-plus",
        "div.quantity .qty-minus"
      ].forEach((o) => {
        const l = document.querySelector(o);
        l && (l.style.display = "none");
      });
      const n = new CustomEvent("smartcut/ready");
      window.dispatchEvent(n), y(["Wordpress checkout ready"]);
    }), (e, n) => (A(), ce(qe, null, [
      ee(u) === "development" && Bt ? (A(), ce("div", Dt, [
        n[0] || (n[0] = rt("div", null, "WP - developer information", -1)),
        it(ee(d), {
          data: [ee(s)],
          paths: ["product"]
        }, null, 8, ["data"])
      ])) : G("", !0),
      I.value === "formula" && R.value ? (A(), te(ee(O), {
        key: 1,
        ref: "formulapricing",
        "format-price": ae,
        url: R.value,
        debug: H.value,
        onHardwareResult: tt,
        onPanelResult: D
      }, null, 8, ["url", "debug"])) : G("", !0),
      I.value === "manual" || I.value === "formula" && R.value ? (A(), te(Le, {
        key: 2,
        ref_key: "calculator",
        ref: F,
        readonly: I.value === "formula",
        debug: H.value,
        stock: q.value,
        "find-extras-price": pe,
        "format-price": ae,
        onLog: y,
        onError: g,
        onInputsChanged: D,
        onValidationError: $e,
        onResult: Ce
      }, null, 8, ["readonly", "debug", "stock"])) : G("", !0)
    ], 64));
  }
}), Vt = /* @__PURE__ */ ye({
  __name: "Vanilla",
  setup(c, { expose: v }) {
    const O = _e(() => import("./components-BNP5xiAl.js").then((r) => r.F)), d = S(!1), u = S([]), a = S({
      banding: null,
      finish: null,
      machining: null
    }), f = S("USD"), E = S("en-US"), j = S("manual"), t = S(""), p = ot(null), s = S(null), x = S();
    Te("calculator", () => x.value);
    const z = (r) => {
      d.value && console.log("SmartCut -", ...r);
    }, b = (r) => {
      console.error(`SmartCut - ${r}`);
    }, H = () => {
      const r = new CustomEvent("smartcut/validationError");
      window.dispatchEvent(r);
    }, I = () => {
      const r = new CustomEvent("smartcut/calculating");
      window.dispatchEvent(r);
    }, R = (r) => {
      s.value = r;
    }, q = (r = 0, F = E.value) => {
      if (r === !0) return "";
      try {
        F = F.replace("_", "-");
        const y = Number(r);
        return !y && y !== 0 ? "" : isNaN(y) ? (console.error("formatPrice - invalid price:", r), "") : y.toLocaleString(F, {
          style: "currency",
          currency: f.value
        });
      } catch (y) {
        return console.error("Error formatting price:", y), "";
      }
    }, U = (r, F) => {
      var L;
      if (!((L = a.value) != null && L[r])) return null;
      const y = F.join("|"), g = k(a.value, [r, y]);
      return typeof g == "number" ? g : parseFloat(g);
    }, $ = (r) => {
      gt(r), u.value = r.stock, a.value.banding = k(r, ["banding", "pricing"]), a.value.finish = k(r, ["finish", "pricing"]), a.value.machining = k(r, ["machining", "pricing"]), B(r, ["options", "currency"]) && (f.value = k(r, ["options", "currency"])), B(r, ["options", "locale"]) && (E.value = k(r, ["options", "locale"]).replace("_", "-")), console.log(r), (B(r, ["options", "formula", "url"]) || B(r, ["options", "formula", "spec"])) && (j.value = "formula", t.value = k(r, ["options", "formula", "url"]) ?? null, p.value = k(r, ["options", "formula", "spec"]) ?? null), Oe(() => {
        x.value && x.value.init(r);
      });
    }, X = (r) => {
      var g, L, V;
      const F = r;
      if (F.checkout = {
        formattedTotalStockCost: "",
        formattedBandingCost: {},
        formattedFinishCost: {}
      }, (g = r == null ? void 0 : r.metadata) != null && g.totalStockCost && (F.checkout.formattedTotalStockCost = r.metadata.totalStockCost.toLocaleString(
        E.value,
        {
          style: "currency",
          currency: f.value
        }
      )), (L = r == null ? void 0 : r.metadata) != null && L.bandingLengthByType)
        for (const [T, M] of Object.entries(r.metadata.bandingLengthByType)) {
          if (!B(a.value, ["banding", T])) {
            b(`Banding price ${T} not found`);
            continue;
          }
          F.checkout.formattedBandingCost[T] = (M / 1e3 * a.value.banding[T]).toLocaleString(E.value, { style: "currency", currency: f.value });
        }
      if ((V = r == null ? void 0 : r.metadata) != null && V.finishAreaByType)
        for (const [T, M] of Object.entries(r.metadata.finishAreaByType)) {
          if (!B(a.value, ["finish", T])) {
            b(`Finish price ${T} not found`);
            continue;
          }
          F.checkout.formattedFinishCost[T] = (M / 1e6 * a.value.finish[T]).toLocaleString(E.value, { style: "currency", currency: f.value });
        }
      const y = new CustomEvent("smartcut/result", {
        detail: JSON.parse(JSON.stringify(F))
      });
      window.dispatchEvent(y);
    };
    return st(() => {
      console.log("💥 Powered by https://smartcut.dev");
      const r = new URLSearchParams(window.location.search);
      d.value = !!r.has("debug"), d.value && console.log("Smartcut - debug enabled");
    }), je(() => {
      window.smartcutCheckout = { init: $ };
      const r = new CustomEvent("smartcut/ready");
      window.dispatchEvent(r);
    }), v({
      init: $,
      debug: d,
      stock: u,
      pricing: a,
      currency: f,
      locale: E,
      inputType: j,
      formulaURL: t,
      formulaSpec: p,
      hardWareResult: s,
      log: z,
      error: b,
      calculating: I,
      result: X,
      formatPrice: q,
      findExtrasPrice: U,
      setHardwareResult: R
    }), (r, F) => (A(), ce(qe, null, [
      j.value === "formula" && (t.value || p.value) ? (A(), te(ee(O), {
        key: 0,
        ref: "formulapricing",
        "format-price": q,
        url: t.value,
        spec: p.value,
        debug: d.value,
        onHardwareResult: R
      }, null, 8, ["url", "spec", "debug"])) : G("", !0),
      j.value === "manual" || j.value === "formula" && (t.value || p.value) ? (A(), te(Le, {
        key: 1,
        ref_key: "calculator",
        ref: x,
        readonly: j.value === "formula",
        debug: d.value,
        stock: u.value,
        "find-extras-price": U,
        "format-price": q,
        onLog: z,
        onError: b,
        onCalculating: I,
        onValidationError: H,
        onResult: X
      }, null, 8, ["readonly", "debug", "stock"])) : G("", !0)
    ], 64));
  }
}), Ht = {
  key: 1,
  class: "error-message"
}, Ut = /* @__PURE__ */ ye({
  __name: "Launch",
  props: {
    type: { default: "vanilla" }
  },
  setup(c, { expose: v }) {
    const O = S(!1), d = S(null), u = Ie({
      wordpress: Rt,
      vanilla: Vt
    }), a = c, f = Pe(() => {
      if (!a.type) return null;
      const E = a.type.toLowerCase();
      return u[E] || null;
    });
    return v({
      componentType: Pe(() => a.type),
      isComponentMounted: O,
      checkout: d
    }), (E, j) => f.value ? (A(), te(lt(f.value), {
      key: 0,
      ref_key: "checkout",
      ref: d
    }, null, 512)) : a.type ? (A(), ce("div", Ht, " Invalid component type: " + ct(a.type), 1)) : G("", !0);
  }
}), Mt = /* @__PURE__ */ bt(Ut, [["__scopeId", "data-v-6a8b80ee"]]);
wt.add(
  kt,
  St,
  xt,
  Ft,
  Pt,
  Et,
  zt,
  Tt,
  jt,
  qt,
  Ot
);
let le = null, me = !1;
const Yt = async () => {
  if (!me) {
    me = !0;
    try {
      const c = document.querySelector("#smartcut-app");
      if (!c) {
        console.warn("No #smartcut-app element found");
        return;
      }
      const v = c.getAttribute("data-type") || "";
      le = ut(Mt, { type: v }), le.use(pt, { i18next: he }), le.component("FontAwesomeIcon", dt), le.mount("#smartcut-app");
    } catch (c) {
      console.error("Mount error:", c);
    } finally {
      me = !1;
    }
  }
};
Yt();
export {
  le as app,
  Yt as mount
};

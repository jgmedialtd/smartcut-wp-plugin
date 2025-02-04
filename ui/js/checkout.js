import { d as ke, y as st, g as v, U as Ie, j as $e, o as B, c as de, A as ve, u as M, b as lt, f as Z, q as ie, F as Le, k as De, O as Ae, C as re, G as ct, V as ut, h as je, W as pt, t as dt, X as ft, Y as mt, Z as _t } from "./vendor-vue-CrziaopC.js";
import { i as we, B as ht } from "./vendor-i18n-D9hV6ZJH.js";
import { q as yt, d as _, v as gt, w as qe, x as Oe, y as x, C as Be, z as R, A as bt, B as vt, D as wt, E as kt, _ as St } from "./components-CTV3Io7H.js";
import { J as xt, H as Ft, I as Pt, K as Et, L as zt, M as Tt, N as jt, O as qt, Q as Ot, S as It, T as $t, U as Lt, V as Dt } from "./vendor-CtQQhE4g.js";
import { E as At, a as W } from "./vendor-pdf-BmcHVhVw.js";
import { f as Bt } from "./composables-B6Dg3t6c.js";
const Vt = Rt();
async function Rt() {
  const l = {
    main: import("./main-CMlXbzPm.js").then((c) => c.resources),
    errors: import("./errors-DqT4G1Wk.js").then((c) => c.resources)
  }, [g, O] = await Promise.all([
    l.main,
    l.errors
  ]), h = Object.keys(g), u = h.reduce((c, d) => ({
    ...c,
    [d]: {
      main: g[d],
      errors: O[d]
    }
  }), {});
  return gt(we), we.use(ht).init({
    debug: !1,
    // lng: 'fr',
    fallbackLng: "en",
    ns: ["main", "errors"],
    defaultNS: "errors",
    resources: u,
    load: "languageOnly",
    supportedLngs: h,
    interpolation: {
      format: function(c, d) {
        return d === "capitalise" ? yt(c) : d === "sentenceCase" ? _(c) : c;
      }
    }
  });
}
const K = 5, ae = 10, ue = ",", J = {
  fillColor: [7, 59, 76],
  fontStyle: "normal"
}, C = {
  fontSize: 9
}, G = { left: 10 };
let X = [];
const Ht = (l, g, O, h = (u) => u.toString()) => {
  var F;
  const u = new At({ orientation: "landscape" });
  let c = 10;
  u.setFontSize(20), u.text(_(l("pdf.order_summary")), 10, c), c += 15, u.setFontSize(14), u.text(l("description_item_plural", { a: "Your", i: "part" }), 10, c), c += K, X = [
    _(l("length")),
    _(l("width")),
    _(l("thickness")),
    _(l("material")),
    _(l("quantity")),
    _(l("name")),
    `Banding (${qe.join(ue)})`,
    `Finish (${Oe.join(ue)})`
  ];
  const d = g.parts.map((p) => {
    var s;
    const t = qe.map((S) => p.banding[S] || "-").join(ue), k = Oe.map((S) => p.banding[S] || "-").join(ue);
    return [
      h(p.l),
      h(p.w),
      h(p.t) || "-",
      ((s = p == null ? void 0 : p.material) == null ? void 0 : s.toUpperCase()) || "-",
      h(p.q),
      p.name || "-",
      t,
      k
    ];
  });
  W(u, {
    startY: c,
    head: [X],
    body: d,
    margin: G,
    headStyles: J,
    styles: C
  }), c = u.autoTable.previous.finalY + ae, u.setFontSize(14), u.text(_(l("pdf.stock_requirements")), 10, c), c += K, X = [
    _(l("length")),
    _(l("width")),
    _(l("thickness")),
    _(l("material")),
    _(l("quantity"))
    // 'Cost'
  ];
  const w = g.stock.map((p) => {
    var t;
    return [
      h(p.l),
      h(p.w),
      h(p.t) || "-",
      ((t = p == null ? void 0 : p.material) == null ? void 0 : t.toUpperCase()) || "-",
      h(p.q)
      // stock.cost
    ];
  });
  if (W(u, {
    startY: c,
    head: [X],
    body: w,
    margin: G,
    headStyles: J,
    styles: C
  }), c = u.autoTable.previous.finalY + ae, g.metadata.totalRollLength > 0) {
    u.setFontSize(14), u.text(_(l("pdf.roll_requirements")), 10, c), c += K, X = [
      l("name"),
      l("material"),
      l("length")
    ];
    const p = g.stock.map((t) => {
      var k, s;
      return [
        ((k = t == null ? void 0 : t.name) == null ? void 0 : k.toUpperCase()) || "-",
        ((s = t == null ? void 0 : t.material) == null ? void 0 : s.toUpperCase()) || "-",
        h(t.analysis.rollLength)
      ];
    });
    W(u, {
      startY: c,
      head: [X],
      body: p,
      margin: G,
      headStyles: J,
      styles: C
    }), c = u.autoTable.previous.finalY + ae;
  }
  if (O && Object.values(O)) {
    u.setFontSize(14), u.text("Hardware", 10, c), c += K;
    const p = Object.values(O).map((t) => [
      t.name.toUpperCase(),
      h(t.q)
      // item.totalCost.toFixed( 2 )
    ]);
    W(u, {
      startY: c,
      head: [[_(l("pdf.item")), _(l("quantity"))]],
      body: p,
      margin: G,
      headStyles: J,
      styles: C
    }), c = u.autoTable.previous.finalY + ae;
  }
  u.setFontSize(14), u.text(_(l("pdf.totals")), 10, c), c += K;
  const D = [
    [_(l("pdf.total_parts")), h(g.metadata.totalPartsProduced)],
    [_(l("pdf.part_area")), h(g.metadata.totalPartArea)],
    [_(l("pdf.total_stock_required")), h(g.metadata.totalUsedStock)],
    [_(l("pdf.total_banding_length")), h(g.metadata.totalBandingLength)],
    [_(l("pdf.total_finish_area")), h(g.metadata.totalFinishArea)],
    [_(l("pdf.total_roll_length")), h(g.metadata.totalRollLength)]
  ];
  if (W(u, {
    startY: c,
    body: D,
    margin: G,
    headStyles: J,
    styles: C
  }), c = u.autoTable.previous.finalY + ae, (F = window == null ? void 0 : window.smartcutImages) != null && F.length) {
    u.addPage();
    let p = 10;
    u.setFontSize(14), u.text(_(l("pdf.images")), 10, p), p += K;
    const t = window.smartcutImages.flatMap((k, s) => k.metadata.map((S) => [
      s + 1,
      S.newName
    ]));
    W(u, {
      startY: p,
      body: t,
      head: [[_(l("pdf.part_index")), _(l("pdf.file_name"))]],
      margin: G,
      headStyles: J,
      styles: C
    });
  }
  return u.output("datauristring");
}, Ut = {
  key: 0,
  class: "debug"
}, Mt = !1, Yt = /* @__PURE__ */ ke({
  __name: "WordPress",
  setup(l) {
    const { t: g } = st(["main", "errors"]), O = re(() => import("./components-CTV3Io7H.js").then((e) => e.F)), h = re(() => import("./components-CTV3Io7H.js").then((e) => e.O)), u = re(() => import("./components-CTV3Io7H.js").then((e) => e.N)), c = "production", d = {}, w = {}, D = v(null);
    let F, p, t;
    const k = {
      banding: null,
      finish: null
    };
    let s = null, S = [], Y = null, P = {};
    const H = v(!1), T = v("manual"), Q = v(""), I = v([]), N = v(null), L = v(!0), ee = v(null), V = v(!1), U = v(null);
    Ie("calculator", () => U.value);
    const a = (e) => {
      H.value && console.log("SmartCut -", ...e);
    }, f = (e) => {
      console.error(`SmartCut - ${e}`);
    }, E = (e = !0) => {
      V.value = !0, ["checkout", "intro_text", "offcuts", "banding_key"].forEach((i) => ne(i, "block")), Ze() && ne("pricing_table", "table"), e ? A(!0) : te(), q();
    }, $ = (e = !0, n = !0) => {
      V.value = !1, ["checkout", "intro_text", "offcuts", "banding_key", "pricing_table"].forEach((o) => ne(o, "none")), n === !0 ? j() : n === !1 && q(), A();
    }, A = (e = !1) => {
      ne("quantity", "inline-block"), d.quantity.readOnly = e;
    }, te = () => {
      V.value !== !1 && (fe(1), ne("quantity", "none"), d.quantity.readOnly = !0);
    }, j = () => {
      if (!d.cart_button) {
        f("Cart button not found");
        return;
      }
      d.cart_button.disabled = !1;
    }, q = () => {
      if (V.value !== !1) {
        if (!d.cart_button) {
          f("Cart button not found");
          return;
        }
        d.cart_button.disabled = !0;
      }
    }, Ve = () => {
      f("Validation error"), q();
    }, fe = (e, n = 0) => {
      if (a(["setting cart quantity", e]), !d.quantity) {
        f("Quantity field not found when trying to set");
        return;
      }
      d.quantity.value = e.toFixed(n), console.assert(d.quantity.value === e.toFixed(n), "Quantity field value not set correctly");
    }, Re = (e) => {
      a(["setting variation price", e]);
      const n = document.querySelector(".woocommerce-variation-price .smartcut-price-selector");
      n && (n.innerText = se(e)), D.value = e;
    }, He = () => {
      var n;
      const e = D.value ?? ((n = N.value) == null ? void 0 : n.display_price) ?? 0;
      return typeof e == "string" ? parseFloat(e) : e;
    }, Ue = () => {
      if (!(window != null && window.smartcutConfig)) {
        f("SmartCut config not found");
        return;
      }
      const e = window.smartcutConfig;
      t = e.settings;
      const n = Fe(x(window, ["smartcutConfig", "banding_data"])), i = Fe(x(window, ["smartcutConfig", "finish_data"])), o = {
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
      H.value = o.debug;
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
          diameters: t.machining_holes_diameters.split(",").map((z) => z.trim()).filter(Boolean),
          minDiameter: t.machining_holes_min_diameter,
          maxDiameter: t.machining_holes_max_diameter,
          enableDepth: t.machining_holes_depth,
          depths: t.machining_holes_depths.split(",").map((z) => z.trim()).filter(Boolean),
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
      L.value = Ee(), L.value ? A(!0) : te(), s.type === "variable" ? $(!1, !1) : E(L.value);
      const r = {
        type: s.type,
        stock: I.value,
        variations: S ?? null,
        options: o,
        banding: n,
        finish: i,
        machining: m
      };
      r.type === "variable" && (a(["setting variable product form listeners"]), jQuery(function(z) {
        z(".variations_form").on("reset_data", () => $(!1, !1)).on("found_variation", (ce, ot) => nt(ce, ot));
      }));
      const y = {
        product: s,
        selectedVariation: N,
        inputs: w,
        elements: d,
        inputType: T,
        formatPrice: se,
        getCurrentVariationPrice: He,
        setInputValue: _e,
        setCartQuantity: fe,
        setVariationPrice: Re,
        isExtraEnabled: ye,
        isQuantityPricing: Ee,
        isMachiningEnabled: ze,
        isSurchargeEnabled: Te,
        getTotalBandingPrice: Ce,
        getTotalFinishPrice: Je,
        getTotalMachiningPrice: Ge,
        getInputValue: Xe,
        enableAddToCart: j,
        log: a,
        error: f
      }, b = Bt({
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
      }, y);
      F = b.calculatePrice, p = b.resetPricing, De(() => {
        U.value && U.value.init(r);
      });
    }, Me = (e) => {
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
      }, s.multiple_sizes || (s.l || f("product 'length' attribute not available"), s.w || f("product 'width' attribute not available"));
    }, Ye = (e) => {
      T.value = x(window, ["smartcutConfig", "settings", "enable_formula"]) === !0 ? "formula" : "manual", Q.value = x(window, ["smartcutConfig", "settings", "formula_url"]), a([`Input type: ${T.value}`]), a([`Input type: ${T.value}`]), P = {
        thousands_separator: e == null ? void 0 : e.thousands_separator,
        decimal_separator: e == null ? void 0 : e.decimal_separator,
        number_of_decimals: e == null ? void 0 : e.number_of_decimals,
        currency_symbol: e == null ? void 0 : e.currency_symbol,
        currency_position: e == null ? void 0 : e.currency_position
      };
    }, Qe = () => {
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
      for (const [n, i] of Object.entries(e))
        d[n] = document.querySelector(i);
      if (!d.checkout)
        return f("checkout iframe not found");
      if (!d.quantity)
        return f("quantity field not found");
      if (!d.cart_button)
        return f("cart button not found");
      d.quantity.readOnly = !0, q();
    }, Ne = () => ({
      x1: t.stock_trim_x1 ?? 0,
      x2: t.stock_trim_x2 ?? 0,
      y1: t.stock_type === "linear" ? 0 : t.stock_trim_y1 ?? 0,
      y2: t.stock_type === "linear" ? 0 : t.stock_trim_y2 ?? 0
    }), oe = (e = null, n = null, i = null, o = null, m = null) => {
      let r;
      if (m && typeof m == "object") {
        r = [];
        for (const [b, z] of Object.entries(m))
          b !== "attribute_size" && b !== "attribute_thickness" && r.push(`${b.replace("attribute_", "")}: ${z}`);
        r = r.join(" - ");
      }
      return {
        name: s.stock_name,
        l: e,
        w: n,
        t: i,
        grain: t.stock_grain,
        cost: parseFloat((o == null ? void 0 : o.toString()) || "0"),
        trim: Ne(),
        allowExactFitShapes: !0,
        notes: r
      };
    }, We = () => {
      if (s != null && s.stock_name || f("product name not specified"), I.value = [], s.multiple_sizes)
        for (const e of s.size) {
          if (!ge(e)) continue;
          const [n, i] = e.split("x"), o = oe(
            parseFloat(n),
            parseFloat(i),
            s == null ? void 0 : s.t,
            s.price
          );
          I.value.push(o);
        }
      else
        I.value.push(oe(
          s.l,
          s.w,
          s == null ? void 0 : s.t,
          s == null ? void 0 : s.price
        ));
    }, Se = (e, n) => {
      const i = e.split(".");
      return i[0] = i[0].replace(/\B(?=(\d{3})+(?!\d))/g, n), i.join(".");
    }, se = (e = 0, n = "") => {
      if (!e)
        return n ? xe("0.00") : "0.00";
      typeof e == "string" && (e = parseFloat(e));
      const i = e.toFixed(P.number_of_decimals).replace(".", P.decimal_separator), o = Se(i, P.thousands_separator);
      return n ? xe(o) : o;
    }, Ke = (e) => {
      if (e == null) return "";
      typeof e == "string" && (e = parseFloat(e));
      const i = e % 1 !== 0 ? P.number_of_decimals : 0, o = e.toFixed(i).replace(".", P.decimal_separator);
      return Se(o, P.thousands_separator);
    }, xe = (e) => {
      switch (P.currency_position) {
        case "left":
          return `${P.currency_symbol}${e}`;
        case "right":
          return `${e}${P.currency_symbol}`;
        default:
          return `${P.currency_symbol}${e}`;
      }
    }, le = (e) => {
      const n = (i) => vt(wt(i), 100).replace("|", "_");
      return Array.isArray(e) ? e.map(n).join(",") : n(e);
    }, Fe = (e) => {
      if (!e) return null;
      const n = {
        labels: [],
        pricing: {}
      }, i = Object.values(e);
      for (const o of i)
        o != null && o.variations ? (n.labels.push(...Object.keys(o.options)), Object.values(o.variations).forEach((m) => {
          const { options: r } = m, y = Object.values(r).map((b) => le(b)).join("|");
          n.pricing[y] = parseInt(m.price);
        })) : o != null && o.options && Object.keys(o.options).forEach((m) => {
          n.pricing[le(m)] = parseInt(o.price);
        });
      return n.labels.length || n.labels.push("type"), n;
    }, me = (e, n) => {
      if (!n.length || !R(k, [e])) return null;
      const i = x(k, [e]);
      if (!bt(i)) return null;
      const m = Object.values(i).map((r) => r != null && r.variations ? Object.values(r.variations).map((y) => (y.type = "variable", y)) : (r.type = "simple", r)).flat().find((r) => {
        let y;
        return r.type === "simple" ? y = Object.keys(r.options) : y = Object.values(r.options), y ? y.every((b, z) => le(b) === le(n[z])) : !1;
      });
      return m != null && m.price ? parseFloat(m.price) : null;
    }, Je = (e) => {
      let n = 0;
      if (typeof e == "object") {
        for (let [i, o] of Object.entries(e)) {
          typeof o == "string" && (o = parseFloat(o));
          const m = i.split("|"), r = me("finish", m);
          if (r === null) continue;
          const b = Number(o) / 1e6 * parseFloat(r.toString());
          n += b;
        }
        if ("min_finish_charge" in t) {
          const i = parseFloat(t == null ? void 0 : t.min_finish_charge);
          if (i > 0 && n > 0 && n < i)
            return i;
        }
      }
      return n;
    }, Ce = (e) => {
      let n = 0;
      if (typeof e == "object") {
        for (let [i, o] of Object.entries(e)) {
          typeof o == "string" && (o = parseFloat(o));
          const m = i.split("|"), r = me("banding", m);
          if (r === null) continue;
          const y = o / (t.unit_system === "imperial" ? 12 : 1e3) * parseFloat(r.toString());
          n += y;
        }
        if ("min_banding_charge" in t) {
          const i = parseFloat(t == null ? void 0 : t.min_banding_charge);
          if (i > 0 && n > 0 && n < i)
            return i;
        }
      }
      return n;
    }, Ge = (e) => (Y.holes ?? 0) * (e.metadata.numHoles ?? 0) + (Y.corners ?? 0) * (e.metadata.numCorners ?? 0), ne = (e, n) => {
      var i;
      e in d && ((i = d[e]) != null && i.style) && (d[e].style.display = n);
    }, _e = (e, n) => {
      he(e) ? w[e].value = n : f(`Attempting to set input but key '${e}' does not exist`);
    }, Xe = (e) => {
      if (he(e))
        return w[e].value;
      f(`Attempting to get input but key '${e}' does not exist`);
    }, he = (e) => e in w && w[e] instanceof HTMLInputElement, Pe = () => {
      fe(1), q(), p();
      for (const e in w)
        e !== "smartcut-hardware-price" && _e(e, null);
    }, Ee = () => {
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
    }, ye = (e) => {
      if (R(t, ["enable", e]) && x(t, ["enable", e]) === !1)
        return !1;
      const n = x(k, [e]);
      return !!(n && Object.values(n).length);
    }, ze = () => t.enable_machining === !0, Te = () => !((t == null ? void 0 : t.surcharge_type) === "none" || !(t != null && t.surcharge) || t.surcharge === "0.00"), Ze = () => !!(t.pricing_strategy === "full_stock_plus_cut_length" || t.pricing_strategy === "full_stock_plus_num_parts" || t.pricing_strategy === "part_area" || t.pricing_strategy === "roll_length" || Te() || ye("banding") || ye("finish") || ze()), et = (e) => {
      var i;
      let n = (i = e == null ? void 0 : e.attributes) == null ? void 0 : i.attribute_size;
      return n || (n = s == null ? void 0 : s.size), n;
    }, ge = (e) => /\d+x\d+/.test(e), tt = () => {
      window.smartcutConfig.input_fields.forEach((e) => {
        const n = e.replaceAll("_", "-");
        w[n] = document.getElementById(n);
      });
    }, nt = (e, n) => {
      Pe(), N.value = n, a(["variation selected", n.attributes]), I.value = [];
      const i = x(n, ["attributes", "attribute_thickness"]);
      if (s.selected_thickness = i, s.multiple_sizes) {
        const o = et(n);
        if (a([`variation found with size: ${o} & thickness: ${i}`]), !o)
          return $(!1), f("The size of this multiple size product could not be found");
        if (Array.isArray(o) ? E(L.value) : ge(o) ? $(!0, !0) : E(L.value), S != null && S.length && i) {
          let m;
          Array.isArray(o) ? m = o.map((r) => ({
            size: r,
            l: r.split("x")[0],
            w: r.split("x")[1],
            t: i,
            price: n.display_price
          })) : m = S.filter((r) => {
            var y, b;
            return ge((y = r == null ? void 0 : r.attributes) == null ? void 0 : y.size) ? i === ((b = r == null ? void 0 : r.attributes) == null ? void 0 : b.thickness) : !1;
          }).map((r) => {
            var y, b, z, ce;
            return a([
              `size attribute: '${(y = r == null ? void 0 : r.attributes) == null ? void 0 : y.size}'`,
              `price for 'thickness ${i}, size: ${o}' is ${n.display_price}`
            ]), {
              size: (b = r == null ? void 0 : r.attributes) == null ? void 0 : b.size,
              l: (z = r == null ? void 0 : r.attributes) == null ? void 0 : z.size.split("x")[0],
              w: (ce = r == null ? void 0 : r.attributes) == null ? void 0 : ce.size.split("x")[1],
              t: s.selected_thickness,
              price: n.display_price
            };
          }), V.value === !0 && m.forEach((r) => {
            const y = oe(
              r.l,
              r.w,
              r.t,
              r.price,
              n == null ? void 0 : n.attributes
            );
            I.value.push(y);
          });
        }
      } else {
        const o = S.find((m) => m.attributes.thickness === i);
        if (!o) return f(`variation not found for thickness ${i}`);
        I.value.push(oe(
          s.l,
          s.w,
          i,
          o.price,
          n == null ? void 0 : n.attributes
        )), E(L.value);
      }
    }, at = async (e) => {
      Pe(), a(["result event received", e]);
      const n = await F(e);
      if (!n.success) {
        console.error(n.error);
        return;
      }
      await rt(e);
    }, rt = async (e) => {
      const i = Ht(g, e, ee.value, Ke).split(",")[1], o = new xt();
      o.file("order-summary.pdf", i);
      const m = await o.generateAsync({ type: "blob" }), r = new File([m], "order-summary.zip", { type: "application/zip" });
      if (!he("smartcut-order-summary")) return;
      const y = w["smartcut-order-summary"].closest("form");
      if (!y) return;
      const b = new DataTransfer();
      b.items.add(r);
      const z = y.querySelector('[name="smartcut_order_summary"]');
      z instanceof HTMLInputElement && (z.files = b.files);
    }, it = (e, n) => {
      q(), e && (ee.value = Ae(e)), _e("smartcut-hardware-price", n ?? 0);
    };
    return $e(() => {
      console.log("💥 Powered by https://smartcut.dev", window.smartcutConfig.version), a(["Launching WordPress checkout..."]), k.banding = x(window, ["smartcutConfig", "banding_data"]), k.finish = x(window, ["smartcutConfig", "finish_data"]), Y = x(window, ["smartcutConfig", "machining_pricing"]), S = x(window, ["smartcutConfig", "variations"]), Qe(), tt(), Me(window.smartcutConfig), Ye(window.smartcutConfig), Ue(), We(), [
        "div.quantity > input.plus",
        "div.quantity > input.minus",
        "div.quantity .qty-plus",
        "div.quantity .qty-minus"
      ].forEach((i) => {
        const o = document.querySelector(i);
        o && (o.style.display = "none");
      });
      const n = new CustomEvent("smartcut/ready");
      window.dispatchEvent(n), a(["Wordpress checkout ready"]);
    }), (e, n) => (B(), de(Le, null, [
      ve(M(u), { position: "top-left" }),
      M(c) === "development" && Mt ? (B(), de("div", Ut, [
        n[0] || (n[0] = lt("div", null, "WP - developer information", -1)),
        ve(M(h), {
          data: [M(S)],
          paths: ["variations"]
        }, null, 8, ["data"])
      ])) : Z("", !0),
      T.value === "formula" && Q.value ? (B(), ie(M(O), {
        key: 1,
        ref: "formulapricing",
        "format-price": se,
        url: Q.value,
        debug: H.value,
        onHardwareResult: it,
        onPanelResult: q
      }, null, 8, ["url", "debug"])) : Z("", !0),
      T.value === "manual" || T.value === "formula" && Q.value ? (B(), ie(Be, {
        key: 2,
        ref_key: "calculator",
        ref: U,
        readonly: T.value === "formula",
        debug: H.value,
        stock: I.value,
        "find-extras-price": me,
        "format-price": se,
        "input-type": T.value,
        onLog: a,
        onError: f,
        onInputsChanged: q,
        onValidationError: Ve,
        onResult: at
      }, null, 8, ["readonly", "debug", "stock", "input-type"])) : Z("", !0)
    ], 64));
  }
}), Qt = /* @__PURE__ */ ke({
  __name: "Vanilla",
  emits: ["ready"],
  setup(l, { expose: g, emit: O }) {
    const h = re(() => import("./components-CTV3Io7H.js").then((a) => a.F)), u = re(() => import("./components-CTV3Io7H.js").then((a) => a.N)), c = O, d = "", w = v(!1), D = v([]), F = v({
      banding: null,
      finish: null,
      machining: null
    }), p = v("USD"), t = v("en-US"), k = v("manual"), s = v(""), S = ct(null), Y = v(null), P = v();
    Ie("calculator", () => P.value);
    const H = (a) => {
      w.value && console.log("SmartCut -", ...a);
    }, T = (a) => {
      console.error(`SmartCut - ${a}`);
    }, Q = () => {
      const a = new CustomEvent("smartcut/validationError");
      window.dispatchEvent(a);
    }, I = () => {
      const a = new CustomEvent("smartcut/calculating");
      window.dispatchEvent(a);
    }, N = (a) => {
      Y.value = a;
    }, L = (a = 0, f = t.value) => {
      if (a === !0) return "";
      try {
        f = f.replace("_", "-");
        const E = Number(a);
        return !E && E !== 0 ? "" : isNaN(E) ? (console.error("formatPrice - invalid price:", a), "") : E.toLocaleString(f, {
          style: "currency",
          currency: p.value
        });
      } catch (E) {
        return console.error("Error formatting price:", E), "";
      }
    }, ee = (a, f) => {
      var A;
      if (!((A = F.value) != null && A[a])) return null;
      const E = f.join("|"), $ = x(F.value, [a, E]);
      return typeof $ == "number" ? $ : parseFloat($);
    }, V = (a) => {
      kt(a), D.value = a.stock, F.value.banding = x(a, ["banding", "pricing"]), F.value.finish = x(a, ["finish", "pricing"]), F.value.machining = x(a, ["machining", "pricing"]), R(a, ["options", "currency"]) && (p.value = x(a, ["options", "currency"])), R(a, ["options", "locale"]) && (t.value = x(a, ["options", "locale"]).replace("_", "-")), (R(a, ["options", "formula", "url"]) || R(a, ["options", "formula", "spec"])) && (k.value = "formula", s.value = x(a, ["options", "formula", "url"]) ?? null, S.value = x(a, ["options", "formula", "spec"]) ?? null), De(() => {
        P.value && P.value.init(a);
      });
    }, U = (a) => {
      var $, A, te;
      const f = a;
      if (f.checkout = {
        formattedTotalStockCost: "",
        formattedBandingCost: {},
        formattedFinishCost: {}
      }, ($ = a == null ? void 0 : a.metadata) != null && $.totalStockCost && (f.checkout.formattedTotalStockCost = a.metadata.totalStockCost.toLocaleString(
        t.value,
        {
          style: "currency",
          currency: p.value
        }
      )), (A = a == null ? void 0 : a.metadata) != null && A.bandingLengthByType)
        for (const [j, q] of Object.entries(a.metadata.bandingLengthByType)) {
          if (!R(F.value, ["banding", j])) {
            T(`Banding price ${j} not found`);
            continue;
          }
          f.checkout.formattedBandingCost[j] = (q / 1e3 * F.value.banding[j]).toLocaleString(t.value, { style: "currency", currency: p.value });
        }
      if ((te = a == null ? void 0 : a.metadata) != null && te.finishAreaByType)
        for (const [j, q] of Object.entries(a.metadata.finishAreaByType)) {
          if (!R(F.value, ["finish", j])) {
            T(`Finish price ${j} not found`);
            continue;
          }
          f.checkout.formattedFinishCost[j] = (q / 1e6 * F.value.finish[j]).toLocaleString(t.value, { style: "currency", currency: p.value });
        }
      const E = new CustomEvent("smartcut/result", {
        detail: JSON.parse(JSON.stringify(f))
      });
      window.dispatchEvent(E);
    };
    return ut(() => {
      console.log(`💥 Powered by https://smartcut.dev V${d}`);
      const a = new URLSearchParams(window.location.search);
      w.value = !!a.has("debug"), w.value && console.log("Smartcut - debug enabled");
    }), $e(() => {
      window.smartcutCheckout = { init: V }, c("ready");
      const a = new CustomEvent("smartcut/ready");
      window.dispatchEvent(a);
    }), g({
      init: V,
      debug: w,
      stock: D,
      pricing: F,
      currency: p,
      locale: t,
      inputType: k,
      formulaURL: s,
      formulaSpec: S,
      hardWareResult: Y,
      log: H,
      error: T,
      calculating: I,
      result: U,
      formatPrice: L,
      findExtrasPrice: ee,
      setHardwareResult: N
    }), (a, f) => (B(), de(Le, null, [
      ve(M(u), { position: "top-left" }),
      k.value === "formula" && (s.value || S.value) ? (B(), ie(M(h), {
        key: 0,
        ref: "formulapricing",
        "format-price": L,
        url: s.value,
        spec: S.value,
        debug: w.value,
        onHardwareResult: N
      }, null, 8, ["url", "spec", "debug"])) : Z("", !0),
      k.value === "manual" || k.value === "formula" && (s.value || S.value) ? (B(), ie(Be, {
        key: 1,
        ref_key: "calculator",
        ref: P,
        readonly: k.value === "formula",
        debug: w.value,
        stock: D.value,
        "input-type": k.value,
        "find-extras-price": ee,
        "format-price": L,
        onLog: H,
        onError: T,
        onCalculating: I,
        onValidationError: Q,
        onResult: U
      }, null, 8, ["readonly", "debug", "stock", "input-type"])) : Z("", !0)
    ], 64));
  }
}), Nt = {
  key: 1,
  class: "error-message"
}, Wt = /* @__PURE__ */ ke({
  __name: "Launch",
  props: {
    type: { default: "vanilla" }
  },
  setup(l, { expose: g }) {
    const O = v(!1), h = v(null), u = Ae({
      wordpress: Yt,
      vanilla: Qt
    }), c = l, d = je(() => {
      if (!c.type) return null;
      const w = c.type.toLowerCase();
      return u[w] || null;
    });
    return g({
      componentType: je(() => c.type),
      isComponentMounted: O,
      checkout: h
    }), (w, D) => d.value ? (B(), ie(pt(d.value), {
      key: 0,
      ref_key: "checkoutRef",
      ref: h
    }, null, 512)) : c.type ? (B(), de("div", Nt, " Invalid component type: " + dt(c.type), 1)) : Z("", !0);
  }
}), Kt = /* @__PURE__ */ St(Wt, [["__scopeId", "data-v-6d642def"]]);
Ft.add(
  Pt,
  Et,
  zt,
  Tt,
  jt,
  qt,
  Ot,
  It,
  $t,
  Lt,
  Dt
);
let pe = null, be = !1;
const Jt = async () => {
  if (!be) {
    be = !0;
    try {
      const l = document.querySelector("#smartcut-app");
      if (!l) {
        console.warn("No #smartcut-app element found");
        return;
      }
      const g = l.getAttribute("data-type") || "";
      pe = ft(Kt, { type: g }), await Vt, pe.use(mt, { i18next: we }), pe.component("FontAwesomeIcon", _t), pe.mount("#smartcut-app");
    } catch (l) {
      console.error("SmartCut mount error:", l);
    } finally {
      be = !1;
    }
  }
};
Jt();
export {
  pe as app,
  Jt as mount
};

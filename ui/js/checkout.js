import { d as ke, y as st, g as w, U as Ie, j as Le, o as B, c as de, A as ve, u as Q, b as lt, f as ee, q as ie, F as $e, k as De, O as Ae, C as re, G as ct, V as ut, h as je, W as pt, t as dt, X as ft, Y as mt, Z as _t } from "./vendor-vue-CrziaopC.js";
import { i as we, B as ht } from "./vendor-i18n-D9hV6ZJH.js";
import { q as yt, d as _, v as gt, w as qe, x as Oe, y as k, C as Be, z as U, A as bt, B as vt, D as wt, E as kt, _ as St } from "./components-DcX3X-Yq.js";
import { J as xt, H as Ft, I as Pt, K as Et, L as zt, M as Tt, N as jt, O as qt, Q as Ot, S as It, T as Lt, U as $t, V as Dt } from "./vendor-CtQQhE4g.js";
import { E as At, a as K } from "./vendor-pdf-BmcHVhVw.js";
import { f as Bt } from "./composables-Ds2Ul1Dw.js";
const Rt = Vt();
async function Vt() {
  const l = {
    main: import("./main-CMlXbzPm.js").then((c) => c.resources),
    errors: import("./errors-DqT4G1Wk.js").then((c) => c.resources)
  }, [b, q] = await Promise.all([
    l.main,
    l.errors
  ]), h = Object.keys(b), u = h.reduce((c, p) => ({
    ...c,
    [p]: {
      main: b[p],
      errors: q[p]
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
      format: function(c, p) {
        return p === "capitalise" ? yt(c) : p === "sentenceCase" ? _(c) : c;
      }
    }
  });
}
const J = 5, ae = 10, ue = ",", C = {
  fillColor: [7, 59, 76],
  fontStyle: "normal"
}, G = {
  fontSize: 9
}, X = { left: 10 };
let Z = [];
const Ht = (l, b, q, h = (u) => u.toString()) => {
  var T;
  const u = new At({ orientation: "landscape" });
  let c = 10;
  u.setFontSize(20), u.text(_(l("pdf.order_summary")), 10, c), c += 15, u.setFontSize(14), u.text(l("description_item_plural", { a: "Your", i: "part" }), 10, c), c += J, Z = [
    _(l("length")),
    _(l("width")),
    _(l("thickness")),
    _(l("material")),
    _(l("quantity")),
    _(l("name")),
    `Banding (${qe.join(ue)})`,
    `Finish (${Oe.join(ue)})`
  ];
  const p = b.parts.map((d) => {
    var s;
    const t = qe.map((F) => d.banding[F] || "-").join(ue), S = Oe.map((F) => d.banding[F] || "-").join(ue);
    return [
      h(d.l),
      h(d.w),
      h(d.t) || "-",
      ((s = d == null ? void 0 : d.material) == null ? void 0 : s.toUpperCase()) || "-",
      h(d.q),
      d.name || "-",
      t,
      S
    ];
  });
  K(u, {
    startY: c,
    head: [Z],
    body: p,
    margin: X,
    headStyles: C,
    styles: G
  }), c = u.autoTable.previous.finalY + ae, u.setFontSize(14), u.text(_(l("pdf.stock_requirements")), 10, c), c += J, Z = [
    _(l("length")),
    _(l("width")),
    _(l("thickness")),
    _(l("material")),
    _(l("quantity"))
    // 'Cost'
  ];
  const x = b.stock.map((d) => {
    var t;
    return [
      h(d.l),
      h(d.w),
      h(d.t) || "-",
      ((t = d == null ? void 0 : d.material) == null ? void 0 : t.toUpperCase()) || "-",
      h(d.q)
      // stock.cost
    ];
  });
  if (K(u, {
    startY: c,
    head: [Z],
    body: x,
    margin: X,
    headStyles: C,
    styles: G
  }), c = u.autoTable.previous.finalY + ae, b.metadata.totalRollLength > 0) {
    u.setFontSize(14), u.text(_(l("pdf.roll_requirements")), 10, c), c += J, Z = [
      l("name"),
      l("material"),
      l("length")
    ];
    const d = b.stock.map((t) => {
      var S, s;
      return [
        ((S = t == null ? void 0 : t.name) == null ? void 0 : S.toUpperCase()) || "-",
        ((s = t == null ? void 0 : t.material) == null ? void 0 : s.toUpperCase()) || "-",
        h(t.analysis.rollLength)
      ];
    });
    K(u, {
      startY: c,
      head: [Z],
      body: d,
      margin: X,
      headStyles: C,
      styles: G
    }), c = u.autoTable.previous.finalY + ae;
  }
  if (q && Object.values(q)) {
    u.setFontSize(14), u.text("Hardware", 10, c), c += J;
    const d = Object.values(q).map((t) => [
      t.name.toUpperCase(),
      h(t.q)
      // item.totalCost.toFixed( 2 )
    ]);
    K(u, {
      startY: c,
      head: [[_(l("pdf.item")), _(l("quantity"))]],
      body: d,
      margin: X,
      headStyles: C,
      styles: G
    }), c = u.autoTable.previous.finalY + ae;
  }
  u.setFontSize(14), u.text(_(l("pdf.totals")), 10, c), c += J;
  const P = [
    [_(l("pdf.total_parts")), h(b.metadata.totalPartsProduced)],
    [_(l("pdf.part_area")), h(b.metadata.totalPartArea)],
    [_(l("pdf.total_stock_required")), h(b.metadata.totalUsedStock)],
    [_(l("pdf.total_banding_length")), h(b.metadata.totalBandingLength)],
    [_(l("pdf.total_finish_area")), h(b.metadata.totalFinishArea)],
    [_(l("pdf.total_roll_length")), h(b.metadata.totalRollLength)]
  ];
  if (K(u, {
    startY: c,
    body: P,
    margin: X,
    headStyles: C,
    styles: G
  }), c = u.autoTable.previous.finalY + ae, (T = window == null ? void 0 : window.smartcutImages) != null && T.length) {
    u.addPage();
    let d = 10;
    u.setFontSize(14), u.text(_(l("pdf.images")), 10, d), d += J;
    const t = window.smartcutImages.flatMap((S, s) => S.metadata.map((F) => [
      s + 1,
      F.newName
    ]));
    K(u, {
      startY: d,
      body: t,
      head: [[_(l("pdf.part_index")), _(l("pdf.file_name"))]],
      margin: X,
      headStyles: C,
      styles: G
    });
  }
  return u.output("datauristring");
}, Ut = {
  key: 0,
  class: "debug"
}, Mt = !1, Yt = /* @__PURE__ */ ke({
  __name: "WordPress",
  setup(l) {
    const { t: b } = st(["main", "errors"]), q = re(() => import("./components-DcX3X-Yq.js").then((e) => e.F)), h = re(() => import("./components-DcX3X-Yq.js").then((e) => e.O)), u = re(() => import("./components-DcX3X-Yq.js").then((e) => e.N)), c = "production", p = {}, x = {}, P = w(null);
    let T, d, t;
    const S = {
      banding: null,
      finish: null
    };
    let s = null, F = [], R = null, z = {};
    const D = w(!1), O = w("manual"), M = w(""), I = w([]), Y = w(null), A = w(!0), te = w(null), V = w(!1), a = w(null);
    Ie("calculator", () => a.value);
    const y = (e) => {
      D.value && console.log("SmartCut -", ...e);
    }, f = (e) => {
      console.error(`SmartCut - ${e}`);
    }, L = (e = !0) => {
      V.value = !0, ["checkout", "intro_text", "offcuts", "banding_key"].forEach((i) => ne(i, "block")), Ze() && ne("pricing_table", "table"), e ? N(!0) : j(), H();
    }, $ = (e = !0, n = !0) => {
      V.value = !1, ["checkout", "intro_text", "offcuts", "banding_key", "pricing_table"].forEach((o) => ne(o, "none")), n === !0 ? W() : n === !1 && H(), N();
    }, N = (e = !1) => {
      ne("quantity", "inline-block"), p.quantity.readOnly = e;
    }, j = () => {
      V.value !== !1 && (fe(1), ne("quantity", "none"), p.quantity.readOnly = !0);
    }, W = () => {
      if (!p.cart_button) {
        f("Cart button not found");
        return;
      }
      p.cart_button.disabled = !1;
    }, H = () => {
      if (V.value !== !1) {
        if (!p.cart_button) {
          f("Cart button not found");
          return;
        }
        p.cart_button.disabled = !0;
      }
    }, Re = () => {
      f("Validation error"), H();
    }, fe = (e, n = 0) => {
      if (y(["setting cart quantity", e]), !p.quantity) {
        f("Quantity field not found when trying to set");
        return;
      }
      p.quantity.value = e.toFixed(n), console.assert(p.quantity.value === e.toFixed(n), "Quantity field value not set correctly");
    }, Ve = (e) => {
      y(["setting variation price", e]);
      const n = document.querySelector(".woocommerce-variation-price .smartcut-price-selector");
      n && (n.innerText = se(e)), P.value = e;
    }, He = () => {
      var n;
      const e = P.value ?? ((n = Y.value) == null ? void 0 : n.display_price) ?? 0;
      return typeof e == "string" ? parseFloat(e) : e;
    }, Ue = () => {
      if (!(window != null && window.smartcutConfig)) {
        f("SmartCut config not found");
        return;
      }
      const e = window.smartcutConfig;
      t = e.settings;
      const n = Fe(k(window, ["smartcutConfig", "banding_data"])), i = Fe(k(window, ["smartcutConfig", "finish_data"])), o = {
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
      D.value = o.debug;
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
          diameters: t.machining_holes_diameters.split(",").map((E) => E.trim()).filter(Boolean),
          minDiameter: t.machining_holes_min_diameter,
          maxDiameter: t.machining_holes_max_diameter,
          enableDepth: t.machining_holes_depth,
          depths: t.machining_holes_depths.split(",").map((E) => E.trim()).filter(Boolean),
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
      A.value = Ee(), A.value ? N(!0) : j(), s.type === "variable" ? $(!1, !1) : L(A.value);
      const r = {
        type: s.type,
        stock: I.value,
        variations: F ?? null,
        options: o,
        banding: n,
        finish: i,
        machining: m
      };
      r.type === "variable" && (y(["setting variable product form listeners"]), jQuery(function(E) {
        E(".variations_form").on("reset_data", () => $(!1, !1)).on("found_variation", (ce, ot) => nt(ce, ot));
      }));
      const g = {
        product: s,
        selectedVariation: Y,
        inputs: x,
        elements: p,
        inputType: O,
        formatPrice: se,
        getCurrentVariationPrice: He,
        setInputValue: _e,
        setCartQuantity: fe,
        setVariationPrice: Ve,
        isExtraEnabled: ye,
        isQuantityPricing: Ee,
        isMachiningEnabled: ze,
        isSurchargeEnabled: Te,
        getTotalBandingPrice: Ce,
        getTotalFinishPrice: Je,
        getTotalMachiningPrice: Ge,
        getInputValue: Xe,
        enableAddToCart: W,
        log: y,
        error: f
      }, v = Bt({
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
      }, g);
      T = v.calculatePrice, d = v.resetPricing, De(() => {
        a.value && a.value.init(r);
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
      O.value = k(window, ["smartcutConfig", "settings", "enable_formula"]) === !0 ? "formula" : "manual", M.value = k(window, ["smartcutConfig", "settings", "formula_url"]), y([`Input type: ${O.value}`]), y([`Input type: ${O.value}`]), z = {
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
        p[n] = document.querySelector(i);
      if (!p.checkout)
        return f("checkout iframe not found");
      if (!p.quantity)
        return f("quantity field not found");
      if (!p.cart_button)
        return f("cart button not found");
      p.quantity.readOnly = !0, H();
    }, Ne = () => ({
      x1: t.stock_trim_x1 ?? 0,
      x2: t.stock_trim_x2 ?? 0,
      y1: t.stock_type === "linear" ? 0 : t.stock_trim_y1 ?? 0,
      y2: t.stock_type === "linear" ? 0 : t.stock_trim_y2 ?? 0
    }), oe = (e = null, n = null, i = null, o = null, m = null) => {
      let r;
      if (m && typeof m == "object") {
        r = [];
        for (const [v, E] of Object.entries(m))
          v !== "attribute_size" && v !== "attribute_thickness" && r.push(`${v.replace("attribute_", "")}: ${E}`);
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
      const i = e.toFixed(z.number_of_decimals).replace(".", z.decimal_separator), o = Se(i, z.thousands_separator);
      return n ? xe(o) : o;
    }, Ke = (e) => {
      if (e == null) return "";
      typeof e == "string" && (e = parseFloat(e));
      const i = e % 1 !== 0 ? z.number_of_decimals : 0, o = e.toFixed(i).replace(".", z.decimal_separator);
      return Se(o, z.thousands_separator);
    }, xe = (e) => {
      switch (z.currency_position) {
        case "left":
          return `${z.currency_symbol}${e}`;
        case "right":
          return `${e}${z.currency_symbol}`;
        default:
          return `${z.currency_symbol}${e}`;
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
          const { options: r } = m, g = Object.values(r).map((v) => le(v)).join("|");
          n.pricing[g] = parseInt(m.price);
        })) : o != null && o.options && Object.keys(o.options).forEach((m) => {
          n.pricing[le(m)] = parseInt(o.price);
        });
      return n.labels.length || n.labels.push("type"), n;
    }, me = (e, n) => {
      if (!n.length || !U(S, [e])) return null;
      const i = k(S, [e]);
      if (!bt(i)) return null;
      const m = Object.values(i).map((r) => r != null && r.variations ? Object.values(r.variations).map((g) => (g.type = "variable", g)) : (r.type = "simple", r)).flat().find((r) => {
        let g;
        return r.type === "simple" ? g = Object.keys(r.options) : g = Object.values(r.options), g ? g.every((v, E) => le(v) === le(n[E])) : !1;
      });
      return m != null && m.price ? parseFloat(m.price) : null;
    }, Je = (e) => {
      let n = 0;
      if (typeof e == "object") {
        for (let [i, o] of Object.entries(e)) {
          typeof o == "string" && (o = parseFloat(o));
          const m = i.split("|"), r = me("finish", m);
          if (r === null) continue;
          const v = Number(o) / 1e6 * parseFloat(r.toString());
          n += v;
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
          const g = o / (t.unit_system === "imperial" ? 12 : 1e3) * parseFloat(r.toString());
          n += g;
        }
        if ("min_banding_charge" in t) {
          const i = parseFloat(t == null ? void 0 : t.min_banding_charge);
          if (i > 0 && n > 0 && n < i)
            return i;
        }
      }
      return n;
    }, Ge = (e) => (R.holes ?? 0) * (e.metadata.numHoles ?? 0) + (R.corners ?? 0) * (e.metadata.numCorners ?? 0), ne = (e, n) => {
      var i;
      e in p && ((i = p[e]) != null && i.style) && (p[e].style.display = n);
    }, _e = (e, n) => {
      he(e) ? x[e].value = n : f(`Attempting to set input but key '${e}' does not exist`);
    }, Xe = (e) => {
      if (he(e))
        return x[e].value;
      f(`Attempting to get input but key '${e}' does not exist`);
    }, he = (e) => e in x && x[e] instanceof HTMLInputElement, Pe = () => {
      fe(1), H(), d();
      for (const e in x)
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
      if (U(t, ["enable", e]) && k(t, ["enable", e]) === !1)
        return !1;
      const n = k(S, [e]);
      return !!(n && Object.values(n).length);
    }, ze = () => t.enable_machining === !0, Te = () => !((t == null ? void 0 : t.surcharge_type) === "none" || !(t != null && t.surcharge) || t.surcharge === "0.00"), Ze = () => !!(t.pricing_strategy === "full_stock_plus_cut_length" || t.pricing_strategy === "full_stock_plus_num_parts" || t.pricing_strategy === "part_area" || t.pricing_strategy === "roll_length" || Te() || ye("banding") || ye("finish") || ze()), et = (e) => {
      var i;
      let n = (i = e == null ? void 0 : e.attributes) == null ? void 0 : i.attribute_size;
      return n || (n = s == null ? void 0 : s.size), n;
    }, ge = (e) => /\d+x\d+/.test(e), tt = () => {
      window.smartcutConfig.input_fields.forEach((e) => {
        const n = e.replaceAll("_", "-");
        x[n] = document.getElementById(n);
      });
    }, nt = (e, n) => {
      Pe(), Y.value = n, y(["variation selected", n.attributes]), I.value = [];
      const i = k(n, ["attributes", "attribute_thickness"]);
      if (s.selected_thickness = i, s.multiple_sizes) {
        const o = et(n);
        if (y([`variation found with size: ${o} & thickness: ${i}`]), !o)
          return $(!1), f("The size of this multiple size product could not be found");
        if (Array.isArray(o) ? L(A.value) : ge(o) ? $(!0, !0) : L(A.value), F != null && F.length && i) {
          let m;
          Array.isArray(o) ? m = o.map((r) => ({
            size: r,
            l: r.split("x")[0],
            w: r.split("x")[1],
            t: i,
            price: n.display_price
          })) : m = F.filter((r) => {
            var g, v;
            return ge((g = r == null ? void 0 : r.attributes) == null ? void 0 : g.size) ? i === ((v = r == null ? void 0 : r.attributes) == null ? void 0 : v.thickness) : !1;
          }).map((r) => {
            var g, v, E, ce;
            return y([
              `size attribute: '${(g = r == null ? void 0 : r.attributes) == null ? void 0 : g.size}'`,
              `price for 'thickness ${i}, size: ${o}' is ${n.display_price}`
            ]), {
              size: (v = r == null ? void 0 : r.attributes) == null ? void 0 : v.size,
              l: (E = r == null ? void 0 : r.attributes) == null ? void 0 : E.size.split("x")[0],
              w: (ce = r == null ? void 0 : r.attributes) == null ? void 0 : ce.size.split("x")[1],
              t: s.selected_thickness,
              price: n.display_price
            };
          }), V.value === !0 && m.forEach((r) => {
            const g = oe(
              r.l,
              r.w,
              r.t,
              r.price,
              n == null ? void 0 : n.attributes
            );
            I.value.push(g);
          });
        }
      } else {
        const o = F.find((m) => m.attributes.thickness === i);
        if (!o) return f(`variation not found for thickness ${i}`);
        I.value.push(oe(
          s.l,
          s.w,
          i,
          o.price,
          n == null ? void 0 : n.attributes
        )), L(A.value);
      }
    }, at = async (e) => {
      Pe(), y(["result event received", e]);
      const n = await T(e);
      if (!n.success) {
        console.error(n.error);
        return;
      }
      await rt(e);
    }, rt = async (e) => {
      const i = Ht(b, e, te.value, Ke).split(",")[1], o = new xt();
      o.file("order-summary.pdf", i);
      const m = await o.generateAsync({ type: "blob" }), r = new File([m], "order-summary.zip", { type: "application/zip" });
      if (!he("smartcut-order-summary")) return;
      const g = x["smartcut-order-summary"].closest("form");
      if (!g) return;
      const v = new DataTransfer();
      v.items.add(r);
      const E = g.querySelector('[name="smartcut_order_summary"]');
      E instanceof HTMLInputElement && (E.files = v.files);
    }, it = (e, n) => {
      H(), e && (te.value = Ae(e)), _e("smartcut-hardware-price", n ?? 0);
    };
    return Le(() => {
      console.log("💥 Powered by https://smartcut.dev", window.smartcutConfig.version), y(["Launching WordPress checkout..."]), S.banding = k(window, ["smartcutConfig", "banding_data"]), S.finish = k(window, ["smartcutConfig", "finish_data"]), R = k(window, ["smartcutConfig", "machining_pricing"]), F = k(window, ["smartcutConfig", "variations"]), Qe(), tt(), Me(window.smartcutConfig), Ye(window.smartcutConfig), Ue(), We(), [
        "div.quantity > input.plus",
        "div.quantity > input.minus",
        "div.quantity .qty-plus",
        "div.quantity .qty-minus"
      ].forEach((i) => {
        const o = document.querySelector(i);
        o && (o.style.display = "none");
      });
      const n = new CustomEvent("smartcut/ready");
      window.dispatchEvent(n), y(["Wordpress checkout ready"]);
    }), (e, n) => (B(), de($e, null, [
      ve(Q(u), { position: "top-left" }),
      Q(c) === "development" && Mt ? (B(), de("div", Ut, [
        n[0] || (n[0] = lt("div", null, "WP - developer information", -1)),
        ve(Q(h), {
          data: [Q(F)],
          paths: ["variations"]
        }, null, 8, ["data"])
      ])) : ee("", !0),
      O.value === "formula" && M.value ? (B(), ie(Q(q), {
        key: 1,
        ref: "formulapricing",
        "format-price": se,
        url: M.value,
        debug: D.value,
        onHardwareResult: it,
        onPanelResult: H
      }, null, 8, ["url", "debug"])) : ee("", !0),
      O.value === "manual" || O.value === "formula" && M.value ? (B(), ie(Be, {
        key: 2,
        ref_key: "calculator",
        ref: a,
        readonly: O.value === "formula",
        debug: D.value,
        stock: I.value,
        "find-extras-price": me,
        "format-price": se,
        "input-type": O.value,
        onLog: y,
        onError: f,
        onInputsChanged: H,
        onValidationError: Re,
        onResult: at
      }, null, 8, ["readonly", "debug", "stock", "input-type"])) : ee("", !0)
    ], 64));
  }
}), Qt = /* @__PURE__ */ ke({
  __name: "Vanilla",
  emits: ["ready"],
  setup(l, { expose: b, emit: q }) {
    const h = re(() => import("./components-DcX3X-Yq.js").then((a) => a.F)), u = re(() => import("./components-DcX3X-Yq.js").then((a) => a.N)), c = q, p = w(!1), x = w([]), P = w({
      banding: null,
      finish: null,
      machining: null
    }), T = w("USD"), d = w("en-US"), t = w("manual"), S = w(""), s = ct(null), F = w(null), R = w();
    Ie("calculator", () => R.value);
    const z = (a) => {
      p.value && console.log("SmartCut -", ...a);
    }, D = (a) => {
      console.error(`SmartCut - ${a}`);
    }, O = () => {
      const a = new CustomEvent("smartcut/validationError");
      window.dispatchEvent(a);
    }, M = () => {
      const a = new CustomEvent("smartcut/calculating");
      window.dispatchEvent(a);
    }, I = (a) => {
      F.value = a;
    }, Y = (a = 0, y = d.value) => {
      if (a === !0) return "";
      try {
        y = y.replace("_", "-");
        const f = Number(a);
        return !f && f !== 0 ? "" : isNaN(f) ? (console.error("formatPrice - invalid price:", a), "") : f.toLocaleString(y, {
          style: "currency",
          currency: T.value
        });
      } catch (f) {
        return console.error("Error formatting price:", f), "";
      }
    }, A = (a, y) => {
      var $;
      if (!(($ = P.value) != null && $[a])) return null;
      const f = y.join("|"), L = k(P.value, [a, f]);
      return typeof L == "number" ? L : parseFloat(L);
    }, te = (a) => {
      kt(a), x.value = a.stock, P.value.banding = k(a, ["banding", "pricing"]), P.value.finish = k(a, ["finish", "pricing"]), P.value.machining = k(a, ["machining", "pricing"]), U(a, ["options", "currency"]) && (T.value = k(a, ["options", "currency"])), U(a, ["options", "locale"]) && (d.value = k(a, ["options", "locale"]).replace("_", "-")), (U(a, ["options", "formula", "url"]) || U(a, ["options", "formula", "spec"])) && (t.value = "formula", S.value = k(a, ["options", "formula", "url"]) ?? null, s.value = k(a, ["options", "formula", "spec"]) ?? null), De(() => {
        R.value && R.value.init(a);
      });
    }, V = (a) => {
      var L, $, N;
      const y = a;
      if (y.checkout = {
        formattedTotalStockCost: "",
        formattedBandingCost: {},
        formattedFinishCost: {}
      }, (L = a == null ? void 0 : a.metadata) != null && L.totalStockCost && (y.checkout.formattedTotalStockCost = a.metadata.totalStockCost.toLocaleString(
        d.value,
        {
          style: "currency",
          currency: T.value
        }
      )), ($ = a == null ? void 0 : a.metadata) != null && $.bandingLengthByType)
        for (const [j, W] of Object.entries(a.metadata.bandingLengthByType)) {
          if (!U(P.value, ["banding", j])) {
            D(`Banding price ${j} not found`);
            continue;
          }
          y.checkout.formattedBandingCost[j] = (W / 1e3 * P.value.banding[j]).toLocaleString(d.value, { style: "currency", currency: T.value });
        }
      if ((N = a == null ? void 0 : a.metadata) != null && N.finishAreaByType)
        for (const [j, W] of Object.entries(a.metadata.finishAreaByType)) {
          if (!U(P.value, ["finish", j])) {
            D(`Finish price ${j} not found`);
            continue;
          }
          y.checkout.formattedFinishCost[j] = (W / 1e6 * P.value.finish[j]).toLocaleString(d.value, { style: "currency", currency: T.value });
        }
      const f = new CustomEvent("smartcut/result", {
        detail: JSON.parse(JSON.stringify(y))
      });
      window.dispatchEvent(f);
    };
    return ut(() => {
      console.log("💥 Powered by https://smartcut.dev");
      const a = new URLSearchParams(window.location.search);
      p.value = !!a.has("debug"), p.value && console.log("Smartcut - debug enabled");
    }), Le(() => {
      window.smartcutCheckout = { init: te }, c("ready");
      const a = new CustomEvent("smartcut/ready");
      window.dispatchEvent(a);
    }), b({
      init: te,
      debug: p,
      stock: x,
      pricing: P,
      currency: T,
      locale: d,
      inputType: t,
      formulaURL: S,
      formulaSpec: s,
      hardWareResult: F,
      log: z,
      error: D,
      calculating: M,
      result: V,
      formatPrice: Y,
      findExtrasPrice: A,
      setHardwareResult: I
    }), (a, y) => (B(), de($e, null, [
      ve(Q(u), { position: "top-left" }),
      t.value === "formula" && (S.value || s.value) ? (B(), ie(Q(h), {
        key: 0,
        ref: "formulapricing",
        "format-price": Y,
        url: S.value,
        spec: s.value,
        debug: p.value,
        onHardwareResult: I
      }, null, 8, ["url", "spec", "debug"])) : ee("", !0),
      t.value === "manual" || t.value === "formula" && (S.value || s.value) ? (B(), ie(Be, {
        key: 1,
        ref_key: "calculator",
        ref: R,
        readonly: t.value === "formula",
        debug: p.value,
        stock: x.value,
        "input-type": t.value,
        "find-extras-price": A,
        "format-price": Y,
        onLog: z,
        onError: D,
        onCalculating: M,
        onValidationError: O,
        onResult: V
      }, null, 8, ["readonly", "debug", "stock", "input-type"])) : ee("", !0)
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
  setup(l, { expose: b }) {
    const q = w(!1), h = w(null), u = Ae({
      wordpress: Yt,
      vanilla: Qt
    }), c = l, p = je(() => {
      if (!c.type) return null;
      const x = c.type.toLowerCase();
      return u[x] || null;
    });
    return b({
      componentType: je(() => c.type),
      isComponentMounted: q,
      checkout: h
    }), (x, P) => p.value ? (B(), ie(pt(p.value), {
      key: 0,
      ref_key: "checkoutRef",
      ref: h
    }, null, 512)) : c.type ? (B(), de("div", Nt, " Invalid component type: " + dt(c.type), 1)) : ee("", !0);
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
  Lt,
  $t,
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
      const b = l.getAttribute("data-type") || "";
      pe = ft(Kt, { type: b }), await Rt, pe.use(mt, { i18next: we }), pe.component("FontAwesomeIcon", _t), pe.mount("#smartcut-app");
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

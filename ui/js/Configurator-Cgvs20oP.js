import { Z as Qe, a4 as be } from "./NestingShape-JAVnw-aP.js";
import { F as fe, I as oe } from "./EcommerceCalculator-CTmE4c2O.js";
import { o as k, q as Z, u as M, i as Pe, h as $, v as Ye, n as ze, w as de, k as me, x as Ce } from "./vendor-CIXsT6Bd.js";
import { t as ke } from "./i18n-DGE8ywV5.js";
import { d as et, S as tt, k as q, l as nt, o as F, c as z, a as re, m as ae, u as ie, b as D, j as Se, F as J, f as Ae, C as ot, x as G, s as H, I as rt, g as se, t as ce, q as at } from "./vendor-vue-CrNGqS0k.js";
import { _ as it } from "./Launch-9LoYYNsk.js";
const st = [
  { type: "banding", specKey: "bandingOptions", container: "sides", keys: Qe },
  { type: "finish", specKey: "finishOptions", container: "faces", keys: be },
  { type: "planing", specKey: "planingOptions", container: "faces", keys: be }
];
function $e(n, e) {
  if (!n || typeof n != "object" || !e || typeof e != "object") return;
  const o = n, r = e;
  for (const { type: t, specKey: a, container: i, keys: c } of st) {
    const u = r[a];
    if (!u || typeof u != "object") {
      const f = o.extras?.[t]?.[i];
      if (f) for (const m of c) f[m] = "";
      continue;
    }
    o.extras = o.extras || {}, o.extras[t] = o.extras[t] || {};
    const s = o.extras[t][i] = o.extras[t][i] || {};
    for (const f of c) {
      const m = u[f]?.type;
      s[f] = typeof m == "string" && m !== "" ? m : "";
    }
  }
}
function ct(n, e) {
  const o = {};
  for (let r = 0; r < n.length; r++) {
    const t = e[r]?.value;
    if (typeof t == "number") o[n[r]] = t;
    else if (typeof t == "boolean") o[n[r]] = t ? 1 : 0;
    else if (t == null) o[n[r]] = 0;
    else if (typeof t == "string") {
      const a = Number(t);
      o[n[r]] = Number.isFinite(a) ? a : 0;
    } else o[n[r]] = 0;
  }
  return { inputs: o };
}
const R = me(["x", "y", "z"]), B = me(["top", "bottom", "left", "right", "front", "back"]), lt = k({
  l: R,
  w: R,
  t: R
}), w = M([ze(), $()]), ut = k({ my: B, their: B }), ft = k({ center: R }), pt = k({ axis: R, offset: w }), dt = ut.transform((n) => ({ kind: "edge", ...n })), mt = ft.transform((n) => ({ kind: "center", ...n })), ht = pt.transform((n) => ({ kind: "offset", ...n })), gt = M([
  dt,
  mt,
  ht
]);
function Oe(n) {
  return n.kind === "edge";
}
function je(n) {
  return n.kind === "center";
}
function Fe(n) {
  return n.kind === "offset";
}
const Ne = k({
  to: $(),
  myFace: B,
  theirFace: B,
  align: Z(gt).default([])
}), vt = k({
  count: w,
  between: de([$(), $()]),
  spacing: Ce("even"),
  // Override the default midpoint on the non-spacing axes. By default
  // repeat-between centres copies between the two anchor parts; supply
  // this to place them at a specific corner (e.g. shelf pins on the
  // inside-front of a cabinet side instead of dead-centre).
  offset: k({
    x: w.optional(),
    y: w.optional(),
    z: w.optional()
  }).optional(),
  // Additive delta on the spacing axis itself — applied to each copy's
  // position along that axis. Useful for placing supporting hardware
  // just below a repeated shelf rather than at shelf centre.
  shift: w.optional()
}), xt = k({
  count: w,
  axis: R,
  spacing: w,
  startAt: w.default(0),
  // Override the position on non-spacing axes (defaults to 0). Useful when
  // the repeated thing is an `instantiate` block — you stack drawers along
  // y but want them all at the same x/z.
  offset: k({
    x: w.optional(),
    y: w.optional(),
    z: w.optional()
  }).optional()
}), yt = k({
  count: w,
  around: k({
    axis: R,
    center: w.default(0)
  }),
  spacing: w
}), wt = vt.transform((n) => ({ kind: "between", ...n })), bt = xt.transform((n) => ({ kind: "axis", ...n })), kt = yt.transform((n) => ({ kind: "around", ...n })), Ie = M([
  wt,
  bt,
  kt
]), Ee = M([
  Ce("origin"),
  k({
    at: de([w, w, w])
  })
]), Me = k({
  axis: R,
  distance: w
}), Te = k({
  axis: R,
  degrees: w,
  pivot: M([
    B,
    de([B, B])
  ]).optional()
}), he = {
  id: $().min(1),
  from: $(),
  // required — non-mirrored variants always reference a panel
  take: ze().int().min(0).default(0),
  axes: lt.default({ l: "x", w: "y", t: "z" }),
  // Which of the panel's local axes the material's grain runs along.
  // Sheet goods inherit grain from the manufacturer's sheet — typically
  // along the long side. This selects whether the texture's "long" UV
  // axis aligns with the panel's `l` (default) or `w` axis when the
  // renderer maps the material image onto the cuboid faces. Faces
  // perpendicular to the grain axis show end-grain (no rotation needed);
  // faces parallel to it tile along the grain.
  grainAxis: me(["l", "w"]).default("l"),
  rotation: Te.optional(),
  translate: Me.optional(),
  // Optional gate — when this expression evaluates to a falsy number, the
  // instance is skipped. Lets hardware-style instances follow a formula
  // input like `inputs.hasDrawer`. Same cascade as q=0 panels:
  // dependents (joined / mirrored) skip too.
  when: w.optional()
}, St = k({
  ...he,
  anchor: Ee
}), At = k({
  ...he,
  join: Ne
}), $t = k({
  id: $().min(1),
  mirrorOf: $(),
  axis: R,
  // Mirror plane defaults to the world origin on the chosen axis.
  center: w.default(0)
}), Ot = k({
  ...he,
  repeat: Ie
}), jt = St.transform((n) => ({ kind: "root", ...n })), Ft = At.transform((n) => ({ kind: "joined", ...n })), _t = $t.transform((n) => ({ kind: "mirrored", ...n })), Rt = Ot.transform((n) => ({ kind: "repeated", ...n })), Ue = M([
  jt,
  Ft,
  _t,
  Rt
]), Pt = k({
  // Names of params the template expects. Available as `params.<name>` in
  // any formula expression inside the template.
  params: Z($()).default([]),
  // Template instances can themselves be `instantiate` blocks — that's
  // how nested templates work. Expansion iterates until no instantiate
  // blocks remain.
  instances: Z(
    Ye(() => M([Ue, Be]))
  ).min(1)
}), Be = k({
  id: $().min(1),
  instantiate: $().min(1),
  params: Pe($(), w).optional(),
  anchor: Ee.optional(),
  join: Ne.optional(),
  mirrorOf: $().optional(),
  axis: R.optional(),
  center: w.optional(),
  repeat: Ie.optional(),
  // Forwarded to the template root after expansion. Lets a drawer
  // template translate as a unit when drawerOpen changes (or rotate as
  // a unit, e.g. a door-shaped template).
  rotation: Te.optional(),
  translate: Me.optional(),
  when: w.optional()
}), zt = k({
  name: $().optional(),
  templates: Pe($(), Pt).optional(),
  // Top-level instances may include `instantiate` blocks. Those expand to
  // concrete instances during resolver setup; the resolver sees only the
  // flat shape afterwards.
  instances: Z(M([Ue, Be])).min(1)
});
function K(n) {
  return n && typeof n == "object" && typeof n.instantiate == "string";
}
function Ct(n) {
  return n.kind === "root";
}
function le(n) {
  return n.kind === "joined";
}
function X(n) {
  return n.kind === "mirrored";
}
function ue(n) {
  return n.kind === "repeated";
}
class I extends Error {
  constructor(e) {
    super(e), this.name = "TemplateError";
  }
}
const _e = 32;
function Nt(n, e = {}) {
  if (!n.instances.some(K)) return n;
  const r = n.templates ?? {};
  let t = n.instances;
  for (let a = 0; a < _e && t.some(K); a++) {
    const c = [];
    for (const u of t)
      if (K(u)) {
        const s = It(u, r, e);
        c.push(...s);
      } else
        c.push(u);
    if (t = c, a === _e - 1 && t.some(K))
      throw new I(
        "Template expansion did not converge — check for recursive instantiation"
      );
  }
  return {
    name: n.name,
    instances: t
  };
}
function It(n, e, o) {
  const r = e[n.instantiate];
  if (!r)
    throw new I(
      `Unknown template "${n.instantiate}" — known: ${Object.keys(e).join(", ") || "(none)"}`
    );
  return n.repeat ? Et(n, r, o) : We(n, r, n.id);
}
function We(n, e, o) {
  const r = /* @__PURE__ */ new Set();
  for (const u of e.instances) {
    if (typeof u.id != "string")
      throw new I(`Template "${n.instantiate}" has an instance without an id`);
    if (r.has(u.id))
      throw new I(
        `Template "${n.instantiate}" has duplicate instance id "${u.id}"`
      );
    r.add(u.id);
  }
  const t = e.instances.filter((u) => u.anchor !== void 0);
  if (t.length !== 1)
    throw new I(
      `Template "${n.instantiate}" must have exactly one instance with \`anchor\` (the root). Found ${t.length}.`
    );
  const a = t[0].id, i = n.params ?? {}, c = [];
  for (const u of e.instances) {
    const s = Mt(u, o, r, i);
    s.id === `${o}/${a}` && ((n.anchor !== void 0 || n.join !== void 0 || n.mirrorOf !== void 0) && (delete s.anchor, delete s.join, delete s.mirrorOf, delete s.repeat, n.anchor !== void 0 ? (s.anchor = n.anchor, s.kind = "root") : n.join !== void 0 ? (s.join = n.join, s.kind = "joined") : (s.mirrorOf = n.mirrorOf, n.axis !== void 0 && (s.axis = n.axis), n.center !== void 0 && (s.center = n.center), delete s.from, delete s.take, delete s.axes, s.kind = "mirrored")), n.translate !== void 0 && (s.translate = n.translate), n.rotation !== void 0 && (s.rotation = n.rotation), n.when !== void 0 && (s.when = n.when)), c.push(s);
  }
  return c;
}
function Et(n, e, o) {
  const r = n.repeat;
  if ("between" in r)
    throw new I(
      "Repeat-between of an `instantiate` is not supported — use repeat-axis or repeat-around. (Between needs already-placed parts; the template hasn't been resolved yet.)"
    );
  const t = Math.max(0, Math.round(E(r.count, o)));
  if (t === 0) return [];
  const a = "axis" in r ? r.axis : r.around.axis, i = [];
  if ("around" in r) {
    const s = E(r.around.center ?? 0, o), f = E(r.spacing, o), m = t % 2 === 1;
    for (let v = 0; v < t; v++) {
      let P;
      if (m) {
        const _ = Math.ceil(v / 2);
        P = (v === 0 ? 0 : v % 2 === 1 ? 1 : -1) * _ * f;
      } else {
        const _ = Math.floor(v / 2);
        P = (v % 2 === 0 ? -1 : 1) * (_ + 0.5) * f;
      }
      i.push(s + P);
    }
  } else {
    const s = E(r.spacing, o), f = r.startAt !== void 0 ? E(r.startAt, o) : 0;
    for (let m = 0; m < t; m++) i.push(f + s * m);
  }
  const c = [0, 0, 0];
  "axis" in r && r.offset && (r.offset.x !== void 0 && (c[0] = E(r.offset.x, o)), r.offset.y !== void 0 && (c[1] = E(r.offset.y, o)), r.offset.z !== void 0 && (c[2] = E(r.offset.z, o)));
  const u = [];
  for (let s = 0; s < i.length; s++) {
    const f = [c[0], c[1], c[2]], m = a === "x" ? 0 : a === "y" ? 1 : 2;
    f[m] = i[s];
    const v = {
      id: `${n.id}@${s}`,
      instantiate: n.instantiate,
      params: n.params,
      anchor: { at: f },
      ...n.translate !== void 0 ? { translate: n.translate } : {},
      ...n.rotation !== void 0 ? { rotation: n.rotation } : {},
      ...n.when !== void 0 ? { when: n.when } : {}
    };
    u.push(...We(v, e, v.id));
  }
  return u;
}
function Mt(n, e, o, r) {
  const t = JSON.parse(JSON.stringify(n));
  return t.id = `${e}/${t.id}`, pe(t, e, o, r), t;
}
function pe(n, e, o, r) {
  if (n != null && typeof n == "object")
    for (const t of Object.keys(n)) {
      const a = n[t];
      if (typeof a == "string")
        n[t] = Re(t, a, e, o, r);
      else if (Array.isArray(a))
        for (let i = 0; i < a.length; i++)
          typeof a[i] == "string" ? a[i] = Re(t, a[i], e, o, r) : pe(a[i], e, o, r);
      else typeof a == "object" && pe(a, e, o, r);
    }
}
function Re(n, e, o, r, t) {
  let a = e;
  return n === "to" || n === "mirrorOf" ? a = Ve(a, o, r) : Tt(a) && (a = Ut(a, o, r)), a.startsWith("=") && (a = Bt(a, t)), a;
}
function Ve(n, e, o) {
  return n.startsWith("outer/") ? n.slice(6) : o.has(n) ? `${e}/${n}` : n;
}
function Tt(n) {
  return n.startsWith("=") ? !1 : !!/^([a-zA-Z_][\w-/]*)\.([a-z]+)$/.exec(n);
}
function Ut(n, e, o) {
  const r = /^([a-zA-Z_][\w-/]*)\.([a-z]+)$/.exec(n);
  if (!r) return n;
  const t = r[1], a = r[2];
  return `${Ve(t, e, o)}.${a}`;
}
function Bt(n, e) {
  return n.replace(/\bparams\.(\w+)/g, (o, r) => {
    if (!(r in e))
      return `params.${r}`;
    const t = e[r];
    return typeof t == "number" ? String(t) : `(${t.startsWith("=") ? t.slice(1).trim() : t})`;
  });
}
function E(n, e) {
  if (typeof n == "number") return n;
  const o = n.startsWith("=") ? n.slice(1).trim() : n.trim(), r = o.replace(/\binputs\.(\w+)\b/g, (i, c) => {
    if (!(c in e))
      throw new I(`Repeat-of-instantiate references unknown input "inputs.${c}"`);
    return String(e[c]);
  });
  if (!/^[\d+\-*/().\s<>=!&|?:]+$/.test(r))
    throw new I(
      `Repeat-of-instantiate position contains unsupported characters; got "${r}"`
    );
  const a = new Function(`return (${r})`)();
  if (typeof a != "number" || !Number.isFinite(a))
    throw new I(`Repeat-of-instantiate expression "${o}" did not evaluate to a finite number`);
  return a;
}
class b extends Error {
  constructor(e) {
    super(e), this.name = "AssemblyError";
  }
}
const N = {
  right: { axis: "x", sign: 1 },
  left: { axis: "x", sign: -1 },
  top: { axis: "y", sign: 1 },
  bottom: { axis: "y", sign: -1 },
  front: { axis: "z", sign: 1 },
  back: { axis: "z", sign: -1 }
};
class Wt {
  calc;
  // Built lazily — input values + already-resolved part dimensions are
  // folded into the variable bag for formula evaluation in repeat/offset
  // expressions.
  variables;
  spec;
  panels;
  constructor(e, o, r = {}) {
    const t = zt.parse(e);
    this.spec = Nt(t, r), this.panels = o, this.calc = new fe({}), this.variables = {
      inputs: r,
      panels: this.flattenPanelDims(o)
    };
  }
  resolve() {
    const e = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), r = [], t = [...this.spec.instances], a = t.length + 1;
    for (let i = 0; i < a && t.length; i++) {
      let c = !1;
      for (let u = t.length - 1; u >= 0; u--) {
        const s = t[u];
        if (!this.dependenciesReady(s, e, o)) continue;
        if (this.shouldSkip(s, o)) {
          o.add(s.id), t.splice(u, 1), c = !0;
          continue;
        }
        const f = this.placeInstance(s, e);
        if (f.length === 0) {
          o.add(s.id), t.splice(u, 1), c = !0;
          continue;
        }
        for (const m of f) {
          if (e.has(m.id))
            throw new b(`Duplicate instance id: ${m.id}`);
          e.set(m.id, m), r.push(m);
        }
        t.splice(u, 1), c = !0;
      }
      if (!c) break;
    }
    if (t.length) {
      const i = t.map((c) => c.id).join(", ");
      throw new b(
        `Unresolved instances (cyclic or unknown reference): ${i}`
      );
    }
    return { parts: r };
  }
  // True when the instance's source has been skipped — propagates the skip
  // down the dependency tree so e.g. hinges attached to an absent door
  // disappear with it.
  shouldSkip(e, o) {
    if (le(e)) return o.has(e.join.to);
    if (X(e))
      return !!o.has(e.mirrorOf);
    if (ue(e) && "between" in e.repeat) {
      const [r, t] = e.repeat.between;
      return o.has(r.split(".")[0]) || o.has(t.split(".")[0]);
    }
    return !1;
  }
  // ---- dependency check --------------------------------------------------
  dependenciesReady(e, o, r) {
    const t = (i) => o.has(i) || r.has(i), a = (i) => {
      if (t(i)) return !0;
      const c = `${i}@`;
      for (const u of o.keys()) if (u.startsWith(c)) return !0;
      return !1;
    };
    if (le(e)) return t(e.join.to);
    if (X(e)) return a(e.mirrorOf);
    if (ue(e)) {
      const i = e.repeat;
      if ("between" in i) {
        const [c, u] = i.between;
        return t(c.split(".")[0]) && t(u.split(".")[0]);
      }
      return !0;
    }
    return !0;
  }
  // ---- placement dispatch ------------------------------------------------
  placeInstance(e, o) {
    if (!X(e)) {
      const r = e.from;
      if (r) {
        const a = this.panels[r], i = a?.q;
        if (a && (i === 0 || i === !1 || i === null || i === void 0)) return [];
      }
      const t = e.when;
      if (t !== void 0 && !this.evalNumber(t))
        return [];
    }
    if (Ct(e)) return [this.placeRoot(e)];
    if (le(e)) return [this.placeJoined(e, o)];
    if (X(e)) return this.placeMirrored(e, o);
    if (ue(e)) return this.placeRepeated(e, o);
    throw new b(`Unknown instance shape: ${JSON.stringify(e)}`);
  }
  placeRoot(e) {
    const o = this.computeHalfExtents(e), r = e.anchor === "origin" ? [0, 0, 0] : e.anchor.at.map((t) => this.evalNumber(t));
    return this.makePart(e, { x: r[0], y: r[1], z: r[2] }, o);
  }
  placeJoined(e, o) {
    const r = o.get(e.join.to);
    if (!r) throw new b(`Join target not placed: ${e.join.to}`);
    const t = this.computeHalfExtents(e), a = this.solveJoinPosition(e.join, t, r);
    return this.makePart(e, a, t);
  }
  placeMirrored(e, o) {
    const r = this.evalNumber(e.center ?? 0), t = e.axis, a = o.get(e.mirrorOf);
    if (a) return [this.mirrorOne(a, t, r, e.id)];
    const i = `${e.mirrorOf}@`, c = [...o.values()].filter((u) => u.id.startsWith(i));
    if (c.length === 0)
      throw new b(`Mirror source not placed: ${e.mirrorOf}`);
    return c.map(
      (u, s) => this.mirrorOne(u, t, r, `${e.id}@${s}`)
    );
  }
  mirrorOne(e, o, r, t) {
    const a = { ...e.position };
    return a[o] = 2 * r - e.position[o], {
      id: t,
      from: e.from,
      take: e.take,
      material: e.material,
      name: e.name,
      position: a,
      half: { ...e.half },
      rotation: e.rotation ? { ...e.rotation, pivot: { ...e.rotation.pivot } } : void 0,
      grainWorldAxis: e.grainWorldAxis
    };
  }
  placeRepeated(e, o) {
    const r = this.computeHalfExtents(e), t = Math.max(0, Math.round(this.evalNumber(e.repeat.count)));
    return t === 0 ? [] : this.solveRepeatPositions(e.repeat, t, r, o).map((i, c) => this.makePart(
      e,
      i,
      r,
      `${e.id}@${c}`
    ));
  }
  // ---- join math ---------------------------------------------------------
  // Given the contact face pair plus 0-2 alignment rules, solve the world
  // position of THIS part's centre. The contact axis is fixed by the faces;
  // the other two axes are pinned by the alignment rules (or default to
  // "centered" if unspecified).
  solveJoinPosition(e, o, r) {
    const t = N[e.myFace], a = N[e.theirFace];
    if (t.axis !== a.axis)
      throw new b(
        `Contact faces must share an axis: ${e.myFace}↔${e.theirFace}`
      );
    if (t.sign === a.sign)
      throw new b(
        `Contact faces must oppose, got ${e.myFace}↔${e.theirFace}`
      );
    const i = t.axis, u = r.position[i] + a.sign * r.half[i] - t.sign * o[i], s = { x: 0, y: 0, z: 0 };
    s[i] = u;
    const f = /* @__PURE__ */ new Map();
    for (const m of e.align) {
      const v = this.axisOfRule(m);
      if (v === i)
        throw new b(
          `Alignment axis ${v} clashes with contact axis ${i}`
        );
      if (f.has(v))
        throw new b(
          `Multiple alignment rules for axis ${v}`
        );
      f.set(v, m);
    }
    for (const m of ["x", "y", "z"]) {
      if (m === i) continue;
      const v = f.get(m);
      s[m] = this.applyAlignRule(v, m, o, r);
    }
    return s;
  }
  // Determine which world axis a rule constrains. Edge-mode rules infer
  // the axis from face names (faces must share an axis); centre and
  // offset rules name it explicitly.
  axisOfRule(e) {
    if (Fe(e)) return e.axis;
    if (je(e)) return e.center;
    if (!Oe(e))
      throw new b("Unknown AlignRule variant");
    const o = N[e.my].axis, r = N[e.their].axis;
    if (o !== r)
      throw new b(
        `Edge alignment faces must share an axis: my "${e.my}" (${o}) vs their "${e.their}" (${r})`
      );
    return o;
  }
  applyAlignRule(e, o, r, t) {
    if (!e || je(e))
      return t.position[o];
    if (Fe(e))
      return t.position[o] + this.evalNumber(e.offset);
    if (!Oe(e))
      throw new b("Unknown AlignRule variant");
    const a = N[e.my].sign, i = N[e.their].sign;
    return t.position[o] + i * t.half[o] - a * r[o];
  }
  // ---- repeat math -------------------------------------------------------
  solveRepeatPositions(e, o, r, t) {
    return "between" in e ? this.repeatBetween(e, o, r, t) : "around" in e ? this.repeatAround(e, o, r) : this.repeatAxis(e, o, r);
  }
  repeatBetween(e, o, r, t) {
    const [a, i] = e.between, c = this.resolveAnchor(a, t), u = this.resolveAnchor(i, t);
    if (c.axis !== u.axis)
      throw new b(
        `Repeat anchors must share an axis: ${a} (${c.axis}) vs ${i} (${u.axis})`
      );
    const s = c.axis, m = (u.coord - c.coord) / (o + 1), v = [], P = this.midpointForOtherAxes(s, c, u, t), _ = e.offset;
    for (const C of ["x", "y", "z"]) {
      if (C === s) continue;
      const U = _?.[C];
      U !== void 0 && (P[C] = this.evalNumber(U));
    }
    const T = e.shift !== void 0 ? this.evalNumber(e.shift) : 0;
    for (let C = 1; C <= o; C++) {
      const U = { ...P };
      U[s] = c.coord + m * C + T, v.push(U);
    }
    return v;
  }
  repeatAxis(e, o, r) {
    const t = e.axis, a = this.evalNumber(e.spacing), i = this.evalNumber(e.startAt), c = { x: 0, y: 0, z: 0 }, u = e.offset;
    if (u)
      for (const f of ["x", "y", "z"]) {
        if (f === t) continue;
        const m = u[f];
        m !== void 0 && (c[f] = this.evalNumber(m));
      }
    const s = [];
    for (let f = 0; f < o; f++) {
      const m = { ...c };
      m[t] = i + a * f, s.push(m);
    }
    return s;
  }
  repeatAround(e, o, r) {
    const t = e.around.axis, a = this.evalNumber(e.around.center), i = this.evalNumber(e.spacing), c = [], u = o % 2 === 1;
    for (let s = 0; s < o; s++) {
      const f = { x: 0, y: 0, z: 0 };
      let m;
      if (u) {
        const v = Math.ceil(s / 2);
        m = (s === 0 ? 0 : s % 2 === 1 ? 1 : -1) * v * i;
      } else {
        const v = Math.floor(s / 2);
        m = (s % 2 === 0 ? -1 : 1) * (v + 0.5) * i;
      }
      f[t] = a + m, c.push(f);
    }
    return c;
  }
  resolveAnchor(e, o) {
    const [r, t] = e.split("."), a = o.get(r);
    if (!a) throw new b(`Anchor references unknown instance: ${e}`);
    if (!t) throw new b(`Anchor missing face: ${e}`);
    const i = N[t];
    if (!i) throw new b(`Unknown face in anchor: ${e}`);
    const c = a.position[i.axis] + i.sign * a.half[i.axis];
    return { axis: i.axis, coord: c, part: a };
  }
  // For a between-repeat, the non-spacing axes default to the midpoint of
  // the two anchor parts so e.g. shelves naturally centre between the
  // cabinet's left and right sides.
  midpointForOtherAxes(e, o, r, t) {
    const a = { x: 0, y: 0, z: 0 };
    for (const i of ["x", "y", "z"])
      i !== e && (a[i] = (o.part.position[i] + r.part.position[i]) / 2);
    return a;
  }
  // ---- helpers -----------------------------------------------------------
  computeHalfExtents(e) {
    const o = e.axes;
    if ((/* @__PURE__ */ new Set([o.l, o.w, o.t])).size !== 3)
      throw new b(`Axes must be distinct, got l=${o.l} w=${o.w} t=${o.t}`);
    const t = this.panels[e.from];
    if (!t)
      throw new b(`No formula panel "${e.from}" — known: ${Object.keys(this.panels).join(", ")}`);
    const a = { x: 0, y: 0, z: 0 };
    return a[o.l] = t.l / 2, a[o.w] = t.w / 2, a[o.t] = t.t / 2, a;
  }
  makePart(e, o, r, t) {
    if (e.translate) {
      const f = e.translate.axis;
      o = { ...o }, o[f] += this.evalNumber(e.translate.distance);
    }
    const a = this.resolveRotation(e, o, r), i = this.panels[e.from], c = e.grainAxis === "w" ? "w" : "l", s = (e.axes ?? { l: "x", w: "y", t: "z" })[c] ?? "x";
    return {
      id: t ?? e.id,
      from: e.from ?? "",
      take: e.take ?? 0,
      material: i?.material ?? "",
      name: i?.name ?? e.from ?? "",
      position: o,
      half: r,
      rotation: a,
      grainWorldAxis: s
    };
  }
  resolveRotation(e, o, r) {
    if (!e.rotation) return;
    const t = e.rotation.axis, a = this.evalNumber(e.rotation.degrees) * Math.PI / 180, i = { x: o.x, y: o.y, z: o.z }, c = e.rotation.pivot;
    if (typeof c == "string") {
      const u = N[c];
      i[u.axis] += u.sign * r[u.axis];
    } else if (Array.isArray(c)) {
      const u = /* @__PURE__ */ new Set();
      for (const s of c) {
        const f = N[s];
        if (f.axis === t)
          throw new b(
            `Pivot face "${s}" cannot share the rotation axis (${t})`
          );
        if (u.has(f.axis))
          throw new b(
            `Pivot faces ${c[0]} and ${c[1]} must be on different axes`
          );
        u.add(f.axis), i[f.axis] = o[f.axis] + f.sign * r[f.axis];
      }
    }
    return { axis: t, radians: a, pivot: i };
  }
  flattenPanelDims(e) {
    const o = {};
    for (const [r, t] of Object.entries(e))
      o[r] = { l: t.l, w: t.w, t: t.t, q: t.q };
    return o;
  }
  evalNumber(e) {
    if (typeof e == "number") return e;
    if (typeof e != "string")
      throw new b(`Expected number or formula, got ${typeof e}`);
    const o = e.startsWith("=") ? e.slice(1).trim() : e.trim(), r = this.flattenForExpr(), t = this.calc.evaluateExpression(o, r);
    if (typeof t == "boolean")
      return t ? 1 : 0;
    if (typeof t != "number")
      throw new b(`Formula did not evaluate to a number: ${e} → ${t}`);
    return t;
  }
  // FormulaCalculator's expression evaluator resolves `inputs.x` and
  // `panels.x.l` via dot-notation — so we just pass our nested vars as-is.
  flattenForExpr() {
    return this.variables;
  }
}
function Vt(n, e, o = {}) {
  return new Wt(n, e, o).resolve();
}
const Dt = {
  key: 0,
  class: "debug"
}, Jt = { id: "sc-configurator" }, Gt = { class: "configurator__group-legend" }, Lt = /* @__PURE__ */ et({
  __name: "Configurator",
  props: {
    currency: {
      type: String,
      default: "GBP"
    },
    url: {
      type: String,
      default: ""
    },
    spec: {
      type: Object,
      default: () => ({})
    },
    debug: {
      type: Boolean,
      default: !1
    },
    units: {
      type: String,
      default: "mm"
    },
    formatPrice: {
      type: Function,
      default: (n) => n.toFixed(2)
    },
    // groupKey -> picked material identifier (from MaterialGroupPicker).
    // When a panel references a `materialGroup` and the customer has
    // picked, the pick overrides the panel's declared material before
    // the shape is pushed into the calculator.
    materialPicks: {
      type: Object,
      default: () => ({})
    },
    // Per-group metadata harvested by the picker. Carries:
    //   • `availableThicknesses`: drives `optionsFrom` lookups on
    //     dependent inputs so the customer only sees thicknesses the
    //     picked material actually stocks.
    //   • `selectedThickness`: the customer's choice from the picker's
    //     inline thickness select. Wires the formula's
    //     `inputs.thickness` (or any `optionsFrom: { field: 't' }`
    //     input) directly to the picker so no separate slider needs
    //     to render to the customer.
    // Empty entry = no pick yet → static options + spec default apply.
    materialPickMeta: {
      type: Object,
      default: () => ({})
    },
    // Optional 3D visual assembly spec. When supplied alongside the
    // formula spec, the resolved panel dimensions are mapped into a
    // positioned scene and emitted via `scene` for a consumer (e.g.
    // ProductVisualiser) to render. No effect on pricing.
    assemblySpec: {
      type: Object,
      default: null
    },
    // CSS selector for a Teleport target where display-flagged inputs
    // (e.g. `display: 'visualizer'` for door open angle, drawer pull-
    // out) should render. When unset, those inputs fall back to the
    // inline form area like normal inputs.
    visualizerControlsTarget: {
      type: String,
      default: ""
    }
  },
  emits: ["hardware-result", "panel-result", "scene", "scene-error"],
  setup(n, { expose: e, emit: o }) {
    const r = ot(() => import("./ObjectViewer-IjOsrd1T.js")), t = n, a = o, i = tt("calculator"), c = G(() => i());
    let u = null;
    const s = H(null), f = H([]), m = H(!1), v = H(""), P = G(() => {
      const l = Object.entries(s.value?.inputs ?? {}), d = [];
      let p = 0;
      for (; p < l.length; ) {
        const [x, h] = l[p], g = h?.display === "visualizer" ? void 0 : h?.group;
        if (!g) {
          d.push({ kind: "single", item: { input: h, key: x, index: p } }), p++;
          continue;
        }
        const O = h?.groupLabel ?? g, S = h?.groupLayout === "row" ? "row" : "column", A = [];
        for (; p < l.length; ) {
          const [W, j] = l[p];
          if (j?.display === "visualizer" || j?.group !== g) break;
          A.push({ input: j, key: W, index: p }), p++;
        }
        d.push({ kind: "group", label: O, key: g, items: A, layout: S });
      }
      return d;
    }), _ = G(() => {
      if (!m.value || !f.value.length || f.value.every((d) => d.value === null)) return null;
      const l = Le();
      return rt(() => a("panel-result", l)), l;
    }), T = G(() => {
      if (!m.value || !f.value.length || f.value.every((d) => d.value === null)) return;
      const l = qe();
      return l && C(l);
    });
    function C(l) {
      const d = s.value?.hardware || {};
      if (!u) return l;
      const p = {}, x = ve();
      for (const [h, y] of Object.entries(l)) {
        const g = d[h]?.visibleWhen;
        if (g)
          try {
            const O = g.replace(/^=\s*/, "");
            if (!u.evaluateExpression(O, x)) continue;
          } catch {
            t.debug && console.warn("[hardware visibleWhen] eval failed for", h, g);
          }
        p[h] = y;
      }
      return p;
    }
    const U = G(() => {
      if (T.value)
        return Object.values(T.value).reduce((l, d) => l + d.totalCost, 0);
    });
    q([T, U], ([l, d]) => {
      m.value && a("hardware-result", l ?? null, d ?? 0);
    }, { immediate: !0 });
    const De = G(() => {
      if (!t.assemblySpec || !_.value) return null;
      try {
        const l = f.value.reduce((y, g, O) => {
          const S = Object.keys(s.value?.inputs ?? {})[O];
          return S && g.value !== null && g.value !== void 0 && (y[S] = g.value), y;
        }, {}), d = s.value?.panels || {}, p = t.materialPicks ?? {}, x = t.materialPickMeta ?? {}, h = {};
        for (const [y, g] of Object.entries(_.value)) {
          const S = (d[y] || {}).materialGroup, A = S ? x[S]?.code : void 0, W = S ? p[S] : void 0, j = A || W || g.material;
          h[y] = j && j !== g.material ? { ...g, material: String(j).toUpperCase() } : g;
        }
        return Vt(t.assemblySpec, h, l);
      } catch (l) {
        const d = l?.message ?? String(l);
        return console.warn("[Configurator] assembly resolve failed:", d), a("scene-error", d), null;
      }
    });
    q(De, (l) => {
      a("scene", l), l && a("scene-error", null);
    }), q([_, () => t.materialPicks, () => t.materialPickMeta], ([l]) => {
      if (!m.value || !l || !c.value || !c.value?.inputShapes) return;
      const d = (y) => y?.name ? y.name.toLowerCase() : "", p = new Map(
        c.value.inputShapes.map((y) => [d(y), y])
      ), x = /* @__PURE__ */ new Set(), h = s.value?.panels || {};
      for (const [y, g] of Object.entries(_.value)) {
        if (!g.name) continue;
        const O = g.q;
        if (O === !1 || O === null || O === void 0 || typeof O == "number" && O <= 0) continue;
        const S = d(g), A = p.get(S), j = (h[y] || {}).materialGroup, Ke = j ? t.materialPickMeta?.[j]?.code : void 0, Xe = j ? t.materialPicks?.[j] : void 0, ne = Ke || Xe || g.material || "", we = {
          ...g,
          name: g.name.toUpperCase() || A?.name.toUpperCase(),
          material: ne ? ne.toUpperCase?.() ?? ne : "",
          bandingOptions: g.bandingOptions || {},
          finishOptions: g.finishOptions || {},
          ...g.planingOptions !== void 0 ? { planingOptions: g.planingOptions } : {},
          orientationLock: g.orientationLock || null,
          notes: v.value,
          readonly: !0
        };
        if (A) {
          Object.assign(A, we), $e(A, g);
          for (const V of ["banding", "finish", "planing"])
            c.value.initExtrasOptions(A, V);
        } else {
          const V = c.value.createAndAddInputShape(we);
          if (V && typeof V == "object") {
            $e(V, g);
            for (const Ze of ["banding", "finish", "planing"])
              c.value.initExtrasOptions(V, Ze);
          }
        }
        x.add(S);
      }
      c.value.inputShapes = c.value.inputShapes.filter(
        (y) => x.has(d(y))
      );
    }, { immediate: !1, deep: !0 }), nt(() => He());
    const ge = (l) => {
      t.debug && console.log(l);
    }, Je = () => {
      f.value = Object.values(s.value.inputs).map((l) => ({
        value: l.default ?? null
      })), ye(t.materialPickMeta);
    }, Q = (l, d) => {
      f.value[l] && (f.value[l].value = d);
    };
    function Y(l) {
      const d = l?.optionsFrom;
      if (d?.source === "materialGroup" && d.field === "t" && d.group) {
        const p = t.materialPickMeta?.[d.group]?.availableThicknesses;
        if (Array.isArray(p) && p.length > 0)
          return p.map((x) => ({ value: x, label: `${x} mm` }));
      }
      return Array.isArray(l?.options) ? l.options : [];
    }
    function ee(l) {
      const d = l?.optionsFrom;
      return d?.source === "materialGroup" && d.field === "t" && !!d.group;
    }
    function ve() {
      return ct(
        Object.keys(s.value?.inputs ?? {}),
        f.value
      );
    }
    function Ge(l) {
      if (!l || typeof l != "string" || !u) return null;
      try {
        const d = l.replace(/^=\s*/, "");
        return !!u.evaluateExpression(d, ve());
      } catch {
        return null;
      }
    }
    function L(l) {
      const d = l?.notice;
      return !d || typeof d.text != "string" || !d.text || d.when && Ge(d.when) !== !0 ? "" : d.text;
    }
    function xe(l) {
      if (!L(l)) return "";
      const d = l?.notice?.severity;
      return d === "warning" || d === "error" ? d : "info";
    }
    function te(l) {
      const d = l?.visibleWhen;
      if (!d || typeof d != "string" || !u) return !0;
      try {
        const p = Object.keys(s.value?.inputs ?? {}), x = { inputs: {} };
        for (let g = 0; g < p.length; g++)
          x.inputs[p[g]] = f.value[g]?.value;
        const h = d.replace(/^=\s*/, "");
        return !!u.evaluateExpression(h, x);
      } catch {
        return !0;
      }
    }
    function ye(l) {
      if (!s.value || !f.value.length) return;
      const d = Object.values(s.value.inputs);
      for (let p = 0; p < d.length; p++) {
        const x = d[p], h = x?.optionsFrom;
        if (h?.source !== "materialGroup" || h.field !== "t" || !h.group) continue;
        const y = l?.[h.group], g = typeof y?.selectedThickness == "number" ? y.selectedThickness : null, O = Array.isArray(y?.availableThicknesses) && y.availableThicknesses.length > 0 ? Math.min(...y.availableThicknesses) : null;
        let S = g ?? O;
        if (S === null) continue;
        const A = Y(x).map((W) => W.value);
        A.length > 0 && !A.includes(S) && (S = typeof x?.default == "number" && A.includes(x.default) ? x.default : A[0]), f.value[p] && f.value[p].value !== S && (f.value[p].value = S);
      }
    }
    q(() => t.materialPickMeta, (l) => {
      ye(l);
    }, { deep: !0 });
    const Le = () => {
      try {
        return u.calculatePanelsFromFields(f.value);
      } catch (l) {
        return c.value.inputShapes.length = 0, console.error(l), null;
      }
    }, qe = () => {
      try {
        return u.calculateHardwareFromFields(f.value);
      } catch (l) {
        return console.error(l), null;
      }
    }, He = async () => {
      if (!t.url && !t.spec) {
        console.warn("SmartCut - No formula URL or JSON provided");
        return;
      }
      t.url ? (ge(`SmartCut - Formula calculator init from url: ${t.url}`), u = new fe({ url: t.url }), s.value = await u.getSpec()) : t.spec && (ge("SmartCut - Formula calculator init with JSON"), u = new fe({ spec: t.spec }), s.value = await u.getSpec()), Je(), m.value = !0;
    };
    return e({
      getFieldValues: () => {
        const l = Object.keys(s.value?.inputs ?? {}), d = {};
        return f.value.forEach((p, x) => {
          l[x] !== void 0 && (d[l[x]] = p.value);
        }), d;
      },
      setFieldValues: (l) => {
        Object.keys(s.value?.inputs ?? {}).forEach((p, x) => {
          p in l && Q(x, l[p]);
        });
      },
      // Customer-entered project name (renders as an input when the spec
      // has a non-empty `projectName` default). Used by Product.vue's
      // saved-configurations panel as the primary label source — falls
      // back to product name + dims when the spec doesn't expose a
      // project-name field.
      getProjectName: () => v.value,
      setProjectName: (l) => {
        v.value = l;
      }
    }), (l, d) => (F(), z(J, null, [
      n.debug ? (F(), z("div", Dt, [
        d[1] || (d[1] = re("div", null, "Developer information", -1)),
        ae(ie(r), {
          data: [_.value],
          paths: ["panelResult"]
        }, null, 8, ["data"])
      ])) : D("", !0),
      re("div", Jt, [
        s.value?.projectName ? (F(), Se(oe, {
          key: 0,
          id: "project-name",
          type: "string",
          label: ie(ke)("ecommerce.configurator.project_name"),
          placeholder: ie(ke)("ecommerce.configurator.project_name_placeholder"),
          value: v.value,
          "onUpdate:value": d[0] || (d[0] = (p) => v.value = p)
        }, null, 8, ["label", "placeholder", "value"])) : D("", !0),
        (F(!0), z(J, null, Ae(P.value, (p, x) => (F(), z(J, { key: x }, [
          p.kind === "single" && !ee(p.item.input) && te(p.item.input) ? (F(), Se(at, {
            key: 0,
            defer: "",
            to: n.visualizerControlsTarget || "body",
            disabled: p.item.input.display !== "visualizer" || !n.visualizerControlsTarget
          }, [
            ae(oe, {
              id: "formula-field-" + p.item.index,
              type: p.item.input.type,
              label: p.item.input.label,
              placeholder: p.item.input.label,
              min: p.item.input.min ?? 0,
              max: p.item.input.max ?? null,
              step: p.item.input.step ?? 1,
              default: p.item.input.default ?? 0,
              "true-value": 1,
              "false-value": 0,
              options: Y(p.item.input),
              output: p.item.input.type === "select" ? "number" : void 0,
              value: f.value[p.item.index]?.value,
              "onUpdate:value": (h) => Q(p.item.index, h)
            }, null, 8, ["id", "type", "label", "placeholder", "min", "max", "step", "default", "options", "output", "value", "onUpdate:value"]),
            L(p.item.input) ? (F(), z("p", {
              key: 0,
              class: se(["configurator__input-notice", `configurator__input-notice--${xe(p.item.input)}`])
            }, ce(L(p.item.input)), 3)) : D("", !0)
          ], 8, ["to", "disabled"])) : p.kind === "group" && p.items.some((h) => te(h.input) && !ee(h.input)) ? (F(), z("fieldset", {
            key: 1,
            class: se(["configurator__group", `configurator__group--${p.key}`, `configurator__group--layout-${p.layout}`])
          }, [
            re("legend", Gt, ce(p.label), 1),
            (F(!0), z(J, null, Ae(p.items, (h) => (F(), z(J, {
              key: h.index
            }, [
              !ee(h.input) && te(h.input) ? (F(), z(J, { key: 0 }, [
                ae(oe, {
                  id: "formula-field-" + h.index,
                  type: h.input.type,
                  label: h.input.label,
                  placeholder: h.input.label,
                  min: h.input.min ?? 0,
                  max: h.input.max ?? null,
                  step: h.input.step ?? 1,
                  default: h.input.default ?? 0,
                  "true-value": 1,
                  "false-value": 0,
                  options: Y(h.input),
                  output: h.input.type === "select" ? "number" : void 0,
                  value: f.value[h.index]?.value,
                  "onUpdate:value": (y) => Q(h.index, y)
                }, null, 8, ["id", "type", "label", "placeholder", "min", "max", "step", "default", "options", "output", "value", "onUpdate:value"]),
                L(h.input) ? (F(), z("p", {
                  key: 0,
                  class: se(["configurator__input-notice", `configurator__input-notice--${xe(h.input)}`])
                }, ce(L(h.input)), 3)) : D("", !0)
              ], 64)) : D("", !0)
            ], 64))), 128))
          ], 2)) : D("", !0)
        ], 64))), 128))
      ])
    ], 64));
  }
}), Yt = /* @__PURE__ */ it(Lt, [["__scopeId", "data-v-e214ed8c"]]);
export {
  Yt as default
};

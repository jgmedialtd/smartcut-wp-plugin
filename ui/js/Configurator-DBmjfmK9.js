import { F as ue, I as ne } from "./EcommerceCalculator-ClNeqZHE.js";
import { o as k, l as K, E as T, D as Oe, k as $, $ as He, n as je, a5 as fe, i as pe, I as Fe } from "./vendor-BnSUeZfc.js";
import { d as qe, U as Xe, w as L, h as Ke, o as F, e as N, j as re, i as oe, u as Ze, f as V, b as ye, F as D, C as we, a as Qe, c as J, g as H, n as Ye, y as ae, t as ie, T as et } from "./vendor-vue-QD0FJS8o.js";
import { _ as tt } from "./Launch-NSW_K3VG.js";
function nt(n, e) {
  const r = {};
  for (let o = 0; o < n.length; o++) {
    const t = e[o]?.value;
    if (typeof t == "number")
      r[n[o]] = t;
    else if (typeof t == "boolean")
      r[n[o]] = t ? 1 : 0;
    else if (t == null)
      r[n[o]] = 0;
    else if (typeof t == "string") {
      const a = Number(t);
      r[n[o]] = Number.isFinite(a) ? a : 0;
    } else
      r[n[o]] = 0;
  }
  return { inputs: r };
}
const R = pe(["x", "y", "z"]), B = pe(["top", "bottom", "left", "right", "front", "back"]), rt = k({
  l: R,
  w: R,
  t: R
}), w = T([je(), $()]), ot = k({ my: B, their: B }), at = k({ center: R }), it = k({ axis: R, offset: w }), st = ot.transform((n) => ({ kind: "edge", ...n })), ct = at.transform((n) => ({ kind: "center", ...n })), ut = it.transform((n) => ({ kind: "offset", ...n })), lt = T([
  st,
  ct,
  ut
]);
function be(n) {
  return n.kind === "edge";
}
function ke(n) {
  return n.kind === "center";
}
function Se(n) {
  return n.kind === "offset";
}
const Pe = k({
  to: $(),
  myFace: B,
  theirFace: B,
  align: K(lt).default([])
}), ft = k({
  count: w,
  between: fe([$(), $()]),
  spacing: Fe("even"),
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
}), pt = k({
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
}), dt = k({
  count: w,
  around: k({
    axis: R,
    center: w.default(0)
  }),
  spacing: w
}), mt = ft.transform((n) => ({ kind: "between", ...n })), ht = pt.transform((n) => ({ kind: "axis", ...n })), gt = dt.transform((n) => ({ kind: "around", ...n })), Re = T([
  mt,
  ht,
  gt
]), ze = T([
  Fe("origin"),
  k({
    at: fe([w, w, w])
  })
]), Ne = k({
  axis: R,
  distance: w
}), Ce = k({
  axis: R,
  degrees: w,
  pivot: T([
    B,
    fe([B, B])
  ]).optional()
}), de = {
  id: $().min(1),
  from: $(),
  // required — non-mirrored variants always reference a panel
  take: je().int().min(0).default(0),
  axes: rt.default({ l: "x", w: "y", t: "z" }),
  // Which of the panel's local axes the material's grain runs along.
  // Sheet goods inherit grain from the manufacturer's sheet — typically
  // along the long side. This selects whether the texture's "long" UV
  // axis aligns with the panel's `l` (default) or `w` axis when the
  // renderer maps the material image onto the cuboid faces. Faces
  // perpendicular to the grain axis show end-grain (no rotation needed);
  // faces parallel to it tile along the grain.
  grainAxis: pe(["l", "w"]).default("l"),
  rotation: Ce.optional(),
  translate: Ne.optional(),
  // Optional gate — when this expression evaluates to a falsy number, the
  // instance is skipped. Lets hardware-style instances follow a formula
  // input like `inputs.hasDrawer`. Same cascade as q=0 panels:
  // dependents (joined / mirrored) skip too.
  when: w.optional()
}, vt = k({
  ...de,
  anchor: ze
}), xt = k({
  ...de,
  join: Pe
}), yt = k({
  id: $().min(1),
  mirrorOf: $(),
  axis: R,
  // Mirror plane defaults to the world origin on the chosen axis.
  center: w.default(0)
}), wt = k({
  ...de,
  repeat: Re
}), bt = vt.transform((n) => ({ kind: "root", ...n })), kt = xt.transform((n) => ({ kind: "joined", ...n })), St = yt.transform((n) => ({ kind: "mirrored", ...n })), $t = wt.transform((n) => ({ kind: "repeated", ...n })), _e = T([
  bt,
  kt,
  St,
  $t
]), At = k({
  // Names of params the template expects. Available as `params.<name>` in
  // any formula expression inside the template.
  params: K($()).default([]),
  // Template instances can themselves be `instantiate` blocks — that's
  // how nested templates work. Expansion iterates until no instantiate
  // blocks remain.
  instances: K(He(() => T([_e, Ie]))).min(1)
}), Ie = k({
  id: $().min(1),
  instantiate: $().min(1),
  params: Oe($(), w).optional(),
  anchor: ze.optional(),
  join: Pe.optional(),
  mirrorOf: $().optional(),
  axis: R.optional(),
  center: w.optional(),
  repeat: Re.optional(),
  // Forwarded to the template root after expansion. Lets a drawer
  // template translate as a unit when drawerOpen changes (or rotate as
  // a unit, e.g. a door-shaped template).
  rotation: Ce.optional(),
  translate: Ne.optional(),
  when: w.optional()
}), Ot = k({
  name: $().optional(),
  templates: Oe($(), At).optional(),
  // Top-level instances may include `instantiate` blocks. Those expand to
  // concrete instances during resolver setup; the resolver sees only the
  // flat shape afterwards.
  instances: K(T([_e, Ie])).min(1)
});
function q(n) {
  return n && typeof n == "object" && typeof n.instantiate == "string";
}
function jt(n) {
  return n.kind === "root";
}
function se(n) {
  return n.kind === "joined";
}
function X(n) {
  return n.kind === "mirrored";
}
function ce(n) {
  return n.kind === "repeated";
}
class I extends Error {
  constructor(e) {
    super(e), this.name = "TemplateError";
  }
}
const $e = 32;
function Ft(n, e = {}) {
  if (!n.instances.some(q))
    return n;
  const o = n.templates ?? {};
  let t = n.instances;
  for (let a = 0; a < $e && t.some(q); a++) {
    const u = [];
    for (const l of t)
      if (q(l)) {
        const i = Pt(l, o, e);
        u.push(...i);
      } else
        u.push(l);
    if (t = u, a === $e - 1 && t.some(q))
      throw new I("Template expansion did not converge — check for recursive instantiation");
  }
  return {
    name: n.name,
    instances: t
  };
}
function Pt(n, e, r) {
  const o = e[n.instantiate];
  if (!o)
    throw new I(`Unknown template "${n.instantiate}" — known: ${Object.keys(e).join(", ") || "(none)"}`);
  return n.repeat ? Rt(n, o, r) : Me(n, o, n.id);
}
function Me(n, e, r) {
  const o = /* @__PURE__ */ new Set();
  for (const l of e.instances) {
    if (typeof l.id != "string")
      throw new I(`Template "${n.instantiate}" has an instance without an id`);
    if (o.has(l.id))
      throw new I(`Template "${n.instantiate}" has duplicate instance id "${l.id}"`);
    o.add(l.id);
  }
  const t = e.instances.filter((l) => l.anchor !== void 0);
  if (t.length !== 1)
    throw new I(`Template "${n.instantiate}" must have exactly one instance with \`anchor\` (the root). Found ${t.length}.`);
  const a = t[0].id, s = n.params ?? {}, u = [];
  for (const l of e.instances) {
    const i = zt(l, r, o, s);
    i.id === `${r}/${a}` && ((n.anchor !== void 0 || n.join !== void 0 || n.mirrorOf !== void 0) && (delete i.anchor, delete i.join, delete i.mirrorOf, delete i.repeat, n.anchor !== void 0 ? (i.anchor = n.anchor, i.kind = "root") : n.join !== void 0 ? (i.join = n.join, i.kind = "joined") : (i.mirrorOf = n.mirrorOf, n.axis !== void 0 && (i.axis = n.axis), n.center !== void 0 && (i.center = n.center), delete i.from, delete i.take, delete i.axes, i.kind = "mirrored")), n.translate !== void 0 && (i.translate = n.translate), n.rotation !== void 0 && (i.rotation = n.rotation), n.when !== void 0 && (i.when = n.when)), u.push(i);
  }
  return u;
}
function Rt(n, e, r) {
  const o = n.repeat;
  if ("between" in o)
    throw new I("Repeat-between of an `instantiate` is not supported — use repeat-axis or repeat-around. (Between needs already-placed parts; the template hasn't been resolved yet.)");
  const t = Math.max(0, Math.round(M(o.count, r)));
  if (t === 0)
    return [];
  const a = "axis" in o ? o.axis : o.around.axis, s = [];
  if ("around" in o) {
    const i = M(o.around.center ?? 0, r), d = M(o.spacing, r), h = t % 2 === 1;
    for (let v = 0; v < t; v++) {
      let z;
      if (h) {
        const P = Math.ceil(v / 2);
        z = (v === 0 ? 0 : v % 2 === 1 ? 1 : -1) * P * d;
      } else {
        const P = Math.floor(v / 2);
        z = (v % 2 === 0 ? -1 : 1) * (P + 0.5) * d;
      }
      s.push(i + z);
    }
  } else {
    const i = M(o.spacing, r), d = o.startAt !== void 0 ? M(o.startAt, r) : 0;
    for (let h = 0; h < t; h++)
      s.push(d + i * h);
  }
  const u = [0, 0, 0];
  "axis" in o && o.offset && (o.offset.x !== void 0 && (u[0] = M(o.offset.x, r)), o.offset.y !== void 0 && (u[1] = M(o.offset.y, r)), o.offset.z !== void 0 && (u[2] = M(o.offset.z, r)));
  const l = [];
  for (let i = 0; i < s.length; i++) {
    const d = [u[0], u[1], u[2]], h = a === "x" ? 0 : a === "y" ? 1 : 2;
    d[h] = s[i];
    const v = {
      id: `${n.id}@${i}`,
      instantiate: n.instantiate,
      params: n.params,
      anchor: { at: d },
      ...n.translate !== void 0 ? { translate: n.translate } : {},
      ...n.rotation !== void 0 ? { rotation: n.rotation } : {},
      ...n.when !== void 0 ? { when: n.when } : {}
    };
    l.push(...Me(v, e, v.id));
  }
  return l;
}
function zt(n, e, r, o) {
  const t = JSON.parse(JSON.stringify(n));
  return t.id = `${e}/${t.id}`, le(t, e, r, o), t;
}
function le(n, e, r, o) {
  if (n != null && typeof n == "object")
    for (const t of Object.keys(n)) {
      const a = n[t];
      if (typeof a == "string")
        n[t] = Ae(t, a, e, r, o);
      else if (Array.isArray(a))
        for (let s = 0; s < a.length; s++)
          typeof a[s] == "string" ? a[s] = Ae(t, a[s], e, r, o) : le(a[s], e, r, o);
      else typeof a == "object" && le(a, e, r, o);
    }
}
function Ae(n, e, r, o, t) {
  let a = e;
  return n === "to" || n === "mirrorOf" ? a = Te(a, r, o) : Nt(a) && (a = Ct(a, r, o)), a.startsWith("=") && (a = _t(a, t)), a;
}
function Te(n, e, r) {
  return n.startsWith("outer/") ? n.slice(6) : r.has(n) ? `${e}/${n}` : n;
}
function Nt(n) {
  return n.startsWith("=") ? !1 : !!/^([a-zA-Z_][\w-/]*)\.([a-z]+)$/.exec(n);
}
function Ct(n, e, r) {
  const o = /^([a-zA-Z_][\w-/]*)\.([a-z]+)$/.exec(n);
  if (!o)
    return n;
  const t = o[1], a = o[2];
  return `${Te(t, e, r)}.${a}`;
}
function _t(n, e) {
  return n.replace(/\bparams\.(\w+)/g, (r, o) => {
    if (!(o in e))
      return `params.${o}`;
    const t = e[o];
    return typeof t == "number" ? String(t) : `(${t.startsWith("=") ? t.slice(1).trim() : t})`;
  });
}
function M(n, e) {
  if (typeof n == "number")
    return n;
  const r = n.startsWith("=") ? n.slice(1).trim() : n.trim(), o = r.replace(/\binputs\.(\w+)\b/g, (s, u) => {
    if (!(u in e))
      throw new I(`Repeat-of-instantiate references unknown input "inputs.${u}"`);
    return String(e[u]);
  });
  if (!/^[\d+\-*/().\s<>=!&|?:]+$/.test(o))
    throw new I(`Repeat-of-instantiate position contains unsupported characters; got "${o}"`);
  const a = new Function(`return (${o})`)();
  if (typeof a != "number" || !Number.isFinite(a))
    throw new I(`Repeat-of-instantiate expression "${r}" did not evaluate to a finite number`);
  return a;
}
class b extends Error {
  constructor(e) {
    super(e), this.name = "AssemblyError";
  }
}
const _ = {
  right: { axis: "x", sign: 1 },
  left: { axis: "x", sign: -1 },
  top: { axis: "y", sign: 1 },
  bottom: { axis: "y", sign: -1 },
  front: { axis: "z", sign: 1 },
  back: { axis: "z", sign: -1 }
};
class It {
  calc;
  // Built lazily — input values + already-resolved part dimensions are
  // folded into the variable bag for formula evaluation in repeat/offset
  // expressions.
  variables;
  spec;
  panels;
  constructor(e, r, o = {}) {
    const t = Ot.parse(e);
    this.spec = Ft(t, o), this.panels = r, this.calc = new ue({}), this.variables = {
      inputs: o,
      panels: this.flattenPanelDims(r)
    };
  }
  resolve() {
    const e = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), o = [], t = [...this.spec.instances], a = t.length + 1;
    for (let s = 0; s < a && t.length; s++) {
      let u = !1;
      for (let l = t.length - 1; l >= 0; l--) {
        const i = t[l];
        if (!this.dependenciesReady(i, e, r))
          continue;
        if (this.shouldSkip(i, r)) {
          r.add(i.id), t.splice(l, 1), u = !0;
          continue;
        }
        const d = this.placeInstance(i, e);
        if (d.length === 0) {
          r.add(i.id), t.splice(l, 1), u = !0;
          continue;
        }
        for (const h of d) {
          if (e.has(h.id))
            throw new b(`Duplicate instance id: ${h.id}`);
          e.set(h.id, h), o.push(h);
        }
        t.splice(l, 1), u = !0;
      }
      if (!u)
        break;
    }
    if (t.length) {
      const s = t.map((u) => u.id).join(", ");
      throw new b(`Unresolved instances (cyclic or unknown reference): ${s}`);
    }
    return { parts: o };
  }
  // True when the instance's source has been skipped — propagates the skip
  // down the dependency tree so e.g. hinges attached to an absent door
  // disappear with it.
  shouldSkip(e, r) {
    if (se(e))
      return r.has(e.join.to);
    if (X(e))
      return !!r.has(e.mirrorOf);
    if (ce(e) && "between" in e.repeat) {
      const [o, t] = e.repeat.between;
      return r.has(o.split(".")[0]) || r.has(t.split(".")[0]);
    }
    return !1;
  }
  // ---- dependency check --------------------------------------------------
  dependenciesReady(e, r, o) {
    const t = (s) => r.has(s) || o.has(s), a = (s) => {
      if (t(s))
        return !0;
      const u = `${s}@`;
      for (const l of r.keys())
        if (l.startsWith(u))
          return !0;
      return !1;
    };
    if (se(e))
      return t(e.join.to);
    if (X(e))
      return a(e.mirrorOf);
    if (ce(e)) {
      const s = e.repeat;
      if ("between" in s) {
        const [u, l] = s.between;
        return t(u.split(".")[0]) && t(l.split(".")[0]);
      }
      return !0;
    }
    return !0;
  }
  // ---- placement dispatch ------------------------------------------------
  placeInstance(e, r) {
    if (!X(e)) {
      const o = e.from;
      if (o) {
        const a = this.panels[o], s = a?.q;
        if (a && (s === 0 || s === !1 || s === null || s === void 0))
          return [];
      }
      const t = e.when;
      if (t !== void 0 && !this.evalNumber(t))
        return [];
    }
    if (jt(e))
      return [this.placeRoot(e)];
    if (se(e))
      return [this.placeJoined(e, r)];
    if (X(e))
      return this.placeMirrored(e, r);
    if (ce(e))
      return this.placeRepeated(e, r);
    throw new b(`Unknown instance shape: ${JSON.stringify(e)}`);
  }
  placeRoot(e) {
    const r = this.computeHalfExtents(e), o = e.anchor === "origin" ? [0, 0, 0] : e.anchor.at.map((t) => this.evalNumber(t));
    return this.makePart(e, { x: o[0], y: o[1], z: o[2] }, r);
  }
  placeJoined(e, r) {
    const o = r.get(e.join.to);
    if (!o)
      throw new b(`Join target not placed: ${e.join.to}`);
    const t = this.computeHalfExtents(e), a = this.solveJoinPosition(e.join, t, o);
    return this.makePart(e, a, t);
  }
  placeMirrored(e, r) {
    const o = this.evalNumber(e.center ?? 0), t = e.axis, a = r.get(e.mirrorOf);
    if (a)
      return [this.mirrorOne(a, t, o, e.id)];
    const s = `${e.mirrorOf}@`, u = [...r.values()].filter((l) => l.id.startsWith(s));
    if (u.length === 0)
      throw new b(`Mirror source not placed: ${e.mirrorOf}`);
    return u.map((l, i) => this.mirrorOne(l, t, o, `${e.id}@${i}`));
  }
  mirrorOne(e, r, o, t) {
    const a = { ...e.position };
    return a[r] = 2 * o - e.position[r], {
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
  placeRepeated(e, r) {
    const o = this.computeHalfExtents(e), t = Math.max(0, Math.round(this.evalNumber(e.repeat.count)));
    return t === 0 ? [] : this.solveRepeatPositions(e.repeat, t, o, r).map((s, u) => this.makePart(e, s, o, `${e.id}@${u}`));
  }
  // ---- join math ---------------------------------------------------------
  // Given the contact face pair plus 0-2 alignment rules, solve the world
  // position of THIS part's centre. The contact axis is fixed by the faces;
  // the other two axes are pinned by the alignment rules (or default to
  // "centered" if unspecified).
  solveJoinPosition(e, r, o) {
    const t = _[e.myFace], a = _[e.theirFace];
    if (t.axis !== a.axis)
      throw new b(`Contact faces must share an axis: ${e.myFace}↔${e.theirFace}`);
    if (t.sign === a.sign)
      throw new b(`Contact faces must oppose, got ${e.myFace}↔${e.theirFace}`);
    const s = t.axis, l = o.position[s] + a.sign * o.half[s] - t.sign * r[s], i = { x: 0, y: 0, z: 0 };
    i[s] = l;
    const d = /* @__PURE__ */ new Map();
    for (const h of e.align) {
      const v = this.axisOfRule(h);
      if (v === s)
        throw new b(`Alignment axis ${v} clashes with contact axis ${s}`);
      if (d.has(v))
        throw new b(`Multiple alignment rules for axis ${v}`);
      d.set(v, h);
    }
    for (const h of ["x", "y", "z"]) {
      if (h === s)
        continue;
      const v = d.get(h);
      i[h] = this.applyAlignRule(v, h, r, o);
    }
    return i;
  }
  // Determine which world axis a rule constrains. Edge-mode rules infer
  // the axis from face names (faces must share an axis); centre and
  // offset rules name it explicitly.
  axisOfRule(e) {
    if (Se(e))
      return e.axis;
    if (ke(e))
      return e.center;
    if (!be(e))
      throw new b("Unknown AlignRule variant");
    const r = _[e.my].axis, o = _[e.their].axis;
    if (r !== o)
      throw new b(`Edge alignment faces must share an axis: my "${e.my}" (${r}) vs their "${e.their}" (${o})`);
    return r;
  }
  applyAlignRule(e, r, o, t) {
    if (!e || ke(e))
      return t.position[r];
    if (Se(e))
      return t.position[r] + this.evalNumber(e.offset);
    if (!be(e))
      throw new b("Unknown AlignRule variant");
    const a = _[e.my].sign, s = _[e.their].sign;
    return t.position[r] + s * t.half[r] - a * o[r];
  }
  // ---- repeat math -------------------------------------------------------
  solveRepeatPositions(e, r, o, t) {
    return "between" in e ? this.repeatBetween(e, r, o, t) : "around" in e ? this.repeatAround(e, r, o) : this.repeatAxis(e, r, o);
  }
  repeatBetween(e, r, o, t) {
    const [a, s] = e.between, u = this.resolveAnchor(a, t), l = this.resolveAnchor(s, t);
    if (u.axis !== l.axis)
      throw new b(`Repeat anchors must share an axis: ${a} (${u.axis}) vs ${s} (${l.axis})`);
    const i = u.axis, h = (l.coord - u.coord) / (r + 1), v = [], z = this.midpointForOtherAxes(i, u, l, t), P = e.offset;
    for (const C of ["x", "y", "z"]) {
      if (C === i)
        continue;
      const U = P?.[C];
      U !== void 0 && (z[C] = this.evalNumber(U));
    }
    const E = e.shift !== void 0 ? this.evalNumber(e.shift) : 0;
    for (let C = 1; C <= r; C++) {
      const U = { ...z };
      U[i] = u.coord + h * C + E, v.push(U);
    }
    return v;
  }
  repeatAxis(e, r, o) {
    const t = e.axis, a = this.evalNumber(e.spacing), s = this.evalNumber(e.startAt), u = { x: 0, y: 0, z: 0 }, l = e.offset;
    if (l)
      for (const d of ["x", "y", "z"]) {
        if (d === t)
          continue;
        const h = l[d];
        h !== void 0 && (u[d] = this.evalNumber(h));
      }
    const i = [];
    for (let d = 0; d < r; d++) {
      const h = { ...u };
      h[t] = s + a * d, i.push(h);
    }
    return i;
  }
  repeatAround(e, r, o) {
    const t = e.around.axis, a = this.evalNumber(e.around.center), s = this.evalNumber(e.spacing), u = [], l = r % 2 === 1;
    for (let i = 0; i < r; i++) {
      const d = { x: 0, y: 0, z: 0 };
      let h;
      if (l) {
        const v = Math.ceil(i / 2);
        h = (i === 0 ? 0 : i % 2 === 1 ? 1 : -1) * v * s;
      } else {
        const v = Math.floor(i / 2);
        h = (i % 2 === 0 ? -1 : 1) * (v + 0.5) * s;
      }
      d[t] = a + h, u.push(d);
    }
    return u;
  }
  resolveAnchor(e, r) {
    const [o, t] = e.split("."), a = r.get(o);
    if (!a)
      throw new b(`Anchor references unknown instance: ${e}`);
    if (!t)
      throw new b(`Anchor missing face: ${e}`);
    const s = _[t];
    if (!s)
      throw new b(`Unknown face in anchor: ${e}`);
    const u = a.position[s.axis] + s.sign * a.half[s.axis];
    return { axis: s.axis, coord: u, part: a };
  }
  // For a between-repeat, the non-spacing axes default to the midpoint of
  // the two anchor parts so e.g. shelves naturally centre between the
  // cabinet's left and right sides.
  midpointForOtherAxes(e, r, o, t) {
    const a = { x: 0, y: 0, z: 0 };
    for (const s of ["x", "y", "z"])
      s !== e && (a[s] = (r.part.position[s] + o.part.position[s]) / 2);
    return a;
  }
  // ---- helpers -----------------------------------------------------------
  computeHalfExtents(e) {
    const r = e.axes;
    if ((/* @__PURE__ */ new Set([r.l, r.w, r.t])).size !== 3)
      throw new b(`Axes must be distinct, got l=${r.l} w=${r.w} t=${r.t}`);
    const t = this.panels[e.from];
    if (!t)
      throw new b(`No formula panel "${e.from}" — known: ${Object.keys(this.panels).join(", ")}`);
    const a = { x: 0, y: 0, z: 0 };
    return a[r.l] = t.l / 2, a[r.w] = t.w / 2, a[r.t] = t.t / 2, a;
  }
  makePart(e, r, o, t) {
    if (e.translate) {
      const d = e.translate.axis;
      r = { ...r }, r[d] += this.evalNumber(e.translate.distance);
    }
    const a = this.resolveRotation(e, r, o), s = this.panels[e.from], u = e.grainAxis === "w" ? "w" : "l", i = (e.axes ?? { l: "x", w: "y", t: "z" })[u] ?? "x";
    return {
      id: t ?? e.id,
      from: e.from ?? "",
      take: e.take ?? 0,
      material: s?.material ?? "",
      name: s?.name ?? e.from ?? "",
      position: r,
      half: o,
      rotation: a,
      grainWorldAxis: i
    };
  }
  resolveRotation(e, r, o) {
    if (!e.rotation)
      return;
    const t = e.rotation.axis, a = this.evalNumber(e.rotation.degrees) * Math.PI / 180, s = { x: r.x, y: r.y, z: r.z }, u = e.rotation.pivot;
    if (typeof u == "string") {
      const l = _[u];
      s[l.axis] += l.sign * o[l.axis];
    } else if (Array.isArray(u)) {
      const l = /* @__PURE__ */ new Set();
      for (const i of u) {
        const d = _[i];
        if (d.axis === t)
          throw new b(`Pivot face "${i}" cannot share the rotation axis (${t})`);
        if (l.has(d.axis))
          throw new b(`Pivot faces ${u[0]} and ${u[1]} must be on different axes`);
        l.add(d.axis), s[d.axis] = r[d.axis] + d.sign * o[d.axis];
      }
    }
    return { axis: t, radians: a, pivot: s };
  }
  flattenPanelDims(e) {
    const r = {};
    for (const [o, t] of Object.entries(e))
      r[o] = { l: t.l, w: t.w, t: t.t, q: t.q };
    return r;
  }
  evalNumber(e) {
    if (typeof e == "number")
      return e;
    if (typeof e != "string")
      throw new b(`Expected number or formula, got ${typeof e}`);
    const r = e.startsWith("=") ? e.slice(1).trim() : e.trim(), o = this.flattenForExpr(), t = this.calc.evaluateExpression(r, o);
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
function Mt(n, e, r = {}) {
  return new It(n, e, r).resolve();
}
const Tt = {
  key: 0,
  class: "debug"
}, Et = { id: "sc-configurator" }, Ut = { class: "configurator__group-legend" }, Bt = /* @__PURE__ */ qe({
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
  setup(n, { expose: e, emit: r }) {
    const o = Qe(() => import("./EcommerceCalculator-ClNeqZHE.js").then((c) => c.w)), t = n, a = r, s = Xe("calculator"), u = J(() => s());
    let l = null;
    const i = H(null), d = H([]), h = H(!1), v = H(""), z = J(() => {
      const c = Object.entries(i.value?.inputs ?? {}), p = [];
      let f = 0;
      for (; f < c.length; ) {
        const [x, m] = c[f], g = m?.display === "visualizer" ? void 0 : m?.group;
        if (!g) {
          p.push({ kind: "single", item: { input: m, key: x, index: f } }), f++;
          continue;
        }
        const A = m?.groupLabel ?? g, S = m?.groupLayout === "row" ? "row" : "column", O = [];
        for (; f < c.length; ) {
          const [W, j] = c[f];
          if (j?.display === "visualizer" || j?.group !== g) break;
          O.push({ input: j, key: W, index: f }), f++;
        }
        p.push({ kind: "group", label: A, key: g, items: O, layout: S });
      }
      return p;
    }), P = J(() => {
      if (!h.value || !d.value.length || d.value.every((p) => p.value === null)) return null;
      const c = We();
      return Ye(() => a("panel-result", c)), c;
    }), E = J(() => {
      if (!h.value || !d.value.length || d.value.every((p) => p.value === null)) return;
      const c = Ve();
      return c && C(c);
    });
    function C(c) {
      const p = i.value?.hardware || {};
      if (!l) return c;
      const f = {}, x = he();
      for (const [m, y] of Object.entries(c)) {
        const g = p[m]?.visibleWhen;
        if (g)
          try {
            const A = g.replace(/^=\s*/, "");
            if (!l.evaluateExpression(A, x)) continue;
          } catch {
            t.debug && console.warn("[hardware visibleWhen] eval failed for", m, g);
          }
        f[m] = y;
      }
      return f;
    }
    const U = J(() => {
      if (E.value)
        return Object.values(E.value).reduce((c, p) => c + p.totalCost, 0);
    });
    L([E, U], ([c, p]) => {
      h.value && a("hardware-result", c ?? null, p ?? 0);
    }, { immediate: !0 });
    const Ee = J(() => {
      if (!t.assemblySpec || !P.value) return null;
      try {
        const c = d.value.reduce((y, g, A) => {
          const S = Object.keys(i.value?.inputs ?? {})[A];
          return S && g.value !== null && g.value !== void 0 && (y[S] = g.value), y;
        }, {}), p = i.value?.panels || {}, f = t.materialPicks ?? {}, x = t.materialPickMeta ?? {}, m = {};
        for (const [y, g] of Object.entries(P.value)) {
          const S = (p[y] || {}).materialGroup, O = S ? x[S]?.code : void 0, W = S ? f[S] : void 0, j = O || W || g.material;
          m[y] = j && j !== g.material ? { ...g, material: String(j).toUpperCase() } : g;
        }
        return Mt(t.assemblySpec, m, c);
      } catch (c) {
        const p = c?.message ?? String(c);
        return console.warn("[Configurator] assembly resolve failed:", p), a("scene-error", p), null;
      }
    });
    L(Ee, (c) => {
      a("scene", c), c && a("scene-error", null);
    }), L([P, () => t.materialPicks, () => t.materialPickMeta], ([c]) => {
      if (!h.value || !c || !u.value || !u.value?.inputShapes) return;
      const p = (y) => y?.name ? y.name.toLowerCase() : "", f = new Map(
        u.value.inputShapes.map((y) => [p(y), y])
      ), x = /* @__PURE__ */ new Set(), m = i.value?.panels || {};
      for (const [y, g] of Object.entries(P.value)) {
        if (!g.name) continue;
        const A = g.q;
        if (A === !1 || A === null || A === void 0 || typeof A == "number" && A <= 0) continue;
        const S = p(g), O = f.get(S), j = (m[y] || {}).materialGroup, Je = j ? t.materialPickMeta?.[j]?.code : void 0, Ge = j ? t.materialPicks?.[j] : void 0, te = Je || Ge || g.material || "", xe = {
          ...g,
          name: g.name.toUpperCase() || O?.name.toUpperCase(),
          material: te ? te.toUpperCase?.() ?? te : "",
          bandingOptions: g.bandingOptions || {},
          finishOptions: g.finishOptions || {},
          ...g.planingOptions !== void 0 ? { planingOptions: g.planingOptions } : {},
          orientationLock: g.orientationLock || null,
          notes: v.value,
          readonly: !0
        };
        if (O) {
          Object.assign(O, xe);
          for (const Le of ["banding", "finish", "planing"])
            u.value.initExtrasOptions(O, Le);
        } else
          u.value.createAndAddInputShape(xe);
        x.add(S);
      }
      u.value.inputShapes = u.value.inputShapes.filter(
        (y) => x.has(p(y))
      );
    }, { immediate: !1, deep: !0 }), Ke(() => De());
    const me = (c) => {
      t.debug && console.log(c);
    }, Ue = () => {
      d.value = Object.values(i.value.inputs).map((c) => ({
        value: c.default ?? null
      })), ve(t.materialPickMeta);
    }, Z = (c, p) => {
      d.value[c] && (d.value[c].value = p);
    };
    function Q(c) {
      const p = c?.optionsFrom;
      if (p?.source === "materialGroup" && p.field === "t" && p.group) {
        const f = t.materialPickMeta?.[p.group]?.availableThicknesses;
        if (Array.isArray(f) && f.length > 0)
          return f.map((x) => ({ value: x, label: `${x} mm` }));
      }
      return Array.isArray(c?.options) ? c.options : [];
    }
    function Y(c) {
      const p = c?.optionsFrom;
      return p?.source === "materialGroup" && p.field === "t" && !!p.group;
    }
    function he() {
      return nt(
        Object.keys(i.value?.inputs ?? {}),
        d.value
      );
    }
    function Be(c) {
      if (!c || typeof c != "string" || !l) return null;
      try {
        const p = c.replace(/^=\s*/, "");
        return !!l.evaluateExpression(p, he());
      } catch {
        return null;
      }
    }
    function G(c) {
      const p = c?.notice;
      return !p || typeof p.text != "string" || !p.text || p.when && Be(p.when) !== !0 ? "" : p.text;
    }
    function ge(c) {
      if (!G(c)) return "";
      const p = c?.notice?.severity;
      return p === "warning" || p === "error" ? p : "info";
    }
    function ee(c) {
      const p = c?.visibleWhen;
      if (!p || typeof p != "string" || !l) return !0;
      try {
        const f = Object.keys(i.value?.inputs ?? {}), x = { inputs: {} };
        for (let g = 0; g < f.length; g++)
          x.inputs[f[g]] = d.value[g]?.value;
        const m = p.replace(/^=\s*/, "");
        return !!l.evaluateExpression(m, x);
      } catch {
        return !0;
      }
    }
    function ve(c) {
      if (!i.value || !d.value.length) return;
      const p = Object.values(i.value.inputs);
      for (let f = 0; f < p.length; f++) {
        const x = p[f], m = x?.optionsFrom;
        if (m?.source !== "materialGroup" || m.field !== "t" || !m.group) continue;
        const y = c?.[m.group], g = typeof y?.selectedThickness == "number" ? y.selectedThickness : null, A = Array.isArray(y?.availableThicknesses) && y.availableThicknesses.length > 0 ? Math.min(...y.availableThicknesses) : null;
        let S = g ?? A;
        if (S === null) continue;
        const O = Q(x).map((W) => W.value);
        O.length > 0 && !O.includes(S) && (S = typeof x?.default == "number" && O.includes(x.default) ? x.default : O[0]), d.value[f] && d.value[f].value !== S && (d.value[f].value = S);
      }
    }
    L(() => t.materialPickMeta, (c) => {
      ve(c);
    }, { deep: !0 });
    const We = () => {
      try {
        return l.calculatePanelsFromFields(d.value);
      } catch (c) {
        return u.value.inputShapes.length = 0, console.error(c), null;
      }
    }, Ve = () => {
      try {
        return l.calculateHardwareFromFields(d.value);
      } catch (c) {
        return console.error(c), null;
      }
    }, De = async () => {
      if (!t.url && !t.spec) {
        console.warn("SmartCut - No formula URL or JSON provided");
        return;
      }
      t.url ? (me(`SmartCut - Formula calculator init from url: ${t.url}`), l = new ue({ url: t.url }), i.value = await l.getSpec()) : t.spec && (me("SmartCut - Formula calculator init with JSON"), l = new ue({ spec: t.spec }), i.value = await l.getSpec()), Ue(), h.value = !0;
    };
    return e({
      getFieldValues: () => {
        const c = Object.keys(i.value?.inputs ?? {}), p = {};
        return d.value.forEach((f, x) => {
          c[x] !== void 0 && (p[c[x]] = f.value);
        }), p;
      },
      setFieldValues: (c) => {
        Object.keys(i.value?.inputs ?? {}).forEach((f, x) => {
          f in c && Z(x, c[f]);
        });
      },
      // Customer-entered project name (renders as an input when the spec
      // has a non-empty `projectName` default). Used by Product.vue's
      // saved-configurations panel as the primary label source — falls
      // back to product name + dims when the spec doesn't expose a
      // project-name field.
      getProjectName: () => v.value,
      setProjectName: (c) => {
        v.value = c;
      }
    }), (c, p) => (F(), N(D, null, [
      n.debug ? (F(), N("div", Tt, [
        p[1] || (p[1] = re("div", null, "Developer information", -1)),
        oe(Ze(o), {
          data: [P.value],
          paths: ["panelResult"]
        }, null, 8, ["data"])
      ])) : V("", !0),
      re("div", Et, [
        i.value?.projectName ? (F(), ye(ne, {
          key: 0,
          id: "project-name",
          type: "string",
          label: "Project name",
          placeholder: "Name",
          value: v.value,
          "onUpdate:value": p[0] || (p[0] = (f) => v.value = f)
        }, null, 8, ["value"])) : V("", !0),
        (F(!0), N(D, null, we(z.value, (f, x) => (F(), N(D, { key: x }, [
          f.kind === "single" && !Y(f.item.input) && ee(f.item.input) ? (F(), ye(et, {
            key: 0,
            defer: "",
            to: n.visualizerControlsTarget || "body",
            disabled: f.item.input.display !== "visualizer" || !n.visualizerControlsTarget
          }, [
            oe(ne, {
              id: "formula-field-" + f.item.index,
              type: f.item.input.type,
              label: f.item.input.label,
              placeholder: f.item.input.label,
              min: f.item.input.min ?? 0,
              max: f.item.input.max ?? null,
              step: f.item.input.step ?? 1,
              default: f.item.input.default ?? 0,
              "true-value": 1,
              "false-value": 0,
              options: Q(f.item.input),
              output: f.item.input.type === "select" ? "number" : void 0,
              value: d.value[f.item.index]?.value,
              "onUpdate:value": (m) => Z(f.item.index, m)
            }, null, 8, ["id", "type", "label", "placeholder", "min", "max", "step", "default", "options", "output", "value", "onUpdate:value"]),
            G(f.item.input) ? (F(), N("p", {
              key: 0,
              class: ae(["configurator__input-notice", `configurator__input-notice--${ge(f.item.input)}`])
            }, ie(G(f.item.input)), 3)) : V("", !0)
          ], 8, ["to", "disabled"])) : f.kind === "group" && f.items.some((m) => ee(m.input) && !Y(m.input)) ? (F(), N("fieldset", {
            key: 1,
            class: ae(["configurator__group", `configurator__group--${f.key}`, `configurator__group--layout-${f.layout}`])
          }, [
            re("legend", Ut, ie(f.label), 1),
            (F(!0), N(D, null, we(f.items, (m) => (F(), N(D, {
              key: m.index
            }, [
              !Y(m.input) && ee(m.input) ? (F(), N(D, { key: 0 }, [
                oe(ne, {
                  id: "formula-field-" + m.index,
                  type: m.input.type,
                  label: m.input.label,
                  placeholder: m.input.label,
                  min: m.input.min ?? 0,
                  max: m.input.max ?? null,
                  step: m.input.step ?? 1,
                  default: m.input.default ?? 0,
                  "true-value": 1,
                  "false-value": 0,
                  options: Q(m.input),
                  output: m.input.type === "select" ? "number" : void 0,
                  value: d.value[m.index]?.value,
                  "onUpdate:value": (y) => Z(m.index, y)
                }, null, 8, ["id", "type", "label", "placeholder", "min", "max", "step", "default", "options", "output", "value", "onUpdate:value"]),
                G(m.input) ? (F(), N("p", {
                  key: 0,
                  class: ae(["configurator__input-notice", `configurator__input-notice--${ge(m.input)}`])
                }, ie(G(m.input)), 3)) : V("", !0)
              ], 64)) : V("", !0)
            ], 64))), 128))
          ], 2)) : V("", !0)
        ], 64))), 128))
      ])
    ], 64));
  }
}), Gt = /* @__PURE__ */ tt(Bt, [["__scopeId", "data-v-622d959c"]]);
export {
  Gt as default
};

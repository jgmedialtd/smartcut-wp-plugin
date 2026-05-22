import { F as le, I as ne } from "./EcommerceCalculator-D8U1LupG.js";
import { j as k, q as K, k as Oe, n as A, v as T, t as fe, A as je, C as Fe, D as pe, E as He } from "./vendor-CN6j6kBQ.js";
import { d as qe, R as Xe, w as L, r as H, m as V, f as Ke, c as N, o as F, a as D, b as oe, i as re, u as Ze, y as Qe, h as ye, F as J, k as we, H as Ye, l as ae, t as ie, p as et } from "./vendor-vue-Tt3m9hlc.js";
import { _ as tt } from "./Launch-Br9fQuik.js";
function nt(n, e) {
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
const R = fe(["x", "y", "z"]), B = fe(["top", "bottom", "left", "right", "front", "back"]), ot = k({
  l: R,
  w: R,
  t: R
}), w = T([je(), A()]), rt = k({ my: B, their: B }), at = k({ center: R }), it = k({ axis: R, offset: w }), st = rt.transform((n) => ({ kind: "edge", ...n })), ct = at.transform((n) => ({ kind: "center", ...n })), lt = it.transform((n) => ({ kind: "offset", ...n })), ut = T([
  st,
  ct,
  lt
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
  to: A(),
  myFace: B,
  theirFace: B,
  align: K(ut).default([])
}), ft = k({
  count: w,
  between: pe([A(), A()]),
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
}), mt = ft.transform((n) => ({ kind: "between", ...n })), ht = pt.transform((n) => ({ kind: "axis", ...n })), vt = dt.transform((n) => ({ kind: "around", ...n })), Re = T([
  mt,
  ht,
  vt
]), ze = T([
  Fe("origin"),
  k({
    at: pe([w, w, w])
  })
]), Ne = k({
  axis: R,
  distance: w
}), Ce = k({
  axis: R,
  degrees: w,
  pivot: T([
    B,
    pe([B, B])
  ]).optional()
}), de = {
  id: A().min(1),
  from: A(),
  // required — non-mirrored variants always reference a panel
  take: je().int().min(0).default(0),
  axes: ot.default({ l: "x", w: "y", t: "z" }),
  // Which of the panel's local axes the material's grain runs along.
  // Sheet goods inherit grain from the manufacturer's sheet — typically
  // along the long side. This selects whether the texture's "long" UV
  // axis aligns with the panel's `l` (default) or `w` axis when the
  // renderer maps the material image onto the cuboid faces. Faces
  // perpendicular to the grain axis show end-grain (no rotation needed);
  // faces parallel to it tile along the grain.
  grainAxis: fe(["l", "w"]).default("l"),
  rotation: Ce.optional(),
  translate: Ne.optional(),
  // Optional gate — when this expression evaluates to a falsy number, the
  // instance is skipped. Lets hardware-style instances follow a formula
  // input like `inputs.hasDrawer`. Same cascade as q=0 panels:
  // dependents (joined / mirrored) skip too.
  when: w.optional()
}, gt = k({
  ...de,
  anchor: ze
}), xt = k({
  ...de,
  join: Pe
}), yt = k({
  id: A().min(1),
  mirrorOf: A(),
  axis: R,
  // Mirror plane defaults to the world origin on the chosen axis.
  center: w.default(0)
}), wt = k({
  ...de,
  repeat: Re
}), bt = gt.transform((n) => ({ kind: "root", ...n })), kt = xt.transform((n) => ({ kind: "joined", ...n })), St = yt.transform((n) => ({ kind: "mirrored", ...n })), At = wt.transform((n) => ({ kind: "repeated", ...n })), _e = T([
  bt,
  kt,
  St,
  At
]), $t = k({
  // Names of params the template expects. Available as `params.<name>` in
  // any formula expression inside the template.
  params: K(A()).default([]),
  // Template instances can themselves be `instantiate` blocks — that's
  // how nested templates work. Expansion iterates until no instantiate
  // blocks remain.
  instances: K(
    He(() => T([_e, Ie]))
  ).min(1)
}), Ie = k({
  id: A().min(1),
  instantiate: A().min(1),
  params: Oe(A(), w).optional(),
  anchor: ze.optional(),
  join: Pe.optional(),
  mirrorOf: A().optional(),
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
  name: A().optional(),
  templates: Oe(A(), $t).optional(),
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
const Ae = 32;
function Ft(n, e = {}) {
  if (!n.instances.some(q)) return n;
  const r = n.templates ?? {};
  let t = n.instances;
  for (let a = 0; a < Ae && t.some(q); a++) {
    const l = [];
    for (const u of t)
      if (q(u)) {
        const i = Pt(u, r, e);
        l.push(...i);
      } else
        l.push(u);
    if (t = l, a === Ae - 1 && t.some(q))
      throw new I(
        "Template expansion did not converge — check for recursive instantiation"
      );
  }
  return {
    name: n.name,
    instances: t
  };
}
function Pt(n, e, o) {
  const r = e[n.instantiate];
  if (!r)
    throw new I(
      `Unknown template "${n.instantiate}" — known: ${Object.keys(e).join(", ") || "(none)"}`
    );
  return n.repeat ? Rt(n, r, o) : Me(n, r, n.id);
}
function Me(n, e, o) {
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
  const a = t[0].id, s = n.params ?? {}, l = [];
  for (const u of e.instances) {
    const i = zt(u, o, r, s);
    i.id === `${o}/${a}` && ((n.anchor !== void 0 || n.join !== void 0 || n.mirrorOf !== void 0) && (delete i.anchor, delete i.join, delete i.mirrorOf, delete i.repeat, n.anchor !== void 0 ? (i.anchor = n.anchor, i.kind = "root") : n.join !== void 0 ? (i.join = n.join, i.kind = "joined") : (i.mirrorOf = n.mirrorOf, n.axis !== void 0 && (i.axis = n.axis), n.center !== void 0 && (i.center = n.center), delete i.from, delete i.take, delete i.axes, i.kind = "mirrored")), n.translate !== void 0 && (i.translate = n.translate), n.rotation !== void 0 && (i.rotation = n.rotation), n.when !== void 0 && (i.when = n.when)), l.push(i);
  }
  return l;
}
function Rt(n, e, o) {
  const r = n.repeat;
  if ("between" in r)
    throw new I(
      "Repeat-between of an `instantiate` is not supported — use repeat-axis or repeat-around. (Between needs already-placed parts; the template hasn't been resolved yet.)"
    );
  const t = Math.max(0, Math.round(M(r.count, o)));
  if (t === 0) return [];
  const a = "axis" in r ? r.axis : r.around.axis, s = [];
  if ("around" in r) {
    const i = M(r.around.center ?? 0, o), d = M(r.spacing, o), h = t % 2 === 1;
    for (let g = 0; g < t; g++) {
      let z;
      if (h) {
        const P = Math.ceil(g / 2);
        z = (g === 0 ? 0 : g % 2 === 1 ? 1 : -1) * P * d;
      } else {
        const P = Math.floor(g / 2);
        z = (g % 2 === 0 ? -1 : 1) * (P + 0.5) * d;
      }
      s.push(i + z);
    }
  } else {
    const i = M(r.spacing, o), d = r.startAt !== void 0 ? M(r.startAt, o) : 0;
    for (let h = 0; h < t; h++) s.push(d + i * h);
  }
  const l = [0, 0, 0];
  "axis" in r && r.offset && (r.offset.x !== void 0 && (l[0] = M(r.offset.x, o)), r.offset.y !== void 0 && (l[1] = M(r.offset.y, o)), r.offset.z !== void 0 && (l[2] = M(r.offset.z, o)));
  const u = [];
  for (let i = 0; i < s.length; i++) {
    const d = [l[0], l[1], l[2]], h = a === "x" ? 0 : a === "y" ? 1 : 2;
    d[h] = s[i];
    const g = {
      id: `${n.id}@${i}`,
      instantiate: n.instantiate,
      params: n.params,
      anchor: { at: d },
      ...n.translate !== void 0 ? { translate: n.translate } : {},
      ...n.rotation !== void 0 ? { rotation: n.rotation } : {},
      ...n.when !== void 0 ? { when: n.when } : {}
    };
    u.push(...Me(g, e, g.id));
  }
  return u;
}
function zt(n, e, o, r) {
  const t = JSON.parse(JSON.stringify(n));
  return t.id = `${e}/${t.id}`, ue(t, e, o, r), t;
}
function ue(n, e, o, r) {
  if (n != null && typeof n == "object")
    for (const t of Object.keys(n)) {
      const a = n[t];
      if (typeof a == "string")
        n[t] = $e(t, a, e, o, r);
      else if (Array.isArray(a))
        for (let s = 0; s < a.length; s++)
          typeof a[s] == "string" ? a[s] = $e(t, a[s], e, o, r) : ue(a[s], e, o, r);
      else typeof a == "object" && ue(a, e, o, r);
    }
}
function $e(n, e, o, r, t) {
  let a = e;
  return n === "to" || n === "mirrorOf" ? a = Te(a, o, r) : Nt(a) && (a = Ct(a, o, r)), a.startsWith("=") && (a = _t(a, t)), a;
}
function Te(n, e, o) {
  return n.startsWith("outer/") ? n.slice(6) : o.has(n) ? `${e}/${n}` : n;
}
function Nt(n) {
  return n.startsWith("=") ? !1 : !!/^([a-zA-Z_][\w-/]*)\.([a-z]+)$/.exec(n);
}
function Ct(n, e, o) {
  const r = /^([a-zA-Z_][\w-/]*)\.([a-z]+)$/.exec(n);
  if (!r) return n;
  const t = r[1], a = r[2];
  return `${Te(t, e, o)}.${a}`;
}
function _t(n, e) {
  return n.replace(/\bparams\.(\w+)/g, (o, r) => {
    if (!(r in e))
      return `params.${r}`;
    const t = e[r];
    return typeof t == "number" ? String(t) : `(${t.startsWith("=") ? t.slice(1).trim() : t})`;
  });
}
function M(n, e) {
  if (typeof n == "number") return n;
  const o = n.startsWith("=") ? n.slice(1).trim() : n.trim(), r = o.replace(/\binputs\.(\w+)\b/g, (s, l) => {
    if (!(l in e))
      throw new I(`Repeat-of-instantiate references unknown input "inputs.${l}"`);
    return String(e[l]);
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
  constructor(e, o, r = {}) {
    const t = Ot.parse(e);
    this.spec = Ft(t, r), this.panels = o, this.calc = new le({}), this.variables = {
      inputs: r,
      panels: this.flattenPanelDims(o)
    };
  }
  resolve() {
    const e = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), r = [], t = [...this.spec.instances], a = t.length + 1;
    for (let s = 0; s < a && t.length; s++) {
      let l = !1;
      for (let u = t.length - 1; u >= 0; u--) {
        const i = t[u];
        if (!this.dependenciesReady(i, e, o)) continue;
        if (this.shouldSkip(i, o)) {
          o.add(i.id), t.splice(u, 1), l = !0;
          continue;
        }
        const d = this.placeInstance(i, e);
        if (d.length === 0) {
          o.add(i.id), t.splice(u, 1), l = !0;
          continue;
        }
        for (const h of d) {
          if (e.has(h.id))
            throw new b(`Duplicate instance id: ${h.id}`);
          e.set(h.id, h), r.push(h);
        }
        t.splice(u, 1), l = !0;
      }
      if (!l) break;
    }
    if (t.length) {
      const s = t.map((l) => l.id).join(", ");
      throw new b(
        `Unresolved instances (cyclic or unknown reference): ${s}`
      );
    }
    return { parts: r };
  }
  // True when the instance's source has been skipped — propagates the skip
  // down the dependency tree so e.g. hinges attached to an absent door
  // disappear with it.
  shouldSkip(e, o) {
    if (se(e)) return o.has(e.join.to);
    if (X(e))
      return !!o.has(e.mirrorOf);
    if (ce(e) && "between" in e.repeat) {
      const [r, t] = e.repeat.between;
      return o.has(r.split(".")[0]) || o.has(t.split(".")[0]);
    }
    return !1;
  }
  // ---- dependency check --------------------------------------------------
  dependenciesReady(e, o, r) {
    const t = (s) => o.has(s) || r.has(s), a = (s) => {
      if (t(s)) return !0;
      const l = `${s}@`;
      for (const u of o.keys()) if (u.startsWith(l)) return !0;
      return !1;
    };
    if (se(e)) return t(e.join.to);
    if (X(e)) return a(e.mirrorOf);
    if (ce(e)) {
      const s = e.repeat;
      if ("between" in s) {
        const [l, u] = s.between;
        return t(l.split(".")[0]) && t(u.split(".")[0]);
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
        const a = this.panels[r], s = a?.q;
        if (a && (s === 0 || s === !1 || s === null || s === void 0)) return [];
      }
      const t = e.when;
      if (t !== void 0 && !this.evalNumber(t))
        return [];
    }
    if (jt(e)) return [this.placeRoot(e)];
    if (se(e)) return [this.placeJoined(e, o)];
    if (X(e)) return this.placeMirrored(e, o);
    if (ce(e)) return this.placeRepeated(e, o);
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
    const s = `${e.mirrorOf}@`, l = [...o.values()].filter((u) => u.id.startsWith(s));
    if (l.length === 0)
      throw new b(`Mirror source not placed: ${e.mirrorOf}`);
    return l.map(
      (u, i) => this.mirrorOne(u, t, r, `${e.id}@${i}`)
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
    return t === 0 ? [] : this.solveRepeatPositions(e.repeat, t, r, o).map((s, l) => this.makePart(
      e,
      s,
      r,
      `${e.id}@${l}`
    ));
  }
  // ---- join math ---------------------------------------------------------
  // Given the contact face pair plus 0-2 alignment rules, solve the world
  // position of THIS part's centre. The contact axis is fixed by the faces;
  // the other two axes are pinned by the alignment rules (or default to
  // "centered" if unspecified).
  solveJoinPosition(e, o, r) {
    const t = _[e.myFace], a = _[e.theirFace];
    if (t.axis !== a.axis)
      throw new b(
        `Contact faces must share an axis: ${e.myFace}↔${e.theirFace}`
      );
    if (t.sign === a.sign)
      throw new b(
        `Contact faces must oppose, got ${e.myFace}↔${e.theirFace}`
      );
    const s = t.axis, u = r.position[s] + a.sign * r.half[s] - t.sign * o[s], i = { x: 0, y: 0, z: 0 };
    i[s] = u;
    const d = /* @__PURE__ */ new Map();
    for (const h of e.align) {
      const g = this.axisOfRule(h);
      if (g === s)
        throw new b(
          `Alignment axis ${g} clashes with contact axis ${s}`
        );
      if (d.has(g))
        throw new b(
          `Multiple alignment rules for axis ${g}`
        );
      d.set(g, h);
    }
    for (const h of ["x", "y", "z"]) {
      if (h === s) continue;
      const g = d.get(h);
      i[h] = this.applyAlignRule(g, h, o, r);
    }
    return i;
  }
  // Determine which world axis a rule constrains. Edge-mode rules infer
  // the axis from face names (faces must share an axis); centre and
  // offset rules name it explicitly.
  axisOfRule(e) {
    if (Se(e)) return e.axis;
    if (ke(e)) return e.center;
    if (!be(e))
      throw new b("Unknown AlignRule variant");
    const o = _[e.my].axis, r = _[e.their].axis;
    if (o !== r)
      throw new b(
        `Edge alignment faces must share an axis: my "${e.my}" (${o}) vs their "${e.their}" (${r})`
      );
    return o;
  }
  applyAlignRule(e, o, r, t) {
    if (!e || ke(e))
      return t.position[o];
    if (Se(e))
      return t.position[o] + this.evalNumber(e.offset);
    if (!be(e))
      throw new b("Unknown AlignRule variant");
    const a = _[e.my].sign, s = _[e.their].sign;
    return t.position[o] + s * t.half[o] - a * r[o];
  }
  // ---- repeat math -------------------------------------------------------
  solveRepeatPositions(e, o, r, t) {
    return "between" in e ? this.repeatBetween(e, o, r, t) : "around" in e ? this.repeatAround(e, o, r) : this.repeatAxis(e, o, r);
  }
  repeatBetween(e, o, r, t) {
    const [a, s] = e.between, l = this.resolveAnchor(a, t), u = this.resolveAnchor(s, t);
    if (l.axis !== u.axis)
      throw new b(
        `Repeat anchors must share an axis: ${a} (${l.axis}) vs ${s} (${u.axis})`
      );
    const i = l.axis, h = (u.coord - l.coord) / (o + 1), g = [], z = this.midpointForOtherAxes(i, l, u, t), P = e.offset;
    for (const C of ["x", "y", "z"]) {
      if (C === i) continue;
      const U = P?.[C];
      U !== void 0 && (z[C] = this.evalNumber(U));
    }
    const E = e.shift !== void 0 ? this.evalNumber(e.shift) : 0;
    for (let C = 1; C <= o; C++) {
      const U = { ...z };
      U[i] = l.coord + h * C + E, g.push(U);
    }
    return g;
  }
  repeatAxis(e, o, r) {
    const t = e.axis, a = this.evalNumber(e.spacing), s = this.evalNumber(e.startAt), l = { x: 0, y: 0, z: 0 }, u = e.offset;
    if (u)
      for (const d of ["x", "y", "z"]) {
        if (d === t) continue;
        const h = u[d];
        h !== void 0 && (l[d] = this.evalNumber(h));
      }
    const i = [];
    for (let d = 0; d < o; d++) {
      const h = { ...l };
      h[t] = s + a * d, i.push(h);
    }
    return i;
  }
  repeatAround(e, o, r) {
    const t = e.around.axis, a = this.evalNumber(e.around.center), s = this.evalNumber(e.spacing), l = [], u = o % 2 === 1;
    for (let i = 0; i < o; i++) {
      const d = { x: 0, y: 0, z: 0 };
      let h;
      if (u) {
        const g = Math.ceil(i / 2);
        h = (i === 0 ? 0 : i % 2 === 1 ? 1 : -1) * g * s;
      } else {
        const g = Math.floor(i / 2);
        h = (i % 2 === 0 ? -1 : 1) * (g + 0.5) * s;
      }
      d[t] = a + h, l.push(d);
    }
    return l;
  }
  resolveAnchor(e, o) {
    const [r, t] = e.split("."), a = o.get(r);
    if (!a) throw new b(`Anchor references unknown instance: ${e}`);
    if (!t) throw new b(`Anchor missing face: ${e}`);
    const s = _[t];
    if (!s) throw new b(`Unknown face in anchor: ${e}`);
    const l = a.position[s.axis] + s.sign * a.half[s.axis];
    return { axis: s.axis, coord: l, part: a };
  }
  // For a between-repeat, the non-spacing axes default to the midpoint of
  // the two anchor parts so e.g. shelves naturally centre between the
  // cabinet's left and right sides.
  midpointForOtherAxes(e, o, r, t) {
    const a = { x: 0, y: 0, z: 0 };
    for (const s of ["x", "y", "z"])
      s !== e && (a[s] = (o.part.position[s] + r.part.position[s]) / 2);
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
      const d = e.translate.axis;
      o = { ...o }, o[d] += this.evalNumber(e.translate.distance);
    }
    const a = this.resolveRotation(e, o, r), s = this.panels[e.from], l = e.grainAxis === "w" ? "w" : "l", i = (e.axes ?? { l: "x", w: "y", t: "z" })[l] ?? "x";
    return {
      id: t ?? e.id,
      from: e.from ?? "",
      take: e.take ?? 0,
      material: s?.material ?? "",
      name: s?.name ?? e.from ?? "",
      position: o,
      half: r,
      rotation: a,
      grainWorldAxis: i
    };
  }
  resolveRotation(e, o, r) {
    if (!e.rotation) return;
    const t = e.rotation.axis, a = this.evalNumber(e.rotation.degrees) * Math.PI / 180, s = { x: o.x, y: o.y, z: o.z }, l = e.rotation.pivot;
    if (typeof l == "string") {
      const u = _[l];
      s[u.axis] += u.sign * r[u.axis];
    } else if (Array.isArray(l)) {
      const u = /* @__PURE__ */ new Set();
      for (const i of l) {
        const d = _[i];
        if (d.axis === t)
          throw new b(
            `Pivot face "${i}" cannot share the rotation axis (${t})`
          );
        if (u.has(d.axis))
          throw new b(
            `Pivot faces ${l[0]} and ${l[1]} must be on different axes`
          );
        u.add(d.axis), s[d.axis] = o[d.axis] + d.sign * r[d.axis];
      }
    }
    return { axis: t, radians: a, pivot: s };
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
function Mt(n, e, o = {}) {
  return new It(n, e, o).resolve();
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
  setup(n, { expose: e, emit: o }) {
    const r = Qe(() => import("./EcommerceCalculator-D8U1LupG.js").then((c) => c.o)), t = n, a = o, s = Xe("calculator"), l = V(() => s());
    let u = null;
    const i = H(null), d = H([]), h = H(!1), g = H(""), z = V(() => {
      const c = Object.entries(i.value?.inputs ?? {}), p = [];
      let f = 0;
      for (; f < c.length; ) {
        const [x, m] = c[f], v = m?.display === "visualizer" ? void 0 : m?.group;
        if (!v) {
          p.push({ kind: "single", item: { input: m, key: x, index: f } }), f++;
          continue;
        }
        const $ = m?.groupLabel ?? v, S = m?.groupLayout === "row" ? "row" : "column", O = [];
        for (; f < c.length; ) {
          const [W, j] = c[f];
          if (j?.display === "visualizer" || j?.group !== v) break;
          O.push({ input: j, key: W, index: f }), f++;
        }
        p.push({ kind: "group", label: $, key: v, items: O, layout: S });
      }
      return p;
    }), P = V(() => {
      if (!h.value || !d.value.length || d.value.every((p) => p.value === null)) return null;
      const c = We();
      return Ye(() => a("panel-result", c)), c;
    }), E = V(() => {
      if (!h.value || !d.value.length || d.value.every((p) => p.value === null)) return;
      const c = Ve();
      return c && C(c);
    });
    function C(c) {
      const p = i.value?.hardware || {};
      if (!u) return c;
      const f = {}, x = he();
      for (const [m, y] of Object.entries(c)) {
        const v = p[m]?.visibleWhen;
        if (v)
          try {
            const $ = v.replace(/^=\s*/, "");
            if (!u.evaluateExpression($, x)) continue;
          } catch {
            t.debug && console.warn("[hardware visibleWhen] eval failed for", m, v);
          }
        f[m] = y;
      }
      return f;
    }
    const U = V(() => {
      if (E.value)
        return Object.values(E.value).reduce((c, p) => c + p.totalCost, 0);
    });
    L([E, U], ([c, p]) => {
      h.value && a("hardware-result", c ?? null, p ?? 0);
    }, { immediate: !0 });
    const Ee = V(() => {
      if (!t.assemblySpec || !P.value) return null;
      try {
        const c = d.value.reduce((y, v, $) => {
          const S = Object.keys(i.value?.inputs ?? {})[$];
          return S && v.value !== null && v.value !== void 0 && (y[S] = v.value), y;
        }, {}), p = i.value?.panels || {}, f = t.materialPicks ?? {}, x = t.materialPickMeta ?? {}, m = {};
        for (const [y, v] of Object.entries(P.value)) {
          const S = (p[y] || {}).materialGroup, O = S ? x[S]?.code : void 0, W = S ? f[S] : void 0, j = O || W || v.material;
          m[y] = j && j !== v.material ? { ...v, material: String(j).toUpperCase() } : v;
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
      if (!h.value || !c || !l.value || !l.value?.inputShapes) return;
      const p = (y) => y?.name ? y.name.toLowerCase() : "", f = new Map(
        l.value.inputShapes.map((y) => [p(y), y])
      ), x = /* @__PURE__ */ new Set(), m = i.value?.panels || {};
      for (const [y, v] of Object.entries(P.value)) {
        if (!v.name) continue;
        const $ = v.q;
        if ($ === !1 || $ === null || $ === void 0 || typeof $ == "number" && $ <= 0) continue;
        const S = p(v), O = f.get(S), j = (m[y] || {}).materialGroup, Je = j ? t.materialPickMeta?.[j]?.code : void 0, Ge = j ? t.materialPicks?.[j] : void 0, te = Je || Ge || v.material || "", xe = {
          ...v,
          name: v.name.toUpperCase() || O?.name.toUpperCase(),
          material: te ? te.toUpperCase?.() ?? te : "",
          bandingOptions: v.bandingOptions || {},
          finishOptions: v.finishOptions || {},
          ...v.planingOptions !== void 0 ? { planingOptions: v.planingOptions } : {},
          orientationLock: v.orientationLock || null,
          notes: g.value,
          readonly: !0
        };
        if (O) {
          Object.assign(O, xe);
          for (const Le of ["banding", "finish", "planing"])
            l.value.initExtrasOptions(O, Le);
        } else
          l.value.createAndAddInputShape(xe);
        x.add(S);
      }
      l.value.inputShapes = l.value.inputShapes.filter(
        (y) => x.has(p(y))
      );
    }, { immediate: !1, deep: !0 }), Ke(() => De());
    const me = (c) => {
      t.debug && console.log(c);
    }, Ue = () => {
      d.value = Object.values(i.value.inputs).map((c) => ({
        value: c.default ?? null
      })), ge(t.materialPickMeta);
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
      if (!c || typeof c != "string" || !u) return null;
      try {
        const p = c.replace(/^=\s*/, "");
        return !!u.evaluateExpression(p, he());
      } catch {
        return null;
      }
    }
    function G(c) {
      const p = c?.notice;
      return !p || typeof p.text != "string" || !p.text || p.when && Be(p.when) !== !0 ? "" : p.text;
    }
    function ve(c) {
      if (!G(c)) return "";
      const p = c?.notice?.severity;
      return p === "warning" || p === "error" ? p : "info";
    }
    function ee(c) {
      const p = c?.visibleWhen;
      if (!p || typeof p != "string" || !u) return !0;
      try {
        const f = Object.keys(i.value?.inputs ?? {}), x = { inputs: {} };
        for (let v = 0; v < f.length; v++)
          x.inputs[f[v]] = d.value[v]?.value;
        const m = p.replace(/^=\s*/, "");
        return !!u.evaluateExpression(m, x);
      } catch {
        return !0;
      }
    }
    function ge(c) {
      if (!i.value || !d.value.length) return;
      const p = Object.values(i.value.inputs);
      for (let f = 0; f < p.length; f++) {
        const x = p[f], m = x?.optionsFrom;
        if (m?.source !== "materialGroup" || m.field !== "t" || !m.group) continue;
        const y = c?.[m.group], v = typeof y?.selectedThickness == "number" ? y.selectedThickness : null, $ = Array.isArray(y?.availableThicknesses) && y.availableThicknesses.length > 0 ? Math.min(...y.availableThicknesses) : null;
        let S = v ?? $;
        if (S === null) continue;
        const O = Q(x).map((W) => W.value);
        O.length > 0 && !O.includes(S) && (S = typeof x?.default == "number" && O.includes(x.default) ? x.default : O[0]), d.value[f] && d.value[f].value !== S && (d.value[f].value = S);
      }
    }
    L(() => t.materialPickMeta, (c) => {
      ge(c);
    }, { deep: !0 });
    const We = () => {
      try {
        return u.calculatePanelsFromFields(d.value);
      } catch (c) {
        return l.value.inputShapes.length = 0, console.error(c), null;
      }
    }, Ve = () => {
      try {
        return u.calculateHardwareFromFields(d.value);
      } catch (c) {
        return console.error(c), null;
      }
    }, De = async () => {
      if (!t.url && !t.spec) {
        console.warn("SmartCut - No formula URL or JSON provided");
        return;
      }
      t.url ? (me(`SmartCut - Formula calculator init from url: ${t.url}`), u = new le({ url: t.url }), i.value = await u.getSpec()) : t.spec && (me("SmartCut - Formula calculator init with JSON"), u = new le({ spec: t.spec }), i.value = await u.getSpec()), Ue(), h.value = !0;
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
      getProjectName: () => g.value,
      setProjectName: (c) => {
        g.value = c;
      }
    }), (c, p) => (F(), N(J, null, [
      n.debug ? (F(), N("div", Tt, [
        p[1] || (p[1] = oe("div", null, "Developer information", -1)),
        re(Ze(r), {
          data: [P.value],
          paths: ["panelResult"]
        }, null, 8, ["data"])
      ])) : D("", !0),
      oe("div", Et, [
        i.value?.projectName ? (F(), ye(ne, {
          key: 0,
          id: "project-name",
          type: "string",
          label: "Project name",
          placeholder: "Name",
          value: g.value,
          "onUpdate:value": p[0] || (p[0] = (f) => g.value = f)
        }, null, 8, ["value"])) : D("", !0),
        (F(!0), N(J, null, we(z.value, (f, x) => (F(), N(J, { key: x }, [
          f.kind === "single" && !Y(f.item.input) && ee(f.item.input) ? (F(), ye(et, {
            key: 0,
            defer: "",
            to: n.visualizerControlsTarget || "body",
            disabled: f.item.input.display !== "visualizer" || !n.visualizerControlsTarget
          }, [
            re(ne, {
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
              class: ae(["configurator__input-notice", `configurator__input-notice--${ve(f.item.input)}`])
            }, ie(G(f.item.input)), 3)) : D("", !0)
          ], 8, ["to", "disabled"])) : f.kind === "group" && f.items.some((m) => ee(m.input) && !Y(m.input)) ? (F(), N("fieldset", {
            key: 1,
            class: ae(["configurator__group", `configurator__group--${f.key}`, `configurator__group--layout-${f.layout}`])
          }, [
            oe("legend", Ut, ie(f.label), 1),
            (F(!0), N(J, null, we(f.items, (m) => (F(), N(J, {
              key: m.index
            }, [
              !Y(m.input) && ee(m.input) ? (F(), N(J, { key: 0 }, [
                re(ne, {
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
                  class: ae(["configurator__input-notice", `configurator__input-notice--${ve(m.input)}`])
                }, ie(G(m.input)), 3)) : D("", !0)
              ], 64)) : D("", !0)
            ], 64))), 128))
          ], 2)) : D("", !0)
        ], 64))), 128))
      ])
    ], 64));
  }
}), Gt = /* @__PURE__ */ tt(Bt, [["__scopeId", "data-v-622d959c"]]);
export {
  Gt as default
};

import { R as Fe, T as R, U as _, V as A, W as T, X as Qt, Y as X, _ as Re, $ as P, a0 as U, a1 as N, a2 as Xe, a3 as $, a4 as se, a5 as re, a6 as G, a7 as Se, a8 as Ie, a9 as j, aa as ce, ab as vi, C as Ve, ac as at, ad as Ri, ae as ue, af as We, s as le, ag as $e, ah as ie, ai as K, aj as Ue, ak as pe, al as V, am as ye, an as xe, ao as yt, ap as Ai, aq as wt, ar as Zt, as as Li, at as Z, au as Te, av as fe, aw as Mi, ax as me, ay as qi, az as be, aA as Oi, aB as lt, aC as Fi, aD as ei, aE as ti, aF as ii, aG as Gi, aH as _e, aI as Ni, aJ as ne, aK as Ge, aL as si, aM as Bi, aN as Ae, aO as Hi, aP as Wi, aQ as Ui, aR as $t, aS as zi, aT as Ke, aU as Je, aV as ji, aW as Yi, aX as Xi, Q as Ee, S as Le, aY as Vi, a as Qe, aZ as Ze, a_ as _i, a$ as Ki, b0 as Ji, b1 as Qi, b2 as W, b3 as Zi, b4 as xt, b5 as es, b6 as we, E as ts, b7 as is, b8 as ze, b9 as je, ba as ss, bb as v, bc as It, bd as Tt, be as bt, bf as Ct, bg as Pt, bh as kt, bi as Et, I as Dt, J as vt, G as Rt, K as At, D as ns, bj as Lt, bk as Mt, bl as qt, bm as Ot, bn as Ft, b as Gt, bo as rs } from "./components-zZfwvaG2.js";
import "./vendor-i18n-BuJwRgtG.js";
import { af as Ne, ag as ni } from "./vendor-pIOdV8fk.js";
function os(e) {
  return {
    cutAxis: e === "l" ? "x" : "y",
    positionAxis: e === "l" ? "y" : "x",
    cutDimension: e,
    positionDimension: N(e)
  };
}
function as(e, t, i) {
  return e?.length ? e.filter((n) => n.added && P.equalTo(n[t], i)) : [];
}
function et(e) {
  return typeof e?.guillotineState?.myPhase == "number";
}
function tt(e) {
  return e.type === "root" || e[Fe(e.stock.cutPreference)] === 0;
}
function Me(e, t) {
  return e?.guillotineState?.myPhase === t;
}
function ls(e) {
  const t = ct(e);
  if (!t) return Bt(e, 1);
  const n = te(t) === "l" ? "w" : "l", a = ri(e, t, n);
  Bt(e, a);
}
function ri(e, t, i) {
  if (!e) return null;
  if (!t) return 1;
  const n = ut(t);
  return e[i] === t[i] ? n : n + 1;
}
function ct(e) {
  return e?.guillotineState?.myStripParent || null;
}
function Nt(e, t) {
  e?.guillotineState && (e.guillotineState.myStripParent = t);
}
function Bt(e, t) {
  typeof t == "number" && e?.guillotineState && e.guillotineState.setPhase(t);
}
function ut(e) {
  return e?.guillotineState ? e.guillotineState.myPhase : null;
}
function te(e) {
  return e?.guillotineState ? e.guillotineState.myStripDirection : null;
}
function Ce(e, t) {
  if (e?.guillotineState) {
    if (typeof e.guillotineState.setStripDirection != "function") {
      const i = e.guillotineState || {};
      e.guillotineState = new Re(i);
    }
    e.guillotineState.setStripDirection(t);
  }
}
function Ht(e, t) {
  if (U(e)) {
    cs(t);
    const i = t?.bestScore?.score;
    i && ["currentStripDirection", "myStripDirection", "keyStripDirection", "myPhase"].forEach((a) => {
      i[a] && (t.guillotineState[a] = i[a]);
    });
  }
}
function cs(e) {
  const t = e.bestScore;
  t?.myStripParent && Nt(e, t.myStripParent), R(e) && e.shapes.forEach((i) => Nt(i, ct(i)));
}
function us(e, t) {
  let i = null, n = t.x.get(e.x) || [];
  n = n.filter((l) => {
    const o = l.guillotineState.myStripParent;
    return o && !o.guillotineState?.firstShape ? Xe(e, o, "y") : !0;
  }), n.sort((l, o) => l.x - o.x);
  let a = t.y.get(e.y) || [];
  a = a.filter((l) => {
    const o = l.guillotineState.myStripParent;
    return o && !o.guillotineState?.firstShape ? Xe(e, o, "x") : !0;
  }), a.sort((l, o) => l.y - o.y);
  const s = n.length ? n[0] : null, r = a.length ? a[0] : null;
  return s && r ? i = s.placementOrder > r.placementOrder ? s : r : i = s || r, i;
}
function it(e, t) {
  e.x.has(t.x) ? e.x.get(t.x).push(t) : e.x.set(t.x, [t]), e.y.has(t.y) ? e.y.get(t.y).push(t) : e.y.set(t.y, [t]);
}
function oi(e, t) {
  const i = e.x.get(t.x) ?? [], n = i.indexOf(t);
  n !== -1 && (i.splice(n, 1), i.length === 0 && e.x.delete(t.x));
  const a = e.y.get(t.y) ?? [], s = a.indexOf(t);
  s !== -1 && (a.splice(s, 1), a.length === 0 && e.y.delete(t.y));
}
function fs(e, t = !0) {
  const i = [], n = /* @__PURE__ */ new Set();
  for (const a of e.shapes)
    if (R(a)) {
      const s = a.type === "auto", r = _(a);
      if (s || r && t)
        n.has(a.autoId) || (i.push(a), n.add(a.autoId));
      else if (a.added && e.stock) {
        a.placeMyShapes(e.stock);
        for (const o of a.shapes)
          n.has(o.autoId) || (o.group.addedAsGroup = a.autoId, i.push(o), n.add(o.autoId));
      }
    } else
      n.has(a.autoId) || (i.push(a), n.add(a.autoId));
  return e.shapes = i, A([
    () => T(X(e.shapes)).to.be.false,
    () => Qt(e.shapes, "removeGroupsFromSegment")
  ]), e;
}
function ai(e, t) {
  if (e.children && Array.isArray(e.children)) {
    if (t(e) === !1) return;
    for (const i of e.children)
      ai(i, t);
  }
}
function li(e, t) {
  if (e.parent && U(e.parent)) {
    if (t(e) === !1) return;
    li(e.parent, t);
  }
}
const B = {
  previousSegments: [],
  ptxCuts: 0,
  segments: 0,
  //this needs to be here, as it's shared with the front end - cannot be put into optimiser
  makeCutsIteration: 0
};
function ci() {
  B.previousSegments = [], B.ptxCuts = 0, B.segments = 0, B.makeCutsIteration = -1;
}
function Be({
  container: e,
  shapes: t = [],
  forceNoHeadCut: i = !1,
  final: n = !1
}) {
  B.ptxCuts = 0;
  const a = e.getStock, s = U(e);
  let r;
  const l = s ? e.cutDirection : e.cutPreference;
  if (s && e.type === "root")
    r = e, r.cuts = [], r.children = [], $("cuts", `REUSING ROOT [${r.autoId ? r.id : "unknown"}] l=${r.l}, w=${r.w}, DIR ${l.toUpperCase()}`);
  else {
    const h = B.segments.toString();
    B.segments++, r = new se({
      id: h,
      x: s ? e.x : 0,
      y: s ? e.y : 0,
      l: s ? e.l : a.l,
      w: s ? e.w : a.w,
      t: a.t,
      saw: a.saw,
      stock: a,
      shapes: t,
      parent: s ? e.parent ?? e : null,
      grain: a.grain,
      material: a.material,
      type: B.segments === 0 ? "root" : "",
      phase: s ? e.phase + 1 : 0,
      hasHeadCut: s ? e.hasHeadCut : !1,
      cutDirection: l,
      isInitial: s ? e.isInitial : !0
    }), s && $("cuts", `[calculateStripCuts] Created parent segment [${r.id}] at (${r.x},${r.y}) ${r.l}x${r.w} from container at (${e.x},${e.y}) ${e.l}x${e.w}`);
  }
  B.previousSegments = [];
  const o = ke.call(
    this,
    {
      segment: r,
      stock: a,
      allStockShapes: t,
      forceNoHeadCut: i,
      final: n
    }
  );
  let c, f, u;
  try {
    [c, f, u] = qs(r, n, o.headCutCount);
  } catch (h) {
    return $("errors", `issue analysing segments ${h.message}`), {
      rootSegment: null,
      cuts: [],
      offcuts: []
    };
  }
  if (s && u.length > 0) {
    const h = u.map((d) => `${d.id}@(${d.x},${d.y})`).join(", ");
    $("cuts", `[calculateStripCuts] Returning ${u.length} offcuts for container segment at (${e.x},${e.y}): ${h}`);
  }
  return {
    rootSegment: c,
    cuts: f,
    offcuts: u
  };
}
function ui(e, t = !1) {
  let i = os(e);
  return t && (i = di(i)), i;
}
function hs(e, t, i, n, a, s, r) {
  if (this?.config && !this?.config?.guillotine?.extendSegments || t.cutType !== "guillotine" || t?.saw?.guillotineOptions?.strategy === "time") return !1;
  const l = e?.merged, o = e?.parent?.merged;
  if (l && o) return !1;
  const c = Me(i, 1), f = e?.parent ? e.parent?.hasHeadCut : !1;
  let u = !c || f;
  if (!u) return !1;
  t?.saw?.stockType === "roll" && c && (u = !1);
  let h = r.length > 1 && n < r.length - 1;
  f && (h = !0);
  const d = P.lessThan(
    i[s],
    e[s]
  );
  return h && d && !a;
}
function ft(e) {
  const t = N(e.cutPreference);
  return Fe(t);
}
function ds(e) {
  return N(e.cutPreference);
}
function ps(e) {
  const t = ft(e);
  let i = 0;
  return e?.getStock?.hasTrim && e?.getStock?.trimmed === !1 && (i = e?.getStock?.trim?.[t === "x" ? "x1" : "y1"] ?? 0), i;
}
function fi(e) {
  const t = ft(e), i = ps(e);
  return e[t] === i;
}
function hi(e, t, i) {
  if (!this?.config?.guillotine?.allowHeadCuts || !e?.guillotineOptions?.headCuts || !fi(i)) return !1;
  const n = ds(i), a = ft(i);
  if (t[a] > i[a]) return !1;
  let s = !1;
  const r = 0.75;
  if (G(t) && t.group.addedAsGroup) {
    const l = i.shapes.filter((f) => f.group?.addedAsGroup === t.group.addedAsGroup), o = Fe(n), c = Se(l, o);
    c[n] + c[o] >= i[n] * r && (s = !0);
  } else t[n] >= i[n] * r && (s = !0);
  return s;
}
class ht {
  segment;
  headCutSegment;
  stock;
  allStockShapes;
  forceNoHeadCut;
  final;
  previousCutPosition;
  previousEdgeOfSegment;
  cutSuccess;
  bladeWidth;
  halfBladeWidth;
  stripParentShapes;
  currentStripIndex;
  isHeadCut;
  isEdgeOfSegment;
  headCutCount;
  mergedCut;
  skippedCut;
  cutPosition;
  cut;
  farSideSegmentSize;
  nearSideSegment;
  farSideSegment;
  constructor(t) {
    this.segment = t.segment, this.stock = t.stock, this.allStockShapes = t.allStockShapes || [], this.forceNoHeadCut = t.forceNoHeadCut || !1, this.final = t.final || !1, this.headCutCount = t.headCutCount || 0, this.previousCutPosition = t.previousCutPosition || null, this.previousEdgeOfSegment = t.previousEdgeOfSegment || !1, this.cutSuccess = t.cutSuccess || !1, this.bladeWidth = this.stock.bladeWidth, this.halfBladeWidth = this.bladeWidth / 2, this.stripParentShapes = t.stripParentShapes || [], this.currentStripIndex = t.currentStripIndex || 0, this.isHeadCut = t.isHeadCut || !1, this.isEdgeOfSegment = t.isEdgeOfSegment || !1, this.mergedCut = t.mergedCut || !1, this.skippedCut = t.skippedCut || !1, this.cutPosition = t.cutPosition || null, this.cut = t.cut || null, this.farSideSegmentSize = t.farSideSegmentSize || null, this.headCutSegment = t.headCutSegment || null, this.nearSideSegment = t.nearSideSegment || null, this.farSideSegment = t.farSideSegment || null, Object.freeze(this);
  }
  //caters for head cuts
  get cutInfo() {
    const t = ui(this.segment.cutDirection, this.isHeadCut);
    return A([() => T(t.cutDimension).to.equal(this.isHeadCut ? N(this.segment.cutDirection) : this.segment.cutDirection)]), t;
  }
  //segment cut direction doesn't change, but this computed property will
  get cutDirection() {
    return this.isHeadCut ? N(this.segment.cutDirection) : this.segment.cutDirection;
  }
  get currentStripParent() {
    return this.stripParentShapes[this.currentStripIndex];
  }
  get previousStripShape() {
    return this.currentStripIndex > 0 ? this.stripParentShapes[this.currentStripIndex - 1] : null;
  }
  get isLastStripShape() {
    return this.currentStripIndex === this.stripParentShapes.length - 1;
  }
  with(t) {
    return new ht({
      ...this,
      ...t
    });
  }
  // get shapes that are within boundaries of current strip
  getShapesInCurrentStrip() {
    return this.currentStripParent ? this.segment.shapes.filter((t) => Ie(t, this.currentStripParent, this.cutInfo.positionAxis)) : [];
  }
}
function di(e) {
  return {
    positionAxis: ce(e.positionAxis),
    positionDimension: N(e.positionDimension),
    cutAxis: ce(e.cutAxis),
    cutDimension: N(e.cutDimension)
  };
}
function Wt(e) {
  return e.type === "root" && e.isInitial;
}
function ke({
  segment: e,
  stock: t,
  allStockShapes: i = [],
  forceNoHeadCut: n = !1,
  previousCutPosition: a = null,
  previousEdgeOfSegment: s = !1,
  final: r = !1,
  headCutCount: l = 0
}) {
  $("cuts", `[makeCuts] START: segment ${e.l}x${e.w} phase=${e.phase} type=${e.type} shapes=${e.shapes?.length || 0} final=${r}`);
  let o = new ht({
    segment: e,
    stock: t,
    allStockShapes: i,
    forceNoHeadCut: n,
    previousCutPosition: a,
    previousEdgeOfSegment: s,
    final: r,
    headCutCount: l
  });
  if (!ms.call(this, o)) {
    $("cuts", "[makeCuts] EARLY RETURN: invalid input");
    return;
  }
  if (ws.call(this, o)) {
    $("cuts", "[makeCuts] EARLY RETURN: duplicate segment");
    return;
  }
  ys(o), o = $s.call(this, o), o = Is.call(this, o), $("cuts", `[makeCuts] Found ${o.stripParentShapes.length} strip parent shapes`), o.stripParentShapes.length && (o.segment.offcut = !1);
  for (let c = 0; c < o.stripParentShapes.length; c++) {
    if (o = o.with({ currentStripIndex: c }), $("cuts", `[makeCuts] Processing shape ${c}: ${o.currentStripParent.l}x${o.currentStripParent.w}`), o.currentStripParent.l === t.l && o.currentStripParent.w === t.w) {
      $("cuts", "[makeCuts] Shape matches stock size, marking as produced"), o = Ut.call(this, o);
      break;
    }
    if (o = Ls.call(this, o), o.final && o.segment?.parent?.hasHeadCut && o.segment.phase === 1 && e.type === "far" && o.isHeadCut === !1) {
      const u = di(o.cutInfo), { cutAxis: h, cutDimension: d, positionDimension: m, positionAxis: w } = u;
      He({
        parentSegment: e,
        stock: t,
        cutDirection: d,
        cutAxis: h,
        positionAxis: w,
        position: e[m] + e[w],
        headCut: !0,
        ptxDummyCut: !0
      });
    }
    if (o = Ts.call(this, o), o.final && t.cutType === "beam" && c === 0 && (e.type !== "far" || pi(o)) && (o = bs.call(this, o)), o = Cs.call(this, o), gs.call(this, o) === !0) {
      $("cuts", "[makeCuts] Breaking due to edge of segment");
      break;
    }
    if (o = vs.call(this, o), o.cut)
      o.isHeadCut && (o.segment.hasHeadCut = !0);
    else if (o.isHeadCut) {
      const u = N(o.cutDirection);
      o = o.with({ forceNoHeadCut: !0 }), Ss.call(this, o, u);
      break;
    }
    if (o = o.with({
      cutSuccess: !!o.cut,
      skippedCut: o.cut ? null : !0,
      headCutCount: o.isHeadCut && o.cut ? o.headCutCount + 1 : o.headCutCount
    }), o.final && (o = Ut.call(this, o), t.cutType === "beam" && Ps.call(this, o), o.cut)) {
      let u = e.parent?.autoId;
      (u === "root" || !u) && (u = "R"), u = `[${u}]`;
      let h = e.autoId ? e.id : "unknown";
      h = `[${h}]`, $("cuts", `${u}->${h} P${e.phase} {${o.currentStripParent.autoId}} ${o.isHeadCut ? "HEAD" : "NORM"} ${e.type.toUpperCase()} ${re(e.l, 4)}x${re(e.w, 4)} ${re(o.cutPosition, 4)} ${re(o?.cut?.x1, 4)}|${re(o?.cut?.x2, 4)}|${re(o?.cut?.y1, 4)}|${re(o?.cut?.y2, 4)}`), $("cuts", `DIRECTIONS FOR ${h}: STATE ${o.cutDirection.toUpperCase()} CUT ${o.cut?.dimension?.toUpperCase() ?? "N/A"} SEGMENT ${e.cutDirection.toUpperCase()}`);
    }
    if (o = Rs.call(this, o), o = As.call(this, o), o.isHeadCut) break;
  }
  return o.final && t.cutType === "beam" && e.phase === 0 && (o = Es.call(this, o)), o.final && t.cutType === "beam" && e.type === "far" && e.parent.hasHeadCut && (o = Ds.call(this, o)), o;
}
function pi(e) {
  const { segment: t, isHeadCut: i } = e;
  return i ? !1 : t?.parent?.hasHeadCut && t.type === "far";
}
function gs(e) {
  if (!e.isEdgeOfSegment) return !1;
  const { currentStripParent: t, segment: i, cutInfo: n } = e, { positionDimension: a, positionAxis: s } = n;
  if (P.greaterThanOrEqualTo(t[a] + t[s] + e.bladeWidth, i[a] + i[s]) && e.stock.cutType === "beam" || (e = e.with({ previousEdgeOfSegment: !0 }), !i.children.length)) return !1;
  const l = e.segment.children.findLast((o) => o.type === "far");
  return l && (e = e.with({ segment: l }), l.cutDirection = N(e.cutDirection), ke.call(this, e)), !0;
}
function Ss(e, t) {
  const { segment: i } = e;
  return i.cutDirection = t, e = e.with({ isHeadCut: !1 }), i.cuts.length = 0, i.clearChildren(), e.segment.hasHeadCut = !1, $("cuts", `REATTEMPTING [${i.id}] new direction ${i.cutDirection?.toUpperCase()}`), ke.call(this, e), !0;
}
function ms(e) {
  if (!e.segment) return !1;
  const { segment: t, stock: i, cutDirection: n, previousCutPosition: a, allStockShapes: s } = e;
  return !["l", "w"].includes(n) || t.l <= 0 || t.w <= 0 || a === void 0 ? !1 : (A([
    () => T(s.every((r) => G(r) || R(r)), "allStockShapes must be shape or any type of group").to.be.true,
    () => T(j(i)).to.be.true
  ]), !0);
}
function ys(e) {
  const { final: t } = e;
  return t && B.makeCutsIteration++, e;
}
function ws(e) {
  const { segment: t, cutDirection: i } = e;
  return t.type !== "root" && B.previousSegments.some((n) => t.l === n.l && t.w === n.w && t.x === n.x && t.y === n.y && t.type === n.type && i === n.cutDirection);
}
function $s(e) {
  const { segment: t, cutDirection: i } = e;
  return B.previousSegments.push({
    w: t.w.valueOf(),
    l: t.l.valueOf(),
    x: t.x.valueOf(),
    y: t.y.valueOf(),
    type: t.type,
    cutDirection: i.valueOf()
  }), B.previousSegments.length > 20 && (B.previousSegments = B.previousSegments.slice(-20)), e;
}
function xs(e, t, i) {
  return e.filter(
    (n, a, s) => s.findIndex(
      (r) => P.equalTo(
        r[t] + r[i],
        n[t] + n[i]
      )
    ) === a
  );
}
function Is(e) {
  const { segment: t, stock: i, cutDirection: n, cutInfo: a, previousCutPosition: s, halfBladeWidth: r } = e, { cutAxis: l, positionAxis: o, positionDimension: c } = a;
  let f = [];
  if ($("cuts", `Finding strip parent shapes. Segment ${t.id} has ${t.shapes.length} shapes:`), t.shapes.slice(0, 3).forEach((u) => {
    $("cuts", `  Shape ${u.id}: l=${u.l}, w=${u.w}, rot=${u.rot}, at (${u.x},${u.y}), added=${u.added}`);
  }), i.cutPreference === n) {
    const u = t.type === "far" && i.cutType === "guillotine" || !s ? t[l] : s + r;
    $("cuts", `[findStripParentShapes] cutPreference=${i.cutPreference}, cutDirection=${n}, cutAxis=${l}, axisPosition=${u}, segment.shapes[0]?.[${l}]=${t.shapes[0]?.[l]}, segment.type=${t.type}`), f = as(
      t.shapes,
      l,
      u
    );
  } else {
    $("cuts", `[findStripParentShapes] NOT using cutPreference path, cutPreference=${i.cutPreference}, cutDirection=${n}, cutAxis=${l}, segment[${l}]=${t[l]}, segment.shapes[0]?.[${l}]=${t.shapes[0]?.[l]}, segment.shapes[0]?.added=${t.shapes[0]?.added}`), f = t.shapes.filter(
      (h) => h.added && P.equalTo(h[l], t[l])
    );
    const u = f.filter((h) => R(h));
    if (u.length > 0) {
      const h = /* @__PURE__ */ new Set();
      u.forEach((d) => {
        d.shapes && Array.isArray(d.shapes) && d.shapes.forEach((m) => h.add(m.autoId));
      }), f = f.filter((d) => R(d) ? !0 : !h.has(d.autoId));
    }
    f = xs(f, o, c);
  }
  if (f.sort((u, h) => u[o] - h[o]), f.length && !t?.hasHeadCut) {
    const u = f.length - 1, h = f[u], d = t.shapes.filter((w) => w.added && Ie(w, h, o)), m = Se(d, o);
    m && P.greaterThan(
      m[o] + m[c],
      h[o] + h[c]
    ) && f.splice(u, 1, m);
  }
  return e.with({ stripParentShapes: f });
}
function Ts(e) {
  const { segment: t, stock: i, cutDirection: n, cutInfo: a, halfBladeWidth: s, allStockShapes: r, previousStripShape: l, currentStripParent: o, currentStripIndex: c, bladeWidth: f } = e, { cutAxis: u, positionAxis: h, cutDimension: d, positionDimension: m } = a;
  if (c === 0) return e;
  if (l && P.equalTo(o[u], t[u]) && P.equalTo(l[u], t[u]) && !P.equalTo(
    o[h],
    l[h] + l[m] + f
  )) {
    $("cuts", `[makeCuts] Creating gap cut at position ${o[h] - s}, dir=${n}`);
    const { cut: w, previousCutPosition: p } = He({
      parentSegment: t,
      stock: i,
      cutDirection: n,
      cutAxis: u,
      positionAxis: h,
      position: o[h] - s,
      allStockShapes: r
    });
    if (w) {
      const S = p < t[h] ? t[h] : p, g = S + s - t[h], I = {
        parent: t,
        stock: i,
        offcut: !0,
        type: "near",
        [u]: t[u],
        [d]: t[d],
        [h]: t[h] + g,
        [m]: o[h] - S - f - s
      }, b = dt.call(this, I);
      b && A([
        () => T(
          b.cutDirection,
          `near side segment ${b.id} has the same cutDirection as segment ${t.id}`
        ).not.to.equal(t.cutDirection)
      ]);
    }
  }
  return e;
}
function bs(e) {
  if (e.stock.cutType !== "beam" || e.currentStripIndex !== 0 || e.segment.type === "far" && !pi(e)) return e;
  const { segment: t, stock: i, cutDirection: n, cutInfo: a, allStockShapes: s, halfBladeWidth: r } = e, { cutAxis: l, positionAxis: o, positionDimension: c } = a;
  return t.phase !== 1 || !e.final || Fs({
    segment: t,
    stock: i,
    cutDirection: n,
    cutAxis: l,
    positionAxis: o,
    positionDimension: c,
    position: 1,
    allStockShapes: s,
    halfBladeWidth: r
  }), e;
}
function Cs(e) {
  const { segment: t, stock: i, cutInfo: n, halfBladeWidth: a, currentStripParent: s, currentStripIndex: r, stripParentShapes: l, isHeadCut: o, bladeWidth: c, previousEdgeOfSegment: f } = e, { positionAxis: u, cutAxis: h, positionDimension: d, cutDimension: m } = n;
  let w = s[u] + s[d] + a, p = !1, S = r;
  $("cuts", `Cut position calc: shape ${s.l}x${s.w}, posAxis=${u}, posDim=${d}`), $("cuts", `  Shape rot=${s.rot}, autoId=${s.autoId}`), $("cuts", `  ${u}=${s[u]}, ${d}=${s[d]} => cutPos=${w}`), $("cuts", `  cutDirection=${e.cutDirection}, cutAxis=${n.cutAxis}, cutDim=${n.cutDimension}`), $("cuts", `  Shape actual extent: x=[${s.x} to ${s.x + s.l}], y=[${s.y} to ${s.y + s.w}]`), $("cuts", `  Strip parent shapes count: ${l.length}`), l.length > 1 && $("cuts", `  All strip parents: ${l.map((b) => `${b.id}(${b.l}x${b.w} rot=${b.rot})`).join(", ")}`);
  let g = P.greaterThanOrEqualTo(
    s[u] + s[d] + c,
    t[u] + t[d]
  );
  const I = t.shapes;
  if (!o && !g && !f && hs.call(this, t, i, s, r, g, e.cutDirection, l)) {
    let b = s;
    for (let C = r + 1; C < l.length; C++) {
      const y = l[C];
      if (y.autoId === b.autoId) continue;
      if (!y) break;
      const k = I.filter(
        (x) => Ie(x, s, u)
      ), D = Se(k, h), q = k.reduce(
        (x, E) => P.greaterThan(x[d], E[d]) ? x : E
      );
      P.greaterThan(
        q[u] + q[d],
        b[u] + b[d]
      ) && (b = q, w = b[u] + b[d] + a);
      const M = Se(
        I.filter(
          (x) => Ie(x, y, u)
        ),
        h
      );
      if (!P.equalTo(
        D[h] + D[m],
        M[h] + M[m]
      ))
        break;
      if (P.equalTo(b[m], y[m]) && P.equalTo(b[h], y[h]))
        p = !0, w = y[u] + y[d] + a, b = y, S = C;
      else
        break;
    }
    p && (t.merged = !0, g = P.greaterThanOrEqualTo(
      w - a,
      t[u] + t[d]
    ));
  }
  return e.with({
    cutPosition: w,
    mergedCut: p,
    isEdgeOfSegment: g,
    currentStripIndex: S
  });
}
function Ps(e) {
  if (e.stock.cutType !== "beam" || !e.cut) return e;
  const { cut: t, segment: i, cutInfo: n, currentStripParent: a, currentStripIndex: s, stripParentShapes: r } = e, { positionAxis: l, positionDimension: o } = n;
  t?.guillotineState?.partProduced && s === r.length - 1 && P.equalTo(
    a[l] + a[o],
    i[l] + i[o]
  ) && ($("cuts", `MARKING PTX DUMMY CUT ${a.autoId} ${e.cutPosition}`), t.ptxData.isDummy = !0);
}
function ks(e) {
  return e.hasHeadCut ? N(e.cutDirection) : e.cutDirection;
}
function Es(e) {
  if (e.stock.cutType !== "beam") return e;
  const { segment: t, cutInfo: i, stock: n, cutDirection: a } = e;
  if (t.phase !== 0) return e;
  const { cutAxis: s } = i;
  for (const r of t.cuts)
    r.dimension === ks(t) && (r[s + 1] = 0, r[s + 2] = n[a]);
  return e;
}
function Ds(e) {
  if (e.stock.cutType !== "beam") return e;
  const { segment: t, cutInfo: i, stock: n, cutDirection: a } = e;
  if (t.phase !== 1) return e;
  const { cutAxis: s } = i;
  for (const r of t.cuts)
    t.hasHeadCut ? r.dimension === N(t.cutDirection) && (r[ce(s) + 2] = n[N(a)]) : r.dimension === t.cutDirection && (r[s + 2] = n[a]);
}
function vs(e) {
  const { segment: t, stock: i, cutDirection: n, cutInfo: a, cutPosition: s, allStockShapes: r, currentStripParent: l, isHeadCut: o } = e, { cutAxis: c, positionAxis: f } = a;
  o && Ce(l, n);
  const { cut: u, farSideSegmentSize: h, previousCutPosition: d } = He({
    parentSegment: t,
    stock: i,
    cutDirection: n,
    cutAxis: c,
    positionAxis: f,
    position: s,
    allStockShapes: t.phase === 0 ? r : [],
    headCut: e.isHeadCut
  });
  return u && e.final && $("cuts", `MADE CUT ${u.x1}|${u.x2}|${u.y1}|${u.y2} ${u.isHead ? "HEAD" : "NORM"}`), e.with({
    cut: u,
    farSideSegmentSize: h,
    previousCutPosition: d
  });
}
function Ut(e) {
  if (e.stock.cutType !== "beam") return e;
  const { cut: t, cutInfo: i, halfBladeWidth: n, currentStripParent: a } = e;
  if (!t) return e;
  const { cutAxis: s, cutDimension: r, positionAxis: l, positionDimension: o } = i;
  return P.equalTo(
    t[s + 2] - t[s + 1],
    a[r]
  ) && P.equalTo(
    t[l + 1],
    a[l] + a[o] + n
  ) && (t.guillotineState.partProduced = a.parentId), e;
}
function Rs(e) {
  const {
    segment: t,
    stock: i,
    cutInfo: n,
    cutPosition: a,
    mergedCut: s,
    currentStripParent: r,
    previousCutPosition: l,
    cut: o,
    isEdgeOfSegment: c,
    halfBladeWidth: f,
    bladeWidth: u,
    allStockShapes: h,
    final: d,
    cutDirection: m,
    currentStripIndex: w
  } = e, { cutAxis: p, positionAxis: S, cutDimension: g, positionDimension: I } = n, b = w === 0 && P.greaterThan(r[S], t[S]);
  if (!o && !c && !b) return e;
  const C = {
    parent: t,
    stock: i,
    merged: s,
    type: "near",
    hasHeadCut: t.hasHeadCut,
    shapes: []
  }, y = b && !o ? r[S] : a, k = l != null && l >= t[S], D = k ? l + f : t[S], q = y - (k ? l + u : f + t[S]);
  $("cuts", `[createNearSegment] segment[${t.id}] at (${t.x},${t.y}), posAxis=${S}, cutAxis=${p}, previousCutPosition=${l}, hasPreviousCut=${k}, nearSegmentPosition=${D}`);
  const M = {
    [p]: t[p],
    [g]: t[g],
    [S]: D,
    [I]: q,
    cutDirection: N(m)
  };
  $("cuts", `[createNearSegment] dimensionProps: x=${M.x ?? "N/A"}, y=${M.y ?? "N/A"}, l=${M.l ?? "N/A"}, w=${M.w ?? "N/A"}`);
  const x = dt.call(
    this,
    { ...C, ...M },
    !1
    // Don't reject if identical - we'll filter shapes ourselves
  );
  if (!x) return e;
  if ($("cuts", `[createNearSegment] AFTER creation: segment ${t.id} at (${x.x},${x.y}) ${x.l}x${x.w}`), x.shapes = t.shapes.filter((E) => P.greaterThanOrEqualTo(E.x, x.x) && P.lessThanOrEqualTo(E.x + E.l, x.x + x.l) && P.greaterThanOrEqualTo(E.y, x.y) && P.lessThanOrEqualTo(E.y + E.w, x.y + x.w)), $("cuts", `[createNearSegment] nearSideSegment.shapes.length = ${x.shapes.length}`), x.shapes.length > 0) {
    const E = P.equalTo(x.l, r.l) && P.equalTo(x.w, r.w);
    if ($("cuts", `[createNearSegment] nearSegment: ${x.l}x${x.w}, shape: ${r.l}x${r.w}, identical: ${E}, mergedCut: ${s}`), s || !E) {
      $("cuts", `CUTTING NEAR SIDE SEGMENT [${x.id}] DIR ${x?.cutDirection?.toUpperCase()}`), $("cuts", `[createNearSegment] CALLING makeCuts recursively with segment ${x.l}x${x.w}, segment.shapes.length=${x.shapes?.length}, final=${d}`);
      const O = ke.call(
        this,
        {
          segment: x,
          stock: i,
          cutDirection: x.cutDirection,
          previousCutPosition: l,
          allStockShapes: h,
          final: d,
          headCutCount: e.headCutCount
        }
      );
      $("cuts", `[createNearSegment] RETURNED from makeCuts, childState=${O}`), e = e.with({ headCutCount: O?.headCutCount || e.headCutCount });
    }
  }
  return e.with({ nearSideSegment: x });
}
function As(e) {
  const {
    segment: t,
    stock: i,
    cutInfo: n,
    cutPosition: a,
    farSideSegmentSize: s,
    halfBladeWidth: r,
    currentStripIndex: l,
    stripParentShapes: o,
    isHeadCut: c,
    allStockShapes: f,
    final: u
  } = e, { cutAxis: h, positionAxis: d, cutDimension: m, positionDimension: w } = n, p = {
    parent: t,
    stock: i,
    offcut: c ? !1 : l === o.length - 1,
    type: "far",
    hasHeadCut: !1,
    shapes: [],
    cutDirection: t.cutDirection
    //[] test
  }, S = {
    [h]: t[h],
    [m]: t[m],
    [d]: a + r,
    [w]: s
  };
  $("cuts", `Creating FAR segment: cutAxis=${h}, cutDim=${m}, posAxis=${d}, posDim=${w}`), $("cuts", `FAR segment props: ${h}=${t[h]}, ${m}=${t[m]}, ${d}=${a + r}, ${w}=${s}`);
  const g = dt.call(this, { ...p, ...S });
  if (!g) return e;
  if ($("cuts", `FAR segment created [${g.id}] at (${g.x},${g.y}) ${g.l}x${g.w}`), $("cuts", `  Parent has ${t.shapes.length} shapes, far segment has ${g.shapes.length} shapes`), $("cuts", `  Cut was at position ${a} (${d}=${a})`), $("cuts", `  Expected offcut dimensions based on stock (1200x1200): should be ${t.l - a}x${t.w} or ${t.l}x${t.w - a}`), c) {
    g.shapes = t.shapes.filter((b) => {
      const C = b[ce(h)] + b[N(m)];
      return P.greaterThan(C, a);
    }), $("cuts", `HEAD CUT: Making cuts in far segment [${g.id}] with ${g.shapes.length} shapes`);
    const I = ke.call(
      this,
      {
        segment: g,
        stock: i,
        cutDirection: g.cutDirection,
        previousCutPosition: null,
        // No previous cut in this new segment yet
        allStockShapes: f,
        final: u,
        headCutCount: e.headCutCount
      }
    );
    e = e.with({ headCutCount: I?.headCutCount || e.headCutCount });
  }
  return e.with({ farSideSegment: g });
}
function gi(e) {
  if (!this?.config?.guillotine?.allowHeadCuts || !e?.saw?.guillotineOptions?.headCuts) return !1;
  if (Wt(e)) return !0;
  if (e.type === "far" || e.type === "root") {
    if (!fi(e)) return !1;
    if (e.parent.hasHeadCut || Wt(e.parent)) return !0;
  }
  return !1;
}
function Ls(e) {
  const { segment: t, currentStripParent: i, forceNoHeadCut: n } = e;
  if (n) return e.with({ isHeadCut: !1 });
  let a = !1;
  return gi.call(this, t) ? (a = hi.call(this, t.saw, i, t, e.cutDirection), e.with({ isHeadCut: a })) : e.with({ isHeadCut: !1 });
}
function He({
  parentSegment: e,
  stock: t,
  cutDirection: i,
  cutAxis: n,
  positionAxis: a,
  position: s,
  allStockShapes: r = [],
  headCut: l = !1,
  ptxDummyCut: o = !1,
  skipCollisionCheck: c = !1
}) {
  const f = t.halfBladeWidth, u = Ri(a), h = vi.parse({
    stock: t,
    isGuillotine: !0,
    isHead: l,
    ptxData: {
      isDummy: o
    },
    //NOTE: this has changed from cutAxis to positionAxis
    x1: a === "x" ? s : e.x,
    x2: a === "x" ? s : e.x + e.l,
    y1: a === "y" ? s : e.y,
    y2: a === "y" ? s : e.y + e.w
  });
  let d = new Ve(h);
  if (!o && e.type === "near" && e.parent.hasHeadCut && (d.ptxData.headCutStrip = !0), !c) {
    const I = r.length ? r : e.shapes;
    if (at(
      d,
      t,
      I
    ))
      return $("cuts", `[createCut] REJECTED collision: cut at (${d.x1},${d.y1})-(${d.x2},${d.y2}), segment=(${e.x},${e.y}) ${e.l}x${e.w}`), {
        cut: null,
        farSideSegmentSize: null,
        previousCutPosition: null
      };
  }
  const m = e.cuts.filter((I) => I.dimension === i && P.equalTo(I[n + 1], d[n + 1])), w = m.length ? m[m.length - 1] : null, p = w ? w[a + 1] : null;
  if (s && p && P.equalTo(s, p))
    return {
      cut: null,
      farSideSegmentSize: null,
      previousCutPosition: null
    };
  let S = e[a] + e[u] - (s + f);
  S < 0 && (S = 0);
  const g = P.lessThan(
    s - f,
    e[a] + e[u]
  );
  return d.beamTrimL1 || d.beamTrimW1 || t.cutType === "beam" && P.lessThanOrEqualTo(
    s - f,
    e[a] + e[u]
  ) || d.ptxData.isDummy || g ? (d.ptxData.order = B.ptxCuts++, e.cuts.push(d)) : d.stock?.saw?.stockType === "roll" ? e.cuts.push(d) : (d = null, S = null), {
    cut: d,
    farSideSegmentSize: S,
    previousCutPosition: p
  };
}
function Ms({
  x: e,
  y: t,
  l: i,
  w: n,
  type: a,
  parent: s,
  rejectIdentical: r
}) {
  return r && P.equalTo(e, s.x) && P.equalTo(t, s.y) && P.equalTo(n, s.w) && P.equalTo(i, s.l) ? "IDENTICAL_TO_PARENT" : i <= 0 || n <= 0 ? "INVALID_DIMENSIONS" : s && !s.autoId ? (console.error("[ERROR] Parent segment has no autoId!"), console.error(`Parent details: type=${s.type}, x=${s.x}, y=${s.y}, l=${s.l}, w=${s.w}`), "MISSING_PARENT_ID") : a === "root" && s ? (console.error("[ERROR] Attempting to create root segment with a parent!"), console.error(`Parent autoId: ${s.autoId}, Parent type: ${s.type}`), "ROOT_WITH_PARENT") : (a === "root" && s?.type !== void 0 && s.type !== "root" && console.error(`[ERROR] Creating root segment with non-root parent of type: ${s.type}`), null);
}
function dt({
  x: e,
  y: t,
  l: i,
  w: n,
  type: a,
  parent: s,
  stock: r,
  offcut: l = !1,
  merged: o = !1,
  cutDirection: c = null
}, f = !0) {
  if (Ms({ x: e, y: t, l: i, w: n, type: a, parent: s, rejectIdentical: f })) return;
  let h;
  B.segments++;
  let d = s.phase + 1;
  s.hasHeadCut && (s.isInitial || (s.phase = 0), d = s.phase + 1);
  try {
    const w = B.segments.toString();
    if (h = new se({
      x: e,
      y: t,
      l: i,
      w: n,
      t: typeof r.t == "string" ? parseFloat(r.t) : r.t,
      id: w,
      phase: d,
      parent: s,
      stock: r,
      offcut: l,
      merged: o,
      type: a,
      grain: r.grain,
      material: r.material,
      saw: r.saw,
      cutDirection: c || N(s.cutDirection)
    }), s && s.autoId === h.autoId)
      throw console.error(`[ERROR] Segment created with itself as parent! autoId: ${h.id}`), new Error("Segment cannot be its own parent");
  } catch (w) {
    $("info", `issue creating segment ${w.message}`);
    return;
  }
  const m = s.shapes.filter((w) => w.added ? P.greaterThanOrEqualTo(w.x, h.x) && P.lessThanOrEqualTo(w.x + w.l, h.x + h.l) && P.greaterThanOrEqualTo(w.y, h.y) && P.lessThanOrEqualTo(w.y + w.w, h.y + h.w) : w.willItFit(h));
  return h.shapes = m, h;
}
function qs(e, t = !1, i) {
  t && $("cuts", `------------------- ANALYSE SEGMENTS ${e.id} -------------------`);
  const n = [], a = [], s = [];
  let r = 0, l = 0;
  const o = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  let f = 0;
  const u = 1e3, h = (d, m = 0) => {
    if (!d) return m;
    if (f++, f > u)
      return console.error(`[CRITICAL] Maximum recursion depth (${u}) exceeded in traverse function!`), console.error(`Current segment: ${d.id}, Parent: ${d.parent?.id}`), f--, m;
    if (c.has(d.autoId))
      return console.error(`[CIRCULAR REFERENCE DETECTED] Segment ${d.id} is already in the traversal path!`), console.error(`Traversal path: ${Array.from(c).join(" -> ")} -> ${d.id}`), console.error(`Segment details: autoId=${d.id}, parent=${d.parent?.id}, children=[${d.children?.map((p) => p.autoId).join(", ")}]`), f--, m;
    c.add(d.autoId), o.add(d.autoId);
    let w = m;
    n.push(d), (d.offcut === !0 || !d.shapes?.length) && s.push(d);
    for (let p = 0; p < d.cuts.length; p++) {
      const S = d.cuts[p];
      if (S) {
        if (S.guillotineState.phase = d.phase, S.isHead ? (S.ptxData.function = 0, r++) : p > 0 && a[p - 1].isHead ? S.dimension === "l" ? S.ptxData.function = 1 : S.dimension === "w" && (S.ptxData.function = 2) : (S.ptxData.function = S.guillotineState.phase + 1, S.ptxData.headCutStrip && S.ptxData.function--), S.isTrim && l++, t)
          if (S.isHead) {
            let g = 0;
            li(d, () => g++), w = g, $("cuts", `[${d.id}] reset cut order to ${w}`);
          } else p > 0 && d.cuts[p - 1].isHead && w++;
        S.guillotineState.order = w, S.guillotineState.segmentCutOrder = p, S.guillotineState.parentSegmentID = d?.autoId || "root", t && Os(S, d), a.push(S), t && $("cuts", `[${d.id}] {${w}} ${S.x1}|${S.x2}|${S.y1}|${S.y2}`), w++;
      }
    }
    if (d.children && d.children.length > 0) {
      const p = d.children.filter((S) => S.autoId === d.autoId ? (console.error(`[SELF-REFERENCE FOUND] Removing segment ${d.id} from its own children array`), console.error(`Segment type: ${d.type}, Phase: ${d.phase}`), console.error(`Number of children: ${d.children.length}`), console.error(`Children autoIds: ${d.children.map((g) => g.autoId).join(", ")}`), !1) : !0);
      p.length !== d.children.length && (d.children = p);
      for (const S of d.children)
        if (S && U(S)) {
          if (S.type === "firstShape")
            continue;
          if (S.autoId === d.autoId) {
            console.error(`[CRITICAL SELF-REFERENCE] Segment ${d.id} still has itself as a child!`), console.error("This should have been filtered. Skipping traversal.");
            continue;
          }
          if (c.has(S.autoId)) {
            console.error(`[CIRCULAR REFERENCE] Child segment ${S.autoId} is already in traversal path`), console.error(`Parent: ${d.id}, Path: ${Array.from(c).join(" -> ")}`);
            continue;
          }
          if (d.hasHeadCut) {
            const g = i + a.filter((I) => !I.isHead && !I.ptxData.isDummy).length;
            w = h(S, g);
          } else
            w = h(S, w);
        }
    }
    return c.delete(d.autoId), f--, w;
  };
  return h(e), t && ($("cuts", `Segments processed: ${n.length}`), $("cuts", `Cuts processed: ${a.length}`), $("cuts", `Trim cuts found: ${l}`), $("cuts", `Head cuts found: ${r}/${i}`), $("cuts", `Offcuts identified: ${s.length}`), $("cuts", `ROOT segment [${e.id}] has ${e.children?.length || 0} children`), $("cuts", "------------------- END ANALYSE SEGMENTS -------------------")), [e, a, s];
}
function Os(e, t) {
  const i = {
    top: null,
    bottom: null,
    left: null,
    right: null
  }, n = e.stock.halfBladeWidth;
  if (e.beamTrimL1 || e.beamTrimW1)
    e.beamTrimL1 ? i.left = e.stock.trim.l1 : e.beamTrimW1 && (i.bottom = e.stock.trim.w1);
  else {
    const a = t?.children, s = e.stock.cutType === "beam" && t.cuts[0].isTrim ? e.guillotineState.segmentCutOrder - 1 : e.guillotineState.segmentCutOrder;
    if (a?.length) {
      const r = a.filter((l) => l.type === "near")[s];
      r && (e.dimension === "l" ? (i.bottom = e.y1 - r.y - n, i.top = t.y + t.w - (e.y1 + n)) : e.dimension === "w" && (i.left = e.x1 - r.x - n, i.right = t.x + t.l - (e.x1 + n)));
    }
  }
  e.distances = i;
}
function Fs({
  segment: e,
  stock: t,
  cutDirection: i,
  cutAxis: n,
  positionAxis: a,
  positionDimension: s,
  position: r,
  allStockShapes: l,
  halfBladeWidth: o
}) {
  if (t.cutType !== "beam" || !t.hasTrim || s === "w" && e.phase > 1)
    return;
  const c = t.trimmed ? 0 - o : t.trim[s + r] - o, f = t.trimmed ? 0 - o : t.trim[s + r] - o;
  if (A([() => {
    T(c, `trim cut ${r} in the wrong position`).to.equal(f);
  }]), c !== f)
    return;
  const { cut: u } = He({
    parentSegment: e,
    stock: t,
    cutDirection: i,
    cutAxis: n,
    positionAxis: a,
    position: c,
    allStockShapes: l,
    skipCollisionCheck: !0
  });
  u && ($("cuts", `BEAM TRIM ${u.x1}|${u.x2}|${u.y1}|${u.y2}`), u.isTrim = !0, u.guillotineState.parentSegmentID = e.autoId, u.dimension === "l" && (u.beamTrimW1 = !0), u.dimension === "w" && (u.beamTrimL1 = !0), u.dimension === "w" ? (new se({
    x: -t.trim.l1,
    y: e.y,
    // Start at strip's y position
    l: t.trim.l1,
    w: e.w,
    // Match strip's height
    t: t.t,
    phase: e.phase,
    parent: e,
    // Child of the strip segment being trimmed
    stock: t,
    offcut: !0,
    isTrimOffcut: !0,
    type: "far",
    grain: t.grain,
    saw: t.saw,
    cutDirection: "w"
  }), t.trim.l2 && t.trim.l2 > 0 && new se({
    x: t.l,
    // At far edge in trimmed space
    y: e.y,
    l: t.trim.l2,
    w: e.w,
    t: t.t,
    phase: e.phase,
    parent: e,
    stock: t,
    offcut: !0,
    isTrimOffcut: !0,
    type: "far",
    grain: t.grain,
    saw: t.saw,
    cutDirection: "w"
  })) : u.dimension === "l" && new se({
    x: 0,
    // Start at stock origin
    y: -t.trim.w1,
    l: t.l,
    // Use FULL stock width (not trimmed)
    w: t.trim.w1,
    t: t.t,
    phase: e.phase,
    parent: e.parent || e,
    // Use segment's parent; if root, use itself
    stock: t,
    offcut: !0,
    isTrimOffcut: !0,
    type: "far",
    grain: t.grain,
    saw: t.saw,
    cutDirection: "l"
  }), i !== e.cutDirection && (u[n + 2] = t[i]), u.isTrim = !0, e.hasBeamTrim = !0);
}
function Si(e, t, i = null) {
  let n = null;
  const a = [], s = e.every((r) => {
    if (!r.added || !r.stock || G(r) && r.group.inGroup) return !0;
    const l = r.stock.halfBladeWidth;
    let o = null;
    i ? o = i.getSides() : o = r.stock.getSides();
    const c = Object.values(r.getSides()).every((f) => {
      const u = () => {
        switch (f.type) {
          case "top":
            return t.some((p) => p.dimension === "l" && P.equalTo(p.y1, r.y + r.w + l) && P.lessThanOrEqualTo(p.x1, r.x) && P.greaterThanOrEqualTo(p.x2, r.x + r.l));
          case "bottom":
            return t.some((p) => p.dimension === "l" && P.equalTo(p.y1, r.y - l) && P.lessThanOrEqualTo(p.x1, r.x) && P.greaterThanOrEqualTo(p.x2, r.x + r.l));
          case "left":
            return t.some((p) => p.dimension === "w" && P.equalTo(p.x1, r.x - l) && P.lessThanOrEqualTo(p.y1, r.y) && P.greaterThanOrEqualTo(p.y2, r.y + r.w));
          case "right":
            return t.some((p) => p.dimension === "w" && P.equalTo(p.x1, r.x + r.l + l) && P.lessThanOrEqualTo(p.y1, r.y) && P.greaterThanOrEqualTo(p.y2, r.y + r.w));
        }
      }, h = () => o.some((p) => {
        switch (f.type) {
          case "top":
            return p.dimension === "l" && P.equalTo(p.y1, r.y + r.w) && P.lessThanOrEqualTo(p.x1, r.x) && P.greaterThanOrEqualTo(p.x2, r.x + r.l);
          case "bottom":
            return p.dimension === "l" && P.equalTo(p.y1, r.y) && P.lessThanOrEqualTo(p.x1, r.x) && P.greaterThanOrEqualTo(p.x2, r.x + r.l);
          case "left":
            return p.dimension === "w" && P.equalTo(p.x1, r.x) && P.lessThanOrEqualTo(p.y1, r.y) && P.greaterThanOrEqualTo(p.y2, r.y + r.w);
          case "right":
            return p.dimension === "w" && P.equalTo(p.x1, r.x + r.l) && P.lessThanOrEqualTo(p.y1, r.y) && P.greaterThanOrEqualTo(p.y2, r.y + r.w);
        }
      }), d = u(), m = h();
      return d || m;
    });
    return c || (n = r, a.push(r.autoId)), c;
  });
  return s && (n = null, a.length = 0), { allShapesCut: s, uncutShape: n, uncutShapeAutoIds: a };
}
function Gs(e, t) {
  return e?.length && e.forEach((i) => {
    t = t.filter((n) => !(n.id === i.id || R(n) && n.shapes.find((a) => a.id === i.id)));
  }), t;
}
const Q = {
  custom: null,
  efficiency: {
    standard() {
      return {
        compression: 10,
        exactFit: 1,
        similarDimensions: 1,
        cohesion: 1,
        edge: 1,
        alignment: 0.3,
        area: 0.1,
        fill: 0
      };
    }
  },
  guillotine: {
    standard() {
      return {
        exactStripFill: 1,
        compression: 1,
        aspectRatio: 1,
        cohesion: 0.7,
        fill: 0.4,
        sameStripBonus: 0.2,
        similarDimensions: 0.3,
        fenceConsistency: 0
      };
    },
    time() {
      const e = this.standard();
      return e.similarDimensions = 1, e.fenceConsistency = 1, e;
    },
    stock() {
      return this.standard();
    },
    beam() {
      const e = this.standard();
      return e.similarDimensions = 0, e;
    }
  },
  roll: {
    guillotine() {
      return {
        // sameStripBonus: 0,
        exactStripFill: 5,
        //bonus for exactly filling a row
        similarDimensions: 5,
        compression: 1,
        //row compression
        cohesion: 1,
        fill: 1,
        fenceConsistency: 0
        //reward consistent dimensions between strips (used for time mode)
      };
    },
    efficiency() {
      return {
        compression: 10,
        edge: 0.5,
        exactFit: 0.5,
        similarDimensions: 0.5,
        cohesion: 1,
        fill: 0.3,
        area: 0.3,
        alignment: 0.2
      };
    }
  }
};
function ae(e, t) {
  if (!t) return e;
  const i = t.weighting;
  if (!i) return e;
  for (const n in i)
    i[n] !== null && (e[n] = e[n] * i[n]);
  return e;
}
function pt(e, t, i) {
  if (this?.weighting?.custom)
    return ae(this.weighting.custom, i);
  switch (e.cutType) {
    case "efficiency":
      if (t?.saw?.stockType === "roll")
        return ae(Q.roll.efficiency(), i);
      break;
    case "beam":
      return ae(Q.guillotine.beam(), i);
    case "guillotine": {
      if (t?.saw?.stockType === "roll")
        return ae(Q.roll.guillotine(), i);
      switch (t.saw.guillotineOptions.strategy) {
        case "time":
          return ae(
            Q.guillotine.time(),
            i
          );
        case "efficiency":
          return ae(
            Q.guillotine.stock(),
            i
          );
        default:
          return ae(
            Q.guillotine.stock(),
            i
          );
      }
    }
  }
  return ae(Q[e.cutType].standard(), i);
}
class Ns {
  CLO;
  selectionMethod;
  bestResult;
  shapeList;
  uniqueShapes;
  container;
  benchmark;
  firstShape;
  firstShapeRotation;
  stripShapes;
  iteration;
  //stripShapeIteration
  weightingKeys;
  weighting;
  population;
  progress;
  mutation;
  options;
  abort;
  evolutionVisData;
  constructor(t, i, n) {
    if (typeof i != "object")
      throw new Error(`stock must be a single object in Ecosystem ${typeof i}`);
    this.CLO = t, this.abort = !1, this.mutation = {
      range: 2,
      min: 0,
      max: 10,
      rate: 0.1
    }, this.weightingKeys = {
      efficiency: [
        "compression",
        "alignment",
        "edge",
        "exactFit",
        "fill",
        "area",
        "side",
        "similarDimensions"
      ],
      guillotine: [
        "compression",
        "exactStripFill",
        "fill",
        "similarDimensions",
        "cutDimension"
      ],
      roll: [
        "exactStripFill",
        "cutDimension",
        "secondaryDimension"
      ]
    }, this.container = i, this.shapeList = n, this.CLO.resetShapes(n), this.selectionMethod = t.successMetric, this.firstShape = i.algoBenchmark?.firstShape, this.firstShapeRotation = i.algoBenchmark?.firstShapeRotation, this.benchmark = {
      score: i.algoBenchmark.score[this.selectionMethod],
      weighting: pt.call(
        this.CLO,
        i,
        j(i) ? i : i.getStock
      )
    }, this.weighting = this.weightingKeys[this.container.cutType], i?.saw?.stockType === "roll" && (this.selectionMethod = "rollLength", this.weighting = this.weightingKeys.roll), this.uniqueShapes = ue(n, !1), this.population = [], this.options = {
      populationSize: 6,
      steps: 6,
      benchmarkCutoff: !0,
      recentScoreCutOff: 3
    }, this.progress = {
      total: this.options.steps * this.options.populationSize,
      current: 0
    }, this.evolutionVisData = [];
  }
  createPopulation() {
    this.population.length = 0;
    for (let t = 0; t < this.options.populationSize - 1; t++)
      this.population.push(new zt(this, t));
    this.population.push(new zt(
      this,
      this.options.populationSize,
      this.benchmark.weighting
    ));
  }
  getBestIndividual() {
    return this.population.reduce((i, n) => {
      const a = "bestScore";
      return i?.[a]?.[this.selectionMethod] > n?.[a]?.[this.selectionMethod] ? i : n;
    });
  }
  recordResult(t, i) {
    if (i)
      if (!this.bestResult)
        this.bestResult = t, this.bestResult.weighting = structuredClone(i.weighting), R(this.bestResult.firstShape) && this.bestResult.firstShape.shapes.forEach((n) => t.shapes.push(n.compress()));
      else {
        if (t.score.efficiency <= this.bestResult.score.efficiency)
          return;
        this.bestResult = t, this.bestResult.weighting = structuredClone(i.weighting), R(this.bestResult.firstShape) && this.bestResult.firstShape.shapes.forEach((n) => t.shapes.push(n.compress()));
      }
  }
  async run() {
    this.CLO.runningEvo = !0, this.CLO.resetShapes(this.shapeList), this.createPopulation();
    async function t() {
      for (let i = 0; i < this.options.steps; i++) {
        for (const a of this.population)
          await a.assess();
        const n = this.getBestIndividual();
        if (this.population.every((a) => a?.bestScore?.[this.selectionMethod] === n?.bestScore?.[this.selectionMethod]))
          return;
        for (const a of this.population)
          try {
            a.alive && a.updatePosition(n);
          } catch (s) {
            console.log(s);
          }
      }
    }
    return await t.call(this), this.CLO.runningEvo = !1, this.bestResult.type = "evo", {
      result: this.bestResult,
      evolutionVisData: this.evolutionVisData
    };
  }
}
class zt {
  swarm;
  id;
  alive;
  weighting;
  score;
  //includes position information
  previousScore;
  bestScore;
  //includes position information
  speed;
  socialInfluence;
  improving;
  following;
  //which individual is this individual following
  firstShape;
  firstShapeRotation;
  stripShapes;
  iteration;
  stockID;
  type;
  cutType;
  shapes;
  recentScores;
  constructor(t, i, n = null) {
    this.swarm = t, this.id = i, this.alive = !0, this.weighting = n, this.score = null, this.bestScore = null, this.previousScore = null, this.speed = 1, this.socialInfluence = 0.8, this.improving = !1, this.following = null, this.firstShape = this.swarm.firstShape, this.firstShapeRotation = this.swarm.firstShapeRotation, this.stripShapes = this.swarm.stripShapes, this.iteration = this.swarm.iteration, this.type = "evo", this.cutType = this.swarm.container.saw.cutType, this.stockID = this.swarm.container.id, this.recentScores = [], this.weighting || this.createRandomWeighting();
  }
  //create weighting
  createRandomWeighting() {
    const t = Q.efficiency.standard();
    this.weighting = {};
    for (const [i, n] of Object.entries(t)) {
      const a = n;
      if (this.swarm?.weighting && this.swarm.weighting.indexOf(i) > -1) {
        let s = a - this.swarm.mutation.range, r = a + this.swarm.mutation.range;
        s < this.swarm.mutation.min && (s = this.swarm.mutation.min), r > this.swarm.mutation.max && (r = this.swarm.mutation.max), this.weighting[i] = We(s, r);
      } else this.weighting[i] = t[i];
    }
  }
  //assess fitness and generate a score
  async assess() {
    if (this.swarm.progress.current++, !!this.alive) {
      switch (this.previousScore = this.score, this.previousScore && (this.previousScore.weighting = this.weighting), this.swarm.container.cutType) {
        case "efficiency":
          {
            const t = await ge.runSpecificStrategy.call(
              this.swarm.CLO,
              {
                shapes: this.swarm.shapeList,
                container: this.swarm.container,
                firstShape: this.swarm.firstShape,
                firstShapeRotation: this.swarm.firstShapeRotation,
                weighting: this.weighting
              }
            );
            this.score = t.score, this.swarm.recordResult(t, this);
          }
          break;
      }
      if (this.swarm.CLO.resetShapes(this.swarm.shapeList), !this.score || !this.score?.[this.swarm.selectionMethod])
        return this.kill(), !1;
      if (this.recentScores.push(this.score[this.swarm.selectionMethod]), this.swarm.options.recentScoreCutOff > 0) {
        this.recentScores = this.recentScores.slice(Math.max(
          this.recentScores.length - this.swarm.options.recentScoreCutOff,
          0
        ));
        const t = this.swarm.getBestIndividual();
        t.bestScore && this.recentScores.length === this.swarm.options.recentScoreCutOff && this.recentScores.every((i) => i === t?.bestScore?.[this.swarm.selectionMethod]) && this.kill();
      }
      if (this.improving = !1, this.bestScore === null && (this.bestScore = this.score, this.bestScore.weighting = this.weighting), this.score[this.swarm.selectionMethod] > this.bestScore[this.swarm.selectionMethod] && (this.improving = !0, this.bestScore = this.score, this.bestScore.weighting = this.weighting), this.isWinner()) return !0;
    }
  }
  //update the velocity based on the best individual and own experience
  updatePosition(t) {
    this.speed = 1, this.socialInfluence = 0.5;
    const i = this.score[this.swarm.selectionMethod] === t.score[this.swarm.selectionMethod];
    i ? this.following = null : this.following && this.following.score[this.swarm.selectionMethod] !== t.score[this.swarm.selectionMethod] && (this.following = null), i ? (this.socialInfluence = 0.1, this.previousScore && (this.speed = this.improving ? -1 : 1)) : this.following || (this.following = t);
    for (const [n, a] of Object.entries(this.weighting)) {
      let s = 0;
      i ? this.previousScore ? s = this.previousScore.weighting[n] - a : s = this.swarm.benchmark.weighting[n] - a : s = this.following.bestScore.weighting[n] - a;
      let r = s * this.speed * this.socialInfluence;
      i ? r += We(-0.1, 0.1) : r += We(-0.05, 0.05), this.weighting[n] += r;
    }
  }
  //check if this individual is a winner
  isWinner() {
    if (!this.score || typeof this.score[this.swarm.selectionMethod] > "u")
      throw new Error("score is not defined");
    return this.swarm?.shapeList?.length ? this.swarm.shapeList?.length === 1 || this.swarm.container.cutType === "efficiency" && this.score.totalShapesPlaced === this.swarm.shapeList?.length ? !0 : this.swarm.options.benchmarkCutoff && this.score[this.swarm.selectionMethod] > this.swarm.benchmark ? (this.swarm.abort = !0, !0) : this.swarm.container.cutType === "efficiency" && !this.score.unplacedShapes : !1;
  }
  kill() {
    this.alive = !1;
  }
}
function Bs(e, t) {
  const i = ue(e, !1);
  for (const n of t) {
    const a = i.filter((o) => o.stockLock.includes(n.parentId));
    if (!a.length) continue;
    const s = a.map((o) => o.area), r = s.reduce((o, c) => o + c, 0) / a.length;
    if (!(P.calculateCoefficientOfVariation(s) < this.config.priority.variationThreshold))
      for (const o of a) {
        o.priority || (o.priority = {});
        const c = Hs(o, n, r);
        o.priority[n.parentId] = c, e.filter((u) => u.id !== o.id && u.parentId === o.parentId).forEach((u) => {
          u.priority || (u.priority = {}), u.priority[n.parentId] = c;
        });
      }
  }
}
function Hs(e, t, i) {
  if (e.isExactFit(t) || e.area >= t.area * 0.9 || e.longSide >= t.longSide * 0.9)
    return 1;
  const n = e.area, a = t.area, s = n / a;
  return n > i ? s : 0;
}
function Ws(e, t) {
  return e.reduce((i, n) => {
    const a = n.getPriority(t), s = i.getPriority(t);
    return a > s ? n : i;
  });
}
function Us(e, t, i = null) {
  let n;
  if (t?.length) {
    if (!t.length) return 1;
    const a = t.reduce((s, r) => s.area > r.area ? s : r);
    n = e.area / a.area;
  } else i && (n = e.area / i.area);
  if (n > 1) return 1;
  if (!n)
    throw new Error("no area score found");
  return n;
}
function mi(e, t, i = "y") {
  if (!e || !t || e[i] === void 0 || !t.area || t.area === 0) return 0;
  const n = ce(i), a = n === "y" ? "w" : "l", s = t[i] ?? 0, r = t[n] ?? 0, c = (e[i] - s) * t[a] / t.area, h = (e[n] - r) / t[a] * t.aspect * 0.01;
  return 1 - (c + h);
}
function yi(e, t, i = "y") {
  if (!e || !t) return 0;
  "grain" in t && t.grain === "w" && (i = ce(i));
  const n = i === "y" ? "w" : "l";
  return (e[i] + e[n]) / t[n];
}
function zs(e, t, i) {
  const n = i.bladeWidth;
  return [
    // 0 left to left
    e.x === t.x,
    // 1 left to right
    e.x === t.x + t.l + n,
    // 2 bottom to bottom
    e.y === t.y,
    // 3 bottom to top
    e.y === t.y + t.w + n,
    // 4 right to left
    e.x + e.l === t.x - n,
    // 5 right to right
    e.x + e.l === t.x + t.l,
    // 6 top to bottom
    e.y + e.w === t.y - n,
    // 7 top to top
    e.y + e.w === t.y + t.w
  ];
}
function js(e, t, i) {
  let n = 0, a = 0;
  if (!e || !t || !i)
    return {
      possibleAlignments: n,
      positiveAlignments: a
    };
  if (e.autoId === t.autoId)
    return {
      possibleAlignments: 0,
      positiveAlignments: 0
    };
  const s = (r, l) => {
    const o = zs(r, l, i);
    n += o.length, a += o.reduce(
      (c, f) => f ? c + 1 : c,
      0
    );
  };
  return R(e) ? e.shapes.forEach((r) => {
    R(t) ? t.shapes.forEach((l) => {
      s(r, l);
    }) : s(r, t);
  }) : R(t) ? t.shapes.forEach((r) => {
    s(e, r);
  }) : s(e, t), { positiveAlignments: a, possibleAlignments: n };
}
function Ys(e, t, i) {
  if (!e || !t || !i)
    return [!1, !1, !1, !1];
  if (e.autoId === t.autoId)
    return [!1, !1, !1, !1];
  const n = i.bladeWidth, a = e.x, s = e.x + e.l, r = e.y + e.w, l = e.y, o = t.x, c = t.x + t.l, f = t.y + t.w, u = t.y, h = () => a === c + n && (l >= u && l < f || r <= f && r > u), d = () => s + n === o && (l >= u && l < f || r <= f && r > u), m = () => l === f + n && (a >= o && a < c || s <= c && s > o), w = () => l + n === u && (a >= o && a < c || s <= c && s > o);
  return [
    h(),
    d(),
    m(),
    w()
  ];
}
function Xs(e, t) {
  return e.l === t.l && e.x === t.x;
}
function Vs(e, t) {
  return e.w === t.w && e.y === t.y;
}
function wi(e, t, i, n = {}) {
  if (e.autoId === t.autoId)
    return {
      contactResult: [],
      cohesion: 0,
      alignment: null,
      similarDimensions: 0,
      type: null,
      neighbour: t,
      neighbours: 0
    };
  const {
    contact: a = !0,
    alignment: s = !0,
    similarDimensions: r = !0,
    cohesion: l = !0
  } = n;
  let o = [];
  a && (o = Ys(e, t, i));
  const c = o.filter(Boolean).length;
  if (c > 1)
    throw new Error("number of neighbours should not be greater than one for a single test shape");
  if (c === 0)
    return {
      contactResult: o,
      cohesion: 0,
      alignment: null,
      similarDimensions: 0,
      type: null,
      neighbour: t,
      neighbours: c
    };
  const f = ["lr", "rl", "bt", "tb"], u = o.findIndex(Boolean), h = f[u];
  if (!h) throw new Error("no contact type found");
  let d = null, m = null, w = 0;
  if (l && h && (d = Ks(e, t, h)), s && (m = js(e, t, i)), r) {
    const p = h === "rl" || h === "lr", S = h === "tb" || h === "bt", g = Vs(e, t), I = Xs(e, t);
    (p && g || S && I) && (w = I && g ? 1 : 0.5);
  }
  return {
    contactResult: o,
    cohesion: d,
    alignment: m,
    similarDimensions: w,
    type: h,
    neighbour: t,
    neighbours: c
  };
}
function _s(e, t) {
  if (!t)
    throw new Error(`edge - no stock defined for shape ${e.id}`);
  const i = t.bladeWidth, n = e.w / t.w, a = e.l / t.l;
  return [
    // 0 left
    e.x - i <= 0 ? n : 0,
    // 1 right
    e.x + e.l + i >= t.l ? n : 0,
    // 2 bottom
    e.y - i <= 0 ? a : 0,
    // 3 top
    e.y + e.w + i >= t.w ? a : 0
  ].reduce((l, o) => l + o, 0);
}
function Ks(e, t, i) {
  if (!e || !t || !i) return 0;
  const n = Js(e, t), a = jt(e), s = jt(t), r = a + s, l = Math.max(n.l * n.w, r), o = Math.min(1, Math.max(0, r / l)), c = Math.min(1, Math.max(
    0,
    Qs(e, t, i) || 0
  )), f = o * 0.7 + c * 0.3;
  return Math.min(1, Math.max(0, f));
}
function Js(e, t) {
  const i = qe(e), n = qe(t), a = Math.min(i.x, n.x), s = Math.min(i.y, n.y), r = Math.max(i.x + i.l, n.x + n.l), l = Math.max(i.y + i.w, n.y + n.w);
  return {
    x: a,
    y: s,
    l: r - a,
    w: l - s
  };
}
function qe(e) {
  if (R(e)) {
    let t = 1 / 0, i = 1 / 0, n = -1 / 0, a = -1 / 0;
    return e.shapes.forEach((s) => {
      t = Math.min(t, s.x), i = Math.min(i, s.y), n = Math.max(n, s.x + s.l), a = Math.max(a, s.y + s.w);
    }), {
      x: t,
      y: i,
      l: n - t,
      w: a - i
    };
  }
  return e;
}
function jt(e) {
  return R(e) ? e.shapes.reduce((t, i) => t + i.area, 0) : e.area;
}
function Qs(e, t, i) {
  const n = qe(e), a = qe(t);
  if (i === "lr" || i === "rl") {
    const s = Math.max(n.w, a.w);
    if (s === 0) return 0;
    const r = Math.min(n.w, a.w) / s;
    return Math.max(0, r);
  }
  if (i === "tb" || i === "bt") {
    const s = Math.max(n.l, a.l);
    if (s === 0) return 0;
    const r = Math.min(n.l, a.l) / s;
    return Math.max(0, r);
  }
  return 0;
}
async function Zs(e, t, i, n) {
  return await ge.runSpecificStrategy.call(this, {
    shapes: e,
    container: t,
    firstShape: i,
    firstShapeRotation: n
  });
}
function Yt(e, t, i, n = null, a = null, s = null, r = null) {
  if (!n)
    throw new Error("shapePosition was not passed any placed shapes");
  if (!a)
    throw new Error("shapePosition was not passed any unplaced shapes");
  U(t) ? en(
    e,
    t,
    i,
    n,
    r
    // tidy
  ) : $i(
    e,
    t,
    i,
    n,
    s
  );
}
function en(e, t, i = null, n = [], a = null) {
  e.resetScore();
  const s = {
    compression: 0,
    fill: 0,
    similarDimensions: 0,
    fenceConsistency: 0,
    sameStripBonus: 0,
    exactStripFill: 0,
    cohesion: 0,
    total: 0,
    cutDirection: t.cutDirection
  }, r = t.cutPreference, l = t.cutDirection, o = t.getStock.bladeWidth, { cutAxis: c } = ui(l), f = us(e, a);
  if (!f) return !1;
  const u = te(f);
  let h = u;
  const d = u === "l" ? "w" : "l";
  f[d] !== e[d] && (h = N(u));
  const m = ri(e, f, d);
  if (t.saw.guillotineOptions.maxPhase && m > t.saw.guillotineOptions.maxPhase) return !1;
  const w = te(f) ?? t.cutDirection;
  if (!w) throw new Error("keyDimension is not defined");
  const p = ct(f);
  if (p) {
    const C = ce(Fe(te(p))), y = Xe(e, p, C);
    if (p.guillotineState.myPhase <= 2 && !y) return !1;
  }
  let S = !1;
  t.firstShape && (S = e[c] > t.firstShape[c]);
  const g = {
    lr: [],
    bt: [],
    tb: [],
    rl: []
  };
  for (const C of n) {
    const y = wi(
      e,
      C,
      t,
      {
        contact: !0,
        cohesion: !!i.cohesion,
        alignment: !!i.alignment,
        similarDimensions: !!i.similarDimensions
      }
    );
    y.type && (g[y.type].push(C), "cohesion" in s && i.cohesion && S && (s.cohesion += y.cohesion), "similarDimensions" in s && i.similarDimensions && (s.similarDimensions += y?.similarDimensions ? y.similarDimensions : 0), "fenceConsistency" in s && i.fenceConsistency && (r === "w" ? y.type === "lr" && y.neighbour.l === e.l && y.neighbour.y === e.y && (s.fenceConsistency = 1) : r === "l" && y.type === "bt" && y.neighbour.w === e.w && y.neighbour.x === e.x && (s.fenceConsistency = 1)));
  }
  if ("exactStripFill" in s && i.exactStripFill && f) {
    const C = N(te(f)), y = e[C] + o;
    s.exactStripFill = y >= f[C] && y < f[C] + o ? 1 : 0;
  }
  if ("compression" in s && i.compression) {
    const C = w === "l" ? "y" : "x";
    s.compression = mi(
      e,
      t,
      C
    );
  }
  if ("fill" in s && i.fill) {
    const C = w === "l" ? "y" : "x";
    s.fill = yi(e, t, C);
  }
  if (s.cohesion = Math.max(0, s.cohesion), "sameStripBonus" in s && i.sameStripBonus && t.firstShape) {
    const C = te(f);
    if (!S)
      s.sameStripBonus = 0;
    else if (C === "w" && g?.bt?.length) {
      const y = Se(g.bt, "x"), k = y.x + y.l;
      e.x + e.l > k && (s.sameStripBonus = 0, s.cohesion = 0);
    } else if (C === "l" && g?.lr?.length) {
      const y = Se(g.lr, "y"), k = y.y + y.w;
      e.y + e.w > k && (s.sameStripBonus = 0, s.cohesion = 0);
    } else
      s.sameStripBonus = 1;
  }
  if (i.aspectRatio) {
    const C = e.aspect, y = te(f);
    C < 0.1 ? e[y] > e[N(y)] && (s.aspectRatio = 1) : s.aspectRatio = 0;
  }
  const I = { ...s };
  Object.keys(s).forEach((C) => {
    if (typeof s[C] == "number") {
      const y = s[C];
      y < 0 ? I[C] = y : I[C] = i[C] ? y * i[C] : 0;
    }
  }), e.score = I;
  let b = 0;
  for (const C of Object.values(e.score))
    typeof C == "number" && (b += C);
  if (e.score.total = b, e.score.total < 0 && (e.score.total = 0), isNaN(e.score.total)) throw new Error("score is not a number");
  return e.score.cutDirection = l, e.score.myStripParent = f, e.score.myStripDirection = h, e.score.myPhase = m, e.score.total > (e?.bestScore?.total || 0) && e.setBestScore(e), !0;
}
function $i(e, t, i, n, a) {
  e.resetScore();
  const s = {
    fill: 0,
    similarDimensions: 0,
    compression: 0,
    cohesion: 0,
    area: 0,
    edge: 0,
    alignment: 0,
    exactFit: 0,
    total: 0
    // shapes: []
  };
  "edge" in s && i.edge && (s.edge = _s(e, t)), "fill" in s && i.fill && (s.fill = yi(
    e,
    t,
    t?.saw?.efficiencyOptions?.primaryCompression ?? "w"
  )), "compression" in s && i.compression && (s.compression = mi(
    e,
    t,
    t?.saw?.efficiencyOptions?.primaryCompression ?? "w"
  ));
  let r = 0, l = 0;
  const o = {
    lr: !1,
    rl: !1,
    bt: !1,
    tb: !1
  };
  for (const u of n) {
    const h = wi(
      e,
      u,
      t,
      {
        contact: !0,
        cohesion: !!i.cohesion,
        alignment: !!i.alignment,
        similarDimensions: !!i.similarDimensions
      }
    );
    h.type && (o[h.type] = !0, i.alignment && h.alignment && (l += h.alignment.positiveAlignments, r += h.alignment.possibleAlignments), i.cohesion && (s.cohesion += h.cohesion), i.similarDimensions && (s.similarDimensions += h?.similarDimensions ? h.similarDimensions : 0));
  }
  s.similarDimensions /= 4, r === 0 ? s.alignment = 0 : s.alignment = l / r, i.exactFit && (e.l === t.l || e.w === t.w) && (s.exactFit = 1), i.area && (s.area = Us(e, n, t));
  const c = { ...s };
  Object.keys(s).forEach((u) => {
    if (typeof s[u] == "number") {
      const h = s[u];
      c[u] = i[u] ? h * i[u] : 0;
    }
  }), e.score = c;
  let f = 0;
  for (const u of Object.values(e.score))
    typeof u == "number" && (f += u);
  if (e.score.total = f, isNaN(e.score.total))
    throw new Error("thisShape.score.total is not a number: " + JSON.stringify(e.score));
  e.score?.total > (e?.bestScore?.total || 0) && e.setBestScore(e, a);
}
function oe(e, t, i) {
  const n = this.shapeList.reduce(
    (x, E) => E.added ? x : ++x,
    0
  );
  let a, s, r;
  const l = t.getStock;
  if (!l) return !1;
  const o = e, c = j(t) ? K(o, l) : e.filter((x) => x.added);
  let f;
  c.length && (f = Ws(c, l)), f && !f.getPriority(l) && (f = null);
  const u = c.length, h = Math.max(...c.map((x) => x.x + x.l)), d = Math.max(...c.map((x) => x.y + x.w));
  let m = 0, w = null, p = null, S;
  if (i || (i = e.find((x) => x.x === (t.x || 0) && x.y === (t.y || 0))), !i) return !1;
  const g = i.area;
  let I = null;
  const b = t.area, C = c.reduce((x, E) => x + E.area, 0);
  if (j(t)) {
    if (t.cutType === "efficiency" ? (S = t.primaryCompression ?? "w", m = Ue(
      c,
      S,
      l.bladeWidth
    ), I = i?.bestScore?.total, m = m / t[S === "l" ? "l" : "w"]) : (S = t.cutPreference === "l" ? "x" : "y", m = Ue(
      c,
      S,
      l.bladeWidth
    ), m = m / t[S === "x" ? "l" : "w"]), t.cutType === "guillotine" && (a = e.filter((x) => x.added && ut(x) === 1).length), r = C / b, pe() && A([() => T(r).to.be.lessThanOrEqual(1)]), t?.saw?.stockType === "roll") {
      const x = Se(c, "x");
      s = x.x + x.l;
    }
  } else if (U(t)) {
    S = l.cutPreference === "l" ? "x" : "y", m = Ue(
      c,
      S,
      l.bladeWidth
    ), m = m / t[S === "x" ? "w" : "l"];
    const x = N(l.cutPreference), E = x === "l" ? "x" : "y";
    if (w = l[x] - (i[x] + i[E] + l.bladeWidth), p = i[x], t.cutPreference === "flex")
      throw new Error("cut preference is set to flex, it should be l or w at this point");
    r = C / b;
  } else
    r = C / b;
  const y = c.reduce((x, E) => x + (E?.bestScore?.total ?? 0), 0), k = V(e, t).length + u, D = V(e, l).length + u, q = c.map((x) => x.compress());
  return {
    type: this.tidyStrategy ? "tidy" : "algo",
    stockID: l.id,
    stock: l,
    container: t,
    firstShape: i,
    firstShapeRotation: i.rot,
    topPriorityShape: f ? f.id : null,
    cutPreference: l.cutPreference,
    cutType: l.saw.cutType,
    segmentCutDirection: U(t) ? t.cutDirection : null,
    // Result contains individual shapes (groups have already called placeMyShapes)
    shapes: q,
    score: {
      efficiency: r,
      totalShapeArea: C,
      totalShapesPlaced: u,
      totalShapeScore: y,
      firstRowLength: m,
      // firstShapeFill,
      firstShapeArea: g,
      firstShapeScore: I,
      containerAvailableShapes: k,
      stockAvailableShapes: D,
      totalUnplacedShapes: n,
      rollLength: s || null,
      maxX: h,
      maxY: d,
      stripShapes: a || null,
      stripSize: p || null,
      remainingStripSpace: w || null,
      uniqueStock: this.uniqueStock.length
    }
  };
}
function tn(e, t, i = "sheet") {
  if (e && e?.length) {
    if (e.length === 1) return e[0];
    switch (e = e.filter((n) => n.score?.efficiency), i) {
      case "sheet":
        switch (t) {
          case "tidy":
            e.sort(nn.bind(this));
            break;
          case "strip":
            e.sort(Xt.bind(this));
            break;
          case "guillotine":
          case "beam":
            e.sort(on.bind(this));
            break;
          default:
            e.sort(an.bind(this));
            break;
        }
        break;
      case "linear":
        e.sort(sn);
        break;
      case "roll":
        switch (t) {
          case "guillotine":
          case "strip":
            e.find((n) => n.score.containerAvailableShapes === 0) && (e = e.filter((n) => n.score.containerAvailableShapes === 0)), e.sort(Xt);
            break;
          case "efficiency": {
            e.sort(rn);
            break;
          }
        }
        break;
    }
    return e[0];
  }
}
function sn(e, t) {
  return t.score.efficiency - e.score.efficiency;
}
function Xt(e, t) {
  if (A([() => T(e.score).to.exist, () => T(t.score).to.exist]), !e.score || !t.score) return 0;
  const i = e.score.totalShapesPlaced === e.score.containerAvailableShapes || t.score.totalShapesPlaced === t.score.containerAvailableShapes, n = e.score.stockAvailableShapes === e.score.totalShapesPlaced, a = t.score.stockAvailableShapes === t.score.totalShapesPlaced, r = (e?.stock?.saw?.cutPreference || t?.stock?.saw?.cutPreference || "l") === "l" ? "w" : "l", l = e?.stock?.l || t?.stock?.l, o = e?.stock?.w || t?.stock?.w, c = e?.stock?.saw?.bladeWidth || t?.stock?.saw?.bladeWidth || 0, f = r === "w" ? o - c : l - c, u = e.firstShape && (r === "w" ? e.firstShape.w > f * 0.5 : e.firstShape.l > f * 0.5), h = t.firstShape && (r === "w" ? t.firstShape.w > f * 0.5 : t.firstShape.l > f * 0.5), d = e.firstShape?.orientationLock && e.firstShape.orientationLock !== r, m = t.firstShape?.orientationLock && t.firstShape.orientationLock !== r, p = ((x, E) => {
    const H = Math.abs(x - E);
    return i ? Math.min(0.35, 0.2 + H * 0.3) : H > 0.5 ? Math.min(0.4, 0.2 + H * 0.2) : 0.2;
  })(e.score.efficiency, t.score.efficiency), S = (x, E) => {
    const O = x.score.stockAvailableShapes - x.score.totalShapesPlaced;
    if (O <= 0) return !0;
    let H;
    r === "w" ? H = o - x.score.maxY - (O > 0 ? c : 0) : H = l - x.score.maxX - (O > 0 ? c : 0);
    const L = r === "l" ? H : l - x.score.maxX, F = r === "w" ? H : o - x.score.maxY;
    if (L <= 0 || F <= 0)
      return 0;
    const z = new $e({
      l: L,
      w: F,
      saw: x?.stock?.saw,
      stockType: x?.stock?.stockType
    });
    if (E.firstShape) {
      const Y = ie(E.firstShape, z, null, x?.stock?.saw), ee = r === "w" && E.firstShape.w > f * 0.5 || r === "l" && E.firstShape.l > f * 0.5;
      if (Y && !ee && O > 1) {
        const he = f * 0.7;
        return H >= he;
      }
      return Y;
    }
    return H >= f * 0.3;
  }, g = (x, E) => {
    if (n && a || !n && !a) return 0;
    if (x.score.stockAvailableShapes === x.score.totalShapesPlaced)
      return 0.1;
    if (!S(x, E)) {
      const L = x.score.stockAvailableShapes - x.score.totalShapesPlaced;
      return -Math.min(0.3, 0.1 + L * 0.05);
    }
    return 0;
  }, I = u && d, b = h && m;
  if (I && !b)
    return S(t, e) && t.score.efficiency > e.score.efficiency + p ? 1 : -1;
  if (b && !I)
    return S(e, t) && e.score.efficiency > t.score.efficiency + p ? -1 : 1;
  if (u && !h)
    return S(t, e) && t.score.efficiency > e.score.efficiency + p ? 1 : -1;
  if (h && !u)
    return S(e, t) && e.score.efficiency > t.score.efficiency + p ? -1 : 1;
  if (i) {
    if (n && !a)
      return t.score.efficiency > e.score.efficiency + 0.15 ? 1 : -1;
    if (a && !n)
      return e.score.efficiency > t.score.efficiency + 0.15 ? -1 : 1;
  }
  const C = e.score.efficiency + g(e, t), y = t.score.efficiency + g(t, e);
  if (C > y) return -1;
  if (C < y) return 1;
  const k = e.score.stockAvailableShapes - e.score.totalShapesPlaced, D = t.score.stockAvailableShapes - t.score.totalShapesPlaced;
  let q, M;
  if (r === "w" ? (q = o - e.score.maxY - (k > 0 ? c : 0), M = o - t.score.maxY - (D > 0 ? c : 0)) : (q = l - e.score.maxX - (k > 0 ? c : 0), M = l - t.score.maxX - (D > 0 ? c : 0)), k > 0 || D > 0) {
    const x = r === "l" ? q : l - e.score.maxX, E = r === "w" ? q : o - e.score.maxY, O = r === "l" ? M : l - t.score.maxX, H = r === "w" ? M : o - t.score.maxY, L = x > 0 && E > 0, F = O > 0 && H > 0;
    if (L && !F) return -1;
    if (F && !L) return 1;
    if (!L && !F)
      return 0;
    const z = new $e({
      l: x,
      w: E,
      saw: e?.stock?.saw,
      stockType: e?.stock?.stockType
    }), Y = new $e({
      l: O,
      w: H,
      saw: t?.stock?.saw,
      stockType: t?.stock?.stockType
    });
    if (e.firstShape && (r === "w" && e.firstShape.w > f * 0.5 || r === "l" && e.firstShape.l > f * 0.5)) {
      const ee = k > 0 && ie(e.firstShape, z, null, e?.stock?.saw), he = D > 0 && ie(e.firstShape, Y, null, t?.stock?.saw);
      if (ee && !he) return -1;
      if (he && !ee) return 1;
    }
    if (t.firstShape && (r === "w" && t.firstShape.w > f * 0.5 || r === "l" && t.firstShape.l > f * 0.5)) {
      const ee = k > 0 && ie(t.firstShape, z, null, e?.stock?.saw), he = D > 0 && ie(t.firstShape, Y, null, t?.stock?.saw);
      if (ee && !he) return -1;
      if (he && !ee) return 1;
    }
  }
  if (k > 0 && D > 0) {
    const x = f / 2;
    if (q < x && M >= x)
      return 1;
    if (M < x && q >= x)
      return -1;
  }
  if (i) {
    const x = e.score.maxX * e.score.maxY, E = t.score.maxX * t.score.maxY;
    if (x < E) return -1;
    if (x > E) return 1;
  }
  return e.shapes?.length < t.shapes?.length ? -1 : e.shapes?.length > t.shapes?.length ? 1 : e?.firstShape?.area > t?.firstShape?.area ? -1 : e?.firstShape?.area < t?.firstShape?.area ? 1 : 0;
}
function nn(e, t) {
  return e.score[this.config.successMetric] > t.score[this.config.successMetric] ? -1 : e.score[this.config.successMetric] < t.score[this.config.successMetric] ? 1 : e.score.firstShapeFill > t.score.firstShapeFill ? -1 : e.score.firstShapeFill < t.score.firstShapeFill ? 1 : e.score.firstRowLength > t.score.firstRowLength ? -1 : e.score.firstRowLength < t.score.firstRowLength ? 1 : e.score.totalShapeScore > t.score.totalShapeScore ? -1 : e.score.totalShapeScore < t.score.totalShapeScore ? 1 : 0;
}
function xi(e, t) {
  if (e.cutType === "guillotine" && t.cutType === "guillotine") {
    if (e.stock.cutPreference === t.stock.cutPreference) {
      const i = e.stock.cutPreference === "l" ? "maxY" : "maxX";
      if (e.score[i] < t.score[i]) return -1;
      if (e.score[i] > t.score[i]) return 1;
    }
    return 0;
  } else if (e.cutType === "efficiency" && t.cutType === "efficiency") {
    if (e.stock.saw.efficiencyOptions.primaryCompression === t.stock.saw.efficiencyOptions.primaryCompression) {
      const i = e.stock.saw.efficiencyOptions.primaryCompression === "w" ? "maxY" : "maxX";
      if (e.score[i] < t.score[i]) return -1;
      if (e.score[i] > t.score[i]) return 1;
    }
    return 0;
  }
  return 0;
}
function rn(e, t) {
  return e.score.efficiency > t.score.efficiency ? -1 : e.score.efficiency < t.score.efficiency ? 1 : e.type !== "evo" && t.type === "evo" ? -1 : e.type === "evo" && t.type !== "evo" ? 1 : e.shapes?.length < t.shapes?.length ? -1 : e.shapes?.length > t.shapes?.length ? 1 : e.score.totalShapeScore > t.score.totalShapeScore ? -1 : e.score.totalShapeScore < t.score.totalShapeScore ? 1 : le.ID(e.stock, t.stock);
}
function on(e, t) {
  if (e.score[this.config.successMetric] > t.score[this.config.successMetric])
    return -1;
  if (e.score[this.config.successMetric] < t.score[this.config.successMetric])
    return 1;
  if (e.score[this.config.successMetric] === t.score[this.config.successMetric]) {
    if (e.type === "allocated strips" && t.type !== "allocated strips") return 1;
    if (e.type !== "allocated strips" && t.type === "allocated strips") return -1;
  }
  if ((e.score.containerAvailableShapes === 0 || t.score.containerAvailableShapes === 0) && e.cutPreference === t.cutPreference) {
    const n = e.cutPreference === "l" ? "maxY" : "maxX";
    if (e.score[n] < t.score[n])
      return -1;
    if (e.score[n] > t.score[n])
      return 1;
    if (e.score.stripShapes < t.score.stripShapes)
      return -1;
    if (e.score.stripShapes > t.score.stripShapes)
      return 1;
  }
  const i = xi(e, t);
  return i !== 0 ? i : e.score.firstShapeArea > t.score.firstShapeArea ? -1 : e.score.firstShapeArea < t.score.firstShapeArea ? 1 : le.ID(e.stock, t.stock);
}
function an(e, t) {
  const i = e.score?.totalUnplacedShapes, n = t.score?.totalUnplacedShapes;
  if (e.stock.id !== t.stock.id && (i === 0 || n === 0) && !(i === 0 && n === 0)) {
    const s = i === 0 ? e : t, r = i === 0 ? t : e, l = s.stock, o = r.stock, c = l.area - s.score.totalShapeArea, f = o.area;
    return s.score.totalShapeArea - r.score.totalShapeArea < f && f < c ? o.id === e.stock.id ? -1 : 1 : o.id === e.stock.id ? 1 : -1;
  }
  if (e.score[this.config.successMetric] > t.score[this.config.successMetric])
    return -1;
  if (e.score[this.config.successMetric] < t.score[this.config.successMetric])
    return 1;
  const a = xi(e, t);
  return a !== 0 ? a : e.type !== "evo" && t.type === "evo" ? -1 : e.type === "evo" && t.type !== "evo" ? 1 : e.score.firstShapeArea > t.score.firstShapeArea ? -1 : e.score.firstShapeArea < t.score.firstShapeArea ? 1 : e.score.totalShapeScore > t.score.totalShapeScore ? -1 : e.score.totalShapeScore < t.score.totalShapeScore ? 1 : le.ID(e.stock, t.stock);
}
function Ii(e) {
  if (!e) return e;
  const t = { ...e };
  return e.stock && (t.stock = e.stock), e.resultKey !== "bestPartialResult" && e.firstShape && "toData" in e.firstShape && (t.firstShape = e.firstShape.toData(ye.Compressed)), e.shapes?.length && (t.shapes = e.shapes.map((i) => i && "toData" in i ? i.toData(ye.Compressed) : i)), "stripShapes" in e && e.stripShapes?.length && (t.stripShapes = e.stripShapes.map((i) => i && "toData" in i ? i.toData(ye.Compressed) : i)), "root" in e && e.root && "toData" in e.root && (t.root = e.root.toData(ye.Compressed)), "container" in e && e.container && "toData" in e.container && (t.container = e.container.toData(ye.Compressed)), t;
}
function gt(e, t) {
  return e?.stock ? j(e.stock) ? e.stock : t.find((i) => i.autoId === e.stock.autoId) || null : null;
}
async function J(e, t = null) {
  if (e.score?.efficiency === 0 && e.shapes?.length > 0) {
    const r = e.shapes.filter((l) => l.added);
    if (r.length > 0) {
      const l = r.length / e.shapes.length;
      e.score.efficiency = l;
    }
  }
  this?.job && this.job.updateProgress({
    socketId: this.socketId,
    type: "algo",
    message: "result"
  });
  const i = t === "strip" ? "bestPartialResult" : "bestResult";
  e.resultKey = i;
  const n = this[i], a = e?.firstShape;
  if (pe()) {
    const r = e.score.efficiency, l = R(a) ? `${a.id}: [${a?.shapes?.map((c) => c.parentId).join(", ")}]` : a?.id, o = [
      {
        property: "Key",
        value: i
      },
      {
        property: "Type",
        value: e.type
      },
      {
        property: "Stock ID",
        value: e.stock.id
      },
      ...e.container && U(e.container) ? [{
        property: "Segment ID",
        value: e.container.id
      }] : [],
      ...e.container && U(e.container) ? [{
        property: "Segment coords",
        value: `${e.container.x},${e.container.y}`
      }] : [],
      ...e.container ? [{
        property: "Container dimensions",
        value: `${e.container.l}x${e.container.w}`
      }] : [],
      {
        property: "First shape",
        value: l
      },
      {
        property: "First shape rotation",
        value: a?.rot ?? "N/A"
      },
      {
        property: "Efficiency",
        value: r.toFixed(2)
      },
      {
        property: "Strip batch",
        value: e?.stripShapeBatch ?? "N/A"
      }
    ];
    $("results", `Recording ${i}`, null, o), A([() => T(r, "efficiency should be less than 100% in recordResult").to.be.lessThanOrEqual(1)]);
  }
  let s = e;
  if (n && (s = tn.call(this, [e, n], t || e.stock.cutType, e.stock?.saw?.stockType), s || ($("results", "WARNING: findWinner returned undefined, using current result as winner"), s = e), $("results", `winner for stock ${s.stock.id} eff. ${s.score.efficiency}, firstShape [${a?.id || "N/A"}], rot ${a?.rot || "N/A"}, batch ${s?.stripShapeBatch ?? "N/A"}`)), !n || !s?.processed) {
    e.processed = !0;
    const r = Ii(s);
    this[i] = r;
  }
}
function Pe({
  bestResult: e,
  shapeList: t,
  relevantStock: i = [],
  stockList: n = [],
  resetShapes: a = null
}) {
  $("results", `updating shapes from ${e.resultKey} / ${e.type} - stock ${e.stock.id}, FS: ${e.firstShape.id}`), i.length && i.filter((c) => c.autoId !== e?.stock?.autoId).forEach((c) => {
    const f = t.filter((u) => u.added && u?.stock?.autoId === c.autoId);
    f.length && (a ? a(f, !1, !0, !1) : f.forEach((u) => {
      u.added = !1, u.reset();
    }));
  });
  const s = [];
  let r = n.length ? n.find((c) => c.autoId === e.stock?.autoId) : null;
  if (r && e.stock && e.stock.used && (r.used = !0), !r && e.stock && (r = e.stock, r.saw && !xe(r.saw))) {
    $("results", `⚠️  Found serialized saw in bestResult.stock ${r.autoId}, attempting to restore from stockList`);
    const c = n.find((f) => f.autoId === r.autoId || f.parentId === r.parentId && xe(f.saw));
    c && xe(c.saw) ? ($("results", `✅ Restored live saw instance from stock ${c.autoId}`), r.saw = c.saw) : $("results", `❌ Could not restore live saw instance for stock ${r.autoId}`);
  }
  r || (r = e.stock);
  for (const c of e.shapes)
    if (yt(c) || Ai(c)) {
      const f = t.find((u) => u.autoId === c.autoId);
      if (!f) {
        pe() && (console.warn(`[updateShapeListFromBestResult] Shape ${c.autoId || c.id} from result not found in shapeList!`), console.warn(`  Available autoIds in shapeList: ${t.slice(0, 5).map((u) => u.autoId).join(", ")}...`));
        continue;
      }
      pe() && (G(f) || console.warn(`Shape ${c.autoId} in shapeList is not a live instance!`)), f.update({ ...c, validationMode: "none" }), G(f) && c.group && c.group.inGroup !== void 0 && (f.group.inGroup = c.group.inGroup), f.stock = r, s.push(f);
    } else wt(c) && $("results", `Segment group ${c.id} will be recreated at the end`);
  A([
    () => T(e.shapes.every((c) => {
      if (!yt(c)) return !0;
      const f = t.find((u) => u.autoId === c.autoId);
      return !(!f || !f.added || f.x !== c.x || f.y !== c.y || f.l !== c.l || f.w !== c.w);
    }), "best shape not found, not added, or not correctly updated").to.be.true
  ]), pe() && (s.every((f) => t.find((u) => u === f)) || console.warn("Some updated shapes are not exact references from shapeList - possible instance copying!")), Zt({
    shapes: s
  }, "updateShapeListFromBestResult");
  let l = [];
  const o = e.shapes.filter((c) => wt(c));
  return o.length > 0 && ($("results", `Recreating ${o.length} groups from bestResult`), l = Li(o, t, r), l.forEach((c) => {
    if (c.shapes && Array.isArray(c.shapes) && c.shapes.forEach((f) => {
      if (G(f) && (f.group.reference = c, f.group.inGroup = !0, c.added)) {
        const u = c.id || c.autoId;
        f.group.addedAsGroup = u;
      }
    }), c.added && typeof c.placeMyShapes == "function")
      try {
        c.placeMyShapes(r);
      } catch (f) {
        throw console.error("[ERROR] placeMyShapes failed for group " + c.id + ":", f.message), console.error(`  Group details: type=${c.type}, x=${c.x}, y=${c.y}, rot=${c.rot}`), console.error("  Child shapes:"), c.shapes?.forEach((u) => {
          console.error(`    ${u.id}: added=${u.added}, x=${u.x}, y=${u.y}, rot=${u.rot}, l=${u.l}, w=${u.w}`);
        }), f;
      }
    pe() && (c.shapes?.forEach((f) => {
      const u = t.find((h) => h.autoId === f.autoId);
      u !== f ? (console.error(`[ERROR] Group ${c.id} child shape ${f.id} is NOT the same instance as in shapeList!`), console.error(`  Group shape: added=${f.added}, x=${f.x}, y=${f.y}`), console.error(`  shapeList shape: added=${u?.added}, x=${u?.x}, y=${u?.y}`)) : f.group?.reference !== c && (console.error(`[ERROR] Group ${c.id} child shape ${f.id} has incorrect group.reference!`), console.error(`  Expected: ${c.id}, Got: ${f.group?.reference?.id || "null"}`));
    }), $("results", `Successfully recreated, placed, and linked ${l.length} groups`));
  })), { updatedShapes: s, groups: l };
}
async function De(e, t, i, n = null) {
  if (A([
    () => T(j(t)).to.be.true,
    () => {
      if (i.length) return T(G(i[0]) || Z(i[0])).to.be.true;
    }
  ]), A([() => T(X(i), "duplicates found").to.be.false]), ci(), n || (n = Ti.call(this, t, i)), !n) throw new Error("no root segment created");
  if (this.config.sample.enable) {
    if (await nt.call(
      this,
      e,
      t,
      n
    ), e.secondRun || !this.bestResult) return;
    Pe({
      bestResult: this.bestResult,
      shapeList: this.shapeList,
      stockList: this.stockList,
      resetShapes: this.resetShapes?.bind(this)
    }), await Vt.call(this, {
      options: e,
      shapes: i,
      stock: t
      // root
    }), rt.call(this, i, n);
  }
  if (this.config.guillotine.stripShapes.allocation && i.length > 1) {
    if (await st.call(this, e, t, i, n), !this.bestResult) return;
    Pe({
      bestResult: this.bestResult,
      shapeList: this.shapeList,
      stockList: this.stockList,
      resetShapes: this.resetShapes?.bind(this)
    }), await Vt.call(this, {
      options: e,
      shapes: i,
      stock: t,
      root: n
    });
  }
}
async function Vt({
  options: e,
  shapes: t,
  stock: i,
  root: n
}) {
  const a = K(this.shapeList, i);
  yn.call(
    this,
    gt(this.bestResult, this.stockList),
    a
  ) && await cn.call(
    this,
    e,
    a,
    t,
    i,
    n
  ), this.bestResult.shapes.forEach((r) => {
    const l = this.shapeList.find((o) => o.id === r.id);
    l && (r.x = l.x, r.y = l.y, r.placementOrder = l.placementOrder);
  });
}
async function ln(e, t, i) {
  A([
    () => T(j(t)).to.be.true,
    () => {
      if (i.length) return T(G(i[0])).to.be.true;
    }
  ]), t.saw.cutPreference = "l";
  const n = Ti.call(this, t, i);
  if (this.config.sample.enable && (await nt.call(
    this,
    e,
    t,
    n
  ), rt.call(this, i, n)), this.config.guillotine.stripShapes.allocation && i.length > 1 && (await st.call(
    this,
    e,
    t,
    i,
    n
  ), rt.call(this, i, n)), t.saw.cutPreference = "w", this.config.sample.enable && await nt.call(
    this,
    e,
    t,
    n
  ), this.config.guillotine.stripShapes.allocation && i.length > 1 && await st.call(
    this,
    e,
    t,
    i,
    n
  ), !this.bestResult) return !1;
  t.saw.cutPreference = this.bestResult.cutPreference;
}
async function st(e, t, i, n) {
  if (!this.config.guillotine.stripShapes.allocation || (A([
    () => T(j(t)).to.be.true,
    () => T(i.length ? G(i[0]) : !0).to.be.true,
    () => T(U(n)).to.be.true
  ]), t?.saw?.stockType === "roll")) return !1;
  const a = Cn.call(this, n, this.uniqueStock, this.stockList);
  if (a === !1) return !1;
  for (let s = 0; s < a; s++)
    this.resetShapes(i), n.shapes = i, A([
      () => T(X(n.shapes, `root segment batch ${s} stock ${t.id}`), "duplicates found in root segment").to.be.false,
      () => T(i.length).to.equal(n.shapes.length),
      () => T(i.some((r) => Te(r) || _(r)), "groups exist in new strip shape batch calculation").to.be.false
    ]), $("guillotine", `running strip shape batch ${s} for stock ${t.id}`), await St.call(
      this,
      e,
      t,
      n,
      s
    ), A([() => T(X(n.shapes), "duplicates found").to.be.false]);
  return !0;
}
async function nt(e, t, i) {
  $("guillotine", `running basic first shape sample for stock ${t.id}`), A([
    () => T(j(t)).to.be.true,
    () => T(U(i)).to.be.true,
    () => T(i?.shapes?.length).to.be.greaterThan(0)
  ]), await St.call(this, e, t, i);
}
async function St(e, t, i, n = null, a = null, s = null) {
  if (A([
    () => T(j(t)).to.be.true,
    () => T(U(i)).to.be.true,
    () => {
      if (a) return T(G(a)).to.be.true;
      if (n !== null) return T(n).to.be.a("number");
      if (s !== null) return T([0, 1].includes(s)).to.be.true;
    }
  ]), n === null)
    await Oe.call(
      this,
      e,
      t,
      i,
      a,
      s,
      null
    );
  else if (await Oe.call(
    this,
    e,
    t,
    i,
    void 0,
    void 0,
    n
  ) === !1) return !1;
}
async function cn(e, t, i, n, a) {
  A([
    () => T(j(n)).to.be.true,
    () => {
      if (i.length) return T(G(i[0]) || Z(i[0])).to.be.true;
      if (t.length) return T(G(t[0] || Z(i[0]))).to.be.true;
    }
  ]), $("guillotine", `running refinement for stock ${n.id}`);
  try {
    await un.call(
      this,
      e,
      t,
      i,
      n,
      a
    );
  } catch (s) {
    console.error("issue with runSecondPass", s.message);
  }
}
async function un(e, t, i, n, a) {
  if (A([
    () => T(j(n)).to.be.true,
    () => {
      if (i.length) return T(G(i[0]) || Z(i[0])).to.be.true;
      if (t.length) return T(G(t[0]) || Z(i[0])).to.be.true;
    }
  ]), !this.config.guillotine.secondPass || !this.saw?.guillotineOptions?.headCuts) return !1;
  $("guillotine", `running second pass for stock ${n.id}`), await wn.call(this, n, i, t, a);
  const s = K(i, n), r = oe.call(
    this,
    this.shapeList,
    n
  );
  r && n.id === gt(this.bestResult, this.stockList)?.id && s.length - t.length > 0 && ($("guillotine", `runSecondPass added ${s.length - t.length} shape(s) to stock ${n.id}, new total ${s.length}`), r.secondPass = !0, await J.call(this, r));
}
function rt(e, t) {
  const i = [];
  if (this.groupList && this.groupList.length > 0)
    for (const s of this.groupList)
      s.added ? i.push(s) : s.reset();
  for (let s = e.length; s--; ) {
    const r = e[s];
    R(r) && e.splice(s, 1), r.reset();
  }
  this.groupList && (this.groupList.length = 0, this.groupList.push(...i)), this.counters.placement = 0, this.bestPartialResult = null, ci(), t.reset(e);
  const n = t.shapes.filter((s) => G(s)), a = t.shapes.filter((s) => R(s));
  $("reset", "[RESET] RESET ROOT SEGMENT BETWEEN CALCULATIONS", null, [
    {
      type: "Root shapes",
      count: n.length,
      added: n.filter((s) => s.added).length,
      ids: n.map((s) => s.id).join(", ")
    },
    {
      type: "Root groups",
      count: a.length,
      added: a.filter((s) => s.added).length,
      ids: a.map((s) => s.id).join(", ")
    }
  ]);
}
async function fn(e, t, i, n) {
  A([
    () => T(j(t)).to.be.true,
    () => T(U(i)).to.be.true
  ]);
  const a = ue(i.shapes, !1, !0), s = this.stockList.findIndex((f) => f.id === t.id);
  let r = null;
  s > 0 && (r = this.stockList[s - 1]);
  const l = N(t.cutPreference);
  let o = [], c = [];
  if (i.l === t.l && i.w === t.w ? s > 0 && (o = K(this.shapeList, r).filter((f) => et(f))) : c = K(this.shapeList, t).filter((f) => et(f)), o?.length || c?.length) {
    const f = l === "l" ? "x" : "y";
    o.sort((d, m) => d[f] - m[f]), c.sort((d, m) => d[f] - m[f]);
    const u = o.length ? o[o.length - 1] : c[c.length - 1], h = a.filter((d) => u[l] === d.w || u[l] === d.l);
    if (h?.length) {
      for (let d = 0; d < h.length; d++) {
        const m = h[d];
        if (d > 1 && h[d - 1].isIdentical(h[d]))
          continue;
        fe(m, 0, t);
        let w;
        u[l] === m[l] ? w = 0 : w = 1;
        const p = await bi.call(
          this,
          e,
          m,
          i,
          w
        );
        if (p?.length)
          for (let S = p.length; S--; ) {
            const g = p[S];
            await J.call(this, g, "strip");
          }
        this.resetShapes(i.shapes);
      }
      return !(!n || n?.length);
    }
  }
  return !1;
}
async function Oe(e, t, i, n = null, a = null, s = null) {
  if (i.type === "root" && !e?.secondPass && (t.used = !1, this.counters.placement = 0), !i.shapes?.length) return;
  A([
    () => T(j(t)).to.be.true,
    () => T(U(i)).to.be.true,
    () => T(n ? G(n) : !0).to.be.true,
    () => T(n ? [0, 1].includes(a) : !0).to.be.true,
    () => T(s !== null ? typeof s == "number" : !0).to.be.true,
    () => T(s !== null ? n === null : !0).to.be.true,
    () => T(a !== null ? [0, 1].includes(a) : !0).to.be.true,
    () => T(i.shapes.every((m) => !Te(m), "no segment groups should exist at this point")).to.be.true
  ]);
  const r = typeof s == "number";
  let l = !0;
  if (t.saw.guillotineOptions?.strategy === "time" && (l = !await fn.call(
    this,
    e,
    t,
    i
  )), l)
    if (tt(i))
      if (r) {
        let m = bn(i.shapes, s, t);
        if (m.sort((S, g) => S.guillotineState.getStripShapeBatchData(s).order - g.guillotineState.getStripShapeBatchData(s).order), $("guillotine", `strip shape candidates ${m.map((S) => S.id).join("|")}`), A([
          () => T(m.find((S) => S.guillotineState.getStripShapeBatchData(s).stockId !== i.getStock.autoId), "found strip shapes in allocatedStripShape from another stock").to.be.undefined,
          () => T(X(m), "duplicate shapes found in stripShapeCandidates").to.false,
          () => T(m.find((S) => R(S) && !_(S)), "found groups in allocatedStripShape").to.be.undefined,
          () => T(i.shapes.filter((S) => S.added).length === 0, `added shapes found in segment ${i.id}`).to.be.true
        ]), !m.length)
          return Oe.call(
            this,
            e,
            t,
            i
          );
        const w = N(t.cutPreference);
        for (const S of m) {
          if (R(S)) continue;
          const g = Kt(S, s, t, !1);
          Kt(S, s, t, !0), Mi(S, g), A([
            () => T(me(S, g, t), "allocated strip shape cannot rotate to required orientation").to.be.true,
            () => T(S.rot, `candidates ${S.id} rotation (${S.rot}) incorrect for batch (${g})`).equal(g)
          ]);
        }
        if (this.config.groups.guillotine.strips && m.length > 1 && (m = Pn.call(this, s, w, t, i, m)), m.sort(function(g, I) {
          return I[w] !== g[w] ? I[w] - g[w] : I[t.cutPreference] !== g[t.cutPreference] ? I[t.cutPreference] - g[t.cutPreference] : g.autoId.localeCompare(I.autoId, void 0, { numeric: !0 });
        }), n = m[0], $("guillotine", `firstShape for segment ${i.id} is ${n.id}`), !n) throw new Error("no firstShape found");
        const p = n.guillotineState.getStripShapeBatchData(s);
        if (!p) throw new Error("no fs batch found");
        A([() => T(p.stockId).equal(i.getStock.autoId)]), n.firstShape.isFirstShape = !0, a = p.rot, A([() => T([0, 1].includes(p.rot)).to.be.true]), await ot.call(this, {
          options: e,
          fs: n,
          fsRotation: a,
          segment: i,
          stripShapeBatch: s,
          stripShapeCandidates: m
        });
      } else
        n && a !== null ? await ot.call(this, {
          options: e,
          fs: n,
          fsRotation: a,
          segment: i,
          stripShapeBatch: s
        }) : await Ye.call(
          this,
          e,
          i
        );
    else
      await Ye.call(
        this,
        e,
        i
      );
  if (!this.bestPartialResult)
    if (s !== null) {
      if (await Ye.call(
        this,
        e,
        i,
        !0
      ), !this.bestPartialResult) return;
    } else return;
  const c = this.bestPartialResult.firstShape, { groups: f } = Pe({
    bestResult: this.bestPartialResult,
    shapeList: this.shapeList,
    stockList: this.stockList,
    resetShapes: this.resetShapes?.bind(this)
  });
  fs(i, !0), A([
    () => T(i.shapes.filter((m) => R(m)).every((m) => _(m)), "number of groups in segment does not equal the number of strip shape groups (others should have been removed)").to.be.true,
    () => Qt(i.shapes, "segmentCalculations after removeGroupsFromSegment"),
    () => T(i.shapes.every((m) => !Te(m)), "found groups in segment after removal").to.be.true
  ]);
  const u = new Set(i.shapes.map((m) => m.autoId)), h = f.filter((m) => !u.has(m.autoId));
  i.shapes.push(...h);
  const d = V(this.shapeList);
  if (this.bestPartialResult = null, d.length || this.config.secondRun.enabled) {
    const m = Sn.call(
      this,
      i,
      c
    );
    if (m?.length) {
      $("cuts", `Created ${m.length} new segments, unplaced shapes: ${d.length}`);
      for (const w of m) {
        if (this.bestPartialResult = null, !w.shapes.length) {
          w.offcut = !0;
          continue;
        }
        w.shapes = w.shapes.filter((p) => !p.added), r && !tt(w) && (w.shapes = w.shapes.filter((p) => !p.guillotineState.isInStripShapeBatch(s))), await Oe.call(
          this,
          e,
          t,
          w,
          null,
          null,
          s
        );
      }
    }
  }
  if (i.type === "root") {
    i.shapes = i.shapes.map((S) => R(S) ? S : this.shapeList.find((I) => I.autoId === S.autoId) || S), i.shapes.filter((S) => _(S) && S.added).forEach((S) => S.placeMyShapes(i.stock));
    const w = oe.call(
      this,
      this.shapeList,
      t,
      c
    );
    if (!w) throw new Error("Unable to score stock");
    if (w.stripShapeBatch = s, w.root = i, !w.score.efficiency) return;
    qi(this.shapeList).length > 0, s !== null ? w.type = "allocated strips" : w.type = "basic", await J.call(this, w);
  }
}
async function ot({
  options: e = null,
  fs: t = null,
  fsRotation: i = null,
  segment: n = null,
  stripShapeBatch: a = null,
  stripShapeCandidates: s = []
}) {
  if (!t || i === null || !n)
    throw new Error(`firstShapeSegmentCalculations requires firstShape, firstShapeRotation & segment:${t} ${i} ${n}`);
  const r = async (u, h = !0) => {
    let d;
    h ? (t.reset(), A([() => T(n.shapes.filter((m) => m.autoId === t.autoId).length, "too many first shapes in segmentShapes").to.equal(1)]), d = oe.call(
      this,
      n.shapes,
      u,
      t
    )) : d = oe.call(
      this,
      n.shapes,
      n,
      t
    ), d.score.totalShapesPlaced && await J.call(this, d, "strip");
  };
  n.shapes = hn.call(this, n, t, a), $n(
    t,
    n,
    n.getStock,
    i
  ), t.placementOrder = this.counters.placement++, A([
    () => T(U(n)).to.be.true,
    () => T(a !== null ? typeof a == "number" : !0).to.be.true,
    () => T(i !== null ? [0, 1].includes(i) : !0).to.be.true
  ]), t && A([
    //Accept all group types (segment, user, strip) as well as shapes
    () => T(G(t) || R(t), `first shape ${t.id} is not a shape or group`).to.be.true,
    () => T(t.added, `first shape ${t.id} added too soon`).to.be.true,
    //Only check rotation for shapes, not groups (groups cannot be rotated)
    () => T(R(t) || t.rot === i, `first shape ${t.id} rotation (${t.rot}) incorrect for (${i})`).to.be.true,
    () => T(P.lessThanOrEqualTo(t.l, n.l), `first shape ${t.id} longer than segment ${t.l} > ${n.l}`).to.be.true,
    () => T(P.lessThanOrEqualTo(t.w, n.w), `first shape ${t.id} wider than segment ${t.w} > ${n.w}`).to.be.true
  ]);
  const l = n.getStock, { success: o, firstShapeSegment: c, isHeadCut: f } = await dn.call(this, {
    fs: t,
    segment: n,
    stock: l,
    stripShapeBatch: a,
    stripShapeCandidates: s,
    options: e
  });
  return !(o === !1 && (await r(c), !f));
}
function hn(e, t, i) {
  if (X(e.shapes)) {
    const s = /* @__PURE__ */ new Set();
    e.shapes = e.shapes.filter((r) => s.has(r.autoId) ? !1 : (s.add(r.autoId), !0));
  }
  const a = e.shapes.filter((s) => s.willItFit(e) ? !(e.type !== "root" && typeof i == "number" && s.getStripShapeBatchData(i) !== !1 && t.autoId !== s.autoId) : ($("cuts", `  Excluding ${s.autoId}: doesn't fit in segment`), !1));
  return $("cuts", `  Result: ${a.length} shapes selected for segment`), this.resetShapes(a, {
    keepScores: !1,
    removeGroups: !1,
    keepGuillotineData: !0,
    keepFirstShapeSampleRotations: !0
  }), a;
}
async function dn({
  fs: e,
  segment: t,
  stock: i,
  stripShapeBatch: n,
  stripShapeCandidates: a,
  forceNoHeadCut: s,
  options: r
}) {
  $("guillotine", `[createFirstShapeSegmentsPlaceShapesAndScore] Starting for segment ${t.id}, first shape ${e.id}`);
  const { offcuts: l, firstShapeSegment: o, isHeadCut: c, success: f } = await gn.call(this, { fs: e, segment: t, stock: i, stripShapeBatch: n, stripShapeCandidates: a, forceNoHeadCut: s, options: r });
  if (A([() => T(l.length, "too many offcuts generated").to.be.lessThanOrEqual(2)]), f === !1)
    return { success: !1, firstShapeSegment: o, isHeadCut: c };
  if (["near", "root"].includes(t.type) && o.l + i.saw.bladeWidth >= t.l && o.w + i.saw.bladeWidth >= t.w) {
    const y = [e], k = oe.call(this, y, o, e);
    return await J.call(this, k, "strip"), { success: !0, firstShapeSegment: o, isHeadCut: c };
  }
  if (r.secondPass) {
    const { cuts: y } = Be.call(
      this,
      {
        container: o,
        shapes: [e],
        forceNoHeadCut: s
      }
    ), { allShapesCut: k } = Si([e], y, o);
    if (!k) return { success: !1, firstShapeSegment: o, isHeadCut: c };
  }
  if (!l.length) return { success: !1, firstShapeSegment: o, isHeadCut: c };
  const u = o.cutDirection, h = l.find((y) => P.equalTo(y[u], o[u]));
  if (!h || h.l <= 0 || h.w <= 0) {
    $("cuts", `No next segment. Remaining shapes: ${t.shapes.length}`), G(e) && !t.shapes.find((k) => k.autoId === e.autoId) && t.shapes.unshift(e), t.shapes.length > 1 && await ve.call(
      this,
      t.shapes,
      e,
      o || t
    );
    const y = oe.call(
      this,
      t.shapes,
      o,
      e
    );
    return await J.call(this, y, "strip"), { success: !0, firstShapeSegment: o, isHeadCut: c };
  }
  const d = o.cutDirection;
  (t.type === "root" || t.type === "firstShape") && a.length === 1 && (h[d] = t[d], o[d] = t[d]);
  const m = [], w = t.getStock[t.cutDirection] * 0.1;
  if (this.config.groups.guillotine.segments && o[t.cutDirection] > 0 && t.shapes.length > 1 && h && h[t.cutDirection] >= w && (pn.call(
    this,
    t,
    h,
    m,
    n,
    e
  ), m.length)) {
    const y = new Set(t.shapes.map((D) => D.autoId)), k = m.filter((D) => !y.has(D.autoId));
    t.shapes.push(...k), t.shapes = ei(t.shapes, k);
  }
  A([() => T(t.shapes.filter((y) => y.autoId === e.autoId).length, "too many first shapes in segmentShapes").to.equal(1)]);
  const p = K(t.shapes, i).map((y) => y.autoId);
  if (await ve.call(
    this,
    t.shapes,
    e,
    o || t
  ), m.length > 0) {
    const y = m.filter((k) => !k.added);
    if (y.length > 0) {
      const k = /* @__PURE__ */ new Set();
      for (const x of y) {
        const E = x.autoId.replace(/\.\d+$/, "");
        k.add(E);
      }
      const D = m.filter((x) => {
        const E = x.autoId.replace(/\.\d+$/, "");
        return k.has(E) && !x.added;
      });
      $("groups", `[createFirstShapeSegmentsPlaceShapesAndScore] Releasing shapes from ${y.length} unplaced groups (${D.length} including clones)`);
      const q = [], M = /* @__PURE__ */ new Set();
      for (const x of D)
        if (x.shapes && x.shapes.length > 0)
          for (const E of x.shapes)
            M.has(E.autoId) || (q.push(E), M.add(E.autoId));
      for (const x of D)
        $("groups", `  Destroying group ${x.id} (${x.shapes?.length || 0} shapes)`), x.destroy();
      if (q.length > 0) {
        const x = new Set(t.shapes.map((O) => O.autoId)), E = q.filter((O) => !x.has(O.autoId));
        E.length > 0 && ($("groups", `  Adding ${E.length} unique shapes back to segment.shapes (filtered from ${q.length})`), t.shapes.push(...E));
      }
    }
  }
  const S = !!m.length;
  let g = oe.call(
    this,
    [...ti(t.shapes), ...o.shapes.filter((y) => Te(y))],
    o,
    e
  );
  await J.call(this, g, "strip");
  const I = t.type === "root" ? t.shapes.filter((y) => _(y)) : [];
  this.resetShapes(t.shapes, {
    keepScores: !1,
    removeGroups: !0,
    keepGuillotineData: !1,
    keepFirstShapeSampleRotations: !0
  });
  const b = new Set(t.shapes.map((y) => y.autoId)), C = I.filter((y) => !b.has(y.autoId));
  return t.shapes.push(...C), this.config.groups.guillotine.segments && this.config.groups.guillotine.runWithout && S && (this.config.groups.guillotine.segments = !1, t.shapes.filter((y) => y.autoId !== e.autoId && !p.includes(y.autoId)).forEach((y) => y.reset({
    keepScores: !1,
    keepGuillotineBatchData: !0,
    keepGroupData: !0
  })), await ve.call(
    this,
    t.shapes,
    e,
    o || t
  ), this.config.groups.guillotine.segments = !0, g = oe.call(
    this,
    t.shapes,
    o,
    e
  ), await J.call(this, g, "strip")), { success: !0, firstShapeSegment: o, isHeadCut: c };
}
function pn(e, t, i) {
  if (!this.config.groups.guillotine.segments) return;
  const n = e.hasHeadCut ? e.cutDirection : N(e.cutDirection), a = t[n], s = e.shapes.filter((o) => !(o.added || o.group?.addedAsGroup));
  A([
    () => T(X(s), "duplicate shapes found in shapesForGrouping").to.be.false
  ]);
  const r = this.config.guillotine?.maxSegmentGroups || 15, l = lt({
    shapes: s,
    container: t,
    targetSize: a,
    exact: !1,
    direction: n,
    maxGroups: r,
    config: this.config,
    counters: this.counters,
    type: "auto"
  });
  if (l.length) {
    $("guillotine", `[SEGMENT GROUPS] created ${l.length} for segment ${t.id} ${t.l}x${t.w} tergeting ${a}`);
    const o = l.filter((c) => c.l > t.l || c.w > t.w ? ($("guillotine", `[SEGMENT GROUPS] skipping ${c.id} (${c.l}x${c.w}) - exceeds container ${t.l}x${t.w}`), !1) : !0);
    o.length < l.length && $("guillotine", `[SEGMENT GROUPS] filtered ${l.length - o.length} groups that exceed container size`), o.sort((c, f) => f.efficiency === c.efficiency ? f.shapes.length - c.shapes.length : f.efficiency - c.efficiency), i.push(...o), $("guillotine", `[SEGMENT GROUPS] all segment groups: ${i.map((c) => c.id).join()}`);
  } else
    $("guillotine", `[SEGMENT GROUPS] 0 groups created for segment ${e.id}, ${i.map((o) => o.id).join()}`);
}
async function gn({ fs: e, segment: t, stock: i, segmentShapes: n, stripShapeBatch: a, forceNoHeadCut: s, options: r }) {
  let l = !0, o, c = !1;
  !s && gi.call(this, t) && (c = hi.call(this, i.saw, e, t), t.hasHeadCut = c);
  try {
    o = In.call(
      this,
      e,
      c,
      t,
      i,
      n
    );
  } catch (u) {
    throw $("errors", `firstShapeSegment error, fs: ${e.autoId}, 'ssg: ${a}: ${u.message}`), new Error(`issue with createFirstShapeSegment ${u.message}`);
  }
  if (A([() => T(o[o.cutDirection]).to.equal(e[o.cutDirection])]), r?.secondPass) {
    const u = this.shapeList.filter((h) => h.added && h.stock.autoId === i.autoId && h.autoId !== e.autoId);
    if (ii(o, u, i))
      return l = !1, { firstShapeSegment: o, offcuts: [], success: l };
  }
  const { offcuts: f } = Be.call(
    this,
    {
      container: t,
      shapes: t.shapes,
      forceNoHeadCut: s
    }
  );
  return { firstShapeSegment: o, offcuts: f, isHeadCut: c, success: l };
}
async function Ye(e, t, i = !1) {
  if (!this.config.sample.enable && i === !1) return !1;
  A([
    () => T(t.shapes.every((l) => G(l) || Z(l)), "segment shapes contains groups").to.be.true
  ]);
  let n = [];
  if (this.config.groups.guillotine.segments && t.shapes.length > 1) {
    const l = N(t.cutDirection), o = t[l], c = t.parentSegmentGroupShapes || /* @__PURE__ */ new Set(), f = t.shapes.filter((h) => !c.has(h.id)), u = Oi(f, o * 0.05);
    if (u.length >= 2) {
      n = lt({
        shapes: u,
        container: t,
        // Use segment as container
        targetSize: o,
        exact: !1,
        direction: l,
        // Pass Direction ('l' or 'w'), not GroupDirection
        config: this.config,
        counters: this.counters,
        preventDuplicates: !0,
        type: "firstShape"
      });
      const h = /* @__PURE__ */ new Set();
      n = n.filter((d) => {
        const m = `${d.l}-${d.w}`;
        return h.has(m) ? !1 : (h.add(m), !0);
      }), $("groups", `[FIRST SHAPE GROUPS] created ${n.map((d) => d.id).join()} for segment ${t.id} `);
    }
  }
  let a = null;
  e.secondPass && (a = K(
    this.shapeList,
    t.getStock
  ));
  const s = [...t.shapes], r = Ci.call(
    this,
    "guillotine",
    [...s, ...n],
    t,
    a,
    null,
    i
  );
  if (!r.length) return !1;
  for (let l = 0; l < r.length; l++) {
    const o = r[l];
    if ($("guillotine", `[FIRST SHAPE] attempting first shape candidate ${o.id} for segment ${t.id}`), l > 1 && r[l - 1].isSameSize(r[l])) {
      o.firstShape.sampleRotations = [];
      continue;
    }
    this.resetShapes(s, {
      removeGroups: !1,
      keepFirstShapeSampleRotations: !0
    }), o.firstShape.isFirstShape = !0, Fi(o) && (t.shapes.find((u) => u.autoId === o.autoId) || t.shapes.push(o), t.shapes = ei(t.shapes, o)), A([() => T(X(t.shapes, `segment ${t.id} before running fs tests for ${o.id}`), "duplicates found in segment").to.be.false]), A([() => T(X(t.shapes), "duplicates found").to.be.false]), await bi.call(
      this,
      e,
      o,
      t
    ), A([() => T(X(t.shapes), "duplicates found").to.be.false]), o.firstShape.isFirstShape = !1, o.firstShape.sampleRotations = [], t.shapes = s, this.resetShapes(t.shapes, {
      removeGroups: !0,
      keepFirstShapeSampleRotations: !0
    });
    const c = t.shapes.filter((u) => G(u)), f = t.shapes.filter((u) => R(u));
    $("reset", `[RESET] RESET SEGMENT ${t.id} BETWEEN FIRST SHAPE CANDIDATES: ${o.id}`, null, [
      {
        type: "Shapes",
        count: c.length,
        added: c.filter((u) => u.added).length,
        ids: c.map((u) => u.id).join(", ")
      },
      {
        type: "Groups",
        count: f.length,
        added: f.filter((u) => u.added).length,
        ids: f.map((u) => u.id).join(", ")
      }
    ]);
  }
  return !0;
}
function Ti(e, t) {
  return new se({
    id: "root",
    x: 0,
    y: 0,
    w: e.w,
    l: e.l,
    t: e.t,
    saw: e.saw,
    shapes: t,
    stock: e,
    material: e.material,
    phase: 0,
    type: "root",
    isInitial: !0,
    cutDirection: e.cutPreference
    //match the stock cut preference for root segments
  });
}
function Sn(e, t) {
  $("guillotine", `creating new segments for segment ${e.id} at (${e.x},${e.y}) ${e.l}x${e.w}, first shape ${t.id} at (${t.x},${t.y}) ${t.l}x${t.w}, cut direction ${e.cutDirection}`), R(t) && $("guillotine", `first shape ${t.id} is group`, [t.dimensions, t.coords]), A([
    () => T(G(t) || R(t), "first shape is not a shape or group").to.be.true,
    () => T(U(e), "segment is not a segment class").to.be.true
  ]);
  const { offcuts: i } = Be.call(this, {
    container: e,
    shapes: e.shapes
  });
  if (!i.length) return;
  $("guillotine", `ALL new segments for segment ${e.id}:`, i.map((o) => ({ id: o.id, x: o.x, y: o.y, l: o.l, w: o.w, dir: o.cutDirection })));
  const n = e.cutDirection === "l" ? "y" : "x", a = N(e.cutPreference), s = i.filter((o) => o[n] < t[n] + t[a]), r = i.find((o) => o[n] >= t[n] + t[a]);
  if (r && (r.rowSegment = !0, s.push(r)), !s?.length) return;
  const l = ce(n);
  return s.sort((o, c) => o[n] < c[n] ? -1 : o[n] > c[n] ? 1 : o[l] < c[l] ? -1 : o[l] > c[l] ? 1 : 0), s.forEach((o) => {
    const c = e.shapes.filter((u) => !u.added && ie(u, o)), f = /* @__PURE__ */ new Set();
    o.shapes = c.filter((u) => f.has(u.autoId) ? !1 : (f.add(u.autoId), !0)), A([() => T(o.shapes.every((u) => !u.added), `added shapes in offcut ${o.autoId}`).to.be.true]);
  }), e.children = s, s;
}
function mn(e, t, i, n, a, s, r, l, o) {
  if (!t || t.length <= 1) return !0;
  try {
    t.sort((y, k) => y[r] - k[r]);
    let c = 0, f = -1 / 0;
    for (const y of t)
      y[r] > f + n && (c += y[l] + n, f = y[r] + y[l]);
    if (c > e[l])
      return console.warn("Preliminary check: shapes would not fit within stock after rearrangement"), !1;
    const u = [], h = n / 2;
    let d, m, w = !1, p = 0, S = 0, g = 0;
    const I = 3;
    for (const y of t) {
      if (!et(y)) continue;
      w || (d = y[r], g = 0), m = y[r] + y[l];
      const k = y[r] + y[l] + h, D = new be(
        a === "x" ? {
          x1: 0,
          x2: e[s],
          y1: k,
          y2: k
        } : {
          x1: k,
          x2: k,
          y1: 0,
          y2: e[s]
        }
      );
      if (at(D, e, i))
        if (w = !0, g++, g >= I)
          w = !1, console.warn(`Forced strip creation after ${I} consecutive collisions`);
        else
          continue;
      else
        w = !1, g = 0;
      const q = i.filter((L) => P.greaterThanOrEqualTo(L[r], d) && P.lessThan(L[r], m));
      if (!q.length) continue;
      const M = q.length > 0 ? q.reduce((L, F) => {
        const z = L[a] + L[s], Y = F[a] + F[s];
        return P.equalTo(z, Y) ? L[s] > F[s] ? L : F : z > Y ? L : F;
      }) : q[0];
      if (!M) continue;
      const x = M[a] + M[s], E = q.length > 0 ? q.reduce((L, F) => {
        const z = L[r] + L[l], Y = F[r] + F[l];
        return P.equalTo(z, Y) ? L[l] > F[l] ? L : F : z > Y ? L : F;
      }) : q[0];
      if (!E) continue;
      let O = E[r] + E[l];
      m > O && (O = m);
      const H = O - d;
      u.push({
        stripStartPoint: d,
        stripEndPoint: m,
        furthestPrimaryPoint: x,
        furthestOrderingPoint: O,
        shapesInThisRow: q,
        width: H
      });
    }
    if (!u.length)
      return console.warn("No valid strips found after analysis"), !0;
    const b = /* @__PURE__ */ new Map();
    u.forEach((y) => {
      y.shapesInThisRow.forEach((k) => {
        b.set(k.autoId, k[r]);
      });
    }), u.sort((y, k) => P.equalTo(y.furthestPrimaryPoint, k.furthestPrimaryPoint) ? k.width - y.width : k.furthestPrimaryPoint - y.furthestPrimaryPoint);
    let C = 0;
    for (const y of u)
      C += y.furthestOrderingPoint - y.stripStartPoint + n;
    if (C > e[l])
      return console.warn("Total arrangement would exceed stock dimensions"), !1;
    for (const y of u) {
      y.shapesInThisRow.sort((k, D) => k.placementOrder - D.placementOrder);
      for (let k = 0; k < y.shapesInThisRow.length; k++) {
        const D = y.shapesInThisRow[k], q = D[r] - y.stripStartPoint, M = S + q;
        if (M + D[l] > e[l])
          return console.warn(`Shape ${D.id} would exceed stock boundaries after rearrangement`), _t(u, b, r), !1;
        const x = D[r];
        D[r] = M, D.placementOrder = k + p, ut(D) === 1 && P.equalTo(D[a], 0) && Ce(D, s), !P.equalTo(x, M) && o && (oi(o, D), it(o, D));
      }
      if (p += y.shapesInThisRow.length, S += y.furthestOrderingPoint - y.stripStartPoint + n, S > e[l])
        return console.warn("Rearrangement exceeds stock dimensions"), _t(u, b, r), !1;
    }
    return !0;
  } catch (c) {
    return console.error("Error during shape rearrangement:", c), !1;
  }
}
function _t(e, t, i) {
  e.forEach((n) => {
    n.shapesInThisRow.forEach((a) => {
      t.has(a.autoId) && (a[i] = t.get(a.autoId));
    });
  });
}
function yn(e, t, i) {
  if (!this.config?.guillotine?.strips?.rearrange || e.saw.guillotineOptions?.strategy === "time") return !1;
  const a = e.bladeWidth;
  if (P.equalTo(a, 0) || a < 0)
    return console.warn("Invalid blade width for rearrangement"), !1;
  const s = K(t, e);
  if (!s?.length) return !1;
  const r = e.cutPreference;
  if (r !== "l" && r !== "w")
    return console.warn("Invalid primary dimension:", r), !1;
  const l = r === "l" ? "x" : "y", o = s.filter(
    (h) => Me(h, 1) && P.equalTo(h[l], 0)
  );
  if (!o.length) return !1;
  const c = N(r), f = r === "l" ? "y" : "x";
  return o.reduce((h, d) => h + d[c], 0) > e[c] ? (console.warn("Total strip width exceeds stock dimensions"), !1) : mn(
    e,
    o,
    s,
    a,
    l,
    r,
    f,
    c,
    i
  );
}
async function wn(e, t, i, n) {
  if (!this.config?.guillotine?.secondPass) {
    console.debug("Corner squeeze disabled in config");
    return;
  }
  if (i.length === t.length) {
    console.debug("All shapes already added, skipping corner squeeze");
    return;
  }
  if (e.saw.guillotineOptions?.strategy === "time") {
    console.debug("Time strategy selected, skipping corner squeeze");
    return;
  }
  e.rootSegment = n;
  const s = e.bladeWidth;
  if (P.equalTo(s, 0) || s < 0) {
    console.warn("Invalid blade width for corner squeeze");
    return;
  }
  const r = i.filter((h) => Me(h, 1));
  if (!r.length) {
    console.debug("No strip shapes found for corner squeeze");
    return;
  }
  const l = e.cutPreference;
  if (l !== "l" && l !== "w") {
    console.warn("Invalid primary dimension:", l);
    return;
  }
  const o = l === "l" ? "x" : "y", c = N(l), f = l === "l" ? "y" : "x";
  r.sort((h, d) => h[f] - d[f]);
  let u = 0;
  for (let h = 0; h < r.length; h++) {
    let d = function(L, F, z, Y) {
      return L[F] + L[z] + Y;
    }, m = function(L, F, z, Y, ee) {
      return ee > 0 ? ee - F[z] : L[Y] - F[z];
    };
    const w = r[h], p = h > 0 ? K(this.shapeList, e) : i, S = V(t, e);
    if (!S.length) {
      console.debug("No remaining shapes to place, exiting corner squeeze");
      break;
    }
    const g = p.filter((L) => !Me(L, 0) && Ie(L, w, f));
    g.some((L) => L.autoId === w.autoId) || g.push(w);
    let I;
    g.length > 0 ? I = g.reduce((L, F) => L[o] + L[l] > F[o] + F[l] ? L : L[o] + L[l] < F[o] + F[l] ? F : L[f] < F[f] ? L : F) : I = w;
    const b = I[o] + I[l] + s;
    let C;
    o === "x" ? C = new be({
      x1: b,
      x2: b,
      y1: I[f],
      y2: e[c]
    }) : C = new be({
      x1: I[f],
      x2: e[c],
      y1: b,
      y2: b
    });
    const y = at(C, e, p, !0);
    if (!Array.isArray(y)) {
      console.warn("Expected collision shapes array but got:", typeof y);
      continue;
    }
    const k = y;
    let D = 0;
    if (k?.length && (D = k.reduce((F, z) => F[f] < z[f] ? F : z)[f] - s, D <= I[f])) {
      console.debug("Invalid segment end point calculation, skipping this squeeze attempt");
      continue;
    }
    const q = typeof B < "u" && typeof B.segments < "u" ? B.segments === 0 ? "root" : (B.segments + 1).toString() : "squeeze-" + Date.now();
    typeof B < "u" && typeof B.segments < "u" && B.segments++;
    const M = d(
      I,
      o,
      l,
      s
    ), x = m(
      e,
      I,
      f,
      c,
      D
    ), E = e[l] - M, O = {
      id: q,
      shapes: S,
      stock: e,
      saw: e.saw,
      material: e.material,
      cutDirection: N(e.cutPreference),
      phase: 0,
      stockType: e?.saw?.stockType,
      t: e.t,
      // Assign all dimensions and positions
      x: o === "x" ? M : I.x,
      y: o === "y" ? M : I.y,
      l: o === "x" ? E : e.l,
      w: o === "y" ? E : e.w,
      [o]: M,
      [f]: I[f],
      [l]: E,
      [c]: x
    };
    if (O.l <= 0 || O.w <= 0) {
      console.debug("Skipping segment with invalid dimensions:", O.l, O.w);
      continue;
    }
    let H;
    try {
      H = new se(O);
    } catch (L) {
      console.warn(`Corner squeeze segment creation error - ${L.message} for shape: ${I.id}`);
      continue;
    }
    try {
      await St.call(
        this,
        { secondPass: !0 },
        e,
        H
      ), u++;
    } catch (L) {
      console.warn(`Error during segment calculations: ${L.message}`);
    }
  }
  u > 0 && console.debug(`Corner squeeze completed with ${u} successful placements`);
}
function $n(e, t, i, n = null) {
  if (!t)
    throw new Error("no segment provided to assignFirstShape");
  if (!e) throw new Error("no shape provided to assignFirstShape");
  return e.resetBothScores(), e.x = t.x, e.y = t.y, R(e) && (e.initShapes(e.shapes), e.placeMyShapes(i)), $("calculations", `assigning first shape ${e.id}, x: ${e.x}, y: ${e.y}, rot: ${n}`), e.guillotineState || (e.guillotineState = new Re({})), e.firstShape.isFirstShape = !0, ls(e), Ce(e, t.cutDirection), n !== null && !R(e) ? fe(e, n, i) : n !== null && R(e) && e.rot !== n && $("groups", `[assignStripShape] WARNING: Group ${e.id} has computed rot=${e.rot} but requested rotation=${n} - groups cannot be rotated!`), pe() && (R(e) || A([() => T(e.rot).to.equal(n)])), e.addToStock(i), e;
}
async function bi(e, t, i, n = null) {
  if (A([
    () => T(G(t) || R(t), "runFirstShapeRotationTests requires shape or group").to.be.true,
    () => T(U(i)).to.be.true
  ]), !(ne(n) && !me(t, n, i)))
    for (const a of t.firstShape.sampleRotations)
      await Pi.call(
        this,
        t,
        i,
        a,
        ot,
        {
          options: e,
          fs: t,
          fsRotation: null,
          segment: i
        },
        "fsRotation"
      );
}
function xn(e, t, i) {
  let n;
  return i ? (n = e.cutPreference, Ce(t, N(n)), e.hasHeadCut = !0) : (P.equalTo(t[e.cutDirection], e[e.cutDirection]) ? n = e.cutDirection : n = tt(e) ? N(e.cutPreference) : N(e.cutDirection), Ce(t, N(n))), A([
    () => T(te(t)).to.not.equal(n)
  ]), n;
}
function In(e, t, i, n, a) {
  i.hasHeadCut = t;
  const s = xn(i, e, t), r = {
    l: s === "w" ? i.l : e.l,
    w: s === "w" ? e.w : i.w
  }, l = new se({
    x: e.x,
    y: e.y,
    l: r.l,
    w: r.w,
    t: i.t,
    parent: i,
    stock: n,
    material: n.material,
    shapes: a,
    firstShape: e,
    id: "fs-" + e.id,
    phase: i.phase + 1,
    preventAutoRotation: !0,
    saw: i.stock.saw,
    cutDirection: s,
    hasHeadCut: t,
    type: "firstShape"
  });
  if (l.shapes.unshift(e), !l)
    throw new Error("firstShapeSegment not created");
  return A([
    () => T(l.cutDirection, `segment cut direction ${i.id} is the same as first shape ${e.id}`).to.not.equal(te(e))
  ]), $("cuts", `FIRST SHAPE SEGMENT [${l?.parent?.type === "root" ? "R" : l.parent.id}]->[${l.autoId}] ${t ? "HEAD" : "NORM"} ${re(l.l, 4)}x${re(l.w, 4)}, SEG DIR ${l.cutDirection.toUpperCase()}, SHAPE DIR ${te(e).toUpperCase()}`), l;
}
function Tn(e, t, i, n, a = null, s) {
  if (!t.length) return [];
  A([
    () => T(t.length).to.be.greaterThan(0),
    () => T(e.every((o) => o.added === !1), "unplaced shapes contain added shapes").to.be.true
  ]);
  let r = [];
  for (const o of t) {
    const c = Ge(o, n);
    if (o.firstShape.sampleRotations = [], !R(o))
      for (const f of c) {
        let u = 1;
        fe(o, f, n);
        const h = o.getPriority(n);
        let d = !0;
        if (fe(o, f, n), A([
          () => T(o.rot, `unique shape ${o.id} rotation (${o.rot}) incorrect for (${f})`).equal(f)
        ]), a?.length) {
          o.x = i.x, o.y = i.y;
          for (const w of a)
            if (si(o, w, n)) {
              d = !1;
              break;
            }
        }
        if (!d) continue;
        const m = o.aspect;
        if (m < 0.1) {
          const w = n.cutPreference;
          if (o[w] >= 0.7 * n[w] && o[w] > o[N(w)]) {
            const p = Math.max(1, 10 * (1 - m * 2));
            u *= p;
          }
        }
        r.push({
          id: o.id,
          shape: o,
          rotation: f,
          score: u,
          priority: h
        });
      }
  }
  r.sort((o, c) => o.score !== c.score ? c.score - o.score : o.priority !== c.priority ? c.priority - o.priority : c.shape.area - o.shape.area), r = r.slice(0, this.config.sample.guillotine);
  const l = [];
  for (const o of r)
    l.find((f) => f.id === o.id) || l.push(o.shape), o.shape.firstShape.sampleRotations.push(o.rotation), A([
      () => T(o.shape.firstShape.sampleRotations.length).to.be.lessThanOrEqual(2),
      () => T(o.shape.firstShape.sampleRotations[0]).to.not.equal(o.shape.firstShape.sampleRotations[1])
    ]);
  return l.push(...s), l;
}
function bn(e, t, i) {
  if (!e.length) return [];
  if (typeof t != "number") throw new Error("getAllocatedStripShapeBatch - stripShapeBatchNumber must be a number");
  if (!i) throw new Error("getAllocatedStripShapeBatch - stock is required");
  const n = e.filter((r) => {
    if (r.added) return !1;
    const l = r.guillotineState.getStripShapeBatchData(t);
    return !(l === !1 || l.rerunning || l.stockId !== i.autoId);
  }), a = /* @__PURE__ */ new Set();
  return n.filter((r) => a.has(r.autoId) ? !1 : (a.add(r.autoId), !0));
}
function Cn(e, t, i) {
  kn(e.shapes);
  const n = Gi.call(this, e, t, i);
  return n || !1;
}
function Kt(e, t = null, i, n = !1) {
  let a;
  if (t !== null) {
    const s = e.guillotineState.getStripShapeBatchData(t);
    if (s === !1)
      throw new Error("getStripShapeRotation - could not find strip shape group");
    a = s.rot;
  }
  if (A([() => T([0, 1].includes(a)).to.be.true]), n && a !== e.rot) {
    if (R(e) || !me(e, a, i)) return a;
    if (fe(e, a, i) === !1)
      throw new Error("getStripShapeRotation - could not rotate strip shape correctly");
  }
  return a;
}
function Pn(e, t, i, n, a) {
  const s = i.cutPreference === "l" ? "l" : "w", r = new Set(a.map((u) => u[s]));
  A([
    () => T(r.size).to.be.greaterThan(0)
  ]);
  const l = a.filter((u) => _(u)), o = a.filter((u) => G(u));
  if (o.length < 2)
    return a;
  const c = [...o], f = [];
  for (const u of r) {
    const h = [], d = u * (1 - this.config.groups.tolerance);
    let m = u * (1 + this.config.groups.tolerance);
    m > n[s] && (m = n[s]);
    for (let w = c.length - 1; w >= 0; w--) {
      const p = c[w];
      !p.getMinSpacing(i.saw, !0) && p[s] <= i[s] && p[s] >= d && p[s] <= m && (h.push(p), c.splice(w, 1));
    }
    h.length > 0 && f.push(h);
  }
  if (f.length > 0) {
    const u = [];
    for (const h of f) {
      if (h.length < 2) continue;
      const d = h[0], m = d.guillotineState.getStripShapeBatchData(e);
      if (m === !1)
        throw new Error("no reference shape group");
      let w;
      try {
        const p = h.slice(0, -1).reduce((k, D) => k + D.getMinSpacing(i), 0), S = h.reduce((k, D) => k + D[t], 0);
        if (p + S > i[t]) continue;
        const g = d.l, I = d.w, y = `ss-${[...new Set(h.map((k) => k.parentId || k.id))].sort().join("-")}_${this.counters.group++}`;
        w = new _e({
          l: g,
          w: I,
          id: y,
          shapes: h,
          direction: Ni(t),
          container: i,
          type: "strip"
        });
      } catch (p) {
        console.log(p), w = null;
      }
      if (w) {
        const p = Math.min(...h.map((g) => {
          const I = g.guillotineState.getStripShapeBatchData(e);
          return I ? I.order : 1 / 0;
        }));
        w.guillotineState.setStripShapeBatchGroup(e, {
          stockId: i.autoId,
          dimension: w[t],
          rot: w.rot,
          order: p,
          priorityShape: m.priorityShape
        });
        const S = new Set(w.shapes.map((g) => g.id));
        u.push(w), n.shapes = n.shapes.filter((g) => !S.has(g.id)), n.shapes.push(w), a = a.filter((g) => !S.has(g.id));
      }
    }
    a = [...u, ...l, ...a.filter((h) => G(h))];
  } else
    a = [...l, ...o];
  return a;
}
function kn(e) {
  for (const t of e) t.guillotineState.resetStripShapeBatchGroups();
}
function En(e, t) {
  const i = t.getStock, n = 0.1 * i.l;
  function a(l) {
    return e.some((o) => l.parentId === o.parentId && !o.added) && Ae(l, i) && l.willItFit(t);
  }
  const s = e.some((l) => Ae(l, i) && l.willItFit(t) && l.l >= n || l.w >= n);
  return e.filter((l) => l.added ? !1 : (Z(l) && l.updateShapeSpacing(t), e.length === 1 || !s ? a(l) : l.l < n && l.w < n ? !1 : a(l)));
}
function Ci(e, t, i, n = null, a = !1) {
  if (!this.config.sample.enable && a === !1) return [];
  if (!e) throw new Error("getFirstShapeSample - type is required");
  A([
    () => T(e === "guillotine" || e === "efficiency", "type not correct").to.be.true,
    () => T(Bi(i), "should be a container").to.be.true
  ]);
  const s = ue(t, !1, !0);
  if (!s.length) return [];
  const r = t.filter((d) => R(d)), l = [], o = i.getStock;
  let c = En(s, i);
  if (!c.length) return [];
  if (e === "guillotine")
    c = Tn.call(
      this,
      t,
      c,
      i,
      o,
      n,
      r
    );
  else if (e === "efficiency") {
    c.push(...r);
    const d = c.filter((m) => m.getPriority(o) > 0);
    d.length && (c = d), c.sort(le.aspect);
  }
  const f = c.filter((d) => R(d)), u = c.filter((d) => !R(d)), h = [...f, ...u];
  for (const d of h)
    if (R(d)) {
      if (!d.willItFit(i)) {
        $("groups", `[getFirstShapeSample] Group ${d.id} does NOT fit container after calculateGroupDimensions - skipping (group: ${d.l}x${d.w}, container: ${i.l}x${i.w})`);
        continue;
      }
      d.firstShape.sampleRotations = [d.rot.valueOf()], l.push(d);
    } else {
      const m = t.find((w) => w.parentId === d.parentId && !w.added && w.constructor.name === d.constructor.name);
      if (m && (m.firstShape.sampleRotations = Ge(m, i), l.push(m)), l.length >= (e === "guillotine" ? this.config.sample.guillotine : this.config.sample.efficiency))
        break;
    }
  return $("firstShapes", `candidates for stock ${i.getStock?.id}, ${U(i) ? "segment " + i.id : ""}`, l.map((d) => ({ id: d.id, autoId: d.autoId, rotations: d.firstShape.sampleRotations }))), A([() => T(X(l), "duplicate ids found in candidates with getFirstShapeSample").to.false]), l;
}
const ge = {
  async calculation(e, t, i) {
    if (e?.tidy && (this.resetShapes(K(i, t)), this.tidyStrategy = !0), await ge.tryFirstShapes.call(this, t, i), !!this.bestResult && (this.tidyStrategy = !1, !e?.tidy && Rn.call(this, this.bestResult, t))) {
      t.algoBenchmark = this.bestResult, this.resetShapes(i);
      try {
        const a = await new Ns(this, t, i).run();
        if (!a) return;
        await J.call(this, a.result), delete t.algoBenchmark;
      } catch (n) {
        console.error("error with evo", n);
      }
      Pe({
        bestResult: this.bestResult,
        shapeList: this.shapeList,
        stockList: this.stockList,
        resetShapes: this.resetShapes?.bind(this)
      });
    }
  },
  /**
   * place the first shape according to firstShapeRotation strategy
   */
  defaultFirstShapePlacement: function(e = null, t = 0, i) {
    if (!ne(t)) throw new Error("no rotation provided");
    if (!ne(e))
      throw new Error("first shape not provided to defaultFirstShapePlacement");
    if (typeof e != "object")
      throw new Error("first shape is not an object");
    if (e.added)
      throw new Error(`first shape ${e.id} has been added previously`);
    if (!i)
      throw new Error("no stock provided to defaultFirstShapePlacement");
    if (e.rot !== t && !me(e, t, i))
      throw new Error(`first shape ${e.id} cannot rotate to: ${t}`);
    fe(e, t, i), e.resetBothScores(), $i.call(
      this,
      e,
      i,
      pt.call(this, i, i, e),
      []
    ), e.addToStock(i), e.firstShape.isFirstShape = !0, e.placementOrder = 0, R(e) ? (e.placeMyShapes(i), this.counters.placement = e.shapes.length) : this.counters.placement = 1;
  },
  /**
   * try all first shapes with both rotations if relevant
   */
  tryFirstShapes: async function(e, t) {
    const i = V(t, e);
    let n = Ci.call(
      this,
      "efficiency",
      i,
      e
    );
    const a = ue(i, !1, !0);
    let s = a.length > 1;
    s && i.reduce((o, c) => o + c.area, 0) < e.area * this.config.groups.shapeAreaCutOff && (s = !1);
    let r = [];
    s && !this.hasMinSpacing && this.config.groups.efficiency.firstShapes && a.length < this.config.groups.efficiency.limit && (r = ge.createFirstShapeGroups.call(
      this,
      i,
      e
    )), n.push(...r);
    let l = t;
    n = ue(n, !1, !0);
    for (const o of n)
      o.firstShape.isFirstShape = !0, R(o) && (l = Gs(
        o.shapes,
        i
      ), l.unshift(o)), await ge.calculateFirstShapeRotations.call(
        this,
        l,
        e,
        o
      ), o.firstShape.isFirstShape = !1;
  },
  /**
   * run the calculations for both first shape rotations
   */
  calculateFirstShapeRotations: async function(e, t, i) {
    const n = Ge(i, t);
    for (const a of n) {
      this.resetShapes(e, !1, !1), i.added = !1, R(i) && (i.placeMyShapes(t), e.unshift(...i.shapes), e = e.filter((r) => r.id !== i.id));
      const s = await Zs.call(
        this,
        e,
        t,
        i,
        a
      );
      ne(s.score) && await J.call(this, s);
    }
  },
  /**
   * scores the stock for a specific strategy and adds the score to the stock object
   */
  runSpecificStrategy: async function({
    shapes: e,
    container: t,
    firstShape: i = null,
    firstShapeRotation: n = 0,
    weighting: a = null
  }) {
    const s = performance.now();
    if (this.counters.placement = 1, !e.length) return !1;
    if (!i)
      throw new Error("no firstShape provided to efficiency.runSpecificStrategy");
    if (j(t) && (t.used = !1), this.resetShapes(e, !0, !1), i.reset(), !G(i) && !R(i) && typeof i == "string" && (i = this.shapeList.find((c) => c.id === i)), e.length) {
      if (a) {
        this.weighting.custom = {};
        for (const f of Object.keys(this.weighting.efficiency.standard()))
          this.weighting.custom[f] = a[f] ? a[f] : 0;
      }
      if (ge.defaultFirstShapePlacement.call(
        this,
        i,
        n,
        t
      ), await ve.call(
        this,
        e,
        i,
        t
      ) === !1) return !1;
    }
    const r = oe.call(
      this,
      e,
      t,
      i
    );
    a && (this.weighting.custom = null);
    const l = performance.now(), o = Math.ceil(l - s);
    return r.time = o, r;
  },
  /**
   * create groups to be used as a first shape
   * CAUTION - can make very simple calculations less efficient
   */
  createFirstShapeGroups: function(e, t) {
    if (!this.config.groups.efficiency.firstShapes) return [];
    const i = V(e, t).filter((r) => G(r)), n = ["l", "w"], a = /* @__PURE__ */ new Map();
    for (const r of n)
      lt({
        shapes: i,
        container: t,
        targetSize: t[r],
        exact: !1,
        direction: r,
        config: this.config,
        preventDuplicates: !0,
        counters: this.counters
      }).forEach((o) => {
        const c = `${o.l}-${o.w}`;
        a.has(c) || a.set(c, o);
      }), this.resetShapes(i);
    let s = Array.from(a.values());
    return s.sort((r, l) => l.efficiency - r.efficiency), s = s.slice(0, this.config.sample.groupSize), A([
      () => T(s.every((r) => P.lessThanOrEqualTo(r.l, t.l) && P.lessThanOrEqualTo(r.w, t.w)), "groups larger than container").to.be.true
    ]), s.length ? s : [];
  },
  /**
   * should tidy run?
   */
  shouldUseTidy: function(e, t) {
    return !this.config.efficiency.tidy || t?.saw?.stockType === "roll" || !e ? !1 : e.score.efficiency < 0.9 && t.cutType === "efficiency";
  }
}, de = {
  types: ["efficiency", "guillotine", "beam", "linear", "roll"],
  getCalculationType(e) {
    switch (e?.cutType) {
      case "efficiency":
        return e.cutType;
      case "guillotine":
        return e.cutType;
      case "beam":
        return e.cutType;
    }
    switch (e?.saw?.stockType) {
      case "linear":
        return e.saw.stockType;
      case "roll":
        return e.saw.stockType;
    }
    return null;
  },
  efficiency: async function(e, t, i) {
    await ge.calculation.call(this, e, t, i);
  },
  guillotine: async function(e, t, i, n = []) {
    if (this.counters.placement = 0, e.secondRun && n.length) {
      for (const a of n) {
        const s = i.filter((r) => !r.added);
        a.shapes = s, await De.call(
          this,
          e,
          t,
          s,
          a
        );
      }
      return;
    }
    t?.saw?.cutPreference === "flex" ? await ln.call(
      this,
      e,
      t,
      i
    ) : await De.call(
      this,
      e,
      t,
      i
    );
  },
  beam: async function(e, t, i, n = []) {
    if (this.counters.placement = 0, e.secondRun && n.length) {
      for (const a of n) {
        const s = i.filter((r) => !r.added);
        a.shapes = s, await De.call(
          this,
          e,
          t,
          s,
          a
        );
      }
      return;
    }
    await De.call(
      this,
      e,
      t,
      i
    );
  },
  roll: async function(e, t, i) {
    let n = [];
    switch (t.cutType) {
      case "guillotine":
        t.saw.cutPreference = "w", n = await de.guillotine.call(
          this,
          e,
          t,
          i
        );
        break;
      case "efficiency":
        t.saw.efficiencyOptions.primaryCompression = "l", n = await de.efficiency.call(
          this,
          e,
          t,
          i
        );
        break;
    }
    await J.call(this, n);
  },
  linear: async function(e, t, i) {
    const n = Hi.call(this, t, i);
    n && t && (Wi(n, t, i), n.stock = t, await J.call(this, n));
  }
};
async function Dn({
  shapeOrGroup: e,
  container: t,
  weighting: i,
  containerPlacedShapes: n = null,
  stockPlacedShapes: a = null,
  unplacedShapes: s = null,
  placementPositions: r = null,
  rayCastCoords: l = null,
  placedCoords: o = null
}) {
  if (!n)
    throw new Error("findBestShapePosition was not passed any placedShapes");
  if (!s)
    throw new Error("findBestShapePosition was not passed any unplacedShapes");
  if (!e)
    throw new Error("findBestShapePosition was not passed a shape");
  if (Z(e))
    try {
      e.updateShapeSpacing(t);
    } catch {
      return !1;
    }
  const c = t.l + t.x - e.l, f = t.w + t.y - e.w;
  if (c < 0 || f < 0) return !1;
  const u = new Je(), h = t.getStock;
  if (l)
    for (const d of l.points.values()) {
      const m = ji(
        e,
        d,
        t
      );
      m && u.addPoints(m.toArray());
    }
  for (const d of r.points.values()) {
    const m = Yi(
      e,
      d,
      t
    );
    u.addPoints(m.toArray());
  }
  if (t.cutType === "efficiency") {
    const d = e.getMinSpacing(t.saw);
    if (d > 0)
      for (const m of u.points.values()) {
        if (e.x = m.x, e.y = m.y, e.isTooCloseToEdges(t)) {
          m.tooClose = !0;
          continue;
        }
        if (!j(t) && e.isTooCloseToEdges(h)) {
          m.tooClose = !0;
          continue;
        }
        if (!m.tooClose) {
          const w = e.createProximityRectangle(d);
          if (!w)
            throw new Error("unable to create proximity rectangle");
          const p = n.length > a.length ? n : a;
          for (const S of p)
            if (m.tooClose = si(
              w,
              S,
              t,
              !1
            ), m.tooClose) break;
        }
      }
  }
  for (const d of u.points.values()) {
    if (d.tooClose || P.greaterThan(d.x, c) || P.greaterThan(d.y, f) || (e.x = d.x, e.y = d.y, ii(e, n, t))) continue;
    Yt(
      e,
      t,
      i,
      n,
      s,
      d,
      o
    );
    let m = s.length > 1;
    (t.cutType === "efficiency" && this.config.groups.efficiency.position || ["guillotine", "beam"].includes(t.cutType) && this.config.groups.guillotine.segments) && (vn.call(this, s, t) || (m = !1)), m && (t.cutType === "efficiency" && this.config.groups.efficiency.position || ["guillotine", "beam"].includes(t.cutType) && this.config.groups.guillotine.position) && d.type !== "group" && G(e) && Xi({
      container: t,
      containerPlacedShapes: n,
      unplacedShapes: s,
      shape: e,
      point: d,
      config: this.config,
      scoreFunction: (w, p, S, g, I) => {
        Yt(
          w,
          p,
          i,
          S,
          g,
          I,
          o
        );
      }
    });
  }
  return !0;
}
function vn(e, t) {
  return e.reduce((i, n) => i + n.area, 0) < t.area * this.config.groups.shapeAreaCutOff;
}
async function Pi(e, t, i = null, n = null, a = {}, s = null) {
  if (!n)
    throw new Error("no testFunction provided to testShapeRotations");
  if (typeof n != "function")
    throw new Error("testFunction provided to testShapeRotations is not a function");
  if (n.constructor.name !== "AsyncFunction")
    throw new Error("testFunction provided to testShapeRotations must be async");
  if (R(e)) {
    s && (a[s] = e.rot), await n.call(this, a);
    return;
  }
  ne(e.orientationLock) && (i = Ui(e, t));
  const r = ne(i) ? i : 0;
  me(e, r, t) && ie(e, t, r) && (fe(e, r, t), s && (a[s] = r), await n.call(this, a));
  const l = 1;
  i === null && !e.isSquare && me(e, l, t) && ie(e, t, l) && (fe(e, l, t), s && (a[s] = l), await n.call(this, a));
}
async function ve(e, t, i) {
  if (!e.length) return !1;
  if (X(e)) {
    const h = /* @__PURE__ */ new Set();
    e = e.filter((d) => h.has(d.autoId) ? !1 : (h.add(d.autoId), !0));
  }
  const a = i.getStock;
  if (a.saw && !xe(a.saw)) throw new Error("not real saw");
  const s = K(this.shapeList, a);
  let r = ti(e).filter((h) => h?.stock?.id === a.id);
  if (X(r)) {
    const h = /* @__PURE__ */ new Set();
    r = r.filter((d) => h.has(d.autoId) ? !1 : (h.add(d.autoId), !0));
  }
  const o = new Set(r.map((h) => h.autoId)), c = $t.call(
    this,
    null,
    r,
    i
  ), f = t ? {
    x: /* @__PURE__ */ new Map([[t.x, [t]]]),
    y: /* @__PURE__ */ new Map([[t.y, [t]]])
  } : {
    x: /* @__PURE__ */ new Map(),
    y: /* @__PURE__ */ new Map()
  };
  function u() {
    const h = V(
      e,
      a,
      "filter"
    ), d = /* @__PURE__ */ new Set();
    for (const g of h)
      if (R(g) && !_(g)) {
        const I = g;
        if (I.shapes?.length)
          for (const b of I.shapes)
            d.add(b.autoId);
      }
    const m = h.filter((g) => {
      if (_(g)) return !1;
      if (Te(g) || Z(g)) {
        const I = g;
        return !(!I.shapes || I.shapes.length === 0);
      }
      if (G(g))
        return !(d.has(g.autoId) || g?.group?.inGroup);
    }), w = m.filter((g) => R(g) && !_(g)), p = m.filter((g) => G(g)), S = [...w, ...p];
    return $("groups", `[getRelevantUnplacedShapes] ${S.length} unplaced (${w.length} groups, ${p.length} shapes)`), w.length > 0 && w.forEach((g) => {
      $("groups", `Group ${g.id}: ${g.shapes?.length || 0} child shapes, ${g.shapes.map((I) => I.id).join()}, added=${g.added}`);
    }), S;
  }
  for (let h = u(); h.length; ) {
    let d = function() {
      const b = h.filter((k) => typeof k?.bestScore?.total == "number");
      if (!b?.length) return !1;
      const C = Ln(b);
      if (!C) return null;
      const y = An.call(this, i, a, f, C);
      if (y.added && !o.has(y.autoId) && (r.push(y), o.add(y.autoId)), A([
        () => T(y.added).to.be.true,
        () => T(X(r), "duplicates found in containerPlacedShapes").to.be.false,
        () => T(r.every((k) => k.added), "containerPlacedShapes contains unplaced shapes").to.be.true
      ]), U(i)) {
        const { cuts: k } = Be.call(
          this,
          {
            container: i,
            shapes: r
          }
        ), { allShapesCut: D, uncutShape: q } = Si(r, k, i);
        if (!D) {
          $("errors", `not all shapes cut, uncutShape: ${q.id} - reverting winning shape ${y.id} (candidate was ${C.id})`), oi(f, y);
          const M = r.findIndex((E) => E.autoId === y.autoId);
          if (M > -1) {
            const E = r[M];
            r.splice(M, 1), o.delete(E.autoId), $("info", `removed failed shape ${y.id} from containerPlacedShapes at index ${M}`);
          } else
            console.warn(`  ⚠️  Could not find ${y.id} in containerPlacedShapes to remove!`);
          if (R(y)) {
            $("info", `not all shapes cut, destroying group ${y.id}`);
            const E = y.shapes || [];
            for (const O of E)
              O && typeof O.reset == "function" && O.reset();
            y.destroy();
          } else (G(y) || Z(y)) && ($("info", `not all shapes cut, resetting shape ${y.id}`), y.reset());
          const x = h.findIndex((E) => E.id === C.id);
          return x > -1 ? h.splice(x, 1) : console.warn(`  ⚠️  Could not find ${C.id} in unplaced array!`), A([() => T(X(h), "duplicates found in unplaced").to.be.false]), d.call(this);
        }
      }
      return { bestShapeOrGroup: C, winningShapeOrGroup: y };
    }, m = null;
    this.uniqueShapes.length > 1 && i.cutType === "efficiency" && this.config.efficiency.rayCasting && !this.hasMinSpacing && (m = zi(
      i,
      r
    ));
    const w = h.length;
    let p = !1;
    for (let b = 0; b < w; b++) {
      let C = !1;
      if (p && h[b].isSameSize(h[b - 1]))
        continue;
      for (let D = 0; D < b; D++)
        if (h[D].isSameSize(h[b])) {
          C = !0;
          break;
        }
      if (C) {
        p = !0;
        continue;
      } else
        p = !1;
      const y = h[b];
      y.resetBestScore();
      const k = pt.call(this, i, a, y);
      if (await Pi.call(
        this,
        y,
        i,
        null,
        Dn,
        {
          shapeOrGroup: y,
          container: i,
          weighting: k,
          containerPlacedShapes: r,
          stockPlacedShapes: s,
          unplacedShapes: h,
          placementPositions: c,
          rayCastCoords: m,
          placedCoords: f
        }
      ), R(y) && !_(y)) {
        const D = y;
        if (!D.bestScore || typeof D.bestScore.total != "number") {
          $("groups", `[placeShapes] Group ${D.id} has no valid placement. Releasing it and all clones.`);
          const q = D.autoId.replace(/\.\d+$/, ""), M = [];
          for (const x of e)
            if (R(x) && !_(x)) {
              const E = x;
              E.autoId.replace(/\.\d+$/, "") === q && !E.added && M.push(E);
            }
          if (M.length > 0) {
            $("groups", `  Releasing ${M.length} groups (including clones)`);
            const x = [], E = /* @__PURE__ */ new Set();
            for (const O of M)
              if (O.shapes && O.shapes.length > 0)
                for (const H of O.shapes)
                  E.has(H.autoId) || (x.push(H), E.add(H.autoId));
            for (const O of M)
              $("groups", `    Destroying group ${O.id}`), O.destroy();
            x.length > 0 && ($("groups", `  Adding ${x.length} released shapes back to containerShapes`), e.push(...x));
          }
        }
      }
    }
    const S = d.call(this, e);
    if (S === !1 || S === null) return;
    const { bestShapeOrGroup: g, winningShapeOrGroup: I } = S;
    if (h = u(), h.length > 0) {
      const b = $t(
        I ? [I] : [],
        r,
        i
      );
      c.addPoints(b.toArray()), c.deletePoint(new Ke(g.x, g.y));
    }
    this.resetShapes(h, {
      keepScores: !1,
      removeGroups: !1,
      keepGuillotineData: !0,
      keepFirstShapeSampleRotations: !1
    });
  }
  return !0;
}
function Rn(e, t) {
  if (this.config.evo.disable || e.stockID !== t.id) return !1;
  const i = V(this.shapeList, t, "filter", null), n = ue(i, null, !0);
  return n.length <= 1 || t?.saw?.stockType === "roll" || n.length > 100 || e?.algoTime > 2e3 || !this.enableEvo || e.cutType === "efficiency" && e?.score[this.successMetric] < 0.65 || t?.saw?.stockType === "roll" || !e?.score?.unplacedShapes || e?.score?.totalShapesPlaced <= 2 ? !1 : i.length <= this.config.evo.stockLimit;
}
function An(e, t, i, n) {
  const a = R(n) ? n : n.bestScore?.group ?? null;
  if (a) {
    const r = a.shapes.filter((l) => l.added || l.group?.inGroup);
    if (r.length > 0)
      $("groups", `[placeBestShapeOrGroup] Group ${a.id} is invalid - ${r.length}/${a.shapes.length} shapes already placed. Placing individual shape instead.`), R(n) || (n.bestScore.group = null);
    else
      return $("groups", `[placeBestShapeOrGroup] Placing group ${a.id} with ${a.shapes.length} shapes (type=${a.type})`), a.placementOrder = this.counters.placement, this.counters.placement += a.shapes.length, a.setPositionToBestScore(), Ht(e, a), it(i, a), a.placeMyShapes(t), a;
  } else n && (n.placementOrder = this.counters.placement++, n.setPositionToBestScore(), Ht(e, n), n.addToStock(t), it(i, n));
  return a || n;
}
function Ln(e) {
  return e.reduce((i, n) => {
    if (n.bestScore.total > i.bestScore.total)
      return n;
    if (n.bestScore.total === i.bestScore.total) {
      if (R(n) && !R(i))
        return n;
      if (n.area > i.area) return n;
    }
    return i;
  });
}
const Mn = Ne.Schema, ki = new Mn({
  organisation: {
    type: String,
    required: !0
  },
  name: String,
  description: String,
  code: String,
  //internal material code
  type: {
    type: String,
    enum: ["sheet", "linear", "roll"],
    default: "sheet"
  },
  cost: Number,
  l: Number,
  //default l
  w: Number,
  // default w
  t: Array,
  //available thicknesses
  grain: {
    type: String,
    enum: ["l", "w", ""],
    default: ""
  },
  trim: Array,
  notes: Array,
  custom: {
    type: Map,
    of: String
  }
});
ki.plugin(ni);
const qn = Ne.model(
  "material",
  ki,
  "materials"
), On = Ne.Schema, mt = new On({
  organisation: {
    type: String,
    required: !0
  },
  material: {
    type: String,
    required: !0
  },
  t: {
    type: Number,
    min: 0,
    required: !1
  },
  l: {
    type: Number,
    min: 0,
    required: !0
  },
  w: {
    type: Number,
    min: 0
  },
  grain: {
    //may be different from the parent material
    type: String,
    enum: ["l", "w", "", null],
    default: ""
  },
  trim: Array,
  q: {
    type: Number,
    min: 0,
    required: !0
  },
  cost: Number,
  area: { type: Number }
});
function Fn(e) {
  return e ? {
    l1: Ee({ v: e[2], dp: 4 }),
    l2: Ee({ v: e[3], dp: 4 }),
    w1: Ee({ v: e[1], dp: 4 }),
    w2: Ee({ v: e[2], dp: 4 })
  } : {
    l1: 0,
    l2: 0,
    w1: 0,
    w2: 0
  };
}
mt.pre("save", function(e) {
  this.material = this.material?.toLowerCase(), this.area = (this.l - parseFloat(this?.trim?.[2]) - parseFloat(this?.trim?.[3])) * (this.w - parseFloat(this?.trim?.[0]) - parseFloat(this?.trim?.[1])), e();
});
mt.plugin(ni);
const Gn = Ne.model(
  "stock",
  mt,
  "stock"
);
async function Nn(e = [], t, i = []) {
  t instanceof Le || (t = new Le(t));
  let n = [];
  const a = [];
  for (const s of e) {
    if (!ne(s.material)) continue;
    const r = n.filter((l) => {
      if (ie(s, l)) {
        let o = !1, c = !1, f = !0;
        if (l?.saw?.stockType === "linear" && (P.equalTo(s.w, l.w) || (f = !1)), (s.t === l.t || !ne(l.t)) && (c = !0), s.material === l.material && (o = !0), l?.saw?.stockType === "linear") {
          if (o && c && f)
            return !0;
        } else if (o && c) return !0;
      }
      return !1;
    });
    if (r.length) {
      s.stockLock = r.map((l) => l.parentId);
      continue;
    }
    try {
      const l = {
        $and: [
          {
            material: s?.material?.toLowerCase(),
            t: s.t,
            q: { $gt: 0 },
            l: { $gte: s.l },
            w: { $gte: s.w }
          },
          {
            id: {
              $nin: i.map((f) => f?.id?.toLowerCase())
            }
          }
        ]
      }, [o, c] = await Promise.all([
        qn.findById(s?.material?.toLowerCase())?.lean(),
        //TODO make sorting order and limit configurable based on org
        Gn.find(l).sort({ area: 1 }).limit(3).lean()
      ]);
      o && c.length ? c.forEach((f) => {
        const u = Fn(f.trim), h = {
          l: f.l - (u.l1 ?? 0) - (u.l2 ?? 0),
          w: f.w - (u.w1 ?? 0) - (u.w1 ?? 0)
        };
        if (!(P.lessThanOrEqualTo(
          s.l,
          h.l
        ) && P.lessThanOrEqualTo(
          s.w,
          h.w
        ) || P.lessThanOrEqualTo(
          s.w,
          h.l
        ) && P.lessThanOrEqualTo(
          s.l,
          h.w
        )))
          return;
        const d = Vi.parse({
          // Base dimensions from stockItem
          l: f.l,
          w: f.w,
          t: f.t,
          q: f.q,
          cost: f.cost,
          grain: f.grain || "",
          material: f.material,
          // Generated IDs
          id: (i.length + n.length + 1).toFixed(1),
          parentId: (i.length + n.length + 1).toString(),
          // Additional required fields
          name: o.name,
          autoAdd: !1,
          //material based calculations do not allow autoAdd
          trim: u,
          stockType: t.stockType,
          // Required fields with defaults
          duplicate: !1,
          offcut: !1,
          issues: [],
          warnings: [],
          shapes: [],
          isContainer: !0,
          preventGrainRotation: !1,
          allowExactFitShapes: !1
        });
        n.push(new Qe(d)), Array.isArray(s.stockLock) ? s.stockLock.push(d.parentId) : s.stockLock = [d.parentId];
      }) : a.push({
        material: o.name,
        t: s.t,
        shape: s.parentId
      });
    } catch (l) {
      throw console.error("error finding stock", l.message), new Error(l);
    }
  }
  if (n.length)
    n = Ze(n);
  else if (!i?.length)
    throw new Error("No relevant stock found - check material, thickness, dimensions & stock quantity");
  return {
    stockList: n,
    unavailableStock: a
  };
}
function Bn(e, t, i = !1) {
  t.forEach((s) => {
    s.identicalTo = [];
  });
  const n = [];
  for (let s = 0; s < e.length; s++) {
    const r = e[s];
    if (n.some((c) => c.some((f) => f.id === r.id))) continue;
    const o = [r];
    for (let c = s + 1; c < e.length; c++) {
      const f = e[c];
      r.isIdentical(f, i) && o.push(f);
    }
    o.length > 1 && n.push(o);
  }
  const a = /* @__PURE__ */ new Map();
  t.forEach((s) => {
    a.has(s.parentId) || a.set(s.parentId, []), a.get(s.parentId).push(s);
  }), n.forEach((s) => {
    const r = s.map((l) => l.parentId);
    r.forEach((l) => {
      (a.get(l) || []).forEach((c) => {
        r.forEach((f) => {
          f !== c.parentId && !c.identicalTo.includes(f) && c.identicalTo.push(f);
        });
      });
    });
  }), t.forEach((s) => {
    (a.get(s.parentId) || []).length > 1 && !s.identicalTo.includes(s.parentId) && s.identicalTo.push(s.parentId);
  });
}
function Hn(e, t) {
  for (const i of e) {
    i.fitsStock = {};
    for (const n of t) {
      const a = Ge(i, n);
      i.fitsStock[n.parentId] = {
        any: ie(i, n, null),
        0: a.includes(0),
        1: a.includes(1)
      };
    }
  }
}
function Wn(e, t, i, n) {
  const a = n?.similarityThreshold ?? 0.1, s = n?.selectionStrategy, r = n?.minPerShape ?? 0, l = n?.minTotal ?? 0;
  if (e.length <= 1)
    return t;
  const { filtered: o, excludedGroups: c } = zn(
    e,
    i,
    { similarityThreshold: a, selectionStrategy: s }
  );
  let f = [...o], u = [...c];
  if (r > 0) {
    const m = /* @__PURE__ */ new Map();
    for (const p of t) {
      const S = m.get(p.parentId) || 0;
      m.set(p.parentId, S + 1);
    }
    const w = f.filter((p) => (m.get(p.parentId) || 0) < r);
    if (w.length > 0) {
      for (const p of w) {
        const S = p.parentId;
        for (const g of u) {
          const I = g.filter((b) => (m.get(b.original.parentId) || 0) >= r);
          if (I.length > 0) {
            const b = I.sort((y, k) => (m.get(k.original.parentId) || 0) - (m.get(y.original.parentId) || 0))[0], C = f.findIndex((y) => y.parentId === S);
            if (C !== -1) {
              f[C] = b.original;
              const y = g.findIndex((k) => k === b);
              y !== -1 && g.splice(y, 1);
              break;
            }
          }
        }
      }
      u = u.filter((p) => p.length > 0);
    }
  }
  if (l > 0) {
    const m = new Set(f.map((p) => p.parentId)), w = t.filter((p) => m.has(p.parentId)).length;
    if (w < l && u.length > 0) {
      const p = [];
      let S = w;
      for (; S < l && u.some((g) => g.length > 0); ) {
        for (let g = 0; g < u.length && S < l; g++) {
          const I = u[g];
          if (I.length > 0) {
            const C = Un([...I], s)[0], y = C.original.parentId, k = t.filter((q) => q.parentId === y).length;
            p.push(C.original), S += k;
            const D = I.findIndex((q) => q === C);
            D !== -1 && I.splice(D, 1);
          }
        }
        if (u = u.filter((g) => g.length > 0), u.length === 0 || u.every((g) => g.length === 0))
          break;
      }
      f = [...f, ...p];
    }
  }
  const h = new Set(f.map((m) => m.parentId));
  return t.filter((m) => h.has(m.parentId));
}
function Un(e, t) {
  switch (t) {
    case "largest":
      return e.sort((i, n) => n.area - i.area);
    case "smallest":
      return e.sort((i, n) => i.area - n.area);
    case "first":
    default:
      return e;
  }
}
function zn(e, t, i) {
  const n = i.similarityThreshold, a = i.selectionStrategy;
  if (e.length <= 1) return { filtered: e, excludedGroups: [] };
  const s = e.map((c) => {
    const f = {
      l: c.longSide,
      w: c.shortSide
    };
    return {
      original: c,
      // Keep reference to the original shape object
      rotated: f,
      // Normalized dimensions for comparison (keeping 'rotated' name for compatibility)
      area: c.area
      // Area for 'largest'/'smallest' selection
    };
  }), r = [];
  for (const c of s) {
    let f = !1;
    for (const u of r)
      if (u.some((h) => jn(c.rotated, h.rotated, n))) {
        u.push(c), f = !0;
        break;
      }
    f || r.push([c]);
  }
  const l = [], o = [];
  return r.forEach((c) => {
    if (c.length === 1) {
      l.push(c[0]);
      return;
    }
    let f;
    switch (a) {
      case "largest":
        f = c.reduce((h, d) => d.area > h.area ? d : h, c[0]);
        break;
      case "smallest":
        f = c.reduce((h, d) => d.area < h.area ? d : h, c[0]);
        break;
      case "first":
      default:
        f = c[0];
    }
    l.push(f);
    const u = c.filter((h) => h !== f);
    u.length > 0 && o.push(u);
  }), {
    filtered: l.map((c) => c.original),
    excludedGroups: o
  };
}
function jn(e, t, i) {
  const n = Math.abs(e.l - t.l) / Math.max(e.l, t.l, 1), a = Math.abs(e.w - t.w) / Math.max(e.w, t.w, 1);
  return n <= i && a <= i;
}
function Yn(e, t, i) {
  if ($("stack", `previous stock ${t.id}`), ["l", "w", "material", "t"].some((s) => e[s] !== t[s])) return !1;
  const n = e.cutType === "guillotine" || e.cutType === "beam", a = e.saw.guillotineOptions?.strategy !== "time";
  if (!n || n && a) {
    const s = Ei.call(
      this,
      e,
      t,
      i,
      this.shapeList
    );
    if (s)
      return $("stack", `stack found: ${e.id} === ${t.id}`), this.recordStackToBestResult(e, i), e.used = !0, e.score = t.score, s;
  }
  return !1;
}
function Ei(e, t, i, n) {
  if (!this.config.stack || !i.length) return !1;
  const a = e.saw;
  if (a.stackingMode === "none") return !1;
  if ($("stack", `looking for stack for ${e.id}, comparing to ${t.id}`), a.cutType === "beam" && t.stack) {
    let s = t, r = 1;
    if (t.stack.stock ? (s = t.stack.stock, r = s.stack?.number || 1) : t.stack.number && (r = t.stack.number), s.t * r + e.t > a.stackHeight)
      return !1;
  }
  if (e.parentId === t.parentId) {
    if (a.cutType === "beam" && a.stackHeight > 0 && e.t * 2 > a.stackHeight)
      return !1;
    const s = K(n, t);
    if (!s.length) return !1;
    const r = Di.call(this, [t], s, e, i, !0, !0, a.stackingMode === "identical");
    if (r)
      return e.stack = { stock: r }, r.stack.number === 1 ? r.stack.number = 2 : r.incrementStack(), r;
  }
  return !1;
}
function Xn(e, t) {
  const i = this.shapeList.filter((s) => s.added), n = this.stockList.filter((s) => s.used);
  $("stack", `looking for duplicates for ${e.id}`);
  const a = Di.call(this, n, i, e, t, !0, !1);
  return a ? ($("stack", `duplicate pattern found: ${e.id} === ${a.id}`), _i(a, e), e.used = !0, a) : !1;
}
function Di(e, t, i, n, a = !0, s = !0, r = !0) {
  if (!e.length || !n.length) return null;
  let l = null;
  const o = e.filter((u) => u.used && u.id !== i.id && i.l === u.l && i.w === u.w);
  if (!o.length) return null;
  const c = this.shapeList.filter((u) => Ae(u, i)), f = /* @__PURE__ */ new Map();
  for (const u of o) {
    const h = K(t, u);
    if (!h.length || this.shapeList.filter((S) => Ae(S, u)).length !== c.length) continue;
    const m = h.length, w = [];
    f.clear();
    let p = !0;
    for (const S of h) {
      let g = null;
      if (s)
        g = n.find((I) => !f.has(I) && I.isIdentical(S, r));
      else {
        const I = n.filter((b) => !f.has(b) && b.longSide === S.longSide && b.shortSide === S.shortSide && me(b, S.rot, u));
        I.length === 1 ? g = I[0] : I.length > 1 && (g = I.find((b) => b.parentId === S.parentId) || I[0]);
      }
      if (g)
        f.set(g, !0), w.push({
          current: g,
          match: S
        });
      else {
        p = !1;
        break;
      }
    }
    if (p && w.length === m) {
      if (a) {
        i.shapes = [];
        for (const { current: S, match: g } of w)
          Object.assign(S, {
            x: g.x,
            y: g.y,
            w: g.w,
            l: g.l,
            guillotineData: g.guillotineData,
            placementOrder: g.placementOrder,
            added: !0,
            stock: i
          }), i.shapes.push(S);
      }
      l = u;
      break;
    }
  }
  return l;
}
class Jt extends Ki {
  // Zod schema for validation and serialization
  static schema = Ji;
  static computedProperties = Qi;
  /**
   * Get entity type
   */
  getType() {
    return W.Optimiser;
  }
  constructor(t) {
    const i = Zi(t.user, t), n = {
      // Pass through most properties directly
      ...t,
      // Apply defaults for arrays
      stockList: t.stockList || [],
      shapeList: t.shapeList || [],
      userGroups: t.userGroups || [],
      // Config overrides
      config: i,
      successMetric: xt(i, "successMetric", t.successMetric || es.successMetric),
      enableEvo: xt(i, "evo.disable", !1) ? !1 : t.enableEvo ?? !0,
      weighting: t.weighting || {
        efficiency: Q.efficiency,
        guillotine: Q.guillotine,
        roll: Q.roll
      },
      stockType: t.saw?.stockType || null,
      // Don't skip validation so defaults are applied
      skipSchemaValidation: !1
    };
    super(n), !this.useInventory && this.stockList?.length && this.stockList.forEach((a) => {
      a?.saw?.stockType || (a.saw.stockType = this.saw.stockType);
    }), Zt({
      stocks: this.stockList,
      shapes: this.shapeList
    }, "Optimiser constructor"), this.uniqueStock = we(this.stockList), this.groupList = [], this.init();
  }
  init() {
    const t = [];
    if (!this.shapeList.length) throw new Error("No parts to process");
    this.shapeList.some((a) => a.duplicate) || ([...this.shapeList].forEach((s) => {
      for (let r = s.q; r--; )
        r != 0 && this.shapeList.push(s.clone(r.toString()));
    }), this.shapeList.push(...t), this.shapeList.sort(le.ID));
    const i = this.shapeList.filter((a) => !R(a));
    this.shapeAnalysis(i, this.stockList);
    const n = [];
    if (this.userGroups.forEach((a, s) => {
      for (let r = 0; r < a.q; r++) {
        const l = a.toGroup(s, r, this.shapeList);
        l && n.push(l);
      }
    }), ts(n, this.stockList, this.saw), this.shapeList.push(...n), this.uniqueShapes = this.shapeList.filter((a) => !a?.duplicate), typeof this?.saw?.options?.minSpacing == "number")
      this.hasMinSpacing = !0;
    else {
      const a = this.shapeList.some((s) => s.minSpacing > 0);
      this.hasMinSpacing = a, this.hasShapeLevelMinSpacing = !0;
    }
  }
  shapeAnalysis(t, i) {
    Bn.call(this, t, this.shapeList), Bs.call(this, t, i), Hn.call(this, t, i);
  }
  recordStackToBestResult(t, i = []) {
    if (this.bestResult) {
      const n = {
        ...this.bestResult,
        stock: t,
        shapes: i.filter((a) => a.added && a.stock.id === t.id).map((a) => a.compress())
      };
      this.bestResult = Ii(n);
    }
  }
  resetClonedShapes(t) {
    t.forEach((i) => {
      const n = this.shapeList.find((a) => a.id === i.id);
      n && n.reset(!1);
    });
  }
  //various methods of choosing a selection of stock for the calculation
  stockRefinement(t, i, n) {
    if (!t.length) return [];
    const a = /* @__PURE__ */ new Set();
    i.forEach((l) => l.stockLock.forEach((o) => a.add(o)));
    const s = t.filter((l) => a.has(l.parentId));
    let r = is(s);
    if (n && n?.options?.stockSelection === "smallest")
      return r.sort(le.AA), [r[0]];
    if (r.some((l) => l.material)) {
      const l = r[0].material;
      r = r.filter((o) => o.material === l);
    }
    if (r.some((l) => l.t)) {
      const l = Math.min(...r.map((o) => o.t));
      r = r.filter((o) => o.t === l);
    }
    switch (n.stockType) {
      case "linear":
        return r.slice(0, 10);
      case "roll":
        return r.slice(0, 10);
      default:
        return i.length < 100 ? r.slice(0, 5) : r.slice(0, 3);
    }
  }
  /**
   * examines all strategies for each stock and returns an array of best results
   * @returns {Array} best results
   */
  async run() {
    let t = "";
    this.config.captureProfile && (t = `profile-${Date.now()}`, "profile" in console && typeof console.profile == "function" && console.profile(t));
    async function i(s, r) {
      const l = de.getCalculationType(s);
      if (!l) throw new Error(`calculation type not found for stock ${s.id}`);
      if ($("allStock", `calculating stock ${s.id} with ${l} calculation`), !de.types.includes(l))
        throw new Error(`invalid calculation type: ${l} for stock ${s.id}`);
      return r = r.filter((o) => !o.added && o.stockLock.includes(s.parentId)), await de[l].call(
        this,
        {},
        s,
        r
      );
    }
    function n(s, r) {
      const l = s.filter((c) => !c.unusable), o = this.stockRefinement(
        l,
        r,
        this.saw
      );
      return o.sort(le.ID), $("allStock", `refined stock ${o.map((c) => c.id).join()}`), o;
    }
    await this.allStock(i, n), this.config.secondRun.enabled && await this.secondRun(), this.config.captureProfile && "profileEnd" in console && typeof console.profileEnd == "function" && console.profileEnd(t);
    const a = [];
    for (const s of this.stockList)
      if (s.segments)
        for (const r of s.segments) {
          const l = r.shapes?.filter((o) => _(o) && o.added) || [];
          a.push(...l);
        }
    for (const s of this.shapeList)
      if (!(!G(s) || !s.added)) {
        for (const r of a)
          if (r.shapes.some((l) => l.autoId === s.autoId)) {
            s.group.addedAsGroup = r.autoId;
            break;
          }
      }
    for (let s = this.shapeList.length; s--; ) {
      const r = this.shapeList[s];
      Z(r) && (r.added && r.stock && r.placeMyShapes(r.stock), this.shapeList.splice(s, 1), this.shapeList.push(...r.shapes));
    }
    this.groupList = [];
  }
  /* calculate all unique stock with the supplied calculation and choose a winner if multiple results returned
     DO NOT pass arrow functions as arguments */
  async allStock(t, i) {
    this.resetShapes(this.shapeList, {
      keepScores: !1,
      removeGroups: !0,
      keepGuillotineData: !1
    });
    let n, a = null, s = null, r, l, o, c;
    for (let f = we(this.stockList, !1); f.length > 0; f = we(this.stockList, !1)) {
      let u = V(this.shapeList);
      if (!u?.length) break;
      for (const p of f)
        if (!V(u, p, "some")) {
          $("allStock", `stock ${p.id} is unusable`), p.unusable = !0;
          break;
        }
      const h = i.call(
        this,
        f,
        u
      );
      if (A([() => T(h.every((p) => xe(p.saw))).to.be.true]), !h.length) break;
      if (c) {
        const p = h.findIndex((S) => S?.parentId === c);
        p > -1 && h.unshift(h.splice(p, 1)[0]);
      }
      if (a = null, s = null, this.stockList.some((p) => p.used))
        for (const p of h) {
          $("stack", `current stock: ${p.id}`);
          const S = V(
            u,
            p
          );
          if (S?.length) {
            if (n && (a = Yn.call(this, p, n, S), a)) {
              n = a, r = p;
              break;
            }
            if (this.config.findDuplicatePatterns && (s = Xn.call(this, p, S), s)) {
              n = p;
              break;
            }
          }
        }
      if (!a && !s) {
        for (const g of h) {
          l = null;
          try {
            g.applyTrim();
          } catch (b) {
            $("info", `stock.applyTrim error ${b.message}`);
            continue;
          }
          const I = V(this.shapeList);
          if (!I?.length) return;
          if (l = V(I, g), !l?.length)
            if (g.allowExactFitShapes && (l = I.filter((b) => P.equalTo(
              b.l,
              g.l + g.trim.l1 + g.trim.l2
            ) && P.equalTo(
              b.w,
              g.w + g.trim.w1 + g.trim.w2
            ) || P.equalTo(
              b.w,
              g.w + g.trim.w1 + g.trim.w2
            ) && P.equalTo(
              b.l,
              g.l + g.trim.l1 + g.trim.l2
            ))), l?.length) g.removeTrim();
            else continue;
          if (!l?.length) {
            g.used = !1;
            continue;
          }
          if (this.config.filtering.enable && l.length > this.config.filtering.minTotal) {
            const b = l.length;
            l = Wn(this.uniqueShapes, I, g, {
              similarityThreshold: this.config.filtering.similarityThreshold,
              selectionStrategy: "smallest",
              minTotal: this.config.filtering.minTotal
            });
            const C = l.length;
            $("allStock", `filtering reduced shapes by ${b - C}, orginal: ${b}, filtered: ${C}`);
          }
          await t.call(this, g, l), this.resetShapes(l, {
            keepScores: !1,
            removeGroups: !1,
            keepGuillotineData: !1
          }), f.length > 1 && l.filter((C) => R(C)).forEach((C) => C.destroy());
        }
        if (h.forEach((g) => g.used = !1), !this.bestResult || !this.bestResult?.stock)
          break;
        o = gt(this.bestResult, this.stockList), o.score = this.bestResult.score, o.used = !0, n = o;
        const { updatedShapes: p, groups: S } = Pe({
          bestResult: this.bestResult,
          shapeList: this.shapeList,
          relevantStock: h,
          stockList: this.stockList,
          resetShapes: this.resetShapes.bind(this)
        });
        if (S.length > 0 && this.groupList && S.forEach((g) => {
          this.groupList.find((b) => b.autoId === g.autoId) || this.groupList.push(g);
        }), ze(p), this.bestResult?.offcut) {
          const g = {
            x: this.bestResult.totalLength,
            l: this.bestResult.offcut,
            stock: o
          };
          this.offcuts.push(g);
        }
        o?.saw?.stockType !== "roll" && this.summariseResults([this.bestResult], o);
      }
      u = V(this.shapeList);
      let d = [], m = [], w = 0;
      if (this.bestResult = null, this.bestPartialResult = null, a && (r?.autoAdd || je(this.stockList, r)))
        d.push(r);
      else {
        m = ue(u, !1);
        const p = m.filter((I) => ne(I.stockLock)), S = new Set(p.flatMap((I) => Array.isArray(I.stockLock) ? I.stockLock : [I.stockLock]));
        S.size || $("allStock", "no new stock requirements found");
        for (const I of S) {
          const b = this.stockList.filter((C) => {
            if (I === C.parentId) {
              if (C.autoAdd)
                return !0;
              if (je(this.stockList, C))
                return !0;
            }
            return !1;
          });
          if (b.length && !b.find((C) => !C.used)) {
            const C = b[0].clone(b.length.toString());
            this.stockList.push(C), w++;
          }
        }
        m.filter((I) => !ne(I.stockLock) || !I.stockLock.length).length && !d.length && (d = we(this.stockList).filter((I) => I.autoAdd || je(this.stockList, I)));
      }
      if (d.length && d.forEach((p) => {
        const S = p.clone(ss(this.stockList, p));
        this.stockList.push(S), a ? c = S.parentId : c = !1, w++;
      }), w ? (this.stockList.sort(le.AA), this?.job && this.job.updateProgress({
        socketId: this.socketId,
        type: "addStock",
        message: `added ${w} additional stock`,
        stockCount: this.stockList.reduce(
          (p, S) => S.used ? ++p : p,
          0
        ),
        shapeCount: this.shapeList.reduce(
          (p, S) => S.added ? ++p : p,
          0
        )
      })) : this?.job && this.job.updateProgress({
        socketId: this.socketId,
        type: "stockComplete",
        message: `completed stock ${o.parentId}`,
        stockCount: this.stockList.reduce((p, S) => S.used ? ++p : p, 0),
        shapeCount: this.shapeList.reduce((p, S) => S.added ? ++p : p, 0)
      }), this.useInventory && m.length && we(this.stockList, !1).length === 0) {
        const p = await Nn(
          m,
          this.saw,
          this.stockList
        );
        if (p.stockList.length) {
          const S = Ze(p.stockList);
          S.length && this.stockList.push(...S);
        }
      }
    }
    this.stockList = this.stockList.filter((f) => f.used);
  }
  /**
   * this idea with secondRun is to redistribute smaller parts to the least efficient stock - ideally reducing the number of stock needed
   * [] only look at stock with a single shape?
   */
  async secondRun() {
    $("secondRun", "starting second run...");
    const t = this.stockList.filter((s) => s.used);
    if (t.filter((s) => s.stack?.number && !s.stack?.stock).forEach((s) => {
      t.filter((r) => r.stack?.stock && j(r.stack.stock) && r.stack.stock.id === s.id).forEach((r) => {
        r.stack = null, r.rootSegment = s.rootSegment;
      }), s.stack = null;
    }), t[0].cutType !== "guillotine") return;
    A([
      () => T(t.length).equal(this.stockList.length),
      () => T(t.every((s) => s.score)).to.be.true,
      () => T(t.every((s) => s.shapes?.length)).to.be.true
    ]), t.sort((s, r) => s.score.efficiency - r.score.efficiency), $("secondRun", `sorted stock, ${t.map((s) => s.id)}`);
    const n = [], a = [];
    for (const s of t)
      s.score.efficiency >= this.config.secondRun.efficiencyCutoff && s.score.totalShapesPlaced > 1 ? n.push(s) : a.push(s);
    if (!(!n.length || !a.length)) {
      n.sort((s, r) => r.score.efficiency - s.score.efficiency), a.sort((s, r) => r.score.efficiency - s.score.efficiency), $("secondRun", `sorted efficient stock, ${n.map((s) => s.id)}`), $("secondRun", `sorted inefficient stock, ${a.map((s) => s.id)}`);
      for (const s of n) {
        if (!a.length) break;
        const r = [];
        for (let u = 0; u < s.shapes.length; u++) {
          const h = s.shapes[u];
          if (!h) throw new Error("shape not found in donorStock.shapes");
          if (R(h)) {
            h.placeMyShapes(s), h.shapes = h.shapes.map((d) => Object.assign({}, d)), s.shapes.splice(u, 1, ...h.shapes), u--;
            continue;
          }
          if (G(h))
            h.reset(), r.push(h);
          else {
            const d = this.shapeList.find((m) => m.id === h.id);
            if (!d) throw new Error(`shape ${h.id} not found in shapeList`);
            d.reset(), r.push(d), s.shapes[u] = d;
          }
        }
        const l = /* @__PURE__ */ new Set();
        let o, c, f = null;
        for (; r.length > 0 && (o = a.find((g) => g ? !l.has(g?.id) && s.shapes[0].stockLock.includes(g.parentId) : !1), !!o); ) {
          $("secondRun", `recipientStock - ${o.id}`), l.add(o.id);
          const u = de.getCalculationType(s);
          if (!u) throw new Error(`calculation type not found for stock ${s.id}`);
          const h = o.cutPreference === "l" ? "x" : "y";
          let d = [];
          if (c = o.rootSegment, $("secondRun", `second run, donor stock ${s.id}, recipient stock ${o.id}`), f) {
            f.shapes.forEach((I, b) => {
              if (!G(I)) {
                const C = this.shapeList.find((y) => y.id === I.id);
                f.shapes[b] = C;
              }
            }), o.shapes.forEach((I, b) => {
              if (!G(I)) {
                const C = this.shapeList.find((y) => y.id === I.id);
                o.shapes[b] = C;
              }
            });
            let g = !1;
            if (this.config.secondRun.stack && (g = Ei(o, f, [...r, ...o.shapes], this.shapeList)), g) {
              o.stack = { stock: f }, f.stack ? f.stack?.number && f.incrementStack() : f.stack = { number: 2 }, o.shapes.forEach((b) => {
                const C = r.findIndex((y) => y.id === b.id);
                C > -1 && (r.splice(C, 1), s.shapes.splice(s.shapes.findIndex((y) => y.id === b.id), 1));
              });
              const I = a.findIndex((b) => b.id === o.id);
              I > -1 && a.splice(I, 1), $("secondRun", `stack found for ${o.id} in second run`), ze(o.shapes);
              continue;
            }
          }
          if (!c) throw new Error("no root segment found in second run");
          if (ai(c, (g) => {
            if (g.offcut)
              return g[h] === 0 && (g.cutDirection = o.cutPreference, g.phase = 1), g.addToStock(o), d.push(g), !1;
          }), !d.length || (d = Ze(d), !d.length)) continue;
          await de[u].call(
            this,
            { secondRun: !0 },
            o,
            r,
            d
          );
          const m = r.length;
          for (let g = r.length; g--; )
            r[g].added && r.splice(g, 1);
          const w = r.length, p = m - w;
          if ($("info", `second run, added ${p}`), f = o, m - w === 0) continue;
          const S = a.findIndex((g) => g.id === o.id);
          S > -1 && a.splice(S, 1), ze(o.shapes);
        }
        if (!r.length || r.every((u) => u.added))
          s.used = !1, s.shapes = [], o.shapes.push(...s.shapes);
        else {
          $("info", `second run, not all shapes moved, reverting ${s.shapes.length} shapes`);
          for (const u of s.shapes) {
            const h = this.shapeList.find((d) => d.id === u.id);
            if (!h) throw new Error("original shape not found in second run");
            h.update(u), h.addToStock(s), A([
              () => T(h.added).to.be.true,
              () => T(h.stock?.id).to.equal(s.id),
              () => T(h.x).to.equal(u.x),
              () => T(h.y).to.equal(u.y)
            ]);
          }
        }
      }
    }
  }
  /**
   * removes all stock, shapes and cuts
   */
  reset() {
    this.stockList = [], this.shapeList = [], this.cutList = [];
  }
  /**
   * reset the shapelist back to defaults and remove groups
   */
  resetShapes(t, {
    keepScores: i = !1,
    removeGroups: n = !0,
    removeUnplacedGroups: a = !1,
    keepGuillotineData: s = !0,
    keepFirstShapeSampleRotations: r = !1
  } = {}) {
    if (t?.length)
      if (a) {
        const l = /* @__PURE__ */ new Set();
        for (const c of t)
          if (R(c) && c.added && c.shapes?.length)
            for (const f of c.shapes)
              l.add(f.autoId);
        const o = t.length;
        for (let c = o; c--; ) {
          const f = t[c];
          if (R(f)) {
            if (f.shapes?.length)
              for (const u of f.shapes)
                u.reset({
                  keepScores: i,
                  keepGuillotineBatchData: s,
                  keepGroupData: !1,
                  keepFirstShapeSampleRotations: r
                });
            f.added || t.splice(c, 1);
          } else
            l.has(f.autoId) ? t.splice(c, 1) : f.reset({
              keepScores: i,
              keepGuillotineBatchData: s,
              keepGroupData: !1,
              keepFirstShapeSampleRotations: r
            });
        }
      } else {
        const l = t.length;
        for (let o = l; o--; ) {
          const c = t[o];
          if (R(c)) {
            if (c.shapes?.length)
              for (const f of c.shapes)
                f.reset({
                  keepScores: i,
                  keepGuillotineBatchData: s,
                  keepGroupData: !1,
                  keepFirstShapeSampleRotations: r
                });
            n ? t.splice(o, 1) : c.added = !1;
          } else
            c.reset({
              keepScores: i,
              keepGuillotineBatchData: s,
              keepGroupData: !1,
              keepFirstShapeSampleRotations: r
            });
        }
      }
  }
  /**
   * summarise the results for the console
   */
  summariseResults(t, i) {
  }
}
function Jn() {
  v("Banding", It), v("banding", It), v("Container", $e), v(W.Container, $e), v("Corner", Tt), v("corner", Tt), v("Cut", Ve), v(W.Cut, Ve), v("Extras", bt), v(W.Extras, bt), v("Finish", Ct), v("finish", Ct), v("Group", _e), v(W.Group, _e), v("GuillotineState", Re), v(W.GuillotineState, Re), v("HingeHole", Pt), v("hingeHole", Pt), v("Hole", kt), v("hole", kt), v("ImageUpload", Et), v("imageUpload", Et), v("InputSaw", Dt), v(W.InputSaw, Dt), v("InputShape", vt), v(W.InputShape, vt), v("InputStock", Rt), v(W.InputStock, Rt), v("InputUserGroup", At), v(W.Group, At), v("Issue", ns), v("Line", be), v(W.Line, be), v("Machining", Lt), v(W.Machining, Lt), v("Offcut", Mt), v(W.Offcut, Mt), v("Optimiser", Jt), v(W.Optimiser, Jt), v("Placeable", qt), v(W.Placeable, qt), v("Planing", Ot), v("planing", Ot), v("Point", Ke), v(W.Point, Ke), v("PointCollection", Je), v(W.PointCollection, Je), v("Rectangle", Ft), v(W.Rectangle, Ft), v("Saw", Le), v(W.Saw, Le), v("Segment", se), v(W.Segment, se), v("Shape", Gt), v(W.Shape, Gt), v("Stock", Qe), v(W.Stock, Qe), rs();
}
export {
  Jn as initializeStaticRegistry
};

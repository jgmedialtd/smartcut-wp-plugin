import { c as Js, z as Dt, a as ke, D as Zi, b as Us, e as _s, d as Ks, s as Qs, f as eo, g as to, h as no, i as io, j as so, k as oo, l as ro, m as en, n as ao, o as lo, p as co, q as uo, r as fo, t as ho, C as ln, E as ee, u as po, I as dt, S as cn, v as Xt, w as ie, x as D, y as Ji, A as J, B as V, F as z, G as A, H as se, J as N, K as F, L as Me, M as W, N as Je, O as We, P as go, Q as Jt, R as Ue, T as Ne, U as tn, V as we, W as be, X as Ui, Y as Gt, Z as Le, _ as de, $ as nn, a0 as fe, a1 as ft, a2 as gt, a3 as un, a4 as mo, a5 as fn, a6 as le, a7 as _i, a8 as yo, a9 as So, aa as Lt, ab as $e, ac as _e, ad as st, ae as xo, af as Ki, ag as Qi, ah as es, ai as En, aj as xt, ak as wo, al as ts, am as Ot, an as bo, ao as hn, ap as Io, aq as ge, ar as It, as as ns, at as Co, au as dn, av as vo, aw as Po, ax as $o, ay as pn, az as To, aA as ko, aB as Tt, aC as Wt, aD as Ro, aE as gn, aF as mn, aG as Eo, aH as Mo, aI as ht, aJ as Ao, aK as Do, aL as kt, aM as sn, aN as Bo, aO as Xo, aP as Un, aQ as Go, aR as Lo, aS as Oo, aT as Wo, aU as Y, aV as _n, aW as Kn, aX as Qn, aY as ei, aZ as ti, a_ as ni, a$ as ii, b0 as si, b1 as oi, b2 as ri, b3 as ai, b4 as li, b5 as ci, b6 as ui, b7 as fi, b8 as hi } from "./result.zod-B0BoTcpc.js";
import { h as Ae, n as he, i as Nt, o as Mn, j as di, k as ze, l as qe, m as ce, q as xe, t as oe, u as re, v as Ce, w as tt, x as Ft, y as U, A as No, B as Fo, C as Yo } from "./vendor-BnSUeZfc.js";
import { g as yn, m as Ho, s as on } from "./vendor-lodash-CLVv-kqQ.js";
import { c as An, g as pi, a as zo, P as Sn, b as qo, d as Vo } from "./coordinates-BSLhhBFy.js";
import { i as Oe } from "./environment-BeBZzWz6.js";
import "./vendor-i18next-DIDhOEvY.js";
import { m as is } from "./vendor-mongoose-DS4b8TC1.js";
const ss = ["root", "firstShape", "near", "far", ""], jo = Js.extend({
  // Cutting information
  cuts: ke("Cut").default([]).behavior({ compress: "exclude" }),
  // Stock reference - serialize as reference only (default zRef behavior)
  stock: Dt("Stock", { nullable: !0, description: "Stock reference for this segment" }),
  phase: he().int().min(0).nullable().default(null),
  cutDirection: Nt(Zi).nullable().default(null).describe("The primary cut direction for this segment"),
  // Segment properties
  merged: Ae().default(!1),
  firstShape: Dt("Shape"),
  children: ke("Segment", {
    description: "Child segments"
  }).behavior({
    serialize: "full",
    // Serialize the full segment objects
    compress: "full",
    // Even in compressed mode, keep full objects
    clone: "copy"
  }),
  parent: Dt("Segment", { nullable: !0 }).behavior({
    serialize: "reference",
    // Parent can stay as reference
    compress: "exclude"
    // Exclude parent in compressed mode to avoid circular refs
  }),
  type: Nt(ss).nullable().default(null),
  placementOrder: he().int().min(0).optional(),
  // Beam saw specific
  hasBeamTrim: Ae().default(!1),
  hasHeadCut: Ae().default(!1),
  isInitial: Ae().default(!1),
  // Trim offcut flag - marks segments that represent trim areas (W1, W2, L1 for beam)
  isTrimOffcut: Ae().default(!1),
  // Visualization flags
  completed: Ae().optional(),
  rowSegment: Ae().optional()
});
Mn({
  x: he().optional(),
  y: he().optional(),
  l: he().optional(),
  w: he().optional(),
  type: Nt(ss),
  parent: di(),
  // Segment instance
  stock: di(),
  // Stock instance
  offcut: Ae().optional(),
  merged: Ae().optional(),
  cutDirection: Nt(Zi).nullable().optional()
});
const Zo = {
  ...Us,
  // Include parent computed properties
  root: {
    compute: (e) => {
      let t = e;
      for (; t.parent; )
        t = t.parent;
      return t;
    },
    metadata: {
      cache: !1,
      // Don't cache as parent relationships can change
      dependencies: [],
      returnType: "any"
    }
  },
  depth: {
    compute: (e) => {
      let t = 0, n = e.parent;
      for (; n; )
        t++, n = n.parent;
      return t;
    },
    metadata: {
      cache: !1,
      // Don't cache as parent relationships can change
      dependencies: [],
      returnType: "number"
    }
  }
}, Jo = Mn({
  id: ze().optional(),
  url: ze().optional(),
  size: he().optional(),
  mimeType: ze().optional(),
  name: ze().optional(),
  width: he().optional(),
  height: he().optional()
}), Uo = _s.extend({
  // ImageUpload specific properties
  images: qe(Jo).default([]).describe("Array of uploaded images"),
  maxImages: he().default(5).describe("Maximum number of images allowed"),
  allowedTypes: qe(ze()).default(["image/jpeg", "image/png", "image/gif"]).describe("Allowed MIME types"),
  maxSizeBytes: he().default(5242880).describe("Maximum file size in bytes (default 5MB)"),
  description: ze().optional().describe("Description of uploaded images"),
  tags: qe(ze()).default([]).describe("Tags associated with images")
  // Note: faces and sides inherited from Extra base
}), _o = {
  // Inherit computed properties from Extra base class
  ...Ks,
  // Check if any images are uploaded
  hasAnyImages: {
    compute: (e) => e.faces ? Object.keys(e.faces).some((t) => {
      const n = e.faces[t];
      return n !== void 0 && n !== !1 && n !== "";
    }) : !1,
    metadata: {
      cache: !1,
      dependencies: ["faces"],
      returnType: "boolean"
    }
  },
  // Get all faces with images
  activeFaces: {
    compute: (e) => e.faces ? Object.keys(e.faces).filter((t) => {
      const n = e.faces[t];
      return n !== void 0 && n !== !1 && n !== "";
    }) : [],
    metadata: {
      cache: !1,
      dependencies: ["faces"],
      returnType: "string[]"
    }
  }
}, rn = Mn({
  x: he(),
  y: he()
}), xn = Qs.extend({
  // ========== Polygon Outline ==========
  // Closed polygon vertices, origin-normalized (bounding box origin at 0,0)
  // First vertex should equal last vertex (closed polygon)
  outline: qe(rn).default([]).describe("Closed polygon outline vertices (origin-normalized)"),
  // Continuous rotation angle for nesting (radians, 0 to 2*PI)
  // The inherited rot (0|1) is not used for nesting shapes
  nestingRotation: he().min(0).max(Math.PI * 2).default(0).describe("Continuous rotation angle for nesting (radians)"),
  // Actual polygon area computed via shoelace formula
  // Different from inherited area which is the bounding box area (l * w)
  trueArea: he().min(0).default(0).describe("Actual polygon area (vs bounding box area)"),
  // Inner contour holes (for hollow shapes like frames)
  // Each hole is a closed polygon (first vertex = last vertex), wound CW
  // The main `outline` contains the slit-connected polygon for geometry ops;
  // `holes` stores the clean inner contours for stroke-correct rendering
  holes: qe(qe(rn)).default([]).describe("Inner contour holes for rendering (CW wound)"),
  // Simplified outline used for NFP computation and placement (hull or DP-simplified).
  // When set, placement math (rotation pivot + normalisation) uses THIS polygon, while
  // rendering + cutting continue to use `outline` for full fidelity. The two representations
  // must agree on the transform reference frame, so client rendering also consults this.
  // Absent when the full outline was used directly (e.g. ≤24 vertices or hull wasn't smaller).
  placementOutline: qe(rn).nullable().optional().describe("Simplified polygon used for NFP/placement; transform reference for render")
}), os = {
  // Include all Shape computed properties
  ...eo,
  // Fill ratio: how much of the bounding box the polygon actually fills
  fillRatio: {
    compute: (e) => {
      const t = e.l * e.w;
      return t === 0 ? 0 : e.trueArea / t;
    },
    metadata: {
      cache: !0,
      dependencies: ["trueArea", "l", "w"],
      returnType: "number"
    }
  },
  // Whether this shape has a valid polygon outline
  hasOutline: {
    compute: (e) => e.outline && e.outline.length >= 3,
    metadata: {
      cache: !1,
      dependencies: ["outline"],
      returnType: "boolean"
    }
  }
};
xn.describe(JSON.stringify({
  name: "NestingShape",
  description: "Irregular shape with polygon outline for nesting optimization",
  version: "1.0.0",
  extends: "Shape",
  computedProperties: Object.keys(os)
}));
class Ko {
  getStore() {
  }
  run(t, n) {
    return n();
  }
  enterWith(t) {
  }
  disable() {
  }
}
function Ct(e, t) {
  Object.assign(e, { color: t });
}
ce.colors = [
  2,
  3,
  4,
  5,
  7,
  9,
  10,
  11,
  14,
  159
];
const Yt = ce("logs"), rs = ce("cuts"), Dn = ce("groups"), Bn = ce("guillotine"), as = ce("results"), ls = ce("scoring"), cs = ce("firstShapes"), us = ce("calculations"), fs = ce("subset"), hs = ce("secondRun"), ds = ce("stack"), Xn = ce("errors"), ps = ce("allStock"), Gn = ce("reset"), Ln = ce("swarm");
Ct(Xn, 1);
Ct(Dn, 14);
Ct(Bn, 159);
Ct(Gn, 11);
Ct(Ln, 5);
function Qo(e = "info", t, n) {
  const i = t.map((o) => {
    const a = { ...o };
    for (const c in a)
      typeof a[c] == "string" && a[c].length > 30 && (a[c] = a[c].slice(0, 50) + "...");
    return a;
  }), r = console.table;
  let s = "";
  switch (console.table = (o, a) => {
    const c = console.log;
    console.log = (l) => {
      s += l + `
`;
    }, r(o, a), console.log = c;
  }, console.table(i, n), e) {
    case "info":
      Yt(s);
      break;
    case "guillotine":
      Bn(s);
      break;
    case "results":
      as(s);
      break;
    case "secondRun":
      hs(s);
      break;
    case "cuts":
      rs(s);
      break;
    case "scoring":
      ls(s);
      break;
    case "calculations":
      us(s);
      break;
    case "stack":
      ds(s);
      break;
    case "subset":
      fs(s);
      break;
    case "errors":
      Xn(s);
      break;
    case "allStock":
      ps(s);
      break;
    case "firstShapes":
      cs(s);
      break;
    case "groups":
      Dn(s);
      break;
    case "reset":
      Gn(s);
      break;
    case "swarm":
      Ln(s);
      break;
    default:
      Yt(s);
  }
  console.table = r;
}
const er = "\x1B[31m", tr = "\x1B[0m";
let gs = !0;
function nr(e) {
  gs = e;
}
const ir = {
  info: Yt,
  guillotine: Bn,
  results: as,
  secondRun: hs,
  cuts: rs,
  scoring: ls,
  calculations: us,
  stack: ds,
  subset: fs,
  errors: Xn,
  allStock: ps,
  firstShapes: cs,
  groups: Dn,
  reset: Gn,
  swarm: Ln
}, B = (e = "info", t, n = null, i = null, r = !1) => {
  if (!gs && !r || !r)
    return;
  const s = ir[e] || Yt;
  if (!s.enabled)
    return;
  const o = typeof t == "function" ? t() : t;
  s(e === "errors" ? `${er}${o}${tr}` : o), n && s(n), i && Qo(e, i);
};
to(B);
const wn = {
  "homag-ptx": {
    // PTX (Homag) is the most refined post-processor in the codebase
    // — it has external validation against MagiCut (Homag's own software)
    // via `utilities/saw-reference/validate-ptx.ts` and the optibox
    // bridge, so we know the format round-trips cleanly across the
    // full PatternSpec corpus. Use this profile as the reference
    // shape for new saw profiles.
    //
    // Emitter: `server/api/machines/ptx/emitter.ts` `createPtx`.
    // Conditional emission: only fires when `saw.cutType === 'beam'`.
    id: "homag-ptx",
    name: "Homag (PTX)",
    vendor: "Homag",
    formats: ["ptx"],
    defaults: {
      stockType: "sheet",
      cutType: "beam",
      // PTX emitter requires beam — see exports.ts:204 gate
      cutPreference: "l",
      stackHeight: 100,
      bladeWidth: 4,
      guillotineOptions: void 0,
      // use shared defaults
      efficiencyOptions: void 0,
      options: {
        stockSelection: "efficiency",
        stackingMode: "identical",
        minSpacing: 0,
        minSpacingDimension: { dimension: 0, minSpacing: 0 }
      }
    },
    // PTX round-trips the full corpus via MagiCut. The one real machine
    // limit we model is the Homag Sawteq bed envelope — a non-`max*` machine
    // fact consumed by `saws/is-layout-safe.ts` + the geometry oracle (NOT a
    // matcher veto). PTX itself accepts head-cuts + mixed-rotation
    // (corpus-validated), so no `supports*` limits are declared.
    constraints: {
      bedSize: { l: 4300, w: 2250 },
      // [] documented Homag Sawteq default — verify l×w against the deployed model
      notes: "Homag Sawteq bed envelope; the only known hard limit. PTX otherwise round-trips the full corpus via MagiCut (head-cuts + mixed-rotation included)."
    }
  },
  "biesse-optiplanner": {
    id: "biesse-optiplanner",
    name: "Biesse (Optiplanner XML)",
    vendor: "Biesse",
    formats: ["biesse-xml"],
    defaults: {
      stockType: "sheet",
      cutType: "beam",
      // `flex` lets the optimiser pick the long-/short-cut-first direction
      // per board (Biesse itself uses a mix: ~43% mixed, 9% short-first on
      // the 2083-job corpus, so pure `l` mis-serves over half of jobs).
      // Measured on the 202 TimberCity underperformers (preset max): flex
      // 2616 boards vs `l` 2665 (−49) at no calc-time penalty. The S-pattern
      // emitter now serialises short-cut-first layouts faithfully, so these
      // w-direction wins are deliverable. flex still loses a handful of big
      // jobs to pure-`l` (per-board-greedy direction selection isn't globally
      // optimal); that residual is being addressed at the optimiser level
      // (whole-job direction comparison) rather than reverted here.
      cutPreference: "flex",
      stackHeight: 100,
      // Optimik host's TCut parameter set ships at 4.8mm kerf; this
      // is the panel-saw default that matches our reference rig.
      bladeWidth: 4,
      options: {
        stockSelection: "efficiency",
        stackingMode: "identical",
        minSpacing: 0,
        minSpacingDimension: { dimension: 0, minSpacing: 0 }
      }
    },
    // Soft default: run Biesse jobs at thoroughness 1 ("balanced"). The retry
    // pipeline's packing passes (multi-strip fill/aspect) close a MEASURED −29
    // boards (14% of the gap to Biesse Optiplanner) on the 202-job TimberCity
    // corpus with ZERO regressions — 50/202 jobs reach Biesse's board count (up
    // from 32) — at ~1.5× calc time. The knee is here: thoroughness 2/3 used
    // MORE boards (and head cuts were net-negative), so 1 is optimal. Soft — an
    // explicit user/org `experimental.thoroughness` still wins (merged on top in
    // getConfig, Layer 2 over this Layer-1 preference).
    preferences: {
      experimental: {
        thoroughness: 1
      }
    },
    constraints: {
      maxNestedCutDepth: 3,
      // SAW / FORMAT truth: the Biesse machine cuts head cuts AND the Str
      // format encodes H + nested column subdivisions — so both are `true`
      // here. The limitation is in OUR emitter, not the saw: the current Str
      // emitter (server/api/machines/biesse/emitter.ts generatePatternString)
      // downgrades H→L and flattens nested subdivisions (the
      // `prod-cabinet-run` case). That emitter limit is declared once in
      // saws/emitter-capabilities.ts (biesse-xml) and folded in by
      // effectiveConstraints(), which the optimiser, matcher and pre-emit
      // validators all enforce — so head cuts + nested subdivisions stay
      // disabled in practice until the emitter gains them, at which point
      // flipping ONE emitter-capabilities entry re-enables both coherently.
      supportsNestedColumnSubdivision: !0,
      supportsHeadCuts: !0,
      notes: "Saw + Str format support H + nested cuts; the limit is our emitter, which does not serialise them yet. Emitter capability is declared in saws/emitter-capabilities.ts (biesse-xml); see also server/api/machines/biesse/emitter.ts generatePatternString."
    },
    // `guillotine.allowHeadCuts: false` is still derived automatically — but
    // from the EFFECTIVE head-cut constraint (saw `true` AND emitter `false`
    // → effective `false`) inside applySawProfileConstraints, not from a raw
    // saw `false`. No separate `preferences` entry needed.
    // Selco saw models whose OSI 3.05 saw-config accepted our emitted XML
    // during the 2026-05-27 auto-import oracle verification (Pattern Chk
    // gate). These are the WN*.XML config slots on `windows-re-11`.
    // Model codes match the on-disk filenames at
    // C:\Biesse\Osi\Export\WN*.XML; bed-size suffix indicates the saw
    // bed dimensions in mm.
    testedModels: [
      { code: "WN6XX_3200", name: "Selco WN6XX, 3200mm bed", lastVerified: "2026-05-27" },
      { code: "WN6XX_3800X3200", name: "Selco WN6XX, 3800×3200mm bed", lastVerified: "2026-05-27" },
      { code: "WN6XX_3800X3800", name: "Selco WN6XX, 3800×3800mm bed", lastVerified: "2026-05-27" },
      { code: "WN6XX_4500", name: "Selco WN6XX, 4500mm bed", lastVerified: "2026-05-27" },
      { code: "WN6XX_5900", name: "Selco WN6XX, 5900mm bed", lastVerified: "2026-05-27" },
      { code: "WN6XX7XX_3800", name: "Selco WN6XX/WN7XX, 3800mm bed", lastVerified: "2026-05-27" },
      { code: "WN6XX7XX_4500", name: "Selco WN6XX/WN7XX, 4500mm bed", lastVerified: "2026-05-27" },
      { code: "WN6XX7XX_5900", name: "Selco WN6XX/WN7XX, 5900mm bed", lastVerified: "2026-05-27" },
      { code: "WN6XXTP_3200", name: "Selco WN6XX TP, 3200mm bed", lastVerified: "2026-05-27" },
      { code: "WN6XXTP_3800X3200", name: "Selco WN6XX TP, 3800×3200mm bed", lastVerified: "2026-05-27" },
      { code: "WN6XXTP_3800X3800", name: "Selco WN6XX TP, 3800×3800mm bed", lastVerified: "2026-05-27" },
      { code: "WN6XXTP_4500", name: "Selco WN6XX TP, 4500mm bed", lastVerified: "2026-05-27" },
      { code: "WN7XX_3800", name: "Selco WN7XX, 3800mm bed", lastVerified: "2026-05-27" },
      { code: "WN7XX_4500", name: "Selco WN7XX, 4500mm bed", lastVerified: "2026-05-27" },
      { code: "WN7XX_5900", name: "Selco WN7XX, 5900mm bed", lastVerified: "2026-05-27" }
    ]
  },
  "mayer-may": {
    id: "mayer-may",
    name: "Mayer (.may)",
    vendor: "Mayer",
    formats: ["mayer-may"],
    defaults: {
      stockType: "sheet",
      cutType: "beam",
      cutPreference: "l",
      stackHeight: 100,
      bladeWidth: 4,
      options: {
        stockSelection: "efficiency",
        stackingMode: "identical",
        minSpacing: 0,
        minSpacingDimension: { dimension: 0, minSpacing: 0 }
      }
    },
    constraints: {
      supportsNestedColumnSubdivision: !1,
      supportsHeadCuts: !1,
      // MA310/MA320/MA330 records carry no explicit gap — only the saw's
      // runtime blade kerf separates pieces. Reject layouts with intentional
      // `partGap` / `stripGap` > 0 at the matcher stage.
      maxStripGap: 0,
      maxPartGap: 0,
      // PC7000-class bed envelope (approximate). The real PC7000 GUI rejects
      // stock larger than the machine bed; the structural mayer-parser oracle
      // can't (it has no machine config), so model the limit here as the
      // single source of truth. Refine from the Erler machine-config decompile
      // if the bed-capacity port lands — see
      // docs/post-processors/oracle-wiring-backlog.md (Mayer Bug 2, option a).
      bedSize: { l: 4500, w: 2200 },
      // Offcut-keeping thresholds + offcut-as-part, from Ardis's Mayer PC5100
      // driver config (utilities/saw-reference/ardis-extract/specs/PC5100.json:
      // MinRestL=150, MinRestW=100, RestAsPart=1). Optimisation-quality hints
      // (not output validity); PC5100 vs PC7000 may differ — refine from the
      // real Mayer machine-config if it lands.
      minOffcut: { l: 150, w: 100 },
      restAsPart: !0,
      notes: "Mayer .may format limitation, not emitter limitation: MA310/MA320/MA330 records have no explicit X coordinate per piece — the parser infers X from cursor + column-width. So a strip with two pieces at different X within the same Y-band cannot be expressed. See server/api/machines/mayer/parser.ts."
    }
    // `guillotine.allowHeadCuts: false` is derived from `supportsHeadCuts: false`.
  },
  "homag-magicut": {
    id: "homag-magicut",
    name: "MagiCut (CPOUT)",
    vendor: "Homag",
    formats: ["homag-cpout"],
    defaults: {
      stockType: "sheet",
      cutType: "beam",
      cutPreference: "l",
      stackHeight: 100,
      bladeWidth: 4,
      options: {
        stockSelection: "efficiency",
        stackingMode: "identical",
        minSpacing: 0,
        minSpacingDimension: { dimension: 0, minSpacing: 0 }
      }
    }
    // CPOUT carries cut sequences, not piece (x, y); no geometric
    // emitter constraints to surface yet. The
    // `utilities/saw-testing/homag-cpout-validator.ts` already enforces
    // schema integrity per homag-cpout/schema.ts.
  },
  "scm-pratika": {
    id: "scm-pratika",
    name: "SCM (Pratika)",
    vendor: "SCM",
    // Reuses the Biesse XML emitter — Optimik 4 ships an SCM XML CNC
    // template that mirrors Optiplanner field layout. Once we have an
    // SCM-specific emitter (.001/.xprg/.ptx variants in Optimik's CNC
    // dir), update this entry and add the format tag.
    formats: ["biesse-xml"],
    defaults: {
      stockType: "sheet",
      cutType: "beam",
      cutPreference: "l",
      stackHeight: 100,
      bladeWidth: 4.8,
      options: {
        stockSelection: "efficiency",
        stackingMode: "identical",
        minSpacing: 0,
        minSpacingDimension: { dimension: 0, minSpacing: 0 }
      }
    },
    constraints: {
      // Inherits the Biesse-emitter limitation until we have an
      // SCM-specific emitter.
      supportsNestedColumnSubdivision: !1,
      notes: "Currently routed through the Biesse-XML emitter pending an SCM-specific format."
    }
  },
  "selco-beam": {
    id: "selco-beam",
    name: "Biesse Selco (Beam)",
    vendor: "Biesse",
    formats: ["biesse-xml"],
    defaults: {
      stockType: "sheet",
      cutType: "beam",
      cutPreference: "l",
      stackHeight: 200,
      // Selco's pusher generally lifts more
      bladeWidth: 4.8,
      options: {
        stockSelection: "efficiency",
        stackingMode: "identical",
        minSpacing: 0,
        minSpacingDimension: { dimension: 0, minSpacing: 0 }
      }
    },
    constraints: {
      supportsNestedColumnSubdivision: !1,
      supportsHeadCuts: !1,
      maxPiecesPerStrip: 50,
      // typical industrial limit; refine per Selco model
      notes: "Same Biesse-XML emitter as Optiplanner; differs only in defaults."
    }
    // `guillotine.allowHeadCuts: false` is derived from `supportsHeadCuts: false`.
  },
  jingwei: {
    id: "jingwei",
    name: "Jingwei (CNC XML)",
    vendor: "Jingwei",
    // Continuous-roll contour cutter, not a panel saw. Without this it
    // inherits family:'panel' (the SawProfile default) and the saw-side
    // algorithm-class derivation misclassifies it.
    family: "roll",
    formats: ["jingwei-xml"],
    defaults: {
      // Continuous-roll machine — `roll` aligns with `family: 'roll'`
      // above. Matched against the spec's stockType tag in
      // `matchesSaw` (peer to the cutType axis); a sheet-source spec
      // against jingwei now fast-rejects on the stockType axis.
      stockType: "roll",
      cutType: "guillotine",
      cutPreference: "w",
      stackHeight: 1,
      bladeWidth: 4,
      options: {
        stockSelection: "efficiency",
        stackingMode: "none",
        minSpacing: 0,
        minSpacingDimension: { dimension: 0, minSpacing: 0 }
      }
    },
    constraints: {
      notes: "Active customer use. Emitter has known overlap issues on multi-stock + clone-duplicate inputs (see post-processor-integration.test.ts JINGWEI_KNOWN_FAILING). Customer scenarios do not currently hit these."
    }
  },
  // ─── MagiCut-derived post-processors (2026-05-28) ───────────────────────
  // Each profile below registers the format in SAW_PROFILES so the
  // tracker's saw-profile-registered gate advances to passed. Constraints
  // are deliberately empty — emitters today handle single-part-type cases
  // cleanly and throw on the unsupported cases; there's no soft-quality
  // optimisation knob to declare yet. Add specific saw models (CADmatic
  // 4/5, Schelling Commander 4, SCM Pratika, Giben G-Drive) to
  // testedModels[] when end-to-end validation lands per model.
  "homag-cadmatic": {
    id: "homag-cadmatic",
    name: "Homag CADmatic",
    vendor: "Homag",
    formats: ["homag-cadmatic"],
    defaults: {
      stockType: "sheet",
      cutType: "beam",
      cutPreference: "l",
      stackHeight: 100,
      bladeWidth: 4,
      options: {
        stockSelection: "efficiency",
        stackingMode: "identical",
        minSpacing: 0,
        minSpacingDimension: { dimension: 0, minSpacing: 0 }
      }
    },
    constraints: {
      // PTN3 encoder is flat (Case A: single-type; Case B: multi-type same-width).
      // Case C (multi-type mixed widths) throws; nested subdivisions can't be
      // expressed faithfully. Gate at the matcher so phase-3 deep nests don't
      // reach emit and silently collapse / throw — see Item 2 of
      // docs/post-processors/corpus-review-rungs-handoff.md and the in-flight
      // docs/post-processors/cadmatic-case-c-samples-handoff.md.
      supportsNestedColumnSubdivision: !1,
      // PTN3 carries no explicit gap field — only the implicit blade kerf
      // between adjacent pieces. Layouts with intentional `partGap` or
      // `stripGap` > 0 can't round-trip through the emitter, so reject early.
      maxStripGap: 0,
      maxPartGap: 0,
      notes: ".saw file consumed by CADmatic 3/4/5 controllers. PTN3 emitter handles single-part-type and same-width multi-type; mixed-width multi-type and the `!` modifier throw with clear reasons until grammar is fully reversed. CHK1 algorithm shipped 2026-05-28."
    }
  },
  "scm-link": {
    id: "scm-link",
    name: "SCM Link (.900)",
    vendor: "SCM",
    formats: ["scm-link"],
    defaults: {
      stockType: "sheet",
      cutType: "beam",
      cutPreference: "l",
      stackHeight: 100,
      bladeWidth: 4,
      options: {
        stockSelection: "efficiency",
        stackingMode: "identical",
        minSpacing: 0,
        minSpacingDimension: { dimension: 0, minSpacing: 0 }
      }
    },
    constraints: {
      notes: ".900 SCM saw-link format. Multi-part-type emits empty cut section (matches MagiCut reference behaviour). Real-saw acceptance of the minimal form is unverified. Ardis reference (utilities/saw-reference/ardis-extract): SCMCST driver = angular-axis config (TrimHigherLevels=0, Par/AngleAxis offsets) — machine setup, not cut-list content; sister-brand Gabbiani.MCH = kerf 4.4mm, max_cut_levels 4 (cross-attributed to the SCM group, NOT enforced — verify against a real SCM .900 before adopting)."
    }
  },
  "schelling-commander-4": {
    id: "schelling-commander-4",
    name: "Schelling Commander 4",
    vendor: "Schelling",
    formats: ["schelling-commander-4"],
    defaults: {
      stockType: "sheet",
      cutType: "beam",
      cutPreference: "l",
      stackHeight: 100,
      bladeWidth: 4,
      options: {
        stockSelection: "efficiency",
        stackingMode: "identical",
        minSpacing: 0,
        minSpacingDimension: { dimension: 0, minSpacing: 0 }
      }
    },
    constraints: {
      maxRestLevel: 9,
      notes: ".nc file for Commander 4 MCS panel saws. Single-part-type cases fully emittable; multi-part-type throws until K01 trim-total computation is reversed. Ardis SCHELLNG driver (utilities/saw-reference/ardis-extract) reference: MaxLayInFile=999 (enforced in validateSchellingCommander4Inputs), MaxRestLevel=9, Books=2; SchellA trims Rip 200/200, Cross 200/50 mm — Ardis-dialect defaults, verify vs a real .nc sample before enforcing as trims."
    }
  },
  "schelling-commander-2": {
    id: "schelling-commander-2",
    name: "Schelling Commander 2",
    vendor: "Schelling",
    formats: ["schelling-commander-2"],
    defaults: {
      stockType: "sheet",
      cutType: "beam",
      cutPreference: "l",
      stackHeight: 100,
      bladeWidth: 4,
      options: {
        stockSelection: "efficiency",
        stackingMode: "identical",
        minSpacing: 0,
        minSpacingDimension: { dimension: 0, minSpacing: 0 }
      }
    },
    constraints: {
      maxRestLevel: 9,
      notes: ".002 file for older Commander 2 panel saws. Hyphen-prefixed ASCII records. Multi-part-type throws (extra -C2,4 trim-total record). Ardis SCHELLNG driver (utilities/saw-reference/ardis-extract) reference: MaxLayInFile=999 (enforced in validateSchellingCommander2Inputs), MaxRestLevel=9, Books=2; SchellAT trims Rip 120/50 mm — Ardis-dialect defaults, verify vs a real .002 sample before enforcing as trims."
    }
  },
  "giben-link": {
    id: "giben-link",
    name: "Giben (.ac)",
    vendor: "Giben",
    formats: ["giben-link"],
    defaults: {
      stockType: "sheet",
      cutType: "beam",
      cutPreference: "l",
      stackHeight: 100,
      bladeWidth: 4,
      options: {
        stockSelection: "efficiency",
        stackingMode: "identical",
        minSpacing: 0,
        minSpacingDimension: { dimension: 0, minSpacing: 0 }
      }
    },
    constraints: {
      maxRestLevel: 2,
      notes: ".ac material-prefixed positional records. Multi-part-type emits per-part 012+013 pairs (idx = part-type id); byte-exact vs MagiCut samples — see docs/post-processors/ardis-giben.md. Constraints from Ardis giben_headcut.MCH (utilities/saw-reference/ardis-extract): MAXNIV=2 guillotine levels (→ maxRestLevel), kerf 4.8mm (SNDD1L), 80 strokes/hr — verify vs a real Giben G-Drive before enforcing."
    }
  },
  striebig: {
    id: "striebig",
    name: "Striebig (vertical panel saw / IST PIOS)",
    vendor: "Striebig",
    formats: ["striebig-csv"],
    defaults: {
      stockType: "sheet",
      // vertical panel saw — sheet stock
      cutType: "beam",
      bladeWidth: 4.4
    },
    constraints: {
      notes: 'Vertical panel saw (IST PIOS "ZuschnittOpti"). Imports the IST CSV (parts + material). Machine envelope: cut length <=9800mm, board height <=2100mm, miter <=47deg, depth-of-cut steps 6/12/35/65/95mm. Vertical-saw topology (min strip width ~150-208mm, aspect ratio / tip-over, first-cut-from-top) is NOT yet modelled in SawAlgorithmConstraints — keep emitted layouts conservative until it is.'
    }
  }
};
function sr(e) {
  const t = wn[e];
  if (!t)
    throw new Error(`Unknown saw profile '${e}'. Known: ${Object.keys(wn).join(", ")}`);
  return t;
}
function or(e, t) {
  if (!e || !t)
    return null;
  const n = e.trim().toLowerCase(), i = t.trim().toLowerCase();
  if (!n || !i)
    return null;
  for (const r of Object.values(wn)) {
    if (r.vendor.toLowerCase() !== n)
      continue;
    const s = r.id.toLowerCase();
    if (s === i || s === `${n}-${i}` || s.endsWith(`-${i}`) || r.testedModels?.some((o) => o.code.toLowerCase() === i || o.name.toLowerCase() === i))
      return r;
  }
  return null;
}
const rr = {
  // Biesse Str emitter — `server/api/machines/biesse/emitter.ts`
  // (`generatePatternString`). NESTED COLUMN SUBDIVISION is emitted now:
  // `generatePatternString` became a recursive guillotine-tree emit (X-Y-X-Y-…
  // arbitrary depth) and the emit→parse round-trip is exact (ROUNDTRIP-HANDOFF.md
  // ✅ RESOLVED 2026-06-02; LJ-4929d190 223/223 parts + positions, emitter.test
  // invariant #11) — so `nestedColumnSubdivision` is no longer declared a limitation.
  //
  // HEAD CUTS: H(X) emitted; enabled. The big-job regression was head cuts CHAINING
  // down the far-side unbounded — createSegment RESETS phase to 0 on head-cut parents
  // (guillotine.ts ~2046), so the phase never grows and no maxPhase cap ever fired →
  // runaway recursion / stack-overflow risk on big jobs. Fixed by restricting head
  // cuts to PHASE 0 only (isHeadCutCandidate): one board-level split, body guillotined
  // normally, matching the reference corpus (788 single H(X) per pattern).
  "biesse-xml": {}
};
function ar(e) {
  let t;
  for (const n of e.formats ?? []) {
    const i = rr[n];
    if (i) {
      t ??= {};
      for (const r of Object.keys(i))
        i[r] === !1 && (t[r] = !1);
    }
  }
  return t;
}
function ms(e) {
  const t = ar(e);
  if (!t)
    return e.constraints;
  const n = { ...e.constraints ?? {} };
  return t.headCuts === !1 && (n.supportsHeadCuts = !1), t.nestedColumnSubdivision === !1 && (n.supportsNestedColumnSubdivision = !1), t.stripGap === !1 && (n.maxStripGap = Math.min(n.maxStripGap ?? 1 / 0, 0)), t.partGap === !1 && (n.maxPartGap = Math.min(n.maxPartGap ?? 1 / 0, 0)), n;
}
function lr(e, t, n) {
  const i = ms(n);
  if (!i)
    return 0;
  let r = 0;
  return i.supportsNestedColumnSubdivision === !1 && (r += cr(e, t)), r;
}
function cr(e, t) {
  let r = 0;
  const s = e.x + e.l, o = e.y + e.w;
  for (const a of t.placed) {
    const c = a.x + a.l, l = a.y + a.w, u = e.y < l - 1 && a.y < o - 1, h = e.x < c - 1 && a.x < s - 1, f = Math.abs(e.x - a.x) <= 1;
    u && h && !f && (r += 50);
  }
  return r;
}
function On(e, t) {
  if (!t)
    return e;
  if (e === null || typeof e != "object" || Array.isArray(e))
    return t ?? e;
  const n = Array.isArray(e) ? [...e] : { ...e };
  for (const i of Object.keys(t)) {
    const r = t[i], s = e[i];
    r !== void 0 && (r !== null && typeof r == "object" && !Array.isArray(r) && s && typeof s == "object" && !Array.isArray(s) ? n[i] = On(s, r) : n[i] = r);
  }
  return n;
}
function ur(e, t) {
  return t.preferences ? On(e, t.preferences) : e;
}
function fr(e, t) {
  const n = hr(t);
  return n ? On(e, n) : e;
}
function hr(e) {
  const t = ms(e);
  if (!t)
    return;
  const n = {}, i = {};
  if (t.supportsHeadCuts === !1 && (i.allowHeadCuts = !1, n.experimental = { ...n.experimental ?? {}, headCutsRetry: !1 }), t.supportsNestedColumnSubdivision === !1 && (i.stripShapes = { ...i.stripShapes ?? {}, allocation: !1 }, i.allowHeadCuts = !1, n.experimental = { ...n.experimental ?? {}, headCutsRetry: !1 }), typeof t.maxPiecesPerStrip == "number" && (i.maxPiecesPerStrip = t.maxPiecesPerStrip), t.supportsSkippingCuts === !1 && (i.allowSkippingCuts = !1), t.supportsMixedRotationInStrip === !1 && (i.allowMixedRotationInStrip = !1), typeof t.maxCutsPerPattern == "number" && (i.maxCutsPerPattern = t.maxCutsPerPattern), t.supportedCutPreferences && t.supportedCutPreferences.length > 0) {
    const r = t.supportedCutPreferences, s = e.preferences?.successMetric;
    s !== void 0 && !r.includes(s) && (n.successMetric = r[0]);
  }
  return Object.keys(i).length && (n.guillotine = i), Object.keys(n).length ? n : void 0;
}
const dr = oo;
let ys;
ys = dr;
const pr = new Ko();
let Ss = ys;
function nt() {
  return pr.getStore() ?? Ss;
}
ro(nt);
const ye = new Proxy({}, {
  get(e, t, n) {
    return nt()?.[t];
  },
  has(e, t) {
    return t in nt();
  },
  ownKeys() {
    return Object.keys(nt());
  },
  getOwnPropertyDescriptor(e, t) {
    const n = nt();
    if (t in n)
      return { value: n[t], writable: !0, enumerable: !0, configurable: !0 };
  }
});
nr(Ss.enableLogging !== !1);
function gr() {
  if (ye.guillotine.secondPass && !ye.guillotine.strips.rearrange)
    throw new Error("config.guillotine.secondPass requires config.guillotine.strips.rearrange to be enabled");
  if (ye.captureProfile && ye.runTests)
    throw new Error("config.captureProfile and config.runTests should not be both enabled");
  for (const [e, t] of Object.entries(no)) {
    const n = yn(ye, e);
    if (typeof n == "number") {
      if (t.min !== void 0 && n < t.min)
        throw new Error(`config.${e}=${n} below min ${t.min}`);
      if (t.max !== void 0 && n > t.max)
        throw new Error(`config.${e}=${n} above max ${t.max}`);
      if (t.integer && !Number.isInteger(n))
        throw new Error(`config.${e}=${n} must be an integer`);
    }
  }
  for (const [e, t] of Object.entries(io)) {
    const n = yn(ye, e);
    if (typeof n == "string" && !t.includes(n))
      throw new Error(`config.${e}="${n}" not in [${t.join(", ")}]`);
  }
}
gr();
const gi = /* @__PURE__ */ new Map();
function mr(e, t) {
  if (t.length === 0)
    return;
  const n = e || "unknown", i = Date.now(), r = gi.get(n) ?? 0;
  if (i - r < 6e4)
    return;
  gi.set(n, i);
  const s = t.map((o) => `${o.path} (${o.kind}: ${o.detail})`).join(", ");
  console.warn(`[CONFIG] Reverting ${t.length} broken override(s) for ${n} → defaults: ${s}`);
}
function yr(e, t = null) {
  const n = Sr(t);
  let i = n ? mi(ye, n, "preferences") : ye;
  if (e) {
    const r = xr(e, t);
    if (r) {
      const { sanitised: s, dropped: o } = so(r, i);
      mr(e?.username, o), i = Ho({}, i, s), Object.keys(s).length > 0 && console.log(`[CONFIG] custom config applied for ${e?.username}`);
    }
  }
  return n && (i = mi(i, n, "constraints")), i;
}
function mi(e, t, n) {
  try {
    const i = n === "preferences" ? ur(e, t) : fr(e, t);
    return i !== e && console.log(`[CONFIG] saw profile '${t.id}' ${n} applied`), i;
  } catch (i) {
    return console.warn(`[CONFIG] saw-profile ${n} failed: ${i?.message ?? i}`), e;
  }
}
function Sr(e) {
  const t = e?.sawProfileId;
  if (t)
    try {
      return sr(t);
    } catch (i) {
      return console.warn(`[CONFIG] sawProfileId='${t}' lookup failed: ${i?.message ?? i}`), null;
    }
  const n = e?.saw;
  return or(n?.vendor, n?.model);
}
function xr(e, t = null) {
  if (!e || !e?.config)
    return null;
  switch (e.id) {
    // Glassense Kolu — for jobs ≤ 80 shapes, three perf-heavy knobs are reset
    // to the system defaults (their stored overrides hurt small jobs).
    // Why this lives here, not in defaultConfig: it depends on per-job shape
    // count, which only the runtime knows.
    case "662a2f8ad28745b63665e68a": {
      if (!t)
        return e.config;
      const n = "shapeList" in t ? t.shapeList : t.inputShapes;
      if ((n ? n.reduce((s, o) => s + (o.q || 0), 0) : 0) > 80)
        return e.config;
      const r = JSON.parse(JSON.stringify(e.config));
      return on(r, "groups.guillotine.strips", ye.groups.guillotine.strips), on(r, "sample.guillotine", ye.sample.guillotine), on(r, "guillotine.stripShapes.iterations", ye.guillotine.stripShapes.iterations), r;
    }
  }
  return e.config;
}
function yi(e, t, n) {
  return yn(e, t, n);
}
const wr = xe({
  // Context - using z.any() for complex external types
  job: oe().nullable().default(null).describe("BullMQ Job instance"),
  // Type: Job<any, any, string> | null
  socketId: U().nullable().default(null).describe("Socket.io connection ID"),
  user: oe().nullable().default(null).describe("User instance"),
  // Type: IUser | null
  config: No().describe("Configuration object"),
  // runtime-permissive (no validation), but typed as Config so config-key renames are tsc-checkable
  api: re().nullable().default(null).describe("API mode flag"),
  app: re().nullable().default(null).describe("App mode flag"),
  // Core data lists
  saw: Dt("Saw").describe("Saw configuration"),
  stockList: ke("Stock").default([]).describe("List of stock materials"),
  shapeList: en(["Shape", "Group"]).default([]).describe("List of shapes and groups"),
  groupList: ke("Group").default([]).describe("Temporary groups (strip/segment) created during optimization"),
  userGroups: ke("Group").default([]).describe("User-defined groups"),
  // Derived lists
  uniqueStock: ke("Stock").default([]).describe("Unique stock by parent"),
  uniqueShapes: en(["Shape", "Group"]).default([]).describe("Unique shapes without duplicates"),
  unusableShapes: en(["Shape", "Group"]).default([]).describe("Shapes that cannot be placed"),
  // Stock type
  stockType: ho,
  // Results storage
  cutList: ke("Cut").default([]).describe("List of cuts to make"),
  segmentList: ke("Segment").default([]).describe("List of segments"),
  offcuts: ke("Offcut").default([]).describe("Offcut pieces"),
  placementPositions: ke("Point").default([]).describe("Placement positions"),
  // Configuration
  useInventory: re().default(!1).describe("Use inventory system"),
  successMetric: U().default(ye.successMetric).describe("Metric for optimization success"),
  enableEvo: re().default(!0).describe("Enable evolutionary algorithm"),
  weighting: tt(U(), oe()).default({}).describe("Weighting configuration"),
  // Results
  bestResult: oe().nullable().default(null).describe("Best optimization result"),
  bestPartialResult: oe().nullable().default(null).describe("Best partial result"),
  // Counters
  counters: xe({
    placement: Ft().default(0),
    group: Ft().default(0)
  }).default({ placement: 0, group: 0 }).describe("Operation counters"),
  // Flags
  runningEvo: re().default(!1).describe("Currently running evolution"),
  evolutionVisData: Ce(tt(U(), Yo())).default([]).describe("Evolution visualization data"),
  final: re().default(!1).describe("Final run flag"),
  // Spacing flags
  hasMinSpacing: re().default(!1).describe("Has minimum spacing requirement"),
  // Resolved target-saw profile. Set by go() from `RuntimeCalculationData.sawProfileId`
  // when supplied; consumed by `scoreShapePosition` to subtract a Layer-2
  // safety penalty from placements that would violate the saw's
  // `SawAlgorithmConstraints`. Typed as `any` here so the saws/ workspace
  // doesn't pull into this schema file — the actual `SawProfile` type
  // lives in `saws/types.ts`.
  sawProfile: oe().optional().describe("Resolved SawProfile for Layer-2 saw-safety scoring")
}), br = {}, Ir = Fo(["decimal", "fraction"]);
xe({
  job: oe().optional(),
  // Type: Job from BullMQ
  // Input data (will be converted to runtime classes in worker)
  // Extend with autoId/__entityType so they survive Zod validation for worker reconstruction
  inputSaw: uo.extend({ autoId: U().optional(), __entityType: U().optional() }),
  inputShapes: Ce(co.extend({ autoId: U().optional(), __entityType: U().optional() })),
  inputStock: Ce(lo.extend({ autoId: U().optional(), __entityType: U().optional() })),
  inputUserGroups: Ce(ao.extend({ autoId: U().optional(), __entityType: U().optional() })).optional(),
  // Number format for conversion
  numberFormat: Ir.optional(),
  // Algorithm configuration
  enableEvo: re().default(!0),
  weighting: oe().optional(),
  successMetric: U().optional(),
  useInventory: re().default(!1),
  // Context
  socketId: U().optional(),
  user: oe().optional(),
  // IUser type
  // Application flags
  widget: re().optional(),
  api: re().optional(),
  app: re().optional(),
  domain: U().optional(),
  // Extras options (centralized configuration)
  extrasOptions: xe({
    banding: xe({
      options: xe({
        sides: tt(U(), Ce(U())).optional()
      }).optional()
    }).optional(),
    finish: xe({
      options: xe({
        faces: tt(U(), Ce(U())).optional()
      }).optional()
    }).optional(),
    planing: xe({
      options: xe({
        sides: tt(U(), Ce(U())).optional(),
        faces: tt(U(), Ce(U())).optional()
      }).optional()
    }).optional()
  }).optional(),
  // API specific
  config: oe().optional(),
  v: Ft().optional(),
  // API version
  webhook: U().optional(),
  //source
  sourceVersion: U().nullish(),
  source: U().optional()
});
xe({
  job: oe().optional(),
  // Type: Job from BullMQ
  saw: oe(),
  // Runtime Saw instance
  shapeList: Ce(oe()),
  // Runtime Shape instances
  stockList: Ce(oe()),
  // Runtime Stock instances
  userGroups: Ce(oe()).optional(),
  // Runtime Group instances
  enableEvo: re(),
  weighting: oe().optional(),
  successMetric: U().optional(),
  useInventory: re(),
  socketId: U().optional(),
  user: oe().optional(),
  widget: re().optional(),
  api: re().optional(),
  app: re().optional(),
  domain: U().optional(),
  config: oe().optional(),
  v: Ft().optional(),
  webhook: U().optional(),
  labels: xe({
    customer: U().optional()
  }).optional(),
  // Extras display-value resolution maps (cutlist CSV; internal-only).
  extrasResolution: fo.optional(),
  /**
   * Optional target-saw profile id. When supplied, `go()` runs the produced
   * layout through `validateBiesseLayoutAgainstSaw` (or the equivalent for
   * Mayer/CPOUT/Jingwei once those exist) and surfaces any violations on
   * `optimisation.sawViolations`. Today this is REPORT-ONLY — the
   * algorithm itself is still saw-agnostic. A future iteration will
   * extend scoring to penalise placements that violate saw constraints.
   * See `saws/profiles.ts` for the catalogue.
   */
  sawProfileId: U().optional()
});
class Re extends ln {
  // Required: Define schema and computed properties for SchemaClass
  static schema = jo;
  static computedProperties = Zo;
  // Note: children is defined in the schema as zRefArray<Segment>
  // No need for getter/setter or backing field - SchemaClass handles it automatically
  constructor(t = {}) {
    const n = { ...t };
    if (n.preventAutoRotation = !0, n.skipValidation = !0, n.parent && n.autoId && n.parent.autoId === n.autoId && delete n.autoId, n.children || (n.children = []), Array.isArray(n.children) && n.autoId && (n.children = n.children.filter((i) => i && i.autoId !== n.autoId)), super(n), this.parent && this.autoId === this.parent.autoId)
      throw new Error(`Segment cannot have same autoId as parent: ${this.autoId}`);
    if (this.parent) {
      if (this.type === "firstShape")
        return;
      if (Array.isArray(this.parent.children) || (this.parent.children = []), this.parent.autoId === this.autoId) {
        this.parent = null;
        return;
      }
      if (!this.parent.children.some((r) => r.autoId === this.autoId)) {
        if (this.parent === this) {
          this.parent = null;
          return;
        }
        const r = [...this.parent.children, this];
        this.parent.children = r;
      }
    }
  }
  /**
   * Get entity type
   */
  getType() {
    return ee.Segment;
  }
  /**
   * Use automatic enumeration for serialization
   * All schema-defined fields (including children) are serialized automatically
   */
  static serializationProperties = [];
  /**
   * Fields to exclude from serialization
   * This is cleaner than maintaining a long inclusion list
   */
  static serializationExcludedProperties = [
    "_children"
    // Private backing field for children
    // Note: parent, children are NOT excluded here
    // They are handled specially in serializeValue() to convert to references
  ];
  // Compression exclusions now defined in schema using .behavior()
  /**
   * Get compression-specific overrides
   * Handle parent exclusion in compressed serialization
   */
  getCompressionOverrides() {
    return {
      parent: null
      // Always exclude parent in compression to avoid circular refs
    };
  }
  reset(t = []) {
    if (this.stock && (this.stock.used = !1), this.children && this.children.length > 0)
      for (const n of this.children)
        n && n.parent === this && (n.parent = null);
    this.shapes = t, this.children = [], this.parent = null, this.cuts = [], this.phase = null;
  }
  /**
   * Clear all children and their parent references
   */
  clearChildren() {
    if (this.children && this.children.length > 0) {
      for (const t of this.children)
        t && t.parent === this && (t.parent = null);
      this.children = [];
    }
  }
  /**
   * Add segment to stock (when used as an offcut)
   * Similar to Placeable.addToStock but for segments
   */
  addToStock(t) {
    this.stock = t;
  }
  /**
   * Check if this segment is a descendant of another segment
   */
  isDescendantOf(t) {
    let n = this.parent;
    const i = /* @__PURE__ */ new Set();
    for (; n; ) {
      if (n.autoId === t.autoId)
        return !0;
      if (i.has(n.autoId))
        return console.warn(`[INFINITE LOOP] Parent chain has a loop at segment ${n.autoId}`), !1;
      i.add(n.autoId), n = n.parent;
    }
    return !1;
  }
  /**
   * Add child segment (mainly for changing parents after creation)
   * Note: Most parent-child relationships are now established automatically in the constructor
   */
  addChild(t) {
    if (this.autoId === t.autoId)
      throw console.error(`[SELF-REFERENCE ATTEMPT] Trying to add segment ${this.autoId} as its own child!`), console.error(new Error().stack), new Error(`[SELF-REFERENCE] Cannot add segment ${this.autoId} as its own child`);
    if (this === t)
      throw console.error(`[SELF-REFERENCE OBJECT] Same object reference! Segment ${this.autoId}`), console.error(new Error().stack), new Error("[SELF-REFERENCE] Cannot add segment to itself");
    if (!(t.parent && t.parent.autoId === this.autoId)) {
      if (this.isDescendantOf(t))
        throw new Error(`Circular reference: parent ${this.autoId} would become a descendant of child ${t.autoId}`);
      if (Array.isArray(this.children) || (this.children = []), t.parent && t.parent !== this) {
        const n = t.parent;
        if (Array.isArray(n.children)) {
          const i = n.children.indexOf(t);
          i !== -1 && n.children.splice(i, 1);
        }
        Oe() && console.log(`[PARENT CHANGE] Moving ${t.autoId} from parent ${n.autoId} to ${this.autoId}`);
      }
      this.children.some((n) => n.autoId === t.autoId) || (this.children = [...this.children, t], t.parent = this);
    }
  }
  /**
   * Remove child segment
   */
  removeChild(t) {
    const n = this.children;
    if (Array.isArray(n)) {
      const i = n.indexOf(t);
      i !== -1 && (n.splice(i, 1), t.parent = null);
    }
  }
}
class Si extends po {
  // Properties are dynamically created from schema via SchemaClass
  // Static schema reference for automatic updates
  static schema = Uo;
  static computedProperties = _o;
  /**
   * Get entity type
   */
  getType() {
    return "imageUpload";
  }
  constructor(t = {}) {
    super(t), this.validate();
  }
  /**
   * Validate image upload configuration
   */
  validate(t) {
    const n = [];
    if (this.images && this.images.length > this.maxImages && n.push(new dt({
      item: t,
      message: `Too many images: ${this.images.length} exceeds maximum of ${this.maxImages}`,
      type: "error"
    })), this.images)
      for (let i = 0; i < this.images.length; i++) {
        const r = this.images[i];
        if (r.url || n.push(new dt({
          message: `Image ${i + 1} is missing URL`,
          type: "error"
        })), r.mimeType && !this.allowedTypes.includes(r.mimeType) && n.push(new dt({
          message: `Image ${i + 1} has unsupported type: ${r.mimeType}`,
          type: "warning"
        })), r.size && r.size > this.maxSizeBytes) {
          const s = (r.size / 1048576).toFixed(2), o = (this.maxSizeBytes / 1048576).toFixed(2);
          n.push(new dt({
            message: `Image ${i + 1} is too large: ${s}MB exceeds ${o}MB`,
            type: "warning"
          }));
        }
      }
    return this.issues = n, n;
  }
  /**
   * Calculate storage cost
   */
  getCost(t) {
    const i = (this.images || []).reduce((s, o) => s + (o.size || 0), 0) / 1048576;
    return Math.ceil(i * 0.01 * 100) / 100;
  }
  /**
   * Get description
   */
  getDescription() {
    if (!this.images || this.images.length === 0)
      return "No images uploaded";
    const t = this.images ? this.images.length : 0, i = ((this.images || []).reduce((r, s) => r + (s.size || 0), 0) / 1048576).toFixed(2);
    return `${t} image${t !== 1 ? "s" : ""} (${i}MB)`;
  }
  /**
   * Check if has values
   */
  hasValues() {
    return !!(this.images && this.images.length > 0);
  }
  /**
   * Clear all images
   */
  clear() {
    this.images = [], this.description = void 0, this.tags = [];
  }
  /**
   * Check if image upload is applicable to shape
   * Image upload can be applied to any shape
   */
  isApplicable(t) {
    return this.enabled;
  }
  /**
   * Clone
   */
  // clone() method removed - using base class implementation from AutoSerializable
  /**
   * Add an image
   */
  addImage(t) {
    return this.images || (this.images = []), this.images.length >= (this.maxImages || 5) ? !1 : (this.images.push(t), !0);
  }
  /**
   * Remove an image by URL
   */
  removeImage(t) {
    if (!this.images)
      return !1;
    const n = this.images.findIndex((i) => i.url === t);
    return n !== -1 ? (this.images.splice(n, 1), !0) : !1;
  }
  /**
   * Get image by URL
   */
  getImage(t) {
    return this.images ? this.images.find((n) => n.url === t) : void 0;
  }
  /**
   * Get total size in bytes
   */
  getTotalSize() {
    return this.images.reduce((t, n) => t + (n.size || 0), 0);
  }
  /**
   * Get images by tag
   */
  getImagesByTag(t) {
    return this.tags && this.tags.includes(t) ? this.images || [] : [];
  }
  /**
   * Add a tag
   */
  addTag(t) {
    this.tags || (this.tags = []), this.tags.includes(t) || this.tags.push(t);
  }
  /**
   * Remove a tag
   */
  removeTag(t) {
    if (!this.tags)
      return;
    const n = this.tags.indexOf(t);
    n !== -1 && this.tags.splice(n, 1);
  }
}
class Ht extends cn {
  static schema = xn;
  static computedProperties = os;
  static defaults = xn.parse({});
  constructor(t = {}) {
    super(t);
  }
  getType() {
    return ee.NestingShape;
  }
  /**
   * Returns the polygon used as the rotation/normalisation REFERENCE during placement.
   * When `placementOutline` is set (DP-simplified or convex hull), the placement algorithm
   * rotated around its centroid and normalised against its bbox — rendering must do the same
   * so final positions agree. When absent, the outline itself is the reference.
   */
  getTransformReference() {
    return this.placementOutline && this.placementOutline.length >= 3 ? this.placementOutline : this.outline;
  }
  /** Arithmetic centroid of a polygon (matches geometry.ts rotatePolygon pivot). */
  centroidOf(t) {
    let n = 0, i = 0;
    for (const r of t)
      n += r.x, i += r.y;
    return n /= t.length, i /= t.length, { cx: n, cy: i };
  }
  /** Min x/y of a polygon — used as normalisation offset after rotation. */
  minOf(t) {
    let n = 1 / 0, i = 1 / 0;
    for (const r of t)
      r.x < n && (n = r.x), r.y < i && (i = r.y);
    return { minX: n, minY: i };
  }
  /** Rotate a polygon around an arbitrary pivot. */
  rotateAround(t, n, i) {
    if (i === 0)
      return t;
    const r = Math.cos(i), s = Math.sin(i);
    return t.map((o) => {
      const a = o.x - n.cx, c = o.y - n.cy;
      return {
        x: r * a - s * c + n.cx,
        y: s * a + r * c + n.cy
      };
    });
  }
  /**
   * Get the rotated outline vertices, applying nestingRotation around the arithmetic centroid
   * of the placement reference (so rendering agrees with placement when a placementOutline is used).
   */
  getRotatedOutline() {
    if (!this.outline || this.outline.length < 3)
      return [];
    if (this.nestingRotation === 0)
      return this.outline;
    const t = this.getTransformReference(), n = this.centroidOf(t);
    return this.rotateAround(this.outline, n, this.nestingRotation);
  }
  /**
   * Get the rotated + normalized outline (bounding box starts at 0,0)
   * Matches the placement algorithm: rotate around reference centroid, normalise against
   * rotated-reference bbox (not against the outline's own rotated bbox).
   */
  getNormalizedRotatedOutline() {
    if (!this.outline || this.outline.length < 3)
      return [];
    const t = this.getTransformReference(), n = this.centroidOf(t), i = this.rotateAround(this.outline, n, this.nestingRotation), r = t === this.outline ? i : this.rotateAround(t, n, this.nestingRotation), { minX: s, minY: o } = this.minOf(r);
    return i.map((a) => ({
      x: a.x - s,
      y: a.y - o
    }));
  }
  /**
   * Get the translated outline vertices at the shape's current position on stock
   * Uses normalized rotation matching the placement algorithm
   */
  getPositionedOutline() {
    const t = this.getNormalizedRotatedOutline();
    return t.length ? t.map((n) => ({
      x: n.x + (this.x || 0),
      y: n.y + (this.y || 0)
    })) : [];
  }
  /**
   * Get the positioned outer boundary for cutting (bounding box for hollow shapes, outline for solid)
   * Uses the same rotation + normalization as getPositionedOutline()
   */
  getPositionedOuterBoundary() {
    if (!this.holes?.length)
      return this.getPositionedOutline();
    let t = 1 / 0, n = 1 / 0, i = -1 / 0, r = -1 / 0;
    for (const o of this.outline)
      o.x < t && (t = o.x), o.y < n && (n = o.y), o.x > i && (i = o.x), o.y > r && (r = o.y);
    const s = [
      { x: t, y: n },
      { x: i, y: n },
      { x: i, y: r },
      { x: t, y: r }
    ];
    return this.positionContour(s);
  }
  /**
   * Get the positioned hole contours for cutting
   * Each hole is rotated + normalized + translated consistently with the outline
   */
  getPositionedHoles() {
    return this.holes?.length ? this.holes.filter((t) => t.length >= 3).map((t) => {
      const n = t[0].x === t[t.length - 1].x && t[0].y === t[t.length - 1].y ? t.slice(0, -1) : t;
      return this.positionContour(n);
    }) : [];
  }
  /**
   * Position an arbitrary contour using the same transform as getPositionedOutline():
   * rotate around the placement reference's centroid, normalise using the reference's
   * rotated bbox, translate by (x, y).
   */
  positionContour(t) {
    if (!this.outline || this.outline.length < 3)
      return t;
    if (!this.nestingRotation || this.nestingRotation === 0)
      return t.map((c) => ({
        x: c.x + (this.x || 0),
        y: c.y + (this.y || 0)
      }));
    const n = this.getTransformReference(), i = this.centroidOf(n), r = this.rotateAround(t, i, this.nestingRotation), s = this.rotateAround(n, i, this.nestingRotation), { minX: o, minY: a } = this.minOf(s);
    return r.map((c) => ({
      x: c.x - o + (this.x || 0),
      y: c.y - a + (this.y || 0)
    }));
  }
  /**
   * Override createPerimeterCuts to generate polygon-outline cuts instead of bounding-box cuts
   * Each edge of the polygon outline becomes a separate Cut line segment
   */
  createPerimeterCuts(t = null) {
    if (t = t || this.stock, !t)
      throw new Error("stock is required to create a cut");
    const n = this.getPositionedOutline();
    if (n.length < 3)
      return [];
    const i = [], s = n[0].x === n[n.length - 1].x && n[0].y === n[n.length - 1].y ? n.length - 1 : n.length;
    for (let o = 0; o < s; o++) {
      const a = n[o], c = n[(o + 1) % n.length];
      i.push(new Xt({
        stock: ie(this.stock) ? this.stock : t,
        x1: a.x,
        y1: a.y,
        x2: c.x,
        y2: c.y
      }));
    }
    return i;
  }
  /**
   * Check if this shape's outline is identical to another nesting shape's outline
   * Used for NFP cache deduplication
   */
  isOutlineIdentical(t) {
    if (this.outline.length !== t.outline.length)
      return !1;
    for (let n = 0; n < this.outline.length; n++)
      if (this.outline[n].x !== t.outline[n].x || this.outline[n].y !== t.outline[n].y)
        return !1;
    return !0;
  }
}
function bn(e, t, n = "x") {
  if (!t)
    return !1;
  const i = n === "x" ? "l" : "w";
  return !!(D.greaterThanOrEqualTo(e[n], t[n]) && D.lessThanOrEqualTo(e[n] + e[i], t[n] + t[i]));
}
function ot(e, t, n = "x") {
  if (!t)
    return !1;
  const i = Ji(n);
  return !!(D.greaterThanOrEqualTo(e[n], t[n]) && D.lessThan(e[n], t[n] + t[i]));
}
function xs(e) {
  return {
    cutAxis: e === "l" ? "x" : "y",
    positionAxis: e === "l" ? "y" : "x",
    cutDimension: e,
    positionDimension: J(e)
  };
}
function Cr(e, t, n) {
  return e?.length ? e.filter((i) => i.added && D.equalTo(i[t], n)) : [];
}
function vr(e, t) {
  return e?.guillotineState?.myPhase === t;
}
function Pr(e, t) {
  e?.guillotineState && (e.guillotineState.myStripDirection = t);
}
function $r(e, t) {
  if (!e)
    return;
  let n = e;
  for (; n.parent; )
    n = n.parent, t();
}
function Tr(e, t) {
  return `${t}${e}`;
}
function kr({ segment: e, stock: t, cutDirection: n, cutAxis: i, positionAxis: r, positionDimension: s, position: o, allStockShapes: a, halfBladeWidth: c }) {
  if (t.cutType !== "beam" || !t.hasTrim || s === "w" && e.phase > 1)
    return;
  const l = Tr(o, n);
  if (!t.trim?.[l])
    return;
  const u = t.trimmed ? -c : t.trim[l] - c, h = t.trimmed ? -c : t.trim[l] - c;
  if (z([() => {
    A().toBe(h);
  }]), u !== h)
    return;
  const { cut: f } = _t({
    parentSegment: e,
    stock: t,
    cutDirection: n,
    cutAxis: i,
    positionAxis: r,
    position: u,
    allStockShapes: a,
    skipCollisionCheck: !0
  });
  f && (f.isTrim = !0, f.guillotineState.parentSegmentID = e.autoId, f.ptxData || (f.ptxData = {}), f.ptxData.function = e.phase, f.ptxData.isDummy = !1, f.dimension === "l" && (f.beamTrimL1 = !0), f.dimension === "w" && (f.beamTrimW1 = !0), f.dimension === "w" ? new Re({
    x: -t.trim.w1,
    y: e.y,
    // Start at strip's y position
    l: t.trim.w1,
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
  }) : f.dimension === "l" && new Re({
    x: 0,
    // Start at stock origin
    y: -t.trim.l1,
    l: t.l,
    // Use FULL stock width (not trimmed)
    w: t.trim.l1,
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
  }), n !== e.cutDirection && (f[i + 2] = t[n]), f.isTrim = !0, e.hasBeamTrim = !0);
}
function ws(e, t, n = null, i) {
  let r = null;
  const s = [];
  if (!e || !e.length)
    return {
      allShapesCut: !0,
      uncutShape: null,
      uncutShapeAutoIds: []
    };
  const o = e.every((a) => {
    if (!a.added || !a.stock || V(a) && a.group.inGroup && !i?.ignoreGroupMembership)
      return !0;
    const c = a.stock.halfBladeWidth;
    let l = null;
    n ? l = n.getSides() : l = a.stock.getSides();
    const u = Object.values(a.getSides()).every((h) => {
      const f = () => {
        switch (h.type) {
          case "top": {
            const S = a.y + a.w + c;
            return t.some((m) => m.dimension === "l" && D.equalTo(m.y1, S) && D.lessThanOrEqualTo(m.x1, a.x) && D.greaterThanOrEqualTo(m.x2, a.x + a.l));
          }
          case "bottom": {
            const S = a.y - c;
            return t.some((m) => m.dimension === "l" && D.equalTo(m.y1, S) && D.lessThanOrEqualTo(m.x1, a.x) && D.greaterThanOrEqualTo(m.x2, a.x + a.l));
          }
          case "left": {
            const S = a.x - c;
            return t.some((m) => m.dimension === "w" && D.equalTo(m.x1, S) && D.lessThanOrEqualTo(m.y1, a.y) && D.greaterThanOrEqualTo(m.y2, a.y + a.w));
          }
          case "right": {
            const S = a.x + a.l + c;
            return t.some((m) => m.dimension === "w" && D.equalTo(m.x1, S) && D.lessThanOrEqualTo(m.y1, a.y) && D.greaterThanOrEqualTo(m.y2, a.y + a.w));
          }
        }
      }, d = () => l.some((S) => {
        switch (h.type) {
          case "top":
            return S.dimension === "l" && D.equalTo(S.y1, a.y + a.w) && D.lessThanOrEqualTo(S.x1, a.x) && D.greaterThanOrEqualTo(S.x2, a.x + a.l);
          case "bottom":
            return S.dimension === "l" && D.equalTo(S.y1, a.y) && D.lessThanOrEqualTo(S.x1, a.x) && D.greaterThanOrEqualTo(S.x2, a.x + a.l);
          case "left":
            return S.dimension === "w" && D.equalTo(S.x1, a.x) && D.lessThanOrEqualTo(S.y1, a.y) && D.greaterThanOrEqualTo(S.y2, a.y + a.w);
          case "right":
            return S.dimension === "w" && D.equalTo(S.x1, a.x + a.l) && D.lessThanOrEqualTo(S.y1, a.y) && D.greaterThanOrEqualTo(S.y2, a.y + a.w);
        }
      }), p = f(), w = d();
      return p || w;
    });
    return u || (r = a, s.push(a.autoId)), u;
  });
  return o && (r = null, s.length = 0), { allShapesCut: o, uncutShape: r, uncutShapeAutoIds: s };
}
function Wn(e, t) {
  return !!(e?.guillotine?.allowHeadCuts && t?.guillotineOptions?.headCuts);
}
const te = {
  previousSegments: [],
  ptxCuts: 0,
  segments: 0,
  //this needs to be here, as it's shared with the front end - cannot be put into optimiser
  makeCutsIteration: 0
};
function Nn() {
  te.previousSegments = [], te.ptxCuts = 0, te.segments = 0, te.makeCutsIteration = -1;
}
function Rr(e, t) {
  return t ? e > t : !1;
}
function Ut({ container: e, shapes: t = [], forceNoHeadCut: n = !1, final: i = !1, saw: r = null }) {
  te.ptxCuts = 0;
  const s = e.getStock;
  r && (s.saw = r);
  const o = se(e) ? null : s.__topDownRoot;
  if (o) {
    i && Nn();
    try {
      const [p, w, S] = Ci(o, i, 0);
      return { rootSegment: p, cuts: w, offcuts: S };
    } catch (p) {
      return N("errors", `issue analysing pre-built top-down segments ${p?.message}`), { rootSegment: null, cuts: [], offcuts: [] };
    }
  }
  const a = se(e);
  let c;
  const l = a ? e.cutDirection : e.cutPreference;
  if (a && e.type === "root")
    c = e, c.cuts = [], c.children = [], c.shapes = t, N("cuts", `REUSING ROOT [${c.autoId ? c.id : "unknown"}] l=${c.l}, w=${c.w}, DIR ${l?.toUpperCase()}`);
  else {
    const p = te.segments, w = p.toString();
    te.segments++, c = new Re({
      id: w,
      x: a ? e.x : 0,
      y: a ? e.y : 0,
      l: a ? e.l : s.l,
      w: a ? e.w : s.w,
      t: s.t,
      saw: s.saw,
      stock: s,
      shapes: t,
      parent: a ? e.parent ?? e : null,
      grain: s.grain,
      material: s.material,
      type: p === 0 ? "root" : "",
      phase: a ? e.phase + 1 : 0,
      hasHeadCut: a ? e.hasHeadCut : !1,
      cutDirection: l,
      isInitial: a ? e.isInitial : !0
    });
  }
  te.previousSegments = [];
  const u = vt.call(this, {
    segment: c,
    stock: s,
    allStockShapes: t,
    forceNoHeadCut: n,
    final: i
  });
  let h, f, d;
  try {
    [h, f, d] = Ci(c, i, u.headCutCount);
  } catch (p) {
    return N("errors", `issue analysing segments ${p.message}`), {
      rootSegment: null,
      cuts: [],
      offcuts: []
    };
  }
  if (a && d.length > 0) {
    const p = d.map((w) => `${w.id}@(${w.x},${w.y})`).join(", ");
    N("cuts", `[calculateStripCuts] Returning ${d.length} offcuts for container segment at (${e.x},${e.y}): ${p}`);
  }
  return {
    rootSegment: h,
    cuts: f,
    offcuts: d
  };
}
function Er(e, t = !1) {
  let n = xs(e);
  return t && (n = Cs(n)), n;
}
function Mr(e, t, n, i, r, s, o) {
  if (this?.config && !this?.config?.guillotine?.extendSegments || t.cutType !== "guillotine" || t?.saw?.guillotineOptions?.strategy === "time")
    return !1;
  const a = e?.merged, c = e?.parent?.merged;
  if (a && c)
    return !1;
  const l = vr(n, 1), u = e?.parent ? e.parent?.hasHeadCut : !1;
  let h = !l || u;
  if (!h || (t?.saw?.stockType === "roll" && l && (h = !1), t?.saw?.stockType === "roll" && s === "w"))
    return !1;
  let f = o.length > 1 && i < o.length - 1;
  u && (f = !0);
  const d = D.lessThan(n[s], e[s]);
  return f && d && !r;
}
function Fn(e) {
  const t = J(e.cutPreference);
  return Ue(t);
}
function Ar(e) {
  return J(e.cutPreference);
}
function Dr(e) {
  const t = Fn(e);
  let n = 0;
  return e?.getStock?.hasTrim && e?.getStock?.trimmed === !1 && (n = e?.getStock?.trim?.[t === "x" ? "x1" : "y1"] ?? 0), n;
}
function bs(e) {
  const t = Fn(e), n = Dr(e);
  return e[t] === n;
}
function Is(e, t, n) {
  if (!Wn(this?.config, e) || !bs(n))
    return !1;
  const i = Ar(n), r = Fn(n);
  if (t[r] > n[r])
    return !1;
  let s = !1;
  const o = 0.75;
  if (V(t) && t.group.addedAsGroup) {
    const a = n.shapes.filter((u) => u.group?.addedAsGroup === t.group.addedAsGroup), c = Ue(i), l = Je(a, c);
    l[i] + l[c] >= n[i] * o && (s = !0);
  } else t[i] >= n[i] * o && (s = !0);
  return s;
}
class Yn {
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
  cutPosition;
  cut;
  farSideSegmentSize;
  nearSideSegment;
  farSideSegment;
  rejectedByCollision;
  collisionShapes;
  attemptedDirections;
  constructor(t) {
    this.segment = t.segment, this.stock = t.stock, this.allStockShapes = t.allStockShapes || [], this.forceNoHeadCut = t.forceNoHeadCut || !1, this.final = t.final || !1, this.headCutCount = t.headCutCount ?? 0, this.previousCutPosition = t.previousCutPosition ?? null, this.previousEdgeOfSegment = t.previousEdgeOfSegment || !1, this.cutSuccess = t.cutSuccess || !1, this.bladeWidth = this.stock.bladeWidth, this.halfBladeWidth = this.bladeWidth / 2, this.stripParentShapes = t.stripParentShapes || [], this.currentStripIndex = t.currentStripIndex ?? 0, this.isHeadCut = t.isHeadCut || !1, this.isEdgeOfSegment = t.isEdgeOfSegment || !1, this.mergedCut = t.mergedCut || !1, this.cutPosition = t.cutPosition ?? null, this.cut = t.cut ?? null, this.farSideSegmentSize = t.farSideSegmentSize ?? null, this.headCutSegment = t.headCutSegment ?? null, this.nearSideSegment = t.nearSideSegment ?? null, this.farSideSegment = t.farSideSegment ?? null, this.rejectedByCollision = t.rejectedByCollision || !1, this.collisionShapes = t.collisionShapes || [], this.attemptedDirections = t.attemptedDirections || /* @__PURE__ */ new Set(), Object.freeze(this);
  }
  //caters for head cuts
  get cutInfo() {
    const t = Er(this.segment.cutDirection, this.isHeadCut);
    return z([() => A(t.cutDimension).toBe(this.isHeadCut ? J(this.segment.cutDirection) : this.segment.cutDirection)]), t;
  }
  //segment cut direction doesn't change, but this computed property will
  get cutDirection() {
    return this.isHeadCut ? J(this.segment.cutDirection) : this.segment.cutDirection;
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
    return new Yn({
      ...this,
      ...t
    });
  }
  // get shapes that are within boundaries of current strip
  getShapesInCurrentStrip() {
    return this.currentStripParent ? this.segment.shapes.filter((t) => ot(t, this.currentStripParent, this.cutInfo.positionAxis)) : [];
  }
}
function Cs(e) {
  return {
    positionAxis: We(e.positionAxis),
    positionDimension: J(e.positionDimension),
    cutAxis: We(e.cutAxis),
    cutDimension: J(e.cutDimension)
  };
}
function xi(e) {
  return e.type === "root" && e.isInitial;
}
function vt({ segment: e, stock: t, allStockShapes: n = [], forceNoHeadCut: i = !1, previousCutPosition: r = null, previousEdgeOfSegment: s = !1, final: o = !1, headCutCount: a = 0, attemptedDirections: c = /* @__PURE__ */ new Set() }) {
  N("cuts", `[makeCuts] START: segment ${e.l}x${e.w} phase=${e.phase} type=${e.type} shapes=${e.shapes?.length || 0} final=${o}`);
  let l = new Yn({
    segment: e,
    stock: t,
    allStockShapes: n,
    forceNoHeadCut: i,
    previousCutPosition: r,
    previousEdgeOfSegment: s,
    final: o,
    headCutCount: a,
    attemptedDirections: c
  });
  if (!Xr.call(this, l)) {
    N("cuts", "[makeCuts] EARLY RETURN: invalid input");
    return;
  }
  if (Lr.call(this, l)) {
    N("cuts", "[makeCuts] EARLY RETURN: duplicate segment");
    return;
  }
  Gr(l), l = Or.call(this, l), l = Nr.call(this, l), N("cuts", `[makeCuts] Found ${l.stripParentShapes.length} strip parent shapes`), l.stripParentShapes.length && (l.segment.offcut = !1);
  const u = l.stripParentShapes?.length || 0;
  for (let y = 0; y < u; y++) {
    if (l = l.with({ currentStripIndex: y }), N("cuts", `[makeCuts] Processing shape ${y}: ${l.currentStripParent.l}x${l.currentStripParent.w}`), l.currentStripParent.l === t.l && l.currentStripParent.w === t.w) {
      N("cuts", "[makeCuts] Shape matches stock size, marking as produced"), l = bi.call(this, l);
      break;
    }
    if (l = Ur.call(this, l), l.final && l.segment?.parent?.hasHeadCut && l.segment.phase === 1 && e.type === "far" && l.isHeadCut === !1) {
      const I = Cs(l.cutInfo), { cutAxis: C, cutDimension: P, positionDimension: E, positionAxis: M } = I;
      _t({
        parentSegment: e,
        stock: t,
        cutDirection: P,
        cutAxis: C,
        positionAxis: M,
        position: e[E] + e[M],
        headCut: !0,
        ptxDummyCut: !0
      });
    }
    l = Fr.call(this, l);
    const v = l.final && t.cutType === "beam" && y === 0 && (e.type !== "far" || vs(l));
    if (F("beam.trim.first-beam-trim", v, { segment: e.id, phase: e.phase, type: e.type }), v && (l = Yr.call(this, l)), l = Hr.call(this, l), y = l.currentStripIndex, Br.call(this, l) === !0) {
      N("cuts", "[makeCuts] Breaking due to edge of segment");
      break;
    }
    if (l = Zr.call(this, l), l.cut)
      l.isHeadCut && (l.segment.hasHeadCut = !0);
    else {
      if (l.isHeadCut) {
        const I = J(l.cutDirection);
        l.attemptedDirections.has(I) ? N("cuts", `[makeCuts] Skipping reattempt - direction ${I} already attempted`) : (l = l.with({ forceNoHeadCut: !0 }), wi.call(this, l, I));
        break;
      }
      if (l.rejectedByCollision && t.cutType === "beam" && e.phase > 0) {
        const { cutAxis: I } = l.cutInfo, C = l.currentStripParent[I], P = l.collisionShapes?.some((E) => !D.equalTo(E[I], C));
        if (F("beam.cross-strip.collision-tolerance", !!P, { segment: e.id, phase: e.phase }), P)
          continue;
      }
      l = Ii.call(this, l);
    }
    if (l = l.with({
      cutSuccess: !!l.cut,
      headCutCount: l.isHeadCut && l.cut ? l.headCutCount + 1 : l.headCutCount
    }), l.cut) {
      if (l.final && (l = bi.call(this, l), t.cutType === "beam" && zr.call(this, l), l.cut)) {
        let I = e.parent?.autoId;
        (I === "root" || !I) && (I = "R"), I = `[${I}]`;
        let C = e.autoId ? e.id : "unknown";
        C = `[${C}]`, N("cuts", `${I}->${C} P${e.phase} {${l.currentStripParent.autoId}} ${l.isHeadCut ? "HEAD" : "NORM"} ${e?.type?.toUpperCase()} ${Me(e.l, 4)}x${Me(e.w, 4)} ${Me(l.cutPosition, 4)} ${Me(l?.cut?.x1, 4)}|${Me(l?.cut?.x2, 4)}|${Me(l?.cut?.y1, 4)}|${Me(l?.cut?.y2, 4)}`), N("cuts", `DIRECTIONS FOR ${C}: STATE ${l?.cutDirection?.toUpperCase()} CUT ${l.cut?.dimension?.toUpperCase() ?? "N/A"} SEGMENT ${e?.cutDirection?.toUpperCase()}`);
      }
      if (l = Ii.call(this, l), l = Jr.call(this, l), l.isHeadCut)
        break;
    }
  }
  const h = Ps(l.segment), { allShapesCut: f } = ws(l.segment.shapes, h, l.segment, { ignoreGroupMembership: !0 }), d = l.segment.cutDirection, p = J(d), w = !l.attemptedDirections.has(d), S = !l.attemptedDirections.has(p), g = e.cuts.length === 0;
  if (!f && w && S && g) {
    N("cuts", `[makeCuts] Not all shapes cut in segment [${e.id}] with ${l.segment.shapes.length} shapes, retrying in ${p?.toUpperCase()} direction`);
    const y = new Set(l.attemptedDirections);
    return y.add(d), l = l.with({ attemptedDirections: y }), wi.call(this, l, p), l;
  }
  const m = l.final && t.cutType === "beam" && e.phase === 0;
  F("beam.extend.phase0-cuts", m, { segment: e.id, phase: e.phase }), m && (l = Vr.call(this, l));
  const x = l.final && t.cutType === "beam" && e.type === "far" && e.parent.hasHeadCut;
  return F("beam.extend.head-cut-far-side", x, { segment: e.id, phase: e.phase }), x && (l = jr.call(this, l)), l;
}
function vs(e) {
  const { segment: t, isHeadCut: n } = e;
  return n ? !1 : t?.parent?.hasHeadCut && t.type === "far";
}
function Br(e) {
  if (!e.isEdgeOfSegment)
    return !1;
  const { currentStripParent: t, segment: n, cutInfo: i } = e, { positionDimension: r, positionAxis: s } = i, a = D.greaterThanOrEqualTo(t[r] + t[s] + e.bladeWidth, n[r] + n[s]) && e.stock.cutType === "beam";
  if (F("beam.edge.skip-far-side", a, { segment: n.id, phase: n.phase }), a || (e = e.with({ previousEdgeOfSegment: !0 }), !n.children.length))
    return !1;
  const c = e.segment.children.findLast((l) => l.type === "far");
  return c ? (e = e.with({ segment: c }), c.cutDirection = J(e.cutDirection), vt.call(this, {
    segment: c,
    stock: e.stock,
    allStockShapes: e.allStockShapes,
    forceNoHeadCut: e.forceNoHeadCut,
    previousCutPosition: e.previousCutPosition,
    previousEdgeOfSegment: e.previousEdgeOfSegment,
    final: e.final,
    headCutCount: e.headCutCount
  }), !0) : !1;
}
function Ps(e, t = /* @__PURE__ */ new Set()) {
  if (t.has(e.autoId))
    return [];
  t.add(e.autoId);
  const n = [...e.cuts];
  if (e.children?.length)
    for (const i of e.children)
      n.push(...Ps(i, t));
  return n;
}
function wi(e, t) {
  const { segment: n } = e;
  n.cutDirection = t;
  const i = new Set(e.attemptedDirections);
  return i.add(t), e = e.with({
    isHeadCut: !1,
    attemptedDirections: i
  }), n.cuts.length = 0, n.clearChildren(), e.segment.hasHeadCut = !1, N("cuts", `REATTEMPTING [${n.id}] new direction ${n?.cutDirection?.toUpperCase()}`), vt.call(this, {
    segment: e.segment,
    stock: e.stock,
    allStockShapes: e.allStockShapes,
    forceNoHeadCut: e.forceNoHeadCut,
    previousCutPosition: e.previousCutPosition,
    previousEdgeOfSegment: e.previousEdgeOfSegment,
    final: e.final,
    headCutCount: e.headCutCount,
    attemptedDirections: i
  }), !0;
}
function Xr(e) {
  if (!e.segment)
    return !1;
  const { segment: t, stock: n, cutDirection: i, previousCutPosition: r, allStockShapes: s } = e;
  return !["l", "w"].includes(i) || t.l <= 0 || t.w <= 0 || r === void 0 ? !1 : (z([
    () => A(s.every((o) => V(o) || W(o))).toBe(!0),
    () => A(ie(n)).toBe(!0)
  ]), !0);
}
function Gr(e) {
  const { final: t } = e;
  return t && te.makeCutsIteration++, e;
}
function Lr(e) {
  const { segment: t, cutDirection: n } = e;
  return t.type !== "root" && te.previousSegments.some((i) => t.l === i.l && t.w === i.w && t.x === i.x && t.y === i.y && t.type === i.type && n === i.cutDirection);
}
function Or(e) {
  const { segment: t, cutDirection: n } = e;
  return te.previousSegments.push({
    w: t.w.valueOf(),
    l: t.l.valueOf(),
    x: t.x.valueOf(),
    y: t.y.valueOf(),
    type: t.type,
    cutDirection: n.valueOf()
  }), te.previousSegments.length > 20 && (te.previousSegments = te.previousSegments.slice(-20)), e;
}
function Wr(e, t, n) {
  return e.filter((i, r, s) => s.findIndex((o) => D.equalTo(o[t] + o[n], i[t] + i[n])) === r);
}
function Nr(e) {
  const { segment: t, stock: n, cutDirection: i, cutInfo: r, previousCutPosition: s, halfBladeWidth: o } = e, { cutAxis: a, positionAxis: c, positionDimension: l } = r;
  let u = [];
  if (N("cuts", `Finding strip parent shapes. Segment ${t.id} has ${t.shapes.length} shapes:`), t.shapes.slice(0, 3).forEach((f) => {
    N("cuts", `  Shape ${f.id}: l=${f.l}, w=${f.w}, rot=${f.rot}, at (${f.x},${f.y}), added=${f.added}`);
  }), n.cutPreference === i) {
    const f = t.type === "far" && n.cutType === "guillotine" || !s ? t[a] : s + o;
    N("cuts", `[findStripParentShapes] cutPreference=${n.cutPreference}, cutDirection=${i}, cutAxis=${a}, axisPosition=${f}, segment.shapes[0]?.[${a}]=${t.shapes[0]?.[a]}, segment.type=${t.type}`), u = Cr(t.shapes, a, f);
  } else {
    N("cuts", `[findStripParentShapes] NOT using cutPreference path, cutPreference=${n.cutPreference}, cutDirection=${i}, cutAxis=${a}, segment[${a}]=${t[a]}, segment.shapes[0]?.[${a}]=${t.shapes[0]?.[a]}, segment.shapes[0]?.added=${t.shapes[0]?.added}`), u = t.shapes.filter((d) => d.added && D.equalTo(d[a], t[a]));
    const f = u.filter((d) => W(d));
    if (f.length > 0) {
      const d = /* @__PURE__ */ new Set();
      f.forEach((p) => {
        p.shapes && Array.isArray(p.shapes) && p.shapes.forEach((w) => d.add(w.autoId));
      }), u = u.filter((p) => W(p) ? !0 : !d.has(p.autoId));
    }
    u = Wr(u, c, l);
  }
  if (u.length === 0) {
    const f = t.shapes.filter((d) => d.added);
    if (f.length > 0) {
      const d = Math.min(...f.map((p) => p[a]));
      u = f.filter((p) => D.equalTo(p[a], d)), N("cuts", `[findStripParentShapes] Fallback: found ${u.length} shapes at min axis position ${d}`);
    }
  }
  const h = t.shapes.filter((f) => W(f) && f.type === "user" && f.added);
  for (const f of h)
    if (!u.some((d) => d.autoId === f.autoId)) {
      const d = n.cutPreference === i ? t.type === "far" && n.cutType === "guillotine" || !s ? t[a] : s + o : t[a];
      D.lessThanOrEqualTo(f[a], d) && u.push(f);
    }
  if (u.sort((f, d) => f[c] - d[c]), !t?.hasHeadCut) {
    const f = t.shapes.filter((p) => p.added), d = Je(f, c);
    d && !u.some((p) => p.autoId === d.autoId) && u.push(d);
  }
  return e.with({ stripParentShapes: u });
}
function Fr(e) {
  const { segment: t, stock: n, cutDirection: i, cutInfo: r, halfBladeWidth: s, allStockShapes: o, previousStripShape: a, currentStripParent: c, currentStripIndex: l, bladeWidth: u } = e, { cutAxis: h, positionAxis: f, cutDimension: d, positionDimension: p } = r;
  if (l === 0)
    return e;
  if (a && D.equalTo(c[h], t[h]) && D.equalTo(a[h], t[h]) && !D.equalTo(c[f], a[f] + a[p] + u)) {
    N("cuts", `[makeCuts] Creating gap cut at position ${c[f] - s}, dir=${i}`);
    const { cut: w, previousCutPosition: S } = _t({
      parentSegment: t,
      stock: n,
      cutDirection: i,
      cutAxis: h,
      positionAxis: f,
      position: c[f] - s,
      allStockShapes: o
    });
    if (w) {
      const g = S < t[f] ? t[f] : S, m = g + s - t[f], x = c[f] - g - u - s, y = t[f] + m, v = x > 0 ? Hn.call(this, {
        parent: t,
        stock: n,
        offcut: !0,
        type: "near",
        [h]: t[h],
        [d]: t[d],
        [f]: y,
        [p]: x
      }) : null;
      v && z([
        () => A(v.cutDirection, `near side segment ${v.id} has the same cutDirection as segment ${t.id}`).not.toBe(t.cutDirection)
      ]);
    }
  }
  return e;
}
function Yr(e) {
  if (e.stock.cutType !== "beam" || e.currentStripIndex !== 0 || e.segment.type === "far" && !vs(e))
    return e;
  const { segment: t, stock: n, cutDirection: i, cutInfo: r, allStockShapes: s, halfBladeWidth: o } = e, { cutAxis: a, positionAxis: c, positionDimension: l } = r;
  return F("beam.trim.l1-phase1", t.phase === 1, { segment: t.id, phase: t.phase }), t.phase !== 1 || !e.final || kr({
    segment: t,
    stock: n,
    cutDirection: i,
    cutAxis: a,
    positionAxis: c,
    positionDimension: l,
    position: 1,
    allStockShapes: s,
    halfBladeWidth: o
  }), e;
}
function Hr(e) {
  const { segment: t, stock: n, cutInfo: i, halfBladeWidth: r, currentStripParent: s, currentStripIndex: o, stripParentShapes: a, isHeadCut: c, bladeWidth: l, previousEdgeOfSegment: u } = e, { positionAxis: h, cutAxis: f, positionDimension: d, cutDimension: p } = i;
  let w = s[h] + s[d] + r, S = !1, g = o;
  N("cuts", `Cut position calc: shape ${s.l}x${s.w}, posAxis=${h}, posDim=${d}`), N("cuts", `  Shape rot=${s.rot}, autoId=${s.autoId}`), N("cuts", `  ${h}=${s[h]}, ${d}=${s[d]} => cutPos=${w}`), N("cuts", `  cutDirection=${e.cutDirection}, cutAxis=${i.cutAxis}, cutDim=${i.cutDimension}`), N("cuts", `  Shape actual extent: x=[${s.x} to ${s.x + s.l}], y=[${s.y} to ${s.y + s.w}]`), N("cuts", `  Strip parent shapes count: ${a.length}`), a.length > 1 && N("cuts", `  All strip parents: ${a.map((y) => `${y.id}(${y.l}x${y.w} rot=${y.rot})`).join(", ")}`);
  let m = D.greaterThanOrEqualTo(s[h] + s[d] + l, t[h] + t[d]);
  const x = t.shapes;
  if (!c && !m && !u && Mr.call(this, t, n, s, o, m, e.cutDirection, a)) {
    let y = s;
    for (let v = o + 1; v < a.length; v++) {
      const b = a[v];
      if (b.autoId === y.autoId)
        continue;
      if (!b)
        break;
      const I = x.filter((M) => ot(M, s, h)), C = Je(I, f), P = I.reduce((M, X) => D.greaterThan(M[d], X[d]) ? M : X);
      D.greaterThan(P[h] + P[d], y[h] + y[d]) && (y = P, w = y[h] + y[d] + r);
      const E = Je(x.filter((M) => ot(M, b, h)), f);
      if (!D.equalTo(C[f] + C[p], E[f] + E[p]))
        break;
      if (D.equalTo(y[p], b[p]) && D.equalTo(y[f], b[f]))
        S = !0, w = b[h] + b[d] + r, y = b, g = v;
      else
        break;
    }
    S && (t.merged = !0, m = D.greaterThanOrEqualTo(w - r, t[h] + t[d]));
  }
  return e.with({
    cutPosition: w,
    mergedCut: S,
    isEdgeOfSegment: m,
    currentStripIndex: g
  });
}
function zr(e) {
  if (e.stock.cutType !== "beam" || !e.cut)
    return e;
  const { cut: t, segment: n, cutInfo: i, currentStripParent: r, currentStripIndex: s, stripParentShapes: o } = e, { positionAxis: a, positionDimension: c } = i;
  t?.guillotineState?.partProduced && s === o.length - 1 && D.equalTo(r[a] + r[c], n[a] + n[c]) && (N("cuts", `MARKING PTX DUMMY CUT ${r.autoId} ${e.cutPosition}`), t.ptxData.isDummy = !0);
}
function qr(e) {
  return e.hasHeadCut ? J(e.cutDirection) : e.cutDirection;
}
function Vr(e) {
  if (e.stock.cutType !== "beam")
    return e;
  const { segment: t, cutInfo: n, stock: i, cutDirection: r } = e;
  if (t.phase !== 0)
    return e;
  const { cutAxis: s } = n;
  for (const o of t.cuts)
    o.dimension === qr(t) && (o[s + 1] = 0, o[s + 2] = i[r]);
  return e;
}
function jr(e) {
  if (e.stock.cutType !== "beam")
    return e;
  const { segment: t, cutInfo: n, stock: i, cutDirection: r } = e;
  if (F("beam.extend.far-side-phase1", t.phase === 1, { segment: t.id, phase: t.phase }), t.phase !== 1)
    return e;
  const { cutAxis: s } = n;
  F("beam.extend.far-side-axis", t.hasHeadCut ? "head-cut-reverse" : "natural", { segment: t.id });
  for (const o of t.cuts)
    t.hasHeadCut ? o.dimension === J(t.cutDirection) && (o[We(s) + 2] = i[J(r)]) : o.dimension === t.cutDirection && (o[s + 2] = i[r]);
}
function Zr(e) {
  const { segment: t, stock: n, cutDirection: i, cutInfo: r, cutPosition: s, allStockShapes: o, currentStripParent: a, isHeadCut: c } = e, { cutAxis: l, positionAxis: u } = r;
  c && Pr(a, i);
  const { cut: h, farSideSegmentSize: f, previousCutPosition: d, rejectedByCollision: p, collisionShapes: w } = _t({
    parentSegment: t,
    stock: n,
    cutDirection: i,
    cutAxis: l,
    positionAxis: u,
    position: s,
    allStockShapes: t.phase === 0 ? o : [],
    headCut: e.isHeadCut
  });
  h && e.final && N("cuts", `MADE CUT ${h.x1}|${h.x2}|${h.y1}|${h.y2} ${h.isHead ? "HEAD" : "NORM"}`);
  const S = p ? e.previousCutPosition : d;
  return e.with({
    cut: h,
    farSideSegmentSize: f,
    previousCutPosition: S,
    rejectedByCollision: p || !1,
    collisionShapes: w || []
  });
}
function bi(e) {
  if (e.stock.cutType !== "beam")
    return e;
  const { cut: t, cutInfo: n, halfBladeWidth: i, currentStripParent: r } = e;
  if (!t)
    return e;
  const { cutAxis: s, cutDimension: o, positionAxis: a, positionDimension: c } = n;
  return D.equalTo(t[s + 2] - t[s + 1], r[o]) && D.equalTo(t[a + 1], r[a] + r[c] + i) && (t.guillotineState.partProduced = r.parentId), e;
}
function Ii(e) {
  const { segment: t, stock: n, cutInfo: i, cutPosition: r, mergedCut: s, currentStripParent: o, previousCutPosition: a, cut: c, isEdgeOfSegment: l, halfBladeWidth: u, bladeWidth: h, allStockShapes: f, final: d, cutDirection: p, currentStripIndex: w } = e, { cutAxis: S, positionAxis: g, cutDimension: m, positionDimension: x } = i, y = w === 0 && D.greaterThan(o[g], t[g]);
  if (!c && !l && !y)
    return e;
  const v = {
    parent: t,
    stock: n,
    merged: s,
    type: "near",
    hasHeadCut: t.hasHeadCut,
    shapes: []
  }, b = y && !c ? o[g] : r, I = a != null && a >= t[g], C = I ? a + u : t[g], P = b - (I ? a + h : u + t[g]);
  N("cuts", `[createNearSegment] segment[${t.id}] at (${t.x},${t.y}), posAxis=${g}, cutAxis=${S}, previousCutPosition=${a}, hasPreviousCut=${I}, nearSegmentPosition=${C}`);
  const E = {
    [S]: t[S],
    [m]: t[m],
    [g]: C,
    [x]: P,
    cutDirection: J(p)
  };
  N("cuts", `[createNearSegment] dimensionProps: x=${E.x ?? "N/A"}, y=${E.y ?? "N/A"}, l=${E.l ?? "N/A"}, w=${E.w ?? "N/A"}`);
  const M = Hn.call(
    this,
    { ...v, ...E },
    !1
    // Don't reject if identical - we'll filter shapes ourselves
  );
  if (!M)
    return e;
  if (N("cuts", `[createNearSegment] AFTER creation: segment ${t.id} at (${M.x},${M.y}) ${M.l}x${M.w}`), M.shapes = t.shapes.filter((X) => D.greaterThanOrEqualTo(X.x, M.x) && D.lessThanOrEqualTo(X.x + X.l, M.x + M.l) && D.greaterThanOrEqualTo(X.y, M.y) && D.lessThanOrEqualTo(X.y + X.w, M.y + M.w)), N("cuts", `[createNearSegment] nearSideSegment.shapes.length = ${M.shapes.length}`), M.shapes.length > 0) {
    const X = D.equalTo(M.l, o.l) && D.equalTo(M.w, o.w);
    if (N("cuts", `[createNearSegment] nearSegment: ${M.l}x${M.w}, shape: ${o.l}x${o.w}, identical: ${X}, mergedCut: ${s}`), s || !X) {
      N("cuts", `CUTTING NEAR SIDE SEGMENT [${M.id}] DIR ${M?.cutDirection?.toUpperCase()}`), N("cuts", `[createNearSegment] CALLING makeCuts recursively with segment ${M.l}x${M.w}, segment.shapes.length=${M.shapes?.length}, final=${d}`);
      const O = vt.call(this, {
        segment: M,
        stock: n,
        cutDirection: M.cutDirection,
        previousCutPosition: a,
        allStockShapes: f,
        final: d,
        headCutCount: e.headCutCount
      });
      N("cuts", `[createNearSegment] RETURNED from makeCuts, childState=${O}`), e = e.with({ headCutCount: O?.headCutCount || e.headCutCount });
    }
  }
  return e.with({ nearSideSegment: M });
}
function Jr(e) {
  const { segment: t, stock: n, cutInfo: i, cutPosition: r, farSideSegmentSize: s, halfBladeWidth: o, currentStripIndex: a, stripParentShapes: c, isHeadCut: l, allStockShapes: u, final: h } = e, { cutAxis: f, positionAxis: d, cutDimension: p, positionDimension: w } = i, S = {
    parent: t,
    stock: n,
    offcut: l ? !1 : a === c.length - 1,
    type: "far",
    hasHeadCut: !1,
    shapes: [],
    cutDirection: t.cutDirection
    //[] test
  }, g = {
    [f]: t[f],
    [p]: t[p],
    [d]: r + o,
    [w]: s
  };
  N("cuts", `Creating FAR segment: cutAxis=${f}, cutDim=${p}, posAxis=${d}, posDim=${w}`), N("cuts", `FAR segment props: ${f}=${t[f]}, ${p}=${t[p]}, ${d}=${r + o}, ${w}=${s}`), N("cuts", `FAR segment calculation: cutPosition=${r}, halfBladeWidth=${o}, result=${r + o}`);
  const m = Hn.call(this, { ...S, ...g });
  if (!m)
    return e;
  if (N("cuts", `FAR segment created [${m.id}] at (${m.x},${m.y}) ${m.l}x${m.w}`), N("cuts", `  Parent has ${t.shapes.length} shapes, far segment has ${m.shapes.length} shapes`), N("cuts", `  Cut was at position ${r} (${d}=${r})`), N("cuts", `  Expected offcut dimensions based on stock (1200x1200): should be ${t.l - r}x${t.w} or ${t.l}x${t.w - r}`), l) {
    m.shapes = t.shapes.filter((y) => {
      const v = y[We(f)] + y[J(p)];
      return D.greaterThan(v, r);
    }), N("cuts", `HEAD CUT: Making cuts in far segment [${m.id}] with ${m.shapes.length} shapes`);
    const x = vt.call(this, {
      segment: m,
      stock: n,
      cutDirection: m.cutDirection,
      previousCutPosition: null,
      // No previous cut in this new segment yet
      allStockShapes: u,
      final: h,
      headCutCount: e.headCutCount
    });
    e = e.with({ headCutCount: x?.headCutCount || e.headCutCount });
  }
  return e.with({ farSideSegment: m });
}
function $s(e) {
  if (!Wn(this?.config, e?.saw) || (F("guillotine.head-cut.phase-gate", e?.phase === 0, { type: e?.type, phase: e?.phase }), e?.phase > 0))
    return !1;
  if (xi(e))
    return !0;
  if (e.type === "far" || e.type === "root") {
    if (!bs(e))
      return !1;
    if (e.parent.hasHeadCut || xi(e.parent))
      return !0;
  }
  return !1;
}
function Ur(e) {
  const { segment: t, currentStripParent: n, forceNoHeadCut: i } = e;
  if (i)
    return e.with({ isHeadCut: !1 });
  let r = !1;
  return $s.call(this, t) ? (r = Is.call(this, t.saw, n, t, e.cutDirection), e.with({ isHeadCut: r })) : e.with({ isHeadCut: !1 });
}
function _t({ parentSegment: e, stock: t, cutDirection: n, cutAxis: i, positionAxis: r, position: s, allStockShapes: o = [], headCut: a = !1, ptxDummyCut: c = !1, skipCollisionCheck: l = !1 }) {
  const u = t.halfBladeWidth, h = Ji(r), f = go.parse({
    stock: t,
    isGuillotine: !0,
    isHead: a,
    ptxData: {
      isDummy: c
    },
    //NOTE: this has changed from cutAxis to positionAxis
    x1: r === "x" ? s : e.x,
    x2: r === "x" ? s : e.x + e.l,
    y1: r === "y" ? s : e.y,
    y2: r === "y" ? s : e.y + e.w
  });
  let d = new Xt(f);
  if (!c && e.type === "near" && e.parent.hasHeadCut && (d.ptxData.headCutStrip = !0), !l) {
    const I = o.length ? o : e.shapes, C = An(d, t, I, !0);
    if (C?.length)
      return {
        cut: null,
        farSideSegmentSize: null,
        previousCutPosition: null,
        rejectedByCollision: !0,
        collisionShapes: C
      };
  }
  const p = e.cuts.filter((I) => I.dimension === n && D.equalTo(I[i + 1], d[i + 1]));
  if (s && p.some((I) => D.equalTo(I[r + 1], s)))
    return {
      cut: null,
      farSideSegmentSize: null,
      previousCutPosition: null
    };
  const w = p.length ? p[p.length - 1] : null;
  let S = w ? w[r + 1] : null, g = e[r] + e[h] - (s + u);
  g < 0 && (g = 0);
  let m = e.parent;
  for (; m; ) {
    if (m.cuts.some((C) => C.dimension === n && D.equalTo(C[r + 1], s)))
      return {
        cut: null,
        farSideSegmentSize: g,
        previousCutPosition: S
      };
    m = m.parent;
  }
  const x = D.lessThanOrEqualTo(s - u, e[r] + e[h]), y = s - u, v = e[r] + e[h], b = D.greaterThanOrEqualTo(y, v);
  return d.beamTrimL1 || d.beamTrimW1 || t.cutType === "beam" && D.lessThanOrEqualTo(s - u, e[r] + e[h]) || d.ptxData.isDummy || x && !b ? (d.ptxData.order = te.ptxCuts++, e.cuts.push(d)) : d.stock?.saw?.stockType === "roll" ? e.cuts.push(d) : (d = null, g = null, S = null), {
    cut: d,
    farSideSegmentSize: g,
    previousCutPosition: S
  };
}
function _r({ x: e, y: t, l: n, w: i, type: r, parent: s, rejectIdentical: o }) {
  return o && D.equalTo(e, s.x) && D.equalTo(t, s.y) && D.equalTo(i, s.w) && D.equalTo(n, s.l) ? "IDENTICAL_TO_PARENT" : n <= 0 || i <= 0 ? "INVALID_DIMENSIONS" : s && !s.autoId ? (console.error("[ERROR] Parent segment has no autoId!"), console.error(`Parent details: type=${s.type}, x=${s.x}, y=${s.y}, l=${s.l}, w=${s.w}`), "MISSING_PARENT_ID") : r === "root" && s ? (console.error("[ERROR] Attempting to create root segment with a parent!"), console.error(`Parent autoId: ${s.autoId}, Parent type: ${s.type}`), "ROOT_WITH_PARENT") : (r === "root" && s?.type !== void 0 && s.type !== "root" && console.error(`[ERROR] Creating root segment with non-root parent of type: ${s.type}`), null);
}
function Hn({ x: e, y: t, l: n, w: i, type: r, parent: s, stock: o, offcut: a = !1, merged: c = !1, cutDirection: l = null }, u = !0) {
  if (_r({ x: e, y: t, l: n, w: i, type: r, parent: s, rejectIdentical: u }))
    return;
  let f;
  te.segments++;
  let d = s.phase + 1;
  if (s.hasHeadCut && (s.isInitial || (s.phase = 0), d = s.phase + 1), Rr(d, s?.saw?.guillotineOptions?.maxPhase))
    return N("cuts", `[saw-safety] refusing to create segment at phase=${d} > maxPhase=${s?.saw?.guillotineOptions?.maxPhase}`), null;
  try {
    const S = te.segments.toString();
    if (f = new Re({
      x: e,
      y: t,
      l: n,
      w: i,
      t: typeof o.t == "string" ? parseFloat(o.t) : o.t,
      id: S,
      phase: d,
      parent: s,
      stock: o,
      offcut: a,
      merged: c,
      type: r,
      grain: o.grain,
      material: o.material,
      saw: o.saw,
      cutDirection: l || J(s.cutDirection)
    }), s && s.autoId === f.autoId)
      throw console.error(`[ERROR] Segment created with itself as parent! autoId: ${f.id}`), new Error("Segment cannot be its own parent");
  } catch (S) {
    N("info", `issue creating segment ${S.message}`);
    return;
  }
  const p = Jt(f), w = s.shapes.filter((S) => S.added ? D.greaterThanOrEqualTo(S.x, f.x) && D.lessThanOrEqualTo(S.x + S.l, f.x + f.l) && D.greaterThanOrEqualTo(S.y, f.y) && D.lessThanOrEqualTo(S.y + S.w, f.y + f.w) : S.willItFit(f, null, p));
  return f.shapes = w, f;
}
function Ci(e, t = !1, n) {
  t && N("cuts", `------------------- ANALYSE SEGMENTS ${e.id} -------------------`);
  const i = [], r = [], s = [];
  let o = 0, a = 0;
  const c = /* @__PURE__ */ new Set(), l = (u, h = 0) => {
    if (!u)
      return h;
    if (c.has(u.autoId))
      return console.error(`[CIRCULAR REFERENCE DETECTED] Segment ${u.id} is already in the traversal path!`), console.error(`Traversal path: ${Array.from(c).join(" -> ")} -> ${u.id}`), console.error(`Segment details: autoId=${u.id}, parent=${u.parent?.id}, children=[${u.children?.map((d) => d.autoId).join(", ")}]`), h;
    c.add(u.autoId);
    let f = h;
    i.push(u), (u.offcut === !0 || !u.shapes?.length) && s.push(u);
    for (let d = 0; d < u.cuts.length; d++) {
      const p = u.cuts[d];
      if (p) {
        if (p.guillotineState.phase = u.phase, p.isHead ? (p.ptxData.function = 0, o++) : d > 0 && r[d - 1].isHead ? p.dimension === "l" ? p.ptxData.function = 1 : p.dimension === "w" && (p.ptxData.function = 2) : (p.ptxData.function = p.guillotineState.phase + 1, p.ptxData.headCutStrip && p.ptxData.function--), p.isTrim && a++, t)
          if (p.isHead) {
            let w = 0;
            $r(u, () => w++), f = w, N("cuts", `[${u.id}] reset cut order to ${f}`);
          } else d > 0 && u.cuts[d - 1].isHead && f++;
        p.guillotineState.order = f, p.guillotineState.segmentCutOrder = d, p.guillotineState.parentSegmentID = u?.autoId || "root", t && Kr(p, u), r.push(p), t && N("cuts", `[${u.id}] {${f}} ${p.x1}|${p.x2}|${p.y1}|${p.y2}`), f++;
      }
    }
    if (u.children && u.children.length > 0) {
      const d = u.children.filter((p) => p.autoId === u.autoId ? (console.error(`[SELF-REFERENCE FOUND] Removing segment ${u.id} from its own children array`), console.error(`Segment type: ${u.type}, Phase: ${u.phase}`), console.error(`Number of children: ${u.children.length}`), console.error(`Children autoIds: ${u.children.map((w) => w.autoId).join(", ")}`), !1) : !0);
      d.length !== u.children.length && (u.children = d);
      for (const p of u.children)
        if (p && se(p)) {
          if (p.type === "firstShape")
            continue;
          if (p.autoId === u.autoId) {
            console.error(`[CRITICAL SELF-REFERENCE] Segment ${u.id} still has itself as a child!`), console.error("This should have been filtered. Skipping traversal.");
            continue;
          }
          if (c.has(p.autoId)) {
            console.error(`[CIRCULAR REFERENCE] Child segment ${p.autoId} is already in traversal path`), console.error(`Parent: ${u.id}, Path: ${Array.from(c).join(" -> ")}`);
            continue;
          }
          if (u.hasHeadCut) {
            const w = n + r.filter((S) => !S.isHead && !S.ptxData.isDummy).length;
            f = l(p, w);
          } else
            f = l(p, f);
        }
    }
    return c.delete(u.autoId), f;
  };
  return l(e), t && (N("cuts", `Segments processed: ${i.length}`), N("cuts", `Cuts processed: ${r.length}`), N("cuts", `Trim cuts found: ${a}`), N("cuts", `Head cuts found: ${o}/${n}`), N("cuts", `Offcuts identified: ${s.length}`), N("cuts", `ROOT segment [${e.id}] has ${e.children?.length || 0} children`), N("cuts", "------------------- END ANALYSE SEGMENTS -------------------")), [e, r, s];
}
function Kr(e, t) {
  const n = {
    top: null,
    bottom: null,
    left: null,
    right: null
  }, i = e.stock.halfBladeWidth;
  if (e.beamTrimL1 || e.beamTrimW1)
    e.beamTrimL1 ? n.left = e.stock.trim.l1 : e.beamTrimW1 && (n.bottom = e.stock.trim.w1);
  else {
    const r = t?.children, s = e.stock.cutType === "beam" && t.cuts[0].isTrim ? e.guillotineState.segmentCutOrder - 1 : e.guillotineState.segmentCutOrder;
    if (r?.length) {
      const o = r.filter((a) => a.type === "near")[s];
      o && (e.dimension === "l" ? (n.bottom = e.y1 - o.y - i, n.top = t.y + t.w - (e.y1 + i)) : e.dimension === "w" && (n.left = e.x1 - o.x - i, n.right = t.x + t.l - (e.x1 + i)));
    }
  }
  e.distances = n;
}
function Qr(e, t) {
  return e?.length && e.forEach((n) => {
    t = t.filter((i) => !(i.id === n.id || W(i) && i.shapes.find((r) => r.id === n.id)));
  }), t;
}
const ve = {
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
        fill: 1
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
        fenceConsistency: 0,
        // Reward placing a shape whose cross-strip dim matches an
        // already-placed shape in the same strip. -12% on bench-8-60
        // 2nd-area + bench-9-9 hits 1/1 target. The deepSearchRetry
        // path overrides this back to 0 to preserve bench-4-256's
        // 13/13 stock-count target hit.
        stripCohesion: 1,
        // Cross-dim tolerance for the stripCohesion bonus — accommodates
        // 1-5mm dimensional drift between shape types so 362-wide rails
        // co-locate with 363-tall panels. Bounded bonus (min(1, matches/4))
        // limits any negative impact when the tolerance over-matches.
        stripCohesionTolerance: 5
      };
    },
    time() {
      const e = this.standard();
      return e.similarDimensions = 1, e.fenceConsistency = 1, e;
    },
    stock() {
      return this.standard();
    },
    beam(e) {
      const t = this.standard();
      t.similarDimensions = 0;
      const n = e ?? nt()?.experimental?.weightingOverride;
      if (n && typeof n == "object")
        for (const [i, r] of Object.entries(n))
          typeof r == "number" && (t[i] = r);
      return t;
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
function Ge(e, t) {
  if (!t)
    return e;
  const n = t.weighting;
  if (!n)
    return e;
  for (const i in n) {
    if (n[i] === null || n[i] === void 0)
      continue;
    const r = e[i];
    e[i] = typeof r == "number" && !Number.isNaN(r) ? r * n[i] : n[i];
  }
  return e;
}
function zn(e, t, n) {
  if (this?.weighting?.custom)
    return Ge(this.weighting.custom, n);
  const i = e.cutType, r = this?.config?.experimental?.weightingOverride;
  switch (i) {
    case "efficiency":
      if (t?.saw?.stockType === "roll")
        return Ge(ve.roll.efficiency(), n);
      break;
    case "beam":
      return Ge(ve.guillotine.beam(r), n);
    case "guillotine": {
      if (t?.saw?.stockType === "roll")
        return Ge(ve.roll.guillotine(), n);
      switch (t.saw.guillotineOptions.strategy) {
        case "time":
          return Ge(ve.guillotine.time(), n);
        case "efficiency":
          return Ge(ve.guillotine.stock(), n);
        default:
          return Ge(ve.guillotine.stock(), n);
      }
    }
  }
  return Ge(ve[e.cutType].standard(), n);
}
class ea {
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
  constructor(t, n, i) {
    if (typeof n != "object")
      throw new Error(`stock must be a single object in Ecosystem ${typeof n}`);
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
    }, this.container = n, this.shapeList = i, this.CLO.resetShapes(i), this.selectionMethod = t.successMetric, this.firstShape = n.algoBenchmark?.firstShape, this.firstShapeRotation = n.algoBenchmark?.firstShapeRotation, this.benchmark = {
      score: n.algoBenchmark.score[this.selectionMethod],
      weighting: zn.call(this.CLO, n, ie(n) ? n : n.getStock)
    }, this.weighting = this.weightingKeys[this.container.cutType];
    const r = n?.saw?.stockType === "roll";
    F("evo.weighting.mode", r ? "roll" : this.container.cutType, { stock: this.container.id }), r && (this.selectionMethod = "rollLength", this.weighting = this.weightingKeys.roll), this.uniqueShapes = Ne(i, !1), this.population = [], this.options = {
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
    this.population.length = 0, F("evo.population.init", !0, { stock: this.container.id, size: this.options.populationSize });
    for (let t = 0; t < this.options.populationSize - 1; t++)
      this.population.push(new vi(this, t));
    this.population.push(new vi(this, this.options.populationSize, this.benchmark.weighting));
  }
  getBestIndividual() {
    return this.population.reduce((n, i) => {
      const r = "bestScore";
      return n?.[r]?.[this.selectionMethod] > i?.[r]?.[this.selectionMethod] ? n : i;
    });
  }
  recordResult(t, n) {
    if (n)
      if (!this.bestResult)
        this.bestResult = t, this.bestResult.weighting = structuredClone(n.weighting), W(this.bestResult.firstShape) && this.bestResult.firstShape.shapes.forEach((i) => t.shapes.push(i.compress()));
      else {
        if (t.score.efficiency <= this.bestResult.score.efficiency)
          return;
        this.bestResult = t, this.bestResult.weighting = structuredClone(n.weighting), W(this.bestResult.firstShape) && this.bestResult.firstShape.shapes.forEach((i) => t.shapes.push(i.compress()));
      }
  }
  async run() {
    this.CLO.runningEvo = !0, N("swarm", `Swarm starting - population: ${this.options.populationSize}, steps: ${this.options.steps}`), this.CLO.resetShapes(this.shapeList), this.createPopulation();
    async function t() {
      for (let n = 0; n < this.options.steps; n++) {
        F("evo.generation.step", n, { stock: this.container.id, total: this.options.steps });
        for (const s of this.population)
          await s.assess();
        const i = this.getBestIndividual(), r = this.population.every((s) => s?.bestScore?.[this.selectionMethod] === i?.bestScore?.[this.selectionMethod]);
        if (F("evo.generation.converged", r, { stock: this.container.id, step: n }), r)
          return;
        for (const s of this.population)
          try {
            s.alive && s.updatePosition(i);
          } catch (o) {
            console.log(o);
          }
      }
    }
    return await t.call(this), F("evo.run.aborted", this.abort, { stock: this.container.id }), this.CLO.runningEvo = !1, this.bestResult.type = "evo", N("swarm", `Swarm complete - best efficiency: ${this.bestResult?.score?.efficiency?.toFixed(3)}`), {
      result: this.bestResult,
      evolutionVisData: this.evolutionVisData
    };
  }
}
class vi {
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
  constructor(t, n, i = null) {
    this.swarm = t, this.id = n, this.alive = !0, this.weighting = i, this.score = null, this.bestScore = null, this.previousScore = null, this.speed = 1, this.socialInfluence = 0.8, this.improving = !1, this.following = null, this.firstShape = this.swarm.firstShape, this.firstShapeRotation = this.swarm.firstShapeRotation, this.stripShapes = this.swarm.stripShapes, this.iteration = this.swarm.iteration, this.type = "evo", this.cutType = this.swarm.container.saw.cutType, this.stockID = this.swarm.container.id, this.recentScores = [], this.weighting || this.createRandomWeighting();
  }
  //create weighting
  createRandomWeighting() {
    const t = ve.efficiency.standard();
    this.weighting = {};
    for (const [n, i] of Object.entries(t)) {
      const r = i;
      if (this.swarm?.weighting && this.swarm.weighting.indexOf(n) > -1) {
        let s = r - this.swarm.mutation.range, o = r + this.swarm.mutation.range;
        s < this.swarm.mutation.min && (s = this.swarm.mutation.min), o > this.swarm.mutation.max && (o = this.swarm.mutation.max), this.weighting[n] = tn(s, o);
      } else
        this.weighting[n] = t[n];
    }
  }
  //assess fitness and generate a score
  async assess() {
    if (this.swarm.progress.current++, !!this.alive) {
      switch (this.previousScore = this.score, this.previousScore && (this.previousScore.weighting = this.weighting), this.swarm.container.cutType) {
        case "efficiency":
          {
            const t = await je.runSpecificStrategy.call(this.swarm.CLO, {
              shapes: this.swarm.shapeList,
              container: this.swarm.container,
              firstShape: this.swarm.firstShape,
              firstShapeRotation: this.swarm.firstShapeRotation,
              weighting: this.weighting
            });
            this.score = t.score, this.swarm.recordResult(t, this);
          }
          break;
      }
      if (this.score) {
        const t = Object.entries(this.weighting).map(([n, i]) => `${n}: ${typeof i == "number" ? i.toFixed(2) : i}`).join(", ");
        N("swarm", `Individual ${this.id} - efficiency: ${this.score.efficiency?.toFixed(3)} | weighting: { ${t} }`);
      }
      if (this.swarm.CLO.resetShapes(this.swarm.shapeList), !this.score || !this.score?.[this.swarm.selectionMethod])
        return this.kill(), !1;
      if (this.recentScores.push(this.score[this.swarm.selectionMethod]), this.swarm.options.recentScoreCutOff > 0) {
        this.recentScores = this.recentScores.slice(Math.max(this.recentScores.length - this.swarm.options.recentScoreCutOff, 0));
        const t = this.swarm.getBestIndividual();
        t.bestScore && this.recentScores.length === this.swarm.options.recentScoreCutOff && this.recentScores.every((n) => n === t?.bestScore?.[this.swarm.selectionMethod]) && this.kill();
      }
      if (this.improving = !1, this.bestScore === null && (this.bestScore = this.score, this.bestScore.weighting = this.weighting), this.score[this.swarm.selectionMethod] > this.bestScore[this.swarm.selectionMethod] && (this.improving = !0, this.bestScore = this.score, this.bestScore.weighting = this.weighting), this.isWinner())
        return !0;
    }
  }
  //update the velocity based on the best individual and own experience
  updatePosition(t) {
    this.speed = 1, this.socialInfluence = 0.5;
    const n = this.score[this.swarm.selectionMethod] === t.score[this.swarm.selectionMethod];
    n ? this.following = null : this.following && this.following.score[this.swarm.selectionMethod] !== t.score[this.swarm.selectionMethod] && (this.following = null), n ? (this.socialInfluence = 0.1, this.previousScore && (this.speed = this.improving ? -1 : 1)) : this.following || (this.following = t);
    for (const [i, r] of Object.entries(this.weighting)) {
      let s = 0;
      n ? this.previousScore ? s = this.previousScore.weighting[i] - r : s = this.swarm.benchmark.weighting[i] - r : s = this.following.bestScore.weighting[i] - r;
      let o = s * this.speed * this.socialInfluence;
      n ? o += tn(-0.1, 0.1) : o += tn(-0.05, 0.05), this.weighting[i] += o;
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
function In(e) {
  return typeof e?.guillotineState?.myPhase == "number";
}
function mt(e) {
  return e.type === "root" || e[Ue(e.stock.cutPreference)] === 0;
}
function Cn(e, t) {
  return e?.guillotineState?.myPhase === t;
}
function ta(e) {
  const t = qn(e);
  if (!t)
    return $i(e, 1);
  const i = Pe(t) === "l" ? "w" : "l", r = Ts(e, t, i);
  $i(e, r);
}
function Ts(e, t, n) {
  if (!e)
    return null;
  if (!t)
    return 1;
  const i = Vn(t);
  return e[n] === t[n] ? i : i + 1;
}
function qn(e) {
  return e?.guillotineState?.myStripParent || null;
}
function Pi(e, t) {
  e?.guillotineState && (e.guillotineState.myStripParent = t);
}
function $i(e, t) {
  typeof t == "number" && e?.guillotineState && e.guillotineState.setPhase(t);
}
function Vn(e) {
  return e?.guillotineState ? e.guillotineState.myPhase : null;
}
function Pe(e) {
  return e?.guillotineState ? e.guillotineState.myStripDirection : null;
}
function zt(e, t) {
  if (e?.guillotineState) {
    if (typeof e.guillotineState.setStripDirection != "function") {
      const n = e.guillotineState || {};
      e.guillotineState = new Gt(n);
    }
    e.guillotineState.setStripDirection(t);
  }
}
function Ti(e, t) {
  if (se(e)) {
    na(t);
    const n = t?.bestScore?.score;
    n && ["currentStripDirection", "myStripDirection", "keyStripDirection", "myPhase"].forEach((r) => {
      n[r] && (t.guillotineState[r] = n[r]);
    });
  }
}
function na(e) {
  const t = e.bestScore;
  t?.myStripParent && Pi(e, t.myStripParent), W(e) && e.shapes.forEach((n) => Pi(n, qn(n)));
}
function ia(e, t) {
  let n = null, i = t.x.get(e.x) || [];
  i = i.filter((a) => {
    const c = a.guillotineState.myStripParent;
    return c && !c.guillotineState?.firstShape ? bn(e, c, "y") : !0;
  }), i.sort((a, c) => a.x - c.x);
  let r = t.y.get(e.y) || [];
  r = r.filter((a) => {
    const c = a.guillotineState.myStripParent;
    return c && !c.guillotineState?.firstShape ? bn(e, c, "x") : !0;
  }), r.sort((a, c) => a.y - c.y);
  const s = i.length ? i[0] : null, o = r.length ? r[0] : null;
  return s && o ? n = s.placementOrder > o.placementOrder ? s : o : n = s || o, n;
}
function vn(e, t) {
  e.x.has(t.x) ? e.x.get(t.x).push(t) : e.x.set(t.x, [t]), e.y.has(t.y) ? e.y.get(t.y).push(t) : e.y.set(t.y, [t]);
}
function sa(e, t) {
  const n = e.x.get(t.x) ?? [], i = n.indexOf(t);
  i !== -1 && (n.splice(i, 1), n.length === 0 && e.x.delete(t.x));
  const r = e.y.get(t.y) ?? [], s = r.indexOf(t);
  s !== -1 && (r.splice(s, 1), r.length === 0 && e.y.delete(t.y));
}
function oa(e, t = !0) {
  const n = [], i = /* @__PURE__ */ new Set();
  for (const r of e.shapes)
    if (W(r)) {
      const s = r.type === "position", o = we(r), a = r.type === "user";
      if (s || a || o && t) {
        if (!i.has(r.autoId)) {
          n.push(r), i.add(r.autoId);
          for (const l of r.shapes || [])
            i.add(l.autoId);
        }
      } else if (r.added && e.stock) {
        r.placeMyShapes(e.stock);
        for (const l of r.shapes)
          i.has(l.autoId) || (l.group.addedAsGroup = r, n.push(l), i.add(l.autoId));
      }
    } else
      i.has(r.autoId) || (n.push(r), i.add(r.autoId));
  return e.shapes = n, z([
    () => A(be(e.shapes)).toBe(!1),
    () => Ui(e.shapes, "removeGroupsFromSegment")
  ]), e;
}
function ks(e, t) {
  if (e.children && Array.isArray(e.children)) {
    if (t(e) === !1)
      return;
    for (const n of e.children)
      ks(n, t);
  }
}
function ra(e, t) {
  const n = Ne(e, !1), i = /* @__PURE__ */ new Map();
  for (const r of e) {
    let s = i.get(r.parentId);
    s || (s = [], i.set(r.parentId, s)), s.push(r);
  }
  for (const r of t) {
    const s = n.filter((l) => l.stockLock.includes(r.parentId));
    if (!s.length)
      continue;
    const o = s.map((l) => l.area), a = o.reduce((l, u) => l + u, 0) / s.length;
    if (!(D.calculateCoefficientOfVariation(o) < this.config.priority.variationThreshold))
      for (const l of s) {
        l.priority || (l.priority = {});
        const u = aa(l, r, a);
        l.priority[r.parentId] = u;
        const h = i.get(l.parentId);
        if (h)
          for (const f of h)
            f.id !== l.id && (f.priority || (f.priority = {}), f.priority[r.parentId] = u);
      }
  }
}
function aa(e, t, n) {
  if (e.isExactFit(t) || e.area >= t.area * 0.9 || e.longSide >= t.longSide * 0.9)
    return 1;
  const i = e.area, r = t.area, s = i / r;
  return i > n ? s : 0;
}
function la(e, t) {
  return e.reduce((n, i) => {
    const r = i.getPriority(t), s = n.getPriority(t);
    return r > s ? i : n;
  });
}
function ca(e, t, n = null) {
  let i;
  if (t?.length) {
    if (!t.length)
      return 1;
    const r = t.reduce((s, o) => s.area > o.area ? s : o);
    i = e.area / r.area;
  } else n && (i = e.area / n.area);
  if (i > 1)
    return 1;
  if (!i)
    throw new Error("no area score found");
  return i;
}
function Rs(e, t, n = "y") {
  if (!e || !t || e[n] === void 0 || !t.area || t.area === 0)
    return 0;
  const i = We(n), r = i === "y" ? "w" : "l", s = t[n] ?? 0, o = t[i] ?? 0, l = (e[n] - s) * t[r] / t.area, f = (e[i] - o) / t[r] * t.aspect * 0.01;
  return 1 - (l + f);
}
function Es(e, t, n = "y") {
  if (!e || !t)
    return 0;
  "grain" in t && t.grain === "w" && (n = We(n));
  const i = n === "y" ? "w" : "l";
  return (e[n] + e[i]) / t[i];
}
function ua(e, t, n) {
  const i = e.getMinSpacing(n.saw);
  return [
    // 0 left to left
    e.x === t.x,
    // 1 left to right
    e.x === t.x + t.l + i,
    // 2 bottom to bottom
    e.y === t.y,
    // 3 bottom to top
    e.y === t.y + t.w + i,
    // 4 right to left
    e.x + e.l === t.x - i,
    // 5 right to right
    e.x + e.l === t.x + t.l,
    // 6 top to bottom
    e.y + e.w === t.y - i,
    // 7 top to top
    e.y + e.w === t.y + t.w
  ];
}
function fa(e, t, n) {
  let i = 0, r = 0;
  if (!e || !t || !n)
    return {
      possibleAlignments: i,
      positiveAlignments: r
    };
  if (e.autoId === t.autoId)
    return {
      possibleAlignments: 0,
      positiveAlignments: 0
    };
  const s = (o, a) => {
    const c = ua(o, a, n);
    i += c.length, r += c.reduce((l, u) => u ? l + 1 : l, 0);
  };
  return W(e) ? e.shapes.forEach((o) => {
    W(t) ? t.shapes.forEach((a) => {
      s(o, a);
    }) : s(o, t);
  }) : W(t) ? t.shapes.forEach((o) => {
    s(e, o);
  }) : s(e, t), { positiveAlignments: r, possibleAlignments: i };
}
function ha(e, t, n) {
  if (!e || !t || !n)
    return [!1, !1, !1, !1];
  if (e.autoId === t.autoId)
    return [!1, !1, !1, !1];
  const i = e.getMinSpacing(n.saw), r = e.x, s = e.x + e.l, o = e.y + e.w, a = e.y, c = t.x, l = t.x + t.l, u = t.y + t.w, h = t.y, f = () => r === l + i && (a >= h && a < u || o <= u && o > h), d = () => s + i === c && (a >= h && a < u || o <= u && o > h), p = () => a === u + i && (r >= c && r < l || s <= l && s > c), w = () => a + i === h && (r >= c && r < l || s <= l && s > c);
  return [
    f(),
    d(),
    p(),
    w()
  ];
}
function da(e, t) {
  return e.l === t.l && e.x === t.x;
}
function pa(e, t) {
  return e.w === t.w && e.y === t.y;
}
function Ms(e, t, n, i = {}) {
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
  const { contact: r = !0, alignment: s = !0, similarDimensions: o = !0, cohesion: a = !0 } = i;
  let c = [];
  r && (c = ha(e, t, n));
  const l = c.filter(Boolean).length;
  if (l > 1)
    throw new Error("number of neighbours should not be greater than one for a single test shape");
  if (l === 0)
    return {
      contactResult: c,
      cohesion: 0,
      alignment: null,
      similarDimensions: 0,
      type: null,
      neighbour: t,
      neighbours: l
    };
  const u = ["lr", "rl", "bt", "tb"], h = c.findIndex(Boolean), f = u[h];
  if (!f)
    throw new Error("no contact type found");
  let d = null, p = null, w = 0;
  if (a && f && (d = ma(e, t, f)), s && (p = fa(e, t, n)), o) {
    const S = f === "rl" || f === "lr", g = f === "tb" || f === "bt", m = pa(e, t), x = da(e, t);
    (S && m || g && x) && (w = x && m ? 1 : 0.5);
  }
  return {
    contactResult: c,
    cohesion: d,
    alignment: p,
    similarDimensions: w,
    type: f,
    neighbour: t,
    neighbours: l
  };
}
function ga(e, t) {
  if (!t)
    throw new Error(`edge - no stock defined for shape ${e.id}`);
  const n = t.bladeWidth, i = e.w / t.w, r = e.l / t.l;
  let s = 0, o = t.l, a = 0, c = t.w;
  return !t.trimmed && t.hasTrim && (s = t.trim.w1, o = t.l - t.trim.w2, a = t.trim.l1, c = t.w - t.trim.l2), [
    // 0 left
    e.x - n <= s ? i : 0,
    // 1 right
    e.x + e.l + n >= o ? i : 0,
    // 2 bottom
    e.y - n <= a ? r : 0,
    // 3 top
    e.y + e.w + n >= c ? r : 0
  ].reduce((h, f) => h + f, 0);
}
function ma(e, t, n) {
  if (!e || !t || !n)
    return 0;
  const i = ya(e, t), r = ki(e), s = ki(t), o = r + s, a = Math.max(i.l * i.w, o), c = Math.min(1, Math.max(0, o / a)), l = Math.min(1, Math.max(0, Sa(e, t, n) || 0)), u = c * 0.7 + l * 0.3;
  return Math.min(1, Math.max(0, u));
}
function ya(e, t) {
  const n = qt(e), i = qt(t), r = Math.min(n.x, i.x), s = Math.min(n.y, i.y), o = Math.max(n.x + n.l, i.x + i.l), a = Math.max(n.y + n.w, i.y + i.w);
  return {
    x: r,
    y: s,
    l: o - r,
    w: a - s
  };
}
function qt(e) {
  if (W(e)) {
    let t = 1 / 0, n = 1 / 0, i = -1 / 0, r = -1 / 0;
    return e.shapes.forEach((s) => {
      t = Math.min(t, s.x), n = Math.min(n, s.y), i = Math.max(i, s.x + s.l), r = Math.max(r, s.y + s.w);
    }), {
      x: t,
      y: n,
      l: i - t,
      w: r - n
    };
  }
  return {
    x: e.x,
    y: e.y,
    l: e.l,
    w: e.w
  };
}
function ki(e) {
  return W(e) ? e.shapes.reduce((t, n) => t + n.area, 0) : e.area;
}
function Sa(e, t, n) {
  const i = qt(e), r = qt(t);
  if (n === "lr" || n === "rl") {
    const s = Math.max(i.w, r.w);
    if (s === 0)
      return 0;
    const o = Math.min(i.w, r.w) / s;
    return Math.max(0, o);
  }
  if (n === "tb" || n === "bt") {
    const s = Math.max(i.l, r.l);
    if (s === 0)
      return 0;
    const o = Math.min(i.l, r.l) / s;
    return Math.max(0, o);
  }
  return 0;
}
async function xa(e, t, n, i) {
  return await je.runSpecificStrategy.call(this, {
    shapes: e,
    container: t,
    firstShape: n,
    firstShapeRotation: i
  });
}
function Ri(e, t, n, i = null, r = null, s = null, o = null, a = null) {
  if (!i)
    throw new Error("shapePosition was not passed any placed shapes");
  if (!r)
    throw new Error("shapePosition was not passed any unplaced shapes");
  if (se(t) ? wa(e, t, n, i, o, r) : As(e, t, n, i, s), a?.constraints) {
    const c = {
      x: e.x ?? 0,
      y: e.y ?? 0,
      l: e.l ?? 0,
      w: e.w ?? 0
    }, l = i.map((h) => ({
      x: h.x ?? 0,
      y: h.y ?? 0,
      l: h.l ?? 0,
      w: h.w ?? 0
    })), u = lr(c, { placed: l }, a);
    u > 0 && e.score && (e.score.total = Math.max(0, e.score.total - u));
  }
}
function wa(e, t, n = null, i = [], r = null, s = []) {
  e.resetScore();
  const o = {
    compression: 0,
    fill: 0,
    similarDimensions: 0,
    fenceConsistency: 0,
    sameStripBonus: 0,
    exactStripFill: 0,
    cohesion: 0,
    stripCohesion: 0,
    area: 0,
    total: 0,
    cutDirection: t.cutDirection
  }, a = t.cutPreference, c = t.cutDirection, l = t.getStock.bladeWidth, { cutAxis: u } = xs(c), h = ia(e, r);
  if (!h)
    return !1;
  const f = Pe(h);
  let d = f;
  const p = f === "l" ? "w" : "l";
  h[p] !== e[p] && (d = J(f));
  const w = Ts(e, h, p);
  if (t.saw.guillotineOptions.maxPhase && w > t.saw.guillotineOptions.maxPhase)
    return !1;
  const S = Pe(h) ?? t.cutDirection;
  if (!S)
    throw new Error("keyDimension is not defined");
  const g = qn(h);
  if (g) {
    const b = We(Ue(Pe(g))), I = bn(e, g, b);
    if (g.guillotineState.myPhase <= 2 && !I)
      return !1;
  }
  let m = !1;
  t.firstShape && (m = e[u] > t.firstShape[u]);
  const x = {
    lr: [],
    bt: [],
    tb: [],
    rl: []
  };
  for (const b of i) {
    const I = Ms(e, b, t, {
      contact: !0,
      cohesion: !!n.cohesion,
      alignment: !!n.alignment,
      similarDimensions: !!n.similarDimensions
    });
    I.type && (x[I.type].push(b), "cohesion" in o && n.cohesion && m && (o.cohesion += I.cohesion), "similarDimensions" in o && n.similarDimensions && (o.similarDimensions += I?.similarDimensions ? I.similarDimensions : 0), "fenceConsistency" in o && n.fenceConsistency && (a === "w" ? I.type === "lr" && I.neighbour.l === e.l && I.neighbour.y === e.y && (o.fenceConsistency = 1) : a === "l" && I.type === "bt" && I.neighbour.w === e.w && I.neighbour.x === e.x && (o.fenceConsistency = 1)));
  }
  if (t.cutDirection) {
    const b = t.cutDirection;
    if (b === "w") {
      const I = e.y === t.y, C = x.bt && x.bt.length > 0;
      if (!I && !C)
        return !1;
    } else if (b === "l") {
      const I = e.x === t.x, C = x.lr && x.lr.length > 0;
      if (!I && !C)
        return !1;
    }
  }
  if ("exactStripFill" in o && n.exactStripFill && h) {
    const b = J(Pe(h)), I = e[b] + l;
    o.exactStripFill = I >= h[b] && I < h[b] + l ? 1 : 0;
  }
  if ("compression" in o && n.compression) {
    const b = S === "l" ? "y" : "x";
    o.compression = Rs(e, t, b);
  }
  if ("fill" in o && n.fill) {
    const b = S === "l" ? "y" : "x";
    o.fill = Es(e, t, b);
  }
  if (o.cohesion = Math.max(0, o.cohesion), "sameStripBonus" in o && n.sameStripBonus && t.firstShape) {
    const b = Pe(h);
    if (!m)
      o.sameStripBonus = 0;
    else if (b === "w" && x?.bt?.length) {
      const I = Je(x.bt, "x"), C = I.x + I.l;
      e.x + e.l > C && (o.sameStripBonus = 0, o.cohesion = 0);
    } else if (b === "l" && x?.lr?.length) {
      const I = Je(x.lr, "y"), C = I.y + I.w;
      e.y + e.w > C && (o.sameStripBonus = 0, o.cohesion = 0);
    } else
      o.sameStripBonus = 1;
  }
  if (n.aspectRatio) {
    const b = e.aspect, I = Pe(h), C = n.aspectRatioThreshold ?? 0.1;
    b < C ? e[I] > e[J(I)] && (o.aspectRatio = 1) : o.aspectRatio = 0;
  }
  if (n.stripCohesion && h && i.length > 0) {
    const b = Pe(h), I = J(b), C = Ue(I), P = h[C], E = P + h[I], M = e[I], X = n.stripCohesionTolerance ?? 0;
    let O = 0;
    for (let G = 0; G < i.length; G++) {
      const T = i[G];
      if (T === e || T === h)
        continue;
      const $ = T[C], L = $ + T[I];
      if ($ < P - 0.5 || L > E + 0.5)
        continue;
      const R = T[I];
      (X > 0 ? Math.abs(R - M) <= X : R === M) && O++;
    }
    O > 0 && (o.stripCohesion = Math.min(1, O / 4));
  }
  if (n.area && s && s.length > 0) {
    let b = 0;
    for (const I of s) {
      const C = I.l * I.w;
      C > b && (b = C);
    }
    b > 0 && (o.area = e.l * e.w / b);
  }
  const y = { ...o };
  Object.keys(o).forEach((b) => {
    if (typeof o[b] == "number") {
      const I = o[b];
      I < 0 ? y[b] = I : y[b] = n[b] ? I * n[b] : 0;
    }
  }), e.score = y;
  let v = 0;
  for (const b of Object.values(e.score))
    typeof b == "number" && (v += b);
  if (e.score.total = v, e.score.total < 0 && (e.score.total = 0), isNaN(e.score.total))
    throw new Error("score is not a number");
  return e.score.cutDirection = c, e.score.myStripParent = h, e.score.myStripDirection = d, e.score.myPhase = w, e.score.total > (e?.bestScore?.total || 0) && e.setBestScore(e), !0;
}
function As(e, t, n, i, r) {
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
  if ("edge" in s && n.edge) {
    let h = 0, f = 0;
    !t.trimmed && t.hasTrim && (h = t.trim.w1, f = t.trim.l1), (e.x === h || e.y === f) && (s.edge = ga(e, t));
  }
  if ("fill" in s && n.fill) {
    const h = t?.saw?.efficiencyOptions?.primaryCompression ? Ue(t?.saw?.efficiencyOptions?.primaryCompression) : "y";
    s.fill = Es(e, t, h);
  }
  if ("compression" in s && n.compression) {
    const h = t?.saw?.efficiencyOptions?.primaryCompression ? Ue(t?.saw?.efficiencyOptions?.primaryCompression) : "y";
    s.compression = Rs(e, t, h);
  }
  let o = 0, a = 0;
  const c = {
    lr: !1,
    rl: !1,
    bt: !1,
    tb: !1
  };
  for (const h of i) {
    const f = Ms(e, h, t, {
      contact: !0,
      cohesion: !!n.cohesion,
      alignment: !!n.alignment,
      similarDimensions: !!n.similarDimensions
    });
    f.type && (c[f.type] = !0, n.alignment && f.alignment && (a += f.alignment.positiveAlignments, o += f.alignment.possibleAlignments), n.cohesion && (s.cohesion += f.cohesion), n.similarDimensions && (s.similarDimensions += f?.similarDimensions ? f.similarDimensions : 0));
  }
  s.similarDimensions /= 4, o === 0 ? s.alignment = 0 : s.alignment = a / o, n.exactFit && (e.l === t.l || e.w === t.w) && (s.exactFit = 1), n.area && (s.area = ca(e, i, t));
  const l = { ...s };
  Object.keys(s).forEach((h) => {
    if (typeof s[h] == "number") {
      const f = s[h];
      l[h] = n[h] ? f * n[h] : 0;
    }
  }), e.score = l;
  let u = 0;
  for (const h of Object.values(e.score))
    typeof h == "number" && (u += h);
  if (e.score.total = u, isNaN(e.score.total)) {
    const h = Object.fromEntries(Object.entries(e.score).filter(([, f]) => f === null || ["number", "string", "boolean"].includes(typeof f)));
    throw new Error("thisShape.score.total is not a number: " + JSON.stringify(h));
  }
  e.score?.total > (e?.bestScore?.total || 0) && e.setBestScore(e, r);
}
function De(e, t, n) {
  const i = this.shapeList.reduce((G, T) => T.added ? G : ++G, 0);
  let r, s, o;
  const a = t.getStock;
  if (!a)
    return !1;
  const c = e, l = ie(t) ? de(c, a) : e.filter((G) => G.added);
  let u;
  l.length && (u = la(l, a)), u && !u.getPriority(a) && (u = null);
  const h = l.length, f = Math.max(...l.map((G) => G.x + G.l)), d = Math.max(...l.map((G) => G.y + G.w));
  let p = 0, w = null, S = null, g;
  if (n || (n = e.find((G) => G.x === (t.x || 0) && G.y === (t.y || 0))), !n)
    return !1;
  const m = n.area;
  let x = null;
  const y = t.area, v = l.reduce((G, T) => G + T.area, 0);
  if (ie(t)) {
    if (t.cutType === "efficiency" ? (g = t.primaryCompression ?? "w", p = nn(l, g, a.bladeWidth), x = n?.bestScore?.total, p = p / t[g === "l" ? "l" : "w"]) : (g = t.cutPreference === "l" ? "x" : "y", p = nn(l, g, a.bladeWidth), p = p / t[g === "x" ? "l" : "w"]), t.cutType === "guillotine" && (r = e.filter((G) => G.added && Vn(G) === 1).length), o = v / y, Oe() && z([() => A().toBeLessThanOrEqual(1)]), t?.saw?.stockType === "roll") {
      const G = Je(l, "x");
      s = G.x + G.l;
    }
  } else if (se(t)) {
    g = a.cutPreference === "l" ? "x" : "y", p = nn(l, g, a.bladeWidth), p = p / t[g === "x" ? "w" : "l"];
    const G = J(a.cutPreference), T = G === "l" ? "x" : "y";
    if (w = a[G] - (n[G] + n[T] + a.bladeWidth), S = n[G], t.cutPreference === "flex")
      throw new Error("cut preference is set to flex, it should be l or w at this point");
    o = v / y;
  } else
    o = v / y;
  const b = l.reduce((G, T) => G + (T?.bestScore?.total ?? 0), 0), I = fe(e, t), C = fe(e, a), P = I.length + h, E = C.length + h, M = C.reduce((G, T) => G + T.area, v), X = l.map((G) => G.compress());
  return {
    type: "algo",
    stockID: a.id,
    stock: a,
    container: t,
    firstShape: n,
    firstShapeRotation: n.rot,
    topPriorityShape: u ? u.id : null,
    cutPreference: a.cutPreference,
    cutType: a.saw.cutType,
    segmentCutDirection: se(t) ? t.cutDirection : null,
    // Result contains individual shapes (groups have already called placeMyShapes)
    shapes: X,
    score: {
      efficiency: o,
      totalShapeArea: v,
      totalShapesPlaced: h,
      totalShapeScore: b,
      firstRowLength: p,
      // firstShapeFill,
      firstShapeArea: m,
      firstShapeScore: x,
      containerAvailableShapes: P,
      stockAvailableShapes: E,
      stockAvailableShapeArea: M,
      totalUnplacedShapes: i,
      rollLength: s || null,
      maxX: f,
      maxY: d,
      stripShapes: r || null,
      stripSize: S || null,
      remainingStripSpace: w || null,
      uniqueStock: this.uniqueStock.length
    }
  };
}
function ba(e, t, n = "sheet") {
  if (e && e?.length) {
    if (e.length === 1)
      return e[0];
    switch (e = e.filter((i) => i.score?.efficiency), n) {
      case "sheet":
        switch (t) {
          case "tidy":
            e.sort(Ca.bind(this));
            break;
          case "strip":
            e.sort(Ei.bind(this));
            break;
          case "guillotine":
          case "beam":
            e.sort(Pa.bind(this));
            break;
          default:
            e.sort($a.bind(this));
            break;
        }
        break;
      case "linear":
        e.sort(Ia);
        break;
      case "roll":
        switch (t) {
          case "guillotine":
          case "strip":
            e.find((i) => i.score.containerAvailableShapes === 0) && (e = e.filter((i) => i.score.containerAvailableShapes === 0)), e.sort(Ei);
            break;
          case "efficiency": {
            e.sort(va);
            break;
          }
        }
        break;
    }
    return e[0];
  }
}
function Ia(e, t) {
  return t.score.efficiency - e.score.efficiency;
}
function Vt(e, t) {
  const { totalShapesPlaced: n = 0, totalShapeArea: i = 0, stockAvailableShapes: r = 1, stockAvailableShapeArea: s = 0, containerAvailableShapes: o = 0, efficiency: a = 0, maxX: c = 0, maxY: l = 0 } = e.score, u = r || 1, h = s > 0 ? i / s : n / u, f = t === "stock" ? 0.65 : 0.35, d = 1 - f;
  let p = h * f + a * d;
  const w = t === "stock" && o === 0 || n === r;
  if (w && (p += 0.15), t === "stock" && w && e.stock) {
    const S = e.cutPreference, g = e.stock, m = S === "l" ? l : c, x = S === "l" ? g.w : g.l;
    if (x > 0 && m > 0) {
      const y = 1 - m / x;
      p += y * 0.1;
    }
  }
  return p;
}
function Ei(e, t) {
  if (z([() => A(e.score).toBeDefined(), () => A(t.score).toBeDefined()]), !e.score || !t.score)
    return 0;
  const n = e.score.totalShapesPlaced === e.score.stockAvailableShapes, i = t.score.totalShapesPlaced === t.score.stockAvailableShapes, r = e.score.maxY || 1, s = t.score.maxY || 1, o = e.score.totalShapesPlaced || 1, a = t.score.totalShapesPlaced || 1, c = r / o, l = s / a;
  if (n && !i) {
    const f = l < c * 0.5, d = s < r * 0.5;
    return f && d ? 1 : -1;
  }
  if (i && !n) {
    const f = c < l * 0.5, d = r < s * 0.5;
    return f && d ? -1 : 1;
  }
  const u = Vt(e, "strip"), h = Vt(t, "strip");
  return u > h ? -1 : h > u ? 1 : 0;
}
function Ca(e, t) {
  return e.score[this.config.successMetric] > t.score[this.config.successMetric] ? -1 : e.score[this.config.successMetric] < t.score[this.config.successMetric] ? 1 : e.score.firstShapeFill > t.score.firstShapeFill ? -1 : e.score.firstShapeFill < t.score.firstShapeFill ? 1 : e.score.firstRowLength > t.score.firstRowLength ? -1 : e.score.firstRowLength < t.score.firstRowLength ? 1 : e.score.totalShapeScore > t.score.totalShapeScore ? -1 : e.score.totalShapeScore < t.score.totalShapeScore ? 1 : 0;
}
function Ds(e, t) {
  if (e.cutType === "guillotine" && t.cutType === "guillotine") {
    if (e.stock.cutPreference === t.stock.cutPreference) {
      const n = e.stock.cutPreference === "l" ? "maxY" : "maxX";
      if (e.score[n] < t.score[n])
        return -1;
      if (e.score[n] > t.score[n])
        return 1;
    }
    return 0;
  } else if (e.cutType === "efficiency" && t.cutType === "efficiency") {
    if (e.stock.saw.efficiencyOptions.primaryCompression === t.stock.saw.efficiencyOptions.primaryCompression) {
      const n = e.stock.saw.efficiencyOptions.primaryCompression === "w" ? "maxY" : "maxX";
      if (e.score[n] < t.score[n])
        return -1;
      if (e.score[n] > t.score[n])
        return 1;
    }
    return 0;
  }
  return 0;
}
function va(e, t) {
  return e.score.efficiency > t.score.efficiency ? -1 : e.score.efficiency < t.score.efficiency ? 1 : e.type !== "evo" && t.type === "evo" ? -1 : e.type === "evo" && t.type !== "evo" ? 1 : e.shapes?.length < t.shapes?.length ? -1 : e.shapes?.length > t.shapes?.length ? 1 : e.score.totalShapeScore > t.score.totalShapeScore ? -1 : e.score.totalShapeScore < t.score.totalShapeScore ? 1 : Le.ID(e.stock, t.stock);
}
function Pa(e, t) {
  const n = Vt(e, "stock"), i = Vt(t, "stock");
  if (n > i)
    return -1;
  if (i > n || e.type === "allocated strips" && t.type !== "allocated strips")
    return 1;
  if (e.type !== "allocated strips" && t.type === "allocated strips")
    return -1;
  if ((e.score.containerAvailableShapes === 0 || t.score.containerAvailableShapes === 0) && e.cutPreference === t.cutPreference) {
    const s = e.cutPreference === "l" ? "maxY" : "maxX";
    if (e.score[s] < t.score[s])
      return -1;
    if (e.score[s] > t.score[s])
      return 1;
    if (e.score.stripShapes < t.score.stripShapes)
      return -1;
    if (e.score.stripShapes > t.score.stripShapes)
      return 1;
  }
  const r = Ds(e, t);
  return r !== 0 ? r : e.score.firstShapeArea > t.score.firstShapeArea ? -1 : e.score.firstShapeArea < t.score.firstShapeArea ? 1 : Le.ID(e.stock, t.stock);
}
function $a(e, t) {
  const n = e.score?.totalUnplacedShapes, i = t.score?.totalUnplacedShapes;
  if (e.stock.id !== t.stock.id && (n === 0 || i === 0) && !(n === 0 && i === 0)) {
    const s = n === 0 ? e : t, o = n === 0 ? t : e, a = s.stock, c = o.stock, l = a.area - s.score.totalShapeArea, u = c.area;
    return s.score.totalShapeArea - o.score.totalShapeArea < u && u < l ? c.id === e.stock.id ? -1 : 1 : c.id === e.stock.id ? 1 : -1;
  }
  if (e.score[this.config.successMetric] > t.score[this.config.successMetric])
    return -1;
  if (e.score[this.config.successMetric] < t.score[this.config.successMetric])
    return 1;
  const r = Ds(e, t);
  return r !== 0 ? r : e.type !== "evo" && t.type === "evo" ? -1 : e.type === "evo" && t.type !== "evo" ? 1 : e.score.firstShapeArea > t.score.firstShapeArea ? -1 : e.score.firstShapeArea < t.score.firstShapeArea ? 1 : e.score.totalShapeScore > t.score.totalShapeScore ? -1 : e.score.totalShapeScore < t.score.totalShapeScore ? 1 : Le.ID(e.stock, t.stock);
}
function Bs(e) {
  if (!e)
    return e;
  const t = { ...e };
  return e.stock && (t.stock = e.stock), e.resultKey !== "bestPartialResult" && e.firstShape && "toData" in e.firstShape && (t.firstShape = e.firstShape.toData(ft.Compressed)), e.shapes?.length && (t.shapes = e.shapes.map((n) => n && "toData" in n ? n.toData(ft.Compressed) : n)), "stripShapes" in e && e.stripShapes?.length && (t.stripShapes = e.stripShapes.map((n) => n && "toData" in n ? n.toData(ft.Compressed) : n)), "root" in e && e.root && "toData" in e.root && (t.root = e.root.toData(ft.Compressed)), "container" in e && e.container && "toData" in e.container && (ie(e.container) ? t.container = e.container : t.container = e.container.toData(ft.Compressed)), t;
}
function jn(e, t) {
  return e?.stock ? ie(e.stock) ? e.stock : t.find((n) => n.autoId === e.stock.autoId) || null : null;
}
async function Se(e, t = null) {
  if (e.score?.efficiency === 0 && e.shapes?.length > 0) {
    const o = e.shapes.filter((a) => a.added);
    if (o.length > 0) {
      const a = o.length / e.shapes.length;
      e.score.efficiency = a;
    }
  }
  this?.job && this.job.updateProgress({
    socketId: this.socketId,
    type: "algo",
    message: "result"
  });
  const n = t === "strip" ? "bestPartialResult" : "bestResult";
  e.resultKey = n;
  const i = this[n], r = e?.firstShape;
  if (Oe()) {
    const o = e.score.efficiency, a = W(r) ? `${r.id}: [${r?.shapes?.map((l) => l.parentId).join(", ")}]` : r?.id, c = [
      {
        property: "Key",
        value: n
      },
      {
        property: "Type",
        value: e.type
      },
      {
        property: "Stock ID",
        value: e.stock.id
      },
      ...e.container && se(e.container) ? [{
        property: "Segment ID",
        value: e.container.id
      }] : [],
      ...e.container && se(e.container) ? [{
        property: "Segment coords",
        value: `${e.container.x},${e.container.y}`
      }] : [],
      ...e.container ? [{
        property: "Container dimensions",
        value: `${e.container.l}x${e.container.w}`
      }] : [],
      {
        property: "First shape",
        value: a
      },
      {
        property: "First shape rotation",
        value: r?.rot ?? "N/A"
      },
      {
        property: "Efficiency",
        value: o.toFixed(4)
      },
      {
        property: "Strip batch",
        value: e?.stripShapeBatch ?? "N/A"
      },
      {
        property: "Shapes",
        value: e?.shapes?.map((l) => l.id).join() ?? "N/A"
      }
    ];
    B("results", `Recording ${n}`, null, c);
  }
  let s = e;
  if (i && (s = ba.call(this, [e, i], t || e.stock.cutType, e.stock?.saw?.stockType), s || (B("results", "WARNING: findWinner returned undefined, using current result as winner"), s = e), B("results", `${s.type} winner for stock ${s.stock.id} eff. ${s.score.efficiency}, firstShape [${r?.id || "N/A"}], rot ${r?.rot || "N/A"}, batch ${s?.stripShapeBatch ?? "N/A"}`)), !i || !s?.processed) {
    e.processed = !0;
    const o = Bs(s);
    this[n] = o;
  }
  Ta(s.shapes, s.stock);
}
function Ta(e, t) {
  if (!e?.length)
    return;
  const n = e.filter((i) => W(i) && i.type !== "user");
  z([
    () => A(n.every((i) => W(i))).toBe(!0),
    () => A(n.every((i) => i.type !== "user")).toBe(!0)
  ], "expandTemporaryGroups: All filtered groups should be temporary (non-user) groups");
  for (const i of n) {
    const r = i.shapes || [], s = i.type;
    if (i.added)
      try {
        i.placeMyShapes(t), z([
          () => A(r.every((o) => o.group?.addedAsGroup === i)).toBe(!0)
        ], `expandTemporaryGroups: All children of ${s} group should have addedAsGroup reference`);
      } catch (o) {
        B("errors", `Error placing shapes for temporary group ${i.id} during expansion: ${o.message}`);
      }
    i.destroy(), z([
      () => A(r.every((o) => o.group?.reference === null || o.group?.reference === void 0)).toBe(!0),
      () => A(r.every((o) => o.group?.inGroup === !1)).toBe(!0)
    ], `expandTemporaryGroups: Children of ${s} group should be released after destroy`);
  }
}
function rt({ bestResult: e, shapeList: t, relevantStock: n = [], stockList: i = [], resetShapes: r = null, groupList: s = null }) {
  B("results", `updating shapes from ${e.resultKey} / ${e.type} - stock ${e.stock.id}, FS: ${e.firstShape.id}`), n.length && n.filter((u) => u.autoId !== e?.stock?.autoId).forEach((u) => {
    const h = t.filter((f) => f.added && f?.stock?.autoId === u.autoId);
    h.length && (r ? r(h, !1, !0, !1) : h.forEach((f) => {
      f.added = !1, f.reset();
    }));
  });
  const o = [];
  let a = i.length ? i.find((u) => u.autoId === e.stock?.autoId) : null;
  if (a && e.stock && e.stock.used && (a.used = !0), !a && e.stock && (a = e.stock, a.saw && !gt(a.saw))) {
    B("results", `⚠️  Found serialized saw in bestResult.stock ${a.autoId}, attempting to restore from stockList`);
    const u = i.find((h) => h.autoId === a.autoId || h.parentId === a.parentId && gt(h.saw));
    u && gt(u.saw) ? (B("results", `✅ Restored live saw instance from stock ${u.autoId}`), a.saw = u.saw) : B("results", `❌ Could not restore live saw instance for stock ${a.autoId}`);
  }
  a || (a = e.stock);
  for (const u of e.shapes)
    if (un(u) || mo(u)) {
      const h = t.find((f) => f.autoId === u.autoId);
      if (!h) {
        Oe() && (console.warn(`[updateShapeListFromBestResult] Shape ${u.autoId || u.id} from result not found in shapeList!`), console.warn(`  Available autoIds in shapeList: ${t.slice(0, 5).map((f) => f.autoId).join(", ")}...`));
        continue;
      }
      if (Oe() && (fn(h) || W(h) || console.warn(`Shape ${u.autoId} in shapeList is not a live instance!`)), le(h)) {
        const { shapes: f, ...d } = u;
        h.update({ ...d, validationMode: "none" });
      } else
        h.update({ ...u, validationMode: "none" });
      fn(h) && u.group && u.group.inGroup !== void 0 && (h.group.inGroup = u.group.inGroup), h.stock = a, o.push(h);
    }
  z([
    () => A(e.shapes.every((u) => {
      if (!un(u))
        return !0;
      const h = t.find((f) => f.autoId === u.autoId);
      return !(!h || !h.added || h.x !== u.x || h.y !== u.y || h.l !== u.l || h.w !== u.w);
    })).toBe(!0)
  ]), Oe() && (o.every((h) => t.find((f) => f === h)) || console.warn("Some updated shapes are not exact references from shapeList - possible instance copying!")), _i({
    shapes: o
  }, "updateShapeListFromBestResult");
  let c = [];
  const l = e.shapes.filter((u) => yo(u));
  if (B("results", `Best result contains ${e.shapes.length} total items`), B("results", `Found ${l.length} serialized groups to recreate:`), l.forEach((u) => {
    B("results", `  - Group ${u.id}: type=${u.type}, shapes=${u.shapes?.length || 0}, added=${u.added}, x=${u.x}, y=${u.y}`);
  }), l.length > 0 && (B("results", `Recreating ${l.length} groups from bestResult`), c = So(l, t, a), B("results", `Successfully recreated ${c.length} groups:`), c.forEach((u) => {
    B("results", `  - Group ${u.id}: type=${u.type}, shapes=${u.shapes?.length || 0}, added=${u.added}, x=${u.x}, y=${u.y}`);
  }), c.forEach((u) => {
    u.shapes && Array.isArray(u.shapes) && (u.shapes.forEach((f) => {
      V(f) && (f.group.reference = u, f.group.inGroup = !0, u.added && (f.group.addedAsGroup = u));
    }), z([
      () => A(u.shapes.every((f) => !V(f) || f.group?.reference === u)).toBe(!0)
    ], `updateShapeListFromBestResult: All children of group ${u.id} (type=${u.type}) should have correct reference`), u.added && z([
      () => A(u.shapes.every((f) => !V(f) || f.group?.addedAsGroup === u)).toBe(!0),
      () => A(u.shapes.every((f) => !V(f) || typeof f.group?.addedAsGroup != "string")).toBe(!0)
    ], `updateShapeListFromBestResult: addedAsGroup should be Group reference for group ${u.id} (type=${u.type})`));
    const h = u.added && typeof u.placeMyShapes == "function" && u.type !== "position";
    if (u.added && u.type === "position" && z([
      () => A().toBe(!1)
    ], `updateShapeListFromBestResult: Position group ${u.id} should NOT call placeMyShapes`), h)
      try {
        u.placeMyShapes(a);
      } catch (f) {
        throw console.error("[ERROR] placeMyShapes failed for group " + u.id + ":", f.message), console.error(`  Group details: type=${u.type}, x=${u.x}, y=${u.y}, rot=${u.rot}`), console.error("  Child shapes:"), u.shapes?.forEach((d) => {
          console.error(`    ${d.id}: added=${d.added}, x=${d.x}, y=${d.y}, rot=${d.rot}, l=${d.l}, w=${d.w}`);
        }), f;
      }
    Oe() && (u.shapes?.forEach((f) => {
      const d = t.find((p) => p.autoId === f.autoId);
      d !== f ? (console.error(`[ERROR] Group ${u.id} child shape ${f.id} is NOT the same instance as in shapeList!`), console.error(`  Group shape: added=${f.added}, x=${f.x}, y=${f.y}`), console.error(`  shapeList shape: added=${d?.added}, x=${d?.x}, y=${d?.y}`)) : f.group?.reference !== u && (console.error(`[ERROR] Group ${u.id} child shape ${f.id} has incorrect group.reference!`), console.error(`  Expected: ${u.id}, Got: ${f.group?.reference?.id || "null"}`));
    }), B("results", `Successfully recreated, placed, and linked ${c.length} groups`));
  })), s && c.length)
    for (const u of c)
      s.some((h) => h.autoId === u.autoId) || s.push(u);
  return { updatedShapes: o, groups: c };
}
async function it(e, t, n, i = null) {
  if (z([
    () => A(ie(t)).toBe(!0),
    () => {
      if (n.length)
        return A(V(n[0]) || le(n[0])).toBe(!0);
    }
  ]), z([() => A(be(n)).toBe(!1)]), Nn(), i || (i = Gs.call(this, t, n)), !i)
    throw new Error("no root segment created");
  if (this.config.sample.enable) {
    if (await Ra.call(this, e, t, i), e.secondRun || !this.bestResult)
      return;
    rt({
      bestResult: this.bestResult,
      shapeList: this.shapeList,
      stockList: this.stockList,
      resetShapes: this.resetShapes?.bind(this),
      groupList: this.groupList
    }), await Mi.call(this, {
      options: e,
      shapes: n,
      stock: t
      // root
    }), Xs.call(this, n, i);
  }
  if (this.config.guillotine.stripShapes.allocation && n.length > 1) {
    if (await ka.call(this, e, t, n, i), !this.bestResult)
      return;
    rt({
      bestResult: this.bestResult,
      shapeList: this.shapeList,
      stockList: this.stockList,
      resetShapes: this.resetShapes?.bind(this),
      groupList: this.groupList
    }), await Mi.call(this, {
      options: e,
      shapes: n,
      stock: t,
      root: i
    });
  }
  await Ba.call(this, t, n);
}
async function Mi({ options: e, shapes: t, stock: n, root: i }) {
  const r = de(this.shapeList, n), s = Na.call(this, jn(this.bestResult, this.stockList), r);
  F("guillotine.refinement.ordering", !!s, { stock: n.id, cutType: n.cutType, added: r.length }, () => ({ placed: r.map((a) => ({ id: a.id, x: a.x, y: a.y, l: a.l, w: a.w })) })), s && await Ea.call(this, e, r, t, n, i);
  const o = /* @__PURE__ */ new Map();
  for (const a of this.shapeList)
    o.set(a.id, a);
  this.bestResult.shapes.forEach((a) => {
    const c = o.get(a.id);
    c && (a.x = c.x, a.y = c.y, a.placementOrder = c.placementOrder);
  });
}
async function Ai(e, t, n) {
  z([
    () => A(ie(t)).toBe(!0),
    () => {
      if (n.length)
        return A(V(n[0])).toBe(!0);
    }
  ]), t.saw.cutPreference = "l", await it.call(this, e, t, n);
  const i = Gs.call(this, t, n);
  if (Xs.call(this, n, i), t.saw.cutPreference = "w", await it.call(this, e, t, n), !this.bestResult)
    return !1;
  t.saw.cutPreference = this.bestResult.cutPreference;
}
async function ka(e, t, n, i) {
  if (!this.config.guillotine.stripShapes.allocation || (z([
    () => A(ie(t)).toBe(!0),
    () => A(n.length ? V(n[0]) : !0).toBe(!0),
    () => A(se(i)).toBe(!0)
  ]), t?.saw?.stockType === "roll"))
    return !1;
  const r = Za.call(this, i, this.uniqueStock, this.stockList);
  if (r === !1)
    return !1;
  for (let s = 0; s < r; s++)
    this.resetShapes(n), i.shapes = n, z([
      () => A(be(i.shapes, `root segment batch ${s} stock ${t.id}`)).toBe(!1),
      () => A(n.length).toBe(i.shapes.length),
      () => A(n.some((o) => Lt(o) || we(o))).toBe(!1)
    ]), B("guillotine", `running strip shape batch ${s} for stock ${t.id}`), await Kt.call(this, e, t, i, s), z([() => A(be(i.shapes)).toBe(!1)]);
  return !0;
}
async function Ra(e, t, n) {
  B("guillotine", `running basic first shape sample for stock ${t.id}`), z([
    () => A(ie(t)).toBe(!0),
    () => A(se(n)).toBe(!0),
    () => A(n?.shapes?.length).toBeGreaterThan(0)
  ]), await Kt.call(this, e, t, n);
}
async function Kt(e, t, n, i = null, r = null, s = null) {
  if (z([
    () => A(ie(t)).toBe(!0),
    () => A(se(n)).toBe(!0),
    () => {
      if (r)
        return A(V(r)).toBe(!0);
      if (i !== null)
        return A().toBeTypeOf("number");
      if (s !== null)
        return A().toBe(!0);
    }
  ]), i === null)
    await yt.call(this, e, t, n, r, s, null);
  else if (await yt.call(this, e, t, n, void 0, void 0, i) === !1)
    return !1;
}
async function Ea(e, t, n, i, r) {
  z([
    () => A(ie(i)).toBe(!0),
    () => {
      if (n.length)
        return A(V(n[0]) || le(n[0])).toBe(!0);
      if (t.length)
        return A(V(t[0] || le(n[0]))).toBe(!0);
    }
  ]), B("guillotine", `running refinement for stock ${i.id}`);
  try {
    await Ma.call(this, e, t, n, i, r);
  } catch (s) {
    console.error("issue with runSecondPass", s.message);
  }
}
async function Ma(e, t, n, i, r) {
  if (z([
    () => A(ie(i)).toBe(!0),
    () => {
      if (n.length)
        return A(V(n[0]) || le(n[0])).toBe(!0);
      if (t.length)
        return A(V(t[0]) || le(n[0])).toBe(!0);
    }
  ]), F("guillotine.second-pass.enabled", !!this.config.guillotine.secondPass, { stock: i.id }), !this.config.guillotine.secondPass)
    return !1;
  const s = Wn(this.config, this.saw);
  F("guillotine.second-pass.head-cuts", s, { stock: i.id });
  const o = i.cutType === "beam";
  if (!s && !o)
    return !1;
  B("guillotine", `running second pass for stock ${i.id}`), s && await Fa.call(this, i, n, t, r), await Ya.call(this, i, n, t, r);
  const a = de(n, i), c = De.call(this, this.shapeList, i);
  c && i.id === jn(this.bestResult, this.stockList)?.id && a.length - t.length > 0 && (B("guillotine", `runSecondPass added ${a.length - t.length} shape(s) to stock ${i.id}, new total ${a.length}`), c.secondPass = !0, await Se.call(this, c));
}
function Xs(e, t) {
  const n = [];
  if (this.groupList && this.groupList.length > 0)
    for (const s of this.groupList)
      s.added ? n.push(s) : s.reset();
  for (let s = e.length; s--; ) {
    const o = e[s];
    W(o) && e.splice(s, 1), o.reset();
  }
  this.groupList && (this.groupList.length = 0, this.groupList.push(...n)), this.counters.placement = 0, this.bestPartialResult = null, Nn(), t.reset(e);
  const i = t.shapes.filter((s) => V(s)), r = t.shapes.filter((s) => W(s));
  B("reset", "[RESET] RESET ROOT SEGMENT BETWEEN CALCULATIONS", null, [
    {
      type: "Root shapes",
      count: i.length,
      added: i.filter((s) => s.added).length,
      ids: i.map((s) => s.id).join(", ")
    },
    {
      type: "Root groups",
      count: r.length,
      added: r.filter((s) => s.added).length,
      ids: r.map((s) => s.id).join(", ")
    }
  ]);
}
async function Aa(e, t, n, i) {
  z([
    () => A(ie(t)).toBe(!0),
    () => A(se(n)).toBe(!0)
  ]);
  const r = Ne(n.shapes, !1, !0), s = this.stockList.findIndex((u) => u.id === t.id);
  let o = null;
  s > 0 && (o = this.stockList[s - 1]);
  const a = J(t.cutPreference);
  let c = [], l = [];
  if (n.l === t.l && n.w === t.w ? s > 0 && (c = de(this.shapeList, o).filter((u) => In(u))) : l = de(this.shapeList, t).filter((u) => In(u)), c?.length || l?.length) {
    const u = a === "l" ? "x" : "y";
    c.sort((d, p) => d[u] - p[u]), l.sort((d, p) => d[u] - p[u]);
    const h = c.length ? c[c.length - 1] : l[l.length - 1], f = r.filter((d) => h[a] === d.w || h[a] === d.l);
    if (f?.length) {
      for (let d = 0; d < f.length; d++) {
        const p = f[d];
        if (d > 1 && f[d - 1].isIdentical(f[d]))
          continue;
        $e(p, 0, t);
        let w;
        h[a] === p[a] ? w = 0 : w = 1;
        const S = await Ls.call(this, e, p, n, w);
        if (S?.length)
          for (let g = S.length; g--; ) {
            const m = S[g];
            await Se.call(this, m, "strip");
          }
        this.resetShapes(n.shapes);
      }
      return !(!i || i?.length);
    }
  }
  return !1;
}
async function yt(e, t, n, i = null, r = null, s = null) {
  if (n.type === "root" && !e?.secondPass && (t.used = !1, this.counters.placement = 0), !n.shapes?.length)
    return;
  z([
    () => A(ie(t)).toBe(!0),
    () => A(se(n)).toBe(!0),
    () => A(i ? V(i) : !0).toBe(!0),
    () => A().toBe(!0),
    () => A().toBe(!0),
    () => A().toBe(!0),
    () => A().toBe(!0),
    () => A(n.shapes.every((f) => !Lt(f), "no segment groups should exist at this point")).toBe(!0)
  ]);
  const o = typeof s == "number";
  let a = !0;
  if (t.saw.guillotineOptions?.strategy === "time" && (a = !await Aa.call(this, e, t, n)), a)
    if (mt(n))
      if (o) {
        let f = ja(n.shapes, s, t);
        if (f.sort((g, m) => g.guillotineState.getStripShapeBatchData(s).order - m.guillotineState.getStripShapeBatchData(s).order), B("guillotine", () => `strip shape candidates ${f.map((g) => g.id).join("|")}`), z([
          () => A(f.find((g) => g.guillotineState.getStripShapeBatchData(s).stockId !== n.getStock.autoId)).toBeUndefined(),
          () => A(be(f)).toBe(!1),
          () => A(f.find((g) => W(g) && !we(g))).toBeUndefined(),
          () => A(n.shapes.filter((g) => g.added).length === 0, `added shapes found in segment ${n.id}`).toBe(!0)
        ]), !f.length)
          return yt.call(this, e, t, n);
        const d = J(t.cutPreference);
        f = f.filter((g) => {
          if (W(g))
            return !0;
          const m = Xi(g, s, t, !1);
          return _e(g, m, t) ? (Xi(g, s, t, !0), xo(g, m, t) ? (z([
            () => A(g.rot, `candidates ${g.id} rotation (${g.rot}) incorrect for batch (${m})`).equal(m)
          ]), !0) : !1) : (B("guillotine", () => `cannot rotate strip shape ${g.id}, ${g.l}x${g.w} to ${m} on stock ${t.id}`, [g.getStripShapeBatchData(s)]), st(g, t, m), !1);
        });
        const p = t.saw.guillotineOptions, w = p?.limitStripDimensions !== !1 ? Ki(n.shapes.filter((g) => !g.added && V(g)), d, n[d]) : null;
        if (p?.limitStripDimensions === !1 && f.length > 1) {
          const g = n.shapes.filter((m) => we(m) && m.shapes.some((x) => f.includes(x)));
          g.length > 0 ? (B("guillotine", () => `Reusing ${g.length} existing strip groups`), f = g) : f = Ja.call(this, s, d, t, n, f);
        }
        if (!f.length)
          return yt.call(this, e, t, n);
        f.sort(function(m, x) {
          if (w !== null) {
            const b = m[d] <= w ? 0 : 1, I = x[d] <= w ? 0 : 1;
            if (b !== I)
              return b - I;
          }
          const y = m.guillotineState?.getStripShapeBatchData?.(s)?.order, v = x.guillotineState?.getStripShapeBatchData?.(s)?.order;
          return y != null && v != null && y !== v ? y - v : x[d] !== m[d] ? x[d] - m[d] : x[t.cutPreference] !== m[t.cutPreference] ? x[t.cutPreference] - m[t.cutPreference] : m.autoId.localeCompare(x.autoId, void 0, { numeric: !0 });
        }), i = f[0], B("guillotine", () => `firstShape for segment ${n.id} is ${i.id}`);
        const S = i.guillotineState.getStripShapeBatchData(s);
        if (!S)
          throw new Error("no fs batch found");
        z([() => A(S.stockId).equal(n.getStock.autoId)]), i.firstShape.isFirstShape = !0, r = S.rot, z([() => A([0, 1].includes(S.rot)).toBe(!0)]), await Pn.call(this, {
          options: e,
          fs: i,
          fsRotation: r,
          segment: n,
          stripShapeBatch: s,
          stripShapeCandidates: f
        });
      } else
        i && r !== null ? await Pn.call(this, {
          options: e,
          fs: i,
          fsRotation: r,
          segment: n,
          stripShapeBatch: s
        }) : await an.call(this, e, n);
    else
      await an.call(this, e, n);
  if (!this.bestPartialResult)
    if (s !== null) {
      if (await an.call(this, e, n, !0), !this.bestPartialResult)
        return;
    } else
      return;
  const l = this.bestPartialResult.firstShape;
  rt({
    bestResult: this.bestPartialResult,
    shapeList: this.shapeList,
    stockList: this.stockList,
    resetShapes: this.resetShapes?.bind(this),
    groupList: this.groupList
  }), oa(n, !0), Qi(l) && n.shapes.push(l), n.shapes = es(n.shapes, l), z([
    () => A(n.shapes.filter((f) => W(f)).every((f) => we(f) || le(f))).toBe(!0),
    () => Ui(n.shapes, "segmentCalculations after removeGroupsFromSegment"),
    () => A(n.shapes.every((f) => !Lt(f) || le(f))).toBe(!0)
  ]);
  let u = null;
  if (this.config.guillotine.strips.duplicateStrips && s !== null && this.bestPartialResult?.container) {
    const f = this.bestPartialResult.container, d = this.shapeList.filter((p) => p.added && p.stock?.id === t.id && D.greaterThanOrEqualTo(p.x, f.x) && D.lessThanOrEqualTo(p.x + p.l, f.x + f.l) && D.greaterThanOrEqualTo(p.y, f.y) && D.lessThanOrEqualTo(p.y + p.w, f.y + f.w));
    d.length && (u = {
      segment: f,
      firstShape: l,
      shapes: d
    });
  }
  const h = fe(this.shapeList);
  if (this.bestPartialResult = null, h.length || this.config.secondRun.enable) {
    const f = La.call(this, n, l);
    if (f?.length) {
      B("cuts", () => `Created ${f.length} new segments, unplaced shapes: ${h.length}`);
      for (const d of f) {
        if (this.bestPartialResult = null, !d.shapes.length) {
          d.offcut = !0;
          continue;
        }
        const p = o && !mt(d);
        if (d.shapes = d.shapes.filter((w) => !w.added && (!p || !w.guillotineState.isInStripShapeBatch(s))), u && mt(d) && !W(u.firstShape)) {
          const w = Oa.call(this, u, d, t, s);
          if (w) {
            B("guillotine", () => `Duplicated strip in segment ${d.id}`), u = w;
            continue;
          }
        }
        await yt.call(this, e, t, d, null, null, s);
      }
    }
  }
  if (n.type === "root") {
    const f = /* @__PURE__ */ new Map();
    for (const S of this.shapeList)
      f.set(S.autoId, S);
    n.shapes = n.shapes.map((S) => W(S) ? S : f.get(S.autoId) || S);
    const d = De.call(this, this.shapeList, t, l);
    if (!d)
      throw new Error("Unable to score stock");
    if (d.stripShapeBatch = s, d.root = n, !d.score.efficiency)
      return;
    const p = this.shapeList.filter((S) => !S.group?.inGroup && !W(S) && S.stock?.id === t.id), w = En(p);
    w.length > 0 && B("errors", `Found ${w.length} overlapping shapes on stock ${t.id}`), s !== null ? d.type = "allocated strips" : d.type = "basic", await Se.call(this, d);
  }
}
async function Pn({ options: e = null, fs: t = null, fsRotation: n = null, segment: i = null, stripShapeBatch: r = null, stripShapeCandidates: s = [] }) {
  if (!t || n === null || !i)
    throw new Error(`firstShapeSegmentCalculations requires firstShape, firstShapeRotation & segment:${t} ${n} ${i}`);
  const o = async (f, d = !0) => {
    let p;
    d ? (t.reset(), z([() => A(i.shapes.filter((w) => w.autoId === t.autoId).length).toBe(1)]), p = De.call(this, i.shapes, f, t)) : p = De.call(this, i.shapes, i, t), p.score.totalShapesPlaced && await Se.call(this, p, "strip");
  };
  if (i.shapes = Da.call(this, i, t, r), Ha.call(this, t, i, i.getStock, n) === !1)
    return !1;
  t.placementOrder = this.counters.placement++, z([
    () => A(se(i)).toBe(!0),
    () => A().toBe(!0),
    () => A().toBe(!0)
  ]), t && z([
    //Accept all group types (segment, user, strip) as well as shapes
    () => A(V(t) || W(t), `first shape ${t.id} is not a shape or group`).toBe(!0),
    () => A(t.added, `first shape ${t.id} added too soon`).toBe(!0),
    //Only check rotation for shapes, not groups (groups cannot be rotated)
    () => A(W(t) || t.rot === n, `first shape ${t.id} rotation (${t.rot}) incorrect for (${n})`).toBe(!0),
    () => A(D.lessThanOrEqualTo(t.l, i.l), `first shape ${t.id} longer than segment ${t.l} > ${i.l}`).toBe(!0),
    () => A(D.lessThanOrEqualTo(t.w, i.w), `first shape ${t.id} wider than segment ${t.w} > ${i.w}`).toBe(!0)
  ]);
  const c = i.getStock, { success: l, firstShapeSegment: u, isHeadCut: h } = await Xa.call(this, {
    fs: t,
    segment: i,
    stock: c,
    stripShapeBatch: r,
    stripShapeCandidates: s,
    options: e
  });
  return !(l === !1 && (await o(u), !h));
}
function Da(e, t, n) {
  if (be(e.shapes)) {
    const o = /* @__PURE__ */ new Set();
    e.shapes = e.shapes.filter((a) => o.has(a.autoId) ? !1 : (o.add(a.autoId), !0));
  }
  const r = Jt(e), s = e.shapes.filter((o) => o.willItFit(e, null, r) ? !(e.type !== "root" && typeof n == "number" && o.getStripShapeBatchData(n) !== !1 && t.autoId !== o.autoId) : (B("cuts", () => `  Excluding ${o.autoId}: doesn't fit in segment`), !1));
  return B("cuts", () => `  Result: ${s.length} shapes selected for segment`), this.resetShapes(s, {
    keepScores: !1,
    removeGroups: !1,
    keepGuillotineData: !0,
    keepFirstShapeSampleRotations: !0
  }), s;
}
const Di = /* @__PURE__ */ new WeakSet();
async function Ba(e, t) {
  if (!this.config.experimental?.familyStrip || e.cutType !== "guillotine" && e.cutType !== "beam")
    return;
  const n = e.saw?.bladeWidth ?? 0, i = e.trim ?? {}, r = i.x1 ?? 0, s = i.y1 ?? 0, o = e.l - (i.x1 ?? 0) - (i.x2 ?? 0), a = e.w - (i.y1 ?? 0) - (i.y2 ?? 0);
  if (!(o > 0 && a > 0))
    return;
  const c = t.filter((C) => V(C));
  if (c.length < 4 || Di.has(e) || (Di.add(e), c.reduce((C, P) => C + P.l * P.w, 0) < o * a * 0.85))
    return;
  const u = (C) => Math.max(3, C * 0.03), h = /* @__PURE__ */ new Set(), f = (C) => {
    const P = /* @__PURE__ */ new Set(), E = ($) => C.some((L) => Math.abs($.l - L) <= u(L) || Math.abs($.w - L) <= u(L)), M = [];
    let X = 0;
    for (const $ of C) {
      const L = X > 0 ? n : 0;
      if (X + L + $ > a + 0.5)
        continue;
      const R = u($), k = c.filter((j) => !P.has(j.autoId)).sort((j, Z) => Z.l * Z.w - j.l * j.w), H = k.filter((j) => Math.abs(Math.max(j.l, j.w) - $) <= R), q = k.filter((j) => Math.abs(Math.min(j.l, j.w) - $) <= R), Q = (H.length ? H : q).sort((j, Z) => Math.min(Z.l, Z.w) - Math.min(j.l, j.w)), ne = [];
      let _ = 0;
      for (const j of Q) {
        const Z = Math.abs(j.w - $) <= R, pe = Z ? j.w : j.l, ue = Z ? j.l : j.w, ut = _ > 0 ? n : 0;
        _ + ut + ue > o + 0.5 || (ne.push({ shape: j, x: _ + ut, yWithin: 0, vExt: pe, hExt: ue }), P.add(j.autoId), _ += ut + ue);
      }
      if (!ne.length || _ < o * 0.4)
        continue;
      const K = X + L;
      M.push({ y: K, H: $, plans: ne, x: _ }), X = K + $;
    }
    if (!M.length)
      return { committed: [], claimed: P, area: 0 };
    const O = ($, L, R) => [[$.l, $.w], [$.w, $.l]].filter(([H]) => H <= L + R).sort((H, q) => q[0] - H[0])[0] ?? null;
    for (const $ of [...M].sort((L, R) => R.H - L.H)) {
      const L = u($.H);
      let R = 0;
      for (; R < $.H - 1; ) {
        const k = $.H - R, H = c.filter((Z) => !P.has(Z.autoId) && !E(Z) && Math.min(Z.l, Z.w) <= k + L);
        if (!H.length)
          break;
        H.sort((Z, pe) => pe.l * pe.w - Z.l * Z.w);
        const q = H[0], Q = o - ($.x + n);
        let ne = k, _ = -1;
        for (const Z of [q.l, q.w]) {
          if (Z > k + L)
            continue;
          const pe = Z === q.l ? q.w : q.l, ue = Math.floor((k + n) / (Z + n)) * Math.max(1, Math.floor((Q + n) / (pe + n)));
          (ue > _ || ue === _ && Z > ne) && (_ = ue, ne = Z);
        }
        let K = $.x + n, j = 0;
        for (; ; ) {
          let Z = null;
          for (const pe of H) {
            if (P.has(pe.autoId))
              continue;
            const ue = O(pe, ne, L);
            if (ue && K + ue[1] <= o + 0.5) {
              Z = { s: pe, vExt: ue[0], hExt: ue[1] };
              break;
            }
          }
          if (!Z)
            break;
          $.plans.push({ shape: Z.s, x: K, yWithin: R, vExt: Z.vExt, hExt: Z.hExt }), P.add(Z.s.autoId), K += Z.hExt + n, j++;
        }
        if (!j)
          break;
        R += ne + n;
      }
    }
    const G = M.map(($) => ({ y: $.y, plans: $.plans })), T = G.reduce(($, L) => $ + L.plans.reduce((R, k) => R + k.shape.l * k.shape.w, 0), 0);
    return { committed: G, claimed: P, area: T };
  }, p = c.reduce((C, P) => Math.max(C, P.l * P.w), 0) * 0.15, w = /* @__PURE__ */ new Set();
  for (const C of c)
    C.l * C.w >= p && (C.l <= a && w.add(Math.round(C.l)), C.w <= a && w.add(Math.round(C.w)));
  const S = [...w].sort((C, P) => P - C);
  let g = { committed: [], claimed: /* @__PURE__ */ new Set(), area: -1 }, m = 0;
  const x = (C, P, E) => {
    if (m > 1500)
      return;
    if (C >= S.length) {
      if (!P.length)
        return;
      m++;
      const X = f([...P].sort((O, G) => G - O));
      X.area > g.area && (g = X);
      return;
    }
    const M = S[C];
    E + M <= a + 0.5 && x(C + 1, [...P, M], E + M + n), x(C + 1, P, E);
  };
  x(0, [], 0);
  const y = g.committed;
  for (const C of g.claimed)
    h.add(C);
  if (F("guillotine.family-strip-plan", !0, { committed: y.length, evals: m, area: Math.round(g.area), claimed: h.size }), !y.length)
    return;
  c.forEach((C) => {
    C.added && C.removeFromStock();
  });
  let v = null;
  for (const C of y)
    for (const P of C.plans)
      $e(P.shape, 0), Math.abs(P.shape.w - P.vExt) > Math.abs(P.shape.l - P.vExt) && $e(P.shape, 1), P.shape.x = r + P.x, P.shape.y = s + C.y + P.yWithin, P.shape.addToStock(e), v || (v = P.shape);
  if (!v)
    return;
  const b = c.filter((C) => !C.added);
  if (b.length) {
    const C = de(this.shapeList, e).length;
    await Zt.call(this, this.shapeList, v, e), F("guillotine.family-strip-mop", !0, { before: C, after: de(this.shapeList, e).length, leftover: b.length });
  }
  const I = De.call(this, this.shapeList, e, v);
  I && await Se.call(this, I), this.shapeList.forEach((C) => {
    !W(C) && C.added && C.stock?.autoId === e.autoId && C.removeFromStock();
  }), rt({
    bestResult: this.bestResult,
    shapeList: this.shapeList,
    stockList: this.stockList,
    resetShapes: this.resetShapes?.bind(this),
    groupList: this.groupList
  });
}
async function Xa({ fs: e, segment: t, stock: n, stripShapeBatch: i, stripShapeCandidates: r, forceNoHeadCut: s, options: o }) {
  B("guillotine", () => `[createFirstShapeSegmentsPlaceShapesAndScore] Starting for segment ${t.id}, first shape ${e.id}`);
  const { offcuts: a, firstShapeSegment: c, isHeadCut: l, success: u } = await Ga.call(this, { fs: e, segment: t, stock: n, stripShapeBatch: i, stripShapeCandidates: r, forceNoHeadCut: s, options: o });
  if (z([() => A(a.length).toBeLessThanOrEqual(2)]), u === !1)
    return { success: !1, firstShapeSegment: c, isHeadCut: l };
  if (o.secondPass) {
    const { cuts: m } = Ut.call(this, {
      container: c,
      shapes: [e],
      forceNoHeadCut: s
    }), { allShapesCut: x } = ws([e], m, c);
    if (!x)
      return { success: !1, firstShapeSegment: c, isHeadCut: l };
  }
  if (!a.length) {
    const m = De.call(this, t.shapes, c, e);
    return await Se.call(this, m, "strip"), { success: !0, firstShapeSegment: c, isHeadCut: l };
  }
  const h = c.cutDirection, f = a.find((m) => D.equalTo(m[h], c[h]));
  if (!f || f.l <= 0 || f.w <= 0) {
    B("cuts", () => `No next segment. Remaining shapes: ${t.shapes.length}`), V(e) && !t.shapes.find((x) => x.autoId === e.autoId) && t.shapes.unshift(e), t.shapes.length > 1 && await Zt.call(this, t.shapes, e, c || t);
    const m = De.call(this, t.shapes, c, e);
    return await Se.call(this, m, "strip"), { success: !0, firstShapeSegment: c, isHeadCut: l };
  }
  const d = c.cutDirection;
  (t.type === "root" || t.type === "firstShape") && r.length === 1 && (f[d] = t[d], c[d] = t[d]), z([() => A(t.shapes.filter((m) => m.autoId === e.autoId).length).toBe(1)]), await Zt.call(this, t.shapes, e, c || t);
  const p = De.call(this, t.shapes, c, e);
  await Se.call(this, p, "strip");
  const w = t.type === "root" ? t.shapes.filter((m) => we(m)) : [];
  this.resetShapes(t.shapes, {
    keepScores: !1,
    removeGroups: !0,
    keepGuillotineData: !1,
    keepFirstShapeSampleRotations: !0
  });
  const S = new Set(t.shapes.map((m) => m.autoId)), g = w.filter((m) => !S.has(m.autoId));
  return t.shapes.push(...g), { success: !0, firstShapeSegment: c, isHeadCut: l };
}
async function Ga({ fs: e, segment: t, stock: n, segmentShapes: i, stripShapeBatch: r, forceNoHeadCut: s, options: o }) {
  let a = !0, c, l = !1;
  !s && $s.call(this, t) && (l = Is.call(this, n.saw, e, t), t.hasHeadCut = l);
  try {
    c = qa.call(this, e, l, t, n, i);
  } catch (f) {
    throw B("errors", () => `firstShapeSegment error, fs: ${e.autoId}, 'ssg: ${r}: ${f.message}`), new Error(`issue with createFirstShapeSegment ${f.message}`);
  }
  if (z([() => A(c[c.cutDirection]).toBe(e[c.cutDirection])]), o?.secondPass) {
    const f = this.shapeList.filter((d) => d.added && d.stock.autoId === n.autoId && d.autoId !== e.autoId);
    if (Ot(c, f, n))
      return a = !1, { firstShapeSegment: c, offcuts: [], success: a };
  }
  const u = t.cutDirection, { offcuts: h } = Ut.call(this, {
    container: t,
    shapes: t.shapes,
    forceNoHeadCut: s
  });
  return t.cutDirection = u, { firstShapeSegment: c, offcuts: h, isHeadCut: l, success: a };
}
async function an(e, t, n = !1) {
  if (!this.config.sample.enable && n === !1)
    return !1;
  z([
    () => A(t.shapes.every((a) => V(a) || le(a))).toBe(!0)
  ]);
  let i = [];
  if (t.shapes.length > 1) {
    const a = J(t.cutDirection), c = t[a], l = t.parentSegmentGroupShapes || /* @__PURE__ */ new Set(), u = t.shapes.filter((p) => !l.has(p.id)), h = wo(u, c * 0.05), f = h.reduce((p, w) => p + w.area, 0), d = t.getStock.area;
    if (this.config?.groups?.guillotine?.firstShape && h.length >= 2 && f >= d * 0.8) {
      i = ts({
        shapes: h,
        container: t,
        // Use segment as container
        targetSize: c,
        exact: !1,
        direction: a,
        // Pass Direction ('l' or 'w'), not GroupDirection
        config: this.config,
        counters: this.counters,
        preventDuplicates: !0,
        type: "firstShape",
        maxGroups: this.config.sample.guillotine
      });
      const p = /* @__PURE__ */ new Set();
      i = i.filter((w) => {
        const S = `${w.l}-${w.w}`;
        return p.has(S) ? !1 : (p.add(S), !0);
      }), B("groups", () => `[FIRST SHAPE GROUPS] created ${i.map((w) => w.id).join()} for segment ${t.id} `);
    }
  }
  let r = null;
  e.secondPass && (r = de(this.shapeList, t.getStock));
  const s = [...t.shapes], o = Os.call(this, "guillotine", [...s, ...i], t, r, null, n);
  if (!o.length)
    return !1;
  for (let a = 0; a < o.length; a++) {
    const c = o[a];
    if (B("guillotine", () => `[FIRST SHAPE] attempting first shape candidate ${c.id} for segment ${t.id}`), a > 1 && o[a - 1].isSameSize(o[a])) {
      c.firstShape.sampleRotations = [];
      continue;
    }
    this.resetShapes(s, {
      removeGroups: !1,
      keepFirstShapeSampleRotations: !0
    }), c.firstShape.isFirstShape = !0, Qi(c) && (t.shapes.find((h) => h.autoId === c.autoId) || t.shapes.push(c), t.shapes = es(t.shapes, c)), z([
      () => A(be(t.shapes, `segment ${t.id} before running fs tests for ${c.id}`)).toBe(!1),
      () => A(be(t.shapes)).toBe(!1)
    ]), await Ls.call(this, e, c, t), z([() => A(be(t.shapes)).toBe(!1)]), c.firstShape.isFirstShape = !1, c.firstShape.sampleRotations = [], t.shapes = s, this.resetShapes(t.shapes, {
      removeGroups: !0,
      keepFirstShapeSampleRotations: !0
    });
    const l = t.shapes.filter((h) => V(h)), u = t.shapes.filter((h) => W(h));
    B("reset", () => `[RESET] RESET SEGMENT ${t.id} BETWEEN FIRST SHAPE CANDIDATES: ${c.id}`, null, [
      {
        type: "Shapes",
        count: l.length,
        added: l.filter((h) => h.added).length,
        ids: l.map((h) => h.id).join(", ")
      },
      {
        type: "Groups",
        count: u.length,
        added: u.filter((h) => h.added).length,
        ids: u.map((h) => h.id).join(", ")
      }
    ]);
  }
  return !0;
}
function Gs(e, t) {
  return new Re({
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
function La(e, t) {
  B("guillotine", () => `[SEG-CREATE] creating new segments for segment ${e.id}, stock ${e.stock.id} at (${e.x},${e.y}) ${e.l}x${e.w}, first shape ${t.id} at (${t.x},${t.y}) ${t.l}x${t.w}, cut direction ${e.cutDirection}`), W(t) && B("guillotine", () => `[SEG-CREATE] first shape ${t.id} is group with ${t.shapes?.length || 0} shapes`, [t.dimensions, t.coords]), z([
    () => A(V(t) || W(t)).toBe(!0),
    () => A(se(e)).toBe(!0)
  ]);
  const { offcuts: n } = Ut.call(this, {
    container: e,
    shapes: e.shapes
  });
  if (!n.length)
    return;
  B("guillotine", () => `[SEG-CREATE] All new segments for segment ${e.id}:`, null, n.map((l) => ({ id: l.id, x: l.x, y: l.y, l: l.l, w: l.w, dir: l.cutDirection })));
  const i = e.cutDirection === "l" ? "y" : "x", r = J(e.cutPreference), s = n.filter((l) => l[i] < t[i] + t[r]), o = n.find((l) => l[i] >= t[i] + t[r]);
  if (o && (o.rowSegment = !0, s.push(o)), !s?.length)
    return;
  const a = We(i);
  s.sort((l, u) => l[i] < u[i] ? -1 : l[i] > u[i] ? 1 : l[a] < u[a] ? -1 : l[a] > u[a] ? 1 : 0);
  const c = e.shapes.filter((l) => !l.added);
  return s.forEach((l) => {
    const u = Jt(l), h = c.filter((d) => st(d, l, null, u)), f = /* @__PURE__ */ new Set();
    l.shapes = h.filter((d) => f.has(d.autoId) ? !1 : (f.add(d.autoId), !0)), z([() => A(l.shapes.every((d) => !d.added), `added shapes in offcut ${l.autoId}`).toBe(!0)]);
  }), e.children = s, s;
}
function Oa(e, t, n) {
  const { segment: i, shapes: r } = e;
  if (!r.length || !D.greaterThanOrEqualTo(t.l, i.l) || !D.greaterThanOrEqualTo(t.w, i.w))
    return null;
  const s = t.shapes.filter((p) => !p.added && V(p));
  if (s.length < r.length)
    return null;
  const o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map();
  for (const p of s) {
    const w = `${p.longSide}|${p.shortSide}|${p.material}`;
    let S = o.get(w);
    if (S || (S = [], o.set(w, S)), S.push(p), p.parentId) {
      let g = a.get(p.parentId);
      g || (g = [], a.set(p.parentId, g)), g.push(p);
    }
    if (p.identicalTo && Array.isArray(p.identicalTo))
      for (const g of p.identicalTo) {
        let m = c.get(g);
        m || (m = [], c.set(g, m)), m.push(p);
      }
  }
  const l = t.x - i.x, u = t.y - i.y, h = /* @__PURE__ */ new Set(), f = [];
  for (const p of r) {
    const w = /* @__PURE__ */ new Set(), S = `${p.longSide}|${p.shortSide}|${p.material}`, g = o.get(S);
    if (g)
      for (const y of g)
        h.has(y) || w.add(y);
    if (p.parentId) {
      const y = c.get(p.parentId);
      if (y)
        for (const b of y)
          h.has(b) || w.add(b);
      const v = a.get(p.parentId);
      if (v)
        for (const b of v)
          h.has(b) || w.add(b);
    }
    if (p.identicalTo && Array.isArray(p.identicalTo))
      for (const y of p.identicalTo) {
        const v = a.get(y);
        if (v)
          for (const b of v)
            h.has(b) || w.add(b);
      }
    const m = [];
    for (const y of w)
      y.isIdentical(p, !1) && y.longSide === p.longSide && y.shortSide === p.shortSide && y.material === p.material && m.push(y);
    let x = null;
    if (m.length === 1 ? x = m[0] : m.length > 1 && (x = m.find((y) => y.parentId === p.parentId) || m[0]), !x)
      return null;
    h.add(x), f.push({ source: p, target: x });
  }
  const d = [];
  for (const { source: p, target: w } of f)
    w.update({
      x: p.x + l,
      y: p.y + u,
      l: p.l,
      w: p.w,
      rot: p.rot,
      placementOrder: this.counters.placement++
    }), w.addToStock(n), d.push(w);
  return B("guillotine", () => `Strip duplicated: ${d.length} shapes placed in segment ${t.id} (offset x=${l}, y=${u})`), {
    segment: t,
    firstShape: e.firstShape,
    shapes: d
  };
}
function Wa(e, t, n, i, r, s, o, a, c) {
  if (!t || t.length <= 1)
    return !0;
  try {
    t.sort((b, I) => b[o] - I[o]);
    let l = 0, u = -1 / 0;
    for (const b of t)
      b[o] > u + i && (l += b[a] + i, u = b[o] + b[a]);
    if (l > e[a])
      return console.warn("Preliminary check: shapes would not fit within stock after rearrangement"), !1;
    const h = [], f = i / 2;
    let d, p, w = !1, S = 0, g = 0, m = 0;
    const x = 3;
    for (const b of t) {
      if (!In(b))
        continue;
      w || (d = b[o], m = 0), p = b[o] + b[a];
      const I = b[o] + b[a] + f, C = new xt(r === "x" ? {
        x1: 0,
        x2: e[s],
        y1: I,
        y2: I
      } : {
        x1: I,
        x2: I,
        y1: 0,
        y2: e[s]
      });
      if (An(C, e, n))
        if (w = !0, m++, m >= x)
          w = !1, console.warn(`Forced strip creation after ${x} consecutive collisions`);
        else
          continue;
      else
        w = !1, m = 0;
      const P = n.filter((T) => D.greaterThanOrEqualTo(T[o], d) && D.lessThan(T[o], p));
      if (!P.length)
        continue;
      const E = P.length > 0 ? P.reduce((T, $) => {
        const L = T[r] + T[s], R = $[r] + $[s];
        return D.equalTo(L, R) ? T[s] > $[s] ? T : $ : L > R ? T : $;
      }) : P[0];
      if (!E)
        continue;
      const M = E[r] + E[s], X = P.length > 0 ? P.reduce((T, $) => {
        const L = T[o] + T[a], R = $[o] + $[a];
        return D.equalTo(L, R) ? T[a] > $[a] ? T : $ : L > R ? T : $;
      }) : P[0];
      if (!X)
        continue;
      let O = X[o] + X[a];
      p > O && (O = p);
      const G = O - d;
      h.push({
        stripStartPoint: d,
        stripEndPoint: p,
        furthestPrimaryPoint: M,
        furthestOrderingPoint: O,
        shapesInThisRow: P,
        width: G
      });
    }
    if (!h.length)
      return console.warn("No valid strips found after analysis"), !0;
    const y = /* @__PURE__ */ new Map();
    h.forEach((b) => {
      b.shapesInThisRow.forEach((I) => {
        y.set(I.autoId, I[o]);
      });
    }), h.sort((b, I) => D.equalTo(b.furthestPrimaryPoint, I.furthestPrimaryPoint) ? I.width - b.width : I.furthestPrimaryPoint - b.furthestPrimaryPoint);
    let v = 0;
    for (const b of h)
      v += b.furthestOrderingPoint - b.stripStartPoint + i;
    if (v > e[a])
      return console.warn("Total arrangement would exceed stock dimensions"), !1;
    for (const b of h) {
      b.shapesInThisRow.sort((I, C) => I.placementOrder - C.placementOrder);
      for (let I = 0; I < b.shapesInThisRow.length; I++) {
        const C = b.shapesInThisRow[I], P = C[o] - b.stripStartPoint, E = g + P;
        if (E + C[a] > e[a])
          return console.warn(`Shape ${C.id} would exceed stock boundaries after rearrangement`), Bi(h, y, o), !1;
        const M = C[o];
        C[o] = E, C.placementOrder = I + S, Vn(C) === 1 && D.equalTo(C[r], 0) && zt(C, s), !D.equalTo(M, E) && c && (sa(c, C), vn(c, C));
      }
      if (S += b.shapesInThisRow.length, g += b.furthestOrderingPoint - b.stripStartPoint + i, g > e[a])
        return console.warn("Rearrangement exceeds stock dimensions"), Bi(h, y, o), !1;
    }
    return !0;
  } catch (l) {
    return console.error("Error during shape rearrangement:", l), !1;
  }
}
function Bi(e, t, n) {
  e.forEach((i) => {
    i.shapesInThisRow.forEach((r) => {
      t.has(r.autoId) && (r[n] = t.get(r.autoId));
    });
  });
}
function Na(e, t, n) {
  if (!this.config?.guillotine?.strips?.rearrange || e.saw.guillotineOptions?.strategy === "time")
    return !1;
  const r = e.bladeWidth;
  if (D.equalTo(r, 0) || r < 0)
    return console.warn("Invalid blade width for rearrangement"), !1;
  const s = de(t, e);
  if (!s?.length)
    return !1;
  const o = e.cutPreference;
  if (o !== "l" && o !== "w")
    return console.warn("Invalid primary dimension:", o), !1;
  const a = o === "l" ? "x" : "y", c = s.filter((f) => Cn(f, 1) && D.equalTo(f[a], 0));
  if (!c.length)
    return !1;
  const l = J(o), u = o === "l" ? "y" : "x";
  return c.reduce((f, d) => f + d[l], 0) > e[l] ? (console.warn("Total strip width exceeds stock dimensions"), !1) : Wa(e, c, s, r, a, o, u, l, n);
}
async function Fa(e, t, n, i) {
  if (!this.config?.guillotine?.secondPass) {
    console.debug("Corner squeeze disabled in config");
    return;
  }
  if (n.length === t.length) {
    console.debug("All shapes already added, skipping corner squeeze");
    return;
  }
  if (e.saw.guillotineOptions?.strategy === "time") {
    console.debug("Time strategy selected, skipping corner squeeze");
    return;
  }
  e.rootSegment = i;
  const s = e.bladeWidth;
  if (D.equalTo(s, 0) || s < 0) {
    console.warn("Invalid blade width for corner squeeze");
    return;
  }
  const o = n.filter((f) => Cn(f, 1));
  if (!o.length) {
    console.debug("No strip shapes found for corner squeeze");
    return;
  }
  const a = e.cutPreference;
  if (a !== "l" && a !== "w") {
    console.warn("Invalid primary dimension:", a);
    return;
  }
  const c = a === "l" ? "x" : "y", l = J(a), u = a === "l" ? "y" : "x";
  o.sort((f, d) => f[u] - d[u]);
  let h = 0;
  for (let f = 0; f < o.length; f++) {
    let I = function(T, $, L, R) {
      return T[$] + T[L] + R;
    }, C = function(T, $, L, R, k) {
      return k > 0 ? k - $[L] : T[R] - $[L];
    };
    const d = o[f], p = f > 0 ? de(this.shapeList, e) : n, w = fe(t, e);
    if (!w.length) {
      console.debug("No remaining shapes to place, exiting corner squeeze");
      break;
    }
    const S = p.filter((T) => !Cn(T, 0) && ot(T, d, u));
    S.some((T) => T.autoId === d.autoId) || S.push(d);
    let g;
    S.length > 0 ? g = S.reduce((T, $) => T[c] + T[a] > $[c] + $[a] ? T : T[c] + T[a] < $[c] + $[a] ? $ : T[u] < $[u] ? T : $) : g = d;
    const m = g[c] + g[a] + s;
    let x;
    c === "x" ? x = new xt({
      x1: m,
      x2: m,
      y1: g[u],
      y2: e[l]
    }) : x = new xt({
      x1: g[u],
      x2: e[l],
      y1: m,
      y2: m
    });
    const y = An(x, e, p, !0);
    if (!Array.isArray(y)) {
      console.warn("Expected collision shapes array but got:", typeof y);
      continue;
    }
    const v = y;
    let b = 0;
    if (v?.length && (b = v.reduce(($, L) => $[u] < L[u] ? $ : L)[u] - s, b <= g[u])) {
      console.debug("Invalid segment end point calculation, skipping this squeeze attempt");
      continue;
    }
    const P = typeof te < "u" && typeof te.segments < "u" ? te.segments === 0 ? "root" : (te.segments + 1).toString() : "squeeze-" + Date.now();
    typeof te < "u" && typeof te.segments < "u" && te.segments++;
    const E = I(g, c, a, s), M = C(e, g, u, l, b), X = e[a] - E, O = {
      id: P,
      shapes: w,
      stock: e,
      saw: e.saw,
      material: e.material,
      cutDirection: J(e.cutPreference),
      phase: 0,
      stockType: e?.saw?.stockType,
      t: e.t,
      // Assign all dimensions and positions
      x: c === "x" ? E : g.x,
      y: c === "y" ? E : g.y,
      l: c === "x" ? X : e.l,
      w: c === "y" ? X : e.w,
      [c]: E,
      [u]: g[u],
      [a]: X,
      [l]: M
    };
    if (O.l <= 0 || O.w <= 0) {
      console.debug("Skipping segment with invalid dimensions:", O.l, O.w);
      continue;
    }
    let G;
    try {
      G = new Re(O);
    } catch (T) {
      console.warn(`Corner squeeze segment creation error - ${T.message} for shape: ${g.id}`);
      continue;
    }
    try {
      await Kt.call(this, { secondPass: !0 }, e, G), h++;
    } catch (T) {
      console.warn(`Error during segment calculations: ${T.message}`);
    }
  }
  h > 0 && console.debug(`Corner squeeze completed with ${h} successful placements`);
}
async function Ya(e, t, n, i) {
  if (!this.config?.guillotine?.secondPass)
    return;
  if (n.length === t.length) {
    F("guillotine.residual.entry", "all-placed", { added: n.length, total: t.length });
    return;
  }
  if (e.saw?.guillotineOptions?.strategy === "time") {
    F("guillotine.residual.entry", "time-strategy", {});
    return;
  }
  const r = e.bladeWidth;
  if (!(r > 0))
    return;
  e.rootSegment = i;
  const s = de(this.shapeList, e).filter((u) => V(u));
  if (!s.length) {
    F("guillotine.residual.entry", "no-placed", {});
    return;
  }
  F("guillotine.residual.entry", "harvest", { unplaced: t.length - n.length, placed: s.length });
  const o = Math.max(...s.map((u) => u.x + u.l)), a = Math.max(...s.map((u) => u.y + u.w)), c = J(e.cutPreference), l = [
    { tag: "right-column", x: o + r, y: 0, l: e.l - (o + r), w: e.w },
    { tag: "top-band", x: 0, y: a + r, l: e.l, w: e.w - (a + r) }
  ];
  for (const u of l) {
    const h = Math.round(u.l), f = Math.round(u.w);
    if (u.l <= r || u.w <= r) {
      F(`guillotine.residual.${u.tag}`, "no-space", { regionW: h, regionH: f });
      continue;
    }
    const d = fe(t, e);
    if (!d.length) {
      F(`guillotine.residual.${u.tag}`, "no-shapes", { regionW: h, regionH: f });
      break;
    }
    const p = {
      id: `residual-${u.tag}`,
      shapes: d,
      stock: e,
      saw: e.saw,
      material: e.material,
      cutDirection: c,
      phase: 0,
      stockType: e?.saw?.stockType,
      t: e.t,
      x: u.x,
      y: u.y,
      l: u.l,
      w: u.w
    };
    let w;
    try {
      w = new Re(p);
    } catch (m) {
      F(`guillotine.residual.${u.tag}`, "segment-error", { regionW: h, regionH: f, err: m.message });
      continue;
    }
    const S = de(this.shapeList, e).length;
    try {
      await Kt.call(this, { secondPass: !0 }, e, w);
    } catch (m) {
      F(`guillotine.residual.${u.tag}`, "calc-error", { regionW: h, regionH: f, err: m.message });
      continue;
    }
    const g = de(this.shapeList, e).length - S;
    F(`guillotine.residual.${u.tag}`, g, { regionW: h, regionH: f, avail: d.length, placed: g }, () => ({ region: { l: u.l, w: u.w }, availSizes: d.slice(0, 12).map((m) => ({ l: m.l, w: m.w })) }));
  }
}
function Ha(e, t, n, i = null) {
  if (!t)
    throw new Error("no segment provided to assignStripShape");
  if (!e)
    throw new Error("no shape provided to assignStripShape");
  e.resetBothScores(), e.x = t.x, e.y = t.y;
  const r = this.shapeList?.filter((s) => s.added && !W(s) && s.stock?.autoId === n.autoId && s.autoId !== e.autoId) || [];
  if (W(e)) {
    const s = new Set(e.shapes?.map((a) => a.autoId)), o = r.filter((a) => !s.has(a.autoId));
    if (o.length > 0 && Ot(e, o, n))
      return B("guillotine", `[assignStripShape] PREVENTED — group ${e.id} would collide at (${e.x},${e.y}) ${e.l}x${e.w} on stock ${n.id}`), e.x = 0, e.y = 0, !1;
    e.initShapes(e.shapes), e.placeMyShapes(n);
  }
  return i !== null && !W(e) ? $e(e, i, n) : i !== null && W(e) && e.rot !== i && B("groups", `[assignStripShape] WARNING: Group ${e.id} has computed rot=${e.rot} but requested rotation=${i} - groups cannot be rotated!`), !W(e) && r.length > 0 && Ot(e, r, n) ? (B("guillotine", `[assignStripShape] PREVENTED — shape ${e.id} would collide at (${e.x},${e.y}) ${e.l}x${e.w} on stock ${n.id}`), e.x = 0, e.y = 0, !1) : (B("calculations", `assigning first shape ${e.id}, x: ${e.x}, y: ${e.y}, rot: ${i}`), e.guillotineState || (e.guillotineState = new Gt({})), e.firstShape.isFirstShape = !0, ta(e), zt(e, t.cutDirection), Oe() && (W(e) || z([() => A(e.rot).toBe(i)])), e.addToStock(n), z([() => A(En(this.shapeList.filter((s) => s.stock?.id === n.id))).toHaveLength(0)]), e);
}
async function Ls(e, t, n, i = null) {
  if (z([
    () => A(V(t) || W(t)).toBe(!0),
    () => A(se(n)).toBe(!0)
  ]), !(ge(i) && !_e(t, i, n)))
    for (const r of t.firstShape.sampleRotations)
      await qs.call(this, t, n, r, Pn, {
        options: e,
        fs: t,
        fsRotation: null,
        segment: n
      }, "fsRotation");
}
function za(e, t, n) {
  let i;
  return n ? (i = e.cutPreference, zt(t, J(i)), e.hasHeadCut = !0) : (D.equalTo(t[e.cutDirection], e[e.cutDirection]) ? i = e.cutDirection : i = mt(e) ? J(e.cutPreference) : J(e.cutDirection), zt(t, J(i))), z([
    () => A(Pe(t)).not.toBe(i)
  ]), i;
}
function qa(e, t, n, i, r) {
  n.hasHeadCut = t;
  let s = za(n, e, t);
  const o = (n.phase ?? 0) + 1, a = i.saw.guillotineOptions?.phaseDirection?.[String(o)];
  (a === "l" || a === "w") && (s = a);
  const c = {
    l: s === "w" ? n.l : e.l,
    w: s === "w" ? e.w : n.w
  }, l = new Re({
    x: e.x,
    y: e.y,
    l: c.l,
    w: c.w,
    t: n.t,
    parent: n,
    stock: i,
    material: i.material,
    shapes: r,
    firstShape: e,
    id: "fs-" + e.id,
    phase: n.phase + 1,
    preventAutoRotation: !0,
    saw: n.stock.saw,
    cutDirection: s,
    hasHeadCut: t,
    type: "firstShape"
  });
  if (l.shapes.unshift(e), !l)
    throw new Error("firstShapeSegment not created");
  return z([
    () => A(l.cutDirection, `segment cut direction ${n.id} is the same as first shape ${e.id}`).not.toBe(Pe(e))
  ]), B("cuts", `FIRST SHAPE SEGMENT [${l?.parent?.type === "root" ? "R" : l.parent.id}]->[${l.autoId}] ${t ? "HEAD" : "NORM"} ${Me(l.l, 4)}x${Me(l.w, 4)}, SEG DIR ${l.cutDirection.toUpperCase()}, SHAPE DIR ${Pe(e).toUpperCase()}`), l;
}
function Va(e, t, n, i, r = null, s) {
  if (!t.length)
    return [];
  z([
    () => A(t.length).toBeGreaterThan(0),
    () => A(e.every((g) => g.added === !1)).toBe(!0)
  ]);
  const o = i.saw?.guillotineOptions, a = i.cutPreference ? J(i.cutPreference) : null, c = mt(n) && o?.limitStripDimensions !== !1 && a ? Ki(t, a, i[a]) : null;
  let l = [];
  const u = Jt(n);
  for (const g of t) {
    const m = It(g, i);
    if (g.firstShape.sampleRotations = [], !W(g))
      for (const x of m) {
        let y = 1;
        $e(g, x, i);
        const v = g.getPriority(i);
        let b = !0;
        if ($e(g, x, i), z([
          () => A(g.rot, `unique shape ${g.id} rotation (${g.rot}) incorrect for (${x})`).equal(x)
        ]), !st(g, n, x, u))
          continue;
        if (r?.length) {
          g.x = n.x, g.y = n.y;
          for (const C of r)
            if (ns(g, C, i)) {
              b = !1;
              break;
            }
        }
        if (!b)
          continue;
        const I = g.aspect;
        if (I < 0.1) {
          const C = i.cutPreference;
          if (g[C] >= 0.7 * i[C] && g[C] > g[J(C)]) {
            const P = Math.max(1, 10 * (1 - I * 2));
            y *= P;
          }
        }
        c !== null && g[a] > c && (y *= 0.1), l.push({
          id: g.id,
          shape: g,
          rotation: x,
          score: y,
          priority: v
        }), z([
          () => A(st(g, n, x)).toBe(!0)
        ]);
      }
  }
  const h = this.config.priority.forceStrand;
  l.sort((g, m) => h ? g.priority !== m.priority ? m.priority - g.priority : g.score !== m.score ? m.score - g.score : m.shape.area - g.shape.area : g.score !== m.score ? m.score - g.score : g.priority !== m.priority ? m.priority - g.priority : m.shape.area - g.shape.area);
  const f = n.cutDirection, d = i[f], p = this.config.guillotine.firstShapeFullSizeThreshold, w = l.filter((g) => g.shape[f] >= p * d);
  if (w.length > 0) {
    const g = w[0];
    return g.shape.firstShape.sampleRotations = [g.rotation], [g.shape];
  }
  l = l.slice(0, this.config.sample.guillotine);
  const S = [];
  for (const g of l)
    S.find((x) => x.id === g.id) || S.push(g.shape), g.shape.firstShape.sampleRotations.push(g.rotation), z([
      () => A(g.shape.firstShape.sampleRotations.length).toBeLessThanOrEqual(2),
      () => A(g.shape.firstShape.sampleRotations[0]).not.toBe(g.shape.firstShape.sampleRotations[1])
    ]);
  return o?.limitStripDimensions === !1 && S.push(...s), S;
}
function ja(e, t, n) {
  if (!e.length)
    return [];
  if (typeof t != "number")
    throw new Error("getAllocatedStripShapeBatch - stripShapeBatchNumber must be a number");
  if (!n)
    throw new Error("getAllocatedStripShapeBatch - stock is required");
  const i = e.filter((o) => {
    if (o.added)
      return !1;
    const a = o.guillotineState.getStripShapeBatchData(t);
    return !(a === !1 || a.rerunning || a.stockId !== n.autoId);
  }), r = /* @__PURE__ */ new Set();
  return i.filter((o) => r.has(o.autoId) ? !1 : (r.add(o.autoId), !0));
}
function Za(e, t, n) {
  Ua(e.shapes);
  const i = bo.call(this, e, t, n);
  return i || !1;
}
function Xi(e, t = null, n, i = !1) {
  let r;
  if (t !== null) {
    const s = e.guillotineState.getStripShapeBatchData(t);
    if (s === !1)
      throw new Error("getStripShapeRotation - could not find strip shape group");
    r = s.rot;
  }
  if (z([() => A().toBe(!0)]), i && r !== e.rot) {
    if (W(e) || !_e(e, r, n))
      return r;
    if ($e(e, r, n) === !1)
      throw new Error("getStripShapeRotation - could not rotate strip shape correctly");
  }
  return r;
}
function Ja(e, t, n, i, r) {
  const s = n.cutPreference === "l" ? "l" : "w", o = new Set(r.map((h) => h[s]));
  z([
    () => A(o.size).toBeGreaterThan(0)
  ]);
  const a = r.filter((h) => we(h)), c = r.filter((h) => V(h));
  if (c.length < 2)
    return r;
  const l = [...c], u = [];
  for (const h of o) {
    const f = [], d = h * (1 - this.config.groups.tolerance);
    let p = h * (1 + this.config.groups.tolerance);
    p > i[s] && (p = i[s]);
    for (let w = l.length - 1; w >= 0; w--) {
      const S = l[w];
      !S.getMinSpacing(n.saw, !0) && S[s] <= n[s] && S[s] >= d && S[s] <= p && (f.push(S), l.splice(w, 1));
    }
    f.length > 0 && u.push(f);
  }
  if (u.length > 0) {
    const h = [];
    for (const f of u) {
      if (f.length < 2)
        continue;
      const d = f[0], p = d.guillotineState.getStripShapeBatchData(e);
      if (p === !1)
        throw new Error("no reference shape group");
      let w;
      try {
        const S = f.slice(0, -1).reduce((I, C) => I + C.getMinSpacing(n), 0), g = f.reduce((I, C) => I + C[t], 0);
        if (S + g > n[t])
          continue;
        const m = d.l, x = d.w, b = `ss-${[...new Set(f.map((I) => I.parentId || I.id))].sort().join("-")}_${this.counters.group++}`;
        w = new hn({
          l: m,
          w: x,
          id: b,
          shapes: f,
          direction: Io(t),
          container: n,
          type: "strip"
        });
      } catch (S) {
        console.log(S), w = null;
      }
      if (w) {
        const S = Math.min(...f.map((m) => {
          const x = m.guillotineState.getStripShapeBatchData(e);
          return x ? x.order : 1 / 0;
        }));
        w.guillotineState.setStripShapeBatchGroup(e, {
          stockId: n.autoId,
          dimension: w[t],
          rot: w.rot,
          order: S,
          priorityShape: p.priorityShape
        });
        const g = new Set(w.shapes.map((m) => m.id));
        h.push(w), i.shapes = i.shapes.filter((m) => !g.has(m.id)), i.shapes.push(w), r = r.filter((m) => !g.has(m.id));
      }
    }
    r = [...h, ...a, ...r.filter((f) => V(f))];
  } else
    r = [...a, ...c];
  return r;
}
function Ua(e) {
  for (const t of e)
    t.guillotineState.resetStripShapeBatchGroups();
}
function _a(e, t) {
  const n = t.getStock, i = 0.1 * n.l;
  function r(a) {
    return e.some((c) => a.parentId === c.parentId && !c.added) && dn(a, n) && a.willItFit(t);
  }
  const s = e.some((a) => dn(a, n) && a.willItFit(t) && a.l >= i || a.w >= i);
  return e.filter((a) => a.added ? !1 : (le(a) && a.updateShapeSpacing(t), e.length === 1 || !s ? r(a) : a.l < i && a.w < i ? !1 : r(a)));
}
function Os(e, t, n, i = null, r = !1) {
  if (!this.config.sample.enable && r === !1)
    return [];
  if (!e)
    throw new Error("getFirstShapeSample - type is required");
  z([
    () => A().toBe(!0),
    () => A(Co(n)).toBe(!0)
  ]);
  const s = Ne(t, !1, !0);
  if (!s.length)
    return [];
  const o = t.filter((d) => W(d)), a = [], c = n.getStock;
  let l = _a(s, n);
  if (!l.length)
    return [];
  if (e === "guillotine")
    l = Va.call(this, t, l, n, c, i, o);
  else if (e === "efficiency") {
    l.push(...o);
    const d = l.filter((p) => p.getPriority(c) > 0);
    d.length && (l = d), l.sort(Le.aspect);
  }
  const u = l.filter((d) => W(d)), h = l.filter((d) => !W(d)), f = [...u, ...h];
  for (const d of f)
    if (W(d)) {
      if (!d.willItFit(n)) {
        B("groups", `[getFirstShapeSample] Group ${d.id} does NOT fit container after calculateGroupDimensions - skipping (group: ${d.l}x${d.w}, container: ${n.l}x${n.w})`);
        continue;
      }
      d.firstShape.sampleRotations = [d.rot.valueOf()], a.push(d);
    } else {
      const p = t.find((w) => w.parentId === d.parentId && !w.added && w.constructor.name === d.constructor.name);
      if (p && (p.firstShape.sampleRotations = It(p, n), a.push(p)), a.length >= (e === "guillotine" ? this.config.sample.guillotine : this.config.sample.efficiency))
        break;
    }
  return B("firstShapes", `candidates for stock ${n.getStock?.id}, ${se(n) ? "segment " + n.id : ""}`, a.map((d) => ({ id: d.id, autoId: d.autoId, rotations: d.firstShape.sampleRotations }))), z([() => A(be(a)).toBe(!1)]), a;
}
function Fe(e) {
  let t = 0;
  const n = e.length;
  for (let i = 0, r = n - 1; i < n; r = i++)
    t += (e[r].x + e[i].x) * (e[r].y - e[i].y);
  return t / 2;
}
function Ka(e) {
  return Math.abs(Fe(e));
}
function Ie(e) {
  let t = 1 / 0, n = 1 / 0, i = -1 / 0, r = -1 / 0;
  for (const s of e)
    s.x < t && (t = s.x), s.y < n && (n = s.y), s.x > i && (i = s.x), s.y > r && (r = s.y);
  return {
    minX: t,
    minY: n,
    maxX: i,
    maxY: r,
    width: i - t,
    height: r - n
  };
}
function Ke(e, t) {
  if (t === 0)
    return e;
  let n = 0, i = 0;
  for (const o of e)
    n += o.x, i += o.y;
  n /= e.length, i /= e.length;
  const r = Math.cos(t), s = Math.sin(t);
  return e.map((o) => {
    const a = o.x - n, c = o.y - i;
    return {
      x: r * a - s * c + n,
      y: s * a + r * c + i
    };
  });
}
function Pt(e, t, n) {
  return e.map((i) => ({
    x: i.x + t,
    y: i.y + n
  }));
}
function Qa(e) {
  return e.map((t) => ({
    x: -t.x,
    y: -t.y
  }));
}
function Qe(e) {
  const t = Ie(e);
  return Pt(e, -t.minX, -t.minY);
}
function Be(e, t) {
  let n = !1;
  const i = t.length;
  for (let r = 0, s = i - 1; r < i; s = r++) {
    const o = t[r].x, a = t[r].y, c = t[s].x, l = t[s].y;
    a > e.y != l > e.y && e.x < (c - o) * (e.y - a) / (l - a) + o && (n = !n);
  }
  return n;
}
function Xe(e, t) {
  return e.minX < t.maxX && e.maxX > t.minX && e.minY < t.maxY && e.maxY > t.minY;
}
function el(e, t) {
  if (e.length <= 3)
    return e;
  const n = $n(e, t);
  if (n.length > 0) {
    const i = n[0], r = n[n.length - 1];
    (i.x !== r.x || i.y !== r.y) && n.push({ x: i.x, y: i.y });
  }
  return n;
}
function $n(e, t) {
  if (e.length <= 2)
    return e;
  let n = 0, i = 0;
  const r = e[0], s = e[e.length - 1];
  for (let o = 1; o < e.length - 1; o++) {
    const a = tl(e[o], r, s);
    a > n && (n = a, i = o);
  }
  if (n > t) {
    const o = $n(e.slice(0, i + 1), t), a = $n(e.slice(i), t);
    return o.slice(0, -1).concat(a);
  } else
    return [r, s];
}
function tl(e, t, n) {
  const i = n.x - t.x, r = n.y - t.y, s = i * i + r * r;
  if (s === 0) {
    const o = e.x - t.x, a = e.y - t.y;
    return Math.sqrt(o * o + a * a);
  }
  return Math.abs(r * e.x - i * e.y + n.x * t.y - n.y * t.x) / Math.sqrt(s);
}
function at(e) {
  const t = e.length;
  if (t < 3)
    return !1;
  let n = null;
  for (let i = 0; i < t; i++) {
    const r = e[i], s = e[(i + 1) % t], o = e[(i + 2) % t], a = (s.x - r.x) * (o.y - s.y) - (s.y - r.y) * (o.x - s.x);
    if (a !== 0) {
      if (n === null)
        n = a > 0 ? 1 : -1;
      else if ((a > 0 ? 1 : -1) !== n)
        return !1;
    }
  }
  return !0;
}
function Gi(e) {
  let t = e.length > 3 && e[0].x === e[e.length - 1].x && e[0].y === e[e.length - 1].y ? e.slice(0, -1) : e.slice();
  Fe(t) < 0 && (t = t.slice().reverse());
  const n = [], i = t.map((s, o) => o);
  let r = i.length * 2;
  for (; i.length > 3 && r-- > 0; ) {
    let s = !1;
    for (let o = 0; o < i.length; o++) {
      const a = i[(o - 1 + i.length) % i.length], c = i[o], l = i[(o + 1) % i.length], u = t[a], h = t[c], f = t[l];
      if ((h.x - u.x) * (f.y - u.y) - (h.y - u.y) * (f.x - u.x) <= 0)
        continue;
      let p = !1;
      for (const w of i)
        if (!(w === a || w === c || w === l) && nl(t[w], u, h, f)) {
          p = !0;
          break;
        }
      if (!p) {
        n.push([u, h, f]), i.splice(o, 1), s = !0;
        break;
      }
    }
    if (!s)
      break;
  }
  return i.length === 3 && n.push([t[i[0]], t[i[1]], t[i[2]]]), n;
}
function nl(e, t, n, i) {
  const r = (e.x - n.x) * (t.y - n.y) - (t.x - n.x) * (e.y - n.y), s = (e.x - i.x) * (n.y - i.y) - (n.x - i.x) * (e.y - i.y), o = (e.x - t.x) * (i.y - t.y) - (i.x - t.x) * (e.y - t.y), a = r < 0 || s < 0 || o < 0, c = r > 0 || s > 0 || o > 0;
  return !(a && c);
}
function Li(e, t) {
  let n = Ve(e), i = Ve(t);
  Fe(n) < 0 && (n = n.slice().reverse()), Fe(i) < 0 && (i = i.slice().reverse());
  const r = n.length, s = i.length;
  let o = 0;
  for (let h = 1; h < r; h++)
    (n[h].y < n[o].y || n[h].y === n[o].y && n[h].x < n[o].x) && (o = h);
  let a = 0;
  for (let h = 1; h < s; h++)
    (i[h].y < i[a].y || i[h].y === i[a].y && i[h].x < i[a].x) && (a = h);
  const c = [];
  let l = 0, u = 0;
  for (; l < r || u < s; ) {
    const h = (o + l) % r, f = (a + u) % s;
    c.push({
      x: n[h].x + i[f].x,
      y: n[h].y + i[f].y
    });
    const d = (o + l + 1) % r, p = (a + u + 1) % s, w = n[d].x - n[h].x, S = n[d].y - n[h].y, g = i[p].x - i[f].x, m = i[p].y - i[f].y, x = w * m - S * g;
    l >= r ? u++ : u >= s || x > 0 ? l++ : (x < 0 || l++, u++);
  }
  return c;
}
function Ve(e) {
  return e.length > 1 && e[0].x === e[e.length - 1].x && e[0].y === e[e.length - 1].y ? e.slice(0, -1) : e;
}
function il(e, t) {
  if (t <= 0)
    return e;
  const n = Ve(e), i = n.length;
  if (i < 3)
    return e;
  const s = Fe(n) >= 0 ? n : n.slice().reverse(), o = [];
  for (let c = 0; c < i; c++) {
    const l = s[c], u = s[(c + 1) % i], h = u.x - l.x, f = u.y - l.y, d = Math.sqrt(h * h + f * f);
    if (d === 0)
      continue;
    const p = f / d, w = -h / d;
    o.push({
      px: l.x + p * t,
      py: l.y + w * t,
      dx: h,
      dy: f
    });
  }
  if (o.length < 3)
    return e;
  const a = [];
  for (let c = 0; c < o.length; c++) {
    const l = o[c], u = o[(c + 1) % o.length], h = sl(l.px, l.py, l.px + l.dx, l.py + l.dy, u.px, u.py, u.px + u.dx, u.py + u.dy);
    h && a.push(h);
  }
  return a;
}
function sl(e, t, n, i, r, s, o, a) {
  const c = (e - n) * (s - a) - (t - i) * (r - o);
  if (Math.abs(c) < 1e-10)
    return null;
  const l = ((e - r) * (s - a) - (t - s) * (r - o)) / c;
  return {
    x: e + l * (n - e),
    y: t + l * (i - t)
  };
}
function ol(e, t, n = 0) {
  const i = Qa(t), r = at(Ve(e)), s = at(Ve(i));
  let o;
  if (r && s)
    o = [Li(e, i)];
  else {
    const a = r ? [Ve(Oi(e))] : Gi(e), c = s ? [Ve(Oi(i))] : Gi(i);
    o = [];
    for (const l of a)
      for (const u of c)
        o.push(Li(l, u));
  }
  return n > 0 && (o = o.map((a) => il(a, n))), o;
}
function rl(e, t, n) {
  const i = e - n.width, r = t - n.height;
  return i < 0 || r < 0 ? [] : [
    { x: 0, y: 0 },
    { x: i, y: 0 },
    { x: i, y: r },
    { x: 0, y: r },
    { x: 0, y: 0 }
  ];
}
function Oi(e) {
  return Fe(e) < 0 ? e.slice().reverse() : e;
}
function al(e) {
  const t = e.length;
  if (t < 3)
    return e.slice();
  const n = e[0].x === e[t - 1].x && e[0].y === e[t - 1].y ? e.slice(0, -1) : e.slice();
  n.sort((a, c) => a.x === c.x ? a.y - c.y : a.x - c.x);
  const i = (a, c, l) => (c.x - a.x) * (l.y - a.y) - (c.y - a.y) * (l.x - a.x), r = [];
  for (const a of n) {
    for (; r.length >= 2 && i(r[r.length - 2], r[r.length - 1], a) <= 0; )
      r.pop();
    r.push(a);
  }
  const s = [];
  for (let a = n.length - 1; a >= 0; a--) {
    const c = n[a];
    for (; s.length >= 2 && i(s[s.length - 2], s[s.length - 1], c) <= 0; )
      s.pop();
    s.push(c);
  }
  r.pop(), s.pop();
  const o = r.concat(s);
  return o.push({ x: o[0].x, y: o[0].y }), o;
}
function lt(e) {
  let t = 0, n = 0;
  for (const i of e)
    t += i.x, n += i.y;
  return {
    x: t / e.length,
    y: n / e.length
  };
}
function ll(e, t, n, i) {
  const r = Rt(n, i, e), s = Rt(n, i, t), o = Rt(e, t, n), a = Rt(e, t, i);
  return !!((r > 0 && s < 0 || r < 0 && s > 0) && (o > 0 && a < 0 || o < 0 && a > 0) || r === 0 && Et(n, i, e) || s === 0 && Et(n, i, t) || o === 0 && Et(e, t, n) || a === 0 && Et(e, t, i));
}
function Rt(e, t, n) {
  return (t.x - e.x) * (n.y - e.y) - (t.y - e.y) * (n.x - e.x);
}
function Et(e, t, n) {
  return Math.min(e.x, t.x) <= n.x && n.x <= Math.max(e.x, t.x) && Math.min(e.y, t.y) <= n.y && n.y <= Math.max(e.y, t.y);
}
function wt(e, t, n = 0) {
  const i = e.length, r = t.length;
  if (i < 3 || r < 3)
    return !1;
  const s = e[0].x === e[i - 1].x && e[0].y === e[i - 1].y, o = t[0].x === t[r - 1].x && t[0].y === t[r - 1].y, a = s ? i - 1 : i, c = o ? r - 1 : r, l = n * n;
  for (let u = 0; u < a; u++) {
    const h = e[u], f = e[(u + 1) % i];
    for (let d = 0; d < c; d++) {
      const p = t[d], w = t[(d + 1) % r];
      if (ll(h, f, p, w) || n > 0 && cl(h, f, p, w) < l)
        return !0;
    }
  }
  for (let u = 0; u < a; u++)
    if (Be(e[u], t))
      return !0;
  for (let u = 0; u < c; u++)
    if (Be(t[u], e))
      return !0;
  return !1;
}
function pt(e, t, n) {
  const i = n.x - t.x, r = n.y - t.y, s = i * i + r * r;
  if (s === 0) {
    const h = e.x - t.x, f = e.y - t.y;
    return h * h + f * f;
  }
  let o = ((e.x - t.x) * i + (e.y - t.y) * r) / s;
  o < 0 ? o = 0 : o > 1 && (o = 1);
  const a = t.x + o * i, c = t.y + o * r, l = e.x - a, u = e.y - c;
  return l * l + u * u;
}
function cl(e, t, n, i) {
  return Math.min(pt(e, n, i), pt(t, n, i), pt(n, e, t), pt(i, e, t));
}
function ul(e, t, n, i) {
  const r = t.x - e.x, s = t.y - e.y, o = i.x - n.x, a = i.y - n.y, c = r * a - s * o;
  if (Math.abs(c) < 1e-10)
    return null;
  const l = ((n.x - e.x) * a - (n.y - e.y) * o) / c, u = ((n.x - e.x) * s - (n.y - e.y) * r) / c;
  return l < 0 || l > 1 || u < 0 || u > 1 ? null : {
    x: e.x + l * r,
    y: e.y + l * s
  };
}
function Wi(e, t) {
  const n = [], i = e.length - (e[0].x === e[e.length - 1].x && e[0].y === e[e.length - 1].y ? 1 : 0), r = t.length - (t[0].x === t[t.length - 1].x && t[0].y === t[t.length - 1].y ? 1 : 0);
  for (let s = 0; s < i; s++) {
    const o = e[s], a = e[(s + 1) % e.length];
    for (let c = 0; c < r; c++) {
      const l = t[c], u = t[(c + 1) % t.length], h = ul(o, a, l, u);
      h && n.push(h);
    }
  }
  return n;
}
const fl = {
  kerfWidth: 0,
  leadIn: { enabled: !0, type: "line", length: 2, angle: 45 },
  leadOut: { enabled: !0, type: "line", length: 2, angle: 45 },
  climbMilling: !0,
  optimization: { method: "2-opt" },
  proximity: { enabled: !0, threshold: 5 },
  commonLine: { enabled: !0, tolerance: 0.5, minOverlapLength: 5 }
};
function Ni(e, t) {
  if (t <= 0 || e.length < 3)
    return [e];
  const n = e.length, i = [];
  for (let r = 0; r < n; r++) {
    const s = e[(r - 1 + n) % n], o = e[r], a = e[(r + 1) % n], c = o.x - s.x, l = o.y - s.y, u = a.x - o.x, h = a.y - o.y, f = Math.sqrt(c * c + l * l) || 1, d = Math.sqrt(u * u + h * h) || 1, p = l / f, w = -c / f, S = h / d, g = -u / d;
    let m = p + S, x = w + g;
    const y = Math.sqrt(m * m + x * x);
    y < 1e-10 ? (m = p, x = w) : (m /= y, x /= y);
    const v = p * m + w * x, b = v > 0.1 ? t / v : t * 2;
    i.push({
      x: o.x + m * b,
      y: o.y + x * b
    });
  }
  return [i];
}
function hl(e, t) {
  const i = Fe(e) > 0;
  return t && !i || !t && i ? e.slice().reverse() : e;
}
function Tn(e, t) {
  const n = t.x - e.x, i = t.y - e.y, r = Math.sqrt(n * n + i * i);
  return r === 0 ? { x: 0, y: -1 } : {
    x: i / r,
    y: -n / r
  };
}
function dl(e, t, n) {
  let i = 0, r = -1 / 0;
  const s = e.length;
  for (let c = 0; c < s; c++) {
    const l = e[c], u = e[(c + 1) % s], h = {
      x: (l.x + u.x) / 2,
      y: (l.y + u.y) / 2
    }, f = Tn(l, u), d = h.x, p = t.l - h.x, w = h.y, S = t.w - h.y, g = Math.min(d, p, w, S), m = h.x - t.l / 2, x = h.y - t.w / 2, y = Math.sqrt(m * m + x * x) || 1, v = f.x * (m / y) + f.y * (x / y);
    let b = -g + v * 10;
    if (n) {
      const I = Math.sqrt((n.x - h.x) ** 2 + (n.y - h.y) ** 2);
      b += -I * 0.5;
    }
    b > r && (r = b, i = c);
  }
  const o = e[i], a = e[(i + 1) % s];
  return {
    edgeIndex: i,
    midpoint: {
      x: (o.x + a.x) / 2,
      y: (o.y + a.y) / 2
    },
    normal: Tn(o, a)
  };
}
function Ws(e, t, n, i) {
  if (!n.leadIn.enabled || e.length < 3)
    return { leadIn: [], entryIndex: 0 };
  const { edgeIndex: r, midpoint: s, normal: o } = dl(e, t, i), a = n.leadIn.length, c = n.leadIn.angle * Math.PI / 180, l = Math.cos(c), u = Math.sin(c), h = o.x * l - o.y * u, f = o.x * u + o.y * l, d = s.x + h * a, p = s.y + f * a, w = 0.5, S = Math.max(w, Math.min(t.l - w, d)), g = Math.max(w, Math.min(t.w - w, p));
  return { leadIn: [
    { x: S, y: g, type: "rapid" },
    { x: s.x, y: s.y, type: "linear" }
  ], entryIndex: r };
}
function Ns(e, t, n, i) {
  if (!i.leadOut.enabled || e.length < 3)
    return [];
  const r = e.length, s = e[t], o = e[(t + 1) % r], a = {
    x: (s.x + o.x) / 2,
    y: (s.y + o.y) / 2
  }, c = Tn(s, o), l = i.leadOut.length, u = i.leadOut.angle * Math.PI / 180, h = Math.cos(u), f = Math.sin(u), d = c.x * h - c.y * f, p = c.x * f + c.y * h, w = a.x + d * l, S = a.y + p * l, g = 0.5, m = Math.max(g, Math.min(n.l - g, w)), x = Math.max(g, Math.min(n.w - g, S));
  return [
    { x: m, y: x, type: "linear" }
  ];
}
function me(e, t) {
  const n = e.x - t.x, i = e.y - t.y;
  return Math.sqrt(n * n + i * i);
}
function kn(e) {
  return e.leadIn.length > 0 ? e.leadIn[0] : e.contour.length > 0 ? e.contour[0] : e.centroid;
}
function bt(e) {
  return e.leadOut.length > 0 ? e.leadOut[e.leadOut.length - 1] : e.contour.length > 0 ? e.contour[e.contour.length - 1] : e.centroid;
}
function pl(e) {
  const t = /* @__PURE__ */ new Map();
  for (const i of e) {
    let r = t.get(i.shapeId);
    r || (r = { holes: [], outer: null }, t.set(i.shapeId, r)), i.isHole ? r.holes.push(i) : r.outer = i;
  }
  const n = [];
  for (const [i, { holes: r, outer: s }] of t) {
    const o = s?.centroid ?? r[0]?.centroid ?? { x: 0, y: 0 }, a = [], c = r.slice();
    let l = o;
    for (; c.length > 0; ) {
      let f = 0, d = 1 / 0;
      for (let w = 0; w < c.length; w++) {
        const S = me(l, kn(c[w]));
        S < d && (d = S, f = w);
      }
      const p = c.splice(f, 1)[0];
      a.push(p), l = bt(p);
    }
    const u = a[0] ?? s, h = s ?? a[a.length - 1];
    n.push({
      shapeId: i,
      holes: a,
      outer: s,
      entryPoint: u ? kn(u) : { x: 0, y: 0 },
      exitPoint: h ? bt(h) : { x: 0, y: 0 }
    });
  }
  return n;
}
function gl(e, t) {
  const n = [];
  for (const i of t) {
    const r = e[i];
    n.push(...r.holes), r.outer && n.push(r.outer);
  }
  return n;
}
function Rn(e, t) {
  if (t.length === 0)
    return 0;
  let n = me({ x: 0, y: 0 }, e[t[0]].entryPoint);
  for (let i = 0; i < t.length - 1; i++)
    n += me(e[t[i]].exitPoint, e[t[i + 1]].entryPoint);
  return n;
}
function ml(e) {
  const t = e.length;
  if (t <= 1)
    return e.map((r, s) => s);
  let n = [], i = 1 / 0;
  for (let r = -1; r < t; r++) {
    const s = /* @__PURE__ */ new Set(), o = [];
    let a;
    for (r >= 0 ? (s.add(r), o.push(r), a = e[r].exitPoint) : a = { x: 0, y: 0 }; o.length < t; ) {
      let l = -1, u = 1 / 0;
      for (let h = 0; h < t; h++) {
        if (s.has(h))
          continue;
        const f = me(a, e[h].entryPoint);
        f < u && (u = f, l = h);
      }
      s.add(l), o.push(l), a = e[l].exitPoint;
    }
    const c = Rn(e, o);
    c < i && (i = c, n = o);
  }
  return n;
}
function yl(e, t, n = 50) {
  const i = t.length;
  if (i <= 2)
    return t;
  const r = t.slice();
  let s = !0, o = 0;
  for (; s && o < n; ) {
    s = !1, o++;
    for (let a = -1; a < i - 1; a++)
      for (let c = a + 2; c < i; c++) {
        const l = a >= 0 ? e[r[a]].exitPoint : { x: 0, y: 0 }, u = c + 1 < i ? e[r[c + 1]].entryPoint : null;
        let h = me(l, e[r[a + 1]].entryPoint), f = me(l, e[r[c]].entryPoint);
        u && (h += me(e[r[c]].exitPoint, u), f += me(e[r[a + 1]].exitPoint, u));
        for (let d = a + 1; d < c; d++)
          h += me(e[r[d]].exitPoint, e[r[d + 1]].entryPoint);
        for (let d = c; d > a + 1; d--)
          f += me(e[r[d]].exitPoint, e[r[d - 1]].entryPoint);
        if (f < h - 1e-10) {
          let d = a + 1, p = c;
          for (; d < p; ) {
            const w = r[d];
            r[d] = r[p], r[p] = w, d++, p--;
          }
          s = !0;
        }
      }
  }
  return r;
}
function Sl(e, t, n = 30) {
  if (t.length <= 2)
    return t;
  const r = t.slice();
  let s = Rn(e, r), o = 0, a = !0;
  for (; a && o < n; ) {
    a = !1, o++;
    for (let c = 0; c < r.length; c++) {
      const l = r.splice(c, 1)[0];
      let u = c, h = s;
      for (let f = 0; f <= r.length; f++) {
        r.splice(f, 0, l);
        const d = Rn(e, r);
        d < h - 1e-10 && (h = d, u = f), r.splice(f, 1);
      }
      r.splice(u, 0, l), h < s - 1e-10 && (s = h, a = !0);
    }
  }
  return r;
}
function Fi(e, t) {
  if (e.length <= 1 || t.optimization.method === "none")
    return e;
  const n = pl(e);
  let i = ml(n);
  return t.optimization.method === "2-opt" && (i = yl(n, i), i = Sl(n, i)), gl(n, i);
}
function Yi(e, t, n) {
  let i = { x: 0, y: 0 };
  for (const r of e) {
    const s = r._polygon;
    if (!s || s.length < 3) {
      i = bt(r);
      continue;
    }
    const { leadIn: o, entryIndex: a } = Ws(s, t, n, i);
    r.leadIn = o, r._entryIndex = a, r.contour = Zn(s, a), r.leadOut = Ns(s, a, t, n), i = bt(r);
  }
}
function xl(e, t) {
  if (!t.proximity.enabled || e.length < 2)
    return;
  const n = t.proximity.threshold;
  for (let i = 0; i < e.length - 1; i++) {
    const r = bt(e[i]), s = kn(e[i + 1]);
    me(r, s) < n && (e[i].leadOut = [], e[i + 1].leadIn = []);
  }
}
function wl(e, t, n) {
  const i = [];
  for (let r = 0; r < e.length; r++) {
    const s = e[r]._polygon;
    if (!s || s.length < 3)
      continue;
    const o = e[r].bounds;
    for (let a = r + 1; a < e.length; a++) {
      if (e[r].shapeId === e[a].shapeId)
        continue;
      const c = e[a]._polygon;
      if (!c || c.length < 3)
        continue;
      const l = e[a].bounds;
      if (o.minX - l.maxX > t || l.minX - o.maxX > t || o.minY - l.maxY > t || l.minY - o.maxY > t)
        continue;
      const u = s.length, h = c.length;
      for (let f = 0; f < u; f++) {
        const d = s[f], p = s[(f + 1) % u], w = p.x - d.x, S = p.y - d.y, g = Math.sqrt(w * w + S * S);
        if (g < 1e-9)
          continue;
        const m = w / g, x = S / g;
        for (let y = 0; y < h; y++) {
          const v = c[y], b = c[(y + 1) % h], I = b.x - v.x, C = b.y - v.y, P = Math.sqrt(I * I + C * C);
          if (P < 1e-9)
            continue;
          const E = I / P, M = C / P, X = m * E + x * M;
          if (Math.abs(X + 1) > 0.05)
            continue;
          const O = v.x - d.x, G = v.y - d.y;
          if (Math.abs(O * x - G * m) > t)
            continue;
          const $ = 0, L = g, R = (v.x - d.x) * m + (v.y - d.y) * x, k = (b.x - d.x) * m + (b.y - d.y) * x, H = Math.min(R, k), q = Math.max(R, k), Q = Math.max($, H), _ = Math.min(L, q) - Q;
          _ >= n && i.push({
            contourA: e[r],
            edgeIdxA: f,
            contourB: e[a],
            edgeIdxB: y,
            overlapLength: _
          });
        }
      }
    }
  }
  return i;
}
function bl(e, t, n, i) {
  if (t.length === 0)
    return;
  const r = /* @__PURE__ */ new Map();
  for (let s = 0; s < e.length; s++)
    r.set(e[s], s);
  for (const s of t) {
    const o = r.get(s.contourA) ?? -1, a = r.get(s.contourB) ?? -1;
    o < 0 || a < 0 || (o < a ? (s.contourB._skipEdges || (s.contourB._skipEdges = /* @__PURE__ */ new Set()), s.contourB._skipEdges.add(s.edgeIdxB)) : (s.contourA._skipEdges || (s.contourA._skipEdges = /* @__PURE__ */ new Set()), s.contourA._skipEdges.add(s.edgeIdxA)));
  }
  for (const s of e) {
    if (!s._skipEdges || s._skipEdges.size === 0)
      continue;
    const o = s._polygon, a = s._entryIndex;
    !o || a == null || (s.contour = Zn(o, a, s._skipEdges));
  }
}
function Hi(e) {
  let t = 0;
  for (let n = 1; n < e.length; n++)
    t += me(e[n - 1], e[n]);
  return t;
}
function Zn(e, t, n) {
  const i = e.length, r = [], s = {
    x: (e[t].x + e[(t + 1) % i].x) / 2,
    y: (e[t].y + e[(t + 1) % i].y) / 2
  }, o = n?.has(t) ?? !1;
  r.push({ x: s.x, y: s.y, type: o ? "rapid" : "linear" });
  const a = (t + 1) % i;
  r.push({
    x: e[a].x,
    y: e[a].y,
    type: o ? "rapid" : "linear"
  });
  for (let c = 1; c < i; c++) {
    const l = (a + c) % i, u = (t + c) % i, h = n?.has(u) ?? !1;
    r.push({
      x: e[l].x,
      y: e[l].y,
      type: h ? "rapid" : "linear"
    });
  }
  return r.push({ x: s.x, y: s.y, type: o ? "rapid" : "linear" }), r;
}
function Fs(e, t, n) {
  const i = { ...fl, ...n }, r = t?.saw?.bladeWidth ?? 0;
  i.kerfWidth === 0 && r > 0 && (i.kerfWidth = r);
  const s = i.kerfWidth / 2, o = { l: t.l, w: t.w }, a = [];
  for (const p of e) {
    if (!p.added)
      continue;
    const w = [], S = p.getPositionedOuterBoundary();
    w.push({
      polygon: S,
      label: p.name || p.autoId,
      isHole: !1
    });
    const g = p.getPositionedHoles();
    for (let m = 0; m < g.length; m++)
      w.push({
        polygon: g[m],
        label: `${p.name || p.autoId} hole ${m + 1}`,
        isHole: !0
      });
    for (const m of w) {
      let x = m.polygon;
      if (!x || x.length < 3)
        continue;
      x[0].x === x[x.length - 1].x && x[0].y === x[x.length - 1].y && (x = x.slice(0, -1));
      let y;
      if (s > 0) {
        const v = Fe(x);
        if (m.isHole) {
          const b = v < 0 ? x.slice().reverse() : x;
          y = Ni(b, s);
        } else {
          const b = v > 0 ? x.slice().reverse() : x;
          y = Ni(b, s);
        }
      } else
        y = [x];
      for (let v = 0; v < y.length; v++) {
        let b = y[v];
        b = hl(b, i.climbMilling);
        const { leadIn: I, entryIndex: C } = Ws(b, o, i), P = Zn(b, C), E = Ns(b, C, o, i), M = Ie(b), X = lt(b), O = y.length > 1 ? ` (part ${v + 1})` : "";
        a.push({
          shapeId: p.autoId,
          label: m.label + O,
          isHole: m.isHole,
          leadIn: I,
          contour: P,
          leadOut: E,
          centroid: X,
          bounds: M,
          _polygon: b,
          _entryIndex: C
        });
      }
    }
  }
  const c = i.commonLine.enabled ? wl(a, i.commonLine.tolerance, i.commonLine.minOverlapLength) : [];
  let l = Fi(a, i);
  for (let p = 0; p < 3; p++) {
    Yi(l, o, i);
    const w = Fi(l, i);
    let S = !0;
    for (let g = 0; g < w.length; g++)
      if (w[g] !== l[g]) {
        S = !1;
        break;
      }
    if (l = w, S)
      break;
  }
  Yi(l, o, i), bl(l, c), xl(l, i);
  for (const p of l)
    delete p._polygon, delete p._entryIndex, delete p._skipEdges;
  let u = 0, h = 0, f = 0, d = { x: 0, y: 0 };
  for (const p of l) {
    const w = p.leadIn.length > 0 ? p.leadIn[0] : p.contour[0];
    w && (h += me(d, w)), u += Hi(p.leadIn.filter((g) => g.type === "linear"));
    for (let g = 1; g < p.contour.length; g++) {
      const m = me(p.contour[g - 1], p.contour[g]);
      p.contour[g].type === "rapid" ? (h += m, f += m) : u += m;
    }
    u += Hi(p.leadOut);
    const S = p.leadOut.length > 0 ? p.leadOut[p.leadOut.length - 1] : p.contour[p.contour.length - 1];
    S && (d = S);
  }
  return c.length > 0 && console.log(`[cut] Common-line: ${c.length} shared edges detected, saved ${f.toFixed(1)}mm cutting distance`), {
    contours: l,
    totalCutDistance: Math.round(u * 100) / 100,
    totalRapidDistance: Math.round(h * 100) / 100,
    commonLineSaved: Math.round(f * 100) / 100,
    config: i
  };
}
const je = {
  async calculation(e, t, n) {
    if (await je.tryFirstShapes.call(this, t, n), F("efficiency.calculation.has-best", !!this.bestResult, { stock: t.id }), !this.bestResult)
      return;
    const i = Ql.call(this, this.bestResult, t);
    if (F("efficiency.evo.enabled", i, { stock: t.id }), i) {
      t.algoBenchmark = this.bestResult;
      try {
        const o = await new ea(this, t, n).run();
        if (!o)
          return;
        const a = t.algoBenchmark, c = o.result, l = a?.score?.totalShapesPlaced ?? -1, u = c?.score?.totalShapesPlaced ?? -1, h = a?.score?.efficiency ?? 0, f = c?.score?.efficiency ?? 0, d = u > l || u === l && f > h;
        F("efficiency.evo.accept", d, { stock: t.id, priorPlaced: l, evoPlaced: u }), d && await Se.call(this, o.result), delete t.algoBenchmark;
      } catch (s) {
        console.error("error with evo", s);
      }
      rt({
        bestResult: this.bestResult,
        shapeList: this.shapeList,
        stockList: this.stockList,
        resetShapes: this.resetShapes?.bind(this),
        groupList: this.groupList
      });
    }
    const r = !!(e?.cncPlan && this.bestResult?.shapes?.length);
    if (F("efficiency.cnc-plan.requested", r, { stock: t.id }), r)
      try {
        const s = t?.saw?.bladeWidth ?? 0, o = this.bestResult.shapes.filter((a) => a.added);
        if (o.length > 0) {
          const a = o.map((l) => {
            const u = l.rot === 1, h = u ? l.w : l.l, f = u ? l.l : l.w;
            return {
              added: !0,
              autoId: l.autoId || l.id,
              getPositionedOuterBoundary() {
                return [
                  { x: l.x, y: l.y },
                  { x: l.x + h, y: l.y },
                  { x: l.x + h, y: l.y + f },
                  { x: l.x, y: l.y + f }
                ];
              },
              getPositionedHoles() {
                return [];
              }
            };
          }), c = Fs(a, t, { kerfWidth: s });
          this.cuttingPlans || (this.cuttingPlans = {}), this.cuttingPlans[t.autoId] = c, console.log(`[efficiency] Cutting plan: ${c.contours.length} contours, cut: ${c.totalCutDistance}mm, rapid: ${c.totalRapidDistance}mm` + (c.commonLineSaved > 0 ? `, common-line saved: ${c.commonLineSaved}mm` : ""));
        }
      } catch (s) {
        console.error("[efficiency] Cutting plan generation failed:", s);
      }
  },
  /**
   * place the first shape according to firstShapeRotation strategy
   */
  defaultFirstShapePlacement: function(e = null, t = 0, n) {
    if (!ge(t))
      throw new Error("no rotation provided");
    if (!ge(e))
      throw new Error("first shape not provided to defaultFirstShapePlacement");
    if (typeof e != "object")
      throw new Error("first shape is not an object");
    if (e.added)
      throw new Error(`first shape ${e.id} has been added previously`);
    if (!n)
      throw new Error("no stock provided to defaultFirstShapePlacement");
    if (e.rot !== t && !_e(e, t, n))
      throw new Error(`first shape ${e.id} cannot rotate to: ${t}`);
    $e(e, t, n), e.resetBothScores(), As.call(this, e, n, zn.call(this, n, n, e), []), e.addToStock(n), e.firstShape.isFirstShape = !0, e.placementOrder = 0, W(e) ? (e.placeMyShapes(n), this.counters.placement = e.shapes.length) : this.counters.placement = 1;
  },
  /**
   * try all first shapes with both rotations if relevant
   */
  tryFirstShapes: async function(e, t) {
    const n = fe(t, e);
    let i = Os.call(this, "efficiency", n, e);
    const r = Ne(n, !1, !0);
    let s = r.length > 1;
    if (s) {
      const l = n.reduce((u, h) => u + h.area, 0) < e.area * this.config.groups.shapeAreaThreshold;
      F("efficiency.first-shape.area-threshold", l, { stock: e.id }), l && (s = !1);
    }
    let o = [];
    const a = s && !this.hasMinSpacing && this.config.groups.efficiency.firstShape && r.length < this.config.groups.efficiency.limit;
    F("efficiency.first-shape.groups", a, { stock: e.id, uniqueShapes: r.length }), a && (o = je.createFirstShapeGroups.call(this, n, e)), i.push(...o);
    let c = t;
    i = Ne(i, !1, !0);
    for (const l of i)
      l.firstShape.isFirstShape = !0, W(l) && (c = Qr(l.shapes, n), c.unshift(l)), await je.calculateFirstShapeRotations.call(this, c, e, l), l.firstShape.isFirstShape = !1;
  },
  /**
   * run the calculations for both first shape rotations
   */
  calculateFirstShapeRotations: async function(e, t, n) {
    const i = It(n, t);
    for (const r of i) {
      this.resetShapes(e, {
        keepScores: !1,
        removeGroups: !1
      }), n.added = !1, W(n) && (n.placeMyShapes(t), e.unshift(...n.shapes), e = e.filter((o) => o.id !== n.id));
      const s = await xa.call(this, e, t, n, r);
      ge(s.score) && await Se.call(this, s);
    }
  },
  /**
   * scores the stock for a specific strategy and adds the score to the stock object
   */
  runSpecificStrategy: async function({ shapes: e, container: t, firstShape: n = null, firstShapeRotation: i = 0, weighting: r = null }) {
    const s = performance.now();
    if (this.counters.placement = 1, F("efficiency.strategy.has-shapes", e.length > 0, { container: t?.id }), !e.length)
      return !1;
    if (!n)
      throw new Error("no firstShape provided to efficiency.runSpecificStrategy");
    if (ie(t) && (t.used = !1), this.resetShapes(e, {
      keepScores: !0,
      removeGroups: !1
    }), typeof n == "string")
      n = this.shapeList.find((l) => l.id === n);
    else if (un(n) || vo(n)) {
      const l = n.autoId || n.id;
      n = this.shapeList.find((u) => u.autoId === l || u.id === l);
    }
    if (!n)
      throw new Error("firstShape not found in shapeList");
    if (n.reset(), e.length) {
      if (r) {
        this.weighting.custom = {};
        for (const l of Object.keys(this.weighting.efficiency.standard()))
          this.weighting.custom[l] = r[l] ? r[l] : 0;
      }
      je.defaultFirstShapePlacement.call(this, n, i, t), await Zt.call(this, e, n, t);
    }
    const o = De.call(this, e, t, n);
    r && (this.weighting.custom = null);
    const a = performance.now(), c = Math.ceil(a - s);
    return o.time = c, o;
  },
  /**
   * create groups to be used as a first shape
   * CAUTION - can make very simple calculations less efficient
   */
  createFirstShapeGroups: function(e, t) {
    if (!this.config.groups.efficiency.firstShape)
      return [];
    const n = fe(e, t).filter((o) => V(o)), i = ["l", "w"], r = /* @__PURE__ */ new Map();
    for (const o of i)
      ts({
        shapes: n,
        container: t,
        targetSize: t[o],
        exact: !1,
        direction: o,
        config: this.config,
        preventDuplicates: !0,
        counters: this.counters
      }).forEach((c) => {
        const l = `${c.l}-${c.w}`;
        r.has(l) || r.set(l, c);
      }), this.resetShapes(n);
    let s = Array.from(r.values());
    return s.sort((o, a) => a.efficiency - o.efficiency), s = s.slice(0, this.config.sample.groupSize), z([
      () => A(s.every((o) => D.lessThanOrEqualTo(o.l, t.l) && D.lessThanOrEqualTo(o.w, t.w))).toBe(!0)
    ]), s.length ? s : [];
  }
};
function Il(e, t = 36) {
  const n = e.length;
  if (n < 4)
    return new Array(t).fill(0);
  const i = [], r = lt(e);
  for (let a = 0; a < n - 1; a++) {
    const c = e[(a - 1 + n - 1) % (n - 1)], l = e[a], u = e[(a + 1) % (n - 1)], h = l.x - c.x, f = l.y - c.y, d = u.x - l.x, p = u.y - l.y, w = h * p - f * d, S = Math.atan2(l.y - r.y, l.x - r.x);
    i.push({ angle: S, curvature: w });
  }
  i.sort((a, c) => a.angle - c.angle);
  const s = [], o = 2 * Math.PI / t;
  for (let a = 0; a < t; a++) {
    const c = -Math.PI + a * o;
    let l = i[0], u = 1 / 0;
    for (const h of i) {
      let f = Math.abs(h.angle - c);
      f > Math.PI && (f = 2 * Math.PI - f), f < u && (u = f, l = h);
    }
    s.push(l.curvature);
  }
  return s;
}
function Cl(e, t, n) {
  const i = e.length;
  let r = 0, s = 0;
  for (let o = 0; o < i; o++) {
    const a = e[o], c = t[(o + n + i) % i];
    a !== 0 && c !== 0 && (Math.sign(a) !== Math.sign(c) && (r += Math.min(Math.abs(a), Math.abs(c))), s++);
  }
  return s > 0 ? r / s : 0;
}
function vl(e, t = 36, n = 3) {
  const i = [];
  for (const o of e)
    !o.outline?.length || o.outline.length < 4 || i.push({
      shapeId: o.autoId,
      samples: Il(o.outline, t),
      sampleAngles: Array.from({ length: t }, (a, c) => -Math.PI + c * (2 * Math.PI / t)),
      outline: o.outline
    });
  const r = [], s = 2 * Math.PI / t;
  for (let o = 0; o < i.length; o++) {
    const a = i[o], c = [];
    for (let l = o + 1; l < i.length; l++) {
      const u = i[l];
      let h = 0, f = 0;
      for (let d = 0; d < t; d++) {
        const p = Cl(a.samples, u.samples, d);
        p > h && (h = p, f = d);
      }
      if (h > 0) {
        const d = f * s, p = lt(a.outline), w = lt(u.outline), S = Ie(a.outline);
        c.push({
          shapeAId: a.shapeId,
          shapeBId: u.shapeId,
          optimalRotationB: d,
          complementScore: h,
          translationHint: {
            dx: p.x - w.x + S.width * 0.5,
            dy: p.y - w.y
          }
        });
      }
    }
    c.sort((l, u) => u.complementScore - l.complementScore), r.push(...c.slice(0, n));
  }
  return r.sort((o, a) => a.complementScore - o.complementScore), r;
}
function Ys(e, t, n) {
  for (const i of n) {
    if (i.shapeAId === e && t.has(i.shapeBId))
      return i;
    if (i.shapeBId === e && t.has(i.shapeAId))
      return {
        ...i,
        shapeAId: i.shapeBId,
        shapeBId: i.shapeAId,
        translationHint: {
          dx: -i.translationHint.dx,
          dy: -i.translationHint.dy
        }
      };
  }
  return null;
}
function Pl(e, t) {
  const n = Math.round(t * 1e3), i = e.length;
  if (i === 0)
    return `empty_${n}`;
  let r = 1 / 0, s = 1 / 0;
  for (const c of e)
    c.x < r && (r = c.x), c.y < s && (s = c.y);
  const o = new Array(i * 2);
  for (let c = 0; c < i; c++)
    o[c * 2] = Math.round((e[c].x - r) * 100), o[c * 2 + 1] = Math.round((e[c].y - s) * 100);
  let a = 2166136261;
  for (let c = 0; c < o.length; c++)
    a ^= o[c], a = a * 16777619 | 0;
  return `${i}_${a >>> 0}_${n}`;
}
function zi(e, t) {
  return Qe(t === 0 ? e : Ke(e, t));
}
class $l {
  cache = /* @__PURE__ */ new Map();
  spacing = 0;
  // Per-shape outline hash cache: shapeAutoId → Map<rotKey, hash>
  // Avoids recomputing the same outline hash for each shape on every NFP lookup
  shapeHashCache = /* @__PURE__ */ new Map();
  /**
   * Set the spacing used for NFP inflation
   */
  setSpacing(t) {
    this.spacing = t;
  }
  /**
   * Get a cache key for an NFP pair
   */
  getKey(t, n) {
    return `${t}|${n}`;
  }
  /**
   * Get cached outline hash for a shape at a rotation, or compute and cache it.
   * Uses the placement reference (placementOutline when present) so the hash keys match
   * the geometry actually fed to computeNFP below.
   */
  getShapeHash(t, n) {
    const i = Math.round(n * 1e3);
    let r = this.shapeHashCache.get(t.autoId);
    if (r) {
      const a = r.get(i);
      if (a)
        return a;
    } else
      r = /* @__PURE__ */ new Map(), this.shapeHashCache.set(t.autoId, r);
    const s = t.placementOutline && t.placementOutline.length >= 3 ? t.placementOutline : t.outline, o = Pl(s, n);
    return r.set(i, o), o;
  }
  /**
   * Get NFP for a shape pair at specific rotations.
   * Computes on demand if not already cached.
   */
  get(t, n, i, r) {
    const s = this.getShapeHash(t, n), o = this.getShapeHash(i, r), a = this.getKey(s, o), c = this.cache.get(a);
    if (c)
      return c;
    if (!t.outline?.length || !i.outline?.length)
      return null;
    const l = t.placementOutline && t.placementOutline.length >= 3 ? t.placementOutline : t.outline, u = i.placementOutline && i.placementOutline.length >= 3 ? i.placementOutline : i.outline, h = zi(l, n), f = zi(u, r), d = ol(h, f, this.spacing);
    return this.cache.set(a, d), d;
  }
  /**
   * Store an NFP computation result
   */
  set(t, n, i, r, s) {
    const o = this.getShapeHash(t, n), a = this.getShapeHash(i, r);
    this.cache.set(this.getKey(o, a), s);
  }
  /**
   * Clear the cache
   */
  clear() {
    this.cache.clear(), this.shapeHashCache.clear();
  }
  /**
   * Get cache statistics
   */
  get size() {
    return this.cache.size;
  }
}
function ct(e) {
  const t = e.placementOutline;
  return t && t.length >= 3 ? t : e.outline;
}
let Mt = null;
async function Tl(e) {
  if (Mt)
    return Mt;
  const t = process.execArgv.find((u) => u.includes("tsx/dist/loader"));
  if (!t)
    return e;
  const n = t.replace(/loader\.mjs$/, "esm/api/index.mjs"), { mkdtempSync: i, writeFileSync: r } = await import("./__vite-browser-external-DYxpcVy9.js"), { tmpdir: s } = await import("./__vite-browser-external-DYxpcVy9.js"), { join: o } = await import("./__vite-browser-external-DYxpcVy9.js"), { pathToFileURL: a } = await import("./__vite-browser-external-DYxpcVy9.js"), c = i(o(s(), "nesting-worker-")), l = o(c, "placement-worker-bootstrap.mjs");
  return r(l, [
    `import { register } from '${n}'`,
    "register()",
    `await import('${e.toString()}')`,
    ""
  ].join(`
`)), Mt = a(l), Mt;
}
function kl(e) {
  if (!e.length)
    return "";
  let t = e;
  const n = e[e.length - 1];
  return e.length > 1 && Math.abs(e[0].x - n.x) < 0.1 && Math.abs(e[0].y - n.y) < 0.1 && (t = e.slice(0, -1)), t.map((r) => ({ x: Math.round(r.x * 10) / 10, y: Math.round(r.y * 10) / 10 })).sort((r, s) => r.x - s.x || r.y - s.y).map((r) => `${r.x},${r.y}`).join("|");
}
function Rl(e, t) {
  if (!e?.length || e.length < 3)
    return t;
  const n = /* @__PURE__ */ new Set(), i = [];
  for (const r of t) {
    const s = Qe(r === 0 ? e : Ke(e, r)), o = kl(s);
    n.has(o) || (n.add(o), i.push(r));
  }
  return i;
}
const jt = {
  compression: 0.4134,
  crossAxis: 0.019,
  edge: 0,
  compact: 0.0839,
  fit: 24e-4,
  axis: 0,
  contour: 0.0297,
  cavity: 0
};
class El {
  cache = /* @__PURE__ */ new Map();
  key(t, n) {
    return n === 0 ? t : `${t}:${n}`;
  }
  getNormalized(t, n) {
    const i = this.key(t.autoId, n);
    let r = this.cache.get(i);
    if (!r) {
      const s = ct(t), o = n === 0 ? s : Ke(s, n);
      r = Qe(o), this.cache.set(i, r);
    }
    return r;
  }
  clear() {
    this.cache.clear();
  }
}
class Jn {
  cellSize;
  cols;
  rows;
  cells;
  constructor(t, n, i) {
    this.cellSize = i, this.cols = Math.ceil(t / i) + 1, this.rows = Math.ceil(n / i) + 1, this.cells = new Array(this.cols * this.rows);
    for (let r = 0; r < this.cells.length; r++)
      this.cells[r] = /* @__PURE__ */ new Set();
  }
  cellRange(t) {
    return {
      minC: Math.max(0, Math.floor(t.minX / this.cellSize)),
      maxC: Math.min(this.cols - 1, Math.floor(t.maxX / this.cellSize)),
      minR: Math.max(0, Math.floor(t.minY / this.cellSize)),
      maxR: Math.min(this.rows - 1, Math.floor(t.maxY / this.cellSize))
    };
  }
  insert(t, n) {
    const { minC: i, maxC: r, minR: s, maxR: o } = this.cellRange(n);
    for (let a = s; a <= o; a++)
      for (let c = i; c <= r; c++)
        this.cells[a * this.cols + c].add(t);
  }
  remove(t, n) {
    const { minC: i, maxC: r, minR: s, maxR: o } = this.cellRange(n);
    for (let a = s; a <= o; a++)
      for (let c = i; c <= r; c++)
        this.cells[a * this.cols + c].delete(t);
  }
  // Reusable query buffer to avoid Set allocation per call
  queryResult = /* @__PURE__ */ new Set();
  query(t) {
    const n = this.queryResult;
    n.clear();
    const { minC: i, maxC: r, minR: s, maxR: o } = this.cellRange(t);
    for (let a = s; a <= o; a++)
      for (let c = i; c <= r; c++)
        for (const l of this.cells[a * this.cols + c])
          n.add(l);
    return n;
  }
  rebuild(t) {
    for (const n of this.cells)
      n.clear();
    for (let n = 0; n < t.length; n++)
      this.insert(n, t[n].bounds);
  }
}
function Ml(e, t, n) {
  let r = 0, s = 0;
  for (let o = 0; o < e.length; o++) {
    const a = e[o], c = e[(o + 1) % e.length], l = c.x - a.x, u = c.y - a.y, h = Math.sqrt(l * l + u * u);
    if (s += h, h < 0.5)
      continue;
    const f = Math.abs(a.y) < 0.5 && Math.abs(c.y) < 0.5, d = Math.abs(a.x) < 0.5 && Math.abs(c.x) < 0.5, p = Math.abs(a.y - n) < 0.5 && Math.abs(c.y - n) < 0.5, w = Math.abs(a.x - t) < 0.5 && Math.abs(c.x - t) < 0.5;
    (f || d || p || w) && (r += h);
  }
  return s > 0 ? r / s : 0;
}
function Al(e, t, n) {
  if (t.length === 0)
    return 0;
  let i = 1 / 0;
  if (n) {
    const r = Math.max(e.width, e.height) * 2, s = {
      minX: e.minX - r,
      minY: e.minY - r,
      maxX: e.maxX + r,
      maxY: e.maxY + r,
      width: e.width + r * 2,
      height: e.height + r * 2
    };
    for (const o of n.query(s)) {
      const a = t[o], c = Math.max(0, e.minX - a.bounds.maxX, a.bounds.minX - e.maxX), l = Math.max(0, e.minY - a.bounds.maxY, a.bounds.minY - e.maxY), u = Math.sqrt(c * c + l * l);
      u < i && (i = u);
    }
  } else
    for (const r of t) {
      const s = Math.max(0, e.minX - r.bounds.maxX, r.bounds.minX - e.maxX), o = Math.max(0, e.minY - r.bounds.maxY, r.bounds.minY - e.maxY), a = Math.sqrt(s * s + o * o);
      a < i && (i = a);
    }
  return i;
}
function Dl(e, t, n, i, r, s, o) {
  const a = e.length - 1;
  if (a < 2)
    return 0;
  const c = s + 5, l = c * c;
  let u = 0;
  const h = {
    minX: t.minX - c,
    minY: t.minY - c,
    maxX: t.maxX + c,
    maxY: t.maxY + c,
    width: t.width + c * 2,
    height: t.height + c * 2
  }, f = [];
  if (o)
    for (const d of o.query(h))
      f.push(n[d]);
  else
    for (const d of n)
      Xe(h, d.bounds) && f.push(d);
  for (let d = 0; d < a; d++) {
    const p = e[d], w = e[d + 1], S = (p.x + w.x) / 2, g = (p.y + w.y) / 2, m = { x: S, y: g };
    let x = Math.min(
      S * S,
      // left edge
      g * g,
      // bottom edge
      (i - S) * (i - S),
      // right edge
      (r - g) * (r - g)
      // top edge
    );
    if (x > l)
      for (const y of f) {
        for (let v = 0; v < y.polygon.length - 1; v++) {
          const b = pt(m, y.polygon[v], y.polygon[v + 1]);
          if (b < x && (x = b, x <= l))
            break;
        }
        if (x <= l)
          break;
      }
    x <= l && u++;
  }
  return u / a;
}
function qi(e, t, n, i, r, s, o, a, c, l, u, h, f, d, p, w) {
  const S = s === "x" ? n : i, g = s === "x" ? i : n;
  if (d === void 0) {
    d = 0;
    for (const L of a) {
      const R = s === "x" ? L.bounds.maxX : L.bounds.maxY;
      R > d && (d = R);
    }
  }
  const m = l ? s === "x" ? l.maxX : l.maxY : s === "x" ? e : t, x = m > d ? m / S : (s === "x" ? e : t) / S * 0.5, y = s === "x" ? t / g : e / g, v = c ? Ml(c, n, i) : 0, b = l ? l.maxX - l.minX : 100, I = l ? l.maxY - l.minY : 100, C = Math.sqrt(b * b + I * I), P = l ? Al(l, a, p) : 0, E = Math.min(P / C, 1), M = !w && c && l && a.length > 0 ? Dl(c, l, a, n, i, h, p) : 0, X = u % (Math.PI / 2), O = Math.min(X, Math.PI / 2 - X) / (Math.PI / 4);
  let G = 0;
  if (o && a.length > 0) {
    const L = a.find((R) => R.shape.autoId === o.shapeAId);
    if (L) {
      const R = e - (L.x + o.translationHint.dx), k = t - (L.y + o.translationHint.dy), H = Math.sqrt(R * R + k * k);
      G = o.complementScore / (1 + H / 100);
    }
  }
  let T = 0;
  if (a.length > 0 && l) {
    const L = l.minX + l.width / 2, R = l.minY + l.height / 2;
    for (const k of a)
      if (Xe(l, k.bounds) && L >= k.bounds.minX && L <= k.bounds.maxX && R >= k.bounds.minY && R <= k.bounds.maxY && !Be({ x: L, y: R }, k.polygon)) {
        T = 0.8;
        break;
      }
  }
  const $ = f || jt;
  return $.compression * x + $.crossAxis * y - $.edge * v + $.compact * E - $.fit * M + $.axis * O - $.contour * G - $.cavity * T;
}
function Bl(e, t, n, i, r) {
  const s = i > 0 ? {
    minX: t.minX - i,
    minY: t.minY - i,
    maxX: t.maxX + i,
    maxY: t.maxY + i,
    width: t.width + i * 2,
    height: t.height + i * 2
  } : t;
  if (r)
    for (const o of r.query(s)) {
      const a = n[o];
      if (Xe(s, a.bounds) && wt(e, a.polygon, i))
        return !0;
    }
  else
    for (const o of n)
      if (Xe(s, o.bounds) && wt(e, o.polygon, i))
        return !0;
  return !1;
}
function Xl(e, t, n, i) {
  const r = i.get(e.shape, e.rotation, t, n);
  if (!r || r.length === 0)
    return { contours: [], bounds: [] };
  const s = [], o = [];
  for (const a of r) {
    const c = Pt(a, e.x, e.y);
    s.push(c), o.push(Ie(c));
  }
  return { contours: s, bounds: o };
}
function Gl(e) {
  const t = [];
  for (const n of e)
    for (let i = 0; i < n.contours.length; i++) {
      const r = n.bounds[i];
      t.push({ contour: n.contours[i], minX: r.minX, minY: r.minY, maxX: r.maxX, maxY: r.maxY });
    }
  return t;
}
function Ll(e, t, n) {
  if (!Be(e, t))
    return !1;
  const i = e.x, r = e.y;
  for (let s = 0; s < n.length; s++) {
    const o = n[s];
    if (!(i < o.minX || i > o.maxX || r < o.minY || r > o.maxY) && Be(e, o.contour))
      return !1;
  }
  return !0;
}
function Ol(e, t, n, i, r, s, o) {
  const a = /* @__PURE__ */ new Set(), c = [], l = 0.5;
  function u(x, y) {
    const v = `${Math.round(x / l)},${Math.round(y / l)}`;
    a.has(v) || (a.add(v), c.push({ x, y }));
  }
  for (const x of e)
    u(x.x, x.y);
  const h = e.length - (e[0].x === e[e.length - 1].x && e[0].y === e[e.length - 1].y ? 1 : 0);
  for (let x = 0; x < h; x++) {
    const y = e[x], v = e[(x + 1) % e.length];
    for (let b = 0.25; b <= 0.75; b += 0.25)
      u(y.x + (v.x - y.x) * b, y.y + (v.y - y.y) * b);
  }
  const f = n.length < 60;
  for (const x of n)
    for (const y of x.contours) {
      const v = y.length - (y.length > 1 && y[0].x === y[y.length - 1].x && y[0].y === y[y.length - 1].y ? 1 : 0);
      for (let b = 0; b < v; b++)
        if (u(y[b].x, y[b].y), f) {
          const I = y[(b + 1) % y.length];
          u((y[b].x + I.x) / 2, (y[b].y + I.y) / 2);
        }
    }
  for (const x of n)
    for (let y = 0; y < x.contours.length; y++) {
      if (!Xe(x.bounds[y], t))
        continue;
      const v = Wi(x.contours[y], e);
      for (const b of v)
        u(b.x, b.y);
    }
  const d = n.length > 100 ? 5 : 8;
  let p = n;
  if (n.length > d) {
    const x = (t.minX + t.maxX) / 2, y = (t.minY + t.maxY) / 2, v = n.map((b, I) => {
      const C = b.bounds[0], P = (C.minX + C.maxX) / 2, E = (C.minY + C.maxY) / 2;
      return { idx: I, dist: (P - x) ** 2 + (E - y) ** 2 };
    });
    v.sort((b, I) => b.dist - I.dist), p = v.slice(0, d).map((b) => n[b.idx]);
  }
  for (let x = 0; x < p.length; x++)
    for (let y = x + 1; y < p.length; y++)
      for (let v = 0; v < p[x].contours.length; v++) {
        const b = p[x].bounds[v];
        for (let I = 0; I < p[y].contours.length; I++) {
          if (!Xe(b, p[y].bounds[I]))
            continue;
          const C = Wi(p[x].contours[v], p[y].contours[I]);
          for (const P of C)
            u(P.x, P.y);
        }
      }
  if (i && r.length > 0) {
    const x = r.find((y) => y.shape.autoId === i.shapeAId);
    x && u(x.x + i.translationHint.dx, x.y + i.translationHint.dy);
  }
  const w = r.length, S = w < 50 ? 20 : w < 150 ? 10 : 5, g = w < 100 ? 0.5 : 1;
  let m = 0;
  for (const x of r) {
    if (m >= S)
      break;
    if (x.convex)
      continue;
    const y = x.bounds.width * x.bounds.height, v = x.shape.trueArea || x.shape.area || y;
    if (y - v < o.width * o.height * 0.5)
      continue;
    m++;
    const I = Math.max(o.width, o.height) * g;
    if (!(I < 1))
      for (let C = x.bounds.minX; C <= x.bounds.maxX - o.width; C += I)
        for (let P = x.bounds.minY; P <= x.bounds.maxY - o.height; P += I) {
          const E = C + o.width / 2, M = P + o.height / 2;
          Be({ x: E, y: M }, x.polygon) || u(C, P);
        }
  }
  return s === "x" ? c.sort((x, y) => x.x - y.x) : c.sort((x, y) => x.y - y.y), c;
}
function Hs(e, t, n, i, r, s, o, a, c) {
  const l = c ? c.getNormalized(e, n) : Qe(n === 0 ? t : Ke(t, n)), u = Ie(l), h = rl(i.l, i.w, u);
  if (h.length === 0)
    return null;
  const f = Ie(h), d = [], p = r.length >= 80;
  let w = 0;
  if (p) {
    let T = 0;
    for (const $ of r) {
      const L = s.compressionAxis === "x" ? $.bounds.maxX : $.bounds.maxY;
      L > T && (T = L);
    }
    w = Math.max(0, T * 0.1);
  }
  for (const T of r) {
    if (p && (s.compressionAxis === "x" ? T.bounds.maxX : T.bounds.maxY) < w)
      continue;
    const $ = Xl(T, e, n, s.nfpCache);
    $.contours.length > 0 && d.push($);
  }
  const S = Ol(h, f, d, o, r, s.compressionAxis, u), g = Gl(d);
  let m = null;
  const x = s.spacing, y = l.map((T) => ({ x: T.x, y: T.y })), v = {
    minX: 0,
    minY: 0,
    maxX: u.width,
    maxY: u.height,
    width: u.width,
    height: u.height
  };
  let b = 0;
  for (const T of r) {
    const $ = s.compressionAxis === "x" ? T.bounds.maxX : T.bounds.maxY;
    $ > b && (b = $);
  }
  const I = r.length >= 30, C = 12;
  let P = [];
  const E = (T, $) => {
    if (!Ll({ x: T, y: $ }, h, g))
      return;
    for (let R = 0; R < l.length; R++)
      y[R].x = l[R].x + T, y[R].y = l[R].y + $;
    if (v.minX = T, v.minY = $, v.maxX = T + u.width, v.maxY = $ + u.height, Bl(y, v, r, x, a))
      return;
    const L = qi(
      T,
      $,
      i.l,
      i.w,
      s.strategy,
      s.compressionAxis,
      o,
      r,
      y,
      v,
      n,
      s.spacing,
      s.scoringWeights,
      b,
      a,
      I
      // skip measureFit in cheap pass
    );
    if (I)
      if (P.length < C)
        P.push({ x: T, y: $, score: L });
      else {
        let R = 0;
        for (let k = 1; k < P.length; k++)
          P[k].score > P[R].score && (R = k);
        L < P[R].score && (P[R] = { x: T, y: $, score: L });
      }
    else
      (!m || L < m.score) && (m = { x: T, y: $, score: L });
  }, M = s.scoringWeights?.compression ?? jt.compression, X = s.compressionAxis === "x";
  for (const T of S) {
    if (m || I && P.length >= C) {
      const $ = I ? P.reduce((R, k) => k.score > R ? k.score : R, -1 / 0) : m.score;
      if ((X ? T.x / i.l * M * 0.5 : T.y / i.w * M * 0.5) > $)
        break;
    }
    E(T.x, T.y);
  }
  const O = m && r.length >= 10 && (s.compressionAxis === "x" ? m.x + u.width <= b * 1.01 : m.y + u.height <= b * 1.01);
  if (F("nesting.placement.grid-scan-skipped", !!O, { placed: r.length }), !O) {
    const T = Math.max(1, Math.min(u.width, u.height) / 4), $ = s.compressionAxis === "x", L = s.scoringWeights?.compression ?? jt.compression;
    if ($)
      for (let R = f.minX; R <= f.maxX && !(m && R / i.l * L > m.score); R += T)
        for (let k = f.minY; k <= f.maxY; k += T)
          E(R, k);
    else
      for (let R = f.minY; R <= f.maxY && !(m && R / i.w * L > m.score); R += T)
        for (let k = f.minX; k <= f.maxX; k += T)
          E(k, R);
  }
  const G = I ? P.length > 0 ? P.reduce((T, $) => T.score < $.score ? T : $) : null : m;
  if (G) {
    const T = Math.max(1, Math.min(u.width, u.height) / 4), $ = T / 2;
    for (let L = -T; L <= T; L += $)
      for (let R = -T; R <= T; R += $)
        E(G.x + L, G.y + R);
  }
  if (I && P.length > 0)
    for (const T of P) {
      for (let L = 0; L < l.length; L++)
        y[L].x = l[L].x + T.x, y[L].y = l[L].y + T.y;
      v.minX = T.x, v.minY = T.y, v.maxX = T.x + u.width, v.maxY = T.y + u.height;
      const $ = qi(
        T.x,
        T.y,
        i.l,
        i.w,
        s.strategy,
        s.compressionAxis,
        o,
        r,
        y,
        v,
        n,
        s.spacing,
        s.scoringWeights,
        b,
        a,
        !1
        // full scoring with measureFit
      );
      (!m || $ < m.score) && (m = { x: T.x, y: T.y, score: $ });
    }
  return m;
}
async function Wl(e, t, n) {
  const i = Nl(t);
  if (F("nesting.dispatch.mode", i.length <= 1 ? "single-in-process" : "parallel-workers", { orderings: i.length, shapes: t.length }), i.length <= 1) {
    const s = zs(e, i[0].shapes, n);
    let o = 0;
    const a = new Map(t.map((l) => [l.autoId, l])), c = Qt(s, a);
    for (const l of c) {
      const u = n.compressionAxis === "x" ? l.bounds.maxX : l.bounds.maxY;
      u > o && (o = u);
    }
    return console.log(`[nesting] Single ordering: "${i[0].name}" extent=${o.toFixed(1)}`), s;
  }
  console.log(`[nesting] Parallel multi-start: launching ${i.length} orderings via worker threads`);
  const r = await Fl(e, i, n);
  return F("nesting.dispatch.workers-ok", !!r, { orderings: i.length }), r || (console.log("[nesting] Worker threads unavailable, falling back to sequential"), Yl(e, t, i, n));
}
function Nl(e) {
  const t = [];
  if (t.push({
    name: "area-desc",
    shapes: [...e].sort((n, i) => (i.trueArea || i.area) - (n.trueArea || n.area))
  }), e.length < 200 && t.push({
    name: "longest-desc",
    shapes: [...e].sort((n, i) => {
      const r = Math.max(n.l, n.w);
      return Math.max(i.l, i.w) - r;
    })
  }), e.length < 100 && (t.push({
    name: "irregular-first",
    shapes: [...e].sort((n, i) => {
      const r = n.l * n.w / (n.trueArea || n.area || 1);
      return i.l * i.w / (i.trueArea || i.area || 1) - r;
    })
  }), t.push({
    name: "hybrid",
    shapes: [...e].sort((n, i) => {
      const r = n.trueArea || n.area, s = i.trueArea || i.area, o = n.l * n.w / (r || 1), a = i.l * i.w / (s || 1);
      return s * a - r * o;
    })
  })), e.length <= 50)
    for (let n = 1; n <= 2; n++) {
      const i = [...e];
      let r = n * 2654435761;
      for (let s = i.length - 1; s > 0; s--) {
        r = r * 1103515245 + 12345 & 2147483647;
        const o = r % (s + 1), a = i[s];
        i[s] = i[o], i[o] = a;
      }
      t.push({ name: `random-${n}`, shapes: i });
    }
  return t;
}
async function Fl(e, t, n) {
  let i;
  try {
    i = (await import("./__vite-browser-external-DYxpcVy9.js")).Worker;
  } catch {
    return null;
  }
  const r = {
    rotationSteps: n.rotationSteps,
    spacing: n.spacing,
    contourMatches: n.contourMatches,
    strategy: n.strategy,
    compressionAxis: n.compressionAxis,
    scoringWeights: n.scoringWeights,
    shapeRotationMapEntries: n.shapeRotationMap ? Array.from(n.shapeRotationMap.entries()) : []
  }, s = { l: e.l, w: e.w }, o = (p) => ({
    autoId: p.autoId,
    outline: p.outline,
    // placementOutline MUST be carried across the worker boundary — without it, the worker's
    // placement runs against `outline` (via the placementSource fallback) while the main
    // thread and client render using placementOutline as the transform reference. That
    // mismatch is the exact cause of the visible overlap.
    placementOutline: p.placementOutline,
    l: p.l,
    w: p.w,
    area: p.area,
    trueArea: p.trueArea
  }), a = new URL("data:video/mp2t;base64,LyoqCiAqIFBsYWNlbWVudCBXb3JrZXIKICogUnVucyBhIHNpbmdsZSBwbGFjZW1lbnQgb3JkZXJpbmcgaW4gYSB3b3JrZXIgdGhyZWFkLgogKiBSZWNlaXZlcyBwbGFpbiBkYXRhIG9iamVjdHMgKG5vIGNsYXNzIGluc3RhbmNlcyBuZWVkZWQg4oCUIHRoZSBwbGFjZW1lbnQKICogYWxnb3JpdGhtIG9ubHkgcmVhZHMgcHJvcGVydGllcywgbmV2ZXIgY2FsbHMgbWV0aG9kcykuCiAqLwoKaW1wb3J0IHsgcGFyZW50UG9ydCwgd29ya2VyRGF0YSB9IGZyb20gJ3dvcmtlcl90aHJlYWRzJwppbXBvcnQgeyBORlBDYWNoZSB9IGZyb20gJy4vbmZwLWNhY2hlJwppbXBvcnQgeyBwbGFjZVNoYXBlc0luT3JkZXIsIGJ1aWxkUGxhY2VkU2hhcGVzIH0gZnJvbSAnLi9wbGFjZW1lbnQnCmltcG9ydCB0eXBlIHsgTmVzdGluZ09wdGlvbnMsIE5lc3RpbmdQbGFjZW1lbnQsIENvbXByZXNzaW9uQXhpcyB9IGZyb20gJy4vcGxhY2VtZW50JwoKY29uc3QgewoJc3RvY2tEYXRhLAoJc2hhcGVzRGF0YSwKCW9wdGlvbnNEYXRhLAoJb3JkZXJpbmdOYW1lCn0gPSB3b3JrZXJEYXRhIGFzIHsKCXN0b2NrRGF0YTogeyBsOiBudW1iZXI7IHc6IG51bWJlciB9CglzaGFwZXNEYXRhOiBBcnJheTx7CgkJYXV0b0lkOiBzdHJpbmcKCQlvdXRsaW5lOiBBcnJheTx7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0+CgkJLy8gT3B0aW9uYWwg4oCUIGNhcnJpZXMgdGhlIERQLXNpbXBsaWZpZWQgb3IgY29udmV4LWh1bGwgcG9seWdvbiB1c2VkIGZvciBORlAvcGxhY2VtZW50LgoJCS8vIE11c3QgbWF0Y2ggdGhlIGluc3RhbmNlIGZpZWxkIHNvIGBwbGFjZW1lbnRTb3VyY2UoKWAgaW4gcGxhY2VtZW50LnRzIHJldHVybnMgaXQgaGVyZS4KCQlwbGFjZW1lbnRPdXRsaW5lPzogQXJyYXk8eyB4OiBudW1iZXI7IHk6IG51bWJlciB9PgoJCWw6IG51bWJlcgoJCXc6IG51bWJlcgoJCWFyZWE6IG51bWJlcgoJCXRydWVBcmVhPzogbnVtYmVyCgl9PgoJb3B0aW9uc0RhdGE6IHsKCQlyb3RhdGlvblN0ZXBzOiBudW1iZXJbXQoJCXNwYWNpbmc6IG51bWJlcgoJCWNvbnRvdXJNYXRjaGVzOiBhbnlbXQoJCXN0cmF0ZWd5OiBzdHJpbmcKCQljb21wcmVzc2lvbkF4aXM6IENvbXByZXNzaW9uQXhpcwoJCXNjb3JpbmdXZWlnaHRzPzogYW55CgkJc2hhcGVSb3RhdGlvbk1hcEVudHJpZXM6IEFycmF5PFtzdHJpbmcgfCBudW1iZXIsIG51bWJlcltdXT4KCX0KCW9yZGVyaW5nTmFtZTogc3RyaW5nCn0KCi8vIFJlY29uc3RydWN0IHRoZSBvcHRpb25zIHdpdGggYSBmcmVzaCBORlAgY2FjaGUgZm9yIHRoaXMgd29ya2VyCmNvbnN0IG5mcENhY2hlID0gbmV3IE5GUENhY2hlKCkKbmZwQ2FjaGUuc2V0U3BhY2luZyggb3B0aW9uc0RhdGEuc3BhY2luZyApCgpjb25zdCBzaGFwZVJvdGF0aW9uTWFwID0gbmV3IE1hcCggb3B0aW9uc0RhdGEuc2hhcGVSb3RhdGlvbk1hcEVudHJpZXMgKQoKY29uc3Qgb3B0aW9uczogTmVzdGluZ09wdGlvbnMgPSB7Cglyb3RhdGlvblN0ZXBzOiBvcHRpb25zRGF0YS5yb3RhdGlvblN0ZXBzLAoJc3BhY2luZzogb3B0aW9uc0RhdGEuc3BhY2luZywKCWNvbnRvdXJNYXRjaGVzOiBvcHRpb25zRGF0YS5jb250b3VyTWF0Y2hlcywKCW5mcENhY2hlLAoJc3RyYXRlZ3k6IG9wdGlvbnNEYXRhLnN0cmF0ZWd5IGFzIGFueSwKCWNvbXByZXNzaW9uQXhpczogb3B0aW9uc0RhdGEuY29tcHJlc3Npb25BeGlzLAoJc2NvcmluZ1dlaWdodHM6IG9wdGlvbnNEYXRhLnNjb3JpbmdXZWlnaHRzLAoJc2hhcGVSb3RhdGlvbk1hcAoJLy8gTm8gb25Qcm9ncmVzcyDigJQgd29ya2VycyBkb24ndCByZXBvcnQgcGVyLXNoYXBlIHByb2dyZXNzCn0KCi8vIFJ1biBwbGFjZW1lbnQgKHNoYXBlcyBhcmUgcGxhaW4gb2JqZWN0cyDigJQgcGxhY2VtZW50IG9ubHkgcmVhZHMgcHJvcGVydGllcywgbm8gbWV0aG9kcykKY29uc3QgcmVzdWx0ID0gcGxhY2VTaGFwZXNJbk9yZGVyKCBzdG9ja0RhdGEgYXMgYW55LCBzaGFwZXNEYXRhIGFzIGFueSwgb3B0aW9ucyApCgovLyBDb21wdXRlIGV4dGVudCBvbiBjb21wcmVzc2lvbiBheGlzCmxldCBleHRlbnQgPSAwCmNvbnN0IHNoYXBlTWFwID0gbmV3IE1hcCggc2hhcGVzRGF0YS5tYXAoIHMgPT4gW3MuYXV0b0lkLCBzXSApICkKY29uc3QgcGxhY2VkID0gYnVpbGRQbGFjZWRTaGFwZXMoIHJlc3VsdCwgc2hhcGVNYXAgYXMgYW55ICkKZm9yICggY29uc3QgcCBvZiBwbGFjZWQgKQp7Cgljb25zdCBleHQgPSBvcHRpb25zRGF0YS5jb21wcmVzc2lvbkF4aXMgPT09ICd4JyA/IHAuYm91bmRzLm1heFggOiBwLmJvdW5kcy5tYXhZCglpZiAoIGV4dCA+IGV4dGVudCApIGV4dGVudCA9IGV4dAp9CgpwYXJlbnRQb3J0IS5wb3N0TWVzc2FnZSggewoJcGxhY2VtZW50czogcmVzdWx0LAoJZXh0ZW50LAoJb3JkZXJpbmdOYW1lLAoJY2FjaGVTaXplOiBuZnBDYWNoZS5zaXplCn0gKQo=", import.meta.url), c = new URL("data:video/mp2t;base64,LyoqCiAqIFBsYWNlbWVudCBXb3JrZXIKICogUnVucyBhIHNpbmdsZSBwbGFjZW1lbnQgb3JkZXJpbmcgaW4gYSB3b3JrZXIgdGhyZWFkLgogKiBSZWNlaXZlcyBwbGFpbiBkYXRhIG9iamVjdHMgKG5vIGNsYXNzIGluc3RhbmNlcyBuZWVkZWQg4oCUIHRoZSBwbGFjZW1lbnQKICogYWxnb3JpdGhtIG9ubHkgcmVhZHMgcHJvcGVydGllcywgbmV2ZXIgY2FsbHMgbWV0aG9kcykuCiAqLwoKaW1wb3J0IHsgcGFyZW50UG9ydCwgd29ya2VyRGF0YSB9IGZyb20gJ3dvcmtlcl90aHJlYWRzJwppbXBvcnQgeyBORlBDYWNoZSB9IGZyb20gJy4vbmZwLWNhY2hlJwppbXBvcnQgeyBwbGFjZVNoYXBlc0luT3JkZXIsIGJ1aWxkUGxhY2VkU2hhcGVzIH0gZnJvbSAnLi9wbGFjZW1lbnQnCmltcG9ydCB0eXBlIHsgTmVzdGluZ09wdGlvbnMsIE5lc3RpbmdQbGFjZW1lbnQsIENvbXByZXNzaW9uQXhpcyB9IGZyb20gJy4vcGxhY2VtZW50JwoKY29uc3QgewoJc3RvY2tEYXRhLAoJc2hhcGVzRGF0YSwKCW9wdGlvbnNEYXRhLAoJb3JkZXJpbmdOYW1lCn0gPSB3b3JrZXJEYXRhIGFzIHsKCXN0b2NrRGF0YTogeyBsOiBudW1iZXI7IHc6IG51bWJlciB9CglzaGFwZXNEYXRhOiBBcnJheTx7CgkJYXV0b0lkOiBzdHJpbmcKCQlvdXRsaW5lOiBBcnJheTx7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0+CgkJLy8gT3B0aW9uYWwg4oCUIGNhcnJpZXMgdGhlIERQLXNpbXBsaWZpZWQgb3IgY29udmV4LWh1bGwgcG9seWdvbiB1c2VkIGZvciBORlAvcGxhY2VtZW50LgoJCS8vIE11c3QgbWF0Y2ggdGhlIGluc3RhbmNlIGZpZWxkIHNvIGBwbGFjZW1lbnRTb3VyY2UoKWAgaW4gcGxhY2VtZW50LnRzIHJldHVybnMgaXQgaGVyZS4KCQlwbGFjZW1lbnRPdXRsaW5lPzogQXJyYXk8eyB4OiBudW1iZXI7IHk6IG51bWJlciB9PgoJCWw6IG51bWJlcgoJCXc6IG51bWJlcgoJCWFyZWE6IG51bWJlcgoJCXRydWVBcmVhPzogbnVtYmVyCgl9PgoJb3B0aW9uc0RhdGE6IHsKCQlyb3RhdGlvblN0ZXBzOiBudW1iZXJbXQoJCXNwYWNpbmc6IG51bWJlcgoJCWNvbnRvdXJNYXRjaGVzOiBhbnlbXQoJCXN0cmF0ZWd5OiBzdHJpbmcKCQljb21wcmVzc2lvbkF4aXM6IENvbXByZXNzaW9uQXhpcwoJCXNjb3JpbmdXZWlnaHRzPzogYW55CgkJc2hhcGVSb3RhdGlvbk1hcEVudHJpZXM6IEFycmF5PFtzdHJpbmcgfCBudW1iZXIsIG51bWJlcltdXT4KCX0KCW9yZGVyaW5nTmFtZTogc3RyaW5nCn0KCi8vIFJlY29uc3RydWN0IHRoZSBvcHRpb25zIHdpdGggYSBmcmVzaCBORlAgY2FjaGUgZm9yIHRoaXMgd29ya2VyCmNvbnN0IG5mcENhY2hlID0gbmV3IE5GUENhY2hlKCkKbmZwQ2FjaGUuc2V0U3BhY2luZyggb3B0aW9uc0RhdGEuc3BhY2luZyApCgpjb25zdCBzaGFwZVJvdGF0aW9uTWFwID0gbmV3IE1hcCggb3B0aW9uc0RhdGEuc2hhcGVSb3RhdGlvbk1hcEVudHJpZXMgKQoKY29uc3Qgb3B0aW9uczogTmVzdGluZ09wdGlvbnMgPSB7Cglyb3RhdGlvblN0ZXBzOiBvcHRpb25zRGF0YS5yb3RhdGlvblN0ZXBzLAoJc3BhY2luZzogb3B0aW9uc0RhdGEuc3BhY2luZywKCWNvbnRvdXJNYXRjaGVzOiBvcHRpb25zRGF0YS5jb250b3VyTWF0Y2hlcywKCW5mcENhY2hlLAoJc3RyYXRlZ3k6IG9wdGlvbnNEYXRhLnN0cmF0ZWd5IGFzIGFueSwKCWNvbXByZXNzaW9uQXhpczogb3B0aW9uc0RhdGEuY29tcHJlc3Npb25BeGlzLAoJc2NvcmluZ1dlaWdodHM6IG9wdGlvbnNEYXRhLnNjb3JpbmdXZWlnaHRzLAoJc2hhcGVSb3RhdGlvbk1hcAoJLy8gTm8gb25Qcm9ncmVzcyDigJQgd29ya2VycyBkb24ndCByZXBvcnQgcGVyLXNoYXBlIHByb2dyZXNzCn0KCi8vIFJ1biBwbGFjZW1lbnQgKHNoYXBlcyBhcmUgcGxhaW4gb2JqZWN0cyDigJQgcGxhY2VtZW50IG9ubHkgcmVhZHMgcHJvcGVydGllcywgbm8gbWV0aG9kcykKY29uc3QgcmVzdWx0ID0gcGxhY2VTaGFwZXNJbk9yZGVyKCBzdG9ja0RhdGEgYXMgYW55LCBzaGFwZXNEYXRhIGFzIGFueSwgb3B0aW9ucyApCgovLyBDb21wdXRlIGV4dGVudCBvbiBjb21wcmVzc2lvbiBheGlzCmxldCBleHRlbnQgPSAwCmNvbnN0IHNoYXBlTWFwID0gbmV3IE1hcCggc2hhcGVzRGF0YS5tYXAoIHMgPT4gW3MuYXV0b0lkLCBzXSApICkKY29uc3QgcGxhY2VkID0gYnVpbGRQbGFjZWRTaGFwZXMoIHJlc3VsdCwgc2hhcGVNYXAgYXMgYW55ICkKZm9yICggY29uc3QgcCBvZiBwbGFjZWQgKQp7Cgljb25zdCBleHQgPSBvcHRpb25zRGF0YS5jb21wcmVzc2lvbkF4aXMgPT09ICd4JyA/IHAuYm91bmRzLm1heFggOiBwLmJvdW5kcy5tYXhZCglpZiAoIGV4dCA+IGV4dGVudCApIGV4dGVudCA9IGV4dAp9CgpwYXJlbnRQb3J0IS5wb3N0TWVzc2FnZSggewoJcGxhY2VtZW50czogcmVzdWx0LAoJZXh0ZW50LAoJb3JkZXJpbmdOYW1lLAoJY2FjaGVTaXplOiBuZnBDYWNoZS5zaXplCn0gKQo=", import.meta.url), { existsSync: l } = await import("./__vite-browser-external-DYxpcVy9.js"), { fileURLToPath: u } = await import("./__vite-browser-external-DYxpcVy9.js"), f = l(u(a)) ? a : await Tl(c), d = t.map((p) => new Promise((w, S) => {
    const g = new i(f, {
      workerData: {
        stockData: s,
        shapesData: p.shapes.map(o),
        optionsData: r,
        orderingName: p.name
      }
    });
    g.on("message", (m) => {
      w(m);
    }), g.on("error", (m) => {
      console.error(`[nesting] Worker error (${p.name}):`, m.message), S(m);
    }), g.on("exit", (m) => {
      m !== 0 && S(new Error(`Worker (${p.name}) exited with code ${m}`));
    });
  }));
  try {
    const p = await Promise.all(d);
    let w = p[0];
    for (const g of p)
      (g.placements.length > w.placements.length || g.placements.length === w.placements.length && g.extent < w.extent) && (w = g);
    const S = p.map((g) => `${g.orderingName}=${g.cacheSize}`).join(", ");
    return console.log(`[nesting] Parallel multi-start: best="${w.orderingName}" extent=${w.extent.toFixed(1)} placed=${w.placements.length} from ${t.length} orderings (cache: ${S})`), w.placements;
  } catch (p) {
    return console.error("[nesting] Parallel execution failed:", p), null;
  }
}
function Yl(e, t, n, i) {
  let r = [], s = 1 / 0, o = "";
  for (const a of n) {
    const c = zs(e, a.shapes, i);
    let l = 0;
    const u = new Map(t.map((f) => [f.autoId, f])), h = Qt(c, u);
    for (const f of h) {
      const d = i.compressionAxis === "x" ? f.bounds.maxX : f.bounds.maxY;
      d > l && (l = d);
    }
    (c.length > r.length || c.length === r.length && l < s) && (r = c, s = l, o = a.name);
  }
  return console.log(`[nesting] Sequential multi-start: best="${o}" extent=${s.toFixed(1)} from ${n.length} orderings`), r;
}
function zs(e, t, n) {
  const i = [], r = [], s = /* @__PURE__ */ new Set(), o = Math.max(e.l, e.w) / 10, a = new Jn(e.l, e.w, o), c = new El();
  let l = 0;
  for (const u of t) {
    l++;
    const h = r.length >= 150 ? 1 : r.length >= 50 ? 10 : 50;
    if ((l % h === 0 || l === t.length) && ((l % 50 === 0 || l === t.length) && console.log(`[nesting]   placing ${l}/${t.length} (${i.length} placed so far, NFP cache: ${n.nfpCache.size})`), n.onProgress?.(i.length, t.length)), !u.outline?.length || u.outline.length < 3)
      continue;
    const f = Ys(u.autoId, s, n.contourMatches);
    let d = null, p = 1 / 0;
    const w = n.shapeRotationMap?.get(u.autoId) || n.rotationSteps;
    let S = 0, g = n.compressionAxis === "x" ? e.w : e.l;
    if (r.length > 0) {
      for (const P of r) {
        const E = n.compressionAxis === "x" ? P.bounds.maxX : P.bounds.maxY;
        E > S && (S = E);
      }
      const I = S * 0.8;
      let C = 0;
      for (const P of r)
        if ((n.compressionAxis === "x" ? P.bounds.maxX : P.bounds.maxY) >= I) {
          const M = n.compressionAxis === "x" ? P.bounds.maxY : P.bounds.maxX;
          M > C && (C = M);
        }
      g = (n.compressionAxis === "x" ? e.w : e.l) - C;
    }
    const m = [], x = n.compressionAxis === "x" ? e.l : e.w, y = n.compressionAxis === "x" ? e.w : e.l;
    for (const I of w) {
      const C = Ie(c.getNormalized(u, I)), P = n.compressionAxis === "x" ? C.width : C.height, E = n.compressionAxis === "x" ? C.height : C.width;
      let M = 0;
      M += P / x * 0.5, E > g && g > 0 && (M += (E - g) / y * 0.3), M += E / y * 0.1, f && Math.abs(I - f.optimalRotationB) < 0.01 && (M -= 0.3);
      const X = I % (Math.PI / 2), O = Math.min(X, Math.PI / 2 - X) / (Math.PI / 4);
      M += O * 0.1, m.push({ rotation: I, score: M });
    }
    m.sort((I, C) => I.score - C.score);
    const v = r.length < 30 ? w.length : r.length < 150 ? Math.min(4, m.length) : Math.min(3, m.length), b = m.slice(0, v);
    for (const { rotation: I } of b) {
      const C = Hs(u, ct(u), I, e, r, n, f, a, c);
      C && C.score < p && (p = C.score, d = {
        shapeAutoId: u.autoId,
        x: C.x,
        y: C.y,
        rotation: I
      });
    }
    if (d) {
      i.push(d);
      const I = c.getNormalized(u, d.rotation), C = Pt(I, d.x, d.y), P = Ie(C), E = {
        shape: u,
        x: d.x,
        y: d.y,
        rotation: d.rotation,
        bounds: P,
        polygon: C,
        convex: at(C)
      };
      r.push(E), a.insert(r.length - 1, P), s.add(u.autoId);
    }
  }
  return i;
}
const Hl = {
  maxIterations: 5e3,
  initialTemp: 1,
  coolingRate: 0.997,
  moveTypes: ["shift", "swap", "rotate", "slide", "slideX"]
};
function Qt(e, t) {
  const n = [];
  for (const i of e) {
    const r = t.get(i.shapeAutoId);
    if (!r || !r.outline?.length)
      continue;
    const s = ct(r), o = i.rotation === 0 ? s : Ke(s, i.rotation), a = Qe(o), c = Pt(a, i.x, i.y), l = Ie(c);
    n.push({ shape: r, x: i.x, y: i.y, rotation: i.rotation, bounds: l, polygon: c, convex: at(c) });
  }
  return n;
}
function At(e, t, n, i) {
  if (e.length === 0)
    return 0;
  let r = 0, s = 0, o = 0, a = 0;
  for (const d of e) {
    const p = i === "x" ? d.bounds.maxX : d.bounds.maxY, w = i === "x" ? d.bounds.maxY : d.bounds.maxX;
    p > r && (r = p), w > s && (s = w), o += p, a += d.shape.trueArea || d.shape.area || 0;
  }
  const c = i === "x" ? t : n, l = o / e.length / c, u = r / c, h = r * s, f = h > 0 ? 1 - a / h : 0;
  return l * 0.5 + u * 0.35 + f * 0.15;
}
function St(e, t, n, i, r, s) {
  const o = t[e], a = 0.01;
  if (o.bounds.minX < -a || o.bounds.minY < -a || o.bounds.maxX > n + a || o.bounds.maxY > i + a)
    return !1;
  const c = r > 0 ? {
    minX: o.bounds.minX - r,
    minY: o.bounds.minY - r,
    maxX: o.bounds.maxX + r,
    maxY: o.bounds.maxY + r,
    width: o.bounds.width + r * 2,
    height: o.bounds.height + r * 2
  } : o.bounds;
  if (s) {
    for (const l of s.query(c))
      if (l !== e && Xe(c, t[l].bounds) && wt(o.polygon, t[l].polygon, r))
        return !1;
  } else
    for (let l = 0; l < t.length; l++)
      if (l !== e && Xe(c, t[l].bounds) && wt(o.polygon, t[l].polygon, r))
        return !1;
  return !0;
}
function Ze(e, t, n, i) {
  const r = ct(e), s = i === 0 ? r : Ke(r, i), o = Qe(s), a = Pt(o, t, n), c = Ie(a);
  return { shape: e, x: t, y: n, rotation: i, bounds: c, polygon: a, convex: at(a) };
}
function zl(e, t, n, i) {
  if (t === "shift") {
    const r = Math.max(e.shape.l, e.shape.w) * n * 2, s = (Math.random() - 0.5) * 2 * r, o = (Math.random() - 0.5) * 2 * r;
    return Ze(e.shape, e.x + s, e.y + o, e.rotation);
  } else if (t === "rotate") {
    const r = i[Math.floor(Math.random() * i.length)];
    return Ze(e.shape, e.x, e.y, r);
  }
  return e;
}
function Bt(e, t, n, i, r, s, o, a) {
  const c = t[e], l = n === "x" ? c.x : c.y;
  if (Math.abs(l - i) < 0.5)
    return null;
  const u = i < l;
  let h = u ? i : l, f = u ? l : i, d = null;
  const p = ct(c.shape), w = Qe(c.rotation === 0 ? p : Ke(p, c.rotation)), S = Ie(w), g = w.map((x) => ({ x: x.x, y: x.y })), m = {
    minX: 0,
    minY: 0,
    maxX: S.width,
    maxY: S.height,
    width: S.width,
    height: S.height
  };
  for (let x = 0; x < 12; x++) {
    const y = (h + f) / 2, v = n === "x" ? y : c.x, b = n === "y" ? y : c.y;
    for (let E = 0; E < w.length; E++)
      g[E].x = w[E].x + v, g[E].y = w[E].y + b;
    m.minX = v, m.minY = b, m.maxX = v + S.width, m.maxY = b + S.height;
    const I = g.map((E) => ({ x: E.x, y: E.y })), C = {
      shape: c.shape,
      x: v,
      y: b,
      rotation: c.rotation,
      bounds: { ...m },
      polygon: I,
      convex: at(I)
    }, P = t[e];
    t[e] = C, St(e, t, r, s, o, a) ? (d = C, u ? f = y : h = y) : u ? h = y : f = y, t[e] = P;
  }
  if (d) {
    const x = n === "x" ? d.x : d.y;
    if (Math.abs(x - l) > 0.5)
      return d;
  }
  return null;
}
function Ee(e, t, n, i, r, s, o) {
  return Bt(e, t, n, 0, i, r, s, o);
}
function ql(e, t, n, i, r = {}) {
  if (F("nesting.anneal.too-few-shapes", e.length < 2, { placed: e.length }), e.length < 2)
    return {
      placements: e,
      stats: { initialEnergy: 0, finalEnergy: 0, bestEnergy: 0, accepted: 0, improving: 0, iterations: 0, improved: !1 }
    };
  const s = { ...Hl, ...r }, o = new Map(t.map((x) => [x.autoId, x])), a = i.compressionAxis;
  let c = e.map((x) => ({ ...x })), l = Qt(c, o), u = At(l, n.l, n.w, a);
  const h = u;
  let f = c.map((x) => ({ ...x })), d = u, p = s.initialTemp, w = 0, S = 0;
  const g = Math.max(n.l, n.w) / 10, m = new Jn(n.l, n.w, g);
  m.rebuild(l);
  for (let x = 0; x < s.maxIterations; x++) {
    x % 500 === 0 && i.onProgress?.(e.length, e.length);
    const y = s.moveTypes[Math.floor(Math.random() * s.moveTypes.length)];
    if (y === "swap" && c.length >= 2) {
      const v = Math.floor(Math.random() * c.length);
      let b = Math.floor(Math.random() * (c.length - 1));
      b >= v && b++;
      const I = o.get(c[v].shapeAutoId), C = o.get(c[b].shapeAutoId);
      if (!I || !C)
        continue;
      const P = I.trueArea || I.area || 1, E = C.trueArea || C.area || 1;
      if ((P > E ? P / E : E / P) > 3)
        continue;
      const X = c[b].x, O = c[b].y, G = c[v].x, T = c[v].y, $ = l.slice();
      if ($[v] = Ze(I, X, O, c[v].rotation), $[b] = Ze(C, G, T, c[b].rotation), St(v, $, n.l, n.w, i.spacing) && St(b, $, n.l, n.w, i.spacing)) {
        const L = At($, n.l, n.w, a), R = L - u;
        (R < 0 || Math.random() < Math.exp(-R / p)) && (c[v] = { shapeAutoId: I.autoId, x: X, y: O, rotation: c[v].rotation }, c[b] = { shapeAutoId: C.autoId, x: G, y: T, rotation: c[b].rotation }, l = $, m.rebuild(l), u = L, w++, R < 0 && S++, u < d && (f = c.map((k) => ({ ...k })), d = u));
      }
    } else if (y === "slide" || y === "slideX") {
      const v = y === "slide" ? a : a === "x" ? "y" : "x", b = Math.floor(Math.random() * l.length), I = Ee(b, l, v, n.l, n.w, i.spacing, m);
      I && (m.remove(b, l[b].bounds), l[b] = I, m.insert(b, I.bounds), c[b] = {
        shapeAutoId: I.shape.autoId,
        x: I.x,
        y: I.y,
        rotation: I.rotation
      }, u = At(l, n.l, n.w, a), w++, S++, u < d && (f = c.map((C) => ({ ...C })), d = u));
    } else {
      const v = y === "swap" ? "shift" : y, b = Math.floor(Math.random() * l.length), I = l[b], C = i.shapeRotationMap?.get(I.shape.autoId) || i.rotationSteps, P = zl(I, v, p, C), E = l[b];
      if (m.remove(b, E.bounds), l[b] = P, m.insert(b, P.bounds), St(b, l, n.l, n.w, i.spacing, m)) {
        const M = At(l, n.l, n.w, a), X = M - u;
        X < 0 || Math.random() < Math.exp(-X / p) ? (c[b] = {
          shapeAutoId: P.shape.autoId,
          x: P.x,
          y: P.y,
          rotation: P.rotation
        }, u = M, w++, X < 0 && S++, u < d && (f = c.map((O) => ({ ...O })), d = u)) : (m.remove(b, P.bounds), l[b] = E, m.insert(b, E.bounds));
      } else
        m.remove(b, P.bounds), l[b] = E, m.insert(b, E.bounds);
    }
    p *= s.coolingRate;
  }
  return F("nesting.anneal.improved", d < h, { accepted: w, improving: S, iterations: s.maxIterations }), {
    placements: f,
    stats: {
      initialEnergy: h,
      finalEnergy: u,
      bestEnergy: d,
      accepted: w,
      improving: S,
      iterations: s.maxIterations,
      improved: d < h
    }
  };
}
function Te(e, t, n) {
  e[t] = { shapeAutoId: n.shape.autoId, x: n.x, y: n.y, rotation: n.rotation };
}
function Vl(e, t, n, i) {
  const r = new Map(t.map((g) => [g.autoId, g])), s = e.map((g) => ({ ...g }));
  let o = Qt(s, r);
  const a = Math.max(n.l, n.w) / 10, c = new Jn(n.l, n.w, a), l = i.compressionAxis, u = l === "x" ? "y" : "x";
  let h = 0;
  for (let g = 0; g < 5; g++) {
    i.onProgress?.(e.length, e.length);
    let m = 0;
    c.rebuild(o);
    const x = [...Array(o.length).keys()].sort((y, v) => {
      const b = l === "x" ? o[y].bounds.maxX : o[y].bounds.maxY;
      return (l === "x" ? o[v].bounds.maxX : o[v].bounds.maxY) - b;
    });
    for (const y of x) {
      let v = o[y].x, b = o[y].y, I = o[y].rotation, C = l === "x" ? o[y].bounds.maxX : o[y].bounds.maxY;
      const P = Ee(y, o, l, n.l, n.w, i.spacing, c);
      P && (c.remove(y, o[y].bounds), o[y] = P, c.insert(y, P.bounds), Te(s, y, P));
      const E = Ee(y, o, u, n.l, n.w, i.spacing, c);
      E && (c.remove(y, o[y].bounds), o[y] = E, c.insert(y, E.bounds), Te(s, y, E));
      const M = l === "x" ? o[y].bounds.maxX : o[y].bounds.maxY;
      M < C && (C = M, v = o[y].x, b = o[y].y, I = o[y].rotation);
      const X = i.shapeRotationMap?.get(o[y].shape.autoId) || i.rotationSteps;
      if (X.length > 1) {
        const O = o[y];
        for (const G of X) {
          if (Math.abs(G - O.rotation) < 1e-3)
            continue;
          const T = Ze(O.shape, O.x, O.y, G), $ = o[y];
          if (c.remove(y, $.bounds), o[y] = T, c.insert(y, T.bounds), !St(y, o, n.l, n.w, i.spacing, c)) {
            c.remove(y, T.bounds), o[y] = $, c.insert(y, $.bounds);
            continue;
          }
          const L = Ee(y, o, l, n.l, n.w, i.spacing, c);
          L && (c.remove(y, o[y].bounds), o[y] = L, c.insert(y, L.bounds));
          const R = Ee(y, o, u, n.l, n.w, i.spacing, c);
          R && (c.remove(y, o[y].bounds), o[y] = R, c.insert(y, R.bounds));
          const k = l === "x" ? o[y].bounds.maxX : o[y].bounds.maxY;
          k < C - 0.5 && (C = k, v = o[y].x, b = o[y].y, I = o[y].rotation), c.remove(y, o[y].bounds), o[y] = $, c.insert(y, $.bounds);
        }
        (I !== O.rotation || v !== O.x || b !== O.y) && (c.remove(y, o[y].bounds), o[y] = Ze(O.shape, v, b, I), c.insert(y, o[y].bounds), Te(s, y, o[y]));
      }
      (C < (l === "x" ? (P || o[y]).bounds.maxX : (P || o[y]).bounds.maxY) - 0.5 || P || E) && m++;
    }
    if (h += m, m === 0)
      break;
  }
  for (let g = 0; g < 3; g++) {
    i.onProgress?.(e.length, e.length);
    let m = 0;
    c.rebuild(o);
    for (let x = 0; x < o.length; x++) {
      const y = o[x], v = (y.bounds.minX + y.bounds.maxX) / 2, b = (y.bounds.minY + y.bounds.maxY) / 2;
      let I = 1 / 0, C = -1;
      for (let X = 0; X < o.length; X++) {
        if (X === x)
          continue;
        const O = o[X], G = (O.bounds.minX + O.bounds.maxX) / 2, T = (O.bounds.minY + O.bounds.maxY) / 2, $ = (v - G) ** 2 + (b - T) ** 2;
        $ < I && (I = $, C = X);
      }
      if (C < 0)
        continue;
      const P = o[C], E = (P.bounds.minX + P.bounds.maxX) / 2, M = (P.bounds.minY + P.bounds.maxY) / 2;
      if (Math.abs(v - E) > 1) {
        const X = Bt(x, o, "x", E < v ? P.bounds.maxX : P.bounds.minX - y.bounds.width, n.l, n.w, i.spacing, c);
        X && (c.remove(x, o[x].bounds), o[x] = X, c.insert(x, X.bounds), Te(s, x, X), m++);
      }
      if (Math.abs(b - M) > 1) {
        const X = Bt(x, o, "y", M < b ? P.bounds.maxY : P.bounds.minY - y.bounds.height, n.l, n.w, i.spacing, c);
        X && (c.remove(x, o[x].bounds), o[x] = X, c.insert(x, X.bounds), Te(s, x, X), m++);
      }
    }
    if (h += m, m === 0)
      break;
  }
  let f = 0, d = 0;
  for (const g of o) {
    const m = g.shape.trueArea || g.shape.area || 1, x = u === "x" ? (g.bounds.minX + g.bounds.maxX) / 2 : (g.bounds.minY + g.bounds.maxY) / 2;
    f += x * m, d += m;
  }
  const p = d > 0 ? f / d : 0;
  for (let g = 0; g < 3; g++) {
    let m = 0;
    c.rebuild(o);
    for (let x = 0; x < o.length; x++) {
      const y = o[x], v = u === "x" ? (y.bounds.minX + y.bounds.maxX) / 2 : (y.bounds.minY + y.bounds.maxY) / 2;
      if (Math.abs(v - p) < 1)
        continue;
      const b = v > p ? y[u] - (v - p) : y[u] + (p - v), I = Bt(x, o, u, b, n.l, n.w, i.spacing, c);
      I && (c.remove(x, o[x].bounds), o[x] = I, c.insert(x, I.bounds), Te(s, x, I), m++);
    }
    if (h += m, m === 0)
      break;
  }
  for (let g = 0; g < 3; g++) {
    let m = 0;
    c.rebuild(o);
    const x = [...Array(o.length).keys()].sort((y, v) => {
      const b = l === "x" ? o[y].bounds.maxX : o[y].bounds.maxY;
      return (l === "x" ? o[v].bounds.maxX : o[v].bounds.maxY) - b;
    });
    for (const y of x) {
      const v = Ee(y, o, l, n.l, n.w, i.spacing, c);
      v && (c.remove(y, o[y].bounds), o[y] = v, c.insert(y, v.bounds), Te(s, y, v), m++);
    }
    if (h += m, m === 0)
      break;
  }
  i.onProgress?.(e.length, e.length);
  for (let g = 0; g < 3; g++) {
    let m = 0, x = 1 / 0;
    for (const k of o) {
      const H = l === "x" ? k.bounds.maxX : k.bounds.maxY;
      H > m && (m = H), H < x && (x = H);
    }
    const y = m - x, b = x + y * (g === 0 ? 0.75 : 0.85), I = [];
    for (let k = 0; k < o.length; k++)
      (l === "x" ? o[k].bounds.maxX : o[k].bounds.maxY) >= b && I.push(k);
    I.sort((k, H) => {
      const q = l === "x" ? o[k].bounds.maxX : o[k].bounds.maxY;
      return (l === "x" ? o[H].bounds.maxX : o[H].bounds.maxY) - q;
    });
    const C = I.slice(0, 25);
    if (C.length === 0)
      break;
    console.log(`[nesting] Phase 5 round ${g + 1}: frontier threshold=${b.toFixed(1)}, maxExtent=${m.toFixed(1)}, candidates=${C.length}`);
    const P = s.map((k) => ({ ...k })), E = o.map((k) => ({ ...k })), M = [], X = [...C].sort((k, H) => H - k);
    for (const k of X)
      M.push({ shape: o[k].shape, origIdx: k }), o.splice(k, 1), s.splice(k, 1);
    M.sort((k, H) => {
      const q = k.shape.trueArea || k.shape.area;
      return (H.shape.trueArea || H.shape.area) - q;
    });
    const O = new Set(o.map((k) => k.shape.autoId)), G = {
      ...i.scoringWeights || jt,
      contour: 0.15
      // 5x boost — strongly favor contour-matching positions
    }, T = { ...i, scoringWeights: G }, $ = M.map((k) => {
      const H = Ys(k.shape.autoId, O, i.contourMatches);
      return { ...k, contourScore: H?.complementScore ?? 0, contourMatch: H };
    });
    $.sort((k, H) => {
      if (H.contourScore !== k.contourScore)
        return H.contourScore - k.contourScore;
      const q = k.shape.trueArea || k.shape.area;
      return (H.shape.trueArea || H.shape.area) - q;
    });
    let L = 0;
    for (const { shape: k, contourMatch: H } of $) {
      if (!k.outline?.length || k.outline.length < 3)
        continue;
      let q = null, Q = 1 / 0;
      const ne = [...i.shapeRotationMap?.get(k.autoId) || i.rotationSteps];
      if (H && H.optimalRotationB !== 0) {
        const _ = H.optimalRotationB;
        ne.some((K) => Math.abs(K - _) < 0.01) || ne.push(_);
      }
      for (const _ of ne) {
        const K = Hs(k, ct(k), _, n, o, T, H);
        K && K.score < Q && (Q = K.score, q = {
          shapeAutoId: k.autoId,
          x: K.x,
          y: K.y,
          rotation: _
        });
      }
      q && (s.push(q), o.push(Ze(k, q.x, q.y, q.rotation)), O.add(k.autoId), L++, h++);
    }
    c.rebuild(o);
    for (let k = 0; k < o.length; k++) {
      const H = Ee(k, o, l, n.l, n.w, i.spacing, c);
      H && (c.remove(k, o[k].bounds), o[k] = H, c.insert(k, H.bounds), Te(s, k, H));
    }
    let R = 0;
    for (const k of o) {
      const H = l === "x" ? k.bounds.maxX : k.bounds.maxY;
      H > R && (R = H);
    }
    if (console.log(`[nesting] Phase 5 round ${g + 1}: re-inserted ${L}/${M.length}, extent ${m.toFixed(1)} → ${R.toFixed(1)}`), R > m) {
      console.log(`[nesting] Phase 5 round ${g + 1}: rollback (extent increased)`), s.length = 0, o.length = 0;
      for (const k of P)
        s.push(k);
      for (const k of E)
        o.push(k);
      c.rebuild(o);
      break;
    }
    if (R >= m * 0.99)
      break;
  }
  c.rebuild(o);
  for (let g = 0; g < 3; g++) {
    let m = 0;
    const x = [...Array(o.length).keys()].sort((y, v) => {
      const b = l === "x" ? o[y].bounds.maxX : o[y].bounds.maxY;
      return (l === "x" ? o[v].bounds.maxX : o[v].bounds.maxY) - b;
    });
    for (const y of x) {
      const v = Ee(y, o, l, n.l, n.w, i.spacing, c);
      v && (c.remove(y, o[y].bounds), o[y] = v, c.insert(y, v.bounds), Te(s, y, v), m++);
      const b = Ee(y, o, u, n.l, n.w, i.spacing, c);
      b && (c.remove(y, o[y].bounds), o[y] = b, c.insert(y, b.bounds), Te(s, y, b), m++);
    }
    if (h += m, m === 0)
      break;
  }
  const w = /* @__PURE__ */ new Set();
  for (let g = 0; g < o.length; g++)
    if (!w.has(g)) {
      for (let m = g + 1; m < o.length; m++)
        if (!w.has(m) && Xe(o[g].bounds, o[m].bounds) && wt(o[g].polygon, o[m].polygon, 0)) {
          const x = lt(o[g].polygon), y = lt(o[m].polygon);
          (Be(x, o[m].polygon) || Be(y, o[g].polygon)) && (console.log(`[nesting] Final guard dropped ${o[m].shape.autoId} — overlapped ${o[g].shape.autoId}`), w.add(m));
        }
    }
  if (F("nesting.compaction.overlap-guard-dropped", w.size > 0, { dropped: w.size, total: o.length }), w.size > 0) {
    const g = [], m = [];
    for (let x = 0; x < o.length; x++)
      w.has(x) || (g.push(o[x]), m.push(s[x]));
    o.length = 0, s.length = 0;
    for (const x of g)
      o.push(x);
    for (const x of m)
      s.push(x);
  }
  let S = 0;
  for (const g of o) {
    const m = l === "x" ? g.bounds.maxX : g.bounds.maxY;
    m > S && (S = m);
  }
  return { placements: s, moved: h, maxExtent: S };
}
function jl(e) {
  const t = [];
  for (let n = 0; n < e; n++)
    t.push(n * 2 * Math.PI / e);
  return t;
}
function Zl(e) {
  return e.map((t) => {
    if (t instanceof Ht)
      return t;
    const n = t.outline, i = Array.isArray(n) && n.length >= 3, r = i ? n : [
      { x: 0, y: 0 },
      { x: t.l, y: 0 },
      { x: t.l, y: t.w },
      { x: 0, y: t.w },
      { x: 0, y: 0 }
    ];
    return new Ht({
      ...t.toData(),
      outline: r,
      trueArea: i ? Ka(r) : t.l * t.w,
      nestingRotation: 0
    });
  });
}
function Jl(e, t, n) {
  const i = t.reduce((s, o) => s + (o.trueArea || o.area), 0), r = e.l * e.w;
  return {
    efficiency: r > 0 ? i / r : 0,
    firstRowLength: 0,
    firstShapeArea: t[0]?.trueArea || t[0]?.area || 0,
    firstShapeScore: 0,
    totalShapeArea: i,
    totalShapeScore: t.length,
    totalShapesPlaced: t.length,
    containerAvailableShapes: n.length,
    stockAvailableShapes: n.length,
    totalUnplacedShapes: n.length - t.length
  };
}
const Ul = {
  async calculation(e, t, n) {
    const i = this.config, r = e?.rotationSteps || i?.nesting?.rotationSteps || 24, s = e?.spacing ?? i?.nesting?.spacing ?? 0, o = e?.contourAnalysis ?? i?.nesting?.contourAnalysis ?? !0, a = e?.strategy || "gravity", c = e?.compressionAxis ?? "x", l = e?.anneal ?? !0, u = e?.annealIterations ?? 5e3, h = t?.saw?.bladeWidth ?? 0, f = h + s;
    B("nesting", `Starting nesting: ${n.length} shapes, ${r} rotation steps, strategy: ${a}, bladeWidth: ${h}, spacing: ${f}`);
    const d = (R, k, H, q) => {
      this?.job && this.job.updateProgress({
        socketId: this.socketId,
        type: "algo",
        message: "progress",
        stockCount: 1,
        shapeCount: R,
        phase: k,
        placed: H,
        total: q
      });
    };
    d(0, "preparing");
    const p = Zl(n), w = 24;
    let S = 0, g = 0;
    for (const R of p) {
      if (!R.outline || R.outline.length <= w)
        continue;
      const k = Ie(R.outline);
      let q = Math.sqrt(k.width ** 2 + k.height ** 2) * 5e-3, Q = R.outline;
      for (let _ = 0; _ < 8 && (Q = el(R.outline, q), !(Q.length <= w)); _++)
        q *= 1.5;
      let ne = !1;
      if (Q.length < R.outline.length && Q.length >= 6) {
        ne = !0;
        for (const _ of R.outline)
          if (!Be(_, Q)) {
            ne = !1;
            break;
          }
      }
      if (ne)
        S++, R.placementOutline = Q;
      else {
        const _ = al(R.outline);
        _.length >= 4 && _.length < R.outline.length && (g++, R.placementOutline = _);
      }
    }
    F("nesting.simplify.applied", S > 0 || g > 0, { simplified: S, hullFallback: g, shapes: p.length }), (S > 0 || g > 0) && console.log(`[nesting] Simplified ${S} outlines to ≤${w} vertices, ${g} via convex hull (DP would cut inward)`);
    const m = jl(r);
    d(0, "analysing"), F("nesting.contour-analysis.enabled", o, { shapes: p.length });
    const x = o ? vl(p) : [];
    x.length > 0 && B("nesting", `Found ${x.length} contour matches`);
    const y = new $l();
    y.setSpacing(f);
    const v = /* @__PURE__ */ new Map();
    let b = 0;
    for (const R of p) {
      const k = R.placementOutline && R.placementOutline.length >= 3 ? R.placementOutline : R.outline, H = Rl(k, m);
      v.set(R.autoId, H), b += H.length;
    }
    const C = `Symmetry filter: avg ${p.length > 0 ? (b / p.length).toFixed(1) : "0"} rotations/shape (was ${m.length})`;
    B("nesting", C), console.log(`[nesting] ${C}`), d(0, "placing");
    const P = [c];
    let E = null, M = 1 / 0, X = c;
    for (const R of P) {
      const k = {
        rotationSteps: m,
        spacing: f,
        contourMatches: x,
        nfpCache: y,
        strategy: a,
        compressionAxis: R,
        scoringWeights: e?.scoringWeights,
        shapeRotationMap: v,
        onProgress: (K, j) => {
          d(K, "placing", K, j), this?.job?.extendLock && this.job.extendLock(3e5).catch(() => {
          });
        }
      }, H = setInterval(() => {
        this?.job?.extendLock && this.job.extendLock(3e5).catch(() => {
        });
      }, 12e4);
      let q;
      try {
        q = await Wl(t, p, k);
      } finally {
        clearInterval(H);
      }
      B("nesting", `[axis=${R}] Placed ${q.length}/${p.length} shapes`), d(q.length, "placing");
      let Q = 1 / 0;
      const ne = l && q.length >= 2;
      if (F("nesting.anneal.enabled", ne, { axis: R, placed: q.length, useAnneal: l }), ne) {
        d(q.length, "optimising");
        const K = ql(q, p, t, k, { maxIterations: u });
        q = K.placements, Q = K.stats.bestEnergy;
        const j = K.stats, Z = `SA [axis=${R}]: ${j.accepted} accepted (${j.improving} improving) / ${j.iterations} iterations, energy ${j.initialEnergy.toFixed(6)} → ${j.bestEnergy.toFixed(6)} (${j.improved ? `improved by ${((1 - j.bestEnergy / j.initialEnergy) * 100).toFixed(2)}%` : "no improvement"})`;
        B("nesting", Z), console.log(`[nesting] ${Z}`);
      } else if (q.length > 0) {
        const K = R === "x" ? t.l : t.w;
        let j = 0;
        for (const Z of q) {
          const pe = p.find((ut) => ut.autoId === Z.shapeAutoId);
          if (!pe)
            continue;
          const ue = R === "x" ? Z.x + pe.l : Z.y + pe.w;
          ue > j && (j = ue);
        }
        Q = j / K;
      }
      const _ = q.length >= 2;
      if (F("nesting.compaction.enabled", _, { axis: R, placed: q.length }), _) {
        d(q.length, "compacting");
        const K = Vl(q, p, t, k);
        q = K.placements, K.moved > 0 && B("nesting", `[axis=${R}] Compaction: ${K.moved} shapes moved tighter`);
        const j = R === "x" ? t.l : t.w;
        Q = K.maxExtent / j;
      }
      console.log(`[nesting] [axis=${R}] Post-compaction energy: ${Q.toFixed(6)}, placed: ${q.length}`), (!E || q.length > E.length || q.length === E.length && Q < M) && (E = q, M = Q, X = R);
    }
    const O = E;
    B("nesting", `Best axis: ${X}, energy: ${M.toFixed(6)}, placed: ${O.length}/${p.length}`);
    const G = [];
    for (const R of O) {
      const k = p.find((H) => H.autoId === R.shapeAutoId);
      k && (k.x = R.x, k.y = R.y, k.nestingRotation = R.rotation, k.added = !0, k.stock = t, G.push(k));
    }
    const T = Jl(t, G, p);
    d(G.length, "cutting-plan");
    let $ = null;
    try {
      $ = Fs(G, t, { ...e?.cnc, kerfWidth: h }), console.log(`[nesting] Cutting plan: ${$.contours.length} contours, cut: ${$.totalCutDistance}mm, rapid: ${$.totalRapidDistance}mm` + ($.commonLineSaved > 0 ? `, common-line saved: ${$.commonLineSaved}mm` : ""));
    } catch (R) {
      console.error("[nesting] Cutting plan generation failed:", R);
    }
    F("nesting.cutting-plan.generated", !!$, { placed: G.length }), $ && (this.cuttingPlans || (this.cuttingPlans = {}), this.cuttingPlans[t.autoId] = $);
    const L = {
      shapes: p.map((R) => R.compress()),
      firstShape: G[0] || null,
      topPriorityShape: "",
      cutType: "nesting",
      type: "algo",
      stock: t,
      stockID: t.id,
      score: T,
      cuttingPlan: $
    };
    await Se.call(this, L, "nesting");
  }
}, He = {
  types: ["efficiency", "guillotine", "beam", "linear", "roll", "nesting"],
  getCalculationType(e) {
    switch (e?.cutType) {
      case "efficiency":
      case "guillotine":
      case "beam":
      case "nesting":
        return F("optimiser.dispatch.kind", e.cutType, { stock: e.id, source: "cutType" }), e.cutType;
    }
    switch (e?.saw?.stockType) {
      case "linear":
      case "roll":
        return F("optimiser.dispatch.kind", e.saw.stockType, { stock: e.id, source: "saw.stockType" }), e.saw.stockType;
    }
    return F("optimiser.dispatch.kind", "null", { stock: e?.id }), null;
  },
  efficiency: async function(e, t, n) {
    await je.calculation.call(this, e, t, n);
  },
  guillotine: async function(e, t, n, i = []) {
    this.counters.placement = 0;
    const r = !!(e.secondRun && i.length);
    if (F("optimiser.dispatch.guillotine.second-run-offcuts", r, { stock: t.id, offcuts: i.length }), r) {
      for (const o of i) {
        const a = n.filter((c) => !c.added);
        o.shapes = a, await it.call(this, e, t, a, o);
      }
      return;
    }
    const s = t.saw?.cutPreference === "flex";
    F("optimiser.dispatch.guillotine.cut-preference", s ? "flex" : t.saw?.cutPreference ?? "default", { stock: t.id }), s ? await Ai.call(this, e, t, n) : await it.call(this, e, t, n);
  },
  beam: async function(e, t, n, i = []) {
    this.counters.placement = 0;
    const r = !!(e.secondRun && i.length);
    if (F("optimiser.dispatch.beam.second-run-offcuts", r, { stock: t.id, offcuts: i.length }), r) {
      for (const o of i) {
        const a = n.filter((c) => !c.added);
        o.shapes = a, await it.call(this, e, t, a, o);
      }
      return;
    }
    const s = t.saw?.cutPreference === "flex";
    F("optimiser.dispatch.beam.cut-preference", s ? "flex" : t.saw?.cutPreference ?? "default", { stock: t.id }), s ? await Ai.call(this, e, t, n) : await it.call(this, e, t, n);
  },
  roll: async function(e, t, n) {
    let i = [];
    switch (F("roll.dispatch.cut-type", t.cutType ?? "none", { stock: t.id }), t.cutType) {
      case "guillotine":
        t.saw.cutPreference = "w", i = await He.guillotine.call(this, e, t, n);
        break;
      case "efficiency":
        t.saw.efficiencyOptions.primaryCompression = "l", i = await He.efficiency.call(this, e, t, n);
        break;
    }
    await Se.call(this, i);
  },
  linear: async function(e, t, n) {
    const i = Po.call(this, t, n);
    i && t && ($o(i, t, n), i.stock = t, await Se.call(this, i));
  },
  nesting: async function(e, t, n) {
    await Ul.calculation.call(this, {}, t, n);
  }
};
async function _l({ shapeOrGroup: e, container: t, weighting: n, containerPlacedShapes: i = null, unplacedShapes: r = null, placementPositions: s = null, rayCastCoords: o = null, placedCoords: a = null }) {
  if (!i)
    throw new Error("findBestShapePosition was not passed any placedShapes");
  if (!r)
    throw new Error("findBestShapePosition was not passed any unplacedShapes");
  if (!e)
    throw new Error("findBestShapePosition was not passed a shape");
  if (le(e))
    try {
      e.updateShapeSpacing(t);
    } catch {
      return !1;
    }
  const c = t.l + t.x - e.l, l = t.w + t.y - e.w;
  if (c < 0 || l < 0)
    return !1;
  const u = new Sn(), h = t.getStock;
  if (o)
    for (const f of o.points.values()) {
      const d = qo(e, f, t);
      d && u.addPoints(d.toArray());
    }
  for (const f of s.points.values()) {
    const d = Vo(e, f, t);
    u.addPoints(d.toArray());
  }
  if (t.cutType === "efficiency") {
    const f = e.getMinSpacing(t.saw);
    if (f > 0)
      for (const d of u.points.values()) {
        if (e.x = d.x, e.y = d.y, e.isTooCloseToEdges(t)) {
          d.tooClose = !0;
          continue;
        }
        if (!ie(t) && e.isTooCloseToEdges(h)) {
          d.tooClose = !0;
          continue;
        }
        if (!d.tooClose) {
          const p = e.createProximityRectangle(f);
          if (!p)
            throw new Error("unable to create proximity rectangle");
          for (const w of i)
            if (d.tooClose = ns(p, w, t, !1), d.tooClose)
              break;
        }
      }
  }
  for (const f of u.points.values()) {
    if (f.tooClose || D.greaterThan(f.x, c) || D.greaterThan(f.y, l) || (e.x = f.x, e.y = f.y, Ot(e, i, t)))
      continue;
    Ri(e, t, n, i, r, f, a, this.sawProfile);
    let p = r.length > 1;
    (t.cutType === "efficiency" && this.config.groups.efficiency.position || ["guillotine", "beam"].includes(t.cutType) && this.config.groups.guillotine.position) && (Kl.call(this, r, t) || (p = !1)), p && (t.cutType === "efficiency" && this.config.groups.efficiency.position || ["guillotine", "beam"].includes(t.cutType) && this.config.groups.guillotine.position) && f.type !== "group" && V(e) && ko({
      container: t,
      containerPlacedShapes: i,
      unplacedShapes: r,
      shape: e,
      point: f,
      config: this.config,
      scoreFunction: (w, S, g, m, x) => {
        Ri(w, S, n, g, m, x, a, this.sawProfile);
      }
    });
  }
  return !0;
}
function Kl(e, t) {
  return !0;
}
async function qs(e, t, n = null, i = null, r = {}, s = null) {
  if (!i)
    throw new Error("no testFunction provided to testShapeRotations");
  if (typeof i != "function")
    throw new Error("testFunction provided to testShapeRotations is not a function");
  if (i.constructor.name !== "AsyncFunction")
    throw new Error("testFunction provided to testShapeRotations must be async");
  if (W(e)) {
    s && (r[s] = e.rot), await i.call(this, r);
    return;
  }
  ge(e.orientationLock) && (n = To(e, t));
  const o = ge(n) ? n : 0;
  _e(e, o, t) && ($e(e, o, t), s && (r[s] = o), await i.call(this, r));
  const a = 1;
  n === null && !e.isSquare && _e(e, a, t) && ($e(e, a, t), s && (r[s] = a), await i.call(this, r));
}
async function Zt(e, t, n) {
  if (!e.length)
    return !1;
  if (be(e)) {
    const h = /* @__PURE__ */ new Set();
    e = e.filter((f) => h.has(f.autoId) ? !1 : (h.add(f.autoId), !0));
  }
  const r = n.getStock;
  if (r.saw && !gt(r.saw))
    throw new Error("not real saw");
  const s = e?.filter((h) => h.added);
  if (!s.length)
    return;
  const o = new Set(s.map((h) => h.autoId)), a = s.filter((h) => ot(h, n, "x") && ot(h, n, "y")), c = pi.call(this, null, a, n);
  if (c.points.size === 0)
    return !1;
  const l = t ? {
    x: /* @__PURE__ */ new Map([[t.x, [t]]]),
    y: /* @__PURE__ */ new Map([[t.y, [t]]])
  } : {
    x: /* @__PURE__ */ new Map(),
    y: /* @__PURE__ */ new Map()
  };
  function u() {
    const h = fe(e, r, "filter"), f = /* @__PURE__ */ new Set();
    for (const S of h)
      if (W(S) && !we(S)) {
        const g = S;
        if (g.shapes?.length)
          for (const m of g.shapes)
            f.add(m.autoId);
      }
    const d = [], p = [];
    for (const S of h)
      if (!we(S)) {
        if (Lt(S) || le(S)) {
          const g = S;
          if (!g.shapes || g.shapes.length === 0)
            continue;
          d.push(S);
          continue;
        }
        if (fn(S)) {
          if (f.has(S.autoId) || S?.group?.inGroup)
            continue;
          p.push(S);
        }
      }
    const w = d.length === 0 ? p : p.length === 0 ? d : [...d, ...p];
    return B("groups", () => `[getRelevantUnplacedShapes] ${w.length} unplaced (${d.length} groups, ${p.length} shapes)`), d.length > 0 && d.forEach((S) => {
      B("groups", () => `Group ${S.id}: ${S.shapes?.length || 0} child shapes, ${S.shapes.map((g) => g.id).join()}, added=${S.added}`);
    }), w;
  }
  for (let h = u(); h.length; ) {
    let w = function() {
      const x = h.filter((b) => typeof b?.bestScore?.total == "number");
      if (!x?.length)
        return !1;
      const y = tc(x);
      if (!y)
        return null;
      const v = ec.call(this, n, r, l, y, s, a, o);
      return v.added && !o.has(v.autoId) && (W(v) && v.type !== "position" || (s.push(v), a.push(v)), o.add(v.autoId), se(n) && (n.shapes = n.shapes.filter((I) => I.autoId !== v.autoId))), z([
        () => A(v.added).toBe(!0),
        () => A(be(s)).toBe(!1),
        () => A(s.every((b) => b.added)).toBe(!0)
      ]), { bestShapeOrGroup: y, winningShapeOrGroup: v };
    }, f = null;
    this.uniqueShapes.length > 1 && n.cutType === "efficiency" && this.config.efficiency.rayCasting && !this.hasMinSpacing && (f = zo(n, s));
    const d = h.length;
    let p = !1;
    for (let x = 0; x < d; x++) {
      let y = !1;
      if (p && h[x].isSameSize(h[x - 1]))
        continue;
      for (let I = 0; I < x; I++)
        if (h[I].isSameSize(h[x])) {
          y = !0;
          break;
        }
      if (y) {
        p = !0;
        continue;
      } else
        p = !1;
      const v = h[x];
      v.resetBestScore();
      const b = zn.call(this, n, r, v);
      if (await qs.call(this, v, n, null, _l, {
        shapeOrGroup: v,
        container: n,
        weighting: b,
        containerPlacedShapes: s,
        unplacedShapes: h,
        placementPositions: c,
        rayCastCoords: f,
        placedCoords: l
      }), W(v) && !we(v) && !le(v)) {
        const I = v;
        if (!I.bestScore || typeof I.bestScore.total != "number") {
          B("groups", () => `[placeShapes] Group ${I.id} has no valid placement. Releasing it and all clones.`);
          const C = I.autoId.replace(/\.\d+$/, ""), P = [];
          for (const E of e)
            if (W(E) && !we(E)) {
              const M = E;
              M.autoId.replace(/\.\d+$/, "") === C && !M.added && P.push(M);
            }
          if (P.length > 0) {
            B("groups", () => `  Releasing ${P.length} groups (including clones)`);
            const E = [], M = /* @__PURE__ */ new Set();
            for (const X of P)
              if (X.shapes && X.shapes.length > 0)
                for (const O of X.shapes)
                  M.has(O.autoId) || (E.push(O), M.add(O.autoId));
            for (const X of P)
              B("groups", () => `    Destroying group ${X.id}`), X.destroy();
            E.length > 0 && (B("groups", () => `  Adding ${E.length} released shapes back to containerShapes`), e.push(...E));
          }
        }
      }
    }
    const S = w.call(this, e);
    if (S === !1 || S === null)
      return;
    const { bestShapeOrGroup: g, winningShapeOrGroup: m } = S;
    if (h = u(), h.length > 0) {
      const x = pi(m ? [m] : [], a, n);
      c.addPoints(x.toArray()), c.deletePoint(new pn(g.x, g.y));
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
function Ql(e, t) {
  if (F("evo.enabled", !!this.config.evo.enable, { stock: t.id }), !this.config.evo.enable || e.stockID !== t.id)
    return !1;
  const n = fe(this.shapeList, t, "filter", null), i = Ne(n, null, !0);
  if (i.length <= 1)
    return !1;
  const r = t?.saw?.stockType === "roll";
  if (F("evo.eligible.roll-blocked", r, { stock: t.id }), r || i.length > 100 || e?.algoTime > 2e3 || (F("evo.eligible.instance-enabled", !!this.enableEvo, { stock: t.id }), !this.enableEvo) || e.cutType === "efficiency" && e?.score[this.successMetric] < 0.65 || e?.score?.totalShapesPlaced <= 2)
    return !1;
  const s = n.length <= this.config.evo.stockLimit;
  return F("evo.eligible.under-stock-limit", s, { stock: t.id, available: n.length, limit: this.config.evo.stockLimit }), !!s;
}
function ec(e, t, n, i, r, s, o) {
  const a = W(i) ? i : i.bestScore?.group ?? null;
  if (a) {
    const l = a.shapes.filter((u) => u.added || u.group?.inGroup);
    if (l.length > 0)
      B("groups", () => `[placeBestShapeOrGroup] Group ${a.id} is invalid - ${l.length}/${a.shapes.length} shapes already placed. Placing individual shape instead.`), W(i) || (i.bestScore.group = null);
    else {
      if (B("groups", () => `[placeBestShapeOrGroup] Placing group ${a.id} with ${a.shapes.length} shapes (type=${a.type})`), a.placementOrder = this.counters.placement, this.counters.placement += a.shapes.length, a.setPositionToBestScore(), Ti(e, a), a.addToStock(t), vn(n, a), a.placeMyShapes(t), a.type === "position")
        for (const u of a.shapes)
          this.shapeList.some((h) => h.autoId === u.autoId) || this.shapeList.push(u);
      if (a.type !== "position" && a.type !== "firstShape")
        for (const u of a.shapes)
          u.added && !u.group?.inGroup && !o.has(u.autoId) && (r.push(u), s.push(u), o.add(u.autoId));
      return a;
    }
  } else i && (i.placementOrder = this.counters.placement++, i.setPositionToBestScore(), Ti(e, i), i.addToStock(t), vn(n, i));
  return a || i;
}
function tc(e) {
  return e.reduce((n, i) => {
    if (i.bestScore.total > n.bestScore.total)
      return i;
    if (i.bestScore.total === n.bestScore.total) {
      if (W(i) && !W(n))
        return i;
      if (i.area > n.area)
        return i;
    }
    return n;
  });
}
let nc = class {
  // Stub for Schema.Types.ObjectId used in server models
  static Types = {
    ObjectId: {},
    String: {},
    Number: {},
    Boolean: {},
    Array: {},
    Buffer: {},
    Date: {},
    Mixed: {}
  };
  constructor(...t) {
  }
  plugin(...t) {
    return this;
  }
  pre(...t) {
    return this;
  }
  post(...t) {
    return this;
  }
  method(...t) {
    return this;
  }
  static(...t) {
    return this;
  }
  virtual(...t) {
    return {
      get: () => this,
      set: () => this
    };
  }
  index(...t) {
    return this;
  }
};
function ic(...e) {
  return class {
  };
}
const $t = {
  Schema: nc,
  model: ic,
  connect: () => Promise.resolve(),
  connection: {}
}, et = $t.Schema, Vs = {
  cost: {
    type: Number,
    min: 0
  },
  discount: {
    type: Number,
    min: 0,
    max: 100,
    default: 0
  },
  // Optional per-stock pricing override. When set, the checkout pricing layer
  // evaluates this expression once per stock with that stock's calculation
  // context (see shared/formula/pricing-variables.ts) and uses the result in
  // place of the configured global strategy's contribution for this stock.
  pricingFormula: {
    type: String,
    default: void 0
  },
  grain: {
    type: String,
    enum: ["l", "w", "", null],
    default: ""
  },
  trim: Array,
  db_sawId: {
    type: et.Types.ObjectId,
    ref: "saws"
  },
  extras: {
    banding: {
      type: et.Types.ObjectId,
      ref: "extras"
    },
    finish: {
      type: et.Types.ObjectId,
      ref: "extras"
    },
    planing: {
      type: et.Types.ObjectId,
      ref: "extras"
    },
    machining: {
      type: et.Types.ObjectId,
      ref: "extras"
    }
  },
  category: String,
  variant: String,
  /** Manufacturer / brand name — e.g. "Egger", "Kronospan", "Senoplast".
   *  Distinct from `variant` (which is a free-form sub-grouping) so shops
   *  with multi-brand inventories can filter by manufacturer cleanly. The
   *  `brands` collection optionally carries the per-brand logo + description
   *  shown in the LibraryTab card and DetailModal. */
  brand: String,
  color: String,
  colorHex: String,
  imageUrl: String,
  tags: {
    type: [String],
    default: []
  },
  weight: {
    type: Number,
    min: 0
  },
  finish: String,
  fullSizeOnly: {
    type: Boolean,
    default: !1
  },
  // Optional external links displayed in the DetailModal (shop-owned materials
  // can populate these via the editor; library-sourced rows pull links from
  // the per-brand MaterialCatalogueCategory document instead).
  urls: {
    type: [{
      label: { type: String, default: "" },
      url: { type: String, default: "" }
    }],
    default: []
  },
  // Provenance discriminator. 'self' = shop-owned row (imported, manually created, or inherited
  // from the org's inventory). 'library' = shadow row created from a shared catalogue subscription.
  // Destructive import paths scope their deletes to source === 'self' so library rows survive.
  source: {
    type: String,
    enum: ["self", "library"],
    default: "self",
    index: !0
  },
  // When source === 'library', identifies which catalogue entry this row mirrors.
  libraryRef: {
    catalogueKey: String,
    entryId: {
      type: et.Types.ObjectId,
      ref: "material_catalogue_entry"
    }
  },
  // Field paths the user has explicitly pinned — `refreshClonesAfterRuleRemoval`
  // (server/services/ecommerce/rule-cleanup.ts) skips these when undoing a
  // removed rule's writes. Without this entry in the schema, Mongoose's strict
  // mode silently drops the field on `Material.create({ _ruleOverrides: [...] })`,
  // which makes the cleanup logic blow away values the user marked as
  // "explicit intent". Default `undefined` keeps docs without pins compact.
  _ruleOverrides: {
    type: [String],
    default: void 0
  }
}, sc = $t.Schema, Ye = new sc({
  organisation: {
    type: String,
    required: !0
  },
  // Per-org natural key. Required + unique per `{ organisation, code }` so
  // the calculator round-trip identifier (the parent material's code) can
  // always resolve back to a single Material on enrichment. Stock items
  // inherit this value at display/calc time and don't store their own.
  code: {
    type: String,
    required: !0,
    trim: !0
  },
  name: String,
  description: String,
  type: {
    type: String,
    enum: ["sheet", "linear", "roll"],
    default: "sheet"
  },
  l: Number,
  //default l
  w: Number,
  // default w
  t: Array,
  //available thicknesses
  notes: Array,
  custom: {
    type: Map,
    of: String
  },
  // Sample ordering configuration
  sample: {
    enabled: { type: Boolean, default: !1 },
    price: { type: Number, default: 0 },
    // 0 = free
    description: String,
    maxQuantity: { type: Number, default: 1 }
  },
  ...Vs
});
Ye.index({ organisation: 1, name: 1 });
Ye.index({ organisation: 1, type: 1 });
Ye.index({ organisation: 1, _id: -1 });
Ye.index({ organisation: 1, l: 1, w: 1 });
Ye.index({ organisation: 1, code: 1 }, { unique: !0, sparse: !0 });
Ye.index({ organisation: 1, "libraryRef.catalogueKey": 1, "libraryRef.entryId": 1 }, { sparse: !0 });
Ye.plugin(is);
const oc = $t.model("material", Ye, "materials"), Vi = $t.Schema, ae = new Vi({
  organisation: {
    type: String,
    required: !0
  },
  name: String,
  description: String,
  material: {
    type: String,
    required: !0
  },
  db_materialId: {
    type: Vi.Types.ObjectId,
    ref: "material",
    index: !0
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
  q: {
    type: Number,
    min: 0,
    required: !0
  },
  area: { type: Number },
  ecommerce: {
    type: Boolean,
    default: !1,
    index: !0
  },
  isOffcut: {
    type: Boolean,
    default: !1,
    index: !0
  },
  allowExactFitShapes: {
    type: Boolean,
    default: !1
  },
  unlimitedQuantity: {
    type: Boolean,
    default: !1
  },
  // Fields that override material values (empty array = inherit all from material)
  // When a field is in this array, the stock's value is used instead of material's
  overrides: {
    type: [String],
    default: []
  },
  ...Vs
});
function rc(e) {
  return e ? {
    l1: Tt({ v: e[2], dp: 4 }),
    l2: Tt({ v: e[3], dp: 4 }),
    w1: Tt({ v: e[0], dp: 4 }),
    w2: Tt({ v: e[1], dp: 4 })
  } : {
    l1: 0,
    l2: 0,
    w1: 0,
    w2: 0
  };
}
ae.pre("save", function() {
  this.area = (this.l - parseFloat(this?.trim?.[2]) - parseFloat(this?.trim?.[3])) * (this.w - parseFloat(this?.trim?.[0]) - parseFloat(this?.trim?.[1]));
});
ae.index({ organisation: 1, name: 1 });
ae.index({ organisation: 1, material: 1 });
ae.index({ organisation: 1, db_materialId: 1 });
ae.index({ organisation: 1, ecommerce: 1, isOffcut: 1, name: 1 });
ae.index({ organisation: 1, ecommerce: 1, isOffcut: 1, material: 1 });
ae.index({ organisation: 1, ecommerce: 1, isOffcut: 1, _id: -1 });
ae.index({ organisation: 1, ecommerce: 1, isOffcut: 1, t: 1 });
ae.index({ organisation: 1, ecommerce: 1, isOffcut: 1, cost: 1 });
ae.index({ organisation: 1, ecommerce: 1, isOffcut: 1, l: 1, w: 1 });
ae.index({ organisation: 1, ecommerce: 1, isOffcut: 1, category: 1 });
ae.index({ organisation: 1, ecommerce: 1, q: 1 });
ae.index({ organisation: 1, ecommerce: 1, isOffcut: 1, material: 1, name: 1 });
ae.index({ organisation: 1, isOffcut: 1, material: 1 });
ae.index({ organisation: 1, "libraryRef.catalogueKey": 1, "libraryRef.entryId": 1 }, { sparse: !0 });
ae.plugin(is);
const ac = $t.model("stock", ae, "stock");
async function lc(e = [], t, n = []) {
  t instanceof Wt || (t = new Wt(t));
  let i = [];
  const r = [];
  for (const s of e) {
    if (!ge(s.material))
      continue;
    const o = i.filter((a) => {
      if (st(s, a)) {
        let c = !1, l = !1, u = !0;
        if (a?.saw?.stockType === "linear" && (D.equalTo(s.w, a.w) || (u = !1)), (s.t === a.t || !ge(a.t)) && (l = !0), s.material === a.material && (c = !0), a?.saw?.stockType === "linear") {
          if (c && l && u)
            return !0;
        } else if (c && l)
          return !0;
      }
      return !1;
    });
    if (o.length) {
      s.stockLock = o.map((a) => a.parentId);
      continue;
    }
    try {
      const a = {
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
              $nin: n.map((u) => u?.id?.toLowerCase())
            }
          }
        ]
      }, [c, l] = await Promise.all([
        oc.findById(s?.material?.toLowerCase())?.lean(),
        //TODO make sorting order and limit configurable based on org
        ac.find(a).sort({ area: 1 }).limit(3).lean()
      ]);
      c && l.length ? l.forEach((u) => {
        const h = rc(u.trim), f = {
          l: u.l - (h.l1 ?? 0) - (h.l2 ?? 0),
          w: u.w - (h.w1 ?? 0) - (h.w1 ?? 0)
        };
        if (!(D.lessThanOrEqualTo(s.l, f.l) && D.lessThanOrEqualTo(s.w, f.w) || D.lessThanOrEqualTo(s.w, f.l) && D.lessThanOrEqualTo(s.l, f.w)))
          return;
        const d = Ro.parse({
          // Base dimensions from stockItem
          l: u.l,
          w: u.w,
          t: u.t,
          q: u.q,
          cost: u.cost,
          grain: u.grain || "",
          material: u.material,
          // Generated IDs
          id: (n.length + i.length + 1).toFixed(1),
          parentId: (n.length + i.length + 1).toString(),
          // Additional required fields
          name: c.name,
          autoAdd: !1,
          //material based calculations do not allow autoAdd
          trim: h,
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
        i.push(new gn(d)), Array.isArray(s.stockLock) ? s.stockLock.push(d.parentId) : s.stockLock = [d.parentId];
      }) : r.push({
        material: c.name,
        t: s.t,
        shape: s.parentId
      });
    } catch (a) {
      throw console.error("error finding stock", a.message), new Error(a);
    }
  }
  if (i.length)
    i = mn(i);
  else if (!n?.length)
    throw new Error("No relevant stock found - check material, thickness, dimensions & stock quantity");
  return {
    stockList: i,
    unavailableStock: r
  };
}
function cc(e, t) {
  const n = Math.min(e.l, e.w), i = Math.max(e.l, e.w), r = e.trim;
  return `${t ? e.parentId + "|" : ""}${e.t}|${e.orientationLock}|${e.material ?? ""}|${n}|${i}|${r?.l1 ?? ""}|${r?.l2 ?? ""}|${r?.w1 ?? ""}|${r?.w2 ?? ""}`;
}
function uc(e, t, n = !1) {
  const i = /* @__PURE__ */ new Map();
  for (const s of t) {
    s.identicalTo = [];
    let o = i.get(s.parentId);
    o || (o = [], i.set(s.parentId, o)), o.push(s);
  }
  const r = /* @__PURE__ */ new Map();
  for (const s of e) {
    const o = cc(s, n);
    let a = r.get(o);
    a || (a = /* @__PURE__ */ new Set(), r.set(o, a)), a.add(s.parentId);
  }
  for (const s of r.values())
    if (!(s.size <= 1))
      for (const o of s) {
        const a = i.get(o);
        if (a)
          for (const c of a)
            for (const l of s)
              l !== c.parentId && c.identicalTo.push(l);
      }
  for (const [s, o] of i)
    if (o.length > 1)
      for (const a of o)
        a.identicalTo.includes(s) || a.identicalTo.push(s);
}
function fc(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const r of t)
    n.has(r.parentId) || n.set(r.parentId, r);
  const i = /* @__PURE__ */ new Map();
  for (const r of e) {
    let s = i.get(r.parentId);
    s || (s = [], i.set(r.parentId, s)), s.push(r);
  }
  for (const r of i.values()) {
    const s = r[0], o = {};
    for (const a of n.values()) {
      const c = It(s, a);
      o[a.parentId] = {
        any: st(s, a, null),
        0: c.includes(0),
        1: c.includes(1)
      };
    }
    for (const a of r)
      a.fitsStock = o;
  }
}
function hc(e, t, n, i) {
  const r = i?.similarityThreshold ?? 0.1, s = i?.selectionStrategy, o = i?.minPerShape ?? 0, a = i?.minTotal ?? 0;
  if (e.length <= 1)
    return t;
  const { filtered: c, excludedGroups: l } = pc(e, n, { similarityThreshold: r, selectionStrategy: s });
  let u = [...c], h = [...l];
  if (o > 0) {
    const p = /* @__PURE__ */ new Map();
    for (const S of t) {
      const g = p.get(S.parentId) || 0;
      p.set(S.parentId, g + 1);
    }
    const w = u.filter((S) => (p.get(S.parentId) || 0) < o);
    if (w.length > 0) {
      for (const S of w) {
        const g = S.parentId;
        for (const m of h) {
          const x = m.filter((y) => (p.get(y.original.parentId) || 0) >= o);
          if (x.length > 0) {
            const y = x.sort((b, I) => (p.get(I.original.parentId) || 0) - (p.get(b.original.parentId) || 0))[0], v = u.findIndex((b) => b.parentId === g);
            if (v !== -1) {
              u[v] = y.original;
              const b = m.findIndex((I) => I === y);
              b !== -1 && m.splice(b, 1);
              break;
            }
          }
        }
      }
      h = h.filter((S) => S.length > 0);
    }
  }
  if (a > 0) {
    const p = new Set(u.map((S) => S.parentId)), w = t.filter((S) => p.has(S.parentId)).length;
    if (w < a && h.length > 0) {
      const S = [];
      let g = w;
      for (; g < a && h.some((m) => m.length > 0); ) {
        for (let m = 0; m < h.length && g < a; m++) {
          const x = h[m];
          if (x.length > 0) {
            const v = dc([...x], s)[0], b = v.original.parentId, I = t.filter((P) => P.parentId === b).length;
            S.push(v.original), g += I;
            const C = x.findIndex((P) => P === v);
            C !== -1 && x.splice(C, 1);
          }
        }
        if (h = h.filter((m) => m.length > 0), h.length === 0 || h.every((m) => m.length === 0))
          break;
      }
      u = [...u, ...S];
    }
  }
  const f = new Set(u.map((p) => p.parentId));
  return t.filter((p) => f.has(p.parentId));
}
function dc(e, t) {
  switch (t) {
    case "largest":
      return e.sort((n, i) => i.area - n.area);
    case "smallest":
      return e.sort((n, i) => n.area - i.area);
    default:
      return e;
  }
}
function pc(e, t, n) {
  const i = n.similarityThreshold, r = n.selectionStrategy;
  if (e.length <= 1)
    return { filtered: e, excludedGroups: [] };
  const s = e.map((l) => {
    const u = {
      l: l.longSide,
      w: l.shortSide
    };
    return {
      original: l,
      // Keep reference to the original shape object
      rotated: u,
      // Normalized dimensions for comparison (keeping 'rotated' name for compatibility)
      area: l.area
      // Area for 'largest'/'smallest' selection
    };
  }), o = [];
  for (const l of s) {
    let u = !1;
    for (const h of o)
      if (h.some((f) => gc(l.rotated, f.rotated, i))) {
        h.push(l), u = !0;
        break;
      }
    u || o.push([l]);
  }
  const a = [], c = [];
  return o.forEach((l) => {
    if (l.length === 1) {
      a.push(l[0]);
      return;
    }
    let u;
    switch (r) {
      case "largest":
        u = l.reduce((f, d) => d.area > f.area ? d : f, l[0]);
        break;
      case "smallest":
        u = l.reduce((f, d) => d.area < f.area ? d : f, l[0]);
        break;
      default:
        u = l[0];
    }
    a.push(u);
    const h = l.filter((f) => f !== u);
    h.length > 0 && c.push(h);
  }), {
    filtered: a.map((l) => l.original),
    excludedGroups: c
  };
}
function gc(e, t, n) {
  const i = Math.abs(e.l - t.l) / Math.max(e.l, t.l, 1), r = Math.abs(e.w - t.w) / Math.max(e.w, t.w, 1);
  return i <= n && r <= n;
}
function mc(e, t, n) {
  if (B("stack", () => `previous stock ${t.id}`), ["l", "w", "material", "t"].some((s) => e[s] !== t[s]))
    return !1;
  const i = e.cutType === "guillotine" || e.cutType === "beam", r = e.saw.guillotineOptions?.strategy !== "time";
  if (!i || i && r) {
    const s = js.call(this, e, t, n, this.shapeList);
    if (s)
      return B("stack", () => `stack found: ${e.id} === ${t.id}`), this.recordStackToBestResult(e, n), e.used = !0, e.score = t.score, s;
  }
  return !1;
}
function js(e, t, n, i) {
  if (!this.config.stack || !n.length)
    return !1;
  const r = e.saw;
  if (!r?.options?.stackingMode || r.options.stackingMode === "none")
    return !1;
  if (B("stack", () => `looking for stack for ${e.id}, comparing to ${t.id}`), r.cutType === "beam" && t.stack) {
    let s = t, o = 1;
    if (t.stack.stock ? (s = t.stack.stock, o = s.stack?.number || 1) : t.stack.number && (o = t.stack.number), s.t * o + e.t > r.stackHeight)
      return !1;
  }
  if (e.parentId === t.parentId) {
    if (r.cutType === "beam" && r.stackHeight > 0 && e.t * 2 > r.stackHeight)
      return !1;
    const s = de(i, t);
    if (!s.length)
      return !1;
    const o = Zs.call(this, [t], s, e, n, !0, r.options.stackingMode === "identical");
    if (o)
      return e.stack = { stock: o }, o.stack.number === 1 ? o.stack.number = 2 : o.incrementStack(), o;
  }
  return !1;
}
function yc(e, t) {
  if (!this.config.findDuplicatePatterns)
    return !1;
  B("stack", () => `🔎 checkForDuplicates called for ${e.id}`);
  const n = this.shapeList.filter((o) => o.added);
  B("stack", () => `   Total shapes added across all stock: ${n.length}`);
  const i = this.stockList.filter((o) => o.used && o.id !== e.id && o.l === e.l && o.w === e.w && o.t === e.t);
  if (B("stack", () => `   Relevant used stock with matching dimensions: ${i.map((o) => o.id).join(", ")}`), !i.length)
    return B("stack", () => `   No relevant stock found for ${e.id}`), !1;
  const r = e.saw?.options?.stackingMode === "identical", s = Zs.call(this, i, n, e, t, !0, r);
  return s ? (B("stack", () => `   ✅ Duplicate found: ${e.id} matches ${s.id}`), Eo(s, e), e.used = !0, s) : (B("stack", () => `   No duplicate pattern found for ${e.id}`), !1);
}
function Zs(e, t, n, i, r = !0, s = !0) {
  if (!e.length || !i.length)
    return null;
  B("stack", () => `🔍 Checking for duplicate patterns for ${n.id}`), B("stack", () => `   Current shapes count: ${i.length}`), B("stack", () => `   Used stock to check: ${e.map((f) => f.id).join(", ")}`);
  const o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
  for (const f of i) {
    const d = s ? `${f.longSide}|${f.shortSide}|${f.material}` : `${f.longSide}|${f.shortSide}`;
    let p = o.get(d);
    if (p || (p = [], o.set(d, p)), p.push(f), s) {
      if (f.parentId) {
        let w = a.get(f.parentId);
        w || (w = [], a.set(f.parentId, w)), w.push(f);
      }
      if (f.identicalTo && Array.isArray(f.identicalTo))
        for (const w of f.identicalTo) {
          let S = c.get(w);
          S || (S = [], c.set(w, S)), S.push(f);
        }
      if (f.autoId) {
        const w = f.autoId.split(".")[0];
        let S = l.get(w);
        S || (S = [], l.set(w, S)), S.push(f);
      }
    }
  }
  const u = /* @__PURE__ */ new Map();
  for (const f of t) {
    if (!f.added || !f.stock?.id)
      continue;
    const d = f.stock.id;
    let p = u.get(d);
    p || (p = [], u.set(d, p)), p.push(f);
  }
  const h = /* @__PURE__ */ new Map();
  for (const f of e) {
    B("stack", () => `   📋 Checking against stock ${f.id}`);
    const d = u.get(f.id) || [];
    if (!d.length) {
      B("stack", () => `      ❌ No shapes on ${f.id}, skipping`);
      continue;
    }
    B("stack", () => `      Stock ${f.id} has ${d.length} shapes`);
    const p = d.length;
    if (i.length < p)
      continue;
    const w = [];
    h.clear();
    let S = !0;
    for (const g of d) {
      let m = null;
      if (s) {
        const x = /* @__PURE__ */ new Set(), y = `${g.longSide}|${g.shortSide}|${g.material}`, v = o.get(y);
        if (v)
          for (const I of v)
            h.has(I) || x.add(I);
        if (g.parentId) {
          const I = c.get(g.parentId);
          if (I)
            for (const P of I)
              h.has(P) || x.add(P);
          const C = a.get(g.parentId);
          if (C)
            for (const P of C)
              h.has(P) || x.add(P);
        }
        if (g.identicalTo && Array.isArray(g.identicalTo))
          for (const I of g.identicalTo) {
            const C = a.get(I);
            if (C)
              for (const P of C)
                h.has(P) || x.add(P);
          }
        if (g.autoId) {
          const I = g.autoId.split(".")[0], C = l.get(I);
          if (C)
            for (const P of C)
              h.has(P) || x.add(P);
        }
        const b = [];
        for (const I of x)
          I.isIdentical(g, !1) && b.push(I);
        b.length === 1 ? (m = b[0], B("stack", () => `      ✓ Shape ${g.id} matched to ${m.id}`)) : b.length > 1 ? (m = b.find((I) => I.parentId === g.parentId) || b[0], B("stack", () => `      ✓ Shape ${g.id} matched to ${m.id} (${b.length} candidates, preferred by parentId: ${m.parentId === g.parentId})`)) : B("stack", () => `      ✗ Shape ${g.id} has no identical match`);
      } else {
        const x = `${g.longSide}|${g.shortSide}`, y = o.get(x), v = y ? y.filter((b) => !h.has(b) && _e(b, g.rot, f)) : [];
        v.length === 1 ? m = v[0] : v.length > 1 && (m = v.find((b) => b.parentId === g.parentId) || v[0]);
      }
      if (m)
        h.set(m, !0), w.push({
          current: m,
          match: g
        });
      else {
        B("stack", () => `      ❌ Failed to match all shapes for ${f.id}`), S = !1;
        break;
      }
    }
    if (S && w.length === p) {
      if (B("stack", () => `      ✅ Perfect match found: ${n.id} matches ${f.id}`), r) {
        n.shapes = [];
        for (const { current: g, match: m } of w)
          g.update({
            x: m.x,
            y: m.y,
            w: m.w,
            l: m.l,
            placementOrder: m.placementOrder,
            added: !0,
            stock: n
          }), n.shapes.push(g);
      }
      return f;
    } else
      B("stack", () => `      ⚠️ Stock ${f.id}: allMatched=${S}, matches=${w.length}, target=${p}`);
  }
  return B("stack", () => `   ❌ No duplicate pattern found for ${n.id}`), null;
}
class ji extends Mo {
  // Zod schema for validation and serialization
  static schema = wr;
  static computedProperties = br;
  // Optional coarse-grained phase timer attached by main.ts:go() to capture
  // placement/refine sub-phases. Not persisted — transient runtime-only state.
  phaseTimer;
  /**
   * Get entity type
   */
  getType() {
    return ee.Optimiser;
  }
  constructor(t) {
    const n = yr(t.user, t), i = {
      // Pass through most properties directly
      ...t,
      // Apply defaults for arrays
      stockList: t.stockList || [],
      shapeList: t.shapeList || [],
      userGroups: t.userGroups || [],
      // Config overrides
      config: n,
      successMetric: yi(n, "successMetric", t.successMetric || ye.successMetric),
      enableEvo: yi(n, "evo.enable", !0) ? t.enableEvo ?? !0 : !1,
      weighting: t.weighting || {
        efficiency: ve.efficiency,
        guillotine: ve.guillotine,
        roll: ve.roll
      },
      stockType: t.saw?.stockType || null,
      // Don't skip validation so defaults are applied
      skipSchemaValidation: !1
    };
    super(i), !this.useInventory && this.stockList?.length && this.stockList.forEach((r) => {
      r?.saw?.stockType || (r.saw.stockType = this.saw.stockType);
    }), _i({
      stocks: this.stockList,
      shapes: this.shapeList
    }, "Optimiser constructor"), this.uniqueStock = ht(this.stockList), this.groupList = [], this.init();
  }
  init() {
    const t = [];
    if (this.shapeList = this.shapeList.filter((o) => o.l && o.w), !this.shapeList.length)
      throw new Error("No parts to process");
    for (const o of this.shapeList)
      !o.id && "parentId" in o && (o.id = `${o.autoId}.0`, o.parentId = o.autoId);
    this.shapeList.some((o) => o.duplicate) || ([...this.shapeList].forEach((a) => {
      a.applyTrim();
      for (let c = a.q; c--; )
        c != 0 && this.shapeList.push(a.clone(c.toString()));
    }), this.shapeList.push(...t), this.shapeList.sort(Le.ID));
    const n = this.shapeList.filter((o) => !W(o));
    this.shapeAnalysis(n, this.stockList);
    const i = [];
    this.userGroups.forEach((o, a) => {
      for (let c = 0; c < o.q; c++) {
        const l = o.toGroup(a, c, this.shapeList, this.saw);
        l && i.push(l);
      }
    });
    const r = Ao(i, this.stockList, this.saw), s = r.shapeList;
    r.unusableShapes?.length && B("groups", `${r.unusableShapes.length} user groups could not be matched to any stock`), this.shapeList.push(...s), this.uniqueShapes = this.shapeList.filter((o) => !o?.duplicate), this.hasMinSpacing = typeof this?.saw?.options?.minSpacing == "number";
  }
  shapeAnalysis(t, n) {
    uc.call(this, t, this.shapeList), ra.call(this, t, n), fc.call(this, t, n);
  }
  recordStackToBestResult(t, n = []) {
    if (this.bestResult) {
      const i = {
        ...this.bestResult,
        stock: t,
        shapes: n.filter((r) => r.added && r.stock.id === t.id).map((r) => r.compress())
      };
      this.bestResult = Bs(i);
    }
  }
  resetClonedShapes(t) {
    t.forEach((n) => {
      const i = this.shapeList.find((r) => r.id === n.id);
      i && i.reset(!1);
    });
  }
  //various methods of choosing a selection of stock for the calculation
  stockRefinement(t, n, i) {
    if (!t.length)
      return [];
    const r = /* @__PURE__ */ new Set();
    n.forEach((a) => a.stockLock.forEach((c) => r.add(c)));
    const s = t.filter((a) => r.has(a.parentId));
    let o = Do(s);
    if (!o.length)
      return [];
    if (i && i?.options?.stockSelection === "smallest")
      return o.sort(Le.AA), [o[0]];
    if (o.some((a) => a.material)) {
      const a = o[0].material;
      o = o.filter((c) => c.material === a);
    }
    if (o.some((a) => a.t)) {
      const a = Math.min(...o.map((c) => c.t));
      o = o.filter((c) => c.t === a);
    }
    switch (i.stockType) {
      case "linear":
        return o.slice(0, 10);
      case "roll":
        return o.slice(0, 10);
      default:
        return n.length < 100 ? o.slice(0, 5) : o.slice(0, 3);
    }
  }
  /**
   * examines all strategies for each stock and returns an array of best results
   * @returns {Array} best results
   */
  async run() {
    let t = "";
    this.config.captureProfile && (t = `profile-${Date.now()}`, "profile" in console && typeof console.profile == "function" && console.profile(t));
    async function n(s, o) {
      const a = He.getCalculationType(s);
      if (F("optimiser.dispatch", a ?? "none", { stock: s.id, cutType: s.cutType, stockType: s.stockType }), !a)
        throw new Error(`calculation type not found for stock ${s.id}`);
      if (!He.types.includes(a))
        throw new Error(`invalid calculation type: ${a} for stock ${s.id}`);
      return o = o.filter((c) => !c.added && c.stockLock.includes(s.parentId)), await He[a].call(this, {}, s, o);
    }
    function i(s, o) {
      const a = s.filter((l) => !l.unusable), c = this.stockRefinement(a, o, this.saw);
      return c.sort(Le.ID), B("allStock", `refined stock ${c.map((l) => l.id).join()}`), c;
    }
    this.phaseTimer?.start("placement"), await this.allStock(n, i), this.phaseTimer?.end(), this.saw.stockType === "linear" && (this.phaseTimer?.start("rebalance-linear"), await this.rebalanceUnplacedShapes(), this.phaseTimer?.end()), this.phaseTimer?.start("refine"), this.refineUnplacedShapes(), this.phaseTimer?.end(), this.config.secondRun.enable && (this.phaseTimer?.start("second-run"), await this.secondRun(), this.phaseTimer?.end()), this.config.captureProfile && "profileEnd" in console && typeof console.profileEnd == "function" && console.profileEnd(t);
    const r = (this.groupList || []).filter((s) => we(s) && s.added);
    for (const s of this.shapeList)
      if (!(!V(s) || !s.added)) {
        for (const o of r)
          if (o.shapes.some((a) => a.autoId === s.autoId)) {
            s.group.addedAsGroup = o;
            break;
          }
      }
    for (let s = this.shapeList.length; s--; ) {
      const o = this.shapeList[s];
      le(o) && (o.added && o.stock && o.placeMyShapes(o.stock), this.shapeList.splice(s, 1), this.shapeList.push(...o.shapes));
    }
    this.groupList = [];
    {
      const s = this.shapeList.filter((c) => c.added && V(c)), o = /* @__PURE__ */ new Map();
      for (const c of s) {
        const l = c.stock?.autoId ?? "?";
        o.has(l) || o.set(l, []), o.get(l).push(c);
      }
      let a = 0;
      for (const c of o.values())
        En(c).length > 0 && a++;
      this.finalLayoutViolated = a > 0, F("optimiser.final-layout-violation", a > 0, {
        boards: (this.stockList || []).filter((c) => c.used && !c.stack?.stock).length,
        violatingBoards: a
      });
    }
  }
  /* calculate all unique stock with the supplied calculation and choose a winner if multiple results returned
     DO NOT pass arrow functions as arguments */
  async allStock(t, n) {
    this.resetShapes(this.shapeList, {
      keepScores: !1,
      removeGroups: !0,
      keepGuillotineData: !1
    });
    let i, r = null, s = null, o, a, c, l;
    for (let u = ht(this.stockList, !1); u.length > 0; u = ht(this.stockList, !1)) {
      let h = fe(this.shapeList);
      if (!h?.length)
        break;
      for (const S of u)
        if (!fe(h, S, "some")) {
          B("allStock", `stock ${S.id} is unusable`), S.unusable = !0;
          break;
        }
      const f = n.call(this, u, h);
      if (z([() => A(f.every((S) => gt(S.saw))).toBe(!0)]), !f.length)
        break;
      if (l) {
        const S = f.findIndex((g) => g?.parentId === l);
        S > -1 && f.unshift(f.splice(S, 1)[0]);
      }
      if (r = null, s = null, this.stockList.some((S) => S.used)) {
        B("stack", `🔄 Checking refined stock for stacks/duplicates: ${f.map((S) => S.id).join(", ")}`);
        for (const S of f) {
          B("stack", `current stock: ${S.id}`);
          const g = fe(h, S);
          if (g?.length) {
            if (i && (r = mc.call(this, S, i, g), r)) {
              i = r, o = S;
              break;
            }
            if (this.config.findDuplicatePatterns && (s = yc.call(this, S, g), s)) {
              i = S;
              break;
            }
          }
        }
      }
      if (!r && !s) {
        for (const m of f) {
          a = null;
          try {
            m.applyTrim();
          } catch (y) {
            B("info", `stock.applyTrim error ${y.message}`);
            continue;
          }
          const x = fe(this.shapeList);
          if (!x?.length)
            return;
          if (a = fe(x, m), !a?.length)
            if (m.allowExactFitShapes && (a = x.filter((y) => D.equalTo(y.l, m.l + m.trim.l1 + m.trim.l2) && D.equalTo(y.w, m.w + m.trim.l1 + m.trim.l2) || D.equalTo(y.w, m.w + m.trim.w1 + m.trim.w2) && D.equalTo(y.l, m.l + m.trim.w1 + m.trim.w2))), a?.length)
              m.removeTrim();
            else
              continue;
          if (!a?.length) {
            m.used = !1;
            continue;
          }
          if (this.config.filtering.enable && a.length > this.config.filtering.minTotal) {
            const y = a.length;
            a = hc(this.uniqueShapes, x, m, {
              similarityThreshold: this.config.filtering.similarityThreshold,
              selectionStrategy: "smallest",
              minTotal: this.config.filtering.minTotal
            });
            const v = a.length;
            B("allStock", `filtering reduced shapes by ${y - v}, orginal: ${y}, filtered: ${v}`);
          }
          await t.call(this, m, a), this.resetShapes(a, {
            keepScores: !1,
            removeGroups: !1,
            keepGuillotineData: !1
          }), u.length > 1 && a.filter((v) => W(v)).forEach((v) => v.destroy());
        }
        if (f.forEach((m) => m.used = !1), !this.bestResult || !this.bestResult?.stock)
          break;
        c = jn(this.bestResult, this.stockList), c.score = this.bestResult.score, c.used = !0, i = c;
        const { updatedShapes: S, groups: g } = rt({
          bestResult: this.bestResult,
          shapeList: this.shapeList,
          relevantStock: f,
          stockList: this.stockList,
          resetShapes: this.resetShapes.bind(this),
          groupList: this.groupList
        });
        if (g.length > 0 && this.groupList && g.forEach((m) => {
          this.groupList.find((y) => y.autoId === m.autoId) || this.groupList.push(m);
        }), kt(S), this.bestResult?.offcut) {
          const m = {
            x: this.bestResult.totalLength + this.saw.bladeWidth,
            l: this.bestResult.offcut,
            w: this.bestResult.stock.w,
            stock: c
          };
          this.offcuts.push(m);
        }
        c?.saw?.stockType !== "roll" && this.summariseResults([this.bestResult], c);
      }
      h = fe(this.shapeList);
      let d = [], p = [], w = 0;
      if (this.bestResult = null, this.bestPartialResult = null, r && (o?.autoAdd || sn(this.stockList, o)))
        d.push(o);
      else {
        p = Ne(h, !1);
        const S = p.filter((x) => ge(x.stockLock)), g = new Set(S.flatMap((x) => Array.isArray(x.stockLock) ? x.stockLock : [x.stockLock]));
        g.size || B("allStock", "no new stock requirements found");
        for (const x of g) {
          const y = this.stockList.filter((v) => {
            if (x === v.parentId) {
              if (v.autoAdd)
                return !0;
              if (sn(this.stockList, v))
                return !0;
            }
            return !1;
          });
          if (y.length && !y.find((v) => !v.used)) {
            const v = y[0].clone(y.length.toString());
            this.stockList.push(v), w++;
          }
        }
        p.filter((x) => !ge(x.stockLock) || !x.stockLock.length).length && !d.length && (d = ht(this.stockList).filter((x) => x.autoAdd || sn(this.stockList, x)));
      }
      if (d.length && d.forEach((S) => {
        const g = S.clone(Bo(this.stockList, S));
        this.stockList.push(g), r ? l = g.parentId : l = !1, w++;
      }), w ? (this.stockList.sort(Le.AA), this?.job && this.job.updateProgress({
        socketId: this.socketId,
        type: "addStock",
        message: `added ${w} additional stock`,
        stockCount: this.stockList.reduce((S, g) => g.used ? ++S : S, 0),
        shapeCount: this.shapeList.reduce((S, g) => g.added ? ++S : S, 0)
      })) : this?.job && this.job.updateProgress({
        socketId: this.socketId,
        type: "stockComplete",
        message: `completed stock ${c.parentId}`,
        stockCount: this.stockList.reduce((S, g) => g.used ? ++S : S, 0),
        shapeCount: this.shapeList.reduce((S, g) => g.added ? ++S : S, 0)
      }), this.useInventory && p.length && ht(this.stockList, !1).length === 0) {
        const S = await lc(p, this.saw, this.stockList);
        if (S.stockList.length) {
          const g = mn(S.stockList);
          g.length && this.stockList.push(...g);
        }
      }
    }
    this.stockList = this.stockList.filter((u) => u.used);
  }
  /**
   * After the greedy allStock pass, try to place unplaced shapes by rebalancing parts across pairs of stocks.
   * Uses First-Fit-Decreasing bin packing to find better distributions.
   *
   * Example: if the greedy pass puts two 1161mm parts on one stock (offcut 725mm)
   * and two 1025mm + one 796mm on another (offcut 198mm), leaving a second 796mm unplaced,
   * this method can redistribute to 1161+1025+796 on each stock, placing all parts.
   */
  /**
   * Post-placement refinement: try to fit unplaced shapes into the remaining
   * empty space on each used stock. Uses a snap-grid (corners of already-placed
   * shapes + stock origin) and AABB collision testing.
   *
   * Only runs on efficiency-cut stocks — guillotine/beam require straight cuts
   * that arbitrary post-placement would violate.
   */
  refineUnplacedShapes() {
    const t = this.saw?.bladeWidth ?? 0;
    let n = 0;
    for (const i of this.stockList) {
      if (!i.used || i.cutType !== "efficiency")
        continue;
      const r = this.shapeList.filter((f) => f.added && V(f) && f.stock?.autoId === i.autoId);
      if (!r.length)
        continue;
      const s = r.map((f) => ({ x: f.x, y: f.y, l: f.l, w: f.w })), o = i.trim || {}, a = o.x1 ?? 0, c = o.y1 ?? 0, l = i.l - (o.x2 ?? 0), u = i.w - (o.y2 ?? 0), h = this.shapeList.filter((f) => !f.added && V(f) && (!f.stockLock?.length || f.stockLock.includes(i.parentId)));
      for (const f of h) {
        const d = It(f, i);
        let p = !1;
        for (const w of d) {
          if (!$e(f, w, i))
            continue;
          const S = f.l, g = f.w;
          if (S > l - a || g > u - c)
            continue;
          const m = Xo({ l: S, w: g }, s, t);
          m.push({ x: a, y: c });
          const x = /* @__PURE__ */ new Set([a]), y = /* @__PURE__ */ new Set([c]);
          for (const v of s)
            x.add(v.x), x.add(v.x + v.l + t), y.add(v.y), y.add(v.y + v.w + t);
          for (const v of x)
            for (const b of y)
              m.push({ x: v, y: b });
          for (const v of m) {
            if (D.lessThan(v.x, a) || D.lessThan(v.y, c) || D.greaterThan(v.x + S, l) || D.greaterThan(v.y + g, u))
              continue;
            const b = { x: v.x, y: v.y, l: S, w: g };
            let I = !1;
            for (const C of s)
              if (Un(b, C, t)) {
                I = !0;
                break;
              }
            if (!I) {
              f.x = v.x, f.y = v.y, f.addToStock(i), f.placementOrder = r.length + n + 1, s.push(b), n++, p = !0;
              break;
            }
          }
          if (p)
            break;
        }
      }
    }
    return n > 0 && B("allStock", `refineUnplacedShapes: placed ${n} additional shape(s)`), n;
  }
  async rebalanceUnplacedShapes() {
    const t = this.shapeList.filter((h) => !h.added && V(h));
    if (!t.length)
      return;
    const n = this.stockList.filter((h) => h.used && !h.stack?.stock);
    if (n.length < 2)
      return;
    B("rebalance", `${t.length} unplaced shapes, trying rebalance across ${n.length} stocks`);
    const i = this.saw.bladeWidth, r = /* @__PURE__ */ new Map();
    let s = 0;
    for (const h of n) {
      const f = this.shapeList.filter((d) => d.added && V(d) && d.stock?.autoId === h.autoId);
      r.set(h.autoId, f), s += f.length;
    }
    const o = Array.from(r.values()).flat(), a = [...o, ...t], c = this.ffdMultiBin1D(a, n, i);
    if (!c)
      return;
    const l = c.reduce((h, f) => h + f.length, 0);
    if (l <= s)
      return;
    B("rebalance", `better arrangement found: ${l} vs ${s} shapes across ${n.length} stocks`), o.forEach((h) => h.removeFromStock());
    for (const h of n)
      h.shapes = [], h.rootSegment = null, h.score = null;
    for (let h = 0; h < n.length; h++) {
      const f = n[h], d = c[h];
      if (!d.length)
        continue;
      f.applyTrim(), Go(d, f, null, "l"), f.used = !0;
      const p = d.reduce((w, S) => w + S.l, 0) + (d.length - 1) * i;
      f.score = {
        efficiency: p / f.l,
        totalShapesPlaced: d.length
      }, p + i < f.l && this.offcuts.push({
        x: p + i,
        l: f.l - p - i,
        w: f.w,
        stock: f
      });
    }
    const u = c.flat();
    kt(u), B("rebalance", `rebalanced ${u.length} shapes across ${n.length} stocks`);
  }
  /**
   * Check if a shape is compatible with a stock for rebalancing
   * Validates stockLock, material match, thickness match, and linear width match
   */
  isShapeCompatibleWithStock(t, n) {
    return !(!dn(t, n) || !Lo(t, n, ge(t.material) && ge(n.material)) || !Oo(t, n, ge(t.t) && ge(n.t)) || !Wo(t, n, this.saw));
  }
  /**
   * First-Fit-Decreasing bin packing for 1D shapes across N bins
   * Tries multiple heuristics (best-fit and worst-fit) and returns whichever places more shapes
   */
  ffdMultiBin1D(t, n, i) {
    const r = n.map((d) => d.l), s = [...t].sort((d, p) => p.l - d.l), o = (d) => {
      const p = r.map(() => []), w = [...r];
      for (const S of s) {
        let g = -1, m = d ? 1 / 0 : -1;
        for (let x = 0; x < p.length; x++) {
          if (!this.isShapeCompatibleWithStock(S, n[x]))
            continue;
          const y = p[x].length > 0 ? S.l + i : S.l;
          w[x] >= y && (d ? w[x] < m && (g = x, m = w[x]) : w[x] > m && (g = x, m = w[x]));
        }
        if (g >= 0) {
          const x = p[g].length > 0 ? S.l + i : S.l;
          p[g].push(S), w[g] -= x;
        }
      }
      return p;
    }, a = o(!0), c = o(!1), l = a.reduce((d, p) => d + p.length, 0), u = c.reduce((d, p) => d + p.length, 0);
    let h = l >= u ? a : c, f = Math.max(l, u);
    if (f < s.length && s.length <= 30) {
      const d = this.exhaustiveBinPack1D(s, n, i);
      if (d) {
        const p = d.reduce((w, S) => w + S.length, 0);
        p > f && (h = d, f = p);
      }
    }
    return f === 0 ? null : h;
  }
  /**
   * Exhaustive backtracking bin packing for 1D shapes across N bins
   * Tries all assignments with pruning to find the maximum number of placed shapes
   * Only practical for small shape counts (≤30)
   */
  exhaustiveBinPack1D(t, n, i) {
    const r = n.map((I) => I.l), s = [...t].sort((I, C) => C.l - I.l), o = s.length, a = r.length, c = s.map((I) => n.map((C) => this.isShapeCompatibleWithStock(I, C))), l = s.map((I, C) => `${I.l}|${c[C].join("")}`);
    let u = null, h = 0;
    const f = r.map(() => []), d = [...r], p = 1e6, w = 500, S = Date.now();
    let g = 0, m = !1;
    const x = (I) => {
      const C = r[I], P = f[I].length;
      for (let E = 0; E < I; E++) {
        if (r[E] !== C || f[E].length !== P)
          continue;
        let M = !0;
        for (let X = 0; X < P; X++)
          if (f[E][X].l !== f[I][X].l) {
            M = !1;
            break;
          }
        if (M)
          return !0;
      }
      return !1;
    };
    let y = 0, v = !1;
    const b = (I, C) => {
      if (m)
        return;
      if (g++, g >= p || (g & 4095) === 0 && Date.now() - S > w) {
        m = !0;
        return;
      }
      if (C + (o - I) <= h)
        return;
      if (I === o) {
        C > h && (h = C, u = f.map((G) => [...G]));
        return;
      }
      const P = I > 0 && l[I] === l[I - 1], E = y, M = v;
      P || (y = 0, v = !1);
      const X = s[I];
      if (!v)
        for (let G = y; G < a && !m; G++) {
          if (!c[I][G] || x(G))
            continue;
          const T = f[G].length > 0 ? X.l + i : X.l;
          if (d[G] < T)
            continue;
          f[G].push(X), d[G] -= T;
          const $ = y;
          if (y = G, b(I + 1, C + 1), y = $, f[G].pop(), d[G] += T, h === o) {
            y = E, v = M;
            return;
          }
        }
      const O = v;
      v = !0, b(I + 1, C), v = O, y = E, v = M;
    };
    return b(0, 0), m && B("exhaustiveBinPack1D", `aborted after ${g} nodes / ${Date.now() - S}ms - returning best partial (${h}/${o} placed)`), u;
  }
  /**
   * Redistribute parts off "efficient" donor stocks onto "inefficient" recipient
   * stocks, dropping the donor if every shape moves successfully. Goal: reduce
   * board count. Opt-in via `config.secondRun.enable` (off by default).
   *
   * **Algorithm (per donor → recipient pairing):**
   *  1. Split usedStock into efficient (≥ cutoff && >1 shape) and inefficient.
   *  2. For each efficient donor, try recipients in order; for each, attempt
   *     to fit ALL donor shapes into the recipient's offcut tree.
   *  3. All-or-nothing: if every shape lands, mark donor `used = false`;
   *     otherwise revert and try the next recipient.
   *
   * **State invariant — important.** Modern placement leaves `stock.shapes` and
   * `stock.rootSegment` empty/null on `stockList` entries — these are
   * calculation-phase scratch fields the downstream cut generator
   * ({@link calculateStripCuts}) rebuilds on demand from `shape.stock` back-refs
   * ({@link getAddedShapes}). This function rehydrates both at entry so the
   * redistribution logic — which was written against the older always-populated
   * model — has real inputs. Without rehydration every donor looks empty,
   * the for-loop no-ops, and (worse) the post-loop "all placed" branch was
   * marking the donor unused, orphaning every shape whose back-ref still
   * pointed to it.
   *
   * **Guillotine-only.** Beam-cut layouts early-return; the offcut-tree
   * traversal at the heart of the redistribution loop is guillotine-specific.
   *
   * **Regression coverage:** {@link ../classes/secondRun-empty-donor.test.ts}
   * asserts both no-crash AND every placed shape's `.stock` is still `.used`.
   */
  async secondRun() {
    B("secondRun", "starting second run...");
    const t = this.stockList.filter((s) => s.used);
    if (t.filter((s) => s.stack?.number && !s.stack?.stock).forEach((s) => {
      t.filter((o) => o.stack?.stock && ie(o.stack.stock) && o.stack.stock.id === s.id).forEach((o) => {
        o.stack = null, o.rootSegment = s.rootSegment;
      }), s.stack = null;
    }), F("optimiser.second-run.eligible", t[0].cutType === "guillotine" || t[0].cutType === "beam", { cutType: t[0].cutType }), t[0].cutType !== "guillotine" && t[0].cutType !== "beam")
      return;
    for (const s of t) {
      const o = de(this.shapeList, s);
      if (s.shapes?.length || (s.shapes = o), !s.rootSegment && o.length)
        try {
          const a = Ut.call(this, {
            container: s,
            shapes: o,
            forceNoHeadCut: !1,
            final: !1
          });
          a?.rootSegment && (s.rootSegment = a.rootSegment);
        } catch (a) {
          B("secondRun", `failed to rebuild rootSegment for ${s.id}: ${a.message}`);
        }
    }
    z([
      () => A(t.length).equal(this.stockList.length),
      () => A(t.every((s) => s.score)).toBe(!0),
      () => A(t.every((s) => s.shapes?.length)).toBe(!0)
    ]), t.sort((s, o) => s.score.efficiency - o.score.efficiency), B("secondRun", `sorted stock, ${t.map((s) => s.id)}`);
    const i = [], r = [];
    for (const s of t)
      s.score.efficiency >= this.config.secondRun.efficiencyCutoff && s.score.totalShapesPlaced > 1 ? i.push(s) : r.push(s);
    if (!(!i.length || !r.length)) {
      i.sort((s, o) => o.score.efficiency - s.score.efficiency), r.sort((s, o) => o.score.efficiency - s.score.efficiency), B("secondRun", `sorted efficient stock, ${i.map((s) => s.id)}`), B("secondRun", `sorted inefficient stock, ${r.map((s) => s.id)}`);
      for (const s of i) {
        if (!r.length)
          break;
        if (!s.shapes?.length)
          continue;
        const o = [], a = /* @__PURE__ */ new Map(), c = (d) => a.set(d.id, { x: d.x, y: d.y, l: d.l, w: d.w, rot: d.rot });
        for (let d = 0; d < s.shapes.length; d++) {
          const p = s.shapes[d];
          if (!p)
            throw new Error("shape not found in donorStock.shapes");
          if (W(p)) {
            p.placeMyShapes(s), p.shapes = p.shapes.map((w) => Object.assign({}, w)), s.shapes.splice(d, 1, ...p.shapes), d--;
            continue;
          }
          if (V(p))
            c(p), p.reset(), o.push(p);
          else {
            const w = this.shapeList.find((S) => S.id === p.id);
            if (!w)
              throw new Error(`shape ${p.id} not found in shapeList`);
            c(p), w.reset(), o.push(w), s.shapes[d] = w;
          }
        }
        const l = /* @__PURE__ */ new Set();
        let u, h, f = null;
        for (; o.length > 0 && (u = r.find((C) => !C || l.has(C?.id) ? !1 : o.every((P) => this.isShapeCompatibleWithStock(P, C))), !!u); ) {
          B("secondRun", `recipientStock - ${u.id}`), l.add(u.id);
          const d = He.getCalculationType(s);
          if (!d)
            throw new Error(`calculation type not found for stock ${s.id}`);
          const p = u.cutPreference === "l" ? "x" : "y";
          let w = [];
          if (h = u.rootSegment, B("secondRun", `second run, donor stock ${s.id}, recipient stock ${u.id}`), f) {
            f.shapes.forEach((P, E) => {
              if (!V(P)) {
                const M = this.shapeList.find((X) => X.id === P.id);
                f.shapes[E] = M;
              }
            }), u.shapes.forEach((P, E) => {
              if (!V(P)) {
                const M = this.shapeList.find((X) => X.id === P.id);
                u.shapes[E] = M;
              }
            });
            let C = !1;
            if (this.config.secondRun.stack && (C = js.call(this, u, f, [...o, ...u.shapes], this.shapeList)), C) {
              u.stack = { stock: f }, f.stack ? f.stack?.number && f.incrementStack() : f.stack = { number: 2 }, u.shapes.forEach((E) => {
                const M = o.findIndex((X) => X.id === E.id);
                M > -1 && (o.splice(M, 1), s.shapes.splice(s.shapes.findIndex((X) => X.id === E.id), 1));
              });
              const P = r.findIndex((E) => E.id === u.id);
              P > -1 && r.splice(P, 1), B("secondRun", `stack found for ${u.id} in second run`), kt(u.shapes);
              continue;
            }
          }
          if (!h)
            throw new Error("no root segment found in second run");
          if (ks(h, (C) => {
            if (C.offcut)
              return C[p] === 0 && (C.cutDirection = u.cutPreference, C.phase = 1), C.addToStock(u), w.push(C), !1;
          }), !w.length || (w = mn(w), !w.length))
            continue;
          const S = u.cutType === "beam", g = S ? [...u.shapes] : null, m = /* @__PURE__ */ new Map();
          if (g)
            for (const C of g)
              V(C) && m.set(C.id, { x: C.x, y: C.y, l: C.l, w: C.w, rot: C.rot });
          await He[d].call(this, { secondRun: !0 }, u, o, w);
          const x = S ? this.isBeamLayoutValid(u) : !0;
          if (S && F("optimiser.second-run.beam-recipient-valid", x, { recipient: u.id }), S && g && !x) {
            for (const C of g) {
              if (!V(C))
                continue;
              const P = m.get(C.id);
              C.reset(), P && (C.update({ x: P.x, y: P.y, l: P.l, w: P.w, rot: P.rot }), C.addToStock(u));
            }
            for (const C of o)
              C.added && C.stock?.autoId === u.autoId && C.reset();
            u.shapes = g, B("secondRun", `beam recipient ${u.id} invalid after rebalance — restored original layout, trying next recipient`);
            continue;
          }
          const y = o.length;
          for (let C = o.length; C--; )
            o[C].added && o.splice(C, 1);
          const v = o.length, b = y - v;
          if (B("info", `second run, added ${b}`), f = u, y - v === 0)
            continue;
          const I = r.findIndex((C) => C.id === u.id);
          I > -1 && r.splice(I, 1), kt(u.shapes);
        }
        if (!o.length || o.every((d) => d.added))
          s.used = !1, s.shapes = [];
        else {
          B("info", `second run, not all shapes moved, reverting ${s.shapes.length} shapes`);
          for (const d of s.shapes) {
            const p = this.shapeList.find((S) => S.id === d.id);
            if (!p)
              throw new Error("original shape not found in second run");
            const w = a.get(d.id);
            if (!w)
              throw new Error(`no donor snapshot for shape ${d.id} in second run`);
            p.reset(), p.update({ x: w.x, y: w.y, l: w.l, w: w.w, rot: w.rot }), p.addToStock(s), z([
              () => A(p.added).toBe(!0),
              () => A(p.stock?.id).toBe(s.id),
              () => A(p.x).toBe(w.x),
              () => A(p.y).toBe(w.y)
            ]);
          }
        }
      }
    }
  }
  /**
   * Geometric validity of a (beam) stock's current placement: every added
   * shape is within the usable board area and no two overlap. Used by
   * secondRun to reject a beam rebalance whose offcut re-pack produced an
   * overlapping / out-of-bounds layout (the offcut handling isn't yet
   * beam-phase-aware). Mirrors refineUnplacedShapes' bounds + rect convention.
   */
  isBeamLayoutValid(t) {
    const n = this.shapeList.filter((u) => u.added && V(u) && u.stock?.autoId === t.autoId);
    if (n.length < 1)
      return !0;
    const i = t.trim || {}, r = i.x1 ?? 0, s = i.y1 ?? 0, o = t.l - (i.x2 ?? 0), a = t.w - (i.y2 ?? 0), c = 0.5;
    for (const u of n)
      if (u.x < r - c || u.y < s - c || u.x + u.l > o + c || u.y + u.w > a + c)
        return !1;
    const l = n.map((u) => ({ x: u.x, y: u.y, l: u.l, w: u.w }));
    for (let u = 0; u < l.length; u++)
      for (let h = u + 1; h < l.length; h++)
        if (Un(l[u], l[h]))
          return !1;
    return !0;
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
  resetShapes(t, { keepScores: n = !1, removeGroups: i = !0, removeUnplacedGroups: r = !1, keepGuillotineData: s = !0, keepFirstShapeSampleRotations: o = !1 } = {}) {
    if (t?.length)
      if (r) {
        const a = /* @__PURE__ */ new Set();
        for (const l of t)
          if (W(l) && l.added && l.shapes?.length)
            for (const u of l.shapes)
              a.add(u.autoId);
        const c = t.length;
        for (let l = c; l--; ) {
          const u = t[l];
          if (le(u)) {
            u.added || t.splice(l, 1);
            continue;
          }
          if (W(u)) {
            if (u.shapes?.length)
              for (const h of u.shapes)
                h.reset({
                  keepScores: n,
                  keepGuillotineBatchData: s,
                  keepGroupData: !1,
                  keepFirstShapeSampleRotations: o
                });
            u.added || t.splice(l, 1);
          } else
            a.has(u.autoId) ? t.splice(l, 1) : u.reset({
              keepScores: n,
              keepGuillotineBatchData: s,
              keepGroupData: !1,
              keepFirstShapeSampleRotations: o
            });
        }
      } else {
        const a = t.length;
        for (let c = a; c--; ) {
          const l = t[c];
          if (le(l)) {
            l.added = !1;
            continue;
          }
          if (W(l)) {
            if (l.shapes?.length)
              for (const u of l.shapes)
                u.reset({
                  keepScores: n,
                  keepGuillotineBatchData: s,
                  keepGroupData: !1,
                  keepFirstShapeSampleRotations: o
                });
            i ? t.splice(c, 1) : l.added = !1;
          } else
            l.reset({
              keepScores: n,
              keepGuillotineBatchData: s,
              keepGroupData: !1,
              keepFirstShapeSampleRotations: o
            });
        }
      }
  }
  /**
   * summarise the results for the console
   */
  summariseResults(t, n) {
  }
}
function $c() {
  Y("Issue", dt), Y("Line", xt), Y(ee.Line, xt), Y("Point", pn), Y(ee.Point, pn), Y("Rectangle", _n), Y(ee.Rectangle, _n), Y("Container", ln), Y(ee.Container, ln), Y("GuillotineState", Gt), Y(ee.GuillotineState, Gt), Y("Placeable", Kn), Y(ee.Placeable, Kn), Y("Group", hn), Y(ee.Group, hn), Y("Offcut", Qn), Y(ee.Offcut, Qn), Y("Segment", Re), Y(ee.Segment, Re), Y("Shape", cn), Y(ee.Shape, cn), Y("Stock", gn), Y(ee.Stock, gn), Y("Banding", ei), Y("banding", ei), Y("Corner", ti), Y("corner", ti), Y("Cut", Xt), Y(ee.Cut, Xt), Y("Extras", ni), Y(ee.Extras, ni), Y("Finish", ii), Y("finish", ii), Y("Groove", si), Y("groove", si), Y("HingeHole", oi), Y("hingeHole", oi), Y("Hole", ri), Y("hole", ri), Y("ImageUpload", Si), Y("imageUpload", Si), Y("InputSaw", ai), Y(ee.InputSaw, ai), Y("InputShape", li), Y(ee.InputShape, li), Y("InputStock", ci), Y(ee.InputStock, ci), Y("InputUserGroup", ui), Y(ee.InputUserGroup, ui), Y("Machining", fi), Y(ee.Machining, fi), Y("NestingShape", Ht), Y(ee.NestingShape, Ht), Y("Optimiser", ji), Y(ee.Optimiser, ji), Y("Planing", hi), Y("planing", hi), Y("PointCollection", Sn), Y(ee.PointCollection, Sn), Y("Saw", Wt), Y(ee.Saw, Wt);
}
export {
  $c as initializeStaticRegistry
};

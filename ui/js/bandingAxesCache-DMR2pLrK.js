function f(e, t, n) {
  return `${e}|${t ?? ""}|${n ?? ""}`;
}
function h(e, t) {
  const n = {};
  return typeof e == "number" && Number.isFinite(e) && e > 0 && (n.thickness = e), typeof t == "number" && Number.isFinite(t) && t > 0 && (n.maxGap = t), n;
}
async function p(e, t, n, r, l) {
  const o = Date.now(), c = e.get(r);
  if (c && c.expiresAt > o) return c.promise;
  const i = t.get(n, { params: l }).then((a) => a.data).catch((a) => {
    throw e.delete(r), a;
  });
  return e.set(r, { promise: i, expiresAt: o + 3e5 }), i;
}
function s(e, t) {
  {
    e.clear();
    return;
  }
}
const u = /* @__PURE__ */ new Map();
async function b(e, t, n, r) {
  return p(u, e, `/extras/${t}/levels`, f(t, n, r), h(n, r));
}
function w(e) {
  s(u);
}
const C = /* @__PURE__ */ new Map();
function L(e) {
  s(C);
}
export {
  w as a,
  L as c,
  b as f
};

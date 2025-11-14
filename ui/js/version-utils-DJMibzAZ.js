function a(e) {
  if (!e) return null;
  const r = e.split(".").map(Number);
  return r.length < 3 || r.some(isNaN) ? null : {
    major: r[0],
    minor: r[1],
    patch: r[2]
  };
}
function p(e, r, t, c, l, v = []) {
  const s = l.get(t), k = !s;
  if (s !== e && (l.set(t, e), console.log(s ? `[Version] Version ${e} (from ${s})` : `[Version] Version ${e} (first run)`)), k)
    return !1;
  const f = a(e), i = a(r), m = l.get(c), u = m ? a(m) : null;
  if (!f || !i)
    return console.warn("[Version] Invalid version format, skipping storage clear"), !1;
  const g = (n, o) => !n || !o ? !1 : n.major > o.major || n.major === o.major && n.minor > o.minor || n.major === o.major && n.minor === o.minor && n.patch > o.patch;
  if (!g(f, i) || u && g(u, i))
    return !1;
  console.log(`[Version] Clearing storage (crossed threshold ${r}, now at ${e})`);
  const h = [...v, c, t], j = /* @__PURE__ */ new Map();
  for (const n of h) {
    const o = l.get(n);
    o !== null && j.set(n, o);
  }
  if (l.clear)
    l.clear();
  else if (l.getAllKeys) {
    const n = l.getAllKeys();
    for (const o of n)
      h.includes(o) || l.remove(o);
  } else
    return console.warn("[Version] Storage adapter missing clear() or getAllKeys() - cannot clear storage"), !1;
  for (const [n, o] of j)
    l.set(n, o);
  return l.set(c, e), !0;
}
function $() {
  return {
    get: (e) => localStorage.getItem(e),
    set: (e, r) => localStorage.setItem(e, r),
    remove: (e) => localStorage.removeItem(e),
    clear: () => localStorage.clear()
  };
}
export {
  p as clearStorageOnceAboveThreshold,
  $ as createLocalStorageAdapter,
  a as parseVersion
};

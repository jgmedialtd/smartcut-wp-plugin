function t(a) {
  if (!a) return null;
  const n = a.split(".").map(Number);
  return n.length < 3 || n.some(isNaN) ? null : {
    major: n[0],
    minor: n[1],
    patch: n[2]
  };
}
function e(a, n) {
  const r = t(a), o = t(n);
  return !r || !o ? null : {
    majorChanged: r.major !== o.major,
    minorChanged: r.minor !== o.minor,
    patchChanged: r.patch !== o.patch,
    isNewer: r.major > o.major || r.major === o.major && r.minor > o.minor || r.major === o.major && r.minor === o.minor && r.patch > o.patch
  };
}
function m(a, n) {
  if (!n) return !1;
  const r = e(a, n);
  return r ? r.majorChanged : !1;
}
export {
  e as compareVersions,
  t as parseVersion,
  m as shouldClearStorage
};

import { a as i } from "./environment-BeBZzWz6.js";
import { i as f } from "./vendor-i18next-BVRe4kPe.js";
function r(e) {
  return !(!e || typeof e != "string");
}
function p(e) {
  return !r(e) || !e || typeof e != "string" ? "" : e.toUpperCase();
}
function s(e) {
  return !r(e) || !e || typeof e != "string" ? "" : e?.toLowerCase();
}
function l(e) {
  return r(e) ? e.trim().split(" ").map((t) => a(t)).join(" ") : "";
}
function a(e) {
  return r(e) ? e.trim().charAt(0).toUpperCase() + e.slice(1) : "";
}
function m(e) {
  return r(e) ? (e = e.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z\u00C0-\u024F0-9._\-|\s]/g, ""), e.trim()) : "";
}
function C(e) {
  return r(e) ? (e = e.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^ a-z0-9._\-|]/gim, ""), e.trim()) : "";
}
function z(e, t = 100) {
  return r(e) ? (e = e.trim(), e = e.substring(0, t), e) : "";
}
let u = f;
function S(e) {
  u = e;
}
function A(e, t) {
  if (i() || !u.isInitialized)
    return e;
  const n = u.t(e, { ...t });
  return !n || n === e ? e : a(n);
}
export {
  S as a,
  z as b,
  l as c,
  C as d,
  m as e,
  s as l,
  a as s,
  A as t,
  p as u
};

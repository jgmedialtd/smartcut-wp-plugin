function t() {
  if (typeof process < "u" && process?.env)
    return !1;
  if (typeof globalVariables < "u" && typeof globalVariables.isDevelopment == "boolean")
    return globalVariables.isDevelopment;
  if (typeof window < "u") {
    const e = window.location?.hostname || "";
    if (e === "localhost" || e === "127.0.0.1" || e.includes(".local"))
      return !0;
    const n = new URLSearchParams(window.location?.search || "");
    if (n.get("dev") === "true" || n.get("debug") === "true")
      return !0;
  }
  return !1;
}
function o() {
  if (typeof process < "u" && process?.env)
    return process.env?.VITEST === "true" || !!process.env?.VITEST;
  if (typeof globalVariables < "u")
    return globalVariables.isTest === !0 || globalVariables.NODE_ENV === "test" || globalVariables.VITEST === !0;
  if (typeof window < "u") {
    const e = new URLSearchParams(window.location?.search || "");
    return e.get("test") === "true" || e.get("vitest") === "true" || window.location?.hostname.includes("test") || // Check for test runner globals
    typeof window.vitest < "u" || typeof window.jest < "u";
  }
  return !1;
}
function i() {
  return typeof globalVariables < "u" || typeof globalThis.__runtimeVersion < "u" || typeof window < "u" && typeof window.__runtimeVersion < "u";
}
export {
  o as a,
  i as b,
  t as i
};

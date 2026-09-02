import { a as m } from "./environment-BCYVY3oS.js";
import { i as j, B as u } from "./vendor-i18next-BVRe4kPe.js";
import { s as p, c as d, a as f } from "./i18n-_RhbYOEZ.js";
const g = (n, t, r) => {
  const i = n[t];
  return i ? typeof i == "function" ? i() : Promise.resolve(i) : new Promise((e, c) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(c.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + t + (t.split("/").length !== r ? ". Note that variables only represent file names one level deep." : ""))));
  });
}, h = /* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-JOEREN5I.js"), "../translation/cs.json": () => import("./cs-DCREQd-A.js"), "../translation/da.json": () => import("./da-D1F0nVAa.js"), "../translation/de.json": () => import("./de-Bt8N0gD8.js"), "../translation/el.json": () => import("./el-CB9vpxKu.js"), "../translation/en.json": () => import("./en-BVePuHjO.js"), "../translation/es.json": () => import("./es-BO4jVRWW.js"), "../translation/fi.json": () => import("./fi-B55JKVOu.js"), "../translation/fr.json": () => import("./fr-BRFThWPh.js"), "../translation/hi.json": () => import("./hi-CQDcdp23.js"), "../translation/hr.json": () => import("./hr-CFP801xW.js"), "../translation/hu.json": () => import("./hu-jkvr03u4.js"), "../translation/id.json": () => import("./id-Cga5SdkR.js"), "../translation/it.json": () => import("./it-DGKle_so.js"), "../translation/ja.json": () => import("./ja-DFJbd4FD.js"), "../translation/ko.json": () => import("./ko-BjGi1nIY.js"), "../translation/ms.json": () => import("./ms-BYz34wmR.js"), "../translation/nl.json": () => import("./nl-D2wyWaUm.js"), "../translation/no.json": () => import("./no-CFoONcK9.js"), "../translation/pl.json": () => import("./pl-cn0l8BjZ.js"), "../translation/pt.json": () => import("./pt-DhvPaWB9.js"), "../translation/ro.json": () => import("./ro-C3QMt8Tb.js"), "../translation/ru.json": () => import("./ru-C1-D3cUC.js"), "../translation/sk.json": () => import("./sk-FD3fElXb.js"), "../translation/sv.json": () => import("./sv-C5nZHm6l.js"), "../translation/th.json": () => import("./th-CUnolE7b.js"), "../translation/tr.json": () => import("./tr-C9rdfVCi.js"), "../translation/uk.json": () => import("./uk-BIZ9h-5_.js"), "../translation/vi.json": () => import("./vi-CjegF0Kj.js"), "../translation/zh.json": () => import("./zh-uJop9INq.js") }), a = Object.keys(h).map((n) => {
  const t = n.match(/\/([a-zA-Z0-9_-]+)\.json$/);
  return t ? t[1] : "";
}).filter((n) => n !== "");
a.length === 0 && console.warn("[i18n] No language files found in ../translation/. Check paths and bundler setup for import.meta.glob.");
const l = "en", o = j.createInstance();
function y(n, t) {
  if (m())
    return n;
  if (!o.isInitialized) {
    const i = Array.isArray(n) ? n.join(", ") : String(n);
    return console.warn(`[i18n] t function called before i18next was initialized. Key: ${i}. Returning key.`), i;
  }
  let r = o.t(n, t);
  return r = typeof r == "string" ? r : String(r), p(r);
}
function A(n, t) {
  return m() ? `${n} ${Object.values(t).join(" ")}`.trim() : y(n, { ...t, interpolation: { escapeValue: !1 } });
}
const s = {}, I = {
  type: "backend",
  init: () => {
  },
  // The `namespace` parameter will now be ignored by your backend logic
  read: async (n, t, r) => {
    try {
      if (s[n]) {
        r(null, s[n]);
        return;
      }
      const i = await g(/* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-JOEREN5I.js"), "../translation/cs.json": () => import("./cs-DCREQd-A.js"), "../translation/da.json": () => import("./da-D1F0nVAa.js"), "../translation/de.json": () => import("./de-Bt8N0gD8.js"), "../translation/el.json": () => import("./el-CB9vpxKu.js"), "../translation/en.json": () => import("./en-BVePuHjO.js"), "../translation/es.json": () => import("./es-BO4jVRWW.js"), "../translation/fi.json": () => import("./fi-B55JKVOu.js"), "../translation/fr.json": () => import("./fr-BRFThWPh.js"), "../translation/hi.json": () => import("./hi-CQDcdp23.js"), "../translation/hr.json": () => import("./hr-CFP801xW.js"), "../translation/hu.json": () => import("./hu-jkvr03u4.js"), "../translation/id.json": () => import("./id-Cga5SdkR.js"), "../translation/it.json": () => import("./it-DGKle_so.js"), "../translation/ja.json": () => import("./ja-DFJbd4FD.js"), "../translation/ko.json": () => import("./ko-BjGi1nIY.js"), "../translation/ms.json": () => import("./ms-BYz34wmR.js"), "../translation/nl.json": () => import("./nl-D2wyWaUm.js"), "../translation/no.json": () => import("./no-CFoONcK9.js"), "../translation/pl.json": () => import("./pl-cn0l8BjZ.js"), "../translation/pt.json": () => import("./pt-DhvPaWB9.js"), "../translation/ro.json": () => import("./ro-C3QMt8Tb.js"), "../translation/ru.json": () => import("./ru-C1-D3cUC.js"), "../translation/sk.json": () => import("./sk-FD3fElXb.js"), "../translation/sv.json": () => import("./sv-C5nZHm6l.js"), "../translation/th.json": () => import("./th-CUnolE7b.js"), "../translation/tr.json": () => import("./tr-C9rdfVCi.js"), "../translation/uk.json": () => import("./uk-BIZ9h-5_.js"), "../translation/vi.json": () => import("./vi-CjegF0Kj.js"), "../translation/zh.json": () => import("./zh-uJop9INq.js") }), `../translation/${n}.json`, 3);
      s[n] = i.default, r(null, s[n]);
    } catch (i) {
      const e = `[i18n] Failed to load local resource module for language '${n}'. Error: ${i.message}`;
      console.warn(e, i), r(i, null);
    }
  }
};
async function w() {
  f(o);
  const n = console.info;
  return console.info = (...t) => {
    typeof t[0] == "string" && t[0].includes("locize.com") || n(...t);
  }, await o.use(u).use(I).init({
    debug: !1,
    fallbackLng: l,
    supportedLngs: a.length > 0 ? a : [l],
    detection: {
      // Path first for URL-based language routing (e.g., /de/plans)
      order: ["path", "querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"],
      lookupFromPathIndex: 0
      // Look at first path segment for language
    }
  }), o.services.formatter?.add("c", (t) => d(t)), o.services.formatter?.add("sc", (t) => p(t)), console.info = n, o;
}
const v = w().catch((n) => {
  console.error("[i18n] CRITICAL: Initialization failed.", n);
});
function L() {
  return o.isInitialized;
}
const S = async (n) => {
  if (a.length > 0 && !a.includes(n))
    return console.warn(`[i18n] Attempted to change to unsupported language: ${n}. Current: ${o.language}`), o.language;
  o.isInitialized || (console.warn("[i18n] changeLanguage called before initialization. Awaiting i18nextReady."), await v);
  try {
    return await o.changeLanguage(n), o.language;
  } catch (t) {
    return console.error(`[i18n] Failed to change language to ${n}:`, t), o.language;
  }
};
export {
  l as FALLBACK_LANGUAGE,
  a as SUPPORTED_LANGUAGES,
  S as changeLanguage,
  o as i18nextInstance,
  v as i18nextReady,
  L as isI18nInitialized,
  y as t,
  A as tData
};

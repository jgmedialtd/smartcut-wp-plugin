import { a as c } from "./environment-BeBZzWz6.js";
import { i as j, B as u } from "./vendor-i18next-DIDhOEvY.js";
import { s as m, c as d, b as f } from "./i18n-B1ErfgJE.js";
const g = (n, t, r) => {
  const i = n[t];
  return i ? typeof i == "function" ? i() : Promise.resolve(i) : new Promise((e, p) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(p.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + t + (t.split("/").length !== r ? ". Note that variables only represent file names one level deep." : ""))));
  });
}, h = /* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-zftWsaB8.js"), "../translation/cs.json": () => import("./cs-D8a6pSDT.js"), "../translation/da.json": () => import("./da-BOpeCEPn.js"), "../translation/de.json": () => import("./de-DLgluaau.js"), "../translation/el.json": () => import("./el-tYZB7VVs.js"), "../translation/en.json": () => import("./en-DxPQck8d.js"), "../translation/es.json": () => import("./es-SnsAWAO4.js"), "../translation/fi.json": () => import("./fi-aDm6J4Ct.js"), "../translation/fr.json": () => import("./fr-IMoaani7.js"), "../translation/hi.json": () => import("./hi-BZBxDLHH.js"), "../translation/hr.json": () => import("./hr-DLGbAoHQ.js"), "../translation/hu.json": () => import("./hu-0yJPou48.js"), "../translation/id.json": () => import("./id-B7ml2oYS.js"), "../translation/it.json": () => import("./it-FQXWbAtq.js"), "../translation/ja.json": () => import("./ja-Duc2hLsS.js"), "../translation/ko.json": () => import("./ko-B98DnTow.js"), "../translation/ms.json": () => import("./ms-CPl8Jkfb.js"), "../translation/nl.json": () => import("./nl-5LX2zCY1.js"), "../translation/no.json": () => import("./no-CXjhm1vE.js"), "../translation/pl.json": () => import("./pl-COcqTwcx.js"), "../translation/pt.json": () => import("./pt-DXorKBG-.js"), "../translation/ro.json": () => import("./ro-BPFCqzA7.js"), "../translation/ru.json": () => import("./ru-ZuhNqxDb.js"), "../translation/sk.json": () => import("./sk-DhygRwzk.js"), "../translation/sv.json": () => import("./sv-DYNZjsty.js"), "../translation/th.json": () => import("./th-BySxcb7m.js"), "../translation/tr.json": () => import("./tr-CrD-B_V7.js"), "../translation/uk.json": () => import("./uk-C1WwhKrC.js"), "../translation/vi.json": () => import("./vi-CyEBLEpG.js"), "../translation/zh.json": () => import("./zh-Br6PooTA.js") }), a = Object.keys(h).map((n) => {
  const t = n.match(/\/([a-zA-Z0-9_-]+)\.json$/);
  return t ? t[1] : "";
}).filter((n) => n !== "");
a.length === 0 && console.warn("[i18n] No language files found in ../translation/. Check paths and bundler setup for import.meta.glob.");
const l = "en", o = j.createInstance();
function z(n, t) {
  if (c())
    return n;
  if (!o.isInitialized) {
    const i = Array.isArray(n) ? n.join(", ") : String(n);
    return console.warn(`[i18n] t function called before i18next was initialized. Key: ${i}. Returning key.`), i;
  }
  let r = o.t(n, t);
  return r = typeof r == "string" ? r : String(r), m(r);
}
const s = {}, y = {
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
      const i = await g(/* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-zftWsaB8.js"), "../translation/cs.json": () => import("./cs-D8a6pSDT.js"), "../translation/da.json": () => import("./da-BOpeCEPn.js"), "../translation/de.json": () => import("./de-DLgluaau.js"), "../translation/el.json": () => import("./el-tYZB7VVs.js"), "../translation/en.json": () => import("./en-DxPQck8d.js"), "../translation/es.json": () => import("./es-SnsAWAO4.js"), "../translation/fi.json": () => import("./fi-aDm6J4Ct.js"), "../translation/fr.json": () => import("./fr-IMoaani7.js"), "../translation/hi.json": () => import("./hi-BZBxDLHH.js"), "../translation/hr.json": () => import("./hr-DLGbAoHQ.js"), "../translation/hu.json": () => import("./hu-0yJPou48.js"), "../translation/id.json": () => import("./id-B7ml2oYS.js"), "../translation/it.json": () => import("./it-FQXWbAtq.js"), "../translation/ja.json": () => import("./ja-Duc2hLsS.js"), "../translation/ko.json": () => import("./ko-B98DnTow.js"), "../translation/ms.json": () => import("./ms-CPl8Jkfb.js"), "../translation/nl.json": () => import("./nl-5LX2zCY1.js"), "../translation/no.json": () => import("./no-CXjhm1vE.js"), "../translation/pl.json": () => import("./pl-COcqTwcx.js"), "../translation/pt.json": () => import("./pt-DXorKBG-.js"), "../translation/ro.json": () => import("./ro-BPFCqzA7.js"), "../translation/ru.json": () => import("./ru-ZuhNqxDb.js"), "../translation/sk.json": () => import("./sk-DhygRwzk.js"), "../translation/sv.json": () => import("./sv-DYNZjsty.js"), "../translation/th.json": () => import("./th-BySxcb7m.js"), "../translation/tr.json": () => import("./tr-CrD-B_V7.js"), "../translation/uk.json": () => import("./uk-C1WwhKrC.js"), "../translation/vi.json": () => import("./vi-CyEBLEpG.js"), "../translation/zh.json": () => import("./zh-Br6PooTA.js") }), `../translation/${n}.json`, 3);
      s[n] = i.default, r(null, s[n]);
    } catch (i) {
      const e = `[i18n] Failed to load local resource module for language '${n}'. Error: ${i.message}`;
      console.warn(e, i), r(i, null);
    }
  }
};
async function I() {
  f(o);
  const n = console.info;
  return console.info = (...t) => {
    typeof t[0] == "string" && t[0].includes("locize.com") || n(...t);
  }, await o.use(u).use(y).init({
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
  }), o.services.formatter?.add("c", (t) => d(t)), o.services.formatter?.add("sc", (t) => m(t)), console.info = n, o;
}
const w = I().catch((n) => {
  console.error("[i18n] CRITICAL: Initialization failed.", n);
});
function A() {
  return o.isInitialized;
}
const L = async (n) => {
  if (a.length > 0 && !a.includes(n))
    return console.warn(`[i18n] Attempted to change to unsupported language: ${n}. Current: ${o.language}`), o.language;
  o.isInitialized || (console.warn("[i18n] changeLanguage called before initialization. Awaiting i18nextReady."), await w);
  try {
    return await o.changeLanguage(n), o.language;
  } catch (t) {
    return console.error(`[i18n] Failed to change language to ${n}:`, t), o.language;
  }
};
export {
  l as FALLBACK_LANGUAGE,
  a as SUPPORTED_LANGUAGES,
  L as changeLanguage,
  o as i18nextInstance,
  w as i18nextReady,
  A as isI18nInitialized,
  z as t
};

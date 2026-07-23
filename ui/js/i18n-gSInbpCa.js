import { a as c } from "./environment-BeBZzWz6.js";
import { i as j, B as u } from "./vendor-i18next-BVRe4kPe.js";
import { s as m, c as d, a as f } from "./i18n-D1euh3nS.js";
const g = (n, t, r) => {
  const i = n[t];
  return i ? typeof i == "function" ? i() : Promise.resolve(i) : new Promise((e, p) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(p.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + t + (t.split("/").length !== r ? ". Note that variables only represent file names one level deep." : ""))));
  });
}, h = /* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-C3fRZ8WV.js"), "../translation/cs.json": () => import("./cs-DQF9l947.js"), "../translation/da.json": () => import("./da-CSrv9w3K.js"), "../translation/de.json": () => import("./de-C0B1TkqF.js"), "../translation/el.json": () => import("./el-7Ow8TiXN.js"), "../translation/en.json": () => import("./en-D1EzcJOl.js"), "../translation/es.json": () => import("./es-BLp6HItK.js"), "../translation/fi.json": () => import("./fi-DcMe-acw.js"), "../translation/fr.json": () => import("./fr-D8hkyWxv.js"), "../translation/hi.json": () => import("./hi-BRz_UTlU.js"), "../translation/hr.json": () => import("./hr-GfWrNIOT.js"), "../translation/hu.json": () => import("./hu-DrK6kbD_.js"), "../translation/id.json": () => import("./id-By16xN5C.js"), "../translation/it.json": () => import("./it-BCXUF-Gs.js"), "../translation/ja.json": () => import("./ja-jO6Kx1ih.js"), "../translation/ko.json": () => import("./ko-BxqZNsLi.js"), "../translation/ms.json": () => import("./ms-eQ_Kos30.js"), "../translation/nl.json": () => import("./nl-BtXxdvXA.js"), "../translation/no.json": () => import("./no-eq-KF6fs.js"), "../translation/pl.json": () => import("./pl-CkWA9Ckz.js"), "../translation/pt.json": () => import("./pt-CtqQMCBq.js"), "../translation/ro.json": () => import("./ro-se2nZxGw.js"), "../translation/ru.json": () => import("./ru-C0lIjY7u.js"), "../translation/sk.json": () => import("./sk-BeSWQqIF.js"), "../translation/sv.json": () => import("./sv-DyeDEu2g.js"), "../translation/th.json": () => import("./th-CndikAtL.js"), "../translation/tr.json": () => import("./tr-COehRApg.js"), "../translation/uk.json": () => import("./uk-DGo5E5mr.js"), "../translation/vi.json": () => import("./vi-BMXOlpSu.js"), "../translation/zh.json": () => import("./zh-BCeBxn4G.js") }), a = Object.keys(h).map((n) => {
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
      const i = await g(/* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-C3fRZ8WV.js"), "../translation/cs.json": () => import("./cs-DQF9l947.js"), "../translation/da.json": () => import("./da-CSrv9w3K.js"), "../translation/de.json": () => import("./de-C0B1TkqF.js"), "../translation/el.json": () => import("./el-7Ow8TiXN.js"), "../translation/en.json": () => import("./en-D1EzcJOl.js"), "../translation/es.json": () => import("./es-BLp6HItK.js"), "../translation/fi.json": () => import("./fi-DcMe-acw.js"), "../translation/fr.json": () => import("./fr-D8hkyWxv.js"), "../translation/hi.json": () => import("./hi-BRz_UTlU.js"), "../translation/hr.json": () => import("./hr-GfWrNIOT.js"), "../translation/hu.json": () => import("./hu-DrK6kbD_.js"), "../translation/id.json": () => import("./id-By16xN5C.js"), "../translation/it.json": () => import("./it-BCXUF-Gs.js"), "../translation/ja.json": () => import("./ja-jO6Kx1ih.js"), "../translation/ko.json": () => import("./ko-BxqZNsLi.js"), "../translation/ms.json": () => import("./ms-eQ_Kos30.js"), "../translation/nl.json": () => import("./nl-BtXxdvXA.js"), "../translation/no.json": () => import("./no-eq-KF6fs.js"), "../translation/pl.json": () => import("./pl-CkWA9Ckz.js"), "../translation/pt.json": () => import("./pt-CtqQMCBq.js"), "../translation/ro.json": () => import("./ro-se2nZxGw.js"), "../translation/ru.json": () => import("./ru-C0lIjY7u.js"), "../translation/sk.json": () => import("./sk-BeSWQqIF.js"), "../translation/sv.json": () => import("./sv-DyeDEu2g.js"), "../translation/th.json": () => import("./th-CndikAtL.js"), "../translation/tr.json": () => import("./tr-COehRApg.js"), "../translation/uk.json": () => import("./uk-DGo5E5mr.js"), "../translation/vi.json": () => import("./vi-BMXOlpSu.js"), "../translation/zh.json": () => import("./zh-BCeBxn4G.js") }), `../translation/${n}.json`, 3);
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

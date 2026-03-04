import { a as c } from "./environment-BeBZzWz6.js";
import { i as j, B as u } from "./vendor-i18next-2OYl82kj.js";
import { s as m, c as d, a as g } from "./i18n-DT7wACvc.js";
const f = (n, t, r) => {
  const o = n[t];
  return o ? typeof o == "function" ? o() : Promise.resolve(o) : new Promise((e, p) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(p.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + t + (t.split("/").length !== r ? ". Note that variables only represent file names one level deep." : ""))));
  });
}, h = /* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-zhH28JpD.js"), "../translation/cs.json": () => import("./cs-CP0wPzyN.js"), "../translation/da.json": () => import("./da-BQCQ-7ua.js"), "../translation/de.json": () => import("./de-H0YKpC2a.js"), "../translation/el.json": () => import("./el-DdhnXsAE.js"), "../translation/en.json": () => import("./en-DjtmW68y.js"), "../translation/es.json": () => import("./es-CjU-za1w.js"), "../translation/fi.json": () => import("./fi-CYRcg1_F.js"), "../translation/fr.json": () => import("./fr-DZJIQ9iy.js"), "../translation/hi.json": () => import("./hi-BiE5OvdL.js"), "../translation/hr.json": () => import("./hr-BdqwlHFo.js"), "../translation/hu.json": () => import("./hu-CUqkSk-h.js"), "../translation/id.json": () => import("./id-C7WZRnVO.js"), "../translation/it.json": () => import("./it-BMsi2irc.js"), "../translation/ja.json": () => import("./ja-BcIFOLZq.js"), "../translation/ko.json": () => import("./ko-D9Zng3zA.js"), "../translation/ms.json": () => import("./ms-sS2gxUAZ.js"), "../translation/nl.json": () => import("./nl-B32fDyGC.js"), "../translation/no.json": () => import("./no-DP7gL-Ze.js"), "../translation/pl.json": () => import("./pl-Eevw-6cL.js"), "../translation/pt.json": () => import("./pt-Dfhml-Z7.js"), "../translation/ro.json": () => import("./ro-DysnOeoG.js"), "../translation/ru.json": () => import("./ru-BrTmYkEB.js"), "../translation/sk.json": () => import("./sk-4FP_MY6E.js"), "../translation/sv.json": () => import("./sv-D35O8fTe.js"), "../translation/th.json": () => import("./th-DOwRhTRY.js"), "../translation/tr.json": () => import("./tr-B865MXcn.js"), "../translation/uk.json": () => import("./uk-Cr8E3_LL.js"), "../translation/vi.json": () => import("./vi-BpjQevj7.js"), "../translation/zh.json": () => import("./zh-BBqrRTOS.js") }), a = Object.keys(h).map((n) => {
  const t = n.match(/\/([a-zA-Z0-9_-]+)\.json$/);
  return t ? t[1] : "";
}).filter((n) => n !== "");
a.length === 0 && console.warn("[i18n] No language files found in ../translation/. Check paths and bundler setup for import.meta.glob.");
const l = "en", i = j.createInstance();
function z(n, t) {
  if (c())
    return n;
  if (!i.isInitialized) {
    const o = Array.isArray(n) ? n.join(", ") : String(n);
    return console.warn(`[i18n] t function called before i18next was initialized. Key: ${o}. Returning key.`), o;
  }
  let r = i.t(n, t);
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
      const o = await f(/* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-zhH28JpD.js"), "../translation/cs.json": () => import("./cs-CP0wPzyN.js"), "../translation/da.json": () => import("./da-BQCQ-7ua.js"), "../translation/de.json": () => import("./de-H0YKpC2a.js"), "../translation/el.json": () => import("./el-DdhnXsAE.js"), "../translation/en.json": () => import("./en-DjtmW68y.js"), "../translation/es.json": () => import("./es-CjU-za1w.js"), "../translation/fi.json": () => import("./fi-CYRcg1_F.js"), "../translation/fr.json": () => import("./fr-DZJIQ9iy.js"), "../translation/hi.json": () => import("./hi-BiE5OvdL.js"), "../translation/hr.json": () => import("./hr-BdqwlHFo.js"), "../translation/hu.json": () => import("./hu-CUqkSk-h.js"), "../translation/id.json": () => import("./id-C7WZRnVO.js"), "../translation/it.json": () => import("./it-BMsi2irc.js"), "../translation/ja.json": () => import("./ja-BcIFOLZq.js"), "../translation/ko.json": () => import("./ko-D9Zng3zA.js"), "../translation/ms.json": () => import("./ms-sS2gxUAZ.js"), "../translation/nl.json": () => import("./nl-B32fDyGC.js"), "../translation/no.json": () => import("./no-DP7gL-Ze.js"), "../translation/pl.json": () => import("./pl-Eevw-6cL.js"), "../translation/pt.json": () => import("./pt-Dfhml-Z7.js"), "../translation/ro.json": () => import("./ro-DysnOeoG.js"), "../translation/ru.json": () => import("./ru-BrTmYkEB.js"), "../translation/sk.json": () => import("./sk-4FP_MY6E.js"), "../translation/sv.json": () => import("./sv-D35O8fTe.js"), "../translation/th.json": () => import("./th-DOwRhTRY.js"), "../translation/tr.json": () => import("./tr-B865MXcn.js"), "../translation/uk.json": () => import("./uk-Cr8E3_LL.js"), "../translation/vi.json": () => import("./vi-BpjQevj7.js"), "../translation/zh.json": () => import("./zh-BBqrRTOS.js") }), `../translation/${n}.json`, 3);
      s[n] = o.default, r(null, s[n]);
    } catch (o) {
      const e = `[i18n] Failed to load local resource module for language '${n}'. Error: ${o.message}`;
      console.warn(e, o), r(o, null);
    }
  }
};
async function I() {
  return g(i), await i.use(u).use(y).init({
    debug: !1,
    fallbackLng: l,
    supportedLngs: a.length > 0 ? a : [l],
    interpolation: {
      format: function(n, t) {
        return t === "c" ? d(n) : t === "sc" ? m(n) : n;
      }
    },
    detection: {
      // Path first for URL-based language routing (e.g., /de/plans)
      order: ["path", "querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"],
      lookupFromPathIndex: 0
      // Look at first path segment for language
    }
  }), i;
}
const w = I().catch((n) => {
  console.error("[i18n] CRITICAL: Initialization failed.", n);
});
function L() {
  return i.isInitialized;
}
const v = async (n) => {
  if (a.length > 0 && !a.includes(n))
    return console.warn(`[i18n] Attempted to change to unsupported language: ${n}. Current: ${i.language}`), i.language;
  i.isInitialized || (console.warn("[i18n] changeLanguage called before initialization. Awaiting i18nextReady."), await w);
  try {
    return await i.changeLanguage(n), console.log(`[i18n] Language changed to ${n}`), i.language;
  } catch (t) {
    return console.error(`[i18n] Failed to change language to ${n}:`, t), i.language;
  }
};
export {
  l as FALLBACK_LANGUAGE,
  a as SUPPORTED_LANGUAGES,
  v as changeLanguage,
  i as i18nextInstance,
  w as i18nextReady,
  L as isI18nInitialized,
  z as t
};

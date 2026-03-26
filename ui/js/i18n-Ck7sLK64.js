import { a as c } from "./environment-BeBZzWz6.js";
import { i as j, B as u } from "./vendor-i18next-2OYl82kj.js";
import { s as m, c as f, a as d } from "./i18n-DT7wACvc.js";
const g = (n, t, o) => {
  const i = n[t];
  return i ? typeof i == "function" ? i() : Promise.resolve(i) : new Promise((e, p) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(p.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + t + (t.split("/").length !== o ? ". Note that variables only represent file names one level deep." : ""))));
  });
}, h = /* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-zhH28JpD.js"), "../translation/cs.json": () => import("./cs-CP0wPzyN.js"), "../translation/da.json": () => import("./da-BQCQ-7ua.js"), "../translation/de.json": () => import("./de-H0YKpC2a.js"), "../translation/el.json": () => import("./el-DdhnXsAE.js"), "../translation/en.json": () => import("./en-0-bXtpyj.js"), "../translation/es.json": () => import("./es-CjU-za1w.js"), "../translation/fi.json": () => import("./fi-CYRcg1_F.js"), "../translation/fr.json": () => import("./fr-DZJIQ9iy.js"), "../translation/hi.json": () => import("./hi-BiE5OvdL.js"), "../translation/hr.json": () => import("./hr-BdqwlHFo.js"), "../translation/hu.json": () => import("./hu-CUqkSk-h.js"), "../translation/id.json": () => import("./id-C7WZRnVO.js"), "../translation/it.json": () => import("./it-BMsi2irc.js"), "../translation/ja.json": () => import("./ja-BcIFOLZq.js"), "../translation/ko.json": () => import("./ko-D9Zng3zA.js"), "../translation/ms.json": () => import("./ms-sS2gxUAZ.js"), "../translation/nl.json": () => import("./nl-B32fDyGC.js"), "../translation/no.json": () => import("./no-DP7gL-Ze.js"), "../translation/pl.json": () => import("./pl-Eevw-6cL.js"), "../translation/pt.json": () => import("./pt-Dfhml-Z7.js"), "../translation/ro.json": () => import("./ro-DysnOeoG.js"), "../translation/ru.json": () => import("./ru-BrTmYkEB.js"), "../translation/sk.json": () => import("./sk-4FP_MY6E.js"), "../translation/sv.json": () => import("./sv-D35O8fTe.js"), "../translation/th.json": () => import("./th-DOwRhTRY.js"), "../translation/tr.json": () => import("./tr-B865MXcn.js"), "../translation/uk.json": () => import("./uk-Cr8E3_LL.js"), "../translation/vi.json": () => import("./vi-BpjQevj7.js"), "../translation/zh.json": () => import("./zh-BBqrRTOS.js") }), a = Object.keys(h).map((n) => {
  const t = n.match(/\/([a-zA-Z0-9_-]+)\.json$/);
  return t ? t[1] : "";
}).filter((n) => n !== "");
a.length === 0 && console.warn("[i18n] No language files found in ../translation/. Check paths and bundler setup for import.meta.glob.");
const l = "en", r = j.createInstance();
function A(n, t) {
  if (c())
    return n;
  if (!r.isInitialized) {
    const i = Array.isArray(n) ? n.join(", ") : String(n);
    return console.warn(`[i18n] t function called before i18next was initialized. Key: ${i}. Returning key.`), i;
  }
  let o = r.t(n, t);
  return o = typeof o == "string" ? o : String(o), m(o);
}
const s = {}, y = {
  type: "backend",
  init: () => {
  },
  // The `namespace` parameter will now be ignored by your backend logic
  read: async (n, t, o) => {
    try {
      if (s[n]) {
        o(null, s[n]);
        return;
      }
      const i = await g(/* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-zhH28JpD.js"), "../translation/cs.json": () => import("./cs-CP0wPzyN.js"), "../translation/da.json": () => import("./da-BQCQ-7ua.js"), "../translation/de.json": () => import("./de-H0YKpC2a.js"), "../translation/el.json": () => import("./el-DdhnXsAE.js"), "../translation/en.json": () => import("./en-0-bXtpyj.js"), "../translation/es.json": () => import("./es-CjU-za1w.js"), "../translation/fi.json": () => import("./fi-CYRcg1_F.js"), "../translation/fr.json": () => import("./fr-DZJIQ9iy.js"), "../translation/hi.json": () => import("./hi-BiE5OvdL.js"), "../translation/hr.json": () => import("./hr-BdqwlHFo.js"), "../translation/hu.json": () => import("./hu-CUqkSk-h.js"), "../translation/id.json": () => import("./id-C7WZRnVO.js"), "../translation/it.json": () => import("./it-BMsi2irc.js"), "../translation/ja.json": () => import("./ja-BcIFOLZq.js"), "../translation/ko.json": () => import("./ko-D9Zng3zA.js"), "../translation/ms.json": () => import("./ms-sS2gxUAZ.js"), "../translation/nl.json": () => import("./nl-B32fDyGC.js"), "../translation/no.json": () => import("./no-DP7gL-Ze.js"), "../translation/pl.json": () => import("./pl-Eevw-6cL.js"), "../translation/pt.json": () => import("./pt-Dfhml-Z7.js"), "../translation/ro.json": () => import("./ro-DysnOeoG.js"), "../translation/ru.json": () => import("./ru-BrTmYkEB.js"), "../translation/sk.json": () => import("./sk-4FP_MY6E.js"), "../translation/sv.json": () => import("./sv-D35O8fTe.js"), "../translation/th.json": () => import("./th-DOwRhTRY.js"), "../translation/tr.json": () => import("./tr-B865MXcn.js"), "../translation/uk.json": () => import("./uk-Cr8E3_LL.js"), "../translation/vi.json": () => import("./vi-BpjQevj7.js"), "../translation/zh.json": () => import("./zh-BBqrRTOS.js") }), `../translation/${n}.json`, 3);
      s[n] = i.default, o(null, s[n]);
    } catch (i) {
      const e = `[i18n] Failed to load local resource module for language '${n}'. Error: ${i.message}`;
      console.warn(e, i), o(i, null);
    }
  }
};
async function I() {
  d(r);
  const n = console.info;
  return console.info = (...t) => {
    typeof t[0] == "string" && t[0].includes("locize.com") || n(...t);
  }, await r.use(u).use(y).init({
    debug: !1,
    fallbackLng: l,
    supportedLngs: a.length > 0 ? a : [l],
    interpolation: {
      format: function(t, o) {
        return o === "c" ? f(t) : o === "sc" ? m(t) : t;
      }
    },
    detection: {
      // Path first for URL-based language routing (e.g., /de/plans)
      order: ["path", "querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"],
      lookupFromPathIndex: 0
      // Look at first path segment for language
    }
  }), console.info = n, r;
}
const w = I().catch((n) => {
  console.error("[i18n] CRITICAL: Initialization failed.", n);
});
function v() {
  return r.isInitialized;
}
const L = async (n) => {
  if (a.length > 0 && !a.includes(n))
    return console.warn(`[i18n] Attempted to change to unsupported language: ${n}. Current: ${r.language}`), r.language;
  r.isInitialized || (console.warn("[i18n] changeLanguage called before initialization. Awaiting i18nextReady."), await w);
  try {
    return await r.changeLanguage(n), r.language;
  } catch (t) {
    return console.error(`[i18n] Failed to change language to ${n}:`, t), r.language;
  }
};
export {
  l as FALLBACK_LANGUAGE,
  a as SUPPORTED_LANGUAGES,
  L as changeLanguage,
  r as i18nextInstance,
  w as i18nextReady,
  v as isI18nInitialized,
  A as t
};

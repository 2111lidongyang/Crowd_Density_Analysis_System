import {
  Container_default,
  Header_default
} from "/build/_shared/chunk-BFLSOAUD.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  createHotContext
} from "/build/_shared/chunk-XWXMIAY6.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/videoinput.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/videoinput.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/videoinput.tsx"
  );
  import.meta.hot.lastModified = "1704547955775.5051";
}
function VideoInput() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header_default, { as: "h2", children: "\u89C6\u9891\u8F93\u5165" }, void 0, false, {
      fileName: "app/routes/videoinput.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", { src: "http://127.0.0.1:5000/video_feed", frameBorder: 0, width: "1280", height: "720", title: "Example Site" }, void 0, false, {
      fileName: "app/routes/videoinput.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/videoinput.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c = VideoInput;
var _c;
$RefreshReg$(_c, "VideoInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  VideoInput as default
};
//# sourceMappingURL=/build/routes/videoinput-WLBTJPVK.js.map

import {
  Form
} from "/build/_shared/chunk-CXYJAP3H.js";
import {
  Button_default,
  Container_default,
  Grid_default,
  Header_default,
  Icon_default,
  Image_default,
  Segment_default
} from "/build/_shared/chunk-BFLSOAUD.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  createHotContext
} from "/build/_shared/chunk-XWXMIAY6.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/imageinput.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/imageinput.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/imageinput.tsx"
  );
  import.meta.hot.lastModified = "1704550403131.0122";
}
function ImageInput() {
  _s();
  const [selectedImage, setSelectedImage] = (0, import_react.useState)(null);
  const [resultImage, setResultImage] = (0, import_react.useState)(null);
  const [heatMap, setHeatMap] = (0, import_react.useState)(null);
  const fileInputRef = (0, import_react.useRef)(null);
  const handleImageChange = async (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const formData = new FormData();
      formData.append("image", file);
      try {
        const response = await fetch("http://127.0.0.1:5000/image_feed", {
          "method": "POST",
          "body": formData
        });
        const heatmap = await fetch("http://127.0.0.1:5000/image_feed?q=hm", {
          "method": "POST",
          "body": formData
        });
        if (!response.ok) {
          throw new Error("HTTP Error:" + response.statusText);
        }
        const blob = await response.blob();
        const result = new File([blob], "resultImage");
        setResultImage(result);
        const hmap = await heatmap.blob();
        const htmap = new File([hmap], "heatmap");
        setHeatMap(htmap);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  };
  const handleImageCancel = (event) => {
    setSelectedImage(null);
    document.getElementById("imagefile")?.setAttribute("value", "");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  const handleIconClick = () => {
    if (fileInputRef.current && fileInputRef.current instanceof HTMLInputElement) {
      fileInputRef.current.click();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header_default, { as: "h2", children: "\u56FE\u7247\u8F93\u5165" }, void 0, false, {
      fileName: "app/routes/imageinput.tsx",
      lineNumber: 81,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { action: "/imageinput", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid_default.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid_default.Column, { width: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Segment_default, { children: selectedImage ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          position: "relative"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image_default, { src: URL.createObjectURL(selectedImage), alt: "" }, void 0, false, {
            fileName: "app/routes/imageinput.tsx",
            lineNumber: 90,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Icon_default,
            {
              name: "cancel",
              size: "huge",
              style: {
                position: "absolute",
                top: "10px",
                // 根据需要调整位置
                right: "10px",
                // 根据需要调整位置
                cursor: "pointer",
                color: "red"
                // 白色图标
              },
              onClick: handleImageCancel
            },
            void 0,
            false,
            {
              fileName: "app/routes/imageinput.tsx",
              lineNumber: 91,
              columnNumber: 37
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/imageinput.tsx",
          lineNumber: 87,
          columnNumber: 50
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { icon: true, labelPosition: "left", onClick: handleIconClick, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon_default, { name: "upload" }, void 0, false, {
            fileName: "app/routes/imageinput.tsx",
            lineNumber: 102,
            columnNumber: 37
          }, this),
          "\u9009\u62E9\u56FE\u7247"
        ] }, void 0, true, {
          fileName: "app/routes/imageinput.tsx",
          lineNumber: 101,
          columnNumber: 42
        }, this) }, void 0, false, {
          fileName: "app/routes/imageinput.tsx",
          lineNumber: 86,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/imageinput.tsx",
          lineNumber: 85,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid_default.Column, { width: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { icon: true, type: "submit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon_default, { name: "arrow right", size: "big" }, void 0, false, {
          fileName: "app/routes/imageinput.tsx",
          lineNumber: 109,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/imageinput.tsx",
          lineNumber: 108,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/imageinput.tsx",
          lineNumber: 107,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid_default.Column, { width: 6, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Segment_default, { children: resultImage ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            position: "relative"
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image_default, { src: URL.createObjectURL(resultImage), alt: "" }, void 0, false, {
            fileName: "app/routes/imageinput.tsx",
            lineNumber: 117,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/imageinput.tsx",
            lineNumber: 114,
            columnNumber: 48
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "\u8F93\u51FA\u56FE\u7247" }, void 0, false, {
            fileName: "app/routes/imageinput.tsx",
            lineNumber: 119,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/imageinput.tsx",
            lineNumber: 118,
            columnNumber: 42
          }, this) }, void 0, false, {
            fileName: "app/routes/imageinput.tsx",
            lineNumber: 113,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Segment_default, { children: heatMap ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image_default, { src: URL.createObjectURL(heatMap), alt: "", style: {
            width: "400px",
            height: "300px"
          } }, void 0, false, {
            fileName: "app/routes/imageinput.tsx",
            lineNumber: 124,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/imageinput.tsx",
            lineNumber: 123,
            columnNumber: 40
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "\u70ED\u529B\u56FE" }, void 0, false, {
            fileName: "app/routes/imageinput.tsx",
            lineNumber: 129,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/imageinput.tsx",
            lineNumber: 128,
            columnNumber: 42
          }, this) }, void 0, false, {
            fileName: "app/routes/imageinput.tsx",
            lineNumber: 122,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/imageinput.tsx",
          lineNumber: 112,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/imageinput.tsx",
        lineNumber: 84,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/imageinput.tsx",
        lineNumber: 83,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          ref: fileInputRef,
          name: "image",
          type: "file",
          accept: "image/*",
          required: true,
          onChange: handleImageChange,
          style: {
            display: "none"
          }
        },
        void 0,
        false,
        {
          fileName: "app/routes/imageinput.tsx",
          lineNumber: 135,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/imageinput.tsx",
      lineNumber: 82,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/imageinput.tsx",
    lineNumber: 80,
    columnNumber: 10
  }, this);
}
_s(ImageInput, "N1+VRHDC1Q3Khob+jgWVx1OQVtc=");
_c = ImageInput;
var _c;
$RefreshReg$(_c, "ImageInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ImageInput as default
};
//# sourceMappingURL=/build/routes/imageinput-SRLDF4YB.js.map

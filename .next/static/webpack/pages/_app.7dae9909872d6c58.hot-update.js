"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./config/network.tsx":
/*!****************************!*\
  !*** ./config/network.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/MenuItem */ \"./node_modules/@mui/material/esm/MenuItem/index.js\");\n\n\n\nvar FTMC = {\n    id: 250,\n    name: \"Fantom\",\n    network: \"fantom\",\n    iconUrl: \"https://cryptologos.cc/logos/fantom-ftm-logo.svg?v=023\",\n    iconBackground: \"#fff\",\n    nativeCurrency: {\n        decimals: 18,\n        name: \"Fantom\",\n        symbol: \"FTM\"\n    },\n    rpcUrls: {\n        default: \"https://rpc.ftm.tools\" //'https://rpc.ftm.tools/',\n    },\n    blockExplorers: {\n        default: {\n            name: \"FTM\",\n            url: \"\thttps://ftmscan.com/\"\n        }\n    },\n    testnet: false\n};\nvar FTMRPC = \"https://rpc.ftm.tools/\";\nvar FTMA = \"0x0947ef8Bf078b8201013c77C39b5f0A5Bb8f58EC\";\nvar FTMN = \"0xBE153Eb48062ba3892C10389844643d37cedA639\";\nvar FTMM = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    value: \"0x0947ef8Bf078b8201013c77C39b5f0A5Bb8f58EC\",\n    children: \"Main\"\n}, void 0, false, {\n    fileName: \"C:\\\\Users\\\\PR0_6\\\\Documents\\\\Sol\\\\thewall\\\\config\\\\network.tsx\",\n    lineNumber: 34,\n    columnNumber: 14\n}, undefined);\nvar BSCC = {\n    id: 56,\n    name: \"Binance Chain\",\n    network: \"BSC\",\n    iconUrl: \"https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=023\",\n    iconBackground: \"#fff\",\n    nativeCurrency: {\n        decimals: 18,\n        name: \"BSC\",\n        symbol: \"BNB\"\n    },\n    rpcUrls: {\n        default: \"https://bsc-dataseed.binance.org/\" //'https://rpc.ftm.tools/',\n    },\n    blockExplorers: {\n        default: {\n            name: \"B\",\n            url: \"\thttps://bscscan.com/\"\n        }\n    },\n    testnet: false\n};\nvar BSCRPC = \"https://bsc-dataseed.binance.org/\";\nvar BSCA = \"0x18C519E0dA619d017908aFf504e782E381552620\";\nvar BSCN = \"0xB8112446078378f0998FBf834D4683B6C8Ac08C7\";\nvar BSCM = [\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        value: \"0x18C519E0dA619d017908aFf504e782E381552620\",\n        children: \"Main\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PR0_6\\\\Documents\\\\Sol\\\\thewall\\\\config\\\\network.tsx\",\n        lineNumber: 57,\n        columnNumber: 15\n    }, undefined)\n];\nvar PolyM = [\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        value: \"0x4989314F8cb5b382FEdB339bdF9604fF1fbfdC79\",\n        children: \"Main\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PR0_6\\\\Documents\\\\Sol\\\\thewall\\\\config\\\\network.tsx\",\n        lineNumber: 58,\n        columnNumber: 16\n    }, undefined),\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        value: \"0x3c82EBe821Fdf1CC734046d1D245eE0FC05F9d58\",\n        children: \"Weebs\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PR0_6\\\\Documents\\\\Sol\\\\thewall\\\\config\\\\network.tsx\",\n        lineNumber: 59,\n        columnNumber: 1\n    }, undefined),\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        value: \"0x503D749c21720E8B0d7A39809AfeC02bdeb014bc\",\n        children: \"Polygon\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PR0_6\\\\Documents\\\\Sol\\\\thewall\\\\config\\\\network.tsx\",\n        lineNumber: 60,\n        columnNumber: 1\n    }, undefined),\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        value: \"0x4B233C47dC9C456dBaaa9af138F54b03CFcDED6E\",\n        children: \"ENS\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PR0_6\\\\Documents\\\\Sol\\\\thewall\\\\config\\\\network.tsx\",\n        lineNumber: 61,\n        columnNumber: 1\n    }, undefined),\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        value: \"0x6A98F6F6F27E53089857333fc036Ab98719fAe75\",\n        children: \"Sushiswap\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PR0_6\\\\Documents\\\\Sol\\\\thewall\\\\config\\\\network.tsx\",\n        lineNumber: 62,\n        columnNumber: 1\n    }, undefined)\n];\nvar PolyC = wagmi__WEBPACK_IMPORTED_MODULE_2__.chain.polygon;\nvar PolyRPC = \"https://polygon-rpc.com\";\nvar PolyA = \"0x4989314F8cb5b382FEdB339bdF9604fF1fbfdC79\";\nvar PolyN = \"0xd2defb1cf1d649b8253c85834a9b9571337166fe\";\nvar envVars = {\n    chainn: BSCC,\n    rpc: BSCRPC,\n    createn: BSCN,\n    contractn: BSCA,\n    menun: BSCM\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (envVars);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFRiwrREFBZU8sT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb25maWcvbmV0d29yay50c3g/MzgzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXR3b3JrLCBBbGNoZW15IH0gZnJvbSAnYWxjaGVteS1zZGsnO1xyXG5pbXBvcnQgeyBDaGFpbiB9IGZyb20gJ0ByYWluYm93LW1lL3JhaW5ib3draXQnO1xyXG5pbXBvcnQgeyBqc29uUnBjUHJvdmlkZXIgfSBmcm9tICd3YWdtaS9wcm92aWRlcnMvanNvblJwYydcclxuaW1wb3J0IHsgZ2V0RGVmYXVsdFdhbGxldHMsIFJhaW5ib3dLaXRQcm92aWRlciB9IGZyb20gJ0ByYWluYm93LW1lL3JhaW5ib3draXQnXHJcbmltcG9ydCB7IGNoYWluLCBjb25maWd1cmVDaGFpbnMsIGNyZWF0ZUNsaWVudCwgV2FnbWlDb25maWcsIHVzZUNvbnRyYWN0V3JpdGUgfSBmcm9tICd3YWdtaSdcclxuaW1wb3J0IHsgYWxjaGVteVByb3ZpZGVyIH0gZnJvbSAnd2FnbWkvcHJvdmlkZXJzL2FsY2hlbXknXHJcbmltcG9ydCB7IHB1YmxpY1Byb3ZpZGVyIH0gZnJvbSAnd2FnbWkvcHJvdmlkZXJzL3B1YmxpYydcclxuaW1wb3J0IHsgUmFpbmJvd0tpdENoYWluUHJvdmlkZXIgfSBmcm9tICdAcmFpbmJvdy1tZS9yYWluYm93a2l0L2Rpc3QvY29tcG9uZW50cy9SYWluYm93S2l0UHJvdmlkZXIvUmFpbmJvd0tpdENoYWluQ29udGV4dCdcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTWVudUl0ZW0nO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBGVE1DOiBDaGFpbiA9IHtcclxuICBpZDogMjUwLFxyXG4gIG5hbWU6ICdGYW50b20nLFxyXG4gIG5ldHdvcms6ICdmYW50b20nLFxyXG4gIGljb25Vcmw6ICdodHRwczovL2NyeXB0b2xvZ29zLmNjL2xvZ29zL2ZhbnRvbS1mdG0tbG9nby5zdmc/dj0wMjMnLFxyXG4gIGljb25CYWNrZ3JvdW5kOiAnI2ZmZicsXHJcbiAgbmF0aXZlQ3VycmVuY3k6IHtcclxuICAgIGRlY2ltYWxzOiAxOCxcclxuICAgIG5hbWU6ICdGYW50b20nLFxyXG4gICAgc3ltYm9sOiAnRlRNJyxcclxuICB9LFxyXG4gIHJwY1VybHM6IHtcclxuICAgIGRlZmF1bHQ6ICdodHRwczovL3JwYy5mdG0udG9vbHMnLy8naHR0cHM6Ly9ycGMuZnRtLnRvb2xzLycsXHJcbiAgfSxcclxuICBibG9ja0V4cGxvcmVyczoge1xyXG4gICAgZGVmYXVsdDogeyBuYW1lOiAnRlRNJywgdXJsOiAnXHRodHRwczovL2Z0bXNjYW4uY29tLycgfSxcclxuICB9LFxyXG4gIHRlc3RuZXQ6IGZhbHNlLFxyXG59O1xyXG5jb25zdCBGVE1SUEMgPSAnaHR0cHM6Ly9ycGMuZnRtLnRvb2xzLydcclxuY29uc3QgRlRNQSA9ICcweDA5NDdlZjhCZjA3OGI4MjAxMDEzYzc3QzM5YjVmMEE1QmI4ZjU4RUMnXHJcbmNvbnN0IEZUTU4gPSAnMHhCRTE1M0ViNDgwNjJiYTM4OTJDMTAzODk4NDQ2NDNkMzdjZWRBNjM5J1xyXG5jb25zdCBGVE1NID0gPE1lbnVJdGVtIHZhbHVlPXsnMHgwOTQ3ZWY4QmYwNzhiODIwMTAxM2M3N0MzOWI1ZjBBNUJiOGY1OEVDJ30+TWFpbjwvTWVudUl0ZW0+XHJcbmNvbnN0IEJTQ0M6IENoYWluID0ge1xyXG4gIGlkOiA1NixcclxuICBuYW1lOiAnQmluYW5jZSBDaGFpbicsXHJcbiAgbmV0d29yazogJ0JTQycsXHJcbiAgaWNvblVybDogJ2h0dHBzOi8vY3J5cHRvbG9nb3MuY2MvbG9nb3MvYm5iLWJuYi1sb2dvLnN2Zz92PTAyMycsXHJcbiAgaWNvbkJhY2tncm91bmQ6ICcjZmZmJyxcclxuICBuYXRpdmVDdXJyZW5jeToge1xyXG4gICAgZGVjaW1hbHM6IDE4LFxyXG4gICAgbmFtZTogJ0JTQycsXHJcbiAgICBzeW1ib2w6ICdCTkInLFxyXG4gIH0sXHJcbiAgcnBjVXJsczoge1xyXG4gICAgZGVmYXVsdDogJ2h0dHBzOi8vYnNjLWRhdGFzZWVkLmJpbmFuY2Uub3JnLycvLydodHRwczovL3JwYy5mdG0udG9vbHMvJyxcclxuICB9LFxyXG4gIGJsb2NrRXhwbG9yZXJzOiB7XHJcbiAgICBkZWZhdWx0OiB7IG5hbWU6ICdCJywgdXJsOiAnXHRodHRwczovL2JzY3NjYW4uY29tLycgfSxcclxuICB9LFxyXG4gIHRlc3RuZXQ6IGZhbHNlLFxyXG59O1xyXG5jb25zdCBCU0NSUEMgPSAnaHR0cHM6Ly9ic2MtZGF0YXNlZWQuYmluYW5jZS5vcmcvJ1xyXG5jb25zdCBCU0NBID0gJzB4MThDNTE5RTBkQTYxOWQwMTc5MDhhRmY1MDRlNzgyRTM4MTU1MjYyMCdcclxuY29uc3QgQlNDTiA9ICcweEI4MTEyNDQ2MDc4Mzc4ZjA5OThGQmY4MzRENDY4M0I2QzhBYzA4QzcnXHJcbmNvbnN0IEJTQ00gPSBbPE1lbnVJdGVtIHZhbHVlPXsnMHgxOEM1MTlFMGRBNjE5ZDAxNzkwOGFGZjUwNGU3ODJFMzgxNTUyNjIwJ30+TWFpbjwvTWVudUl0ZW0+XVxyXG5jb25zdCBQb2x5TSA9IFs8TWVudUl0ZW0gdmFsdWU9eycweDQ5ODkzMTRGOGNiNWIzODJGRWRCMzM5YmRGOTYwNGZGMWZiZmRDNzknfT5NYWluPC9NZW51SXRlbT4sXHJcbjxNZW51SXRlbSB2YWx1ZT17JzB4M2M4MkVCZTgyMUZkZjFDQzczNDA0NmQxRDI0NWVFMEZDMDVGOWQ1OCd9PldlZWJzPC9NZW51SXRlbT4sXHJcbjxNZW51SXRlbSB2YWx1ZT17JzB4NTAzRDc0OWMyMTcyMEU4QjBkN0EzOTgwOUFmZUMwMmJkZWIwMTRiYyd9PlBvbHlnb248L01lbnVJdGVtPixcclxuPE1lbnVJdGVtIHZhbHVlPXsnMHg0QjIzM0M0N2RDOUM0NTZkQmFhYTlhZjEzOEY1NGIwM0NGY0RFRDZFJ30+RU5TPC9NZW51SXRlbT4sXHJcbjxNZW51SXRlbSB2YWx1ZT17JzB4NkE5OEY2RjZGMjdFNTMwODk4NTczMzNmYzAzNkFiOTg3MTlmQWU3NSd9PlN1c2hpc3dhcDwvTWVudUl0ZW0+XHJcbl1cclxuY29uc3QgUG9seUMgPSBjaGFpbi5wb2x5Z29uXHJcbmNvbnN0IFBvbHlSUEMgPSAnaHR0cHM6Ly9wb2x5Z29uLXJwYy5jb20nXHJcbmNvbnN0IFBvbHlBID0gJzB4NDk4OTMxNEY4Y2I1YjM4MkZFZEIzMzliZEY5NjA0ZkYxZmJmZEM3OSdcclxuY29uc3QgUG9seU4gPSAnMHhkMmRlZmIxY2YxZDY0OWI4MjUzYzg1ODM0YTliOTU3MTMzNzE2NmZlJ1xyXG5cclxuY29uc3QgZW52VmFycyA9IHtcclxuICBjaGFpbm46QlNDQywvL2NoYWlubixcclxuICBycGM6IEJTQ1JQQyxcclxuICAgIGNyZWF0ZW46IEJTQ04sXHJcbiAgICBjb250cmFjdG46IEJTQ0EsXHJcbiAgICBtZW51bjpCU0NNXHJcbiB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlbnZWYXJzXHJcbiJdLCJuYW1lcyI6WyJjaGFpbiIsIk1lbnVJdGVtIiwiRlRNQyIsImlkIiwibmFtZSIsIm5ldHdvcmsiLCJpY29uVXJsIiwiaWNvbkJhY2tncm91bmQiLCJuYXRpdmVDdXJyZW5jeSIsImRlY2ltYWxzIiwic3ltYm9sIiwicnBjVXJscyIsImRlZmF1bHQiLCJibG9ja0V4cGxvcmVycyIsInVybCIsInRlc3RuZXQiLCJGVE1SUEMiLCJGVE1BIiwiRlRNTiIsIkZUTU0iLCJ2YWx1ZSIsIkJTQ0MiLCJCU0NSUEMiLCJCU0NBIiwiQlNDTiIsIkJTQ00iLCJQb2x5TSIsIlBvbHlDIiwicG9seWdvbiIsIlBvbHlSUEMiLCJQb2x5QSIsIlBvbHlOIiwiZW52VmFycyIsImNoYWlubiIsInJwYyIsImNyZWF0ZW4iLCJjb250cmFjdG4iLCJtZW51biJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config/network.tsx\n"));

/***/ })

});
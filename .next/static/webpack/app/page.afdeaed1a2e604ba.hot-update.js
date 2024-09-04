"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/modules/kis_stock_api.js":
/*!******************************************!*\
  !*** ./src/app/modules/kis_stock_api.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_kis_secret__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/kis_secret */ \"(app-pages-browser)/./src/app/config/kis_secret.js\");\n/* harmony import */ var _kis_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kis_token */ \"(app-pages-browser)/./src/app/modules/kis_token.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ var _s = $RefreshSig$();\n\n\n\nconst useStock = ()=>{\n    _s();\n    const [stock, setStock] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const getStock = async ()=>{\n            try {\n                // 비동기적 토큰 가져옴\n                const token = await (0,_kis_token__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n                // 쿼리 파라미터를 URL에 포함\n                const queryParams = new URLSearchParams({\n                    fid_input_iscd: \"900100\",\n                    fid_cond_mrkt_div_code: \"J\"\n                }).toString();\n                const url = \"/inquire-price?\" + \"\".concat(queryParams);\n                const kisGetStockPetchOption = {\n                    method: \"GET\",\n                    headers: {\n                        authorization: \"Bearer \".concat(token),\n                        tr_id: \"FHKST01010100\",\n                        appkey: _config_kis_secret__WEBPACK_IMPORTED_MODULE_1__.KIS_APP_KEY,\n                        appsecret: _config_kis_secret__WEBPACK_IMPORTED_MODULE_1__.KIS_APP_SECRET,\n                        custtype: \"P\"\n                    }\n                };\n                //API 호출\n                const response = await fetch(url, kisGetStockPetchOption);\n                if (!response.ok) {\n                    throw new Error(\"API 호출 실패: \".concat(response.status, \" \").concat(response.statusText));\n                }\n                //JSON 파싱\n                const json = await response.json();\n                console.log(json);\n                const output = json.output;\n                console.log(output);\n                setStock({\n                    stck_prpr: output.stck_prpr,\n                    hts_avls: output.hts_avls,\n                    stck_shr_niscd: output.stck_shrn_iscd\n                });\n            } catch (error) {\n                console.error(\"주식 정보를 가져오는 중 오류 발생:\", error);\n            }\n        };\n        getStock();\n    }, []);\n    return stock;\n};\n_s(useStock, \"GRoxjT82ro5uGJowmJTtPQOwgXc=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStock);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbW9kdWxlcy9raXNfc3RvY2tfYXBpLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUM0QztBQUN1QjtBQUNoQztBQUVuQyxNQUFNSyxXQUFXOztJQUNmLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUVuQ0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNUSxXQUFXO1lBQ2YsSUFBSTtnQkFDRixjQUFjO2dCQUNkLE1BQU1DLFFBQVEsTUFBTUwsc0RBQVFBO2dCQUU1QixtQkFBbUI7Z0JBQ25CLE1BQU1NLGNBQWMsSUFBSUMsZ0JBQWdCO29CQUN0Q0MsZ0JBQWdCO29CQUNoQkMsd0JBQXdCO2dCQUMxQixHQUFHQyxRQUFRO2dCQUVYLE1BQU1DLE1BQU0sb0JBQW9CLEdBQWUsT0FBWkw7Z0JBRW5DLE1BQU1NLHlCQUF5QjtvQkFDN0JDLFFBQVE7b0JBRVJDLFNBQVM7d0JBQ1BDLGVBQWUsVUFBZ0IsT0FBTlY7d0JBQ3pCVyxPQUFPO3dCQUNQQyxRQUFRbkIsMkRBQVdBO3dCQUNuQm9CLFdBQVduQiw4REFBY0E7d0JBQ3pCb0IsVUFBVTtvQkFDWjtnQkFDRjtnQkFDQSxRQUFRO2dCQUNSLE1BQU1DLFdBQVcsTUFBTUMsTUFBTVYsS0FBS0M7Z0JBRWxDLElBQUksQ0FBQ1EsU0FBU0UsRUFBRSxFQUFFO29CQUNoQixNQUFNLElBQUlDLE1BQ1IsY0FBaUNILE9BQW5CQSxTQUFTSSxNQUFNLEVBQUMsS0FBdUIsT0FBcEJKLFNBQVNLLFVBQVU7Z0JBRXhEO2dCQUNBLFNBQVM7Z0JBQ1QsTUFBTUMsT0FBTyxNQUFNTixTQUFTTSxJQUFJO2dCQUNoQ0MsUUFBUUMsR0FBRyxDQUFDRjtnQkFDWixNQUFNRyxTQUFTSCxLQUFLRyxNQUFNO2dCQUMxQkYsUUFBUUMsR0FBRyxDQUFDQztnQkFFWjFCLFNBQVM7b0JBQ1AyQixXQUFXRCxPQUFPQyxTQUFTO29CQUMzQkMsVUFBVUYsT0FBT0UsUUFBUTtvQkFDekJDLGdCQUFnQkgsT0FBT0ksY0FBYztnQkFFdkM7WUFDRixFQUFFLE9BQU9DLE9BQU87Z0JBQ2RQLFFBQVFPLEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3hDO1FBQ0Y7UUFFQTlCO0lBQ0YsR0FBRyxFQUFFO0lBRUwsT0FBT0Y7QUFDVDtHQXpETUQ7QUEwRE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9tb2R1bGVzL2tpc19zdG9ja19hcGkuanM/NjgzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEtJU19BUFBfS0VZLCBLSVNfQVBQX1NFQ1JFVCB9IGZyb20gXCIuLi9jb25maWcva2lzX3NlY3JldFwiO1xuaW1wb3J0IGdldFRva2VuIGZyb20gXCIuL2tpc190b2tlblwiO1xuXG5jb25zdCB1c2VTdG9jayA9ICgpID0+IHtcbiAgY29uc3QgW3N0b2NrLCBzZXRTdG9ja10gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldFN0b2NrID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8g67mE64+Z6riw7KCBIO2GoO2BsCDqsIDsoLjsmLRcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbigpO1xuXG4gICAgICAgIC8vIOy/vOumrCDtjIzrnbzrr7jthLDrpbwgVVJM7JeQIO2PrO2VqFxuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgICAgIGZpZF9pbnB1dF9pc2NkOiBcIjkwMDEwMFwiLCAvL+uCmOykkeyXkCDsl6zquLDsl5Ag7KO87Iud7L2U65Oc66W8IEpVU0lLIERC7JeQ7J6I64qUIO2VtOuLuSDsvZTsiqTri6Ug7J2066aE7J2EIO2BtOumreyLnCDtlbTri7nsooXrqqnsvZTrk5zqsIAg64SY7JWE6rCA7IScIOqygOyDieydtCDrkJjqsoztlbTshJwg7ZW064u57KO87Iud7IOB7IS47KCV67O066W8IOywjeyWtOykhOqxsOyehCFcbiAgICAgICAgICBmaWRfY29uZF9tcmt0X2Rpdl9jb2RlOiBcIkpcIiwgLy9KIDog7KO87IudLCBFVEYsIEVUTlxuICAgICAgICB9KS50b1N0cmluZygpO1xuXG4gICAgICAgIGNvbnN0IHVybCA9IFwiL2lucXVpcmUtcHJpY2U/XCIgKyBgJHtxdWVyeVBhcmFtc31gO1xuXG4gICAgICAgIGNvbnN0IGtpc0dldFN0b2NrUGV0Y2hPcHRpb24gPSB7XG4gICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgICAgICB0cl9pZDogXCJGSEtTVDAxMDEwMTAwXCIsIC8v7KO87Iud7ZiE7J6s6rCA7Iuc7IS4XG4gICAgICAgICAgICBhcHBrZXk6IEtJU19BUFBfS0VZLFxuICAgICAgICAgICAgYXBwc2VjcmV0OiBLSVNfQVBQX1NFQ1JFVCxcbiAgICAgICAgICAgIGN1c3R0eXBlOiBcIlBcIiwgLy9QOuqwnOyduCBC64qUIOuyleyduFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIC8vQVBJIO2YuOy2nFxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwga2lzR2V0U3RvY2tQZXRjaE9wdGlvbik7XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBBUEkg7Zi47LacIOyLpO2MqDogJHtyZXNwb25zZS5zdGF0dXN9ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICAvL0pTT04g7YyM7IuxXG4gICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xuICAgICAgICBjb25zdCBvdXRwdXQgPSBqc29uLm91dHB1dDtcbiAgICAgICAgY29uc29sZS5sb2cob3V0cHV0KTtcblxuICAgICAgICBzZXRTdG9jayh7XG4gICAgICAgICAgc3Rja19wcnByOiBvdXRwdXQuc3Rja19wcnByLCAvLyDso7zsi50g7ZiE7J6s6rCAXG4gICAgICAgICAgaHRzX2F2bHM6IG91dHB1dC5odHNfYXZscywgLy8gSFRTIOyLnOqwgOy0neyVoVxuICAgICAgICAgIHN0Y2tfc2hyX25pc2NkOiBvdXRwdXQuc3Rja19zaHJuX2lzY2QsIC8vIOyjvOyLnSDri6jstpUg7KKF66qp7L2U65OcXG4gICAgICAgICAgLy/rgpjspJHsl5Ag642U7LaU6rCA7ZWg6rGw7J6EIGh0dHBzOi8vYXBpcG9ydGFsLmtvcmVhaW52ZXN0bWVudC5jb20vYXBpc2VydmljZS9hcGlzZXJ2aWNlLWRvbWVzdGljLXN0b2NrLXF1b3RhdGlvbnMyI0xfMDc4MDI1MTItNGY0OS00NDg2LTkxYjQtMTA1MGI2ZjVkYzlkXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuyjvOyLnSDsoJXrs7Trpbwg6rCA7KC47Jik64qUIOykkSDsmKTrpZgg67Cc7IOdOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGdldFN0b2NrKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gc3RvY2s7XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlU3RvY2s7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJLSVNfQVBQX0tFWSIsIktJU19BUFBfU0VDUkVUIiwiZ2V0VG9rZW4iLCJ1c2VTdG9jayIsInN0b2NrIiwic2V0U3RvY2siLCJnZXRTdG9jayIsInRva2VuIiwicXVlcnlQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJmaWRfaW5wdXRfaXNjZCIsImZpZF9jb25kX21ya3RfZGl2X2NvZGUiLCJ0b1N0cmluZyIsInVybCIsImtpc0dldFN0b2NrUGV0Y2hPcHRpb24iLCJtZXRob2QiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInRyX2lkIiwiYXBwa2V5IiwiYXBwc2VjcmV0IiwiY3VzdHR5cGUiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm91dHB1dCIsInN0Y2tfcHJwciIsImh0c19hdmxzIiwic3Rja19zaHJfbmlzY2QiLCJzdGNrX3Nocm5faXNjZCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/modules/kis_stock_api.js\n"));

/***/ })

});
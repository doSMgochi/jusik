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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_kis_secret__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/kis_secret */ \"(app-pages-browser)/./src/app/config/kis_secret.js\");\n/* harmony import */ var _kis_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kis_token */ \"(app-pages-browser)/./src/app/modules/kis_token.js\");\n\n\nconst getStock = async ()=>{\n    try {\n        // 비동기적으로 토큰을 가져옵니다.\n        const token = await (0,_kis_token__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        // 쿼리 파라미터를 URL에 포함시킵니다.\n        const queryParams = new URLSearchParams({\n            FID_INPUT_ISCD: \"900100\",\n            FID_COND_MRKT_DIV_CODE: \"J\"\n        }).toString();\n        const url = \"https://openapivts.koreainvestment.com:29443/uapi/domestic-stock/v1/quotations/inquire-price?\".concat(queryParams);\n        const kisGetStockPetchOption = {\n            method: \"GET\",\n            headers: {\n                authorization: \"Bearer \".concat(token),\n                tr_id: _config_kis_secret__WEBPACK_IMPORTED_MODULE_0__.KIS_TR_ID,\n                appkey: _config_kis_secret__WEBPACK_IMPORTED_MODULE_0__.KIS_APP_KEY,\n                appsecret: _config_kis_secret__WEBPACK_IMPORTED_MODULE_0__.KIS_APP_SECRET,\n                custtype: \"P\"\n            }\n        };\n        const response = await fetch(url, kisGetStockPetchOption);\n        if (!response.ok) {\n            throw new Error(\"API 호출 실패: \".concat(response.status, \" \").concat(response.statusText));\n        }\n        const json = await response.json();\n        console.log(response);\n        console.log(json);\n        // const output = json.output;\n        // const papr = output.papr;\n        // const pdno = output.pdno;\n        // const prdt_name = output.prdt_name;\n        const { output, papr, pdno, prdt_name } = json;\n        return {\n            stockPrice: papr,\n            pdno: pdno,\n            stockName: prdt_name\n        };\n    } catch (error) {\n        console.error(\"주식 정보를 가져오는 중 오류 발생:\", error);\n    }\n    const token = (0,_kis_token__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const kisGetStockPetchOption = {\n        method: \"GET\",\n        headers: {\n            \"Content-Type\": _config_kis_secret__WEBPACK_IMPORTED_MODULE_0__.CONTENT_TYPE,\n            authorization: token,\n            tr_id: _config_kis_secret__WEBPACK_IMPORTED_MODULE_0__.KIS_TR_ID,\n            appkey: _config_kis_secret__WEBPACK_IMPORTED_MODULE_0__.KIS_APP_KEY,\n            appsecret: _config_kis_secret__WEBPACK_IMPORTED_MODULE_0__.KIS_APP_SECRET,\n            custtype: \"P\"\n        },\n        queryParameter: JSON.stringify({\n            PDNO: \"000660\",\n            PRDT_TYPE_CD: \"300\"\n        })\n    };\n    const getStock = async ()=>{\n        const url = \"https://openapivts.koreainvestment.com:29443/uapi/domestic-stock/v1/quotations/inquire-price\";\n        const response = await fetch(url, kisGetStockPetchOption);\n        const json = await response.json();\n        console.log(response);\n        console.log(json);\n        const output = json.output;\n        const papr = output.papr;\n        const pdno = output.pdno;\n        const prdt_name = output.prdt_name;\n        return {\n            stockPrice: papr,\n            pdno: pdno,\n            stockName: prdt_name\n        };\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (getStock);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbW9kdWxlcy9raXNfc3RvY2tfYXBpLmpzIiwibWFwcGluZ3MiOiI7OztBQUs4QjtBQUNLO0FBRW5DLE1BQU1LLFdBQVc7SUFDZixJQUFJO1FBQ0Ysb0JBQW9CO1FBQ3BCLE1BQU1DLFFBQVEsTUFBTUYsc0RBQVFBO1FBRTVCLHdCQUF3QjtRQUN4QixNQUFNRyxjQUFjLElBQUlDLGdCQUFnQjtZQUN0Q0MsZ0JBQWdCO1lBQ2hCQyx3QkFBd0I7UUFDMUIsR0FBR0MsUUFBUTtRQUVYLE1BQU1DLE1BQU0sZ0dBQTRHLE9BQVpMO1FBRTVHLE1BQU1NLHlCQUF5QjtZQUM3QkMsUUFBUTtZQUNSQyxTQUFTO2dCQUNQQyxlQUFlLFVBQWdCLE9BQU5WO2dCQUN6QlcsT0FBT2YseURBQVNBO2dCQUNoQmdCLFFBQVFqQiwyREFBV0E7Z0JBQ25Ca0IsV0FBV2hCLDhEQUFjQTtnQkFDekJpQixVQUFVO1lBQ1o7UUFDRjtRQUVBLE1BQU1DLFdBQVcsTUFBTUMsTUFBTVYsS0FBS0M7UUFFbEMsSUFBSSxDQUFDUSxTQUFTRSxFQUFFLEVBQUU7WUFDaEIsTUFBTSxJQUFJQyxNQUNSLGNBQWlDSCxPQUFuQkEsU0FBU0ksTUFBTSxFQUFDLEtBQXVCLE9BQXBCSixTQUFTSyxVQUFVO1FBRXhEO1FBRUEsTUFBTUMsT0FBTyxNQUFNTixTQUFTTSxJQUFJO1FBQ2hDQyxRQUFRQyxHQUFHLENBQUNSO1FBQ1pPLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFFWiw4QkFBOEI7UUFDOUIsNEJBQTRCO1FBQzVCLDRCQUE0QjtRQUM1QixzQ0FBc0M7UUFFdEMsTUFBTSxFQUFFRyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUUsR0FBR047UUFFMUMsT0FBTztZQUNMTyxZQUFZSDtZQUNaQyxNQUFNQTtZQUNORyxXQUFXRjtRQUNiO0lBQ0YsRUFBRSxPQUFPRyxPQUFPO1FBQ2RSLFFBQVFRLEtBQUssQ0FBQyx3QkFBd0JBO0lBQ3hDO0lBQ0EsTUFBTTlCLFFBQVFGLHNEQUFRQTtJQUN0QixNQUFNUyx5QkFBeUI7UUFDN0JDLFFBQVE7UUFDUkMsU0FBUztZQUNQLGdCQUFnQmYsNERBQVlBO1lBQzVCZ0IsZUFBZVY7WUFDZlcsT0FBT2YseURBQVNBO1lBQ2hCZ0IsUUFBUWpCLDJEQUFXQTtZQUNuQmtCLFdBQVdoQiw4REFBY0E7WUFDekJpQixVQUFVO1FBQ1o7UUFDQWlCLGdCQUFnQkMsS0FBS0MsU0FBUyxDQUFDO1lBQzdCQyxNQUFNO1lBQ05DLGNBQWM7UUFDaEI7SUFDRjtJQUNBLE1BQU1wQyxXQUFXO1FBQ2YsTUFBTU8sTUFDSjtRQUNGLE1BQU1TLFdBQVcsTUFBTUMsTUFBTVYsS0FBS0M7UUFDbEMsTUFBTWMsT0FBTyxNQUFNTixTQUFTTSxJQUFJO1FBQ2hDQyxRQUFRQyxHQUFHLENBQUNSO1FBQ1pPLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFFWixNQUFNRyxTQUFTSCxLQUFLRyxNQUFNO1FBQzFCLE1BQU1DLE9BQU9ELE9BQU9DLElBQUk7UUFDeEIsTUFBTUMsT0FBT0YsT0FBT0UsSUFBSTtRQUN4QixNQUFNQyxZQUFZSCxPQUFPRyxTQUFTO1FBQ2xDLE9BQU87WUFDTEMsWUFBWUg7WUFDWkMsTUFBTUE7WUFDTkcsV0FBV0Y7UUFDYjtJQUNGO0FBQ0Y7QUFDQSwrREFBZTVCLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9tb2R1bGVzL2tpc19zdG9ja19hcGkuanM/NjgzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENPTlRFTlRfVFlQRSxcclxuICBLSVNfQVBQX0tFWSxcclxuICBLSVNfVFJfSUQsXHJcbiAgS0lTX0FQUF9TRUNSRVQsXHJcbn0gZnJvbSBcIi4uL2NvbmZpZy9raXNfc2VjcmV0XCI7XHJcbmltcG9ydCBnZXRUb2tlbiBmcm9tIFwiLi9raXNfdG9rZW5cIjtcclxuXHJcbmNvbnN0IGdldFN0b2NrID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyDruYTrj5nquLDsoIHsnLzroZwg7Yag7YGw7J2EIOqwgOyguOyYteuLiOuLpC5cclxuICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oKTtcclxuXHJcbiAgICAvLyDsv7zrpqwg7YyM652866+47YSw66W8IFVSTOyXkCDtj6ztlajsi5ztgrXri4jri6QuXHJcbiAgICBjb25zdCBxdWVyeVBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xyXG4gICAgICBGSURfSU5QVVRfSVNDRDogXCI5MDAxMDBcIixcclxuICAgICAgRklEX0NPTkRfTVJLVF9ESVZfQ09ERTogXCJKXCIsXHJcbiAgICB9KS50b1N0cmluZygpO1xyXG5cclxuICAgIGNvbnN0IHVybCA9IGBodHRwczovL29wZW5hcGl2dHMua29yZWFpbnZlc3RtZW50LmNvbToyOTQ0My91YXBpL2RvbWVzdGljLXN0b2NrL3YxL3F1b3RhdGlvbnMvaW5xdWlyZS1wcmljZT8ke3F1ZXJ5UGFyYW1zfWA7XHJcblxyXG4gICAgY29uc3Qga2lzR2V0U3RvY2tQZXRjaE9wdGlvbiA9IHtcclxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgdHJfaWQ6IEtJU19UUl9JRCxcclxuICAgICAgICBhcHBrZXk6IEtJU19BUFBfS0VZLFxyXG4gICAgICAgIGFwcHNlY3JldDogS0lTX0FQUF9TRUNSRVQsXHJcbiAgICAgICAgY3VzdHR5cGU6IFwiUFwiLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwga2lzR2V0U3RvY2tQZXRjaE9wdGlvbik7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgYEFQSSDtmLjstpwg7Iuk7YyoOiAke3Jlc3BvbnNlLnN0YXR1c30gJHtyZXNwb25zZS5zdGF0dXNUZXh0fWBcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgY29uc29sZS5sb2coanNvbik7XHJcblxyXG4gICAgLy8gY29uc3Qgb3V0cHV0ID0ganNvbi5vdXRwdXQ7XHJcbiAgICAvLyBjb25zdCBwYXByID0gb3V0cHV0LnBhcHI7XHJcbiAgICAvLyBjb25zdCBwZG5vID0gb3V0cHV0LnBkbm87XHJcbiAgICAvLyBjb25zdCBwcmR0X25hbWUgPSBvdXRwdXQucHJkdF9uYW1lO1xyXG5cclxuICAgIGNvbnN0IHsgb3V0cHV0LCBwYXByLCBwZG5vLCBwcmR0X25hbWUgfSA9IGpzb247XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3RvY2tQcmljZTogcGFwciwgLy8g7JWh66m06rCAXHJcbiAgICAgIHBkbm86IHBkbm8sIC8vIOyDge2SiOuyiO2YuFxyXG4gICAgICBzdG9ja05hbWU6IHByZHRfbmFtZSwgLy8g7IOB7ZKI7J2066aEXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwi7KO87IudIOygleuztOulvCDqsIDsoLjsmKTripQg7KSRIOyYpOulmCDrsJzsg506XCIsIGVycm9yKTtcclxuICB9XHJcbiAgY29uc3QgdG9rZW4gPSBnZXRUb2tlbigpO1xyXG4gIGNvbnN0IGtpc0dldFN0b2NrUGV0Y2hPcHRpb24gPSB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IENPTlRFTlRfVFlQRSxcclxuICAgICAgYXV0aG9yaXphdGlvbjogdG9rZW4sXHJcbiAgICAgIHRyX2lkOiBLSVNfVFJfSUQsXHJcbiAgICAgIGFwcGtleTogS0lTX0FQUF9LRVksXHJcbiAgICAgIGFwcHNlY3JldDogS0lTX0FQUF9TRUNSRVQsXHJcbiAgICAgIGN1c3R0eXBlOiBcIlBcIixcclxuICAgIH0sXHJcbiAgICBxdWVyeVBhcmFtZXRlcjogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBQRE5POiBcIjAwMDY2MFwiLFxyXG4gICAgICBQUkRUX1RZUEVfQ0Q6IFwiMzAwXCIsXHJcbiAgICB9KSxcclxuICB9O1xyXG4gIGNvbnN0IGdldFN0b2NrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgdXJsID1cclxuICAgICAgXCJodHRwczovL29wZW5hcGl2dHMua29yZWFpbnZlc3RtZW50LmNvbToyOTQ0My91YXBpL2RvbWVzdGljLXN0b2NrL3YxL3F1b3RhdGlvbnMvaW5xdWlyZS1wcmljZVwiO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIGtpc0dldFN0b2NrUGV0Y2hPcHRpb24pO1xyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIGNvbnNvbGUubG9nKGpzb24pO1xyXG5cclxuICAgIGNvbnN0IG91dHB1dCA9IGpzb24ub3V0cHV0O1xyXG4gICAgY29uc3QgcGFwciA9IG91dHB1dC5wYXByO1xyXG4gICAgY29uc3QgcGRubyA9IG91dHB1dC5wZG5vO1xyXG4gICAgY29uc3QgcHJkdF9uYW1lID0gb3V0cHV0LnByZHRfbmFtZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN0b2NrUHJpY2U6IHBhcHIsIC8v7JWh66m06rCAXHJcbiAgICAgIHBkbm86IHBkbm8sIC8v7IOB7ZKI67KI7Zi4XHJcbiAgICAgIHN0b2NrTmFtZTogcHJkdF9uYW1lLCAvL+yDge2SiOydtOumhFxyXG4gICAgfTtcclxuICB9O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBnZXRTdG9jaztcclxuIl0sIm5hbWVzIjpbIkNPTlRFTlRfVFlQRSIsIktJU19BUFBfS0VZIiwiS0lTX1RSX0lEIiwiS0lTX0FQUF9TRUNSRVQiLCJnZXRUb2tlbiIsImdldFN0b2NrIiwidG9rZW4iLCJxdWVyeVBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsIkZJRF9JTlBVVF9JU0NEIiwiRklEX0NPTkRfTVJLVF9ESVZfQ09ERSIsInRvU3RyaW5nIiwidXJsIiwia2lzR2V0U3RvY2tQZXRjaE9wdGlvbiIsIm1ldGhvZCIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwidHJfaWQiLCJhcHBrZXkiLCJhcHBzZWNyZXQiLCJjdXN0dHlwZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwib3V0cHV0IiwicGFwciIsInBkbm8iLCJwcmR0X25hbWUiLCJzdG9ja1ByaWNlIiwic3RvY2tOYW1lIiwiZXJyb3IiLCJxdWVyeVBhcmFtZXRlciIsIkpTT04iLCJzdHJpbmdpZnkiLCJQRE5PIiwiUFJEVF9UWVBFX0NEIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/modules/kis_stock_api.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_css_BackgroundVideo_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/css/BackgroundVideo.module.css */ \"(app-pages-browser)/./public/css/BackgroundVideo.module.css\");\n/* harmony import */ var _public_css_BackgroundVideo_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_css_BackgroundVideo_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_kis_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/kis_token */ \"(app-pages-browser)/./src/app/modules/kis_token.js\");\n/* harmony import */ var _modules_kis_stock_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/kis_stock_api */ \"(app-pages-browser)/./src/app/modules/kis_stock_api.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\nconst Home = ()=>{\n    const token = (0,_modules_kis_token__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const stock = (0,_modules_kis_stock_api__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_public_css_BackgroundVideo_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_public_css_BackgroundVideo_module_css__WEBPACK_IMPORTED_MODULE_2___default().videoBackground),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                    src: \"https://www.youtube.com/embed/ExL8jClroLQ?autoplay=1&mute=1&loop=1&playlist=ExL8jClroLQ&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&fs=0&disablekb=1\",\n                    frameBorder: \"0\",\n                    allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\",\n                    allowFullScreen: true,\n                    referrerPolicy: \"strict-origin-when-cross-origin\",\n                    className: (_public_css_BackgroundVideo_module_css__WEBPACK_IMPORTED_MODULE_2___default().videoIframe)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\KMS505303\\\\Documents\\\\GitHub\\\\jusik\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\KMS505303\\\\Documents\\\\GitHub\\\\jusik\\\\src\\\\app\\\\page.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_public_css_BackgroundVideo_module_css__WEBPACK_IMPORTED_MODULE_2___default().content),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_public_css_BackgroundVideo_module_css__WEBPACK_IMPORTED_MODULE_2___default().fs5x),\n                        children: \"Jusik\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\KMS505303\\\\Documents\\\\GitHub\\\\jusik\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                        className: (_public_css_BackgroundVideo_module_css__WEBPACK_IMPORTED_MODULE_2___default().fs3x),\n                        children: [\n                            token,\n                            stock\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\KMS505303\\\\Documents\\\\GitHub\\\\jusik\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\KMS505303\\\\Documents\\\\GitHub\\\\jusik\\\\src\\\\app\\\\page.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\KMS505303\\\\Documents\\\\GitHub\\\\jusik\\\\src\\\\app\\\\page.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDMEI7QUFDdUM7QUFDdEI7QUFDSTtBQUNIO0FBRTVDLE1BQU1NLE9BQU87SUFDWCxNQUFNQyxRQUFRTCw4REFBUUE7SUFDdEIsTUFBTU0sUUFBUUwsa0VBQVFBO0lBRXRCLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFXVCx5RkFBZ0I7OzBCQUM5Qiw4REFBQ1E7Z0JBQUlDLFdBQVdULCtGQUFzQjswQkFDcEMsNEVBQUNZO29CQUNDQyxLQUFJO29CQUNKQyxhQUFZO29CQUNaQyxPQUFNO29CQUNOQyxlQUFlO29CQUNmQyxnQkFBZTtvQkFDZlIsV0FBV1QsMkZBQWtCOzs7Ozs7Ozs7OzswQkFHakMsOERBQUNRO2dCQUFJQyxXQUFXVCx1RkFBYzs7a0NBQzVCLDhEQUFDb0I7d0JBQUdYLFdBQVdULG9GQUFXO2tDQUFFOzs7Ozs7a0NBQzVCLDhEQUFDc0I7d0JBQUViLFdBQVdULG9GQUFXOzs0QkFDdEJNOzRCQUNBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtYO0tBekJNRjtBQTBCTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanM/MmIzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9wdWJsaWMvY3NzL0JhY2tncm91bmRWaWRlby5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBnZXRUb2tlbiBmcm9tIFwiLi9tb2R1bGVzL2tpc190b2tlblwiO1xyXG5pbXBvcnQgZ2V0U3RvY2sgZnJvbSBcIi4vbW9kdWxlcy9raXNfc3RvY2tfYXBpXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9rZW4gPSBnZXRUb2tlbigpO1xyXG4gIGNvbnN0IHN0b2NrID0gZ2V0U3RvY2soKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWRlb0JhY2tncm91bmR9PlxyXG4gICAgICAgIDxpZnJhbWVcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL0V4TDhqQ2xyb0xRP2F1dG9wbGF5PTEmbXV0ZT0xJmxvb3A9MSZwbGF5bGlzdD1FeEw4akNscm9MUSZjb250cm9scz0wJm1vZGVzdGJyYW5kaW5nPTEmcmVsPTAmc2hvd2luZm89MCZpdl9sb2FkX3BvbGljeT0zJmZzPTAmZGlzYWJsZWtiPTFcIlxyXG4gICAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcclxuICAgICAgICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZTsgd2ViLXNoYXJlXCJcclxuICAgICAgICAgIGFsbG93RnVsbFNjcmVlblxyXG4gICAgICAgICAgcmVmZXJyZXJQb2xpY3k9XCJzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnZpZGVvSWZyYW1lfVxyXG4gICAgICAgID48L2lmcmFtZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmZzNXh9Pkp1c2lrPC9oMT5cclxuICAgICAgICA8YiBjbGFzc05hbWU9e3N0eWxlcy5mczN4fT5cclxuICAgICAgICAgIHt0b2tlbn1cclxuICAgICAgICAgIHtzdG9ja31cclxuICAgICAgICA8L2I+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiZ2V0VG9rZW4iLCJnZXRTdG9jayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSG9tZSIsInRva2VuIiwic3RvY2siLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ2aWRlb0JhY2tncm91bmQiLCJpZnJhbWUiLCJzcmMiLCJmcmFtZUJvcmRlciIsImFsbG93IiwiYWxsb3dGdWxsU2NyZWVuIiwicmVmZXJyZXJQb2xpY3kiLCJ2aWRlb0lmcmFtZSIsImNvbnRlbnQiLCJoMSIsImZzNXgiLCJiIiwiZnMzeCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});
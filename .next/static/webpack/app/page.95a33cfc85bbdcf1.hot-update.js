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

/***/ "(app-pages-browser)/./src/app/modules/kis_token.js":
/*!**************************************!*\
  !*** ./src/app/modules/kis_token.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_kis_secret__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/kis_secret */ \"(app-pages-browser)/./src/app/config/kis_secret.js\");\n\nconst kisTokenFetchOption = {\n    method: \"POST\",\n    body: JSON.stringify({\n        grant_type: \"client_credentials\",\n        appkey: _config_kis_secret__WEBPACK_IMPORTED_MODULE_0__.KIS_APP_KEY,\n        appsecret: _config_kis_secret__WEBPACK_IMPORTED_MODULE_0__.KIS_APP_SECRET\n    })\n};\nconst getToken = ()=>{\n    try {\n        const queryString = \"https://openapivts.koreainvestment.com:29443/oauth2/tokenP\";\n        const response = fetch(queryString, kisTokenFetchOption);\n        const json = response.json();\n        const accessToken = json.access_token;\n        const tokenType = json.token_type; // \"Bearer\"\n        const expiresIn = json.expires_in; // 유효 기간(초)\n        const tokenExpiryTime = json.access_token_token_expired;\n        return tokenType + accessToken;\n    } catch (error) {}\n}; /*\r\nconst kisTokenFetchOption = {\r\n  method: \"POST\",\r\n  headers: {\r\n    \"Content-Type\": \"application/json\",\r\n  },\r\n  body: JSON.stringify({\r\n    grant_type: KIS_GRANT_TYPE,\r\n    appkey: KIS_APP_KEY,\r\n    appsecret: KIS_APP_SECRET,\r\n  }),\r\n};\r\n\r\nconst getToken = async () => {\r\n  try {\r\n    const queryString = `${KIS_TOKEN_URL}`;\r\n    const response = await fetch(queryString, kisTokenFetchOption);\r\n\r\n    if (!response.ok) {\r\n      throw new Error(\"토큰 요청 실패\");\r\n    }\r\n\r\n    const json = await response.json();\r\n    const accessToken = json.access_token;\r\n    const tokenType = json.token_type; // \"Bearer\"\r\n    const expiresIn = json.expires_in; // 유효 기간(초)\r\n    const tokenExpiryTime = json.access_token_token_expired;\r\n\r\n    console.log(\"Access Token:\", accessToken);\r\n\r\n    console.log(\"Bearer \" + accessToken);\r\n    return accessToken;\r\n  } catch (error) {\r\n    console.error(\"Error fetching token:\", error);\r\n  }\r\n};\r\n\r\nexport default getToken;*/ \n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbW9kdWxlcy9raXNfdG9rZW4uanMiLCJtYXBwaW5ncyI6Ijs7QUFLOEI7QUFFOUIsTUFBTUksc0JBQXNCO0lBQzFCQyxRQUFRO0lBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztRQUNuQkMsWUFBWTtRQUNaQyxRQUFRVCwyREFBV0E7UUFDbkJVLFdBQVdULDhEQUFjQTtJQUMzQjtBQUNGO0FBRUEsTUFBTVUsV0FBVztJQUNmLElBQUk7UUFDRixNQUFNQyxjQUNKO1FBQ0YsTUFBTUMsV0FBV0MsTUFBTUYsYUFBYVQ7UUFDcEMsTUFBTVksT0FBT0YsU0FBU0UsSUFBSTtRQUMxQixNQUFNQyxjQUFjRCxLQUFLRSxZQUFZO1FBQ3JDLE1BQU1DLFlBQVlILEtBQUtJLFVBQVUsRUFBRSxXQUFXO1FBQzlDLE1BQU1DLFlBQVlMLEtBQUtNLFVBQVUsRUFBRSxXQUFXO1FBQzlDLE1BQU1DLGtCQUFrQlAsS0FBS1EsMEJBQTBCO1FBRXZELE9BQU9MLFlBQVlGO0lBQ3JCLEVBQUUsT0FBT1EsT0FBTyxDQUFDO0FBQ25CLEdBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBcUN3QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL21vZHVsZXMva2lzX3Rva2VuLmpzPzczZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBLSVNfR1JBTlRfVFlQRSxcclxuICBLSVNfQVBQX0tFWSxcclxuICBLSVNfQVBQX1NFQ1JFVCxcclxuICBLSVNfVE9LRU5fVVJMLFxyXG59IGZyb20gXCIuLi9jb25maWcva2lzX3NlY3JldFwiO1xyXG5cclxuY29uc3Qga2lzVG9rZW5GZXRjaE9wdGlvbiA9IHtcclxuICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgIGdyYW50X3R5cGU6IFwiY2xpZW50X2NyZWRlbnRpYWxzXCIsXHJcbiAgICBhcHBrZXk6IEtJU19BUFBfS0VZLFxyXG4gICAgYXBwc2VjcmV0OiBLSVNfQVBQX1NFQ1JFVCxcclxuICB9KSxcclxufTtcclxuXHJcbmNvbnN0IGdldFRva2VuID0gKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9XHJcbiAgICAgIFwiaHR0cHM6Ly9vcGVuYXBpdnRzLmtvcmVhaW52ZXN0bWVudC5jb206Mjk0NDMvb2F1dGgyL3Rva2VuUFwiO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBmZXRjaChxdWVyeVN0cmluZywga2lzVG9rZW5GZXRjaE9wdGlvbik7XHJcbiAgICBjb25zdCBqc29uID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBqc29uLmFjY2Vzc190b2tlbjtcclxuICAgIGNvbnN0IHRva2VuVHlwZSA9IGpzb24udG9rZW5fdHlwZTsgLy8gXCJCZWFyZXJcIlxyXG4gICAgY29uc3QgZXhwaXJlc0luID0ganNvbi5leHBpcmVzX2luOyAvLyDsnKDtmqgg6riw6rCEKOy0iClcclxuICAgIGNvbnN0IHRva2VuRXhwaXJ5VGltZSA9IGpzb24uYWNjZXNzX3Rva2VuX3Rva2VuX2V4cGlyZWQ7XHJcblxyXG4gICAgcmV0dXJuIHRva2VuVHlwZSArIGFjY2Vzc1Rva2VuO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7fVxyXG59O1xyXG4vKlxyXG5jb25zdCBraXNUb2tlbkZldGNoT3B0aW9uID0ge1xyXG4gIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgfSxcclxuICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICBncmFudF90eXBlOiBLSVNfR1JBTlRfVFlQRSxcclxuICAgIGFwcGtleTogS0lTX0FQUF9LRVksXHJcbiAgICBhcHBzZWNyZXQ6IEtJU19BUFBfU0VDUkVULFxyXG4gIH0pLFxyXG59O1xyXG5cclxuY29uc3QgZ2V0VG9rZW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gYCR7S0lTX1RPS0VOX1VSTH1gO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChxdWVyeVN0cmluZywga2lzVG9rZW5GZXRjaE9wdGlvbik7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCLthqDtgbAg7JqU7LKtIOyLpO2MqFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBqc29uLmFjY2Vzc190b2tlbjtcclxuICAgIGNvbnN0IHRva2VuVHlwZSA9IGpzb24udG9rZW5fdHlwZTsgLy8gXCJCZWFyZXJcIlxyXG4gICAgY29uc3QgZXhwaXJlc0luID0ganNvbi5leHBpcmVzX2luOyAvLyDsnKDtmqgg6riw6rCEKOy0iClcclxuICAgIGNvbnN0IHRva2VuRXhwaXJ5VGltZSA9IGpzb24uYWNjZXNzX3Rva2VuX3Rva2VuX2V4cGlyZWQ7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJBY2Nlc3MgVG9rZW46XCIsIGFjY2Vzc1Rva2VuKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIkJlYXJlciBcIiArIGFjY2Vzc1Rva2VuKTtcclxuICAgIHJldHVybiBhY2Nlc3NUb2tlbjtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRva2VuOlwiLCBlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0VG9rZW47Ki9cclxuIl0sIm5hbWVzIjpbIktJU19HUkFOVF9UWVBFIiwiS0lTX0FQUF9LRVkiLCJLSVNfQVBQX1NFQ1JFVCIsIktJU19UT0tFTl9VUkwiLCJraXNUb2tlbkZldGNoT3B0aW9uIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJncmFudF90eXBlIiwiYXBwa2V5IiwiYXBwc2VjcmV0IiwiZ2V0VG9rZW4iLCJxdWVyeVN0cmluZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiYWNjZXNzVG9rZW4iLCJhY2Nlc3NfdG9rZW4iLCJ0b2tlblR5cGUiLCJ0b2tlbl90eXBlIiwiZXhwaXJlc0luIiwiZXhwaXJlc19pbiIsInRva2VuRXhwaXJ5VGltZSIsImFjY2Vzc190b2tlbl90b2tlbl9leHBpcmVkIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/modules/kis_token.js\n"));

/***/ })

});
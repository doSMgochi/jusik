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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_kis_secret__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/kis_secret */ \"(app-pages-browser)/./src/app/config/kis_secret.js\");\n\nconst kisTokenFetchOption = {\n    method: \"POST\",\n    body: JSON.stringify({\n        grant_type: \"client_credentials\",\n        appkey: _config_kis_secret__WEBPACK_IMPORTED_MODULE_0__.KIS_APP_KEY,\n        appsecret: _config_kis_secret__WEBPACK_IMPORTED_MODULE_0__.KIS_APP_SECRET\n    })\n};\nconst getToken = async ()=>{\n    try {\n        const tokenUrl = \"https://openapivts.koreainvestment.com:29443/oauth2/tokenP\";\n        const response = await fetch(tokenUrl, kisTokenFetchOption);\n        if (!response.ok) {\n            throw new Error(\"토큰 요청 실패\");\n        }\n        const json = await response.json();\n        body: {\n            const accessToken1 = json.access_token;\n            const tokenType1 = json.token_type; // \"Bearer\"\n            const expiresIn = json.expires_in; // 유효 기간(초)\n            const tokenExpiryTime = json.acess_token_token_expired;\n        }\n        console.log(\"Access Token:\", accessToken);\n        console.log(\"Bearer \" + accessToken);\n        return tokenType + accessToken;\n    } catch (error) {\n        console.error(\"Error fetching token:\", error);\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (getToken);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbW9kdWxlcy9raXNfdG9rZW4uanMiLCJtYXBwaW5ncyI6Ijs7QUFBbUU7QUFFbkUsTUFBTUUsc0JBQXNCO0lBQzFCQyxRQUFRO0lBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztRQUNuQkMsWUFBWTtRQUNaQyxRQUFRUiwyREFBV0E7UUFDbkJTLFdBQVdSLDhEQUFjQTtJQUMzQjtBQUNGO0FBRUEsTUFBTVMsV0FBVztJQUNmLElBQUk7UUFDRixNQUFNQyxXQUNKO1FBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNRixVQUFVVDtRQUV2QyxJQUFJLENBQUNVLFNBQVNFLEVBQUUsRUFBRTtZQUNoQixNQUFNLElBQUlDLE1BQU07UUFDbEI7UUFDQSxNQUFNQyxPQUFPLE1BQU1KLFNBQVNJLElBQUk7UUFDaENaLE1BQU07WUFDSixNQUFNYSxlQUFjRCxLQUFLRSxZQUFZO1lBQ3JDLE1BQU1DLGFBQVlILEtBQUtJLFVBQVUsRUFBRSxXQUFXO1lBQzlDLE1BQU1DLFlBQVlMLEtBQUtNLFVBQVUsRUFBRSxXQUFXO1lBQzlDLE1BQU1DLGtCQUFrQlAsS0FBS1EseUJBQXlCO1FBQ3hEO1FBQ0FDLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJUO1FBRTdCUSxRQUFRQyxHQUFHLENBQUMsWUFBWVQ7UUFDeEIsT0FBT0UsWUFBWUY7SUFDckIsRUFBRSxPQUFPVSxPQUFPO1FBQ2RGLFFBQVFFLEtBQUssQ0FBQyx5QkFBeUJBO0lBQ3pDO0FBQ0Y7QUFDQSwrREFBZWpCLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9tb2R1bGVzL2tpc190b2tlbi5qcz83M2RjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEtJU19BUFBfS0VZLCBLSVNfQVBQX1NFQ1JFVCB9IGZyb20gXCIuLi9jb25maWcva2lzX3NlY3JldFwiO1xyXG5cclxuY29uc3Qga2lzVG9rZW5GZXRjaE9wdGlvbiA9IHtcclxuICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgIGdyYW50X3R5cGU6IFwiY2xpZW50X2NyZWRlbnRpYWxzXCIsXHJcbiAgICBhcHBrZXk6IEtJU19BUFBfS0VZLFxyXG4gICAgYXBwc2VjcmV0OiBLSVNfQVBQX1NFQ1JFVCxcclxuICB9KSxcclxufTtcclxuXHJcbmNvbnN0IGdldFRva2VuID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB0b2tlblVybCA9XHJcbiAgICAgIFwiaHR0cHM6Ly9vcGVuYXBpdnRzLmtvcmVhaW52ZXN0bWVudC5jb206Mjk0NDMvb2F1dGgyL3Rva2VuUFwiO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0b2tlblVybCwga2lzVG9rZW5GZXRjaE9wdGlvbik7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCLthqDtgbAg7JqU7LKtIOyLpO2MqFwiKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBib2R5OiB7XHJcbiAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0ganNvbi5hY2Nlc3NfdG9rZW47XHJcbiAgICAgIGNvbnN0IHRva2VuVHlwZSA9IGpzb24udG9rZW5fdHlwZTsgLy8gXCJCZWFyZXJcIlxyXG4gICAgICBjb25zdCBleHBpcmVzSW4gPSBqc29uLmV4cGlyZXNfaW47IC8vIOycoO2aqCDquLDqsIQo7LSIKVxyXG4gICAgICBjb25zdCB0b2tlbkV4cGlyeVRpbWUgPSBqc29uLmFjZXNzX3Rva2VuX3Rva2VuX2V4cGlyZWQ7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcIkFjY2VzcyBUb2tlbjpcIiwgYWNjZXNzVG9rZW4pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiQmVhcmVyIFwiICsgYWNjZXNzVG9rZW4pO1xyXG4gICAgcmV0dXJuIHRva2VuVHlwZSArIGFjY2Vzc1Rva2VuO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdG9rZW46XCIsIGVycm9yKTtcclxuICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGdldFRva2VuO1xyXG4iXSwibmFtZXMiOlsiS0lTX0FQUF9LRVkiLCJLSVNfQVBQX1NFQ1JFVCIsImtpc1Rva2VuRmV0Y2hPcHRpb24iLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImdyYW50X3R5cGUiLCJhcHBrZXkiLCJhcHBzZWNyZXQiLCJnZXRUb2tlbiIsInRva2VuVXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJqc29uIiwiYWNjZXNzVG9rZW4iLCJhY2Nlc3NfdG9rZW4iLCJ0b2tlblR5cGUiLCJ0b2tlbl90eXBlIiwiZXhwaXJlc0luIiwiZXhwaXJlc19pbiIsInRva2VuRXhwaXJ5VGltZSIsImFjZXNzX3Rva2VuX3Rva2VuX2V4cGlyZWQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/modules/kis_token.js\n"));

/***/ })

});
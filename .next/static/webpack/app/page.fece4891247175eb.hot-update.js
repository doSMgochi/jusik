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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_kis_secret__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/kis_secret */ \"(app-pages-browser)/./src/app/config/kis_secret.js\");\n\n// fetchToken\nconst kisSocketFetchOption = {\n    method: \"POST\",\n    headers: {\n        \"Content-Type\": \"application/json; charset=UTF-8\"\n    },\n    body: JSON.stringify({\n        grant_type: \"client_credentials\",\n        appkey: _config_kis_secret__WEBPACK_IMPORTED_MODULE_0__.KIS_APP_KEY,\n        appsecret: _config_kis_secret__WEBPACK_IMPORTED_MODULE_0__.KIS_APP_SECRET\n    })\n};\nconst getSocket = async ()=>{\n    try {\n        const queryString = \"https://openapivts.koreainvestment.com:29443/oauth2/Approval\";\n        const response = await fetch(queryString, kisSocketFetchOption);\n        const json = await response.json();\n        const approvalKey = json.approval_key;\n        console.log(accessToken);\n        return \"Bearer \" + approvalKey;\n    } catch (error) {\n        console.log(\"Error fetching token:\", error);\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (getToken); //토큰을 발급 받는 함수\n /*\r\nconst kisTokenFetchOption = {\r\n  method: \"POST\",\r\n  headers: {\r\n    \"Content-Type\": \"application/json\",\r\n  },\r\n  body: JSON.stringify({\r\n    grant_type: KIS_GRANT_TYPE,\r\n    appkey: KIS_APP_KEY,\r\n    appsecret: KIS_APP_SECRET,\r\n  }),\r\n};\r\n\r\nconst getToken = async () => {\r\n  try {\r\n    const queryString = `${KIS_TOKEN_URL}`;\r\n    const response = await fetch(queryString, kisTokenFetchOption);\r\n\r\n    if (!response.ok) {\r\n      throw new Error(\"토큰 요청 실패\");\r\n    }\r\n\r\n    const json = await response.json();\r\n    const accessToken = json.access_token;\r\n    const tokenType = json.token_type; // \"Bearer\"\r\n    const expiresIn = json.expires_in; // 유효 기간(초)\r\n    const tokenExpiryTime = json.access_token_token_expired;\r\n\r\n    console.log(\"Access Token:\", accessToken);\r\n\r\n    console.log(\"Bearer \" + accessToken);\r\n    return accessToken;\r\n  } catch (error) {\r\n    console.error(\"Error fetching token:\", error);\r\n  }\r\n};\r\n\r\nexport default getToken;*/ \n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbW9kdWxlcy9raXNfdG9rZW4uanMiLCJtYXBwaW5ncyI6Ijs7QUFBbUU7QUFFbkUsYUFBYTtBQUNiLE1BQU1FLHVCQUF1QjtJQUMzQkMsUUFBUTtJQUNSQyxTQUFTO1FBQ1AsZ0JBQWdCO0lBQ2xCO0lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztRQUNuQkMsWUFBWTtRQUNaQyxRQUFRVCwyREFBV0E7UUFDbkJVLFdBQVdULDhEQUFjQTtJQUMzQjtBQUNGO0FBRUEsTUFBTVUsWUFBWTtJQUNoQixJQUFJO1FBQ0YsTUFBTUMsY0FDSjtRQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTUYsYUFBYVY7UUFDMUMsTUFBTWEsT0FBTyxNQUFNRixTQUFTRSxJQUFJO1FBRWhDLE1BQU1DLGNBQWNELEtBQUtFLFlBQVk7UUFFckNDLFFBQVFDLEdBQUcsQ0FBQ0M7UUFDWixPQUFPLFlBQVlKO0lBQ3JCLEVBQUUsT0FBT0ssT0FBTztRQUNkSCxRQUFRQyxHQUFHLENBQUMseUJBQXlCRTtJQUN2QztBQUNGO0FBQ0EsK0RBQWVDLFFBQVFBLEVBQUMsQ0FDeEIsY0FBYztDQUVkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQXFDd0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9tb2R1bGVzL2tpc190b2tlbi5qcz83M2RjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEtJU19BUFBfS0VZLCBLSVNfQVBQX1NFQ1JFVCB9IGZyb20gXCIuLi9jb25maWcva2lzX3NlY3JldFwiO1xyXG5cclxuLy8gZmV0Y2hUb2tlblxyXG5jb25zdCBraXNTb2NrZXRGZXRjaE9wdGlvbiA9IHtcclxuICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiLFxyXG4gIH0sXHJcbiAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgZ3JhbnRfdHlwZTogXCJjbGllbnRfY3JlZGVudGlhbHNcIixcclxuICAgIGFwcGtleTogS0lTX0FQUF9LRVksXHJcbiAgICBhcHBzZWNyZXQ6IEtJU19BUFBfU0VDUkVULFxyXG4gIH0pLFxyXG59O1xyXG5cclxuY29uc3QgZ2V0U29ja2V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9XHJcbiAgICAgIFwiaHR0cHM6Ly9vcGVuYXBpdnRzLmtvcmVhaW52ZXN0bWVudC5jb206Mjk0NDMvb2F1dGgyL0FwcHJvdmFsXCI7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHF1ZXJ5U3RyaW5nLCBraXNTb2NrZXRGZXRjaE9wdGlvbik7XHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGNvbnN0IGFwcHJvdmFsS2V5ID0ganNvbi5hcHByb3ZhbF9rZXk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYWNjZXNzVG9rZW4pO1xyXG4gICAgcmV0dXJuIFwiQmVhcmVyIFwiICsgYXBwcm92YWxLZXk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZmV0Y2hpbmcgdG9rZW46XCIsIGVycm9yKTtcclxuICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGdldFRva2VuO1xyXG4vL+2GoO2BsOydhCDrsJzquIkg67Cb64qUIO2VqOyImFxyXG5cclxuLypcclxuY29uc3Qga2lzVG9rZW5GZXRjaE9wdGlvbiA9IHtcclxuICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIH0sXHJcbiAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgZ3JhbnRfdHlwZTogS0lTX0dSQU5UX1RZUEUsXHJcbiAgICBhcHBrZXk6IEtJU19BUFBfS0VZLFxyXG4gICAgYXBwc2VjcmV0OiBLSVNfQVBQX1NFQ1JFVCxcclxuICB9KSxcclxufTtcclxuXHJcbmNvbnN0IGdldFRva2VuID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IGAke0tJU19UT0tFTl9VUkx9YDtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocXVlcnlTdHJpbmcsIGtpc1Rva2VuRmV0Y2hPcHRpb24pO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwi7Yag7YGwIOyalOyyrSDsi6TtjKhcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0ganNvbi5hY2Nlc3NfdG9rZW47XHJcbiAgICBjb25zdCB0b2tlblR5cGUgPSBqc29uLnRva2VuX3R5cGU7IC8vIFwiQmVhcmVyXCJcclxuICAgIGNvbnN0IGV4cGlyZXNJbiA9IGpzb24uZXhwaXJlc19pbjsgLy8g7Jyg7ZqoIOq4sOqwhCjstIgpXHJcbiAgICBjb25zdCB0b2tlbkV4cGlyeVRpbWUgPSBqc29uLmFjY2Vzc190b2tlbl90b2tlbl9leHBpcmVkO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiQWNjZXNzIFRva2VuOlwiLCBhY2Nlc3NUb2tlbik7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJCZWFyZXIgXCIgKyBhY2Nlc3NUb2tlbik7XHJcbiAgICByZXR1cm4gYWNjZXNzVG9rZW47XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB0b2tlbjpcIiwgZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldFRva2VuOyovXHJcbiJdLCJuYW1lcyI6WyJLSVNfQVBQX0tFWSIsIktJU19BUFBfU0VDUkVUIiwia2lzU29ja2V0RmV0Y2hPcHRpb24iLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJncmFudF90eXBlIiwiYXBwa2V5IiwiYXBwc2VjcmV0IiwiZ2V0U29ja2V0IiwicXVlcnlTdHJpbmciLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImFwcHJvdmFsS2V5IiwiYXBwcm92YWxfa2V5IiwiY29uc29sZSIsImxvZyIsImFjY2Vzc1Rva2VuIiwiZXJyb3IiLCJnZXRUb2tlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/modules/kis_token.js\n"));

/***/ })

});
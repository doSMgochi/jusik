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

/***/ "(app-pages-browser)/./src/app/modules/kis_socket.js":
/*!***************************************!*\
  !*** ./src/app/modules/kis_socket.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_kis_secret__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/kis_secret */ \"(app-pages-browser)/./src/app/config/kis_secret.js\");\n\n// fetchToken\nconst kisSocketFetchOption = {\n    method: \"POST\",\n    headers: {\n        \"Content-Type\": \"application/json; charset=UTF-8\"\n    },\n    body: JSON.stringify({\n        grant_type: \"client_credentials\",\n        appkey: _config_kis_secret__WEBPACK_IMPORTED_MODULE_0__.KIS_APP_KEY,\n        appsecret: _config_kis_secret__WEBPACK_IMPORTED_MODULE_0__.KIS_APP_SECRET\n    })\n};\nconst getSocket = async ()=>{\n    try {\n        const queryString = \"https://openapivts.koreainvestment.com:29443/oauth2/Approval\";\n        const response = await fetch(queryString, kisSocketFetchOption);\n        const json = await response.json();\n        const approvalKey = json.approval_key;\n        console.log(approvalKey);\n        return \"Bearer \" + approvalKey;\n    } catch (error) {\n        console.log(\"Error fetching socket:\", error);\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (getSocket); //토큰을 발급 받는 함수\n /*\r\nconst kisTokenFetchOption = {\r\n  method: \"POST\",\r\n  headers: {\r\n    \"Content-Type\": \"application/json\",\r\n  },\r\n  body: JSON.stringify({\r\n    grant_type: KIS_GRANT_TYPE,\r\n    appkey: KIS_APP_KEY,\r\n    appsecret: KIS_APP_SECRET,\r\n  }),\r\n};\r\n\r\nconst getToken = async () => {\r\n  try {\r\n    const queryString = `${KIS_TOKEN_URL}`;\r\n    const response = await fetch(queryString, kisTokenFetchOption);\r\n\r\n    if (!response.ok) {\r\n      throw new Error(\"토큰 요청 실패\");\r\n    }\r\n\r\n    const json = await response.json();\r\n    const accessToken = json.access_token;\r\n    const tokenType = json.token_type; // \"Bearer\"\r\n    const expiresIn = json.expires_in; // 유효 기간(초)\r\n    const tokenExpiryTime = json.access_token_token_expired;\r\n\r\n    console.log(\"Access Token:\", accessToken);\r\n\r\n    console.log(\"Bearer \" + accessToken);\r\n    return accessToken;\r\n  } catch (error) {\r\n    console.error(\"Error fetching token:\", error);\r\n  }\r\n};\r\n\r\nexport default getToken;*/ \n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbW9kdWxlcy9raXNfc29ja2V0LmpzIiwibWFwcGluZ3MiOiI7O0FBQW1FO0FBRW5FLGFBQWE7QUFDYixNQUFNRSx1QkFBdUI7SUFDM0JDLFFBQVE7SUFDUkMsU0FBUztRQUNQLGdCQUFnQjtJQUNsQjtJQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7UUFDbkJDLFlBQVk7UUFDWkMsUUFBUVQsMkRBQVdBO1FBQ25CVSxXQUFXVCw4REFBY0E7SUFDM0I7QUFDRjtBQUVBLE1BQU1VLFlBQVk7SUFDaEIsSUFBSTtRQUNGLE1BQU1DLGNBQ0o7UUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU1GLGFBQWFWO1FBQzFDLE1BQU1hLE9BQU8sTUFBTUYsU0FBU0UsSUFBSTtRQUNoQyxNQUFNQyxjQUFjRCxLQUFLRSxZQUFZO1FBRXJDQyxRQUFRQyxHQUFHLENBQUNIO1FBQ1osT0FBTyxZQUFZQTtJQUNyQixFQUFFLE9BQU9JLE9BQU87UUFDZEYsUUFBUUMsR0FBRyxDQUFDLDBCQUEwQkM7SUFDeEM7QUFDRjtBQUNBLCtEQUFlVCxTQUFTQSxFQUFDLENBQ3pCLGNBQWM7Q0FFZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFxQ3dCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbW9kdWxlcy9raXNfc29ja2V0LmpzPzQ3MWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS0lTX0FQUF9LRVksIEtJU19BUFBfU0VDUkVUIH0gZnJvbSBcIi4uL2NvbmZpZy9raXNfc2VjcmV0XCI7XHJcblxyXG4vLyBmZXRjaFRva2VuXHJcbmNvbnN0IGtpc1NvY2tldEZldGNoT3B0aW9uID0ge1xyXG4gIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04XCIsXHJcbiAgfSxcclxuICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICBncmFudF90eXBlOiBcImNsaWVudF9jcmVkZW50aWFsc1wiLFxyXG4gICAgYXBwa2V5OiBLSVNfQVBQX0tFWSxcclxuICAgIGFwcHNlY3JldDogS0lTX0FQUF9TRUNSRVQsXHJcbiAgfSksXHJcbn07XHJcblxyXG5jb25zdCBnZXRTb2NrZXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID1cclxuICAgICAgXCJodHRwczovL29wZW5hcGl2dHMua29yZWFpbnZlc3RtZW50LmNvbToyOTQ0My9vYXV0aDIvQXBwcm92YWxcIjtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocXVlcnlTdHJpbmcsIGtpc1NvY2tldEZldGNoT3B0aW9uKTtcclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zdCBhcHByb3ZhbEtleSA9IGpzb24uYXBwcm92YWxfa2V5O1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGFwcHJvdmFsS2V5KTtcclxuICAgIHJldHVybiBcIkJlYXJlciBcIiArIGFwcHJvdmFsS2V5O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkVycm9yIGZldGNoaW5nIHNvY2tldDpcIiwgZXJyb3IpO1xyXG4gIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZ2V0U29ja2V0O1xyXG4vL+2GoO2BsOydhCDrsJzquIkg67Cb64qUIO2VqOyImFxyXG5cclxuLypcclxuY29uc3Qga2lzVG9rZW5GZXRjaE9wdGlvbiA9IHtcclxuICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIH0sXHJcbiAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgZ3JhbnRfdHlwZTogS0lTX0dSQU5UX1RZUEUsXHJcbiAgICBhcHBrZXk6IEtJU19BUFBfS0VZLFxyXG4gICAgYXBwc2VjcmV0OiBLSVNfQVBQX1NFQ1JFVCxcclxuICB9KSxcclxufTtcclxuXHJcbmNvbnN0IGdldFRva2VuID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IGAke0tJU19UT0tFTl9VUkx9YDtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocXVlcnlTdHJpbmcsIGtpc1Rva2VuRmV0Y2hPcHRpb24pO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwi7Yag7YGwIOyalOyyrSDsi6TtjKhcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0ganNvbi5hY2Nlc3NfdG9rZW47XHJcbiAgICBjb25zdCB0b2tlblR5cGUgPSBqc29uLnRva2VuX3R5cGU7IC8vIFwiQmVhcmVyXCJcclxuICAgIGNvbnN0IGV4cGlyZXNJbiA9IGpzb24uZXhwaXJlc19pbjsgLy8g7Jyg7ZqoIOq4sOqwhCjstIgpXHJcbiAgICBjb25zdCB0b2tlbkV4cGlyeVRpbWUgPSBqc29uLmFjY2Vzc190b2tlbl90b2tlbl9leHBpcmVkO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiQWNjZXNzIFRva2VuOlwiLCBhY2Nlc3NUb2tlbik7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJCZWFyZXIgXCIgKyBhY2Nlc3NUb2tlbik7XHJcbiAgICByZXR1cm4gYWNjZXNzVG9rZW47XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB0b2tlbjpcIiwgZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldFRva2VuOyovXHJcbiJdLCJuYW1lcyI6WyJLSVNfQVBQX0tFWSIsIktJU19BUFBfU0VDUkVUIiwia2lzU29ja2V0RmV0Y2hPcHRpb24iLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJncmFudF90eXBlIiwiYXBwa2V5IiwiYXBwc2VjcmV0IiwiZ2V0U29ja2V0IiwicXVlcnlTdHJpbmciLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImFwcHJvdmFsS2V5IiwiYXBwcm92YWxfa2V5IiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/modules/kis_socket.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_css_BackgroundVideo_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/css/BackgroundVideo.module.css */ \"(app-pages-browser)/./public/css/BackgroundVideo.module.css\");\n/* harmony import */ var _public_css_BackgroundVideo_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_css_BackgroundVideo_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_kis_socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/kis_socket */ \"(app-pages-browser)/./src/app/modules/kis_socket.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nconst Home = ()=>{\n    const token = (0,_modules_kis_socket__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_public_css_BackgroundVideo_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_public_css_BackgroundVideo_module_css__WEBPACK_IMPORTED_MODULE_2___default().videoBackground),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                    src: \"https://www.youtube.com/embed/ExL8jClroLQ?autoplay=1&mute=1&loop=1&playlist=ExL8jClroLQ&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&fs=0&disablekb=1\",\n                    frameBorder: \"0\",\n                    allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\",\n                    allowFullScreen: true,\n                    referrerPolicy: \"strict-origin-when-cross-origin\",\n                    className: (_public_css_BackgroundVideo_module_css__WEBPACK_IMPORTED_MODULE_2___default().videoIframe)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\KMS505303\\\\Documents\\\\GitHub\\\\jusik\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\KMS505303\\\\Documents\\\\GitHub\\\\jusik\\\\src\\\\app\\\\page.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_public_css_BackgroundVideo_module_css__WEBPACK_IMPORTED_MODULE_2___default().content),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_public_css_BackgroundVideo_module_css__WEBPACK_IMPORTED_MODULE_2___default().fs5x),\n                        children: \"Jusik\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\KMS505303\\\\Documents\\\\GitHub\\\\jusik\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                        className: (_public_css_BackgroundVideo_module_css__WEBPACK_IMPORTED_MODULE_2___default().fs3x),\n                        children: token\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\KMS505303\\\\Documents\\\\GitHub\\\\jusik\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\KMS505303\\\\Documents\\\\GitHub\\\\jusik\\\\src\\\\app\\\\page.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\KMS505303\\\\Documents\\\\GitHub\\\\jusik\\\\src\\\\app\\\\page.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUMwQjtBQUN1QztBQUNyQjtBQUNBO0FBRTVDLE1BQU1LLE9BQU87SUFDWCxNQUFNQyxRQUFRSiwrREFBUUE7SUFFdEIscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVdQLHlGQUFnQjs7MEJBQzlCLDhEQUFDTTtnQkFBSUMsV0FBV1AsK0ZBQXNCOzBCQUNwQyw0RUFBQ1U7b0JBQ0NDLEtBQUk7b0JBQ0pDLGFBQVk7b0JBQ1pDLE9BQU07b0JBQ05DLGVBQWU7b0JBQ2ZDLGdCQUFlO29CQUNmUixXQUFXUCwyRkFBa0I7Ozs7Ozs7Ozs7OzBCQUdqQyw4REFBQ007Z0JBQUlDLFdBQVdQLHVGQUFjOztrQ0FDNUIsOERBQUNrQjt3QkFBR1gsV0FBV1Asb0ZBQVc7a0NBQUU7Ozs7OztrQ0FDNUIsOERBQUNvQjt3QkFBRWIsV0FBV1Asb0ZBQVc7a0NBQUdLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJcEM7S0FyQk1EO0FBc0JOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3B1YmxpYy9jc3MvQmFja2dyb3VuZFZpZGVvLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGdldFRva2VuIGZyb20gXCIuL21vZHVsZXMva2lzX3NvY2tldFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRva2VuID0gZ2V0VG9rZW4oKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWRlb0JhY2tncm91bmR9PlxyXG4gICAgICAgIDxpZnJhbWVcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL0V4TDhqQ2xyb0xRP2F1dG9wbGF5PTEmbXV0ZT0xJmxvb3A9MSZwbGF5bGlzdD1FeEw4akNscm9MUSZjb250cm9scz0wJm1vZGVzdGJyYW5kaW5nPTEmcmVsPTAmc2hvd2luZm89MCZpdl9sb2FkX3BvbGljeT0zJmZzPTAmZGlzYWJsZWtiPTFcIlxyXG4gICAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcclxuICAgICAgICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZTsgd2ViLXNoYXJlXCJcclxuICAgICAgICAgIGFsbG93RnVsbFNjcmVlblxyXG4gICAgICAgICAgcmVmZXJyZXJQb2xpY3k9XCJzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnZpZGVvSWZyYW1lfVxyXG4gICAgICAgID48L2lmcmFtZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmZzNXh9Pkp1c2lrPC9oMT5cclxuICAgICAgICA8YiBjbGFzc05hbWU9e3N0eWxlcy5mczN4fT57dG9rZW59PC9iPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsImdldFRva2VuIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIb21lIiwidG9rZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ2aWRlb0JhY2tncm91bmQiLCJpZnJhbWUiLCJzcmMiLCJmcmFtZUJvcmRlciIsImFsbG93IiwiYWxsb3dGdWxsU2NyZWVuIiwicmVmZXJyZXJQb2xpY3kiLCJ2aWRlb0lmcmFtZSIsImNvbnRlbnQiLCJoMSIsImZzNXgiLCJiIiwiZnMzeCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});
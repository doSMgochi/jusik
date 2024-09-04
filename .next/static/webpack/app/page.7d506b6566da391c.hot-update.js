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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_kis_secret__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/kis_secret */ \"(app-pages-browser)/./src/app/config/kis_secret.js\");\n/* harmony import */ var _kis_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kis_token */ \"(app-pages-browser)/./src/app/modules/kis_token.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ var _s = $RefreshSig$();\n\n\n\nconst useStock = ()=>{\n    _s();\n    const [stock, setStock] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const getStock = async ()=>{\n            try {\n                // 비동기적 토큰 가져옴\n                const token = await (0,_kis_token__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n                // 쿼리 파라미터를 URL에 포함\n                const queryParams = new URLSearchParams({\n                    fid_input_iscd: \"900100\",\n                    fid_cond_mrkt_div_code: \"J\"\n                }).toString();\n                const url = \"/inquire-price?\" + \"\".concat(queryParams);\n                const kisGetStockPetchOption = {\n                    method: \"GET\",\n                    headers: {\n                        authorization: \"Bearer \".concat(token),\n                        tr_id: \"FHKST01010100\",\n                        appkey: _config_kis_secret__WEBPACK_IMPORTED_MODULE_1__.KIS_APP_KEY,\n                        appsecret: _config_kis_secret__WEBPACK_IMPORTED_MODULE_1__.KIS_APP_SECRET,\n                        custtype: \"P\"\n                    }\n                };\n                //API 호출\n                const response = await fetch(url, kisGetStockPetchOption);\n                if (!response.ok) {\n                    throw new Error(\"API 호출 실패: \".concat(response.status, \" \").concat(response.statusText));\n                }\n                //JSON 파싱\n                const json = await response.json();\n                console.log(json);\n                const output = json.output;\n                //주식 상세정보\n                const stckPrpr = output.stck_prpr; //주식 현재가\n                const htsAvls = output.hts_avls; //HTS 시가총액\n                const stckShrnIscd = output.stck_shr_niscd; //주식 단축 종목코드\n                setStock({\n                    stck_prpr: output.stck_prpr,\n                    hts_avls: output.hts_avls,\n                    stck_shr_niscd: output.stck_shr_niscd\n                });\n            } catch (error) {\n                console.error(\"주식 정보를 가져오는 중 오류 발생:\", error);\n            }\n        };\n        getStock();\n    }, []);\n    return stock;\n};\n_s(useStock, \"pqKYaHcxQmeewmgDqlWB0YzBF18=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStock);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbW9kdWxlcy9raXNfc3RvY2tfYXBpLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUM0QztBQUN1QjtBQUNoQztBQUVuQyxNQUFNSyxXQUFXOztJQUNmLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUE7SUFFbENELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVEsV0FBVztZQUNmLElBQUk7Z0JBQ0YsY0FBYztnQkFDZCxNQUFNQyxRQUFRLE1BQU1MLHNEQUFRQTtnQkFFNUIsbUJBQW1CO2dCQUNuQixNQUFNTSxjQUFjLElBQUlDLGdCQUFnQjtvQkFDdENDLGdCQUFnQjtvQkFDaEJDLHdCQUF3QjtnQkFDMUIsR0FBR0MsUUFBUTtnQkFFWCxNQUFNQyxNQUFNLG9CQUFvQixHQUFlLE9BQVpMO2dCQUVuQyxNQUFNTSx5QkFBeUI7b0JBQzdCQyxRQUFRO29CQUVSQyxTQUFTO3dCQUNQQyxlQUFlLFVBQWdCLE9BQU5WO3dCQUN6QlcsT0FBTzt3QkFDUEMsUUFBUW5CLDJEQUFXQTt3QkFDbkJvQixXQUFXbkIsOERBQWNBO3dCQUN6Qm9CLFVBQVU7b0JBQ1o7Z0JBQ0Y7Z0JBQ0EsUUFBUTtnQkFDUixNQUFNQyxXQUFXLE1BQU1DLE1BQU1WLEtBQUtDO2dCQUVsQyxJQUFJLENBQUNRLFNBQVNFLEVBQUUsRUFBRTtvQkFDaEIsTUFBTSxJQUFJQyxNQUNSLGNBQWlDSCxPQUFuQkEsU0FBU0ksTUFBTSxFQUFDLEtBQXVCLE9BQXBCSixTQUFTSyxVQUFVO2dCQUV4RDtnQkFDQSxTQUFTO2dCQUNULE1BQU1DLE9BQU8sTUFBTU4sU0FBU00sSUFBSTtnQkFDaENDLFFBQVFDLEdBQUcsQ0FBQ0Y7Z0JBQ1osTUFBTUcsU0FBU0gsS0FBS0csTUFBTTtnQkFFMUIsU0FBUztnQkFDVCxNQUFNQyxXQUFXRCxPQUFPRSxTQUFTLEVBQUUsUUFBUTtnQkFDM0MsTUFBTUMsVUFBVUgsT0FBT0ksUUFBUSxFQUFFLFVBQVU7Z0JBQzNDLE1BQU1DLGVBQWVMLE9BQU9NLGNBQWMsRUFBRSxZQUFZO2dCQUV4RGhDLFNBQVM7b0JBQ1A0QixXQUFXRixPQUFPRSxTQUFTO29CQUMzQkUsVUFBVUosT0FBT0ksUUFBUTtvQkFDekJFLGdCQUFnQk4sT0FBT00sY0FBYztnQkFFdkM7WUFDRixFQUFFLE9BQU9DLE9BQU87Z0JBQ2RULFFBQVFTLEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3hDO1FBQ0Y7UUFFQWhDO0lBQ0YsR0FBRyxFQUFFO0lBRUwsT0FBT0Y7QUFDVDtHQTdETUQ7QUE4RE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9tb2R1bGVzL2tpc19zdG9ja19hcGkuanM/NjgzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEtJU19BUFBfS0VZLCBLSVNfQVBQX1NFQ1JFVCB9IGZyb20gXCIuLi9jb25maWcva2lzX3NlY3JldFwiO1xuaW1wb3J0IGdldFRva2VuIGZyb20gXCIuL2tpc190b2tlblwiO1xuXG5jb25zdCB1c2VTdG9jayA9ICgpID0+IHtcbiAgY29uc3QgW3N0b2NrLCBzZXRTdG9ja10gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0U3RvY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyDruYTrj5nquLDsoIEg7Yag7YGwIOqwgOyguOyYtFxuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKCk7XG5cbiAgICAgICAgLy8g7L+866asIO2MjOudvOuvuO2EsOulvCBVUkzsl5Ag7Y+s7ZWoXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgICAgZmlkX2lucHV0X2lzY2Q6IFwiOTAwMTAwXCIsIC8v64KY7KSR7JeQIOyXrOq4sOyXkCDso7zsi53svZTrk5zrpbwgSlVTSUsgRELsl5DsnojripQg7ZW064u5IOy9lOyKpOuLpSDsnbTrpoTsnYQg7YG066at7IucIO2VtOuLueyiheuqqey9lOuTnOqwgCDrhJjslYTqsIDshJwg6rKA7IOJ7J20IOuQmOqyjO2VtOyEnCDtlbTri7nso7zsi53sg4HshLjsoJXrs7Trpbwg7LCN7Ja07KSE6rGw7J6EIVxuICAgICAgICAgIGZpZF9jb25kX21ya3RfZGl2X2NvZGU6IFwiSlwiLCAvL0ogOiDso7zsi50sIEVURiwgRVROXG4gICAgICAgIH0pLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgY29uc3QgdXJsID0gXCIvaW5xdWlyZS1wcmljZT9cIiArIGAke3F1ZXJ5UGFyYW1zfWA7XG5cbiAgICAgICAgY29uc3Qga2lzR2V0U3RvY2tQZXRjaE9wdGlvbiA9IHtcbiAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG5cbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgICAgIHRyX2lkOiBcIkZIS1NUMDEwMTAxMDBcIiwgLy/so7zsi53tmITsnqzqsIDsi5zshLhcbiAgICAgICAgICAgIGFwcGtleTogS0lTX0FQUF9LRVksXG4gICAgICAgICAgICBhcHBzZWNyZXQ6IEtJU19BUFBfU0VDUkVULFxuICAgICAgICAgICAgY3VzdHR5cGU6IFwiUFwiLCAvL1A66rCc7J24IELripQg67KV7J24XG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgLy9BUEkg7Zi47LacXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBraXNHZXRTdG9ja1BldGNoT3B0aW9uKTtcblxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEFQSSDtmLjstpwg7Iuk7YyoOiAke3Jlc3BvbnNlLnN0YXR1c30gJHtyZXNwb25zZS5zdGF0dXNUZXh0fWBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIC8vSlNPTiDtjIzsi7FcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coanNvbik7XG4gICAgICAgIGNvbnN0IG91dHB1dCA9IGpzb24ub3V0cHV0O1xuXG4gICAgICAgIC8v7KO87IudIOyDgeyEuOygleuztFxuICAgICAgICBjb25zdCBzdGNrUHJwciA9IG91dHB1dC5zdGNrX3BycHI7IC8v7KO87IudIO2YhOyerOqwgFxuICAgICAgICBjb25zdCBodHNBdmxzID0gb3V0cHV0Lmh0c19hdmxzOyAvL0hUUyDsi5zqsIDstJ3slaFcbiAgICAgICAgY29uc3Qgc3Rja1Nocm5Jc2NkID0gb3V0cHV0LnN0Y2tfc2hyX25pc2NkOyAvL+yjvOyLnSDri6jstpUg7KKF66qp7L2U65OcXG5cbiAgICAgICAgc2V0U3RvY2soe1xuICAgICAgICAgIHN0Y2tfcHJwcjogb3V0cHV0LnN0Y2tfcHJwciwgLy8g7KO87IudIO2YhOyerOqwgFxuICAgICAgICAgIGh0c19hdmxzOiBvdXRwdXQuaHRzX2F2bHMsIC8vIEhUUyDsi5zqsIDstJ3slaFcbiAgICAgICAgICBzdGNrX3Nocl9uaXNjZDogb3V0cHV0LnN0Y2tfc2hyX25pc2NkLCAvLyDso7zsi50g64uo7LaVIOyiheuqqey9lOuTnFxuICAgICAgICAgIC8v64KY7KSR7JeQIOuNlOy2lOqwgO2VoOqxsOyehCBodHRwczovL2FwaXBvcnRhbC5rb3JlYWludmVzdG1lbnQuY29tL2FwaXNlcnZpY2UvYXBpc2VydmljZS1kb21lc3RpYy1zdG9jay1xdW90YXRpb25zMiNMXzA3ODAyNTEyLTRmNDktNDQ4Ni05MWI0LTEwNTBiNmY1ZGM5ZFxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLso7zsi50g7KCV67O066W8IOqwgOyguOyYpOuKlCDspJEg7Jik66WYIOuwnOyDnTpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBnZXRTdG9jaygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHN0b2NrO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZVN0b2NrO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiS0lTX0FQUF9LRVkiLCJLSVNfQVBQX1NFQ1JFVCIsImdldFRva2VuIiwidXNlU3RvY2siLCJzdG9jayIsInNldFN0b2NrIiwiZ2V0U3RvY2siLCJ0b2tlbiIsInF1ZXJ5UGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiZmlkX2lucHV0X2lzY2QiLCJmaWRfY29uZF9tcmt0X2Rpdl9jb2RlIiwidG9TdHJpbmciLCJ1cmwiLCJraXNHZXRTdG9ja1BldGNoT3B0aW9uIiwibWV0aG9kIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJ0cl9pZCIsImFwcGtleSIsImFwcHNlY3JldCIsImN1c3R0eXBlIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJvdXRwdXQiLCJzdGNrUHJwciIsInN0Y2tfcHJwciIsImh0c0F2bHMiLCJodHNfYXZscyIsInN0Y2tTaHJuSXNjZCIsInN0Y2tfc2hyX25pc2NkIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/modules/kis_stock_api.js\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Main.tsx":
/*!*****************************!*\
  !*** ./components/Main.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_AntiMatter_Downloads_uniswap_clone_youtube_main_uniswap_clone_youtube_main_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_AntiMatter_Downloads_uniswap_clone_youtube_main_uniswap_clone_youtube_main_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_AntiMatter_Downloads_uniswap_clone_youtube_main_uniswap_clone_youtube_main_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/ri */ \"./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _assets_eth_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/eth.png */ \"./assets/eth.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_TransactionContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/TransactionContext */ \"./context/TransactionContext.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _TransactionLoader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TransactionLoader */ \"./components/TransactionLoader.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nreact_modal__WEBPACK_IMPORTED_MODULE_6___default().setAppElement('#__next');\nvar style = {\n    wrapper: \"w-screen flex items-center justify-center mt-14\",\n    content: \"bg-[#191B1F] w-[40rem] rounded-2xl p-4\",\n    formHeader: \"px-2 flex items-center justify-between font-semibold text-xl\",\n    transferPropContainer: \"bg-[#20242A] my-3 rounded-2xl p-6 text-3xl  border border-[#20242A] hover:border-[#41444F]  flex justify-between\",\n    transferPropInput: \"bg-transparent placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl\",\n    currencySelector: \"flex w-1/4\",\n    currencySelectorContent: \"w-full h-min flex justify-between items-center bg-[#2D2F36] hover:bg-[#41444F] rounded-2xl text-xl font-medium cursor-pointer p-2 mt-[-0.2rem]\",\n    currencySelectorIcon: \"flex items-center\",\n    currencySelectorTicker: \"mx-2\",\n    currencySelectorArrow: \"text-lg\",\n    confirmButton: \"bg-[#4b0082] my-2 rounded-2xl py-6 px-8 text-xl font-semibold flex items-center justify-center cursor-pointer border border-[#4b0082] hover:border-[#234169]\"\n};\nvar customStyles = {\n    content: {\n        top: '50%',\n        left: '50%',\n        right: 'auto',\n        bottom: 'auto',\n        transform: 'translate(-50%, -50%)',\n        backgroundColor: '#0a0b0d',\n        padding: 0,\n        border: 'none'\n    },\n    overlay: {\n        backgroundColor: 'rgba(10, 11, 13, 0.75)'\n    }\n};\nvar Main = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_context_TransactionContext__WEBPACK_IMPORTED_MODULE_5__.TransactionContext), formData = ref.formData, handleChange = ref.handleChange, sendTransaction = ref.sendTransaction;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    var handleSubmit = function() {\n        var _ref = _asyncToGenerator(C_Users_AntiMatter_Downloads_uniswap_clone_youtube_main_uniswap_clone_youtube_main_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var addressTo, amount;\n            return C_Users_AntiMatter_Downloads_uniswap_clone_youtube_main_uniswap_clone_youtube_main_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        addressTo = formData.addressTo, amount = formData.amount;\n                        e.preventDefault();\n                        if (!(!addressTo || !amount)) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 4:\n                        sendTransaction();\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: style.wrapper,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: style.content,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: style.formHeader,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: \"Transfer ETH\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_ri__WEBPACK_IMPORTED_MODULE_9__.RiSettings3Fill, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: style.transferPropContainer,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: style.transferPropInput,\n                                placeholder: \"0.0\",\n                                pattern: \"^[0-9]*[.,]?[0-9]*$\",\n                                onChange: function(e) {\n                                    return handleChange(e, 'amount');\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: style.currencySelector,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: style.currencySelectorContent,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: style.currencySelectorIcon,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                src: _assets_eth_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                                alt: \"eth logo\",\n                                                height: 20,\n                                                width: 20\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 17\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: style.currencySelectorTicker,\n                                            children: \"ETH\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_10__.AiOutlineDown, {\n                                            className: style.currencySelectorArrow\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: style.transferPropContainer,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: style.transferPropInput,\n                                placeholder: \"0x...\",\n                                onChange: function(e) {\n                                    return handleChange(e, 'addressTo');\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: style.currencySelector\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        onClick: function(e) {\n                            return handleSubmit(e);\n                        },\n                        className: style.confirmButton,\n                        children: \"Confirm\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_6___default()), {\n                isOpen: !!router.query.loading,\n                style: customStyles,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_TransactionLoader__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, _this));\n};\n_s(Main, \"jKh5JrNxKVKmLvyLlcoGn+mEZcY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFWSxZQUFZO3NHQUN2RGQsMERBQWlCOzs7Ozs7Ozs7Ozs7Ozs7O0FBSTFCLENBQUM7R0E1REt3QixJQUFJOztRQUdPekIsa0RBQVM7OztLQUhwQnlCLElBQUk7QUE4RFYsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluLnRzeD85ZDhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgUmlTZXR0aW5nczNGaWxsIH0gZnJvbSAncmVhY3QtaWNvbnMvcmknXG5pbXBvcnQgeyBBaU91dGxpbmVEb3duIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknXG5pbXBvcnQgZXRoTG9nbyBmcm9tICcuLi9hc3NldHMvZXRoLnBuZydcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRyYW5zYWN0aW9uQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvVHJhbnNhY3Rpb25Db250ZXh0J1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgVHJhbnNhY3Rpb25Mb2FkZXIgZnJvbSAnLi9UcmFuc2FjdGlvbkxvYWRlcidcblxuTW9kYWwuc2V0QXBwRWxlbWVudCgnI19fbmV4dCcpXG5cbmNvbnN0IHN0eWxlID0ge1xuICB3cmFwcGVyOiBgdy1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXQtMTRgLFxuICBjb250ZW50OiBgYmctWyMxOTFCMUZdIHctWzQwcmVtXSByb3VuZGVkLTJ4bCBwLTRgLFxuICBmb3JtSGVhZGVyOiBgcHgtMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZm9udC1zZW1pYm9sZCB0ZXh0LXhsYCxcbiAgdHJhbnNmZXJQcm9wQ29udGFpbmVyOiBgYmctWyMyMDI0MkFdIG15LTMgcm91bmRlZC0yeGwgcC02IHRleHQtM3hsICBib3JkZXIgYm9yZGVyLVsjMjAyNDJBXSBob3Zlcjpib3JkZXItWyM0MTQ0NEZdICBmbGV4IGp1c3RpZnktYmV0d2VlbmAsXG4gIHRyYW5zZmVyUHJvcElucHV0OiBgYmctdHJhbnNwYXJlbnQgcGxhY2Vob2xkZXI6dGV4dC1bI0IyQjlEMl0gb3V0bGluZS1ub25lIG1iLTYgdy1mdWxsIHRleHQtMnhsYCxcbiAgY3VycmVuY3lTZWxlY3RvcjogYGZsZXggdy0xLzRgLFxuICBjdXJyZW5jeVNlbGVjdG9yQ29udGVudDogYHctZnVsbCBoLW1pbiBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgYmctWyMyRDJGMzZdIGhvdmVyOmJnLVsjNDE0NDRGXSByb3VuZGVkLTJ4bCB0ZXh0LXhsIGZvbnQtbWVkaXVtIGN1cnNvci1wb2ludGVyIHAtMiBtdC1bLTAuMnJlbV1gLFxuICBjdXJyZW5jeVNlbGVjdG9ySWNvbjogYGZsZXggaXRlbXMtY2VudGVyYCxcbiAgY3VycmVuY3lTZWxlY3RvclRpY2tlcjogYG14LTJgLFxuICBjdXJyZW5jeVNlbGVjdG9yQXJyb3c6IGB0ZXh0LWxnYCxcbiAgY29uZmlybUJ1dHRvbjogYGJnLVsjNGIwMDgyXSBteS0yIHJvdW5kZWQtMnhsIHB5LTYgcHgtOCB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgYm9yZGVyIGJvcmRlci1bIzRiMDA4Ml0gaG92ZXI6Ym9yZGVyLVsjMjM0MTY5XWAsXG59XG5cbmNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcbiAgY29udGVudDoge1xuICAgIHRvcDogJzUwJScsXG4gICAgbGVmdDogJzUwJScsXG4gICAgcmlnaHQ6ICdhdXRvJyxcbiAgICBib3R0b206ICdhdXRvJyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwYTBiMGQnLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gIH0sXG4gIG92ZXJsYXk6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDEwLCAxMSwgMTMsIDAuNzUpJyxcbiAgfSxcbn1cblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgY29uc3QgeyBmb3JtRGF0YSwgaGFuZGxlQ2hhbmdlLCBzZW5kVHJhbnNhY3Rpb24gfSA9XG4gICAgdXNlQ29udGV4dChUcmFuc2FjdGlvbkNvbnRleHQpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHsgYWRkcmVzc1RvLCBhbW91bnQgfSA9IGZvcm1EYXRhXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBpZiAoIWFkZHJlc3NUbyB8fCAhYW1vdW50KSByZXR1cm5cblxuICAgIHNlbmRUcmFuc2FjdGlvbigpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS53cmFwcGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250ZW50fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmZvcm1IZWFkZXJ9PlxuICAgICAgICAgIDxkaXY+VHJhbnNmZXIgRVRIPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxSaVNldHRpbmdzM0ZpbGwgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50cmFuc2ZlclByb3BDb250YWluZXJ9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUudHJhbnNmZXJQcm9wSW5wdXR9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nMC4wJ1xuICAgICAgICAgICAgcGF0dGVybj0nXlswLTldKlsuLF0/WzAtOV0qJCdcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGhhbmRsZUNoYW5nZShlLCAnYW1vdW50Jyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY3VycmVuY3lTZWxlY3Rvcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY3VycmVuY3lTZWxlY3RvckNvbnRlbnR9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY3VycmVuY3lTZWxlY3Rvckljb259PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2V0aExvZ299IGFsdD0nZXRoIGxvZ28nIGhlaWdodD17MjB9IHdpZHRoPXsyMH0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jdXJyZW5jeVNlbGVjdG9yVGlja2VyfT5FVEg8L2Rpdj5cbiAgICAgICAgICAgICAgPEFpT3V0bGluZURvd24gY2xhc3NOYW1lPXtzdHlsZS5jdXJyZW5jeVNlbGVjdG9yQXJyb3d9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50cmFuc2ZlclByb3BDb250YWluZXJ9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUudHJhbnNmZXJQcm9wSW5wdXR9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nMHguLi4nXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBoYW5kbGVDaGFuZ2UoZSwgJ2FkZHJlc3NUbycpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmN1cnJlbmN5U2VsZWN0b3J9PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXtlID0+IGhhbmRsZVN1Ym1pdChlKX0gY2xhc3NOYW1lPXtzdHlsZS5jb25maXJtQnV0dG9ufT5cbiAgICAgICAgICBDb25maXJtXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxNb2RhbCBpc09wZW49eyEhcm91dGVyLnF1ZXJ5LmxvYWRpbmd9IHN0eWxlPXtjdXN0b21TdHlsZXN9PlxuICAgICAgICA8VHJhbnNhY3Rpb25Mb2FkZXIgLz5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpblxuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmlTZXR0aW5nczNGaWxsIiwiQWlPdXRsaW5lRG93biIsImV0aExvZ28iLCJ1c2VDb250ZXh0IiwiVHJhbnNhY3Rpb25Db250ZXh0IiwiTW9kYWwiLCJ1c2VSb3V0ZXIiLCJUcmFuc2FjdGlvbkxvYWRlciIsInNldEFwcEVsZW1lbnQiLCJzdHlsZSIsIndyYXBwZXIiLCJjb250ZW50IiwiZm9ybUhlYWRlciIsInRyYW5zZmVyUHJvcENvbnRhaW5lciIsInRyYW5zZmVyUHJvcElucHV0IiwiY3VycmVuY3lTZWxlY3RvciIsImN1cnJlbmN5U2VsZWN0b3JDb250ZW50IiwiY3VycmVuY3lTZWxlY3Rvckljb24iLCJjdXJyZW5jeVNlbGVjdG9yVGlja2VyIiwiY3VycmVuY3lTZWxlY3RvckFycm93IiwiY29uZmlybUJ1dHRvbiIsImN1c3RvbVN0eWxlcyIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsInRyYW5zZm9ybSIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJib3JkZXIiLCJvdmVybGF5IiwiTWFpbiIsImZvcm1EYXRhIiwiaGFuZGxlQ2hhbmdlIiwic2VuZFRyYW5zYWN0aW9uIiwicm91dGVyIiwiaGFuZGxlU3VibWl0IiwiZSIsImFkZHJlc3NUbyIsImFtb3VudCIsInByZXZlbnREZWZhdWx0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJwYXR0ZXJuIiwib25DaGFuZ2UiLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJ3aWR0aCIsIm9uQ2xpY2siLCJpc09wZW4iLCJxdWVyeSIsImxvYWRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Main.tsx\n");

/***/ })

});
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_AntiMatter_Downloads_uniswap_clone_youtube_main_uniswap_clone_youtube_main_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_AntiMatter_Downloads_uniswap_clone_youtube_main_uniswap_clone_youtube_main_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_AntiMatter_Downloads_uniswap_clone_youtube_main_uniswap_clone_youtube_main_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/ri */ \"./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _assets_eth_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/eth.png */ \"./assets/eth.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_TransactionContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/TransactionContext */ \"./context/TransactionContext.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _TransactionLoader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TransactionLoader */ \"./components/TransactionLoader.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nreact_modal__WEBPACK_IMPORTED_MODULE_6___default().setAppElement('#__next');\nvar style = {\n    wrapper: \"w-screen flex items-center justify-center mt-14\",\n    content: \"bg-[#191B1F] w-[40rem] rounded-2xl p-4\",\n    formHeader: \"px-2 flex items-center justify-between font-semibold text-xl\",\n    transferPropContainer: \"bg-[#20242A] my-3 rounded-2xl p-6 text-3xl  border border-[#20242A] hover:border-[#41444F]  flex justify-between\",\n    transferPropInput: \"bg-transparent placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl\",\n    currencySelector: \"flex w-1/4\",\n    currencySelectorContent: \"w-full h-min flex justify-between items-center bg-[#2D2F36] hover:bg-[#41444F] rounded-2xl text-xl font-medium cursor-pointer p-2 mt-[-0.2rem]\",\n    currencySelectorIcon: \"flex items-center\",\n    currencySelectorTicker: \"mx-2\",\n    currencySelectorArrow: \"text-lg\",\n    confirmButton: \"bg-[#4b0082] my-2 rounded-2xl py-6 px-8 text-xl font-semibold flex items-center justify-center cursor-pointer border border-[#4b0082] hover:border-[#234169]\"\n};\nvar customStyles = {\n    content: {\n        top: '50%',\n        left: '50%',\n        right: 'auto',\n        bottom: 'auto',\n        transform: 'translate(-50%, -50%)',\n        backgroundColor: '#0a0b0d',\n        padding: 0,\n        border: 'none'\n    },\n    overlay: {\n        backgroundColor: 'rgba(10, 11, 13, 0.75)'\n    }\n};\nvar Main = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_context_TransactionContext__WEBPACK_IMPORTED_MODULE_5__.TransactionContext), formData = ref.formData, handleChange = ref.handleChange, sendTransaction = ref.sendTransaction;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    var handleSubmit = function() {\n        var _ref = _asyncToGenerator(C_Users_AntiMatter_Downloads_uniswap_clone_youtube_main_uniswap_clone_youtube_main_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var addressTo, amount;\n            return C_Users_AntiMatter_Downloads_uniswap_clone_youtube_main_uniswap_clone_youtube_main_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        addressTo = formData.addressTo, amount = formData.amount;\n                        e.preventDefault();\n                        if (!(!addressTo || !amount)) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 4:\n                        sendTransaction();\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: style.wrapper,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: style.content,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: style.formHeader,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: \"Swap\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_ri__WEBPACK_IMPORTED_MODULE_9__.RiSettings3Fill, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: style.transferPropContainer,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: style.transferPropInput,\n                                placeholder: \"0.0\",\n                                pattern: \"^[0-9]*[.,]?[0-9]*$\",\n                                onChange: function(e) {\n                                    return handleChange(e, 'amount');\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: style.currencySelector,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: style.currencySelectorContent,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: style.currencySelectorIcon,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                src: _assets_eth_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                                alt: \"eth logo\",\n                                                height: 20,\n                                                width: 20\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 17\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: style.currencySelectorTicker,\n                                            children: \"ETH\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_10__.AiOutlineDown, {\n                                            className: style.currencySelectorArrow\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: style.transferPropContainer,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: style.transferPropInput,\n                                placeholder: \"0x...\",\n                                onChange: function(e) {\n                                    return handleChange(e, 'addressTo');\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: style.currencySelector\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        onClick: function(e) {\n                            return handleSubmit(e);\n                        },\n                        className: style.confirmButton,\n                        children: \"Confirm\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_6___default()), {\n                isOpen: !!router.query.loading,\n                style: customStyles,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_TransactionLoader__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\AntiMatter\\\\Downloads\\\\uniswap-clone-youtube-main\\\\uniswap-clone-youtube-main\\\\client\\\\components\\\\Main.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, _this));\n};\n_s(Main, \"jKh5JrNxKVKmLvyLlcoGn+mEZcY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVZLFlBQVk7c0dBQ3ZEZCwwREFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJMUIsQ0FBQztHQTVES3dCLElBQUk7O1FBR096QixrREFBUzs7O0tBSHBCeUIsSUFBSTtBQThEViwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01haW4udHN4PzlkOGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBSaVNldHRpbmdzM0ZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9yaSdcbmltcG9ydCB7IEFpT3V0bGluZURvd24gfSBmcm9tICdyZWFjdC1pY29ucy9haSdcbmltcG9ydCBldGhMb2dvIGZyb20gJy4uL2Fzc2V0cy9ldGgucG5nJ1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVHJhbnNhY3Rpb25Db250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9UcmFuc2FjdGlvbkNvbnRleHQnXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBUcmFuc2FjdGlvbkxvYWRlciBmcm9tICcuL1RyYW5zYWN0aW9uTG9hZGVyJ1xuXG5Nb2RhbC5zZXRBcHBFbGVtZW50KCcjX19uZXh0JylcblxuY29uc3Qgc3R5bGUgPSB7XG4gIHdyYXBwZXI6IGB3LXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtdC0xNGAsXG4gIGNvbnRlbnQ6IGBiZy1bIzE5MUIxRl0gdy1bNDByZW1dIHJvdW5kZWQtMnhsIHAtNGAsXG4gIGZvcm1IZWFkZXI6IGBweC0yIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBmb250LXNlbWlib2xkIHRleHQteGxgLFxuICB0cmFuc2ZlclByb3BDb250YWluZXI6IGBiZy1bIzIwMjQyQV0gbXktMyByb3VuZGVkLTJ4bCBwLTYgdGV4dC0zeGwgIGJvcmRlciBib3JkZXItWyMyMDI0MkFdIGhvdmVyOmJvcmRlci1bIzQxNDQ0Rl0gIGZsZXgganVzdGlmeS1iZXR3ZWVuYCxcbiAgdHJhbnNmZXJQcm9wSW5wdXQ6IGBiZy10cmFuc3BhcmVudCBwbGFjZWhvbGRlcjp0ZXh0LVsjQjJCOUQyXSBvdXRsaW5lLW5vbmUgbWItNiB3LWZ1bGwgdGV4dC0yeGxgLFxuICBjdXJyZW5jeVNlbGVjdG9yOiBgZmxleCB3LTEvNGAsXG4gIGN1cnJlbmN5U2VsZWN0b3JDb250ZW50OiBgdy1mdWxsIGgtbWluIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBiZy1bIzJEMkYzNl0gaG92ZXI6YmctWyM0MTQ0NEZdIHJvdW5kZWQtMnhsIHRleHQteGwgZm9udC1tZWRpdW0gY3Vyc29yLXBvaW50ZXIgcC0yIG10LVstMC4ycmVtXWAsXG4gIGN1cnJlbmN5U2VsZWN0b3JJY29uOiBgZmxleCBpdGVtcy1jZW50ZXJgLFxuICBjdXJyZW5jeVNlbGVjdG9yVGlja2VyOiBgbXgtMmAsXG4gIGN1cnJlbmN5U2VsZWN0b3JBcnJvdzogYHRleHQtbGdgLFxuICBjb25maXJtQnV0dG9uOiBgYmctWyM0YjAwODJdIG15LTIgcm91bmRlZC0yeGwgcHktNiBweC04IHRleHQteGwgZm9udC1zZW1pYm9sZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBjdXJzb3ItcG9pbnRlciBib3JkZXIgYm9yZGVyLVsjNGIwMDgyXSBob3Zlcjpib3JkZXItWyMyMzQxNjldYCxcbn1cblxuY29uc3QgY3VzdG9tU3R5bGVzID0ge1xuICBjb250ZW50OiB7XG4gICAgdG9wOiAnNTAlJyxcbiAgICBsZWZ0OiAnNTAlJyxcbiAgICByaWdodDogJ2F1dG8nLFxuICAgIGJvdHRvbTogJ2F1dG8nLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzBhMGIwZCcsXG4gICAgcGFkZGluZzogMCxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgfSxcbiAgb3ZlcmxheToge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTAsIDExLCAxMywgMC43NSknLFxuICB9LFxufVxuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICBjb25zdCB7IGZvcm1EYXRhLCBoYW5kbGVDaGFuZ2UsIHNlbmRUcmFuc2FjdGlvbiB9ID1cbiAgICB1c2VDb250ZXh0KFRyYW5zYWN0aW9uQ29udGV4dClcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogYW55KSA9PiB7XG4gICAgY29uc3QgeyBhZGRyZXNzVG8sIGFtb3VudCB9ID0gZm9ybURhdGFcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGlmICghYWRkcmVzc1RvIHx8ICFhbW91bnQpIHJldHVyblxuXG4gICAgc2VuZFRyYW5zYWN0aW9uKClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLndyYXBwZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRlbnR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZm9ybUhlYWRlcn0+XG4gICAgICAgICAgPGRpdj5Td2FwPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxSaVNldHRpbmdzM0ZpbGwgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50cmFuc2ZlclByb3BDb250YWluZXJ9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUudHJhbnNmZXJQcm9wSW5wdXR9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nMC4wJ1xuICAgICAgICAgICAgcGF0dGVybj0nXlswLTldKlsuLF0/WzAtOV0qJCdcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGhhbmRsZUNoYW5nZShlLCAnYW1vdW50Jyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY3VycmVuY3lTZWxlY3Rvcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY3VycmVuY3lTZWxlY3RvckNvbnRlbnR9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY3VycmVuY3lTZWxlY3Rvckljb259PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2V0aExvZ299IGFsdD0nZXRoIGxvZ28nIGhlaWdodD17MjB9IHdpZHRoPXsyMH0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jdXJyZW5jeVNlbGVjdG9yVGlja2VyfT5FVEg8L2Rpdj5cbiAgICAgICAgICAgICAgPEFpT3V0bGluZURvd24gY2xhc3NOYW1lPXtzdHlsZS5jdXJyZW5jeVNlbGVjdG9yQXJyb3d9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50cmFuc2ZlclByb3BDb250YWluZXJ9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUudHJhbnNmZXJQcm9wSW5wdXR9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nMHguLi4nXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBoYW5kbGVDaGFuZ2UoZSwgJ2FkZHJlc3NUbycpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmN1cnJlbmN5U2VsZWN0b3J9PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXtlID0+IGhhbmRsZVN1Ym1pdChlKX0gY2xhc3NOYW1lPXtzdHlsZS5jb25maXJtQnV0dG9ufT5cbiAgICAgICAgICBDb25maXJtXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxNb2RhbCBpc09wZW49eyEhcm91dGVyLnF1ZXJ5LmxvYWRpbmd9IHN0eWxlPXtjdXN0b21TdHlsZXN9PlxuICAgICAgICA8VHJhbnNhY3Rpb25Mb2FkZXIgLz5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpblxuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmlTZXR0aW5nczNGaWxsIiwiQWlPdXRsaW5lRG93biIsImV0aExvZ28iLCJ1c2VDb250ZXh0IiwiVHJhbnNhY3Rpb25Db250ZXh0IiwiTW9kYWwiLCJ1c2VSb3V0ZXIiLCJUcmFuc2FjdGlvbkxvYWRlciIsInNldEFwcEVsZW1lbnQiLCJzdHlsZSIsIndyYXBwZXIiLCJjb250ZW50IiwiZm9ybUhlYWRlciIsInRyYW5zZmVyUHJvcENvbnRhaW5lciIsInRyYW5zZmVyUHJvcElucHV0IiwiY3VycmVuY3lTZWxlY3RvciIsImN1cnJlbmN5U2VsZWN0b3JDb250ZW50IiwiY3VycmVuY3lTZWxlY3Rvckljb24iLCJjdXJyZW5jeVNlbGVjdG9yVGlja2VyIiwiY3VycmVuY3lTZWxlY3RvckFycm93IiwiY29uZmlybUJ1dHRvbiIsImN1c3RvbVN0eWxlcyIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsInRyYW5zZm9ybSIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJib3JkZXIiLCJvdmVybGF5IiwiTWFpbiIsImZvcm1EYXRhIiwiaGFuZGxlQ2hhbmdlIiwic2VuZFRyYW5zYWN0aW9uIiwicm91dGVyIiwiaGFuZGxlU3VibWl0IiwiZSIsImFkZHJlc3NUbyIsImFtb3VudCIsInByZXZlbnREZWZhdWx0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJwYXR0ZXJuIiwib25DaGFuZ2UiLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJ3aWR0aCIsIm9uQ2xpY2siLCJpc09wZW4iLCJxdWVyeSIsImxvYWRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Main.tsx\n");

/***/ })

});
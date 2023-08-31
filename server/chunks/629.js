exports.id = 629;
exports.ids = [629];
exports.modules = {

/***/ 9883:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Footer_container__5d2_x",
	"footer": "Footer_footer__Dhw_9",
	"copyright": "Footer_copyright__lw16R"
};


/***/ }),

/***/ 3708:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Header_container__7nNih",
	"logo": "Header_logo__gECVj",
	"text": "Header_text__4anlZ",
	"nav": "Header_nav__9EX6V",
	"nav__list": "Header_nav__list__a9IRW",
	"nav__item": "Header_nav__item__2KCs6",
	"wrapper": "Header_wrapper__KxwYn"
};


/***/ }),

/***/ 8700:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "MainLayout_container__UJdpr"
};


/***/ }),

/***/ 5235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9883);
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__);


const Footer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default().footer),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default().copyright),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: "creator Igor Teplostanski"
                }),
                " ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: "\xa9 2022-2023"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 6226:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5611);
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3708);
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nanoid__WEBPACK_IMPORTED_MODULE_2__]);
nanoid__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Header = ()=>{
    const navItems = [
        {
            name: "проекты",
            path: "/projects"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().logo),
                href: "/",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "portfolio"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().text),
                        children: "version 2"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().nav),
                children: navItems.map(({ name, path })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().nav__list),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().nav__item),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: path,
                                children: name
                            })
                        })
                    }, (0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)()))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1170:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6226);
/* harmony import */ var _MainLayout_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8700);
/* harmony import */ var _MainLayout_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MainLayout_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__]);
_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const MainLayout = ({ children })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: (_MainLayout_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),
                children: children
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
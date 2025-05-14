"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/rooms/[id]";
exports.ids = ["pages/api/rooms/[id]"];
exports.modules = {

/***/ "(api-node)/./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// lib/prisma.js\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL2xpYi9wcmlzbWEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsZ0JBQWdCO0FBQzhCO0FBQzlDLE1BQU1DLFNBQVMsSUFBSUQsd0RBQVlBO0FBQy9CLGlFQUFlQyxNQUFNQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvaGltYW5zaHVndXB0YS9EZXZlbG9wZXIvQ29kZXMvaG90ZWwtbWFuYWdlbWVudC9saWIvcHJpc21hLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYi9wcmlzbWEuanNcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbmV4cG9ydCBkZWZhdWx0IHByaXNtYTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api-node)/./lib/prisma.js\n");

/***/ }),

/***/ "(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Frooms%2F%5Bid%5D&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Frooms%2F%5Bid%5D.js&middlewareConfigBase64=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Frooms%2F%5Bid%5D&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Frooms%2F%5Bid%5D.js&middlewareConfigBase64=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages-api/module.compiled */ \"(api-node)/./node_modules/next/dist/server/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(api-node)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api-node)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_rooms_id_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/api/rooms/[id].js */ \"(api-node)/./pages/api/rooms/[id].js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_rooms_id_js__WEBPACK_IMPORTED_MODULE_3__, 'default'));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_rooms_id_js__WEBPACK_IMPORTED_MODULE_3__, 'config');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/rooms/[id]\",\n        pathname: \"/api/rooms/[id]\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    userland: _pages_api_rooms_id_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2luZGV4LmpzP2tpbmQ9UEFHRVNfQVBJJnBhZ2U9JTJGYXBpJTJGcm9vbXMlMkYlNUJpZCU1RCZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTJGYXBpJTJGcm9vbXMlMkYlNUJpZCU1RC5qcyZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDRTtBQUMxRDtBQUNzRDtBQUN0RDtBQUNBLGlFQUFlLHdFQUFLLENBQUMsbURBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sZUFBZSx3RUFBSyxDQUFDLG1EQUFRO0FBQ3BDO0FBQ08sd0JBQXdCLHlHQUFtQjtBQUNsRDtBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzQVBJUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXMvYXBpL3Jvb21zL1tpZF0uanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgJ2RlZmF1bHQnKTtcbi8vIFJlLWV4cG9ydCBjb25maWcuXG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsICdjb25maWcnKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzQVBJUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTX0FQSSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3Jvb21zL1tpZF1cIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9yb29tcy9baWRdXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogJycsXG4gICAgICAgIGZpbGVuYW1lOiAnJ1xuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy1hcGkuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Frooms%2F%5Bid%5D&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Frooms%2F%5Bid%5D.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api-node)/./pages/api/rooms/[id].js":
/*!*********************************!*\
  !*** ./pages/api/rooms/[id].js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api-node)/./lib/prisma.js\");\n// pages/api/rooms/[id].js\n\nasync function handler(req, res) {\n    const roomId = parseInt(req.query.id);\n    if (req.method === \"GET\") {\n        const room = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].room.findUnique({\n            where: {\n                id: roomId\n            }\n        });\n        if (room) res.json(room);\n        else res.status(404).json({\n            error: \"Room not found\"\n        });\n    } else if (req.method === \"PUT\") {\n        const { number, type, price, description, status } = req.body;\n        const room = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].room.update({\n            where: {\n                id: roomId\n            },\n            data: {\n                number,\n                type,\n                price,\n                description,\n                status\n            }\n        });\n        res.json(room);\n    } else if (req.method === \"DELETE\") {\n        await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].room.delete({\n            where: {\n                id: roomId\n            }\n        });\n        res.status(204).end();\n    } else {\n        res.status(405).end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL3BhZ2VzL2FwaS9yb29tcy9baWRdLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMEJBQTBCO0FBQ2U7QUFFMUIsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzVDLE1BQU1DLFNBQVNDLFNBQVNILElBQUlJLEtBQUssQ0FBQ0MsRUFBRTtJQUVwQyxJQUFJTCxJQUFJTSxNQUFNLEtBQUssT0FBTztRQUN4QixNQUFNQyxPQUFPLE1BQU1ULHdEQUFXLENBQUNVLFVBQVUsQ0FBQztZQUN4Q0MsT0FBTztnQkFBRUosSUFBSUg7WUFBTztRQUN0QjtRQUNBLElBQUlLLE1BQU1OLElBQUlTLElBQUksQ0FBQ0g7YUFDZE4sSUFBSVUsTUFBTSxDQUFDLEtBQUtELElBQUksQ0FBQztZQUFFRSxPQUFPO1FBQWlCO0lBQ3RELE9BQU8sSUFBSVosSUFBSU0sTUFBTSxLQUFLLE9BQU87UUFDL0IsTUFBTSxFQUFFTyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxXQUFXLEVBQUVMLE1BQU0sRUFBRSxHQUFHWCxJQUFJaUIsSUFBSTtRQUM3RCxNQUFNVixPQUFPLE1BQU1ULHdEQUFXLENBQUNvQixNQUFNLENBQUM7WUFDcENULE9BQU87Z0JBQUVKLElBQUlIO1lBQU87WUFDcEJpQixNQUFNO2dCQUFFTjtnQkFBUUM7Z0JBQU1DO2dCQUFPQztnQkFBYUw7WUFBTztRQUNuRDtRQUNBVixJQUFJUyxJQUFJLENBQUNIO0lBQ1gsT0FBTyxJQUFJUCxJQUFJTSxNQUFNLEtBQUssVUFBVTtRQUNsQyxNQUFNUix3REFBVyxDQUFDc0IsTUFBTSxDQUFDO1lBQUVYLE9BQU87Z0JBQUVKLElBQUlIO1lBQU87UUFBRTtRQUNqREQsSUFBSVUsTUFBTSxDQUFDLEtBQUtVLEdBQUc7SUFDckIsT0FBTztRQUNMcEIsSUFBSVUsTUFBTSxDQUFDLEtBQUtVLEdBQUc7SUFDckI7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL2hpbWFuc2h1Z3VwdGEvRGV2ZWxvcGVyL0NvZGVzL2hvdGVsLW1hbmFnZW1lbnQvcGFnZXMvYXBpL3Jvb21zL1tpZF0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvYXBpL3Jvb21zL1tpZF0uanNcbmltcG9ydCBwcmlzbWEgZnJvbSBcIi4uLy4uLy4uL2xpYi9wcmlzbWFcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCByb29tSWQgPSBwYXJzZUludChyZXEucXVlcnkuaWQpO1xuICBcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICBjb25zdCByb29tID0gYXdhaXQgcHJpc21hLnJvb20uZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyBpZDogcm9vbUlkIH0sXG4gICAgfSk7XG4gICAgaWYgKHJvb20pIHJlcy5qc29uKHJvb20pO1xuICAgIGVsc2UgcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBlcnJvcjogXCJSb29tIG5vdCBmb3VuZFwiIH0pO1xuICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09IFwiUFVUXCIpIHtcbiAgICBjb25zdCB7IG51bWJlciwgdHlwZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBzdGF0dXMgfSA9IHJlcS5ib2R5O1xuICAgIGNvbnN0IHJvb20gPSBhd2FpdCBwcmlzbWEucm9vbS51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IHJvb21JZCB9LFxuICAgICAgZGF0YTogeyBudW1iZXIsIHR5cGUsIHByaWNlLCBkZXNjcmlwdGlvbiwgc3RhdHVzIH0sXG4gICAgfSk7XG4gICAgcmVzLmpzb24ocm9vbSk7XG4gIH0gZWxzZSBpZiAocmVxLm1ldGhvZCA9PT0gXCJERUxFVEVcIikge1xuICAgIGF3YWl0IHByaXNtYS5yb29tLmRlbGV0ZSh7IHdoZXJlOiB7IGlkOiByb29tSWQgfSB9KTtcbiAgICByZXMuc3RhdHVzKDIwNCkuZW5kKCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzLnN0YXR1cyg0MDUpLmVuZCgpO1xuICB9XG59XG4iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInJvb21JZCIsInBhcnNlSW50IiwicXVlcnkiLCJpZCIsIm1ldGhvZCIsInJvb20iLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJqc29uIiwic3RhdHVzIiwiZXJyb3IiLCJudW1iZXIiLCJ0eXBlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImJvZHkiLCJ1cGRhdGUiLCJkYXRhIiwiZGVsZXRlIiwiZW5kIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api-node)/./pages/api/rooms/[id].js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Frooms%2F%5Bid%5D&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Frooms%2F%5Bid%5D.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();
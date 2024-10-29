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
exports.id = "pages/api/products";
exports.ids = ["pages/api/products"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "(api)/./db/connect.js":
/*!***********************!*\
  !*** ./db/connect.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\n/**\n * Global is used here to maintain a cached connection across hot reloads\n * in development. This prevents connections growing exponentially\n * during API Route usage.\n */ let cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9jb25uZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxjQUFjQyxRQUFRQyxJQUFJRjtBQUVoQyxJQUFJLENBQUNBLGFBQWE7SUFDaEIsTUFBTSxJQUFJRyxNQUNSO0FBRUo7QUFFQTs7OztDQUlDLEdBQ0QsSUFBSUMsU0FBU0MsT0FBT047QUFFcEIsSUFBSSxDQUFDSyxRQUFRO0lBQ1hBLFNBQVNDLE9BQU9OLFdBQVc7UUFBRU8sTUFBTTtRQUFNQyxTQUFTO0lBQUs7QUFDekQ7QUFFQSxlQUFlQztJQUNiLElBQUlKLE9BQU9FLE1BQU07UUFDZixPQUFPRixPQUFPRTtJQUNoQjtJQUVBLElBQUksQ0FBQ0YsT0FBT0csU0FBUztRQUNuQixNQUFNRSxPQUFPO1lBQ1hDLGdCQUFnQjtRQUNsQjtRQUVBTixPQUFPRyxVQUFVUix1REFBZ0JZLENBQUNYLGFBQWFTLE1BQU1HLEtBQUssQ0FBQ2I7WUFDekQsT0FBT0E7UUFDVDtJQUNGO0lBRUEsSUFBSTtRQUNGSyxPQUFPRSxPQUFPLE1BQU1GLE9BQU9HO0lBQzdCLEVBQUUsT0FBT00sR0FBRztRQUNWVCxPQUFPRyxVQUFVO1FBQ2pCLE1BQU1NO0lBQ1I7SUFFQSxPQUFPVCxPQUFPRTtBQUNoQjtBQUVBLGlFQUFlRSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFja2VuZC11cGRhdGUtYW5kLWRlbGV0ZV9wcm9kdWN0cy8uL2RiL2Nvbm5lY3QuanM/Yzc0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IE1PTkdPREJfVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XG5cbmlmICghTU9OR09EQl9VUkkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgIFwiUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWxcIlxuICApO1xufVxuXG4vKipcbiAqIEdsb2JhbCBpcyB1c2VkIGhlcmUgdG8gbWFpbnRhaW4gYSBjYWNoZWQgY29ubmVjdGlvbiBhY3Jvc3MgaG90IHJlbG9hZHNcbiAqIGluIGRldmVsb3BtZW50LiBUaGlzIHByZXZlbnRzIGNvbm5lY3Rpb25zIGdyb3dpbmcgZXhwb25lbnRpYWxseVxuICogZHVyaW5nIEFQSSBSb3V0ZSB1c2FnZS5cbiAqL1xubGV0IGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZTtcblxuaWYgKCFjYWNoZWQpIHtcbiAgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcbiAgaWYgKGNhY2hlZC5jb25uKSB7XG4gICAgcmV0dXJuIGNhY2hlZC5jb25uO1xuICB9XG5cbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICBidWZmZXJDb21tYW5kczogZmFsc2UsXG4gICAgfTtcblxuICAgIGNhY2hlZC5wcm9taXNlID0gbW9uZ29vc2UuY29ubmVjdChNT05HT0RCX1VSSSwgb3B0cykudGhlbigobW9uZ29vc2UpID0+IHtcbiAgICAgIHJldHVybiBtb25nb29zZTtcbiAgICB9KTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhY2hlZC5wcm9taXNlID0gbnVsbDtcbiAgICB0aHJvdyBlO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlZC5jb25uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJFcnJvciIsImNhY2hlZCIsImdsb2JhbCIsImNvbm4iLCJwcm9taXNlIiwiZGJDb25uZWN0Iiwib3B0cyIsImJ1ZmZlckNvbW1hbmRzIiwiY29ubmVjdCIsInRoZW4iLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./db/connect.js\n");

/***/ }),

/***/ "(api)/./db/models/Product.js":
/*!******************************!*\
  !*** ./db/models/Product.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Review__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Review */ \"(api)/./db/models/Review.js\");\n\n\nconst { Schema } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst productSchema = new Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    description: {\n        type: String,\n        required: true\n    },\n    price: {\n        type: Number,\n        required: true\n    },\n    currency: {\n        type: String,\n        required: true\n    },\n    reviews: {\n        type: [\n            Schema.Types.ObjectId\n        ],\n        ref: \"Review\"\n    }\n});\nconst Product = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Product || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Product\", productSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9tb2RlbHMvUHJvZHVjdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdDO0FBQ2Q7QUFDbEIsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0QsaURBQVFBO0FBRTNCLE1BQU1FLGdCQUFnQixJQUFJRCxPQUFPO0lBQy9CRSxNQUFNO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUNyQ0MsYUFBYTtRQUFFSCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDNUNFLE9BQU87UUFBRUosTUFBTUs7UUFBUUgsVUFBVTtJQUFLO0lBQ3RDSSxVQUFVO1FBQUVOLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN6Q0ssU0FBUztRQUFFUCxNQUFNO1lBQUNILE9BQU9XLE1BQU1DO1NBQVM7UUFBRUMsS0FBSztJQUFTO0FBQzFEO0FBRUEsTUFBTUMsVUFDSmYsd0RBQWVnQixDQUFDRCxXQUFXZixxREFBY2lCLENBQUMsV0FBV2Y7QUFFdkQsaUVBQWVhLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWNrZW5kLXVwZGF0ZS1hbmQtZGVsZXRlX3Byb2R1Y3RzLy4vZGIvbW9kZWxzL1Byb2R1Y3QuanM/Mjk1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgXCIuL1Jldmlld1wiO1xuY29uc3QgeyBTY2hlbWEgfSA9IG1vbmdvb3NlO1xuXG5jb25zdCBwcm9kdWN0U2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICBkZXNjcmlwdGlvbjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIHByaWNlOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgY3VycmVuY3k6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICByZXZpZXdzOiB7IHR5cGU6IFtTY2hlbWEuVHlwZXMuT2JqZWN0SWRdLCByZWY6IFwiUmV2aWV3XCIgfSxcbn0pO1xuXG5jb25zdCBQcm9kdWN0ID1cbiAgbW9uZ29vc2UubW9kZWxzLlByb2R1Y3QgfHwgbW9uZ29vc2UubW9kZWwoXCJQcm9kdWN0XCIsIHByb2R1Y3RTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwicHJvZHVjdFNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiTnVtYmVyIiwiY3VycmVuY3kiLCJyZXZpZXdzIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsIlByb2R1Y3QiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./db/models/Product.js\n");

/***/ }),

/***/ "(api)/./db/models/Review.js":
/*!*****************************!*\
  !*** ./db/models/Review.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { Schema } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst reviewSchema = new Schema({\n    title: {\n        type: String,\n        required: true\n    },\n    text: {\n        type: String,\n        required: true\n    },\n    rating: {\n        type: Number,\n        required: true\n    }\n});\nconst Review = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Review || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Review\", reviewSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Review);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9tb2RlbHMvUmV2aWV3LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHRCxpREFBUUE7QUFFM0IsTUFBTUUsZUFBZSxJQUFJRCxPQUFPO0lBQzlCRSxPQUFPO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN0Q0MsTUFBTTtRQUFFSCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDckNFLFFBQVE7UUFBRUosTUFBTUs7UUFBUUgsVUFBVTtJQUFLO0FBQ3pDO0FBRUEsTUFBTUksU0FBU1Ysd0RBQWVXLENBQUNELFVBQVVWLHFEQUFjWSxDQUFDLFVBQVVWO0FBRWxFLGlFQUFlUSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFja2VuZC11cGRhdGUtYW5kLWRlbGV0ZV9wcm9kdWN0cy8uL2RiL21vZGVscy9SZXZpZXcuanM/NmJkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IHsgU2NoZW1hIH0gPSBtb25nb29zZTtcblxuY29uc3QgcmV2aWV3U2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIHRpdGxlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgdGV4dDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIHJhdGluZzogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXG59KTtcblxuY29uc3QgUmV2aWV3ID0gbW9uZ29vc2UubW9kZWxzLlJldmlldyB8fCBtb25nb29zZS5tb2RlbChcIlJldmlld1wiLCByZXZpZXdTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBSZXZpZXc7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJyZXZpZXdTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInRleHQiLCJyYXRpbmciLCJOdW1iZXIiLCJSZXZpZXciLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./db/models/Review.js\n");

/***/ }),

/***/ "(api)/./pages/api/products/index.js":
/*!*************************************!*\
  !*** ./pages/api/products/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _db_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../db/connect */ \"(api)/./db/connect.js\");\n/* harmony import */ var _db_models_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../db/models/Product */ \"(api)/./db/models/Product.js\");\n\n\n\nasync function handler(request, response) {\n    await (0,_db_connect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    if (request.method === \"GET\") {\n        const products = await _db_models_Product__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find();\n        return response.status(200).json(products);\n    }\n    if (request.method === \"POST\") {\n        try {\n            const productData = request.body;\n            const product = new _db_models_Product__WEBPACK_IMPORTED_MODULE_2__[\"default\"](productData);\n            await product.save();\n            return response.status(201).json({\n                status: \"Product created.\"\n            });\n        } catch (error) {\n            console.error(error);\n            return response.status(400).json({\n                error: error.message\n            });\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUM7QUFDVztBQUNLO0FBRWxDLGVBQWVHLFFBQVFDLE9BQU8sRUFBRUMsUUFBUTtJQUNyRCxNQUFNSix1REFBU0E7SUFFZixJQUFJRyxRQUFRRSxXQUFXLE9BQU87UUFDNUIsTUFBTUMsV0FBVyxNQUFNTCwrREFBWU07UUFDbkMsT0FBT0gsU0FBU0ksT0FBTyxLQUFLQyxLQUFLSDtJQUNuQztJQUVBLElBQUlILFFBQVFFLFdBQVcsUUFBUTtRQUM3QixJQUFJO1lBQ0YsTUFBTUssY0FBY1AsUUFBUVE7WUFDNUIsTUFBTUMsVUFBVSxJQUFJWCwwREFBT0EsQ0FBQ1M7WUFDNUIsTUFBTUUsUUFBUUM7WUFDZCxPQUFPVCxTQUFTSSxPQUFPLEtBQUtDLEtBQUs7Z0JBQUVELFFBQVE7WUFBbUI7UUFDaEUsRUFBRSxPQUFPTSxPQUFPO1lBQ2RDLFFBQVFELE1BQU1BO1lBQ2QsT0FBT1YsU0FBU0ksT0FBTyxLQUFLQyxLQUFLO2dCQUFFSyxPQUFPQSxNQUFNRTtZQUFRO1FBQzFEO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhY2tlbmQtdXBkYXRlLWFuZC1kZWxldGVfcHJvZHVjdHMvLi9wYWdlcy9hcGkvcHJvZHVjdHMvaW5kZXguanM/NTk3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiLi4vLi4vLi4vZGIvY29ubmVjdFwiO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4uLy4uLy4uL2RiL21vZGVscy9Qcm9kdWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgYXdhaXQgZGJDb25uZWN0KCk7XG5cbiAgaWYgKHJlcXVlc3QubWV0aG9kID09PSBcIkdFVFwiKSB7XG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBQcm9kdWN0LmZpbmQoKTtcbiAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKDIwMCkuanNvbihwcm9kdWN0cyk7XG4gIH1cblxuICBpZiAocmVxdWVzdC5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHByb2R1Y3REYXRhID0gcmVxdWVzdC5ib2R5O1xuICAgICAgY29uc3QgcHJvZHVjdCA9IG5ldyBQcm9kdWN0KHByb2R1Y3REYXRhKTtcbiAgICAgIGF3YWl0IHByb2R1Y3Quc2F2ZSgpO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cygyMDEpLmpzb24oeyBzdGF0dXM6IFwiUHJvZHVjdCBjcmVhdGVkLlwiIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJkYkNvbm5lY3QiLCJQcm9kdWN0IiwiaGFuZGxlciIsInJlcXVlc3QiLCJyZXNwb25zZSIsIm1ldGhvZCIsInByb2R1Y3RzIiwiZmluZCIsInN0YXR1cyIsImpzb24iLCJwcm9kdWN0RGF0YSIsImJvZHkiLCJwcm9kdWN0Iiwic2F2ZSIsImVycm9yIiwiY29uc29sZSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/products/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products/index.js"));
module.exports = __webpack_exports__;

})();
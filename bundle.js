/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setAbout: () => (/* binding */ setAbout)\n/* harmony export */ });\n/* harmony import */ var _assets_images_map_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/map.png */ \"./src/assets/images/map.png\");\n\n\nconst setAbout = (container) => {\n    container.firstChild ? container.removeChild(container.firstChild) : null;\n    const about = document.createElement('div');\n    about.setAttribute('id', 'about');\n    about.innerHTML = `\n        <p id=\"tel\">123-456-7890</p>\n            <div id=\"hours\">\n                <p>\n                    <span>Monday-Thursday:</span> 8am-8pm<br>\n                    Friday-Sunday: 8am-11pm\n                </p>\n            </div>\n            <p id=\"location\">8888 Country Hills Blvd NW Unit 301, Calgary, AB T3G 5T4</p>\n            <div class=\"imageContainer\">\n                <img src=\"${_assets_images_map_png__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"location\">\n            </div>\n        </div>`\n    container.appendChild(about);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setHome: () => (/* binding */ setHome)\n/* harmony export */ });\n/* harmony import */ var _assets_images_homeImage_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/homeImage.jpeg */ \"./src/assets/images/homeImage.jpeg\");\n\n\nconst setHome = (container) => {\n    container.firstChild ? container.removeChild(container.firstChild) : null;\n    const home = document.createElement('div');\n    home.setAttribute('id', 'home');\n    home.innerHTML = `\n        <p class=\"introduction\">Best restaurant in Canada!</p>\n        <div class=\"imageContainer\">\n            <img src=\"${_assets_images_homeImage_jpeg__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"homeImage\">\n        </div>\n        <p class=\"introduction\">\"MISHA RESTAURANT IS FILLED WITH REGULARS AND OUR PEOPLE ARE WARM AND WELCOMING.\"</p>\n        <p class=\"introduction\">Order online or visit us!</p>`\n    container.appendChild(home);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './index.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\n\nconst body = document.querySelector('body');\n\nconst buildHtmlPage = (() => {\n\n    const header = document.createElement('header');\n    header.innerHTML = `\n            <h1 id=\"logo\">Misha Restaurant</h1>\n        <nav>\n            <button value=\"Home\">Home</button>\n            <button value=\"Menu\">Menu</button>\n            <button value=\"About\">About</button>\n        </nav>`;\n    body.appendChild(header);\n\n    const container = document.createElement('div');\n    container.classList.add('container');\n    body.appendChild(container);\n\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.setHome)(container);\n\n    const footer = document.createElement('footer');\n    footer.innerHTML = `Copyright@2024 MISHA`;\n    body.appendChild(footer);\n\n    const nav = document.querySelector('nav');\n    nav.addEventListener('click', () => {\n        const value = event.target.value;\n        switch (value) {\n            case 'Home':\n                (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.setHome)(container);\n                break;\n            case 'Menu':\n                (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.setMenu)(container);\n                break;\n            case 'About':\n                (0,_about_js__WEBPACK_IMPORTED_MODULE_3__.setAbout)(container);\n                break;\n        }\n    })\n})();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setMenu: () => (/* binding */ setMenu)\n/* harmony export */ });\n/* harmony import */ var _assets_images_Asian_Pasta_Salad_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/Asian Pasta Salad.webp */ \"./src/assets/images/Asian Pasta Salad.webp\");\n/* harmony import */ var _assets_images_Chicken_Avocado_and_Mango_Salad_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/Chicken, Avocado and Mango Salad.webp */ \"./src/assets/images/Chicken, Avocado and Mango Salad.webp\");\n/* harmony import */ var _assets_images_Real_N_awlins_Muffuletta_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/Real N'awlins Muffuletta.webp */ \"./src/assets/images/Real N'awlins Muffuletta.webp\");\n/* harmony import */ var _assets_images_Roast_Beef_Horseradish_Roll_Ups_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/Roast Beef Horseradish Roll-Ups.webp */ \"./src/assets/images/Roast Beef Horseradish Roll-Ups.webp\");\n/* harmony import */ var _assets_images_Saigon_Noodle_Salad_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/Saigon Noodle Salad.webp */ \"./src/assets/images/Saigon Noodle Salad.webp\");\n/* harmony import */ var _assets_images_Tuna_Macaroni_Salad_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/Tuna Macaroni Salad.webp */ \"./src/assets/images/Tuna Macaroni Salad.webp\");\n\n\n\n\n\n\n\nconst setMenu = (container) => {\n    container.firstChild ? container.removeChild(container.firstChild) : null;\n    const menu = document.createElement('div');\n    menu.setAttribute('id', 'menu');\n    menu.innerHTML = `\n        <div class=\"menuItem\">\n            <div class=\"imageContainer\">\n                <img src=\"${_assets_images_Asian_Pasta_Salad_webp__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"Asian Pasta Salad\">\n            </div>\n            <h1>Asian Pasta Salad</h1>\n            <p>package spaghetti, toasted sesame seeds, green onions, red bell pepper, sugar snap peas</p>\n        </div>\n        <div class=\"menuItem\">\n            <div class=\"imageContainer\">\n                <img src=\"${_assets_images_Chicken_Avocado_and_Mango_Salad_webp__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"Chicken, Avocado and Mango Salad\">\n            </div>\n            <h1>Chicken, Avocado and Mango Salad</h1>\n            <p>lime juice, chicken, peeled, seeded and diced mangos, peeled, pitted and diced avocados, spring lettuce\n                mix</p>\n        </div>\n        <div class=\"menuItem\">\n            <div class=\"imageContainer\">\n                <img src=\"${_assets_images_Real_N_awlins_Muffuletta_webp__WEBPACK_IMPORTED_MODULE_2__}\" alt=\"Real N'awlins Muffuletta\">\n            </div>\n            <h1>Real N'awlins Muffuletta</h1>\n            <p>olives, cauliflower florets, capers, cocktail onions, celery, carrot, dried oregano</p>\n        </div>\n        <div class=\"menuItem\">\n            <div class=\"imageContainer\">\n                <img src=\"${_assets_images_Roast_Beef_Horseradish_Roll_Ups_webp__WEBPACK_IMPORTED_MODULE_3__}\" alt=\"Roast Beef Horseradish Roll-Ups\">\n            </div>\n            <h1>Roast Beef Horseradish Roll-Ups</h1>\n            <p>cream cheese, flour tortillas, spinach leaves, roast beef, cheese</p>\n        </div>\n        <div class=\"menuItem\">\n            <div class=\"imageContainer\">\n                <img src=\"${_assets_images_Saigon_Noodle_Salad_webp__WEBPACK_IMPORTED_MODULE_4__}\" alt=\"Saigon Noodle Salad\">\n            </div>\n            <h1>Saigon Noodle Salad</h1>\n            <p>rice noodles,Napa cabbage, carrots, grilled shrimp, bean sprouts, cucumber,green onions, mint, cilantro,\n                basil, peanuts</p>\n        </div>\n        <div class=\"menuItem\">\n            <div class=\"imageContainer\">\n                <img src=\"${_assets_images_Tuna_Macaroni_Salad_webp__WEBPACK_IMPORTED_MODULE_5__}\" alt=\"Tuna Macaroni Salad\">\n            </div>\n            <h1>Tuna Macaroni Salad</h1>\n            <p>package elbow macaroni, baby peas, celery, tuna, sweet onion, sweet pickle relish, hard-cooked eggs</p>\n        </div>`\n    container.appendChild(menu);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/assets/images/Asian Pasta Salad.webp":
/*!**************************************************!*\
  !*** ./src/assets/images/Asian Pasta Salad.webp ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/Asian Pasta Saladc36e5b3d99dc092c75cc.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/Asian_Pasta_Salad.webp?");

/***/ }),

/***/ "./src/assets/images/Chicken, Avocado and Mango Salad.webp":
/*!*****************************************************************!*\
  !*** ./src/assets/images/Chicken, Avocado and Mango Salad.webp ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/Chicken, Avocado and Mango Salad04bba5aad5e45b254f7b.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/Chicken,_Avocado_and_Mango_Salad.webp?");

/***/ }),

/***/ "./src/assets/images/Real N'awlins Muffuletta.webp":
/*!*********************************************************!*\
  !*** ./src/assets/images/Real N'awlins Muffuletta.webp ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/Real N'awlins Muffulettac5421a9c588be437b3ff.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/Real_N'awlins_Muffuletta.webp?");

/***/ }),

/***/ "./src/assets/images/Roast Beef Horseradish Roll-Ups.webp":
/*!****************************************************************!*\
  !*** ./src/assets/images/Roast Beef Horseradish Roll-Ups.webp ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/Roast Beef Horseradish Roll-Ups73f6e592bc96c8685eca.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/Roast_Beef_Horseradish_Roll-Ups.webp?");

/***/ }),

/***/ "./src/assets/images/Saigon Noodle Salad.webp":
/*!****************************************************!*\
  !*** ./src/assets/images/Saigon Noodle Salad.webp ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/Saigon Noodle Saladf0a983f8585da5ea9aea.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/Saigon_Noodle_Salad.webp?");

/***/ }),

/***/ "./src/assets/images/Tuna Macaroni Salad.webp":
/*!****************************************************!*\
  !*** ./src/assets/images/Tuna Macaroni Salad.webp ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/Tuna Macaroni Salad83e886c46a80a4e21adb.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/Tuna_Macaroni_Salad.webp?");

/***/ }),

/***/ "./src/assets/images/homeImage.jpeg":
/*!******************************************!*\
  !*** ./src/assets/images/homeImage.jpeg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/homeImage2322687ebbb60e24f62c.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/homeImage.jpeg?");

/***/ }),

/***/ "./src/assets/images/map.png":
/*!***********************************!*\
  !*** ./src/assets/images/map.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/map5c7567813c3a5a41e778.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/map.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
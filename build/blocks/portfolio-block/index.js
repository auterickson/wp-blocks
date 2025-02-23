/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/portfolio-block/block.json":
/*!***********************************************!*\
  !*** ./src/blocks/portfolio-block/block.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"ae/portfolio-block","version":"0.1.0","title":"Portfolio Block","category":"design","icon":"portfolio","description":"build your portfolio with portfolio blocks","example":{},"supports":{"html":false},"textdomain":"portfolio-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","keywords":["portfolio","ae"],"attributes":{"avatarURL":{"type":"string","default":"http://place-hold.it/75"}}}');

/***/ }),

/***/ "./src/blocks/portfolio-block/edit.js":
/*!********************************************!*\
  !*** ./src/blocks/portfolio-block/edit.js ***!
  \********************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/autumn/high-pulp-blocks/src/blocks/portfolio-block/edit.js: Identifier 'MediaUpload' has already been declared. (32:30)\n\n\u001b[0m \u001b[90m 30 |\u001b[39m \u001b[90m * @return {Element} Element to render.\u001b[39m\n \u001b[90m 31 |\u001b[39m \u001b[90m */\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 32 |\u001b[39m \u001b[36mimport\u001b[39m { \u001b[33mRichText\u001b[39m\u001b[33m,\u001b[39m \u001b[33mPlainText\u001b[39m\u001b[33m,\u001b[39m \u001b[33mMediaUpload\u001b[39m\u001b[33m,\u001b[39m \u001b[33mMediaUploadCheck\u001b[39m } \u001b[36mfrom\u001b[39m \u001b[32m'@wordpress/block-editor'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m    |\u001b[39m                               \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 33 |\u001b[39m \u001b[36mimport\u001b[39m { \u001b[33mSelectControl\u001b[39m} \u001b[36mfrom\u001b[39m \u001b[32m\"@wordpress/components\"\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 34 |\u001b[39m \u001b[90m//export default function Edit(props)\u001b[39m\n \u001b[90m 35 |\u001b[39m \u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m \u001b[36mfunction\u001b[39m \u001b[33mEdit\u001b[39m( {attributes\u001b[33m,\u001b[39m setAttributes} ) {\u001b[0m\n    at constructor (/home/autumn/high-pulp-blocks/node_modules/@babel/parser/lib/index.js:360:19)\n    at JSXParserMixin.raise (/home/autumn/high-pulp-blocks/node_modules/@babel/parser/lib/index.js:3327:19)\n    at ScopeHandler.checkRedeclarationInScope (/home/autumn/high-pulp-blocks/node_modules/@babel/parser/lib/index.js:1555:19)\n    at ScopeHandler.declareName (/home/autumn/high-pulp-blocks/node_modules/@babel/parser/lib/index.js:1521:12)\n    at JSXParserMixin.declareNameFromIdentifier (/home/autumn/high-pulp-blocks/node_modules/@babel/parser/lib/index.js:7476:16)\n    at JSXParserMixin.checkIdentifier (/home/autumn/high-pulp-blocks/node_modules/@babel/parser/lib/index.js:7472:12)\n    at JSXParserMixin.checkLVal (/home/autumn/high-pulp-blocks/node_modules/@babel/parser/lib/index.js:7413:12)\n    at JSXParserMixin.finishImportSpecifier (/home/autumn/high-pulp-blocks/node_modules/@babel/parser/lib/index.js:13898:10)\n    at JSXParserMixin.parseImportSpecifier (/home/autumn/high-pulp-blocks/node_modules/@babel/parser/lib/index.js:14054:17)\n    at JSXParserMixin.parseNamedImportSpecifiers (/home/autumn/high-pulp-blocks/node_modules/@babel/parser/lib/index.js:14033:36)\n    at JSXParserMixin.parseImportSpecifiersAndAfter (/home/autumn/high-pulp-blocks/node_modules/@babel/parser/lib/index.js:13875:37)\n    at JSXParserMixin.parseImport (/home/autumn/high-pulp-blocks/node_modules/@babel/parser/lib/index.js:13868:17)\n    at JSXParserMixin.parseStatementContent (/home/autumn/high-pulp-blocks/node_modules/@babel/parser/lib/index.js:12514:27)\n    at JSXParserMixin.parseStatementLike (/home/autumn/high-pulp-blocks/node_modules/@babel/parser/lib/index.js:12406:17)\n    at JSXParserMixin.parseModuleItem (/home/autumn/high-pulp-blocks/node_modules/@babel/parser/lib/index.js:12383:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (/home/autumn/high-pulp-blocks/node_modules/@babel/parser/lib/index.js:12960:36)\n    at JSXParserMixin.parseBlockBody (/home/autumn/high-pulp-blocks/node_modules/@babel/parser/lib/index.js:12953:10)\n    at JSXParserMixin.parseProgram (/home/autumn/high-pulp-blocks/node_modules/@babel/parser/lib/index.js:12280:10)\n    at JSXParserMixin.parseTopLevel (/home/autumn/high-pulp-blocks/node_modules/@babel/parser/lib/index.js:12270:25)\n    at JSXParserMixin.parse (/home/autumn/high-pulp-blocks/node_modules/@babel/parser/lib/index.js:14120:10)\n    at parse (/home/autumn/high-pulp-blocks/node_modules/@babel/parser/lib/index.js:14154:38)\n    at parser (/home/autumn/high-pulp-blocks/node_modules/@babel/core/lib/parser/index.js:41:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/home/autumn/high-pulp-blocks/node_modules/@babel/core/lib/transformation/normalize-file.js:64:37)\n    at normalizeFile.next (<anonymous>)\n    at run (/home/autumn/high-pulp-blocks/node_modules/@babel/core/lib/transformation/index.js:21:50)\n    at run.next (<anonymous>)\n    at transform (/home/autumn/high-pulp-blocks/node_modules/@babel/core/lib/transform.js:22:33)\n    at transform.next (<anonymous>)\n    at step (/home/autumn/high-pulp-blocks/node_modules/gensync/index.js:261:32)\n    at /home/autumn/high-pulp-blocks/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/home/autumn/high-pulp-blocks/node_modules/gensync/index.js:223:11)");

/***/ }),

/***/ "./src/blocks/portfolio-block/index.js":
/*!*********************************************!*\
  !*** ./src/blocks/portfolio-block/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/portfolio-block/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/portfolio-block/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/portfolio-block/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/portfolio-block/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/blocks/portfolio-block/save.js":
/*!********************************************!*\
  !*** ./src/blocks/portfolio-block/save.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */

function save() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)(),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "photo",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
        src: attributes.avatarURL,
        alt: "photo of " + attributes.author
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "card-content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "tags",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "tags",
          children: "tag"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "tags",
          children: "tag"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "description",
        children: "This is my project and here is some basic information on it. I really like it!"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
        href: "#",
        className: "btn",
        children: "Check It Out"
      })]
    })]
  });
}

/***/ }),

/***/ "./src/blocks/portfolio-block/style.scss":
/*!***********************************************!*\
  !*** ./src/blocks/portfolio-block/style.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactJSXRuntime"];

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/portfolio-block/index": 0,
/******/ 			"blocks/portfolio-block/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkhigh_pulp_blocks"] = globalThis["webpackChunkhigh_pulp_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/portfolio-block/style-index"], () => (__webpack_require__("./src/blocks/portfolio-block/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
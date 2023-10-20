/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/grid */ \"./src/scripts/grid.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  // console.log(\"Hello from index.js\");\n  const gridContainer = document.querySelector(\".grid-container\");\n  const grid = new _scripts_grid__WEBPACK_IMPORTED_MODULE_0__[\"default\"](gridContainer);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBa0M7QUFFbENDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRDtFQUNBLE1BQU1DLGFBQWEsR0FBR0YsUUFBUSxDQUFDRyxhQUFhLENBQUMsaUJBQWlCLENBQUM7RUFDL0QsTUFBTUMsSUFBSSxHQUFHLElBQUlMLHFEQUFJLENBQUNHLGFBQWEsQ0FBQztBQUN4QyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXRoZmluZGVyLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdyaWQgZnJvbSBcIi4vc2NyaXB0cy9ncmlkXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIkhlbGxvIGZyb20gaW5kZXguanNcIik7XG4gICAgY29uc3QgZ3JpZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JpZC1jb250YWluZXJcIik7XG4gICAgY29uc3QgZ3JpZCA9IG5ldyBHcmlkKGdyaWRDb250YWluZXIpO1xufSk7XG5cblxuXG4iXSwibmFtZXMiOlsiR3JpZCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdyaWRDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiZ3JpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/grid.js":
/*!*****************************!*\
  !*** ./src/scripts/grid.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Grid {\n  constructor(gridContainer) {\n    this.gridContainer = gridContainer;\n    this.createGrid();\n  }\n  createGrid() {\n    // 3d version\n    // const numFloors = 2;\n    // const numRows = 23;\n    // const numCols = 23;\n    // for(let i = 0; i < numFloors; i++) {\n    //     let floor = document.createElement(\"table\");      // for each floor, create a table\n    //     floor.classList.add(`floor-${i}`);\n    //     for(let j = 0; j < numRows; j++) {\n    //         let row = document.createElement(\"tr\");       // for each row, create row and add into table\n    //         row.classList.add(`row-${j}`);                            // add a class of row {row#}\n    //         for(let k = 0; k < numCols; k++) {\n    //             let sq = document.createElement(\"td\");\n    //             sq.classList.add(`${i}-${j}-${k}`);\n    //             row.appendChild(sq);\n    //         }\n    //         floor.appendChild(row);\n    //     }\n    //     // debugger\n    //     this.gridContainer.appendChild(floor);\n    // }\n\n    // 2d version\n    const numRows = 23;\n    const numCols = 46;\n    let floor = document.createElement(\"table\"); // for each floor, create a table\n    floor.classList.add(`table`);\n    for (let j = 0; j < numRows; j++) {\n      let row = document.createElement(\"tr\"); // for each row, create row and add into table\n      row.classList.add(`row-${j}`); // add a class of row {row#}\n      for (let k = 0; k < numCols; k++) {\n        let sq = document.createElement(\"td\");\n        sq.classList.add(`${j}-${k}`);\n        row.appendChild(sq);\n      }\n      floor.appendChild(row);\n    }\n    this.gridContainer.appendChild(floor);\n    let start = document.querySelector('[class=\"11-11\"]');\n    let end = document.querySelector('[class=\"11-34\"]');\n    start.classList.add(\"start\");\n    end.classList.add(\"end\");\n    start.setAttribute(\"draggable\", \"true\");\n    end.setAttribute(\"draggable\", \"true\");\n    start.innerHTML = \"<i class=\\\"fas fa-location-arrow\\\"></i>\";\n    end.innerHTML = \"<i class=\\\"far fa-times-circle\\\"></i>\";\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Grid);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9ncmlkLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxJQUFJLENBQUM7RUFDUEMsV0FBV0EsQ0FBQ0MsYUFBYSxFQUFFO0lBQ3ZCLElBQUksQ0FBQ0EsYUFBYSxHQUFHQSxhQUFhO0lBQ2xDLElBQUksQ0FBQ0MsVUFBVSxDQUFDLENBQUM7RUFDckI7RUFFQUEsVUFBVUEsQ0FBQSxFQUFHO0lBQ1Q7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQTtJQUNBLE1BQU1DLE9BQU8sR0FBRyxFQUFFO0lBQ2xCLE1BQU1DLE9BQU8sR0FBRyxFQUFFO0lBQ2xCLElBQUlDLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBTTtJQUNsREYsS0FBSyxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBRSxPQUFNLENBQUM7SUFDNUIsS0FBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdQLE9BQU8sRUFBRU8sQ0FBQyxFQUFFLEVBQUU7TUFDN0IsSUFBSUMsR0FBRyxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFPO01BQzlDSSxHQUFHLENBQUNILFNBQVMsQ0FBQ0MsR0FBRyxDQUFFLE9BQU1DLENBQUUsRUFBQyxDQUFDLENBQUMsQ0FBNEI7TUFDMUQsS0FBSSxJQUFJRSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdSLE9BQU8sRUFBRVEsQ0FBQyxFQUFFLEVBQUU7UUFDN0IsSUFBSUMsRUFBRSxHQUFHUCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDckNNLEVBQUUsQ0FBQ0wsU0FBUyxDQUFDQyxHQUFHLENBQUUsR0FBRUMsQ0FBRSxJQUFHRSxDQUFFLEVBQUMsQ0FBQztRQUM3QkQsR0FBRyxDQUFDRyxXQUFXLENBQUNELEVBQUUsQ0FBQztNQUN2QjtNQUNBUixLQUFLLENBQUNTLFdBQVcsQ0FBQ0gsR0FBRyxDQUFDO0lBQzFCO0lBQ0EsSUFBSSxDQUFDVixhQUFhLENBQUNhLFdBQVcsQ0FBQ1QsS0FBSyxDQUFDO0lBRXJDLElBQUlVLEtBQUssR0FBR1QsUUFBUSxDQUFDVSxhQUFhLENBQUMsaUJBQWlCLENBQUM7SUFDckQsSUFBSUMsR0FBRyxHQUFHWCxRQUFRLENBQUNVLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztJQUNuREQsS0FBSyxDQUFDUCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDNUJRLEdBQUcsQ0FBQ1QsU0FBUyxDQUFDQyxHQUFHLENBQUMsS0FBSyxDQUFDO0lBRXhCTSxLQUFLLENBQUNHLFlBQVksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDO0lBQ3ZDRCxHQUFHLENBQUNDLFlBQVksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDO0lBRXJDSCxLQUFLLENBQUNJLFNBQVMsR0FBRyx5Q0FBeUM7SUFDM0RGLEdBQUcsQ0FBQ0UsU0FBUyxHQUFHLHVDQUF1QztFQUUzRDtBQUNKO0FBRUEsK0RBQWVwQixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGF0aGZpbmRlci8uL3NyYy9zY3JpcHRzL2dyaWQuanM/ZjZiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHcmlkIHtcbiAgICBjb25zdHJ1Y3RvcihncmlkQ29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuZ3JpZENvbnRhaW5lciA9IGdyaWRDb250YWluZXI7XG4gICAgICAgIHRoaXMuY3JlYXRlR3JpZCgpO1xuICAgIH1cblxuICAgIGNyZWF0ZUdyaWQoKSB7XG4gICAgICAgIC8vIDNkIHZlcnNpb25cbiAgICAgICAgLy8gY29uc3QgbnVtRmxvb3JzID0gMjtcbiAgICAgICAgLy8gY29uc3QgbnVtUm93cyA9IDIzO1xuICAgICAgICAvLyBjb25zdCBudW1Db2xzID0gMjM7XG4gICAgICAgIC8vIGZvcihsZXQgaSA9IDA7IGkgPCBudW1GbG9vcnM7IGkrKykge1xuICAgICAgICAvLyAgICAgbGV0IGZsb29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpOyAgICAgIC8vIGZvciBlYWNoIGZsb29yLCBjcmVhdGUgYSB0YWJsZVxuICAgICAgICAvLyAgICAgZmxvb3IuY2xhc3NMaXN0LmFkZChgZmxvb3ItJHtpfWApO1xuICAgICAgICAvLyAgICAgZm9yKGxldCBqID0gMDsgaiA8IG51bVJvd3M7IGorKykge1xuICAgICAgICAvLyAgICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7ICAgICAgIC8vIGZvciBlYWNoIHJvdywgY3JlYXRlIHJvdyBhbmQgYWRkIGludG8gdGFibGVcbiAgICAgICAgLy8gICAgICAgICByb3cuY2xhc3NMaXN0LmFkZChgcm93LSR7an1gKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkIGEgY2xhc3Mgb2Ygcm93IHtyb3cjfVxuICAgICAgICAvLyAgICAgICAgIGZvcihsZXQgayA9IDA7IGsgPCBudW1Db2xzOyBrKyspIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IHNxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAvLyAgICAgICAgICAgICBzcS5jbGFzc0xpc3QuYWRkKGAke2l9LSR7an0tJHtrfWApO1xuICAgICAgICAvLyAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoc3EpO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICBmbG9vci5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgLy8gICAgIHRoaXMuZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChmbG9vcik7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyAyZCB2ZXJzaW9uXG4gICAgICAgIGNvbnN0IG51bVJvd3MgPSAyMztcbiAgICAgICAgY29uc3QgbnVtQ29scyA9IDQ2O1xuICAgICAgICBsZXQgZmxvb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7ICAgICAgLy8gZm9yIGVhY2ggZmxvb3IsIGNyZWF0ZSBhIHRhYmxlXG4gICAgICAgIGZsb29yLmNsYXNzTGlzdC5hZGQoYHRhYmxlYCk7XG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBudW1Sb3dzOyBqKyspIHtcbiAgICAgICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7ICAgICAgIC8vIGZvciBlYWNoIHJvdywgY3JlYXRlIHJvdyBhbmQgYWRkIGludG8gdGFibGVcbiAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKGByb3ctJHtqfWApOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgYSBjbGFzcyBvZiByb3cge3JvdyN9XG4gICAgICAgICAgICBmb3IobGV0IGsgPSAwOyBrIDwgbnVtQ29sczsgaysrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgICAgIHNxLmNsYXNzTGlzdC5hZGQoYCR7an0tJHtrfWApO1xuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChzcSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmbG9vci5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChmbG9vcik7XG5cbiAgICAgICAgbGV0IHN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2NsYXNzPVwiMTEtMTFcIl0nKTtcbiAgICAgICAgbGV0IGVuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tjbGFzcz1cIjExLTM0XCJdJyk7XG4gICAgICAgIHN0YXJ0LmNsYXNzTGlzdC5hZGQoXCJzdGFydFwiKTtcbiAgICAgICAgZW5kLmNsYXNzTGlzdC5hZGQoXCJlbmRcIik7XG5cbiAgICAgICAgc3RhcnQuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgZW5kLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCBcInRydWVcIik7XG5cbiAgICAgICAgc3RhcnQuaW5uZXJIVE1MID0gXCI8aSBjbGFzcz1cXFwiZmFzIGZhLWxvY2F0aW9uLWFycm93XFxcIj48L2k+XCI7XG4gICAgICAgIGVuZC5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPVxcXCJmYXIgZmEtdGltZXMtY2lyY2xlXFxcIj48L2k+XCI7XG4gICAgICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JpZDsiXSwibmFtZXMiOlsiR3JpZCIsImNvbnN0cnVjdG9yIiwiZ3JpZENvbnRhaW5lciIsImNyZWF0ZUdyaWQiLCJudW1Sb3dzIiwibnVtQ29scyIsImZsb29yIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaiIsInJvdyIsImsiLCJzcSIsImFwcGVuZENoaWxkIiwic3RhcnQiLCJxdWVyeVNlbGVjdG9yIiwiZW5kIiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/grid.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXRoZmluZGVyLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;
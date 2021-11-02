/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\n\nlet todoLists = [\n    {description: '30 mins walk in the afternoon',\n    completed: false,\n    index: 0\n },\n {description: 'Play with the do do list ',\n completed: false,\n index: 1\n},\n{description: 'Check all the items in the todo list',\ncompleted: false,\nindex: 2\n},\n{description: 'use pomodor clock regylarly and update it in advanced',\ncompleted: false,\nindex: 3\n}\n];\n\nconst todos = document.querySelector('.list-items');\n\nfunction display() {\n    todos.innerHTML = \" \";\n    let todoList = todoLists;\n    todoList.forEach((item) => {\n        console.log(item)\n        todos.innerHTML += `\n        <form id=\"form\" action=\"#\">\n            <input type=\"checkbox\" >\n            <ul class=\"items\">\n                <li class=\"item\">${item.description} </li>\n            </ul>\n        </form>\n        `\n    })\n    \n}\n\ndisplay();\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;
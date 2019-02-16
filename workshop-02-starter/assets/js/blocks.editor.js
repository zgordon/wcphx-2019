/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/01-static/index.js":
/*!***********************************!*\
  !*** ./blocks/01-static/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\n/**\r\n * Register block\r\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (registerBlockType(\"jsforwpworkshop/static\", {\n  title: __(\"Workshop - Static\", \"jsforwpworkshop\"),\n  description: __(\"Demonstration of how to make a static call to action block.\", \"jsforwpworkshop\"),\n  category: \"common\",\n  icon: {\n    background: \"yellow\",\n    src: \"megaphone\"\n  },\n  keywords: [__(\"Banner CTA Shoutout\", \"jsforwpworkshop\")],\n  edit: function edit(props) {\n    return React.createElement(\"h3\", {\n      className: props.className\n    }, __(\"Static\", \"jsforwpworkshop\"));\n  },\n  save: function save(props) {\n    return React.createElement(\"h3\", null, __(\"Static\", \"jsforwpworkshop\"));\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ibG9ja3MvMDEtc3RhdGljL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYmxvY2tzLzAxLXN0YXRpYy9pbmRleC5qcz8wZDNhIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG4vKipcclxuICogUmVnaXN0ZXIgYmxvY2tcclxuICovXG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyQmxvY2tUeXBlKFwianNmb3J3cHdvcmtzaG9wL3N0YXRpY1wiLCB7XG4gIHRpdGxlOiBfXyhcIldvcmtzaG9wIC0gU3RhdGljXCIsIFwianNmb3J3cHdvcmtzaG9wXCIpLFxuICBkZXNjcmlwdGlvbjogX18oXCJEZW1vbnN0cmF0aW9uIG9mIGhvdyB0byBtYWtlIGEgc3RhdGljIGNhbGwgdG8gYWN0aW9uIGJsb2NrLlwiLCBcImpzZm9yd3B3b3Jrc2hvcFwiKSxcbiAgY2F0ZWdvcnk6IFwiY29tbW9uXCIsXG4gIGljb246IHtcbiAgICBiYWNrZ3JvdW5kOiBcInllbGxvd1wiLFxuICAgIHNyYzogXCJtZWdhcGhvbmVcIlxuICB9LFxuICBrZXl3b3JkczogW19fKFwiQmFubmVyIENUQSBTaG91dG91dFwiLCBcImpzZm9yd3B3b3Jrc2hvcFwiKV0sXG4gIGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImgzXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lXG4gICAgfSwgX18oXCJTdGF0aWNcIiwgXCJqc2Zvcndwd29ya3Nob3BcIikpO1xuICB9LFxuICBzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCBudWxsLCBfXyhcIlN0YXRpY1wiLCBcImpzZm9yd3B3b3Jrc2hvcFwiKSk7XG4gIH1cbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./blocks/01-static/index.js\n");

/***/ }),

/***/ "./blocks/02-dynamic/index.js":
/*!************************************!*\
  !*** ./blocks/02-dynamic/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\n/**\r\n * Register block\r\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (registerBlockType(\"jsforwpworkshop/dynamic\", {\n  title: __(\"Workshop - Dynamic\", \"jsforwpworkshop\"),\n  description: __(\"Demonstration of how to make a block with dynamic content using attributes.\", \"jsforwpworkshop\"),\n  category: \"common\",\n  icon: {\n    background: \"yellow\",\n    src: \"edit\"\n  },\n  keywords: [__(\"Editable Header\", \"jsforwpworkshop\")],\n  attributes: {\n    title: {\n      type: \"string\",\n      default: \"Enter a title\"\n    }\n  },\n  edit: function edit(props) {\n    var className = props.className,\n        setAttributes = props.setAttributes,\n        isSelected = props.isSelected,\n        title = props.attributes.title;\n    return React.createElement(\"h3\", {\n      className: className\n    }, isSelected ? React.createElement(\"input\", {\n      name: \"dynamic-title\",\n      value: title,\n      onChange: function onChange(event) {\n        setAttributes({\n          title: event.target.value\n        });\n      }\n    }) : title);\n  },\n  save: function save(props) {\n    var title = props.attributes.title;\n    return React.createElement(\"h3\", null, title);\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ibG9ja3MvMDItZHluYW1pYy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Jsb2Nrcy8wMi1keW5hbWljL2luZGV4LmpzP2FmM2UiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fID0gd3AuaTE4bi5fXztcbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcbi8qKlxyXG4gKiBSZWdpc3RlciBibG9ja1xyXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJCbG9ja1R5cGUoXCJqc2Zvcndwd29ya3Nob3AvZHluYW1pY1wiLCB7XG4gIHRpdGxlOiBfXyhcIldvcmtzaG9wIC0gRHluYW1pY1wiLCBcImpzZm9yd3B3b3Jrc2hvcFwiKSxcbiAgZGVzY3JpcHRpb246IF9fKFwiRGVtb25zdHJhdGlvbiBvZiBob3cgdG8gbWFrZSBhIGJsb2NrIHdpdGggZHluYW1pYyBjb250ZW50IHVzaW5nIGF0dHJpYnV0ZXMuXCIsIFwianNmb3J3cHdvcmtzaG9wXCIpLFxuICBjYXRlZ29yeTogXCJjb21tb25cIixcbiAgaWNvbjoge1xuICAgIGJhY2tncm91bmQ6IFwieWVsbG93XCIsXG4gICAgc3JjOiBcImVkaXRcIlxuICB9LFxuICBrZXl3b3JkczogW19fKFwiRWRpdGFibGUgSGVhZGVyXCIsIFwianNmb3J3cHdvcmtzaG9wXCIpXSxcbiAgYXR0cmlidXRlczoge1xuICAgIHRpdGxlOiB7XG4gICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgZGVmYXVsdDogXCJFbnRlciBhIHRpdGxlXCJcbiAgICB9XG4gIH0sXG4gIGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBzZXRBdHRyaWJ1dGVzID0gcHJvcHMuc2V0QXR0cmlidXRlcyxcbiAgICAgICAgaXNTZWxlY3RlZCA9IHByb3BzLmlzU2VsZWN0ZWQsXG4gICAgICAgIHRpdGxlID0gcHJvcHMuYXR0cmlidXRlcy50aXRsZTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImgzXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gICAgfSwgaXNTZWxlY3RlZCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XG4gICAgICBuYW1lOiBcImR5bmFtaWMtdGl0bGVcIixcbiAgICAgIHZhbHVlOiB0aXRsZSxcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShldmVudCkge1xuICAgICAgICBzZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICB0aXRsZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pIDogdGl0bGUpO1xuICB9LFxuICBzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG4gICAgdmFyIHRpdGxlID0gcHJvcHMuYXR0cmlidXRlcy50aXRsZTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImgzXCIsIG51bGwsIHRpdGxlKTtcbiAgfVxufSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./blocks/02-dynamic/index.js\n");

/***/ }),

/***/ "./blocks/03-components/index.js":
/*!***************************************!*\
  !*** ./blocks/03-components/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar TextControl = wp.components.TextControl;\nvar RichText = wp.editor.RichText;\n/**\r\n * Register block\r\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (registerBlockType(\"jsforwpworkshop/components\", {\n  title: __(\"Workshop - Components\", \"jsforwpworkshop\"),\n  description: __(\"Demonstration of how to use WP Components inside of our blocks.\", \"jsforwpworkshop\"),\n  category: \"common\",\n  icon: {\n    background: \"yellow\",\n    src: \"editor-kitchensink\"\n  },\n  keywords: [__(\"Library UI\", \"jsforwpworkshop\")],\n  attributes: {\n    title: {\n      type: \"string\",\n      default: __(\"Enter a title\", \"jsforwpworkshop\")\n    },\n    content: {\n      type: \"html\"\n    }\n  },\n  edit: function edit(props) {\n    var className = props.className,\n        setAttributes = props.setAttributes,\n        isSelected = props.isSelected,\n        _props$attributes = props.attributes,\n        title = _props$attributes.title,\n        content = _props$attributes.content;\n    return React.createElement(\"div\", {\n      className: className\n    }, React.createElement(\"h3\", null, isSelected ? React.createElement(TextControl, {\n      value: title,\n      onChange: function onChange(newTitle) {\n        return setAttributes({\n          title: newTitle\n        });\n      }\n    }) : title), React.createElement(RichText, {\n      value: content,\n      placeholder: __(\"Enter content here\", \"jsforwpworkshop\"),\n      onChange: function onChange(newContent) {\n        return setAttributes({\n          content: newContent\n        });\n      }\n    }));\n  },\n  save: function save(props) {\n    var _props$attributes2 = props.attributes,\n        title = _props$attributes2.title,\n        content = _props$attributes2.content;\n    return React.createElement(\"div\", null, React.createElement(\"h3\", null, title), React.createElement(RichText.Content, {\n      value: content\n    }));\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ibG9ja3MvMDMtY29tcG9uZW50cy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Jsb2Nrcy8wMy1jb21wb25lbnRzL2luZGV4LmpzPzFjNzEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fID0gd3AuaTE4bi5fXztcbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcbnZhciBUZXh0Q29udHJvbCA9IHdwLmNvbXBvbmVudHMuVGV4dENvbnRyb2w7XG52YXIgUmljaFRleHQgPSB3cC5lZGl0b3IuUmljaFRleHQ7XG4vKipcclxuICogUmVnaXN0ZXIgYmxvY2tcclxuICovXG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyQmxvY2tUeXBlKFwianNmb3J3cHdvcmtzaG9wL2NvbXBvbmVudHNcIiwge1xuICB0aXRsZTogX18oXCJXb3Jrc2hvcCAtIENvbXBvbmVudHNcIiwgXCJqc2Zvcndwd29ya3Nob3BcIiksXG4gIGRlc2NyaXB0aW9uOiBfXyhcIkRlbW9uc3RyYXRpb24gb2YgaG93IHRvIHVzZSBXUCBDb21wb25lbnRzIGluc2lkZSBvZiBvdXIgYmxvY2tzLlwiLCBcImpzZm9yd3B3b3Jrc2hvcFwiKSxcbiAgY2F0ZWdvcnk6IFwiY29tbW9uXCIsXG4gIGljb246IHtcbiAgICBiYWNrZ3JvdW5kOiBcInllbGxvd1wiLFxuICAgIHNyYzogXCJlZGl0b3Ita2l0Y2hlbnNpbmtcIlxuICB9LFxuICBrZXl3b3JkczogW19fKFwiTGlicmFyeSBVSVwiLCBcImpzZm9yd3B3b3Jrc2hvcFwiKV0sXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgIGRlZmF1bHQ6IF9fKFwiRW50ZXIgYSB0aXRsZVwiLCBcImpzZm9yd3B3b3Jrc2hvcFwiKVxuICAgIH0sXG4gICAgY29udGVudDoge1xuICAgICAgdHlwZTogXCJodG1sXCJcbiAgICB9XG4gIH0sXG4gIGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBzZXRBdHRyaWJ1dGVzID0gcHJvcHMuc2V0QXR0cmlidXRlcyxcbiAgICAgICAgaXNTZWxlY3RlZCA9IHByb3BzLmlzU2VsZWN0ZWQsXG4gICAgICAgIF9wcm9wcyRhdHRyaWJ1dGVzID0gcHJvcHMuYXR0cmlidXRlcyxcbiAgICAgICAgdGl0bGUgPSBfcHJvcHMkYXR0cmlidXRlcy50aXRsZSxcbiAgICAgICAgY29udGVudCA9IF9wcm9wcyRhdHRyaWJ1dGVzLmNvbnRlbnQ7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDNcIiwgbnVsbCwgaXNTZWxlY3RlZCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dENvbnRyb2wsIHtcbiAgICAgIHZhbHVlOiB0aXRsZSxcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShuZXdUaXRsZSkge1xuICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgdGl0bGU6IG5ld1RpdGxlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pIDogdGl0bGUpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LCB7XG4gICAgICB2YWx1ZTogY29udGVudCxcbiAgICAgIHBsYWNlaG9sZGVyOiBfXyhcIkVudGVyIGNvbnRlbnQgaGVyZVwiLCBcImpzZm9yd3B3b3Jrc2hvcFwiKSxcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShuZXdDb250ZW50KSB7XG4gICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICBjb250ZW50OiBuZXdDb250ZW50XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pKTtcbiAgfSxcbiAgc2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuICAgIHZhciBfcHJvcHMkYXR0cmlidXRlczIgPSBwcm9wcy5hdHRyaWJ1dGVzLFxuICAgICAgICB0aXRsZSA9IF9wcm9wcyRhdHRyaWJ1dGVzMi50aXRsZSxcbiAgICAgICAgY29udGVudCA9IF9wcm9wcyRhdHRyaWJ1dGVzMi5jb250ZW50O1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCBudWxsLCB0aXRsZSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQuQ29udGVudCwge1xuICAgICAgdmFsdWU6IGNvbnRlbnRcbiAgICB9KSk7XG4gIH1cbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./blocks/03-components/index.js\n");

/***/ }),

/***/ "./blocks/04-settings/index.js":
/*!*************************************!*\
  !*** ./blocks/04-settings/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar Fragment = wp.element.Fragment;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    ToggleControl = _wp$components.ToggleControl;\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    InspectorControls = _wp$editor.InspectorControls;\n\n/**\r\n * Register block\r\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (registerBlockType(\"jsforwpworkshop/settings\", {\n  title: __(\"Workshop - Settings\", \"jsforwpworkshop\"),\n  description: __(\"Demonstration of how to use WP Components inside of our blocks.\", \"jsforwpworkshop\"),\n  category: \"common\",\n  icon: {\n    background: \"yellow\",\n    src: \"admin-generic\"\n  },\n  keywords: [__(\"Inspector Controls\", \"jsforwpworkshop\")],\n  attributes: {\n    content: {\n      type: \"html\"\n    },\n    highContrast: {\n      type: \"boolean\",\n      default: false\n    }\n  },\n  edit: function edit(props) {\n    var className = props.className,\n        setAttributes = props.setAttributes,\n        _props$attributes = props.attributes,\n        content = _props$attributes.content,\n        highContrast = _props$attributes.highContrast;\n    return React.createElement(Fragment, null, React.createElement(InspectorControls, null, React.createElement(PanelBody, {\n      title: __(\"Contrast Setting\", \"jsforwpworkshop\")\n    }, React.createElement(ToggleControl, {\n      label: highContrast ? __(\"Disable High Contrast\", \"jsforwpworkshop\") : __(\"Enable High Contrast\", \"jsforwpworkshop\"),\n      checked: highContrast,\n      onChange: function onChange() {\n        return setAttributes({\n          highContrast: !highContrast\n        });\n      }\n    }))), React.createElement(\"div\", {\n      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, {\n        \"high-contrast\": highContrast\n      })\n    }, React.createElement(RichText, {\n      value: content,\n      onChange: function onChange(content) {\n        return setAttributes({\n          content: content\n        });\n      }\n    })));\n  },\n  save: function save(props) {\n    var _props$attributes2 = props.attributes,\n        content = _props$attributes2.content,\n        highContrast = _props$attributes2.highContrast;\n    return React.createElement(\"div\", {\n      className: highContrast && \"high-contrast\"\n    }, React.createElement(RichText.Content, {\n      value: content\n    }));\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ibG9ja3MvMDQtc2V0dGluZ3MvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ibG9ja3MvMDQtc2V0dGluZ3MvaW5kZXguanM/NmEwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIEZyYWdtZW50ID0gd3AuZWxlbWVudC5GcmFnbWVudDtcbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgUGFuZWxCb2R5ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxCb2R5LFxuICAgIFRvZ2dsZUNvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5Ub2dnbGVDb250cm9sO1xudmFyIF93cCRlZGl0b3IgPSB3cC5lZGl0b3IsXG4gICAgUmljaFRleHQgPSBfd3AkZWRpdG9yLlJpY2hUZXh0LFxuICAgIEluc3BlY3RvckNvbnRyb2xzID0gX3dwJGVkaXRvci5JbnNwZWN0b3JDb250cm9scztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vKipcclxuICogUmVnaXN0ZXIgYmxvY2tcclxuICovXG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyQmxvY2tUeXBlKFwianNmb3J3cHdvcmtzaG9wL3NldHRpbmdzXCIsIHtcbiAgdGl0bGU6IF9fKFwiV29ya3Nob3AgLSBTZXR0aW5nc1wiLCBcImpzZm9yd3B3b3Jrc2hvcFwiKSxcbiAgZGVzY3JpcHRpb246IF9fKFwiRGVtb25zdHJhdGlvbiBvZiBob3cgdG8gdXNlIFdQIENvbXBvbmVudHMgaW5zaWRlIG9mIG91ciBibG9ja3MuXCIsIFwianNmb3J3cHdvcmtzaG9wXCIpLFxuICBjYXRlZ29yeTogXCJjb21tb25cIixcbiAgaWNvbjoge1xuICAgIGJhY2tncm91bmQ6IFwieWVsbG93XCIsXG4gICAgc3JjOiBcImFkbWluLWdlbmVyaWNcIlxuICB9LFxuICBrZXl3b3JkczogW19fKFwiSW5zcGVjdG9yIENvbnRyb2xzXCIsIFwianNmb3J3cHdvcmtzaG9wXCIpXSxcbiAgYXR0cmlidXRlczoge1xuICAgIGNvbnRlbnQ6IHtcbiAgICAgIHR5cGU6IFwiaHRtbFwiXG4gICAgfSxcbiAgICBoaWdoQ29udHJhc3Q6IHtcbiAgICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBzZXRBdHRyaWJ1dGVzID0gcHJvcHMuc2V0QXR0cmlidXRlcyxcbiAgICAgICAgX3Byb3BzJGF0dHJpYnV0ZXMgPSBwcm9wcy5hdHRyaWJ1dGVzLFxuICAgICAgICBjb250ZW50ID0gX3Byb3BzJGF0dHJpYnV0ZXMuY29udGVudCxcbiAgICAgICAgaGlnaENvbnRyYXN0ID0gX3Byb3BzJGF0dHJpYnV0ZXMuaGlnaENvbnRyYXN0O1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KEluc3BlY3RvckNvbnRyb2xzLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFBhbmVsQm9keSwge1xuICAgICAgdGl0bGU6IF9fKFwiQ29udHJhc3QgU2V0dGluZ1wiLCBcImpzZm9yd3B3b3Jrc2hvcFwiKVxuICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9nZ2xlQ29udHJvbCwge1xuICAgICAgbGFiZWw6IGhpZ2hDb250cmFzdCA/IF9fKFwiRGlzYWJsZSBIaWdoIENvbnRyYXN0XCIsIFwianNmb3J3cHdvcmtzaG9wXCIpIDogX18oXCJFbmFibGUgSGlnaCBDb250cmFzdFwiLCBcImpzZm9yd3B3b3Jrc2hvcFwiKSxcbiAgICAgIGNoZWNrZWQ6IGhpZ2hDb250cmFzdCxcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSgpIHtcbiAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgIGhpZ2hDb250cmFzdDogIWhpZ2hDb250cmFzdFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NuYW1lcyhjbGFzc05hbWUsIHtcbiAgICAgICAgXCJoaWdoLWNvbnRyYXN0XCI6IGhpZ2hDb250cmFzdFxuICAgICAgfSlcbiAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LCB7XG4gICAgICB2YWx1ZTogY29udGVudCxcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShjb250ZW50KSB7XG4gICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICBjb250ZW50OiBjb250ZW50XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pKSk7XG4gIH0sXG4gIHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcbiAgICB2YXIgX3Byb3BzJGF0dHJpYnV0ZXMyID0gcHJvcHMuYXR0cmlidXRlcyxcbiAgICAgICAgY29udGVudCA9IF9wcm9wcyRhdHRyaWJ1dGVzMi5jb250ZW50LFxuICAgICAgICBoaWdoQ29udHJhc3QgPSBfcHJvcHMkYXR0cmlidXRlczIuaGlnaENvbnRyYXN0O1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogaGlnaENvbnRyYXN0ICYmIFwiaGlnaC1jb250cmFzdFwiXG4gICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChSaWNoVGV4dC5Db250ZW50LCB7XG4gICAgICB2YWx1ZTogY29udGVudFxuICAgIH0pKTtcbiAgfVxufSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./blocks/04-settings/index.js\n");

/***/ }),

/***/ "./blocks/index.js":
/*!*************************!*\
  !*** ./blocks/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _01_static__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./01-static */ \"./blocks/01-static/index.js\");\n/* harmony import */ var _02_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./02-dynamic */ \"./blocks/02-dynamic/index.js\");\n/* harmony import */ var _03_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./03-components */ \"./blocks/03-components/index.js\");\n/* harmony import */ var _04_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./04-settings */ \"./blocks/04-settings/index.js\");\n// Import Custom Blocks\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ibG9ja3MvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ibG9ja3MvaW5kZXguanM/ZDc3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgQ3VzdG9tIEJsb2Nrc1xuaW1wb3J0IFwiLi8wMS1zdGF0aWNcIjtcbmltcG9ydCBcIi4vMDItZHluYW1pY1wiO1xuaW1wb3J0IFwiLi8wMy1jb21wb25lbnRzXCI7XG5pbXBvcnQgXCIuLzA0LXNldHRpbmdzXCI7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./blocks/index.js\n");

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2017 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg) && arg.length) {\n\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\tif (inner) {\n\t\t\t\t\tclasses.push(inner);\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzPzRkMjYiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBLFVBRUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/classnames/index.js\n");

/***/ })

/******/ });
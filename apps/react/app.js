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
/******/ 	return __webpack_require__(__webpack_require__.s = "./apps/react/app.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/react/app.jsx":
/*!****************************!*\
  !*** ./apps/react/app.jsx ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var babel_plugin_rawact_lib_runtime_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-plugin-rawact/lib/runtime/createElement */ \"./node_modules/babel-plugin-rawact/lib/runtime/createElement.js\");\n/* harmony import */ var babel_plugin_rawact_lib_runtime_addEventListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-plugin-rawact/lib/runtime/addEventListener */ \"./node_modules/babel-plugin-rawact/lib/runtime/addEventListener.js\");\n/* harmony import */ var babel_plugin_rawact_lib_runtime_replaceEventListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-plugin-rawact/lib/runtime/replaceEventListener */ \"./node_modules/babel-plugin-rawact/lib/runtime/replaceEventListener.js\");\n/* harmony import */ var babel_plugin_rawact_lib_runtime_removeEventListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-plugin-rawact/lib/runtime/removeEventListener */ \"./node_modules/babel-plugin-rawact/lib/runtime/removeEventListener.js\");\n/* harmony import */ var babel_plugin_rawact_lib_runtime_renderInternal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-plugin-rawact/lib/runtime/renderInternal */ \"./node_modules/babel-plugin-rawact/lib/runtime/renderInternal.js\");\n/* harmony import */ var babel_plugin_rawact_lib_runtime_unmountInternal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-plugin-rawact/lib/runtime/unmountInternal */ \"./node_modules/babel-plugin-rawact/lib/runtime/unmountInternal.js\");\n/* harmony import */ var babel_plugin_rawact_lib_runtime_renderChildren__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-plugin-rawact/lib/runtime/renderChildren */ \"./node_modules/babel-plugin-rawact/lib/runtime/renderChildren.js\");\n/* harmony import */ var babel_plugin_rawact_lib_runtime_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! babel-plugin-rawact/lib/runtime/hooks */ \"./node_modules/babel-plugin-rawact/lib/runtime/hooks.js\");\n/* harmony import */ var babel_plugin_rawact_lib_runtime_withKey__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! babel-plugin-rawact/lib/runtime/withKey */ \"./node_modules/babel-plugin-rawact/lib/runtime/withKey.js\");\n/* harmony import */ var babel_plugin_rawact_lib_runtime_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! babel-plugin-rawact/lib/runtime/react */ \"./node_modules/babel-plugin-rawact/lib/runtime/react/index.js\");\n\n\n\n\n\n\n\n\n\nconst _instructions = {};\nconst _instructions2 = {};\nconst _instructions3 = {};\nconst _instructions4 = {};\nconst _instructions5 = {};\nconst _instructions6 = {};\nconst _instructions7 = {};\nconst _instructions8 = {};\nconst _instructions9 = {};\nconst _instructions10 = {};\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar ALL_TODOS = 'all';\nvar ACTIVE_TODOS = 'active';\nvar COMPLETED_TODOS = 'completed';\nvar ENTER_KEY = 13;\nvar ESCAPE_KEY = 27;\nvar api = API;\nvar store = API.store;\nvar component;\n\nvar TodoItem =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(TodoItem, _React$Component);\n\n  function TodoItem(props) {\n    var _this;\n\n    _classCallCheck(this, TodoItem);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoItem).call(this, props));\n    _this.state = {\n      editText: props.todo.title\n    };\n    return _this;\n  }\n\n  _createClass(TodoItem, [{\n    key: \"handleSubmit\",\n    value: function handleSubmit(event) {\n      var val = this.state.editText.trim();\n\n      if (val) {\n        this.props.onSave(val);\n        this.setState({\n          editText: val\n        });\n      } else {\n        this.props.onDestroy();\n      }\n    }\n  }, {\n    key: \"handleEdit\",\n    value: function handleEdit() {\n      this.props.onEdit();\n      this.setState({\n        editText: this.props.todo.title\n      });\n    }\n  }, {\n    key: \"handleKeyDown\",\n    value: function handleKeyDown(event) {\n      if (event.which === ESCAPE_KEY) {\n        this.setState({\n          editText: this.props.todo.title\n        });\n        this.props.onCancel(event);\n      } else if (event.which === ENTER_KEY) {\n        this.handleSubmit(event);\n      }\n    }\n  }, {\n    key: \"handleChange\",\n    value: function handleChange(event) {\n      this.setState({\n        editText: event.target.value\n      });\n    }\n  }, {\n    key: \"getInitialState\",\n    value: function getInitialState() {\n      return {\n        editText: this.props.todo.title\n      };\n    }\n    /**\n    * Safely manipulate the DOM after updating the state when invoking\n    * `this.props.onEdit()` in the `handleEdit` method above.\n    * For more info refer to notes at https://facebook.github.io/react/docs/component-api.html#setstate\n    * and https://facebook.github.io/react/docs/component-specs.html#updating-componentdidupdate\n    */\n\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps) {\n      if (!prevProps.editing && this.props.editing) {\n        var node = this.textInput;\n        node.focus();\n        node.setSelectionRange(node.value.length, node.value.length);\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var classes = classNames({\n        completed: this.props.todo.completed,\n        editing: this.props.editing\n      });\n      const _className = classes;\n      const _checked = this.props.todo.completed;\n      const _onChange = this.props.onToggle;\n      const _onChange2 = this.props.onToggle;\n\n      const _onDoubleClick = this.handleEdit.bind(this);\n\n      const _child = this.props.todo.title;\n      const _onClick = this.props.onDestroy;\n\n      const _ref = function ref(input) {\n        return _this2.textInput = input;\n      };\n\n      const _value = this.state.editText;\n\n      const _onBlur = this.handleSubmit.bind(this);\n\n      const _onChange3 = this.handleChange.bind(this);\n\n      const _onChange4 = this.handleChange.bind(this);\n\n      const _onKeyDown = this.handleKeyDown.bind(this);\n\n      return _context => {\n        if (_context._ !== _instructions) {\n          if (_context.$) _context.$();\n\n          _context.$ = () => {\n            Object(babel_plugin_rawact_lib_runtime_removeEventListener__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_context.$$, _context.d, \"input\", _context.f);\n\n            Object(babel_plugin_rawact_lib_runtime_removeEventListener__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_context.$$, _context.d, \"change\", _context.g);\n\n            Object(babel_plugin_rawact_lib_runtime_removeEventListener__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_context.$$, _context.h, \"dblclick\", _context.i);\n\n            Object(babel_plugin_rawact_lib_runtime_unmountInternal__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_context.j_);\n\n            Object(babel_plugin_rawact_lib_runtime_removeEventListener__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_context.$$, _context.k, \"click\", _context.l);\n\n            Object(babel_plugin_rawact_lib_runtime_removeEventListener__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_context.$$, _context.m, \"blur\", _context.n);\n\n            Object(babel_plugin_rawact_lib_runtime_removeEventListener__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_context.$$, _context.m, \"input\", _context.o);\n\n            Object(babel_plugin_rawact_lib_runtime_removeEventListener__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_context.$$, _context.m, \"change\", _context.p);\n\n            Object(babel_plugin_rawact_lib_runtime_removeEventListener__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_context.$$, _context.m, \"keydown\", _context.q);\n          };\n\n          _context._ = _instructions;\n          _context.a = Object(babel_plugin_rawact_lib_runtime_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"li\");\n          _context.a.className = _context.b = _className;\n          _context.c = Object(babel_plugin_rawact_lib_runtime_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\");\n          _context.c.className = \"view\";\n          _context.d = Object(babel_plugin_rawact_lib_runtime_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"input\");\n          _context.d.className = \"toggle\";\n          _context.d.type = \"checkbox\";\n          _context.d.checked = _context.e = _checked;\n\n          Object(babel_plugin_rawact_lib_runtime_addEventListener__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_context.$$, _context.d, \"input\", _context.f = _inputEvent => (_context.d.type === \"text\" || _context.d.type === \"number\") && _onChange(_inputEvent));\n\n          Object(babel_plugin_rawact_lib_runtime_addEventListener__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_context.$$, _context.d, \"change\", _context.g = _onChange2);\n\n          _context.h = Object(babel_plugin_rawact_lib_runtime_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"label\");\n\n          Object(babel_plugin_rawact_lib_runtime_addEventListener__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_context.$$, _context.h, \"dblclick\", _context.i = _onDoubleClick);\n\n          Object(babel_plugin_rawact_lib_runtime_renderInternal__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_context, _child, \"j\", 1);\n\n          Object(babel_plugin_rawact_lib_runtime_renderChildren__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_context.h, [_context[\"j\"]]);\n\n          _context.k = Object(babel_plugin_rawact_lib_runtime_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"button\");\n          _context.k.className = \"destroy\";\n\n          Object(babel_plugin_rawact_lib_runtime_addEventListener__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_context.$$, _context.k, \"click\", _context.l = _onClick);\n\n          Object(babel_plugin_rawact_lib_runtime_renderChildren__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_context.c, [_context.d, _context.h, _context.k]);\n\n          _context.m = Object(babel_plugin_rawact_lib_runtime_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"input\");\n\n          _ref(_context.m);\n\n          _context.m.className = 'edit';\n          _context.m.value = _context.m.value = _value;\n\n          Object(babel_plugin_rawact_lib_runtime_addEventListener__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_context.$$, _context.m, \"blur\", _context.n = _onBlur);\n\n          Object(babel_plugin_rawact_lib_runtime_addEventListener__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_context.$$, _context.m, \"input\", _context.o = _inputEvent2 => (_context.m.type === \"text\" || _context.m.type === \"number\") && _onChange3(_inputEvent2));\n\n          Object(babel_plugin_rawact_lib_runtime_addEventListener__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_context.$$, _context.m, \"change\", _context.p = _onChange4);\n\n          Object(babel_plugin_rawact_lib_runtime_addEventListener__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_context.$$, _context.m, \"keydown\", _context.q = _onKeyDown);\n\n          Object(babel_plugin_rawact_lib_runtime_renderChildren__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_context.a, [_context.c, _context.m]);\n        } else {\n          if (_context.b !== _className) _context.a.className = _context.b = _className;\n          if (_context.e !== _checked) _context.d.checked = _context.e = _checked;\n\n          if (_context.f !== _onChange) {\n            Object(babel_plugin_rawact_lib_runtime_replaceEventListener__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_context.$$, _context.d, \"input\", _context.f, _context.f = _inputEvent => (_context.d.type === \"text\" || _context.d.type === \"number\") && _onChange(_inputEvent));\n          }\n\n          if (_context.g !== _onChange2) {\n            Object(babel_plugin_rawact_lib_runtime_replaceEventListener__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_context.$$, _context.d, \"change\", _context.g, _context.g = _onChange2);\n          }\n\n          if (_context.i !== _onDoubleClick) {\n            Object(babel_plugin_rawact_lib_runtime_replaceEventListener__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_context.$$, _context.h, \"dblclick\", _context.i, _context.i = _onDoubleClick);\n          }\n\n          Object(babel_plugin_rawact_lib_runtime_renderInternal__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_context, _child, \"j\", 0);\n\n          if (_context.l !== _onClick) {\n            Object(babel_plugin_rawact_lib_runtime_replaceEventListener__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_context.$$, _context.k, \"click\", _context.l, _context.l = _onClick);\n          }\n\n          if (_context.m.value !== _value) _context.m.value = _context.m.value = _value;\n\n          if (_context.n !== _onBlur) {\n            Object(babel_plugin_rawact_lib_runtime_replaceEventListener__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_context.$$, _context.m, \"blur\", _context.n, _context.n = _onBlur);\n          }\n\n          if (_context.o !== _onChange3) {\n            Object(babel_plugin_rawact_lib_runtime_replaceEventListener__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_context.$$, _context.m, \"input\", _context.o, _context.o = _inputEvent2 => (_context.m.type === \"text\" || _context.m.type === \"number\") && _onChange3(_inputEvent2));\n          }\n\n          if (_context.p !== _onChange4) {\n            Object(babel_plugin_rawact_lib_runtime_replaceEventListener__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_context.$$, _context.m, \"change\", _context.p, _context.p = _onChange4);\n          }\n\n          if (_context.q !== _onKeyDown) {\n            Object(babel_plugin_rawact_lib_runtime_replaceEventListener__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_context.$$, _context.m, \"keydown\", _context.q, _context.q = _onKeyDown);\n          }\n        }\n\n        return _context.a;\n      };\n    }\n  }]);\n\n  return TodoItem;\n}(babel_plugin_rawact_lib_runtime_react__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]);\n\nvar TodoFooter =\n/*#__PURE__*/\nfunction (_React$Component2) {\n  _inherits(TodoFooter, _React$Component2);\n\n  function TodoFooter() {\n    _classCallCheck(this, TodoFooter);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(TodoFooter).apply(this, arguments));\n  }\n\n  _createClass(TodoFooter, [{\n    key: \"render\",\n    value: function render() {\n      var activeTodoWord = this.props.count == 1 ? 'item' : 'items';\n      var clearButton = null;\n\n      if (this.props.completedCount > 0) {\n        clearButton = (() => {\n          const _onClick3 = this.props.onClearCompleted;\n          return _context4 => {\n            if (_context4._ !== _instructions4) {\n              if (_context4.$) _context4.$();\n\n              _context4.$ = () => {\n                Object(babel_plugin_rawact_lib_runtime_removeEventListener__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_context4.$$, _context4.a, \"click\", _context4.b);\n              };\n\n              _context4._ = _instructions4;\n              _context4.a = Object(babel_plugin_rawact_lib_runtime_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"button\");\n              _context4.a.className = \"clear-completed\";\n\n              Object(babel_plugin_rawact_lib_runtime_addEventListener__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_context4.$$, _context4.a, \"click\", _context4.b = _onClick3);\n\n              Object(babel_plugin_rawact_lib_runtime_renderChildren__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_context4.a, [\"Clear completed\"]);\n            } else {\n              if (_context4.b !== _onClick3) {\n                Object(babel_plugin_rawact_lib_runtime_replaceEventListener__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_context4.$$, _context4.a, \"click\", _context4.b, _context4.b = _onClick3);\n              }\n            }\n\n            return _context4.a;\n          };\n        })();\n      }\n\n      var nowShowing = this.props.nowShowing;\n      const _child3 = this.props.count;\n      const _child4 = activeTodoWord;\n\n      const _className2 = classNames({\n        selected: nowShowing === ALL_TODOS\n      });\n\n      const _className3 = classNames({\n        selected: nowShowing === ACTIVE_TODOS\n      });\n\n      const _className4 = classNames({\n        selected: nowShowing === COMPLETED_TODOS\n      });\n\n      const _child5 = clearButton;\n      return _context5 => {\n        if (_context5._ !== _instructions5) {\n          if (_context5.$) _context5.$();\n\n          _context5.$ = () => {\n            Object(babel_plugin_rawact_lib_runtime_unmountInternal__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_context5.d_);\n\n            Object(babel_plugin_rawact_lib_runtime_unmountInternal__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_context5.e_);\n\n            Object(babel_plugin_rawact_lib_runtime_unmountInternal__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_context5.p_);\n          };\n\n          _context5._ = _instructions5;\n          _context5.a = Object(babel_plugin_rawact_lib_runtime_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"footer\");\n          _context5.a.className = \"footer\";\n          _context5.b = Object(babel_plugin_rawact_lib_runtime_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"span\");\n          _context5.b.className = \"todo-count\";\n          _context5.c = Object(babel_plugin_rawact_lib_runtime_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"strong\");\n\n          Object(babel_plugin_rawact_lib_runtime_renderInternal__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_context5, _child3, \"d\", 1);\n\n          Object(babel_plugin_rawact_lib_runtime_renderChildren__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_context5.c, [_context5[\"d\"]]);\n\n          Object(babel_plugin_rawact_lib_runtime_renderInternal__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_context5, _child4, \"e\", 1);\n\n          Object(babel_plugin_rawact_lib_runtime_renderChildren__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_context5.b, [_context5.c, \" \", _context5[\"e\"], \" left\"]);\n\n          _context5.f = Object(babel_plugin_rawact_lib_runtime_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"ul\");\n          _context5.f.className = \"filters\";\n          _context5.g = Object(babel_plugin_rawact_lib_runtime_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"li\");\n          _context5.h = Object(babel_plugin_rawact_lib_runtime_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"a\");\n          _context5.h.href = \"#/\";\n          _context5.h.className = _context5.i = _className2;\n\n          Object(babel_plugin_rawact_lib_runtime_renderChildren__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_context5.h, [\"All\"]);\n\n          Object(babel_plugin_rawact_lib_runtime_renderChildren__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_context5.g, [_context5.h]);\n\n          _context5.j = Object(babel_plugin_rawact_lib_runtime_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"li\");\n          _context5.k = Object(babel_plugin_rawact_lib_runtime_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"a\");\n          _context5.k.href = \"#/active\";\n          _context5.k.className = _context5.l = _className3;\n\n          Object(babel_plugin_rawact_lib_runtime_renderChildren__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_context5.k, [\"Active\"]);\n\n          Object(babel_plugin_rawact_lib_runtime_renderChildren__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_context5.j, [_context5.k]);\n\n          _context5.m = Object(babel_plugin_rawact_lib_runtime_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"li\");\n          _context5.n = Object(babel_plugin_rawact_lib_runtime_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"a\");\n          _context5.n.href = \"#/completed\";\n          _context5.n.className = _context5.o = _className4;\n\n          Object(babel_plugin_rawact_lib_runtime_renderChildren__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_context5.n, [\"Completed\"]);\n\n          Object(babel_plugin_rawact_lib_runtime_renderChildren__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_context5.m, [_context5.n]);\n\n          Object(babel_plugin_rawact_lib_runtime_renderChildren__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_context5.f, [_context5.g, _context5.j, _context5.m]);\n\n          Object(babel_plugin_rawact_lib_runtime_renderInternal__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_context5, _child5, \"p\", 1);\n\n          Object(babel_plugin_rawact_lib_runtime_renderChildren__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_context5.a, [_context5.b, _context5.f, _context5[\"p\"]]);\n        } else {\n          Object(babel_plugin_rawact_lib_runtime_renderInternal__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_context5, _child3, \"d\", 0);\n\n          Object(babel_plugin_rawact_lib_runtime_renderInternal__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_context5, _child4, \"e\", 0);\n\n          if (_context5.i !== _className2) _context5.h.className = _context5.i = _className2;\n          if (_context5.l !== _className3) _context5.k.className = _context5.l = _className3;\n          if (_context5.o !== _className4) _context5.n.className = _context5.o = _className4;\n\n          Object(babel_plugin_rawact_lib_runtime_renderInternal__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_context5, _child5, \"p\", 0);\n        }\n\n        return _context5.a;\n      };\n    }\n  }]);\n\n  return TodoFooter;\n}(babel_plugin_rawact_lib_runtime_react__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]);\n\nvar TodoApp =\n/*#__PURE__*/\nfunction (_React$Component3) {\n  _inherits(TodoApp, _React$Component3);\n\n  function TodoApp(props) {\n    var _this3;\n\n    _classCallCheck(this, TodoApp);\n\n    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(TodoApp).call(this, props));\n    component = _assertThisInitialized(_assertThisInitialized(_this3));\n    _this3.state = {\n      nowShowing: ALL_TODOS,\n      editing: null\n    };\n    return _this3;\n  }\n\n  _createClass(TodoApp, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var setState = this.setState;\n      var router = Router({\n        '/': setState.bind(this, {\n          nowShowing: ALL_TODOS\n        }),\n        '/active': setState.bind(this, {\n          nowShowing: ACTIVE_TODOS\n        }),\n        '/completed': setState.bind(this, {\n          nowShowing: COMPLETED_TODOS\n        })\n      });\n      router.init('/');\n    }\n  }, {\n    key: \"handleNewTodoKeyDown\",\n    value: function handleNewTodoKeyDown(event) {\n      if (event.keyCode !== ENTER_KEY) {\n        return;\n      }\n\n      event.preventDefault();\n      var val = this.newField.value.trim();\n\n      if (val) {\n        this.props.api.addTodo(val);\n        this.newField.value = '';\n      }\n    }\n  }, {\n    key: \"toggleAll\",\n    value: function toggleAll(event) {\n      var checked = event.target.checked;\n      API.toggleAll(checked);\n    }\n  }, {\n    key: \"toggle\",\n    value: function toggle(todo) {\n      API.toggleTodo(todo);\n      this.forceUpdate();\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy(todo) {\n      API.removeTodo(todo);\n      this.forceUpdate();\n    }\n  }, {\n    key: \"edit\",\n    value: function edit(todo) {\n      this.setState({\n        editing: todo.id\n      });\n    }\n  }, {\n    key: \"save\",\n    value: function save(todo, text) {\n      API.renameTodo(todo, text);\n      this.setState({\n        editing: null\n      });\n    }\n  }, {\n    key: \"cancel\",\n    value: function cancel() {\n      this.setState({\n        editing: null\n      });\n    }\n  }, {\n    key: \"clearCompleted\",\n    value: function clearCompleted() {\n      API.clearCompleted();\n      this.forceUpdate();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var footer;\n      var main;\n      var api = this.props.api;\n      var todos = api.todos();\n      var active = api.remaining();\n      var shownTodos = todos;\n\n      if (this.state.nowShowing == ACTIVE_TODOS) {\n        shownTodos = active;\n      } else if (this.state.nowShowing == COMPLETED_TODOS) {\n        shownTodos = api.completed();\n      } // var shownTodos = todos.filter(function (todo) {\n      // \tswitch (this.state.nowShowing) {\n      // \tcase ACTIVE_TODOS:\n      // \t\treturn !todo.completed;\n      // \tcase COMPLETED_TODOS:\n      // \t\treturn todo.completed;\n      // \tdefault:\n      // \t\treturn true;\n      // \t}\n      // }, this);\n\n\n      var todoItems = shownTodos.map(function (todo, index) {\n        return Object(babel_plugin_rawact_lib_runtime_withKey__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(todo.id, Object(babel_plugin_rawact_lib_runtime_hooks__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(TodoItem, {\n          todo: todo,\n          onToggle: this.toggle.bind(this, todo),\n          onDestroy: this.destroy.bind(this, todo),\n          onEdit: this.edit.bind(this, todo),\n          editing: this.state.editing === todo.id,\n          onSave: this.save.bind(this, todo),\n          onCancel: this.cancel\n        }));\n      }, this); // var activeTodoCount = todos.reduce(function (accum, todo) {\n      // \treturn todo.completed ? accum : accum + 1;\n      // }, 0);\n\n      var completedCount = todos.length - active.length;\n\n      if (todos.length) {\n        footer = Object(babel_plugin_rawact_lib_runtime_hooks__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(TodoFooter, {\n          count: active.length,\n          completedCount: completedCount,\n          nowShowing: this.state.nowShowing,\n          onClearCompleted: this.clearCompleted.bind(this)\n        });\n      }\n\n      if (todos.length) {\n        main = (() => {\n          const _child8 = todoItems;\n          return _context8 => {\n            if (_context8._ !== _instructions8) {\n              if (_context8.$) _context8.$();\n\n              _context8.$ = () => {\n                Object(babel_plugin_rawact_lib_runtime_unmountInternal__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_context8.c_);\n              };\n\n              _context8._ = _instructions8;\n              _context8.a = Object(babel_plugin_rawact_lib_runtime_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"section\");\n              _context8.a.className = \"main\";\n              _context8.b = Object(babel_plugin_rawact_lib_runtime_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"ul\");\n              _context8.b.className = \"todo-list\";\n\n              Object(babel_plugin_rawact_lib_runtime_renderInternal__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_context8, _child8, \"c\", 1);\n\n              Object(babel_plugin_rawact_lib_runtime_renderChildren__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_context8.b, [_context8[\"c\"]]);\n\n              Object(babel_plugin_rawact_lib_runtime_renderChildren__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_context8.a, [_context8.b]);\n            } else {\n              Object(babel_plugin_rawact_lib_runtime_renderInternal__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_context8, _child8, \"c\", 0);\n            }\n\n            return _context8.a;\n          };\n        })();\n      }\n\n      const _child9 = store.counter;\n\n      const _onKeyDown3 = this.handleNewTodoKeyDown.bind(this);\n\n      const _child10 = main;\n      const _child11 = footer;\n      return _context9 => {\n        if (_context9._ !== _instructions9) {\n          if (_context9.$) _context9.$();\n\n          _context9.$ = () => {\n            Object(babel_plugin_rawact_lib_runtime_unmountInternal__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_context9.d_);\n\n            Object(babel_plugin_rawact_lib_runtime_removeEventListener__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_context9.$$, _context9.e, \"keydown\", _context9.f);\n\n            Object(babel_plugin_rawact_lib_runtime_unmountInternal__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_context9.g_);\n\n            Object(babel_plugin_rawact_lib_runtime_unmountInternal__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_context9.h_);\n          };\n\n          _context9._ = _instructions9;\n          _context9.a = Object(babel_plugin_rawact_lib_runtime_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\");\n          _context9.b = Object(babel_plugin_rawact_lib_runtime_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"header\");\n          _context9.b.className = \"header\";\n          _context9.c = Object(babel_plugin_rawact_lib_runtime_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h1\");\n\n          Object(babel_plugin_rawact_lib_runtime_renderInternal__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_context9, _child9, \"d\", 1);\n\n          Object(babel_plugin_rawact_lib_runtime_renderChildren__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_context9.c, [_context9[\"d\"]]);\n\n          _context9.e = Object(babel_plugin_rawact_lib_runtime_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"input\");\n          _context9.e.className = 'new-todo';\n          _context9.e.placeholder = 'What to do?';\n\n          Object(babel_plugin_rawact_lib_runtime_addEventListener__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_context9.$$, _context9.e, \"keydown\", _context9.f = _onKeyDown3);\n\n          _context9.e.autofocus = true;\n\n          Object(babel_plugin_rawact_lib_runtime_renderChildren__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_context9.b, [_context9.c, _context9.e]);\n\n          Object(babel_plugin_rawact_lib_runtime_renderInternal__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_context9, _child10, \"g\", 1);\n\n          Object(babel_plugin_rawact_lib_runtime_renderInternal__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_context9, _child11, \"h\", 1);\n\n          Object(babel_plugin_rawact_lib_runtime_renderChildren__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_context9.a, [_context9.b, _context9[\"g\"], _context9[\"h\"]]);\n        } else {\n          Object(babel_plugin_rawact_lib_runtime_renderInternal__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_context9, _child9, \"d\", 0);\n\n          if (_context9.f !== _onKeyDown3) {\n            Object(babel_plugin_rawact_lib_runtime_replaceEventListener__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_context9.$$, _context9.e, \"keydown\", _context9.f, _context9.f = _onKeyDown3);\n          }\n\n          Object(babel_plugin_rawact_lib_runtime_renderInternal__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_context9, _child10, \"g\", 0);\n\n          Object(babel_plugin_rawact_lib_runtime_renderInternal__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_context9, _child11, \"h\", 0);\n        }\n\n        return _context9.a;\n      };\n    }\n  }]);\n\n  return TodoApp;\n}(babel_plugin_rawact_lib_runtime_react__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]);\n\nvar el = document.getElementsByClassName('todoapp')[0];\nbabel_plugin_rawact_lib_runtime_react__WEBPACK_IMPORTED_MODULE_9__[\"render\"](Object(babel_plugin_rawact_lib_runtime_hooks__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(TodoApp, {\n  api: API\n}), el);\n\nAPI.render = function () {\n  component.forceUpdate();\n};\n\nAPI.READY = true;\nAPI.reset(6);\n\n//# sourceURL=webpack:///./apps/react/app.jsx?");

/***/ }),

/***/ "./node_modules/babel-plugin-rawact/lib/runtime/addEventListener.js":
/*!**************************************************************************!*\
  !*** ./node_modules/babel-plugin-rawact/lib/runtime/addEventListener.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((root, node, event, handler) => {\n  const key = `event_${event}`;\n\n  if (!root[key]) {\n    const map = root[key] = new Map();\n    const node = root.node;\n    node.addEventListener(event, e => {\n      let target = e.target;\n      let listener;\n\n      do {\n        listener = map.get(target);\n      } while (!listener && target !== node && (target = target.parentNode));\n\n      return listener && listener(e);\n    });\n  }\n\n  root[key].set(node, handler);\n});\n\n//# sourceURL=webpack:///./node_modules/babel-plugin-rawact/lib/runtime/addEventListener.js?");

/***/ }),

/***/ "./node_modules/babel-plugin-rawact/lib/runtime/compareDependencies.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/babel-plugin-rawact/lib/runtime/compareDependencies.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((dependencies, oldDependencies) => {\n  if (oldDependencies && dependencies && oldDependencies.length === dependencies.length) {\n    let i;\n\n    for (i = 0; i < dependencies.length; i++) {\n      if (oldDependencies[i] !== dependencies[i]) return false;\n    }\n\n    return true;\n  }\n\n  return false;\n});\n\n//# sourceURL=webpack:///./node_modules/babel-plugin-rawact/lib/runtime/compareDependencies.js?");

/***/ }),

/***/ "./node_modules/babel-plugin-rawact/lib/runtime/createElement.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-plugin-rawact/lib/runtime/createElement.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (name => document.createElement(name));\n\n//# sourceURL=webpack:///./node_modules/babel-plugin-rawact/lib/runtime/createElement.js?");

/***/ }),

/***/ "./node_modules/babel-plugin-rawact/lib/runtime/createText.js":
/*!********************************************************************!*\
  !*** ./node_modules/babel-plugin-rawact/lib/runtime/createText.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (text => document.createTextNode(text));\n\n//# sourceURL=webpack:///./node_modules/babel-plugin-rawact/lib/runtime/createText.js?");

/***/ }),

/***/ "./node_modules/babel-plugin-rawact/lib/runtime/effects.js":
/*!*****************************************************************!*\
  !*** ./node_modules/babel-plugin-rawact/lib/runtime/effects.js ***!
  \*****************************************************************/
/*! exports provided: addEffect, runEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addEffect\", function() { return addEffect; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"runEffects\", function() { return runEffects; });\nlet effects = [];\nfunction addEffect(fn) {\n  effects.push(fn);\n}\nfunction runEffects() {\n  for (const effect of effects) {\n    effect();\n  }\n\n  effects.length = 0;\n}\n\n//# sourceURL=webpack:///./node_modules/babel-plugin-rawact/lib/runtime/effects.js?");

/***/ }),

/***/ "./node_modules/babel-plugin-rawact/lib/runtime/expandObject.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-plugin-rawact/lib/runtime/expandObject.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (obj => {\n  if (!obj || typeof obj !== \"object\") return [obj];\n  const keys = Object.keys(obj);\n  return [keys.length].concat(keys).concat(keys.map(key => obj[key]));\n});\n\n//# sourceURL=webpack:///./node_modules/babel-plugin-rawact/lib/runtime/expandObject.js?");

/***/ }),

/***/ "./node_modules/babel-plugin-rawact/lib/runtime/hooks.js":
/*!***************************************************************!*\
  !*** ./node_modules/babel-plugin-rawact/lib/runtime/hooks.js ***!
  \***************************************************************/
/*! exports provided: createSlot, getComponent, addCleanup, createScheduleRender, RenderSymbol, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSlot\", function() { return createSlot; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getComponent\", function() { return getComponent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addCleanup\", function() { return addCleanup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createScheduleRender\", function() { return createScheduleRender; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RenderSymbol\", function() { return RenderSymbol; });\nlet slots = undefined;\nlet cleanup = undefined;\nlet index = undefined;\nlet currentRerender = undefined;\nlet currentComponent = undefined;\nfunction createSlot() {\n  return [slots, index++];\n}\nfunction getComponent() {\n  return currentComponent;\n}\nfunction addCleanup(fn) {\n  cleanup.push(fn);\n}\nfunction createScheduleRender() {\n  const rerender = currentRerender;\n  if (!rerender) throw new Error();\n  return () => {\n    Promise.resolve().then(rerender);\n  };\n}\nconst RenderSymbol = Symbol();\n/* harmony default export */ __webpack_exports__[\"default\"] = ((component, props) => {\n  const parent = currentComponent;\n  const renderMethod = component.prototype[RenderSymbol];\n  const render = renderMethod || component;\n  return (context, rerender) => {\n    if (context._ !== component) {\n      context.p = parent;\n      context.s = [];\n      const compCleanup = context.c = [];\n      if (context.$) context.$();\n\n      context.$ = () => {\n        for (const cleanup of compCleanup) {\n          cleanup();\n        }\n\n        if (context.x.$) context.x.$();\n      };\n\n      context._ = component;\n      context.x = {\n        $$: context.$$\n      }; // child context\n\n      context.i = undefined; // instructions\n\n      context.n = undefined; // node\n    }\n\n    slots = context.s;\n    cleanup = context.c;\n    index = 0;\n    currentRerender = rerender;\n    currentComponent = context;\n    const instructions = render(props, component);\n    if (context.i === instructions) return context.n;\n    context.i = instructions;\n    return context.n = instructions(context.x, rerender);\n  };\n});\n\n//# sourceURL=webpack:///./node_modules/babel-plugin-rawact/lib/runtime/hooks.js?");

/***/ }),

/***/ "./node_modules/babel-plugin-rawact/lib/runtime/react/Children.js":
/*!************************************************************************!*\
  !*** ./node_modules/babel-plugin-rawact/lib/runtime/react/Children.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  only() {// TODO\n  }\n\n});\n\n//# sourceURL=webpack:///./node_modules/babel-plugin-rawact/lib/runtime/react/Children.js?");

/***/ }),

/***/ "./node_modules/babel-plugin-rawact/lib/runtime/react/Component.js":
/*!*************************************************************************!*\
  !*** ./node_modules/babel-plugin-rawact/lib/runtime/react/Component.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Component; });\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks */ \"./node_modules/babel-plugin-rawact/lib/runtime/hooks.js\");\n/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../effects */ \"./node_modules/babel-plugin-rawact/lib/runtime/effects.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nfunction Component(props) {\n  this.props = props;\n}\n\nComponent.prototype[_hooks__WEBPACK_IMPORTED_MODULE_0__[\"RenderSymbol\"]] = function (newProps, Class) {\n  var _hooks$createSlot = _hooks__WEBPACK_IMPORTED_MODULE_0__[\"createSlot\"](),\n      _hooks$createSlot2 = _slicedToArray(_hooks$createSlot, 2),\n      slots = _hooks$createSlot2[0],\n      index = _hooks$createSlot2[1];\n\n  var slot = slots[index];\n  var instance;\n  var stateChanges;\n  var shouldUpdate;\n  var prevProps;\n  var prevState;\n  var newState;\n  var i;\n\n  if (!slot) {\n    stateChanges = [];\n    instance = new Class(newProps);\n    instance.props = newProps;\n    slot = slots[index] = {\n      i: instance,\n      s: stateChanges,\n      u: _hooks__WEBPACK_IMPORTED_MODULE_0__[\"createScheduleRender\"](),\n      f: false,\n      // forceRender flag\n      r: undefined // rendering instructions\n\n    };\n\n    instance.setState = newState => {\n      stateChanges.push(typeof newState === \"function\" ? newState : () => newState);\n      slot.u();\n    };\n\n    instance.forceUpdate = () => {\n      slot.f = true;\n      slot.u();\n    };\n\n    _effects__WEBPACK_IMPORTED_MODULE_1__[\"addEffect\"](() => {\n      instance.componentDidMount();\n    });\n    _hooks__WEBPACK_IMPORTED_MODULE_0__[\"addCleanup\"](() => {\n      instance.componentWillUnmount();\n    });\n    return slot.r = instance.render();\n  } else {\n    instance = slot.i;\n    slot.u = _hooks__WEBPACK_IMPORTED_MODULE_0__[\"createScheduleRender\"]();\n    prevProps = instance.props;\n    prevState = instance.state;\n    stateChanges = slot.s;\n    newState = prevState;\n\n    for (i = 0; i < stateChanges.length; i++) {\n      newState = Object.assign({}, newState, stateChanges[i](newState));\n    }\n\n    stateChanges.length = 0;\n    shouldUpdate = slot.f || instance.shouldComponentUpdate(newProps, newState);\n    instance.props = newProps;\n    instance.state = newState;\n    slot.f = false;\n\n    if (shouldUpdate) {\n      _effects__WEBPACK_IMPORTED_MODULE_1__[\"addEffect\"](() => {\n        instance.componentDidUpdate(prevProps, prevState);\n      });\n      slot.r = instance.render();\n    }\n\n    return slot.r;\n  }\n};\n\nComponent.prototype.shouldComponentUpdate = () => true;\n\nComponent.prototype.componentDidUpdate = () => {};\n\nComponent.prototype.componentWillUnmount = () => {};\n\nComponent.prototype.componentDidMount = () => {};\n\n\n\n//# sourceURL=webpack:///./node_modules/babel-plugin-rawact/lib/runtime/react/Component.js?");

/***/ }),

/***/ "./node_modules/babel-plugin-rawact/lib/runtime/react/Fragment.js":
/*!************************************************************************!*\
  !*** ./node_modules/babel-plugin-rawact/lib/runtime/react/Fragment.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (({\n  children\n}) => children);\n\n//# sourceURL=webpack:///./node_modules/babel-plugin-rawact/lib/runtime/react/Fragment.js?");

/***/ }),

/***/ "./node_modules/babel-plugin-rawact/lib/runtime/react/PureComponent.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/babel-plugin-rawact/lib/runtime/react/PureComponent.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PureComponent; });\n/* harmony import */ var _expandObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../expandObject */ \"./node_modules/babel-plugin-rawact/lib/runtime/expandObject.js\");\n/* harmony import */ var _compareDependencies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../compareDependencies */ \"./node_modules/babel-plugin-rawact/lib/runtime/compareDependencies.js\");\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Component */ \"./node_modules/babel-plugin-rawact/lib/runtime/react/Component.js\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks */ \"./node_modules/babel-plugin-rawact/lib/runtime/hooks.js\");\n\n\n\n\n\nfunction PureComponent(props) {\n  _Component__WEBPACK_IMPORTED_MODULE_2__[\"default\"].call(this, props);\n}\n\nPureComponent.prototype = Object.create(_Component__WEBPACK_IMPORTED_MODULE_2__[\"default\"].prototype);\nPureComponent.prototype.constructor = PureComponent;\n\nconst shallowEqual = (a, b) => {\n  return Object(_compareDependencies__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_expandObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(a), Object(_expandObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(b));\n};\n\nPureComponent.prototype.shouldComponentUpdate = function (nextProps, nextState) {\n  return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);\n};\n\nPureComponent[_hooks__WEBPACK_IMPORTED_MODULE_3__[\"RenderSymbol\"]] = _Component__WEBPACK_IMPORTED_MODULE_2__[\"default\"][_hooks__WEBPACK_IMPORTED_MODULE_3__[\"RenderSymbol\"]];\n\n\n//# sourceURL=webpack:///./node_modules/babel-plugin-rawact/lib/runtime/react/PureComponent.js?");

/***/ }),

/***/ "./node_modules/babel-plugin-rawact/lib/runtime/react/cloneElement.js":
/*!****************************************************************************!*\
  !*** ./node_modules/babel-plugin-rawact/lib/runtime/react/cloneElement.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((element, props, children) => {\n  // TODO\n  return element;\n});\n\n//# sourceURL=webpack:///./node_modules/babel-plugin-rawact/lib/runtime/react/cloneElement.js?");

/***/ }),

/***/ "./node_modules/babel-plugin-rawact/lib/runtime/react/createContext.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/babel-plugin-rawact/lib/runtime/react/createContext.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks */ \"./node_modules/babel-plugin-rawact/lib/runtime/hooks.js\");\n/* harmony import */ var _useContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useContext */ \"./node_modules/babel-plugin-rawact/lib/runtime/react/useContext.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (defaultValue => {\n  const symbol = Symbol();\n\n  const Provider = ({\n    value,\n    children\n  }) => {\n    const comp = Object(_hooks__WEBPACK_IMPORTED_MODULE_0__[\"getComponent\"])();\n    comp[symbol] = value;\n    return children;\n  };\n\n  const Consumer = ({\n    children\n  }) => {\n    const value = Object(_useContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(context);\n    return children(value);\n  };\n\n  const context = {\n    symbol,\n    defaultValue,\n    Provider,\n    Consumer\n  };\n  return context;\n});\n\n//# sourceURL=webpack:///./node_modules/babel-plugin-rawact/lib/runtime/react/createContext.js?");

/***/ }),

/***/ "./node_modules/babel-plugin-rawact/lib/runtime/react/findDOMNode.js":
/*!***************************************************************************!*\
  !*** ./node_modules/babel-plugin-rawact/lib/runtime/react/findDOMNode.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (x => x);\n\n//# sourceURL=webpack:///./node_modules/babel-plugin-rawact/lib/runtime/react/findDOMNode.js?");

/***/ }),

/***/ "./node_modules/babel-plugin-rawact/lib/runtime/react/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/babel-plugin-rawact/lib/runtime/react/index.js ***!
  \*********************************************************************/
/*! exports provided: render, useState, useRef, useMemo, useEffect, useReducer, useContext, createContext, findDOMNode, Component, PureComponent, memo, Fragment, Children, isValidElement, cloneElement, version */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"version\", function() { return version; });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./node_modules/babel-plugin-rawact/lib/runtime/react/render.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _render__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _useState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useState */ \"./node_modules/babel-plugin-rawact/lib/runtime/react/useState.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useState\", function() { return _useState__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _useRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useRef */ \"./node_modules/babel-plugin-rawact/lib/runtime/react/useRef.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useRef\", function() { return _useRef__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _useMemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useMemo */ \"./node_modules/babel-plugin-rawact/lib/runtime/react/useMemo.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useMemo\", function() { return _useMemo__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _useEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useEffect */ \"./node_modules/babel-plugin-rawact/lib/runtime/react/useEffect.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useEffect\", function() { return _useEffect__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _useReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useReducer */ \"./node_modules/babel-plugin-rawact/lib/runtime/react/useReducer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useReducer\", function() { return _useReducer__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _useContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useContext */ \"./node_modules/babel-plugin-rawact/lib/runtime/react/useContext.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useContext\", function() { return _useContext__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _createContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./createContext */ \"./node_modules/babel-plugin-rawact/lib/runtime/react/createContext.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createContext\", function() { return _createContext__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _findDOMNode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./findDOMNode */ \"./node_modules/babel-plugin-rawact/lib/runtime/react/findDOMNode.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"findDOMNode\", function() { return _findDOMNode__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Component */ \"./node_modules/babel-plugin-rawact/lib/runtime/react/Component.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return _Component__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; });\n\n/* harmony import */ var _PureComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PureComponent */ \"./node_modules/babel-plugin-rawact/lib/runtime/react/PureComponent.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PureComponent\", function() { return _PureComponent__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; });\n\n/* harmony import */ var _memo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./memo */ \"./node_modules/babel-plugin-rawact/lib/runtime/react/memo.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"memo\", function() { return _memo__WEBPACK_IMPORTED_MODULE_11__[\"default\"]; });\n\n/* harmony import */ var _Fragment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Fragment */ \"./node_modules/babel-plugin-rawact/lib/runtime/react/Fragment.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Fragment\", function() { return _Fragment__WEBPACK_IMPORTED_MODULE_12__[\"default\"]; });\n\n/* harmony import */ var _Children__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Children */ \"./node_modules/babel-plugin-rawact/lib/runtime/react/Children.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Children\", function() { return _Children__WEBPACK_IMPORTED_MODULE_13__[\"default\"]; });\n\n/* harmony import */ var _isValidElement__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./isValidElement */ \"./node_modules/babel-plugin-rawact/lib/runtime/react/isValidElement.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isValidElement\", function() { return _isValidElement__WEBPACK_IMPORTED_MODULE_14__[\"default\"]; });\n\n/* harmony import */ var _cloneElement__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cloneElement */ \"./node_modules/babel-plugin-rawact/lib/runtime/react/cloneElement.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"cloneElement\", function() { return _cloneElement__WEBPACK_IMPORTED_MODULE_15__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n\n // TODO\n\n\n\n\n\n\n\nconst version = \"16.7.0\";\n\n//# sourceURL=webpack:///./node_modules/babel-plugin-rawact/lib/runtime/react/index.js?");

/***/ }),

/***/ "./node_modules/babel-plugin-rawact/lib/runtime/react/isValidElement.js":
/*!******************************************************************************!*\
  !*** ./node_modules/babel-plugin-rawact/lib/runtime/react/isValidElement.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (element => {\n  // TODO\n  return typeof element === \"function\";\n});\n\n//# sourceURL=webpack:///./node_modules/babel-plugin-rawact/lib/runtime/react/isValidElement.js?");

/***/ }),

/***/ "./node_modules/babel-plugin-rawact/lib/runtime/react/memo.js":
/*!********************************************************************!*\
  !*** ./node_modules/babel-plugin-rawact/lib/runtime/react/memo.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _useMemo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useMemo */ \"./node_modules/babel-plugin-rawact/lib/runtime/react/useMemo.js\");\n/* harmony import */ var _expandObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../expandObject */ \"./node_modules/babel-plugin-rawact/lib/runtime/expandObject.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fn => {\n  return props => {\n    return Object(_useMemo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(() => fn(props), Object(_expandObject__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(props));\n  };\n});\n\n//# sourceURL=webpack:///./node_modules/babel-plugin-rawact/lib/runtime/react/memo.js?");

/***/ }),

/***/ "./node_modules/babel-plugin-rawact/lib/runtime/react/render.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-plugin-rawact/lib/runtime/react/render.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../effects */ \"./node_modules/babel-plugin-rawact/lib/runtime/effects.js\");\n/* harmony import */ var _renderInternal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../renderInternal */ \"./node_modules/babel-plugin-rawact/lib/runtime/renderInternal.js\");\n\n\nconst map = new WeakMap();\n/* harmony default export */ __webpack_exports__[\"default\"] = ((element, parentNode) => {\n  let context = map.get(parentNode);\n\n  if (!context) {\n    map.set(parentNode, context = {\n      $$: {\n        node: parentNode\n      }\n    });\n  }\n\n  Object(_renderInternal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(context, element, \"node\", false);\n  const node = context.node;\n  if (node.parentElement !== parentNode) parentNode.appendChild(node);\n  Object(_effects__WEBPACK_IMPORTED_MODULE_0__[\"runEffects\"])();\n});\n\n//# sourceURL=webpack:///./node_modules/babel-plugin-rawact/lib/runtime/react/render.js?");

/***/ }),

/***/ "./node_modules/babel-plugin-rawact/lib/runtime/react/useContext.js":
/*!**************************************************************************!*\
  !*** ./node_modules/babel-plugin-rawact/lib/runtime/react/useContext.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks */ \"./node_modules/babel-plugin-rawact/lib/runtime/hooks.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (context => {\n  let comp = Object(_hooks__WEBPACK_IMPORTED_MODULE_0__[\"getComponent\"])();\n  const symbol = context.symbol;\n\n  do {\n    if (symbol in comp) {\n      return comp[symbol];\n    }\n\n    comp = comp.p; // parent\n  } while (comp);\n\n  return context.defaultValue;\n});\n\n//# sourceURL=webpack:///./node_modules/babel-plugin-rawact/lib/runtime/react/useContext.js?");

/***/ }),

/***/ "./node_modules/babel-plugin-rawact/lib/runtime/react/useEffect.js":
/*!*************************************************************************!*\
  !*** ./node_modules/babel-plugin-rawact/lib/runtime/react/useEffect.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks */ \"./node_modules/babel-plugin-rawact/lib/runtime/hooks.js\");\n/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../effects */ \"./node_modules/babel-plugin-rawact/lib/runtime/effects.js\");\n/* harmony import */ var _compareDependencies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareDependencies */ \"./node_modules/babel-plugin-rawact/lib/runtime/compareDependencies.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((handler, dependencies) => {\n  const _createSlot = Object(_hooks__WEBPACK_IMPORTED_MODULE_0__[\"createSlot\"])(),\n        _createSlot2 = _slicedToArray(_createSlot, 2),\n        hooks = _createSlot2[0],\n        index = _createSlot2[1];\n\n  const token = {};\n\n  if (!hooks[index]) {\n    const entry = {\n      dependencies,\n      cleanup: undefined,\n      token\n    };\n    hooks[index] = entry;\n    Object(_effects__WEBPACK_IMPORTED_MODULE_1__[\"addEffect\"])(() => {\n      if (entry.token !== token) return;\n      const cleanup = handler();\n      entry.cleanup = cleanup;\n    });\n    Object(_hooks__WEBPACK_IMPORTED_MODULE_0__[\"addCleanup\"])(() => {\n      if (entry.cleanup) {\n        entry.cleanup();\n        entry.cleanup = undefined;\n      }\n    });\n  } else {\n    const entry = hooks[index];\n    if (Object(_compareDependencies__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dependencies, entry.dependencies)) return;\n    entry.dependencies = dependencies;\n    entry.token = token;\n\n    if (entry.cleanup) {\n      entry.cleanup();\n      entry.cleanup = undefined;\n    }\n\n    Object(_effects__WEBPACK_IMPORTED_MODULE_1__[\"addEffect\"])(() => {\n      if (entry.token !== token) return;\n      const cleanup = handler();\n      entry.cleanup = cleanup;\n    });\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/babel-plugin-rawact/lib/runtime/react/useEffect.js?");

/***/ }),

/***/ "./node_modules/babel-plugin-rawact/lib/runtime/react/useMemo.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-plugin-rawact/lib/runtime/react/useMemo.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks */ \"./node_modules/babel-plugin-rawact/lib/runtime/hooks.js\");\n/* harmony import */ var _compareDependencies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../compareDependencies */ \"./node_modules/babel-plugin-rawact/lib/runtime/compareDependencies.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((factory, dependencies = [factory]) => {\n  const _createSlot = Object(_hooks__WEBPACK_IMPORTED_MODULE_0__[\"createSlot\"])(),\n        _createSlot2 = _slicedToArray(_createSlot, 2),\n        hooks = _createSlot2[0],\n        index = _createSlot2[1];\n\n  if (!hooks[index]) {\n    const entry = {\n      value: undefined,\n      dependencies\n    };\n    hooks.push(entry);\n    entry.value = factory();\n    return entry.value;\n  } else {\n    const entry = hooks[index];\n    if (Object(_compareDependencies__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dependencies, entry.dependencies)) return entry.value;\n    entry.dependencies = dependencies;\n    return entry.value = factory();\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/babel-plugin-rawact/lib/runtime/react/useMemo.js?");

/***/ }),

/***/ "./node_modules/babel-plugin-rawact/lib/runtime/react/useReducer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/babel-plugin-rawact/lib/runtime/react/useReducer.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks */ \"./node_modules/babel-plugin-rawact/lib/runtime/hooks.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((reducer, initialState) => {\n  const _createSlot = Object(_hooks__WEBPACK_IMPORTED_MODULE_0__[\"createSlot\"])(),\n        _createSlot2 = _slicedToArray(_createSlot, 2),\n        hooks = _createSlot2[0],\n        index = _createSlot2[1];\n\n  const scheduleRender = Object(_hooks__WEBPACK_IMPORTED_MODULE_0__[\"createScheduleRender\"])();\n\n  if (!hooks[index]) {\n    hooks.push([initialState, action => {\n      hooks[index][0] = reducer(hooks[index][0], action);\n      scheduleRender();\n    }]);\n  }\n\n  return hooks[index];\n});\n\n//# sourceURL=webpack:///./node_modules/babel-plugin-rawact/lib/runtime/react/useReducer.js?");

/***/ }),

/***/ "./node_modules/babel-plugin-rawact/lib/runtime/react/useRef.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-plugin-rawact/lib/runtime/react/useRef.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks */ \"./node_modules/babel-plugin-rawact/lib/runtime/hooks.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initialValue => {\n  const _createSlot = Object(_hooks__WEBPACK_IMPORTED_MODULE_0__[\"createSlot\"])(),\n        _createSlot2 = _slicedToArray(_createSlot, 2),\n        hooks = _createSlot2[0],\n        index = _createSlot2[1];\n\n  if (!hooks[index]) {\n    const ref = value => {\n      ref.current = value;\n    };\n\n    ref.current = initialValue;\n    hooks.push(ref);\n    return ref;\n  }\n\n  return hooks[index];\n});\n\n//# sourceURL=webpack:///./node_modules/babel-plugin-rawact/lib/runtime/react/useRef.js?");

/***/ }),

/***/ "./node_modules/babel-plugin-rawact/lib/runtime/react/useState.js":
/*!************************************************************************!*\
  !*** ./node_modules/babel-plugin-rawact/lib/runtime/react/useState.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks */ \"./node_modules/babel-plugin-rawact/lib/runtime/hooks.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initialState => {\n  const _createSlot = Object(_hooks__WEBPACK_IMPORTED_MODULE_0__[\"createSlot\"])(),\n        _createSlot2 = _slicedToArray(_createSlot, 2),\n        hooks = _createSlot2[0],\n        index = _createSlot2[1];\n\n  const scheduleRender = Object(_hooks__WEBPACK_IMPORTED_MODULE_0__[\"createScheduleRender\"])();\n\n  if (!hooks[index]) {\n    hooks.push([initialState, newValue => {\n      hooks[index][0] = newValue;\n      scheduleRender();\n    }]);\n  }\n\n  return hooks[index];\n});\n\n//# sourceURL=webpack:///./node_modules/babel-plugin-rawact/lib/runtime/react/useState.js?");

/***/ }),

/***/ "./node_modules/babel-plugin-rawact/lib/runtime/removeEventListener.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/babel-plugin-rawact/lib/runtime/removeEventListener.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((root, node, event, old) => {\n  root[`event_${event}`].delete(node);\n});\n\n//# sourceURL=webpack:///./node_modules/babel-plugin-rawact/lib/runtime/removeEventListener.js?");

/***/ }),

/***/ "./node_modules/babel-plugin-rawact/lib/runtime/renderArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/babel-plugin-rawact/lib/runtime/renderArray.js ***!
  \*********************************************************************/
/*! exports provided: KeySymbol, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"KeySymbol\", function() { return KeySymbol; });\n/* harmony import */ var _renderInternal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderInternal */ \"./node_modules/babel-plugin-rawact/lib/runtime/renderInternal.js\");\n\nconst ARRAY_MARKER = {};\nconst KeySymbol = Symbol();\n/* harmony default export */ __webpack_exports__[\"default\"] = ((context, array) => {\n  const $$ = context.$$;\n\n  if (context._ !== ARRAY_MARKER) {\n    if (context.$) context.$();\n\n    context.$ = () => {\n      for (const itemContext of context.ctxs.values()) {\n        if (itemContext.$) itemContext.$();\n      }\n\n      const ctxsNonKey = context.ctxsNonKey;\n\n      for (let i = 0; i < ctxsNonKey.length; i++) {\n        const itemContext = ctxsNonKey[i];\n        if (itemContext.$) itemContext.$();\n      }\n    };\n\n    context._ = ARRAY_MARKER;\n    context.ctxs = new Map();\n    context.ctxsNonKey = [];\n    context.nodeMap = undefined;\n    context.fragment = [];\n  }\n\n  const ctxs = context.ctxs;\n  const oldNodeMap = context.nodeMap;\n  const fragment = context.fragment;\n  const keys = new Set();\n  const nodeMap = new Map();\n  const keysArray = array.map(item => {\n    const key = item[KeySymbol];\n    keys.add(key);\n    return key;\n  });\n  const unused = context.ctxsNonKey;\n  const ctxsNonKey = context.ctxsNonKey = [];\n\n  for (const pair of ctxs) {\n    if (!keys.has(pair[0])) {\n      unused.push(pair[1]);\n      ctxs.delete(pair[0]);\n    }\n  }\n\n  let unusedIndex = 0;\n  let isNodeKept = false;\n  const items = array.map((item, i) => {\n    const key = keysArray[i];\n    let childContext;\n\n    if (key === undefined) {\n      if (unusedIndex < unused.length) {\n        childContext = unused[unusedIndex++];\n      } else {\n        childContext = {\n          $$\n        };\n      }\n\n      ctxsNonKey.push(childContext);\n    } else {\n      childContext = ctxs.get(key);\n\n      if (childContext === undefined) {\n        childContext = {\n          $$\n        };\n        ctxs.set(key, childContext);\n      }\n    }\n\n    const oldNode = childContext.a;\n    Object(_renderInternal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(childContext, item, \"a\", false);\n    const node = childContext.a;\n    if (oldNode === node) isNodeKept = true;\n    nodeMap.set(node, i);\n    return node;\n  });\n  context.nodeMap = nodeMap; // Run unmount on removed items\n\n  for (; unusedIndex < unused.length; unusedIndex++) {\n    const childContext = unused[unusedIndex];\n    if (childContext.$) childContext.$();\n  } // take shortcuts for clearing all items\n\n\n  if (items.length === 0) {\n    return context.fragment = [document.createComment(\"RAWACT\")];\n  } else if (!isNodeKept) {\n    return context.fragment = items;\n  } // update fragment (and DOM) to new structure\n\n\n  const last = fragment[fragment.length - 1];\n  const followingNode = last && last.nextSibling;\n  const parentNode = last && last.parentNode;\n  let i = 0;\n  let offset = 0;\n\n  while (true) {\n    const goalNode = i < items.length ? items[i] : null;\n    const currentNode = fragment[i]; // Figure out where the currentNode should be instead\n\n    const currentNodeTarget = nodeMap.get(currentNode);\n\n    if (currentNodeTarget < i) {\n      // This node was already moved\n      // It's important to fix the offset here\n      // This can't be done while moving\n      fragment.splice(i, 1);\n      offset--;\n      continue;\n    } // Equal great, continue with next one\n\n\n    if (goalNode && goalNode === currentNode) {\n      i++;\n      continue;\n    }\n\n    if (goalNode && !goalNode.isConnected) {\n      // This is a new node\n      if (currentNode) {\n        if (parentNode) {\n          parentNode.insertBefore(goalNode, currentNode);\n        }\n      } else {\n        if (parentNode) {\n          if (followingNode) {\n            parentNode.insertBefore(goalNode, followingNode);\n          } else {\n            parentNode.appendChild(goalNode);\n          }\n        }\n      }\n\n      fragment.splice(i, 0, goalNode);\n      offset++;\n      i++;\n      continue;\n    } // When reached the end of the fragment\n    // goalNode must already be null here\n\n\n    if (!currentNode) break;\n\n    if (currentNodeTarget === undefined) {\n      // This node is no longer needed and can be removed\n      if (parentNode) parentNode.removeChild(currentNode);\n      fragment.splice(i, 1);\n      offset--;\n      continue;\n    } // goalNode must be set here\n\n\n    if (!goalNode) {\n      throw Error(\"Can't happen!\");\n    } // Figure out where the goalNode is currently\n    // As we already did some inserting and deleting\n    // offset has tracked that\n\n\n    const goalNodeSource = oldNodeMap.get(goalNode) + offset; // Check which one is nearer\n    // The goalNode source or the currentNode target\n\n    if (goalNodeSource < currentNodeTarget) {\n      // The source is nearer:\n      // remove the current node\n      // to be later inserted again\n      if (parentNode) parentNode.removeChild(currentNode);\n      fragment.splice(i, 1);\n      offset--;\n    } else {\n      // The currectNode target is nearer:\n      // move the goal node before the current node\n      if (parentNode) parentNode.insertBefore(goalNode, currentNode);\n      fragment.splice(i, 0, goalNode);\n      offset++;\n      i++;\n    }\n  }\n\n  return fragment;\n});\n\n//# sourceURL=webpack:///./node_modules/babel-plugin-rawact/lib/runtime/renderArray.js?");

/***/ }),

/***/ "./node_modules/babel-plugin-rawact/lib/runtime/renderChildren.js":
/*!************************************************************************!*\
  !*** ./node_modules/babel-plugin-rawact/lib/runtime/renderChildren.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderChildren; });\n/* harmony import */ var _createText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createText */ \"./node_modules/babel-plugin-rawact/lib/runtime/createText.js\");\n/* harmony import */ var _toText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toText */ \"./node_modules/babel-plugin-rawact/lib/runtime/toText.js\");\n\n\n\nconst renderChildren = (parentNode, children) => {\n  for (const child of children) {\n    if (Array.isArray(child)) {\n      renderChildren(parentNode, child);\n    } else {\n      parentNode.appendChild(typeof child === \"string\" ? Object(_createText__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(_toText__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(child)) : child);\n    }\n  }\n};\n\n\n\n//# sourceURL=webpack:///./node_modules/babel-plugin-rawact/lib/runtime/renderChildren.js?");

/***/ }),

/***/ "./node_modules/babel-plugin-rawact/lib/runtime/renderInternal.js":
/*!************************************************************************!*\
  !*** ./node_modules/babel-plugin-rawact/lib/runtime/renderInternal.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createText */ \"./node_modules/babel-plugin-rawact/lib/runtime/createText.js\");\n/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effects */ \"./node_modules/babel-plugin-rawact/lib/runtime/effects.js\");\n/* harmony import */ var _renderArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderArray */ \"./node_modules/babel-plugin-rawact/lib/runtime/renderArray.js\");\n/* harmony import */ var _toText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toText */ \"./node_modules/babel-plugin-rawact/lib/runtime/toText.js\");\n/* harmony import */ var _replaceNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./replaceNode */ \"./node_modules/babel-plugin-rawact/lib/runtime/replaceNode.js\");\n\n\n\n\n\n\nconst renderInstructions = (context, value, property, childContext, initialRender, rerender) => {\n  const old = !initialRender && context[property];\n  const node = context[property] = value(childContext, rerender);\n\n  if (old) {\n    Object(_replaceNode__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(old, node);\n  }\n};\n\nconst renderInternal = (context, value, property, initialRender) => {\n  // Check if value changed\n  const slot2 = property + \"$\";\n  if (!initialRender && context[slot2] === value) return;\n  context[slot2] = value; // Slot for child context\n\n  const slot = property + \"_\";\n  let node;\n\n  if (typeof value === \"function\") {\n    // render instructions\n    if (initialRender || !context[slot]) {\n      context[slot] = {\n        $$: context.$$\n      };\n    }\n\n    const rerender = () => {\n      if (context[slot2] === value) {\n        const old = context[property];\n        const node = context[property] = value(context[slot], rerender);\n        Object(_replaceNode__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(old, node);\n        Object(_effects__WEBPACK_IMPORTED_MODULE_1__[\"runEffects\"])();\n      }\n    };\n\n    node = value(context[slot], rerender);\n  } else {\n    if (Array.isArray(value)) {\n      // render array\n      if (initialRender || !context[slot]) {\n        context[slot] = {\n          $$: context.$$\n        };\n      }\n\n      node = Object(_renderArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(context[slot], value);\n    } else {\n      // text content\n      if (context[slot]) {\n        if (!initialRender && context[slot].$) context[slot].$();\n        context[slot] = undefined;\n      }\n\n      const text = Object(_toText__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(value);\n\n      if (!initialRender) {\n        const old = context[property];\n\n        if (old && old.nodeType === 3) {\n          // Update text node shortcut\n          old.textContent = text;\n          return;\n        }\n      }\n\n      node = Object(_createText__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(text);\n    }\n  }\n\n  if (!initialRender) {\n    const old = context[property];\n\n    if (old) {\n      Object(_replaceNode__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(old, node);\n    }\n  }\n\n  context[property] = node;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderInternal);\n\n//# sourceURL=webpack:///./node_modules/babel-plugin-rawact/lib/runtime/renderInternal.js?");

/***/ }),

/***/ "./node_modules/babel-plugin-rawact/lib/runtime/replaceEventListener.js":
/*!******************************************************************************!*\
  !*** ./node_modules/babel-plugin-rawact/lib/runtime/replaceEventListener.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((root, node, event, old, handler) => {\n  root[`event_${event}`].set(node, handler);\n});\n\n//# sourceURL=webpack:///./node_modules/babel-plugin-rawact/lib/runtime/replaceEventListener.js?");

/***/ }),

/***/ "./node_modules/babel-plugin-rawact/lib/runtime/replaceNode.js":
/*!*********************************************************************!*\
  !*** ./node_modules/babel-plugin-rawact/lib/runtime/replaceNode.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst toArray = x => {\n  const array = [];\n  toArrayInteral(x, array);\n  return array;\n};\n\nconst toArrayInteral = (x, array) => {\n  if (Array.isArray(x)) {\n    for (const item of x) {\n      toArrayInteral(item, array);\n    }\n  } else {\n    array.push(x);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((oldNodes, newNodes) => {\n  if (oldNodes === newNodes) return;\n  oldNodes = toArray(oldNodes);\n  newNodes = toArray(newNodes);\n  const parentNode = oldNodes[0].parentNode;\n  const nextOne = oldNodes[oldNodes.length - 1].nextSibling;\n\n  if (!nextOne && parentNode.firstChild === oldNodes[0]) {\n    // replaced whole parent: take shortcut to clear nodes here\n    parentNode.textContent = \"\";\n\n    for (let i = 0; i < newNodes.length; i++) {\n      parentNode.appendChild(newNodes[i]);\n    }\n  } else {\n    const oldSet = new Set(oldNodes);\n\n    for (let i = 0; i < newNodes.length; i++) {\n      const node = newNodes[i];\n      oldSet.delete(node);\n\n      if (nextOne) {\n        parentNode.insertBefore(newNodes[i], nextOne);\n      } else {\n        parentNode.appendChild(newNodes[i]);\n      }\n    }\n\n    for (const old of oldSet) {\n      parentNode.removeChild(old);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/babel-plugin-rawact/lib/runtime/replaceNode.js?");

/***/ }),

/***/ "./node_modules/babel-plugin-rawact/lib/runtime/toText.js":
/*!****************************************************************!*\
  !*** ./node_modules/babel-plugin-rawact/lib/runtime/toText.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (value => {\n  if (value === false || value === null || value === undefined) return \"\";\n  return `${value}`;\n});\n\n//# sourceURL=webpack:///./node_modules/babel-plugin-rawact/lib/runtime/toText.js?");

/***/ }),

/***/ "./node_modules/babel-plugin-rawact/lib/runtime/unmountInternal.js":
/*!*************************************************************************!*\
  !*** ./node_modules/babel-plugin-rawact/lib/runtime/unmountInternal.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (childContext => childContext && childContext.$ && childContext.$());\n\n//# sourceURL=webpack:///./node_modules/babel-plugin-rawact/lib/runtime/unmountInternal.js?");

/***/ }),

/***/ "./node_modules/babel-plugin-rawact/lib/runtime/withKey.js":
/*!*****************************************************************!*\
  !*** ./node_modules/babel-plugin-rawact/lib/runtime/withKey.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderArray */ \"./node_modules/babel-plugin-rawact/lib/runtime/renderArray.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((key, instructions) => {\n  instructions[_renderArray__WEBPACK_IMPORTED_MODULE_0__[\"KeySymbol\"]] = key;\n  return instructions;\n});\n\n//# sourceURL=webpack:///./node_modules/babel-plugin-rawact/lib/runtime/withKey.js?");

/***/ })

/******/ });
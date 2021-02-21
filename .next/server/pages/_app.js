module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Components/AuthProvider/AuthProvider.tsx":
/*!******************************************************!*\
  !*** ./src/Components/AuthProvider/AuthProvider.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase/firebase */ \"./src/firebase/firebase.ts\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _redux_authSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/authSlice */ \"./src/redux/authSlice.ts\");\n\nvar _jsxFileName = \"/home/madhav/Documents/Web Development/NextJS/slack-clone/src/Components/AuthProvider/AuthProvider.tsx\";\n\n\n\n\n\n\nfunction AuthProvider({\n  children\n}) {\n  const state = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(state => state);\n  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    console.log(\"state\", state);\n  }, [state]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const unsubscribe = _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__[\"auth\"].onIdTokenChanged(async user => {\n      if (!user) {\n        dispatch(_redux_authSlice__WEBPACK_IMPORTED_MODULE_5__[\"authActions\"].SET_USER(null));\n        nookies__WEBPACK_IMPORTED_MODULE_4___default.a.set(undefined, \"user-token\", \"\");\n      } else {\n        const token = await user.getIdToken();\n        dispatch(_redux_authSlice__WEBPACK_IMPORTED_MODULE_5__[\"authActions\"].SET_USER(null));\n        nookies__WEBPACK_IMPORTED_MODULE_4___default.a.set(undefined, \"user-token\", token);\n      }\n    });\n    return () => unsubscribe();\n  }, [dispatch]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const handle = setInterval(async () => {\n      const user = _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__[\"auth\"].currentUser;\n      if (user) await user.getIdToken(true);\n    }, 10 * 60 * 1000); // clean up setInterval\n\n    return () => clearInterval(handle);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthProvider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9BdXRoUHJvdmlkZXIvQXV0aFByb3ZpZGVyLnRzeD9iNjMyIl0sIm5hbWVzIjpbIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwic3RhdGUiLCJ1c2VTZWxlY3RvciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwidW5zdWJzY3JpYmUiLCJhdXRoIiwib25JZFRva2VuQ2hhbmdlZCIsInVzZXIiLCJhdXRoQWN0aW9ucyIsIlNFVF9VU0VSIiwibm9va2llcyIsInNldCIsInVuZGVmaW5lZCIsInRva2VuIiwiZ2V0SWRUb2tlbiIsImhhbmRsZSIsInNldEludGVydmFsIiwiY3VycmVudFVzZXIiLCJjbGVhckludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFNQSxTQUFTQSxZQUFULENBQXNCO0FBQUNDO0FBQUQsQ0FBdEIsRUFBcUQ7QUFDbkQsUUFBTUMsS0FBSyxHQUFHQywrREFBVyxDQUFFRCxLQUFELElBQWdCQSxLQUFqQixDQUF6QjtBQUNBLFFBQU1FLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQUMseURBQVMsQ0FBQyxNQUFJO0FBQ1pDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJOLEtBQXJCO0FBQ0QsR0FGUSxFQUVQLENBQUNBLEtBQUQsQ0FGTyxDQUFUO0FBSUFJLHlEQUFTLENBQUMsTUFBSTtBQUNaLFVBQU1HLFdBQVcsR0FBR0MsdURBQUksQ0FBQ0MsZ0JBQUwsQ0FBc0IsTUFBT0MsSUFBUCxJQUFjO0FBQ3RELFVBQUksQ0FBQ0EsSUFBTCxFQUFVO0FBQ1JSLGdCQUFRLENBQUNTLDREQUFXLENBQUNDLFFBQVosQ0FBcUIsSUFBckIsQ0FBRCxDQUFSO0FBQ0FDLHNEQUFPLENBQUNDLEdBQVIsQ0FBWUMsU0FBWixFQUF1QixZQUF2QixFQUFxQyxFQUFyQztBQUNELE9BSEQsTUFHTTtBQUNKLGNBQU1DLEtBQUssR0FBRyxNQUFNTixJQUFJLENBQUNPLFVBQUwsRUFBcEI7QUFDQWYsZ0JBQVEsQ0FBQ1MsNERBQVcsQ0FBQ0MsUUFBWixDQUFxQixJQUFyQixDQUFELENBQVI7QUFDQUMsc0RBQU8sQ0FBQ0MsR0FBUixDQUFZQyxTQUFaLEVBQXVCLFlBQXZCLEVBQXFDQyxLQUFyQztBQUNEO0FBQ0YsS0FUbUIsQ0FBcEI7QUFXQSxXQUFPLE1BQUtULFdBQVcsRUFBdkI7QUFDRCxHQWJRLEVBYVAsQ0FBQ0wsUUFBRCxDQWJPLENBQVQ7QUFlQUUseURBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTWMsTUFBTSxHQUFHQyxXQUFXLENBQUMsWUFBWTtBQUNyQyxZQUFNVCxJQUFJLEdBQUdGLHVEQUFJLENBQUNZLFdBQWxCO0FBQ0EsVUFBSVYsSUFBSixFQUFVLE1BQU1BLElBQUksQ0FBQ08sVUFBTCxDQUFnQixJQUFoQixDQUFOO0FBQ1gsS0FIeUIsRUFHdkIsS0FBSyxFQUFMLEdBQVUsSUFIYSxDQUExQixDQURjLENBTWQ7O0FBQ0EsV0FBTyxNQUFNSSxhQUFhLENBQUNILE1BQUQsQ0FBMUI7QUFDRCxHQVJRLEVBUU4sRUFSTSxDQUFUO0FBVUEsc0JBQ0U7QUFBQSxjQUNHbkI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7QUFFY0QsMkVBQWYiLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9BdXRoUHJvdmlkZXIvQXV0aFByb3ZpZGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdXgvc3RvcmVcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vLi4vZmlyZWJhc2UvZmlyZWJhc2VcIjtcbmltcG9ydCBub29raWVzIGZyb20gXCJub29raWVzXCI7XG5pbXBvcnQgeyBhdXRoQWN0aW9ucyB9IGZyb20gXCIuLi8uLi9yZWR1eC9hdXRoU2xpY2VcIjtcblxuaW50ZXJmYWNlIFByb3Bze1xuICBjaGlsZHJlbjogYW55O1xufVxuXG5mdW5jdGlvbiBBdXRoUHJvdmlkZXIoe2NoaWxkcmVufTogUHJvcHMpOkpTWC5FbGVtZW50IHtcbiAgY29uc3Qgc3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6U3RhdGUpPT4gc3RhdGUpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgY29uc29sZS5sb2coXCJzdGF0ZVwiLCBzdGF0ZSk7XG4gIH0sW3N0YXRlXSlcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IGF1dGgub25JZFRva2VuQ2hhbmdlZChhc3luYyAodXNlcik9PntcbiAgICAgIGlmICghdXNlcil7XG4gICAgICAgIGRpc3BhdGNoKGF1dGhBY3Rpb25zLlNFVF9VU0VSKG51bGwpKTtcbiAgICAgICAgbm9va2llcy5zZXQodW5kZWZpbmVkLCBcInVzZXItdG9rZW5cIiwgXCJcIik7XG4gICAgICB9ZWxzZSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdXNlci5nZXRJZFRva2VuKCk7XG4gICAgICAgIGRpc3BhdGNoKGF1dGhBY3Rpb25zLlNFVF9VU0VSKG51bGwpKTtcbiAgICAgICAgbm9va2llcy5zZXQodW5kZWZpbmVkLCBcInVzZXItdG9rZW5cIiwgdG9rZW4pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiAoKT0+IHVuc3Vic2NyaWJlKClcbiAgfSxbZGlzcGF0Y2hdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlID0gc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgdXNlciA9IGF1dGguY3VycmVudFVzZXI7XG4gICAgICBpZiAodXNlcikgYXdhaXQgdXNlci5nZXRJZFRva2VuKHRydWUpO1xuICAgIH0sIDEwICogNjAgKiAxMDAwKTtcblxuICAgIC8vIGNsZWFuIHVwIHNldEludGVydmFsXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaGFuZGxlKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhQcm92aWRlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/AuthProvider/AuthProvider.tsx\n");

/***/ }),

/***/ "./src/firebase/firebase.ts":
/*!**********************************!*\
  !*** ./src/firebase/firebase.ts ***!
  \**********************************/
/*! exports provided: auth, db */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"auth\", function() { return auth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"db\", function() { return db; });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // For Firebase JS SDK v7.20.0 and later, measurementId is optional\n\nconst firebaseConfig = {\n  apiKey: \"AIzaSyClpkDbvYjX-gMx06yxK0mUgIF9S0liE1I\",\n  authDomain: \"slack-f1af1.firebaseapp.com\",\n  databaseURL: \"https://slack-f1af1-default-rtdb.firebaseio.com\",\n  projectId: \"slack-f1af1\",\n  storageBucket: \"slack-f1af1.appspot.com\",\n  messagingSenderId: \"205308401513\",\n  appId: \"1:205308401513:web:db0d47ae7ba0013d2bcff8\",\n  measurementId: \"G-9R6729X7GC\"\n};\n\nfunction initializeApp() {\n  if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {\n    firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);\n  }\n}\n\ninitializeApp();\nconst auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();\nconst db = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmlyZWJhc2UvZmlyZWJhc2UudHM/M2NlMiJdLCJuYW1lcyI6WyJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImluaXRpYWxpemVBcHAiLCJmaXJlYmFzZSIsImFwcHMiLCJsZW5ndGgiLCJhdXRoIiwiZGIiLCJmaXJlc3RvcmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Q0FHQTs7QUFDQSxNQUFNQSxjQUFjLEdBQUc7QUFDckJDLFFBQU0sRUFBRSx5Q0FEYTtBQUVyQkMsWUFBVSxFQUFFLDZCQUZTO0FBR3JCQyxhQUFXLEVBQUUsaURBSFE7QUFJckJDLFdBQVMsRUFBRSxhQUpVO0FBS3JCQyxlQUFhLEVBQUUseUJBTE07QUFNckJDLG1CQUFpQixFQUFFLGNBTkU7QUFPckJDLE9BQUssRUFBRSwyQ0FQYztBQVFyQkMsZUFBYSxFQUFFO0FBUk0sQ0FBdkI7O0FBV0EsU0FBU0MsYUFBVCxHQUErQjtBQUM3QixNQUFJLENBQUNDLG1EQUFRLENBQUNDLElBQVQsQ0FBY0MsTUFBbkIsRUFBMEI7QUFDeEJGLHVEQUFRLENBQUNELGFBQVQsQ0FBdUJULGNBQXZCO0FBQ0Q7QUFDRjs7QUFFRFMsYUFBYTtBQUViLE1BQU1JLElBQXdCLEdBQUdILG1EQUFRLENBQUNHLElBQVQsRUFBakM7QUFDQSxNQUFNQyxFQUFnQyxHQUFHSixtREFBUSxDQUFDSyxTQUFULEVBQXpDIiwiZmlsZSI6Ii4vc3JjL2ZpcmViYXNlL2ZpcmViYXNlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG4vLyBGb3IgRmlyZWJhc2UgSlMgU0RLIHY3LjIwLjAgYW5kIGxhdGVyLCBtZWFzdXJlbWVudElkIGlzIG9wdGlvbmFsXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUNscGtEYnZZalgtZ014MDZ5eEswbVVnSUY5UzBsaUUxSVwiLFxuICBhdXRoRG9tYWluOiBcInNsYWNrLWYxYWYxLmZpcmViYXNlYXBwLmNvbVwiLFxuICBkYXRhYmFzZVVSTDogXCJodHRwczovL3NsYWNrLWYxYWYxLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwic2xhY2stZjFhZjFcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJzbGFjay1mMWFmMS5hcHBzcG90LmNvbVwiLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIyMDUzMDg0MDE1MTNcIixcbiAgYXBwSWQ6IFwiMToyMDUzMDg0MDE1MTM6d2ViOmRiMGQ0N2FlN2JhMDAxM2QyYmNmZjhcIixcbiAgbWVhc3VyZW1lbnRJZDogXCJHLTlSNjcyOVg3R0NcIlxufTtcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUFwcCgpOiB2b2lkIHtcbiAgaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCl7XG4gICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG4gIH1cbn1cblxuaW5pdGlhbGl6ZUFwcCgpO1xuXG5jb25zdCBhdXRoOiBmaXJlYmFzZS5hdXRoLkF1dGggPSBmaXJlYmFzZS5hdXRoKCk7XG5jb25zdCBkYjogZmlyZWJhc2UuZmlyZXN0b3JlLkZpcmVzdG9yZSA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xudHlwZSBVc2VyID0gZmlyZWJhc2UuVXNlcjtcblxuZXhwb3J0IHthdXRoLCBkYn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/firebase/firebase.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/store */ \"./src/redux/store.ts\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Components_AuthProvider_AuthProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/AuthProvider/AuthProvider */ \"./src/Components/AuthProvider/AuthProvider.tsx\");\n\n\nvar _jsxFileName = \"/home/madhav/Documents/Web Development/NextJS/slack-clone/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"preconnect\",\n        href: \"https://fonts.gstatic.com\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        href: \"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_AuthProvider_AuthProvider__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_redux_store__WEBPACK_IMPORTED_MODULE_2__[\"wrapper\"].withRedux(MyApp));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBZ0U7QUFDOUQsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQU0sV0FBRyxFQUFDLFlBQVY7QUFBdUIsWUFBSSxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQ0UsWUFBSSxFQUFDLHNHQURQO0FBRUUsV0FBRyxFQUFDO0FBRk47QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBUUUscUVBQUMsNkVBQUQ7QUFBQSw2QkFDRSxxRUFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkY7QUFBQSxrQkFERjtBQWNEOztBQUVjQyxtSEFBTyxDQUFDQyxTQUFSLENBQWtCSixLQUFsQixDQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2dsb2JhbHMuc2Nzc1wiO1xuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBBdXRoUHJvdmlkZXIgZnJvbSBcIi4uL0NvbXBvbmVudHMvQXV0aFByb3ZpZGVyL0F1dGhQcm92aWRlclwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKTogSlNYLkVsZW1lbnQge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDEwMDsyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0F1dGhQcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/redux/authSlice.ts":
/*!********************************!*\
  !*** ./src/redux/authSlice.ts ***!
  \********************************/
/*! exports provided: authActions, authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authActions\", function() { return authActions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authReducer\", function() { return authReducer; });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst authSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createSlice\"])({\n  name: \"auth\",\n  initialState: {\n    user: null\n  },\n  reducers: {\n    SET_USER(state, action) {\n      return _objectSpread(_objectSpread({}, state), {}, {\n        user: action.payload\n      });\n    }\n\n  }\n});\nconst {\n  actions: authActions,\n  reducer: authReducer\n} = authSlice;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYXV0aFNsaWNlLnRzP2MwZDgiXSwibmFtZXMiOlsiYXV0aFNsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwidXNlciIsInJlZHVjZXJzIiwiU0VUX1VTRVIiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwiYXV0aEFjdGlvbnMiLCJyZWR1Y2VyIiwiYXV0aFJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7QUFNQSxNQUFNQSxTQUFjLEdBQUdDLG9FQUFXLENBQUM7QUFDakNDLE1BQUksRUFBRSxNQUQyQjtBQUVqQ0MsY0FBWSxFQUFFO0FBQ1pDLFFBQUksRUFBRTtBQURNLEdBRm1CO0FBS2pDQyxVQUFRLEVBQUU7QUFDUkMsWUFBUSxDQUFDQyxLQUFELEVBQW9CQyxNQUFwQixFQUErQztBQUNyRCw2Q0FDS0QsS0FETDtBQUVFSCxZQUFJLEVBQUVJLE1BQU0sQ0FBQ0M7QUFGZjtBQUlEOztBQU5PO0FBTHVCLENBQUQsQ0FBbEM7QUFlQSxNQUFNO0FBQUVDLFNBQU8sRUFBRUMsV0FBWDtBQUF3QkMsU0FBTyxFQUFFQztBQUFqQyxJQUFpRGIsU0FBdkQiLCJmaWxlIjoiLi9zcmMvcmVkdXgvYXV0aFNsaWNlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXIgZnJvbSBcIi4uL2ZpcmViYXNlL2ZpcmViYXNlXCI7XG5pbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmludGVyZmFjZSBTbGljZVN0YXRlIHtcbiAgdXNlcjogVXNlciB8IG51bGw7XG59XG5cbmNvbnN0IGF1dGhTbGljZTogYW55ID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcImF1dGhcIixcbiAgaW5pdGlhbFN0YXRlOiB7XG4gICAgdXNlcjogbnVsbFxuICB9LFxuICByZWR1Y2Vyczoge1xuICAgIFNFVF9VU0VSKHN0YXRlOiBTbGljZVN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248YW55Pil7XG4gICAgICByZXR1cm57XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG5cbmNvbnN0IHsgYWN0aW9uczogYXV0aEFjdGlvbnMsIHJlZHVjZXI6IGF1dGhSZWR1Y2VyIH0gPSBhdXRoU2xpY2U7XG5cbmV4cG9ydCB7YXV0aEFjdGlvbnMsIGF1dGhSZWR1Y2VyfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/redux/authSlice.ts\n");

/***/ }),

/***/ "./src/redux/store.ts":
/*!****************************!*\
  !*** ./src/redux/store.ts ***!
  \****************************/
/*! exports provided: wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wrapper\", function() { return wrapper; });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _authSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authSlice */ \"./src/redux/authSlice.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst reducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  auth: _authSlice__WEBPACK_IMPORTED_MODULE_2__[\"authReducer\"]\n});\n\nconst rootReducer = (state, action) => {\n  if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__[\"HYDRATE\"]) {\n    // Attention! This will overwrite client state! Real apps should use proper reconciliation.\n    // Read more about it here https://bit.ly/2ZsXbwA.\n    const nextState = _objectSpread(_objectSpread({}, state), action.payload);\n\n    return nextState;\n  } else {\n    return reducer(state, action);\n  }\n};\n\nconst store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"configureStore\"])({\n  reducer: rootReducer\n}); // create a makeStore function\n\nconst makeStore = () => store; // export an assembled wrapper\n\n\nconst wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__[\"createWrapper\"])(makeStore, {\n  debug: true\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc3RvcmUudHM/MDBiYiJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiYXV0aCIsImF1dGhSZWR1Y2VyIiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwibmV4dFN0YXRlIiwicGF5bG9hZCIsInN0b3JlIiwiY29uZmlndXJlU3RvcmUiLCJtYWtlU3RvcmUiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBVUEsTUFBTUEsT0FBTyxHQUFHQyx3RUFBZSxDQUFDO0FBQzlCQyxNQUFJLEVBQUVDLHNEQUFXQTtBQURhLENBQUQsQ0FBL0I7O0FBS0EsTUFBTUMsV0FBVyxHQUFHLENBQUNDLEtBQUQsRUFBYUMsTUFBYixLQUE2QjtBQUMvQyxNQUFJQSxNQUFNLENBQUNDLElBQVAsS0FBZ0JDLDBEQUFwQixFQUE2QjtBQUMzQjtBQUNBO0FBQ0EsVUFBTUMsU0FBUyxtQ0FDVkosS0FEVSxHQUVWQyxNQUFNLENBQUNJLE9BRkcsQ0FBZjs7QUFLQSxXQUFPRCxTQUFQO0FBQ0QsR0FURCxNQVNPO0FBQ0wsV0FBT1QsT0FBTyxDQUFDSyxLQUFELEVBQVFDLE1BQVIsQ0FBZDtBQUNEO0FBQ0YsQ0FiRDs7QUFlQSxNQUFNSyxLQUFLLEdBQUdDLHVFQUFjLENBQUM7QUFDM0JaLFNBQU8sRUFBRUk7QUFEa0IsQ0FBRCxDQUE1QixDLENBSUE7O0FBQ0EsTUFBTVMsU0FBYyxHQUFHLE1BQU1GLEtBQTdCLEMsQ0FFQTs7O0FBQ08sTUFBTUcsT0FBTyxHQUFHQyx3RUFBYSxDQUFRRixTQUFSLEVBQW1CO0FBQUVHLE9BQUssRUFBRTtBQUFULENBQW5CLENBQTdCIiwiZmlsZSI6Ii4vc3JjL3JlZHV4L3N0b3JlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzLCBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyLCBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0IHsgYXV0aFJlZHVjZXIgfSBmcm9tIFwiLi9hdXRoU2xpY2VcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuLi9maXJlYmFzZS9maXJlYmFzZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgaW5pdDogYW55O1xuICBhdXRoOiB7XG4gICAgdXNlcjogVXNlciB8IG51bGw7XG4gIH1cbn1cblxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGF1dGg6IGF1dGhSZWR1Y2VyXG59KTtcblxuXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZTogYW55LCBhY3Rpb246IGFueSkgPT4ge1xuICBpZiAoYWN0aW9uLnR5cGUgPT09IEhZRFJBVEUpIHtcbiAgICAvLyBBdHRlbnRpb24hIFRoaXMgd2lsbCBvdmVyd3JpdGUgY2xpZW50IHN0YXRlISBSZWFsIGFwcHMgc2hvdWxkIHVzZSBwcm9wZXIgcmVjb25jaWxpYXRpb24uXG4gICAgLy8gUmVhZCBtb3JlIGFib3V0IGl0IGhlcmUgaHR0cHM6Ly9iaXQubHkvMlpzWGJ3QS5cbiAgICBjb25zdCBuZXh0U3RhdGUgPSB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxuICAgIH07XG5cbiAgICByZXR1cm4gbmV4dFN0YXRlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICB9XG59O1xuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjogcm9vdFJlZHVjZXIsXG59KTtcblxuLy8gY3JlYXRlIGEgbWFrZVN0b3JlIGZ1bmN0aW9uXG5jb25zdCBtYWtlU3RvcmU6IGFueSA9ICgpID0+IHN0b3JlO1xuXG4vLyBleHBvcnQgYW4gYXNzZW1ibGVkIHdyYXBwZXJcbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcjxTdGF0ZT4obWFrZVN0b3JlLCB7IGRlYnVnOiB0cnVlIH0pO1xuZXhwb3J0IHR5cGUgQXBwRGlzcGF0Y2ggPSB0eXBlb2Ygc3RvcmUuZGlzcGF0Y2g7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/store.ts\n");

/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9nbG9iYWxzLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/globals.scss\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@reduxjs/toolkit\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCI/Y2NkOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAcmVkdXhqcy90b29sa2l0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@reduxjs/toolkit\n");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/app\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIj9hZDQ4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZpcmViYXNlL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/app\n");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCI/Mjc2NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmaXJlYmFzZS9hdXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/auth\n");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/firestore\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIj8wNjI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZpcmViYXNlL2ZpcmVzdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/firestore\n");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nookies\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub29raWVzXCI/ZDk3NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJub29raWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///nookies\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });
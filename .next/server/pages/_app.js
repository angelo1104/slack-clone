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

/***/ "./src/firebase/initAuth.ts":
/*!**********************************!*\
  !*** ./src/firebase/initAuth.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-firebase-auth */ \"next-firebase-auth\");\n/* harmony import */ var next_firebase_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_firebase_auth__WEBPACK_IMPORTED_MODULE_0__);\n// eslint-disable-next-line @typescript-eslint/ban-ts-comment\n// @ts-ignore\n\n\nconst initAuth = () => {\n  Object(next_firebase_auth__WEBPACK_IMPORTED_MODULE_0__[\"init\"])({\n    authPageURL: '/auth',\n    appPageURL: '/',\n    loginAPIEndpoint: '/api/auth/login',\n    // required\n    logoutAPIEndpoint: '/api/auth/logout',\n    // required\n    // Required in most cases.\n    firebaseAdminInitConfig: {\n      credential: {\n        projectId: 'slack-f1af1',\n        clientEmail: 'firebase-adminsdk-zb7oj@slack-f1af1.iam.gserviceaccount.com',\n        // The private key must not be accesssible on the client side.\n        privateKey: process.env.FIREBASE_PRIVATE_KEY,\n        privateKeyId: \"d7141bb6ff6d36c0cab28d499e3327fd256f2d55\",\n        clientId: \"104597950845250539314\",\n        authUri: \"https://accounts.google.com/o/oauth2/auth\",\n        tokenUri: \"https://oauth2.googleapis.com/token\"\n      },\n      databaseURL: 'https://my-example-app.firebaseio.com'\n    },\n    firebaseClientInitConfig: {\n      apiKey: 'AIzaSyClpkDbvYjX-gMx06yxK0mUgIF9S0liE1I',\n      // required\n      authDomain: 'slack-f1af1.firebaseapp.com',\n      databaseURL: 'https://slack-f1af1-default-rtdb.firebaseio.com',\n      projectId: 'slack-f1af1',\n      storageBucket: \"slack-f1af1.appspot.com\",\n      messagingSenderId: \"205308401513\",\n      appId: \"1:205308401513:web:db0d47ae7ba0013d2bcff8\",\n      measurementId: \"G-9R6729X7GC\"\n    },\n    cookies: {\n      name: 'ExampleApp',\n      // required\n      // Keys are required unless you set `signed` to `false`.\n      // The keys cannot be accessible on the client side.\n      keys: [process.env.COOKIE_SECRET_CURRENT, process.env.COOKIE_SECRET_PREVIOUS],\n      httpOnly: true,\n      maxAge: 12 * 60 * 60 * 24 * 1000,\n      // twelve days\n      overwrite: true,\n      path: '/',\n      sameSite: 'strict',\n      secure: \"true\" === \"true\",\n      // set this to false in local (non-HTTPS) development\n      signed: true\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initAuth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmlyZWJhc2UvaW5pdEF1dGgudHM/NDljZCJdLCJuYW1lcyI6WyJpbml0QXV0aCIsImluaXQiLCJhdXRoUGFnZVVSTCIsImFwcFBhZ2VVUkwiLCJsb2dpbkFQSUVuZHBvaW50IiwibG9nb3V0QVBJRW5kcG9pbnQiLCJmaXJlYmFzZUFkbWluSW5pdENvbmZpZyIsImNyZWRlbnRpYWwiLCJwcm9qZWN0SWQiLCJjbGllbnRFbWFpbCIsInByaXZhdGVLZXkiLCJwcm9jZXNzIiwiZW52IiwiRklSRUJBU0VfUFJJVkFURV9LRVkiLCJwcml2YXRlS2V5SWQiLCJjbGllbnRJZCIsImF1dGhVcmkiLCJ0b2tlblVyaSIsImRhdGFiYXNlVVJMIiwiZmlyZWJhc2VDbGllbnRJbml0Q29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImNvb2tpZXMiLCJuYW1lIiwia2V5cyIsIkNPT0tJRV9TRUNSRVRfQ1VSUkVOVCIsIkNPT0tJRV9TRUNSRVRfUFJFVklPVVMiLCJodHRwT25seSIsIm1heEFnZSIsIm92ZXJ3cml0ZSIsInBhdGgiLCJzYW1lU2l0ZSIsInNlY3VyZSIsInNpZ25lZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFFBQVksR0FBRyxNQUFNO0FBQ3pCQyxpRUFBSSxDQUFDO0FBQ0hDLGVBQVcsRUFBRSxPQURWO0FBRUhDLGNBQVUsRUFBRSxHQUZUO0FBR0hDLG9CQUFnQixFQUFFLGlCQUhmO0FBR2tDO0FBQ3JDQyxxQkFBaUIsRUFBRSxrQkFKaEI7QUFJb0M7QUFDdkM7QUFDQUMsMkJBQXVCLEVBQUU7QUFDdkJDLGdCQUFVLEVBQUU7QUFDVkMsaUJBQVMsRUFBRSxhQUREO0FBRVZDLG1CQUFXLEVBQUUsNkRBRkg7QUFHVjtBQUNBQyxrQkFBVSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsb0JBSmQ7QUFLVkMsb0JBQVksRUFBRSwwQ0FMSjtBQU1WQyxnQkFBUSxFQUFFLHVCQU5BO0FBT1ZDLGVBQU8sRUFBRSwyQ0FQQztBQVFWQyxnQkFBUSxFQUFFO0FBUkEsT0FEVztBQVd2QkMsaUJBQVcsRUFBRTtBQVhVLEtBTnRCO0FBbUJIQyw0QkFBd0IsRUFBRTtBQUN4QkMsWUFBTSxFQUFFLHlDQURnQjtBQUMyQjtBQUNuREMsZ0JBQVUsRUFBRSw2QkFGWTtBQUd4QkgsaUJBQVcsRUFBRSxpREFIVztBQUl4QlYsZUFBUyxFQUFFLGFBSmE7QUFLeEJjLG1CQUFhLEVBQUUseUJBTFM7QUFNeEJDLHVCQUFpQixFQUFFLGNBTks7QUFPeEJDLFdBQUssRUFBRSwyQ0FQaUI7QUFReEJDLG1CQUFhLEVBQUU7QUFSUyxLQW5CdkI7QUE2QkhDLFdBQU8sRUFBRTtBQUNQQyxVQUFJLEVBQUUsWUFEQztBQUNhO0FBQ3BCO0FBQ0E7QUFDQUMsVUFBSSxFQUFFLENBQ0pqQixPQUFPLENBQUNDLEdBQVIsQ0FBWWlCLHFCQURSLEVBRUpsQixPQUFPLENBQUNDLEdBQVIsQ0FBWWtCLHNCQUZSLENBSkM7QUFRUEMsY0FBUSxFQUFFLElBUkg7QUFTUEMsWUFBTSxFQUFFLEtBQUssRUFBTCxHQUFVLEVBQVYsR0FBZSxFQUFmLEdBQW9CLElBVHJCO0FBUzJCO0FBQ2xDQyxlQUFTLEVBQUUsSUFWSjtBQVdQQyxVQUFJLEVBQUUsR0FYQztBQVlQQyxjQUFRLEVBQUUsUUFaSDtBQWFQQyxZQUFNLEVBQUV6QixNQUFBLEtBQTRDLE1BYjdDO0FBYXFEO0FBQzVEMEIsWUFBTSxFQUFFO0FBZEQ7QUE3Qk4sR0FBRCxDQUFKO0FBOENELENBL0NEOztBQWlEZXJDLHVFQUFmIiwiZmlsZSI6Ii4vc3JjL2ZpcmViYXNlL2luaXRBdXRoLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IHsgaW5pdCB9IGZyb20gJ25leHQtZmlyZWJhc2UtYXV0aCdcblxuY29uc3QgaW5pdEF1dGg6YW55ID0gKCkgPT4ge1xuICBpbml0KHtcbiAgICBhdXRoUGFnZVVSTDogJy9hdXRoJyxcbiAgICBhcHBQYWdlVVJMOiAnLycsXG4gICAgbG9naW5BUElFbmRwb2ludDogJy9hcGkvYXV0aC9sb2dpbicsIC8vIHJlcXVpcmVkXG4gICAgbG9nb3V0QVBJRW5kcG9pbnQ6ICcvYXBpL2F1dGgvbG9nb3V0JywgLy8gcmVxdWlyZWRcbiAgICAvLyBSZXF1aXJlZCBpbiBtb3N0IGNhc2VzLlxuICAgIGZpcmViYXNlQWRtaW5Jbml0Q29uZmlnOiB7XG4gICAgICBjcmVkZW50aWFsOiB7XG4gICAgICAgIHByb2plY3RJZDogJ3NsYWNrLWYxYWYxJyxcbiAgICAgICAgY2xpZW50RW1haWw6ICdmaXJlYmFzZS1hZG1pbnNkay16YjdvakBzbGFjay1mMWFmMS5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbScsXG4gICAgICAgIC8vIFRoZSBwcml2YXRlIGtleSBtdXN0IG5vdCBiZSBhY2Nlc3NzaWJsZSBvbiB0aGUgY2xpZW50IHNpZGUuXG4gICAgICAgIHByaXZhdGVLZXk6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1BSSVZBVEVfS0VZLFxuICAgICAgICBwcml2YXRlS2V5SWQ6IFwiZDcxNDFiYjZmZjZkMzZjMGNhYjI4ZDQ5OWUzMzI3ZmQyNTZmMmQ1NVwiLFxuICAgICAgICBjbGllbnRJZDogXCIxMDQ1OTc5NTA4NDUyNTA1MzkzMTRcIixcbiAgICAgICAgYXV0aFVyaTogXCJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvYXV0aFwiLFxuICAgICAgICB0b2tlblVyaTogXCJodHRwczovL29hdXRoMi5nb29nbGVhcGlzLmNvbS90b2tlblwiLFxuICAgICAgfSxcbiAgICAgIGRhdGFiYXNlVVJMOiAnaHR0cHM6Ly9teS1leGFtcGxlLWFwcC5maXJlYmFzZWlvLmNvbScsXG4gICAgfSxcbiAgICBmaXJlYmFzZUNsaWVudEluaXRDb25maWc6IHtcbiAgICAgIGFwaUtleTogJ0FJemFTeUNscGtEYnZZalgtZ014MDZ5eEswbVVnSUY5UzBsaUUxSScsIC8vIHJlcXVpcmVkXG4gICAgICBhdXRoRG9tYWluOiAnc2xhY2stZjFhZjEuZmlyZWJhc2VhcHAuY29tJyxcbiAgICAgIGRhdGFiYXNlVVJMOiAnaHR0cHM6Ly9zbGFjay1mMWFmMS1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20nLFxuICAgICAgcHJvamVjdElkOiAnc2xhY2stZjFhZjEnLFxuICAgICAgc3RvcmFnZUJ1Y2tldDogXCJzbGFjay1mMWFmMS5hcHBzcG90LmNvbVwiLFxuICAgICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMjA1MzA4NDAxNTEzXCIsXG4gICAgICBhcHBJZDogXCIxOjIwNTMwODQwMTUxMzp3ZWI6ZGIwZDQ3YWU3YmEwMDEzZDJiY2ZmOFwiLFxuICAgICAgbWVhc3VyZW1lbnRJZDogXCJHLTlSNjcyOVg3R0NcIlxuICAgIH0sXG4gICAgY29va2llczoge1xuICAgICAgbmFtZTogJ0V4YW1wbGVBcHAnLCAvLyByZXF1aXJlZFxuICAgICAgLy8gS2V5cyBhcmUgcmVxdWlyZWQgdW5sZXNzIHlvdSBzZXQgYHNpZ25lZGAgdG8gYGZhbHNlYC5cbiAgICAgIC8vIFRoZSBrZXlzIGNhbm5vdCBiZSBhY2Nlc3NpYmxlIG9uIHRoZSBjbGllbnQgc2lkZS5cbiAgICAgIGtleXM6IFtcbiAgICAgICAgcHJvY2Vzcy5lbnYuQ09PS0lFX1NFQ1JFVF9DVVJSRU5ULFxuICAgICAgICBwcm9jZXNzLmVudi5DT09LSUVfU0VDUkVUX1BSRVZJT1VTLFxuICAgICAgXSxcbiAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgbWF4QWdlOiAxMiAqIDYwICogNjAgKiAyNCAqIDEwMDAsIC8vIHR3ZWx2ZSBkYXlzXG4gICAgICBvdmVyd3JpdGU6IHRydWUsXG4gICAgICBwYXRoOiAnLycsXG4gICAgICBzYW1lU2l0ZTogJ3N0cmljdCcsXG4gICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX05PREVfUFJPRFVDVElPTiA9PT0gXCJ0cnVlXCIsIC8vIHNldCB0aGlzIHRvIGZhbHNlIGluIGxvY2FsIChub24tSFRUUFMpIGRldmVsb3BtZW50XG4gICAgICBzaWduZWQ6IHRydWUsXG4gICAgfSxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdEF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/firebase/initAuth.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/store */ \"./src/redux/store.ts\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebase_initAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase/initAuth */ \"./src/firebase/initAuth.ts\");\n/* harmony import */ var next_firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-firebase-auth */ \"next-firebase-auth\");\n/* harmony import */ var next_firebase_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_firebase_auth__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/madhav/Documents/Web Development/NextJS/slack-clone/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n // eslint-disable-next-line @typescript-eslint/ban-ts-comment\n// @ts-ignore\n\n\nObject(_firebase_initAuth__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"preconnect\",\n        href: \"https://fonts.gstatic.com\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        href: \"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_redux_store__WEBPACK_IMPORTED_MODULE_2__[\"wrapper\"].withRedux(Object(next_firebase_auth__WEBPACK_IMPORTED_MODULE_5__[\"withAuthUser\"])()(MyApp)));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJpbml0QXV0aCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwid3JhcHBlciIsIndpdGhSZWR1eCIsIndpdGhBdXRoVXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0NBRUE7QUFDQTs7QUFDQTtBQUVBQSxrRUFBUTs7QUFFUixTQUFTQyxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBZ0U7QUFDOUQsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQU0sV0FBRyxFQUFDLFlBQVY7QUFBdUIsWUFBSSxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQ0UsWUFBSSxFQUFDLHNHQURQO0FBRUUsV0FBRyxFQUFDO0FBRk47QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBUUUscUVBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkY7QUFBQSxrQkFERjtBQVlEOztBQUVjQyxtSEFBTyxDQUFDQyxTQUFSLENBQWtCQyx1RUFBWSxHQUFHTCxLQUFILENBQTlCLENBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi8uLi9zdHlsZXMvZ2xvYmFscy5zY3NzXCI7XG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IGluaXRBdXRoIGZyb20gXCIuLi9maXJlYmFzZS9pbml0QXV0aFwiO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IHsgd2l0aEF1dGhVc2VyIH0gZnJvbSAnbmV4dC1maXJlYmFzZS1hdXRoJ1xuXG5pbml0QXV0aCgpXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRAMTAwOzIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgod2l0aEF1dGhVc2VyKCkoTXlBcHApKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/redux/countReducer.ts":
/*!***********************************!*\
  !*** ./src/redux/countReducer.ts ***!
  \***********************************/
/*! exports provided: countActions, countReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"countActions\", function() { return countActions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"countReducer\", function() { return countReducer; });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst countSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createSlice\"])({\n  name: \"count\",\n  initialState: {\n    count: 0,\n    update: 1\n  },\n  reducers: {\n    increment(state, action) {\n      return _objectSpread(_objectSpread({}, state), {}, {\n        count: state.count + state.update\n      });\n    },\n\n    decrement(state, action) {\n      return _objectSpread(_objectSpread({}, state), {}, {\n        count: state.count - state.update\n      });\n    },\n\n    setUpdate(state, action) {\n      return _objectSpread(_objectSpread({}, state), {}, {\n        update: action.payload\n      });\n    }\n\n  }\n});\nconst {\n  actions: countActions,\n  reducer: countReducer\n} = countSlice;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvY291bnRSZWR1Y2VyLnRzP2Q0MzMiXSwibmFtZXMiOlsiY291bnRTbGljZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsImNvdW50IiwidXBkYXRlIiwicmVkdWNlcnMiLCJpbmNyZW1lbnQiLCJzdGF0ZSIsImFjdGlvbiIsImRlY3JlbWVudCIsInNldFVwZGF0ZSIsInBheWxvYWQiLCJhY3Rpb25zIiwiY291bnRBY3Rpb25zIiwicmVkdWNlciIsImNvdW50UmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQU9BLE1BQU1BLFVBQWUsR0FBR0Msb0VBQVcsQ0FBQztBQUNsQ0MsTUFBSSxFQUFFLE9BRDRCO0FBRWxDQyxjQUFZLEVBQUU7QUFDWkMsU0FBSyxFQUFFLENBREs7QUFFWkMsVUFBTSxFQUFFO0FBRkksR0FGb0I7QUFNbENDLFVBQVEsRUFBRTtBQUNSQyxhQUFTLENBQUNDLEtBQUQsRUFBb0JDLE1BQXBCLEVBQWlEO0FBQ3hELDZDQUNLRCxLQURMO0FBRUVKLGFBQUssRUFBRUksS0FBSyxDQUFDSixLQUFOLEdBQWNJLEtBQUssQ0FBQ0g7QUFGN0I7QUFJRCxLQU5POztBQU9SSyxhQUFTLENBQUNGLEtBQUQsRUFBb0JDLE1BQXBCLEVBQWlEO0FBQ3hELDZDQUNLRCxLQURMO0FBRUVKLGFBQUssRUFBRUksS0FBSyxDQUFDSixLQUFOLEdBQWNJLEtBQUssQ0FBQ0g7QUFGN0I7QUFJRCxLQVpPOztBQWFSTSxhQUFTLENBQUNILEtBQUQsRUFBb0JDLE1BQXBCLEVBQW1EO0FBQzFELDZDQUNLRCxLQURMO0FBRUVILGNBQU0sRUFBRUksTUFBTSxDQUFDRztBQUZqQjtBQUlEOztBQWxCTztBQU53QixDQUFELENBQW5DO0FBNEJBLE1BQU07QUFBRUMsU0FBTyxFQUFFQyxZQUFYO0FBQXlCQyxTQUFPLEVBQUVDO0FBQWxDLElBQW1EaEIsVUFBekQiLCJmaWxlIjoiLi9zcmMvcmVkdXgvY291bnRSZWR1Y2VyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG50eXBlIFNsaWNlU3RhdGUgPSB7XG4gIGNvdW50OiBudW1iZXI7XG4gIHVwZGF0ZTogbnVtYmVyO1xufTtcblxuY29uc3QgY291bnRTbGljZTogYW55ID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcImNvdW50XCIsXG4gIGluaXRpYWxTdGF0ZToge1xuICAgIGNvdW50OiAwLFxuICAgIHVwZGF0ZTogMSxcbiAgfSxcbiAgcmVkdWNlcnM6IHtcbiAgICBpbmNyZW1lbnQoc3RhdGU6IFNsaWNlU3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudWxsPikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvdW50OiBzdGF0ZS5jb3VudCArIHN0YXRlLnVwZGF0ZSxcbiAgICAgIH07XG4gICAgfSxcbiAgICBkZWNyZW1lbnQoc3RhdGU6IFNsaWNlU3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudWxsPikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvdW50OiBzdGF0ZS5jb3VudCAtIHN0YXRlLnVwZGF0ZSxcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZXRVcGRhdGUoc3RhdGU6IFNsaWNlU3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXBkYXRlOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jb25zdCB7IGFjdGlvbnM6IGNvdW50QWN0aW9ucywgcmVkdWNlcjogY291bnRSZWR1Y2VyIH0gPSBjb3VudFNsaWNlO1xuXG5leHBvcnQgeyBjb3VudEFjdGlvbnMsIGNvdW50UmVkdWNlciB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/countReducer.ts\n");

/***/ }),

/***/ "./src/redux/store.ts":
/*!****************************!*\
  !*** ./src/redux/store.ts ***!
  \****************************/
/*! exports provided: wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wrapper\", function() { return wrapper; });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _countReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countReducer */ \"./src/redux/countReducer.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst reducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  count: _countReducer__WEBPACK_IMPORTED_MODULE_2__[\"countReducer\"]\n}); // create your reducer\n// const rootReducer = createReducer(\n//   {},\n//   {\n//     HYDRATE: (state, action) => {\n//       // Attention! This will overwrite client state! Real apps should use proper reconciliation.\n//       // Read more about it here https://bit.ly/2ZsXbwA.\n//       const nextState = {\n//         ...state,\n//         ...action.payload,\n//       };\n//\n//       console.log(\"nexter\", nextState);\n//\n//       return nextState;\n//     },\n//   },\n// );\n\nconst rootReducer = (state, action) => {\n  if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__[\"HYDRATE\"]) {\n    // Attention! This will overwrite client state! Real apps should use proper reconciliation.\n    // Read more about it here https://bit.ly/2ZsXbwA.\n    const nextState = _objectSpread(_objectSpread({}, state), action.payload);\n\n    return nextState;\n  } else {\n    return reducer(state, action);\n  }\n};\n\nconst store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"configureStore\"])({\n  reducer: rootReducer\n}); // create a makeStore function\n\nconst makeStore = () => store; // export an assembled wrapper\n\n\nconst wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__[\"createWrapper\"])(makeStore, {\n  debug: true\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc3RvcmUudHM/MDBiYiJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiY291bnQiLCJjb3VudFJlZHVjZXIiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJuZXh0U3RhdGUiLCJwYXlsb2FkIiwic3RvcmUiLCJjb25maWd1cmVTdG9yZSIsIm1ha2VTdG9yZSIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFVQSxNQUFNQSxPQUFPLEdBQUdDLHdFQUFlLENBQUM7QUFDOUJDLE9BQUssRUFBRUMsMERBQVlBO0FBRFcsQ0FBRCxDQUEvQixDLENBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1DLFdBQVcsR0FBRyxDQUFDQyxLQUFELEVBQWFDLE1BQWIsS0FBNkI7QUFDL0MsTUFBSUEsTUFBTSxDQUFDQyxJQUFQLEtBQWdCQywwREFBcEIsRUFBNkI7QUFDM0I7QUFDQTtBQUNBLFVBQU1DLFNBQVMsbUNBQ1ZKLEtBRFUsR0FFVkMsTUFBTSxDQUFDSSxPQUZHLENBQWY7O0FBS0EsV0FBT0QsU0FBUDtBQUNELEdBVEQsTUFTTztBQUNMLFdBQU9ULE9BQU8sQ0FBQ0ssS0FBRCxFQUFRQyxNQUFSLENBQWQ7QUFDRDtBQUNGLENBYkQ7O0FBZUEsTUFBTUssS0FBSyxHQUFHQyx1RUFBYyxDQUFDO0FBQzNCWixTQUFPLEVBQUVJO0FBRGtCLENBQUQsQ0FBNUIsQyxDQUlBOztBQUNBLE1BQU1TLFNBQWMsR0FBRyxNQUFNRixLQUE3QixDLENBRUE7OztBQUNPLE1BQU1HLE9BQU8sR0FBR0Msd0VBQWEsQ0FBUUYsU0FBUixFQUFtQjtBQUFFRyxPQUFLLEVBQUU7QUFBVCxDQUFuQixDQUE3QiIsImZpbGUiOiIuL3NyYy9yZWR1eC9zdG9yZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycywgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciwgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcbmltcG9ydCB7IGNvdW50UmVkdWNlciB9IGZyb20gXCIuL2NvdW50UmVkdWNlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgaW5pdDogYW55O1xuICBjb3VudDoge1xuICAgIGNvdW50OiBudW1iZXI7XG4gICAgdXBkYXRlOiBudW1iZXI7XG4gIH07XG59XG5cbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBjb3VudDogY291bnRSZWR1Y2VyLFxufSk7XG5cbi8vIGNyZWF0ZSB5b3VyIHJlZHVjZXJcbi8vIGNvbnN0IHJvb3RSZWR1Y2VyID0gY3JlYXRlUmVkdWNlcihcbi8vICAge30sXG4vLyAgIHtcbi8vICAgICBIWURSQVRFOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuLy8gICAgICAgLy8gQXR0ZW50aW9uISBUaGlzIHdpbGwgb3ZlcndyaXRlIGNsaWVudCBzdGF0ZSEgUmVhbCBhcHBzIHNob3VsZCB1c2UgcHJvcGVyIHJlY29uY2lsaWF0aW9uLlxuLy8gICAgICAgLy8gUmVhZCBtb3JlIGFib3V0IGl0IGhlcmUgaHR0cHM6Ly9iaXQubHkvMlpzWGJ3QS5cbi8vICAgICAgIGNvbnN0IG5leHRTdGF0ZSA9IHtcbi8vICAgICAgICAgLi4uc3RhdGUsXG4vLyAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxuLy8gICAgICAgfTtcbi8vXG4vLyAgICAgICBjb25zb2xlLmxvZyhcIm5leHRlclwiLCBuZXh0U3RhdGUpO1xuLy9cbi8vICAgICAgIHJldHVybiBuZXh0U3RhdGU7XG4vLyAgICAgfSxcbi8vICAgfSxcbi8vICk7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlOiBhbnksIGFjdGlvbjogYW55KSA9PiB7XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gSFlEUkFURSkge1xuICAgIC8vIEF0dGVudGlvbiEgVGhpcyB3aWxsIG92ZXJ3cml0ZSBjbGllbnQgc3RhdGUhIFJlYWwgYXBwcyBzaG91bGQgdXNlIHByb3BlciByZWNvbmNpbGlhdGlvbi5cbiAgICAvLyBSZWFkIG1vcmUgYWJvdXQgaXQgaGVyZSBodHRwczovL2JpdC5seS8yWnNYYndBLlxuICAgIGNvbnN0IG5leHRTdGF0ZSA9IHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXG4gICAgfTtcblxuICAgIHJldHVybiBuZXh0U3RhdGU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIH1cbn07XG5cbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xuICByZWR1Y2VyOiByb290UmVkdWNlcixcbn0pO1xuXG4vLyBjcmVhdGUgYSBtYWtlU3RvcmUgZnVuY3Rpb25cbmNvbnN0IG1ha2VTdG9yZTogYW55ID0gKCkgPT4gc3RvcmU7XG5cbi8vIGV4cG9ydCBhbiBhc3NlbWJsZWQgd3JhcHBlclxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyPFN0YXRlPihtYWtlU3RvcmUsIHsgZGVidWc6IHRydWUgfSk7XG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IHR5cGVvZiBzdG9yZS5kaXNwYXRjaDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/redux/store.ts\n");

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

/***/ "next-firebase-auth":
/*!*************************************!*\
  !*** external "next-firebase-auth" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-firebase-auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWZpcmViYXNlLWF1dGhcIj9jMjVjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtZmlyZWJhc2UtYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtZmlyZWJhc2UtYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-firebase-auth\n");

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });
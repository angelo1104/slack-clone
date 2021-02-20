module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/api/auth/logout.ts");
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

/***/ "./src/pages/api/auth/logout.ts":
/*!**************************************!*\
  !*** ./src/pages/api/auth/logout.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-firebase-auth */ \"next-firebase-auth\");\n/* harmony import */ var next_firebase_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_firebase_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase_initAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../firebase/initAuth */ \"./src/firebase/initAuth.ts\");\n// eslint-disable-next-line @typescript-eslint/ban-ts-comment\n// @ts-ignore\n\n\nObject(_firebase_initAuth__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nconst handler = async (req, res) => {\n  try {\n    await Object(next_firebase_auth__WEBPACK_IMPORTED_MODULE_0__[\"unsetAuthCookies\"])(req, res);\n    res.status(200).json({\n      success: true\n    });\n  } catch (e) {\n    res.status(500).json({\n      error: 'Unexpected error.'\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL2F1dGgvbG9nb3V0LnRzPzMzMzEiXSwibmFtZXMiOlsiaW5pdEF1dGgiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwidW5zZXRBdXRoQ29va2llcyIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZSIsImVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0FBLGtFQUFROztBQUVSLE1BQU1DLE9BQU8sR0FBRyxPQUFPQyxHQUFQLEVBQTRCQyxHQUE1QixLQUFvRDtBQUNsRSxNQUFJO0FBQ0YsVUFBTUMsMkVBQWdCLENBQUNGLEdBQUQsRUFBTUMsR0FBTixDQUF0QjtBQUNBQSxPQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUFyQjtBQUNELEdBSEQsQ0FHRSxPQUFPQyxDQUFQLEVBQVU7QUFDVkwsT0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUcsV0FBSyxFQUFFO0FBQVQsS0FBckI7QUFDRDtBQUNGLENBUEQ7O0FBU2VSLHNFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2FwaS9hdXRoL2xvZ291dC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCB7IHVuc2V0QXV0aENvb2tpZXMgfSBmcm9tICduZXh0LWZpcmViYXNlLWF1dGgnXG5pbXBvcnQgaW5pdEF1dGggZnJvbSBcIi4uLy4uLy4uL2ZpcmViYXNlL2luaXRBdXRoXCI7XG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcblxuaW5pdEF1dGgoKVxuXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczpOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB1bnNldEF1dGhDb29raWVzKHJlcSwgcmVzKVxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSB9KVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ1VuZXhwZWN0ZWQgZXJyb3IuJyB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/auth/logout.ts\n");

/***/ }),

/***/ "next-firebase-auth":
/*!*************************************!*\
  !*** external "next-firebase-auth" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-firebase-auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWZpcmViYXNlLWF1dGhcIj9jMjVjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtZmlyZWJhc2UtYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtZmlyZWJhc2UtYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-firebase-auth\n");

/***/ })

/******/ });
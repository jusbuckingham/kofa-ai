'use strict'
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
;(() => {
  var exports = {}
  exports.id = 'pages/api/auth/session'
  exports.ids = ['pages/api/auth/session']
  exports.modules = {
    /***/ '@prisma/client':
      /*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
      /***/ (module) => {
        module.exports = require('@prisma/client')

        /***/
      },

    /***/ 'next-auth':
      /*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
      /***/ (module) => {
        module.exports = require('next-auth')

        /***/
      },

    /***/ 'next-auth/next':
      /*!*********************************!*\
  !*** external "next-auth/next" ***!
  \*********************************/
      /***/ (module) => {
        module.exports = require('next-auth/next')

        /***/
      },

    /***/ 'next-auth/providers/credentials':
      /*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
      /***/ (module) => {
        module.exports = require('next-auth/providers/credentials')

        /***/
      },

    /***/ 'next/dist/compiled/next-server/pages-api.runtime.dev.js':
      /*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
      /***/ (module) => {
        module.exports = require('next/dist/compiled/next-server/pages-api.runtime.dev.js')

        /***/
      },

    /***/ bcryptjs:
      /*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
      /***/ (module) => {
        module.exports = import('bcryptjs')

        /***/
      },

    /***/ '(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fsession&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2Fauth%2Fsession.ts&middlewareConfigBase64=e30%3D!':
      /*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fsession&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2Fauth%2Fsession.ts&middlewareConfigBase64=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages-api/module.compiled */ "(api)/./node_modules/next/dist/server/route-modules/pages-api/module.compiled.js");\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ "(api)/./node_modules/next/dist/server/route-kind.js");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ "(api)/./node_modules/next/dist/build/templates/helpers.js");\n/* harmony import */ var _src_pages_api_auth_session_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/pages/api/auth/session.ts */ "(api)/./src/pages/api/auth/session.ts");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_pages_api_auth_session_ts__WEBPACK_IMPORTED_MODULE_3__]);\n_src_pages_api_auth_session_ts__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_auth_session_ts__WEBPACK_IMPORTED_MODULE_3__, \'default\'));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_auth_session_ts__WEBPACK_IMPORTED_MODULE_3__, \'config\');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: "/api/auth/session",\n        pathname: "/api/auth/session",\n        // The following aren\'t used in production.\n        bundlePath: \'\',\n        filename: \'\'\n    },\n    userland: _src_pages_api_auth_session_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmF1dGglMkZzZXNzaW9uJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGc3JjJTJGcGFnZXMlMkZhcGklMkZhdXRoJTJGc2Vzc2lvbi50cyZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDRTtBQUMxRDtBQUM0RDtBQUM1RDtBQUNBLGlFQUFlLHdFQUFLLENBQUMsMkRBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sZUFBZSx3RUFBSyxDQUFDLDJEQUFRO0FBQ3BDO0FBQ08sd0JBQXdCLHlHQUFtQjtBQUNsRDtBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCxxQyIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzQVBJUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vc3JjL3BhZ2VzL2FwaS9hdXRoL3Nlc3Npb24udHNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgJ2RlZmF1bHQnKTtcbi8vIFJlLWV4cG9ydCBjb25maWcuXG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsICdjb25maWcnKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzQVBJUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTX0FQSSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvc2Vzc2lvblwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvc2Vzc2lvblwiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6ICcnLFxuICAgICAgICBmaWxlbmFtZTogJydcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMtYXBpLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fsession&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2Fauth%2Fsession.ts&middlewareConfigBase64=e30%3D!\n'
        )

        /***/
      },

    /***/ '(api)/./src/pages/api/auth/[...nextauth].ts':
      /*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ "next-auth");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ "next-auth/providers/credentials");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([bcryptjs__WEBPACK_IMPORTED_MODULE_3__]);\nbcryptjs__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n// ✅ Prevent multiple Prisma client instances in dev\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_2__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n// ✅ Fix missing `authOptions` export\nconst authOptions = {\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            name: "Credentials",\n            credentials: {\n                email: {\n                    label: "Email",\n                    type: "text"\n                },\n                password: {\n                    label: "Password",\n                    type: "password"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    throw new Error("Missing email or password");\n                }\n                // ✅ Ensure user exists & check password\n                const user = await prisma.user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user || !await bcryptjs__WEBPACK_IMPORTED_MODULE_3__["default"].compare(credentials.password, user.password)) {\n                    throw new Error("Invalid credentials");\n                }\n                return {\n                    id: user.id,\n                    email: user.email,\n                    role: user.role || "user"\n                };\n            }\n        })\n    ],\n    pages: {\n        signIn: "/auth/login"\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                const u = user; // ✅ Ensure `role` exists\n                token.id = u.id;\n                token.role = u.role;\n                token.email = u.email;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            session.user = {\n                id: token.id,\n                email: token.email,\n                role: token.role,\n                name: session.user?.name || null,\n                image: session.user?.image || null\n            };\n            return session;\n        }\n    },\n    session: {\n        strategy: "jwt"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n// ✅ Correct export format\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWtFO0FBQ0E7QUFDQTtBQUNwQztBQUU5QixvREFBb0Q7QUFDcEQsTUFBTUksa0JBQWtCQztBQUNqQixNQUFNQyxTQUFTRixnQkFBZ0JFLE1BQU0sSUFBSSxJQUFJSix3REFBWUEsR0FBRztBQUNuRSxJQUFJSyxJQUFxQyxFQUFFSCxnQkFBZ0JFLE1BQU0sR0FBR0E7QUF3QnBFLHFDQUFxQztBQUM5QixNQUFNRSxjQUEyQjtJQUN0Q0MsV0FBVztRQUNUUixzRUFBbUJBLENBQUM7WUFDbEJTLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtnQkFBTztnQkFDdENDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRSxXQUFVTCxXQUFXO2dCQUN6QixJQUFJLENBQUNBLGFBQWFDLFNBQVMsQ0FBQ0QsYUFBYUksVUFBVTtvQkFDakQsTUFBTSxJQUFJRSxNQUFNO2dCQUNsQjtnQkFFQSx3Q0FBd0M7Z0JBQ3hDLE1BQU1DLE9BQU8sTUFBTVosT0FBT1ksSUFBSSxDQUFDQyxVQUFVLENBQUM7b0JBQ3hDQyxPQUFPO3dCQUFFUixPQUFPRCxZQUFZQyxLQUFLO29CQUFDO2dCQUNwQztnQkFFQSxJQUFJLENBQUNNLFFBQVEsQ0FBRSxNQUFNZix3REFBYyxDQUFDUSxZQUFZSSxRQUFRLEVBQUVHLEtBQUtILFFBQVEsR0FBSTtvQkFDekUsTUFBTSxJQUFJRSxNQUFNO2dCQUNsQjtnQkFFQSxPQUFPO29CQUNMSyxJQUFJSixLQUFLSSxFQUFFO29CQUNYVixPQUFPTSxLQUFLTixLQUFLO29CQUNqQlcsTUFBTSxLQUFxQkEsSUFBSSxJQUFJO2dCQUNyQztZQUNGO1FBQ0Y7S0FDRDtJQUNEQyxPQUFPO1FBQ0xDLFFBQVE7SUFDVjtJQUNBQyxXQUFXO1FBQ1QsTUFBTUMsS0FBSSxFQUFFQyxLQUFLLEVBQUVWLElBQUksRUFBRTtZQUN2QixJQUFJQSxNQUFNO2dCQUNSLE1BQU1XLElBQUlYLE1BQW9CLHlCQUF5QjtnQkFDdkRVLE1BQU1OLEVBQUUsR0FBR08sRUFBRVAsRUFBRTtnQkFDZk0sTUFBTUwsSUFBSSxHQUFHTSxFQUFFTixJQUFJO2dCQUNuQkssTUFBTWhCLEtBQUssR0FBR2lCLEVBQUVqQixLQUFLO1lBQ3ZCO1lBQ0EsT0FBT2dCO1FBQ1Q7UUFDQSxNQUFNRSxTQUFRLEVBQUVBLE9BQU8sRUFBRUYsS0FBSyxFQUFFO1lBQzlCRSxRQUFRWixJQUFJLEdBQUc7Z0JBQ2JJLElBQUlNLE1BQU1OLEVBQUU7Z0JBQ1pWLE9BQU9nQixNQUFNaEIsS0FBSztnQkFDbEJXLE1BQU1LLE1BQU1MLElBQUk7Z0JBQ2hCYixNQUFNb0IsUUFBUVosSUFBSSxFQUFFUixRQUFRO2dCQUM1QnFCLE9BQU9ELFFBQVFaLElBQUksRUFBRWEsU0FBUztZQUNoQztZQUNBLE9BQU9EO1FBQ1Q7SUFDRjtJQUNBQSxTQUFTO1FBQ1BFLFVBQVU7SUFDWjtJQUNBQyxRQUFRMUIsUUFBUTJCLEdBQUcsQ0FBQ0MsZUFBZTtBQUNyQyxFQUFFO0FBRUYsMEJBQTBCO0FBQzFCLGlFQUFlbkMsZ0RBQVFBLENBQUNRLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXNidWNraW5naGFtL0RvY3VtZW50cy9qdXMtZGV2L3Byb2plY3RzL2tvZmEtYWkvc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoLCB7IEF1dGhPcHRpb25zLCBEZWZhdWx0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XG5pbXBvcnQgeyBQcmlzbWFDbGllbnQsIFVzZXIgYXMgUHJpc21hVXNlciB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcblxuLy8g4pyFIFByZXZlbnQgbXVsdGlwbGUgUHJpc21hIGNsaWVudCBpbnN0YW5jZXMgaW4gZGV2XG5jb25zdCBnbG9iYWxGb3JQcmlzbWEgPSBnbG9iYWwgYXMgdW5rbm93biBhcyB7IHByaXNtYT86IFByaXNtYUNsaWVudCB9O1xuZXhwb3J0IGNvbnN0IHByaXNtYSA9IGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPz8gbmV3IFByaXNtYUNsaWVudCgpO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYTtcblxuLy8g4pyFIERlZmluZSBDdXN0b21Vc2VyIHdpdGggcm9sZVxuaW50ZXJmYWNlIEN1c3RvbVVzZXIgZXh0ZW5kcyBQcmlzbWFVc2VyIHtcbiAgcm9sZTogc3RyaW5nO1xufVxuXG4vLyDinIUgRXh0ZW5kIE5leHRBdXRoIHR5cGVzXG5kZWNsYXJlIG1vZHVsZSBcIm5leHQtYXV0aFwiIHtcbiAgaW50ZXJmYWNlIFNlc3Npb24ge1xuICAgIHVzZXI6IHtcbiAgICAgIGlkOiBzdHJpbmc7XG4gICAgICBlbWFpbDogc3RyaW5nO1xuICAgICAgcm9sZTogc3RyaW5nO1xuICAgIH0gJiBEZWZhdWx0U2Vzc2lvbltcInVzZXJcIl07XG4gIH1cblxuICBpbnRlcmZhY2UgSldUIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgcm9sZTogc3RyaW5nO1xuICB9XG59XG5cbi8vIOKchSBGaXggbWlzc2luZyBgYXV0aE9wdGlvbnNgIGV4cG9ydFxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBBdXRoT3B0aW9ucyA9IHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBlbWFpbDogeyBsYWJlbDogXCJFbWFpbFwiLCB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfSxcbiAgICAgIH0sXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgaWYgKCFjcmVkZW50aWFscz8uZW1haWwgfHwgIWNyZWRlbnRpYWxzPy5wYXNzd29yZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgZW1haWwgb3IgcGFzc3dvcmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDinIUgRW5zdXJlIHVzZXIgZXhpc3RzICYgY2hlY2sgcGFzc3dvcmRcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgIHdoZXJlOiB7IGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXVzZXIgfHwgIShhd2FpdCBiY3J5cHQuY29tcGFyZShjcmVkZW50aWFscy5wYXNzd29yZCwgdXNlci5wYXNzd29yZCkpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjcmVkZW50aWFsc1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgcm9sZTogKHVzZXIgYXMgQ3VzdG9tVXNlcikucm9sZSB8fCBcInVzZXJcIiwgLy8g4pyFIEVuc3VyZSByb2xlIGlzIHByZXNlbnRcbiAgICAgICAgfSBhcyBDdXN0b21Vc2VyO1xuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46IFwiL2F1dGgvbG9naW5cIixcbiAgfSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgY29uc3QgdSA9IHVzZXIgYXMgQ3VzdG9tVXNlcjsgLy8g4pyFIEVuc3VyZSBgcm9sZWAgZXhpc3RzXG4gICAgICAgIHRva2VuLmlkID0gdS5pZDtcbiAgICAgICAgdG9rZW4ucm9sZSA9IHUucm9sZTtcbiAgICAgICAgdG9rZW4uZW1haWwgPSB1LmVtYWlsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgIHNlc3Npb24udXNlciA9IHtcbiAgICAgICAgaWQ6IHRva2VuLmlkIGFzIHN0cmluZyxcbiAgICAgICAgZW1haWw6IHRva2VuLmVtYWlsIGFzIHN0cmluZyxcbiAgICAgICAgcm9sZTogdG9rZW4ucm9sZSBhcyBzdHJpbmcsXG4gICAgICAgIG5hbWU6IHNlc3Npb24udXNlcj8ubmFtZSB8fCBudWxsLFxuICAgICAgICBpbWFnZTogc2Vzc2lvbi51c2VyPy5pbWFnZSB8fCBudWxsLFxuICAgICAgfTtcbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gIH0sXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogXCJqd3RcIixcbiAgfSxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG59O1xuXG4vLyDinIUgQ29ycmVjdCBleHBvcnQgZm9ybWF0XG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucyk7Il0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsIlByaXNtYUNsaWVudCIsImJjcnlwdCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbCIsInByaXNtYSIsInByb2Nlc3MiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJFcnJvciIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJjb21wYXJlIiwiaWQiLCJyb2xlIiwicGFnZXMiLCJzaWduSW4iLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInUiLCJzZXNzaW9uIiwiaW1hZ2UiLCJzdHJhdGVneSIsInNlY3JldCIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n'
        )

        /***/
      },

    /***/ '(api)/./src/pages/api/auth/session.ts':
      /*!***************************************!*\
  !*** ./src/pages/api/auth/session.ts ***!
  \***************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ "next-auth/next");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nextauth___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./[...nextauth] */ "(api)/./src/pages/api/auth/[...nextauth].ts");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_nextauth___WEBPACK_IMPORTED_MODULE_1__]);\n_nextauth___WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nasync function handler(req, res) {\n    try {\n        const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(req, res, _nextauth___WEBPACK_IMPORTED_MODULE_1__.authOptions);\n        if (!session) {\n            return res.status(401).json({\n                error: "Unauthorized"\n            });\n        }\n        res.status(200).json({\n            session\n        });\n    } catch (error) {\n        console.error("🔴 Error retrieving session:", error);\n        res.status(500).json({\n            error: "Internal Server Error"\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvc2Vzc2lvbi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ2tEO0FBQ0o7QUFFL0IsZUFBZUUsUUFBUUMsR0FBbUIsRUFBRUMsR0FBb0I7SUFDN0UsSUFBSTtRQUNGLE1BQU1DLFVBQVUsTUFBTUwsZ0VBQWdCQSxDQUFDRyxLQUFLQyxLQUFLSCxtREFBV0E7UUFFNUQsSUFBSSxDQUFDSSxTQUFTO1lBQ1osT0FBT0QsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFlO1FBQ3REO1FBRUFKLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUY7UUFBUTtJQUNqQyxFQUFFLE9BQU9HLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLGdDQUFnQ0E7UUFDOUNKLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUF3QjtJQUN4RDtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvanVzYnVja2luZ2hhbS9Eb2N1bWVudHMvanVzLWRldi9wcm9qZWN0cy9rb2ZhLWFpL3NyYy9wYWdlcy9hcGkvYXV0aC9zZXNzaW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvbmV4dFwiO1xuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiLi9bLi4ubmV4dGF1dGhdXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihyZXEsIHJlcywgYXV0aE9wdGlvbnMpO1xuXG4gICAgaWYgKCFzZXNzaW9uKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBlcnJvcjogXCJVbmF1dGhvcml6ZWRcIiB9KTtcbiAgICB9XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHNlc3Npb24gfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIvCflLQgRXJyb3IgcmV0cmlldmluZyBzZXNzaW9uOlwiLCBlcnJvcik7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIiB9KTtcbiAgfVxufSJdLCJuYW1lcyI6WyJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic2Vzc2lvbiIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/session.ts\n'
        )

        /***/
      },
  }
  // load runtime
  var __webpack_require__ = require('../../../webpack-api-runtime.js')
  __webpack_require__.C(exports)
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId))
  var __webpack_exports__ = __webpack_require__.X(
    0,
    ['vendor-chunks/next'],
    () =>
      __webpack_exec__(
        '(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fsession&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2Fauth%2Fsession.ts&middlewareConfigBase64=e30%3D!'
      )
  )
  module.exports = __webpack_exports__
})()

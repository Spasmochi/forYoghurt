webpackHotUpdate("foryoghurt",{

/***/ "./packages/mars-theme/src/components/nav.js":
/*!***************************************************!*\
  !*** ./packages/mars-theme/src/components/nav.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link */ \"./packages/mars-theme/src/components/link.js\");\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logo */ \"./packages/mars-theme/src/components/logo.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}/**\n * Navigation Component\n *\n * It renders the navigation links\n */var Nav=(_ref)=>{var{state}=_ref;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(NavContainer,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_logo__WEBPACK_IMPORTED_MODULE_4__[\"default\"],null),state.theme.menu.map((_ref2)=>{var[name,link]=_ref2;// Check if the link matched the current page url\nvar isCurrentPage=state.router.link===link;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(NavItem,{key:name},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{link:link,\"aria-current\":isCurrentPage?'page':undefined},name));}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(Button,null,\"GET A DEMO\"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"img\",{src:\"https://testingeverything752826403.files.wordpress.com/2020/12/search.png\"}));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(Nav));var NavContainer=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"nav\",{target:\"e1bkzu9n0\",label:\"NavContainer\"})( false?undefined:{name:\"mppv2c\",styles:\"z-index:2;list-style:none;display:flex;width:100%;max-width:1373.99px;box-sizing:border-box;align-items:center;justify-content:space-between;padding:0 24px;margin:0;margin-top:22px;overflow-x:auto;@media screen and (max-width:1024px){display:none;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW1tY211cnRyaWUvUmVwb3MvZm9yWW9naHVydC9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL25hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQytCIiwiZmlsZSI6Ii9Vc2Vycy9zYW1tY211cnRyaWUvUmVwb3MvZm9yWW9naHVydC9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL25hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gJ2Zyb250aXR5J1xuaW1wb3J0IExpbmsgZnJvbSAnLi9saW5rJ1xuaW1wb3J0IExvZ28gZnJvbSAnLi9sb2dvJ1xuXG4vKipcbiAqIE5hdmlnYXRpb24gQ29tcG9uZW50XG4gKlxuICogSXQgcmVuZGVycyB0aGUgbmF2aWdhdGlvbiBsaW5rc1xuICovXG5jb25zdCBOYXYgPSAoeyBzdGF0ZSB9KSA9PiAoXG4gIDxOYXZDb250YWluZXI+XG4gICAgPExvZ28gLz5cbiAgICB7c3RhdGUudGhlbWUubWVudS5tYXAoKFtuYW1lLCBsaW5rXSkgPT4ge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGxpbmsgbWF0Y2hlZCB0aGUgY3VycmVudCBwYWdlIHVybFxuICAgICAgY29uc3QgaXNDdXJyZW50UGFnZSA9IHN0YXRlLnJvdXRlci5saW5rID09PSBsaW5rXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TmF2SXRlbSBrZXk9e25hbWV9PlxuICAgICAgICAgIHsvKiBJZiBsaW5rIHVybCBpcyB0aGUgY3VycmVudCBwYWdlLCBhZGQgYGFyaWEtY3VycmVudGAgZm9yIGExMXkgKi99XG4gICAgICAgICAgPExpbmsgbGluaz17bGlua30gYXJpYS1jdXJyZW50PXtpc0N1cnJlbnRQYWdlID8gJ3BhZ2UnIDogdW5kZWZpbmVkfT5cbiAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgKVxuICAgIH0pfVxuICAgIDxCdXR0b24+R0VUIEEgREVNTzwvQnV0dG9uPlxuICAgIDxpbWcgc3JjPSdodHRwczovL3Rlc3RpbmdldmVyeXRoaW5nNzUyODI2NDAzLmZpbGVzLndvcmRwcmVzcy5jb20vMjAyMC8xMi9zZWFyY2gucG5nJyAvPlxuICA8L05hdkNvbnRhaW5lcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChOYXYpXG5cbmNvbnN0IE5hdkNvbnRhaW5lciA9IHN0eWxlZC5uYXZgXG4gIHotaW5kZXg6IDI7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEzNzMuOTlweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwIDI0cHg7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogMjJweDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYFxuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmQzYmY0O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gXG5cbmNvbnN0IE5hdkl0ZW0gPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMTZweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gICYgPiBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgICAvKiBVc2UgZm9yIHNlbWFudGljIGFwcHJvYWNoIHRvIHN0eWxlIHRoZSBjdXJyZW50IGxpbmsgKi9cbiAgfVxuXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgIH1cbiAgfVxuYFxuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var Button=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"button\",{target:\"e1bkzu9n1\",label:\"Button\"})( false?undefined:{name:\"k1y318\",styles:\"background-color:#6d3bf4;color:white;font-weight:normal;padding-top:1rem;padding-bottom:1rem;padding-left:1.5rem;padding-right:1.5rem;outline:none;border:none;border-radius:0;cursor:pointer;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW1tY211cnRyaWUvUmVwb3MvZm9yWW9naHVydC9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL25hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRDRCIiwiZmlsZSI6Ii9Vc2Vycy9zYW1tY211cnRyaWUvUmVwb3MvZm9yWW9naHVydC9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL25hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gJ2Zyb250aXR5J1xuaW1wb3J0IExpbmsgZnJvbSAnLi9saW5rJ1xuaW1wb3J0IExvZ28gZnJvbSAnLi9sb2dvJ1xuXG4vKipcbiAqIE5hdmlnYXRpb24gQ29tcG9uZW50XG4gKlxuICogSXQgcmVuZGVycyB0aGUgbmF2aWdhdGlvbiBsaW5rc1xuICovXG5jb25zdCBOYXYgPSAoeyBzdGF0ZSB9KSA9PiAoXG4gIDxOYXZDb250YWluZXI+XG4gICAgPExvZ28gLz5cbiAgICB7c3RhdGUudGhlbWUubWVudS5tYXAoKFtuYW1lLCBsaW5rXSkgPT4ge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGxpbmsgbWF0Y2hlZCB0aGUgY3VycmVudCBwYWdlIHVybFxuICAgICAgY29uc3QgaXNDdXJyZW50UGFnZSA9IHN0YXRlLnJvdXRlci5saW5rID09PSBsaW5rXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TmF2SXRlbSBrZXk9e25hbWV9PlxuICAgICAgICAgIHsvKiBJZiBsaW5rIHVybCBpcyB0aGUgY3VycmVudCBwYWdlLCBhZGQgYGFyaWEtY3VycmVudGAgZm9yIGExMXkgKi99XG4gICAgICAgICAgPExpbmsgbGluaz17bGlua30gYXJpYS1jdXJyZW50PXtpc0N1cnJlbnRQYWdlID8gJ3BhZ2UnIDogdW5kZWZpbmVkfT5cbiAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgKVxuICAgIH0pfVxuICAgIDxCdXR0b24+R0VUIEEgREVNTzwvQnV0dG9uPlxuICAgIDxpbWcgc3JjPSdodHRwczovL3Rlc3RpbmdldmVyeXRoaW5nNzUyODI2NDAzLmZpbGVzLndvcmRwcmVzcy5jb20vMjAyMC8xMi9zZWFyY2gucG5nJyAvPlxuICA8L05hdkNvbnRhaW5lcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChOYXYpXG5cbmNvbnN0IE5hdkNvbnRhaW5lciA9IHN0eWxlZC5uYXZgXG4gIHotaW5kZXg6IDI7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEzNzMuOTlweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwIDI0cHg7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogMjJweDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYFxuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmQzYmY0O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gXG5cbmNvbnN0IE5hdkl0ZW0gPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMTZweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gICYgPiBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgICAvKiBVc2UgZm9yIHNlbWFudGljIGFwcHJvYWNoIHRvIHN0eWxlIHRoZSBjdXJyZW50IGxpbmsgKi9cbiAgfVxuXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgIH1cbiAgfVxuYFxuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var NavItem=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"e1bkzu9n2\",label:\"NavItem\"})( false?undefined:{name:\"pjey1o\",styles:\"padding:0;margin:0 16px;color:#fff;font-size:0.9em;box-sizing:border-box;flex-shrink:0;& > a{display:inline-block;line-height:2em;}&:first-of-type{margin-left:0;}&:last-of-type{margin-right:0;&:after{content:'';display:inline-block;width:24px;}}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW1tY211cnRyaWUvUmVwb3MvZm9yWW9naHVydC9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL25hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRTBCIiwiZmlsZSI6Ii9Vc2Vycy9zYW1tY211cnRyaWUvUmVwb3MvZm9yWW9naHVydC9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL25hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gJ2Zyb250aXR5J1xuaW1wb3J0IExpbmsgZnJvbSAnLi9saW5rJ1xuaW1wb3J0IExvZ28gZnJvbSAnLi9sb2dvJ1xuXG4vKipcbiAqIE5hdmlnYXRpb24gQ29tcG9uZW50XG4gKlxuICogSXQgcmVuZGVycyB0aGUgbmF2aWdhdGlvbiBsaW5rc1xuICovXG5jb25zdCBOYXYgPSAoeyBzdGF0ZSB9KSA9PiAoXG4gIDxOYXZDb250YWluZXI+XG4gICAgPExvZ28gLz5cbiAgICB7c3RhdGUudGhlbWUubWVudS5tYXAoKFtuYW1lLCBsaW5rXSkgPT4ge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGxpbmsgbWF0Y2hlZCB0aGUgY3VycmVudCBwYWdlIHVybFxuICAgICAgY29uc3QgaXNDdXJyZW50UGFnZSA9IHN0YXRlLnJvdXRlci5saW5rID09PSBsaW5rXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TmF2SXRlbSBrZXk9e25hbWV9PlxuICAgICAgICAgIHsvKiBJZiBsaW5rIHVybCBpcyB0aGUgY3VycmVudCBwYWdlLCBhZGQgYGFyaWEtY3VycmVudGAgZm9yIGExMXkgKi99XG4gICAgICAgICAgPExpbmsgbGluaz17bGlua30gYXJpYS1jdXJyZW50PXtpc0N1cnJlbnRQYWdlID8gJ3BhZ2UnIDogdW5kZWZpbmVkfT5cbiAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgKVxuICAgIH0pfVxuICAgIDxCdXR0b24+R0VUIEEgREVNTzwvQnV0dG9uPlxuICAgIDxpbWcgc3JjPSdodHRwczovL3Rlc3RpbmdldmVyeXRoaW5nNzUyODI2NDAzLmZpbGVzLndvcmRwcmVzcy5jb20vMjAyMC8xMi9zZWFyY2gucG5nJyAvPlxuICA8L05hdkNvbnRhaW5lcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChOYXYpXG5cbmNvbnN0IE5hdkNvbnRhaW5lciA9IHN0eWxlZC5uYXZgXG4gIHotaW5kZXg6IDI7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEzNzMuOTlweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwIDI0cHg7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogMjJweDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYFxuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmQzYmY0O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gXG5cbmNvbnN0IE5hdkl0ZW0gPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMTZweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gICYgPiBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgICAvKiBVc2UgZm9yIHNlbWFudGljIGFwcHJvYWNoIHRvIHN0eWxlIHRoZSBjdXJyZW50IGxpbmsgKi9cbiAgfVxuXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgIH1cbiAgfVxuYFxuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL25hdi5qcz8zZjM3Il0sIm5hbWVzIjpbIk5hdiIsInN0YXRlIiwidGhlbWUiLCJtZW51IiwibWFwIiwibmFtZSIsImxpbmsiLCJpc0N1cnJlbnRQYWdlIiwicm91dGVyIiwidW5kZWZpbmVkIiwiY29ubmVjdCIsIk5hdkNvbnRhaW5lciIsIkJ1dHRvbiIsIk5hdkl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztxUkFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsR0FBTUEsSUFBRyxDQUFHLFlBQUMsQ0FBRUMsS0FBRixDQUFELFlBQ1YsMkRBQUMsWUFBRCxNQUNFLDBEQUFDLDZDQUFELE1BREYsQ0FFR0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLElBQVosQ0FBaUJDLEdBQWpCLENBQXFCLFNBQWtCLElBQWpCLENBQUNDLElBQUQsQ0FBT0MsSUFBUCxDQUFpQixPQUN0QztBQUNBLEdBQU1DLGNBQWEsQ0FBR04sS0FBSyxDQUFDTyxNQUFOLENBQWFGLElBQWIsR0FBc0JBLElBQTVDLENBQ0EsTUFDRSwyREFBQyxPQUFELEVBQVMsR0FBRyxDQUFFRCxJQUFkLEVBRUUsMERBQUMsNkNBQUQsRUFBTSxJQUFJLENBQUVDLElBQVosQ0FBa0IsZUFBY0MsYUFBYSxDQUFHLE1BQUgsQ0FBWUUsU0FBekQsRUFDR0osSUFESCxDQUZGLENBREYsQ0FRRCxDQVhBLENBRkgsQ0FjRSwwREFBQyxNQUFELG1CQWRGLENBZUUsaUVBQUssR0FBRyxDQUFDLDJFQUFULEVBZkYsQ0FEVSxFQUFaLENBb0JlSyx1SEFBTyxDQUFDVixHQUFELENBQXRCLEVBRUEsR0FBTVcsYUFBWSwwOEdBQWxCLENBa0JBLEdBQU1DLE9BQU0sNjRHQUFaLENBY0EsR0FBTUMsUUFBTyxrOEdBQWIiLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL25hdi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gJ2Zyb250aXR5J1xuaW1wb3J0IExpbmsgZnJvbSAnLi9saW5rJ1xuaW1wb3J0IExvZ28gZnJvbSAnLi9sb2dvJ1xuXG4vKipcbiAqIE5hdmlnYXRpb24gQ29tcG9uZW50XG4gKlxuICogSXQgcmVuZGVycyB0aGUgbmF2aWdhdGlvbiBsaW5rc1xuICovXG5jb25zdCBOYXYgPSAoeyBzdGF0ZSB9KSA9PiAoXG4gIDxOYXZDb250YWluZXI+XG4gICAgPExvZ28gLz5cbiAgICB7c3RhdGUudGhlbWUubWVudS5tYXAoKFtuYW1lLCBsaW5rXSkgPT4ge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGxpbmsgbWF0Y2hlZCB0aGUgY3VycmVudCBwYWdlIHVybFxuICAgICAgY29uc3QgaXNDdXJyZW50UGFnZSA9IHN0YXRlLnJvdXRlci5saW5rID09PSBsaW5rXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TmF2SXRlbSBrZXk9e25hbWV9PlxuICAgICAgICAgIHsvKiBJZiBsaW5rIHVybCBpcyB0aGUgY3VycmVudCBwYWdlLCBhZGQgYGFyaWEtY3VycmVudGAgZm9yIGExMXkgKi99XG4gICAgICAgICAgPExpbmsgbGluaz17bGlua30gYXJpYS1jdXJyZW50PXtpc0N1cnJlbnRQYWdlID8gJ3BhZ2UnIDogdW5kZWZpbmVkfT5cbiAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgKVxuICAgIH0pfVxuICAgIDxCdXR0b24+R0VUIEEgREVNTzwvQnV0dG9uPlxuICAgIDxpbWcgc3JjPSdodHRwczovL3Rlc3RpbmdldmVyeXRoaW5nNzUyODI2NDAzLmZpbGVzLndvcmRwcmVzcy5jb20vMjAyMC8xMi9zZWFyY2gucG5nJyAvPlxuICA8L05hdkNvbnRhaW5lcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChOYXYpXG5cbmNvbnN0IE5hdkNvbnRhaW5lciA9IHN0eWxlZC5uYXZgXG4gIHotaW5kZXg6IDI7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEzNzMuOTlweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwIDI0cHg7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogMjJweDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYFxuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmQzYmY0O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gXG5cbmNvbnN0IE5hdkl0ZW0gPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMTZweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gICYgPiBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgICAvKiBVc2UgZm9yIHNlbWFudGljIGFwcHJvYWNoIHRvIHN0eWxlIHRoZSBjdXJyZW50IGxpbmsgKi9cbiAgfVxuXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgIH1cbiAgfVxuYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/nav.js\n");

/***/ })

})
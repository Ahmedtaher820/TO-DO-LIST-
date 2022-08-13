exports.ids = [3];
exports.modules = {

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/auth/right-box.vue?vue&type=template&id=51d46574&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "right-box d-flex justify-content-center align-items-center flex-column gap-4"
  }, [_vm._ssrNode("<h2>" + _vm._ssrEscape(_vm._s(_vm.info.title)) + "</h2> <p>" + _vm._ssrEscape(_vm._s(_vm.info.content)) + "</p> "), _vm.info.title == 'Sign Up' ? _c('nuxt-link', {
    attrs: {
      "to": {
        name: 'join'
      }
    }
  }, [_vm._v("SIGN UP")]) : _c('nuxt-link', {
    attrs: {
      "to": {
        name: 'login'
      }
    }
  }, [_vm._v("SIGN IN")])], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/auth/right-box.vue?vue&type=template&id=51d46574&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/auth/right-box.vue?vue&type=script&lang=js&
/* harmony default export */ var right_boxvue_type_script_lang_js_ = ({
  props: ["info"]
});
// CONCATENATED MODULE: ./components/auth/right-box.vue?vue&type=script&lang=js&
 /* harmony default export */ var auth_right_boxvue_type_script_lang_js_ = (right_boxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/auth/right-box.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  auth_right_boxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0e1d5e06"
  
)

/* harmony default export */ var right_box = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=auth-right-box.js.map
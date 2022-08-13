exports.ids = [2];
exports.modules = {

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/auth/confirm-email.vue?vue&type=template&id=b9759684&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "rest-box shadow mx-auto rounded-4 d-flex flex-column justify-content-center align-items-center"
  }, [_vm._ssrNode("<h3 class=\"fs-3 fw-bold\">Forget Password</h3> <p class=\"text-center text-secondary\">\n    Retrieve your account by writing the email and then verifying with the\n    Gmail through the code sent\n  </p> <input type=\"text\" placeholder=\"Your Email Address\"" + _vm._ssrAttr("value", _vm.email) + "> <div class=\"err text-danger\">" + _vm._ssrEscape(_vm._s(_vm.forgetError)) + "</div> <button type=\"button\">\n    Rest my Password\n  </button>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/auth/confirm-email.vue?vue&type=template&id=b9759684&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/auth/confirm-email.vue?vue&type=script&lang=js&
/* harmony default export */ var confirm_emailvue_type_script_lang_js_ = ({
  data() {
    return {
      email: ""
    };
  },

  methods: {
    restUserAccount() {
      this.$store.dispatch("restUserAccount", this.email);
    }

  },
  computed: {
    forgetError() {
      return this.$store.state.forgetError;
    }

  }
});
// CONCATENATED MODULE: ./components/auth/confirm-email.vue?vue&type=script&lang=js&
 /* harmony default export */ var auth_confirm_emailvue_type_script_lang_js_ = (confirm_emailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/auth/confirm-email.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  auth_confirm_emailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "f0353d8a"
  
)

/* harmony default export */ var confirm_email = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=auth-confirm-email.js.map
exports.ids = [1];
exports.modules = {

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/auth/confirm-account.vue?vue&type=template&id=8c672aca&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm.emailIsTrue ? _c('div', {
    staticClass: "rest-box shadow mx-auto rounded-4 d-flex flex-column justify-content-center align-items-center"
  }, [_vm._ssrNode("<h3 class=\"fs-4\">Confirm Your Email</h3> <p class=\"text-center text-secondary\">\n    Enter the code which sent to you in the Gmail, then the new password, then\n    confirm the password\n  </p> <div class=\"pass-box position-relative\"><input type=\"text\" placeholder=\"Enter Code\" autocomplete=\"false\"" + _vm._ssrAttr("value", _vm.confirm.code) + " class=\"mb-2\"></div> <div class=\"pass-box position-relative\"><input type=\"password\" placeholder=\"Enter New Password\"" + _vm._ssrAttr("value", _vm.confirm.password) + " class=\"mb-2\"> " + (_vm.showConfPass ? "<i class=\"fa-solid fa-eye position-absolute\"></i>" : "<i class=\"fa-solid fa-eye-slash position-absolute\"></i>") + "</div> <div class=\"pass-box position-relative\"><input type=\"password\" placeholder=\"Enter Confirm Password\"" + _vm._ssrAttr("value", _vm.confirm.confirmPassword) + " class=\"mb-2\"> " + (_vm.showPass ? "<i class=\"fa-solid fa-eye position-absolute\"></i>" : "<i class=\"fa-solid fa-eye-slash position-absolute\"></i>") + "</div> <div class=\"err text-danger\">" + _vm._ssrEscape(_vm._s(_vm.handleUserAccountError)) + "</div> <button>Rest Now !</button>")]) : _vm._e();
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/auth/confirm-account.vue?vue&type=template&id=8c672aca&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/auth/confirm-account.vue?vue&type=script&lang=js&
/* harmony default export */ var confirm_accountvue_type_script_lang_js_ = ({
  data() {
    return {
      confirm: {
        code: "",
        password: "",
        confirmPassword: ""
      },
      showPass: true,
      showConfPass: true
    };
  },

  methods: {
    chnagePassToText(event) {
      let input = event.target.previousElementSibling;

      if (input.getAttribute("type") == "password") {
        input.setAttribute("type", "text");
        this.showPass = false;
      } else {
        input.setAttribute("type", "password");
        this.showPass = true;
      }
    },

    chnageConfPassToText(event) {
      let input = event.target.previousElementSibling;

      if (input.getAttribute("type") == "password") {
        input.setAttribute("type", "text");
        this.showConfPass = false;
      } else {
        input.setAttribute("type", "password");
        this.showConfPass = true;
      }
    },

    restNow() {
      this.$store.dispatch("restAccountNow", this.confirm);
    }

  },
  computed: {
    emailIsTrue() {
      return this.$store.state.emailIsTrue;
    },

    handleUserAccountError() {
      return this.$store.state.handleUserAccountError;
    }

  }
});
// CONCATENATED MODULE: ./components/auth/confirm-account.vue?vue&type=script&lang=js&
 /* harmony default export */ var auth_confirm_accountvue_type_script_lang_js_ = (confirm_accountvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/auth/confirm-account.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  auth_confirm_accountvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2682c98c"
  
)

/* harmony default export */ var confirm_account = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=auth-confirm-account.js.map
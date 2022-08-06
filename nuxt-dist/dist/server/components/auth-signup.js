exports.ids = [6];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/auth/signup.vue?vue&type=template&id=490c49f3&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('form', {
    staticClass: "d-flex justify-content-center align-items-center flex-column gap-3",
    attrs: {
      "action": ""
    },
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.loginUser.apply(null, arguments);
      }
    }
  }, [_vm._ssrNode("<h3 class=\"fs-3 mb-0 fw-bold\">Sign Up</h3> <ul class=\"list-unstyled mb-0 d-flex gap-4 social-list\"><li><i class=\"fa-brands fa-facebook-f\"></i></li> <li><i class=\"fa-brands fa-google\"></i></li> <li><i class=\"fa-brands fa-twitter\"></i></li></ul> "), _vm._ssrNode("<div class=\"form-inputs d-flex flex-column gap-2\">", "</div>", [_vm._ssrNode("<input type=\"text\" placeholder=\"User Name\"" + _vm._ssrAttr("value", _vm.userSign.name) + "> <input type=\"email\" placeholder=\"User Email\"" + _vm._ssrAttr("value", _vm.userSign.email) + "> <div class=\"pass-box position-relative\"><input type=\"password\" placeholder=\"User Password\"" + _vm._ssrAttr("value", _vm.userSign.password) + "> " + (_vm.showPass ? "<i class=\"fa-solid fa-eye position-absolute\"></i>" : "<i class=\"fa-solid fa-eye-slash position-absolute\"></i>") + "</div> <div class=\"pass-box position-relative\"><input type=\"password\" placeholder=\"User Confirm Password\"" + _vm._ssrAttr("value", _vm.userSign.confirmPassword) + "> " + (_vm.showConfPass ? "<i class=\"fa-solid fa-eye position-absolute\"></i>" : "<i class=\"fa-solid fa-eye-slash position-absolute\"></i>") + "</div> "), _c('nuxt-link', {
    staticClass: "sign-link-sm",
    attrs: {
      "to": "/login"
    }
  }, [_vm._v("You have account?")]), _vm._ssrNode(" <div class=\"err text-danger\">" + _vm._ssrEscape(_vm._s(_vm.error)) + "</div> <button type=\"button\">SIGN Up</button>")], 2)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/auth/signup.vue?vue&type=template&id=490c49f3&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/auth/signup.vue?vue&type=script&lang=js&
/* harmony default export */ var signupvue_type_script_lang_js_ = ({
  data() {
    return {
      userSign: {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      showPass: true,
      showConfPass: true
    };
  },

  mounted() {
    let userInfo = localStorage.getItem("user-list-token");

    if (userInfo) {
      this.$router.push("/");
    }
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

    userSignUp() {
      this.$store.dispatch("userSignUp", this.userSign);
    }

  },
  computed: {
    error() {
      return this.$store.state.signUpError;
    }

  }
});
// CONCATENATED MODULE: ./components/auth/signup.vue?vue&type=script&lang=js&
 /* harmony default export */ var auth_signupvue_type_script_lang_js_ = (signupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/auth/signup.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  auth_signupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2a1d065c"
  
)

/* harmony default export */ var signup = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=auth-signup.js.map
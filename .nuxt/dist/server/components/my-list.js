exports.ids = [7];
exports.modules = {

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/my-list.vue?vue&type=template&id=89cff328&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "my-list"
  }, [_vm._ssrNode("<h2 class=\"fs-2 text-light fw-bold\">My List</h2> <form action><button type=\"button\" class=\"button-action\">+</button> <input type=\"text\" placeholder=\"new list name\"" + _vm._ssrAttr("value", _vm.list) + " class=\"new\"></form>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/my-list.vue?vue&type=template&id=89cff328&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/my-list.vue?vue&type=script&lang=js&
/* harmony default export */ var my_listvue_type_script_lang_js_ = ({
  name: "My-List",

  data() {
    return {
      list: '',
      allTasks: []
    };
  },

  methods: {
    addList() {
      console.log("done");
      this.$store.dispatch("addList", this.list);
    }

  }
});
// CONCATENATED MODULE: ./components/my-list.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_my_listvue_type_script_lang_js_ = (my_listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/my-list.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_my_listvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "69491f2f"
  
)

/* harmony default export */ var my_list = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=my-list.js.map
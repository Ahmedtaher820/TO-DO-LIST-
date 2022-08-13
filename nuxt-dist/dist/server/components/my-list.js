exports.ids = [8,7];
exports.modules = {

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/global/loader.vue?vue&type=template&id=01098059&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "loader"
  }, [_vm._ssrNode("<div></div> <div></div> <div></div> <div></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/global/loader.vue?vue&type=template&id=01098059&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/global/loader.vue?vue&type=script&lang=js&
/* harmony default export */ var loadervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/global/loader.vue?vue&type=script&lang=js&
 /* harmony default export */ var global_loadervue_type_script_lang_js_ = (loadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/global/loader.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  global_loadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "023d90fc"
  
)

/* harmony default export */ var loader = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/my-list.vue?vue&type=template&id=5d038580&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "my-list mb-4 mb-md-0"
  }, [_vm._ssrNode("<h2 class=\"fs-2 text-light fw-bold\">My List</h2> <ul class=\"my-lists mt-4 mb-3\">" + _vm._ssrList(_vm.allTasks, function (listData, index) {
    return "<li>" + _vm._ssrEscape("\n      " + _vm._s(listData.list) + "\n    ") + "</li>";
  }) + "</ul> <form><button type=\"button\" class=\"button-action\">+</button> <input type=\"text\" placeholder=\"new list name\"" + _vm._ssrAttr("value", _vm.list) + " class=\"new\"></form> "), _vm.showLoader ? _c('loader') : _vm._e()], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/my-list.vue?vue&type=template&id=5d038580&

// EXTERNAL MODULE: ./components/global/loader.vue + 4 modules
var loader = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/my-list.vue?vue&type=script&lang=js&

/* harmony default export */ var my_listvue_type_script_lang_js_ = ({
  name: "My-List",

  data() {
    return {
      list: ""
    };
  },

  components: {
    loader: loader["default"]
  },
  methods: {
    addList() {
      this.$store.dispatch("addList", this.list);
      this.list = "";
    },

    async getTasks(id, event) {
      const listname = event.target.innerHTML.trim();
      this.$store.dispatch("getTasksFun", id);
      this.$store.commit("setListName", listname);
      this.$store.commit("setListId", id);
      this.removeActive(event.target);
    },

    removeActive(elementTarget) {
      let lists = document.querySelectorAll(".my-lists li");
      lists.forEach(e => {
        e.classList.remove("active");
      });
      elementTarget.classList.add("active");
    }

  },
  computed: {
    allTasks() {
      return this.$store.state.myPosts;
    },

    showLoader() {
      return this.$store.state.showLoader;
    }

  }
});
// CONCATENATED MODULE: ./components/my-list.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_my_listvue_type_script_lang_js_ = (my_listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

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

/* nuxt-component-imports */
installComponents(component, {Loader: __webpack_require__(34).default})


/***/ })

};;
//# sourceMappingURL=my-list.js.map
exports.ids = [10,8,9];
exports.modules = {

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/task.vue?vue&type=template&id=aec4ed02&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', []);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/task.vue?vue&type=template&id=aec4ed02&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/task.vue?vue&type=script&lang=js&
/* harmony default export */ var taskvue_type_script_lang_js_ = ({
  name: "Task",

  data() {
    return {};
  },

  mounted() {}

});
// CONCATENATED MODULE: ./components/task.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_taskvue_type_script_lang_js_ = (taskvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/task.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_taskvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1010bca5"
  
)

/* harmony default export */ var task = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 32:
/***/ (function(module, exports) {



/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/tasks.vue?vue&type=template&id=715a68ec&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "tasks-container"
  }, [_vm._ssrNode("<div class=\"tasks-heading d-flex align-items-center justify-content-between p-3\"><h4 class=\"fw-bold fs-4 text-dark mb-0\"></h4> <p class=\"text-secondary mb-0\">3 tasks remaning</p></div> "), _vm._ssrNode("<div class=\"tasks-body p-3\">", "</div>", [_vm._ssrNode("<div class=\"tasks\">", "</div>", [_c('task')], 1), _vm._ssrNode(" <div class=\"add-task pt-2\"><form action><button class=\"button-action add-task-btn\">+</button> <input type=\"text\" placeholder=\"enter new task\"" + _vm._ssrAttr("value", _vm.taskname) + " class=\"new new-task\"></form></div>")], 2), _vm._ssrNode(" <div class=\"task-footer d-flex justify-content-evenly pt-3\"><button>Clear completed tasks</button> <button>Delete list</button></div>")], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/tasks.vue?vue&type=template&id=715a68ec&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/tasks.vue?vue&type=script&lang=js&
/* harmony default export */ var tasksvue_type_script_lang_js_ = ({
  data() {
    return {
      taskname: ""
    };
  },

  methods: {
    addTask() {// const allTasks = JSON.parse(localStorage.getItem("lists"));
      // const v1 = allTasks.find((task) => task.id == this.listTasks.id);
      // let taskObj = {
      //   id: Date.now(),
      //   name: this.taskname,
      //   complete: false,
      // };
      // localStorage.setItem(v1.id, JSON.stringify(taskObj));
      // console.log(JSON.parse(localStorage.getItem("lists")));
      // this.taskname = "";
    }

  },

  mounted() {},

  computed: {},
  watch: {}
});
// CONCATENATED MODULE: ./components/tasks.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_tasksvue_type_script_lang_js_ = (tasksvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/tasks.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_tasksvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "149b0dc4"
  
)

/* harmony default export */ var tasks = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Task: __webpack_require__(30).default})


/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ render; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ staticRenderFns; });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=cdfd86ac&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c,
      _setup = _vm._self._setupProxy;

  return _c('div', {
    staticClass: "to-do-list position-relative"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<h1 class=\"to-do-heading text-center fw-bold\">Stuff i need to do</h1> "), _vm._ssrNode("<div class=\"content d-flex justify-content-around mt-4\">", "</div>", [_c('My-List'), _vm._ssrNode(" "), _c('tasks')], 2)], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=cdfd86ac&


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_cdfd86ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_cdfd86ac___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_cdfd86ac___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  "e71f6b58"
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Tasks: __webpack_require__(35).default})


/***/ })

};;
//# sourceMappingURL=index.js.map
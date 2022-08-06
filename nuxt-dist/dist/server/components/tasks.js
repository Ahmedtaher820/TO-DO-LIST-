exports.ids = [9,8];
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


/***/ })

};;
//# sourceMappingURL=tasks.js.map
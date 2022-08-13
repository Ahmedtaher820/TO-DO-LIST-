exports.ids = [9];
exports.modules = {

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/task.vue?vue&type=template&id=6d8f6512&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_vm._ssrNode(_vm._ssrList(_vm.tasks, function (task, index) {
    return "<div class=\"task d-flex align-items-center py-1\"><input type=\"checkbox\" class=\"me-2\"> <label" + _vm._ssrClass(null, `${task.completed ? 'completed' : ''}`) + "><span class=\"custom-check\"></span> <span>" + _vm._ssrEscape(" " + _vm._s(task.title)) + "</span></label></div>";
  }))]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/task.vue?vue&type=template&id=6d8f6512&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/task.vue?vue&type=script&lang=js&
/* harmony default export */ var taskvue_type_script_lang_js_ = ({
  name: "Task",

  data() {
    return {};
  },

  methods: {
    completeTask(id, complete) {
      let taskInfo = {
        taskId: id,
        taskcompleteStatus: complete
      };
      this.$store.dispatch("completeTask", taskInfo);
    }

  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    }

  }
});
// CONCATENATED MODULE: ./components/task.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_taskvue_type_script_lang_js_ = (taskvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

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

/***/ })

};;
//# sourceMappingURL=task.js.map
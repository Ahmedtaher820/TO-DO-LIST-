exports.ids = [10,9];
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

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/tasks.vue?vue&type=template&id=190a045c&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "tasks-container"
  }, [_vm._ssrNode("<div class=\"tasks-heading d-flex align-items-center justify-content-between p-md-3 px-5 py-3\"><h4 class=\"fw-bold fs-4 text-dark mb-0\">" + _vm._ssrEscape(_vm._s(_vm.listName)) + "</h4> <p class=\"text-secondary mb-0\">\n      Tasks remaining: <b>" + _vm._ssrEscape(" " + _vm._s(_vm.taskRemaining)) + "</b></p></div> "), _vm._ssrNode("<div class=\"tasks-body p-3\">", "</div>", [_vm._ssrNode("<div class=\"tasks\">", "</div>", [_c('task')], 1), _vm._ssrNode(" <div class=\"add-task pt-2\"><form><button" + _vm._ssrAttr("disabled", _vm.GetlistId.length == 0) + " class=\"button-action add-task-btn\">\n          +\n        </button> <input type=\"text\" placeholder=\"enter new task\"" + _vm._ssrAttr("disabled", _vm.GetlistId.length == 0) + _vm._ssrAttr("value", _vm.task.title) + " class=\"new new-task\"></form></div>")], 2), _vm._ssrNode(" <div class=\"task-footer d-flex justify-content-evenly pt-3\"><button>Clear completed tasks</button> <button" + _vm._ssrAttr("disabled", _vm.GetlistId.length == 0) + ">\n      Delete list\n    </button></div>")], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/tasks.vue?vue&type=template&id=190a045c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/tasks.vue?vue&type=script&lang=js&
/* harmony default export */ var tasksvue_type_script_lang_js_ = ({
  data() {
    return {
      task: {
        title: ""
      }
    };
  },

  methods: {
    addTask() {
      this.$store.dispatch("addTaskFun", this.task);
      this.task.title = "";
    },

    deleteList() {
      this.$store.dispatch("deleteList");
    }

  },

  mounted() {},

  computed: {
    listName() {
      return this.$store.state.listName;
    },

    GetlistId() {
      return this.$store.state.listId;
    },

    taskRemaining() {
      return this.$store.state.taskRemaining;
    }

  }
});
// CONCATENATED MODULE: ./components/tasks.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_tasksvue_type_script_lang_js_ = (tasksvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

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
installComponents(component, {Task: __webpack_require__(31).default})


/***/ })

};;
//# sourceMappingURL=tasks.js.map
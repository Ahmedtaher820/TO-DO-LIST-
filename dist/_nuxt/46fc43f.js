(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3,4],{252:function(t,n,e){"use strict";e.r(n);var o={name:"Task",props:["id"],data:function(){return{}},mounted:function(){console.log(JSON.parse(localStorage.getItem(this.id)))}},l=e(42),component=Object(l.a)(o,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);n.default=component.exports},253:function(t,n,e){"use strict";e.r(n);var o=e(254),l=e.n(o);for(var r in o)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(r);n.default=l.a},254:function(t,n){},255:function(t,n,e){"use strict";var o=e(2),l=e(73).find,r=e(133),c="find",d=!0;c in[]&&Array(1).find((function(){d=!1})),o({target:"Array",proto:!0,forced:d},{find:function(t){return l(this,t,arguments.length>1?arguments[1]:void 0)}}),r(c)},257:function(t,n,e){"use strict";e.r(n);e(255),e(18);var o={data:function(){return{taskname:""}},methods:{addTask:function(){var t=this,n=JSON.parse(localStorage.getItem("lists")).find((function(n){return n.id==t.listTasks.id})),e={id:Date.now(),name:this.taskname,complete:!1};localStorage.setItem(n.id,JSON.stringify(e)),console.log(JSON.parse(localStorage.getItem("lists"))),this.taskname=""}},mounted:function(){localStorage.setItem(this.listTasks.id,JSON.stringify())},computed:{listTasks:function(){return this.$store.state.listTasks}},watch:{}},l=e(42),component=Object(l.a)(o,(function(){var t=this,n=t._self._c;return t.listTasks.listname?n("div",{staticClass:"tasks-container"},[n("div",{staticClass:"tasks-heading d-flex align-items-center justify-content-between p-3"},[n("h4",{staticClass:"fw-bold fs-4 text-dark mb-0"},[t._v(t._s(t.listTasks.listname))]),t._v(" "),n("p",{staticClass:"text-secondary mb-0"},[t._v("3 tasks remaning")])]),t._v(" "),n("div",{staticClass:"tasks-body p-3"},[n("div",{staticClass:"tasks"},[n("task",{attrs:{id:t.listTasks.id}})],1),t._v(" "),n("div",{staticClass:"add-task pt-2"},[n("form",{attrs:{action:""},on:{submit:function(n){return n.preventDefault(),t.addTask.apply(null,arguments)}}},[n("button",{staticClass:"button-action add-task-btn"},[t._v("+")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.taskname,expression:"taskname"}],staticClass:"new new-task",attrs:{type:"text",placeholder:"enter new task"},domProps:{value:t.taskname},on:{input:function(n){n.target.composing||(t.taskname=n.target.value)}}})])])]),t._v(" "),t._m(0)]):t._e()}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"task-footer d-flex justify-content-evenly pt-3"},[n("button",[t._v("Clear completed tasks")]),t._v(" "),n("button",[t._v("Delete list")])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{Task:e(252).default})},261:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return l}));var o=function(){var t=this,n=t._self._c;t._self._setupProxy;return n("div",{staticClass:"to-do-list"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"to-do-heading text-center fw-bold"},[t._v("Stuff i need to do")]),t._v(" "),n("div",{staticClass:"content d-flex justify-content-around mt-4"},[n("My-List"),t._v(" "),n("tasks")],1)])])},l=[]},262:function(t,n,e){"use strict";e.r(n);var o=e(261),l=e(253);for(var r in l)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return l[t]}))}(r);var c=e(42),component=Object(c.a)(l.default,o.a,o.b,!1,null,null,null);n.default=component.exports,installComponents(component,{Tasks:e(257).default})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[11,9,10],{295:function(t,n,e){"use strict";e.r(n);var o={name:"Task",data:function(){return{}},mounted:function(){}},l=e(43),component=Object(l.a)(o,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);n.default=component.exports},296:function(t,n,e){"use strict";e.r(n);var o=e(297),l=e.n(o);for(var r in o)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(r);n.default=l.a},297:function(t,n){},300:function(t,n,e){"use strict";e.r(n);var o={data:function(){return{taskname:""}},methods:{addTask:function(){}},mounted:function(){},computed:{},watch:{}},l=e(43),component=Object(l.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"tasks-container"},[t._m(0),t._v(" "),n("div",{staticClass:"tasks-body p-3"},[n("div",{staticClass:"tasks"},[n("task")],1),t._v(" "),n("div",{staticClass:"add-task pt-2"},[n("form",{attrs:{action:""},on:{submit:function(n){return n.preventDefault(),t.addTask.apply(null,arguments)}}},[n("button",{staticClass:"button-action add-task-btn"},[t._v("+")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.taskname,expression:"taskname"}],staticClass:"new new-task",attrs:{type:"text",placeholder:"enter new task"},domProps:{value:t.taskname},on:{input:function(n){n.target.composing||(t.taskname=n.target.value)}}})])])]),t._v(" "),t._m(1)])}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"tasks-heading d-flex align-items-center justify-content-between p-3"},[n("h4",{staticClass:"fw-bold fs-4 text-dark mb-0"}),t._v(" "),n("p",{staticClass:"text-secondary mb-0"},[t._v("3 tasks remaning")])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"task-footer d-flex justify-content-evenly pt-3"},[n("button",[t._v("Clear completed tasks")]),t._v(" "),n("button",[t._v("Delete list")])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{Task:e(295).default})},301:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return l}));var o=function(){var t=this,n=t._self._c;t._self._setupProxy;return n("div",{staticClass:"to-do-list position-relative"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"to-do-heading text-center fw-bold"},[t._v("Stuff i need to do")]),t._v(" "),n("div",{staticClass:"content d-flex justify-content-around mt-4"},[n("My-List"),t._v(" "),n("tasks")],1)])])},l=[]},302:function(t,n,e){"use strict";e.r(n);var o=e(301),l=e(296);for(var r in l)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return l[t]}))}(r);var c=e(43),component=Object(c.a)(l.default,o.a,o.b,!1,null,null,null);n.default=component.exports,installComponents(component,{Tasks:e(300).default})}}]);
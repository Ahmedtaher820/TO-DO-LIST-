(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{292:function(t,e,n){"use strict";n.r(e);n(44);var o={data:function(){return{userSign:{name:"",email:"",password:"",confirmPassword:""},showPass:!0,showConfPass:!0}},mounted:function(){localStorage.getItem("user-list-token")&&this.$router.push("/")},methods:{chnagePassToText:function(t){var input=t.target.previousElementSibling;"password"==input.getAttribute("type")?(input.setAttribute("type","text"),this.showPass=!1):(input.setAttribute("type","password"),this.showPass=!0)},chnageConfPassToText:function(t){var input=t.target.previousElementSibling;"password"==input.getAttribute("type")?(input.setAttribute("type","text"),this.showConfPass=!1):(input.setAttribute("type","password"),this.showConfPass=!0)},userSignUp:function(){this.$store.dispatch("userSignUp",this.userSign)}},computed:{error:function(){return this.$store.state.signUpError}}},r=n(43),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("form",{staticClass:"d-flex justify-content-center align-items-center flex-column gap-3",attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.loginUser.apply(null,arguments)}}},[e("h3",{staticClass:"fs-3 mb-0 fw-bold"},[t._v("Sign Up")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"form-inputs d-flex flex-column gap-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.userSign.name,expression:"userSign.name"}],attrs:{type:"text",placeholder:"User Name"},domProps:{value:t.userSign.name},on:{input:function(e){e.target.composing||t.$set(t.userSign,"name",e.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.userSign.email,expression:"userSign.email"}],attrs:{type:"email",placeholder:"User Email"},domProps:{value:t.userSign.email},on:{input:function(e){e.target.composing||t.$set(t.userSign,"email",e.target.value)}}}),t._v(" "),e("div",{staticClass:"pass-box position-relative"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.userSign.password,expression:"userSign.password"}],attrs:{type:"password",placeholder:"User Password"},domProps:{value:t.userSign.password},on:{input:function(e){e.target.composing||t.$set(t.userSign,"password",e.target.value)}}}),t._v(" "),t.showPass?e("i",{staticClass:"fa-solid fa-eye position-absolute",on:{click:function(e){return t.chnagePassToText(e)}}}):e("i",{staticClass:"fa-solid fa-eye-slash position-absolute",on:{click:function(e){return t.chnagePassToText(e)}}})]),t._v(" "),e("div",{staticClass:"pass-box position-relative"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.userSign.confirmPassword,expression:"userSign.confirmPassword"}],attrs:{type:"password",placeholder:"User Confirm Password"},domProps:{value:t.userSign.confirmPassword},on:{input:function(e){e.target.composing||t.$set(t.userSign,"confirmPassword",e.target.value)}}}),t._v(" "),t.showConfPass?e("i",{staticClass:"fa-solid fa-eye position-absolute",on:{click:function(e){return t.chnageConfPassToText(e)}}}):e("i",{staticClass:"fa-solid fa-eye-slash position-absolute",on:{click:function(e){return t.chnageConfPassToText(e)}}})]),t._v(" "),e("nuxt-link",{staticClass:"sign-link-sm",attrs:{to:"/login"}},[t._v("You have account?")]),t._v(" "),e("div",{staticClass:"err text-danger"},[t._v(t._s(t.error))]),t._v(" "),e("button",{attrs:{type:"button"},on:{click:t.userSignUp}},[t._v("SIGN Up")])],1)])}),[function(){var t=this,e=t._self._c;return e("ul",{staticClass:"list-unstyled mb-0 d-flex gap-4 social-list"},[e("li",[e("i",{staticClass:"fa-brands fa-facebook-f"})]),t._v(" "),e("li",[e("i",{staticClass:"fa-brands fa-google"})]),t._v(" "),e("li",[e("i",{staticClass:"fa-brands fa-twitter"})])])}],!1,null,null,null);e.default=component.exports}}]);
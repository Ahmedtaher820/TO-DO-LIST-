(window.webpackJsonp=window.webpackJsonp||[]).push([[12,4,5,6,7],{291:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{userLogin:{email:"",password:""},showPass:!0}},methods:{chnagePassToText:function(t){var input=t.target.previousElementSibling;"password"==input.getAttribute("type")?(input.setAttribute("type","text"),this.showPass=!1):(input.setAttribute("type","password"),this.showPass=!0)},userSignIn:function(){this.$store.dispatch("userSignIn",this.userLogin)}},computed:{error:function(){return this.$store.state.signInError}}},r=n(43),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("form",{staticClass:"d-flex justify-content-center align-items-center flex-column gap-3",attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.loginUser.apply(null,arguments)}}},[e("h3",{staticClass:"fs-3 mb-0 fw-bold"},[t._v("Sign In")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"form-inputs d-flex flex-column gap-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.userLogin.email,expression:"userLogin.email"}],attrs:{type:"email",placeholder:"User Email"},domProps:{value:t.userLogin.email},on:{input:function(e){e.target.composing||t.$set(t.userLogin,"email",e.target.value)}}}),t._v(" "),e("div",{staticClass:"pass-box position-relative"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.userLogin.password,expression:"userLogin.password"}],attrs:{type:"password",placeholder:"User Password"},domProps:{value:t.userLogin.password},on:{input:function(e){e.target.composing||t.$set(t.userLogin,"password",e.target.value)}}}),t._v(" "),t.showPass?e("i",{staticClass:"fa-solid fa-eye position-absolute",on:{click:function(e){return t.chnagePassToText(e)}}}):e("i",{staticClass:"fa-solid fa-eye-slash position-absolute",on:{click:function(e){return t.chnagePassToText(e)}}})]),t._v(" "),e("nuxt-link",{attrs:{to:{name:"restPassword"}}},[t._v("Forget your password?")]),t._v(" "),e("nuxt-link",{staticClass:"sign-link-sm",attrs:{to:"/join"}},[t._v("You don't have account?")]),t._v(" "),e("div",{staticClass:"err text-danger"},[t._v(t._s(t.error))]),t._v(" "),e("button",{attrs:{type:"button"},on:{click:t.userSignIn}},[t._v("SIGN IN")])],1)])}),[function(){var t=this,e=t._self._c;return e("ul",{staticClass:"list-unstyled mb-0 d-flex gap-4 social-list"},[e("li",[e("i",{staticClass:"fa-brands fa-facebook-f"})]),t._v(" "),e("li",[e("i",{staticClass:"fa-brands fa-google"})]),t._v(" "),e("li",[e("i",{staticClass:"fa-brands fa-twitter"})])])}],!1,null,null,null);e.default=component.exports},292:function(t,e,n){"use strict";n.r(e);n(44);var o={data:function(){return{userSign:{name:"",email:"",password:"",confirmPassword:""},showPass:!0,showConfPass:!0}},mounted:function(){localStorage.getItem("user-list-token")&&this.$router.push("/")},methods:{chnagePassToText:function(t){var input=t.target.previousElementSibling;"password"==input.getAttribute("type")?(input.setAttribute("type","text"),this.showPass=!1):(input.setAttribute("type","password"),this.showPass=!0)},chnageConfPassToText:function(t){var input=t.target.previousElementSibling;"password"==input.getAttribute("type")?(input.setAttribute("type","text"),this.showConfPass=!1):(input.setAttribute("type","password"),this.showConfPass=!0)},userSignUp:function(){this.$store.dispatch("userSignUp",this.userSign)}},computed:{error:function(){return this.$store.state.signUpError}}},r=n(43),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("form",{staticClass:"d-flex justify-content-center align-items-center flex-column gap-3",attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.loginUser.apply(null,arguments)}}},[e("h3",{staticClass:"fs-3 mb-0 fw-bold"},[t._v("Sign Up")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"form-inputs d-flex flex-column gap-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.userSign.name,expression:"userSign.name"}],attrs:{type:"text",placeholder:"User Name"},domProps:{value:t.userSign.name},on:{input:function(e){e.target.composing||t.$set(t.userSign,"name",e.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.userSign.email,expression:"userSign.email"}],attrs:{type:"email",placeholder:"User Email"},domProps:{value:t.userSign.email},on:{input:function(e){e.target.composing||t.$set(t.userSign,"email",e.target.value)}}}),t._v(" "),e("div",{staticClass:"pass-box position-relative"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.userSign.password,expression:"userSign.password"}],attrs:{type:"password",placeholder:"User Password"},domProps:{value:t.userSign.password},on:{input:function(e){e.target.composing||t.$set(t.userSign,"password",e.target.value)}}}),t._v(" "),t.showPass?e("i",{staticClass:"fa-solid fa-eye position-absolute",on:{click:function(e){return t.chnagePassToText(e)}}}):e("i",{staticClass:"fa-solid fa-eye-slash position-absolute",on:{click:function(e){return t.chnagePassToText(e)}}})]),t._v(" "),e("div",{staticClass:"pass-box position-relative"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.userSign.confirmPassword,expression:"userSign.confirmPassword"}],attrs:{type:"password",placeholder:"User Confirm Password"},domProps:{value:t.userSign.confirmPassword},on:{input:function(e){e.target.composing||t.$set(t.userSign,"confirmPassword",e.target.value)}}}),t._v(" "),t.showConfPass?e("i",{staticClass:"fa-solid fa-eye position-absolute",on:{click:function(e){return t.chnageConfPassToText(e)}}}):e("i",{staticClass:"fa-solid fa-eye-slash position-absolute",on:{click:function(e){return t.chnageConfPassToText(e)}}})]),t._v(" "),e("nuxt-link",{staticClass:"sign-link-sm",attrs:{to:"/login"}},[t._v("You have account?")]),t._v(" "),e("div",{staticClass:"err text-danger"},[t._v(t._s(t.error))]),t._v(" "),e("button",{attrs:{type:"button"},on:{click:t.userSignUp}},[t._v("SIGN Up")])],1)])}),[function(){var t=this,e=t._self._c;return e("ul",{staticClass:"list-unstyled mb-0 d-flex gap-4 social-list"},[e("li",[e("i",{staticClass:"fa-brands fa-facebook-f"})]),t._v(" "),e("li",[e("i",{staticClass:"fa-brands fa-google"})]),t._v(" "),e("li",[e("i",{staticClass:"fa-brands fa-twitter"})])])}],!1,null,null,null);e.default=component.exports},293:function(t,e,n){"use strict";n.r(e);var o={props:["info"]},r=n(43),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"right-box d-flex justify-content-center align-items-center flex-column gap-4"},[e("h2",[t._v(t._s(t.info.title))]),t._v(" "),e("p",[t._v(t._s(t.info.content))]),t._v(" "),"Sign Up"==t.info.title?e("nuxt-link",{attrs:{to:{name:"join"}}},[t._v("SIGN UP")]):e("nuxt-link",{attrs:{to:{name:"login"}}},[t._v("SIGN IN")])],1)}),[],!1,null,null,null);e.default=component.exports},294:function(t,e,n){"use strict";n.r(e);var o=n(291),r=n(292),l={props:["authInfo"],data:function(){return{userSign:{email:"",password:""},showPass:!0}},components:{signin:o.default,signup:r.default},methods:{chnagePassToText:function(){console.log("doen")}}},c=n(43),component=Object(c.a)(l,(function(){var t=this._self._c;return t("div",{staticClass:"form"},["signin"==this.authInfo.status?t("signin"):t("signup")],1)}),[],!1,null,null,null);e.default=component.exports},303:function(t,e,n){"use strict";n.r(e);var o=n(293),r=n(294),l={name:"join",head:{title:"Sign Up",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width,initial-scale=1"},{hid:"description",name:"description",content:"Sign Up Page"}]},data:function(){return{info:{title:"Sign In",content:"Sign In here if you have account"},authInfo:{status:"signup"}}},components:{rightBox:o.default,signInUp:r.default},mounted:function(){localStorage.getItem("user-list-token")&&this.$router.push("/")}},c=n(43),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"login-page d-flex justify-content-center align-items-center vh-100"},[e("div",{staticClass:"login-box d-flex"},[e("sign-in-up",{attrs:{authInfo:t.authInfo}}),t._v(" "),e("right-box",{attrs:{info:t.info}})],1)])}),[],!1,null,null,null);e.default=component.exports}}]);
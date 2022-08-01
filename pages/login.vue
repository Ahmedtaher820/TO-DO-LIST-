<template>
  <div
    class="login-page d-flex justify-content-center align-items-center vh-100"
  >
    <div class="login-box d-flex">
      <sign-in-up :authInfo="authInfo" />
      <right-box :info="info" />
    </div>
  </div>
</template>

<script>
import rightBox from "../components/auth/right-box.vue";
import signInUp from "../components/auth/signin-signup.vue";

export default {
  name:"login",

  head:{
    title:"Sign In",
    meta:[
      {charset:"utf-8"},
      {name:"viewport",content:"width=device-width,initial-scale=1"},
      {hid:"description",name:"description",content:"Sign In Page"}
    ]
  },
  data() {
    return {
      info: {
        title: "Sign Up",
        content: "Sign Up here if don't have account",
      },
      authInfo: {
        status: "signin",
      },
    };
  },
  components: {
    rightBox,
    signInUp,
  },
  mounted() {
    let userInfo = localStorage.getItem("user-list-token");
    if (userInfo) {
      this.$router.push("/");
    }
  },
};
</script>

<style>
</style>

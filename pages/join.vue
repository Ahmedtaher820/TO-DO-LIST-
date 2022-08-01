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
  name:"join",
  head: {
    title: "Sign Up",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width,initial-scale=1" },
      { hid: "description", name: "description", content: "Sign Up Page" },
    ],
  },
  data() {
    return {
      info: {
        title: "Sign In",
        content: "Sign In here if you have account",
      },
      authInfo: {
        status: "signup",
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

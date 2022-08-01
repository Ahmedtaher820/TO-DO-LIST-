<template>
  <div class="restPassowrd vh-100">
    <h2 class="fs-1 fw-bold text-center pt-5 text-light mb-5">
      Rest Password Form
    </h2>
    <confirm-email />
    <confirm-account />
  </div>
</template>

<script>
import ConfirmAccount from "../components/auth/confirm-account.vue";
import confirmEmail from "../components/auth/confirm-email.vue";
export default {
  components: { confirmEmail, ConfirmAccount },
  name: "restPassword",

  head: {
    title: "Rest Password",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width,initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Rest Password Page",
      },
    ],
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

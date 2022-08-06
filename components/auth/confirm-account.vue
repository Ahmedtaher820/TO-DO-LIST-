<template>
  <div
    class="
      rest-box
      shadow
      mx-auto
      rounded-4
      d-flex
      flex-column
      justify-content-center
      align-items-center
    "
  >
    <h3 class="fs-4">Confirm Your Email</h3>
    <p class="text-center text-secondary">
      Enter the code which sent to you in the Gmail, then the new password, then
      confirm the password
    </p>
    <div class="pass-box position-relative">
      <input
        type="text"
        placeholder="Enter Code"
        class="mb-2"
        v-model="confirm.code"
        autocomplete="false"
      />
    </div>
    <div class="pass-box position-relative">
      <input
        type="password"
        placeholder="Enter New Password"
        class="mb-2"
        v-model="confirm.password"
      />
      <i
        class="fa-solid fa-eye position-absolute"
        v-if="showConfPass"
        @click="chnageConfPassToText($event)"
      ></i>
      <i
        class="fa-solid fa-eye-slash position-absolute"
        v-else
        @click="chnageConfPassToText($event)"
      ></i>
    </div>
    <div class="pass-box position-relative">
      <input
        type="password"
        placeholder="Enter Confirm Password"
        class="mb-2"
        v-model="confirm.confirmPassword"
      />
      <i
        class="fa-solid fa-eye position-absolute"
        v-if="showPass"
        @click="chnagePassToText($event)"
      ></i>
      <i
        class="fa-solid fa-eye-slash position-absolute"
        v-else
        @click="chnagePassToText($event)"
      ></i>
    </div>

    <div class="err text-danger">{{ handleUserAccountError }}</div>
    <button class="" @click="restNow">Rest Now !</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      confirm: {
        code: "",
        password: "",
        confirmPassword: "",
      },
      showPass: true,
      showConfPass: true,
    };
  },
  methods: {
    chnagePassToText(event) {
      let input = event.target.previousElementSibling;
      if (input.getAttribute("type") == "password") {
        input.setAttribute("type", "text");
        this.showPass = false;
      } else {
        input.setAttribute("type", "password");
        this.showPass = true;
      }
    },
    chnageConfPassToText(event) {
      let input = event.target.previousElementSibling;
      if (input.getAttribute("type") == "password") {
        input.setAttribute("type", "text");
        this.showConfPass = false;
      } else {
        input.setAttribute("type", "password");
        this.showConfPass = true;
      }
    },

    restNow() {
      this.$store.dispatch("restAccountNow", this.confirm);
    },
  },

  computed: {
    handleUserAccountError() {
      return this.$store.state.handleUserAccountError;
    },
  },
};
</script>

<style>
</style>

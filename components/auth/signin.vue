<template>
  <form
    action=""
    @submit.prevent="loginUser"
    class="d-flex justify-content-center align-items-center flex-column gap-3"
  >
    <h3 class="fs-3 mb-0 fw-bold">Sign In</h3>
    <ul class="list-unstyled mb-0 d-flex gap-4 social-list">
      <li>
        <i class="fa-brands fa-facebook-f"></i>
      </li>
      <li>
        <i class="fa-brands fa-google"></i>
      </li>
      <li>
        <i class="fa-brands fa-twitter"></i>
      </li>
    </ul>
    <div class="form-inputs d-flex flex-column gap-2">
      <input type="email" placeholder="User Email" v-model="userLogin.email" />
      <div class="pass-box position-relative">
        <input
          type="password"
          placeholder="User Password"
          v-model="userLogin.password"
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
      <nuxt-link :to="{ name: 'restPassword' }"
        >Forget your password?</nuxt-link
      >
      <div class="err text-danger">{{ error }}</div>
      <button type="button" @click="userSignIn">SIGN IN</button>
    </div>
  </form>
</template>

<script>
export default {

  data() {
    return {
      userLogin: {
        email: "",
        password: "",
      },
      showPass: true,
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
    userSignIn() {
      this.$store.dispatch("userSignIn", this.userLogin);
    },
  },
  computed: {
    error() {
      return this.$store.state.signInError;
    },
  },
};
</script>

<style>
</style>

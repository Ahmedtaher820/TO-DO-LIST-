<template>
  <form
    action=""
    @submit.prevent="loginUser"
    class="d-flex justify-content-center align-items-center flex-column gap-3"
  >
    <h3 class="fs-3 mb-0 fw-bold">Sign Up</h3>
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
      <input type="text" placeholder="User Name" v-model="userSign.name" />
      <input type="email" placeholder="User Email" v-model="userSign.email" />
      <div class="pass-box position-relative">
        <input
          type="password"
          placeholder="User Password"
          v-model="userSign.password"
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
      <div class="pass-box position-relative">
        <input
          type="password"
          placeholder="User Confirm Password"
          v-model="userSign.confirmPassword"
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

      <nuxt-link to="/login" class="sign-link-sm"
        >You have account?</nuxt-link
      >
      <div class="err text-danger">{{ error }}</div>

      <button type="button" @click="userSignUp">SIGN Up</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userSign: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      showPass: true,
      showConfPass: true,
    };
  },
  mounted() {
    let userInfo = localStorage.getItem("user-list-token");
    if (userInfo) {
      this.$router.push("/");
    }
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
    userSignUp() {
      this.$store.dispatch("userSignUp", this.userSign);
    },
  },
  computed: {
    error() {
      return this.$store.state.signUpError;
    },
  },
};
</script>

<style>
</style>

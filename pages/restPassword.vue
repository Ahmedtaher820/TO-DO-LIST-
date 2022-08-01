<template>
  <div class="restPassowrd vh-100">
    <h2 class="fs-1 fw-bold text-center pt-5 text-light mb-5">
      Rest Password Form
    </h2>
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
      v-if="!emailIsTrue"
    >
      <h3 class="fs-3 fw-bold">Forget Password</h3>
      <p class="text-center text-secondary">
        Retrieve your account by writing the email and then verifying with the
        Gmail through the code sent
      </p>
      <input
        type="text"
        placeholder="Your Email Address"
        v-model="email"
        autocomplete="false"
      />
      <div class="err text-danger">{{ forgetError }}</div>
      <button type="button" @click="restUserAccount">Rest my Password</button>
    </div>
    <div
      v-if="emailIsTrue"
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
        Enter the code which sent to you in the Gmail, then the new password,
        then confirm the password
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
      <button class="" @click="resNow">Rest Now !</button>
    </div>
  </div>
</template>

<script>
export default {
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
  data() {
    return {
      email: "",
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
    restUserAccount() {
      this.$store.dispatch("restUserAccount", this.email);
    },
    resNow() {
      this.$store.dispatch("restAccountNow", this.confirm);
    },
  },
  mounted() {
    let userInfo = localStorage.getItem("user-list-token");
    if (userInfo) {
      this.$router.push("/");
    }
  },
  computed: {
    forgetError() {
      return this.$store.state.forgetError;
    },
    emailIsTrue() {
      return this.$store.state.emailIsTrue;
    },
    handleUserAccountError() {
      return this.$store.state.handleUserAccountError;
    },
  },
};
</script>

<style>
</style>

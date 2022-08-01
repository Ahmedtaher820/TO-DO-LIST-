<template>
  <div class="form">
    <signin v-if="authInfo.status == 'signin'" />
    <signup v-else />
  </div>
</template>
<script>
import signin from "./signin.vue";
import signup from "./signup.vue";
export default {
  props: ["authInfo"],
  data() {
    return {
      userSign: {
        email: "",
        password: "",
      },
      showPass: true,
    };
  },
  components: {
    signin,
    signup,
  },
  methods: {
    chnagePassToText() {
      console.log("doen");
    },
  },
};
</script>

<style>
</style>

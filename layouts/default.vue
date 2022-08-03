<template>
  <div id="app">
    <i
      class="fa-solid fa-arrow-right-from-bracket"
      title="LogOut"
      v-if="logOut"
      @click="logOutFun"
    ></i>
    <Nuxt />
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: "",
    };
  },
  mounted() {
    let userInfo = localStorage.getItem("user-list-token");
    if (userInfo) {
      this.$router.push("/");
      this.$store.commit("setUserLogOut", true);
    } else {
      this.$router.push("/login");
      this.$store.commit("setUserLogOut", false);
    }
  },
  methods: {
    logOutFun() {
      this.$store.commit("userLogOut");
    },
  },
  computed: {
    logOut() {
      return this.$store.state.logOut;
    },
  },
};
</script>
<style>

</style>

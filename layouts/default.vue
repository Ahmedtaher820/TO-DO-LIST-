<template>
  <div id="app">
    <Nuxt />
  </div>
</template>
<script>
export default {
  mounted() {
    let userInfo = localStorage.getItem("user-list-token");
    if (!userInfo) {
      return this.$router.push("/login");
    } else {
      if (this.$route.name == "index") {
        return this.$router.push("/");
      }
      return this.$router.push(`/${this.$route.name}`);
    }
  },
};
</script>

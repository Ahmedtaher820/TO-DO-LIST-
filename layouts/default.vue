<template>
  <div id="app">
    <Nuxt />
  </div>
</template>
<script>
export default {
  data() {},
  mounted() {
    console.log("done");
    let userInfo = localStorage.getItem("user-list-token");
    if (!userInfo) {
      return this.$router.push("/login");
    } else {
      return this.$router.push(`/${this.$route.name}`);
    }
  },
};
</script>

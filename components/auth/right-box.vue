<template>
  <div
    class=" right-box d-flex justify-content-center align-items-center flex-column gap-4"
  >
    <h2>{{ info.title }}</h2>
    <p>{{ info.content }}</p>
    <nuxt-link :to="{ name: 'join' }" v-if="info.title == 'Sign Up'"
      >SIGN UP</nuxt-link
    >
    <nuxt-link :to="{ name: 'login' }" v-else>SIGN IN</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["info"],
};
</script>


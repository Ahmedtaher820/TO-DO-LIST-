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
      v-if="!emailIsTrue"
    >
      <h3 class="fs-3 fw-bold">Forget Password</h3>
      <p class="text-center text-secondary">
        Retrieve your account by writing the email and then verifying with the
        Gmail through the code sent
      </p>
      <input type="text" placeholder="Your Email Address" v-model="email" />
      <div class="err text-danger">{{ forgetError }}</div>
      <button type="button" @click="restUserAccount">Rest my Password</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

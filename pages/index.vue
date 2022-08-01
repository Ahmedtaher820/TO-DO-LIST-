<template>
  <div class="to-do-list position-relative">
    <div class="container">
      <h1 class="to-do-heading text-center fw-bold">Stuff i need to do</h1>
      <div class="content d-flex justify-content-around mt-4">
        <My-List />
        <tasks />
      </div>
    </div>
    <div class="position-absolute logout" @click="logOut">
      <i class="fa-solid fa-person-from-portal"></i>
    </div>
  </div>
</template>

<script>
import MyList from "../components/my-list.vue";
import tasks from "../components/tasks.vue";
export default {
  name: "IndexPage",

  components: {
    MyList,
    tasks,
  },
  methods:{
    logOut(){
      localStorage.removeItem("user-list-token")
      this.$router.push("/login")
    }
  }
};

<template>
  <div class="my-list mb-4 mb-md-0">
    <h2 class="fs-2 text-light fw-bold">My List</h2>
    <ul class="my-lists mt-4 mb-3">
      <li
        v-for="(listData, index) in allTasks"
        :key="index"
        @click="getTasks(listData._id, $event)"
      >
        {{ listData.list }}
      </li>
    </ul>
    <form>
      <button class="button-action" type="button" @click="addList">+</button>
      <input
        type="text"
        v-model="list"
        class="new"
        placeholder="new list name"
        @keypress.enter.prevent="addList"
      />
    </form>
    <loader v-if="showLoader" />
  </div>
</template>
<script>
import loader from "./global/loader.vue";
export default {
  name: "My-List",
  data() {
    return {
      list: "",
    };
  },
  components: {
    loader,
  },
  methods: {
    addList() {
      this.$store.dispatch("addList", this.list);
      this.list = "";
    },
    async getTasks(id, event) {
      const listname = event.target.innerHTML.trim();
      this.$store.dispatch("getTasksFun", id);
      this.$store.commit("setListName", listname);
      this.$store.commit("setListId", id);
      this.removeActive(event.target);
    },
    removeActive(elementTarget) {
      let lists = document.querySelectorAll(".my-lists li");
      lists.forEach((e) => {
        e.classList.remove("active");
      });
      elementTarget.classList.add("active");
    },
  },
  computed: {
    allTasks() {
      return this.$store.state.myPosts;
    },
    showLoader() {
      return this.$store.state.showLoader;
    },
  },
};
</script>

<style>
</style>

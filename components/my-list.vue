<template>
  <div class="my-list">
    <h2 class="fs-2 text-light fw-bold">My List</h2>
    <!-- <ul class="my-lists mt-4 mb-3" > -->
      <!-- <li v-for="(listData, index) in allTasks" :class="`${index == 0 ? 'active': ''}`" :key="index" @click="showList(index)">
        {{ listData.listname }}
      </li> -->
    <!-- </ul> -->
    <form action="">
      <button class="button-action"  type="button"  @click="addList">+</button>
      <input
        type="text"
        v-model="list"
        class="new"
        placeholder="new list name"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "My-List",
  data() {
    return {
      list:'',
      allTasks: [],
    };
  },
  methods: {
    addList() {
      console.log("done")
      this.$store.dispatch("addList",this.list)
  },
}
}
</script>

<style>
</style>

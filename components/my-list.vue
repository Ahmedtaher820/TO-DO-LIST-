<template>
  <div class="my-list">
    <h2 class="fs-2 text-light fw-bold">My List</h2>
    <ul class="my-lists mt-4 mb-3" v-if="allTasks.length > 0">
      <li v-for="(listData, index) in allTasks" :class="`${index == 0 ? 'active': ''}`" :key="index" @click="showList(index)">
        {{ listData.listname }}
      </li>
    </ul>
    <form action="" @submit.prevent="addList">
      <button class="button-action" type="submit">+</button>
      <input
        type="text"
        v-model="listname"
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
      listname:'',
      allTasks: [],
    };
  },
  methods: {
    addList() {
      const list = {
        listname: this.listname,
        task:[],
        id: Date.now()
      }
      if (list.listname == null || list.listname.trim().length == 0 ) return;
      this.allTasks.push(list);
      localStorage.setItem("lists", JSON.stringify(this.allTasks));
      this.listname = "";
    },
    showList(id){
      this.$store.commit("showListTasks",id)
    }
  },
  mounted() {
    if (localStorage.getItem("lists")) {
      this.allTasks = JSON.parse(localStorage.getItem("lists")) || [];
    }
  },
  watch: {
    allTasks: (newlist) => {
      // localStorage.lists = JSON.stringify(newlist)
      // console.log(newlist)
    },
  },
};
</script>

<style>
</style>

<template>
  <div class="tasks-container" >
    <div
      class="
        tasks-heading
        d-flex
        align-items-center
        justify-content-between
        p-3
      "
    >
      <h4 class="fw-bold fs-4 text-dark mb-0">{{listName}}</h4>
      <p class="text-secondary mb-0">3 tasks remaning</p>
    </div>
    <div class="tasks-body p-3">
      <div class="tasks">
        <task  />
      </div>
      <div class="add-task pt-2">
        <form>
          <button class="button-action add-task-btn" :disabled="GetlistId.length == 0" @click.prevent="addTask">+</button>
          <input
            type="text"
            class="new new-task"
            placeholder="enter new task"
            v-model="task.title"
            @keypress.enter.prevent="addTask"
            :disabled="GetlistId.length == 0"
          />
        </form>
        <div class="text-danger mt-3 ps-2">{{errorTask}}</div>
      </div>
    </div>
    <div class="task-footer d-flex justify-content-evenly pt-3">
      <button>Clear completed tasks</button>
      <button>Delete list</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task:{
        title: "",
      }
    };
  },
  methods: {
    addTask() {

      this.$store.dispatch("addTaskFun",this.task)
      this.task = ''
    },
  },
  mounted() {
  },
  computed: {
    listName(){
      return this.$store.state.listName
    },
    GetlistId(){
      return this.$store.state.listId
    },
    errorTask(){
      return this.$store.state.taskError
    }
  },
};
</script>

<style></style>

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
      <h4 class="fw-bold fs-4 text-dark mb-0"></h4>
      <p class="text-secondary mb-0">3 tasks remaning</p>
    </div>
    <div class="tasks-body p-3">
      <div class="tasks">
        <task  />
      </div>
      <div class="add-task pt-2">
        <form action="" @submit.prevent="addTask">
          <button class="button-action add-task-btn">+</button>
          <input
            type="text"
            class="new new-task"
            placeholder="enter new task"
            v-model="taskname"
          />
        </form>
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
      taskname: "",
    };
  },
  methods: {
    addTask() {
      // const allTasks = JSON.parse(localStorage.getItem("lists"));
      // const v1 = allTasks.find((task) => task.id == this.listTasks.id);
      // let taskObj = {
      //   id: Date.now(),
      //   name: this.taskname,
      //   complete: false,
      // };
      // localStorage.setItem(v1.id, JSON.stringify(taskObj));
      // console.log(JSON.parse(localStorage.getItem("lists")));
      // this.taskname = "";
    },
  },
  mounted() {
  },
  computed: {

  },
  watch: {},
};
</script>

<style></style>

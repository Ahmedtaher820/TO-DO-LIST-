<template>
  <div>
    <div
      class="task d-flex align-items-center py-1"
      v-for="(task, index) in tasks"
      :key="index"
    >
      <input
        type="checkbox"
        class="me-2"
        @click="completeTask(task._id, task.completed)"
      />
      <label :class="`${task.completed ? 'completed' : ''}`">
        <span class=" custom-check"></span>
        <span> {{ task.title }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  data() {
    return {};
  },
  methods: {
    completeTask(id, complete) {
      let taskInfo = {
        taskId: id,
        taskcompleteStatus: complete,
      };
      this.$store.dispatch("completeTask", taskInfo);
    },
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },
};
</script>

<style></style>

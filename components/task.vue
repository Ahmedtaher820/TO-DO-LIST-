<template>
  <div >
    <!-- <div class="task d-flex align-items-center py-1" v-for="(task,index) in tasks" :key="index">
      <input type="checkbox" :id="`task${index}`" class="me-2" />
      <label :for="`task${index}`">
        <span class="custom-check"></span>
        <span> {{task}}</span>
      </label>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Task",
  props:["id"],
  data(){
    return{

    }
  },
  mounted(){
    console.log(JSON.parse(localStorage.getItem(this.id)))
  }
};
</script>

<style></style>

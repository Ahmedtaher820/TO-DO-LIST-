<template>
<div class="to-do-list">
  <div class="container">
    <h1 class="to-do-heading text-center fw-bold">Stuff i need to do</h1>
    <div class="content d-flex justify-content-around mt-4">
    <My-List />
    <tasks />
    </div>
  </div>
</div>
</template>

<script>
import MyList from "../components/my-list.vue"
import tasks from "../components/tasks.vue"
export default {
  name: 'IndexPage',
  components:{
    MyList,tasks
  }

}

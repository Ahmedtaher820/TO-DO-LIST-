<template>
  <div class="to-do-list position-relative">
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
import MyList from "../components/my-list.vue";
import tasks from "../components/tasks.vue";
export default {
  head:{
    title:"Home Page",
    meta:[
      {charset="utf-8"},
      {name:"viewport",content="width=devcice-width;initial-scale=1.0"},
      {hid:"description",name:"description",content:"Home Page For Lists and Tasks"}
    ]
  },
  name: "IndexPage",

  components: {
    MyList,
    tasks,
  },
};

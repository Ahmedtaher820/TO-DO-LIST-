export const state = () => ({
  listTasks: {},
});
export const mutations = {
  showListTasks(state, payload) {
    const tasks = JSON.parse(localStorage.getItem("lists"));
    state.listTasks = tasks[payload];
  },
  addTask(state, payload) {

    console.log(JSON.parse(localStorage.getItem("lists"))[0]);
  },
};

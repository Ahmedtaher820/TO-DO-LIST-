import axios from "axios";
export const state = () => ({
  signUpError: "",
  signInError: "",
  forgetError: "",
  taskError: "",
  handleUserAccountError: "",
  emailIsTrue: false,
  usertoken: "",
  logOut: false,
  myPosts: null,
  tasks: null,
  listName: "",
  listId: "",
  showLoader: false,
});
export const mutations = {
  handleSignUpError(state, payload) {
    state.signUpError = payload;
  },
  handleSignInError(state, payload) {
    state.signInError = payload;
  },
  handleForgetError(state, payload) {
    state.forgetError = payload;
  },
  handleUserAccountError(state, payload) {
    state.handleUserAccountError = payload;
  },
  emailIsTrue(state, payload) {
    state.emailIsTrue = payload;
  },
  setUserToken(state, payload) {
    state.usertoken = payload;
  },
  setLogout(state, payload) {
    state.logOut = payload;
  },
  // User Logout
  userLogOut(state) {
    localStorage.removeItem("user-list-token");
    state.logOut = false;
    state.usertoken = "";
    (state.listName = ""),
      (state.listId = ""),
      (state.taskError = ""),
      $nuxt.$router.push("/login");
  },
  setUserLogOut(state, payload) {
    state.logOut = payload;
  },
  // set token
  setToken(state, payload) {
    state.usertoken = payload;
  },
  // set error after signin
  setErrorToDefault(state) {
    state.signInError = "";
    state.signUpError = "";
    state.forgetError = "";
    state.handleUserAccountError = "";
  },
  // get all my posts
  getMyAllLists(state, payload) {
    state.myPosts = payload;
  },
  // set gettasks
  setTasks(state, payload) {
    state.tasks = null;
    state.tasks = payload;
  },
  // set list name
  setListName(state, payload) {
    state.listName = payload;
  },
  // get list id
  setListId(state, payload) {
    state.listId = payload;
  },
  // loader
  setLoader(state, payload) {
    state.showLoader = payload;
  },
  setTastEror(state, payload) {
    state.taskError = payload;
  },
};
export const actions = {
  // Sign In Function
  async userSignUp({ commit }, payload) {
    try {
      let userDataSingUp = await axios.post(
        `https://todo-list45.herokuapp.com/api/user/register`,
        payload
      );
      console.log(userDataSingUp);
      localStorage.setItem("user-list-token", userDataSingUp.data.token);
      commit("setUserToken", userDataSingUp.data.token);
      commit("setLogout", true);

      $nuxt.$router.push("/");
    } catch (error) {
      commit("handleSignUpError", error.response.data.message);
    }
  },
  // Sign Up Function
  async userSignIn({ commit }, payload) {
    try {
      let userDataSignIn = await axios.post(
        `https://todo-list45.herokuapp.com/api/user/login`,
        payload
      );
      console.log(userDataSignIn);
      localStorage.setItem("user-list-token", userDataSignIn.data.token);
      commit("setUserToken", userDataSignIn.data.token);
      commit("setLogout", true);
      commit("setErrorToDefault");
      $nuxt.$router.push("/");
    } catch (error) {
      commit("handleSignInError", error.response.data.message);
    }
  },
  // Rest User Account
  async restUserAccount({ commit }, payload) {
    console.log(payload);
    try {
      let getRestUserAccount = await axios.post(
        `https://todo-list45.herokuapp.com/api/user/forgetPassword`,
        {
          email: payload,
        }
      );
      console.log(getRestUserAccount);

      commit("emailIsTrue", true);
    } catch (error) {
      commit("handleForgetError", error.response.data.message);
    }
  },
  async restAccountNow({ commit }, payload) {
    let code = payload.code;
    let userPass = {
      password: payload.password,
      confirmPassword: payload.confirmPassword,
    };
    try {
      let getRestUserAccount = await axios.post(
        `https://todo-list45.herokuapp.com/api/user/restPassword/${code}`,
        userPass
      );
      $nuxt.$router.push("/login");
      commit("emailIsTrue", false);
      $nuxt.$router.push("/login");
    } catch (error) {
      commit("handleUserAccountError", error.response.data.message);
    }
  },
  async GetAllMyList({ commit, state }) {
    commit("setLoader", true);
    try {
      let getMyLists = await axios.get(
        `https://todo-list45.herokuapp.com/api/list/
      `,
        {
          headers: {
            "x-auth-token": `${state.usertoken}`,
          },
        }
      );
      commit(
        "getMyAllLists",
        getMyLists.data.list.reverse().slice(0, getMyLists.data.list.length)
      );
      commit("setLoader", false);
      console.log(getMyLists.data.list.reverse());
    } catch (error) {
      commit("setLoader", false);
      console.log(error.response.data.message);
    }
  },
  // Add List
  async addList({ dispatch, state }, payload) {
    try {
      let listAdded = await axios.post(
        `https://todo-list45.herokuapp.com/api/list/createList`,
        {
          list: payload,
        },
        {
          headers: {
            "x-auth-token": `${state.usertoken}`,
          },
        }
      );
      // console.log(listAdded.data.list);
      // state.myPosts.push(listAdded.data.list);
      dispatch("GetAllMyList");
    } catch (error) {
      console.log(error.response.data.message);
    }
  },

  async deleteList({ dispatch }, payload) {
    try {
      await axios.delete(
        `https://todo-list45.herokuapp.com/api/list/deleteList/${payload}`
      );
      dispatch("GetAllMyList");
    } catch (error) {
      console.log(error.response.data.message);
    }
  },
  // get tasks
  async getTasksFun({ commit }, payload) {
    commit("setLoader", true);
    try {
      let gettask = await axios.get(
        `https://todo-list45.herokuapp.com/api/task/${payload}`
      );
      commit("setTasks", gettask.data.task);
      commit("setLoader", false);
      console.log(gettask);
    } catch (error) {
      commit("setLoader", false);
      console.log(error);
    }
  },
  // add Tasks
  async addTaskFun({ state, dispatch, commit }, payload) {
    commit("setLoader", true);
    try {
      let createTask = await axios.post(
        `https://todo-list45.herokuapp.com/api/task/createTask/${state.listId}`,
        payload
      );
      dispatch("getTasksFun", state.listId);
      commit("setLoader", false);
    } catch (error) {
      commit("setLoader", false);
      commit("setTastEror", error.response.data.message);
    }
  },
  // make task completed
  async completeTask({ state, dispatch, commit }, payload) {
    commit("setLoader", true);
    const id = payload.taskId;
    const taskcompleteStatus = !payload.taskcompleteStatus;
    console.log(id, taskcompleteStatus);
    try {
      let completed = await axios.patch(
        `https://todo-list45.herokuapp.com/api/task/updateTask/${id}/${taskcompleteStatus}`
      );
      // dispatch("getTasksFun", state.listId);
      commit("setLoader", false);
      dispatch("getTasksFun", state.listId);
    } catch (error) {
      commit("setLoader", false);
      // commit("setTastEror",error.response.data.message)
    }
  },
};

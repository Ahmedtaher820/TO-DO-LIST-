import axios from "axios";
export const state = () => ({
  signUpError: "",
  signInError: "",
  forgetError: "",
  handleUserAccountError: "",
  emailIsTrue: false,
  usertoken: "",
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
    state.userToken = payload;
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
      commit("setUserToken", userDataSignIn.data.token);

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
          email: "ahmed820369@gmail.com",
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
      localStorage.setItem("user-list-token", getRestUserAccount.data.token);
      console.log(getRestUserAccount);
      commit("emailIsTrue", true);
    } catch (error) {
      commit("handleUserAccountError", error.response.data.message);
    }
  },
  // Add List
  async addList({ commit, state }, payload) {
    // let userToken = JSON.parse(localStorage.getItem("user-list-token"));
    // console.log(userToken)
    console.log(state.userToken);
    try {
      let listAdded = await axios.post(
        `https://todo-list45.herokuapp.com/api/list/createList`,
        {
          headers: {
            "x-auth-token": `{{eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmU3MzJlODljNGNmNmEyNDc3MjhiNDAiLCJpYXQiOjE2NTkzNjU4MzB9.vykYVUYrTcrf3xuMBWfFs5mfqec6wk_-H5TE4E7nVrM}}`,
          },
        },
        payload
      );
      console.log(listAdded);
    } catch (error) {
      console.log(error.response.data.message);
    }
  },
};

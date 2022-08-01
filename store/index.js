import axios from "axios";
export const state = () => ({
  signUpError:'',
  signInError:'',
  forgetError:'',
  handleUserAccountError:'',
  emailIsTrue:false
});
export const mutations = {
  handleSignUpError(state,payload){
    state.signUpError = payload
  },
  handleSignInError(state,payload){
    state.signInError = payload
  },
  handleForgetError(state,payload){
    state.forgetError = payload
  },
  handleUserAccountError(state,payload){
    state.handleUserAccountError = payload
  },
  emailIsTrue(state,payload){
    state.emailIsTrue = payload
  },


};
export const actions = {
  // Sign In Function
  async userSignUp({commit} , payload){
     try {
      let userDataSingUp = await axios.post(`https://todo-list45.herokuapp.com/api/user/register`,payload)
      console.log(userDataSingUp)
      localStorage.setItem("user-list-token",userDataSingUp.data.token)
      $nuxt.$router.push("/")
    } catch (error) {
      commit("handleSignUpError" , error.response.data.message)
    }
  },
  // Sign Up Function
  async userSignIn({commit},payload){
    try {
      let userDataSignIn = await axios.post(`https://todo-list45.herokuapp.com/api/user/login`,payload)
      console.log(userDataSignIn)
      localStorage.setItem("user-list-token",userDataSignIn.data.token)
      router.push("/")
    } catch (error) {
      commit("handleSignInError",error.response.data.message)
    }
  },
  // Rest User Account
  async restUserAccount({commit},payload){
    console.log(payload)
    try {
      let getRestUserAccount = await axios.post(`https://todo-list45.herokuapp.com/api/user/forgetPassword`,{
        email:"ahmed820369@gmail.com"
      })
      console.log(getRestUserAccount)
      commit("emailIsTrue",true)
    } catch (error) {
      commit("handleForgetError",error.response.data.message)
    }
  },
  async restAccountNow({commit},payload){
    let code = payload.code;
    let userPass = {
      password:payload.password,
      confirmPassword:payload.confirmPassword,
    }
    try {
      let getRestUserAccount = await axios.post(`https://todo-list45.herokuapp.com/api/user/restPassword/${code}`,userPass)
      localStorage.setItem("user-list-token",getRestUserAccount.data.token)
      console.log(getRestUserAccount)
      commit("emailIsTrue",true)
    } catch (error) {
      commit("handleUserAccountError",error.response.data.message)
    }
  }
}

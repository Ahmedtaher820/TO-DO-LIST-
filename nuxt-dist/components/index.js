export const MyList = () => import('../..\\components\\my-list.vue' /* webpackChunkName: "components/my-list" */).then(c => wrapFunctional(c.default || c))
export const Task = () => import('../..\\components\\task.vue' /* webpackChunkName: "components/task" */).then(c => wrapFunctional(c.default || c))
export const Tasks = () => import('../..\\components\\tasks.vue' /* webpackChunkName: "components/tasks" */).then(c => wrapFunctional(c.default || c))
export const AuthConfirmAccount = () => import('../..\\components\\auth\\confirm-account.vue' /* webpackChunkName: "components/auth-confirm-account" */).then(c => wrapFunctional(c.default || c))
export const AuthConfirmEmail = () => import('../..\\components\\auth\\confirm-email.vue' /* webpackChunkName: "components/auth-confirm-email" */).then(c => wrapFunctional(c.default || c))
export const AuthRightBox = () => import('../..\\components\\auth\\right-box.vue' /* webpackChunkName: "components/auth-right-box" */).then(c => wrapFunctional(c.default || c))
export const AuthSigninSignup = () => import('../..\\components\\auth\\signin-signup.vue' /* webpackChunkName: "components/auth-signin-signup" */).then(c => wrapFunctional(c.default || c))
export const AuthSignin = () => import('../..\\components\\auth\\signin.vue' /* webpackChunkName: "components/auth-signin" */).then(c => wrapFunctional(c.default || c))
export const AuthSignup = () => import('../..\\components\\auth\\signup.vue' /* webpackChunkName: "components/auth-signup" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}

export { default as Loader } from '../..\\components\\global\\loader.vue'
export { default as MyList } from '../..\\components\\my-list.vue'
export { default as Task } from '../..\\components\\task.vue'
export { default as Tasks } from '../..\\components\\tasks.vue'
export { default as AuthConfirmAccount } from '../..\\components\\auth\\confirm-account.vue'
export { default as AuthConfirmEmail } from '../..\\components\\auth\\confirm-email.vue'
export { default as AuthRightBox } from '../..\\components\\auth\\right-box.vue'
export { default as AuthSigninSignup } from '../..\\components\\auth\\signin-signup.vue'
export { default as AuthSignin } from '../..\\components\\auth\\signin.vue'
export { default as AuthSignup } from '../..\\components\\auth\\signup.vue'

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

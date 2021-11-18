import userAuth from './modules/auth'
import product from './modules/product'
import cookie from 'cookie'

export const actions = {
  async nuxtServerInit({ dispatch, state }, context) {
    try {
      if (context.req && context.req.headers && context.req.headers.cookie) {
        const cookies = cookie.parse(context.req.headers.cookie || '')
        const key = cookies['auth.user']
        this.$auth.$storage.setUniversal('user', JSON.parse(key))
      }
    } catch (error) {
      console.error('auth status', error)
    }
  }
}

export const modules = {
  userAuth,
  product
}

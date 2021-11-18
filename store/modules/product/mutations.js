import * as constant from './constant'

export default {
  [constant.SET_PRODUCTS]: (state, payload) => (state.products = payload)
}

import * as constant from './constant'

export default {
  [constant.SET_LOGIN_STATUS]: (state, payload) => (state.isLogin = payload),
  [constant.SET_USER]: (state, payload) => (state.user = payload)
}

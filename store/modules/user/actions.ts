import { ActionTree } from 'vuex'
import { AxiosResponse } from 'axios'
import { UserState } from './state'
import { RootState } from '@/store'

const actions: ActionTree<UserState, RootState> = {
  async getUserProfile() {
    let response: AxiosResponse<any>
    try {
      response = await this.$axios({
        method: 'POST',
        url: '/api/users/profile'
      })
      response = response.data
    } catch (error: any) {
      console.error(error.message)
      response = error.response
    }
    return response
  }
}
export default actions

import * as constant from './constant'

const API_PATH = '/api/v1/products'
const actions = {
  async fetchProducts({ commit }, params = {}) {
    try {
      const { page, pageSize } = params
      let q = '?'
      if (page && pageSize) q += `page=${page}&pageSize=${pageSize}`
      const { data } = await this.$axios.$get(`${API_PATH}${q != '?' ? q : ''}`)
      return data
    } catch (err) {
      throw new Error(err.response ? err.response.data.error_message : err)
    }
  }
}
export default actions

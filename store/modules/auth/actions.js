const actions = {
  async getUserProfile() {
    let response
    try {
      response = await this.$axios({
        method: 'POST',
        url: '/api/users/profile'
      })
      response = response.data
    } catch (error) {
      console.error(error.message)
      response = error.response
    }
    return response
  }
}
export default actions

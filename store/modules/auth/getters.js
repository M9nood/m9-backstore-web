export default {
  getUserLoginStatus: (state) => state.isLogin,
  getUserProfile: (state) => (state.user ? state.user : null),
  getUserPermission: (state) => (state.user ? state.user.permissions : []),
  getUsername: (state) => state.user.profile.username
}

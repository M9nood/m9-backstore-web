<template>
  <div>
    <div class="logo">
      <NuxtLink class="mar-l-2" to="/">Retita</NuxtLink>
    </div>
    <div class="menu-right">
      <a href="">{{ $auth.user ? $auth.user.username : '' }}</a>
      <a-button v-if="$auth.loggedIn" type="primary" @click="logout"> Logout </a-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  display: contents;
}
.menu-right {
  float: right;
}
</style>

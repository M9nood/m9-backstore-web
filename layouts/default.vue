<template>
  <div id="app">
    <a-layout>
      <a-layout-header class="nav-header">
        <NuxtLink class="mar-l-2" to="/">Retita</NuxtLink>
        <a-button v-if="$auth.loggedIn" type="primary" @click="logout"> Logout </a-button>
      </a-layout-header>
      <a-layout-content>
        <div class="content-container">
          <Nuxt />
        </div>
      </a-layout-content>
      <a-layout-footer></a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  background-color: $background-primary;
  height: 100vh;
}
.content-container {
  width: auto;
  max-width: 948px;
  margin: auto;
  padding: $padding-xl 0;
}
.nav-header {
  color: $color-white;
}
</style>

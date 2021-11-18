<template>
  <a-layout id="app">
    <a-layout-header class="header nav-header">
      <OrgHeaderNavBar />
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout style="padding: 24px 0; background: #fff; flex-direction: row">
        <OrgNavSider />
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          <Nuxt />
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<style lang="scss" scoped>
#app {
  background-color: $background-primary;
  // height: 100vh;
}
#app .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
.content-container {
  width: 100%;
  // max-width: 1024px;
  margin: auto;
  padding: $padding-xl 0;
}
.nav-header {
  color: $color-white;
}
</style>

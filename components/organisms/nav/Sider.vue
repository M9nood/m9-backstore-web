<template>
  <a-layout-sider width="200" style="background: #fff">
    <a-menu
      mode="inline"
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      style="height: 100%"
      @select="handleSelect"
    >
      <a-menu-item key="item1" value="/dashboard"
        ><a-icon type="area-chart" /> Dashboard
      </a-menu-item>
      <a-sub-menu key="item2">
        <span slot="title"><a-icon type="tags" /> Product</span>
        <a-menu-item key="item2-1" value="/products"> Product List </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  methods: {
    handleSelect({ item, key }) {
      this.$router.push({ path: item.value })
    }
  }
}
</script>

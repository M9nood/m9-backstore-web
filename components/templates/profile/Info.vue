<template>
  <div id="profile">
    <div class="pf--box">
      <LazyOrgProfileOverview :user="user" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  props: {
    user: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.pf {
  &--box {
    background-color: $color-white;
    border-radius: $radius-m;
  }
}
</style>

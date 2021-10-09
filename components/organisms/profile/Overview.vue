<template>
  <div id="pf-overview">
    <LazyMolBannerCover />
    <a-row>
      <a-col class="pad-a-3">
        <LazyAtomAvatarProfile />
        <div class="mar-y-1">
          <div class="title">{{ user.name }}</div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
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
#pf-overview {
  .title {
    font-size: $font-heading-1;
  }
}
</style>

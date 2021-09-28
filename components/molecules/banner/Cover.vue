<template>
  <div class="cover-container">
    <img :src="image" class="cover-image radius-top-left-2 radius-top-right-2" alt="" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    image: {
      type: String,
      default:
        'http://1.bp.blogspot.com/_Ym3du2sG3R4/S_-M_kTV9OI/AAAAAAAACZA/SNCea2qKOWQ/s1600/mac+os+x+wallpaper.jpg'
    }
  }
})
</script>
<style lang="scss" scoped>
.cover {
  &-image {
    height: 250px;
    width: 100%;
    object-fit: cover;
    background-position: center;
  }
}
</style>

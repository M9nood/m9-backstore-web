<template>
  <div>Product</div>
</template>

<script>
export default {
  async mounted() {
    let data = await this.$store.dispatch('product/fetchProducts')
    console.log('data', data)
  }
}
</script>

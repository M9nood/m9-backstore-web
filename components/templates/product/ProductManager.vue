<template>
  <div>
    <div>Product</div>
    <div>
      <LazyOrgProductTableManager :data="data" :total="total" @fetch="fetchData" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    total: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {}
  },
  methods: {
    fetchData(q) {
      this.$emit('fetch', q)
    }
  }
}
</script>

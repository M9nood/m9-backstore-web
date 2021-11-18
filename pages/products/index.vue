<template>
  <div>
    <LazyTemProductManager :data="datas" :total="totalRows" @fetch="fetchData" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      datas: [],
      totalRows: 0,
      queryInfo: {
        page: 1,
        pageSize: 10
      }
    }
  },
  async mounted() {
    await this.fetchData()
  },
  methods: {
    ...mapActions('product', ['fetchProducts']),
    async fetchData(q = {}) {
      this.queryInfo = { ...this.queryInfo, ...q }
      let data = await this.fetchProducts(this.queryInfo)
      this.datas = data.products
      this.totalRows = data.totalRows
    }
  }
}
</script>

<template>
  <LazyMolTableDataTable
    :columns="columns"
    :items="data"
    :total="total"
    @update-data="handleTableChange"
  >
    <template slot="disp_code" slot-scope="item">
      <span style="color: red"> {{ item.item.disp_code }}</span>
    </template>
    <template slot="image_key" slot-scope="item">
      <a-avatar shape="square" :size="64" :src="item.item.image_key" />
    </template>
  </LazyMolTableDataTable>
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
    return {
      columns: [
        {
          title: '',
          dataIndex: 'image_key',
          key: 'image_key',
          scopedSlots: { customRender: 'image_key' },
          width: 100
        },
        {
          title: 'Code',
          dataIndex: 'disp_code',
          key: 'disp_code',
          scopedSlots: { customRender: 'disp_code' },
          width: 120
        },
        {
          title: 'Name',
          dataIndex: 'product_name',
          key: 'product_name'
        }
      ]
    }
  },
  methods: {
    handleTableChange({ pagination, filters, sorter }) {
      this.$emit('fetch', {
        page: pagination.current,
        pageSize: pagination.pageSize
      })
    }
  }
}
</script>

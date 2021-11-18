<template>
  <a-table
    :columns="columns"
    :data-source="items"
    :loading="loading"
    :row-key="(record, index) => index"
    :pagination="pagination"
    @change="handleTableChange"
  >
    <template v-for="slotName in slotNames" :slot="slotName" slot-scope="text, record">
      <slot :item="(text, record)" :name="slotName" />
    </template>
  </a-table>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      default() {
        return []
      }
    },
    items: {
      type: Array,
      default() {
        return []
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    total: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      slotNames: null,
      pagination: {
        total: 0,
        showSizeChanger: true,
        pageSize: 10
      }
    }
  },
  mounted() {
    this.slotNames = Object.keys(this.$scopedSlots)
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {
      this.$emit('update-data', { pagination, filters, sorter })
    }
  },
  watch: {
    total: {
      handler(v) {
        this.pagination.total = v
      },
      deep: true
    }
  }
}
</script>

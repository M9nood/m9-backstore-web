<template>
  <div id="register">
    <a-row>
      <a-col :span="12">
        <LazyTemRegisterForm />
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

interface Data {}
export default Vue.extend({
  async asyncData({ store }) {},
  data(): Data {
    return {}
  },
  methods: {
    ...mapActions({})
  }
})
</script>

<style lang="scss" scoped></style>

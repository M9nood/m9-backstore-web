<template>
  <div id="register">
    <a-row>
      <a-col :span="12">
        <LazyTemRegisterForm />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  async asyncData({ store }) {},
  data() {
    return {}
  },
  methods: {
    ...mapActions({})
  }
}
</script>

<style lang="scss" scoped></style>

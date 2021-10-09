<template>
  <div id="login">
    <a-row>
      <a-col :span="12">
        <LazyTemLoginForm />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  asyncData({ store }) {},
  data() {
    return {}
  },
  methods: {
    ...mapActions({})
  }
}
</script>

<style lang="scss" scoped>
#login {
  min-height: 400px;
}
</style>

<template>
  <LazyTemProfileInfo :user="user" />
</template>

<script>
import { mapActions } from 'vuex'

export default {
  middleware: 'auth',
  async asyncData({ store }) {},
  data() {
    return {
      user: {}
    }
  },
  mounted() {
    console.log('user', this.$auth.$storage.getCookie('user'))
  },
  methods: {
    ...mapActions({})
  }
}
</script>

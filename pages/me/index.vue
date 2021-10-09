<template>
  <LazyTemProfileInfo :user="user" />
</template>

<script>
import { mapActions } from 'vuex'

export default {
  middleware: 'auth',
  async asyncData({ store }) {
    // const user = await store.dispatch('user/getUserProfile')
    // return {
    //   user
    // }
  },
  data() {
    return {
      user: {}
    }
  },
  methods: {
    ...mapActions({})
  }
}
</script>

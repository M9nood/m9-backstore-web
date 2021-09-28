<template>
  <LazyTemProfileInfo :user="user" />
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

interface Data {
  user: Object
}
export default Vue.extend({
  async asyncData({ store }) {
    const user = await store.dispatch('user/getUserProfile')
    return {
      user
    }
  },
  data(): Data {
    return {
      user: {}
    }
  },
  methods: {
    ...mapActions({})
  }
})
</script>

<template>
  <div>env {{ env }}</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  asyncData({ redirect }) {
    // redirect('/login')
  },
  data() {
    return {
      env: process.env.NODE_ENV
    }
  }
})
</script>

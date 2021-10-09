<template>
  <div>env {{ env }}</div>
</template>

<script>
export default {
  asyncData({ redirect }) {
    // redirect('/login')
  },
  data() {
    return {
      env: process.env.NODE_ENV
    }
  }
}
</script>

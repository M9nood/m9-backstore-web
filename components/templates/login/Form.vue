<template>
  <form @submit="login">
    <input v-model="username" type="text" name="username" />
    <input v-model="password" type="password" name="password" />
    <button type="submit">Login</button>
  </form>
</template>
<script>
import { hashSHA1 } from '@/utils/sha1'

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login(e) {
      e.preventDefault()
      const passHash = hashSHA1(this.password)
      const payload = {
        username: this.username,
        password: passHash
      }
      try {
        await this.$auth.loginWith('local', {
          data: payload
        })
        this.$router.push('/me')
      } catch (err) {
        console.log('err', err.response)
        this.$router.push('/login')
      }
    }
  }
}
</script>

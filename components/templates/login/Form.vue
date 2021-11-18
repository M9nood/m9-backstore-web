<template>
  <a-form-model :model="form" @submit="login" @submit.native.prevent>
    <a-form-model-item>
      <a-input v-model="form.username" placeholder="Username">
        <a-icon slot="prefix" type="user" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item>
      <a-input v-model="form.password" type="password" placeholder="Password">
        <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item>
      <a-button
        type="primary"
        html-type="submit"
        :disabled="form.username === '' || form.password === ''"
      >
        Log in
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>

<script>
import { hashSHA1 } from '@/utils/sha1'

export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async login(e) {
      e.preventDefault()
      const passHash = hashSHA1(this.form.password)
      const payload = {
        username: this.form.username,
        password: passHash
      }
      try {
        const {
          data: { data }
        } = await this.$auth.loginWith('local', {
          data: payload
        })
        this.$auth.$storage.setUniversal('user', data)
        this.$auth.setUser(data)
        this.$router.push('/me')
      } catch (err) {
        this.$router.push('/login')
      }
    }
  }
}
</script>

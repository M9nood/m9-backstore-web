<template>
  <div id="t-register--form">
    <h3>Register</h3>
    <a-form-model ref="registerForm" :model="form" :rules="rules">
      <a-form-model-item has-feedback label="Username" prop="username">
        <a-input v-model="form.username" autocomplete="off" />
      </a-form-model-item>
      <a-form-model-item has-feedback label="Password" prop="password">
        <a-input v-model="form.password" type="password" autocomplete="off" />
      </a-form-model-item>
      <a-form-model-item has-feedback label="Confirm" prop="confirmPassword">
        <a-input v-model="form.confirmPassword" type="password" autocomplete="off" />
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="submitForm('registerForm')"> Submit </a-button>
        <a-button style="margin-left: 10px" @click="resetForm('form')"> Reset </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { FormModel } from 'ant-design-vue'

Vue.use(FormModel)

interface Data {
  form: {
    username: String
    password: String
    confirmPassword: String
    name: String
  }
  rules: Object
}

export default Vue.extend({
  data(): Data {
    const validatePass = (rule: any, value: any, callback: any) => {
      if (value === '') {
        callback(new Error('Please input the password'))
      } else {
        if (this.form.confirmPassword !== '') {
          this.$refs.registerForm.validateField('confirmPassword')
        }
        callback()
      }
    }
    const validatePass2 = (rule: any, value: any, callback: any) => {
      if (value === '') {
        callback(new Error('Please input the password again'))
      } else if (value !== this.form.password) {
        callback(new Error("Two inputs don't match!"))
      } else {
        callback()
      }
    }
    return {
      form: {
        username: '',
        password: '',
        confirmPassword: '',
        name: ''
      },
      rules: {
        username: [{ required: true }],
        password: [{ validator: validatePass, trigger: 'change' }],
        confirmPassword: [{ validator: validatePass2, trigger: 'change' }]
      }
    }
  },
  methods: {
    submitForm(formName: string) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(valid, 'valid')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
})
</script>

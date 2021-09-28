<template>
  <a-form layout="vertical" :form="form">
    <a-form-item
      label="Username"
      :validate-status="userNameError() ? 'error' : ''"
      :help="userNameError() || ''"
    >
      <a-input
        v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] }
        ]"
        placeholder="Username"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-item>
    <a-form-item
      label="Password"
      :validate-status="passwordError() ? 'error' : ''"
      :help="passwordError() || ''"
    >
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] }
        ]"
        type="password"
        placeholder="Password"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit" :disabled="hasErrors"> Log in </a-button>
    </a-form-item>
  </a-form>
</template>

<script lang="ts">
import Vue from 'vue'
import { WrappedFormUtils } from 'ant-design-vue/types/form/form'

interface Data {
  form: WrappedFormUtils
}

export default Vue.extend({
  data() {
    return {
      form: this.$form.createForm(this, { name: 'vertical_login' })
    }
  },
  computed: {
    hasErrors(): boolean {
      const fieldsError = this.form.getFieldsError()
      return Object.keys(fieldsError).length !== 0
    }
  },
  mounted() {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields()
    })
  },
  methods: {
    // Only show error after a field is touched.
    userNameError(): boolean {
      return false
    },
    // Only show error after a field is touched.
    passwordError(): boolean {
      return false
    }
  }
})
</script>

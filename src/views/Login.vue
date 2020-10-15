<template>
  <div class="login__container">
    <LoginForm/>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
export default {
  components: {
    LoginForm
  }
}
</script>

<style scoped>
.login__container {
  height: 100%;
  background-color: rgb(145, 145, 252);
}
</style>
<template>
    <div class="login">
        <div class="login-form">
            <div>
                <label>
                    <input placeholder="login" v-model="login"/>
                </label>
            </div>
            <div v-show="login !== ''">
                <label>
                    <input placeholder="password" v-model="password"/>
                </label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      login: '',
      password: ''
    }
  }
}
</script>

<style scoped>
    .login {
        display: flex;
        align-items: center;
        vertical-align: center;
        justify-content: center;
    }

    .login-form {
        padding: 50px;
        display: flex;
    }
</style>

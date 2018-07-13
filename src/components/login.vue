<template>
    <div class="login">
        <div class="login-form">
            <div>
                <label>
                    <input placeholder="login"/>
                </label>
            </div>
            <div>
                <label>
                    <input placeholder="password"/>
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
        flex-shrink: 1;
    }
    .login-form {
        height: 100px;
        display: flex;
    }
</style>

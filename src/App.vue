<template>
    <div id="app">
        <app-header
                v-if="loggedIn"
                @date-change="onDateChangeHandler"
                @logout="logoutHandler"
                :auth="auth"
        ></app-header>
        <login v-if="!loggedIn" @login="loginHandler" :auth="auth"></login>
        <router-view class="content" :selectedDate="date" v-else-if="date !== null" />
    </div>
</template>

<script>
import AppHeader from './components/app-header'
import Login from './components/login'
import Auth from './utils/Auth'

export default {
  name: 'app',
  components: { Login, AppHeader },
  mounted () {
  },
  data: function () {
    return {
      date: null,
      loggedIn: Auth.loggedIn(),
      auth: Auth
    }
  },
  methods: {
    onDateChangeHandler: function (date) {
      this.date = date
    },
    loginHandler: function () {
      this.loggedIn = true
      this.$router.replace({name: 'DailyList'})
    },
    logoutHandler: function () {
      Auth.logout()
      this.loggedIn = false
    }
  }
}
</script>

<style lang="css">
    #app, .content {
        height: 100%;
    }
</style>

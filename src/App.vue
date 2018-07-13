<template>
    <div id="app">
        <app-header v-if="loggedIn" :date="date" @date-change="onDateChangeHandler" @logout="logoutHandler"></app-header>
        <login v-if="!loggedIn" @login="loginHandler"></login>
        <router-view class="content" :selectedDate="date" v-else-if="date !== null" />
    </div>
</template>

<script>
import AppHeader from './components/app-header'
import Login from './components/login'

export default {
  name: 'app',
  components: { Login, AppHeader },
  data: function () {
    return {
      date: null,
      loggedIn: false
    }
  },
  methods: {
    onDateChangeHandler: function (date) {
      this.date = date
    },
    loginHandler: function () {
      this.loggedIn = true
    },
    logoutHandler: function () {
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

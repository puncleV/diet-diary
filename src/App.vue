<template>
    <div id="app">
        <app-header v-if="loggedIn" :date="date" @date-change="onDateChangeHandler"></app-header>
        <router-view class="content" :selectedDate="date" v-if="!loggedIn || date !== null" @login="loginHandler"/>
    </div>
</template>

<script>
import AppHeader from './components/app-header'

export default {
  name: 'app',
  components: { AppHeader },
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
      console.log('login')
    }
  }
}
</script>

<style lang="css">
    #app, .content {
        height: 100%;
    }
</style>

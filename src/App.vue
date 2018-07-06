<template>
    <div id="app">
        <app-header :date="date" @date-change="onDateChangeHandler"></app-header>
        <router-view :selectedDate="date" v-if="date !== null"/>
    </div>
</template>

<script>
import AppHeader from './components/app-header'

export default {
  name: 'app',
  components: { AppHeader },
  data: function () {
    return {
      date: null
    }
  },
  methods: {
    onDateChangeHandler: function (date) {
      this.date = date
    }
  }
}
</script>

<style lang="css">

</style>

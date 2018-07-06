<template>
    <div id="app">
        <label>
            Date:
            <input type="date" v-model="date"/>
        </label>

        <router-view :selectedDate="date" v-if="date !== null"/>
    </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      date: null
    }
  }
}
</script>

<style lang="css">

</style>

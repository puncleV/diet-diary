<template>
    <div>
        <label>
            Date:
            <input type="date" v-model="date"/>
        </label>
    </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'AppHeader',
  data: function () {
    return {
      date: null
    }
  },
  watch: {
    date: function (a) {
      this.$emit('date-change', a)
    }
  }
}
</script>

<style scoped>

</style>

<template>
    <div>
        <food-list v-for="group in groups" :key="group" :group="group"></food-list>
    </div>
</template>

<script>
import FoodList from './food-list'
export default {
  name: 'DailyList',
  components: {FoodList},
  props: ['selectedDate'],
  data: function () {
    return {
      groups: [
        'breakfast',
        'morningSnack',
        'lunch',
        'eveningSnack',
        'dinner',
        'lateSnack'
      ]
    }
  }
}
</script>

<style scoped>

</style>

<template>
    <div>
        <table>
            <thead>
            <tr>
                <th title="dish name">dish</th>
                <th title="weight">w</th>
                <th title="carbohydrates">c</th>
                <th title="fats">f</th>
                <th title="proteins">p</th>
                <th title="kcal">kcal</th>
            </tr>
            </thead>
            <food-list v-for="group in groups" :key="group" :name="group.name" :data="group.data"></food-list>
        </table>

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
        {
          name: 'breakfast',
          data: [{
            id: 1,
            name: 'tasty dish',
            weight: 228,
            carbohydrates: 228,
            fats: 228,
            proteins: 228,
            kcal: 228
          }]
        },
        {
          name: 'morningSnack',
          data: [{
            id: 1,
            name: 'tasty dish',
            weight: 228,
            carbohydrates: 228,
            fats: 228,
            proteins: 228,
            kcal: 228
          }]
        },
        {
          name: 'lunch',
          data: [{
            id: 1,
            name: 'tasty dish',
            weight: 228,
            carbohydrates: 228,
            fats: 228,
            proteins: 228,
            kcal: 228
          }]
        },
        {
          name: 'eveningSnack',
          data: [{
            id: 1,
            name: 'tasty dish',
            weight: 228,
            carbohydrates: 228,
            fats: 228,
            proteins: 228,
            kcal: 228
          }]
        },
        {
          name: 'dinner',
          data: [{
            id: 1,
            name: 'tasty dish',
            weight: 228,
            carbohydrates: 228,
            fats: 228,
            proteins: 228,
            kcal: 228
          }]
        },
        {
          name: 'lateSnack',
          data: [{
            id: 1,
            name: 'tasty dish',
            weight: 228,
            carbohydrates: 228,
            fats: 228,
            proteins: 228,
            kcal: 228
          }]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>

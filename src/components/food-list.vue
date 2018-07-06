<template>
    <tbody>
        <tr>
            <td colspan="5">{{name}}</td>
        </tr>
        <tr v-for="item in data" :key="item.id">
            <td>{{item.name}}</td>
            <td>{{item.weight}}</td>
            <td>{{item.carbohydrates}}</td>
            <td>{{item.fats}}</td>
            <td>{{item.proteins}}</td>
            <td>{{item.kcal}}</td>
        </tr>
        <tr>
            <td colspan="5" @click="onAddDishPress">+</td>
        </tr>
        <modal-dialog v-if="addInProgress" @close="addDish">
            <div slot="body">
                <autocomplete
                        :items="dishes"
                        v-model="dishToAdd"
                        :get-label="getLabel"
                        :component-item='dishTemplate'
                        @update-items="updateItems"
                >
                </autocomplete>
            </div>
        </modal-dialog>
    </tbody>
</template>

<script>
import ModalDialog from './modal-dialog'
import Autocomplete from 'v-autocomplete'
import Dish from './dish'

export default {
  name: 'FoodList',
  components: {
    ModalDialog,
    Autocomplete
  },
  props: ['name', 'data'],
  data: function () {
    return {
      addInProgress: false,
      // todo backend
      dishes: [{
        name: 'aaa',
        description: 'bbb'
      },
      {
        name: 'ccc',
        description: 'zzz'
      }],
      dishToAdd: {
        name: 'aaa',
        description: 'bbb'
      },
      dishTemplate: Dish
    }
  },
  methods: {
    onAddDishPress: function () {
      this.addInProgress = true
    },
    addDish: function () {
      this.addInProgress = false
      this.dishes = []
    },
    getLabel (item) {
      return item.name
    },
    updateItems (a) {
      // todo get data
    }
  }
}
</script>

<style scoped>

</style>

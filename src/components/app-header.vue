<template>
    <div class="app-header">
        <div>
            <label>
                Date:
                <input type="date" v-model="date"/>
            </label>
            <div>
                {{currentKcal | kcalPrettify}}/{{maxKcal | kcalPrettify}} kcal
                {{currentCarbohydrates | nutritionalValuePrettify}}/{{maxCarbohydrates | nutritionalValuePrettify}} carbohydrates
                {{currentProteins | nutritionalValuePrettify}}/{{maxProteins | nutritionalValuePrettify}} proteins
                {{currentFats | nutritionalValuePrettify}}/{{maxFats | nutritionalValuePrettify}} fats
            </div>
        </div>
        <div class="parameters">
            <editable-label :label="'weight'" :currentValue="weight" @confirm="onWeightConfirm"></editable-label>
            <editable-label :label="'chest'" :currentValue="chest" @confirm="onChestConfirm"></editable-label>
            <editable-label :label="'waist'" :currentValue="waist" @confirm="onWaistConfirm"></editable-label>
            <editable-label :label="'thighs'" :currentValue="thighs" @confirm="onThighsConfirm"></editable-label>
        </div>
    </div>
</template>

<script>
import EditableLabel from './editable-label'
export default {
  name: 'AppHeader',
  components: {EditableLabel},
  created: function () {
    this.date = new Date().toISOString().replace(/T.*/, '')
  },
  data: function () {
    return {
      date: null,
      maxKcal: 0,
      currentKcal: 0,
      currentCarbohydrates: 0,
      currentProteins: 0,
      currentFats: 0,
      maxCarbohydrates: 0,
      maxProteins: 0,
      maxFats: 0,
      weight: 0,
      chest: null,
      waist: null,
      thighs: null,
      weightEdit: true,
      chestEdit: true,
      waistEdit: true,
      thighsEdit: true
    }
  },
  methods: {
    /**
     * editable
     *
     * @param {string|null} value - current input value
     * @param {boolean} edit - edit mode is on
     */
    editable: function (value, edit) {
      return value === null || edit
    },
    onWeightConfirm: function (weight) {
      this.weight = weight
    },
    onChestConfirm: function (chest) {
      this.chest = chest
    },
    onWaistConfirm: function (waist) {
      this.waist = waist
    },
    onThighsConfirm: function (thighs) {
      this.thighs = thighs
    }
  },
  watch: {
    date: function (a) {
      this.$emit('date-change', a)
    }
  },
  filters: {
    kcalPrettify: (value) => value.toString().padStart(4, '-'),
    nutritionalValuePrettify: (value) => value.toString().padStart(3, '-')
  }
}
</script>

<style scoped>
    .app-header {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
    }

    .parameters {
        display: flex;
    }
</style>

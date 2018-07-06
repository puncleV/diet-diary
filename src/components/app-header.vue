<template>
    <div class="app-header">
        <div>
            <label>
                Date:
                <input type="date" v-model="date"/>
            </label>
            <div>
                {{currentKcal | kcalPrettify}}/{{maxKcal | kcalPrettify}} kcal
            </div>
        </div>
        <div>
            <label>
                weight:
                <input type="number"/>
            </label>
            <label>
                chest:
                <input type="number"/>
            </label>
            <label>
                waist:
                <input type="number"/>
            </label>
            <label>
                thighs:
                <input type="number"/>
            </label>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data: function () {
    return {
      date: null,
      maxKcal: 0,
      currentKcal: 0,
      weight: null,
      chest: null,
      waist: null,
      thighs: null
    }
  },
  watch: {
    date: function (a) {
      this.$emit('date-change', a)
    }
  },
  filters: {
    kcalPrettify: (value) => value.toString().padStart(4, '-')
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
</style>

<template>
    <div class="app-header">
        <div>
            <label>
                Date:
                <input type="date" v-model="date"/>
            </label>
            {{2}}/{{3}}
        </div>
        <div>
            <label>
                Weight:
                <input type="number"/>
            </label>
            <label>
                Chest:
                <input type="number"/>
            </label>
            <label>
                Waist:
                <input type="number"/>
            </label>
            <label>
                Thighs:
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
    .app-header {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
    }
</style>

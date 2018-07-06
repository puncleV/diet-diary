<template>
    <div>
        <label for='input' @click="edit()">
            {{label}}:
        </label>
        <input id='input' :disabled='!editMode' @keyup.enter="confirm" v-model="value" type="number"/>
    </div>
</template>

<script>
export default {
  name: 'EditableLabel',
  props: ['label', 'currentValue'],
  created: function () {
    this.value = this.currentValue
    this.editMode = !this.value
  },
  data: function () {
    return {
      value: null,
      editMode: true
    }
  },
  watch: {
    currentValue: function (newValue) {
      this.value = newValue
    }
  },
  methods: {
    confirm: function () {
      this.$emit('confirm', parseInt(this.value, 10))
      this.editMode = false
    },
    edit: function () {
      this.editMode = true
    }
  }
}
</script>

<style scoped>

</style>

<template>
    <div>
        <b>{{item.name}}</b>
        <div>{{item.description}}</div>
    </div>
</template>

<script>
export default {
  name: 'dish',
  props: ['item']
}
</script>
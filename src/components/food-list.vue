<template>
    <div>
        <div>
            food list {{group}}
        </div>
        <table>
            <thead>
                <tr>
                    <th title="weight">w</th>
                    <th title="carbohydrates">c</th>
                    <th title="fats">f</th>
                    <th title="proteins">p</th>
                    <th title="kcal">kcal</th>
                    <th title="kcal"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>a</td>
                    <td>a</td>
                    <td>a</td>
                    <td>a</td>
                    <td>a</td>
                    <td></td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>a</td>
                    <td>a</td>
                    <td>a</td>
                    <td>a</td>
                    <td>a</td>
                    <td>+</td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
export default {
  name: 'FoodList',
  props: ['group']
}
</script>

<style scoped>

</style>

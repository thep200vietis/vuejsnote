<template>
    <div>
        <p> {{ name | addDoubleZero }} </p>
        <p> {{ price | formatCurrency('$') }} </p>
    </div>
</template>
<script>
export default {
    name: 'FilterTuto',
    data() {
        return {
            name: 'thep200',
            price: 10000
        }
    }
}
</script>
<style scoped>
    div {
        color: rebeccapurple;
    }
</style>
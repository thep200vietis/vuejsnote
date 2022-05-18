<template>
    <div>
        <p>this id users has id {{ $route.params.id }}</p>
        <div>
            <p>state: {{ showotherstate }}</p>
            <p>Other: {{ shows }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'user',
    methods: {
        showmystate() {
            return this.$store.state.tuto.count
        }
    },
    computed: {
        shows() {
            return this.$store.state.tuto.count
        },
        showotherstate() {
            return this.$store.state.otuto.count
        }
    }
}
</script>
<style scoped></style>
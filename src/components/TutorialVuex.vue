<template>
    <div>
        <h1>This is my name: {{ showName }}</h1>
        <button class="btn btn-primary" v-on:click="HandleIncrementTutorial(5)">Click on tutorial</button>
        <button class="btn btn-primary" v-on:click="HandleIncrementOtherTutorial()">Click on otherTutorial</button>
        <div>
            <p>increment: {{ showState }}</p>
            <p>increment in other state: {{ showotherstate }}</p>
            <p>show getter: {{ showGetter }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TutorialVuex',
    methods: {
        HandleIncrementTutorial(val) {
            return this.$store.commit('tuto/increment', val)
        },
        HandleIncrementOtherTutorial() {
            return this.$store.dispatch('otuto/increment')
        }
    },
    computed: {
        showState() {
            return this.$store.state.tuto.count
        },
        showotherstate() {
            return this.$store.state.otuto.count
        },
        showGetter() {
            return this.$store.getters['tuto/show'](3)
        },
        showName() {
            return this.$store.state.name.mname
        }
    }
}
</script>
<style scoped></style>
<template>
    <div>
        <h2>My form</h2>
        <h3>Hello <span style="color: red;">{{name}}</span></h3>
        <label for="name">Enter your name</label>
        <input type="text" v-model="name" v-on:input="changeName(name)" class="form-control" style="width: 500px;">
    </div>
</template>

<script>
export default {
    name: 'ExProgram',
    data: function() {
        return {
            name: ''
        }
    },
    
    methods: {
        changeName(val) {
            this.$store.dispatch('name/changeName', val)
        }
    },

    created() {
        this.name = this.$store.state.name.mname
    },
}
</script>

<style scoped>

</style>
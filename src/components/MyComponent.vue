<template>
    <div class="myComponent">
        <h1 v-for="(item, index) in passMulti">{{ index}}: {{ value }} {{ item }}</h1>
        <input type="text" class="form-control" v-model="value" v-on:input="changeName()">
        
    </div>
</template>
<script>
    export default {
        name: 'MyComponent',
        data: function() {
            return {
                value: 'Thep'
            }
        },
        props: ['passMulti'],

        methods: {
            changeName: function(event) {
                this.$emit('changeNameParent', this.value)
            }
        },
    }
</script>
<style scoped>
    .myComponent input {
        width: 600px;
    }
</style>
<template>
    <div class="parent">
        <h1 style="color: green;">Day la the Cha</h1>
        <SlotChild>
            <p slot="slot2">Day la slot o the cha truyen vao</p>
            <p slot="slot1">Day la slot2 o the cha truyen vao</p>
        </SlotChild>
    </div>
</template>
<script>
import SlotChild from './slotTutorialChild.vue'
export default {
    components: {
        SlotChild
    }
}
</script>
<style>
</style>
<template>
  <div id="app" class="container">
    <router-link :to="{name: 'tuto-vuex'}">Vue</router-link> <br>
    <router-link :to="{name: 'user', params: {id: 555}}">User link</router-link> <br>
    <router-link :to="{name: 'ex-program'}">Ex program</router-link> <br>
    <router-link :to="{name: 'slot-tuto'}">Slot tutorial</router-link> <br>
    <router-link :to="{name: 'filter-tuto'}">filter tutorial</router-link> <br>
    <router-view/> 
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  color: #2c3e50;
  margin-top: 60px;
}

router-link {
  transition: margin-left 0.3s;
}
</style>
  
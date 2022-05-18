<template>
  <div>
    <div>
      <h1>List contents</h1>
      <router-link class="a-tag" :to="{name: 'user', params: {id: 555}}">Tutorial routers</router-link><br>
      <router-link class="a-tag" :to="{name: 'tuto-vuex'}">Tutorial Vuex</router-link><br>
      <router-link class="a-tag" :to="{name: 'ex-program'}">Exercise vuex program</router-link><br>
      <router-link class="a-tag" :to="{name: 'slot-tuto'}">Tutorial slot</router-link><br>
      <router-link class="a-tag" :to="{name: 'filter-tuto'}">Tutorial filter</router-link>
    </div>

    <div>
      <h1>{{ msg }} <span style="color: red;">{{ name | addDoubleZero }}</span></h1>
      <h2 v-if="status">Status: <span style="color: green;">Active</span></h2>
      <h2 v-else><span style="color: red;">Active</span></h2>
      <h2>{{ ffo() }}</h2>
      <MyComponent v-on:changeNameParent="myChange"/>
    </div>

    <div>
      <button class="btn btn-primary mt-2">Click me</button>
    </div>
  </div> 
</template>
<script>
import MyComponent from './MyComponent.vue'
export default {
  name: 'HelloWorld',
  data: function () {
    return {
      msg: "Say hello",
      status: true,
      name: 'th200',
    }
  },

  components: {
    MyComponent
  },

  computed: {
    passMulti: function() {
      return [this.msg, this.status]
    }
  },

  methods: {
    myChange: function(val) {
      this.name = val
    },

    ffo: function() {
      return this.msg = 'General Kenobi'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .a-tag {
    color: blueviolet;
    text-decoration: none;
    transition: margin-left 0.7s;
  }

  .a-tag:hover {
    margin-left: 20px;
    color: rgb(174, 111, 233);
  }

  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>

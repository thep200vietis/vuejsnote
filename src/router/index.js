import Vue from 'vue'
import Router from 'vue-router'

// import components
import HelloWorld from '@/components/HelloWorld'
import Users from '@/components/Users'
import TutorialVuex from '@/components/TutorialVuex'
import ExProgram from '@/components/ExProgram'
import SlotTutorialParent from '@/components/SlotTutorialParent'
import FilterTuto from '@/components/FilterTuto'

Vue.use(Router)

const routes = [
  {path: '/', component: HelloWorld},
  {path: '/users/:id', name: 'user', component: Users},
  {path: '/tuto-vuex', name: 'tuto-vuex', component: TutorialVuex},
  {path: '/ex-program', name: 'ex-program', component: ExProgram},
  {path: '/slot-child', name: 'slot-tuto', component: SlotTutorialParent},
  {path: '/filters', name: 'filter-tuto', component: FilterTuto}
];

// init instance of router
export default new Router({ routes }) 

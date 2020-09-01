import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/hello',
  component: () => import('../components/HelloWorld.vue')
}]

export default new VueRouter({
  routes
})
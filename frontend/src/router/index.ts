import { createRouter, createWebHistory } from 'vue-router'
import MakePollView from '../views/MakePollView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/poll:unique',
      name: 'poll',
      component: MakePollView, //Poll
    },
    {
      path: '/make-poll',
      name: 'make-poll',
      component: MakePollView,
    }
  ],
})

export default router

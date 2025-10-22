import { createRouter, createWebHistory } from 'vue-router'
import MakePollView from '../views/MakePollView.vue'
import PollView from '../views/PollView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/poll/:pollId',
      name: 'poll',
      component: PollView,
    },
    {
      path: '/make-poll',
      name: 'make-poll',
      component: MakePollView,
    }
  ],
})

export default router

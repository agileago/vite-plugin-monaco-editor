import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('../mona/Editor.vue') },
  { path: '/home/test', component: () => import('../mona/Editor.vue') },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;


import { createRouter,createWebHistory } from 'vue-router';

import LoginPage from '../components//LoginPage';    // 引入login元件檔
import HomePage from '../components/HomePage.vue';
import {auth} from '../firebase';

const routes = [{
  path: '/',
  name:'HomePage',
  component: HomePage,
  meta: {requiresAuth: true},
},
{
  path: '/login',
  name: 'LoginPage',
  component: LoginPage,
},

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL) ,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && auth.currentUser) {
    next('/')
    return;
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return;
  }

  next();
})


export default router

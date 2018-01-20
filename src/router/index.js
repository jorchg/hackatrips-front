import Vue from 'vue';
import Router from 'vue-router';
import main from '@/components/Main';
import object from '@/components/Object';
import user from '@/components/User';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: main,
    },
    {
      path: '/objeto/:id',
      name: 'Object',
      component: object,
    },
    {
      path: '/perfil',
      name: 'User',
      component: user,
    },
  ],
});

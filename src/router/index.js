import Vue from 'vue';
import Router from 'vue-router';
import main from '@/components/Main';
import object from '@/components/Object';

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
  ],
});

import Vue from 'vue';
import Router from 'vue-router';
import main from '@/components/Main';
import object from '@/components/Object';
import user from '@/components/User';
import ItemModal from '@/components/ItemModal';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: main,
      children: [
        { path: 'modal/:id', component: ItemModal, name: 'itemModal' },
      ],
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

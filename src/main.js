import Vue from 'vue';
import Vuetify from 'vuetify'
import VueRouter from 'vue-router';
import App from './App.vue';
import User from './components/User.vue';
import Blog from './components/Blog.vue';
import Account from './components/Account.vue';
import 'vuetify/dist/vuetify.min.css';

require('../node_modules/materialize/materialize.css');
require('../node_modules/css/style.css');
require('../node_modules/jquery/jquery-3.3.1');
require('../node_modules/materialize/materialize');

Vue.use(VueRouter);
Vue.use(Vuetify);

const routes = [
  { path: '/blog', component: Blog },
  { path: '/account', component: Account },
  { path: '/', component: User }
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

Vue.component('app-user', User);

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});

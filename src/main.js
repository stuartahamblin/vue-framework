import Vue from 'vue';
import Vuetify from 'vuetify'
import VueRouter from 'vue-router';
import App from './App.vue';
import User from './components/User.vue';
import 'vuetify/dist/vuetify.min.css';
import Resume from './components/Resume';
import Projects from './components/Projects';

require('../node_modules/materialize/materialize.css');
require('../node_modules/css/style.css');
require('../node_modules/jquery/jquery-3.3.1');
require('../node_modules/materialize/materialize');

Vue.use(VueRouter);
Vue.use(Vuetify);

const routes = [
  { path: '/', component: User },
  { path: '/resume', component: Resume },
  { path: '/projects', component: Projects }
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

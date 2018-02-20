//import Vue from 'vue'
//import App from './App.vue'

var Vue = require('vue');
var VueRouter = require('vue-router');

var ColorOfPrints = require('./views/ColorOfPrints');
var Frame = require('./views/Frame');
var Header = require('./views/Header');
var Picture = require('./views/Picture');


Vue.use(VueRouter);

var router = new VueRouter({
  routes: [
    { path: '/colorOfPrints', component: ColorOfPrints},
    { path: '/frame', component: Frame},
    { path: '/header', component: Header},
    { path: '/picture', component: Picture} // /about => Aboute.vue
  ]
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});

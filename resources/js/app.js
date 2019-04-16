
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store/store';

Vue.use( VueRouter );


// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);


Vue.component('list-component', require('./components/ListComponent.vue').default);

Vue.component('layout', require('./components/Layout.vue').default);

const mainPage = Vue.component('mainPage', require('./components/Main.vue').default);

const order = Vue.component('order', require('./components/ListComponent.vue').default);

const routes = [
    { path: '/mainPage', component: mainPage },
    { path: '/Order', component: order }
];


const router = new VueRouter({
    routes
});

const app = new Vue({
    el: '#app',
    router,
    store
});

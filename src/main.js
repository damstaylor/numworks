import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { createPinia } from 'pinia';

import App from "./App.vue";
const HomePage = () => import('./pages/home-page.vue');
const RedPage = () => import('./pages/red-page.vue');
const GreenPage = () => import('./pages/green-page.vue');
const BluePage = () => import('./pages/blue-page.vue');

const routes = [
  { path: '/', component: HomePage, name: 'home-page', },
  { path: '/red', component: RedPage, name: 'red-page' },
  { path: '/green', component: GreenPage, name: 'green-page' },
  { path: '/blue', component: BluePage, name: 'blue-page' },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const pinia = createPinia();

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");

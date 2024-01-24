// import Vue from 'vue';
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
// import BootstrapVue from 'bootstrap-vue';
import App from "./App.vue";
import axios from "axios";
import NewMovie from './components/NewMovie.vue';
import MovieList from './components/MovieList.vue';
// import MovieList from './components/MovieList.vue'; // Assume this is your main page component

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

// Define routes
const routes = [
  { path: '/', component: MovieList },
  { path: '/new-movie', component: NewMovie },
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Create Vue application and use router
const app = createApp(App);
app.use(router);
app.mount("#app");


// Vue.use(BootstrapVue);
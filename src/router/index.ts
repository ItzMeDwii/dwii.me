/**
 * Welcome to Clovuer
 * The comments in each files will guide you through your very cool journey
 * discovering what Vue can do.
 */
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

/**
 * Import the views you're going to use as a router-view.
 */
import Home from '../views/Home.vue'

Vue.use(VueRouter);

/**
 * This is the main configuration of your route.
 * Refer to {RouteConfig} interface when adding a route configuration.
 */
const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    /**
     * route level code-splitting.
     * this generates a seperate chunk (about.[hash].js) for this route
     * which is lazy-loaded when the route is visited.
     */
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router

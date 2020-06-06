/**
 * Welcome to Clovuer
 * The comments in each files will guide you through your very cool journey
 * discovering what Vue can do.
 */
import Vue from 'vue'
import App from './App.vue'

/**
 * registerServiceWorker works as a worker for your Vue app.
 * Import the file if you want your website works as a PWA (Progressive Web App).
 * Check more [here](https://en.wikipedia.org/wiki/Progressive_web_application)
 */
import './registerServiceWorker'

/**
 * Bootstrap is important! Clovuer shipped with bootstrap out of the box.
 * Don't like bootstrap? Prefer lightweight small [Skeleton](http://getskeleton.com)? Remove the line below.
 */
import 'bootstrap'
/**
 * You're using Bootstrap? Then you will like Bootswatch.
 * Bootswatch is a theming framework for Bootstrap, enabling a set of theme works as a replacement.
 *
 * `flatly` is the name of the theme. Change the theme's name according to
 * your theme preference.
 * You can check more [here](https://bootswatch.com/).
 * > Note: Some Clovuer component will not work properly without Bootswatch.
 */
import 'bootswatch/dist/flatly/bootstrap.min.css'
import 'jquery'
import 'popper.js'

/**
 * Lines below enables vue-router and vuex store.
 * Vue router act as a routing point for your SPA (Single Page Application) Vue.
 * Vuex store act as a storing point for reusable variables inside your application.
 * Vue i18n act as an international translation for your application.
 */
import router from './router'
import store from './store'
import i18n from './i18n'

Vue.config.productionTip = false;

new Vue({
 router,
 store,
 i18n,
 render: h => h(App)
}).$mount('#app');

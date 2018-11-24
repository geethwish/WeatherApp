import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Details from './components/WeatherDetails.vue';
import SearchResults from './components/SearchResultDisplay.vue';

Vue.use(VueRouter);

const routes=[
{path:'/',component:Home},
{ path: '/weather/:woeid', component:Details  },
{ path: '/search/:Location', component : SearchResults}
];

const router= new VueRouter({
routes
});

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

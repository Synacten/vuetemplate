import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import about from './components/about'
import contacts from './components/contacts'
import news from './components/news'
import guides from './components/guides'
import templates from './components/templates'



Vue.use(VueRouter)

const router = new VueRouter ({
  routes: [
    {path: '/about', name: 'about', component: about},
    {path: '/contacts', name: 'contacts', component: contacts},
    {path: '/news', name: 'news', component: news},
    {path: '/guides', name: 'guides', component: guides},
    {path: '/templates', name: 'templates', component: templates}
  ],
  mode: 'history'
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})


const hide_nav = $('.hide_nav');
$(document).ready(function(){
  $('.fa-bars').click(function () { 
      hide_nav.css('right', '-40%');
  });
});

$('.fa-bars').click(function () {
  hide_nav.css('right', '40%');
});


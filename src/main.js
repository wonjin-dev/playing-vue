import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Memo from './components/Memo/index.vue';
import Test from './components/Test.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
	{
		path: '/test',
		component: Test,
	},
	{path: '/', component: Memo},
];

const router = new VueRouter({
	mode: 'history',
	routes,
});

new Vue({
	router,
	render: (createElement) => createElement(App),
}).$mount('#app');

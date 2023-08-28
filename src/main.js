import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Memo from './components/Memo/index.vue';
import Test from './components/Test.vue';
import InitVueX from './store';
import {initializeStoreModules} from '@/store/modules/index';

Vue.config.productionTip = false;
Vue.config.devtools = true;
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

const store = InitVueX();
initializeStoreModules(store);

new Vue({
	router,
	store,
	render: (createElement) => createElement(App),
}).$mount('#app');

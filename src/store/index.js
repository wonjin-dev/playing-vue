import Vue from 'vue';
import Vuex from 'vuex';
import {storeModules} from './modules/index';

Vue.use(Vuex);

export const storeOptions = {
	modules: storeModules,
};

const createStore = () => new Vuex.Store(storeOptions);

export default createStore;

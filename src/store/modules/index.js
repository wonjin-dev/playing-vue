import {getModule} from 'vuex-module-decorators';
import CountModule from './count';

export const storeModules = [CountModule].reduce((modules, module) => {
	modules[module.namespace] = module;

	return modules;
}, {});

let countModule;

export const initializeStoreModules = (store) => {
	countModule = getModule(CountModule, store);
};

export {countModule};

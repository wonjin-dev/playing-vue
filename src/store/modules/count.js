import {Action, Module, Mutation, VuexModule} from 'vuex-module-decorators';

export const namespace = 'count';
@Module({name: namespace, stateFactory: true, namespaced: true})
export default class CountModule extends VuexModule {
	static namespace = namespace;

	/*
	 * STATES
	 * */
	count = 0;

	/*
	 * MUTATIONS
	 * */
	@Mutation
	setCount(newCount) {
		this.count = newCount;
	}

	/*
	 * ACTIONS
	 * */
	@Action({rawError: true})
	plus() {
		this.count = ++this.count;
	}

	@Action({rawError: true})
	minus() {
		this.count = --this.count;
	}
}

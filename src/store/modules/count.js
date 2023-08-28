import {Module, Mutation, VuexModule} from 'vuex-module-decorators';

export const namespace = 'count';
@Module({name: namespace, stateFactory: true, namespaced: true})
export default class CountModule extends VuexModule {
	static namespace = namespace;

	count = 0;

	@Mutation
	plus() {
		return (this.count += 1);
	}
}

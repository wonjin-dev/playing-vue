<template>
	<section>
		<h3>
			{{ storeCount }}
		</h3>
		<button @click="plus">+</button>
	</section>
</template>

<script>
import {countModule} from '@/store/modules';
import {Vue} from 'vue-property-decorator';
import {Component} from 'vue-property-decorator';

@Component
export default class Count extends Vue {
	get storeCount() {
		return countModule.count;
	}

	plus() {
		return countModule.plus();
	}
}
</script>

<style scoped></style>

<template>
	<main>
		<h1>{{ title }}</h1>

		<p>
			my name is
			<span class="my_name">
				{{ isNameShown ? name : '' }}
			</span>
		</p>

		<button @click="toggleShowName">
			<span>{{ isNameShown ? '이름 숨김' : '이름 노출' }}</span>
		</button>
	</main>
</template>

<script>
import {Vue} from 'vue-property-decorator';
import {Component} from 'vue-property-decorator';

@Component
export default class Memo extends Vue {
	title = 'Hello, World';
	name = '';
	isNameShown = false;

	toggleShowName() {
		this.isNameShown = !this.isNameShown;
	}

	beforeMount() {
		this.name = 'wonjin';
	}
}
</script>

<style scoped>
h1 {
	color: red;
	font-size: 40px;
	font-weight: 900;
}

.my_name {
	color: blue;
	font-weight: 700;
}
</style>

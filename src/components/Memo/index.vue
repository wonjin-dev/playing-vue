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
			<span>이름 {{ isNameShown ? '숨김' : '노출' }}</span>
		</button>

		<section class="content">
			<EmitInput @emitted="update" />
			<p>
				{{ received }}
			</p>
		</section>

		<router-link to="/test">
			<button>Router Test</button>
		</router-link>

		<section class="content">
			<Count />
		</section>
	</main>
</template>

<script>
import {Vue} from 'vue-property-decorator';
import {Component} from 'vue-property-decorator';
import EmitInput from './components/EmitInput.vue';
import Count from './components/Count.vue';

@Component({
	components: {EmitInput, Count},
})
export default class Memo extends Vue {
	title = 'Hello, World';
	name = '';
	isNameShown = false;
	received = '';

	beforeMount() {
		this.name = 'wonjin';
	}

	toggleShowName() {
		this.isNameShown = !this.isNameShown;
	}

	update(emitted) {
		this.received = emitted;
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

.content {
	height: 112.5px;
	border: 2px solid grey;
	border-radius: 8px;
	padding: 16px;
	margin: 16px 0;
}
</style>

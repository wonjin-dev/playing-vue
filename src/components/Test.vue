<template>
	<main>
		<h1>테스트 화면입니다</h1>
		<button @click="routeBack">Back</button>
	</main>
</template>

<script>
import {Vue} from 'vue-property-decorator';
import {Component} from 'vue-property-decorator';

@Component({name: 'test'})
export default class Test extends Vue {
	routeBack() {
		window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
	}
}
</script>

<style scoped></style>

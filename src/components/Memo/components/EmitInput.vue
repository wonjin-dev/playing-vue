<template>
	<section>
		<label>
			양방향 바인딩
			<input type="text" @input="inputOnChage" />
		</label>
	</section>
</template>

<script>
import {Vue} from 'vue-property-decorator';
import {Component} from 'vue-property-decorator';

@Component
export default class EmitInput extends Vue {
	inputOnChage(e) {
		this.$emit('emitted', e.target.value);
	}
}
</script>

<style scoped>
label {
	display: flex;
	flex-direction: column;
}
</style>

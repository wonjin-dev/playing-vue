<template>
	<div id="app">
		<Memo />
	</div>
</template>

<script>
import {Component, Vue} from 'vue-property-decorator';
import Memo from './components/Memo.vue';

@Component({
	components: {Memo},
})
export default class App extends Vue {}
</script>

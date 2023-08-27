<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
import {Component, Vue} from 'vue-property-decorator';
import Memo from './components/Memo';

@Component({
	components: {Memo},
})
export default class App extends Vue {}
</script>

<template>
	<div class="themes">
		<Loading v-if="!themes.length"/>
		<ThemeItem v-for="theme in themes" :theme="theme"/>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import ThemeItem from '../components/themes/Theme-Item'
import Loading from '../components/Loading'
export default {
	name: 'themes',
	components: { ThemeItem, Loading },
	computed: {
		...mapGetters({
			themes: 'themes'
		})
	},
	created () {
		this.$store.dispatch('getThemes');
	}
}
</script>
<style>
.themes {
	width: 90%;
	margin: 0 auto;
	margin-top: 1rem;
}
</style>
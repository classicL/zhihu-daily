<template>
	<div v-if="this.themeList" class="theme-list">
		<Loading v-if="!themeList"/>
		<div class="theme-img">
			<img :src="src">
		</div>
		<h3 class="theme-list-title">{{themeList.name}}</h3>
		<div class="theme-list-desc"><span>{{themeList.description}}</span></div>
		<div class="theme-list-editor">主编：{{themeList.editors[0].name}}</div>
		<ul class="theme-list-content">
			<li v-for="item in themeList.stories" class="theme-list-item">
				<router-link :to="'/detail/'+item.id">{{item.title}}</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import Loading from '../components/Loading'
export default {
	name: 'themeList',
	components: { Loading },
	computed: {
		...mapGetters({
			themeList: 'themeList'
		}),
		src () {
			return 'http://lovestreet.leanapp.cn/zhihu/resource?url=' + this.themeList.image
		}
	},
	created () {
		this.$store.dispatch('getThemeList', this.$route.params.id)
	},
	beforeDestroy () {
		this.$store.dispatch('clearThemeList')
	}
}
</script>
<style>
.theme-list-title, .theme-list-desc, .theme-list-editor, .theme-list-content{
	width: 80%;
	margin: 0 auto;
}
.theme-img img{
	width: 100%;
}
.theme-list-content {
	padding: 0;
}
.theme-list-title {
	font-size: 1rem;
	margin-top: 1rem;
}
.theme-list-desc {
	font-size: .5rem;
	color: #000;
	padding: 1rem;
}
.theme-list-desc span {
	padding-left: 1rem;
	border-left: 5px solid #ddd;
}
.theme-list-editor {
	font-size: .7rem;
	margin-bottom: .5rem;
}
.theme-list-item {
	list-style: none;
	font-size: .8rem;
	padding: .8rem 0;
	border-bottom: 1px solid #ddd;
}
</style>
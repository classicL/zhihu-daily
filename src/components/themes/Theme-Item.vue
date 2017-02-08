<template>
	<router-link class="theme-item clearfix" :to="link">
		<div class="theme-item-img">
			<img :src="src">
		</div>
		<div class="theme-item-title">
			{{theme.name}}
		</div>
		<div class="theme-item-desc">
			{{theme.description}}
		</div>
	</router-link>
</template>
<script>
export default {
	name: 'themeItem',
	props: ["theme"],
	data () {
		return {
			link: '/theme-list/' + this.theme.id,
		}
	},
	computed: {
		src () {
			return "http://lovestreet.leanapp.cn/zhihu/resource?url=" + this.theme.thumbnail
		},
	}
}
</script>
<style>
.theme-item {
	display: block;
	padding-bottom: .5rem;
	margin: .5rem .2rem 0;
	border-bottom: 1px solid #ddd;
}
.theme-item-img {
	width: 12%;
	float: left;
	margin: 0 .2rem
}
.theme-item-img img {
	width: 100%;
	display: block;
	border-radius: 50%;
}
.theme-item-title {
	font-size: .65rem;
}
.theme-item-desc {
	width: 85%;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	font-size: .6rem;
	color: #999;
}
</style>
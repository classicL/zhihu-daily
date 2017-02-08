<template>
	<div>
		<router-link
			:to="link"
			class="news-link">
			<div class="news-image">
				<img :src="img">
			</div><div class="news-title">
				{{news.title}}
			</div>
		</router-link>
	</div>
</template>
<script>
export default {
	name: 'newsItem',
	props: ['news'],
	data () {
		return {
			link: "/detail/" + this.news.id
		}
	},
	computed: {
		img () {
			if (this.news.image) {
				return "http://lovestreet.leanapp.cn/zhihu/resource?url=" + this.news.image
			} else {
				return "http://lovestreet.leanapp.cn/zhihu/resource?url=" + this.news.images[0]
			}
		}
	}
}
</script>
<style>
.news-link {
	display: block;
}
.news-image {
	width: 25%;
	display: inline-block;
	text-align: center;
	
	margin-bottom: .5rem;
	margin-top: .5rem;
	
}
.news-image img {
	width: 70%;
}
.news-title {
	box-sizing: border-box;
	margin-top: .7rem;
	display: inline-block;
	width: 75%;
	color: #666;
}
.news-title {
	font-size: .7rem;
	text-decoration: none;
	color: #000;
	vertical-align: top;
}
</style>
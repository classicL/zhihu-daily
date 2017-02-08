<template>
	<div class="detail">
		<Loading v-if="!detail"/>
		<div v-html="html"></div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import Loading from '../components/Loading'
export default {
	name: 'detail',
	components: { Loading },
	computed: {
		...mapGetters({
			detail: 'detail'
		}),
		id: function() {
			return this.$route.params.id
		},
		html: function() {
			let h = this.detail.body, ele = '';
			if (h) {
				let ele = document.createElement("div"),
					imgs;
				ele.innerHTML = h;
				imgs = ele.querySelectorAll("img");
				for (let i = 0; i < imgs.length; i++) {
					imgs[i].src = "http://lovestreet.leanapp.cn/zhihu/resource?url=" + imgs[i].src;
				}
				h = ele.innerHTML;
			}
			return h;
		}
	},
	created () {
		this.$store.dispatch('getDetail', this.$route.params.id)
	},
	beforeDestroy () {
		this.$store.dispatch('clearDetail')
	}
}
</script>
<style>
.detail {
	width: 90%;
	margin: 0 auto;
}
.content {
	line-height: 1.6em;
}
.headline-title {
	font-size: .9rem;
}
.question-title {
	font-size: .9rem;
}
.meta {
	height: 1rem;
	font-size: .8rem;
	vertical-align: top;
	line-height: 1rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #999;
}
.avatar {
	display: inline-block;
	width: 1rem;
}
.author {
	vertical-align: top;
	font-weight: 700;
	color: #333;
}
.bio {
	vertical-align: top;
}
.content li {
	font-size: .85rem;
	color: #555;
}
.content-image {
	width: 100%;
}
.wrap.external {
	color: #4786b3;
}
p img {
	width: 100%;
}
.view-more {
	background-color: #ddd;
	text-align: center;
	border-radius: 4px;
	margin-bottom: 2rem;
}
.view-more a {
	font-size: .8rem;
	box-sizing: border-box;
	display: inline-block;
	width: 100%;
	padding: 5px;
}
.headline-background {
	border-bottom: 5px solid #eee;
}
.headline-background-link {
	margin: 1rem 0;
	display: inline-block;
	font-size: .8rem;
}
.headline-background-link .heading {
	color: #999;
	font-size: .7rem;
	margin-bottom: .2rem;
}
.heading-content {
	float: left;
	width: 90%;
}
.icon-arrow-right {
	background-image: url(http://static.daily.zhihu.com/img/share-icons.png);
	background-position: 15px 20px;
	display: block;
	float: right;
	width: 1rem;
	height: 1rem;
}
</style>
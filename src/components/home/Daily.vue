<template>
	<div class="daily">
		<div class="daily-date">
			{{dateCN}}
		</div>
		<NewsItem v-for="news in list" :news="news"/>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import NewsItem from './News_Item.vue'
export default {
	name: 'home',
	components: { NewsItem },
	props: ['item', 'date', 'list'],
  computed: {
  	dateCN () {
  		if (this.date === "每日精选") return this.date;
  		return this.date.substring(0,4) + "年" + this.date.substring(4,6) + "月" + this.date.substring(6,8) + "日";
  	}
  }
}
</script>
<style>
.daily-date {
	font-size: .8rem;
	border-left: 5px solid #ddd;
	padding-left: 1rem;
	line-height: 1rem;
	height: 1rem;
	margin: .8rem .5rem .5rem;
	animation: slide 1s;
}
.daily {
	border-bottom: 1px solid #ddd;
}
@keyframes slide {
	from {
		margin-left: 3rem;
		opacity: 0;
	}
	to {
		margin-left: .5rem;
		opacity: 1;
	}
}
</style>
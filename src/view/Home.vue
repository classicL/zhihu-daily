<template>
	<div class="home">
    <Loading v-if="!hotNews.length"/>
		<Daily :date="'每日精选'" :list="hotNews"/>
		<Daily v-for="item in newsList" :item="item" :date="item.date" :list="item.stories"/>
		<div @click="getNewsList" class="view-more"><a href="javascript:;">查看更多</a></div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Daily from '../components/home/Daily'
import Loading from '../components/Loading'
export default {
  name: 'home',
  components: { Daily, Loading },
  computed: {
  	...mapGetters({
			lastDay: 'lastDay',
			newsList: 'newsList',
			hotNews: 'hotNews'
		})
  },
  methods: {
  	getNewsList () {
  		this.$store.dispatch('getNewsList', this.lastDay);
  	}
  },
  created () {
  	this.$store.dispatch('getNewsList');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.home {
  width: 90%;
  margin: 0 auto;
}
</style>

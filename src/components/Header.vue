<template>
	<header>
		<div class="header">
			<h1>知乎日报</h1>
			<nav class="header-nav">
				<router-link
					to="/"
					class="header-nav-item"
					:class="{active : routeName === 'home'}">
						日报
					</router-link><router-link
					to="/themes"
					class="header-nav-item"
					:class="{active : routeName === 'themes'}">
						专题
					</router-link><router-link
					to="/about"
					class="header-nav-item"
					:class="{active : routeName === 'about'}">
						关于
					</router-link>
			</nav>
		</div>
	</header>
</template>
<script>
import router from '../router'
export default {
  name: 'header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
  	routeName: function(){
  		return this.$route.name
  	}
  }
}
</script>
<style>
header {
  border-bottom: 1px solid #ccc;
  /*margin-bottom: 1rem;*/
}
.header {
	margin: 0 auto;
	width: 90%;
}
header h1 {
	margin-left: 1rem;
	margin-bottom: .5rem;
	font-size: 1.2rem;
	color: #000;
	font-weight: 500;
}
.header-nav {
	margin: 1rem 0;
}
.header-nav-item {
	display: inline-block;
	width: 33.33%;
	font-size: .8rem;
	text-align: center;
	
}
.header-nav-item.active {
	font-weight: bold;
}
</style>

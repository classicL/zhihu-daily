<template>
  <div id="app">
    <DailyHeader/>
    <router-view></router-view>
  </div>
</template>

<script>
import DailyHeader from 'components/Header'
export default {
  name: 'app',
  components: { DailyHeader },
  created () {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 400px;
}
html, body, div, img, nav, header, footer, ul, ol, li, a {
  margin: 0;padding: 0;
  font-family: 'Microsoft Yahei',Helvetica Neue,Helvetica,Arial,Sans-serif;
}
html, body {
  height: 100%;
}
html {
  font-size: 20px;
}
a {
  text-decoration: none;
  color: #000;
}
p {
  margin: 1em 0;
  font-size: .85rem;
  color: #616466;
}
ul, ol {
  padding-left: 20px;
}
.clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden}
.clearfix{*+height:1%;}
</style>

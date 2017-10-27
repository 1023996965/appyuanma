<template>
  <div id="app">
  	<headtop></headtop>
    
    <transition name="animate"><router-view class="content"></router-view></transition>
    <foot></foot>
  </div>
  
</template>

<script>
	import headtop from './components/headtop'
	import foot from './components/foot'
export default {
components:{headtop,foot}
}
</script>

<style>
	 .content{ transition: 0.3s; position: fixed; width: 100%;
   font-size:30px ;top:62px; bottom: 78px;}
  .animate-enter{transform:translate(100%,0);opacity: 0}
  .animate-leave-active{transform:translate(-100%,0);opacity: 0}
  body,ul,p,h3{ margin:0px; padding: 0px;}
  li{list-style: none}
#app {
 
}
</style>

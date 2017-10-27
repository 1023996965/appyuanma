<template>
	<div>
	<div class="foot-nav">
		<router-link to="/tuijian">
			<span><img src="../assets/foot/xinwen.png"><p>新闻</p> </span>
		</router-link>
		<router-link to="/zhiye"><span><img src="../assets/foot/liaotian.png" ><p>聊天</p></span>
		</router-link>
		<router-link to="/zhuanlan">
			<span><img src="../assets/foot/wo.png"><p>我</p></span>
		</router-link>
	</div>
</div>
</template>
<script>
</script>
<style>
	.foot-nav p {
		padding: 0;
		margin: 0;
		color:#a6a390 ;
		
	}
	a{text-decoration: none;}
	.foot-nav {
		display: flex;
		justify-content: space-around;
		height: 78px;
		border-bottom: 1px solid #ccc;
		align-items: center;
		position: fixed;
		bottom: 0;
		width: 100%;
		background: #f7f7f5;
		color: #ffffff;
		z-index: 100;
	}
	
	.foot-nav img {
		height: 24px;
		width: 24px;
		margin: 6px auto;
	}
</style>
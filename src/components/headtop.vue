<template>
	<div>
		<ul id="tou">
			<router-link to="/tuijian">
			<li>推荐</li>
			</router-link>
			<router-link to="/banben">
			<li>版本</li>
			</router-link>
			<router-link to="/zhiye">
			<li>职业</li>
			</router-link>
			<router-link to="/zhuanlan">
			<li>专栏</li>
			</router-link>
		</ul>
		
			
		
	</div>
</template>

<script>	
</script>

<style>
	body{
		margin:0;
		padding: 0;
	}
	ul{
		margin: 0;
		padding: 0;
	}
	li{
		list-style: none;
		margin: 0;
		padding: 0;
	}
	#tou{
		display: flex;
		justify-content: space-around;
		height: 62px;
		background: #20201e;
		width: 100%;
		position:relative;
		line-height: 62px;	
	}
	#tou li{
		color: white;
	}

	
</style>
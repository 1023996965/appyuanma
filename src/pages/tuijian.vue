<template>
	<div>
		<div id="banner">
			<mt-swipe :auto="4000">
				<mt-swipe-item><img src="../assets/lbt/lbt01.jpg"></mt-swipe-item>
				<mt-swipe-item><img src="../assets/lbt/lbt02.jpg"> </mt-swipe-item>
				<mt-swipe-item><img src="../assets/lbt/lbt03.jpg"></mt-swipe-item>
			</mt-swipe>
		</div>
		<ul class="font">
			<li>关于蓝猫的那点事 揭露蓝猫历史足迹</li>
			<li>深渊恶魔套影舞实测伤害分析：诞生之所</li>
			<li>版本前瞻:十一月上旬即将更新的内容（一）</li>
			<li>关于蓝猫的那点事 揭露蓝猫历史足迹</li>
			<li>深渊恶魔套影舞实测伤害分析：诞生之所</li>
			<li>版本前瞻:十一月上旬即将更新的内容（一）</li>
			<li>关于蓝猫的那点事 揭露蓝猫历史足迹</li>
			<li>深渊恶魔套影舞实测伤害分析：诞生之所</li>
			<li>版本前瞻:十一月上旬即将更新的内容（一）</li>
		</ul>
		
	</div>
</template>

<script>
</script>

<style>
	img{
		display: block;
	}
	#banner{
		width: 100%;
		height: 200px;;
	}
	#banner img {
		width: 100%;
		height: auto;
	}
	.font {
		font-size: 20px;
		color: #464646;
		font-weight: 100;
		height: 132px;
		
	}
	ul li{
		line-height: 60px;
		border-top: 1px solid;
	}
</style>
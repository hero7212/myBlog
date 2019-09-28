<style lang="stylus" scoped>
	@keyframes spin 
		from 
			transform rotate(0deg)
		to    
			transform rotate(360deg)
	.ball-wrap 
		width 107px
		height 107px
		position absolute
		top 50%
		left 50%
		transform translate(-50%,-70%)
		border-radius 50%
		z-index 1
		&.green 
			border 2px solid #047047
			.ball 
				background-color #006e44 
				.water 
					background #48cb5e 
					&.w2 
						background #138c60
		&.orange 
			border 2px solid #744a25;
			.ball 
				background-color #893804 
				.water 
					background #e46a1d 
					&.w2 
						background #c35e18
		&.blue
			border 2px solid #000080
			.ball 
				background-color #00008B 
				.water 
					background #0000CD 
					&.w2 
						background #0000FF				
		&.red 
			border 2px solid #891004;
			.ball 
				background-color #891014 
				.water 
					background #ed3c1f 
					&.w2 
						background #d32716
		&.yellow 
			border 2px solid #89f004;
			.ball 
				background-color #88e004 
				.water 
					background #edec1f 
					&.w2 
						background #d3d716
		&.violet 
			border 2px solid #4B0082
			.ball 
				background-color #9400D3 
				.water 
					background #9932CC 
					&.w2 
						background #BA55D3
		&.cyan
			border 2px solid #00CED1
			.ball 
				background-color #48D1CC 
				.water 
					background #40E0D0 
					&.w2 
						background #00FFFF	
		&.wheat
			border 2px solid #DEB887
			.ball 
				background-color #D2B48C 
				.water 
					background #FFDEAD 
					&.w2 
						background #F5DEB3											
		.ball 
			width 93px
			height 93px
			background-image url(../../static/img/ball.png)
			position absolute 
			left 5px
			top 5px
			border-radius 50%
			.inner 
				width 91px 
				height 91px
				border-radius 50%
				overflow hidden 
				position absolute 
				top 50%
				left 50% 
				z-index 3 
				transform translate(-50%,-50%)
				.percent 
					color #fff 
					font-size 20px 
					position absolute 
					top 50% 
					left 50% 
					z-index 5
					transform translate(-50%,-50%)
				.water 
					position absolute 
					width 200%
					height 200% 
					left -50% 
					border-radius 40%
					z-index 2
					transition all 1s ease
					top 100%
					animation spin 10s linear infinite
					&.w2 
						left 20%
						z-index 1
</style>

<template lang="pug">
	.ball-wrap(:class="color") 
		.ball
			.inner 
				.percent {{percent}}%
				.water(:style="{'top':100-percent+'%'}")
				.water.w2(:style="{'top':100-percent+'%'}")
</template>

<script>
export default {
	name: "ball",
    props: ['color','percent'],
    data () {
		return {
			
		}
    }
}
</script>


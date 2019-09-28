<style lang="stylus" scoped>
	.clock
		position absolute
		bottom 0
		left 50%
		transform translateX(-50%)
		z-index 99999999
		background-size 100%
		font-family 'Share Tech Mono', monospace
		color #daf6ff
		text-align center
		text-shadow 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0)
		.time
			letter-spacing 0.05em
			font-size 40px
		.date
			letter-spacing 0.1em
			font-size 24px

</style>

<template lang="pug">
	.clock
		p.date(v-html="date")
		p.time(v-html="time")
</template>

<script>
const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
export default {
	name: "clock",
	data () {
		return {
			date: '',
			time: '',
			timerID: null
		}
	},
	created() {
		this.updateTime();
		this.timerID = setInterval(this.updateTime, 1000);
	},
	methods: {
		updateTime() {
			const cd = new Date();
			this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2);
			this.date = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth()+1, 2) + '-' + this.zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
		},

		zeroPadding(num, digit) {
			let zero = '';
			for(let i = 0; i < digit; i++) {
				zero += '0';
			}
			return (zero + num).slice(-digit);
		}
	}
}
</script>


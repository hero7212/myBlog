<style lang="stylus">
* 
	box-sizing border-box
#app
	position absolute
	top 0
	left 0
	right 0 
	bottom 0
	background #171E26
	overflow hidden
</style>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>


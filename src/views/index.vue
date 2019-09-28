<style lang="stylus" scoped>
@keyframes roX
    0%
        transform rotateX(180deg)
    100%
        transform rotateX(0deg)

@keyframes light-move
    0%
        background-position 0 0
    100%
        background-position 0 240px

.index
    height 100%
    position relative
.aside
    height 100%
    background #fff
    display flex
    width 22%
    flex-wrap wrap
    position relative
    .bg-img
        display block
        max-width 100%
        position absolute
        left 0
        transition all 0.618s
        &.out-side
            left -100%
            z-index 1
	.box-3d
        height 170px
        width 170px
        position absolute
        top 170px
        left 50%
        margin-left -85px
        box-shadow 0 0 20px #fff
        cursor pointer
        perspective 1000px
        .box-content-3d
            width 170px
            height 170px
            position absolute
            transform-origin 50%
            transform translateZ(-85px) rotateY(0deg) rotateX(0deg)
            transition transform .5s linear
            transform-style preserve-3d
            .avatar-img
                display block
                width 100%
                height 100%
                position absolute
                top 0
                left 0
                &:nth-child(1)
                    transform translateZ(84px)
                &:nth-child(2)
                    transform rotateY(90deg) translateZ(84px)
                &:nth-child(3)
                    transform rotateY(-90deg) translateZ(84px)
                &:nth-child(4)
                    transform rotateX(-90deg) translateZ(84px)
                &:nth-child(5)
                    transform rotateX(90deg) translateZ(84px)
	.audio-content
		background url('../../static/img/pause.png') center center no-repeat
		height 200px
		width 100%
		position absolute
		bottom 10%
		z-index 99999999999999
		cursor pointer
		audio
			display none
		&.pause
			background url('../../static/img/play.png') center center no-repeat
    .item
        min-height 16.6%
        min-width 33.3%
.main
    position absolute
    top 0
    left 22%
    right 0
    bottom 0
    background #fff
    padding-left 20px
    padding-right 20px
    padding-bottom 20px
    overflow auto
    .log
        margin 15px 0 0 0
        background #e3e1e6
        padding 10px
        border-radius 10px
        &:first-child
            margin-top 5px
        .title
            font-size 24px
            color #000
            font-weight bold
            padding-bottom 15px
            border-bottom 1px solid #eee
    .skill
        width 98%
        min-height 240px
        margin 30px auto
        background rgba(22, 68, 130, 0.3)
        box-shadow 0 0 10px 10px rgba(44, 168, 219, 0.4)
        border-radius 10px
        display flex
        position relative
        animation roX 1s linear
        flex-wrap wrap
        .skill-bg
            position absolute
            top 0
            left 0
            right 0
            bottom 0
            border-radius 10px
            background linear-gradient(-30deg, rgba(27, 212, 201, 0.3), rgba(22, 68, 130, 0.3))
        .skill-item
            flex 1
            position relative
            min-width 25%
            min-height 240px
            .word
                position absolute
                left 0
                right 0
                top 74%
                text-align center
                font-size 20px
                color #fff
    .album
        .image
            float left
</style>

<template lang="pug">
    .index(ref="main")
        .aside
            img.bg-img(:src="imgUrl" :class="{'out-side':!moveOut}")
            img.bg-img(:src="imgUrl2" :class="{'out-side':moveOut}")
            .box-3d(ref="box" @click="toLogin" @mouseover="doTrans($event,true)" @mouseout="doTrans($event,false)")
                .box-content-3d(:style="tranStyle")
                    img.avatar-img(src="../../static/img/ava.jpg")
                    img.avatar-img(src="../../static/img/ava.jpg")
                    img.avatar-img(src="../../static/img/ava.jpg")
                    img.avatar-img(src="../../static/img/ava.jpg")
                    img.avatar-img(src="../../static/img/ava.jpg")
            .audio-content(@click.stop="controlAudio" :class="{'pause':musicPause}")
                audio(src="../../static/audio/seeyouagain.mp3" ref="audio" autoplay controls loop) 不支持
        .main
            el-tabs(v-model="activeName" @tab-click="tabSwitch")
                el-tab-pane(label="踩过的坑" name='pit')
                    .log.lightSpeedIn.animated
                        .title vue2+axios上传图片后台接收不到
                        .log-con
                            p
                                |问题解决了，其实就是少了一个属性，网上说的那些都是错的，加header这个被他害苦了，希望有遇到问题的时候多去看官方文档，或者源码，共勉。
                            p
                                |withCredentials: false, // default 改为true就行了。
                            p
                                a(href="https://segmentfault.com/q/1010000012134701" target="_blank") https://segmentfault.com/q/1010000012134701
                    .log.lightSpeedIn.animated
                        .title vue项目继承ueditor出现bug
                        .log-con
                            p
                                |有两个div，里面分别放入了一个ueditor组件，用v-if去切换他们显示隐藏的时候，ueditor的样式会错乱
                            p
                                |解决方法：1.在ueditor.config.js中给一个默认宽度，2.找到放置ueditor的那个节点获取到它，然后再获取到ueditor,把ueditor插入到那节点中
                el-tab-pane(label="网上搜集的日志" name='log')
                    .log.lightSpeedIn.animated
                        .title 前端收集
                        .log-con
                            p
                                |在前端路上摸索前行，在这里分享自己长期关注的前端开发相关的优秀网站、博客、以及活跃开发者。欢迎更新，以下各排名不分先后顺序。
                            p
                                |自己 RSS 长期订阅了一些IT 和技术相关博客，这里是我Feedly 输出的opml，可直接导入一些RSS 阅读器:
                            p
                                a(href="https://github.com/foru17/luolei-dotfiles/blob/master/feedly.opml" target="_blank") https://github.com/foru17/luolei-dotfiles/blob/master/feedly.opml
                    .log.lightSpeedIn.animated
                        .title React Native 如何区分系统平台，动态加载组件
                        .log-con
                            p
                                |今天分享的内容是使用Platfrom的一个小技巧。相信大家都使用过Platfrom.os来判断移动设备平台是ios还是android。那么Platform的select你是否知道呢？快来了解一下吧…
                            p
                                a(href="http://blog.csdn.net/u013718120/article/details/78291945" target="_blank") http://blog.csdn.net/u013718120/article/details/78291945
                    .log.lightSpeedIn.animated
                        .title vue-cli生成的项目，运行 npm run dev 报错
                        .log-con
                            p
                                |2018年1月9日下午vue更新了，导致vue-cli生成的项目，运行 npm run dev 报错
                            p
                                |解决方案：cnpm i之后，cnpm i -D webpack-dev-server@2.9.7
                    .log.lightSpeedIn.animated
                        .title 解决vue不利于SEO的方案
                        .log-con
                            p
                                |其实解决SEO问题不一定非得用服务端渲染来处理，服务端渲染对于刚接触 vue 的新手来说，并不是那么友好，虽然已有官方 SSR 中文文档。但是对于一个已经开发完毕的 vue 项目去接 SSR 无论是从工作量还是技术角度来说，都是一种挑战。不过这些怎么能难得到伟大的前端程序员！
                            p
                                a(href="https://zhuanlan.zhihu.com/p/29148760" target="_blank") https://zhuanlan.zhihu.com/p/29148760
                    .log.lightSpeedIn.animated
                        .title 分享一些vue开源组件库
                        .log-con
                            p
                                |为移动而生的Vue JS 2组件框架！
                            p
                                a(href="https://www.cnblogs.com/Leo_wl/p/6517846.html" target="_blank") https://www.cnblogs.com/Leo_wl/p/6517846.html
                    .log.lightSpeedIn.animated
                        .title 轮子工厂
                        .log-con
                            p
                                |里面有很多不错的vue和angular组件！
                            p
                                a(href="http://www.wheelsfactory.cn/#/home" target="_blank") http://www.wheelsfactory.cn/#/home
                    .log.lightSpeedIn.animated
                        .title 美团点评点餐 Nuxt.js 实战
                        .log-con
                            p
                                |关于 美团点评点餐 Nuxt.js 实战  的教程
                            p
                                a(href="https://juejin.im/post/598aabe96fb9a03c335a8dde" target="_blank") https://juejin.im/post/598aabe96fb9a03c335a8dde
                    .log.lightSpeedIn.animated
                        .title Nuxt.js 解决跨域
                        .log-con
                            p
                                |【nuxtjs 指南】解决nuxtjs本地开发跨域和防止路由与api冲突问题
                            p
                                a(href="https://segmentfault.com/a/1190000010815403" target="_blank") https://segmentfault.com/a/1190000010815403
                    .log.lightSpeedIn.animated
                        .title Debounce 和 Throttle 的原理及实现
                        .log-con
                            p
                                |在处理诸如 resize、scroll、mousemove 和 keydown/keyup/keypress 等事件的时候，通常我们不希望这些事件太过频繁地触发，尤其是监听程序中涉及到大量的计算或者有非常耗费资源的操作。
                            p
                                a(href="https://blog.csdn.net/redtopic/article/details/69396722" target="_blank") https://blog.csdn.net/redtopic/article/details/69396722
                //- el-tab-pane(label="我做的小游戏" name='game')
                //-     .log.lightSpeedIn.animated
                //-         .title 拼图小游戏
                //-         .log-con
                //-             p
                //-                 a(href="https://hero7212.github.io/MLprizz/index.html" target="_blank") https://hero7212.github.io/MLprizz/index.html
                //- el-tab-pane(label="我做的小特效" name='effect')
                    .log.lightSpeedIn.animated
                        .title 相册特效
                        .log-con
                            p
                                a(href="https://hero7212.github.io/album/index.html" target="_blank") https://hero7212.github.io/album/index.html
                //- el-tab-pane(label="个人简历" name='resume')
                //-     .log.lightSpeedIn.animated
                //-         .title 个人简历
                //-         .log-con
                //-             p
                //-                 a(href="https://hero7212.github.io/vResume/index.html" target="_blank") https://hero7212.github.io/vResume/index.html

                el-tab-pane(label="我封装的组件" name='compos')
                    .log.lightSpeedIn.animated
                        .title 基于vux的地址选择控件
                        .log-con
                            p
                                a(href="https://hero7212.github.io/vux-area-selector/index.html#/" target="_blank") https://hero7212.github.io/vux-area-selector/index.html#/
                    .log.lightSpeedIn.animated
                        .title 仿优酷轮播组件
                        .log-con
                            p
                                a(href="https://hero7212.github.io/reactYuKuBanner/index.html" target="_blank") https://hero7212.github.io/reactYuKuBanner/index.html
                    .log.lightSpeedIn.animated
                        .title 拖拽范围选择器
                        .log-con
                            p
                                a(href="https://hero7212.github.io/dragPro/index.html" target="_blank") https://hero7212.github.io/dragPro/index.html
                    .log.lightSpeedIn.animated
                        .title 简单的联动编辑器
                        .log-con
                            p
                                a(href="https://hero7212.github.io/reactEditor/index.html" target="_blank") https://hero7212.github.io/reactEditor/index.html
                el-tab-pane(label="我的技能掌握度" name='skill')
                    .skill
                        .skill-bg
                        .skill-item(:class="{'rotateIn animated':ballAni}")
                            v-Ball(color='green' percent="70")
                            p.word HTML5
                        .skill-item(:class="{'rotateIn animated':ballAni}")
                            v-Ball(color='orange' percent="80")
                            p.word CSS3
                        .skill-item(:class="{'rotateIn animated':ballAni}")
                            v-Ball(color='blue' percent="72")
                            p.word Jquery
                        .skill-item(:class="{'rotateIn animated':ballAni}")
                            v-Ball(color='yellow' percent="60")
                            p.word React
                        .skill-item(:class="{'rotateIn animated':ballAni}")
                            v-Ball(color='red' percent="83")
                            p.word VUE
                        .skill-item(:class="{'rotateIn animated':ballAni}")
                            v-Ball(color='cyan' percent="30")
                            p.word Node
                        .skill-item(:class="{'rotateIn animated':ballAni}")
                            v-Ball(color='violet' percent="25")
                            p.word Ionic3
                        .skill-item(:class="{'rotateIn animated':ballAni}")
                            v-Ball(color='wheat' percent="55")
                            p.word 微信小程序
                el-tab-pane(label="本人相册" name='album' v-if="false")
                    .album
                        gallery(:images="images" :index="index" @close="index = null")
                        div(class="image" v-for="(image, imageIndex) in images" :key="imageIndex" @click="index = imageIndex" :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }")
                el-tab-pane(label="一些面试题" name='question')
                    .log.lightSpeedIn.animated
                        .title 解惑 ["1", "2", "3"].map(parseInt) 为何返回[1,NaN,NaN]
                        .log-con
                            p
                                a(href="https://blog.csdn.net/freshlover/article/details/19034079" target="_blank") https://blog.csdn.net/freshlover/article/details/19034079
</template>

<script>
import VueGallery from "vue-gallery";
import Ball from "@/components/Ball";
export default {
    name: "index",
    components: {
        "v-Ball": Ball,
        gallery: VueGallery
    },
    data() {
        return {
            list: [],
            imgUrl: "http://imagecloud.ghmagical.com/t_nw10.jpg",
            imgUrl2: "http://imagecloud.ghmagical.com/t_nw11.jpg",
            activeName: "log",
            ballAni: false,
            moveOut: false,
            images: [
                "../../static/img/ava.jpg"
            ],
            tranStyle: 'transform: translateZ(-85px) rotateY(0deg) rotateX(0deg)',
            index: null,
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            x0: 0,
            y0: 0,
            k: 0,
			musicPause: false
        };
    },

    methods: {
        tabSwitch(tab, event) {
            if (tab.name == "skill") {
                setTimeout(() => {
                    this.ballAni = true;
                }, 1000);
            } else {
                this.ballAni = false;
            }
        },
        toLogin() {
            this.$router.push("/");
        },
        doTrans($event,flag) {
            let e = $event;
            let [x,y] = [e.clientX,-e.clientY];
            let K = (y-this.y0) / (x - this.x0);
            if(this.k < K && K < -this.k){
                if(x > this.x0){
                    this.tranStyle = flag ? 'transform: translateZ(-85px) rotateY(-90deg) rotateX(0deg)' : 'transform: translateZ(-85px) rotateY(0deg) rotateX(0deg)'
                }else{
                    this.tranStyle = flag ? 'transform: translateZ(-85px) rotateY(90deg) rotateX(0deg)' : 'transform: translateZ(-85px) rotateY(0deg) rotateX(0deg)'
                }
            }else{
                if(y > this.y0){
                    this.tranStyle = flag ? 'transform: translateZ(-85px) rotateY(0deg) rotateX(-90deg)' : 'transform: translateZ(-85px) rotateY(0deg) rotateX(0deg)'
                }else{
                    this.tranStyle = flag ? 'transform: translateZ(-85px) rotateY(0deg) rotateX(90deg)' : 'transform: translateZ(-85px) rotateY(0deg) rotateX(0deg)'
                }
            }
        },
		controlAudio() {
			const audio = this.$refs.audio;
			if(audio.paused) {
				audio.play();
				this.musicPause = false;
			}else{
				audio.pause();
				this.musicPause = true;
			}
		}
    },

    created() {
        for (let i = 0; i < 18; i++) {
            this.list.push(i);
        }

        let [n, m] = [10, 28];
        setInterval(() => {
            n++;
            m--;
            this.moveOut = !this.moveOut;
            if (n > 28) {
                n = 10;
            }
            this.imgUrl = `http://imagecloud.ghmagical.com/t_nw${n}.jpg`;
            if (m < 10) {
                m = 28;
            }
            this.imgUrl2 = `http://imagecloud.ghmagical.com/t_nw${m}.jpg`;
        }, 6180);
    },

    mounted() {
        const oDiv = this.$refs.box
        this.x1 = oDiv.offsetLeft
        this.y1 = -oDiv.offsetTop
        this.x2 = this.x1 + oDiv.offsetWidth
        this.y2 = this.y1 - oDiv.offsetHeight
        this.x0 = (this.x1 + this.x2) / 2
        this.y0 = (this.y1 + this.y2) / 2
        this.k = (this.y2 - this.y1) / (this.x2 - this.x1)
    }
};
</script>

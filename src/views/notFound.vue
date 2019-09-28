<style lang="stylus" scoped>
.notFound
    #game 
        position absolute 
        left 0 
        top 0
    .error
        width 100%
        height 100%
        transform-style preserve-3d
        perspective 300px
    .center
        margin 0 auto
        width 640px
        position relative
        transform rotateX(20deg)
    .road1 
        width 640px
        height 1346px
        float left 
        position absolute
        top 0 
        left 0 
        z-index 1000
    .road2  
        width 640px
        height 1346px
        float left 
        position absolute
        top 0 
        left 0 
        z-index 1000
    .road1_DH   
        animation road1_DH 5s linear infinite
    .road2_DH    
        animation road2_DH 5s linear infinite
    .car 
        position absolute
        left 50%
        top 350px 
        width 50px 
        z-index 1000
        transform translate(-50%,-50%) rotateX(20deg)
    .wrap   
        position absolute
        left 0
        bottom 20px   
        width 100% 
    .sim-button 
        line-height 50px
        height 50px
        text-align center
        margin 0 auto
        width 160px
        cursor pointer
        color rgba(255,255,255,1)
        border 1px solid rgba(255,255,255,0.5)
    .button10 
        transition all .3s
        &:hover 
            animation move 1s both 
            background rgba(255,255,255,.2)
    @keyframes move 
        0%
            transition none       
        22% 
            transform skewX(-12.5deg) skewY(-12.5deg)
        33% 
            transform skewX(6.25deg) skewY(6.25deg)
        44% 
            transform skewX(-3.125deg) skewY(-3.125deg)
        55%
            transform skewX(1.5625deg) skewY(1.5625deg)
        66% 
            transform skewX(-0.78125deg) skewY(-0.78125deg)
        77% 
            transform skewX(0.390625deg) skewY(0.390625deg)
        88% 
            transform skewX(-0.1953125deg) skewY(-0.1953125deg)
    @keyframes road1_DH 
        0% 
            transform translate(0,0)
        50% 
            transform translate(0,1336px)
        51% 
            transform translate(0,-1336px)
        100% 
            transform translate(0,0)

    @keyframes road2_DH 
        0% 
            transform translate(0,-1336px)
        50% 
            transform translate(0,0) 
        100% 
            transform translate(0,1336px)
</style>

<template lang="pug">
    .notFound
        canvas#game(ref="oCanvas")
        .error 
            .center 
                .road1.road1_DH 
                    img(src="../../static/img/errorss.jpg" width="640")
                .road2.road2_DH 
                    img(src="../../static/img/errorss.jpg" width="640")
                img.car(src="../../static/img/cars6.png")    
        .wrap            
            .sim-button.button10(@click="goLogin")
                span 返回首页    
</template>

<script>
export default {
    name: "notFound",
    data() {
        return {
            msg: "我是404"
        };
    },
    methods: {
        drawCanvas() {
            const config = {
                width: window.innerWidth,
                height: window.innerHeight
            };
            const canvas = this.$refs.oCanvas;
            const ctx = canvas.getContext("2d");
            canvas.width = config.width;
            canvas.height = config.height;

            function point(x, y, r) {
                this.x = x;
                this.y = y;
                this.r = r;
                return this;
            }
            let points = [];

            function ran(max, min) {
                var min = arguments[1] || 0;
                return Math.floor(Math.random() * (max - min + 1) + min);
            }

            function moon() {
                var gradient = ctx.createRadialGradient(120, 120, 80, 120, 120, 800);
                //径向渐变
                gradient.addColorStop(0, "rgb(255,255,255)");
                gradient.addColorStop(0.01, "rgb(23,30,38)");
                gradient.addColorStop(0.2, "rgb(23,30,38)");
                gradient.addColorStop(0.4, "rgb(23,30,38)");
                gradient.addColorStop(1, "rgb(23,30,38)");
                ctx.save();
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, 400, 400);
                ctx.restore();
            }

            function init() {
                ctx.fillStyle = "#171E26";
                ctx.fillRect(0, 0, config.width, config.height);
                for (var i = 0; i < 200; i++) {
                    var x = Math.random() * config.width;
                    var y = Math.random() * config.height;
                    var r = ran(1.5, 0.4);
                    var p = new point(x, y, r);
                    ctx.fillStyle = "#fff";
                    ctx.beginPath();
                    ctx.arc(x, y, r, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.closePath();
                    points.push(p);
                }
                moon();
                anim();
            }

            function anim() {
                ctx.clearRect(0, 0, config.width, config.height);
                ctx.fillStyle = "#171E26";
                ctx.fillRect(0, 0, config.width, config.height);
                moon();
                for (var i = 0; i < 50; i++) {
                var p = points[i];
                ctx.fillStyle = "#fff";
                var r = ran(1.5, 0.4);
                points[i].r = r;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();
                }
                requestAnimationFrame(anim);
            }
                //动画
            var requestAnimFrame = (function() {
                return (
                    window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function(a) {
                        window.setTimeout(a, 1e3 / 60, new Date().getTime());
                    }
                    );
                })();
            init();
        },
        goLogin() {
            this.$router.push('/')
        }
    },
    mounted() {
        this.drawCanvas();
    }
};
</script>

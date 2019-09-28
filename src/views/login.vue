<style lang="stylus" scoped>
    .title
        color white
        position absolute
        top 40%
        width 100%
        text-align center
        font-size 60px
        text-shadow 2px 2px 20px pink
        letter-spacing 20px
        font-weight bold
    .wrap
        position absolute
        left 0
        bottom 33%
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
</style>

<template lang="pug">
    .login
        figure
            h1 非 常 有 魅 力 喔
            h1 非 常 有 魅 力 喔
            h1 非 常 有 魅 力 喔
            h1 非 常 有 魅 力 喔
            h1 非 常 有 魅 力 喔
            h1 非 常 有 魅 力 喔
            h1 非 常 有 魅 力 喔
            h1 非 常 有 魅 力 喔
            h1 非 常 有 魅 力 喔
            h1 非 常 有 魅 力 喔
        canvas#canvas
        .title.flip.animated 有魅力的博客
        .wrap.zoomIn.animated
            .sim-button.button10(@click="toIndex")
                span 进入博客
        v-Clock
</template>

<script>
import Clock from "@/components/Clock";
export default {
    name: "login",
    components: {
        "v-Clock": Clock
    },
    data() {
        return {
            canvasWidth:  window.screen.availWidth,
            canvasHeight:  window.screen.availHeight
        };
    },
    methods: {
        drawCanvas() {
            var canvas = document.getElementById('canvas'),
                ctx = canvas.getContext('2d'),
                w = canvas.width = window.innerWidth,
                h = canvas.height = window.innerHeight,
                hue = 217,
                stars = [],
                count = 0,
                maxStars = 1300;//星星数量
            var canvas2 = document.createElement('canvas'),
                ctx2 = canvas2.getContext('2d');
            canvas2.width = 100;
            canvas2.height = 100;
            var half = canvas2.width / 2,
                gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
            gradient2.addColorStop(0.025, '#fefefe');
            gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 73%)');
            gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
            gradient2.addColorStop(1, 'transparent');
            ctx2.fillStyle = gradient2;
            ctx2.beginPath();
            ctx2.arc(half, half, half, 0, Math.PI * 2);
            ctx2.fill();
            // End cache
            function random(min, max) {
                if (arguments.length < 2) {
                max = min;
                min = 0;
                }
                if (min > max) {
                var hold = max;
                max = min;
                min = hold;
                }
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            function maxOrbit(x, y) {
                var max = Math.max(x, y),
                diameter = Math.round(Math.sqrt(max * max + max * max));
                return diameter / 2;
                //星星移动范围，值越大范围越小，
            }
            var Star = function() {
                this.orbitRadius = random(maxOrbit(w, h));
                this.radius = random(60, this.orbitRadius) / 8;
                //星星大小
                this.orbitX = w / 2;
                this.orbitY = h / 2;
                this.timePassed = random(0, maxStars);
                this.speed = random(this.orbitRadius) / 500000;
                //星星移动速度
                this.alpha = random(2, 10) / 10;
                count++;
                stars[count] = this;
            }
            Star.prototype.draw = function() {
                var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
                y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
                twinkle = random(10);
                if (twinkle === 1 && this.alpha > 0) {
                this.alpha -= 0.05;
                } else if (twinkle === 2 && this.alpha < 1) {
                this.alpha += 0.05;
                }
                ctx.globalAlpha = this.alpha;
                ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
                this.timePassed += this.speed;
            }
            for (var i = 0; i < maxStars; i++) {
                new Star();
            }
            function animation() {
                ctx.globalCompositeOperation = 'source-over';
                ctx.globalAlpha = 0.5; //尾巴
                ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)';
                ctx.fillRect(0, 0, w, h)
                ctx.globalCompositeOperation = 'lighter';
                for (var i = 1, l = stars.length; i < l; i++) {
                stars[i].draw();
                };
                window.requestAnimationFrame(animation);
            }
            animation();
        },

        toIndex(){
            this.$router.push('/index')
        }
    },


    mounted() {
        this.drawCanvas();
    }
};
</script>

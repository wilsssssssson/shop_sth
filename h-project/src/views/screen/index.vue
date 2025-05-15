<template>
    <canvas  id="canvas" width="400" height="400"></canvas>
</template>

<script setup>
import { onMounted } from 'vue';





onMounted(() => {
    window.requestAnimationFrame(draw);
});


function draw() {
  var canvas = document.getElementById("canvas");
  const now = new Date();
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    const devicePixelRatio = window.devicePixelRatio || 1;

    ctx.save();
    ctx.clearRect(0, 0, 400, 400);
    ctx.translate(200, 200);

    ctx.rotate(-Math.PI / 2);
    ctx.strokeStyle = "black";
    ctx.fillStyle = "white";
    ctx.lineWidth = 8*devicePixelRatio;
    ctx.lineCap = "round";
    //画外边框
    ctx.beginPath();
    ctx.arc(0,0,140,0,2*Math.PI)
    ctx.stroke();
    
    //时针刻度
    ctx.save();
    for (let i = 0; i < 12; i++) {
        
        ctx.beginPath();
        ctx.rotate(Math.PI / 6);
        ctx.moveTo(100, 0);
        ctx.lineTo(120, 0);
        ctx.stroke();
    }
    ctx.beginPath();
    ctx.restore();
    // 分针刻度
    ctx.save();
    ctx.lineWidth = 5*devicePixelRatio;
    for (let i = 0; i < 60; i++) {
        ctx.beginPath();
        ctx.rotate(Math.PI / 30);
        ctx.moveTo(100, 0);
        ctx.lineTo(110, 0);
        ctx.stroke();
    }
    ctx.restore();
    canvas.fillStyle = "black";
    const ms=now.getMilliseconds();
    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hr = now.getHours() % 12;


    // 时针
    ctx.save();
    ctx.rotate(
        (Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec,
    );//转动角度：分针转一分就是360°/12/60
    ctx.lineWidth = 14*devicePixelRatio;
    ctx.beginPath();
    ctx.moveTo(-10, 0);
    ctx.lineTo(80, 0);
    ctx.stroke();
    ctx.restore();
    
    // 分针
    ctx.save();
    ctx.strokeStyle = "blue";
    ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
    ctx.lineWidth = 10*devicePixelRatio;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(112, 0);
    ctx.stroke();
    ctx.restore();
 

    ctx.save();
    ctx.strokeStyle = "red";
    ctx.rotate((Math.PI / 30) * sec+ (Math.PI / 30000) *ms);
    ctx.lineWidth = 8*devicePixelRatio;
    ctx.beginPath();
    ctx.moveTo(-28, 0);
    ctx.lineTo(112, 0);
    ctx.stroke();
    ctx.restore();
    ctx.restore();
    
    window.requestAnimationFrame(draw);
  }
}
</script>

<style lang="scss" scoped>
#canvas {
        border: 1px solid black;
        margin: 100px
        ;
}
</style>
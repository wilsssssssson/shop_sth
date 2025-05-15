<template>
    <div class="timer">
        {{ countdownDisplay }}
        <canvas ref="canvasRef"></canvas>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted } from 'vue';

const props = defineProps({
    timer: {
        type: Number,
        default: 30,
        validator: (value: number) => value >= 0
    }
});

const countdownDisplay = ref(props.timer);
const canvasRef = ref<HTMLCanvasElement | null>(null);
let intervalId: number;
let animationFrameId: number;

function startCountdown() {
    intervalId = setInterval(() => {
        if (countdownDisplay.value > 0) {
            countdownDisplay.value--;
        } else {
            clearInterval(intervalId);
        }
    }, 1000);
}

function draw() {
    if (!canvasRef.value) return;
    
    const ctx = canvasRef.value.getContext('2d');
    if (!ctx) return;

    // 清除画布
    ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height);
    
    // 绘制逻辑
    const centerX = canvasRef.value.width / 2;
    const centerY = canvasRef.value.height / 2;
    const radius = 40;
    const startAngle = -Math.PI / 2;
    const endAngle = startAngle + (countdownDisplay.value / props.timer) * 2 * Math.PI;
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.lineWidth = 8;
    ctx.strokeStyle = 'skyblue';
    ctx.stroke();

    if (countdownDisplay.value > 0) {
        animationFrameId = requestAnimationFrame(draw);
    }
}

watch(() => props.timer, (newVal) => {
    countdownDisplay.value = newVal;
    startCountdown();
    draw();
});

onMounted(() => {
    if (canvasRef.value) {
        canvasRef.value.width = 100;
        canvasRef.value.height = 100;
    }
    startCountdown();
    draw();
});

onUnmounted(() => {
    clearInterval(intervalId);
    cancelAnimationFrame(animationFrameId);
});
</script>

<style scoped>
.timer {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    position: relative;
}

canvas {
    position: absolute;
    left: 0;
    top: 0;
}
</style>
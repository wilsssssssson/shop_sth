<template>  
    <svg :style="{width,height}">

        <use :href="prefix+name" :fill="color"></use>
    </svg>
</template>

<script setup>
defineProps({

    //xlink前缀
    prefix:{
        type:String,
        default:'#icon-'
    },
    name:String,
    //颜色
    color:{
        type:String,
        default:'pink'
    },
    width:{
        type:String,
        default:'16px'
    },
    height:{
        type:String,
        default:'16px'
    }
})

</script>    


<style scoped>

</style>


<template>
    <div>
         <el-input :placeholder="search.placeholder"></el-input>
        <el-button icon="Search" circle></el-button> 
    </div>
      
</template>

<script setup lang="ts">

const search=defineProps({
    placeholder:{
        type:String,
        default:'请输入关键字'
    },



})

</script>

<style scoped>

</style>
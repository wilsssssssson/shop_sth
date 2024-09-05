<template>
    <div>
        用户管理{{ useUserStore().userInfo }}
    </div>
</template>

<script setup>

import { useUserStore} from '@/store/modules/user'


</script>

<style lang="scss" scoped>

</style>
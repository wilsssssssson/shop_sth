import {defineStore} from 'pinia'
import { ref } from 'vue'

export const useSettingStore = defineStore('User',()=>{
    const refresh = ref(true)
    const isFullScreen=ref(false)

    return {
        refresh,
        isFullScreen
    }
})
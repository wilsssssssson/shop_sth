import {defineStore} from 'pinia'
import { ref } from 'vue';
import { loginForm } from '@/api/user/type';
import { reqLogin } from '@/api/user';
export const useUserStore = defineStore('User',()=>{
    const token=ref(localStorage.getItem('token'));
    async function userLogin(data:loginForm){
    
        let result:any= await reqLogin(data)
        if (result.code===200){
            token.value=result.data.token;
            localStorage.setItem('token',result.data.token)
            return 'ok'
        }else{
            return Promise.reject(new Error(result.data.message))
        }
    }

    return{
        userLogin
    }
})
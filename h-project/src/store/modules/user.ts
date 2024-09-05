import {defineStore} from 'pinia'
import { ref } from 'vue';
import { loginForm,userInfo } from '@/api/user/type';
import { reqLogin,reqUserInfo } from '@/api/user';

export const useUserStore = defineStore('User',()=>{
    const token=ref(localStorage.getItem('token'));
    const userInfo=ref<Partial<userInfo>>({})

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

    async function getUserInfo(){
        let result=await reqUserInfo(localStorage.getItem('token'));
        userInfo.value=result.data.checkUser;

    }

    function logOut(){
        token.value=null;
        localStorage.removeItem('token');
        userInfo.value={};
    }  

    return{
        logOut,
        token,
        getUserInfo,
        userLogin,
        userInfo
    }
})
import {defineStore} from 'pinia'
import { ref } from 'vue';
import { loginForm,userInfo } from '@/api/user/type';
import { reqLogin,reqLogOut,reqUserInfo } from '@/api/user';
import { ElMessage } from 'element-plus';
import { userInfoResponseData,loginResponseData } from '@/api/user/type';
export const useUserStore = defineStore('User',()=>{
    const token=ref(localStorage.getItem('token'));
    const userInfo=ref<Partial<userInfo>>({})

    async function userLogin(data:loginForm){ 
        let result:loginResponseData= await reqLogin(data)
        if (result.code===200){
            token.value=result.data;
            localStorage.setItem('token',result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error(result.data))
        }
    }

    async function getUserInfo(){
        let result:userInfoResponseData=await reqUserInfo(localStorage.getItem('token'));
        if(result.code  ==200){
            userInfo.value=result.data;
            return 'ok'
        }else{
            console.log(result.message)
            return Promise.reject(new Error(result.message))
        }
        
        


    }

    function logOut(){
        
        let result:any=reqLogOut(localStorage.getItem('token'));
        if(result.code==200){ 
            clearToken();
        }else{
            ElMessage({
                type: 'error',
                message: '退出登录失败，请稍后再试'
            })
        }

        
    }  

    function clearToken(){
        userInfo.value={};
        token.value=null;
        localStorage.removeItem('token');
    }

    return{
        clearToken,
        logOut,
        token,
        getUserInfo,
        userLogin,
        userInfo
    }
})
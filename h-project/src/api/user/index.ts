//用户接口
import request  from '@/utils/request.ts';
import { userREsponseData,loginForm,loginResponseData } from './type';

enum API{
    LOGIN_URL='/user/login',
    USERINFO_URL='/user/info'
}

export const reqLogin = (data:loginForm )=>request.post<any,loginResponseData >(API.LOGIN_URL,data);


export const reqUserInfo = (userToken:any)=>request.get<any,userREsponseData>(API.USERINFO_URL,{
    headers:{
        token:userToken
    }
})
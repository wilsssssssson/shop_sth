//用户接口
import request  from '@/utils/request.ts';
import { loginForm,loginResponseData,userInfoResponseData } from './type';

enum API{
    LOGIN_URL='/admin/acl/index/login',
    USERINFO_URL='/admin/acl/index/info',
    LOG_OUT_URL='/admin/acl/index/logout'
}

export const reqLogin = (data:loginForm )=>request.post<any,loginResponseData >(API.LOGIN_URL,data);


export const reqUserInfo = (userToken:any)=>request.get<any,userInfoResponseData>(API.USERINFO_URL,{
    headers:{
        token:userToken
    }
})

export const reqLogOut = (userToken:any)=>request.post<any,any>(API.LOG_OUT_URL,{
    headers:{
        token:userToken
    }
})
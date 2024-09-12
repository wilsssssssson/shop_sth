//usertype

export interface loginForm {
    username: string,
    password: string
}
export interface responseData {
    code: number,
    message: string,
    ok: boolean,
}

export interface loginResponseData extends responseData {
    data: string
}

export interface userInfo {
    avatar:string,
    buttons:string[],
    name:string,
    roles:string[],
    routes:string[],
}

export interface userInfoResponseData extends responseData {   
    data:userInfo

}



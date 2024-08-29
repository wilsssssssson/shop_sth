export interface loginForm {
    username: string,
    password: string
}

export interface dataType {
    token: string
}

export interface loginResponseData {
    code: number,
    data: dataType
}

export interface userInfo{
    userId: number,
    avatar:string,
    username: string,
    password: string,
    desc: string,
    roles: string[],
    buttons:string[],
    routes: string[],
    token: string,
}

export interface user{
    checkUser:userInfo
}

export interface  userREsponseData {
    code: number,
    data:user
}
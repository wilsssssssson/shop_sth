export interface responseData {
    code: number,
    message: string,
    ok: boolean,
}
export interface productData{
    id?: number,
    tmName: string,
    logoUrl: string,
}

export interface productreswponseData {
    records: productData[],
    total: number,

}

export interface productResponseData extends responseData {
    data: productreswponseData
}
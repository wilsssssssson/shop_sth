import request from '@/utils/request';
import { productResponseData,productData } from '@/api/product/types';


enum ProductApi {
    GET_PRODUCT_LIST = '/admin/product/baseTrademark',
    GET_PRODUCT_BY_NAME = '/admin/product/baseTrademark/findBaseTrademarkByKeyword',
    DELITE_PRODUCT = '/admin/product/baseTrademark/remove',
    UPDATE_PRODUCT = '/admin/product/baseTrademark/update',
    SAVE_PRODUCT = '/admin/product/baseTrademark/save',
}

export const getProductList = (page:number,limit:number )=>request.get<any, productResponseData>(ProductApi.GET_PRODUCT_LIST+`/${page}`+`/${limit}`);

export const getProdctByName = (name:string) => request.get<any, productResponseData>(ProductApi.GET_PRODUCT_BY_NAME+`/${name}`);

export const addProduct =(data:productData) => request.post<any, productResponseData>(ProductApi.SAVE_PRODUCT,data);

export const deleteProduct = (id:number) => request.delete<any, any>(ProductApi.DELITE_PRODUCT+`/${id}`);

export const updateProduct = (data:productData) => request.put<any, productResponseData>(ProductApi.UPDATE_PRODUCT,data);
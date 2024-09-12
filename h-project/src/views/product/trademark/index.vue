<template>
    <div>
        <el-card>
                <div style="display: flex;justify-content: space-between;align-items: center;margin-bottom: 10px;">
                    <el-button icon="Plus" type="primary" size="small" @click="changeDialogTable">添加数据</el-button>
                    <el-input 
                        style="width:50%;padding:0 0;"
                        placeholder="请输入品牌名称"
                        v-model="searchName"
                        >
                        <template #append>
                            <el-button icon="Search" type="primary" @click="submitGetProductByName"></el-button>
                        </template>
                    </el-input>
                </div>
                
                <el-dialog :destroy-on-close="true" @close="closeDialogTable" v-model="dialogTableVisible" :title="newProduct.id? '编辑商品' : '添加商品'" width="66%">
                    <el-form  :model="newProduct" class="demo-form-inline">
                        <el-form-item label="品牌名称">
                            <el-input  v-model="newProduct.tmName" placeholder="请输入品牌名称" />
                        </el-form-item>
                        <el-form-item label="品牌图标">
                            <el-upload
                                class="upload-demo"
                                action="/api/admin/product/fileUpload"
                                multiple
                                :limit="1"
                                accept="image/*"
                                :on-success="handleSuccess"
                            >
                                <el-button type="primary">点击上传</el-button>
                             
                            </el-upload>
                        </el-form-item>
                        <div v-if="newProduct.id" style="margin-left: 50px;"><img :src="newProduct.logoUrl" style="max-width:100px;max-height: 100px;"></div>
                    </el-form>
                    <template #footer>
                    <div class="dialog-footer">
                        <el-button type="primary" @click="submitProduct">
                        确定
                        </el-button>
                    </div>
                    </template>
                </el-dialog>
            <el-table 
                :data="tableData" 
                style="width: 100%;margin:8px 0;"
                border
            >
                <el-table-column prop="id" label="序号" width="80" />
                <el-table-column prop="tmName" label="品牌名称"  />
                <el-table-column prop="logoUrl" label="品牌LOGO">
                    <template v-slot="scope" >
                        <div class="img-box">
                            <el-image
                            loading='lazy'
                            :src="scope.row.logoUrl"
                        >
                            <template #placeholder>
                                <SvgIcon name="loading" width='100px' height='100px' />
                            </template>
                            <template #error>
                                <SvgIcon name="loading" width='100px' height='100px'/>
                            </template>
                        </el-image>
                        </div>
                        
                    </template>
                    
                </el-table-column>
                <el-table-column label="品牌操作" >
                    <template v-slot="scope" >
                        <div class="button-box">
                            <el-button style="padding:0 0;" icon="Edit" type="warning" text size="small" @click="editProduct(scope.row.id,scope.row.tmName,scope.row.logoUrl)">编辑</el-button>

                            <el-popconfirm
                                width="220"
                                icon="InfoFilled"
                                icon-color="#7FFFD4"
                                :title="'确认删除商品   '+scope.row.tmName+'？'"
                                @confirm=" deleteProductConfirm(scope.row.id)"
            
                                confirm-button-type="danger"
                            >
                                <template #reference>
                                    <el-button style="padding:0 0;" icon="Edit" type="danger" text size="small" >删除</el-button>
                                </template>
                               
                            </el-popconfirm>
                        </div>
                    </template>
                    
                    
                </el-table-column>
                
            </el-table>
            <el-pagination
                v-model:current-page="currentPage"
                v-model:page-size="currentPageSize"
                :page-sizes="pageSize"
                :background="true"
                layout="prev, pager, next, jumper,->,total, sizes"
                :total="totalNumber"
                @current-change="handleCurrentChange"
                @size-change="handleSizeChange"
            />

            
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getProductList ,addProduct, deleteProduct,updateProduct,getProdctByName} from '@/api/product'
import {productResponseData,productData} from '@/api/product/types'
import { onMounted } from 'vue';
import { ElMessage } from 'element-plus';
const currentPage=ref(1)
const pageSize=ref([1,  3, 5,10])
const currentPageSize=ref(3)
const totalNumber=ref(3)
let tableData=ref<any>()
//let tableData=reactive<productData[]>([])
const searchName=ref('')

const dialogTableVisible=ref(false)
const newProduct=ref<productData>({
    id:undefined,
    tmName: '',
    logoUrl: '',
})


onMounted(()=>{
    getProduct(currentPage.value,currentPageSize.value)
})

async function getProduct(page:number,limit:number){
    getProductList(page,limit)
    .then((res:productResponseData)=>{
        if(res.code==200){
            tableData.value=res.data.records
            totalNumber.value=res.data.total        
        }else{
            console.log(res.message)
        }       
    })
    .catch((err:any)=>{
        console.log(err)  
    })  
}

async function submitGetProductByName(){
    const res=await getProdctByName(searchName.value)
    
    tableData.value=res.data
     
    
}

function handleCurrentChange(to:number){
    currentPage.value=to
    getProduct(currentPage.value,currentPageSize.value)

}

function handleSizeChange(size:number){
    currentPageSize.value=size
    getProduct(currentPage.value,currentPageSize.value)
}

function changeDialogTable(){
    dialogTableVisible.value=true
}

function closeDialogTable(){
    newProduct.value={
        id:undefined,
        tmName: '',
        logoUrl: '',
    }
}

function handleSuccess(response:any) {
    if(response.code==200){
        newProduct.value.logoUrl=response.data
    }else{
        ElMessage.error(response.message)
    }
}

function submitProduct(){
    if(newProduct.value.id){
        updateProduct(newProduct.value)
    }else{
        addProduct(newProduct.value)
    }
    dialogTableVisible.value=false
    getProduct(currentPage.value,currentPageSize.value)
}

function deleteProductConfirm(id:number){
    deleteProduct(id)
    getProduct(currentPage.value,currentPageSize.value)
}

function editProduct(id:number,tmName:string,logoUrl:string){
    newProduct.value={
        id:id,
        tmName: tmName,
        logoUrl: logoUrl,
    }
    dialogTableVisible.value=true

}
</script>

<style lang="scss" scoped>
.img-box{
    width: 80%;
    max-width: 100px;
    min-height: 80px;
    display: flex;
    align-items: center;
}
.button-box{
    display: flex;

}

</style>
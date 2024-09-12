<template>
    <div class="login-container">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <el-form class="login-form" label-width="auto" :model="userData" :rules="rules" ref="loginFormRef">
                    <h1>HELLO!</h1>
                    <h2>欢迎来到买东西平台</h2>
                    <el-form-item label="用户名"  prop="username">
                        <el-input 
                            :prefix-icon="User" 
                            v-model="userData.username"
                            clearable
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="密码"  prop="password">
                        <el-input 
                            :prefix-icon="Lock" 
                            show-password 
                            v-model="userData.password"
                            clearable
                        ></el-input>
                    </el-form-item>
                    <el-form-item label=" ">
                        <el-button :loading="loading" class="login-button" type="primary" @click="checkForm">登 录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>

    
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue';
import { reactive,ref } from 'vue';
import { useUserStore } from '@/store/modules/user'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
let $router=useRouter();
const timeMessage =ref('');

const loading=ref(false);
const loginFormRef=ref();



const userNameVaildator= (rule: any, value: any, callback: any) =>{//这里不能用function
    if(value.length>8){
        callback(new Error('用户名太长'));
    }else if(value.length<4){
        callback(new Error('用户名太短'));
    }else{
        callback();
    }
};
const passwordVaildator= (rule: any, value: any, callback: any) =>{
    if(/^\d+$/.test(value)){
        callback();
    }else{
        callback(new Error('密码只能包含数字'));
    }
};
const userData = reactive({
    username: 'admin',
    password: '111111'
});
const rules = reactive({
    username:[{trigger:'change' , validator:userNameVaildator}],
    password:[{trigger:'change' , validator:passwordVaildator}]
})

function checkForm(){
    loginFormRef.value.validate()
    .then(login)
    .catch((error:any)=>{
        let keys = Object.keys(error);
        keys.forEach(key => {
            console.log(error[key][0]);
        }); 
    })
}

async function login(){
    // await loginFormRef.value.validate()
    loading.value=true;
    try {
        await useUserStore().userLogin(userData)
        loading.value=false;
        getTime()
        ElMessage({
            message: timeMessage.value+'，'+userData.username,
            type: 'success',
        })
        $router.push({ path: '/' });
    } catch (error) {
        ElMessage({
            message: (error as Error).message,
            type: 'error',
        })
        loading.value=false;
    }
    
}

function getTime(){
    const hours = new Date().getHours();
    if(hours>=0&&hours<6){
        timeMessage.value='凌晨了，早点休息吧'
    }else if(hours>=6&&hours<11){
        timeMessage.value='上午好'
    }else if(hours>=11&&hours<14){
        timeMessage.value='中午好'
    }else if(hours>=14&&hours<19){
        timeMessage.value='下午好'
    }else if(hours>=19&&hours<24){
        timeMessage.value='晚上好'
    }
}
getTime()
</script>

<style scoped lang="scss">
.login-container {
    width: 100%;
    height: 100vh;
    background: url('@/assets/icons/dots.svg');
    
}

.login-form {

    position: relative;
    top: 20vh;
    width: 70%;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    border-radius: 10px;
    padding: 40px;

    h1 {
        font-size: 40px;
    }

    ;

    h2 {
        margin: 20px 0px;

    }

    ;
}

.login-button {
    width: 100%;
}
</style>
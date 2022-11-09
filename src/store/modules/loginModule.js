export default {
    namespaced:true,
    state:{
        userinfo:{
            user:'',
            token:''
        }
    },
    mutations:{
        //设置用户信息
        setUser(state,payload){
            state.userinfo = payload;
        },
        //清空
        clearUser(state){
            state.userinfo={
                user:'',
                token:''  
            }
        }
    },
    actions:{

    },
    getters:{

    }

}
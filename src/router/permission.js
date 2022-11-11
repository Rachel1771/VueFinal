import router from './index'
//获取vuex数据
import store from '../store/index'
//路由拦截
router.beforeEach((to,from,next)=>{
  //1. 判断是否需要登录
  if(to.matched.some(ele=>ele.meta.isLogin)){
      //2. 判断当前的用户是否已经登录
      let token=store.state.loginModule.userinfo.token;
      if(token){
        next()
      }else{
        next('/login')
      }
  }else{// 不需要登录
    next();
  }
})
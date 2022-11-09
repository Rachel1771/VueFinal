import store from '../store/index'
//持久化
let user = localStorage.getItem('user')
if(user){
  user = JSON.parse(user);
  store.commit('loginModule/setUser',user)
}
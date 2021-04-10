import Taro from '@tarojs/taro'
import { message } from 'taro-ui';
import { login } from '../service/Login/login'

export default {
  namespace: 'global', // 这是模块名
  state: { // 初始化数据
    name:"欢迎来到Taro-Ui"
  },

  effects: { 
   *login({payload},{call}){
      const data = yield call(login,payload)
      if(data.code===1){
        message(data.message)
        Taro.setStorage({ key:"token", data:data.data.token})
      }else{
        message(data.message)
      }
   }
  },

  reducers: { // 同步方法
    save(state, {payload }) {
      return {...state, ...payload };
    },
  },
};
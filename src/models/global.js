import Taro from '@tarojs/taro';
import { login } from '@/service/Login/login';

export default {
  namespace: 'global', // 这是模块名
  state: {
    form: {
      userName: '',
      passWord: '',
    },
  },

  effects: {
    *login({ payload }, { call }) {
      const data = yield call(login, payload);
      if (data.code === 1) {
        Taro.setStorage({ key: 'token', data: data.data.token });
      }
    },
  },

  reducers: {
    // 同步方法
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};

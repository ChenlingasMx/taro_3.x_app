import Taro from '@tarojs/taro';
import { login } from '@/service/Login/login';

export default {
  namespace: 'global', // 这是模块名
  state: {
    form: {
      userName: '',
      passWord: '',
    },
    data: [
      {
        id: 1,
        city: '湖北',
        name: '合计',
        name2: '213',
        name3: '0.17',
        name4: '98',
        name5: '98%',
        name6: '70',
        name7: '70%',
        name8: '10',
      },
      {
        id: 2,
        city: '湖北',
        name: '合计',
        name2: '213',
        name3: '0.17',
        name4: '98',
        name5: '98%',
        name6: '70',
        name7: '70%',
        name8: '10',
      },
      {
        id: 3,
        city: '湖北',
        name: '合计',
        name2: '213',
        name3: '0.17',
        name4: '98',
        name5: '98%',
        name6: '70',
        name7: '70%',
        name8: '10',
      },
      {
        id: 4,
        city: '湖北',
        name: '合计',
        name2: '213',
        name3: '0.17',
        name4: '98',
        name5: '98%',
        name6: '70',
        name7: '70%',
        name8: '10',
      },
      {
        id: 5,
        city: '湖北',
        name: '合计',
        name2: '213',
        name3: '0.17',
        name4: '98',
        name5: '98%',
        name6: '70',
        name7: '70%',
        name8: '10',
      },
      {
        id: 6,
        city: '湖北',
        name: '合计',
        name2: '213',
        name3: '0.17',
        name4: '98',
        name5: '98%',
        name6: '70',
        name7: '70%',
        name8: '10',
      },
    ],
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

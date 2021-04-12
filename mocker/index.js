const delay = require('mocker-api/lib/delay');
const login = require('./login');
// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';

const proxy = {
  _proxy: {

    // http://10.10.103.79:8001
    proxy: {
      
    },
  },
  changeHost: true,
  ...login,
};

module.exports = noProxy ? { ...proxy } : delay(proxy, 100);
// module.exports = proxy;
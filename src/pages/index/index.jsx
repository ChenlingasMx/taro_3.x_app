import React from 'react';
import { View } from '@tarojs/components';
import { connect } from 'react-redux';
import { AtButton, AtInput, AtForm } from 'taro-ui';
import './index.less';

// eslint-disable-next-line
const Index = React.forwardRef((props, ref) => {
  const {
    global: { form },
  } = props;

  // 点击提交按钮 调用接口
  const handleSubmit = () => {
    window.console.log('form', form);
  };

  // 输入input变化
  const handleInputChange = (type, value) => {
    if (type === 'userName') {
      props.dispatch({ type: 'global/save', payload: { form: { ...form, userName: value } } });
    }
    if (type === 'passWord') {
      props.dispatch({ type: 'global/save', payload: { form: { ...form, passWord: value } } });
    }
  };

  return (
    <View className="index">
      <AtForm>
        <AtInput
          name="userName"
          title="账号"
          type="text"
          placeholder="请输入手机号"
          value={form.userName}
          onChange={handleInputChange.bind(this)}
        />
        <AtInput
          name="passWord"
          title="密码"
          type="password"
          placeholder="请输入密码"
          value={form.passWord}
          onChange={handleInputChange.bind(this)}
        />
        <AtButton className="login_btn" onClick={handleSubmit.bind(this)}>
          登录
        </AtButton>
      </AtForm>
    </View>
  );
});
export default connect(state => ({
  global: state.global,
}))(Index);

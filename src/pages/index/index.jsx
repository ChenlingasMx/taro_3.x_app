import React from 'react';
import { View } from '@tarojs/components';
import { connect } from 'react-redux';
import { AtButton, AtInput, AtForm } from 'taro-ui';
import './index.less';

// eslint-disable-next-line
const Index = React.forwardRef((props, ref) => {
  const {
    global: {
      form: { userName, passWord },
      form,
    },
  } = props;

  // 点击提交按钮 调用接口
  const handleSubmit = () => {
    window.console.log('form', form);
    props.dispatch({
      type: 'global/login',
      payload: form,
    });
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
          title="账号"
          type="userPhone"
          placeholder="请输入手机号"
          value={userName}
          onChange={handleInputChange.bind(this, 'userName')}
        />
        <AtInput
          title="密码"
          type="password"
          placeholder="请输入密码"
          value={passWord}
          onChange={handleInputChange.bind(this, 'passWord')}
        />
        <AtButton className="login_btn" formType="submit" onClick={handleSubmit.bind(this)}>
          登录
        </AtButton>
      </AtForm>
    </View>
  );
});
export default connect(state => ({
  global: state.global,
}))(Index);

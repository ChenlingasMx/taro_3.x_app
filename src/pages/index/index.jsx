import React from 'react'
import { View, Text } from '@tarojs/components'
import { connect } from 'react-redux'
import { AtButton } from 'taro-ui'
import "taro-ui/dist/style/components/button.scss" // 按需引入

// eslint-disable-next-line
const Index = React.forwardRef((props, ref) => {
  const { global: { name } } = props
  const handleClick = () => {
    props.dispatch({
      type: "global/save",
      payload: {
        name: "taro-ui欢迎你的到来"
      }
    })
  }
  return (
    <View className='index'>
      <Text>{name}</Text>
      <AtButton onClick={handleClick.bind(this)} />
    </View>
  )
})
export default connect(state => ({
  global: state.global,
}))(Index);

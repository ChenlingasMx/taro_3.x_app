import React from 'react'
import { View, Text } from '@tarojs/components'
import { connect } from 'react-redux'
import { AtButton } from 'taro-ui'
import "taro-ui/dist/style/components/button.scss" // 按需引入

// eslint-disable-next-line
const Index = React.forwardRef((props, ref) => {
  const { global: { name } } = props
  return (
    <View className='index'>
      <Text>{name}</Text>
      <AtButton />
    </View>
  )
})
export default connect(state => ({
  global: state.global,
}))(Index);

import React, { useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import { connect } from 'react-redux'
import { AtButton, AtInput } from 'taro-ui'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import "./index.less"

// eslint-disable-next-line
const Index = React.forwardRef((props, ref) => {
  const { global: { name, inputValue } } = props

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
      <AtInput value={inputValue} onChange={e => props.dispatch({ type: "global/save", payload: { inputValue: e } })} />
      <Text className="title">{inputValue}</Text>
      <Text style={{ color: "red" }}>{inputValue}</Text>
      <AtButton onClick={handleClick.bind(this)} />
    </View>
  )
})
export default connect(state => ({
  global: state.global,
}))(Index);

import Taro from '@tarojs/taro'
import { formatTime } from '../utils/common'

export const logError = (name, action, info) => {
  if (!info) {
    info = 'empty'
  }
  try {
    let deviceInfo = Taro.getSystemInfoSync()
    var device = JSON.stringify(deviceInfo)
  } catch (error) {
    console.error('not support getSystemInfoSync api', error.message)
  }
  let time = formatTime(new Date())
  console.error(time, name, action, info, device)
  // 如果使用了 第三方日志自动上报
  // if (typeof action !== 'object') {
  // fundebug.notify(name, action, info)
  // }
  // fundebug.notifyError(info, { name, action, device, time })
  if (typeof info === 'object') {
    info = JSON.stringify(info)
  }
}
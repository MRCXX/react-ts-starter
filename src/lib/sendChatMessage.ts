
import log from './log'
import { Modal } from 'antd-mobile'

interface Params {
  msgtype: 'text' | 'image' | 'video' | 'file' | 'news',
  text?: {
    content: string | number
  },
  video?: {
    mediaid: string
  },
  image?: {
    mediaid: string
  },
  file?: {
    mediaid: string
  },
  news?: {
    link: string,
    title: string,
    desc?: string,
    imgUrl?: string,
  }
}

declare const wx: any

const sendChatMessage = function (params: Params): void {
  wx.invoke('sendChatMessage', params, (res: any) => {
    if (res.err_msg !== 'sendChatMessage:ok') {
      log.error(res)
      Modal.alert('提示', '发送失败', [
        { text: '我知道了' },
      ])
    }
  })
}

export default sendChatMessage
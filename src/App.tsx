import React, { useState, useEffect } from 'react'
import Root from './screen/Root'
import './App.css'

import * as com from 'antd-mobile'
import http from './lib/http'
import log from './lib/log'
import sendChatMessage from './lib/sendChatMessage'

declare const wx: any

interface Cfg {
  errcode: number,
  errmsg: string,
  noncestr: string,
  timestamp: number,
  url: string,
  corpid: string,
  agentid: string,
  signature: string,
}

interface CheckJsApiResuls {
  err_info: string,
  checkResult: any,
  errMsg: string
}

const jsApiList: string[] = ['checkJsApi']
const agentJsApiList: string[] = ['selectExternalContact', 'sendChatMessage']

// const App = () => {
//   const Abc: React.ComponentClass = com.Button
//   // const [data, dataSet] = useState(false)

//   useEffect(() =>{
//     log.init()
//     // 使用浏览器的 API 更新页面标题
//     document.title = "真正的快捷回复"

//     async function created() {
//       const cfg: any = await http({
//         url: '/index.php?model=process&m=ajax&a=test',
//         params: {
//           url: window.location.href
//         }
//       })
//       const agentCfg: any = await http({
//         url: '/index.php?model=process&m=ajax&a=test',
//         params: {
//           url: window.location.href,
//           type: 'agent'
//         }
//       })
//       initJSSDK(cfg.data, agentCfg.data)
//       // dataSet(res)
//     }
//     created()
//   }, [])

//   function initJSSDK(cfg: Cfg, agentCfg: Cfg): void {
//     wx.config({
//       beta: true,// 必须这么写，否则wx.invoke调用形式的jsapi会有问题
//       debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
//       appId: cfg.corpid, // 必填，企业微信的corpID
//       timestamp: cfg.timestamp, // 必填，生成签名的时间戳
//       nonceStr: cfg.noncestr, // 必填，生成签名的随机串
//       signature: cfg.signature,// 必填，签名，见 附录-JS-SDK使用权限签名算法
//       jsApiList // 必填，需要使用的JS接口列表，凡是要调用的接口都需要传进来
//     })
//     wx.ready(() => {
//       checkJsApi()
//       initJSSDKAgentCfg(agentCfg)
//     })
//     wx.error((res: any) => {
//       console.error('wx.error')
//       console.error(JSON.stringify(res))
//     })
//   }

//   function checkJsApi() {
//     wx.checkJsApi({
//       jsApiList: agentJsApiList,
//       success: (res: CheckJsApiResuls): void => {
//         console.log('checkJsApi success')
//         console.log(res)
//         // console.error(JSON.stringify(res))
//         if (res.errMsg === 'checkJsApi:ok') {
//           const checkResult = res.checkResult
//           if (checkResult && typeof checkResult === 'object') {
//             for (let key in checkResult) {
//               if (!checkResult[key]) {
//                 console.error(`key: ${key} 没有通过[checkJsApi]检测`)
//                 com.Modal.alert('提示', '企业微信版本过低请升级', [
//                   { text: '我知道了' },
//                 ])
//                 break
//               }
//             }
//           }
//         } else {
//           console.error(res)
//           console.error(res)
//         }
//       },
//       fail: (res: any): void => {
//         console.error('wx.checkJsApi fail')
//         console.error(JSON.stringify(res))
//       }
//     })
//   }

//   function initJSSDKAgentCfg(agentCfg: Cfg): void {
//     try {
//       wx.agentConfig({
//         corpid: agentCfg.corpid, // 必填，企业微信的corpid，必须与当前登录的企业一致
//         agentid: agentCfg.agentid, // 必填，企业微信的应用id
//         timestamp: agentCfg.timestamp, // 必填，生成签名的时间戳
//         nonceStr: agentCfg.noncestr, // 必填，生成签名的随机串
//         signature: agentCfg.signature,// 必填，签名，见附录1
//         jsApiList: agentJsApiList, // 必填
//         success: () => {
//           // sendChatMessage({
//           //   msgtype: "text", // 消息类型，必填
//           //   text: {
//           //     content: "hello world!", // 文本内容
//           //   }
//           // })
//           console.log('init agent config success')
//         },
//         fail: function (res: any) {
//           console.error('agent cfg fail')
//           console.error(JSON.stringify(res))
//           if (res.errMsg.indexOf('function not exist') > -1) {
//             com.Modal.alert('提示', '企业微信版本过低请升级', [
//               { text: '我知道了' },
//             ])
//           }
//         }
//       })
//     } catch (e) {
//       console.error('wx.agentConfig error')
//       console.error(e)
//     }
//   }

//   return (
//     <div className="App">
//       <com.WhiteSpace />
//       <com.WingBlank>
//         <Abc>123</Abc>
//       </com.WingBlank>
//     </div>
//   )
// }

const App = () => {
  return (
    <Root/>
  )
}

export default App

//
// 日志
//

import Vconsole from 'vconsole'
import { Modal } from 'antd-mobile'

// const level = 2
const debug = true

const _debug = () => {
  return console.log.bind(console, '%%')
}

const _alert = () => {
  return window.alert.bind(window)
}

export default {
  init(): any {
    return new Vconsole()
  },
  alert: debug ? _alert() : _debug(),
  log: debug ? _debug() : () => {},
  error: console.error.bind(console, '%s'),
  info: console.info.bind(console, '%s'),
  warn: console.warn.bind(console, '%s')
}

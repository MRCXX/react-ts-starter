//
//
//
import React from 'react'
import * as antd from 'antd'

const data = [
  {
    id: '',
    type: 'Button',
    props: [
      {
        name: 'innerText',
        value: 'hehe'
      }
    ]
  }
]

const render = function(): [] {
  let elements = []
  data.forEach((elementObj: object) => {
    const com: React.ComponentClass = antd['Button']
    const element = React.createElement(com, {}, 'hehe')
    elements.push(element)
  })
  return elements
}

export default render

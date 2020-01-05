import React from 'react'
import './App.css'
import * as com from 'antd-mobile'

console.log(com.Button)

const App = () => {
  const Abc = com.Button
  const Hello = () => {
    return <Abc>123456</Abc>
  }

  const element = React.createElement(Hello, { className: 'greeting' }, 'Hello, world!')

  return (
    <div className="App">
      {element}
      {/* <Hello /> */}
      <com.WhiteSpace />
      <com.WingBlank>
        <Abc>123</Abc>
      </com.WingBlank>
    </div>
  )
}

export default App

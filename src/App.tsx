import React from 'react'
import './App.css'
import * as com from 'antd-mobile'

console.log(com.Button)

const App = () => {
  const Abc: React.ComponentClass = com.Button
  // const Abc: React.Component = com.Button
  const Hello = () => {
    return <com.Button>123456</com.Button>
  }
  // function Welcome(props: any) {
  //   return <h1>Hello, {props.name}</h1>
  // }
  const element = React.createElement(React.Fragment, {}, [Hello()])
  const element2 = React.createElement(Abc, {}, 'hehe')

  return (
    <div className="App">
      {element}
      {element2}
      {/* <Hello /> */}
      <com.WhiteSpace />
      <com.WingBlank>
        <Abc>123</Abc>
      </com.WingBlank>
    </div>
  )
}

export default App

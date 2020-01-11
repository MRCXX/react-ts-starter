import React from 'react'
import { Icon, Flex, SearchBar, Modal, ActionSheet, Card, WingBlank, WhiteSpace } from 'antd-mobile'
import {
  useHistory 
} from 'react-router-dom'

const isIPhone = /\\biPhone\\b|\\biPod\\b/i.test(window.navigator.userAgent);
let wrapProps: any;
if (isIPhone) {
  wrapProps = {
    onTouchStart: (e: any) => e.preventDefault(),
  };
}

const Home = () => {
  const history = useHistory()

  function debug() {
    alert(1)
  }

  function showActionSheet() {
    const BUTTONS = ['自定义内容', '企业内容', '取消'];
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: BUTTONS.length - 1,
      // destructiveButtonIndex: BUTTONS.length - 2,
      // title: 'title',
      message: '添加类型',
      maskClosable: true,
      // 'data-seed': 'logId',
      // wrapProps,
    },
    (buttonIndex) => {
      alert(buttonIndex)
      history.push('/123')
      // this.setState({ clicked: BUTTONS[buttonIndex] });
    });
  }

  return (
    <section>
      <Flex>
        <Flex.Item style={{
          'flexBasis': 'calc(100vw - 100px)'
        }}>
          <SearchBar placeholder="请输入关键字" maxLength={99} />
        </Flex.Item>
        <Flex.Item>
          <Icon type="check-circle" onClick={showActionSheet}/> 
          <Icon type="cross-circle" />
        </Flex.Item>
      </Flex>
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Card>
          <Card.Header
            title="This is title"
            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
            extra={<span>this is extra</span>}
          />
          <Card.Body>
            <div>This is content of `Card`</div>
          </Card.Body>
          <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
        </Card>
        <WhiteSpace size="lg" />
      </WingBlank>
    </section>
  )
}

export default Home
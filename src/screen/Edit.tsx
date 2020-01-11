import React from 'react'
import { List, InputItem, WhiteSpace, Button, WingBlank } from 'antd-mobile'
import { createForm } from 'rc-form'

interface Props {
  form: any
}

class BasicInputExample extends React.Component<Props, {}> {
  public componentDidMount() {
    // this.autoFocusInst.focus();
  }
  public handleClick = () => {
    // this.inputRef.focus();
  }
  public save = () => {
    const { getFieldValue } = this.props.form

    alert(getFieldValue('inputclear'))

  }
  public cancel = () => {
    alert('cancel')
  }

  public render() {
    console.log(this.props)
    const { getFieldProps } = this.props.form
    return (
      <div>
        <List renderHeader={() => '添加'}>
          <InputItem
            {...getFieldProps('inputclear')}
            clear
            placeholder="请输入标题"
          >标题</InputItem>
        </List>

        {/* <List renderHeader={() => 'Customize the extra content in the right'}>
          <InputItem
            {...getFieldProps('preice')}
            placeholder="0.00"
            extra="¥"
          >价格</InputItem>
        </List> */}
        <WhiteSpace/>
        <WingBlank>
          <Button type="primary" onClick={this.save}>保存</Button>
          <WhiteSpace/>
          <Button onClick={this.cancel}>取消</Button>
        </WingBlank>

      </div>
    );
  }
}

const BasicInputExampleWrapper = createForm()(BasicInputExample)

export default BasicInputExampleWrapper
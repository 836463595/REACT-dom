import React from 'react';
import './List.css'
import { Input } from "antd";
import ListItem from '../ListItem/ListItem.jsx'
import Storage from '../Storage.jsx'

// const SimulationData = [  //模拟数据
//   {
//     id: 0,
//     content: '今天晚上8点去健身房锻炼'
//   },
//   {
//     id: 1,
//     content: '明天早上8点在会议室开会'
//   },
//   {
//     id: 2,
//     content: '明天中午3点去女朋友吃饭'
//   }
// ]

class List extends React.Component {
  state = {
    Lists: []
  }
  componentDidMount() {
    const data = Storage.get('value');
    if (data) {
      this.setState({
        Lists: data
      })
    } else {
      Storage.set('value',this.state.Lists)
    }

  }
  addition(e) { //添加事例
    const example = Storage.get('value')
    const ele = e.target
    example.push(
      {
        id: example.length + 1,
        content: ele.value
      }
    )
    this.setState({
      Lists: example,
      inputValue:''
    })
    Storage.set('value', example)  //建立新的数据
  }
  handleChange(e) { //输入框内容变化回调
    this.setState({
      inputValue: e.target.value
    })
  }
  alteration(e, i) { //变更代办事例
    const Value = Storage.get('value')
    Value[i].content = e
    this.setState({
      Lists: Value
    })
    Storage.set('value', Value)
  }
  del(i) { //删除实例
    const { Lists } = this.state
    const arr = Lists
    arr.splice(i, 1)
    this.setState({
      Lists: arr
    })
    Storage.set('value', arr)
  }

  render() {
    const { Lists } = this.state
    const Example = <Input size="large" placeholder="请输入你的待办事例..."  value={this.state.inputValue}  onPressEnter={(e) => this.addition(e)} onChange={this.handleChange.bind(this)} />
    const Listitem = Lists.map((item, index) => {
      return <ListItem key={item.id} item={item} index={index} change={(e) => this.alteration(e, index).bind(this)} delcallback={(i) => this.del(i)} />
    })
    return (
      <div className="wrap">
        <h1>Todo  List</h1>
          {Example}
        <div className="list">
          {Listitem}
        </div>
      </div>
    )
  }

}

export default List;
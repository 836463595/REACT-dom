import React from 'react';
import './ListItem.css'
import { Typography } from "antd";
import {CloseOutlined} from '@ant-design/icons';

const { Paragraph } = Typography;

const ListItem = (props) => {
  
  const del = ()=> {  //删除相对下表的待办事例
    props.delcallback(props.index)
  }

  const onChange = (e) => { //修改待办事例并向父级传参
    props.change(e,props.index)
  }

  return (
    <div className="list-item">
      <Paragraph editable={{onChange:onChange}} className="item" >{props.item.content}</Paragraph>
      <CloseOutlined className="del" onClick={del}/>
    </div>
  )
}




export default ListItem
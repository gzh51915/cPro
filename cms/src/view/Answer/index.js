import React, { useState, useEffect } from 'react'
import { Card, Button, Table, Tag, message } from 'antd';
import { PAGE_SIZE } from '../../utils/constants'
import { reqQuestion,reqQuestionDelete } from '../../api'
import { formateDate} from '../../utils/dateUtils'

export default function Aswer(props) {

  const [dataSource, setdataSource] = useState()

  const getquestion=()=>{
    reqQuestion().then(res=>{
      const dataSource = res.data
      setdataSource(dataSource)
    })
  }

  useEffect(() => {
    getquestion()
    return 
  }, [])


  const deleteQuestion=async(id)=>{
    const result=await reqQuestionDelete(id)
    if(result.status===0){
      message.success(result.msg)
      getquestion()
    }else{
      message.error("问题删除失败")
    }
  }

const columns = [
  {
    title: '用户',
    width: 100,
    dataIndex: 'username'
  },
  {
    title: '问题',
    width: 250,
    dataIndex: 'questions',
    ellipsis: true,
  }, {
    title: '标签',
    width: 100,
    render: (item) => {
      return (
        <Tag color="green">{item.label}</Tag>
      )
    }
  }, {
    title: '提问时间',
    dataIndex: 'create_time',
    render: formateDate
  }, {
    title: '描述',
    dataIndex: 'desc',
    ellipsis: true,
  }, {
    title: "操作",
    width: 300,
    render: (question) => {
      return (
        <span>
          <Button type="primary" danger style={{ marginRight: 10 }} onClick={()=>deleteQuestion(question._id)}>删除</Button>
          <Button type='primary' style={{ marginRight: 10 }} onClick={() => props.history.push('/home/answer/addupdate', question)}>修改</Button>
          <Button type='primary' onClick={() => props.history.push('/home/answer/aswer', question)}>查看回答</Button>
        </span>
      )
    }
  }
]

return (
  <Card title='问答管理' >
    <Table
      columns={columns}
      dataSource={dataSource}
      bordered
      rowKey='_id'
      pagination={{
        defaultPageSize: PAGE_SIZE,
        showQuickJumper: true,
      }}
    />

  </Card>
)
}

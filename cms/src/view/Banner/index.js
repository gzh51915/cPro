import React, { Component} from 'react'
import { Table,Card ,Button,Modal,message} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import './index.scss'
import {getBannerData,deleteBanner} from '../../api'

const { confirm } = Modal;


export default class Banner extends Component {
  constructor(){
    super()
    this.state={
      bannerData:[],
      data:[]
    }
  }

  getData=()=>{
    getBannerData().then(res=>{
      if(res.status===0){
        this.setState({
          bannerData:res.data
        })
      }
    })
  }

  componentDidMount(){
    this.getData()
  }
  updata=(data)=>{
    this.props.history.push({pathname:'/home/banner/change/2',query:{
      ...data
    }})
  }
  delete=(data)=>{
    var that = this
    confirm({
      title: '您确定要删除嘛？',
      icon: <ExclamationCircleOutlined />,
      content: '亲，删除后不可以恢复的哦!!!',
      okText: '是的',
      okType: 'danger',
      cancelText: '手滑了',
      onOk() {
        console.log(data._id);
        deleteBanner({_id:data._id}).then(res=>{
          if(res.status===0){
            message.info('删除成功！');
            that.getData()
          }
        })
      },
    });
  }
  add=()=>{
    this.props.history.push('/home/banner/change/1')
  }

  render() {

    const columns = [
      {
        title: '介绍',
        dataIndex: 'introduce',
        key: 'introduce',
        align:"center",
        className:"table_box",
      },
      {
        title: '图片',
        dataIndex: 'imgs',
        key: 'imgs',
        align:"center",
        className:"table_box",
        render: (url) => <img src={"http://10.3.135.6:5000/public/upload/"+url} alt="" style={{width:'400px',height:'160px'}} />,
      },
      {
        title: '操作',
        key: 'action',
        align:"center",
        className:"table_box",
        render: (data) => (
          <div >
            <Button type="primary" onClick={this.updata.bind(this,data)}>修改</Button>
            <Button type="primary" danger onClick={this.delete.bind(this,data)}>删除</Button>
          </div>
        ),
      },
    ];

      return (
          <Card title="轮播图管理"
              bordered={false} 
              style={{ width: "100%" }} 
              extra={<Button type="primary" onClick={this.add}>添加</Button>}
          >
            <Table 
              columns={columns} 
              dataSource={this.state.bannerData} 
              rowKey='_id'
            />
          </Card>
      )
  }
}

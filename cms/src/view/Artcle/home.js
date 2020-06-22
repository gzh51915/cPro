import React, { Component } from 'react'
import { Card, Button, Table, message,Tag } from 'antd';
import {reqArtcle,reqIcons,reqArtcleDelete} from '../../api'
import { formateDate} from '../../utils/dateUtils'
import {PAGE_SIZE} from '../../utils/constants'

export default class ArtcleHome extends Component {

    state = {
        visible: false,
        dataSource:[],
        icons:[]
    }


    //获取标签
    getIcons = async () => {
        const result = await reqIcons()
        if (result.status === 0) {
            this.setState({
                icons: result.data
            })
        }
    }

    //删除文章
    deleteArtcle=async(id)=>{
        const result=await reqArtcleDelete(id)
        if(result.status===0){
            message.success('文章删除成功')
            this.getArtcles()
        }else{
            message.error('文章删除失败！！!')
        }
    }

    //获取文章列表
    getArtcles = async () => {
        const result =await reqArtcle()
        if(result.status===0){
            const dataSource=result.data
            this.setState({
                dataSource
            })
        }else{
            message.error('请求文章失败！！')
        }
    }

    componentDidMount(){
        this.getArtcles()
        this.getIcons()
    }

    render() {
        const columns = [
            {
                title: '标题',
                width: 200,
                dataIndex: 'title'
            },
            {
                title: '作者',
                dataIndex: 'author'
            }, {
                title: "标签",
                render: (item) => {
                    const {icons}=this.state
                    const result =icons.filter((i)=>i._id===item.label)
                    let name
                    if(result.length>=1){
                        name=result[0].name
                    }
                   
                    return (
                    <Tag color="green">{name}</Tag>
                    )
                }
            },
            {
                title: '阅读量',
                dataIndex: 'read',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.read - b.read,
            },
            {
                title: '收藏',
                dataIndex: 'collect',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.collection - b.collection,
            }, ,
            {
                title: '点赞',
                dataIndex: 'good',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.good - b.good,
            },
            {
                title: '创作时间',
                dataIndex: 'create_time',
                render: formateDate
            }, {
                title: "操作",
                width: 200,
                render: (artcle) => {
                    return (
                        <span>
                            <Button type="primary" danger style={{marginRight:10}} onClick={()=>this.deleteArtcle(artcle._id)}>删除</Button>
                            <Button type='primary' onClick={()=>this.props.history.push('/home/artcle/add',artcle)}>修改</Button>
                        </span>
                    )
                }
            }
        ];

        const {dataSource}=this.state
        return (
            <Card title='文章管理' extra={<Button type="primary" onClick={()=>this.props.history.push('/home/artcle/add')}>添加文章</Button>}>
                <Table 
                columns={columns} 
                dataSource={dataSource} 
                bordered 
                onChange={this.handleChange}
                rowKey='_id'
                pagination={{
                    defaultPageSize:PAGE_SIZE,
                    showQuickJumper:true,
                }}
                />
            </Card>
        )
    }
}

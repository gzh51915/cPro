import React, { Component } from 'react'
import { Card, Button, Table, Modal, message } from 'antd';
import {reqArtcle} from '../../api'
import { formateDate} from '../../utils/dateUtils'


export default class ArtcleHome extends Component {

    state = {
        visible: false,
        dataSource:[]
    }

    async componentDidMount(){
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
                render: () => {
                    return (
                        <span>
                            <Button type="dashed">删除</Button>
                            <Button type='primary'>修改</Button>
                        </span>
                    )
                }
            }
        ];

        const {dataSource}=this.state
        return (
            <Card title='添加文章' extra={<Button type="primary">添加文章</Button>}>
                <Table 
                columns={columns} 
                dataSource={dataSource} 
                bordered 
                onChange={this.handleChange}
                rowKey='_id'
                />
                
            </Card>
        )
    }
}

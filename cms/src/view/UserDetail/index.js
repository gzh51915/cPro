import React, { Component} from 'react'
import {Card ,Descriptions, Badge ,Button} from 'antd'

import {connect} from 'react-redux'

class UserDetail extends Component {
    constructor(props){
        super(props)
        this.state={
            userInfo:[],
            data:[]
        }
    }
    componentDidMount(){
        try{
            const data = this.props.userInfo.filter(item=>{
                return item._id===this.props.match.params.id
            })

            this.setState({
                data
            })
        }catch(err){

        }
    }

    back=()=>{
        this.props.history.replace('/home/user')
    }

    render() {
        const data = this.state.data
        const userInfo = data[0]
        return (
            <Card title="用户信息详情" bordered={false} style={{ width: "100%" }}  extra={<Button type="primary" onClick={this.back}>返回</Button>}>
                {
                    data.length>0?
                    <Descriptions  bordered>
                        <Descriptions.Item label="用户名">{userInfo.username}</Descriptions.Item>
                        <Descriptions.Item label="公司">{userInfo.company}</Descriptions.Item>
                        <Descriptions.Item label="居住地">{userInfo.liveCity}</Descriptions.Item>
                        <Descriptions.Item label="学校">{userInfo.school}</Descriptions.Item>
                        <Descriptions.Item label="id" span={2}>
                        {userInfo._id}
                        </Descriptions.Item>
                        <Descriptions.Item label="密码" span={3}>
                        <Badge status="processing" text={userInfo.password} />
                        </Descriptions.Item>
                        <Descriptions.Item label="网站地址">{userInfo.network}</Descriptions.Item>
                        <Descriptions.Item label="注册时间">{userInfo.time}</Descriptions.Item>
                        <Descriptions.Item label="介绍">
                            {userInfo.desc}
                        </Descriptions.Item>
                    </Descriptions>
                    :'信息读取失败，请返回重新进入'
                }
            </Card>
        )
    }
}

const mapState = (state)=>{
    return {
        userInfo : state.userInfo.userInfo
    }
}

export default connect(mapState)(UserDetail)

import React, { Component } from 'react'
import { Form, Input, Button ,Card } from 'antd';
import './login.scss'
import {userLogin} from '../../api/index'
import {connect} from 'react-redux'
import {createChangeLogon} from './store/actionCreators'

class Login extends Component {
    onFinish = values => {
        userLogin(values).then(res=>{
            if(res.status===0){
                this.props.changeLogin({isLogin:true,token:res.token});
                sessionStorage.setItem('CPRO_TOKEN',res.token)
                this.props.history.push('/home')
            }
        })
    };
    // onFinishFailed = errorInfo => {
    //     console.log('Failed:', errorInfo);
    // };
    render() {
        const layout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 18 },
        };
        const tailLayout = {
            wrapperCol: { offset: 4, span: 18 },
        };
        return (
            <div className="loginbox">
                <Card title="cPro管理系统" bordered={false} style={{ fontSize:"18px" }} className="loginbox_wrap">
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        >
                        <Form.Item
                            label="账号"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit" block={true}>
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}
const mapState = (state)=>{
    return {
        isLogin:state.loginReducer.isLogin
    }
}
const mapDispatch = (dispatch)=>{
    return{
        changeLogin(data){
            dispatch(createChangeLogon(data))
        }
    }
}

export default connect(mapState,mapDispatch)(Login)
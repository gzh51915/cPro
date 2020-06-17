import React, { Component } from 'react'

import {withRouter} from 'react-router-dom'

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import logo from './logo.png'

import {connect} from 'react-redux'
import {quitChangeLogon} from './store/actionCreators'

import './index.scss'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class index extends Component {
    quitLogin = ()=>{
        this.props.quitLoginBtn()
        localStorage.setItem("CPRO_TOKEN",'')
        this.props.history.push('/login')
    }
    render() {
        return (
            <Layout className="bigbox">
                <Header className="header">
                    <div className="logo" >
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        <a onClick={this.quitLogin}>退出登陆</a>
                    </div>
                </Header>
                <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    >
                    <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                        <Menu.Item key="1">option1</Menu.Item>
                        <Menu.Item key="2">option2</Menu.Item>
                        <Menu.Item key="3">option3</Menu.Item>
                        <Menu.Item key="4">option4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                        <Menu.Item key="5">option5</Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                        <Menu.Item key="9">option9</Menu.Item>
                        <Menu.Item key="10">option10</Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                    >
                        {this.props.children}
                    </Content>
                </Layout>
                </Layout>
            </Layout>
        )
    }
}
const mapState = (state)=>{
    console.log(state);
    return state
}
const mapDispatch = (dispatch)=>{
    return {
        quitLoginBtn(){
            dispatch(quitChangeLogon())
        }
    }
}
export default connect(mapState,mapDispatch)(withRouter(index))
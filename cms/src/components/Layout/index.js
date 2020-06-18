import React, { Component } from 'react'

import {withRouter} from 'react-router-dom'

import { Layout, Menu, Breadcrumb ,Modal, Button} from 'antd';
import { UserOutlined ,AreaChartOutlined ,CarryOutOutlined ,CoffeeOutlined ,QrcodeOutlined,NotificationOutlined,HomeOutlined} from '@ant-design/icons';
import logo from './logo.png'

import {connect} from 'react-redux'
import {quitChangeLogon} from './store/actionCreators'

import './index.scss'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class index extends Component {
    constructor(props){
        super(props)
        this.state={
            path:this.props.location.pathname,
            // 是否显示确认退出
            visible: false
        }
    }
    // 退出登录交互窗口
    showModal = () => {
        this.setState({
          visible: true,
        });
    };
    handleOk = e => {
        this.setState({
          visible: false,
        });
        this.props.quitLoginBtn()
        sessionStorage.setItem("CPRO_TOKEN",'')
        this.props.history.push('/login')
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };
    // 退出登陆
    // quitLogin = ()=>{
        // this.props.quitLoginBtn()
        // localStorage.setItem("CPRO_TOKEN",'')
        // this.props.history.push('/login')
    // }
    // 导航跳转
    jumpContent = (item)=>{
        this.props.history.push(item.key)
    }
    componentDidUpdate(prevProps){
        // if(prevProps.location.pathname!==this.props.location.pathname){
        //     this.setState({
        //         path:this.props.location.pathname
        //     })
        // }
    }
    render() {
        // console.log(this.props.location.pathname);
        return (
            <Layout className="bigbox">
                <Header className="header">
                    <div className="logo" >
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        {/* <a onClick={this.quitLogin}>退出登陆</a> */}
                        <Button type="primary" onClick={this.showModal}>
                            退出登录
                        </Button>
                        <Modal
                            title="退出"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            style={{fontSize:15}}
                            width={450}
                            cancelText="点错了"
                            okText="是的"
                        >
                            <h3 style={{fontSize:18 , color:'red'}}>亲，您确定要退出嘛?</h3>
                        </Modal>
                    </div>
                </Header>
                <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={[this.state.path]}
                    // defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    onClick = {this.jumpContent}
                    >
                        <Menu.Item icon={<HomeOutlined />} key="/home">首页</Menu.Item>
                        <Menu.Item icon={<UserOutlined />} key="/home/user">用户管理</Menu.Item>
                        <SubMenu key="/article" icon={<NotificationOutlined />} title="文章">
                            <Menu.Item icon={<AreaChartOutlined /> } key="/home/artcle/home">文章管理</Menu.Item>
                            <Menu.Item icon={<AreaChartOutlined /> } key="/home/artcle/add">评论管理</Menu.Item>
                        </SubMenu>
                        <Menu.Item icon={<AreaChartOutlined /> } key="/home/banner">轮播图管理</Menu.Item>
                        <Menu.Item icon={<CarryOutOutlined />} key="/home/answer">问答管理</Menu.Item>
                        <Menu.Item icon={<CoffeeOutlined />} key="/home/activity">活动管理</Menu.Item>
                        <Menu.Item icon={<QrcodeOutlined />} key="/home/channel">频道管理</Menu.Item>

                        {/*  <Route path='/activity' component={Activity} />
                  <Route path='/answer' component={Answer} />
                  <Route path='/banner' component={Banner} />
                  <Route path='/channel' component={Channel} />
                  <Route path='/user' component={User} />
                  <Route path='/user/UserDetails' component={UserDetails} / */}
                   
                    {/* <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                        <Menu.Item key="9">option9</Menu.Item>
                        <Menu.Item key="10">option10</Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu> */}
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        {/* <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item>用户管理</Breadcrumb.Item> */}
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
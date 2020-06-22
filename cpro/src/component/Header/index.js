import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './index.css'
class Header extends Component {
    constructor() {
        super()
        this.state = {
            token: ''
        }
    }
    jump = () => {
        this.props.history.push("/login")
    }
    componentDidMount() {
        let token = localStorage.getItem("CPRO_TOKEN")
        this.setState({
            token
        })
    }
    render() {
        return (
            <div>
                <div className="container nav">
                    <div><i className="iconfont icon-fangdajing"></i></div>
                    <div><img src={require("../../assets/logo.png")} alt="" /></div>
                    {
                        Boolean(this.state.token) ?
                            <div className="headright">
                                <img className="headlogo" src={require("../../assets/head.jpg")} />
                                

                            </div>
                            :
                            <div><i className="iconfont icon-geren" onClick={this.jump}></i></div>
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(Header);
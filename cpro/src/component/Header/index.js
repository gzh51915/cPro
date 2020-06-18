import React, { Component } from 'react';
import './index.css'
import {withRouter} from 'react-router-dom'
class Header extends Component {
    jump = ()=>{
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <div className="container nav">
                    <div className="nav_search"><i className="iconfont icon-fangdajing"></i></div>
                    <div className="nav_img"><img src={require("../../assets/logo.png")} alt="" /></div>
                    <div className="nav_login" onClick={this.jump}><i className="iconfont icon-geren"></i></div>
                </div>
                
            </div>
        );
    }
}

export default withRouter(Header);
import React, { Component } from 'react';
import './index.css'
class Header extends Component {
    render() {
        return (
            <div>
                <div className="container nav">
                    <a href="http://http://localhost:3000"><i className="iconfont icon-fangdajing"></i></a>
                    <a href="http://http://localhost:3000"><img src={require("../../assets/logo.png")} alt="" /></a>
                    <a href="http://http://localhost:3000"><i className="iconfont icon-geren"></i></a>
                </div>
                
            </div>
        );
    }
}

export default Header;
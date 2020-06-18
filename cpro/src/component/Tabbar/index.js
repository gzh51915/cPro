import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from '../Home';
import Question from '../Question';
import Column from '../Column';
import Course from '../Course';
import More from '../More';
import '../../assets/icon/iconfont.css';
import './index.css';

class Tabbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            showElem:'block'
        }    
    }
    
    
    render() { 
        return (
            <Router>
            <div className="container">
                <div className='nav-bar' style={{display:this.state.showElem}} onWheel={e => this.handleScroll(e)}>
                    <ul>
                        <li><NavLink exact to="/" activeClassName="selected active"><i className="iconfont icon-shouye"></i><span>首页</span></NavLink></li>
                        <li><NavLink to="/Question" activeClassName="selected"><i className="iconfont icon-wenda"></i><span>问答</span></NavLink></li>
                        <li><NavLink to="/Column" activeClassName="selected"><i className="iconfont icon-pencil-square"></i><span>专栏</span></NavLink></li>
                        <li><NavLink to="/Course" activeClassName="selected"><i className="iconfont icon-play-circle"></i><span>课程</span></NavLink></li>
                        <li><NavLink to="/More" activeClassName="selected"><i className="iconfont icon-gengduo"></i><span>更多</span></NavLink></li>
                    </ul>
                </div>
                <div className="content">
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/question" component={Question}></Route>
                    <Route exact path="/column" component={Column}></Route>
                    <Route exact path="/course" component={Course}></Route>
                    <Route exact path="/more" component={More}></Route>
                </div>
            </div>
            </Router>
        );
    }
}

export default Tabbar;
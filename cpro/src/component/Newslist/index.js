import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import Hottest from '../Home/Hottest'
import Newest from '../Home/Newest'
import Recommend from '../Home/Recommend'
import './index.css'
class Newlist extends Component {
    render() {
        return (
            <div>
                    <Router>
                        <ul>
                            <li><NavLink exact to="/" activeClassName="selected active"><i className="iconfont icon-newspaper"></i><span>为你推荐</span></NavLink></li>
                            <li><NavLink to="/Hottest" activeClassName="selected"><i className="iconfont icon-thumbsup"></i><span>近期热门</span></NavLink></li>
                            <li><NavLink to="/Newest" activeClassName="selected"><i className="iconfont icon-global"></i><span>最新内容</span></NavLink></li>
                            <li><i className="iconfont icon-server"></i><span>技术频道</span></li>
                        </ul>
                        <Switch>
                            <Route exact path="/" component={Recommend}></Route>
                            <Route exact path="/hottest" component={Hottest}></Route>
                            <Route exact path="/newest" component={Newest}></Route>
                        </Switch>
                    </Router>
            </div>
        );
    }
}

export default Newlist;
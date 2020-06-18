import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import Dayly from './Dayly'
import Weekly from './Weekly'
import Monthly from './Monthly'
import './index.css'



class index extends Component {
    

    render() {
        return (
            <div>
                <Router>
                        <div className="hot_list">
                        <NavLink exact to="/hottest" activeClassName="selected active"><span className="dayly">日热门</span></NavLink>
                        <NavLink exact to="/hottest/weekly" activeClassName="selected"><span className="weekly">周热门</span></NavLink>
                        <NavLink exact to="/hottest/monthly" activeClassName="selected"><span className="monthly">月热门</span></NavLink>
                        </div>
                    <Switch>
                        <Route exact path="/hottest" component={Dayly}></Route>
                        <Route exact path="/hottest/weekly" component={Weekly}></Route>
                        <Route exact path="/hottest/monthly" component={Monthly}></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default index;


import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import Header from '../Header'
import Newanswer from './Newanswer'
import Unanswer from './Unanswer'
import Hotanswer from './Hotanswer'
import Getdata from './Getdata'
import './index.css'
import Swiper from 'swiper';
import '../../../node_modules/swiper/css/swiper.min.css';
class Question extends Component {
    componentDidMount(){
        new Swiper('.swiper-container',{
            loop: true, 
            autoplay:{      //自动播放，注意：直接给autoplay:true的话，在点击之后不能再自动播放了
                delay: 3000,
                disableOnInteraction: false,    //户操作swiper之后，是否禁止autoplay。默认为true：停止。
            },
            spaceBetween: 30,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            observer:true,
            observeParents:true,
        });
    }
    
    render() {
        return (
            <div>
                <Header />
                <div className="b_content">
                    <Router>
                        <div className="ans_list">
                            <NavLink exact to="/question" activeClassName="selected active"><span className="newanswer">最新回答</span></NavLink>
                            <NavLink exact to="/question/unanswer" activeClassName="selected"><span className="unanswer">等待回答</span></NavLink>
                            <NavLink exact to="/question/hotanswer" activeClassName="selected"><span className="hotanswer">热门回答</span></NavLink>
                        </div>
                        <Switch>
                            <Route exact path="/question" component={Newanswer}></Route>
                            <Route exact path="/question/unanswer" component={Unanswer}></Route>
                            <Route exact path="/question/hotanswer" component={Hotanswer}></Route>
                        </Switch>
                    </Router>
                </div>

              
                <div className="course">
                <div>课程推荐</div>
                <div className="swiper-container" autoPlay>
                <div className="swiper-wrapper">                
                            <Getdata />
                        </div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Question;
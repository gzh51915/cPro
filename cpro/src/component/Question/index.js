import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import Header from '../Header'
import Newanswer from './Newanswer'
import Unanswer from './Unanswer'
import Hotanswer from './Hotanswer'
import Getdata from './Getdata'
import './index.css'
import Swiper from 'swiper';
import '../../../node_modules/swiper/css/swiper.css';
class Question extends Component {
    componentDidMount() {
        setTimeout(()=>{
            new Swiper('.swiper-container', {
                loop: true,
                autoplay: {
                    delay: 2000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                spaceBetween:60,
                slidesPerView: 1,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  },
                observer:true,
                observeParents:true
            });
        },500)
        
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

                
                <div className="course clear_fix">
                    <div className="classrecommend">
                        <div className="classtitle">课程推荐
                    
                        </div>
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                            
                            <Getdata />
                            </div>
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Question;
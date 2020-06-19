import React, { Component } from 'react';
import Header from '../Header'
import '../../assets/icon/iconfont.css'
import './index.css'
import Newlist from '../Newslist';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="new_content">
                    <div className="news_list">
                        <Newlist />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
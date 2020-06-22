import React, { Component } from 'react';
import Getartcle from '../Getactcle'
class Newest extends Component {
    render() {
        return (
            <div>
            <div>
            <div className="news_title">
                <h1>最新内容</h1>
            </div>
            <div className="news_content">
                    
                        
                    <Getartcle />
                    </div>
        </div>
            </div>
        );
    }
}

export default Newest;
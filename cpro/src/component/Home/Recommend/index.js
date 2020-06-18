import React, { Component } from 'react';
import Getartcle from '../Getactcle'
import Technology from '../Technology'
class index extends Component {
    render() {
        return (
            <div>
                <div className="clear_fix">
                <Technology />
                </div>
                <div className="news_title">
                    <h1>为你推荐</h1>
                </div>
                <div className="news_content">
                    
                        
                    <Getartcle />
                    </div>
                    
                
            </div>
        );
    }
}

export default index;
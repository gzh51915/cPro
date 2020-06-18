import React, { Component } from 'react';
class Newest extends Component {
    render() {
        return (
            <div>
            <div>
            <div className="news_title">
                <h1>最新内容</h1>
            </div>
            <div className="">
                <div className="news__item">
                    <div className="news__item_title">
                        <h4>文本溢出时，如何显示为省略号</h4>
                        <img src={require("../../../assets/logo.png")} alt="" />
                    </div>
                    <div className="news__item_content">
                        本文介绍在百度智能小程序开发中，如何将溢出的文本显示为省略号。欢迎开发者分享您在开发智能小程序中的经验心得，我们会通过智能小程序技术团队的社区渠道把你的经验分享给更多开发者朋友，投稿地址：smartprog...
                    </div>
                    <div className="news__item_info">
                        <span className="vote_operation">
                            <span className="wrap"><i className="iconfont icon-thumbsup"></i></span>
                            <span className="vote_num">x 3</span>
                            <span className="dot">·</span>
                            <span className="vote_words">赞</span>
                        </span>
                        <span className="author">
                            <span>百度小程序技术</span>
                            <span className="dot">·</span>
                            今天10:00
                        </span>
                    </div>
                </div>
            </div>
        </div>
            </div>
        );
    }
}

export default Newest;
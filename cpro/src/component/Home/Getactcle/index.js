import React, { Component } from 'react';
import axios from 'axios'
import { Empty } from 'antd'
import moment from 'moment';
class getArtcle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    getArtcle = () => {
        axios.get('http://10.3.135.6:5000/v1/artcle').then((res) => {
            if (res.data.status === 0) {
                this.setState({
                    list: res.data.data
                })
            }
        }).catch(function (error) {
            console.log(error)
        })
    }
    componentDidMount() {
        this.getArtcle()
    }
    render() {
        console.log(this.state.list)

        if (this.state.list.length) {
            return (
                this.state.list.map((item) => {
                    const time = item.create_time
                    return (
                        <div key={item._id}>
                            <div className="news__item">
                            <div className="news__item_title">
                                <h4>{item.title}</h4>
                                <img src={require("../../../assets/logo.png")} alt="" />
                            </div>
                            <div className="news__item_content" >
                                {item.content}
                            </div>
                            <div className="news__item_info">
                                <span className="vote_operation">
                                    <span className="wrap"><i className="iconfont icon-thumbsup"></i></span>
                                    <span className="vote_num">x {item.good}</span>
                                    <span className="dot">·</span>
                                    <span className="vote_words">赞</span>
                                </span>
                                <span className="author">
                                    <span>{item.author}</span>
                                    <span className="dot">·</span>
                                    {moment(parseInt(time,0)).format("YYYY-MM-DD HH:mm:ss")}
                                </span>
                            </div>
                        </div>
                        </div >
                    )
                })
            );
    }else{
    return (<Empty></Empty>)
}
       
    }
}

export default getArtcle;
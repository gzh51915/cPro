import React, { Component } from 'react';
import axios from 'axios'
import { Empty } from 'antd'
import './index.css'
import {withRouter} from 'react-router'
import moment from 'moment';

class Technology extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    getData = async() => {
        await axios.get('http://10.3.135.6:5000/v1/questions').then((res) => {
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
        this.getData()
    }
    render() {

        if (this.state.list.length) {
            console.log(this.state.list)
            return (
                this.state.list.map((item) => {
                    const time =item.create_time
                    return ( 
                        <div key={item._id} className="stream-list question-stream" onClick={()=>{
                            
                            this.props.history.push("/details/"+item._id)
                        }}>
                            <div className="stream-list__item">
                                <div className="answers">
                                    <div className="read">
                                    {item.read}<div>回答</div>
                                    </div>
                                </div>
                                <div className="summary">
                                <span className="author">{item.username}</span>
                                <span className="q_time"> {moment(parseInt(time,0)).format("YYYY-MM-DD HH:mm:ss")}提问</span>
                                    
                                <div className="question">{item.questions}
                                <span className="label">{item.label}</span>
                                </div>
                                
                                </div>
                            </div>
                            
                        </div>
                        
                    )
                })
            );
        } else {
            return (<Empty></Empty>)
        }

    }
}

export default  withRouter(Technology);
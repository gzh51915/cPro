import React, { Component } from 'react';
import axios from 'axios'
import { Empty } from 'antd'
import './index.css'
class Technology extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    getData = () => {
        axios.get('http://10.3.135.6:5000/v1/icon').then((res) => {
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
            return (
                this.state.list.map((item) => {
                    return (
                        <a key={item._id} className="router-box-item clear_fix" href={item.urls}>
                            <img src={item.iconUrl} alt="" className="icon" />
                            <span>{item.name}</span>
                            
                        </a>
                        
                    )
                })
            );
        } else {
            return (<Empty></Empty>)
        }

    }
}

export default Technology;
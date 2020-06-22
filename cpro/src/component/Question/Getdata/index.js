import React, { Component } from 'react';
import axios from 'axios'
import {Empty} from 'antd'
class index extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    getData=()=>{
        axios.get('api/live/recommend?_=d98ac2384bb3867f01f35dc076518b18').then((res)=>{
            if(res.data.status===0){
                this.setState({
                    list:res.data.data
                })
            }  
    }).catch(function(error){
        console.log(error)
    })
    }
    componentDidMount(){
        this.getData()
    }
    render() {

        if(this.state.list.length){
            return (
                this.state.list.map((item)=>{
                    return(
                        <div key={item.id} className='swiper-slide'>
                        <a href="">
                        <img src={item.bannerUrl} alt="" style={{width:'192px',height:'108px'}}/>  
                                  
                             
                        <div className="title">
                            {item.title}
                        </div> 
                            <span className="user">({item.joinedUsers}人参与)</span>
                            <div className="class_price">
                            <span className="discountPrice">￥{item.discountPrice}</span>
                            <span className="price">￥{item.price}</span>
                            </div>
                        </a>
                        </div>
                    )
                })
            );
        }else{
            return (<Empty></Empty>)
        }
    }
}

export default index;
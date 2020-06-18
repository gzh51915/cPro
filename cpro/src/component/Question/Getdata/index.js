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
        console.log(this.state.list)

        if(this.state.list.length){
            return (
                this.state.list.map((item)=>{
                    return(
                        <div key={item.id} className='swiper-slide'>
                        <img src={item.bannerUrl} alt="" style={{width:'192px',height:'108px', display:"flex"}}/>                  
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
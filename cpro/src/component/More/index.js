import React ,{ Component } from 'react';
import axios from 'axios'
import {Empty} from 'antd'
class More extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    getData=()=>{
        axios.get('http://10.3.135.6:5000/v1/icon').then((res)=>{
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
                        <div key={item._id}>
                        <img src={item.iconUrl} alt="" />                  
                        {item.name}
                        </div>
                    )
                })
            );
        }else{
            return (<Empty></Empty>)
        }
       
    }
}

export default More;
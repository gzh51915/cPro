import React, { Component } from 'react';
import axios from 'axios'
import { Empty } from 'antd'
import ReactMarkdown from 'react-markdown'
import './index.css'

class getArtcle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            content:[]
        }
    }
    getArtcle = () => {
        axios.get('http://10.3.135.6:5000/v1/artcle').then((res) => {
            if (res.data.status === 0) {
                console.log(res);

                const content = res.data.data.filter(item=>{
                    if(item._id===this.props.match.params.id){
                        return item
                    }
                })
                console.log("content",content);
                this.setState({
                    list: res.data.data,
                    content
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
        if (this.state.content.length) {
            const markdown = this.state.content[0].text
            return (
                <div className="content">
                    <ReactMarkdown source={markdown} 
                    escapeHtml={true}
                    />
                </div>
            );
        }else{
        return (<Empty></Empty>)
}
       
    }
}

export default getArtcle;
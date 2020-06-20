import React, { Component  } from 'react'
import { Upload, message ,Card,Button} from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import {addBanner,updateBanner} from '../../api/index'
import './index.scss'

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}


export default class change extends Component {
    constructor(props){
        super(props)
        let title = null
        let buttonName = null
        let type = null
        let imageUrl =''
        let id =''
        let introduce =''
        try{
            if(this.props.match.params.id==="1"){
                buttonName = "添加"
                title = "添加轮播图"
                type=1
            }else if(this.props.match.params.id==="2"){
                buttonName = "修改"
                title = "修改轮播图"
                type=2
                imageUrl="http://10.3.135.6:5000/public/upload/"+this.props.location.query.imgs
                id=this.props.location.query._id
                introduce = this.props.location.query.introduce
            }
        }catch(err){

        }
        this.state={
            loading: false,
            title:title||"添加轮播图",
            buttonName:buttonName||"添加",
            type:type||1,
            imageUrl:imageUrl,
            id:id,
            introduce:introduce,
        }
    }
    change=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleChange = info => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
            this.setState({
                imageUrl:info.file.response.data.url,
                name:info.file.response.data.name,
                loading: false,
            })
        }
    };

    push=()=>{
        if(this.state.type===1){
            if(!this.state.introduce){
                message.error('请填写轮播图介绍');
                return ;
            }
            if(!this.state.imageUrl){
                message.error('请上传轮播图');
                return ;
            }
            addBanner({
                introduce:this.state.introduce,
                imgs:this.state.name,
            }).then(res=>{
                if(res.status===0){
                    this.props.history.replace('/home/banner')
                }
            })
        }else if(this.state.type===2){
            if(!this.state.introduce){
                message.error('请填写轮播图介绍');
                return ;
            }
            if(!this.state.imageUrl){
                message.error('请上传轮播图');
                return ;
            }
            updateBanner({
                _id:this.state.id,
                introduce:this.state.introduce,
                imgs:this.state.name,
            }).then(res=>{
                if(res.status===0){
                    this.props.history.replace('/home/banner')
                }
            })
        }
    }
    render() {
        const uploadButton = (
            <div>
              {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
              <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { imageUrl } = this.state;
        return (
            <Card title={this.state.title} bordered={false} style={{ width:" 100% "}}>
                <div className="changeBanner">
                    <div className="changeBanner_introduce">
                        <label>轮播图介绍：</label>
                        <input placeholder="请输入图片介绍" id="introduce" value={this.state.introduce} onChange={this.change}/>
                    </div>
                    <div className="changeBanner_push">
                        <Upload
                            name="image"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            action="http://10.3.135.6:5000/v1/admin/img/upload"
                            beforeUpload={beforeUpload}
                            onChange={this.handleChange}
                            multiple={false}
                        >
                            {imageUrl ? <img src={imageUrl} alt="banner" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                    </div>
                    <div className="changeBanner_img" >
                        {imageUrl ? <img src={imageUrl} alt="banner" style={{ width: '80%' , height:"300px" }} />:""}
                    </div>
                    <div className="changeBanner_button">
                        <Button type="primary" onClick={this.push} >{this.state.buttonName}</Button>
                    </div>
                </div>
            </Card>
        )
    }
}

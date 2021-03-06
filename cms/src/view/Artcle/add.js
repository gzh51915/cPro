import React from 'react'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import { reqUserList, reqIcons,reqArtcleAdd,reqArtcleUpdate } from '../../api'
import {
    Card,
    Form,
    Input,
    Select,
    Button,
    message

} from 'antd';

const { Item } = Form
const { Option } = Select;

export default class ArtcleAddUpdate extends React.Component {
    mdParser =null
    constructor(props){
        super(props)
        this.mdParser=new MarkdownIt()
    }


    state = ({
        userlist: [],
        icons: [],
        content:'',
        text:''
        
    })
    //获取作者（用户）列表
    getUsers = async () => {
        const result = await reqUserList()
        if (result.status === 0) {
            this.setState({
                userlist: result.data
            })
        }
    }


    //获取标签
    getIcons = async () => {
        const result = await reqIcons()
        if (result.status === 0) {
            this.setState({
                icons: result.data
            })
        }
    }

   

    handleEditorChange=({ html, text })=> {
        this.setState({
            content:html,
            text
          });
        
    }

    onFinish=async(value)=>{
        value.content=this.state.content
        value.text=this.state.text
        const {icons}=this.state
        const results =icons.filter((i)=>i.name==value.label)
        if(results.length>=1){
            value.label=results[0]._id
        }
        if(!this.update){

            const result =await reqArtcleAdd(value)
            if(result.status===0){
                message.success('添加文章成功')
                this.props.history.push('/home/artcle')
            }else{
                message.error('添加文章失败')
            }
        }else{
            value.content=this.artcle.content
            value.text=this.artcle.text
            value._id=this.artcle._id
            const result =await reqArtcleUpdate(value)
            if(result.status===0){
                // console.log('result: ', result);
                message.success('修改文章成功')
                this.props.history.push('/home/artcle')
            }else{
                message.error('修改文章失败')
            }
        }
    }

    componentWillMount(){
        this.update=false
        const artcle =this.props.location.state
        this.artcle =artcle ||{}
        if(artcle){
          this.update=true  
        }
    }

    componentDidMount() {
        this.getUsers()
        this.getIcons()
    }
    render() {

        

        const plugins = ['header', 'fonts', 'table', 'my-plugins', 'link', 'clear', 'logger', 'mode-toggle', 'full-screen'];

        const layout = {
            labelCol: { span: 2 },
            wrapperCol: { span: 10 },
        };

        const tailLayout = {
            wrapperCol: { offset: 2, span: 16 },
          };

        const { userlist, icons } = this.state

          const {title,author,label,text}=this.artcle

        return (
            <Card title='添加文章'>
                <Form {...layout} onFinish={this.onFinish}>
                    <Item label='标题' name="title" 
                    rules={[{ required: true, message: '必须输入文章标题' }]}
                    initialValue={title}
                    >
                        <Input placeholder='请输入文章标题' />
                    </Item>
                    <Item label='作者' name='author' 
                    rules={[{ required: true, message: '必须选择作者名称' }]}
                    initialValue={author}
                    >
                        <Select
                            name='author'
                            showSearch
                            style={{ width: 200 }}
                            placeholder="请选择作者"
                            allowClear
                        >
                            {
                                userlist.map(item => {
                                    return (<Option value={item.username} key={item._id}>{item.username}</Option>)
                                })
                            }
                        </Select>
                    </Item>
                    <Item label='标签' name='label' 
                    rules={[{ required: true, message: '必须选择所属标签' }]}
                    initialValue={label}
                    >
                        <Select
                            name='label'
                            showSearch
                            style={{ width: 200 }}
                            placeholder="请选择标签"
                            allowClear
                        >
                            {
                                icons.map(item => {
                                    return (<Option value={item._id} key={item._id}>{item.name}</Option>)
                                })
                            }
                        </Select>
                    </Item>
                    <Item label='内容' >
                    <MdEditor
                        
                        plugins={plugins}
                        value={text}
                        style={{ height: "500px",width:"800px"}}
                        renderHTML={(text) => this.mdParser.render(text)}
                        onChange={this.handleEditorChange}
                    />
                    </Item>
                    <Item {...tailLayout} >
                        <Button type='primary' htmlType="submit">提交</Button>
                    </Item>
                </Form>
            </Card>
        )
    }
}

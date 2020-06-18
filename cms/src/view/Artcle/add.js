import React, { Component } from 'react'
// import * as React from 'react'
// import * as ReactDOM from 'react-dom'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import { reqUserList, reqIcons } from '../../api'
import {
    Card,
    Form,
    Input,
    Select,

} from 'antd';

const { Item } = Form
const { Option } = Select;

export default class ArtcleAddUpdate extends Component {

    state = ({
        userlist: [],
        icons: []
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
        console.log('result: ', result);
        if (result.status === 0) {
            this.setState({
                icons: result.data
            })
        }
    }


    componentDidMount() {
        this.getUsers()
        this.getIcons()
    }
    render() {
        const mdParser = new MarkdownIt(/* Markdown-it options */);

        // Finish!
        function handleEditorChange({ html, text }) {
            console.log('handleEditorChange', html, text)
        }


        const layout = {
            labelCol: { span: 2 },
            wrapperCol: { span: 10 },
        };

        const { userlist, icons } = this.state



        function handleChange(value) {
            console.log(`selected ${value}`);
        }

        return (
            <Card title='添加文章'>
                <Form {...layout}>
                    <Item label='标题' name="title" rules={[{ required: true, message: '必须输入文章标题' }]}>
                        <Input placeholder='请输入文章标题' />
                    </Item>
                    <Item label='作者' name='author' rules={[{ required: true, message: '必须选择作者名称' }]}>
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
                    <Item label='标签' name='lable' rules={[{ required: true, message: '必须选择所属标签' }]}>
                        <Select
                            name='lable'
                            showSearch
                            style={{ width: 200 }}
                            placeholder="请选择标签"
                            allowClear
                        >
                            {
                                icons.map(item => {
                                    return (<Option value={item.name} key={item._id}>{item.name}</Option>)
                                })
                            }
                        </Select>
                    </Item>
                    <Item label='内容' name='content'>

                        <MdEditor
                            value=""
                            style={{ height: "500px" }}
                            renderHTML={(text) => mdParser.render(text)}
                            onChange={handleEditorChange}
                        />
                    </Item>
                </Form>
            </Card>
        )
    }
}

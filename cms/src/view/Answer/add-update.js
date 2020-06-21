import React,{useState} from 'react'
import { Card, Button, Form, Input, message } from 'antd';
import {reqQuestionUpdate} from '../../api'

const { TextArea } = Input;
const {Item} =Form
export default function AswerAddUpdate(props) {
    const [question,setquestion]=useState(props.location.state)

    const layout = {
        labelCol: { span: 2 },
        wrapperCol: { span: 10 },
    };

    const tailLayout = {
        wrapperCol: { offset: 2, span: 16 },
      };

    const onFinish=async(value)=>{
        value._id=question._id
        const result=await reqQuestionUpdate(value)
        if(result.status===0){
            message.success('修改问题成功')
            props.history.push('/home/answer')
        }else{
            message.error("修改问题失败")
        }
    }
    return (
        <Card  title='修改问题'>
            <Form {...layout} onFinish={onFinish}>
                <Item label='用户名' name="username" 
                rules={[{ required: true, message: '必须输入用户名' }]}
                initialValue={question.username}>
                    <Input />
                </Item>
                <Item label='标签' name="label" 
                rules={[{ required: true, message: '必须输入标签' }]}
                initialValue={question.label}>
                    <Input />
                </Item>
                <Item label='描述' name="desc" 
                rules={[{ required: true, message: '必须输入问题描述' }]}
                initialValue={question.desc}>
                    <TextArea 
                     autoSize={true}
                     />
                </Item>
                <Item label='问题' name="questions" 
                rules={[{ required: true, message: '必须输入问题' }]}
                initialValue={question.questions}>
                    <TextArea 
                     autoSize={true}
                     />
                </Item>
                <Item {...tailLayout} >
                        <Button type='primary' htmlType="submit">提交</Button>
                    </Item>
            </Form>
        </Card>
    )
}

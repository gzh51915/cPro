import React,{useState,useEffect} from 'react'
import { Card, Button, Form, Input} from 'antd';
import { reqAswer } from '../../api'

const { TextArea } = Input;
const {Item} =Form
export default function Aswer(props) {
    const [question,setquestion]=useState(props.location.state) 
    const [aswerlist,setaswerlist]=useState([])


    const getaswer=(id)=>{
        reqAswer(id).then(res=>{
          const aswer = res.data
          setaswerlist(aswer)
            // console.log(aswer)
        })
      }
      useEffect(() => {
        getaswer(question._id)
        return 
      }, [])
      

    const layout = {
        labelCol: { span: 2 },
        wrapperCol: { span: 10 },
    };
    return (
        <Card title='问答查看'>
            <Form {...layout} >
                <Item label='问题' name="questions" 
                rules={[{ required: true, message: '必须输入问题' }]}
                initialValue={question.questions}>
                    <TextArea 
                    disabled
                     autoSize={true}
                     />
                </Item>
                <Item label='描述' name="desc" 
                rules={[{ required: true, message: '必须输入问题描述' }]}
                initialValue={question.desc}>
                    <TextArea 
                    disabled
                     autoSize={true}
                     />
                </Item>
                {
                    aswerlist.map((item,index)=><Item label={`回答${index+1}`} name={item.answers} initialValue={item.answers} key={item._id}>
                            <TextArea 
                    disabled
                     autoSize={true}
                     />
                    </Item>)
                }
                <Button type="primary" onClick={()=>props.history.push('/home/answer')}>返回</Button>
            </Form>
        </Card>
    )
}

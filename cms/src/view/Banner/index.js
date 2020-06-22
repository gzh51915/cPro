import React, { Component ,useContext, useState, useEffect, useRef } from 'react'
import { Card ,  Table, Input, Button, Popconfirm, Form} from 'antd';
import './index.scss'


const EditableContext = React.createContext();

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
  }) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef();
    const form = useContext(EditableContext);
    useEffect(() => {
      if (editing) {
        inputRef.current.focus();
      }
    }, [editing]);
  
    const toggleEdit = () => {
      setEditing(!editing);
      form.setFieldsValue({
        [dataIndex]: record[dataIndex],
      });
    };
  
    const save = async e => {
      try {
        const values = await form.validateFields();
        toggleEdit();
        handleSave({ ...record, ...values });
      } catch (errInfo) {
        console.log('Save failed:', errInfo);
      }
    };
  
    let childNode = children;
  
    if (editable) {
      childNode = editing ? (
        <Form.Item
          style={{
            margin: 0,
          }}
          name={dataIndex}
          rules={[
            {
              required: true,
              message: `${title} is required.`,
            },
          ]}
        >
          <Input ref={inputRef} onPressEnter={save} onBlur={save} />
        </Form.Item>
      ) : (
        <div
          className="editable-cell-value-wrap"
          style={{
            paddingRight: 24,
          }}
          onClick={toggleEdit}
        >
          {children}
        </div>
      );
    }
  
    return <td {...restProps}>{childNode}</td>;
};


export default class Banner extends Component {
    constructor(props){
        super(props);
        this.columns = [
            {
              title: '地址',
              dataIndex: 'address',
              width: '40%',
              editable: true,
            },
            {
              title: '介绍',
              dataIndex: 'introduce',
              width: '40%',
              editable: true,
            },
            {
              title: 'operation',
              dataIndex: 'operation',
              render: (text, record) =>
                this.state.dataSource.length >= 1 ? (
                  <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                    <p style={{color:"blue" , cursor:"pointer"}}>Delete</p>
                  </Popconfirm>
                ) : null,
            },
        ];
        this.state = {
            dataSource: [
              {
                key: '0',
                introduce: 'Edward King 0',
                address: 'London, Park Lane no. 0',
              },
              {
                key: '1',
                introduce: 'Edward King 1',
                address: 'London, Park Lane no. 1',
              },
            ],
            count: 2,
          };
    }

    handleDelete = key => {
        const dataSource = [...this.state.dataSource];
        this.setState({
          dataSource: dataSource.filter(item => item.key !== key),
        });
    };

    handleAdd = () => {
        const { count, dataSource } = this.state;
        const newData = {
          key: count,
          name: `Edward King ${count}`,
          age: 32,
          address: `London, Park Lane no. ${count}`,
        };
        this.setState({
          dataSource: [...dataSource, newData],
          count: count + 1,
        });
    };

    handleSave = row => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        this.setState({
          dataSource: newData,
        });
    };



    render() {
        const { dataSource } = this.state;
        const components = {
            body: {
              row: EditableRow,
              cell: EditableCell,
            },
        };
        const columns = this.columns.map(col => {
            if (!col.editable) {
              return col;
            }
      
            return {
              ...col,
              onCell: record => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave: this.handleSave,
              }),
            };
        });

        return (
            <Card title="轮播图管理"
                bordered={false} 
                style={{ width: "100%" }} 
            >
                
                <div>
                    <Button
                        onClick={this.handleAdd}
                        type="primary"
                        style={{
                            marginBottom: 16,
                        }}
                    >
                        添加
                    </Button>
                    <Table
                        components={components}
                        rowClassName={() => 'editable-row'}
                        bordered
                        dataSource={dataSource}
                        columns={columns}
                        pagination={false}
                    />
                </div>

            </Card>
        )
    }
}

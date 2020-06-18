import React, { Component } from 'react'
import './index.scss'

import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

import { Card } from 'antd';

import {getUserData} from '../../api'

export default class User extends Component {
    constructor(){
        super()
        this.state = {
            searchText: '',
            searchedColumn: '',
        };
    }

    componentDidMount(){
      getUserData().then(res=>{
        if(res.data.code===200){
          this.setState({
            userData:res.data.data.user
          })
        }
      })
    }

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              ref={node => {
                this.searchInput = node;
              }}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
              style={{ width: 188, marginBottom: 8, display: 'block' }}
            />
            <Space>
              <Button
                type="primary"
                onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{ width: 90 }}
              >
                Search
              </Button>
              <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                Reset
              </Button>
            </Space>
          </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
          record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => this.searchInput.select());
          }
        },
        render: text =>
          this.state.searchedColumn === dataIndex ? (
            <Highlighter
              highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
              searchWords={[this.state.searchText]}
              autoEscape
              textToHighlight={text.toString()}
            />
          ) : (
            text
          ),
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
          searchText: selectedKeys[0],
          searchedColumn: dataIndex,
        });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };
    
    render() {
        const columns = [
            {
              title: '用户名',
              dataIndex: 'realname',
              key: 'realname',
              width: '20%',
              ...this.getColumnSearchProps('realname'),
            },
            {
              title: '手机号',
              dataIndex: 'phone',
              key: 'phone',
              width: '20%',
              ...this.getColumnSearchProps('phone'),
            },
            {
              title: '性别',
              dataIndex: 'gender',
              key: 'gender',
            },
            {
              title: '地址',
              dataIndex: 'network',
              key: 'network',
              ...this.getColumnSearchProps('network'),
            },
            {
                title: '生日',
                dataIndex: 'birth',
                key: 'birth',
            },
        ];

        return (
            <Card title="用户信息" bordered={false} style={{ width: '100%' }}>
                <Table 
                  columns={columns} 
                  dataSource={this.state.userData}
                  onRow={record => { 
                    return {
                      onClick: ()=> {
                        console.log(record);
                        console.log(this);
                        this.props.history.push(`/home/user/userdetail?userid=${record.phone}`)
                      }
                    }
                  }}
                />
            </Card>
        )
    }
}

import React, { Component } from 'react'
import './index.scss'

import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

import { Card } from 'antd';

import {getuserInfo} from '../../api'

import {connect} from 'react-redux'
import {addUserInfo} from './store/actionCreator'

import {formateDate} from '../../utils/dateUtils'

class User extends Component {
    constructor(){
        super()
        this.state = {
            searchText: '',
            searchedColumn: '',
        };
    }
    componentDidMount(){
      getuserInfo().then(res=>{
        // console.log(res);
        if(res.status===0){

          let data = res.data

          data=data.map(item=>{
            return {
              ...item,
              time:formateDate(item.crea_time)
            }
          })

          this.setState({
            userData:data
          })

          this.props.addData(data)

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
              dataIndex: 'username',
              key: 'username',
              width: '15%',
              ...this.getColumnSearchProps('username'),
            },
            {
              title: '居住地',
              dataIndex: 'liveCity',
              key: 'liveCity',
              width: '15%',
              // ...this.getColumnSearchProps('liveCity'),
            },
            {
              title: '注册时间',
              dataIndex: 'time',
              key: 'time',
            },
            {
              title: '地址',
              dataIndex: 'network',
              key: 'network',
              // ...this.getColumnSearchProps('network'),
            },
            {
                title: '介绍',
                dataIndex: 'desc',
                key: 'desc',
            },
        ];

        return (
            <Card title="用户信息" bordered={false} style={{ width: '100%' }}>
                <Table 
                  columns={columns} 
                  dataSource={this.state.userData}
                  rowKey="_id"
                  onRow={record => { 
                    return {
                      onClick: ()=> {
                        this.props.history.push(`/home/user/userdetail/${record._id}`)
                      }
                    }
                  }}
                />
            </Card>
        )
    }
}

const mapState = (state)=>{
  return {
    userInfo:state.userInfo
  }
}

const mapDispatch = (dispatch)=>{
  return{
      addData(data){
          dispatch(addUserInfo(data))
      }
  }
}

export default connect(mapState,mapDispatch)(User)

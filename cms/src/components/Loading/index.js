import React from 'react'
import { Spin, Space } from 'antd';

export default function index() {
    return (
        <div className="box">
            <Space size="middle">
                <Spin size="large" />
            </Space>
        </div>
    )
}

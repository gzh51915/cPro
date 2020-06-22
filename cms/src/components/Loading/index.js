import React from 'react'
import { Spin, Space } from 'antd';

export default function Loading() {
    return (
        <div className="box">
            <Space size="middle">
                <Spin size="large" />
            </Space>
        </div>
    )
}

import React, { Component } from 'react'
import { Button, Flex } from 'antd';
import { WechatOutlined } from '@ant-design/icons';
import { Space } from 'antd';

export default class App extends Component {
    render() {
        return (
            <div>
                App
                <button>点我</button>
                <Button type="primary">按钮1</Button>
                <Button>按钮2</Button>
                <Button type="link">按钮3</Button>
                <WechatOutlined />
            </div>
        )
    }
}
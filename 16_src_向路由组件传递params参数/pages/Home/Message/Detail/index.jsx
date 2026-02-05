import React, { Component } from 'react'

const DetailData = [
    { id: '01', content: '你好，cc' },
    { id: '02', content: '你好，ll' },
    { id: '03', content: '你好，lala' },
]
export default class Detail extends Component {

    render() {
        // 接收params参数
        const { id, title } = this.props.match.params
        const findResult = DetailData.find((detailObj) => {
            return detailObj.id === id
        })
        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTEN:{findResult.content}</li>
            </ul>
        )
    }
}

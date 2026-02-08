import React, { Component } from 'react'
import qs from 'querystring-es3'
import { withRouter } from 'react-router-dom'

const DetailData = [
    { id: '01', content: '你好，cc' },
    { id: '02', content: '你好，ll' },
    { id: '03', content: '你好，lala' },
]
export default class Detail extends Component {

    render() {

        // 接收search参数
        const { search } = this.props.location
        const { id, title } = qs.parse(search.slice(1))

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

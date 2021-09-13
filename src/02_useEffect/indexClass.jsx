import React, { Component } from 'react'
import ClassIndex from './classIndex'
import FunIndex from './funIndex'

export default class IndexClass extends Component {
    state = {
        show: true,
        sum: 0
    }
    render() {
        const { show, sum } = this.state
        return (
            <>
                {
                    show ? (
                        <>
                            <ClassIndex></ClassIndex>
                            <FunIndex></FunIndex>
                        </>) : <h1>卸载了</h1>
                }
                <br />
                <br />
                <button onClick={() => this.setState({ show: !show })}>点击切换</button>
                <br />
                <br />
                <h1>Class中Index中的sum值：：{sum}</h1>
                <button onClick={() => this.setState(preState => ({ sum: preState.sum - 1 }))}>点击-1</button>
            </>
        )
    }
}

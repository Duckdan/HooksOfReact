import React, { Component } from 'react'

/**
 * 类组件调用setState方法即使传递的值与上一个值相同，它还是会重新调用render方法
 */
export default class classIndex extends Component {
    state = {
        count: 0
    }
    render() {
        const { count } = this.state
        console.log('类组件更新啦~~~~~',count)
        return (
            <>
                <h1>类组件当前Count的值为：{count}</h1>
                <button onClick={() => this.setState(preState => ({ count: preState.count}))}>点击我+1</button>
            </>
        )
    }
}

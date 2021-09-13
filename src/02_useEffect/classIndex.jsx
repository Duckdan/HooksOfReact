import React, { Component } from 'react'

export default class classIndex extends Component {
    state = {
        count: 0
    }

    componentDidMount() {
        console.log('类组件componentDidMount', arguments)
    }

    componentDidUpdate() {
        console.log('类组件componentDidUpdate', arguments)

    }

    componentWillUnmount() {
        console.log('类组件componentWillUnmount', arguments)
    }

    render() {
        const { count } = this.state
        return (
            <>
                <h1>类组件当前Count的值为：{count}</h1>
                <button onClick={() => this.setState(preState => ({ count: preState.count + 1 }))}>点击我+1</button>
            </>
        )
    }
}

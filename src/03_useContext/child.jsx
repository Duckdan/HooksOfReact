import React from 'react'
import Son from './son'
export default function Child() {
    return (
        <div className="child">
            <h1>我是子组件</h1>
            <Son/>   
        </div>
    )
}

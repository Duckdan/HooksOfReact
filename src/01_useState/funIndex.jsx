// import React, { useState } from 'react'  //react可以不引入
import { useState } from 'react'
/**
 * 利用useState实现状态数据的封装
 * 函数组件更新函数返回值与当前 state 完全相同，则随后的重渲染会被完全跳过。
 * @returns 
 */
export default function Child() {
    const [count, setCount] = useState(0)
    console.log('函数组件更新啦~~~~~~~')
    return (
        <>
            <h1>函数组件当前Count的值为：{count}</h1>
            <button onClick={() => setCount(preCount=>preCount)}>点击我+1</button>
        </>
    )
}

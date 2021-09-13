// import React, { useState } from 'react'  //react可以不引入
import { useState, useEffect } from 'react'
/**
 * 函数组件在更新时，如果该组件的状态值没有改变，那么我就不会重新去渲染该组件
 * @returns 
 */
export default function Child() {
    const [count, setCount] = useState(0)

    /**
     * 在函数中使用useEffect来模拟这个组件的componentDidMount/componentWillUnmount的生命周期
     * 此时，useEffect的第二个参数不要传值
     */
    useEffect(()=>{
        console.log("函数组件第一个参数的函数体")
        //返回值被调用的时候是无参的
        return ()=>{
            console.log("函数组件第一个参数的函数返回值")
        }
    },[])

    /**
     * 模拟针对count这个值的componentDidUpdate生命周期。
     * 只不过首次加载的时候会被调用。
     * 第一个参数的函数无参数
     */
    useEffect(() => {
        //此时拿到的count已经是变化之后的值了，这个地方不会告诉你之前的值是什么
        console.log('count的值变化了',count)
    }, [count])

    return (
        <>
            <h1>函数组件当前Count的值为：{count}</h1>
            <button onClick={() => setCount(preCount => preCount + 1)}>点击我+1</button>
        </>
    )
}

import React, { useState, useCallback } from 'react'
let lastTransName
function ChildComponent({ name, children }) {

    function transformName(name) {
        console.log('转化姓名')
        return `中华人民共和国公民：${name}`
    }

    // const transName = transformName(name) //这种方式，任何数据改变都会重新调用transformName方法
    const transName = useCallback(() => transformName(name), [name]) //这种方式，只有当name发生变化的时候才会调用transformName方法
    /**
     * 不改变name时，transName与上一次age改变时候的transName是一个值
     * 这样就可以实现在函数组件中调用节流或者防抖函数时，不会重复创建函数对象
     */
    console.log('transName', transName===lastTransName);
    lastTransName = transName
    return (
        <>
            <div>公民：{transName()}</div>
            <div>年龄：{children}</div>
        </>)
}

export default function Index() {
    const [name, setName] = useState('小明')
    const [age, setAge] = useState(20)
    return (
        <>
            <button onClick={() => setName(preName => new Date().getTime() + preName)}>点击改变姓名</button>
            <button onClick={() => {
                let age = Math.floor(Math.random() * 200)
                console.log('age', age)
                setAge(age)
            }}>点击改变年龄</button>
            <ChildComponent name={name}>{age}</ChildComponent>
        </>
    )
}

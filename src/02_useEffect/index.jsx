import React, { useState } from 'react'
import ClassIndex from './classIndex'
import FunIndex from './funIndex'

export default function Index() {
    const [show, setShow] = useState(true)
    const [sum, setSum] = useState(0)
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
            <button onClick={() => setShow(preShow => !preShow)}>点击切换</button>
            <br />
            <br />
            <h1>Index中的sum值：：{sum}</h1>
            <button onClick={() => setSum(preSum => preSum - 1)}>点击-1</button>
        </>
    )
}

import React, { createContext, useState } from 'react'
import Child from './child'

const SumContext = createContext(0)
function Parent() {
    const [sum, setSum] = useState(0)
    return (
        <div className="parent">
            <h1>我是父组件</h1>
            <SumContext.Provider value={sum}>
                <Child />
            </SumContext.Provider>
            <button onClick={() => setSum(preSum => preSum + 1)}>点击+1</button>
        </div>
    )
}

export { Parent, SumContext }
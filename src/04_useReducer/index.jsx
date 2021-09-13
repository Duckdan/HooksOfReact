import React, { useReducer } from 'react'

const initSum = { sum: 0 }
function sumReducer(state = initSum, action) {
    switch (action.type) {
        case 'increment':
            return { sum: state.sum + 1 }
        case 'decrement':
            return { sum: state.sum - 1 }
        default:
            return state
    }
}

export default function Index() {
    const [state, dispacth] = useReducer(sumReducer, initSum)
    return (
        <>
            <h1>sum当前值为：{state.sum}</h1>
            <button onClick={()=>dispacth({type:'increment'})}>点击+1</button>   
            <button onClick={()=>dispacth({type:'decrement'})}>点击-1</button>   
        </>
    )
}

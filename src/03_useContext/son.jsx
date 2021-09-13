import React, { useContext } from 'react'
import {SumContext} from './parent'

export default function Son() {
   const sum =  useContext(SumContext)
    return (
        <div className="son">
            <h1>我是孙组件,当前sum值为：{sum}</h1>
        </div>
    )
}

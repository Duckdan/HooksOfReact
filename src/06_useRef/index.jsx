import React, { useRef } from 'react'

/**
 * 在函数组件中操作DOM元素
 * @returns 
 */
export default function Index() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        // `current` 指向已挂载到 DOM 上的文本输入元素
        inputEl.current.value = new Date().getTime();
    };
    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}
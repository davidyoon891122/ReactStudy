import React, { useState }from 'react'

export default function State() {
    const initialState = 0
    const [count, setCount] = useState(initialState)
    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialState)}>Reset</button>
            <button onClick={() => setCount(prev => prev - 1)}>-</button>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
        </div>
    )
}

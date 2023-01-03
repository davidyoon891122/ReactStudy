import React, { useState, useEffect } from 'react'

export default function FunctionalComponent() {
    const [date, setDate] = React.useState(new Date())

    React.useEffect(() => {
        const interval = setInterval(() => {
            tick()
        }, 1000)
        
        return () => {
            clearInterval(interval)
        }
    }, [])

    const tick = () => {
        setDate(new Date())
    }

    return (
        <div>
            <h1>Hello, World!, It's the functional</h1>
            <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
    )
}

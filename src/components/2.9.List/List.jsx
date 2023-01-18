import React from 'react'

export default function List() {
    const todos = [
        {
            id: 1,
            text: "Drink Water"
        },
        {
            id: 2,
            text: "Study"
        },
        {
            id: 3,
            text: "Listen Lecture"
        },
        {
            id: 4,
            text: "Go to bedr"
        }
    ]

    const Item = (props) => {
        return <li>
            {props.id}
            {props.text}
            </li>
    }

    const todoList = todos.map((todo) => <Item key={todo.id} {...todo} id={todo.id} />)

    return (
        <>
            {todoList}
        </>
    )
}

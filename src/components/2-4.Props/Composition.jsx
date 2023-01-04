import React from 'react'

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

export default function Composition() {
  return (
    <div>
      <Welcome name="David" />
      <Welcome name="Yoon" />
      <Welcome name="LaLa" />
    </div>
  )
}
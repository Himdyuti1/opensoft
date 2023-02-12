import React from 'react'

export const Home = (props) => {
  return (
    <div>
        <h1>This is the home page!!!</h1>
        <h4>Visit Count={props.count}</h4>
    </div>
  )
}
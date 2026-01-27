import React from 'react'

const Child = ({send}) => {
  return (
    <div>
       <h2>Child data check</h2>
       <button onClick={()=>send("Hello Parent, I am your Child!")}>
        Send Data to Parent
        </button>
    </div>
  )
}

export default Child

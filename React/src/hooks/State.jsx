import React, { useEffect } from 'react'
import { useState } from "react"
const State = () => {
    const [count,setCount] = useState(0);
    const[like,setLike]=useState(0);
    useEffect(()=>{
        console.log("from use effect");
    })
    
  return (
    <div>
        <h2>UseState Example</h2>
        <h3>Count : {count}</h3>
        <button onClick={()=>setCount(count+1)}>Increment</button> &nbsp;
        <button onClick={()=>setCount(count-1)}>Decrement</button>

        <h3>Likes : {like}</h3>
        <button onClick={()=>setLike(like+1)}>Like</button> &nbsp;
        <button onClick={()=>setLike(like-1)}>Dislike</button>
    </div>
  )
}
export default State

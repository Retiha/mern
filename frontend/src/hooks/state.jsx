import React, { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>useState Example</h1>
      <p style={{ fontSize: "24px" }}>Count: {count}</p>
      <div style={{ marginTop: "20px" }}>
        <button onClick={increment} style={{ padding: "10px 20px", marginRight: "10px", fontSize: "16px" }}>
          Increment👍
        </button>
        <button onClick={decrement} style={{ padding: "10px 20px", fontSize: "16px" }}>
          Decrement👎
        </button>
      </div>
    </div>
  );
};

export default State;

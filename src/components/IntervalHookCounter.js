// https://reactjs.org/docs/hooks-effect.html#tip-use-multiple-effects-to-separate-concerns

import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    // setCount(count + 1); // dependency array in 17 row must be with count
    setCount((prevCount) => prevCount + 1); // dependency array in 17 row must be empty
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []); // 1. dependency array with count, when setCount is without function with prevCount value 2. dependency array empty, when setCount is with function with prevCount value

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default IntervalHookCounter;

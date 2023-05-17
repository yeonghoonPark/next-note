"use client";

import { useState } from "react";

export default function Counter() {
  console.log("hello client");
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <button type='button' onClick={() => setCount((prev) => prev + 1)}>
        increase
      </button>
    </>
  );
}

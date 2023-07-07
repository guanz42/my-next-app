"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-sky-50">
      <p>You clicked {count} times</p>
      <button className="bg-sky-200" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

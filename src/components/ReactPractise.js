import { useState } from "react";

export default function Counter() {
  const [age, setAge] = useState(42);
  console.log(age);
  function increment() {}

  return (
    <>
      <h1>Your age: {age}</h1>
      <button
        onClick={() => {
          setAge(age + 1);
          setAge((age) => age + 1);
        }}
      >
        +3
      </button>
      <button
        onClick={() => {
          increment();
        }}
      >
        +1
      </button>
    </>
  );
}

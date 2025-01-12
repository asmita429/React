import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <h1>Sharing Button count</h1>
      <MyButton count={count} onClick={handleClick} />
      <br /> <br />
      <MyButton count={count} onClick={handleClick} />
    </>
  );
}

function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Button Clicked {count} times</button>;
}

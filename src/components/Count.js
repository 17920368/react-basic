import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(100);
  return (
    <>
      <h1>Valor: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 10);
        }}
      >
        Sumar
      </button>
      <button
        onClick={() => {
          setCount(count - 10);
        }}
      >
        Restar
      </button>
      <button
        onClick={() => {
          setCount(100);
        }}
      >
        Reiniciar
      </button>
    </>
  );
};

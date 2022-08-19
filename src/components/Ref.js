import { useRef } from "react";

export const Div = () => {
  const inputRef = useRef(null);
  const pRef = useRef(null);
  const changeName = () => {
    pRef.current.innerText = inputRef.current.value;
  };
  return (
    <div>
      <input ref={inputRef} onChange={changeName}></input>
      <p ref={pRef}></p>
    </div>
  );
};

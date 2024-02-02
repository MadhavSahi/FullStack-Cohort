import React from "react";
import { useRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";

const Buttons = () => {
  const [count, setCount] = useRecoilState(countAtom);
  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleSub = () => {
    setCount(count - 1);
  };
  const handleZero = () => {
    setCount(0);
  };
  return (
    <>
      {/* <div>Buttons</div> */}
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSub}>-</button>
      <button onClick={handleZero}>0</button>
    </>
  );
};

export default Buttons;

import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";

// The useSetRecoilState hook is used to modify the state of the countAtom. When any button is clicked, it updates the state of countAtom, causing Recoil to notify all components that are subscribed to that atom. Even though you are not explicitly managing local state within the Buttons component, the component is subscribed to the Recoil state through the use of useSetRecoilState, and it will re-render when the countAtom state changes., the component will re-render on the click of any button due to the updates to the Recoil state managed by countAtom.

// const Buttons = React.memo(() => {
const Buttons = () => {
  //   const [count, setCount] = useState(0);
  const setCount2 = useSetRecoilState(countAtom);
  //as we r not using state in this component, this component will not be re-rendered on button clicks...this is the benefit because we are only using the setCount method from this recoil hook and not the actual state value. Hence it will prevent the re-renders and improve performance of the App bcz of recoil

  const handleAdd = () => {
    setCount2((count) => count + 1);
  };

  const handleSub = () => {
    setCount2((count) => count - 1);
  };

  const handleZero = () => {
    setCount2(0);
  };
  console.log("buttons component re-rendered");

  return (
    <>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSub}>-</button>
      <button onClick={handleZero}>0</button>
    </>
  );
};

export default Buttons;

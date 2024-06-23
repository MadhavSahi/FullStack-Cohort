// import { useState } from "react";
import "./App.css";
// import {
//   RecoilRoot,
//   atom,
//   selector,
//   useRecoilState,
//   useRecoilValue,
//   useSetRecoilState,
// } from "recoil";
import Count from "./Count";
import { RecoilRoot } from "recoil";
import Buttons from "./Buttons";
import IsEven from "./IsEven";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RecoilRoot>
        <Count />
        <Buttons />
        <IsEven />
      </RecoilRoot>
    </>
  );
}

export default App;

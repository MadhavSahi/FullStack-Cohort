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
// import Buttons from "./Buttons";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <RecoilRoot>
        <Count />
        {/* <Buttons/> */}
      </RecoilRoot>
    </>
  );
}

export default App;

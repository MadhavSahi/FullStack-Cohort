import React from "react";
import { useRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";
import Buttons from "./Buttons";

const Count = () => {
  // const [count, setCount] = useState(0);

  const count = useRecoilState(countAtom);
  return (
    <>
      <div>Counter value is :- {count}</div>
      <br />
      <div>
        <Buttons />
      </div>
    </>
  );
};

export default Count;

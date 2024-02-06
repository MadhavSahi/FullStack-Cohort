import React from "react";
import { useRecoilValue } from "recoil";
import { evenSelector } from "./store/atoms/count";

const IsEven = () => {
  const isEven = useRecoilValue(evenSelector);

  return (
    <>
      {!isEven ? (
        <>
          <div>IsEven</div>
        </>
      ) : null}
    </>
  );
};

export default IsEven;



import React from "react";
import { Sheet } from "../components/Sheet";

//https://www.youtube.com/watch?v=_gCt8MgOzVk
export const Basic = () => {
  const main = `
    E:m2;h 1;
    m0;p 1;
    Am:m  2;d  2, 1;
    m2;d0, 1;
    E7:m 0;d    x, 1;
    m0;m2;
    Am:m 1;m  2;
    m  2;;
    Dm:d    x,0;d    x,3;
    m7;p5,3;
    Am/C:m2;d    x, 1;
    m2;d0, 1;
    E7:m 0;h 1;
    m0;m2;
    Am:m 1;m  2;
    m  2;
  `;
  return (
    <Sheet
      title="Korobeiniki"
      tuning="gDGBd"
      barsPerStave={10}
      meter={2}
      notes={`
        ${main};
        ${main};
        Am:m2;;
        m 1;;
        E:m0;;
        m 0;;
        Am:m 1;;
        m  2;;
        E:m  1;;
        m 0;;
        Am:m2;;
        m 1;;
        E:m0;;
        m 0;;
        Am:m 1;m2;
        m7;m7;
        E:m6;;
        ;;
        ${main};
        ${main}


    `}
    />
  );
};

export const WithBrushes = () => {
  const main = `
    E:b2;h 1;
    b0;p 1;
    Am:m  2;d  2, 1;
    b2;d0, 1;
    E7:b 0;h 1;
    b0;m2;
    Am:m 1;m  2;
    m  2;;
    Dm:d    x,0;d    x,3;
    m7;p5,3;
    Am/C:m2;d    x, 1;
    m2;d0, 1;
    E7:m 0;h 1;
    m0;m2;
    Am:m 1;m  2;
    m  2;
  `;
  return (
    <Sheet
      title="Korobeiniki with brushes"
      tuning="gDGBd"
      barsPerStave={10}
      meter={2}
      notes={`
        ${main};
        ${main};
        Am:m2;;
        m 1;;
        E:m0;;
        m 0;;
        Am:m 1;;
        m  2;;
        E:m  1;;
        m 0;;
        Am:m2;;
        m 1;;
        E:m0;;
        m 0;;
        Am:m 1;m2;
        m7;m7;
        E:m6;;
        ;;
        ${main};
        ${main}


    `}
    />
  );
};

const Korobeiniki = () => (
  <>
    <Basic />
    <WithBrushes />
  </>
);

export default Korobeiniki;

import React from "react";
import { Sheet } from "../components/Sheet";

export const RussianShort = () => (
  <Sheet
    title="Russian National Anthem"
    description="short"
    tuning="gCGBd"
    barsPerStave={5}
    notes={`
      C:;;;d    x,  0;
      C:b 1;h  2;G:b 0;d   4,   4;
      Am:b  2;d  0,   5;C:b  0;d   0,   0;
      Dm:b   2;s   2,   4;F:b   5;p   5,  0;
      Am:b  2;h 1;G:m0;d    x,  0;
      C:b2;d0, 1;G:b0;d 0,  0;
      Am:b 1;d 0,  2;Em:b 0;d   4,   4;
      F:b  2;d  0,   5;C:b  0;d   0,   0;
      C:b 1; d 0,  2;m  0
    `}
  />
);

export const RussianMelodyNotes = () => {
  const middle = `
    C:b 1;h  2;G:b 0;d   4,   4;
    Am:b  2;d  0,   5;C:b  0;d   0,   0;
    Dm:b   2;s   2,   4;F:b   5;p   5,  0;
    Am:b  2;h 1;G:b0;d    x,  0;
    C:b2;d0, 1;G:b0;d 0,  0;
    Am:b 1;d 0,  2;Em:b 0;d   4,   4;
    F:b  2;d  0,   5;C:b  0;d   0,   0;
    C:b 1; d 0,  2;G:p  0, 0;h 1, 3;
    C:b2;;d0, 1;h 1;
    G:b0;d    x,  0;p  0, 0;h 1, 3;
    C:b 1;;d 0,  2;h  2;    
    G:b 0;d    x,   4;p   4,  0;p  2, 0;
    C:b 1;p  2, 0;b 1;p  2, 0;
    b 1;p  2, 1;F:b3;d3,    x;
    F:b3;;G:p2;p 1;
    C:b2;d    x, 1;b 1;;
    Dm:b0;;p 1;p  2;
    Am:b 1;d    x,  2;b  2;;
    C:b 1;d 0,  2;b  0;d   0,   0;
  `;
  return (
    <Sheet
      title="Russian National Anthem"
      description="melody notes"
      tuning="gCGBd"
      barsPerStave={5}
      notes={`
      C:m2100;;;d    x,  0;     
      ${middle}
      C:b 1;d 0,  2;b  0;d    x,  0;
      ${middle}
      b  0;;b  2;b 0;
      m2100;
    `}
    />
  );
};

export const RussianFullClawhammer = () => {
  const middle = `
    C:b 1;h  2;G:b 0;d   4,   4;
    Am:b  2;d  0,   5;C:b  0;d   0,   0;
    Dm:b   2;s   2,   4;F:b   5;p   5,  0;
    Am:b  2;h 1;G:b0002;d    x,  0;
    C:b2;d0, 1;G:b0;d 0,  0;
    Am:b 1;d 0,  2;Em:b 0;d   4,   4;
    F:b  2;d  0,   5;C:b  0;d   0,   0;
    C:b 1; d 0,  2;G:p  0, 0;h 1, 3;
    C:m2;b2100;d0, 1;h 1;
    G:m0;b0002;p  0, 0;h 1, 3;
    C:m 1;b2100;d 0,  2;h  2;    
    G:m 0;b0002;p   4,  0;p  2, 0;
    C:b 1;p  2, 0;b 1;p  2, 0;
    b 1;p  2, 1;F:m3;b3120;
    F:m3;b3120;G:p2;p 1;
    C:m2;b2100;m 1;b2100;
    G:m0;b0002;p 1;p  2;
    Am:m 1;b2120;m  2;b2120;
    C:b 1;d 0,  2;b  0;d   0,   0;
  `;
  return (
    <Sheet
      title="Russian National Anthem"
      description="clawhammer arrangement"
      tuning="gCGBd"
      barsPerStave={5}
      notes={`
      C:m2100;;;d    x,  0;     
      ${middle}
      C:b 1;d 0,  2;b  0;d    x,  0;
      ${middle}
      G:m  0;m000;C:m  2;m 0;
      m2100;
    `}
    />
  );
};

const Anthems = () => (
  <>
    <RussianShort />
    {/* <RussianFull /> */}
    <RussianFullClawhammer />
  </>
);

export default Anthems;

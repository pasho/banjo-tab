import React from "react";
import { Sheet } from "../components/Sheet";

export const RussianShort = () => (
  <Sheet
    title="Russian National Anthem (short)"
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

export const RussianFull = () => {
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
      title="Russian National Anthem (full)"
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

export const RussianFullWithChords = () => {
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
      title="Russian National Anthem (chords)"
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

export const RussianFullWithManyChords = () => {
  const middle = `
    C:b 1;h  2;G:b 0;d   4,   4;
    Am:b  2;d  0,   5;C:b  0;d   0,   0;
    Dm:b   2;s   2,   4;F:b   5;p   5,  0;
    Am:b  2;h 1;G:b0002;d    x,  0;
    C:b2;d0, 1;G:b0;d 0,  0;
    Am:b 1;d 0,  2;Em:b 0;d   4,   4;
    F:b  2;d  0,   5;C:b  0;d   0,   0;
    C:b 1; d 0,  2;G:p  0, 0;h 1, 3;
    C:b2;b2100;d0, 1;h 1;
    G:b0002;d    x,  0;p  0, 0;h 1, 3;
    C:b 1;b2100;d 0,  2;h  2;    
    G:b0002;d    x,   4;p   4,  0;p  2, 0;
    C:b 1;p  2, 0;b 1;p  2, 0;
    b 1;p  2, 1;F:b3;b312;
    F:b3;b312;G:p2;p 1;
    C:b2100;d    x, 1;b 1;C:b2100;
    Dm:b0;b3322;p 1;p  2;
    Am:b212;d    x,  2;m  2;b212;
    C:b 1;d 0,  2;m  0;d   0,   0;
  `;
  return (
    <Sheet
      title="Russian National Anthem (many chords)"
      tuning="gCGBd"
      barsPerStave={5}
      notes={`
      C:m2100;;;d    x,  0;
      ${middle}
      C:b 1;d 0,  2;b2100;d    x,  0;
      ${middle}
      b  0;b2100;b  2;b 0;
      m2100;
    `}
    />
  );
};

const Anthems = () => (
  <>
    <RussianShort />
    <RussianFull />
    <RussianFullWithChords />
    <RussianFullWithManyChords />
  </>
);

export default Anthems;

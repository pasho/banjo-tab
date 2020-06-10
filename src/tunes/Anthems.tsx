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

export const RussianFull = () => (
  <Sheet
    title="Russian National Anthem (full)"
    tuning="gCGBd"
    barsPerStave={5}
    notes={`
      C:m 1;;;d    x,  0;
      
      C:b 1;h  2;G:b 0;d   4,   4;
      Am:b  2;d  0,   5;C:b  0;d   0,   0;
      Dm:b   2;s   2,   4;F:b   5;p   5,  0;
      Am:b  2;h 1;G:m0;d    x,  0;
      C:b2;d0, 1;G:b0;d 0,  0;
      Am:b 1;d 0,  2;Em:b 0;d   4,   4;
      F:b  2;d  0,   5;C:b  0;d   0,   0;
      C:b 1; d 0,  2;G:p  0, 0;h 1, 3;
      C:m2;;d0, 1;h 1;
      G:m0;d    x,  0;p  0, 0;h 1, 3;
      C:m 1;;d 0,  2;h  2;    
      G:m 0;d    x,   4;p   4,  0;p  2, 0;
      C:m 1;p  2, 0;m 1;p  2, 0;
      m 1;p  2, 1;F:m3;d3,    x;
      F:m3;;G:p2;p 1;
      C:m2;d    x, 1;m 1;;
      Dm:m0;;p 1;p  2;
      Am:m 1;d    x,  2;m  2;;
      C:m 1;d 0,  2;m  0;d   0,   0;
      
      C:m 1;d 0,  2;m  0;d    x,  0;

      b 1;h  2;b 0;d   4,   4;
      b  2;d  0,   5;b  0;d   0,   0;
      b   2;s   2,   4;b   5;s   5,   7;
      b  2;h 1;m0;d    x,  0;
      b2;d0, 1;b0;d 0,  0;
      b 1;d 0,  2;b 0;d   4,   4;
      b  2;d  0,   5;b  0;d   0,   0;
      b 1; d 0,  2;h  4;h 1, 3;
      m2;;d0, 1;h 1;
      m0;d    x,  0;h  4;h 1, 3;
      m 1;;d 0,  2;h  2;    
      m 0;d    x,   4;s   4,   7;s  2,  4;
      m 1;s  2,  4;m 1;s  2,  4;
      m 1;s  2,  5;m3;d3,    x;
      m3;;p2;p 1;
      m2;d    x, 1;m 1;;
      m0;;p 1;p  2;
      m 1;d    x,  2;m  2;;
      m 1;d 0,  2;m  0;d   0,   0;

      m  0;;m  2;m 0;
      m 1;
    `}
  />
);

const Anthems = () => (
  <>
    <RussianShort />
    <RussianFull />
  </>
);

export default Anthems;

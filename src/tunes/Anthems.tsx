import React from "react";
import { Sheet } from "../components/Sheet";

export const Russian = () => (
  <Sheet
    title="Russian National Anthem (short)"
    tuning="gCGBd"
    barsPerStave={5}
    notes={`
      ;;;d    x,  0;
      b 1;h  2;b 0;d   4,   4;
      b  2;d  0,   5;b  0;d   0,   0;
      b   2;s   2,   4;b   5;s   5,   7;
      b  2;h 1;m0;d    x,  0;
      b2;d0, 1;b0;d 0,  0;
      b 1;d 0,  2;b 0;d   4,   4;
      b  2;d  0,   5;b  0;d   0,   0;
      b 1; d 0,  2;m  0
    `}
  />
);

const Anthems = () => (
  <>
    <Russian />
  </>
);

export default Anthems;

import React from "react";
import { SheetTemplate } from "../components/Sheet";

// http://abcnotation.com/tunePage?a=trillian.mit.edu/~jc/music/abc/Russia/Kalinka/0000
export const CVersion = () => {
  return (
    <SheetTemplate
      title="Kalinka"
      description="lower"
      tuning="gCGBd"
      barsPerStave={9}
      meter={2}
      notes={`
        ;b  2;
        b  0;h   4,   5;
        b  0;h   4,   5;
        b  0;p   5,   4;
        b   2;d  2,  2;
        d  0,   5;h   4,   5;
        b  0;h   4,   5;
        b  0;p   5,   4;
        m   2;
      `}
    />
  );
};

export const GVersion = () => {
  return (
    <SheetTemplate
      title="Kalinka"
      description="higher"
      tuning="gDGBd"
      barsPerStave={9}
      meter={2}
      notes={`
        ;b 0;
        b  2;p   3,  0;
        b  2;p   3,  0;
        b  2;d  0,   3;
        b   2;d 0, 0;
        p  2;p   3,  0;
        b  2;p   3,  0;
        b  2;d  0,   3;
        m   2;
      `}
    />
  );
};

const Kalinka = () => (
  <>
    <CVersion />
    <GVersion />
  </>
);

export default Kalinka;

import React from "react";
import { SheetTemplate } from "../components/Sheet";
import VexTabSheet from "../components/VexTabSheet";

export const RussianShort = () => (
  <SheetTemplate
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
    <SheetTemplate
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
    b 1;d  2, 1;F:m3;b3120;
    F:m3;b3120;G:p2;p 1;
    C:m2;b2100;m 1;b2100;
    G:m0;b0002;p 1;p  2;
    Am:m 1;b2120;m  2;b2120;
    C:b 1;d 0,  2;b  0;d   0,   0;
  `;
  return (
    <SheetTemplate
      title="Russian National Anthem"
      description="clawhammer arrangement"
      tuning="gCGBd"
      barsPerStave={5}
      notes={`
      C:m2100;;;d    x,  0;     
      ${middle}
      C:b 1;d 0,  2;b  0;d    x,  0;
      ${middle}
      G:m  0;m0002;C:m  2;m 0;
      m2100;
    `}
    />
  );
};

const RussianAnthem = () => (
  <>
    {/* <RussianShort /> */}
    {/* <RussianFull /> */}
    <RussianFullClawhammer />
    <h1>Russian National Anthem</h1>
    <p>gCGBd</p>
    <VexTabSheet
      {...{
        tuning: "D/5,B/4,G/4,C/4,G/5",
        staves: [
          `
            notes :hd (2/1.1/2.0/3.0/4) $.top.G$ :8 ## 0/3 =|: 1/2-0/5 0h2/3 0/2-0/5 4-4/4 | 2/3-0/5 0/3-5/4 0/3-0/5 0-0/4 |
            notes 2/4-0/5 2s4/4 5/4-0/5 5/4-0/3 $.top.P, $ | 2/3-0/5 0h1/2 (0/1.0/2.0/3.2/4)$.top.G$-0/5 ## 0/3 |
          `,
          `
            notes :8 2/1-0/5 0/1-1/2 0/1-0/5 0/2-0/3 | 1/2-0/5 0/2-2/3 0/2-0/5 4-4/4 | 2/3-0/5 0/3-5/4 0/3-0/5 0-0/4 |
            notes 1/2-0/5 0/2-2/3 0/3-0/2 $.top.P, $ 1h3/2 | :q 2/1 :8 (2/1.1/2.0/3.0/4)$.top.C$-0/5 0/1-1/2 0h1/2 |
          `,
          `
            notes :q 0/1 :8 (0/1.0/2.0/3.2/4)$.top.G$-0/5 0/3-0/2 $.top.P, $ 1h3/2 | :q 1/2 :8 (2/1.1/2.0/3.0/4)$.top.C$-0/5 0/2-2/3 0h2/3 |
            notes :q 0/1 :8 (0/1.0/2.0/3.2/4)$.top.G$-0/5 4/4-0/3 $.top.P, $ 2/3-0/2 $.top.P, $ | 
            notes 1/2-0/5 2/3-0/2 $.top.P, $ 1/2-0/5 2/3-0/2 $.top.P, $ | 1/2-0/5 2/3-1/2 :q 3/1 :8 (3/1.1/2.2/3.0/4)$.top.F$-0/5 |
          `,
          `
            notes :q 3/1 :8 (3/1.1/2.2/3.0/4)-0/5 2p0/1 1p0/2 | :q 2/1 :8 (2/1.1/2.0/3.0/4)$.top.C$-0/5 :q 1/2 :8 (2/1.1/2.0/3.0/4)-0/5 |
            notes :q 0/1 :8 (0/1.0/2.0/3.2/4)$.top.G$-0/5 1p0/2 2p0/3 | :q 1/2 :8 (2/1.1/2.2/3.0/4)$.top.Am$-0/5 :q 2/3 :8 (2/1.1/2.2/3.0/4)-0/5 |
            notes 1/2-0/5 0/2-2/3 0/3-0/5 0-0/4 |
          `,
          `
            notes 1/2-0/5 0/2-2/3 0/3-0/5 ## 0/3 =:| :q 0/3 (0/1.0/2.0/3.2/4)$.top.G$ 2/3 0/2 | :w (2/1.1/2.0/3.0/4)$.top.C$ =||
            text .-1,:w,1.,|2.
          `,
        ],
      }}
    />
  </>
);

export default RussianAnthem;

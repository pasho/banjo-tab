import React, { useState } from "react";
import { SheetTemplate, Sheet } from "../components/Sheet";
import VexTabSheet from "../components/VexTabSheet";

//https://www.youtube.com/watch?v=_gCt8MgOzVk
export const MelodyNotes = () => {
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
    <SheetTemplate
      title="Korobeiniki"
      description="melody notes"
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

const main1 = `
E:b2;h 1;
b0;p 1;
Am:m  2;d  2, 1;
b2;d0, 1;
E7:b 0;h 1;
b0;m2;
Am:b 1;m  2;
m  2;;
Dm:p3;h3;
m7;p5,3;
Am/C:b2;h 1;
b2;d0, 1;
E7:b 0;h 1;
b0;m2;
Am:b 1;m  2;
m  2;
`;

const main2 = `
E:b2;h 1;
b0;p 1;
Am:m  2;d  2, 1;
b2;d0, 1;
E7:b 0;h 1;
b0;m2;
Am:b 1;m  2;
m  2;;
Dm:d 6,  7;d0, 6;
m7;p 8, 6;
Am/C:b 5;s  4,  5;
b 5;d0,  5;
E7:b 0;h 1;
b0;m2;
Am:b 1;m  2;
m  2;
`;

const main3 = `
E:b2;h 1;
b0;p 1;
Am:m  2;d  2, 1;
b2;d0, 1;
E7:b 0;h 1;
b0;m2;
Am:b 1;m  2;
m  2;;
Dm:d 6,  7;d0, 6;
m7;d5, 6;
Am/C:b 5;s  4,  5;
b 5;d0,  5;
E7:b 0;h 1;
b0;m2;
Am:b 1;m  2;
m  2;
`;

export const ShortVersion = () => {
  return (
    <SheetTemplate
      title="Korobeiniki"
      description="short"
      tuning="gDGBd"
      barsPerStave={10}
      meter={2}
      notes={main1}
    />
  );
};

export const ShortVersionHigh = () => {
  return (
    <SheetTemplate
      title="Korobeiniki"
      description="travel banjo"
      tuning="cGCEg"
      barsPerStave={10}
      meter={2}
      notes={`
          E:b 0;p   4,  0;
          b  2;d  0,   4;
          Am:m   2;p   2,  0;
          b 0;p  2;
          E7:b   4;p   4,  0;
          b  2;m 0;
          Am:b  0;m   2;
          m   2;;
          Dm:d 1,  2;d  2, 1;
          m2;p 3, 1;
          Am/C:b 0;p   4,  0;
          b 0;p  2;
          E7:b   4;p   4,  0;
          b  2;m 0;
          Am:b  0;m   2;
          m   2;
        `}
    />
  );
};

export const ShortVersion2 = () => {
  return (
    <SheetTemplate
      title="Korobeiniki"
      description="alternative short"
      tuning="gDGBd"
      barsPerStave={10}
      meter={2}
      notes={main2}
    />
  );
};

export const ShortVersion3 = () => {
  return (
    <SheetTemplate
      title="Korobeiniki"
      description="alternative short 2"
      tuning="gDGBd"
      barsPerStave={10}
      meter={2}
      notes={main3}
    />
  );
};

export const FullVersion = () => {
  const tuning = "gDGBd";
  const [variant, setVariant] = useState(0);
  const main = variant === 0 ? main1 : main3;
  return (
    <>
      <h1>Korobeiniki</h1>
      <p>
        Second verse variant:&nbsp;
        <select
          onChange={(e) => setVariant(parseInt(e.target.value))}
          value={variant}
        >
          <option value={0}>long travel</option>
          <option value={1}>up the neck</option>
        </select>
      </p>
      <p>{tuning}</p>
      <Sheet
        tuning={tuning}
        barsPerStave={10}
        meter={2}
        notes={`
        ${main}
        ${main}
        Am:m2;b2122;
        m 1;b2122;
        E7:m0;b0012;
        m 0;b0012;
        Am:m 1;b2122;
        m  2;b2122;
        E:m  1;b2012;
        m 0;b2012;
        Am:m2;b2122;
        m 1;b2122;
        E7:m0;b0012;
        m 0;b0012;
        Am:m 1;m2;
        m7;m7;
        E:m6;;
        d6,    x;;
        ${main}
        ${main}


    `}
      />
    </>
  );
};

const Korobeiniki = () => (
  <>
    {/* <MelodyNotes /> */}
    {/* <ShortVersion /> */}
    {/* <ShortVersion2 /> */}
    {/* <ShortVersion3 /> */}
    {/* <FullVersion /> */}
    <h1>Korobeiniki</h1>
    <p>gDGBd</p>
    <VexTabSheet
      {...{
        time: "2/4",
        staves: [
          `
            notes =|: :8 2/1-0/5 0h1/2 | 0/1-0/5 1p0/2 | :q 2/3 :8 2/3-1/2 | 2/1-0/5 0/1-1/2 | 0/2-0/5 0h1/2 | 0/1-0/5 :q 2/1 | :8 1/2-0/5 :q 2/3 | :h 2v/3 |
            text .0,|,:h,E,|, ,|,Am,|, ,|,E7,|, ,|,Am,|, ,|
          `,
          `
            notes :8 6/2-7/3 0/1-6/2 | :q 7/1 :8 5/1-6/2 | 5/2-0/5 4/3s5/3 | 5/2-0/5 0/1-5/3 | 0/2-0/5 0h1/2 | 0/1-0/5 :q 2/1 | :8 1/2-0/5 :q 2/3 | :h 2v/3 =:|
            text .-1,:h, ,|, ,|, ,|, ,|, ,|, ,|, ,|,Fine,|
            text ++,.0,:h,Dm,|, ,|,Am,|, ,|,E7,|, ,|,Am,|, ,|
          `,
          `
            notes :q 2/1 :8 (2/1.1/2.2/3.2/4)-0/5 | :q 1/2 :8 (2/1.1/2.2/3.2/4)-0/5 |
            notes :q 0/1 :8 (0/1.0/2.1/3.2/4)-0/5 | :q 0/2 :8 (0/1.0/2.1/3.2/4)-0/5 |
            notes :q 1/2 :8 (2/1.1/2.2/3.2/4)-0/5 | :q 2/3 :8 (2/1.1/2.2/3.2/4)-0/5 |
            notes :q 1/3 :8 (2/1.0/2.1/3.2/4)-0/5 | :q 0/2 :8 (2/1.0/2.1/3.2/4)-0/5 |
            text .-1,:h,Bridge
            text ++, .0, :h,Am,|, ,|,E7,|, ,|,Am,|, ,|,E,|, ,|
          `,
          `
            notes :q 2/1 :8 (2/1.1/2.2/3.2/4)-0/5 | :q 1/2 :8 (2/1.1/2.2/3.2/4)-0/5 |
            notes :q 0/1 :8 (0/1.0/2.1/3.2/4)-0/5 | :q 0/2 :8 (0/1.0/2.1/3.2/4)-0/5 |
            notes :q 1/2 2/1 | 7/1 7/1 | :h 6/1 | 6/1 |
            text .-1,:h, ,|, ,|, ,|, ,|, ,|, ,|, ,|,D.C. al Fine,|
            text ++, .0, :h,Am,|, ,|,E7,|, ,|,Am,|, ,|,E,|, ,|

          `,
        ],
      }}
    />
    {/* <h1>Korobeiniki (travel banjo)</h1>
    <p>cGCEg</p>
    <VexTabSheet
      {...{
        time: "2/4",
        staves: [
          `
            notes =|: :8 2/1-0/5 0h1/2 | 0/1-0/5 1p0/2 | :q 2/3 :8 2/3-1/2 | 2/1-0/5 0/1-1/2 | 0/2-0/5 0h1/2 | 0/1-0/5 :q 2/1 | :8 1/2-0/5 :q 2/3 | :h 2v/3 |
            text .0,|,:h,E,|, ,|,Am,|, ,|,E7,|, ,|,Am,|, ,|
          `,
          `
            notes :8 6/2-7/3 0/1-6/2 | :q 7/1 :8 5/1-6/2 | 5/2-0/5 4/3s5/3 | 5/2-0/5 0/1-5/3 | 0/2-0/5 0h1/2 | 0/1-0/5 :q 2/1 | :8 1/2-0/5 :q 2/3 | :h 2v/3 =:|
            text .-1,:h, ,|, ,|, ,|, ,|, ,|, ,|, ,|,Fine,|
            text ++,.0,:h,Dm,|, ,|,Am,|, ,|,E7,|, ,|,Am,|, ,|
          `,
          `
            notes :q 2/1 :8 (2/1.1/2.2/3.2/4)-0/5 | :q 1/2 :8 (2/1.1/2.2/3.2/4)-0/5 |
            notes :q 0/1 :8 (0/1.0/2.1/3.2/4)-0/5 | :q 0/2 :8 (0/1.0/2.1/3.2/4)-0/5 |
            notes :q 1/2 :8 (2/1.1/2.2/3.2/4)-0/5 | :q 2/3 :8 (2/1.1/2.2/3.2/4)-0/5 |
            notes :q 1/3 :8 (2/1.0/2.1/3.2/4)-0/5 | :q 0/2 :8 (2/1.0/2.1/3.2/4)-0/5 |
            text .-1,:h,Bridge
            text ++, .0, :h,Am,|, ,|,E7,|, ,|,Am,|, ,|,E,|, ,|
          `,
          `
            notes :q 2/1 :8 (2/1.1/2.2/3.2/4)-0/5 | :q 1/2 :8 (2/1.1/2.2/3.2/4)-0/5 |
            notes :q 0/1 :8 (0/1.0/2.1/3.2/4)-0/5 | :q 0/2 :8 (0/1.0/2.1/3.2/4)-0/5 |
            notes :q 1/2 2/1 | 7/1 7/1 | :h 6/1 | 6/1 |
            text .-1,:h, ,|, ,|, ,|, ,|, ,|, ,|, ,|,D.C. al Fine,|
            text ++, .0, :h,Am,|, ,|,E7,|, ,|,Am,|, ,|,E,|, ,|

          `,
        ],
      }}
    /> */}
    <ShortVersionHigh />
  </>
);

export default Korobeiniki;

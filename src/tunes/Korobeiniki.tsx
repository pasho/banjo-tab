import React, { useState } from "react";
import { SheetTemplate, Sheet } from "../components/Sheet";

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
    <FullVersion />
  </>
);

export default Korobeiniki;

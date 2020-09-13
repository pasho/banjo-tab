import React from "react";
import { SheetTemplate } from "../components/Sheet";
import VexTabSheet from "../components/VexTabSheet";
import { useSettings } from "../components/SettingsContext";

export const MelodyNotes = () => {
  return (
    <SheetTemplate
      title="Lambada"
      description="melody notes"
      tuning="gDGBd"
      barsPerStave={5}
      meter={4}
      notes={`
      ;;;m   2;
      m2;d    x,0;p 1;m  2;
      F:d  2, 1;d 0,  2;G:h  2;p   2;
      C:m   2;;;m   2;
      m2;d    x,0;p 1;m  2;
      F:d  2, 1;d 0,  2;G:h  2;p   2;
      C:m   2;;;;
      Dm:m0;d0, 1;m   3;d  2, 1;
      m2;d0, 1;m   3;d  2, 1;
      G:m 0;p  2;d  0,  0;p  2;
      Am:m  2;;;;
      Dm:m0;d0, 1;m   3;d  2, 1;
      m2;d0, 1;m   3;d  2, 1;
      G:m 0;p  2;d  0,  0;p  2;
      Am:p 1;m  2;;
    `}
    />
  );
};

export const Clawhammer = () => {
  return (
    <SheetTemplate
      title="Lambada"
      description="Clawhammer Arrangement"
      tuning="gDGBd"
      barsPerStave={5}
      meter={4}
      notes={`
      Am:;;;m   2;
      b2;p2;p 1;m  2;
      F:d  2, 1;d 0,  2;G:h  2;p   2;
      C:m   2;b2102;h   2;b2102;
      b2;p2;p 1;m  2;
      F:d  2, 1;d 0,  2;G:h  2;p   2;
      C:m   2;b2102;h   2;b2102;
      Dm:b0;d0, 1;m   3;d  2, 1;
      b2;d0, 1;m   3;d  2, 1;
      G:b 0;p  2;d  0,  0;p  2;
      Am:m  2;b2122;h  2;b2122;
      Dm:b0;d0, 1;m   3;d  2, 1;
      b2;d0, 1;m   3;d  2, 1;
      G:b 0;p  2;d  0,  0;p  2;
      Am:p 1;m  2;m2122;
    `}
    />
  );
};

const Lambada = () => {
  const { showNotes } = useSettings();
  return (
    <>
      <h1>Lambada</h1>
      <p>gDGBd</p>
      <VexTabSheet
        {...{
          showNotes,
          staves: [
            `
            notes :q 2/4
            notes =|: :8 2/1-0/5 2p0/1 1p0/2 :q 2/3 |
            notes :8 2/3-1/2 0/1-2/3 0h2/3 2p0/4 |
            notes :q 2/4 :8 (2/1.1/2.0/3.2/4)-0/5 0h2/4 (2/1.1/2.0/3.2/4)-0/5 =:|
            text .-1,:q,Part A,|,:w, ,|, ,|, ,|
            text ++,.0,:q,Am,|,:w, ,|,:h,F,G,|,:w,C,|
          `,
            `
            notes =|: :8 0/1-0/5 0/1-1/2 :q 3/4 :8 2/3-1/2 |
            notes :8 2/1-0/5 0/1-1/2 :q 3/4 :8 2/3-1/2 |
            notes :8 0/1-0/5 2p0/3 0-0/3 2p0/3 |
            notes :q 2/3 :8 (2/1.1/2.2/3.2/4)-0/5 0h2/3 (2/1.1/2.2/3.2/4)-0/5 |
            notes :8 1p0/2 :h 2v/3 =:|
            text .-1,|Part B,:w, ,|, ,|, ,|1., ,|2.,:hd, ,|
            text ++,.0,|,:w,Dm,|, ,|,G,|,Am,|,:hd,Am,|
          `,
          ],
        }}
      />
    </>
  );
};

export default Lambada;

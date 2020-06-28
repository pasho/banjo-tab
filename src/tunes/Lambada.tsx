import React from "react";
import { SheetTemplate } from "../components/Sheet";

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
      C:m   2;b2102;m   2;b2102;
      b2;p2;p 1;m  2;
      F:d  2, 1;d 0,  2;G:h  2;p   2;
      C:m   2;b2102;m   2;b2102;
      Dm:b0;d0, 1;m   3;d  2, 1;
      b2;d0, 1;m   3;d  2, 1;
      G:b 0;p  2;d  0,  0;p  2;
      Am:m  2;b2122;m 1;b2122;
      Dm:b0;d0, 1;m   3;d  2, 1;
      b2;d0, 1;m   3;d  2, 1;
      G:b 0;p  2;d  0,  0;p  2;
      Am:p 1;m  2;;
    `}
    />
  );
};

const Lambada = () => (
  <>
    <MelodyNotes />
    <Clawhammer />
    <img src={`${process.env.PUBLIC_URL}/lambada.png`} />
  </>
);

export default Lambada;

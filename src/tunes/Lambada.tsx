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

const Lambada = () => (
  <>
    <MelodyNotes />
    <img src={`${process.env.PUBLIC_URL}/lambada.png`} />
  </>
);

export default Lambada;

import React from "react";
import { SheetTemplate } from "../components/Sheet";

// https://musescore.com/user/28594606/scores/5218741
export const MelodyNotes = () => {
  const intro = `
    ;;;h   2,   4;
  `;
  const verse1 = `
    Em:m  0;m  0;h  2;d  0,   4;
    C:m   2;;m   2;;
    D:d   4,   4;h  2;;h  2;
    G:m 0;m 0;D:d  2,   0;d    x,   0;
  `;
  const verse2 = `
    G:m 0;h 3;p 2;d 0,  0;
    D:d  2,  2;d 0,  2;;;
    Em:m 0;d x,  2;C:m  0;d  0,   2;
    D:d  2,  2;d 0,  2;;h  2;
    G:m 0;h 3;p 2;d 0,  0;
    D:d  2,   4;p   2;;h   2,   4;
    Em:d  0,  0;m   4;C:h   2,   4;m  0;
    D:m  2;
  `;

  return (
    <SheetTemplate
      title="Moonlight Shadow"
      description="melody notes"
      tuning="gDGBd"
      barsPerStave={5}
      meter={4}
      notes={`
        ${intro}
        ${verse1}
        ${verse1} 
        ${verse2}       
      `}
    />
  );
};

const MoonlightShadow = () => (
  <>
    <MelodyNotes />
  </>
);

export default MoonlightShadow;

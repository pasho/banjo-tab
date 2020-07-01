import React from "react";
import { SheetTemplate } from "../components/Sheet";

// https://musescore.com/user/28594606/scores/5218741
export const MelodyNotes = () => {
  return (
    <SheetTemplate
      title="Moonlight Shadow"
      description="melody notes"
      tuning="gDGBd"
      barsPerStave={5}
      meter={4}
      notes={`
        ;;;h   2,   4;
        
        Em:b  0;b  0;h  2;d  0,   4;
        C:m   2;b2102;m   2;b2102;
        D:d   4,   4;h  2;d  x,    0;h  2;
        G:b 0;b 0;D:d  2,   0;d    x,   0;
        
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

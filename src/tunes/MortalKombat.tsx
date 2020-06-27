import React from "react";
import { SheetTemplate } from "../components/Sheet";

// https://www.slideshare.net/WrittenForGuitar/mortal-kombat-solo
export const MelodyNotes = () => {
  return (
    <SheetTemplate
      title="Mortal Kombat"
      description="melody notes"
      tuning="gDGBd"
      barsPerStave={4}
      meter={4}
      notes={`
        d  2,  2;d 1,  2;d0,  2;p2;
        d  5,  5;d 5,  5;d5,  5;d 5,  5;
        d  0,  0;d 0,  0;d 1,  0;d0, 1;
        d   3,   3;d  2,   3;d 1,   3;p 1;

        d  2,  2;d 1,  2;d0,  2;p2;
        d  5,  5;d 5,  5;d5,  5;d 5,  5;
        d  0,  0;d 0,  0;d 1,  0;d 0,  0;
        d   3,   3;d  2,   3;d 1,   3;p 1;

        d  2,  2;d 1,  2;d0,  2;p2;
        d  5,  5;d 5,  5;d5,  5;d 5,  5;
        d  0,  0;d 0,  0;d 1,  0;d 0,  0;
        d   3,   3;d  2,   3;d 1,   3;p 1
    `}
    />
  );
};

const MortalKombat = () => (
  <>
    <MelodyNotes />
  </>
);

export default MortalKombat;

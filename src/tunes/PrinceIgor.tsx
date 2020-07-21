import React from "react";
import { SheetTemplate } from "../components/Sheet";

export const MelodyNotes = () => {
  return (
    <SheetTemplate
      title="Price Igor"
      description="melody notes"
      tuning="gDGBd"
      barsPerStave={8}
      meter={2}
      notes={`
       m  2;m  2;
       m2;;
       ;h2
       m 1;d 0,  2;
       h 1;m0;
       ;;
       ;m2;
       m 0;p  2;
       m   2;m   2;
       m  2;;
       ;m 0;
       m  2;d  0,   4;
       d  0,   4;m   2;
       ;;
       ;m   4;
       m  0;m 0;
       m  2;m  2;
       m2;;
       ;h2;
       m 1;d 0,  2;
       h 1;m0;
       ;;
       ;m2;
       m 0;p  2;
       m   2;m   2;
       m  2;;
       ;m 0;
       m  2;d  0,   4;
       d  0,   4;m   2;
       ;;
       ;;
       ;;


      
    `}
    />
  );
};

const PriceIgor = () => (
  <>
    <MelodyNotes />
    <img src={`${process.env.PUBLIC_URL}/uletai-syao.jpg`} alt="Notes" />
  </>
);

export default PriceIgor;

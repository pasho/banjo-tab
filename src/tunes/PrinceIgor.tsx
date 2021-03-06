import React from "react";
import { SheetTemplate } from "../components/Sheet";
import VexTabSheet from "../components/VexTabSheet";

export const MelodyNotes = () => {
  return (
    <SheetTemplate
      title="Prince Igor"
      description="melody notes"
      tuning="gDGBd"
      barsPerStave={16}
      meter={2}
      notes={`
       m  2;m  2;
       m2;mx;
       mx;h2
       m 1;d 0,  2;
       h 1;m0;
       mx;mx;
       ;m2;
       m 0;p  2;
       m   2;m   2;
       m  2;m  x;
       m  x;m 0;
       m  2;d  0,   4;
       d  0,   4;m   2;
       m   x;m   x;
       ;m   4;
       m  0;m 0;
       m  2;m  2;
       m2;mx;
       mx;h2;
       m 1;d 0,  2;
       h 1;m0;
       mx;mx;
       ;m2;
       m 0;p  2;
       m   2;m   2;
       m  2;m  x;
       m  x;m 0;
       m  2;d  0,   4;
       d  0,   4;m   2;
       m   x;m   x;
       m   x;;
       ;;

       m  2;m  2;
       m 1;m x;
       m x;m0;
       m 1;d 0,  2;
       h 1;m0;
       mx;mx;
       mx;m1;
       m0;m 0;
       m1;m1;
       m5;mx;
       mx;m7;
       m5;p3,1;
       d0, 1;m 0;
       m x;m x;
       m x;m 1;
       m0;p 1;
       m  2;m  2;
       m 1;m x;
       m x;m0;
       m 1;d 0,  2;
       h  2;m 0;
       m x;m x;
       m x;m 1;
       m 0;m  0;
       m  2;m  2;
       m2;mx;
       mx;h2;
       m 1;d 0,  2;
       m 0;m x;
       m x;m x;
       m x;m x;
       ;;  

       m  2;m  2;
       m2;mx;
       mx;h2;
       m 1;d 0,  2;
       h 1;m0;
       mx;mx;
       ;m2;
       m 0;p  2;
       m   2;m   2;
       m  2;m  x;
       m  x;m 0;
       m  2;d  0,   4;
       d  0,   4;m   2;
       m   x;m   x;
       ;m   4;
       m  0;m 0;
       m  2;m  2;
       m2;mx;
       mx;h2;
       m 1;d 0,  2;
       h 1;m0;
       mx;mx;
       ;h2;
       m0;p 1;
       m   2;m   2;
       m  2;m  x;
       ;d  2, 0;
       m  2;d  0,   4;
       d  0,   4;m   2;
       m   x;m   x;
       ;;
       m  2;m  2;
       m2;mx;
       mx;h2;
       m 1;d 0,  2;
       d 0,  2;m  0;
       m  x;;
       m  2;m  2;
       m2;mx;
       mx;h2;
       m 1;d 0,  2;
       m 0;m x;
       m x;;       


      
    `}
    />
  );
};

export const Clawhammer = () => {
  return (
    <SheetTemplate
      title="Prince Igor"
      description="clawhammer arrangement"
      tuning="gDGBd"
      barsPerStave={16}
      meter={2}
      notes={`
        Am:m  2;m  2;
        m2;b2122;
        m2;h2
        m 1;d 0,  2;
        h 1;m0;
        G:b0000;m0;
        b0000;m2;
        m 0;p  2;
        Am:m   2;m   2;
        m  2;b2122;
        m  2;m 0;
        m  2;d  0,   4;
        d  0,   4;m   2;
        Em:b2002;m   2;
        b2002;m   4;
        m  0;m 0;
        Am:m  2;m  2;
        m2;b2122;
        m2;h2;
        m 1;d 0,  2;
        h 1;m0;
        G:b0000;m0;
        b0000;m2;
        m 0;p  2;
        Am:m   2;m   2;
        m  2;b2122;
        m  2;m 0;
        m  2;d  0,   4;
        d  0,   4;m   2;
        Em:b2002;m   2;
        b2002;m   4;
        m  0;m 0;

        Am:m  2;m  2;
        m 1;b2122;
        m 1;m0;
        m 1;d 0,  2;
        h 1;m0;
        G:b0000;m0;
        b0000;m 4;
        m0;m 0;
        m 4;m 4;
        m5;b5555;
        m7;b7777;
        m5;p 6, 4;
        d0,  5;m 0;
        b0000;m 0;
        b0000;m 1;
        m0;p 1;
        Am:m  2;m  2;
        m 1;b2122;
        m 1;m0;
        m 1;d 0,  2;
        h  2;m 0;
        G:b0000;m 0;
        b0000;m 1;
        m 0;m  0;
        Am:m  2;m  2;
        m2;b2122;
        m2;h2;
        m 1;d 0,  2;
        G:m 0;b0000;
        m  0;b0000;
        m 0;b0000;
        m  0;b0000;
          
        Am:m  2;m  2;
        m2;b2122;
        m2;h2;
        m 1;d 0,  2;
        h 1;m0;
        G:b0000;m0;
        b0000;m2;
        m 0;p  2;
        Am:m   2;m   2;
        m  2;b2122;
        m  2;m 0;
        m  2;d  0,   4;
        d  0,   4;m   2;
        Em:b2002;m   2;
        b2002;m   4;
        m  0;m 0;
        Am:m  2;m  2;
        m2;b2122;
        m2;h2;
        m 1;d 0,  2;
        h 1;m0;
        G:b0000;m0;
        b0000;h2;
        m0;p 1;
        Am:m   2;m   2;
        m  2;b2122;
        m  2;d  2, 0;
        m  2;d  0,   4;
        d  0,   4;m   2;
        Em:b2002;m   2;
        b2002;m   2;
        Am:m  2;m  2;
        m2;b2122;
        m2;h2;
        m 1;d 0,  2;
        d 0,  2;m  0;
        G:b0000;m  0;
        Am:m  2;m  2;
        m2;b2122;
        m2;h2;
        m 1;d 0,  2;
        G:m 0;b0000;
        m  0;b0000;
       `}
    />
  );
};

const PriceIgor = () => (
  <>
    <img src={`${process.env.PUBLIC_URL}/uletai-syao.jpg`} alt="Notes" />
    <MelodyNotes />
    <Clawhammer />
    <h1>Prince Igor</h1>
    <p>gDBGd</p>
    <VexTabSheet
      {...{
        time: "4/4",
        staves: [
          `
            notes =|: :q 2/3 $.top.Am$ 2/3 2/1 :8 (2/1.1/2.2/3.2/4)-0/5 |
            notes :q 2/1 :8 0h2/1 :q 1/2 :8 0/2-2/3 |
            notes 0h1/2 
        `,
        ],
      }}
    />
  </>
);

export default PriceIgor;

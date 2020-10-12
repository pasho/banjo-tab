import React from "react";
import VexTabSheet from "../components/VexTabSheet";

// e-4, f-5, f#-6, g-7, g#-8, g-9
export default function ThoseWereTheDays() {
  return (
    <>
      <h1>Those were the days (Dorogoy Dlinnoyu) V1</h1>
      <p>gDGBd</p>
      <VexTabSheet
        {...{
          time: "4/4",
          staves: [
            // `
            //   notes :8 0/2-0/2 $.top.II, $ 2h3/2 2p0/1 2p0/2 |
            //   notes :8 0/1-0/2 $.top.Bm, $ t:hd:0/2 |
            //   notes :8 4/4-4/4 0h2/3 0/2-2/3 0/3-4/4 |
            //   notes :w 2/4 $.top.Em$ |
            // `,
            `
              notes :8 0/2-0/2 $.top.II, $ 2h3/2 2p0/1 2p0/2 |
              notes :8 0/1-0/2 $.top.Bm, $ (0/1.0/2.4/3.4/4)-0/5 :q 0/2 :8 (0/1.0/2.4/3.4/4)-0/5|
              notes :8 4/4-4/4 0h2/3 0/2-2/3 0/3-4/4 | 
              notes :q 2/4 $.top.Em$ :8 (2/1.0/2.0/3.2/4)-0/5 :q 2/4 :8 (2/1.0/2.0/3.2/4)-0/5 |
            `,
            // `
            //   notes :8 0/2-0/2 2h3/2 2p0/1 2p0/2 |
            //   notes :8 0/1-0/2 $.top.Bm, $ t:hd:0/2 |
            //   notes :8 2/2-2/2 $.top.I, $  2h3/2 2/2-1/3 3s4/3 |
            //   notes :w 2/2 $.top.F#7/F#m7$ |
            // `,
            `
              notes :8 0/2-0/2 2h3/2 2p0/1 2p0/2 |
              notes :8 0/1-0/2 $.top.Bm, $ (0/1.0/2.4/3.4/4)-0/5 :q 0/2 :8 (0/1.0/2.4/3.4/4)-0/5|
              notes :8 2/2-2/2 $.top.I, $  2h3/2 2/2-1/3 3s4/3 | 
              notes :q 2/2 $.top.F#7$ :8 (4/1.2/2.3/3.4/4)-0/5 :q 2/2 :8 (4/1.2/2.3/3.4/4)-0/5 |
            `,
            `
              notes :q ## 0/1 $.top.II$ 0/1 2/2 |
              notes :q 2/2 :8 0/2-0/2 ## 0/2 0/2-2/3 |
              notes :q 2/3 :8 0/3-0/3 ## 2/4 4s5/4 |
              notes :qd 2/3 :8 0/2 :8d 2p:16:0/2 :8 2p0/3 |
            `,
            `
              notes :h 4/4 :8 ## 0/4 2h4/4 |
              notes :q 2/3 :8 0/3-0/3 ## 0/3 2h4/3 |
              notes :q 2/1 :8 0/1-0/1 ## 0/2 2h3/2 |
              notes :qd 4/1 :8 2/1 : 8d 0/1-:16:2/2 :8 0/2-3/3 |
              notes :w 0/2 =|=
            `,
          ],
        }}
      />
      <h1>Those were the days (Dorogoy Dlinnoyu) V2</h1>
      <p>gDGBd</p>
      <VexTabSheet
        {...{
          time: "4/4",
          staves: [
            `
              notes :8 0/2-0/2 2/2-0/1 2p0/1 2p0/2 |
              notes :8 0/1-0/2 t:hd:0/2 |
              notes :8 4/4-4/4 0h2/3 0/2-2/3 0/3-4/4 | 
              notes :w 2/4 |
            `,
            `
              notes :8 0/2-0/2 2/2-0/1 2p0/1 2p0/2 |
              notes :8 0/1-0/2 t:hd:0/2 |
              notes :8 2/2-2/2 2/2-0/1 2/2-1/3 3/3-0/2 | 
              notes :w 2/2 |
            `,
            `
              notes :q ## 0/1 0/1 2/2 |
              notes :q 2/2 :8 0/2-0/2 ## 0/2 0/2-2/3 |
              notes :q 2/3 :8 0/3-0/3 ## 2/4 4/4-0/3 |
              notes :qd 2/3 :8 0/2 :8d 2p:16:0/2 :8 2p0/3 |
            `,
            `
              notes :h 4/4 :8 ## 0/4 2h4/4 |
              notes :q 2/3 :8 0/3-0/3 ## 0/3 2/3-0/2 |
              notes :q 2/1 :8 0/1-0/1 ## 0/2 2/2-0/1 |
              notes :qd 4/1 :8 2/1 : 8d 0/1-:16:2/2 :8 0/2-3/3 |
              notes :w 0/2 =|=
            `,
          ],
        }}
      />
    </>
  );
}

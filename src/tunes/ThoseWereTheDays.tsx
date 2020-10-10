import React from "react";
import VexTabSheet from "../components/VexTabSheet";

export default function ThoseWereTheDays() {
  return (
    <>
      <h1>Those were the days (Dorogoy Dlinnoyu)</h1>
      <p>gCGBd</p>
      <VexTabSheet
        {...{
          tuning: "D/5,B/4,G/4,C/4,G/5",
          time: "4/4",
          staves: [
            `
              notes :8 2/3-2/3 $.top.Am, $ 0/2-1/2 0/1-1/2 $.top.G#dim, $ 0/2-2/3 |
              notes :8 1/2-2/3 $.top.Am7, $ t:hd:2/3 |
              notes :8 4/4-4/4 $.top.Gm6, $ 5/4-0/3 2p0/3 $.top.A7, $ 5p4/4 | 
              notes :w 2/4 $.top.Dm$ |
            `,
            `
              notes :8 2/3-2/3 $.top.Am, $ 0/2-1/2 0/1-1/2 $.top.G#dim, $ 0/2-2/3 |
              notes :8 1/2-2/3 $.top.Am7, $ t:hd:2/3 |
              notes :8 0/2-0/2 $.top.B7, $ 0/2-1/2 0/2-6/4 1h2/3 | 
              notes :w 0/2 $.top.E7$ |
            `,
            `
              notes :q ## 1/2 $.top.Am$ 1/2 $.top.Adim$ 0/2 $.top.E7$ |
              notes :q 0/2 $.top.Am$ :8 2/3-2/3 ## 2/3 $.top.A7$ 2p0/3 |
              notes :q 0/3 $.top.Dm$ :8 5/4-5/4 ## 2/4 4h5/4 |
              notes :qd 0/3 $.top.G$ :8 2/3 :8d 4p:16:2/3 :8 0/3-5/4 |
            `,
            `
              notes :h 4/4 $.top.C$ :8 ## 0/4 $.top.Am$ 2h4/4 |
              notes :q 0/3 $.top.Dm$ :8 5/4-5/4 ## 5/4 $.top.Dm6$ 0h2/3 |
              notes :q 0/1 $.top.Am$ :8 1/2-1/2 ## 2/3 0/2-1/2 |
              notes :qd 2/1 $.top.Dm$ :8 0/1 : 8d 1/2-:16:0/2 $.top.E7, $ :8 2p1/3 |
              notes :w 2/3 $.top.Am$ =|=
            `,
          ],
        }}
      />
    </>
  );
}

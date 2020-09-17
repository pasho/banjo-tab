import React from "react";
import VexTabSheet from "../components/VexTabSheet";

export default function Sokolov() {
  return (
    <>
      <h1>Sokolov's Polka</h1>
      <p>gDGBd</p>
      <VexTabSheet
        {...{
          time: "2/4",
          staves: [
            `
              notes :16 4/1-0/5-4h5/2 0h5/2-4/1-0/5 |
              notes :8d 5p:16:4/1  :q 4/1 |
              notes :16 7/2-7/1-8/3-7/2 9/4-8/3-7/2-7/1 |
              notes :8d 10p:16:9/1  :q 9/1 |
            `,
            `
              notes :16 14/1-12/2-14/3-0/5 5/2-4/1-4h5/2 |
              notes :8d 5p:16:4/1  :q 4/1 |
              notes :16 3/3-2/2-2/1-0/5 :8 4p2/1 |
              notes 2/1-4/2 :q 9/1 =||
            `,
            // `
            //   notes :16 14/1-12/2-14/3-0/5 7/2-9/3-8h9/3 |
            //   notes :8d 5p:16:4/1  :q 4/1 |
            //   notes :16 3/3-2/2-2/1-0/5 :8 4p2/1 |
            //   notes 2/1-4/2 :q 9/1 =||
            // `,
            `
              notes :16 17p16/1-17/2-16/3 5/2-4/1-4h5/2 |
              notes :8d 5p:16:4/1  :q 4/1 |
              notes :16 4/1-4/2-0/2-2/3 0h4/2-4/1-0/5 |
              notes :8d 4p:16:2/1 :q 0/5 |
            `,
            `
              notes :16 9/1-0/5-7/2-0/5 7/2-9/3-8h9/3 |
              notes :8d 5p:16:4/1  :q 4/1 |
              notes :8 (2/1.2/2)-0/5 (4/1.2/2)p2/1 |
              notes 5p4/2 :q (9/1.7/2.7/3.9/4) =||
            `,
            // ?? bar 2
            `
              notes :8 12/2-:16:0/5-12/2 11/3-12/2-9/2-12/2|

            `,
          ],
        }}
      />
    </>
  );
}

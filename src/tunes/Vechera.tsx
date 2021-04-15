import React from "react";
import VexTabSheet from "../components/VexTabSheet";

export default function Vechera() {
  return (
    <>
      <h1>Vechera</h1>
      <p>aDGBd</p>
      <VexTabSheet
        {...{
          time: "2/4",
          tuning: "D/5,B/4,G/4,D/4,A/5",
          staves: [
            `
              notes :8 (2/3.2/4)-1/2 $.top.Am, $ (2/1.0/5)-1/2 |
              notes :q (0/1.0/4) :8 (1/2.0/5)p0/2 |
              notes :q (2/1.2/4) (0/1.0/5) |
              notes :qd (2/1.1/2.2/3.2/4) $.top.Am$ :8 0/5 |
              notes :8 (5/3.5/4)-5/2 $.top.C, $ (5/1.5/4)-5/1 |
              notes :q (7/1.0/5) :8 (5/1.5/4)-6/2 |
              notes :h (5/1.5/2.5/3.5/4) =|:
              notes :q (7/2.7/4) 9/2 |
            `,
            `
              notes :8 (9/1.0/5)p7/1 :q (9/3.7/4) |
              notes t:8:9/3 :q 9/4 :8 7/4 |
              notes :8 9-7/3 :q (7/1.6/2.7/3) $.top.Dm$ :8 |
              notes (t7/1.6/2.7/3)-0/5 :8 (8/2.0/4)-6/2 |
              notes :q (5/2.5/3) :8 (0/1.0/5)-5/3 |
              notes :q 5/2 0/1 |
              notes :qd (7/1.5/2.5/3.7/4) $.top.Am$ :8 0/5 =:|
            `,
          ],
        }}
      />
      <h1>Vechera #2</h1>
      <p>aDGBd</p>
      <VexTabSheet
        {...{
          time: "2/4",
          tuning: "D/5,B/4,G/4,D/4,A/5",
          staves: [
            `
              notes :8 (2/3.2/4)-1/2 $.top.Am, $ (2/1.0/5)-1/2 |
              notes :q (0/1.0/4) :8 (1/2.0/5)p0/2 |
              notes :q (2/1.2/4) (0/1.0/5) |
              notes :qd (2/1.1/2.2/3.2/4) $.top.Am$ :8 0/5 |
              notes :8 (5/3.5/4)-5/2 $.top.C, $ (5/1.5/4)-5/1 |
              notes :q (7/1.0/5) :8 (5/1.5/4)-6/2 |
              notes :h (5/1.5/2.5/3.5/4) =|:
              notes :q (7/2.7/4) 9/2 |
            `,
            `
              notes :8 (9/1.0/5)p7/1 :q (9/3.7/4) |
              notes t:8:9/3 :q 9/4 :8 7/4 |
              notes :8 9-7/3 :q (0/1.10/2.10/3.0/4) $.top.Dm$ :8 |
              notes (t0/1.10/2.10/3.0/4)-0/5 :8 (12/3.0/4)-10/3 |
              notes :q (9/3.10/4) :8 (0/1.0/5)-10/4 |
              notes :q 9/3 0/1 |
              notes :qd (10/2.9/3.10/4) $.top.Am$ :8 0/5 =:|
            `,
          ],
        }}
      />
    </>
  );
}

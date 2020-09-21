import React from "react";
import { SheetTemplate } from "../components/Sheet";
import VexTabSheet from "../components/VexTabSheet";

// https://muzon-muzon.ru/Noti/narodnie/oj-to-ne-vecher.png
export default function OiToNeVecher() {
  return (
    <>
      <h1>Oi To Ne Vecher</h1>
      <p>gCGCd</p>
      <VexTabSheet
        {...{
          key: "Dm",
          tuning: "D/5,C/5,G/4,C/4,G/5",
          staves: [
            `
              notes :q 2/3 $.top.Dm$ :8 3p2/3 | 2h5/4 4p2/4 |
              notes 2p1/4 $.top.A7, $ :q 4/4 | 4/4 ## |
            `,
            `
              notes :q 2/3 $.top.Dm$ :8 3p2/3 | 2/4 2/3 2p0/3 $.top.C6, $| 
              notes :qd 2/3 $.top.F$ :16 3p2/3 | :h 0/3 $.top.C$ |
            `,
            `
              notes =|: :q 5/4 $.top.F$ 2/3 | :8 0/2 2/3 0/3 5/4 |
              notes :h 0/2 $.top.C$ | 1/2 $.top.A7$ |
            `,
            `
              notes :q 0/1 $.top.Dm$ :8 2/3 2/3 | 0/2 $.top.Gsus$ 3/3 2p0/3 $.top.A7, $ |
              notes :h 2/4 $.top.Dm$ | 0/4 $.top.C$ =:|
              notes :h 0/1 $.top.Dm$ | 0/1 $.top.Dm$ =|= 
              text .-1,:h, ,|, ,|1., ,|, ,|2.
            `,
          ],
        }}
      />
      <h1>Oi To Ne Vecher</h1>
      <p>gDGBd</p>
      <VexTabSheet
        {...{
          key: "Em",
          staves: [
            `
              notes :q 0/2 $.top.Dm$ :8 1p0/2 | 2/4 0/3 4p2/4 |
              notes 2p1/4 $.top.A7, $ :q 4/4 | 4/4 ## |
            `,
            `
              notes :q 0/2 $.top.Dm$ :8 1p0/2 | 2/4 0/2 0/2 2/3 $.top.C6, $| 
              notes :qd 0/2 $.top.F$ :16 1p0/2 | :h 2/3 $.top.C$ |
            `,
            `
              notes =|: :q 0/3 $.top.F$ 0/2 | :8 0/1 0/2 2p0/3 |
              notes :h 0/1 $.top.C$ | 1/1 $.top.A7$ |
            `,
            `
              notes :q 2/1 $.top.Dm$ :8 0/2 0/2 | 0/1 $.top.Gsus$ 1/2 0/2 2/3 $.top.A7, $ |
              notes :h 2/4 $.top.Dm$ | 0/4 $.top.C$ =:|
              notes :h 2/1 $.top.Dm$ | 2/1 $.top.Dm$ =|= 
              text .-1,:h, ,|, ,|1., ,|, ,|2.
            `,
          ],
        }}
      />
    </>
  );
}

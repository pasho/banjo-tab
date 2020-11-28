import React from "react";
import VexTabSheet from "../components/VexTabSheet";

// e-4, f-5, f#-6, g-7, g#-8, g-9
// https://muzon-muzon.ru/index/na_sopkakh_manchzhurii/0-834
export default function OnTheHillsOfManchuria() {
  return (
    <>
      <h1>On The Hills Of Manchuria</h1>
      <h2>Melody notes</h2>
      <p>gDGBd</p>
      <VexTabSheet
        {...{
          time: "3/4",
          tuning: "D/5,B/4,G/4,D/4,G/5",
          staves: [
            `
              notes :hd 2/3 $.top.Dm$ |
              notes t:q:2/3 3/4 0/3 |
              notes :hd 2/3 $.top.A7$ |
              notes t:q:2/3 ## ## |
              notes 0/3 2/3 2/2 |
              notes :h 3/1 :q 2/1 |
              notes :hd 0/1 $.top.Dm$ |
              notes t:q:0/1 ## ## |
            `,
            `
              notes :q 2/3 $.top.Dm$ 0/1 3/1 |
              notes :h 2/2 :q 0/1 |
              notes 2/1 $.top.Gm6$ 0/1 3/3 | 
              notes :h 2/1 :q 0/1 |
              notes :q 2/3 $.top.Dm$ 0/1 2/1 |
              notes :h 3/1 $.top.A7$ :q 2/1 |
              notes :hd 0/1 $.top.Dm$ |
              notes t:q:0/1 ## ## |
            `,
          ],
        }}
      />
    </>
  );
}

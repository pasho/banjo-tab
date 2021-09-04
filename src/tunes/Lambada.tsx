import React from "react";
import VexTabSheet from "../components/VexTabSheet";

export const Lambada = () => (
  <VexTabSheet
    {...{
      staves: [
        `
        notes :q 2/4
        notes =|: :8 2/1-0/5 2p0/1 1p0/2 :q 2/3 |
        notes :8 2/3-1/2 0/1-2/3 0h2/3 2p0/4 |
        notes :q 2/4 :8 (2/1.1/2.0/3.2/4)-0/5 0h2/4 (2/1.1/2.0/3.2/4)-0/5 =:|
        text .-1,:q,Part A,|,:w, ,|, ,|, ,|
        text ++,.0,:q,Am,|,:w, ,|,:h,F,G,|,:w,C,|
      `,
        `
        notes =|: :8 0/1-0/5 0/1-1/2 :q 3/4 :8 2/3-1/2 |
        notes :8 2/1-0/5 0/1-1/2 :q 3/4 :8 2/3-1/2 |
        notes :8 0/1-0/5 2p0/3 0-0/3 2p0/3 |
        notes :q 2/3 :8 (2/1.1/2.2/3.2/4)-0/5 0h2/3 (2/1.1/2.2/3.2/4)-0/5 =:|
        notes :8 1p0/2 :h 2v/3 =|=
        text .-1,|Part B,:w, ,|, ,|, ,|1., ,|2.,:hd, ,|
        text ++,.0,|,:w,Dm,|, ,|,G,|,Am,|,:hd,Am,|
      `,
      ],
    }}
  />
);

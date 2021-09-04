import React from "react";
import VexTabSheet from "../components/VexTabSheet";

export const PrinceIgor = () => (
  <>
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

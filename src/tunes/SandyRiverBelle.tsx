import React from "react";
import { SheetTemplate } from "../components/Sheet";

export const PartA = () => (
  <SheetTemplate
    title="Sandy River Belle A"
    notes={`
      h   2;h  2;s  2,  4;b0040;
      p  2;b0000;m2;m0;
      h   2;h  2;s  2,  4;b0040;
      p  2;b0000;m   2;m   0;

      h   2;h  2;s  2,  4;b0040;
      p  2;b0000;m2;m0;
      d0, 5;d5, 5;d0, 5;d5, 5;
      d0, 0;s  2,  4;m  0;b0000
    `}
  />
);

export const PartB = () => (
  <SheetTemplate
    title="Sandy River Belle B"
    notes={`
      b0;b5;d 5,  7;b 5;
      m9;d9, 8;d7, 8;d9, 8;
      b0;b5;d 5,  7;b 5;
      d 7,  9;b 7;m7;b7777;

      b0;b5;d 5,  7;b 5;
      m9;d9, 8;d7, 8;d9, 8;
      d0, 5;d5, 5;d0, 5;d5, 5;
      d0, 0;s  2,  4;m  0;b0000
    `}
  />
);

const SandyRiverBelle = () => (
  <>
    <PartA />
    <PartB />
  </>
);

export default SandyRiverBelle;

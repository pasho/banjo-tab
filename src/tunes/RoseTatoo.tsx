import React from "react";
import { Sheet } from "../components/Sheet";

const notes = `
  Am:m  2;b2122;m  2;b  0;
  m  2;b  0;m  2;b 0;
  C:m 1;b2102;m 1;m0;
  h0,2;b2102;p2,0;b 1;
  G:m0;b0000;m0;m 1;
  b0;b2;b0;b 1;
  Am:m 1;b2122;m 0;b2022;
  m  2;b2122;m 2;b2122
`;

export default () => (
  <Sheet {...{ title: "Rose Tattoo", tuning: "gDGBd", meter: 4, notes }} />
);

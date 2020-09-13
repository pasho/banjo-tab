import React, { useEffect } from "react";
import { Vex, Artist, VexTab } from "vextab";

const render = () => {
  const Renderer = Vex.Flow.Renderer;

  const artist = new Artist(10, 10, 700, { scale: 0.8 });
  const tab = new VexTab(artist);

  const renderer = new Renderer(
    document.getElementById("vex"),
    Renderer.Backends.SVG
  );

  const input = `
    options tab-stems=true tab-stem-direction=down 
    tabstave key=G notation=true strings=5 tuning=D/5,B/4,G/4,D/4,G/5 
    notes :q (1/1.2/1) :8 0h2/3 1/1
  `;
  console.log(JSON.stringify(input));
  tab.parse(input);
  artist.render(renderer);
};

export default () => {
  useEffect(() => render(), []);
  return <div id="vex"></div>;
};

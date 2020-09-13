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

  const showNotes = false;

  const input = `
    options tab-stems=true tab-stem-direction=down scale=0.75 width=1200
    tabstave notation=${showNotes} strings=5 tuning=D/5,B/4,G/4,D/4,G/5 
    notes :q 2/4
    notes =|: :8 2/1-0/5 2p0/1 1p0/2 :q 2/3 |
    notes :8 2/3-1/2 0/1-2/3 0h2/3 2p0/4 |
    notes :q 2/4 :8 (2/1.1/2.0/3.2/4)-0/5 0h2/4 (2/1.1/2.0/3.2/4)-0/5 =:|
    
    options space=40
    tabstave notation=${showNotes} strings=5 tuning=D/5,B/4,G/4,D/4,G/5 
    notes =|: :8 0/1-0/5 0/1-1/2 :q 3/4 :8 2/3-1/2 |
    notes :8 2/1-0/5 0/1-1/2 :q 3/4 :8 2/3-1/2 |
    notes :8 0/1-0/5 2p0/3 0-0/3 2p0/3 | 
    notes :q 2/3 :8 (2/1.1/2.2/3.2/4)-0/5 0h2/3 (2/1.1/2.2/3.2/4)-0/5 |
    notes :8 1p0/2 :h 2/3 =:|
    text .1,|,:w, ,|, ,|, ,|1., ,|2.,:h, ,|
  `;
  tab.parse(input);
  artist.render(renderer);
};

export default () => {
  useEffect(() => render(), []);
  return <div id="vex"></div>;
};

import React, { useEffect } from "react";
import { Vex, Artist, VexTab } from "vextab";
import { useSettings } from "./SettingsContext";

const Renderer = Vex.Flow.Renderer;
const artist = new Artist(10, 10, 700, { scale: 0.8 });
const tab = new VexTab(artist);

const tabStaveTemplate = (
  space: number,
  showNotes: boolean,
  tuning: string,
  time: string,
  content: string
) => `
options space=${space}
tabstave time=${time} notation=${showNotes} strings=5 tuning=${tuning}
${content}`;

const VexTabSheet = ({
  staves,
  space,
  tuning,
  time,
}: {
  staves: string[];
  space?: number;
  tuning?: string;
  time?: string;
}) => {
  const { showNotes } = useSettings();
  useEffect(() => {
    const element = document.getElementById("vex")!;
    element.innerHTML = "";
    const renderer = new Renderer(element, Renderer.Backends.SVG);

    const input = `
      options tab-stems=true tab-stem-direction=down scale=0.75 width=1200
      ${staves
        .map((stave) =>
          tabStaveTemplate(
            space ?? 60,
            showNotes ?? false,
            tuning ?? "D/5,B/4,G/4,D/4,G/5",
            time ?? "4/4",
            stave
          )
        )
        .join("\n")}
    `;

    tab.reset();
    artist.reset();
    tab.parse(input);
    artist.render(renderer);
  }, [staves, tuning, showNotes, space, time]);
  return <div id="vex"></div>;
};

export default VexTabSheet;
